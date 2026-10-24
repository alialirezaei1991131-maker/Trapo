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
  EA.APP = { name: 'ایمنا', key: 'imena', title: 'ایمنا • ترمینولوژی خون، لنف و ایمنی' };

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
    name: 'ایمنا', key: 'imena', title: 'ایمنا • ترمینولوژی خون، لنف و ایمنی', certCode: 'IM',
    subject: 'ترمینولوژی پزشکی خون، دستگاه لنفاوی و ایمنی',
    kicker: '🩸 ترمینولوژی پزشکی: خون، دستگاه لنفاوی و ایمنی',
    hello: 'سلام، من <b>ایمنا</b> هستم؛',
    landP: () => `سلام، من <b>ایمنا</b> هستم؛ گلبول قرمزی با سپر ایمنی! این‌جا واژه‌ها را حفظ نمی‌کنی؛ <b>رمزگشایی</b>‌شان می‌کنی: ریشه، پیشوند و پسوند را می‌شناسی و هر واژه تازه را خودت می‌خوانی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 45)} تصویر از منابع بالینی، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'ایمنا ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا مرجع آزمایشگاه نیست.',
    eyes: 'ده‌ها تصویر بالینی و شکل آموزشی؛ از لام خون و سلول داسی تا گره لنفاوی و راش لوپوس.',
    outcomes: [
          'هر واژه خون، لنف و ایمنی را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
          'اجزای خون، انواع گلبول‌ها و خون‌سازی را با واژه‌های درست توصیف کنی',
          'مراحل انعقاد، گروه‌های خونی و انواع انتقال خون را بشناسی',
          'اندام‌های لنفاوی و بیماری‌هایشان را از لنفادنوپاتی تا لنفوم نام ببری',
          'ایمنی ذاتی و اکتسابی، آنتی‌بادی‌ها، آلرژی و خودایمنی را توضیح دهی',
          'برگه CBC، اختصارهای آزمایشگاهی و مفاهیم ICU مثل SIRS و سپسیس را بخوانی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، واژه‌های خون و ایمنی را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من ایمنا هستم؛ گلبول قرمزی که سپر ایمنی دارد 🩸🛡️ اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «خون و سلول‌ها» بهترین شروع است؛ ریشه‌های پایه آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'واژه <b dir="ltr">thrombocytopenia</b> یعنی…',
    fig: { a: ['cell-platelet'], l: ['thrombocyte = platelet'] },
    opts: ['کاهش تعداد پلاکت‌ها', 'افزایش تعداد پلاکت‌ها', 'تخریب لخته خون', 'تشکیل لخته در رگ'],
    why: `${EA.K.wb('thromb/o', 'cyt/o', '-penia')}<br><b>thromb/o</b> = لخته، <b>cyt/o</b> = سلول، <b>-penia</b> = کمبود. «سلول لخته» همان پلاکت (ترومبوسیت) است؛ پس <b>کمبود پلاکت</b>. معنی را از پسوند شروع کن!`
  }),
    titles: ['قطره تازه', 'پلاسمای کنجکاو', 'گلبول کوشا', 'پلاکت بیدار', 'نگهبان لنف', 'شکارچی آنتی‌ژن', 'رمزگشای ریشه‌ها',
    'استاد CBC', 'فرمانده لنفوسیت‌ها', 'معمار هموستاز', 'کارآگاه آنمی', 'سپهسالار ایمنی', 'استاد واژه‌سازی', 'افسانه هماتولوژی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش هماتولوژی'],
    firstBadge: ['🩸', 'اولین قطره'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], hb: ['🩸', 'خون‌شناس'], co: ['🧷', 'معمار لخته'], ly: ['💧', 'نگهبان لنف'], im: ['🛡️', 'سپر ایمنی'], dx: ['🔬', 'کارآگاه آزمایشگاه'] },
    confetti: ['#C8243F', '#12A594', '#FFC800', '#18A6D9', '#7B5CE0', '#FF7A45', '#E5476B', '#58CC02'],
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
  EA.TERMS_RAW = [["acquired active immunity","","Immunity developed either by having a disease and producing natural antibodies to it or by being vaccinated against the disease.","ایمنی فعال اکتسابی","im","",[]],
["acquired immunity","uh-KWIRE-duh ih-MYOO-ni-tee","resistance resulting from previous exposure to an infectious agent","ایمنی اکتسابی","im","",[]],
["acquired immunodeficiency syndrome","ă-KWĪRD ĭm-ŪN dē-FĬSH-ĕn-sē SĬN-drōm","A transmissible infection/syndrome caused by the human immunodeficiency virus (HIV) that suppresses cellular immunity, leaving the host susceptible to opportunistic infections and malignancies.","سندرم نقص ایمنی اکتسابی (ایدز)","im","Pathology_and_Disorders",["AIDS","HIV"]],
["acquired passive immunity","","Immunity provided in the form of antibodies or antitoxins that have been developed in another person or another species.","ایمنی غیرفعال اکتسابی","im","",[]],
["adenoids","AD-eh-noids","pharyngeal tonsils","آدنوئیدها (لوزه سوم)","ly","",[]],
["adenopathy","ă-dĕ-NŎP-ă-thē","disease of a gland","آدنوپاتی (بیماری غدد)","ly","",[]],
["agglutination","ă-glū-tĭ-NĀ-shŭn","The process by which cells or particles adhere and form into clumps in the presence of specific antibodies.","آگلوتیناسیون (تجمع و چسبندگی سلولی)","co","Pathology_and_Disorders",[]],
["agglutinogen","ă-glū-TĬN-ō-jĕnz","Substances that cause agglutination.","آگلوتینوژن","co","",[]],
["agranulocyte","ā-GRĂN-yū-lō-sīts","A white blood cell that does not have visible granules in its cytoplasm; agranulocytes include lymphocytes and monocytes","آگرانولوسیت (گلبول‌های سفید بدون دانه)","hb","",[]],
["agranulocytosis","a-gran-u-lo-si-TO-sis","A condition involving a decrease in the number of granulocytes in the blood; also called granulocytopenia","آگرانولوسیتوز (کاهش گرانولوسیت‌ها)","hb","",[]],
["AIDS-related complex","","Early stage of AIDS; there is a positive test for virus, but only mild symptoms of weight loss, fatigue, skin rash, and anorexia.","کمپلکس مرتبط با ایدز","im","",["ARC"]],
["albumin","ăl-BYŪ-mĭn","A plasma protein that helps regulate water movement between blood and tissue.","آلبومین (پروتئین تنظیم‌کننده آب پلاسما)","hb","",[]],
["allergen","ĂL-ĕr-jĕn","Any substance that induces an allergic or hypersensitive response, such as pollen, dust, dander, and bee stings.","آلرژن (ماده حساسیت‌زا)","im","Pathology_and_Disorders",[]],
["allergic asthma","ah-LER-jik / AZ-mah","Inflammation and narrowing of airways triggered by inhaling an allergen; symptoms include wheezing, coughing, and shortness of breath.","آسم آلرژیک","im","",[]],
["allergic rhinitis","ah-LER-jik / rye-NYE-tis","Allergic reaction caused by inhaling an allergen such as pollen, animal dander, or mold; symptoms may include sneezing, runny nose, congestion, post-nasal drip, cough, and itchy, watery eyes; commonly called hay fever.","رینیت آلرژیک (تب یونجه)","im","",[]],
["allergist","AL-er-jist","a medical practitioner who specializes in the diagnosis and treatment of allergies","متخصص آلرژی","im","",[]],
["allergy","ĂL-ĕr-jē","An extreme immune overresponse or hypersensitivity to a normally harmless substance.","آلرژی (حساسیت)","im","Pathology_and_Disorders",[]],
["allergy shots","","Type of immunotherapy; person receives regular injections of tiny amounts of allergen to which he or she is allergic to stimulate immune system.","آمپول‌های آلرژی (واکسن حساسیت)","im","",[]],
["anaphylaxis","ăn-ă-fĭ-LĂK-sĭs","Life-threatening condition resulting from a severe allergic reaction; circulatory and respiratory problems occur, including respiratory distress, hypotension, edema, tachycardia, and convulsions; also called anaphylaxis.","شوک آنافیلاکتیک (آنافیلاکسی)","im","Pathology_and_Disorders",[]],
["anemia","ă-NĒ-mē-ă","A condition or disorder characterized by a deficiency in the number of red blood cells or hemoglobin content, resulting in less oxygen reaching the tissues.","آنمی (کم‌خونی)","hb","Pathology_and_Disorders",["CBC","Hgb"]],
["angioedema","an-je-o-eh-DE-mah","A localized edema with large hives (wheals) similar to urticaria but involving deeper layers of the skin and subcutaneous tissue","آنژیوادم (ادم عروقی)","im","",[]],
["anisocytosis","an-eye-soh-sigh-TOH-sis","Increased variation in the size of cells, especially red blood cells.","آنیزوسیتوز (نابرابری اندازه گلبول‌ها)","hb","",[]],
["antibody","ĂN-tē-bŏd-ēz","Proteins produced by B cells (plasma cells) in response to an antigen that attach to foreign cells, labeling them for destruction.","آنتی‌بادی / ایمونوگلوبولین (پادتن‌ها)","im","Anatomy_and_Physiology",["Ig","IgA","IgD","IgE","IgG","IgM","Ab"]],
["anticoagulant","ĂN-tē-kō-ĂG-yū-lĕnts","Prevents blood clot formation; commonly referred to as blood thinner.","داروهای ضدانعقاد","co","",[]],
["antigen","ĂN-tĭ-jĕnz","A foreign substance or agent that provokes the body's immune system to produce antibodies.","آنتی‌ژن (پادگن)","im","Anatomy_and_Physiology",["Ag"]],
["antigen-presenting cell","","Immune cell that takes in a foreign antigen, processes it, and presents it on the cell surface in combination with the body's own proteins, thus activating a T cell; examples are dendritic cells and macrophages, which are descendants of monocytes","سلول ارائه‌دهنده آنتی‌ژن","im","",["APC"]],
["antihemorrhagic","an-tye-hem-eh-RAJ-ik","Prevents or stops hemorrhaging; hemostatic agent.","ضد خونریزی (هموستاتیک)","co","",[]],
["antihistamine","an-tih-HIS-tah-meme","A drug that counteracts the effects of histamine and is used to treat allergic reactions","آنتی‌هیستامین","im","",[]],
["antinuclear antibody test","an-tee-NOO-klee-ar / AN-tee-bod-ee","Blood test to assist in diagnosis of autoimmune diseases; presence of these antibodies in blood indicates that person’s immune system is attacking body’s cells.","تست آنتی‌بادی ضدهسته‌ای (ANA)","dx","",["ANA"]],
["antiretroviral","ăn-tĭ-rĕt-rō-VĪ-răl","drug treatment for a viral infection","ضدرتروویروسی","dx","",[]],
["antitoxin","ăn-tē-TŎK-sĭn","Antibody directed against specific toxins.","آنتی‌توکسین (ضدسم)","im","",[]],
["antiviral","an-tee-VAHY-ruhl","drug used to treat various viral infections or conditions","ضدویروس","dx","",[]],
["apheresis","af-eh-RE-sis","A procedure in which blood is withdrawn, a portion is separated and retained, and the remainder is returned to the donor; apheresis may be used as a suffix with a root meaning the fraction retained, such as plasmapheresis, leukapheresis","آفرزیس (خون‌گیری و جداسازی)","co","",[]],
["aplastic anemia","ā-PLĂS-tĭk","Severe form of anemia that develops as a consequence of loss of functioning red bone marrow; results in decrease in number of all formed elements; treatment may eventually require bone marrow transplant.","آنمی آپلاستیک","hb","Pathology_and_Disorders",[]],
["appendix","ah-PEN-dicks","tube-shaped sac attached to an opening into the large intestine that plays a role in immunity","آپاندیس","ly","",[]],
["arginine","AR-jih-neen","An amino acid that acts as a precursor for nitric oxide synthesis, playing a role in immune function and wound healing.","آرژینین (اسید آمینه پیش‌ساز نیتریک اکساید)","dx","Immunonutrition_and_Pharmacology",["Arg"]],
["artificial immunity","ahr-tuh-FISH-uhl ih-MYOO-ni-tee","immunization; immunity acquired from a vaccination","ایمنی مصنوعی","im","",[]],
["autoimmune disease","ăw-tō-ĭ-MYŪN di-ZĒZ-ĕz","Disease resulting from body’s immune system attacking its own cells as if they were pathogens; examples include systemic lupus erythematosus, rheumatoid arthritis, and multiple sclerosis.","بیماری خودایمنی","im","Pathology_and_Disorders",[]],
["autoimmune responses","","Responses that result from the body’s need to fight an actual infection, during which the immune system becomes overactive.","پاسخ‌های خودایمنی","im","",[]],
["autologous transfusion","aw-TOL-o-gus","Procedure for collecting and storing patient’s own blood several weeks prior to actual need; can then be used to replace blood lost during surgical procedure.","انتقال خون اتولوگ (خون خود بیمار)","co","",[]],
["B cell","LĬM-fō-sīts","A type of lymphocyte that matures in bone marrow and differentiates into plasma cells to manufacture and secrete antibodies.","لنفوسیت B (سلول B)","im","Anatomy_and_Physiology",[]],
["band cell","","An immature neutrophil with a nucleus in the shape of a band; also called a stab cell; band cell counts are used to trace infections and other diseases","سلول باند (نوتروفیل نابالغ)","hb","",[]],
["basophil","BĀ-sō-fĭlz","A granular leukocyte that stains strongly with basic dyes; active in allergic reactions","بازوفیل","hb","",[]],
["basophilic","bay-soh-FILL-ik","Pertaining to [a leukocyte] that attracts a basic pH stain.","بازوفیلیک (متمایل به رنگ‌های بازی)","hb","",[]],
["Bence Jones protein","","A protein that appears in the urine of patients with multiple myeloma","پروتئین بنس جونز","dx","",[]],
["bilirubin","bil-ih-RU-bin","A pigment derived from the breakdown of hemoglobin and eliminated by the liver in bile","بیلی‌روبین","hb","",[]],
["blood","blud","The fluid that circulates in the cardiovascular system (roots: hem/o, hemat/o)","خون","hb","",[]],
["blood analyzer","","Automated machine that analyzes different characteristics of blood specimen, such as complete blood count, erythrocyte sedimentation rate, and blood-clotting tests.","دستگاه تحلیل‌گر خون (اتوآنالایزر خونی)","dx","",[]],
["blood culture and sensitivity","","Sample of blood is incubated in laboratory to check for bacterial growth; if bacteria are present, they are identified and tested to determine to which antibiotics they are sensitive.","کشت خون و آنتی‌بیوگرام","dx","",["C&S"]],
["blood transfusion","trans-FYOO-zhun","Administration of whole blood or a component, such as packed red cells, to replace blood lost through trauma, surgery, or disease","انتقال خون","co","",[]],
["bone marrow aspiration","ăs-pĭ-RĀ-shŭn","Removal of a small amount of tissue (bone marrow biopsy) to diagnose blood disorders (e.g., anemias), cancers, or infectious diseases or to gather cells for later infusion into a patient (bone marrow transplantation)","آسپیراسیون مغز استخوان","dx","",[]],
["bone marrow transplant","","Diseased bone marrow is destroyed by irradiation and chemotherapy and replaced from a healthy donor to simulate production of normal blood cells; used to treat aplastic anemia, leukemia, and certain cancers","پیوند مغز استخوان","dx","",["BMT"]],
["candidiasis","","Opportunistic infection caused by the fungus Candida albicans, affecting the digestive tract, respiratory tract, skin, and some reproductive organs.","کاندیدیازیس","im","",[]],
["capillaries","KĂP-ĭ-lār-ēz","Microscopic blood vessels that connect the ends of the smallest arteries (arterioles) with the smallest veins (venules) of the circulatory system","مویرگ‌ها","ly","",[]],
["carbapenem-resistant Enterobacteriaceae infection","kar-bah-PEN-em / ree-ZISS-tent / en-ter-oh-bak-teer-ee-AY-see-ee","Infection by group of bacteria that have resistance to powerful group of antibiotics called carbapenems; almost all infections occur in healthcare settings.","عفونت انتروباکتریاسه مقاوم به کارباپنم","dx","",["CRE"]],
["CD4+ T lymphocyte count","","A count of the T cells that have the CD4 receptors for the AIDS virus (HIV); a count of less than 200/μL of blood signifies severe immunodeficiency","شمارش لنفوسیت‌های T دارای CD4","dx","",[]],
["cell-mediated immunity","","A type of acquired active immunity provided by the action of T cells.","ایمنی با واسطه سلولی","im","",[]],
["chemotherapy","KEE-moh-ther-ah-pee","treatment of malignancies using chemical agents and drugs","شیمی‌درمانی","dx","",[]],
["Clostridium difficile infection","klaw-STRIH-dee-um / dif-ee-SEEL","Infection with C. diff bacteria causes inflammation of colon; most commonly occurs in persons with conditions requiring extended use of antibiotics.","عفونت کلستریدیوم دیفیسیل","dx","",[]],
["coagulants","kō-ĂG-yū-lĕnts","Clotting agents to aid in blood clotting.","داروهای منعقدکننده","co","",[]],
["coagulate","koh-AG-yoo-late","To convert from a liquid to a gel or solid, as in blood coagulation.","منعقد شدن (لخته شدن)","co","",[]],
["coagulation","kō-ăg-yū-LĀ-shŭn","The process of blood clotting to stop bleeding.","کوآگولاسیون (انعقاد خون)","co","Anatomy_and_Physiology",["PT","PTT"]],
["complement","COM-pleh-ment","A group of plasma enzymes that interacts with antibodies","کمپلمان (مکمل)","im","",[]],
["complete blood count","","Combination of blood tests including red blood cell count (RBC), white blood cell count (WBC), hemoglobin (Hgb), hematocrit (Hct), white blood cell differential, and platelet count.","شمارش کامل سلول‌های خونی","dx","",["CBC"]],
["contact dermatitis","der-mah-TYE-tis","Skin irritation caused by skin coming into direct contact with an allergen; symptoms may include redness, itching, rash, and blisters.","درماتیت تماسی","im","",[]],
["Cooley anemia","","A form of thalassemia (hereditary anemia) that affects production of the β (beta) hemoglobin chain; thalassemia major","آنمی کولی (تالاسمی ماژور)","hb","",[]],
["Coombs test","","A test for detection of antibodies to red blood cells, such as those appearing in cases of autoimmune hemolytic anemias","تست کومبس","dx","",[]],
["corpuscle","KOR-pus-l","A small mass or body; a blood corpuscle is a blood cell","گلبول (پیکره کوچک)","hb","",[]],
["corticosteroids","kor-tih-ko-STER-oyds","Natural or synthetic adrenal cortex hormone; has very strong anti-inflammatory properties; particularly useful in treating autoimmune diseases.","کورتیکواستروئیدها","dx","",[]],
["cross-matching","","Testing the compatibility of donor and recipient blood in preparation for a transfusion; donor red cells are mixed with recipient serum to look for an immunologic reaction; similar tests are done on tissues before transplantation","کراس مچ (سازگاری متقاطع)","co","",[]],
["cryoprecipitate","kri-o-pre-SIP-ih-tate","A sediment obtained by cooling; the fraction obtained by freezing blood plasma contains clotting factors","کرایوپرسیپیتات (رسوب سرد)","co","",[]],
["cytokine storm","SIGH-toe-kine storm","A severe immune reaction in which the body releases too many cytokines into the blood too quickly, leading to multi-organ failure.","طوفان سایتوکینی (التهاب کنترل‌نشده)","dx","Pathology_and_Disorders",["SIRS","MODS"]],
["cytokines","SIGH-toh-kighnz","proteins that signal cells to start the immune response. Examples are interferons and interleukins.","سیتوکین‌ها","im","",[]],
["cytomegalovirus","","Opportunistic infection caused by Herpesviridae that can infect various cells or organs (e.g., the eyes); causes swelling.","سیتومگالوویروس","im","",[]],
["cytoplasm","SĪ-tō-plazm","The solution that fills the cell and that is enclosed by the cell membrane.","سیتوپلاسم","hb","",[]],
["cytotoxic T cell","sī-tō-TŎK-sĭk sĕlz","CD8 cells that help in the destruction of infected cells.","سلول‌های سیتوتوکسیک (سلول‌کش)","im","",[]],
["delayed hypersensitivity reaction","","An allergic reaction involving T cells that takes at least 12 hours to develop; examples are various types of contact dermatitis, such as poison ivy or poison oak; the tuberculin reaction (test for TB); and rejections of transplanted tissue","واکنش ازدیاد حساسیت تأخیری","im","",[]],
["desensitization","de-sen-sih-tih-ZA-shun","Treatment of allergy by small injections of the offending allergen, causing an increase of antibody to destroy the antigen rapidly on contact","حساسیت‌زدایی","im","",[]],
["disseminated intravascular coagulation","","Widespread clot formation in the microscopic vessels; may be followed by bleeding caused by depletion of clotting factors","انعقاد داخل عروقی منتشر (DIC)","co","",["DIC"]],
["dyscrasia","dĭs-KRĀ-zē-ă","A general term indicating the presence of a disease affecting the blood, often with abnormal material present.","دیسکرازی (اختلال خونی)","hb","Pathology_and_Disorders",[]],
["dyspnea","dĭsp-NĒ-ă","difficult breathing","تنگی نفس","dx","",[]],
["ecchymosis","ek-ih-MO-sis","A collection of blood under the skin caused by leakage from small vessels","اکیموز (کبودی)","co","",[]],
["edema","eh-DEE-mah","Pooling of water in body tissues caused when too much water escapes from the blood.","ادم (خیز یا ورم)","ly","",[]],
["electrolyte","e-LEK-tro-lite","A substance that separates into charged particles (ions) in solution; a salt; term also applied to ions in body fluids","الکترولیت","hb","",[]],
["electrophoresis","ē-lĕk-trō-FŌR-ē-sĭs","Separation of particles in a liquid by application of an electrical field; used to separate components of blood","الکتروفورز (جداسازی پروتئین‌ها با جریان الکتریکی)","dx","",[]],
["elephantiasis","el-eh-fan-TYE-ah-sis","lymphatic disease caused by filaria (parasitic roundworm) that is characterized by swelling of the legs and male scrotum","الفانتیازیس (پیل‌پایی)","ly","",[]],
["ELISA","ĬM-yū-nō-SŌR-bent, ĕ-LĪ-ză, ĕ-LĪ-să","Enzyme-linked immunosorbent assay; a highly sensitive immunologic test used to diagnose HIV infection, hepatitis, and Lyme disease, among others","الایزا (آزمایش ایمونوسوربنت متصل به آنزیم)","dx","",[]],
["embolectomy","ĕm-bō-LĔK-tō-mē","excision, removal of an embolus (plug)","آمبولکتومی (برداشتن آمبولی)","co","",[]],
["enzyme immunoassay","ĬM-yū-nō-ĂS-ā, ĭm-YŪ-nō-ĂS-ā","A blood serum test for HIV and other antibodies.","ایمونوآسی آنزیمی","dx","",["EIA"]],
["eosinophil","ē-ō-SĬN-ō-fĭlz","A granular leukocyte that stains strongly with acidic dyes; active in allergic reactions and defense against parasites","ائوزینوفیل","hb","",[]],
["eosinophilic","ee-oh-sin-oh-FILL-ik","Pertaining to [a leukocyte] that attracts a rosy red stain.","ائوزینوفیلیک (متمایل به رنگ‌های اسیدی/قرمز)","hb","",[]],
["epinephrine","ep-ih-NEF-rin","A powerful stimulant produced by the adrenal gland and sympathetic nervous system; activates the cardiovascular, respiratory, and other systems needed to meet stress; used as a drug to treat severe allergic reactions and shock; also called adrenaline","اپینفرین (آدرنالین)","im","",[]],
["erythema","","Redness of the skin.","اریتما (قرمزی پوست)","hb","",[]],
["erythremia","er-ih-THREE-mee-ah","Abnormal increase in the number of red blood cells.","اریترمی (افزایش غیرطبیعی گلبول‌های قرمز)","hb","",[]],
["erythroblastosis fetalis","ĕ-RĬTH-rō-blăs-TŌ-sĭs fē-TĂL-ĭs","Disease that results from incompatibility between the blood of a mother and her fetus, usually involving Rh factor; also called erythroblastosis fetalis","اریتروبلاستوز جنینی (بیماری همولیتیک نوزادان)","co","",["HDN"]],
["erythrocyte","ĕ-RĬTH-rō-sīts","A red blood cell responsible for carrying oxygen and carbon dioxide using hemoglobin.","اریتروسیت (گلبول قرمز)","hb","Anatomy_and_Physiology",["RBC","Hgb","Hct"]],
["erythrocyte sedimentation rate","eh-RITH-roh-sight / sed-ih-men-TAY-shun","Blood test to determine rate at which mature red blood cells settle out of blood after addition of anticoagulant; indicates presence of inflammatory disease.","سرعت رسوب گلبول‌های قرمز (ESR)","dx","",["ESR"]],
["erythrocytic","eh-rith-roh-SIT-ik","Pertaining to a red blood cell.","مربوط به اریتروسیت (گلبول قرمز)","hb","",[]],
["erythrocytopenia","eh-rith-roh-sigh-toh-PEE-nee-ah","Decrease in the number of red blood cells. Also known as erythropenia.","اریتروسیتوپنی (کاهش گلبول‌های قرمز)","hb","",[]],
["erythrocytosis","eh-rith-ro-si-TO-sis","Increase in the number of red cells in the blood; may be normal, such as to compensate for life at high altitudes, or abnormal, such as in cases of pulmonary or cardiac disease","اریتروسیتوز (افزایش گلبول‌های قرمز)","hb","",[]],
["erythropenia","ĕ-rĭth-rō-PĒ-nē-ă","A disorder with an abnormally low number of red blood cells.","اریتروپنی (کاهش گلبول‌های قرمز)","hb","",[]],
["erythropoiesis","eh-rith-roh-poy-EE-sis","Production of red blood cells.","اریتروپوئز (تولید گلبول قرمز)","hb","",[]],
["erythropoietin","ĕ-rĭth-rō-POY-ĕ-tĭn","A hormone produced in the kidneys that stimulates red blood cell production in the bone marrow; this hormone is now made by genetic engineering for clinical use","اریتروپویتین (هورمون خونساز)","hb","Anatomy_and_Physiology",["EPO"]],
["Fanconi syndrome","fan-KO-ne","Congenital aplastic anemia that appears between birth and 10 years of age; may be hereditary or caused by damage before birth, as by a virus","سندرم فانکونی","hb","",[]],
["ferritin","FER-ih-tin","An intracellular protein that stores iron and releases it in a controlled fashion; also acts as an acute-phase reactant elevated in inflammation.","فریتین (پروتئین ذخیره آهن)","dx","Laboratory_and_Diagnostics",[]],
["fibrin","FI-brin","The protein that forms a clot in the blood coagulation process","فیبرین","co","",[]],
["fibrin clot","FĪ-brĭn klot","The clot formed by the combination of thromboplastin, calcium, and clotting factors.","لخته فیبرینی","co","",[]],
["fibrinogen","fī-BRĬN-ō-jĕn","A plasma protein essential for blood coagulation.","فیبرینوژن (پروتئین پیش‌ساز لخته)","co","",[]],
["fibrinolytic","fye-brin-oh-LIT-ik","Able to dissolve existing blood clots.","فیبرینولیتیک (حل‌کننده لخته)","co","",[]],
["fibrinous","FYE-brin-us","Pertaining to fibers.","فیبرینی (رشته‌ای)","co","",[]],
["formed elements","","The solid portion of the blood produced in the bone marrow, consisting of red blood cells, white blood cells, and platelets.","عناصر سلولی خون","hb","",[]],
["gamma globulin","GĂ-mă GLŎB-yū-lĭnz","A preparation of collected antibodies given to prevent or lessen certain diseases, such as hepatitis A, varicella, and rabies.","گاما گلوبولین (پادتن‌ها)","im","",[]],
["globin","GLŌ-bĭn","A protein that makes up part of hemoglobin.","گلوبین (پروتئین)","hb","",[]],
["globulin","GLŎB-yū-lĭn","Plasma proteins including alpha, beta (which transport lipids), and gamma types.","گلوبولین (نوعی پروتئین پلاسما)","hb","",[]],
["glutamine","GLOO-tah-meen","A conditionally essential amino acid during critical illness; serves as a primary cellular fuel for enterocytes and lymphocytes.","گلوتامین (اسید آمینه تعدیل‌کننده ایمنی)","dx","Immunonutrition_and_Pharmacology",["Gln"]],
["graft versus host disease","","An immunologic reaction of transplanted lymphocytes against tissues of the host; a common complication of bone marrow transplantation","بیماری پیوند علیه میزبان","im","",["GVHR","GVHD"]],
["granulocyte","GRĂN-yū-lō-sīts","A white blood cell that has visible granules in its cytoplasm; granulocytes include neutrophils, basophils, and eosinophils","گرانولوسیت (گلبول‌های سفید دانه‌دار)","hb","",[]],
["hairy cell leukemia","","A form of leukemia in which cells have filaments, making them look hairy","لوسمی سلول مویی","hb","",[]],
["helper T cell","","CD4 cells that stimulate the immune response.","سلول‌های کمکی (هلپر)","im","",[]],
["hematic","hee-MAT-ik","Pertaining to blood.","خونی (مربوط به خون)","hb","",[]],
["hematinic","hee-mah-TIN-ik","Increases number of erythrocytes or amount of hemoglobin in blood.","هماتینیک (خونساز)","dx","",[]],
["hematocrit","HĒ-mă-tō-krĭt","Measurement of the percentage or volume of packed red blood cells within the total volume of blood.","هماتوکریت","hb","Laboratory_and_Diagnostics",["HCT","PCV","Hct"]],
["hematologist","hee-mah-TAHL-oh-jist","a medical practitioner who specializes in the diagnosis and treatment of blood disorders","هماتولوژیست (خون‌شناس)","hb","",[]],
["hematology","hee-mah-TALL-oh-jee","Branch of medicine specializing in treatment of diseases and conditions of blood; physician is a hematologist.","هماتولوژی (خون‌شناسی)","hb","",[]],
["hematoma","hēm-ă-TŌ-mă","Collection of blood under skin as result of blood escaping into tissue from damaged blood vessels; commonly referred to as a bruise.","هماتوم (تجمع خون در بافت)","co","",[]],
["hematopoiesis","hē-mă-tō-poy-Ē-sĭs","The production and development of all blood cells, normally occurring in the bone marrow.","هماتوپوئز (خونسازی)","hb","Anatomy_and_Physiology",[]],
["heme","hēm","A pigment containing iron, part of hemoglobin.","هِم (رنگدانه آهن‌دار)","hb","",[]],
["hemocytoblast","hee-moh-SIGHT-oh-blast","An immature blood cell that can develop into any type of mature blood cell. Also known as stem cells.","هموسیتوبلاست (سلول بنیادی خون‌ساز)","hb","",[]],
["hemodialysis","HĒ-mō-dī-ĂL-ĭ-sĭs","External dialysis performed by separating solid substances and water from the blood.","همودیالیز","dx","",[]],
["hemoglobin","HĒ-mō-glō-bĭn","The iron-containing protein pigment within red blood cells that transports oxygen and carbon dioxide.","هموگلوبین","hb","Laboratory_and_Diagnostics",["Hgb","Hb"]],
["hemolysis","hē-MŎL-ĭ-sĭs","The rupture or destruction of red blood cells and the release of hemoglobin.","همولیز (تخریب گلبول‌های قرمز)","hb","Pathology_and_Disorders",[]],
["hemolytic anemia","hee-moh-LIT-ik / ah-NEE-mee-ah","Anemia that develops as result of destruction of erythrocytes.","آنمی همولیتیک (کم‌خونی ناشی از تخریب گلبول قرمز)","hb","",[]],
["hemolytic reaction","hee-moh-LIT-ik","Destruction of patient’s erythrocytes that occurs when receiving a transfusion of incompatible blood type; also called transfusion reaction.","واکنش همولیتیک","co","",[]],
["hemophilia","hē-mō-FĬL-ē-ă","Hereditary blood disease in which blood-clotting time is prolonged due to lack of one vital clotting factor; transmitted by sex-linked trait from females to males, appearing almost exclusively in males.","هموفیلی","co","Pathology_and_Disorders",[]],
["hemophobia","hē-mō-FŌ-bē-ă","fear of blood","هموفوبیا (ترس از خون)","hb","",[]],
["hemopoietic stem cell","he-mo-poy-EH-tik","A primitive bone marrow cell that gives rise to all varieties of blood cells","سلول بنیادی خونساز","hb","",[]],
["hemorrhage","HEM-eh-rij","Blood flowing out of blood vessel (i.e., bleeding).","هموراژی (خونریزی)","co","",[]],
["hemorrhagic anemia","hem-o-RAJ-ik","Anemia that results from blood loss, as from an injury or internal bleeding","آنمی هموراژیک (کم‌خونی ناشی از خونریزی)","co","",[]],
["hemosiderosis","he-mo-sid-er-O-sis","A condition involving the deposition of an iron-containing pigment (hemosiderin) mainly in the liver and the spleen; the pigment comes from hemoglobin released from disintegrated red blood cells","هموسیدروز (رسوب آهن)","hb","",[]],
["hemostasis","hē-mō-STĀ-sĭs","The stoppage of bleeding or the stagnation of blood flow.","هموستاز (توقف خونریزی)","co","Anatomy_and_Physiology",[]],
["hemostatics","hē-mō-STĂT-ĭks","Medications to stop bleeding.","داروهای هموستاتیک (بندآورنده خون)","co","",[]],
["heparin","HĔP-ă-rĭn","A substance found throughout the body that inhibits blood coagulation; an anticoagulant","هپارین (ماده ضد انعقاد طبیعی)","co","",[]],
["hepcidin","HEP-sih-din","A liver-derived hormone that regulates iron homeostasis; elevated in critical illness causing iron sequestration.","هپسیدین (هورمون تنظیم‌کننده آهن)","dx","Anatomy_and_Physiology",[]],
["high-sensitivity C-reactive protein","","A highly sensitive marker of systemic inflammation and tissue damage, synthesized by the liver.","پروتئین واکنش‌گر C با حساسیت بالا","dx","Laboratory_and_Diagnostics",["hs-CRP"]],
["histamine","HĬS-tă-mēn","A substance involved in allergic reactions released by basophils.","هیستامین","im","",[]],
["histiocytic lymphoma","HĬS-tē-ō-SĪT-ĭk lĭm-FŌ-mă","A disease with malignant cells that resemble large macrophages called histiocytes.","لنفوم هیستیوسیتی","ly","",[]],
["HIV antigen/antibody immunoassay","im-yoo-noh-ASS-ay","Blood test for HIV infection; tests for both HIV antigens and antibodies.","ایمونواسی آنتی‌ژن/آنتی‌بادی HIV","dx","",[]],
["hives","","Appearance of wheals as part of allergic reaction.","کهیر","im","",[]],
["Hodgkin lymphoma","HŎJ-kĭn","Malignant disease originating in the lymphocytes (part of the body's immune system) that occurs most often in young adults and characterized by the presence of unique Reed-Sternberg cells (malignant cells) in the lymph nodes; also called Hodgkin disease","لنفوم هاجکین","ly","Pathology_and_Disorders",["HD"]],
["homeostasis","","Balanced yet varied state.","هومئوستاز (حفظ شرایط پایدار)","hb","",[]],
["homologous transfusion","ho-MOL-o-gus","Blood from animals of the same species, such as human blood used for transfusion from one person to another; blood used for transfusions must be compatible with the recipient's blood","انتقال خون همولوگ (از شخص دیگر)","co","",[]],
["human immunodeficiency virus","ĬM-yū-nō-dē-FĬSH-ĕn-sē VĪ-rŭs","The most widespread virus that attacks the immune system, spread by sexual contact, exchange of bodily fluids, or intravenous exposure.","ویروس نقص ایمنی انسانی (HIV)","im","Pathology_and_Disorders",["HIV","AIDS"]],
["humoral immunity","HYŪ-mōr-ăl ĭ-MYŪ-nĭ-tē","Immunity provided by plasma cells, which produce antibodies called immunoglobulins.","ایمنی هومورال (ایمنی مایع)","im","",[]],
["hyperchromia","high-per-KROH-mee-ah","Excessively pigmented (colored) red blood cells caused by high hemoglobin content.","هایپرکرومی (پررنگی گلبول‌های قرمز)","hb","",[]],
["hyperlipidemia","high-per-lip-ih-DEE-mee-ah","Condition of having too high a level of lipids such as cholesterol in bloodstream; risk factor for developing atherosclerosis and coronary artery disease.","هیپرلیپیدمی (چربی خون بالا)","hb","",[]],
["hypersensitivity","HĪ-pĕr-sĕn-sĭ-TĬV-ĭ-tē","An immunologic reaction to a substance that is harmless to most people; allergy","ازدیاد حساسیت (هایپرسنسیتیویتی)","im","",[]],
["hypersplenism","hī-pĕr-SPLĒN-ĭzm","Overactive spleen.","هایپراسپلنیسم (پرکاری طحال)","ly","",[]],
["hypochromia","high-poh-KROH-mee-ah","Underpigmented red blood cells caused by low hemoglobin content.","هیپوکرومی (کم‌رنگی گلبول‌های قرمز)","hb","",[]],
["hypochromic anemia","high-poh-KROHM-ik / ah-NEE-mee-ah","Anemia resulting from having insufficient hemoglobin in erythrocytes; named because hemoglobin molecule is responsible for dark red color of erythrocytes.","آنمی هیپوکرومیک (کم‌خونی با کاهش رنگدانه)","hb","",[]],
["idiopathic thrombocytopenic purpura","","A clotting disorder caused by destruction of platelets that usually follows a viral illness; causes petechiae and hemorrhages into the skin and mucous membranes","پورپورای ترومبوسیتوپنیک ایدیوپاتیک","co","",["ITP"]],
["immune response","ĭm-MŪN","Defense function of the body that protects it against invading pathogens, foreign tissues, and malignancies","پاسخ ایمنی","im","",[]],
["immunity","ĭ-MYŪ-nĭ-tē","The state of being protected against disease and the body's specific defenses that provide resistance to pathogens.","ایمنی","im","Anatomy_and_Physiology",[]],
["immunization","ĭm-ū-nĭ-ZĀ-shŭns","protection from communicable diseases by administration of a weakened or killed pathogen, or a protein of a pathogen, to cause the immune system to create antibodies for future protection; vaccination","ایمن‌سازی","im","",[]],
["immunodeficiency","ĭm-ū-nō-dĕ-FĬSH-ĕn-sē","Any of a group of diseases caused by a defect in the immune system and generally characterized by susceptibility to infections and chronic diseases","بیماری نقص ایمنی","im","",[]],
["immunogen","ĭ-MŪ-nō-jĕn","forming, producing, origin of immunity","ایمونوژن (مولد ایمنی)","im","",[]],
["immunoglobulin","ĬM-yū-nō-GLŎB-yū-lĭnz","An antibody; immunoglobulins fall into five classes, each abbreviated with a capital letter: IgG, IgM, IgA, IgD, IgE","ایمونوگلوبولین","im","",["Ig"]],
["immunologist","im-yoo-NOL-oh-jist","a medical practitioner specializing in the immune system","ایمونولوژیست (ایمنی‌شناس)","im","",[]],
["immunology","im-yoo-NALL-oh-jee","Branch of medicine concerned with diagnosis and treatment of infectious diseases and other disorders of immune system; physician is an immunologist.","ایمنی‌شناسی (ایمونولوژی)","im","",[]],
["immunosuppressant","ĭm-ū-nō-sū-PRĔS-ănts","Suppress the immune response to prevent organ rejection after transplantation or slow the progression of autoimmune disease","داروهای سرکوب‌کننده سیستم ایمنی","dx","",[]],
["immunosuppression","im-u-no-su-PRESH-un","Depression of the immune response; may be correlated with disease but also may be induced therapeutically to prevent rejection in cases of tissue transplantation","سرکوب ایمنی","im","",[]],
["immunosuppressive disease","ĬM-yū-nō-sŭ-PRĔS-ĭv di-ZĒZ","A disease that suppresses the ability of the immune system to defend against infection.","بیماری سرکوب‌کننده سیستم ایمنی","im","",[]],
["immunotherapy","IM-yoo-noh-thair-ah-pee","Giving patient injection of immunoglobulins or antibodies in order to treat disease; also includes treatments to boost activity of immune system.","ایمنی‌درمانی (ایمونوتراپی)","dx","",[]],
["infectious mononucleosis","mŏn-ō-nū-klē-Ō-sĭs","An acute infectious disease caused by Epstein-Barr virus (EBV); characterized by fever, weakness, lymphadenopathy, hepatosplenomegaly, and atypical lymphocytes","مونونوکلئوز عفونی","im","",[]],
["inflammation","in-flah-MAY-shun","Tissues’ response to injury from pathogens or physical agents; characterized by redness, pain, swelling, and feeling hot to the touch.","التهاب","im","",[]],
["interferons","ĭn-tĕr-FĒR-ŏnz","Proteins called lymphokines produced by T cells that have antiviral properties.","اینترفرون‌ها","im","",[]],
["interleukins","ĭn-tĕr-LŪ-kĭnz","Proteins called lymphokines produced by T cells that affect the actions of other cells in the body.","اینترلوکین‌ها","im","",[]],
["interstitial fluid","ĭn-tĕr-STĬSH-ăl","The fluid placed between the tissue spaces and cells.","مایع بینابینی","ly","Anatomy_and_Physiology",[]],
["intrinsic factor","In-TRIN-sik","A substance produced in the stomach that aids in the intestinal absorption of vitamin B12, necessary for the manufacture of red blood cells; lack of intrinsic factor causes pernicious anemia","فاکتور داخلی","hb","",[]],
["iron-deficiency anemia","","Anemia resulting from not having sufficient iron to manufacture hemoglobin.","آنمی فقر آهن","hb","",[]],
["Kaposi sarcoma","KĂP-ō-sē săr-KŌ-mă","Malignancy of connective tissue, including bone, fat, muscle, and fibrous tissue, that is commonly fatal (because the tumors readily metastasize to various organs) and closely associated with AIDS","سارکوم کاپوزی","im","",["KS"]],
["leukemia","lū-KĒ-mē-ă","Cancer located in red bone marrow tissue responsible for producing white blood cells; results in large number of abnormal and immature leukocytes circulating in bloodstream.","لوسمی (سرطان خون)","hb","Pathology_and_Disorders",["AML","CML","ALL","CLL"]],
["leukocyte","LŪ-kō-sīts","A white blood cell that functions as part of the immune system to fight infection.","لوکوسیت (گلبول سفید)","hb","Anatomy_and_Physiology",["WBC","PMN"]],
["leukocytic","loo-koh-SIT-ik","Pertaining to a white blood cell.","مربوط به لوکوسیت (گلبول سفید)","hb","",[]],
["leukocytosis","loo-koh-sigh-TOH-sis","Abnormal increase in the number of white blood cells.","لوکوسیتوز (افزایش گلبول‌های سفید)","hb","",[]],
["leukopenia","loo-koh-PEE-nee-ah","Condition of having too few white blood cells.","لوکوپنی (کاهش گلبول‌های سفید)","hb","",[]],
["lingual tonsils","LING-gwal","tonsils located at the base of the tongue","لوزه‌های زبانی","ly","",[]],
["lymph","lĭmf","A fluid collected from tissues that contains mostly white blood cells and flows through the lymphatic vessels.","لنف","ly","Anatomy_and_Physiology",[]],
["lymph node","LIMF NODE","small, bean-shaped mass of lymphatic tissue that filters bacteria and foreign material from the lymph; located on larger lymph vessels in the cervical, mediastinal, axillary, and inguinal regions","گره لنفاوی","ly","Anatomy_and_Physiology",[]],
["lymph node dissection","","Removal of cancerous lymph nodes for microscopic examination.","دایسکشن گره لنفاوی (برداشتن و بررسی غدد لنفاوی)","ly","",[]],
["lymphadenectomy","lĭm-făd-ĕ-NĔK-tō-mē","The removal of a lymph node.","لنفادنکتومی (برداشتن گره‌های لنفاوی)","ly","",[]],
["lymphadenitis","lĭm-făd-ĕn-Ī-tĭs","Inflammation and enlargement of the lymph nodes, usually as a result of infection","لنفادنیت (التهاب گره‌های لنفاوی)","ly","",[]],
["lymphadenopathy","lĭm-făd-ĕ-NŎP-ă-thē","chronic or excessively swollen lymph nodes; any disease of the lymph nodes","لنفادنوپاتی (بیماری گره‌های لنفاوی)","ly","",[]],
["lymphadenotomy","lĭm-făd-ĕ-NŎ-tō-mē","An incision into a lymph node.","لنفادنوتومی (برش گره لنفاوی)","ly","",[]],
["lymphangial","lim-FAN-jee-al","Pertaining to lymph vessels.","مربوط به عروق لنفاوی","ly","",[]],
["lymphangiectomy","lĭm-făn-jē-ĔK-tō-mē","Removal of a lymph vessel","لنفانژیکتومی (برداشتن عروق لنفاوی)","ly","",[]],
["lymphangiogram","lim-FAN-jee-oh-gram","X-ray record of lymphatic vessels produced by lymphangiography.","لنفانژیوگرام","ly","",[]],
["lymphangiography","lĭm-făn-jē-ŎG-ră-fē","Radiographic examination of lymph glands and lymphatic vessels after an injection of a contrast medium to view the path of lymph flow as it moves into the chest region","لنفانژیوگرافی (تصویربرداری از عروق لنفاوی)","ly","",[]],
["lymphangioma","lĭm-făn-jē-Ō-mă","tumor of a lymph vessel","لنفانژیوم (تومور عروق لنفاوی)","ly","",[]],
["lymphangiotomy","lim-FAN-jee-OT-oh-mee","incision of a lymph vessel","لنفانژیوتومی (برش عروق لنفاوی)","ly","",[]],
["lymphangitis","lim-fan-JIGH-tis","inflammation of the lymph vessels or nodes","لمفاتیت (التهاب بافت‌های لنفاوی)","ly","",[]],
["lymphatic","lim-FAH-tick","the body's other circulatory system","لنفاوی","ly","",[]],
["lymphatic pathways","lĭm-FĂD-ĭk PAHth-wā","The vessels that transport lymph (the fluid of the lymphatic system) around the body.","مسیرهای لنفاوی","ly","",[]],
["lymphatic system","lihm-FAT-tik SIS-tuhm","collectively, the vessels, nodes, and capillaries that carry the lymph and its disease-fighting cells to the areas in which they are needed","سیستم لنفاوی","ly","",[]],
["lymphatic vessels","LIMF VESS-elz","vascular system of the lymphatic system","عروق لنفاوی","ly","",[]],
["lymphedema","lĭmf-ĕ-DĒ-mă","Debilitating condition of localized fluid retention and tissue swelling caused by a blockage in the lymphatic system that prevents lymph fluid in the upper limbs from draining adequately","لنف‌ادم (تجمع مایع لنفاوی)","ly","",[]],
["lymphocyte","LĬM-fō-sīts","Type of white blood cell (WBC) found in the lymph nodes, spleen, bloodstream, and lymph that functions in the body's immune system by recognizing and deactivating foreign substances (antigens)","لنفوسیت","hb","",[]],
["lymphocytic","lim-foh-SIT-ik","Pertaining to a [white] cell formed in lymphatic tissue.","لنفوسیتی","hb","",[]],
["lymphocytic leukemia","lim-foh-SIT-ik / loo-KEE-mee-ah","Type of leukemia in which abnormal white blood cells are lymphocytes; may be acute (rapid onset and progression) or chronic (slow onset and progression).","لوسمی لنفوسیتی","hb","",[]],
["lymphocytic lymphoma","lĭm-fō-SĬT-ĭk lĭm-FŌ-mă","A disease with malignant cells that resemble large lymphocytes.","لنفوم لنفوسیتی","ly","",[]],
["lymphocytosis","lim-fo-si-TO-sis","An increase in the number of circulating lymphocytes","لنفوسیتوز (افزایش لنفوسیت‌ها)","hb","",[]],
["lymphography","lim-FOG-ruh-fee","visualization of lymphatics and lymph nodes by radiography after injecting a contrast dye","لنفوگرافی (تصویربرداری از سیستم لنفاوی)","ly","",[]],
["lymphoid nodules of the small intestine","LIMF-oid NOD-yulz","collections of spherical masses of lymphoid cells closely packed together; Peyer's patches","ندول‌های لنفاوی روده کوچک (پلاک‌های پی‌یر)","ly","",[]],
["lymphoid tissue","LIM-foyd","resembling or pertaining to lymph tissue","بافت لنفاوی","ly","",[]],
["lymphoma","lĭm-FŌ-mă","Cancer of the lymph nodes.","لنفوم (تومور لنفاوی)","ly","",[]],
["lymphopathy","lim-FOP-ah-thee","disease of the lymph vessels or nodes","لنفوپاتی","ly","",[]],
["lymphopoiesis","lĭm-fō-poy-Ē-sĭs","formation, production of lymph","لنفوپوئز (تولید لنف و لنفوسیت)","ly","",[]],
["lymphoscintigraphy","lim-foh-sin-TIG-grah-fee","process of recording the lymphatic vessels or lymph nodes to produce images that detect metastatic tumors, lymphedema or lymph node blockage","لنفوسینتی‌گرافی","ly","",[]],
["macrocyte","MĂK-rō-sīt","large cell","ماکروسیت (سلول بزرگ)","hb","",[]],
["macrophage","MĂK-rō-fāj-ĕz","A large phagocytic cell of the tissues and blood that engulfs foreign particles and debris.","ماکروفاژ (درشت‌خوار)","im","Anatomy_and_Physiology",[]],
["magnetic resonance imaging","REZ-oh-nens","Use of electromagnetic energy to produce image of soft tissues in any plane of body.","تصویربرداری رزونانس مغناطیسی (ام‌آر‌آی)","dx","",["MRI"]],
["megakaryocyte","mĕg-ă-KĀR-ē-ō-sīts","Large cells in red bone marrow from which platelets break off.","مگاکاریوسیت","co","",[]],
["megaloblastic anemia","meg-ah-loh-BLAS-tick","Anemia characterized by large immature red blood cells in the bone marrow due to lack or ineffective use of Vitamin B12 or folate.","کم‌خونی مگالوبلاستیک","hb","",[]],
["megalocytoblast","meg-ah-loh-SIGHT-oh-blast","Large immature cell.","مگالوسیتوبلاست","hb","",[]],
["metastasis","mĕ-TĂS-tă-sĭs","How far the disease has spread.","متاستاز (گسترش سرطان)","dx","",[]],
["methicillin-resistant Staphylococcus aureus infection","meth-ih-SIL-in / ree-ZISS-tent / staf-ih-loh-KOK-us / OR-ee-iss","Infecting bacteria are resistant to many common antibiotics, such as methicillin, oxacillin, penicillin, and amoxicillin; spread through contact with contaminated surface.","عفونت استافیلوکوک اورئوس مقاوم به متی‌سیلین (MRSA)","dx","",["MRSA"]],
["microcyte","MĪ-krō-sīt","small cell","میکروسیت (سلول کوچک)","hb","",[]],
["microphage","MĪK-rō-fāj-ĕz","Phagocytes of the tissues and blood.","میکروفاژها (ریزخوارها)","im","",[]],
["monoclonal antibody","mon-o-KLO-nal","A pure antibody produced in the laboratory; used for diagnosis and treatment","آنتی‌بادی مونوکلونال","im","",[]],
["monocyte","MŎN-ō-sīts","Large WBCs formed in the bone marrow that circulate in the bloodstream and destroy pathogenic bacteria through phagocytosis","مونوسیت","hb","",[]],
["monocytic","mon-oh-SIT-ik","Pertaining to a [white] cell with a single, large nucleus.","مونوسیتی","hb","",[]],
["multiple myeloma","MŬL-tĭ-pl mī-ĕ-LŌ-mă","Originates in plasma cells (type of lymphocyte responsible for making antibodies); over time, these malignant cells collect in bone marrow, resulting in a bone marrow tumor.","مولتیپل میلوما","hb","Pathology_and_Disorders",[]],
["Mycobacterium avium-intracellulare","","Opportunistic infection caused by a bacterium found in soil and water, leading to systemic infection with fever, diarrhea, lung and blood disease, and wasting.","مایکوباکتریوم آویوم-اینتراسلولار (MAI)","im","",["MAI"]],
["myeloblasts","MĪ-ĕ-lō-blăsts","Immature granulocytes that invade the bone marrow in certain leukemias.","میلوبلاست‌ها (سلول‌های پیش‌ساز گرانولوسیت)","hb","",[]],
["myelodysplastic syndrome","mi-eh-lo-dis-PLAS-tik","Poor development of the bone marrow resulting in a group of bone marrow disorders characterized by insufficient production of one or more types of blood cells.","سندرم میلودیسپلاستیک","hb","",[]],
["myelofibrosis","mi-eh-lo-fi-BRO-sis","Condition in which bone marrow is replaced with fibrous tissue","میلوفیبروز (فیبروز مغز استخوان)","hb","",[]],
["myelogenous","mī-ĕ-lō-JĔN-ĭk","pertaining to forming, producing, origin in bone marrow or spinal cord","میلوژنوس (تولید شده در مغز استخوان)","hb","",[]],
["myeloid leukemia","MY-eh-loyd / loo-KEE-mee-ah","Type of leukemia in which abnormal leukocytes are granulocytes (usually neutrophils); may be acute (rapid onset and progression) or chronic (slow onset and progression).","لوسمی میلوئیدی","hb","",[]],
["myogenous","","Produced in muscle tissue.","میوژنوس (تولید شده در بافت عضلانی)","hb","",[]],
["natural immunity","NACH-er-uhl ih-MYOO-ni-tee","resistance manifested by an individual who has not been immunized; immunity passed on from mother to fetus or from mother to baby in breast milk","ایمنی طبیعی (مادرزادی)","im","",[]],
["neutropenia","nu-tro-PE-ne-ah","A decrease in the number of neutrophils with increased susceptibility to infection; causes include drugs, irradiation, and infection; may be a side effect of treatment for malignancy","نوتروپنی (کاهش نوتروفیل‌ها)","hb","",[]],
["neutrophil","NŪ-trō-fĭlz","A granular leukocyte that stains weakly with both acidic and basic dyes; the most numerous of the white blood cells; a type of phagocyte","نوتروفیل","hb","",[]],
["neutrophilic","noo-troh-FILL-ik","Pertaining to [a leukocyte] that attracts a neutral pH stain.","نوتروفیلیک (متمایل به رنگ‌های خنثی)","hb","",[]],
["non-Hodgkin lymphoma","nŏn-HŎJ-kĭn lĭm-FŌ-mă","A group of more than 20 different types of lymphomas (except Hodgkin lymphoma) that occur in older adults but are not characterized by Reed-Sternberg cells (malignant cells)","لنفوم غیرهاجکین","ly","Pathology_and_Disorders",["NHL"]],
["normochromia","nor-moh-KROH-mee-ah","Red blood cells that are normally pigmented.","نرموکرومی (رنگ طبیعی گلبول‌های قرمز)","hb","",[]],
["nutritional anemia","nu-TRISH-un-al","Anemia resulting from a dietary deficiency, usually of iron, vitamin B12, or folate","آنمی تغذیه‌ای","hb","",[]],
["omega-3 fatty acids","oh-MAY-gah three","Polyunsaturated fatty acids (EPA and DHA) used in immunonutrition to modulate inflammatory pathways and reduce cytokine production.","اسیدهای چرب امگا-۳ (کاهش‌دهنده التهاب)","dx","Immunonutrition_and_Pharmacology",["EPA","DHA"]],
["oncologist","on-KOL-oh-jist","a medical practitioner who specializes in the diagnosis and treatment of malignant tumors (cancer)","انکولوژیست (متخصص انکولوژی/سرطان‌شناس)","dx","",[]],
["oncology","ŏn-KŎL-ō-jē","Branch of medicine concerned with the study of cancerous growths (malignancies)","انکولوژی (سرطان‌شناسی)","dx","",[]],
["opportunistic infection","ŏp-pōr-tū-NĬS-tĭk in-FEK-shŭnz","Infectious diseases associated with patients who have compromised immune systems and therefore lowered resistance to infections and parasites.","عفونت‌های فرصت‌طلب","im","",[]],
["palatine tonsils","PAL-ah-tine","tonsils located in the throat, normally referred to simply as tonsils","لوزه‌های کامی","ly","",[]],
["pancytopenia","PĂN-sī-tō-PĒ-nē-ă","A condition with an abnormally low number of all blood cell components (red cells, white cells, and platelets).","پانسیتوپنی (کاهش تمام سلول‌های خونی)","hb","Pathology_and_Disorders",[]],
["pathogen","PĂTH-ō-jĕns","Any disease-causing microorganism or substance.","پاتوژن (عامل بیماری‌زا)","im","Pathology_and_Disorders",[]],
["pathology","pah-THOL-oh-jee","Branch of medicine concerned with determining underlying causes and development of diseases; physician is a pathologist.","آسیب‌شناسی (پاتولوژی)","dx","",[]],
["pernicious anemia","pĕr-NĬSH-ŭs","Anemia caused by failure of the stomach to produce intrinsic factor, a substance needed for the absorption of vitamin B12; this vitamin is required for the formation of erythrocytes","آنمی پرنیشیوز (کم‌خونی بدخیم)","hb","Pathology_and_Disorders",["PA"]],
["petechiae","pe-TE-ke-e","Pinpoint, flat, purplish-red spots caused by bleeding within the skin or mucous membrane (singular: petechia)","پتشی (لکه‌های خونریزی نقطه‌ای)","co","",[]],
["Peyer's patches","PEY-erz PACH-ez","collections of spherical masses of lymphoid cells closely packed together; lymphoid nodules of the small intestine","پلاک‌های پی‌یر","ly","",[]],
["pH","","A scale that measures the relative acidity or alkalinity of a solution; represents the amount of hydrogen ion in the solution","پی‌اچ (پتانسیل هیدروژن)","hb","",[]],
["phagocyte","FĂG-ō-sīt","white blood cell that clears away pathogens and debris","فاگوسیت (سلول‌های بیگانه‌خوار)","im","",[]],
["phagocytosis","FĂG-ō-sī-TŌ-sĭs","The internalization or “eating” of the particles and the digestion of the particles for presentation to the appropriate cells of the immune system.","فاگوسیتوز (بیگانه‌خواری)","im","Anatomy_and_Physiology",[]],
["pharyngeal tonsils","far-IN-jee-al","tonsils commonly called the adenoids","لوزه‌های حلقی","ly","",[]],
["Philadelphia chromosome","","An abnormal chromosome found in the cells of most individuals with chronic granulocytic (myelogenous) leukemia","کروموزوم فیلادلفیا","dx","",["Ph"]],
["phlebotomy","flĕ-BŎT-ō-mē","Incision into vein in order to remove blood for diagnostic test; also called venipuncture.","فلبوتومی (خون‌گیری از ورید)","co","",[]],
["plasma","PLAZ-mah","The liquid portion of the blood. Because plasma is more than 90% water, it is thin and almost colorless when it is separated from the blood cells.","پلاسما","hb","Anatomy_and_Physiology",["FFP"]],
["plasma cell","PLĂZ-mă sĕlz","Cells differentiated from B cells that produce antibodies.","پلاسماسل (سلول پلاسمایی)","im","",[]],
["plasmapheresis","PLĂZ-mă-fĕ-RĒ-sĭs","Method of removing plasma from body without depleting formed elements; whole blood is removed and cells and plasma are separated; cells are returned to patient along with donor plasma transfusion.","پلاسمالفارزیس (جداسازی پلاسمای خون)","co","",[]],
["plasmin","PLAZ-min","An enzyme that dissolves clots; also called fibrinolysin","پلاسمین","co","",[]],
["platelet","PLĀT-lĕts","A formed element of the blood that is active in hemostasis; a thrombocyte (root: thrombocyt/o)","پلاکت","co","",[]],
["Pneumocystis jiroveci","","Opportunistic infection caused by a fungus, formerly known as Pneumocystis carinii; causes a particularly dangerous type of pneumonia.","پنوموسیستیس جیرووسی","im","",[]],
["Pneumocystis pneumonia","nū-mō-SĬS-tĭs nū-MŌ-nē-ă","Pneumonia common in patients with weakened immune systems, such as AIDS patients, caused by Pneumocystis jiroveci fungus.","پنومونی پنوموسیستیس","im","",["PCP"]],
["poikilocytosis","poy-kil-oh-sigh-TOH-sis","Increased variation in the shape of cells, particularly red blood cells.","پوی‌کیلوسیتوز (تنوع در شکل گلبول‌ها)","hb","",[]],
["polycythemia","PŎL-ē-sī-THĒ-mē-ă","Any condition in which there is a relative increase in the percent of red blood cells in whole blood; may result from excessive production of red cells because of oxygen lack","پلی‌سیتمی (افزایش غلظت خون)","hb","",[]],
["polycythemia vera","pol-e-si-THE-me-ah VE-rah","A condition in which overactive bone marrow produces too many red blood cells that interfere with circulation and promote thrombosis and hemorrhage; treated by blood removal; also called erythremia and Vaquez-Osler disease","پلی‌سیتمی ورا (پرخونی اولیه)","hb","",[]],
["procalcitonin","pro-kal-sih-TOE-nin","A peptide precursor of the hormone calcitonin, closely related to the systemic response to severe bacterial infections.","پروکالسیتونین (بیومارکر عفونت باکتریایی)","dx","Laboratory_and_Diagnostics",["PCT"]],
["protease inhibitor","PRO-te-ase","An anti-HIV drug that acts by inhibiting an enzyme the virus needs to multiply","مهارکننده پروتئاز","dx","",[]],
["prothrombin","prō-THRŎM-bĭn","A plasma protein essential for blood coagulation.","پروترومبین (پروتئین انعقادی)","co","",[]],
["prothrombin time","proh-THROM-bin","Indicates blood’s coagulation abilities by measuring how long it takes for a clot to form after prothrombin has been activated.","زمان پروترومبین (PT)","dx","",["PT"]],
["purpura","PŬR-pū-ră","A condition characterized by hemorrhages into the skin, mucous membranes, internal organs, and other tissues; thrombocytopenic purpura is caused by a deficiency of platelets","پورپورا (خونریزی‌های زیرپوستی)","co","",[]],
["reaction","ree-AK-shun","an action of an antibody on a specific antigen; also, in reference to immune responses, an abnormal or unwanted reaction","واکنش","im","",[]],
["red blood cell morphology","","Determines diseases such as sickle cell anemia through examination of specimen of blood for abnormalities in shape (morphology) of erythrocytes.","مورفولوژی گلبول‌های قرمز (بررسی شکل گلبول‌ها)","dx","",[]],
["Reed-Sternberg cells","rede SHTERN-berg","Giant cells that are characteristic of Hodgkin disease; they usually have two large nuclei and are surrounded by a halo","سلول‌های رید-اشترنبرگ","dx","",[]],
["relapse","RĒ-lăps","Recurrence of the disease.","عود (بازگشت بیماری)","dx","",[]],
["remission","rē-MĬSH-ŭn","Disappearance of the disease.","بهبودی (ناپدید شدن علائم بیماری)","dx","",[]],
["reticulocyte count","re-TIK-u-lo-site","Blood counts of reticulocytes, a type of immature red blood cell; reticulocyte counts are useful in diagnosis to indicate the rate of erythrocyte formation","شمارش رتیکولوسیت","dx","",[]],
["retrovirus","rĕ-trō-VĪ-rŭs","A ribonucleic acid (RNA) virus that causes reversal of normal cell copying.","رتروویروس","im","",[]],
["rheumatoid arthritis","ROO-mah-toid ar-THRY-tuhs","systemic disease that affects the connective tissue; involves many joints, especially those of the hands and feet","آرتریت روماتوئید","im","",[]],
["sanguineous","sang-GWIN-ee-us","Pertaining to blood.","خونی","hb","",[]],
["sarcoidosis","săr-koy-DŌ-sĭs","Autoimmune disease of unknown cause that forms fibrous lesions commonly appearing in lymph nodes, liver, skin, lungs, spleen, eyes, and small bones of hands and feet.","سارکوئیدوز","im","",[]],
["Schilling test","SHIL-ing","Test used to determine absorption of vitamin B12 by measuring excretion of radioactive B12 in the urine; used to distinguish pernicious from nutritional anemia","تست شیلینگ","dx","",[]],
["sepsis","SEP-sis","Life-threatening organ dysfunction caused by a dysregulated host response to infection.","سپسیس (عفونت خون با پاسخ التهابی سیستمیک)","dx","Pathology_and_Disorders",["SIRS"]],
["septicemia","sep-tih-SEE-mee-ah","Having bacteria or their toxins in bloodstream; sepsis is term that means putrefaction or infection; commonly referred to as blood poisoning.","سپتی‌سمی (عفونت خون)","dx","",[]],
["seroconversion","se-ro-con-VER-zhun","The appearance of antibodies in the serum in response to a disease or an immunization","سروکانورژن (تبدیل سرمی)","im","",[]],
["serum","SERE-um","The fraction of the plasma that remains after blood coagulation; it is the equivalent of plasma without its clotting factors","سرم","hb","",[]],
["severe combined immunodeficiency syndrome","","Disease seen in children born with nonfunctioning immune system; often these children are forced to live in sealed sterile rooms.","سندرم نقص ایمنی مرکب شدید","im","",["SCIDS"]],
["sickle cell anemia","SĬ-kl sĕl ă-NĒ-mē-ă","A hereditary anemia caused by the presence of abnormal hemoglobin; red blood cells become sickle-shaped when they give up oxygen and interfere with normal blood flow to the tissues","آنمی داسی‌شکل","hb","Pathology_and_Disorders",[]],
["sideroblastic anemia","sid-eh-ro-BLAS-tik","Anemia caused by inability to use available iron to manufacture hemoglobin; the excess iron precipitates in normoblasts (developing red blood cells)","آنمی سیدروبلاستیک","hb","",[]],
["Sjögren syndrome","SHO-gren","An autoimmune disease involving dysfunction of the exocrine glands and affecting secretion of tears, saliva, and other body fluids; deficiency leads to dry mouth, tooth decay, corneal damage, eye infections, and difficulty in swallowing","سندرم شوگرن","im","",[]],
["spherocytic anemia","sfer-o-SIT-ik","Hereditary anemia in which red blood cells are round instead of disk shaped and rupture (hemolyze) excessively","آنمی اسفروسیتیک","hb","",[]],
["spleen","splēn","A large lymphatic organ that filters and stores blood, destroys old red blood cells, and activates lymphocytes.","طحال","ly","Anatomy_and_Physiology",[]],
["splenectomy","splē-NĔK-tō-mē","Removal of the spleen, which is usually required if it is ruptured.","اسپلنکتومی (برداشتن طحال)","ly","",[]],
["splenic","SPLEN-ik","Pertaining to spleen.","مربوط به طحال","ly","",[]],
["splenitis","splee-NY-tiss","inflammation of the spleen","اسپلنیت (التهاب طحال)","ly","",[]],
["splenomegaly","splĕ-nō-MĔG-ă-lē","Enlargement of the spleen.","اسپلنومگالی (بزرگی طحال)","ly","Pathology_and_Disorders",[]],
["splenopathy","splee-NOP-ah-thee","any disease of the spleen","اسپلنوپاتی (بیماری طحال)","ly","",[]],
["splenorrhagia","splee-noh-RAY-jee-ah","hemorrhage from the spleen","اسپلنوراژی (خونریزی طحال)","ly","",[]],
["splenorrhaphy","splee-NOR-ah-fee","suture of a ruptured spleen","اسپلنورافی (بخیه طحال)","ly","",[]],
["splenotomy","splee-NOT-oh-mee","incision of the spleen","اسپلنوتومی (برش طحال)","ly","",[]],
["sputum","SPŪ-tŭm","mucus or phlegm coughed up from the respiratory tract","خلط","dx","",[]],
["stem cell","","Immature blood cells formed in the bone marrow.","سلول‌های بنیادی","hb","",[]],
["stroke","","Sudden loss of neurological function, caused by vascular injury (loss of blood flow) to an area of the brain; also known as CVA","سکته مغزی","dx","",[]],
["suppressor T cell","sŭ-PRĔS-ōr sĕlz","T cells (mainly CD8 and some CD4) that suppress B cells and other immune cells.","سلول‌های سرکوب‌گر (ساپرسور)","im","",[]],
["systemic lupus erythematosus","LU-pus er-ih-the-mah-TO-sus","Inflammatory connective tissue disease affecting the skin and multiple organs; patients are sensitive to light and may have a red butterfly-shaped rash over the nose and cheeks","لوپوس اریتماتوز سیستمیک (SLE)","im","",[]],
["systemic sclerosis","","A diffuse connective tissue disease that may involve any system causing inflammation, degeneration, and fibrosis; also called scleroderma because it causes thickening of the skin","اسکلروز سیستمیک (اسکلرودرما)","im","",[]],
["T cell","TEE LIHM-foh-site","A thymus-dependent lymphocyte responsible for cellular immunity that directly attacks foreign or infected cells.","لنفوسیت T (سلول T)","im","Anatomy_and_Physiology",["CD4"]],
["thalassemia","thăl-ă-SĒ-mē-ă","A group of hereditary anemias (often Mediterranean origin) characterized by an inability to produce sufficient functioning hemoglobin.","تالاسمی","hb","Pathology_and_Disorders",[]],
["thrombin","THRŎM-bĭn","The enzyme derived from prothrombin that converts fibrinogen to fibrin","ترومبین (آنزیم منعقدکننده)","co","",[]],
["thrombocyte","THRŎM-bō-sīts","A formed element (cell fragment) in the blood that is essential for hemostasis and blood clotting.","ترومبوسیت / پلاکت","co","Anatomy_and_Physiology",["PLT"]],
["thrombocytic","throm-boh-SIT-ik","Pertaining to a clotting cell; a platelet.","ترومبوسیتی (مربوط به پلاکت)","co","",[]],
["thrombocytopenia","THRŎM-bō-sī-tō-PĒ-nē-ă","An abnormal decrease or deficiency of platelets in the blood, leading to bleeding disorders.","ترومبوسیتوپنی (کاهش پلاکت‌ها)","co","Pathology_and_Disorders",["ITP","TTP"]],
["thrombocytosis","throm-boh-sigh-TOH-sis","Condition of having too many platelets.","ترومبوسیتوز (افزایش پلاکت‌ها)","co","",[]],
["thrombolysis","thrŏm-BŎL-ĭ-sĭs","separation; destruction; loosening of a blood clot","ترومبولیز (تخریب لخته خون)","co","",[]],
["thrombolytics","thrŏm-bō-LĬT-ĭks","Medications to dissolve blood clots.","ترومبولیتیک‌ها (داروهای حل‌کننده لخته)","co","",[]],
["thromboplastin","thrŏm-bō-PLĂS-tĭn","A protein released by platelets that combines with calcium and clotting factors to form a clot.","ترومبوپلاستین (پروتئین شروع‌کننده انعقاد)","co","",[]],
["thrombosis","throm-BOH-sis","Abnormal condition of blood clots.","ترومبوز (تشکیل لخته خون)","co","",[]],
["thrombotic","throm-BOT-ik","Pertaining to a clot.","ترومبوتیک (مربوط به لخته)","co","",[]],
["thrombotic thrombocytopenic purpura","","An often fatal disorder in which multiple clots form in blood vessels","پورپورای ترومبوسیتوپنیک ترومبوتیک","co","",["TTP"]],
["thrombus","THROM-bus","Hard collection of fibrin, blood cells, and tissue debris that is end result of hemostasis or blood-clotting process; commonly referred to as a blood clot.","ترومبوس (لخته خون داخل عروقی)","co","",[]],
["thymectomy","thī-MĔK-tō-mē","Removal of the thymus gland.","تیمکتومی (برداشتن غده تیموس)","ly","",[]],
["thymic","THIGH-mik","Pertaining to thymus gland.","تیموسی (مربوط به غده تیموس)","ly","",[]],
["thymitis","thye-MY-tihs","inflammation of the thymus","تیمیت (التهاب غده تیموس)","ly","",[]],
["thymoma","thī-MŌ-mă","A tumor of the thymus gland.","تیموما (تومور غده تیموس)","ly","",[]],
["thymosin","THĪ-mō-sĭn","Hormone secreted by the thymus gland that aids in distribution of thymocytes (T lymphocytes) and lymphocytes.","تیموسین","ly","",[]],
["thymus","THĪ-mŭs glănd","An immune system gland located in the mediastinum that matures T lymphocytes and secretes thymosin.","غده تیموس","ly","Anatomy_and_Physiology",[]],
["tissue typing","","Technique used to determine the histocompatibility of tissues; used in grafts and transplants with the recipient's tissues and cells; also known as histocompatibility testing","تعیین نوع بافت (تایپینگ بافتی)","dx","",[]],
["tonsil","TON-sihl","collection of lymph tissue; in common understanding, the lingual, pharyngeal, and (especially) palatine tonsils","لوزه","ly","",[]],
["tonsillar","TAHN-sih-lar","Pertaining to tonsils.","لوزه‌ای (مربوط به لوزه‌ها)","ly","",[]],
["tonsillectomy","ton-sih-LECK-toh-mee","excision of the tonsils","تانسیلکتومی (برداشتن لوزه)","ly","",[]],
["tonsillitis","TAWN-sih-LY-tihs","inflammation of a tonsil","التهاب لوزه","ly","",[]],
["transfusion","trăns-FYŪ-zhŭn","Collection of blood or a blood component from a donor followed by its infusion into a recipient","تزریق خون (انتقال خون)","co","",[]],
["urticaria","er-tih-KAIR-ee-ah","Severe itching associated with hives, usually linked to food allergy, stress, or drug reactions.","اورتیکاریا (کهیر شدید)","im","",[]],
["vaccination","văk-sĭ-NĀ-shŭnz","Introduction of altered antigens (viruses or bacteria) into the body to produce an immune response and protect against disease","واکسیناسیون","im","",[]],
["vaccine","văk-SĒN, VĂK-sēn","A substance that provokes an immune response from an organism that causes active immunity via the production of antibodies.","واکسن","im","",[]],
["venipuncture","VĔN-ĭ-pŭnk-chŭr","The withdrawal of blood for examination.","رگ‌گیری (خون‌گیری وریدی)","co","",[]],
["venous","VĒ-nŭs","pertaining to a vein","وریدی","co","",[]],
["von Willebrand disease","vŏn WĬL-lĕ-brănd di-zēz","A hemorrhagic disorder in which there is a greater tendency to bleed due to the lack of a clotting factor called factor VIII.","بیماری فون ویلبراند","co","",[]],
["Western blot","","Test to detect presence of viral DNA in the blood and used to confirm the diagnosis of AIDS as well as detecting other viruses","آزمایش وسترن بلات","dx","",[]],
["white blood cell differential","diff-er-EN-shal","Determines number of each variety of leukocytes in volume of blood.","شمارش افتراقی گلبول‌های سفید","dx","",[]],
["Wright stain","","A commonly used blood stain","رنگ‌آمیزی رایت","dx","",[]]];
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
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ana-', ['ana'], 'up, again, against', 'به بالا، دوباره، علیه', 'im'],
    ['anti-', ['anti'], 'against', 'ضد، علیه', '*'],
    ['auto-', ['auto'], 'self', 'خود', 'im'],
    ['dys-', ['dys'], 'bad, abnormal, difficult', 'بد، غیرطبیعی، دشوار', '*'],
    ['homo-', ['homo'], 'same', 'یکسان، هم‌نوع', 'co'],
    ['hyper-', ['hyper'], 'excessive, above', 'بیش از حد، بالا', '*'],
    ['hypo-', ['hypo'], 'deficient, below', 'کم، پایین‌تر از حد', '*'],
    ['inter-', ['inter'], 'between', 'میان، بین', 'ly'],
    ['intra-', ['intra'], 'within, inside', 'درون', '*'],
    ['macro-', ['macro'], 'large', 'بزرگ', 'hb'],
    ['micro-', ['micro'], 'small', 'کوچک', 'hb'],
    ['mono-', ['mono'], 'one, single', 'یک، تک', 'hb'],
    ['pan-', ['pan'], 'all', 'همه، تمام', 'hb'],
    ['poly-', ['poly'], 'many, much', 'بسیار، چند', 'hb'],
    ['trans-', ['trans'], 'across, through', 'از میان، به آن سو', 'co'],
    // ریشه‌های خون
    ['hem/o, hemat/o', ['hemat', 'hem', 'haem'], 'blood', 'خون', 'hb'],
    ['sanguin/o', ['sanguin'], 'blood', 'خون', 'hb'],
    ['erythr/o', ['erythr'], 'red', 'قرمز', 'hb'],
    ['leuk/o', ['leuk'], 'white', 'سفید', 'hb'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', 'hb'],
    ['kary/o, nucle/o', ['kary', 'nucle'], 'nucleus', 'هسته', 'hb'],
    ['granul/o', ['granul'], 'granules', 'دانه، گرانول', 'hb'],
    ['eosin/o', ['eosin'], 'rosy red (dawn)', 'گلگون، قرمز روشن', 'hb'],
    ['bas/o', ['bas'], 'base (alkaline)', 'باز (قلیایی)', 'hb'],
    ['neutr/o', ['neutr'], 'neutral', 'خنثی', 'hb'],
    ['chrom/o', ['chrom'], 'color', 'رنگ', 'hb'],
    ['morph/o', ['morph'], 'shape, form', 'شکل، ریخت', 'hb'],
    ['anis/o', ['anis'], 'unequal', 'نابرابر', 'hb'],
    ['poikil/o', ['poikil'], 'varied, irregular', 'گوناگون، نامنظم', 'hb'],
    ['spher/o', ['spher'], 'globe, round', 'کره، گرد', 'hb'],
    ['sider/o, ferr/o', ['sider', 'ferr'], 'iron', 'آهن', 'hb'],
    ['myel/o', ['myel'], 'bone marrow (also spinal cord)', 'مغز استخوان (و نخاع)', 'hb'],
    ['megal/o', ['megal', 'mega'], 'large', 'بزرگ', 'hb'],
    ['norm/o', ['norm'], 'normal', 'طبیعی', 'hb'],
    ['plasm/o', ['plasma', 'plasm'], 'plasma; formed substance', 'پلاسما؛ ماده شکل‌گرفته', 'hb'],
    ['ser/o', ['ser'], 'serum', 'سرم', 'hb'],
    ['thalass/o', ['thalass'], 'sea', 'دریا', 'hb'],
    ['lip/o', ['lip'], 'fat, lipid', 'چربی', 'hb'],
    ['electr/o', ['electr'], 'electricity', 'الکتریسیته', 'dx'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', '*'],
    ['melan/o', ['melan'], 'black', 'سیاه', '*'],
    ['xanth/o', ['xanth'], 'yellow', 'زرد', '*'],
    ['hepat/o', ['hepat'], 'liver', 'کبد', '*'],
    // انعقاد و رگ
    ['thromb/o', ['thromb'], 'clot', 'لخته', 'co'],
    ['coagul/o', ['coagul'], 'clotting', 'انعقاد، لخته شدن', 'co'],
    ['fibrin/o', ['fibrin'], 'fibers, fibrin', 'رشته، فیبرین', 'co'],
    ['agglutin/o', ['agglutin'], 'clumping, gluing', 'به هم چسبیدن، تجمع', 'co'],
    ['embol/o', ['embol'], 'embolus (plug)', 'آمبولی (توده مسدودکننده)', 'co'],
    ['phleb/o, ven/o', ['phleb', 'ven'], 'vein', 'سیاهرگ (ورید)', 'co'],
    ['fus/o', ['fus'], 'pouring', 'ریختن', 'co'],
    // لنفاوی
    ['lymph/o', ['lymph'], 'lymph', 'لنف', 'ly'],
    ['lymphaden/o', ['lymphaden'], 'lymph node (gland)', 'گره لنفاوی', 'ly'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', 'رگ لنفاوی', 'ly'],
    ['aden/o', ['aden'], 'gland', 'غده', 'ly'],
    ['angi/o', ['angi'], 'vessel', 'رگ', 'ly'],
    ['splen/o', ['splen'], 'spleen', 'طحال', 'ly'],
    ['thym/o', ['thym'], 'thymus', 'تیموس', 'ly'],
    ['tonsill/o', ['tonsill'], 'tonsil', 'لوزه', 'ly'],
    ['axill/o', ['axill'], 'armpit (axilla)', 'زیربغل', 'ly'],
    ['cervic/o', ['cervic'], 'neck', 'گردن', 'ly'],
    ['inguin/o', ['inguin'], 'groin', 'کشاله ران', 'ly'],
    ['scint/i', ['scint'], 'spark', 'جرقه، درخشش', 'ly'],
    // ایمنی
    ['immun/o', ['immun'], 'immune, protection, safe', 'ایمنی، محافظت', 'im'],
    ['phag/o', ['phag'], 'eat, swallow', 'خوردن، بلعیدن', 'im'],
    ['tox/o, toxic/o', ['toxic', 'tox'], 'poison', 'سم', 'im'],
    ['path/o', ['path'], 'disease', 'بیماری', 'im'],
    ['septic/o', ['septic'], 'infection', 'عفونت', 'im'],
    ['all/o', ['all'], 'other, strange', 'دیگر، بیگانه', 'im'],
    ['onc/o', ['onc'], 'tumor', 'تومور', 'dx'],
    ['chem/o', ['chem'], 'chemical, drug', 'شیمیایی، دارو', 'dx'],
    ['radi/o', ['radi'], 'radiation, x-ray', 'پرتو، اشعه', 'dx'],
    // پسوندها
    ['-apheresis', ['apheresis', 'pheresis'], 'removal, carrying away', 'جداسازی و برداشتن', 'co'],
    ['-blast', ['blast'], 'immature cell, germ cell', 'سلول نابالغ (جوانه)', 'hb'],
    ['-crit', ['crit'], 'to separate', 'جدا کردن', 'hb'],
    ['-cyte', ['cyte'], 'cell', 'سلول', 'hb'],
    ['-cytosis', ['cytosis'], 'abnormal condition (increase) of cells', 'افزایش غیرطبیعی سلول‌ها', 'hb'],
    ['-emia', ['emia', 'hemia'], 'blood condition', 'وضعیت خون', 'hb'],
    ['-edema', ['edema'], 'swelling', 'تورم، ادم', 'ly'],
    ['-ectomy', ['ectomy'], 'excision, removal', 'برداشتن (با جراحی)', '*'],
    ['-gen, -genous', ['genous', 'genic', 'gen'], 'producing, origin', 'تولیدکننده، منشأ', '*'],
    ['-globin', ['globin'], 'protein', 'پروتئین', 'hb'],
    ['-globulin', ['globulin'], 'protein', 'پروتئین', 'im'],
    ['-gram', ['gram'], 'record', 'تصویر ثبت‌شده', 'dx'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت (تصویربرداری)', 'dx'],
    ['-ic, -al, -ous, -ar', ['ic', 'al', 'ous', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-ist', ['ist'], 'specialist', 'متخصص', '*'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', '*'],
    ['-lysis', ['lysis'], 'breakdown, destruction, separation', 'تخریب، تجزیه، جدا شدن', 'co'],
    ['-lytic', ['lytic'], 'pertaining to destruction', 'مربوط به تخریب', 'co'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی (بزرگ‌شدگی)', 'ly'],
    ['-oid', ['oid'], 'resembling', 'شبیه به', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت (معمولاً غیرطبیعی)', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', '*'],
    ['-penia', ['penia'], 'deficiency, decrease', 'کمبود، کاهش', 'hb'],
    ['-phage', ['phage'], 'eat, swallow', 'خورنده', 'im'],
    ['-philia', ['philia', 'philic', 'phil'], 'attraction for, love of', 'تمایل به، دوستدار', 'hb'],
    ['-phobia', ['phobia'], 'fear', 'ترس', '*'],
    ['-phoresis', ['phoresis'], 'carrying, transmission', 'حمل، جابه‌جایی', 'dx'],
    ['-phylaxis', ['phylaxis'], 'protection', 'محافظت', 'im'],
    ['-plasia, -plastic', ['plasia', 'plastic', 'plastin'], 'formation, development', 'تشکیل، رشد', 'hb'],
    ['-poiesis', ['poiesis', 'poietic'], 'formation, production', 'ساخت، تولید', 'hb'],
    ['-poietin', ['poietin'], 'substance that forms', 'ماده سازنده (هورمون)', 'hb'],
    ['-rrhage, -rrhagia', ['rrhagia', 'rrhage', 'rrhagic'], 'bursting forth (of blood)', 'فوران (خونریزی)', 'co'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'ly'],
    ['-stasis', ['stasis', 'static', 'statics'], 'stopping, controlling', 'توقف، کنترل', 'co'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'dx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-toxic', ['toxic'], 'pertaining to poison', 'مربوط به سم', 'im'],
    ['-y, -ia, -ism', ['y', 'ia', 'ism'], 'condition, process', 'حالت، فرایند', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['ABO', 'blood group system A, B, AB, O', 'سیستم گروه خونی A، B، AB و O', 'co'],
    ['Ab', 'antibody', 'آنتی‌بادی (پادتن)', 'im'],
    ['Ag', 'antigen', 'آنتی‌ژن (پادگن)', 'im'],
    ['AIDS', 'acquired immunodeficiency syndrome', 'سندرم نقص ایمنی اکتسابی (ایدز)', 'im'],
    ['ALL', 'acute lymphocytic (lymphoblastic) leukemia', 'لوسمی لنفوسیتی (لنفوبلاستیک) حاد', 'hb'],
    ['AML', 'acute myelogenous (myeloid) leukemia', 'لوسمی میلوئیدی حاد', 'hb'],
    ['ANA', 'antinuclear antibody', 'آنتی‌بادی ضدهسته', 'dx'],
    ['APC', 'antigen-presenting cell', 'سلول ارائه‌دهنده آنتی‌ژن', 'im'],
    ['aPTT', 'activated partial thromboplastin time', 'زمان ترومبوپلاستین نسبی فعال‌شده', 'co'],
    ['ARC', 'AIDS-related complex', 'کمپلکس وابسته به ایدز', 'im'],
    ['baso', 'basophil', 'بازوفیل', 'hb'],
    ['BMT', 'bone marrow transplant', 'پیوند مغز استخوان', 'dx'],
    ['BT', 'bleeding time', 'زمان سیلان (خونریزی)', 'co'],
    ['C&S', 'culture and sensitivity', 'کشت و آنتی‌بیوگرام', 'dx'],
    ['CBC', 'complete blood count', 'شمارش کامل سلول‌های خون', 'dx'],
    ['C. diff', 'Clostridium difficile', 'کلستریدیوم دیفیسیل', 'dx'],
    ['CD4', 'helper T cell marker (cluster of differentiation 4)', 'نشانگر لنفوسیت T کمکی', 'im'],
    ['CLL', 'chronic lymphocytic leukemia', 'لوسمی لنفوسیتی مزمن', 'hb'],
    ['CML', 'chronic myelogenous (myeloid) leukemia', 'لوسمی میلوئیدی مزمن', 'hb'],
    ['CMV', 'cytomegalovirus', 'سیتومگالوویروس', 'im'],
    ['CRE', 'carbapenem-resistant Enterobacteriaceae', 'انتروباکتریاسه مقاوم به کارباپنم', 'dx'],
    ['CRP', 'C-reactive protein', 'پروتئین واکنشی C', 'dx'],
    ['DIC', 'disseminated intravascular coagulation', 'انعقاد منتشر داخل عروقی', 'co'],
    ['diff', 'differential count (white blood cells)', 'شمارش افتراقی گلبول‌های سفید', 'dx'],
    ['EBV', 'Epstein-Barr virus', 'ویروس اپشتین-بار', 'im'],
    ['EIA', 'enzyme immunoassay', 'سنجش ایمنی آنزیمی', 'dx'],
    ['ELISA', 'enzyme-linked immunosorbent assay', 'الایزا (سنجش ایمنی متصل به آنزیم)', 'dx'],
    ['eos', 'eosinophil', 'ائوزینوفیل', 'hb'],
    ['EPO', 'erythropoietin', 'اریتروپویتین', 'hb'],
    ['ESR', 'erythrocyte sedimentation rate', 'سرعت رسوب گلبول قرمز', 'dx'],
    ['FFP', 'fresh frozen plasma', 'پلاسمای تازه منجمد', 'co'],
    ['GVHD', 'graft-versus-host disease', 'بیماری پیوند علیه میزبان', 'im'],
    ['HAART', 'highly active antiretroviral therapy', 'درمان ضدرتروویروسی بسیار فعال', 'dx'],
    ['Hct', 'hematocrit', 'هماتوکریت', 'hb'],
    ['HD', 'Hodgkin disease', 'بیماری هاجکین', 'ly'],
    ['HDN', 'hemolytic disease of the newborn', 'بیماری همولیتیک نوزاد', 'co'],
    ['Hgb, Hb', 'hemoglobin', 'هموگلوبین', 'hb'],
    ['HIV', 'human immunodeficiency virus', 'ویروس نقص ایمنی انسانی', 'im'],
    ['hs-CRP', 'high-sensitivity C-reactive protein', 'پروتئین واکنشی C با حساسیت بالا', 'dx'],
    ['IF', 'intrinsic factor', 'فاکتور داخلی', 'hb'],
    ['Ig', 'immunoglobulin (IgA, IgD, IgE, IgG, IgM)', 'ایمونوگلوبولین (پنج رده)', 'im'],
    ['INR', 'international normalized ratio', 'نسبت نرمال‌شده بین‌المللی', 'co'],
    ['ITP', 'idiopathic thrombocytopenic purpura', 'پورپورای ترومبوسیتوپنیک ایدیوپاتیک', 'co'],
    ['KS', 'Kaposi sarcoma', 'سارکوم کاپوزی', 'im'],
    ['lymphs', 'lymphocytes', 'لنفوسیت‌ها', 'hb'],
    ['MAI', 'Mycobacterium avium-intracellulare', 'مایکوباکتریوم آویوم-اینتراسلولار', 'im'],
    ['MCH', 'mean corpuscular hemoglobin', 'میانگین هموگلوبین گلبولی', 'dx'],
    ['MCHC', 'mean corpuscular hemoglobin concentration', 'میانگین غلظت هموگلوبین گلبولی', 'dx'],
    ['MCV', 'mean corpuscular volume', 'میانگین حجم گلبولی', 'dx'],
    ['MDS', 'myelodysplastic syndrome', 'سندرم میلودیسپلاستیک', 'hb'],
    ['MODS', 'multiple organ dysfunction syndrome', 'سندرم اختلال عملکرد چند ارگان', 'dx'],
    ['monos', 'monocytes', 'مونوسیت‌ها', 'hb'],
    ['MRSA', 'methicillin-resistant Staphylococcus aureus', 'استافیلوکوک طلایی مقاوم به متی‌سیلین', 'dx'],
    ['NHL', 'non-Hodgkin lymphoma', 'لنفوم غیرهاجکین', 'ly'],
    ['NK', 'natural killer (cell)', 'سلول کشنده طبیعی', 'im'],
    ['PA', 'pernicious anemia', 'کم‌خونی پرنیشیوز (کشنده)', 'hb'],
    ['PCP', 'Pneumocystis pneumonia', 'پنومونی پنوموسیستیس', 'im'],
    ['PCT', 'procalcitonin', 'پروکلسی‌تونین', 'dx'],
    ['PCV', 'packed cell volume', 'حجم سلول‌های فشرده (هماتوکریت)', 'hb'],
    ['Ph', 'Philadelphia chromosome', 'کروموزوم فیلادلفیا', 'dx'],
    ['PLT', 'platelet (count)', 'پلاکت (شمارش پلاکت)', 'co'],
    ['PMN, poly, seg', 'polymorphonuclear (segmented) neutrophil', 'نوتروفیل چندهسته‌ای (سگمانته)', 'hb'],
    ['PRBC', 'packed red blood cells', 'گلبول قرمز متراکم', 'co'],
    ['PT, pro-time', 'prothrombin time', 'زمان پروترومبین', 'co'],
    ['PTT', 'partial thromboplastin time', 'زمان ترومبوپلاستین نسبی', 'co'],
    ['RBC', 'red blood cell (count)', 'گلبول قرمز (شمارش)', 'hb'],
    ['Rh', 'Rhesus factor (Rh+ / Rh−)', 'عامل رزوس (ارهاش مثبت/منفی)', 'co'],
    ['SCIDS', 'severe combined immunodeficiency syndrome', 'سندرم نقص ایمنی مرکب شدید', 'im'],
    ['sed rate', 'sedimentation rate (ESR)', 'سرعت رسوب', 'dx'],
    ['SIRS', 'systemic inflammatory response syndrome', 'سندرم پاسخ التهابی سیستمیک', 'dx'],
    ['SLE', 'systemic lupus erythematosus', 'لوپوس اریتماتوی سیستمیک', 'im'],
    ['TIBC', 'total iron-binding capacity', 'ظرفیت کل اتصال آهن', 'dx'],
    ['TTP', 'thrombotic thrombocytopenic purpura', 'پورپورای ترومبوسیتوپنیک ترومبوتیک', 'co'],
    ['vWF', 'von Willebrand factor', 'فاکتور فون ویلبراند', 'co'],
    ['WBC', 'white blood cell (count)', 'گلبول سفید (شمارش)', 'hb'],
    ['WNL', 'within normal limits', 'در محدوده طبیعی', 'dx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Immunonutrition_and_Pharmacology: 'ایمونونوتریشن و دارو'
  };
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * هر واژه با قاعده‌های ساختاری (پسوند) و کلیدواژه‌های تعریف انگلیسی در یکی از شش دسته قرار می‌گیرد.
   * ترتیب قاعده‌ها مهم است: روش و دارو پیش از بیماری بررسی می‌شود تا splenectomy «بیماری» شمرده نشود. */
  const CATS = [
    { id: 'cell', icon: '🔬', name: 'سلول‌ها و مولکول‌ها' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'body', icon: '🫀', name: 'ساختار و عملکرد' },
    { id: 'dz', icon: '🦠', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🌡️', name: 'نشانه‌ها و یافته‌ها' },
    { id: 'lab', icon: '🧪', name: 'آزمایش و تصویربرداری' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
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
    rbc: ['erythrocyte', 'گلبول قرمز'], neutrophil: ['neutrophil', 'نوتروفیل'], eosinophil: ['eosinophil', 'ائوزینوفیل'], basophil: ['basophil', 'بازوفیل'],
    lymphocyte: ['lymphocyte', 'لنفوسیت'], monocyte: ['monocyte', 'مونوسیت'], platelet: ['thrombocyte', 'پلاکت']
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
    ${lab(42, 134, 'neutrophil', '۵۴–۷۰٪', { size: 10.5 })}${lab(108, 134, 'eosinophil', '۱–۴٪', { size: 10.5 })}${lab(174, 134, 'basophil', '&lt;۱٪', { size: 10.5 })}${lab(244, 134, 'lymphocyte', '۲۰–۳۸٪', { size: 10.5 })}${lab(304, 134, 'monocyte', '۳–۹٪', { size: 10.5 })}
    <line x1="211" y1="44" x2="211" y2="150" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>
    ${f(108, 174, 'دانه‌دار: هسته چندقسمتی یا دوقسمتی', { size: 10.5, fill: '#a31b33' })}${f(273, 174, 'بی‌دانه: هسته یکپارچه', { size: 10.5, fill: '#1272a3' })}`, 'خانواده گلبول‌های سفید');

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
      ${lab(170, 80, 'Plasma ≈ 55%', 'پلاسما: آب، پروتئین، املاح', { anchor: 'start', size: 12.5 })}
      ${lab(170, 120, 'Buffy coat &lt; 1%', 'گلبول سفید و پلاکت', { anchor: 'start', size: 12.5 })}
      ${lab(170, 165, 'RBC ≈ 45%', 'گلبول قرمز = هماتوکریت', { anchor: 'start', size: 12.5 })}
      ${f(106, 228, 'خون کامل پس از سانتریفیوژ', { size: 10.5 })}`, 'لوله خون سانتریفیوژشده',
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
      ${lab(235, 128, 'biconcave disc', 'دیسک دوکاو، بدون هسته', { size: 12 })}
      ${f(80, 12, 'نمای روبه‌رو', { size: 10.5 })}${f(235, 30, 'برش از کنار', { size: 10.5 })}`, 'گلبول قرمز دوکاو', `${marker(a)}${linear(g, '#e2474f', '#b9232f', true)}`);
  };

  /* گسترش خون محیطی */
  A.smear = () => svg(320, 190, `<rect width="320" height="190" fill="#fdf5f2"/>
    ${[[22, 20], [62, 14], [100, 32], [262, 22], [300, 58], [30, 150], [72, 168], [240, 160], [292, 140], [160, 172], [128, 18], [212, 16], [14, 90], [306, 104], [192, 176], [116, 160], [182, 30], [150, 100]].map(p => cell.rbc(p[0], p[1], 16)).join('')}
    ${cell.neutrophil(62, 92, 28)}${cell.lymphocyte(142, 64, 24)}${cell.monocyte(238, 92, 26)}${cell.eosinophil(110, 132, 21)}${cell.basophil(196, 136, 19)}
    ${cell.platelet(176, 52, 7)}${cell.platelet(98, 92, 6)}${cell.platelet(266, 126, 6)}${cell.platelet(36, 124, 5)}`, 'گسترش خون محیطی');

  /* خون‌سازی: درخت رده‌ها */
  A.hemato = () => {
    const a = 'm' + (++UID);
    const leaf = (x, k, en, fa, r) => `${cell[k](x, 168, r || 15)}${lab(x, 200, en, fa, { size: 9.5, gap: 11 })}`;
    return svg(400, 220, `
      ${cell.stem(200, 26, 17)}${lab(200, 58, 'hemocytoblast', 'سلول بنیادی خون‌ساز', { size: 10.5 })}
      ${curve(a, 'M180 78 Q150 86 118 96', '#c8243f')}${curve(a, 'M220 78 Q250 86 292 96', '#12a594')}
      ${pill(38, 98, 156, 26, '#fde3e7')}${t(116, 115, 'myeloid stem cell', { size: 11, fill: '#a31b33', w: 900 })}
      ${pill(228, 98, 140, 26, '#d9f5ef')}${t(298, 115, 'lymphoid stem cell', { size: 11, fill: '#0b7a6c', w: 900 })}
      <g stroke="#e9b8c1" stroke-width="1.6">${[30, 88, 148, 206].map(x => `<path d="M116 124 L${x} 150"/>`).join('')}</g>
      <g stroke="#a7dfd5" stroke-width="1.6">${[256, 312, 368].map(x => `<path d="M298 124 L${x} 150"/>`).join('')}</g>
      ${leaf(30, 'rbc', 'RBC', 'اریتروسیت', 14)}${leaf(88, 'platelet', 'platelet', 'مگاکاریوسیت', 9)}${leaf(148, 'neutrophil', 'granulocyte', 'گرانولوسیت')}${leaf(206, 'monocyte', 'monocyte', 'مونوسیت', 14)}
      ${leaf(256, 'lymphocyte', 'B cell', 'مغز استخوان')}${leaf(312, 'lymphocyte', 'T cell', 'تیموس')}${leaf(368, 'lymphocyte', 'NK cell', 'کشنده طبیعی')}`, 'خون‌سازی', marker(a));
  };

  /* هموگلوبین: چهار زنجیره گلوبین و هِم */
  A.hemoglobin = () => {
    const g1 = 'g' + (++UID), g2 = 'g' + (++UID);
    const unit = (x, y, g) => `<circle cx="${x}" cy="${y}" r="31" fill="url(#${g})" stroke="#b01d33" stroke-width="1.4"/><g transform="translate(${x} ${y})"><rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" fill="#c8243f"/><circle r="5.5" fill="#ffd36b"/>${t(0, 3.5, 'Fe', { size: 7.5, fill: '#7a3b00', w: 900 })}</g>`;
    return svg(340, 180, `${unit(140, 56, g1)}${unit(200, 56, g2)}${unit(140, 116, g2)}${unit(200, 116, g1)}
      ${lab(52, 52, 'globin', '۴ زنجیره پروتئینی', { size: 12.5 })}${lab(290, 52, 'heme', 'رنگدانه آهن‌دار', { size: 12.5 })}
      <path d="M77 47 L111 52" stroke="${LINE}" stroke-width="1.4"/><circle cx="111" cy="52" r="2.2" fill="${LINE}"/><path d="M268 47 L211 55" stroke="${LINE}" stroke-width="1.4"/><circle cx="211" cy="55" r="2.2" fill="${LINE}"/>
      ${f(170, 168, 'هِم + گلوبین = هموگلوبین؛ هر هِم یک مولکول اکسیژن می‌گیرد', { size: 10.5, fill: '#a31b33' })}`, 'هموگلوبین',
      `${radial(g1, '#ffd1d6', '#ef8d98')}${radial(g2, '#ffe0e3', '#f5a7af')}`);
  };

  /* شکل‌های گلبول قرمز */
  A.rbcshapes = () => {
    const g = 'g' + (++UID);
    const box = (x, art, en, fa) => `<rect x="${x}" y="8" width="96" height="136" rx="12" fill="#fbf7f6" stroke="#efe5e2"/>${art}${lab(x + 48, 116, en, fa, { size: 10.5 })}`;
    return svg(420, 152, `
      ${box(6, cell.rbc(54, 60, 30), 'normal', 'دیسک یکنواخت')}
      ${box(110, `<path d="M128 72 q22 -48 66 -34 q-30 2 -42 22 q-8 20 18 34 q-44 6 -42 -22z" fill="url(#${g})" stroke="#a81f2b" stroke-width="1.4"/>`, 'sickle cell', 'داسی‌شکل')}
      ${box(214, `<circle cx="262" cy="60" r="24" fill="url(#${g})" stroke="#a81f2b" stroke-width="1.4"/>`, 'spherocyte', 'کروی، بدون گودی')}
      ${box(318, `${cell.rbc(340, 46, 11)}${cell.rbc(378, 64, 24)}<path d="M330 84 q16 -14 32 0 q-6 14 -16 10 q-10 6 -16 -10z" fill="url(#${g})" stroke="#a81f2b"/>`, 'aniso / poikilo', 'اندازه و شکل گوناگون')}`, 'شکل‌های گلبول قرمز',
      radial(g, '#f28d95', '#c12634', '50%'));
  };

  /* سه سازوکار کم‌خونی */
  A['anemia-tree'] = () => {
    const a = 'm' + (++UID);
    const col = (x, c, cl, en, fa, items) => `${pill(x, 66, 110, 40, c)}${t(x + 55, 83, en, { size: 11, fill: cl, w: 900 })}${f(x + 55, 98, fa, { size: 10, fill: cl })}
      ${items.map((s, i) => `<text x="${x + 55}" y="${128 + i * 17}" font-size="10.5" font-weight="700" fill="${INK}" text-anchor="middle" font-family="${FONT_EN}">${s}</text>`).join('')}`;
    return svg(370, 220, `${pill(110, 10, 150, 30, '#c8243f')}${t(185, 25, 'ANEMIA', { size: 12, fill: '#fff', w: 900 })}${f(185, 36, 'کمبود RBC یا Hgb', { size: 8.5, fill: '#fde3e7' })}
      ${arrow(a, 150, 42, 72, 62)}${arrow(a, 185, 42, 185, 62)}${arrow(a, 220, 42, 298, 62)}
      ${col(16, '#fff1d6', '#9a5b00', '↓ production', 'ساخت کم', ['iron-deficiency', 'aplastic', 'pernicious (B12)', 'sideroblastic'])}
      ${col(130, '#fde3e7', '#a31b33', '↑ destruction', 'تخریب زیاد', ['hemolytic', 'sickle cell', 'thalassemia', 'spherocytic'])}
      ${col(244, '#ede7fc', '#5b3fbf', 'blood loss', 'از دست رفتن خون', ['hemorrhagic', 'acute bleeding', 'chronic bleeding'])}`, 'سازوکار کم‌خونی‌ها', marker(a));
  };

  /* ماتریس لوسمی‌ها */
  A['leuk-matrix'] = () => {
    const c = (x, y, ab, en, fa, col, bg) => `<rect x="${x}" y="${y}" width="108" height="64" rx="12" fill="${bg}"/>${t(x + 54, y + 26, ab, { size: 20, fill: col, w: 900 })}${t(x + 54, y + 42, en, { size: 8.5, fill: col })}${f(x + 54, y + 56, fa, { size: 9, fill: col })}`;
    return svg(350, 190, `${f(60, 66, 'حاد (acute)', { size: 11, fill: INK, w: 800 })}${f(60, 82, 'سلول‌های نابالغ، سریع', { size: 9 })}${f(60, 136, 'مزمن (chronic)', { size: 11, fill: INK, w: 800 })}${f(60, 152, 'سلول‌های بالغ‌تر، کند', { size: 9 })}
      ${t(176, 24, 'myelogenous', { size: 11, fill: '#a31b33' })}${f(176, 38, 'رده میلوئید', { size: 9.5 })}${t(290, 24, 'lymphocytic', { size: 11, fill: '#0b7a6c' })}${f(290, 38, 'رده لنفوئید', { size: 9.5 })}
      ${c(122, 46, 'AML', 'acute myelogenous', 'شایع در بزرگسالان', '#a31b33', '#fde3e7')}${c(236, 46, 'ALL', 'acute lymphocytic', 'شایع در کودکان', '#0b7a6c', '#d9f5ef')}
      ${c(122, 116, 'CML', 'chronic myelogenous', 'کروموزوم فیلادلفیا', '#a31b33', '#fff1f3')}${c(236, 116, 'CLL', 'chronic lymphocytic', 'شایع در سالمندان', '#0b7a6c', '#eefaf7')}`, 'انواع لوسمی');
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
      ${t(56, 120, '1. vascular spasm', { size: 10.5 })}${f(56, 134, 'تنگ شدن رگ', { size: 10 })}
      ${t(170, 120, '2. platelet plug', { size: 10.5 })}${f(170, 134, 'درپوش پلاکتی', { size: 10 })}
      ${t(284, 120, '3. coagulation', { size: 10.5 })}${f(284, 134, 'تور فیبرین و لخته', { size: 10 })}
      ${arrow(a, 106, 68, 120, 68)}${arrow(a, 220, 68, 234, 68)}${t(170, 156, 'hem/o + -stasis = hemostasis', { size: 11, fill: '#5b3fbf', w: 800 })}${f(170, 170, 'خون + توقف = بند آمدن خون‌ریزی', { size: 10 })}`, 'سه گام هموستاز', `${marker(a)}${linear(v, '#fbe2df', '#f6cfc9', true)}`);
  };

  /* آبشار انعقاد */
  A.clot = () => {
    const a = 'm' + (++UID);
    const step = (y, n, en, fa, c) => `<circle cx="30" cy="${y + 14}" r="12" fill="${c}"/>${t(30, y + 18.5, n, { size: 11.5, fill: '#fff', w: 900 })}<rect x="50" y="${y}" width="260" height="28" rx="10" fill="#fff" stroke="${c}" stroke-width="1.6"/>${t(60, y + 18.5, en, { size: 11, anchor: 'start' })}${f(302, y + 18.5, fa, { size: 9.5, anchor: 'end' })}`;
    return svg(340, 268, `
      ${step(8, '1', 'vessel injury', 'آسیب رگ', '#e5476b')}${arrow(a, 180, 37, 180, 46)}
      ${step(48, '2', 'platelets → thromboplastin', 'پلاکت‌ها جمع می‌شوند', '#a782d6')}${arrow(a, 180, 77, 180, 86)}
      ${step(88, '3', 'thromboplastin + Ca²⁺ + factors', 'کلسیم و ۱۲ فاکتور', '#e5a500')}${arrow(a, 180, 117, 180, 126)}
      ${step(128, '4', 'prothrombin → thrombin', 'ساخت ترومبین', '#ff7a45')}${arrow(a, 180, 157, 180, 166)}
      ${step(168, '5', 'fibrinogen → fibrin', 'رشته‌های فیبرین', '#12a594')}${arrow(a, 180, 197, 180, 206)}
      <rect x="110" y="210" width="140" height="34" rx="12" fill="#c8243f"/>${t(180, 227, 'CLOT (thrombus)', { size: 11.5, fill: '#fff', w: 900 })}${f(180, 239, 'لخته', { size: 9, fill: '#ffd6dc' })}
      ${curve(a, 'M314 186 C340 210 300 232 254 228', '#12a594', 1.6, true)}${t(322, 250, 'plasmin', { size: 9.5, fill: '#0b7a6c', anchor: 'end' })}${f(322, 262, 'حل‌کننده لخته', { size: 8.5, anchor: 'end', fill: '#0b7a6c' })}
      ${t(14, 250, 'heparin', { size: 9.5, fill: '#5b3fbf', anchor: 'start' })}${f(14, 262, 'مهار انعقاد', { size: 8.5, anchor: 'start', fill: '#5b3fbf' })}`, 'آبشار انعقاد', marker(a));
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
      ${col(0, 'A', () => tA, ['آنتی‌ژن A', Y(43, 146, '#ff9600'), 'anti-B'])}
      ${col(88, 'B', () => tB, ['آنتی‌ژن B', Y(43, 146, '#1cb0f6'), 'anti-A'])}
      ${col(176, 'AB', i => (i % 2 ? tB : tA), ['A و B', '', 'بدون آنتی‌بادی'])}
      ${col(264, 'O', () => () => '', ['بدون آنتی‌ژن', `${Y(32, 146, '#1cb0f6')}${Y(54, 146, '#ff9600')}`, 'anti-A و anti-B'])}
      `, 'گروه‌های خونی ABO');
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
    return svg(340, 200, `${f(213, 18, 'اهداکننده گلبول قرمز (donor)', { size: 10.5, fill: INK, w: 800 })}
      ${G.map((d, j) => t(122 + j * 58, 40, d, { size: 13, fill: '#c8243f', w: 900 })).join('')}
      ${G.map((r, i) => t(70, 69 + i * 34, r, { size: 13, fill: '#1272a3', w: 900 })).join('')}
      <text x="22" y="110" font-size="10.5" font-weight="800" fill="${INK}" text-anchor="middle" direction="rtl" font-family="${FONT_FA}" transform="rotate(-90 22 110)">گیرنده (recipient)</text>
      ${cells}${f(213, 194, 'O اهداکننده همگانی • AB گیرنده همگانی (بدون در نظر گرفتن Rh)', { size: 9.5 })}`, 'سازگاری انتقال گلبول قرمز');
  };

  /* بیماری همولیتیک نوزاد (Rh) */
  A['rh-hdn'] = () => {
    const a = 'm' + (++UID);
    const panel = (x, n, title, fa, inner) => `<rect x="${x}" y="6" width="104" height="176" rx="14" fill="#fbf7f6" stroke="#efe5e2"/>${t(x + 52, 24, n, { size: 11, fill: '#7b5ce0', w: 900 })}${f(x + 52, 38, title, { size: 9.5, fill: INK, w: 700 })}${inner}${fa.map((l, i) => f(x + 52, 156 + i * 13, l, { size: 9 })).join('')}`;
    const mom = (x, c) => `<ellipse cx="${x + 52}" cy="94" rx="40" ry="40" fill="${c}" opacity=".5"/>`;
    const baby = (x) => `<circle cx="${x + 52}" cy="100" r="18" fill="#ffd6dc" stroke="#c8243f" stroke-width="1.3"/>${t(x + 52, 104, 'Rh+', { size: 9, fill: '#c8243f', w: 900 })}`;
    const Yb = (x, y) => `<path d="M${x} ${y + 6} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="#1272a3" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    return svg(340, 188, `
      ${panel(4, 'بارداری اول', 'مادر Rh−، جنین Rh+', ['گلبول جنین در زایمان', 'وارد خون مادر می‌شود'], `${mom(4, '#dfe9f6')}${baby(4)}${cell.rbc(36, 72, 6)}${cell.rbc(70, 70, 6)}`)}
      ${panel(118, 'پس از زایمان', 'حساس شدن مادر', ['مادر آنتی‌بادی', 'ضد Rh می‌سازد'], `${mom(118, '#dfe9f6')}${[[150, 80], [170, 100], [190, 84], [158, 110], [184, 112]].map(p => Yb(p[0], p[1])).join('')}`)}
      ${panel(232, 'بارداری بعد', 'اریتروبلاستوز جنینی', ['آنتی‌بادی از جفت', 'می‌گذرد ← همولیز'], `${mom(232, '#dfe9f6')}${baby(232)}${Yb(266, 92)}${Yb(300, 96)}${Yb(284, 120)}`)}
      ${arrow(a, 108, 90, 116, 90)}${arrow(a, 222, 90, 230, 90)}`, 'ناسازگاری Rh', marker(a));
  };

  /* خونریزی‌های پوستی */
  A.bleeds = () => {
    const skin = 'g' + (++UID);
    const box = (x, art, en, fa) => `<rect x="${x}" y="6" width="80" height="80" rx="12" fill="url(#${skin})"/>${art}${lab(x + 40, 104, en, fa, { size: 10 })}`;
    return svg(340, 130, `
      ${box(4, dots(44, 46, 28, 22, '#a3203a', 1.6, 3), 'petechiae', 'نقطه‌ای، ریز')}
      ${box(88, `<path d="M108 40 q8 -10 16 -2 q10 -4 12 8 q6 10 -6 14 q-6 10 -16 2 q-12 0 -6 -22z" fill="#8e2c6e" opacity=".75"/><circle cx="148" cy="64" r="6" fill="#8e2c6e" opacity=".6"/>`, 'purpura', 'لکه ارغوانی')}
      ${box(172, `<ellipse cx="212" cy="46" rx="30" ry="24" fill="#5b3fbf" opacity=".35"/><ellipse cx="210" cy="46" rx="20" ry="15" fill="#3a2380" opacity=".45"/><ellipse cx="220" cy="54" rx="22" ry="12" fill="#c9a200" opacity=".25"/>`, 'ecchymosis', 'کبودی وسیع')}
      ${box(256, `<ellipse cx="296" cy="50" rx="26" ry="20" fill="#7a1530" opacity=".55"/><ellipse cx="290" cy="42" rx="10" ry="5" fill="#fff" opacity=".25"/>`, 'hematoma', 'تجمع خون، برجسته')}`, 'خونریزی‌های پوستی',
      linear(skin, '#fbe3d3', '#f1cdb6', true));
  };

  /* ---------- دستگاه لنفاوی ---------- */
  /* مسیر لنف */
  A['lymph-flow'] = () => {
    const a = 'm' + (++UID);
    const st = (y, en, fa, c) => `<rect x="60" y="${y}" width="270" height="26" rx="13" fill="${c}"/>${t(76, y + 17, en, { size: 10.5, anchor: 'start' })}${f(320, y + 17, fa, { size: 9.5, anchor: 'end', fill: INK })}`;
    return svg(340, 250, `
      ${st(6, 'interstitial fluid', 'مایع بین سلولی', '#fff4cf')}${arrow(a, 195, 33, 195, 41, '#12a594')}
      ${st(44, 'lymph capillaries', 'مویرگ لنفاوی', '#d9f5ef')}${arrow(a, 195, 71, 195, 79, '#12a594')}
      ${st(82, 'lymphatic vessels', 'رگ لنفاوی با دریچه', '#c3eee5')}${arrow(a, 195, 109, 195, 117, '#12a594')}
      ${st(120, 'lymph nodes', 'گره: فیلتر', '#a7e3d6')}${arrow(a, 195, 147, 195, 155, '#12a594')}
      ${st(158, 'thoracic duct • right lymphatic duct', 'مجاری', '#8fd9c9')}${arrow(a, 195, 185, 195, 193, '#12a594')}
      <rect x="60" y="196" width="270" height="30" rx="13" fill="#1cb0f6"/>${t(76, 215, 'subclavian veins', { size: 11, anchor: 'start', fill: '#fff' })}${f(320, 215, 'بازگشت به خون', { size: 9.5, anchor: 'end', fill: '#fff' })}
      ${f(195, 244, 'جریان یک‌طرفه؛ دریچه‌ها جلوی برگشت را می‌گیرند', { size: 10, fill: '#0b7a6c' })}
      ${curve(a, 'M54 210 C14 200 14 30 54 20', '#c8243f', 1.6, true)}${f(28, 124, 'چرخه', { size: 9.5, fill: '#c8243f', anchor: 'start' })}`, 'مسیر لنف', marker(a));
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
      ${lab(20, 16, 'afferent vessels', 'رگ‌های آوران (ورود)', { anchor: 'start', size: 10.5 })}
      ${lab(334, 150, 'efferent vessel', 'رگ وابران (خروج)', { anchor: 'end', size: 10.5 })}
      ${lab(304, 40, 'capsule', 'کپسول', { anchor: 'end', size: 10 })}<path d="M262 44 L238 54" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(20, 168, 'follicle (nodule)', 'ندول؛ محل تکثیر B', { anchor: 'start', size: 10 })}<path d="M70 158 L106 120" stroke="${LINE}" stroke-width="1.2"/><circle cx="106" cy="120" r="2" fill="${LINE}"/>
      ${f(170, 206, 'لنفوسیت‌ها و ماکروفاژها لنف را صاف می‌کنند', { size: 10, fill: '#0b7a6c' })}`, 'گره لنفاوی', `${marker(a, '#0b7a6c')}${radial(g, '#d6f4ee', '#9fdccf', '50%')}`);
  };

  /* مویرگ خونی، مایع بینابینی و مویرگ لنفاوی */
  A.capillary = () => {
    const a = 'm' + (++UID), b = 'g' + (++UID), l = 'g' + (++UID);
    return svg(340, 210, `
      <rect x="10" y="22" width="320" height="30" rx="15" fill="url(#${b})"/>${t(170, 42, 'blood capillary', { size: 11.5, fill: '#fff', w: 900 })}
      <rect x="10" y="62" width="320" height="76" rx="10" fill="#fff8e6"/>${f(170, 106, 'مایع بینابینی (interstitial fluid)', { size: 11, fill: '#a36b00', w: 700 })}
      ${[[44, 84], [100, 120], [266, 86], [224, 122], [160, 80]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="11" fill="#f3ebe4" stroke="#cdbfb3"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#cdbfb3"/>`).join('')}
      ${arrow(a, 70, 54, 70, 74, '#e5a500')}${arrow(a, 130, 54, 130, 74, '#e5a500')}${arrow(a, 196, 130, 196, 154, '#12a594')}${arrow(a, 252, 130, 252, 154, '#12a594')}
      <path d="M10 170 h280 q22 0 30 -16" stroke="url(#${l})" stroke-width="26" stroke-linecap="round" fill="none"/>${t(150, 174, 'lymph capillary → lymph', { size: 11.5, fill: '#fff', w: 900 })}
      ${f(170, 202, 'پلاسما از مویرگ بیرون می‌آید؛ بخشی به رگ برمی‌گردد و مازاد آن لنف می‌شود', { size: 9.5 })}`, 'مایع بینابینی و لنف',
      `${marker(a)}${linear(b, '#e2474f', '#c8243f')}${linear(l, '#4cc4ad', '#12a594')}`);
  };

  /* ---------- ایمنی ---------- */
  /* انواع ایمنی */
  A.immunity = () => {
    const a = 'm' + (++UID);
    const box = (x, y, w, en, fa, c, cl) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="12" fill="${c}"/>${t(x + w / 2, y + 17, en, { size: 11, fill: cl, w: 900 })}${f(x + w / 2, y + 32, fa, { size: 9.5, fill: cl })}`;
    return svg(360, 236, `
      ${box(120, 6, 120, 'immunity', 'ایمنی', '#ede7fc', '#5b3fbf')}
      ${arrow(a, 150, 46, 92, 64)}${arrow(a, 210, 46, 268, 64)}
      ${box(16, 66, 150, 'natural (innate)', 'ذاتی: پوست، فاگوسیت، NK', '#fff4cf', '#9a6a00')}
      ${box(194, 66, 150, 'acquired (adaptive)', 'اکتسابی: لنفوسیت B و T', '#ddf1fb', '#1272a3')}
      ${arrow(a, 238, 106, 204, 126)}${arrow(a, 300, 106, 310, 126)}
      ${box(150, 128, 104, 'active', 'بدن خودش می‌سازد', '#d9f5ef', '#0b7a6c')}${box(262, 128, 90, 'passive', 'آنتی‌بادی قرضی', '#fde3e7', '#a31b33')}
      ${f(202, 188, 'بیماری یا واکسن', { size: 9.5, fill: '#0b7a6c' })}${f(202, 202, 'حافظه طولانی', { size: 9.5 })}
      ${f(307, 188, 'جفت، شیر مادر', { size: 9.5, fill: '#a31b33' })}${f(307, 202, 'گاماگلوبولین • کوتاه‌مدت', { size: 9.5 })}
      ${f(92, 130, 'بی‌حافظه و غیراختصاصی', { size: 9.5 })}${f(92, 146, 'از بدو تولد', { size: 9.5 })}`, 'انواع ایمنی', marker(a));
  };

  /* چهار نشانه التهاب */
  A.inflammation = () => {
    const box = (x, icon, la, en, fa, c) => `<rect x="${x}" y="6" width="80" height="120" rx="14" fill="${c}"/>${icon}${t(x + 40, 92, la, { size: 9.5, fill: MUTED, italic: true })}${t(x + 40, 106, en, { size: 11, w: 900 })}${f(x + 40, 120, fa, { size: 10, fill: INK })}`;
    return svg(340, 154, `
      ${box(2, `<circle cx="42" cy="46" r="24" fill="#e5476b" opacity=".85"/><circle cx="42" cy="46" r="14" fill="#ff7a8f"/>`, 'rubor', 'redness', 'قرمزی', '#ffe8ec')}
      ${box(86, `<path d="M126 22 c10 14 -6 18 4 30 c8 10 -2 20 -4 22 c14 -2 22 -14 16 -28 c-4 -10 -14 -14 -16 -24z" fill="#ff9600"/><path d="M118 52 c-6 10 2 20 8 22 c-8 -10 0 -14 -8 -22z" fill="#ffc800"/>`, 'calor', 'heat', 'گرمی', '#fff1d6')}
      ${box(170, `<ellipse cx="210" cy="50" rx="26" ry="20" fill="#f3c2a6"/><ellipse cx="210" cy="46" rx="16" ry="10" fill="#fff" opacity=".35"/>`, 'tumor', 'swelling', 'تورم', '#fbefe7')}
      ${box(254, `<path d="M294 24 l-10 22 h12 l-8 24 l22 -30 h-12 l8 -16z" fill="#7b5ce0"/>`, 'dolor', 'pain', 'درد', '#efeafd')}
      ${f(170, 146, 'هیستامین رگ‌ها را گشاد و نشت‌پذیر می‌کند؛ فاگوسیت‌ها به محل می‌رسند', { size: 9.5 })}`, 'نشانه‌های التهاب');
  };

  /* آنتی‌بادی Y شکل */
  A.antibody = () => {
    const h = 'g' + (++UID), l = 'g' + (++UID);
    return svg(340, 210, `
      <g stroke-linecap="round" fill="none"><path d="M170 186 V112" stroke="url(#${h})" stroke-width="16"/><path d="M170 112 L116 56" stroke="url(#${h})" stroke-width="16"/><path d="M170 112 L224 56" stroke="url(#${h})" stroke-width="16"/>
      <path d="M150 186 V118 L102 70" stroke="url(#${l})" stroke-width="7"/><path d="M190 186 V118 L238 70" stroke="url(#${l})" stroke-width="7"/></g>
      <path d="M100 30 l16 -11 16 11 -7 15 h-18z" fill="#ff9600"/><path d="M208 30 l16 -11 16 11 -7 15 h-18z" fill="#ff9600"/>
      <rect x="96" y="50" width="40" height="12" rx="6" fill="#ffc800" opacity=".6"/><rect x="204" y="50" width="40" height="12" rx="6" fill="#ffc800" opacity=".6"/>
      ${lab(60, 24, 'antigen', 'آنتی‌ژن', { size: 11, fill: '#cc7800' })}${lab(294, 52, 'binding site', 'محل اتصال', { size: 10.5 })}
      ${lab(232, 168, 'heavy chain', 'زنجیره سنگین', { size: 10.5, anchor: 'start' })}${lab(256, 110, 'light chain', 'زنجیره سبک', { size: 10.5, anchor: 'start' })}
      ${t(84, 150, 'Fc stem', { size: 10, fill: MUTED })}${f(84, 164, 'ساقه', { size: 9.5 })}
      ${t(170, 204, 'antibody = immunoglobulin (Ig)', { size: 11, fill: '#1581b8', w: 900 })}`, 'آنتی‌بادی', `${linear(h, '#36b8f0', '#1272a3', true)}${linear(l, '#b9e8fd', '#7fcdf3', true)}`);
  };

  /* پنج رده ایمونوگلوبولین */
  A['ig-classes'] = () => {
    const Y = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 18 V2 M0 2 L-11 -11 M0 2 L11 -11" stroke="${c}" stroke-width="5" stroke-linecap="round" fill="none"/></g>`;
    const col = (x, name, art, fa, note) => `<rect x="${x}" y="6" width="64" height="150" rx="12" fill="#f4fbff" stroke="#d7eefa"/>${t(x + 32, 26, name, { size: 13, fill: '#1272a3', w: 900 })}${art}${f(x + 32, 124, fa, { size: 9.5, fill: INK, w: 700 })}${f(x + 32, 140, note, { size: 8.5 })}`;
    const pent = (cx, cy) => [0, 1, 2, 3, 4].map(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return `<g transform="rotate(${i * 72 + 180} ${cx} ${cy})">${Y(cx, cy - 18, .8, '#7b5ce0')}</g>`; }).join('') + `<circle cx="${cx}" cy="${cy}" r="5" fill="#7b5ce0"/>`;
    return svg(340, 162, `
      ${col(2, 'IgG', Y(34, 66, 1.4, '#1899d6'), 'فراوان‌ترین', 'عبور از جفت')}
      ${col(70, 'IgM', pent(102, 70), 'پنج‌تایی', 'اولین پاسخ')}
      ${col(138, 'IgA', `<g transform="rotate(90 162 70)">${Y(162, 70, 1.1, '#12a594')}</g><g transform="rotate(-90 178 70)">${Y(178, 70, 1.1, '#12a594')}</g>`, 'دوتایی', 'اشک، بزاق، شیر')}
      ${col(206, 'IgE', `${Y(238, 66, 1.4, '#e5476b')}<circle cx="238" cy="96" r="7" fill="#ffd36b"/>`, 'آلرژی', 'انگل‌ها')}
      ${col(274, 'IgD', `${Y(306, 66, 1.4, '#9aa9b1')}<rect x="292" y="88" width="28" height="8" rx="4" fill="#dfe6ea"/>`, 'سطح سلول B', 'گیرنده')}`, 'رده‌های ایمونوگلوبولین');
  };

  /* لنفوسیت‌های B و T */
  A['bt-cells'] = () => {
    const a = 'm' + (++UID);
    const Y = (x, y, c) => `<path d="M${x} ${y + 6} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="${c || '#1899d6'}" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    return svg(360, 226, `
      ${pill(8, 6, 166, 24, '#ddf1fb')}${t(91, 22, 'humoral immunity', { size: 11, fill: '#1272a3', w: 900 })}
      ${pill(186, 6, 166, 24, '#d9f5ef')}${t(269, 22, 'cell-mediated immunity', { size: 11, fill: '#0b7a6c', w: 900 })}
      ${cell.lymphocyte(40, 78, 24)}${lab(40, 120, 'B cell', 'مغز استخوان', { size: 10.5 })}${arrow(a, 66, 78, 88, 78)}
      ${cell.plasma(118, 78, 22)}${lab(118, 120, 'plasma cell', 'پلاسماسل', { size: 10.5 })}
      ${[[150, 60], [160, 80], [150, 96], [166, 102]].map(p => Y(p[0], p[1])).join('')}${f(96, 150, 'آنتی‌بادی در خون و لنف', { size: 10, fill: '#1272a3' })}
      ${cell.lymphocyte(214, 78, 22)}${lab(214, 120, 'helper T', 'CD4 • فرمانده', { size: 10.5 })}${arrow(a, 238, 78, 262, 78, '#0b7a6c')}
      ${cell.lymphocyte(290, 78, 22)}<circle cx="290" cy="78" r="23" fill="none" stroke="#e5476b" stroke-width="2" stroke-dasharray="3 3"/>${lab(290, 120, 'cytotoxic T', 'CD8 • کشنده', { size: 10.5 })}
      <circle cx="336" cy="74" r="12" fill="#f3e3c8" stroke="#c9a46a"/>${dots(336, 74, 8, 5, '#c8243f', 1.6, 2)}${arrow(a, 312, 76, 322, 75, '#e5476b')}
      ${f(270, 150, 'حمله مستقیم به سلول آلوده یا سرطانی', { size: 10, fill: '#0b7a6c' })}
      <rect x="40" y="168" width="280" height="44" rx="12" fill="#fbf7f6"/>${f(180, 186, 'B از Bone marrow و T از Thymus', { size: 11, fill: INK, w: 800 })}${f(180, 203, 'HIV سلول‌های CD4 را از بین می‌برد؛ هر دو بازو فلج می‌شوند', { size: 9.5 })}`, 'لنفوسیت‌های B و T', marker(a));
  };

  /* ازدیاد حساسیت فوری */
  A.allergy = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    const Y = (x, y) => `<path d="M${x} ${y + 7} V${y} M${x} ${y} l-4 -5 M${x} ${y} l4 -5" stroke="#e5476b" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
    return svg(360, 178, `
      ${[[24, 30], [40, 52], [20, 64]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#ffc800" stroke="#e5a500"/>`).join('')}${lab(32, 92, 'allergen', 'آلرژن', { size: 10.5 })}
      ${arrow(a, 54, 50, 92, 56)}
      <circle cx="140" cy="60" r="38" fill="url(#${g})" stroke="#c9a46a" stroke-width="1.5"/>${dots(140, 62, 26, 26, '#8e2c6e', 2.4, 6)}
      ${[0, 1, 2, 3, 4, 5, 6].map(i => { const an = -Math.PI * .9 + i * Math.PI * .3; return Y(140 + Math.cos(an) * 42, 60 + Math.sin(an) * 42); }).join('')}
      ${lab(140, 118, 'mast cell + IgE', 'ماست‌سل با IgE', { size: 10.5 })}
      ${arrow(a, 184, 58, 214, 58)}
      ${[[232, 40], [244, 58], [228, 70], [250, 34], [256, 72]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#8e2c6e"/>`).join('')}${lab(244, 104, 'histamine', 'هیستامین', { size: 10.5 })}
      ${arrow(a, 268, 58, 290, 58)}
      ${f(326, 34, 'کهیر', { size: 10, fill: INK, w: 700 })}${f(326, 50, 'آبریزش بینی', { size: 10, fill: INK, w: 700 })}${f(326, 66, 'تنگی نفس', { size: 10, fill: INK, w: 700 })}${f(326, 82, 'افت فشار', { size: 10, fill: '#c62828', w: 800 })}
      <rect x="24" y="138" width="312" height="30" rx="12" fill="#fff1d6"/>${f(180, 158, 'درمان: دوری از آلرژن • آنتی‌هیستامین • در آنافیلاکسی: اپی‌نفرین فوری', { size: 10, fill: '#9a5b00', w: 700 })}`, 'واکنش آلرژیک', `${marker(a)}${radial(g, '#fff7e8', '#f3dcb5')}`);
  };

  /* HIV و سلول CD4 */
  A.hiv = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    return svg(340, 180, `
      <circle cx="74" cy="78" r="36" fill="url(#${g})" stroke="#c8243f" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => { const an = i / 12 * Math.PI * 2; return `<line x1="${74 + Math.cos(an) * 36}" y1="${78 + Math.sin(an) * 36}" x2="${74 + Math.cos(an) * 46}" y2="${78 + Math.sin(an) * 46}" stroke="#c8243f" stroke-width="2.4"/><circle cx="${74 + Math.cos(an) * 48}" cy="${78 + Math.sin(an) * 48}" r="4.4" fill="#ff9600"/>`; }).join('')}
      <path d="M62 64 l24 0 l-7 26 h-10z" fill="#c8243f"/><path d="M68 72 q6 4 12 0 M68 80 q6 4 10 0" stroke="#ffd36b" stroke-width="1.6" fill="none"/>
      ${lab(74, 146, 'HIV (retrovirus)', 'ویروس RNA', { size: 11 })}
      ${arrow(a, 132, 78, 176, 78, '#c8243f', 2.4)}
      ${cell.lymphocyte(236, 78, 54)}<path d="M186 66 l9 -4 M186 90 l9 4" stroke="#1cb0f6" stroke-width="4" stroke-linecap="round"/>
      ${lab(236, 146, 'CD4 (helper) T cell', 'هدف ویروس', { size: 11 })}
      ${f(170, 174, 'CD4 کمتر از ۲۰۰ در میکرولیتر = ایدز ← عفونت‌های فرصت‌طلب', { size: 10, fill: '#a31b33', w: 700 })}`, 'HIV و سلول CD4', `${marker(a, '#c8243f')}${radial(g, '#ffe8ec', '#ffb3c0')}`);
  };

  /* ---------- آزمایش و ICU ---------- */
  A.cbc = () => {
    const rows = [['WBC', 'گلبول سفید', '5.0–10.0', '×10³/µL'], ['RBC', 'گلبول قرمز', '4.2–6.4', '×10⁶/µL'], ['Hgb', 'هموگلوبین', '12–18', 'g/dL'], ['Hct', 'هماتوکریت', '37–52', '%'], ['MCV', 'حجم گلبول', '80–100', 'fL'], ['PLT', 'پلاکت', '150–450', '×10³/µL']];
    return svg(340, 250, `<rect x="8" y="8" width="324" height="34" rx="10" fill="#c8243f"/>${t(20, 30, 'CBC', { size: 15, fill: '#fff', w: 900, anchor: 'start' })}${f(322, 30, 'شمارش کامل خون', { size: 11, fill: '#fff', anchor: 'end', w: 700 })}
      ${t(20, 58, 'test', { size: 9.5, fill: MUTED, anchor: 'start' })}${t(220, 58, 'reference range', { size: 9.5, fill: MUTED })}${t(318, 58, 'unit', { size: 9.5, fill: MUTED, anchor: 'end' })}
      ${rows.map((r, i) => `<rect x="8" y="${64 + i * 28}" width="324" height="26" rx="6" fill="${i % 2 ? '#fff' : '#f8f6f5'}"/>${t(20, 81 + i * 28, r[0], { size: 12, anchor: 'start', w: 900, fill: '#a31b33' })}${f(112, 81 + i * 28, r[1], { size: 10, anchor: 'end', fill: INK })}${t(220, 81 + i * 28, r[2], { size: 11.5 })}${t(318, 81 + i * 28, r[3], { size: 10, anchor: 'end', fill: MUTED })}`).join('')}
      ${f(170, 244, 'مقادیر تقریبی بزرگسالان؛ هر آزمایشگاه محدوده خودش را دارد', { size: 9.5 })}`, 'آزمایش CBC');
  };

  /* پیوستار سپسیس */
  A.sepsis = () => {
    const a = 'm' + (++UID);
    const steps = [['infection', ['عفونت', 'موضعی'], '#ffe1a8'], ['SIRS', ['التهاب', 'سیستمیک'], '#ffc27a'], ['sepsis', ['آسیب', 'اندام'], '#ff9a6b'], ['septic|shock', ['افت فشار', 'مقاوم'], '#f2665c'], ['MODS', ['نارسایی', 'چند اندام'], '#c8243f']];
    return svg(360, 170, `${steps.map((s, i) => { const x = 6 + i * 70; return `<path d="M${x} 40 h58 l10 22 l-10 22 h-58 l10 -22z" fill="${s[2]}"/>${s[0].split('|').map((w, j, all) => t(x + 34, 66 + (j - (all.length - 1) / 2) * 12, w, { size: 10, fill: i > 2 ? '#fff' : INK, w: 900 })).join('')}${s[1].map((w, j) => f(x + 34, 100 + j * 12, w, { size: 9.5, fill: j ? MUTED : INK })).join('')}`; }).join('')}
      ${t(180, 24, 'severity →', { size: 10, fill: MUTED })}
      <rect x="20" y="124" width="320" height="34" rx="12" fill="#fff4f2"/>${f(180, 140, 'نشانگرها: CRP و hs-CRP • procalcitonin برای عفونت باکتریایی • lactate در شوک', { size: 9.5, fill: '#a31b33', w: 700 })}${f(180, 153, 'cytokine storm: آزادسازی بی‌مهار سایتوکین‌ها ← MODS', { size: 9.5 })}`, 'پیوستار سپسیس', marker(a));
  };

  /* آهن و هپسیدین */
  A.iron = () => {
    const a = 'm' + (++UID);
    const box = (x, y, en, fa, c) => `<rect x="${x}" y="${y}" width="96" height="40" rx="12" fill="${c}"/>${t(x + 48, y + 17, en, { size: 10.5, w: 900 })}${f(x + 48, y + 32, fa, { size: 9.5, fill: INK })}`;
    return svg(360, 214, `
      ${box(10, 20, 'gut', 'جذب آهن غذا', '#fff1d6')}${box(132, 20, 'transferrin', 'حمل آهن در خون', '#ffe8ec')}${box(254, 20, 'bone marrow', 'ساخت هموگلوبین', '#fde3e7')}
      ${arrow(a, 106, 40, 130, 40)}${arrow(a, 228, 40, 252, 40)}
      ${box(132, 104, 'macrophage', 'ذخیره (ferritin)', '#ede7fc')}${curve(a, 'M180 62 L180 100', LINE, 1.6)}${curve(a, 'M200 104 C230 80 240 70 260 62', LINE, 1.6, true)}
      <rect x="10" y="104" width="100" height="56" rx="12" fill="#c8243f"/>${t(60, 124, 'hepcidin', { size: 11.5, fill: '#fff', w: 900 })}${f(60, 140, 'از کبد؛ در التهاب ↑', { size: 9.5, fill: '#ffe1e6' })}${f(60, 153, 'IL-6', { size: 8.5, fill: '#ffe1e6' })}
      <path d="M60 104 L60 70" stroke="#c8243f" stroke-width="2.2"/><path d="M52 70 h16" stroke="#c8243f" stroke-width="4" stroke-linecap="round"/>
      <path d="M110 128 L128 126" stroke="#c8243f" stroke-width="2.2"/><path d="M128 118 v16" stroke="#c8243f" stroke-width="4" stroke-linecap="round"/>
      <rect x="20" y="172" width="320" height="34" rx="12" fill="#f8f6f5"/>${f(180, 186, 'هپسیدین ورود آهن از روده و خروج آن از ماکروفاژ را می‌بندد', { size: 9.5, fill: INK, w: 700 })}${f(180, 199, 'نتیجه: فریتین بالا ولی آهن در دسترس کم ← کم‌خونی التهابی', { size: 9.5 })}`, 'آهن و هپسیدین', marker(a));
  };

  /* ---------- واژه‌سازی ---------- */
  /* آناتومی یک واژه */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 128, fa, { size: 9.5, fill: c })}`;
    return svg(360, 190, `${f(180, 22, 'یک واژه = پیشوند + ریشه + واکه رابط + پسوند', { size: 11, fill: INK, w: 700 })}
      ${part(14, 54, 'pan', '#1272a3', '#ddf1fb')}${part(72, 50, 'cyt', '#a31b33', '#fde3e7')}${part(126, 24, 'o', '#9a5b00', '#fff1d6')}${part(154, 76, 'penia', '#3f8a05', '#e7f9d8')}
      ${br(14, 68, 'prefix', 'پیشوند: همه', '#1272a3')}${br(72, 122, 'root', 'ریشه: سلول', '#a31b33')}${br(126, 150, 'vowel', 'رابط', '#9a5b00')}${br(154, 230, 'suffix', 'پسوند: کمبود', '#3f8a05')}
      <rect x="244" y="40" width="104" height="40" rx="10" fill="#f8f6f5"/>${f(296, 58, 'کمبودِ', { size: 11, fill: '#3f8a05', w: 800 })}${f(296, 74, 'همه سلول‌ها', { size: 11, fill: INK, w: 800 })}
      <path d="M236 60 h6" stroke="${LINE}" stroke-width="2"/>
      <path d="M220 150 C160 176 90 176 40 150" stroke="#c8243f" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M44 146 l-6 4 l7 3" stroke="#c8243f" stroke-width="2" fill="none"/>
      ${f(130, 184, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#c8243f', w: 700 })}`, 'آناتومی یک واژه پزشکی');
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
    id: 'lx', sym: 'Lx', name: 'زبان پزشکی', short: 'زبان', sub: 'رمز واژه‌سازی: قطعه‌ها، پیشوندها، پسوندها، جمع‌ها، تلفظ و دام‌های همزاد',
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ['قطعه‌های پازل', 'پسوندها در عمل', 'مثل یک حرفه‌ای'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: قطعه‌های پازل ================= */
      {
        id: 'lx1', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('هر واژه پزشکی یک پازل است', `واژه‌های پزشکی ترسناک به نظر می‌رسند، ولی بیشترشان از چند <b>قطعه ثابت</b> ساخته شده‌اند:<br>• <b>پیشوند</b> (prefix) در ابتدا: ${e('pan-')} = همه<br>• <b>ریشه</b> (root) در وسط: ${e('cyt')} = سلول<br>• <b>پسوند</b> (suffix) در انتها: ${e('-penia')} = کمبود${fig('wordparts', '', 'pancytopenia: کمبودِ همه سلول‌های خون. با حدود ۱۰۰ قطعه می‌شود هزاران واژه را رمزگشایی کرد.')}`),
          L('واکه رابط o', `ریشه را معمولاً با یک <b>واکه رابط</b> (بیشتر <b>o</b>) به قطعه بعدی وصل می‌کنیم. ریشه + واکه را <b>شکل ترکیبی</b> (combining form) می‌گویند و با خط مورب می‌نویسند: ${e('hem/o')}، ${e('cyt/o')}.<br><br>قاعده طلایی: اگر پسوند با <b>حرف صدادار</b> شروع شود، o حذف می‌شود:<br>• ${e('leuk/o + -emia')} ← ✅ <b>leukemia</b> (نه leukoemia)<br>• ${e('leuk/o + -cyte')} ← ✅ <b>leukocyte</b> (o می‌ماند)${memo('o مثل «چسب» است: بین دو بی‌صدا لازم است؛ وقتی پسوند خودش با صدادار شروع می‌شود، چسب اضافه است.')}`),
          M(`در واژه ${e('<b>leukemia</b>')} چرا واکه o حذف شده است؟`, ['چون پسوند -emia با حرف صدادار شروع می‌شود', 'چون leuk/o پیشوند است', 'چون o همیشه حذف می‌شود', 'چون واژه یونانی نیست'], 'وقتی پسوند با حرف صدادار (a, e, i, o, u) شروع شود، واکه رابط حذف می‌شود: leuk + emia.'),
          L('معنی را از آخر بخوان', `برای فهمیدن معنی، <b>از پسوند شروع کن</b>، بعد پیشوند، و آخر ریشه‌ها را بخوان:<br>${wb('hemat/o', '-logy')} ← «علمِ» + «خون» = <b>خون‌شناسی</b><br>${wb('hemat/o', '-logist')} ← <b>متخصص</b> خون<br>${wb('erythr/o', 'cyt/o', '-penia')} ← «کمبودِ» + «سلولِ» + «قرمز» = کمبود گلبول قرمز${memo('اول بپرس «چه شده؟» (پسوند)، بعد «برای چه چیزی؟» (ریشه‌ها). مثل گزارش خبر: اتفاق، سپس مکان.')}`),
          P('هر قطعه را به نوعش وصل کن', [['pan-', 'پیشوند'], ['hem/o', 'شکل ترکیبی ریشه'], ['-penia', 'پسوند'], ['o در cyt/o', 'واکه رابط']]),
          O(`قطعه‌های ${e('erythrocytopenia')} را به ترتیبِ نوشتن بچین`, ['erythr/o', 'cyt/o', '-penia'], 'erythr/o (قرمز) + cyt/o (سلول) + -penia (کمبود). در نوشتن از چپ به راست؛ در معنی کردن از آخر.'),
          T('دو ریشه hem/o و hemat/o هر دو به معنی «خون» هستند.', true, 'درست. hemoglobin و hematology هر دو به خون مربوط‌اند؛ sanguin/o هم یعنی خون.'),
          B('در واژه hematologist، پسوند ___ یعنی «متخصص».', ['-logist', '-logy', '-ic'], '‎-logy علم است و ‎-logist متخصص آن علم.'),
          W('واژه‌ای بساز به معنی «علم خون‌شناسی»', ['hemat/o', '-logy'], ['-logist', 'cyt/o', '-emia'], 'hemat/o (خون) + -logy (علم) = hematology.'),
          S('املای انگلیسی «متخصص خون» (هماتولوژیست) را بنویس', 'hematologist', 'hemat/o + -logist = hematologist.', 'hema…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'پیشوندهای دوقلو', icon: '👯', items: [
          L('پیشوندها را جفت‌جفت حفظ کن', `بیشتر پیشوندها یک «قُل» متضاد دارند؛ اگر جفتی یادشان بگیری، نصف زحمت کم می‌شود:${tbl([['پیشوند', 'معنی', 'قُل متضاد'], [e('hyper-'), 'بیش از حد، بالا', e('hypo-') + ' کم، پایین'], [e('macro-'), 'بزرگ', e('micro-') + ' کوچک'], [e('poly-'), 'بسیار', e('mono-') + ' یک'], [e('inter-'), 'میان (بین دو چیز)', e('intra-') + ' درون'], [e('auto-'), 'خود', e('all/o') + ' دیگری، بیگانه']])}${memo(`${e('hypo')} را با «hippo» (اسب آبی) به خاطر بسپار: همیشه <b>زیر</b> آب است ← پایین و کم. ${e('hyper')} مثل «هایپرمارکت»: بیش از اندازه!`)}`),
          P('هر پیشوند را به معنی‌اش وصل کن', [['hypo-', 'کم، پایین'], ['macro-', 'بزرگ'], ['poly-', 'بسیار'], ['intra-', 'درون'], ['auto-', 'خود']]),
          M(`${e('<b>hypochromic</b>')} یعنی گلبول قرمز…`, ['کم‌رنگ‌تر از طبیعی است', 'پررنگ‌تر از طبیعی است', 'بزرگ‌تر از طبیعی است', 'هسته دارد'], 'hypo- (کم) + chrom/o (رنگ) + -ic: کم‌رنگ؛ چون هموگلوبین کمتری دارد.'),
          L('خون چه کسی؟', `در انتقال خون سه پیشوند تعیین می‌کنند خون از کجا آمده:${vs(['autologous', 'auto- = خود: خون خود بیمار که پیش از جراحی ذخیره شده'], ['homologous', 'homo- = هم‌نوع: خون یک اهداکننده انسانی دیگر'])}و ${e('all/o')} (دیگری، بیگانه) را در <b>allergy</b> و allogeneic (پیوند از فرد دیگر) می‌بینیم.${pearl('بیمار پیش از جراحی ارتوپدی برنامه‌ریزی‌شده چند واحد خون خودش را ذخیره می‌کند: autologous transfusion؛ خطر واکنش ناسازگاری و انتقال عفونت تقریباً صفر است.')}`),
          M('خونی که بیمار چند هفته پیش از جراحی از خودش ذخیره می‌کند چه نام دارد؟', ['autologous', 'homologous', 'allergic', 'interstitial'], 'auto- = خود؛ autologous blood خون خود بیمار است.'),
          T(`${e('macrocyte')} گلبول قرمزی است که از معمول بزرگ‌تر است.`, true, 'macro- (بزرگ) + -cyte (سلول). در کم‌خونی کمبود B12 و فولات گلبول‌ها درشت می‌شوند.'),
          B('در polycythemia پیشوند ___ یعنی «زیاد».', ['poly-', 'mono-', 'pan-'], 'poly- = بسیار: polycythemia یعنی گلبول قرمز بیش از حد در خون.'),
          M('در کدام واژه پیشوند یعنی «درون»؟', ['intravenous', 'interstitial', 'transfusion', 'antibody'], 'intra- = درون: intravenous یعنی درون سیاهرگ. inter- (میان) در interstitial است: مایع «میان» سلول‌ها.'),
          W('واژه‌ای بساز به معنی «کمبود همه سلول‌ها»', ['pan-', 'cyt/o', '-penia'], ['poly-', '-cytosis', 'mono-'], 'pan- (همه) + cyt/o (سلول) + -penia (کمبود) = pancytopenia.'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: 'رنگین‌کمان ریشه‌ها', icon: '🎨', items: [
          L('واژه‌ها هم رنگ دارند', `خیلی از نام‌های خون، رنگِ آن چیزی است که زیر میکروسکوپ دیده‌اند:${tbl([['ریشه', 'رنگ', 'نمونه'], [e('erythr/o'), 'قرمز', e('erythrocyte')], [e('leuk/o'), 'سفید', e('leukocyte')], [e('cyan/o'), 'آبی، کبود', e('cyanosis')], [e('melan/o'), 'سیاه', e('melanoma')], [e('xanth/o'), 'زرد', e('xanthoma')], [e('eosin/o'), 'گلگون', e('eosinophil')]])}${memo(`نام کشور «اریتره» (Eritrea) از همین ${e('erythr')} یونانی آمده است: سرزمین کنار <b>دریای سرخ</b>.`)}`),
          P('هر ریشه را به رنگش وصل کن', [['erythr/o', 'قرمز'], ['leuk/o', 'سفید'], ['cyan/o', 'آبی، کبود'], ['melan/o', 'سیاه'], ['xanth/o', 'زرد']]),
          M(`${e('<b>cyanosis</b>')} چه نشانه‌ای است؟`, ['کبود شدن پوست و لب از کمبود اکسیژن', 'زرد شدن پوست', 'قرمزی و التهاب پوست', 'سیاه شدن ناخن'], 'cyan/o (آبی) + -osis (وضعیت): رنگ آبی-کبود پوست وقتی هموگلوبین اکسیژن کافی ندارد.'),
          L('رنگ گلبول با ‎-chromic', `${e('chrom/o')} = رنگ. در گزارش لام خون، رنگ گلبول قرمز نشان‌دهنده مقدار <b>هموگلوبین</b> است:<br>• <b>normochromic</b>: رنگ طبیعی<br>• <b>hypochromic</b>: کم‌رنگ (هموگلوبین کم)<br>${pearl('«hypochromic microcytic» یعنی گلبول‌های کوچک و کم‌رنگ؛ اولین فکر: کم‌خونی فقر آهن. «normochromic normocytic» را در خونریزی حاد و کم‌خونی بیماری مزمن می‌بینیم.')}`),
          M('گزارش لام: «hypochromic، microcytic». اولین تشخیص احتمالی چیست؟', ['کم‌خونی فقر آهن', 'کم‌خونی کمبود B12', 'لوسمی حاد', 'پلی‌سیتمی'], 'گلبول کوچک و کم‌رنگ = هموگلوبین کم در هر گلبول؛ شایع‌ترین علت، کمبود آهن است. کمبود B12 گلبول درشت (macrocytic) می‌سازد.', [['بیمار', 'خانم ۳۰ ساله، خستگی و رنگ‌پریدگی'], ['لام خون', 'hypochromic، microcytic'], ['MCV', '68 fL']]),
          T(`${e('leukocyte')} یعنی «سلول سفید».`, true, 'leuk/o (سفید) + -cyte (سلول): گلبول سفید.'),
          B('در eosinophil، ریشه eosin/o یعنی ___.', ['گلگون', 'سفید', 'سیاه'], 'eosin/o = گلگون (رنگ سپیده‌دم)؛ گرانول‌هایش با رنگ اسیدی ائوزین قرمز-نارنجی می‌شوند.'),
          W('واژه‌ای بساز به معنی «کمبود گلبول سفید»', ['leuk/o', '-penia'], ['erythr/o', '-emia', 'cyan/o'], 'leuk/o (سفید) + -penia (کمبود) = leukopenia.'),
          S('املای انگلیسی «گلبول قرمز» (اریتروسیت) را بنویس', 'erythrocyte', 'erythr/o + -cyte = erythrocyte؛ به y بعد از r دقت کن.', 'eryth…'),
          N('r2m:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها در عمل ================= */
      {
        id: 'lx4', title: 'پسوندهای بیماری', icon: '🌡️', items: [
          L('کم یا زیاد؟', `دو پسوند پرکاربرد خون، درست برعکس هم‌اند:${vs(['-penia', 'کمبود: leukopenia، thrombocytopenia'], ['-cytosis', 'افزایش سلول: leukocytosis، thrombocytosis'])}${memo(`${e('penia')} را با «penny» (پِنی، کوچک‌ترین سکه) به یاد بسپار: <b>کم</b>!`)}`),
          M(`${e('<b>thrombocytosis</b>')} یعنی…`, ['افزایش تعداد پلاکت‌ها', 'کاهش تعداد پلاکت‌ها', 'لخته در سیاهرگ', 'التهاب پلاکت'], 'thromb/o (لخته، پلاکت) + -cytosis (افزایش سلول). کاهش پلاکت thrombocytopenia است.'),
          L('چهار پسوند همیشگی', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-itis'), 'التهاب', e('lymphadenitis')], [e('-oma'), 'تومور، توده', e('lymphoma')], [e('-osis'), 'وضعیت غیرطبیعی', e('leukocytosis')], [e('-pathy'), 'بیماری', e('lymphadenopathy')], [e('-megaly'), 'بزرگی', e('splenomegaly')]])}${pearl(`دام معروف: ${e('<b>hematoma</b>')} با اینکه ‎-oma دارد، <b>تومور نیست</b>؛ تجمع موضعی خون (کبودی برجسته) است.`)}`),
          T(`${e('hematoma')} نوعی سرطان خون است.`, false, 'نادرست. hematoma توده‌ای از خونِ لخته‌شده بیرون از رگ است؛ اینجا ‎-oma فقط یعنی «توده». سرطان خون leukemia است.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-itis', 'التهاب'], ['-oma', 'تومور، توده'], ['-pathy', 'بیماری'], ['-megaly', 'بزرگی'], ['-lysis', 'تخریب، تجزیه']]),
          L('-emia: صحنه «خون»', `${e('-emia')} یعنی <b>وضعیت خون</b>؛ هر جا دیدی، مسئله در خون است:<br>• <b>anemia</b>: an- (بدون) ← کمبود گلبول قرمز یا هموگلوبین<br>• <b>leukemia</b>: سرطان گلبول‌های سفید<br>• <b>septicemia</b>: عفونت (باکتری و سم آن) در خون<br>• <b>hyperlipidemia</b>: چربی زیاد خون${memo('-emia را مثل نوار زرد «صحنه جرم» تصور کن: هر واژه‌ای که آن را دارد، جرم در «خون» اتفاق افتاده.')}`),
          B('septicemia یعنی وجود عفونت در ___.', ['خون', 'گره لنفاوی', 'طحال'], 'septic/o (عفونت) + -emia (وضعیت خون).'),
          M(`${e('<b>splenomegaly</b>')} یعنی…`, ['بزرگی طحال', 'التهاب طحال', 'برداشتن طحال', 'تومور طحال'], 'splen/o (طحال) + -megaly (بزرگی). التهاب = splenitis، برداشتن = splenectomy.'),
          W('واژه‌ای بساز به معنی «بیماری گره‌های لنفاوی»', ['lymphaden/o', '-pathy'], ['-itis', 'splen/o', '-oma'], 'lymphaden/o (گره لنفاوی) + -pathy (بیماری) = lymphadenopathy؛ معمولاً برای گره‌های بزرگ‌شده به کار می‌رود.'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: 'پسوندهای روش و جراحی', icon: '🔪', items: [
          L('برش یا برداشتن؟', `دو پسوند جراحی که بیشتر از همه قاطی می‌شوند:${vs(['-tomy', 'برش دادن: lymphadenotomy (برش گره)'], ['-ectomy', 'برداشتن: splenectomy (برداشتن طحال)'])}${memo(`${e('ec-')} در یونانی یعنی «بیرون»: ${e('ec + tomy')} = ببُر و <b>بیرون بیاور</b>. بدون ec فقط برش است.`)}`),
          M(`${e('<b>tonsillectomy</b>')} یعنی…`, ['برداشتن لوزه‌ها', 'برش لوزه‌ها', 'التهاب لوزه‌ها', 'بزرگی لوزه‌ها'], 'tonsill/o (لوزه) + -ectomy (برداشتن). دقت کن: tonsil با یک l، ولی tonsillectomy با دو l.'),
          L('فیلم یا عکس؟', `${vs(['-graphy', 'فرایند تصویربرداری: lymphangiography'], ['-gram', 'تصویر ثبت‌شده: lymphangiogram'])}${memo('graphy مثل «فیلم‌برداری» است (کار در حال انجام)؛ gram مثل «عکس چاپ‌شده» است (نتیجه نهایی).')}`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-tomy', 'برش'], ['-ectomy', 'برداشتن'], ['-graphy', 'فرایند تصویربرداری'], ['-gram', 'تصویر ثبت‌شده'], ['-rrhaphy', 'بخیه']]),
          T(`${e('lymphangiogram')} نام فرایند تصویربرداری از رگ‌های لنفاوی است.`, false, 'نادرست. فرایند lymphangiography است؛ lymphangiogram تصویری است که حاصل می‌شود.'),
          L('درمان و جداسازی', `• ${e('-therapy')} = درمان: <b>chemotherapy</b> (دارویی)، <b>radiotherapy</b> (پرتو)، <b>immunotherapy</b> (تقویت یا هدایت ایمنی)<br>• ${e('-apheresis')} = جداسازی و برداشتن: خون از دستگاه می‌گذرد، یک جزء جدا می‌شود و بقیه برمی‌گردد<br>${wb('plasm/o', '-apheresis')} ← <b>plasmapheresis</b>${pearl('در plateletpheresis اهداکننده فقط پلاکت می‌دهد و گلبول‌های قرمزش برمی‌گردد؛ پس زودتر می‌تواند دوباره اهدا کند.')}`),
          B('در plasmapheresis، ___ از خون جدا می‌شود و بقیه به بیمار برمی‌گردد.', ['پلاسما', 'پلاکت', 'گلبول قرمز'], 'plasm/o (پلاسما) + -apheresis (جداسازی).'),
          M('«بخیه زدن طحال» کدام است؟', ['splenorrhaphy', 'splenectomy', 'splenotomy', 'splenomegaly'], 'splen/o + -rrhaphy (بخیه). مثلاً در پارگی طحال پس از تصادف، اگر بشود طحال را نگه داشت.'),
          W('واژه‌ای بساز به معنی «برداشتن تیموس»', ['thym/o', '-ectomy'], ['-tomy', 'splen/o', '-graphy'], 'thym/o (تیموس) + -ectomy (برداشتن) = thymectomy؛ مثلاً در تیموما و میاستنی گراویس.'),
          S('املای انگلیسی «برداشتن طحال» را بنویس', 'splenectomy', 'splen/o + -ectomy؛ o حذف می‌شود چون -ectomy با حرف صدادار شروع می‌شود.', 'splen…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx6', title: 'نقشه بدن در واژه‌ها', icon: '🗺️', items: [
          L('ریشه‌های جای بدن', `این ریشه‌ها می‌گویند ماجرا <b>کجا</b> رخ می‌دهد:${tbl([['ریشه', 'معنی', 'نمونه'], [e('cervic/o'), 'گردن', 'cervical nodes'], [e('axill/o'), 'زیربغل', 'axillary nodes'], [e('inguin/o'), 'کشاله ران', 'inguinal nodes'], [e('splen/o'), 'طحال', 'splenic'], [e('hepat/o'), 'کبد', 'hepatomegaly'], [e('phleb/o') + '، ' + e('ven/o'), 'سیاهرگ', 'phlebotomy']])}${fig('lymph-nodes-regional', '', 'گره‌های لنفاوی ناحیه‌ای: cervical، axillary، mediastinal و inguinal')}`),
          M('گره‌های لنفاوی «inguinal» کجا هستند؟', ['کشاله ران', 'زیربغل', 'گردن', 'میان قفسه سینه'], 'inguin/o = کشاله ران. زیربغل axillary و گردن cervical است.'),
          P('هر ریشه را به جایش در بدن وصل کن', [['cervic/o', 'گردن'], ['axill/o', 'زیربغل'], ['inguin/o', 'کشاله ران'], ['hepat/o', 'کبد'], ['thym/o', 'تیموس']]),
          L('یک ریشه، دو جا: myel/o', `${e('myel/o')} دو معنی دارد: <b>مغز استخوان</b> و <b>نخاع</b> (هر دو «مغزِ» درون استخوان‌اند).<br>• در خون: <b>myeloid</b>، <b>myeloma</b>، <b>myelogenous leukemia</b> ← مغز استخوان<br>• در اعصاب: <b>myelitis</b>، poliomyelitis ← نخاع${pearl(`در دنیای خون، myel/o تقریباً همیشه یعنی مغز استخوان. آن را با ${e('my/o')} (عضله، مثل myalgia) قاطی نکن.`)}`),
          T(`در واژه ${e('multiple myeloma')}، ریشه myel/o به مغز استخوان اشاره دارد.`, true, 'درست. مولتیپل میلوما سرطان پلاسماسل‌ها در مغز استخوان است.'),
          M(`${e('<b>phlebotomy</b>')} در بخش یعنی…`, ['خون‌گیری از سیاهرگ', 'برداشتن گره لنفاوی', 'تزریق خون', 'التهاب سیاهرگ'], 'phleb/o (سیاهرگ) + -tomy (برش، سوراخ کردن): همان رگ‌گیری؛ التهاب سیاهرگ phlebitis است.'),
          B('لنف‌ادنوپاتی «cervical» یعنی گره‌های بزرگ‌شده در ناحیه ___.', ['گردن', 'زیربغل', 'کشاله ران'], 'cervic/o = گردن (در زنان cervix دهانه رحم هم هست، چون آن هم «گردن» رحم است).'),
          W('واژه‌ای بساز به معنی «بزرگی کبد»', ['hepat/o', '-megaly'], ['splen/o', '-itis', '-ectomy'], 'hepat/o (کبد) + -megaly (بزرگی) = hepatomegaly؛ همراه با splenomegaly در لوسمی و لنفوم دیده می‌شود.'),
          S('املای انگلیسی «مربوط به زیربغل» را بنویس', 'axillary', 'axill/o + -ary؛ دو l دارد.', 'axil…'),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: مثل یک حرفه‌ای ================= */
      {
        id: 'lx7', title: 'مفرد و جمع لاتین', icon: '📚', items: [
          L('جمع‌هایی که s نمی‌گیرند', `واژه‌های یونانی و لاتین با قاعده خودشان جمع بسته می‌شوند:${tbl([['پایان مفرد', 'پایان جمع', 'نمونه'], [e('-us'), e('-i'), e('thrombus → thrombi')], [e('-a'), e('-ae'), e('petechia → petechiae')], [e('-um'), e('-a'), e('bacterium → bacteria')], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-ix, -ex'), e('-ices'), e('index → indices')], [e('-on'), e('-a'), e('ganglion → ganglia')]])}${memo(`«US» رفت، «I» آمد: ${e('nucleus → nuclei')}، ${e('embolus → emboli')}. مثل اینکه «ما» (us) به «من‌ها» (i) تبدیل شویم!`)}`),
          M(`جمع ${e('<b>thrombus</b>')} کدام است؟`, ['thrombi', 'thrombuses', 'thrombae', 'thrombia'], '‎-us → ‎-i: thrombus → thrombi، embolus → emboli، nucleus → nuclei.'),
          P('هر مفرد را به جمعش وصل کن', [['embolus', 'emboli'], ['petechia', 'petechiae'], ['bacterium', 'bacteria'], ['diagnosis', 'diagnoses'], ['ganglion', 'ganglia']]),
          L('دو دام رایج', `• ${e('<b>petechiae</b>')} (پِتیکی‌ئی) را تقریباً همیشه جمع به کار می‌بریم، چون نقطه‌های خونریزی تکی نیستند.<br>• ${e('<b>bacteria</b>')} خودش جمع است؛ «یک باکتری» = <b>bacterium</b>.<br>• جمع ${e('-oma')} دو شکل دارد: ${e('lymphomas')} (رایج) یا ${e('lymphomata')} (کلاسیک).${pearl('در گزارش معاینه می‌نویسند: «scattered petechiae on both legs» — نقطه‌های پراکنده روی هر دو ساق؛ نشانه پلاکت پایین.')}`),
          T(`${e('bacteria')} شکل مفرد است و جمع آن bacterias است.`, false, 'نادرست. bacterium مفرد و bacteria جمع است (‎-um → ‎-a).'),
          B('جمع nucleus (هسته) می‌شود ___.', ['nuclei', 'nucleuses', 'nuclea'], '‎-us → ‎-i. نوتروفیل هسته‌ای چندقسمتی دارد؛ لنفوسیت یک هسته گرد.'),
          M(`جمع ${e('<b>diagnosis</b>')} کدام است؟`, ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], '‎-is → ‎-es: diagnosis → diagnoses، prognosis → prognoses، metastasis → metastases.'),
          S('جمع انگلیسی embolus را بنویس', 'emboli', 'embolus → emboli (‎-us → ‎-i).', 'embo…'),
          S('جمع انگلیسی petechia را بنویس', 'petechiae', 'petechia → petechiae (‎-a → ‎-ae).', 'petech…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx8', title: 'تلفظ و املا', icon: '🗣️', items: [
          L('حرف‌هایی که دروغ می‌گویند', `در واژه‌های یونانی، بعضی حرف‌ها آن‌طور که نوشته می‌شوند خوانده نمی‌شوند:${tbl([['نوشته', 'صدا', 'نمونه'], [e('ph'), 'ف', e('phagocyte') + ' (فاگوسایت)'], [e('ch'), 'ک', e('chromic') + '، ' + e('chemotherapy')], [e('pn-') + ' در ابتدا', 'ن (p خاموش)', e('pneumonia')], [e('ps-') + ' در ابتدا', 'س (p خاموش)', e('pseudo-')], [e('x-') + ' در ابتدا', 'ز', e('xanthoma')], [e('rh'), 'ر (h خاموش)', e('Rh factor') + '، ' + e('hemorrhage')]])}`),
          M(`${e('<b>phagocyte</b>')} با چه صدایی شروع می‌شود؟`, ['ف', 'پ', 'پ‌ه', 'ک'], 'ph در واژه‌های یونانی «ف» خوانده می‌شود: فاگوسایت.'),
          T(`در ${e('pneumonia')}، حرف p تلفظ نمی‌شود.`, true, 'درست؛ «نومونیا». pn- و ps- در ابتدای واژه p خاموش دارند.'),
          P('هر نوشته را به صدایش وصل کن', [['ph', 'ف'], ['ch', 'ک'], ['pn-', 'ن'], ['x-', 'ز']]),
          L('املاهای پرخطر', `این‌ها در امتحان و پرونده بیشترین غلط را دارند:<br>• ${e('<b>hemorrhage</b>')}: یک m، دو r و یک h → h-e-m-o-<b>rrh</b>-a-g-e<br>• ${e('<b>leukemia</b>')} در آمریکایی؛ ${e('leukaemia')} در بریتانیایی<br>• ${e('<b>anemia</b>')} و ${e('<b>hematology</b>')} در آمریکایی؛ ${e('anaemia')} و ${e('haematology')} در بریتانیایی${memo('برای rrh بگو: «ریختن با شدت» = دو r و یک h که مثل فواره بیرون می‌زند (‎-rrhage = فوران خون).')}${pearl('کتاب‌های بریتانیایی ae و oe دارند (haemoglobin، oedema)؛ هر دو درست‌اند ولی در یک متن یکی را انتخاب کن.')}`),
          M('املای درست «خونریزی» کدام است؟', ['hemorrhage', 'hemmorage', 'hemorage', 'hemorhage'], '‎-rrhage با دو r و یک h: hemo + rrhage.'),
          B(`${e('Rh factor')} را «آر-اِچ» می‌خوانیم، ولی در ${e('hemorrhage')} حرف h ___ است.`, ['خاموش', 'دو برابر', 'مثل خ'], 'rh در وسط واژه‌های یونانی فقط «ر» خوانده می‌شود.'),
          S('املای انگلیسی «خونریزی» را بنویس', 'hemorrhage', 'hem/o + -rrhage؛ دو r و یک h.', 'hemo…'),
          S('املای انگلیسی «پنومونی» (ذات‌الریه) را بنویس', 'pneumonia', 'با pn شروع می‌شود؛ p خاموش است.', 'pn…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، دو دنیا', `بعضی واژه‌ها فقط در یکی دو حرف فرق دارند ولی معنی‌شان کاملاً متفاوت است:${vs(['lymphaden/o', 'گره لنفاوی ← lymphadenitis: التهاب گره'], ['lymphangi/o', 'رگ لنفاوی ← lymphangitis: التهاب رگ'])}${vs(['-poiesis', 'فرایند ساختن ← erythropoiesis'], ['-poietin', 'ماده سازنده (هورمون) ← erythropoietin'])}${memo(`${e('aden')} = «غده» (گره شبیه غده است)؛ ${e('angi')} = «لوله». گره توپ است، رگ لوله.`)}`),
          M('خط‌های قرمز زیر پوست ساعد بعد از زخم دست، یعنی التهاب رگ‌های لنفاوی. نامش چیست؟', ['lymphangitis', 'lymphadenitis', 'lymphedema', 'lymphoma'], 'lymphangi/o (رگ لنفاوی) + -itis. اگر گره زیربغل متورم و دردناک شود، lymphadenitis است.', [['بیمار', 'باغبان ۴۰ ساله'], ['شرح حال', 'زخم آلوده انگشت از ۲ روز پیش'], ['معاینه', 'خط‌های قرمز دردناک روی ساعد']]),
          L('سه جفت گیج‌کننده خون', `${vs(['plasma', 'بخش مایع خونِ لخته‌نشده؛ فیبرینوژن دارد'], ['serum', 'مایع پس از لخته شدن؛ بدون فیبرینوژن'])}${vs(['antigen', 'مولکول بیگانه که ایمنی را تحریک می‌کند'], ['antibody', 'پروتئین Y شکلی که بدن علیه آنتی‌ژن می‌سازد'])}${vs(['thrombus', 'لخته‌ای که در جای خود ثابت مانده'], ['embolus', 'لخته یا توده‌ای که در جریان خون راه افتاده'])}`),
          P('هر واژه را به معنی درستش وصل کن', [['serum', 'مایع پس از لخته شدن'], ['plasma', 'مایع خون با فیبرینوژن'], ['embolus', 'لخته در حال حرکت'], ['thrombus', 'لخته ثابت در رگ']]),
          T('آنتی‌ژن پروتئینی است که پلاسماسل‌ها می‌سازند.', false, 'نادرست؛ این تعریف آنتی‌بادی است. آنتی‌ژن (antibody generator) چیزی است که تولید آنتی‌بادی را برمی‌انگیزد.'),
          M(`کدام واژه یعنی «تجمع و به هم چسبیدن گلبول‌ها» (نه لخته شدن)؟`, ['agglutination', 'coagulation', 'hemolysis', 'hemostasis'], 'agglutin/o = به هم چسبیدن؛ در ناسازگاری گروه خونی رخ می‌دهد. coagulation تشکیل لخته با فیبرین است.'),
          B('کلیه هورمون ___ را می‌سازد که مغز استخوان را به ساخت گلبول قرمز وا می‌دارد.', ['erythropoietin', 'erythropoiesis', 'erythrocytosis'], '‎-poietin = ماده سازنده؛ ‎-poiesis خود فرایند ساختن است.'),
          M(`${e('<b>hemolysis</b>')} و ${e('<b>hemolytic</b>')} چه فرقی دارند؟`, ['اولی نام فرایند است و دومی صفت آن', 'اولی صفت است و دومی بیماری', 'هر دو یعنی خونریزی', 'دومی یعنی ساخت خون'], '‎-lysis اسم (تخریب) و ‎-lytic صفت (مربوط به تخریب) است: hemolytic anemia = کم‌خونی ناشی از همولیز.'),
          W('واژه‌ای بساز به معنی «التهاب گره لنفاوی»', ['lymphaden/o', '-itis'], ['lymphangi/o', '-oma', '-pathy'], 'lymphaden/o + -itis = lymphadenitis.'),
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
    id: 'hb', sym: 'Hb', name: 'خون و سلول‌ها', short: 'خون', sub: 'ریشه‌های خون، پلاسما، گلبول‌ها، خون‌سازی و بیماری‌های خون',
    color: '#E5374F', dark: '#B8233A', light: '#FDE1E5',
    levels: ['اجزای خون', 'گلبول‌ها و خون‌سازی', 'بیماری‌های خون'],
    gens: EA.genIds('hb'),
    lessons: [
      {
        id: 'hb1', title: 'خانواده hem', icon: '🔤', items: [
          L('سه ریشه برای یک خون', `در دنیای زبان پزشکی قطعه‌ها را شناختی؛ حالا سراغ ریشه‌های خون می‌رویم. برای «خون» سه ریشه داریم:<br>• ${e('hem/o')} و ${e('hemat/o')} (یونانی): <b>hemoglobin</b>، <b>hematology</b><br>• ${e('sanguin/o')} (لاتین): <b>sanguineous</b> = خونی، حاوی خون${memo(`در انگلیسی روزمره ${e('sanguine')} یعنی «خوش‌بین و سرزنده»؛ چون طب قدیم آدم‌های «پرخون» را شاداب می‌دانست. همان طبع «دموی» در طب سنتی!`)}`),
          M('کدام ریشه به معنی «خون» نیست؟', ['cyt/o', 'hem/o', 'hemat/o', 'sanguin/o'], 'cyt/o یعنی سلول؛ سه ریشه دیگر همه یعنی خون.'),
          L('اول واژه یا آخر واژه؟', `جای «خون» در واژه، نقشش را عوض می‌کند:${vs(['hem- / hemat-', 'در ابتدا: خون «موضوع» است ← hemolysis، hematopoiesis'], ['-emia', 'در انتها: «وضعیت خون» ← anemia، leukemia'])}${pearl(`${e('anemia')} تحت‌اللفظی یعنی «بی‌خونی»، ولی در بالین یعنی کمبود <b>گلبول قرمز یا هموگلوبین</b>؛ بیمار کم‌خون حجم خونش ممکن است طبیعی باشد.`)}`),
          P('هر واژه را به معنی‌اش وصل کن', [['hemoglobin', 'پروتئین آهن‌دار گلبول قرمز'], ['hemostasis', 'بند آمدن خونریزی'], ['hemolysis', 'تخریب گلبول قرمز'], ['hematopoiesis', 'ساخت سلول‌های خون']]),
          L('هماتوکریت: خون را جدا کن', `${wb('hemat/o', '-crit')} ← ${e('-crit')} یعنی «جدا کردن».<br><b>hematocrit</b> (Hct) درصدی از حجم خون است که پس از سانتریفیوژ، گلبول‌های قرمزِ ته‌نشین‌شده اشغال می‌کنند (حدود ۳۷ تا ۵۲٪).${pearl('قاعده سرانگشتی: هماتوکریت تقریباً <b>سه برابر</b> هموگلوبین است. Hgb = 14 ← Hct حدود 42٪.')}`),
          T('هماتوکریت ۴۲٪ یعنی ۴۲٪ حجم خون را گلبول‌های قرمز تشکیل داده‌اند.', true, 'درست؛ hemat/o (خون) + -crit (جدا کردن): سهم حجمی گلبول‌های قرمز فشرده.'),
          B('hemostasis یعنی ___ خون (بند آمدن خونریزی).', ['توقف', 'ساخت', 'تخریب'], 'hem/o + -stasis (توقف، کنترل). ساخت خون hematopoiesis و تخریب آن hemolysis است.'),
          M(`آزمایش «Hgb = 9 g/dL» درباره کدام بخش خون است؟`, ['پروتئین حمل اکسیژن در گلبول قرمز', 'تعداد گلبول‌های سفید', 'زمان لخته شدن', 'درصد پلاسما'], 'Hgb یا Hb = hemoglobin؛ حدود ۱۲ تا ۱۸ گرم در دسی‌لیتر طبیعی است، پس ۹ یعنی کم‌خونی.', [['بیمار', 'مرد ۶۵ ساله، خستگی'], ['Hgb', '9 g/dL'], ['WBC', '7,200 /µL']]),
          W('واژه‌ای بساز به معنی «تخریب گلبول‌های قرمز (خون)»', ['hem/o', '-lysis'], ['-stasis', '-poiesis', 'cyt/o'], 'hem/o (خون) + -lysis (تخریب) = hemolysis.'),
          S('املای انگلیسی «هموگلوبین» را بنویس', 'hemoglobin', 'hem/o + -globin (پروتئین).', 'hemo…'),
          N('r2m:hb')
        ]
      },
      {
        id: 'hb2', title: 'خون و پلاسما', icon: '🩸', items: [
          L('خون در یک نگاه', `یک بزرگسال حدود <b>۵ لیتر</b> خون دارد؛ تقریباً <b>۸٪ وزن بدن</b>.<br><br>وظایف خون:<br>• بردن <b>اکسیژن</b>، مواد مغذی و هورمون‌ها به سلول‌ها<br>• بردن <b>دی‌اکسید کربن</b> و مواد زائد از سلول‌ها<br>• کمک به <b>تنظیم دما</b> و حجم مایعات (هومئوستاز)<br>• دفاع از بدن و لخته شدن در زخم${fig('blood-process', '', 'از خون‌گیری تا سانتریفیوژ: پلاسمای زرد بالا و سلول‌ها پایین؛ سپس انواع سلول‌های خون.')}`),
          L('دو بخش اصلی خون', `اگر خون را در لوله بچرخانیم (سانتریفیوژ)، دو بخش جدا می‌شود:<br>• <b>پلاسما</b> (بخش مایع، زرد کم‌رنگ): حدود <b>۵۵٪</b><br>• <b>عناصر سلولی</b> (formed elements): حدود <b>۴۵٪</b> — گلبول قرمز، گلبول سفید و پلاکت<br>${fig(['tube', 'tube-diagram'], ['نمودار ایمنا', 'از مرجع: Blood sample'], 'لایه نازک سفید وسط (buffy coat) گلبول‌های سفید و پلاکت‌ها هستند. سهم پلاسما در منابع ۵۲ تا ۶۲٪ آمده است.')}`),
          M('بخش مایع خون چند درصد حجم آن است؟', ['حدود ۵۵٪', 'حدود ۴۵٪', 'حدود ۸٪', 'حدود ۹۰٪'], 'پلاسما حدود ۵۵٪ و عناصر سلولی حدود ۴۵٪ خون‌اند. ۸٪ نسبت خون به وزن بدن است.', null, F('tube')),
          L('پلاسما از چه ساخته شده؟', `پلاسما <b>۹۰ تا ۹۲٪ آب</b> است و ۸ تا ۱۰٪ مواد محلول دارد: پروتئین‌ها، گلوکز، گازها، <b>الکترولیت‌ها</b> و هورمون‌ها. pH آن حدود <b>۷٫۴</b> است.<br><br>پروتئین‌های پلاسما:<br>• <b>albumin</b>: تنظیم حرکت آب بین خون و بافت (کمبودش ← ادم)<br>• <b>globulin</b>: آلفا و بتا ناقل چربی و ویتامین؛ <b>گاما</b> = آنتی‌بادی<br>• <b>fibrinogen</b> و <b>prothrombin</b>: پروتئین‌های انعقاد`),
          P('هر پروتئین پلاسما را به کارش وصل کن', [['albumin', 'نگه داشتن آب در رگ'], ['gamma globulin', 'آنتی‌بادی (ایمنی)'], ['fibrinogen', 'ساختن رشته‌های لخته'], ['alpha/beta globulin', 'حمل چربی و ویتامین']]),
          L('پلاسما یا سرم؟', `<b>serum</b> (سرم) همان پلاسماست <b>بدون فیبرینوژن و عوامل انعقادی</b>؛ یعنی مایعی که بعد از لخته شدن خون باقی می‌ماند.<br><br>${e('ser/o')} = سرم. برای همین آزمایش‌های «سرولوژی» روی سرم انجام می‌شوند.`),
          T('سرم مایعی است که پس از لخته شدن خون باقی می‌ماند و فیبرینوژن ندارد.', true, 'درست. پلاسما = سرم + فیبرینوژن و عوامل انعقادی.'),
          B('pH طبیعی پلاسما حدود ___ است.', ['7.4', '6.8', '8.2'], 'خون کمی قلیایی است؛ pH حدود ۷٫۴.'),
          M('در این لوله سانتریفیوژشده، بخش زرد کم‌رنگ بالایی چیست؟', ['plasma', 'formed elements', 'buffy coat', 'hematocrit'], 'بخش مایع و سبک‌تر خون (حدود ۵۵٪) بالا می‌ایستد؛ عناصر سلولی سنگین‌ترند و پایین می‌روند.', null, F('tube-diagram')),
          M('کمبود کدام پروتئین بیشتر باعث خروج آب از رگ و ادم می‌شود؟', ['albumin', 'fibrinogen', 'globin', 'thrombin'], 'آلبومین آب را درون رگ نگه می‌دارد؛ وقتی کم شود، آب به بافت می‌رود و ادم ایجاد می‌شود.'),
          S('املای انگلیسی «پلاسما» را بنویس', 'plasma', 'plasma = بخش مایع خون؛ ریشه plasm/o.'),
          N('t2f:hb')
        ]
      },
      {
        id: 'hb3', title: 'عناصر سلولی', icon: '🔬', items: [
          L('سه نوع سلول در خون', `عناصر سلولی (formed elements) در <b>مغز استخوان</b> ساخته می‌شوند:<br>• <b>erythrocyte</b> (گلبول قرمز، RBC): حمل اکسیژن<br>• <b>leukocyte</b> (گلبول سفید، WBC): دفاع<br>• <b>thrombocyte</b> یا <b>platelet</b> (پلاکت، PLT): لخته شدن<br>${fig(['cell-rbc', 'cell-neutrophil', 'cell-platelet'], ['RBC', 'WBC', 'PLT'])}`),
          L('سه ریشه رنگی', `• ${e('erythr/o')} = <b>قرمز</b> ← erythrocyte<br>• ${e('leuk/o')} = <b>سفید</b> ← leukocyte<br>• ${e('thromb/o')} = <b>لخته</b> ← thrombocyte<br>و ${e('-cyte')} یا ${e('cyt/o')} یعنی <b>سلول</b>.<br><br>نکته: پلاکت سلول کامل نیست؛ <b>تکه‌ای</b> از یک سلول بزرگ به نام megakaryocyte است.`),
          P('ریشه و معنی', [['erythr/o', 'قرمز'], ['leuk/o', 'سفید'], ['thromb/o', 'لخته'], ['cyt/o', 'سلول']]),
          M('کدام سلول خون در لخته شدن نقش اصلی دارد؟', ['thrombocyte', 'erythrocyte', 'leukocyte', 'lymphocyte'], 'thromb/o (لخته) + -cyte (سلول) = سلول لخته، یعنی پلاکت.', null, F('cell-platelet')),
          L('گسترش خون زیر میکروسکوپ', `روی لام رنگ‌آمیزی‌شده (smear)، بیشتر میدان دید پر از گلبول‌های قرمز صورتی است؛ گلبول‌های سفید درشت‌تر و هسته‌دارند و پلاکت‌ها ریز و بنفش‌اند.${fig('smear', '', 'گلبول‌های قرمز بسیار بیشترند: حدود ۵ میلیون در هر میکرولیتر، در برابر ۵ تا ۱۰ هزار گلبول سفید.')}`),
          T('گلبول‌های سفید در خون بسیار بیشتر از گلبول‌های قرمز هستند.', false, 'برعکس: حدود ۵ میلیون گلبول قرمز در هر میکرولیتر، ولی فقط ۵۰۰۰ تا ۱۰۰۰۰ گلبول سفید.', F('smear')),
          W('واژه‌ای بساز به معنی «سلول سفید»', ['leuk/o', '-cyte'], ['erythr/o', '-emia', 'thromb/o'], 'leuk/o + -cyte = leukocyte.'),
          B('واژه erythrocyte یعنی سلول ___.', ['قرمز', 'سفید', 'لخته'], 'erythr/o = قرمز.'),
          S('املای انگلیسی «پلاکت» (سلول لخته) را بنویس', ['thrombocyte', 'platelet'], 'thrombocyte یا platelet؛ هر دو درست‌اند.', 'thr… / pla…'),
          M('«عناصر سلولی» (formed elements) در کجا ساخته می‌شوند؟', ['مغز استخوان', 'طحال', 'کبد', 'کلیه'], 'خون‌سازی (hematopoiesis) در مغز قرمز استخوان انجام می‌شود.'),
          N('f2t:hb')
        ]
      },
      {
        id: 'hb4', title: 'گلبول قرمز و هموگلوبین', icon: '🔴', items: [
          L('ساختار گلبول قرمز', `گلبول قرمز بالغ یک <b>دیسک دوکاو</b> (biconcave) و <b>بی‌هسته</b> است؛ این شکل سطح بیشتری برای تبادل گاز می‌دهد.<br>• تعداد: <b>۴٫۲ تا ۶٫۴ میلیون</b> در میکرولیتر (مردان بیشتر از زنان)<br>• عمر: حدود <b>۱۲۰ روز</b>؛ سپس طحال گلبول‌های پیر را جدا می‌کند${fig(['rbc-3d', 'rbc'], ['Erythrocytes', 'دید بالا و کنار'])}`),
          M('گلبول قرمز به‌طور متوسط چقدر عمر می‌کند؟', ['حدود ۱۲۰ روز', 'حدود ۱۰ روز', 'حدود ۳۰ روز', 'حدود ۱ سال'], 'گلبول قرمز ۱۲۰ روز و پلاکت حدود ۱۰ روز عمر می‌کند.'),
          L('هموگلوبین = هِم + گلوبین', `<b>hemoglobin</b> (Hgb یا Hb) پروتئین آهن‌دار گلبول قرمز است که اکسیژن را از ریه به بافت‌ها می‌برد و CO₂ را برمی‌گرداند.<br>• <b>heme</b>: رنگدانه حاوی <b>آهن</b><br>• <b>globin</b>: بخش <b>پروتئینی</b> (${e('-globin')} = پروتئین)<br>میانگین هموگلوبین حدود <b>۱۵ g/dL</b> است.${fig('hemoglobin')}`),
          P('اجزای هموگلوبین', [['heme', 'رنگدانه آهن‌دار'], ['globin', 'بخش پروتئینی'], ['hemoglobin', 'حامل اکسیژن'], ['bilirubin', 'رنگدانه حاصل از تجزیه هموگلوبین']]),
          L('هماتوکریت', `<b>hematocrit</b> (Hct) درصد حجمی گلبول‌های قرمزِ فشرده در خون است.<br>${wb('hemat/o', '-crit')} ← ${e('-crit')} یعنی «جدا کردن»: خون را سانتریفیوژ می‌کنیم تا گلبول‌ها جدا شوند. نام دیگرش <b>PCV</b> (packed cell volume) است.`),
          T('هماتوکریت تعداد گلبول‌های قرمز در هر میکرولیتر را نشان می‌دهد.', false, 'هماتوکریت «درصد حجم» گلبول‌های قرمز فشرده است، نه شمارش آن‌ها؛ شمارش را RBC count نشان می‌دهد.'),
          L('اریتروپویتین', `<b>erythropoietin</b> (EPO) هورمونی است که <b>کلیه</b> می‌سازد و مغز استخوان را به ساختن گلبول قرمز وا می‌دارد.<br>${wb('erythr/o', '-poietin')}<br>${e('-poiesis')} یعنی ساختن ← <b>erythropoiesis</b> = ساخت گلبول قرمز.`),
          M('هورمون اریتروپویتین در کدام اندام ساخته می‌شود؟', ['کلیه', 'کبد', 'طحال', 'مغز استخوان'], 'EPO در کلیه ساخته می‌شود و روی مغز استخوان اثر می‌گذارد؛ برای همین بیماران کلیوی اغلب کم‌خون‌اند.'),
          W('واژه‌ای بساز به معنی «ساخت گلبول قرمز»', ['erythr/o', '-poiesis'], ['leuk/o', '-poietin', '-lysis'], 'erythr/o + -poiesis = erythropoiesis.'),
          S('املای انگلیسی «هموگلوبین» را بنویس', 'hemoglobin', 'hem/o (خون) + -globin (پروتئین) = hemoglobin.'),
          N('d2t:hb')
        ]
      },
      {
        id: 'hb5', title: 'گلبول‌های سفید', icon: '⚪', items: [
          L('دانه‌دار و بی‌دانه', `گلبول‌های سفید (۵۰۰۰ تا ۱۰۰۰۰ در میکرولیتر) دو گروه‌اند:<br>• <b>granulocyte</b> (دانه‌دار؛ ${e('granul/o')} = دانه): نوتروفیل، ائوزینوفیل، بازوفیل<br>• <b>agranulocyte</b> (بی‌دانه؛ ${e('a-')} = بدون): لنفوسیت و مونوسیت${fig('wbc-family', '', 'درصدها سهم هر سلول از کل گلبول‌های سفید است.')}${memo(`ترتیب فراوانی را با این جمله حفظ کن: «${e('<b>N</b>ever <b>L</b>et <b>M</b>onkeys <b>E</b>at <b>B</b>ananas')}» ← Neutrophil، Lymphocyte، Monocyte، Eosinophil، Basophil؛ از بیشترین به کمترین.`)}`),
          L('نام از رنگ می‌آید', `گرانولوسیت‌ها را با رنگی که به خود می‌گیرند نام‌گذاری کرده‌اند (${e('-phil')} = دوستدار):<br>• <b>neutrophil</b>: ${e('neutr/o')} خنثی ← رنگ کم‌رنگ؛ هسته چندقسمتی<br>• <b>eosinophil</b>: ${e('eosin/o')} گلگون ← دانه‌های نارنجی-قرمز (رنگ اسیدی)<br>• <b>basophil</b>: ${e('bas/o')} باز (قلیایی) ← دانه‌های آبی تیره`),
          P('سلول و رنگش', [['neutrophil', 'رنگ خنثی (کم‌رنگ)'], ['eosinophil', 'رنگ اسیدی گلگون'], ['basophil', 'رنگ قلیایی آبی تیره'], ['agranulocyte', 'بدون دانه']]),
          M('کدام گلبول سفید با دانه‌های نارنجی-قرمز درشت شناخته می‌شود؟', ['eosinophil', 'basophil', 'neutrophil', 'monocyte'], 'eosin/o = گلگون؛ دانه‌های ائوزینوفیل رنگ اسیدی ائوزین را می‌گیرند.', null, F('cell-eosinophil')),
          L('هر کدام چه می‌کند؟', fig('wbc-percent', '', 'پنج نوع گلبول سفید و سهم تقریبی هرکدام؛ اعداد در منابع کمی با هم فرق دارند.') + tbl([['سلول', 'سهم', 'کار'], ['neutrophil', '۵۴–۷۰٪', 'فاگوسیتوز باکتری؛ اولین مدافع'], ['lymphocyte', '۲۰–۳۸٪', 'ایمنی اختصاصی (B و T)'], ['monocyte', '۳–۹٪', 'در بافت ← ماکروفاژ'], ['eosinophil', '۱–۴٪', 'آلرژی و انگل'], ['basophil', 'کمتر از ۱٪', 'هیستامین و هپارین']])),
          M('فراوان‌ترین گلبول سفید خون کدام است؟', ['neutrophil', 'lymphocyte', 'monocyte', 'basophil'], 'نوتروفیل‌ها بیش از نیمی از گلبول‌های سفیدند (۵۴ تا ۷۰٪).'),
          T('بازوفیل‌ها هیستامین و هپارین آزاد می‌کنند.', true, 'درست؛ بازوفیل‌ها در واکنش‌های آلرژیک نقش دارند.', F('wbc-table')),
          M('در این تصویر، کدام سلول دانه‌های درشت نارنجی-قرمز دارد؟', ['Eosinophil', 'Basophil', 'Neutrophil', 'Lymphocyte'], 'ائوزینوفیل دانه‌های درشت گلگون دارد؛ بازوفیل دانه‌های تیره آبی-بنفش که هسته را می‌پوشانند.', null, F('wbc-five')),
          L('سلول باند و PMN', `نوتروفیل بالغ هسته <b>چندقسمتی</b> دارد؛ برای همین به آن <b>PMN</b> (polymorphonuclear)، <b>seg</b> یا <b>poly</b> هم می‌گویند.<br>نوتروفیل نابالغ با هسته‌ای نواری‌شکل <b>band cell</b> نام دارد؛ افزایش باندها نشانه عفونت حاد است.`),
          B('مونوسیت وقتی وارد بافت شود به ___ تبدیل می‌شود.', ['ماکروفاژ', 'پلاسماسل', 'پلاکت'], 'macro (بزرگ) + phage (خورنده) = بیگانه‌خوار بزرگ.'),
          O('گلبول‌های سفید را از بیشترین به کمترین درصد مرتب کن', ['neutrophil', 'lymphocyte', 'monocyte', 'eosinophil', 'basophil'], 'رمز حفظ: Never Let Monkeys Eat Bananas.'),
          N('sp:hb')
        ]
      },
      {
        id: 'hb6', title: 'خون‌سازی و مغز استخوان', icon: '🦴', items: [
          L('هماتوپوئز', `<b>hematopoiesis</b> (یا hemopoiesis) یعنی ساخت همه سلول‌های خون در <b>مغز قرمز استخوان</b>.<br>${wb('hemat/o', '-poiesis')}<br>همه از یک <b>سلول بنیادی</b> (stem cell یا hemocytoblast) شروع می‌شوند و به دو رده تقسیم می‌شوند: میلوئید و لنفوئید.${fig('hemato')}${fig('hematopoiesis', '', 'نمودار مرجع: erythropoiesis، thrombopoiesis و leukopoiesis؛ از سلول پیش‌ساز تا سلول بالغ.')}`),
          M('سلول بنیادی خون‌ساز با کدام نام هم شناخته می‌شود؟', ['hemocytoblast', 'megakaryocyte', 'reticulocyte', 'macrophage'], 'hem/o (خون) + cyt/o (سلول) + -blast (سلول نابالغ) = سلول نابالغی که خون‌ساز است.'),
          L('پسوند -blast', `${e('-blast')} یعنی <b>سلول نابالغ</b> (جوانه).<br>• <b>myeloblast</b>: پیش‌ساز گرانولوسیت‌ها؛ در برخی لوسمی‌ها مغز استخوان را پر می‌کند<br>• <b>erythroblast</b>: پیش‌ساز گلبول قرمز<br>${e('myel/o')} = مغز استخوان (و نخاع) ← <b>myelogenous</b> = ساخته‌شده در مغز استخوان`),
          P('ریشه و معنی', [['myel/o', 'مغز استخوان'], ['-blast', 'سلول نابالغ'], ['-poiesis', 'ساختن'], ['kary/o', 'هسته']]),
          L('پلاکت از کجا می‌آید؟', `<b>megakaryocyte</b> سلول بسیار بزرگی در مغز استخوان است که <b>تکه‌تکه</b> می‌شود و پلاکت‌ها را می‌سازد.<br>${wb('mega', 'kary/o', '-cyte')} ← سلولِ با هسته بزرگ.<br><br><b>reticulocyte</b> گلبول قرمز تقریباً بالغ است؛ شمارش آن نشان می‌دهد مغز استخوان چقدر فعال است.`),
          T('پلاکت‌ها تکه‌هایی از سلول‌های بزرگی به نام megakaryocyte هستند.', true, 'درست؛ مگاکاریوسیت سیتوپلاسم خود را به هزاران پلاکت تبدیل می‌کند.'),
          L('افزایش و کاهش', `دو پسوند پرکاربرد:<br>• ${e('-cytosis')} = افزایش سلول ← <b>leukocytosis</b>، <b>erythrocytosis</b>، <b>thrombocytosis</b><br>• ${e('-penia')} = کمبود ← <b>leukopenia</b>، <b>erythropenia</b> (erythrocytopenia)، <b>thrombocytopenia</b>، <b>neutropenia</b>`),
          M(`${e('neutropenia')} یعنی…`, ['کاهش نوتروفیل‌ها', 'افزایش نوتروفیل‌ها', 'تخریب نوتروفیل‌ها', 'ساخت نوتروفیل‌ها'], 'neutr/o + -penia (کمبود). نوتروپنی خطر عفونت را بالا می‌برد.'),
          W('واژه‌ای بساز به معنی «افزایش گلبول‌های سفید»', ['leuk/o', '-cytosis'], ['-penia', 'erythr/o', '-poiesis'], 'leuk/o + -cytosis = leukocytosis؛ مثلاً در عفونت.'),
          B('leukopenia یعنی ___ گلبول‌های سفید.', ['کاهش', 'افزایش', 'ساخت'], '‎-penia = کمبود.'),
          N('wb:hb')
        ]
      },
      {
        id: 'hb7', title: 'کم‌خونی‌ها', icon: '😮‍💨', items: [
          L('آنمی یعنی چه؟', `<b>anemia</b> = کاهش گلبول‌های قرمز یا هموگلوبین، در نتیجه اکسیژن کمتری به بافت‌ها می‌رسد.<br>${wb('an-', '-emia')} ← «بدون خون».<br>علائم: <b>خستگی، پریدگی رنگ، تنگی نفس</b> (dyspnea)، تپش قلب و تحریک‌پذیری.${fig('anemia-tree', '', 'هر کم‌خونی از یکی از این سه راه است: کم ساخته شود، زیاد تخریب شود، یا از دست برود.')}${pearl('در برخورد با هر کم‌خونی بپرس: «کارخانه خراب است، گلبول‌ها نابود می‌شوند، یا خون نشت می‌کند؟» همین سؤال، آزمایش‌های بعدی را تعیین می‌کند.')}`),
          M('کدام علامت از نشانه‌های شایع کم‌خونی است؟', ['خستگی و رنگ‌پریدگی', 'تب بالا و لرز', 'خارش شدید پوست', 'بزرگی گره‌های لنفاوی'], 'کمبود اکسیژن‌رسانی به بافت‌ها ← خستگی، پریدگی رنگ، تنگی نفس و تپش قلب.'),
          L('انواع کم‌خونی (۱)', tbl([['نوع', 'علت'], ['iron-deficiency', 'آهن کافی برای ساخت هموگلوبین نیست'], ['aplastic', 'نارسایی مغز استخوان ← پانسیتوپنی'], ['pernicious', 'نبود intrinsic factor ← جذب نشدن B12'], ['megaloblastic', 'گلبول‌های بزرگ نابالغ؛ کمبود B12 یا فولات'], ['nutritional', 'کمبود آهن، B12 یا فولات در رژیم']])),
          P('نوع آنمی و علتش', [['aplastic anemia', 'نارسایی مغز استخوان'], ['pernicious anemia', 'نبود فاکتور داخلی معده'], ['iron-deficiency anemia', 'آهن ناکافی برای هموگلوبین'], ['hemorrhagic anemia', 'از دست رفتن خون']]),
          L('انواع کم‌خونی (۲)', tbl([['نوع', 'علت'], ['hemolytic', 'تخریب گلبول‌های قرمز (hemolysis)'], ['sickle cell', 'هموگلوبین غیرطبیعی؛ گلبول داسی‌شکل'], ['thalassemia', 'اختلال ارثی ساخت هموگلوبین؛ نوع شدید = Cooley'], ['sideroblastic', 'آهن هست ولی در هموگلوبین به کار نمی‌رود'], ['hemorrhagic', 'خونریزی ناگهانی یا مزمن']]) + fig('sickle-vessel', '', 'A: گلبول طبیعی آزادانه از رگ می‌گذرد. B: گلبول‌های داسی‌شکل سفت و چسبنده‌اند و جریان خون را می‌بندند.')),
          M('این تصویر کدام کم‌خونی را نشان می‌دهد؟', ['sickle cell anemia', 'iron-deficiency anemia', 'aplastic anemia', 'pernicious anemia'], 'هموگلوبین غیرطبیعی وقتی اکسیژن کم شود رشته می‌سازد و گلبول را داسی‌شکل می‌کند.', null, F('sickle-vs-normal')),
          L('عوارض بیماری داسی‌شکل', `گلبول‌های داسی رگ‌های کوچک را در سراسر بدن می‌بندند:${fig('sickle-complications', '', 'مغز: ترومبوز و سکته • ریه: انفارکتوس و پنومونی • قلب: نارسایی • شکم: بزرگی و انفارکتوس طحال، سنگ صفرا • پوست: زخم‌های استاز • مفاصل: سندرم دست و پا')}<br>درمان بیشتر <b>تسکینی</b> (palliative) است: کنترل درد و پیشگیری از بحران.`),
          T('در بیماری داسی‌شکل، انفارکتوس و بزرگی طحال از عوارض شایع‌اند.', true, 'درست؛ رگ‌های طحال با گلبول‌های داسی بسته می‌شوند.', F('sickle-complications')),
          M('در کم‌خونی پرنیشیوز کدام ماده کم است؟', ['intrinsic factor (برای جذب B12)', 'اریتروپویتین', 'آهن رژیم غذایی', 'فیبرینوژن'], 'معده فاکتور داخلی نمی‌سازد، پس ویتامین B12 جذب نمی‌شود؛ درمان: تزریق B12.'),
          T('تالاسمی یک کم‌خونی ارثی است که شدیدترین نوع آن Cooley anemia نام دارد.', true, 'درست؛ thalass/o یعنی دریا، چون اولین بار در اطراف مدیترانه توصیف شد.'),
          L('سیدروبلاستیک و همولیز', `${e('sider/o')} = آهن ← <b>sideroblastic anemia</b>: آهن کافی هست ولی درست در هموگلوبین قرار نمی‌گیرد.<br>${e('-lysis')} = تخریب ← <b>hemolysis</b>: شکستن گلبول قرمز و آزاد شدن هموگلوبین؛ ${e('hemolytic anemia')} از همین‌جا می‌آید.<br><b>hemosiderosis</b> = رسوب آهن اضافی در بافت‌ها.`),
          W('واژه‌ای بساز به معنی «تخریب خون (گلبول‌های قرمز)»', ['hem/o', '-lysis'], ['-stasis', 'sider/o', '-poiesis'], 'hem/o + -lysis = hemolysis.'),
          S('املای انگلیسی «کم‌خونی» را بنویس', 'anemia', 'an- (بدون) + -emia (وضعیت خون) = anemia.'),
          N('t2f:hb')
        ]
      },
      {
        id: 'hb8', title: 'شکل و رنگ گلبول', icon: '🎨', items: [
          L('اندازه و شکل', `در بررسی <b>RBC morphology</b>:<br>• ${e('anis/o')} = نابرابر ← <b>anisocytosis</b>: تفاوت زیاد در <b>اندازه</b><br>• ${e('poikil/o')} = گوناگون ← <b>poikilocytosis</b>: تفاوت در <b>شکل</b><br>• <b>macrocyte</b> = گلبول درشت، <b>microcyte</b> = گلبول ریز<br>• <b>spherocyte</b> = گلبول کروی (${e('spher/o')} = کره)${fig('rbcshapes')}`),
          L('زیر میکروسکوپ', `چهار لام خون از مرجع:${fig('smears', 'A، B، C، D', 'A: گلبول‌های گرد و یکنواخت • B: تنوع شکل و اندازه (پویکیلوسیتوز و آنیزوسیتوز) • C: گلبول‌های داسی‌شکل • D: سلول‌های بسیار کم')}`),
          M('در کدام بخش این تصویر گلبول‌های داسی‌شکل دیده می‌شوند؟', ['C', 'A', 'B', 'D'], 'در C گلبول‌های هلالی و کشیده (sickle) دیده می‌شوند.', null, F('smears')),
          M('اختلاف زیاد در «اندازه» گلبول‌های قرمز چه نام دارد؟', ['anisocytosis', 'poikilocytosis', 'spherocytosis', 'polycythemia'], 'anis/o = نابرابر (اندازه). poikil/o مربوط به شکل است.', null, F('rbcshapes')),
          P('ریشه و معنی', [['anis/o', 'نابرابر'], ['poikil/o', 'گوناگون، نامنظم'], ['spher/o', 'کره، گرد'], ['macro-', 'بزرگ']]),
          L('رنگ گلبول', `${e('chrom/o')} = رنگ:<br>• <b>normochromia</b>: رنگ طبیعی<br>• <b>hypochromia</b>: کم‌رنگ، به‌خاطر هموگلوبین کم (مثل فقر آهن)<br>• <b>hyperchromia</b>: پررنگ<br><b>hypochromic anemia</b> یعنی کم‌خونی با گلبول‌های کم‌رنگ.`),
          T('در کم‌خونی فقر آهن، گلبول‌ها معمولاً hypochromic (کم‌رنگ) هستند.', true, 'درست؛ هموگلوبین کمتر ← رنگ کمتر. معمولاً microcytic هم هستند.'),
          L('گلبول بیش از حد', `<b>polycythemia</b> = افزایش غیرطبیعی گلبول‌های قرمز و غلظت خون.<br>${wb('poly-', 'cyt/o', '-hemia')}<br>• <b>polycythemia vera</b>: مغز استخوان بیش‌فعال که بیش از حد گلبول می‌سازد<br>• <b>erythrocytosis</b>: افزایش گلبول قرمز که ممکن است طبیعی باشد (مثلاً در ارتفاع زیاد)<br>• <b>erythremia</b> هم به همین معنی است.`),
          M(`${e('pancytopenia')} یعنی…`, ['کاهش همه سلول‌های خون', 'افزایش همه سلول‌های خون', 'کاهش فقط پلاکت‌ها', 'تخریب گلبول‌های قرمز'], 'pan- (همه) + cyt/o + -penia. در کم‌خونی آپلاستیک دیده می‌شود.'),
          B('گلبول قرمز کروی به‌جای دیسکی ___ نام دارد.', ['spherocyte', 'macrocyte', 'reticulocyte'], 'spher/o = کره؛ spherocytic anemia یک کم‌خونی ارثی است.'),
          W('واژه‌ای بساز به معنی «سلول بزرگ»', ['macro-', '-cyte'], ['micro-', 'poly-', '-penia'], 'macro- + -cyte = macrocyte.'),
          S('املای انگلیسی «تنوع شکل گلبول‌ها» را بنویس', 'poikilocytosis', 'poikil/o (گوناگون) + -cytosis.', 'poik…'),
          N('m2r:hb')
        ]
      },
      {
        id: 'hb9', title: 'لوسمی و دیسکرازی‌ها', icon: '🧬', items: [
          L('دیسکرازی خونی', `<b>dyscrasia</b> اصطلاحی کلی برای هر بیماری خون است.<br>${e('dys-')} = بد، غیرطبیعی. از این خانواده: کم‌خونی‌ها، لوسمی، میلوما و اختلالات انعقادی.`),
          L('لوسمی (سرطان خون)', `<b>leukemia</b> = سرطان مغز استخوان که <b>گلبول‌های سفید نابالغ و غیرطبیعی</b> فراوان می‌سازد و جای بقیه سلول‌ها را می‌گیرد ← کم‌خونی، خونریزی و عفونت.<br>دسته‌بندی: <b>حاد/مزمن</b> × <b>میلوئیدی/لنفوسیتی</b>:<br>${tbl([['اختصار', 'نام'], ['AML', 'acute myelogenous leukemia'], ['CML', 'chronic myelogenous leukemia'], ['ALL', 'acute lymphocytic leukemia'], ['CLL', 'chronic lymphocytic leukemia']])}${fig('leuk-matrix', '', 'دو پرسش، چهار لوسمی: سلول‌ها نابالغ‌اند یا بالغ‌تر؟ از رده میلوئید آمده‌اند یا لنفوئید؟')}${memo('حرف آخر همیشه L (Leukemia) است؛ حرف اول سرعت (Acute/Chronic) و حرف وسط رده (Myelogenous/Lymphocytic). ALL «کوچولوها» (کودکان) و CLL «کهنسالان» را می‌گیرد.')}`),
          P('اختصار و نوع لوسمی', [['ALL', 'لنفوسیتی حاد'], ['CLL', 'لنفوسیتی مزمن'], ['AML', 'میلوئیدی حاد'], ['CML', 'میلوئیدی مزمن']]),
          L('تأیید تشخیص', `تشخیص قطعی لوسمی و بیشتر دیسکرازی‌ها با <b>bone marrow aspiration</b> و <b>biopsy</b> است: سوزن معمولاً از <b>ستیغ لگن</b> (iliac crest) وارد مغز استخوان می‌شود.${fig('marrow-aspiration', '', 'آسپیراسیون مغز استخوان در وضعیت خوابیده به پهلو یا شکم')}`),
          M('کروموزوم فیلادلفیا (Ph) در بیشتر بیماران کدام لوسمی دیده می‌شود؟', ['CML', 'ALL', 'CLL', 'hairy cell leukemia'], 'Philadelphia chromosome نشانه لوسمی میلوئیدی مزمن (CML) است.'),
          T('ALL شایع‌ترین سرطان کودکان است و اغلب با تب، پتشی و خونریزی لثه خود را نشان می‌دهد.', true, 'درست؛ مثل کیس پسر ۲ ساله با تب، خون‌دماغ و پتشی در منابع. تشخیص با آسپیراسیون مغز استخوان تأیید می‌شود.'),
          L('میلوما و دیگران', `• <b>multiple myeloma</b>: سرطان <b>پلاسماسل‌های</b> مغز استخوان؛ استخوان‌ها را تخریب می‌کند و در ادرار <b>Bence Jones protein</b> دیده می‌شود<br>• <b>myelodysplastic syndrome</b> (MDS): رشد ناقص مغز استخوان؛ تولید ناکافی یک یا چند رده<br>• <b>myelofibrosis</b>: جایگزینی مغز استخوان با بافت فیبری<br>• <b>hairy cell leukemia</b>: سلول‌ها زوائد مومانند دارند`),
          M('پروتئین Bence Jones در ادرار نشانه کدام بیماری است؟', ['multiple myeloma', 'hemophilia', 'thalassemia', 'polycythemia vera'], 'پلاسماسل‌های سرطانی زنجیره‌های سبک ایمونوگلوبولین می‌سازند که در ادرار دیده می‌شوند.'),
          B('در myelofibrosis، مغز استخوان با بافت ___ جایگزین می‌شود.', ['فیبری', 'چربی', 'استخوانی'], 'myel/o + fibr/o + -osis.'),
          O('مسیر تشخیص لوسمی را مرتب کن', ['علائم: خستگی، تب، کبودی و عفونت مکرر', 'CBC: گلبول‌های سفید نابالغ زیاد، RBC و پلاکت کم', 'آسپیراسیون و بیوپسی مغز استخوان', 'شیمی‌درمانی برای رسیدن به remission'], 'مثل کیس زن ۲۲ ساله در منابع: CBC، بررسی مغز استخوان و شیمی‌درمانی تهاجمی.'),
          S('املای انگلیسی «لوسمی» را بنویس', 'leukemia', 'leuk/o (سفید) + -emia (وضعیت خون).'),
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
    id: 'co', sym: 'PT', name: 'هموستاز و انتقال خون', short: 'انعقاد', sub: 'پلاکت، آبشار انعقاد، لخته، گروه‌های خونی، ترانسفیوژن و خونریزی‌ها',
    color: '#7B5CE0', dark: '#5B3FBF', light: '#EDE7FC',
    levels: ['پلاکت و انعقاد', 'گروه‌های خونی', 'انتقال خون و خونریزی'],
    gens: EA.genIds('co'),
    lessons: [
      {
        id: 'co1', title: 'پلاکت و هموستاز', icon: '🩹', items: [
          L('هموستاز یعنی ایستادن خون', `${wb('hem/o', '-stasis')}<br><b>hemostasis</b> = توقف خونریزی. ${e('-stasis')} یعنی ایستادن یا کنترل کردن.<br><br>وقتی رگ آسیب می‌بیند:<br>۱. رگ تنگ می‌شود<br>۲. <b>پلاکت‌ها</b> به محل زخم می‌چسبند و <b>درپوش پلاکتی</b> می‌سازند<br>۳. <b>آبشار انعقاد</b> درپوش را با رشته‌های فیبرین محکم می‌کند${fig('hemostasis')}${memo('سه گام را مثل تعمیر لوله ترکیده به خاطر بسپار: شیر را ببند (تنگی رگ)، وصله بچسبان (درپوش پلاکتی)، چسب را خشک کن (فیبرین).')}`),
          M(`${e('-stasis')} در hemostasis یعنی…`, ['توقف، کنترل', 'تخریب', 'ساختن', 'جریان'], 'hem/o + -stasis = متوقف کردن خون. hemostatics داروهای بندآورنده خون‌اند.'),
          L('پلاکت در اعداد', `• نام دیگر: <b>thrombocyte</b> (سلول لخته)<br>• تعداد طبیعی: <b>۱۵۰٬۰۰۰ تا ۴۵۰٬۰۰۰</b> در میکرولیتر<br>• عمر: حدود <b>۱۰ روز</b><br>• منشأ: تکه‌های <b>megakaryocyte</b> در مغز استخوان${fig(['platelet-structure', 'cell-platelet'], ['Platelet structure', 'نمای ساده'])}`),
          B('تعداد طبیعی پلاکت حدود ___ تا ۴۵۰ هزار در میکرولیتر است.', ['۱۵۰ هزار', '۵۰ هزار', '۱ میلیون'], 'PLT طبیعی: ۱۵۰٬۰۰۰ تا ۴۵۰٬۰۰۰ /µL.'),
          P('واژه و معنی', [['thrombocytopenia', 'کمبود پلاکت'], ['thrombocytosis', 'افزایش پلاکت'], ['thrombocytic', 'مربوط به پلاکت'], ['hemostasis', 'توقف خونریزی']]),
          T('کمبود شدید پلاکت می‌تواند باعث نقطه‌های خونریزی ریز زیر پوست شود.', true, 'درست؛ ترومبوسیتوپنی با petechiae، purpura و ecchymosis همراه است.'),
          W('واژه‌ای بساز به معنی «کمبود پلاکت»', ['thromb/o', 'cyt/o', '-penia'], ['-cytosis', 'erythr/o', '-stasis'], 'thromb/o + cyt/o + -penia = thrombocytopenia.'),
          M('کدام عمر کوتاه‌تری دارد؟', ['پلاکت (حدود ۱۰ روز)', 'گلبول قرمز (حدود ۱۲۰ روز)', 'هر دو یکسان‌اند', 'هیچ‌کدام از بین نمی‌روند'], 'پلاکت حدود ۱۰ روز و گلبول قرمز حدود ۱۲۰ روز.'),
          S('املای انگلیسی «هموستاز» را بنویس', 'hemostasis', 'hem/o + -stasis.'),
          N('t2f:co')
        ]
      },
      {
        id: 'co2', title: 'آبشار انعقاد', icon: '⛓️', items: [
          L('از زخم تا لخته', `<b>coagulation</b> (${e('coagul/o')} = لخته شدن) زنجیره‌ای از واکنش‌هاست:<br>۱. پلاکت‌ها در محل آسیب جمع می‌شوند و <b>thromboplastin</b> آزاد می‌کنند<br>۲. ترومبوپلاستین با <b>کلسیم</b> و <b>عوامل انعقادی</b> پلاسما (۱۲ فاکتور)…<br>۳. <b>prothrombin</b> را به <b>thrombin</b> تبدیل می‌کند<br>۴. ترومبین، <b>fibrinogen</b> را به رشته‌های <b>fibrin</b> تبدیل می‌کند<br>۵. رشته‌های فیبرین سلول‌ها را به دام می‌اندازند ← <b>لخته</b>${fig('clot')}`),
          O('مراحل انعقاد را مرتب کن', ['آسیب رگ', 'تجمع پلاکت‌ها و آزاد شدن ترومبوپلاستین', 'تبدیل پروترومبین به ترومبین', 'تبدیل فیبرینوژن به فیبرین', 'تشکیل لخته'], 'ترومبوپلاستین + کلسیم ← ترومبین ← فیبرین ← لخته.', F('clot')),
          M('رشته‌های سفید توری‌شکل در این تصویر میکروسکوپی که گلبول‌ها را به دام انداخته‌اند چیست؟', ['fibrin', 'fibrinogen', 'plasma', 'platelets'], 'رشته‌های فیبرین تور لخته را می‌سازند و گلبول‌های قرمز در آن گیر می‌افتند.', null, F('fibrin-clot')),
          M('کدام آنزیم فیبرینوژن را به فیبرین تبدیل می‌کند؟', ['thrombin', 'plasmin', 'heparin', 'prothrombin'], 'ترومبین (که از پروترومبین ساخته می‌شود) فیبرینوژن را به فیبرین تبدیل می‌کند.'),
          B('برای تبدیل پروترومبین به ترومبین، یون ___ لازم است.', ['کلسیم', 'آهن', 'پتاسیم'], 'ترومبوپلاستین در حضور کلسیم (Ca²⁺) عمل می‌کند.'),
          P('هر ماده و نقشش', [['thromboplastin', 'شروع‌کننده؛ از پلاکت آزاد می‌شود'], ['prothrombin', 'پیش‌ساز پروتئینی در پلاسما'], ['fibrin', 'رشته‌های توری لخته'], ['plasmin', 'حل‌کننده لخته']]),
          L('حل کردن لخته', `بدن لخته را پس از ترمیم زخم <b>حل</b> می‌کند: <b>plasmin</b> (fibrinolysin) رشته‌های فیبرین را می‌شکند.<br>${wb('fibrin/o', '-lytic')} ← <b>fibrinolytic</b> = حل‌کننده لخته.<br>${e('-lysis')} = تخریب ← <b>thrombolysis</b> = از بین بردن لخته.<br><br><b>heparin</b> ماده‌ای طبیعی (و دارو) است که از لخته شدن خون در گردش جلوگیری می‌کند.`),
          T('هپارین روند انعقاد را مهار می‌کند و ضدانعقاد است.', true, 'درست؛ در بدن به‌طور طبیعی هم وجود دارد (مثلاً در بازوفیل‌ها) و به‌عنوان دارو هم استفاده می‌شود.'),
          M('سرم با پلاسما چه فرقی دارد؟', ['سرم فیبرینوژن و عوامل انعقادی ندارد', 'سرم گلبول قرمز دارد', 'سرم آب ندارد', 'هیچ فرقی ندارند'], 'وقتی خون لخته شود، فیبرینوژن مصرف می‌شود؛ مایع باقی‌مانده سرم است.'),
          W('واژه‌ای بساز به معنی «تخریب لخته»', ['thromb/o', '-lysis'], ['-stasis', 'fibrin/o', '-poiesis'], 'thromb/o + -lysis = thrombolysis.'),
          N('d2t:co')
        ]
      },
      {
        id: 'co3', title: 'لخته در جای اشتباه', icon: '🚧', items: [
          L('ترومبوس و آمبولی', `• <b>thrombus</b>: لخته‌ای که در داخل رگ <b>ثابت</b> مانده<br>• <b>thrombosis</b>: وضعیت تشکیل لخته در رگ<br>• <b>embolus</b> (${e('embol/o')} = توپی): لخته یا توده‌ای که <b>جابه‌جا</b> می‌شود و جای دیگری را می‌بندد<br>• <b>embolectomy</b>: برداشتن آمبولی با جراحی<br><br>اگر رگ مغز بسته شود ← <b>stroke</b> (سکته مغزی).${vs(['thrombus', 'ثابت: مثل ماشینی که در خیابان پارک شده'], ['embolus', 'متحرک: ماشینی که راه افتاده و جای دیگری راه را می‌بندد'])}${pearl('شایع‌ترین سناریو: لخته در سیاهرگ عمقی ساق (DVT) کنده می‌شود و در شریان ریه گیر می‌کند ← pulmonary embolism؛ تنگی نفس ناگهانی پس از بی‌حرکتی طولانی.')}`),
          M('لخته‌ای که از محل خود کنده شده و در جریان خون حرکت می‌کند چه نام دارد؟', ['embolus', 'thrombus', 'hematoma', 'fibrin'], 'thrombus ثابت است؛ embolus متحرک.'),
          P('واژه و تعریف', [['thrombus', 'لخته ثابت در رگ'], ['embolus', 'توده متحرک در رگ'], ['embolectomy', 'برداشتن آمبولی'], ['thrombotic', 'مربوط به لخته']]),
          L('داروها علیه لخته', `• <b>anticoagulant</b> («رقیق‌کننده خون»): <b>جلوگیری</b> از تشکیل لخته؛ مثل هپارین. پیش از جراحی برای پیشگیری از آمبولی<br>• <b>thrombolytic</b>: <b>حل کردن</b> لخته‌ای که تشکیل شده<br>• پایش: <b>PT/INR</b> و <b>PTT (aPTT)</b>`),
          M('بیمار دچار لخته شریانی حاد است و باید لخته «حل» شود. کدام گروه دارویی؟', ['thrombolytics', 'anticoagulants', 'hemostatics', 'coagulants'], 'ضدانعقادها جلوی لخته تازه را می‌گیرند؛ ترومبولیتیک‌ها لخته موجود را حل می‌کنند.'),
          L('DIC: لخته و خونریزی با هم', `<b>disseminated intravascular coagulation</b> (DIC):<br>لخته‌های ریز <b>گسترده</b> در رگ‌های کوچک تشکیل می‌شوند، عوامل انعقادی و پلاکت‌ها <b>مصرف</b> می‌شوند و سپس <b>خونریزی منتشر</b> رخ می‌دهد.<br>${e('intra-')} = درون، ${e('vascul/o')} = رگ.`),
          T('در DIC ابتدا لخته‌های منتشر و سپس خونریزی گسترده دیده می‌شود.', true, 'درست؛ مصرف عوامل انعقادی باعث خونریزی بعدی می‌شود. اغلب در سپسیس شدید.'),
          B('واژه thrombosis یعنی وضعیت غیرطبیعی ___.', ['لخته', 'خونریزی', 'گلبول سفید'], 'thromb/o + -osis.'),
          S('املای انگلیسی «ضدانعقاد» را بنویس', 'anticoagulant', 'anti- (ضد) + coagul/o (لخته شدن) + -ant.', 'anti…'),
          N('sp:co')
        ]
      },
      {
        id: 'co4', title: 'گروه خونی ABO', icon: '🅰️', items: [
          L('آنتی‌ژن روی گلبول، آنتی‌بادی در پلاسما', `گروه خونی را <b>آنتی‌ژن‌های</b> ارثی روی سطح گلبول قرمز تعیین می‌کنند (agglutinogens).<br>پلاسما در برابر آنتی‌ژنی که <b>ندارد</b>، آنتی‌بادی دارد:${tbl([['گروه', 'آنتی‌ژن روی RBC', 'آنتی‌بادی در پلاسما'], ['A', 'A', 'anti-B'], ['B', 'B', 'anti-A'], ['AB', 'A و B', 'هیچ'], ['O', 'هیچ', 'anti-A و anti-B']])}${fig(['abo-table', 'abo'], ['جدول: ABO Blood Types', 'نمودار ایمنا'])}`),
          M('کسی با گروه خونی B در پلاسمایش چه آنتی‌بادی‌ای دارد؟', ['anti-A', 'anti-B', 'هر دو', 'هیچ‌کدام'], 'آنتی‌ژن B دارد، پس علیه A آنتی‌بادی دارد.', null, F('abo')),
          L('اهداکننده و گیرنده همگانی', `• گروه <b>O</b> آنتی‌ژن A و B ندارد ← <b>اهداکننده همگانی</b> گلبول قرمز (universal donor)<br>• گروه <b>AB</b> آنتی‌بادی ندارد ← <b>گیرنده همگانی</b> (universal recipient)<br><br>در کیس <b>Dianne Love</b>، پزشک در شرایط فوری <b>۲ واحد خون O منفی</b> تجویز کرد.`),
          T('گروه خونی AB «اهداکننده همگانی» است.', false, 'AB گیرنده همگانی است؛ اهداکننده همگانی O (به‌خصوص O منفی) است.'),
          L('آگلوتیناسیون', `اگر خون ناسازگار تزریق شود، آنتی‌بادی‌ها به آنتی‌ژن‌ها می‌چسبند و گلبول‌ها <b>کلوخه</b> می‌شوند: <b>agglutination</b> (${e('agglutin/o')} = به هم چسبیدن). این واکنش ممکن است <b>کشنده</b> باشد.<br><br>تعیین گروه خونی هم با همین اصل است: نمونه با <b>antiserum</b> مخلوط می‌شود؛ کلوخه شدن یعنی آن آنتی‌ژن وجود دارد.`),
          P('گروه خونی و ویژگی', [['O', 'اهداکننده همگانی'], ['AB', 'گیرنده همگانی'], ['A', 'آنتی‌بادی anti-B'], ['B', 'آنتی‌بادی anti-A']]),
          M('نمونه خون با antiserum ضد A کلوخه می‌شود ولی با ضد B نه. گروه خونی؟', ['A', 'B', 'AB', 'O'], 'کلوخه شدن با anti-A یعنی آنتی‌ژن A وجود دارد؛ B ندارد.'),
          B('به هم چسبیدن گلبول‌ها در واکنش آنتی‌ژن-آنتی‌بادی ___ نام دارد.', ['agglutination', 'coagulation', 'hemolysis'], 'agglutin/o = چسبیدن؛ با coagulation (لخته شدن) اشتباه نشود.'),
          S('املای انگلیسی «آگلوتیناسیون» را بنویس', 'agglutination', 'agglutin/o + -ation.', 'aggl…'),
          N('ab:co')
        ]
      },
      {
        id: 'co5', title: 'عامل Rh', icon: '➕', items: [
          L('مثبت یا منفی', `<b>Rh factor</b> (فاکتور رزوس) آنتی‌ژن دیگری روی گلبول قرمز است:<br>• وجود آن ← <b>Rh+</b><br>• نبود آن ← <b>Rh−</b><br>بیشتر مردم Rh مثبت‌اند. فرد Rh منفی پس از تماس با خون Rh مثبت، علیه آن <b>آنتی‌بادی</b> (anti-D) می‌سازد.${fig('rh-table', '', 'آنتی‌ژن Rh همان آنتی‌ژن D است.')}`),
          M('O منفی یعنی گلبول قرمز کدام آنتی‌ژن‌ها را ندارد؟', ['A، B و Rh', 'فقط A', 'فقط Rh', 'فقط B'], 'O = بدون A و B؛ منفی = بدون Rh. برای همین در اورژانس امن‌ترین گلبول قرمز است.'),
          L('بیماری همولیتیک نوزاد', `<b>erythroblastosis fetalis</b> یا <b>HDN</b> (hemolytic disease of the newborn):<br>مادر <b>Rh−</b> با جنین <b>Rh+</b>. در زایمان اول، مادر آنتی‌بادی ضد Rh می‌سازد؛ در بارداری بعدی این آنتی‌بادی‌ها از جفت عبور می‌کنند و گلبول‌های جنین را <b>همولیز</b> می‌کنند ← کم‌خونی شدید جنین.<br>${wb('erythr/o', '-blast', '-osis')} ← گلبول‌های قرمز نابالغ (اریتروبلاست) فراوان در خون جنین.${fig('rh-hdn')}${pearl('پیشگیری: به مادر Rh منفی در هفته ۲۸ بارداری و ظرف ۷۲ ساعت پس از زایمان <b>RhoGAM</b> (ایمونوگلوبولین ضد D) تزریق می‌کنند تا اصلاً آنتی‌بادی نسازد.')}${fig('fetus')}`),
          T('خطر اریتروبلاستوز جنینی وقتی است که مادر Rh مثبت و جنین Rh منفی باشد.', false, 'برعکس: مادر Rh منفی و جنین Rh مثبت. آنتی‌بادی‌های مادر به گلبول‌های جنین حمله می‌کنند.'),
          O('ترتیب رخدادها در HDN را مرتب کن', ['مادر Rh منفی، جنین اول Rh مثبت', 'ورود خون جنین به گردش مادر هنگام زایمان', 'ساخت آنتی‌بادی ضد Rh در مادر', 'عبور آنتی‌بادی از جفت در بارداری بعد', 'همولیز گلبول‌های جنین Rh مثبت'], 'برای همین به مادران Rh منفی پس از زایمان، ایمونوگلوبولین ضد D داده می‌شود تا حساس نشوند.'),
          L('تست کومبس', `<b>Coombs test</b> (antiglobulin test) آنتی‌بادی‌های چسبیده به گلبول‌های قرمز را پیدا می‌کند؛ در <b>ناسازگاری Rh</b>، HDN و <b>کم‌خونی همولیتیک خودایمنی</b> استفاده می‌شود.`),
          M('برای یافتن آنتی‌بادی‌های روی گلبول قرمز نوزاد مشکوک به HDN، کدام آزمایش؟', ['Coombs test', 'Schilling test', 'ESR', 'Western blot'], 'تست کومبس آنتی‌بادی‌های متصل به RBC را نشان می‌دهد.'),
          P('اختصار و معنی', [['Rh+', 'دارای آنتی‌ژن Rh'], ['Rh−', 'فاقد آنتی‌ژن Rh'], ['HDN', 'بیماری همولیتیک نوزاد'], ['ABO', 'سیستم گروه خونی A، B، AB، O']]),
          B('کومبس یک آزمایش ___ است؛ یعنی آنتی‌بادی‌ها را جست‌وجو می‌کند.', ['آنتی‌گلوبولین', 'انعقادی', 'میکروبی'], 'نام دیگرش antiglobulin test است.'),
          N('f2t:co')
        ]
      },
      {
        id: 'co6', title: 'انتقال خون', icon: '🔁', items: [
          L('ترانسفیوژن', `<b>transfusion</b> = تزریق خون یا اجزای آن از اهداکننده به گیرنده.<br>${wb('trans-', 'fus/o', '-ion')} ← «ریختن به آن سو».<br>پیش از تزریق، <b>cross-matching</b> (آزمایش سازگاری متقاطع) انجام می‌شود: گلبول‌های اهداکننده با سرم گیرنده مخلوط می‌شوند تا واکنش ایمنی بررسی شود.${fig('donor-grid', '', 'هر ستون اهداکننده و هر ردیف گیرنده است: ✓ یعنی گلبول قرمز آن اهداکننده به این گیرنده می‌رسد.')}${memo('O «همه را دوست دارد» (به همه می‌دهد)؛ AB «از همه می‌گیرد». یک بار با جدول بازی کن: ستون O تمام سبز است و ردیف AB تمام سبز.')}`),
          M('هدف cross-matching پیش از انتقال خون چیست؟', ['بررسی سازگاری خون اهداکننده و گیرنده', 'شمارش پلاکت‌ها', 'تعیین زمان لخته شدن', 'تشخیص عفونت HIV'], 'گلبول‌های اهداکننده با سرم گیرنده مخلوط می‌شوند؛ کلوخه شدن یعنی ناسازگاری.'),
          L('خون خودی یا دیگری؟', `• <b>autologous</b> (${e('auto-')} = خود): خون <b>خود بیمار</b> که چند هفته پیش از جراحی جمع و ذخیره می‌شود<br>• <b>homologous</b> (${e('homo-')} = همانند): خون <b>فرد دیگری</b> از همان گونه (انسان)<br><br>در کیس <b>Lisa</b> (پارگی کبد): اتوترانسفیوژن خون شسته‌شده، سپس خون همولوگ، FFP و پلاکت.`),
          P('نوع انتقال خون', [['autologous', 'خون خود بیمار'], ['homologous', 'خون اهداکننده دیگر'], ['cross-matching', 'آزمون سازگاری'], ['hemolytic reaction', 'تخریب RBC در تزریق ناسازگار']]),
          L('فرآورده‌های خونی', tbl([['فرآورده', 'کاربرد'], ['PRBC (گلبول قرمز متراکم)', 'کم‌خونی شدید، خونریزی'], ['FFP (پلاسمای تازه منجمد)', 'جایگزینی عوامل انعقادی'], ['platelets', 'ترومبوسیتوپنی، خونریزی'], ['cryoprecipitate', 'فیبرینوژن و فاکتور VIII؛ از سرد کردن پلاسما']])),
          M('کدام فرآورده با منجمد و سپس آرام ذوب کردن پلاسما به دست می‌آید و فیبرینوژن زیادی دارد؟', ['cryoprecipitate', 'packed red cells', 'albumin', 'whole blood'], 'cry/o = سرما + precipitate = رسوب.'),
          L('آفرزیس', `${e('-apheresis')} = جدا کردن و برداشتن.<br>• <b>apheresis</b>: خون گرفته می‌شود، یک جزء جدا و بقیه به بدن برمی‌گردد<br>• <b>plasmapheresis</b>: برداشتن <b>پلاسما</b> و بازگرداندن عناصر سلولی (مثلاً برای حذف آنتی‌بادی‌های مضر)`),
          T('در plasmapheresis، گلبول‌های قرمز برداشته و پلاسما به بیمار برگردانده می‌شود.', false, 'برعکس: پلاسما برداشته و عناصر سلولی برگردانده می‌شوند.'),
          W('واژه‌ای بساز به معنی «جداسازی پلاسما»', ['plasm/o', '-apheresis'], ['-lysis', 'hem/o', '-stasis'], 'plasma + -pheresis = plasmapheresis.'),
          S('املای انگلیسی «انتقال خون» را بنویس', 'transfusion', 'trans- + fus/o + -ion.'),
          N('wb:co')
        ]
      },
      {
        id: 'co7', title: 'خونریزی‌ها', icon: '🩸', items: [
          L('فوران خون', `${e('-rrhage')} یا ${e('-rrhagia')} = فوران (خونریزی فراوان).<br>• <b>hemorrhage</b>: خونریزی از رگ<br>• <b>hemorrhagic anemia</b>: کم‌خونی ناشی از خونریزی<br>• <b>splenorrhagia</b>: خونریزی از طحال<br>• <b>antihemorrhagic</b>: جلوگیری از خونریزی`),
          L('خون زیر پوست', tbl([['واژه', 'شکل'], ['petechiae', 'نقطه‌های ریز صاف ارغوانی-قرمز'], ['purpura', 'لکه‌های ارغوانی بزرگ‌تر'], ['ecchymosis', 'کبودی گسترده (black-and-blue)'], ['hematoma', 'تجمع خون زیر پوست یا در بافت؛ برجسته']]) + fig('bleeds', '', 'از کوچک به بزرگ: نقطه، لکه، کبودی، توده') + memo('به ترتیب اندازه: <b>P</b>etechiae ← <b>P</b>urpura ← <b>E</b>cchymosis ← <b>H</b>ematoma؛ «پی‌پی‌ای‌اچ»؛ از سر سوزن تا تخم‌مرغ.')),
          M('نقطه‌های بسیار ریز و صاف ارغوانی روی پوست که از خونریزی مویرگ‌ها ایجاد می‌شوند؟', ['petechiae', 'ecchymosis', 'hematoma', 'urticaria'], 'petechiae ریزترین و ecchymosis گسترده‌ترین است.'),
          P('واژه و تعریف', [['ecchymosis', 'کبودی گسترده'], ['hematoma', 'تجمع خون در بافت'], ['purpura', 'لکه‌های ارغوانی'], ['hemorrhage', 'خونریزی از رگ']]),
          O('از کوچک‌ترین به بزرگ‌ترین خونریزی پوستی مرتب کن', ['petechiae', 'purpura', 'ecchymosis'], 'نقطه ← لکه ← کبودی گسترده.'),
          L('پورپوراهای ایمنی و ترومبوتیک', `• <b>ITP</b> (idiopathic thrombocytopenic purpura): تخریب پلاکت‌ها، اغلب پس از عفونت ویروسی؛ ${e('idiopathic')} = علت ناشناخته<br>• <b>TTP</b> (thrombotic thrombocytopenic purpura): لخته‌های متعدد در رگ‌های کوچک که پلاکت‌ها را مصرف می‌کنند؛ اغلب کشنده`),
          M('در ITP کلمه idiopathic یعنی…', ['علت ناشناخته', 'ارثی', 'عفونی', 'ناشی از دارو'], 'idi/o = خاص خود، path/o = بیماری؛ بیماری بدون علت شناخته‌شده.'),
          T('هماتوم تجمع خون در بافت است و ممکن است پس از خون‌گیری هم ایجاد شود.', true, 'درست؛ اگر محل رگ‌گیری به‌خوبی فشار داده نشود.'),
          B('splenorrhagia یعنی ___ از طحال.', ['خونریزی', 'برداشتن', 'بخیه'], '‎-rrhagia = فوران؛ ‎-rrhaphy = بخیه.'),
          S('املای انگلیسی «خونریزی» (هموراژی) را بنویس', 'hemorrhage', 'hem/o + -rrhage؛ دو حرف r دارد.', 'hemor…'),
          N('m2r:co')
        ]
      },
      {
        id: 'co8', title: 'اختلال‌های ارثی انعقاد', icon: '🧬', items: [
          L('هموفیلی', `<b>hemophilia</b>: بیماری <b>ارثی وابسته به جنس</b> که در آن یک <b>فاکتور انعقادی</b> (معمولاً <b>VIII</b> یا <b>IX</b>) کم است ← زمان لخته شدن طولانی و خونریزی خودبه‌خود یا پس از ضربه در پوست، <b>مفاصل</b> و دهان.<br>تقریباً فقط در <b>مردان</b> دیده می‌شود.${wb('hem/o', '-philia')} ← تحت‌اللفظی «خون‌دوستی»؛ یعنی تمایل به خونریزی.${pearl('بیمار هموفیل با زانوی متورم و گرم بعد از یک ضربه ساده: خونریزی داخل مفصل (hemarthrosis)؛ تزریق عضلانی هم برایش خطرناک است.')}`),
          M('هموفیلی بیشتر در کدام گروه دیده می‌شود؟', ['مردان', 'زنان', 'به یک اندازه در هر دو', 'فقط سالمندان'], 'ژن آن روی کروموزوم X است؛ پسرها با یک X بیمار می‌شوند.'),
          L('فون ویلبراند', `<b>von Willebrand disease</b>: شایع‌ترین اختلال خونریزی‌دهنده ارثی؛ کمبود <b>vWF</b> که پلاکت‌ها را به دیواره رگ می‌چسباند و فاکتور VIII را حمل می‌کند.<br>علائم: کبودی آسان، <b>خون‌دماغ</b> و خونریزی لثه. در هر دو جنس دیده می‌شود.`),
          P('بیماری و ویژگی', [['hemophilia A', 'کمبود فاکتور VIII'], ['hemophilia B', 'کمبود فاکتور IX'], ['von Willebrand disease', 'کمبود vWF'], ['thrombocytopenia', 'کمبود پلاکت']]),
          T('در هموفیلی تعداد پلاکت‌ها معمولاً بسیار پایین است.', false, 'در هموفیلی پلاکت طبیعی است؛ مشکل کمبود یک فاکتور انعقادی است (PTT طولانی).'),
          L('داروهای بندآورنده', `• <b>coagulants</b>: داروهای کمک‌کننده به لخته شدن<br>• <b>hemostatics</b>: توقف خونریزی؛ مثل <b>ویتامین K</b><br>• <b>antihemorrhagic</b>: ضد خونریزی<br>در هموفیلی، فاکتور کمبود (VIII یا IX) تزریق می‌شود.`),
          M('کدام ویتامین برای ساخت چند عامل انعقادی در کبد لازم است و به‌عنوان هموستاتیک داده می‌شود؟', ['ویتامین K', 'ویتامین C', 'ویتامین B12', 'ویتامین D'], 'ویتامین K برای ساخت پروترومبین و چند فاکتور دیگر لازم است.'),
          B('واژه hemophilia از hem/o و ___ ساخته شده است.', ['-philia', '-phobia', '-penia'], '‎-philia یعنی تمایل؛ تمایل به خونریزی.'),
          W('واژه‌ای بساز به معنی «ترس از خون»', ['hem/o', '-phobia'], ['-philia', '-stasis', 'thromb/o'], 'hem/o + -phobia = hemophobia؛ با hemophilia اشتباه نشود.'),
          N('t2f:co')
        ]
      },
      {
        id: 'co9', title: 'خون‌گیری و آزمایش انعقاد', icon: '💉', items: [
          L('رگ‌گیری', `• <b>phlebotomy</b> (${e('phleb/o')} = سیاهرگ + ${e('-tomy')} = برش): خون‌گیری از ورید برای آزمایش؛ همچنین برداشتن خون برای درمان (مثلاً در polycythemia vera)<br>• <b>venipuncture</b> (${e('ven/o')} = سیاهرگ): سوراخ کردن ورید برای خون‌گیری<br>• <b>venous</b> = مربوط به سیاهرگ${fig('venipuncture', '', 'تورنیکه بسته شده و خون با سوزن و لوله خلأ از ورید ناحیه آرنج گرفته می‌شود.')}`),
          M('روشی که در این تصویر انجام می‌شود چه نام دارد؟', ['venipuncture', 'transfusion', 'bone marrow aspiration', 'plasmapheresis'], 'ven/o (سیاهرگ) + puncture (سوراخ کردن) = خون‌گیری از ورید.', null, F('venipuncture')),
          P('واژه و معنی', [['phlebotomy', 'برش سیاهرگ برای خون‌گیری'], ['venipuncture', 'سوراخ کردن سیاهرگ'], ['venous', 'مربوط به سیاهرگ'], ['-tomy', 'برش']]),
          L('آزمایش‌های انعقادی', tbl([['آزمایش', 'چه می‌سنجد'], ['PT (pro-time)', 'زمان تشکیل لخته پس از افزودن ترومبوپلاستین؛ پایش وارفارین با INR'], ['PTT / aPTT', 'مسیر دیگر انعقاد؛ پایش هپارین'], ['BT (bleeding time)', 'عملکرد پلاکت‌ها'], ['PLT', 'تعداد پلاکت']])),
          M('برای پایش درمان با هپارین کدام آزمایش بیشتر استفاده می‌شود؟', ['aPTT', 'PT', 'ESR', 'Hct'], 'هپارین ← aPTT؛ وارفارین ← PT/INR.'),
          T('PT طولانی یعنی خون دیرتر از حد طبیعی لخته می‌شود.', true, 'درست؛ در کمبود عوامل انعقادی، بیماری کبد یا مصرف داروهای ضدانعقاد.'),
          B('اختصار PT یعنی زمان ___.', ['پروترومبین', 'پلاکت', 'پلاسما'], 'PT = prothrombin time.'),
          M('بیماری با polycythemia vera برای کاهش حجم گلبول قرمز چه درمانی می‌گیرد؟', ['phlebotomy درمانی', 'تزریق خون', 'اسپلنکتومی', 'تزریق اریتروپویتین'], 'برداشتن مقداری خون (فلبوتومی) غلظت خون را کم می‌کند.'),
          O('ترتیب درست خون‌گیری را مرتب کن', ['شناسایی بیمار و برچسب لوله', 'بستن تورنیکه و یافتن ورید', 'ضدعفونی و venipuncture', 'باز کردن تورنیکه و فشار روی محل'], 'فشار کافی پس از خون‌گیری از هماتوم جلوگیری می‌کند.'),
          S('املای انگلیسی «خون‌گیری از سیاهرگ» (فلبوتومی) را بنویس', 'phlebotomy', 'phleb/o + -tomy.', 'phleb…'),
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
    id: 'ly', sym: 'Ly', name: 'دستگاه لنفاوی', short: 'لنف', sub: 'لنف، رگ‌ها و مجاری، گره‌ها، طحال، تیموس، لوزه‌ها، لنف‌ادم و لنفوم',
    color: '#12A594', dark: '#0B7A6C', light: '#D9F5EF',
    levels: ['لنف و رگ‌ها', 'اندام‌های لنفاوی', 'بیماری‌ها و روش‌ها'],
    gens: EA.genIds('ly'),
    lessons: [
      {
        id: 'ly1', title: 'لنف چیست؟', icon: '💧', items: [
          L('از مایع بینابینی تا لنف', `بخشی از پلاسما از مویرگ‌های خونی بیرون می‌آید و بین سلول‌ها می‌ماند: <b>interstitial fluid</b> (مایع بینابینی؛ ${e('inter-')} = بین، ${e('-stitial')} = قرار دادن).<br>وقتی این مایع وارد <b>مویرگ‌های لنفاوی</b> شود، نامش <b>lymph</b> (لنف) می‌شود: مایعی شفاف با گلبول‌های سفید (به‌ویژه لنفوسیت).${fig(['lymph-capillary', 'capillary'], ['Blood capillary • Lymph capillary', 'نمودار ایمنا'])}`),
          M('مایعی که بین سلول‌های بافت قرار دارد چه نام دارد؟', ['interstitial fluid', 'lymph', 'plasma', 'serum'], 'وقتی همین مایع وارد مویرگ لنفاوی شود، lymph نامیده می‌شود.', null, F('capillary')),
          L('چهار کار مهم دستگاه لنفاوی', `۱. <b>برگرداندن مایع و پروتئین</b> از بافت‌ها به خون ← جلوگیری از ادم<br>۲. <b>جذب چربی</b> از روده: رگ‌های لنفاوی روده به نام <b>lacteals</b> چربی‌های جذب‌شده را می‌برند<br>۳. <b>فیلتر کردن</b> میکروب‌ها و سلول‌های سرطانی در گره‌ها (با ماکروفاژها)<br>۴. <b>ایمنی</b>: ساخت و گردش لنفوسیت‌ها${fig('lymph-circulation', '', 'لنف از بستر مویرگی جمع می‌شود، از گره‌ها می‌گذرد و از راه مجرای لنفاوی به سیاهرگ برمی‌گردد.')}`),
          P('هر بخش و کارش', [['lacteals', 'جذب چربی از روده'], ['lymph nodes', 'فیلتر کردن لنف'], ['lymph capillaries', 'جمع‌آوری مایع بینابینی'], ['lymphocytes', 'دفاع ایمنی']]),
          T('دستگاه لنفاوی مثل دستگاه گردش خون یک پمپ مرکزی دارد.', false, 'لنف پمپ ندارد؛ با انقباض عضلات و تنفس حرکت می‌کند و دریچه‌ها جلوی برگشتش را می‌گیرند.', F('lymph-heart')),
          M('در این تصویر، رگ‌های سبز چه هستند؟', ['lymph capillaries', 'arterioles', 'venules', 'blood capillaries'], 'سبز = مویرگ‌های لنفاوی؛ قرمز = شریانچه، آبی = وریدچه.', null, F('lymph-capillary-inset')),
          L('جریان یک‌طرفه', `لنف فقط در <b>یک جهت</b> و به سمت قلب حرکت می‌کند. <b>دریچه‌ها</b> در رگ‌های لنفاوی از برگشت آن جلوگیری می‌کنند.<br>مسیر: بافت ← مویرگ لنفاوی ← رگ لنفاوی ← گره‌ها ← مجاری ← <b>سیاهرگ زیرترقوه‌ای</b> (subclavian vein).`),
          O('مسیر لنف را مرتب کن', ['مایع بینابینی در بافت', 'مویرگ لنفاوی', 'رگ لنفاوی و گره‌ها', 'مجرای لنفاوی', 'سیاهرگ زیرترقوه‌ای'], 'لنف سرانجام به خون برمی‌گردد.'),
          B('رگ‌های لنفاوی روده که چربی جذب می‌کنند ___ نام دارند.', ['lacteals', 'capillaries', 'tonsils'], 'lacteal از lact/o (شیر) می‌آید؛ چون لنف حاوی چربی شیری‌رنگ است.'),
          S('املای انگلیسی «لنف» را بنویس', 'lymph', 'lymph/o = لنف.'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly2', title: 'رگ‌ها و مجاری', icon: '🛤️', items: [
          L('شبکه رگ‌ها', `اجزای سیستم عروقی لنفاوی:<br>• <b>lymph capillaries</b>: مویرگ‌های لنفاوی در بافت‌ها<br>• <b>lymphatic vessels</b>: رگ‌های لنفاوی با دریچه<br>• <b>lymphatic ducts</b>: دو مجرای بزرگ نهایی<br>${e('lymphangi/o')} = رگ لنفاوی (${e('angi/o')} = رگ) ← <b>lymphangial</b> = مربوط به رگ لنفاوی.${memo('دستگاه لنفاوی مثل «زهکشی خانه» است: لوله‌های یک‌طرفه که آب اضافه را جمع می‌کنند و صافی‌هایی (گره‌ها) سر راه دارند. پمپ ندارد؛ انقباض عضله‌ها و دریچه‌ها لنف را جلو می‌برند.')}${fig('lymph-flow')}${fig('lymph-valve', 'A، B', 'A: رگ لنفاوی با دریچه بین سلول‌های بافت • B: تصویر میکروسکوپی دریچه رگ لنفاوی')}`),
          L('دو مجرای اصلی', `${tbl([['مجرا', 'از کجا لنف می‌گیرد', 'به کجا می‌ریزد'], ['right lymphatic duct', 'سمت راست سر، گردن، قفسه سینه و دست راست', 'سیاهرگ زیرترقوه‌ای راست'], ['thoracic duct (بزرگ‌تر)', 'بقیه بدن', 'سیاهرگ زیرترقوه‌ای چپ']])}${fig(['lymph-drainage', 'lymph-ducts-head'], ['ناحیه آبی: مجرای راست', 'ورود مجاری به سیاهرگ‌های زیرترقوه'])}`),
          M('لنفِ پای چپ به کدام مجرا می‌ریزد؟', ['thoracic duct', 'right lymphatic duct', 'هیچ‌کدام؛ به کلیه می‌رود', 'مستقیماً به قلب'], 'مجرای سینه‌ای (thoracic duct) لنف بیشتر بدن، از جمله هر دو پا، را تخلیه می‌کند.', null, F('lymph-drainage')),
          T('مجرای لنفاوی راست، لنف دست راست را تخلیه می‌کند.', true, 'درست؛ سمت راست سر، گردن، قفسه سینه و دست راست.'),
          M('ناحیه آبی‌رنگ بدن در این تصویر به کدام مجرا تخلیه می‌شود؟', ['right lymphatic duct', 'thoracic duct', 'cisterna chyli', 'subclavian artery'], 'یک‌چهارم راست بالای بدن (سر، گردن، سینه و دست راست) به مجرای لنفاوی راست می‌ریزد.', null, F('lymph-drainage')),
          P('ریشه و معنی', [['lymph/o', 'لنف'], ['lymphangi/o', 'رگ لنفاوی'], ['angi/o', 'رگ'], ['inter-', 'بین']]),
          L('التهاب و تومور رگ لنفاوی', `• <b>lymphangitis</b>: التهاب رگ‌های لنفاوی؛ اغلب به‌صورت خط قرمز روی پوست از محل عفونت<br>• <b>lymphangioma</b>: تومور (معمولاً خوش‌خیم) رگ لنفاوی<br>• <b>lymphangiectomy</b>: برداشتن رگ لنفاوی<br>• <b>lymphangiotomy</b>: برش رگ لنفاوی`),
          W('واژه‌ای بساز به معنی «تومور رگ لنفاوی»', ['lymphangi/o', '-oma'], ['lymphaden/o', '-itis', 'splen/o'], 'lymphangi/o + -oma = lymphangioma.'),
          M('خط قرمز دردناک روی ساعد از محل یک زخم عفونی به سمت زیربغل نشانه چیست؟', ['lymphangitis', 'lymphedema', 'lymphoma', 'thymitis'], 'التهاب رگ لنفاوی که عفونت را به سمت گره‌ها می‌برد.'),
          B('واژه lymphangiectomy یعنی ___ رگ لنفاوی.', ['برداشتن', 'برش', 'التهاب'], '‎-ectomy = برداشتن؛ ‎-tomy = برش.'),
          N('d2t:ly')
        ]
      },
      {
        id: 'ly3', title: 'گره‌های لنفاوی', icon: '🫘', items: [
          L('صافی‌های لوبیایی', `<b>lymph node</b> توده کوچک <b>لوبیایی‌شکل</b> از بافت لنفاوی است که لنف را <b>فیلتر</b> می‌کند. لنف از رگ‌های <b>آوران</b> (afferent) وارد و از رگ <b>وابران</b> (efferent) خارج می‌شود. درونش لنفوسیت‌ها و ماکروفاژها میکروب‌ها را به دام می‌اندازند.${fig(['lymph-node-structure', 'node'], ['ساختار گره از مرجع', 'نمودار ایمنا'], 'cortex با ندول‌ها و مراکز زایا (B cells)، medulla (ماکروفاژ و T cells)، hilum و رگ آوران و وابران')}`),
          L('گره‌ها کجا جمع‌اند؟', `• <b>cervical</b> (${e('cervic/o')} = گردن)<br>• <b>axillary</b> (${e('axill/o')} = زیربغل)<br>• <b>inguinal</b> (${e('inguin/o')} = کشاله ران)<br>• <b>mediastinal</b> (میان قفسه سینه) و submandibular (زیر فک)<br>${fig('lymph-nodes-regional', '', 'Regional lymph nodes: cervical، mediastinal، axillary و inguinal؛ و محل ورود thoracic duct و right lymphatic duct به سیاهرگ‌های زیرترقوه')}`),
          P('ناحیه و ریشه', [['cervic/o', 'گردن'], ['axill/o', 'زیربغل'], ['inguin/o', 'کشاله ران'], ['lymphaden/o', 'گره لنفاوی']]),
          M('گره‌های لنفاوی زیربغل را چه می‌نامند؟', ['axillary', 'cervical', 'inguinal', 'mediastinal'], 'axill/o = زیربغل.', null, F('lymph-nodes-regional')),
          L('گره بیمار', `${e('lymphaden/o')} = گره لنفاوی (${e('aden/o')} = غده):<br>• <b>lymphadenitis</b>: التهاب و بزرگی گره‌ها، معمولاً در عفونت<br>• <b>lymphadenopathy</b>: هر بیماری گره؛ گره‌های متورم مزمن یا زیاد<br>• <b>adenopathy</b>: بیماری غده<br>• <b>lymphadenectomy</b>: برداشتن گره<br>• <b>lymphadenotomy</b>: برش گره`),
          W('واژه‌ای بساز به معنی «بیماری گره لنفاوی»', ['lymphaden/o', '-pathy'], ['lymphangi/o', '-itis', '-ectomy'], 'lymphaden/o + -pathy = lymphadenopathy.'),
          T('lymphadenitis یعنی التهاب رگ‌های لنفاوی.', false, 'lymphaden/o = گره؛ التهاب رگ لنفاوی lymphangitis است.'),
          M('در کیس John Latella (بیمار HIV مثبت)، بزرگی گره لنفاوی پس از بیوپسی چه بود؟', ['عفونی، نه بدخیم', 'لنفوم هاجکین', 'سارکوم کاپوزی', 'متاستاز سرطان'], 'بیوپسی سرپایی و آزمایش خون نشان داد گره عفونی است؛ با آنتی‌بیوتیک درمان شد.'),
          B('رگی که لنف را از گره خارج می‌کند رگ ___ نام دارد.', ['efferent', 'afferent', 'thoracic'], 'af- = به سمت (ورود)، ef- = به بیرون (خروج).'),
          S('املای انگلیسی «بیماری گره‌های لنفاوی» را بنویس', 'lymphadenopathy', 'lymphaden/o + -pathy.', 'lymphaden…'),
          N('wb:ly')
        ]
      },
      {
        id: 'ly4', title: 'طحال', icon: '🟣', items: [
          L('بزرگ‌ترین اندام لنفاوی', `<b>spleen</b> (طحال) در سمت <b>چپ و بالای شکم</b>، زیر دنده‌ها است. کارهایش:<br>• <b>فیلتر کردن خون</b> و از بین بردن گلبول‌های قرمز <b>پیر</b> (و بازیافت آهن)<br>• <b>ذخیره خون</b><br>• نابود کردن باکتری‌ها و دفاع ایمنی<br>${e('splen/o')} = طحال ← <b>splenic</b> = مربوط به طحال${fig(['spleen', 'spleen-thymus-location'], ['شکل طحال', 'محل طحال و تیموس'])}${pearl('طحال در تصادف‌ها زیاد پاره می‌شود (ruptured spleen) و خونریزی داخلی شدید می‌دهد. پس از splenectomy، بیمار در برابر باکتری‌های کپسول‌دار آسیب‌پذیر است و واکسن پنوموکوک می‌گیرد.')}`),
          M('کدام کار مربوط به طحال است؟', ['از بین بردن گلبول‌های قرمز پیر', 'ساخت انسولین', 'جذب چربی از روده', 'ساخت اریتروپویتین'], 'طحال گلبول‌های فرسوده را جدا می‌کند و آهنشان را بازیافت می‌کند.'),
          L('بیماری‌های طحال', tbl([['واژه', 'معنی'], ['splenomegaly', 'بزرگی طحال'], ['hypersplenism', 'پرکاری طحال'], ['splenitis', 'التهاب طحال'], ['splenopathy', 'هر بیماری طحال'], ['splenorrhagia', 'خونریزی از طحال']])),
          P('واژه و معنی', [['splenomegaly', 'بزرگی طحال'], ['splenectomy', 'برداشتن طحال'], ['splenorrhaphy', 'بخیه زدن طحال'], ['splenotomy', 'برش طحال']]),
          L('سه پسوند جراحی', `• ${e('-ectomy')} = برداشتن ← <b>splenectomy</b> (مثلاً وقتی طحال پاره شود)<br>• ${e('-tomy')} = برش ← <b>splenotomy</b><br>• ${e('-rrhaphy')} = بخیه ← <b>splenorrhaphy</b><br>مراقب باش: ${e('-rrhagia')} (خونریزی) با ${e('-rrhaphy')} (بخیه) فرق دارد!`),
          M(`طحال پس از تصادف پاره شده و جراح آن را «بخیه» می‌زند. نام عمل؟`, ['splenorrhaphy', 'splenorrhagia', 'splenectomy', 'splenotomy'], '‎-rrhaphy = بخیه.'),
          M('در این برش میکروسکوپی طحال، جزایر گرد و تیره‌ای که از لنفوسیت پرند چه نام دارند؟', ['white pulp', 'red pulp', 'capsule', 'hilum'], 'پالپ سفید بافت لنفاوی طحال است و پالپ قرمز محل فیلتر کردن گلبول‌های قرمز؛ برای همین طحال شبیه یک گره لنفاوی بزرگ است.', null, F('spleen-histology')),
          T('در مونونوکلئوز عفونی ممکن است طحال بزرگ شود (splenomegaly).', true, 'درست؛ برای همین به این بیماران توصیه می‌شود از ورزش‌های برخوردی دوری کنند.'),
          W('واژه‌ای بساز به معنی «بزرگی طحال»', ['splen/o', '-megaly'], ['-rrhaphy', 'thym/o', '-itis'], 'splen/o + -megaly = splenomegaly.'),
          B('در کیس تاجر ۳۶ ساله با لنفوم طحال، جراحی ___ انجام شد.', ['splenectomy', 'thymectomy', 'tonsillectomy'], 'MRI بزرگی طحال و تومور ۳ سانتی‌متری را نشان داد؛ پس از بیوپسی، طحال برداشته شد.'),
          S('املای انگلیسی «طحال» را بنویس', 'spleen', 'splen/o = طحال.'),
          N('m2r:ly')
        ]
      },
      {
        id: 'ly5', title: 'تیموس', icon: '🎓', items: [
          L('مدرسه لنفوسیت‌های T', `<b>thymus</b> غده‌ای در <b>مدیاستن</b> (پشت جناغ، نزدیک قلب) است. هورمونش <b>thymosin</b> لنفوسیت‌ها را به <b>لنفوسیت T</b> تبدیل می‌کند؛ حرف T از همین Thymus آمده است.<br>تیموس در کودکی بزرگ و فعال است و پس از بلوغ کوچک می‌شود.${fig(['thymus', 'spleen-thymus-location'], ['شکل تیموس', 'تیموس بالای قلب'])}`),
          M('هورمون تیموس چه نام دارد؟', ['thymosin', 'thrombin', 'thyroxine', 'erythropoietin'], 'thymosin؛ با thyroxine (هورمون تیروئید) اشتباه نشود.'),
          P('واژه و معنی', [['thymoma', 'تومور تیموس'], ['thymitis', 'التهاب تیموس'], ['thymectomy', 'برداشتن تیموس'], ['thymic', 'مربوط به تیموس']]),
          T('حرف T در «لنفوسیت T» از نام تیموس گرفته شده است.', true, 'درست؛ و B از Bone marrow (مغز استخوان).'),
          L('تیموس و بیماری', `• <b>thymoma</b>: تومور تیموس؛ گاهی با بیماری خودایمنی میاستنی گراویس همراه است و درمانش <b>thymectomy</b> است<br>• <b>thymitis</b>: التهاب تیموس<br>${e('thym/o')} را با ${e('thyr/o')} (تیروئید) اشتباه نکن.`),
          W('واژه‌ای بساز به معنی «برداشتن تیموس»', ['thym/o', '-ectomy'], ['-tomy', 'splen/o', '-oma'], 'thym/o + -ectomy = thymectomy.'),
          B('تیموس در ___ قرار دارد.', ['مدیاستن (قفسه سینه)', 'شکم', 'گردن پشت حنجره'], 'پشت جناغ و بالای قلب.'),
          M('لنفوسیت‌های T در کجا بالغ می‌شوند؟', ['تیموس', 'طحال', 'گره لنفاوی', 'کبد'], 'لنفوسیت‌ها در مغز استخوان ساخته می‌شوند؛ T ها برای بلوغ به تیموس می‌روند.'),
          S('املای انگلیسی «تیموس» را بنویس', 'thymus', 'thym/o = تیموس.'),
          N('ab:ly')
        ]
      },
      {
        id: 'ly6', title: 'لوزه‌ها و بافت لنفاوی', icon: '👅', items: [
          L('سه جفت لوزه', `<b>tonsils</b> توده‌های بافت لنفاوی در گلو هستند که میکروب‌های هوا و غذا را فیلتر می‌کنند:<br>• <b>palatine tonsils</b> (کامی): همان «لوزه» معمولی دو طرف حلق<br>• <b>pharyngeal tonsils</b> (حلقی) = <b>adenoids</b>: پشت بینی<br>• <b>lingual tonsils</b> (زبانی): ته زبان${fig('tonsil', '', 'شکل لوزه: توده‌ای از بافت لنفاوی')}`),
          P('لوزه و محل', [['palatine tonsils', 'دو طرف حلق'], ['pharyngeal tonsils', 'پشت بینی (آدنوئید)'], ['lingual tonsils', 'ته زبان'], ['Peyer patches', 'دیواره روده باریک']]),
          M('آدنوئیدها همان کدام لوزه‌اند؟', ['pharyngeal tonsils', 'palatine tonsils', 'lingual tonsils', 'Peyer patches'], 'adenoids = لوزه‌های حلقی پشت بینی.'),
          L('بافت لنفاوی در گوارش', `<b>lymphoid tissue</b> (${e('-oid')} = شبیه) فقط در گره‌ها نیست:<br>• <b>Peyer patches</b>: توده‌های لنفاوی در دیواره <b>روده باریک</b><br>• <b>appendix</b>: کیسه کوچک متصل به روده بزرگ که بافت لنفاوی دارد<br>این‌ها خط دفاعی در برابر میکروب‌های بلعیده‌شده‌اند.${fig('lymph-organs', '', 'اندام‌های لنفاوی: tonsil (محافظت از حلق)، spleen، thymus، lymph node و lymphatic vessel')}`),
          T('پلاک‌های پی‌یر در دیواره روده بزرگ قرار دارند.', false, 'Peyer patches در روده باریک‌اند؛ آپاندیس به روده بزرگ متصل است.'),
          L('واژه‌های لوزه', `${e('tonsill/o')} (با دو حرف l):<br>• <b>tonsillitis</b>: التهاب لوزه<br>• <b>tonsillectomy</b>: برداشتن لوزه<br>• <b>tonsillar</b>: مربوط به لوزه<br>${e('adenoid/o')} = آدنوئید ← adenoidectomy`),
          W('واژه‌ای بساز به معنی «التهاب لوزه»', ['tonsill/o', '-itis'], ['-ectomy', 'aden/o', 'thym/o'], 'tonsill + -itis = tonsillitis.'),
          M('کدام املا درست است؟', ['tonsillectomy', 'tonsilectomy', 'tonnsilectomy', 'tonsillecktomy'], 'ریشه tonsill/o دو حرف l دارد.'),
          B('واژه lymphoid یعنی ___ لنف.', ['شبیه', 'تومور', 'التهاب'], '‎-oid = شبیه به.'),
          S('املای انگلیسی «برداشتن لوزه» را بنویس', 'tonsillectomy', 'tonsill/o + -ectomy.', 'tonsill…'),
          N('f2t:ly')
        ]
      },
      {
        id: 'ly7', title: 'ادم و انسداد', icon: '🦵', items: [
          L('وقتی لنف راه نیابد', `اگر رگ‌ها یا گره‌های لنفاوی <b>بسته</b> یا برداشته شوند، مایع در بافت جمع می‌شود:<br>• <b>edema</b>: تجمع آب در بافت<br>• <b>lymphedema</b> (${e('-edema')} = تورم): تورم موضعی ناشی از احتباس لنف؛ مثلاً در دست پس از برداشتن گره‌های زیربغل در جراحی سرطان پستان${fig('lymphedema-leg', '', 'لنف‌ادم اندام تحتانی راست')}`),
          M('زنی پس از برداشتن گره‌های زیربغل، تورم مزمن بازو پیدا کرده است. محتمل‌ترین واژه؟', ['lymphedema', 'lymphangioma', 'lymphadenitis', 'hypersplenism'], 'برداشتن گره‌ها جریان لنف را مختل می‌کند ← lymphedema.'),
          L('پیل‌پایی', `<b>elephantiasis</b>: بیماری لنفاوی ناشی از <b>انگل filaria</b> (کرم نخی) که رگ‌های لنفاوی را مسدود می‌کند ← تورم و ضخیم شدن شدید پوست، به‌ویژه در پاها.`),
          M('تورم یک‌طرفه و مزمن پای راست در این تصویر بیشتر با کدام واژه توصیف می‌شود؟', ['lymphedema', 'lymphangioma', 'hematoma', 'thrombocytosis'], 'تجمع لنف در بافت به‌خاطر انسداد یا برداشتن رگ‌ها و گره‌ها.', null, F('lymphedema-leg')),
          T('عامل elephantiasis یک انگل کرمی (filaria) است.', true, 'درست؛ کرم‌ها رگ‌های لنفاوی را می‌بندند.'),
          P('واژه و تعریف', [['edema', 'تجمع آب در بافت'], ['lymphedema', 'تورم ناشی از احتباس لنف'], ['elephantiasis', 'انسداد لنفاوی انگلی'], ['lymphangitis', 'التهاب رگ لنفاوی']]),
          L('پروتئین‌ها و ادم', `پروتئین‌های پلاسما، به‌ویژه <b>آلبومین</b>، آب را درون رگ نگه می‌دارند. اگر آب بیش از حد از خون خارج شود و لنف نتواند آن را برگرداند، ادم ایجاد می‌شود. دستگاه لنفاوی با برداشتن مایع از بستر مویرگی، <b>ادم را کاهش می‌دهد</b>.`),
          W('واژه‌ای بساز به معنی «تورم لنفی»', ['lymph/o', '-edema'], ['-oma', 'angi/o', '-megaly'], 'lymph + -edema = lymphedema.'),
          B('کمبود آلبومین پلاسما می‌تواند باعث ___ شود.', ['ادم', 'پلی‌سیتمی', 'ترومبوز'], 'آلبومین کم ← آب از رگ به بافت می‌رود.'),
          M('angioedema با lymphedema چه فرقی دارد؟', ['آنژیوادم تورم آلرژیک زیر پوست است؛ لنف‌ادم از اختلال جریان لنف', 'هر دو یکی‌اند', 'آنژیوادم فقط در طحال رخ می‌دهد', 'لنف‌ادم همیشه آلرژیک است'], 'آنژیوادم مثل کهیر عمیق است و به دنیای ایمنی و آلرژی تعلق دارد.'),
          N('sp:ly')
        ]
      },
      {
        id: 'ly8', title: 'لنفوم‌ها', icon: '🎗️', items: [
          L('لنفوم یعنی سرطان بافت لنفاوی', `<b>lymphoma</b> (${e('-oma')} = تومور) سرطانی است که از لنفوسیت‌ها در بافت لنفاوی شروع می‌شود. دو دسته بزرگ:<br>• <b>Hodgkin lymphoma</b> (HD): با سلول‌های غول‌پیکر <b>Reed-Sternberg</b> در گره‌ها<br>• <b>non-Hodgkin lymphoma</b> (NHL): بیش از ۲۰ نوع، بدون سلول رید-اشترنبرگ؛ شایع‌تر و بیشتر در سالمندان${memo('سلول Reed-Sternberg در زیر میکروسکوپ مثل <b>چشم‌های جغد</b> (owl eyes) است: دو هسته بزرگ با هستک درشت. جغد را دیدی ← هاجکین.')}`),
          M('نشانه میکروسکوپی لنفوم هاجکین چیست؟', ['سلول‌های Reed-Sternberg', 'کروموزوم فیلادلفیا', 'پروتئین Bence Jones', 'گلبول‌های داسی‌شکل'], 'سلول‌های غول‌پیکر چندهسته‌ای رید-اشترنبرگ.'),
          P('بیماری و نشانه', [['Hodgkin lymphoma', 'سلول Reed-Sternberg'], ['CML', 'کروموزوم فیلادلفیا'], ['multiple myeloma', 'پروتئین Bence Jones'], ['non-Hodgkin lymphoma', 'بیش از ۲۰ نوع، بدون رید-اشترنبرگ']]),
          L('انواع دیگر', `• <b>lymphocytic lymphoma</b>: سلول‌های بدخیم شبیه لنفوسیت‌های بزرگ<br>• <b>histiocytic lymphoma</b>: سلول‌های بدخیم شبیه ماکروفاژهای بزرگ (histiocyte)<br>• <b>thymoma</b>: تومور تیموس<br><b>metastasis</b> یعنی گسترش سرطان به جای دیگر؛ گره‌های لنفاوی مسیر مهم متاستازند.`),
          T('لنفوم غیرهاجکین فقط یک نوع بیماری است.', false, 'NHL گروهی از بیش از ۲۰ نوع لنفوم است.'),
          M('سرطان از مکانی به مکان دیگر گسترش یافته است. اصطلاح درست؟', ['metastasis', 'remission', 'relapse', 'hemostasis'], 'meta- (فراتر) + -stasis (قرار گرفتن).'),
          B('lymphoma یعنی ___ بافت لنفاوی.', ['تومور', 'التهاب', 'بزرگی'], '‎-oma = تومور.'),
          O('مسیر تشخیص لنفوم در کیس تاجر ۳۶ ساله را مرتب کن', ['خستگی و احساس پری شکم', 'MRI: بزرگی طحال و تومور ۳ سانتی‌متری', 'بیوپسی از تومور طحال', 'اسپلنکتومی و ارجاع برای شیمی‌درمانی'], 'تشخیص: لنفوم غیرهاجکین طحال.'),
          S('املای انگلیسی «لنفوم» را بنویس', 'lymphoma', 'lymph/o + -oma.'),
          N('t2f:ly')
        ]
      },
      {
        id: 'ly9', title: 'تصویربرداری و جراحی', icon: '📷', items: [
          L('-graphy یا -gram؟', `• ${e('-graphy')} = <b>فرایند</b> ثبت تصویر ← <b>lymphangiography</b>: پرتونگاری رگ‌ها و گره‌های لنفاوی پس از تزریق ماده حاجب<br>• ${e('-gram')} = <b>تصویر</b> ثبت‌شده ← <b>lymphangiogram</b><br>• <b>lymphography</b>: دیدن رگ‌ها و گره‌های لنفاوی با پرتونگاری پس از تزریق ماده حاجب (معمولاً روغن یددار)${fig('lymphangiogram', '', 'lymphangiogram رگ‌ها و گره‌های لنفاوی ناحیه لگن')}`),
          M('تصویری که از lymphangiography به دست می‌آید چه نام دارد؟', ['lymphangiogram', 'lymphangioma', 'lymphadenitis', 'lymphoscintigraphy'], '‎-gram تصویر است و ‎-graphy فرایند.'),
          L('لنفوسینتی‌گرافی', `${e('scint/i')} = جرقه، درخشش. در <b>lymphoscintigraphy</b> ماده‌ای <b>رادیواکتیو</b> تزریق می‌شود و دوربین گاما تصویر رگ‌ها و گره‌های لنفاوی را ثبت می‌کند؛ برای یافتن <b>متاستاز</b>، لنف‌ادم یا انسداد گره.`),
          T('در lymphoscintigraphy از ماده رادیواکتیو استفاده می‌شود.', true, 'درست؛ تصویربرداری پزشکی هسته‌ای است.'),
          P('پسوند و معنی', [['-graphy', 'فرایند ثبت'], ['-gram', 'تصویر ثبت‌شده'], ['-ectomy', 'برداشتن'], ['-tomy', 'برش']]),
          L('جراحی‌های لنفاوی', `• <b>lymphadenectomy</b>: برداشتن گره لنفاوی<br>• <b>lymph node dissection</b>: برداشتن گره‌های سرطانی برای بررسی میکروسکوپی<br>• <b>lymphadenotomy</b>: برش گره<br>• <b>splenectomy</b>، <b>thymectomy</b>، <b>tonsillectomy</b>${fig('lymph-dissection', '', 'نمای جراحی: لنف از رگ‌های لنفاوی وارد گره می‌شود و از آن خارج می‌شود.')}`),
          M('برداشتن گره‌های سرطانی برای بررسی زیر میکروسکوپ چه نام دارد؟', ['lymph node dissection', 'lymphangiotomy', 'lymphography', 'splenorrhaphy'], 'dissection = جدا کردن و برداشتن برای بررسی.'),
          W('واژه‌ای بساز به معنی «ثبت تصویر رگ‌های لنفاوی»', ['lymphangi/o', '-graphy'], ['-gram', 'lymphaden/o', '-tomy'], 'lymphangi/o + -graphy = lymphangiography.'),
          B('واژه lymphadenotomy یعنی ___ گره لنفاوی.', ['برش', 'برداشتن', 'بخیه'], '‎-tomy = برش.'),
          S('املای انگلیسی «برداشتن گره لنفاوی» را بنویس', 'lymphadenectomy', 'lymphaden/o + -ectomy.', 'lymphaden…'),
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
    id: 'im', sym: 'Ig', name: 'ایمنی', short: 'ایمنی', sub: 'دفاع ذاتی، لنفوسیت‌ها، آنتی‌بادی، آلرژی، خودایمنی و HIV',
    color: '#1899D6', dark: '#1272A3', light: '#DDF1FB',
    levels: ['دفاع ذاتی و اکتسابی', 'لنفوسیت‌ها و آنتی‌بادی', 'آلرژی، خودایمنی و نقص ایمنی'],
    gens: EA.genIds('im'),
    lessons: [
      {
        id: 'im1', title: 'سپرهای ذاتی', icon: '🛡️', items: [
          L('ایمنی یعنی محافظت', `${e('immun/o')} = ایمنی، محافظت. <b>immunity</b> حالت محافظت بدن در برابر بیماری است و <b>immunology</b> علم آن.<br><br>دو لایه دفاعی داریم:<br>• <b>natural (innate) immunity</b>: ذاتی، مادرزادی و <b>غیراختصاصی</b><br>• <b>acquired (adaptive) immunity</b>: اکتسابی و <b>اختصاصی</b>؛ حافظه دارد${fig('immunity')}`),
          L('دفاع‌های ذاتی', `دفاع ذاتی از بدو تولد هست و با هر مهاجمی یکسان برخورد می‌کند:<br>• <b>پوست سالم</b>، <b>مخاط</b> و <b>مژک‌ها</b> (cilia)<br>• ترشحات ضدباکتری (مثل اشک و اسید معده) و رفلکس‌ها (سرفه، عطسه)<br>• <b>phagocytes</b> (نوتروفیل، ماکروفاژ)<br>• <b>NK cells</b> (natural killer)، <b>complement</b> و <b>التهاب</b>${memo('دفاع ذاتی مثل «دیوار و نگهبان قلعه» است: برای همه یکسان، همیشه آماده، ولی چهره کسی را به خاطر نمی‌سپارد. دفاع اکتسابی «پلیس آگاهی» است که پرونده هر مجرم را نگه می‌دارد.')}`),
          M('کدام مورد جزو ایمنی ذاتی (غیراختصاصی) است؟', ['پوست سالم و مژک‌های راه هوایی', 'آنتی‌بادی پس از واکسن', 'لنفوسیت T خاطره', 'گاماگلوبولین تزریقی'], 'پوست، مخاط، مژک و فاگوسیت‌ها بدون نیاز به آشنایی قبلی عمل می‌کنند.', null, F('immunity')),
          P('دفاع و نوعش', [['پوست و مخاط', 'سد فیزیکی ذاتی'], ['NK cell', 'سلول کشنده طبیعی'], ['complement', 'آنزیم‌های پلاسما همراه آنتی‌بادی'], ['پاسخ واکسن', 'ایمنی اکتسابی']]),
          T('ایمنی ذاتی حافظه دارد و بار دوم سریع‌تر عمل می‌کند.', false, 'حافظه ویژگی ایمنی اکتسابی (لنفوسیت‌های B و T) است.'),
          L('پاتوژن و آنتی‌ژن', `• <b>pathogen</b> (${e('path/o')} = بیماری + ${e('-gen')} = سازنده): هر میکروارگانیسم یا ماده بیماری‌زا<br>• <b>antigen</b>: ماده بیگانه‌ای که دستگاه ایمنی را به ساختن آنتی‌بادی تحریک می‌کند<br>• <b>immunogen</b>: هر ماده‌ای که پاسخ ایمنی ایجاد می‌کند`),
          W('واژه‌ای بساز به معنی «بیماری‌زا»', ['path/o', '-gen'], ['-logy', 'immun/o', '-oid'], 'path/o + -gen = pathogen.'),
          B('علم بررسی دستگاه ایمنی ___ نام دارد.', ['immunology', 'hematology', 'oncology'], 'immun/o + -logy.'),
          S('املای انگلیسی «ایمنی» را بنویس', 'immunity', 'immun/o + -ity.'),
          N('t2f:im')
        ]
      },
      {
        id: 'im2', title: 'بلع و التهاب', icon: '🍽️', items: [
          L('فاگوسیتوز', `${wb('phag/o', '-cytosis')}<br><b>phagocytosis</b> = بلعیدن و هضم ذرات و میکروب‌ها توسط سلول.<br>• <b>phagocyte</b>: سلول بیگانه‌خوار<br>• <b>macrophage</b> (${e('macro-')} بزرگ + ${e('-phage')} خورنده): مونوسیتی که به بافت رفته<br>• <b>microphage</b>: بیگانه‌خوار کوچک؛ نوتروفیل${fig('macrophage', '', 'ماکروفاژ (بنفش) در حال گرفتن باکتری‌ها (میله‌های سبز)')}${memo('phag/o = خوردن. macrophage «پرخورِ بزرگ» است؛ همان مونوسیتی که به بافت رفته و غول شده.')}`),
          M('ماکروفاژ از کدام گلبول سفید به وجود می‌آید؟', ['monocyte', 'neutrophil', 'basophil', 'B cell'], 'مونوسیت پس از ورود به بافت بزرگ می‌شود و ماکروفاژ نام می‌گیرد.', null, F('cell-monocyte')),
          M('سلول بنفش این تصویر در حال انجام چه فرایندی است؟', ['phagocytosis', 'hemolysis', 'agglutination', 'coagulation'], 'ماکروفاژ باکتری‌ها را می‌گیرد و می‌بلعد: phag/o (خوردن) + -cytosis.', null, F('macrophage')),
          P('واژه و معنی', [['phagocyte', 'سلول بیگانه‌خوار'], ['macrophage', 'بیگانه‌خوار بزرگ بافتی'], ['microphage', 'بیگانه‌خوار کوچک (نوتروفیل)'], ['phagocytosis', 'فرایند بلعیدن']]),
          L('التهاب', `<b>inflammation</b> پاسخ بافت به آسیب یا میکروب است. نشانه‌ها: <b>قرمزی، گرمی، تورم، درد</b> و گاهی اختلال عملکرد.<br><b>histamine</b> (از بازوفیل‌ها و ماست‌سل‌ها) رگ‌ها را گشاد و نشت‌پذیر می‌کند؛ برای همین در آلرژی هم نقش دارد.${fig('inflammation', '', 'چهار نشانه کلاسیک با نام لاتینشان')}${memo('چهار نشانه لاتین مثل یک شعر دوهزارساله‌اند: <b>rubor</b> (قرمزی)، <b>calor</b> (گرمی)، <b>tumor</b> (تورم)، <b>dolor</b> (درد). همه با «‎-or» تمام می‌شوند!')}`),
          O('ترتیب پاسخ التهابی را مرتب کن', ['آسیب بافت یا ورود میکروب', 'آزاد شدن هیستامین و گشاد شدن رگ‌ها', 'قرمزی، گرمی و تورم', 'رسیدن فاگوسیت‌ها و بلعیدن میکروب', 'ترمیم بافت'], 'هیستامین ← نشت رگ ← رسیدن گلبول‌های سفید.'),
          L('پیام‌رسان‌های ایمنی', `<b>cytokines</b> پروتئین‌هایی هستند که به سلول‌ها پیام شروع یا تنظیم پاسخ ایمنی می‌دهند:<br>• <b>interleukins</b>: از T سل‌ها؛ روی بقیه سلول‌های ایمنی اثر می‌گذارند<br>• <b>interferons</b>: پروتئین‌های <b>ضدویروسی</b><br>• <b>complement</b>: آنزیم‌های پلاسما که همراه آنتی‌بادی به نابودی میکروب کمک می‌کنند`),
          M('کدام پیام‌رسان ویژگی ضدویروسی دارد؟', ['interferon', 'histamine', 'heparin', 'thrombin'], 'interferon از «interfere» (مداخله) می‌آید؛ با تکثیر ویروس مداخله می‌کند.'),
          T('هیستامین در واکنش‌های آلرژیک و التهابی آزاد می‌شود.', true, 'درست؛ آنتی‌هیستامین‌ها اثر آن را خنثی می‌کنند.'),
          W('واژه‌ای بساز به معنی «بیگانه‌خوار بزرگ»', ['macro-', '-phage'], ['micro-', 'phag/o', '-cytosis'], 'macro- + -phage = macrophage.'),
          S('املای انگلیسی «فاگوسیتوز» را بنویس', 'phagocytosis', 'phag/o + -cytosis.', 'phago…'),
          N('r2m:im')
        ]
      },
      {
        id: 'im3', title: 'ایمنی اکتسابی', icon: '🧠', items: [
          L('فعال یا غیرفعال؟', `${fig('immunity')}• <b>active immunity</b> (فعال): بدن <b>خودش</b> آنتی‌بادی می‌سازد؛ پس از ابتلا به بیماری یا <b>واکسن</b>. طولانی و با حافظه<br>• <b>passive immunity</b> (غیرفعال): آنتی‌بادی <b>آماده</b> از بیرون می‌رسد؛ از مادر به جنین (جفت و شیر) یا با تزریق <b>gamma globulin</b> و <b>antitoxin</b>. سریع ولی کوتاه‌مدت${fig('baby', '', 'نوزاد با آنتی‌بادی‌هایی که از جفت (IgG) و شیر مادر (IgA) گرفته، ایمنی غیرفعال طبیعی دارد.')}`),
          M('نوزادی که آنتی‌بادی را از شیر مادر می‌گیرد چه نوع ایمنی دارد؟', ['اکتسابی غیرفعال', 'اکتسابی فعال', 'ذاتی', 'خودایمنی'], 'آنتی‌بادی ساخته‌شده توسط بدن دیگری ← غیرفعال.'),
          P('مثال و نوع ایمنی', [['واکسن سرخک', 'اکتسابی فعال مصنوعی'], ['ابتلا به آبله‌مرغان', 'اکتسابی فعال طبیعی'], ['آنتی‌بادی مادر از جفت', 'اکتسابی غیرفعال طبیعی'], ['تزریق گاماگلوبولین', 'اکتسابی غیرفعال مصنوعی']]),
          L('واکسن', `• <b>vaccine</b>: ماده‌ای از میکروب <b>ضعیف‌شده یا کشته‌شده</b> (یا بخشی از آن) که بدون ایجاد بیماری، پاسخ ایمنی برمی‌انگیزد<br>• <b>vaccination</b> و <b>immunization</b>: فرایند ایمن‌سازی<br>• <b>artificial immunity</b>: ایمنی حاصل از واکسن یا تزریق آنتی‌بادی<br>• <b>antitoxin</b>: آنتی‌بادی علیه یک سم خاص (مثل کزاز)`),
          T('واکسن نوعی ایمنی اکتسابی فعال مصنوعی ایجاد می‌کند.', true, 'درست؛ بدن خودش آنتی‌بادی و سلول خاطره می‌سازد.'),
          M('بیماری که در معرض سم کزاز قرار گرفته و نیاز به محافظت «فوری» دارد، چه می‌گیرد؟', ['antitoxin (ایمنی غیرفعال)', 'فقط واکسن و انتظار چندهفته‌ای', 'آنتی‌هیستامین', 'شیمی‌درمانی'], 'آنتی‌توکسین آنتی‌بادی آماده است و فوری اثر می‌کند.'),
          B('ایمنی ___ با بیماری یا واکسن به دست می‌آید و حافظه طولانی دارد.', ['فعال', 'غیرفعال', 'ذاتی'], 'در ایمنی فعال، بدن خودش آنتی‌بادی و سلول خاطره می‌سازد.'),
          W('واژه‌ای بساز به معنی «ضد سم»', ['anti-', 'tox/o'], ['auto-', '-phylaxis', 'immun/o'], 'anti- + toxin = antitoxin.'),
          S('املای انگلیسی «واکسن» را بنویس', 'vaccine', 'vaccine؛ و vaccination = واکسیناسیون.'),
          N('f2t:im')
        ]
      },
      {
        id: 'im4', title: 'لنفوسیت‌های B و T', icon: '🎯', items: [
          L('دو بازوی ایمنی اختصاصی', `${fig(['lymphocyte-sem', 'tb-cells'], ['لنفوسیت در میکروسکوپ الکترونی', 'فعال شدن T و B سل‌ها'])}${tbl([['', 'ایمنی هومورال', 'ایمنی سلولی'], ['سلول', 'B cell', 'T cell'], ['محل بلوغ', 'مغز استخوان (Bone)', 'تیموس (Thymus)'], ['سلاح', 'آنتی‌بادی از plasma cell', 'حمله مستقیم به سلول آلوده یا سرطانی']])}<b>humoral</b> از humor (مایع بدن) می‌آید، چون آنتی‌بادی‌ها در خون و لنف شناورند.${fig('bt-cells')}${memo('B سلول «تیرانداز» است: از دور با آنتی‌بادی شلیک می‌کند. T سلول «شمشیرزن» است: تن‌به‌تن به سلول آلوده حمله می‌کند.')}`),
          M('در ایمنی هومورال، کدام سلول آنتی‌بادی ترشح می‌کند؟', ['plasma cell (از B cell)', 'helper T cell', 'macrophage', 'platelet'], 'لنفوسیت B پس از برخورد با آنتی‌ژن به پلاسماسل تبدیل می‌شود و آنتی‌بادی می‌سازد.'),
          L('خانواده T', `• <b>helper T cells</b> (<b>CD4</b>): فرمانده‌ها؛ پاسخ ایمنی را تحریک می‌کنند<br>• <b>cytotoxic T cells</b> (<b>CD8</b>، killer): سلول‌های آلوده و سرطانی را <b>می‌کشند</b> (${e('cyt/o + -toxic')} = سمی برای سلول)<br>• <b>suppressor T cells</b>: پاسخ ایمنی را پس از پایان خطر <b>مهار</b> می‌کنند<br>• <b>NK cells</b> هم سیتوتوکسیک‌اند ولی جزو ایمنی ذاتی‌اند`),
          P('سلول و نقش', [['helper T (CD4)', 'تحریک پاسخ ایمنی'], ['cytotoxic T (CD8)', 'کشتن سلول آلوده'], ['suppressor T', 'مهار پاسخ ایمنی'], ['plasma cell', 'ساخت آنتی‌بادی']]),
          L('سلول ارائه‌دهنده آنتی‌ژن', `<b>APC</b> (antigen-presenting cell)، مثل ماکروفاژ، آنتی‌ژن را می‌بلعد، پردازش می‌کند و تکه‌ای از آن را روی سطحش به <b>T سل کمکی</b> نشان می‌دهد؛ این شروع پاسخ اختصاصی است.`),
          O('ترتیب پاسخ ایمنی اختصاصی را مرتب کن', ['ماکروفاژ (APC) آنتی‌ژن را می‌بلعد', 'آنتی‌ژن به T سل کمکی ارائه می‌شود', 'T کمکی، B سل‌ها و T سیتوتوکسیک را فعال می‌کند', 'پلاسماسل‌ها آنتی‌بادی می‌سازند', 'سلول‌های خاطره باقی می‌مانند'], 'برای همین وقتی CD4 از بین برود (HIV)، کل پاسخ ایمنی فلج می‌شود.'),
          T('سلول‌های T سیتوتوکسیک با ساختن آنتی‌بادی میکروب را نابود می‌کنند.', false, 'T سیتوتوکسیک مستقیماً به سلول آلوده حمله می‌کند؛ آنتی‌بادی کار پلاسماسل‌هاست.'),
          M('حرف B در «B cell» از کجا آمده؟', ['Bone marrow', 'Blood', 'Basophil', 'Body'], 'لنفوسیت B در مغز استخوان بالغ می‌شود.'),
          B('لنفوسیت‌های T کمکی نشانگر ___ دارند.', ['CD4', 'CD8', 'Rh'], 'helper = CD4، cytotoxic = CD8.'),
          S('املای انگلیسی «سیتوتوکسیک» را بنویس', 'cytotoxic', 'cyt/o + -toxic.'),
          N('d2t:im')
        ]
      },
      {
        id: 'im5', title: 'آنتی‌ژن و آنتی‌بادی', icon: '🔑', items: [
          L('قفل و کلید', `<b>antibody</b> (Ab) یا <b>immunoglobulin</b> (Ig) پروتئینی <b>Y شکل</b> است که پلاسماسل‌ها در پاسخ به <b>antigen</b> (Ag) می‌سازند. هر آنتی‌بادی فقط به آنتی‌ژن <b>اختصاصی</b> خودش می‌چسبد و کمپلکس آنتی‌ژن-آنتی‌بادی می‌سازد.${fig('antibody')}`),
          M('آنتی‌بادی با کدام نام دیگر شناخته می‌شود؟', ['immunoglobulin', 'immunogen', 'interferon', 'interleukin'], 'immun/o + -globulin (پروتئین).', null, F('antibody')),
          L('پنج رده ایمونوگلوبولین', tbl([['رده', 'نکته کلیدی'], ['IgG', 'فراوان‌ترین؛ تنها رده‌ای که از جفت عبور می‌کند'], ['IgM', 'اولین آنتی‌بادی در عفونت تازه'], ['IgA', 'در ترشحات: اشک، بزاق، شیر مادر، مخاط'], ['IgE', 'آلرژی و آنافیلاکسی؛ انگل‌ها'], ['IgD', 'روی سطح B سل‌ها']]) + fig('ig-classes', '', 'IgG تک‌واحدی، IgA دوتایی (در ترشحات)، IgM پنج‌تایی') + memo(`رده‌ها را با «GAMED» حفظ کن: ${e('Ig<b>G</b>, Ig<b>A</b>, Ig<b>M</b>, Ig<b>E</b>, Ig<b>D</b>')}. IgG «Go» از جفت رد می‌شود، IgM «Mega» بزرگ‌ترین و اولین پاسخ، IgE «Eek!» برای آلرژی.`)),
          P('رده و ویژگی', [['IgG', 'عبور از جفت'], ['IgM', 'اولین پاسخ'], ['IgA', 'ترشحات و شیر مادر'], ['IgE', 'آلرژی']]),
          M('در کیس Olivia با حساسیت شدید به لاتکس، کدام آنتی‌بادی نقش اصلی دارد؟', ['IgE', 'IgG', 'IgA', 'IgD'], 'حساسیت نوع ۱ (فوری) با واسطه IgE است.'),
          L('واژه‌های مرتبط', `• <b>gamma globulin</b>: بخش آنتی‌بادی پلاسما؛ به‌صورت دارو برای ایمنی غیرفعال<br>• <b>monoclonal antibody</b>: آنتی‌بادی خالص آزمایشگاهی برای تشخیص و درمان (مثلاً سرطان)<br>• <b>seroconversion</b>: ظاهر شدن آنتی‌بادی در سرم پس از عفونت یا واکسن<br>• <b>titer</b>: میزان آنتی‌بادی در سرم`),
          T('IgM اولین آنتی‌بادی است که در عفونت تازه ظاهر می‌شود.', true, 'درست؛ IgM بالا نشانه عفونت اخیر است و بعد IgG جایش را می‌گیرد.'),
          B('ظاهر شدن آنتی‌بادی در سرم پس از عفونت ___ نام دارد.', ['seroconversion', 'agglutination', 'desensitization'], 'ser/o = سرم + conversion = تبدیل.'),
          W('واژه‌ای بساز به معنی «پروتئین ایمنی (آنتی‌بادی)»', ['immun/o', '-globulin'], ['-globin', 'hem/o', '-gen'], 'immun/o + -globulin = immunoglobulin.'),
          S('املای انگلیسی «آنتی‌بادی» را بنویس', 'antibody', 'anti- + body؛ جمع: antibodies.'),
          N('ab:im')
        ]
      },
      {
        id: 'im6', title: 'آلرژی', icon: '🤧', items: [
          L('واکنش بیش از حد', `<b>allergy</b> (${e('all/o')} = دیگر، بیگانه) یا <b>hypersensitivity</b> واکنش ایمنی <b>اغراق‌آمیز</b> به ماده‌ای است که برای بیشتر مردم بی‌خطر است. این ماده <b>allergen</b> نام دارد: گرده، گردوغبار، شوره حیوانات، نیش زنبور، غذا، لاتکس.<br>متخصص آن: <b>allergist</b>.${fig('allergens', '', 'آلرژن‌های رایج: کنه گردوغبار (dust mites)، علف هرز (ragweed)، گرده (pollen) و آجیل (nuts)')}`),
          M('همه چیزهایی که در این تصویر می‌بینی (کنه، گرده، علف، آجیل) نمونه‌ای از چه هستند؟', ['allergen', 'antitoxin', 'antibody', 'immunosuppressant'], 'allergen = ماده حساسیت‌زا.', null, F('allergens')),
          L('چهره‌های آلرژی', tbl([['واژه', 'معنی'], ['urticaria / hives', 'کهیر: برجستگی‌های خارش‌دار (wheals)'], ['angioedema', 'تورم عمیق‌تر زیر پوست، مثل کهیر بزرگ'], ['allergic rhinitis', 'آبریزش و التهاب بینی (تب یونجه)'], ['allergic asthma', 'تنگی راه هوایی با آلرژن استنشاقی'], ['contact dermatitis', 'التهاب پوست پس از تماس مستقیم']])),
          P('واژه و معنی', [['urticaria', 'کهیر'], ['allergic rhinitis', 'تب یونجه'], ['contact dermatitis', 'التهاب پوست تماسی'], ['angioedema', 'تورم زیرپوستی عمیق']]),
          L('فوری یا تأخیری؟', `• حساسیت <b>فوری</b> (نوع ۱): با <b>IgE</b> و هیستامین، ظرف چند دقیقه؛ از کهیر تا آنافیلاکسی<br>• <b>delayed hypersensitivity reaction</b>: با واسطه <b>T سل‌ها</b>؛ دست‌کم ۱۲ ساعت بعد؛ مثل درماتیت تماسی و تست پوستی سل`),
          T('واکنش ازدیاد حساسیت تأخیری با واسطه IgE و ظرف چند دقیقه رخ می‌دهد.', false, 'واکنش تأخیری با واسطه T سل‌هاست و دست‌کم ۱۲ ساعت طول می‌کشد.'),
          L('درمان آلرژی', `• دوری از آلرژن<br>• <b>antihistamine</b>: خنثی کردن اثر هیستامین<br>• <b>corticosteroids</b>: ضدالتهاب قوی<br>• <b>desensitization</b> یا <b>allergy shots</b> (ایمونوتراپی): تزریق مقادیر بسیار کم و رو به افزایش آلرژن تا بدن به آن عادت کند`),
          M('تزریق‌های منظم مقادیر ناچیز آلرژن برای کاهش حساسیت چه نام دارد؟', ['desensitization', 'seroconversion', 'immunosuppression', 'cross-matching'], 'حساسیت‌زدایی (allergy shots).'),
          B('داروی خنثی‌کننده اثر هیستامین ___ نام دارد.', ['antihistamine', 'anticoagulant', 'antiretroviral'], 'anti- + histamine.'),
          S('املای انگلیسی «کهیر» (اورتیکاریا) را بنویس', ['urticaria', 'hives'], 'urticaria یا hives.', 'urt…'),
          N('sp:im')
        ]
      },
      {
        id: 'im7', title: 'آنافیلاکسی', icon: '🚨', items: [
          L('خطرناک‌ترین آلرژی', `<b>anaphylaxis</b> (یا anaphylactic shock): واکنش آلرژیک <b>شدید، سیستمیک و تهدیدکننده حیات</b>.<br>${wb('ana-', '-phylaxis')} ← ${e('-phylaxis')} = محافظت؛ «محافظتِ وارونه».<br>علائم: <b>افت شدید فشار خون</b>، <b>تنگی و انسداد راه هوایی</b>، ادم، کهیر، تاکی‌کاردی و از دست رفتن هوشیاری.${fig('allergy', '', 'آلرژن به IgE روی ماست‌سل می‌چسبد ← ماست‌سل هیستامین می‌ریزد ← علائم')}${pearl('در آنافیلاکسی، داروی اول <b>اپی‌نفرین عضلانی</b> (در ران) است، نه آنتی‌هیستامین. بیماران پرخطر قلم خودتزریق (EpiPen) همراه دارند.')}`),
          M('کدام علامت آنافیلاکسی را از یک کهیر ساده جدا می‌کند؟', ['افت فشار خون و تنگی نفس', 'خارش پوست', 'برجستگی قرمز روی پوست', 'عطسه'], 'درگیری گردش خون و تنفس یعنی واکنش سیستمیک و اورژانس.'),
          L('درمان فوری', `اولویت‌ها:<br>۱. تزریق فوری <b>epinephrine</b> (آدرنالین)<br>۲. باز نگه داشتن <b>راه هوایی</b> و اکسیژن<br>۳. <b>antihistamines</b> و <b>corticosteroids</b><br><br>بیمار پرخطر باید همیشه سرنگ خودتزریق اپی‌نفرین و <b>دستبند هشدار پزشکی</b> همراه داشته باشد.`),
          O('اقدامات درمان آنافیلاکسی را به ترتیب اولویت مرتب کن', ['تزریق فوری اپی‌نفرین', 'باز نگه داشتن راه هوایی و اکسیژن', 'آنتی‌هیستامین', 'کورتیکواستروئید و پایش'], 'اپی‌نفرین داروی نجات‌بخش خط اول است.'),
          T('اپی‌نفرین داروی خط اول در آنافیلاکسی است.', true, 'درست؛ رگ‌ها را تنگ و راه هوایی را باز می‌کند.'),
          M('اولیویا (حساسیت نوع ۱ به لاتکس) کدام توصیه را دریافت کرد؟', ['دوری از لاتکس، دستبند هشدار پزشکی و همراه داشتن سرنگ اپی‌نفرین', 'فقط مصرف آنتی‌بیوتیک', 'انتقال خون', 'اسپلنکتومی'], 'به‌علاوه اسپری گشادکننده برونش در اولین علامت برونکواسپاسم.'),
          P('دارو و کار', [['epinephrine', 'نجات فوری در آنافیلاکسی'], ['antihistamine', 'مهار هیستامین'], ['corticosteroid', 'ضدالتهاب قوی'], ['bronchodilator', 'گشاد کردن راه هوایی']]),
          B('شکل دیگر نام آنافیلاکسی، شوک ___ است.', ['آنافیلاکتیک', 'هموراژیک', 'سپتیک'], 'anaphylactic shock.'),
          S('املای انگلیسی «آنافیلاکسی» را بنویس', 'anaphylaxis', 'ana- + -phylaxis.', 'ana…'),
          N('t2f:im')
        ]
      },
      {
        id: 'im8', title: 'خودایمنی', icon: '🔄', items: [
          L('وقتی سپاه به خودی حمله کند', `<b>autoimmune disease</b> (${e('auto-')} = خود): دستگاه ایمنی بافت‌های <b>خود بدن</b> را مثل پاتوژن هدف می‌گیرد.<br>نمونه‌ها: لوپوس، آرتریت روماتوئید، اسکلروز سیستمیک، شوگرن، و گاهی کم‌خونی همولیتیک خودایمنی و ITP.${fig('sle-face', '', 'راش پروانه‌ای (butterfly rash) روی گونه‌ها و بینی')}`),
          L('بیماری‌های خودایمنی مهم', tbl([['بیماری', 'ویژگی'], ['SLE (lupus)', 'التهاب بافت همبند چند اندام؛ راش پروانه‌ای صورت'], ['rheumatoid arthritis (RA)', 'التهاب مزمن چند مفصل'], ['systemic sclerosis', 'سفت شدن پوست و اندام‌ها (اسکلرودرما)'], ['Sjögren syndrome', 'خشکی چشم و دهان (غدد برون‌ریز)'], ['sarcoidosis', 'ضایعات فیبری، اغلب در ریه و گره‌ها']])),
          M('این راش پروانه‌ای روی گونه‌ها، همراه درد مفاصل و حساسیت به نور، به نفع کدام بیماری است؟', ['systemic lupus erythematosus', 'rheumatoid arthritis', 'sarcoidosis', 'hemophilia'], 'از نشانه‌های کلاسیک لوپوس (SLE).', null, F('sle-face')),
          P('بیماری و ویژگی', [['SLE', 'راش پروانه‌ای'], ['RA', 'التهاب مفاصل'], ['Sjögren syndrome', 'خشکی چشم و دهان'], ['systemic sclerosis', 'سفتی پوست']]),
          L('تشخیص و درمان', `• <b>ANA test</b> (antinuclear antibody): آنتی‌بادی ضدهسته؛ وجودش به نفع بیماری خودایمنی است<br>• درمان: <b>corticosteroids</b> و <b>immunosuppressants</b> (سرکوب پاسخ ایمنی)<br>• در لوپوس: عوامل ضدالتهاب، داروهای ضدمالاریا، دوری از نور خورشید و ترک سیگار`),
          T('مثبت شدن آزمایش ANA به نفع بیماری خودایمنی مانند لوپوس است.', true, 'درست؛ ANA آنتی‌بادی علیه هسته سلول‌های خودی است.'),
          L('پیوند علیه میزبان', `<b>graft-versus-host disease</b> (GVHD): پس از پیوند مغز استخوان، لنفوسیت‌های <b>پیوندی</b> بافت‌های <b>گیرنده</b> را بیگانه می‌دانند و به آن‌ها حمله می‌کنند. <b>tissue typing</b> پیش از پیوند خطر آن را کم می‌کند.`),
          M('در GVHD چه کسی به چه کسی حمله می‌کند؟', ['لنفوسیت‌های پیوند به بافت گیرنده', 'بدن گیرنده به پیوند', 'آنتی‌بادی مادر به جنین', 'HIV به CD4'], 'برعکس رد پیوند معمولی (host-versus-graft).'),
          W('واژه‌ای بساز به معنی «ایمنی علیه خود»', ['auto-', 'immun/o'], ['anti-', 'all/o', '-phylaxis'], 'auto- + immune = autoimmune.'),
          S('املای انگلیسی «خودایمنی» را بنویس', 'autoimmune', 'auto- + immune.'),
          N('f2t:im')
        ]
      },
      {
        id: 'im9', title: 'HIV و نقص ایمنی', icon: '🦠', items: [
          L('نقص ایمنی', `<b>immunodeficiency</b>: نقص در دستگاه ایمنی که بدن را مستعد عفونت می‌کند.<br>• مادرزادی: <b>SCIDS</b> (severe combined immunodeficiency syndrome)؛ کودکانی با دستگاه ایمنی ناکارآمد<br>• اکتسابی: <b>AIDS</b> ناشی از ویروس <b>HIV</b><br><b>immunosuppression</b> هم یعنی سرکوب پاسخ ایمنی (مثلاً با دارو).`),
          L('HIV چه می‌کند؟', `<b>HIV</b> یک <b>retrovirus</b> (ویروس RNA) است که از راه جنسی، خون آلوده و از مادر به جنین منتقل می‌شود. ویروس <b>لنفوسیت‌های T کمکی (CD4)</b> را نابود می‌کند؛ پس ایمنی سلولی فرو می‌ریزد.<br>شمارش <b>CD4 زیر ۲۰۰</b> در میکرولیتر = تعریف <b>AIDS</b>.${fig(['hiv-virus', 'hiv'], ['ویروس HIV', 'هدف: سلول CD4'])}`),
          M('HIV به‌طور اختصاصی کدام سلول را هدف می‌گیرد؟', ['helper T cell (CD4)', 'گلبول قرمز', 'پلاکت', 'نوتروفیل'], 'از دست رفتن CD4 کل پاسخ ایمنی را فلج می‌کند.', null, F('hiv')),
          L('عفونت‌های فرصت‌طلب', `<b>opportunistic infections</b> فقط در ایمنی ضعیف بیماری‌زا می‌شوند:<br>• <b>PCP</b> (Pneumocystis pneumonia) — قارچ Pneumocystis jiroveci<br>• <b>candidiasis</b> — قارچ کاندیدا در دهان و مری<br>• <b>Kaposi sarcoma</b> (KS) — بدخیمی بافت همبند<br>• <b>cytomegalovirus</b> (CMV) و <b>MAI</b> (مایکوباکتریوم)<br>مرحله زودرس با علائم خفیف: <b>ARC</b> (AIDS-related complex)${fig('kaposi', '', 'ضایعه‌های ارغوانی-قرمز پوستی در Kaposi sarcoma')}`),
          M('ضایعه‌های ارغوانی-قرمز پوست در این بیمار مبتلا به ایدز نشانه کدام است؟', ['Kaposi sarcoma', 'urticaria', 'petechiae', 'contact dermatitis'], 'سارکوم کاپوزی بدخیمی بافت همبند و از بیماری‌های شاخص ایدز است.', null, F('kaposi')),
          P('عفونت و عامل', [['PCP', 'قارچ Pneumocystis'], ['candidiasis', 'قارچ Candida'], ['Kaposi sarcoma', 'بدخیمی بافت همبند'], ['CMV', 'ویروس از خانواده هرپس']]),
          L('تشخیص و درمان', `• غربالگری: <b>ELISA</b> یا <b>EIA</b> و <b>HIV antigen/antibody immunoassay</b><br>• تأیید: <b>Western blot</b><br>• پایش: <b>CD4 count</b> و بار ویروسی<br>• درمان: <b>HAART</b> (درمان ضدرتروویروسی بسیار فعال) از جمله <b>protease inhibitors</b>؛ درمان مناسب از پیشرفت به ایدز جلوگیری می‌کند`),
          O('مسیر تشخیص HIV را مرتب کن', ['غربالگری با ELISA', 'تأیید با Western blot', 'شمارش CD4 و بار ویروسی', 'شروع درمان HAART'], 'غربالگری حساس، سپس تأیید اختصاصی.'),
          M('مرد ۴۰ ساله مبتلا به ایدز با تب، تعریق شبانه، سرفه و CD4 برابر ۱۹۰. کدام عفونت ریوی باید رد شود؟', ['Pneumocystis pneumonia', 'allergic asthma', 'sarcoidosis', 'thymoma'], 'PCP شایع‌ترین عفونت فرصت‌طلب ریوی در ایدز است؛ عکس قفسه سینه و کشت خلط درخواست شد.'),
          T('Western blot برای تأیید تشخیص HIV به کار می‌رود.', true, 'درست؛ ELISA غربالگری و Western blot تأیید است.'),
          S('املای انگلیسی «عفونت فرصت‌طلب» را بنویس', ['opportunistic infection', 'opportunistic'], 'opportunistic infection؛ جمع: opportunistic infections.', 'oppor… infection'),
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
    id: 'dx', sym: 'Lab', name: 'آزمایش، درمان و ICU', short: 'آزمایش', sub: 'CBC و آزمایش‌های تخصصی، داروها، پیوند، SIRS و سپسیس، آهن و ایمونونوتریشن',
    color: '#E58A00', dark: '#B86E00', light: '#FFF1D6',
    levels: ['آزمایش‌ها', 'درمان‌ها', 'مراقبت ویژه و ایمونونوتریشن'],
    gens: EA.genIds('dx'),
    lessons: [
      {
        id: 'dx1', title: 'CBC و شاخص‌ها', icon: '📋', items: [
          L('شمارش کامل خون', `<b>CBC</b> (complete blood count) رایج‌ترین آزمایش خون است: غربالگری کم‌خونی، عفونت و سلامت عمومی.<br>اجزا: <b>RBC</b>، <b>WBC</b>، <b>Hgb</b>، <b>Hct</b>، <b>PLT</b>، شاخص‌های گلبولی و اغلب <b>diff</b> (شمارش افتراقی).${fig('cbc')}${pearl('در پرونده، CBC را اغلب با «نمودار ماهی» (fishbone) خلاصه می‌کنند: WBC در چپ، Hgb بالا و Hct پایین در وسط، PLT در راست.')}`),
          M('کدام مورد جزو CBC نیست؟', ['PT (زمان پروترومبین)', 'Hgb', 'WBC', 'PLT'], 'PT آزمایش انعقادی است و جداگانه درخواست می‌شود.', null, F('cbc')),
          P('اختصار و معنی', [['RBC', 'شمارش گلبول قرمز'], ['WBC', 'شمارش گلبول سفید'], ['Hct', 'هماتوکریت'], ['PLT', 'شمارش پلاکت']]),
          L('شاخص‌های گلبولی', tbl([['شاخص', 'معنی', 'کاربرد'], ['MCV', 'mean corpuscular volume — میانگین حجم', 'کوچک (میکروسیتیک) یا بزرگ (ماکروسیتیک)'], ['MCH', 'میانگین هموگلوبین هر گلبول', 'میزان رنگ'], ['MCHC', 'میانگین غلظت هموگلوبین', 'هیپوکروم یا نرموکروم']]) + `${e('corpuscular')} از corpuscle (پیکره کوچک = سلول خون) می‌آید.`),
          M('MCV پایین (میکروسیتیک) همراه با هیپوکرومی بیشتر به نفع کدام کم‌خونی است؟', ['کم‌خونی فقر آهن', 'کم‌خونی پرنیشیوز', 'کم‌خونی آپلاستیک', 'کم‌خونی هموراژیک حاد'], 'فقر آهن ← گلبول‌های کوچک و کم‌رنگ؛ پرنیشیوز ← گلبول‌های بزرگ (ماکروسیتیک).'),
          L('شمارش افتراقی', `<b>white blood cell differential</b> (diff): درصد هر نوع گلبول سفید.<br>• نوتروفیل بالا ← عفونت باکتریایی<br>• لنفوسیت بالا (lymphocytosis) ← عفونت ویروسی مثل مونونوکلئوز<br>• ائوزینوفیل بالا ← آلرژی و انگل<br>نتیجه طبیعی را <b>WNL</b> (within normal limits) می‌نویسند.`),
          T('ائوزینوفیلی در شمارش افتراقی بیشتر به آلرژی یا عفونت انگلی اشاره دارد.', true, 'درست.'),
          B('اختصار WNL یعنی در محدوده ___.', ['طبیعی', 'خطر', 'ناشناخته'], 'within normal limits.'),
          S('املای انگلیسی اختصار «شمارش کامل خون» را بنویس', 'CBC', 'complete blood count.'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx2', title: 'آزمایش‌های تخصصی خون', icon: '🧪', items: [
          L('از رگ تا آزمایشگاه', `بیشتر آزمایش‌های خون با یک <b>venipuncture</b> شروع می‌شوند؛ نمونه سانتریفیوژ می‌شود تا پلاسما یا سرم از سلول‌ها جدا شود.${fig(['venipuncture', 'blood-process'], ['venipuncture', 'سانتریفیوژ و جداسازی'])}`),
          L('ESR و رتیکولوسیت', `• <b>ESR</b> (sed rate): سرعت ته‌نشین شدن گلبول‌های قرمز در یک ساعت؛ در <b>التهاب</b> و آسیب بافتی بالا می‌رود (غیراختصاصی)<br>• <b>reticulocyte count</b>: شمارش گلبول‌های قرمز تازه؛ <b>افزایش</b> یعنی پاسخ مغز استخوان به خونریزی یا همولیز، <b>کاهش</b> یعنی نارسایی تولید`),
          M('بیمار پس از خونریزی، رتیکولوسیت بالا دارد. این یعنی…', ['مغز استخوان در حال جبران و تولید گلبول قرمز است', 'مغز استخوان از کار افتاده است', 'بیمار لوسمی دارد', 'پلاکت‌ها کم شده‌اند'], 'رتیکولوسیتوز = پاسخ مناسب مغز استخوان.'),
          L('آزمایش‌های ویژه', tbl([['آزمایش', 'کاربرد'], ['Coombs test', 'آنتی‌بادی روی گلبول قرمز (HDN، همولیز خودایمنی)'], ['Schilling test', 'جذب ویتامین B12 (کم‌خونی پرنیشیوز)'], ['electrophoresis', 'جداسازی پروتئین‌ها یا هموگلوبین با جریان الکتریکی'], ['RBC morphology', 'شکل گلبول‌ها (مثلاً داسی‌شکل)'], ['Wright stain', 'رنگ‌آمیزی رایج لام خون']])),
          P('آزمایش و کاربرد', [['Schilling test', 'جذب ویتامین B12'], ['Coombs test', 'آنتی‌بادی روی RBC'], ['electrophoresis', 'جداسازی پروتئین‌ها'], ['ESR', 'نشانگر التهاب']]),
          L('کشت و مغز استخوان', `• <b>blood culture and sensitivity</b> (C&S): کشت خون برای رشد باکتری و تعیین آنتی‌بیوتیک مؤثر<br>• <b>bone marrow aspiration</b>: کشیدن مقدار کمی مغز استخوان با سوزن<br>• <b>bone marrow biopsy</b>: برداشتن تکه‌ای از بافت مغز استخوان<br>هر دو برای تشخیص <b>لوسمی</b>، <b>میلوما</b> و <b>کم‌خونی آپلاستیک</b>.${fig('marrow-aspiration')}`),
          M('روشی که در این تصویر انجام می‌شود چیست؟', ['bone marrow aspiration', 'venipuncture', 'lymphangiography', 'plasmapheresis'], 'نمونه‌برداری از مغز استخوان، معمولاً از ستیغ لگن.', null, F('marrow-aspiration')),
          M('در کیس Ada با خستگی، درد مفاصل و سنکوپ، تشخیص میلوفیبروز با کدام روش تأیید شد؟', ['bone marrow aspiration', 'Coombs test', 'ELISA', 'lymphangiography'], 'آسپیراسیون مغز استخوان نتایج مثبت میلوفیبروز نشان داد.'),
          T('الکتروفورز هموگلوبین برای تشخیص بیماری داسی‌شکل و تالاسمی کاربرد دارد.', true, 'درست؛ هموگلوبین‌های غیرطبیعی با جریان الکتریکی جدا می‌شوند.'),
          W('واژه‌ای بساز به معنی «جابه‌جایی با الکتریسیته»', ['electr/o', '-phoresis'], ['-lysis', 'chrom/o', '-graphy'], 'electr/o + -phoresis = electrophoresis.'),
          B('آزمایش ___ جذب ویتامین B12 را می‌سنجد.', ['Schilling', 'Coombs', 'Western blot'], 'برای تشخیص کم‌خونی پرنیشیوز.'),
          S('املای انگلیسی اختصار «سرعت رسوب گلبول قرمز» را بنویس', 'ESR', 'erythrocyte sedimentation rate.'),
          N('t2f:dx')
        ]
      },
      {
        id: 'dx3', title: 'آزمایش‌های ایمنی', icon: '🔍', items: [
          L('سنجش‌های ایمنی', `• <b>ELISA</b> (enzyme-linked immunosorbent assay) یا <b>EIA</b>: آزمایش بسیار حساس برای یافتن آنتی‌بادی‌ها (مثلاً HIV)؛ <b>غربالگری</b><br>• <b>Western blot</b>: <b>تأیید</b> مثبت بودن HIV<br>• <b>HIV antigen/antibody immunoassay</b>: هم آنتی‌ژن و هم آنتی‌بادی HIV را می‌سنجد<br>• <b>CD4 count</b>: پایش ایمنی در HIV`),
          M('آزمایش اولیه و حساس برای غربالگری آنتی‌بادی HIV؟', ['ELISA', 'Western blot', 'Schilling test', 'bone marrow biopsy'], 'ELISA غربالگری؛ Western blot تأیید.'),
          L('خودایمنی و پیوند', `• <b>ANA</b> (antinuclear antibody test): آنتی‌بادی ضدهسته؛ به نفع بیماری خودایمنی<br>• <b>tissue typing</b>: تعیین سازگاری بافتی (histocompatibility) پیش از پیوند<br>• <b>titer</b>: سنجش میزان آنتی‌بادی پس از واکسن یا عفونت`),
          P('آزمایش و کاربرد', [['ELISA', 'غربالگری HIV'], ['Western blot', 'تأیید HIV'], ['ANA', 'بیماری خودایمنی'], ['tissue typing', 'سازگاری پیوند']]),
          T('tissue typing پیش از پیوند مغز استخوان برای یافتن اهداکننده سازگار انجام می‌شود.', true, 'درست؛ مثل پیوند از خواهر یا برادر سازگار در کیس Ada.'),
          M('بیمار با راش صورت و درد مفاصل؛ کدام آزمایش به تشخیص بیماری خودایمنی کمک می‌کند؟', ['ANA test', 'reticulocyte count', 'PT', 'Schilling test'], 'ANA در لوپوس معمولاً مثبت است.'),
          O('ترتیب ارزیابی ایمنی فرد مشکوک به HIV را مرتب کن', ['شرح حال و معاینه (لنفادنوپاتی، کاهش وزن)', 'ELISA یا immunoassay', 'Western blot', 'CD4 count'], 'غربالگری، تأیید، سپس سنجش شدت.'),
          B('اختصار EIA یعنی سنجش ایمنی ___.', ['آنزیمی', 'الکتریکی', 'ارثی'], 'enzyme immunoassay.'),
          S('املای انگلیسی آزمایش تأییدی HIV را بنویس', 'Western blot', 'Western blot.', 'W… blot'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx4', title: 'داروهای خون', icon: '💊', items: [
          L('داروهای انعقاد', tbl([['گروه', 'کار', 'مثال'], ['anticoagulant', 'جلوگیری از تشکیل لخته', 'هپارین، وارفارین'], ['thrombolytic', 'حل کردن لخته موجود', 'فعال‌کننده پلاسمینوژن'], ['coagulant / hemostatic', 'کمک به لخته شدن، توقف خونریزی', 'ویتامین K'], ['antihemorrhagic', 'جلوگیری از خونریزی', 'فاکتورهای انعقادی']])),
          P('دارو و کار', [['anticoagulant', 'جلوگیری از لخته'], ['thrombolytic', 'حل کردن لخته'], ['hemostatic', 'توقف خونریزی'], ['hematinic', 'افزایش هموگلوبین']]),
          L('داروهای خون‌ساز', `• <b>hematinic</b>: افزایش تعداد گلبول قرمز یا هموگلوبین؛ مثل <b>آهن</b>، <b>B12</b> و <b>فولات</b><br>• <b>erythropoietin</b> (EPO) تزریقی: تحریک ساخت گلبول قرمز در نارسایی کلیه<br>در کیس Ada: مکمل آهن و تزریق هفتگی B12.`),
          M('بیمار نارسایی کلیه کم‌خون است. کدام درمان منطقی‌ترین هورمون جایگزین است؟', ['erythropoietin (EPO)', 'heparin', 'epinephrine', 'thymosin'], 'کلیه بیمار EPO کافی نمی‌سازد.'),
          T('ترومبولیتیک‌ها از تشکیل لخته جدید جلوگیری می‌کنند ولی لخته موجود را حل نمی‌کنند.', false, 'این تعریف ضدانعقادهاست؛ ترومبولیتیک‌ها لخته موجود را حل می‌کنند.'),
          M('کدام دارو یک hematinic است؟', ['ویتامین B12', 'هپارین', 'آنتی‌هیستامین', 'کورتیکواستروئید'], 'B12، آهن و فولات خون‌سازند.'),
          B('داروهای ___ لخته‌های تشکیل‌شده را حل می‌کنند.', ['ترومبولیتیک', 'ضدانعقاد', 'هموستاتیک'], 'thromb/o + -lytic.'),
          W('واژه‌ای بساز به معنی «حل‌کننده لخته»', ['thromb/o', '-lytic'], ['-stasis', 'coagul/o', '-lysis'], 'thromb/o + -lytic = thrombolytic.'),
          S('املای انگلیسی «هپارین» را بنویس', 'heparin', 'heparin؛ ضدانعقاد طبیعی و دارویی.'),
          N('f2t:dx')
        ]
      },
      {
        id: 'dx5', title: 'داروهای ایمنی و ضدعفونت', icon: '💉', items: [
          L('مهار ایمنی', `• <b>corticosteroids</b>: هورمون‌های قشر فوق‌کلیه (طبیعی یا ساختگی) با اثر <b>ضدالتهاب قوی</b> و سرکوب ایمنی<br>• <b>immunosuppressants</b>: سرکوب پاسخ ایمنی برای پیشگیری از <b>رد پیوند</b> و درمان خودایمنی<br>• <b>antihistamine</b>: مهار هیستامین در آلرژی`),
          M('بیمار پیوند کلیه برای جلوگیری از رد پیوند کدام دارو را می‌گیرد؟', ['immunosuppressant', 'thrombolytic', 'hematinic', 'antitoxin'], 'سرکوب ایمنی از حمله به عضو پیوندی جلوگیری می‌کند.'),
          L('داروهای ضدعفونت', `• <b>antiviral</b>: درمان عفونت‌های ویروسی<br>• <b>antiretroviral</b>: ویژه رتروویروس‌ها مثل HIV؛ ترکیب چنددارویی <b>HAART</b><br>• <b>protease inhibitor</b>: مهار آنزیمی که HIV برای ساخت ذره‌های تازه لازم دارد<br>• <b>antibiotic</b> (AB): ضدباکتری`),
          P('دارو و هدف', [['antiretroviral', 'HIV'], ['antibiotic', 'باکتری'], ['antihistamine', 'آلرژی'], ['immunosuppressant', 'رد پیوند']]),
          L('ایمنی‌درمانی', `<b>immunotherapy</b>: تقویت یا تنظیم دستگاه ایمنی برای درمان؛ مثل تزریق ایمونوگلوبولین یا آنتی‌بادی، <b>monoclonal antibodies</b> در سرطان و <b>allergy shots</b> در آلرژی.<br><b>interferon</b> هم در برخی سرطان‌ها و میلوفیبروز استفاده می‌شود.`),
          T('protease inhibitor یک داروی ضد HIV است.', true, 'درست؛ جزئی از درمان ترکیبی HAART.'),
          M('مرد ۴۰ ساله مبتلا به ایدز در پیگیری چه درمانی را ادامه داد؟', ['HAART', 'اسپلنکتومی', 'تزریق خون O منفی', 'حساسیت‌زدایی'], 'به‌علاوه عکس قفسه سینه، کشت خلط و استامینوفن برای تب.'),
          B('اختصار HAART یعنی درمان ضد___ بسیار فعال.', ['رتروویروسی', 'باکتریایی', 'انعقادی'], 'highly active antiretroviral therapy.'),
          S('املای انگلیسی «کورتیکواستروئیدها» را بنویس', ['corticosteroids', 'corticosteroid'], 'cortic/o (قشر) + steroid.', 'cortico…'),
          N('sp:dx')
        ]
      },
      {
        id: 'dx6', title: 'پیوند و سرطان‌درمانی', icon: '🎗️', items: [
          L('پیوند مغز استخوان', `<b>BMT</b> (bone marrow transplant): مغز استخوان بیمار با <b>اشعه و شیمی‌درمانی</b> نابود و سپس مغز استخوان یا <b>سلول‌های بنیادی</b> سالم اهداکننده سازگار تزریق می‌شود.<br>کاربرد: <b>لوسمی</b>، <b>کم‌خونی آپلاستیک</b>، میلوفیبروز. خطر مهم: <b>GVHD</b>.<br>منبع دیگر سلول بنیادی: خون <b>بند ناف</b>.`),
          O('مراحل پیوند مغز استخوان را مرتب کن', ['tissue typing و یافتن اهداکننده سازگار', 'نابودی مغز استخوان بیمار با شیمی‌درمانی و اشعه', 'تزریق سلول‌های بنیادی اهداکننده', 'پایش برای عفونت و GVHD'], 'سازگاری بافتی پیش از همه.'),
          L('واژه‌های سرطان', tbl([['واژه', 'معنی'], ['oncology', 'علم سرطان (onc/o = تومور)'], ['oncologist', 'متخصص سرطان'], ['chemotherapy', 'درمان با داروهای شیمیایی'], ['remission', 'ناپدید شدن علائم بیماری'], ['relapse', 'بازگشت بیماری'], ['metastasis', 'گسترش سرطان به جای دیگر']])),
          P('واژه و معنی', [['remission', 'فروکش بیماری'], ['relapse', 'عود بیماری'], ['metastasis', 'گسترش سرطان'], ['chemotherapy', 'درمان دارویی سرطان']]),
          M('هدف شیمی‌درمانی فشرده در پسر ۲ ساله مبتلا به ALL چه بود؟', ['رسیدن به remission (بهبودی کامل)', 'ایجاد relapse', 'افزایش metastasis', 'تحریک لنفوسیتوز'], 'remission = ناپدید شدن بیماری.'),
          T('relapse یعنی بیماری پس از دوره بهبودی دوباره بازگشته است.', true, 'درست.'),
          W('واژه‌ای بساز به معنی «متخصص سرطان»', ['onc/o', '-logist'], ['-logy', 'chem/o', '-oma'], 'onc/o + -logist = oncologist.'),
          B('در BMT، سلول‌های ___ سالم به بیمار تزریق می‌شوند.', ['بنیادی', 'سرطانی', 'پلاسمایی'], 'stem cells.'),
          S('املای انگلیسی «شیمی‌درمانی» را بنویس', 'chemotherapy', 'chem/o + -therapy.'),
          N('wb:dx')
        ]
      },
      {
        id: 'dx7', title: 'SIRS و سپسیس', icon: '🏥', items: [
          L('SIRS', `<b>SIRS</b> (systemic inflammatory response syndrome): پاسخ التهابی <b>اغراق‌آمیز و سراسری</b> به استرسورهای حاد (عفونت، تروما، پانکراتیت، سوختگی).<br>با تغییر در <b>ضربان قلب</b>، <b>تنفس</b>، <b>دما</b> و <b>شمارش گلبول سفید</b> مشخص می‌شود.${fig('sepsis', '', 'هرچه به راست می‌رویم، بیماری شدیدتر و مرگ‌ومیر بیشتر است.')}${memo('چهار معیار SIRS را با «<b>دما، دل، دم، دفاع</b>» حفظ کن: دمای بدن، ضربان دل، تعداد دم (تنفس) و گلبول‌های سفید (دفاع).')}`),
          M('کدام مورد جزو معیارهای کلاسیک SIRS نیست؟', ['هموگلوبین', 'دمای بدن', 'ضربان قلب', 'شمارش گلبول سفید'], 'معیارها: دما، ضربان قلب، تعداد تنفس و WBC.'),
          L('سپسیس و سپتی‌سمی', `• <b>sepsis</b>: <b>اختلال عملکرد اندام‌ها</b>ی تهدیدکننده حیات، ناشی از پاسخ <b>نامنظم</b> میزبان به عفونت<br>• <b>septicemia</b> (${e('septic/o')} = عفونت + ${e('-emia')}): وجود باکتری یا سموم آن در جریان خون<br>• <b>MODS</b>: سندرم اختلال عملکرد چند اندام`),
          P('واژه و معنی', [['sepsis', 'اختلال عضو ناشی از پاسخ نامنظم به عفونت'], ['septicemia', 'باکتری در خون'], ['SIRS', 'پاسخ التهابی سیستمیک'], ['MODS', 'نارسایی چند اندام']]),
          L('طوفان سایتوکینی', `<b>cytokine storm</b>: آزادسازی <b>سریع و کنترل‌نشده</b> سایتوکین‌های پیش‌التهابی ← آسیب بافتی گسترده و <b>MODS</b>. در عفونت‌های شدید و برخی درمان‌های ایمنی دیده می‌شود.`),
          L('نشانگرهای التهاب در ICU', tbl([['نشانگر', 'نکته'], ['CRP / hs-CRP', 'پروتئین فاز حاد کبدی؛ سریع با التهاب بالا می‌رود'], ['procalcitonin (PCT)', 'در عفونت باکتریایی بالا می‌رود؛ افتراق از التهاب غیرعفونی و پایش آنتی‌بیوتیک'], ['lactate', 'بالا رفتن در شوک و کم‌خون‌رسانی بافت'], ['WBC و diff', 'لوکوسیتوز یا لوکوپنی، باندهای نابالغ']])),
          M('کدام نشانگر بیشتر به افتراق عفونت باکتریایی از التهاب غیرعفونی کمک می‌کند؟', ['procalcitonin', 'hemoglobin', 'albumin', 'reticulocyte count'], 'PCT در عفونت باکتریایی به‌طور اختصاصی‌تری بالا می‌رود.'),
          T('سپسیس صرفاً به معنای وجود باکتری در خون است.', false, 'آن septicemia (باکتریمی) است؛ سپسیس یعنی اختلال عضو ناشی از پاسخ نامنظم میزبان.'),
          W('واژه‌ای بساز به معنی «عفونت در خون»', ['septic/o', '-emia'], ['-osis', 'hem/o', '-lysis'], 'septic + -emia = septicemia.'),
          S('املای انگلیسی «سپسیس» را بنویس', 'sepsis', 'sepsis؛ صفت آن septic.'),
          N('d2t:dx')
        ]
      },
      {
        id: 'dx8', title: 'آهن و التهاب', icon: '🧲', items: [
          L('پروفایل آهن', `${tbl([['آزمایش', 'چه می‌گوید'], ['ferritin', 'ذخیره آهن (پروتئین ذخیره‌کننده درون سلول)'], ['TIBC', 'ظرفیت کل اتصال آهن؛ در فقر آهن بالا می‌رود'], ['transferrin', 'پروتئین حامل آهن در خون'], ['serum iron', 'آهن سرم']])}با این پروفایل، <b>کم‌خونی فقر آهن</b> از <b>کم‌خونی التهابی</b> (بیماری مزمن) جدا می‌شود.${fig('iron', '', 'در التهاب، کبد هپسیدین بیشتری می‌سازد و آهن پشت درهای بسته می‌ماند.')}${pearl('فریتین پایین تقریباً همیشه یعنی فقر آهن؛ ولی فریتین بالا الزاماً یعنی آهن کافی نیست، چون فریتین در التهاب هم بالا می‌رود (acute phase reactant).')}`),
          M('در کم‌خونی فقر آهن، فریتین معمولاً چگونه است؟', ['پایین', 'بالا', 'طبیعی', 'غیرقابل اندازه‌گیری'], 'فریتین ذخیره آهن است؛ در فقر آهن کاهش می‌یابد.'),
          L('هپسیدین', `<b>hepcidin</b>: هورمون <b>کبدی</b> و پروتئین فاز حاد که تعادل آهن را تنظیم می‌کند.<br>در <b>التهاب</b> بالا می‌رود ← آهن در <b>ماکروفاژها</b> حبس و جذب روده‌ای کم می‌شود ← <b>کم‌خونی بیماری‌های مزمن</b> (کم‌خونی التهابی)، حتی با ذخیره کافی آهن.`),
          T('در کم‌خونی التهابی، ممکن است فریتین طبیعی یا بالا باشد ولی آهن در دسترس مغز استخوان کم باشد.', true, 'درست؛ فریتین خودش پروتئین فاز حاد است و هپسیدین آهن را حبس می‌کند.'),
          P('نشانگر و نقش', [['ferritin', 'ذخیره آهن'], ['hepcidin', 'حبس آهن در التهاب'], ['TIBC', 'ظرفیت اتصال آهن'], ['transferrin', 'حمل آهن در خون']]),
          M('بیمار ICU با التهاب شدید: فریتین بالا، آهن سرم پایین، TIBC پایین. محتمل‌ترین برداشت؟', ['کم‌خونی التهابی (بیماری مزمن) با واسطه هپسیدین', 'کم‌خونی فقر آهن خالص', 'هموکروماتوز', 'کم‌خونی پرنیشیوز'], 'در فقر آهن خالص TIBC بالا و فریتین پایین است.'),
          L('کمپلکس سوءتغذیه-التهاب', `<b>MIC</b> (malnutrition-inflammation complex): چرخه معیوب در بیماران بدحال؛ التهاب سیستمیک ← <b>کاتابولیسم پروتئین</b>، <b>کاهش آلبومین</b> و مقاومت به تغذیه انترال/پارنترال ← ضعف ایمنی بیشتر.`),
          B('هورمون تنظیم‌کننده آهن که در التهاب بالا می‌رود ___ است.', ['hepcidin', 'erythropoietin', 'thymosin'], 'هپسیدین از کبد ترشح می‌شود.'),
          S('املای انگلیسی «فریتین» را بنویس', 'ferritin', 'ferr/o (آهن) + -itin.'),
          N('ab:dx')
        ]
      },
      {
        id: 'dx9', title: 'ایمونونوتریشن و عفونت بیمارستانی', icon: '🥗', items: [
          L('ایمونونوتریشن', `<b>immunonutrition</b>: استفاده از مواد مغذی خاص برای <b>تعدیل پاسخ ایمنی</b> و کاهش التهاب در بیماران ICU:<br>• <b>glutamine</b>: سوخت اصلی <b>انتروسیت‌ها</b> و <b>لنفوسیت‌ها</b>؛ در بیماری بحرانی «نیمه‌ضروری» می‌شود<br>• <b>arginine</b>: پیش‌ساز <b>نیتریک اکساید</b>؛ ترمیم زخم و عملکرد T سل<br>• <b>omega-3 fatty acids</b> (EPA و DHA): کاهش التهاب`),
          P('ماده و نقش', [['glutamine', 'سوخت لنفوسیت و سلول روده'], ['arginine', 'پیش‌ساز نیتریک اکساید'], ['omega-3', 'کاهش التهاب'], ['ferritin', 'ذخیره آهن']]),
          M('کدام اسید آمینه سوخت اصلی سلول‌های روده و لنفوسیت‌ها است؟', ['glutamine', 'arginine', 'glycine', 'leucine'], 'گلوتامین در استرس شدید کم می‌شود.'),
          T('آرژینین پیش‌ساز نیتریک اکساید است.', true, 'درست؛ نیتریک اکساید در گشادی رگ و دفاع ایمنی نقش دارد.'),
          L('کیس: بیمار سپتیک ICU', `بیمار ICU با <b>افت فشار مقاوم به مایع</b>، <b>لاکتات بالا</b>، <b>PCT بالا</b> و <b>CRP</b> مثبت؛ کاتابولیسم شدید و <b>هیپوآلبومینمی</b>.<br>درمان: آنتی‌بیوتیک وسیع‌الطیف فوری، حمایت همودینامیک، و <b>تغذیه انترال زودهنگام</b> پرپروتئین غنی از <b>امگا-۳</b> و آنتی‌اکسیدان‌ها.`),
          O('اقدامات اولیه در بیمار سپتیک را مرتب کن', ['شناسایی: افت فشار، لاکتات و PCT بالا', 'کشت خون (C&S)', 'آنتی‌بیوتیک وسیع‌الطیف فوری', 'حمایت همودینامیک و مایع', 'شروع تغذیه انترال زودهنگام'], 'کشت پیش از آنتی‌بیوتیک، بدون تأخیر در درمان.'),
          L('عفونت‌های مقاوم بیمارستانی', `<b>HAI</b> (healthcare-associated infection) در بیماران بستری:<br>• <b>MRSA</b>: استافیلوکوک طلایی مقاوم به متی‌سیلین<br>• <b>CRE</b>: انتروباکتریاسه مقاوم به کارباپنم<br>• <b>C. diff</b>: کلستریدیوم دیفیسیل؛ التهاب روده بزرگ، اغلب پس از مصرف آنتی‌بیوتیک`),
          M('اسهال شدید پس از دوره طولانی آنتی‌بیوتیک در بیمار بستری مشکوک به کدام است؟', ['Clostridium difficile infection', 'MRSA', 'Kaposi sarcoma', 'Pneumocystis pneumonia'], 'آنتی‌بیوتیک فلور روده را برهم می‌زند و C. diff رشد می‌کند.'),
          B('اسیدهای چرب EPA و DHA از خانواده ___ هستند.', ['امگا-۳', 'امگا-۶', 'ترانس'], 'omega-3 fatty acids با اثر ضدالتهابی.'),
          S('املای انگلیسی «گلوتامین» را بنویس', 'glutamine', 'glutamine (Gln).'),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'پازلی', title: 'قطعه‌شناس', shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: 'هر واژه ترسناکی را به پیشوند، ریشه و پسوند می‌شکند و از آخر می‌خواند. شعارش: «pancytopenia فقط سه تکه است!»' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'پسوندو', title: 'استاد ‎-ectomy و ‎-itis', shape: 'book', color: '#4F5BD5', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که پسوندها را خانواده‌خانواده حفظ است؛ هیچ‌وقت ‎-tomy را با ‎-ectomy و hematoma را با تومور قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'گویا', title: 'استاد تلفظ و جمع', shape: 'bubble', color: '#6C4FD8', acc: ['crown'], bio: 'می‌داند p در pneumonia خاموش است، ph «ف» خوانده می‌شود و جمع thrombus می‌شود thrombi. hemorrhage را بی‌غلط می‌نویسد!' },
    { id: 'hb-0', w: 'hb', lv: 0, name: 'پلاسمو', title: 'مایع طلایی خون', shape: 'drop', color: '#F7D774', acc: ['sparkle'], bio: '۵۵٪ خون مال اوست: ۹۰ تا ۹۲٪ آب، به‌علاوه آلبومین، گلوبولین، فیبرینوژن، الکترولیت و هورمون. می‌گوید «سرم همان منم، فقط بدون فیبرینوژن!»' },
    { id: 'hb-1', w: 'hb', lv: 1, name: 'اریترو', title: 'حامل اکسیژن', shape: 'disc', color: '#E2474F', acc: ['headband'], bio: 'دیسکی دوکاو و بی‌هسته که ۱۲۰ روز عمر می‌کند. هموگلوبینش اکسیژن را به بافت‌ها می‌برد و دی‌اکسید کربن را برمی‌گرداند. اریتروپویتین کلیه برایش پیام «بیشتر بساز» می‌فرستد.' },
    { id: 'hb-2', w: 'hb', lv: 2, name: 'مغزی', title: 'کارخانه خون‌سازی', shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: 'درون مغز قرمز استخوان، از یک سلول بنیادی همه سلول‌های خون را می‌سازد. وقتی بیمار می‌شود، کم‌خونی آپلاستیک، لوسمی یا میلوفیبروز از راه می‌رسد.' },
    { id: 'co-0', w: 'co', lv: 0, name: 'پلاکی', title: 'وصله‌کار رگ', shape: 'platelet', color: '#C6A7E6', acc: [], bio: 'تکه‌ای از مگاکاریوسیت که فقط حدود ۱۰ روز عمر می‌کند. در محل زخم جمع می‌شود و ترومبوپلاستین آزاد می‌کند تا آبشار انعقاد راه بیفتد.' },
    { id: 'co-1', w: 'co', lv: 1, name: 'آبوو', title: 'نگهبان گروه خونی', shape: 'shield', color: '#FF9600', acc: ['glasses'], bio: 'روی هر گلبول دنبال آنتی‌ژن A و B می‌گردد و فاکتور Rh را چک می‌کند. پیش از هر ترانسفیوژن کراس‌مچ را فراموش نمی‌کند؛ آگلوتیناسیون را دشمن خونی خودش می‌داند.' },
    { id: 'co-2', w: 'co', lv: 2, name: 'کیسه‌جان', title: 'قهرمان انتقال خون', shape: 'bag', color: '#D23A43', acc: ['cape'], bio: 'گاهی خون خود بیمار (اتولوگ) است و گاهی خون اهداکننده (همولوگ). پلاسمای تازه منجمد، پلاکت و کرایوپرسیپیتات هم دوستانش هستند.' },
    { id: 'ly-0', w: 'ly', lv: 0, name: 'لنفی', title: 'قطره زلال', shape: 'drop', color: '#9FE3D7', acc: ['sparkle'], bio: 'از مایع بینابینی متولد می‌شود و یک‌طرفه از بافت‌ها به سمت قلب می‌رود. اگر راهش بسته شود، لنف‌ادم درست می‌شود.' },
    { id: 'ly-1', w: 'ly', lv: 1, name: 'لوبیا', title: 'گره لنفاوی', shape: 'bean', color: '#12A594', acc: ['headband'], bio: 'لوبیاشکل و پر از لنفوسیت و ماکروفاژ؛ لنف را صاف می‌کند. در گردن، زیربغل و کشاله ران پاتوق دارد و در عفونت متورم و دردناک می‌شود.' },
    { id: 'ly-2', w: 'ly', lv: 2, name: 'طحالو', title: 'صافی بزرگ خون', shape: 'blob', color: '#8E2C6E', acc: ['crown'], bio: 'بزرگ‌ترین اندام لنفاوی؛ گلبول‌های قرمز پیر را جدا می‌کند و خون ذخیره می‌کند. اگر پاره شود، اسپلنکتومی یا اسپلنورافی لازم است.' },
    { id: 'im-0', w: 'im', lv: 0, name: 'خورخور', title: 'ماکروفاژ گرسنه', shape: 'cloud', color: '#CBD6EC', acc: [], bio: 'مونوسیتی که به بافت رفته و ماکروفاژ شده. هر میکروبی را با فاگوسیتوز می‌بلعد و تکه‌ای از آنتی‌ژنش را به لنفوسیت‌ها نشان می‌دهد.' },
    { id: 'im-1', w: 'im', lv: 1, name: 'وای‌جی', title: 'آنتی‌بادی دقیق', shape: 'yab', color: '#1899D6', acc: ['glasses'], bio: 'ایمونوگلوبولینی Y‌شکل که پلاسماسل می‌سازد. دو بازویش فقط به آنتی‌ژن مخصوص خودش می‌چسبد. پنج برادر دارد: IgG، IgM، IgA، IgE و IgD.' },
    { id: 'im-2', w: 'im', lv: 2, name: 'تی‌فور', title: 'فرمانده CD4', shape: 'lympho', color: '#6A3FB5', acc: ['cape', 'crown'], bio: 'لنفوسیت T کمکی که در تیموس آموزش دیده و بقیه سپاه ایمنی را فرمان می‌دهد. HIV دقیقاً او را هدف می‌گیرد؛ وقتی شمارشش زیر ۲۰۰ برسد، ایدز تعریف می‌شود.' },
    { id: 'dx-0', w: 'dx', lv: 0, name: 'لوله‌ای', title: 'نمونه CBC', shape: 'tube', color: '#C8243F', acc: ['sparkle'], bio: 'با یک رگ‌گیری ساده پر می‌شود و همه چیز را لو می‌دهد: RBC، WBC، Hgb، Hct، پلاکت و شمارش افتراقی. ESR و PT هم از دوستانش هستند.' },
    { id: 'dx-1', w: 'dx', lv: 1, name: 'کپسولی', title: 'داروشناس', shape: 'capsule', color: '#FF7A45', acc: ['glasses'], bio: 'ضدانعقاد، ترومبولیتیک، آنتی‌هیستامین، کورتیکواستروئید و داروی ضدرتروویروسی را از هم تشخیص می‌دهد و می‌داند هرکدام کجا به کار می‌آید.' },
    { id: 'dx-2', w: 'dx', lv: 2, name: 'پالسی', title: 'نگهبان ICU', shape: 'heart', color: '#58CC02', acc: ['headband'], bio: 'SIRS، سپسیس و طوفان سایتوکینی را از روی پروکلسی‌تونین و CRP رصد می‌کند و می‌داند گلوتامین، آرژینین و امگا-۳ چطور به ایمنی بیمار بدحال کمک می‌کنند.' }
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
      id: 'r1', w: 'hb', title: 'خستگی، سنکوپ و مغز استخوان فیبری', who: 'Ada، زن میانسال',
      brief: 'آدا چند ماه است خستگی شدید، درد مفاصل و یک بار غش (سنکوپ) داشته است. در CBC کم‌خونی و گلبول‌های قرمز اشک‌مانند دیده می‌شود و طحال بزرگ است. پزشک آسپیراسیون مغز استخوان درخواست می‌کند.',
      chart: [['شکایت', 'خستگی، درد مفاصل، سنکوپ'], ['CBC', 'Hgb پایین، شکل‌های غیرطبیعی RBC'], ['معاینه', 'splenomegaly'], ['آسپیراسیون', 'مثبت برای myelofibrosis']],
      fig: { a: ['smears', 'rbcshapes'], l: ['لام خون', 'شکل‌های گلبول'] },
      steps: [
        M('واژه', 'myelofibrosis یعنی…', ['جایگزینی مغز استخوان با بافت فیبری', 'التهاب نخاع', 'سرطان پلاسماسل‌ها', 'کمبود ویتامین B12'], 'myel/o (مغز استخوان) + fibr/o (رشته) + -osis (وضعیت).'),
        M('آزمایش', 'تفاوت شکل گلبول‌های قرمز در لام چه نام دارد؟', ['poikilocytosis', 'anisocytosis', 'leukocytosis', 'thrombocytosis'], 'poikil/o = گوناگون (شکل)؛ anis/o مربوط به اندازه است.'),
        M('تشخیص', 'چرا طحال بزرگ شده است؟', ['خون‌سازی خارج از مغز استخوان در طحال', 'عفونت طحال', 'پارگی طحال', 'تومور تیموس'], 'وقتی مغز استخوان فیبری شود، طحال و کبد کار خون‌سازی را به عهده می‌گیرند ← splenomegaly.'),
        P('درمان', 'هر درمان آدا را به هدفش وصل کن', [['مکمل آهن و B12', 'جبران کم‌خونی (hematinic)'], ['interferon', 'مهار تکثیر سلول‌های غیرطبیعی'], ['splenectomy', 'برداشتن طحال بزرگ'], ['پیوند سلول بنیادی', 'جایگزینی مغز استخوان']]),
        T('اهداکننده', 'پیوند سلول بنیادی از خواهر یا برادر سازگار، با tissue typing تأیید می‌شود.', true, 'درست؛ سازگاری بافتی خطر GVHD را کم می‌کند.'),
        S('املا', 'املای «برداشتن طحال» را بنویس', 'splenectomy', 'splen/o + -ectomy.', 'splen…')
      ]
    },
    {
      id: 'r2', w: 'hb', title: 'گلبول‌های سفید نابالغ', who: 'زن ۲۲ ساله',
      brief: 'خانم جوانی با خستگی، کبودی‌های بی‌دلیل و عفونت‌های مکرر مراجعه کرده است. CBC تعداد کم گلبول قرمز و پلاکت و تعداد بسیار زیاد گلبول‌های سفید نابالغ را نشان می‌دهد. آزمایش HIV منفی است.',
      chart: [['RBC', 'پایین'], ['PLT', 'پایین'], ['WBC', 'بسیار بالا، بیشتر نابالغ (blast)'], ['HIV immunoassay', 'منفی']],
      steps: [
        M('واژه', 'کاهش گلبول‌های قرمز در این بیمار را چه می‌نامیم؟', ['erythropenia', 'erythrocytosis', 'leukopenia', 'polycythemia'], 'erythr/o + -penia.'),
        M('واژه', 'کمبود پلاکت؟', ['thrombocytopenia', 'thrombocytosis', 'thrombosis', 'thrombolysis'], 'thromb/o + cyt/o + -penia ← علت کبودی‌ها.'),
        M('تشخیص', 'سرطان مغز استخوان سازنده گلبول سفید؟', ['leukemia', 'lymphoma', 'multiple myeloma', 'thalassemia'], 'لوسمی: گلبول‌های سفید نابالغ جای بقیه سلول‌ها را می‌گیرند.'),
        M('تأیید', 'کدام بررسی تشخیص را قطعی می‌کند؟', ['بررسی میکروسکوپی نمونه مغز استخوان', 'ESR', 'Coombs test', 'lymphangiography'], 'آسپیراسیون یا بیوپسی مغز استخوان.'),
        M('درمان', 'برای جایگزینی گلبول قرمز و پلاکت، چه نوع انتقال خونی انجام شد؟', ['homologous (از اهداکننده)', 'autologous (خون خود بیمار)', 'plasmapheresis', 'هیچ‌کدام'], 'بیمار خودش خون سالم کافی ندارد؛ پس خون همولوگ.'),
        T('درمان اصلی', 'درمان اصلی سرطان در این بیمار شیمی‌درمانی تهاجمی بود.', true, 'درست؛ همراه با انتقال خون حمایتی.')
      ]
    },
    {
      id: 'r3', w: 'hb', title: 'تب و پتشی در کودک', who: 'پسر ۲ ساله',
      brief: 'کودک با تب‌های بالا، خون‌دماغ (epistaxis)، خونریزی لثه، لکه‌های ریز قرمز روی پوست و کبودی آورده شده است. پزشک به لوسمی حاد مشکوک است.',
      fig: { a: 'marrow-aspiration', l: [] },
      chart: [['علائم', 'تب، epistaxis، خونریزی لثه'], ['پوست', 'petechiae و ecchymoses'], ['PLT', 'پایین (thrombopenia)'], ['درخواست', 'bone marrow aspiration']],
      steps: [
        M('پوست', 'لکه‌های ریز صاف ارغوانی-قرمز روی پوست؟', ['petechiae', 'urticaria', 'hematoma', 'erythema'], 'خونریزی‌های نقطه‌ای مویرگی به‌خاطر کمبود پلاکت.'),
        M('واژه', 'epistaxis یعنی…', ['خون‌دماغ', 'خونریزی لثه', 'سرفه خونی', 'کبودی'], 'خونریزی از بینی.'),
        M('تشخیص', 'شایع‌ترین لوسمی کودکان؟', ['ALL', 'CLL', 'CML', 'AML'], 'acute lymphocytic (lymphoblastic) leukemia.'),
        M('اختصار', 'ALL مخفف چیست؟', ['acute lymphocytic leukemia', 'acquired lymphatic lymphoma', 'anemia of liver and lymph', 'acute leukocytosis'], 'حاد، لنفوسیتی، لوسمی.'),
        O('روند', 'روند کار این کودک را مرتب کن', ['شرح حال و معاینه: تب، پتشی، خونریزی', 'CBC: کاهش پلاکت', 'bone marrow aspiration برای تأیید', 'شیمی‌درمانی فشرده با هدف remission'], 'تشخیص بالینی، سپس تأیید با مغز استخوان.'),
        S('املا', 'املای «بهبودی کامل» (فروکش بیماری) را بنویس', 'remission', 'remission؛ بازگشت بیماری = relapse.')
      ]
    },
    /* ================= هموستاز و انتقال خون ================= */
    {
      id: 'r4', w: 'co', title: 'تنگی نفس و درد شکم', who: 'Dianne Love',
      brief: 'دایان با مشکلات تنفسی و درد در سمت چپ پایین شکم مراجعه کرده است. پزشک CBC، WBC، ESR، PT و PTT درخواست می‌کند. نتایج کم‌خونی را نشان می‌دهند و پزشک دستور تزریق ۲ واحد خون O منفی را می‌دهد.',
      chart: [['شکایت', 'dyspnea، درد LLQ شکم'], ['آزمایش‌ها', 'CBC، WBC، ESR، PT، PTT'], ['تشخیص', 'anemia'], ['درمان', '۲ واحد O منفی']],
      fig: { a: ['abo-table', 'abo'], l: [] },
      steps: [
        M('واژه', 'dyspnea یعنی…', ['تنگی نفس', 'سرفه', 'تب', 'کم‌خونی'], 'dys- (دشوار) + -pnea (تنفس).'),
        P('آزمایش', 'هر آزمایش را به کارش وصل کن', [['CBC', 'شمارش کامل سلول‌های خون'], ['ESR', 'نشانگر التهاب'], ['PT', 'زمان لخته شدن'], ['WBC', 'شمارش گلبول سفید']]),
        M('گروه خونی', 'چرا O منفی انتخاب شد؟', ['O منفی آنتی‌ژن A، B و Rh ندارد و برای بیشتر گیرندگان امن است', 'O منفی آنتی‌بادی ندارد', 'O منفی گیرنده همگانی است', 'O منفی پلاکت بیشتری دارد'], 'اهداکننده همگانی گلبول قرمز.', null, { a: 'abo' }),
        T('سازگاری', 'حتی با O منفی، در شرایط غیراورژانس cross-matching ترجیح داده می‌شود.', true, 'درست؛ آنتی‌بادی‌های نادر دیگری هم ممکن است وجود داشته باشد.'),
        M('اختصار', 'PTT مخفف چیست؟', ['partial thromboplastin time', 'platelet transfusion test', 'prothrombin total time', 'plasma thrombin titer'], 'زمان ترومبوپلاستین نسبی.'),
        S('املا', 'املای «کم‌خونی» را بنویس', 'anemia', 'an- + -emia.')
      ]
    },
    {
      id: 'r5', w: 'co', title: 'پارگی کبد پس از تصادف', who: 'Lisa',
      brief: 'لیزا پس از تصادف با خونریزی داخلی شدید و پارگی کبد به اورژانس آورده شده است. کم‌خونی هموراژیک شدید دارد. تیم جراحی همراه با پایش آزمایش‌های انعقادی، انتقال خون گسترده انجام می‌دهد.',
      chart: [['تشخیص', 'liver laceration، hemorrhagic anemia'], ['پایش', 'Hgb، Hct، PT، PTT'], ['جراحی', 'اورژانسی'], ['فرآورده‌ها', 'خون شسته‌شده، همولوگ، FFP، پلاکت']],
      steps: [
        M('تشخیص', 'کم‌خونی ناشی از خونریزی؟', ['hemorrhagic anemia', 'aplastic anemia', 'pernicious anemia', 'sickle cell anemia'], 'hem/o + -rrhage (فوران).'),
        M('انتقال خون', 'جمع‌آوری خون خود بیمار از حفره شکم و بازگرداندن آن پس از شستشو؟', ['autotransfusion (autologous)', 'homologous transfusion', 'plasmapheresis', 'cross-matching'], 'auto- = خود.'),
        M('فرآورده', 'برای جایگزینی عوامل انعقادی مصرف‌شده، کدام فرآورده؟', ['FFP', 'PRBC', 'albumin', 'IVIG'], 'fresh frozen plasma.'),
        P('پایش', 'هر آزمایش و آنچه نشان می‌دهد', [['Hgb', 'هموگلوبین'], ['Hct', 'درصد حجم گلبول قرمز'], ['PT', 'زمان پروترومبین'], ['PTT', 'زمان ترومبوپلاستین نسبی']]),
        T('پلاکت', 'در خونریزی شدید و انتقال خون حجیم، ممکن است پلاکت هم لازم شود.', true, 'درست؛ پلاکت‌ها در خونریزی مصرف و با تزریق خون رقیق می‌شوند.'),
        M('واژه', 'laceration در «liver laceration» یعنی…', ['پارگی', 'التهاب', 'بزرگی', 'تومور'], 'پارگی بافت.')
      ]
    },
    /* ================= دستگاه لنفاوی ================= */
    {
      id: 'r6', w: 'ly', title: 'گلودرد و گره‌های متورم', who: 'پسر ۱۶ ساله',
      brief: 'نوجوانی با گلودرد شدید، تب و خستگی آمده است. در معاینه، گره‌های لنفاوی گردن، زیربغل و کشاله ران بزرگ‌اند، گلو قرمز و ملتهب است و طحال بزرگ لمس می‌شود.',
      chart: [['گره‌ها', 'cervical، axillary، inguinal'], ['گلو', 'قرمز و ملتهب'], ['شکم', 'splenomegaly'], ['آزمایش خون', 'لنفوسیتوز غیرتیپیک']],
      fig: { a: 'lymph-nodes-regional', l: [] },
      steps: [
        P('ناحیه', 'هر ناحیه گره لنفاوی را به نامش وصل کن', [['گردن', 'cervical'], ['زیربغل', 'axillary'], ['کشاله ران', 'inguinal'], ['میان قفسه سینه', 'mediastinal']]),
        M('واژه', 'بزرگی گره‌های لنفاوی را چه می‌نامند؟', ['lymphadenopathy', 'lymphangioma', 'lymphedema', 'lymphoma'], 'lymphaden/o + -pathy.'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['infectious mononucleosis', 'Hodgkin lymphoma', 'hemophilia', 'elephantiasis'], 'عامل: ویروس اپشتین-بار (EBV).'),
        M('عامل', 'عامل مونونوکلئوز عفونی؟', ['Epstein-Barr virus (EBV)', 'HIV', 'filaria', 'Candida'], 'EBV.'),
        T('توصیه', 'به بیمار با splenomegaly توصیه می‌شود از ورزش‌های برخوردی دوری کند.', true, 'درست؛ خطر پارگی طحال (splenorrhagia).'),
        M('درمان', 'درمان این بیمار؟', ['مسکن بدون نسخه، مایعات، استراحت و قرص مکیدنی', 'اسپلنکتومی فوری', 'شیمی‌درمانی', 'HAART'], 'بیماری ویروسی خودمحدود؛ درمان حمایتی.')
      ]
    },
    {
      id: 'r7', w: 'ly', title: 'توده در طحال', who: 'مرد تاجر ۳۶ ساله',
      brief: 'مرد ۳۶ ساله با احساس پری شکم و خستگی مراجعه کرده است. MRI کل بدن بزرگی طحال و یک تومور کپسول‌دار ۳ سانتی‌متری در طحال را نشان داد. نمونه‌برداری از تومور گرفته شد.',
      fig: { a: ['mri', 'spleen-thymus-location'], l: ['MRI', 'محل طحال'] },
      chart: [['تصویربرداری', 'MRI کل بدن'], ['یافته', 'splenomegaly + تومور ۳ cm'], ['بیوپسی', 'non-Hodgkin lymphoma'], ['اقدام', 'splenectomy + ارجاع انکولوژی']],
      steps: [
        M('اختصار', 'MRI مخفف چیست؟', ['magnetic resonance imaging', 'microscopic red-cell index', 'marrow radiation imaging', 'multiple renal infection'], 'تصویربرداری تشدید مغناطیسی برای بافت‌های نرم.'),
        M('تشخیص', 'بیوپسی کدام لنفوم را نشان داد؟', ['non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'thymoma', 'lymphangioma'], 'NHL طحال.'),
        T('یافته', 'در NHL سلول‌های Reed-Sternberg دیده می‌شوند.', false, 'Reed-Sternberg ویژه لنفوم هاجکین است.'),
        M('جراحی', 'برداشتن طحال؟', ['splenectomy', 'splenotomy', 'splenorrhaphy', 'splenopexy'], '‎-ectomy = برداشتن.'),
        M('ارجاع', 'بیمار به کدام متخصص ارجاع شد؟', ['oncologist', 'allergist', 'hematologist فقط برای انعقاد', 'immunologist'], 'متخصص سرطان برای بررسی شیمی‌درمانی.'),
        S('املا', 'املای «لنفوم» را بنویس', 'lymphoma', 'lymph/o + -oma.')
      ]
    },
    {
      id: 'r8', w: 'ly', title: 'گره متورم در بیمار HIV مثبت', who: 'John Latella',
      brief: 'جان که HIV مثبت است و داروهای پیشگیری مصرف می‌کند، در معاینه دوره‌ای گره لنفاوی بزرگی دارد. نگرانی اصلی، لنفوم یا سارکوم کاپوزی است. بیوپسی سرپایی و آزمایش خون انجام می‌شود.',
      fig: { a: 'lymph-node-structure', l: [] },
      chart: [['زمینه', 'AIDS، داروی پیشگیری'], ['معاینه', 'lymphadenopathy'], ['بیوپسی', 'عفونی، نه بدخیم'], ['درمان', 'دوره آنتی‌بیوتیک']],
      steps: [
        M('واژه', 'گره لنفاوی ملتهب و بزرگ به‌خاطر عفونت؟', ['lymphadenitis', 'lymphangitis', 'lymphoma', 'lymphedema'], 'lymphaden/o + -itis.'),
        M('خطر', 'بدخیمی بافت همبند که در ایدز شایع است؟', ['Kaposi sarcoma', 'multiple myeloma', 'thalassemia', 'polycythemia vera'], 'KS.'),
        M('روش', 'برای تعیین ماهیت گره چه کاری انجام شد؟', ['biopsy', 'Coombs test', 'phlebotomy', 'plasmapheresis'], 'بیوپسی = برداشتن تکه‌ای از بافت برای بررسی.'),
        T('نتیجه', 'بیوپسی نشان داد گره بدخیم است.', false, 'گره عفونی بود و با آنتی‌بیوتیک درمان شد.'),
        M('داروی پیشگیری', 'داروهای «پروفیلاکتیک» یعنی…', ['پیشگیری‌کننده', 'درمان سرطان', 'ضدانعقاد', 'خواب‌آور'], 'prophylaxis = پیشگیری (هم‌خانواده -phylaxis = محافظت).')
      ]
    },
    /* ================= ایمنی ================= */
    {
      id: 'r9', w: 'im', title: 'حساسیت به دستکش', who: 'Olivia',
      brief: 'اولیویا سابقه درماتیت تماسی پس از استفاده از دستکش لاتکس دارد. اخیراً پس از معاینه دندان با دستکش لاتکس دچار تپش قلب، کهیر و آبریزش بینی شد. تست‌های ایمونولوژی و تست خراش پوستی انجام شد.',
      fig: { a: 'allergens', l: [] },
      chart: [['سابقه', 'contact dermatitis'], ['واکنش اخیر', 'tachycardia، urticaria، rhinitis'], ['تست', 'skin-prick مثبت برای latex'], ['تشخیص', 'Type I hypersensitivity (IgE)']],
      steps: [
        M('واژه', 'urticaria یعنی…', ['کهیر', 'تپش قلب', 'آبریزش بینی', 'تنگی نفس'], 'برجستگی‌های خارش‌دار پوست (hives).'),
        M('آنتی‌بادی', 'حساسیت نوع ۱ با واسطه کدام آنتی‌بادی است؟', ['IgE', 'IgG', 'IgM', 'IgA'], 'IgE روی ماست‌سل‌ها و بازوفیل‌ها ← هیستامین.'),
        M('واژه', 'tachycardia یعنی…', ['تند شدن ضربان قلب', 'کند شدن ضربان قلب', 'تنگی نفس', 'افت فشار'], 'tachy- = تند، cardi/o = قلب.'),
        O('برنامه', 'توصیه‌های اولیویا را به ترتیب اهمیت مرتب کن', ['دوری کامل از محصولات لاتکس', 'همراه داشتن سرنگ خودتزریق epinephrine', 'دستبند هشدار پزشکی', 'اسپری bronchodilator در اولین علامت برونکواسپاسم'], 'پیشگیری، سپس آمادگی برای آنافیلاکسی.'),
        T('خطر', 'تماس بعدی با لاتکس ممکن است به anaphylaxis برسد.', true, 'درست؛ واکنش‌ها با تماس‌های بعدی شدیدتر می‌شوند.'),
        S('املا', 'املای داروی نجات‌بخش آنافیلاکسی را بنویس', ['epinephrine', 'adrenaline'], 'epinephrine (adrenaline).', 'epi…')
      ]
    },
    {
      id: 'r10', w: 'im', title: 'تب، تعریق شبانه و سرفه', who: 'مرد ۴۰ ساله مبتلا به ایدز',
      brief: 'مرد ۴۰ ساله‌ای که ایدز دارد با لرز، تعریق شبانه، سرفه مداوم با خلط شفاف و تنگی نفس آمده است. صدای تنفسی در لوب میانی و پایینی ریه راست کاهش یافته است.',
      chart: [['CD4', '۱۹۰ /µL'], ['WBC', '۳٫۳ ×10³ /µL'], ['Hgb', '۱۲٫۸ g/dL'], ['PLT', '۱۲۳ ×10³ /µL']],
      fig: { a: ['hiv-virus', 'kaposi'], l: ['HIV', 'Kaposi sarcoma'] },
      steps: [
        M('ایمنی', 'CD4 برابر ۱۹۰ یعنی…', ['ایمنی سلولی به‌شدت سرکوب شده (زیر ۲۰۰ = ایدز)', 'ایمنی کاملاً طبیعی', 'لوسمی', 'کم‌خونی شدید'], 'CD4 طبیعی ۵۰۰ تا ۱۵۰۰ است.'),
        M('واژه', 'WBC برابر ۳٫۳ هزار را چه می‌نامیم؟', ['leukopenia', 'leukocytosis', 'neutrophilia', 'lymphocytosis'], 'کمتر از ۵۰۰۰ ← لوکوپنی.'),
        M('تشخیص احتمالی', 'کدام عفونت فرصت‌طلب ریوی باید رد شود؟', ['Pneumocystis pneumonia (PCP)', 'allergic asthma', 'sarcoidosis', 'elephantiasis'], 'PCP شایع‌ترین عفونت ریوی فرصت‌طلب در ایدز است.'),
        P('ارزیابی', 'هر اقدام و هدفش', [['chest X-ray', 'دیدن درگیری ریه'], ['sputum culture', 'یافتن عامل عفونت'], ['HAART', 'کنترل HIV'], ['acetaminophen', 'کاهش تب']]),
        T('پلاکت', 'پلاکت ۱۲۳ هزار کمتر از حد طبیعی است (thrombocytopenia خفیف).', true, 'درست؛ طبیعی ۱۵۰ تا ۴۵۰ هزار.'),
        S('املا', 'املای «خلط» را بنویس', 'sputum', 'sputum = مخاط یا خلط سرفه‌شده.')
      ]
    },
    /* ================= آزمایش، درمان و ICU ================= */
    {
      id: 'r11', w: 'dx', title: 'افت فشار مقاوم در ICU', who: 'بیمار بخش مراقبت ویژه',
      brief: 'بیمار بستری در ICU با پنومونی، دچار افت فشار خونی شده که با مایع‌درمانی اصلاح نمی‌شود. لاکتات بالا رفته، پروکلسی‌تونین بالاست و CRP مثبت است. ارزیابی تغذیه‌ای کاتابولیسم شدید و هیپوآلبومینمی را نشان می‌دهد.',
      chart: [['فشار خون', 'پایین، مقاوم به مایع'], ['lactate', 'بالا'], ['PCT', 'بالا'], ['CRP', 'مثبت'], ['albumin', 'پایین']],
      steps: [
        M('تشخیص', 'بهترین واژه برای وضعیت بیمار؟', ['sepsis (septic shock)', 'anaphylaxis', 'hemophilia', 'lymphedema'], 'اختلال عملکرد اندام ناشی از پاسخ نامنظم به عفونت.'),
        M('نشانگر', 'بالا بودن PCT بیشتر به نفع چیست؟', ['عفونت باکتریایی', 'آلرژی', 'کم‌خونی فقر آهن', 'هموفیلی'], 'procalcitonin در عفونت باکتریایی بالا می‌رود.'),
        M('واژه', 'hypoalbuminemia یعنی…', ['آلبومین خون پایین', 'آلبومین خون بالا', 'گلبول قرمز پایین', 'قند خون پایین'], 'hypo- + albumin + -emia.'),
        O('درمان', 'اقدامات را مرتب کن', ['کشت خون', 'آنتی‌بیوتیک وسیع‌الطیف فوری', 'حمایت همودینامیک', 'تغذیه انترال زودهنگام پرپروتئین'], 'آنتی‌بیوتیک بدون تأخیر؛ تغذیه پس از پایداری نسبی.'),
        P('ایمونونوتریشن', 'هر ماده و نقشش', [['omega-3', 'تعدیل التهاب'], ['glutamine', 'سوخت لنفوسیت و انتروسیت'], ['arginine', 'پیش‌ساز نیتریک اکساید'], ['antioxidants', 'مقابله با استرس اکسیداتیو']]),
        T('مفهوم', 'در این بیمار، کمپلکس سوءتغذیه-التهاب (MIC) باعث کاتابولیسم پروتئین و افت آلبومین می‌شود.', true, 'درست؛ التهاب سیستمیک چرخه معیوب سوءتغذیه را تشدید می‌کند.')
      ]
    },
    {
      id: 'r12', w: 'dx', title: 'کم‌خونی در بیماری التهابی', who: 'مرد ۵۸ ساله با آرتریت روماتوئید',
      brief: 'بیمار مبتلا به RA از ماه‌ها پیش خستگی دارد. Hgb پایین است و گلبول‌ها نرموسیتیک‌اند. پزشک برای افتراق کم‌خونی فقر آهن از کم‌خونی التهابی، پروفایل آهن و CRP درخواست می‌کند.',
      fig: { a: 'sle-face', l: [] },
      chart: [['Hgb', '۱۰٫۵ g/dL'], ['MCV', 'طبیعی'], ['ferritin', 'بالا'], ['TIBC', 'پایین'], ['CRP', 'بالا']],
      steps: [
        M('اختصار', 'RA مخفف چیست؟', ['rheumatoid arthritis', 'red-cell anemia', 'reticulocyte assay', 'right atrium'], 'آرتریت روماتوئید؛ یک بیماری خودایمنی.'),
        M('واژه', 'MCV طبیعی یعنی گلبول‌ها…', ['اندازه طبیعی دارند (نرموسیتیک)', 'کوچک‌اند', 'بزرگ‌اند', 'داسی‌شکل‌اند'], 'mean corpuscular volume.'),
        M('تفسیر', 'فریتین بالا با TIBC پایین بیشتر به نفع کدام است؟', ['کم‌خونی التهابی (بیماری مزمن)', 'کم‌خونی فقر آهن', 'کم‌خونی پرنیشیوز', 'تالاسمی'], 'در فقر آهن فریتین پایین و TIBC بالاست.'),
        M('مکانیسم', 'کدام هورمون در التهاب آهن را در ماکروفاژها حبس می‌کند؟', ['hepcidin', 'erythropoietin', 'thymosin', 'heparin'], 'هپسیدین کبدی.'),
        T('درمان', 'در کم‌خونی التهابی، کنترل بیماری زمینه‌ای اهمیت اصلی دارد.', true, 'درست؛ با کاهش التهاب، هپسیدین پایین می‌آید.'),
        S('املا', 'املای «هپسیدین» را بنویس', 'hepcidin', 'hepcidin؛ hepat/o = کبد.', 'hep…')
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
    ['Lx', 'اگر پسوند با حرف صدادار شروع شود، واکه رابط o حذف می‌شود: leuk/o + -emia = leukemia.'],
    ['Lx', '‎-tomy یعنی برش و ‎-ectomy یعنی برداشتن؛ ec- در یونانی یعنی «بیرون».'],
    ['Lx', 'hematoma با اینکه ‎-oma دارد تومور نیست؛ تجمع خون بیرون از رگ است.'],
    ['Lx', 'جمع thrombus می‌شود thrombi و جمع petechia می‌شود petechiae.'],
    ['Lx', 'در pneumonia و pseudo- حرف p خاموش است؛ ph همیشه «ف» خوانده می‌شود.'],
    ['Lx', 'lymphaden/o گره لنفاوی است و lymphangi/o رگ لنفاوی؛ aden = غده، angi = لوله.'],
    ['Hb', 'معنی واژه پزشکی را از پسوند شروع کن: erythro/cyto/penia یعنی «کمبودِ سلولِ قرمز».'],
    ['Hb', 'خون حدود ۸٪ وزن بدن است؛ یعنی در بزرگسال حدود ۵ لیتر.'],
    ['Hb', '‎-penia یعنی کمبود و ‎-cytosis یعنی افزایش سلول؛ leukopenia در برابر leukocytosis.'],
    ['Hb', 'گلبول قرمز بالغ هسته ندارد و حدود ۱۲۰ روز عمر می‌کند؛ پلاکت حدود ۱۰ روز.'],
    ['Hb', 'اریتروپویتین (EPO) در کلیه ساخته می‌شود و مغز استخوان را به ساختن گلبول قرمز وا می‌دارد.'],
    ['Hb', 'نوتروفیل‌ها بیشترین گلبول سفیدند (۵۴ تا ۷۰٪)؛ بازوفیل‌ها کمترین (کمتر از ۱٪).'],
    ['Hb', 'eosin/o یعنی گلگون: گرانول‌های ائوزینوفیل با رنگ اسیدی ائوزین قرمز می‌شوند.'],
    ['Hb', 'anis/o یعنی نابرابر (اندازه) و poikil/o یعنی گوناگون (شکل)؛ anisocytosis در برابر poikilocytosis.'],
    ['PT', 'سرم = پلاسما منهای فیبرینوژن و عوامل انعقادی؛ یعنی مایعی که بعد از لخته شدن می‌ماند.'],
    ['PT', 'ترومبین فیبرینوژن را به فیبرین تبدیل می‌کند و پلاسمین لخته را حل می‌کند.'],
    ['PT', 'گروه O منفی «اهداکننده همگانی» گلبول قرمز است، چون آنتی‌ژن A، B و Rh ندارد.'],
    ['PT', 'thrombus لخته ثابت در رگ است و embolus لخته یا توده‌ای که جابه‌جا می‌شود.'],
    ['PT', 'petechiae نقطه‌ای، purpura بزرگ‌تر و ecchymosis کبودی وسیع است؛ همه خونریزی زیر پوست.'],
    ['Ly', 'لنف فقط یک‌طرفه حرکت می‌کند: از بافت به گره‌ها و سرانجام به سیاهرگ‌های زیر ترقوه.'],
    ['Ly', 'lymphaden/o = گره لنفاوی و lymphangi/o = رگ لنفاوی؛ یک حرف فرق دارد، معنی کاملاً فرق دارد.'],
    ['Ly', 'تیموس محل بلوغ لنفوسیت‌های T است؛ T از Thymus می‌آید.'],
    ['Ly', 'سلول‌های رید-اشترنبرگ نشانه لنفوم هاجکین‌اند؛ نبودشان یعنی لنفوم غیرهاجکین.'],
    ['Ig', 'B از Bone marrow می‌آید: لنفوسیت B در مغز استخوان بالغ می‌شود و به پلاسماسل سازنده آنتی‌بادی تبدیل می‌شود.'],
    ['Ig', 'IgE واسطه آلرژی و آنافیلاکسی است؛ IgG تنها آنتی‌بادی‌ای است که از جفت عبور می‌کند.'],
    ['Ig', 'ایمنی فعال با بیماری یا واکسن ساخته می‌شود؛ ایمنی غیرفعال آنتی‌بادی قرضی است (از مادر یا گاماگلوبولین).'],
    ['Ig', 'در HIV، شمارش CD4 زیر ۲۰۰ در میکرولیتر تعریف ایدز است.'],
    ['Lab', 'PT و INR برای پایش وارفارین و aPTT برای پایش هپارین به کار می‌روند.'],
    ['Lab', 'پروکلسی‌تونین در عفونت باکتریایی بالا می‌رود و به افتراق آن از التهاب غیرعفونی کمک می‌کند.'],
    ['Lab', 'ESR و CRP هر دو نشانگر غیراختصاصی التهاب‌اند؛ CRP سریع‌تر بالا و پایین می‌رود.'],
    ['Lab', 'گلوتامین سوخت لنفوسیت‌ها و سلول‌های روده است و در بیماری بحرانی «نیمه‌ضروری» می‌شود.'],
    ['', 'در واژه‌نامه می‌توانی هر واژه را بشنوی، نشان کنی و با تجزیه‌گر به ریشه‌هایش بشکنی.'],
    ['', 'کارت‌های لایتنر را روزی یک دسته مرور کن؛ کارت‌های خانه ۴ و ۵ یعنی واژه در حافظه بلندمدت نشسته.'],
    ['', 'هر سطح که تمام شود، یک کاراکتر تازه به کلکسیونت اضافه می‌شود.']
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
/* ایمنا — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مقادیر مرجع
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'imena.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#C8243F' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#12A594' },
    { id: 'abbr', sym: 'CBC', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: 'Lab', name: 'مقادیر مرجع', color: '#E5A500' }
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
      <header class="vhead"><h1>ابزارها</h1><p>واژه‌نامه کامل ${fa(L().TERMS.length)} واژه، ${fa(L().ROOTS.length)} جزء واژه و ${fa(L().ABBR.length)} اختصار؛ همه بدون اینترنت.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">⚕️ ایمنا ابزار آموزشی است؛ مقادیر مرجع بسته به آزمایشگاه، سن و جنس فرق می‌کنند.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: anemia، کم‌خونی، thromb…')}
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
  const SAMPLES = ['erythrocytopenia', 'splenomegaly', 'lymphadenopathy', 'hemolysis', 'thrombocytosis', 'immunoglobulin', 'agranulocytosis', 'plasmapheresis'];
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. leukocytosis"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox('جست‌وجو: cyt، خون، \u200e-emia\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: PT، هموگلوبین، leukemia…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  const REF = [
    ['حجم خون بالغ', '≈ 5 L', 'حدود ۸٪ وزن بدن'],
    ['پلاسما / عناصر سلولی', '55% / 45%', 'پلاسما ۹۰–۹۲٪ آب؛ pH ≈ 7.4'],
    ['RBC (اریتروسیت)', '4.2–6.4 ×10⁶ /µL', 'عمر ≈ ۱۲۰ روز'],
    ['Hgb (هموگلوبین)', '≈ 12–18 g/dL', 'میانگین ≈ ۱۵؛ زنان کمتر از مردان'],
    ['Hct (هماتوکریت)', '≈ 37–52 %', 'درصد حجم گلبول‌های قرمز فشرده'],
    ['WBC (لوکوسیت)', '5,000–10,000 /µL', 'لوکوسیتوز: بیشتر؛ لوکوپنی: کمتر'],
    ['نوتروفیل', '54–70 %', 'نخستین مدافع در عفونت باکتریایی'],
    ['لنفوسیت', '20–38 %', 'B و T؛ ایمنی اختصاصی'],
    ['مونوسیت', '3–9 %', 'در بافت ← ماکروفاژ'],
    ['ائوزینوفیل', '1–4 %', 'آلرژی و انگل'],
    ['بازوفیل', '< 1 %', 'هیستامین و هپارین'],
    ['PLT (پلاکت)', '150,000–450,000 /µL', 'عمر ≈ ۱۰ روز'],
    ['PT (زمان پروترومبین)', '≈ 11–13.5 sec', 'INR ≈ 0.8–1.1 بدون داروی ضدانعقاد'],
    ['aPTT', '≈ 25–35 sec', 'پایش هپارین'],
    ['ESR', 'مردان < 15 • زنان < 20 mm/hr', 'نشانگر غیراختصاصی التهاب'],
    ['CRP', '< 10 mg/L', 'hs-CRP برای خطر قلبی-عروقی و التهاب خفیف'],
    ['Procalcitonin (PCT)', '< 0.1 ng/mL', 'بالا رفتن آن به نفع عفونت باکتریایی است'],
    ['CD4', '500–1,500 /µL', 'زیر ۲۰۰ در HIV ← تعریف ایدز']
  ];
  const ref = () => `<div class="tpane"><p class="muted">مقادیر تقریبی بزرگسالان، برای یادگیری؛ محدوده هر آزمایشگاه کمی فرق دارد.</p>
    <table class="mini ref"><tr><th>شاخص</th><th>محدوده</th><th>نکته</th></tr>${REF.map(r => `<tr><td>${r[0]}</td><td dir="ltr" class="ref__v">${String(r[1]).split(' ').map(x => `<span>${x}</span>`).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</table>
    ${EA.ui.figCard({ a: ['tube', 'cbc'], l: ['خون سانتریفیوژشده', 'نمونه برگه CBC'] })}</div>`;

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
