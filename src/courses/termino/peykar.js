/* تراپو • ترمینو — حیطه «peykar» (Body Structure)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_peykar;
  D.css = ".certbar{width: 100%; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; border: 0; border-radius: 16px; padding: 14px 18px; font-weight: 800; background: linear-gradient(120deg, #2f5fd0, #12a594); color: #fff; box-shadow: 0 4px 0 var(--brand-d); text-align: start;}\n.cert{width: 100%; padding: 10px; background: linear-gradient(135deg, #2f5fd0, #4f5bd5, #d6457a, #e07a1f, #12a594, #7b5ce0); border-radius: 20px;}\n[lang=\"fa\"]{font-family: Vazirmatn, Tahoma, system-ui, sans-serif;}\ntable.ref .ref__v{font-family: Nunito, system-ui, sans-serif; font-weight: 800; white-space: nowrap; text-align: left;}\n.recap{margin: 8px 0 4px; padding: 12px 14px; border-radius: 16px; background: color-mix(in srgb, var(--wc, var(--brand)) 9%, var(--bg)); border: 2px solid color-mix(in srgb, var(--wc, var(--brand)) 35%, var(--line));}\n.recap__h{display: block; font-size: 14px; font-weight: 900; color: color-mix(in srgb, var(--wc, var(--brand)) 80%, var(--text)); margin-bottom: 6px;}\n.recap ul{margin: 0; padding: 0; list-style: none; display: grid; gap: 8px;}\n.recap li{position: relative; padding-inline-start: 24px; font-size: 15px; line-height: 1.8;}\n.recap li::before{content: \"✓\"; position: absolute; inset-inline-start: 2px; top: 0; font-weight: 900; color: var(--green-t);}";
  D.content = function () {
    window.EA.IMG = D.IMG;
/* پیکر — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.APP = { name: 'پیکر', key: 'peykar', title: 'پیکر • ترمینولوژی ساختار بدن' };

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
    name: 'پیکر', key: 'peykar', title: 'پیکر • ترمینولوژی ساختار بدن', certCode: 'PK',
    subject: 'ترمینولوژی پزشکی ساختار بدن',
    kicker: '🧭 ترمینولوژی پزشکی: ساختار بدن (Body Structure)',
    hello: 'سلام، من <b>پیکر</b> هستم؛',
    landP: () => `سلام، من <b>پیکر</b> هستم؛ سلولی با قطب‌نمای بدن! این‌جا یاد می‌گیری بدن چطور از سلول تا دستگاه ساخته شده، هر جای آن را با واژه دقیق نام ببری و هر واژه تازه را خودت <b>رمزگشایی</b> کنی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 65)} تصویر از کتاب‌ها، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'پیکر ابزار آموزشی است و جایگزین منابع آناتومی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها تصویر کتاب و شکل آموزشی؛ از سلول و بافت زیر میکروسکوپ تا صفحه‌های بدن، حفره‌ها و نه ناحیه شکم.',
    outcomes: [
          'هر واژه آناتومی را به پیشوند، ریشه و پسوند بشکنی، جمع لاتین آن را بسازی و منافذ بدن را نام ببری',
          'سطوح سازمان‌یابی بدن، ساختار سلول، DNA، میتوز و متابولیسم را با واژه‌های درست توصیف کنی',
          'چهار بافت اصلی، انواع عضله و اپیتلیوم و غشاهای جداری و احشایی را تشخیص دهی',
          'دوازده دستگاه بدن، اندام‌ها و تخصص‌های پزشکی مربوط به هر کدام را بشناسی',
          'جهت‌ها، صفحه‌ها، حرکت‌ها، وضعیت‌های بیمار و روش‌های تصویربرداری را در پرونده بخوانی',
          'حفره‌ها، نه ناحیه، چهار ربع شکم، ستون مهره‌ها و نواحی سطحی بدن را دقیق نام ببری'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، واژه‌های آناتومی را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من پیکر هستم؛ سلولی که نقشه بدن را بلد است 🧭 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان بدن» بهترین شروع است؛ قطعه‌های واژه‌سازی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'بیمار درد <b dir="ltr">epigastric</b> دارد. درد کجاست؟',
    fig: { a: ['regions9'], l: ['نه ناحیه شکم'] },
    opts: ['بالای شکم، روی معده', 'دور ناف', 'پایین شکم، بالای مثانه', 'پهلوی راست، زیر دنده‌ها'],
    why: `${EA.K.wb('epi-', 'gastr/o', '-ic')}<br><b>epi-</b> = روی، بالای • <b>gastr/o</b> = معده • <b>-ic</b> = مربوط به. یعنی ناحیه <b>بالای معده</b>؛ وسط و بالای شکم. معنی را از پسوند شروع کن!`
  }),
    titles: ['سلول تازه', 'بافت‌شناس کنجکاو', 'اندام کوشا', 'جهت‌یاب', 'برشکار صفحه‌ها', 'نقشه‌خوان شکم', 'رمزگشای ریشه‌ها',
    'استاد حفره‌ها', 'فرمانده سلول‌ها', 'معمار دستگاه‌ها', 'کارآگاه آناتومی', 'سپهسالار پیکر', 'استاد واژه‌سازی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش هماتولوژی'],
    firstBadge: ['🧫', 'اولین سلول'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], og: ['🧬', 'سلول‌شناس'], ts: ['🧵', 'بافت‌باف'], sy: ['🫀', 'معمار دستگاه‌ها'], dr: ['🧭', 'جهت‌یاب'], cv: ['🗺️', 'نقشه‌خوان'] },
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
    return `<svg class="yona peykar yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy}" rx="50" ry="48" fill="#000" opacity=".1"/>
        <ellipse cx="${cx}" cy="${cy - 3}" rx="45" ry="42" fill="var(--c)"/>
        <ellipse cx="${cx}" cy="${cy + 4}" rx="31" ry="27" fill="#000" opacity=".09"/>
        <ellipse cx="${cx}" cy="${cy + 2}" rx="31" ry="26" fill="#fff" opacity=".1"/>
        <path d="M${cx - 34} ${cy - 18} A40 38 0 0 1 ${cx - 8} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
        <circle cx="${cx + 30}" cy="${cy - 26}" r="6" fill="#fff" opacity=".18"/><circle cx="${cx - 30}" cy="${cy + 26}" r="4" fill="#fff" opacity=".18"/><ellipse cx="${cx + 33}" cy="${cy + 2}" rx="5" ry="2.6" fill="#fff" opacity=".2" transform="rotate(-30 ${cx + 33} ${cy + 2})"/>
        <g transform="translate(102 108)"><circle r="16" fill="#FFC800" stroke="#fff" stroke-width="3"/><path d="M0 -10 V10 M-10 0 H10" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><path d="M0 -10 l-3 4 h6z" fill="#fff"/></g>
        <path class="negar-spark" d="M100 18 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }
  };
})(window);
/* پیکر — واژه‌ها (ساخته‌شده خودکار با tools/merge_data.py؛ دستی ویرایش نکنید)
 * [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارها] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [
    ["abdominal cavity", "ab-DOM-ih-nal", "The cavity beneath the thoracic cavity that is separated from the thoracic cavity by the diaphragm; contains the liver, gallbladder, spleen, stomach, pancreas, intestines, and kidneys.", "حفره شکمی", "cv", "", []],
    ["abdominopelvic cavity", "ab-dom-i-nō-PEL-vik", "The abdominal and pelvic cavities together; not separated by a wall.", "حفره شکمی-لگنی", "cv", "", []],
    ["abduction", "", "Movement away from the midline of the body", "دورشدن (آبداکشن / حرکت دور از خط میانی)", "dr", "", []],
    ["adduction", "", "Movement toward the midline of the body", "نزدیک‌شدن (آداکشن / حرکت به سمت خط میانی)", "dr", "", []],
    ["adhesion", "ăd-HĒ-zhŭn", "Band of scar tissue binding anatomical surfaces that are normally separate from each other", "چسبندگی", "ts", "", []],
    ["adipocyte", "", "Fat cell that contains large vacant spaces for fat storage.", "آدیپوسیت (سلول چربی)", "og", "", []],
    ["adipose", "AD-ih-pohs", "Connective tissue that provides protective padding around body structures", "بافت چربی", "ts", "", []],
    ["anabolism", "", "To build up.", "آنابولیسم (فرایند سازنده)", "og", "", []],
    ["anatomical position", "", "A standard position where the body is standing erect, arms by the side, with head, palms, and feet facing forward.", "وضعیت آناتومیک", "dr", "", []],
    ["anatomy", "ah-NAT-oh-mee", "The study of how the human body is constructed; reveals the \"what it is\". Comes from the Greek word anatome, which means \"dissection\"", "آناتومی (کالبدشناسی)", "og", "", []],
    ["antecubital", "an-tē-KYŪ-bi-tal", "In front of the elbow (the bend of the elbow).", "جلوی آرنج (آنته‌کوبیتال)", "cv", "", []],
    ["anterior", "an-TEE-ree-or", "Toward the front of the body, organ, or structure", "قدامی (شکمی)", "dr", "", []],
    ["anteroposterior", "ăn-tĕr-ō-pōs-TĒR-ē-or", "Pertaining to the front and back of the body or passing from the front to the back of the body", "قدامی-خلفی", "dr", "", []],
    ["anus", "ey-nuh-s", "The opening at the end of the digestive tract for defecation.", "مقعد", "lx", "", []],
    ["aperture", "ap-er-chur", "an opening or orifice", "منفذ، سوراخ یا روزنه", "lx", "", []],
    ["appendix / appendices", "ah-pen-diks / ah-pen-dises", "singular / plural", "آپاندیس (مفرد/جمع)", "lx", "", []],
    ["artery / arteries", "ar-ter-e / ar-ter-es", "singular / plural", "شریان یا سرخرگ (مفرد/جمع)", "lx", "", []],
    ["ATP", "ah-DEN-o-sene tri-FOS-fate", "The energy compound of the cell that stores energy needed for cell activities", "آدنوزین تری‌فسفات (ترکیب انرژی سلول)", "og", "", ["ATP"]],
    ["auricular region", "", "Around the ears", "ناحیه گوشی", "cv", "", []],
    ["axillary", "", "Axillae (armpits)", "ناحیه زیربغلی", "cv", "", []],
    ["biceps brachii", "BYE-seps BRAY-kee-eye", "A muscle located on top of the upper arm that flexes the lower arm by pulling on the bones of the forearm", "عضله دوسر بازویی", "ts", "", []],
    ["biology", "", "The study of all forms of life and living things.", "بیولوژی (زیست‌شناسی)", "og", "", []],
    ["biopsy", "BĪ-op-sē", "Removal and examination of living tissue to determine a diagnosis.", "بیوپسی (نمونه‌برداری از بافت زنده)", "og", "", []],
    ["body cavity", "kav-i-te", "a hollow place or space, or a potential space, within the body or one of its organs", "حفره", "cv", "", []],
    ["body plane", "", "Imaginary flat surfaces that divide (used in anatomic diagrams).", "صفحات بدن", "dr", "", []],
    ["brachial", "BRĀ-kē-al", "Pertaining to the arm.", "بازویی", "cv", "", []],
    ["buccal", "", "Cheeks of the face", "ناحیه گونه‌ای", "cv", "", []],
    ["bursa / bursae", "ber-sah / bur-sae", "singular / plural", "کیسه زلالی مفصل (مفرد/جمع)", "lx", "", []],
    ["canal (alimentary)", "kah-nal", "the musculomembranous digestive tube extending from the mouth to the anus", "مجرای گوارشی (لوله‌ای عضلانی-غشایی از دهان تا مقعد)", "lx", "", []],
    ["carbohydrates", "kar-bo-HI-drates", "The category of organic compounds that includes sugars and starches", "کربوهیدرات‌ها", "og", "", []],
    ["carcinogen", "", "Agent causing cancer", "عامل سرطان‌زا (کارسینوژن)", "og", "", []],
    ["carcinogenic", "", "Has cancer-causing properties", "سرطان‌زا (کارسینوژنیک)", "og", "", []],
    ["carcinoma / carcinomata", "kahr-si-no-mah / kahr-si-no-ma-ta", "singular / plural", "کارسینوم یا سرطان بافت پوششی (مفرد/جمع)", "lx", "", []],
    ["cardiac muscle", "KAR-dē-ak", "Involuntary striated muscle found only in the heart.", "عضله قلبی", "ts", "", []],
    ["cardiology", "kar-dee-ALL-oh-jee", "The medical specialty associated with the cardiovascular system", "قلب و عروق (کاردیولوژی)", "sy", "", []],
    ["cardiovascular system", "kar-de-o-vas-ku-lar sis-tem", "System includes the heart and blood vessels, which pump and transport blood throughout the body.", "سیستم قلبی‌عروقی", "sy", "", []],
    ["carpal", "", "Wrist", "مچ دست", "cv", "", []],
    ["cartilage", "KAR-tih-lij", "Connective tissue that acts as a shock absorber in joints", "غضروف", "ts", "", []],
    ["catabolism", "", "To break down.", "کاتابولیسم (فرایند مخرب)", "og", "", []],
    ["caudal", "KAW-dul", "pertaining to the tail; below or toward the feet", "کودال (تحتانی)", "dr", "", []],
    ["cell", "sel", "Minute protoplasmic masses making up organized tissue, consisting of the nucleus surrounded by cytoplasm enclosed in a cell or plasma membrane. Fundamental, structural, and functional unit of living organisms.", "سلول‌ها", "og", "", []],
    ["cell membrane", "sel mem-bran", "A thin layer of tissue serving as the wall of a cell; selectively allows substances to pass in and out of the cell and refuses passage to others.", "غشاء", "og", "", []],
    ["cephalic", "se-FAL-ik", "relating to the head; toward the head", "سری (به سمت سر)", "dr", "", []],
    ["cervical region", "SUR-vi-kuhl", "Region of the spinal column located in the neck", "ناحیه گردنی", "cv", "", []],
    ["chromosome", "kroh-moh-sohms", "Thread-like structures in the cell nucleus that control growth, repair, and reproduction of the body.", "کروموزوم", "og", "", []],
    ["clavicular", "", "On each side of the suprasternal notch", "ناحیه ترقوه‌ای", "cv", "", []],
    ["coccygeal region", "kok-SIJ-ee-uhl", "Region of the spinal column; tailbone", "دنبالچه‌ای (کوکسیژیال)", "cv", "", []],
    ["computed tomography scan", "kŏm-PŪ-tĕd tō-MŎG-ră-fē", "Narrow beam of x-rays with a contrast medium (provides more detail) or without a contrast medium that targets a specific organ or body area to produce multiple cross-sectional images for detecting pathological conditions such as tumors or metastases", "سی‌تی اسکن (توموگرافی کامپیوتری)", "dr", "", ["CT"]],
    ["connective tissue", "ko-nek-tiv tish-u", "The fibrous tissue of the body that binds together and is the ground substance of the various parts and organs of the body; examples are bones, tendons, and so on.", "بافت همبند", "ts", "", []],
    ["constriction", "kon-strik-shun", "making something narrow; to contract; to close (an opening)", "تنگی، انقباض، باریک شدن", "lx", "", []],
    ["contralateral", "kon-tra-LAT-er-al", "Pertaining to the opposite side of the body.", "سمت مقابل", "dr", "", []],
    ["cranial", "", "relating to the head; toward the head", "جمجمه‌ای (به سمت سر)", "dr", "", []],
    ["cranial cavity", "KRAY-nee-al", "The cavity inside the skull, or the cranium, contains the brain.", "حفره جمجمه‌ای", "cv", "", []],
    ["crisis / crises", "kri-sis / kri-ses", "singular / plural", "بحران (مفرد/جمع)", "lx", "", []],
    ["cytologist", "", "Physician who studies cells", "سلول‌شناس (سیتولوژیست)", "og", "", []],
    ["cytology", "sigh-TALL-oh-jee", "The study of cells and their functions", "سلول‌شناسی", "og", "", []],
    ["cytoplasm", "SIGH-toh-plazm", "The protoplasm of a cell exclusive of that of the nucleus (nucleoplasm).", "سیتوپلاسم", "og", "", []],
    ["cytosis", "", "Abnormal condition of cells", "وضعیت غیرطبیعی سلول‌ها (سیتوز)", "og", "", []],
    ["deep", "dēp", "Away from the surface of the body.", "عمقی", "dr", "", []],
    ["dermatology", "der-mah-TALL-oh-jee", "The medical specialty associated with the integumentary system (skin)", "پوست‌شناسی (درماتولوژی)", "sy", "", []],
    ["diagnosis / diagnoses", "di-ag-no-sis / di-ag-no-sez", "singular / plural", "تشخیص (مفرد/جمع)", "lx", "", []],
    ["diaphragm", "DYE-ah-fram", "A physical wall and muscle used for breathing that separates the thoracic cavity and the abdominopelvic cavity", "دیافراگم", "cv", "", []],
    ["dietetic technician, registered", "", "Works as a member of the food service, management, and healthcare team independently or in consultation with a registered dietitian. Supervises support staff, monitors cost control procedures...", "تکنسین رژیم‌شناسی ثبت‌شده", "sy", "", ["DTR"]],
    ["digestive system", "gas-tro-in-tes-ti-nal sis-tem", "A long tube commonly called the GI tract; consists of mouth, esophagus, stomach, and intestines; accessory organs are pancreas, liver, gallbladder, and salivary glands.", "سیستم گوارشی", "sy", "", []],
    ["dilatation, dilation", "dil-ah-ta-shun, di-la-shun", "stretched beyond normal dimensions; the widening of something, expansion, opening", "اتساع، گشاد شدن", "lx", "", []],
    ["distal", "DIS-tal", "Farthest from the point of attachment to the trunk; farthest from the point of origin.", "دیستال (دور از مبدأ)", "dr", "", []],
    ["diverticulum / diverticula", "di-ver-tik-u-lum / di-ver-tik-u-la", "singular / plural", "دیورتیکول یا کیسه کوچک در دیواره مجرا (مفرد/جمع)", "lx", "", []],
    ["DNA", "de-ok-se-ri-bo-nu-KLE-ik", "Deoxyribonucleic acid, the chemical that regulates the activities of the cell.", "دی‌ان‌ای (دئوکسی‌ریبونوکلئیک اسید)", "og", "", ["DNA"]],
    ["dorsal", "pos-TEER-ee-or", "toward the back or upper surface", "خلفی (پشتی)", "dr", "", []],
    ["dorsal cavity", "DOR-sal KAH-vih-tee", "The posterior cavity at the back of the body, subdivided into the cranial and vertebral cavities.", "حفره پشتی (دورسال)", "cv", "", []],
    ["dorsal recumbent position", "DOR-sal rē-KUM-bent", "Lying on the back with knees bent and feet flat on the table.", "وضعیت خوابیده به پشت با زانوی خم", "dr", "", []],
    ["dorsum", "", "Top of the foot.", "پشت پا (دورسال)", "dr", "", []],
    ["ear canal", "kah-nal", "The passage from the outer ear to the eardrum; used in the sense of hearing.", "مجرای گوش", "lx", "", []],
    ["embryology", "", "Studies the origin (beginnings) and the development of an organism. Covers from the 2nd to the 8th week after conception.", "جنین‌شناسی (امبریولوژی)", "og", "", []],
    ["endocrine system", "en-do-krin sis-tem", "Glands and other structures that make hormones and release them directly into the circulatory system; ductless glands.", "سیستم غدد درون‌ریز", "sy", "", []],
    ["endocrinology", "en-doh-krin-ALL-oh-jee", "The medical specialty dealing with the endocrine system", "غدد درون‌ریز (اندوکرینولوژی)", "sy", "", []],
    ["endoscopy", "ĕn-DŎS-kō-pē", "Visual examination of the interior of organs and cavities with a specialized lighted instrument called an endoscope", "آندوسکوپی (درون‌بینی)", "dr", "", []],
    ["enzyme", "EN-zime", "An organic substance that speeds the rate of a metabolic reaction", "آنزیم", "og", "", []],
    ["epigastric region", "ep-ih-GAS-trick", "The middle upper region of the abdominopelvic area, upon the stomach.", "ناحیه اپی‌گاستریک (بالای معده)", "cv", "", []],
    ["epithelial cell", "", "Skin cell that may be square and flat.", "سلول پوششی (اپیتلیال)", "og", "", []],
    ["epithelial tissue", "ep-ih-THEE-lee-um", "Found in the skin and in the lining of blood vessels, making up the outer covering of external and internal body surfaces.", "بافت پوششی (اپیتلیوم)", "ts", "", []],
    ["epithelioma", "", "Tumor of the skin", "تومور پوستی (اپیتلیوما)", "ts", "", []],
    ["erect", "", "Standing position.", "ایستاده (قائم)", "dr", "", []],
    ["erythrocyte", "", "Red blood cell", "گلبول قرمز (اریتروسیت)", "og", "", []],
    ["extension", "ek-STEN-shun", "Straightening a joint so the angle between the bones increases.", "اکستنشن (باز کردن)", "dr", "", []],
    ["external", "", "Outside, exterior to", "خارجی (بیرونی)", "dr", "", []],
    ["femoral", "FEM-or-al", "Pertaining to the thigh (femur).", "رانی", "cv", "", []],
    ["femur / femora", "fe-mo-ris / fe-mo-ra", "singular / plural", "رانی (مفرد/جمع)", "lx", "", []],
    ["fetus", "", "The developing organism after eight weeks.", "جنین (بعد از هفته هشتم)", "og", "", []],
    ["fibroma / fibromata", "fi-bro-mah / Fi-bro-ma-ta", "singular / plural", "فیبروم یا تومور بافت همبند (مفرد/جمع)", "lx", "", []],
    ["fibrosis", "", "Condition of the fibrous tissue", "فیبروز (بیماری بافت فیبری/همبند)", "ts", "", []],
    ["flexion", "FLEK-shun", "Bending a joint so the angle between the bones decreases.", "فلکشن (خم کردن)", "dr", "", []],
    ["fluoroscopy", "floo-or-ŎS-kō-pē", "Radiographic procedure that uses a fluorescent screen instead of a photographic plate to produce a visual image from x-rays that pass through the patient, resulting in continuous imaging of the motion of internal structures and immediate serial images", "فلوروسکوپی", "dr", "", []],
    ["foramen", "for-ra-men", "a natural opening or passage, especially one into or through a bone", "سوراخ یا منفذ (مفرد/جمع)", "lx", "", []],
    ["Fowler position", "FOW-ler", "Semi-sitting position with the head of the bed raised; promotes lung expansion when breathing is difficult.", "وضعیت فاولر (نیمه‌نشسته)", "dr", "", []],
    ["frontal plane", "KOR-eh-nal", "A vertical, lengthwise plane running from side to side that divides the body into front and back portions", "صفحه کرونال (تاجی)", "dr", "", []],
    ["gamete", "", "Sex cell; two types only: sperm and egg.", "گامت (سلول جنسی)", "og", "", []],
    ["gastroenterology", "gas-troh-en-ter-ALL-oh-jee", "The medical specialty associated with the digestive system", "گوارش‌شناسی (گاستروانترولوژی)", "sy", "", []],
    ["gene", "jene", "A hereditary unit composed of DNA and combined with other genes to form the chromosomes", "ژن", "og", "", []],
    ["genitourinary system", "jen-i-to-u-re-ner-e sis-tem", "Reproductive and urinary organs, also called urogenital system (GU or UG).", "سیستم ادراری‌تناسلی", "sy", "", []],
    ["genupectoral", "", "Kneeling with chest resting on examining table.", "وضعیت ژنوپکتورال (سجده‌ای)", "dr", "", []],
    ["glucose", "GLU-kose", "A simple sugar that circulates in the blood, the main energy source for metabolism", "گلوکز", "og", "", []],
    ["gluteal", "GLŪ-tē-al", "Pertaining to the buttocks.", "سرینی", "cv", "", []],
    ["gynecology", "gigh-neh-KALL-oh-jee", "The medical specialty associated with the female reproductive system", "زنان و زایمان (ژینِکولوژی)", "sy", "", []],
    ["hematology", "hee-mah-TALL-oh-jee", "The medical specialty associated with the blood (hematic system)", "خون‌شناسی (هماتولوژی)", "sy", "", []],
    ["hiatus", "hi-a-tus", "a gap, cleft, or opening", "شکاف، بریدگی یا رخنه", "lx", "", []],
    ["hidropoiesis", "hid-roh-poi-ee-sis", "refers to the production of sweat", "تولید عرق", "lx", "", []],
    ["histologist", "hiss-TOL-oh-jist", "Someone who specializes in the study of tissues", "بافت‌شناس", "og", "", []],
    ["histology", "hiss-TALL-oh-jee", "Studies the body microscopically — the minute structures and their composition, plus the functions of normal cells, tissue, and organs.", "بافت‌شناسی", "og", "", []],
    ["homeostasis", "ho-me-o-sta-sis", "A steady state: the tendency of stability in the normal physiologic systems of the organism to maintain a balance optimal for survival.", "هومئوستاز (تعادل پایا)", "og", "", []],
    ["hydrencephalomeningocele", "hi-dren-cefal-o-men-in-jo-sel", "refers to herniation of brain substance and meninges caused by a defect, with accumulation of cerebrospinal fluid along with brain substance in the sac", "فتق بافت مغزی و مننژ همراه با تجمع مایع مغزی-نخاعی", "lx", "", []],
    ["hypochondriac region", "high-poh-KON-dree-ack", "The two regions just below the cartilage of the ribs, immediately over the abdomen.", "نواحی هیپوکندری (زیر دنده‌ای)", "cv", "", []],
    ["hypogastric region", "high-poh-GAS-trick", "Middle section in the lower row; just inferior to the umbilical section", "ناحیه هیپوگاستریک (زیرمعده)", "cv", "", []],
    ["immunology", "im-yoo-NALL-oh-jee", "The medical specialty associated with the lymphatic system and body protection", "ایمنی‌شناسی (ایمونولوژی)", "sy", "", []],
    ["in situ", "in SĪ-too", "In its original place; not spread.", "در محل اصلی", "og", "", []],
    ["in vitro", "in VĒ-trō", "In the laboratory; literally “in glass”.", "در آزمایشگاه (درون شیشه)", "og", "", []],
    ["in vivo", "in VĒ-vō", "Within the living body.", "درون بدن زنده", "og", "", []],
    ["inferior", "in-FEER-ee-or", "More toward feet or tail or below another structure", "تحتانی (پایینی)", "dr", "", []],
    ["inflammation", "ĭn-flă-MĀ-shun", "Protective response of body tissues to irritation, infection, or allergy", "التهاب", "ts", "", []],
    ["infraorbital", "", "Below the eyes", "زیرچشمی", "cv", "", []],
    ["infrascapular", "", "On each side of the chest, down to the last rib", "زیرکتفی", "cv", "", []],
    ["inguinal region", "ING-gwih-nal or ILL-ee-ack", "Right and left lower regions of the abdominopelvic area.", "نواحی ایلیاک (تهیگاهی چپ و راست)", "cv", "", []],
    ["integumentary system", "in-teg-u-men-ter-e sis-tem", "Skin serves as the external covering of the body; accessory organs of this system are nails, hair, and oil and sweat glands.", "سیستم پوششی", "sy", "", []],
    ["internal", "", "Within, interior to", "داخلی (درونی)", "dr", "", []],
    ["interscapular", "", "On the back, between scapulae (shoulder blades)", "بین‌کتفی", "cv", "", []],
    ["intradermal", "in-tra-DER-mal", "Within the skin (dermis); an injection given just under the epidermis.", "داخل پوستی", "lx", "", []],
    ["intramuscular", "in-tra-MUS-kyū-lar", "Within a muscle.", "داخل عضلانی", "lx", "", []],
    ["intrathecal", "in-tra-THĒ-kal", "Within the spinal canal (the space around the spinal cord).", "داخل نخاعی (داخل غلاف)", "lx", "", []],
    ["intravenous", "in-trah-VEE-nus", "Injection into veins", "داخل وریدی", "lx", "", []],
    ["introitus", "in-tro-itus", "opening or entrance to a canal or cavity such as the vagina", "مدخل، دهانه ورودی یک مجرا", "lx", "", []],
    ["ipsilateral", "", "Pertains to one side.", "ایپسی‌لترال (هم‌طرف/هم‌سویه)", "dr", "", []],
    ["karyotype", "KAR-ē-ō-tīp", "A picture of a person’s chromosomes arranged in pairs by size.", "کاریوتایپ (نقشه کروموزوم‌ها)", "og", "", []],
    ["knee-chest position", "", "Kneeling with the chest resting on the table (genupectoral); facilitates rectal examination.", "وضعیت زانو-سینه", "dr", "", []],
    ["lateral", "LAT-er-al", "Means to the side, as the eyes are to the nose.", "لترال (جانبی)", "dr", "", []],
    ["lateral recumbent", "", "Lying on left side with right thigh and knee drawn up to chest.", "خوابیده به پهلو (لترال رکامبنت)", "dr", "", []],
    ["lateromedial", "", "Beginning from the side and going toward the middle.", "لترومدیال (از خارج به سمت مرکز)", "dr", "", []],
    ["ligament", "LIG-a-ment", "Band of connective tissue that connects bone to bone.", "رباط", "ts", "", []],
    ["lipid", "LIP-id", "A category of organic compounds that includes fats", "لیپید (چربی)", "og", "", []],
    ["liposuction", "", "Removal of fat cells by suction", "لیپوساکشن (تخلیه چربی)", "ts", "", []],
    ["lithotomy position", "lith-OT-ō-mē", "Lying on the back with hips and knees flexed and feet in stirrups; used for pelvic examination and Pap test.", "وضعیت لیتوتومی", "dr", "", []],
    ["lumbar region", "LUM-bar", "The left and right regions of the body in the back and sides between the lowest ribs and the pelvis.", "کمری", "cv", "", []],
    ["lumen", "loo-men", "opening within a hollow tube or organ", "لومن یا مجرا (مفرد/جمع)", "lx", "", []],
    ["lymphatic system", "lim-fa-tik sis-tem", "System includes the lymph, the glands and vessels of the lymphatic system, and the nonspecific and specific defense immune system.", "سیستم لنفاوی", "sy", "", []],
    ["magnetic resonance imaging", "măg-NĔT-ĭc RĔZ-ĕn-ăns ĬM-ĭj-ĭng", "Radiographic technique that uses electromagnetic energy to produce multiplanar cross-sectional images of the body", "تصویربرداری تشدید مغناطیسی (ام‌آر‌آی)", "dr", "", ["MRI"]],
    ["mammary", "", "Breast area", "پستانی", "cv", "", []],
    ["meatus", "me-a-tus", "urinary passage or opening", "مجرای خروجی (مانند مجرای ادرار)", "lx", "", []],
    ["medial", "MEE-dee-al", "Refers to middle or near middle of body or structure", "مدیال (میانی)", "dr", "", []],
    ["mediastinum", "mee-dee-as-TYE-num", "The mass of tissues and organs separating the sternum in front and the vertebral column behind, containing the heart and its large vessels.", "مدیاستینوم (میان‌سینه)", "cv", "", []],
    ["mediolateral", "", "Pertaining to the middle and one side.", "مدیولترال (از مرکز به سمت خارج)", "dr", "", []],
    ["meiosis", "mī-Ō-sis", "Cell division that halves the number of chromosomes; it forms the sex cells (ovum and sperm).", "میوز (تقسیم کاهشی)", "og", "", []],
    ["meninx / meninges", "me-ninks / me-nin-ges", "singular / plural", "پرده مننژ (مفرد/جمع)", "lx", "", []],
    ["mental", "", "Region of the chin", "چانه‌ای", "cv", "", []],
    ["metabolism", "me-tab-o-lizm", "Sum of the body's physical and chemical processes that convert food into elements for body growth, energy, building body parts (anabolism), and degrading body substances for recycling or excretion (catabolism).", "متابولیسم (سوخت‌وساز)", "og", "", []],
    ["midsagittal plane", "mid-SAJ-ih-tal", "A sagittal plane that passes through the middle of the body, dividing it into equal right and left halves", "صفحه میدساژیتال", "dr", "", []],
    ["midsagittal section", "", "A sagittal section that divides the body into equal right and left portions.", "برش میدساژیتال (سهمی میانی)", "dr", "", []],
    ["mitochondrion", "", "Generate energy for the cell", "میتوکندری", "og", "", []],
    ["mitosis", "mi-TO-sis", "Cell division", "میتوز (تقسیم غیرمستقیم سلولی)", "og", "", []],
    ["mouth", "mouth", "The opening for eating, breathing and speaking (vocalization).", "دهان", "lx", "", []],
    ["mucus", "MU-kus", "A thick fluid secreted by cells in membranes and glands that lubricates and protects tissues", "مخک (مخلوط مخاطی)", "ts", "", []],
    ["muscle cell", "", "Long and slender cell.", "سلول عضلانی", "og", "", []],
    ["muscle tissue", "mus-el tish-u", "Tissue that contracts; consists of striated (striped), cardiac, and smooth muscle.", "بافت عضلانی", "ts", "", []],
    ["musculoskeletal system", "mus-ku-lo-skel-e-tal sis-tem", "The system that supports the body; protects organs; provides body movement; and includes muscles, bones, and cartilage.", "سیستم اسکلتی‌عضلانی", "sy", "", []],
    ["myoma", "", "Tumor in the muscle", "تومور عضلانی (میوما)", "ts", "", []],
    ["myosarcoma", "", "Malignant muscle tumor", "تومور بدخیم عضلانی (میوسارکوما)", "ts", "", []],
    ["myositis", "", "Inflammation of a muscle", "التهاب عضله (میوزیت)", "ts", "", []],
    ["nares (nostril)", "nair-eez", "breathing; sense of smell", "سوراخ بینی", "lx", "", []],
    ["nasal", "", "Nose", "ناحیه بینی", "cv", "", []],
    ["nasolacrimal duct", "ney-zoh-lak-ruh-muh-l duhkt", "carries tears from the lacrimal sac into the nasal cavity", "مجرای اشکی-بینی", "lx", "", []],
    ["neoplasm", "", "A new growth", "رشد جدید / تومور (نئوپلاسم)", "og", "", []],
    ["nephrology", "neh-FROL-oh-jee", "The medical specialty dealing with the kidneys", "نفرولوژی (بیماری‌های کلیه)", "sy", "", []],
    ["nerve cell", "", "Cell that may be long and have fingerlike extensions, which carry impulses.", "سلول عصبی (نورون)", "og", "", []],
    ["nervous system", "ner-vus sis-tem", "Brain and spinal cord make up the central nervous system (CNS); the autonomic nervous system (ANS) or the peripheral nervous system consists of 12 pairs of cranial nerves and 31 pairs of spinal nerves.", "سیستم عصبی", "sy", "", []],
    ["nervous tissue", "nerv tish-u", "A collection of nerve fibers that conduct impulses that control and coordinate body activities.", "بافت عصبی", "ts", "", []],
    ["neurology", "noo-RALL-oh-jee", "The medical specialty dealing with the nervous system", "مغز و اعصاب (نورولوژی)", "sy", "", []],
    ["neuron", "NOOR-on", "Nerve cell; the functional cell of the nervous system.", "نورون (سلول عصبی)", "ts", "", []],
    ["neuropathy", "", "Condition of the nerve / A disease of the nerves", "بیماری عصبی (نوروپاتی)", "ts", "", []],
    ["nipple", "nip-uh-l", "The projection on the breast through which milk is carried to the infant.", "نوک پستان", "lx", "", []],
    ["nuclear scan", "NŪ-klē-ăr", "Diagnostic technique that produces an image of an organ or area by recording the concentration of a radiopharmaceutical substance called a tracer, usually introduced into the body by ingestion, inhalation, or injection", "اسکن هسته‌ای", "dr", "", []],
    ["nucleus", "nu-kli-us / nu-clei", "The cell's control center; directs all cellular activities based on the information contained in its chromosomes", "هسته", "og", "", []],
    ["occipital", "", "Lower posterior head", "پس‌سری", "cv", "", []],
    ["oral", "OR-al", "Pertaining to the mouth; a drug route taken by swallowing.", "دهانی، خوراکی", "lx", "", []],
    ["orbital", "", "Around the eyes", "چشمی", "cv", "", []],
    ["organ", "or-gan", "Tissues arranged together to perform a specific function; these internal structures are contained within the body cavities.", "اندام (عضو)", "og", "", []],
    ["organelle", "OR-gah-nel", "A specialized structure in the cytoplasm of a cell", "اندامک", "og", "", []],
    ["organism", "", "The body as a whole", "ارگانیسم (موجود زنده)", "og", "", []],
    ["organomegaly", "", "Enlargement of an organ", "بزرگ‌شدگی اندام (ارگانومگالی)", "og", "", []],
    ["orifice", "or-i-fis", "any orifice such as the anal orifice", "منفذ (مانند سوراخ مقعد)", "lx", "", []],
    ["orthopedics", "or-thoh-PEE-diks", "The medical specialty associated with the musculoskeletal system", "ارتوپدی (استخوان و مفاصل)", "sy", "", []],
    ["os", "os", "mouth opening: os uteri: mouth of the uterus or cervix", "دهانه (مانند دهانه رحم)", "lx", "", []],
    ["otorhinolaryngology", "oh-toh-rye-noh-lair-in-GALL-oh-jee", "The medical specialty treating conditions of the ear, nose, and throat", "گوش، حلق و بینی (ENT)", "sy", "", []],
    ["ovary / ovaries", "o-var-e / o-var-es", "singular / plural", "تخمدان (مفرد/جمع)", "lx", "", []],
    ["ovum / ova", "o-vum / o-va", "singular / plural", "تخمک (مفرد/جمع)", "lx", "", []],
    ["palpate", "pal-peyt", "Touch; the examination or exploring by touching (an organ or area of the body), usually as a diagnostic aid.", "لمس کردن (معاینه لمسی)", "lx", "", []],
    ["palpebrate", "pal-pee-brit", "Blink or wink.", "پلک زدن یا چشمک زدن", "lx", "", []],
    ["palpitate", "pal-pi-teyt", "Pulsate, quiver, throb, tremble.", "تپیدن، لرزیدن، تپش داشتن", "lx", "", []],
    ["parenteral", "par-EN-ter-al", "An invasive method of administering drugs as it requires skin to be punctured by a needle", "تزریقی (پارانترال)", "lx", "", []],
    ["parietal", "", "Pertaining to the outer wall of a cavity", "جداری (پاریتال)", "ts", "", []],
    ["paronychia", "par-uh-nik-ee-uh", "Infection of the nail; refers to inflammation of the epidermis (folds of skin) bordering a nail of a finger or toe, usually characterized by infection and pus formation.", "پارونیشیا (عفونت بافت اطراف ناخن/عقربک)", "lx", "", []],
    ["patellar", "pa-TEL-ar", "Pertaining to the kneecap.", "کشککی (زانو)", "cv", "", []],
    ["patent", "pa-tent", "adjective, meaning open or not plugged, as in \"the tube is patent\"", "باز، مسدود نشده (پاتنت)", "lx", "", []],
    ["pathology", "", "Studies the changes caused by disease to the structures of the body or changes due to disease that alter the functions of the body.", "آسیب‌شناسی (پاتولوژی)", "og", "", []],
    ["pectoral", "", "Chest", "سینه‌ای", "cv", "", []],
    ["pelvic cavity", "PEL-vick", "Contains the urinary bladder, urethra, part of the large intestine, and the rectum, uterus, and vagina in the female, and prostate in the male.", "حفره لگنی", "cv", "", []],
    ["perforation", "per-fo-ra-shun", "a hole in something, e.g., perforation of the stomach wall by a gastric ulcer", "سوراخ‌شدگی، پرفوراسیون", "lx", "", []],
    ["pericardial cavity", "per-i-KAR-dē-al", "Space surrounding the heart.", "حفره پریکارد (دور قلب)", "cv", "", []],
    ["perionychium", "per-ee-oh-nik-ee-uhm", "Structure that surrounds the nail; refers to the epidermis surrounding the base and sides of a fingernail or toenail.", "پری‌اونیکیوم (بافت اطراف ناخن)", "lx", "", []],
    ["peritoneal cavity", "per-i-to-ne-al kav-i-te", "The space containing the stomach, intestines, liver, gallbladder, pancreas, spleen, reproductive organs, and urinary bladder.", "حفره صفاقی (پریتونئال)", "cv", "", []],
    ["peritoneum", "pair-ih-toh-NEE-um", "A two-layer membrane that lines the abdominopelvic cavity and encases the viscera", "صفاق (پریتونئوم)", "ts", "", []],
    ["phalanx / phalanges", "fa-lanks / fa-lan-ges", "singular / plural", "بند انگشت (مفرد/جمع)", "lx", "", []],
    ["physiology", "fiz-ee-OL-oh-jee", "The study of how the body's parts work together; reveals the \"how it works\"", "فیزیولوژی", "og", "", []],
    ["plantar", "", "Bottom of the foot; sole of the foot.", "کف پایی (پلانتار)", "dr", "", []],
    ["pleura", "PLOO-rah", "A two-layer membrane that lines the thoracic cavity and encases the viscera", "جنب (پلورا)", "ts", "", []],
    ["pleural cavity", "pleu-ral kav-i-te", "The thoracic cavity containing the lungs, trachea, esophagus, and thymus gland.", "حفره پلورال (جنبی)", "cv", "", []],
    ["popliteal", "", "Behind the knee", "پشت زانو", "cv", "", []],
    ["positron emission tomography scan", "PŎZ-ĭ-trŏn ē-MĬSH-ŭn tō-MŎG-ră-fē", "Nuclear imaging study that combines CT with radiopharmaceuticals to produce a cross-sectional image of radioactive dispersements in a section of the body to reveal the areas where the radiopharmaceutical is being metabolized and where there is a deficiency in metabolism; useful in evaluating Alzheimer disease and epilepsy", "اسکن پت (توموگرافی انتشار پوزیترون)", "dr", "", ["PET"]],
    ["posterior", "poss-TEE-ree-or", "More toward back or spinal cord side of body", "خلفی (پشتی)", "dr", "", []],
    ["postmortem", "pōst-MOR-tem", "After death.", "پس از مرگ", "og", "", []],
    ["prone", "PROHN", "Body is lying horizontally and facing downward", "دمر (پرون)", "dr", "", []],
    ["protein", "PRO-tene", "A category of organic compounds that includes structural materials, enzymes, and some hormones", "پروتئین", "og", "", []],
    ["proximal", "PROCK-sih-mal", "Nearest to the point of attachment to the trunk; nearest the point of origin.", "پروگزیمال (نزدیک به مبدأ)", "dr", "", []],
    ["pubic", "", "Below the hypogastric region (above the pubis)", "شرمگاهی", "cv", "", []],
    ["quadrant", "KWOD-rant", "One of four areas of the abdomen formed by two lines crossing at the umbilicus.", "ربع (یک‌چهارم شکم)", "cv", "", []],
    ["radiography", "rā-dē-ŎG-ră-fē", "Production of captured shadow images on photographic film through the action of ionizing radiation passing through the body from an external source", "رادیوگرافی (پرتونگاری)", "dr", "", []],
    ["radiopharmaceutical", "rā-dē-ō-fărm-ă-SŪ-tĭ-kăl", "Drug that contains a radioactive substance, which travels to an area or a specific organ that will be scanned", "رادیودارو", "dr", "", []],
    ["registered dietitians nutritionists", "", "Professionals trained in applying the principles of nutrition to food selection and meal preparation. They help prevent and treat illnesses by promoting healthy eating habits...", "متخصصین تغذیه و رژیم‌درمانی ثبت‌شده", "sy", "", ["RDN"]],
    ["reproductive system", "RĒ-prō-DŬK-tĭv", "The system that controls reproduction and heredity and is either male or female.", "سیستم تولیدمثل", "sy", "", []],
    ["respiratory system", "re-spi-rah-to-re sis-tem", "Includes the trachea, lungs, and bronchi and provides the exchange of gases, absorbs oxygen, and expels carbon dioxide.", "سیستم تنفسی", "sy", "", []],
    ["retroperitoneal", "re-trō-per-i-tō-NĒ-al", "Behind the peritoneum; for example, the kidneys.", "پشت صفاقی", "ts", "", []],
    ["RNA", "ri-bo-nu-KLE-ik", "An organic compound involved in the manufacture of proteins within cells", "آر‌ان‌ای (اسید ریبونوکلئیک)", "og", "", ["RNA"]],
    ["sacral region", "SAY-krahl", "Region of the spinal column located in the lower back", "خاجی", "cv", "", []],
    ["sacrum", "sak-ruhm", "refers to a bone resulting from the fusion of two or more vertebrae between the lumbar and the coccygeal regions in humans being composed usually of five fused vertebrae and forming the posterior wall of the pelvis; it means the area of the tailbone", "استخوان خاجی (ساکروم)", "cv", "", []],
    ["sagittal plane", "SAJ-ih-tal", "A vertical plane that passes from front to back, dividing the body into right and left sides.", "ساژیتال (سهمی)", "dr", "", []],
    ["sarcocele", "sar-ko-sel", "refers to a fleshy tumor or sarcoma of the testis", "سارکوسل (تومور گوشتی بیضه)", "lx", "", []],
    ["scan", "skăn", "Process of using a moving device or a sweeping beam of radiation to produce images of an internal area, organ, or tissue of the body", "اسکن (پویش تصویربرداری)", "dr", "", []],
    ["sensory system", "SĔN-sŏ-rē", "Made up of the eyes, ears, nose, and mouth, along with the nervous system, processes stimuli and allows the body to act and respond.", "سیستم حسی", "sy", "", []],
    ["sepsis", "SĔP-sĭs", "Body's inflammatory response to infection in which there is fever, elevated heart and respiratory rates, and low blood pressure", "سپسیس (عفونت خون)", "ts", "", []],
    ["simple epithelium", "", "Epithelium with a single layer of cells; absorbs and transfers materials.", "اپیتلیوم ساده (تک‌لایه)", "ts", "", []],
    ["Sims position", "SIMZ", "Lying on the left side with the right knee drawn up; used for rectal examination and enema.", "وضعیت سیمز", "dr", "", []],
    ["single-photon emission computed tomography scan", "SĬNG-gŭl FŌ-tŏn ē-MĬ-shŭn cŏm-PŪ-tĕd tō-MŎG-ră-fē", "Nuclear imaging study that scans organs after injection of a radioactive tracer and employs a specialized gamma camera that detects emitted radiation to produce a three-dimensional image from a composite of numerous views; used to show how blood flows to an organ and helps determine how well the organ is functioning", "اسکن اسپکت (توموگرافی کامپیوتری انتشار تک‌فوتون)", "dr", "", ["SPECT"]],
    ["smooth muscle", "", "Involuntary (visceral) muscle in the walls of hollow organs, ducts and vessels.", "عضله صاف", "ts", "", []],
    ["spermatozoon / spermatozoa", "sper-ma-to-zo-on / sper-ma-to-zo-a", "singular / plural", "اسپرماتوزوئید (مفرد/جمع)", "lx", "", []],
    ["spinal cavity", "VER-teh-bral", "The cavity inside the vertebral column, or spine, that contains the spinal cord.", "حفره نخاعی", "cv", "", []],
    ["sternal", "", "Over the sternum", "جناغی", "cv", "", []],
    ["stoma", "sto-mah", "artificial opening established by colostomy, ileostomy, or tracheostomy", "استوما (منفذ مصنوعی جراحی)", "lx", "", []],
    ["strata", "strey-tuh", "plural of stratum, layers, e.g., strata of tissues refer to layers of tissues", "لایه‌ها (جمع استراتوم)", "lx", "", []],
    ["stratified epithelium", "", "Epithelium arranged in several layers; protects deeper tissues.", "اپیتلیوم مطبق (چندلایه)", "ts", "", []],
    ["striae", "strahy-ee", "refers to a slight or narrow furrow, ridge, stripe, or streak, especially one of a number in parallel arrangement", "خطوط، شیارها (مثل ترک‌های پوستی یا استریا)", "lx", "", []],
    ["striated muscle", "STRĪ-āt-ed", "Skeletal (voluntary) muscle with visible bands under the microscope.", "عضله مخطط", "ts", "", []],
    ["subcutaneous", "sub-kyū-TĀ-nē-us", "Beneath the skin, into the fatty layer.", "زیرجلدی", "lx", "", []],
    ["sublingual", "sub-LING-gwal", "Includes drugs held under the tongue and not swallowed", "زیرزبانی", "lx", "", []],
    ["submental", "", "Below the chin", "زیرچانه‌ای", "cv", "", []],
    ["superficial", "sū-pĕr-FĬSH-ăl", "Near the surface of the body.", "سطحی", "dr", "", []],
    ["superior", "soo-PEER-ee-or", "More toward head, or above another structure", "سفالاد (فوقانی)", "dr", "", []],
    ["supine", "soo-PINE", "Body is lying horizontally and facing upward", "طاق‌باز (سوپاین)", "dr", "", []],
    ["supraclavicular", "", "Above the clavicles", "فوق‌ترقوه‌ای", "cv", "", []],
    ["system", "sis-tem", "A set of body organs that work together for a common purpose.", "دستگاه (سیستم)", "og", "", []],
    ["tendon", "TEN-don", "Band of connective tissue that connects muscle to bone.", "تاندون، زردپی", "ts", "", []],
    ["thoracic cavity", "thoh-RAS-ick", "The chest cavity, which contains the lungs, heart, aorta, esophagus, and trachea.", "حفره قفسه سینه", "cv", "", []],
    ["thoracic region", "tho-RASS-ik", "Region of the spinal column located in the chest", "قفسه سینه‌ای (توراسیک)", "cv", "", []],
    ["thorax / thoraces", "thor-aks / thor-a-sez", "singular / plural", "قفسه سینه (مفرد/جمع)", "lx", "", []],
    ["thrombus / thrombi", "throm-bus / throm-bi", "singular / plural", "لخته خون یا ترومبوز (مفرد/جمع)", "lx", "", []],
    ["tissue", "tish-u", "Composed of similar cells working together to perform similar tasks (muscle, connective, nerve, and epithelial)", "بافت", "og", "", []],
    ["tomography", "tō-MŎG-ră-fē", "Radiographic technique that produces a film representing a detailed cross-section of tissue structure at a predetermined depth", "توموگرافی (مقطع‌نگاری)", "dr", "", []],
    ["transverse plane", "trans-vers", "A horizontal (cross-section) plane, parallel to the ground and through the waistline, dividing the body into upper and lower halves.", "ترانسورس (عرضی)", "dr", "", []],
    ["Trendelenburg position", "tren-DEL-en-berg", "The whole table is tilted with the head lower than the feet; used for postural drainage and some surgeries.", "وضعیت ترندلنبرگ (سر پایین)", "dr", "", []],
    ["ultrasonography", "ŭl-tră-sŏn-ŎG-ră-fē", "Imaging technique that uses high-frequency sound waves (ultrasound) that bounce off body tissues and are recorded to produce an image of an internal organ or tissue", "اولتراسونوگرافی (سونوگرافی)", "dr", "", ["US"]],
    ["umbilical region", "um-BILL-ih-cahl", "Middle region in the middle row; contains the umbilicus (navel)", "ناحیه نافی (آمبیلیکال)", "cv", "", []],
    ["umbilicus", "um-BIL-i-kus", "The navel.", "ناف", "cv", "", []],
    ["urinary meatus", "yoor-uh-ner-ee mee-ey-tuhs", "The external opening of the urethra through which urine leaves the body.", "مجرای ادراری", "lx", "", []],
    ["urinary system", "YŪR-ĭ-nār-ē", "The system that includes the kidneys, ureters, bladder, and urethra; it eliminates metabolic waste.", "سیستم ادراری", "sy", "", []],
    ["urology", "yoo-RALL-oh-jee", "The medical specialty dealing with the urinary system and male reproductive system", "اورولوژی (مجاری ادراری و تناسلی)", "sy", "", []],
    ["ventral", "an-TEER-ee-or", "toward the belly or undersurface", "قدامی (شکمی)", "dr", "", []],
    ["ventral cavity", "VEN-tral", "The anterior cavity at the front of the body, subdivided into the thoracic and abdominopelvic cavities.", "حفره شکمی (ونترال)", "cv", "", []],
    ["ventricle", "ven-tri-kul", "a small cavity or chamber, as in the brain or heart", "بطن (حفره‌ای کوچک در قلب یا مغز)", "lx", "", []],
    ["vertebra / vertebrae", "vur-ta-bra / vur-te-bre", "singular / plural", "مهره (مفرد/جمع)", "lx", "", []],
    ["vertebral column", "VER-te-bral", "The spine; a column of vertebrae from the skull to the coccyx.", "ستون مهره‌ها", "cv", "", []],
    ["viscera", "VIS-er-ah", "Internal organs contained within the body cavities.", "احشا (اندام‌های داخلی)", "cv", "", []],
    ["visceral", "VIS-er-al", "Muscle tissue within organs, such as the stomach and intestines", "احشایی", "ts", "", []]
  ];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از data-terms.js (ادغام خودکار همه فایل‌های استخراج‌شده) می‌آیند؛
 * ریشه‌ها و اختصارها از همان داده‌ها گردآوری و دستی پالایش شده‌اند تا تکراری و ناهمسان نباشند.
 * دنیاها: lx زبان بدن (همه واژه‌ها) • og سازمان‌یابی و سلول • ts بافت‌ها و غشاها • sy دستگاه‌ها و اندام‌ها •
 * dr جهت‌ها، صفحه‌ها و وضعیت‌ها • cv حفره‌ها و نواحی • * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['ab-', ['ab'], 'away from', 'دور از', 'dr'],
    ['ad-', ['ad'], 'toward', 'به سمتِ', 'dr'],
    ['ana-', ['ana'], 'up, building up', 'بالا، ساختن', 'og'],
    ['cata-', ['cata'], 'down, breaking down', 'پایین، شکستن', 'og'],
    ['meta-', ['meta'], 'change, beyond', 'تغییر، فراتر', 'og'],
    ['anti-', ['anti'], 'against', 'ضد', '*'],
    ['bi-', ['bi'], 'two', 'دو', '*'],
    ['contra-', ['contra'], 'opposite, against', 'مقابل، مخالف', 'dr'],
    ['ipsi-', ['ipsi'], 'same', 'همان', 'dr'],
    ['dys-', ['dys'], 'bad, painful, difficult', 'بد، دردناک، دشوار', '*'],
    ['endo-', ['endo'], 'within', 'درون', '*'],
    ['epi-', ['epi'], 'upon, above', 'روی، بالای', 'cv'],
    ['ex-, exo-', ['exo', 'ex'], 'out, outside', 'بیرون', '*'],
    ['homeo-', ['homeo'], 'sameness, unchanging', 'یکسان، پایدار', 'og'],
    ['hyper-', ['hyper'], 'excessive, above', 'بیش از حد، بالا', '*'],
    ['hypo-', ['hypo'], 'below, deficient', 'زیر، کم', 'cv'],
    ['in-', ['in'], 'in, into', 'درون، به داخل', 'lx'],
    ['infra-', ['infra'], 'below', 'زیر', 'cv'],
    ['inter-', ['inter'], 'between', 'میان، بین', 'cv'],
    ['intra-', ['intra'], 'within', 'درون', 'lx'],
    ['neo-', ['neo'], 'new', 'نو، تازه', 'og'],
    ['para-', ['para'], 'beside, near, abnormal', 'کنار، نزدیک، غیرعادی', 'lx'],
    ['peri-', ['peri'], 'around', 'پیرامون، اطراف', '*'],
    ['post-', ['post'], 'after, behind', 'پس از، پشت', '*'],
    ['pre-', ['pre'], 'before, in front of', 'پیش از، جلوی', '*'],
    ['retro-', ['retro'], 'behind, backward', 'پشت، عقب', 'ts'],
    ['sub-', ['sub'], 'under, below', 'زیر', 'lx'],
    ['supra-', ['supra'], 'above', 'بالای', 'cv'],
    ['trans-', ['trans'], 'across, through', 'از میان، به آن سو', '*'],
    ['ultra-', ['ultra'], 'beyond, excess', 'فراتر، فرا', 'dr'],
    // سلول، علم و ساختار (og)
    ['cyt/o', ['cyt'], 'cell', 'سلول', 'og'],
    ['kary/o, nucle/o', ['kary', 'nucle'], 'nucleus', 'هسته', 'og'],
    ['hist/o, histi/o', ['histi', 'hist'], 'tissue', 'بافت', 'og'],
    ['bi/o', ['bio'], 'life', 'زندگی، حیات', 'og'],
    ['path/o', ['path'], 'disease', 'بیماری', 'og'],
    ['physi/o', ['physi'], 'nature, function', 'طبیعت، کارکرد', 'og'],
    ['embry/o', ['embry'], 'embryo', 'رویان (جنین اولیه)', 'og'],
    ['morph/o', ['morph'], 'shape, form', 'شکل', 'og'],
    ['somat/o', ['somat', 'soma', 'some'], 'body', 'بدن، پیکر', 'og'],
    ['chrom/o', ['chrom'], 'color', 'رنگ', 'og'],
    ['gen/o', ['gen'], 'origin, producing', 'منشأ، تولید', 'og'],
    ['carcin/o', ['carcin'], 'cancer', 'سرطان', 'og'],
    ['onc/o', ['onc'], 'tumor', 'تومور', 'og'],
    ['organ/o', ['organ'], 'organ', 'اندام', 'og'],
    ['bol/o', ['bol'], 'to throw, cast', 'پرتاب کردن', 'og'],
    ['gluc/o, glyc/o', ['gluc', 'glyc'], 'sugar, glucose', 'قند، گلوکز', 'og'],
    ['prote/o', ['prote'], 'protein', 'پروتئین', 'og'],
    ['phag/o', ['phag'], 'eat, swallow', 'خوردن، بلعیدن', 'og'],
    ['mit/o', ['mit'], 'thread', 'رشته، نخ', 'og'],
    // بافت‌ها و غشاها (ts)
    ['epitheli/o', ['epitheli'], 'epithelium (covering tissue)', 'اپیتلیوم (بافت پوششی)', 'ts'],
    ['fibr/o', ['fibr'], 'fiber', 'رشته، فیبر', 'ts'],
    ['my/o, muscul/o', ['muscul', 'my'], 'muscle', 'عضله', 'ts'],
    ['neur/o', ['neur'], 'nerve', 'عصب', 'ts'],
    ['lip/o, adip/o', ['adip', 'lip'], 'fat', 'چربی', 'ts'],
    ['chondr/o', ['chondr'], 'cartilage', 'غضروف', 'ts'],
    ['oste/o', ['oste'], 'bone', 'استخوان', 'ts'],
    ['tend/o, tendin/o', ['tendin', 'tend'], 'tendon', 'تاندون', 'ts'],
    ['sarc/o', ['sarc'], 'flesh (connective tissue)', 'گوشت (بافت همبند)', 'ts'],
    ['muc/o', ['muc'], 'mucus', 'مخاط', 'ts'],
    ['pleur/o', ['pleur'], 'pleura', 'پرده جنب', 'ts'],
    ['peritone/o', ['peritone'], 'peritoneum', 'صفاق', 'ts'],
    ['pariet/o', ['pariet'], 'wall (of a cavity)', 'دیواره حفره', 'ts'],
    ['viscer/o', ['viscer'], 'internal organs', 'احشا (اندام‌های درونی)', 'ts'],
    ['derm/o, dermat/o, cutane/o', ['dermat', 'derm', 'cutane'], 'skin', 'پوست', 'ts'],
    ['onych/o', ['onych'], 'nail', 'ناخن', 'ts'],
    ['hidr/o', ['hidr'], 'sweat', 'عرق', 'ts'],
    // دستگاه‌ها و اندام‌ها (sy)
    ['cardi/o', ['cardi'], 'heart', 'قلب', 'sy'],
    ['angi/o, vascul/o', ['angi', 'vascul'], 'vessel', 'رگ', 'sy'],
    ['arteri/o', ['arteri'], 'artery', 'سرخرگ', 'sy'],
    ['ven/o, phleb/o', ['ven', 'phleb'], 'vein', 'سیاهرگ', 'sy'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'sy'],
    ['lymph/o', ['lymph'], 'lymph', 'لنف', 'sy'],
    ['immun/o', ['immun'], 'immune, protection', 'ایمنی', 'sy'],
    ['pulmon/o, pneum/o', ['pulmon', 'pneumon', 'pneum'], 'lung', 'ریه', 'sy'],
    ['bronch/o', ['bronch'], 'bronchus', 'نایژه (برونش)', 'sy'],
    ['trache/o', ['trache'], 'trachea (windpipe)', 'نای', 'sy'],
    ['laryng/o', ['laryng'], 'larynx (voice box)', 'حنجره', 'sy'],
    ['pharyng/o', ['pharyng'], 'pharynx (throat)', 'حلق', 'sy'],
    ['rhin/o, nas/o', ['rhin', 'nas'], 'nose', 'بینی', 'sy'],
    ['ot/o', ['ot'], 'ear', 'گوش', 'sy'],
    ['ophthalm/o, ocul/o', ['ophthalm', 'ocul'], 'eye', 'چشم', 'sy'],
    ['encephal/o, cerebr/o', ['encephal', 'cerebr'], 'brain', 'مغز', 'sy'],
    ['mening/o', ['mening'], 'meninges (membranes of brain and spinal cord)', 'مننژ (پرده‌های مغز و نخاع)', 'sy'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', 'نخاع؛ مغز استخوان', 'sy'],
    ['gastr/o', ['gastr'], 'stomach', 'معده', 'sy'],
    ['enter/o', ['enter'], 'small intestine', 'روده باریک', 'sy'],
    ['col/o', ['col'], 'colon (large intestine)', 'روده بزرگ (کولون)', 'sy'],
    ['hepat/o', ['hepat'], 'liver', 'کبد', 'sy'],
    ['esophag/o', ['esophag'], 'esophagus', 'مری', 'sy'],
    ['or/o, stomat/o', ['stomat', 'or'], 'mouth', 'دهان', 'sy'],
    ['gloss/o, lingu/o', ['gloss', 'lingu'], 'tongue', 'زبان', 'sy'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', 'کلیه', 'sy'],
    ['ur/o', ['ur'], 'urine, urinary tract', 'ادرار، مجاری ادراری', 'sy'],
    ['cyst/o', ['cyst'], 'urinary bladder; sac', 'مثانه؛ کیسه', 'sy'],
    ['gynec/o', ['gynec'], 'woman, female', 'زن', 'sy'],
    ['aden/o', ['aden'], 'gland', 'غده', 'sy'],
    ['crin/o', ['crin'], 'to secrete', 'ترشح کردن', 'sy'],
    ['arthr/o', ['arthr'], 'joint', 'مفصل', 'sy'],
    ['orth/o', ['orth'], 'straight', 'راست، مستقیم', 'sy'],
    ['ped/o', ['ped'], 'child; foot', 'کودک؛ پا', 'sy'],
    // جهت‌ها، صفحه‌ها و تصویربرداری (dr)
    ['anter/o', ['anter'], 'front', 'جلو (قدام)', 'dr'],
    ['poster/o', ['poster'], 'back, behind', 'پشت (خلف)', 'dr'],
    ['super/o', ['super'], 'above, upward', 'بالا (فوقانی)', 'dr'],
    ['infer/o', ['infer'], 'below, downward', 'پایین (تحتانی)', 'dr'],
    ['cephal/o', ['cephal'], 'head', 'سر', 'dr'],
    ['caud/o', ['caud'], 'tail, lower part of body', 'دم، پایین بدن', 'dr'],
    ['dors/o', ['dors'], 'back of the body', 'پشت بدن', 'dr'],
    ['ventr/o', ['ventr'], 'belly side, front', 'شکم، جلو', 'dr'],
    ['medi/o', ['medi'], 'middle', 'میانه', 'dr'],
    ['later/o', ['later'], 'side', 'پهلو، کنار', 'dr'],
    ['proxim/o', ['proxim'], 'near (the point of attachment)', 'نزدیک (به محل اتصال)', 'dr'],
    ['dist/o', ['dist'], 'far (from the point of attachment)', 'دور (از محل اتصال)', 'dr'],
    ['sagitt/o', ['sagitt'], 'arrow', 'پیکان', 'dr'],
    ['coron/o', ['coron'], 'crown', 'تاج', 'dr'],
    ['tom/o', ['tom'], 'to cut, section', 'برش', 'dr'],
    ['radi/o', ['radi'], 'x-ray, radiation', 'پرتو، اشعه ایکس', 'dr'],
    ['son/o', ['son'], 'sound', 'صدا', 'dr'],
    ['fluor/o', ['fluor'], 'luminous', 'درخشان', 'dr'],
    ['plant/o', ['plant'], 'sole of the foot', 'کف پا', 'dr'],
    ['palm/o', ['palm'], 'palm of the hand', 'کف دست', 'dr'],
    // حفره‌ها و نواحی (cv)
    ['crani/o', ['crani'], 'skull', 'جمجمه', 'cv'],
    ['spin/o', ['spin'], 'spine', 'ستون فقرات', 'cv'],
    ['vertebr/o', ['vertebr'], 'vertebra', 'مهره', 'cv'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'cv'],
    ['abdomin/o', ['abdomin'], 'abdomen', 'شکم', 'cv'],
    ['pelv/i, pelv/o', ['pelv'], 'pelvis', 'لگن', 'cv'],
    ['phren/o', ['phren'], 'diaphragm', 'دیافراگم', 'cv'],
    ['mediastin/o', ['mediastin'], 'mediastinum', 'میان‌سینه', 'cv'],
    ['umbilic/o', ['umbilic'], 'navel', 'ناف', 'cv'],
    ['inguin/o', ['inguin'], 'groin', 'کشاله ران', 'cv'],
    ['ili/o', ['ili'], 'ilium (hip bone)', 'استخوان لگن (ایلیوم)', 'cv'],
    ['cervic/o', ['cervic'], 'neck; cervix', 'گردن؛ دهانه رحم', 'cv'],
    ['lumb/o', ['lumb'], 'lower back, loin', 'کمر', 'cv'],
    ['sacr/o', ['sacr'], 'sacrum', 'استخوان خاجی', 'cv'],
    ['coccyg/o', ['coccyg'], 'tailbone (coccyx)', 'دنبالچه', 'cv'],
    ['axill/o', ['axill'], 'armpit', 'زیر بغل', 'cv'],
    ['bucc/o', ['bucc'], 'cheek', 'گونه', 'cv'],
    ['ment/o', ['ment'], 'chin', 'چانه', 'cv'],
    ['occipit/o', ['occipit'], 'back of the head', 'پس‌سر', 'cv'],
    ['orbit/o', ['orbit'], 'eye socket', 'کاسه چشم', 'cv'],
    ['pector/o', ['pector'], 'chest', 'سینه', 'cv'],
    ['stern/o', ['stern'], 'breastbone', 'جناغ', 'cv'],
    ['clavicul/o', ['clavicul', 'clavic'], 'collarbone', 'ترقوه', 'cv'],
    ['scapul/o', ['scapul'], 'shoulder blade', 'کتف', 'cv'],
    ['mamm/o, mast/o', ['mamm', 'mast'], 'breast', 'پستان', 'cv'],
    ['brachi/o', ['brachi'], 'arm', 'بازو', 'cv'],
    ['carp/o', ['carp'], 'wrist', 'مچ دست', 'cv'],
    ['cubit/o', ['cubit'], 'elbow', 'آرنج', 'cv'],
    ['femor/o', ['femor'], 'thigh (femur)', 'ران', 'cv'],
    ['patell/o', ['patell'], 'kneecap', 'کشکک', 'cv'],
    ['poplit/o', ['poplit'], 'back of the knee', 'پشت زانو', 'cv'],
    ['glute/o', ['glute'], 'buttock', 'سرین', 'cv'],
    ['pub/o', ['pub'], 'pubis (front of pelvis)', 'استخوان شرمگاهی', 'cv'],
    ['auricul/o', ['auricul'], 'ear (outer ear)', 'لاله گوش', 'cv'],
    // منافذ و زبان (lx)
    ['os, or/i', ['ori'], 'mouth, opening', 'دهان، منفذ', 'lx'],
    ['stom/o, stomat/o', ['stom'], 'opening, mouth', 'دهانه، منفذ', 'lx'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'lx'],
    ['lacrim/o', ['lacrim'], 'tear', 'اشک', 'lx'],
    ['thec/o', ['thec'], 'sheath (meninges)', 'غلاف (مننژ)', 'lx'],
    // پسوندها
    ['-ac, -al, -ar, -ary, -ic, -ous, -iac, -ior', ['iac', 'ior', 'ac', 'al', 'ar', 'ary', 'ic', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-ad', ['ad'], 'toward', 'به سمتِ', 'dr'],
    ['-logy', ['logy'], 'study of', 'علمِ، مطالعه', '*'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصصِ', '*'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-sarcoma', ['sarcoma'], 'malignant tumor of connective tissue', 'تومور بدخیم بافت همبند', 'ts'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت (معمولاً غیرطبیعی)', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', '*'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', '*'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', 'درد', '*'],
    ['-ectomy', ['ectomy'], 'excision, removal', 'برداشتن (با جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision, cutting', 'برش', '*'],
    ['-stomy', ['stomy'], 'surgical opening', 'ایجاد منفذ با جراحی', 'lx'],
    ['-scopy', ['scopy'], 'visual examination', 'معاینه با دیدن (درون‌بینی)', 'dr'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت (تصویربرداری)', 'dr'],
    ['-gram', ['gram'], 'record, image', 'تصویر ثبت‌شده', 'dr'],
    ['-meter', ['meter'], 'instrument to measure', 'ابزار اندازه‌گیری', 'dr'],
    ['-cyte', ['cyte'], 'cell', 'سلول', 'og'],
    ['-plasm', ['plasm'], 'formation, formed substance', 'ماده شکل‌گرفته', 'og'],
    ['-plasia', ['plasia'], 'formation, development', 'تشکیل، رشد', 'og'],
    ['-gen, -genic, -genesis', ['genesis', 'genic', 'gen'], 'producing, origin', 'تولیدکننده، منشأ', 'og'],
    ['-lysis', ['lysis'], 'breakdown, destruction', 'تجزیه، تخریب', 'og'],
    ['-ism', ['ism'], 'condition, process', 'حالت، فرایند', 'og'],
    ['-stasis', ['stasis'], 'standing still, control', 'ایستایی، ثبات', 'og'],
    ['-cele', ['cele'], 'hernia, swelling', 'فتق، برآمدگی', 'lx'],
    ['-poiesis', ['poiesis'], 'formation, production', 'ساخت، تولید', 'lx'],
    ['-y, -ia', ['y', 'ia'], 'condition, process', 'حالت، فرایند', '*']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['ant', 'anterior', 'قدامی (جلو)', 'dr'],
    ['AP', 'anteroposterior', 'قدامی-خلفی (از جلو به عقب)', 'dr'],
    ['ATP', 'adenosine triphosphate', 'آدنوزین تری‌فسفات (انرژی سلول)', 'og'],
    ['ANS', 'autonomic nervous system', 'دستگاه عصبی خودمختار', 'sy'],
    ['BMI', 'body mass index', 'شاخص توده بدنی', 'sy'],
    ['BP', 'blood pressure', 'فشار خون', 'sy'],
    ['Bx', 'biopsy', 'بیوپسی (نمونه‌برداری)', 'og'],
    ['C1–C7', 'cervical vertebrae 1 to 7', 'مهره‌های گردنی ۱ تا ۷', 'cv'],
    ['CBC', 'complete blood count', 'شمارش کامل خون', 'sy'],
    ['CNS', 'central nervous system', 'دستگاه عصبی مرکزی', 'sy'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن (توموگرافی کامپیوتری)', 'dr'],
    ['CV', 'cardiovascular', 'قلبی-عروقی', 'sy'],
    ['CXR', 'chest x-ray; chest radiograph', 'عکس رادیولوژی قفسه سینه', 'dr'],
    ['DNA', 'deoxyribonucleic acid', 'دی‌ان‌ای (اسید دئوکسی‌ریبونوکلئیک)', 'og'],
    ['ED', 'emergency department', 'بخش اورژانس', 'lx'],
    ['ENT', 'ear, nose, and throat', 'گوش، حلق و بینی', 'sy'],
    ['ER', 'endoplasmic reticulum', 'شبکه آندوپلاسمی', 'og'],
    ['GFD', 'gluten-free diet', 'رژیم غذایی بدون گلوتن', 'sy'],
    ['GI', 'gastrointestinal', 'گوارشی', 'sy'],
    ['GU', 'genitourinary', 'ادراری-تناسلی', 'sy'],
    ['GYN', 'gynecology', 'زنان', 'sy'],
    ['HEENT', 'head, eyes, ears, nose, throat', 'سر، چشم، گوش، بینی و حلق', 'cv'],
    ['HPI', 'history of present illness', 'شرح حال بیماری فعلی', 'lx'],
    ['ID', 'intradermal', 'داخل پوستی', 'lx'],
    ['IM', 'intramuscular', 'داخل عضلانی', 'lx'],
    ['IV', 'intravenous', 'داخل وریدی', 'lx'],
    ['L1–L5', 'lumbar vertebrae 1 to 5', 'مهره‌های کمری ۱ تا ۵', 'cv'],
    ['LAT, lat', 'lateral', 'جانبی (طرفی)', 'dr'],
    ['LE', 'lower extremity', 'اندام تحتانی', 'cv'],
    ['LLQ', 'left lower quadrant', 'ربع تحتانی چپ', 'cv'],
    ['LUQ', 'left upper quadrant', 'ربع فوقانی چپ', 'cv'],
    ['MRI', 'magnetic resonance imaging', 'تصویربرداری تشدید مغناطیسی (ام‌آر‌آی)', 'dr'],
    ['MS', 'musculoskeletal', 'اسکلتی-عضلانی', 'sy'],
    ['NKDA', 'no known drug allergies', 'حساسیت دارویی شناخته‌شده ندارد', 'lx'],
    ['OB', 'obstetrics', 'مامایی', 'sy'],
    ['PA', 'posteroanterior', 'خلفی-قدامی (از پشت به جلو)', 'dr'],
    ['Pap', 'Papanicolaou test', 'تست پاپ اسمیر', 'dr'],
    ['PET', 'positron emission tomography', 'توموگرافی با نشر پوزیترون', 'dr'],
    ['RDN', 'registered dietitian nutritionist', 'متخصص تغذیه و رژیم‌درمانی ثبت‌شده', 'sy'],
    ['RLQ', 'right lower quadrant', 'ربع تحتانی راست', 'cv'],
    ['RNA', 'ribonucleic acid', 'آر‌ان‌ای (اسید ریبونوکلئیک)', 'og'],
    ['ROS', 'review of systems', 'مرور دستگاه‌های بدن', 'sy'],
    ['RUQ', 'right upper quadrant', 'ربع فوقانی راست', 'cv'],
    ['S1–S5', 'sacral vertebrae 1 to 5 (fused)', 'مهره‌های خاجی ۱ تا ۵ (جوش‌خورده)', 'cv'],
    ['SL, sl', 'sublingual', 'زیرزبانی', 'lx'],
    ['SPECT', 'single-photon emission computed tomography', 'توموگرافی کامپیوتری با نشر تک‌فوتون', 'dr'],
    ['Subc, SubQ', 'subcutaneous', 'زیرجلدی', 'lx'],
    ['supp', 'suppository', 'شیاف', 'lx'],
    ['T1–T12', 'thoracic vertebrae 1 to 12', 'مهره‌های سینه‌ای ۱ تا ۱۲', 'cv'],
    ['Temp', 'temperature', 'دمای بدن', 'sy'],
    ['top', 'apply topically', 'استفاده موضعی', 'lx'],
    ['UE', 'upper extremity', 'اندام فوقانی', 'cv'],
    ['US', 'ultrasonography; ultrasound', 'سونوگرافی (فراصوت‌نگاری)', 'dr'],
    ['WNL', 'within normal limits', 'در محدوده طبیعی', 'sy']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * هر واژه با قاعده‌های ساختاری (پسوند و واژه‌های کلیدی نام) و تعریف انگلیسی در یکی از نُه دسته قرار می‌گیرد.
   * ترتیب قاعده‌ها مهم است: جمع‌ها و منفذها پیش از بقیه، و تصویربرداری پیش از جهت‌ها بررسی می‌شوند. */
  const CATS = [
    { id: 'sci', icon: '🎓', name: 'علوم و تخصص‌ها' },
    { id: 'cell', icon: '🧬', name: 'سلول، ژن و متابولیسم' },
    { id: 'tis', icon: '🧵', name: 'بافت‌ها و غشاها' },
    { id: 'sys', icon: '🫀', name: 'دستگاه‌ها و اندام‌ها' },
    { id: 'dir', icon: '🧭', name: 'جهت، صفحه و وضعیت' },
    { id: 'reg', icon: '🗺️', name: 'حفره‌ها و نواحی' },
    { id: 'open', icon: '🕳️', name: 'منافذ و راه‌های دارو' },
    { id: 'img', icon: '🩻', name: 'تصویربرداری و روش‌ها' },
    { id: 'dz', icon: '🦠', name: 'بیماری‌ها و یافته‌ها' },
    { id: 'pl', icon: '📚', name: 'مفرد و جمع' }
  ];
  const CAT_RULES = [
    ['pl', / \/ /],
    ['img', /(scan|tomography|graphy|scopy|radiopharmaceutical|biopsy|in vivo|in vitro|in situ|postmortem|liposuction)/],
    ['dz', /(itis$|oma$|osis$|pathy$|megaly$|cele$|sepsis|inflammation|adhesion|fibrosis|neoplasm|carcinogen|paronychia|hidropoiesis)/],
    ['sci', /(logy$|logist$|orthopedics|registered|dietetic|^(anatomy|physiology|biology|embryology))/],
    ['open', /(aperture|canal|constriction|dilatation|foramen|hiatus|introitus|lumen|meatus|orifice|^os$|patent|perforation|stoma|ventricle|^anus|mouth|duct|nipple|nares|vagina|strata|striae|parenteral|venous|lingual|^oral|dermal|cutaneous|muscular$|thecal|palp|perionychium)/],
    ['dir', /(position|plane|section|^(anterior|posterior|superior|inferior|ventral|dorsal|caudal|cranial|cephalic|medial|lateral|proximal|distal|superficial|deep|internal|external|ipsilateral|contralateral|mediolateral|lateromedial|anteroposterior|supine|prone|erect|genupectoral|lateral recumbent|plantar|dorsum|abduction|adduction|flexion|extension)$)/],
    ['reg', /(cavity|region|quadrant|diaphragm|mediastinum|viscera$|umbilicus|vertebral column|sacrum|^(auricular|axillary|buccal|carpal|clavicular|infraorbital|infrascapular|interscapular|mammary|mental|nasal|occipital|orbital|pectoral|popliteal|pubic|sternal|submental|supraclavicular|antecubital|brachial|femoral|patellar|gluteal)$)/],
    ['sys', /(system|organ|biceps)/],
    ['tis', /(tissue|epitheli|adipo|cartilage|muscle|ligament|tendon|neuron|pleura|peritone|parietal|visceral|mucus)/],
    ['cell', /./]
  ];
  const CAT_FIX = { organism: 'cell', organomegaly: 'dz', 'muscle cell': 'cell', 'nerve cell': 'cell', 'epithelial cell': 'cell', fetus: 'cell', 'organelle': 'cell', abduction: 'dir', adduction: 'dir', 'reproductive system': 'sys', 'magnetic resonance imaging': 'img', meiosis: 'cell', mitosis: 'cell', stoma: 'open' };
  function classify(t) {
    const n = t.t.toLowerCase();
    if (CAT_FIX[n]) return CAT_FIX[n];
    for (const [id, rx] of CAT_RULES) if (rx.test(n)) return id;
    return 'cell';
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
  const WORLDS = ['lx', 'og', 'ts', 'sy', 'dr', 'cv'];
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
/* پیکر — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
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
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${+((p.size || 11) * TS).toFixed(2)}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" font-family="${FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی */
  /* در direction=rtl معنای start/end برعکس می‌شود؛ اینجا anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* در متن فارسی، هر تکه لاتین (با پرانتز و نشانه‌های میانش) با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?[A-Za-z][A-Za-z0-9\/\-.+–°]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°]*\)?)*/g, m => '\u2066' + m + '\u2069');
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

  /* ---------- زبان بدن ---------- */
  /* آناتومی یک واژه: پیشوند + ریشه + پسوند */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 128, fa, { size: 9.5, fill: c })}`;
    return svg(360, 190, `${f(180, 22, 'یک واژه = پیشوند + ریشه + پسوند', { size: 11, fill: INK, w: 700 })}
      ${part(12, 60, 'epi', '#1272a3', '#ddf1fb')}${part(78, 84, 'gastr', '#a31b33', '#fde3e7')}${part(168, 52, 'ic', '#3f8a05', '#e7f9d8')}
      ${br(12, 72, 'prefix • پیشوند', 'روی، بالای', '#1272a3')}${br(78, 162, 'root • ریشه', 'معده', '#a31b33')}${br(168, 220, 'suffix', 'مربوط به', '#3f8a05')}
      <path d="M226 60 h10" stroke="${LINE}" stroke-width="2"/><rect x="240" y="40" width="114" height="40" rx="10" fill="#f8f6f5"/>${f(297, 57, 'مربوط به', { size: 10, fill: '#3f8a05', w: 800 })}${f(297, 73, 'ناحیه بالای معده', { size: 10.5, fill: INK, w: 800 })}
      <path d="M180 150 C140 174 80 174 40 150" stroke="#4f5bd5" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M44 146 l-6 4 l7 3" stroke="#4f5bd5" stroke-width="2" fill="none"/>
      ${f(110, 184, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* قاعده‌های جمع */
  A.plurals = () => {
    const rows = [['-a', '-ae', 'vertebra', 'vertebrae'], ['-us', '-i', 'nucleus', 'nuclei'], ['-um', '-a', 'ovum', 'ova'], ['-is', '-es', 'diagnosis', 'diagnoses'], ['-ix', '-ices', 'appendix', 'appendices'], ['-on', '-a', 'spermatozoon', 'spermatozoa'], ['-ma', '-mata', 'carcinoma', 'carcinomata'], ['-nx', '-nges', 'phalanx', 'phalanges'], ['-en', '-ina', 'foramen', 'foramina'], ['-y', '-ies', 'artery', 'arteries']];
    const col = (i) => { const c = i < 5 ? 0 : 1, r = i % 5, x = 10 + c * 175, y = 30 + r * 40; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="165" height="34" rx="10" fill="${['#eef0fd', '#fdf1e4'][c]}"/>${pill(x + 4, y + 7, 70, 20, '#fff')}${t(x + 39, y + 21, `${R[0]} → ${R[1]}`, { size: 9.5, fill: '#4f5bd5', w: 900 })}${t(x + 80, y + 15, R[2], { size: 9, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 80, y + 28, R[3], { size: 10.5, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 236, `${f(180, 18, 'مفرد ← جمع: پایان واژه، قاعده جمع را تعیین می‌کند', { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => col(i)).join('')}`, 'قاعده‌های جمع واژه‌های پزشکی');
  };

  /* منافذ سر و صورت */
  A.openings = () => {
    const g = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 10, anchor })}`;
    return svg(360, 220, `<defs>${linear(g, SKIN[0], SKIN[1])}</defs>
      <path d="M150 30 Q206 24 214 82 Q218 104 226 116 Q232 124 222 128 L216 130 Q218 140 212 146 Q214 156 206 160 Q204 176 188 178 L170 180 L166 206 L120 206 L122 168 Q100 150 100 104 Q100 34 150 30Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.4"/>
      <path d="M150 30 Q206 24 214 82 Q190 54 150 52 Q116 54 102 92 Q104 36 150 30Z" fill="#6b4a36" opacity=".85"/>
      <ellipse cx="190" cy="96" rx="9" ry="5" fill="#fff" stroke="${SKIN_LINE}"/><circle cx="192" cy="96" r="3.4" fill="#3b2a20"/>
      <ellipse cx="138" cy="112" rx="10" ry="15" fill="none" stroke="${SKIN_LINE}" stroke-width="2"/><circle cx="138" cy="112" r="3" fill="#7a4e3a"/>
      <ellipse cx="220" cy="128" rx="4" ry="2.6" fill="#7a4e3a"/>
      <path d="M204 152 q8 -2 10 2" stroke="#b5584a" stroke-width="3" fill="none" stroke-linecap="round"/>
      ${L(138, 112, 60, 70, 'ear canal', 'مجرای گوش', 'end')}${L(220, 128, 252, 122, 'nares', 'سوراخ‌های بینی', 'start')}${L(208, 152, 252, 166, 'mouth (os)', 'دهان', 'start')}${L(196, 100, 252, 74, 'nasolacrimal duct', 'مجرای اشکی-بینی', 'start')}
      ${f(180, 214, 'هر دهانه طبیعی بدن یک منفذ (orifice) است', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'منافذ سر و صورت');
  };

  /* راه‌های تجویز دارو */
  A.routes = () => {
    const S = 86, D2R = Math.PI / 180;
    const band = (y, h, c) => `<rect x="8" y="${y}" width="344" height="${h}" fill="${c}"/>`;
    /* سرنگ در مختصات محلی: نوک سوزن در مبدأ، بدنه به سمت چپ-بالا؛ با rotate(زاویه) هم‌راستای مسیر می‌شود */
    const needle = (tx, ty, ang, c, en, fa, lx, ly) => {
      const L = (ty - S) / Math.sin(ang * D2R) + 5;
      return `<g transform="translate(${tx} ${ty}) rotate(${ang})" filter="url(#rsh)"><path d="M0 0 H${-L}" stroke="#7b8a92" stroke-width="2" stroke-linecap="round"/><rect x="${-L - 5}" y="-3" width="5" height="6" rx="1" fill="${c}"/><rect x="${-L - 29}" y="-5.5" width="24" height="11" rx="2.5" fill="#eef3f6" stroke="#9aa9b1"/><rect x="${-L - 25}" y="-3.5" width="10" height="7" fill="${c}" opacity=".35"/><path d="M${-L - 29} 0 H${-L - 36}" stroke="#9aa9b1" stroke-width="2.4"/><rect x="${-L - 38}" y="-6" width="3" height="12" rx="1" fill="#9aa9b1"/></g>
        <circle cx="${tx}" cy="${ty}" r="3.2" fill="${c}" stroke="#fff" stroke-width="1"/>${lab(lx, ly, en, fa, { size: 11, fill: c })}`;
    };
    const leg = (x, c, en, fa) => `<rect x="${x}" y="222" width="12" height="12" rx="3" fill="${c}" stroke="#0002"/>${lab(x + 16, 231, en, fa, { size: 10, anchor: 'start', gap: 12 })}`;
    return svg(360, 268, `<defs>${shadow('rsh')}</defs>
      ${band(S, 10, '#f6d2bd')}${band(S + 10, 26, '#efb9a2')}${band(S + 36, 36, '#fbe6a6')}${band(S + 72, 50, '#d46a6a')}
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${16 + i * 50} ${S + 80} q22 14 44 0" stroke="#b44c4c" stroke-width="1.4" fill="none" opacity=".7"/><path d="M${30 + i * 50} ${S + 100} q22 12 40 0" stroke="#b44c4c" stroke-width="1.4" fill="none" opacity=".7"/>`).join('')}
      ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${30 + i * 58}" cy="${S + 56}" r="8" fill="#f7d77c" opacity=".7"/>`).join('')}
      <path d="M8 ${S} H352" stroke="#c98f6b" stroke-width="1.4"/>
      <rect x="196" y="${S + 40}" width="156" height="12" rx="6" fill="#7d1e2f"/><rect x="196" y="${S + 42}" width="156" height="4" rx="2" fill="#b0344a" opacity=".8"/>${f(330, S + 64, 'سیاهرگ', { size: 9, fill: '#7d1e2f', w: 800 })}
      ${needle(24, 184, 90, '#c8243f', 'IM • 90°', 'داخل عضله', 34, 18)}
      ${needle(170, 145, 45, '#d07a00', 'SubQ • 45°', 'زیرجلدی', 96, 30)}
      ${needle(262, 131, 25, '#1580bd', 'IV • 25°', 'داخل سیاهرگ', 168, 40)}
      ${needle(346, 101, 12, '#7b5ce0', 'ID • 10–15°', 'داخل درم', 280, 48)}
      ${leg(8, '#f6d2bd', 'epidermis', 'روپوست')}${leg(94, '#efb9a2', 'dermis', 'درم')}${leg(166, '#fbe6a6', 'subcutaneous', 'زیرجلد (چربی)')}${leg(272, '#d46a6a', 'muscle', 'عضله')}
      ${f(180, 260, 'تزریقی (parenteral): هر راهی جز دستگاه گوارش', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'راه‌های تزریق: عضلانی، زیرجلدی، وریدی و داخل‌جلدی');
  };

  /* ---------- سازمان‌یابی و سلول ---------- */
  /* پله‌های سازمان‌یابی */
  A.levels = () => {
    const g = 'g' + (++UID);
    const step = (i, icon, en, fa) => { const x = 8 + i * 70, y = 170 - i * 26; return `<rect x="${x}" y="${y}" width="66" height="${H - 6 - y}" rx="10" fill="${['#fde3ee', '#ffeedc', '#d9f5ef', '#ddf1fb', '#ede7fc'][i]}"/>${icon(x + 33, y - 26)}${lab(x + 33, y + 18, en, fa, { size: 10.5 })}`; };
    const H = 210;
    const cellI = (x, y) => `<circle cx="${x}" cy="${y}" r="16" fill="url(#${g})" stroke="#c74b84" stroke-width="1.5"/><circle cx="${x + 2}" cy="${y}" r="6" fill="#8a3a8e"/>`;
    const tisI = (x, y) => [0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${x - 17 + c * 12}" y="${y - 15 + r * 10}" width="11" height="9" rx="2.5" fill="#f2a46a" stroke="#c96f2c" stroke-width=".8"/>`).join('')).join('');
    const orgI = (x, y) => `<path d="M${x - 14} ${y - 12} Q${x + 2} ${y - 22} ${x + 16} ${y - 8} Q${x + 22} ${y + 10} ${x + 4} ${y + 16} Q${x - 18} ${y + 18} ${x - 16} ${y + 2} Q${x - 6} ${y - 2} ${x - 14} ${y - 12}Z" fill="#f08f8f" stroke="#c45151" stroke-width="1.4"/>`;
    const sysI = (x, y) => `<path d="M${x - 4} ${y - 22} V${y - 6} Q${x - 18} ${y - 2} ${x - 12} ${y + 10} Q${x + 2} ${y + 22} ${x + 14} ${y + 10} Q${x + 18} ${y} ${x + 6} ${y - 4} Q${x - 2} ${y - 6} ${x - 4} ${y - 12}" stroke="#12a594" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="${x + 2}" cy="${y + 2}" rx="7" ry="5" fill="#0b7a6c"/>`;
    const bodI = (x, y) => man(x, y - 36, 0.3, { palms: true });
    return svg(360, H, `${step(0, cellI, 'cell', 'سلول')}${step(1, tisI, 'tissue', 'بافت')}${step(2, orgI, 'organ', 'اندام')}${step(3, sysI, 'system', 'دستگاه')}${step(4, bodI, 'organism', 'موجود زنده')}
      ${f(112, 26, 'از کوچک به بزرگ', { size: 12, fill: INK, w: 800 })}${f(112, 44, 'هر پله از پله پایین‌تر ساخته می‌شود', { size: 10, fill: MUTED, w: 700 })}`, 'سطوح سازمان‌یابی بدن', radial(g, '#fff2f8', '#f6b6d3'));
  };

  /* ساختار سلول */
  A.cell = () => {
    const g = 'g' + (++UID), n = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11.2, anchor })}`;
    const mito = (x, y, r) => `<g transform="rotate(${r} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="15" ry="7" fill="#f2884b" stroke="#c45a1d" stroke-width="1.2"/><path d="M${x - 11} ${y} q3 -5 5 0 q3 5 5 0 q3 -5 5 0 q3 5 5 0" stroke="#fff3e6" stroke-width="1.4" fill="none"/></g>`;
    return svg(420, 220, `<g transform="translate(30 0)"><ellipse cx="180" cy="110" rx="100" ry="82" fill="url(#${g})" stroke="#c74b84" stroke-width="3"/>
      ${dots(180, 110, 70, 40, '#e7a3c6', 1.4, 4)}
      <circle cx="182" cy="104" r="30" fill="url(#${n})" stroke="#5b2e86" stroke-width="2"/><circle cx="190" cy="98" r="9" fill="#3b1764"/>
      ${mito(124, 146, 20)}${mito(238, 70, -25)}${mito(236, 150, 10)}
      <path d="M130 70 q10 -8 20 0 q10 8 20 0" stroke="#5b9bd5" stroke-width="3" fill="none"/><path d="M128 80 q10 -8 20 0 q10 8 20 0" stroke="#5b9bd5" stroke-width="3" fill="none"/>
      ${L(98, 92, 58, 40, 'cell membrane', 'غشای سلول', 'end')}${L(150, 120, 58, 184, 'cytoplasm', 'سیتوپلاسم', 'end')}${L(204, 112, 300, 120, 'nucleus', 'هسته: مرکز کنترل', 'start')}${L(190, 98, 300, 28, 'nucleolus', 'هستک', 'start')}${L(246, 150, 300, 190, 'mitochondrion', 'نیروگاه سلول', 'start')}</g>`, 'ساختار سلول', `${radial(g, '#fff6fa', '#f9c9de')}${radial(n, '#b98be0', '#6c3aa3')}`);
  };

  /* از هسته تا ژن */
  A.dna = () => {
    const g = 'g' + (++UID), a = 'm' + (++UID);
    const helix = Array.from({ length: 12 }, (_, i) => { const x = 236 + i * 9; const y1 = 112 + Math.sin(i * 0.9) * 16, y2 = 112 - Math.sin(i * 0.9) * 16; return `<path d="M${x} ${y1} L${x} ${y2}" stroke="${['#e5476b', '#1899d6', '#58cc02', '#ffc800'][i % 4]}" stroke-width="3"/>`; }).join('');
    const strand = s => `<path d="M236 ${112 + s * 0} ${Array.from({ length: 12 }, (_, i) => `L${236 + i * 9} ${112 + s * Math.sin(i * 0.9) * 16}`).join(' ')}" stroke="#4f5bd5" stroke-width="2.5" fill="none"/>`;
    return svg(360, 190, `<circle cx="52" cy="104" r="40" fill="url(#${g})" stroke="#5b2e86" stroke-width="2"/>${[[40, 92, 30], [60, 110, -20], [44, 116, 70], [62, 88, 10]].map(p => `<g transform="rotate(${p[2]} ${p[0]} ${p[1]})"><rect x="${p[0] - 2.5}" y="${p[1] - 9}" width="5" height="18" rx="2.5" fill="#fff" opacity=".85"/></g>`).join('')}
      ${arrow(a, 98, 104, 124, 104)}
      <g transform="translate(160 104)"><path d="M-20 -34 Q-6 -2 -20 34" stroke="#7b5ce0" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M20 -34 Q6 -2 20 34" stroke="#7b5ce0" stroke-width="12" fill="none" stroke-linecap="round"/><circle r="6" fill="#5b3fbf"/><rect x="-28" y="-14" width="16" height="7" fill="#ffc800"/></g>
      ${arrow(a, 196, 104, 226, 104)}${strand(1)}${strand(-1)}${helix}
      <rect x="256" y="92" width="36" height="40" rx="6" fill="none" stroke="#e58a00" stroke-width="2" stroke-dasharray="4 3"/>
      ${lab(52, 166, 'nucleus', 'هسته', { size: 10.5 })}${lab(160, 166, 'chromosome', '۴۶ عدد = ۲۳ جفت', { size: 10.5 })}${lab(286, 166, 'DNA • gene', 'ژن = بخشی از DNA', { size: 10.5 })}
      ${f(180, 22, 'کروموزوم‌ها در هسته‌اند، از DNA ساخته شده‌اند و هر ژن تکه‌ای از آن است', { size: 10, fill: INK, w: 700 })}`, 'هسته، کروموزوم، DNA و ژن', `${radial(g, '#c8a8ee', '#6c3aa3')}${marker(a)}`);
  };

  /* میتوز و میوز */
  A.division = () => {
    const a = 'm' + (++UID);
    const c = (x, y, r, n, col) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="#5b2e86" stroke-width="1.5"/>${t(x, y + 4, n, { size: r > 20 ? 12 : 10, fill: '#3b1764', w: 900 })}`;
    return svg(360, 210, `${pill(10, 8, 160, 24, '#fde3ee')}${t(90, 24, 'mitosis', { size: 12, fill: '#a8305c', w: 900 })}${pill(190, 8, 160, 24, '#ede7fc')}${t(270, 24, 'meiosis', { size: 12, fill: '#5b3fbf', w: 900 })}
      ${c(90, 70, 24, '46', '#f6c3d8')}${arrow(a, 76, 96, 56, 120)}${arrow(a, 104, 96, 124, 120)}${c(48, 146, 22, '46', '#f6c3d8')}${c(132, 146, 22, '46', '#f6c3d8')}
      ${c(270, 66, 22, '46', '#d9cdf7')}${arrow(a, 258, 90, 236, 106)}${arrow(a, 282, 90, 304, 106)}${c(226, 124, 16, '23', '#e6defb')}${c(314, 124, 16, '23', '#e6defb')}
      ${f(90, 186, 'سلول‌های بدن: دو سلول یکسان', { size: 10, fill: '#a8305c', w: 700 })}${f(270, 186, 'سلول جنسی: کروموزوم نصف می‌شود', { size: 10, fill: '#5b3fbf', w: 700 })}
      ${f(270, 158, 'تخمک + اسپرم = ۴۶', { size: 9.5 })}<line x1="180" y1="44" x2="180" y2="196" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>`, 'میتوز و میوز', marker(a));
  };

  /* متابولیسم */
  A.metabolism = () => {
    const a = 'm' + (++UID);
    const blocks = (x, y, n, join) => Array.from({ length: n }, (_, i) => `<rect x="${x + (join ? i * 15 : i * 22)}" y="${y}" width="13" height="13" rx="3" fill="${['#e5476b', '#1899d6', '#58cc02', '#ffc800'][i % 4]}"/>`).join('');
    return svg(360, 200, `${pill(105, 8, 150, 26, '#fff1d6')}${t(180, 21, 'metabolism', { size: 12, fill: '#9a5b00', w: 900 })}${f(180, 31, 'همه واکنش‌های شیمیایی بدن', { size: 8.5, fill: '#9a5b00' })}
      ${blocks(26, 70, 4)}${arrow(a, 70, 92, 70, 116, '#12a594', 2.4)}${blocks(40, 124, 4, true)}${lab(70, 162, 'anabolism', 'ساختن: ana = بالا', { size: 11, fill: '#0b7a6c' })}
      ${blocks(246, 70, 4, true)}${arrow(a, 274, 92, 274, 116, '#c8243f', 2.4)}${blocks(236, 124, 4)}${lab(274, 162, 'catabolism', 'شکستن: cata = پایین', { size: 11, fill: '#a31b33' })}
      <path d="M140 110 h80" stroke="#e5e5e5" stroke-width="2"/><polygon points="180,96 172,110 188,110" fill="#9aa9b1"/>${lab(180, 132, 'homeostasis', 'تعادل پایدار', { size: 10.5, fill: '#4f5bd5' })}
      ${f(180, 192, 'سلول انرژی را به شکل ATP ذخیره و مصرف می‌کند', { size: 10, fill: INK, w: 700 })}`, 'متابولیسم: آنابولیسم و کاتابولیسم', marker(a));
  };

  /* ---------- بافت‌ها ---------- */
  /* چهار بافت اصلی */
  A.tissues = () => {
    const box = (x, art, en, fa, c, job) => `<rect x="${x}" y="8" width="82" height="164" rx="14" fill="${c}"/>${art}${lab(x + 41, 126, en, fa, { size: 11 })}${f(x + 41, 160, job, { size: 9.5, fill: INK, w: 700 })}`;
    const epi = [0, 1, 2, 3, 4].map(i => `<rect x="${12 + i * 14}" y="40" width="13" height="40" rx="3" fill="#f6b6d3" stroke="#c74b84" stroke-width=".9"/><ellipse cx="${18.5 + i * 14}" cy="68" rx="4" ry="5" fill="#8a3a8e"/>`).join('');
    const con = `${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${100 + i * 6} 34 q${10} 24 ${-4 + i * 2} 64" stroke="#e8c27a" stroke-width="2" fill="none"/>`).join('')}${dots(136, 66, 22, 7, '#a67c3d', 2.6, 9)}`;
    const mus = [0, 1, 2].map(i => `<rect x="${182}" y="${38 + i * 22}" width="70" height="18" rx="9" fill="#e07070"/>${Array.from({ length: 10 }, (_, j) => `<path d="M${188 + j * 6} ${40 + i * 22} v14" stroke="#b84545" stroke-width="1"/>`).join('')}`).join('');
    const ner = `<circle cx="300" cy="62" r="11" fill="#9b7be8"/><circle cx="300" cy="62" r="4" fill="#5b3fbf"/>${[[-28, -18], [-26, 14], [18, -24], [22, 18]].map(d => `<path d="M300 62 l${d[0]} ${d[1]}" stroke="#9b7be8" stroke-width="3" stroke-linecap="round"/>`).join('')}<path d="M300 73 V104" stroke="#9b7be8" stroke-width="3"/>`;
    return svg(360, 180, `${box(4, epi, 'epithelial', 'پوششی', '#fdeef5', 'پوشاندن')}${box(92, con, 'connective', 'همبند', '#fdf4e4', 'اتصال و حمایت')}${box(180, mus, 'muscle', 'عضلانی', '#fde8e8', 'انقباض')}${box(268, ner, 'nervous', 'عصبی', '#efeafd', 'پیام‌رسانی')}`, 'چهار نوع بافت');
  };

  /* اپیتلیوم ساده و مطبق */
  A.epithelium = () => {
    const col = (x, y, w, h, n) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * w}" y="${y}" width="${w - 1}" height="${h}" rx="3" fill="#f6b6d3" stroke="#c74b84" stroke-width=".8"/><ellipse cx="${x + i * w + w / 2}" cy="${y + h * 0.65}" rx="${w * 0.28}" ry="${Math.min(h * 0.18, 5)}" fill="#8a3a8e"/>`).join('');
    return svg(360, 170, `${col(20, 50, 14, 46, 10)}<rect x="20" y="96" width="139" height="8" fill="#f3dfc6"/>${lab(90, 128, 'simple', 'ساده: یک لایه', { size: 11.5 })}${f(90, 156, 'جذب و انتقال', { size: 9.5, fill: INK, w: 700 })}
      ${[0, 1, 2, 3].map(r => col(200 + (r % 2) * 6, 34 + r * 16, [18, 22, 26, 30][r] / 1.4, 15, [8, 7, 6, 5][r])).join('')}<rect x="200" y="98" width="140" height="8" fill="#f3dfc6"/>${lab(270, 128, 'stratified', 'مطبق: چند لایه', { size: 11.5 })}${f(270, 156, 'محافظت', { size: 9.5, fill: INK, w: 700 })}
      ${f(180, 18, 'بافت پوششی سطح‌ها را می‌پوشاند و مجاری را مفروش می‌کند', { size: 10, fill: INK, w: 700 })}<line x1="180" y1="30" x2="180" y2="160" stroke="#e5e5e5" stroke-width="2" stroke-dasharray="4 4"/>`, 'اپیتلیوم ساده و مطبق');
  };

  /* سه نوع عضله */
  A.muscles = () => {
    const box = (x, art, en, fa, note, c) => `<rect x="${x}" y="8" width="112" height="158" rx="14" fill="${c}"/>${art}${lab(x + 56, 116, en, fa, { size: 11 })}${f(x + 56, 150, note, { size: 9 })}`;
    const sk = [0, 1, 2].map(i => `<rect x="16" y="${30 + i * 20}" width="90" height="16" rx="8" fill="#e07070"/>${Array.from({ length: 14 }, (_, j) => `<path d="M${22 + j * 6} ${32 + i * 20} v12" stroke="#b84545" stroke-width="1"/>`).join('')}<circle cx="${40 + i * 20}" cy="${38 + i * 20}" r="2.2" fill="#5b2e86"/>`).join('');
    const ca = `<path d="M128 34 h90 M128 56 h90 M128 78 h90" stroke="#d65f7a" stroke-width="15" stroke-linecap="round"/><path d="M160 34 l12 22 M190 56 l-14 22" stroke="#d65f7a" stroke-width="10"/>${[150, 196, 168].map((x, i) => `<path d="M${x} ${27 + i * 22} v14" stroke="#7a1e3a" stroke-width="2.4"/>`).join('')}`;
    const sm = [0, 1, 2, 3].map(i => `<path d="M${244 + (i % 2) * 14} ${40 + i * 15} q40 -9 80 0 q-40 9 -80 0z" fill="#f2a0a0" stroke="#c45151" stroke-width=".8"/><ellipse cx="${284 + (i % 2) * 14}" cy="${40 + i * 15}" rx="6" ry="2.4" fill="#5b2e86"/>`).join('');
    return svg(360, 172, `${box(4, sk, 'skeletal', 'اسکلتی (مخطط)', 'ارادی • به استخوان', '#fdeaea')}${box(124, ca, 'cardiac', 'قلبی', 'غیرارادی • فقط قلب', '#fde3ec')}${box(244, sm, 'smooth', 'صاف (احشایی)', 'غیرارادی • دیواره اندام‌ها', '#fff0ea')}`, 'سه نوع بافت عضلانی');
  };

  /* غشاهای جداری و احشایی */
  A.membranes = () => {
    const g = 'g' + (++UID);
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11, anchor, fill: c })}`;
    return svg(360, 232, `<rect x="104" y="20" width="152" height="164" rx="32" fill="#f3e1d0" stroke="#c98f6b" stroke-width="3"/>
      <rect x="116" y="34" width="128" height="136" rx="26" fill="#dff1fb" stroke="#1580bd" stroke-width="3"/>
      <rect x="132" y="52" width="96" height="100" rx="20" fill="url(#${g})" stroke="#c74b84" stroke-width="3"/>
      ${t(180, 100, 'organ', { size: 12, fill: '#a8305c', w: 900 })}${f(180, 117, 'مثلاً ریه', { size: 10, fill: '#a8305c' })}
      ${L(108, 50, 88, 36, 'body wall', 'دیواره بدن', 'end')}${L(124, 110, 88, 110, 'cavity', 'فضای بین دو لایه', 'end', '#1272a3')}
      ${L(244, 70, 270, 56, 'parietal', 'جداری: روی دیواره', 'start', '#1272a3')}${L(220, 150, 270, 150, 'visceral', 'احشایی: روی اندام', 'start', '#a8305c')}
      ${f(180, 206, 'پرده جنب (pleura) دور ریه و صفاق (peritoneum) در شکم', { size: 10, fill: INK, w: 700 })}${f(180, 224, 'هر دو دو لایه دارند: جداری و احشایی', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'لایه جداری و احشایی', radial(g, '#ffe3ec', '#f39bb8'));
  };

  /* ---------- دستگاه‌ها ---------- */
  A.systems = () => {
    const S = [['integumentary', 'پوششی', '#f2a46a', 'skin'], ['skeletal', 'اسکلتی', '#c9b48a', 'bone'], ['muscular', 'عضلانی', '#e07070', 'mus'], ['nervous', 'عصبی', '#9b7be8', 'ner'], ['endocrine', 'غدد درون‌ریز', '#e58a00', 'gland'], ['cardiovascular', 'قلبی-عروقی', '#e5476b', 'heart'], ['lymphatic', 'لنفاوی-ایمنی', '#12a594', 'lym'], ['respiratory', 'تنفسی', '#1899d6', 'lung'], ['digestive', 'گوارشی', '#c45151', 'gi'], ['urinary', 'ادراری', '#e5a500', 'kid'], ['reproductive', 'تولیدمثل', '#d6457a', 'rep'], ['sensory', 'حسی', '#4f5bd5', 'eye']];
    const icon = (k, x, y, c) => ({
      skin: `<path d="M${x - 14} ${y + 6} q14 -18 28 0" stroke="${c}" stroke-width="5" fill="none"/><path d="M${x - 14} ${y + 12} h28" stroke="${c}" stroke-width="3"/>`,
      bone: `<path d="M${x - 12} ${y - 8} l24 16" stroke="${c}" stroke-width="6" stroke-linecap="round"/><circle cx="${x - 13}" cy="${y - 11}" r="4" fill="${c}"/><circle cx="${x - 9}" cy="${y - 13}" r="4" fill="${c}"/><circle cx="${x + 13}" cy="${y + 11}" r="4" fill="${c}"/><circle cx="${x + 9}" cy="${y + 13}" r="4" fill="${c}"/>`,
      mus: `<path d="M${x - 14} ${y} q14 -16 28 0 q-14 16 -28 0z" fill="${c}"/><path d="M${x - 18} ${y} h4 M${x + 14} ${y} h4" stroke="#b84545" stroke-width="3"/>`,
      ner: `<circle cx="${x}" cy="${y - 4}" r="6" fill="${c}"/><path d="M${x} ${y + 2} v12 M${x} ${y - 4} l-12 -8 M${x} ${y - 4} l12 -8 M${x} ${y + 8} l-8 6 M${x} ${y + 8} l8 6" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`,
      gland: `<path d="M${x - 12} ${y - 6} q12 -10 24 0 q4 12 -6 14 h-12 q-10 -2 -6 -14z" fill="${c}"/><circle cx="${x}" cy="${y + 13}" r="2.4" fill="${c}"/>`,
      heart: `<path d="M${x} ${y + 12} C${x - 18} ${y} ${x - 14} ${y - 14} ${x} ${y - 6} C${x + 14} ${y - 14} ${x + 18} ${y} ${x} ${y + 12}Z" fill="${c}"/>`,
      lym: `<path d="M${x} ${y - 14} V${y + 14} M${x} ${y - 4} l-10 -6 M${x} ${y + 4} l10 -6" stroke="${c}" stroke-width="2.4"/>${[[x, y - 4], [x - 10, y - 10], [x + 10, y - 2], [x, y + 10]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="3.4" ry="2.6" fill="${c}"/>`).join('')}`,
      lung: `<path d="M${x - 3} ${y - 12} q-14 2 -14 20 q4 6 13 2z M${x + 3} ${y - 12} q14 2 14 20 q-4 6 -13 2z" fill="${c}"/><path d="M${x} ${y - 16} v8" stroke="${c}" stroke-width="3"/>`,
      gi: `<path d="M${x - 8} ${y - 14} q16 -2 12 10 q-4 8 6 10 q8 4 -2 8 q-14 2 -16 -6" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      kid: `<path d="M${x - 4} ${y - 12} q-12 0 -10 12 q2 12 10 10 q-4 -10 0 -22z M${x + 4} ${y - 12} q12 0 10 12 q-2 12 -10 10 q4 -10 0 -22z" fill="${c}"/>`,
      rep: `<circle cx="${x - 5}" cy="${y - 2}" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x - 5} ${y + 5} v9 M${x - 9} ${y + 10} h8" stroke="${c}" stroke-width="3"/><circle cx="${x + 7}" cy="${y + 2}" r="6" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x + 11} ${y - 2} l5 -5 M${x + 12} ${y - 7} h4 v4" stroke="${c}" stroke-width="2.6" fill="none"/>`,
      eye: `<path d="M${x - 15} ${y} q15 -14 30 0 q-15 14 -30 0z" fill="#fff" stroke="${c}" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="5.5" fill="${c}"/>`
    })[k];
    return svg(360, 248, S.map((s, i) => { const x = 8 + (i % 4) * 88, y = 8 + Math.floor(i / 4) * 80; return `<rect x="${x}" y="${y}" width="82" height="74" rx="14" fill="${s[2]}22"/>${icon(s[3], x + 41, y + 24, s[2])}${lab(x + 41, y + 54, s[0], s[1], { size: 9.5 })}`; }).join(''), 'دستگاه‌های بدن');
  };

  /* ---------- جهت‌ها، صفحه‌ها و وضعیت‌ها ---------- */
  /* وضعیت آناتومیک و جهت‌ها */
  A['dir-man'] = () => {
    const a = 'm' + (++UID);
    const ar = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.4" marker-start="url(#${a})" marker-end="url(#${a})"/>`;
    return svg(360, 262, `${man(110, 22, 1.02, { palms: true })}
      <path d="M110 20 V6" stroke="#1899d6" stroke-width="2.4" marker-end="url(#${a})"/>${lab(166, 12, 'superior', 'بالا (فوقانی)', { size: 10, anchor: 'start', fill: '#1272a3' })}${lab(166, 238, 'inferior', 'پایین (تحتانی)', { size: 10, anchor: 'start', fill: '#1272a3' })}<path d="M110 222 v14" stroke="#1899d6" stroke-width="2.4" marker-end="url(#${a})"/>
      <line x1="110" y1="20" x2="110" y2="222" stroke="#4f5bd5" stroke-width="1.2" stroke-dasharray="4 3"/>${lab(30, 60, 'midline', 'خط میانی', { size: 9.5, fill: '#4f5bd5' })}
      ${ar(84, 90, 116, 90, '#e58a00')}${lab(38, 94, 'medial', 'به سمت میانه', { size: 10, fill: '#9a5b00' })}${ar(138, 92, 172, 92, '#e58a00')}${lab(214, 96, 'lateral', 'دور از خط میانی', { size: 10, fill: '#9a5b00' })}
      ${ar(150, 76, 152, 134, '#12a594')}${lab(212, 140, 'proximal → distal', 'نزدیک ← دور از تنه', { size: 10, fill: '#0b7a6c' })}
      ${side(300, 22, 1.02)}${ar(270, 120, 334, 120, '#c8243f')}${lab(260, 196, 'posterior', 'پشت', { size: 10, fill: '#a31b33' })}${t(260, 222, '= dorsal', { size: 9, fill: MUTED })}${lab(330, 196, 'anterior', 'جلو', { size: 10, fill: '#a31b33' })}${t(330, 222, '= ventral', { size: 9, fill: MUTED })}`, 'وضعیت آناتومیک و جهت‌ها', marker(a, LINE));
  };

  /* سه صفحه بدن */
  A.planes3 = () => {
    /* هر صفحه از زاویه‌ای کشیده شده که «لبه» آن دیده شود: ساژیتال و عرضی از روبه‌رو، فرونتال از نیم‌رخ */
    const box = (x, c, en, fa, body, plane, tags, note) => `<rect x="${x}" y="6" width="114" height="232" rx="14" fill="${c}12" stroke="${c}40"/>${body}${plane}${tags}${lab(x + 57, 196, en, fa, { size: 11, fill: c })}${f(x + 57, 228, note, { size: 9.5, fill: INK })}`;
    const sheet = (pts, c) => `<path d="M${pts}Z" fill="${c}" fill-opacity=".28" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`;
    const tag = (x, y, s, c) => f(x, y, s, { size: 9.5, fill: c, w: 800 });
    return svg(360, 244, `
      ${box(3, '#d63a5f', 'sagittal', 'ساژیتال', man(60, 34, 0.68, { palms: true }), sheet('55 20 L66 14 L66 168 L55 174', '#d63a5f'), tag(32, 30, 'راست', '#b02a4b') + tag(90, 30, 'چپ', '#b02a4b'), 'جدا کردن راست و چپ')}
      ${box(123, '#1580bd', 'frontal (coronal)', 'فرونتال (کرونال)', side(178, 34, 0.68), sheet('175 20 L186 14 L186 168 L175 174', '#1580bd'), tag(150, 30, 'عقب', '#10669a') + tag(212, 30, 'جلو', '#10669a'), 'جدا کردن جلو و عقب')}
      ${box(243, '#0f9384', 'transverse', 'عرضی (افقی)', man(300, 34, 0.68, { palms: true }), sheet('252 106 L338 106 L350 96 L264 96', '#0f9384'), tag(332, 70, 'بالا', '#0b7a6c') + tag(332, 132, 'پایین', '#0b7a6c'), 'جدا کردن بالا و پایین')}`, 'سه صفحه بدن: ساژیتال، فرونتال و عرضی');
  };

  /* جفت‌های متضاد جهت */
  A['dir-pairs'] = () => {
    const P = [['superior', 'بالا', 'inferior', 'پایین', '#1899d6'], ['anterior', 'جلو', 'posterior', 'پشت', '#c8243f'], ['medial', 'به سمت میانه', 'lateral', 'به سمت پهلو', '#e58a00'], ['proximal', 'نزدیک به تنه', 'distal', 'دور از تنه', '#12a594'], ['superficial', 'سطحی', 'deep', 'عمقی', '#7b5ce0'], ['cephalic', 'به سمت سر', 'caudal', 'به سمت دم', '#4f5bd5']];
    const a = 'm' + (++UID);
    return svg(360, 228, P.map((p, i) => { const y = 10 + i * 36; return `<rect x="8" y="${y}" width="344" height="30" rx="12" fill="${p[4]}14"/>${t(78, y + 14, p[0], { size: 11, fill: p[4], w: 900 })}${f(78, y + 26, p[1], { size: 9 })}<path d="M150 ${y + 15} H210" stroke="${p[4]}" stroke-width="2.4" marker-start="url(#${a})" marker-end="url(#${a})"/>${t(282, y + 14, p[2], { size: 11, fill: p[4], w: 900 })}${f(282, y + 26, p[3], { size: 9 })}`; }).join(''), 'جفت‌های متضاد جهت', marker(a, LINE));
  };

  /* حرکت‌ها */
  A.movements = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), D = Math.PI / 180;
    const P = (cx, cy, r, ang) => [(cx + r * Math.cos(ang * D)).toFixed(1), (cy + r * Math.sin(ang * D)).toFixed(1)];
    /* کمان حرکت دور یک مفصل؛ sweep=0 یعنی خلاف عقربه */
    const arc = (cx, cy, r, a1, a2, sweep, c, id, dash) => { const p1 = P(cx, cy, r, a1), p2 = P(cx, cy, r, a2); return `<path d="M${p1} A${r} ${r} 0 0 ${sweep} ${p2}" stroke="${c}" stroke-width="2.4" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="5 4"' : ''}/>`; };
    const seg = (x1, y1, x2, y2, w, ghost) => ghost
      ? `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#c98f6b" stroke-width="${w}" stroke-linecap="round" opacity=".22"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#fff" stroke-width="${w - 3}" stroke-linecap="round" opacity=".55"/>`
      : `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#c98f6b" stroke-width="${w + 2}" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="#efc6a6" stroke-width="${w}" stroke-linecap="round"/>`;
    const E = [62, 92], fu = P(62, 92, 60, -50), fd = [62, 152];
    const wedge = (() => { const p = P(62, 92, 18, -50); return `<path d="M62 92 L62 74 A18 18 0 0 1 ${p} Z" fill="#c8243f" opacity=".35"/>`; })();
    const S = [292, 58], hand = P(292, 58, 56, 5);
    return svg(360, 248, `<defs>${marker(a, '#c8243f')}${marker(b, '#1580bd')}</defs>
      <rect x="4" y="4" width="172" height="240" rx="14" fill="#fdf0f2"/><rect x="184" y="4" width="172" height="240" rx="14" fill="#eef6fc"/>
      ${seg(62, 92, fd[0], fd[1], 13, true)}<circle cx="${fd[0]}" cy="${fd[1] + 6}" r="8" fill="#c98f6b" opacity=".18"/>
      ${seg(62, 26, E[0], E[1], 15)}<circle cx="62" cy="24" r="11" fill="#efc6a6" stroke="#c98f6b"/>${f(30, 28, 'شانه', { size: 9.5, fill: MUTED })}${f(30, 96, 'آرنج', { size: 9.5, fill: MUTED })}<ellipse cx="70" cy="58" rx="7" ry="17" fill="#e9b994" stroke="#c98f6b"/>${seg(62, 92, fu[0], fu[1], 13)}<circle cx="${fu[0]}" cy="${fu[1]}" r="8.5" fill="#efc6a6" stroke="#c98f6b"/>
      ${wedge}<circle cx="62" cy="92" r="4" fill="#c98f6b"/>
      ${arc(62, 92, 74, 78, -36, 0, '#c8243f', a)}${arc(62, 92, 38, -40, 66, 1, '#0f9384', a, true)}
      ${lab(90, 186, 'flexion', 'خم کردن: زاویه کم می‌شود', { size: 11.5, fill: '#a31b33' })}${lab(90, 220, 'extension', 'باز کردن: زاویه زیاد می‌شود', { size: 11.5, fill: '#0b7a6c' })}
      <line x1="270" y1="14" x2="270" y2="178" stroke="#4f5bd5" stroke-width="1.3" stroke-dasharray="4 3"/>${f(246, 22, 'خط میانی', { size: 9, fill: '#4f5bd5' })}
      <g transform="translate(270 24) scale(.74)"><g transform="rotate(-88 27 46)" opacity=".45"><rect x="23" y="44" width="12" height="70" rx="6" fill="#fff" stroke="#c98f6b" stroke-dasharray="3 2"/></g></g>
      ${man(270, 24, 0.74, { arms: 8 })}
      ${arc(292, 58, 60, 78, 14, 0, '#1580bd', b)}${arc(292, 58, 40, 18, 70, 1, '#d07a00', b, true)}
      ${lab(270, 186, 'abduction', 'دور کردن از خط میانی', { size: 11.5, fill: '#1272a3' })}${lab(270, 220, 'adduction', 'نزدیک کردن به خط میانی', { size: 11.5, fill: '#9a5b00' })}`, 'حرکت‌های بدن: خم و باز کردن، دور و نزدیک کردن');
  };

  /* وضعیت‌های بیمار */
  A.bedside = () => {
    const D = Math.PI / 180;
    const go = (p, ang, len) => [p[0] + len * Math.cos(ang * D), p[1] + len * Math.sin(ang * D)];
    const seg = (p1, p2, w, c, st) => `<path d="M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)}" stroke="${st}" stroke-width="${w + 2}" stroke-linecap="round"/><path d="M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
    /* آدمک نیم‌رخ با مفصل‌های زاویه‌دار (زاویه‌ها مطلق، صفر = راست، ۹۰ = پایین)؛ face جهت صورت، toe جهت پنجه پا */
    const pose = (hip, o) => {
      const sh = go(hip, o.torso, 40), hd = go(sh, o.torso, 14), kn = go(hip, o.thigh, 30), an = go(kn, o.shin, 29), toe = go(an, o.toe, 9);
      const el = go(sh, o.arm, 20), hn = go(el, o.fore, 18), nose = go(hd, o.face, 10), hair = go(hd, o.face + 180, 3.5);
      const GOWN = '#8fc1e6', GL = '#5d97c4', SK = '#efc6a6', SL = '#c98f6b';
      return `${o.far ? seg(hip, go(hip, o.far[0], 30), 10, '#e6b896', SL) + seg(go(hip, o.far[0], 30), go(go(hip, o.far[0], 30), o.far[1], 29), 9, '#e6b896', SL) : ''}
        ${seg(an, toe, 6, SK, SL)}${seg(kn, an, 10, SK, SL)}${seg(hip, kn, 13, GOWN, GL)}${seg(hip, sh, 19, GOWN, GL)}
        <path d="M${hd[0].toFixed(1)} ${hd[1].toFixed(1)} L${nose[0].toFixed(1)} ${nose[1].toFixed(1)}" stroke="${SL}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="${hd[0].toFixed(1)}" cy="${hd[1].toFixed(1)}" r="9" fill="${SK}" stroke="${SL}"/><circle cx="${hair[0].toFixed(1)}" cy="${hair[1].toFixed(1)}" r="6.5" fill="#6b4a36" opacity=".85"/>
        ${seg(sh, el, 7, GOWN, GL)}${seg(el, hn, 6, SK, SL)}`;
    };
    const mat = (x1, x2, y) => `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="9" rx="4" fill="#e3e9ee" stroke="#b8c4cb"/><path d="M${x1 + 6} ${y + 9} v16 M${x2 - 6} ${y + 9} v16" stroke="#9aa9b1" stroke-width="3" stroke-linecap="round"/>`;
    const pillow = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="13" ry="4.5" fill="#fff" stroke="#b8c4cb"/>`;
    const box = (i, scene, en, fa) => { const x = 4 + (1 - i % 2) * 178, y = 4 + Math.floor(i / 2) * 116; return `<rect x="${x}" y="${y}" width="174" height="112" rx="14" fill="#f2f6fa"/><g transform="translate(${x} ${y})">${scene}</g>${lab(x + 87, y + 88, en, fa, { size: 11.5, fill: '#0e5f8f' })}`; };
    const flat = { torso: 180, thigh: 0, shin: 0, arm: 0, fore: 0 };
    return svg(360, 352, `
      ${box(0, `${mat(14, 158, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: -90, toe: -90 })}${f(34, 24, 'صورت ↑', { size: 9.5, fill: '#0e5f8f', w: 800 })}`, 'supine', 'طاق‌باز: به پشت، صورت رو به بالا')}
      ${box(1, `${mat(14, 150, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: 90, toe: 75 })}${f(34, 24, 'صورت ↓', { size: 9.5, fill: '#0e5f8f', w: 800 })}`, 'prone', 'دمر: روی شکم، صورت رو به پایین')}
      ${box(2, `${mat(64, 160, 58)}<path d="M70 58 L38 18" stroke="#b8c4cb" stroke-width="10" stroke-linecap="round"/><path d="M70 58 L38 18" stroke="#e3e9ee" stroke-width="7" stroke-linecap="round"/>${pose([80, 47], { torso: -128, thigh: -6, shin: 8, arm: 70, fore: -10, face: -38, toe: -90 })}`, 'Fowler', 'فاولر: نیمه‌نشسته (۴۵ تا ۶۰ درجه)')}
      ${box(3, `<g transform="rotate(-13 87 50)">${mat(14, 158, 58)}${pillow(30, 56)}${pose([96, 47], { ...flat, face: -90, toe: -90 })}</g>${f(36, 40, 'سر پایین‌تر', { size: 9.5, fill: '#c8243f', w: 800 })}`, 'Trendelenburg', 'ترندلنبورگ: سر پایین‌تر از پا')}
      ${box(4, `${mat(14, 158, 58)}${pillow(30, 56)}${pose([92, 46], { torso: 180, thigh: 18, shin: -8, arm: 60, fore: 10, face: 45, toe: 80, far: [-2, 2] })}`, 'Sims', 'سیمز: به پهلوی چپ، زانوی بالا خم')}
      ${box(5, `${mat(14, 124, 58)}${pillow(30, 56)}<path d="M150 64 L156 26" stroke="#9aa9b1" stroke-width="3"/><path d="M148 24 h16" stroke="#9aa9b1" stroke-width="4" stroke-linecap="round"/>${pose([118, 47], { torso: 180, thigh: -72, shin: 14, arm: 0, fore: 0, face: -90, toe: -60 })}`, 'lithotomy', 'لیتوتومی: پاها بالا در رکاب')}`, 'وضعیت‌های بیمار');
  };

  /* روش‌های تصویربرداری */
  A.modalities = () => {
    const box = (x, y, icon, en, fa, note, c) => `<rect x="${x}" y="${y}" width="112" height="104" rx="14" fill="${c}14"/>${icon}${lab(x + 56, y + 66, en, fa, { size: 10, fill: c })}${f(x + 56, y + 96, note, { size: 8.5 })}`;
    const ray = (x, y, c) => `<rect x="${x - 18}" y="${y - 22}" width="36" height="14" rx="4" fill="${c}"/>${[0, 1, 2].map(i => `<path d="M${x - 10 + i * 10} ${y - 6} l${-4 + i * 4} 20" stroke="${c}" stroke-width="2" stroke-dasharray="3 2"/>`).join('')}`;
    const ring = (x, y, c) => `<circle cx="${x}" cy="${y - 6}" r="20" fill="none" stroke="${c}" stroke-width="7"/><rect x="${x - 26}" y="${y - 2}" width="52" height="6" rx="3" fill="#9aa9b1"/>`;
    const sono = (x, y, c) => `<path d="M${x - 6} ${y - 24} h12 v10 l8 12 h-28 l8 -12z" fill="${c}"/>${[0, 1, 2].map(i => `<path d="M${x - 10 - i * 5} ${y + 2 + i * 5} q${10 + i * 5} ${6 + i * 2} ${20 + i * 10} 0" stroke="${c}" stroke-width="1.8" fill="none"/>`).join('')}`;
    return svg(360, 224, `${box(4, 4, ray(60, 34, '#5b6b73'), 'radiography', 'رادیوگرافی (X-ray)', 'اشعه ایکس', '#5b6b73')}${box(124, 4, ring(180, 34, '#1899d6'), 'CT', 'توموگرافی کامپیوتری', 'اشعه ایکس • برش‌ها', '#1899d6')}${box(244, 4, ring(300, 34, '#7b5ce0'), 'MRI', 'تشدید مغناطیسی', 'آهنربا • بدون اشعه', '#7b5ce0')}
      ${box(4, 114, sono(60, 146, '#12a594'), 'ultrasonography', 'سونوگرافی (US)', 'امواج صوتی', '#12a594')}${box(124, 114, `${ring(180, 144, '#e58a00')}<circle cx="180" cy="138" r="5" fill="#e58a00"/>`, 'PET / SPECT', 'پزشکی هسته‌ای', 'رادیودارو', '#e58a00')}${box(244, 114, `<path d="M276 140 q14 -20 30 -6 q10 10 24 -4" stroke="#c8243f" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="330" cy="130" r="5" fill="#c8243f"/>`, 'endoscopy', 'درون‌بینی', 'لوله با دوربین', '#c8243f')}`, 'روش‌های تصویربرداری');
  };

  /* ---------- حفره‌ها و نواحی ---------- */
  A.cavities = () => {
    const L = (x1, y1, x2, y2, en, fa, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 + 4, y2 + 3, en, fa, { size: 10.5, anchor: 'start', fill: c })}`;
    return svg(360, 280, `${side(120, 30, 1.2)}
      <ellipse cx="121" cy="50" rx="15" ry="13" fill="#f6d36b" opacity=".9"/>
      <path d="M104 78 Q96 140 104 168" stroke="#f2a43a" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M116 84 Q140 84 142 104 L140 130 Q128 136 112 132 Q108 104 116 84Z" fill="#f39bb8" opacity=".9"/>
      <path d="M110 134 Q128 140 142 132" stroke="#7a1e3a" stroke-width="3" fill="none"/>
      <path d="M112 138 Q130 142 142 136 L140 164 Q128 170 112 166 Z" fill="#7fd3c6" opacity=".95"/>
      <path d="M112 168 Q128 172 140 166 Q138 182 126 182 Q112 180 112 168Z" fill="#b39ddb"/>
      ${L(121, 50, 210, 34, 'cranial', 'جمجمه‌ای: مغز', '#9a6a00')}<path d="M102 120 L62 120" stroke="${LINE}" stroke-width="1.2"/><circle cx="102" cy="120" r="2.2" fill="${LINE}"/>${lab(58, 117, 'spinal', 'نخاعی: نخاع', { size: 10.5, anchor: 'end', fill: '#9a5b00' })}
      ${L(132, 108, 210, 92, 'thoracic', 'قفسه سینه: قلب و ریه', '#a8305c')}${L(140, 134, 210, 134, 'diaphragm', 'دیافراگم', '#7a1e3a')}${L(130, 152, 210, 170, 'abdominal', 'شکمی', '#0b7a6c')}${L(126, 176, 210, 210, 'pelvic', 'لگنی', '#5b3fbf')}
      
      ${pill(232, 240, 120, 30, '#fdeef5')}${t(292, 254, 'ventral', { size: 10.5, fill: '#a8305c', w: 900 })}${f(292, 266, 'جلویی: سینه + شکم-لگن', { size: 8.5 })}
      ${pill(8, 240, 120, 30, '#fff4dc')}${t(68, 254, 'dorsal', { size: 10.5, fill: '#9a5b00', w: 900 })}${f(68, 266, 'پشتی: جمجمه + نخاع', { size: 8.5 })}`, 'حفره‌های بدن');
  };

  /* نه ناحیه شکمی-لگنی */
  A.regions9 = () => {
    const g = 'g' + (++UID);
    const R = [['right hypochondriac', 'زیردنده‌ای راست'], ['epigastric', 'اپی‌گاستر'], ['left hypochondriac', 'زیردنده‌ای چپ'], ['right lumbar', 'کمری راست'], ['umbilical', 'نافی'], ['left lumbar', 'کمری چپ'], ['right inguinal (iliac)', 'کشاله‌ای راست'], ['hypogastric', 'زیر شکمی'], ['left inguinal (iliac)', 'کشاله‌ای چپ']];
    const cx = [70, 180, 290], cy = [62, 132, 202];
    return svg(360, 272, `<path d="M40 14 Q180 2 320 14 L326 160 Q320 236 250 246 L110 246 Q40 236 34 160 Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <path d="M125 14 V246 M235 14 V246 M34 97 H326 M34 167 H326" stroke="#4f5bd5" stroke-width="2" stroke-dasharray="6 4"/><circle cx="180" cy="132" r="4" fill="#a0673a"/>
      ${R.map((r, i) => { const x = cx[i % 3], y = cy[Math.floor(i / 3)] + (i === 4 ? 18 : 4); if (i % 3 === 1) return lab(x, y, r[0], r[1], { size: 11, fill: '#3540a8' }); const w = r[0].split(' '); return t(x, y - 13, w[0], { size: 9, fill: '#6b74c9', w: 700 }) + lab(x, y, w.slice(1).join(' '), r[1], { size: 10, fill: '#3540a8' }); }).join('')}
      ${f(180, 264, 'چپ و راست = چپ و راست خودِ بیمار', { size: 9, fill: '#a31b33', w: 700 })}`, 'نه ناحیه شکمی-لگنی', linear(g, '#fbe7d6', '#f1cdb2', true));
  };

  /* چهار ربع */
  A.quadrants = () => {
    const g = 'g' + (++UID);
    const Q = [['RUQ', 'right upper', 'کبد، کیسه صفرا', 90, 74], ['LUQ', 'left upper', 'معده، طحال', 270, 74], ['RLQ', 'right lower', 'آپاندیس', 90, 172], ['LLQ', 'left lower', 'کولون سیگموئید', 270, 172]];
    return svg(360, 262, `<path d="M40 14 Q180 2 320 14 L326 150 Q320 226 250 236 L110 236 Q40 226 34 150 Z" fill="url(#${g})" stroke="${SKIN_LINE}" stroke-width="1.5"/>
      <path d="M180 14 V236 M34 124 H326" stroke="#c8243f" stroke-width="2.4"/><circle cx="180" cy="124" r="5" fill="#a0673a" stroke="#fff" stroke-width="2"/>
      ${Q.map(q => `${t(q[3], q[4], q[0], { size: 18, fill: '#a31b33', w: 900 })}${t(q[3], q[4] + 16, q[1], { size: 9.5, fill: MUTED })}${f(q[3], q[4] + 32, q[2], { size: 10, fill: INK, w: 700 })}`).join('')}
      ${f(180, 254, 'دو خط عمود که از ناف (umbilicus) می‌گذرند', { size: 9, fill: MUTED })}`, 'چهار ربع شکم', linear(g, '#fbe7d6', '#f1cdb2', true));
  };

  /* ستون مهره‌ها */
  A.spine = () => {
    const seg = [['cervical', 'گردنی', 7, '#1899d6', 'C1–C7'], ['thoracic', 'سینه‌ای', 12, '#e5476b', 'T1–T12'], ['lumbar', 'کمری', 5, '#e58a00', 'L1–L5'], ['sacral', 'خاجی', 5, '#12a594', 'S1–S5 (جوش‌خورده)'], ['coccygeal', 'دنبالچه‌ای', 4, '#7b5ce0', '۳–۵ مهره کوچک']];
    let y = 14, out = '';
    seg.forEach(s => {
      const h = { cervical: 8, thoracic: 7, lumbar: 10, sacral: 8, coccygeal: 6 }[s[0]], fused = s[0] === 'sacral' || s[0] === 'coccygeal';
      const y0 = y;
      for (let i = 0; i < s[2]; i++) { const w = s[0] === 'coccygeal' ? 20 - i * 3 : s[0] === 'sacral' ? 34 - i * 4 : 22 + (s[0] === 'lumbar' ? 10 : s[0] === 'thoracic' ? 4 : 0); out += `<rect x="${100 - w / 2}" y="${y}" width="${w}" height="${h - (fused ? 0 : 2)}" rx="${fused ? 2 : 3}" fill="${s[3]}"/>`; y += h; }
      out += `<path d="M126 ${y0 + 2} q8 0 8 ${(y - y0) / 2 - 2} q0 ${(y - y0) / 2 - 2} -8 ${(y - y0) / 2 - 2}" stroke="${s[3]}" stroke-width="1.6" fill="none"/>${lab(144, (y0 + y) / 2, `${s[0]} (${s[2]})`, s[1] + ' • ' + s[4], { size: 10, anchor: 'start', fill: s[3] })}`;
      y += 4;
    });
    return svg(360, 318, out + f(180, 312, 'از بالا به پایین: ۷ گردنی، ۱۲ سینه‌ای، ۵ کمری، خاجی و دنبالچه', { size: 9.5, fill: INK, w: 700 }), 'ناحیه‌های ستون مهره‌ها');
  };

  /* نواحی سطحی بدن */
  A['body-map'] = () => {
    const L = (x1, y1, x2, y2, en, fa, anchor) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1"/><circle cx="${x1}" cy="${y1}" r="2" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -3 : 3), y2 + 3, en, fa, { size: 9.5, anchor })}`;
    return svg(360, 300, `${man(180, 34, 1.28, { palms: true })}
      ${L(180, 50, 80, 30, 'cephalic', 'سر', 'end')}${L(180, 82, 80, 62, 'cervical', 'گردن', 'end')}${L(170, 110, 80, 96, 'thoracic', 'قفسه سینه', 'end')}${L(140, 130, 80, 132, 'brachial', 'بازو', 'end')}${L(137, 175, 80, 170, 'antecubital', 'جلوی آرنج', 'end')}${L(132, 192, 80, 206, 'carpal', 'مچ دست', 'end')}
      ${L(196, 150, 280, 120, 'abdominal', 'شکم', 'start')}${L(180, 152, 280, 156, 'umbilical', 'ناف', 'start')}${L(196, 172, 280, 190, 'inguinal', 'کشاله ران', 'start')}${L(200, 210, 280, 222, 'femoral', 'ران', 'start')}${L(200, 248, 280, 252, 'patellar', 'زانو', 'start')}${L(158, 280, 80, 266, 'pedal', 'پا', 'end')}`, 'نواحی سطحی بدن');
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۱: زبان بدن (پایه همه دنیاها)
 * پیش از ورود به سلول، بافت، دستگاه‌ها و نقشه بدن، «دستور زبان» واژه‌های آناتومی را یاد می‌گیریم:
 * قطعه‌های واژه، پیشوندهای جا، پسوندهای صفت‌ساز، منافذ بدن، قاعده‌های جمع، راه‌های دارو، همزادهای گیج‌کننده و اختصارهای پرونده.
 * منابع: Body Openings and Plural Endings، Body Organization، Basic Body Structure و فصل‌های دیگر پوشه پیوست.
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان بدن', short: 'زبان', sub: 'قطعه‌های واژه، پیشوندهای جا، منافذ بدن، جمع‌های لاتین، راه‌های دارو و اختصارهای پرونده',
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ['قطعه‌های پازل', 'منافذ و جمع‌ها', 'زبان بالینی'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: قطعه‌های پازل ================= */
      {
        id: 'lx1', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('هر واژه یک پازل است', `واژه‌های آناتومی از چند <b>قطعه ثابت</b> ساخته می‌شوند:<br>• <b>پیشوند</b> (prefix) در ابتدا: ${e('epi-')} = روی، بالای<br>• <b>ریشه</b> (root) در وسط: ${e('gastr')} = معده<br>• <b>پسوند</b> (suffix) در انتها: ${e('-ic')} = مربوط به${fig('wordparts', '', 'epigastric: مربوط به ناحیه بالای معده؛ یکی از نه ناحیه شکم.')}`),
          L('واکه رابط o', `ریشه را معمولاً با <b>واکه رابط</b> (بیشتر <b>o</b>) به قطعه بعدی وصل می‌کنیم و آن را با خط مورب می‌نویسیم: ${e('cyt/o')}، ${e('hist/o')}. ریشه + واکه = <b>شکل ترکیبی</b> (combining form).<br><br>قاعده: اگر پسوند با <b>حرف صدادار</b> شروع شود، o حذف می‌شود:<br>• ${e('cyt/o + -logy')} ← ✅ <b>cytology</b> (o می‌ماند)<br>• ${e('my/o + -oma')} ← ✅ <b>myoma</b> (نه myooma)${memo('o مثل «چسب» است: میان دو بی‌صدا لازم است؛ وقتی پسوند خودش با صدادار شروع می‌شود، چسب اضافه است.')}`),
          M(`چرا در ${e('<b>neuritis</b>')} واکه o نیامده است؟`, ['چون پسوند -itis با حرف صدادار شروع می‌شود', 'چون neur/o پیشوند است', 'چون o همیشه حذف می‌شود', 'چون واژه لاتین نیست'], 'وقتی پسوند با a, e, i, o, u شروع شود واکه رابط حذف می‌شود: neur + itis.'),
          L('معنی را از آخر بخوان', `برای فهمیدن معنی، <b>از پسوند شروع کن</b>، بعد پیشوند، و آخر ریشه‌ها:<br>${wb('hist/o', '-logy')} ← «علمِ» + «بافت» = <b>بافت‌شناسی</b><br>${wb('hist/o', '-logist')} ← <b>متخصص</b> بافت‌شناسی<br>${wb('hypo-', 'chondr/o', '-iac')} ← «مربوط به» + «زیرِ» + «غضروف» = ناحیه زیر غضروف دنده‌ها${memo('اول بپرس «چه شده یا چه نوعی؟» (پسوند)، بعد «کجا؟» (پیشوند)، بعد «چه عضوی؟» (ریشه).')}`),
          P('هر قطعه را به نوعش وصل کن', [['epi-', 'پیشوند'], ['gastr/o', 'شکل ترکیبی ریشه'], ['-ic', 'پسوند'], ['o در cyt/o', 'واکه رابط']]),
          O(`قطعه‌های ${e('hypochondriac')} را به ترتیبِ نوشتن بچین`, ['hypo-', 'chondr/o', '-iac'], 'hypo- (زیر) + chondr/o (غضروف) + -iac (مربوط به): ناحیه زیر غضروف دنده‌ها.'),
          T('در myoma واکه رابط o نیامده، چون پسوند -oma با حرف صدادار شروع می‌شود.', true, 'درست: my/o + -oma = myoma (نه myooma). در cytology اما o می‌ماند، چون -logy با بی‌صدا شروع می‌شود.'),
          B('در histologist، پسوند ___ یعنی «متخصص».', ['-logist', '-logy', '-ic'], '‎-logy علم است و ‎-logist متخصص آن علم.'),
          W('واژه‌ای بساز به معنی «علم سلول‌شناسی»', ['cyt/o', '-logy'], ['-logist', 'hist/o', '-oma'], 'cyt/o (سلول) + -logy (علم) = cytology.'),
          S('املای انگلیسی «بافت‌شناسی» را بنویس', 'histology', 'hist/o + -logy = histology.', 'histo…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'پیشوندهای جا', icon: '📍', items: [
          L('پیشوند می‌گوید «کجا؟»', `در آناتومی، بیشتر پیشوندها <b>جا</b> را نشان می‌دهند:${tbl([['پیشوند', 'معنی', 'نمونه', 'یعنی'], [e('epi-'), 'روی، بالای', 'epigastric', 'بالای معده'], [e('hypo-'), 'زیر', 'hypogastric', 'زیر معده'], [e('sub-'), 'زیر', 'sublingual', 'زیر زبان'], [e('supra-'), 'بالای', 'supraclavicular', 'بالای ترقوه'], [e('infra-'), 'زیر', 'infraorbital', 'زیر کاسه چشم'], [e('inter-'), 'میان', 'interscapular', 'میان دو کتف'], [e('intra-'), 'درون', 'intravenous', 'درون سیاهرگ'], [e('peri-'), 'پیرامون', 'perionychium', 'دور ناخن'], [e('retro-'), 'پشت', 'retroperitoneal', 'پشت صفاق']])}ریشه‌های این نمونه‌ها: ${e('gastr/o')} معده، ${e('lingu/o')} زبان، ${e('clavicul/o')} ترقوه، ${e('orbit/o')} کاسه چشم، ${e('scapul/o')} کتف، ${e('ven/o')} سیاهرگ، ${e('onych/o')} ناخن، ${e('peritone/o')} صفاق.${memo(`${e('hypo')} را با «hippo» (اسب آبی) به خاطر بسپار: همیشه <b>زیر</b> آب است. ${e('supra')} مثل «سوپر»: بالاتر!`)}`),
          P('هر پیشوند را به معنی‌اش وصل کن', [['supra-', 'بالای'], ['infra-', 'زیر'], ['inter-', 'میان'], ['intra-', 'درون'], ['retro-', 'پشت']]),
          M(`${e('<b>supraclavicular</b>')} یعنی…`, ['بالای ترقوه', 'زیر ترقوه', 'میان دو ترقوه', 'پشت ترقوه'], 'supra- (بالای) + clavicul/o (ترقوه) + -ar.'),
          L('میان یا درون؟', `دو پیشوند شبیه، با معنی کاملاً متفاوت:${vs(['inter-', 'میانِ دو چیز: interscapular = میان دو کتف'], ['intra-', 'درونِ یک چیز: intramuscular = درون عضله'])}${pearl('در نسخه «IM» یعنی intramuscular (درون عضله) و «IV» یعنی intravenous (درون سیاهرگ). اشتباه این دو در تزریق خطرناک است.')}`),
          M('کدام واژه یعنی «میان دو کتف»؟', ['interscapular', 'intrascapular', 'infrascapular', 'suprascapular'], 'inter- = میان. infrascapular زیر کتف است.'),
          T(`${e('retroperitoneal')} یعنی «پشت صفاق»؛ مثل جای کلیه‌ها.`, true, 'retro- (پشت) + peritone/o (صفاق) + -al. کلیه‌ها تنها اندام بزرگ شکمی پشت صفاق‌اند.'),
          B('در perionychium، پیشوند ___ یعنی «پیرامون».', ['peri-', 'para-', 'epi-'], 'peri- (پیرامون) + onych/o (ناخن): بافت دور ناخن.'),
          L('جفت‌های متضاد', `${vs(['epi- / supra-', 'روی و بالای'], ['hypo- / sub- / infra-', 'زیر و پایین'])}${vs(['endo-', 'درون'], ['exo- / ex-', 'بیرون'])}هر وقت پیشوندی دیدی، قُل متضادش را هم به خاطر بیاور.`),
          W('واژه‌ای بساز به معنی «مربوط به زیر کاسه چشم»', ['infra-', 'orbit/o', '-al'], ['supra-', 'ment/o', 'inter-'], 'infra- (زیر) + orbit/o (کاسه چشم) + -al = infraorbital.'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: 'پسوندهای «مربوط به»', icon: '🏷️', items: [
          L('از اسم به صفت', `برای گفتن «مربوط به»، به ریشه یکی از این پسوندها را می‌چسبانیم:<br>${e('-al، -ac، -ar، -ary، -ic، -ous، -iac، -ior')}<br><br>${tbl([['اسم', 'صفت', 'معنی'], ['thorax (قفسه سینه)', 'thoracic', 'سینه‌ای'], ['abdomen (شکم)', 'abdominal', 'شکمی'], ['axilla (زیربغل)', 'axillary', 'زیربغلی'], ['cranium (جمجمه)', 'cranial', 'جمجمه‌ای'], ['vertebra (مهره)', 'vertebral', 'مهره‌ای'], ['cardia (قلب)', 'cardiac', 'قلبی'], ['umbilicus (ناف)', 'umbilical', 'نافی'], ['viscera (احشا)', 'visceral', 'احشایی: مربوط به اندام‌های درونی']])}${memo('این پسوندها همه یک معنی دارند؛ انتخاب بین آن‌ها را «گوش» تعیین می‌کند، نه قاعده. فقط واژه درست را حفظ کن.')}`),
          M(`صفت «مربوط به قفسه سینه» کدام است؟`, ['thoracic', 'thoraxal', 'thoracary', 'thoraxic'], 'thorac/o + -ic = thoracic؛ مثل thoracic cavity.'),
          P('هر اسم را به صفتش وصل کن', [['abdomen', 'abdominal'], ['axilla', 'axillary'], ['cranium', 'cranial'], ['vertebra', 'vertebral'], ['umbilicus', 'umbilical']]),
          L('‎-ad یعنی «به سمتِ»', `پسوند ${e('-ad')} جهت حرکت را می‌گوید:<br>• <b>cephalad</b> = به سمت سر<br>• <b>caudad</b> = به سمت دم (پایین)<br>• <b>mediad</b> = به سمت خط میانی<br>در مقابل، ${e('-al')} فقط «مربوط به» است: cephalic = مربوط به سر.${pearl('در گزارش جراحی می‌نویسند: «the incision was extended cephalad» یعنی برش به سمت سر ادامه داده شد.')}`),
          T('cephalad یعنی «مربوط به سر».', false, 'نادرست؛ cephalad یعنی «به سمت سر». «مربوط به سر» cephalic است.'),
          B('در واژه caudal، ریشه caud/o یعنی ___.', ['دم، پایین بدن', 'سر', 'پهلو'], 'caud/o = دم؛ در انسان یعنی به سمت پایین بدن.'),
          M(`${e('<b>visceral</b>')} یعنی…`, ['مربوط به اندام‌های درونی (احشا)', 'مربوط به دیواره حفره', 'مربوط به پوست', 'مربوط به استخوان'], 'viscer/o = احشا (viscera) + -al. مقابلش parietal = مربوط به دیواره.'),
          W('واژه‌ای بساز به معنی «مربوط به جمجمه»', ['crani/o', '-al'], ['cephal/o', '-ad', 'spin/o'], 'crani/o + -al = cranial.'),
          S('املای انگلیسی «مربوط به زیربغل» را بنویس', 'axillary', 'axill/o + -ary؛ دو l دارد.', 'axil…'),
          L('مرور سطح «قطعه‌های پازل»', recap(['واژه = پیشوند + ریشه + پسوند؛ معنی را از پسوند شروع کن، بعد پیشوند و آخر ریشه', 'واکه رابط o پیش از پسوندِ صدادار حذف می‌شود: myoma؛ ولی cytology', 'پیشوندهای جا: epi- و supra- بالا • hypo-، sub- و infra- زیر • inter- میان • intra- درون • peri- پیرامون • retro- پشت', '<bdi dir="ltr">-al, -ac, -ar, -ary, -ic, -ous</bdi> همه یعنی «مربوط به»؛ <bdi dir="ltr">-ad</bdi> یعنی «به سمتِ»: cephalad'])),
          N('wb:lx')
        ]
      },

      /* ================= سطح ۲: منافذ و جمع‌ها ================= */
      {
        id: 'lx4', title: 'منافذ بدن', icon: '🕳️', items: [
          L('دهانه‌ها و گذرگاه‌ها', `<b>orifice</b> (منفذ) از دو ریشه لاتین آمده: ${e('os')} = دهان و ${e('facere')} = ساختن. بدن پر از دهانه است:${tbl([['واژه', 'معنی'], ['orifice / aperture', 'هر منفذ یا دهانه'], ['foramen', 'سوراخ طبیعی، به‌ویژه در استخوان'], ['meatus', 'گذرگاه یا دهانه (مثل urinary meatus)'], ['lumen', 'فضای درون یک لوله یا اندام توخالی'], ['hiatus', 'شکاف یا فاصله'], ['introitus', 'ورودی یک مجرا یا حفره'], ['stoma', 'دهانه مصنوعی که جراح می‌سازد']])}${fig('openings')}`),
          M('سوراخ طبیعی که از درون یک استخوان می‌گذرد چه نام دارد؟', ['foramen', 'stoma', 'lumen', 'perforation'], 'foramen سوراخ طبیعی در استخوان است؛ مثل foramen magnum در جمجمه.'),
          L('باز، تنگ یا گشاد؟', `• <b>patent</b>: باز و بدون انسداد («the tube is patent»)<br>• <b>constriction</b>: تنگ کردن، بستن<br>• <b>dilatation / dilation</b>: گشاد شدن بیش از اندازه طبیعی<br>• <b>perforation</b>: سوراخ شدن؛ مثلاً دیواره معده در زخم معده<br>• <b>ventricle</b>: حفره یا اتاقک کوچک در مغز یا قلب${pearl('«stoma» دهانه‌ای است که جراح می‌سازد؛ مثل colostomy روی شکم. پرستار باید رنگ و باز بودن (patency) آن را بررسی کند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['patent', 'باز و بی‌انسداد'], ['perforation', 'سوراخ شدن دیواره'], ['dilatation', 'گشاد شدن'], ['constriction', 'تنگ شدن'], ['lumen', 'فضای درون لوله']]),
          L('منافذ سر و صورت', `${fig(['lacrimal', 'mouth'], ['اشک از nasolacrimal duct به بینی می‌رود', 'دهان و حلق'])}• <b>nares</b> (سوراخ‌های بینی): تنفس و بویایی<br>• <b>nasolacrimal duct</b>: اشک را از کیسه اشکی به حفره بینی می‌برد<br>• <b>ear canal</b>: گذرگاه صدا تا پرده گوش<br>• <b>mouth (os)</b>: خوردن، تنفس و صحبت`),
          M('چرا وقتی گریه می‌کنیم آب بینی هم راه می‌افتد؟', ['اشک از nasolacrimal duct وارد بینی می‌شود', 'غدد بینی هم‌زمان ترشح می‌کنند', 'اشک از گوش به بینی می‌رود', 'nares اشک می‌سازد'], 'nas/o (بینی) + lacrim/o (اشک) + duct: مجرای اشکی-بینی.', null, F('lacrimal')),
          T('stoma دهانه‌ای طبیعی در بدن است.', false, 'نادرست؛ stoma دهانه مصنوعی است که با جراحی (مثل colostomy یا tracheostomy) ساخته می‌شود.'),
          B('«سوراخ‌های بینی» به زبان پزشکی ___ است.', ['nares', 'meatus', 'foramina'], 'nares (مفرد naris) = سوراخ‌های بینی.'),
          S('املای انگلیسی «منفذ» را بنویس', 'orifice', 'os (دهان) + facere (ساختن).', 'ori…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx5', title: 'جمع لاتین (۱)', icon: '📚', items: [
          L('جمع‌هایی که s نمی‌گیرند', `واژه‌های یونانی و لاتین با قاعده خودشان جمع بسته می‌شوند؛ <b>پایان واژه</b> قاعده را تعیین می‌کند:${tbl([['پایان مفرد', 'جمع', 'نمونه'], [e('-a'), e('-ae'), e('vertebra → vertebrae')], [e('-us'), e('-i'), e('nucleus → nuclei')], [e('-um'), e('-a'), e('ovum → ova')], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-y'), e('-ies'), e('artery → arteries')]])}${memo('«US» رفت، «I» آمد: nucleus → nuclei. مثل اینکه «ما» (us) به «من‌ها» (i) تبدیل شویم!')}`),
          M(`جمع ${e('<b>vertebra</b>')} کدام است؟`, ['vertebrae', 'vertebras', 'vertebri', 'vertebrata'], '‎-a → ‎-ae: bursa → bursae، vertebra → vertebrae.'),
          P('هر مفرد را به جمعش وصل کن', [['bursa', 'bursae'], ['nucleus', 'nuclei'], ['ovum', 'ova'], ['crisis', 'crises'], ['ovary', 'ovaries']]),
          L('دو دام رایج', `• ${e('-is → -es')}: <b>diagnosis → diagnoses</b>؛ دقت کن جمع «diagnosises» نیست.<br>• ${e('-um → -a')}: <b>diverticulum → diverticula</b>؛ «a» پایانی اینجا نشانه جمع است، نه مفرد.<br>${fig('plurals', '', 'ده قاعده پرکاربرد جمع در یک نگاه')}`),
          T(`${e('ova')} شکل جمع ${e('ovum')} (تخمک) است.`, true, 'درست؛ ‎-um → ‎-a.'),
          B('جمع diagnosis می‌شود ___.', ['diagnoses', 'diagnosises', 'diagnosi'], '‎-is → ‎-es.'),
          M(`جمع ${e('<b>thrombus</b>')} (لخته) کدام است؟`, ['thrombi', 'thrombuses', 'thrombae', 'thromba'], '‎-us → ‎-i.'),
          S('جمع انگلیسی nucleus را بنویس', 'nuclei', 'nucleus → nuclei (‎-us → ‎-i).', 'nucl…'),
          S('جمع انگلیسی vertebra را بنویس', 'vertebrae', 'vertebra → vertebrae (‎-a → ‎-ae).', 'verte…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx6', title: 'جمع لاتین (۲)', icon: '📖', items: [
          L('قاعده‌های کمیاب‌تر', `${tbl([['پایان مفرد', 'جمع', 'نمونه'], [e('-ix, -ex'), e('-ices'), e('appendix → appendices')], [e('-on'), e('-a'), e('spermatozoon → spermatozoa')], [e('-oma'), e('-omata'), e('carcinoma → carcinomata')], [e('-nx'), e('-nges'), e('phalanx → phalanges')], [e('-en'), e('-ina'), e('foramen → foramina')], [e('-ax'), e('-aces'), e('thorax → thoraces')], [e('-ur'), e('-ora'), e('femur → femora')]])}${pearl('در بیشتر کتاب‌های امروزی جمع انگلیسی هم پذیرفته است: carcinomas و fibromas. ولی در امتحان، قاعده کلاسیک را بشناس.')}`),
          P('هر مفرد را به جمعش وصل کن', [['appendix', 'appendices'], ['phalanx', 'phalanges'], ['foramen', 'foramina'], ['femur', 'femora'], ['meninx', 'meninges']]),
          M(`${e('<b>meninges</b>')} جمع کدام واژه است؟`, ['meninx', 'meningis', 'meninga', 'meningum'], '‎-nx → ‎-nges: meninx → meninges (پرده‌های مغز و نخاع).'),
          L('مفرد یا جمع؟', `گاهی شکل جمع از مفرد معروف‌تر است:<br>• <b>phalanges</b> (بندهای انگشت)؛ مفرد phalanx<br>• <b>meninges</b> (پرده‌های مغز)؛ مفرد meninx<br>• <b>strata</b> (لایه‌ها)؛ مفرد stratum<br>${memo('واژه‌ای که به -ges ختم شود، معمولاً جمعِ یک -nx است: larynx → larynges و pharynx → pharynges.')}`),
          T(`${e('carcinomata')} جمع ${e('carcinoma')} است.`, true, 'درست؛ ‎-oma → ‎-omata. شکل carcinomas هم رایج است.'),
          B('جمع foramen (سوراخ) ___ است.', ['foramina', 'foramens', 'foramae'], '‎-en → ‎-ina.'),
          M(`جمع ${e('<b>thorax</b>')} کدام است؟`, ['thoraces', 'thoraxes', 'thoraxi', 'thoracia'], '‎-ax → ‎-aces.'),
          O('این جمع‌ها را بر اساس قاعده‌شان به ترتیب جدول بچین: ‎-ix، ‎-on، ‎-oma', ['appendices', 'spermatozoa', 'carcinomata'], '‎-ix → ‎-ices، ‎-on → ‎-a، ‎-oma → ‎-omata.'),
          S('جمع انگلیسی phalanx را بنویس', 'phalanges', 'phalanx → phalanges (‎-nx → ‎-nges).', 'phalan…'),
          L('مرور سطح «منافذ و جمع‌ها»', recap(['دهانه‌ها: orifice منفذ • foramen سوراخ استخوان • meatus گذرگاه • lumen فضای درون لوله • stoma دهانه جراحی', 'patent باز • constriction تنگی • dilatation گشادی • perforation سوراخ شدن', 'جمع‌های پایه: <bdi dir="ltr">-a → -ae</bdi> • <bdi dir="ltr">-us → -i</bdi> • <bdi dir="ltr">-um → -a</bdi> • <bdi dir="ltr">-is → -es</bdi> • <bdi dir="ltr">-y → -ies</bdi>', 'جمع‌های کمیاب: <bdi dir="ltr">-ix → -ices</bdi> • <bdi dir="ltr">-on → -a</bdi> • <bdi dir="ltr">-oma → -omata</bdi> • <bdi dir="ltr">-nx → -nges</bdi> • <bdi dir="ltr">-en → -ina</bdi> • <bdi dir="ltr">-ax → -aces</bdi>'])),
          N('d2t:lx')
        ]
      },

      /* ================= سطح ۳: زبان بالینی ================= */
      {
        id: 'lx7', title: 'راه‌های دارو', icon: '💉', items: [
          L('دارو از کجا وارد شود؟', `${tbl([['راه', 'معنی', 'ویژگی'], ['oral (PO)', 'از راه دهان', 'آسان، جذب آهسته؛ اسید معده ممکن است دارو را خراب کند'], ['sublingual (SL)', 'زیر زبان', 'جذب سریع‌تر از خوراکی، از رگ‌های زیر زبان'], ['parenteral', 'هر راه به‌جز گوارش', 'تهاجمی؛ پوست با سوزن سوراخ می‌شود']])}${wb('sub-', 'lingu/o', '-al')} ← زیر + زبان + مربوط به.`),
          L('چهار تزریق پرکاربرد', `${fig('routes', '', 'هر سوزن با زاویه خودش تا لایه هدف می‌رود: هرچه زاویه کمتر، تزریق سطحی‌تر.')}${tbl([['اختصار', 'راه', 'کجا؟', 'زاویه'], ['ID', 'intradermal', 'درون پوست (درم)', '۱۰–۱۵°'], ['SubQ', 'subcutaneous', 'زیر پوست، در چربی', '۴۵°'], ['IM', 'intramuscular', 'درون عضله', '۹۰°'], ['IV', 'intravenous', 'درون سیاهرگ', '۲۵°']])}${fig('injection-layers', '', 'همین چهار تزریق در تصویر کتاب درسی')}`),
          M('کدام تزریق در لایه چربی زیر پوست انجام می‌شود؟', ['subcutaneous', 'intradermal', 'intramuscular', 'intravenous'], 'sub- (زیر) + cutane/o (پوست) + -ous.', null, F('injection-angles')),
          P('هر اختصار را به راهش وصل کن', [['IV', 'درون سیاهرگ'], ['IM', 'درون عضله'], ['ID', 'درون پوست'], ['SL', 'زیر زبان']]),
          L('intrathecal و استنشاقی', `• <b>intrathecal</b>: تزریق به فضای اطراف نخاع؛ ${e('thec/o')} = غلاف (مننژ)<br>• <b>inhalation</b>: دارو با تنفس به ریه می‌رسد؛ مثل اسپری آسم${fig('inhaler', '', 'اسپری استنشاقی با محفظه (spacer)؛ دارو مستقیم به راه‌های هوایی می‌رسد.')}${pearl('parenteral = para (کنار) + enteral (روده): هر راهی که از «کنار» دستگاه گوارش بگذرد.')}`),
          T('دارویی که زیر زبان گذاشته می‌شود، معمولاً آهسته‌تر از قرص خوراکی جذب می‌شود.', false, 'نادرست؛ جذب sublingual از رگ‌های زیر زبان سریع‌تر از راه خوراکی است.'),
          B('پیشوند intra- در intramuscular یعنی ___.', ['درون', 'میان', 'زیر'], 'intra- = درون؛ inter- = میان.'),
          M('دارویی که به فضای اطراف نخاع تزریق می‌شود چه نام دارد؟', ['intrathecal', 'intradermal', 'intravenous', 'sublingual'], 'thec/o = غلاف؛ پرده‌های نخاع.'),
          W('واژه‌ای بساز به معنی «درون سیاهرگ»', ['intra-', 'ven/o', '-ous'], ['inter-', 'sub-', 'arteri/o'], 'intra- + ven/o + -ous = intravenous.'),
          N('ab:lx')
        ]
      },
      {
        id: 'lx8', title: 'همزادهای گیج‌کننده', icon: '🪤', items: [
          L('یک حرف، دو دنیا', `${vs(['hidr/o', 'عرق ← hidropoiesis: ساخت عرق'], ['hydr/o', 'آب ← hydrencephalomeningocele: فتق مغز و مننژ با مایع'])}${vs(['sarc/o', 'گوشت (بافت همبند) ← sarcocele'], ['sacr/o', 'استخوان خاجی ← sacrum'])}${memo('hidr/o را با «hide» به خاطر بسپار (عرقِ پنهان زیر لباس) و hydr/o را با «hydrate» (آب). sarc/o گوشت است (sarcoma تومور گوشتی) و sacr/o استخوان خاجی (sacrum).')}`),
          M(`${e('<b>hidropoiesis</b>')} یعنی…`, ['ساخته شدن عرق', 'ساخته شدن آب در مغز', 'تشکیل ادرار', 'تجمع مایع در بافت'], 'hidr/o = عرق + -poiesis = ساخت.'),
          L('لمس، تپش یا پلک؟', `سه واژه با صدای شبیه:<br>• <b>palpate</b>: لمس کردن با دست در معاینه<br>• <b>palpitate</b>: تپیدن قلب، احساس ضربان تند<br>• <b>palpebrate</b>: پلک زدن (${e('palpebr/o')} = پلک)${pearl('در پرونده: «abdomen palpated, no masses» یعنی شکم لمس شد و توده‌ای نبود؛ ولی «patient reports palpitations» یعنی بیمار از تپش قلب شکایت دارد.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['palpate', 'لمس کردن'], ['palpitate', 'تپیدن قلب'], ['palpebrate', 'پلک زدن']]),
          L('لایه یا خط؟', `${vs(['strata', 'جمعِ stratum: لایه‌ها (strata of tissues)'], ['striae', 'خط‌ها و شیارهای موازی؛ مثل ترک‌های پوستی'])}${vs(['perionychium', 'بافت دور ناخن (ساختار طبیعی)'], ['paronychia', 'عفونت و التهاب کنار ناخن'])}`),
          T('paronychia نام بافت طبیعی دور ناخن است.', false, 'نادرست؛ بافت طبیعی perionychium است و paronychia عفونت کنار ناخن.'),
          M('«پزشک شکم بیمار را ___ کرد و توده‌ای نیافت.» کدام واژه درست است؟', ['palpated', 'palpitated', 'palpebrated', 'perforated'], 'palpate = لمس کردن در معاینه.'),
          B('sacr/o به استخوان ___ اشاره دارد.', ['خاجی (sacrum)', 'ران', 'جناغ'], 'sacrum استخوان خاجی پایین ستون مهره‌هاست؛ sarc/o یعنی گوشت.'),
          S('املای انگلیسی «لمس کردن در معاینه» را بنویس', 'palpate', 'palpate؛ مقابل palpitate (تپش).', 'palp…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx9', title: 'اختصارهای پرونده', icon: '📋', items: [
          L('پرونده با اختصار نوشته می‌شود', `${tbl([['اختصار', 'شکل کامل', 'معنی'], ['ED', 'emergency department', 'اورژانس'], ['HPI', 'history of present illness', 'شرح حال بیماری فعلی'], ['ROS', 'review of systems', 'مرور دستگاه‌های بدن'], ['NKDA', 'no known drug allergies', 'حساسیت دارویی شناخته‌شده ندارد'], ['HEENT', 'head, eyes, ears, nose, throat', 'سر، چشم، گوش، بینی و حلق'], ['WNL', 'within normal limits', 'در محدوده طبیعی'], ['BP / Temp', 'blood pressure / temperature', 'فشار خون / دمای بدن'], ['UE / LE', 'upper / lower extremity', 'اندام فوقانی (دست) / تحتانی (پا)']])}`),
          M('در پرونده نوشته شده: «Allergies: NKDA». یعنی…', ['بیمار حساسیت دارویی شناخته‌شده‌ای ندارد', 'بیمار به همه داروها حساس است', 'نوع حساسیت معلوم نیست', 'بیمار دارو مصرف نمی‌کند'], 'no known drug allergies.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['HPI', 'شرح حال بیماری فعلی'], ['ROS', 'مرور دستگاه‌ها'], ['WNL', 'در محدوده طبیعی'], ['ED', 'اورژانس']]),
          L('یک پرونده واقعی', `پسر ۱۸ ماهه‌ای را به <b>ED</b> آورده‌اند: از سوراخ چپ بینی خون می‌آید (<b>epistaxis</b>) و بی‌قرار است. در معاینه <b>HEENT</b>، کودک در وضعیت <b>supine</b> (طاق‌باز) قرار می‌گیرد و یک تکه سیب‌زمینی سرخ‌کرده در قسمت <b>anterior</b> (جلویی) حفره بینی دیده می‌شود. پزشک آن را با پنس (forceps) بیرون می‌آورد.${fig('throat-exam', '', 'معاینه HEENT: گلو با چوب زبان و چراغ بررسی می‌شود.')}${pearl('کودکان نوپا زیاد اجسام کوچک را در nares یا ear canal فرو می‌کنند؛ بوی بد یا خونریزی یک‌طرفه بینی نشانه مهمی است.')}`),
          M('در این کودک، epistaxis یعنی…', ['خونریزی از بینی', 'جسم خارجی در گوش', 'عطسه مداوم', 'تنگی سوراخ بینی'], 'epistaxis = خونریزی بینی.', [['بیمار', 'پسر ۱۸ ماهه'], ['شکایت', 'خون از سوراخ چپ بینی'], ['معاینه', 'جسم خارجی در بخش anterior حفره بینی']]),
          T('معاینه HEENT شامل گوش، بینی و حلق است.', true, 'HEENT = head, eyes, ears, nose, throat.'),
          B('در پرونده، «Temp» یعنی ___ بدن.', ['دمای', 'فشار', 'وزن'], 'Temp = temperature؛ BP = blood pressure.'),
          M('«LE edema» در پرونده به ورم کجا اشاره دارد؟', ['اندام تحتانی (پاها)', 'اندام فوقانی (دست‌ها)', 'گوش', 'شکم'], 'LE = lower extremity؛ UE = upper extremity.'),
          S('املای انگلیسی «اورژانس» را بنویس (بدون اختصار)', ['emergency department', 'emergency'], 'ED = emergency department.', 'emerg…'),
          L('مرور سطح «زبان بالینی»', recap(['راه‌های دارو: PO دهان • SL زیر زبان • parenteral هر راهی جز گوارش', 'چهار تزریق: ID درم (۱۰–۱۵°) • SubQ چربی زیر پوست (۴۵°) • IM عضله (۹۰°) • IV سیاهرگ (۲۵°)', 'همزادها: hidr/o عرق ≠ hydr/o آب • sarc/o گوشت ≠ sacr/o خاجی • palpate لمس ≠ palpitate تپش', 'اختصارهای پرونده: ED، HPI، ROS، NKDA، HEENT، WNL، BP، UE و LE'])),
          N('ab:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۲: سازمان‌یابی بدن و سلول
 * از علوم بدن و پله‌های سازمان‌یابی (سلول ← بافت ← اندام ← دستگاه ← موجود زنده) تا ساختار سلول، DNA، تقسیم و رشد غیرطبیعی.
 * منابع: An Org Chart to Live By، Body Organization، Body Structure6، Organization of the Body و Basic Body Structure. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'og', sym: 'Cyt', name: 'سازمان‌یابی و سلول', short: 'سلول', sub: 'علوم بدن، پله‌های سازمان‌یابی، متابولیسم، ساختار سلول، DNA، میتوز و رشد غیرطبیعی',
    color: '#D6457A', dark: '#A8305C', light: '#FCE4EE',
    levels: ['از سلول تا انسان', 'درون سلول', 'ژن، تقسیم و آزمایشگاه'],
    gens: EA.genIds('og'),
    lessons: [
      /* ================= سطح ۱: از سلول تا انسان ================= */
      {
        id: 'og1', title: 'علم‌های بدن', icon: '🔭', items: [
          L('بدن را از چند زاویه می‌بینیم', `${tbl([['علم', 'چه چیزی را مطالعه می‌کند؟'], ['anatomy', 'ساختار بدن و رابطه اجزا؛ «بریدن و جدا کردن»'], ['physiology', 'کار اندام‌ها و این‌که چطور کار می‌کنند'], ['biology', 'علم زندگی و موجودات زنده'], ['embryology', 'رشد جنین از لقاح تا تولد'], ['histology', 'بافت‌ها زیر میکروسکوپ'], ['cytology', 'سلول‌ها و کارشان'], ['pathology', 'بیماری‌ها و تغییرات بافت']])}${memo('anatomy می‌گوید «چه هست»، physiology می‌گوید «چطور کار می‌کند». مثل نقشه یک خانه در برابر برق‌کشی آن!')}`),
          M('علمی که «چگونه کار کردن» اندام‌ها را بررسی می‌کند کدام است؟', ['physiology', 'anatomy', 'histology', 'embryology'], 'physi/o = طبیعت، کارکرد + -logy. آناتومی ساختار را بررسی می‌کند.'),
          P('هر علم را به موضوعش وصل کن', [['cytology', 'سلول'], ['histology', 'بافت'], ['embryology', 'جنین در حال رشد'], ['pathology', 'بیماری'], ['biology', 'زندگی']]),
          L('ریشه‌ها راز نام علم‌ها هستند', `${wb('bi/o', '-logy')} ← علمِ زندگی<br>${wb('path/o', '-logy')} ← علمِ بیماری<br>${wb('embry/o', '-logy')} ← علمِ رویان<br>و متخصص هر کدام با ${e('-logist')}: <b>pathologist</b>، <b>histologist</b>، <b>cytologist</b>.${pearl('نمونه بافتی که جراح برمی‌دارد به آزمایشگاه پاتولوژی می‌رود؛ histologist و pathologist آن را زیر میکروسکوپ بررسی می‌کنند.')}`),
          T('embryology علم بررسی رشد جنین است.', true, 'embry/o = رویان (جنین اولیه) + -logy.'),
          B('متخصص بررسی سلول‌ها ___ است.', ['cytologist', 'cytology', 'histology'], 'cyt/o + -logist.'),
          M(`${e('<b>pathology</b>')} یعنی…`, ['علم بیماری‌ها', 'علم ساختار بدن', 'علم جنین', 'علم داروها'], 'path/o = بیماری.'),
          W('واژه‌ای بساز به معنی «علم رشد جنین»', ['embry/o', '-logy'], ['cyt/o', '-logist', 'path/o'], 'embry/o (رویان) + -logy (علم) = embryology.'),
          S('املای انگلیسی «فیزیولوژی» را بنویس', 'physiology', 'physi/o + -logy.', 'physio…'),
          N('t2f:og')
        ]
      },
      {
        id: 'og2', title: 'پله‌های سازمان‌یابی', icon: '🪜', items: [
          L('از سلول تا انسان', `بدن مثل یک سازمان، سلسله‌مراتب دارد:${fig('levels')}• <b>cell</b>: کوچک‌ترین واحد زندگی<br>• <b>tissue</b>: سلول‌های هم‌کار<br>• <b>organ</b>: چند بافت که یک کار ویژه دارند<br>• <b>system</b>: چند اندام برای یک کار پیچیده<br>• <b>organism</b>: کل موجود زنده`),
          O('پله‌های سازمان‌یابی را از کوچک به بزرگ بچین', ['cell', 'tissue', 'organ', 'system', 'organism'], 'سلول ← بافت ← اندام ← دستگاه ← موجود زنده.'),
          L('یک مثال واقعی: عضله دوسر', `${fig('levels-org', '', 'سلول عضلانی ← بافت عضله اسکلتی ← اندام (عضله دوسر بازو) ← دستگاه عضلانی ← انسان')}پوست هم یک <b>اندام</b> است، چون از چند بافت (پوششی، همبند و عصبی) ساخته شده.${memo('مثل زبان: حرف ← واژه ← جمله ← بند ← کتاب. سلول حرفِ بدن است و موجود زنده کتابِ کامل.')}`),
          M('معده در کدام پله سازمان‌یابی قرار می‌گیرد؟', ['organ', 'tissue', 'system', 'cell'], 'معده از چند نوع بافت ساخته شده و کار ویژه‌ای دارد؛ پس اندام است. دستگاه گوارش «سیستم» است.', null, F('levels-cycle')),
          T('پوست یک بافت است، نه یک اندام.', false, 'نادرست؛ پوست اندامی است که از بافت‌های پوششی، همبند و عصبی ساخته شده.'),
          P('هر نمونه را به پله‌اش وصل کن', [['نورون', 'cell'], ['بافت چربی', 'tissue'], ['کلیه', 'organ'], ['دستگاه ادراری', 'system']]),
          L('چند عدد شگفت‌انگیز', `• بدن ۱۰ تا ۱۰۰ <b>تریلیون</b> سلول دارد<br>• همه سلول‌ها برای زنده ماندن به <b>غذا، آب و اکسیژن</b> نیاز دارند<br>• از هر اندام جفت (کلیه، ریه) <b>یکی</b> برای زنده ماندن کافی است<br>• در طول عمر حدود ۱۸ کیلوگرم پوست می‌ریزیم!`),
          B('گروهی از اندام‌ها که با هم یک کار پیچیده را انجام می‌دهند ___ نام دارد.', ['system', 'tissue', 'organism'], 'مثل دستگاه گوارش: دهان، مری، معده، روده‌ها و…'),
          S('املای انگلیسی «بافت» را بنویس', 'tissue', 'tissue؛ ریشه آن hist/o است.', 'tis…'),
          N('f2t:og')
        ]
      },
      {
        id: 'og3', title: 'متابولیسم و تعادل', icon: '⚖️', items: [
          L('ساختن و شکستن', `${fig('metabolism')}<b>metabolism</b> (${e('meta-')} = تغییر + ${e('bol/o')} = پرتاب + ${e('-ism')}) مجموع همه فرایندهای شیمیایی بدن است و دو نیمه دارد:${vs(['anabolism', 'ana- = بالا: ساختن مولکول‌های بزرگ از کوچک (رشد، ترمیم)'], ['catabolism', 'cata- = پایین: شکستن مولکول‌ها برای آزاد کردن انرژی'])}وقتی متابولیسم بایستد، موجود زنده می‌میرد.`),
          M(`${e('<b>catabolism</b>')} یعنی…`, ['شکستن مواد برای آزاد کردن انرژی', 'ساختن بافت تازه', 'تقسیم سلول', 'تعادل دمای بدن'], 'cata- = پایین، شکستن.'),
          P('پیشوند را به معنی‌اش وصل کن', [['ana-', 'بالا، ساختن'], ['cata-', 'پایین، شکستن'], ['meta-', 'تغییر'], ['homeo-', 'یکسان، پایدار']]),
          L('هومئوستاز: بدنِ متعادل', `<b>homeostasis</b> (${e('homeo-')} = یکسان + ${e('-stasis')} = ایستایی) یعنی بدن شرایط درونی را پایدار نگه می‌دارد: دما، فشار اسمزی، قند خون و سرعت تقسیم سلول‌ها.${pearl('تب، تعریق، لرز و تشنگی همه ابزارهای هومئوستاز هستند؛ بیماری یعنی جایی که این تعادل به هم خورده است.')}`),
          T('homeostasis یعنی تمایل بدن به ثابت نگه داشتن شرایط درونی.', true, 'درست؛ homeo (یکسان) + stasis (ایستایی).'),
          L('سوخت سلول', `سلول انرژی واکنش‌هایش را به شکل <b>ATP</b> (adenosine triphosphate) ذخیره می‌کند. سه گروه بزرگ مولکول‌های سلول:${tbl([['گروه', 'نمونه'], ['protein', 'آنزیم‌ها (enzyme)، برخی هورمون‌ها، مواد ساختاری'], ['carbohydrate', 'قندها و نشاسته؛ مثل glucose'], ['lipid', 'چربی‌ها']])}${memo('نام آنزیم‌ها اغلب با ‎-ase تمام می‌شود: lipase چربی را می‌شکند، protease پروتئین را.')}`),
          M('مولکول انرژی سلول کدام است؟', ['ATP', 'DNA', 'RNA', 'glucose'], 'adenosine triphosphate؛ گلوکز سوخت اولیه است ولی انرژی به شکل ATP ذخیره و مصرف می‌شود.'),
          B('پروتئینی که سرعت واکنش‌های شیمیایی را زیاد می‌کند ___ نام دارد.', ['enzyme', 'lipid', 'gene'], 'آنزیم‌ها پروتئینی‌اند و نامشان اغلب به ‎-ase ختم می‌شود.'),
          S('املای انگلیسی «متابولیسم» را بنویس', 'metabolism', 'meta- + bol/o + -ism.', 'meta…'),
          L('مرور سطح «از سلول تا انسان»', recap(['علم‌ها: anatomy ساختار • physiology کارکرد • histology بافت • cytology سلول • pathology بیماری • embryology جنین', '‎-logy علم است و ‎-logist متخصص آن', 'پله‌ها از کوچک به بزرگ: <bdi dir="ltr">cell → tissue → organ → system → organism</bdi>', 'metabolism دو نیمه دارد: anabolism ساختن و catabolism شکستن؛ homeostasis یعنی پایداری شرایط درونی'])),
          N('r2m:og')
        ]
      },

      /* ================= سطح ۲: درون سلول ================= */
      {
        id: 'og4', title: 'ساختار سلول', icon: '🫧', items: [
          L('سه بخشی که همه سلول‌ها دارند', `هر سلول، هر شکلی که داشته باشد، این سه بخش را دارد:${fig('cell')}• <b>cell membrane</b>: دیواره بیرونی؛ انتخاب می‌کند چه چیزی وارد و خارج شود<br>• <b>cytoplasm</b>: مایع درون سلول، دور هسته<br>• <b>nucleus</b>: مرکز کنترل؛ کروموزوم‌ها و DNA این‌جا هستند`),
          M('کدام بخش سلول مثل «مرکز فرماندهی» است؟', ['nucleus', 'cell membrane', 'cytoplasm', 'mitochondrion'], 'هسته کروموزوم‌ها را دارد و فعالیت‌های سلول را هدایت می‌کند.'),
          L('اندامک‌ها: کارگاه‌های کوچک', `درون سیتوپلاسم «اندامک‌ها» (organelles) کار می‌کنند:${tbl([['اندامک', 'کار'], ['mitochondrion (جمع: mitochondria)', 'نیروگاه؛ ساختن ATP'], ['ER (endoplasmic reticulum)', 'شبکه‌ای برای ساخت و حمل پروتئین و چربی'], ['ribosome', 'ساختن پروتئین'], ['cilia', 'زائده‌های مویی برای جابه‌جایی']])}${fig(['cell-3d', 'cell-generic'], ['سلول سه‌بعدی', 'اندامک‌های اصلی'])}`),
          P('هر بخش را به کارش وصل کن', [['cell membrane', 'کنترل ورود و خروج'], ['nucleus', 'نگهداری DNA'], ['mitochondrion', 'تولید انرژی'], ['cytoplasm', 'مایع درون سلول']]),
          M('در این تصویر، زائده‌های مویی پایین سلول چه نام دارند؟', ['cilia', 'nucleus', 'mitochondria', 'membrane'], 'cili/o = مو؛ مژک‌ها مثلاً در راه‌های هوایی مخاط را جابه‌جا می‌کنند.', null, F('cell-cilia')),
          T('cytoplasm مایعی است که درون هسته قرار دارد.', false, 'نادرست؛ سیتوپلاسم بیرون هسته و درون غشای سلول است. cyt/o (سلول) + -plasm (ماده شکل‌گرفته).'),
          B('جمع mitochondrion می‌شود ___.', ['mitochondria', 'mitochondrions', 'mitochondrii'], '‎-on → ‎-a.'),
          W('واژه‌ای بساز به معنی «ماده درون سلول»', ['cyt/o', '-plasm'], ['-cyte', 'kary/o', '-logy'], 'cyt/o + -plasm = cytoplasm.'),
          S('املای انگلیسی «هسته» را بنویس', 'nucleus', 'جمع آن nuclei است.', 'nucl…'),
          N('m2r:og')
        ]
      },
      {
        id: 'og5', title: 'سلول‌های تخصصی', icon: '🔬', items: [
          L('هر سلول، یک شغل', `سلول‌ها بسته به کارشان شکل و اندازه متفاوتی دارند:${fig('cell-types', '', 'سلول عصبی، گلبول سفید، سلول معمولی، اسپرم و سلول‌های عضلانی')}${tbl([['سلول', 'ویژگی'], ['nerve cell (neuron)', 'زائده‌های بلند برای رساندن پیام'], ['muscle cell', 'دراز و منقبض‌شونده'], ['epithelial cell', 'پوشاننده سطح‌ها'], ['adipocyte', 'سلول چربی؛ ذخیره انرژی'], ['erythrocyte', 'گلبول قرمز؛ حمل اکسیژن']])}`),
          M(`${e('<b>adipocyte</b>')} چه سلولی است؟`, ['سلول چربی', 'سلول استخوان', 'سلول عصبی', 'گلبول قرمز'], 'adip/o = چربی + -cyte = سلول.'),
          L('بزرگ‌ترین و کوچک‌ترین', `• بزرگ‌ترین سلول بدن: <b>ovum</b> (تخمک)<br>• کوچک‌ترین سلول بدن: <b>sperm</b> (اسپرم)<br>این دو سلول جنسی را <b>gamete</b> می‌نامند.${memo('-cyte همیشه یعنی «سلول»: erythrocyte (سلول قرمز)، leukocyte (سلول سفید)، adipocyte (سلول چربی)، osteocyte (سلول استخوان).')}`),
          T('بزرگ‌ترین سلول بدن انسان تخمک است.', true, 'درست؛ و کوچک‌ترین سلول اسپرم است.'),
          P('هر سلول را به کارش وصل کن', [['neuron', 'رساندن پیام عصبی'], ['erythrocyte', 'حمل اکسیژن'], ['adipocyte', 'ذخیره چربی'], ['gamete', 'تولیدمثل']]),
          L('سلول‌ها چه می‌کنند؟', `کارهای اصلی سلول‌ها:<br>• گرفتن غذا و اکسیژن و ساختن انرژی و گرما<br>• دفع مواد زائد<br>• پاسخ به تغییرات محیط (تحریک مکانیکی، شیمیایی و عصبی)<br>• رشد، ترشح و تولیدمثل${pearl('رشد غیرطبیعی سلول عامل مهمی در بسیاری از بیماری‌هاست؛ به همین دلیل سلول‌ها در پاتولوژی زیر میکروسکوپ بررسی می‌شوند.')}`),
          B('در erythrocyte، ریشه erythr/o یعنی ___.', ['قرمز', 'سفید', 'چربی'], 'erythr/o = قرمز.'),
          M('سلول‌های جنسی (تخمک و اسپرم) را چه می‌نامند؟', ['gamete', 'adipocyte', 'organelle', 'neuron'], 'gamete = سلول جنسی بالغ.'),
          W('واژه‌ای بساز به معنی «سلول چربی»', ['adip/o', '-cyte'], ['neur/o', '-oma', 'my/o'], 'adip/o + -cyte = adipocyte.'),
          N('d2t:og')
        ]
      },
      {
        id: 'og6', title: 'DNA و کروموزوم', icon: '🧬', items: [
          L('کتابخانه درون هسته', `${fig('dna')}• <b>chromosome</b>: ساختار نخ‌مانند در هسته؛ رشد، ترمیم و تولیدمثل را کنترل می‌کند<br>• <b>DNA</b> (deoxyribonucleic acid): ماده‌ای که کروموزوم از آن ساخته شده<br>• <b>gene</b>: بخشی از DNA که ساخت یک پروتئین (به‌ویژه آنزیم) را کنترل می‌کند<br>• <b>RNA</b>: خویشاوند DNA که به ساخت پروتئین کمک می‌کند`),
          M('هر سلول بدن انسان (به‌جز سلول‌های جنسی) چند کروموزوم دارد؟', ['۴۶ (۲۳ جفت)', '۲۳', '۴۶ جفت', '۹۲'], '۴۶ کروموزوم در ۲۳ جفت؛ تخمک و اسپرم ۲۳ تا دارند.'),
          L('کاریوتایپ: عکس خانوادگی کروموزوم‌ها', `${fig(['chromosomes', 'karyotype'], ['کروموزوم‌های یک سلول', 'کاریوتایپ: جفت‌ها به ترتیب اندازه'])}جفت ۲۳ کروموزوم‌های جنسی‌اند: <b>XX</b> در زن و <b>XY</b> در مرد.${memo('chrom/o = رنگ + -some = جسم: کروموزوم یعنی «جسم رنگی»؛ چون با رنگ‌آمیزی زیر میکروسکوپ پیدا شد.')}`),
          M('کاریوتایپ این تصویر مال زن است یا مرد؟', ['مرد؛ جفت آخر XY است', 'زن؛ جفت آخر XX است', 'نمی‌شود فهمید', 'سلول جنسی است'], 'در گوشه پایین جفت ۲۳ با X و Y دیده می‌شود.', null, F('karyotype')),
          P('هر واژه را به تعریفش وصل کن', [['gene', 'واحد وراثت؛ بخشی از DNA'], ['chromosome', 'ساختار نخ‌مانند در هسته'], ['karyotype', 'عکس مرتب کروموزوم‌ها'], ['RNA', 'کمک به ساخت پروتئین']]),
          T('ژن‌ها ساخت پروتئین‌ها و به‌ویژه آنزیم‌ها را کنترل می‌کنند.', true, 'درست؛ هر ژن نسخه ساخت یک پروتئین است.'),
          B('جفت ۲۳ کروموزوم‌ها در مرد ___ است.', ['XY', 'XX', 'YY'], 'زن XX و مرد XY.'),
          M(`${e('<b>DNA</b>')} مخفف چیست؟`, ['deoxyribonucleic acid', 'dorsal nerve area', 'double nucleus acid', 'diagnostic nuclear analysis'], 'اسید دئوکسی‌ریبونوکلئیک.'),
          S('املای انگلیسی «کروموزوم» را بنویس', 'chromosome', 'chrom/o + -some.', 'chromo…'),
          L('مرور سطح «درون سلول»', recap(['هر سلول: cell membrane (دیواره)، cytoplasm (مایع درون) و nucleus (مرکز کنترل)', 'اندامک‌ها: mitochondrion نیروگاه (ATP) • ribosome ساخت پروتئین • ER حمل • cilia جابه‌جایی', '‎-cyte یعنی سلول: erythrocyte، leukocyte، adipocyte، osteocyte', 'DNA در کروموزوم‌هاست؛ gene بخشی از DNA است؛ ۴۶ کروموزوم در ۲۳ جفت (XX زن، XY مرد)'])),
          N('ab:og')
        ]
      },

      /* ================= سطح ۳: ژن، تقسیم و آزمایشگاه ================= */
      {
        id: 'og7', title: 'تقسیم سلول', icon: '✂️', items: [
          L('میتوز: یک سلول، دو کپی', `<b>mitosis</b> (${e('mit/o')} = رشته) تقسیم سلول‌های بدن است: کروموزوم‌ها دو برابر می‌شوند و مساوی بین دو سلول دختر تقسیم می‌شوند. هر دو سلول دختر <b>۴۶</b> کروموزوم دارند.<br>چهار گام میتوز:<br>۱. کروموزوم‌ها <b>دو برابر</b> می‌شوند<br>۲. در <b>وسط</b> سلول ردیف می‌شوند<br>۳. به <b>دو سوی</b> سلول کشیده می‌شوند<br>۴. غشا سلول را <b>دو تا</b> می‌کند${fig('mitosis', '', 'مراحل میتوز زیر میکروسکوپ و در نقاشی: کروموزوم‌ها جدا می‌شوند و سلول دو تا می‌شود.')}`),
          L('میوز: نصف کردن برای تولیدمثل', `${fig('division')}<b>meiosis</b> فقط در ساخت سلول‌های جنسی (<b>gamete</b>) رخ می‌دهد و کروموزوم‌ها را <b>نصف</b> می‌کند: ۴۶ ← ۲۳. در لقاح (<b>fertilization</b>)، تخمک (۲۳) و اسپرم (۲۳) با هم یک سلول ۴۶تایی می‌سازند.${memo('meiosis را با «me-half» به خاطر بسپار: نصف شدن! mitosis «my twin» است: دو قلوی یکسان.')}`),
          M('کدام تقسیم کروموزوم‌ها را نصف می‌کند؟', ['meiosis', 'mitosis', 'metabolism', 'anabolism'], 'میوز سلول‌های جنسی ۲۳ کروموزومی می‌سازد.'),
          P('هر واژه را به معنی‌اش وصل کن', [['mitosis', 'تقسیم سلول‌های بدن'], ['meiosis', 'ساخت سلول‌های جنسی'], ['gamete', 'سلول جنسی ۲۳ کروموزومی'], ['fertilization', 'پیوستن تخمک و اسپرم']]),
          T('در میتوز، هر سلول دختر نیمی از کروموزوم‌های سلول مادر را می‌گیرد.', false, 'نادرست؛ در میتوز هر سلول دختر همه ۴۶ کروموزوم را دارد. نصف شدن مال میوز است.'),
          O('مراحل میتوز را به ترتیب بچین', ['کروموزوم‌ها دو برابر می‌شوند', 'کروموزوم‌ها در وسط سلول ردیف می‌شوند', 'کروموزوم‌ها به دو سوی سلول کشیده می‌شوند', 'غشا سلول را دو تا می‌کند'], 'دو برابر شدن ← ردیف شدن ← جدا شدن ← تقسیم سیتوپلاسم.'),
          B('در لقاح، ۲۳ کروموزوم تخمک با ۲۳ کروموزوم اسپرم یک سلول ___ کروموزومی می‌سازند.', ['۴۶', '۲۳', '۹۲'], '۲۳ + ۲۳ = ۴۶.'),
          M('ترمیم زخم پوست با کدام تقسیم انجام می‌شود؟', ['mitosis', 'meiosis', 'catabolism', 'fertilization'], 'سلول‌های پوست با میتوز تکثیر می‌شوند.'),
          S('املای انگلیسی «میوز» را بنویس', 'meiosis', 'meiosis؛ تقسیم کاهشی.', 'mei…'),
          N('sp:og')
        ]
      },
      {
        id: 'og8', title: 'رشد غیرطبیعی', icon: '⚠️', items: [
          L('وقتی سلول‌ها از کنترل خارج شوند', `${tbl([['واژه', 'معنی'], ['neoplasm', 'neo- (نو) + -plasm: رشد تازه؛ تومور'], ['carcinogen', 'carcin/o + -gen: عامل سرطان‌زا'], ['carcinogenic', 'سرطان‌زا (صفت)'], ['cytosis', 'وضعیت غیرطبیعی (افزایش) سلول‌ها'], ['organomegaly', 'organ/o (اندام) + -megaly (بزرگی): بزرگی غیرطبیعی یک اندام']])}${memo('-gen تولیدکننده است و -genic صفت آن: carcinogen (سیگار) یک ماده carcinogenic است.')}`),
          M(`${e('<b>neoplasm</b>')} یعنی…`, ['رشد تازه و غیرطبیعی بافت (تومور)', 'پلاسمای خون', 'سلول تازه متولدشده', 'ماده درون هسته'], 'neo- = نو + -plasm = تشکیل.'),
          L('-oma و -sarcoma', `${vs(['-oma', 'تومور یا توده: myoma = تومور عضله'], ['-sarcoma', 'تومور بدخیم بافت همبند: myosarcoma'])}${pearl('بیشتر -omaها خوش‌خیم‌اند (myoma، fibroma)؛ ولی carcinoma و sarcoma بدخیم‌اند. پسوند به تنهایی خوش‌خیم یا بدخیم بودن را نمی‌گوید.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['myoma', 'تومور عضله'], ['myosarcoma', 'تومور بدخیم عضله'], ['carcinogen', 'عامل سرطان‌زا'], ['organomegaly', 'بزرگی اندام']]),
          T('carcinogenic یعنی «سرطان‌زا».', true, 'carcin/o + -genic (تولیدکننده).'),
          B('در organomegaly، پسوند ___ یعنی «بزرگی».', ['-megaly', '-oma', '-genic'], 'organ/o + -megaly.'),
          M('کدام واژه به یک تومور بدخیم بافت همبند اشاره دارد؟', ['sarcoma', 'myoma', 'neoplasm خوش‌خیم', 'cytosis'], 'sarc/o = گوشت (بافت همبند).'),
          W('واژه‌ای بساز به معنی «عامل ایجاد سرطان»', ['carcin/o', '-gen'], ['-oma', 'neo-', '-genic'], 'carcin/o + -gen = carcinogen.'),
          S('املای انگلیسی «نئوپلاسم» را بنویس', 'neoplasm', 'neo- + -plasm.', 'neo…'),
          N('wb:og')
        ]
      },
      {
        id: 'og9', title: 'آزمایشگاه سلول و بافت', icon: '🧪', items: [
          L('بیوپسی: تکه‌ای برای تشخیص', `<b>biopsy</b> (Bx) یعنی برداشتن و بررسی <b>بافت زنده</b> برای رسیدن به تشخیص (${e('bi/o')} = زندگی + ${e('-opsy')} = دیدن). نمونه را histologist یا pathologist زیر میکروسکوپ بررسی می‌کند.`),
          L('عبارت‌های لاتین آزمایشگاه', `${tbl([['عبارت', 'معنی'], ['in vivo', 'درون بدن زنده'], ['in vitro', 'در آزمایشگاه؛ «درون شیشه»'], ['in situ', 'در جای اصلی خود؛ گسترش نیافته'], ['in toto', 'به طور کامل'], ['postmortem', 'پس از مرگ']])}${memo('vitro یعنی شیشه (مثل ویترین)؛ vivo یعنی زنده (مثل vivid). لوله آزمایش شیشه‌ای است!')}`),
          M('آزمایشی که روی سلول‌ها در ظرف آزمایشگاه انجام می‌شود…', ['in vitro', 'in vivo', 'in situ', 'postmortem'], 'vitro = شیشه.'),
          P('هر عبارت را به معنی‌اش وصل کن', [['in vivo', 'درون بدن زنده'], ['in vitro', 'در آزمایشگاه'], ['in situ', 'در جای اصلی'], ['postmortem', 'پس از مرگ']]),
          T('carcinoma in situ یعنی سرطانی که هنوز از جای اصلی‌اش گسترش نیافته است.', true, 'in situ = در محل اصلی.'),
          L('پرونده زکریا', `زکریا دانشجوی پزشکی است؛ خسته است، تمرکز ندارد و فکر می‌کند کم‌کاری تیروئید دارد. پزشک <b>ROS</b> و معاینه کامل انجام می‌دهد و آزمایش قند خون، <b>CBC</b> و تیروئید می‌خواهد؛ همه <b>WNL</b>. علت؟ کم‌خوابی و غذای نامناسب.${pearl('خودتشخیصی دانشجویان پزشکی آن‌قدر رایج است که نامی دارد: «medical student syndrome». آزمایش‌ها همیشه آخرین حرف را می‌زنند.')}`),
          M('در پرونده زکریا، ROS یعنی…', ['مرور دستگاه‌های بدن با پرسش از بیمار', 'شمارش کامل خون', 'نمونه‌برداری از بافت', 'بررسی رادیولوژی'], 'review of systems.', [['بیمار', 'زکریا، دانشجوی پزشکی'], ['شکایت', 'خستگی و کاهش تمرکز'], ['آزمایش‌ها', 'قند، CBC و تیروئید: WNL']]),
          B('اختصار Bx یعنی ___.', ['biopsy', 'body x-ray', 'blood exam'], 'Bx = biopsy.'),
          S('املای انگلیسی «بیوپسی» را بنویس', 'biopsy', 'bi/o (زندگی) + -opsy (دیدن).', 'bio…'),
          L('مرور سطح «ژن، تقسیم و آزمایشگاه»', recap(['mitosis: دو سلول یکسان ۴۶تایی • meiosis: سلول‌های جنسی ۲۳تایی', 'neoplasm رشد تازه (تومور) • carcinogen سرطان‌زا • ‎-oma توده • sarcoma تومور بدخیم همبند', 'biopsy (Bx) برداشتن بافت زنده برای تشخیص', 'in vivo درون بدن • in vitro در آزمایشگاه • in situ در جای خود • postmortem پس از مرگ'])),
          N('t2f:og')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۳: بافت‌ها و غشاها
 * چهار بافت اصلی (پوششی، همبند، عضلانی، عصبی)، غشاهای جداری و احشایی، پوست به‌عنوان یک اندام و آسیب‌های بافتی.
 * منابع: Body Organization5، Body Organs and Parts، Basic Body Structure، Body Structure6 و Body Structure. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ts', sym: 'Hist', name: 'بافت‌ها و غشاها', short: 'بافت', sub: 'بافت پوششی، همبند، عضلانی و عصبی، غشاهای جداری و احشایی، پوست و آسیب‌های بافتی',
    color: '#E07A1F', dark: '#B35E10', light: '#FFEEDC',
    levels: ['چهار بافت اصلی', 'عضله، عصب و غشا', 'پوست و آسیب بافت'],
    gens: EA.genIds('ts'),
    lessons: [
      /* ================= سطح ۱: چهار بافت اصلی ================= */
      {
        id: 'ts1', title: 'چهار خانواده بافت', icon: '🧵', items: [
          L('فقط چهار نوع بافت', `<b>tissue</b> گروهی از سلول‌های مشابه است که با هم یک کار را انجام می‌دهند. ${e('hist/o')} = بافت. کل بدن فقط از چهار نوع بافت ساخته شده:${fig('tissues')}• <b>epithelial</b> (پوششی): پوشاندن سطح‌ها و مفروش کردن مجاری<br>• <b>connective</b> (همبند): اتصال و حمایت؛ گسترده‌ترین بافت بدن<br>• <b>muscle</b> (عضلانی): انقباض و حرکت<br>• <b>nervous</b> (عصبی): رساندن پیام`),
          P('هر بافت را به کار اصلی‌اش وصل کن', [['epithelial', 'پوشاندن و مفروش کردن'], ['connective', 'اتصال و حمایت'], ['muscle', 'انقباض و حرکت'], ['nervous', 'رساندن پیام الکتریکی']]),
          L('بافت‌ها در سراسر بدن', `${fig('tissues-body', '', 'هر دایره بافتی را زیر میکروسکوپ نشان می‌دهد: عصبی در مغز، پوششی در پوست، عضلانی در قلب و ران، همبند در استخوان و غضروف.')}${memo('بدن را یک خانه تصور کن: کاشی و رنگ دیوارها (پوششی)، تیرآهن و ملات (همبند)، موتور آسانسور (عضلانی) و سیم‌کشی برق (عصبی).')}`),
          M('پرجمعیت‌ترین و گسترده‌ترین بافت بدن کدام است؟', ['connective', 'epithelial', 'muscle', 'nervous'], 'بافت همبند همه جا هست: استخوان، غضروف، تاندون، چربی و حتی خون.'),
          T('بافت عصبی بیشتر از هر بافت دیگری به اکسیژن و غذا نیاز دارد.', true, 'درست؛ برای همین مغز در کمبود اکسیژن خیلی زود آسیب می‌بیند.'),
          B('علم بررسی بافت‌ها ___ نام دارد.', ['histology', 'cytology', 'pathology'], 'hist/o + -logy.'),
          M('کدام نمونه بافت همبند نیست؟', ['پوست سطحی (اپیدرم)', 'استخوان', 'غضروف', 'چربی'], 'اپیدرم بافت پوششی است؛ بقیه همبندند.'),
          M('در این تصویر، بافتی که درون جمجمه نشان داده شده کدام است؟', ['nervous', 'epithelial', 'muscle', 'connective'], 'مغز و نخاع از بافت عصبی ساخته شده‌اند.', null, F('tissues-body')),
          S('املای انگلیسی «بافت همبند» را بنویس', 'connective tissue', 'connective tissue.', 'conn…'),
          N('t2f:ts')
        ]
      },
      {
        id: 'ts2', title: 'بافت پوششی', icon: '🧱', items: [
          L('پوشاننده بدن', `<b>epithelial tissue</b> (${e('epi-')} = روی + ${e('thel/o')} = نوک پستان، لایه نازک) سطح بیرونی بدن را می‌پوشاند، درون اندام‌های توخالی و مجاری را مفروش می‌کند و غدد را می‌سازد (<b>glandular epithelium</b>: اپیتلیوم غده‌ای که ترشح می‌سازد). کارهایش: <b>محافظت، جذب، ترشح و دفع</b>.`),
          L('ساده یا مطبق؟', `${fig('epithelium')}${fig(['epi-simple', 'epi-stratified'], ['simple: تک‌لایه', 'stratified: چندلایه'])}<b>stratum</b> یعنی لایه (جمع: <b>strata</b>).${memo('stratified را با «طبقه‌های ساختمان» به خاطر بسپار؛ هرچه طبقه بیشتر، محافظت بیشتر. پوست مطبق است، دیواره روده ساده.')}`),
          M('اپیتلیوم چندلایه که بافت‌های زیرین را محافظت می‌کند چه نام دارد؟', ['stratified', 'simple', 'striated', 'smooth'], 'stratum = لایه.', null, F('epi-stratified')),
          P('هر نوع را به کارش وصل کن', [['simple epithelium', 'جذب و انتقال مواد'], ['stratified epithelium', 'محافظت از لایه‌های زیر'], ['glandular epithelium', 'ساختن ترشح در غدد']]),
          T('درون دستگاه گوارش، تنفس و ادراری را بافت پوششی مفروش کرده است.', true, 'درست؛ بافت پوششی هم سطح بیرونی و هم سطح درونی مجاری را می‌پوشاند.'),
          L('تومور بافت پوششی', `${wb('epitheli/o', '-oma')} ← <b>epithelioma</b>: تومور بافت پوششی.${pearl('بیشتر سرطان‌های انسان (carcinoma) از بافت پوششی شروع می‌شوند؛ چون این سلول‌ها مدام تقسیم می‌شوند تا سطح را تازه نگه دارند.')}`),
          B('جمع stratum (لایه) ___ است.', ['strata', 'stratums', 'striae'], '‎-um → ‎-a. striae یعنی خط‌ها و شیارها.'),
          M(`${e('<b>epithelioma</b>')} یعنی…`, ['تومور بافت پوششی', 'التهاب بافت پوششی', 'برداشتن بافت پوششی', 'سلول پوششی سالم'], 'epitheli/o + -oma.'),
          S('املای انگلیسی «اپیتلیوم» را بنویس', 'epithelium', 'epithelium؛ جمع epithelia.', 'epith…'),
          N('r2m:ts')
        ]
      },
      {
        id: 'ts3', title: 'بافت همبند', icon: '🦴', items: [
          L('چسب و داربست بدن', `<b>connective tissue</b> اجزای بدن را به هم وصل می‌کند و نگه می‌دارد:${tbl([['بافت', 'ریشه', 'کار'], ['bone', 'oste/o', 'داربست و حمایت'], ['cartilage', 'chondr/o', 'ضربه‌گیر در مفصل‌ها'], ['tendon', 'tend/o', 'اتصال عضله به استخوان'], ['ligament', '—', 'اتصال استخوان به استخوان'], ['adipose', 'adip/o، lip/o', 'ذخیره انرژی و بالشتک'], ['blood', 'hem/o', 'بافت همبند مایع']])}`),
          M('کدام بافت عضله را به استخوان وصل می‌کند؟', ['tendon', 'ligament', 'cartilage', 'adipose'], 'تاندون = عضله به استخوان؛ رباط = استخوان به استخوان.'),
          L('زیر میکروسکوپ', `${fig('connective', '', 'A: بافت چربی (adipose) • B: غضروف (cartilage) • C: استخوان (bone)')}${memo('تاندون: Tendon = To bone from muscle (T-T)؛ رباط: Ligament = Links bones (L-L)')}`),
          P('هر ریشه را به بافتش وصل کن', [['oste/o', 'استخوان'], ['chondr/o', 'غضروف'], ['adip/o', 'چربی'], ['fibr/o', 'رشته (فیبر)'], ['tend/o', 'تاندون']]),
          M('در این تصویر، بخش B که سلول‌ها در حفره‌های کوچک ماده سخت قرار دارند کدام بافت است؟', ['cartilage', 'adipose', 'bone', 'muscle'], 'سلول‌های غضروف (chondrocytes) در حفره‌هایی به نام lacuna قرار دارند.', null, F('connective')),
          T('خون هم نوعی بافت همبند است.', true, 'درست؛ بافت همبند مایع با ماده زمینه‌ای (پلاسما).'),
          B('در hypochondriac، ریشه chondr/o یعنی ___.', ['غضروف', 'استخوان', 'دنده'], 'ناحیه زیر غضروف دنده‌ها.'),
          W('واژه‌ای بساز به معنی «سلول چربی»', ['adip/o', '-cyte'], ['oste/o', 'chondr/o', '-oma'], 'adipocyte.'),
          S('املای انگلیسی «غضروف» را بنویس', 'cartilage', 'cartilage؛ ریشه chondr/o.', 'carti…'),
          L('مرور سطح «چهار بافت اصلی»', recap(['چهار بافت: epithelial پوشاندن • connective اتصال و حمایت • muscle انقباض • nervous پیام', 'اپیتلیوم simple (یک لایه، جذب) و stratified (چند لایه، محافظت)؛ glandular ترشح می‌سازد', 'همبند: bone استخوان • cartilage غضروف • tendon عضله به استخوان • ligament استخوان به استخوان • adipose چربی • blood خون', 'ریشه‌ها: hist/o بافت • oste/o استخوان • chondr/o غضروف • adip/o و lip/o چربی'])),
          N('m2r:ts')
        ]
      },

      /* ================= سطح ۲: عضله، عصب و غشا ================= */
      {
        id: 'ts4', title: 'سه نوع عضله', icon: '💪', items: [
          L('بافتی که منقبض می‌شود', `<b>muscle tissue</b> (${e('my/o')}، ${e('muscul/o')}) با انقباض و انبساط حرکت می‌سازد:${fig('muscles')}• <b>skeletal</b>: متصل به استخوان؛ ارادی و راه‌راه<br>• <b>cardiac</b>: فقط در دیواره قلب؛ غیرارادی و راه‌راه<br>• <b>smooth</b>: دیواره روده، رحم و رگ‌ها؛ غیرارادی و صاف`),
          P('هر عضله را به جایش وصل کن', [['skeletal', 'متصل به استخوان'], ['cardiac', 'فقط در قلب'], ['smooth', 'دیواره روده، رحم و رگ‌ها']]),
          L('زیر میکروسکوپ', `${fig('muscle-types', '', 'A: اسکلتی با خط‌های عرضی (striations) • B: قلبی • C: صاف')}${vs(['voluntary', 'ارادی: عضله اسکلتی؛ به فرمان ما'], ['involuntary', 'غیرارادی: قلبی و صاف'])}${memo('striated یعنی «راه‌راه». اسکلتی و قلبی هر دو راه‌راه‌اند؛ صاف همان‌طور که از نامش پیداست، صاف است.')}`),
          M('کدام عضله هم مخطط است و هم غیرارادی؟', ['cardiac', 'skeletal', 'smooth', 'visceral'], 'عضله قلبی راه‌راه است ولی به فرمان ما نیست.'),
          T('عضله صاف را عضله احشایی (visceral) هم می‌نامند.', true, 'درست؛ چون در دیواره احشا (اندام‌های درونی) است.'),
          L('التهاب و تومور عضله', `• ${wb('my/o', '-itis')} ← <b>myositis</b>: التهاب عضله<br>• ${wb('my/o', '-oma')} ← <b>myoma</b>: تومور خوش‌خیم عضله<br>• ${wb('my/o', '-sarcoma')} ← <b>myosarcoma</b>: تومور بدخیم عضله${pearl('myoma رحم (fibroid) شایع‌ترین تومور خوش‌خیم زنان است و از عضله صاف رحم شروع می‌شود.')}`),
          B('عضله اسکلتی را به دلیل خط‌های عرضی، عضله ___ هم می‌نامند.', ['مخطط (striated)', 'صاف', 'احشایی'], 'striated = راه‌راه.'),
          M(`${e('<b>myositis</b>')} یعنی…`, ['التهاب عضله', 'تومور عضله', 'درد عصب', 'پارگی تاندون'], 'my/o + -itis.'),
          W('واژه‌ای بساز به معنی «تومور بدخیم عضله»', ['my/o', '-sarcoma'], ['-oma', '-itis', 'neur/o'], 'myosarcoma.'),
          N('wb:ts')
        ]
      },
      {
        id: 'ts5', title: 'بافت عصبی', icon: '⚡', items: [
          L('سیم‌کشی بدن', `<b>nervous tissue</b> (${e('neur/o')}) پیام‌های الکتریکی را بین مغز، نخاع و همه بخش‌های بدن می‌برد و فعالیت‌ها را هماهنگ می‌کند. واحد کاری آن <b>neuron</b> (سلول عصبی) است و علمِ دستگاه عصبی <b>neurology</b> نام دارد.${fig('nerve-tissue', '', 'A: نورون با جسم سلولی و رشته‌ها • B: دسته‌های رشته عصبی در یک عصب • C: ماده خاکستری و سفید')}`),
          M('سلول عملکردی دستگاه عصبی چه نام دارد؟', ['neuron', 'neuroma', 'nephron', 'myocyte'], 'neuron = سلول عصبی.'),
          L('خاکستری و سفید', `${vs(['gray matter', 'جسم سلولی نورون‌ها؛ پردازش'], ['white matter', 'رشته‌های عصبی پوشیده با میلین؛ انتقال'])}بافت عصبی مغز، نخاع و عصب‌های سراسر بدن را می‌سازد.${pearl('neuropathy (بیماری عصب) در دیابت شایع است: بیمار سوزن‌سوزن شدن و بی‌حسی پاها را حس می‌کند.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['neuron', 'سلول عصبی'], ['neuropathy', 'بیماری عصب'], ['neuritis', 'التهاب عصب'], ['neurology', 'علم دستگاه عصبی']]),
          T('بافت عصبی فقط در مغز وجود دارد.', false, 'نادرست؛ نخاع و همه عصب‌های محیطی هم از بافت عصبی‌اند.'),
          B('در neuropathy، پسوند ___ یعنی «بیماری».', ['-pathy', '-itis', '-logy'], 'neur/o + -pathy.'),
          M('ماده خاکستری مغز بیشتر از چه ساخته شده؟', ['جسم سلولی نورون‌ها', 'رشته‌های میلین‌دار', 'سلول‌های چربی', 'غضروف'], 'ماده سفید رشته‌های پوشیده با میلین است.'),
          W('واژه‌ای بساز به معنی «بیماری عصب»', ['neur/o', '-pathy'], ['my/o', '-itis', '-oma'], 'neuropathy.'),
          S('املای انگلیسی «نورون» را بنویس', 'neuron', 'neuron.', 'neu…'),
          N('f2t:ts')
        ]
      },
      {
        id: 'ts6', title: 'غشاهای بدن', icon: '🫧', items: [
          L('پوشش دولایه اندام‌ها', `حفره‌های بزرگ بدن با یک <b>غشای دولایه</b> مفروش شده‌اند:${fig('membranes')}${vs(['parietal', 'لایه‌ای که دیواره حفره را می‌پوشاند (pariet/o = دیواره)'], ['visceral', 'لایه‌ای که روی خود اندام است (viscer/o = احشا)'])}`),
          L('پلور و صفاق', `• <b>pleura</b>: غشای دولایه دور ریه‌ها و دیواره قفسه سینه<br>• <b>peritoneum</b>: غشای دولایه حفره شکمی-لگنی<br>• <b>retroperitoneal</b>: پشت صفاق؛ <b>کلیه‌ها</b> تنها اندام بزرگ شکمی‌اند که بیرون و پشت کیسه صفاق قرار دارند${memo('pleura = ریه (pleur/o)، peritoneum = شکم. هر دو با P شروع می‌شوند و هر دو دو لایه دارند: parietal و visceral؛ باز هم P و V!')}`),
          M('کلیه‌ها نسبت به صفاق کجا هستند؟', ['retroperitoneal: پشت صفاق', 'درون کیسه صفاق', 'درون پلور', 'روی دیافراگم'], 'retro- = پشت.'),
          P('هر واژه را به معنی‌اش وصل کن', [['pleura', 'غشای ریه و قفسه سینه'], ['peritoneum', 'غشای حفره شکمی'], ['parietal', 'لایه دیواره‌ای'], ['visceral', 'لایه روی اندام']]),
          T('لایه احشایی پلور مستقیماً روی سطح ریه قرار دارد.', true, 'درست؛ لایه جداری دیواره قفسه سینه را می‌پوشاند.'),
          L('غشای مخاطی', `غشاهای مخاطی (mucous membranes) درون مجاری رو به بیرون (دهان، بینی، گوارش) را می‌پوشانند و <b>mucus</b> (مخاط) ترشح می‌کنند. ${e('muc/o')} = مخاط.${pearl('املا را دقت کن: mucus اسم است (خود مخاط) و mucous صفت (mucous membrane).')}`),
          B('ماده لزجی که غشای مخاطی ترشح می‌کند ___ نام دارد.', ['mucus', 'mucous', 'pleura'], 'mucus اسم است؛ mucous صفت.'),
          M('التهاب پرده جنب (پلور) چه نام دارد؟', ['pleuritis', 'peritonitis', 'pneumonia', 'myositis'], 'pleur/o + -itis. التهاب صفاق peritonitis است.'),
          W('واژه‌ای بساز به معنی «پشت صفاق»', ['retro-', 'peritone/o', '-al'], ['pleur/o', 'sub-', 'pariet/o'], 'retroperitoneal.'),
          L('مرور سطح «عضله، عصب و غشا»', recap(['عضله: skeletal ارادی و راه‌راه • cardiac غیرارادی و راه‌راه • smooth (visceral) غیرارادی و صاف', 'my/o: myositis التهاب • myoma تومور خوش‌خیم • myosarcoma تومور بدخیم', 'عصبی: neuron سلول عصبی • gray matter جسم سلولی • white matter رشته‌های میلین‌دار', 'غشا: parietal روی دیواره • visceral روی اندام • pleura دور ریه • peritoneum در شکم • mucus اسم و mucous صفت'])),
          N('ab:ts')
        ]
      },

      /* ================= سطح ۳: پوست و آسیب بافت ================= */
      {
        id: 'ts7', title: 'پوست، عضوی از چند بافت', icon: '🖐️', items: [
          L('دستگاه پوششی', `<b>integumentary system</b> (پوشش بدن) شامل پوست و ضمیمه‌هایش است: <b>مو، ناخن، غدد عرق و غدد چربی</b>. پوست یک سد دوطرفه محافظ است و به تنظیم دما کمک می‌کند. ${e('derm/o')}، ${e('dermat/o')}، ${e('cutane/o')} = پوست.`),
          L('لایه‌های پوست', `${fig('routes', '', 'از بیرون به درون: اپیدرم، درم، زیرجلد (چربی) و عضله')}• <b>epidermis</b>: لایه بیرونی (epi- = روی)<br>• <b>dermis</b>: لایه زیرین با رگ و عصب<br>• <b>subcutaneous</b>: زیر پوست، بافت چربی`),
          M('لایه بیرونی پوست چه نام دارد؟', ['epidermis', 'dermis', 'subcutaneous', 'perionychium'], 'epi- (روی) + derm/o (پوست).'),
          L('عددهای پوست', `• هر اینچ مربع پوست حدود <b>۳ میلیون سلول</b> دارد<br>• در کل پوست حدود <b>۷۲ کیلومتر</b> عصب هست<br>• پوست از بافت پوششی، همبند و عصبی ساخته شده؛ پس یک <b>اندام</b> است${memo('dermatology = derm (پوست) + logy: متخصص پوست dermatologist است. -cutaneous همان پوست است، ولی لاتین.')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['dermat/o', 'پوست'], ['onych/o', 'ناخن'], ['hidr/o', 'عرق'], ['lip/o', 'چربی']]),
          L('ناخن و دور ناخن', `${vs(['perionychium', 'peri- + onych/o: بافت دور ناخن'], ['paronychia', 'para- + onych/o: عفونت کنار ناخن'])}${pearl('paronychia اغلب پس از کندن پوست کنار ناخن یا مانیکور ایجاد می‌شود: کنار ناخن قرمز، متورم و دردناک است.')}`),
          T('دستگاه integumentary شامل غدد عرق و چربی هم می‌شود.', true, 'درست؛ مو، ناخن و غدد ضمیمه‌های پوست‌اند.'),
          B('عفونت بافت کنار ناخن ___ نام دارد.', ['paronychia', 'perionychium', 'onychoma'], 'para- = کنار.'),
          W('واژه‌ای بساز به معنی «علم پوست»', ['dermat/o', '-logy'], ['onych/o', '-itis', 'hidr/o'], 'dermatology.'),
          N('d2t:ts')
        ]
      },
      {
        id: 'ts8', title: 'آسیب و ترمیم بافت', icon: '🩹', items: [
          L('پاسخ بافت به آسیب', `<b>inflammation</b> پاسخ محافظتی بافت به تحریک، عفونت یا آلرژی است. نشانه‌ها: قرمزی، گرمی، تورم و درد. پسوند آن ${e('-itis')} است.${tbl([['واژه', 'معنی'], ['myositis', 'التهاب عضله'], ['neuritis', 'التهاب عصب'], ['pleuritis', 'التهاب پرده جنب'], ['dermatitis', 'التهاب پوست']])}`),
          M('پسوند «التهاب» کدام است؟', ['-itis', '-osis', '-oma', '-pathy'], '-itis = التهاب.'),
          L('اسکار و چسبندگی', `• <b>fibrosis</b>: جایگزینی بافت با بافت رشته‌ای (اسکار)؛ ${e('fibr/o + -osis')}<br>• <b>adhesion</b>: نوارهای بافت اسکار که دو سطحی را که باید جدا باشند به هم می‌چسباند؛ بیشتر در <b>شکم</b> پس از جراحی، التهاب یا آسیب<br>• <b>liposuction</b>: ${e('lip/o')} (چربی) + suction (مکش)؛ برداشتن چربی زیر پوست با مکش${pearl('چسبندگی‌های شکمی پس از جراحی شایع‌ترین علت انسداد روده در بزرگسالان‌اند.')}`),
          L('وقتی التهاب همه‌گیر شود', `<b>sepsis</b> پاسخ التهابی بدن به عفونت است؛ همراه با <b>تب</b>، <b>تند شدن ضربان قلب و تنفس</b> و <b>افت فشار خون</b>. یک اورژانس پزشکی است.${memo('sepsis را با «سپتیک» (عفونی) به خاطر بسپار: septic tank هم یعنی مخزن فاضلاب آلوده!')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['fibrosis', 'تشکیل بافت رشته‌ای'], ['adhesion', 'چسبیدن دو سطح با اسکار'], ['inflammation', 'پاسخ محافظتی بافت'], ['sepsis', 'پاسخ التهابی به عفونت در کل بدن']]),
          T('adhesion بیشتر پس از جراحی شکم ایجاد می‌شود.', true, 'درست؛ جراحی، التهاب یا آسیب می‌تواند نوارهای اسکار بسازد.'),
          M('بیماری با تب، ضربان و تنفس تند و افت فشار پس از عفونت، به کدام اشاره دارد؟', ['sepsis', 'fibrosis', 'adhesion', 'myoma'], 'سپسیس پاسخ التهابی سیستمیک به عفونت است.'),
          B('liposuction یعنی مکیدن و برداشتن ___.', ['چربی', 'عضله', 'مایع مغزی'], 'lip/o = چربی.'),
          S('املای انگلیسی «التهاب» را بنویس', 'inflammation', 'inflammation؛ دو m دارد.', 'inflam…'),
          N('sp:ts')
        ]
      },
      {
        id: 'ts9', title: 'بافت‌ها در عمل', icon: '🏋️', items: [
          L('یک عضله، چند بافت', `عضله دوسر بازو (<b>biceps brachii</b>) نشان می‌دهد چند بافت با هم یک اندام می‌سازند: <b>بافت عضلانی</b> منقبض می‌شود، <b>تاندون</b> (همبند) آن را به استخوان وصل می‌کند و <b>عصب</b> فرمان می‌دهد.${fig('biceps', '', 'انقباض عضله دوسر آرنج را خم می‌کند (flexion)؛ تاندون‌ها عضله را به استخوان‌ها متصل کرده‌اند.')}`),
          M('در این تصویر، بخشی که عضله را به استخوان وصل کرده چه نام دارد؟', ['tendon', 'ligament', 'cartilage', 'nerve'], 'tendon = عضله به استخوان.', null, F('biceps')),
          L('نام عضله از کجا می‌آید؟', `• <b>biceps</b> = bi- (دو) + ceps (سر): عضله دوسر<br>• <b>brachii</b> = مربوط به بازو (${e('brachi/o')})<br>${pearl('تزریق عضلانی (IM) اغلب در عضله دلتوئید شانه یا عضله سرینی انجام می‌شود؛ چون حجم عضله زیاد است و از رگ‌ها و عصب‌های بزرگ دور است.')}`),
          P('هر بخش را به بافتش وصل کن', [['تار عضله', 'بافت عضلانی'], ['تاندون', 'بافت همبند'], ['پوست روی بازو', 'بافت پوششی'], ['عصب بازو', 'بافت عصبی']]),
          T('پیشوند bi- در biceps یعنی «دو».', true, 'biceps = دو سر؛ triceps = سه سر.'),
          O('از کوچک به بزرگ بچین', ['سلول عضلانی', 'بافت عضله اسکلتی', 'عضله دوسر بازو', 'دستگاه عضلانی'], 'سلول ← بافت ← اندام ← دستگاه.'),
          B('رباط (ligament) استخوان را به ___ وصل می‌کند.', ['استخوان', 'عضله', 'پوست'], 'رباط استخوان را به استخوان وصل می‌کند؛ تاندون عضله را به استخوان.'),
          M('کدام بافت در زانو نقش ضربه‌گیر دارد؟', ['cartilage', 'tendon', 'muscle', 'epithelium'], 'غضروف مفصلی ضربه‌گیر است.'),
          S('املای انگلیسی «تاندون» را بنویس', 'tendon', 'tend/o، tendin/o.', 'ten…'),
          L('مرور سطح «پوست و آسیب بافت»', recap(['پوست = epidermis + dermis؛ زیر آن subcutaneous (چربی)؛ derm/o، dermat/o و cutane/o = پوست', 'perionychium بافت دور ناخن ≠ paronychia عفونت کنار ناخن', 'آسیب: inflammation التهاب با پسوند ‎-itis • fibrosis اسکار • adhesion چسبندگی • sepsis التهاب همه‌گیر در عفونت', 'هر اندام از چند بافت ساخته می‌شود؛ مثل عضله دوسر: عضله + تاندون + عصب'])),
          N('m2r:ts')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۴: دستگاه‌ها و اندام‌ها
 * نقشه دستگاه‌های بدن، ریشه‌های اندام‌ها در هر دستگاه (با جدول‌های ریشه کتاب) و تخصص‌های پزشکی مربوط.
 * منابع: Basic Body Structure (جدول‌های ریشه هر دستگاه)، Body Organization5، Body Organs and Parts و The Human Body An Orientation. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'sy', sym: 'Sys', name: 'دستگاه‌ها و اندام‌ها', short: 'دستگاه', sub: 'دستگاه‌های بدن، اندام‌ها و ریشه‌هایشان، از پوست و اسکلت تا غدد، و تخصص‌های پزشکی',
    color: '#12A594', dark: '#0B7A6C', light: '#D9F5EF',
    levels: ['نقشه دستگاه‌ها', 'گردش، تنفس و گوارش', 'دفع، کنترل و تخصص‌ها'],
    gens: EA.genIds('sy'),
    lessons: [
      /* ================= سطح ۱: نقشه دستگاه‌ها ================= */
      {
        id: 'sy1', title: 'نقشه دستگاه‌ها', icon: '🗺️', items: [
          L('دوازده تیم یک بدن', `<b>system</b> (دستگاه) گروهی از اندام‌هاست که برای یک کار پیچیده با هم کار می‌کنند. کتاب‌ها ۱۱ تا ۱۳ دستگاه می‌شمارند:${fig('systems')}`),
          L('کار هر دستگاه در یک جمله', `${tbl([['دستگاه', 'کار'], ['integumentary', 'پوست و ضمیمه‌ها: سد محافظ دوطرفه و تنظیم دما'], ['musculoskeletal', 'حمایت، حرکت، ساخت سلول‌های خون، ذخیره مواد معدنی'], ['cardiovascular', 'پمپ کردن خون برای رساندن غذا و اکسیژن'], ['lymphatic and immune', 'دفاع در برابر بیماری و میکروب'], ['nervous', 'دریافت اطلاعات حسی و هماهنگ کردن پاسخ'], ['endocrine', 'تنظیم متابولیسم با هورمون‌ها'], ['respiratory', 'گرفتن اکسیژن و دفع دی‌اکسید کربن'], ['digestive', 'گوارش و جذب غذا'], ['urinary', 'صاف کردن خون و دفع مواد زائد'], ['reproductive', 'ساخت تخمک و اسپرم؛ رشد جنین']])}${memo('integumentary از integument (پوشش) آمده؛ مثل «جلد» کتاب که همه صفحه‌ها را می‌پوشاند.')}`),
          P('هر دستگاه را به کار اصلی‌اش وصل کن', [['respiratory', 'گرفتن اکسیژن، دفع CO₂'], ['digestive', 'گوارش و جذب غذا'], ['urinary', 'صاف کردن خون و دفع مواد زائد'], ['endocrine', 'تنظیم با هورمون‌ها'], ['integumentary', 'سد محافظ و تنظیم دما']]),
          M('کدام دستگاه «سد محافظ دوطرفه» بدن است و به تنظیم دما کمک می‌کند؟', ['integumentary', 'endocrine', 'lymphatic', 'urinary'], 'پوست و ضمیمه‌هایش.'),
          T('دستگاه اسکلتی-عضلانی در ساخت سلول‌های خون هم نقش دارد.', true, 'درست؛ مغز قرمز استخوان سلول‌های خون را می‌سازد.'),
          B('دستگاه ___ با هورمون‌هایی که مستقیم به خون می‌ریزد، متابولیسم را تنظیم می‌کند.', ['endocrine', 'digestive', 'integumentary'], 'endo- (درون) + crin/o (ترشح).'),
          M('کدام دستگاه خون را برای رساندن مواد غذایی و اکسیژن پمپ می‌کند؟', ['cardiovascular', 'respiratory', 'lymphatic', 'nervous'], 'cardi/o (قلب) + vascul/o (رگ).'),
          W('واژه‌ای بساز به معنی «مربوط به قلب و رگ‌ها»', ['cardi/o', 'vascul/o', '-ar'], ['pulmon/o', '-logy', 'gastr/o'], 'cardiovascular.'),
          S('املای انگلیسی «دستگاه پوششی» را بنویس', 'integumentary', 'integumentary system.', 'integu…'),
          N('t2f:sy')
        ]
      },
      {
        id: 'sy2', title: 'اسکلت و عضله', icon: '🦴', items: [
          L('داربست متحرک', `دستگاه <b>musculoskeletal</b> شامل ۲۰۶ استخوان، مفصل‌ها، غضروف‌ها، رباط‌ها و همه عضلات است.${fig(['sys-skeletal', 'sys-muscular'], ['دستگاه اسکلتی و ریشه‌هایش', 'دستگاه عضلانی و ریشه‌هایش'])}${tbl([['ریشه', 'معنی'], [e('oste/o'), 'استخوان'], [e('arthr/o'), 'مفصل'], [e('chondr/o'), 'غضروف'], [e('my/o، muscul/o'), 'عضله'], [e('tend/o، tendin/o'), 'تاندون']])}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['arthr/o', 'مفصل'], ['oste/o', 'استخوان'], ['chondr/o', 'غضروف'], ['tendin/o', 'تاندون']]),
          M(`${e('<b>arthritis</b>')} یعنی…`, ['التهاب مفصل', 'التهاب استخوان', 'التهاب عضله', 'التهاب تاندون'], 'arthr/o + -itis.'),
          L('واژه‌سازی با استخوان و مفصل', `• ${wb('oste/o', 'arthr/o', '-itis')} ← <b>osteoarthritis</b>: التهاب استخوان و مفصل (آرتروز)<br>• ${wb('chondr/o', '-oma')} ← <b>chondroma</b>: تومور غضروف<br>• ${wb('my/o', '-algia')} ← <b>myalgia</b>: درد عضله${pearl('متخصص استخوان و مفصل orthopedist است: orth/o (راست) + ped/o (کودک)؛ چون این رشته در آغاز برای راست کردن استخوان‌های کج کودکان پدید آمد.')}`),
          T('بدن بزرگسال ۲۰۶ استخوان دارد.', true, 'درست؛ نوزاد استخوان‌های بیشتری دارد که بعداً جوش می‌خورند.'),
          B('در myalgia، پسوند ___ یعنی «درد».', ['-algia', '-itis', '-oma'], '‎-algia و ‎-dynia هر دو یعنی درد.'),
          M('ستون مهره‌ها جزو کدام دستگاه است؟', ['اسکلتی', 'عصبی', 'لنفاوی', 'پوششی'], 'ستون مهره‌ها استخوانی است؛ نخاع درون آن بافت عصبی است.', null, F('sys-skeletal')),
          W('واژه‌ای بساز به معنی «التهاب مفصل»', ['arthr/o', '-itis'], ['oste/o', '-oma', 'my/o'], 'arthritis.'),
          S('املای انگلیسی «استخوان‌شناسی/ارتوپدی» را بنویس', 'orthopedics', 'orth/o + ped/o + -ics.', 'ortho…'),
          N('r2m:sy')
        ]
      },
      {
        id: 'sy3', title: 'عصب و حواس', icon: '🧠', items: [
          L('فرمانده بدن', `دستگاه <b>nervous</b> بیشتر فعالیت‌های بدن را تنظیم می‌کند:<br>• <b>CNS</b> (central nervous system): مغز و نخاع<br>• عصب‌های محیطی: ۱۲ جفت عصب جمجمه‌ای و ۳۱ جفت عصب نخاعی${fig('sys-nervous', '', 'مغز، نخاع و عصب‌ها؛ و ریشه‌های دستگاه عصبی، چشم و گوش')}${tbl([['ریشه', 'معنی'], [e('encephal/o'), 'مغز'], [e('cerebr/o'), 'مخ'], [e('myel/o'), 'نخاع (و مغز استخوان)'], [e('neur/o'), 'عصب']])}علم دستگاه عصبی <b>neurology</b> است.`),
          M('CNS شامل کدام بخش‌هاست؟', ['مغز و نخاع', 'مغز و چشم', 'نخاع و عصب‌های محیطی', 'همه عصب‌های بدن'], 'central nervous system = brain + spinal cord.'),
          L('چشم و گوش', `${fig(['eye-section', 'ear-section'], ['برش چشم', 'برش گوش'])}${tbl([['ریشه', 'معنی'], [e('ophthalm/o، ocul/o'), 'چشم'], [e('blephar/o'), 'پلک'], [e('ot/o'), 'گوش']])}چشم‌پزشکی <b>ophthalmology</b> است و ${e('ot/o')} در <b>otitis</b> (التهاب گوش) دیده می‌شود.${memo('ophthalm را با «آفتاب» به خاطر بسپار: چشم نور آفتاب را می‌بیند! ot/o با «اوتو» (گوش‌پاک‌کن).')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['encephal/o', 'مغز'], ['myel/o', 'نخاع (و مغز استخوان)'], ['neur/o', 'عصب'], ['ophthalm/o', 'چشم'], ['ot/o', 'گوش']]),
          T('myel/o در دستگاه عصبی به نخاع اشاره دارد.', true, 'درست؛ در خون‌شناسی همین ریشه یعنی مغز استخوان.'),
          B('علم بیماری‌های دستگاه عصبی ___ است.', ['neurology', 'nephrology', 'urology'], 'neur/o + -logy.'),
          M('چند جفت عصب نخاعی داریم؟', ['۳۱ جفت', '۱۲ جفت', '۲۳ جفت', '۴۶ جفت'], '۱۲ جفت عصب جمجمه‌ای و ۳۱ جفت عصب نخاعی.'),
          W('واژه‌ای بساز به معنی «التهاب مغز»', ['encephal/o', '-itis'], ['myel/o', '-oma', 'ot/o'], 'encephalitis.'),
          S('املای انگلیسی «چشم‌پزشکی» را بنویس', 'ophthalmology', 'ophthalm/o + -logy؛ ph و th را فراموش نکن.', 'ophth…'),
          L('مرور سطح «نقشه دستگاه‌ها»', recap(['دستگاه‌ها: integumentary، musculoskeletal، nervous، endocrine، cardiovascular، lymphatic، respiratory، digestive، urinary، reproductive', 'اسکلت و عضله: oste/o استخوان • arthr/o مفصل • chondr/o غضروف • my/o عضله • tendin/o تاندون', 'عصب: encephal/o مغز • cerebr/o مخ • myel/o نخاع • neur/o عصب؛ CNS = مغز + نخاع', 'حواس: ophthalm/o و ocul/o چشم • blephar/o پلک • ot/o گوش'])),
          N('m2r:sy')
        ]
      },

      /* ================= سطح ۲: گردش، تنفس و گوارش ================= */
      {
        id: 'sy4', title: 'قلب، خون و لنف', icon: '❤️', items: [
          L('دستگاه گردش', `دستگاه <b>cardiovascular</b> قلب و رگ‌هاست؛ خون را به همه بافت‌ها می‌رساند و مواد زائد را دور می‌کند.${fig('sys-cardio', '', 'سرخرگ‌ها (قرمز) خون را از قلب دور می‌کنند و سیاهرگ‌ها (آبی) برمی‌گردانند.')}${tbl([['ریشه', 'معنی'], [e('cardi/o'), 'قلب'], [e('angi/o، vascul/o'), 'رگ'], [e('arteri/o'), 'سرخرگ (artery): خون را از قلب دور می‌کند'], [e('ven/o، phleb/o'), 'سیاهرگ (vein): خون را به قلب برمی‌گرداند'], [e('hem/o، hemat/o'), 'خون']])}• <b>cardiology</b>: علم قلب<br>• <b>phlebotomy</b>: ${e('phleb/o + -tomy')} (برش)؛ خون‌گیری از سیاهرگ`),
          M('رگی که خون را از قلب دور می‌کند چیست؟', ['artery', 'vein', 'lymph vessel', 'capillary'], 'سرخرگ (artery) از قلب دور؛ سیاهرگ (vein) به قلب.'),
          L('دستگاه لنفاوی و ایمنی', `${fig('sys-lymph', '', 'گره‌ها، رگ‌های لنفاوی، طحال، تیموس و لوزه‌ها')}${tbl([['ریشه', 'معنی'], [e('lymph/o'), 'لنف'], [e('lymphaden/o'), 'گره لنفاوی'], [e('splen/o'), 'طحال'], [e('tonsill/o'), 'لوزه'], [e('adenoid/o'), 'آدنوئید']])}${memo('سرخرگ: Artery = Away from heart (A-A)؛ از قلب دور می‌شود. سیاهرگ (vein) قلب را «ویزیت» می‌کند و برمی‌گردد.')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['phleb/o', 'سیاهرگ'], ['arteri/o', 'سرخرگ'], ['splen/o', 'طحال'], ['angi/o', 'رگ']]),
          T('دستگاه لنفاوی بدن را در برابر بیماری و میکروب‌ها محافظت می‌کند.', true, 'درست؛ همراه با دستگاه ایمنی.'),
          B('در phlebotomy (خون‌گیری)، ریشه phleb/o یعنی ___.', ['سیاهرگ', 'سرخرگ', 'قلب'], 'phleb/o = ven/o = سیاهرگ.'),
          M(`${e('<b>cardiology</b>')} کدام رشته است؟`, ['قلب', 'خون', 'پوست', 'کلیه'], 'cardi/o + -logy.'),
          W('واژه‌ای بساز به معنی «بزرگی قلب»', ['cardi/o', '-megaly'], ['hepat/o', '-itis', 'angi/o'], 'cardiomegaly.'),
          S('املای انگلیسی «قلبی-عروقی» را بنویس', 'cardiovascular', 'cardi/o + vascul/o + -ar.', 'cardio…'),
          N('wb:sy')
        ]
      },
      {
        id: 'sy5', title: 'دستگاه تنفس', icon: '🫁', items: [
          L('مسیر هوا', `دستگاه <b>respiratory</b> اکسیژن را از محیط می‌گیرد و دی‌اکسید کربن را دفع می‌کند.${fig('sys-respiratory', '', 'بینی، حلق، حنجره، نای، برونش‌ها، ریه‌ها و دیافراگم')}${tbl([['ریشه', 'اندام'], [e('rhin/o، nas/o'), 'بینی (nose)'], [e('pharyng/o'), 'حلق (pharynx)'], [e('laryng/o'), 'حنجره (larynx)'], [e('trache/o'), 'نای (trachea)'], [e('bronch/o'), 'نایژه (bronchus)'], [e('pulmon/o، pneum/o'), 'ریه (lung)'], [e('phren/o'), 'دیافراگم'], [e('thorac/o'), 'قفسه سینه']])}`),
          O('مسیر هوا را از بیرون به درون بچین', ['nose (rhin/o)', 'pharynx (pharyng/o)', 'larynx (laryng/o)', 'trachea (trache/o)', 'bronchus (bronch/o)', 'lung (pulmon/o)'], 'بینی ← حلق ← حنجره ← نای ← نایژه ← ریه.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['laryng/o', 'حنجره'], ['pharyng/o', 'حلق'], ['trache/o', 'نای'], ['phren/o', 'دیافراگم'], ['rhin/o', 'بینی']]),
          L('دو ریشه برای ریه', `${vs(['pulmon/o', 'لاتین: pulmonary، pulmonology'], ['pneum/o، pneumon/o', 'یونانی: pneumonia (ذات‌الریه)'])}${pearl('حلق (pharynx) هم مسیر هواست و هم مسیر غذا؛ برای همین در جدول ریشه‌های گوارش هم آمده است.')}${memo('larynx «جعبه صدا» است؛ laryngitis یعنی گرفتگی صدا. pharynx پشت دهان است؛ pharyngitis یعنی گلودرد.')}`),
          M(`${e('<b>laryngitis</b>')} بیشتر چه نشانه‌ای دارد؟`, ['گرفتگی یا از دست رفتن صدا', 'آبریزش بینی', 'سرفه خونی', 'درد قفسه سینه'], 'larynx = جعبه صدا؛ التهابش صدا را می‌گیرد.'),
          T('دیافراگم عضله اصلی تنفس است.', true, 'درست؛ دیافراگم با انقباض پایین می‌رود و هوا را به ریه‌ها می‌کشد.'),
          B('در bronchitis، ریشه bronch/o یعنی ___.', ['نایژه (برونش)', 'نای', 'حنجره'], 'bronch/o = برونش.'),
          W('واژه‌ای بساز به معنی «التهاب حلق»', ['pharyng/o', '-itis'], ['laryng/o', 'rhin/o', '-algia'], 'pharyngitis.'),
          S('املای انگلیسی «نای» را بنویس', 'trachea', 'trache/o.', 'trach…'),
          N('f2t:sy')
        ]
      },
      {
        id: 'sy6', title: 'دستگاه گوارش', icon: '🍽️', items: [
          L('لوله گوارش', `دستگاه <b>digestive</b> (gastrointestinal یا <b>GI</b>) یک لوله بلند است: دهان، مری، معده و روده‌ها. اندام‌های ضمیمه: <b>کبد، کیسه صفرا، پانکراس و غدد بزاقی</b>.${fig('sys-digestive', '', 'دهان، حلق، مری، معده، کبد، روده باریک و بزرگ، مقعد')}${tbl([['ریشه', 'اندام'], [e('or/o، stomat/o'), 'دهان'], [e('esophag/o'), 'مری (esophagus)'], [e('gastr/o'), 'معده'], [e('enter/o'), 'روده (به‌ویژه باریک)'], [e('col/o'), 'روده بزرگ (colon)'], [e('hepat/o'), 'کبد'], [e('an/o'), 'مقعد']])}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['gastr/o', 'معده'], ['enter/o', 'روده باریک'], ['col/o', 'روده بزرگ'], ['hepat/o', 'کبد'], ['esophag/o', 'مری']]),
          M('کدام اندام ضمیمه دستگاه گوارش است، نه بخشی از لوله گوارش؟', ['کبد', 'مری', 'معده', 'روده باریک'], 'کبد، کیسه صفرا، پانکراس و غدد بزاقی ضمیمه‌اند.'),
          L('واژه‌های پرکاربرد گوارش', `• ${wb('gastr/o', 'enter/o', '-logy')} ← <b>gastroenterology</b>: علم معده و روده<br>• ${wb('hepat/o', '-megaly')} ← بزرگی کبد<br>• ${wb('gastr/o', '-itis')} ← التهاب معده${fig('abdomen-organs', '', 'اندام‌های شکم از جلو: کبد، معده، روده باریک و بزرگ')}`),
          L('پرونده: بیماری سلیاک', `خانمی ۲۳ ساله با نفخ، درد شکم، اسهال مزمن و <b>BMI</b> برابر ۱۷٫۵ به متخصص گوارش ارجاع شده. آزمایش‌ها <b>بیماری سلیاک</b> و کم‌خونی را نشان می‌دهند. درمان: رژیم کاملاً بدون گلوتن (<b>GFD</b>) و ویزیت پیگیری ۶ هفته بعد.${pearl('در سلیاک، گلوتن به روده باریک (enter/o) آسیب می‌زند و جذب آهن و مواد مغذی کم می‌شود؛ برای همین کم‌خونی و کاهش وزن همراهش است.')}`),
          M('در این پرونده، GFD یعنی…', ['رژیم غذایی بدون گلوتن', 'آزمایش عملکرد گوارش', 'ریفلاکس معده', 'دستگاه ادراری-تناسلی'], 'gluten-free diet.', [['بیمار', 'خانم ۲۳ ساله'], ['شکایت', 'نفخ، درد شکم، اسهال مزمن'], ['BMI', '17.5'], ['تشخیص', 'بیماری سلیاک و کم‌خونی']]),
          T('gastroenterology علم معده و روده است.', true, 'gastr/o + enter/o + -logy.'),
          B('اختصار GI یعنی ___.', ['gastrointestinal', 'genitourinary', 'gynecology'], 'GI = gastrointestinal.'),
          S('املای انگلیسی «مری» را بنویس', 'esophagus', 'esophag/o.', 'esoph…'),
          L('مرور سطح «گردش، تنفس و گوارش»', recap(['گردش: cardi/o قلب • angi/o و vascul/o رگ • arteri/o سرخرگ (دور از قلب) • ven/o و phleb/o سیاهرگ (به قلب)', 'لنف: lymph/o لنف • lymphaden/o گره • splen/o طحال • tonsill/o لوزه', 'مسیر هوا: <bdi dir="ltr">rhin/o → pharyng/o → laryng/o → trache/o → bronch/o → pulmon/o</bdi>؛ pneum/o هم ریه و phren/o دیافراگم', 'گوارش: or/o دهان • esophag/o مری • gastr/o معده • enter/o روده • col/o روده بزرگ • hepat/o کبد؛ GI'])),
          N('ab:sy')
        ]
      },

      /* ================= سطح ۳: دفع، کنترل و تخصص‌ها ================= */
      {
        id: 'sy7', title: 'ادراری و تولیدمثل', icon: '💧', items: [
          L('دستگاه ادراری', `دستگاه <b>urinary</b> (کلیه‌ها، حالب‌ها، مثانه و پیشابراه) مواد زائد را از خون صاف می‌کند، تعادل آب و نمک و اسید-باز را نگه می‌دارد و به تنظیم فشار خون کمک می‌کند.${fig('sys-urinary', '', 'کلیه، حالب، مثانه و پیشابراه')}${tbl([['ریشه', 'اندام'], [e('nephr/o، ren/o'), 'کلیه'], [e('ureter/o'), 'حالب (ureter)'], [e('cyst/o'), 'مثانه'], [e('urethr/o'), 'پیشابراه (urethra)'], [e('ur/o'), 'ادرار، دستگاه ادراری']])}علم بیماری‌های کلیه <b>nephrology</b> است و بیماری‌های مجاری ادراری <b>urology</b>.`),
          P('هر ریشه را به معنی‌اش وصل کن', [['nephr/o، ren/o', 'کلیه'], ['ureter/o', 'حالب'], ['cyst/o', 'مثانه'], ['urethr/o', 'پیشابراه']]),
          L('حالب یا پیشابراه؟', `${vs(['ureter', 'دو لوله: از کلیه به مثانه'], ['urethra', 'یک لوله: از مثانه به بیرون'])}${memo('ureter دو تا «e» دارد و دو تاست (هر کلیه یکی)؛ urethra یکی است و بیرون می‌رود.')}`),
          M('لوله‌ای که ادرار را از کلیه به مثانه می‌برد چیست؟', ['ureter', 'urethra', 'meatus', 'nephron'], 'ureter؛ urethra از مثانه به بیرون است.'),
          L('دستگاه تولیدمثل', `• دستگاه تولیدمثل زن تخمک می‌سازد، جایی برای رشد جنین فراهم می‌کند و نوزاد را تغذیه می‌کند<br>• دستگاه تولیدمثل مرد اسپرم می‌سازد<br>ادراری و تناسلی را با هم <b>genitourinary (GU)</b> هم می‌گویند.${pearl('متخصص بیماری‌های دستگاه ادراری urologist است و متخصص زنان gynecologist (gynec/o = زن).')}`),
          T('کلیه‌ها به تنظیم فشار خون هم کمک می‌کنند.', true, 'درست؛ با تنظیم آب و نمک و ترشح هورمون.'),
          B('علم بیماری‌های کلیه ___ نام دارد.', ['nephrology', 'neurology', 'urology'], 'nephr/o + -logy؛ urology بیماری‌های مجاری ادراری است.'),
          M('اختصار GU یعنی…', ['genitourinary', 'gastrointestinal', 'gynecology', 'gluteal'], 'genitourinary = ادراری-تناسلی.'),
          W('واژه‌ای بساز به معنی «التهاب مثانه»', ['cyst/o', '-itis'], ['nephr/o', '-oma', 'ur/o'], 'cystitis.'),
          N('d2t:sy')
        ]
      },
      {
        id: 'sy8', title: 'غدد درون‌ریز', icon: '🧪', items: [
          L('پیام‌رسانی با هورمون', `دستگاه <b>endocrine</b> (${e('endo-')} = درون + ${e('crin/o')} = ترشح) از <b>غدد بدون مجرا</b> ساخته شده که هورمون‌ها را مستقیم به <b>خون</b> می‌ریزند و فعالیت‌های متابولیک بدن را تنظیم می‌کنند.${vs(['endocrine', 'بدون مجرا؛ هورمون به خون'], ['exocrine', 'با مجرا؛ ترشح به بیرون یا درون لوله (مثل غدد عرق و بزاق)'])}`),
          M('ویژگی غدد درون‌ریز چیست؟', ['مجرا ندارند و هورمون را به خون می‌ریزند', 'ترشحشان از مجرا به پوست می‌رود', 'فقط در مغز هستند', 'آنزیم گوارشی می‌سازند'], 'endo- = درون.'),
          L('غدد مهم', `${tbl([['ریشه', 'غده'], [e('thyroid/o'), 'تیروئید (گردن)'], [e('adren/o'), 'فوق‌کلیوی'], [e('pituitar/o'), 'هیپوفیز (زیر مغز)'], [e('aden/o'), 'غده (کلی)']])}متخصص غدد درون‌ریز: <b>endocrinologist</b>.${memo('crin یعنی ترشح: endocrine «درون‌ریز» و exocrine «برون‌ریز»؛ مثل آب‌پاش (exo) در برابر سرم (endo)!')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['endocrine', 'درون‌ریز'], ['exocrine', 'برون‌ریز'], ['aden/o', 'غده'], ['crin/o', 'ترشح کردن']]),
          T('غدد عرق نمونه‌ای از غدد درون‌ریز هستند.', false, 'نادرست؛ غدد عرق مجرا دارند و برون‌ریز (exocrine) هستند.'),
          L('پرونده زکریا دوباره', `زکریا فکر می‌کرد تیروئیدش کم‌کار است، چون خسته بود. آزمایش‌های تیروئید طبیعی بود. کم‌کاری تیروئید (hypothyroidism) واقعاً باعث خستگی، افزایش وزن و یبوست می‌شود؛ پس فکر بدی نبود!${pearl('hypo- (کم) + thyroid + -ism: «حالت کم بودن تیروئید». hyperthyroidism برعکس است: تپش قلب، کاهش وزن و گرمایی بودن.')}`),
          B('متخصص غدد درون‌ریز ___ است.', ['endocrinologist', 'dermatologist', 'cardiologist'], 'endocrin/o + -logist.'),
          M(`${e('<b>hyperthyroidism</b>')} یعنی…`, ['پرکاری تیروئید', 'کم‌کاری تیروئید', 'برداشتن تیروئید', 'تومور تیروئید'], 'hyper- = بیش از حد.'),
          S('املای انگلیسی «غدد درون‌ریز» را بنویس', 'endocrine', 'endo- + crin/o.', 'endo…'),
          N('sp:sy')
        ]
      },
      {
        id: 'sy9', title: 'به کدام متخصص؟', icon: '👩‍⚕️', items: [
          L('هر دستگاه، یک تخصص', `${tbl([['تخصص', 'دستگاه یا اندام'], ['dermatology', 'پوست'], ['orthopedics', 'استخوان و مفصل'], ['cardiology', 'قلب'], ['hematology', 'خون'], ['otorhinolaryngology (ENT)', 'گوش، بینی، حلق'], ['gastroenterology', 'گوارش'], ['nephrology / urology', 'کلیه / مجاری ادراری'], ['gynecology', 'دستگاه تولیدمثل زن'], ['endocrinology', 'غدد'], ['neurology', 'دستگاه عصبی']])}`),
          L('طولانی‌ترین نام', `${wb('ot/o', 'rhin/o', 'laryng/o', '-logy')}<br><b>otorhinolaryngology</b> = گوش + بینی + حنجره + علم؛ همان <b>ENT</b>.${memo('از بیرون به درون سر بخوان: اوتو (گوش)، رینو (بینی)، لارنگو (حنجره). یک سفر کوتاه در سر!')}`),
          P('هر بیمار را به متخصص مناسب ارجاع بده', [['جان: شنیدن صداهای آرام سخت شده', 'otorhinolaryngology'], ['روث: تپش و تندی ضربان قلب', 'cardiology'], ['خوزه: شکستگی مچ پس از زمین خوردن', 'orthopedics'], ['مارتا: بثورات پوستی ماندگار', 'dermatology'], ['آقای اسپارکس: زخم معده', 'gastroenterology']]),
          M('دختر خانم کورتز بارها عفونت مثانه داشته است. به کدام متخصص ارجاع شود؟', ['urology', 'nephrology', 'neurology', 'hematology'], 'urology = مجاری ادراری و مثانه.'),
          M('ماری‌ان از خونریزی شدید رحمی شکایت دارد. کدام تخصص؟', ['gynecology', 'hematology', 'urology', 'gastroenterology'], 'gynec/o = زن؛ بیماری‌های دستگاه تولیدمثل زن.'),
          L('ابزار متخصص‌ها', `${fig('endoscopy', '', 'endoscopy: لوله‌ای با فیبر نوری برای دیدن درون اندام و برداشتن نمونه (biopsy)')}متخصص گوارش با <b>endoscopy</b> (${e('endo-')} = درون + ${e('-scopy')} = دیدن) درون معده و روده را می‌بیند.${pearl('متخصص تغذیه ثبت‌شده (RDN) در تیم درمان بیماری‌هایی مثل سلیاک نقش کلیدی دارد.')}`),
          T('endoscopy یعنی دیدن درون بدن با لوله‌ای که دوربین یا فیبر نوری دارد.', true, 'endo- + -scopy.'),
          B('اختصار ENT همان رشته ___ است.', ['otorhinolaryngology', 'endocrinology', 'neurology'], 'ear, nose and throat.'),
          S('املای انگلیسی «پوست‌شناسی» را بنویس', 'dermatology', 'dermat/o + -logy.', 'derma…'),
          L('مرور سطح «دفع، کنترل و تخصص‌ها»', recap(['ادراری: nephr/o و ren/o کلیه • ureter/o حالب (کلیه به مثانه) • cyst/o مثانه • urethr/o پیشابراه (مثانه به بیرون)؛ GU', 'غدد: endocrine بدون مجرا، هورمون به خون • exocrine با مجرا؛ hypo- کم‌کاری و hyper- پرکاری', 'تخصص‌ها: dermatology، orthopedics، cardiology، neurology، gastroenterology، nephrology، urology، gynecology، endocrinology', 'ENT = otorhinolaryngology: گوش + بینی + حنجره'])),
          N('t2f:sy')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۵: جهت‌ها، صفحه‌ها و وضعیت‌ها
 * وضعیت آناتومیک، جفت‌های جهت، صفحه‌های بدن، حرکت‌ها، وضعیت‌های بیمار و روش‌های تصویربرداری.
 * منابع: Body Structure، Body Organization، The Human Body An Orientation، Organization of the Body و An Org Chart to Live By. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'dr', sym: 'Dir', name: 'جهت، صفحه و وضعیت', short: 'جهت', sub: 'وضعیت آناتومیک، جفت‌های جهت، صفحه‌های بدن، حرکت‌ها، وضعیت‌های بیمار و تصویربرداری',
    color: '#1899D6', dark: '#1272A3', light: '#DDF1FB',
    levels: ['وضعیت آناتومیک و جهت‌ها', 'صفحه‌ها و حرکت', 'وضعیت بیمار و تصویربرداری'],
    gens: EA.genIds('dr'),
    lessons: [
      /* ================= سطح ۱: وضعیت آناتومیک و جهت‌ها ================= */
      {
        id: 'dr1', title: 'وضعیت آناتومیک', icon: '🧍', items: [
          L('نقطه صفر همه جهت‌ها', `همه جهت‌های بدن از <b>anatomical position</b> گفته می‌شوند:<br>• صاف ایستاده (<b>erect</b>)، رو به جلو<br>• بازوها کنار بدن، <b>کف دست‌ها رو به جلو</b><br>• پاها موازی، صاف روی زمین و انگشتان رو به جلو${fig('anat-position', '', 'وضعیت آناتومیک: کف دست‌ها رو به جلو')}`),
          M('در وضعیت آناتومیک، کف دست‌ها به کدام سمت است؟', ['رو به جلو', 'رو به پشت', 'رو به بدن', 'رو به پایین'], 'کف دست‌ها رو به جلو؛ برای همین شست در سمت بیرون (lateral) قرار می‌گیرد.'),
          L('چپ و راستِ چه کسی؟', `«راست» و «چپ» همیشه <b>راست و چپِ خودِ بیمار</b> است، نه کسی که به او نگاه می‌کند. وقتی روبه‌روی بیمار ایستاده‌ای، سمت راست او جلوی دست چپ توست!${fig('directions-photo', '', 'نمای روبه‌رو و نیم‌رخ؛ Right و Left زیر پاها از دید خود فرد است.')}${memo('همیشه خودت را جای بیمار بگذار: «اگر من آن‌جا ایستاده بودم، دست راستم کجا بود؟»')}`),
          T('در تصویر روبه‌رو، سمت راست بیمار در سمت راست بیننده دیده می‌شود.', false, 'نادرست؛ سمت راست بیمار در سمت چپ بیننده است.'),
          P('هر بخش وضعیت آناتومیک را کامل کن', [['بدن', 'صاف ایستاده'], ['کف دست‌ها', 'رو به جلو'], ['بازوها', 'کنار بدن'], ['پاها', 'موازی و رو به جلو']]),
          B('در وضعیت آناتومیک، بدن ___ است.', ['erect (ایستاده)', 'supine (طاق‌باز)', 'prone (دمر)'], 'erect = راست و ایستاده.'),
          M('چرا همه از یک وضعیت مرجع استفاده می‌کنند؟', ['تا توصیف جای هر بخش، مستقل از ژست بیمار، یکسان باشد', 'چون بیماران همیشه ایستاده معاینه می‌شوند', 'برای سنجش قد', 'برای عکاسی بهتر'], 'وضعیت آناتومیک یک «زبان مشترک» است؛ حتی اگر بیمار خوابیده باشد.'),
          L('چرا مهم است؟', `${fig('positional', '', 'Midline، Medial، Lateral، Proximal، Distal، Superior و Inferior روی بدن')}${pearl('در گزارش آسیب‌دیدگی نوشته می‌شود: «زخم ۳ سانتی‌متری روی سطح anterior ساعد چپ». هر پرستار و پزشکی بدون دیدن بیمار دقیقاً می‌داند کجاست.')}`),
          S('املای انگلیسی «آناتومیک» در anatomical position را بنویس', 'anatomical', 'anatomical position.', 'anato…'),
          N('t2f:dr')
        ]
      },
      {
        id: 'dr2', title: 'بالا، پایین، جلو، عقب', icon: '↕️', items: [
          L('محور بالا و پایین', `${fig('dir-man')}${tbl([['واژه', 'معنی', 'هم‌معنی'], ['superior', 'بالاتر، به سمت سر', 'cephalic، cranial'], ['inferior', 'پایین‌تر، دور از سر', 'caudal'], ['anterior', 'جلوی بدن', 'ventral'], ['posterior', 'پشت بدن', 'dorsal']])}`),
          M('قلب نسبت به معده چگونه است؟', ['superior', 'inferior', 'posterior', 'distal'], 'قلب بالاتر از معده است.'),
          L('ریشه‌ها راز جهت‌ها', `${wb('anter/o', '-ior')} ← جلو • ${wb('poster/o', '-ior')} ← پشت<br>${wb('ventr/o', '-al')} ← سمت شکم • ${wb('dors/o', '-al')} ← سمت پشت<br>${wb('cephal/o', '-ic')} ← سر • ${wb('caud/o', '-al')} ← دم${memo('dorsal را با باله پشتی دلفین (dorsal fin) به خاطر بسپار؛ ventral سمت شکم است، همان سمتی که «ونتیلاتور» هوا را به آن می‌دمد!')}`),
          P('هر واژه را به هم‌معنی‌اش وصل کن', [['anterior', 'ventral'], ['posterior', 'dorsal'], ['superior', 'cephalic'], ['inferior', 'caudal']]),
          M('در نیم‌رخ، جناغ سینه نسبت به ستون مهره‌ها چگونه است؟', ['anterior', 'posterior', 'inferior', 'lateral'], 'جناغ جلوی بدن است.', null, F('directions')),
          T('caudal یعنی «به سمت سر».', false, 'نادرست؛ caudal یعنی به سمت دم (پایین). به سمت سر cephalic یا cranial است.'),
          B('ناف روی سطح ___ بدن است.', ['anterior (ventral)', 'posterior (dorsal)', 'lateral'], 'ناف جلوی شکم است.'),
          W('واژه‌ای بساز به معنی «مربوط به پشت بدن»', ['dors/o', '-al'], ['ventr/o', 'cephal/o', '-ad'], 'dorsal.'),
          S('املای انگلیسی «خلفی (پشتی)» را بنویس', 'posterior', 'poster/o + -ior.', 'poste…'),
          N('m2r:dr')
        ]
      },
      {
        id: 'dr3', title: 'میانه، پهلو، نزدیک، دور', icon: '↔️', items: [
          L('محور میانه و پهلو', `${tbl([['واژه', 'معنی', 'نمونه'], ['medial', 'نزدیک به خط میانی', 'بینی نسبت به چشم‌ها'], ['lateral', 'دور از خط میانی، به سمت پهلو', 'گوش‌ها نسبت به بینی'], ['proximal', 'نزدیک به محل اتصال اندام به تنه', 'آرنج نسبت به مچ'], ['distal', 'دور از محل اتصال', 'انگشتان نسبت به مچ']])}${fig('dir-pairs', '', 'شش جفت متضاد جهت')}`),
          M('مچ نسبت به آرنج چگونه است؟', ['distal', 'proximal', 'medial', 'superior'], 'مچ دورتر از محل اتصال بازو به تنه است.'),
          L('سطحی یا عمقی؟', `${vs(['superficial', 'نزدیک به سطح بدن: پوست'], ['deep', 'دور از سطح: استخوان'])}${vs(['ipsilateral', 'در همان سمت بدن'], ['contralateral', 'در سمت مقابل'])}${fig('deep-superficial', '', 'C: سطحی و عمقی در برش عرضی • D: طاق‌باز • E: دمر • F: پشت پا (dorsum) و کف پا (plantar)')}`),
          P('هر جفت را کامل کن', [['medial', 'lateral'], ['proximal', 'distal'], ['superficial', 'deep'], ['ipsilateral', 'contralateral']]),
          L('proximal و distal فقط برای دست و پا', `این دو واژه درباره <b>اندام‌ها</b> (دست و پا) یا مسیر یک ساختار (مثل روده) به کار می‌روند؛ برای تنه از superior/inferior استفاده کن.${memo('proximal را با «proximity» (نزدیکی) به خاطر بسپار؛ distal با «distance» (فاصله).')}${pearl('سکته مغزی در نیمکره چپ، ضعف را در سمت contralateral (راست) بدن ایجاد می‌کند؛ چون مسیرهای عصبی ضربدری می‌شوند.')}`),
          T('شست در وضعیت آناتومیک در سمت lateral دست قرار دارد.', true, 'درست؛ چون کف دست رو به جلوست، شست سمت بیرون است.'),
          B('پوست نسبت به عضله ___ است.', ['superficial', 'deep', 'distal'], 'پوست به سطح نزدیک‌تر است.'),
          M('آسیب مغز در سمت راست، ضعف را در کدام سمت بدن ایجاد می‌کند؟', ['contralateral (چپ)', 'ipsilateral (راست)', 'هر دو سمت', 'هیچ‌کدام'], 'مسیرهای حرکتی در ساقه مغز ضربدری می‌شوند.'),
          S('املای انگلیسی «جانبی» را بنویس', 'lateral', 'later/o + -al.', 'late…'),
          L('مرور سطح «وضعیت آناتومیک و جهت‌ها»', recap(['وضعیت آناتومیک: ایستاده، رو به جلو، کف دست‌ها رو به جلو؛ چپ و راست همیشه مال خود بیمار است', 'superior (cephalic) ↔ inferior (caudal) • anterior (ventral) ↔ posterior (dorsal)', 'medial ↔ lateral • proximal ↔ distal (فقط برای اندام‌ها) • superficial ↔ deep', 'ipsilateral همان سمت • contralateral سمت مقابل'])),
          N('f2t:dr')
        ]
      },

      /* ================= سطح ۲: صفحه‌ها و حرکت ================= */
      {
        id: 'dr4', title: 'صفحه‌های بدن', icon: '🔪', items: [
          L('سه برش فرضی', `صفحه‌ها سطح‌های صافی‌اند که بدن یا اندام را برش می‌دهند:${fig('planes3')}${tbl([['صفحه', 'بدن را تقسیم می‌کند به'], ['sagittal', 'راست و چپ'], ['midsagittal (median)', 'دو نیمه مساوی راست و چپ'], ['frontal (coronal)', 'جلو و عقب'], ['transverse (horizontal)', 'بالا و پایین']])}`),
          M('کدام صفحه بدن را به دو نیمه مساوی راست و چپ تقسیم می‌کند؟', ['midsagittal', 'frontal', 'transverse', 'coronal'], 'midsagittal (median) دقیقاً از خط میانی می‌گذرد.'),
          L('صفحه‌ها روی بدن', `${fig(['planes-mannequin', 'planes-swim'], ['فرونتال، ساژیتال و عرضی', 'سه صفحه با هم'])}${memo('sagittal از sagitta (پیکان) می‌آید: پیکانی که از جلو به پشت فرو می‌رود و بدن را چپ و راست می‌کند. coronal از corona (تاج): خط تاجی که از گوش تا گوش روی سر می‌نشیند.')}`),
          P('هر صفحه را به تقسیمش وصل کن', [['sagittal', 'راست و چپ'], ['frontal', 'جلو و عقب'], ['transverse', 'بالا و پایین']]),
          M('در این تصویر، صفحه نارنجی افقی کدام است؟', ['transverse', 'midsagittal', 'frontal', 'coronal'], 'transverse (horizontal plane).', null, F('planes')),
          T('frontal و coronal دو نام برای یک صفحه‌اند.', true, 'درست؛ هر دو بدن را به جلو و عقب تقسیم می‌کنند.'),
          L('برش در تصویربرداری', `در CT و MRI، تصویرها به شکل «برش» در همین صفحه‌ها گرفته می‌شوند: برش‌های <b>axial</b> همان transverse‌اند.${pearl('رادیولوژیست می‌نویسد: «sagittal MRI of the lumbar spine» یعنی برش‌های چپ-راست از ستون کمری؛ بهترین نما برای دیدن دیسک بین مهره‌ها.')}`),
          B('صفحه ___ بدن را به بخش‌های بالا و پایین تقسیم می‌کند.', ['transverse', 'sagittal', 'coronal'], 'transverse (horizontal).'),
          S('املای انگلیسی «ساژیتال» را بنویس', 'sagittal', 'sagitt/o = پیکان؛ دو t دارد.', 'sagi…'),
          N('r2m:dr')
        ]
      },
      {
        id: 'dr5', title: 'حرکت‌های بدن', icon: '🤸', items: [
          L('خم و باز کردن', `${fig('movements')}${vs(['flexion', 'خم کردن مفصل؛ زاویه بین استخوان‌ها کم می‌شود'], ['extension', 'باز کردن مفصل؛ زاویه زیاد می‌شود'])}با انقباض عضله دوسر، آرنج flexion می‌شود.`),
          M('وقتی آرنجت را خم می‌کنی تا دستت به شانه برسد، چه حرکتی است؟', ['flexion', 'extension', 'abduction', 'adduction'], 'خم شدن مفصل و کم شدن زاویه = flexion.', null, F('biceps')),
          L('دور و نزدیک کردن', `${vs(['abduction', 'ab- (دور از): دور کردن از خط میانی'], ['adduction', 'ad- (به سمت): نزدیک کردن به خط میانی'])}${memo('abduction مثل «آدم‌ربایی» (abduct): کسی را دور می‌برند! adduction یعنی «اضافه کردن» (add) به بدن.')}`),
          P('هر حرکت را به توصیفش وصل کن', [['flexion', 'کم کردن زاویه مفصل'], ['extension', 'زیاد کردن زاویه مفصل'], ['abduction', 'دور کردن از خط میانی'], ['adduction', 'نزدیک کردن به خط میانی']]),
          T('بالا بردن بازو از کنار بدن تا افق، abduction است.', true, 'بازو از خط میانی دور می‌شود.'),
          B('پیشوند ab- در abduction یعنی ___.', ['دور از', 'به سمت', 'دوباره'], 'ab- = دور از؛ ad- = به سمت.'),
          M('برگرداندن بازوی بالارفته به کنار بدن چه حرکتی است؟', ['adduction', 'abduction', 'flexion', 'extension'], 'نزدیک شدن به خط میانی.'),
          L('در بالین', `${pearl('دامنه حرکت (range of motion) هر مفصل با همین واژه‌ها ثبت می‌شود: «shoulder abduction limited to 90°» یعنی دور کردن بازو فقط تا ۹۰ درجه ممکن است.')}در ورزش هم: بالا آمدن در «شنا» extension آرنج است و پایین رفتن flexion.`),
          S('املای انگلیسی «دور کردن از خط میانی» را بنویس', 'abduction', 'ab- + duct (بردن).', 'abdu…'),
          N('sp:dr')
        ]
      },
      {
        id: 'dr6', title: 'جهت‌های ترکیبی', icon: '🧭', items: [
          L('دو جهت در یک واژه', `گاهی دو ریشه جهت را با واکه o به هم می‌چسبانیم تا «از … به …» را بگوییم:${tbl([['واژه', 'معنی'], ['anteroposterior (AP)', 'از جلو به پشت'], ['posteroanterior (PA)', 'از پشت به جلو'], ['mediolateral', 'از میانه به پهلو'], ['lateromedial', 'از پهلو به میانه'], ['superolateral', 'بالا و به سمت پهلو']])}${memo('ترتیب ریشه‌ها ترتیب حرکت است: اولی «از»، دومی «به». مثل نشانی سفر!')}`),
          M('در عکس قفسه سینه PA، اشعه از کجا وارد بدن می‌شود؟', ['از پشت (posterior)', 'از جلو (anterior)', 'از پهلو', 'از بالا'], 'posteroanterior = از پشت به جلو.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['AP', 'از جلو به پشت'], ['PA', 'از پشت به جلو'], ['lat', 'جانبی (نیم‌رخ)'], ['ant', 'جلویی']]),
          L('پشت و کف دست و پا', `• <b>dorsum</b>: پشت دست یا روی پا<br>• <b>plantar</b>: کف پا (${e('plant/o')})<br>• <b>palmar</b>: کف دست (${e('palm/o')})${pearl('عکس استاندارد قفسه سینه PA است: بیمار رو به صفحه فیلم می‌ایستد و اشعه از پشت می‌تابد؛ قلب نزدیک فیلم است و بزرگ‌تر از واقع دیده نمی‌شود.')}`),
          T('plantar به کف پا اشاره دارد.', true, 'plant/o = کف پا؛ plantar fasciitis = التهاب نیام کف پا.'),
          B('واژه mediolateral یعنی از ___ به پهلو.', ['میانه', 'جلو', 'بالا'], 'medi/o + later/o + -al.'),
          M(`${e('<b>dorsum</b>')} پا کجاست؟`, ['روی پا (سطح بالایی)', 'کف پا', 'پاشنه', 'انگشت شست'], 'dorsum = پشت؛ در پا یعنی سطح بالایی.', null, F('deep-superficial')),
          W('واژه‌ای بساز به معنی «از جلو به پشت»', ['anter/o', 'poster/o', '-ior'], ['medi/o', 'later/o', '-ad'], 'anteroposterior.'),
          S('املای انگلیسی «از جلو به پشت» را بنویس', 'anteroposterior', 'anter/o + poster/o + -ior.', 'antero…'),
          L('مرور سطح «صفحه‌ها و حرکت»', recap(['صفحه‌ها: sagittal راست و چپ (midsagittal دو نیمه برابر) • frontal یا coronal جلو و عقب • transverse یا axial بالا و پایین', 'حرکت‌ها: flexion کم شدن زاویه ↔ extension زیاد شدن زاویه • abduction دور از خط میانی ↔ adduction به سمت خط میانی', 'جهت ترکیبی: ریشه اول «از» و دومی «به»: anteroposterior (AP)، posteroanterior (PA)، mediolateral', 'dorsum پشت دست یا روی پا • palmar کف دست • plantar کف پا'])),
          N('ab:dr')
        ]
      },

      /* ================= سطح ۳: وضعیت بیمار و تصویربرداری ================= */
      {
        id: 'dr7', title: 'وضعیت‌های بیمار', icon: '🛏️', items: [
          L('طاق‌باز یا دمر؟', `${fig(['supine', 'prone'], ['supine: طاق‌باز', 'prone: دمر'])}${vs(['supine', 'خوابیده به پشت، صورت رو به بالا'], ['prone', 'خوابیده روی شکم، صورت رو به پایین'])}${memo('supine را با «spine روی تخت» به خاطر بسپار؛ و در supine می‌توانی کاسه «سوپ» را روی شکمت نگه داری!')}`),
          M('بیمار روی شکم دراز کشیده است. وضعیت او…', ['prone', 'supine', 'Fowler', 'lithotomy'], 'prone = دمر.', null, F('prone')),
          L('وضعیت‌های معاینه', `${fig('bedside')}${fig('positions', '', 'زانو-سینه، لیتوتومی، طاق‌باز با زانوی خم، سیمز، دمر، فاولر و طاق‌باز')}${tbl([['وضعیت', 'کاربرد'], ['supine', 'معاینه سینه، قلب، شکم، رفلکس‌ها'], ['prone', 'معاینه پشت و ستون فقرات'], ['Fowler', 'نیمه‌نشسته؛ تنفس دشوار'], ['Sims', 'به پهلوی چپ؛ معاینه رکتوم، تنقیه'], ['lithotomy', 'پاها در رکاب؛ معاینه لگن و پاپ اسمیر'], ['knee-chest (genupectoral)', 'معاینه رکتوم'], ['Trendelenburg', 'سر پایین‌تر از پا؛ درناژ وضعیتی']])}`),
          P('هر وضعیت را به کاربردش وصل کن', [['Fowler', 'بیمار تنگی نفس دارد'], ['lithotomy', 'پاپ اسمیر'], ['Sims', 'تنقیه'], ['prone', 'معاینه ستون فقرات'], ['Trendelenburg', 'درناژ وضعیتی']]),
          M('بیمار تنگی نفس دارد. پرستار سر تخت را بالا می‌برد. این کدام وضعیت است؟', ['Fowler', 'Trendelenburg', 'prone', 'Sims'], 'Fowler گسترش ریه را آسان‌تر می‌کند.'),
          T('genupectoral همان وضعیت زانو-سینه است.', true, 'genu (زانو) + pector (سینه).'),
          L('نام‌ها از کجا آمده‌اند؟', `• <b>Fowler، Sims، Trendelenburg</b>: نام پزشکانی که این وضعیت‌ها را معرفی کردند<br>• <b>lithotomy</b>: lith/o (سنگ) + -tomy؛ چون در گذشته برای درآوردن سنگ مثانه استفاده می‌شد<br>• <b>recumbent</b>: خوابیده${pearl('در وضعیت Trendelenburg، سر پایین است تا ترشحات ریه با جاذبه تخلیه شوند (postural drainage).')}`),
          B('lithotomy در اصل یعنی «برش برای درآوردن ___».', ['سنگ', 'جنین', 'تومور'], 'lith/o = سنگ.'),
          S('املای انگلیسی «طاق‌باز» را بنویس', 'supine', 'supine.', 'sup…'),
          N('d2t:dr')
        ]
      },
      {
        id: 'dr8', title: 'تصویربرداری', icon: '🩻', items: [
          L('دیدن درون بدن', `${fig('modalities')}${tbl([['روش', 'چه چیزی به کار می‌رود؟'], ['radiography (X-ray)', 'اشعه ایکس'], ['CT (computed tomography)', 'اشعه ایکس + کامپیوتر؛ برش‌های مقطعی'], ['MRI', 'میدان مغناطیسی و امواج رادیویی؛ بدون اشعه'], ['ultrasonography (US)', 'امواج صوتی پرفرکانس'], ['PET / SPECT / nuclear scan', 'رادیودارو (radiopharmaceutical)'], ['fluoroscopy', 'اشعه ایکس پیوسته؛ تصویر زنده']])}`),
          M('کدام روش هیچ اشعه یونیزانی ندارد؟', ['MRI', 'CT', 'radiography', 'fluoroscopy'], 'MRI از آهنربا و امواج رادیویی استفاده می‌کند؛ سونوگرافی هم بدون اشعه است.'),
          L('ریشه‌ها راز نام روش‌ها', `• ${wb('tom/o', '-graphy')} ← ثبت برش‌ها<br>• ${wb('son/o', '-graphy')} ← ثبت با صدا (ultra- = فرا)<br>• ${wb('fluor/o', '-scopy')} ← دیدن با درخشش<br>• ${wb('radi/o', '-graphy')} ← ثبت با پرتو${fig('imaging', '', 'A: رادیوگرافی قفسه سینه • B: سونوگرافی داپلر • C: اسکن هسته‌ای • D و E: MRI • F: PET')}`),
          P('هر روش را به ابزارش وصل کن', [['ultrasonography', 'امواج صوتی'], ['MRI', 'آهنربا'], ['CT', 'اشعه ایکس و کامپیوتر'], ['PET', 'رادیودارو']]),
          M('کدام تصویر در این مجموعه سونوگرافی داپلر است؟', ['B (با رنگ‌های آبی)', 'A (قفسه سینه سفید و سیاه)', 'E (نیم‌رخ سر)', 'F (رنگ‌های زرد و قرمز)'], 'سونوگرافی داپلر جریان را با رنگ نشان می‌دهد.', null, F('imaging')),
          T('fluoroscopy تصویر زنده و متحرک با اشعه ایکس می‌دهد.', true, 'درست؛ مثلاً هنگام بلع باریم.'),
          B('اختصار CXR یعنی رادیوگرافی ___.', ['قفسه سینه', 'جمجمه', 'شکم'], 'chest x-ray.'),
          M('ماده‌ای رادیواکتیو که به اندام هدف می‌رود و در اسکن هسته‌ای دیده می‌شود چه نام دارد؟', ['radiopharmaceutical', 'contrast', 'enzyme', 'hormone'], 'radi/o + pharmaceutical (دارو).'),
          S('املای انگلیسی «سونوگرافی» را بنویس', 'ultrasonography', 'ultra- + son/o + -graphy.', 'ultra…'),
          N('wb:dr')
        ]
      },
      {
        id: 'dr9', title: 'پرونده: آپاندیس کتی', icon: '🏥', items: [
          L('کتی رایلی در اتاق عمل', `کتی برای <b>appendectomy</b> (برداشتن آپاندیس) به اتاق عمل می‌رود. او در وضعیت <b>supine</b> قرار می‌گیرد. جراح از راه برش بافت همبند وارد <b>حفره شکمی-لگنی</b> می‌شود و آپاندیس را از ربع <b>RLQ</b> درمی‌آورد. کتی تا چند روز درد دارد و حدود سه هفته نمی‌تواند در وضعیت <b>prone</b> بخوابد.`),
          M('کتی در جراحی در چه وضعیتی است؟', ['supine: طاق‌باز', 'prone: دمر', 'Sims', 'lithotomy'], 'برای جراحی شکم، بیمار طاق‌باز است.', [['بیمار', 'کتی رایلی'], ['عمل', 'appendectomy'], ['محل', 'RLQ'], ['وضعیت', 'supine']]),
          M('چرا کتی چند هفته نمی‌تواند prone بخوابد؟', ['چون prone یعنی خوابیدن روی شکم و زخم جراحی روی شکم است', 'چون prone یعنی نشستن', 'چون آپاندیس در پشت بدن است', 'چون prone وضعیت جراحی است'], 'prone = دمر؛ فشار روی برش شکمی.'),
          L('جای برش را توصیف کن', `آپاندیس در ربع تحتانی راست است: <b>inferior</b> نسبت به ناف و <b>lateral</b> در سمت راست. برش جراح روی سطح <b>anterior</b> شکم است و از لایه‌های <b>superficial</b> (پوست) به <b>deep</b> (صفاق) می‌رود.${fig('supine', '', 'وضعیت supine')}${pearl('درد آپاندیسیت اغلب دور ناف (umbilical) شروع می‌شود و بعد به RLQ می‌رود؛ یک کلید تشخیصی مهم.')}`),
          O('لایه‌هایی که جراح از آن‌ها می‌گذرد را از سطحی به عمقی بچین', ['پوست', 'چربی زیرپوستی', 'عضله شکم', 'صفاق'], 'از superficial به deep.'),
          T('appendectomy یعنی التهاب آپاندیس.', false, 'نادرست؛ ‎-ectomy برداشتن است. التهاب appendicitis است.'),
          P('هر واژه پرونده را به معنی‌اش وصل کن', [['appendectomy', 'برداشتن آپاندیس'], ['supine', 'طاق‌باز'], ['prone', 'دمر'], ['RLQ', 'ربع تحتانی راست']]),
          B('برش جراحی شکم روی سطح ___ بدن است.', ['anterior', 'posterior', 'lateral'], 'شکم جلوی بدن است.'),
          S('املای انگلیسی «برداشتن آپاندیس» را بنویس', 'appendectomy', 'append/o + -ectomy.', 'append…'),
          L('مرور سطح «وضعیت بیمار و تصویربرداری»', recap(['supine طاق‌باز • prone دمر • Fowler نیمه‌نشسته • Trendelenburg سر پایین • Sims به پهلوی چپ • lithotomy پاها در رکاب', 'تصویربرداری: radiography و CT با اشعه ایکس • MRI آهنربا، بدون اشعه • ultrasonography صدا • PET رادیودارو • fluoroscopy تصویر زنده', '‎-graphy ثبت • ‎-scopy دیدن • tom/o برش • son/o صدا', 'در پرونده، جای هر چیز با همین واژه‌ها نوشته می‌شود: RLQ، inferior، lateral و از superficial تا deep'])),
          N('t2f:dr')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — دنیای ۶: حفره‌ها و نواحی بدن
 * حفره‌های پشتی و جلویی، قفسه سینه و شکم-لگن، نه ناحیه و چهار ربع شکم، ستون مهره‌ها و نواحی سطحی بدن.
 * منابع: An Org Chart to Live By، Body Organization، Body Structure، Organization of the Body، The Human Body An Orientation. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs, recap } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'cv', sym: 'Cav', name: 'حفره‌ها و نواحی', short: 'حفره', sub: 'حفره‌های پشتی و جلویی، دیافراگم، نه ناحیه و چهار ربع شکم، ستون مهره‌ها و نواحی سطحی بدن',
    color: '#7B5CE0', dark: '#5B3FBF', light: '#EDE7FC',
    levels: ['حفره‌های بدن', 'نقشه شکم', 'ستون مهره‌ها و نواحی سطحی'],
    gens: EA.genIds('cv'),
    lessons: [
      /* ================= سطح ۱: حفره‌های بدن ================= */
      {
        id: 'cv1', title: 'دو حفره بزرگ', icon: '🏺', items: [
          L('حفره پشتی و حفره جلویی', `بدن دو حفره اصلی دارد که اندام‌های درونی (viscera) را در خود جا داده‌اند:${fig('cavities')}${tbl([['حفره', 'بخش‌ها', 'محتوا'], ['dorsal (posterior)', 'cranial + spinal (vertebral)', 'مغز و نخاع'], ['ventral (anterior)', 'thoracic + abdominopelvic', 'قلب، ریه‌ها، اندام‌های گوارش، ادرار و تولیدمثل']])}`),
          M('مغز در کدام حفره است؟', ['cranial', 'thoracic', 'spinal', 'pelvic'], 'crani/o = جمجمه؛ حفره جمجمه‌ای بخشی از حفره پشتی است.'),
          L('همان حفره‌ها در کتاب', `${fig(['cavities-line', 'cavities-views'], ['حفره پشتی و جلویی در نیم‌رخ', 'نمای جانبی و روبه‌رو'])}${memo('حفره پشتی دو «C/S» دارد: Cranial و Spinal؛ مثل «CS» یعنی Central System (دستگاه عصبی مرکزی)!')}`),
          P('هر حفره را به محتوایش وصل کن', [['cranial', 'مغز'], ['spinal', 'نخاع'], ['thoracic', 'قلب و ریه‌ها'], ['abdominal', 'معده، کبد، روده‌ها'], ['pelvic', 'مثانه و اندام‌های تولیدمثل']]),
          T('حفره نخاعی بخشی از حفره جلویی (ventral) است.', false, 'نادرست؛ حفره‌های جمجمه‌ای و نخاعی پشتی (dorsal) هستند.'),
          B('اندام‌های درونی حفره‌ها را روی هم ___ می‌نامند.', ['viscera', 'strata', 'ventricles'], 'viscera (مفرد viscus) = احشا.'),
          M('حفره جلویی (ventral) به کدام دو بخش تقسیم می‌شود؟', ['thoracic و abdominopelvic', 'cranial و spinal', 'pleural و pericardial', 'abdominal و spinal'], 'دیافراگم این دو را جدا می‌کند.'),
          W('واژه‌ای بساز به معنی «مربوط به جمجمه»', ['crani/o', '-al'], ['spin/o', 'thorac/o', '-ic'], 'cranial.'),
          S('املای انگلیسی «احشا» را بنویس', 'viscera', 'viscera؛ مفرد viscus.', 'visc…'),
          N('t2f:cv')
        ]
      },
      {
        id: 'cv2', title: 'قفسه سینه', icon: '🫁', items: [
          L('درون حفره قفسه سینه', `<b>thoracic cavity</b> (${e('thorac/o')} = قفسه سینه) شامل ریه‌ها، قلب، آئورت، مری و نای است و سه بخش دارد:<br>• دو <b>pleural cavity</b>: دور هر ریه<br>• <b>mediastinum</b>: میان دو ریه؛ بین جناغ در جلو و ستون مهره در پشت<br>• <b>pericardial cavity</b>: دور قلب، درون مدیاستن${fig('cavities-anterior', '', 'حفره‌های پلور راست و چپ، مدیاستن و حفره پریکارد؛ زیر آن‌ها دیافراگم و حفره شکمی-لگنی')}`),
          M('فضای میان دو ریه که قلب در آن است چه نام دارد؟', ['mediastinum', 'pleural cavity', 'peritoneal cavity', 'diaphragm'], 'mediastinum = میان‌سینه.'),
          L('مدیاستن: راهروی وسط', `مدیاستن توده‌ای از بافت‌ها و اندام‌هاست که جناغ را در جلو از ستون مهره‌ها در پشت جدا می‌کند و قلب و رگ‌های بزرگ، مری، نای و تیموس را در خود دارد.${memo('mediastinum = medi (وسط) + stinum؛ «راهروی وسطِ» قفسه سینه، بین دو اتاق بزرگ ریه.')}${pearl('در عکس قفسه سینه، «widened mediastinum» (پهن شدن سایه وسط) می‌تواند نشانه پارگی آئورت پس از تصادف باشد.')}`),
          P('هر بخش را به محتوایش وصل کن', [['pleural cavity', 'ریه'], ['pericardial cavity', 'قلب'], ['mediastinum', 'قلب، مری، نای و رگ‌های بزرگ']]),
          T('ریه‌ها در حفره‌های پلور قرار دارند.', true, 'pleur/o = پرده جنب؛ هر ریه حفره پلور خودش را دارد.'),
          B('حفره ___ دور قلب است.', ['pericardial', 'pleural', 'peritoneal'], 'peri- (پیرامون) + cardi/o (قلب).'),
          M('کدام اندام در مدیاستن نیست؟', ['کبد', 'قلب', 'مری', 'نای'], 'کبد در حفره شکمی، زیر دیافراگم است.'),
          W('واژه‌ای بساز به معنی «پیرامون قلب»', ['peri-', 'cardi/o', '-al'], ['pleur/o', 'endo-', 'thorac/o'], 'pericardial.'),
          S('املای انگلیسی «مدیاستن» را بنویس', 'mediastinum', 'mediastinum.', 'medias…'),
          N('m2r:cv')
        ]
      },
      {
        id: 'cv3', title: 'دیافراگم و شکم-لگن', icon: '⛺', items: [
          L('دیواره میان دو طبقه', `<b>diaphragm</b> عضله‌ای گنبدی‌شکل است که حفره قفسه سینه را از حفره شکمی جدا می‌کند و عضله اصلی <b>تنفس</b> است. ${e('phren/o')} = دیافراگم.${fig(['cavities-lateral', 'cavities-side'], ['حفره‌های پشتی و جلویی', 'دیافراگم میان قفسه سینه و شکم'])}`),
          L('شکم و لگن بی‌دیوار', `بین حفره شکمی و لگنی <b>دیواره‌ای نیست</b>؛ برای همین با هم <b>abdominopelvic cavity</b> نامیده می‌شوند.${tbl([['حفره', 'محتوا'], ['abdominal', 'کبد، کیسه صفرا، طحال، معده، پانکراس، روده‌ها و کلیه‌ها'], ['pelvic', 'مثانه، اندام‌های تولیدمثل و بخشی از روده']])}${memo('دیافراگم مثل «سقف چادر» است: گنبدی، بالای شکم و زیر ریه‌ها. وقتی منقبض می‌شود صاف و پایین می‌آید و هوا به ریه می‌آید.')}`),
          M('کدام ساختار قفسه سینه را از شکم جدا می‌کند؟', ['diaphragm', 'peritoneum', 'mediastinum', 'pleura'], 'دیافراگم.', null, F('cavities-side')),
          T('بین حفره شکمی و لگنی یک دیواره عضلانی وجود دارد.', false, 'نادرست؛ این دو با هم abdominopelvic cavity هستند.'),
          P('هر اندام را به حفره‌اش وصل کن', [['ریه', 'thoracic'], ['کبد', 'abdominal'], ['مثانه', 'pelvic'], ['مغز', 'cranial'], ['نخاع', 'spinal']]),
          L('صفاق و پشت صفاق', `حفره شکمی-لگنی را <b>peritoneum</b> مفروش کرده؛ فضای درون آن <b>peritoneal cavity</b> است. <b>کلیه‌ها</b> بیرون و پشت این کیسه‌اند (retroperitoneal).${fig('cavities-sagittal', '', 'برش ساژیتال: حفره‌های پشتی (جمجمه و نخاع) و جلویی (سینه، شکم و لگن)')}${pearl('hiccup (سکسکه) انقباض ناگهانی و غیرارادی دیافراگم است؛ عصب فرنیک (phrenic) فرمانش را می‌دهد.')}`),
          B('عصبی که دیافراگم را فرمان می‌دهد، عصب ___ است.', ['phrenic', 'cranial', 'lumbar'], 'phren/o = دیافراگم.'),
          M('کدام اندام شکمی پشت صفاق است؟', ['کلیه', 'معده', 'کبد', 'طحال'], 'retroperitoneal.'),
          S('املای انگلیسی «دیافراگم» را بنویس', 'diaphragm', 'diaphragm؛ g بی‌صداست.', 'diaph…'),
          L('مرور سطح «حفره‌های بدن»', recap(['dorsal: cranial (مغز) + spinal (نخاع) • ventral: thoracic + abdominopelvic', 'قفسه سینه: دو pleural cavity دور ریه‌ها • mediastinum وسط • pericardial cavity دور قلب', 'diaphragm (phren/o) قفسه سینه را از شکم جدا می‌کند و عضله اصلی تنفس است', 'شکم و لگن دیواره ندارند (abdominopelvic)؛ peritoneum آن را مفروش کرده و کلیه‌ها retroperitoneal‌اند'])),
          N('f2t:cv')
        ]
      },

      /* ================= سطح ۲: نقشه شکم ================= */
      {
        id: 'cv4', title: 'نه ناحیه', icon: '#️⃣', items: [
          L('جدول ۳×۳ روی شکم', `برای گفتن دقیق جای درد یا اندام، شکم از دیافراگم تا کشاله ران به <b>نه ناحیه</b> تقسیم می‌شود:${fig('regions9')}`),
          L('معنی نام‌ها', `• <b>hypochondriac</b>: hypo (زیر) + chondr (غضروف دنده‌ها)<br>• <b>epigastric</b>: epi (بالای) + gastr (معده)<br>• <b>lumbar</b>: lumb/o = کمر<br>• <b>umbilical</b>: umbilic/o = ناف<br>• <b>inguinal (iliac)</b>: inguin/o = کشاله ران؛ ili/o = استخوان لگن<br>• <b>hypogastric</b>: hypo (زیر) + gastr (معده)${fig(['regions-photo', 'regions-nine'], ['نه ناحیه روی بدن', 'نه ناحیه روی اندام‌ها'])}`),
          M('ناحیه وسط شکم که ناف در آن است کدام است؟', ['umbilical', 'epigastric', 'hypogastric', 'lumbar'], 'umbilic/o = ناف.'),
          M('در این شکل، ناحیه شماره ۲ کدام است؟', ['epigastric', 'umbilical', 'right hypochondriac', 'hypogastric'], 'ردیف بالا: ۱ هیپوکندریاک راست، ۲ اپی‌گاستر، ۳ هیپوکندریاک چپ. شماره‌ها از سمت بیننده‌اند؛ ناحیه ۱ سمت راستِ بیمار است.', null, F('regions-quiz')),
          P('هر ناحیه را به معنی نامش وصل کن', [['epigastric', 'بالای معده'], ['hypogastric', 'زیر معده'], ['hypochondriac', 'زیر غضروف دنده‌ها'], ['lumbar', 'کمر'], ['inguinal', 'کشاله ران']]),
          T('نواحی hypochondriac زیر غضروف دنده‌های پایینی قرار دارند.', true, 'hypo- (زیر) + chondr/o (غضروف).'),
          L('ستون وسط', `${memo('ستون وسط را از بالا به پایین با «اپی، ناف، هیپو» بخوان: epigastric، umbilical، hypogastric. دو طرف هم از بالا: «کُند، کمر، کشاله»: hypochondriac، lumbar، inguinal.')}${fig('regions-bones', '', 'نه ناحیه روی دنده‌ها، اندام‌ها و لگن')}`),
          B('ناحیه پایین وسط شکم، بالای مثانه، ___ است.', ['hypogastric', 'epigastric', 'umbilical'], 'hypo- (زیر) + gastr/o.'),
          W('واژه‌ای بساز به معنی «زیر غضروف (دنده)»', ['hypo-', 'chondr/o', '-iac'], ['epi-', 'gastr/o', 'lumb/o'], 'hypochondriac.'),
          N('r2m:cv')
        ]
      },
      {
        id: 'cv5', title: 'چهار ربع', icon: '➕', items: [
          L('دو خط از ناف', `روش ساده‌تر بالینی: دو خط عمود بر هم که از <b>ناف</b> می‌گذرند، شکم را به <b>چهار ربع</b> تقسیم می‌کنند:${fig('quadrants')}`),
          L('چه چیزی کجاست؟', `${tbl([['ربع', 'محتوای مهم'], ['RUQ', 'لوب راست کبد، کیسه صفرا، بخشی از پانکراس و روده'], ['LUQ', 'معده، طحال، لوب چپ کبد، بخشی از پانکراس'], ['RLQ', 'آپاندیس، تخمدان و لوله رحمی راست، حالب راست'], ['LLQ', 'بخشی از روده بزرگ، تخمدان و لوله چپ، حالب چپ']])}${fig(['quadrants-four', 'quadrants-organs'], ['چهار ربع روی اندام‌ها', 'محتوای هر ربع'])}`),
          M('کیسه صفرا در کدام ربع است؟', ['RUQ', 'LUQ', 'RLQ', 'LLQ'], 'کیسه صفرا زیر کبد، سمت راست بالا.'),
          M('در این شکل، ربع شماره (۴) کدام است؟', ['LLQ', 'RLQ', 'LUQ', 'RUQ'], 'نمای روبه‌روست: (۱) بالا-چپِ بیننده = RUQ بیمار، (۲) بالا-راستِ بیننده = LUQ، (۳) RLQ و (۴) پایین-راستِ بیننده = LLQ بیمار.', null, F('quadrants-quiz')),
          P('هر اندام را به ربعش وصل کن', [['آپاندیس', 'RLQ'], ['طحال', 'LUQ'], ['کیسه صفرا', 'RUQ'], ['کولون سیگموئید', 'LLQ']]),
          L('ناحیه یا ربع؟', `${fig(['regions-quadrants', 'quad-reg-pair'], ['نه ناحیه و چهار ربع روی یک بدن', 'مقایسه دو روش'])}${vs(['۹ ناحیه', 'دقیق‌تر؛ بیشتر در آناتومی'], ['۴ ربع', 'ساده‌تر؛ بیشتر در بالین و پرونده'])}${pearl('«RLQ tenderness» در پرونده یعنی درد با لمس در ربع تحتانی راست؛ اولین فکر آپاندیسیت است. درد RUQ پس از غذای چرب، به کیسه صفرا فکر کن.')}`),
          T('مرکز تقسیم چهار ربع، ناف است.', true, 'دو خط عمود از ناف می‌گذرند.'),
          B('معده بیشتر در ربع ___ است.', ['LUQ', 'RUQ', 'RLQ'], 'معده سمت چپ و بالا.'),
          M('در این تصویر کدام روش تقسیم دیده می‌شود؟', ['A: چهار ربع و B: نه ناحیه', 'هر دو نه ناحیه', 'هر دو چهار ربع', 'صفحه‌های بدن'], 'A با دو خط، B با چهار خط.', null, F('regions-ab')),
          N('ab:cv')
        ]
      },
      {
        id: 'cv6', title: 'آزمون تصویری حفره‌ها', icon: '🎯', items: [
          L('خودت را بسنج', `در این درس، شماره‌ها و برچسب‌های خالی تصویرهای کتاب را پر می‌کنی. قبل از جواب دادن، این ترتیب را مرور کن:<br>• حفره‌های پشتی: <b>cranial</b> و <b>spinal</b><br>• حفره‌های جلویی: <b>thoracic</b>، سپس دیافراگم، سپس <b>abdominal</b> و <b>pelvic</b>${memo('از بالا به پایین در جلوی بدن: «سینه، دیافراگم، شکم، لگن»؛ مثل طبقه‌های یک ساختمان: طبقه دوم، سقف، طبقه اول، زیرزمین.')}`),
          M('در این شکل، شماره (۳) کدام حفره است؟', ['cranial', 'spinal', 'thoracic', 'abdominal'], 'ساختار آبی درون جمجمه مغز است؛ حفره جمجمه‌ای.', null, F('cavities-quiz')),
          M('در همین شکل، شماره (۷) که درست بالای دیافراگم است، کدام حفره است؟', ['thoracic', 'abdominal', 'pelvic', 'spinal'], 'بالای دیافراگم حفره قفسه سینه است.', null, F('cavities-quiz')),
          M('کروشه (۱) که حفره‌های (۳) و (۴) را در بر گرفته، کدام حفره بزرگ است؟', ['dorsal cavity', 'ventral cavity', 'abdominopelvic cavity', 'thoracic cavity'], '(۳) جمجمه‌ای و (۴) نخاعی با هم حفره پشتی‌اند.', null, F('cavities-quiz')),
          O('حفره‌های جلویی را از بالا به پایین بچین', ['thoracic', 'diaphragm', 'abdominal', 'pelvic'], 'سینه ← دیافراگم ← شکم ← لگن.'),
          T('حفره شکمی-لگنی از دو حفره abdominal و pelvic تشکیل شده است.', true, 'میان این دو دیواره‌ای نیست.'),
          P('هر شماره همان شکل را به حفره‌اش وصل کن', [['(۴)', 'spinal'], ['(۵)', 'abdominal'], ['(۶)', 'pelvic'], ['(۲)', 'ventral']]),
          B('حفره‌های cranial و spinal روی هم حفره ___ هستند.', ['dorsal', 'ventral', 'pleural'], 'dorsal = پشتی.'),
          L('کلید پاسخ', `${fig('cavities-numbered', '', 'همان حفره‌ها با برچسب: (۱) جمجمه‌ای، (۲) نخاعی، (۳) دیافراگم، (۴) قفسه سینه، (۵) شکمی-لگنی، (۶) شکمی، (۷) لگنی')}دقت کن شماره‌گذاری این شکل با شکل آزمون فرق دارد؛ در کتاب‌ها و امتحان‌ها همیشه به <b>برچسب</b> نگاه کن، نه به شماره.`),
          M('در شکل کلید پاسخ، کدام اندام در حفره (۷) لگنی است؟', ['مثانه', 'قلب', 'کبد', 'مغز'], 'مثانه و اندام‌های تولیدمثل در لگن‌اند.', null, F('cavities-numbered')),
          L('مرور سطح «نقشه شکم»', recap(['نه ناحیه، ستون وسط از بالا: epigastric، umbilical، hypogastric', 'دو طرف از بالا: hypochondriac، lumbar، inguinal (iliac)؛ چپ و راستِ خود بیمار', 'چهار ربع با دو خط از ناف: RUQ کبد و کیسه صفرا • LUQ معده و طحال • RLQ آپاندیس • LLQ روده بزرگ', '۹ ناحیه دقیق‌تر و آناتومیک؛ ۴ ربع ساده‌تر و بالینی'])),
          N('d2t:cv')
        ]
      },

      /* ================= سطح ۳: ستون مهره‌ها و نواحی سطحی ================= */
      {
        id: 'cv7', title: 'ستون مهره‌ها', icon: '🦴', items: [
          L('پنج ناحیه ستون', `<b>vertebral column</b> (ستون مهره‌ها) از سر تا دنبالچه امتداد دارد و از استخوان ساخته شده؛ نخاع (بافت عصبی) درون آن است.${fig('spine')}`),
          M('چند مهره گردنی داریم؟', ['۷', '۱۲', '۵', '۴'], 'C1 تا C7.'),
          L('اختصارها در پرونده', `${tbl([['ناحیه', 'اختصار', 'تعداد'], ['cervical (گردنی)', 'C1–C7', '۷'], ['thoracic یا dorsal (سینه‌ای)', 'T1–T12 (D1–D12)', '۱۲'], ['lumbar (کمری)', 'L1–L5', '۵'], ['sacral (خاجی)', 'S1–S5', '۵ (جوش‌خورده)'], ['coccygeal (دنبالچه)', '—', '۳ تا ۵ (جوش‌خورده)']])}${memo('ساعت‌های روز: صبحانه ساعت ۷ (۷ گردنی)، ناهار ساعت ۱۲ (۱۲ سینه‌ای)، شام ساعت ۵ (۵ کمری)!')}`),
          P('هر ناحیه را به تعداد مهره‌هایش وصل کن', [['cervical', '۷'], ['thoracic', '۱۲'], ['lumbar', '۵'], ['sacral', '۵ جوش‌خورده']]),
          T('ستون مهره‌ها از بافت عصبی و نخاع از بافت استخوانی ساخته شده است.', false, 'برعکس: ستون مهره‌ها استخوان است و نخاع بافت عصبی.'),
          L('کمردرد و MRI', `مردی ۴۵ ساله از کمردرد تیرکشنده به پای راست شکایت دارد. <b>sagittal MRI</b> بیرون‌زدگی دیسک بین <b>L4 و L5</b> را نشان می‌دهد.${pearl('بیشترین فتق دیسک در ناحیه کمری (L4–L5 و L5–S1) رخ می‌دهد، چون بیشترین وزن را تحمل می‌کند.')}`),
          M('در این پرونده، L4 به کدام مهره اشاره دارد؟', ['چهارمین مهره کمری', 'چهارمین مهره سینه‌ای', 'چهارمین مهره گردنی', 'چهارمین مهره خاجی'], 'L = lumbar.', [['بیمار', 'مرد ۴۵ ساله'], ['شکایت', 'کمردرد تیرکشنده به پای راست'], ['MRI', 'sagittal: فتق دیسک L4–L5']]),
          B('جمع vertebra می‌شود ___.', ['vertebrae', 'vertebras', 'vertebri'], '‎-a → ‎-ae.'),
          S('املای انگلیسی «دنبالچه‌ای» را بنویس', 'coccygeal', 'coccyg/o + -eal.', 'cocc…'),
          N('sp:cv')
        ]
      },
      {
        id: 'cv8', title: 'نواحی سر و تنه', icon: '🗿', items: [
          L('نقشه سطح بدن', `هر ناحیه بدن یک صفت آناتومیک دارد که در پرونده برای جای زخم، درد یا معاینه به کار می‌رود:${fig('body-map')}`),
          L('سر و گردن', `${tbl([['ناحیه', 'جا'], ['cephalic', 'سر'], ['occipital', 'پس‌سر'], ['orbital / infraorbital', 'کاسه چشم / زیر آن'], ['nasal', 'بینی'], ['buccal', 'گونه'], ['mental / submental', 'چانه (ment/o) / زیر چانه'], ['auricular', 'گوش'], ['cervical', 'گردن']])}${memo('mental در آناتومی ربطی به ذهن ندارد! از mentum (چانه) آمده است.')}`),
          M(`ناحیه ${e('<b>buccal</b>')} کجاست؟`, ['گونه', 'چانه', 'پس‌سر', 'گوش'], 'bucc/o = گونه.'),
          P('هر ناحیه را به جایش وصل کن', [['occipital', 'پس‌سر'], ['mental', 'چانه'], ['auricular', 'گوش'], ['orbital', 'کاسه چشم'], ['cervical', 'گردن']]),
          L('تنه از جلو و پشت', `${tbl([['ناحیه', 'جا'], ['sternal', 'روی جناغ'], ['pectoral', 'سینه'], ['mammary', 'پستان'], ['axillary', 'زیربغل'], ['clavicular / supraclavicular', 'ترقوه / بالای ترقوه'], ['interscapular / infrascapular', 'میان کتف‌ها / زیر کتف'], ['lumbar', 'کمر'], ['sacral', 'روی استخوان خاجی'], ['gluteal', 'سرین']])}${fig('body-regions', '', 'نام‌های رایج نواحی بدن از جلو و پشت؛ صفت هر ناحیه در پرانتز آمده است.')}`),
          M('«گره لنفاوی supraclavicular بزرگ شده». این گره کجاست؟', ['بالای ترقوه', 'زیربغل', 'کشاله ران', 'زیر چانه'], 'supra- (بالای) + clavicul/o (ترقوه).'),
          T('interscapular یعنی میان دو کتف.', true, 'inter- (میان) + scapul/o (کتف).'),
          B('ناحیه زیربغل ___ نام دارد.', ['axillary', 'pectoral', 'sternal'], 'axill/o.'),
          W('واژه‌ای بساز به معنی «زیر چانه»', ['sub-', 'ment/o', '-al'], ['supra-', 'bucc/o', 'orbit/o'], 'submental.'),
          N('wb:cv')
        ]
      },
      {
        id: 'cv9', title: 'نواحی اندام‌ها و پرونده', icon: '🦵', items: [
          L('دست و پا', `${tbl([['ناحیه', 'جا'], ['brachial', 'بازو'], ['antecubital', 'جلوی آرنج'], ['carpal', 'مچ دست'], ['femoral', 'ران'], ['patellar', 'زانو (کشکک)'], ['popliteal', 'پشت زانو'], ['plantar / pedal', 'کف پا / پا'], ['inguinal', 'کشاله ران']])}${pearl('رگ‌گیری بیشتر از ناحیه antecubital (جلوی آرنج) انجام می‌شود؛ نبض در ناحیه popliteal (پشت زانو) و femoral (ران) هم لمس می‌شود.')}`),
          M('خون‌گیری معمولاً از کدام ناحیه انجام می‌شود؟', ['antecubital', 'popliteal', 'carpal', 'gluteal'], 'ante- (جلو) + cubit/o (آرنج).'),
          P('هر ناحیه را به جایش وصل کن', [['popliteal', 'پشت زانو'], ['patellar', 'جلوی زانو'], ['femoral', 'ران'], ['carpal', 'مچ دست'], ['brachial', 'بازو']]),
          L('پرونده: تصادف دوچرخه', `نوجوانی پس از برخورد فرمان دوچرخه با شکمش به اورژانس آمده: درد در <b>LUQ</b>، رنگ‌پریده، با ضربان تند. در <b>CT</b> شکم، پارگی <b>طحال</b> دیده می‌شود.${memo('LUQ را با «طحال در چپ بالا» به خاطر بسپار؛ کبد بزرگ در راست بالا (RUQ) است.')}`),
          M('پارگی طحال درد را بیشتر در کجا ایجاد می‌کند؟', ['LUQ', 'RUQ', 'RLQ', 'hypogastric'], 'طحال در ربع فوقانی چپ است.', [['بیمار', 'پسر ۱۵ ساله'], ['حادثه', 'برخورد فرمان دوچرخه با شکم'], ['شکایت', 'درد LUQ، رنگ‌پریدگی'], ['CT', 'پارگی طحال']]),
          T('طحال در ناحیه hypochondriac چپ قرار دارد.', true, 'همان ربع فوقانی چپ.'),
          O('این نواحی اندام تحتانی را از بالا به پایین بچین', ['inguinal', 'femoral', 'patellar', 'plantar'], 'کشاله ران ← ران ← زانو ← کف پا.'),
          B('پشت زانو ناحیه ___ است.', ['popliteal', 'patellar', 'antecubital'], 'poplit/o = پشت زانو.'),
          S('املای انگلیسی «جلوی آرنج» را بنویس', 'antecubital', 'ante- + cubit/o + -al.', 'ante…'),
          L('مرور سطح «ستون مهره‌ها و نواحی سطحی»', recap(['ستون مهره‌ها از بالا: cervical ۷ مهره • thoracic ۱۲ • lumbar ۵ • sacral ۵ جوش‌خورده • coccygeal دنبالچه', 'سر و گردن: cephalic، occipital، orbital، nasal، buccal، mental (چانه)، auricular، cervical', 'تنه: sternal، pectoral، mammary، axillary، interscapular، lumbar، sacral، gluteal', 'اندام‌ها: brachial، antecubital، carpal، femoral، patellar، popliteal، plantar، pedal، inguinal'])),
          N('t2f:cv')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'پازلی', title: 'قطعه‌شناس', shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: 'هر واژه ترسناکی را به پیشوند، ریشه و پسوند می‌شکند و از آخر می‌خواند. شعارش: «epigastric فقط سه تکه است!»' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'دهانه', title: 'نگهبان منفذها', shape: 'bubble', color: '#6C4FD8', acc: ['glasses'], bio: 'از os (دهان) تا foramen و meatus، همه دهانه‌های بدن را می‌شناسد و می‌داند stoma دهانه‌ای است که جراح ساخته.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'جمع‌بند', title: 'استاد مفرد و جمع', shape: 'book', color: '#4F5BD5', acc: ['crown'], bio: 'vertebra را vertebrae، nucleus را nuclei و phalanx را phalanges جمع می‌بندد؛ بدون حتی یک s اضافه!' },
    { id: 'og-0', w: 'og', lv: 0, name: 'سلولک', title: 'کوچک‌ترین واحد زندگی', shape: 'lympho', color: '#D6457A', acc: ['sparkle'], bio: 'غشا، سیتوپلاسم و هسته دارد و با تریلیون‌ها هم‌نوعش بدن را می‌سازد. بزرگ‌ترین خواهرش تخمک است و کوچک‌ترین برادرش اسپرم.' },
    { id: 'og-1', w: 'og', lv: 1, name: 'میتو', title: 'نیروگاه سلول', shape: 'mito', color: '#F2884B', acc: ['headband'], bio: 'میتوکندری پرانرژی که غذا را به ATP تبدیل می‌کند؛ بدون او هیچ آنابولیسم و کاتابولیسمی راه نمی‌افتد.' },
    { id: 'og-2', w: 'og', lv: 2, name: 'ژنو', title: 'کتابدار DNA', shape: 'dna', color: '#7B5CE0', acc: ['glasses', 'crown'], bio: '۴۶ کروموزوم را جفت‌جفت مرتب نگه می‌دارد و در میتوز همه را دو برابر می‌کند؛ در میوز اما فقط ۲۳ تا را می‌فرستد.' },
    { id: 'ts-0', w: 'ts', lv: 0, name: 'پوششی', title: 'سپر اپیتلیال', shape: 'shield', color: '#E07A1F', acc: ['sparkle'], bio: 'سطح بدن را می‌پوشاند و درون لوله‌ها را مفروش می‌کند؛ گاهی ساده و تک‌لایه، گاهی مطبق و چندلایه.' },
    { id: 'ts-1', w: 'ts', lv: 1, name: 'ماهیچه', title: 'دوک منقبض‌شونده', shape: 'mus', color: '#E07070', acc: ['headband'], bio: 'سه قلو است: اسکلتی که به فرمان تو حرکت می‌کند، قلبی که هرگز خسته نمی‌شود و صاف که بی‌صدا روده را می‌چرخاند.' },
    { id: 'ts-2', w: 'ts', lv: 2, name: 'همبندو', title: 'چسب بدن', shape: 'bone', color: '#FBF1E3', acc: ['crown'], bio: 'استخوان، غضروف، تاندون، رباط، چربی و حتی خون همه از خانواده او هستند؛ پرجمعیت‌ترین بافت بدن.' },
    { id: 'sy-0', w: 'sy', lv: 0, name: 'تپش', title: 'قلب دستگاه گردش', shape: 'heart', color: '#E5476B', acc: ['sparkle'], bio: 'روزی بیش از صد هزار بار می‌تپد تا اکسیژن و مواد غذایی را به همه اندام‌ها برساند.' },
    { id: 'sy-1', w: 'sy', lv: 1, name: 'دم‌بازدم', title: 'ریه پرحوصله', shape: 'lung', color: '#1899D6', acc: ['glasses'], bio: 'اکسیژن می‌گیرد و دی‌اکسید کربن پس می‌دهد؛ با کمک دیافراگم که زیر پایش بالا و پایین می‌رود.' },
    { id: 'sy-2', w: 'sy', lv: 2, name: 'لوبیا', title: 'کلیه صافی‌کار', shape: 'bean', color: '#B84A4A', acc: ['crown'], bio: 'خون را صاف می‌کند، ادرار می‌سازد و پشت صفاق (retroperitoneal) زندگی می‌کند؛ تنها اندام بزرگ شکم که آن‌جاست.' },
    { id: 'dr-0', w: 'dr', lv: 0, name: 'قطب‌نما', title: 'جهت‌یاب بدن', shape: 'compass', color: '#1899D6', acc: ['sparkle'], bio: 'همیشه از «وضعیت آناتومیک» شروع می‌کند: ایستاده، کف دست‌ها رو به جلو. بعد می‌گوید superior، medial یا distal.' },
    { id: 'dr-1', w: 'dr', lv: 1, name: 'برشکار', title: 'استاد صفحه‌ها', shape: 'clipboard', color: '#E3F2FD', acc: ['glasses'], bio: 'بدن را با سه صفحه می‌بُرد: ساژیتال (چپ و راست)، فرونتال (جلو و عقب) و عرضی (بالا و پایین). عاشق CT و MRI است.' },
    { id: 'dr-2', w: 'dr', lv: 2, name: 'دستکش', title: 'استاد وضعیت‌ها', shape: 'glove', color: '#9FD3F5', acc: ['crown'], bio: 'بیمار را برای هر معاینه در وضعیت درست می‌گذارد: supine، prone، Fowler، Sims، lithotomy یا Trendelenburg.' },
    { id: 'cv-0', w: 'cv', lv: 0, name: 'حفره‌ای', title: 'نگهبان دو حفره بزرگ', shape: 'blob', color: '#7B5CE0', acc: ['sparkle'], bio: 'حفره پشتی (جمجمه و نخاع) و حفره جلویی (سینه و شکم-لگن) را با هم می‌پاید؛ دیافراگم مرز دو طبقه است.' },
    { id: 'cv-1', w: 'cv', lv: 1, name: 'چهارخانه', title: 'نقشه‌کش شکم', shape: 'quad', color: '#F3C9A8', acc: ['glasses'], bio: 'شکم را به چهار ربع و نه ناحیه تقسیم می‌کند؛ درد RLQ را که بشنود، اول یاد آپاندیس می‌افتد.' },
    { id: 'cv-2', w: 'cv', lv: 2, name: 'مهره', title: 'ستون استوار', shape: 'disc', color: '#E5A500', acc: ['crown'], bio: '۷ گردنی، ۱۲ سینه‌ای، ۵ کمری؛ و پایین‌تر خاجی و دنبالچه که جوش خورده‌اند. نخاع را در دلش امن نگه می‌دارد.' },
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
/* پیکر — راند بالینی: پرونده‌های چندمرحله‌ای
 * پرونده‌ها از مطالعات موردی فایل‌های پیوست (کودک با جسم خارجی در بینی، زکریا، بیمار سلیاک، کتی رایلی، ارجاع‌های فصل
 * Body Organization5) و موقعیت‌های رایج بالینی ساخته شده‌اند؛ هدف: به کار بردن واژه‌های ساختار بدن در دل یک پرونده واقعی.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان بدن ================= */
    {
      id: 'r1', w: 'lx', title: 'سیب‌زمینی در بینی', who: 'پسر ۱۸ ماهه',
      brief: 'مادر کودک را با خونریزی از سوراخ چپ بینی و بی‌قراری به اورژانس آورده است. کودک سالم بوده و تاکنون بیماری نداشته. در معاینه، یک تکه سیب‌زمینی سرخ‌کرده در بخش جلویی حفره بینی دیده می‌شود.',
      chart: [['بخش', 'ED'], ['HPI', 'خونریزی سوراخ چپ بینی از ۲ ساعت پیش'], ['حساسیت', 'NKDA'], ['معاینه HEENT', 'جسم خارجی در anterior حفره بینی چپ']],
      fig: { a: ['openings'], l: ['منافذ سر و صورت'] },
      steps: [
        M('واژه', 'epistaxis یعنی…', ['خونریزی از بینی', 'جسم خارجی در گوش', 'التهاب سینوس', 'تنگی سوراخ بینی'], 'epistaxis = خونریزی بینی.'),
        M('منفذ', 'سوراخ‌های بینی به زبان پزشکی چیست؟', ['nares', 'meatus', 'foramina', 'stoma'], 'nares (مفرد naris).'),
        M('جهت', 'جسم خارجی در بخش anterior حفره بینی است؛ یعنی…', ['در بخش جلویی، نزدیک سوراخ بینی', 'در بخش پشتی، نزدیک حلق', 'در سمت راست', 'در بالای حفره'], 'anterior = جلو.'),
        M('وضعیت', 'کودک برای معاینه به پشت خوابانده می‌شود. این وضعیت چه نام دارد؟', ['supine', 'prone', 'Fowler', 'Sims'], 'supine = طاق‌باز.'),
        P('اختصار', 'هر اختصار پرونده را به معنی‌اش وصل کن', [['ED', 'اورژانس'], ['HPI', 'شرح حال بیماری فعلی'], ['NKDA', 'حساسیت دارویی شناخته‌شده ندارد'], ['HEENT', 'سر، چشم، گوش، بینی، حلق']]),
        T('تخصص', 'متخصص گوش، حلق و بینی otorhinolaryngologist نام دارد.', true, 'ot/o + rhin/o + laryng/o + -logist.'),
        S('املا', 'املای «سوراخ‌های بینی» را بنویس', 'nares', 'nares.', 'na…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'سه دارو، سه راه', who: 'خانم ۶۰ ساله در بخش',
      brief: 'برای بیمار سه دستور دارویی نوشته شده: قرص زیرزبانی برای درد قفسه سینه، آنتی‌بیوتیک وریدی و واکسن عضلانی. پرستار باید راه هر دارو را درست تشخیص دهد.',
      chart: [['دستور ۱', 'nitroglycerin SL'], ['دستور ۲', 'antibiotic IV'], ['دستور ۳', 'vaccine IM'], ['آزمون پوستی', 'PPD ID']],
      fig: { a: ['injection-layers'], l: ['لایه‌ها و زاویه تزریق'] },
      steps: [
        M('اختصار', 'SL یعنی…', ['sublingual: زیر زبان', 'subcutaneous: زیر پوست', 'slow: آهسته', 'single: یک بار'], 'sub- (زیر) + lingu/o (زبان).'),
        P('راه', 'هر اختصار را به جای تزریق وصل کن', [['IV', 'درون سیاهرگ'], ['IM', 'درون عضله'], ['ID', 'درون پوست'], ['SubQ', 'زیر پوست، در چربی']]),
        M('جذب', 'چرا داروی درد قفسه سینه زیر زبان داده می‌شود؟', ['جذب سریع‌تر از رگ‌های زیر زبان', 'چون قرص بزرگ است', 'تا اسید معده آن را فعال کند', 'تا آهسته جذب شود'], 'جذب sublingual سریع‌تر از خوراکی است.'),
        O('عمق', 'تزریق‌ها را از سطحی‌ترین به عمیق‌ترین بچین', ['intradermal', 'subcutaneous', 'intramuscular'], 'درم ← زیرجلد ← عضله.'),
        T('دسته', 'همه این تزریق‌ها راه parenteral به حساب می‌آیند.', true, 'parenteral = هر راه به‌جز دستگاه گوارش.'),
        S('املا', 'املای «داخل عضلانی» را بنویس', 'intramuscular', 'intra- + muscul/o + -ar.', 'intra…')
      ]
    },
    /* ================= سازمان‌یابی و سلول ================= */
    {
      id: 'r3', w: 'og', title: 'دانشجوی خسته', who: 'زکریا، دانشجوی پزشکی',
      brief: 'زکریا چند هفته است خسته است، در کلاس تمرکز ندارد، کمی وزن اضافه کرده و یبوست خفیف دارد. فکر می‌کند کم‌کاری تیروئید دارد. پزشک عمومی مرور دستگاه‌ها و معاینه کامل انجام می‌دهد و آزمایش می‌خواهد.',
      chart: [['ROS', 'خستگی، کاهش تمرکز'], ['آزمایش‌ها', 'قند خون، CBC، تیروئید'], ['نتیجه', 'همه WNL'], ['تشخیص', 'کم‌خوابی و تغذیه نامناسب']],
      fig: { a: ['metabolism'], l: ['متابولیسم'] },
      steps: [
        M('اختصار', 'ROS یعنی…', ['مرور دستگاه‌های بدن', 'شمارش کامل خون', 'نتیجه طبیعی', 'رادیوگرافی قفسه سینه'], 'review of systems.'),
        M('اختصار', 'WNL در نتیجه آزمایش یعنی…', ['در محدوده طبیعی', 'نیاز به تکرار', 'بسیار بالا', 'نامعلوم'], 'within normal limits.'),
        M('مفهوم', 'تیروئید با کدام دستگاه بدن کار می‌کند؟', ['endocrine', 'digestive', 'integumentary', 'lymphatic'], 'غده درون‌ریز؛ هورمون‌هایش متابولیسم را تنظیم می‌کنند.'),
        M('واژه', 'کم‌کاری تیروئید به انگلیسی چیست؟', ['hypothyroidism', 'hyperthyroidism', 'thyroiditis', 'thyroidectomy'], 'hypo- = کم.'),
        T('متابولیسم', 'catabolism بخشی از متابولیسم است که مواد را برای آزاد کردن انرژی می‌شکند.', true, 'cata- = پایین، شکستن.'),
        S('املا', 'املای «متابولیسم» را بنویس', 'metabolism', 'meta- + bol/o + -ism.', 'meta…')
      ]
    },
    {
      id: 'r4', w: 'og', title: 'یک توده و یک نمونه', who: 'آقای ۵۵ ساله',
      brief: 'در پوست ساعد بیمار توده‌ای رشدکننده پیدا شده. جراح بیوپسی می‌گیرد و نمونه را به آزمایشگاه پاتولوژی می‌فرستد. گزارش: نئوپلاسم بافت پوششی، «in situ».',
      chart: [['یافته', 'توده رشدکننده روی ساعد'], ['اقدام', 'Bx'], ['گزارش', 'epithelioma in situ'], ['سابقه', 'آفتاب‌گیری زیاد']],
      fig: { a: ['cell-types'], l: ['انواع سلول'] },
      steps: [
        M('اختصار', 'Bx یعنی…', ['biopsy', 'blood exam', 'body x-ray', 'bone'], 'Bx = biopsy: برداشتن بافت زنده برای تشخیص.'),
        M('واژه', 'neoplasm یعنی…', ['رشد تازه و غیرطبیعی بافت', 'سلول طبیعی', 'التهاب پوست', 'زخم'], 'neo- + -plasm.'),
        M('لاتین', 'in situ در گزارش یعنی…', ['در جای اصلی؛ گسترش نیافته', 'در آزمایشگاه', 'پس از مرگ', 'درون بدن زنده'], 'in situ = در محل.'),
        P('متخصص', 'هر متخصص را به کارش وصل کن', [['pathologist', 'بررسی بیماری در بافت'], ['histologist', 'بررسی بافت زیر میکروسکوپ'], ['cytologist', 'بررسی سلول‌ها'], ['dermatologist', 'متخصص پوست']]),
        T('عامل', 'اشعه فرابنفش آفتاب یک carcinogen برای پوست است.', true, 'carcin/o + -gen: عامل سرطان‌زا.'),
        S('املا', 'املای «بیوپسی» را بنویس', 'biopsy', 'bi/o + -opsy.', 'bio…')
      ]
    },
    /* ================= بافت‌ها و غشاها ================= */
    {
      id: 'r5', w: 'ts', title: 'درد شکم پس از جراحی', who: 'خانم ۴۲ ساله',
      brief: 'بیمار سه سال پیش جراحی شکم داشته. حالا درد کرامپی، نفخ و استفراغ دارد. پزشک به چسبندگی‌های داخل شکم و انسداد روده مشکوک است. از چند روز پیش تب دارد و ضربانش تند شده؛ پزشک نگران سپسیس است.',
      chart: [['سابقه', 'جراحی شکم ۳ سال پیش'], ['شکایت', 'درد کرامپی، نفخ، استفراغ'], ['علائم حیاتی', 'تب، ضربان تند، BP پایین'], ['تشخیص احتمالی', 'adhesions، انسداد روده، sepsis']],
      fig: { a: ['membranes'], l: ['لایه‌های صفاق'] },
      steps: [
        M('واژه', 'adhesion یعنی…', ['نوارهای اسکار که سطوح جدا را به هم می‌چسبانند', 'التهاب صفاق', 'تومور روده', 'سوراخ شدن معده'], 'بیشتر پس از جراحی شکم.'),
        M('غشا', 'غشایی که حفره شکمی را مفروش می‌کند چیست؟', ['peritoneum', 'pleura', 'pericardium', 'meninges'], 'peritone/o = صفاق.'),
        P('لایه', 'هر لایه را به جایش وصل کن', [['parietal peritoneum', 'روی دیواره شکم'], ['visceral peritoneum', 'روی سطح روده'], ['peritoneal cavity', 'فضای بین دو لایه']]),
        M('سپسیس', 'کدام مجموعه نشانه‌ها با سپسیس جور است؟', ['تب، ضربان و تنفس تند، فشار پایین', 'کاهش دما و ضربان آهسته', 'فقط سرفه', 'خارش پوست'], 'پاسخ التهابی سیستمیک به عفونت.'),
        T('اختصار', 'BP در پرونده یعنی فشار خون.', true, 'blood pressure.'),
        S('املا', 'املای «چسبندگی» را بنویس', 'adhesion', 'adhesion.', 'adhe…')
      ]
    },
    {
      id: 'r6', w: 'ts', title: 'ناخن ملتهب', who: 'آرایشگر ۳۰ ساله',
      brief: 'کنار ناخن انگشت اشاره بیمار از دو روز پیش قرمز، متورم و دردناک شده. او پوست کنار ناخن را کنده بود. پزشک پوست را معاینه می‌کند و التهاب بافت‌های اطراف را بررسی می‌کند.',
      chart: [['شکایت', 'درد و تورم کنار ناخن'], ['سابقه', 'کندن پوست اطراف ناخن'], ['معاینه', 'قرمزی، گرمی، تورم'], ['تشخیص', 'paronychia']],
      fig: { a: ['tissues'], l: ['چهار بافت'] },
      steps: [
        M('واژه', 'paronychia یعنی…', ['عفونت و التهاب کنار ناخن', 'بافت طبیعی دور ناخن', 'تومور ناخن', 'ناخن فرورفته'], 'para- (کنار) + onych/o (ناخن).'),
        M('همزاد', 'بافت طبیعی دور ناخن چه نام دارد؟', ['perionychium', 'paronychia', 'epidermis', 'striae'], 'peri- + onych/o.'),
        M('التهاب', 'کدام گروه نشانه‌ها، نشانه‌های کلاسیک التهاب‌اند؟', ['قرمزی، گرمی، تورم و درد', 'خشکی، سردی، کبودی', 'تب، لرز، سرفه', 'خارش و ریزش مو'], 'inflammation.'),
        P('ریشه', 'هر ریشه را به معنی‌اش وصل کن', [['onych/o', 'ناخن'], ['dermat/o', 'پوست'], ['hidr/o', 'عرق'], ['lip/o', 'چربی']]),
        T('دستگاه', 'ناخن جزو دستگاه integumentary است.', true, 'مو، ناخن و غدد پوست ضمیمه‌های پوست‌اند.'),
        S('املا', 'املای «عفونت کنار ناخن» را بنویس', 'paronychia', 'para- + onych/o + -ia.', 'paro…')
      ]
    },
    /* ================= دستگاه‌ها و اندام‌ها ================= */
    {
      id: 'r7', w: 'sy', title: 'نفخ، اسهال و کم‌خونی', who: 'خانم ۲۳ ساله',
      brief: 'بیمار ماه‌هاست نفخ، درد شکم و اسهال مزمن با مدفوع کم‌رنگ و بدبو دارد. BMI او ۱۷٫۵ است. متخصص گوارش آزمایش سلیاک و کم‌خونی را مثبت گزارش می‌کند. تیم درمان شامل متخصص تغذیه است.',
      chart: [['شکایت', 'نفخ، درد شکم، اسهال مزمن'], ['BMI', '17.5'], ['آزمایش', 'سلیاک مثبت، کم‌خونی'], ['درمان', 'GFD، پیگیری ۶ هفته بعد']],
      fig: { a: ['sys-digestive'], l: ['دستگاه گوارش'] },
      steps: [
        M('دستگاه', 'سلیاک به کدام بخش دستگاه گوارش آسیب می‌زند؟', ['روده باریک (enter/o)', 'مری', 'معده', 'کبد'], 'گلوتن پرزهای روده باریک را آسیب می‌زند.'),
        M('اختصار', 'GFD یعنی…', ['رژیم غذایی بدون گلوتن', 'آزمایش گوارش', 'بیماری ریفلاکس', 'رژیم پرچرب'], 'gluten-free diet.'),
        M('تخصص', 'بیمار به کدام متخصص ارجاع شده بود؟', ['gastroenterology', 'cardiology', 'nephrology', 'dermatology'], 'gastr/o + enter/o + -logy.'),
        P('ریشه', 'هر ریشه گوارش را به معنی‌اش وصل کن', [['gastr/o', 'معده'], ['enter/o', 'روده باریک'], ['col/o', 'روده بزرگ'], ['hepat/o', 'کبد']]),
        T('اختصار', 'RDN متخصص تغذیه و رژیم‌درمانی ثبت‌شده است.', true, 'registered dietitian nutritionist.'),
        S('املا', 'املای «گوارش‌شناسی» را بنویس', 'gastroenterology', 'gastr/o + enter/o + -logy.', 'gastro…')
      ]
    },
    {
      id: 'r8', w: 'sy', title: 'یک صبح در کلینیک ارجاع', who: 'هفت بیمار',
      brief: 'منشی کلینیک باید هر بیمار را به متخصص مناسب بفرستد: جان صداهای آرام را نمی‌شنود، روث تپش قلب دارد، ماری‌ان خونریزی رحمی دارد، خوزه مچش شکسته، دختر خانم کورتز عفونت‌های مکرر مثانه دارد، مارتا بثورات پوستی دارد و آقای اسپارکس زخم معده دارد.',
      chart: [['جان', 'کاهش شنوایی'], ['روث', 'تپش قلب'], ['خوزه', 'شکستگی مچ'], ['آقای اسپارکس', 'زخم معده']],
      fig: { a: ['systems'], l: ['دستگاه‌های بدن'] },
      steps: [
        P('ارجاع', 'هر بیمار را به تخصص درستش وصل کن', [['جان', 'otorhinolaryngology'], ['روث', 'cardiology'], ['خوزه', 'orthopedics'], ['آقای اسپارکس', 'gastroenterology']]),
        M('ارجاع', 'دختر خانم کورتز با عفونت‌های مکرر مثانه به کجا برود؟', ['urology', 'neurology', 'hematology', 'endocrinology'], 'ur/o = مجاری ادراری.'),
        M('ارجاع', 'ماری‌ان با خونریزی شدید رحمی…', ['gynecology', 'urology', 'cardiology', 'dermatology'], 'gynec/o = زن.'),
        M('ارجاع', 'مارتا با بثورات پوستی ماندگار…', ['dermatology', 'orthopedics', 'nephrology', 'gastroenterology'], 'dermat/o = پوست.'),
        T('واژه', 'cardiology علم بیماری‌های قلب است.', true, 'cardi/o + -logy.'),
        S('املا', 'املای «گوش، حلق و بینی‌شناسی» را بنویس', 'otorhinolaryngology', 'ot/o + rhin/o + laryng/o + -logy.', 'otorhino…')
      ]
    },
    /* ================= جهت، صفحه و وضعیت ================= */
    {
      id: 'r9', w: 'dr', title: 'آپاندکتومی کتی', who: 'کتی رایلی',
      brief: 'کتی برای برداشتن آپاندیس به اتاق عمل رفته است. او در وضعیت طاق‌باز قرار می‌گیرد؛ جراح از راه برش در سطح جلویی شکم وارد حفره شکمی-لگنی می‌شود. پس از عمل، کتی تا حدود سه هفته نمی‌تواند روی شکم بخوابد.',
      chart: [['عمل', 'appendectomy'], ['وضعیت', 'supine'], ['محل', 'RLQ'], ['پس از عمل', 'تا ۳ هفته بدون وضعیت prone']],
      fig: { a: ['bedside'], l: ['وضعیت‌های بیمار'] },
      steps: [
        M('وضعیت', 'supine یعنی…', ['طاق‌باز، رو به بالا', 'دمر، رو به پایین', 'نیمه‌نشسته', 'به پهلو'], 'supine = خوابیده به پشت.'),
        M('ربع', 'آپاندیس در کدام ربع است؟', ['RLQ', 'LLQ', 'RUQ', 'LUQ'], 'right lower quadrant.'),
        M('جهت', 'برش جراحی روی کدام سطح بدن است؟', ['anterior', 'posterior', 'superior', 'dorsal'], 'سطح جلویی شکم.'),
        O('عمق', 'لایه‌ها را از سطحی به عمقی بچین', ['پوست', 'چربی زیرپوستی', 'عضله', 'صفاق'], 'از superficial به deep.'),
        T('وضعیت', 'prone یعنی خوابیدن روی شکم.', true, 'به همین دلیل کتی تا مدتی نباید prone بخوابد.'),
        S('املا', 'املای «برداشتن آپاندیس» را بنویس', 'appendectomy', 'append/o + -ectomy.', 'appen…')
      ]
    },
    {
      id: 'r10', w: 'dr', title: 'تنگی نفس و عکس قفسه سینه', who: 'آقای ۶۸ ساله',
      brief: 'بیمار با تنگی نفس بستری شده. پرستار سر تخت را بالا می‌برد. پزشک عکس قفسه سینه PA و نیم‌رخ، و سپس CT با برش‌های عرضی درخواست می‌کند.',
      chart: [['شکایت', 'dyspnea'], ['وضعیت', 'Fowler'], ['تصویربرداری', 'CXR PA و lat'], ['ادامه', 'CT با برش‌های axial']],
      fig: { a: ['modalities'], l: ['روش‌های تصویربرداری'] },
      steps: [
        M('وضعیت', 'بالا بردن سر تخت برای تنگی نفس کدام وضعیت است؟', ['Fowler', 'Trendelenburg', 'prone', 'lithotomy'], 'نیمه‌نشسته؛ گسترش ریه آسان‌تر می‌شود.'),
        M('جهت', 'در عکس PA، اشعه از کجا وارد می‌شود؟', ['از پشت', 'از جلو', 'از پهلو', 'از بالا'], 'posteroanterior.'),
        M('اختصار', 'CXR یعنی…', ['عکس رادیولوژی قفسه سینه', 'سی‌تی جمجمه', 'شمارش خون', 'معاینه قلب'], 'chest x-ray.'),
        M('صفحه', 'برش‌های axial در CT با کدام صفحه بدن موازی‌اند؟', ['transverse', 'sagittal', 'frontal', 'coronal'], 'axial = transverse (افقی).'),
        T('روش', 'CT از اشعه ایکس استفاده می‌کند ولی MRI نه.', true, 'MRI با آهنربا و امواج رادیویی کار می‌کند.'),
        S('املا', 'املای «توموگرافی» را بنویس', 'tomography', 'tom/o + -graphy.', 'tomo…')
      ]
    },
    /* ================= حفره‌ها و نواحی ================= */
    {
      id: 'r11', w: 'cv', title: 'تصادف با دوچرخه', who: 'پسر ۱۵ ساله',
      brief: 'فرمان دوچرخه به شکم نوجوان خورده است. او از درد در بالای چپ شکم شکایت دارد، رنگ‌پریده است و ضربانش تند شده. CT شکم پارگی طحال را نشان می‌دهد. جراح درباره splenectomy تصمیم می‌گیرد.',
      chart: [['حادثه', 'ضربه فرمان دوچرخه به شکم'], ['درد', 'LUQ، hypochondriac چپ'], ['CT', 'پارگی طحال'], ['اقدام', 'بررسی splenectomy']],
      fig: { a: ['quadrants'], l: ['چهار ربع'] },
      steps: [
        M('ربع', 'LUQ یعنی…', ['ربع فوقانی چپ', 'ربع تحتانی چپ', 'ربع فوقانی راست', 'ناحیه نافی'], 'left upper quadrant.'),
        M('اندام', 'کدام اندام در LUQ است؟', ['طحال', 'آپاندیس', 'کیسه صفرا', 'مثانه'], 'طحال و معده در ربع فوقانی چپ.'),
        M('ناحیه', 'در تقسیم نه‌گانه، طحال بیشتر در کدام ناحیه است؟', ['left hypochondriac', 'epigastric', 'right lumbar', 'hypogastric'], 'زیر دنده‌های چپ.'),
        M('حفره', 'طحال در کدام حفره بدن است؟', ['abdominal', 'thoracic', 'pelvic', 'cranial'], 'زیر دیافراگم، در حفره شکمی.'),
        T('جراحی', 'splenectomy یعنی برداشتن طحال.', true, 'splen/o + -ectomy.'),
        S('املا', 'املای «برداشتن طحال» را بنویس', 'splenectomy', 'splen/o + -ectomy.', 'splen…')
      ]
    },
    {
      id: 'r12', w: 'cv', title: 'کمردرد تیرکشنده', who: 'مرد ۴۵ ساله',
      brief: 'بیمار پس از بلند کردن جسم سنگین دچار کمردرد شده که به پشت ران و ساق پای راست تیر می‌کشد. MRI ساژیتال ستون کمری بیرون‌زدگی دیسک بین مهره‌های چهارم و پنجم کمری را نشان می‌دهد.',
      chart: [['شکایت', 'کمردرد تیرکشنده به پای راست'], ['معاینه', 'درد با خم کردن تنه (flexion)'], ['MRI', 'sagittal: فتق دیسک L4–L5'], ['ناحیه', 'lumbar']],
      fig: { a: ['spine'], l: ['ستون مهره‌ها'] },
      steps: [
        M('اختصار', 'L4 یعنی…', ['چهارمین مهره کمری', 'چهارمین مهره گردنی', 'چهارمین مهره سینه‌ای', 'چهارمین دنده'], 'L = lumbar.'),
        M('تعداد', 'ناحیه کمری چند مهره دارد؟', ['۵', '۷', '۱۲', '۴'], 'L1 تا L5.'),
        M('صفحه', 'MRI ساژیتال بدن را به کدام بخش‌ها برش می‌دهد؟', ['راست و چپ', 'جلو و عقب', 'بالا و پایین', 'سطحی و عمقی'], 'sagittal = راست و چپ.'),
        O('ستون', 'ناحیه‌های ستون مهره‌ها را از بالا به پایین بچین', ['cervical', 'thoracic', 'lumbar', 'sacral', 'coccygeal'], 'گردنی ← سینه‌ای ← کمری ← خاجی ← دنبالچه.'),
        T('جهت', 'درد پشت ران در سطح posterior اندام تحتانی است.', true, 'posterior = پشت.'),
        S('املا', 'املای «مهره‌ها» (جمع) را بنویس', 'vertebrae', 'vertebra → vertebrae.', 'verte…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* پیکر — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'معنی واژه را از پسوند شروع کن: epigastric یعنی «مربوط به» + «بالای» + «معده».'],
    ['Lx', 'orifice از os (دهان) و facere (ساختن) آمده: «دهانه‌ای که ساخته شده».'],
    ['Lx', 'stoma دهانه‌ای است که جراح می‌سازد؛ پسوند ‎-stomy یعنی ایجاد همین دهانه.'],
    ['Lx', 'جمع vertebra می‌شود vertebrae، جمع foramen می‌شود foramina و جمع phalanx می‌شود phalanges.'],
    ['Lx', 'hidr/o یعنی عرق و hydr/o یعنی آب؛ فقط یک حرف فرق دارند!'],
    ['Lx', 'palpate یعنی لمس کردن در معاینه؛ palpitate یعنی تپش قلب. یک حرف، دو دنیا.'],
    ['Lx', 'parenteral یعنی هر راه دارو به‌جز دستگاه گوارش: IV، IM، SubQ، ID و intrathecal.'],
    ['Cyt', 'سلول کوچک‌ترین واحد زندگی است؛ بدن ۱۰ تا ۱۰۰ تریلیون سلول دارد.'],
    ['Cyt', 'بزرگ‌ترین سلول بدن تخمک (ovum) است و کوچک‌ترینش اسپرم.'],
    ['Cyt', 'هر سلول بدن ۴۶ کروموزوم (۲۳ جفت) دارد؛ سلول‌های جنسی فقط ۲۳ تا.'],
    ['Cyt', 'میتوز دو سلول یکسان می‌سازد؛ میوز تعداد کروموزوم‌ها را نصف می‌کند.'],
    ['Cyt', 'metabolism = anabolism (ساختن) + catabolism (شکستن). ana یعنی بالا و cata یعنی پایین.'],
    ['Cyt', 'میتوکندری نیروگاه سلول است و انرژی را به شکل ATP می‌سازد.'],
    ['Hist', 'بدن فقط چهار نوع بافت دارد: پوششی، همبند، عضلانی و عصبی.'],
    ['Hist', 'بافت همبند پرجمعیت‌ترین بافت بدن است؛ حتی خون و چربی هم همبندند.'],
    ['Hist', 'تاندون عضله را به استخوان وصل می‌کند و رباط استخوان را به استخوان.'],
    ['Hist', 'عضله قلبی فقط در قلب است؛ مخطط است ولی غیرارادی.'],
    ['Hist', 'بافت عصبی بیشتر از هر بافت دیگری اکسیژن و غذا لازم دارد.'],
    ['Hist', 'لایه جداری (parietal) دیواره حفره را می‌پوشاند و لایه احشایی (visceral) خود اندام را.'],
    ['Hist', 'پوست یک اندام است: از بافت پوششی، همبند و عصبی ساخته شده.'],
    ['Sys', 'کلیه‌ها پشت صفاق‌اند (retroperitoneal)؛ تنها اندام بزرگ شکم که درون کیسه صفاق نیست.'],
    ['Sys', 'از هر اندام جفت (مثل کلیه و ریه) یکی هم برای زنده ماندن کافی است.'],
    ['Sys', 'otorhinolaryngology = گوش + بینی + حنجره + علم؛ همان ENT.'],
    ['Sys', 'دستگاه پوششی (integumentary) شامل پوست، مو، ناخن و غدد عرق و چربی است.'],
    ['Dir', 'همه جهت‌ها از وضعیت آناتومیک گفته می‌شوند: ایستاده، رو به جلو، کف دست‌ها رو به جلو.'],
    ['Dir', 'proximal و distal فقط برای دست و پا به کار می‌روند: آرنج نسبت به مچ proximal است.'],
    ['Dir', 'صفحه ساژیتال بدن را چپ و راست، فرونتال جلو و عقب، و عرضی بالا و پایین می‌کند.'],
    ['Dir', 'supine یعنی طاق‌باز (رو به بالا) و prone یعنی دمر؛ supine را با «spine روی تخت» به خاطر بسپار.'],
    ['Dir', 'عکس PA قفسه سینه یعنی اشعه از پشت (posterior) وارد و از جلو (anterior) خارج می‌شود.'],
    ['Dir', 'abduction دور کردن از خط میانی است و adduction نزدیک کردن؛ ab = دور، ad = به سمت.'],
    ['Cav', 'دیافراگم حفره قفسه سینه را از حفره شکمی جدا می‌کند؛ بین شکم و لگن دیواره‌ای نیست.'],
    ['Cav', 'حفره‌های پشتی: جمجمه‌ای و نخاعی. حفره‌های جلویی: قفسه سینه و شکمی-لگنی.'],
    ['Cav', 'آپاندیس در ربع تحتانی راست (RLQ) است؛ درد آن‌جا اول آپاندیسیت را به یاد می‌آورد.'],
    ['Cav', 'hypochondriac یعنی زیر غضروف دنده‌ها: hypo (زیر) + chondr (غضروف) + iac.'],
    ['Cav', 'ستون مهره‌ها: ۷ گردنی، ۱۲ سینه‌ای، ۵ کمری، ۵ خاجی جوش‌خورده و دنبالچه.'],
    ['Cav', 'چپ و راست روی نقشه شکم همیشه چپ و راستِ خودِ بیمار است، نه بیننده.']
  ];
  const COLORS = { Lx: '#4F5BD5', Cyt: '#D6457A', Hist: '#E07A1F', Sys: '#12A594', Dir: '#1899D6', Cav: '#7B5CE0', '': '#2F5FD0' };
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
/* پیکر — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* پیکر — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع آناتومی
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'peykar.tool';

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
      <p class="disclaimer">⚕️ پیکر ابزار آموزشی است و جایگزین منابع آناتومی و قضاوت بالینی نیست.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: cavity، حفره، lateral…')}
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
  const SAMPLES = ['hypochondriac', 'retroperitoneal', 'epithelioma', 'mediolateral', 'myosarcoma', 'supraclavicular', 'intramuscular', 'histologist'];
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
    return `<div class="tpane">${searchBox('جست‌وجو: later، پهلو، \u200e-logy\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: RUQ، قدامی، MRI…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ['جهت', [['superior / inferior', 'بالا / پایین (cephalic / caudal)'], ['anterior / posterior', 'جلو / پشت (ventral / dorsal)'], ['medial / lateral', 'به سمت خط میانی / به سمت پهلو'], ['proximal / distal', 'نزدیک / دور از محل اتصال اندام'], ['superficial / deep', 'سطحی / عمقی'], ['ipsilateral / contralateral', 'همان سمت / سمت مقابل']]],
    ['صفحه', [['sagittal (midsagittal)', 'راست و چپ (میدساژیتال: دو نیمه مساوی)'], ['frontal (coronal)', 'جلو و عقب'], ['transverse (horizontal)', 'بالا و پایین']]],
    ['حفره', [['cranial', 'مغز (حفره پشتی)'], ['spinal (vertebral)', 'نخاع (حفره پشتی)'], ['thoracic', 'قلب، ریه‌ها، مری، نای (حفره جلویی)'], ['abdominal', 'معده، روده، کبد، طحال، پانکراس'], ['pelvic', 'مثانه، اندام‌های تولیدمثل، راست‌روده']]],
    ['ربع', [['RUQ', 'لوب راست کبد، کیسه صفرا، بخشی از پانکراس و روده'], ['LUQ', 'معده، طحال، لوب چپ کبد، بخشی از پانکراس'], ['RLQ', 'آپاندیس، تخمدان و لوله راست، حالب راست'], ['LLQ', 'کولون سیگموئید، تخمدان و لوله چپ، حالب چپ']]],
    ['ستون مهره', [['cervical (C1–C7)', '۷ مهره گردنی'], ['thoracic (T1–T12)', '۱۲ مهره سینه‌ای'], ['lumbar (L1–L5)', '۵ مهره کمری'], ['sacral (S1–S5)', '۵ مهره جوش‌خورده خاجی'], ['coccygeal', '۳ تا ۵ مهره کوچک دنبالچه']]],
    ['وضعیت بیمار', [['supine', 'طاق‌باز: معاینه قفسه سینه، شکم، رفلکس‌ها'], ['prone', 'دمر: معاینه پشت و ستون فقرات'], ['Fowler', 'نیمه‌نشسته: تنفس دشوار'], ['Sims', 'به پهلوی چپ: معاینه رکتوم، تنقیه'], ['lithotomy', 'پاها در رکاب: معاینه لگن، پاپ اسمیر'], ['Trendelenburg', 'سر پایین‌تر: درناژ وضعیتی']]]
  ];
  const ref = () => `<div class="tpane"><p class="muted">جدول‌های پرکاربرد برای خواندن پرونده و گزارش تصویربرداری.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>واژه</th><th>معنی</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['regions9', 'quadrants'], l: ['نه ناحیه', 'چهار ربع'] })}</div>`;

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
