/* تراپو • ترمینو — حیطه «neuro» (Nervous System and Mental Health)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_neuro;
  D.css = ".gcs__h{display: flex; align-items: center; gap: 8px; margin: 14px 0 6px; font-size: 15px;}\n.gcs__h i{flex-shrink: 0; font-style: normal; display: inline-grid; place-items: center; min-width: 28px; height: 28px; padding: 0 6px; border-radius: 9px; background: var(--brand-l); color: var(--brand-t); font-family: Arial, Helvetica, sans-serif; font-weight: 900;}\n.gcs__h b{min-width: 0;}\n.gcs__row{display: flex; flex-direction: column; gap: 6px;}\n.gcs__o{display: flex; align-items: center; gap: 10px; width: 100%; text-align: start; font: inherit; color: var(--text); background: var(--card); border: 2px solid var(--line); border-bottom-width: 4px; border-radius: 14px; padding: 8px 12px; cursor: pointer; min-width: 0;}\n.gcs__o span{flex: 1 1 auto; min-width: 0; overflow-wrap: anywhere; font-weight: 700;}\n.gcs__o em{flex-shrink: 0; font-style: normal; display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--bg); border: 2px solid var(--line); font-weight: 900; font-family: Arial, Helvetica, sans-serif;}\n.gcs__o.is-on{border-color: var(--brand); background: var(--brand-l);}\n.gcs__o.is-on em{background: var(--brand); border-color: var(--brand); color: #fff;}\n.gcs__out{display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; padding: 12px 16px; border-radius: 16px; background: color-mix(in srgb, var(--brand) 12%, var(--bg)); border: 2px solid color-mix(in srgb, var(--brand) 40%, var(--line)); margin: 8px 0 12px; position: sticky; top: 0; z-index: 2;}\n.gcs__out b{font-size: 26px; color: var(--brand-t); font-family: Arial, Helvetica, sans-serif;}\n.gcs__out small{flex-basis: 100%; color: var(--muted); font-weight: 700;}\n.tsc--ok{color: #46a302 !important;}\n.tsc--mid{color: #e5a500 !important;}\n.tsc--bad{color: #c2413a !important;}";
  D.content = function () {
    window.EA.IMG = D.IMG;
/* نورو — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: 'نورو', key: 'neuro', title: 'نورو • ترمینولوژی دستگاه عصبی و سلامت روان', certCode: 'NR',
    subject: 'ترمینولوژی پزشکی دستگاه عصبی و سلامت روان (مغز، نخاع، اعصاب و اختلال‌های روانی)',
    kicker: '🧠 ترمینولوژی پزشکی: مغز، نخاع، اعصاب و سلامت روان',
    hello: 'سلام، من <b>نورو</b> هستم؛ یک مغز خندان که همیشه یک جرقه عصبی ⚡ همراهش است!',
    disclaimer: 'نورو یک ابزار آموزشی است و جایگزین معاینه، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر بالینی؛ از نورون و سیناپس تا لوب‌های مغز، مننژ، قوس رفلکس، هماتوم‌ها، MRI و نوار مغز.',
    outcomes: [
      'هر واژه عصبی را به پیشوند، ریشه و پسوند بشکنی و معنی‌اش را بگویی',
      'لوب‌های مغز، ساقه مغز، مخچه، مننژ، بطن‌ها و نخاع را روی شکل نشان دهی',
      'نورون، سیناپس، قوس رفلکس، اعصاب جمجمه‌ای و دستگاه خودکار را توضیح دهی',
      'سکته مغزی، صرع، پارکینسون، آلزایمر، ام‌اس و دیگر بیماری‌های عصبی را از هم جدا کنی',
      'اختلال‌های اضطرابی، خلقی و روان‌پریشی و داروهایشان را بشناسی',
      'EEG، پونکسیون کمری، CT و MRI، مقیاس گلاسگو، جراحی‌ها و اختصارهای پرونده را بخوانی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، یادداشت نورولوژی را مثل یک داستان آشنا می‌خوانی.',
    obHello: 'سلام! من نورو هستم؛ یک مغز خندان 🧠 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان عصب» بهترین شروع است؛ ریشه‌های پایه و بخش‌های دستگاه عصبی آن‌جا یاد داده می‌شوند!',
    demo: () => ({
      q: 'واژه <b dir="ltr">hemiplegia</b> یعنی…',
      fig: { a: ['paralysis-types'], l: ['انواع فلج'] },
      opts: ['فلج نیمه بدن', 'فلج چهار اندام', 'ضعف یک اندام', 'فلج دو پا'],
      why: `${EA.K.wb('hemi-', '-plegia')}<br><b>hemi-</b> = نیم، <b>-plegia</b> = فلج. پس <b>فلج یک نیمه بدن</b>؛ مثلاً بعد از سکته مغزی. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['جرقه تازه', 'دندریت کنجکاو', 'آکسون پرشتاب', 'رمزگشای ریشه‌ها', 'نگهبان مننژ', 'استاد سیناپس', 'راهنمای اعصاب جمجمه‌ای',
      'شکارچی رفلکس', 'خواننده نوار مغز', 'کارآگاه سکته', 'همراه سلامت روان', 'استاد گلاسگو', 'استاد واژه‌سازی', 'افسانه نورولوژی', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی روان‌شناسی', 'کارشناس هوشبری', 'دانشجوی کاردرمانی', 'کارشناس اتاق عمل', 'پرستار ICU', 'رزیدنت نورولوژی', 'دانشجوی فیزیوتراپی', 'کارشناس نوار مغز', 'پرستار اورژانس', 'دانشجوی گفتاردرمانی', 'کارشناس رادیولوژی'],
    firstBadge: ['🧠', 'اولین جرقه'],
    worldBadges: { lx: ['🧩', 'رمزگشا'], cn: ['🧠', 'نقشه‌خوان مغز'], pn: ['⚡', 'استاد تکانه'], ds: ['🩺', 'کارآگاه عصبی'], ps: ['💭', 'همراه ذهن'], tx: ['📈', 'خواننده نوار مغز'] },
    confetti: ['#6C4FD0', '#F6B3C6', '#FFC800', '#F0A030', '#17A398', '#D9534F', '#3D6FD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'electroencephalography',
    parseSamples: ['electroencephalography', 'hemiplegia', 'myelomeningocele', 'hydrocephalus', 'radiculopathy', 'craniotomy', 'schizophrenia', 'narcolepsy'],
    ph: { dict: 'جست‌وجو: neur، مغز، seizure…', roots: 'جست‌وجو: encephal، عصب، ‎-plegia‎…', abbr: 'جست‌وجو: CVA، نخاع، EEG…' },
    toolsDisclaimer: '⚕️ نورو ابزار آموزشی است؛ واژه‌نامه و نمره گلاسگو جای معاینه عصبی و قضاوت بالینی را نمی‌گیرند.',
    /* شخصیت: یک مغز صورتی با شکنج‌ها و جرقه عصبی (بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy) */
    mascot: (cx, cy) => `
        <path d="M${cx} 30 C${cx - 14} 18 ${cx - 40} 22 ${cx - 44} 40 C${cx - 60} 46 ${cx - 62} 70 ${cx - 52} 82 C${cx - 58} 102 ${cx - 44} 122 ${cx - 24} 120 C${cx - 16} 134 ${cx - 2} 132 ${cx} 124 C${cx + 2} 132 ${cx + 16} 134 ${cx + 24} 120 C${cx + 44} 122 ${cx + 58} 102 ${cx + 52} 82 C${cx + 62} 70 ${cx + 60} 46 ${cx + 44} 40 C${cx + 40} 22 ${cx + 14} 18 ${cx} 30 Z" fill="#F6B3C6" stroke="#D97890" stroke-width="2.2"/>
        <path d="M${cx} 32 V122" stroke="#D97890" stroke-width="2" opacity=".7"/>
        <path d="M${cx - 40} 52 q10 -8 18 0 q8 8 16 -2 M${cx + 40} 52 q-10 -8 -18 0 q-8 8 -16 -2 M${cx - 52} 96 q8 -6 14 2 M${cx + 52} 96 q-8 -6 -14 2 M${cx - 30} 30 q6 8 14 4 M${cx + 30} 30 q-6 8 -14 4" stroke="#D97890" stroke-width="2" fill="none" stroke-linecap="round" opacity=".75"/>
        <path d="M${cx - 44} 46 C${cx - 40} 36 ${cx - 30} 30 ${cx - 22} 30" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M${cx + 54} 6 l-10 16 h8 l-6 14 14 -18 h-8 l6 -12 z" fill="#FFC800" stroke="var(--c)" stroke-width="1.6" stroke-linejoin="round"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: مقیاس کمای گلاسگو (GCS) ----------
   * E (باز شدن چشم) ۱ تا ۴، V (پاسخ کلامی) ۱ تا ۵، M (پاسخ حرکتی) ۱ تا ۶؛ جمع ۳ تا ۱۵.
   * ۱۳ تا ۱۵ آسیب خفیف، ۹ تا ۱۲ متوسط، ۸ و کمتر شدید (کما). اعداد آموزشی‌اند. */
  const GCS = [
    ['e', 'E', 'باز شدن چشم (Eye opening)', [[4, 'خودبه‌خود باز می‌کند'], [3, 'با صدا زدن باز می‌کند'], [2, 'فقط با تحریک دردناک'], [1, 'هیچ پاسخی ندارد']]],
    ['v', 'V', 'پاسخ کلامی (Verbal)', [[5, 'آگاه به زمان و مکان (oriented)'], [4, 'گیج (confused)'], [3, 'کلمات نامربوط'], [2, 'صداهای نامفهوم'], [1, 'هیچ صدایی ندارد']]],
    ['m', 'M', 'پاسخ حرکتی (Motor)', [[6, 'دستور را اجرا می‌کند'], [5, 'محل درد را پیدا می‌کند'], [4, 'از درد عقب می‌کشد'], [3, 'خم شدن غیرطبیعی (decorticate)'], [2, 'باز شدن غیرطبیعی (decerebrate)'], [1, 'هیچ حرکتی ندارد']]]
  ];
  const st = { e: 0, v: 0, m: 0 };
  const fa = n => EA.fa(n);
  const total = () => st.e + st.v + st.m;
  function out() {
    const t = total();
    if (!st.e || !st.v || !st.m) return `<b>${t ? fa(t) : '—'}</b><span>از ۱۵</span><small>برای هر سه بخش E، V و M یک گزینه انتخاب کن.</small>`;
    const c = t >= 13 ? ['آسیب خفیف مغزی', 'هوشیاری نزدیک به طبیعی؛ پایش علائم عصبی ادامه یابد.', 'ok'] : t >= 9 ? ['آسیب متوسط', 'هوشیاری کاهش یافته؛ نیاز به بررسی دقیق و CT.', 'mid'] : ['آسیب شدید (کما)', 'نمره ۸ و کمتر: راه هوایی در خطر است؛ مراقبت ویژه لازم است.', 'bad'];
    return `<b class="tsc--${c[2]}">${fa(t)}</b><span>از ۱۵ • <bdi dir="ltr">E${st.e} V${st.v} M${st.m}</bdi></span><small><b class="tsc--${c[2]}" style="font-size:inherit">${c[0]}</b>؛ ${c[1]}</small>`;
  }
  EA.APP.extraTool = {
    id: 'gcs', sym: 'GCS', name: 'مقیاس کمای گلاسگو', color: '#6C4FD0',
    value: total,
    pane: () => `<div class="tpane"><p class="muted">برای هر بخش بهترین پاسخ بیمار را انتخاب کن؛ نمره گلاسگو از ۳ تا ۱۵ حساب می‌شود.</p>
    <div class="gcs__out" aria-live="polite">${out()}</div>
    ${GCS.map(([k, s, name, rows]) => `<h4 class="gcs__h"><i>${s}</i><b>${name}</b></h4><div class="gcs__row">${rows.map(([v, t]) =>
      `<button class="gcs__o${st[k] === v ? ' is-on' : ''}" data-gcs="${k}" data-v="${v}"><em>${fa(v)}</em><span>${EA.bi(t)}</span></button>`).join('')}</div>`).join('')}
    <table class="mini"><tr><th>نمره</th><th>تفسیر</th></tr>
      <tr><td>۱۳ تا ۱۵</td><td>آسیب خفیف</td></tr><tr><td>۹ تا ۱۲</td><td>آسیب متوسط</td></tr><tr><td>۸ و کمتر</td><td>آسیب شدید؛ کما</td></tr></table>
    ${EA.ui.figCard({ a: ['gcs'], l: ['سه بخش مقیاس گلاسگو'] })}
    <p class="muted">نمره گلاسگو بخشی از معاینه عصبی است و تصمیم درمانی با پزشک است.</p></div>`,
    click: e => { const b = e.target.closest('[data-gcs]'); if (!b) return false; const v = +b.dataset.v; st[b.dataset.gcs] = st[b.dataset.gcs] === v ? 0 : v; return true; },
    /* برای آزمون دود: E3 + V4 + M6 = ۱۳ */
    test: { clicks: ['[data-gcs="e"][data-v="3"]', '[data-gcs="v"][data-v="4"]', '[data-gcs="m"][data-v="6"]'], expect: 13 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  /* نام، کلید و متن‌های هر اپ در config.js آن اپ (پیش از هسته بارگذاری می‌شود) */
  EA.APP = EA.APP || { name: 'App', key: 'app', title: 'App' };

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
/* نورو — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/neuro/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["absence seizure", "AB-sens SEE-zher", "Brief seizure with a blank stare and loss of awareness for a few seconds; formerly petit mal.", "تشنج غیبت (پتی‌مال)", "ds", "dz", []],
["acetylcholine", "ah-see-til-KOH-leen", "Neurotransmitter of motor neurons and the parasympathetic system.", "استیل‌کولین", "pn", "phys", ["ACh"]],
["afferent neuron", "AF-er-ent NOO-ron", "Sensory neuron that carries impulses toward the CNS (af- = toward).", "نورون آوران (حسی)", "pn", "body", []],
["agnosia", "ag-NOH-zee-ah", "Inability to recognize objects or sounds by the senses (gnos/o = knowledge).", "ناشناخت (آگنوزی)", "ds", "sx", []],
["agoraphobia", "ag-oh-rah-FOH-bee-ah", "Fear of open or public places from which escape may be difficult (agora = marketplace).", "ترس از مکان‌های باز و شلوغ", "ps", "psy", []],
["Alzheimer disease", "ALTS-hye-mer dih-ZEEZ", "Progressive brain degeneration and the most common cause of dementia; memory loss, confusion and personality change.", "بیماری آلزایمر", "ds", "dz", ["AD"]],
["amnesia", "am-NEE-zee-ah", "Loss of memory (a- = without, -mnesia = memory).", "فراموشی", "ds", "sx", []],
["amyotrophic lateral sclerosis", "ah-mye-oh-TROH-fik LAT-er-al skleh-ROH-sis", "Fatal disease in which motor neurons degenerate, causing muscle wasting and paralysis; Lou Gehrig disease.", "اسکلروز جانبی آمیوتروفیک (ALS)", "ds", "dz", ["ALS"]],
["analgesia", "an-al-JEE-zee-ah", "Absence of pain sensation (an- = without, -algesia = pain).", "بی‌دردی", "ds", "sx", []],
["analgesic", "an-al-JEE-zik", "Drug that relieves pain without loss of consciousness.", "داروی مسکن (ضد درد)", "tx", "tx", []],
["anencephaly", "an-en-SEF-ah-lee", "Absence of the brain and cranial vault at birth (an- = without, encephal/o = brain).", "بی‌مغزی (آنانسفالی)", "ds", "dz", []],
["anesthesia", "an-es-THEE-zee-ah", "Loss of feeling or sensation (an- = without, -esthesia = feeling).", "بی‌حسی، بیهوشی", "lx", "sx", []],
["anesthesiologist", "an-es-thee-zee-OL-oh-jist", "Physician who specializes in giving anesthetic drugs (an- = without, esthesi/o = feeling).", "متخصص بیهوشی", "lx", "field", []],
["anesthetic", "an-es-THET-ik", "Drug that causes loss of sensation; general anesthetics also cause unconsciousness.", "داروی بیهوشی یا بی‌حسی", "tx", "tx", ["GA"]],
["aneurysm", "AN-yoo-rizm", "Localized bulging (dilation) of an artery wall that may burst and bleed.", "آنوریسم (اتساع سرخرگ)", "ds", "dz", []],
["anorexia nervosa", "an-oh-REK-see-ah ner-VOH-sah", "Eating disorder with extreme fear of weight gain, self-starvation and distorted body image.", "بی‌اشتهایی عصبی", "ps", "psy", []],
["anticonvulsant", "an-tih-kon-VUL-sant", "Drug that prevents or relieves seizures, such as phenytoin or diazepam.", "داروی ضدتشنج", "tx", "tx", []],
["antidepressant", "an-tih-dee-PRES-ant", "Drug that relieves depression, such as an SSRI.", "داروی ضدافسردگی", "ps", "tx", ["SSRI"]],
["antipsychotic", "an-tih-sye-KOT-ik", "Drug that controls psychotic symptoms such as hallucinations; also called a neuroleptic.", "داروی ضدروان‌پریشی", "ps", "tx", []],
["anxiety", "ang-ZYE-eh-tee", "Feeling of worry, nervousness or fear, often with a racing heart and sweating.", "اضطراب", "ps", "sx", []],
["anxiolytic", "ang-zye-oh-LIT-ik", "Drug that relieves anxiety (-lytic = breaking down).", "داروی ضداضطراب", "ps", "tx", []],
["aphasia", "ah-FAY-zee-ah", "Loss or impairment of the ability to speak or understand speech (a- = without, -phasia = speech).", "زبان‌پریشی (آفازی)", "lx", "sx", []],
["apraxia", "ah-PRAK-see-ah", "Inability to carry out purposeful movements although muscles are not paralyzed.", "کنش‌پریشی (آپراکسی)", "ds", "sx", []],
["arachnoid", "ah-RAK-noyd", "Middle, web-like layer of the meninges (arachne = spider).", "عنکبوتیه", "cn", "body", []],
["astrocytoma", "as-troh-sye-TOH-mah", "Tumor of the star-shaped glial cells (astrocytes) of the brain.", "آستروسیتوما", "ds", "dz", []],
["ataxia", "ah-TAK-see-ah", "Lack of muscle coordination (a- = without, tax/o = order, coordination).", "ناهماهنگی حرکتی (آتاکسی)", "ds", "sx", []],
["attention-deficit/hyperactivity disorder", "ah-TEN-shun DEF-ih-sit hye-per-ak-TIV-ih-tee dis-OR-der", "Disorder of inattention, impulsiveness and overactivity, usually starting in childhood.", "اختلال کم‌توجهی-بیش‌فعالی", "ps", "psy", ["ADHD"]],
["aura", "AW-rah", "Warning sensation, such as flashing lights, that comes before a migraine or seizure.", "اورا (پیش‌نشانه)", "ds", "sx", []],
["autism spectrum disorder", "AW-tizm SPEK-trum dis-OR-der", "Developmental disorder affecting social interaction and communication, with repetitive behaviors (aut/o = self).", "اختلال طیف اوتیسم", "ps", "psy", ["ASD"]],
["autonomic nervous system", "aw-toh-NOM-ik NER-vus SIS-tem", "Part of the PNS that controls involuntary functions of the heart, smooth muscles and glands.", "دستگاه عصبی خودکار", "pn", "body", ["ANS"]],
["axon", "AK-son", "Long fiber of a neuron that carries impulses away from the cell body.", "آکسون", "pn", "body", []],
["Babinski sign", "bah-BIN-skee syne", "Big toe bends upward and the other toes fan out when the sole is stroked; normal in infants but a sign of motor nerve damage in adults.", "نشانه بابینسکی", "pn", "lab", []],
["Bell palsy", "bel PAWL-zee", "Sudden paralysis of the facial nerve, drooping one side of the face.", "فلج بل (فلج عصب صورت)", "ds", "dz", []],
["bipolar disorder", "bye-POH-lar dis-OR-der", "Mood disorder with episodes of mania alternating with depression.", "اختلال دوقطبی", "ps", "psy", ["BPD"]],
["blood-brain barrier", "blud brayn BAIR-ee-er", "Protective layer of brain capillaries that keeps many harmful substances and germs out of the brain.", "سد خونی-مغزی", "cn", "phys", []],
["brain", "brayn", "The organ inside the skull that controls thought, memory, movement, sensation and body functions (encephal/o = brain).", "مغز", "cn", "body", []],
["brainstem", "BRAYN-stem", "Stalk of the brain made of the midbrain, pons and medulla oblongata; controls breathing, heart rate and blood pressure.", "ساقه مغز", "cn", "body", []],
["Broca area", "BROH-kah AIR-ee-ah", "Region of the left frontal lobe that controls the production of speech.", "ناحیه بروکا", "cn", "phys", []],
["bulimia nervosa", "boo-LIM-ee-ah ner-VOH-sah", "Eating disorder with binge eating followed by purging, such as self-induced vomiting.", "پرخوری عصبی (بولیمیا)", "ps", "psy", []],
["carotid endarterectomy", "kah-ROT-id end-ar-ter-EK-toh-mee", "Removal of plaque from the inner lining of the carotid artery to prevent stroke.", "اندارترکتومی کاروتید", "tx", "tx", []],
["carotid ultrasound", "kah-ROT-id UL-trah-sownd", "Sound-wave imaging of the carotid arteries in the neck to find narrowing.", "سونوگرافی کاروتید", "tx", "lab", []],
["cauda equina", "KAW-dah eh-KWYE-nah", "Bundle of spinal nerve roots below the end of the spinal cord; looks like a horse's tail.", "دم اسب", "cn", "body", []],
["cell body", "sel BOD-ee", "Main part of a neuron that contains the nucleus.", "جسم سلولی", "pn", "body", []],
["central nervous system", "SEN-tral NER-vus SIS-tem", "The brain and the spinal cord.", "دستگاه عصبی مرکزی", "lx", "body", ["CNS"]],
["cephalalgia", "sef-ah-LAL-jee-ah", "Headache (cephal/o = head, -algia = pain).", "سردرد", "ds", "sx", ["HA"]],
["cerebellar", "ser-eh-BEL-ar", "Pertaining to the cerebellum.", "مخچه‌ای", "cn", "body", []],
["cerebellum", "ser-eh-BEL-um", "Second-largest part of the brain, at the back; coordinates muscle movement and balance (cerebell/o = cerebellum).", "مخچه", "cn", "body", []],
["cerebral", "seh-REE-bral", "Pertaining to the cerebrum or brain (cerebr/o = cerebrum).", "مغزی", "lx", "body", []],
["cerebral angiography", "seh-REE-bral an-jee-OG-rah-fee", "X-ray of the blood vessels of the brain after injecting contrast dye; detects aneurysms and blockages.", "آنژیوگرافی مغز", "tx", "lab", []],
["cerebral cortex", "seh-REE-bral KOR-teks", "The thin outer layer of gray matter covering the cerebrum (cortic/o = cortex).", "قشر مخ", "cn", "body", []],
["cerebral hemisphere", "seh-REE-bral HEM-is-feer", "One of the two halves (right or left) of the cerebrum.", "نیمکره مخ", "cn", "body", []],
["cerebral palsy", "seh-REE-bral PAWL-zee", "Group of movement and posture disorders from brain damage before, during or soon after birth.", "فلج مغزی", "ds", "dz", ["CP"]],
["cerebrospinal", "ser-eh-broh-SPYE-nal", "Pertaining to the brain and spinal cord (cerebr/o = cerebrum, spin/o = spine).", "مغزی-نخاعی", "lx", "body", []],
["cerebrospinal fluid", "ser-eh-broh-SPYE-nal FLOO-id", "Clear fluid that fills the ventricles and surrounds the brain and spinal cord, cushioning them.", "مایع مغزی-نخاعی", "cn", "phys", ["CSF"]],
["cerebrovascular accident", "ser-eh-broh-VAS-kyoo-lar AK-sih-dent", "Stroke; damage to the brain from interrupted blood flow, caused by a thrombus, embolus or hemorrhage.", "سکته مغزی", "ds", "dz", ["CVA"]],
["cerebrum", "SER-eh-brum", "The largest part of the brain, divided into right and left hemispheres; controls thought, voluntary movement and the senses.", "مخ", "cn", "body", []],
["choroid plexus", "KOR-oyd PLEK-sus", "Network of capillaries in the ventricles that produces cerebrospinal fluid.", "شبکه مشیمیه", "cn", "body", []],
["claustrophobia", "klaws-troh-FOH-bee-ah", "Fear of closed or small spaces.", "ترس از فضای بسته", "ps", "psy", []],
["cognitive behavioral therapy", "KOG-nih-tiv bee-HAYV-yor-al THAIR-ah-pee", "Psychotherapy that changes unhelpful thoughts and behaviors.", "درمان شناختی-رفتاری", "ps", "tx", ["CBT"]],
["coma", "KOH-mah", "State of deep unconsciousness from which the person cannot be awakened.", "کما (اغما)", "ds", "sx", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-ray imaging that makes cross-sectional pictures of the brain; quickly shows bleeding.", "سی‌تی‌اسکن", "tx", "lab", ["CT"]],
["concussion", "kon-KUSH-un", "Temporary disturbance of brain function from a blow to the head, often with brief loss of consciousness.", "ضربه مغزی (کانکاشن)", "ds", "dz", []],
["contusion", "kon-TOO-zhun", "Bruising of brain tissue from a head injury.", "کوفتگی مغز", "ds", "dz", []],
["convulsion", "kon-VUL-shun", "Sudden, violent, involuntary contractions of a group of muscles.", "تشنج عضلانی (کانوالژن)", "ds", "sx", []],
["corpus callosum", "KOR-pus kah-LOH-sum", "A thick band of nerve fibers that connects the right and left cerebral hemispheres.", "جسم پینه‌ای", "cn", "body", []],
["cranial nerves", "KRAY-nee-al nervz", "Twelve pairs of nerves that arise from the brain, such as the optic, facial and vagus nerves.", "اعصاب جمجمه‌ای", "pn", "body", []],
["craniectomy", "kray-nee-EK-toh-mee", "Surgical removal of part of the skull (-ectomy = removal).", "برداشتن بخشی از جمجمه", "tx", "tx", []],
["craniotomy", "kray-nee-OT-oh-mee", "Surgical incision into the skull to reach the brain (crani/o = skull, -tomy = incision).", "برش جمجمه (کرانیوتومی)", "tx", "tx", []],
["cranium", "KRAY-nee-um", "The skull bones that enclose and protect the brain (crani/o = skull).", "جمجمه", "cn", "body", []],
["Creutzfeldt-Jakob disease", "KROYTS-felt YAH-kob dih-ZEEZ", "Rare, fatal brain degeneration caused by a prion, with rapid dementia.", "بیماری کروتزفلد-جاکوب", "ds", "dz", ["CJD"]],
["cryosurgery", "krye-oh-SER-jer-ee", "Use of extreme cold to destroy tissue such as a tumor (cry/o = cold).", "سرماجراحی", "tx", "tx", []],
["deep tendon reflex", "deep TEN-don REE-fleks", "Reflex muscle contraction when a tendon is tapped, such as the patellar (knee-jerk) reflex.", "رفلکس عمقی تاندون", "pn", "lab", ["DTR"]],
["delirium", "deh-LEER-ee-um", "Sudden state of confusion, disorientation and agitation, often from illness or drugs.", "دلیریوم (آشفتگی حاد)", "ps", "sx", []],
["delusion", "deh-LOO-zhun", "Fixed false belief that is not changed by reasoning or evidence.", "هذیان", "ps", "sx", []],
["dementia", "deh-MEN-shee-ah", "Progressive loss of memory, thinking and reasoning that interferes with daily life (de- = loss, ment/o = mind).", "زوال عقل (دمانس)", "ds", "dz", []],
["dendrite", "DEN-dryte", "Branching fiber of a neuron that receives impulses and carries them toward the cell body (dendr/o = tree).", "دندریت", "pn", "body", []],
["depression", "dee-PRESH-un", "Mood disorder with persistent sadness, loss of interest, low energy and hopelessness.", "افسردگی", "ps", "psy", []],
["dermatome", "DER-mah-tohm", "Area of skin supplied by the sensory fibers of a single spinal nerve.", "درماتوم", "pn", "body", []],
["Diagnostic and Statistical Manual of Mental Disorders", "dye-ag-NOS-tik and stah-TIS-tih-kal MAN-yoo-al", "Reference book that defines and classifies mental disorders.", "راهنمای تشخیصی و آماری اختلالات روانی", "ps", "lab", ["DSM"]],
["diencephalon", "dye-en-SEF-ah-lon", "The interbrain between the cerebrum and midbrain; contains the thalamus and hypothalamus.", "مغز میانی پیشین (دیانسفال)", "cn", "body", []],
["diplopia", "dih-PLOH-pee-ah", "Double vision (dipl/o = double, -opia = vision).", "دوبینی", "ds", "sx", []],
["disorientation", "dis-or-ee-en-TAY-shun", "Confusion about time, place or identity.", "گم‌گشتگی ذهنی", "ps", "sx", []],
["dopamine", "DOH-pah-meen", "Neurotransmitter involved in movement, mood and reward; low in Parkinson disease.", "دوپامین", "pn", "phys", ["DA"]],
["dopaminergic drugs", "doh-pah-mee-NER-jik drugz", "Drugs such as levodopa that raise dopamine activity to treat Parkinson disease.", "داروهای دوپامینرژیک", "tx", "tx", []],
["dura mater", "DOO-rah MAY-ter", "Tough outer layer of the meninges ('hard mother') (dur/o = dura mater).", "سخت‌شامه", "cn", "body", []],
["dysarthria", "dis-AR-three-ah", "Difficult, poorly pronounced speech from weak speech muscles (arthr/o = articulation).", "اختلال تلفظ (دیزآرتری)", "ds", "sx", []],
["dyslexia", "dis-LEK-see-ah", "Difficulty reading and understanding written words (-lexia = reading).", "نارساخوانی", "ds", "sx", []],
["dysphasia", "dis-FAY-zee-ah", "Difficulty with speech or with understanding language (dys- = difficult).", "اختلال گفتار (دیسفازی)", "lx", "sx", []],
["effector", "ee-FEK-tor", "Muscle or gland that responds to a motor impulse.", "اندام پاسخ‌دهنده", "pn", "body", []],
["efferent neuron", "EF-er-ent NOO-ron", "Motor neuron that carries impulses away from the CNS to muscles and glands (ef- = away from).", "نورون وابران (حرکتی)", "pn", "body", []],
["electroconvulsive therapy", "ee-lek-troh-kon-VUL-siv THAIR-ah-pee", "Treatment of severe depression by passing a controlled electric current through the brain under anesthesia.", "شوک‌درمانی (ECT)", "ps", "tx", ["ECT"]],
["electroencephalogram", "ee-lek-troh-en-SEF-ah-loh-gram", "The record (tracing) of the brain's electrical activity (-gram = record).", "نوار مغز (الکتروانسفالوگرام)", "tx", "lab", []],
["electroencephalography", "ee-lek-troh-en-sef-ah-LOG-rah-fee", "Recording the electrical activity of the brain with electrodes on the scalp.", "نوار مغز (الکتروانسفالوگرافی)", "tx", "lab", ["EEG"]],
["electromyography", "ee-lek-troh-mye-OG-rah-fee", "Recording the electrical activity of muscles, to test nerves and muscles.", "نوار عصب و عضله (EMG)", "tx", "lab", ["EMG"]],
["embolism", "EM-boh-lizm", "Blockage of a vessel by a clot or other material carried from elsewhere in the bloodstream.", "آمبولی", "ds", "dz", []],
["encephalitis", "en-sef-ah-LYE-tis", "Inflammation of the brain, usually caused by a virus (encephal/o = brain).", "التهاب مغز (آنسفالیت)", "lx", "dz", []],
["encephalopathy", "en-sef-ah-LOP-ah-thee", "Any disease or disorder of the brain tissue (encephal/o = brain, -pathy = disease).", "بیماری مغز (آنسفالوپاتی)", "lx", "dz", []],
["epidural hematoma", "ep-ih-DOO-ral hee-mah-TOH-mah", "Blood collection between the skull and the dura mater, usually from a torn artery after head injury.", "هماتوم اپیدورال", "ds", "dz", []],
["epidural space", "ep-ih-DOO-ral spays", "Space above (outside) the dura mater; used for epidural anesthesia in the spine.", "فضای روی سخت‌شامه (اپیدورال)", "cn", "body", []],
["epilepsy", "EP-ih-lep-see", "Disorder marked by recurrent seizures (epi- = upon, -lepsy = seizure).", "صرع", "ds", "dz", []],
["evoked potentials", "ee-VOHKT poh-TEN-shalz", "Recording of brain responses to stimuli such as sound, light or touch.", "پتانسیل‌های برانگیخته", "tx", "lab", ["VEP"]],
["facial nerve", "FAY-shal nerv", "Seventh cranial nerve; controls the muscles of facial expression.", "عصب صورتی", "pn", "body", []],
["fissure", "FISH-er", "A deep groove in the brain, such as the longitudinal fissure between the hemispheres.", "شکاف", "cn", "body", []],
["flaccid", "FLAS-id", "Limp, without muscle tone.", "شل", "ds", "sx", []],
["frontal lobe", "FRUN-tal lohb", "Front lobe of the cerebrum; controls voluntary movement, planning, personality and speech (Broca area).", "لوب پیشانی", "cn", "body", []],
["ganglion", "GANG-glee-on", "Cluster of nerve cell bodies outside the CNS; plural ganglia (gangli/o = ganglion).", "عقده عصبی", "pn", "body", []],
["ganglionic", "gang-glee-ON-ik", "Pertaining to a ganglion.", "مربوط به عقده عصبی", "pn", "body", []],
["generalized anxiety disorder", "JEN-er-al-ized ang-ZYE-eh-tee dis-OR-der", "Constant, excessive worry about everyday things that lasts for months.", "اختلال اضطراب فراگیر", "ps", "psy", ["GAD"]],
["Glasgow Coma Scale", "GLAS-goh KOH-mah skayl", "Score from 3 to 15 for level of consciousness based on eye opening, verbal response and motor response.", "مقیاس کمای گلاسگو", "tx", "lab", ["GCS"]],
["glioblastoma", "glye-oh-blas-TOH-mah", "Most malignant, fast-growing type of glioma.", "گلیوبلاستوما", "ds", "dz", []],
["glioma", "glye-OH-mah", "Tumor of the glial (supporting) cells of the brain.", "گلیوما", "ds", "dz", []],
["gray matter", "gray MAT-er", "Nerve tissue made mostly of cell bodies; forms the cerebral cortex and the H-shaped center of the spinal cord.", "ماده خاکستری", "cn", "body", []],
["Guillain-Barré syndrome", "gee-YAN bah-RAY SIN-drohm", "Autoimmune attack on peripheral nerves, often after an infection, causing rising weakness and paralysis.", "سندروم گیلن-باره", "ds", "dz", []],
["gyrus", "JYE-rus", "A raised fold (convolution) on the surface of the cerebrum; plural gyri.", "شکنج", "cn", "body", []],
["hallucination", "hah-loo-sih-NAY-shun", "Seeing, hearing or feeling something that is not really there.", "توهم", "ps", "sx", []],
["hematoma", "hee-mah-TOH-mah", "Collection of blood in a tissue or space (hemat/o = blood, -oma = mass).", "هماتوم (لخته خون)", "ds", "dz", []],
["hemiparesis", "hem-ee-pah-REE-sis", "Weakness or partial paralysis of one side of the body (-paresis = partial paralysis).", "ضعف نیمه بدن (همی‌پارزی)", "lx", "sx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- = half, -plegia = paralysis).", "فلج نیمه بدن (همی‌پلژی)", "lx", "sx", []],
["hemorrhage", "HEM-or-ij", "Bleeding; profuse escape of blood from a vessel.", "خونریزی", "ds", "dz", []],
["herpes zoster", "HER-peez ZOS-ter", "Shingles; painful blistering rash along a dermatome from reactivation of the chickenpox virus in a nerve.", "زونا (هرپس زوستر)", "ds", "dz", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "Steady, balanced internal state of the body, kept by the nervous and endocrine systems.", "هم‌ایستایی", "pn", "phys", []],
["Huntington chorea", "HUN-ting-ton koh-REE-ah", "Inherited degenerative disease with jerky involuntary movements (chorea) and dementia.", "کره هانتینگتون", "ds", "dz", []],
["hydrocephalus", "hye-droh-SEF-ah-lus", "Buildup of cerebrospinal fluid in the ventricles, enlarging the head in infants (hydr/o = water, cephal/o = head).", "هیدروسفالی (آب‌آوردگی مغز)", "ds", "dz", []],
["hyperesthesia", "hye-per-es-THEE-zee-ah", "Increased sensitivity to touch or other stimuli.", "حساسیت بیش از حد حسی", "ds", "sx", []],
["hypnotic", "hip-NOT-ik", "Drug that induces sleep (hypn/o = sleep).", "داروی خواب‌آور", "tx", "tx", []],
["hypochondriasis", "hye-poh-kon-DRYE-ah-sis", "Excessive worry about having a serious illness; illness anxiety disorder.", "خودبیمارانگاری", "ps", "psy", []],
["hypothalamus", "hye-poh-THAL-ah-mus", "Region below the thalamus that controls body temperature, hunger, thirst, sleep and the pituitary gland.", "هیپوتالاموس", "cn", "body", []],
["impulse", "IM-puls", "Electrical signal that travels along a neuron.", "تکانه عصبی", "pn", "phys", []],
["infarct", "IN-farkt", "Area of dead tissue caused by loss of blood supply.", "انفارکت (بافت مرده)", "ds", "dz", []],
["insomnia", "in-SOM-nee-ah", "Inability to fall asleep or stay asleep (in- = not, somn/o = sleep).", "بی‌خوابی", "ds", "sx", []],
["interneuron", "in-ter-NOO-ron", "Neuron inside the CNS that connects sensory and motor neurons.", "نورون رابط", "pn", "body", []],
["intracranial", "in-trah-KRAY-nee-al", "Within the skull (intra- = within, crani/o = skull).", "داخل جمجمه", "cn", "body", ["ICP"]],
["ischemia", "is-KEE-mee-ah", "Lack of blood supply to a tissue (isch/o = hold back, -emia = blood).", "کم‌خونی موضعی (ایسکمی)", "ds", "sx", []],
["laminectomy", "lam-ih-NEK-toh-mee", "Removal of the lamina of a vertebra to relieve pressure on the spinal cord or nerve roots.", "برداشتن تیغه مهره (لامینکتومی)", "tx", "tx", []],
["lethargy", "LETH-ar-jee", "Abnormal drowsiness, sluggishness and lack of energy.", "خواب‌آلودگی و رخوت", "ds", "sx", []],
["level of consciousness", "LEV-el ov KON-shus-nes", "Degree of alertness and awareness of a person.", "سطح هوشیاری", "tx", "lab", ["LOC"]],
["limbic system", "LIM-bik SIS-tem", "Group of brain structures involved in emotion, behavior and memory.", "دستگاه لیمبیک", "cn", "phys", []],
["lumbar puncture", "LUM-bar PUNK-chur", "Inserting a needle between lumbar vertebrae (usually L3–L4) into the subarachnoid space to remove CSF; spinal tap.", "کشیدن مایع نخاع (پونکسیون کمری)", "tx", "lab", ["LP"]],
["magnetic resonance angiography", "mag-NET-ik REZ-oh-nans an-jee-OG-rah-fee", "MRI study of blood vessels, such as those of the brain.", "آنژیوگرافی با MRI", "tx", "lab", ["MRA"]],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a magnetic field and radio waves; shows soft tissue of the brain and spinal cord in detail.", "تصویربرداری تشدید مغناطیسی (MRI)", "tx", "lab", ["MRI"]],
["mania", "MAY-nee-ah", "State of excessive excitement, elevated mood, rapid speech and little need for sleep.", "شیدایی (مانیا)", "ps", "sx", []],
["medulla oblongata", "meh-DUL-ah ob-long-GAH-tah", "Lowest part of the brainstem, continuous with the spinal cord; controls breathing, heartbeat and blood pressure.", "بصل‌النخاع", "cn", "body", []],
["meningeal", "meh-NIN-jee-al", "Pertaining to the meninges.", "مننژی", "cn", "body", []],
["meninges", "meh-NIN-jeez", "Three protective membranes around the brain and spinal cord: dura mater, arachnoid and pia mater (mening/o = meninges).", "پرده‌های مغز (مننژ)", "cn", "body", []],
["meningioma", "meh-nin-jee-OH-mah", "Usually benign, slow-growing tumor of the meninges.", "مننژیوما", "ds", "dz", []],
["meningitis", "men-in-JYE-tis", "Inflammation of the meninges, the membranes covering the brain and spinal cord (mening/o = meninges).", "التهاب پرده‌های مغز (مننژیت)", "lx", "dz", []],
["meningocele", "meh-NING-goh-seel", "Protrusion of the meninges through a defect in the skull or spine (-cele = hernia).", "مننگوسل (فتق پرده‌ها)", "ds", "dz", []],
["mental health", "MEN-tal helth", "State of emotional and psychological well-being (ment/o = mind).", "سلامت روان", "ps", "phys", []],
["midbrain", "MID-brayn", "Upper part of the brainstem; contains reflex centers for vision and hearing.", "مغز میانی", "cn", "body", []],
["migraine", "MYE-grayn", "Severe, recurring headache, often one-sided, with nausea and sensitivity to light; may begin with an aura.", "میگرن", "ds", "dz", []],
["monoplegia", "mon-oh-PLEE-jee-ah", "Paralysis of one limb (mono- = one).", "فلج یک اندام", "ds", "sx", []],
["mood stabilizer", "mood STAY-bih-lye-zer", "Drug that evens out mood swings in bipolar disorder, such as lithium.", "تثبیت‌کننده خلق", "ps", "tx", []],
["motor", "MOH-tor", "Pertaining to movement; motor nerves carry commands to muscles and glands.", "حرکتی", "pn", "phys", []],
["multiple sclerosis", "MUL-tih-pul skleh-ROH-sis", "Disease in which the myelin sheath is destroyed and replaced by hard plaques, causing weakness, numbness and vision problems.", "مولتیپل اسکلروزیس (ام‌اس)", "ds", "dz", ["MS"]],
["muscle relaxant", "MUS-el ree-LAK-sant", "Drug that relieves muscle spasm and stiffness.", "شل‌کننده عضلانی", "tx", "tx", []],
["myasthenia gravis", "mye-as-THEE-nee-ah GRAV-is", "Autoimmune disease at the neuromuscular junction causing muscle weakness and fatigue, often of the eyelids (my/o = muscle, -asthenia = weakness).", "میاستنی گراویس", "ds", "dz", ["MG"]],
["myelin sheath", "MYE-eh-lin sheeth", "Fatty white covering around many axons that insulates them and speeds up impulses.", "غلاف میلین", "pn", "body", []],
["myelitis", "mye-eh-LYE-tis", "Inflammation of the spinal cord (myel/o = spinal cord).", "التهاب نخاع (میلیت)", "lx", "dz", []],
["myelography", "mye-eh-LOG-rah-fee", "X-ray of the spinal cord after injecting contrast into the subarachnoid space (myel/o = spinal cord).", "میلوگرافی", "tx", "lab", []],
["myelomeningocele", "mye-eh-loh-meh-NING-goh-seel", "Protrusion of the spinal cord and meninges through a spinal defect; severe spina bifida.", "میلومننگوسل", "ds", "dz", []],
["narcolepsy", "NAR-koh-lep-see", "Sleep disorder with sudden, uncontrollable attacks of sleep during the day (narc/o = stupor, -lepsy = seizure).", "حمله خواب (نارکولپسی)", "ds", "dz", []],
["narcotic", "nar-KOT-ik", "Strong pain-relieving drug that can cause stupor and dependence, such as morphine (narc/o = stupor).", "داروی مخدر", "tx", "tx", []],
["nerve", "nerv", "A bundle of neuron fibers (axons) outside the CNS that carries impulses to or from the brain and spinal cord.", "عصب", "lx", "body", []],
["nerve conduction study", "nerv kon-DUK-shun STUD-ee", "Test that measures how fast impulses travel along a nerve.", "مطالعه هدایت عصب", "tx", "lab", ["NCS"]],
["nerve root", "nerv root", "The part of a spinal nerve where it joins the spinal cord (radicul/o = nerve root).", "ریشه عصب", "pn", "body", []],
["nervous system", "NER-vus SIS-tem", "The brain, spinal cord and nerves; it receives information, processes it and directs the activity of every other body system.", "دستگاه عصبی", "lx", "body", []],
["neural", "NOO-ral", "Pertaining to a nerve or the nervous system (neur/o = nerve, -al = pertaining to).", "عصبی", "lx", "body", []],
["neuralgia", "noo-RAL-jee-ah", "Sharp pain along the course of a nerve (neur/o = nerve, -algia = pain).", "درد عصب (نورالژی)", "lx", "sx", []],
["neurectomy", "noo-REK-toh-mee", "Surgical removal of a nerve or part of a nerve.", "برداشتن عصب", "tx", "tx", []],
["neuritis", "noo-RYE-tis", "Inflammation of a nerve (neur/o = nerve, -itis = inflammation).", "التهاب عصب (نوریت)", "lx", "dz", []],
["neuroglia", "noo-ROG-lee-ah", "Supporting cells of the nervous system that protect and nourish neurons; also called glial cells (gli/o = glue).", "سلول‌های پشتیبان عصبی (نوروگلیا)", "lx", "body", []],
["neuroleptic", "noo-roh-LEP-tik", "Antipsychotic drug, such as haloperidol.", "نورولپتیک", "ps", "tx", []],
["neuroleptic malignant syndrome", "noo-roh-LEP-tik mah-LIG-nant SIN-drohm", "Rare, life-threatening reaction to antipsychotic drugs with high fever, muscle rigidity and altered consciousness.", "سندروم نورولپتیک بدخیم", "ps", "dz", ["NMS"]],
["neurologic", "noo-roh-LOJ-ik", "Pertaining to neurology or the nervous system; a neuro check assesses nervous function.", "نورولوژیک", "lx", "phys", []],
["neurological examination", "noo-roh-LOJ-ih-kal eg-zam-ih-NAY-shun", "Examination of mental status, cranial nerves, reflexes, strength, sensation and coordination.", "معاینه عصبی", "tx", "lab", []],
["neurologist", "noo-ROL-oh-jist", "Physician who specializes in disorders of the nervous system; does not perform surgery.", "متخصص مغز و اعصاب (نورولوژیست)", "lx", "field", []],
["neurology", "noo-ROL-oh-jee", "Branch of medicine that studies and treats disorders of the nervous system (neur/o = nerve, -logy = study of).", "عصب‌شناسی (نورولوژی)", "lx", "field", []],
["neurolysis", "noo-ROL-ih-sis", "Destruction or loosening of a nerve (-lysis = destruction, loosening).", "آزادسازی یا تخریب عصب", "tx", "tx", []],
["neuromuscular", "noo-roh-MUS-kyoo-lar", "Pertaining to nerves and muscles; the neuromuscular junction is where a motor neuron meets a muscle fiber.", "عصبی-عضلانی", "pn", "phys", []],
["neuron", "NOO-ron", "The basic cell of the nervous system; it carries electrical impulses (neur/o = nerve).", "نورون (یاخته عصبی)", "lx", "body", []],
["neuropathy", "noo-ROP-ah-thee", "Any disease of the nerves, often with numbness, tingling and weakness (-pathy = disease).", "بیماری عصب (نوروپاتی)", "lx", "dz", []],
["neuroplasty", "NOO-roh-plas-tee", "Surgical repair of a nerve (-plasty = surgical repair).", "ترمیم عصب", "tx", "tx", []],
["neurorrhaphy", "noo-ROR-ah-fee", "Suturing of a severed nerve (-rrhaphy = suture).", "بخیه عصب", "tx", "tx", []],
["neurosis", "noo-ROH-sis", "Older term for an emotional disorder with anxiety but without loss of contact with reality.", "روان‌رنجوری", "ps", "psy", []],
["neurosurgeon", "noo-roh-SER-jun", "Surgeon who operates on the brain, spinal cord and nerves.", "جراح مغز و اعصاب", "lx", "field", []],
["neurosurgery", "noo-roh-SER-jer-ee", "Surgery of the nervous system.", "جراحی مغز و اعصاب", "lx", "field", []],
["neurotransmitter", "noo-roh-TRANS-mit-er", "Chemical released at a synapse that carries the impulse to the next cell, such as acetylcholine or dopamine.", "ناقل عصبی", "pn", "phys", []],
["obsessive-compulsive disorder", "ob-SES-iv kom-PUL-siv dis-OR-der", "Anxiety disorder with recurring unwanted thoughts (obsessions) and repeated actions (compulsions).", "اختلال وسواس فکری-عملی", "ps", "psy", ["OCD"]],
["occipital lobe", "ok-SIP-ih-tal lohb", "Back lobe of the cerebrum; controls vision and visual interpretation (reading).", "لوب پس‌سری", "cn", "body", []],
["occupational therapy", "ok-yoo-PAY-shun-al THAIR-ah-pee", "Therapy that helps patients relearn activities of daily living.", "کاردرمانی", "tx", "tx", ["OT"]],
["optic nerve", "OP-tik nerv", "Second cranial nerve; carries vision from the eye to the brain.", "عصب بینایی", "pn", "body", []],
["panic disorder", "PAN-ik dis-OR-der", "Repeated sudden attacks of intense fear with pounding heart, shortness of breath and chest pain.", "اختلال هراس (پانیک)", "ps", "psy", []],
["paralysis", "pah-RAL-ih-sis", "Loss of muscle function and movement in a part of the body (-plegia = paralysis).", "فلج", "ds", "sx", []],
["paranoia", "pair-ah-NOY-ah", "Mental state with unfounded suspicion and a feeling of being threatened or persecuted.", "بدگمانی (پارانویا)", "ps", "sx", []],
["paraplegia", "pair-ah-PLEE-jee-ah", "Paralysis of both legs and the lower part of the body, usually from spinal cord injury.", "فلج دو اندام تحتانی (پاراپلژی)", "ds", "sx", []],
["parasympathetic nervous system", "pair-ah-sim-pah-THET-ik NER-vus SIS-tem", "Division of the ANS that calms the body and restores energy: 'rest and digest'.", "دستگاه پاراسمپاتیک", "pn", "phys", []],
["paresthesia", "pair-es-THEE-zee-ah", "Abnormal sensation such as numbness, tingling or 'pins and needles' (para- = abnormal).", "گزگز و مورمور (پارستزی)", "ds", "sx", []],
["parietal lobe", "pah-RYE-eh-tal lohb", "Upper middle lobe of the cerebrum; receives touch, pain and temperature sensations.", "لوب آهیانه", "cn", "body", []],
["Parkinson disease", "PAR-kin-son dih-ZEEZ", "Progressive disease from loss of dopamine, causing tremor, rigidity, slow movement and a shuffling gait.", "بیماری پارکینسون", "ds", "dz", ["PD"]],
["peripheral nervous system", "peh-RIF-er-al NER-vus SIS-tem", "All the nerves outside the brain and spinal cord: 12 pairs of cranial nerves and 31 pairs of spinal nerves.", "دستگاه عصبی محیطی", "lx", "body", ["PNS"]],
["personality disorder", "per-soh-NAL-ih-tee dis-OR-der", "Long-lasting, inflexible patterns of behavior and thinking that cause problems in relationships and work.", "اختلال شخصیت", "ps", "psy", []],
["phobia", "FOH-bee-ah", "Extreme, persistent, irrational fear of a specific object or situation.", "هراس (فوبیا)", "ps", "psy", []],
["physical therapy", "FIZ-ih-kal THAIR-ah-pee", "Treatment with exercise and movement to restore strength and function.", "فیزیوتراپی", "tx", "tx", ["PT"]],
["pia mater", "PEE-ah MAY-ter", "Delicate inner layer of the meninges that clings to the brain and spinal cord ('soft mother').", "نرم‌شامه", "cn", "body", []],
["plexus", "PLEK-sus", "Network of interlacing nerves, such as the brachial or lumbosacral plexus.", "شبکه عصبی", "pn", "body", []],
["poliomyelitis", "poh-lee-oh-mye-eh-LYE-tis", "Viral inflammation of the gray matter of the spinal cord that may cause paralysis (poli/o = gray).", "فلج اطفال (پولیو)", "ds", "dz", []],
["polyneuritis", "pol-ee-noo-RYE-tis", "Inflammation of many nerves at once (poly- = many).", "التهاب چند عصب", "pn", "dz", []],
["pons", "ponz", "Part of the brainstem between the midbrain and medulla; a bridge connecting parts of the brain (pont/o = pons).", "پل مغزی", "cn", "body", []],
["positron emission tomography", "POZ-ih-tron ee-MISH-un toh-MOG-rah-fee", "Nuclear imaging with a radioactive tracer that shows brain activity and metabolism.", "توموگرافی با نشر پوزیترون (PET)", "tx", "lab", ["PET"]],
["posttraumatic stress disorder", "post-traw-MAT-ik stres dis-OR-der", "Anxiety, flashbacks and nightmares after a terrifying event.", "اختلال استرس پس از سانحه", "ps", "psy", ["PTSD"]],
["psychiatric", "sye-kee-AT-rik", "Pertaining to psychiatry or to mental disorders.", "روان‌پزشکی، روانی", "ps", "psy", []],
["psychiatrist", "sye-KYE-ah-trist", "Physician who treats mental disorders and may prescribe medication.", "روان‌پزشک", "lx", "field", []],
["psychiatry", "sye-KYE-ah-tree", "Branch of medicine that diagnoses and treats mental disorders (psych/o = mind, iatr/o = treatment).", "روان‌پزشکی", "lx", "field", []],
["psychogenic", "sye-koh-JEN-ik", "Originating in the mind (psych/o = mind, -genic = producing).", "روان‌زاد", "lx", "psy", []],
["psychologist", "sye-KOL-oh-jist", "Specialist (not a physician) who studies behavior and treats mental disorders with psychotherapy and testing.", "روان‌شناس", "lx", "field", []],
["psychology", "sye-KOL-oh-jee", "The study of the mind, behavior and mental processes.", "روان‌شناسی", "lx", "field", []],
["psychosis", "sye-KOH-sis", "Serious mental state with loss of contact with reality, often with delusions and hallucinations.", "روان‌پریشی (سایکوز)", "ps", "psy", []],
["psychotherapy", "sye-koh-THAIR-ah-pee", "Treatment of mental disorders by talking with a trained therapist.", "روان‌درمانی", "ps", "tx", []],
["quadriplegia", "kwah-drih-PLEE-jee-ah", "Paralysis of all four limbs; also called tetraplegia (quadri- = four).", "فلج چهار اندام (کوادری‌پلژی)", "ds", "sx", []],
["radiculitis", "rah-dik-yoo-LYE-tis", "Inflammation of a spinal nerve root.", "التهاب ریشه عصب", "pn", "dz", []],
["radiculopathy", "rah-dik-yoo-LOP-ah-thee", "Disease of a spinal nerve root, causing pain, numbness or weakness (radicul/o = nerve root).", "بیماری ریشه عصب", "ds", "dz", []],
["receptor", "ree-SEP-tor", "Sensory nerve ending that detects a stimulus such as touch, heat or pain.", "گیرنده", "pn", "body", []],
["reflex", "REE-fleks", "Simple, rapid, automatic response to a stimulus that needs few cells, such as the knee-jerk reflex.", "بازتاب (رفلکس)", "pn", "phys", []],
["reflex arc", "REE-fleks ark", "Pathway of a reflex: receptor, sensory neuron, spinal cord, motor neuron and effector.", "قوس بازتاب", "pn", "phys", []],
["rehabilitation", "ree-hah-bil-ih-TAY-shun", "Therapy program that helps a patient regain function after illness or injury.", "توان‌بخشی", "tx", "tx", []],
["Reye syndrome", "rye SIN-drohm", "Rare brain and liver disorder in children, linked to aspirin use during a viral illness.", "سندروم ری", "ds", "dz", []],
["rhizotomy", "rye-ZOT-oh-mee", "Cutting a spinal nerve root to relieve severe pain or spasticity (rhiz/o = root).", "قطع ریشه عصب", "tx", "tx", []],
["schizophrenia", "skiz-oh-FREE-nee-ah", "Psychotic disorder with delusions, hallucinations, disorganized thinking and withdrawal (schiz/o = split, phren/o = mind).", "اسکیزوفرنی", "ps", "psy", []],
["Schwann cell", "shvahn sel", "Cell that forms the myelin sheath around axons in the peripheral nervous system.", "سلول شوان", "pn", "body", []],
["sciatic nerve", "sye-AT-ik nerv", "Largest nerve of the body; runs from the lower back down the back of the leg.", "عصب سیاتیک", "pn", "body", []],
["sciatica", "sye-AT-ih-kah", "Pain along the sciatic nerve, down the back of the leg, often from a herniated disk.", "سیاتیک (درد عصب سیاتیک)", "ds", "dz", []],
["seasonal affective disorder", "SEE-zon-al af-FEK-tiv dis-OR-der", "Depression that occurs during the dark winter months.", "افسردگی فصلی", "ps", "psy", ["SAD"]],
["sedative", "SED-ah-tiv", "Drug that calms and relaxes; in larger doses may cause sleep.", "داروی آرام‌بخش", "tx", "tx", []],
["seizure", "SEE-zher", "Sudden burst of abnormal electrical activity in the brain that may cause convulsions or loss of awareness.", "تشنج", "ds", "sx", []],
["sensory", "SEN-soh-ree", "Pertaining to sensation; sensory nerves carry information to the CNS.", "حسی", "pn", "phys", []],
["serotonin", "ser-oh-TOH-nin", "Neurotransmitter that affects mood, sleep and appetite; low levels are linked with depression.", "سروتونین", "pn", "phys", []],
["somatic nervous system", "soh-MAT-ik NER-vus SIS-tem", "Part of the PNS that controls voluntary movement of skeletal muscles (somat/o = body).", "دستگاه عصبی پیکری", "pn", "body", ["SNS"]],
["somatic symptom disorder", "soh-MAT-ik SIMP-tom dis-OR-der", "Physical symptoms with excessive worry about them, without a fully explaining medical cause.", "اختلال علائم جسمی", "ps", "psy", ["SSD"]],
["spasticity", "spas-TIS-ih-tee", "Stiff, tight muscles with exaggerated reflexes, from damage to motor neurons.", "اسپاستیسیته (سفتی عضلات)", "ds", "sx", []],
["spina bifida", "SPYE-nah BIF-ih-dah", "Birth defect in which the vertebral column does not close completely around the spinal cord.", "اسپینا بیفیدا (شکاف ستون مهره)", "ds", "dz", []],
["spinal cord", "SPYE-nal kord", "Column of nerve tissue from the medulla to the second lumbar vertebra that carries impulses to and from the brain (myel/o = spinal cord).", "نخاع", "cn", "body", []],
["spinal cord injury", "SPYE-nal kord IN-jer-ee", "Damage to the spinal cord that may cause paraplegia or quadriplegia below the injury.", "آسیب نخاع", "ds", "dz", ["SCI"]],
["spinal fusion", "SPYE-nal FYOO-zhun", "Surgery that joins two or more vertebrae to stabilize the spine.", "جوش دادن مهره‌ها", "tx", "tx", []],
["spinal nerves", "SPYE-nal nervz", "Thirty-one pairs of nerves that arise from the spinal cord: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral and 1 coccygeal.", "اعصاب نخاعی", "pn", "body", []],
["stereotactic radiosurgery", "ster-ee-oh-TAK-tik ray-dee-oh-SER-jer-ee", "Precisely aimed radiation beams that destroy a brain tumor without open surgery.", "پرتوجراحی استریوتاکتیک", "tx", "tx", []],
["stimulant", "STIM-yoo-lant", "Drug that increases alertness and activity, such as those used for ADHD.", "داروی محرک", "tx", "tx", []],
["stimulus", "STIM-yoo-lus", "A change inside or outside the body that starts a nerve impulse; plural stimuli.", "محرک", "pn", "phys", []],
["subarachnoid space", "sub-ah-RAK-noyd spays", "Space below the arachnoid that contains cerebrospinal fluid.", "فضای زیرعنکبوتیه", "cn", "body", []],
["subdural hematoma", "sub-DOO-ral hee-mah-TOH-mah", "Blood collection between the dura mater and the arachnoid, usually from a torn vein.", "هماتوم ساب‌دورال", "ds", "dz", []],
["subdural space", "sub-DOO-ral spays", "Space below the dura mater, between it and the arachnoid.", "فضای زیر سخت‌شامه", "cn", "body", []],
["substance use disorder", "SUB-stans yooz dis-OR-der", "Repeated use of alcohol or drugs despite harm; addiction.", "اختلال مصرف مواد", "ps", "psy", []],
["sulcus", "SUL-kus", "A shallow groove between gyri on the surface of the cerebrum; plural sulci.", "شیار", "cn", "body", []],
["sympathectomy", "sim-pah-THEK-toh-mee", "Cutting part of the sympathetic nerve pathway.", "قطع عصب سمپاتیک", "tx", "tx", []],
["sympathetic nervous system", "sim-pah-THET-ik NER-vus SIS-tem", "Division of the ANS that prepares the body for stress: 'fight or flight'.", "دستگاه سمپاتیک", "pn", "phys", []],
["synapse", "SIN-aps", "Junction between two neurons, or between a neuron and a muscle, where impulses pass by chemicals.", "سیناپس (همایه)", "pn", "phys", []],
["syncope", "SING-koh-pee", "Fainting; brief loss of consciousness from too little blood flow to the brain.", "غش (سنکوپ)", "ds", "sx", []],
["temporal lobe", "TEM-poh-ral lohb", "Side lobe of the cerebrum; controls hearing, smell and understanding of speech (Wernicke area).", "لوب گیجگاهی", "cn", "body", []],
["thalamic", "thah-LAM-ik", "Pertaining to the thalamus.", "تالاموسی", "cn", "body", []],
["thalamus", "THAL-ah-mus", "Relay center in the diencephalon that sends sensory impulses to the cerebral cortex (thalam/o = thalamus).", "تالاموس", "cn", "body", []],
["thrombolytic therapy", "throm-boh-LIT-ik THAIR-ah-pee", "Clot-dissolving drugs (fibrinolytics such as tPA) given soon after an ischemic stroke.", "درمان لخته‌شکن", "tx", "tx", ["tPA"]],
["thrombosis", "throm-BOH-sis", "Formation of a blood clot that blocks a vessel; the most common cause of ischemic stroke.", "لخته‌شدن خون (ترومبوز)", "ds", "dz", []],
["tonic-clonic seizure", "TON-ik KLON-ik SEE-zher", "Generalized seizure with loss of consciousness, body stiffening (tonic) then jerking (clonic); formerly grand mal.", "تشنج تونیک-کلونیک (گرندمال)", "ds", "dz", []],
["transcutaneous electrical nerve stimulation", "trans-kyoo-TAY-nee-us ee-LEK-trih-kal nerv stim-yoo-LAY-shun", "Pain relief with mild electrical currents applied through the skin.", "تحریک الکتریکی عصب از راه پوست (TENS)", "tx", "tx", ["TENS"]],
["transient ischemic attack", "TRAN-see-ent is-KEE-mik ah-TAK", "Temporary interruption of blood flow to the brain with stroke-like symptoms that clear within 24 hours; a warning sign of stroke.", "حمله ایسکمیک گذرا (سکته کوچک)", "ds", "dz", ["TIA"]],
["traumatic brain injury", "traw-MAT-ik brayn IN-jer-ee", "Damage to the brain caused by an external force such as a fall or accident.", "آسیب تروماتیک مغز", "ds", "dz", ["TBI"]],
["tremor", "TREM-or", "Involuntary, rhythmic shaking of a part of the body.", "لرزش (ترمور)", "ds", "sx", []],
["trigeminal nerve", "trye-JEM-ih-nal nerv", "Fifth cranial nerve with three branches; carries sensation from the face and controls chewing.", "عصب سه‌قلو", "pn", "body", []],
["trigeminal neuralgia", "trye-JEM-ih-nal noo-RAL-jee-ah", "Severe, stabbing facial pain along the trigeminal nerve; tic douloureux.", "نورالژی سه‌قلو", "ds", "dz", ["TN"]],
["unconscious", "un-KON-shus", "Not awake or aware of the surroundings; not responding to stimuli.", "بیهوش، ناهشیار", "ds", "sx", []],
["vagal", "VAY-gal", "Pertaining to the vagus nerve.", "مربوط به عصب واگ", "pn", "body", []],
["vagotomy", "vay-GOT-oh-mee", "Cutting of the vagus nerve.", "قطع عصب واگ", "tx", "tx", []],
["vagus nerve", "VAY-gus nerv", "Tenth cranial nerve; supplies most organs in the chest and abdomen (vag/o = vagus).", "عصب واگ", "pn", "body", []],
["ventricle", "VEN-trih-kul", "One of four cavities in the brain that make and hold cerebrospinal fluid (ventricul/o = ventricle).", "بطن مغز", "cn", "body", []],
["ventriculoperitoneal shunt", "ven-trik-yoo-loh-pair-ih-toh-NEE-al shunt", "Tube that drains extra CSF from a brain ventricle into the abdomen to treat hydrocephalus.", "شانت بطنی-صفاقی", "tx", "tx", ["VP"]],
["vertigo", "VER-tih-goh", "Sensation that the room or oneself is spinning; dizziness.", "سرگیجه (ورتیگو)", "ds", "sx", []],
["Wernicke area", "VER-nih-kee AIR-ee-ah", "Region of the temporal lobe that controls the understanding of speech.", "ناحیه ورنیکه", "cn", "phys", []],
["white matter", "wyte MAT-er", "Nerve tissue made of myelinated axons; carries impulses between parts of the CNS.", "ماده سفید", "cn", "body", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و پنج فصل PDF پیوست (Cohen، Gylys، Fremgen، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان عصب (همه واژه‌ها) • cn مغز و نخاع • pn اعصاب محیطی و خودکار • ds نشانه‌ها و بیماری‌ها • ps سلامت روان • tx تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['af-', ['af'], 'toward', 'به سوی', 'pn'],
    ['anti-', ['anti'], 'against', 'ضد', 'tx'],
    ['de-', ['de'], 'down, loss, removal', 'کاهش، از دست دادن', 'ds'],
    ['dys-', ['dys'], 'difficult, painful, abnormal', 'دشوار، نابه‌هنجار', 'lx'],
    ['ef-', ['ef'], 'away from', 'دور از', 'pn'],
    ['epi-', ['epi'], 'above, upon', 'روی، بالای', 'ds'],
    ['hemi-', ['hemi'], 'half, one side', 'نیم', 'lx'],
    ['hyper-', ['hyper'], 'excessive, above normal', 'بیش از حد', '*'],
    ['hypo-', ['hypo', 'hyp'], 'below, deficient', 'زیر، کمتر از حد', '*'],
    ['in-', ['in'], 'not; in', 'نا-، درون', 'ds'],
    ['inter-', ['inter'], 'between', 'بین', 'pn'],
    ['intra-', ['intra'], 'within', 'درون', 'cn'],
    ['mono-', ['mono'], 'one', 'یک', 'ds'],
    ['para-', ['para', 'par'], 'beside; abnormal', 'کنار، نابه‌هنجار', 'ds'],
    ['poly-', ['poly'], 'many', 'چند', 'ds'],
    ['quadri-, tetra-', ['quadri', 'tetra'], 'four', 'چهار', 'ds'],
    ['sub-', ['sub'], 'below, under', 'زیر', 'cn'],
    ['trans-', ['trans'], 'across, through', 'از میان', 'tx'],
    // ریشه‌ها: عصب و نخاع
    ['neur/o, neur/i', ['neur'], 'nerve, nervous system', 'عصب', 'lx'],
    ['gli/o', ['gli'], 'neuroglia (glue)', 'سلول پشتیبان عصبی (چسب)', 'lx'],
    ['gangli/o, ganglion/o', ['ganglion', 'gangli'], 'ganglion', 'عقده عصبی', 'pn'],
    ['mening/o, meningi/o', ['meningi', 'mening'], 'meninges', 'پرده‌های مغز', 'lx'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', 'نخاع؛ مغز استخوان', 'lx'],
    ['radicul/o, rhiz/o', ['radicul', 'rhiz'], 'nerve root', 'ریشه عصب', 'pn'],
    ['spin/o', ['spin'], 'spine', 'ستون مهره، نخاع', 'cn'],
    ['vag/o', ['vag'], 'vagus nerve', 'عصب واگ', 'pn'],
    ['dendr/o', ['dendr'], 'tree', 'درخت', 'pn'],
    ['somat/o', ['somat'], 'body', 'بدن', 'pn'],
    // ریشه‌ها: مغز
    ['encephal/o', ['encephal'], 'brain', 'مغز', 'lx'],
    ['cerebr/o', ['cerebr'], 'cerebrum, brain', 'مخ، مغز', 'lx'],
    ['cerebell/o', ['cerebell'], 'cerebellum', 'مخچه', 'cn'],
    ['cortic/o', ['cortic'], 'cortex (outer layer)', 'قشر', 'cn'],
    ['thalam/o', ['thalam'], 'thalamus', 'تالاموس', 'cn'],
    ['pont/o', ['pont'], 'pons', 'پل مغزی', 'cn'],
    ['medull/o', ['medull'], 'medulla oblongata', 'بصل‌النخاع', 'cn'],
    ['ventricul/o', ['ventricul'], 'ventricle (cavity)', 'بطن', 'cn'],
    ['crani/o', ['crani'], 'cranium (skull)', 'جمجمه', 'cn'],
    ['cephal/o', ['cephal'], 'head', 'سر', 'ds'],
    ['dur/o', ['dur'], 'dura mater', 'سخت‌شامه', 'cn'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'ds'],
    ['vascul/o', ['vascul'], 'blood vessel', 'رگ خونی', 'ds'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', 'ds'],
    ['isch/o', ['isch'], 'to hold back', 'جلوگیری، کمبود', 'ds'],
    ['thromb/o', ['thromb'], 'blood clot', 'لخته خون', 'ds'],
    ['poli/o', ['poli'], 'gray (matter)', 'خاکستری', 'ds'],
    // ریشه‌ها: حس، حرکت و ذهن
    ['esthesi/o', ['esthesi', 'esthes', 'esthet'], 'feeling, sensation', 'حس', 'lx'],
    ['alges/o, algesi/o', ['algesi', 'alges'], 'pain', 'درد', 'ds'],
    ['kinesi/o', ['kinesi'], 'movement', 'حرکت', 'ds'],
    ['tax/o', ['tax'], 'order, coordination', 'نظم، هماهنگی', 'ds'],
    ['gnos/o', ['gnos'], 'knowledge, recognition', 'شناختن', 'ds'],
    ['phas/o', ['phas'], 'speech', 'گفتار', 'ds'],
    ['my/o', ['my'], 'muscle', 'عضله', 'ds'],
    ['muscul/o', ['muscul'], 'muscle', 'عضله', 'pn'],
    ['arthr/o', ['arthr'], 'joint; articulation (of speech)', 'مفصل؛ تلفظ', 'ds'],
    ['lamin/o', ['lamin'], 'lamina (part of a vertebra)', 'تیغه مهره', 'tx'],
    ['embol/o', ['embol'], 'plug, embolus', 'لخته رونده', 'ds'],
    ['psych/o', ['psych'], 'mind', 'روان، ذهن', 'lx'],
    ['ment/o, phren/o', ['ment', 'phren'], 'mind', 'ذهن', 'ps'],
    ['schiz/o', ['schiz'], 'split', 'شکافته', 'ps'],
    ['somn/o, hypn/o', ['somn', 'hypn'], 'sleep', 'خواب', 'ds'],
    ['narc/o', ['narc'], 'stupor, numbness', 'بی‌حسی، کرختی', 'ds'],
    ['aut/o', ['aut'], 'self', 'خود', 'ps'],
    ['electr/o', ['electr'], 'electricity', 'برق', 'tx'],
    ['cry/o', ['cry'], 'cold', 'سرما', 'tx'],
    ['iatr/o', ['iatr'], 'treatment, physician', 'درمان، پزشک', 'lx'],
    ['dipl/o', ['dipl'], 'double', 'دوتایی', 'ds'],
    ['astr/o', ['astr'], 'star', 'ستاره', 'ds'],
    ['cyt/o', ['cyt'], 'cell', 'سلول', 'ds'],
    ['sympath/o', ['sympath'], 'sympathetic nerves', 'عصب سمپاتیک', 'tx'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -eal, -ous', ['ary', 'eal', 'ial', 'ous', 'ic', 'al', 'ar'], 'pertaining to', 'مربوط به', '*'],
    ['-is, -um, -us, -a, -on', ['is', 'um', 'us', 'on', 'a'], 'noun ending', 'پایان اسم', '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', 'حالت', '*'],
    ['-ist', ['ist'], 'specialist', 'متخصص', 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصص', 'lx'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', 'وضعیت غیرطبیعی', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'lx'],
    ['-algia', ['algia'], 'pain', 'درد', 'lx'],
    ['-genic', ['genic'], 'producing, originating in', 'ایجادشده از', 'lx'],
    ['-plegia', ['plegia'], 'paralysis', 'فلج', 'lx'],
    ['-paresis', ['paresis'], 'partial paralysis, weakness', 'فلج ناقص، ضعف', 'lx'],
    ['-phasia', ['phasia'], 'speech', 'گفتار', 'lx'],
    ['-lexia', ['lexia'], 'reading, words', 'خواندن', 'ds'],
    ['-esthesia', ['esthesia'], 'feeling, sensation', 'حس', 'lx'],
    ['-algesia', ['algesia'], 'sensitivity to pain', 'حس درد', 'ds'],
    ['-asthenia', ['asthenia'], 'weakness', 'ضعف', 'ds'],
    ['-lepsy', ['lepsy'], 'seizure', 'حمله، تشنج', 'ds'],
    ['-mnesia', ['mnesia'], 'memory', 'حافظه', 'ds'],
    ['-phobia', ['phobia'], 'irrational fear', 'ترس شدید', 'ps'],
    ['-mania', ['mania'], 'excited state, obsession', 'شیدایی، وسواس', 'ps'],
    ['-phrenia', ['phrenia'], 'mind', 'ذهن', 'ps'],
    ['-cele', ['cele'], 'hernia, protrusion', 'فتق، بیرون‌زدگی', 'ds'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'ds'],
    ['-opia', ['opia'], 'vision', 'بینایی', 'ds'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'tx'],
    ['-lysis', ['lysis'], 'destruction, loosening', 'تخریب، آزادسازی', 'tx'],
    ['-lytic', ['lytic'], 'breaking down, relieving', 'از بین برنده', 'tx'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت', 'tx'],
    ['-gram', ['gram'], 'record', 'نوشته، ثبت', 'tx'],
    ['-blast', ['blast'], 'immature cell', 'سلول نابالغ', 'ds'],
    ['-ism', ['ism'], 'condition, process', 'حالت', 'ds'],
    ['-therapy', ['therapy'], 'treatment', 'درمان', 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ACh', 'acetylcholine', 'استیل‌کولین', 'pn'],
    ['AD', "Alzheimer disease", 'بیماری آلزایمر', 'ds'],
    ['ADHD', 'attention-deficit/hyperactivity disorder', 'اختلال کم‌توجهی-بیش‌فعالی', 'ps'],
    ['ALS', 'amyotrophic lateral sclerosis', 'اسکلروز جانبی آمیوتروفیک', 'ds'],
    ['ANS', 'autonomic nervous system', 'دستگاه عصبی خودکار', 'pn'],
    ['ASD', 'autism spectrum disorder', 'اختلال طیف اوتیسم', 'ps'],
    ['BPD', 'bipolar disorder', 'اختلال دوقطبی', 'ps'],
    ['C1–C8', 'cervical nerves (or vertebrae) 1 to 8', 'اعصاب گردنی ۱ تا ۸', 'pn'],
    ['c/o', 'complains of', 'شکایت دارد از', 'lx'],
    ['CBT', 'cognitive behavioral therapy', 'درمان شناختی-رفتاری', 'ps'],
    ['CJD', 'Creutzfeldt-Jakob disease', 'بیماری کروتزفلد-جاکوب', 'ds'],
    ['CNS', 'central nervous system', 'دستگاه عصبی مرکزی', 'lx'],
    ['CP', 'cerebral palsy', 'فلج مغزی', 'ds'],
    ['CSF', 'cerebrospinal fluid', 'مایع مغزی-نخاعی', 'cn'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن', 'tx'],
    ['CTE', 'chronic traumatic encephalopathy', 'آنسفالوپاتی تروماتیک مزمن', 'ds'],
    ['CVA', 'cerebrovascular accident (stroke)', 'سکته مغزی', 'ds'],
    ['CVD', 'cerebrovascular disease', 'بیماری عروق مغز', 'ds'],
    ['DA', 'dopamine', 'دوپامین', 'pn'],
    ['DSM', 'Diagnostic and Statistical Manual of Mental Disorders', 'راهنمای تشخیصی و آماری اختلالات روانی', 'ps'],
    ['DTR', 'deep tendon reflex', 'رفلکس عمقی تاندون', 'pn'],
    ['ECT', 'electroconvulsive therapy', 'شوک‌درمانی', 'ps'],
    ['ED', 'emergency department', 'بخش اورژانس', 'tx'],
    ['EEG', 'electroencephalogram, electroencephalography', 'نوار مغز', 'tx'],
    ['EMG', 'electromyography', 'نوار عصب و عضله', 'tx'],
    ['GA', 'general anesthesia', 'بیهوشی عمومی', 'tx'],
    ['GAD', 'generalized anxiety disorder', 'اختلال اضطراب فراگیر', 'ps'],
    ['GCS', 'Glasgow Coma Scale', 'مقیاس کمای گلاسگو', 'tx'],
    ['HA', 'headache', 'سردرد', 'ds'],
    ['ICP', 'intracranial pressure', 'فشار داخل جمجمه', 'cn'],
    ['L1–L5', 'lumbar nerves (or vertebrae) 1 to 5', 'اعصاب کمری ۱ تا ۵', 'pn'],
    ['LMN', 'lower motor neuron', 'نورون حرکتی تحتانی', 'pn'],
    ['LOC', 'level of consciousness; loss of consciousness', 'سطح هوشیاری؛ از دست دادن هوشیاری', 'tx'],
    ['LP', 'lumbar puncture', 'پونکسیون کمری', 'tx'],
    ['MAOI', 'monoamine oxidase inhibitor', 'مهارکننده مونوآمین اکسیداز', 'ps'],
    ['MG', 'myasthenia gravis', 'میاستنی گراویس', 'ds'],
    ['MRA', 'magnetic resonance angiography', 'آنژیوگرافی با MRI', 'tx'],
    ['MRI', 'magnetic resonance imaging', 'تصویربرداری تشدید مغناطیسی', 'tx'],
    ['MS', 'multiple sclerosis', 'مولتیپل اسکلروزیس (ام‌اس)', 'ds'],
    ['MTBI', 'mild traumatic brain injury', 'آسیب خفیف مغزی', 'ds'],
    ['NCS', 'nerve conduction study', 'مطالعه هدایت عصب', 'tx'],
    ['NICU', 'neurologic intensive care unit', 'بخش مراقبت ویژه اعصاب', 'tx'],
    ['NMS', 'neuroleptic malignant syndrome', 'سندروم نورولپتیک بدخیم', 'ps'],
    ['OCD', 'obsessive-compulsive disorder', 'اختلال وسواس فکری-عملی', 'ps'],
    ['OT', 'occupational therapy', 'کاردرمانی', 'tx'],
    ['PD', 'Parkinson disease', 'بیماری پارکینسون', 'ds'],
    ['PET', 'positron emission tomography', 'توموگرافی با نشر پوزیترون', 'tx'],
    ['PNS', 'peripheral nervous system', 'دستگاه عصبی محیطی', 'lx'],
    ['PT', 'physical therapy', 'فیزیوتراپی', 'tx'],
    ['PTSD', 'posttraumatic stress disorder', 'اختلال استرس پس از سانحه', 'ps'],
    ['REM', 'rapid eye movement (sleep)', 'خواب با حرکت سریع چشم', 'cn'],
    ['SAD', 'seasonal affective disorder', 'افسردگی فصلی', 'ps'],
    ['SCI', 'spinal cord injury', 'آسیب نخاع', 'ds'],
    ['SNS', 'somatic nervous system', 'دستگاه عصبی پیکری', 'pn'],
    ['SSD', 'somatic symptom disorder', 'اختلال علائم جسمی', 'ps'],
    ['SSRI', 'selective serotonin reuptake inhibitor', 'مهارکننده انتخابی بازجذب سروتونین', 'ps'],
    ['T1–T12', 'thoracic nerves (or vertebrae) 1 to 12', 'اعصاب سینه‌ای ۱ تا ۱۲', 'pn'],
    ['TBI', 'traumatic brain injury', 'آسیب تروماتیک مغز', 'ds'],
    ['TENS', 'transcutaneous electrical nerve stimulation', 'تحریک الکتریکی عصب از راه پوست', 'tx'],
    ['TIA', 'transient ischemic attack', 'حمله ایسکمیک گذرا', 'ds'],
    ['TN', 'trigeminal neuralgia', 'نورالژی سه‌قلو', 'ds'],
    ['tPA', 'tissue plasminogen activator (clot-dissolving drug)', 'داروی لخته‌شکن', 'tx'],
    ['UMN', 'upper motor neuron', 'نورون حرکتی فوقانی', 'pn'],
    ['VEP', 'visual evoked potentials', 'پتانسیل برانگیخته بینایی', 'tx'],
    ['VP', 'ventriculoperitoneal (shunt)', 'بطنی-صفاقی (شانت)', 'tx'],
    ['y/o', 'years old', 'ساله', 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🧠', name: 'ساختارهای دستگاه عصبی' },
    { id: 'phys', icon: '⚡', name: 'کار عصب و فیزیولوژی' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩻', name: 'بیماری‌های عصبی' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها' },
    { id: 'psy', icon: '💭', name: 'اختلال‌های روانی' },
    { id: 'lab', icon: '🧪', name: 'تشخیص و معاینه' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
  ];
  const main = { phys: 'Anatomy_and_Physiology', psy: 'Pathology_and_Disorders' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'cn', 'pn', 'ds', 'ps', 'tx'], base: 'lx' };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور واژه‌نامه: تجزیه‌گر واژه، جست‌وجو و مولد سؤال‌ها (مشترک همه اپ‌ها)
 * داده‌ها از EA.TERMS_RAW (data-terms.js) و EA.LEX_DATA (lexdata.js) هر اپ می‌آیند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* داده‌ها (ریشه‌ها، اختصارها، دسته‌ها، فهرست دنیاها) از lexdata.js هر اپ می‌آیند */
  const D = EA.LEX_DATA;

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = D.roots;
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = D.abbr;
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Pharmacology_and_Treatment: 'درمان، دارو و جراحی'
  };
  /* دسته ریز هر واژه در داده آمده (k)؛ دسته اصلی (c) از روی آن ساخته می‌شود */
  const CATS = D.cats;
  /* هر اپ می‌تواند دسته‌های ریز تازه بسازد و در D.main به یکی از چهار دسته اصلی وصلشان کند */
  const MAIN = Object.assign({ body: 'Anatomy_and_Physiology', cell: 'Anatomy_and_Physiology', field: 'Anatomy_and_Physiology', dz: 'Pathology_and_Disorders', sx: 'Pathology_and_Disorders', lab: 'Laboratory_and_Diagnostics', tx: 'Pharmacology_and_Treatment' }, D.main || {});
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
  const WORLDS = D.worlds, BASE = D.base;
  /* دنیای پایه (BASE) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
  const rootsOf = w => (w === BASE ? ROOTS : ROOTS.filter(r => inW(r, w)));
  WORLDS.forEach(W => {
    const w = W === BASE ? null : W;
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
/* نورو — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: صورتی مغز، بنفش عصب، کهربایی جریان عصبی، کرم استخوان جمجمه و ستون مهره.
 * لوب‌های مغز همیشه با یک رنگ ثابت کشیده می‌شوند (پیشانی نارنجی، آهیانه بنفش، گیجگاهی آبی، پس‌سری سبز) تا در همه شکل‌ها آشنا بمانند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    brain: '#f8c3cf', brain2: '#eb9bb0', brainLine: '#c9677f', gray: '#c9b8a8', white: '#f4ede4',
    nerve: '#f2c94c', nerveLine: '#c99a1d', myelin: '#dfe9f5', myelinLine: '#8aa3c2', cell: '#b7a3ea', cellLine: '#6c4fd0',
    fr: '#f7a46b', pa: '#b79be6', te: '#7fb2e5', oc: '#8fd18a', cb: '#d98aa0', stem: '#e8b48a',
    csf: '#cfe9fb', csfLine: '#5e9fc4', dura: '#9cb3c9', bone: '#f3e4c4', bone2: '#e3cc9c', boneLine: '#b8975f',
    skin: '#f6d2b8', skinLine: '#d9a988', art: '#d9443a', blood: '#b3262e', vein: '#4f7fd1', spark: '#ffc800'
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
  const title = s => f(180, 19, s, { size: 11.5, fill: INK, w: 800 });
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const curve = (id, d, c, w, dash) => `<path d="${d}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const linear = (id, c1, c2, vertical) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const radial = (id, c1, c2) => `<radialGradient id="${id}" cx="50%" cy="50%" r="55%" fx="38%" fy="34%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  const shadow = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".16"/></filter>`;
  /** خط راهنما با نقطه سر */
  const pin = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || '#5b6b73'}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="${c || '#c2413a'}" stroke-width="1.4"/>`;
  function rng(seed) { let s = seed || 7; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  /** کارت رنگی با عنوان دوزبانه */
  const card = (x, y, w, h, bg, ic, en, fa, sub) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${bg}"/>${ic ? t(x + w / 2, y + 28, ic, { size: 22 }) : ''}${t(x + w / 2, y + (ic ? 50 : 24), en, { size: 10.5, w: 900 })}${f(x + w / 2, y + (ic ? 64 : 38), fa, { size: 9.5, fill: INK, w: 700 })}${sub ? f(x + w / 2, y + (ic ? 77 : 51), sub, { size: 8.5 }) : ''}`;

  /* ---------- بدن مانکن (نمای روبه‌رو) ----------
   * outline(cx, top, s) ← مسیر بدن ساده؛ s مقیاس (۱ = قد حدود ۲۶۰) */
  function mannequin(cx, top, s, o) {
    const p = o || {}; const k = s || 1;
    const X = d => (cx + d * k).toFixed(1), Y = d => (top + d * k).toFixed(1);
    const head = `<ellipse cx="${X(0)}" cy="${Y(22)}" rx="${(17 * k).toFixed(1)}" ry="${(21 * k).toFixed(1)}"/>`;
    const body = `<path d="M${X(-8)} ${Y(40)} L${X(-8)} ${Y(48)} C${X(-26)} ${Y(50)} ${X(-40)} ${Y(52)} ${X(-44)} ${Y(64)} L${X(-52)} ${Y(128)} L${X(-56)} ${Y(158)} C${X(-57)} ${Y(166)} ${X(-48)} ${Y(167)} ${X(-47)} ${Y(158)} L${X(-40)} ${Y(122)} L${X(-34)} ${Y(86)} L${X(-30)} ${Y(124)} C${X(-34)} ${Y(140)} ${X(-34)} ${Y(150)} ${X(-30)} ${Y(162)} L${X(-26)} ${Y(222)} L${X(-26)} ${Y(254)} C${X(-34)} ${Y(258)} ${X(-34)} ${Y(264)} ${X(-22)} ${Y(264)} L${X(-12)} ${Y(264)} L${X(-12)} ${Y(222)} L${X(-4)} ${Y(166)} L${X(0)} ${Y(164)} L${X(4)} ${Y(166)} L${X(12)} ${Y(222)} L${X(12)} ${Y(264)} L${X(22)} ${Y(264)} C${X(34)} ${Y(264)} ${X(34)} ${Y(258)} ${X(26)} ${Y(254)} L${X(26)} ${Y(222)} L${X(30)} ${Y(162)} C${X(34)} ${Y(150)} ${X(34)} ${Y(140)} ${X(30)} ${Y(124)} L${X(34)} ${Y(86)} L${X(40)} ${Y(122)} L${X(47)} ${Y(158)} C${X(48)} ${Y(167)} ${X(57)} ${Y(166)} ${X(56)} ${Y(158)} L${X(52)} ${Y(128)} L${X(44)} ${Y(64)} C${X(40)} ${Y(52)} ${X(26)} ${Y(50)} ${X(8)} ${Y(48)} L${X(8)} ${Y(40)} Z"/>`;
    return `<g fill="${p.fill || C.skin}" stroke="${p.line || C.skinLine}" stroke-width="1.3">${head}${body}</g>`;
  }


  const A = {};

  /* ---------- اجزای پایه دستگاه عصبی ---------- */
  /* مغز از نمای کنار (پیشانی سمت چپ تصویر)؛ مختصات نسبی به مرکز (cx,cy) با مقیاس s */
  const BRAIN_OUT = 'M-104 12 C-114 -38 -72 -80 -8 -82 C54 -84 104 -52 110 -8 C114 16 108 34 94 42 C80 34 60 30 44 36 C30 46 6 52 -20 50 C-50 48 -70 44 -84 34 C-96 28 -102 22 -104 12Z';
  const GYRI = 'M-88 -20 q14 -12 26 0 q10 12 22 0 M-70 -54 q12 -10 24 2 M-30 -66 q10 10 2 24 q-8 14 4 26 M-92 14 q16 -6 26 4 M20 -66 q-8 14 4 26 q10 12 -2 26 M52 -56 q16 4 18 22 M70 -24 q14 0 26 12 M-40 30 q16 -8 30 2 q14 8 30 -4 M86 18 q8 -6 14 4';
  function brainSide(cx, cy, s, o) {
    const p = o || {}; const k = s || 1; const cid = nid(), sh = nid(), g = nid();
    const T = `translate(${cx} ${cy}) scale(${k})`;
    const lobes = p.lobes === false
      ? `<rect x="-130" y="-100" width="260" height="170" fill="url(#${g})"/>`
      : `<path d="M-130 -100 L6 -100 L-22 8 L-62 24 L-130 44Z" fill="${C.fr}"/><path d="M6 -100 L130 -100 L130 -14 L72 -12 L36 -2 L-22 8Z" fill="${C.pa}"/><path d="M72 -12 L130 -14 L130 70 L88 70Z" fill="${C.oc}"/><path d="M-130 44 L-62 24 L-22 8 L36 -2 L72 -12 L88 70 L-130 70Z" fill="${C.te}"/>`;
    return {
      d: `<clipPath id="${cid}"><path d="${BRAIN_OUT}"/></clipPath>${shadow(sh)}${linear(g, C.brain, C.brain2, true)}`,
      b: `<g transform="${T}" filter="url(#${sh})">
        ${p.stem === false ? '' : `<path d="M30 30 C36 58 36 82 30 108 L48 108 C50 82 52 58 56 36Z" fill="${C.stem}" stroke="#b9875f" stroke-width="1.2"/>`}
        ${p.cerebellum === false ? '' : `<ellipse cx="76" cy="52" rx="34" ry="19" fill="${C.cb}" stroke="#a85670" stroke-width="1.2"/><path d="M48 50 q14 -6 28 0 q14 6 26 0 M52 60 q12 -4 24 0 q12 4 22 -2" stroke="#a85670" stroke-width="1" fill="none" opacity=".7"/>`}
        <g clip-path="url(#${cid})">${lobes}<path d="${GYRI}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/></g>
        <path d="${BRAIN_OUT}" fill="none" stroke="${C.brainLine}" stroke-width="1.6"/>
        ${p.lobes === false ? '' : `<path d="M6 -82 L-22 8" stroke="#7a4a5a" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M-62 24 C-30 10 10 4 72 -12" stroke="#7a4a5a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`}
      </g>`
    };
  }
  /* مغز در برش میانی (ساجیتال): مخ، جسم پینه‌ای، تالاموس، هیپوتالاموس، هیپوفیز، ساقه و مخچه */
  function brainSag(cx, cy, s) {
    const k = s || 1; const sh = nid(), g = nid();
    return {
      d: `${shadow(sh)}${linear(g, C.brain, C.brain2, true)}`,
      b: `<g transform="translate(${cx} ${cy}) scale(${k})" filter="url(#${sh})">
        <path d="M30 30 C36 58 36 82 30 108 L48 108 C50 82 52 58 56 36Z" fill="${C.stem}" stroke="#b9875f" stroke-width="1.2"/>
        <ellipse cx="40" cy="62" rx="14" ry="12" fill="#dc9d70" stroke="#b9875f" stroke-width="1.2"/>
        <ellipse cx="78" cy="52" rx="34" ry="21" fill="${C.cb}" stroke="#a85670" stroke-width="1.2"/>
        <path d="M60 52 h20 M70 52 l10 -10 M70 52 l10 10 M80 52 l12 -8 M80 52 l12 8 M80 52 h16" stroke="#fbe3ea" stroke-width="2.2" stroke-linecap="round"/>
        <path d="${BRAIN_OUT}" fill="url(#${g})" stroke="${C.brainLine}" stroke-width="1.6"/>
        <path d="M-84 0 q14 -14 30 -4 M-70 -40 q16 -10 30 0 M-30 -62 q12 10 30 4 M30 -62 q10 14 30 8 M74 -30 q14 4 22 18" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M-56 -6 C-40 -40 40 -46 66 -12 C60 -4 54 -6 48 -14 C24 -36 -30 -32 -46 -2Z" fill="#f3ede6" stroke="#b39b8a" stroke-width="1.3"/>
        <path d="M-20 -4 C-10 -22 30 -24 44 -8 C34 -2 -6 0 -20 -4Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1"/>
        <ellipse cx="14" cy="12" rx="20" ry="13" fill="#e5a3b7" stroke="#a85670" stroke-width="1.2"/>
        <path d="M-12 22 C-6 34 6 36 14 30 C10 22 -2 20 -12 22Z" fill="#d07a96" stroke="#a85670" stroke-width="1"/>
        <path d="M-4 34 L-6 44" stroke="#a85670" stroke-width="2"/><ellipse cx="-6" cy="48" rx="7" ry="5" fill="#f2c94c" stroke="#c99a1d"/>
      </g>`
    };
  }
  /* نورون: دندریت‌ها، جسم سلولی با هسته، آکسون با غلاف میلین و پایانه‌ها؛ از چپ به راست */
  function neuron(x, y, len, o) {
    const p = o || {}; const L = len || 220; const segs = p.segs || 5; const sw = (L - 70) / segs;
    let den = '';
    for (let i = 0; i < 7; i++) {
      const a = Math.PI * (0.62 + i * 0.12), r = 26 + (i % 2) * 8;
      const x1 = x + Math.cos(a) * 16, y1 = y + Math.sin(a) * 16, x2 = x + Math.cos(a) * r * 1.4, y2 = y + Math.sin(a) * r * 1.4;
      den += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} M${x2.toFixed(1)} ${y2.toFixed(1)} l${(Math.cos(a - .5) * 10).toFixed(1)} ${(Math.sin(a - .5) * 10).toFixed(1)} M${x2.toFixed(1)} ${y2.toFixed(1)} l${(Math.cos(a + .5) * 10).toFixed(1)} ${(Math.sin(a + .5) * 10).toFixed(1)}" stroke="${C.cellLine}" stroke-width="2.4" stroke-linecap="round"/>`;
    }
    let my = '';
    for (let i = 0; i < segs; i++) my += `<rect x="${(x + 26 + i * sw + 3).toFixed(1)}" y="${y - 7}" width="${(sw - 6).toFixed(1)}" height="14" rx="7" fill="${C.myelin}" stroke="${C.myelinLine}" stroke-width="1.1"/>`;
    const ex = x + 26 + segs * sw;
    const term = [-14, -5, 5, 14].map(d => `<path d="M${ex} ${y} C${ex + 12} ${y} ${ex + 14} ${y + d} ${ex + 26} ${y + d * 1.4}" stroke="${C.cellLine}" stroke-width="2" fill="none"/><circle cx="${ex + 27}" cy="${y + d * 1.4}" r="3.4" fill="${C.cell}" stroke="${C.cellLine}"/>`).join('');
    return `${den}<path d="M${x + 14} ${y} L${ex} ${y}" stroke="${C.cellLine}" stroke-width="3"/>${p.myelin === false ? '' : my}${term}
      <circle cx="${x}" cy="${y}" r="18" fill="${C.cell}" stroke="${C.cellLine}" stroke-width="1.6"/><circle cx="${x - 2}" cy="${y - 1}" r="6.5" fill="#7a5fd0" stroke="#4b3499"/>`;
  }
  /* سر از نیم‌رخ (رو به چپ) برای جای‌دادن مغز */
  const head = (cx, cy, k) => { const s = k || 1; return `<path transform="translate(${cx} ${cy}) scale(${s})" d="M-6 -108 C66 -110 120 -64 118 4 C116 40 104 62 92 76 L92 128 L22 128 L20 108 C-6 108 -26 104 -34 92 C-40 82 -40 72 -46 64 C-58 62 -58 54 -52 48 C-58 40 -60 34 -50 26 L-66 2 C-70 -4 -66 -10 -58 -12 C-56 -70 -38 -106 -6 -108Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`; };
  /* مهره ساده (برش) */
  const vert = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.1"/>`;
  /* جرقه عصبی */
  const zap = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s || 1})" d="M6 -14 l-10 16 h8 l-6 14 14 -18 h-8 l6 -12z" fill="${c || C.spark}" stroke="#c99a1d" stroke-width="1" stroke-linejoin="round"/>`;

  /* ================= دنیای پایه: زبان عصب ================= */
  A['ns-overview'] = () => {
    return svg(360, 330, `${title('دستگاه عصبی: مرکزی (CNS) و محیطی (PNS)')}
      ${mannequin(180, 40, 1.05)}
      <ellipse cx="180" cy="63" rx="13" ry="15" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.4"/>
      <path d="M180 78 V210" stroke="${C.nerve}" stroke-width="5" stroke-linecap="round"/><path d="M180 78 V210" stroke="${C.nerveLine}" stroke-width="1" />
      ${[96, 112, 128, 144, 160, 176, 192, 206].map((y, i) => `<path d="M180 ${y} C${166 - i * 2} ${y + 4} ${150 - i * 3} ${y + 10} ${136 - i * 2} ${y + 18} M180 ${y} C${194 + i * 2} ${y + 4} ${210 + i * 3} ${y + 10} ${224 + i * 2} ${y + 18}" stroke="${C.nerveLine}" stroke-width="1.4" fill="none"/>`).join('')}
      <path d="M134 112 L130 160 L124 200 M226 112 L230 160 L236 200 M170 214 L164 270 L160 312 M190 214 L196 270 L200 312" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      <path d="M22 50 V214 M16 50 H28 M16 214 H28" stroke="#6c4fd0" stroke-width="1.6" fill="none"/>
      ${pin(180, 60, 100, 52)}${lab(70, 48, 'brain', 'مغز', { size: 10 })}
      ${pin(180, 150, 100, 140)}${lab(66, 136, 'spinal cord', 'نخاع', { size: 10 })}
      ${pin(146, 160, 100, 210)}${lab(62, 210, 'spinal nerves', 'اعصاب نخاعی', { size: 10 })}
      ${pin(162, 280, 100, 286)}${lab(62, 282, 'peripheral nerve', 'عصب محیطی', { size: 10 })}
      <rect x="250" y="56" width="104" height="58" rx="12" fill="#eeeafb"/>${t(302, 78, 'CNS', { size: 14, fill: '#5a3fbf', w: 900, sym: true })}${f(302, 96, 'مغز + نخاع', { size: 9.5, fill: INK, w: 800 })}
      <rect x="250" y="226" width="104" height="58" rx="12" fill="#fdf3dc"/>${t(302, 248, 'PNS', { size: 14, fill: '#a87a12', w: 900, sym: true })}${f(302, 266, 'اعصاب بیرون از CNS', { size: 9, fill: INK, w: 800 })}`, 'دستگاه عصبی');
  };

  /* آناتومی یک واژه: hemi + pleg + ia */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title('یک واژه = پیشوند + ریشه + پسوند')}
      ${part(10, 70, 'hemi', '#1272a3', '#ddf1fb')}${part(86, 80, 'pleg', '#b03e5c', '#fde6ec')}${part(172, 52, 'ia', '#3f8a05', '#e7f9d8')}
      ${br(10, 80, 'prefix', 'پیشوند: نیم', '#1272a3')}${br(86, 166, 'root', 'ریشه: فلج', '#b03e5c')}${br(172, 224, 'suffix', 'پسوند: حالت', '#3f8a05')}
      <rect x="236" y="40" width="116" height="40" rx="10" fill="#f8f6f5"/>${f(294, 57, 'حالتِ فلجِ', { size: 10.5, fill: '#3f8a05', w: 800 })}${f(294, 73, 'نیمه بدن', { size: 10.5, fill: INK, w: 800 })}
      <path d="M200 150 C150 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, 'معنی را از آخر بخوان: پسوند ← پیشوند ← ریشه', { size: 10, fill: '#b03e5c', w: 700 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* نقشه ریشه‌ها روی سر و ستون مهره */
  A['root-map'] = () => {
    const b = brainSide(176, 112, 0.74, { lobes: false });
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 11, anchor: 'start', fill: '#5a3fbf', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title('نقشه ریشه‌ها: هر بخش، یک ریشه')}
      <path d="M90 104 C88 44 132 26 176 26 C230 26 264 56 266 104" fill="none" stroke="${C.boneLine}" stroke-width="5" opacity=".55"/>
      ${b.b}
      <path d="M195 196 V288" stroke="${C.nerve}" stroke-width="9" stroke-linecap="round"/>
      ${R(120, 80, 80, 56, 'encephal/o', 'مغز', -1)}${R(140, 100, 80, 112, 'cerebr/o', 'مخ', -1)}${R(150, 140, 80, 168, 'psych/o', 'روان، ذهن', -1)}
      ${R(195, 270, 80, 262, 'neur/o', 'عصب', -1)}
      ${R(232, 152, 270, 196, 'cerebell/o', 'مخچه', 1)}${R(222, 30, 270, 40, 'crani/o', 'جمجمه', 1)}${R(258, 90, 270, 118, 'mening/o', 'پرده‌های مغز', 1)}
      ${R(197, 236, 236, 248, 'myel/o', 'نخاع', 1)}`, 'نقشه ریشه‌ها', b.d);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title('دو جفت فریبنده')}
      ${box(10, 32, '#b03e5c', '#fde6ec', '-plegia', 'فلج کامل', 'hemiplegia', '⛔')}${box(186, 32, '#e07a3a', '#fdeee3', '-paresis', 'ضعف، فلج ناقص', 'hemiparesis', '〰️')}
      ${box(10, 126, '#5a3fbf', '#eeeafb', 'myel/o', 'نخاع (یا مغز استخوان)', 'myelitis', '🦴')}${box(186, 126, '#17a398', '#e1f6f3', 'my/o', 'عضله', 'myositis', '💪')}
      ${f(180, 228, 'myel/o با «el» است و my/o بدون آن؛ یک حرف، دو عضو متفاوت', { size: 9.5, fill: MUTED, w: 700 })}`, 'واژه‌های همزاد');
  };

  A.neuron = () => {
    const m = nid();
    return svg(360, 220, `${title('نورون: سلول پایه دستگاه عصبی')}
      ${neuron(70, 110, 250)}
      ${arrow(m, 100, 160, 260, 160, '#e5a500', 3)}${f(180, 180, 'جهت تکانه عصبی', { size: 9.5, fill: '#a87a12', w: 800 })}
      ${pin(44, 84, 30, 50)}${lab(44, 40, 'dendrites', 'دندریت‌ها', { size: 10 })}
      ${pin(70, 110, 96, 60)}${lab(112, 42, 'cell body', 'جسم سلولی', { size: 10 })}
      ${pin(150, 104, 180, 62)}${lab(196, 44, 'axon', 'آکسون', { size: 10 })}
      ${pin(232, 104, 256, 62)}${lab(276, 44, 'myelin sheath', 'غلاف میلین', { size: 10 })}
      ${pin(330, 126, 318, 198)}${lab(292, 200, 'axon terminals', 'پایانه‌ها', { size: 10 })}`, 'نورون', marker(m, '#e5a500'));
  };

  /* ================= دنیای ۱: مغز و نخاع ================= */
  A['brain-lobes'] = () => {
    const b = brainSide(176, 150, 1.12);
    return svg(360, 290, `${title('لوب‌های مخ (نمای کنار؛ پیشانی سمت چپ)')}
      ${b.b}
      ${lab(70, 104, 'frontal', 'پیشانی', { size: 11 })}
      ${lab(206, 84, 'parietal', 'آهیانه', { size: 11 })}
      ${lab(274, 142, 'occipital', 'پس‌سری', { size: 10.5 })}
      ${lab(140, 176, 'temporal', 'گیجگاهی', { size: 11 })}
      ${pin(262, 214, 300, 248)}${lab(312, 256, 'cerebellum', 'مخچه', { size: 10 })}
      ${pin(218, 248, 200, 272)}${lab(150, 272, 'brainstem', 'ساقه مغز', { size: 10 })}
      ${pin(183, 70, 230, 40)}${lab(268, 36, 'central sulcus', 'شیار مرکزی', { size: 9.5 })}
      ${pin(98, 172, 54, 216)}${lab(52, 228, 'lateral sulcus', 'شیار جانبی', { size: 9.5 })}`, 'لوب‌های مغز', b.d);
  };

  A['brain-sagittal'] = () => {
    const b = brainSag(166, 140, 1.12);
    return svg(360, 300, `${title('برش میانی مغز (ساجیتال)')}
      ${b.b}
      ${pin(110, 76, 48, 52)}${lab(30, 46, 'cerebrum', 'مخ', { size: 10, anchor: 'start' })}
      ${pin(160, 96, 300, 52)}${lab(312, 46, 'corpus callosum', 'جسم پینه‌ای', { size: 9.5 })}
      ${pin(182, 152, 300, 108)}${lab(312, 102, 'thalamus', 'تالاموس', { size: 10 })}
      ${pin(158, 168, 90, 120)}${lab(10, 124, 'hypothalamus', 'هیپوتالاموس', { size: 9.5, anchor: 'start' })}
      ${pin(159, 194, 66, 176)}${lab(10, 180, 'pituitary', 'هیپوفیز', { size: 9.5, anchor: 'start' })}
      ${pin(214, 190, 300, 152)}${lab(312, 156, 'midbrain', 'مغز میانی', { size: 9.5 })}
      ${pin(208, 209, 46, 226)}${lab(10, 230, 'pons', 'پل مغزی', { size: 10, anchor: 'start' })}
      ${pin(210, 243, 104, 270)}${lab(10, 274, 'medulla oblongata', 'بصل‌النخاع', { size: 9.5, anchor: 'start' })}
      ${pin(266, 202, 300, 236)}${lab(312, 240, 'cerebellum', 'مخچه', { size: 10 })}`, 'برش میانی مغز', b.d);
  };

  A['brain-functions'] = () => {
    const b = brainSide(176, 158, 1.12, { lobes: false });
    const spot = (x, y, c) => `<circle cx="${x}" cy="${y}" r="13" fill="${c}" opacity=".85" stroke="#fff" stroke-width="2"/>`;
    return svg(360, 300, `${title('هر بخش قشر مخ، یک کار')}
      ${b.b}
      ${spot(168, 80, '#e07a3a')}${spot(196, 82, '#8e6bd8')}${spot(104, 164, '#d9443a')}${spot(176, 164, '#3d6fd6')}${spot(270, 150, '#3f8a05')}${spot(90, 110, '#f2a33a')}
      ${pin(168, 80, 120, 36)}${lab(92, 32, 'motor area', 'حرکت ارادی', { size: 9.5 })}
      ${pin(196, 82, 246, 36)}${lab(284, 32, 'sensory area', 'حس لمس و درد', { size: 9.5 })}
      ${pin(90, 110, 40, 92)}${lab(36, 76, 'planning', 'برنامه‌ریزی، شخصیت', { size: 9 })}
      ${pin(104, 164, 50, 214)}${lab(52, 226, 'Broca area', 'تولید گفتار', { size: 9.5 })}
      ${pin(176, 164, 150, 270)}${lab(150, 282, 'Wernicke area', 'فهم گفتار', { size: 9.5 })}
      ${pin(270, 150, 310, 112)}${lab(316, 100, 'visual area', 'بینایی (خواندن)', { size: 9.5 })}
      ${pin(244, 216, 290, 270)}${lab(300, 282, 'cerebellum', 'تعادل و هماهنگی', { size: 9.5 })}`, 'کارکرد بخش‌های مغز', b.d);
  };

  A.meninges = () => {
    const L = (y, h, c, line) => `<rect x="20" y="${y}" width="220" height="${h}" fill="${c}" stroke="${line || 'none'}"/>`;
    const R = (y1, y2, en, fa) => `${pin(226, y1, 262, y2)}${lab(304, y2 - 4, en, fa, { size: 9.5 })}`;
    return svg(360, 300, `${title('مننژ: سه پرده محافظ مغز و نخاع')}
      ${L(34, 20, C.skin, C.skinLine)}${L(54, 30, C.bone, C.boneLine)}
      ${[44, 92, 140, 188].map(x => `<circle cx="${x}" cy="69" r="4" fill="${C.bone2}"/>`).join('')}
      ${L(84, 8, '#f3ede6')}${L(92, 16, C.dura, '#6f879e')}${L(108, 6, '#fff')}
      ${L(114, 8, '#dccfe9', '#9b85bf')}${L(122, 30, C.csf)}
      ${[34, 70, 106, 142, 178, 214].map(x => `<path d="M${x} 122 l6 30 M${x + 12} 122 l-6 30" stroke="#9b85bf" stroke-width="1"/>`).join('')}
      ${L(152, 6, '#f4b7c4', '#c9677f')}
      <path d="M20 158 H240 V280 H20Z" fill="${C.brain}"/><path d="M20 160 q27.5 34 55 0 q27.5 34 55 0 q27.5 34 55 0 q27.5 34 55 0" fill="#f4b7c4" stroke="${C.brainLine}" stroke-width="1.2"/>
      ${R(44, 44, 'scalp', 'پوست سر')}${R(70, 84, 'skull', 'استخوان جمجمه')}
      ${R(100, 124, 'dura mater', 'سخت‌شامه')}${R(118, 164, 'arachnoid', 'عنکبوتیه')}
      ${R(138, 204, 'subarachnoid space', 'فضای زیرعنکبوتیه (CSF)')}${R(155, 244, 'pia mater', 'نرم‌شامه')}
      ${f(130, 236, 'cerebral cortex • قشر مخ', { size: 10, fill: '#a3485f', w: 800 })}
      ${f(130, 294, 'از بیرون به درون: سخت‌شامه، عنکبوتیه، نرم‌شامه', { size: 9, fill: MUTED, w: 700 })}`, 'مننژ');
  };

  /* بطن‌ها و جریان CSF */
  A.ventricles = () => {
    const b = brainSide(170, 130, 1.05, { lobes: false }), m = nid();
    return svg(360, 290, `${title('بطن‌های مغز و جریان مایع مغزی-نخاعی')}
      ${b.b}
      <g transform="translate(170 130) scale(1.05)">
        <path d="M-60 -18 C-50 -44 10 -50 40 -30 C52 -22 60 -6 66 10 C56 6 48 0 40 -6 C20 -20 -20 -22 -40 -4 C-46 4 -40 18 -30 24 C-44 24 -60 14 -60 -18Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/>
        <path d="M-6 6 C-2 20 6 24 10 14 C8 6 2 2 -6 6Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4"/>
        <path d="M6 18 C14 30 26 36 40 40" stroke="${C.csfLine}" stroke-width="3" fill="none"/>
        <path d="M40 40 L50 50 L42 58 L34 50Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4"/>
        <path d="M44 58 V104" stroke="${C.csfLine}" stroke-width="3" stroke-dasharray="5 4"/>
        <path d="M-40 -30 q8 -6 14 0 q6 6 12 0" stroke="#d65a52" stroke-width="2.4" fill="none"/>
      </g>
      ${curve(m, 'M120 98 C150 80 196 84 214 106', '#1d77a8', 2.2)}
      ${pin(110, 112, 60, 70)}${lab(52, 56, 'lateral ventricle', 'بطن جانبی', { size: 9.5 })}
      ${pin(172, 146, 74, 186)}${lab(56, 196, 'third ventricle', 'بطن سوم', { size: 9.5 })}
      ${pin(216, 184, 300, 186)}${lab(312, 182, 'fourth ventricle', 'بطن چهارم', { size: 9.5 })}
      ${pin(128, 100, 228, 40)}${lab(282, 34, 'choroid plexus', 'شبکه مشیمیه: سازنده CSF', { size: 9.5 })}
      ${pin(216, 222, 280, 260)}${lab(300, 262, 'central canal', 'کانال مرکزی نخاع', { size: 9.5 })}
      ${f(110, 282, 'CSF مغز و نخاع را شناور و محافظت می‌کند', { size: 9.5, fill: '#1d77a8', w: 800 })}`, 'بطن‌های مغز', b.d + marker(m, '#1d77a8'));
  };

  /* برش عرضی نخاع با ریشه‌ها */
  A['spinal-cord'] = () => {
    const m = nid(), n = nid();
    return svg(360, 300, `${title('برش عرضی نخاع: ماده خاکستری و سفید')}
      <g transform="translate(0 26)">
      <ellipse cx="180" cy="140" rx="92" ry="74" fill="${C.white}" stroke="#b39b8a" stroke-width="1.6"/>
      <path d="M180 140 C160 130 140 96 130 84 C150 92 166 104 180 114 C194 104 210 92 230 84 C220 96 200 130 180 140 C200 150 222 184 232 200 C210 190 194 170 180 160 C166 170 150 190 128 200 C138 184 160 150 180 140Z" fill="${C.gray}" stroke="#8d7663" stroke-width="1.4"/>
      <circle cx="180" cy="140" r="4" fill="${C.csf}" stroke="${C.csfLine}"/>
      <path d="M100 96 C76 86 56 82 30 84" stroke="#2e9bd6" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M260 96 C284 86 304 82 330 84" stroke="#2e9bd6" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="294" cy="84" rx="12" ry="9" fill="#9bd0ee" stroke="#2e9bd6"/>
      <path d="M104 186 C80 196 56 200 30 198" stroke="#d65a52" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M256 186 C280 196 304 200 330 198" stroke="#d65a52" stroke-width="7" fill="none" stroke-linecap="round"/>
      ${arrow(m, 22, 66, 84, 72, '#2e9bd6', 2)}${arrow(n, 84, 214, 22, 214, '#d65a52', 2)}
      </g>
      ${t(14, 62, 'sensory root', { size: 9.5, anchor: 'start', fill: '#1d77a8', w: 800 })}${f(14, 76, 'ریشه حسی', { size: 9, anchor: 'start' })}
      ${pin(146, 126, 150, 52)}${lab(150, 40, 'dorsal horn', 'شاخ پشتی (حسی)', { size: 9.5 })}
      ${pin(294, 110, 300, 62)}${lab(300, 40, 'dorsal root ganglion', 'عقده ریشه پشتی', { size: 9.5 })}
      ${pin(248, 150, 316, 150)}${lab(326, 134, 'white matter', 'ماده سفید', { size: 9.5 })}
      ${pin(196, 160, 232, 108)}${lab(240, 88, 'gray matter', 'ماده خاکستری', { size: 9 })}
      ${pin(218, 210, 270, 268)}${lab(300, 262, 'ventral horn', 'شاخ قدامی (حرکتی)', { size: 9.5 })}
      ${t(14, 262, 'motor root', { size: 9.5, anchor: 'start', fill: '#c2413a', w: 800 })}${f(14, 276, 'ریشه حرکتی', { size: 9, anchor: 'start' })}
      ${f(180, 294, 'حس از پشت وارد می‌شود و فرمان حرکت از جلو خارج می‌شود', { size: 9.5, fill: INK, w: 700 })}`, 'برش عرضی نخاع', marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  /* سطوح نخاع و اعصاب نخاعی */
  A['spinal-levels'] = () => {
    const seg = (y1, y2, c, n, en, fa, k) => { let s = ''; const h = (y2 - y1) / n; for (let i = 0; i < n; i++) s += vert(150, y1 + i * h + 1, 30, h - 2.5) + `<path d="M180 ${(y1 + i * h + h / 2).toFixed(1)} h${18 + k}" stroke="${c}" stroke-width="2.2"/>`; return s + `<rect x="228" y="${y1}" width="124" height="${y2 - y1 - 4}" rx="10" fill="${c}" opacity=".14"/>${t(290, (y1 + y2) / 2 - 2, en, { size: 10.5, fill: c, w: 900 })}${f(290, (y1 + y2) / 2 + 13, fa, { size: 9, fill: INK })}`; };
    return svg(360, 330, `${title('۳۱ جفت عصب نخاعی')}
      <path d="M140 30 V320" stroke="${C.nerve}" stroke-width="0"/>
      ${seg(30, 96, '#e07a3a', 8, 'cervical C1–C8', '۸ جفت گردنی', 0)}${seg(96, 210, '#3d6fd6', 12, 'thoracic T1–T12', '۱۲ جفت سینه‌ای', 4)}
      ${seg(210, 268, '#17a398', 5, 'lumbar L1–L5', '۵ جفت کمری', 8)}${seg(268, 312, '#8e6bd8', 5, 'sacral S1–S5', '۵ جفت خاجی', 12)}
      <path d="M165 24 V226" stroke="${C.nerve}" stroke-width="7" stroke-linecap="round" opacity=".9"/>
      <path d="M165 226 C162 260 160 290 158 316 M165 226 C166 262 168 290 170 316 M165 226 C170 256 174 290 176 316" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      ${pin(165, 214, 90, 200)}${lab(64, 196, 'conus', 'انتهای نخاع (L1–L2)', { size: 9.5 })}
      ${pin(168, 280, 90, 266)}${lab(64, 262, 'cauda equina', 'دم اسب', { size: 9.5 })}
      ${pin(165, 60, 90, 60)}${lab(64, 56, 'spinal cord', 'نخاع', { size: 9.5 })}
      ${f(70, 326, '+ ۱ جفت دنبالچه‌ای', { size: 9, fill: MUTED })}`, 'اعصاب نخاعی');
  };

  /* ================= دنیای ۲: اعصاب محیطی و خودکار ================= */
  A.synapse = () => {
    const m = nid();
    const ves = [[90, 112], [104, 128], [86, 140], [112, 150], [98, 164]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff3c4" stroke="#c99a1d"/>${[0, 1, 2].map(i => `<circle cx="${p[0] - 3 + i * 3}" cy="${p[1] + (i % 2 ? 2 : -2)}" r="1.4" fill="#e07a3a"/>`).join('')}`).join('');
    const dots = Array.from({ length: 14 }, (_, i) => `<circle cx="${150 + (i * 7) % 26}" cy="${116 + (i * 13) % 52}" r="2" fill="#e07a3a"/>`).join('');
    return svg(360, 260, `${title('سیناپس: پیام از یک نورون به نورون بعدی')}
      <path d="M10 140 C40 140 50 70 120 80 C150 86 150 200 120 204 C50 214 40 140 10 140Z" fill="${C.cell}" stroke="${C.cellLine}" stroke-width="1.6"/>
      ${ves}${dots}
      <path d="M190 74 C210 70 240 70 350 60 V220 C240 214 210 214 190 210 C178 170 178 116 190 74Z" fill="#f6c8d6" stroke="#c9677f" stroke-width="1.6"/>
      ${[100, 124, 148, 172, 196].map(y => `<rect x="186" y="${y - 6}" width="8" height="12" rx="3" fill="#7fb2e5" stroke="#3d6fd6"/>`).join('')}
      ${arrow(m, 20, 236, 330, 236, '#e5a500', 3)}${f(176, 254, 'جهت پیام', { size: 9.5, fill: '#a87a12', w: 800 })}
      ${pin(64, 140, 44, 58)}${lab(56, 46, 'axon terminal', 'پایانه آکسون', { size: 9.5 })}
      ${pin(98, 164, 120, 228)}${t(124, 224, 'vesicles • کیسه‌های ناقل', { size: 9, anchor: 'start' })}
      ${pin(163, 140, 160, 58)}${lab(170, 46, 'synaptic cleft', 'شکاف سیناپسی', { size: 9.5 })}
      ${pin(160, 150, 300, 100)}${lab(300, 84, 'neurotransmitter', 'ناقل عصبی', { size: 9.5 })}
      ${pin(190, 172, 300, 170)}${lab(300, 154, 'receptors', 'گیرنده‌ها', { size: 9.5 })}`, 'سیناپس', marker(m, '#e5a500'));
  };

  A['reflex-arc'] = () => {
    const m = nid(), n = nid();
    return svg(360, 300, `${title('قوس رفلکس زانو (patellar reflex)')}
      <ellipse cx="270" cy="70" rx="56" ry="42" fill="${C.white}" stroke="#b39b8a" stroke-width="1.4"/>
      <path d="M270 70 C258 64 246 46 240 40 C252 44 262 52 270 58 C278 52 288 44 300 40 C294 46 282 64 270 70 C282 76 294 94 300 102 C288 98 278 88 270 82 C262 88 252 98 240 102 C246 94 258 76 270 70Z" fill="${C.gray}" stroke="#8d7663"/>
      <path d="M66 140 C60 196 66 236 82 290 L118 290 C114 240 116 200 120 150 C140 150 150 160 166 172 L196 260 L226 258 L200 160 C180 132 150 120 118 118Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.3"/>
      <path d="M118 128 C140 132 160 146 172 168" stroke="#d65a52" stroke-width="10" fill="none" stroke-linecap="round" opacity=".55"/>
      <rect x="154" y="160" width="16" height="16" rx="5" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M220 222 l28 -30 l10 8 l-28 30z" fill="#9aa5ab" stroke="#5b6b73"/>
      ${curve(m, 'M174 186 C200 150 220 110 246 80', '#2e9bd6', 2.6)}
      ${curve(n, 'M280 82 C260 130 200 140 140 132', '#d65a52', 2.6)}
      ${zap(234, 210, 0.9)}
      
      ${pin(174, 186, 120, 264)}${lab(150, 276, 'receptor', '۱. گیرنده (کشش تاندون)', { size: 9.5 })}
      ${pin(212, 128, 140, 70)}${lab(110, 56, 'sensory neuron', '۲. نورون حسی (آوران)', { size: 9.5 })}
      ${pin(270, 70, 300, 140)}${lab(312, 152, 'spinal cord', '۳. نخاع', { size: 9.5 })}
      ${pin(240, 112, 312, 200)}${lab(312, 212, 'motor neuron', '۴. نورون حرکتی (وابران)', { size: 9.5 })}
      ${pin(130, 132, 50, 110)}${lab(46, 96, 'effector', '۵. عضله چهارسر', { size: 9.5 })}`, 'قوس رفلکس', marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  A['cranial-nerves'] = () => {
    const N = [['I', 'olfactory', 'بویایی'], ['II', 'optic', 'بینایی'], ['III', 'oculomotor', 'حرکت چشم، مردمک'], ['IV', 'trochlear', 'حرکت چشم'], ['V', 'trigeminal', 'حس صورت، جویدن'], ['VI', 'abducens', 'چرخش چشم به کنار'],
      ['VII', 'facial', 'حرکات صورت'], ['VIII', 'vestibulocochlear', 'شنوایی و تعادل'], ['IX', 'glossopharyngeal', 'بلع، چشایی'], ['X', 'vagus', 'اندام‌های سینه و شکم'], ['XI', 'accessory', 'عضلات گردن و شانه'], ['XII', 'hypoglossal', 'حرکت زبان']];
    const row = (n, i) => { const x = i < 6 ? 8 : 184, y = 34 + (i % 6) * 44; return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${i % 2 ? '#f3eefc' : '#fdf3dc'}"/><circle cx="${x + 20}" cy="${y + 19}" r="13" fill="#6c4fd0"/>${t(x + 20, y + 23.5, n[0], { size: 10, fill: '#fff', w: 900, sym: true })}${t(x + 40, y + 16, n[1], { size: 10, anchor: 'start', w: 800 })}${f(x + 40, y + 31, n[2], { size: 9, anchor: 'start', fill: INK })}`; };
    return svg(360, 306, `${title('۱۲ جفت عصب جمجمه‌ای')}${N.map(row).join('')}`, 'اعصاب جمجمه‌ای');
  };

  /* سمپاتیک و پاراسمپاتیک */
  A.ans = () => {
    const R = (y, ic, sym, par) => `<rect x="10" y="${y}" width="340" height="30" rx="9" fill="${y % 2 ? '#fff' : '#faf8fd'}"/>${t(180, y + 21, ic, { size: 16 })}${f(90, y + 20, sym, { size: 9.5, fill: '#c2413a', w: 800 })}${f(270, y + 20, par, { size: 9.5, fill: '#17a398', w: 800 })}`;
    return svg(360, 292, `${title('دستگاه خودکار: دو نیروی مخالف')}
      <rect x="10" y="30" width="160" height="50" rx="12" fill="#fde6e4"/>${t(90, 50, 'sympathetic', { size: 11, fill: '#c2413a', w: 900 })}${f(90, 68, 'جنگ یا گریز (استرس)', { size: 9.5, fill: INK, w: 800 })}
      <rect x="190" y="30" width="160" height="50" rx="12" fill="#e1f6f3"/>${t(270, 50, 'parasympathetic', { size: 11, fill: '#17a398', w: 900 })}${f(270, 68, 'استراحت و گوارش', { size: 9.5, fill: INK, w: 800 })}
      ${R(90, '👁️', 'مردمک گشاد', 'مردمک تنگ')}${R(122, '❤️', 'ضربان تند', 'ضربان آرام')}${R(154, '🫁', 'نایژه‌ها باز', 'نایژه‌ها تنگ')}
      ${R(186, '🍽️', 'گوارش کند', 'گوارش فعال')}${R(218, '💧', 'تعریق و قند خون بالا', 'ترشح بزاق')}${R(250, '🚽', 'مثانه شل', 'تخلیه مثانه')}`, 'سمپاتیک و پاراسمپاتیک');
  };

  A.dermatomes = () => {
    const bands = [['#f7a46b', 70, 86, 'C'], ['#b79be6', 86, 150, 'T'], ['#7fb2e5', 150, 190, 'L'], ['#8fd18a', 190, 210, 'S']];
    const cid = nid();
    return svg(360, 326, `${title('درماتوم‌ها: هر ناحیه پوست، یک عصب نخاعی')}
      <defs><clipPath id="${cid}">${mannequin(150, 26, 1.05).replace(/<g[^>]*>/, '').replace('</g>', '')}</clipPath></defs>
      ${mannequin(150, 26, 1.05)}
      <g clip-path="url(#${cid})" opacity=".85">${bands.map(b => `<rect x="80" y="${b[1]}" width="140" height="${b[2] - b[1]}" fill="${b[0]}"/>`).join('')}
        <rect x="80" y="210" width="140" height="70" fill="#7fb2e5"/><rect x="80" y="280" width="140" height="40" fill="#8fd18a"/><rect x="80" y="84" width="34" height="130" fill="#f7a46b"/><rect x="186" y="84" width="34" height="130" fill="#f7a46b"/>
        ${[94, 106, 118, 130, 142].map(y => `<path d="M80 ${y} H220" stroke="#fff" stroke-width="1" opacity=".7"/>`).join('')}</g>
      ${[['C', 'cervical', 'گردنی', '#e07a3a', 80], ['T', 'thoracic', 'سینه‌ای', '#8e6bd8', 128], ['L', 'lumbar', 'کمری', '#3d6fd6', 210], ['S', 'sacral', 'خاجی', '#3f8a05', 290]].map(r => `<rect x="244" y="${r[4] - 18}" width="108" height="36" rx="10" fill="${r[3]}" opacity=".14"/>${t(264, r[4] + 5, r[0], { size: 15, fill: r[3], w: 900, sym: true })}${t(316, r[4] - 2, r[1], { size: 9.5, fill: r[3], w: 800 })}${f(316, r[4] + 12, r[2], { size: 9, fill: INK })}`).join('')}
      ${f(180, 320, 'زونا (shingles) روی یک درماتوم بثورات می‌دهد', { size: 9, fill: MUTED, w: 700 })}`, 'درماتوم‌ها');
  };

  A['afferent-efferent'] = () => {
    const m = nid(), n = nid();
    return svg(360, 220, `${title('آوران به سوی CNS، وابران دور از CNS')}
      <rect x="140" y="60" width="80" height="100" rx="16" fill="#eeeafb" stroke="#6c4fd0" stroke-width="1.6"/>${t(180, 104, 'CNS', { size: 16, fill: '#5a3fbf', w: 900, sym: true })}${f(180, 124, 'مغز و نخاع', { size: 9.5, fill: INK })}
      ${t(40, 78, '👆', { size: 24 })}${f(40, 108, 'گیرنده پوست', { size: 9 })}
      ${t(320, 78, '💪', { size: 24 })}${f(320, 108, 'عضله یا غده', { size: 9 })}
      ${arrow(m, 62, 76, 136, 90, '#2e9bd6', 3)}${arrow(n, 224, 90, 298, 76, '#d65a52', 3)}
      ${lab(96, 150, 'afferent (sensory)', 'آوران: حسی', { size: 10, fill: '#1d77a8' })}
      ${lab(268, 150, 'efferent (motor)', 'وابران: حرکتی', { size: 10, fill: '#c2413a' })}
      ${f(180, 204, 'AF = Arrive (می‌رسد) • EF = Exit (خارج می‌شود)', { size: 9.5, fill: MUTED, w: 700 })}`, 'آوران و وابران', marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  /* ================= دنیای ۳: نشانه‌ها و بیماری‌ها ================= */
  A['paralysis-types'] = () => {
    const fig = (x, en, fa, parts) => {
      const k = 0.5, cid = nid();
      const fill = parts.map(p => `<rect x="${x + p[0]}" y="${p[1]}" width="${p[2]}" height="${p[3]}" fill="#d9443a" opacity=".55"/>`).join('');
      return `<defs><clipPath id="${cid}">${mannequin(x, 34, k).replace(/<g[^>]*>/, '').replace('</g>', '')}</clipPath></defs>${mannequin(x, 34, k)}<g clip-path="url(#${cid})">${fill}</g>${lab(x, 186, en, fa, { size: 10 })}`;
    };
    return svg(360, 232, `${title('انواع فلج (رنگ قرمز = بخش فلج)')}
      ${fig(48, 'monoplegia', 'یک اندام', [[-40, 96, 20, 80]])}
      ${fig(136, 'hemiplegia', 'نیمه بدن', [[-40, 30, 40, 150]])}
      ${fig(224, 'paraplegia', 'دو پا و پایین تنه', [[-40, 106, 80, 80]])}
      ${fig(312, 'quadriplegia', 'چهار اندام', [[-40, 56, 80, 130]])}
      ${f(180, 226, 'پسوند ‎-plegia‎ یعنی فلج کامل و ‎-paresis‎ یعنی ضعف', { size: 9.5, fill: MUTED, w: 700 })}`, 'انواع فلج');
  };

  A['stroke-types'] = () => {
    const b1 = brainSide(92, 118, 0.62, { lobes: false }), b2 = brainSide(268, 118, 0.62, { lobes: false });
    return svg(360, 250, `${title('سکته مغزی (CVA): انسداد یا خونریزی')}
      ${b1.b}${b2.b}
      <path d="M40 150 C60 120 80 100 110 92" stroke="${C.art}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="78" cy="112" rx="8" ry="5" fill="#5a1a1a"/><path d="M84 106 C100 98 112 96 126 98" stroke="#9aa5ab" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
      <ellipse cx="116" cy="92" rx="24" ry="16" fill="#9aa5ab" opacity=".55"/>
      <path d="M216 150 C236 120 256 100 286 92" stroke="${C.art}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="274" cy="102" rx="26" ry="17" fill="${C.blood}" opacity=".8"/><circle cx="262" cy="106" r="5" fill="${C.art}"/>
      ${lab(92, 196, 'ischemic stroke', 'سکته ایسکمیک: لخته رگ را می‌بندد', { size: 10, fill: '#3d6fd6' })}
      ${lab(268, 196, 'hemorrhagic stroke', 'سکته خونریزی‌دهنده: رگ پاره می‌شود', { size: 10, fill: '#c2413a' })}
      ${f(180, 240, 'TIA: علائم سکته که در کمتر از ۲۴ ساعت برطرف می‌شود (هشدار)', { size: 9.5, fill: MUTED, w: 700 })}`, 'انواع سکته', b1.d + b2.d);
  };

  A.hematomas = () => {
    const H = (cx, kind) => {
      const sh = nid();
      const blood = kind === 'epi' ? `<path d="M${cx - 30} ${50} C${cx - 10} 44 ${cx + 12} 46 ${cx + 22} 58 C${cx + 4} 70 ${cx - 18} 70 ${cx - 30} 64Z" fill="${C.blood}"/>`
        : kind === 'sub' ? `<path d="M${cx - 40} 64 C${cx - 10} 50 ${cx + 26} 52 ${cx + 40} 70 L${cx + 36} 76 C${cx + 20} 62 ${cx - 10} 60 ${cx - 36} 72Z" fill="${C.blood}"/>`
        : `<ellipse cx="${cx + 4}" cy="100" rx="14" ry="11" fill="${C.blood}"/>`;
      return `<g filter="url(#${sh})"><ellipse cx="${cx}" cy="100" rx="52" ry="60" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.4"/></g>
        <ellipse cx="${cx}" cy="100" rx="45" ry="53" fill="${C.dura}"/><ellipse cx="${cx}" cy="102" rx="41" ry="49" fill="${C.brain}" stroke="${C.brainLine}"/>
        <path d="M${cx - 30} 90 q10 -8 20 0 q10 8 20 0 M${cx - 26} 120 q10 -8 20 0 q10 8 20 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>${blood}${shadow(sh)}`;
    };
    return svg(360, 230, `${title('هماتوم‌های مغزی: جای خون مهم است')}
      ${H(62, 'epi')}${H(180, 'sub')}${H(298, 'intra')}
      ${lab(62, 182, 'epidural', 'بین جمجمه و سخت‌شامه', { size: 10 })}
      ${lab(180, 182, 'subdural', 'زیر سخت‌شامه', { size: 10 })}
      ${lab(298, 182, 'intracerebral', 'درون بافت مغز', { size: 10 })}
      ${f(180, 222, 'پیشوند epi یعنی روی، sub یعنی زیر و intra یعنی درون', { size: 9.5, fill: MUTED, w: 700 })}`, 'هماتوم‌ها');
  };

  A.aneurysm = () => {
    return svg(360, 240, `${title('آنوریسم: بادکردگی دیواره سرخرگ مغز')}
      <path d="M180 200 V150 M180 150 C150 140 120 120 100 90 M180 150 C210 140 240 120 260 90 M100 90 C96 70 110 52 130 46 M260 90 C264 70 250 52 230 46 M130 46 H230 M100 90 L40 70 M260 90 L320 70 M130 46 L110 24 M230 46 L250 24" stroke="${C.art}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="236" cy="118" r="20" fill="#e66a5c" stroke="${C.blood}" stroke-width="2"/><path d="M228 108 q6 -4 12 2" stroke="#fff" stroke-width="2.4" fill="none" opacity=".7"/>
      ${pin(236, 118, 290, 150)}${lab(306, 160, 'aneurysm', 'آنوریسم', { size: 10.5, fill: '#c2413a' })}
      ${lab(180, 92, 'circle of Willis', 'حلقه ویلیس زیر مغز', { size: 10 })}
      ${pin(180, 180, 110, 196)}${lab(80, 204, 'basilar artery', 'سرخرگ قاعده‌ای', { size: 9.5 })}
      ${f(180, 232, 'پاره شدن آنوریسم ← خونریزی زیرعنکبوتیه (سکته خونریزی‌دهنده)', { size: 9.5, fill: MUTED, w: 700 })}`, 'آنوریسم');
  };

  A['seizure-types'] = () => {
    const wave = (y, c, amp, per, n) => { let d = `M30 ${y}`; for (let i = 0; i < n; i++) d += ` q${per / 4} ${-amp} ${per / 2} 0 t${per / 2} 0`; return `<path d="${d}" stroke="${c}" stroke-width="2" fill="none"/>`; };
    return svg(360, 262, `${title('تشنج و صرع: طوفان الکتریکی مغز')}
      <rect x="20" y="32" width="320" height="58" rx="12" fill="#f6f8fa"/>${f(330, 46, 'طبیعی', { size: 9, anchor: 'end', fill: '#3d6fd6', w: 800 })}${wave(70, '#3d6fd6', 7, 24, 13)}
      <rect x="20" y="98" width="320" height="70" rx="12" fill="#fdf0f0"/>${f(330, 112, 'هنگام تشنج', { size: 9, anchor: 'end', fill: '#c2413a', w: 800 })}${wave(142, '#c2413a', 18, 12, 26)}
      ${card(20, 178, 100, 76, '#fde6e4', '', 'tonic-clonic', 'سفتی سپس پرش', 'گرندمال')}
      ${card(130, 178, 100, 76, '#eeeafb', '', 'absence', 'خیره شدن کوتاه', 'پتی‌مال')}
      ${card(240, 178, 100, 76, '#fdf3dc', '', 'aura', 'پیش‌نشانه', 'قبل از حمله')}`, 'انواع تشنج');
  };

  A['spina-bifida'] = () => {
    const P = (x, en, fa, extra) => `<g>${[0, 1, 2].map(i => vert(x - 20, 60 + i * 34, 40, 28)).join('')}<path d="M${x - 6} 40 V170" stroke="${C.nerve}" stroke-width="8" stroke-linecap="round"/>${extra}${lab(x, 196, en, fa, { size: 9.5 })}</g>`;
    return svg(360, 240, `${title('اسپینا بیفیدا: بسته نشدن ستون مهره')}
      ${P(46, 'normal', 'طبیعی', '')}
      ${P(126, 'occulta', 'پنهان (نهفته)', `<rect x="128" y="94" width="18" height="28" fill="#fff"/><path d="M144 100 q10 8 0 16" stroke="#7a5a3a" stroke-width="2" fill="none"/>`)}
      ${P(206, 'meningocele', 'بیرون‌زدگی پرده‌ها', `<rect x="208" y="94" width="18" height="28" fill="#fff"/><circle cx="240" cy="108" r="16" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/>`)}
      ${P(296, 'myelomeningocele', 'نخاع و پرده‌ها', `<rect x="298" y="94" width="18" height="28" fill="#fff"/><circle cx="330" cy="108" r="16" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/><path d="M290 102 C310 100 324 104 334 112" stroke="${C.nerve}" stroke-width="5" fill="none"/>`)}
      ${f(180, 234, 'پسوند ‎-cele‎ یعنی فتق یا بیرون‌زدگی', { size: 9.5, fill: MUTED, w: 700 })}`, 'اسپینا بیفیدا');
  };

  A.hydrocephalus = () => {
    const H = (cx, big) => `${head(cx, 120, big ? 0.78 : 0.62)}<ellipse cx="${cx + 10}" cy="${big ? 92 : 98}" rx="${big ? 60 : 44}" ry="${big ? 52 : 40}" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.4"/><path d="M${cx - (big ? 20 : 12)} ${big ? 86 : 94} C${cx - 10} ${big ? 50 : 74} ${cx + 40} ${big ? 50 : 74} ${cx + (big ? 44 : 30)} ${big ? 86 : 94} C${cx + 30} ${big ? 116 : 104} ${cx} ${big ? 116 : 104} ${cx - (big ? 20 : 12)} ${big ? 86 : 94}Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4" ${big ? '' : 'transform="scale(1)"'}/>`;
    return svg(360, 270, `${title('هیدروسفالی: تجمع CSF در بطن‌ها')}
      ${H(90, false)}${H(260, true)}
      ${lab(90, 226, 'normal ventricles', 'بطن‌های طبیعی', { size: 10 })}
      ${lab(260, 226, 'hydrocephalus', 'بطن‌های گشاد، سر بزرگ', { size: 10, fill: '#1d77a8' })}
      ${f(180, 264, 'درمان: شانت بطنی-صفاقی (VP shunt)', { size: 9.5, fill: MUTED, w: 700 })}`, 'هیدروسفالی');
  };

  A['ms-myelin'] = () => {
    return svg(360, 236, `${title('ام‌اس (MS): تخریب غلاف میلین')}
      ${f(330, 44, 'آکسون سالم', { size: 9.5, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      <path d="M20 70 H340" stroke="${C.cellLine}" stroke-width="3"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${24 + i * 54}" y="61" width="48" height="18" rx="9" fill="${C.myelin}" stroke="${C.myelinLine}"/>`).join('')}
      ${zap(40, 54, 0.7)}${[90, 150, 210, 270].map(x => `<circle cx="${x}" cy="48" r="3" fill="#e5a500"/>`).join('')}
      ${f(330, 120, 'آکسون در ام‌اس', { size: 9.5, anchor: 'end', fill: '#c2413a', w: 800 })}
      <path d="M20 146 H340" stroke="${C.cellLine}" stroke-width="3"/>${[0, 3, 5].map(i => `<rect x="${24 + i * 54}" y="137" width="48" height="18" rx="9" fill="${C.myelin}" stroke="${C.myelinLine}"/>`).join('')}
      ${[1, 2, 4].map(i => `<rect x="${28 + i * 54}" y="139" width="40" height="14" rx="4" fill="#b9a3a3" opacity=".75"/>`).join('')}
      ${zap(40, 130, 0.7)}<circle cx="96" cy="124" r="3" fill="#e5a500"/><path d="M110 124 l6 -6 m0 6 l-6 -6" stroke="#c2413a" stroke-width="2"/>
      ${pin(110, 146, 110, 178)}${lab(110, 190, 'plaque', 'پلاک سفت (اسکلروز)', { size: 9.5 })}
      ${pin(240, 146, 250, 178)}${lab(250, 190, 'demyelination', 'از بین رفتن میلین', { size: 9.5 })}
      ${f(180, 230, 'پیام کند یا قطع می‌شود: ضعف، بی‌حسی، تاری دید', { size: 9.5, fill: MUTED, w: 700 })}`, 'ام‌اس');
  };

  A.degenerative = () => {
    return svg(360, 228, `${title('بیماری‌های تحلیل‌برنده عصبی')}
      ${card(8, 30, 112, 92, '#fdf3dc', '🧓', 'Alzheimer', 'فراموشی، زوال عقل', 'AD')}
      ${card(124, 30, 112, 92, '#eeeafb', '🤲', 'Parkinson', 'لرزش، سفتی، کندی', 'کمبود دوپامین')}
      ${card(240, 30, 112, 92, '#e1f6f3', '⚡', 'MS', 'تخریب میلین', 'دوره‌های عود')}
      ${card(66, 130, 112, 92, '#fde6e4', '💪', 'ALS', 'تحلیل نورون حرکتی', 'ضعف و آتروفی')}
      ${card(182, 130, 112, 92, '#e2f2fb', '💃', 'Huntington', 'حرکات رقص‌مانند', 'ارثی (chorea)')}`, 'بیماری‌های تحلیل‌برنده');
  };

  /* ================= دنیای ۴: سلامت روان ================= */
  A['mind-map'] = () => {
    const B = (x, y, w, c, bg, en, fa, ex) => `<rect x="${x}" y="${y}" width="${w}" height="70" rx="14" fill="${bg}" stroke="${c}" stroke-width="1.4"/>${t(x + w / 2, y + 22, en, { size: 10.5, fill: c, w: 900 })}${f(x + w / 2, y + 38, fa, { size: 9.5, fill: INK, w: 800 })}${t(x + w / 2, y + 57, ex, { size: 8.5, fill: MUTED })}`;
    return svg(360, 286, `${title('خانواده‌های اختلال روانی')}
      <circle cx="180" cy="148" r="34" fill="#eeeafb" stroke="#6c4fd0" stroke-width="2"/>${t(180, 146, '💭', { size: 20 })}${f(180, 168, 'سلامت روان', { size: 9, fill: '#5a3fbf', w: 800 })}
      <path d="M180 114 V100 M146 148 H122 M214 148 H238 M156 172 L120 206 M204 172 L240 206" stroke="#b7a3ea" stroke-width="2"/>
      ${B(110, 30, 140, '#e07a3a', '#fdeee3', 'anxiety disorders', 'اضطرابی', 'GAD • panic • phobia • OCD • PTSD')}
      ${B(4, 112, 118, '#3d6fd6', '#e2ecfb', 'mood disorders', 'خلقی', 'depression • bipolar')}
      ${B(238, 112, 118, '#c2413a', '#fde6e4', 'psychotic', 'روان‌پریشی', 'schizophrenia')}
      ${B(20, 206, 150, '#17a398', '#e1f6f3', 'developmental', 'رشدی', 'autism • ADHD')}
      ${B(190, 206, 150, '#8e6bd8', '#f3eefc', 'eating & somatic', 'خوردن و علائم جسمی', 'anorexia • bulimia • SSD')}`, 'اختلال‌های روانی');
  };

  A['fight-flight'] = () => {
    const R = (y, ic, fa) => `${t(54, y + 4, ic, { size: 16 })}${f(84, y + 4, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`;
    return svg(360, 262, `${title('پاسخ «جنگ یا گریز» در اضطراب')}
      ${head(270, 120, 0.62)}
      ${zap(300, 60, 1)}
      <rect x="20" y="40" width="190" height="196" rx="16" fill="#fdf0f0"/>
      ${R(66, '❤️', 'ضربان قلب تند (tachycardia)')}${R(98, '🫁', 'تنفس تند (tachypnea)')}${R(130, '💦', 'تعریق (diaphoresis)')}${R(162, '👁️', 'مردمک گشاد')}${R(194, '😰', 'نگرانی، بی‌قراری')}
      ${lab(268, 222, 'sympathetic', 'دستگاه سمپاتیک فعال می‌شود', { size: 10, fill: '#c2413a' })}
      ${f(180, 256, 'پاسخ طبیعی به استرس؛ اگر بی‌دلیل و مداوم باشد، اختلال اضطرابی است', { size: 9, fill: MUTED, w: 700 })}`, 'جنگ یا گریز');
  };

  A['mood-wave'] = () => {
    return svg(360, 258, `${title('خلق: افسردگی، طبیعی و شیدایی')}
      <rect x="30" y="40" width="310" height="44" fill="#fdf3dc"/><rect x="30" y="84" width="310" height="52" fill="#f6f8fa"/><rect x="30" y="136" width="310" height="44" fill="#e2ecfb"/>
      ${f(336, 54, 'شیدایی (mania)', { size: 9, anchor: 'end', fill: '#a87a12', w: 800 })}${f(336, 98, 'خلق طبیعی', { size: 9, anchor: 'end', fill: MUTED, w: 800 })}${f(336, 176, 'افسردگی (depression)', { size: 9, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      <path d="M30 110 C60 104 70 52 100 56 C130 60 130 160 166 160 C200 160 200 60 236 58 C270 56 270 164 306 160 C322 158 330 120 340 110" stroke="#6c4fd0" stroke-width="3" fill="none"/>
      <path d="M30 196 H340" stroke="#9aa5ab" stroke-width="1.4"/>${f(185, 212, 'زمان (هفته‌ها و ماه‌ها)', { size: 9, fill: MUTED })}
      ${lab(180, 234, 'bipolar disorder', 'اختلال دوقطبی: نوسان بین دو قطب', { size: 10, fill: '#5a3fbf' })}`, 'نوسان خلق');
  };

  A['psych-drugs'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 96, bg, ic, en, fa, sub);
    return svg(360, 236, `${title('داروهای روان‌پزشکی')}
      ${c2(8, 30, '🌤️', 'antidepressant', 'ضدافسردگی', 'مثل SSRI', '#e2ecfb')}
      ${c2(126, 30, '🧘', 'anxiolytic', 'ضداضطراب', 'آرام‌کننده', '#fdeee3')}
      ${c2(244, 30, '🧩', 'antipsychotic', 'ضدروان‌پریشی', 'neuroleptic', '#fde6e4')}
      ${c2(67, 134, '⚖️', 'mood stabilizer', 'تثبیت خلق', 'مثل lithium', '#f3eefc')}
      ${c2(185, 134, '🎯', 'stimulant', 'محرک', 'برای ADHD', '#e1f6f3')}`, 'داروهای روان‌پزشکی');
  };

  A.phobias = () => {
    const P = (x, y, ic, en, fa) => `<rect x="${x}" y="${y}" width="108" height="78" rx="14" fill="#f6f2fd"/>${t(x + 54, y + 28, ic, { size: 20 })}${t(x + 54, y + 50, en, { size: 10, fill: '#5a3fbf', w: 900 })}${f(x + 54, y + 66, fa, { size: 9, fill: INK })}`;
    return svg(360, 220, `${title('‎-phobia‎: ترس شدید و غیرمنطقی')}
      ${P(8, 30, '🏟️', 'agoraphobia', 'ترس از مکان شلوغ و باز')}${P(126, 30, '🚪', 'claustrophobia', 'ترس از فضای بسته')}${P(244, 30, '💡', 'photophobia', 'حساسیت به نور')}
      ${P(8, 118, '🌙', 'nyctophobia', 'ترس از شب و تاریکی')}${P(126, 118, '🕷️', 'arachnophobia', 'ترس از عنکبوت')}${P(244, 118, '🗻', 'acrophobia', 'ترس از ارتفاع')}
      ${f(180, 214, 'agora در یونانی یعنی بازار؛ claustr یعنی بسته', { size: 9, fill: MUTED, w: 700 })}`, 'فوبیاها');
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A.eeg = () => {
    const wave = (y, c, amp, per, n) => { let d = `M120 ${y}`; for (let i = 0; i < n; i++) d += ` q${per / 4} ${-amp} ${per / 2} 0 t${per / 2} 0`; return `<path d="${d}" stroke="${c}" stroke-width="1.8" fill="none"/>`; };
    return svg(360, 256, `${title('EEG: ثبت فعالیت الکتریکی مغز')}
      ${head(60, 132, 0.5)}
      ${[[36, 82], [56, 74], [76, 80], [42, 100], [66, 96], [86, 104]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#6c4fd0" stroke="#fff" stroke-width="1.4"/>`).join('')}
      <path d="M60 74 C80 50 100 50 118 56" stroke="#9aa5ab" stroke-width="1.4" fill="none"/>
      ${wave(62, '#3d6fd6', 7, 20, 11)}${f(340, 50, 'آلفا: بیدار و آرام', { size: 8.5, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      ${wave(110, '#17a398', 4, 10, 22)}${f(340, 96, 'بتا: هوشیار و فعال', { size: 8.5, anchor: 'end', fill: '#17a398', w: 800 })}
      ${wave(158, '#8e6bd8', 12, 44, 5)}${f(340, 140, 'دلتا: خواب عمیق', { size: 8.5, anchor: 'end', fill: '#8e6bd8', w: 800 })}
      ${wave(206, '#c2413a', 20, 12, 18)}${f(340, 188, 'تشنج: نامنظم و بلند', { size: 8.5, anchor: 'end', fill: '#c2413a', w: 800 })}
      ${pin(56, 74, 30, 190)}${lab(40, 202, 'electrodes', 'الکترودهای روی سر', { size: 9.5 })}
      ${f(180, 250, 'واژه electroencephalography یعنی روش ثبت برق مغز', { size: 9, fill: MUTED, w: 700 })}`, 'نوار مغز');
  };

  A['lumbar-puncture'] = () => {
    return svg(360, 270, `${title('پونکسیون کمری (LP): نمونه CSF از ناحیه کمر')}
      ${[0, 1, 2, 3, 4].map(i => vert(40 + i * 56, 150, 48, 54)).join('')}
      ${[0, 1, 2, 3].map(i => `<rect x="${88 + i * 56}" y="156" width="8" height="42" rx="3" fill="#a9c7e4"/>`).join('')}
      <rect x="20" y="118" width="320" height="24" fill="${C.csf}" stroke="${C.csfLine}"/>
      <rect x="20" y="114" width="320" height="4" fill="${C.dura}"/>
      <path d="M20 128 H150" stroke="${C.nerve}" stroke-width="10" stroke-linecap="round"/>
      <path d="M150 128 C200 126 260 132 340 130 M150 128 C200 132 260 124 340 136 M150 128 C210 122 270 128 340 124" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      <rect x="20" y="40" width="320" height="74" fill="${C.skin}" opacity=".6"/>
      <path d="M204 50 L204 132" stroke="#77868e" stroke-width="3"/><rect x="193" y="36" width="22" height="14" rx="3" fill="#cfd8dc" stroke="#77868e"/>
      ${['L1', 'L2', 'L3', 'L4', 'L5'].map((l, i) => t(64 + i * 56, 230, l, { size: 11, sym: true, fill: MUTED })).join('')}
      ${pin(204, 128, 270, 70)}${lab(300, 58, 'needle', 'سوزن بین L3 و L4', { size: 9.5 })}
      ${pin(60, 130, 70, 76)}${lab(70, 62, 'spinal cord ends', 'پایان نخاع (L1–L2)', { size: 9.5 })}
      ${pin(300, 136, 300, 100)}${t(334, 96, 'subarachnoid space', { size: 8.5, anchor: 'end', fill: '#1d77a8' })}
      ${f(180, 258, 'سوزن زیر پایان نخاع وارد می‌شود تا به نخاع آسیبی نرسد', { size: 9.5, fill: INK, w: 700 })}`, 'پونکسیون کمری');
  };

  A['brain-imaging'] = () => {
    const S = (x, en, fa, sub, inner) => `<rect x="${x}" y="34" width="108" height="108" rx="14" fill="#101418"/>${inner}${lab(x + 54, 162, en, fa, { size: 10 })}${f(x + 54, 190, sub, { size: 8.5 })}`;
    return svg(360, 212, `${title('تصویربرداری مغز')}
      ${S(8, 'CT', 'سی‌تی‌اسکن', 'سریع؛ خونریزی را نشان می‌دهد', `<ellipse cx="62" cy="88" rx="38" ry="44" fill="#cfd4d8"/><ellipse cx="62" cy="88" rx="33" ry="39" fill="#8b9499"/><path d="M52 74 q10 -6 20 0 M54 104 q8 6 16 0" stroke="#5c656a" stroke-width="3" fill="none"/><circle cx="80" cy="76" r="8" fill="#f2f4f5"/>`)}
      ${S(126, 'MRI', 'تصویربرداری مغناطیسی', 'جزئیات بافت نرم', `<ellipse cx="180" cy="88" rx="38" ry="44" fill="#3a4044"/><ellipse cx="180" cy="88" rx="33" ry="39" fill="#b8bec2"/><path d="M160 70 q20 -14 40 0 q-20 10 -40 0 M162 104 q18 12 36 0" stroke="#e6e9eb" stroke-width="3" fill="none"/><path d="M180 52 V124" stroke="#6b7378" stroke-width="2"/>`)}
      ${S(244, 'PET', 'تصویر فعالیت مغز', 'رنگ‌ها = سوخت‌وساز', `<ellipse cx="298" cy="88" rx="36" ry="42" fill="#1d3fa0"/><ellipse cx="286" cy="76" rx="14" ry="12" fill="#f2c94c"/><ellipse cx="310" cy="96" rx="12" ry="14" fill="#d9443a"/><ellipse cx="294" cy="108" rx="10" ry="8" fill="#3fbf6a"/>`)}`, 'تصویربرداری مغز');
  };

  A.gcs = () => {
    const B = (x, c, bg, L, en, fa, max) => `<rect x="${x}" y="34" width="108" height="118" rx="14" fill="${bg}"/><circle cx="${x + 54}" cy="64" r="20" fill="${c}"/>${t(x + 54, 71, L, { size: 18, fill: '#fff', w: 900, sym: true })}${t(x + 54, 104, en, { size: 10, fill: c, w: 900 })}${f(x + 54, 120, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 54, 140, max, { size: 9, fill: MUTED })}`;
    return svg(360, 232, `${title('مقیاس کمای گلاسگو (GCS): ۳ تا ۱۵')}
      ${B(8, '#e07a3a', '#fdeee3', 'E', 'eye opening', 'باز شدن چشم', '۱ تا ۴')}
      ${B(126, '#3d6fd6', '#e2ecfb', 'V', 'verbal', 'پاسخ کلامی', '۱ تا ۵')}
      ${B(244, '#17a398', '#e1f6f3', 'M', 'motor', 'پاسخ حرکتی', '۱ تا ۶')}
      <rect x="8" y="164" width="344" height="56" rx="12" fill="#f6f2fd"/>
      ${f(66, 186, '۱۵–۱۳', { size: 11, fill: '#46a302', w: 900 })}${f(66, 204, 'خفیف', { size: 9, fill: INK })}
      ${f(180, 186, '۱۲–۹', { size: 11, fill: '#e5a500', w: 900 })}${f(180, 204, 'متوسط', { size: 9, fill: INK })}
      ${f(294, 186, '۸ و کمتر', { size: 11, fill: '#c2413a', w: 900 })}${f(294, 204, 'شدید (کما)', { size: 9, fill: INK })}`, 'مقیاس گلاسگو');
  };

  A.craniotomy = () => {
    const b = brainSide(176, 176, 0.86, { lobes: false });
    return svg(360, 290, `${title('جراحی‌های جمجمه و ستون مهره')}
      <path d="M80 180 C74 104 124 74 178 74 C242 74 278 112 274 176" fill="none" stroke="${C.bone2}" stroke-width="10"/>
      ${b.b}
      <path d="M152 86 L206 84 L210 114 L150 116Z" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      ${pin(170, 92, 92, 62)}${lab(64, 48, 'craniotomy', 'برش و باز کردن جمجمه', { size: 10, fill: '#c2413a' })}
      ${pin(250, 100, 280, 66)}${lab(296, 48, 'craniectomy', 'برداشتن بخشی از جمجمه', { size: 9.5 })}
      <rect x="10" y="234" width="340" height="48" rx="12" fill="#f6f2fd"/>
      ${t(70, 254, 'laminectomy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(70, 270, 'برداشتن تیغه مهره', { size: 9, fill: INK })}
      ${t(180, 254, 'neurorrhaphy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(180, 270, 'بخیه عصب', { size: 9, fill: INK })}
      ${t(290, 254, 'rhizotomy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(290, 270, 'قطع ریشه عصب', { size: 9, fill: INK })}`, 'جراحی اعصاب', b.d);
  };

  A['vp-shunt'] = () => {
    return svg(360, 300, `${title('شانت بطنی-صفاقی (VP shunt)')}
      ${mannequin(180, 30, 1.05)}
      <ellipse cx="180" cy="53" rx="14" ry="16" fill="${C.brain}" stroke="${C.brainLine}"/><ellipse cx="182" cy="52" rx="7" ry="6" fill="${C.csf}" stroke="${C.csfLine}"/>
      <path d="M184 50 C196 44 204 56 200 72 C196 90 200 110 198 140 C196 170 190 190 186 206" stroke="#2e9bd6" stroke-width="3" fill="none"/>
      <circle cx="200" cy="66" r="4" fill="#fff" stroke="#2e9bd6" stroke-width="2"/>
      <ellipse cx="180" cy="200" rx="30" ry="18" fill="#fde6c4" opacity=".7"/>
      ${pin(182, 52, 100, 40)}${lab(70, 36, 'ventricle', 'بطن مغز', { size: 10 })}
      ${pin(200, 66, 270, 64)}${lab(300, 58, 'valve', 'دریچه یک‌طرفه', { size: 10 })}
      ${pin(198, 130, 270, 130)}${lab(300, 124, 'catheter', 'لوله زیر پوست', { size: 10 })}
      ${pin(186, 204, 100, 222)}${lab(66, 220, 'peritoneum', 'حفره صفاق (شکم)', { size: 10 })}
      ${f(180, 294, 'درمان هیدروسفالی: CSF اضافی به شکم تخلیه می‌شود', { size: 9.5, fill: INK, w: 700 })}`, 'شانت');
  };

  A['neuro-drugs'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 96, bg, ic, en, fa, sub);
    return svg(360, 236, `${title('داروهای دستگاه عصبی')}
      ${c2(8, 30, '💊', 'analgesic', 'مسکن (ضد درد)', 'بدون بیهوشی', '#e2ecfb')}
      ${c2(126, 30, '😴', 'anesthetic', 'بی‌حسی یا بیهوشی', 'local • general', '#f3eefc')}
      ${c2(244, 30, '⚡', 'anticonvulsant', 'ضدتشنج', 'برای صرع', '#fdeee3')}
      ${c2(8, 134, '🌙', 'hypnotic', 'خواب‌آور', 'hypn/o = خواب', '#e1f6f3')}
      ${c2(126, 134, '🧪', 'thrombolytic', 'لخته‌شکن', 'سکته ایسکمیک', '#fde6e4')}
      ${c2(244, 134, '🧠', 'dopaminergic', 'افزایش دوپامین', 'پارکینسون', '#fdf3dc')}`, 'داروهای عصبی');
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۰: زبان عصب (پایه همه دنیاها)
 * پیش از رفتن سراغ مغز و نخاع دو چیز را یاد می‌گیریم: «دستگاه عصبی چه بخش‌هایی دارد» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: بخش‌های دستگاه عصبی • سطح ۲: ریشه‌های اصلی • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: 'زبان عصب', short: 'زبان عصب', sub: 'دستگاه عصبی چه بخش‌هایی دارد و واژه‌هایش چطور ساخته می‌شوند: ریشه، پیشوند و پسوند',
    color: '#6C4FD0', dark: '#4B3499', light: '#EEEAFB',
    levels: ['بخش‌های دستگاه عصبی', 'ریشه‌های اصلی', 'پیشوندها و پسوندها'],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: بخش‌های دستگاه عصبی ================= */
      {
        id: 'lx1', title: 'مرکزی و محیطی', icon: '🧠', items: [
          L('دو بخش بزرگ', `${fig('ns-overview', [], 'دستگاه عصبی مرکزی و محیطی')}دستگاه عصبی پیام‌ها را می‌گیرد، تحلیل می‌کند و فرمان می‌دهد. دو بخش دارد:<br>• ${e('<b>central nervous system (CNS)</b>')}: مغز و نخاع<br>• ${e('<b>peripheral nervous system (PNS)</b>')}: همه عصب‌های بیرون از مغز و نخاع؛ ۱۲ جفت عصب جمجمه‌ای و ۳۱ جفت عصب نخاعی`),
          L('متخصص‌ها', `${tbl([['متخصص', 'کار'], [e('neurologist'), 'بیماری‌های دستگاه عصبی؛ جراحی نمی‌کند'], [e('neurosurgeon'), 'جراحی مغز، نخاع و عصب'], [e('psychiatrist'), 'پزشک اختلال‌های روانی؛ دارو تجویز می‌کند'], [e('psychologist'), 'روان‌شناس؛ آزمون و روان‌درمانی']])}${memo('neurologist با دارو و معاینه درمان می‌کند و neurosurgeon با چاقوی جراحی.')}${pearl('در پرونده ویلیام (Case Study کتاب Cohen) تیم درمان او pediatrician، neurosurgeon، neurologist و متخصص PM&R بودند.')}`),
          M('دستگاه عصبی مرکزی (CNS) از چه ساخته شده است؟', ['مغز و نخاع', 'مغز و عصب‌های جمجمه‌ای', 'نخاع و عصب‌های نخاعی', 'همه عصب‌های بدن'], 'CNS = brain + spinal cord.', null, F('ns-overview', [])),
          M(`${e('<b>neurologist</b>')} کیست؟`, ['متخصص بیماری‌های دستگاه عصبی', 'جراح مغز و اعصاب', 'روان‌پزشک', 'متخصص بیهوشی'], 'neur/o (عصب) + -logist (متخصص).'),
          T('عصب‌های جمجمه‌ای و نخاعی جزو دستگاه عصبی محیطی (PNS) هستند.', true, 'هر چیزی بیرون از مغز و نخاع = PNS.'),
          P('هر بخش را به گروهش وصل کن', [['brain', 'CNS'], ['sciatic nerve', 'PNS'], ['neurosurgeon', 'جراح'], ['psychiatrist', 'روان‌پزشک']], 'دو بخش و دو متخصص.'),
          B('اختصار ___ یعنی دستگاه عصبی محیطی.', ['PNS', 'CNS', 'ANS'], 'peripheral nervous system.'),
          O('مسیر یک پیام حسی را بچین', ['receptor in skin', 'sensory nerve', 'spinal cord', 'brain'], 'از گیرنده تا مغز.'),
          S('املای انگلیسی «متخصص مغز و اعصاب» را بنویس', 'neurologist', 'neur/o + -logist.', 'neuro…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: 'نورون: سلول پیام‌رسان', icon: '⚡', items: [
          L('ساختار نورون', `${fig('neuron', [], 'نورون')}${e('<b>neuron</b>')} سلول پایه دستگاه عصبی است:<br>• ${e('<b>dendrites</b>')}: شاخه‌هایی که پیام را <b>می‌گیرند</b><br>• ${e('<b>cell body</b>')}: جسم سلولی با هسته<br>• ${e('<b>axon</b>')}: رشته بلندی که پیام را <b>دور</b> از جسم سلولی می‌برد<br>• ${e('<b>myelin sheath</b>')}: غلاف چربی سفید دور آکسون که پیام را سریع‌تر می‌کند`),
          L('عصب و پشتیبان‌ها', `${e('<b>nerve</b>')} دسته‌ای از آکسون‌ها بیرون از CNS است.<br>${wb('neur/o', '-glia')} ← ${e('<b>neuroglia</b>')}: سلول‌های پشتیبان که نورون‌ها را نگه می‌دارند و تغذیه می‌کنند (${e('gli/o')} = چسب).${memo('Dendrite مثل درخت (dendr/o) پیام را جمع می‌کند و Axon مثل کابل آن را می‌برد.')}${pearl('تومور مغزی گلیوما (glioma) از همین سلول‌های پشتیبان رشد می‌کند، نه از خود نورون.')}`),
          M('کدام بخش نورون پیام را به سوی جسم سلولی می‌آورد؟', ['دندریت', 'آکسون', 'غلاف میلین', 'پایانه آکسون'], 'dendr/o = درخت؛ شاخه‌های گیرنده.', null, F('neuron', [])),
          M(`کار ${e('<b>myelin sheath</b>')} چیست؟`, ['عایق آکسون و سرعت دادن به پیام', 'ساختن ناقل عصبی', 'تغذیه مغز', 'گرفتن پیام از نورون دیگر'], 'غلاف چربی سفید.'),
          T('گلیا (neuroglia) سلول‌های پشتیبان دستگاه عصبی‌اند.', true, 'gli/o = چسب.'),
          O('مسیر پیام در یک نورون را بچین', ['dendrite', 'cell body', 'axon', 'axon terminal'], 'گرفتن، پردازش، فرستادن.'),
          P('هر بخش را به کارش وصل کن', [['dendrite', 'گرفتن پیام'], ['axon', 'بردن پیام'], ['myelin', 'عایق'], ['neuroglia', 'پشتیبانی']], 'اجزای بافت عصبی.'),
          B('رشته بلند نورون که پیام را دور می‌برد ___ نام دارد.', ['axon', 'dendrite', 'nerve root'], 'axon.'),
          S('املای انگلیسی «نورون» را بنویس', 'neuron', 'neur/o = عصب.', 'neu…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: 'آناتومی یک واژه', icon: '🧩', items: [
          L('واژه پزشکی یک پازل است', `${fig('wordparts', [], 'پیشوند + ریشه + پسوند')}هر واژه از قطعه‌هایی ساخته می‌شود:<br>• <b>ریشه</b>: معنی اصلی؛ مثل ${e('neur')} = عصب<br>• <b>پیشوند</b>: اول واژه؛ مثل ${e('hemi-')} = نیم<br>• <b>پسوند</b>: آخر واژه؛ مثل ${e('-itis')} = التهاب<br>• <b>واکه رابط</b> (معمولاً ${e('o')}): ${e('neur/o/logy')}`),
          L('قاعده طلایی', `معنی را از <b>پسوند</b> شروع کن، بعد <b>پیشوند</b> و آخر <b>ریشه</b>:<br>${wb('neur/o', '-itis')} ← «التهابِ عصب»<br>${wb('hemi-', '-plegia')} ← «فلجِ نیمه بدن»<br>${wb('encephal/o', '-pathy')} ← «بیماریِ مغز»${memo('اگر پسوند با حرف صدادار شروع شود، واکه رابط حذف می‌شود: neur/o + -itis می‌شود neuritis، نه neuroitis.')}`),
          M(`${e('<b>neuritis</b>')} یعنی…`, ['التهاب عصب', 'درد عصب', 'بیماری مغز', 'تومور عصب'], 'neur/o + -itis.'),
          M(`در ${e('<b>hemiplegia</b>')} پیشوند کدام است؟`, ['hemi- = نیم', '‎-plegia = فلج', '‎-ia = حالت', 'he- = خون'], 'hemi + pleg + ia.', null, F('wordparts', [])),
          T('در encephalitis واکه رابط o حذف شده است.', true, 'encephal + itis = التهاب مغز.'),
          W('واژه‌ای بساز به معنی «بیماری مغز»', ['encephal/o', '-pathy'], ['neur/o', '-itis', 'hemi-'], 'encephal/o + -pathy = encephalopathy.'),
          O('معنی hemiplegia را با قاعده طلایی بخوان؛ ترتیب را بچین', ['‎-ia: حالت', '‎-pleg: فلج', 'hemi-: نیم', 'نتیجه: حالت فلج نیمه بدن'], 'پسوند ← ریشه ← پیشوند.'),
          P('هر قطعه را به نوعش وصل کن', [['hemi-', 'پیشوند'], ['neur/o', 'ریشه'], ['-itis', 'پسوند'], ['o در neurology', 'واکه رابط']], 'سه قطعه + واکه رابط.'),
          S('املای انگلیسی «التهاب مغز» را بنویس', 'encephalitis', 'encephal/o + -itis.', 'encep…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: 'ریشه‌های عصب و نخاع', icon: '🧵', items: [
          L('پنج ریشه پرکاربرد', `${tbl([['ریشه', 'معنی', 'مثال'], [e('neur/o'), 'عصب', e('neuralgia')], [e('myel/o'), 'نخاع (یا مغز استخوان)', e('myelitis')], [e('mening/o'), 'پرده‌های مغز', e('meningitis')], [e('gli/o'), 'سلول پشتیبان', e('glioma')], [e('radicul/o'), 'ریشه عصب', e('radiculopathy')]])}`),
          L('چند واژه نمونه', `${wb('neur/o', '-algia')} ← ${e('<b>neuralgia</b>')}: درد در مسیر عصب<br>${wb('myel/o', '-itis')} ← ${e('<b>myelitis</b>')}: التهاب نخاع<br>${wb('mening/o', '-itis')} ← ${e('<b>meningitis</b>')}: التهاب پرده‌های مغز و نخاع<br>${wb('radicul/o', '-pathy')} ← ${e('<b>radiculopathy</b>')}: بیماری ریشه عصب نخاعی${pearl('در Case Study 7-1 کتاب، یکی از واژه‌های خواسته‌شده «inflammation of the meninges» بود: meningitis.')}`),
          M(`ریشه ${e('<b>myel/o</b>')} در دستگاه عصبی یعنی…`, ['نخاع', 'عضله', 'مغز', 'میلین'], 'myel/o = نخاع؛ در استخوان یعنی مغز استخوان.'),
          M('«درد در مسیر عصب» با کدام واژه نوشته می‌شود؟', ['neuralgia', 'neuritis', 'neuropathy', 'neurolysis'], 'neur/o + -algia.'),
          T('meningitis یعنی التهاب پرده‌های مغز و نخاع.', true, 'mening/o = مننژ.'),
          W('واژه‌ای بساز به معنی «بیماری ریشه عصب»', ['radicul/o', '-pathy'], ['myel/o', '-itis', 'neur/o'], 'radicul/o + -pathy.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['neur/o', 'عصب'], ['myel/o', 'نخاع'], ['mening/o', 'پرده‌های مغز'], ['radicul/o', 'ریشه عصب']], 'ریشه‌های عصب و نخاع.'),
          B('ریشه ___ یعنی سلول پشتیبان (چسب) دستگاه عصبی.', ['gli/o', 'gangli/o', 'neur/o'], 'glioma = تومور گلیا.'),
          S('املای انگلیسی «التهاب نخاع» را بنویس', 'myelitis', 'myel/o + -itis.', 'myel…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: 'ریشه‌های مغز و سر', icon: '🗺️', items: [
          L('نقشه ریشه‌ها', `${fig('root-map', [], 'نقشه ریشه‌ها')}${tbl([['ریشه', 'معنی'], [e('encephal/o'), 'مغز (کل مغز)'], [e('cerebr/o'), 'مخ؛ بزرگ‌ترین بخش مغز'], [e('cerebell/o'), 'مخچه'], [e('crani/o'), 'جمجمه'], [e('cephal/o'), 'سر']])}`),
          L('واژه‌سازی', `${wb('cerebr/o', 'spin/o', '-al')} ← ${e('<b>cerebrospinal</b>')}: مربوط به مغز و نخاع<br>${wb('intra-', 'crani/o', '-al')} ← ${e('<b>intracranial</b>')}: درون جمجمه<br>${wb('cephal/o', '-algia')} ← ${e('<b>cephalalgia</b>')}: سردرد${memo('encephal/o یعنی «درون سر» (en = درون، cephal = سر)؛ یعنی همان مغز.')}`),
          M(`ریشه ${e('<b>crani/o</b>')} یعنی…`, ['جمجمه', 'مخ', 'سر', 'مخچه'], 'cranium = جمجمه.', null, F('root-map', [])),
          M('«سردرد» با کدام واژه نوشته می‌شود؟', ['cephalalgia', 'encephalitis', 'craniotomy', 'cerebralgia'], 'cephal/o + -algia.'),
          T('cerebell/o یعنی مخچه و cerebr/o یعنی مخ.', true, 'مخچه کوچک‌تر و پشت مخ است.'),
          W('واژه‌ای بساز به معنی «درون جمجمه»', ['intra-', 'crani/o', '-al'], ['sub-', 'cerebr/o', '-itis'], 'intra- + crani/o + -al.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['encephal/o', 'مغز'], ['cerebr/o', 'مخ'], ['crani/o', 'جمجمه'], ['cephal/o', 'سر']], 'ریشه‌های سر.'),
          B('واژه ___ یعنی «مربوط به مغز و نخاع».', ['cerebrospinal', 'craniospinal', 'encephalomyel'], 'cerebrospinal fluid = CSF.'),
          S('املای انگلیسی «درون جمجمه» را بنویس', 'intracranial', 'intra- + crani/o + -al.', 'intra…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: 'ذهن، حس و حرکت', icon: '💭', items: [
          L('ریشه‌های ذهن و حس', `${tbl([['ریشه', 'معنی', 'مثال'], [e('psych/o'), 'روان، ذهن', e('psychiatry')], [e('esthesi/o'), 'حس', e('anesthesia')], [e('phas/o'), 'گفتار', e('aphasia')], [e('tax/o'), 'نظم، هماهنگی', e('ataxia')], [e('somn/o'), 'خواب', e('insomnia')]])}`),
          L('چند واژه', `${wb('psych/o', 'iatr/o', '-y')} ← ${e('<b>psychiatry</b>')}: درمان روان (${e('iatr/o')} = درمان)<br>${wb('an-', 'esthesi/o', '-ia')} ← ${e('<b>anesthesia</b>')}: بی‌حسی<br>${wb('in-', 'somn/o', '-ia')} ← ${e('<b>insomnia</b>')}: بی‌خوابی${memo('psyche در یونانی هم «روان» است و هم «پروانه»؛ psych با p بی‌صدا شروع می‌شود.')}${pearl('در پرونده Jane (Case Study 7-2) داروی او را psychiatrist تغییر داده بود.')}`),
          M(`ریشه ${e('<b>esthesi/o</b>')} یعنی…`, ['حس', 'خواب', 'گفتار', 'حرکت'], 'anesthesia = بی‌حسی.'),
          M(`${e('<b>insomnia</b>')} یعنی…`, ['بی‌خوابی', 'خواب‌آلودگی', 'حمله خواب', 'راه رفتن در خواب'], 'in- (نا) + somn/o (خواب) + -ia.'),
          T('psychiatry یعنی شاخه‌ای از پزشکی که اختلال‌های روانی را درمان می‌کند.', true, 'psych/o + iatr/o + -y.'),
          W('واژه‌ای بساز به معنی «بی‌حسی»', ['an-', 'esthesi/o', '-ia'], ['dys-', 'phas/o', 'somn/o'], 'an- + esthesi/o + -ia.'),
          P('هر ریشه را به معنی‌اش وصل کن', [['psych/o', 'روان'], ['phas/o', 'گفتار'], ['tax/o', 'هماهنگی'], ['somn/o', 'خواب']], 'ذهن، حس و حرکت.'),
          B('ریشه ___ یعنی «درمان، پزشک».', ['iatr/o', 'psych/o', 'esthesi/o'], 'psychiatry، pediatrics.'),
          S('املای انگلیسی «روان‌پزشکی» را بنویس', 'psychiatry', 'p اول بی‌صداست.', 'psych…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: 'پیشوندهای عصبی', icon: '⏱️', items: [
          L('پیشوندهای پرکاربرد', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('a-, an-'), 'بدون', e('aphasia')], [e('dys-'), 'دشوار، نابه‌هنجار', e('dysphasia')], [e('hemi-'), 'نیم', e('hemiplegia')], [e('para-'), 'کنار؛ نابه‌هنجار', e('paresthesia')], [e('quadri-'), 'چهار', e('quadriplegia')]])}`),
          L('جای پیشوندها', `${tbl([['پیشوند', 'معنی', 'مثال'], [e('epi-'), 'روی', e('epidural')], [e('sub-'), 'زیر', e('subdural')], [e('intra-'), 'درون', e('intracranial')], [e('inter-'), 'بین', e('interneuron')], [e('poly-'), 'چند', e('polyneuritis')]])}${memo('epidural بالای سخت‌شامه است و subdural زیر آن؛ مثل طبقه بالا و پایین یک ساختمان.')}`),
          M(`${e('<b>aphasia</b>')} یعنی…`, ['ناتوانی در گفتار یا فهم آن', 'گفتار دشوار', 'گفتار تند', 'ناتوانی در خواندن'], 'a- (بدون) + -phasia (گفتار).'),
          M('پیشوند «چهار» کدام است؟', ['quadri-', 'hemi-', 'para-', 'poly-'], 'quadriplegia = فلج چهار اندام.'),
          T('subdural یعنی زیر سخت‌شامه.', true, 'sub- = زیر؛ dur/o = سخت‌شامه.'),
          W('واژه‌ای بساز به معنی «التهاب چند عصب»', ['poly-', 'neur/o', '-itis'], ['hemi-', 'myel/o', '-algia'], 'poly- + neur/o + -itis.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['dys-', 'دشوار'], ['hemi-', 'نیم'], ['epi-', 'روی'], ['inter-', 'بین']], 'پیشوندهای پایه.'),
          B('اختلال گفتار (دشوار شدن گفتار) ___ نام دارد.', ['dysphasia', 'aphasia', 'dyslexia'], 'dys- + -phasia.'),
          S('املای انگلیسی «زبان‌پریشی» را بنویس', 'aphasia', 'a- + -phasia.', 'apha…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: 'پسوندهای عصبی', icon: '✂️', items: [
          L('پسوندهای نشانه', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-plegia'), 'فلج', e('paraplegia')], [e('-paresis'), 'ضعف، فلج ناقص', e('hemiparesis')], [e('-phasia'), 'گفتار', e('dysphasia')], [e('-esthesia'), 'حس', e('paresthesia')], [e('-algia'), 'درد', e('neuralgia')]])}`),
          L('پسوندهای بیماری', `${tbl([['پسوند', 'معنی', 'مثال'], [e('-lepsy'), 'حمله، تشنج', e('epilepsy')], [e('-mnesia'), 'حافظه', e('amnesia')], [e('-pathy'), 'بیماری', e('neuropathy')], [e('-oma'), 'تومور', e('meningioma')], [e('-cele'), 'فتق، بیرون‌زدگی', e('meningocele')]])}${memo('narcolepsy یعنی «حمله خواب»: narc/o کرختی و ‎-lepsy‎ حمله.')}`),
          M(`پسوند ${e('<b>-paresis</b>')} یعنی…`, ['ضعف یا فلج ناقص', 'فلج کامل', 'درد', 'حس'], 'hemiparesis = ضعف نیمه بدن.'),
          M(`${e('<b>amnesia</b>')} یعنی…`, ['فراموشی', 'بی‌حسی', 'بی‌خوابی', 'زبان‌پریشی'], 'a- + -mnesia (حافظه).'),
          T('پسوند ‎-lepsy‎ یعنی حمله یا تشنج.', true, 'epilepsy، narcolepsy.'),
          W('واژه‌ای بساز به معنی «تومور پرده‌های مغز»', ['meningi/o', '-oma'], ['neur/o', '-cele', 'gli/o'], 'meningi/o + -oma = meningioma.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-plegia', 'فلج'], ['-algia', 'درد'], ['-pathy', 'بیماری'], ['-cele', 'فتق']], 'پسوندهای پایه.'),
          B('بیرون‌زدگی پرده‌های مغز از شکاف استخوان ___ نام دارد.', ['meningocele', 'meningioma', 'meningitis'], 'mening/o + -cele.'),
          S('املای انگلیسی «صرع» را بنویس', 'epilepsy', 'epi- + -lepsy.', 'epil…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: 'دام‌های همزاد', icon: '🪤', items: [
          L('یک حرف، دو معنی', `${fig('twins', [], 'جفت‌های فریبنده')}${vs(['myel/o', 'نخاع'], ['my/o', 'عضله'])}${vs(['-plegia', 'فلج کامل'], ['-paresis', 'ضعف، فلج ناقص'])}`),
          L('جفت‌های دیگر', `${vs(['-phasia', 'گفتار (صحبت)'], ['-phagia', 'بلعیدن (خوردن)'])}${vs(['-lexia', 'خواندن'], ['-lalia', 'حرف زدن، وراجی'])}${memo('aphasia یعنی نمی‌تواند حرف بزند و aphagia یعنی نمی‌تواند ببلعد؛ phas = phrase و phag = خوردن.')}`),
          M(`${e('<b>myositis</b>')} یعنی التهاب…`, ['عضله', 'نخاع', 'میلین', 'مغز استخوان'], 'my/o = عضله؛ myel/o = نخاع.', null, F('twins', [])),
          M('ضعف یک طرف بدن بدون فلج کامل چه نام دارد؟', ['hemiparesis', 'hemiplegia', 'paraplegia', 'quadriplegia'], '‎-paresis‎ = ضعف.'),
          T('dysphagia یعنی دشواری در بلعیدن، نه گفتار.', true, '‎-phagia‎ = خوردن، بلعیدن.'),
          W('واژه‌ای بساز به معنی «فلج نیمه بدن»', ['hemi-', '-plegia'], ['-paresis', 'para-', 'my/o'], 'hemi- + -plegia.'),
          P('هر جفت را درست وصل کن', [['-phasia', 'گفتار'], ['-phagia', 'بلعیدن'], ['-lexia', 'خواندن'], ['my/o', 'عضله']], 'دام‌های همزاد.'),
          B('در Exercise 7-9، بیمار پس از سکته ضعف سمت راست داشت؛ یعنی ___.', ['right hemiparesis', 'right hemiplegia', 'paraplegia'], 'ضعف = ‎-paresis‎.'),
          S('املای انگلیسی «ضعف نیمه بدن» را بنویس', 'hemiparesis', 'hemi- + -paresis.', 'hemip…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۱: مغز و نخاع (دستگاه عصبی مرکزی)
 * سطح ۱: مغز و لوب‌ها • سطح ۲: پرده‌ها، بطن‌ها و CSF • سطح ۳: نخاع و سطوح آن */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'cn', sym: 'Cn', name: 'مغز و نخاع', short: 'مغز و نخاع', sub: 'مخ و لوب‌ها، مخچه، ساقه مغز، مننژ، بطن‌ها و مایع مغزی-نخاعی، و نخاع',
    color: '#E0708C', dark: '#B04A66', light: '#FDE6EC',
    levels: ['مغز و لوب‌ها', 'پرده‌ها، بطن‌ها و CSF', 'نخاع'],
    gens: EA.genIds('cn'),
    lessons: [
      /* ================= سطح ۱: مغز و لوب‌ها ================= */
      {
        id: 'cn1', title: 'لوب‌های مخ', icon: '🧠', items: [
          L('مخ و دو نیمکره', `${fig('brain-lobes', [], 'لوب‌های مخ')}${e('<b>cerebrum</b>')} (مخ) بزرگ‌ترین بخش مغز است و به دو ${e('<b>cerebral hemisphere</b>')} چپ و راست تقسیم می‌شود. سطح آن پر از چین است:<br>• ${e('<b>gyrus</b>')} (جمع: ${e('gyri')}): برآمدگی<br>• ${e('<b>sulcus</b>')} (جمع: ${e('sulci')}): شیار کم‌عمق<br>• ${e('<b>fissure</b>')}: شکاف عمیق، مثل شکاف بین دو نیمکره`),
          L('چهار لوب', `${tbl([['لوب', 'کار اصلی'], [e('frontal'), 'حرکت ارادی، برنامه‌ریزی، شخصیت، گفتار'], [e('parietal'), 'حس لمس، درد و دما'], [e('temporal'), 'شنوایی، بویایی، فهم گفتار'], [e('occipital'), 'بینایی و تفسیر تصویر']])}${memo('از جلو به عقب: «پیشانی، آهیانه، پس‌سری»؛ و گیجگاهی کنار گوش است.')}${pearl(`${e('corpus callosum')} نوار پهنی از رشته‌های سفید است که دو نیمکره را به هم وصل می‌کند.`)}`),
          M('بزرگ‌ترین بخش مغز کدام است؟', ['cerebrum', 'cerebellum', 'brainstem', 'thalamus'], 'Pretest کتاب Cohen: The largest part of the brain is the cerebrum.', null, F('brain-lobes', [])),
          M('بینایی در کدام لوب پردازش می‌شود؟', ['occipital', 'frontal', 'temporal', 'parietal'], 'لوب پس‌سری.'),
          T('gyri برآمدگی‌ها و sulci شیارهای سطح مخ هستند.', true, 'gyrus = چین برآمده.'),
          O('لوب‌ها را از جلو به عقب بچین', ['frontal', 'parietal', 'occipital'], 'پیشانی، آهیانه، پس‌سری.'),
          P('هر لوب را به کارش وصل کن', [['frontal', 'حرکت ارادی'], ['parietal', 'حس لمس'], ['temporal', 'شنوایی'], ['occipital', 'بینایی']], 'چهار لوب مخ.'),
          B('نوار سفیدی که دو نیمکره را به هم وصل می‌کند ___ نام دارد.', ['corpus callosum', 'cerebellum', 'pons'], 'جسم پینه‌ای.'),
          S('املای انگلیسی «مخ» را بنویس', 'cerebrum', 'cerebr/o + -um.', 'cereb…'),
          N('t2f:cn')
        ]
      },
      {
        id: 'cn2', title: 'هر بخش، یک کار', icon: '🎯', items: [
          L('مراکز قشر مخ', `${fig('brain-functions', [], 'کارکرد بخش‌های مغز')}${e('<b>cerebral cortex</b>')} لایه نازک ماده خاکستری روی مخ است. چند مرکز مهم:<br>• ${e('<b>motor area</b>')}: جلوی شیار مرکزی؛ حرکت ارادی<br>• ${e('<b>sensory area</b>')}: پشت شیار مرکزی؛ لمس و درد<br>• ${e('<b>Broca area</b>')}: در لوب پیشانی چپ؛ تولید گفتار<br>• ${e('<b>Wernicke area</b>')}: در لوب گیجگاهی؛ فهم گفتار`),
          L('چپ و راست', `هر نیمکره نیمه <b>مخالف</b> بدن را کنترل می‌کند. آسیب نیمکره چپ ← فلج سمت راست بدن و اغلب ${e('aphasia')}.${memo('Broca = Build (ساختن جمله)؛ Wernicke = Word meaning (فهم واژه).')}${pearl('سناریوی APPLY کتاب: آقای Robert Jones پس از ضربه به سر در خواندن مشکل دارد و حواسش پرت می‌شود؛ پس احتمالاً لوب پس‌سری (خواندن و بینایی) و پیشانی آسیب دیده‌اند.')}`),
          M('مرکز تولید گفتار کدام است؟', ['Broca area', 'Wernicke area', 'visual area', 'sensory area'], 'Broca در لوب پیشانی چپ.', null, F('brain-functions', [])),
          M('آسیب نیمکره چپ مغز معمولاً کدام سمت بدن را فلج می‌کند؟', ['راست', 'چپ', 'هر دو', 'هیچ‌کدام'], 'کنترل ضربدری.'),
          T('Wernicke area در فهم گفتار نقش دارد.', true, 'در لوب گیجگاهی.'),
          M('آقای Robert Jones پس از ضربه به سر به‌سختی می‌خواند؛ کدام لوب احتمالاً آسیب دیده است؟', ['occipital', 'temporal', 'parietal', 'cerebellum'], 'خواندن به بینایی وابسته است.'),
          P('هر مرکز را به کارش وصل کن', [['Broca area', 'تولید گفتار'], ['Wernicke area', 'فهم گفتار'], ['motor area', 'حرکت ارادی'], ['sensory area', 'حس لمس و درد']], 'مراکز قشر مخ.'),
          B('لایه خاکستری روی مخ ___ نام دارد.', ['cerebral cortex', 'white matter', 'dura mater'], 'cortic/o = قشر.'),
          S('املای انگلیسی «قشر مخ» را بنویس', 'cerebral cortex', 'cortex = لایه بیرونی.', 'cerebral c…'),
          N('f2t:cn')
        ]
      },
      {
        id: 'cn3', title: 'دیانسفال، ساقه و مخچه', icon: '🔎', items: [
          L('بخش‌های میانی', `${fig('brain-sagittal', [], 'برش میانی مغز')}${e('<b>diencephalon</b>')} (مغز میانی پیشین) دو بخش دارد:<br>• ${e('<b>thalamus</b>')}: ایستگاه رله پیام‌های حسی به قشر مخ<br>• ${e('<b>hypothalamus</b>')}: زیر تالاموس؛ دمای بدن، گرسنگی، تشنگی، خواب و غده هیپوفیز`),
          L('ساقه و مخچه', `${e('<b>brainstem</b>')} سه بخش دارد: ${e('midbrain')}، ${e('pons')} و ${e('medulla oblongata')}. بصل‌النخاع تنفس، ضربان قلب و فشار خون را کنترل می‌کند.<br>${e('<b>cerebellum</b>')} (مخچه) پشت ساقه است و تعادل و هماهنگی حرکت را تنظیم می‌کند.${memo('ساقه مغز از بالا به پایین: میانی، پل، بصل؛ مثل ساقه گل که به نخاع می‌رسد.')}${pearl('Pretest کتاب Cohen: مغز میانی، پل و بصل‌النخاع با هم brainstem را می‌سازند.')}`),
          M('midbrain، pons و medulla oblongata با هم چه نام دارند؟', ['brainstem', 'cerebellum', 'diencephalon', 'spinal cord'], 'ساقه مغز.', null, F('brain-sagittal', [])),
          M('کدام بخش تعادل و هماهنگی حرکت را کنترل می‌کند؟', ['cerebellum', 'thalamus', 'medulla', 'frontal lobe'], 'مخچه.'),
          T('hypothalamus دمای بدن، تشنگی و گرسنگی را تنظیم می‌کند.', true, 'hypo- = زیر + thalamus.'),
          O('ساقه مغز را از بالا به پایین بچین', ['midbrain', 'pons', 'medulla oblongata', 'spinal cord'], 'میانی، پل، بصل، نخاع.'),
          P('هر بخش را به کارش وصل کن', [['thalamus', 'رله حسی'], ['hypothalamus', 'دما و تشنگی'], ['medulla oblongata', 'تنفس و ضربان قلب'], ['cerebellum', 'تعادل']], 'بخش‌های عمقی مغز.'),
          W('واژه‌ای بساز به معنی «زیر تالاموس»', ['hypo-', 'thalam/o', '-us'], ['sub-', 'cerebell/o', '-ic'], 'hypo- + thalam/o + -us.'),
          S('املای انگلیسی «مخچه» را بنویس', 'cerebellum', 'cerebell/o + -um.', 'cerebe…'),
          N('d2t:cn')
        ]
      },
      /* ================= سطح ۲: پرده‌ها، بطن‌ها و CSF ================= */
      {
        id: 'cn4', title: 'مننژ: سه پرده محافظ', icon: '🛡️', items: [
          L('سه لایه', `${fig('meninges', [], 'مننژ')}${e('<b>meninges</b>')} سه پرده دور مغز و نخاع‌اند (از بیرون به درون):<br>• ${e('<b>dura mater</b>')}: سخت و محکم («مادر سخت»)<br>• ${e('<b>arachnoid</b>')}: لایه میانی تار عنکبوتی<br>• ${e('<b>pia mater</b>')}: نازک و چسبیده به مغز («مادر نرم»)`),
          L('فضاها', `${tbl([['فضا', 'جا', 'نکته'], [e('epidural space'), 'روی سخت‌شامه', 'بی‌حسی اپیدورال'], [e('subdural space'), 'زیر سخت‌شامه', 'هماتوم ساب‌دورال'], [e('subarachnoid space'), 'زیر عنکبوتیه', 'پر از CSF']])}${memo('ترتیب از بیرون: DAP؛ یعنی Dura، Arachnoid، Pia.')}`),
          M('بیرونی‌ترین لایه مننژ کدام است؟', ['dura mater', 'arachnoid', 'pia mater', 'cerebral cortex'], 'سخت‌شامه.', null, F('meninges', [])),
          M('مایع مغزی-نخاعی در کدام فضا جریان دارد؟', ['subarachnoid space', 'epidural space', 'subdural space', 'ventricle of the heart'], 'زیر عنکبوتیه.'),
          T('pia mater به سطح مغز چسبیده است.', true, 'نرم‌شامه.'),
          O('لایه‌ها را از بیرون به درون بچین', ['skull', 'dura mater', 'arachnoid', 'pia mater', 'brain'], 'DAP.'),
          P('هر لایه را به نام فارسی‌اش وصل کن', [['dura mater', 'سخت‌شامه'], ['arachnoid', 'عنکبوتیه'], ['pia mater', 'نرم‌شامه'], ['meninges', 'مننژ']], 'سه پرده.'),
          B('واژه ___ یعنی «مربوط به مننژ».', ['meningeal', 'meningioma', 'meningocele'], 'mening/o + -eal.'),
          S('املای انگلیسی «سخت‌شامه» را بنویس', 'dura mater', 'dur/o = سخت.', 'dura…'),
          N('r2m:cn')
        ]
      },
      {
        id: 'cn5', title: 'بطن‌ها و مایع مغزی-نخاعی', icon: '💧', items: [
          L('چهار بطن', `${fig('ventricles', [], 'بطن‌های مغز')}${e('<b>ventricle</b>')} یکی از چهار حفره درون مغز است: دو بطن جانبی، بطن سوم و بطن چهارم. ${e('<b>choroid plexus</b>')} در بطن‌ها ${e('<b>cerebrospinal fluid (CSF)</b>')} می‌سازد.`),
          L('کار CSF', `CSF مایعی شفاف است که بطن‌ها، فضای زیرعنکبوتیه و کانال مرکزی نخاع را پر می‌کند و مغز را شناور و از ضربه محافظت می‌کند.${memo('ventricul/o = بطن؛ intraventricular یعنی درون بطن.')}${pearl('اگر جریان CSF بسته شود، بطن‌ها گشاد می‌شوند: hydrocephalus. در سناریوی Mr. Jones هم پزشک نگران CSF leak (نشت مایع) بود.')}`),
          M('CSF در کجا ساخته می‌شود؟', ['choroid plexus', 'cerebellum', 'dura mater', 'spinal nerves'], 'شبکه مویرگی درون بطن‌ها.', null, F('ventricles', [])),
          M('مغز چند بطن دارد؟', ['چهار', 'دو', 'سه', 'دوازده'], 'دو جانبی، سوم، چهارم.'),
          T('CSF مغز و نخاع را شناور نگه می‌دارد و از ضربه محافظت می‌کند.', true, 'ضربه‌گیر مایع.'),
          W('واژه‌ای بساز به معنی «درون بطن»', ['intra-', 'ventricul/o', '-ar'], ['sub-', 'crani/o', '-itis'], 'intraventricular.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ventricle', 'بطن'], ['CSF', 'مایع مغزی-نخاعی'], ['choroid plexus', 'سازنده CSF'], ['central canal', 'کانال مرکزی نخاع']], 'بطن‌ها و مایع.'),
          B('اختصار ___ یعنی مایع مغزی-نخاعی.', ['CSF', 'CNS', 'ICP'], 'cerebrospinal fluid.'),
          S('املای انگلیسی «بطن» را بنویس', 'ventricle', 'ventricul/o.', 'ventr…'),
          N('m2r:cn')
        ]
      },
      {
        id: 'cn6', title: 'جمجمه و سدهای محافظ', icon: '🪖', items: [
          L('حفاظت چندلایه', `مغز با چند لایه محافظت می‌شود: ${e('<b>cranium</b>')} (جمجمه)، مننژ، CSF و ${e('<b>blood-brain barrier</b>')}؛ لایه‌ای از مویرگ‌های مغز که بسیاری از مواد زیان‌آور و میکروب‌ها را راه نمی‌دهد.`),
          L('فشار داخل جمجمه', `${wb('intra-', 'crani/o', '-al')} ← ${e('<b>intracranial pressure (ICP)</b>')}: فشار درون جمجمه. تومور، خونریزی یا تورم مغز ICP را بالا می‌برد و جان بیمار را تهدید می‌کند.${memo('جمجمه جعبه‌ای بسته است؛ هر چیز تازه‌ای درونش، فشار را بالا می‌برد.')}${pearl('سناریوی APPLY کتاب: «Concerned ICP is elevated»؛ یعنی پزشک نگران بالا رفتن فشار داخل جمجمه است.')}`),
          M('ICP یعنی…', ['فشار داخل جمجمه', 'مایع مغزی-نخاعی', 'بخش مراقبت ویژه اعصاب', 'سکته مغزی'], 'intracranial pressure.'),
          M('سد خونی-مغزی چه می‌کند؟', ['مانع ورود بسیاری از مواد زیان‌آور به مغز می‌شود', 'CSF می‌سازد', 'خون را به مغز پمپ می‌کند', 'مغز را به جمجمه می‌چسباند'], 'blood-brain barrier.'),
          T('خونریزی داخل جمجمه می‌تواند ICP را بالا ببرد.', true, 'جعبه بسته.'),
          O('لایه‌های محافظ را از بیرون به درون بچین', ['scalp', 'cranium', 'meninges', 'CSF', 'brain'], 'پوست، استخوان، پرده، مایع، مغز.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cranium', 'جمجمه'], ['intracranial', 'درون جمجمه'], ['ICP', 'فشار داخل جمجمه'], ['blood-brain barrier', 'سد خونی-مغزی']], 'حفاظت مغز.'),
          B('ریشه ___ یعنی جمجمه.', ['crani/o', 'cephal/o', 'cerebr/o'], 'cranium.'),
          S('املای انگلیسی «جمجمه» را بنویس', 'cranium', 'crani/o + -um.', 'cran…'),
          N('t2f:cn')
        ]
      },
      /* ================= سطح ۳: نخاع ================= */
      {
        id: 'cn7', title: 'برش عرضی نخاع', icon: '🦋', items: [
          L('خاکستری و سفید', `${fig('spinal-cord', [], 'برش عرضی نخاع')}${e('<b>spinal cord</b>')} (نخاع) ستونی از بافت عصبی است. در برش عرضی:<br>• ${e('<b>gray matter</b>')}: وسط، به شکل H یا پروانه؛ پر از جسم سلولی<br>• ${e('<b>white matter</b>')}: دورتادور؛ آکسون‌های میلین‌دار که پیام را بالا و پایین می‌برند`),
          L('شاخ‌ها و ریشه‌ها', `${tbl([['بخش', 'کار'], [e('dorsal horn'), 'شاخ پشتی؛ ورود حس'], [e('ventral horn'), 'شاخ قدامی؛ خروج فرمان حرکت'], [e('dorsal root ganglion'), 'عقده ریشه پشتی؛ جسم سلولی نورون‌های حسی']])}${memo('در مغز، ماده خاکستری بیرون است (قشر) ولی در نخاع وسط است؛ برعکس!')}`),
          M('در نخاع، ماده خاکستری کجاست؟', ['وسط، به شکل H', 'دورتادور', 'فقط در ریشه‌ها', 'روی مننژ'], 'برخلاف مغز.', null, F('spinal-cord', [])),
          M('فرمان حرکتی از کدام شاخ نخاع خارج می‌شود؟', ['ventral horn', 'dorsal horn', 'dorsal root ganglion', 'central canal'], 'شاخ قدامی.'),
          T('white matter از آکسون‌های میلین‌دار ساخته شده است.', true, 'میلین سفید است.'),
          O('مسیر حس درد از پوست تا مغز را بچین', ['receptor', 'sensory nerve', 'dorsal root', 'spinal cord', 'brain'], 'حس از پشت وارد می‌شود.'),
          P('هر بخش را به کارش وصل کن', [['dorsal horn', 'ورود حس'], ['ventral horn', 'خروج حرکت'], ['gray matter', 'جسم سلولی'], ['white matter', 'آکسون میلین‌دار']], 'برش عرضی نخاع.'),
          B('ریشه ___ یعنی نخاع.', ['myel/o', 'my/o', 'medull/o'], 'myelitis.'),
          S('املای انگلیسی «نخاع» را بنویس', 'spinal cord', 'spin/o = ستون مهره.', 'spinal…'),
          N('r2m:cn')
        ]
      },
      {
        id: 'cn8', title: 'سطوح نخاع', icon: '📏', items: [
          L('۳۱ جفت', `${fig('spinal-levels', [], 'اعصاب نخاعی')}نخاع از بصل‌النخاع تا مهره دوم کمری (${e('L2')}) می‌رسد. از آن ۳۱ جفت عصب نخاعی بیرون می‌آید:<br>۸ گردنی (${e('C1–C8')})، ۱۲ سینه‌ای (${e('T1–T12')})، ۵ کمری (${e('L1–L5')})، ۵ خاجی (${e('S1–S5')}) و ۱ دنبالچه‌ای.`),
          L('دم اسب', `زیر پایان نخاع، ریشه‌های عصبی مثل دم اسب پایین می‌روند: ${e('<b>cauda equina</b>')}.${memo('عددها مثل یک روز کاری: ساعت ۸ صبح (C8)، ۱۲ ظهر (T12)، ۵ عصر (L5)، ۵ عصر (S5)!')}${pearl('در Discharge Summary کتاب Fremgen، شکستگی L2 با آسیب نخاع باعث paraplegia کامل در سطح L2 شد.')}`),
          M('چند جفت عصب نخاعی داریم؟', ['۳۱', '۱۲', '۳۳', '۲۴'], '۸ + ۱۲ + ۵ + ۵ + ۱.', null, F('spinal-levels', [])),
          M('ریشه‌های عصبی زیر پایان نخاع چه نام دارند؟', ['cauda equina', 'plexus', 'conus', 'ganglion'], 'دم اسب.'),
          T('نخاع در بزرگسال تا حدود مهره L2 ادامه دارد.', true, 'برای همین LP پایین‌تر انجام می‌شود.'),
          O('گروه‌های اعصاب نخاعی را از بالا به پایین بچین', ['cervical', 'thoracic', 'lumbar', 'sacral', 'coccygeal'], 'C، T، L، S، Co.'),
          P('هر گروه را به تعدادش وصل کن', [['cervical', '۸ جفت'], ['thoracic', '۱۲ جفت'], ['lumbar', '۵ جفت کمری'], ['coccygeal', '۱ جفت']], 'شمارش اعصاب.'),
          B('C6 یعنی ششمین مهره یا عصب ___.', ['گردنی', 'سینه‌ای', 'کمری'], 'C = cervical.'),
          S('املای انگلیسی «دم اسب» را بنویس', 'cauda equina', 'لاتین: دم اسب.', 'cauda…'),
          N('m2r:cn')
        ]
      },
      {
        id: 'cn9', title: 'صفت‌های مغز و نخاع', icon: '🏷️', items: [
          L('مربوط به…', `${tbl([['صفت', 'معنی'], [e('cerebral'), 'مغزی، مربوط به مخ'], [e('cerebellar'), 'مربوط به مخچه'], [e('thalamic'), 'مربوط به تالاموس'], [e('meningeal'), 'مربوط به مننژ'], [e('medullary'), 'مربوط به بصل‌النخاع'], [e('cortical'), 'مربوط به قشر']])}`),
          L('پسوندهای صفت‌ساز', `${e('-al')}، ${e('-ar')}، ${e('-ic')}، ${e('-eal')} و ${e('-ary')} همه یعنی «مربوط به».<br>${wb('cerebell/o', '-ar')} ← ${e('cerebellar')}<br>${wb('thalam/o', '-ic')} ← ${e('thalamic')}${memo('برای پیدا کردن عضو، پسوند صفت را بردار: cerebellar منهای ‎-ar‎ می‌شود cerebell، یعنی مخچه.')}${vs(['cerebral', 'مخ'], ['cerebellar', 'مخچه'])}`),
          M(`${e('<b>cerebellar</b>')} یعنی مربوط به…`, ['مخچه', 'مخ', 'بصل‌النخاع', 'قشر'], 'cerebell/o + -ar.'),
          M('«مربوط به تالاموس» کدام است؟', ['thalamic', 'thalamal', 'thalamary', 'thalameal'], 'thalam/o + -ic.'),
          T('پسوندهای ‎-al‎ و ‎-ic‎ هر دو یعنی «مربوط به».', true, 'cerebral، thalamic.'),
          W('واژه‌ای بساز به معنی «مربوط به مخچه»', ['cerebell/o', '-ar'], ['cerebr/o', '-al', '-itis'], 'cerebellar.'),
          P('هر صفت را به عضوش وصل کن', [['cerebral', 'مخ'], ['cerebellar', 'مخچه'], ['meningeal', 'مننژ'], ['medullary', 'بصل‌النخاع']], 'صفت‌ها.'),
          B('سکته مغزی را در انگلیسی ___ accident می‌گویند.', ['cerebrovascular', 'cerebellar', 'meningeal'], 'cerebr/o + vascul/o + -ar.'),
          S('املای انگلیسی «مغزی-نخاعی» را بنویس', 'cerebrospinal', 'cerebr/o + spin/o + -al.', 'cerebro…'),
          N('t2f:cn')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۲: اعصاب محیطی و خودکار
 * سطح ۱: نورون، سیناپس و میلین • سطح ۲: اعصاب جمجمه‌ای و نخاعی • سطح ۳: رفلکس و دستگاه خودکار */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'pn', sym: 'Pn', name: 'اعصاب محیطی و خودکار', short: 'اعصاب محیطی', sub: 'نورون و سیناپس، اعصاب جمجمه‌ای و نخاعی، درماتوم‌ها، قوس رفلکس، سمپاتیک و پاراسمپاتیک',
    color: '#E89A1E', dark: '#B06F06', light: '#FDF3DC',
    levels: ['نورون، سیناپس و میلین', 'اعصاب جمجمه‌ای و نخاعی', 'رفلکس و دستگاه خودکار'],
    gens: EA.genIds('pn'),
    lessons: [
      /* ================= سطح ۱: نورون، سیناپس و میلین ================= */
      {
        id: 'pn1', title: 'آوران و وابران', icon: '↔️', items: [
          L('از محرک تا پاسخ', `${e('<b>stimulus</b>')} (محرک) تغییری درون یا بیرون بدن است؛ مثل گرما یا لمس. ${e('<b>receptor</b>')} (گیرنده) آن را حس می‌کند و یک ${e('<b>impulse</b>')} (تکانه عصبی) می‌سازد. در آخر ${e('<b>effector</b>')} (عضله یا غده) پاسخ می‌دهد.`),
          L('دو جهت', `${fig('afferent-efferent', [], 'آوران و وابران')}• ${e('<b>afferent neuron</b>')}: نورون حسی؛ پیام را <b>به سوی</b> CNS می‌برد (${e('af-')} = به سوی)<br>• ${e('<b>efferent neuron</b>')}: نورون حرکتی؛ پیام را <b>دور از</b> CNS به عضله و غده می‌برد (${e('ef-')} = دور از)<br>• ${e('<b>interneuron</b>')}: نورون رابط درون CNS${memo('Afferent = Arrive (می‌رسد)؛ Efferent = Exit (خارج می‌شود).')}${pearl('سناریوی APPLY کتاب: «به کلاس توضیح بده آوران و وابران چه فرقی دارند»؛ جواب همین جهت پیام است.')}`),
          M(`${e('<b>afferent neuron</b>')} پیام را به کجا می‌برد؟`, ['به سوی CNS', 'از CNS به عضله', 'از عضله به غده', 'بین دو عضله'], 'af- = به سوی.', null, F('afferent-efferent', [])),
          M('نورونی که پیام را به عضله می‌برد چه نام دارد؟', ['efferent (motor) neuron', 'afferent (sensory) neuron', 'interneuron', 'receptor'], 'ef- = دور از CNS.'),
          T('effector یعنی عضله یا غده‌ای که به فرمان عصبی پاسخ می‌دهد.', true, 'اندام پاسخ‌دهنده.'),
          O('ترتیب یک پاسخ عصبی را بچین', ['stimulus', 'receptor', 'afferent neuron', 'CNS', 'efferent neuron', 'effector'], 'از محرک تا پاسخ.'),
          P('هر واژه را به معنی‌اش وصل کن', [['stimulus', 'محرک'], ['receptor', 'گیرنده'], ['impulse', 'تکانه عصبی'], ['effector', 'اندام پاسخ‌دهنده']], 'واژه‌های پایه.'),
          B('نورون رابط درون نخاع و مغز ___ نام دارد.', ['interneuron', 'afferent neuron', 'ganglion'], 'inter- = بین.'),
          S('املای انگلیسی «محرک» را بنویس', 'stimulus', 'جمع: stimuli.', 'stim…'),
          N('t2f:pn')
        ]
      },
      {
        id: 'pn2', title: 'سیناپس و ناقل‌های عصبی', icon: '🔗', items: [
          L('پل شیمیایی', `${fig('synapse', [], 'سیناپس')}${e('<b>synapse</b>')} محل اتصال دو نورون (یا نورون و عضله) است. پایانه آکسون یک ${e('<b>neurotransmitter</b>')} (ناقل عصبی) آزاد می‌کند که از ${e('synaptic cleft')} می‌گذرد و به گیرنده‌های سلول بعدی می‌چسبد.`),
          L('ناقل‌های مهم', `${tbl([['ناقل', 'نقش'], [e('acetylcholine (ACh)'), 'حرکت عضلات و پاراسمپاتیک'], [e('dopamine (DA)'), 'حرکت و حس پاداش؛ در پارکینسون کم است'], [e('serotonin'), 'خلق، خواب و اشتها؛ در افسردگی کم است']])}${memo('Dopamine را با «D» به یاد بسپار: Drive و Doing؛ کمبودش حرکت را کند می‌کند.')}${pearl('داروهای SSRI با بالا نگه داشتن serotonin در سیناپس، افسردگی را درمان می‌کنند.')}`),
          M('ناقلی که در بیماری پارکینسون کم می‌شود کدام است؟', ['dopamine', 'serotonin', 'acetylcholine', 'insulin'], 'کمبود دوپامین.'),
          M('پیام از یک نورون به نورون بعدی در کجا منتقل می‌شود؟', ['synapse', 'dendrite', 'myelin', 'ganglion'], 'سیناپس.', null, F('synapse', [])),
          T('serotonin بر خلق، خواب و اشتها اثر دارد.', true, 'کمبودش با افسردگی مرتبط است.'),
          O('مراحل انتقال پیام در سیناپس را بچین', ['impulse reaches axon terminal', 'neurotransmitter released', 'crosses synaptic cleft', 'binds to receptors'], 'از پایانه تا گیرنده.'),
          P('هر ناقل را به نقشش وصل کن', [['acetylcholine', 'حرکت عضله'], ['dopamine', 'حرکت و پاداش'], ['serotonin', 'خلق و خواب'], ['receptor', 'محل اتصال ناقل']], 'ناقل‌ها.'),
          B('اختصار ___ یعنی استیل‌کولین.', ['ACh', 'DA', 'AD'], 'acetylcholine.'),
          S('املای انگلیسی «ناقل عصبی» را بنویس', 'neurotransmitter', 'neur/o + transmitter.', 'neurotr…'),
          N('f2t:pn')
        ]
      },
      {
        id: 'pn3', title: 'میلین و اتصال عصب-عضله', icon: '🧶', items: [
          L('غلاف میلین', `${fig('neuron', [], 'غلاف میلین روی آکسون')}${e('<b>myelin sheath</b>')} غلاف چربی و سفید دور آکسون است. در PNS آن را ${e('<b>Schwann cell</b>')} می‌سازد. پیام از یک فاصله بین غلاف‌ها به فاصله بعدی <b>می‌پرد</b> و سریع‌تر می‌رسد.`),
          L('عصب و عضله', `${wb('neur/o', 'muscul/o', '-ar')} ← ${e('<b>neuromuscular</b>')}: مربوط به عصب و عضله. ${e('neuromuscular junction')} جایی است که نورون حرکتی با ${e('ACh')} به رشته عضله فرمان می‌دهد.${memo('میلین مثل روکش پلاستیکی سیم برق است؛ اگر از بین برود، اتصالی می‌شود (ام‌اس).')}${pearl('در myasthenia gravis همین اتصال عصب-عضله دچار مشکل می‌شود و عضلات زود خسته می‌شوند.')}`),
          M('در دستگاه عصبی محیطی، کدام سلول میلین می‌سازد؟', ['Schwann cell', 'neuron', 'red blood cell', 'astrocyte'], 'سلول شوان.'),
          M(`${e('<b>neuromuscular</b>')} یعنی…`, ['مربوط به عصب و عضله', 'التهاب عصب و عضله', 'تومور عصب', 'درد عضله'], 'neur/o + muscul/o + -ar.'),
          T('میلین سرعت حرکت پیام را بیشتر می‌کند.', true, 'پیام از گرهی به گره دیگر می‌پرد.'),
          W('واژه‌ای بساز به معنی «مربوط به عصب و عضله»', ['neur/o', 'muscul/o', '-ar'], ['myel/o', '-itis', 'my/o'], 'neuromuscular.'),
          P('هر واژه را به معنی‌اش وصل کن', [['myelin sheath', 'غلاف میلین'], ['Schwann cell', 'سلول شوان'], ['neuromuscular junction', 'اتصال عصب-عضله'], ['axon', 'رشته بلند نورون']], 'میلین و عضله.'),
          B('بیماری‌ای که میلین را در CNS تخریب می‌کند ___ است.', ['multiple sclerosis', 'myasthenia gravis', 'poliomyelitis'], 'MS.'),
          S('املای انگلیسی «میلین» را بنویس', 'myelin', 'myel/o.', 'mye…'),
          N('d2t:pn')
        ]
      },
      /* ================= سطح ۲: اعصاب جمجمه‌ای و نخاعی ================= */
      {
        id: 'pn4', title: '۱۲ جفت عصب جمجمه‌ای', icon: '🔢', items: [
          L('فهرست', `${fig('cranial-nerves', [], 'اعصاب جمجمه‌ای')}${e('<b>cranial nerves</b>')} مستقیم از مغز بیرون می‌آیند و با عدد رومی نام‌گذاری می‌شوند (${e('I')} تا ${e('XII')}).`),
          L('چند عصب مهم', `${tbl([['عصب', 'کار'], [e('II optic'), 'بینایی'], [e('V trigeminal'), 'حس صورت و جویدن'], [e('VII facial'), 'حرکات صورت؛ در فلج بل آسیب می‌بیند'], [e('VIII vestibulocochlear'), 'شنوایی و تعادل'], [e('X vagus'), 'قلب، ریه و دستگاه گوارش']])}${memo('vagus یعنی «سرگردان»؛ چون از گردن تا شکم سفر می‌کند.')}${pearl('در Practice Exercises کتاب Fremgen باید هر ۱۲ عصب را به کارش وصل کنی.')}`),
          M('عصب بینایی کدام است؟', ['optic (II)', 'olfactory (I)', 'facial (VII)', 'vagus (X)'], 'optic = بینایی.', null, F('cranial-nerves', [])),
          M('کدام عصب بیشتر اندام‌های قفسه سینه و شکم را عصب‌دهی می‌کند؟', ['vagus (X)', 'trigeminal (V)', 'hypoglossal (XII)', 'accessory (XI)'], 'عصب سرگردان.'),
          T('عصب facial حرکات عضلات صورت را کنترل می‌کند.', true, 'عصب هفتم.'),
          O('این عصب‌ها را به ترتیب عدد بچین', ['olfactory', 'optic', 'trigeminal', 'facial', 'vagus', 'hypoglossal'], 'I، II، V، VII، X، XII.'),
          P('هر عصب را به کارش وصل کن', [['olfactory', 'بویایی'], ['vestibulocochlear', 'شنوایی و تعادل'], ['hypoglossal', 'حرکت زبان'], ['trigeminal', 'حس صورت']], 'اعصاب جمجمه‌ای.'),
          B('عصب پنجم با سه شاخه ___ نام دارد.', ['trigeminal', 'trochlear', 'abducens'], 'tri = سه.'),
          S('املای انگلیسی «عصب واگ» را بنویس', 'vagus', 'vag/o.', 'vag…'),
          N('r2m:pn')
        ]
      },
      {
        id: 'pn5', title: 'ریشه‌ها، عقده‌ها و شبکه‌ها', icon: '🕸️', items: [
          L('از نخاع تا اندام', `هر عصب نخاعی با یک ${e('<b>nerve root</b>')} از نخاع جدا می‌شود. ${e('<b>ganglion</b>')} (جمع: ${e('ganglia')}) خوشه‌ای از جسم‌های سلولی بیرون از CNS است. عصب‌ها در ${e('<b>plexus</b>')} (شبکه) به هم می‌پیوندند؛ مثل شبکه بازویی (${e('brachial')}) و کمری-خاجی (${e('lumbosacral')}).`),
          L('عصب سیاتیک', `${e('<b>sciatic nerve</b>')} بزرگ‌ترین عصب بدن است و از پایین کمر تا پشت پا می‌رود. درد در مسیر آن ${e('sciatica')} نام دارد.${wb('radicul/o', '-itis')} ← ${e('radiculitis')}: التهاب ریشه عصب${memo('plexus مثل چهارراه کابل‌هاست؛ ganglion مثل ایستگاه کوچک کنار جاده.')}${pearl('سناریوی APPLY کتاب: پای آقای Randy Allen در تصادف آسیب دید؛ جراح باید ریشه‌های کمری و شبکه lumbosacral و عصب سیاتیک را بررسی کند.')}`),
          M('بزرگ‌ترین عصب بدن کدام است؟', ['sciatic nerve', 'vagus nerve', 'optic nerve', 'facial nerve'], 'عصب سیاتیک.'),
          M(`${e('<b>plexus</b>')} یعنی…`, ['شبکه عصبی', 'عقده عصبی', 'ریشه عصب', 'پایانه آکسون'], 'مثل brachial plexus.'),
          T('ganglion خوشه‌ای از جسم‌های سلولی بیرون از CNS است.', true, 'جمع: ganglia.'),
          W('واژه‌ای بساز به معنی «التهاب ریشه عصب»', ['radicul/o', '-itis'], ['gangli/o', '-oma', 'neur/o'], 'radiculitis.'),
          P('هر واژه را به معنی‌اش وصل کن', [['nerve root', 'ریشه عصب'], ['ganglion', 'عقده عصبی'], ['plexus', 'شبکه عصبی'], ['sciatica', 'درد عصب سیاتیک']], 'عصب‌های محیطی.'),
          B('صفت «مربوط به عقده عصبی» ___ است.', ['ganglionic', 'glial', 'radicular'], 'ganglion + -ic.'),
          S('املای انگلیسی «شبکه عصبی» را بنویس', 'plexus', 'brachial plexus.', 'plex…'),
          N('m2r:pn')
        ]
      },
      {
        id: 'pn6', title: 'درماتوم‌ها', icon: '🗾', items: [
          L('نقشه پوست', `${fig('dermatomes', [], 'درماتوم‌ها')}${e('<b>dermatome</b>')} ناحیه‌ای از پوست است که فقط از یک عصب نخاعی حس می‌گیرد. پزشک با بررسی حس در درماتوم‌ها، سطح آسیب نخاع یا ریشه را پیدا می‌کند.`),
          L('زونا روی درماتوم', `${fig('shingles', ['بثورات زونا'], 'زونا (herpes zoster)')}ویروس آبله‌مرغان سال‌ها در یک عقده عصبی می‌خوابد و ممکن است بیدار شود: ${e('<b>herpes zoster</b>')} (زونا) با بثورات دردناک فقط روی یک درماتوم و یک طرف بدن.${memo('derm/o پوست است و ‎-tome‎ یعنی بخش؛ dermatome = «بخش پوستی».')}`),
          M(`${e('<b>dermatome</b>')} چیست؟`, ['ناحیه‌ای از پوست که یک عصب نخاعی به آن حس می‌دهد', 'ابزار برش پوست', 'بیماری پوست', 'لایه‌ای از مننژ'], 'نقشه حسی پوست.', null, F('dermatomes', [])),
          M('بثورات دردناک روی یک درماتوم، نشانه کدام بیماری است؟', ['herpes zoster', 'meningitis', 'migraine', 'Bell palsy'], 'زونا.', null, F('shingles', [])),
          T('زونا معمولاً فقط یک طرف بدن را درگیر می‌کند.', true, 'روی یک درماتوم.'),
          O('مسیر بیدار شدن زونا را بچین', ['chickenpox in childhood', 'virus sleeps in ganglion', 'virus reactivates', 'painful rash on dermatome'], 'آبله‌مرغان ← خواب ← زونا.'),
          P('هر واژه را به معنی‌اش وصل کن', [['dermatome', 'ناحیه حسی پوست'], ['herpes zoster', 'زونا'], ['cervical', 'گردنی'], ['sacral', 'خاجی']], 'درماتوم و زونا.'),
          B('نام عامیانه herpes zoster ___ است.', ['shingles', 'chickenpox', 'cold sore'], 'زونا.'),
          S('املای انگلیسی «درماتوم» را بنویس', 'dermatome', 'derm/o + -tome.', 'derma…'),
          N('t2f:pn')
        ]
      },
      /* ================= سطح ۳: رفلکس و دستگاه خودکار ================= */
      {
        id: 'pn7', title: 'قوس رفلکس', icon: '🦵', items: [
          L('پاسخ خودکار', `${fig('reflex-arc', [], 'قوس رفلکس زانو')}${e('<b>reflex</b>')} پاسخ سریع و خودکار به محرک است که به سلول‌های کمی نیاز دارد. ${e('<b>reflex arc</b>')} پنج جزء دارد: گیرنده، نورون حسی، نخاع، نورون حرکتی و عضله (effector).`),
          L('رفلکس‌های معاینه', `${e('<b>deep tendon reflex (DTR)</b>')}: انقباض عضله با ضربه به تاندون؛ مثل رفلکس زانو (${e('patellar')}).<br>${fig('babinski', ['نشانه بابینسکی'], 'Babinski sign')}${e('<b>Babinski sign</b>')}: با کشیدن ناخن روی کف پا، شست به بالا می‌رود و انگشتان باز می‌شوند. در نوزاد طبیعی است ولی در بزرگسال نشانه آسیب نورون حرکتی است.${pearl('Pretest کتاب Cohen: «A simple response that requires few cells is a reflex».')}`),
          M('پاسخ ساده‌ای که به سلول‌های کمی نیاز دارد چه نام دارد؟', ['reflex', 'stimulus', 'sensation', 'mutation'], 'Pretest کتاب Cohen.', null, F('reflex-arc', [])),
          M('نشانه بابینسکی در بزرگسال چه معنایی دارد؟', ['آسیب نورون حرکتی', 'کاملاً طبیعی است', 'کمبود ویتامین', 'شکستگی پا'], 'در نوزاد طبیعی، در بزرگسال غیرطبیعی.', null, F('babinski', [])),
          T('DTR یعنی deep tendon reflex.', true, 'رفلکس عمقی تاندون.'),
          O('اجزای قوس رفلکس را بچین', ['receptor', 'sensory neuron', 'spinal cord', 'motor neuron', 'effector'], 'پنج جزء.'),
          P('هر واژه را به معنی‌اش وصل کن', [['reflex', 'پاسخ خودکار'], ['DTR', 'رفلکس عمقی تاندون'], ['patellar reflex', 'رفلکس زانو'], ['Babinski sign', 'بالا رفتن شست پا']], 'رفلکس‌ها.'),
          B('در سناریوی کتاب، دکتر Stanley چند ___ test انجام داد و پارکینسون را تأیید کرد.', ['reflex', 'sweat', 'skin'], 'reflex tests.'),
          S('املای انگلیسی «رفلکس» را بنویس', 'reflex', 'بازتاب.', 'refl…'),
          N('r2m:pn')
        ]
      },
      {
        id: 'pn8', title: 'جنگ یا گریز؛ استراحت و گوارش', icon: '⚖️', items: [
          L('دستگاه خودکار', `${fig('ans', [], 'سمپاتیک و پاراسمپاتیک')}${e('<b>autonomic nervous system (ANS)</b>')} کارهای غیرارادی قلب، عضلات صاف و غدد را کنترل می‌کند و دو بخش مخالف دارد:<br>• ${e('<b>sympathetic</b>')}: «جنگ یا گریز»؛ ضربان تند، مردمک گشاد، تعریق<br>• ${e('<b>parasympathetic</b>')}: «استراحت و گوارش»؛ ضربان آرام، گوارش فعال`),
          L('یک سناریو', `${pearl('سناریوی APPLY کتاب: خانم Gina Jones می‌گوید در هر موقعیت پر استرس ضربان و تنفسش تند می‌شود و عرق می‌کند و فکر می‌کند اختلال روانی دارد. پرستار توضیح می‌دهد که این پاسخ طبیعی دستگاه سمپاتیک به استرس است.')}${memo('Sympathetic = Stress و Speed؛ Parasympathetic = Peace و Pause.')}${vs(['sympathetic', 'جنگ یا گریز'], ['parasympathetic', 'استراحت و گوارش'])}`),
          M('در پاسخ «جنگ یا گریز» کدام دستگاه فعال است؟', ['sympathetic', 'parasympathetic', 'somatic', 'central'], 'سمپاتیک.', null, F('ans', [])),
          M('پاراسمپاتیک بر ضربان قلب چه اثری دارد؟', ['آن را آرام می‌کند', 'آن را تند می‌کند', 'آن را متوقف می‌کند', 'اثری ندارد'], 'rest and digest.'),
          T('ضربان تند و تعریق خانم Gina Jones در استرس، پاسخ طبیعی سمپاتیک است.', true, 'نه لزوماً اختلال روانی.'),
          O('رخدادهای پاسخ استرس را بچین', ['stressful situation', 'sympathetic activation', 'fast heart rate and sweating', 'parasympathetic calms the body'], 'استرس، پاسخ، آرامش.'),
          P('هر اثر را به دستگاهش وصل کن', [['مردمک گشاد', 'سمپاتیک'], ['گوارش فعال', 'پاراسمپاتیک'], ['کارهای غیرارادی', 'ANS'], ['حرکت ارادی', 'somatic']], 'دو نیروی مخالف.'),
          B('اختصار ___ یعنی دستگاه عصبی خودکار.', ['ANS', 'CNS', 'SNS'], 'autonomic nervous system.'),
          S('املای انگلیسی «سمپاتیک» را بنویس', 'sympathetic', 'sym- = با هم.', 'sympa…'),
          N('wb:pn')
        ]
      },
      {
        id: 'pn9', title: 'پیکری یا خودکار؟', icon: '🎛️', items: [
          L('ارادی و غیرارادی', `${tbl([['بخش', 'کنترل', 'هدف'], [e('somatic nervous system (SNS)'), 'ارادی', 'عضلات اسکلتی'], [e('autonomic nervous system (ANS)'), 'غیرارادی', 'قلب، عضلات صاف، غدد']])}${wb('somat/o', '-ic')} ← ${e('somatic')}: مربوط به بدن`),
          L('هم‌ایستایی', `دستگاه عصبی همراه با دستگاه غدد درون‌ریز ${e('<b>homeostasis</b>')} را حفظ می‌کند؛ یعنی حالت درونی پایدار (دما، قند، فشار). ${e('vagal')} یعنی مربوط به عصب واگ که بازوی اصلی پاراسمپاتیک است.${memo('somatic = soma (بدن) و autonomic = auto (خود)؛ یکی را خودت می‌خواهی، دیگری خودش کار می‌کند.')}${pearl('Pretest کتاب Cohen: «Involuntary responses are controlled by the autonomic nervous system».')}`),
          M('پاسخ‌های غیرارادی را کدام بخش کنترل می‌کند؟', ['autonomic nervous system', 'somatic nervous system', 'voluntary nervous system', 'cerebral cortex'], 'Pretest کتاب Cohen.'),
          M(`${e('<b>homeostasis</b>')} یعنی…`, ['حالت درونی پایدار بدن', 'پاسخ به استرس', 'نوعی رفلکس', 'تولید ناقل عصبی'], 'homeo = همانند + stasis = ایستایی.'),
          T('حرکت دادن انگشت با اراده کار دستگاه پیکری (somatic) است.', true, 'عضلات اسکلتی.'),
          W('واژه‌ای بساز به معنی «مربوط به بدن»', ['somat/o', '-ic'], ['aut/o', '-ism', 'psych/o'], 'somatic.'),
          P('هر واژه را به معنی‌اش وصل کن', [['somatic', 'پیکری، ارادی'], ['autonomic', 'خودکار'], ['homeostasis', 'هم‌ایستایی'], ['vagal', 'مربوط به عصب واگ']], 'پیکری و خودکار.'),
          B('اختصار ___ یعنی دستگاه عصبی پیکری.', ['SNS', 'ANS', 'PNS'], 'somatic nervous system.'),
          S('املای انگلیسی «هم‌ایستایی» را بنویس', 'homeostasis', 'homeo + stasis.', 'homeo…'),
          N('m2r:pn')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۳: نشانه‌ها و بیماری‌های عصبی
 * سطح ۱: نشانه‌های عصبی • سطح ۲: سکته، خونریزی، ضربه و تشنج • سطح ۳: بیماری‌های مادرزادی، تحلیل‌برنده، عفونی و تومورها */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Ds', name: 'نشانه‌ها و بیماری‌های عصبی', short: 'بیماری‌های عصبی', sub: 'فلج و ضعف، اختلال گفتار و حس، کما، سکته مغزی، هماتوم، صرع، پارکینسون، آلزایمر، ام‌اس، مننژیت و تومورها',
    color: '#D9534F', dark: '#A8312E', light: '#FDE6E4',
    levels: ['نشانه‌های عصبی', 'سکته، ضربه و تشنج', 'بیماری‌ها و تومورها'],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: نشانه‌های عصبی ================= */
      {
        id: 'ds1', title: 'فلج و ضعف', icon: '♿', items: [
          L('انواع فلج', `${fig('paralysis-types', [], 'انواع فلج')}${e('<b>paralysis</b>')} یعنی از دست رفتن کار عضله. پیشوند جای فلج را می‌گوید:<br>• ${e('<b>monoplegia</b>')}: یک اندام<br>• ${e('<b>hemiplegia</b>')}: یک نیمه بدن (معمولاً پس از سکته)<br>• ${e('<b>paraplegia</b>')}: دو پا و پایین تنه (آسیب نخاع سینه‌ای یا کمری)<br>• ${e('<b>quadriplegia</b>')}: هر چهار اندام (آسیب نخاع گردنی)؛ همان ${e('tetraplegia')}`),
          L('شل یا سفت؟', `${e('<b>flaccid</b>')}: عضله شل و بی‌تون<br>${e('<b>spasticity</b>')}: عضله سفت با رفلکس‌های تشدیدشده${pearl('Case Study کتاب Cohen: ویلیام ۱۲ ساله با شیرجه در استخر کم‌عمق، شکستگی C6 گرفت؛ پاهایش flaccid بودند و خطر quadriplegia وجود داشت.')}${memo('quadri = چهار مثل quad bike؛ para = کنار؛ دو پای کنار هم.')}`),
          M('آسیب نخاع گردنی (مثل C6) بیشتر چه فلجی می‌دهد؟', ['quadriplegia', 'paraplegia', 'monoplegia', 'hemiplegia'], 'گردن بالاتر از اعصاب دست و پاست.', null, F('paralysis-types', [])),
          M('فلج دو پا و پایین تنه چه نام دارد؟', ['paraplegia', 'quadriplegia', 'hemiparesis', 'monoplegia'], 'آسیب نخاع زیر گردن.'),
          T('flaccid یعنی عضله شل و بی‌تون.', true, 'برخلاف spastic.'),
          P('هر واژه را به معنی‌اش وصل کن', [['monoplegia', 'فلج یک اندام'], ['hemiplegia', 'فلج نیمه بدن'], ['paraplegia', 'فلج دو پا'], ['quadriplegia', 'فلج چهار اندام']], 'انواع فلج.'),
          W('واژه‌ای بساز به معنی «فلج یک اندام»', ['mono-', '-plegia'], ['quadri-', '-paresis', 'hemi-'], 'monoplegia.'),
          B('نام دیگر quadriplegia ___ است.', ['tetraplegia', 'paraplegia', 'hemiplegia'], 'tetra- = چهار.'),
          S('املای انگلیسی «فلج» را بنویس', 'paralysis', 'para- + -lysis.', 'paral…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: 'گفتار، حس و هماهنگی', icon: '🗣️', items: [
          L('گفتار و حرکت', `${tbl([['واژه', 'معنی'], [e('aphasia'), 'ناتوانی در گفتار یا فهم آن'], [e('dysarthria'), 'تلفظ دشوار به علت ضعف عضلات گفتار'], [e('ataxia'), 'ناهماهنگی حرکت (tax/o = نظم)'], [e('apraxia'), 'ناتوانی در انجام حرکت هدفمند'], [e('agnosia'), 'ناتوانی در شناختن اشیا (gnos/o = شناختن)']])}`),
          L('حس و تعادل', `${tbl([['واژه', 'معنی'], [e('paresthesia'), 'گزگز و مورمور'], [e('hyperesthesia'), 'حساسیت بیش از حد'], [e('vertigo'), 'سرگیجه چرخشی'], [e('diplopia'), 'دوبینی'], [e('syncope'), 'غش، از هوش رفتن کوتاه']])}${pearl('Chart Note کتاب Gylys: بیمار سه روز پیش vertigo داشت و با سکته دچار aphasia و diplopia شد.')}${vs(['aphasia', 'مشکل زبان در مغز'], ['dysarthria', 'مشکل عضلات تلفظ'])}`),
          M(`${e('<b>ataxia</b>')} یعنی…`, ['ناهماهنگی حرکت', 'فلج کامل', 'گزگز', 'دوبینی'], 'a- + tax/o (نظم).'),
          M('«دوبینی» با کدام واژه نوشته می‌شود؟', ['diplopia', 'diplegia', 'dysphasia', 'diploidy'], 'dipl/o + -opia.'),
          T('paresthesia یعنی حس گزگز و مورمور.', true, 'para- (نابه‌هنجار) + -esthesia.'),
          W('واژه‌ای بساز به معنی «حس نابه‌هنجار (گزگز)»', ['para-', '-esthesia'], ['an-', '-algesia', 'hyper-'], 'paresthesia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['vertigo', 'سرگیجه'], ['syncope', 'غش'], ['agnosia', 'ناتوانی در شناختن'], ['dysarthria', 'تلفظ دشوار']], 'نشانه‌ها.'),
          B('سرگیجه چرخشی ___ نام دارد.', ['vertigo', 'syncope', 'ataxia'], 'vertigo.'),
          S('املای انگلیسی «دوبینی» را بنویس', 'diplopia', 'dipl/o + -opia.', 'dipl…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: 'هوشیاری، حافظه و درد', icon: '💤', items: [
          L('سطح هوشیاری', `${tbl([['واژه', 'معنی'], [e('lethargy'), 'خواب‌آلودگی و رخوت غیرعادی'], [e('unconscious'), 'ناهشیار؛ پاسخ نمی‌دهد'], [e('coma'), 'بیهوشی عمیق که بیدار نمی‌شود'], [e('amnesia'), 'فراموشی'], [e('dementia'), 'زوال پیشرونده حافظه و تفکر']])}`),
          L('درد و سردرد', `${wb('cephal/o', '-algia')} ← ${e('<b>cephalalgia</b>')}: سردرد (${e('HA')})<br>${e('<b>migraine</b>')}: سردرد شدید و معمولاً یک‌طرفه با تهوع؛ گاهی با ${e('<b>aura</b>')} (پیش‌نشانه مثل جرقه نور)<br>${wb('an-', '-algesia')} ← ${e('analgesia')}: بی‌دردی${pearl('سناریوی APPLY کتاب: Josie، ۹ ساله، از سرسره ۱۴ فوتی افتاد و چند لحظه «خواب» بود؛ از دست دادن کوتاه هوشیاری یعنی باید پزشک او را ببیند (احتمال concussion).')}`),
          M('بیهوشی عمیقی که بیمار از آن بیدار نمی‌شود چه نام دارد؟', ['coma', 'syncope', 'lethargy', 'insomnia'], 'کما.'),
          M(`${e('<b>dementia</b>')} یعنی…`, ['زوال پیشرونده حافظه و تفکر', 'سردرد', 'فلج نیمه بدن', 'تشنج'], 'de- + ment/o (ذهن).'),
          T('Josie پس از افتادن چند لحظه بیهوش بود؛ پس باید به پزشک مراجعه کند.', true, 'loss of consciousness.'),
          O('سطح هوشیاری را از بیشترین به کمترین بچین', ['alert', 'lethargy', 'unconscious', 'coma'], 'هوشیار تا کما.'),
          P('هر واژه را به معنی‌اش وصل کن', [['cephalalgia', 'سردرد'], ['aura', 'پیش‌نشانه'], ['amnesia', 'فراموشی'], ['lethargy', 'رخوت']], 'هوشیاری و درد.'),
          B('Jane در Case Study 7-2 بسیار ___ بود؛ یعنی خواب‌آلود و کند.', ['lethargic', 'manic', 'aphasic'], 'lethargy.'),
          S('املای انگلیسی «سردرد میگرنی» را بنویس', 'migraine', 'سردرد یک‌طرفه.', 'migr…'),
          N('d2t:ds')
        ]
      },
      /* ================= سطح ۲: سکته، ضربه و تشنج ================= */
      {
        id: 'ds4', title: 'سکته مغزی (CVA)', icon: '🚑', items: [
          L('دو نوع سکته', `${fig('stroke-types', [], 'انواع سکته مغزی')}${e('<b>cerebrovascular accident (CVA)</b>')} یعنی آسیب مغز به علت قطع جریان خون:<br>• ${e('<b>ischemic stroke</b>')}: لخته رگ را می‌بندد؛ ${e('thrombosis')} (لخته در جا) یا ${e('embolism')} (لخته رونده)<br>• ${e('<b>hemorrhagic stroke</b>')}: رگ پاره می‌شود و خونریزی می‌کند<br>بافتی که خون نمی‌گیرد دچار ${e('ischemia')} و سپس ${e('infarct')} (مرگ بافت) می‌شود.`),
          L('هشدار و درمان', `${e('<b>transient ischemic attack (TIA)</b>')}: علائم سکته که در کمتر از ۲۴ ساعت از بین می‌رود؛ هشداری جدی.${fig('ct-hemorrhage', ['خونریزی مغزی در CT'], 'CT: سکته خونریزی‌دهنده')}${pearl('Case Study 7-1 کتاب Cohen: Allen، ۶۲ ساله، با right hemiplegia و aphasia در ۱۵ دقیقه به ED رسید؛ CT خونریزی نشان نداد، پس ischemic stroke بود و fibrinolytic therapy گرفت.')}`),
          M('سکته ایسکمیک بیشتر به چه علتی است؟', ['thrombosis (لخته)', 'hemorrhage', 'hematoma', 'hemangioma'], 'Case Study 7-1: Ischemic stroke is generally caused by thrombosis.', null, F('stroke-types', [])),
          M('TIA یعنی…', ['حمله ایسکمیک گذرا؛ علائمی که زیر ۲۴ ساعت برطرف می‌شود', 'سکته خونریزی‌دهنده', 'آسیب تروماتیک مغز', 'فشار داخل جمجمه'], 'transient ischemic attack.'),
          T('پیش از دادن داروی لخته‌شکن باید با CT خونریزی را رد کرد.', true, 'داروی لخته‌شکن خونریزی را بدتر می‌کند.', F('ct-hemorrhage', [])),
          O('روند درمان Allen را بچین', ['sudden right-sided weakness', 'arrival at ED', 'noncontrast CT scan', 'fibrinolytic therapy', 'NICU observation'], 'Case Study 7-1.'),
          P('هر واژه را به معنی‌اش وصل کن', [['ischemia', 'کمبود خون‌رسانی'], ['infarct', 'بافت مرده'], ['embolism', 'انسداد با لخته رونده'], ['CVA', 'سکته مغزی']], 'سکته.'),
          B('داروی ___ لخته را حل می‌کند.', ['fibrinolytic', 'anticonvulsant', 'analgesic'], 'fibrin + -lytic.'),
          S('املای انگلیسی «کم‌خونی موضعی» را بنویس', 'ischemia', 'isch/o + -emia.', 'isch…'),
          N('r2m:ds')
        ]
      },
      {
        id: 'ds5', title: 'آنوریسم و هماتوم', icon: '🩸', items: [
          L('آنوریسم', `${fig('aneurysm', [], 'آنوریسم در حلقه ویلیس')}${e('<b>aneurysm</b>')} بادکردگی موضعی دیواره سرخرگ است که اگر پاره شود، خونریزی زیرعنکبوتیه و سکته خونریزی‌دهنده می‌دهد.${fig('aneurysm-photo', ['آنوریسم روی سرخرگ مغز'], 'آنوریسم')}`),
          L('هماتوم‌ها', `${fig('hematomas', [], 'هماتوم‌های مغزی')}${e('<b>hematoma</b>')} یعنی تجمع خون:<br>• ${e('<b>epidural</b>')}: بین جمجمه و سخت‌شامه؛ معمولاً از پارگی سرخرگ<br>• ${e('<b>subdural</b>')}: زیر سخت‌شامه؛ معمولاً از پارگی سیاهرگ<br>• ${e('<b>intracerebral</b>')}: درون بافت مغز${pearl('Case Study 7-1: «collection of blood below the dura mater» یعنی subdural hematoma.')}`),
          M('بادکردگی دیواره سرخرگ چه نام دارد؟', ['aneurysm', 'embolism', 'hematoma', 'infarct'], 'اتساع موضعی.', null, F('aneurysm-photo', [])),
          M('تجمع خون زیر سخت‌شامه چه نام دارد؟', ['subdural hematoma', 'epidural hematoma', 'intracerebral hematoma', 'meningioma'], 'sub- = زیر.', null, F('hematomas', [])),
          T('epidural hematoma بین جمجمه و سخت‌شامه است.', true, 'epi- = روی.'),
          W('واژه‌ای بساز به معنی «توده خون»', ['hemat/o', '-oma'], ['hem/o', '-emia', 'thromb/o'], 'hematoma.'),
          P('هر هماتوم را به جایش وصل کن', [['epidural', 'روی سخت‌شامه'], ['subdural', 'زیر سخت‌شامه'], ['intracerebral', 'درون بافت مغز'], ['subarachnoid hemorrhage', 'خونریزی زیر عنکبوتیه']], 'جای خون.'),
          B('املای درست، ___ است.', ['aneurysm', 'aneurism', 'anurysm'], 'Exercise کتاب: a localized dilation of an artery.'),
          S('املای انگلیسی «هماتوم» را بنویس', 'hematoma', 'hemat/o + -oma.', 'hema…'),
          N('m2r:ds')
        ]
      },
      {
        id: 'ds6', title: 'ضربه به سر و تشنج', icon: '⚡', items: [
          L('آسیب‌های ضربه‌ای', `${tbl([['واژه', 'معنی'], [e('concussion'), 'اختلال موقت کار مغز پس از ضربه؛ اغلب با بیهوشی کوتاه'], [e('contusion'), 'کوفتگی بافت مغز'], [e('traumatic brain injury (TBI)'), 'آسیب مغز با نیروی بیرونی'], [e('spinal cord injury (SCI)'), 'آسیب نخاع؛ فلج زیر محل آسیب']])}`),
          L('صرع و تشنج', `${fig('seizure-types', [], 'تشنج و صرع')}${e('<b>seizure</b>')} یعنی طوفان ناگهانی فعالیت الکتریکی مغز. ${e('<b>epilepsy</b>')} (صرع) یعنی تشنج‌های تکرارشونده.<br>• ${e('tonic-clonic')}: سفتی بدن سپس پرش؛ گرندمال<br>• ${e('absence')}: خیره شدن چندثانیه‌ای؛ پتی‌مال${pearl('سناریوی APPLY کتاب: در تشنج خانم April Johnson، باید زمان شروع، مدت، حرکات بدن و هوشیاری را دقیق دید و ثبت کرد، چون نوع تشنج را مشخص می‌کند.')}`),
          M('بیماری با تشنج‌های تکرارشونده چه نام دارد؟', ['epilepsy', 'cystic fibrosis', 'spina bifida', 'thyrotoxicosis'], 'Pretest کتاب Cohen.', null, F('seizure-types', [])),
          M('اختلال موقت کار مغز پس از ضربه به سر چه نام دارد؟', ['concussion', 'contusion', 'aneurysm', 'neuralgia'], 'ضربه مغزی.'),
          T('در تشنج absence بیمار چند ثانیه خیره می‌ماند.', true, 'پتی‌مال.'),
          O('مراحل تشنج تونیک-کلونیک را بچین', ['aura', 'loss of consciousness', 'tonic stiffening', 'clonic jerking', 'drowsiness'], 'پیش‌نشانه تا خواب‌آلودگی.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['TBI', 'آسیب تروماتیک مغز'], ['SCI', 'آسیب نخاع'], ['MTBI', 'آسیب خفیف مغز'], ['CTE', 'آنسفالوپاتی تروماتیک مزمن']], 'ضربه‌ها.'),
          B('املای درست، ___ است.', ['seizure', 'siezure', 'seisure'], 'Exercise کتاب: ei.'),
          S('املای انگلیسی «صرع» را بنویس', 'epilepsy', 'epi- + -lepsy.', 'epil…'),
          N('t2f:ds')
        ]
      },
      /* ================= سطح ۳: بیماری‌ها و تومورها ================= */
      {
        id: 'ds7', title: 'بیماری‌های مادرزادی', icon: '👶', items: [
          L('بسته نشدن لوله عصبی', `${fig('spina-bifida', [], 'اسپینا بیفیدا')}${e('<b>spina bifida</b>')}: ستون مهره دور نخاع کامل بسته نمی‌شود.<br>• ${e('occulta')}: پنهان، بدون بیرون‌زدگی<br>• ${e('<b>meningocele</b>')}: بیرون‌زدگی پرده‌ها<br>• ${e('<b>myelomeningocele</b>')}: بیرون‌زدگی نخاع و پرده‌ها؛ شدیدترین<br>${e('<b>anencephaly</b>')}: نبود مغز در هنگام تولد`),
          L('آب‌آوردگی و فلج مغزی', `${fig('hydrocephalus', [], 'هیدروسفالی')}${wb('hydr/o', 'cephal/o', '-us')} ← ${e('<b>hydrocephalus</b>')}: تجمع CSF در بطن‌ها و بزرگ شدن سر نوزاد.${fig('hydrocephalus-brain', ['بطن‌های بسیار گشاد'], 'برش مغز در هیدروسفالی')}${e('<b>cerebral palsy (CP)</b>')}: اختلال حرکت و وضعیت بدن از آسیب مغز پیش، حین یا کمی پس از تولد.`),
          M('بیرون‌زدگی نخاع و پرده‌ها از شکاف ستون مهره چه نام دارد؟', ['myelomeningocele', 'meningocele', 'spina bifida occulta', 'meningioma'], 'myel/o + mening/o + -cele.', null, F('spina-bifida', [])),
          M(`${e('<b>hydrocephalus</b>')} یعنی…`, ['تجمع CSF در بطن‌ها', 'تومور مغز', 'التهاب مغز', 'خونریزی مغز'], 'hydr/o (آب) + cephal/o (سر).', null, F('hydrocephalus-brain', [])),
          T('spina bifida occulta بدون بیرون‌زدگی است.', true, 'occulta = پنهان.'),
          W('واژه‌ای بساز به معنی «فتق پرده‌های مغز»', ['mening/o', '-cele'], ['myel/o', '-oma', 'hydr/o'], 'meningocele.'),
          P('هر بیماری را به معنی‌اش وصل کن', [['anencephaly', 'نبود مغز'], ['hydrocephalus', 'آب‌آوردگی مغز'], ['cerebral palsy', 'فلج مغزی'], ['spina bifida', 'شکاف ستون مهره']], 'مادرزادی.'),
          B('اختصار ___ یعنی فلج مغزی.', ['CP', 'CVA', 'MS'], 'cerebral palsy.'),
          S('املای انگلیسی «هیدروسفالی» را بنویس', 'hydrocephalus', 'hydr/o + cephal/o + -us.', 'hydro…'),
          N('r2m:ds')
        ]
      },
      {
        id: 'ds8', title: 'بیماری‌های تحلیل‌برنده', icon: '🧓', items: [
          L('پنج بیماری مهم', `${fig('degenerative', [], 'بیماری‌های تحلیل‌برنده')}${tbl([['بیماری', 'نشانه اصلی'], [e('Alzheimer disease (AD)'), 'فراموشی پیشرونده؛ شایع‌ترین علت دمانس'], [e('Parkinson disease (PD)'), 'لرزش، سفتی، کندی؛ کمبود دوپامین'], [e('multiple sclerosis (MS)'), 'تخریب میلین؛ ضعف، بی‌حسی، تاری دید'], [e('ALS'), 'تحلیل نورون حرکتی؛ ضعف و آتروفی'], [e('Huntington chorea'), 'ارثی؛ حرکات رقص‌مانند و دمانس']])}`),
          L('سناریوها', `${fig('alzheimer-brain', ['مغز طبیعی و مغز در آلزایمر'], 'آتروفی مغز در آلزایمر')}${pearl('سناریوی APPLY کتاب: Jose Gutierrez در بستن دکمه و به خاطر سپردن مشکل دارد و لنگ می‌زند؛ فشار خونش طبیعی است. EEG، آزمایش خون و reflex tests تشخیص Parkinson disease را تأیید کرد.')}${pearl('خانم Amy Shine، ۴۹ ساله، برای Huntington chorea مثبت شد؛ بیماری ارثی و پیشرونده است و درمان فقط علائم را کنترل می‌کند.')}`),
          M('کمبود دوپامین علت کدام بیماری است؟', ['Parkinson disease', 'Alzheimer disease', 'multiple sclerosis', 'ALS'], 'لرزش و کندی حرکت.', null, F('degenerative', [])),
          M('در ام‌اس چه چیزی تخریب می‌شود؟', ['غلاف میلین', 'عضله قلب', 'جمجمه', 'مایع مغزی-نخاعی'], 'demyelination.', null, F('ms-myelin', [])),
          T('آلزایمر شایع‌ترین علت دمانس است.', true, 'AD.', F('alzheimer-brain', [])),
          O('نشانه‌های Jose Gutierrez را به ترتیب کشف بچین', ['trouble buttoning shirts', 'memory problems and limp', 'EEG and reflex tests', 'diagnosis: Parkinson disease'], 'سناریوی کتاب.'),
          P('هر بیماری را به نشانه‌اش وصل کن', [['Alzheimer disease', 'فراموشی'], ['Parkinson disease', 'لرزش و کندی'], ['Huntington chorea', 'حرکات رقص‌مانند'], ['ALS', 'تحلیل نورون حرکتی']], 'تحلیل‌برنده‌ها.'),
          B('ضعف عضله با خستگی زودرس در اتصال عصب-عضله ___ است.', ['myasthenia gravis', 'multiple sclerosis', 'Bell palsy'], 'my/o + -asthenia.'),
          S('املای انگلیسی «زوال عقل» را بنویس', 'dementia', 'de- + ment/o + -ia.', 'demen…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: 'عفونت، عصب و تومور', icon: '🦠', items: [
          L('عفونت‌ها و بیماری‌های عصب', `${tbl([['بیماری', 'معنی'], [e('meningitis'), 'التهاب مننژ؛ تب، سردرد، سفتی گردن'], [e('encephalitis'), 'التهاب مغز، اغلب ویروسی'], [e('poliomyelitis'), 'التهاب ماده خاکستری نخاع (poli/o = خاکستری)'], [e('Bell palsy'), 'فلج ناگهانی عصب صورت'], [e('Guillain-Barré syndrome'), 'حمله ایمنی به عصب‌های محیطی؛ ضعف بالارونده']])}${pearl('سناریوی APPLY کتاب: پزشک به خانواده Jaime Shew می‌گوید او viral meningitis دارد و علائمش در چند روز بهتر می‌شود؛ مننژیت ویروسی معمولاً با استراحت، مایعات و مسکن درمان می‌شود.')}`),
          L('تومورهای مغز', `${fig('mri-tumor', ['تومور مخچه که ساقه مغز را به جلو رانده است'], 'MRI: تومور مغز')}• ${e('<b>glioma</b>')}: تومور سلول‌های پشتیبان<br>• ${e('<b>astrocytoma</b>')}: تومور آستروسیت‌های ستاره‌ای<br>• ${e('<b>glioblastoma</b>')}: بدخیم‌ترین گلیوما<br>• ${e('<b>meningioma</b>')}: تومور معمولاً خوش‌خیم مننژ${memo('در جمجمه بسته، حتی تومور خوش‌خیم هم با فشار (ICP) خطرناک است؛ برای همین اندازه تومور مهم است.')}`),
          M('التهاب ماده خاکستری نخاع کدام است؟', ['poliomyelitis', 'meningitis', 'encephalitis', 'neuritis'], 'poli/o + myel/o + -itis.'),
          M('تومور سلول‌های ستاره‌ای مغز چه نام دارد؟', ['astrocytoma', 'meningioma', 'neuroma', 'myeloma'], 'astro = ستاره.', null, F('mri-tumor', [])),
          T('meningioma معمولاً خوش‌خیم و کندرشد است.', true, 'تومور مننژ.'),
          W('واژه‌ای بساز به معنی «تومور گلیا»', ['gli/o', '-oma'], ['gangli/o', '-itis', 'mening/o'], 'glioma.'),
          P('هر بیماری را به معنی‌اش وصل کن', [['meningitis', 'التهاب مننژ'], ['encephalitis', 'التهاب مغز'], ['Bell palsy', 'فلج عصب صورت'], ['sciatica', 'درد عصب سیاتیک']], 'عفونت و عصب.'),
          B('درد تیرکشنده صورت در مسیر عصب پنجم ___ است.', ['trigeminal neuralgia', 'Bell palsy', 'migraine'], 'TN.'),
          S('املای انگلیسی «مننژیت» را بنویس', 'meningitis', 'mening/o + -itis.', 'mening…'),
          N('wb:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۴: سلامت روان
 * سطح ۱: پایه‌ها؛ روان‌پریشی و آشفتگی ذهن • سطح ۲: اضطراب و خلق • سطح ۳: اسکیزوفرنی، رشد، خوردن و درمان
 * لحن درس‌ها محترمانه و بدون برچسب‌زنی است: «بیمار مبتلا به…» نه «بیمار روانی». */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ps', sym: 'Ps', name: 'سلامت روان', short: 'سلامت روان', sub: 'اضطراب، فوبیا، وسواس، افسردگی و دوقطبی، اسکیزوفرنی، اوتیسم و ADHD، اختلال‌های خوردن، روان‌درمانی و داروها',
    color: '#17A398', dark: '#0F7A71', light: '#E1F6F3',
    levels: ['پایه‌ها و روان‌پریشی', 'اضطراب و خلق', 'اختلال‌های دیگر و درمان'],
    gens: EA.genIds('ps'),
    lessons: [
      /* ================= سطح ۱: پایه‌ها و روان‌پریشی ================= */
      {
        id: 'ps1', title: 'خانواده‌های اختلال روانی', icon: '💭', items: [
          L('نقشه کلی', `${fig('mind-map', [], 'خانواده‌های اختلال روانی')}${e('<b>mental health</b>')} یعنی سلامت عاطفی و روانی. اختلال‌های روانی در چند خانواده دسته‌بندی می‌شوند: اضطرابی، خلقی، روان‌پریشی، رشدی، و خوردن و علائم جسمی. مرجع رسمی دسته‌بندی ${e('<b>DSM</b>')} است.`),
          L('دو اصطلاح قدیمی', `${vs(['neurosis', 'اضطراب بدون قطع ارتباط با واقعیت'], ['psychosis', 'قطع ارتباط با واقعیت'])}${wb('psych/o', '-osis')} ← ${e('psychosis')}<br>${wb('psych/o', '-genic')} ← ${e('psychogenic')}: با منشأ روانی${memo('psychosis = ذهن از واقعیت «جدا» می‌شود؛ neurosis = ذهن نگران است ولی در واقعیت می‌ماند.')}`),
          M('مرجع رسمی دسته‌بندی اختلال‌های روانی چیست؟', ['DSM', 'GCS', 'EEG', 'MMPI'], 'Diagnostic and Statistical Manual of Mental Disorders.', null, F('mind-map', [])),
          M(`${e('<b>psychosis</b>')} یعنی…`, ['حالتی با قطع ارتباط با واقعیت', 'اضطراب خفیف', 'بی‌خوابی', 'اختلال خوردن'], 'psych/o + -osis.'),
          T('psychogenic یعنی با منشأ روانی.', true, 'psych/o + -genic.'),
          W('واژه‌ای بساز به معنی «با منشأ روانی»', ['psych/o', '-genic'], ['neur/o', '-osis', 'schiz/o'], 'psychogenic.'),
          P('هر اختلال را به خانواده‌اش وصل کن', [['panic disorder', 'اضطرابی'], ['bipolar disorder', 'خلقی'], ['schizophrenia', 'روان‌پریشی'], ['autism', 'رشدی']], 'خانواده‌ها.'),
          B('صفت ___ یعنی «مربوط به روان‌پزشکی یا اختلال روانی».', ['psychiatric', 'psychogenic', 'psychotic'], 'psych/o + iatr/o + -ic.'),
          S('املای انگلیسی «روان‌پریشی» را بنویس', 'psychosis', 'psych/o + -osis.', 'psych…'),
          N('t2f:ps')
        ]
      },
      {
        id: 'ps2', title: 'هذیان، توهم و بدگمانی', icon: '🌀', items: [
          L('سه نشانه روان‌پریشی', `${tbl([['واژه', 'معنی', 'مثال'], [e('delusion'), 'باور نادرست و ثابت', 'باور اینکه دیگران در پی آزار اویند'], [e('hallucination'), 'دیدن یا شنیدن چیزی که وجود ندارد', 'شنیدن صدا'], [e('paranoia'), 'بدگمانی و احساس تهدید', 'paranoid schizophrenia']])}`),
          L('مراقب باش', `${vs(['delusion', 'خطای باور (فکر)'], ['hallucination', 'خطای حس (دیدن، شنیدن)'])}${memo('Delusion = Do believe (باور)؛ Hallucination = Hear or see (حس).')}${pearl('Case Study 7-2: Jane ۲۱ ساله «chronic paranoid schizophrenia» داشت؛ paranoid یعنی همراه با احساس تهدید و آزار.')}`),
          M('شنیدن صدایی که وجود ندارد چه نام دارد؟', ['hallucination', 'delusion', 'paranoia', 'mania'], 'خطای حس.'),
          M(`${e('<b>delusion</b>')} یعنی…`, ['باور نادرست و ثابت', 'دیدن چیزی که نیست', 'فراموشی', 'اضطراب'], 'خطای فکر.'),
          T('paranoia یعنی احساس بی‌دلیل تهدید و آزار از سوی دیگران.', true, 'Case Study 7-2.'),
          O('از نشانه تا تشخیص را بچین', ['patient hears voices', 'psychiatric evaluation', 'DSM criteria checked', 'diagnosis made'], 'روند ارزیابی.'),
          P('هر واژه را به معنی‌اش وصل کن', [['delusion', 'باور نادرست'], ['hallucination', 'توهم حسی'], ['paranoia', 'بدگمانی'], ['psychosis', 'قطع ارتباط با واقعیت']], 'روان‌پریشی.'),
          B('صفت «همراه با احساس تهدید» ___ است.', ['paranoid', 'manic', 'phobic'], 'Case Study 7-2.'),
          S('املای انگلیسی «توهم» را بنویس', 'hallucination', 'دو l، یک c.', 'hallu…'),
          N('f2t:ps')
        ]
      },
      {
        id: 'ps3', title: 'آشفتگی و گم‌گشتگی ذهن', icon: '🧭', items: [
          L('دلیریوم یا دمانس؟', `${vs(['delirium', 'ناگهانی، گذرا، از بیماری یا دارو'], ['dementia', 'تدریجی، پیشرونده، مثل آلزایمر'])}${e('<b>delirium</b>')} آشفتگی ناگهانی با گیجی و بی‌قراری است. ${e('<b>disorientation</b>')} یعنی بیمار زمان، مکان یا خودش را نمی‌شناسد.`),
          L('در بالین', `${fig('elderly-woman', ['خانم سالمند'], 'سالمند')}${pearl('Case Study کتاب Fremgen: خانم Anna Moore، ۸۳ ساله، با aphasia، left hemiparesis، syncope و delirium به ER آمد؛ CT انفارکت نیمکره راست را نشان داد: سکته (CVA) در سرخرگ مغزی میانی.')}${memo('دلیریوم مثل طوفان ناگهانی است و دمانس مثل غروب آهسته.')}`),
          M('آشفتگی ناگهانی ذهن که اغلب از بیماری یا دارو است چه نام دارد؟', ['delirium', 'dementia', 'depression', 'dyslexia'], 'شروع ناگهانی.'),
          M('بیماری که نمی‌داند کجاست و چه روزی است، دچار… است.', ['disorientation', 'insomnia', 'aphasia', 'mania'], 'گم‌گشتگی ذهنی.'),
          T('دمانس معمولاً تدریجی و پیشرونده است.', true, 'برخلاف دلیریوم.'),
          P('هر واژه را به ویژگی‌اش وصل کن', [['delirium', 'ناگهانی'], ['dementia', 'پیشرونده'], ['disorientation', 'گم کردن زمان و مکان'], ['amnesia', 'فراموشی']], 'آشفتگی ذهن.'),
          M('در پرونده Anna Moore، کدام نشانه به معنی «غش» است؟', ['syncope', 'delirium', 'aphasia', 'hemiparesis'], 'syncope.', null, F('elderly-woman', [])),
          B('Anna Moore ضعف سمت چپ داشت؛ یعنی left ___.', ['hemiparesis', 'hemiplegia', 'paraplegia'], 'ضعف = ‎-paresis‎.'),
          S('املای انگلیسی «دلیریوم» را بنویس', 'delirium', 'آشفتگی حاد.', 'deli…'),
          N('d2t:ps')
        ]
      },
      /* ================= سطح ۲: اضطراب و خلق ================= */
      {
        id: 'ps4', title: 'اضطراب و هراس', icon: '😰', items: [
          L('بدن مضطرب', `${fig('fight-flight', [], 'پاسخ جنگ یا گریز')}${e('<b>anxiety</b>')} احساس نگرانی و ترس است که با ضربان تند، تنفس تند و تعریق همراه است؛ همان پاسخ سمپاتیک. وقتی بی‌دلیل، شدید و مداوم باشد، اختلال است.`),
          L('دو اختلال', `• ${e('<b>generalized anxiety disorder (GAD)</b>')}: نگرانی دائمی و بیش از حد درباره کارهای روزمره، ماه‌ها<br>• ${e('<b>panic disorder</b>')}: حمله‌های ناگهانی ترس شدید با تپش قلب، تنگی نفس و درد قفسه سینه${pearl('خانم Gina Jones (سناریوی کتاب) فقط در موقعیت‌های پر استرس علائم دارد؛ این پاسخ طبیعی است و لزوماً اختلال نیست.')}${memo('GAD = نگرانی مثل باران همیشگی؛ panic = مثل رعد و برق ناگهانی.')}`),
          M('نگرانی دائمی و بیش از حد درباره کارهای روزمره چه نام دارد؟', ['generalized anxiety disorder', 'panic disorder', 'bipolar disorder', 'phobia'], 'GAD.', null, F('fight-flight', [])),
          M('حمله ناگهانی ترس شدید با تپش قلب، نشانه کدام است؟', ['panic disorder', 'depression', 'schizophrenia', 'autism'], 'حمله پانیک.'),
          T('ضربان تند و تعریق در اضطراب، کار دستگاه سمپاتیک است.', true, 'جنگ یا گریز.'),
          O('یک حمله پانیک را بچین', ['sudden intense fear', 'pounding heart and short breath', 'peak within minutes', 'gradual calming'], 'اوج در چند دقیقه.'),
          P('هر واژه را به معنی‌اش وصل کن', [['anxiety', 'اضطراب'], ['GAD', 'اضطراب فراگیر'], ['panic attack', 'حمله هراس'], ['anxiolytic', 'داروی ضداضطراب']], 'اضطراب.'),
          B('داروی ضداضطراب را ___ می‌گویند.', ['anxiolytic', 'antipsychotic', 'anticonvulsant'], 'anxio + -lytic.'),
          S('املای انگلیسی «اضطراب» را بنویس', 'anxiety', 'x مثل گ‌ز.', 'anx…'),
          N('r2m:ps')
        ]
      },
      {
        id: 'ps5', title: 'فوبیا، وسواس و PTSD', icon: '🕷️', items: [
          L('فوبیا', `${fig('phobias', [], 'فوبیاها')}${e('<b>phobia</b>')} ترس شدید، پایدار و غیرمنطقی از چیزی خاص است.<br>${e('agoraphobia')}: ترس از مکان شلوغ و باز • ${e('claustrophobia')}: ترس از فضای بسته • ${e('photophobia')}: حساسیت به نور`),
          L('وسواس و آسیب', `• ${e('<b>obsessive-compulsive disorder (OCD)</b>')}: فکرهای ناخواسته تکرارشونده (${e('obsessions')}) و کارهای تکراری (${e('compulsions')})؛ مثل شستن مکرر دست<br>• ${e('<b>posttraumatic stress disorder (PTSD)</b>')}: اضطراب، کابوس و یادآوری ناگهانی پس از یک رویداد هولناک${memo('Obsession در ذهن است و Compulsion در دست.')}${pearl('Pretest کتاب Cohen: «An extreme, persistent fear is a phobia».')}`),
          M('ترس شدید و پایدار از چیزی خاص چه نام دارد؟', ['phobia', 'mania', 'delusion', 'paranoia'], 'Pretest کتاب Cohen.', null, F('phobias', [])),
          M('ترس از فضای بسته کدام است؟', ['claustrophobia', 'agoraphobia', 'acrophobia', 'photophobia'], 'claustr = بسته.'),
          T('در OCD، شستن مکرر دست یک compulsion است.', true, 'رفتار تکراری.'),
          W('واژه‌ای بساز به معنی «ترس از مکان‌های باز و شلوغ»', ['agora', '-phobia'], ['claustro', '-mania', 'photo'], 'agoraphobia.'),
          P('هر واژه را به معنی‌اش وصل کن', [['agoraphobia', 'ترس از مکان شلوغ'], ['claustrophobia', 'ترس از فضای بسته'], ['OCD', 'وسواس فکری-عملی'], ['PTSD', 'استرس پس از سانحه']], 'اضطرابی‌ها.'),
          B('اختصار ___ یعنی اختلال استرس پس از سانحه.', ['PTSD', 'OCD', 'GAD'], 'posttraumatic stress disorder.'),
          S('املای انگلیسی «فوبیا» را بنویس', 'phobia', 'ph = ف.', 'pho…'),
          N('m2r:ps')
        ]
      },
      {
        id: 'ps6', title: 'افسردگی و دوقطبی', icon: '🌗', items: [
          L('خلق', `${fig('mood-wave', [], 'نوسان خلق')}• ${e('<b>depression</b>')}: غم پایدار، بی‌علاقگی، کم‌انرژی و ناامیدی<br>• ${e('<b>mania</b>')}: هیجان و شادی بیش از حد، گفتار تند و کم‌خوابی<br>• ${e('<b>bipolar disorder (BPD)</b>')}: دوره‌های شیدایی و افسردگی به نوبت`),
          L('انواع دیگر', `${e('<b>seasonal affective disorder (SAD)</b>')}: افسردگی در ماه‌های تاریک زمستان.پسوند ${e('-mania')} در واژه‌های دیگری هم می‌آید؛ مثل ${e('megalomania')} (خودبزرگ‌بینی).${memo('bipolar یعنی «دو قطب»؛ مثل آهنربا که دو سر دارد: شیدایی و افسردگی.')}${pearl('پس از آسیب نخاع، ویلیام (Case Study کتاب Cohen) دچار depression و anxiety شد و مشاوره روان‌شناسی گرفت.')}`),
          M('اختلالی با دوره‌های شیدایی و افسردگی به نوبت چه نام دارد؟', ['bipolar disorder', 'GAD', 'schizophrenia', 'OCD'], 'دو قطب.', null, F('mood-wave', [])),
          M(`${e('<b>mania</b>')} یعنی…`, ['هیجان و شادی بیش از حد', 'غم پایدار', 'ترس شدید', 'فراموشی'], 'شیدایی.'),
          T('SAD نوعی افسردگی در ماه‌های تاریک سال است.', true, 'seasonal affective disorder.'),
          O('چرخه خلق در دوقطبی را بچین', ['normal mood', 'mania (high)', 'return to baseline', 'depression (low)'], 'نوسان بین دو قطب.'),
          P('هر واژه را به معنی‌اش وصل کن', [['depression', 'افسردگی'], ['mania', 'شیدایی'], ['BPD', 'اختلال دوقطبی'], ['SAD', 'افسردگی فصلی']], 'اختلال‌های خلقی.'),
          B('داروی ___ مثل SSRI، افسردگی را درمان می‌کند.', ['antidepressant', 'anticonvulsant', 'antipsychotic'], 'anti- + depressant.'),
          S('املای انگلیسی «افسردگی» را بنویس', 'depression', 'de- + press.', 'depr…'),
          N('t2f:ps')
        ]
      },
      /* ================= سطح ۳: اختلال‌های دیگر و درمان ================= */
      {
        id: 'ps7', title: 'اسکیزوفرنی و داروهایش', icon: '🧩', items: [
          L('اسکیزوفرنی', `${wb('schiz/o', '-phrenia')} ← ${e('<b>schizophrenia</b>')}: اختلال روان‌پریشی با هذیان، توهم، تفکر آشفته و کناره‌گیری (${e('schiz/o')} = شکافته، ${e('phren/o')} = ذهن). درمان اصلی ${e('<b>antipsychotic</b>')} است که ${e('<b>neuroleptic</b>')} هم نامیده می‌شود.`),
          L('یک واکنش خطرناک', `${e('<b>neuroleptic malignant syndrome (NMS)</b>')}: واکنش نادر و خطرناک به داروهای ضدروان‌پریشی با تب بالا، سفتی عضلات و تغییر هوشیاری.${pearl('Case Study 7-2 کتاب Cohen: Jane با تب ۱۰۴ فارنهایت، lethargy و muscular rigidity آمد؛ هفته قبل داروی neuroleptic او تغییر کرده بود. داروها قطع و با مایع IV، bromocriptine و dantrolene درمان شد.')}${memo('schizophrenia به معنی «شخصیت دوگانه» نیست؛ یعنی ذهن از واقعیت شکاف می‌خورد.')}`),
          M('داروی اصلی اسکیزوفرنی کدام گروه است؟', ['antipsychotic', 'antidepressant', 'analgesic', 'anticonvulsant'], 'neuroleptic.'),
          M('NMS با کدام داروها مرتبط است؟', ['داروهای ضدروان‌پریشی', 'استروئیدها', 'لخته‌شکن‌ها', 'مسکن‌ها'], 'Case Study 7-2.'),
          T('neuroleptic همان antipsychotic است.', true, 'Haldol (haloperidol) مثال آن است.'),
          O('روند درمان Jane را بچین', ['neuroleptic changed', 'fever and rigidity', 'drugs stopped and IV fluids', 'restart low-dose neuroleptic'], 'Case Study 7-2.'),
          P('هر واژه پرونده Jane را به معنی‌اش وصل کن', [['lethargic', 'خواب‌آلود و کند'], ['psychiatrist', 'روان‌پزشک'], ['diaphoresis', 'تعریق شدید'], ['antispasmodic', 'ضد اسپاسم']], 'Case Study 7-2.'),
          B('اختصار ___ یعنی سندروم نورولپتیک بدخیم.', ['NMS', 'MS', 'CNS'], 'neuroleptic malignant syndrome.'),
          S('املای انگلیسی «اسکیزوفرنی» را بنویس', 'schizophrenia', 'schiz/o + -phrenia.', 'schizo…'),
          N('wb:ps')
        ]
      },
      {
        id: 'ps8', title: 'رشد، خوردن و علائم جسمی', icon: '🍽️', items: [
          L('اختلال‌های رشدی', `• ${e('<b>autism spectrum disorder (ASD)</b>')}: مشکل در ارتباط اجتماعی و گفتار، با رفتارهای تکراری (${e('aut/o')} = خود)<br>• ${e('<b>ADHD</b>')}: کم‌توجهی، تکانشگری و بیش‌فعالی که از کودکی شروع می‌شود`),
          L('خوردن و جسم', `${tbl([['اختلال', 'معنی'], [e('anorexia nervosa'), 'ترس شدید از چاقی و گرسنگی دادن به خود'], [e('bulimia nervosa'), 'پرخوری و سپس پاک‌سازی مثل استفراغ'], [e('somatic symptom disorder'), 'علائم جسمی با نگرانی بیش از حد'], [e('hypochondriasis'), 'نگرانی دائمی از ابتلا به بیماری جدی']])}${memo('an- + orexia یعنی «بی‌اشتهایی»؛ ولی در anorexia nervosa اشتها هست و بیمار از ترس چاقی نمی‌خورد.')}`),
          M('اختلال رشدی با مشکل ارتباط اجتماعی و رفتار تکراری کدام است؟', ['autism spectrum disorder', 'ADHD', 'bulimia', 'OCD'], 'ASD.'),
          M('پرخوری و سپس استفراغ عمدی، نشانه کدام است؟', ['bulimia nervosa', 'anorexia nervosa', 'hypochondriasis', 'SAD'], 'پاک‌سازی.'),
          T('ADHD معمولاً از کودکی شروع می‌شود.', true, 'attention-deficit/hyperactivity disorder.'),
          P('هر اختلال را به معنی‌اش وصل کن', [['ASD', 'طیف اوتیسم'], ['ADHD', 'کم‌توجهی-بیش‌فعالی'], ['anorexia nervosa', 'بی‌اشتهایی عصبی'], ['hypochondriasis', 'خودبیمارانگاری']], 'اختلال‌های دیگر.'),
          M('ریشه aut/o در autism یعنی…', ['خود', 'گوش', 'خودرو', 'ذهن'], 'aut/o = self.'),
          B('اختصار ___ یعنی اختلال علائم جسمی.', ['SSD', 'SAD', 'ASD'], 'somatic symptom disorder.'),
          S('املای انگلیسی «بی‌اشتهایی عصبی» را بنویس', 'anorexia nervosa', 'an- + orexia.', 'anor…'),
          N('f2t:ps')
        ]
      },
      {
        id: 'ps9', title: 'درمان در سلامت روان', icon: '🛋️', items: [
          L('گفت‌وگو و درمان', `• ${e('<b>psychotherapy</b>')}: درمان با گفت‌وگو با درمانگر آموزش‌دیده<br>• ${e('<b>cognitive behavioral therapy (CBT)</b>')}: تغییر فکرها و رفتارهای ناسازگار<br>• ${e('<b>electroconvulsive therapy (ECT)</b>')}: جریان الکتریکی کنترل‌شده در بیهوشی برای افسردگی شدید`),
          L('داروها', `${fig('psych-drugs', [], 'داروهای روان‌پزشکی')}${tbl([['دارو', 'برای'], [e('antidepressant (SSRI)'), 'افسردگی'], [e('anxiolytic'), 'اضطراب'], [e('antipsychotic'), 'روان‌پریشی'], [e('mood stabilizer'), 'دوقطبی؛ مثل lithium'], [e('stimulant'), 'ADHD']])}${pearl('اختصار SSRI یعنی selective serotonin reuptake inhibitor؛ سروتونین را در سیناپس بیشتر نگه می‌دارد.')}`),
          M('درمان با تغییر فکرها و رفتارهای ناسازگار چه نام دارد؟', ['CBT', 'ECT', 'TENS', 'EEG'], 'cognitive behavioral therapy.'),
          M('داروی تثبیت‌کننده خلق در دوقطبی کدام است؟', ['mood stabilizer (lithium)', 'stimulant', 'analgesic', 'anticonvulsant only'], 'lithium.', null, F('psych-drugs', [])),
          T('ECT برای افسردگی شدید و زیر بیهوشی انجام می‌شود.', true, 'electroconvulsive therapy.'),
          W('واژه‌ای بساز به معنی «درمان روانی (با گفت‌وگو)»', ['psych/o', '-therapy'], ['neur/o', '-lysis', '-osis'], 'psychotherapy.'),
          P('هر دارو را به کاربردش وصل کن', [['antidepressant', 'افسردگی'], ['anxiolytic', 'اضطراب'], ['antipsychotic', 'روان‌پریشی'], ['stimulant', 'ADHD']], 'داروهای روان‌پزشکی.'),
          B('اختصار ___ یعنی شوک‌درمانی.', ['ECT', 'CBT', 'EEG'], 'electroconvulsive therapy.'),
          S('املای انگلیسی «روان‌درمانی» را بنویس', 'psychotherapy', 'psych/o + -therapy.', 'psycho…'),
          N('m2r:ps')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — دنیای ۵: تشخیص و درمان
 * سطح ۱: معاینه و آزمون‌ها • سطح ۲: تصویربرداری و جراحی • سطح ۳: دارو، توان‌بخشی و اختصارهای پرونده */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: 'تشخیص و درمان', short: 'تشخیص و درمان', sub: 'معاینه عصبی و گلاسگو، EEG و EMG، پونکسیون کمری، CT و MRI و PET، کرانیوتومی و لامینکتومی، شانت، داروها و توان‌بخشی',
    color: '#3D6FD6', dark: '#274FA8', light: '#E2ECFB',
    levels: ['معاینه و آزمون‌ها', 'تصویربرداری و جراحی', 'دارو، توان‌بخشی و پرونده'],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: معاینه و آزمون‌ها ================= */
      {
        id: 'tx1', title: 'معاینه عصبی و گلاسگو', icon: '🩺', items: [
          L('معاینه عصبی', `${e('<b>neurological examination</b>')} این‌ها را می‌سنجد: وضعیت ذهنی و ${e('level of consciousness (LOC)')}، اعصاب جمجمه‌ای، قدرت عضلات، حس، رفلکس‌ها (${e('DTR')} و بابینسکی) و هماهنگی و راه رفتن (${e('gait')}).`),
          L('مقیاس گلاسگو', `${fig('gcs', [], 'مقیاس کمای گلاسگو')}${e('<b>Glasgow Coma Scale (GCS)</b>')} سطح هوشیاری را از ۳ تا ۱۵ نمره می‌دهد: باز شدن چشم (${e('E')} ۱ تا ۴)، پاسخ کلامی (${e('V')} ۱ تا ۵) و پاسخ حرکتی (${e('M')} ۱ تا ۶). نمره ۸ و کمتر یعنی آسیب شدید.${pearl('Case Study 7-1: برای Allen در ED یک GCS گرفتند تا ببینند برای درمان لخته‌شکن مناسب است یا نه. ابزار «مقیاس کمای گلاسگو» در بخش ابزارها را امتحان کن!')}`),
          M('بیشترین نمره GCS چند است؟', ['۱۵', '۱۰', '۲۰', '۶'], '۴ + ۵ + ۶.', null, F('gcs', [])),
          M('نمره GCS برابر ۸ یا کمتر یعنی…', ['آسیب شدید مغزی (کما)', 'آسیب خفیف', 'هوشیاری کامل', 'خطای اندازه‌گیری'], 'راه هوایی در خطر.'),
          T('GCS سه بخش دارد: چشم، کلام و حرکت.', true, 'E، V، M.'),
          O('بخش‌های GCS را به ترتیب معمول بچین', ['eye opening', 'verbal response', 'motor response'], 'E، V، M.'),
          P('هر بخش را به بیشترین نمره‌اش وصل کن', [['eye opening', '۴'], ['verbal response', '۵'], ['motor response', '۶'], ['total GCS', '۱۵']], 'نمره‌ها.'),
          B('اختصار ___ یعنی سطح هوشیاری.', ['LOC', 'GCS', 'ICP'], 'level of consciousness.'),
          S('املای انگلیسی «سطح هوشیاری» را بنویس', 'level of consciousness', 'conscious = هوشیار.', 'level…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: 'نوار مغز و نوار عصب', icon: '📈', items: [
          L('EEG', `${fig('eeg', [], 'نوار مغز')}${wb('electr/o', 'encephal/o', '-graphy')} ← ${e('<b>electroencephalography (EEG)</b>')}: ثبت فعالیت الکتریکی مغز با الکترودهای روی سر. نتیجه آن ${e('electroencephalogram')} است. در تشنج امواج نامنظم و بلند دیده می‌شوند.`),
          L('آزمون‌های دیگر', `${fig('eeg-photo', ['الکترودهای EEG روی سر'], 'EEG')}• ${e('<b>electromyography (EMG)</b>')}: ثبت فعالیت الکتریکی عضله<br>• ${e('<b>nerve conduction study (NCS)</b>')}: سرعت هدایت پیام در عصب<br>• ${e('<b>evoked potentials</b>')}: پاسخ مغز به صدا، نور یا لمس؛ مثل ${e('VEP')}${memo('‎-graphy‎ روش ثبت است و ‎-gram‎ خود نوار.')}`),
          M('ابزاری برای بررسی فعالیت الکتریکی مغز کدام است؟', ['electroencephalograph', 'electrocardiograph', 'CT scanner', 'sonograph'], 'Pretest کتاب Cohen.', null, F('eeg', [])),
          M('EMG چه چیزی را ثبت می‌کند؟', ['فعالیت الکتریکی عضله', 'فعالیت مغز', 'جریان خون مغز', 'فشار CSF'], 'my/o = عضله.'),
          T('electroencephalogram خود نوار ثبت‌شده است.', true, '‎-gram‎ = نوشته، ثبت.', F('eeg-photo', [])),
          W('واژه‌ای بساز به معنی «روش ثبت برق مغز»', ['electr/o', 'encephal/o', '-graphy'], ['-gram', 'my/o', 'cerebr/o'], 'electroencephalography.'),
          P('هر آزمون را به کارش وصل کن', [['EEG', 'برق مغز'], ['EMG', 'برق عضله'], ['NCS', 'سرعت هدایت عصب'], ['VEP', 'پاسخ مغز به نور']], 'آزمون‌های الکتریکی.'),
          B('پزشک برای آقای Gutierrez یک ___ از مغز درخواست کرد.', ['electroencephalogram', 'electrocardiogram', 'myelogram'], 'سناریوی کتاب.'),
          S('املای انگلیسی «نوار مغز» را بنویس', 'electroencephalogram', 'electr/o + encephal/o + -gram.', 'electro…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: 'پونکسیون کمری', icon: '💉', items: [
          L('کشیدن مایع نخاع', `${fig('lumbar-puncture', [], 'پونکسیون کمری')}${e('<b>lumbar puncture (LP)</b>')} یا ${e('spinal tap')}: سوزن بین مهره‌های کمری (معمولاً ${e('L3–L4')}) وارد فضای زیرعنکبوتیه می‌شود و CSF برای آزمایش (مثلاً در مننژیت) گرفته می‌شود. سوزن زیر پایان نخاع (${e('L1–L2')}) وارد می‌شود تا به نخاع آسیب نرسد.`),
          L('وضعیت بیمار', `${fig('lp-position', ['وضعیت خوابیده به پهلو برای LP'], 'وضعیت بیمار')}بیمار به پهلو می‌خوابد و زانوها را به سینه می‌چسباند تا فاصله مهره‌ها باز شود.${pearl('در Consultation Report کتاب Fremgen، عبارت «puncture with a needle into the low back to withdraw fluid» یعنی lumbar puncture؛ نتیجه آن طبیعی بود.')}`),
          M('در LP سوزن معمولاً بین کدام مهره‌ها وارد می‌شود؟', ['L3 و L4', 'C1 و C2', 'T6 و T7', 'S1 و S2'], 'زیر پایان نخاع.', null, F('lumbar-puncture', [])),
          M('در LP چه چیزی گرفته می‌شود؟', ['مایع مغزی-نخاعی', 'خون سرخرگی', 'مغز استخوان', 'بافت عصب'], 'CSF.'),
          T('سوزن LP پایین‌تر از انتهای نخاع وارد می‌شود تا به نخاع آسیب نرسد.', true, 'نخاع تا حدود L2.'),
          O('مراحل LP را بچین', ['patient lies on side, knees to chest', 'skin cleaned and numbed', 'needle between L3 and L4', 'CSF collected', 'sample sent to lab'], 'روند پونکسیون.'),
          P('هر واژه را به معنی‌اش وصل کن', [['lumbar puncture', 'پونکسیون کمری'], ['spinal tap', 'نام دیگر LP'], ['subarachnoid space', 'فضای CSF'], ['L3', 'سومین مهره کمری']], 'LP.'),
          B('اختصار ___ یعنی پونکسیون کمری.', ['LP', 'PT', 'PL'], 'lumbar puncture.'),
          S('املای انگلیسی «پونکسیون کمری» را بنویس', 'lumbar puncture', 'lumb/o = کمر.', 'lumbar…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲: تصویربرداری و جراحی ================= */
      {
        id: 'tx4', title: 'تصویربرداری مغز', icon: '🖥️', items: [
          L('سه روش اصلی', `${fig('brain-imaging', [], 'CT، MRI و PET')}• ${e('<b>CT</b>')}: سریع؛ خونریزی را خوب نشان می‌دهد<br>• ${e('<b>MRI</b>')}: جزئیات بافت نرم مغز و نخاع؛ ${e('MRA')} برای رگ‌ها<br>• ${e('<b>PET</b>')}: با ماده نشان‌دار رادیواکتیو، فعالیت و سوخت‌وساز مغز را نشان می‌دهد`),
          L('چند تصویر واقعی', `${fig('mri-coronal', ['تومور در سمت راست بالای مغز'], 'MRI: تومور مغز')}${fig('pet-cocaine', ['کاهش فعالیت مغز در اثر کوکائین'], 'PET: اثر کوکائین بر مغز')}${e('cerebral angiography')}: عکس رگ‌های مغز با ماده حاجب؛ ${e('myelography')}: عکس نخاع با ماده حاجب؛ ${e('carotid ultrasound')}: سونوگرافی سرخرگ‌های گردن.`),
          M('کدام روش فعالیت و سوخت‌وساز مغز را نشان می‌دهد؟', ['PET', 'CT', 'X-ray', 'EMG'], 'positron emission tomography.', null, F('pet-cocaine', [])),
          M('MRA برای دیدن چه چیزی است؟', ['رگ‌های خونی', 'امواج مغز', 'سرعت عصب', 'استخوان جمجمه'], 'magnetic resonance angiography.'),
          T('CT برای پیدا کردن سریع خونریزی مغزی مناسب است.', true, 'Case Study 7-1.', F('ct-tumor', [])),
          W('واژه‌ای بساز به معنی «روش ثبت تصویر نخاع»', ['myel/o', '-graphy'], ['my/o', '-gram', 'encephal/o'], 'myelography.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['CT', 'computed tomography'], ['MRI', 'magnetic resonance imaging'], ['MRA', 'magnetic resonance angiography'], ['PET', 'positron emission tomography']], 'تصویربرداری.'),
          B('در Consultation Report کتاب، «injection with radioactive isotopes» برای ___ است.', ['PET scan', 'EEG', 'lumbar puncture'], 'ماده رادیواکتیو.'),
          S('املای انگلیسی «میلوگرافی» را بنویس', 'myelography', 'myel/o + -graphy.', 'myelo…'),
          N('r2m:tx')
        ]
      },
      {
        id: 'tx5', title: 'جراحی جمجمه', icon: '🔪', items: [
          L('باز کردن جمجمه', `${fig('craniotomy', [], 'جراحی‌های جمجمه')}${wb('crani/o', '-tomy')} ← ${e('<b>craniotomy</b>')}: برش جمجمه برای دسترسی به مغز<br>${wb('crani/o', '-ectomy')} ← ${e('<b>craniectomy</b>')}: برداشتن بخشی از جمجمه`),
          L('بدون برش باز', `${e('<b>stereotactic radiosurgery</b>')}: پرتوهای دقیق که تومور را بدون جراحی باز از بین می‌برند.<br>${wb('cry/o', 'surgery')} ← ${e('<b>cryosurgery</b>')}: سرماجراحی با سرمای شدید.${pearl('Consultation Report کتاب Fremgen: خانم ۳۸ ساله با astrocytoma در قشر نیمکره راست؛ «right skull incision» (craniotomy) انجام شد و تومور با «extreme cold» (cryosurgery) از بین رفت.')}${fig('ct-tumor', ['تومور بدخیم در نیمکره چپ'], 'تصویر تومور مغز')}`),
          M(`${e('<b>craniotomy</b>')} یعنی…`, ['برش جمجمه', 'برداشتن جمجمه', 'ترمیم جمجمه', 'عکس جمجمه'], 'crani/o + -tomy.', null, F('craniotomy', [])),
          M('از بین بردن تومور با سرمای شدید چه نام دارد؟', ['cryosurgery', 'radiosurgery', 'craniectomy', 'neurolysis'], 'cry/o = سرما.'),
          T('stereotactic radiosurgery بدون برش باز جمجمه انجام می‌شود.', true, 'پرتو دقیق.'),
          O('روند درمان خانم ۳۸ ساله (Consultation Report) را بچین', ['speech difficulty and hemiparesis', 'EEG and LP normal', 'PET shows mass', 'craniotomy', 'cryosurgery of the tumor'], 'گزارش کتاب.'),
          P('هر واژه پرونده را به معادل پزشکی‌اش وصل کن', [['specialist in nervous system diseases', 'neurologist'], ['loss of motion on one side', 'hemiplegia'], ['astrocyte tumor', 'astrocytoma'], ['right skull incision', 'craniotomy']], 'Chart Note Transcription.'),
          B('برداشتن بخشی از جمجمه ___ است.', ['craniectomy', 'craniotomy', 'cranioplasty'], '‎-ectomy‎ = برداشتن.'),
          S('املای انگلیسی «کرانیوتومی» را بنویس', 'craniotomy', 'crani/o + -tomy.', 'cranio…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx6', title: 'جراحی ستون مهره و عصب', icon: '🧵', items: [
          L('ستون مهره', `${wb('lamin/o', '-ectomy')} ← ${e('<b>laminectomy</b>')}: برداشتن تیغه مهره برای کم کردن فشار روی نخاع یا ریشه‌ها<br>${e('<b>spinal fusion</b>')}: جوش دادن دو یا چند مهره برای پایداری ستون مهره${pearl('Discharge Summary کتاب Fremgen: مرد ۲۳ ساله پس از تصادف موتور، شکستگی خردشده L2 با epidural hematoma و paraplegia کامل داشت؛ lumbar laminectomy with spinal fusion انجام شد.')}`),
          L('عصب', `${tbl([['جراحی', 'معنی'], [e('neurorrhaphy'), 'بخیه عصب (‎-rrhaphy‎)'], [e('neuroplasty'), 'ترمیم عصب'], [e('neurectomy'), 'برداشتن عصب'], [e('neurolysis'), 'آزادسازی یا تخریب عصب'], [e('rhizotomy'), 'قطع ریشه عصب برای درد یا اسپاستیسیته'], [e('vagotomy'), 'قطع عصب واگ']])}${memo('‎-rrhaphy‎ بخیه است و ‎-rrhexis‎ پارگی؛ هر دو با rrh شروع می‌شوند.')}`),
          M(`${e('<b>neurorrhaphy</b>')} یعنی…`, ['بخیه عصب', 'برداشتن عصب', 'درد عصب', 'التهاب عصب'], '‎-rrhaphy‎ = بخیه.'),
          M('برای کم کردن فشار روی نخاع، تیغه مهره را برمی‌دارند؛ این جراحی…', ['laminectomy', 'craniotomy', 'vagotomy', 'neuroplasty'], 'lamin/o + -ectomy.'),
          T('spinal fusion یعنی جوش دادن مهره‌ها به هم.', true, 'پایداری ستون مهره.'),
          W('واژه‌ای بساز به معنی «ترمیم جراحی عصب»', ['neur/o', '-plasty'], ['-rrhaphy', 'myel/o', '-ectomy'], 'neuroplasty.'),
          P('هر جراحی را به معنی‌اش وصل کن', [['neurectomy', 'برداشتن عصب'], ['rhizotomy', 'قطع ریشه عصب'], ['vagotomy', 'قطع عصب واگ'], ['spinal fusion', 'جوش مهره‌ها']], 'جراحی عصب.'),
          B('بیمار Discharge Summary در سطح ___ فلج کامل شد.', ['L2', 'C6', 'T12'], 'complete paraplegia at the L2 level.'),
          S('املای انگلیسی «لامینکتومی» را بنویس', 'laminectomy', 'lamin/o + -ectomy.', 'lamin…'),
          N('t2f:tx')
        ]
      },
      /* ================= سطح ۳: دارو، توان‌بخشی و پرونده ================= */
      {
        id: 'tx7', title: 'شانت و جراحی رگ', icon: '🔧', items: [
          L('شانت', `${fig('vp-shunt', [], 'شانت بطنی-صفاقی')}${e('<b>ventriculoperitoneal (VP) shunt</b>')}: لوله‌ای با دریچه یک‌طرفه که CSF اضافی را از بطن مغز به شکم تخلیه می‌کند؛ درمان هیدروسفالی.${fig('hydrocephalus-child', ['کودک مبتلا به هیدروسفالی'], 'هیدروسفالی')}`),
          L('پیشگیری و درمان سکته', `• ${e('<b>carotid endarterectomy</b>')}: برداشتن پلاک از دیواره درونی سرخرگ کاروتید برای پیشگیری از سکته<br>• ${e('<b>thrombolytic therapy</b>')}: داروی لخته‌شکن (مثل ${e('tPA')}) کمی پس از سکته ایسکمیک${memo('endarterectomy یعنی «برداشتن از درون سرخرگ»: endo + arter + ectomy.')}`),
          M('درمان جراحی هیدروسفالی کدام است؟', ['VP shunt', 'laminectomy', 'vagotomy', 'ECT'], 'تخلیه CSF به شکم.', null, F('vp-shunt', [])),
          M('برداشتن پلاک از سرخرگ کاروتید چه نام دارد؟', ['carotid endarterectomy', 'craniectomy', 'sympathectomy', 'angioplasty of the vagus'], 'پیشگیری از سکته.'),
          T('داروی لخته‌شکن در سکته خونریزی‌دهنده داده نمی‌شود.', true, 'خونریزی را بدتر می‌کند.'),
          O('مسیر CSF در شانت VP را بچین', ['ventricle', 'catheter', 'one-way valve', 'tube under the skin', 'peritoneal cavity'], 'از بطن تا شکم.'),
          P('هر واژه را به معنی‌اش وصل کن', [['VP shunt', 'شانت بطنی-صفاقی'], ['tPA', 'داروی لخته‌شکن'], ['carotid', 'سرخرگ گردن'], ['peritoneum', 'صفاق']], 'شانت و رگ.'),
          B('اختصار ___ یعنی داروی لخته‌شکن فعال‌کننده پلاسمینوژن.', ['tPA', 'TIA', 'TENS'], 'tissue plasminogen activator.'),
          S('املای انگلیسی «شانت» را بنویس', 'shunt', 'مسیر انحرافی.', 'shu…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx8', title: 'داروهای دستگاه عصبی', icon: '💊', items: [
          L('گروه‌های دارویی', `${fig('neuro-drugs', [], 'داروهای عصبی')}${tbl([['دارو', 'کار'], [e('analgesic'), 'مسکن؛ درد را بدون بیهوشی کم می‌کند'], [e('narcotic'), 'مسکن قوی با خطر وابستگی؛ مثل مورفین'], [e('anesthetic'), 'بی‌حسی موضعی یا بیهوشی عمومی (GA)'], [e('anticonvulsant'), 'ضدتشنج؛ مثل phenytoin و diazepam'], [e('hypnotic'), 'خواب‌آور (hypn/o = خواب)']])}`),
          L('چند دارو دیگر', `${tbl([['دارو', 'کار'], [e('sedative'), 'آرام‌بخش'], [e('muscle relaxant'), 'شل‌کننده عضله؛ مثل dantrolene'], [e('dopaminergic drugs'), 'افزایش دوپامین در پارکینسون؛ مثل levodopa']])}${pearl('سناریوی APPLY کتاب: مدیریت درد هنر ظریفی است؛ مسکن‌های narcotic قوی‌اند ولی خطر وابستگی و عوارض دارند.')}${vs(['analgesic', 'درد را کم می‌کند، هوشیاری می‌ماند'], ['anesthetic', 'حس را می‌برد؛ گاهی هوشیاری را هم'])}`),
          M('داروی پیشگیری از تشنج کدام است؟', ['anticonvulsant', 'antidepressant', 'hypnotic', 'analgesic'], 'جدول دارویی کتاب: phenobarbital و diazepam.', null, F('neuro-drugs', [])),
          M('داروی مسکنی که بدون حالت سرخوشی درد را کم می‌کند…', ['analgesic', 'narcotic', 'anesthetic', 'stimulant'], 'تمرین کتاب: without inducing a euphoric state.'),
          T('hypnotic یعنی داروی خواب‌آور.', true, 'hypn/o = خواب.'),
          W('واژه‌ای بساز به معنی «بی‌دردی»', ['an-', '-algesia'], ['anti-', '-esthesia', 'hyper-'], 'analgesia.'),
          P('هر دارو را به کارش وصل کن', [['analgesic', 'مسکن'], ['anesthetic', 'بی‌حسی'], ['hypnotic', 'خواب‌آور'], ['sedative', 'آرام‌بخش']], 'داروهای عصبی.'),
          B('مسکن قوی که حالت سرخوشی و وابستگی ایجاد می‌کند ___ است.', ['narcotic', 'analgesic', 'anticonvulsant'], 'narc/o = کرختی.'),
          S('املای انگلیسی «داروی ضدتشنج» را بنویس', 'anticonvulsant', 'anti- + convulsant.', 'anticon…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: 'توان‌بخشی و اختصارهای پرونده', icon: '📋', items: [
          L('توان‌بخشی', `${e('<b>rehabilitation</b>')} برنامه‌ای برای بازگرداندن توان پس از بیماری یا آسیب است:<br>• ${e('<b>physical therapy (PT)</b>')}: ورزش و حرکت برای قدرت و راه رفتن<br>• ${e('<b>occupational therapy (OT)</b>')}: آموزش دوباره کارهای روزمره<br>• ${e('<b>TENS</b>')}: تحریک الکتریکی عصب از راه پوست برای کم کردن درد${pearl('ویلیام پس از سه هفته توان‌بخشی فشرده توانست چند قدم کوچک بردارد و شانه، بازو و انگشتانش را حرکت دهد.')}`),
          L('یک یادداشت واقعی', `${pearl('سناریوی APPLY کتاب: «Mr. Jones presents to the ED after a motor vehicle accident. Experienced TIA last week; may now have a CVA. Will evaluate for SCI and get MRI, MRA, and EEG. Concerned ICP is elevated. May have a CSF leak.»')}${tbl([['اختصار', 'معنی'], [e('TIA'), 'حمله ایسکمیک گذرا'], [e('CVA'), 'سکته مغزی'], [e('SCI'), 'آسیب نخاع'], [e('ICP'), 'فشار داخل جمجمه'], [e('CSF'), 'مایع مغزی-نخاعی']])}`),
          M('آموزش دوباره کارهای روزمره مثل لباس پوشیدن، کار کدام درمان است؟', ['occupational therapy', 'physical therapy', 'psychotherapy', 'TENS'], 'OT.'),
          M('TENS برای چیست؟', ['کم کردن درد با تحریک الکتریکی عصب', 'ثبت برق مغز', 'تصویربرداری نخاع', 'درمان افسردگی'], 'transcutaneous electrical nerve stimulation.'),
          T('در یادداشت Mr. Jones، پزشک نگران بالا بودن فشار داخل جمجمه است.', true, 'Concerned ICP is elevated.'),
          O('مسیر درمان یک آسیب نخاع را بچین', ['emergency department', 'imaging (MRI)', 'surgery', 'rehabilitation center', 'return home'], 'از اورژانس تا خانه.'),
          P('هر اختصار یادداشت را به معنی‌اش وصل کن', [['SCI', 'آسیب نخاع'], ['MRA', 'آنژیوگرافی با MRI'], ['ICP', 'فشار داخل جمجمه'], ['CSF leak', 'نشت مایع مغزی-نخاعی']], 'یادداشت Mr. Jones.'),
          B('اختصار ___ یعنی فیزیوتراپی.', ['PT', 'OT', 'PET'], 'physical therapy.'),
          S('املای انگلیسی «توان‌بخشی» را بنویس', 'rehabilitation', 're + habilitation.', 'rehab…'),
          N('m2r:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای مغز، نورون، تکانه عصبی، سلامت روان و درمان‌های عصبی الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'مغزک', title: 'یک مغز تازه‌کار', shape: 'brain', color: '#F6B3C6', acc: ['sparkle'], bio: 'حدود ۱۴۰۰ گرم وزن دارد و هشتاد و شش میلیارد نورون؛ هر فکر، حرکت و خاطره از او شروع می‌شود.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌یاب', title: 'استاد neur/o و encephal/o', shape: 'book', color: '#6C4FD0', acc: ['glasses'], bio: 'لغت‌نامه‌ای زنده که هر واژه عصبی را به ریشه، پیشوند و پسوند می‌شکند و myel/o را با my/o قاطی نمی‌کند.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'پازلی', title: 'سلطان پیشوند و پسوند', shape: 'puzzle', color: '#4B3499', acc: ['crown'], bio: '‎-plegia‎ را از ‎-paresis‎ جدا می‌کند و hemi-، para- و quadri- را مثل قطعه‌های پازل کنار هم می‌چیند.' },
    { id: 'cn-0', w: 'cn', lv: 0, name: 'جمجمه‌بان', title: 'سپر استخوانی مغز', shape: 'skull', color: '#F3E4C4', acc: ['helmet'], bio: 'هشت استخوان جمجمه است که مغز را در بر گرفته‌اند؛ crani/o اسم اوست.' },
    { id: 'cn-1', w: 'cn', lv: 1, name: 'سه‌شامه', title: 'نگهبان سه‌لایه', shape: 'shield', color: '#9CB3C9', acc: ['glasses'], bio: 'سخت‌شامه، عنکبوتیه و نرم‌شامه را با هم دارد و در فضای زیرعنکبوتیه CSF را نگه می‌دارد.' },
    { id: 'cn-2', w: 'cn', lv: 2, name: 'ستون‌دار', title: 'شاهراه نخاع', shape: 'vertebra', color: '#F2C94C', acc: ['crown'], bio: 'نخاع را در کانال مهره‌ها پناه می‌دهد؛ ۳۱ جفت عصب نخاعی از دو طرفش بیرون می‌آیند.' },
    { id: 'pn-0', w: 'pn', lv: 0, name: 'نورونی', title: 'یاخته پیام‌رسان', shape: 'neuron', color: '#B7A3EA', acc: ['sparkle'], bio: 'با دندریت‌هایش پیام می‌گیرد و با آکسون بلندش آن را تا پایانه‌ها می‌فرستد.' },
    { id: 'pn-1', w: 'pn', lv: 1, name: 'برق‌رسان', title: 'تکانه پرشتاب', shape: 'bolt', color: '#FFC800', acc: ['glasses'], bio: 'روی غلاف میلین از گرهی به گره دیگر می‌پرد و با سرعتی بیش از ۱۰۰ متر در ثانیه می‌رسد.' },
    { id: 'pn-2', w: 'pn', lv: 2, name: 'ترازوی خودکار', title: 'سمپاتیک و پاراسمپاتیک', shape: 'scale', color: '#17A398', acc: ['crown'], bio: 'یک کفه‌اش «جنگ یا گریز» است و کفه دیگر «استراحت و گوارش»؛ هم‌ایستایی را نگه می‌دارد.' },
    { id: 'ds-0', w: 'ds', lv: 0, name: 'قطره سرخ', title: 'هشدار سکته', shape: 'drop', color: '#D9443A', acc: ['sparkle'], bio: 'می‌داند که در سکته مغزی هر دقیقه مهم است؛ TIA را جدی می‌گیرد و لخته‌شکن را به‌موقع می‌خواهد.' },
    { id: 'ds-1', w: 'ds', lv: 1, name: 'میلینی', title: 'غلاف عایق', shape: 'tube', color: '#DFE9F5', acc: ['glasses'], bio: 'دور آکسون‌ها پیچیده تا پیام سریع برود؛ در ام‌اس جای او پلاک سفت می‌نشیند.' },
    { id: 'ds-2', w: 'ds', lv: 2, name: 'ابر طوفانی', title: 'کارآگاه صرع', shape: 'cloud', color: '#8E6BD8', acc: ['crown'], bio: 'طوفان الکتریکی مغز را می‌شناسد؛ aura، تشنج تونیک-کلونیک و absence را از نوار مغز تشخیص می‌دهد.' },
    { id: 'ps-0', w: 'ps', lv: 0, name: 'ماه آرام', title: 'نگهبان خواب', shape: 'moon', color: '#9FD3C7', acc: ['sparkle'], bio: 'insomnia و narcolepsy را می‌شناسد و می‌داند خواب خوب نیمی از سلامت روان است.' },
    { id: 'ps-1', w: 'ps', lv: 1, name: 'حباب فکر', title: 'همراه گفت‌وگو', shape: 'bubble', color: '#C3B5F7', acc: ['glasses'], bio: 'طرفدار روان‌درمانی و CBT است؛ اضطراب، فوبیا و وسواس را با مهربانی نام می‌برد.' },
    { id: 'ps-2', w: 'ps', lv: 2, name: 'پروانه روان', title: 'Psyche؛ نماد ذهن', shape: 'butterfly', color: '#E0708C', acc: ['crown'], bio: 'در یونانی psyche هم «روان» است و هم «پروانه»؛ افسردگی، شیدایی و اسکیزوفرنی را خوب می‌شناسد.' },
    { id: 'tx-0', w: 'tx', lv: 0, name: 'نوار مغز', title: 'خواننده امواج', shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: 'موج‌های آلفا، بتا و دلتا را می‌شناسد و در EEG طوفان تشنج را پیدا می‌کند.' },
    { id: 'tx-1', w: 'tx', lv: 1, name: 'کپسول عصبی', title: 'داروشناس اعصاب', shape: 'capsule', color: '#F2A33A', acc: ['glasses'], bio: 'analgesic، anticonvulsant و hypnotic را از هم جدا می‌کند و دوز درست را می‌داند.' },
    { id: 'tx-2', w: 'tx', lv: 2, name: 'نسخه‌نویس عصب', title: 'استاد پرونده نورولوژی', shape: 'clipboard', color: '#274FA8', acc: ['cape', 'crown'], bio: 'CVA، TIA، GCS و LP را در یک نگاه می‌خواند و از اورژانس تا توان‌بخشی بیمار را همراهی می‌کند.' }
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
    /* جمجمه خندان */
    skull: { fy: 82, top: 30, body: c => `<circle cx="60" cy="80" r="48" fill="${c}" stroke="#C9AE7C" stroke-width="2"/><rect x="34" y="108" width="52" height="34" rx="12" fill="${c}" stroke="#C9AE7C" stroke-width="2"/>${[42, 52, 62, 72].map(x => `<rect x="${x}" y="128" width="7" height="12" rx="2" fill="#fff" stroke="#C9AE7C"/>`).join('')}<path d="M56 112 l4 -8 l4 8z" fill="#8a6a3c"/><path d="M30 60 q10 -18 30 -22" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* مهره با زائده خاری و عرضی */
    vertebra: { fy: 100, top: 24, body: c => `<rect x="52" y="20" width="16" height="44" rx="7" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><rect x="4" y="76" width="112" height="16" rx="8" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="106" rx="46" ry="36" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="72" rx="14" ry="9" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.5"/><path d="M26 98 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* فیلم رادیوگرافی با استخوان */
    xray: { fy: 96, top: 18, body: c => `<rect x="12" y="20" width="96" height="124" rx="12" fill="${c}"/><rect x="20" y="28" width="80" height="108" rx="8" fill="#16232f"/><path d="M84 36 l8 -4 l-2 8 M84 36 l-24 96" stroke="#dfe9f2" stroke-width="7" stroke-linecap="round" opacity=".55"/><path d="M58 128 l-8 6 l10 2" stroke="#dfe9f2" stroke-width="5" fill="none" opacity=".55"/><rect x="24" y="32" width="18" height="8" rx="2" fill="#fff" opacity=".5"/>` },
    /* یک جفت ریه با نای */
    lungs: { fy: 94, top: 18, body: c => `<rect x="54" y="8" width="12" height="40" rx="6" fill="#BFE0F2" stroke="#5E9FC4" stroke-width="1.5"/><path d="M57 50 C38 32 10 44 10 84 C10 118 16 140 36 142 C50 144 57 132 57 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M63 50 C82 32 110 44 110 84 C110 118 104 140 84 142 C70 144 63 132 63 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M20 76 C22 60 32 52 42 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* مغز: دو نیمکره با شکنج‌ها */
    brain: { fy: 84, top: 26, body: c => `<path d="M60 30 C46 18 20 22 16 40 C2 46 0 70 10 82 C4 102 18 122 38 120 C46 134 58 132 60 124 C62 132 74 134 82 120 C102 122 116 102 110 82 C120 70 118 46 104 40 C100 22 74 18 60 30Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M60 32 V122" stroke="#C9677F" stroke-width="2" opacity=".7"/><path d="M22 52 q10 -8 18 0 q8 8 16 -2 M98 52 q-10 -8 -18 0 q-8 8 -16 -2 M14 96 q8 -6 14 2 M106 96 q-8 -6 -14 2" stroke="#C9677F" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/><path d="M20 46 C24 36 32 32 40 32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* نورون: جسم سلولی با دندریت‌ها و آکسون */
    neuron: { fy: 76, top: 34, body: c => `<path d="M60 112 V146 M60 146 l-10 6 M60 146 l10 6" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round" fill="none"/>${[[24, 40], [96, 40], [10, 84], [110, 84], [40, 22], [80, 22]].map(p => `<path d="M60 76 L${p[0]} ${p[1]}" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#6C4FD0"/>`).join('')}<circle cx="60" cy="78" r="38" fill="${c}" stroke="#6C4FD0" stroke-width="2.5"/><ellipse cx="44" cy="62" rx="9" ry="6" transform="rotate(-30 44 62)" fill="#fff" opacity=".45"/>` },
    /* صاعقه: تکانه عصبی */
    bolt: { fy: 74, top: 22, body: c => `<path d="M74 10 L22 86 H56 L42 146 L100 60 H66 L84 10Z" fill="${c}" stroke="#C99A1D" stroke-width="3" stroke-linejoin="round"/><path d="M70 18 L36 70" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>` },
    /* میکروفون: حنجره و صدا */
    mic: { fy: 70, top: 16, body: c => `<rect x="52" y="112" width="16" height="26" rx="5" fill="#77868E"/><rect x="34" y="134" width="52" height="10" rx="5" fill="#9AA9B1"/><path d="M28 74 C28 104 92 104 92 74" stroke="#77868E" stroke-width="5" fill="none"/><rect x="26" y="16" width="68" height="96" rx="34" fill="${c}"/>${[34, 46, 58].map(y => `<path d="M34 ${y} h52" stroke="#fff" stroke-width="2" opacity=".35"/>`).join('')}<path d="M38 40 q4 -14 16 -18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
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
/* نورو — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study ویلیام (Spinal Cord Injury)، Case Study 7-1 (CVA)، Case Study 7-2
 * (Neuroleptic Malignant Syndrome)، Exercise 7-9 (ER record)، Discharge Summary و Consultation Report و Case Study خانم Anna Moore (Fremgen)،
 * Chart Note سکته (Gylys) و سناریوهای APPLY (Robert Jones، Gina Jones، Jose Gutierrez، Josie Martin، Amy Shine، April Johnson، Jaime Shew،
 * Randy Allen و یادداشت Mr. Jones).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان عصب ================= */
    {
      id: 'r1', w: 'lx', title: 'گفتار درهم و ضعف سمت راست', who: 'J.D.، خانم ۸۵ ساله',
      brief: 'J.D. به اورژانس آمده چون به‌سختی حرف می‌زند. دخترش می‌گوید چند روز است گفتارش درهم است و به هر سؤالی فقط می‌گوید «How do you do?». پیش‌تر هم چنین شده و خوب شده بود. امروز صبح با ضعف سمت راست بدن بیدار شد. ارزیابی: احتمالاً سابقه TIA؛ اکنون CVA با dysphasia و right hemiparesis.',
      chart: [['CC', 'mental status changes, aphasia'], ['Hx', 'probable TIA'], ['Assessment', 'CVA with dysphasia and right hemiparesis']],
      fig: { a: 'stroke-types', l: [] },
      steps: [
        M('اختصار', 'TIA یعنی…', ['حمله ایسکمیک گذرا', 'آسیب تروماتیک مغز', 'سکته کامل', 'فشار داخل جمجمه'], 'transient ischemic attack.'),
        M('اختصار', 'CVA یعنی…', ['سکته مغزی', 'بیماری عروق قلب', 'آسیب نخاع', 'مایع مغزی-نخاعی'], 'cerebrovascular accident.'),
        P('واژه', 'dysphasia را بشکن: هر قطعه را به معنی‌اش وصل کن', [['dys-', 'دشوار'], ['-phasia', 'گفتار'], ['hemi-', 'نیم'], ['-paresis', 'ضعف']], 'Exercise 7-9.'),
        M('تفاوت', 'تفاوت hemiparesis با hemiplegia چیست؟', ['اولی ضعف نیمه بدن است و دومی فلج کامل آن', 'هر دو یکی‌اند', 'اولی فلج دو پاست', 'دومی فقط در کودکان است'], '‎-paresis‎ ضعف و ‎-plegia‎ فلج.'),
        T('سمت', 'ضعف سمت راست یعنی احتمالاً نیمکره چپ مغز آسیب دیده است.', true, 'کنترل ضربدری.'),
        S('املا', 'املای «ضعف نیمه بدن» را بنویس', 'hemiparesis', 'hemi- + -paresis.', 'hemip…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: 'یادداشت اورژانس پر از اختصار', who: 'Mr. Jones',
      brief: 'یادداشت پزشک: «Mr. Jones presents to the emergency department after a motor vehicle accident. Experienced TIA last week; may now have a CVA. Will evaluate for SCI and get MRI, MRA, and EEG. Concerned ICP is elevated. May have a CSF leak.» باید آن را با واژه‌های کامل بازنویسی کنی.',
      chart: [['ED', 'motor vehicle accident'], ['Hx', 'TIA last week'], ['Plan', 'MRI, MRA, EEG; evaluate SCI'], ['Concern', 'elevated ICP; CSF leak']],
      fig: { a: 'brain-imaging', l: [] },
      steps: [
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['SCI', 'آسیب نخاع'], ['ICP', 'فشار داخل جمجمه'], ['CSF', 'مایع مغزی-نخاعی'], ['ED', 'بخش اورژانس']], 'یادداشت Mr. Jones.'),
        P('آزمون', 'هر آزمون را به کارش وصل کن', [['MRI', 'تصویر بافت نرم'], ['MRA', 'تصویر رگ‌ها'], ['EEG', 'برق مغز'], ['CT', 'تصویر سریع خونریزی']], 'آزمون‌های درخواستی.'),
        M('معنی', '«Concerned ICP is elevated» یعنی…', ['نگران بالا بودن فشار داخل جمجمه است', 'فشار خون پایین است', 'مایع نخاع کم شده', 'سکته رد شده'], 'intracranial pressure.'),
        M('معنی', 'CSF leak یعنی…', ['نشت مایع مغزی-نخاعی', 'خونریزی مغز', 'تشنج', 'التهاب مننژ'], 'leak = نشت.'),
        T('سابقه', 'TIA هفته قبل، خطر سکته کامل (CVA) را بالا می‌برد.', true, 'TIA هشدار است.'),
        S('املا', 'املای صفت «مربوط به رگ‌های مغز» را بنویس', 'cerebrovascular', 'cerebr/o + vascul/o + -ar.', 'cerebro…')
      ]
    },
    /* ================= مغز و نخاع ================= */
    {
      id: 'r3', w: 'cn', title: 'ضربه به سر و خواندن دشوار', who: 'Mr. Robert Jones',
      brief: 'آقای Robert Jones دچار آسیب سر شده است. به‌سختی می‌خواند و حواسش زود پرت می‌شود. باید بگویی کدام بخش مغز احتمالاً آسیب دیده و چه نشانه‌های دیگری ممکن است ببینی.',
      chart: [['Injury', 'head injury'], ['Sx', 'difficulty reading, easily distracted']],
      fig: { a: 'brain-functions', l: [] },
      steps: [
        M('لوب', 'مشکل خواندن (تفسیر تصویر) بیشتر به کدام لوب مربوط است؟', ['occipital', 'temporal', 'parietal', 'cerebellum'], 'مرکز بینایی.', null, { a: ['brain-lobes'], l: [] }),
        M('لوب', 'حواس‌پرتی و مشکل تمرکز و برنامه‌ریزی بیشتر به کدام لوب مربوط است؟', ['frontal', 'occipital', 'medulla', 'pons'], 'لوب پیشانی.'),
        P('کارکرد', 'هر لوب را به کارش وصل کن', [['occipital', 'بینایی'], ['frontal', 'تمرکز و شخصیت'], ['temporal', 'شنوایی'], ['parietal', 'لمس و درد']], 'چهار لوب.'),
        M('نشانه', 'کدام نشانه دیگر هم در آسیب لوب پیشانی دیده می‌شود؟', ['تغییر شخصیت', 'دوبینی فقط', 'کری کامل', 'فلج پاها'], 'شخصیت و رفتار.'),
        T('آزمون', 'برای بررسی آسیب ساختاری مغز پس از ضربه، CT یا MRI مناسب است.', true, 'تصویربرداری.'),
        S('املا', 'املای «پس‌سری» (لوب) را بنویس', 'occipital', 'occipit = پس سر.', 'occip…')
      ]
    },
    {
      id: 'r4', w: 'cn', title: 'افتادن از سرسره', who: 'Josie Martin، دختر ۹ ساله',
      brief: 'Josie هنگام زنگ تفریح از سرسره ۱۴ فوتی افتاد. بچه‌ها می‌گویند بعد از افتادن چند لحظه «خواب» بود. اکنون بیدار است ولی خسته به نظر می‌رسد.',
      chart: [['Event', 'fall from 14-foot slide'], ['LOC', 'brief'], ['Now', 'awake, tired']],
      fig: { a: 'meninges', l: [] },
      steps: [
        M('تصمیم', 'آیا Josie باید پزشک را ببیند؟', ['بله؛ از دست دادن هوشیاری پس از ضربه به سر جدی است', 'نه؛ بیدار شده است', 'فقط اگر گریه کند', 'فقط فردا'], 'ارزیابی concussion.'),
        M('تشخیص', 'اختلال موقت کار مغز پس از ضربه چه نام دارد؟', ['concussion', 'contusion', 'aneurysm', 'meningioma'], 'ضربه مغزی.'),
        M('خطر', 'چرا خستگی پس از ضربه نگران‌کننده است؟', ['ممکن است نشانه خونریزی و بالا رفتن ICP باشد', 'نشانه کم‌خوابی است', 'نشانه گرسنگی است', 'همیشه طبیعی است'], 'هماتوم اپیدورال یا ساب‌دورال.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['LOC', 'از دست دادن هوشیاری'], ['lethargy', 'رخوت'], ['epidural hematoma', 'خون روی سخت‌شامه'], ['GCS', 'مقیاس هوشیاری']], 'ضربه به سر.'),
        T('حفاظت', 'جمجمه، مننژ و CSF مغز را از ضربه محافظت می‌کنند.', true, 'لایه‌های محافظ.'),
        S('املا', 'املای «ضربه مغزی» را بنویس', 'concussion', 'دو s.', 'concu…')
      ]
    },
    {
      id: 'r5', w: 'cn', title: 'توده در قشر نیمکره راست', who: 'خانم ۳۸ ساله',
      brief: 'گزارش مشاوره بیمارستان پیرسون: بیمار به «متخصص بیماری‌های دستگاه عصبی» ارجاع شده؛ «دشواری گفتار»، «از دست دادن حرکت یک طرف بدن» و «انقباض‌های شدید غیرارادی عضله» دارد. «ثبت فعالیت الکتریکی مغز» و «سوزن زدن در کمر برای کشیدن مایع» طبیعی بودند؛ ولی «تزریق ایزوتوپ رادیواکتیو» توده‌ای در «لایه بیرونی بزرگ‌ترین بخش مغز» در سمت راست نشان داد. تشخیص «تومور آستروسیت» بود؛ با «برش جمجمه» و «سرمای شدید» درمان شد.',
      chart: [['CC', 'speech difficulty, one-sided weakness, seizures'], ['EEG, LP', 'normal'], ['Scan', 'mass in right cerebral cortex'], ['Tx', 'craniotomy, cryosurgery']],
      fig: { a: 'craniotomy', l: [] },
      steps: [
        P('واژه', 'هر عبارت را به واژه پزشکی‌اش وصل کن', [['متخصص دستگاه عصبی', 'neurologist'], ['دشواری گفتار', 'aphasia'], ['از دست دادن حرکت یک طرف', 'hemiplegia'], ['انقباض شدید غیرارادی', 'seizure']], 'Chart Note Transcription.'),
        P('روش', 'هر روش را به واژه‌اش وصل کن', [['ثبت برق مغز', 'electroencephalography'], ['کشیدن مایع از کمر', 'lumbar puncture'], ['تزریق ایزوتوپ', 'PET scan'], ['سرمای شدید', 'cryosurgery']], 'روش‌ها.'),
        M('جا', '«لایه بیرونی بزرگ‌ترین بخش مغز» یعنی…', ['cerebral cortex', 'cerebellum', 'medulla', 'dura mater'], 'قشر مخ.', null, { a: ['brain-lobes'], l: [] }),
        M('تشخیص', '«تومور آستروسیت» چه نام دارد؟', ['astrocytoma', 'meningioma', 'neuroma', 'glioblastoma'], 'astro + cyt + oma.', null, { a: ['ct-tumor'], l: [] }),
        T('سمت', 'توده در نیمکره راست است و ضعف بیمار در اندام‌های چپ بود.', true, 'کنترل ضربدری.'),
        S('املا', 'املای «برش جمجمه» را بنویس', 'craniotomy', 'crani/o + -tomy.', 'cranio…')
      ]
    },
    /* ================= اعصاب محیطی و خودکار ================= */
    {
      id: 'r6', w: 'pn', title: 'کلاس آوران و وابران', who: 'دانشجویان پرستاری',
      brief: 'از تو خواسته‌اند برای یک کلاس، تفاوت نورون‌های آوران (afferent) و وابران (efferent) را توضیح دهی و با یک مثال مثل لمس اجاق داغ نشان دهی.',
      chart: [['Topic', 'afferent vs efferent neurons'], ['Example', 'touching a hot stove']],
      fig: { a: 'afferent-efferent', l: [] },
      steps: [
        M('تعریف', 'نورون آوران (afferent) چه می‌کند؟', ['پیام حسی را به سوی CNS می‌برد', 'فرمان را به عضله می‌برد', 'بین دو نورون CNS رابط است', 'میلین می‌سازد'], 'af- = به سوی.'),
        M('تعریف', 'نورون وابران (efferent) چه می‌کند؟', ['فرمان حرکتی را از CNS به عضله می‌برد', 'حس را به مغز می‌برد', 'CSF می‌سازد', 'درد را حس می‌کند'], 'ef- = دور از.'),
        O('مثال', 'مسیر عقب کشیدن دست از اجاق داغ را بچین', ['heat stimulus', 'receptor in skin', 'afferent neuron', 'spinal cord', 'efferent neuron', 'arm muscle contracts'], 'قوس رفلکس.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['afferent', 'حسی، به سوی CNS'], ['efferent', 'حرکتی، دور از CNS'], ['interneuron', 'رابط درون CNS'], ['effector', 'عضله یا غده']], 'نورون‌ها.'),
        T('رفلکس', 'در عقب کشیدن دست، پیام ممکن است پیش از رسیدن به مغز از نخاع برگردد.', true, 'رفلکس نخاعی.', { a: ['reflex-arc'], l: [] }),
        S('املا', 'املای «آوران» را بنویس', 'afferent', 'af- = به سوی.', 'affe…')
      ]
    },
    {
      id: 'r7', w: 'pn', title: 'آسیب عصب پا', who: 'Mr. Randy Allen',
      brief: 'آقای Allen سه سال پیش در تصادف خودرو دچار آسیب عصب پا شد. جراح مغز و اعصاب برای ترمیم عصب‌ها جراحی کرد و نتیجه نسبی بود. پس از فیزیوتراپی، راه رفتنش بهتر شد.',
      chart: [['Injury', 'leg nerve damage (MVA)'], ['Tx', 'nerve surgery; physical therapy'], ['Result', 'improved walking']],
      fig: { a: 'spinal-levels', l: [] },
      steps: [
        M('بررسی', 'آسیب عصب پا ممکن است از کجای دیگر باشد که جراح باید بررسی کند؟', ['ریشه‌های عصب کمری-خاجی و عصب سیاتیک', 'عصب‌های جمجمه‌ای', 'عصب واگ', 'نخاع گردنی فقط'], 'مسیر عصب پا.'),
        M('عصب', 'بزرگ‌ترین عصب پا کدام است؟', ['sciatic nerve', 'femoral vein', 'vagus nerve', 'optic nerve'], 'عصب سیاتیک.'),
        P('جراحی', 'هر جراحی عصب را به معنی‌اش وصل کن', [['neurorrhaphy', 'بخیه عصب'], ['neuroplasty', 'ترمیم عصب'], ['neurolysis', 'آزادسازی عصب'], ['neurectomy', 'برداشتن عصب']], 'جراحی عصب.'),
        M('درمان', 'چرا فیزیوتراپی برای او تجویز شد؟', ['برای بازگرداندن قدرت عضله و راه رفتن', 'برای درمان عفونت', 'برای خواب بهتر', 'برای کاهش فشار خون'], 'PT.'),
        T('متخصص', 'neurosurgeon جراح مغز، نخاع و عصب است.', true, 'جراح اعصاب.'),
        S('املا', 'املای «جراح مغز و اعصاب» را بنویس', 'neurosurgeon', 'neur/o + surgeon.', 'neurosu…')
      ]
    },
    {
      id: 'r8', w: 'pn', title: 'شیرجه در استخر کم‌عمق', who: 'ویلیام، پسر ۱۲ ساله',
      brief: 'ویلیام در جشن تولد سر شیرجه زد در استخر سیمانی کم‌عمق. از درد شدید سر و گردن شکایت دارد (c/o)، بازوهایش کمی حرکت می‌کنند و پاهایش را نمی‌تواند تکان دهد. فشار خون پایین و ضربان کند داشت. پاها flaccid بودند و انگشتان حرکت نداشتند. تشخیص: شکستگی خردشده مهره C6 که ممکن است به quadriplegia برسد.',
      chart: [['c/o', 'severe head and neck pain'], ['VS', 'hypotensive, bradycardic'], ['Dx', 'burst fracture of C6'], ['Risk', 'quadriplegia']],
      fig: { a: 'paralysis-types', l: [] },
      steps: [
        M('سطح', 'C6 کدام مهره است؟', ['ششمین مهره گردنی', 'ششمین مهره سینه‌ای', 'ششمین عصب جمجمه‌ای', 'ششمین مهره کمری'], 'C = cervical.', null, { a: ['spinal-levels'], l: [] }),
        M('فلج', 'آسیب نخاع گردنی ممکن است چه فلجی بدهد؟', ['quadriplegia', 'monoplegia', 'hemiplegia', 'Bell palsy'], 'هر چهار اندام.'),
        P('واژه', 'هر واژه پرونده را به معنی‌اش وصل کن', [['hypotensive', 'فشار خون پایین'], ['bradycardic', 'ضربان کند'], ['flaccid', 'شل'], ['c/o', 'شکایت دارد از']], 'پرونده ویلیام.'),
        P('تیم', 'هر عضو تیم را به کارش وصل کن', [['neurosurgeon', 'جراحی ستون مهره'], ['neurologist', 'بیماری عصبی'], ['PM&R specialist', 'توان‌بخشی'], ['psychologist', 'مشاوره روانی']], 'تیم درمان.'),
        T('روان', 'ویلیام در دوره توان‌بخشی برای افسردگی و اضطراب مشاوره گرفت.', true, 'Case Study Revisited.'),
        S('املا', 'املای «فلج چهار اندام» را بنویس', 'quadriplegia', 'quadri- + -plegia.', 'quadri…')
      ]
    },
    /* ================= نشانه‌ها و بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: 'سکته ایسکمیک حاد', who: 'Allen، مرد ۶۲ ساله',
      brief: 'Allen با right hemiplegia و aphasia به ED آمد. سابقه فشار خون و TIAهای اخیر دارد. ۱۵ دقیقه پس از شروع ضعف سمت راست با آمبولانس رسید. ارزیابی سریع و معاینه عصبی با GCS انجام شد. CT بدون ماده حاجب خونریزی داخل مغزی یا زیرعنکبوتیه نشان نداد. تشخیص: probable acute ischemic stroke و درمان fibrinolytic. ۴۸ ساعت در NICU پایش شد و با پیش‌آگهی بهبود کامل مرخص شد.',
      chart: [['CC', 'right hemiplegia, aphasia'], ['Hx', 'hypertension, recent TIAs'], ['CT', 'no hemorrhage'], ['Tx', 'fibrinolytic therapy; NICU 48 h']],
      fig: { a: 'stroke-types', l: [] },
      steps: [
        M('علت', 'سکته ایسکمیک معمولاً به چه علتی است؟', ['thrombosis', 'hemorrhage', 'hematoma', 'hemangioma'], 'Case Study 7-1.'),
        M('درمان', 'هدف درمان fibrinolytic چیست؟', ['حل کردن لخته', 'پایدار کردن سلول‌های خون', 'تخریب گلبول قرمز', 'تحریک لخته شدن'], 'fibrin + -lytic.'),
        P('واژه', 'هر معنی را به واژه پرونده وصل کن', [['کمبود خون‌رسانی', 'ischemic'], ['التهاب مننژ', 'meningitis'], ['خون زیر سخت‌شامه', 'subdural hematoma'], ['ناتوانی در گفتار', 'aphasia']], 'Case Study 7-1.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['GCS', 'مقیاس کمای گلاسگو'], ['NICU', 'مراقبت ویژه اعصاب'], ['CT', 'سی‌تی‌اسکن'], ['TIA', 'حمله ایسکمیک گذرا']], 'Case Study 7-1.'),
        M('واژه', 'واژه کلی برای هر اختلال بافت مغز کدام است؟', ['encephalopathy', 'neurocytoma', 'dysencephaloma', 'psychosomatic'], 'encephal/o + -pathy.', null, { a: ['ct-hemorrhage'], l: [] }),
        S('املا', 'املای صفت «مربوط به کمبود خون‌رسانی» را بنویس', 'ischemic', 'isch/o + -emic.', 'isch…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: 'سکته سرخرگ مغزی میانی', who: 'Anna Moore، خانم ۸۳ ساله',
      brief: 'خانم Moore با aphasia، hemiparesis سمت چپ، syncope و delirium به ER آمد. دخترش او را در خانه در این حال پیدا کرد. سابقه hypertension، atherosclerosis و diabetes mellitus دارد. brain scan یک infarct در نیمکره راست مغز نشان داد: CVA در سرخرگ مغزی میانی.',
      chart: [['Sx', 'aphasia, L hemiparesis, syncope, delirium'], ['Hx', 'HTN, atherosclerosis, DM'], ['Scan', 'infarct, right cerebral hemisphere'], ['Dx', 'CVA, middle cerebral artery']],
      fig: { a: 'elderly-woman', l: [] },
      steps: [
        P('نشانه', 'هر نشانه را به معنی‌اش وصل کن', [['aphasia', 'ناتوانی در گفتار'], ['hemiparesis', 'ضعف نیمه بدن'], ['syncope', 'غش'], ['delirium', 'آشفتگی حاد ذهن']], 'Case Study کتاب Fremgen.'),
        M('واژه', 'infarct یعنی…', ['بافت مرده به علت قطع خون', 'تومور', 'التهاب', 'خونریزی'], 'مرگ بافت.'),
        M('سابقه', 'atherosclerosis یعنی…', ['سخت و تنگ شدن سرخرگ‌ها با پلاک', 'دیابت', 'فشار خون پایین', 'التهاب مغز'], 'زمینه سکته.'),
        T('سمت', 'انفارکت نیمکره راست با ضعف سمت چپ بدن هم‌خوان است.', true, 'کنترل ضربدری.'),
        O('علل', 'چهار علت شایع CVA را از کتاب به این ترتیب بچین', ['cerebral hemorrhage', 'cerebral embolism', 'cerebral thrombosis', 'compression by a tumor'], 'Figure 12-10 کتاب Fremgen.'),
        S('املا', 'املای «انفارکت» را بنویس', 'infarct', 'بافت مرده.', 'infa…')
      ]
    },
    {
      id: 'r11', w: 'ds', title: 'تشنج در بخش', who: 'Mrs. April Johnson',
      brief: 'خانم April Johnson در حال تشنج است. باید بدانی چه چیزهایی را مشاهده و ثبت کنی و چرا توصیف دقیق تشنج اهمیت دارد.',
      chart: [['Event', 'seizure in progress'], ['Task', 'observe and document']],
      fig: { a: 'seizure-types', l: [] },
      steps: [
        M('مشاهده', 'کدام مورد را باید در تشنج ثبت کنی؟', ['زمان شروع، مدت، حرکات بدن و سطح هوشیاری', 'فقط رنگ لباس بیمار', 'فقط فشار خون صبح', 'هیچ چیز؛ فقط صبر کن'], 'توصیف کامل.'),
        M('اهمیت', 'چرا توصیف دقیق مهم است؟', ['نوع تشنج و درمان را مشخص می‌کند', 'برای پر کردن پرونده کافی است', 'برای بیمه لازم است', 'اهمیتی ندارد'], 'تشخیص نوع صرع.'),
        P('نوع', 'هر نوع را به ویژگی‌اش وصل کن', [['tonic-clonic', 'سفتی سپس پرش'], ['absence', 'خیره شدن کوتاه'], ['aura', 'پیش‌نشانه'], ['postictal', 'خواب‌آلودگی پس از تشنج']], 'تشنج‌ها.'),
        M('دارو', 'داروی پیشگیری از تشنج کدام است؟', ['anticonvulsant', 'antidepressant', 'antipsychotic', 'analgesic'], 'ضدتشنج.'),
        T('آزمون', 'EEG برای بررسی صرع استفاده می‌شود.', true, 'امواج نامنظم.', { a: ['eeg'], l: [] }),
        S('املا', 'املای «تشنج» را بنویس', 'seizure', 'ei.', 'sei…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: 'دکمه‌هایی که بسته نمی‌شوند', who: 'Mr. Jose Gutierrez',
      brief: 'آقای Gutierrez در چند ماه اخیر در بستن دکمه پیراهن و به خاطر سپردن چیزها مشکل دارد و لنگ می‌زند؛ انگشتانش بی‌حس است. سابقه سکته ندارد و فشار خونش همیشه طبیعی بوده. دکتر Stanley نوار مغز، آزمایش خون و چند reflex test انجام داد و Parkinson disease را تأیید کرد. از بیمار خواست سه هفته روزانه راه رفتن، دید، گفتار و لرزش خود را ثبت کند.',
      chart: [['Sx', 'trouble buttoning, memory problems, limp, numb fingers'], ['Hx', 'no CVA; normal BP'], ['Tests', 'EEG, blood tests, reflex tests'], ['Dx', 'Parkinson disease']],
      fig: { a: 'degenerative', l: [] },
      steps: [
        M('علت', 'کمبود کدام ناقل علت پارکینسون است؟', ['dopamine', 'serotonin', 'insulin', 'acetylcholine'], 'دوپامین.'),
        M('ثبت', 'چرا دکتر از بیمار خواست سه هفته علائمش را ثبت کند؟', ['برای دیدن روند بیماری و اثر داروها', 'برای سرگرمی بیمار', 'برای بیمه', 'برای تشخیص سکته'], 'پایش پاسخ به درمان.'),
        P('نشانه', 'هر نشانه را به معنی‌اش وصل کن', [['tremor', 'لرزش'], ['limp', 'لنگیدن'], ['numbness', 'بی‌حسی'], ['rigidity', 'سفتی']], 'نشانه‌ها.'),
        M('آزمون', 'EEG در این بیمار چه چیزی را بررسی می‌کند؟', ['فعالیت الکتریکی مغز', 'جریان خون پا', 'قند خون', 'فشار CSF'], 'electroencephalogram.'),
        T('رد', 'فشار خون طبیعی او احتمال سکته را کمتر کرد.', true, 'دکتر به بیماری دیگری مشکوک شد.'),
        S('املا', 'املای «لرزش» را بنویس', 'tremor', 'لرزش غیرارادی.', 'trem…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: 'آزمون ژنتیک مثبت', who: 'Mrs. Amy Shine، ۴۹ ساله',
      brief: 'خانم Shine برای Huntington chorea مثبت شده است. از پرستار می‌پرسد چه علائمی پیدا می‌کند و چه کار کند تا بیماری پیشرفت نکند.',
      chart: [['Test', 'positive for Huntington chorea'], ['Q', 'symptoms and prevention']],
      fig: { a: 'degenerative', l: [] },
      steps: [
        M('نوع', 'Huntington chorea چه نوع بیماری است؟', ['ارثی و تحلیل‌برنده', 'عفونی', 'ناشی از ضربه', 'سکته'], 'ژنتیکی.'),
        M('نشانه', 'chorea یعنی…', ['حرکات غیرارادی رقص‌مانند', 'لرزش در استراحت', 'فلج کامل', 'سردرد'], 'کره = رقص.'),
        M('پاسخ', 'پاسخ درست پرستار درباره پیشرفت بیماری کدام است؟', ['درمان قطعی ندارد؛ درمان علائم و حمایت کمک می‌کند', 'با ورزش کاملاً پیشگیری می‌شود', 'با آنتی‌بیوتیک درمان می‌شود', 'نیازی به پیگیری نیست'], 'پیشرونده.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['chorea', 'حرکات رقص‌مانند'], ['dementia', 'زوال عقل'], ['degenerative', 'تحلیل‌برنده'], ['hereditary', 'ارثی']], 'Huntington.'),
        T('سیر', 'در Huntington chorea دمانس هم ممکن است پیدا شود.', true, 'حرکتی و ذهنی.'),
        S('املا', 'املای «حرکات رقص‌مانند (کره)» را بنویس', 'chorea', 'ch = ک.', 'chor…')
      ]
    },
    {
      id: 'r14', w: 'ds', title: 'مننژیت ویروسی', who: 'Jaime Shew',
      brief: 'پزشک به خانواده Jaime می‌گوید او viral meningitis دارد و علائمش در چند روز آرام می‌شود. باید توضیح دهی این بیماری چیست، چه نشانه‌هایی دارد و چگونه درمان می‌شود.',
      chart: [['Dx', 'viral meningitis'], ['Prognosis', 'improves in a few days']],
      fig: { a: 'meninges', l: [] },
      steps: [
        M('تعریف', 'viral meningitis یعنی…', ['التهاب ویروسی پرده‌های مغز و نخاع', 'تومور مننژ', 'التهاب عصب صورت', 'خونریزی مغز'], 'mening/o + -itis.'),
        M('نشانه', 'کدام دسته نشانه در مننژیت شایع است؟', ['تب، سردرد و سفتی گردن', 'دوبینی و لرزش', 'فلج یک پا', 'خارش پوست'], 'سه‌گانه کلاسیک.'),
        M('درمان', 'مننژیت ویروسی معمولاً چگونه درمان می‌شود؟', ['استراحت، مایعات و مسکن', 'جراحی فوری', 'شوک‌درمانی', 'شانت VP'], 'درمان حمایتی.'),
        M('آزمون', 'برای تشخیص مننژیت کدام آزمون CSF را بررسی می‌کند؟', ['lumbar puncture', 'EMG', 'carotid ultrasound', 'PET scan'], 'LP.', null, { a: ['lumbar-puncture'], l: [] }),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['meninges', 'پرده‌های مغز'], ['viral', 'ویروسی'], ['cephalalgia', 'سردرد'], ['CSF', 'مایع مغزی-نخاعی']], 'مننژیت.'),
        S('املا', 'املای «مننژیت» را بنویس', 'meningitis', 'mening/o + -itis.', 'mening…')
      ]
    },
    /* ================= سلامت روان ================= */
    {
      id: 'r15', w: 'ps', title: 'تپش قلب در موقعیت‌های پر استرس', who: 'Mrs. Gina Jones',
      brief: 'خانم Gina Jones به مطب آمده و می‌گوید هر بار در موقعیت پر استرس، ضربان قلب و تعداد تنفسش بالا می‌رود و عرق می‌کند. نگران است که اختلال روانی دارد و دارو می‌خواهد. پرستار باید چه پاسخی بدهد؟',
      chart: [['Sx', 'fast HR, fast breathing, sweating under stress'], ['Concern', 'psychological disorder?']],
      fig: { a: 'fight-flight', l: [] },
      steps: [
        M('توضیح', 'علائم خانم Jones کار کدام دستگاه است؟', ['sympathetic nervous system', 'parasympathetic nervous system', 'somatic nervous system', 'cerebellum'], 'جنگ یا گریز.', null, { a: ['ans'], l: [] }),
        M('پاسخ', 'پاسخ مناسب پرستار کدام است؟', ['این پاسخ طبیعی بدن به استرس است؛ اگر بی‌دلیل یا مداوم شد، ارزیابی بیشتر لازم است', 'حتماً اختلال روانی دارد', 'باید فوراً داروی ضدروان‌پریشی بگیرد', 'نیازی به توضیح نیست'], 'آموزش بیمار.'),
        P('واژه', 'هر علامت را به واژه پزشکی‌اش وصل کن', [['ضربان تند', 'tachycardia'], ['تنفس تند', 'tachypnea'], ['تعریق شدید', 'diaphoresis'], ['اضطراب', 'anxiety']], 'پاسخ استرس.'),
        T('تفاوت', 'اگر نگرانی بی‌دلیل، شدید و ماه‌ها ادامه یابد، ممکن است GAD باشد.', true, 'اضطراب فراگیر.'),
        M('درمان', 'کدام درمان بدون دارو برای اضطراب مؤثر است؟', ['CBT', 'ECT', 'craniotomy', 'LP'], 'درمان شناختی-رفتاری.'),
        S('املا', 'املای «اضطراب» را بنویس', 'anxiety', 'x مثل «گز».', 'anx…')
      ]
    },
    {
      id: 'r16', w: 'ps', title: 'سندروم نورولپتیک بدخیم', who: 'Jane، خانم ۲۱ ساله',
      brief: 'Jane با chronic paranoid schizophrenia با تشخیص پنومونی بستری شد. مادرش می‌گوید سه روز است بسیار lethargic است، تب ۱۰۴ فارنهایت و muscular rigidity دارد. داروهایش Haldol و Cogentin است و روان‌پزشکش هفته پیش neuroleptic او را عوض کرده. تشخیص دوم: neuroleptic malignant syndrome. داروها قطع، مایع IV داده و با bromocriptine و dantrolene درمان شد. پس از ۵ روز به مرکز سلامت روان منتقل و neuroleptic با دوز کم دوباره شروع شد.',
      chart: [['Hx', 'chronic paranoid schizophrenia'], ['Sx', 'lethargy, T 104°F, rigidity'], ['Dx', 'NMS'], ['Tx', 'stop drugs, IV fluids, bromocriptine, dantrolene']],
      fig: { a: 'psych-drugs', l: [] },
      steps: [
        M('علت', 'NMS با مصرف کدام دارو مرتبط است؟', ['داروهای ضدروان‌پریشی', 'استروئیدها', 'لخته‌شکن‌ها', 'مسکن‌ها'], 'Case Study 7-2.'),
        M('کارکرد', 'Jane علائمی در کارهای غیرارادی و حرکت خارج از مسیر هرمی داشت؛ این کارکردها…', ['autonomic و extrapyramidal', 'autonomic و voluntary', 'extrapyramidal و pyramidal', 'autonomic و neuroleptic'], 'Case Study 7-2 Questions.'),
        P('واژه', 'هر معنی را به واژه پرونده وصل کن', [['خواب‌آلود و کند', 'lethargic'], ['پزشک اختلال روانی', 'psychiatrist'], ['داروی ضدروان‌پریشی', 'neuroleptic'], ['تعریق شدید', 'diaphoresis']], 'Case Study 7-2.'),
        M('دارو', 'dantrolene چه نوع دارویی است؟', ['شل‌کننده عضله و ضد اسپاسم', 'ضدافسردگی', 'مسکن مخدر', 'آنتی‌بیوتیک'], 'muscle relaxant.'),
        T('واژه', 'paranoid یعنی همراه با احساس تهدید و آزار.', true, 'paranoia.'),
        S('املا', 'املای «اسکیزوفرنی» را بنویس', 'schizophrenia', 'schiz/o + -phrenia.', 'schizo…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r17', w: 'tx', title: 'شکستگی L2 و پاراپلژی', who: 'مرد ۲۳ ساله',
      brief: 'خلاصه ترخیص: پس از تصادف موتور، ۳۵ دقیقه بیهوش بود و پس از به هوش آمدن بی‌حسی کامل و فلج زیر کمر را حس کرد. CT تخریب گسترده استخوان در محل شکستگی و قطع نخاع را نشان داد. Lumbar laminectomy با spinal fusion برای پایداری شکستگی و برداشتن epidural hematoma انجام شد. پس از دو ماه فیزیوتراپی و کاردرمانی به مرکز توان‌بخشی منتقل شد.',
      chart: [['Dx', 'comminuted L2 fracture, epidural hematoma, SCI'], ['Result', 'complete paraplegia at L2'], ['Op', 'lumbar laminectomy, spinal fusion'], ['Plan', 'intensive PT and OT']],
      fig: { a: 'spinal-cord', l: [] },
      steps: [
        M('فلج', 'paraplegia یعنی…', ['فلج دو پا و پایین تنه', 'فلج چهار اندام', 'فلج یک دست', 'ضعف نیمه بدن'], 'para- + -plegia.', null, { a: ['paralysis-types'], l: [] }),
        P('واژه', 'هر واژه خلاصه ترخیص را به معنی‌اش وصل کن', [['anesthesia', 'بی‌حسی'], ['laminectomy', 'برداشتن تیغه مهره'], ['spinal fusion', 'جوش مهره‌ها'], ['epidural hematoma', 'خون روی سخت‌شامه']], 'Medical Record Analysis.'),
        M('شکستگی', 'comminuted fracture یعنی…', ['شکستگی خردشده چندتکه', 'شکستگی ترک‌دار', 'شکستگی باز', 'دررفتگی'], 'خرد.'),
        O('روند', 'روند درمان را بچین', ['motorcycle accident', 'CT scan', 'laminectomy with spinal fusion', 'PT and OT', 'rehabilitation institute'], 'Discharge Summary.'),
        T('اختصار', 'PT یعنی فیزیوتراپی و OT یعنی کاردرمانی.', true, 'physical / occupational therapy.'),
        S('املا', 'املای «پاراپلژی» را بنویس', 'paraplegia', 'para- + -plegia.', 'para…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: 'سکته در بیمار مبتلا به سرطان', who: 'خانم بستری در بیمارستان Riverside',
      brief: 'یادداشت پرونده: بیمار با یک حمله ناگهانی سکته بستری شد. سه روز پیش vertigo داشت. به علت adenocarcinoma پیشرفته سر پانکراس با متاستاز به کبد، دخترش در خانه از او مراقبت می‌کند. به زمین افتاد و دست و پای راستش فلج شد و aphasia پیدا کرد. مشکلی در deglutition ندارد. با شروع سکته diplopia هم داشت. تشخیص: سکته، احتمالاً به علت ضایعه متاستاتیک مغز یا بیماری عروق مغز.',
      chart: [['CC', 'sudden stroke'], ['Sx', 'vertigo, R arm and leg paralysis, aphasia, diplopia'], ['Hx', 'adenocarcinoma of pancreas with liver metastasis'], ['Dx', 'stroke: metastatic lesion vs CVD']],
      fig: { a: 'brain-imaging', l: [] },
      steps: [
        P('واژه', 'هر واژه یادداشت را به معنی‌اش وصل کن', [['vertigo', 'سرگیجه'], ['aphasia', 'زبان‌پریشی'], ['deglutition', 'بلعیدن'], ['diplopia', 'دوبینی']], 'Chart Note Analysis کتاب Gylys.'),
        M('فلج', 'فلج دست و پای راست چه نام دارد؟', ['right hemiplegia', 'paraplegia', 'quadriplegia', 'right monoplegia'], 'یک نیمه بدن.'),
        M('اختصار', 'CVD یعنی…', ['بیماری عروق مغز', 'سکته مغزی', 'فشار داخل جمجمه', 'بیماری دریچه قلب'], 'cerebrovascular disease.'),
        M('علت', 'metastatic lesion of the brain یعنی…', ['ضایعه‌ای در مغز که سرطان از جای دیگر به آن رسیده', 'تومور اولیه مغز', 'آبسه مغز', 'التهاب مغز'], 'متاستاز.'),
        T('آزمون', 'برای جدا کردن ضایعه متاستاتیک از سکته عروقی، CT یا MRI مغز لازم است.', true, 'تصویربرداری.', { a: ['mri-coronal'], l: [] }),
        S('املا', 'املای «سرگیجه» را بنویس', 'vertigo', 'سرگیجه چرخشی.', 'verti…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'دستگاه عصبی دو بخش دارد: CNS (مغز و نخاع) و PNS (همه عصب‌های بیرون از آن‌ها).'],
    ['Lx', 'معنی را از پسوند شروع کن: hemi/pleg/ia یعنی «حالت فلج نیمه بدن».'],
    ['Lx', 'neur/o عصب، encephal/o مغز، myel/o نخاع، mening/o پرده‌های مغز و crani/o جمجمه است.'],
    ['Lx', 'myel/o یعنی نخاع ولی my/o یعنی عضله؛ myelitis با myositis فرق دارد.'],
    ['Lx', '‎-plegia‎ فلج کامل است و ‎-paresis‎ ضعف یا فلج ناقص.'],
    ['Lx', '‎-phasia‎ یعنی گفتار و ‎-phagia‎ یعنی بلعیدن؛ aphasia و aphagia دو چیز متفاوت‌اند.'],
    ['Lx', 'neurologist با دارو و معاینه درمان می‌کند و neurosurgeon با جراحی.'],
    ['Lx', 'psychiatrist پزشک است و دارو تجویز می‌کند؛ psychologist روان‌درمانی و آزمون انجام می‌دهد.'],
    ['Lx', 'مغز حدود ۸۶ میلیارد نورون دارد.'],
    ['Cn', 'cerebrum بزرگ‌ترین بخش مغز است و cerebellum تعادل و هماهنگی را کنترل می‌کند.'],
    ['Cn', 'ساقه مغز سه بخش دارد: مغز میانی، پل و بصل‌النخاع.'],
    ['Cn', 'بصل‌النخاع (medulla oblongata) تنفس و ضربان قلب را کنترل می‌کند.'],
    ['Cn', 'مننژ از بیرون به درون: سخت‌شامه، عنکبوتیه و نرم‌شامه.'],
    ['Cn', 'CSF در شبکه مشیمیه بطن‌ها ساخته می‌شود و مغز را شناور نگه می‌دارد.'],
    ['Cn', 'Broca area تولید گفتار است و Wernicke area فهم گفتار.'],
    ['Cn', 'هر نیمکره مغز نیمه مخالف بدن را کنترل می‌کند.'],
    ['Cn', 'در مغز ماده خاکستری بیرون است ولی در نخاع وسط و به شکل پروانه.'],
    ['Cn', 'نخاع در بزرگسال تا حدود مهره L2 می‌رسد و زیر آن cauda equina است.'],
    ['Pn', '۱۲ جفت عصب جمجمه‌ای و ۳۱ جفت عصب نخاعی داریم.'],
    ['Pn', 'afferent پیام را به سوی CNS می‌برد و efferent دور از آن.'],
    ['Pn', 'دندریت پیام را می‌گیرد و آکسون آن را می‌برد.'],
    ['Pn', 'غلاف میلین مثل روکش سیم برق است و پیام را سریع‌تر می‌کند.'],
    ['Pn', 'عصب واگ (X) بیشتر اندام‌های سینه و شکم را عصب‌دهی می‌کند.'],
    ['Pn', 'سمپاتیک یعنی «جنگ یا گریز» و پاراسمپاتیک «استراحت و گوارش».'],
    ['Pn', 'نشانه بابینسکی در نوزاد طبیعی است ولی در بزرگسال نشانه آسیب نورون حرکتی است.'],
    ['Pn', 'زونا (herpes zoster) روی یک درماتوم و یک طرف بدن بثورات دردناک می‌دهد.'],
    ['Ds', 'CVA همان سکته مغزی است؛ یا ایسکمیک (لخته) یا خونریزی‌دهنده.'],
    ['Ds', 'TIA علائم سکته‌ای است که زیر ۲۴ ساعت برطرف می‌شود؛ یک هشدار جدی.'],
    ['Ds', 'epidural hematoma روی سخت‌شامه است و subdural زیر آن.'],
    ['Ds', 'epilepsy یعنی تشنج‌های تکرارشونده؛ ‎-lepsy‎ یعنی حمله.'],
    ['Ds', 'پارکینسون از کمبود دوپامین است: لرزش، سفتی و کندی حرکت.'],
    ['Ds', 'آلزایمر شایع‌ترین علت دمانس است.'],
    ['Ds', 'در ام‌اس غلاف میلین تخریب و با پلاک سفت جایگزین می‌شود.'],
    ['Ds', 'hydrocephalus یعنی تجمع CSF در بطن‌ها؛ با شانت VP درمان می‌شود.'],
    ['Ds', 'meningocele بیرون‌زدگی پرده‌هاست و myelomeningocele بیرون‌زدگی نخاع و پرده‌ها.'],
    ['Ds', 'meningitis معمولاً با تب، سردرد و سفتی گردن خود را نشان می‌دهد.'],
    ['Ps', 'delusion خطای باور است و hallucination خطای حس.'],
    ['Ps', 'phobia ترس شدید، پایدار و غیرمنطقی از چیزی خاص است.'],
    ['Ps', 'در OCD، obsession فکر تکراری است و compulsion کار تکراری.'],
    ['Ps', 'bipolar disorder یعنی نوسان بین شیدایی و افسردگی.'],
    ['Ps', 'schizophrenia به معنی شخصیت دوگانه نیست؛ یعنی جدا شدن ذهن از واقعیت.'],
    ['Ps', 'neuroleptic همان داروی ضدروان‌پریشی است؛ NMS واکنش خطرناک نادر به آن است.'],
    ['Ps', 'SSRI سروتونین را در سیناپس بیشتر نگه می‌دارد و افسردگی را کم می‌کند.'],
    ['Ps', 'دلیریوم ناگهانی و گذراست ولی دمانس تدریجی و پیشرونده.'],
    ['Tx', 'GCS از ۳ تا ۱۵ است؛ ۸ و کمتر یعنی آسیب شدید.'],
    ['Tx', 'EEG برق مغز را ثبت می‌کند و EMG برق عضله را.'],
    ['Tx', 'پونکسیون کمری معمولاً بین L3 و L4، زیر پایان نخاع انجام می‌شود.'],
    ['Tx', 'CT خونریزی را سریع نشان می‌دهد و MRI جزئیات بافت نرم را.'],
    ['Tx', 'craniotomy برش جمجمه است و craniectomy برداشتن بخشی از آن.'],
    ['Tx', 'laminectomy یعنی برداشتن تیغه مهره برای کم کردن فشار روی نخاع.'],
    ['Tx', '‎-rrhaphy‎ یعنی بخیه؛ neurorrhaphy بخیه عصب است.'],
    ['Tx', 'analgesic درد را کم می‌کند و anesthetic حس را می‌برد.'],
    ['Tx', 'PT قدرت و راه رفتن را برمی‌گرداند و OT کارهای روزمره را.']
  ];
  const COLORS = { Lx: '#6C4FD0', Cn: '#E0708C', Pn: '#E89A1E', Ds: '#D9534F', Ps: '#17A398', Tx: '#3D6FD6', '': '#6C4FD0' };
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
/* موتور — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و ابزار ویژه هر اپ (EA.APP.extraTool)
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const A = EA.APP, X = A.extraTool;
  const KEY = A.key + '.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#D9643A' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: 'اختصارها', color: '#1899D6' },
  ].concat(X ? [{ id: X.id, sym: X.sym, name: X.name, color: X.color }] : []);
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: A.parseDefault, open: null, limit: 40 };
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
      <p class="disclaimer">${A.toolsDisclaimer}</p>
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
  const dict = () => `<div class="tpane">${searchBox(A.ph.dict)}
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
  const SAMPLES = A.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. ${esc(A.parseSamples[1] || A.parseDefault)}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(A.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(A.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  const PANES = { dict, parse, roots, abbr };
  if (X) PANES[X.id] = X.pane;

  /* ---------- رویدادها ---------- */
  function redraw(el, keepFocus) {
    /* فوکوس جعبه جست‌وجو، تجزیه‌گر یا هر ورودی data-keep ابزار ویژه پس از بازسازی برمی‌گردد */
    const active = document.activeElement, sel = active && active.matches && (active.matches('[data-tq]') ? '[data-tq]' : active.matches('[data-tp]') ? '[data-tp]' : active.matches('[data-keep]') ? `[data-keep="${active.dataset.keep}"]` : null);
    let pos = 0; try { pos = sel ? active.selectionStart : 0; } catch (e) { /* number input */ }
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
      if (X && X.click && cur === X.id && X.click(e)) { sfx('select'); return redraw(el); }
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
      else if (X && X.input && cur === X.id && X.input(e, el)) redraw(el, true);
    });
  }

  EA.tools = { view, bind, TOOLS };
})();
  };
  D.ready = true;
})(window.ACADEMY_SUBCOURSES);
