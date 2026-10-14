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
  EA.APP = { name: 'تپش', key: 'tapesh', title: 'تپش • ترمینولوژی قلب و عروق' };

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
    name: 'تپش', key: 'tapesh', title: 'تپش • ترمینولوژی قلب و عروق', certCode: 'TP',
    subject: 'ترمینولوژی پزشکی دستگاه قلب و عروق',
    kicker: '❤️ ترمینولوژی پزشکی: دستگاه قلب و عروق (Cardiovascular System)',
    hello: 'سلام، من <b>تپش</b> هستم؛',
    landP: () => `سلام، من <b>تپش</b> هستم؛ قلبی که نوار قلب خودش را می‌خواند! این‌جا یاد می‌گیری قلب و رگ‌ها چطور ساخته شده‌اند و کار می‌کنند، بیماری‌ها، آزمایش‌ها و درمان‌هایشان را با واژه دقیق نام ببری و هر واژه تازه را خودت <b>رمزگشایی</b> کنی. ${fa(EA.lex.TERMS.length)} واژه با تلفظ و معنی فارسی، ${fa(Object.keys(EA.IMG).length || 65)} تصویر از کتاب‌ها، ${fa(EA.rounds.length)} پرونده بالینی و کارت‌های لایتنر منتظرت هستند.`,
    disclaimer: 'تپش ابزار آموزشی است و جایگزین منابع پزشکی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها تصویر کتاب و شکل آموزشی؛ از حفره‌ها و دریچه‌های قلب و مسیر خون تا نوار قلب، آنژیوگرافی و استنت.',
    outcomes: [
          'هر واژه قلب و عروق را به پیشوند، ریشه و پسوند بشکنی و واژه تازه بسازی',
          'لایه‌ها، حفره‌ها، دریچه‌ها و رگ‌های بزرگ قلب و مسیر خون را دقیق نام ببری',
          'چرخه قلب، دستگاه هدایت، موج‌های نوار قلب، فشار خون و نبض را توصیف کنی',
          'سرخرگ‌ها، سیاهرگ‌ها، مویرگ‌ها، گردش ریوی و عمومی و رگ‌های کرونری را بشناسی',
          'بیماری‌های قلب و عروق، از آترواسکلروز و سکته قلبی تا آریتمی و نقص‌های مادرزادی را تشخیص دهی',
          'آزمایش‌ها، تصویربرداری، جراحی‌ها و داروهای قلبی و اختصارهای پرونده را بخوانی'
        ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، پرونده یک بیمار قلبی را مثل زبان مادری می‌خوانی.',
    obHello: 'سلام! من تپش هستم؛ قلبی که نوار قلب خودش را می‌خواند 💓 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان بدن» بهترین شروع است؛ قطعه‌های واژه‌سازی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
    q: 'در پرونده نوشته شده: <b dir="ltr">bradycardia</b>. یعنی…',
    fig: { a: ['rate-strips'], l: ['ضربان کند، طبیعی و تند'] },
    opts: ['ضربان قلب کندتر از طبیعی', 'ضربان قلب تندتر از طبیعی', 'بزرگ شدن قلب', 'التهاب لایه درونی قلب'],
    why: `${EA.K.wb('brady-', 'cardi/o', '-ia')}<br><b>brady-</b> = کند • <b>cardi/o</b> = قلب • <b>-ia</b> = حالت. یعنی <b>ضربان کند</b>؛ کمتر از ۶۰ بار در دقیقه. معنی را از پسوند شروع کن!`
  }),
    titles: ['ضربان تازه', 'دهلیزنشین', 'بطن کوشا', 'نگهبان دریچه', 'کرونرشناس', 'گره سینوسی', 'نوارخوان', 'فشارسنج دقیق', 'رگ‌شناس', 'کارآگاه آریتمی', 'نجات‌دهنده CPR', 'سپهسالار تپش', 'استاد زبان قلب'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی علوم آزمایشگاهی', 'کارشناس علوم آزمایشگاهی', 'دانشجوی تغذیه', 'پرستار ICU', 'کارشناس تغذیه بالینی', 'رزیدنت داخلی', 'دانشجوی مامایی', 'دانشجوی داروسازی', 'کارشناس اتاق عمل', 'پرستار بخش هماتولوژی'],
    firstBadge: ['💓', 'اولین ضربان'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], an: ['🫀', 'معمار قلب'], ep: ['⚡', 'نوارخوان'], vc: ['🩸', 'رگ‌شناس'], ds: ['💔', 'کارآگاه بیماری'], tx: ['💊', 'درمانگر'] },
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
    ["abdominal aorta", "ab-DOM-ih-nal ay-OR-tah", "Part of the descending aorta below the diaphragm that supplies the abdominal organs and legs.", "آئورت شکمی", "vc", "ves", []],
    ["abdominal aortic aneurysm", "ab-DOM-ih-nal ay-OR-tik AN-yoo-rizm", "Aneurysm of the abdominal aorta; rupture causes life-threatening bleeding.", "آنوریسم آئورت شکمی", "ds", "dz", ["AAA"]],
    ["ACE inhibitor", "ays in-HIB-ih-ter", "Drug that lowers blood pressure by blocking the enzyme that forms angiotensin II.", "مهارکننده ACE", "tx", "rx", ["ACE"]],
    ["anastomosis", "ah-nas-toh-MOH-sis", "Natural or surgical connection between two vessels.", "آناستوموز (اتصال دو رگ)", "vc", "ves", []],
    ["aneurysm", "AN-yoo-rizm", "Ballooning of a weakened part of an artery wall that may rupture.", "آنوریسم (اتساع کیسه‌ای سرخرگ)", "ds", "dz", []],
    ["aneurysmectomy", "an-yoo-riz-MEK-toh-mee", "Surgical removal of an aneurysm.", "برداشتن آنوریسم", "tx", "proc", []],
    ["angina pectoris", "an-JYE-nah PEK-toh-ris", "Chest pain or pressure caused by temporary ischemia of the heart muscle, often with exertion; also called angina.", "آنژین صدری (درد قفسه سینه)", "ds", "dz", []],
    ["angiogram", "AN-jee-oh-gram", "X-ray image of a blood vessel produced by angiography.", "آنژیوگرام (عکس رگ)", "tx", "dx", []],
    ["angiography", "an-jee-OG-rah-fee", "X-ray imaging of blood vessels after injecting a contrast dye.", "آنژیوگرافی (رگ‌نگاری)", "tx", "dx", []],
    ["angioplasty", "AN-jee-oh-plas-tee", "Procedure that opens a narrowed artery by inflating a small balloon at the tip of a catheter.", "آنژیوپلاستی (باز کردن رگ با بالون)", "tx", "proc", ["PTCA", "PCI"]],
    ["angioscopy", "an-jee-OS-koh-pee", "Viewing the inside of a blood vessel with a fiberoptic scope passed through a catheter.", "آنژیوسکوپی (دیدن درون رگ)", "tx", "dx", []],
    ["angiotensin receptor blocker", "an-jee-oh-TEN-sin ree-SEP-ter BLOK-er", "Drug that lowers blood pressure by blocking the action of angiotensin II.", "مسدودکننده گیرنده آنژیوتانسین", "tx", "rx", ["ARB"]],
    ["antiarrhythmic", "an-tye-ah-RITH-mik", "Drug that prevents or corrects an irregular heart rhythm.", "ضدآریتمی", "tx", "rx", []],
    ["anticoagulant", "an-tye-koh-AG-yoo-lant", "Drug that prevents or delays blood clotting, such as heparin or warfarin.", "ضدانعقاد", "tx", "rx", []],
    ["antihypertensive", "an-tye-hye-per-TEN-siv", "Drug that lowers high blood pressure.", "داروی ضدفشار خون", "tx", "rx", []],
    ["antiplatelet agent", "an-tye-PLAYT-let AY-jent", "Drug that keeps platelets from clumping, such as aspirin.", "ضدپلاکت", "tx", "rx", []],
    ["aorta", "ay-OR-tah", "Largest artery of the body; carries oxygenated blood from the left ventricle to the systemic circulation.", "آئورت (سرخرگ اصلی)", "an", "anat", []],
    ["aortic arch", "ay-OR-tik arch", "Curved part of the aorta that gives branches to the head and arms.", "قوس آئورت", "vc", "ves", []],
    ["aortic valve", "ay-OR-tik valv", "Semilunar valve between the left ventricle and the aorta.", "دریچه آئورت", "an", "anat", []],
    ["apex", "AY-peks", "Lower pointed tip of the heart, directed downward and to the left.", "نوک قلب (آپکس)", "an", "anat", []],
    ["apical pulse", "AP-ih-kal puls", "Heartbeat heard with a stethoscope over the apex of the heart.", "نبض اپیکال (نوک قلب)", "ep", "elec", []],
    ["arrhythmia", "ah-RITH-mee-ah", "Irregularity or loss of the normal rhythm of the heartbeat; also called dysrhythmia.", "آریتمی (بی‌نظمی ضربان)", "ds", "dz", []],
    ["arterial", "ar-TEER-ee-al", "Pertaining to an artery.", "سرخرگی (شریانی)", "lx", "adj", []],
    ["arteriole", "ar-TEER-ee-ohl", "Small artery that carries blood into a capillary bed; controls blood pressure by narrowing or widening.", "سرخرگ کوچک (آرتریول)", "vc", "ves", []],
    ["arteriosclerosis", "ar-teer-ee-oh-skleh-ROH-sis", "Thickening, hardening and loss of elasticity of the arterial walls; also called hardening of the arteries.", "آرتریواسکلروز (سخت شدن سرخرگ)", "ds", "dz", []],
    ["artery", "AR-ter-ee", "Thick-walled elastic blood vessel that carries blood away from the heart.", "سرخرگ (شریان)", "vc", "ves", []],
    ["artificial pacemaker", "ar-tih-FISH-al PAYS-may-ker", "Battery-powered device implanted under the skin that sends electrical impulses to keep the heartbeat regular.", "ضربان‌ساز مصنوعی", "tx", "proc", []],
    ["ascending aorta", "ah-SEN-ding ay-OR-tah", "First part of the aorta rising from the left ventricle; gives off the coronary arteries.", "آئورت صعودی", "vc", "ves", []],
    ["aspirin", "AS-pih-rin", "Antiplatelet drug given to prevent clots in coronary artery disease and during a heart attack.", "آسپرین", "tx", "rx", ["ASA"]],
    ["asystole", "ay-SIS-toh-lee", "Absence of any electrical activity or contraction of the heart; a flat line on the ECG.", "آسیستول (ایست کامل الکتریکی)", "ds", "dz", []],
    ["atherectomy", "ath-er-EK-toh-mee", "Removal of plaque from an artery with a cutting or grinding catheter.", "آترکتومی (برداشتن پلاک)", "tx", "proc", []],
    ["atheroma", "ath-er-OH-mah", "Fatty deposit (plaque) in the inner wall of an artery.", "آتروم (توده چربی در دیواره سرخرگ)", "ds", "dz", []],
    ["atherosclerosis", "ath-er-oh-skleh-ROH-sis", "Most common form of arteriosclerosis, caused by fatty plaque building up in the artery wall and narrowing the lumen.", "آترواسکلروز (تصلب شرایین با پلاک چربی)", "ds", "dz", []],
    ["atrial", "AY-tree-al", "Pertaining to an atrium.", "دهلیزی", "lx", "adj", []],
    ["atrial fibrillation", "AY-tree-al fib-rih-LAY-shun", "Quivering of the atria with an irregular, often fast heartbeat; raises the risk of clots and stroke.", "فیبریلاسیون دهلیزی", "ds", "dz", ["AF", "A-fib"]],
    ["atrioventricular node", "ay-tree-oh-ven-TRIK-yoo-lar nohd", "Node in the lower interatrial septum that briefly delays the impulse and passes it to the bundle of His.", "گره دهلیزی-بطنی", "ep", "elec", ["AV node"]],
    ["atrioventricular valve", "ay-tree-oh-ven-TRIK-yoo-lar valv", "Valve between an atrium and a ventricle: the tricuspid valve on the right and the mitral valve on the left.", "دریچه دهلیزی-بطنی", "an", "anat", ["AV"]],
    ["atrium", "AY-tree-um", "One of the two upper chambers of the heart that receive blood returning to the heart.", "دهلیز", "an", "anat", []],
    ["atrium / atria", "AY-tree-um / AY-tree-ah", "Singular and plural of the upper receiving chamber of the heart (-um becomes -a).", "دهلیز / دهلیزها", "lx", "pl", []],
    ["auscultation", "aws-kul-TAY-shun", "Listening to sounds within the body, usually with a stethoscope.", "سمع (گوش دادن با گوشی)", "ep", "elec", []],
    ["automated external defibrillator", "AW-toh-may-ted eks-TER-nal dee-FIB-rih-lay-ter", "Portable device that analyzes the rhythm and tells a lay rescuer when to deliver a shock.", "دفیبریلاتور خودکار خارجی", "tx", "proc", ["AED"]],
    ["avascular", "ay-VAS-kyoo-lar", "Without blood vessels.", "بدون رگ", "lx", "adj", []],
    ["B-type natriuretic peptide", "bee-type nay-tree-yoo-RET-ik PEP-tide", "Hormone released by stretched ventricles; high blood levels point to heart failure.", "پپتید ناتریورتیک نوع B", "tx", "dx", ["BNP"]],
    ["beta-blocker", "BAY-tah BLOK-er", "Drug that slows the heart rate and lowers blood pressure by blocking beta receptors.", "بتابلاکر", "tx", "rx", []],
    ["blood pressure", "blud PRESH-ur", "Force of blood against the walls of the arteries, written as systolic over diastolic in mmHg.", "فشار خون", "ep", "elec", ["BP", "mmHg"]],
    ["brachial artery", "BRAY-kee-al AR-ter-ee", "Artery of the upper arm; used to measure blood pressure.", "سرخرگ بازویی", "vc", "ves", []],
    ["bradycardia", "brad-ee-KAR-dee-ah", "Slow heart rate, fewer than 60 beats per minute.", "برادی‌کاردی (ضربان کند)", "ep", "elec", []],
    ["bruit", "broo-EE", "Blowing sound heard over a narrowed artery with a stethoscope.", "بروئی (صدای رگ تنگ)", "ds", "sx", []],
    ["bundle branches", "BUN-dul BRANCH-ez", "Right and left divisions of the bundle of His that carry impulses down each side of the septum.", "شاخه‌های دسته هیس", "ep", "elec", []],
    ["bundle of His", "BUN-dul uv hiss", "Group of conducting fibers that carries the impulse from the AV node into the interventricular septum.", "دسته هیس", "ep", "elec", []],
    ["C-reactive protein", "see ree-AK-tiv PROH-teen", "Blood marker of inflammation; high levels are linked with heart disease risk.", "پروتئین واکنشی C", "tx", "dx", ["CRP"]],
    ["calcium channel blocker", "KAL-see-um CHAN-el BLOK-er", "Drug that relaxes the vessel walls and slows the heart by blocking calcium entry into muscle cells.", "مسدودکننده کانال کلسیم", "tx", "rx", ["CCB"]],
    ["capillary", "KAP-ih-lair-ee", "Microscopic vessel with a wall one cell thick where oxygen, nutrients and wastes are exchanged with tissues.", "مویرگ", "vc", "ves", []],
    ["cardiac", "KAR-dee-ak", "Pertaining to the heart.", "قلبی", "lx", "adj", []],
    ["cardiac arrest", "KAR-dee-ak ah-REST", "Sudden stop of effective heart pumping, causing loss of pulse and consciousness.", "ایست قلبی", "ds", "dz", []],
    ["cardiac catheterization", "KAR-dee-ak kath-eh-ter-ih-ZAY-shun", "Passing a thin tube (catheter) through a vessel of the arm or groin into the heart to measure pressures and inject dye.", "کاتتریزاسیون قلبی", "tx", "dx", ["cath"]],
    ["cardiac cycle", "KAR-dee-ak SYE-kul", "One complete heartbeat: contraction (systole) and relaxation (diastole) of the atria and ventricles.", "چرخه قلبی", "ep", "elec", []],
    ["cardiac enzymes", "KAR-dee-ak EN-zymz", "Blood tests for proteins released by damaged heart muscle, such as troponin and CK-MB.", "آنزیم‌های قلبی", "tx", "dx", ["CK-MB"]],
    ["cardiac output", "KAR-dee-ak OWT-put", "Volume of blood pumped by the left ventricle per minute; heart rate times stroke volume.", "برون‌ده قلبی", "ep", "elec", ["CO"]],
    ["cardiac sonographer", "KAR-dee-ak soh-NOG-rah-fer", "Technologist who performs ultrasound examinations of the heart (echocardiograms).", "سونوگرافر قلب (اکوکاردیوگرافر)", "lx", "sci", []],
    ["cardiac surgeon", "KAR-dee-ak SUR-jun", "Surgeon who performs operations on the heart and great vessels, such as bypass grafting, valve repair and transplantation.", "جراح قلب", "lx", "sci", []],
    ["cardiac tamponade", "KAR-dee-ak tam-poh-NAYD", "Compression of the heart by fluid or blood collecting in the pericardial sac.", "تامپوناد قلبی", "ds", "dz", []],
    ["cardiogenic shock", "kar-dee-oh-JEN-ik shok", "Shock caused by severe failure of the heart to pump, often after a large heart attack.", "شوک قلبی", "ds", "dz", []],
    ["cardiologist", "kar-dee-OL-oh-jist", "Physician who specializes in diagnosing and treating diseases of the heart and blood vessels in adults.", "متخصص قلب و عروق", "lx", "sci", []],
    ["cardiology", "kar-dee-OL-oh-jee", "Branch of medicine that studies the heart and blood vessels and treats their diseases.", "قلب‌شناسی (کاردیولوژی)", "lx", "sci", []],
    ["cardiomegaly", "kar-dee-oh-MEG-ah-lee", "Enlargement of the heart.", "بزرگی قلب (کاردیومگالی)", "ds", "dz", []],
    ["cardiomyopathy", "kar-dee-oh-mye-OP-ah-thee", "Disease of the heart muscle that weakens or stiffens it.", "کاردیومیوپاتی (بیماری عضله قلب)", "ds", "dz", []],
    ["cardiopulmonary", "kar-dee-oh-PUL-moh-nair-ee", "Pertaining to the heart and lungs.", "قلبی-ریوی", "lx", "adj", []],
    ["cardiopulmonary resuscitation", "kar-dee-oh-PUL-moh-nair-ee ree-sus-ih-TAY-shun", "Emergency chest compressions and rescue breaths to keep blood flowing during cardiac arrest.", "احیای قلبی-ریوی", "tx", "proc", ["CPR"]],
    ["cardiovascular", "kar-dee-oh-VAS-kyoo-lar", "Pertaining to the heart and blood vessels.", "قلبی-عروقی", "lx", "adj", ["CV"]],
    ["cardiovascular technologist", "kar-dee-oh-VAS-kyoo-lar tek-NOL-oh-jist", "Allied health professional who assists with cardiac tests such as ECG, stress testing, echocardiography and catheterization.", "تکنولوژیست قلب و عروق", "lx", "sci", []],
    ["cardioversion", "kar-dee-oh-VER-zhun", "Timed electrical shock or medication used to convert an abnormal rhythm to normal.", "کاردیوورژن (برگرداندن ریتم)", "tx", "proc", []],
    ["carotid artery", "kah-ROT-id AR-ter-ee", "Main artery on each side of the neck that supplies the head and brain.", "سرخرگ کاروتید (گردنی)", "vc", "ves", []],
    ["carotid pulse", "kah-ROT-id puls", "Pulse felt over the carotid artery in the neck; checked in emergencies.", "نبض کاروتید (گردن)", "ep", "elec", []],
    ["catheter", "KATH-eh-ter", "Thin flexible tube inserted into a vessel or body cavity.", "سوند (کاتتر)", "tx", "dx", []],
    ["catheter ablation", "KATH-eh-ter ab-LAY-shun", "Destruction of a small area of heart tissue causing an arrhythmia, using heat or cold delivered through a catheter.", "ابلیشن (سوزاندن کانون آریتمی)", "tx", "proc", []],
    ["cholesterol", "koh-LES-ter-ol", "Fatty substance made by the liver and eaten in food; high levels promote atherosclerosis.", "کلسترول", "tx", "dx", []],
    ["chorda tendinea / chordae tendineae", "KOR-dah ten-DIN-ee-ah / KOR-dee ten-DIN-ee-ee", "Singular and plural of the tendon-like cords that anchor the AV valve cusps (-a becomes -ae).", "طناب وتری / طناب‌های وتری", "lx", "pl", []],
    ["chordae tendineae", "KOR-dee ten-DIN-ee-ee", "Tendon-like cords that connect the cusps of the atrioventricular valves to the papillary muscles and keep them from flipping back.", "طناب‌های وتری", "an", "anat", []],
    ["circumflex artery", "SER-kum-fleks AR-ter-ee", "Branch of the left coronary artery that curves around the left side to the back of the heart.", "سرخرگ سیرکومفلکس", "an", "anat", []],
    ["claudication", "klaw-dih-KAY-shun", "Cramping leg pain on walking that eases with rest, caused by poor arterial blood flow.", "لنگش (درد پا هنگام راه رفتن)", "ds", "sx", []],
    ["coarctation of the aorta", "koh-ark-TAY-shun uv thee ay-OR-tah", "Congenital narrowing of a segment of the aorta.", "کوآرکتاسیون آئورت (تنگی مادرزادی)", "ds", "dz", ["CoA"]],
    ["collateral circulation", "koh-LAT-er-al ser-kyoo-LAY-shun", "Alternative route formed by small vessels around a blocked artery.", "گردش خون جانبی", "vc", "ves", []],
    ["commissurotomy", "kom-ih-shur-OT-oh-mee", "Surgical cutting of the fused edges (commissures) of a narrowed valve, usually the mitral valve; also called valvotomy.", "کومیسوروتومی (باز کردن دریچه تنگ)", "tx", "proc", []],
    ["conduction system", "kon-DUK-shun SIS-tem", "Specialized tissue that starts and spreads electrical impulses through the heart: SA node, AV node, bundle of His, bundle branches and Purkinje fibers.", "دستگاه هدایت الکتریکی قلب", "ep", "elec", []],
    ["congenital heart disease", "kon-JEN-ih-tal hart dih-ZEEZ", "Heart defect present at birth.", "بیماری مادرزادی قلب", "ds", "dz", ["CHD"]],
    ["congestive heart failure", "kon-JES-tiv hart FAYL-yur", "Heart failure with fluid backing up into the lungs and body tissues.", "نارسایی احتقانی قلب", "ds", "dz", ["CHF"]],
    ["coronary", "KOR-oh-nair-ee", "Pertaining to the heart; describes the arteries that encircle the heart like a crown and supply the heart muscle.", "کرونری (تاجی)", "lx", "adj", []],
    ["coronary angiography", "KOR-oh-nair-ee an-jee-OG-rah-fee", "Angiography of the coronary arteries during cardiac catheterization to find blockages.", "آنژیوگرافی کرونر", "tx", "dx", []],
    ["coronary artery", "KOR-oh-nair-ee AR-ter-ee", "One of the arteries that branch from the aorta and supply oxygenated blood to the myocardium.", "سرخرگ کرونر", "an", "anat", []],
    ["coronary artery bypass graft", "KOR-oh-nair-ee AR-ter-ee BYE-pas graft", "Surgery that uses a vein or artery from elsewhere in the body to route blood around a blocked coronary artery.", "جراحی بای‌پس کرونر", "tx", "proc", ["CABG"]],
    ["coronary artery disease", "KOR-oh-nair-ee AR-ter-ee dih-ZEEZ", "Narrowing of the coronary arteries, usually by atherosclerosis, that reduces blood flow to the heart muscle.", "بیماری سرخرگ کرونر", "ds", "dz", ["CAD"]],
    ["coronary circulation", "KOR-oh-nair-ee ser-kyoo-LAY-shun", "Blood supply to the heart muscle itself through the coronary arteries and veins.", "گردش خون کرونری", "vc", "ves", []],
    ["coronary sinus", "KOR-oh-nair-ee SYE-nus", "Large vein on the back of the heart that collects blood from the heart muscle and empties into the right atrium.", "سینوس کرونر", "an", "anat", []],
    ["CT angiography", "see-tee an-jee-OG-rah-fee", "Computed tomography of vessels with contrast dye.", "سی‌تی آنژیوگرافی", "tx", "dx", ["CTA"]],
    ["cusp", "kusp", "One of the flaps (leaflets) of a heart valve.", "لت دریچه", "an", "anat", []],
    ["cyanosis", "sye-ah-NOH-sis", "Bluish color of the skin and lips caused by too little oxygen in the blood.", "سیانوز (کبودی)", "ds", "sx", []],
    ["deep vein thrombosis", "deep vane throm-BOH-sis", "Blood clot in a deep vein, usually of the leg; can break off and travel to the lungs.", "ترومبوز ورید عمقی", "ds", "dz", ["DVT"]],
    ["defibrillation", "dee-fib-rih-LAY-shun", "Electrical shock delivered to the heart to stop fibrillation and allow a normal rhythm to return.", "دفیبریلاسیون (شوک الکتریکی)", "tx", "proc", []],
    ["deoxygenated blood", "dee-OK-sih-jeh-nay-ted blud", "Oxygen-poor blood returning from the body tissues; dark red.", "خون کم‌اکسیژن", "an", "anat", []],
    ["depolarization", "dee-poh-lar-ih-ZAY-shun", "Electrical activation of heart muscle cells that leads to contraction.", "دپلاریزاسیون (فعال شدن الکتریکی)", "ep", "elec", []],
    ["diaphoresis", "dye-ah-foh-REE-sis", "Profuse sweating, a common sign during a heart attack.", "تعریق شدید", "ds", "sx", []],
    ["diastole", "dye-AS-toh-lee", "Relaxation phase of the heartbeat, when the chambers fill with blood.", "دیاستول (استراحت قلب)", "ep", "elec", []],
    ["diastolic pressure", "dye-ah-STOL-ik PRESH-ur", "Lowest arterial pressure, while the ventricles relax; the bottom number of a blood pressure reading.", "فشار دیاستولی (عدد پایین)", "ep", "elec", []],
    ["digital subtraction angiography", "DIJ-ih-tal sub-TRAK-shun an-jee-OG-rah-fee", "Angiography in which a computer removes bones and soft tissue from the image so only the vessels remain.", "آنژیوگرافی تفریقی دیجیتال", "tx", "dx", ["DSA"]],
    ["digoxin", "dih-JOK-sin", "Cardiotonic drug from digitalis that strengthens contraction and slows the heart rate.", "دیگوکسین", "tx", "rx", []],
    ["dissecting aneurysm", "dye-SEK-ting AN-yoo-rizm", "Aneurysm in which blood splits the layers of the artery wall, most often in the aorta.", "آنوریسم دیسکان (پارگی لایه‌های دیواره)", "ds", "dz", []],
    ["diuretic", "dye-yoo-RET-ik", "Drug that increases urine output, removing excess fluid and lowering blood pressure.", "مدر (ادرارآور)", "tx", "rx", []],
    ["Doppler ultrasonography", "DOP-ler ul-trah-soh-NOG-rah-fee", "Ultrasound that measures the speed and direction of blood flow in vessels.", "سونوگرافی داپلر", "tx", "dx", []],
    ["ductus arteriosus", "DUK-tus ar-teer-ee-OH-sus", "Fetal vessel connecting the pulmonary artery to the aorta; normally closes after birth.", "مجرای شریانی", "vc", "ves", []],
    ["dyspnea", "DISP-nee-ah", "Difficult or labored breathing; shortness of breath.", "تنگی نفس", "ds", "sx", ["SOB", "DOE"]],
    ["echocardiography", "ek-oh-kar-dee-OG-rah-fee", "Ultrasound imaging of the heart that shows the chambers, valves and pumping.", "اکوکاردیوگرافی (سونوگرافی قلب)", "tx", "dx", ["ECHO"]],
    ["edema", "eh-DEE-mah", "Swelling caused by excess fluid in the tissues, often of the legs in heart failure.", "ادم (ورم)", "ds", "sx", []],
    ["ejection fraction", "ee-JEK-shun FRAK-shun", "Percentage of blood in the left ventricle that is pumped out with each beat; normally about 55 to 70 percent.", "کسر جهشی (EF)", "ep", "elec", ["EF"]],
    ["electrocardiogram", "ee-lek-troh-KAR-dee-oh-gram", "Graphic record of the electrical activity of the heart.", "نوار قلب (الکتروکاردیوگرام)", "ep", "elec", ["ECG", "EKG"]],
    ["electrocardiography", "ee-lek-troh-kar-dee-OG-rah-fee", "Recording of the electrical activity of the heart with electrodes on the skin.", "نوار قلب‌نگاری (الکتروکاردیوگرافی)", "tx", "dx", ["ECG", "EKG"]],
    ["electrode", "ee-LEK-trohd", "Sensor placed on the skin to pick up the heart's electrical signals.", "الکترود", "ep", "elec", []],
    ["electrophysiologist", "ee-lek-troh-fiz-ee-OL-oh-jist", "Cardiologist who specializes in the electrical system of the heart and treats arrhythmias.", "متخصص الکتروفیزیولوژی قلب", "lx", "sci", ["EP"]],
    ["embolectomy", "em-boh-LEK-toh-mee", "Surgical removal of an embolus from a blood vessel.", "آمبولکتومی (برداشتن آمبول)", "tx", "proc", []],
    ["embolism", "EM-boh-lizm", "Blockage of a vessel by an embolus.", "آمبولی (انسداد رگ با آمبول)", "ds", "dz", []],
    ["embolus", "EM-boh-lus", "Mass (clot, fat, air or plaque) that travels in the bloodstream and lodges in a smaller vessel.", "آمبول (لخته سرگردان)", "ds", "dz", []],
    ["embolus / emboli", "EM-boh-lus / EM-boh-lye", "Singular and plural of a traveling clot or plug (-us becomes -i).", "آمبول / آمبول‌ها", "lx", "pl", []],
    ["endarterectomy", "end-ar-ter-EK-toh-mee", "Surgical removal of plaque together with the inner lining of an artery, often the carotid artery.", "اندآرترکتومی", "tx", "proc", []],
    ["endocarditis", "en-doh-kar-DYE-tis", "Inflammation of the endocardium and heart valves, usually caused by bacterial infection.", "اندوکاردیت (التهاب پوشش درونی قلب)", "ds", "dz", ["IE", "SBE"]],
    ["endocardium", "en-doh-KAR-dee-um", "Smooth inner lining of the heart chambers and valves.", "اندوکارد (پوشش درونی قلب)", "an", "anat", []],
    ["endothelium", "en-doh-THEE-lee-um", "Single layer of flat cells that lines the inside of blood vessels and the heart.", "آندوتلیوم (پوشش درونی رگ)", "vc", "ves", []],
    ["endovenous laser ablation", "en-doh-VEE-nus LAY-zer ab-LAY-shun", "Closing a varicose vein from inside with laser heat delivered through a catheter.", "ابلیشن لیزری واریس", "tx", "proc", ["EVLA"]],
    ["epicardium", "ep-ih-KAR-dee-um", "Outermost layer of the heart wall; the visceral layer of the serous pericardium.", "اپی‌کارد (لایه بیرونی قلب)", "an", "anat", []],
    ["extracorporeal circulation", "eks-trah-kor-POR-ee-al ser-kyoo-LAY-shun", "Routing blood through a heart-lung machine outside the body during open-heart surgery.", "گردش خون برون‌پیکری (پمپ قلب-ریه)", "tx", "proc", ["ECC"]],
    ["femoral artery", "FEM-or-al AR-ter-ee", "Main artery of the thigh; a common entry site for cardiac catheters.", "سرخرگ رانی", "vc", "ves", []],
    ["femoral vein", "FEM-or-al vane", "Large deep vein of the thigh.", "سیاهرگ رانی", "vc", "ves", []],
    ["fetal circulation", "FEE-tal ser-kyoo-LAY-shun", "Blood flow before birth, which bypasses the lungs through the foramen ovale and ductus arteriosus.", "گردش خون جنینی", "vc", "ves", []],
    ["fibrillation", "fib-rih-LAY-shun", "Rapid, uncoordinated quivering of heart muscle fibers instead of effective contraction.", "فیبریلاسیون (لرزش نامنظم)", "ds", "dz", []],
    ["fibrous pericardium", "FYE-brus pair-ih-KAR-dee-um", "Tough outer layer of the pericardium that anchors and protects the heart.", "پریکارد فیبری", "an", "anat", []],
    ["flutter", "FLUT-er", "Very rapid but regular contractions of the atria or ventricles.", "فلوتر (انقباض بسیار تند منظم)", "ds", "dz", []],
    ["foramen ovale", "for-AY-men oh-VAL-ee", "Opening in the fetal interatrial septum that normally closes soon after birth.", "سوراخ بیضی", "vc", "ves", []],
    ["gallop", "GAL-up", "Extra third or fourth heart sound that makes the rhythm sound like a galloping horse; often a sign of heart failure.", "ریتم گالوپ (صدای سوم یا چهارم)", "ds", "sx", ["S3", "S4"]],
    ["heart", "hart", "Hollow, muscular, cone-shaped organ in the mediastinum that pumps blood through the body.", "قلب", "an", "anat", []],
    ["heart block", "hart blok", "Delay or interruption of impulses through the AV node; in complete (third-degree) block no impulses reach the ventricles.", "بلوک قلبی", "ds", "dz", ["AV block", "CHB"]],
    ["heart failure", "hart FAYL-yur", "Condition in which the heart cannot pump enough blood to meet the body's needs, causing breathlessness and swelling.", "نارسایی قلب", "ds", "dz", ["HF"]],
    ["heart rate", "hart rayt", "Number of heartbeats per minute; normally about 60 to 100 at rest.", "ضربان قلب (تعداد در دقیقه)", "ep", "elec", ["HR", "bpm"]],
    ["heart sounds", "hart sowndz", "Sounds made by closing valves: the first sound (lubb, S1) from the AV valves and the second (dupp, S2) from the semilunar valves.", "صداهای قلب", "ep", "elec", ["S1", "S2"]],
    ["heart transplant", "hart TRANS-plant", "Replacement of a failing heart with a donor heart.", "پیوند قلب", "tx", "proc", []],
    ["hemorrhoids", "HEM-oh-roydz", "Varicose veins of the anal region.", "بواسیر (هموروئید)", "ds", "dz", []],
    ["heparin", "HEP-ah-rin", "Fast-acting anticoagulant given by injection or into a vein.", "هپارین", "tx", "rx", []],
    ["high-density lipoprotein", "hye DEN-sih-tee lip-oh-PROH-teen", "Lipoprotein that carries cholesterol away from the arteries to the liver; the good cholesterol.", "لیپوپروتئین پرچگال (کلسترول خوب)", "tx", "dx", ["HDL"]],
    ["Holter monitor", "HOHL-ter MON-ih-ter", "Portable ECG recorder worn for 24 to 48 hours during normal activities to catch intermittent arrhythmias.", "هولتر (نوار قلب ۲۴ ساعته)", "tx", "dx", []],
    ["hypercholesterolemia", "hye-per-koh-les-ter-ol-EE-mee-ah", "Excessive cholesterol in the blood.", "کلسترول خون بالا", "ds", "dz", []],
    ["hyperlipidemia", "hye-per-lip-ih-DEE-mee-ah", "Abnormally high levels of fats (lipids) in the blood; a major risk factor for atherosclerosis.", "چربی خون بالا", "ds", "dz", []],
    ["hypertension", "hye-per-TEN-shun", "Consistently high blood pressure, 130/80 mmHg or above, that damages vessels and the heart.", "پرفشاری خون", "ds", "dz", ["HTN"]],
    ["hypertrophy", "hye-PER-troh-fee", "Enlargement of an organ or tissue because its cells grow larger, such as thickening of the left ventricle wall.", "هیپرتروفی (ضخیم شدن)", "ds", "dz", ["LVH"]],
    ["hypotension", "hye-poh-TEN-shun", "Abnormally low blood pressure.", "افت فشار خون", "ds", "dz", []],
    ["implantable cardioverter-defibrillator", "im-PLANT-ah-bul kar-dee-oh-VER-ter dee-FIB-rih-lay-ter", "Implanted device that detects dangerous rhythms and delivers a shock to restore normal rhythm.", "دفیبریلاتور قابل کاشت", "tx", "proc", ["ICD", "AICD"]],
    ["infarct", "IN-farkt", "Area of dead tissue caused by loss of blood supply.", "ناحیه انفارکتوس (بافت مرده)", "ds", "dz", []],
    ["inferior vena cava", "in-FEER-ee-or VEE-nah KAY-vah", "Large vein that returns deoxygenated blood from the lower body to the right atrium.", "بزرگ‌سیاهرگ زیرین", "an", "anat", ["IVC"]],
    ["interatrial septum", "in-ter-AY-tree-al SEP-tum", "Wall that separates the right and left atria.", "دیواره بین‌دهلیزی", "an", "anat", []],
    ["interventricular septum", "in-ter-ven-TRIK-yoo-lar SEP-tum", "Thick muscular wall that separates the right and left ventricles.", "دیواره بین‌بطنی", "an", "anat", []],
    ["intra-aortic balloon pump", "in-trah-ay-OR-tik bah-LOON pump", "Balloon placed in the aorta that inflates and deflates with the heartbeat to support a failing heart.", "پمپ بالونی داخل آئورتی", "tx", "proc", ["IABP"]],
    ["intravascular", "in-trah-VAS-kyoo-lar", "Within a blood vessel.", "درون‌رگی", "lx", "adj", []],
    ["intravenous", "in-trah-VEE-nus", "Within or into a vein.", "درون‌سیاهرگی (وریدی)", "lx", "adj", ["IV"]],
    ["ischemia", "is-KEE-mee-ah", "Deficient blood supply to a tissue because of obstruction of blood flow.", "ایسکمی (کم‌خونی موضعی)", "ds", "dz", []],
    ["jugular vein", "JUG-yoo-lar vane", "Large vein in the neck that drains blood from the head.", "سیاهرگ ژوگولار (گردنی)", "vc", "ves", []],
    ["Korotkoff sounds", "koh-ROT-kof sowndz", "Tapping sounds heard with a stethoscope over the brachial artery while the cuff deflates; the first and last sounds mark systolic and diastolic pressure.", "صداهای کورتکوف", "ep", "elec", []],
    ["left anterior descending artery", "left an-TEER-ee-or dee-SEN-ding AR-ter-ee", "Branch of the left coronary artery that runs down the front of the heart; its blockage causes a large heart attack.", "سرخرگ نزولی قدامی چپ", "an", "anat", ["LAD"]],
    ["left atrium", "left AY-tree-um", "Upper left chamber that receives oxygenated blood from the lungs through the pulmonary veins.", "دهلیز چپ", "an", "anat", ["LA"]],
    ["left coronary artery", "left KOR-oh-nair-ee AR-ter-ee", "Main coronary artery of the left side; divides into the left anterior descending and circumflex arteries.", "سرخرگ کرونر چپ", "an", "anat", ["LCA"]],
    ["left ventricle", "left VEN-trih-kul", "Lower left chamber with the thickest wall; pumps oxygenated blood to the body through the aorta.", "بطن چپ", "an", "anat", ["LV"]],
    ["ligation and stripping", "lye-GAY-shun and STRIP-ing", "Tying off a varicose vein and pulling it out through small incisions.", "بستن و کشیدن واریس", "tx", "proc", []],
    ["lipid profile", "LIP-id PROH-file", "Blood test that measures total cholesterol, HDL, LDL and triglycerides.", "آزمایش چربی خون (پروفایل لیپید)", "tx", "dx", []],
    ["low-density lipoprotein", "loh DEN-sih-tee lip-oh-PROH-teen", "Lipoprotein that deposits cholesterol in the artery walls; the bad cholesterol.", "لیپوپروتئین کم‌چگال (کلسترول بد)", "tx", "dx", ["LDL"]],
    ["lumen", "LOO-men", "Hollow space inside a blood vessel through which blood flows.", "مجرای درون رگ", "vc", "ves", []],
    ["lymph", "limf", "Clear fluid collected from the tissues and returned to the blood through lymphatic vessels.", "لنف", "vc", "ves", []],
    ["lymph node", "limf nohd", "Small bean-shaped structure along lymphatic vessels that filters lymph and holds immune cells.", "گره لنفاوی", "vc", "ves", []],
    ["lymphatic vessel", "lim-FAT-ik VES-el", "Thin-walled vessel that carries lymph from the tissues toward the veins near the heart.", "رگ لنفاوی", "vc", "ves", []],
    ["mediastinum", "mee-dee-ah-STYE-num", "Space in the middle of the chest between the lungs, from sternum to vertebral column, that contains the heart and great vessels.", "میان‌سینه (مدیاستن)", "an", "anat", []],
    ["mitral valve", "MYE-tral valv", "Atrioventricular valve with two cusps between the left atrium and left ventricle; also called bicuspid valve.", "دریچه میترال (دولتی)", "an", "anat", []],
    ["mitral valve prolapse", "MYE-tral valv PROH-laps", "Bulging of the mitral valve cusps back into the left atrium during contraction, sometimes with backflow.", "افتادگی دریچه میترال", "ds", "dz", ["MVP"]],
    ["MUGA scan", "MUG-ah skan", "Nuclear scan that tags red blood cells with a tracer to measure how well the ventricles pump (ejection fraction).", "اسکن موگا", "tx", "dx", ["MUGA"]],
    ["murmur", "MUR-mur", "Abnormal swishing heart sound caused by turbulent blood flow, often through a faulty valve.", "سوفل (صدای اضافی قلب)", "ds", "sx", []],
    ["myocardial infarction", "mye-oh-KAR-dee-al in-FARK-shun", "Death of part of the heart muscle because a coronary artery is blocked; also called heart attack.", "سکته قلبی (انفارکتوس میوکارد)", "ds", "dz", ["MI", "AMI"]],
    ["myocarditis", "mye-oh-kar-DYE-tis", "Inflammation of the heart muscle, often caused by a virus.", "میوکاردیت (التهاب ماهیچه قلب)", "ds", "dz", []],
    ["myocardium", "mye-oh-KAR-dee-um", "Thick middle layer of the heart wall made of cardiac muscle; contracts to pump blood.", "میوکارد (ماهیچه قلب)", "an", "anat", []],
    ["necrosis", "neh-KROH-sis", "Death of cells or tissue.", "نکروز (مرگ بافت)", "ds", "dz", []],
    ["nitroglycerin", "nye-troh-GLIS-er-in", "Nitrate placed under the tongue to widen vessels and relieve angina quickly.", "نیتروگلیسیرین", "tx", "rx", ["NTG"]],
    ["normal sinus rhythm", "NOR-mal SYE-nus RITH-um", "Normal heart rhythm started by the SA node at about 60 to 100 beats per minute.", "ریتم سینوسی طبیعی", "ep", "elec", ["NSR"]],
    ["nuclear stress test", "NOO-klee-ar stres test", "Stress test with a radioactive tracer (such as thallium) that shows areas of poor blood flow to the heart muscle.", "اسکن هسته‌ای قلب (تالیوم)", "tx", "dx", []],
    ["occlusion", "oh-KLOO-zhun", "Closure or blockage of a vessel or opening.", "انسداد", "ds", "dz", []],
    ["orthostatic hypotension", "or-thoh-STAT-ik hye-poh-TEN-shun", "Sudden drop in blood pressure on standing up, causing dizziness or fainting.", "افت فشار وضعیتی", "ds", "dz", []],
    ["oxygenated blood", "OK-sih-jeh-nay-ted blud", "Oxygen-rich blood returning from the lungs; bright red.", "خون اکسیژن‌دار", "an", "anat", []],
    ["P wave", "pee wayv", "First wave of the ECG; shows depolarization (contraction) of the atria.", "موج P", "ep", "elec", []],
    ["pacemaker", "PAYS-may-ker", "Something that sets the rhythm of the heart: the SA node naturally, or an implanted electronic device.", "ضربان‌ساز (پیس‌میکر)", "ep", "elec", []],
    ["palpitation", "pal-pih-TAY-shun", "Feeling of a pounding, fluttering or racing heartbeat.", "تپش قلب (احساس ضربان)", "ds", "sx", []],
    ["papillary muscle", "PAP-ih-lair-ee MUS-el", "Cone-shaped muscle on the ventricle wall that tightens the chordae tendineae during contraction.", "عضله پاپیلاری", "an", "anat", []],
    ["parietal pericardium", "pah-RYE-eh-tal pair-ih-KAR-dee-um", "Serous layer that lines the inner surface of the fibrous pericardium.", "پریکارد جداری", "an", "anat", []],
    ["patent ductus arteriosus", "PAY-tent DUK-tus ar-teer-ee-OH-sus", "Failure of the ductus arteriosus to close after birth, leaving an abnormal opening between the pulmonary artery and the aorta.", "باز ماندن مجرای شریانی", "ds", "dz", ["PDA"]],
    ["pediatric cardiologist", "pee-dee-AT-rik kar-dee-OL-oh-jist", "Cardiologist who treats heart diseases of infants, children and adolescents, including congenital defects.", "متخصص قلب کودکان", "lx", "sci", []],
    ["perfusion", "per-FYOO-zhun", "Passage of blood through the vessels of a tissue or organ.", "خون‌رسانی (پرفیوژن)", "vc", "ves", []],
    ["perfusionist", "per-FYOO-zhun-ist", "Professional who runs the heart-lung machine that keeps blood circulating during open-heart surgery.", "پرفیوژنیست (اپراتور دستگاه قلب-ریه)", "lx", "sci", []],
    ["pericardial cavity", "pair-ih-KAR-dee-al KAV-ih-tee", "Narrow space between the parietal and visceral pericardium that contains lubricating pericardial fluid.", "حفره پریکارد", "an", "anat", []],
    ["pericardial fluid", "pair-ih-KAR-dee-al FLOO-id", "Small amount of serous fluid in the pericardial cavity that reduces friction as the heart beats.", "مایع پریکارد", "an", "anat", []],
    ["pericardiocentesis", "pair-ih-kar-dee-oh-sen-TEE-sis", "Needle puncture of the pericardial sac to remove fluid.", "پریکاردیوسنتز (کشیدن مایع پریکارد)", "tx", "proc", []],
    ["pericarditis", "pair-ih-kar-DYE-tis", "Inflammation of the pericardium, causing sharp chest pain and a friction rub.", "پریکاردیت (التهاب پریکارد)", "ds", "dz", []],
    ["pericardium", "pair-ih-KAR-dee-um", "Double-layered membranous sac that surrounds and protects the heart.", "پریکارد (کیسه دور قلب)", "an", "anat", []],
    ["peripheral artery disease", "peh-RIF-er-al AR-ter-ee dih-ZEEZ", "Narrowing of the arteries of the legs or arms by atherosclerosis, causing claudication.", "بیماری سرخرگ‌های محیطی", "ds", "dz", ["PAD", "PVD"]],
    ["phlebitis", "fleh-BYE-tis", "Inflammation of a vein.", "فلبیت (التهاب سیاهرگ)", "ds", "dz", []],
    ["phlebotomy", "fleh-BOT-oh-mee", "Incision or puncture of a vein to remove blood.", "خون‌گیری (فلبوتومی)", "tx", "dx", []],
    ["plaque", "plak", "Buildup of fat, cholesterol, calcium and cells in the wall of an artery.", "پلاک", "ds", "dz", []],
    ["popliteal artery", "pop-LIT-ee-al AR-ter-ee", "Artery behind the knee.", "سرخرگ رکبی (پشت زانو)", "vc", "ves", []],
    ["prehypertension", "pree-hye-per-TEN-shun", "Blood pressure slightly above normal (about 120 to 139 systolic) that may progress to hypertension.", "پیش‌پرفشاری خون", "ds", "dz", []],
    ["premature ventricular contraction", "pree-mah-CHOOR ven-TRIK-yoo-lar kon-TRAK-shun", "Extra heartbeat that starts in a ventricle before the normal beat; felt as a skipped beat.", "انقباض زودرس بطنی", "ds", "dz", ["PVC"]],
    ["pulmonary artery", "PUL-moh-nair-ee AR-ter-ee", "Artery that carries deoxygenated blood from the right ventricle to a lung; the only artery carrying oxygen-poor blood after birth.", "سرخرگ ریوی", "an", "anat", []],
    ["pulmonary circulation", "PUL-moh-nair-ee ser-kyoo-LAY-shun", "Flow of blood from the right ventricle to the lungs for oxygen and back to the left atrium.", "گردش خون ریوی (کوچک)", "vc", "ves", []],
    ["pulmonary embolism", "PUL-moh-nair-ee EM-boh-lizm", "Blockage of a pulmonary artery by an embolus, usually from a deep vein thrombosis.", "آمبولی ریه", "ds", "dz", ["PE"]],
    ["pulmonary trunk", "PUL-moh-nair-ee trunk", "Large vessel leaving the right ventricle that divides into the right and left pulmonary arteries.", "تنه ریوی", "an", "anat", []],
    ["pulmonary valve", "PUL-moh-nair-ee valv", "Semilunar valve between the right ventricle and the pulmonary artery; also called pulmonic valve.", "دریچه ریوی (پولمونر)", "an", "anat", []],
    ["pulmonary vein", "PUL-moh-nair-ee vane", "One of four veins that bring oxygenated blood from the lungs to the left atrium; the only veins carrying oxygen-rich blood.", "سیاهرگ ریوی", "an", "anat", []],
    ["pulse", "puls", "Rhythmic expansion of an artery with each heartbeat, felt where an artery lies near the surface.", "نبض", "ep", "elec", []],
    ["pulse pressure", "puls PRESH-ur", "Difference between the systolic and diastolic pressures, normally about 40 mmHg.", "فشار نبض", "ep", "elec", []],
    ["Purkinje fibers", "per-KIN-jee FYE-berz", "Fibers that spread through the ventricle walls and make the ventricles contract.", "رشته‌های پورکنژ", "ep", "elec", []],
    ["QRS complex", "kyoo-ar-ess KOM-pleks", "Sharp spikes on the ECG that show depolarization of the ventricles.", "کمپلکس QRS", "ep", "elec", []],
    ["radial artery", "RAY-dee-al AR-ter-ee", "Artery on the thumb side of the forearm where the pulse is commonly felt.", "سرخرگ رادیال", "vc", "ves", []],
    ["radial pulse", "RAY-dee-al puls", "Pulse felt over the radial artery at the wrist; the most common place to count the pulse.", "نبض رادیال (مچ دست)", "ep", "elec", []],
    ["Raynaud phenomenon", "ray-NOH feh-NOM-eh-non", "Spasm of the small arteries of the fingers and toes after cold or stress, making them white then blue.", "پدیده رینود", "ds", "dz", []],
    ["regurgitation", "ree-gur-jih-TAY-shun", "Backflow of blood through a valve that does not close tightly; also called insufficiency.", "نارسایی دریچه (پس‌زدن خون)", "ds", "dz", ["MR"]],
    ["repolarization", "ree-poh-lar-ih-ZAY-shun", "Electrical recovery of heart muscle cells after contraction, preparing for the next beat.", "رپلاریزاسیون (بازگشت الکتریکی)", "ep", "elec", []],
    ["rheumatic heart disease", "roo-MAT-ik hart dih-ZEEZ", "Damage to the heart valves after rheumatic fever from an untreated streptococcal throat infection.", "بیماری روماتیسمی قلب", "ds", "dz", ["RHD"]],
    ["right atrium", "rite AY-tree-um", "Upper right chamber that receives deoxygenated blood from the body through the venae cavae.", "دهلیز راست", "an", "anat", ["RA"]],
    ["right coronary artery", "rite KOR-oh-nair-ee AR-ter-ee", "Coronary artery that supplies the right side of the heart and usually the SA and AV nodes.", "سرخرگ کرونر راست", "an", "anat", ["RCA"]],
    ["right ventricle", "rite VEN-trih-kul", "Lower right chamber that pumps deoxygenated blood to the lungs through the pulmonary artery.", "بطن راست", "an", "anat", ["RV"]],
    ["saphenous vein", "sah-FEE-nus vane", "Long superficial vein of the leg; often used as a graft in bypass surgery.", "سیاهرگ صافن", "vc", "ves", []],
    ["sclerotherapy", "sklair-oh-THAIR-ah-pee", "Injection of a chemical into a varicose vein to make it scar and close.", "اسکلروتراپی (تزریق برای بستن واریس)", "tx", "proc", []],
    ["semilunar valve", "sem-ee-LOO-nar valv", "Half-moon-shaped valve at the exit of a ventricle: the pulmonary valve and the aortic valve.", "دریچه سینی (هلالی)", "an", "anat", []],
    ["septal", "SEP-tal", "Pertaining to a septum (dividing wall).", "دیواره‌ای (سپتال)", "lx", "adj", []],
    ["septal defect", "SEP-tal DEE-fekt", "Congenital hole in the septum between the atria or between the ventricles.", "نقص دیواره (سوراخ قلب)", "ds", "dz", ["ASD", "VSD"]],
    ["septum", "SEP-tum", "Wall that divides two cavities; in the heart it separates the right and left sides.", "دیواره (سپتوم)", "an", "anat", []],
    ["septum / septa", "SEP-tum / SEP-tah", "Singular and plural of a dividing wall (-um becomes -a).", "دیواره / دیواره‌ها", "lx", "pl", []],
    ["sinoatrial node", "sye-noh-AY-tree-al nohd", "Natural pacemaker in the wall of the right atrium that starts each heartbeat.", "گره سینوسی-دهلیزی (ضربان‌ساز طبیعی)", "ep", "elec", ["SA node"]],
    ["sphygmomanometer", "sfig-moh-mah-NOM-eh-ter", "Instrument with an inflatable cuff used to measure blood pressure.", "فشارسنج", "ep", "elec", []],
    ["ST segment", "ess-tee SEG-ment", "Flat part of the ECG between the QRS complex and the T wave; raised or lowered in heart ischemia or infarction.", "قطعه ST", "ep", "elec", []],
    ["statin", "STAT-in", "Drug that lowers cholesterol by blocking its production in the liver.", "استاتین (پایین‌آورنده کلسترول)", "tx", "rx", []],
    ["stenosis", "steh-NOH-sis", "Abnormal narrowing of a vessel, valve or opening.", "تنگی", "ds", "dz", []],
    ["stenosis / stenoses", "steh-NOH-sis / steh-NOH-seez", "Singular and plural of a narrowing (-is becomes -es).", "تنگی / تنگی‌ها", "lx", "pl", []],
    ["stent", "stent", "Small mesh tube placed in an artery to hold it open after angioplasty.", "استنت (فنر رگ)", "tx", "proc", []],
    ["stethoscope", "STETH-oh-skohp", "Instrument used to listen to sounds within the body, such as heart and lung sounds.", "گوشی پزشکی (استتوسکوپ)", "ep", "elec", []],
    ["stress test", "stres test", "ECG recorded while the patient exercises on a treadmill to see how the heart responds to effort.", "تست ورزش", "tx", "dx", []],
    ["stroke", "strohk", "Damage to part of the brain caused by blockage or rupture of an artery; also called cerebrovascular accident.", "سکته مغزی", "ds", "dz", ["CVA"]],
    ["stroke volume", "strohk VOL-yoom", "Volume of blood ejected by a ventricle with each beat.", "حجم ضربه‌ای", "ep", "elec", ["SV"]],
    ["subclavian artery", "sub-KLAY-vee-an AR-ter-ee", "Artery beneath the clavicle that supplies the arm.", "سرخرگ زیرترقوه‌ای", "vc", "ves", []],
    ["superior vena cava", "soo-PEER-ee-or VEE-nah KAY-vah", "Large vein that returns deoxygenated blood from the head, neck, arms and chest to the right atrium.", "بزرگ‌سیاهرگ زبرین", "an", "anat", ["SVC"]],
    ["syncope", "SIN-koh-pee", "Brief loss of consciousness caused by too little blood flow to the brain; fainting.", "سنکوپ (غش)", "ds", "sx", []],
    ["systemic circulation", "sis-TEM-ik ser-kyoo-LAY-shun", "Flow of oxygenated blood from the left ventricle to all body tissues and back to the right atrium.", "گردش خون عمومی (بزرگ)", "vc", "ves", []],
    ["systole", "SIS-toh-lee", "Contraction phase of the heartbeat, when the chambers squeeze blood out.", "سیستول (انقباض قلب)", "ep", "elec", []],
    ["systolic pressure", "sis-TOL-ik PRESH-ur", "Highest arterial pressure, during contraction of the ventricles; the top number of a blood pressure reading.", "فشار سیستولی (عدد بالا)", "ep", "elec", []],
    ["T wave", "tee wayv", "ECG wave that shows repolarization (recovery) of the ventricles.", "موج T", "ep", "elec", []],
    ["tachycardia", "tak-ee-KAR-dee-ah", "Fast heart rate, more than 100 beats per minute.", "تاکی‌کاردی (ضربان تند)", "ep", "elec", []],
    ["tetralogy of Fallot", "teh-TRAL-oh-jee uv fah-LOH", "Congenital defect with four parts: ventricular septal defect, pulmonary stenosis, overriding aorta and right ventricular hypertrophy; causes cyanosis.", "تترالوژی فالو", "ds", "dz", ["TOF"]],
    ["thoracic duct", "thoh-RAS-ik dukt", "Largest lymphatic vessel; empties lymph into the left subclavian vein.", "مجرای توراسیک (لنفی سینه‌ای)", "vc", "ves", []],
    ["thrombolysis", "throm-BOL-ih-sis", "Dissolving a blood clot, usually with clot-busting drugs.", "ترومبولیز (حل کردن لخته)", "tx", "proc", []],
    ["thrombolytic agent", "throm-boh-LIT-ik AY-jent", "Drug that dissolves a clot already formed, such as tissue plasminogen activator.", "داروی حل‌کننده لخته (ترومبولیتیک)", "tx", "rx", ["tPA"]],
    ["thrombophlebitis", "throm-boh-fleh-BYE-tis", "Inflammation of a vein together with clot formation.", "ترومبوفلبیت", "ds", "dz", []],
    ["thrombosis", "throm-BOH-sis", "Formation or presence of a blood clot inside a vessel.", "ترومبوز (لخته شدن در رگ)", "ds", "dz", []],
    ["thrombus", "THROM-bus", "Blood clot that forms and stays attached inside a vessel or the heart.", "لخته (ترومبوس)", "ds", "dz", []],
    ["thrombus / thrombi", "THROM-bus / THROM-bye", "Singular and plural of a stationary blood clot (-us becomes -i).", "لخته / لخته‌ها", "lx", "pl", []],
    ["transesophageal echocardiography", "trans-eh-sof-ah-JEE-al ek-oh-kar-dee-OG-rah-fee", "Echocardiography with the ultrasound probe passed down the esophagus for a clearer view of the heart.", "اکوی مری", "tx", "dx", ["TEE"]],
    ["transient ischemic attack", "TRAN-zee-ent is-KEE-mik ah-TAK", "Brief interruption of blood supply to part of the brain without lasting damage; a warning sign of stroke.", "حمله ایسکمیک گذرا", "ds", "dz", ["TIA"]],
    ["tricuspid valve", "try-KUS-pid valv", "Atrioventricular valve with three cusps between the right atrium and right ventricle.", "دریچه سه‌لتی", "an", "anat", []],
    ["triglycerides", "try-GLIS-er-eyedz", "Main form of fat stored in the body and carried in the blood.", "تری‌گلیسیرید", "tx", "dx", []],
    ["troponin", "troh-POH-nin", "Heart muscle protein released into the blood after myocardial damage; a sensitive marker of heart attack.", "تروپونین", "tx", "dx", []],
    ["tunica adventitia", "TOO-nih-kah ad-ven-TISH-ee-ah", "Outer connective tissue layer of a blood vessel wall; also called tunica externa.", "لایه بیرونی رگ (ادوانتیس)", "vc", "ves", []],
    ["tunica intima", "TOO-nih-kah IN-tih-mah", "Innermost layer of a blood vessel wall, made of endothelium.", "لایه درونی رگ (اینتیما)", "vc", "ves", []],
    ["tunica media", "TOO-nih-kah MEE-dee-ah", "Middle layer of a blood vessel wall, made of smooth muscle and elastic fibers; thickest in arteries.", "لایه میانی رگ (مدیا)", "vc", "ves", []],
    ["valve", "valv", "Structure that opens and closes to let blood flow in only one direction.", "دریچه", "an", "anat", []],
    ["valve replacement", "valv ree-PLAYS-ment", "Surgery that replaces a diseased heart valve with a mechanical or tissue valve.", "تعویض دریچه", "tx", "proc", ["MVR", "AVR"]],
    ["valvular", "VAL-vyoo-lar", "Pertaining to a valve.", "دریچه‌ای", "lx", "adj", []],
    ["valvular stenosis", "VAL-vyoo-lar steh-NOH-sis", "Narrowing and stiffening of a heart valve that obstructs forward blood flow, such as aortic stenosis.", "تنگی دریچه", "ds", "dz", ["AS"]],
    ["valvuloplasty", "VAL-vyoo-loh-plas-tee", "Surgical or balloon repair of a heart valve.", "والوولوپلاستی (ترمیم دریچه)", "tx", "proc", []],
    ["varicose veins", "VAIR-ih-kohs vaynz", "Swollen, twisted superficial veins, usually in the legs, caused by faulty venous valves.", "واریس (سیاهرگ‌های گشاد و پیچ‌خورده)", "ds", "dz", []],
    ["varix / varices", "VAIR-iks / VAIR-ih-seez", "Singular and plural of a dilated, twisted vein (-ix becomes -ices).", "واریس / واریس‌ها", "lx", "pl", []],
    ["vascular", "VAS-kyoo-lar", "Pertaining to blood vessels.", "عروقی (رگی)", "lx", "adj", []],
    ["vasculitis", "vas-kyoo-LYE-tis", "Inflammation of blood vessels.", "واسکولیت (التهاب رگ)", "ds", "dz", []],
    ["vasoconstriction", "vay-zoh-kon-STRIK-shun", "Narrowing of the lumen of a blood vessel, which raises blood pressure.", "تنگ شدن رگ", "vc", "ves", []],
    ["vasodilation", "vay-zoh-dye-LAY-shun", "Widening of the lumen of a blood vessel, which lowers blood pressure.", "گشاد شدن رگ", "vc", "ves", []],
    ["vasodilator", "vay-zoh-DYE-lay-ter", "Drug that widens blood vessels.", "گشادکننده رگ", "tx", "rx", []],
    ["vasopressor", "vay-zoh-PRES-er", "Drug that narrows blood vessels to raise low blood pressure.", "وازوپرسور (تنگ‌کننده رگ)", "tx", "rx", []],
    ["vein", "vane", "Thin-walled blood vessel with valves that carries blood toward the heart.", "سیاهرگ (ورید)", "vc", "ves", []],
    ["vena cava / venae cavae", "VEE-nah KAY-vah / VEE-nee KAY-vee", "Singular and plural of the largest vein of the body (-a becomes -ae).", "بزرگ‌سیاهرگ / بزرگ‌سیاهرگ‌ها", "lx", "pl", []],
    ["venipuncture", "VEN-ih-punk-chur", "Puncture of a vein with a needle to draw blood or give fluids.", "رگ‌گیری (ونی‌پانکچر)", "tx", "dx", []],
    ["venography", "vee-NOG-rah-fee", "X-ray imaging of veins after injecting contrast dye; also called phlebography.", "ونوگرافی (سیاهرگ‌نگاری)", "tx", "dx", []],
    ["venous", "VEE-nus", "Pertaining to a vein.", "سیاهرگی (وریدی)", "lx", "adj", []],
    ["venous valve", "VEE-nus valv", "Flap inside a vein that keeps blood moving toward the heart and prevents backflow.", "دریچه سیاهرگی", "vc", "ves", []],
    ["ventricle", "VEN-trih-kul", "One of the two lower chambers of the heart that pump blood out of the heart.", "بطن", "an", "anat", []],
    ["ventricular", "ven-TRIK-yoo-lar", "Pertaining to a ventricle.", "بطنی", "lx", "adj", []],
    ["ventricular assist device", "ven-TRIK-yoo-lar ah-SIST dee-VYSE", "Mechanical pump that helps a weak ventricle pump blood.", "دستگاه کمک‌بطنی", "tx", "proc", ["VAD", "LVAD"]],
    ["ventricular fibrillation", "ven-TRIK-yoo-lar fib-rih-LAY-shun", "Quivering of the ventricles so that no blood is pumped; causes cardiac arrest within seconds.", "فیبریلاسیون بطنی", "ds", "dz", ["VF", "V-fib"]],
    ["venule", "VEN-yool", "Small vein that collects blood from capillaries.", "سیاهرگ کوچک (ونول)", "vc", "ves", []],
    ["visceral pericardium", "VIS-er-al pair-ih-KAR-dee-um", "Serous layer that covers the surface of the heart; also called epicardium.", "پریکارد احشایی", "an", "anat", []],
    ["warfarin", "WAR-far-in", "Oral anticoagulant that requires regular blood tests (PT/INR).", "وارفارین", "tx", "rx", ["INR"]],
    ["Wolff-Parkinson-White syndrome", "wulf PAR-kin-sun wite SIN-drohm", "Congenital extra electrical pathway between the atria and ventricles that causes episodes of rapid heartbeat.", "سندرم ولف-پارکینسون-وایت", "ds", "dz", ["WPW"]]
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
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['bi-', ['bi'], 'two', 'دو', 'an'],
    ['brady-', ['brady'], 'slow', 'کند', 'ep'],
    ['de-', ['de'], 'removal, reversal', 'برداشتن، وارونه', 'ep'],
    ['dys-', ['dys'], 'bad, painful, difficult', 'بد، دشوار', '*'],
    ['endo-', ['endo', 'end'], 'within, inner', 'درون', 'an'],
    ['epi-', ['epi'], 'upon, above', 'روی، بالای', 'an'],
    ['extra-', ['extra'], 'outside', 'بیرون از', 'tx'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', 'ds'],
    ['hypo-', ['hypo'], 'below, deficient', 'کم، زیر', 'ds'],
    ['inter-', ['inter'], 'between', 'میان، بین', 'an'],
    ['intra-', ['intra'], 'within, inside', 'درون', 'vc'],
    ['micro-', ['micro'], 'small', 'کوچک', 'vc'],
    ['normo-', ['normo'], 'normal', 'طبیعی', 'ep'],
    ['pan-', ['pan'], 'all', 'همه', 'ds'],
    ['per-', ['per'], 'through', 'از میانِ', 'tx'],
    ['peri-', ['peri'], 'around', 'پیرامون', 'an'],
    ['post-', ['post'], 'after', 'پس از', '*'],
    ['pre-', ['pre'], 'before', 'پیش از', 'ds'],
    ['re-', ['re'], 'again, back', 'دوباره، بازگشت', 'ep'],
    ['semi-', ['semi'], 'half', 'نیم', 'an'],
    ['sub-', ['sub'], 'under, below', 'زیر', 'vc'],
    ['tachy-', ['tachy'], 'fast, rapid', 'تند', 'ep'],
    ['trans-', ['trans'], 'across, through', 'از راهِ، عبور', 'tx'],
    ['tri-', ['tri'], 'three', 'سه', 'an'],
    ['ultra-', ['ultra'], 'beyond, excess', 'فرا', 'tx'],
    // ریشه‌های قلب
    ['cardi/o', ['cardi', 'card'], 'heart', 'قلب', 'lx'],
    ['coron/o', ['coron'], 'heart; crown', 'قلب؛ تاج', 'an'],
    ['my/o', ['my'], 'muscle', 'ماهیچه', 'an'],
    ['atri/o', ['atri'], 'atrium', 'دهلیز', 'an'],
    ['ventricul/o', ['ventricul'], 'ventricle', 'بطن', 'an'],
    ['sept/o', ['sept'], 'septum, dividing wall', 'دیواره', 'an'],
    ['valv/o, valvul/o', ['valvul', 'valv'], 'valve', 'دریچه', 'an'],
    ['aort/o', ['aort'], 'aorta', 'آئورت', 'an'],
    ['pulmon/o', ['pulmon'], 'lung', 'ریه', 'an'],
    ['pneum/o, pneumon/o', ['pneumon', 'pneum'], 'lung, air', 'ریه، هوا', 'an'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'vc'],
    ['pector/o', ['pector'], 'chest', 'سینه', 'ds'],
    ['steth/o', ['steth'], 'chest', 'سینه', 'ep'],
    ['sphygm/o', ['sphygm'], 'pulse', 'نبض', 'ep'],
    ['man/o', ['man'], 'pressure', 'فشار', 'ep'],
    ['electr/o', ['electr'], 'electricity', 'برق، الکتریسیته', 'ep'],
    ['rrhythm/o', ['rrhythm', 'rhythm'], 'rhythm', 'ریتم، نظم', 'ep'],
    ['sin/o', ['sin'], 'sinus, cavity', 'سینوس، حفره', 'ep'],
    ['systol/o', ['systol'], 'contraction', 'انقباض', 'ep'],
    ['diastol/o', ['diastol'], 'relaxation, filling', 'استراحت، پر شدن', 'ep'],
    ['ox/o, ox/i', ['ox'], 'oxygen', 'اکسیژن', 'an'],
    // ریشه‌های رگ
    ['angi/o', ['angi'], 'vessel', 'رگ', 'vc'],
    ['vas/o', ['vas'], 'vessel; duct', 'رگ؛ مجرا', 'vc'],
    ['vascul/o', ['vascul'], 'vessel', 'رگ', 'vc'],
    ['arteri/o, arter/o', ['arteri', 'arter'], 'artery', 'سرخرگ', 'vc'],
    ['arteriol/o', ['arteriol'], 'arteriole, small artery', 'سرخرگ کوچک', 'vc'],
    ['ven/o', ['ven'], 'vein', 'سیاهرگ', 'vc'],
    ['phleb/o', ['phleb'], 'vein', 'سیاهرگ', 'vc'],
    ['venul/o', ['venul'], 'venule, small vein', 'سیاهرگ کوچک', 'vc'],
    ['capill/o', ['capill'], 'hair-like; capillary', 'مویی؛ مویرگ', 'vc'],
    ['lymph/o', ['lymph'], 'lymph', 'لنف', 'vc'],
    ['lymphangi/o', ['lymphangi'], 'lymph vessel', 'رگ لنفاوی', 'vc'],
    ['cerebr/o', ['cerebr'], 'cerebrum, brain', 'مغز', 'ds'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', '*'],
    // بیماری‌ها
    ['ather/o', ['ather'], 'fatty plaque, fatty paste', 'پلاک چربی', 'ds'],
    ['scler/o', ['scler'], 'hardening', 'سختی', 'ds'],
    ['sten/o', ['sten'], 'narrowing', 'تنگی', 'ds'],
    ['thromb/o', ['thromb'], 'blood clot', 'لخته', 'ds'],
    ['embol/o', ['embol'], 'plug, embolus', 'آمبول، درپوش', 'ds'],
    ['isch/o', ['isch'], 'to hold back', 'جلوگیری، بازداشتن', 'ds'],
    ['necr/o', ['necr'], 'death', 'مرگ', 'ds'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', 'ds'],
    ['varic/o', ['varic'], 'dilated, twisted vein', 'سیاهرگ گشاد (واریس)', 'ds'],
    ['aneurysm/o', ['aneurysm'], 'aneurysm, widening', 'آنوریسم، اتساع', 'ds'],
    ['fibrill/o', ['fibrill'], 'small fiber, twitching', 'رشته کوچک، لرزش', 'ds'],
    ['lip/o, lipid/o', ['lipid', 'lip'], 'fat, lipid', 'چربی', 'ds'],
    ['cholesterol/o', ['cholesterol'], 'cholesterol', 'کلسترول', 'ds'],
    // تشخیص و درمان
    ['ech/o', ['ech'], 'sound, echo', 'صدا، پژواک', 'tx'],
    ['son/o', ['son'], 'sound', 'صدا', 'tx'],
    ['tom/o', ['tom'], 'to cut, section', 'برش', 'tx'],
    ['radi/o', ['radi'], 'radiation, x-ray', 'پرتو', 'tx'],
    ['press/o', ['press'], 'pressure', 'فشار', 'tx'],
    // پسوندهای صفت‌ساز و اسم‌ساز
    ['-ac', ['ac'], 'pertaining to', 'مربوط به', 'lx'],
    ['-al', ['al'], 'pertaining to', 'مربوط به', 'lx'],
    ['-ar', ['ar'], 'pertaining to', 'مربوط به', 'lx'],
    ['-ary', ['ary'], 'pertaining to', 'مربوط به', 'lx'],
    ['-ic', ['ic'], 'pertaining to', 'مربوط به', 'lx'],
    ['-ous', ['ous'], 'pertaining to', 'مربوط به', 'lx'],
    ['-ole', ['ole'], 'small, minute', 'کوچک', 'vc'],
    ['-ule', ['ule'], 'small, minute', 'کوچک', 'vc'],
    ['-um', ['um'], 'structure, thing', 'ساختار، چیز', 'an'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', 'حالت، فرایند', '*'],
    ['-ation', ['ation'], 'process', 'فرایند', '*'],
    ['-cardia', ['cardia'], 'heart condition', 'حالت قلب', 'ep'],
    ['-tension', ['tension'], 'pressure, stretching', 'فشار، کشش', 'ds'],
    ['-constriction', ['constriction'], 'narrowing', 'تنگ شدن', 'vc'],
    ['-dilation', ['dilation', 'dilatation'], 'widening, expansion', 'گشاد شدن', 'vc'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصص', 'lx'],
    ['-genic', ['genic'], 'producing, originating in', 'ایجادشده از، سازنده', 'ds'],
    // بیماری‌ها
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', 'ds'],
    ['-stenosis', ['stenosis'], 'narrowing, stricture', 'تنگی', 'ds'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سخت شدن', 'ds'],
    ['-osis', ['osis'], 'abnormal condition', 'حالت غیرطبیعی', 'ds'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', 'ds'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', 'ds'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'ds'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'ds'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', 'گرفتگی ناگهانی', 'ds'],
    ['-rrhexis', ['rrhexis'], 'rupture', 'پارگی', 'ds'],
    ['-ectasis, -ectasia', ['ectasis', 'ectasia'], 'dilation, expansion', 'اتساع', 'ds'],
    // تشخیص و درمان
    ['-gram', ['gram'], 'record, image', 'ثبت، تصویر', 'tx'],
    ['-graph', ['graph'], 'instrument for recording', 'دستگاه ثبت', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت', 'tx'],
    ['-scope', ['scope'], 'instrument for examining', 'ابزار دیدن', 'ep'],
    ['-scopy', ['scopy'], 'visual examination', 'دیدن، معاینه با چشم', 'tx'],
    ['-meter', ['meter'], 'instrument for measuring', 'ابزار اندازه‌گیری', 'ep'],
    ['-ectomy', ['ectomy'], 'excision, removal', 'برداشتن', 'tx'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', 'tx'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'tx'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', 'کشیدن مایع با سوزن', 'tx'],
    ['-lysis', ['lysis'], 'breakdown, dissolving', 'حل کردن، تجزیه', 'tx'],
    ['-lytic', ['lytic'], 'dissolving, destroying', 'حل‌کننده', 'tx'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx'],
    ['-version', ['version'], 'turning', 'برگرداندن', 'tx']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    // پایه و پرونده
    ['CV', 'cardiovascular', 'قلبی-عروقی', 'lx'],
    ['EP', 'electrophysiology', 'الکتروفیزیولوژی قلب', 'lx'],
    ['CCU', 'coronary care unit', 'بخش مراقبت ویژه قلب (سی‌سی‌یو)', 'lx'],
    ['CP', 'chest pain', 'درد قفسه سینه', 'lx'],
    ['SOB', 'shortness of breath', 'تنگی نفس', 'lx'],
    ['DOE', 'dyspnea on exertion', 'تنگی نفس هنگام فعالیت', 'lx'],
    ['IV', 'intravenous', 'درون‌سیاهرگی (وریدی)', 'lx'],
    ['bpm', 'beats per minute', 'ضربان در دقیقه', 'lx'],
    ['mmHg', 'millimeters of mercury', 'میلی‌متر جیوه', 'lx'],
    // ساختمان قلب
    ['RA', 'right atrium', 'دهلیز راست', 'an'],
    ['LA', 'left atrium', 'دهلیز چپ', 'an'],
    ['RV', 'right ventricle', 'بطن راست', 'an'],
    ['LV', 'left ventricle', 'بطن چپ', 'an'],
    ['AV', 'atrioventricular', 'دهلیزی-بطنی', 'an'],
    ['SVC', 'superior vena cava', 'بزرگ‌سیاهرگ زبرین', 'an'],
    ['IVC', 'inferior vena cava', 'بزرگ‌سیاهرگ زیرین', 'an'],
    ['RCA', 'right coronary artery', 'سرخرگ کرونر راست', 'an'],
    ['LCA', 'left coronary artery', 'سرخرگ کرونر چپ', 'an'],
    ['LAD', 'left anterior descending (artery)', 'سرخرگ نزولی قدامی چپ', 'an'],
    // ضربان و هدایت
    ['HR', 'heart rate', 'ضربان قلب', 'ep'],
    ['BP', 'blood pressure', 'فشار خون', 'ep'],
    ['SA', 'sinoatrial', 'سینوسی-دهلیزی', 'ep'],
    ['ECG, EKG', 'electrocardiogram; electrocardiography', 'نوار قلب', 'ep'],
    ['NSR', 'normal sinus rhythm', 'ریتم سینوسی طبیعی', 'ep'],
    ['CO', 'cardiac output', 'برون‌ده قلبی', 'ep'],
    ['SV', 'stroke volume', 'حجم ضربه‌ای', 'ep'],
    ['EF', 'ejection fraction', 'کسر جهشی', 'ep'],
    ['S1, S2', 'first and second heart sounds', 'صدای اول و دوم قلب', 'ep'],
    // رگ‌ها
    ['CVP', 'central venous pressure', 'فشار ورید مرکزی', 'vc'],
    ['PAD', 'peripheral artery disease', 'بیماری سرخرگ‌های محیطی', 'vc'],
    ['PVD', 'peripheral vascular disease', 'بیماری عروق محیطی', 'vc'],
    ['DVT', 'deep vein thrombosis', 'ترومبوز ورید عمقی', 'vc'],
    ['VTE', 'venous thromboembolism', 'ترومبوآمبولی وریدی', 'vc'],
    ['PE', 'pulmonary embolism', 'آمبولی ریه', 'vc'],
    ['AAA', 'abdominal aortic aneurysm', 'آنوریسم آئورت شکمی', 'vc'],
    ['PDA', 'patent ductus arteriosus', 'باز ماندن مجرای شریانی', 'vc'],
    // بیماری‌ها
    ['CAD', 'coronary artery disease', 'بیماری سرخرگ کرونر', 'ds'],
    ['MI', 'myocardial infarction', 'سکته قلبی', 'ds'],
    ['AMI', 'acute myocardial infarction', 'سکته حاد قلبی', 'ds'],
    ['HTN', 'hypertension', 'پرفشاری خون', 'ds'],
    ['HF', 'heart failure', 'نارسایی قلب', 'ds'],
    ['CHF', 'congestive heart failure', 'نارسایی احتقانی قلب', 'ds'],
    ['AF, A-fib', 'atrial fibrillation', 'فیبریلاسیون دهلیزی', 'ds'],
    ['VF, V-fib', 'ventricular fibrillation', 'فیبریلاسیون بطنی', 'ds'],
    ['VT', 'ventricular tachycardia', 'تاکی‌کاردی بطنی', 'ds'],
    ['SVT', 'supraventricular tachycardia', 'تاکی‌کاردی فوق‌بطنی', 'ds'],
    ['PVC', 'premature ventricular contraction', 'انقباض زودرس بطنی', 'ds'],
    ['PAC', 'premature atrial contraction', 'انقباض زودرس دهلیزی', 'ds'],
    ['CHB', 'complete heart block', 'بلوک کامل قلب', 'ds'],
    ['BBB', 'bundle branch block', 'بلوک شاخه‌ای', 'ds'],
    ['MVP', 'mitral valve prolapse', 'افتادگی دریچه میترال', 'ds'],
    ['RHD', 'rheumatic heart disease', 'بیماری روماتیسمی قلب', 'ds'],
    ['CHD', 'congenital heart disease', 'بیماری مادرزادی قلب', 'ds'],
    ['ASD', 'atrial septal defect', 'نقص دیواره دهلیزی', 'ds'],
    ['VSD', 'ventricular septal defect', 'نقص دیواره بطنی', 'ds'],
    ['CoA', 'coarctation of the aorta', 'کوآرکتاسیون آئورت', 'ds'],
    ['LVH', 'left ventricular hypertrophy', 'هیپرتروفی بطن چپ', 'ds'],
    ['CVA', 'cerebrovascular accident', 'سکته مغزی', 'ds'],
    ['TIA', 'transient ischemic attack', 'حمله ایسکمیک گذرا', 'ds'],
    ['WPW', 'Wolff-Parkinson-White (syndrome)', 'سندرم ولف-پارکینسون-وایت', 'ds'],
    // تشخیص
    ['ECHO', 'echocardiography', 'اکوکاردیوگرافی', 'tx'],
    ['TEE', 'transesophageal echocardiography', 'اکوی مری', 'tx'],
    ['CTA', 'computed tomography angiography', 'سی‌تی آنژیوگرافی', 'tx'],
    ['DSA', 'digital subtraction angiography', 'آنژیوگرافی تفریقی دیجیتال', 'tx'],
    ['MUGA', 'multiple-gated acquisition (scan)', 'اسکن موگا', 'tx'],
    ['CK-MB', 'creatine kinase, MB (heart) fraction', 'کراتین کیناز قلبی', 'tx'],
    ['BNP', 'B-type natriuretic peptide', 'پپتید ناتریورتیک نوع B', 'tx'],
    ['CRP', 'C-reactive protein', 'پروتئین واکنشی C', 'tx'],
    ['HDL', 'high-density lipoprotein', 'لیپوپروتئین پرچگال (کلسترول خوب)', 'tx'],
    ['LDL', 'low-density lipoprotein', 'لیپوپروتئین کم‌چگال (کلسترول بد)', 'tx'],
    ['INR', 'international normalized ratio', 'نسبت نرمال‌شده بین‌المللی (پایش وارفارین)', 'tx'],
    // درمان و دارو
    ['PTCA', 'percutaneous transluminal coronary angioplasty', 'آنژیوپلاستی کرونر از راه پوست', 'tx'],
    ['PCI', 'percutaneous coronary intervention', 'مداخله کرونری از راه پوست', 'tx'],
    ['CABG', 'coronary artery bypass graft', 'جراحی بای‌پس کرونر', 'tx'],
    ['CPR', 'cardiopulmonary resuscitation', 'احیای قلبی-ریوی', 'tx'],
    ['AED', 'automated external defibrillator', 'دفیبریلاتور خودکار خارجی', 'tx'],
    ['ICD', 'implantable cardioverter-defibrillator', 'دفیبریلاتور قابل کاشت', 'tx'],
    ['IABP', 'intra-aortic balloon pump', 'پمپ بالونی داخل آئورتی', 'tx'],
    ['LVAD', 'left ventricular assist device', 'دستگاه کمک‌بطن چپ', 'tx'],
    ['MVR', 'mitral valve replacement', 'تعویض دریچه میترال', 'tx'],
    ['tPA', 'tissue plasminogen activator', 'فعال‌کننده پلاسمینوژن بافتی (حل‌کننده لخته)', 'tx'],
    ['ACE', 'angiotensin-converting enzyme', 'آنزیم مبدل آنژیوتانسین', 'tx'],
    ['ARB', 'angiotensin receptor blocker', 'مسدودکننده گیرنده آنژیوتانسین', 'tx'],
    ['CCB', 'calcium channel blocker', 'مسدودکننده کانال کلسیم', 'tx'],
    ['NTG', 'nitroglycerin', 'نیتروگلیسیرین', 'tx'],
    ['ASA', 'acetylsalicylic acid (aspirin)', 'آسپرین', 'tx']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {};
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته هر واژه در داده‌ها (tools/terms) دستی تعیین شده است؛ این‌جا فقط نام و نماد دسته‌ها آمده است. */
  const CATS = [
    { id: 'anat', icon: '🫀', name: 'ساختمان قلب' },
    { id: 'elec', icon: '⚡', name: 'ضربان، هدایت و فشار' },
    { id: 'ves', icon: '🩸', name: 'رگ‌ها و گردش خون' },
    { id: 'dz', icon: '💔', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔎', name: 'علائم و یافته‌ها' },
    { id: 'dx', icon: '🩻', name: 'آزمایش و تصویربرداری' },
    { id: 'proc', icon: '🔧', name: 'جراحی و روش‌ها' },
    { id: 'rx', icon: '💊', name: 'داروها' },
    { id: 'sci', icon: '🎓', name: 'تخصص‌ها و حرفه‌ها' },
    { id: 'adj', icon: '🏷️', name: 'صفت‌ها' },
    { id: 'pl', icon: '📚', name: 'مفرد و جمع' }
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
    return svg(360, 196, `${f(180, 24, 'یک واژه = پیشوند + ریشه + پسوند', { size: 11.5, fill: INK, w: 800 })}
      ${part(12, 64, 'peri', '#1272a3', '#ddf1fb')}${part(82, 82, 'cardi', '#a31b33', '#fde3e7')}${part(170, 58, 'itis', '#3f8a05', '#e7f9d8')}
      ${br(12, 76, 'prefix • پیشوند', 'پیرامون', '#1272a3')}${br(82, 164, 'root • ریشه', 'قلب', '#a31b33')}${br(170, 228, 'suffix', 'التهاب', '#3f8a05')}
      <path d="M234 64 h10" stroke="${LINE}" stroke-width="2"/><rect x="248" y="44" width="106" height="42" rx="10" fill="#f8f6f5"/>${f(301, 62, 'التهابِ', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(301, 78, 'پیرامون قلب', { size: 11, fill: INK, w: 800 })}
      <path d="M200 152 C150 178 90 178 44 152" stroke="#4f5bd5" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 148 l-6 4 l7 3" stroke="#4f5bd5" stroke-width="2" fill="none"/>
      ${f(122, 190, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10.5, fill: '#4f5bd5', w: 700 })}`, 'آناتومی واژه pericarditis');
  };

  /* سه پسوند ثبت: -gram، -graph، -graphy */
  A['gram-graph'] = () => {
    const g = 'g' + (++UID);
    const card = (x, c, bg, suf, fa, ex, icon) => `<rect x="${x}" y="8" width="112" height="186" rx="14" fill="${bg}"/>${icon}${t(x + 56, 124, suf, { size: 17, fill: c, w: 900 })}${f(x + 56, 144, fa, { size: 10.5, fill: INK, w: 800 })}${t(x + 56, 172, ex, { size: 10, fill: c, w: 800 })}`;
    const paper = x => `${ecgPaper(x + 16, 34, 80, 50)}${trace(ecgPath(x + 18, 64, 76, 'normal', { k: 0.6 }))}`;
    const machine = x => `<rect x="${x + 22}" y="30" width="68" height="52" rx="8" fill="#5b6b73"/><rect x="${x + 30}" y="38" width="52" height="26" rx="4" fill="#d9f5ef"/>${trace(ecgPath(x + 32, 54, 48, 'normal', { k: 0.4 }), '#0b7a6c')}<circle cx="${x + 36}" cy="73" r="3" fill="#ffc800"/><circle cx="${x + 46}" cy="73" r="3" fill="#9aa9b1"/><path d="M${x + 90} 60 q14 6 10 26" stroke="#5b6b73" stroke-width="2.4" fill="none"/>`;
    const proc = x => `<circle cx="${x + 56}" cy="58" r="28" fill="#fff" stroke="#e58a00" stroke-width="2.4"/><path d="M${x + 56} 40 V58 L${x + 70} 66" stroke="#e58a00" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M${x + 22} 96 h68" stroke="#e58a00" stroke-width="2" marker-end="url(#${g})"/>`;
    return svg(360, 220, `<defs>${marker(g, '#e58a00')}</defs>
      ${card(244, '#c8324c', '#fdecef', '-gram', 'ثبت، نوار، تصویر', 'electrocardiogram', paper(244))}
      ${card(124, '#0b7a6c', '#e3f7f2', '-graph', 'دستگاه ثبت', 'electrocardiograph', machine(124))}
      ${card(4, '#9a5b00', '#fff1dc', '-graphy', 'فرایند ثبت', 'electrocardiography', proc(4))}
      ${f(180, 212, 'نتیجه (gram) ← دستگاه (graph) ← کارِ ثبت کردن (graphy)', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'پسوندهای ثبت');
  };

  /* ضربان کند، طبیعی و تند روی نوار */
  A['rate-strips'] = () => {
    const row = (y, kind, en, fa, bpm, c) => `${ecgPaper(110, y, 240, 54)}${trace(ecgPath(112, y + 36, 236, kind, { k: 0.75 }), c)}${t(56, y + 22, en, { size: 12, fill: c, w: 900 })}${f(56, y + 38, fa, { size: 10, fill: INK, w: 700 })}${f(56, y + 52, bpm, { size: 9.5, fill: MUTED })}`;
    return svg(360, 214, `${row(8, 'brady', 'bradycardia', 'ضربان کند', 'کمتر از ۶۰ در دقیقه', '#1272a3')}
      ${row(76, 'normal', 'normal', 'ضربان طبیعی', '۶۰ تا ۱۰۰ در دقیقه', '#3f8a05')}
      ${row(144, 'tachy', 'tachycardia', 'ضربان تند', 'بیشتر از ۱۰۰ در دقیقه', '#c8324c')}`, 'ضربان کند، طبیعی و تند');
  };

  /* مفرد و جمع واژه‌های قلب */
  A.plurals = () => {
    const rows = [['-um', '-a', 'atrium', 'atria'], ['-um', '-a', 'septum', 'septa'], ['-us', '-i', 'thrombus', 'thrombi'], ['-us', '-i', 'embolus', 'emboli'], ['-is', '-es', 'stenosis', 'stenoses'], ['-ix', '-ices', 'varix', 'varices'], ['-a', '-ae', 'vena cava', 'venae cavae'], ['-a', '-ae', 'chorda', 'chordae']];
    const cell = i => { const c = i < 4 ? 0 : 1, r = i % 4, x = 8 + c * 176, y = 32 + r * 44; const R = rows[i];
      return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${['#eef0fd', '#fdf1e4'][c]}"/>${pill(x + 4, y + 9, 66, 20, '#fff')}${t(x + 37, y + 23, `${R[0]} → ${R[1]}`, { size: 10, fill: '#4f5bd5', w: 900 })}${t(x + 78, y + 16, R[2], { size: 9.5, anchor: 'start', fill: MUTED, w: 700 })}${t(x + 78, y + 31, R[3], { size: 11, anchor: 'start', fill: INK, w: 900 })}`; };
    return svg(360, 214, `${f(180, 20, 'مفرد ← جمع: پایان واژه قاعده جمع را تعیین می‌کند', { size: 11, fill: INK, w: 700 })}${rows.map((_, i) => cell(i)).join('')}`, 'مفرد و جمع واژه‌های قلب');
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
      ${lab(56, 72, 'mediastinum', 'میان‌سینه', { size: 11, fill: '#3540a8' })}<path d="M86 76 L176 108" stroke="${LINE}" stroke-width="1.2"/><circle cx="176" cy="108" r="2.4" fill="${LINE}"/>
      ${lab(52, 160, 'right lung', 'ریه راست', { size: 10.5 })}<path d="M80 162 L118 158" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(308, 82, 'left lung', 'ریه چپ', { size: 10.5 })}<path d="M280 86 L240 110" stroke="${LINE}" stroke-width="1.2"/>
      ${lab(304, 196, 'apex', 'نوک قلب', { size: 11, fill: '#a8203b' })}<path d="M280 196 L206 198" stroke="${LINE}" stroke-width="1.2"/><circle cx="206" cy="198" r="2.6" fill="${LINE}"/>
      ${f(180, 252, 'قلب پشت جناغ است و دو سوم آن در سمت چپ بدن قرار دارد', { size: 10, fill: INK, w: 700 })}`, 'جای قلب در میان‌سینه');
  };

  /* لایه‌های دیواره قلب: از بیرون به درون */
  A['wall-layers'] = () => {
    const g = 'g' + (++UID);
    let y = 12;
    /* لایه‌ها در وسط؛ برچسب‌ها یکی در میان چپ و راست تا روی هم نیفتند */
    const rows = [
      [26, '#ebe3d6', 'fibrous pericardium', 'پریکارد فیبری', INK],
      [22, '#f6d9a2', 'parietal pericardium', 'پریکارد جداری', '#8a5300'],
      [26, '#fff6e3', 'pericardial cavity', 'حفره پریکارد (مایع)', '#1272a3'],
      [22, '#f6d9a2', 'epicardium', 'اپی‌کارد (احشایی)', '#8a5300'],
      [66, 'url(#' + g + ')', 'myocardium', 'میوکارد: ماهیچه قلب', '#a8203b'],
      [22, '#fbe4e8', 'endocardium', 'اندوکارد: پوشش درونی', '#a8203b'],
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
      ${f(180, 210, 'خون درون حفره', { size: 10, fill: '#fff', w: 800 })}
      ${f(180, 250, 'از بیرون به درون: پریکارد ← اپی‌کارد ← میوکارد ← اندوکارد', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'لایه‌های دیواره قلب');
  };

  /* چهار حفره و دیواره میانی */
  A.chambers = () => {
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 11, anchor, fill: c })}`;
    return svg(360, 262, `${heart(86, 14, 1.0)}
      ${L(140, 104, 84, 80, 'right atrium', 'دهلیز راست', 'end', '#1d4e9e')}${L(150, 160, 84, 168, 'right ventricle', 'بطن راست', 'end', '#1d4e9e')}
      ${L(222, 92, 286, 70, 'left atrium', 'دهلیز چپ', 'start', '#a8203b')}${L(222, 148, 286, 150, 'left ventricle', 'بطن چپ', 'start', '#a8203b')}
      ${L(196, 166, 286, 210, 'septum', 'دیواره بین‌بطنی', 'start')}
      ${f(180, 254, 'دهلیزها خون را می‌گیرند؛ بطن‌ها خون را بیرون می‌فرستند', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'چهار حفره قلب');
  };

  /* چهار دریچه: دهلیزی-بطنی و سینی */
  A.valves4 = () => {
    const g = 'g' + (++UID);
    const cusp = (cx, cy, n, c, r) => { r = r || 22; let out = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" stroke="#8a6d3b" stroke-width="1.6"/>`; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 - Math.PI / 2; out += `<path d="M${cx} ${cy} L${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}" stroke="#8a6d3b" stroke-width="1.6"/>`; } return out; };
    const card = (x, y, c, title, sub) => `<rect x="${x}" y="${y}" width="170" height="114" rx="14" fill="${c}"/>${t(x + 85, y + 18, title, { size: 11, fill: INK, w: 900 })}${f(x + 85, y + 32, sub, { size: 9.5, fill: MUTED })}`;
    return svg(360, 268, `<defs>${shadow(g)}</defs>
      ${card(184, 6, '#e8f0fd', 'atrioventricular (AV)', 'میان دهلیز و بطن')}${card(6, 6, '#fdecef', 'semilunar', 'خروجی بطن‌ها (هلالی)')}
      <g filter="url(#${g})">${cusp(228, 70, 3, '#fff6dd')}${cusp(312, 70, 2, '#fff6dd')}${cusp(50, 70, 3, '#fde7ea')}${cusp(134, 70, 3, '#fde7ea')}</g>
      ${lab(228, 106, 'tricuspid', 'سه‌لتی (راست)', { size: 10.5, fill: '#1d4e9e' })}${lab(312, 106, 'mitral', 'میترال، دولتی (چپ)', { size: 10.5, fill: '#a8203b' })}
      ${lab(50, 106, 'pulmonary', 'ریوی (راست)', { size: 10.5, fill: '#1d4e9e' })}${lab(134, 106, 'aortic', 'آئورت (چپ)', { size: 10.5, fill: '#a8203b' })}
      <rect x="6" y="128" width="348" height="132" rx="14" fill="#f8f6f5"/>
      ${f(180, 150, 'ترتیب عبور خون از دریچه‌ها', { size: 10.5, fill: INK, w: 800 })}
      ${['tricuspid', 'pulmonary', 'mitral', 'aortic'].map((v, i) => { const x = 322 - i * 92; return `<circle cx="${x}" cy="182" r="17" fill="${i % 2 ? '#fde7ea' : '#fff6dd'}" stroke="#8a6d3b" stroke-width="1.4"/>${t(x, 187, String(i + 1), { size: 13, w: 900, fill: '#8a6d3b' })}${t(x, 214, v, { size: 10, w: 800 })}${i < 3 ? `<path d="M${x - 24} 182 h-40" stroke="${LINE}" stroke-width="2" marker-end="url(#${g}m)"/>` : ''}`; }).join('')}
      <defs>${marker(g + 'm', LINE)}</defs>
      ${f(180, 246, 'بستن دریچه‌های AV صدای اول (lubb) و بستن سینی‌ها صدای دوم (dupp) را می‌سازد', { size: 9.5, fill: '#4f5bd5', w: 700 })}`, 'چهار دریچه قلب');
  };

  /* مسیر خون: یک حلقه کامل از بدن تا بدن */
  A['flow-loop'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const box = (x, y, w, c, bg, en, fa) => `<rect x="${x}" y="${y}" width="${w}" height="36" rx="11" fill="${bg}" stroke="${c}" stroke-width="1.4"/>${t(x + w / 2, y + 15, en, { size: 10, fill: c, w: 900 })}${f(x + w / 2, y + 29, fa, { size: 9, fill: INK })}`;
    const B = BLUE[2], R = RED[2];
    return svg(360, 300, `<defs>${marker(a, B)}${marker(b, R)}</defs>
      ${box(130, 6, 100, '#3f8a05', '#e7f9d8', 'lungs', 'ریه‌ها: گرفتن اکسیژن')}
      ${box(130, 258, 100, '#9a5b00', '#fff1dc', 'body', 'بافت‌های بدن')}
      ${box(6, 214, 112, B, '#e8f0fd', 'venae cavae', 'بزرگ‌سیاهرگ‌ها')}${box(6, 160, 112, B, '#e8f0fd', 'right atrium', 'دهلیز راست')}
      ${box(6, 106, 112, B, '#e8f0fd', 'right ventricle', 'بطن راست')}${box(6, 52, 112, B, '#e8f0fd', 'pulmonary artery', 'سرخرگ ریوی')}
      ${box(242, 52, 112, R, '#fdecef', 'pulmonary veins', 'سیاهرگ‌های ریوی')}${box(242, 106, 112, R, '#fdecef', 'left atrium', 'دهلیز چپ')}
      ${box(242, 160, 112, R, '#fdecef', 'left ventricle', 'بطن چپ')}${box(242, 214, 112, R, '#fdecef', 'aorta', 'آئورت')}
      ${[[62, 214, 62, 198], [62, 160, 62, 144], [62, 106, 62, 90]].map(p => `<path d="M${p[0]} ${p[1]} L${p[2]} ${p[3]}" stroke="${B}" stroke-width="2.4" marker-end="url(#${a})"/>`).join('')}
      ${[[298, 88, 298, 104], [298, 142, 298, 158], [298, 196, 298, 212]].map(p => `<path d="M${p[0]} ${p[1]} L${p[2]} ${p[3]}" stroke="${R}" stroke-width="2.4" marker-end="url(#${b})"/>`).join('')}
      <path d="M62 52 Q62 24 128 24" stroke="${B}" stroke-width="2.4" fill="none" marker-end="url(#${a})"/><path d="M232 24 Q298 24 298 50" stroke="${R}" stroke-width="2.4" fill="none" marker-end="url(#${b})"/>
      <path d="M298 250 Q298 276 232 276" stroke="${R}" stroke-width="2.4" fill="none" marker-end="url(#${b})"/><path d="M128 276 Q62 276 62 252" stroke="${B}" stroke-width="2.4" fill="none" marker-end="url(#${a})"/>
      ${t(86, 155, 'tricuspid', { size: 8.5, fill: MUTED, anchor: 'start' })}${t(86, 101, 'pulmonary valve', { size: 8.5, fill: MUTED, anchor: 'start' })}
      ${t(274, 155, 'mitral', { size: 8.5, fill: MUTED, anchor: 'end' })}${t(274, 209, 'aortic valve', { size: 8.5, fill: MUTED, anchor: 'end' })}
      ${f(180, 128, 'نیمه راست قلب', { size: 10, fill: B, w: 800 })}${f(180, 144, 'خون کم‌اکسیژن', { size: 9.5, fill: B })}
      ${f(180, 178, 'نیمه چپ قلب', { size: 10, fill: R, w: 800 })}${f(180, 194, 'خون اکسیژن‌دار', { size: 9.5, fill: R })}`, 'مسیر خون در قلب و بدن');
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
      ${LL(216, 50, 34, 'left coronary artery', 'سرخرگ کرونر چپ (LCA)', '#a8203b')}
      ${LL(152, 120, 150, 'right coronary artery', 'سرخرگ کرونر راست (RCA)', '#a8203b')}
      ${L(229, 176, 252, 204, 'LAD', 'نزولی قدامی چپ', 'start', '#a8203b')}
      ${L(274, 82, 290, 104, 'circumflex', 'سیرکومفلکس', 'start', '#a8203b')}
      ${f(180, 252, 'کرونر یعنی «تاج»؛ این سرخرگ‌ها مثل تاج دور قلب حلقه زده‌اند', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'سرخرگ‌های کرونر');
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
      ${leg(1, 196, 234, 'SA node', 'گره سینوسی: ضربان‌ساز')}${leg(2, 196, 268, 'AV node', 'گره دهلیزی-بطنی')}${leg(3, 196, 302, 'bundle of His', 'دسته هیس')}
      ${leg(4, 22, 234, 'bundle branches', 'شاخه‌های راست و چپ')}${leg(5, 22, 268, 'Purkinje fibers', 'رشته‌های پورکنژ')}
      ${f(90, 302, 'ترتیب: از ۱ تا ۵', { size: 9.5, fill: '#4f5bd5', w: 700 })}`, 'دستگاه هدایت الکتریکی قلب');
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
      <rect x="10" y="208" width="112" height="48" rx="10" fill="#e8f3fb"/>${t(66, 224, 'P wave', { size: 10.5, fill: '#1272a3', w: 900 })}${f(66, 240, 'انقباض دهلیزها', { size: 9.5, fill: INK, w: 700 })}${f(66, 252, '(دپلاریزاسیون دهلیز)', { size: 8.5 })}
      <rect x="126" y="208" width="108" height="48" rx="10" fill="#fdecef"/>${t(180, 224, 'QRS complex', { size: 10.5, fill: '#a31b33', w: 900 })}${f(180, 240, 'انقباض بطن‌ها', { size: 9.5, fill: INK, w: 700 })}${f(180, 252, '(دپلاریزاسیون بطن)', { size: 8.5 })}
      <rect x="238" y="208" width="112" height="48" rx="10" fill="#e7f9d8"/>${t(294, 224, 'T wave', { size: 10.5, fill: '#3f8a05', w: 900 })}${f(294, 240, 'بازیابی بطن‌ها', { size: 9.5, fill: INK, w: 700 })}${f(294, 252, '(رپلاریزاسیون بطن)', { size: 8.5 })}`, 'موج‌های نوار قلب');
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
      ${lab(270, 200, 'systole', 'سیستول: انقباض بطن‌ها', { size: 12, fill: '#a31b33' })}${f(270, 234, 'خون به آئورت و سرخرگ ریوی', { size: 9.5, fill: INK, w: 700 })}
      ${lab(90, 200, 'diastole', 'دیاستول: استراحت و پر شدن', { size: 12, fill: '#1272a3' })}${f(90, 234, 'خون از دهلیزها به بطن‌ها', { size: 9.5, fill: INK, w: 700 })}
      ${t(270, 26, 'lubb (S1)', { size: 10, fill: '#a31b33', w: 900 })}${f(270, 40, 'بسته شدن دریچه‌های AV', { size: 8.5 })}
      ${t(90, 26, 'dupp (S2)', { size: 10, fill: '#1272a3', w: 900 })}${f(90, 40, 'بسته شدن دریچه‌های سینی', { size: 8.5 })}`, 'سیستول و دیاستول');
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
      ${lab(270, 52, 'systolic', 'سیستولی: عدد بالا (انقباض)', { size: 11, fill: '#a31b33' })}
      ${lab(270, 174, 'diastolic', 'دیاستولی: عدد پایین (استراحت)', { size: 11, fill: '#1272a3' })}
      ${f(180, 222, '«۱۲۰ روی ۸۰ میلی‌متر جیوه» یعنی فشار سیستولی ۱۲۰ و دیاستولی ۸۰', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'خواندن فشار خون');
  };

  /* نقطه‌های نبض روی آدمک */
  A['pulse-points'] = () => {
    const X = 180, Y = 6, S = 1.04, P = (x, y) => [X + x * S, Y + y * S];
    const dot = (x, y) => { const [a, b] = P(x, y); return `<circle cx="${a}" cy="${b}" r="5.5" fill="#c8324c" stroke="#fff" stroke-width="1.6"/><circle cx="${a}" cy="${b}" r="9" fill="none" stroke="#c8324c" stroke-width="1.2" opacity=".5"/>`; };
    const L = (x, y, tx, ty, en, fa, anchor) => { const [a, b] = P(x, y); return `<path d="M${a} ${b} L${tx} ${ty}" stroke="${LINE}" stroke-width="1.1"/>${lab(tx + (anchor === 'end' ? -4 : 4), ty + 3, en, fa, { size: 10, anchor })}`; };
    return svg(360, 252, `${man(X, Y, S, { palms: true })}
      ${L(-11, 12, 90, 20, 'temporal', 'گیجگاهی', 'end')}${L(-7, 34, 90, 54, 'carotid', 'گردنی (کاروتید)', 'end')}${L(-30, 82, 90, 96, 'brachial', 'بازویی', 'end')}
      ${L(-34, 112, 90, 140, 'radial', 'رادیال (مچ)', 'end')}${L(-11, 150, 90, 190, 'popliteal', 'رکبی (پشت زانو)', 'end')}
      ${L(9, 64, 270, 60, 'apical', 'اپیکال (نوک قلب)', 'start')}${L(8, 110, 270, 118, 'femoral', 'رانی (کشاله ران)', 'start')}${L(12, 192, 270, 196, 'dorsalis pedis', 'روی پا', 'start')}
      ${dot(-11, 12)}${dot(-7, 34)}${dot(9, 64)}${dot(-30, 82)}${dot(-34, 112)}${dot(8, 110)}${dot(-11, 150)}${dot(12, 192)}
      ${f(180, 246, 'نبض جایی لمس می‌شود که سرخرگ نزدیک پوست و روی استخوان است', { size: 9.5, fill: '#4f5bd5', w: 700 })}`, 'نقطه‌های نبض');
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
      <path d="M20 40 H340" stroke="${LINE}" stroke-width="1.6" marker-end="url(#${a})"/>${f(180, 32, 'جهت جریان خون', { size: 9.5, fill: MUTED })}
      ${lab(46, 140, 'artery', 'سرخرگ', { size: 11, fill: '#a8203b' })}${lab(117, 140, 'arteriole', 'سرخرگ کوچک', { size: 10, fill: '#a8203b' })}
      ${lab(180, 140, 'capillary', 'مویرگ', { size: 11, fill: '#6b4fa8' })}${lab(243, 140, 'venule', 'سیاهرگ کوچک', { size: 10, fill: '#1d4e9e' })}${lab(314, 140, 'vein', 'سیاهرگ', { size: 11, fill: '#1d4e9e' })}
      <rect x="6" y="170" width="348" height="56" rx="12" fill="#f8f6f5"/>
      ${f(180, 192, 'سرخرگ: دیواره ضخیم، خون را از قلب دور می‌کند', { size: 10, fill: '#a8203b', w: 700 })}
      ${f(180, 214, 'سیاهرگ: دیواره نازک و دریچه‌دار، خون را به قلب برمی‌گرداند', { size: 10, fill: '#1d4e9e', w: 700 })}`, 'زنجیره رگ‌ها');
  };

  /* برش سرخرگ، سیاهرگ و مویرگ */
  A['vessel-wall'] = () => {
    const ring = (cx, cy, ro, layers) => { let r = ro, out = ''; layers.forEach(l => { out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${l[1]}"/>`; r -= l[0]; }); return out; };
    const L = (x1, y1, x2, y2, en, fa, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.2" fill="${LINE}"/>${lab(x2 - 4, y2 + 3, en, fa, { size: 10, anchor: 'end', fill: c })}`;
    return svg(360, 262, `
      ${ring(168, 92, 58, [[13, '#f3e3cf'], [21, '#e48a8a'], [4, '#fbe7ea'], [22, '#fff']])}
      ${L(120, 58, 96, 24, 'adventitia', 'لایه بیرونی', INK)}${L(124, 94, 96, 76, 'media', 'ماهیچه صاف', '#a8203b')}
      ${L(143, 110, 96, 128, 'intima', 'اندوتلیوم', INK)}${L(168, 92, 96, 178, 'lumen', 'مجرای رگ', '#1272a3')}
      ${lab(168, 172, 'artery', 'سرخرگ: لایه میانی ضخیم', { size: 12, fill: '#a8203b' })}
      <ellipse cx="300" cy="62" rx="52" ry="34" fill="#e7eef9"/><ellipse cx="300" cy="62" rx="47" ry="29" fill="#9bb7e6"/><ellipse cx="300" cy="62" rx="42" ry="25" fill="#fbe7ea"/><ellipse cx="300" cy="62" rx="39" ry="22" fill="#fff"/>
      <path d="M282 50 Q300 66 318 50" stroke="#7aa0dc" stroke-width="3" fill="none"/>${f(300, 78, 'دریچه', { size: 9, fill: '#1d4e9e', w: 700 })}
      ${lab(300, 116, 'vein', 'سیاهرگ: دیواره نازک', { size: 12, fill: '#1d4e9e' })}
      <circle cx="300" cy="180" r="15" fill="#fbe7ea" stroke="#d9a6c9"/><circle cx="300" cy="180" r="11" fill="#fff"/>
      ${lab(300, 216, 'capillary', 'مویرگ: یک لایه سلول', { size: 12, fill: '#6b4fa8' })}`, 'برش رگ‌ها');
  };

  /* دو گردش: ریوی و عمومی */
  A['two-circuits'] = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID);
    const net = (x, y, w, h, c) => { let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${c}"/>`; for (let i = 1; i < 6; i++) s += `<path d="M${x + i * w / 6} ${y + 6} q-6 ${h / 2} 0 ${h - 12}" stroke="#fff" stroke-width="1.2" opacity=".7" fill="none"/>`; return s; };
    return svg(360, 300, `<defs>${marker(a, BLUE[2])}${marker(b, RED[2])}</defs>
      ${net(110, 8, 140, 48, '#f6c6cf')}${lab(180, 30, 'lungs', 'ریه‌ها', { size: 11, fill: '#3f8a05' })}
      ${net(90, 244, 180, 50, '#fde3c8')}${lab(180, 266, 'body tissues', 'بافت‌های بدن', { size: 11, fill: '#9a5b00' })}
      <g transform="translate(180 94) scale(.62) translate(-104 0)">${heart(0, 0, 1)}</g>
      <path d="M150 112 C120 100 112 70 130 58" stroke="${BLUE[2]}" stroke-width="3" fill="none" marker-end="url(#${a})"/>
      <path d="M230 58 C250 72 246 96 214 108" stroke="${RED[2]}" stroke-width="3" fill="none" marker-end="url(#${b})"/>
      <path d="M220 168 C270 190 270 220 250 240" stroke="${RED[2]}" stroke-width="3" fill="none" marker-end="url(#${b})"/>
      <path d="M110 240 C88 214 98 186 140 172" stroke="${BLUE[2]}" stroke-width="3" fill="none" marker-end="url(#${a})"/>
      ${lab(64, 76, 'pulmonary', 'گردش ریوی (کوچک)', { size: 11, fill: '#1d4e9e' })}${f(64, 104, 'راست ← ریه ← چپ', { size: 9, fill: MUTED })}
      ${lab(304, 128, 'systemic', 'گردش عمومی (بزرگ)', { size: 11, fill: '#a8203b' })}${f(304, 156, 'چپ ← بدن ← راست', { size: 9, fill: MUTED })}`, 'گردش ریوی و عمومی');
  };

  /* تنگ و گشاد شدن رگ */
  A.vaso = () => {
    const g = 'g' + (++UID);
    const tubeX = (x, lumen, label, fa, c, arrows) => `<rect x="${x}" y="40" width="150" height="80" rx="16" fill="#f2a6ae"/><rect x="${x}" y="${80 - lumen / 2}" width="150" height="${lumen}" fill="url(#${g})"/>
      ${arrows}${lab(x + 75, 150, label, fa, { size: 12, fill: c })}`;
    const inA = x => `<path d="M${x + 75} 18 v18" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${g}m)"/><path d="M${x + 75} 142 v-18" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${g}m)"/>`;
    const outA = x => `<path d="M${x + 75} 50 v-30" stroke="#fff" stroke-width="2.4" marker-end="url(#${g}m)"/><path d="M${x + 75} 110 v30" stroke="#fff" stroke-width="2.4" marker-end="url(#${g}m)"/>`;
    return svg(360, 214, `<defs>${linear(g, '#e8495f', '#c8324c', true)}${marker(g + 'm', LINE)}</defs>
      ${tubeX(196, 18, 'vasoconstriction', 'تنگ شدن رگ', '#a8203b', inA(196))}${tubeX(14, 56, 'vasodilation', 'گشاد شدن رگ', '#1272a3', outA(14))}
      <rect x="196" y="176" width="150" height="30" rx="10" fill="#fdecef"/>${f(271, 196, 'فشار خون بالا می‌رود ↑', { size: 10, fill: '#a8203b', w: 800 })}
      <rect x="14" y="176" width="150" height="30" rx="10" fill="#e8f3fb"/>${f(89, 196, 'فشار خون پایین می‌آید ↓', { size: 10, fill: '#1272a3', w: 800 })}`, 'تنگ و گشاد شدن رگ');
  };

  /* گردش جنینی: سوراخ بیضی و مجرای شریانی */
  A['fetal-shunts'] = () => {
    const X = 82, Y = 26, S = 0.92, P = (x, y) => [(X + x * S).toFixed(1), (Y + y * S).toFixed(1)];
    const L = (x1, y1, x2, y2, en, fa, anchor, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="${LINE}"/>${lab(x2 + (anchor === 'end' ? -4 : 4), y2 + 3, en, fa, { size: 10.5, anchor, fill: c })}`;
    const [fx, fy] = P(96, 82), [dx, dy] = P(128, 26);
    return svg(360, 262, `${heart(X, Y, S)}
      <path d="M${P(92, 24).join(' ')} C${P(104, 6).join(' ')} ${P(132, 6).join(' ')} ${P(140, 22).join(' ')}" stroke="#7b3fa0" stroke-width="7" fill="none" stroke-linecap="round" opacity=".85"/>
      <ellipse cx="${fx}" cy="${fy}" rx="6" ry="9" fill="#7b3fa0" stroke="#fff" stroke-width="1.6"/>
      ${L(fx, fy, 258, 130, 'foramen ovale', 'سوراخ بیضی', 'start', '#6b2f90')}${L(dx, dy, 258, 30, 'ductus arteriosus', 'مجرای شریانی', 'start', '#6b2f90')}
      ${f(180, 232, 'پیش از تولد، خون از ریه‌های خاموش میان‌بر می‌زند', { size: 10, fill: INK, w: 700 })}
      ${f(180, 252, 'پس از تولد هر دو بسته می‌شوند؛ باز ماندن مجرا = PDA', { size: 10, fill: '#a8203b', w: 700 })}`, 'میان‌برهای گردش جنینی');
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
      ${step(312, 31, 0, 0, 'normal', 'سرخرگ سالم')}${step(224, 22, 7, 0, 'plaque', 'پلاک چربی')}${step(136, 11, 16, 0, 'stenosis', 'تنگی شدید')}${step(48, 11, 16, 1, 'thrombus', 'لخته و انسداد')}
      ${[[270, 254], [182, 166], [94, 78]].map(p => `<path d="M${p[0]} 70 L${p[1]} 70" stroke="${LINE}" stroke-width="2.4" marker-end="url(#${a})"/>`).join('')}
      <rect x="6" y="168" width="348" height="44" rx="12" fill="#fdecef"/>${f(180, 186, 'پلاک چربی (atheroma) مجرای رگ را تنگ می‌کند؛', { size: 10, fill: INK, w: 700 })}${f(180, 203, 'وقتی روی آن لخته بسته شود، رگ کاملاً بسته می‌شود.', { size: 10, fill: '#a8203b', w: 700 })}`, 'مراحل آترواسکلروز');
  };

  /* لخته ثابت و آمبول سرگردان */
  A['clot-travel'] = () => {
    const a = 'm' + (++UID), g = 'g' + (++UID);
    const vessel = (y, w0, w1) => `<path d="M14 ${y - w0} C120 ${y - w0} 220 ${y - w1} 346 ${y - w1} V${y + w1} C220 ${y + w1} 120 ${y + w0} 14 ${y + w0}Z" fill="#f2a6ae"/><path d="M14 ${y - w0 + 6} C120 ${y - w0 + 6} 220 ${y - w1 + 4} 346 ${y - w1 + 4} V${y + w1 - 4} C220 ${y + w1 - 4} 120 ${y + w0 - 6} 14 ${y + w0 - 6}Z" fill="url(#${g})"/>`;
    const clot = (cx, cy, r) => `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.3}" ry="${r}" fill="#7a1022"/>${dots(cx, cy, r - 1, 7, '#c25060', 1.3, 3)}`;
    return svg(360, 272, `<defs>${linear(g, '#e8495f', '#c8324c', true)}${marker(a, '#7a1022')}</defs>
      ${vessel(60, 26, 26)}${clot(120, 76, 9)}<path d="M120 86 v4" stroke="#7a1022" stroke-width="3"/>
      ${lab(120, 112, 'thrombus', 'لخته ثابت؛ به دیواره چسبیده', { size: 11, fill: '#7a1022' })}
      ${vessel(180, 26, 12)}${clot(76, 180, 8)}<path d="M100 180 C150 180 200 180 254 180" stroke="#7a1022" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${a})"/>${clot(290, 180, 9)}
      ${lab(76, 222, 'embolus', 'لخته سرگردان', { size: 11, fill: '#7a1022' })}${lab(290, 222, 'embolism', 'گیر کردن و بستن رگ', { size: 11, fill: '#7a1022' })}
      ${f(180, 264, 'ترومبوز ورید عمقی پا (DVT) ← آمبول ← آمبولی ریه (PE)', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'لخته ثابت و آمبول');
  };

  /* چهار ریتم: طبیعی، فیبریلاسیون دهلیزی، فیبریلاسیون بطنی، آسیستول */
  A['arrhythmias'] = () => {
    const row = (y, kind, en, fa, note, c) => `${ecgPaper(124, y, 228, 52)}${trace(ecgPath(126, y + 34, 224, kind, { k: 0.7 }), c)}${t(62, y + 18, en, { size: 10.5, fill: c, w: 900 })}${f(62, y + 33, fa, { size: 9.5, fill: INK, w: 700 })}${f(62, y + 47, note, { size: 8.5, fill: MUTED })}`;
    return svg(360, 252, `${row(4, 'normal', 'NSR', 'ریتم سینوسی طبیعی', 'منظم، با موج P', '#3f8a05')}
      ${row(66, 'af', 'atrial fibrillation', 'فیبریلاسیون دهلیزی', 'بی‌نظم، بدون موج P', '#9a5b00')}
      ${row(128, 'vf', 'ventricular fib.', 'فیبریلاسیون بطنی', 'هرج‌ومرج؛ نیاز به شوک', '#c8324c')}
      ${row(190, 'flat', 'asystole', 'آسیستول', 'خط صاف؛ ایست قلبی', '#5b6b73')}`, 'چهار ریتم قلب');
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
      ${box(244, '#3f8a05', '#e7f9d8', 'normal', 'دریچه سالم', 'باز و بسته کامل', normal(244))}
      ${box(124, '#9a5b00', '#fff1dc', 'stenosis', 'تنگی دریچه', 'سفت؛ خوب باز نمی‌شود', sten(124))}
      ${box(4, '#1d4e9e', '#e8f0fd', 'regurgitation', 'نارسایی دریچه', 'خوب بسته نمی‌شود', regurg(4))}`, 'تنگی و نارسایی دریچه');
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
      ${leg(1, 196, 234, 'ASD', 'نقص دیواره دهلیزی')}${leg(2, 196, 268, 'VSD', 'نقص دیواره بطنی')}
      ${leg(3, 22, 234, 'PDA', 'باز ماندن مجرای شریانی')}${leg(4, 22, 268, 'CoA', 'تنگی مادرزادی آئورت')}
      ${f(180, 302, 'تترالوژی فالو = VSD + تنگی ریوی + آئورت سوار + بطن راست ضخیم', { size: 9.5, fill: '#6b2f90', w: 700 })}`, 'نقص‌های مادرزادی قلب');
  };

  /* رده‌های فشار خون */
  A['bp-categories'] = () => {
    const rows = [['hypotension', 'افت فشار', 'کمتر از ۹۰/۶۰', '#3d6fc4', '#e8f0fd'], ['normal', 'طبیعی', 'کمتر از ۱۲۰/۸۰', '#3f8a05', '#e7f9d8'], ['elevated', 'بالا (پیش‌پرفشاری)', '۱۲۰ تا ۱۲۹ / کمتر از ۸۰', '#b88600', '#fff7d6'], ['hypertension 1', 'پرفشاری مرحله ۱', '۱۳۰ تا ۱۳۹ / ۸۰ تا ۸۹', '#d9730d', '#ffe9d3'], ['hypertension 2', 'پرفشاری مرحله ۲', '۱۴۰/۹۰ یا بیشتر', '#c8324c', '#fdecef']];
    return svg(360, 252, `${f(180, 18, 'فشار خون بزرگسالان (میلی‌متر جیوه)', { size: 11, fill: INK, w: 800 })}
      ${rows.map((r, i) => { const y = 30 + i * 43; return `<rect x="8" y="${y}" width="344" height="37" rx="11" fill="${r[4]}"/><rect x="8" y="${y}" width="8" height="37" rx="4" fill="${r[3]}"/>
        ${t(28, y + 16, r[0], { size: 10.5, anchor: 'start', fill: r[3], w: 900 })}${f(28, y + 31, r[1], { size: 9.5, anchor: 'start', fill: INK, w: 700 })}${f(342, y + 24, r[2], { size: 10.5, anchor: 'end', fill: r[3], w: 800 })}`; }).join('')}`, 'رده‌های فشار خون');
  };

  /* ---------- تشخیص، درمان و دارو ---------- */
  /* آزمون‌های قلب بر اساس آنچه می‌سنجند */
  A['dx-tools'] = () => {
    const box = (x, y, c, bg, icon, en, fa, items) => `<rect x="${x}" y="${y}" width="170" height="118" rx="14" fill="${bg}"/>${icon}${t(x + 85, y + 58, en, { size: 11, fill: c, w: 900 })}${f(x + 85, y + 73, fa, { size: 9.5, fill: INK, w: 700 })}${items.map((s, i) => t(x + 85, y + 91 + i * 13, s, { size: 9, fill: c, w: 700 })).join('')}`;
    const ecgI = (x, y) => `${trace(ecgPath(x + 50, y + 26, 70, 'normal', { k: 0.5 }), '#c8324c')}`;
    const sound = (x, y) => `${[0, 1, 2].map(i => `<path d="M${x + 70 + i * 9} ${y + 12} q8 14 0 28" stroke="#0b7a6c" stroke-width="2.4" fill="none"/>`).join('')}<rect x="${x + 50}" y="${y + 16}" width="16" height="20" rx="5" fill="#0b7a6c"/>`;
    const dye = (x, y) => `<path d="M${x + 60} ${y + 34} C${x + 74} ${y + 10} ${x + 96} ${y + 40} ${x + 112} ${y + 14}" stroke="#4a4a4a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M${x + 60} ${y + 34} C${x + 74} ${y + 10} ${x + 96} ${y + 40} ${x + 112} ${y + 14}" stroke="#9aa9b1" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    const tube = (x, y) => `<rect x="${x + 76}" y="${y + 8}" width="16" height="34" rx="6" fill="#fff" stroke="#8a5300" stroke-width="1.6"/><rect x="${x + 77}" y="${y + 22}" width="14" height="19" rx="5" fill="#c8324c"/>`;
    return svg(360, 252, `${box(184, 6, '#c8324c', '#fdecef', ecgI(184, 6), 'electrical', 'جریان برق قلب', ['ECG • Holter • stress test'])}
      ${box(6, 6, '#0b7a6c', '#e3f7f2', sound(6, 6), 'ultrasound', 'امواج صوتی', ['echocardiography • Doppler'])}
      ${box(184, 130, '#4a4a4a', '#eef1f3', dye(184, 130), 'x-ray + dye', 'پرتو و ماده حاجب', ['angiography • catheterization'])}
      ${box(6, 130, '#8a5300', '#fff1dc', tube(6, 130), 'blood tests', 'آزمایش خون', ['troponin • CK-MB • lipids • BNP'])}`, 'آزمون‌های قلب');
  };

  /* نقشه داروهای قلب: هر دارو کجا اثر می‌کند */
  A['drug-map'] = () => {
    const a = 'm' + (++UID);
    const chip = (x, y, en, fa, c, bg) => `<rect x="${x}" y="${y}" width="124" height="40" rx="12" fill="${bg}" stroke="${c}" stroke-width="1.2"/>${t(x + 62, y + 17, en, { size: 10, fill: c, w: 900 })}${f(x + 62, y + 32, fa, { size: 9, fill: INK, w: 700 })}`;
    const L = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#${a})"/>`;
    return svg(360, 312, `<defs>${marker(a, LINE)}</defs>
      <g transform="translate(180 66) scale(.66) translate(-104 0)">${heart(0, 0, 1)}</g>
      ${chip(230, 6, 'beta-blocker', 'کند کردن ضربان', '#c8324c', '#fdecef')}${L(228, 26, 196, 100, '#c8324c')}
      ${chip(6, 6, 'antiarrhythmic', 'نظم دادن ریتم', '#c8324c', '#fdecef')}${L(130, 26, 168, 100, '#c8324c')}
      ${chip(230, 92, 'digoxin', 'انقباض قوی‌تر', '#c8324c', '#fdecef')}${L(228, 112, 214, 140, '#c8324c')}
      ${chip(6, 92, 'nitroglycerin', 'گشاد کردن رگ و رفع آنژین', '#1272a3', '#e8f3fb')}${L(130, 112, 156, 130, '#1272a3')}
      ${chip(6, 172, 'anticoagulant', 'جلوگیری از لخته', '#7a1022', '#fbe4e8')}${chip(6, 218, 'thrombolytic', 'حل کردن لخته موجود', '#7a1022', '#fbe4e8')}
      ${chip(230, 172, 'statin', 'پایین آوردن کلسترول', '#9a5b00', '#fff1dc')}${chip(230, 218, 'diuretic', 'دفع آب و نمک اضافه', '#0b7a6c', '#e3f7f2')}
      <rect x="80" y="268" width="200" height="40" rx="12" fill="#eef0fd" stroke="#4f5bd5" stroke-width="1.2"/>${t(180, 285, 'antihypertensive', { size: 10, fill: '#4f5bd5', w: 900 })}${f(180, 300, 'ضدفشار خون: ACE inhibitor، ARB، CCB', { size: 9, fill: INK, w: 700 })}`, 'نقشه داروهای قلب');
  };

  /* کلسترول خوب و بد */
  A.lipids = () => {
    const a = 'm' + (++UID), b = 'm' + (++UID), g = 'g' + (++UID);
    const ball = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><circle cx="${cx - r * 0.3}" cy="${cy - r * 0.3}" r="${r * 0.3}" fill="#fff" opacity=".35"/>`;
    return svg(360, 252, `<defs>${marker(a, '#c8324c')}${marker(b, '#3f8a05')}${radial(g, '#fff3b0', '#f0c043', '50%')}</defs>
      <path d="M14 96 H346 V176 H14Z" fill="#f2a6ae"/><path d="M14 106 H346 V166 H14Z" fill="#e8495f"/>
      <path d="M120 166 C140 140 200 140 220 166Z" fill="url(#${g})"/>
      <path d="M300 24 C326 24 342 40 342 58 C342 76 322 84 300 80 C278 84 262 72 266 56 C270 36 284 24 300 24Z" fill="#a9622b"/>${f(304, 56, 'کبد', { size: 10, fill: '#fff', w: 800 })}
      ${ball(150, 132, 14, '#e8a23a')}${ball(196, 128, 14, '#e8a23a')}<path d="M80 120 L130 140" stroke="#c8324c" stroke-width="2" marker-end="url(#${a})"/>
      ${ball(250, 122, 9, '#58cc02')}<path d="M256 112 C270 94 280 86 290 82" stroke="#3f8a05" stroke-width="2" marker-end="url(#${b})"/>
      ${lab(92, 212, 'LDL', 'بد: رسوب در دیواره رگ', { size: 12, fill: '#c8324c' })}${lab(262, 212, 'HDL', 'خوب: بردن به کبد', { size: 12, fill: '#3f8a05' })}
      ${f(170, 162, 'پلاک', { size: 9.5, fill: '#8a5300', w: 800 })}
      ${f(180, 248, 'LDL باید پایین باشد (Low) و HDL بالا (High)', { size: 10, fill: '#4f5bd5', w: 700 })}`, 'کلسترول خوب و بد');
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
      ${step(1, 274, '#5b6b73', '#eef1f3', look(274), 'check', 'پاسخ و نفس؟')}${step(2, 184, '#1272a3', '#e8f3fb', phone(184), 'call', 'تماس با اورژانس')}
      ${step(3, 94, '#c8324c', '#fdecef', hands(94), 'CPR', 'فشردن قفسه سینه')}${step(4, 4, '#2f9e44', '#e7f9d8', aed(4), 'AED', 'شوک با دستگاه')}
      ${f(180, 176, 'در ایست قلبی هر دقیقه مهم است: تند و محکم وسط قفسه سینه فشار بده', { size: 9.5, fill: '#4f5bd5', w: 700 })}`, 'زنجیره احیا');
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
    id: 'lx', sym: 'Lx', name: 'زبان قلب', short: 'زبان', sub: 'ریشه‌های قلب، رگ و بیماری، پسوندها و پیشوندها، جمع و صفت، متخصصان و اختصارهای پرونده',
    color: '#4F5BD5', dark: '#3540A8', light: '#E3E6FB',
    levels: ['ریشه‌های قلب و رگ', 'پسوندها و پیشوندها', 'زبان پرونده'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: ریشه‌های قلب و رگ ================= */
      {
        id: 'lx1', title: 'ریشه‌های قلب', icon: '🫀', items: [
          L('هر واژه یک پازل است', `واژه‌های قلب و عروق از چند <b>قطعه ثابت</b> ساخته می‌شوند:<br>• <b>پیشوند</b> (prefix) در ابتدا: ${e('peri-')} = پیرامون<br>• <b>ریشه</b> (root) در وسط: ${e('cardi')} = قلب<br>• <b>پسوند</b> (suffix) در انتها: ${e('-itis')} = التهاب${fig('wordparts', '', 'pericarditis: التهاب پیرامون قلب، یعنی التهاب پریکارد.')}${memo('معنی را از آخر بخوان: اول پسوند (چه شده؟)، بعد پیشوند (کجا؟) و آخر ریشه (چه عضوی؟).')}`),
          L('سه ریشه برای قلب', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('cardi/o'), 'قلب', 'cardiac: قلبی'], [e('coron/o'), 'تاج؛ قلب', 'coronary: کرونری'], [e('my/o'), 'ماهیچه', 'myocardium: ماهیچه قلب']])}ریشه همراه <b>واکه رابط o</b> را <b>شکل ترکیبی</b> می‌گویند و با خط مورب می‌نویسند: ${e('cardi/o')}. اگر پسوند با حرف صدادار شروع شود، o حذف می‌شود: ${wb('cardi/o', '-ac')} = cardiac.`),
          M(`${e('<b>cardiac</b>')} یعنی…`, ['قلبی؛ مربوط به قلب', 'مربوط به رگ', 'مربوط به ریه', 'مربوط به خون'], 'cardi/o (قلب) + -ac (مربوط به).'),
          P('هر ریشه را به معنی‌اش وصل کن', [['cardi/o', 'قلب'], ['coron/o', 'تاج؛ قلب'], ['my/o', 'ماهیچه']]),
          L('از آخر بخوان', `${wb('cardi/o', '-logy')} ← «علمِ» + «قلب» = <b>cardiology</b> (قلب‌شناسی)<br>${wb('cardi/o', '-logist')} ← <b>متخصص</b> قلب<br>${wb('my/o', 'cardi/o', '-um')} ← «ساختار» + «ماهیچه» + «قلب» = <b>myocardium</b>، ماهیچه قلب${pearl('در پرونده‌ها به‌جای «قلبی-عروقی» کوتاه می‌نویسند CV؛ مثل «CV exam: normal».')}`),
          O(`قطعه‌های ${e('myocardium')} را به ترتیب نوشتن بچین`, ['my/o', 'cardi/o', '-um'], 'my/o (ماهیچه) + cardi/o (قلب) + -um (ساختار).'),
          T('coronary از ریشه‌ای به معنی «تاج» آمده است.', true, 'سرخرگ‌های کرونر مثل تاج دور قلب حلقه زده‌اند.'),
          B('در cardiologist، پسوند ___ یعنی «متخصص».', ['-logist', '-logy', '-ac'], '‎-logy علم است و ‎-logist متخصص آن علم.'),
          W('واژه‌ای بساز به معنی «علم قلب‌شناسی»', ['cardi/o', '-logy'], ['-logist', 'my/o', '-ac'], 'cardi/o (قلب) + -logy (علم) = cardiology.'),
          S('املای انگلیسی «متخصص قلب» را بنویس', 'cardiologist', 'cardi/o + -logist.', 'cardio…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx2', title: 'ریشه‌های رگ', icon: '🩸', items: [
          L('رگ با سه نام', `برای «رگ» سه ریشه داریم:${tbl([['ریشه', 'معنی', 'نمونه'], [e('angi/o'), 'رگ', 'angiography: رگ‌نگاری'], [e('vas/o'), 'رگ؛ مجرا', 'vasoconstriction: تنگ شدن رگ'], [e('vascul/o'), 'رگ', 'vascular: عروقی']])}${memo('angi/o را با «آنژیو» به خاطر بسپار: همان آنژیوگرافی که در بیمارستان شنیده‌ای!')}`),
          L('سرخرگ یا سیاهرگ؟', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('arteri/o، arter/o'), 'سرخرگ (شریان)', 'arterial: سرخرگی'], [e('arteriol/o'), 'سرخرگ کوچک', 'arteriole'], [e('ven/o، phleb/o'), 'سیاهرگ (ورید)', 'venous، phlebitis'], [e('aort/o'), 'آئورت', 'aortic: آئورتی']])}${vs(['artery', 'خون را از قلب دور می‌کند'], ['vein', 'خون را به قلب برمی‌گرداند'])}${memo('Artery = Away from the heart: هر دو با A شروع می‌شوند.')}`),
          M('کدام ریشه یعنی «سیاهرگ»؟', ['phleb/o', 'arteri/o', 'angi/o', 'aort/o'], 'phleb/o و ven/o هر دو یعنی سیاهرگ.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['angi/o', 'رگ'], ['arteri/o', 'سرخرگ'], ['ven/o', 'سیاهرگ'], ['aort/o', 'آئورت']]),
          T('arteries خون را از قلب دور می‌کنند.', true, 'Artery = Away؛ سیاهرگ‌ها خون را به قلب برمی‌گردانند.'),
          M(`${e('<b>phlebitis</b>')} یعنی…`, ['التهاب سیاهرگ', 'التهاب سرخرگ', 'لخته در قلب', 'تنگی آئورت'], 'phleb/o (سیاهرگ) + -itis (التهاب).'),
          B('در intravenous، ریشه ven/o یعنی ___.', ['سیاهرگ', 'سرخرگ', 'قلب'], 'intra- (درون) + ven/o (سیاهرگ) + -ous: درون‌سیاهرگی.'),
          W('واژه‌ای بساز به معنی «مربوط به رگ‌ها»', ['vascul/o', '-ar'], ['angi/o', '-itis', 'phleb/o'], 'vascul/o + -ar = vascular.'),
          S('املای انگلیسی «آئورت» را بنویس', 'aorta', 'aort/o؛ صفتش aortic.', 'aor…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx3', title: 'ریشه‌های بیماری', icon: '🧱', items: [
          L('رگی که تنگ و سفت می‌شود', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('ather/o'), 'پلاک چربی', 'atheroma: توده چربی'], [e('scler/o'), 'سختی', 'arteriosclerosis'], [e('sten/o'), 'تنگی', 'stenosis: تنگی'], [e('isch/o'), 'بازداشتن', 'ischemia: کم‌خونی موضعی']])}${vs(['arteri/o', 'سرخرگ'], ['ather/o', 'پلاک چربی'])}${memo('ather/o را با «آش» به خاطر بسپار: پلاک چربی مثل آشِ غلیظ به دیواره رگ می‌چسبد!')}`),
          M('کدام ریشه یعنی «پلاک چربی»؟', ['ather/o', 'arteri/o', 'scler/o', 'sten/o'], 'atherosclerosis = سخت شدن سرخرگ با پلاک چربی.'),
          L('لخته، آمبول، کبودی و واریس', `${tbl([['ریشه', 'معنی', 'نمونه'], [e('thromb/o'), 'لخته', 'thrombosis: لخته شدن'], [e('embol/o'), 'درپوش، آمبول', 'embolism: بسته شدن رگ'], [e('cyan/o'), 'آبی، کبود', 'cyanosis: کبودی'], [e('varic/o'), 'سیاهرگ گشاد', 'varicose: واریسی']])}${pearl('cyanosis کبودی لب و ناخن است و یعنی خون اکسیژن کافی ندارد؛ نشانه‌ای که هیچ‌وقت نباید نادیده گرفت.')}`),
          P('هر ریشه را به معنی‌اش وصل کن', [['thromb/o', 'لخته'], ['cyan/o', 'آبی، کبود'], ['scler/o', 'سختی'], ['isch/o', 'بازداشتن']]),
          T(`${e('cyanosis')} یعنی کبودی پوست از کمبود اکسیژن.`, true, 'cyan/o (آبی) + -osis (حالت غیرطبیعی).'),
          M(`${e('<b>thrombosis</b>')} یعنی…`, ['تشکیل لخته در رگ', 'گشاد شدن رگ', 'التهاب قلب', 'سخت شدن سرخرگ'], 'thromb/o (لخته) + -osis.'),
          B('در ischemia، ریشه isch/o یعنی ___.', ['بازداشتن', 'لخته', 'سختی'], 'isch/o + -emia: «بازداشتن خون»؛ کم‌خونی موضعی.'),
          W('واژه‌ای بساز به معنی «توده پلاک چربی»', ['ather/o', '-oma'], ['thromb/o', '-itis', 'sten/o'], 'ather/o + -oma = atheroma.'),
          L('مرور سطح «ریشه‌های قلب و رگ»', recap(['قلب: cardi/o، coron/o؛ ماهیچه: my/o؛ myocardium یعنی ماهیچه قلب', 'رگ: angi/o، vas/o، vascul/o • سرخرگ: arteri/o • سیاهرگ: ven/o و phleb/o • آئورت: aort/o', 'Artery خون را Away (دور) از قلب می‌برد؛ vein خون را به قلب برمی‌گرداند', 'بیماری: ather/o پلاک • scler/o سختی • sten/o تنگی • thromb/o لخته • embol/o آمبول • cyan/o کبود'])),
          N('r2m:lx')
        ]
      },

      /* ================= سطح ۲: پسوندها و پیشوندها ================= */
      {
        id: 'lx4', title: 'پسوندهای بیماری', icon: '🩹', items: [
          L('چه شده؟ پسوند می‌گوید', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-megaly'), 'بزرگی', 'cardiomegaly'], [e('-stenosis'), 'تنگی', 'aortostenosis'], [e('-sclerosis'), 'سخت شدن', 'arteriosclerosis'], [e('-itis'), 'التهاب', 'endocarditis'], [e('-pathy'), 'بیماری', 'cardiomyopathy'], [e('-emia'), 'حالت خون', 'ischemia']])}`),
          M(`${e('<b>cardiomegaly</b>')} یعنی…`, ['بزرگی قلب', 'التهاب قلب', 'سخت شدن قلب', 'تنگی دریچه'], 'cardi/o + -megaly (بزرگی).'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-megaly', 'بزرگی'], ['-stenosis', 'تنگی'], ['-sclerosis', 'سخت شدن'], ['-pathy', 'بیماری']]),
          L('سخت شدن یا تنگ شدن؟', `${vs(['-sclerosis', 'سخت و بی‌انعطاف شدن دیواره'], ['-stenosis', 'باریک شدن مجرا یا دریچه'])}${wb('arteri/o', '-sclerosis')} ← سخت شدن سرخرگ‌ها<br>${wb('aort/o', '-stenosis')} ← تنگی آئورت${memo('stenosis با «تنگ» و sclerosis با «سنگ» قافیه دارد: یکی تنگ می‌شود، دیگری مثل سنگ سفت.')}`),
          T('aortostenosis یعنی سخت شدن آئورت.', false, 'نادرست؛ ‎-stenosis تنگی است. سخت شدن ‎-sclerosis است.'),
          L('دو پسوند دیگر', `• ${wb('vas/o', '-spasm')} ← <b>vasospasm</b>: گرفتگی ناگهانی رگ؛ ${e('-spasm')} یعنی انقباض ناگهانی و غیرارادی<br>• ${wb('cyan/o', '-osis')} ← <b>cyanosis</b>: ${e('-osis')} یعنی حالت غیرطبیعی${pearl('cardiomyopathy یعنی خود ماهیچه قلب بیمار شده (‎-pathy = بیماری)؛ ولی myocarditis فقط التهاب آن است.')}`),
          M('کدام واژه یعنی «بیماری ماهیچه قلب»؟', ['cardiomyopathy', 'myocarditis', 'cardiomegaly', 'cardiology'], 'cardi/o + my/o + -pathy.'),
          B('در vasospasm، پسوند ___ یعنی «انقباض ناگهانی».', ['-spasm', '-stenosis', '-osis'], 'vas/o + -spasm.'),
          W('واژه‌ای بساز به معنی «التهاب پوشش درونی قلب»', ['endo-', 'cardi/o', '-itis'], ['peri-', '-pathy', 'my/o'], 'endo- (درون) + cardi/o + -itis = endocarditis.'),
          S('املای انگلیسی «بزرگی قلب» را بنویس', 'cardiomegaly', 'cardi/o + -megaly.', 'cardio…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx5', title: 'پسوندهای تشخیص و درمان', icon: '🔧', items: [
          L('سه پسوند ثبت', `${fig('gram-graph')}${tbl([['پسوند', 'معنی', 'نمونه'], [e('-gram'), 'ثبت، نوار، تصویر', 'electrocardiogram'], [e('-graph'), 'دستگاه ثبت', 'electrocardiograph'], [e('-graphy'), 'فرایند ثبت', 'echocardiography']])}`),
          M('خودِ برگه نوار قلب کدام است؟', ['electrocardiogram', 'electrocardiograph', 'electrocardiography', 'cardiology'], '‎-gram یعنی نتیجه ثبت.'),
          L('دیدن و اندازه گرفتن', `• ${e('-scope')}: ابزار دیدن یا شنیدن؛ ${wb('steth/o', '-scope')} = گوشی پزشکی (steth/o = سینه)<br>• ${e('-scopy')}: دیدن و معاینه؛ angioscopy = دیدن درون رگ<br>• ${e('-meter')}: ابزار اندازه‌گیری؛ ${wb('sphygm/o', 'man/o', '-meter')} = فشارسنج (sphygm/o = نبض، man/o = فشار)`),
          P('هر پسوند را به معنی‌اش وصل کن', [['-scope', 'ابزار دیدن یا شنیدن'], ['-meter', 'ابزار اندازه‌گیری'], ['-graphy', 'فرایند ثبت'], ['-gram', 'نتیجه ثبت']]),
          L('برداشتن، برش یا ترمیم؟', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-ectomy'), 'برداشتن', 'endarterectomy'], [e('-tomy'), 'برش', 'phlebotomy'], [e('-plasty'), 'ترمیم', 'angioplasty'], [e('-lysis'), 'حل کردن', 'thrombolysis'], [e('-centesis'), 'کشیدن مایع با سوزن', 'pericardiocentesis']])}${memo('‎-ectomy «اِک!»: بیرون انداختن. ‎-tomy فقط برش است و ‎-plasty «پلاستیک»: درست کردن شکل.')}`),
          M(`${e('<b>angioplasty</b>')} یعنی…`, ['ترمیم رگ', 'برداشتن رگ', 'برش رگ', 'ثبت تصویر رگ'], 'angi/o (رگ) + -plasty (ترمیم).'),
          T('thrombolysis یعنی حل کردن لخته.', true, 'thromb/o (لخته) + -lysis (حل کردن).'),
          B('در phlebotomy، پسوند ___ یعنی «برش».', ['-tomy', '-ectomy', '-plasty'], 'phleb/o + -tomy: برش سیاهرگ برای خون‌گیری.'),
          W('واژه‌ای بساز به معنی «ثبت تصویر رگ‌ها»', ['angi/o', '-graphy'], ['-gram', 'phleb/o', '-plasty'], 'angi/o + -graphy = angiography.'),
          S('املای انگلیسی «گوشی پزشکی» را بنویس', 'stethoscope', 'steth/o + -scope.', 'stetho…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx6', title: 'پیشوندها', icon: '📍', items: [
          L('کند یا تند؟', `${vs(['brady-', 'کند: bradycardia، ضربان کمتر از ۶۰'], ['tachy-', 'تند: tachycardia، ضربان بیشتر از ۱۰۰'])}${fig('rate-strips')}${memo('brady را با «برادر تنبل» و tachy را با «تاکسی» به خاطر بسپار: یکی آهسته، دیگری تند!')}`),
          M(`${e('<b>bradycardia</b>')} یعنی…`, ['ضربان کند', 'ضربان تند', 'ضربان نامنظم', 'بزرگی قلب'], 'brady- (کند) + -cardia (حالت قلب).'),
          L('لایه‌ها با پیشوند', `${tbl([['پیشوند', 'معنی', 'نمونه'], [e('endo-'), 'درون', 'endocardium: پوشش درونی'], [e('epi-'), 'روی', 'epicardium: لایه بیرونی'], [e('peri-'), 'پیرامون', 'pericardium: کیسه دور قلب'], [e('inter-'), 'میان', 'interventricular: میان دو بطن'], [e('intra-'), 'درون', 'intravenous: درون سیاهرگ']])}`),
          P('هر پیشوند را به معنی‌اش وصل کن', [['endo-', 'درون'], ['epi-', 'روی'], ['peri-', 'پیرامون'], ['inter-', 'میان']]),
          L('بیش، کم، بدون و ضد', `• ${e('hyper-')} بیش از حد: hypertension، فشار خون بالا<br>• ${e('hypo-')} کم: hypotension، افت فشار<br>• ${e('a-، an-')} بدون: asystole، نبودِ انقباض؛ arrhythmia، نبودِ نظم<br>• ${e('anti-')} ضد: anticoagulant، ضدانعقاد<br>• ${e('de-')} برداشتن: defibrillation، از بین بردن فیبریلاسیون${pearl('در arrhythmia، پیشوند a- و ریشه rrhythm (ریتم) با دو r نوشته می‌شوند: a + rrhythm + ia.')}`),
          M('کدام واژه یعنی «فشار خون بالا»؟', ['hypertension', 'hypotension', 'hyperlipidemia', 'tachycardia'], 'hyper- (بیش از حد) + -tension (فشار).'),
          T('interventricular یعنی «درون بطن».', false, 'نادرست؛ inter- یعنی میان. «درون» intra- است.'),
          B('پیشوند ___ در anticoagulant یعنی «ضد».', ['anti-', 'a-', 'de-'], 'anti- = ضد؛ anticoagulant جلوی انعقاد خون را می‌گیرد.'),
          L('مرور سطح «پسوندها و پیشوندها»', recap(['بیماری: ‎-megaly بزرگی • ‎-stenosis تنگی • ‎-sclerosis سخت شدن • ‎-itis التهاب • ‎-pathy بیماری • ‎-emia حالت خون', 'ثبت: ‎-gram نوار • ‎-graph دستگاه • ‎-graphy فرایند؛ ‎-scope ابزار دیدن و ‎-meter ابزار اندازه‌گیری', 'درمان: ‎-ectomy برداشتن • ‎-tomy برش • ‎-plasty ترمیم • ‎-lysis حل کردن • ‎-centesis کشیدن مایع', 'پیشوند: brady- کند • tachy- تند • endo-، epi-، peri- برای لایه‌ها • inter- میان • hyper- و hypo- • anti- ضد'])),
          N('m2r:lx')
        ]
      },

      /* ================= سطح ۳: زبان پرونده ================= */
      {
        id: 'lx7', title: 'مفرد، جمع و صفت', icon: '📚', items: [
          L('جمع‌هایی که s نمی‌گیرند', `واژه‌های لاتین و یونانی قلب و عروق با قاعده خودشان جمع بسته می‌شوند:${fig('plurals')}${memo('«US» رفت، «I» آمد: thrombus → thrombi. «UM» رفت، «A» آمد: atrium → atria.')}`),
          M('جمع atrium کدام است؟', ['atria', 'atriums', 'atrii', 'atriae'], '‎-um → ‎-a.'),
          P('هر مفرد را به جمعش وصل کن', [['thrombus', 'thrombi'], ['septum', 'septa'], ['stenosis', 'stenoses'], ['varix', 'varices']]),
          L('صفت‌های پرکاربرد', `${tbl([['اسم', 'صفت', 'معنی صفت'], ['atrium', 'atrial', 'دهلیزی'], ['ventricle', 'ventricular', 'بطنی'], ['valve', 'valvular', 'دریچه‌ای'], ['vein', 'venous', 'سیاهرگی'], ['artery', 'arterial', 'سرخرگی'], ['septum', 'septal', 'دیواره‌ای']])}${pearl('در پرونده «atrial fibrillation» یعنی لرزش دهلیزها و «ventricular septal defect» یعنی نقص در دیواره میان بطن‌ها.')}`),
          M(`صفتِ ${e('vein')} کدام است؟`, ['venous', 'veinal', 'venular', 'veinous'], 'ven/o + -ous = venous.'),
          T('جمع embolus می‌شود emboli.', true, '‎-us → ‎-i.'),
          B('جمع vena cava می‌شود venae ___.', ['cavae', 'cavas', 'cavi'], '‎-a → ‎-ae.'),
          W('واژه‌ای بساز به معنی «مربوط به دریچه»', ['valvul/o', '-ar'], ['valv/o', '-itis', 'ven/o'], 'valvul/o + -ar = valvular.'),
          S('املای انگلیسی «دهلیزها» (جمع) را بنویس', 'atria', 'مفرد: atrium.', 'atr…'),
          N('sp:lx')
        ]
      },
      {
        id: 'lx8', title: 'متخصصان قلب', icon: '👩‍⚕️', items: [
          L('تیم قلب', `${tbl([['عنوان', 'کار'], ['cardiologist', 'تشخیص و درمان بیماری‌های قلب بزرگسالان'], ['pediatric cardiologist', 'قلب نوزادان، کودکان و نوجوانان'], ['cardiac surgeon', 'جراحی قلب: بای‌پس، تعویض دریچه، پیوند'], ['electrophysiologist', 'ریتم و برق قلب؛ درمان آریتمی'], ['cardiac sonographer', 'انجام اکوکاردیوگرافی'], ['cardiovascular technologist', 'نوار قلب، تست ورزش، کمک در کاتتریزاسیون'], ['perfusionist', 'کار با دستگاه قلب-ریه در عمل جراحی']])}`),
          M('بیمار ۸ ساله با بیماری مادرزادی قلب نزد چه کسی می‌رود؟', ['pediatric cardiologist', 'cardiac surgeon', 'perfusionist', 'cardiac sonographer'], 'pediatric = کودکان.'),
          P('هر عنوان را به کارش وصل کن', [['cardiac surgeon', 'جراحی بای‌پس'], ['perfusionist', 'دستگاه قلب-ریه'], ['cardiac sonographer', 'اکوی قلب'], ['electrophysiologist', 'درمان آریتمی']]),
          L('ریشه‌ها راز عنوان‌ها', `• ${wb('cardi/o', '-logist')} ← متخصص قلب<br>• ${wb('electr/o', '-logist')} و physi/o ← الکتروفیزیولوژیست: متخصص «برق و کارکرد» قلب<br>• ${e('son/o')} = صدا ← sonographer: کسی که با امواج صوتی تصویر می‌گیرد${pearl('بخش مراقبت ویژه قلب را CCU می‌نامند: coronary care unit؛ بیمار سکته قلبی آن‌جا بستری می‌شود.')}`),
          M('اختصار CCU یعنی…', ['بخش مراقبت ویژه قلب', 'نارسایی احتقانی قلب', 'بیماری سرخرگ کرونر', 'اتاق عمل قلب'], 'coronary care unit.'),
          T('perfusionist در عمل جراحی قلب باز، دستگاه قلب-ریه را می‌گرداند.', true, 'perfusion = خون‌رسانی.'),
          B('در sonographer، ریشه son/o یعنی ___.', ['صدا', 'تصویر', 'قلب'], 'son/o = صدا؛ سونوگرافی با امواج صوتی است.'),
          M('کدام متخصص ضربان‌ساز و ابلیشن را برای آریتمی انجام می‌دهد؟', ['electrophysiologist', 'cardiac sonographer', 'perfusionist', 'pediatric cardiologist'], 'متخصص برق قلب.'),
          S('املای انگلیسی «قلب‌شناسی» را بنویس', 'cardiology', 'cardi/o + -logy.', 'cardi…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx9', title: 'اختصارهای پرونده', icon: '📋', items: [
          L('پرونده با اختصار نوشته می‌شود', `${tbl([['اختصار', 'شکل کامل', 'معنی'], ['CP', 'chest pain', 'درد قفسه سینه'], ['SOB', 'shortness of breath', 'تنگی نفس'], ['DOE', 'dyspnea on exertion', 'تنگی نفس هنگام فعالیت'], ['HTN', 'hypertension', 'پرفشاری خون'], ['BP', 'blood pressure', 'فشار خون'], ['HR', 'heart rate', 'ضربان قلب'], ['bpm', 'beats per minute', 'ضربان در دقیقه'], ['mmHg', 'millimeters of mercury', 'میلی‌متر جیوه']])}`),
          M('در پرونده نوشته شده «c/o CP and SOB». شکایت بیمار چیست؟', ['درد قفسه سینه و تنگی نفس', 'سرفه و تب', 'فشار خون بالا و سرگیجه', 'تپش قلب و غش'], 'CP = chest pain؛ SOB = shortness of breath.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['HTN', 'پرفشاری خون'], ['HR', 'ضربان قلب'], ['DOE', 'تنگی نفس هنگام فعالیت'], ['bpm', 'ضربان در دقیقه']]),
          L('یک یادداشت واقعی', `مردی ۵۶ ساله با سابقه <b>HTN</b> از <b>CP</b> هنگام بالا رفتن از پله و <b>SOB</b> شکایت دارد. <b>BP</b> او ۱۸۰/۱۱۰ <b>mmHg</b> و <b>HR</b> ۱۱۰ <b>bpm</b> است. در اورژانس <b>ECG</b> گرفته می‌شود و در <b>CCU</b> بستری می‌شود.${pearl('واحد فشار خون mmHg است: فشار را با ارتفاع ستون جیوه می‌سنجیدند. Hg نماد شیمیایی جیوه است.')}`),
          M('در این یادداشت، HR ۱۱۰ bpm یعنی…', ['ضربان تند (tachycardia)', 'ضربان کند (bradycardia)', 'فشار طبیعی', 'تنفس تند'], 'بیش از ۱۰۰ ضربان در دقیقه.', [['بیمار', 'مرد ۵۶ ساله'], ['سابقه', 'HTN'], ['BP', '180/110 mmHg'], ['HR', '110 bpm']]),
          T('mmHg واحد اندازه‌گیری فشار خون است.', true, 'millimeters of mercury.'),
          B('ECG و EKG هر دو یعنی نوار ___.', ['قلب', 'مغز', 'ریه'], 'electrocardiogram.'),
          M('«IV fluids» یعنی مایع از چه راهی داده می‌شود؟', ['درون سیاهرگ', 'زیر زبان', 'درون عضله', 'از راه دهان'], 'IV = intravenous.'),
          L('مرور سطح «زبان پرونده»', recap(['جمع: ‎-um → ‎-a (atria، septa) • ‎-us → ‎-i (thrombi، emboli) • ‎-is → ‎-es (stenoses) • ‎-ix → ‎-ices (varices)', 'صفت: atrial، ventricular، valvular، venous، arterial، septal، coronary، vascular', 'تیم قلب: cardiologist، pediatric cardiologist، cardiac surgeon، electrophysiologist، sonographer، perfusionist', 'پرونده: CP، SOB، DOE، HTN، BP، HR، bpm، mmHg، IV، CCU، ECG'])),
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
    id: 'an', sym: 'Ana', name: 'ساختمان قلب', short: 'ساختمان', sub: 'جای قلب، لایه‌های دیواره و پریکارد، چهار حفره و چهار دریچه، رگ‌های بزرگ، مسیر خون و سرخرگ‌های کرونر',
    color: '#E03131', dark: '#A61E1E', light: '#FDE4E4',
    levels: ['جا و دیواره قلب', 'حفره‌ها و دریچه‌ها', 'مسیر خون و کرونرها'],
    gens: EA.genIds('an'),
    lessons: [
      /* ================= سطح ۱: جا و دیواره قلب ================= */
      {
        id: 'an1', title: 'قلب کجاست؟', icon: '📍', items: [
          L('پمپی به اندازه مشت', `قلب یک <b>پمپ ماهیچه‌ای</b> به اندازه مشتِ بسته است که روزانه حدود ۱۰۰ هزار بار می‌تپد.<br>جای آن <b>mediastinum</b> (میان‌سینه) است: فضای میان دو ریه، پشت جناغ (sternum) و روی diaphragm (دیافراگم؛ پرده میان سینه و شکم).${fig('heart-chest')}${memo('mediastinum را «میان‌ستون» بخوان: media یعنی میان؛ همان ستونِ وسطِ قفسه سینه که قلب در آن نشسته است.')}`),
          M('قلب در کدام فضای قفسه سینه قرار دارد؟', ['mediastinum', 'pleural cavity', 'abdominal cavity', 'pericardial cavity'], 'mediastinum فضای میان دو ریه است.'),
          L('نوک قلب به چپ', `قلب کمی کج نشسته است: <b>دو سوم</b> آن در سمت چپ خط وسط بدن است و نوک پایینی‌اش، یعنی <b>apex</b>، به سمت چپ و پایین اشاره می‌کند. بخش پهن بالایی را <b>base</b> (قاعده) می‌نامند؛ رگ‌های بزرگ از همین‌جا وارد و خارج می‌شوند.${fig('heart-location', '', 'جای قلب در mediastinum؛ میان دو ریه و روی دیافراگم. apex در پایین و سمت چپ است.')}${pearl('پزشک ضربان apex را در فضای پنجم بین‌دنده‌ای چپ با گوشی می‌شنود؛ به آن apical pulse می‌گویند.')}`),
          T('apex قلب به سمت راست بدن اشاره می‌کند.', false, 'نادرست؛ apex به سمت چپ و پایین است.', F('heart-location')),
          P('هر واژه را به معنی‌اش وصل کن', [['mediastinum', 'میان‌سینه'], ['apex', 'نوک قلب'], ['sternum', 'جناغ'], ['diaphragm', 'پرده میان سینه و شکم']]),
          M('بیشتر حجم قلب در کدام سمت خط وسط بدن است؟', ['چپ', 'راست', 'دقیقاً وسط', 'پشت ستون مهره'], 'حدود دو سوم قلب در سمت چپ است.'),
          B('رگ‌های بزرگ از ___ قلب وارد و خارج می‌شوند.', ['قاعده (base)', 'نوک (apex)', 'دیواره بین‌بطنی'], 'base بخش پهن بالایی قلب است.'),
          T('mediastinum میان دو ریه قرار دارد.', true, 'medi- یعنی میان؛ قلب، نای و مری در این فضا هستند.'),
          S('املای انگلیسی «نوک قلب» را بنویس', 'apex', 'apical pulse یعنی نبض نوک قلب.', 'ap…'),
          N('t2f:an')
        ]
      },
      {
        id: 'an2', title: 'سه لایه دیواره', icon: '🧱', items: [
          L('دیواره قلب سه لایه دارد', `از درون به بیرون:${tbl([['لایه', 'ساختار واژه', 'ویژگی'], [e('endocardium'), 'endo- + cardi/o', 'پوشش نازک و صاف درون حفره‌ها و دریچه‌ها'], [e('myocardium'), 'my/o + cardi/o', 'ماهیچه قلب؛ ضخیم‌ترین لایه'], [e('epicardium'), 'epi- + cardi/o', 'لایه بیرونی؛ روی ماهیچه']])}${fig('heart-wall', '', 'myocardium میانِ endocardium (درون) و epicardium (بیرون) است.')}`),
          M('ماهیچه قلب کدام لایه است؟', ['myocardium', 'endocardium', 'epicardium', 'pericardium'], 'my/o یعنی ماهیچه.'),
          L('پیشوند، جای لایه را می‌گوید', `${wb('endo-', 'cardi/o', '-um')} ← درونِ قلب<br>${wb('my/o', 'cardi/o', '-um')} ← ماهیچه قلب<br>${wb('epi-', 'cardi/o', '-um')} ← روی قلب${fig('wall-layers')}${memo('از درون به بیرون: «اِندو، مایو، اِپی» مثل «اول، میان، بیرون». در الفبای انگلیسی هم E، M و بعد دوباره E!')}`),
          O('لایه‌های دیواره قلب را از درون به بیرون بچین', ['endocardium', 'myocardium', 'epicardium'], 'endo- درون، my/o ماهیچه، epi- روی.'),
          P('هر لایه را به ویژگی‌اش وصل کن', [['endocardium', 'پوشش صاف درون حفره‌ها'], ['myocardium', 'لایه ماهیچه‌ای ضخیم'], ['epicardium', 'لایه بیرونی روی ماهیچه']]),
          L('وقتی لایه‌ها بیمار می‌شوند', `${vs(['endocarditis', 'التهاب پوشش درونی؛ اغلب دریچه‌ها را درگیر می‌کند'], ['myocarditis', 'التهاب ماهیچه قلب؛ اغلب پس از عفونت ویروسی'])}${fig('heart-layers', '', 'endocardium و myocardium؛ epicardium همان لایه احشایی پریکارد است.')}${pearl('endocarditis معمولاً میکروبی است و روی دریچه‌ها توده‌های کوچک (vegetation) می‌سازد؛ برای همین بیماران دریچه‌ای پیش از کشیدن دندان گاهی آنتی‌بیوتیک می‌گیرند.')}`),
          T('endocarditis التهاب لایه بیرونی قلب است.', false, 'نادرست؛ endo- یعنی درون. التهاب پوشش درونی است.'),
          B('در myocardium، ریشه ___ یعنی «ماهیچه».', ['my/o', 'cardi/o', 'endo-'], 'my/o = ماهیچه.'),
          W('واژه‌ای بساز به معنی «لایه بیرونی قلب»', ['epi-', 'cardi/o', '-um'], ['endo-', 'my/o', '-itis'], 'epi- (روی) + cardi/o + -um = epicardium.'),
          S('املای انگلیسی «ماهیچه قلب» را بنویس', 'myocardium', 'my/o + cardi/o + -um.', 'myo…'),
          N('f2t:an')
        ]
      },
      {
        id: 'an3', title: 'کیسه دور قلب', icon: '👜', items: [
          L('pericardium: کیسه‌ای دولایه', `قلب درون کیسه‌ای به نام <b>pericardium</b> (peri- = پیرامون) است:<br>• <b>fibrous pericardium</b>: لایه بیرونی محکم و فیبری<br>• <b>parietal pericardium</b>: لایه جداری؛ سطح درونی کیسه<br>• <b>visceral pericardium</b>: لایه احشایی که به خود قلب چسبیده؛ همان epicardium${fig('pericardium', '', 'مثل مشتی که در بادکنک فرو می‌رود: قلب در pericardium فرو رفته و دو لایه دور آن ساخته است.')}`),
          M('لایه احشایی پریکارد (visceral pericardium) همان کدام لایه است؟', ['epicardium', 'endocardium', 'myocardium', 'fibrous pericardium'], 'لایه‌ای که به قلب چسبیده، epicardium است.'),
          L('حفره و مایع پریکارد', `میان لایه جداری و احشایی فضای باریکی است به نام <b>pericardial cavity</b>. در آن چند میلی‌لیتر <b>pericardial fluid</b> (مایع پریکارد) هست تا قلب هنگام تپیدن بی‌اصطکاک بلغزد.${vs(['parietal', 'جداری: دیواره کیسه'], ['visceral', 'احشایی: چسبیده به خود اندام'])}${memo('parietal را با «پرده دیوار» (wall) و visceral را با «وسط اندام» (viscera) به خاطر بسپار.')}`),
          P('هر بخش را به توضیحش وصل کن', [['fibrous pericardium', 'لایه بیرونی محکم'], ['parietal pericardium', 'لایه جداری'], ['visceral pericardium', 'لایه چسبیده به قلب'], ['pericardial fluid', 'مایع لغزنده میان لایه‌ها']]),
          T('مایع پریکارد اصطکاک میان لایه‌ها را کم می‌کند.', true, 'قلب بی‌اصطکاک در کیسه می‌لغزد.'),
          L('وقتی کیسه پر می‌شود', `• <b>pericarditis</b>: التهاب پریکارد؛ درد تیز سینه که با خم شدن به جلو کمتر می‌شود<br>• <b>cardiac tamponade</b>: جمع شدن مایع یا خون در حفره پریکارد که قلب را می‌فشارد و نمی‌گذارد پر شود<br>• درمان فوری: <b>pericardiocentesis</b>، کشیدن مایع با سوزن (‎-centesis)${pearl('در tamponade صداهای قلب دور و خفه شنیده می‌شوند، چون مایع میان قلب و گوشی پزشکی فاصله انداخته است.')}`),
          M('کشیدن مایع از حفره پریکارد با سوزن چه نام دارد؟', ['pericardiocentesis', 'pericarditis', 'pericardiectomy', 'cardiac tamponade'], 'pericardi/o + -centesis.'),
          B('فشرده شدن قلب با مایع درون حفره پریکارد را ___ می‌گویند.', ['cardiac tamponade', 'cardiac arrest', 'cardiac output'], 'tamponade یعنی فشرده شدن با «درپوش» مایع.'),
          W('واژه‌ای بساز به معنی «التهاب پیرامون قلب»', ['peri-', 'cardi/o', '-itis'], ['endo-', '-centesis', 'my/o'], 'peri- + cardi/o + -itis = pericarditis.'),
          L('مرور سطح «جا و دیواره قلب»', recap(['قلب در mediastinum است؛ دو سوم آن در چپ و apex به چپ و پایین', 'دیواره از درون به بیرون: endocardium → myocardium → epicardium', 'pericardium: لایه fibrous، لایه parietal و لایه visceral (همان epicardium)', 'pericardial cavity و مایعش؛ pericarditis، cardiac tamponade و pericardiocentesis'])),
          N('t2f:an')
        ]
      },

      /* ================= سطح ۲: حفره‌ها و دریچه‌ها ================= */
      {
        id: 'an4', title: 'چهار حفره', icon: '🏠', items: [
          L('خانه‌ای با چهار اتاق', `قلب چهار حفره دارد:<br>• دو <b>atrium</b> (دهلیز؛ جمع: atria) در بالا که خون را <b>دریافت</b> می‌کنند<br>• دو <b>ventricle</b> (بطن) در پایین که خون را <b>بیرون می‌فرستند</b>${fig('chambers')}${memo('atrium یعنی «سرسرا»: خون اول وارد سرسرا می‌شود، بعد به اتاق اصلی (ventricle) می‌رود.')}`),
          M('کدام حفره‌ها خون را به بیرون از قلب پمپ می‌کنند؟', ['ventricles', 'atria', 'septa', 'auricles'], 'بطن‌ها پمپ‌های اصلی‌اند.'),
          L('دیواره میانی و اختصارها', `<b>septum</b> (دیواره) قلب را به دو نیمه راست و چپ تقسیم می‌کند:<br>• <b>interatrial septum</b>: میان دو دهلیز<br>• <b>interventricular septum</b>: میان دو بطن${fig('chambers-book', '', 'RA و RV در سمت راست بیمار (چپ تصویر)؛ LA و LV در سمت چپ بیمار. septum میان آن‌هاست.')}${tbl([['اختصار', 'معنی'], ['RA', 'right atrium: دهلیز راست'], ['RV', 'right ventricle: بطن راست'], ['LA', 'left atrium: دهلیز چپ'], ['LV', 'left ventricle: بطن چپ']])}`),
          P('هر اختصار را به حفره‌اش وصل کن', [['RA', 'دهلیز راست'], ['RV', 'بطن راست'], ['LA', 'دهلیز چپ'], ['LV', 'بطن چپ']]),
          T('interventricular septum میان دو دهلیز قرار دارد.', false, 'نادرست؛ میان دو بطن است. میان دهلیزها interatrial septum است.'),
          L('چرا بطن چپ ضخیم‌تر است؟', `${vs(['right ventricle', 'خون را فقط تا ریه‌ها می‌فرستد؛ دیواره نازک‌تر'], ['left ventricle', 'خون را به همه بدن می‌فرستد؛ ضخیم‌ترین دیواره'])}${fig('heart-exterior', '', 'نمای بیرونی: right atrium و right ventricle در سمت راست بیمار؛ left ventricle بخش بزرگی از نوک قلب را می‌سازد.')}${pearl('در فشار خون بالای طولانی، بطن چپ برای غلبه بر فشار ضخیم می‌شود: left ventricular hypertrophy یا LVH که در نوار قلب و اکو دیده می‌شود.')}`),
          M('ضخیم‌ترین دیواره ماهیچه‌ای قلب مال کدام حفره است؟', ['left ventricle', 'right ventricle', 'left atrium', 'right atrium'], 'LV خون را به کل بدن پمپ می‌کند.'),
          B('جمع atrium می‌شود ___.', ['atria', 'atriums', 'atrii'], '‎-um → ‎-a.'),
          M('در این شکل، حفره‌ای که با LV مشخص شده چیست؟', ['left ventricle', 'left atrium', 'right ventricle', 'pulmonary artery'], 'LV = left ventricle؛ در سمت راست تصویر، یعنی سمت چپ بیمار.', null, F('chambers-book')),
          S('املای انگلیسی «بطن» را بنویس', 'ventricle', 'صفت: ventricular.', 'ventr…'),
          N('f2t:an')
        ]
      },
      {
        id: 'an5', title: 'چهار دریچه', icon: '🚪', items: [
          L('درهای یک‌طرفه', `چهار <b>valve</b> (دریچه) نمی‌گذارند خون به عقب برگردد:<br>• دو دریچه <b>atrioventricular (AV)</b> میان دهلیز و بطن: <b>tricuspid</b> در راست و <b>mitral</b> در چپ<br>• دو دریچه <b>semilunar</b> (هلالی) در خروجی بطن‌ها: <b>pulmonary</b> و <b>aortic</b>${fig('valves4')}`),
          M('دریچه میان دهلیز چپ و بطن چپ کدام است؟', ['mitral valve', 'tricuspid valve', 'aortic valve', 'pulmonary valve'], 'mitral یا bicuspid در سمت چپ.'),
          L('نام‌ها از شکل دریچه آمده‌اند', `• <b>tricuspid</b>: سه لت (cusp)؛ tri- یعنی سه<br>• <b>mitral</b> یا <b>bicuspid</b>: دو لت؛ شبیه کلاه اسقف (mitre)<br>• <b>semilunar</b>: لت‌های هلالی؛ semi- (نیم) + lunar (ماه)${fig('valves-top', '', 'دریچه‌ها از بالا: pulmonary و aortic در جلو، mitral و tricuspid در پشت.')}${memo('«راست سه‌تاست»: در سمت راست tricuspid با سه لت؛ و «تَری قبل از ما»: خون اول از tricuspid می‌گذرد، بعد از mitral.')}`),
          P('هر دریچه را به جایش وصل کن', [['tricuspid', 'میان RA و RV'], ['mitral', 'میان LA و LV'], ['pulmonary', 'خروجی RV'], ['aortic', 'خروجی LV']]),
          T('دریچه mitral سه لت دارد.', false, 'نادرست؛ mitral دو لت دارد (bicuspid). tricuspid سه لت دارد.'),
          L('طناب‌ها و ماهیچه‌های کوچک', `لت‌های دریچه‌های AV با طناب‌های نازکی به نام <b>chordae tendineae</b> به <b>papillary muscles</b> (ماهیچه‌های پستانکی) دیواره بطن بسته شده‌اند؛ هنگام انقباض بطن، این طناب‌ها نمی‌گذارند لت‌ها به سمت دهلیز برگردند.${fig('valve-types', '', 'A: دریچه‌های semilunar با لت‌های هلالی؛ B: دریچه‌های AV با chordae tendineae.')}${pearl('صدای اول قلب (lubb) از بسته شدن دریچه‌های AV و صدای دوم (dupp) از بسته شدن دریچه‌های semilunar است. صدای اضافه میان آن‌ها murmur (سوفل) نام دارد.')}`),
          M('طناب‌هایی که لت دریچه‌های AV را به دیواره بطن می‌بندند چه نام دارند؟', ['chordae tendineae', 'papillary muscles', 'Purkinje fibers', 'trabeculae'], 'chordae = طناب‌ها؛ tendineae = وتری.'),
          O('ترتیب عبور خون از دریچه‌ها را بچین', ['tricuspid', 'pulmonary', 'mitral', 'aortic'], 'نیمه راست: tricuspid و pulmonary؛ نیمه چپ: mitral و aortic.'),
          B('صدای دوم قلب (dupp) از بسته شدن دریچه‌های ___ است.', ['semilunar', 'atrioventricular', 'tricuspid و mitral'], 'aortic و pulmonary.'),
          S('املای انگلیسی «دریچه سه‌لتی» را بنویس', 'tricuspid', 'tri- (سه) + cusp (لت).', 'tri…'),
          N('d2t:an')
        ]
      },
      {
        id: 'an6', title: 'درون قلب', icon: '🔍', items: [
          L('همه را کنار هم ببین', `حالا حفره‌ها، دریچه‌ها و لایه‌ها را در یک برش کامل ببین:${fig('heart-interior', '', 'برش روبه‌رو: حفره‌ها، چهار دریچه و سه لایه دیواره در یک تصویر.')}${tbl([['گام', 'نیمه راست (آبی)', 'نیمه چپ (قرمز)'], ['۱', 'superior vena cava', 'pulmonary veins'], ['۲', 'right atrium', 'left atrium'], ['۳', 'tricuspid valve', 'mitral valve'], ['۴', 'right ventricle', 'left ventricle'], ['۵', 'pulmonary valve', 'aortic valve']])}`),
          M('در این تصویر، دریچه میان right atrium و right ventricle کدام است؟', ['tricuspid valve', 'mitral valve', 'pulmonary valve', 'aortic valve'], 'دریچه AV راست.', null, F('heart-interior')),
          L('جزئیات بیشتر', `${fig('heart-anatomy', '', 'جزئیات درون قلب: chordae tendineae، papillary muscles، coronary sinus و interventricular septum.')}• <b>coronary sinus</b>: سیاهرگی که خونِ خودِ ماهیچه قلب را جمع می‌کند و به right atrium می‌ریزد<br>• <b>atrioventricular canal</b>: دهانه میان دهلیز و بطن که دریچه AV در آن است`),
          P('هر ساختار را به کارش وصل کن', [['coronary sinus', 'جمع کردن خون ماهیچه قلب'], ['papillary muscles', 'کشیدن chordae tendineae'], ['interventricular septum', 'جدا کردن دو بطن'], ['semilunar valve', 'دریچه خروجی بطن']]),
          T('coronary sinus خون را به right atrium برمی‌گرداند.', true, 'خون کم‌اکسیژن ماهیچه قلب از این راه به RA می‌رسد.'),
          M('کدام لایه در تصویر، حفره‌ها را از درون می‌پوشاند؟', ['endocardium', 'myocardium', 'pericardium', 'epicardium'], 'endo- = درون.', null, F('heart-interior')),
          B('دریچه آئورت و دریچه ریوی هر دو از نوع ___ هستند.', ['semilunar', 'atrioventricular', 'bicuspid'], 'لت‌های هلالی دارند.'),
          T('mitral valve را bicuspid valve هم می‌نامند.', true, 'bi- = دو؛ دو لت.'),
          L('مرور سطح «حفره‌ها و دریچه‌ها»', recap(['دو atrium (دریافت) بالا، دو ventricle (پمپ) پایین؛ RA، RV، LA و LV', 'septum: interatrial میان دهلیزها و interventricular میان بطن‌ها؛ LV ضخیم‌ترین دیواره را دارد', 'دریچه‌های AV: tricuspid (راست، سه لت) و mitral یا bicuspid (چپ، دو لت) با chordae tendineae و papillary muscles', 'دریچه‌های semilunar: pulmonary و aortic؛ lubb = بسته شدن AV و dupp = بسته شدن semilunar'])),
          N('f2t:an')
        ]
      },

      /* ================= سطح ۳: مسیر خون و کرونرها ================= */
      {
        id: 'an7', title: 'رگ‌های بزرگ', icon: '🛣️', items: [
          L('رگ‌هایی که به قلب می‌رسند', `• <b>superior vena cava</b> (SVC): خون کم‌اکسیژن سر و دست‌ها را به right atrium می‌آورد<br>• <b>inferior vena cava</b> (IVC): خون کم‌اکسیژن تنه و پاها را به right atrium می‌آورد<br>• <b>pulmonary veins</b>: خون پراکسیژن را از ریه‌ها به left atrium می‌آورند${fig('blood-flow', '', 'آبی: خون کم‌اکسیژن (deoxygenated)؛ قرمز: خون پراکسیژن (oxygenated).')}`),
          M('خون کم‌اکسیژن پاها از کدام رگ به قلب برمی‌گردد؟', ['inferior vena cava', 'superior vena cava', 'pulmonary vein', 'aorta'], 'inferior = پایینی.'),
          L('رگ‌هایی که از قلب خارج می‌شوند', `• <b>pulmonary trunk</b> (تنه ریوی) از right ventricle بیرون می‌آید و به دو <b>pulmonary artery</b> چپ و راست تقسیم می‌شود که به ریه‌ها می‌روند<br>• <b>aorta</b> از left ventricle بیرون می‌آید: سه بخش دارد: <b>ascending aorta</b> (بالارو)، سپس <b>aortic arch</b> (قوس) و در پایان <b>descending aorta</b> (پایین‌رو)${fig('great-vessels', '', 'رگ‌های بزرگ از نمای روبه‌رو؛ شاخه‌های aortic arch به سر و دست‌ها می‌روند.')}`),
          P('هر رگ را به کارش وصل کن', [['superior vena cava', 'خون سر و دست‌ها به RA'], ['pulmonary artery', 'خون کم‌اکسیژن به ریه'], ['pulmonary vein', 'خون پراکسیژن به LA'], ['aorta', 'خون پراکسیژن به بدن']]),
          L('استثنای مهم', `قاعده ساده این است: <b>artery</b> خون را از قلب دور می‌کند و <b>vein</b> به قلب برمی‌گرداند؛ نه این‌که سرخرگ همیشه خون پراکسیژن داشته باشد.${vs(['pulmonary artery', 'سرخرگ است ولی خون کم‌اکسیژن می‌برد'], ['pulmonary vein', 'سیاهرگ است ولی خون پراکسیژن می‌آورد'])}${memo('نام رگ را جهتِ حرکت تعیین می‌کند، نه رنگ خون: دور از قلب = artery.')}`),
          T('pulmonary artery خون پراکسیژن به بدن می‌برد.', false, 'نادرست؛ خون کم‌اکسیژن را به ریه‌ها می‌برد.'),
          O('بخش‌های آئورت را به ترتیب جریان خون بچین', ['ascending aorta', 'aortic arch', 'descending aorta'], 'بالارو، قوس، پایین‌رو.'),
          B('خون پراکسیژن از ریه‌ها با ___ به left atrium می‌رسد.', ['pulmonary veins', 'pulmonary arteries', 'pulmonary trunk'], 'pulmonary veins.'),
          S('املای انگلیسی «بزرگ‌سیاهرگ» (بدون پیشوند superior یا inferior) را بنویس', 'vena cava', 'جمع: venae cavae.', 'vena…'),
          N('sp:an')
        ]
      },
      {
        id: 'an8', title: 'مسیر خون', icon: '🔄', items: [
          L('یک دور کامل', `خون در یک حلقه حرکت می‌کند و هر دور <b>دو بار</b> از قلب می‌گذرد: یک بار از نیمه راست به ریه‌ها و یک بار از نیمه چپ به بدن.${fig('flow-loop')}${memo('«راست به ریه، چپ به کل»: نیمه راست قلب خون را به ریه می‌فرستد و نیمه چپ به کل بدن.')}`),
          O('مسیر خون در نیمه راست قلب را بچین', ['vena cava', 'right atrium', 'tricuspid valve', 'right ventricle', 'pulmonary artery'], 'از بدن به ریه.'),
          L('شماره به شماره', `${fig('flow-steps', '', '۱ دهلیز راست، ۲ دریچه سه‌لتی، ۳ بطن راست و دریچه ریوی؛ ۴ دهلیز چپ، ۵ دریچه میترال، ۶ بطن چپ و دریچه آئورت.')}${tbl([['گام', 'نیمه راست: بدن به ریه', 'نیمه چپ: ریه به بدن'], ['۱', 'venae cavae', 'pulmonary veins'], ['۲', 'right atrium', 'left atrium'], ['۳', 'tricuspid valve', 'mitral valve'], ['۴', 'right ventricle', 'left ventricle'], ['۵', 'pulmonary valve', 'aortic valve'], ['۶', 'pulmonary artery', 'aorta']])}`),
          O('مسیر خون در نیمه چپ قلب را بچین', ['pulmonary veins', 'left atrium', 'mitral valve', 'left ventricle', 'aorta'], 'از ریه به بدن.'),
          L('آزمون تصویری', `در شکل زیر شماره‌ها مسیر خون را نشان می‌دهند. پیش از رفتن به سؤال‌ها، با کمک فهرست زیر هر شماره را پیدا کن:${fig('flow-quiz')}${tbl([['شماره', 'ساختار'], ['۱', 'venae cavae'], ['۲ و ۴', 'right atrium و right ventricle'], ['۳ و ۵', 'tricuspid و pulmonary valve'], ['۶ و ۷', 'pulmonary arteries و pulmonary veins'], ['۸ و ۱۰', 'left atrium و left ventricle'], ['۹ و ۱۱', 'mitral و aortic valve'], ['۱۲', 'aorta']])}`),
          M('در این شکل، شماره (۴) کدام است؟', ['right ventricle', 'right atrium', 'left ventricle', 'pulmonary artery'], 'شماره ۴ بطن راست است؛ خون را از tricuspid (۳) می‌گیرد.', null, F('flow-quiz')),
          M('در این شکل، شماره (۷) کدام است؟', ['pulmonary veins', 'pulmonary arteries', 'venae cavae', 'aorta'], 'پیکان‌های قرمز به سمت قلب: خون پراکسیژن از ریه به left atrium.', null, F('flow-quiz')),
          M('در این شکل، شماره (۱۰) کدام است؟', ['left ventricle', 'left atrium', 'right ventricle', 'aorta'], 'بطن چپ با دیواره ضخیم.', null, F('flow-quiz')),
          T('خون در هر دور کامل دو بار از قلب می‌گذرد.', true, 'یک بار در گردش ریوی و یک بار در گردش سیستمیک.'),
          N('f2t:an')
        ]
      },
      {
        id: 'an9', title: 'سرخرگ‌های کرونر', icon: '👑', items: [
          L('قلب هم خون می‌خواهد', `myocardium از خونِ درون حفره‌ها تغذیه نمی‌کند؛ دو <b>coronary artery</b> درست از ابتدای آئورت جدا می‌شوند و مثل تاج دور قلب حلقه می‌زنند:${fig('coronary-map')}${tbl([['سرخرگ', 'اختصار', 'خون‌رسانی اصلی'], ['right coronary artery', 'RCA', 'نیمه راست و پایین قلب'], ['left coronary artery', 'LCA', 'تنه کوتاهی که دو شاخه می‌شود'], ['left anterior descending', 'LAD', 'جلوی بطن چپ و septum'], ['circumflex artery', 'Cx', 'پشت و کنار بطن چپ']])}`),
          M('شاخه‌ای از left coronary artery که روی جلوی قلب پایین می‌آید کدام است؟', ['left anterior descending', 'circumflex artery', 'right coronary artery', 'coronary sinus'], 'anterior = جلویی، descending = پایین‌رو.'),
          L('در تصویر واقعی', `${fig('coronary', '', 'right coronary artery، left coronary artery و شاخه left anterior descending روی سطح قلب.')}خون کم‌اکسیژن ماهیچه قلب از سیاهرگ‌های قلبی جمع می‌شود و از <b>coronary sinus</b> به right atrium می‌ریزد.${pearl('LAD را در بالین «widow maker» (بیوه‌ساز) می‌نامند: انسداد ابتدای آن بخش بزرگی از بطن چپ را بی‌خون می‌گذارد و سکته قلبی شدید می‌دهد.')}`),
          P('هر اختصار را به نامش وصل کن', [['RCA', 'right coronary artery'], ['LAD', 'left anterior descending'], ['LCA', 'left coronary artery'], ['Cx', 'circumflex artery']]),
          T('سرخرگ‌های کرونر از ابتدای آئورت جدا می‌شوند.', true, 'درست بالای دریچه آئورت.'),
          M('در این تصویر، سرخرگی که روی سطح جلویی قلب به سوی نوک می‌رود چیست؟', ['left anterior descending', 'right coronary artery', 'superior vena cava', 'pulmonary trunk'], 'شاخه پایین‌روی جلویی LCA.', null, F('coronary')),
          B('ریشه coron/o در coronary یعنی ___.', ['تاج', 'قلب', 'رگ'], 'این سرخرگ‌ها مثل تاج دور قلب‌اند.'),
          W('واژه‌ای بساز به معنی «مربوط به تاج قلب (کرونری)»', ['coron/o', '-ary'], ['cardi/o', '-itis', 'angi/o'], 'coron/o + -ary = coronary.'),
          L('مرور سطح «مسیر خون و کرونرها»', recap(['SVC و IVC خون کم‌اکسیژن را به RA می‌آورند؛ pulmonary veins خون پراکسیژن را به LA', 'pulmonary trunk از RV به ریه‌ها؛ aorta از LV: ascending، arch و descending', 'نیمه راست: vena cava → RA → tricuspid → RV → pulmonary valve → lungs', 'نیمه چپ: pulmonary veins → LA → mitral → LV → aortic valve → aorta', 'کرونرها: RCA و LCA؛ LCA دو شاخه LAD و circumflex دارد؛ coronary sinus به RA می‌ریزد'])),
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
    id: 'ep', sym: 'ECG', name: 'ضربان و نوار قلب', short: 'ضربان', sub: 'سیستم هدایت، چرخه قلب، موج‌ها و کاغذ نوار قلب، ریتم، فشار خون، نبض و پایش ضربان',
    color: '#F08C00', dark: '#B35F00', light: '#FFF0DB',
    levels: ['برق قلب', 'نوار قلب', 'فشار، نبض و پایش'],
    gens: EA.genIds('ep'),
    lessons: [
      /* ================= سطح ۱: برق قلب ================= */
      {
        id: 'ep1', title: 'ضربان‌ساز طبیعی', icon: '⚡', items: [
          L('قلب برق خودش را می‌سازد', `هر ضربان با یک <b>پیام الکتریکی</b> شروع می‌شود که خودِ قلب آن را می‌سازد؛ برای همین قلب پیوندی بدون عصب هم می‌تپد. این پیام از مسیر ثابتی به نام <b>conduction system</b> (سیستم هدایت) می‌گذرد.${fig('conduction-path')}`),
          L('پنج ایستگاه', `${tbl([['ایستگاه', 'جا', 'کار'], [e('SA node'), 'دیواره دهلیز راست', 'ضربان‌ساز طبیعی؛ ۶۰ تا ۱۰۰ بار در دقیقه'], [e('AV node'), 'پایین دهلیز راست', 'مکث کوتاه تا بطن‌ها پر شوند'], [e('bundle of His'), 'بالای septum', 'پل میان دهلیزها و بطن‌ها'], [e('bundle branches'), 'دو سوی septum', 'شاخه راست و چپ'], [e('Purkinje fibers'), 'دیواره بطن‌ها', 'پخش پیام و انقباض بطن‌ها']])}${memo('ترتیب را با «سا، آو، هیس، شاخه، پورکنژ» بخوان؛ مثل «سلام، آهای، هیس، شاخه رو بگیر، پرید!»')}`),
          M('ضربان‌ساز طبیعی قلب کدام است؟', ['SA node', 'AV node', 'bundle of His', 'Purkinje fibers'], 'sinoatrial node در دیواره دهلیز راست.'),
          O('مسیر پیام الکتریکی قلب را بچین', ['SA node', 'AV node', 'bundle of His', 'bundle branches', 'Purkinje fibers'], 'از دهلیز به بطن.'),
          L('نام‌ها را بشکن', `• ${e('sinoatrial')} = sinus (حفره، سینوس) + atri/o (دهلیز) + ‎-al<br>• ${e('atrioventricular')} = atri/o (دهلیز) + ventricul/o (بطن) + ‎-ar؛ یعنی میان دهلیز و بطن${fig('conduction', '', 'SA node در بالای دهلیز راست و AV node در پایین آن؛ bundle of His به دو شاخه و بعد به Purkinje fibers می‌رسد.')}`),
          P('هر ایستگاه را به کارش وصل کن', [['SA node', 'ساختن ضربان'], ['AV node', 'مکث پیش از بطن‌ها'], ['bundle branches', 'شاخه‌های راست و چپ'], ['Purkinje fibers', 'پخش پیام در بطن‌ها']]),
          T('AV node پیام را کمی نگه می‌دارد تا بطن‌ها از خون پر شوند.', true, 'این مکث روی نوار قلب همان PR interval است.'),
          B('SA node در دیواره ___ قرار دارد.', ['دهلیز راست', 'بطن چپ', 'دهلیز چپ'], 'بالای right atrium، نزدیک SVC.'),
          W('واژه‌ای بساز به معنی «میان دهلیز و بطن»', ['atri/o', 'ventricul/o', '-ar'], ['cardi/o', '-itis', 'inter-'], 'atrioventricular.'),
          S('املای انگلیسی رشته‌هایی که پیام را در بطن‌ها پخش می‌کنند (فقط نام خاص) را بنویس', 'Purkinje', 'Purkinje fibers.', 'Purk…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep2', title: 'پیام در راه', icon: '🔌', items: [
          L('بار برقی و استراحت', `${vs(['depolarization', 'پخش بار الکتریکی؛ ماهیچه منقبض می‌شود'], ['repolarization', 'بازگشت بار به حالت استراحت؛ آماده ضربان بعد'])}${fig('conduction-steps', '', 'شماره‌ها ترتیب پیام: ۱ SA node، ۲ AV node، ۳ bundle of His، ۴ bundle branches، ۵ Purkinje fibers.')}${memo('de- یعنی برداشتن: depolarization قطبیت استراحت را «برمی‌دارد» و re- (دوباره) آن را برمی‌گرداند.')}`),
          M('کدام رویداد باعث انقباض ماهیچه قلب می‌شود؟', ['depolarization', 'repolarization', 'diastole', 'regurgitation'], 'پخش بار الکتریکی.'),
          L('ریتم سینوسی', `وقتی هر ضربان از SA node شروع شود و با سرعت ۶۰ تا ۱۰۰ در دقیقه منظم ادامه یابد، به آن <b>normal sinus rhythm</b> (NSR) می‌گویند.${fig('conduction-2', '', 'pacemaker sinoatrial (SA) node در دهلیز راست؛ پیام از AV node و شاخه‌ها به Purkinje fibers می‌رسد.')}اگر SA node از کار بیفتد، ایستگاه‌های پایین‌تر کندتر ضربان می‌سازند: AV node حدود ۴۰ تا ۶۰ و Purkinje fibers حدود ۲۰ تا ۴۰ بار در دقیقه.`),
          T('normal sinus rhythm یعنی ضربان منظم ۶۰ تا ۱۰۰ که از SA node شروع می‌شود.', true, 'NSR.'),
          L('وقتی راه بسته می‌شود', `اگر پیام در <b>AV node</b> یا <b>bundle of His</b> کند شود یا نرسد، به آن <b>heart block</b> (بلوک قلبی) می‌گویند؛ بطن‌ها کند و نامنظم می‌زنند.${fig('heart-block', '', 'AV node، bundle of His و bundle branches؛ جاهایی که بلوک رخ می‌دهد.')}${pearl('بلوک کامل قلبی (third-degree heart block) ضربان را به حدود ۴۰ می‌رساند و بیمار غش می‌کند؛ درمانش گذاشتن artificial pacemaker است که در دنیای درمان می‌بینی.')}`),
          M('به رسیدن ناقص پیام از دهلیز به بطن چه می‌گویند؟', ['heart block', 'fibrillation', 'flutter', 'tamponade'], 'block = بسته شدن راه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['depolarization', 'پخش بار و انقباض'], ['repolarization', 'بازگشت به استراحت'], ['NSR', 'ریتم سینوسی طبیعی'], ['heart block', 'بسته شدن راه پیام']]),
          B('اگر SA node کار نکند، AV node با سرعت حدود ___ ضربان می‌سازد.', ['۴۰ تا ۶۰', '۶۰ تا ۱۰۰', '۱۵۰ تا ۲۰۰'], 'ایستگاه‌های پایین‌تر کندترند.'),
          S('املای انگلیسی «دپلاریزاسیون» را بنویس', 'depolarization', 'de- + polarization.', 'depol…'),
          N('f2t:ep')
        ]
      },
      {
        id: 'ep3', title: 'چرخه قلب', icon: '🔁', items: [
          L('انقباض و استراحت', `هر ضربان یک <b>cardiac cycle</b> (چرخه قلب) است و دو مرحله دارد:${vs(['systole', 'انقباض؛ خون بیرون رانده می‌شود'], ['diastole', 'استراحت؛ حفره‌ها پر می‌شوند'])}${fig('systole-diastole')}${memo('سیستول با «س» مثل «سفت شدن» و دیاستول با «د» مثل «دراز کشیدن و استراحت».')}`),
          M('مرحله استراحت و پر شدن بطن‌ها چه نام دارد؟', ['diastole', 'systole', 'depolarization', 'stenosis'], 'diastole.'),
          L('سه گام چرخه', `${fig('cardiac-cycle', '', '۱ استراحت: دریچه‌های semilunar بسته و AV باز؛ ۲ atrial systole: دهلیزها خون را به بطن‌ها می‌رانند؛ ۳ ventricular systole: دریچه‌های semilunar باز و AV بسته.')}در <b>ventricular systole</b> دریچه‌های AV بسته می‌شوند (صدای lubb) و در آغاز <b>diastole</b> دریچه‌های semilunar بسته می‌شوند (صدای dupp).`),
          O('گام‌های چرخه قلب را بچین', ['استراحت و پر شدن دهلیزها و بطن‌ها', 'atrial systole', 'ventricular systole'], 'مطابق شکل: ۱ استراحت، ۲ انقباض دهلیزها، ۳ انقباض بطن‌ها.'),
          L('قلب چقدر خون می‌فرستد؟', `${tbl([['واژه', 'معنی', 'مقدار طبیعی'], [e('stroke volume'), 'خونِ هر ضربان', 'حدود ۷۰ میلی‌لیتر'], [e('heart rate'), 'ضربان در دقیقه', '۶۰ تا ۱۰۰'], [e('cardiac output'), 'خون در هر دقیقه', 'حدود ۵ لیتر'], [e('ejection fraction'), 'درصد خون بیرون‌رانده از بطن چپ', '۵۵ تا ۷۰ درصد']])}cardiac output = stroke volume × heart rate${pearl('ejection fraction یا EF را با اکوکاردیوگرافی می‌سنجند؛ EF کمتر از ۴۰ درصد نشانه نارسایی قلب است.')}`),
          M('cardiac output از ضرب کدام دو عدد به دست می‌آید؟', ['stroke volume و heart rate', 'systolic و diastolic', 'heart rate و ejection fraction', 'stroke volume و blood pressure'], 'CO = SV × HR.'),
          P('هر واژه را به معنی‌اش وصل کن', [['stroke volume', 'خون هر ضربان'], ['cardiac output', 'خون هر دقیقه'], ['ejection fraction', 'درصد خون بیرون‌رانده'], ['systole', 'مرحله انقباض']]),
          T('ejection fraction طبیعی حدود ۲۰ درصد است.', false, 'نادرست؛ طبیعی ۵۵ تا ۷۰ درصد است.'),
          L('مرور سطح «برق قلب»', recap(['مسیر پیام: SA node → AV node → bundle of His → bundle branches → Purkinje fibers', 'depolarization انقباض و repolarization بازگشت به استراحت؛ NSR یعنی ۶۰ تا ۱۰۰ منظم از SA node', 'heart block: گیر کردن پیام در AV node یا bundle of His', 'cardiac cycle: systole انقباض و diastole استراحت؛ CO = SV × HR و EF طبیعی ۵۵ تا ۷۰ درصد'])),
          N('d2t:ep')
        ]
      },

      /* ================= سطح ۲: نوار قلب ================= */
      {
        id: 'ep4', title: 'موج‌های نوار', icon: '📈', items: [
          L('برق قلب روی کاغذ', `${wb('electr/o', 'cardi/o', '-gram')} = <b>electrocardiogram</b>؛ ثبت برق قلب. اختصارش <b>ECG</b> یا <b>EKG</b> است. برق قلب را با <b>electrode</b>ها، یعنی صفحه‌های رسانایی که روی پوست می‌چسبانند، ثبت می‌کنند.${fig('ecg-wave')}هر ضربان طبیعی سه بخش اصلی دارد: <b>P wave</b>، <b>QRS complex</b> و <b>T wave</b>.`),
          L('هر موج چه می‌گوید؟', `${tbl([['موج', 'رویداد'], [e('P wave'), 'depolarization دهلیزها، یعنی انقباض دهلیزها'], [e('QRS complex'), 'depolarization بطن‌ها، یعنی انقباض بطن‌ها'], [e('T wave'), 'repolarization بطن‌ها، یعنی آماده شدن برای ضربان بعد']])}${fig('ecg-pqrst', '', 'P wave انقباض دهلیزها، QRS complex انقباض بطن‌ها و T wave آماده شدن برای ضربان بعدی.')}${memo('P = «پیش‌درآمد»، QRS = «قله اصلی»، T = «تمام»: اول دهلیزها، بعد بطن‌ها، بعد استراحت.')}`),
          M('QRS complex نشان‌دهنده چیست؟', ['depolarization بطن‌ها', 'depolarization دهلیزها', 'repolarization بطن‌ها', 'بسته شدن دریچه‌ها'], 'بلندترین موج نوار.'),
          P('هر موج را به رویدادش وصل کن', [['P wave', 'انقباض دهلیزها'], ['QRS complex', 'انقباض بطن‌ها'], ['T wave', 'repolarization بطن‌ها']]),
          T('repolarization دهلیزها یک موج جداگانه و واضح در نوار دارد.', false, 'نادرست؛ در QRS بزرگ پنهان می‌شود.'),
          O('موج‌های یک ضربان را به ترتیب بچین', ['P wave', 'QRS complex', 'T wave'], 'دهلیز، بطن، استراحت.'),
          L('P یا T؟', `${vs(['P wave', 'کوچک و گرد؛ پیش از هر QRS'], ['T wave', 'بزرگ‌تر و پهن؛ پس از هر QRS'])}${memo('در نوار طبیعی «هر P یک QRS دارد و هر QRS یک T». اگر P بی‌QRS بماند، پیام در راه گیر کرده است: heart block.')}`),
          M('بیمار هنگام نوار قلب دراز کشیده و چند electrode به سینه‌اش چسبانده‌اند. electrode چیست؟', ['صفحه رسانای ثبت برق از پوست', 'دستگاه شوک', 'سوزن خون‌گیری', 'گوشی پزشکی'], 'electr/o + -ode (راه).'),
          B('ECG و EKG هر دو یعنی ___.', ['electrocardiogram', 'echocardiogram', 'electroencephalogram'], 'K از املای آلمانی Elektrokardiogramm است.'),
          S('املای انگلیسی «نوار قلب» را بنویس', 'electrocardiogram', 'electr/o + cardi/o + -gram.', 'electro…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep5', title: 'کاغذ نوار و فاصله‌ها', icon: '📏', items: [
          L('کاغذ شطرنجی', `کاغذ نوار با سرعت ثابت ۲۵ میلی‌متر در ثانیه حرکت می‌کند:<br>• هر <b>خانه کوچک</b> (۱ میلی‌متر) = ۰٫۰۴ ثانیه<br>• هر <b>خانه بزرگ</b> (۵ میلی‌متر) = ۰٫۲ ثانیه<br>• ۵ خانه بزرگ = ۱ ثانیه${fig('ecg-tracing', '', 'A: چند ضربان پشت سر هم؛ B: یک ضربان با segmentها و intervalها. هر خانه بزرگ ۵ میلی‌متر و ۰٫۲ ثانیه است.')}`),
          M('هر خانه بزرگ کاغذ نوار قلب چند ثانیه است؟', ['۰٫۲ ثانیه', '۰٫۰۴ ثانیه', '۱ ثانیه', '۰٫۵ ثانیه'], '۵ خانه کوچک × ۰٫۰۴.'),
          L('segment و interval', `${vs(['segment', 'خط صاف میان دو موج'], ['interval', 'یک یا چند موج همراه با segment'])}• <b>PR interval</b>: از آغاز P تا آغاز QRS؛ زمان رفتن پیام از دهلیز به بطن (۰٫۱۲ تا ۰٫۲۰ ثانیه)<br>• <b>QRS</b>: کمتر از ۰٫۱۲ ثانیه<br>• <b>ST segment</b>: از پایان QRS تا آغاز T؛ در سکته قلبی بالا یا پایین می‌رود<br>• <b>QT interval</b>: از آغاز QRS تا پایان T${pearl('بالا رفتن ST segment یا STEMI یعنی سکته قلبی حاد؛ تیم آنژیوگرافی باید در کمتر از ۹۰ دقیقه رگ را باز کند.')}`),
          M('در سکته قلبی حاد، کدام بخش نوار بالا می‌رود؟', ['ST segment', 'PR interval', 'P wave', 'U wave'], 'ST elevation.'),
          T('PR interval طولانی یعنی پیام دیر از دهلیز به بطن می‌رسد.', true, 'نشانه heart block درجه یک.'),
          L('شمردن ضربان روی کاغذ', `اگر ریتم منظم باشد: <b>۳۰۰ ÷ تعداد خانه‌های بزرگ میان دو R</b> = ضربان در دقیقه.<br>• ۳ خانه بزرگ ← ۱۰۰<br>• ۴ خانه بزرگ ← ۷۵<br>• ۵ خانه بزرگ ← ۶۰${fig('ecg-strip', '', 'نوار منظم؛ فاصله R تا R را بشمار و ۳۰۰ را بر آن تقسیم کن.')}`),
          M('فاصله دو R روی نوار ۴ خانه بزرگ است. ضربان چند است؟', ['۷۵', '۶۰', '۱۰۰', '۱۵۰'], '۳۰۰ ÷ ۴ = ۷۵.'),
          P('هر بخش را به معنی‌اش وصل کن', [['PR interval', 'رسیدن پیام از دهلیز به بطن'], ['ST segment', 'خط میان QRS و T'], ['QT interval', 'از آغاز QRS تا پایان T'], ['R wave', 'قله بلند QRS']]),
          B('اگر فاصله R تا R دو خانه بزرگ باشد، ضربان ___ در دقیقه است.', ['۱۵۰', '۷۵', '۳۰۰'], '۳۰۰ ÷ ۲ = ۱۵۰.'),
          N('f2t:ep')
        ]
      },
      {
        id: 'ep6', title: 'ریتم و ضربان', icon: '🎵', items: [
          L('کند، طبیعی، تند', `${fig('rate-strips')}${tbl([['ریتم', 'ضربان', 'نمونه'], [e('bradycardia'), 'کمتر از ۶۰', 'ورزشکار در خواب'], [e('normal sinus rhythm'), '۶۰ تا ۱۰۰', 'بزرگسال در استراحت'], [e('tachycardia'), 'بیشتر از ۱۰۰', 'تب، اضطراب، ورزش']])}`),
          M('ضربان ۴۸ در دقیقه در نوار منظم چه نام دارد؟', ['sinus bradycardia', 'sinus tachycardia', 'normal sinus rhythm', 'asystole'], 'کمتر از ۶۰.'),
          L('نوار دوازده‌لیدی', `برای نوار کامل، ۱۰ <b>electrode</b> روی دست‌ها، پاها و سینه می‌گذارند و قلب از ۱۲ زاویه (<b>12-lead ECG</b>) دیده می‌شود.${fig('ecg-exam', '', 'A: نوار قلب هنگام ورزش؛ B: یک ضربان با P wave، QRS و T wave.')}${pearl('در گزارش نوار ابتدا ریتم و ضربان را می‌نویسند، مثل «NSR, HR 72 bpm»، بعد محور و تغییرات ST.')}`),
          T('در 12-lead ECG دوازده electrode به بدن وصل می‌شود.', false, 'نادرست؛ ۱۰ electrode، ولی ۱۲ «نما» (lead) ثبت می‌شود.'),
          M('«arrhythmia» یعنی…', ['بی‌نظمی ضربان', 'ضربان کند', 'نبود ضربان', 'ضربان طبیعی'], 'a- (بدون) + rhythm + -ia.'),
          P('هر ضربان را به نامش وصل کن', [['۴۵ در دقیقه', 'bradycardia'], ['۷۵ در دقیقه', 'normal sinus rhythm'], ['۱۳۰ در دقیقه', 'tachycardia']]),
          B('ضربان بیشتر از ۱۰۰ در دقیقه را ___ می‌گویند.', ['tachycardia', 'bradycardia', 'asystole'], 'tachy- = تند.'),
          W('واژه‌ای بساز به معنی «ضربان تند»', ['tachy-', '-cardia'], ['brady-', 'a-', '-gram'], 'tachy- + -cardia.'),
          L('مرور سطح «نوار قلب»', recap(['ECG یا EKG: P wave انقباض دهلیزها، QRS انقباض بطن‌ها، T wave repolarization بطن‌ها', 'کاغذ: خانه کوچک ۰٫۰۴ و خانه بزرگ ۰٫۲ ثانیه؛ ضربان = ۳۰۰ ÷ خانه‌های بزرگ میان دو R', 'PR interval ۰٫۱۲ تا ۰٫۲۰ ثانیه؛ QRS کمتر از ۰٫۱۲؛ ST segment در سکته قلبی تغییر می‌کند', 'bradycardia کمتر از ۶۰ • NSR ۶۰ تا ۱۰۰ • tachycardia بیشتر از ۱۰۰؛ 12-lead ECG با ۱۰ electrode'])),
          N('sp:ep')
        ]
      },

      /* ================= سطح ۳: فشار، نبض و پایش ================= */
      {
        id: 'ep7', title: 'فشار خون', icon: '🩺', items: [
          L('دو عدد فشار خون', `<b>blood pressure</b> (BP) فشار خون بر دیواره سرخرگ‌هاست و با دو عدد نوشته می‌شود:${fig('bp-reading')}${vs(['systolic', 'عدد بالا: فشار هنگام انقباض بطن'], ['diastolic', 'عدد پایین: فشار هنگام استراحت قلب'])}`),
          M('در فشار ۱۳۰/۸۵، عدد ۸۵ کدام است؟', ['diastolic pressure', 'systolic pressure', 'pulse pressure', 'heart rate'], 'عدد پایین = دیاستولی.'),
          L('فشارسنج و صداهای کوروتکوف', `${wb('sphygm/o', 'man/o', '-meter')} = <b>sphygmomanometer</b> (فشارسنج): sphygm/o نبض، man/o فشار و ‎-meter ابزار اندازه‌گیری.<br>کاف را باد می‌کنند تا سرخرگ بازویی بسته شود و آرام خالی‌اش می‌کنند؛ با گوشی روی سرخرگ <b>Korotkoff sounds</b> شنیده می‌شوند:<br>• شروع صدا = فشار <b>systolic</b><br>• قطع صدا = فشار <b>diastolic</b>${fig('bp-measure', '', 'A: کاف، فشارسنج و گوشی روی سرخرگ بازویی؛ B: شروع و پایان صداهای Korotkoff.')}`),
          O('گام‌های اندازه‌گیری فشار خون را بچین', ['بستن کاف دور بازو', 'باد کردن کاف تا قطع نبض', 'خالی کردن آرام کاف', 'ثبت شروع صدا: systolic', 'ثبت قطع صدا: diastolic'], 'شروع صدا عدد بالا و قطع صدا عدد پایین است.'),
          T('شروع صداهای کوروتکوف فشار دیاستولی را نشان می‌دهد.', false, 'نادرست؛ شروع صدا systolic و قطع صدا diastolic است.'),
          L('اختلاف دو عدد', `<b>pulse pressure</b> = systolic − diastolic؛ برای ۱۲۰/۸۰ می‌شود ۴۰.${fig('bp-photo', '', 'اندازه‌گیری فشار با کاف و فشارسنج عقربه‌ای.')}${pearl('کاف کوچک‌تر از بازو عدد را به‌اشتباه بالا نشان می‌دهد؛ برای بازوی چاق کاف بزرگ لازم است.')}`),
          M('در فشار ۱۴۰/۹۰، pulse pressure چقدر است؟', ['۵۰', '۲۳۰', '۹۰', '۱۴۰'], '۱۴۰ − ۹۰ = ۵۰.'),
          P('هر واژه را به معنی‌اش وصل کن', [['sphygm/o', 'نبض'], ['man/o', 'فشار'], ['-meter', 'ابزار اندازه‌گیری'], ['Korotkoff sounds', 'صداهای سرخرگ هنگام سنجش فشار']]),
          B('واحد فشار خون ___ است.', ['mmHg', 'bpm', 'mL/min'], 'میلی‌متر جیوه.'),
          S('املای انگلیسی «فشارسنج» را بنویس', 'sphygmomanometer', 'sphygm/o + man/o + -meter.', 'sphygmo…'),
          N('t2f:ep')
        ]
      },
      {
        id: 'ep8', title: 'نبض و صداها', icon: '💓', items: [
          L('نبض کجا لمس می‌شود؟', `<b>pulse</b> (نبض) موج فشاری است که با هر ضربان در سرخرگ پیش می‌رود؛ جایی لمس می‌شود که سرخرگ نزدیک پوست و روی استخوان باشد. رایج‌ترین جا مچ دست، سمت شست است: <b>radial pulse</b>.${fig('pulse-points')}`),
          M('رایج‌ترین جای گرفتن نبض در مچ دست چه نام دارد؟', ['radial pulse', 'carotid pulse', 'femoral pulse', 'popliteal pulse'], 'سرخرگ radial در سمت شست.'),
          L('جاهای نبض در تصویر', `${fig('pulse-sites', '', 'جاهای لمس نبض: temporal، carotid، brachial، radial، femoral و popliteal.')}${tbl([['نبض', 'جا'], [e('carotid'), 'کنار گردن؛ در ایست قلبی اول این را می‌گیرند'], [e('brachial'), 'داخل آرنج؛ در نوزادان'], [e('apical'), 'روی نوک قلب با گوشی'], [e('femoral'), 'کشاله ران'], [e('popliteal'), 'پشت زانو'], [e('dorsalis pedis'), 'روی پا؛ برای بررسی گردش خون پا']])}`),
          P('هر نبض را به جایش وصل کن', [['radial', 'مچ دست'], ['carotid', 'گردن'], ['popliteal', 'پشت زانو'], ['femoral', 'کشاله ران']]),
          L('گوش دادن به قلب', `<b>auscultation</b> یعنی گوش دادن به صداهای بدن با <b>stethoscope</b> (steth/o = سینه).<br>• S1 یا lubb: بسته شدن دریچه‌های AV<br>• S2 یا dupp: بسته شدن دریچه‌های semilunar${vs(['murmur', 'صدای «فِش» اضافه از جریان آشفته خون'], ['gallop', 'صدای سوم یا چهارم؛ مثل تاخت اسب'])}${memo('auscultation را با «اوسکولت، گوش بده!» به خاطر بسپار.')}`),
          M('گوش دادن به صداهای قلب با گوشی چه نام دارد؟', ['auscultation', 'palpation', 'percussion', 'inspection'], 'auscultation.'),
          T('apical pulse با گوشی روی نوک قلب شمرده می‌شود.', true, 'apex = نوک قلب.'),
          B('در ایست قلبی بزرگسال، نبض ___ را بررسی می‌کنند.', ['carotid', 'radial', 'dorsalis pedis'], 'سرخرگ بزرگ و نزدیک قلب.'),
          S('املای انگلیسی «گوشی پزشکی» را بنویس', 'stethoscope', 'steth/o + -scope.', 'stetho…'),
          N('d2t:ep')
        ]
      },
      {
        id: 'ep9', title: 'پایش ضربان', icon: '📟', items: [
          L('نوار ۲۴ ساعته', `بعضی آریتمی‌ها فقط گاهی رخ می‌دهند. <b>Holter monitor</b> دستگاه کوچکی است که ۲۴ تا ۴۸ ساعت نوار قلب را هنگام زندگی روزمره ثبت می‌کند و بیمار علائمش، مثل <b>palpitation</b> (احساس تپش قلب)، را با ساعتش در دفترچه می‌نویسد.${fig('holter', '', 'Holter monitor: electrodeها روی سینه و دستگاه ثبت روی کمر.')}`),
          M('بیمار گاه‌گاهی تپش قلب دارد ولی نوار قلب در کلینیک طبیعی است. کدام بررسی مناسب است؟', ['Holter monitor', 'sphygmomanometer', 'pericardiocentesis', 'angioplasty'], 'ثبت پیوسته ۲۴ ساعته.'),
          L('تست ورزش', `در <b>stress test</b> (تست ورزش) بیمار روی تردمیل راه می‌رود و سرعت و شیب کم‌کم بیشتر می‌شود؛ هم‌زمان ECG و فشار خون ثبت می‌شود. اگر سرخرگ کرونر تنگ باشد، با بیشتر شدن نیاز قلب، ST segment تغییر می‌کند یا درد سینه می‌آید.${fig('stress-test', '', 'تست ورزش روی تردمیل با electrodeهای ECG و کاف فشار.')}${pearl('اگر بیمار نتواند ورزش کند، قلب را با دارو «به زحمت» می‌اندازند: pharmacologic stress test.')}`),
          T('در stress test نوار قلب در حال استراحت کامل گرفته می‌شود.', false, 'نادرست؛ هنگام ورزش روی تردمیل گرفته می‌شود.'),
          M('هدف اصلی stress test کدام است؟', ['پیدا کردن تنگی کرونر هنگام فعالیت', 'اندازه‌گیری قند خون', 'دیدن دریچه‌ها با صوت', 'برداشتن پلاک'], 'ایسکمی هنگام افزایش نیاز.'),
          P('هر ابزار را به کارش وصل کن', [['Holter monitor', 'ثبت ۲۴ ساعته نوار'], ['stress test', 'نوار هنگام ورزش'], ['sphygmomanometer', 'اندازه‌گیری فشار'], ['stethoscope', 'شنیدن صداهای قلب']]),
          B('دستگاه Holter معمولاً ___ ساعت نوار ثبت می‌کند.', ['۲۴ تا ۴۸', '۱ تا ۲', '۷۲۰'], 'یک تا دو روز.'),
          M('بیماری با «c/o palpitations» مراجعه کرده است. palpitation یعنی…', ['احساس تپش قلب', 'درد قفسه سینه', 'تنگی نفس', 'ورم پا'], 'بیمار ضربان خود را حس می‌کند.'),
          L('مرور سطح «فشار، نبض و پایش»', recap(['BP: systolic (عدد بالا، انقباض) / diastolic (عدد پایین، استراحت) بر حسب mmHg', 'sphygmomanometer = sphygm/o + man/o + -meter؛ شروع صدای Korotkoff systolic و قطع آن diastolic', 'نبض: radial، carotid، brachial، apical، femoral، popliteal، dorsalis pedis؛ auscultation با stethoscope', 'پایش: Holter monitor برای ۲۴ تا ۴۸ ساعت و stress test روی تردمیل'])),
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
    id: 'vc', sym: 'Vas', name: 'رگ‌ها و گردش خون', short: 'رگ‌ها', sub: 'سرخرگ، مویرگ و سیاهرگ، لایه‌های دیواره رگ، گردش ریوی و عمومی، گردش جنین، نقشه رگ‌های بدن و لنف',
    color: '#0C8599', dark: '#08606E', light: '#DDF3F6',
    levels: ['انواع رگ', 'گردش‌های خون', 'نقشه رگ‌ها و لنف'],
    gens: EA.genIds('vc'),
    lessons: [
      /* ================= سطح ۱: انواع رگ ================= */
      {
        id: 'vc1', title: 'سرخرگ تا سیاهرگ', icon: '🛤️', items: [
          L('پنج نوع رگ پشت سر هم', `خون از قلب در این زنجیره می‌رود و برمی‌گردد:${fig('vessel-chain')}${tbl([['رگ', 'معنی', 'کار'], [e('artery'), 'سرخرگ', 'خون را از قلب دور می‌کند'], [e('arteriole'), 'سرخرگ کوچک', 'تنظیم جریان به بافت'], [e('capillary'), 'مویرگ', 'تبادل اکسیژن و مواد با بافت'], [e('venule'), 'سیاهرگ کوچک', 'جمع کردن خون از مویرگ‌ها'], [e('vein'), 'سیاهرگ', 'بازگرداندن خون به قلب']])}`),
          M('تبادل اکسیژن میان خون و بافت در کدام رگ انجام می‌شود؟', ['capillary', 'arteriole', 'venule', 'artery'], 'دیواره مویرگ فقط یک لایه سلول است.'),
          O('زنجیره رگ‌ها را از قلب به بافت و برگشت بچین', ['artery', 'arteriole', 'capillary', 'venule', 'vein'], 'سرخرگ، سرخرگ کوچک، مویرگ، سیاهرگ کوچک، سیاهرگ.'),
          L('پسوندهای «کوچک»', `‎-ole و ‎-ule هر دو یعنی «کوچک»:<br>• ${wb('arteri/o', '-ole')} ← <b>arteriole</b>: سرخرگ کوچک<br>• ${wb('ven/o', '-ule')} ← <b>venule</b>: سیاهرگ کوچک${fig('vessel-walls', '', 'artery با ماهیچه صاف ضخیم، vein با دریچه و دیواره نازک‌تر، capillary فقط با endothelium.')}${memo('capillary از capillus لاتین یعنی «مو» آمده؛ مویرگ هم به فارسی یعنی «رگِ مویی».')}`),
          P('هر رگ را به ویژگی‌اش وصل کن', [['artery', 'دیواره ماهیچه‌ای ضخیم'], ['vein', 'دریچه و دیواره نازک‌تر'], ['capillary', 'یک لایه سلول'], ['arteriole', 'سرخرگ کوچک']]),
          T('سیاهرگ‌ها دریچه دارند تا خون به عقب برنگردد.', true, 'به‌ویژه در پاها که خون باید خلاف جاذبه بالا برود.'),
          B('پسوند ___ در venule یعنی «کوچک».', ['-ule', '-ole', '-ous'], 'ven/o + -ule.'),
          M('چرا دیواره سرخرگ از سیاهرگ ضخیم‌تر است؟', ['چون فشار خون در سرخرگ بیشتر است', 'چون خون سرخرگ غلیظ‌تر است', 'چون سرخرگ دریچه دارد', 'چون سرخرگ کوتاه‌تر است'], 'خون مستقیم از بطن با فشار زیاد وارد سرخرگ می‌شود.'),
          W('واژه‌ای بساز به معنی «سرخرگ کوچک»', ['arteri/o', '-ole'], ['ven/o', '-ule', '-al'], 'arteriole.'),
          S('املای انگلیسی «مویرگ» را بنویس', 'capillary', 'جمع: capillaries.', 'capi…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc2', title: 'لایه‌های دیواره رگ', icon: '🧅', items: [
          L('سه پوشش', `دیواره سرخرگ و سیاهرگ سه لایه دارد. tunica یعنی «پوشش» یا «ردا»:${fig('vessel-wall')}${tbl([['لایه', 'جا', 'ساختار'], [e('tunica intima'), 'درونی', 'endothelium صاف'], [e('tunica media'), 'میانی', 'ماهیچه صاف و رشته‌های کشسان'], [e('tunica adventitia'), 'بیرونی', 'بافت همبند']])}`),
          M('لایه ماهیچه‌ای دیواره رگ کدام است؟', ['tunica media', 'tunica intima', 'tunica adventitia', 'endothelium'], 'media = میانی.'),
          L('فضای درون رگ', `• <b>lumen</b>: فضای درون رگ که خون از آن می‌گذرد<br>• <b>endothelium</b>: یک لایه سلول صاف که lumen را می‌پوشاند؛ تنها لایه دیواره مویرگ${fig('vessel-layers', '', 'لایه‌های vein و artery؛ شبکه مویرگ‌ها فقط از endothelium ساخته شده است.')}${pearl('پلاک چربی در atherosclerosis زیر tunica intima جمع می‌شود و lumen را تنگ می‌کند؛ در دنیای بیماری‌ها این را دقیق‌تر می‌بینی.')}`),
          O('لایه‌های دیواره رگ را از درون به بیرون بچین', ['tunica intima', 'tunica media', 'tunica adventitia'], 'درونی، میانی، بیرونی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['lumen', 'فضای درون رگ'], ['endothelium', 'پوشش صاف درونی'], ['tunica adventitia', 'لایه همبند بیرونی'], ['tunica media', 'لایه ماهیچه صاف']]),
          T('دیواره مویرگ سه لایه دارد.', false, 'نادرست؛ فقط endothelium دارد تا تبادل آسان باشد.'),
          L('سرخرگ یا سیاهرگ زیر میکروسکوپ؟', `${vs(['artery', 'دیواره ضخیم، tunica media پهن، lumen گرد و کوچک'], ['vein', 'دیواره نازک، lumen پهن و نامنظم، دارای venous valve'])}${memo('سرخرگ «سفت و گرد» است، سیاهرگ «شل و پهن».')}`),
          B('فضای درون رگ را ___ می‌نامند.', ['lumen', 'septum', 'apex'], 'lumen یعنی روشنایی یا فضای باز.'),
          M('در کدام نوع رگ دریچه دیده می‌شود؟', ['vein', 'artery', 'arteriole', 'capillary'], 'venous valve.'),
          S('املای انگلیسی «پوشش درونی رگ» را بنویس', 'endothelium', 'endo- (درون) + theli (پوشش) + -um.', 'endo…'),
          N('f2t:vc')
        ]
      },
      {
        id: 'vc3', title: 'تنگ و گشاد', icon: '↔️', items: [
          L('ماهیچه رگ فرمان می‌گیرد', `ماهیچه صاف tunica media می‌تواند قطر رگ را عوض کند:${fig('vaso')}${vs(['vasoconstriction', 'تنگ شدن رگ؛ فشار خون بالا می‌رود'], ['vasodilation', 'گشاد شدن رگ؛ فشار خون پایین می‌آید'])}`),
          M('در هوای سرد، رگ‌های پوست تنگ می‌شوند تا گرما حفظ شود. نام این پدیده چیست؟', ['vasoconstriction', 'vasodilation', 'vasospasm', 'perfusion'], 'vas/o + constriction.'),
          L('واژه‌ها را بشکن', `• ${wb('vas/o', '-constriction')} ← تنگ شدن رگ<br>• ${wb('vas/o', '-dilation')} ← گشاد شدن رگ<br>• ${e('vasodilator')}: دارویی که رگ را گشاد می‌کند، مثل nitroglycerin${memo('dilation مثل «دل باز»: رگ دلش باز می‌شود و گشاد می‌شود!')}`),
          T('vasodilation فشار خون را بالا می‌برد.', false, 'نادرست؛ گشاد شدن رگ مقاومت و فشار را کم می‌کند.'),
          L('خون‌رسانی', `<b>perfusion</b> یعنی رسیدن خون به بافت از راه مویرگ‌ها. اگر رگ تنگ یا بسته شود، perfusion کم می‌شود و بافت دچار <b>ischemia</b> می‌شود.${pearl('در شوک، perfusion اندام‌ها کم می‌شود: پوست سرد و رنگ‌پریده، ادرار کم و هوشیاری پایین.')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['vasoconstriction', 'تنگ شدن رگ'], ['vasodilation', 'گشاد شدن رگ'], ['perfusion', 'خون‌رسانی به بافت'], ['ischemia', 'کم‌خونی موضعی بافت']]),
          B('دارویی که رگ را گشاد می‌کند ___ نام دارد.', ['vasodilator', 'vasopressor', 'anticoagulant'], 'vas/o + dilat + -or.'),
          W('واژه‌ای بساز به معنی «گشاد شدن رگ»', ['vas/o', '-dilation'], ['-constriction', 'angi/o', '-spasm'], 'vasodilation.'),
          L('مرور سطح «انواع رگ»', recap(['زنجیره: artery → arteriole → capillary → venule → vein؛ ‎-ole و ‎-ule یعنی کوچک', 'سرخرگ دیواره ماهیچه‌ای ضخیم دارد؛ سیاهرگ دریچه دارد؛ مویرگ فقط endothelium', 'دیواره: tunica intima (درونی) → tunica media (ماهیچه) → tunica adventitia (بیرونی)؛ lumen فضای درون رگ', 'vasoconstriction فشار را بالا و vasodilation پایین می‌برد؛ perfusion یعنی خون‌رسانی به بافت'])),
          N('m2r:vc')
        ]
      },

      /* ================= سطح ۲: گردش‌های خون ================= */
      {
        id: 'vc4', title: 'گردش کوچک و بزرگ', icon: '♾️', items: [
          L('دو حلقه به شکل هشت', `خون در دو حلقه می‌چرخد که در قلب به هم می‌رسند:${fig('two-circuits')}${vs(['pulmonary circulation', 'گردش ریوی (کوچک): از بطن راست به ریه و برگشت به دهلیز چپ'], ['systemic circulation', 'گردش عمومی (بزرگ): از بطن چپ به همه بدن و برگشت به دهلیز راست'])}`),
          M('گردش خونی که از بطن چپ شروع می‌شود و به همه بدن می‌رود کدام است؟', ['systemic circulation', 'pulmonary circulation', 'coronary circulation', 'fetal circulation'], 'systemic = همه دستگاه‌ها.'),
          L('در تصویر کتاب', `${fig('circulation', '', 'قرمز: خون پراکسیژن (blood high in oxygen)؛ آبی: خون کم‌اکسیژن. حلقه بالا گردش ریوی و حلقه پایین گردش عمومی است.')}در گردش ریوی خون <b>اکسیژن می‌گیرد</b> و دی‌اکسید کربن را پس می‌دهد؛ در گردش عمومی خون <b>اکسیژن را به بافت‌ها می‌دهد</b>.${memo('pulmonary را با «پُلمون، ریه» به خاطر بسپار: pulmon/o یعنی ریه.')}`),
          T('در pulmonary circulation خون از بطن چپ به ریه‌ها می‌رود.', false, 'نادرست؛ از بطن راست به ریه‌ها می‌رود.'),
          O('گردش ریوی را بچین', ['right ventricle', 'pulmonary artery', 'lungs', 'pulmonary veins', 'left atrium'], 'از بطن راست تا دهلیز چپ.'),
          P('هر گردش را به ویژگی‌اش وصل کن', [['pulmonary circulation', 'گرفتن اکسیژن در ریه'], ['systemic circulation', 'رساندن اکسیژن به بافت‌ها'], ['coronary circulation', 'خون‌رسانی به خود قلب']]),
          B('ریشه pulmon/o در pulmonary یعنی ___.', ['ریه', 'قلب', 'رگ'], 'pulmon/o = ریه.'),
          M('خون کم‌اکسیژن بدن به کدام حفره برمی‌گردد؟', ['right atrium', 'left atrium', 'left ventricle', 'right ventricle'], 'از راه venae cavae.'),
          S('املای انگلیسی «ریوی» را بنویس', 'pulmonary', 'pulmon/o + -ary.', 'pulmo…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc5', title: 'گردش کرونری و جانبی', icon: '🔀', items: [
          L('گردش سوم: برای خود قلب', `<b>coronary circulation</b> خون‌رسانی به خود ماهیچه قلب است: coronary arteries از ابتدای آئورت جدا می‌شوند و خون از coronary sinus به right atrium برمی‌گردد.${fig('coronary-map')}${pearl('بیشترِ جریان کرونر در diastole است؛ وقتی قلب شل است، رگ‌های درون دیواره فشرده نیستند. برای همین tachycardia شدید خون‌رسانی قلب را کم می‌کند.')}`),
          M('خون‌رسانی کرونر بیشتر در کدام مرحله چرخه قلب است؟', ['diastole', 'systole', 'depolarization', 'ejection'], 'رگ‌های دیواره در استراحت باز هستند.'),
          L('راه‌های فرعی', `• <b>anastomosis</b>: به هم پیوستن دو رگ؛ چه طبیعی و چه با جراحی<br>• <b>collateral circulation</b> (گردش جانبی): رگ‌های فرعی کوچکی که اگر رگ اصلی آرام‌آرام تنگ شود، بزرگ می‌شوند و راه دیگری برای خون می‌سازند${memo('collateral را «کنارراه» بخوان: col = با، lateral = کنار؛ مثل جاده کمربندی وقتی خیابان اصلی بسته است.')}`),
          T('collateral circulation وقتی رگ اصلی آرام‌آرام تنگ شود، شکل می‌گیرد.', true, 'رگ‌های فرعی فرصت بزرگ شدن دارند.'),
          P('هر واژه را به معنی‌اش وصل کن', [['anastomosis', 'به هم پیوستن دو رگ'], ['collateral circulation', 'راه فرعی خون'], ['coronary circulation', 'خون‌رسانی به ماهیچه قلب'], ['coronary sinus', 'برگشت خون قلب به RA']]),
          L('چرا مهم است؟', `${vs(['انسداد ناگهانی', 'فرصتی برای ساختن راه فرعی نیست؛ بافت زود آسیب می‌بیند'], ['تنگی آهسته', 'collateral circulation شکل می‌گیرد و آسیب کمتر است'])}جراح در <b>bypass</b> هم یک anastomosis می‌سازد: رگ سالم را پیش و پس از تنگی به سرخرگ وصل می‌کند.`),
          M('جراح در عمل بای‌پس دو سر رگ پیوندی را به سرخرگ می‌دوزد. نام این اتصال چیست؟', ['anastomosis', 'occlusion', 'embolism', 'ligation'], 'anastomosis.'),
          B('رگ‌های فرعی که دور یک تنگی راه تازه می‌سازند ___ circulation نام دارند.', ['collateral', 'systemic', 'pulmonary'], 'گردش جانبی.'),
          S('املای انگلیسی «به هم پیوستن رگ‌ها» را بنویس', 'anastomosis', 'جمع: anastomoses.', 'anasto…'),
          N('d2t:vc')
        ]
      },
      {
        id: 'vc6', title: 'گردش خون جنین', icon: '👶', items: [
          L('ریه‌هایی که هنوز نفس نمی‌کشند', `جنین اکسیژن را از جفت (placenta) می‌گیرد، نه از ریه‌ها. پس <b>fetal circulation</b> دو میان‌بُر دارد تا خون از ریه‌های خاموش رد شود:${fig('fetal-shunts')}`),
          L('دو میان‌بُر', `${tbl([['میان‌بُر', 'جا', 'کار'], [e('foramen ovale'), 'دیواره میان دو دهلیز', 'خون از RA مستقیم به LA می‌رود'], [e('ductus arteriosus'), 'میان pulmonary artery و aorta', 'خون از سرخرگ ریوی مستقیم به آئورت می‌رود']])}${memo('foramen ovale یعنی «سوراخ بیضی» و ductus arteriosus یعنی «مجرای سرخرگی»: یکی سوراخ است، دیگری لوله.')}`),
          M('در جنین، کدام ساختار خون را از دهلیز راست به دهلیز چپ می‌برد؟', ['foramen ovale', 'ductus arteriosus', 'coronary sinus', 'pulmonary vein'], 'سوراخ بیضی در دیواره میان دهلیزها.'),
          P('هر میان‌بُر را به جایش وصل کن', [['foramen ovale', 'میان دو دهلیز'], ['ductus arteriosus', 'میان سرخرگ ریوی و آئورت'], ['placenta', 'جای گرفتن اکسیژن در جنین']]),
          L('پس از تولد', `با نخستین نفس، ریه‌ها باز می‌شوند و فشار در نیمه چپ قلب بالا می‌رود: foramen ovale بسته می‌شود و ductus arteriosus در چند روز تنگ و بسته می‌شود.${pearl('اگر ductus arteriosus باز بماند به آن patent ductus arteriosus یا PDA می‌گویند؛ patent یعنی «باز». در نوزاد نارس شایع است و سوفل ماشینی می‌دهد.')}`),
          T('PDA یعنی ductus arteriosus پس از تولد باز مانده است.', true, 'patent = باز.'),
          B('واژه patent در PDA یعنی ___.', ['باز', 'بسته', 'تنگ'], 'patent ductus arteriosus.'),
          M('چرا جنین به این میان‌بُرها نیاز دارد؟', ['چون ریه‌ها هنوز کار نمی‌کنند', 'چون قلب جنین سه حفره دارد', 'چون خون جنین اکسیژن ندارد', 'چون آئورت هنوز ساخته نشده'], 'اکسیژن از جفت می‌آید.'),
          L('مرور سطح «گردش‌های خون»', recap(['pulmonary circulation: RV → pulmonary artery → lungs → pulmonary veins → LA', 'systemic circulation: LV → aorta → body tissues → venae cavae → RA', 'coronary circulation بیشتر در diastole؛ anastomosis و collateral circulation راه‌های فرعی‌اند', 'جنین: foramen ovale (RA به LA) و ductus arteriosus (pulmonary artery به aorta)؛ باز ماندنش PDA'])),
          N('f2t:vc')
        ]
      },

      /* ================= سطح ۳: نقشه رگ‌ها و لنف ================= */
      {
        id: 'vc7', title: 'سرخرگ‌های بدن', icon: '🗺️', items: [
          L('نام سرخرگ از جایش می‌آید', `بیشتر سرخرگ‌ها هم‌نام استخوان یا ناحیه‌ای‌اند که از کنارش می‌گذرند:${fig('arteries-body', '', 'سرخرگ‌های اصلی بدن از نمای روبه‌رو؛ نام هر سرخرگ از ناحیه‌اش آمده است.')}`),
          L('مهم‌ترین‌ها', `${tbl([['سرخرگ', 'جا'], [e('carotid artery'), 'گردن؛ خون‌رسانی مغز'], [e('subclavian artery'), 'زیر ترقوه؛ به سوی دست'], [e('brachial artery'), 'بازو؛ جای سنجش فشار خون'], [e('radial artery'), 'ساعد و مچ؛ جای گرفتن نبض'], [e('abdominal aorta'), 'شکم'], [e('femoral artery'), 'ران؛ راه ورود کاتتر'], [e('popliteal artery'), 'پشت زانو']])}${memo('sub-clavian = زیرِ ترقوه (clavicle)؛ brachial = بازو؛ femoral = ران (femur). نام سرخرگ را از استخوان کناری‌اش حدس بزن!')}`),
          M('سرخرگی که در گردن خون مغز را می‌رساند کدام است؟', ['carotid artery', 'subclavian artery', 'jugular vein', 'brachial artery'], 'carotid.'),
          P('هر سرخرگ را به جایش وصل کن', [['brachial', 'بازو'], ['femoral', 'ران'], ['popliteal', 'پشت زانو'], ['subclavian', 'زیر ترقوه']]),
          L('شاخه‌های آئورت', `aortic arch سه شاخه دارد: brachiocephalic trunk، left common carotid و left subclavian. پس از عبور از دیافراگم، descending aorta را <b>abdominal aorta</b> می‌نامند که در پایین به دو <b>iliac artery</b> تقسیم می‌شود.${pearl('در آنژیوگرافی کاتتر را اغلب از femoral artery یا radial artery وارد می‌کنند و تا آئورت و کرونرها پیش می‌برند.')}`),
          T('فشار خون معمولاً روی brachial artery اندازه‌گیری می‌شود.', true, 'کاف دور بازو و گوشی روی سرخرگ بازویی.'),
          M('کاتتر آنژیوگرافی را اغلب از کدام سرخرگ وارد می‌کنند؟', ['femoral artery', 'carotid artery', 'popliteal artery', 'pulmonary artery'], 'یا radial artery در مچ.'),
          B('آئورت در شکم ___ aorta نام دارد.', ['abdominal', 'ascending', 'thoracic'], 'abdomin/o = شکم.'),
          S('املای انگلیسی «سرخرگ گردنی» (بدون artery) را بنویس', 'carotid', 'carotid artery.', 'caro…'),
          N('t2f:vc')
        ]
      },
      {
        id: 'vc8', title: 'سیاهرگ‌های بدن', icon: '🌊', items: [
          L('سیاهرگ‌های سطحی و عمقی', `سیاهرگ‌ها دو دسته‌اند: <b>عمقی</b> که کنار سرخرگ‌ها و هم‌نام آن‌هایند (مثل femoral vein) و <b>سطحی</b> که زیر پوست دیده می‌شوند.${fig('veins-body', '', 'سیاهرگ‌های اصلی بدن؛ آبی یعنی خون کم‌اکسیژن.')}`),
          L('مهم‌ترین‌ها', `${tbl([['سیاهرگ', 'جا و کاربرد'], [e('jugular vein'), 'گردن؛ برگرداندن خون سر'], [e('subclavian vein'), 'زیر ترقوه؛ جای کاتتر مرکزی'], [e('median cubital vein'), 'جلوی آرنج؛ خون‌گیری'], [e('great saphenous vein'), 'بلندترین سیاهرگ بدن؛ داخل پا'], [e('femoral vein'), 'ران؛ کنار femoral artery']])}${memo('jugular از jugulum لاتین یعنی «گلو» آمده است: سیاهرگِ گلو، در دو طرف گردن.')}`),
          M('بلندترین سیاهرگ بدن که در جراحی بای‌پس هم برداشته می‌شود کدام است؟', ['great saphenous vein', 'femoral vein', 'jugular vein', 'inferior vena cava'], 'از روی پا تا کشاله ران.'),
          P('هر سیاهرگ را به جایش وصل کن', [['jugular', 'گردن'], ['median cubital', 'جلوی آرنج'], ['great saphenous', 'داخل پا'], ['subclavian', 'زیر ترقوه']]),
          L('خون‌گیری', `${wb('ven/o', 'punct', '-ure')} = <b>venipuncture</b>: سوراخ کردن سیاهرگ با سوزن برای خون‌گیری یا تزریق. ${e('phlebotomy')} هم همین معنا را دارد.${pearl('در بیمار با نارسایی قلب، jugular vein در گردن برجسته و پر دیده می‌شود: JVD یا jugular venous distention.')}`),
          T('venipuncture یعنی سوراخ کردن سرخرگ.', false, 'نادرست؛ ven/o یعنی سیاهرگ.'),
          M('خون‌گیری معمولاً از کدام سیاهرگ انجام می‌شود؟', ['median cubital vein', 'great saphenous vein', 'jugular vein', 'portal vein'], 'جلوی آرنج، سطحی و پهن.'),
          B('برجسته شدن سیاهرگ گردن در نارسایی قلب را ___ می‌نامند.', ['JVD', 'DVT', 'PDA'], 'jugular venous distention.'),
          S('املای انگلیسی «خون‌گیری از سیاهرگ» را بنویس', 'venipuncture', 'ven/o + punct (سوراخ کردن) + -ure.', 'veni…'),
          N('f2t:vc')
        ]
      },
      {
        id: 'vc9', title: 'لنف: زهکش بدن', icon: '🫧', items: [
          L('مایعی که برمی‌گردد', `کمی از مایع خون از مویرگ‌ها به بافت نشت می‌کند. این مایع را <b>lymph</b> (لنف) می‌نامند و <b>lymphatic vessels</b> آن را جمع می‌کنند و به خون برمی‌گردانند.<br>• <b>lymph node</b>: گره‌های لوبیایی که لنف را صاف می‌کنند و میکروب را می‌گیرند<br>• <b>thoracic duct</b>: بزرگ‌ترین مجرای لنفی؛ لنف را به left subclavian vein می‌ریزد`),
          M('بزرگ‌ترین مجرای لنفاوی بدن کدام است؟', ['thoracic duct', 'lymph node', 'jugular vein', 'ductus arteriosus'], 'thoracic = قفسه سینه.'),
          L('ساختمان گره لنفی', `${fig('lymph-node', '', 'لنف از afferent vessel وارد و از efferent vessel در hilum خارج می‌شود؛ دریچه‌ها جهت جریان را یک‌طرفه نگه می‌دارند.')}${vs(['afferent', 'رگ ورودی به گره'], ['efferent', 'رگ خروجی از گره'])}${memo('Afferent = Arrive (رسیدن) و Efferent = Exit (خروج).')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['lymph', 'مایع نشت‌کرده از مویرگ'], ['lymph node', 'صافی لنف'], ['thoracic duct', 'بزرگ‌ترین مجرای لنفی'], ['afferent vessel', 'رگ ورودی به گره']]),
          T('رگ‌های لنفی مثل سیاهرگ‌ها دریچه دارند.', true, 'جریان یک‌طرفه به سوی قلب.'),
          L('وقتی زهکش بسته است', `اگر رگ‌های لنفی بسته شوند، مایع در بافت می‌ماند و <b>lymphedema</b> (ورم لنفی) می‌دهد.${pearl('پس از برداشتن گره‌های زیر بغل در جراحی سرطان پستان، از دست همان سمت خون‌گیری و فشار گرفتن نمی‌کنند تا lymphedema بدتر نشود.')}`),
          B('ورم ناشی از بسته شدن رگ‌های لنفی ___ نام دارد.', ['lymphedema', 'lymphoma', 'lymphocyte'], 'lymph/o + edema.'),
          M('thoracic duct لنف را به کدام رگ می‌ریزد؟', ['left subclavian vein', 'aorta', 'pulmonary artery', 'femoral vein'], 'در پایه گردن، سمت چپ.'),
          L('مرور سطح «نقشه رگ‌ها و لنف»', recap(['سرخرگ‌ها: carotid (گردن)، subclavian، brachial (فشار خون)، radial (نبض)، abdominal aorta، femoral (کاتتر)، popliteal', 'سیاهرگ‌ها: jugular، subclavian، median cubital (خون‌گیری)، great saphenous (بلندترین؛ پیوند بای‌پس)، femoral', 'venipuncture = ven/o + punct + -ure؛ JVD در نارسایی قلب', 'لنف: lymphatic vessels، lymph node (afferent ورودی و efferent خروجی)، thoracic duct به left subclavian vein؛ lymphedema'])),
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
    id: 'ds', sym: 'Path', name: 'بیماری‌های قلب و رگ', short: 'بیماری', sub: 'آترواسکلروز، بیماری کرونر و سکته قلبی، آریتمی‌ها، دریچه‌ها و نقص‌های مادرزادی، نارسایی قلب، فشار خون، آنوریسم، لخته و واریس',
    color: '#AE3EC9', dark: '#7B2A8F', light: '#F5E3FA',
    levels: ['رگ‌های تنگ و بسته', 'ریتم، دریچه و ماهیچه', 'فشار، لخته و سیاهرگ'],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: رگ‌های تنگ و بسته ================= */
      {
        id: 'ds1', title: 'پلاک در سرخرگ', icon: '🧈', items: [
          L('سرخرگی که آرام‌آرام تنگ می‌شود', `در <b>atherosclerosis</b> چربی و کلسترول زیر tunica intima جمع می‌شود و <b>plaque</b> (پلاک) یا <b>atheroma</b> می‌سازد؛ lumen تنگ‌تر و تنگ‌تر می‌شود.${fig('athero-steps')}${fig('athero-stages', '', 'از سرخرگ normal تا plaque بزرگ و لخته روی آن.')}`),
          M('atheroma یعنی…', ['توده پلاک چربی در دیواره سرخرگ', 'لخته سرگردان', 'گشاد شدن سرخرگ', 'التهاب سیاهرگ'], 'ather/o (پلاک چربی) + -oma (توده).'),
          L('دو بیماری با نام شبیه', `${vs(['arteriosclerosis', 'سخت و بی‌انعطاف شدن دیواره سرخرگ؛ بیشتر با پیری و فشار خون'], ['atherosclerosis', 'نوعی از آن با پلاک چربی در دیواره'])}${fig('athero-arterio', '', 'از چپ: سرخرگ سالم، atherosclerosis با پلاک زرد و arteriosclerosis با دیواره ضخیم و سفت.')}${memo('arterio = سرخرگ؛ athero = آش چربی. هر atherosclerosis یک arteriosclerosis است، ولی نه برعکس.')}`),
          T('atherosclerosis نوعی arteriosclerosis است.', true, 'سخت شدن سرخرگ همراه با پلاک چربی.'),
          L('از پلاک تا انسداد', `${fig('plaque-clot', '', 'A: پلاک در دیواره، آسیب به endothelium و چسبیدن پلاکت‌ها؛ B: تنگی متوسط، لخته نیمه‌بسته و لخته کاملاً بسته.')}وقتی سطح پلاک پاره شود، پلاکت‌ها روی آن می‌چسبند و <b>thrombus</b> (لخته) می‌سازند. بسته شدن کامل رگ را <b>occlusion</b> می‌گویند.`),
          O('مراحل بسته شدن سرخرگ را بچین', ['جمع شدن چربی زیر intima', 'تشکیل plaque', 'پاره شدن سطح پلاک', 'چسبیدن پلاکت‌ها و thrombus', 'occlusion'], 'از پلاک تا انسداد کامل.'),
          P('هر واژه را به معنی‌اش وصل کن', [['plaque', 'رسوب چربی در دیواره'], ['thrombus', 'لخته ثابت در رگ'], ['occlusion', 'بسته شدن کامل رگ'], ['stenosis', 'تنگی']]),
          B('بسته شدن کامل یک رگ را ___ می‌نامند.', ['occlusion', 'dilation', 'perfusion'], 'occlusion.'),
          W('واژه‌ای بساز به معنی «سخت شدن سرخرگ با پلاک چربی»', ['ather/o', '-sclerosis'], ['arteri/o', '-stenosis', 'thromb/o'], 'atherosclerosis.'),
          S('املای انگلیسی «آترواسکلروز» را بنویس', 'atherosclerosis', 'ather/o + -sclerosis.', 'athero…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: 'بیماری کرونر و آنژین', icon: '😣', items: [
          L('وقتی کرونرها تنگ می‌شوند', `<b>coronary artery disease</b> (CAD) یعنی atherosclerosis در سرخرگ‌های کرونر. ماهیچه قلب خون کافی نمی‌گیرد: <b>ischemia</b> (isch/o بازداشتن + ‎-emia خون).${fig('cad-ischemia', '', 'A: پلاک جریان خون را کم کرده و بخشی از قلب ischemic است؛ B: جریان کاملاً بسته شده و آن بخش infarct شده است.')}`),
          M('CAD مخفف چیست؟', ['coronary artery disease', 'cardiac arrest disorder', 'congenital aortic defect', 'chronic arterial dilation'], 'بیماری سرخرگ کرونر.'),
          L('درد قفسه سینه', `<b>angina pectoris</b> یعنی «درد فشارنده سینه» (pector/o = سینه) که با فعالیت یا هیجان می‌آید و با استراحت یا nitroglycerin زیر زبان کم می‌شود.${vs(['stable angina', 'با فعالیت، قابل پیش‌بینی، با استراحت خوب می‌شود'], ['unstable angina', 'در استراحت یا شدیدتر از همیشه؛ هشدار سکته قلبی'])}${pearl('درد آنژین اغلب فشاری است و به دست چپ، فک یا پشت تیر می‌کشد؛ در زنان و دیابتی‌ها ممکن است فقط تنگی نفس یا خستگی باشد.')}`),
          M('آقای ۶۰ ساله هنگام بالا رفتن از پله درد فشارنده سینه می‌گیرد که با ۵ دقیقه استراحت خوب می‌شود. تشخیص؟', ['stable angina', 'unstable angina', 'pericarditis', 'aortic dissection'], 'درد قابل پیش‌بینی با فعالیت.', [['سن', '۶۰ سال'], ['شکایت', 'درد سینه با پله'], ['بهبود', 'با استراحت']]),
          T('unstable angina در استراحت هم رخ می‌دهد و هشدار سکته قلبی است.', true, 'نیاز به بررسی فوری دارد.'),
          L('نشانه‌های همراه', `${tbl([['واژه', 'معنی'], [e('dyspnea'), 'تنگی نفس'], [e('diaphoresis'), 'تعریق زیاد'], [e('palpitation'), 'احساس تپش قلب'], [e('syncope'), 'غش، از دست دادن کوتاه هوشیاری']])}${memo('dys- یعنی بد یا سخت و ‎-pnea یعنی تنفس: dyspnea = سخت نفس کشیدن.')}`),
          P('هر نشانه را به معنی‌اش وصل کن', [['dyspnea', 'تنگی نفس'], ['diaphoresis', 'تعریق زیاد'], ['syncope', 'غش'], ['angina pectoris', 'درد فشارنده سینه']]),
          B('در ischemia، پسوند ___ یعنی «حالت خون».', ['-emia', '-osis', '-itis'], 'isch/o + -emia.'),
          S('املای انگلیسی «تنگی نفس» را بنویس', 'dyspnea', 'dys- + -pnea.', 'dysp…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: 'سکته قلبی', icon: '💔', items: [
          L('وقتی ماهیچه می‌میرد', `اگر سرخرگ کرونر ناگهان کاملاً بسته شود، ماهیچه پشت انسداد می‌میرد: <b>myocardial infarction</b> (MI) یا سکته قلبی.<br>• <b>infarct</b>: ناحیه بافت مرده از نبود خون<br>• <b>necrosis</b>: مرگ بافت (necr/o = مرده)${fig('mi', '', 'پلاک چربی درون سرخرگ و ناحیه necrotic (بافت مرده) پشت آن.')}`),
          M('myocardial infarction یعنی…', ['مرگ بخشی از ماهیچه قلب از نبود خون', 'التهاب ماهیچه قلب', 'بزرگ شدن قلب', 'بی‌نظمی ضربان'], 'my/o + cardi/o + infarct.'),
          L('ischemia یا infarct؟', `${vs(['ischemia', 'کمبود خون؛ هنوز برگشت‌پذیر'], ['infarct', 'بافت مرده؛ برگشت‌ناپذیر'])}${fig('infarct-area', '', 'area of infarct در دیواره بطن چپ؛ برش نشان می‌دهد ناحیه مرده تا عمق دیواره رفته است.')}${memo('«زمان یعنی ماهیچه» (time is muscle): هر دقیقه تأخیر در باز کردن رگ، ماهیچه بیشتری infarct می‌شود.')}`),
          T('ischemia همیشه برگشت‌ناپذیر است.', false, 'نادرست؛ ischemia اگر زود درمان شود برمی‌گردد؛ infarct برنمی‌گردد.'),
          L('نشانه‌ها و تشخیص', `درد شدید سینه بیش از ۲۰ دقیقه، diaphoresis، dyspnea و تهوع. تشخیص با:<br>• ECG: بالا رفتن ST segment (STEMI)<br>• آزمایش خون: بالا رفتن <b>troponin</b> و <b>cardiac enzymes</b>${pearl('اگر بیمار ناگهان بی‌هوش شود و نبض نداشته باشد، cardiac arrest رخ داده است؛ اغلب به دلیل ventricular fibrillation پس از MI.')}`),
          M('کدام آزمایش خون برای تشخیص MI بالا می‌رود؟', ['troponin', 'hemoglobin', 'glucose', 'creatinine'], 'پروتئین ماهیچه قلب.'),
          O('رویدادهای سکته قلبی را بچین', ['پاره شدن پلاک کرونر', 'لخته و occlusion', 'ischemia', 'infarct و necrosis'], 'از پلاک تا مرگ بافت.'),
          P('هر واژه را به معنی‌اش وصل کن', [['infarct', 'ناحیه بافت مرده'], ['necrosis', 'مرگ بافت'], ['troponin', 'نشانگر آسیب قلب در خون'], ['STEMI', 'سکته با بالا رفتن ST']]),
          L('مرور سطح «رگ‌های تنگ و بسته»', recap(['atherosclerosis: پلاک (atheroma) در دیواره سرخرگ؛ نوعی arteriosclerosis', 'plaque → پاره شدن → thrombus → occlusion؛ stenosis یعنی تنگی', 'CAD → ischemia → angina pectoris (stable یا unstable)؛ dyspnea، diaphoresis، syncope', 'MI: infarct و necrosis ماهیچه قلب؛ ST بالا در ECG و troponin بالا در خون'])),
          N('d2t:ds')
        ]
      },

      /* ================= سطح ۲: ریتم، دریچه و ماهیچه ================= */
      {
        id: 'ds4', title: 'آریتمی‌ها', icon: '〰️', items: [
          L('ریتم‌های خطرناک', `<b>arrhythmia</b> یعنی ضربان نامنظم یا غیرطبیعی. چهار ریتم مهم را کنار هم ببین:${fig('arrhythmias')}`),
          L('لرزش به‌جای انقباض', `<b>fibrillation</b> یعنی لرزش سریع و بی‌نظم رشته‌های ماهیچه به‌جای انقباض یک‌پارچه:${vs(['atrial fibrillation', 'دهلیزها می‌لرزند؛ ضربان نامنظم و بدون موج P؛ خطر لخته و سکته مغزی'], ['ventricular fibrillation', 'بطن‌ها می‌لرزند؛ هیچ خونی پمپ نمی‌شود؛ ایست قلبی'])}${memo('«دهلیز بلرزد، بیمار راه می‌رود؛ بطن بلرزد، بیمار می‌افتد.»')}`),
          M('در کدام ریتم بیمار نبض ندارد و فوراً به شوک (defibrillation) نیاز دارد؟', ['ventricular fibrillation', 'atrial fibrillation', 'sinus bradycardia', 'atrial flutter'], 'VF یعنی ایست قلبی.'),
          L('ریتم‌های دیگر', `${tbl([['ریتم', 'ویژگی'], [e('atrial flutter'), 'دهلیزها خیلی تند و منظم؛ موج‌های دندانه‌ارّه‌ای'], [e('PVC'), 'premature ventricular contraction: ضربان زودرس از بطن'], [e('asystole'), 'نبود هیچ فعالیت برقی؛ خط صاف'], [e('WPW syndrome'), 'Wolff-Parkinson-White: راه برقی اضافه میان دهلیز و بطن']])}${pearl('بیمار atrial fibrillation داروی anticoagulant می‌گیرد، چون خون در دهلیزِ لرزان راکد می‌ماند و لخته می‌سازد که به مغز می‌رود.')}`),
          P('هر ریتم را به ویژگی‌اش وصل کن', [['atrial fibrillation', 'نامنظم، بدون موج P'], ['atrial flutter', 'دندانه‌ارّه‌ای'], ['asystole', 'خط صاف'], ['PVC', 'ضربان زودرس بطنی']]),
          T('در atrial fibrillation خطر سکته مغزی بیشتر است.', true, 'لخته در دهلیز راکد ساخته می‌شود.'),
          M('خط صاف در مانیتور بیمار بی‌هوش یعنی…', ['asystole', 'ventricular fibrillation', 'atrial flutter', 'normal sinus rhythm'], 'a- (بدون) + systole (انقباض).'),
          B('توقف ناگهانی کار پمپ قلب را ___ می‌نامند.', ['cardiac arrest', 'cardiac output', 'cardiac cycle'], 'cardiac arrest.'),
          S('املای انگلیسی «فیبریلاسیون» را بنویس', 'fibrillation', 'fibrill (رشته کوچک) + -ation.', 'fibri…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds5', title: 'دریچه‌ها و نقص‌های مادرزادی', icon: '🚪', items: [
          L('دو راه خرابی دریچه', `${fig('valve-problems')}${vs(['stenosis', 'دریچه سفت است و خوب باز نمی‌شود؛ بطن باید زور بیشتری بزند'], ['regurgitation', 'دریچه خوب بسته نمی‌شود؛ خون به عقب برمی‌گردد (insufficiency)'])}هر دو حالت جریان آشفته و <b>murmur</b> (سوفل) می‌سازند.`),
          M('دریچه‌ای که خوب بسته نمی‌شود و خون را به عقب برمی‌گرداند چه مشکلی دارد؟', ['regurgitation', 'stenosis', 'occlusion', 'fibrillation'], 'برگشت خون.'),
          L('بیماری‌های رایج دریچه', `• <b>mitral valve prolapse</b> (MVP): لت‌های میترال هنگام انقباض به درون دهلیز چپ برآمده می‌شوند؛ صدای «کلیک»<br>• <b>rheumatic heart disease</b>: آسیب دریچه‌ها، به‌ویژه میترال، سال‌ها پس از گلودرد استرپتوکوکی درمان‌نشده<br>• <b>endocarditis</b>: عفونت پوشش درونی و دریچه‌ها${pearl('گلودرد چرکی کودکان را کامل با آنتی‌بیوتیک درمان می‌کنند تا به rheumatic fever و آسیب دریچه نرسد.')}`),
          T('در mitral valve prolapse لت‌ها به درون بطن چپ برآمده می‌شوند.', false, 'نادرست؛ به درون دهلیز چپ برآمده می‌شوند.'),
          L('نقص‌های مادرزادی', `<b>congenital heart disease</b> یعنی نقص ساختاری قلب از هنگام تولد:${fig('heart-defects')}${tbl([['نقص', 'معنی'], [e('ASD'), 'atrial septal defect: سوراخ در دیواره میان دهلیزها'], [e('VSD'), 'ventricular septal defect: سوراخ در دیواره میان بطن‌ها'], [e('PDA'), 'patent ductus arteriosus: باز ماندن مجرای جنینی'], [e('CoA'), 'coarctation of the aorta: تنگی مادرزادی آئورت']])}`),
          P('هر اختصار را به نقصش وصل کن', [['ASD', 'سوراخ میان دهلیزها'], ['VSD', 'سوراخ میان بطن‌ها'], ['PDA', 'باز ماندن ductus arteriosus'], ['CoA', 'تنگی مادرزادی آئورت']]),
          L('چهارگانه فالو', `<b>tetralogy of Fallot</b> (tetra- = چهار) چهار نقص با هم دارد: VSD، تنگی دریچه ریوی، آئورتِ سوار بر دو بطن و ضخیم شدن بطن راست. خون کم‌اکسیژن به بدن می‌رود و نوزاد <b>cyanosis</b> (کبودی) دارد.${memo('tetra = چهار، مثل تتراپک که چهار وجه دارد.')}`),
          M('نوزادی کبود است و در اکو VSD، تنگی دریچه ریوی، آئورت سوار و بطن راست ضخیم دیده می‌شود. تشخیص؟', ['tetralogy of Fallot', 'patent ductus arteriosus', 'coarctation of the aorta', 'mitral valve prolapse'], 'چهار نقص با هم.', [['بیمار', 'نوزاد'], ['نشانه', 'cyanosis'], ['اکو', 'چهار یافته']]),
          B('در coarctation of the aorta، آئورت ___ است.', ['تنگ', 'گشاد', 'دوشاخه'], 'تنگی مادرزادی.'),
          S('املای انگلیسی «سوفل» را بنویس', 'murmur', 'صدای جریان آشفته خون.', 'mur…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds6', title: 'نارسایی و ماهیچه قلب', icon: '🎈', items: [
          L('پمپی که کم می‌آورد', `در <b>heart failure</b> قلب نمی‌تواند به اندازه نیاز بدن خون پمپ کند. وقتی خون پشت قلب جمع شود و ورم بدهد، آن را <b>congestive heart failure</b> (CHF) می‌نامند (congestion = احتقان، انباشتگی).${vs(['left-sided failure', 'خون در ریه‌ها جمع می‌شود؛ dyspnea و سرفه'], ['right-sided failure', 'خون در بدن جمع می‌شود؛ ورم پا و JVD'])}`),
          M('بیمار CHF شب‌ها هنگام خوابیدن تنگی نفس می‌گیرد. خون در کجا جمع شده است؟', ['ریه‌ها (نارسایی چپ)', 'پاها (نارسایی راست)', 'کبد', 'مغز'], 'نارسایی بطن چپ خون را در ریه‌ها انباشته می‌کند.'),
          L('ورم', `<b>edema</b> یعنی جمع شدن مایع در بافت. در نارسایی قلب، ورم پا و مچ شایع است؛ اگر فشار انگشت جای فرورفته بگذارد، به آن <b>pitting edema</b> می‌گویند.${fig('edema', '', 'A: فرورفتگی پس از فشار انگشت (pitting edema)؛ B: ورم پا و مچ.')}${pearl('بیمار CHF هر روز صبح خودش را وزن می‌کند؛ افزایش بیش از یک کیلو در یک روز یعنی مایع جمع شده است.')}`),
          T('pitting edema یعنی پس از فشار انگشت، جای آن فرو رفته می‌ماند.', true, 'pit = گودی.'),
          L('ماهیچه بزرگ یا بیمار', `${tbl([['واژه', 'معنی'], [e('cardiomegaly'), 'بزرگی قلب؛ در عکس قفسه سینه'], [e('hypertrophy'), 'ضخیم شدن ماهیچه (hyper- + ‎-trophy رشد)'], [e('cardiomyopathy'), 'بیماری خود ماهیچه قلب'], [e('myocarditis'), 'التهاب ماهیچه قلب'], [e('cardiogenic shock'), 'شوک ناشی از ناتوانی پمپ قلب (‎-genic = ناشی از)']])}`),
          P('هر واژه را به معنی‌اش وصل کن', [['cardiomegaly', 'بزرگی قلب'], ['hypertrophy', 'ضخیم شدن ماهیچه'], ['edema', 'جمع شدن مایع در بافت'], ['cardiogenic shock', 'شوک از ناتوانی پمپ']]),
          W('واژه‌ای بساز به معنی «شوک با منشأ قلبی»', ['cardi/o', '-genic'], ['-megaly', 'my/o', '-itis'], 'cardi/o + -genic (ناشی از) = cardiogenic.'),
          B('ضخیم شدن دیواره بطن در فشار خون بالای طولانی را ___ می‌گویند.', ['ventricular hypertrophy', 'ventricular atrophy', 'ventricular dysplasia'], 'hyper- (بیش) + -trophy (رشد).'),
          L('مرور سطح «ریتم، دریچه و ماهیچه»', recap(['arrhythmia: atrial fibrillation (بی‌نظم، خطر لخته)، atrial flutter، PVC، ventricular fibrillation و asystole (ایست قلبی)', 'دریچه: stenosis (باز نمی‌شود) و regurgitation (بسته نمی‌شود)؛ MVP، rheumatic heart disease؛ murmur', 'مادرزادی: ASD، VSD، PDA، CoA و tetralogy of Fallot با cyanosis', 'CHF: نارسایی چپ dyspnea و نارسایی راست edema و JVD؛ cardiomegaly، hypertrophy، cardiomyopathy'])),
          N('m2r:ds')
        ]
      },

      /* ================= سطح ۳: فشار، لخته و سیاهرگ ================= */
      {
        id: 'ds7', title: 'فشار خون و آنوریسم', icon: '🎈', items: [
          L('دسته‌های فشار خون', `${fig('bp-categories')}<b>hypertension</b> (HTN) را «قاتل خاموش» می‌نامند: سال‌ها بی‌نشانه است و بی‌صدا به قلب، مغز، کلیه و چشم آسیب می‌زند.<br>• <b>stage 1</b> (مرحله ۱): systolic ۱۳۰ تا ۱۳۹ یا diastolic ۸۰ تا ۸۹<br>• <b>stage 2</b> (مرحله ۲): ۱۴۰/۹۰ یا بیشتر`),
          M('فشار خون ۱۳۴/۸۴ در کدام دسته است؟', ['hypertension stage 1', 'normal', 'elevated', 'hypotension'], 'systolic ۱۳۰ تا ۱۳۹ یا diastolic ۸۰ تا ۸۹.'),
          L('افت فشار', `• <b>hypotension</b>: فشار پایین، کمتر از حدود ۹۰/۶۰<br>• <b>orthostatic hypotension</b>: افت فشار هنگام برخاستن ناگهانی (ortho- = راست، ایستاده)؛ سرگیجه و گاهی syncope${memo('orthostatic را با «ارتو = راست‌قامت» به خاطر بسپار: افت فشار وقتی راست می‌ایستی.')}`),
          T('orthostatic hypotension هنگام دراز کشیدن رخ می‌دهد.', false, 'نادرست؛ هنگام ایستادن ناگهانی رخ می‌دهد.'),
          L('رگی که باد می‌کند', `<b>aneurysm</b> برآمدگی و گشاد شدن بخش ضعیفی از دیواره سرخرگ است:${fig('aneurysm-types', '', 'A: fusiform (دوکی، دور تا دور رگ)؛ B: saccular (کیسه‌ای، یک طرف)؛ C: dissecting (خون میان لایه‌های دیواره).')}${fig('dissecting', '', 'dissecting aneurysm آئورت: خون از پارگی intima وارد دیواره سرخرگ می‌شود.')}`),
          P('هر نوع آنوریسم را به شکلش وصل کن', [['fusiform', 'دوکی، دور تا دور رگ'], ['saccular', 'کیسه‌ای، یک طرف رگ'], ['dissecting', 'خون میان لایه‌های دیواره']]),
          L('آنوریسم آئورت شکمی', `${fig('aaa', '', 'abdominal aortic aneurysm زیر سرخرگ‌های کلیه؛ inferior vena cava کنار آن است.')}<b>abdominal aortic aneurysm</b> (AAA) اغلب در مردان مسن سیگاری است و تا پاره شدن بی‌نشانه می‌ماند.${pearl('توده ضربان‌دار در شکم یک نشانه AAA است؛ پارگی آن با درد ناگهانی شکم و پشت و افت فشار، اورژانس جراحی است.')}`),
          M('AAA مخفف چیست؟', ['abdominal aortic aneurysm', 'acute arterial anemia', 'atrial arrhythmia attack', 'aortic arch anomaly'], 'آنوریسم آئورت شکمی.'),
          S('املای انگلیسی «آنوریسم» را بنویس', 'aneurysm', 'دقت کن: eu و y.', 'aneu…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds8', title: 'لخته و سکته مغزی', icon: '🧠', items: [
          L('لخته ثابت، لخته سرگردان', `${fig('clot-travel')}${vs(['thrombus', 'لخته‌ای که به دیواره رگ چسبیده است (جمع: thrombi)'], ['embolus', 'لخته یا ذره‌ای که در خون حرکت می‌کند (جمع: emboli)'])}وقتی embolus در رگ باریک‌تری گیر کند و آن را ببندد، به آن <b>embolism</b> می‌گویند.`),
          M('لخته‌ای که از جای خود کنده شده و در خون حرکت می‌کند چه نام دارد؟', ['embolus', 'thrombus', 'plaque', 'atheroma'], 'embol/o = درپوش.'),
          L('از پا تا ریه', `<b>deep vein thrombosis</b> (DVT) یعنی لخته در سیاهرگ‌های عمقی پا؛ پا ورم‌کرده، گرم و دردناک است. اگر لخته کنده شود، از راه قلب راست به ریه می‌رود: <b>pulmonary embolism</b> (PE).${fig('dvt', '', 'thrombosis در سیاهرگ عمقی پا؛ ورم و التهاب پایین‌تر از انسداد.')}${pearl('بی‌حرکتی طولانی (پرواز، بستری، جراحی) خطر DVT را بالا می‌برد؛ برای همین پس از جراحی بیمار را زود راه می‌برند.')}`),
          O('مسیر یک لخته از پا تا ریه را بچین', ['DVT در سیاهرگ پا', 'کنده شدن embolus', 'inferior vena cava', 'right atrium و right ventricle', 'pulmonary artery: PE'], 'لخته سیاهرگی به ریه می‌رسد.'),
          L('سکته مغزی', `<b>stroke</b> یا CVA (cerebrovascular accident) یعنی آسیب مغز از قطع خون‌رسانی: اغلب از لخته یا پلاکی در <b>carotid artery</b>.${fig(['carotid-plaque', 'stroke'], ['پلاک در internal carotid artery و تکه کنده‌شده آن', 'ischemic stroke: لخته روی پلاک کاروتید و ناحیه آسیب مغز'])}${vs(['TIA', 'transient ischemic attack: نشانه‌های گذرا که در کمتر از ۲۴ ساعت کامل خوب می‌شود'], ['stroke', 'آسیب ماندگار بافت مغز'])}`),
          M('بیمار ۱۵ دقیقه ضعف دست راست داشته و حالا کاملاً خوب است. این چیست؟', ['TIA', 'stroke', 'syncope', 'MI'], 'transient = گذرا؛ هشدار سکته مغزی.'),
          L('صدای تنگی', `<b>bruit</b> صدای «وِش» است که با گوشی روی سرخرگ تنگ‌شده (مثل carotid) شنیده می‌شود؛ جریان آشفته خون از تنگی.${memo('bruit (برویی) در فرانسوی یعنی «صدا و همهمه».')}`),
          P('هر واژه را به معنی‌اش وصل کن', [['DVT', 'لخته در سیاهرگ عمقی'], ['PE', 'آمبولی ریه'], ['TIA', 'حمله گذرای ایسکمی مغز'], ['bruit', 'صدای جریان از سرخرگ تنگ']]),
          T('pulmonary embolism اغلب از لخته سیاهرگ‌های عمقی پا است.', true, 'DVT → PE.'),
          S('املای انگلیسی «لخته ثابت» را بنویس', 'thrombus', 'جمع: thrombi.', 'thro…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: 'سیاهرگ‌ها و رگ‌های محیطی', icon: '🦵', items: [
          L('دریچه‌هایی که خراب می‌شوند', `<b>varicose veins</b> (واریس) سیاهرگ‌های سطحی گشاد و پیچ‌خورده پاست. دریچه‌های سیاهرگ خوب بسته نمی‌شوند، خون به عقب برمی‌گردد و در سیاهرگ سطحی جمع می‌شود.${fig('varicose-valves', '', 'A: سیاهرگ سالم با دریچه‌های کارآمد و سیاهرگ واریسی با دریچه‌های ناکارآمد؛ B: واریس پا.')}`),
          M('علت اصلی varicose veins چیست؟', ['ناکارآمدی دریچه‌های سیاهرگ', 'پلاک چربی در سرخرگ', 'لخته در سرخرگ', 'تنگی آئورت'], 'برگشت خون و انباشتگی در سیاهرگ سطحی.'),
          L('واریس در نمای نزدیک', `${fig('varicose-photo', '', 'سیاهرگ‌های گشاد و پیچ‌خورده زیر پوست پا.')}واریس در ناحیه مقعد را <b>hemorrhoids</b> (بواسیر) می‌نامند.<br>• <b>phlebitis</b>: التهاب سیاهرگ<br>• <b>thrombophlebitis</b>: التهاب سیاهرگ همراه با لخته`),
          P('هر واژه را به معنی‌اش وصل کن', [['varicose veins', 'سیاهرگ گشاد و پیچ‌خورده'], ['phlebitis', 'التهاب سیاهرگ'], ['thrombophlebitis', 'التهاب سیاهرگ با لخته'], ['hemorrhoids', 'واریس ناحیه مقعد']]),
          W('واژه‌ای بساز به معنی «التهاب سیاهرگ همراه با لخته»', ['thromb/o', 'phleb/o', '-itis'], ['arteri/o', '-osis', 'ather/o'], 'thrombophlebitis.'),
          L('سرخرگ‌های محیطی', `• <b>peripheral artery disease</b> (PAD): atherosclerosis در سرخرگ‌های پا<br>• <b>claudication</b>: درد ساق هنگام راه رفتن که با ایستادن خوب می‌شود؛ نشانه PAD<br>• <b>Raynaud phenomenon</b>: سفید و کبود شدن انگشتان در سرما از vasospasm<br>• <b>vasculitis</b>: التهاب رگ‌ها${memo('claudication از نام امپراتور Claudius آمده که می‌لنگید: درد پا که آدم را لنگ می‌کند.')}`),
          M('آقای ۶۶ ساله سیگاری پس از ۲۰۰ متر راه رفتن درد ساق می‌گیرد که با ایستادن خوب می‌شود. این نشانه چیست؟', ['claudication', 'varicose veins', 'Raynaud phenomenon', 'edema'], 'نشانه PAD.', [['سن', '۶۶ سال'], ['سابقه', 'سیگار'], ['شکایت', 'درد ساق با راه رفتن']]),
          T('Raynaud phenomenon با گرفتگی رگ‌های انگشتان در سرما همراه است.', true, 'vasospasm.'),
          L('مرور سطح «فشار، لخته و سیاهرگ»', recap(['hypertension: ۱۳۰/۸۰ یا بیشتر؛ hypotension و orthostatic hypotension', 'aneurysm: fusiform، saccular و dissecting؛ AAA در آئورت شکمی', 'thrombus ثابت و embolus سرگردان؛ DVT → PE؛ stroke (CVA) و TIA گذرا؛ bruit روی سرخرگ تنگ', 'varicose veins از دریچه‌های ناکارآمد؛ phlebitis، thrombophlebitis، hemorrhoids؛ PAD با claudication؛ Raynaud'])),
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
    id: 'tx', sym: 'Rx', name: 'تشخیص و درمان', short: 'درمان', sub: 'اکو، آزمایش‌ها، آنژیوگرافی و کاتتریزاسیون، بالن و استنت، جراحی رگ و قلب، داروها، ضربان‌ساز، شوک و احیا',
    color: '#2F9E44', dark: '#1F6E2F', light: '#E0F4E4',
    levels: ['تشخیص و تصویربرداری', 'باز کردن رگ و جراحی', 'دارو، ضربان‌ساز و احیا'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: تشخیص و تصویربرداری ================= */
      {
        id: 'tx1', title: 'جعبه‌ابزار تشخیص', icon: '🧰', items: [
          L('چهار راه برای دیدن قلب', `${fig('dx-tools')}ECG و Holter را در دنیای ضربان دیدی. حالا دیگر ابزارها:<br>• <b>echocardiography</b>: تصویر قلب با امواج صوتی (ech/o = پژواک)؛ حفره‌ها، دریچه‌ها و EF را نشان می‌دهد<br>• <b>transesophageal echocardiography</b> (TEE): پروب از راه مری (esophag/o) پشت قلب می‌رود و تصویر دقیق‌تری می‌دهد`),
          M('کدام بررسی با امواج صوتی حرکت دریچه‌ها و ejection fraction را نشان می‌دهد؟', ['echocardiography', 'electrocardiography', 'angiography', 'venography'], 'ech/o = پژواک صوت.'),
          L('شنیدن جریان خون', `<b>Doppler ultrasonography</b> سرعت و جهت جریان خون را با امواج صوتی می‌سنجد؛ برای تنگی carotid یا DVT پا.${fig('doppler', '', 'سونوگرافی Doppler از سرخرگ carotid در گردن.')}${vs(['echocardiogram', 'تصویر خودِ قلب با صوت'], ['electrocardiogram', 'نوار برق قلب'])}${memo('echo = پژواک صدا؛ electro = برق. «اکو می‌بیند، نوار می‌شنود که برق چطور می‌رود.»')}`),
          T('TEE از راه مری انجام می‌شود.', true, 'trans- (از میان) + esophag/o (مری).'),
          L('آزمایش‌های خون قلب', `${tbl([['آزمایش', 'چه می‌گوید؟'], [e('troponin'), 'آسیب ماهیچه قلب؛ تشخیص MI'], [e('CK-MB'), 'آنزیم قلبی؛ از cardiac enzymes'], [e('BNP'), 'B-type natriuretic peptide: بالا در نارسایی قلب'], [e('CRP'), 'C-reactive protein: نشانگر التهاب'], [e('lipid profile'), 'کلسترول، LDL، HDL و triglycerides']])}${pearl('BNP را بطن کشیده‌شده ترشح می‌کند؛ در بیمار تنگی نفس، BNP طبیعی نارسایی قلب را تقریباً رد می‌کند.')}`),
          P('هر آزمایش را به معنی‌اش وصل کن', [['troponin', 'آسیب ماهیچه قلب'], ['BNP', 'نارسایی قلب'], ['CRP', 'التهاب'], ['lipid profile', 'چربی‌های خون']]),
          M('در بیمار تنگی نفس، کدام آزمایش برای نارسایی قلب مفید است؟', ['BNP', 'troponin', 'CRP', 'glucose'], 'B-type natriuretic peptide.'),
          B('در transesophageal echocardiography، پروب از ___ وارد می‌شود.', ['مری', 'نای', 'سیاهرگ ران'], 'esophag/o = مری.'),
          W('واژه‌ای بساز به معنی «فرایند ثبت تصویر قلب با پژواک صوت»', ['ech/o', 'cardi/o', '-graphy'], ['electr/o', '-gram', 'angi/o'], 'echocardiography.'),
          S('املای انگلیسی «اکوکاردیوگرافی» را بنویس', 'echocardiography', 'ech/o + cardi/o + -graphy.', 'echo…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'دیدن درون رگ', icon: '🔦', items: [
          L('رگ‌نگاری با ماده حاجب', `در <b>angiography</b> ماده حاجب (contrast dye) را درون رگ تزریق می‌کنند و با اشعه ایکس عکس می‌گیرند؛ عکس به‌دست‌آمده <b>angiogram</b> است.${vs(['angiography', 'فرایند رگ‌نگاری (‎-graphy)'], ['angiogram', 'خود تصویر (‎-gram)'])}${fig('angiogram', '', 'angiogram سرخرگ‌های کرونر؛ رگ‌ها با ماده حاجب تیره دیده می‌شوند.')}`),
          M('تصویری که پس از تزریق ماده حاجب از رگ‌ها گرفته می‌شود چه نام دارد؟', ['angiogram', 'angiography', 'angioplasty', 'echocardiogram'], '‎-gram = نتیجه ثبت.'),
          L('پیش و پس از درمان', `${fig('angiography', '', 'A: تنگی شدید سرخرگ کرونر (پیکان)؛ B: همان سرخرگ پس از باز کردن.')}<b>coronary angiography</b> طلای تشخیص CAD است و در همان جلسه می‌توان تنگی را با بالن و استنت باز کرد.`),
          T('در coronary angiography می‌توان هم‌زمان رگ را باز کرد.', true, 'تشخیص و درمان در یک جلسه.'),
          L('روش‌های دیگر', `${tbl([['روش', 'توضیح'], [e('CT angiography'), 'رگ‌نگاری با سی‌تی؛ بدون کاتتر'], [e('digital subtraction angiography'), 'DSA: رایانه استخوان‌ها را از تصویر «کم» می‌کند تا فقط رگ بماند'], [e('venography'), 'رگ‌نگاری سیاهرگ‌ها'], [e('MUGA scan'), 'سنجش EF با ماده رادیواکتیو'], [e('nuclear stress test'), 'تست ورزش با ماده رادیواکتیو؛ نواحی کم‌خون را نشان می‌دهد']])}`),
          P('هر روش را به ویژگی‌اش وصل کن', [['CT angiography', 'رگ‌نگاری بدون کاتتر'], ['DSA', 'حذف استخوان از تصویر'], ['venography', 'رگ‌نگاری سیاهرگ'], ['MUGA scan', 'سنجش EF با ماده رادیواکتیو']]),
          M('رگ‌نگاری سیاهرگ‌ها با ماده حاجب چه نام دارد؟', ['venography', 'angioplasty', 'phlebotomy', 'arteriography'], 'ven/o + -graphy.'),
          B('در DSA واژه subtraction یعنی ___.', ['کم کردن', 'افزودن', 'بزرگ کردن'], 'استخوان‌ها از تصویر کم می‌شوند.'),
          S('املای انگلیسی «رگ‌نگاری» (فرایند) را بنویس', 'angiography', 'angi/o + -graphy.', 'angio…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'کاتتریزاسیون قلب', icon: '🪡', items: [
          L('لوله‌ای تا قلب', `<b>catheter</b> لوله باریک و انعطاف‌پذیری است. در <b>cardiac catheterization</b> آن را از سرخرگ ران (femoral) یا مچ (radial) وارد می‌کنند و با راهنمایی اشعه ایکس تا قلب و کرونرها می‌برند.${fig('catheterization', '', 'A: کاتتر از femoral artery تا aortic arch؛ B: راه‌های دیگر در دست: brachial artery و radial artery.')}`),
          M('کاتتر قلب را بیشتر از کدام رگ‌ها وارد می‌کنند؟', ['femoral یا radial artery', 'jugular vein', 'carotid artery', 'pulmonary vein'], 'ران یا مچ.'),
          L('کاتتر راست و چپ', `${vs(['left heart catheterization', 'از سرخرگ؛ بررسی کرونرها و بطن چپ'], ['right heart catheterization', 'از سیاهرگ؛ فشار دهلیز و بطن راست و سرخرگ ریوی'])}${fig('catheter-arm', '', 'کاتتر از basilic vein بازو و subclavian vein به right atrium و right ventricle می‌رسد.')}${pearl('پس از کاتتر از راه ران، بیمار چند ساعت پایش را صاف نگه می‌دارد و جای سوراخ را برای خون‌ریزی و نبض پای پایین‌تر بررسی می‌کنند.')}`),
          T('برای right heart catheterization کاتتر را از یک سرخرگ وارد می‌کنند.', false, 'نادرست؛ از سیاهرگ وارد می‌کنند تا به قلب راست برسد.'),
          O('گام‌های کاتتریزاسیون کرونر را بچین', ['بی‌حسی موضعی مچ یا ران', 'وارد کردن catheter به سرخرگ', 'رساندن کاتتر به ابتدای کرونر', 'تزریق ماده حاجب و گرفتن angiogram', 'خارج کردن کاتتر و فشار روی محل'], 'از ورود تا خروج.'),
          P('هر واژه را به معنی‌اش وصل کن', [['catheter', 'لوله باریک انعطاف‌پذیر'], ['contrast dye', 'ماده حاجب'], ['femoral artery', 'سرخرگ ران'], ['basilic vein', 'سیاهرگ بازو']]),
          B('واژه catheterization از ___ ساخته شده است.', ['catheter + -ization', 'cardi/o + -tomy', 'cath/o + -lysis'], 'وارد کردن کاتتر.'),
          M('بیماری پس از آنژیوگرافی از راه ران، پای سرد و بی‌نبض دارد. مشکل در کدام رگ است؟', ['femoral artery', 'jugular vein', 'radial artery', 'coronary sinus'], 'محل ورود کاتتر.', [['روش', 'آنژیوگرافی از ران'], ['یافته', 'پای سرد، نبض dorsalis pedis ضعیف']]),
          L('مرور سطح «تشخیص و تصویربرداری»', recap(['echocardiography (و TEE از راه مری) و Doppler ultrasonography با امواج صوتی', 'خون: troponin و CK-MB برای MI • BNP برای نارسایی • CRP التهاب • lipid profile', 'angiography فرایند و angiogram تصویر؛ CT angiography، DSA، venography، MUGA scan', 'cardiac catheterization: چپ از femoral یا radial artery؛ راست از سیاهرگ'])),
          N('d2t:tx')
        ]
      },

      /* ================= سطح ۲: باز کردن رگ و جراحی ================= */
      {
        id: 'tx4', title: 'بالن و باز کردن رگ', icon: '🎈', items: [
          L('باد کردن بالن در تنگی', `${wb('angi/o', '-plasty')} = <b>angioplasty</b>: ترمیم رگ. در <b>balloon angioplasty</b> ابتدا سیم راهنمای نازکی (<b>guidewire</b>) از تنگی رد می‌شود و کاتتر بالن روی آن تا محل تنگی می‌لغزد؛ بالن باد می‌شود و پلاک را به دیواره می‌فشارد.${fig('angioplasty', '', 'balloon catheter به سوی سرخرگ کرونر؛ بالن تخلیه‌شده، بالن بادشده و جریان دوباره برقرارشده.')}`),
          M('در angioplasty، پسوند ‎-plasty یعنی…', ['ترمیم', 'برداشتن', 'برش', 'ثبت'], 'angi/o + -plasty.'),
          O('گام‌های balloon angioplasty را بچین', ['وارد کردن guidewire و کاتتر بالن', 'رساندن بالن به محل پلاک', 'باد کردن بالن و فشردن پلاک', 'تخلیه و بیرون آوردن بالن'], 'مطابق شکل A تا D.'),
          L('گام‌به‌گام', `${fig('balloon-steps', '', 'A: بالن بادنشده به سرخرگ می‌رود؛ B: بالن باد می‌شود؛ C: بالن تخلیه و خارج می‌شود؛ D: lumen باز شده است.')}نام بالینی: PTCA یا <b>PCI</b> (percutaneous coronary intervention)؛ percutaneous یعنی «از راه پوست» (per- + cutane/o).`),
          L('راه‌های دیگر باز کردن رگ', `• <b>atherectomy</b>: تراشیدن و برداشتن پلاک با ابزار سر کاتتر (ather/o + ‎-ectomy)<br>• <b>thrombolysis</b>: حل کردن لخته با داروی thrombolytic<br>• <b>embolectomy</b>: بیرون آوردن embolus${vs(['angioplasty', 'پلاک را به دیواره می‌فشارد'], ['atherectomy', 'پلاک را برمی‌دارد'])}${memo('PCI را «پوست، کرونر، مداخله» بخوان: از سوراخ کوچک پوست تا کرونر.')}`),
          P('هر روش را به کارش وصل کن', [['angioplasty', 'فشردن پلاک با بالن'], ['atherectomy', 'برداشتن پلاک'], ['thrombolysis', 'حل کردن لخته'], ['embolectomy', 'بیرون آوردن آمبول']]),
          T('percutaneous یعنی «با برش بزرگ جراحی».', false, 'نادرست؛ یعنی «از راه پوست» با سوراخ کوچک.'),
          B('برداشتن پلاک از درون سرخرگ با ابزار کاتتر ___ نام دارد.', ['atherectomy', 'angioplasty', 'endarterectomy'], 'ather/o + -ectomy.'),
          S('املای انگلیسی «آنژیوپلاستی» را بنویس', 'angioplasty', 'angi/o + -plasty.', 'angio…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx5', title: 'استنت و جراحی رگ', icon: '🕸️', items: [
          L('توری فلزی برای باز ماندن', `<b>stent</b> توری فلزی کوچکی است که روی بالن سوار است؛ با باد شدن بالن باز می‌شود و در دیواره می‌ماند تا رگ دوباره تنگ نشود.${fig('stent', '', 'A: استنت بسته روی بالن تخلیه‌شده؛ B: بالن بادشده استنت را باز می‌کند؛ C: استنت باز در رگ می‌ماند.')}`),
          M('چرا پس از angioplasty استنت می‌گذارند؟', ['تا رگ دوباره تنگ نشود', 'تا لخته حل شود', 'تا ضربان منظم شود', 'تا فشار خون بالا برود'], 'جلوی restenosis را می‌گیرد.'),
          L('در سرخرگ کرونر', `${fig('stent-placement', '', 'کاتتر با بالن و استنت در سرخرگ کرونر؛ بالن باد می‌شود و استنت باز پلاک را به دیواره می‌فشارد.')}• <b>restenosis</b>: تنگ شدن دوباره (re- + stenosis)<br>• <b>drug-eluting stent</b>: استنتی که آرام‌آرام دارو آزاد می‌کند تا restenosis کمتر شود${pearl('پس از استنت، بیمار تا ماه‌ها دو داروی antiplatelet (مثل aspirin و clopidogrel) می‌گیرد تا روی استنت لخته نسازد؛ قطع خودسرانه آن خطرناک است.')}`),
          T('restenosis یعنی تنگ شدن دوباره رگ پس از درمان.', true, 're- = دوباره.'),
          L('جراحی سرخرگ‌های بزرگ', `• <b>endarterectomy</b>: برداشتن پلاک همراه با لایه درونی سرخرگ (endo- + arteri/o + ‎-ectomy)؛ بیشتر در carotid${fig('endarterectomy', '', 'carotid endarterectomy: برش گردن، باز کردن سرخرگ، برداشتن پلاک و دوختن (arteriorrhaphy).')}• <b>aneurysmectomy</b>: برداشتن آنوریسم و گذاشتن graft (رگ مصنوعی)${fig('aaa-graft', '', 'graft مصنوعی درون abdominal aortic aneurysm.')}`),
          M('برداشتن پلاک از سرخرگ carotid با جراحی چه نام دارد؟', ['endarterectomy', 'atherectomy', 'angioplasty', 'aneurysmectomy'], 'endo- + arteri/o + -ectomy.'),
          L('درمان واریس', `${tbl([['روش', 'توضیح'], [e('sclerotherapy'), 'تزریق محلولی که سیاهرگ را سفت و بسته می‌کند'], [e('ligation and stripping'), 'بستن (ligation) و بیرون کشیدن سیاهرگ'], [e('endovenous laser ablation'), 'بستن سیاهرگ از درون با لیزر']])}${memo('ligation = «لیگاتور، بستن»؛ مثل بستن گره به سر یک لوله.')}`),
          P('هر روش را به کارش وصل کن', [['stent', 'نگه داشتن رگ باز'], ['endarterectomy', 'برداشتن پلاک با جراحی'], ['sclerotherapy', 'بستن سیاهرگ با تزریق'], ['graft', 'رگ جایگزین']]),
          W('واژه‌ای بساز به معنی «برداشتن لایه درونی سرخرگ»', ['endo-', 'arteri/o', '-ectomy'], ['-plasty', 'ather/o', 'peri-'], 'endarterectomy.'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx6', title: 'جراحی قلب', icon: '🫀', items: [
          L('بای‌پس کرونر', `<b>coronary artery bypass graft</b> (CABG، «کَبیج») یعنی ساختن راهی تازه برای خون از کنار تنگی: یک رگ سالم (great saphenous vein یا internal mammary artery) از آئورت تا پس از تنگی کرونر وصل می‌شود.${fig('cabg', '', 'bypass graft از aorta تا left anterior descending artery، پس از ناحیه انسداد.')}`),
          M('در CABG رگ پیوندی را معمولاً از کجا برمی‌دارند؟', ['great saphenous vein پا', 'jugular vein', 'femoral artery', 'pulmonary vein'], 'یا internal mammary artery سینه.'),
          L('قلب و ریه مصنوعی', `در جراحی قلب باز، قلب را متوقف می‌کنند و <b>extracorporeal circulation</b> (گردش خون بیرون از بدن؛ extra- + corpor/o = بدن) با دستگاه قلب-ریه انجام می‌شود که perfusionist آن را می‌گرداند.${vs(['on-pump CABG', 'با دستگاه قلب-ریه و قلب متوقف'], ['off-pump CABG', 'روی قلبِ در حال تپش'])}`),
          T('extracorporeal circulation یعنی گردش خون درون قلب.', false, 'نادرست؛ extra- یعنی بیرون؛ گردش خون بیرون از بدن.'),
          L('جراحی دریچه و پیوند', `${tbl([['جراحی', 'معنی'], [e('valve replacement'), 'تعویض دریچه با دریچه مکانیکی یا بافتی'], [e('valvuloplasty'), 'ترمیم دریچه؛ گاهی با بالن'], [e('commissurotomy'), 'برش محل چسبیدن لت‌ها در mitral stenosis'], [e('heart transplant'), 'پیوند قلب'], [e('ventricular assist device'), 'VAD: پمپ مکانیکی کمک بطن'], [e('intra-aortic balloon pump'), 'IABP: بالن در آئورت که در diastole باد می‌شود']])}${pearl('بیمار با دریچه مکانیکی تا آخر عمر warfarin می‌گیرد؛ دریچه بافتی به داروی ضدانعقاد طولانی نیاز ندارد ولی زودتر فرسوده می‌شود.')}`),
          P('هر جراحی را به معنی‌اش وصل کن', [['valvuloplasty', 'ترمیم دریچه'], ['commissurotomy', 'برش لت‌های چسبیده'], ['VAD', 'پمپ کمکی بطن'], ['CABG', 'پیوند بای‌پس کرونر']]),
          B('در valvuloplasty، ریشه valvul/o یعنی ___.', ['دریچه', 'رگ', 'ماهیچه'], 'valvul/o + -plasty.'),
          M('دستگاهی که با باد شدن در diastole خون‌رسانی کرونر را بیشتر می‌کند چیست؟', ['intra-aortic balloon pump', 'Holter monitor', 'pacemaker', 'stent'], 'IABP در آئورت.'),
          L('مرور سطح «باز کردن رگ و جراحی»', recap(['angioplasty (PCI) با بالن؛ atherectomy برداشتن پلاک؛ thrombolysis و embolectomy', 'stent رگ را باز نگه می‌دارد و جلوی restenosis را می‌گیرد؛ پس از آن antiplatelet', 'endarterectomy در carotid؛ aneurysmectomy با graft؛ sclerotherapy و ligation and stripping برای واریس', 'CABG با saphenous vein یا internal mammary artery؛ extracorporeal circulation؛ valve replacement، valvuloplasty، VAD و IABP'])),
          N('m2r:tx')
        ]
      },

      /* ================= سطح ۳: دارو، ضربان‌ساز و احیا ================= */
      {
        id: 'tx7', title: 'داروهای قلب و فشار', icon: '💊', items: [
          L('نقشه داروها', `هر دسته دارو جای خودش را در قلب و رگ دارد. همه داروهای کاهنده فشار خون را روی هم <b>antihypertensive</b> (anti- + hypertension) می‌نامند.${fig('drug-map')}`),
          L('داروهای فشار و ضربان', `${tbl([['دسته', 'کار', 'نمونه'], [e('beta-blocker'), 'کند کردن ضربان، کاهش فشار', 'metoprolol'], [e('ACE inhibitor'), 'گشاد کردن رگ با مهار آنزیم', 'enalapril'], [e('ARB'), 'angiotensin receptor blocker', 'losartan'], [e('calcium channel blocker'), 'گشاد کردن رگ، کند کردن ضربان', 'amlodipine'], [e('diuretic'), 'دفع آب و نمک با ادرار', 'furosemide']])}${memo('پسوند نام دارو دسته را لو می‌دهد: ‎-olol بتابلاکر، ‎-pril مهارکننده ACE، ‎-sartan از ARB و ‎-dipine مسدودکننده کانال کلسیم.')}`),
          M('داروی lisinopril از کدام دسته است؟', ['ACE inhibitor', 'beta-blocker', 'ARB', 'statin'], '‎-pril.'),
          P('هر پسوند را به دسته‌اش وصل کن', [['-olol', 'beta-blocker'], ['-pril', 'ACE inhibitor'], ['-sartan', 'ARB'], ['-dipine', 'calcium channel blocker']]),
          L('داروهای قلب', `• <b>nitroglycerin</b>: vasodilator؛ زیر زبان برای رفع درد آنژین<br>• <b>digoxin</b>: انقباض قوی‌تر و ضربان کندتر در نارسایی قلب<br>• <b>antiarrhythmic</b>: منظم کردن ریتم، مثل amiodarone<br>• <b>vasopressor</b>: تنگ کردن رگ و بالا بردن فشار در شوک${pearl('nitroglycerin را زیر زبان می‌گذارند؛ اگر پس از ۳ قرص با فاصله ۵ دقیقه درد خوب نشد، احتمال MI است و باید با اورژانس تماس گرفت.')}`),
          M('بیمار آنژین برای رفع فوری درد کدام دارو را زیر زبان می‌گذارد؟', ['nitroglycerin', 'digoxin', 'warfarin', 'statin'], 'vasodilator سریع.'),
          T('diuretic با دفع آب و نمک، ورم و فشار خون را کم می‌کند.', true, 'مثل furosemide در CHF.'),
          B('دارویی که برای منظم کردن ریتم قلب داده می‌شود ___ نام دارد.', ['antiarrhythmic', 'antihypertensive', 'anticoagulant'], 'anti- + arrhythmia.'),
          M('داروی ضدفشار خون را به‌طور کلی چه می‌نامند؟', ['antihypertensive', 'vasopressor', 'thrombolytic', 'antiarrhythmic'], 'anti- + hypertension.'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx8', title: 'داروهای لخته و چربی', icon: '🩸', items: [
          L('سه کار متفاوت با لخته', `${tbl([['دسته', 'کار', 'نمونه'], [e('antiplatelet agent'), 'جلوگیری از چسبیدن پلاکت‌ها', 'aspirin، clopidogrel'], [e('anticoagulant'), 'جلوگیری از تشکیل لخته', 'heparin، warfarin'], [e('thrombolytic agent'), 'حل کردن لخته موجود', 'tPA']])}${memo('anti = جلوگیری از لخته تازه؛ thrombo-lytic = حل کردن لخته‌ای که هست. ضدانعقاد لخته را حل نمی‌کند!')}`),
          M('کدام دسته دارو لخته موجود را حل می‌کند؟', ['thrombolytic agent', 'anticoagulant', 'antiplatelet agent', 'statin'], 'thromb/o + -lytic.'),
          L('دو ضدانعقاد', `${vs(['heparin', 'تزریقی، اثر سریع؛ در بیمارستان'], ['warfarin', 'خوراکی، اثر کُند؛ با آزمایش INR پایش می‌شود'])}${pearl('بیمار warfarin باید مصرف سبزی‌های پربرگ (ویتامین K) را ثابت نگه دارد، چون ویتامین K اثر دارو را کم می‌کند.')}`),
          T('anticoagulant لخته‌ای را که از قبل ساخته شده حل می‌کند.', false, 'نادرست؛ فقط جلوی ساخته شدن لخته تازه را می‌گیرد. حل کردن کار thrombolytic است.'),
          L('چربی‌های خون', `${fig('lipids')}${tbl([['چربی', 'نکته'], [e('LDL'), 'low-density lipoprotein: کلسترول «بد»؛ باید پایین باشد'], [e('HDL'), 'high-density lipoprotein: کلسترول «خوب»؛ باید بالا باشد'], [e('triglycerides'), 'چربی ذخیره‌ای؛ با قند و چربی زیاد بالا می‌رود'], [e('cholesterol'), 'کل کلسترول خون']])}چربی بالای خون را <b>hyperlipidemia</b> و کلسترول بالا را <b>hypercholesterolemia</b> می‌نامند. <b>statin</b> (مثل atorvastatin) ساخت کلسترول را در کبد کم و LDL را پایین می‌آورد.`),
          P('هر واژه را به معنی‌اش وصل کن', [['LDL', 'کلسترول بد'], ['HDL', 'کلسترول خوب'], ['statin', 'پایین آوردن LDL'], ['hyperlipidemia', 'چربی خون بالا']]),
          M('کدام دارو LDL را پایین می‌آورد؟', ['statin', 'digoxin', 'diuretic', 'heparin'], 'مثل atorvastatin.'),
          B('HDL را کلسترول ___ می‌نامند.', ['خوب', 'بد', 'سمی'], 'H مثل Healthy.'),
          S('املای انگلیسی «ضدانعقاد» را بنویس', 'anticoagulant', 'anti- + coagul (لخته شدن) + -ant.', 'anti…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: 'ضربان‌ساز، شوک و احیا', icon: '⚡', items: [
          L('ضربان‌ساز مصنوعی', `وقتی SA node یا راه هدایت خراب شود (مثل heart block)، <b>artificial pacemaker</b> زیر پوست سینه کاشته می‌شود و سیم (lead) آن از سیاهرگ تا بطن راست می‌رود تا ضربان بسازد.${fig(['pacemaker', 'pacemaker-xray'], ['ضربان‌ساز زیر پوست و سیم آن در نوک بطن راست', 'ضربان‌ساز در عکس قفسه سینه'])}`),
          M('بیمار با heart block کامل و ضربان ۳۸ به چه درمانی نیاز دارد؟', ['artificial pacemaker', 'statin', 'sclerotherapy', 'endarterectomy'], 'ساختن ضربان مصنوعی.'),
          L('شوک برقی', `${vs(['defibrillation', 'شوک بدون هماهنگی برای ventricular fibrillation و ایست قلبی'], ['cardioversion', 'شوک هماهنگ با QRS برای atrial fibrillation یا flutter'])}• <b>ICD</b> (implantable cardioverter-defibrillator): دستگاه کاشتنی که VF را تشخیص می‌دهد و خودش شوک می‌دهد<br>• <b>catheter ablation</b>: سوزاندن راه برقی اضافه (مثل WPW) با کاتتر${fig('defibrillation', '', 'defibrillation بیمار در ایست قلبی با پدهای روی سینه.')}`),
          P('هر روش را به کارش وصل کن', [['defibrillation', 'شوک برای VF'], ['cardioversion', 'شوک هماهنگ برای AF'], ['ICD', 'دستگاه شوک کاشتنی'], ['catheter ablation', 'سوزاندن راه برقی اضافه']]),
          L('احیای قلبی-ریوی', `<b>cardiopulmonary resuscitation</b> (CPR): cardi/o (قلب) + pulmon/o (ریه) + resuscitation (به هوش آوردن).${fig('cpr-steps')}فشردن قفسه سینه: ۱۰۰ تا ۱۲۰ بار در دقیقه، به عمق ۵ تا ۶ سانتی‌متر. <b>AED</b> (automated external defibrillator) ریتم را خودش تحلیل می‌کند و با صدا راهنمایی می‌کند.${pearl('AED برای مردم عادی ساخته شده؛ در فرودگاه و باشگاه هست. هر دقیقه تأخیر در شوک VF، شانس زنده ماندن را حدود ۱۰ درصد کم می‌کند.')}`),
          O('گام‌های کمک به فرد بی‌هوش را بچین', ['بررسی پاسخ و تنفس', 'تماس با اورژانس و آوردن AED', 'شروع CPR با فشردن قفسه سینه', 'وصل کردن AED و شوک در صورت نیاز'], 'مطابق شکل: check، call، CPR، AED.'),
          T('AED ریتم قلب را خودش تحلیل می‌کند.', true, 'automated = خودکار.'),
          B('در CPR بزرگسال، قفسه سینه را ___ بار در دقیقه فشار می‌دهند.', ['۱۰۰ تا ۱۲۰', '۳۰ تا ۴۰', '۲۰۰ تا ۲۵۰'], 'تند و محکم.'),
          L('مرور سطح «دارو، ضربان‌ساز و احیا»', recap(['فشار و ضربان: beta-blocker (‎-olol)، ACE inhibitor (‎-pril)، ARB (‎-sartan)، calcium channel blocker، diuretic', 'قلب: nitroglycerin برای آنژین، digoxin، antiarrhythmic، vasopressor', 'لخته: antiplatelet (aspirin) • anticoagulant (heparin، warfarin) • thrombolytic (tPA)؛ statin برای LDL', 'artificial pacemaker، defibrillation برای VF، cardioversion برای AF، ICD، catheter ablation؛ CPR و AED'])),
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
    { id: 'lx-0', w: 'lx', lv: 0, name: 'تکه‌یاب', title: 'شکننده واژه‌ها', shape: 'puzzle', color: '#8C96F0', acc: ['sparkle'], bio: 'هر واژه ترسناکی را به پیشوند، ریشه و پسوند می‌شکند و از آخر می‌خواند: pericarditis یعنی التهابِ پیرامونِ قلب.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'نگارک', title: 'استاد gram و graph', shape: 'monitor', color: '#6C4FD8', acc: ['glasses'], bio: 'فرق نوار (gram)، دستگاه (graph) و کارِ ثبت (graphy) را می‌داند و هیچ‌وقت electrocardiogram را با electrocardiograph قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'جمع‌بند', title: 'استاد مفرد و جمع', shape: 'book', color: '#4F5BD5', acc: ['crown'], bio: 'atrium را atria، thrombus را thrombi و varix را varices جمع می‌بندد؛ بدون حتی یک s اضافه!' },
    { id: 'an-0', w: 'an', lv: 0, name: 'چهارخانه', title: 'صاحب چهار حفره', shape: 'heart', color: '#E03131', acc: ['sparkle'], bio: 'دو دهلیز بالا خون را می‌گیرند و دو بطن پایین بیرونش می‌فرستند؛ دیواره میانی نمی‌گذارد خون دو نیمه قاطی شود.' },
    { id: 'an-1', w: 'an', lv: 1, name: 'دریچه', title: 'نگهبان مسیر یک‌طرفه', shape: 'valve', color: '#F59F00', acc: ['headband'], bio: 'سه‌لتی، ریوی، میترال و آئورت: به ترتیب باز و بسته می‌شود و صدای lubb-dupp قلب کار اوست.' },
    { id: 'an-2', w: 'an', lv: 2, name: 'کرونر', title: 'تاج قلب', shape: 'blob', color: '#C92A2A', acc: ['crown'], bio: 'مثل تاج دور قلب حلقه زده و خود ماهیچه قلب را خون‌رسانی می‌کند؛ LAD شاخه‌ای است که نباید بسته شود.' },
    { id: 'ep-0', w: 'ep', lv: 0, name: 'جرقه', title: 'گره سینوسی', shape: 'flame', color: '#F08C00', acc: ['sparkle'], bio: 'ضربان‌ساز طبیعی قلب؛ از دیواره دهلیز راست هر ضربان را با یک جرقه شروع می‌کند، ۶۰ تا ۱۰۰ بار در دقیقه.' },
    { id: 'ep-1', w: 'ep', lv: 1, name: 'نواری', title: 'خواننده نوار قلب', shape: 'monitor', color: '#2F9E44', acc: ['glasses'], bio: 'موج P را انقباض دهلیزها، QRS را انقباض بطن‌ها و T را بازیابی بطن‌ها می‌خواند؛ قطعه ST را همیشه زیر نظر دارد.' },
    { id: 'ep-2', w: 'ep', lv: 2, name: 'فشارسنج', title: 'شمارنده سیستول و دیاستول', shape: 'scale', color: '#1C7ED6', acc: ['crown'], bio: 'با بازوبند و گوشی، عدد بالا (سیستولی) و عدد پایین (دیاستولی) را می‌خواند: ۱۲۰ روی ۸۰ میلی‌متر جیوه.' },
    { id: 'vc-0', w: 'vc', lv: 0, name: 'قطره', title: 'مسافر دو گردش', shape: 'drop', color: '#E03131', acc: ['sparkle'], bio: 'از بطن راست به ریه می‌رود تا اکسیژن بگیرد و از بطن چپ به همه بدن؛ هر دور کمتر از یک دقیقه طول می‌کشد.' },
    { id: 'vc-1', w: 'vc', lv: 1, name: 'شاخه', title: 'شبکه مویرگ‌ها', shape: 'yab', color: '#0C8599', acc: ['glasses'], bio: 'سرخرگ را به سرخرگچه و مویرگ می‌رساند و دوباره در سیاهرگچه و سیاهرگ جمع می‌کند؛ تبادل اکسیژن کار مویرگ است.' },
    { id: 'vc-2', w: 'vc', lv: 2, name: 'لنفو', title: 'زهکش بافت‌ها', shape: 'bean', color: '#12B886', acc: ['crown'], bio: 'مایع اضافه بافت‌ها را جمع می‌کند و از گره‌های لنفاوی صاف می‌کند تا از مجرای توراسیک به خون برگرداند.' },
    { id: 'ds-0', w: 'ds', lv: 0, name: 'پلاکو', title: 'آتروم چسبنده', shape: 'blob', color: '#F2C94C', acc: ['sparkle'], bio: 'از کلسترول بد (LDL) ساخته شده و در دیواره سرخرگ می‌نشیند؛ کارش تنگ کردن مجراست. ورزش و استاتین دشمنان اویند!' },
    { id: 'ds-1', w: 'ds', lv: 1, name: 'لختک', title: 'ترومبوس و آمبول', shape: 'cloud', color: '#A61E4D', acc: ['headband'], bio: 'وقتی به دیواره چسبیده thrombus است و وقتی راه می‌افتد embolus؛ اگر در ریه گیر کند آمبولی ریه می‌سازد.' },
    { id: 'ds-2', w: 'ds', lv: 2, name: 'لرزان', title: 'آریتمی بازیگوش', shape: 'bubble', color: '#AE3EC9', acc: ['crown'], bio: 'گاهی تند (tachycardia)، گاهی کند (bradycardia) و گاهی لرزان (fibrillation) است؛ با نوار قلب لو می‌رود.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'فنرک', title: 'استنت باز نگه‌دارنده', shape: 'stent', color: '#868E96', acc: ['sparkle'], bio: 'پس از آنژیوپلاستی با بالون، درون سرخرگ کرونر باز می‌شود و همان‌جا می‌ماند تا رگ دوباره تنگ نشود.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'کپسول', title: 'داروساز قلب', shape: 'capsule', color: '#2F9E44', acc: ['glasses'], bio: 'بتابلاکر، دیورتیک، استاتین و ضدانعقاد را می‌شناسد و می‌داند هر کدام کجای قلب و رگ اثر می‌کند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'شوکر', title: 'دفیبریلاتور نجات', shape: 'aed', color: '#37B24D', acc: ['crown'], bio: 'وقتی بطن‌ها فیبریله می‌شوند، با یک شوک ریتم را برمی‌گرداند؛ همراه همیشگی CPR در ایست قلبی.' }
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
      id: 'r1', w: 'lx', title: 'یادداشتی پر از رمز', who: 'مشاوره قلب در بخش داخلی',
      brief: 'متخصص قلب برای بیمار بخش داخلی یادداشت مشاوره نوشته است. دانشجوی تازه‌وارد باید آن را برای پرستار بخش «ترجمه» کند. هر واژه را بشکن و از آخر بخوان.',
      chart: [['شکایت', 'CP و SOB'], ['سابقه', 'HTN از ۱۰ سال پیش'], ['معاینه', 'tachycardia، بدون murmur'], ['عکس قفسه سینه', 'cardiomegaly']],
      fig: { a: ['wordparts'], l: ['آناتومی یک واژه'] },
      steps: [
        P('اختصار', 'هر اختصار یادداشت را به معنی‌اش وصل کن', [['CP', 'درد قفسه سینه'], ['SOB', 'تنگی نفس'], ['HTN', 'پرفشاری خون'], ['CV', 'قلبی-عروقی']]),
        M('واژه', 'cardiomegaly یعنی…', ['بزرگی قلب', 'التهاب قلب', 'ضربان تند قلب', 'سخت شدن سرخرگ‌ها'], 'cardi/o (قلب) + -megaly (بزرگی).'),
        M('واژه', 'tachycardia یعنی…', ['ضربان تند، بیش از ۱۰۰ بار در دقیقه', 'ضربان کند', 'ضربان نامنظم', 'توقف ضربان'], 'tachy- (تند) + -cardia (حالت قلب).'),
        O('ساخت', 'تکه‌های واژه «التهاب پیرامون قلب» را به ترتیب نوشتن بچین', ['peri-', 'cardi/o', '-itis'], 'pericarditis: peri- (پیرامون) + cardi/o (قلب) + -itis (التهاب).'),
        T('صفت', 'cardiac و coronary هر دو صفت‌هایی مربوط به قلب‌اند.', true, 'cardi/o + -ac؛ coron/o (تاج، قلب) + -ary.'),
        S('املا', 'املای «متخصص قلب» را بنویس', 'cardiologist', 'cardi/o + -logist.', 'cardio…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'سه برگه از یک آزمایش', who: 'آقای ۴۰ ساله در کلینیک',
      brief: 'برای بیمار نوار قلب درخواست شده. منشی کلینیک سه واژه شبیه به هم را در برگه‌ها می‌بیند: دستگاه، خود نوار و کار ثبت. باید هر کدام را درست بایگانی کند.',
      chart: [['درخواست', 'electrocardiography'], ['دستگاه', 'electrocardiograph شماره ۲'], ['نتیجه', 'electrocardiogram: NSR'], ['ضربان', '۷۲ bpm']],
      fig: { a: ['gram-graph'], l: ['gram، graph و graphy'] },
      steps: [
        P('پسوند', 'هر پسوند را به معنی‌اش وصل کن', [['-gram', 'نتیجه ثبت (نوار)'], ['-graph', 'دستگاه ثبت'], ['-graphy', 'فرایند ثبت'], ['-scope', 'ابزار دیدن یا شنیدن']]),
        M('واژه', 'برگه‌ای که منحنی ضربان روی آن چاپ شده چه نام دارد؟', ['electrocardiogram', 'electrocardiograph', 'electrocardiography', 'echocardiography'], '‎-gram یعنی خود ثبت.'),
        M('اختصار', 'bpm یعنی…', ['ضربان در دقیقه', 'فشار خون', 'نبض در ثانیه', 'میلی‌متر جیوه'], 'beats per minute.'),
        T('اختصار', 'ECG و EKG هر دو یعنی نوار قلب.', true, 'EKG از املای آلمانی Elektrokardiogramm آمده است.'),
        M('ریشه', 'در electrocardiogram، ریشه electr/o یعنی…', ['برق، الکتریسیته', 'صدا', 'فشار', 'تصویر'], 'electr/o = الکتریسیته.'),
        S('املا', 'املای «نوار قلب‌نگاری» (کار ثبت) را بنویس', 'electrocardiography', 'electr/o + cardi/o + -graphy.', 'electro…')
      ]
    },
    /* ================= ساختمان قلب ================= */
    {
      id: 'r3', w: 'an', title: 'تعویض دریچه میترال', who: 'خانم تاگارت، ۶۳ ساله',
      brief: 'خانم تاگارت برای تعویض دریچه میترال بستری شده و از پرستار می‌پرسد این دریچه کجای قلب است و چه کاری می‌کند. دریچه‌اش خوب بسته نمی‌شود و خون به دهلیز پس می‌زند.',
      chart: [['تشخیص', 'mitral regurgitation'], ['اکو', 'LA بزرگ، LV با EF ۵۰٪'], ['برنامه', 'MVR'], ['سمع', 'murmur سیستولی در apex']],
      fig: { a: ['heart-interior'], l: ['درون قلب و دریچه‌ها'] },
      steps: [
        M('جا', 'دریچه میترال میان کدام دو حفره است؟', ['دهلیز چپ و بطن چپ', 'دهلیز راست و بطن راست', 'بطن چپ و آئورت', 'بطن راست و سرخرگ ریوی'], 'دریچه دهلیزی-بطنی سمت چپ.'),
        M('لت', 'دریچه میترال چند لت دارد؟', ['دو (bicuspid)', 'سه', 'چهار', 'یک'], 'به همین دلیل bicuspid valve هم نامیده می‌شود.'),
        M('واژه', 'regurgitation یعنی…', ['پس زدن خون از دریچه‌ای که خوب بسته نمی‌شود', 'تنگ شدن دریچه', 'التهاب دریچه', 'نبود دریچه'], 'نام دیگرش insufficiency است.'),
        M('اختصار', 'MVR یعنی…', ['تعویض دریچه میترال', 'افتادگی دریچه میترال', 'نارسایی بطن چپ', 'ترمیم دیواره'], 'mitral valve replacement؛ MVP افتادگی است.'),
        O('مسیر', 'مسیر خون در نیمه چپ قلب را بچین', ['سیاهرگ‌های ریوی', 'دهلیز چپ', 'دریچه میترال', 'بطن چپ', 'آئورت'], 'از ریه به دهلیز چپ، از میترال به بطن چپ و سپس آئورت.'),
        T('سمع', 'سوفل (murmur) صدای اضافه‌ای است که از جریان پرتلاطم خون می‌آید.', true, 'دریچه معیوب جریان را آشفته می‌کند.'),
        S('املا', 'املای «دریچه میترال» (فقط mitral) را بنویس', 'mitral', 'mitral: شبیه کلاه اسقف (mitre).', 'mit…')
      ]
    },
    {
      id: 'r4', w: 'an', title: 'صدایی که نباید باشد', who: 'نوزاد ۶ هفته‌ای',
      brief: 'پزشک کودک هنگام سمع قلب نوزاد صدای خش‌دار شنیده است. نوزاد هنگام شیر خوردن زود خسته می‌شود. اکوکاردیوگرافی یک سوراخ کوچک در دیواره میان دو بطن نشان می‌دهد.',
      chart: [['سمع', 'murmur در لبه چپ جناغ'], ['اکو', 'VSD کوچک'], ['رنگ پوست', 'بدون cyanosis'], ['ارجاع', 'pediatric cardiologist']],
      fig: { a: ['heart-defects'], l: ['نقص‌های مادرزادی'] },
      steps: [
        M('واژه', 'interventricular septum یعنی…', ['دیواره میان دو بطن', 'دیواره میان دو دهلیز', 'لایه بیرونی قلب', 'دریچه میان دهلیز و بطن'], 'inter- (میان) + ventricul/o (بطن) + -ar.'),
        M('اختصار', 'VSD یعنی…', ['نقص دیواره بطنی', 'نقص دیواره دهلیزی', 'تنگی آئورت', 'باز ماندن مجرای شریانی'], 'ventricular septal defect.'),
        M('تخصص', 'این نوزاد را چه متخصصی پیگیری می‌کند؟', ['pediatric cardiologist', 'cardiac surgeon', 'perfusionist', 'electrophysiologist'], 'متخصص قلب کودکان.'),
        M('واژه', 'congenital یعنی…', ['مادرزادی؛ از هنگام تولد', 'اکتسابی در پیری', 'عفونی', 'ارثی از پدر'], 'con- (با) + genit (تولد) + -al.'),
        T('خون', 'در VSD، بخشی از خون بطن چپ از سوراخ به بطن راست می‌رود.', true, 'فشار بطن چپ بیشتر است.'),
        P('حفره', 'هر حفره را به کارش وصل کن', [['right atrium', 'گرفتن خون از بدن'], ['right ventricle', 'فرستادن خون به ریه'], ['left atrium', 'گرفتن خون از ریه'], ['left ventricle', 'فرستادن خون به بدن']]),
        S('املا', 'املای «دیواره» را بنویس', 'septum', 'جمع آن septa است.', 'sep…')
      ]
    },
    /* ================= ضربان، هدایت و فشار ================= */
    {
      id: 'r5', w: 'ep', title: 'تپش قلب شب امتحان', who: 'دانشجوی ۲۱ ساله',
      brief: 'دانشجویی پس از چند لیوان قهوه و بی‌خوابی شب امتحان از «تند زدن قلب» شکایت دارد. نوار قلب ریتم سینوسی منظم با ضربان ۱۲۰ نشان می‌دهد. پزشک برای اطمینان هولتر ۲۴ ساعته می‌گذارد.',
      chart: [['شکایت', 'palpitation'], ['ECG', 'sinus tachycardia، HR ۱۲۰ bpm'], ['BP', '۱۳۰/۸۵ mmHg'], ['برنامه', 'Holter monitor ۲۴ ساعته']],
      fig: { a: ['rate-strips'], l: ['ضربان کند، طبیعی و تند'] },
      steps: [
        M('واژه', 'palpitation یعنی…', ['احساس تپیدن تند یا محکم قلب', 'لمس کردن شکم', 'درد قفسه سینه', 'غش کردن'], 'palpitate = تپیدن.'),
        M('ریتم', 'ریتمی که از گره SA شروع می‌شود چه نام دارد؟', ['sinus rhythm', 'atrial fibrillation', 'heart block', 'asystole'], 'sinoatrial node ضربان‌ساز طبیعی است.'),
        M('عدد', 'ضربان ۱۲۰ در دقیقه چه نام دارد؟', ['tachycardia', 'bradycardia', 'normal sinus rhythm', 'asystole'], 'بیش از ۱۰۰ = تند.'),
        M('ابزار', 'Holter monitor چه می‌کند؟', ['نوار قلب را ۲۴ تا ۴۸ ساعت در زندگی عادی ثبت می‌کند', 'فشار خون را یک بار می‌سنجد', 'تصویر صوتی قلب می‌گیرد', 'ضربان را با شوک تنظیم می‌کند'], 'ثبت طولانی برای گرفتن ریتم‌های گاه‌به‌گاه.'),
        O('هدایت', 'مسیر جریان برق قلب را بچین', ['SA node', 'AV node', 'bundle of His', 'bundle branches', 'Purkinje fibers'], 'از ضربان‌ساز تا دیواره بطن‌ها.'),
        T('فشار', 'در ۱۳۰/۸۵، عدد ۱۳۰ فشار سیستولی است.', true, 'عدد بالا = فشار هنگام انقباض بطن‌ها.'),
        S('املا', 'املای «ضربان تند» را بنویس', 'tachycardia', 'tachy- + -cardia.', 'tachy…')
      ]
    },
    {
      id: 'r6', w: 'ep', title: 'سرگیجه و ضربان ۳۸', who: 'آقای ۷۸ ساله',
      brief: 'پیرمردی چند بار سرگیجه و یک بار غش کرده است. نبض رادیال او ۳۸ بار در دقیقه است. در نوار قلب موج‌های P منظم‌اند ولی هیچ‌کدام به QRS نمی‌رسند: بلوک کامل قلب. برای او ضربان‌ساز مصنوعی کاشته می‌شود.',
      chart: [['شکایت', 'syncope و سرگیجه'], ['نبض', '۳۸ bpm، منظم'], ['ECG', 'CHB'], ['درمان', 'artificial pacemaker']],
      fig: { a: ['pacemaker'], l: ['کاشت ضربان‌ساز'] },
      steps: [
        M('واژه', 'syncope یعنی…', ['غش؛ از دست دادن کوتاه هوشیاری', 'سرفه', 'تپش قلب', 'تنگی نفس'], 'کم شدن خون‌رسانی مغز.'),
        M('عدد', 'ضربان ۳۸ در دقیقه چه نام دارد؟', ['bradycardia', 'tachycardia', 'fibrillation', 'flutter'], 'brady- = کند؛ کمتر از ۶۰.'),
        M('نبض', 'نبض رادیال کجا لمس می‌شود؟', ['مچ دست، سمت شست', 'گردن', 'پشت زانو', 'کشاله ران'], 'radial artery در سمت شست ساعد است.'),
        M('اختصار', 'CHB یعنی…', ['بلوک کامل قلب', 'نارسایی احتقانی قلب', 'بیماری مادرزادی قلب', 'بیماری سرخرگ کرونر'], 'complete heart block: هیچ پیامی از AV node رد نمی‌شود.'),
        T('موج', 'در نوار قلب، QRS انقباض بطن‌ها را نشان می‌دهد.', true, 'P مال دهلیزها و QRS مال بطن‌هاست.'),
        M('درمان', 'ضربان‌ساز مصنوعی چه می‌کند؟', ['با پالس الکتریکی ضربان را منظم نگه می‌دارد', 'لخته را حل می‌کند', 'فشار خون را پایین می‌آورد', 'رگ تنگ را باز می‌کند'], 'جایگزین ضربان‌ساز طبیعی.'),
        S('املا', 'املای «ضربان‌ساز» را بنویس', 'pacemaker', 'pace (گام) + maker (سازنده).', 'pace…')
      ]
    },
    /* ================= رگ‌ها و گردش خون ================= */
    {
      id: 'r7', w: 'vc', title: 'پای ورم‌کرده پس از پرواز', who: 'خانم ۴۵ ساله',
      brief: 'خانمی پس از یک پرواز ۱۲ ساعته ساق پای چپش متورم، گرم و دردناک شده. سونوگرافی داپلر لخته‌ای در سیاهرگ عمقی ران نشان می‌دهد. پزشک نگران است لخته به ریه برود.',
      chart: [['شکایت', 'edema و درد ساق چپ'], ['داپلر', 'DVT در femoral vein'], ['خطر', 'PE'], ['درمان', 'anticoagulant']],
      fig: { a: ['dvt'], l: ['ترومبوز ورید عمقی'] },
      steps: [
        M('اختصار', 'DVT یعنی…', ['ترومبوز ورید عمقی', 'نارسایی دریچه', 'آنوریسم آئورت', 'بیماری عروق محیطی'], 'deep vein thrombosis.'),
        M('واژه', 'edema یعنی…', ['ورم از تجمع مایع در بافت', 'کبودی', 'خونریزی', 'خارش'], 'تجمع مایع.'),
        M('رگ', 'سیاهرگ‌ها خون را به کجا می‌برند؟', ['به سمت قلب', 'از قلب به بدن', 'به مویرگ‌ها', 'به کبد'], 'Artery = Away؛ vein = به سمت قلب.'),
        M('خطر', 'اگر تکه‌ای از لخته کنده شود و در سرخرگ ریوی گیر کند، چه نام دارد؟', ['pulmonary embolism', 'myocardial infarction', 'stroke', 'aneurysm'], 'embolus راه می‌افتد و رگ ریه را می‌بندد.'),
        M('دارو', 'anticoagulant چه می‌کند؟', ['جلوی تشکیل لخته تازه را می‌گیرد', 'لخته را می‌سوزاند', 'رگ را گشاد می‌کند', 'ضربان را کند می‌کند'], 'مثل هپارین و وارفارین.'),
        T('آزمون', 'سونوگرافی داپلر سرعت و جهت جریان خون را نشان می‌دهد.', true, 'از امواج صوتی استفاده می‌کند.'),
        S('املا', 'املای «لخته» را بنویس', 'thrombus', 'جمع آن thrombi است.', 'throm…')
      ]
    },
    {
      id: 'r8', w: 'vc', title: 'درد پا هنگام راه رفتن', who: 'آقای ۶۶ ساله سیگاری',
      brief: 'مردی سیگاری می‌گوید پس از دو کوچه راه رفتن ساق پایش می‌گیرد و با ایستادن خوب می‌شود. نبض پشت زانو و روی پا ضعیف است. آنژیوگرافی تنگی سرخرگ رانی را نشان می‌دهد.',
      chart: [['شکایت', 'claudication'], ['معاینه', 'نبض popliteal و dorsalis pedis ضعیف'], ['تشخیص', 'PAD'], ['تصویربرداری', 'angiography: تنگی femoral artery']],
      fig: { a: ['pulse-points'], l: ['نقطه‌های نبض'] },
      steps: [
        M('واژه', 'claudication یعنی…', ['درد پا هنگام راه رفتن که با استراحت خوب می‌شود', 'ورم پا', 'بی‌حسی دست', 'تپش قلب'], 'نشانه کمبود جریان سرخرگی.'),
        M('اختصار', 'PAD یعنی…', ['بیماری سرخرگ‌های محیطی', 'باز ماندن مجرای شریانی', 'فشار سرخرگی', 'درد پس از جراحی'], 'peripheral artery disease.'),
        M('نبض', 'نبض popliteal کجاست؟', ['پشت زانو', 'مچ دست', 'گردن', 'گیجگاه'], 'popliteal = پشت زانو.'),
        M('لایه', 'پلاک در کدام لایه دیواره سرخرگ می‌نشیند؟', ['tunica intima (لایه درونی)', 'tunica adventitia', 'pericardium', 'endocardium'], 'آترواسکلروز از لایه درونی شروع می‌شود.'),
        P('رگ', 'هر رگ را به جایش وصل کن', [['femoral artery', 'ران'], ['carotid artery', 'گردن'], ['brachial artery', 'بازو'], ['radial artery', 'مچ دست']]),
        T('تصویر', 'angiography تصویر رگ‌ها با ماده حاجب و اشعه ایکس است.', true, 'angi/o (رگ) + -graphy (ثبت).'),
        S('املا', 'املای «سرخرگ» را بنویس', 'artery', 'جمع: arteries.', 'art…')
      ]
    },
    /* ================= بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: 'درد قفسه سینه با هر پله', who: 'آقای ۵۶ ساله',
      brief: 'مردی با سابقه فشار خون بالا مدتی است با کارهای سبک خانه درد قفسه سینه و تنگی نفس می‌گیرد. حالا با درد شدید به اورژانس آمده؛ فشارش ۱۸۰/۱۱۰ است و نوار قلب سکته قلبی و فیبریلاسیون دهلیزی نشان می‌دهد. در CCU بستری می‌شود.',
      chart: [['شکایت', 'angina pectoris، SOB'], ['BP', '۱۸۰/۱۱۰ mmHg'], ['ECG', 'MI و AF'], ['درمان', 'aspirin، antiarrhythmic، diuretic، vasodilator، O₂']],
      fig: { a: ['mi'], l: ['سکته قلبی'] },
      steps: [
        M('واژه', 'angina pectoris یعنی…', ['درد قفسه سینه از کمبود خون ماهیچه قلب', 'التهاب پرده قلب', 'سرفه شدید', 'سوزش معده'], 'pector/o = سینه.'),
        M('اختصار', 'MI یعنی…', ['سکته قلبی (انفارکتوس میوکارد)', 'افتادگی دریچه میترال', 'نارسایی قلب', 'فشار خون بالا'], 'myocardial infarction.'),
        M('ریشه', 'دو ریشه myocardial کدام‌اند؟', ['my/o (ماهیچه) و cardi/o (قلب)', 'my/o و card (برق)', 'myel/o و cardi/o', 'my/o و coron/o'], 'myocardial = مربوط به ماهیچه قلب.'),
        M('ریتم', 'atrial fibrillation یعنی…', ['لرزش نامنظم دهلیزها', 'ایست کامل قلب', 'ضربان کند منظم', 'بلوک کامل قلب'], 'AF: بی‌نظم و بدون موج P.'),
        P('دارو', 'هر دارو را به کارش وصل کن', [['aspirin', 'جلوگیری از چسبیدن پلاکت‌ها'], ['diuretic', 'دفع آب و نمک اضافه'], ['vasodilator', 'گشاد کردن رگ'], ['antiarrhythmic', 'نظم دادن ریتم']]),
        T('فشار', 'فشار ۱۸۰/۱۱۰ نشانه پرفشاری خون است.', true, 'بالاتر از ۱۴۰/۹۰ پرفشاری مرحله ۲ است.'),
        S('املا', 'املای «ایسکمی» را بنویس', 'ischemia', 'isch/o (بازداشتن) + -emia (خون).', 'isch…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: 'تنگی نفس شبانه و ورم پا', who: 'خانم ۷۲ ساله',
      brief: 'خانمی که سال‌ها پیش سکته قلبی داشته، حالا شب‌ها با تنگی نفس بیدار می‌شود و ساق پاهایش ورم کرده. در عکس قفسه سینه قلب بزرگ است و BNP خون بالا رفته. تشخیص: نارسایی احتقانی قلب.',
      chart: [['شکایت', 'dyspnea، edema دو ساق'], ['CXR', 'cardiomegaly'], ['آزمایش', 'BNP بالا'], ['اکو', 'EF ۳۰٪']],
      fig: { a: ['edema'], l: ['ادم گوده‌گذار'] },
      steps: [
        M('اختصار', 'CHF یعنی…', ['نارسایی احتقانی قلب', 'بیماری مادرزادی قلب', 'بلوک کامل قلب', 'بیماری سرخرگ کرونر'], 'congestive heart failure.'),
        M('واژه', 'dyspnea یعنی…', ['تنگی نفس، تنفس دشوار', 'سرفه خونی', 'نفس تند', 'قطع تنفس'], 'dys- (دشوار) + pnea (تنفس).'),
        M('واژه', 'cardiomegaly یعنی…', ['بزرگی قلب', 'کوچکی قلب', 'التهاب قلب', 'سخت شدن قلب'], 'cardi/o + -megaly.'),
        M('عدد', 'EF ۳۰٪ یعنی…', ['بطن چپ با هر ضربان فقط ۳۰٪ خونش را بیرون می‌دهد', 'فشار خون ۳۰ است', 'ضربان ۳۰ در دقیقه است', '۳۰٪ رگ‌ها بسته است'], 'ejection fraction طبیعی ۵۵ تا ۷۰ درصد است.'),
        M('دارو', 'کدام دارو آب اضافه بدن را با ادرار دفع می‌کند؟', ['diuretic', 'statin', 'anticoagulant', 'antiarrhythmic'], 'مدرها در نارسایی قلب ورم را کم می‌کنند.'),
        T('آزمایش', 'BNP هورمونی است که بطن‌های کشیده‌شده ترشح می‌کنند.', true, 'BNP بالا نشانه نارسایی قلب است.'),
        S('املا', 'املای «ورم» را بنویس', 'edema', 'edema؛ در انگلیسی بریتانیایی oedema.', 'ede…')
      ]
    },
    /* ================= تشخیص، درمان و دارو ================= */
    {
      id: 'r11', w: 'tx', title: 'آنژیوگرافی و استنت', who: 'آقای ۵۲ ساله',
      brief: 'مردی با تروپونین بالا و درد قفسه سینه به آزمایشگاه کاتتریزاسیون برده می‌شود. کاتتر از سرخرگ رانی تا قلب می‌رود. آنژیوگرافی کرونر تنگی ۹۰ درصدی LAD نشان می‌دهد که با بالون باز و با استنت نگه داشته می‌شود.',
      chart: [['آزمایش', 'troponin بالا'], ['روش', 'cardiac catheterization از femoral artery'], ['یافته', 'stenosis ۹۰٪ در LAD'], ['درمان', 'PTCA و stent؛ aspirin و statin']],
      fig: { a: ['stent'], l: ['بالون و استنت'] },
      steps: [
        M('آزمایش', 'troponin بالا در خون نشانه چیست؟', ['آسیب ماهیچه قلب', 'کم‌خونی', 'عفونت ریه', 'کلسترول بالا'], 'پروتئین ماهیچه قلب.'),
        M('روش', 'cardiac catheterization یعنی…', ['رساندن لوله نازک از رگ به قلب', 'باز کردن قفسه سینه', 'نوار قلب ۲۴ ساعته', 'سونوگرافی قلب'], 'کاتتر از رگ بازو یا ران وارد می‌شود.'),
        M('اختصار', 'LAD یعنی…', ['سرخرگ نزولی قدامی چپ', 'دهلیز چپ', 'بطن چپ', 'آئورت شکمی'], 'left anterior descending.'),
        O('درمان', 'مراحل آنژیوپلاستی را بچین', ['کاتتر بالون‌دار به محل تنگی می‌رسد', 'بالون باد می‌شود و پلاک را به دیواره می‌فشارد', 'استنت باز می‌شود', 'بالون و کاتتر بیرون می‌آیند'], 'استنت در رگ می‌ماند.'),
        M('اختصار', 'PTCA یعنی…', ['آنژیوپلاستی کرونر از راه پوست', 'جراحی بای‌پس کرونر', 'احیای قلبی-ریوی', 'تعویض دریچه'], 'percutaneous transluminal coronary angioplasty.'),
        T('دارو', 'statin کلسترول خون را پایین می‌آورد.', true, 'ساخت کلسترول در کبد را مهار می‌کند.'),
        S('املا', 'املای «آنژیوپلاستی» را بنویس', 'angioplasty', 'angi/o + -plasty.', 'angio…')
      ]
    },
    {
      id: 'r12', w: 'tx', title: 'ایست قلبی در باشگاه', who: 'مرد ۴۸ ساله',
      brief: 'مردی در باشگاه ناگهان زمین می‌خورد؛ نفس نمی‌کشد و نبض کاروتید ندارد. مربی CPR را شروع می‌کند و همکارش AED باشگاه را می‌آورد. دستگاه فیبریلاسیون بطنی تشخیص می‌دهد و شوک می‌دهد. بعدها برای او ICD کاشته می‌شود.',
      chart: [['حال', 'بی‌پاسخ، بدون نبض'], ['ریتم', 'VF'], ['اقدام', 'CPR و AED'], ['پیگیری', 'ICD']],
      fig: { a: ['cpr-steps'], l: ['زنجیره احیا'] },
      steps: [
        M('اختصار', 'VF یعنی…', ['فیبریلاسیون بطنی', 'فیبریلاسیون دهلیزی', 'ضربان کند', 'بلوک قلب'], 'ventricular fibrillation: بطن‌ها فقط می‌لرزند.'),
        O('احیا', 'گام‌های نجات را به ترتیب بچین', ['بررسی پاسخ و تنفس', 'تماس با اورژانس', 'فشردن قفسه سینه (CPR)', 'شوک با AED'], 'زنجیره نجات.'),
        M('اختصار', 'CPR یعنی…', ['احیای قلبی-ریوی', 'فشار ورید مرکزی', 'پروتئین واکنشی C', 'درد قفسه سینه'], 'cardiopulmonary resuscitation.'),
        M('روش', 'defibrillation یعنی…', ['شوک الکتریکی برای پایان دادن به فیبریلاسیون', 'باز کردن رگ با بالون', 'حل کردن لخته', 'کاشتن دریچه'], 'de- (برداشتن) + fibrillation.'),
        M('اختصار', 'ICD یعنی…', ['دفیبریلاتور قابل کاشت', 'بخش مراقبت ویژه قلب', 'نارسایی احتقانی', 'پمپ بالونی'], 'implantable cardioverter-defibrillator.'),
        T('نبض', 'نبض کاروتید در گردن لمس می‌شود.', true, 'در اورژانس نبض کاروتید را بررسی می‌کنند.'),
        S('املا', 'املای «دفیبریلاتور» را بنویس', 'defibrillator', 'de- + fibrill/o + -ator.', 'defib…')
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
    ['Lx', 'معنی واژه را از پسوند شروع کن: pericarditis یعنی «التهابِ» + «پیرامونِ» + «قلب».'],
    ['Lx', '‎-gram نتیجه ثبت است (نوار)، ‎-graph دستگاه ثبت و ‎-graphy کارِ ثبت کردن.'],
    ['Lx', 'cardi/o، coron/o و پسوند ‎-cardia همه به قلب اشاره دارند؛ tachycardia یعنی ضربان تند.'],
    ['Lx', 'جمع atrium می‌شود atria، جمع thrombus می‌شود thrombi و جمع varix می‌شود varices.'],
    ['Lx', 'ven/o و phleb/o هر دو یعنی سیاهرگ؛ phlebitis التهاب سیاهرگ است.'],
    ['Lx', 'arteri/o سرخرگ است و ather/o پلاک چربی؛ arteriosclerosis و atherosclerosis را قاطی نکن.'],
    ['Ana', 'سمت راست قلب خون کم‌اکسیژن را به ریه می‌فرستد و سمت چپ خون اکسیژن‌دار را به بدن.'],
    ['Ana', 'دیواره بطن چپ از همه ضخیم‌تر است، چون باید خون را به همه بدن بفرستد.'],
    ['Ana', 'دریچه سه‌لتی در راست و دریچه میترال (دولتی) در چپ است؛ «tri» سه و «bi» دو.'],
    ['Ana', 'سرخرگ ریوی تنها سرخرگی است که خون کم‌اکسیژن دارد و سیاهرگ‌های ریوی تنها سیاهرگ‌های اکسیژن‌دار.'],
    ['Ana', 'کرونر یعنی تاج؛ سرخرگ‌های کرونر مثل تاج دور قلب حلقه زده‌اند و خود ماهیچه قلب را تغذیه می‌کنند.'],
    ['ECG', 'گره SA ضربان‌ساز طبیعی قلب است و در دیواره دهلیز راست قرار دارد.'],
    ['ECG', 'موج P انقباض دهلیزهاست، QRS انقباض بطن‌ها و T بازیابی بطن‌ها.'],
    ['ECG', 'ضربان طبیعی ۶۰ تا ۱۰۰ بار در دقیقه است؛ کمتر از ۶۰ bradycardia و بیشتر از ۱۰۰ tachycardia.'],
    ['ECG', 'صدای lubb با بسته شدن دریچه‌های AV و صدای dupp با بسته شدن دریچه‌های سینی ساخته می‌شود.'],
    ['ECG', 'در ۱۲۰/۸۰ عدد بالا فشار سیستولی (انقباض) و عدد پایین فشار دیاستولی (استراحت) است.'],
    ['Vas', 'Artery خون را Away (دور) از قلب می‌برد؛ سیاهرگ‌ها خون را به قلب برمی‌گردانند.'],
    ['Vas', 'دیواره مویرگ فقط یک لایه سلول دارد تا اکسیژن و مواد غذایی راحت رد شوند.'],
    ['Vas', 'سیاهرگ‌های پا دریچه دارند؛ اگر دریچه‌ها خراب شوند، واریس پدید می‌آید.'],
    ['Vas', 'گردش ریوی کوچک است (قلب ← ریه ← قلب) و گردش عمومی بزرگ (قلب ← بدن ← قلب).'],
    ['Path', 'آترواسکلروز شایع‌ترین نوع آرتریواسکلروز است: پلاک چربی در دیواره سرخرگ.'],
    ['Path', 'thrombus لخته ثابت است و embolus لخته‌ای که راه افتاده؛ آمبولی ریه معمولاً از DVT پا می‌آید.'],
    ['Path', 'آنژین درد گذرای ایسکمی است؛ در سکته قلبی (MI) بخشی از ماهیچه قلب واقعاً می‌میرد.'],
    ['Path', 'در فیبریلاسیون بطنی قلب فقط می‌لرزد و خونی پمپ نمی‌شود؛ درمانش شوک فوری است.'],
    ['Path', 'ductus arteriosus باید پس از تولد بسته شود؛ باز ماندنش PDA نام دارد.'],
    ['Rx', 'آنژیوپلاستی رگ را با بالون باز می‌کند و استنت آن را باز نگه می‌دارد.'],
    ['Rx', 'در CABG یک رگ سالم (مثل سیاهرگ صافن) مسیری دور از تنگی کرونر می‌سازد.'],
    ['Rx', 'anticoagulant جلوی لخته تازه را می‌گیرد؛ thrombolytic لخته موجود را حل می‌کند.'],
    ['Rx', 'تروپونین پروتئینی است که ماهیچه آسیب‌دیده قلب در خون رها می‌کند؛ نشانه حساس سکته قلبی.'],
    ['Rx', 'LDL کلسترول بد است (Low باید پایین باشد) و HDL کلسترول خوب (High باید بالا باشد).']
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
    const M = { id: D.id, bit: D.bit, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
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
/* تپش — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مرجع سریع قلب و عروق
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = 'tapesh.tool';

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
      <p class="disclaimer">⚕️ تپش ابزار آموزشی است و جایگزین منابع پزشکی و قضاوت بالینی نیست.</p>
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
  const dict = () => `<div class="tpane">${searchBox('جست‌وجو: valve، دریچه، stenosis…')}
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
  const SAMPLES = ['pericarditis', 'cardiomegaly', 'atherosclerosis', 'endarterectomy', 'sphygmomanometer', 'echocardiography', 'thrombophlebitis', 'bradycardia'];
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
    return `<div class="tpane">${searchBox('جست‌وجو: cardi، قلب، \u200e-megaly\u200e…')}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b dir="ltr">${esc(r.a)}</b><span>${esc(r.fa)}</span><small dir="ltr">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox('جست‌وجو: CABG، سکته، ECG…')}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td dir="ltr">${esc(a.a)}</td><td><span dir="ltr" class="abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  /* مرجع سریع: جدول‌های پرکاربرد آناتومی که هنگام خواندن پرونده لازم می‌شوند */
  const REF = [
    ['حفره‌ها و دریچه‌ها', [['right atrium → tricuspid → right ventricle', 'نیمه راست: خون کم‌اکسیژن از بدن'], ['right ventricle → pulmonary valve → pulmonary artery', 'به سوی ریه‌ها'], ['pulmonary veins → left atrium → mitral', 'خون اکسیژن‌دار از ریه'], ['left ventricle → aortic valve → aorta', 'به سوی همه بدن']]],
    ['لایه‌های قلب', [['pericardium', 'کیسه دولایه دور قلب'], ['epicardium', 'لایه بیرونی (پریکارد احشایی)'], ['myocardium', 'ماهیچه قلب'], ['endocardium', 'پوشش درونی حفره‌ها و دریچه‌ها']]],
    ['نوار قلب', [['P wave', 'انقباض (دپلاریزاسیون) دهلیزها'], ['QRS complex', 'انقباض (دپلاریزاسیون) بطن‌ها'], ['T wave', 'بازیابی (رپلاریزاسیون) بطن‌ها'], ['ST segment', 'بالا یا پایین رفتن آن در ایسکمی و سکته']]],
    ['اعداد طبیعی', [['heart rate', '۶۰ تا ۱۰۰ ضربان در دقیقه'], ['blood pressure', 'کمتر از ۱۲۰/۸۰ mmHg'], ['ejection fraction', '۵۵ تا ۷۰ درصد'], ['LDL / HDL', 'LDL پایین، HDL بالا']]],
    ['پسوندهای پرکاربرد', [['-megaly', 'بزرگی'], ['-stenosis', 'تنگی'], ['-sclerosis', 'سخت شدن'], ['-plasty / -ectomy / -tomy', 'ترمیم / برداشتن / برش'], ['-gram / -graph / -graphy', 'نوار / دستگاه / فرایند ثبت']]],
    ['دسته‌های دارو', [['anticoagulant', 'جلوگیری از لخته تازه'], ['thrombolytic', 'حل کردن لخته موجود'], ['beta-blocker', 'کند کردن ضربان، کاهش فشار'], ['statin', 'کاهش کلسترول'], ['diuretic', 'دفع آب و نمک اضافه'], ['nitroglycerin', 'رفع آنژین با گشاد کردن رگ']]]
  ];

  const ref = () => `<div class="tpane"><p class="muted">جدول‌های پرکاربرد برای خواندن پرونده و گزارش تصویربرداری.</p>
    ${REF.map(g => `<h3 class="tgh">${g[0]}</h3><table class="mini ref"><tr><th>واژه</th><th>معنی</th></tr>${g[1].map(r => `<tr><td dir="ltr" class="ref__v">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`).join('')}
    ${EA.ui.figCard({ a: ['flow-loop'], l: ['مسیر خون'] })}</div>`;

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
