/* تراپو • ترمینو — حیطه «lexa» (Introduction to Medical Terminology: Word Building, Prefixes, Roots and Suffixes)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_lexa;
  D.css = "";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* لِکسا — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: "Lexa", key: 'lexa', title: "Lexa • Introduction to Medical Terminology: Word Building, Prefixes, Roots and Suffixes", certCode: 'LX',
    subject: "Introduction to medical terminology: roots, prefixes, suffixes, combining vowels, plurals, abbreviations and the language of the chart",
    kicker: "🧩 Medical terminology: the ABCs of word building",
    hello: "Hi, I'm <b>Lexa</b>, a puzzle piece that breaks every long medical word into small, familiar pieces!",
    disclaimer: "Lexa is an educational tool and does not replace official references, drug guidelines, clinical judgment or a physician’s orders.",
    eyes: "Dozens of teaching figures and illustrations: from the root-and-suffix puzzle and the body map of roots to plural rules, prescriptions, do-not-use abbreviations and the medical record.",
    outcomes: [
      "Break every medical word into prefix, root, combining vowel and suffix, and start its meaning from the suffix",
      "Recognise the roots for organs, colours and bacterial shapes, and tell Greek and Latin pairs apart",
      "Use the suffixes for disease, diagnosis, surgery and specialties correctly",
      "Show the prefixes for number, position, time, negation and body directions on a figure",
      "Form the plurals of Latin words and steer clear of sound-alike and spelling traps",
      "Read prescriptions, clinical notes and chart abbreviations, and recognise the do-not-use abbreviations"
    ],
    endText: "Just 5 minutes a day. In a few weeks you’ll solve any unfamiliar medical word like a puzzle, in seconds.",
    obHello: "Hi! I’m Lexa, a smiling puzzle piece 🧩 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “The ABCs of Medical Language” is the best start; it’s the foundation of every other world!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">gastroenterology</b> means…",
      fig: { a: ['word-parts'], l: ["The pieces of the word gastroenterology"] },
      opts: ["study of the stomach and intestines", "inflammation of the stomach and intestines", "removal of the stomach", "intestinal pain"],
      why: `${EA.K.wb('gastr/o', 'enter/o', '-logy')}<br>The root <b dir="ltr">gastr/o</b> means stomach, <b dir="ltr">enter/o</b> means intestine and the suffix <b dir="ltr">-logy</b> means study of; so it is <b>the study of the stomach and intestines</b>. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["Newcomer", "Curious Piece", "Root Hunter", "Suffix Decoder", "Combining-Vowel Master", "Body-Map Reader", "Prefix Keeper",
      "Latin Plural Master", "Trap Buster", "Prescription Reader", "Abbreviation Detective", "Chart Master", "Word Architect", "Puzzle Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "Midwifery student", "Health records officer", "Medical secretary", "Pharmacy student", "Lab technologist", "Radiology technologist", "Surgical technologist", "Paramedic", "Physiotherapy student", "Dental student", "Medical translator"],
    firstBadge: ['🧩', "First Piece"],
    worldBadges: { bs: ['🧩', "Puzzle Player"], rt: ['🫀', "Map Reader"], sf: ['🔚', "Suffix Master"], pf: ['🔜', "Prefix Master"], rl: ['⚖️', "Trap Buster"], hs: ['🏥', "Chart Reader"] },
    confetti: ['#4B4FC4', '#7FB2E5', '#F7D774', '#F5B880', '#C39BE0', '#17A398', '#E2683C', '#FFC800'],
    /* ابزارها */
    parseDefault: 'gastroenterology',
    parseSamples: ['gastroenterology', 'osteoarthritis', 'otorhinolaryngologist', 'hepatomegaly', 'tonsillectomy', 'intramuscular', 'erythrocyte', 'bradycardia'],
    ph: { dict: "Search: suffix, stomach, gastritis…", roots: "Search: cardi, heart, -itis…", abbr: "Search: bid, nothing by mouth, NPO…" },
    toolsDisclaimer: "⚕️ Lexa is an educational tool; the pluralizer and prescription reader do not replace a physician’s orders, a pharmacist or official references.",
    /* شخصیت: قطعه پازل آبی (ریشه) با زبانه بالا و راست — بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy */
    mascot: (cx, cy) => {
      const x = cx - 46, y = cy - 40, w = 92, h = 96;
      const d = `M${x} ${y} H${cx - 14} C${cx - 18} ${y - 18} ${cx + 18} ${y - 18} ${cx + 14} ${y} H${x + w} V${cy - 6} C${x + w + 20} ${cy - 12} ${x + w + 20} ${cy + 22} ${x + w} ${cy + 16} V${y + h} H${x} V${cy + 16} C${x + 16} ${cy + 22} ${x + 16} ${cy - 12} ${x} ${cy - 6} Z`;
      return `
        <path d="${d}" fill="#7FB2E5" stroke="var(--c)" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M${x + 10} ${y + 10} H${cx - 18}" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>
        <path d="M${x + 8} ${y + h - 8} H${x + w - 8}" stroke="#3B78B8" stroke-width="3" stroke-linecap="round" opacity=".35"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`;
    }
  };

  /* ---------- ابزار ویژه: جمع‌ساز واژه لاتین و نسخه‌خوان ----------
   * جمع‌ساز: اول فهرست استثناها، بعد قاعده‌های پایانی (منبع: فصل ۴ کتاب Dummies و جدول ۱-۲ فصل ۱ کتاب‌های پیوست)؛
   * نسخه‌خوان: هر نشانه نسخه را با جدول‌های اختصار فصل ۷ و نمونه نسخه فصل ۱ Fremgen به فارسی برمی‌گرداند
   * و اختصارهای فهرست ممنوع (qd، qod، U، IU، MS) را با هشدار نشان می‌دهد. */
  const L = s => `<bdi dir="ltr">${s}</bdi>`;
  const EXC = {
    meatus: ['meatus', "stays the same"], corpus: ['corpora', "exception to -us"], viscus: ['viscera', "exception to -us"], plexus: ['plexuses', "exception to -us"],
    femur: ['femora', "exception"], iris: ['irides', "exception to -is"], epididymis: ['epididymides', "exception to -is"], pons: ['pontes', "exception"],
    cornu: ['cornua', "exception"], vas: ['vasa', "exception"], embryo: ['embryos', "exception to the -o rule"], placebo: ['placebos', "exception to the -o rule"],
    cortex: ['cortices', "Latin word: -ex → -ices"], apex: ['apices', "Latin word: -ex → -ices"], index: ['indices', "Latin word: -ex → -ices"], vertex: ['vertices', "Latin word: -ex → -ices"],
    comedo: ['comedones', "-o after a consonant → -ones"], datum: ['data', "rule -um → -a"], syllabus: ['syllabi', "rule -us → -i (syllabuses is also correct)"],
    'placenta previa': ['placentae previae', "both the Latin noun and its adjective become plural"], 'verruca vulgaris': ['verrucae vulgares', "both the Latin noun and its adjective become plural"],
    'condyloma acuminatum': ['condylomata acuminata', "both the Latin noun and its adjective become plural"]
  };
  const RULES = [
    [/ma$/, w => w + 'ta', "-ma → -mata (the English plural -mas is also accepted)", ''],
    [/nx$/, w => w.slice(0, -1) + 'ges', '‎-nx → -nges‎', 'JEEZ'],
    [/[iy]x$/, w => w.slice(0, -1) + 'ces', "-ix → -ices and -yx → -yces", 'seez'],
    [/ax$/, w => w.slice(0, -1) + 'ces', '‎-ax → -aces‎', 'seez'],
    [/is$/, w => w.slice(0, -2) + 'es', '‎-is → -es‎', 'eez'],
    [/us$/, w => w.slice(0, -2) + 'i', '‎-us → -i‎', 'eye'],
    [/um$/, w => w.slice(0, -2) + 'a', '‎-um → -a‎', 'ah'],
    [/on$/, w => w.slice(0, -2) + 'a', "-on → -a (Greek words)", 'ah'],
    [/en$/, w => w.slice(0, -2) + 'ina', '‎-en → -ina‎', ''],
    [/a$/, w => w + 'e', '‎-a → -ae‎', 'ay'],
    [/[^aeiou]y$/, w => w.slice(0, -1) + 'ies', "English rule: -y after a consonant → -ies", ''],
    [/(s|x|z|ch|sh)$/, w => w + 'es', "English rule: add -es", ''],
    [/./, w => w + 's', "English rule: add -s", '']
  ];
  function plural(raw) {
    const w = String(raw || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!/^[a-z][a-z ]*$/.test(w)) return null;
    if (EXC[w]) return { p: EXC[w][0], rule: EXC[w][1], say: '' };
    const r = RULES.find(x => x[0].test(w));
    return { p: r[1](w), rule: r[2], say: r[3] };
  }
  const RX = [
    [/^rx$/i, "prescription; take"], [/^sig\.?:?$/i, "directions:"], [/^disp\.?:?$/i, "dispense"], [/^#(\d+)$/, (m) => `${EA.fa(+m[1], 4)} units`],
    [/^(refills?|ref)\.?:?$/i, "refills:"], [/^(\d+)x$/i, m => `${EA.fa(+m[1], 4)} times`], [/^x(\d+)$/i, m => `${EA.fa(+m[1], 4)} times`],
    [/^(tab|tabs|tablet|tablets)\.?$/i, "tablet"], [/^(cap|caps|capsule)\.?$/i, "capsule"], [/^supp\.?$/i, "suppository"],
    [/^(i|ī|ı)$/i, "one"], [/^(ii|īī)$/i, "two"], [/^(iii|īīī)$/i, "three"], [/^ss$/i, "one half"],
    [/^(\d+(?:\.\d+)?)$/, m => EA.fa(+m[1], 4)], [/^mg$/i, "milligrams"], [/^mcg$/i, "micrograms"], [/^(g|gm)$/i, "grams"], [/^ml$/i, "millilitres"], [/^(gtt|gtts)\.?$/i, "drops"],
    [/^(po|p\.o\.)$/i, "by mouth"], [/^(sl|subling)$/i, "under the tongue"], [/^iv$/i, "intravenously"], [/^im$/i, "intramuscularly"], [/^(subcut|subq|sc)$/i, "subcutaneously"], [/^(od|o\.d\.)$/i, "in the right eye"], [/^(os|o\.s\.)$/i, "in the left eye"], [/^(ou|o\.u\.)$/i, "in both eyes"],
    [/^daily$/i, "once a day"], [/^(bid|b\.i\.d\.)$/i, "twice a day"], [/^(tid|t\.i\.d\.)$/i, "three times a day"], [/^(qid|q\.i\.d\.)$/i, "four times a day"],
    [/^q(\d+)h$/i, m => `every ${EA.fa(+m[1], 4)} hours`], [/^qh$/i, "every hour"], [/^(qam|q\.?am)$/i, "every morning"], [/^(qpm|q\.?pm)$/i, "every evening"], [/^(qhs|q\.?noc|noc)$/i, "every night"],
    [/^(hs|h\.s\.)$/i, "at bedtime"], [/^(ac|a\.c\.)$/i, "before meals"], [/^(pc|p\.c\.)$/i, "after meals"], [/^(prn|p\.r\.n\.)$/i, "as needed"], [/^stat$/i, "immediately"],
    [/^npo$/i, "nothing by mouth"], [/^then$/i, "then"], [/^and$/i, "and"], [/^ad\s?lib$/i, "as desired"], [/^(no)$/i, "without"], [/^(sub|subs)\.?$/i, "substitute"],
    [/^(qd|q\.d\.)$/i, "once a day", "do not use: write “daily”"], [/^(qod|q\.o\.d\.)$/i, "every other day", "do not use: write “every other day”"],
    [/^(u|iu)$/i, "unit", "do not use: write “unit” in full"], [/^(ms|mso4)$/i, "morphine sulfate", "do not use: write “morphine sulfate” in full"]
  ];
  function readRx(raw) {
    const toks = String(raw || '').replace(/,/g, ' ').replace(/\bq\s+(\d+)\s*h\b/gi, 'q$1h').replace(/\bq\s+(am|pm|noc)\b/gi, 'q$1').replace(/\bad lib\b/gi, 'adlib').split(/\s+/).filter(Boolean);
    return toks.map(tk => {
      for (const r of RX) { const m = tk.match(r[0]); if (m) return { tk, fa: typeof r[1] === 'function' ? r[1](m) : r[1], warn: r[2] || '' }; }
      return { tk, fa: '', warn: '' };
    });
  }
  const st = { w: 'vertebra', rx: 'Tagamet 800 mg Sig i po tid Disp #30 refill 2x' };
  const PL_SAMPLES = ['bronchus', 'diagnosis', 'appendix', 'phalanx', 'ganglion', 'carcinoma', 'bacterium', 'artery'];
  const RX_SAMPLES = ['Pravachol 20 mg Sig i q noc #30 refill 3x no sub', 'Lanoxin 0.125 mg Sig iii stat then ii qam #100', 'Synthroid 0.075 mg Sig i daily #100 refill x4', 'Lipitor 10 mg i po qd prn'];
  function plOut() {
    const r = plural(st.w);
    if (!r) return "<p class=\"pl__note\">Type a singular English word, such as bronchus or vertebra.</p>";
    return `<div class="pl__res"><span class="pl__s">${L(EA.ui.esc(st.w.trim()))}</span><span class="pl__ar">→</span><b class="pl__p">${L(EA.ui.esc(r.p))}</b></div>
      <p class="pl__note">Rule: ${r.rule}${r.say ? `; pronounce the plural ending ${L('“' + r.say + '”')}` : ''}</p>`;
  }
  function rxOut() {
    const ts = readRx(st.rx);
    if (!ts.length) return "<p class=\"pl__note\">Type a prescription instruction, such as “i po tid”.</p>";
    const chips = ts.map(x => `<span class="rx__c${x.warn ? ' is-warn' : x.fa ? '' : ' is-name'}"><b>${L(EA.ui.esc(x.tk))}</b>${x.fa ? `<small>${x.fa}</small>` : "<small>drug name or word</small>"}</span>`).join('');
    const warns = ts.filter(x => x.warn).map(x => `<li>${L(EA.ui.esc(x.tk))}: ${x.warn}</li>`).join('');
    const sent = ts.map(x => x.fa || L(EA.ui.esc(x.tk))).join(' ').replace(/\s+:/g, ':');
    return `<div class="rx__cs">${chips}</div><p class="rx__sent">${sent}</p>${warns ? `<ul class="rx__warn">${warns}</ul>` : ''}`;
  }
  EA.APP.extraTool = {
    id: 'pl', sym: 'i→ae', name: "Pluralizer & prescription reader", color: '#4B4FC4',
    /* برای آزمون: شکل جمع واژه نوشته‌شده */
    value: () => { const r = plural(st.w); return r ? r.p : ''; },
    pane: () => `<div class="tpane"><p class="muted">Latin and Greek words have their own plurals. Type a singular word to see its plural form and the rule behind it.</p>
    <label class="pl__in"><span>Singular word</span><input type="text" dir="ltr" data-keep="w" data-pl="w" value="${EA.ui.esc(st.w)}" placeholder="vertebra" autocomplete="off" spellcheck="false"></label>
    <div class="pl__ex">${PL_SAMPLES.map(s => `<button type="button" class="pl__chip" data-plex="${s}">${L(s)}</button>`).join('')}</div>
    <div class="pl__out" aria-live="polite">${plOut()}</div>
    <table class="mini"><tr><th>Singular</th><th>Plural</th><th>Example</th></tr>
      <tr><td>${L('-a')}</td><td>${L('-ae')}</td><td>${L('bursa → bursae')}</td></tr><tr><td>${L('-us')}</td><td>${L('-i')}</td><td>${L('fungus → fungi')}</td></tr>
      <tr><td>${L('-um')}</td><td>${L('-a')}</td><td>${L('atrium → atria')}</td></tr><tr><td>${L('-is')}</td><td>${L('-es')}</td><td>${L('prognosis → prognoses')}</td></tr>
      <tr><td>${L('-ix')}</td><td>${L('-ices')}</td><td>${L('appendix → appendices')}</td></tr><tr><td>${L('-nx')}</td><td>${L('-nges')}</td><td>${L('larynx → larynges')}</td></tr>
      <tr><td>${L('-on')}</td><td>${L('-a')}</td><td>${L('ganglion → ganglia')}</td></tr><tr><td>${L('-ma')}</td><td>${L('-mata')}</td><td>${L('fibroma → fibromata')}</td></tr></table>
    <h4 class="pl__h">Prescription reader</h4>
    <p class="muted">Type a prescription instruction and every abbreviation is spelled out in plain English. Abbreviations on the do-not-use list get a red warning.</p>
    <label class="pl__in"><span>Prescription text</span><input type="text" dir="ltr" data-keep="rx" data-pl="rx" value="${EA.ui.esc(st.rx)}" placeholder="i po tid" autocomplete="off" spellcheck="false"></label>
    <div class="pl__ex">${RX_SAMPLES.map((s, i) => `<button type="button" class="pl__chip" data-rxex="${i}">${L(EA.ui.esc(s.split(' ').slice(0, 2).join(' ')))}</button>`).join('')}</div>
    <div class="rx__out" aria-live="polite">${rxOut()}</div>
    ${EA.ui.figCard({ a: ['prescription-anatomy'], l: ["Parts of a prescription"] })}
    <p class="muted">The sample prescriptions come from the “Prescription Practice” exercise in chapter 1 of Fremgen. Never take or change a medicine without a physician’s and pharmacist’s instructions.</p></div>`,
    click: e => {
      const a = e.target.closest('[data-plex]'), b = e.target.closest('[data-rxex]');
      if (a) { st.w = a.dataset.plex; return true; }
      if (b) { st.rx = RX_SAMPLES[+b.dataset.rxex]; return true; }
      return false;
    },
    input: (e, el) => {
      const k = e.target.dataset && e.target.dataset.pl;
      if (!k) return false;
      st[k] = e.target.value;
      const set = (s, h) => { const o = el.querySelector(s); if (o) o.innerHTML = h; };
      if (k === 'w') set('.pl__out', plOut()); else set('.rx__out', rxOut());
      return false;
    },
    /* آزمون دود: نمونه bronchus را بزن، بعد phalanx را بنویس ← phalanges */
    test: { clicks: ['[data-plex="bronchus"]'], fill: [['[data-pl="w"]', 'phalanx'], ['[data-pl="rx"]', 'i po qd']], expect: 'phalanges' }
  };
  EA.APP.plural = plural;
  EA.APP.readRx = readRx;
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
    memo: s => `<div class="memo"><b class="memo__h">🧠 Memory trick</b>${EA.bi(s)}</div>`,
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
/* لِکسا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/lexa/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abduction", "ab-DUK-shun", "Movement away from the midline of the body (ab- = away from).", "moving away from the midline (abduction)", "pf", "body", []],
["acronym", "AK-roh-nim", "Abbreviation formed from the first letters of words and spoken as one word, such as AIDS or MRI.", "word made from initials and read as one word", "rl", "concept", []],
["adduction", "ah-DUK-shun", "Movement toward the midline of the body (ad- = toward).", "moving toward the midline (adduction)", "pf", "body", []],
["afebrile", "ay-FEB-ril", "Without fever (a- = without).", "without fever", "pf", "sx", []],
["afferent", "AF-er-ent", "Carrying toward the center; compare efferent, carrying away.", "carrying toward the centre", "rl", "body", []],
["albino", "al-BYE-noh", "Person with white hair, very pale skin and unpigmented irises (alb- = white).", "lacking skin pigment (albino)", "rt", "dz", []],
["alcoholism", "AL-koh-hol-izm", "Condition of dependence on alcohol (-ism = condition, state).", "alcohol addiction", "sf", "dz", []],
["Alzheimer disease", "ALTS-hye-mer dih-ZEEZ", "Progressive degenerative disease of the brain, named for Alois Alzheimer.", "progressive memory-loss brain disease", "rl", "dz", ["AD"]],
["ambidextrous", "am-bee-DEKS-trus", "Able to use either hand equally well (ambi- = both).", "able to use both hands equally", "pf", "concept", []],
["ambulatory", "AM-byoo-lah-tor-ee", "Able to walk; also care given without an overnight hospital stay.", "outpatient; able to walk", "hs", "concept", []],
["analgesic", "an-al-JEE-zik", "Drug that relieves pain without loss of consciousness (an- + -algesia).", "painkiller", "hs", "tx", []],
["anatomic position", "an-ah-TOM-ik poh-ZISH-un", "Standard posture for describing the body: standing, facing forward, arms at the sides, palms forward.", "standard upright reference stance", "pf", "body", []],
["anatomy", "ah-NAT-oh-mee", "Study of the structure of the body and its parts.", "study of body structure", "rt", "concept", []],
["anemia", "ah-NEE-mee-ah", "Lack of red blood cells or hemoglobin; literally without blood (an- + -emia).", "low red blood cells (anaemia)", "sf", "dz", []],
["anesthesia", "an-es-THEE-zee-ah", "Condition of lack of sensation (an- + esthesi/o + -ia).", "loss of sensation (anaesthesia)", "sf", "tx", []],
["anesthesiologist", "an-es-thee-zee-OL-oh-jist", "Physician who specializes in giving anesthesia.", "anaesthesia specialist", "sf", "field", []],
["angioplasty", "AN-jee-oh-plas-tee", "Surgical repair of a blood vessel (angi/o + -plasty).", "repair of a blood vessel (angioplasty)", "rt", "tx", []],
["anoxia", "an-OK-see-ah", "Absence of oxygen in the tissues (an- + ox/o + -ia).", "lack of oxygen", "pf", "sx", []],
["antacid", "ant-AS-id", "Drug that neutralizes stomach acid.", "acid neutralizer", "hs", "tx", []],
["antecubital", "an-tee-KYOO-bih-tal", "In front of the elbow (ante- = before, in front).", "in front of the elbow", "pf", "body", []],
["anterior", "an-TEER-ee-or", "Toward the front of the body; opposite of posterior.", "toward the front (anterior)", "pf", "body", []],
["antibiotic", "an-tee-bye-OT-ik", "Drug that kills or slows the growth of bacteria (anti- = against + bio = life).", "bacteria-killing drug", "pf", "tx", []],
["antonym", "AN-toh-nim", "A word with the opposite meaning, such as brady- and tachy-.", "word of opposite meaning", "rl", "concept", []],
["Apgar score", "AP-gar skor", "Rating of a newborn's condition at 1 and 5 minutes of age, named for Virginia Apgar.", "newborn rating at 1 and 5 minutes", "rl", "lab", []],
["appendectomy", "ap-en-DEK-toh-mee", "Surgical removal of the appendix (append/o + -ectomy).", "removal of the appendix", "rt", "tx", []],
["appendicitis", "ah-pen-dih-SYE-tis", "Inflammation of the appendix (append/o + -itis).", "inflammation of the appendix", "sf", "dz", []],
["appendix", "ah-PEN-diks", "A small pouch attached to the large intestine; plural appendices (ix becomes ices).", "small pouch off the large intestine", "rl", "body", []],
["arteriole", "ar-TEER-ee-ohl", "A small artery (-ole = small).", "small artery", "sf", "body", []],
["arteriosclerosis", "ar-teer-ee-oh-skleh-ROH-sis", "Hardening of the arteries (arteri/o + -sclerosis).", "hardening of the arteries", "sf", "dz", []],
["arthritis", "ar-THRY-tis", "Inflammation of a joint (arthr/o + -itis).", "joint inflammation (arthritis)", "bs", "dz", []],
["arthroscopy", "ar-THROS-koh-pee", "Visual examination inside a joint with an arthroscope (arthr/o + -scopy).", "looking inside a joint (arthroscopy)", "rt", "lab", []],
["atrium", "AY-tree-um", "Upper chamber of the heart; plural atria.", "upper heart chamber", "rl", "body", []],
["atrophy", "AT-roh-fee", "Wasting away or decrease in size, as of a muscle (a- + -trophy).", "wasting away (atrophy)", "pf", "sx", []],
["audiologist", "aw-dee-OL-oh-jist", "Professional who evaluates hearing and balance problems.", "hearing specialist", "hs", "field", []],
["bacillus", "bah-SIL-us", "Rod-shaped bacterium; plural bacilli.", "rod-shaped bacterium (bacillus)", "rt", "body", []],
["bacteriology", "bak-teer-ee-OL-oh-jee", "Scientific study of bacteria (bacteri/o + -logy).", "study of bacteria", "rt", "field", []],
["bacterium", "bak-TEER-ee-um", "A single one-celled microbe; plural bacteria (um becomes a).", "single one-celled microbe", "rl", "body", []],
["bicuspid", "bye-KUS-pid", "Having two points or cusps, like the mitral valve or a premolar tooth.", "having two cusps", "pf", "body", []],
["bilateral", "bye-LAT-er-al", "Pertaining to both sides (bi- + later/o + -al).", "on both sides", "pf", "concept", []],
["biopsy", "BYE-op-see", "Removal of living tissue for microscopic examination (bi/o + -opsy), such as a punch biopsy of the skin.", "tissue sampling (biopsy)", "sf", "lab", ["Bx"]],
["bradycardia", "brad-ee-KAR-dee-ah", "Slow heart rate, under 60 beats a minute (brady- = slow).", "slow heartbeat", "pf", "sx", []],
["brand name", "brand naym", "The proprietary trademark name a company gives a drug, such as Advil or Motrin.", "company’s trademark drug name", "hs", "tx", []],
["bronchus", "BRONG-kus", "A main air passage of the lung; plural bronchi (us becomes i).", "main airway of the lung", "rl", "body", []],
["bursa", "BER-sah", "A small fluid-filled sac that cushions a joint; plural bursae.", "fluid sac near a joint (bursa)", "rl", "body", []],
["callus", "KAL-us", "A hardened area of skin, or new bone at a healing fracture.", "hardened skin; new bone at a healing break", "rl", "sx", []],
["carcinogen", "kar-SIN-oh-jen", "A substance that produces cancer (carcin/o + -gen).", "cancer-causing agent", "sf", "sx", []],
["carcinogenic", "kar-sih-noh-JEN-ik", "Producing cancer (carcin/o + -genic).", "cancer-causing", "rt", "sx", []],
["carcinoma", "kar-sih-NOH-mah", "Cancerous tumor of epithelial tissue; from Greek karkinos, crab.", "cancer of epithelial tissue (carcinoma)", "bs", "dz", ["Ca"]],
["cardiologist", "kar-dee-OL-oh-jist", "Physician skilled in the diagnosis and treatment of heart disease.", "heart specialist", "bs", "field", []],
["cardiology", "kar-dee-OL-oh-jee", "Study of the heart and its functions (cardi/o + -logy).", "study of the heart", "bs", "field", []],
["cardiomalacia", "kar-dee-oh-mah-LAY-shee-ah", "Abnormal softening of the heart muscle (cardi/o + -malacia).", "softening of the heart muscle", "sf", "dz", []],
["cardiomegaly", "kar-dee-oh-MEG-ah-lee", "Enlargement of the heart (cardi/o + -megaly).", "enlarged heart", "rt", "sx", []],
["cardiopathy", "kar-dee-OP-ah-thee", "Any disease of the heart (cardi/o + -pathy).", "heart disease", "sf", "dz", []],
["cephalalgia", "sef-ah-LAL-jee-ah", "Headache (cephal/o + -algia).", "headache", "sf", "sx", []],
["cephalic", "seh-FAL-ik", "Pertaining to the head or the head end of the body (cephal/o + -ic).", "toward the head", "rt", "body", []],
["chemical name", "KEM-ih-kal naym", "Long name describing the chemical formula of a drug.", "drug name that describes its formula", "hs", "tx", []],
["chief complaint", "cheef kom-PLAYNT", "The main reason the patient seeks care, in the patient's own words.", "main complaint", "hs", "concept", ["CC"]],
["chiropractor", "KYE-roh-prak-tor", "Professional trained in manipulation of the spinal column.", "spine-manipulation practitioner (chiropractor)", "hs", "field", ["DC"]],
["chlorophyll", "KLOR-oh-fil", "Green pigment of plants (chlor/o = green); an example of the color root.", "green plant pigment", "rt", "concept", []],
["chronic", "KRON-ik", "Lasting a long time; ch is pronounced like k.", "long-lasting (chronic)", "bs", "sx", []],
["circumcision", "ser-kum-SIZH-un", "Surgical removal of the foreskin; cutting around (circum- = around).", "removal of the foreskin", "pf", "tx", []],
["coccus", "KOK-us", "Round bacterium; plural cocci, pronounced KOK-sye.", "round bacterium (coccus)", "rt", "body", []],
["colectomy", "koh-LEK-toh-mee", "Surgical removal of the colon (col/o + -ectomy).", "removal of the colon", "sf", "tx", []],
["colonoscopy", "koh-lon-OS-koh-pee", "Visual examination of the colon with a colonoscope (colon/o + -scopy).", "looking inside the colon (colonoscopy)", "rt", "lab", []],
["colostomy", "koh-LOS-toh-mee", "Surgical opening of the colon onto the abdomen (col/o + -stomy).", "opening of the colon onto the abdomen", "sf", "tx", []],
["combining form", "kom-BYE-ning form", "A word root plus its combining vowel, written with a slash, such as cardi/o or gastr/o.", "root plus combining vowel", "bs", "concept", []],
["combining vowel", "kom-BYE-ning VOW-el", "A vowel, usually o, added between a root and another root or a suffix to make the word easier to pronounce.", "linking vowel (combining vowel)", "bs", "concept", []],
["compound word", "KOM-pownd werd", "A medical term that contains more than one word root, such as gastroenterology or osteoarthritis.", "word with two or more roots", "bs", "concept", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-ray beam rotated around the body to image slices at different depths.", "CT scan", "hs", "lab", ["CT"]],
["confidentiality", "kon-fih-den-shee-AL-ih-tee", "Duty to keep all patient information private; protected in the United States by HIPAA.", "keeping patient information private", "hs", "concept", ["HIPAA"]],
["contraindication", "kon-trah-in-dih-KAY-shun", "A condition that makes a treatment unsafe or undesirable (contra- = against).", "reason not to use a treatment", "pf", "tx", []],
["controlled substance", "kon-TROHLD SUB-stans", "Drug with potential for addiction or abuse, classified in Schedules I to V.", "controlled drug", "hs", "tx", []],
["cutaneous", "kyoo-TAY-nee-us", "Pertaining to the skin (cutane/o + -ous).", "of the skin", "sf", "body", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish discoloration of skin and mucous membranes from lack of oxygen (cyan/o + -osis).", "bluish skin (cyanosis)", "rt", "sx", []],
["cystitis", "sis-TYE-tis", "Inflammation of the urinary bladder (cyst/o + -itis).", "bladder inflammation", "rt", "dz", []],
["cytology", "sye-TOL-oh-jee", "Study of cells (cyt/o + -logy); c before y sounds like s.", "study of cells", "bs", "field", []],
["dehydration", "dee-hye-DRAY-shun", "Excessive loss of body water (de- = remove + hydr/o = water).", "loss of body water", "hs", "sx", []],
["dermatitis", "der-mah-TYE-tis", "Inflammation of the skin (dermat/o + -itis), such as contact dermatitis from poison ivy.", "skin inflammation (dermatitis)", "rt", "dz", []],
["dermatologist", "der-mah-TOL-oh-jist", "Physician who treats diseases of the skin.", "skin specialist", "rt", "field", []],
["dermatosis", "der-mah-TOH-sis", "Any abnormal condition of the skin (dermat/o + -osis).", "skin disease", "sf", "dz", []],
["diacritical mark", "dye-ah-KRIT-ih-kal mark", "A mark placed over a vowel to show its sound, such as the macron for a long vowel and the breve for a short vowel.", "pronunciation mark", "bs", "concept", []],
["diagnosis", "dye-ag-NOH-sis", "Identification of a disease by testing (dia- = through + gnosis = knowledge); plural diagnoses.", "identifying the disease", "rl", "concept", ["Dx"]],
["diarrhea", "dye-ah-REE-ah", "Frequent watery stools; flow through (dia- + -rrhea).", "frequent watery stools", "sf", "sx", []],
["diplococcus", "dip-loh-KOK-us", "Round bacteria that grow in pairs (dipl/o + -coccus), such as Neisseria.", "paired round bacteria (diplococci)", "rt", "body", []],
["discharge summary", "DIS-charj SUM-ah-ree", "Outline of the whole hospital stay, final diagnosis and follow-up plan.", "report written at the end of a stay", "hs", "concept", []],
["dislocation", "dis-loh-KAY-shun", "Displacement of a bone from its joint (dis- = apart).", "displaced joint", "pf", "dz", []],
["distal", "DIS-tal", "Farther from the point of attachment (think distance).", "farther away (distal)", "pf", "body", []],
["diverticulum", "dye-ver-TIK-yoo-lum", "A pouch in the wall of a hollow organ; plural diverticula.", "pouch in the wall of an organ (diverticulum)", "rl", "body", []],
["Down syndrome", "down SIN-drohm", "Chromosomal disorder, also called trisomy 21, named for John Haydon Down.", "trisomy 21 disorder", "rl", "dz", []],
["dysphagia", "dis-FAY-jee-ah", "Difficulty swallowing (dys- + -phagia).", "difficulty swallowing", "pf", "sx", []],
["dysphasia", "dis-FAY-zhah", "Difficulty speaking; compare dysphagia, difficulty swallowing.", "difficulty speaking", "rl", "sx", []],
["dysphoria", "dis-FOR-ee-ah", "Feeling of unease or dissatisfaction (dys- + -phoria); opposite of euphoria.", "feeling of unease", "hs", "sx", []],
["dyspnea", "DISP-nee-ah", "Difficult or labored breathing (dys- + -pnea).", "shortness of breath", "pf", "sx", ["SOB"]],
["ectopic", "ek-TOP-ik", "Located away from the normal position (ecto- = outside).", "out of place", "pf", "dz", []],
["efferent", "EF-er-ent", "Carrying away from the center.", "carrying away from the centre", "rl", "body", []],
["electrocardiogram", "ee-lek-troh-KAR-dee-oh-gram", "Record of the electrical activity of the heart (electr/o + cardi/o + -gram).", "heart tracing (ECG)", "sf", "lab", ["ECG", "EKG"]],
["electrocardiograph", "ee-lek-troh-KAR-dee-oh-graf", "Instrument that records the electrical activity of the heart (-graph).", "ECG machine", "sf", "lab", []],
["electronic health record", "ee-lek-TRON-ik helth REK-ord", "Digital medical record entered and shared by computer or tablet.", "digital patient chart", "hs", "concept", ["EHR", "EMR"]],
["encephalitis", "en-sef-ah-LYE-tis", "Inflammation of the brain (encephal/o + -itis).", "brain inflammation", "rt", "dz", []],
["endocrine", "EN-doh-krin", "Secreting hormones within, into the blood (endo- = within).", "secreting into the blood (endocrine)", "pf", "body", []],
["endoscope", "EN-doh-skohp", "Instrument for viewing inside the body (endo- + -scope).", "viewing tube (endoscope)", "sf", "lab", []],
["endoscopy", "en-DOS-koh-pee", "Visual examination inside a hollow organ with an endoscope.", "looking inside with a scope (endoscopy)", "sf", "lab", []],
["enteritis", "en-ter-EYE-tis", "Inflammation of the small intestine (enter/o + -itis).", "inflammation of the small intestine", "rt", "dz", []],
["enuresis", "en-yoo-REE-sis", "Bed-wetting; compare anuresis, retention of urine.", "bed-wetting", "rl", "sx", []],
["epidermis", "ep-ih-DER-mis", "Outer layer of the skin; upon the dermis (epi- = upon).", "outer skin layer (epidermis)", "pf", "body", []],
["epigastric", "ep-ih-GAS-trik", "Pertaining to the region above the stomach, the upper middle abdomen (epi- + gastr/o + -ic).", "upper middle abdomen (epigastric)", "bs", "body", []],
["eponym", "EP-oh-nim", "A disease, sign or procedure named after a person or place, such as Parkinson disease.", "term named after a person (eponym)", "rl", "concept", []],
["erythrocyte", "eh-RITH-roh-site", "Red blood cell (erythr/o + -cyte).", "red blood cell", "rt", "body", ["RBC"]],
["esophageal", "eh-sof-ah-JEE-al", "Pertaining to the esophagus (esophag/o + -eal).", "of the oesophagus", "bs", "body", []],
["etymology", "et-ih-MOL-oh-jee", "The study of the origin of words and how their meanings have changed.", "word origin", "bs", "concept", []],
["euphoria", "yoo-FOR-ee-ah", "Feeling of well-being (eu- = good).", "sense of well-being", "pf", "sx", []],
["exocrine", "EK-soh-krin", "Secreting outward through a duct (exo- = outside).", "secreting through a duct (exocrine)", "pf", "body", []],
["extension", "ek-STEN-shun", "Straightening a joint so the angle increases.", "straightening a joint", "pf", "body", []],
["extrauterine", "eks-trah-YOO-ter-in", "Outside the uterus (extra- = outside).", "outside the uterus", "pf", "body", []],
["femur", "FEE-mer", "The thigh bone; plural femora. The femoral neck is a common fracture site.", "thigh bone", "rl", "body", []],
["flexion", "FLEK-shun", "Bending a joint so the angle decreases.", "bending a joint", "pf", "body", []],
["Fowler position", "FOW-ler poh-ZISH-un", "Sitting position with the head of the bed raised.", "half-sitting position in bed", "pf", "tx", []],
["fungus", "FUNG-gus", "A simple organism such as yeast or mold; plural fungi.", "yeast or mould organism", "rl", "body", []],
["ganglion", "GANG-glee-on", "A collection of nerve cell bodies; plural ganglia (on becomes a).", "nerve-cell cluster", "rl", "body", []],
["gastralgia", "gas-TRAL-jee-ah", "Stomach pain; stomachache (gastr/o + -algia).", "stomach pain built with the -algia suffix", "bs", "sx", []],
["gastrectomy", "gas-TREK-toh-mee", "Surgical removal of all or part of the stomach (gastr/o + -ectomy).", "removal of the stomach", "bs", "tx", []],
["gastritis", "gas-TRY-tis", "Inflammation of the stomach (gastr/o + -itis); the combining vowel is dropped before a suffix that begins with a vowel.", "stomach inflammation", "bs", "dz", []],
["gastroduodenostomy", "gas-troh-doo-oh-deh-NOS-toh-mee", "Surgical opening between the stomach and the duodenum, the first part of the small intestine.", "connection between stomach and duodenum", "bs", "tx", []],
["gastrodynia", "gas-troh-DIN-ee-ah", "Stomach pain (gastr/o + -dynia); same meaning as gastralgia.", "stomach pain built with the -dynia suffix", "sf", "sx", []],
["gastroenterologist", "gas-troh-en-ter-OL-oh-jist", "Physician who specializes in diseases of the stomach and intestines.", "digestive specialist", "bs", "field", []],
["gastroenterology", "gas-troh-en-ter-OL-oh-jee", "Study of the stomach and intestines and their diseases (gastr/o + enter/o + -logy).", "study of the digestive tract", "bs", "field", []],
["gastroesophageal reflux disease", "gas-troh-eh-sof-ah-JEE-al REE-fluks dih-ZEEZ", "Backflow of stomach acid into the esophagus causing heartburn.", "acid reflux disease", "hs", "dz", ["GERD"]],
["gastrointestinal", "gas-troh-in-TES-tih-nal", "Pertaining to the stomach and intestines; the digestive tract.", "of the stomach and intestines", "rt", "body", ["GI"]],
["gastroscopy", "gas-TROS-koh-pee", "Visual examination of the stomach with an endoscope (gastr/o + -scopy).", "looking inside the stomach (gastroscopy)", "bs", "lab", []],
["gastrostomy", "gas-TROS-toh-mee", "Surgical creation of an opening into the stomach (gastr/o + -stomy).", "opening into the stomach", "sf", "tx", []],
["generic name", "jeh-NAIR-ik naym", "The single nonproprietary name of a drug, such as ibuprofen.", "official non-brand drug name", "hs", "tx", []],
["genitourinary", "jen-ih-toh-YOO-rih-nair-ee", "Pertaining to the genital and urinary organs.", "genital and urinary", "rt", "body", ["GU"]],
["geriatrician", "jer-ee-ah-TRISH-an", "Physician who specializes in diseases of the elderly.", "specialist in older adults", "sf", "field", []],
["geriatrics", "jer-ee-AT-riks", "Care and treatment of the aged (ger/o + -iatrics).", "care of older adults", "sf", "field", []],
["gingivitis", "jin-jih-VYE-tis", "Inflammation of the gums (gingiv/o + -itis); g before i sounds like j.", "gum inflammation", "bs", "dz", []],
["glomerulus", "gloh-MAIR-yoo-lus", "A cluster of capillaries in the kidney; plural glomeruli.", "kidney capillary tuft (glomerulus)", "rl", "body", []],
["gynecologist", "gye-neh-KOL-oh-jist", "Physician who treats diseases of the female reproductive tract.", "women’s health specialist", "hs", "field", []],
["hematology", "hee-mah-TOL-oh-jee", "Study of blood and blood-forming tissues (hemat/o + -logy).", "study of blood", "rt", "field", []],
["hemiarthroplasty", "hem-ee-AR-throh-plas-tee", "Replacement of half of a joint, such as the head of the femur (hemi- + arthr/o + -plasty).", "replacement of half a joint", "hs", "tx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- + -plegia).", "paralysis of one side", "sf", "dz", []],
["hemisphere", "HEM-ih-sfeer", "Half of a sphere; each half of the brain (hemi- = half).", "half of a sphere (hemisphere)", "pf", "body", []],
["hemolysis", "hee-MOL-ih-sis", "Breakdown of red blood cells (hem/o + -lysis).", "breakdown of red blood cells (haemolysis)", "sf", "lab", []],
["hemorrhage", "HEM-or-ij", "Profuse bleeding, bursting forth of blood (hem/o + -rrhage).", "heavy bleeding", "sf", "sx", []],
["hepatitis", "hep-ah-TYE-tis", "Inflammation of the liver (hepat/o + -itis).", "liver inflammation (hepatitis)", "rt", "dz", []],
["hepatoma", "hep-ah-TOH-mah", "Tumor of the liver (hepat/o + -oma).", "liver tumour", "sf", "dz", []],
["hepatomegaly", "hep-ah-toh-MEG-ah-lee", "Enlargement of the liver (hepat/o + -megaly).", "enlarged liver", "rt", "sx", []],
["Hippocratic Oath", "hip-oh-KRAT-ik ohth", "Ethical oath of physicians attributed to Hippocrates (460-377 BC), the Greek physician called the father of medicine.", "physicians’ ancient ethical pledge", "bs", "concept", []],
["histology", "his-TOL-oh-jee", "Study of tissues under the microscope (hist/o + -logy).", "study of tissues", "rt", "field", []],
["history and physical", "HIS-toh-ree and FIZ-ih-kal", "Admission document by the physician with the history, examination, diagnoses and plan.", "admission history and examination", "hs", "concept", ["H&P"]],
["homonym", "HOM-oh-nim", "A word that sounds like another but has a different meaning and often a different spelling, such as ileum and ilium.", "sound-alike word", "rl", "concept", []],
["hospice", "HOS-pis", "Supportive care for terminally ill patients and their families.", "end-of-life care", "hs", "concept", []],
["humerus", "HYOO-mer-us", "The long bone of the upper arm; sounds like humorous.", "upper arm bone", "rl", "body", []],
["hyperglycemia", "hye-per-glye-SEE-mee-ah", "Too much glucose in the blood (hyper- + glyc/o + -emia).", "high blood sugar", "pf", "lab", []],
["hypertension", "hye-per-TEN-shun", "Persistently high arterial blood pressure (hyper- = excessive).", "high blood pressure", "pf", "dz", ["HTN"]],
["hyperthermia", "hye-per-THER-mee-ah", "Abnormally high body temperature (hyper- + therm/o + -ia).", "raised body temperature", "bs", "sx", []],
["hypertrophy", "hye-PER-troh-fee", "Increase in the size of an organ or muscle (hyper- + -trophy).", "enlargement (hypertrophy)", "pf", "sx", []],
["hypodermic", "hye-poh-DER-mik", "Under the skin (hypo- + derm/o + -ic).", "under the skin", "pf", "tx", []],
["hypoglycemia", "hye-poh-glye-SEE-mee-ah", "Too little glucose in the blood (hypo- + glyc/o + -emia).", "low blood sugar", "pf", "lab", []],
["ileum", "IL-ee-um", "The last part of the small intestine; homonym of ilium.", "last part of the small intestine", "rl", "body", []],
["ilium", "IL-ee-um", "The upper part of the hip bone; homonym of ileum.", "wing of the hip bone", "rl", "body", []],
["inferior", "in-FEER-ee-or", "Below or toward the feet.", "lower; toward the feet", "pf", "body", []],
["informed consent", "in-FORMD kon-SENT", "Document signed by the patient after the purpose, benefits and risks of a procedure are explained.", "agreement given after the risks are explained", "hs", "concept", []],
["integumentary", "in-teg-yoo-MEN-tah-ree", "Pertaining to the skin and its appendages: hair, nails and glands.", "of the skin and its appendages", "rt", "body", []],
["intercostal", "in-ter-KOS-tal", "Between the ribs (inter- + cost/o + -al).", "between the ribs", "pf", "body", []],
["internist", "in-TER-nist", "Physician who specializes in the internal organs and their diseases.", "internal medicine specialist", "hs", "field", []],
["intracellular", "in-trah-SEL-yoo-lar", "Inside a cell.", "inside a cell", "pf", "body", []],
["intradermal", "in-trah-DER-mal", "Within the skin (intra- + derm/o + -al).", "within the skin", "pf", "tx", ["ID"]],
["intramuscular", "in-trah-MUS-kyoo-lar", "Within a muscle (intra- + muscul/o + -ar).", "into a muscle", "pf", "tx", ["IM"]],
["intravenous", "in-trah-VEE-nus", "Within a vein (intra- + ven/o + -ous).", "into a vein", "pf", "tx", ["IV"]],
["jaundice", "JAWN-dis", "Yellow color of skin and eyes from bilirubin; also called icterus.", "yellowing of the skin (jaundice)", "rt", "sx", []],
["kyphosis", "kye-FOH-sis", "Abnormal outward curve of the upper spine, hunchback (kyph/o + -osis).", "hunchback (kyphosis)", "bs", "dz", []],
["laparoscopy", "lap-ah-ROS-koh-pee", "Visual examination of the abdominal cavity through small incisions (lapar/o + -scopy).", "looking inside the abdomen (laparoscopy)", "sf", "lab", []],
["larynx", "LAIR-inks", "The voice box; plural larynges (nx becomes nges).", "voice box", "rl", "body", []],
["lateral", "LAT-er-al", "Away from the midline; toward the side.", "toward the side (lateral)", "pf", "body", []],
["leukemia", "loo-KEE-mee-ah", "Cancer of white blood cells, white blood (leuk/o + -emia).", "blood cancer (leukaemia)", "sf", "dz", []],
["leukocyte", "LOO-koh-site", "White blood cell (leuk/o + -cyte).", "white blood cell", "rt", "body", ["WBC"]],
["leukopenia", "loo-koh-PEE-nee-ah", "Too few white blood cells (leuk/o + -penia).", "too few white blood cells", "sf", "lab", []],
["lipoma", "lih-POH-mah", "Benign tumor of fat tissue (lip/o + -oma).", "fatty tumour (lipoma)", "rt", "dz", []],
["lithotripsy", "LITH-oh-trip-see", "Crushing of a stone (lith/o + -tripsy).", "stone crushing", "sf", "tx", []],
["lumen", "LOO-men", "The central opening of a tube or vessel; plural lumina (en becomes ina).", "inner channel of a tube (lumen)", "rl", "body", []],
["Lyme disease", "lime dih-ZEEZ", "Tick-borne multisystem disease named after the place Old Lyme, Connecticut.", "tick-borne infection", "rl", "dz", []],
["macrocephaly", "mak-roh-SEF-ah-lee", "Abnormally large head (macro- = large).", "abnormally large head", "pf", "dz", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a magnetic field and radio waves.", "MRI scan", "hs", "lab", ["MRI"]],
["malnutrition", "mal-noo-TRISH-un", "Poor or bad nutrition (mal- = bad).", "poor nutrition", "pf", "dz", []],
["mammogram", "MAM-oh-gram", "X-ray record of the breast (mamm/o + -gram).", "breast X-ray image", "sf", "lab", []],
["mammography", "mam-OG-rah-fee", "Process of x-ray imaging of the breast (mamm/o + -graphy).", "breast X-ray imaging", "sf", "lab", []],
["meatus", "mee-AY-tus", "An opening or passage; the plural stays meatus.", "opening or passage", "rl", "body", []],
["medial", "MEE-dee-al", "Toward the midline of the body.", "toward the midline (medial)", "pf", "body", []],
["medical dictionary", "MED-ih-kal DIK-shun-air-ee", "Reference book or app that lists medical terms with their spelling, pronunciation and meaning.", "reference book of medical words", "bs", "concept", []],
["medical record", "MED-ih-kal REK-ord", "Legal document of a patient's care: history, examinations, tests, treatments and responses; also called the chart.", "the patient’s chart", "hs", "concept", ["MR"]],
["medical terminology", "MED-ih-kal ter-mih-NOL-oh-jee", "The language of medicine: words built mostly from Greek and Latin word parts to describe the body, diseases and treatments precisely.", "the language of medicine", "bs", "concept", []],
["melanoma", "mel-ah-NOH-mah", "Malignant tumor of pigment cells, a black tumor (melan/o + -oma).", "black pigment-cell tumour (melanoma)", "rt", "dz", []],
["metastasis", "meh-TAS-tah-sis", "Spread of disease, such as cancer, to a distant part (meta- = beyond, change); plural metastases.", "spread of cancer (metastasis)", "pf", "dz", []],
["microscope", "MYE-kroh-skohp", "Instrument for viewing very small objects (micr/o- = small).", "instrument for viewing tiny objects", "pf", "lab", []],
["mitral stenosis", "MY-tral steh-NOH-sis", "Narrowing of the mitral valve of the heart (-stenosis = narrowing).", "narrowing of the mitral valve", "sf", "dz", ["MS"]],
["mnemonic", "neh-MON-ik", "A memory aid; the first m is silent. Sounds like pneumonic, which pertains to the lungs.", "memory aid (mnemonic)", "rl", "concept", []],
["monocyte", "MON-oh-site", "A white blood cell with a single large nucleus (mono- = one).", "single-nucleus white blood cell (monocyte)", "pf", "body", []],
["mucous", "MYOO-kus", "Adjective: pertaining to or producing mucus, as in mucous membrane.", "relating to mucus (adjective)", "rl", "body", []],
["mucus", "MYOO-kus", "Slimy secretion of the mucous membranes (noun).", "slimy secretion (noun)", "rl", "body", []],
["multicellular", "mul-tee-SEL-yoo-lar", "Composed of many cells (multi- + cellul/o + -ar).", "made of many cells", "pf", "concept", []],
["musculoskeletal", "mus-kyoo-loh-SKEL-eh-tal", "Pertaining to muscles and bones; the system of 206 bones and more than 600 muscles.", "muscles and bones", "rt", "body", []],
["myalgia", "mye-AL-jee-ah", "Muscle pain (my/o + -algia).", "muscle pain", "rt", "sx", []],
["myocarditis", "mye-oh-kar-DYE-tis", "Inflammation of the heart muscle (my/o + cardi/o + -itis).", "inflammation of the heart muscle", "rt", "dz", []],
["myorrhaphy", "mye-OR-ah-fee", "Suture of a muscle (my/o + -rrhaphy).", "suturing a muscle", "sf", "tx", []],
["neonate", "NEE-oh-nayt", "Newborn infant in the first 4 weeks of life (neo- = new).", "newborn", "pf", "concept", []],
["nephritis", "neh-FRY-tis", "Inflammation of the kidney (nephr/o + -itis); Greek nephr and Latin ren both mean kidney.", "kidney inflammation", "rt", "dz", []],
["nephrologist", "neh-FROL-oh-jist", "Physician who specializes in the kidneys.", "kidney specialist", "hs", "field", []],
["nephropexy", "NEF-roh-pek-see", "Surgical fixation of a floating kidney (nephr/o + -pexy).", "fixing a floating kidney", "sf", "tx", []],
["neural", "NOO-ral", "Pertaining to nerves (neur/o + -al).", "of the nerves", "sf", "body", []],
["neuralgia", "noo-RAL-jee-ah", "Pain along a nerve (neur/o + -algia).", "nerve pain", "rt", "sx", []],
["neurologist", "noo-ROL-oh-jist", "Physician who specializes in the nervous system.", "nervous system specialist (neurologist)", "hs", "field", []],
["neuroma", "noo-ROH-mah", "Tumor made of nerve cells (neur/o + -oma).", "nerve tumour", "rt", "dz", []],
["neuronal", "noo-ROH-nal", "Pertaining to a neuron, a nerve cell (adjective of neuron).", "of a neuron", "sf", "body", []],
["neuropathy", "noo-ROP-ah-thee", "Disease of the nerves, such as diabetic neuropathy of the feet (neur/o + -pathy).", "nerve disease (neuropathy)", "rt", "dz", []],
["nullipara", "nul-IP-ah-rah", "Woman who has never given birth (nulli- = none).", "woman who has never given birth", "pf", "concept", []],
["obstetrician", "ob-steh-TRISH-an", "Physician who specializes in pregnancy, labor and the postpartum period.", "pregnancy and childbirth specialist", "hs", "field", []],
["oncologist", "ong-KOL-oh-jist", "Physician who specializes in tumors and cancer.", "cancer specialist (oncologist)", "hs", "field", []],
["oncology", "ong-KOL-oh-jee", "Study and treatment of tumors (onc/o + -logy).", "study of cancer (oncology)", "rt", "field", []],
["operative report", "OP-er-ah-tiv ree-PORT", "Surgeon's report of an operation with pre- and postoperative diagnoses.", "surgeon’s account of an operation", "hs", "concept", []],
["ophthalmologist", "off-thal-MOL-oh-jist", "Physician who diagnoses and treats eye diseases.", "eye doctor (ophthalmologist)", "hs", "field", []],
["ophthalmology", "off-thal-MOL-oh-jee", "Branch of medicine dealing with the eye (ophthalm/o + -logy).", "study of the eye (ophthalmology)", "rt", "field", []],
["orthopedist", "or-thoh-PEE-dist", "Surgeon who treats bones, joints and muscles (orth/o = straight + ped/o).", "bone and joint specialist", "hs", "field", []],
["orthopnea", "or-THOP-nee-ah", "Difficulty breathing except when sitting upright (orth/o + -pnea).", "breathing difficulty when lying flat", "hs", "sx", []],
["osteoarthritis", "os-tee-oh-ar-THRY-tis", "Degenerative inflammation of bone and joint (oste/o + arthr/o + -itis); a compound word.", "wear-and-tear joint disease (osteoarthritis)", "bs", "dz", ["OA"]],
["osteoma", "os-tee-OH-mah", "Benign tumor of bone (oste/o + -oma).", "bone tumour", "rt", "dz", []],
["osteomalacia", "os-tee-oh-mah-LAY-shee-ah", "Abnormal softening of bone (oste/o + -malacia).", "softening of bone", "sf", "dz", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Condition of porous, thin bones that break easily (oste/o + por/o + -osis).", "porous, brittle bones", "rt", "dz", []],
["otalgia", "oh-TAL-jee-ah", "Earache (ot/o + -algia).", "earache", "sf", "sx", []],
["otitis", "oh-TYE-tis", "Inflammation of the ear (ot/o + -itis).", "ear inflammation", "rt", "dz", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats the ear, nose and throat (ot/o + rhin/o + laryng/o + -logist).", "ear, nose and throat specialist", "hs", "field", ["ENT"]],
["over-the-counter", "OH-ver the KOWN-ter", "A drug that can be bought without a prescription, such as aspirin.", "sold without a prescription", "hs", "tx", ["OTC"]],
["palpation", "pal-PAY-shun", "Examining by feeling with the fingers; compare palpitation.", "examination by touch (palpation)", "rl", "lab", []],
["palpitation", "pal-pih-TAY-shun", "A rapid or pounding heartbeat felt by the patient.", "pounding heartbeat", "rl", "sx", []],
["pancytopenia", "pan-sye-toh-PEE-nee-ah", "Decrease of all types of blood cells (pan- = all).", "shortage of all blood cells", "pf", "lab", []],
["paramedical", "pair-ah-MED-ih-kal", "Related to and supporting medicine (para- = beside).", "allied to medicine (paramedical)", "pf", "field", []],
["parenteral", "pah-REN-ter-al", "Given by a route other than the digestive tract, usually by injection.", "given by injection, not by mouth", "hs", "tx", []],
["Parkinson disease", "PAR-kin-sun dih-ZEEZ", "Nervous system disorder with tremor and muscle rigidity, named for James Parkinson.", "tremor and stiffness disease", "rl", "dz", ["PD"]],
["pathologist", "pah-THOL-oh-jist", "Physician who studies diseased tissue and body fluids.", "doctor who examines diseased tissue", "hs", "field", []],
["pathology", "pah-THOL-oh-jee", "Study of the nature of disease and the changes it causes in tissues (path/o + -logy).", "study of disease (pathology)", "rt", "field", []],
["pediatrician", "pee-dee-ah-TRISH-an", "Physician who specializes in children's diseases (-ician).", "children’s doctor", "sf", "field", []],
["pediatrics", "pee-dee-AT-riks", "Medical specialty for the care and treatment of children (ped/o + -iatrics).", "children’s medicine", "sf", "field", []],
["pelvic", "PEL-vik", "Pertaining to the pelvis, the bony hip girdle.", "of the pelvis", "sf", "body", []],
["pericardium", "pair-ih-KAR-dee-um", "Sac around the heart (peri- = around).", "sac around the heart (pericardium)", "pf", "body", []],
["perineal", "pair-ih-NEE-al", "Pertaining to the perineum, the area between the legs.", "of the area between the legs", "rl", "body", []],
["periodontal", "pair-ee-oh-DON-tal", "Around a tooth (peri- + odont/o + -al).", "around a tooth", "pf", "body", []],
["peritoneal", "pair-ih-toh-NEE-al", "Pertaining to the peritoneum, the membrane lining the abdominal cavity.", "of the abdominal lining", "rl", "body", []],
["peroneal", "pair-oh-NEE-al", "Pertaining to the fibula side of the leg.", "of the outer lower leg (peroneal)", "rl", "body", []],
["phalanges", "fah-LAN-jeez", "Plural of phalanx, the finger and toe bones; do not confuse with flanges.", "finger and toe bones", "rl", "body", []],
["phalanx", "FAY-lanks", "A bone of a finger or toe; plural phalanges. Each hand has 14 phalanges.", "finger or toe bone", "rl", "body", []],
["pharmacist", "FAR-mah-sist", "Licensed professional who prepares and dispenses drugs.", "licensed drug dispenser", "hs", "field", []],
["pharmacology", "far-mah-KOL-oh-jee", "Study of the origin, characteristics and effects of drugs.", "study of drugs", "hs", "field", []],
["phlegm", "flem", "Thick mucus from the respiratory tract; ph sounds like f and the g is silent.", "thick mucus from the airways", "bs", "sx", []],
["phonetic spelling", "foh-NET-ik SPEL-ing", "Writing a word as it sounds, divided into syllables with the stressed syllable in capitals, such as FEM-or-al.", "sound-it-out spelling", "bs", "concept", []],
["physiatry", "fiz-ee-AT-ree", "Branch of medicine that deals with physical rehabilitation; do not confuse with psychiatry.", "physical medicine and rehabilitation", "sf", "field", []],
["physiology", "fiz-ee-OL-oh-jee", "Study of the functions of the living body and its parts (physi/o + -logy).", "study of body function (physiology)", "rt", "concept", []],
["pleuritis", "ploo-RYE-tis", "Inflammation of the pleura of the lung.", "inflammation of the lung lining (pleurisy)", "rl", "dz", []],
["pneumonia", "noo-MOH-nee-ah", "Inflammation of the lung, usually from infection; the p in pn is silent.", "lung infection (pneumonia)", "bs", "dz", []],
["pneumonoultramicroscopic silicovolcanoconiosis", "noo-moh-noh-ul-trah-mye-kroh-SKOP-ik sil-ih-koh-vol-KAY-noh-koh-nee-OH-sis", "Lung disease from inhaling very fine silica dust from a volcano; famous as the longest word.", "lung disease from fine volcanic silica dust", "rl", "dz", []],
["pneumothorax", "noo-moh-THOR-aks", "Air in the chest cavity outside the lung (pneum/o + thorac/o); a compound word.", "air in the chest cavity (pneumothorax)", "rt", "dz", []],
["poliomyelitis", "poh-lee-oh-mye-eh-LYE-tis", "Viral inflammation of the gray matter of the spinal cord (poli/o = gray + myel/o + -itis).", "viral inflammation of the spinal cord’s grey matter", "rt", "dz", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excessive urination (poly- = many, much).", "excessive urination", "pf", "sx", []],
["posterior", "pos-TEER-ee-or", "Toward the back of the body; opposite of anterior.", "toward the back (posterior)", "pf", "body", []],
["postoperative", "pohst-OP-er-ah-tiv", "After surgery (post- = after).", "after surgery", "pf", "concept", ["postop"]],
["prefix", "PREE-fiks", "A word part placed before a root to change its meaning, often showing number, location, time or status.", "word part added at the start", "bs", "concept", []],
["prenatal", "pree-NAY-tal", "Before birth (pre- + nat/o + -al).", "before birth", "pf", "concept", []],
["preoperative", "pree-OP-er-ah-tiv", "Before surgery (pre- = before).", "before surgery", "pf", "concept", ["preop"]],
["prescription", "prih-SKRIP-shun", "Written order for a drug with its dose, route, frequency, amount to dispense and refills.", "physician’s written drug order", "hs", "tx", ["Rx"]],
["primigravida", "prye-mih-GRAV-ih-dah", "Woman pregnant for the first time (primi- = first).", "woman in her first pregnancy", "pf", "concept", []],
["prognosis", "prog-NOH-sis", "Prediction of the likely outcome of a disease (pro- = before); plural prognoses.", "expected outcome (prognosis)", "rl", "concept", []],
["progress note", "PROG-res noht", "Physician's daily record of the patient's condition, results and updated plan.", "daily note on the patient’s course", "hs", "concept", []],
["prone", "prohn", "Lying face downward.", "lying face down", "pf", "body", []],
["prostatic", "pros-TAT-ik", "Pertaining to the prostate gland; compare prosthetic.", "of the prostate", "rl", "body", []],
["prosthetic", "pros-THET-ik", "Pertaining to an artificial device that replaces a body part.", "of an artificial body part", "rl", "tx", []],
["proximal", "PROK-sih-mal", "Nearer to the point of attachment or the center (think proximity).", "closer to the attachment (proximal)", "pf", "body", []],
["pruritus", "proo-RYE-tus", "Itching; often confused with pleuritis.", "itching", "rl", "sx", []],
["psychiatrist", "sye-KYE-ah-trist", "Physician who diagnoses and treats mental disorders (psych/o + -iatrist).", "doctor who treats mental illness", "bs", "field", []],
["psychiatry", "sye-KYE-ah-tree", "Branch of medicine that treats mental illness (psych/o + -iatry).", "medical care of mental illness", "sf", "field", []],
["psychology", "sye-KOL-oh-jee", "Study of the mind and behavior; the p in ps is silent.", "study of the mind and behaviour", "bs", "field", []],
["ptosis", "TOH-sis", "Drooping or sagging of an organ, such as the eyelid; the p in pt is silent.", "drooping", "bs", "sx", []],
["pulmonary", "PUL-moh-nair-ee", "Pertaining to the lungs (pulmon/o + -ary).", "of the lungs", "rt", "body", []],
["purpura", "PER-pyoo-rah", "Purple spots and patches from bleeding into the skin (purpur/o = purple).", "purple skin spots (purpura)", "rt", "sx", []],
["quadriplegia", "kwod-rih-PLEE-jee-ah", "Paralysis of all four limbs (quadri- + -plegia).", "paralysis of all four limbs", "pf", "dz", []],
["radiograph", "RAY-dee-oh-graf", "An x-ray image, also called a radiogram.", "X-ray image (radiograph)", "sf", "lab", []],
["radiography", "ray-dee-OG-rah-fee", "Process of making x-ray images (radi/o + -graphy).", "X-ray imaging (radiography)", "sf", "lab", []],
["radiologist", "ray-dee-OL-oh-jist", "Physician who interprets x-rays and other medical images.", "doctor who reads medical images", "hs", "field", []],
["renal", "REE-nal", "Pertaining to the kidney (ren/o + -al).", "of the kidney", "rt", "body", []],
["retroperitoneal", "ret-roh-pair-ih-toh-NEE-al", "Behind the peritoneum (retro- = behind).", "behind the abdominal lining", "pf", "body", []],
["rhinitis", "rye-NYE-tis", "Inflammation of the nasal lining (rhin/o + -itis).", "inflammation of the nose", "rt", "dz", []],
["rhinoplasty", "RYE-noh-plas-tee", "Surgical repair or reshaping of the nose (rhin/o + -plasty).", "surgical repair of the nose", "rt", "tx", []],
["rhinorrhea", "rye-noh-REE-ah", "Discharge from the nose, runny nose (rhin/o + -rrhea).", "runny nose", "sf", "sx", []],
["semicircular", "sem-ee-SER-kyoo-lar", "Shaped like a half circle (semi- = half).", "shaped like a half circle", "pf", "body", []],
["spirometry", "spye-ROM-eh-tree", "Measurement of breathing (spir/o + -metry).", "breathing test (spirometry)", "sf", "lab", []],
["splenectomy", "spleh-NEK-toh-mee", "Surgical removal of the spleen (splen/o + -ectomy).", "removal of the spleen", "sf", "tx", []],
["splenomegaly", "splee-noh-MEG-ah-lee", "Enlargement of the spleen (splen/o + -megaly).", "enlarged spleen", "bs", "sx", []],
["staphylococcus", "staf-ih-loh-KOK-us", "Round bacteria that grow in grape-like clusters (staphyl/o + -coccus).", "grape-like clusters of round bacteria (staphylococci)", "rt", "body", []],
["stomatitis", "stoh-mah-TYE-tis", "Inflammation of the mouth (stomat/o + -itis).", "inflammation of the mouth", "rt", "dz", []],
["streptobacillus", "strep-toh-bah-SIL-us", "Rod-shaped bacteria that grow in twisted chains.", "rod bacteria in twisted chains (streptobacilli)", "rt", "body", []],
["streptococcus", "strep-toh-KOK-us", "Round bacteria that grow in twisted chains (strept/o + -coccus).", "round bacteria in chains (streptococci)", "rt", "body", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Beneath the skin, in the fatty tissue (sub- + cutane/o + -ous).", "under the skin, in the fat", "pf", "body", ["subcut", "subq"]],
["sublingual", "sub-LING-gwal", "Under the tongue (sub- + lingu/o + -al).", "under the tongue", "hs", "tx", ["SL"]],
["suffix", "SUF-iks", "A word part attached to the end of a root, usually showing a condition, disease, procedure or part of speech.", "word part added at the end", "bs", "concept", []],
["superior", "soo-PEER-ee-or", "Above or toward the head.", "above; toward the head", "pf", "body", []],
["supine", "soo-PINE", "Lying on the back, face upward.", "lying face up", "pf", "body", []],
["suture", "SOO-chur", "To sew the edges of a wound together; also the stitch itself.", "stitch", "sf", "tx", []],
["synonym", "SIN-oh-nim", "A word with the same meaning as another, such as gastralgia and gastrodynia.", "word of the same meaning", "rl", "concept", []],
["tachycardia", "tak-ee-KAR-dee-ah", "Abnormally rapid heart rate (tachy- = fast).", "fast heartbeat", "pf", "sx", []],
["tetralogy", "teh-TRAL-oh-jee", "A combination of four elements, as in tetralogy of Fallot (tetra- = four).", "group of four defects (tetralogy)", "pf", "concept", []],
["thermometer", "ther-MOM-eh-ter", "Instrument for measuring temperature (therm/o + -meter).", "temperature-measuring instrument", "sf", "lab", []],
["thoracentesis", "thor-ah-sen-TEE-sis", "Puncture of the chest wall to remove fluid (thorac/o + -centesis).", "draining fluid from the chest", "sf", "tx", []],
["thoracic", "thoh-RAS-ik", "Pertaining to the chest (thorac/o + -ic).", "of the chest", "rt", "body", []],
["thorax", "THOR-aks", "The chest; plural thoraces (ax becomes aces).", "the chest", "rl", "body", []],
["thrombosis", "throm-BOH-sis", "Condition of a blood clot inside a vessel (thromb/o + -osis).", "clot in a blood vessel (thrombosis)", "sf", "dz", []],
["tonsillectomy", "ton-sih-LEK-toh-mee", "Surgical removal of the tonsils (tonsill/o + -ectomy); note the double l.", "removal of the tonsils", "rt", "tx", []],
["tonsillitis", "ton-sih-LYE-tis", "Inflammation of the tonsils (tonsill/o + -itis).", "tonsil inflammation", "sf", "dz", []],
["tracheostomy", "tray-kee-OS-toh-mee", "Surgical creation of an opening into the trachea (trache/o + -stomy).", "opening into the windpipe", "sf", "tx", []],
["tracheotomy", "tray-kee-OT-oh-mee", "Incision into the trachea (trache/o + -tomy).", "incision into the windpipe", "sf", "tx", []],
["transdermal", "tranz-DER-mal", "Through the skin, as a drug patch (trans- = through).", "through the skin", "pf", "tx", []],
["Trendelenburg position", "tren-DEL-en-berg poh-ZISH-un", "Lying supine with the head lower than the legs on an inclined bed.", "head-down tilted position", "pf", "tx", []],
["triceps", "TRY-seps", "Muscle of the upper arm with three heads.", "three-headed arm muscle (triceps)", "pf", "body", []],
["tricuspid", "try-KUS-pid", "Having three cusps, like the valve between the right atrium and right ventricle.", "having three cusps", "pf", "body", []],
["ultrasonography", "ul-trah-soh-NOG-rah-fee", "Imaging with high-frequency sound waves, such as fetal ultrasound.", "ultrasound scan", "hs", "lab", ["US"]],
["unilateral", "yoo-nih-LAT-er-al", "Affecting only one side (uni- + later/o + -al).", "on one side", "pf", "concept", []],
["urologist", "yoo-ROL-oh-jist", "Physician who treats the urinary tract and the male reproductive system.", "urinary tract specialist", "hs", "field", []],
["vascular", "VAS-kyoo-lar", "Pertaining to blood vessels (vascul/o + -ar).", "of the blood vessels", "rt", "body", []],
["venule", "VEN-yool", "A small vein (-ule = small).", "small vein", "sf", "body", []],
["vertebra", "VER-teh-brah", "One bone of the spinal column; plural vertebrae (a becomes ae).", "spinal bone", "rl", "body", []],
["vertebrae", "VER-teh-bray", "Plural of vertebra; the spinal column has 26 vertebrae in the adult.", "spinal bones", "rl", "body", []],
["vital signs", "VYE-tal sines", "Temperature, pulse, respiration and blood pressure.", "temperature, pulse, breathing and blood pressure", "hs", "lab", ["VS", "TPR", "BP"]],
["word building", "werd BIL-ding", "Putting prefixes, roots, combining vowels and suffixes together to form a medical term.", "forming terms from parts", "bs", "concept", []],
["word root", "werd root", "The foundation of a medical term that carries its basic meaning, usually a body part, such as gastr in gastritis.", "core part of a word", "bs", "concept", []],
["xanthoma", "zan-THOH-mah", "Yellow fatty nodule in the skin (xanth/o + -oma).", "yellow skin bump (xanthoma)", "rt", "dz", []],
["xeroderma", "zee-roh-DER-mah", "Dry skin (xer/o + -derma); x at the start sounds like z.", "dry skin", "bs", "dz", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* لِکسا — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و ده فصل PDF پیوست (Cohen، Fremgen، Gylys، Dummies، Stanfield و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: bs الفبای زبان پزشکی (پایه) • rt ریشه‌ها: نقشه بدن • sf پسوندها • pf پیشوندها •
 * rl قواعد و تله‌ها • hs در بیمارستان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندهای عدد
    ['uni-, mono-', ['uni', 'mono'], 'one', "one", 'pf'],
    ['bi-, di-', ['bi', 'di'], 'two, twice', "two", 'pf'],
    ['tri-', ['tri'], 'three', "three", 'pf'],
    ['quadri-, tetra-', ['quadri', 'tetra'], 'four', "four", 'pf'],
    ['hemi-, semi-', ['hemi', 'semi'], 'half', "half", 'pf'],
    ['multi-, poly-', ['multi', 'poly'], 'many, much', "many, much", 'pf'],
    ['primi-', ['primi'], 'first', "first", 'pf'],
    ['nulli-', ['nulli'], 'none', "none", 'pf'],
    ['ambi-', ['ambi'], 'both', "both", 'pf'],
    ['pan-', ['pan'], 'all', "all", 'pf'],
    // پیشوندهای جا و جهت
    ['ab-', ['ab'], 'away from', "away from", 'pf'],
    ['ad-', ['ad'], 'toward', "toward", 'pf'],
    ['ante-, pre-', ['ante', 'pre'], 'before, in front of', "before, in front", 'pf'],
    ['post-', ['post'], 'after, behind', "after, behind", 'pf'],
    ['epi-', ['epi'], 'upon, over, above', "upon, above", '*'],
    ['hypo-, sub-, infra-', ['hypo', 'sub', 'infra'], 'below, under, deficient', "below, less than normal", '*'],
    ['hyper-, supra-', ['hyper', 'supra'], 'above, excessive', "above, more than normal", '*'],
    ['intra-, endo-', ['intra', 'endo', 'end'], 'within, inside', "within", '*'],
    ['extra-, exo-, ecto-', ['extra', 'exo', 'ecto'], 'outside', "outside", 'pf'],
    ['inter-', ['inter'], 'between', "between", 'pf'],
    ['peri-, circum-', ['peri', 'circum'], 'around', "around", 'pf'],
    ['para-', ['para'], 'beside, near, abnormal', "beside; abnormal", 'pf'],
    ['retro-', ['retro'], 'behind, backward', "behind, backward", 'pf'],
    ['trans-, dia-', ['trans', 'dia'], 'through, across', "through", '*'],
    ['meta-', ['meta'], 'beyond, change', "beyond; change", 'pf'],
    // پیشوندهای نفی و کیفیت
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['anti-, contra-', ['anti', 'contra'], 'against', "against", 'pf'],
    ['de-, dis-', ['dis', 'de'], 'down, apart, remove', "remove, apart", 'pf'],
    ['dys-', ['dys'], 'bad, painful, difficult', "bad, difficult, painful", '*'],
    ['eu-', ['eu'], 'good, normal', "good, normal", 'pf'],
    ['mal-', ['mal'], 'bad', "bad", 'pf'],
    ['brady-', ['brady'], 'slow', "slow", 'pf'],
    ['tachy-', ['tachy'], 'fast', "fast", 'pf'],
    ['neo-', ['neo'], 'new', "new", 'pf'],
    ['macro-', ['macro'], 'large', "large", 'pf'],
    ['micro-', ['micro'], 'small', "small", 'pf'],
    ['homo-, iso-', ['homo', 'iso'], 'same, equal', "same", 'rl'],
    ['hetero-', ['hetero'], 'different', "different", 'rl'],
    ['pro-', ['pro'], 'before, forward', "before", 'rl'],
    ['syn-, sym-', ['syn', 'sym'], 'together, with', "together", 'rl'],
    // ریشه‌های بدن
    ['cardi/o', ['cardi', 'card'], 'heart', "heart", '*'],
    ['gastr/o', ['gastr'], 'stomach', "stomach", '*'],
    ['enter/o', ['enter'], 'small intestine', "small intestine", 'rt'],
    ['col/o, colon/o', ['colon', 'col'], 'colon, large intestine', "large intestine", 'rt'],
    ['duoden/o', ['duoden'], 'duodenum', "duodenum", 'bs'],
    ['esophag/o', ['esophag'], 'esophagus', "oesophagus", 'bs'],
    ['hepat/o', ['hepat'], 'liver', "liver", 'rt'],
    ['splen/o', ['splen'], 'spleen', "spleen", 'bs'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', "the appendix", 'rt'],
    ['lapar/o', ['lapar'], 'abdominal wall', "abdominal wall", 'sf'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', "kidney", 'rt'],
    ['cyst/o', ['cyst'], 'urinary bladder; sac', "bladder; sac", 'rt'],
    ['ur/o', ['ur'], 'urine, urinary tract', "urine", 'rt'],
    ['oste/o', ['oste'], 'bone', "bone", '*'],
    ['arthr/o', ['arthr'], 'joint', "joint", '*'],
    ['my/o, muscul/o', ['muscul', 'my'], 'muscle', "muscle", 'rt'],
    ['dermat/o, derm/o, cutane/o', ['dermat', 'derm', 'cutane'], 'skin', "skin", '*'],
    ['neur/o', ['neur'], 'nerve', "nerve", '*'],
    ['encephal/o', ['encephal'], 'brain', "brain", 'rt'],
    ['cephal/o', ['cephal'], 'head', "head", 'rt'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', "spinal cord; bone marrow", 'rt'],
    ['psych/o', ['psych'], 'mind', "mind", 'bs'],
    ['rhin/o', ['rhin'], 'nose', "nose", 'rt'],
    ['ot/o', ['ot'], 'ear', "ear", 'rt'],
    ['laryng/o', ['laryng'], 'larynx, voice box', "voice box", 'rl'],
    ['ophthalm/o', ['ophthalm'], 'eye', "eye", 'rt'],
    ['stomat/o', ['stomat'], 'mouth', "mouth", 'rt'],
    ['gingiv/o', ['gingiv'], 'gums', "gums", 'bs'],
    ['odont/o', ['odont'], 'tooth', "tooth", 'pf'],
    ['tonsill/o', ['tonsill'], 'tonsils', "tonsil", 'rt'],
    ['lingu/o', ['lingu'], 'tongue', "tongue", 'hs'],
    ['pneum/o, pulmon/o', ['pneumon', 'pneum', 'pulmon'], 'lung, air', "lung, air", 'rt'],
    ['thorac/o', ['thorac'], 'chest', "the chest", 'rt'],
    ['trache/o', ['trache'], 'trachea, windpipe', "windpipe", 'sf'],
    ['spir/o', ['spir'], 'breathing', "breathing", 'sf'],
    ['cost/o', ['cost'], 'rib', "rib", 'pf'],
    ['angi/o, vas/o, vascul/o', ['angi', 'vascul', 'vas'], 'vessel', "vessel", 'rt'],
    ['arteri/o', ['arteri'], 'artery', "artery", 'sf'],
    ['ven/o', ['ven'], 'vein', "vein", 'pf'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", '*'],
    ['thromb/o', ['thromb'], 'clot', "clot", 'sf'],
    ['mamm/o', ['mamm'], 'breast', "breast", 'sf'],
    ['later/o', ['later'], 'side', "side", 'pf'],
    ['cellul/o, cyt/o', ['cellul', 'cyt'], 'cell', "cell", '*'],
    ['hist/o', ['hist'], 'tissue', "tissue", 'rt'],
    ['lip/o', ['lip'], 'fat', "fat", 'rt'],
    ['carcin/o, onc/o', ['carcin', 'onc'], 'cancer, tumor', "cancer, tumour", 'rt'],
    ['path/o', ['path'], 'disease', "disease", '*'],
    ['bi/o', ['bio', 'bi'], 'life', "life", 'sf'],
    ['ped/o', ['ped'], 'child', "child", 'sf'],
    ['ger/o', ['ger'], 'old age', "old age", 'sf'],
    ['nat/o', ['nat'], 'birth', "birth", 'pf'],
    ['physi/o', ['physi'], 'nature, function', "nature, function", 'rt'],
    ['orth/o', ['orth'], 'straight, upright', "straight, upright", 'hs'],
    ['radi/o', ['radi'], 'x-ray, radiation', "radiation", 'sf'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'sf'],
    ['therm/o', ['therm'], 'heat', "heat", 'bs'],
    ['hydr/o', ['hydr'], 'water', "water", 'hs'],
    ['glyc/o', ['glyc'], 'sugar', "sugar", 'pf'],
    ['ox/o', ['ox'], 'oxygen', "oxygen", 'pf'],
    ['xer/o', ['xer'], 'dry', "dry", 'bs'],
    ['kyph/o', ['kyph'], 'hump', "hump", 'bs'],
    ['lith/o', ['lith'], 'stone', "stone", 'sf'],
    ['por/o', ['por'], 'pore, passage', "pore", 'rt'],
    ['esthesi/o', ['esthesi'], 'sensation', "sensation", 'sf'],
    // رنگ‌ها و باکتری‌ها
    ['erythr/o, rubi/o', ['erythr', 'rub'], 'red', "red", 'rt'],
    ['leuk/o, alb-', ['leuk', 'alb'], 'white', "white", 'rt'],
    ['cyan/o', ['cyan'], 'blue', "blue", 'rt'],
    ['melan/o', ['melan'], 'black', "black", 'rt'],
    ['xanth/o, cirrh/o', ['xanth', 'cirrh'], 'yellow', "yellow", 'rt'],
    ['chlor/o', ['chlor'], 'green', "green", 'rt'],
    ['poli/o', ['poli'], 'gray', "grey", 'rt'],
    ['purpur/o', ['purpur'], 'purple', "purple", 'rt'],
    ['chrom/o', ['chrom'], 'color', "colour", 'rt'],
    ['bacteri/o', ['bacteri'], 'bacteria', "bacteria", 'rt'],
    ['staphyl/o', ['staphyl'], 'clusters, like grapes', "in clusters", 'rt'],
    ['strept/o', ['strept'], 'twisted chains', "in chains", 'rt'],
    ['dipl/o', ['dipl'], 'pairs, double', "pairs", 'rt'],
    ['-coccus', ['coccus'], 'round bacterium', "round bacterium", 'rt'],
    ['-bacillus', ['bacillus'], 'rod-shaped bacterium', "rod-shaped bacterium", 'rt'],
    ['intestin/o', ['intestin'], 'intestine', "intestine", 'rt'],
    ['skelet/o', ['skelet'], 'skeleton', "skeleton", 'rt'],
    ['peritone/o', ['peritone'], 'peritoneum', "peritoneum", 'rl'],
    ['perine/o', ['perine'], 'perineum', "perineum (area between the legs)", 'rl'],
    ['prostat/o', ['prostat'], 'prostate gland', "prostate", 'rl'],
    ['pleur/o', ['pleur'], 'pleura', "pleura", 'rl'],
    ['son/o', ['son'], 'sound', "sound", 'hs'],
    ['ultra-', ['ultra'], 'beyond, excess', "beyond", 'hs'],
    ['uter/o', ['uter'], 'uterus', "uterus", 'pf'],
    ['audi/o', ['audi'], 'hearing', "hearing", 'hs'],
    ['gynec/o', ['gynec'], 'woman, female', "woman", 'hs'],
    ['pharmac/o', ['pharmac'], 'drug', "drug", 'hs'],
    ['pelv/i', ['pelv'], 'pelvis', "pelvis", 'sf'],
    ['iatr/o', ['iatr'], 'treatment, physician', "treatment, physician", 'sf'],
    ['-cyte', ['cyte'], 'cell', "cell", 'rt'],
    ['-crine', ['crine'], 'to secrete', "secrete", 'pf'],
    ['-stasis', ['stasis'], 'standing, stopping', "stopping", 'pf'],
    // پسوندهای بیماری و نشانه
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis', ['osis'], 'abnormal condition', "abnormal condition", '*'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', "pain", '*'],
    ['-megaly', ['megaly'], 'enlargement', "enlargement", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", 'sf'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'sf'],
    ['-rrhage, -rrhagia', ['rrhage', 'rrhagia'], 'bursting forth (of blood)', "heavy bleeding", 'sf'],
    ['-rrhea', ['rrhea'], 'flow, discharge', "flow, discharge", 'sf'],
    ['-penia', ['penia'], 'deficiency, too few', "deficiency", 'sf'],
    ['-plegia', ['plegia'], 'paralysis', "paralysis", 'sf'],
    ['-malacia', ['malacia'], 'softening', "softening", 'sf'],
    ['-sclerosis', ['sclerosis'], 'hardening', "hardening", 'sf'],
    ['-stenosis', ['stenosis'], 'narrowing', "narrowing", 'sf'],
    ['-ptosis', ['ptosis'], 'drooping', "drooping", 'bs'],
    ['-genic, -gen', ['genic', 'gen'], 'producing', "producing", 'sf'],
    ['-trophy', ['trophy'], 'development, nourishment', "growth, nourishment", 'pf'],
    ['-phagia', ['phagia'], 'eating, swallowing', "eating, swallowing", 'pf'],
    ['-phasia', ['phasia'], 'speech', "speech", 'rl'],
    ['-pnea', ['pnea'], 'breathing', "breathing", 'pf'],
    ['-phoria', ['phoria'], 'feeling, carrying', "feeling, bearing", 'pf'],
    ['-derma', ['derma'], 'skin', "skin", 'bs'],
    ['-gnosis', ['gnosis'], 'knowledge', "knowledge", 'rl'],
    // پسوندهای جراحی و تشخیص
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-stomy', ['stomy'], 'new opening', "new opening", '*'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", '*'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'sf'],
    ['-pexy', ['pexy'], 'surgical fixation', "surgical fixation", 'sf'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', "drawing fluid with a needle", 'sf'],
    ['-tripsy', ['tripsy'], 'crushing', "crushing", 'sf'],
    ['-lysis', ['lysis'], 'breakdown, destruction', "breakdown", 'sf'],
    ['-scope', ['scope'], 'instrument for viewing', "viewing instrument", '*'],
    ['-scopy', ['scopy'], 'visual examination', "viewing with an instrument", '*'],
    ['-gram', ['gram'], 'record, image', "record, image", 'sf'],
    ['-graph', ['graph'], 'instrument for recording', "recording instrument", 'sf'],
    ['-graphy', ['graphy'], 'process of recording', "recording process", 'sf'],
    ['-meter', ['meter'], 'instrument for measuring', "measuring instrument", 'sf'],
    ['-metry', ['metry'], 'process of measuring', "measuring", 'sf'],
    ['-opsy', ['opsy'], 'view of', "viewing", 'sf'],
    // پسوندهای رشته و دستوری
    ['-logy', ['logy'], 'study of', "study of", '*'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist", '*'],
    ['-iatrics, -iatry', ['iatrics', 'iatry'], 'medical treatment', "medical treatment", 'sf'],
    ['-iatrist, -ician, -ist', ['iatrist', 'ician', 'ist'], 'specialist', "specialist", 'sf'],
    ['-ole, -ule', ['ole', 'ule'], 'small', "small", 'sf'],
    ['-ism', ['ism'], 'condition, state', "condition", 'sf'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', "condition", '*'],
    ['-al, -ic, -ar, -ary, -eal, -ous, -ac, -tic', ['ary', 'eal', 'ous', 'tic', 'al', 'ic', 'ar', 'ac'], 'pertaining to', "pertaining to", '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['a', 'before (ante)', "before", 'hs'],
    ['ac', 'before meals', "before meals", 'hs'],
    ['AD', 'Alzheimer disease', "Alzheimer disease", 'rl'],
    ['ad lib', 'as desired', "as desired", 'hs'],
    ['AIDS', 'acquired immunodeficiency syndrome', "AIDS", 'rl'],
    ['AMA', 'against medical advice; American Medical Association', "against medical advice; American Medical Association", 'rl'],
    ['bid', 'twice a day', "twice a day", 'hs'],
    ['BM', 'bowel movement', "bowel movement", 'rl'],
    ['BP', 'blood pressure', "blood pressure", 'hs'],
    ['BRP', 'bathroom privileges', "allowed to use the bathroom", 'hs'],
    ['Bx', 'biopsy', "tissue sample", 'sf'],
    ['c', 'with (cum)', "with", 'hs'],
    ['c/o', 'complaining of', "complaining of", 'hs'],
    ['Ca', 'cancer; carcinoma (also calcium)', "cancer (also calcium)", 'bs'],
    ['CBC', 'complete blood count', "complete blood count", 'hs'],
    ['CC', 'chief complaint', "main complaint", 'hs'],
    ['cm', 'centimeter', "centimetre", 'rl'],
    ['COPD', 'chronic obstructive pulmonary disease', "chronic obstructive lung disease", 'rl'],
    ['CT', 'computed tomography', "CT scan", 'hs'],
    ['CVA', 'cerebrovascular accident (stroke)', "stroke", 'rl'],
    ['CXR', 'chest x-ray', "chest X-ray", 'hs'],
    ['D/C', 'discharge; discontinue', "discharge; discontinue", 'hs'],
    ['DC', 'doctor of chiropractic', "spine-manipulation practitioner (chiropractor)", 'hs'],
    ['DOB', 'date of birth', "date of birth", 'hs'],
    ['Dx', 'diagnosis', "diagnosis", 'rl'],
    ['ECG, EKG', 'electrocardiogram', "heart tracing (ECG)", 'sf'],
    ['ED, ER', 'emergency department; emergency room', "emergency department", 'hs'],
    ['EGD', 'esophagogastroduodenoscopy', "scope exam of the oesophagus, stomach and duodenum", 'bs'],
    ['EHR, EMR', 'electronic health (medical) record', "electronic health record", 'hs'],
    ['ENT', 'ear, nose and throat', "ear, nose and throat", 'hs'],
    ['ETOH', 'ethyl alcohol', "alcohol", 'hs'],
    ['Fx', 'fracture', "fracture", 'hs'],
    ['GERD', 'gastroesophageal reflux disease', "acid reflux into the oesophagus", 'hs'],
    ['GI', 'gastrointestinal', "of the stomach and intestines", 'rt'],
    ['gtt', 'drops', "drops", 'hs'],
    ['GU', 'genitourinary', "genital and urinary", 'rt'],
    ['H&P', 'history and physical', "history and physical", 'hs'],
    ['HEENT', 'head, eyes, ears, nose, throat', "head, eyes, ears, nose and throat", 'hs'],
    ['HIPAA', 'Health Insurance Portability and Accountability Act', "US health-privacy law", 'hs'],
    ['h/o', 'history of', "history of", 'hs'],
    ['hs', 'at bedtime (hour of sleep)', "at bedtime", 'hs'],
    ['HTN', 'hypertension', "high blood pressure", 'pf'],
    ['Hx', 'history', "history", 'hs'],
    ['I&O', 'intake and output', "intake and output", 'hs'],
    ['ICD', 'International Classification of Diseases', "International Classification of Diseases", 'hs'],
    ['ICU', 'intensive care unit', "intensive care unit", 'hs'],
    ['ID', 'intradermal', "within the skin", 'pf'],
    ['IM', 'intramuscular', "intramuscularly", 'pf'],
    ['IV', 'intravenous', "intravenously", 'pf'],
    ['LUL', 'left upper lobe', "left upper lobe", 'hs'],
    ['mg', 'milligram', "milligrams", 'hs'],
    ['mL', 'milliliter', "millilitres", 'hs'],
    ['MR', 'medical records', "medical records", 'hs'],
    ['MRI', 'magnetic resonance imaging', "MRI scan", 'hs'],
    ['MS', 'multiple sclerosis; mitral stenosis', "multiple sclerosis; mitral stenosis", 'sf'],
    ['NKDA', 'no known drug allergies', "no known drug allergies", 'hs'],
    ['NPO', 'nothing by mouth (nil per os)', "nothing by mouth", 'hs'],
    ['NSAID', 'nonsteroidal anti-inflammatory drug', "non-steroidal anti-inflammatory drug", 'hs'],
    ['OA', 'osteoarthritis', "wear-and-tear arthritis", 'bs'],
    ['OD', 'right eye (oculus dexter)', "right eye", 'hs'],
    ['OOB', 'out of bed', "out of bed", 'hs'],
    ['OR', 'operating room', "operating room", 'hs'],
    ['OS', 'left eye (oculus sinister)', "left eye", 'hs'],
    ['OTC', 'over-the-counter', "sold without a prescription", 'hs'],
    ['pc', 'after meals', "after meals", 'hs'],
    ['PD', 'Parkinson disease', "Parkinson disease", 'rl'],
    ['PE', 'physical examination', "physical examination", 'hs'],
    ['po', 'by mouth (per os)', "by mouth", 'hs'],
    ['postop', 'postoperative', "after surgery", 'pf'],
    ['preop', 'preoperative', "before surgery", 'pf'],
    ['prn', 'as needed', "as needed", 'hs'],
    ['q', 'every', "every", 'hs'],
    ['qh', 'every hour', "every hour", 'hs'],
    ['qid', 'four times a day', "four times a day", 'hs'],
    ['R/O', 'rule out', "rule out", 'hs'],
    ['RBC', 'red blood cell', "red blood cell", 'rt'],
    ['ROS', 'review of systems', "review of systems", 'hs'],
    ['Rx', 'prescription; take (recipe)', "prescription; take", 'hs'],
    ['s', 'without (sine)', "without", 'hs'],
    ['Sig', 'write on label; instructions (signa)', "directions for use", 'hs'],
    ['SL', 'sublingual', "under the tongue", 'hs'],
    ['SOB', 'shortness of breath', "shortness of breath", 'pf'],
    ['stat', 'immediately (statim)', "immediately", 'hs'],
    ['subcut, subq', 'subcutaneous', "subcutaneously", 'pf'],
    ['tab', 'tablet', "tablet", 'hs'],
    ['tid', 'three times a day', "three times a day", 'hs'],
    ['TPR', 'temperature, pulse, respiration', "temperature, pulse, respiration", 'hs'],
    ['Tx', 'treatment', "treatment", 'hs'],
    ['US', 'ultrasound, ultrasonography', "ultrasound scan", 'hs'],
    ['VS', 'vital signs', "vital signs", 'hs'],
    ['WBC', 'white blood cell', "white blood cell", 'rt'],
    ['WNL', 'within normal limits', "within normal limits", 'hs'],
    ['w/o', 'without', "without", 'hs'],
    ['y/o', 'years old', "years old", 'hs']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'concept', icon: '🧩', name: "Word-building concepts and rules" },
    { id: 'body', icon: '🫀', name: "Organs and structures" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩺', name: "Diseases" },
    { id: 'sx', icon: '🔍', name: "Signs and findings" },
    { id: 'lab', icon: '🧪', name: "Tests and imaging" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
  ];
  const main = { concept: "Word-building concepts and rules" };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['bs', 'rt', 'sf', 'pf', 'rl', 'hs'], base: 'bs' };
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
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Pharmacology_and_Treatment: "Treatment, drugs and surgery"
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
      const pool = buildable(w), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `Build the term that means “<b>${short(x.t.fa)}</b>”`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 4 ? own : ABBR, a = rnd(pool);
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
      if (a.full && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && new Set(a.parts.map(p => p.r.id)).size === a.parts.length && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* لِکسا — شکل‌های آموزشی مقدمه ترمینولوژی پزشکی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. رنگ قطعه‌های واژه در همه اپ ثابت است: پیشوند زرد، ریشه آبی، واکه رابط نارنجی، پسوند بنفش.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    pre: '#f7d774', preLine: '#c9a12c', preDark: '#8a6a00', root: '#7fb2e5', rootLine: '#3b78b8', rootDark: '#1f5590',
    cv: '#f5b880', cvLine: '#d0803c', cvDark: '#9a5418', suf: '#c39be0', sufLine: '#8a5cb3', sufDark: '#5e3586',
    skin: '#f6d2b8', skinLine: '#d9a988', bone: '#f3e4c4', boneLine: '#c4a46c', muscle: '#d9665a', fat: '#f6dc8f', fatLine: '#c9a64a',
    art: '#d9443a', artLine: '#9c2a23', vein: '#3b6fd4', veinLine: '#24479a', paper: '#fffaf0', paperLine: '#d9c9a4',
    green: '#3f8a05', red: '#d9443a', blue: '#3b6fd4', teal: '#17a398', indigo: '#4b4fc4', spark: '#ffc800'
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
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${(p.anchor || 'middle')}" direction="ltr" font-family="${FONT_EN}">${LRI(s)}</text>`; };
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
    return `<g fill="${p.fill || C.skin}" stroke="${p.line || C.skinLine}" stroke-width="1.3"${p.op ? ` opacity="${p.op}"` : ''}>${head}${body}</g>`;
  }


  /* ---------- قطعه پازل واژه ----------
   * kind: pre | root | cv | suf ؛ زبانه راست و فرورفتگی چپ تا قطعه‌ها در هم جا بیفتند */
  const PK = { pre: [C.pre, C.preLine, C.preDark], root: [C.root, C.rootLine, C.rootDark], cv: [C.cv, C.cvLine, C.cvDark], suf: [C.suf, C.sufLine, C.sufDark] };
  function piece(x, y, w, h, kind, en, o) {
    const p = o || {}, k = PK[kind], r = (h * 0.21).toFixed(1);
    const R = p.noTab ? `V${y + h}` : `V${(y + h * 0.3).toFixed(1)} A${r} ${r} 0 1 1 ${x + w} ${(y + h * 0.7).toFixed(1)} V${y + h}`;
    const Lft = p.noNotch ? `V${y}` : `V${(y + h * 0.7).toFixed(1)} A${r} ${r} 0 1 0 ${x} ${(y + h * 0.3).toFixed(1)} V${y}`;
    return `<path d="M${x} ${y} H${x + w} ${R} H${x} ${Lft} Z" fill="${p.fill || k[0]}" stroke="${k[1]}" stroke-width="1.6" stroke-linejoin="round"/>` +
      `<path d="M${x + 5} ${y + 5} H${x + w - 6}" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>` +
      (en ? t(x + w / 2, y + h / 2 + (p.size || 13) * 0.36, en, { size: p.size || 13, w: 900, fill: k[2] }) : '');
  }
  /** ردیفی از قطعه‌ها: [[kind, text, width], …] از چپ به راست؛ برمی‌گرداند {svg, xs} */
  function word(x, y, h, parts, o) {
    let cx = x, out = '';
    const xs = [];
    parts.forEach((q, i) => { out += piece(cx, y, q[2], h, q[0], q[1], Object.assign({ noNotch: i === 0, noTab: i === parts.length - 1 }, o)); xs.push(cx + q[2] / 2); cx += q[2] - 1; });
    return { svg: out, xs, end: cx };
  }
  /** جدول ساده دوستونه/چندستونه: rows = [[…], …]؛ اولین ردیف سرستون */
  function table(x, y, ws, rh, rows, o) {
    const p = o || {}; let out = '', yy = y;
    rows.forEach((r, i) => {
      const W = ws.reduce((a, b) => a + b, 0);
      out += `<rect x="${x}" y="${yy}" width="${W}" height="${rh}" fill="${i === 0 ? (p.head || '#eef0fb') : i % 2 ? '#fff' : '#f8f9fc'}" stroke="#e1e4ef"/>`;
      let xx = x;
      r.forEach((c, j) => {
        const fa = /[؀-ۿ]/.test(c);
        out += fa ? f(xx + ws[j] / 2, yy + rh / 2 + 3.6, c, { size: p.size || 9.5, fill: i === 0 ? INK : (p.faFill || INK), w: i === 0 ? 800 : 600 })
          : t(xx + ws[j] / 2, yy + rh / 2 + 3.8, c, { size: p.size || 10, w: i === 0 ? 900 : 800, fill: (p.colFill && p.colFill[j]) || INK, sym: p.sym && p.sym[j] });
        xx += ws[j];
      });
      yy += rh;
    });
    return out;
  }
  /** آدمک ساده برای وضعیت‌های بدن */
  const stick = (d, c) => `<path d="${d}" stroke="${c || '#4b4fc4'}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  /** لوله با حاشیه: دو خط روی هم */
  const tube = (d, fill, line, w) => `<path d="${d}" stroke="${line}" stroke-width="${w + 2.4}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${fill}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const A = {};

  /* ================= bs: الفبای زبان پزشکی ================= */
  A['word-parts'] = () => {
    const sh = nid();
    const w = word(14, 62, 46, [['root', 'gastr', 76], ['cv', 'o', 40], ['root', 'enter', 80], ['cv', 'o', 40], ['suf', '-logy', 98]], { size: 14 });
    const X = w.xs;
    return svg(360, 236, `${title("One word, five pieces: gastroenterology")}
      <g filter="url(#${sh})">${w.svg}</g>
      ${lab(X[0], 132, 'root', "root: stomach", { size: 9.5, fill: C.rootDark })}${lab(X[1], 132, 'vowel', "vowel", { size: 9.5, fill: C.cvDark })}
      ${lab(X[2], 132, 'root', "root: intestine", { size: 9.5, fill: C.rootDark })}${lab(X[3], 132, 'vowel', "vowel", { size: 9.5, fill: C.cvDark })}
      ${lab(X[4], 132, 'suffix', "suffix: study of", { size: 9.5, fill: C.sufDark })}
      <rect x="30" y="166" width="300" height="50" rx="12" fill="#eef0fb"/>
      ${f(180, 186, "Meaning: study of the stomach and intestines (gastroenterology)", { size: 10.5, fill: INK, w: 800 })}
      ${f(180, 205, "A word with two roots is a “compound word”", { size: 9.2 })}`, "Word pieces", shadow(sh));
  };

  A['four-parts'] = () => {
    const sh = nid();
    const row = (y, kind, en, n, fa, job) => `<g filter="url(#${sh})">${piece(222, y, 116, 40, kind, en, { size: 12.5, noNotch: kind === 'pre', noTab: kind === 'suf' })}</g>${f(206, y + 17, n, { size: 10.5, fill: INK, w: 900, anchor: 'end' })}${f(206, y + 33, fa, { size: 8.8, anchor: 'end' })}`;
    return svg(360, 262, `${title("The four parts of every medical word")}
      ${row(40, 'pre', 'epi-', "prefix", "start of the word; number, position, time or state", '')}
      ${row(94, 'root', 'gastr', "root", "core meaning; usually a body part", '')}
      ${row(148, 'cv', 'o', "combining vowel", "usually o; it makes the word easier to say", '')}
      ${row(202, 'suf', '-ic', "suffix", "end of the word; disease, procedure or part of speech", '')}
      ${f(98, 252, "root + vowel = combining form, such as gastr/o", { size: 9, fill: INK, w: 700 })}`, "The four word parts", shadow(sh));
  };

  A['cv-rule'] = () => {
    const sh = nid(), m = nid();
    const line = (y, parts, res, ok, note) => {
      const w = word(14, y, 32, parts, { size: 11 });
      return `<g filter="url(#${sh})">${w.svg}</g>${arrow(m, w.end + 8, y + 16, w.end + 30, y + 16, LINE, 2)}${t(w.end + 36, y + 21, res, { size: res.length > 12 ? 10.5 : 12, w: 900, anchor: 'start', fill: ok ? C.green : C.red })}${f(180, y + 48, note, { size: 9, fill: INK, w: 700 })}`;
    };
    return svg(360, 276, `${title("The combining-vowel rule: o")}
      ${line(36, [['root', 'gastr', 60], ['cv', 'o', 30], ['suf', '-scopy', 74]], 'gastroscopy', true, "The suffix starts with a consonant (s), so the o stays")}
      ${line(112, [['root', 'gastr', 60], ['suf', '-itis', 66]], 'gastritis', true, "The suffix starts with a vowel (i), so the o is dropped: not gastroitis")}
      ${line(188, [['root', 'oste', 54], ['cv', 'o', 30], ['root', 'arthr', 60], ['suf', '-itis', 60]], 'osteoarthritis', true, "Between two roots the o always stays: osteoarthritis")}`, "The combining-vowel rule", shadow(sh) + marker(m));
  };

  A['translate-steps'] = () => {
    const sh = nid(), m = nid();
    const w = word(30, 58, 44, [['pre', 'peri-', 84], ['root', 'card', 82], ['suf', '-itis', 90]], { size: 14 });
    const X = w.xs;
    const badge = (x, n, c) => `<circle cx="${x}" cy="44" r="11" fill="${c}"/>${t(x, 48.5, n, { size: 12, w: 900, fill: '#fff' })}`;
    return svg(360, 252, `${title("Translating a word in three steps: pericarditis")}
      <g filter="url(#${sh})">${w.svg}</g>${badge(X[2], '1', C.sufDark)}${badge(X[0], '2', C.preDark)}${badge(X[1], '3', C.rootDark)}
      ${lab(X[0], 124, 'around', "around", { size: 10, fill: C.preDark })}${lab(X[1], 124, 'heart', "heart", { size: 10, fill: C.rootDark })}${lab(X[2], 124, 'inflammation', "inflammation", { size: 10, fill: C.sufDark })}
      ${curve(m, `M${X[2]} 156 C${X[2] - 40} 176 ${X[0] + 30} 176 ${X[0]} 158`, '#8a5cb3', 1.6, true)}
      <rect x="26" y="186" width="308" height="52" rx="12" fill="#eef0fb"/>
      ${f(180, 206, "1 suffix → 2 prefix → 3 root", { size: 10.5, fill: INK, w: 900 })}
      ${f(180, 226, "Meaning: inflammation of the (sac) around the heart", { size: 10, fill: INK, w: 700 })}`, "Three translation steps", shadow(sh) + marker(m, '#8a5cb3'));
  };

  A['greek-latin'] = () => {
    const rows = [['Greek', 'Latin', "Meaning"], ['nephr/o', 'ren/o', "kidney"], ['pneum/o', 'pulmon/o', "lung"], ['dermat/o', 'cutane/o', "skin"], ['stomat/o', 'or/o', "mouth"], ['ophthalm/o', 'ocul/o', "eye"], ['hem/o', 'sanguin/o', "blood"]];
    return svg(360, 262, `${title("One organ, two roots: Greek and Latin")}
      ${table(36, 32, [104, 104, 80], 24, rows, { colFill: ['#1f5590', '#9a5418', INK] })}
      ${f(180, 218, "Greek roots appear mostly in diseases and procedures: nephritis, nephrectomy", { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 236, "Latin roots appear mostly in adjectives: renal, pulmonary, cutaneous", { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 254, "The word carcinoma comes from the Greek karkinos, meaning “crab”", { size: 8.6 })}`, "Greek and Latin");
  };

  A['silent-letters'] = () => {
    const sh = nid();
    const box = (x, y, k, ex, say, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="80" height="72" rx="12" fill="#f3f4fd"/></g>${t(x + 40, y + 21, k, { size: 15, w: 900, fill: C.indigo })}${t(x + 40, y + 39, ex, { size: 9.5, w: 800 })}${t(x + 40, y + 52, say, { size: 8.5, w: 700, fill: C.red })}${f(x + 40, y + 65, fa, { size: 8.2 })}`;
    return svg(360, 228, `${title("Letters that are silent or make a different sound")}
      ${box(8, 34, 'ps', 'psychology', 'sye-KOL…', "silent p")}${box(96, 34, 'pn', 'pneumonia', 'noo-MOH…', "silent p")}${box(184, 34, 'pt', 'ptosis', 'TOH-sis', "silent p")}${box(272, 34, 'ch', 'chronic', 'KRON-ik', "like k")}
      ${box(8, 118, 'x', 'xeroderma', 'zee-roh…', "like z")}${box(96, 118, 'ph', 'phlegm', 'flem', "like f")}${box(184, 118, 'c / g', 'cytology', 'sye-TOL…', "soft before e, i, y")}${box(272, 118, 'mn', 'mnemonic', 'neh-MON…', "silent m")}
      ${f(180, 216, "If you hear an “s” sound, the word may start with c, ps or s", { size: 9, fill: INK, w: 700 })}`, "Pronunciation", shadow(sh));
  };

  A['stress-marks'] = () => {
    const rows = [['vowel', 'long ¯', 'short ˘'], ['a', 'ā  pace', 'ă  cat'], ['e', 'ē  easy', 'ĕ  pet'], ['i', 'ī  bite', 'ĭ  pit'], ['o', 'ō  boat', 'ŏ  hot'], ['u', 'ū  cute', 'ŭ  cut']];
    return svg(360, 268, `${title("Pronunciation guide: the stressed syllable and vowel marks")}
      <rect x="40" y="34" width="280" height="46" rx="12" fill="#eef0fb"/>
      ${t(180, 56, 'FEM - or - al', { size: 15, w: 900, fill: C.indigo })}${f(180, 73, "The syllable in capitals is stressed", { size: 9 })}
      ${table(60, 92, [70, 85, 85], 22, rows, { sym: [true, true, true] })}
      ${f(180, 248, "A straight line (macron) marks a long vowel and a curve (breve) a short vowel", { size: 9, fill: INK, w: 700 })}`, "Pronunciation guide");
  };

  A['medicine-timeline'] = () => {
    const ev = [[1816, 'stethoscope', "stethoscope"], [1842, 'ether anesthesia', "ether anaesthesia"], [1895, 'x-rays', "X-rays"], [1922, 'insulin', "insulin"], [1928, 'penicillin', "penicillin"], [1967, 'heart transplant', "heart transplant"], [2008, 'face transplant', "face transplant"]];
    const x = yr => 26 + (yr - 1800) / 215 * 308;
    let body = `<path d="M18 132 H342" stroke="${C.teal}" stroke-width="8" stroke-linecap="round"/>`;
    ev.forEach((e, i) => {
      const X = x(e[0]), up = i % 2 === 0, y = up ? 84 : 172;
      body += `<path d="M${X} 132 L${X} ${up ? 104 : 156}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${X}" cy="132" r="6" fill="#fff" stroke="${C.teal}" stroke-width="3"/>`;
      body += t(X, up ? y - 26 : y + 2, String(e[0]), { size: 10, w: 900, fill: C.red }) + lab(X, up ? y - 12 : y + 16, e[1], e[2], { size: 9 });
    });
    return svg(360, 228, `${title("Some great steps in the history of medicine")}${body}
      ${f(180, 222, "Greek and Latin roots have worked from the time of Hippocrates (460 BC) until today", { size: 8.8, fill: INK, w: 700 })}`, "History of medicine");
  };

  /* ================= rt: ریشه‌ها، نقشه بدن ================= */
  A['head-roots'] = () => {
    const sh = nid(), g = nid();
    const face = `<g filter="url(#${sh})">
      <ellipse cx="180" cy="140" rx="70" ry="86" fill="url(#${g})" stroke="${C.skinLine}" stroke-width="1.6"/>
      <ellipse cx="108" cy="146" rx="11" ry="20" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/><ellipse cx="252" cy="146" rx="11" ry="20" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/></g>
      <path d="M112 112 C120 46 240 46 248 112 C236 84 210 70 180 70 C150 70 124 84 112 112Z" fill="#6b4a32"/>
      <path d="M136 92 C150 74 210 74 224 92 C210 84 150 84 136 92Z" fill="#f2b8c6" stroke="#c97a8c" stroke-width="1.2"/>
      <ellipse cx="152" cy="128" rx="13" ry="8" fill="#fff" stroke="#8a6a50" stroke-width="1.2"/><circle cx="152" cy="128" r="5" fill="#3b6fd4"/>
      <ellipse cx="208" cy="128" rx="13" ry="8" fill="#fff" stroke="#8a6a50" stroke-width="1.2"/><circle cx="208" cy="128" r="5" fill="#3b6fd4"/>
      <path d="M180 132 L172 166 Q180 172 188 166Z" fill="#efc0a0" stroke="${C.skinLine}" stroke-width="1.2"/>
      <path d="M156 188 Q180 206 204 188 Q180 196 156 188Z" fill="#d9665a" stroke="#a8433a" stroke-width="1.2"/><path d="M162 190 H198" stroke="#fff" stroke-width="3"/>
      <path d="M164 226 L164 252 M196 226 L196 252" stroke="${C.skinLine}" stroke-width="1.6"/><ellipse cx="180" cy="240" rx="8" ry="5" fill="#f0a89c"/>`;
    return svg(360, 268, `${title("Roots of the head and face")}${face}
      ${pin(204, 84, 286, 52)}${lab(318, 44, 'encephal/o', "brain", { size: 9.5 })}
      ${pin(126, 100, 70, 52)}${lab(42, 44, 'cephal/o', "head", { size: 9.5 })}
      ${pin(208, 128, 286, 104)}${lab(318, 98, 'ophthalm/o', "eye", { size: 9.5 })}
      ${pin(108, 146, 50, 104)}${lab(36, 98, 'ot/o', "ear", { size: 9.5 })}
      ${pin(182, 160, 286, 154)}${lab(318, 150, 'rhin/o', "nose", { size: 9.5 })}
      ${pin(170, 194, 52, 160)}${lab(38, 154, 'stomat/o', "mouth", { size: 9.5 })}
      ${pin(194, 190, 286, 202)}${lab(318, 198, 'odont/o', "tooth", { size: 9.5 })}
      ${pin(160, 196, 52, 208)}${lab(38, 204, 'gingiv/o', "gums", { size: 9.5 })}
      ${pin(180, 240, 286, 246)}${lab(318, 244, 'laryng/o', "voice box", { size: 9.5 })}`, "Roots of the head", shadow(sh) + radial(g, '#fde3d0', C.skin));
  };

  A['trunk-roots'] = () => {
    const sh = nid();
    const org = `<g filter="url(#${sh})">
      <path d="M150 74 C128 76 124 120 132 142 C142 150 160 140 166 124 L166 80Z" fill="#f2a7a0" stroke="#c26a5c" stroke-width="1.2"/>
      <path d="M210 74 C232 76 236 120 228 142 C218 150 200 140 194 124 L194 80Z" fill="#f2a7a0" stroke="#c26a5c" stroke-width="1.2"/>
      <path d="M182 96 C196 90 208 102 200 118 L184 134 L170 118 C164 106 172 94 182 96Z" fill="#d9443a" stroke="#9c2a23" stroke-width="1.2"/>
      <path d="M132 146 C150 138 184 140 190 150 C186 168 160 174 140 168 C130 164 128 152 132 146Z" fill="#9c4a3a" stroke="#6a2e22" stroke-width="1.2"/>
      <path d="M196 148 C214 140 230 150 226 166 C220 180 200 178 196 166Z" fill="#f2c0a8" stroke="#c4886a" stroke-width="1.2"/>
      <ellipse cx="234" cy="150" rx="8" ry="13" fill="#8e4a8a" stroke="#5e2a5a" stroke-width="1.2"/>
      <path d="M140 178 H220 V232 H140Z" fill="none" stroke="#c98a6a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M152 190 q10 -8 20 0 t20 0 t18 0 M152 206 q10 -8 20 0 t20 0 t18 0 M152 220 q10 -8 20 0 t20 0 t18 0" stroke="#f0b0a0" stroke-width="5" fill="none"/>
      <ellipse cx="146" cy="168" rx="7" ry="11" fill="#c8574f" stroke="#8e2f2a"/><ellipse cx="214" cy="168" rx="7" ry="11" fill="#c8574f" stroke="#8e2f2a"/>
      <path d="M166 246 C164 236 196 236 194 246 C196 258 186 264 180 264 C174 264 164 258 166 246Z" fill="#f2b3a6" stroke="#c26a5c" stroke-width="1.2"/></g>`;
    return svg(360, 318, `${title("Roots of the organs in the trunk")}<g transform="translate(0 18)">
      ${mannequin(180, 10, 1.08, { op: 0.5 })}${org}
      ${pin(190, 112, 270, 60)}${lab(306, 52, 'cardi/o', "heart", { size: 9.5 })}
      ${pin(140, 100, 70, 60)}${lab(46, 52, 'pneum/o, pulmon/o', "lung", { size: 9 })}
      ${pin(150, 158, 70, 120)}${lab(46, 112, 'hepat/o', "liver", { size: 9.5 })}
      ${pin(212, 160, 280, 114)}${lab(310, 106, 'gastr/o', "stomach", { size: 9.5 })}
      ${pin(236, 152, 290, 156)}${lab(318, 152, 'splen/o', "spleen", { size: 9.5 })}
      ${pin(146, 170, 70, 176)}${lab(46, 170, 'nephr/o, ren/o', "kidney", { size: 9 })}
      ${pin(180, 206, 290, 204)}${lab(312, 198, 'enter/o', "small intestine", { size: 9.5 })}
      ${pin(140, 222, 70, 230)}${lab(46, 224, 'col/o', "large intestine", { size: 9.5 })}
      ${pin(186, 252, 290, 256)}${lab(314, 252, 'cyst/o', "bladder", { size: 9.5 })}</g>`, "Roots of the trunk", shadow(sh));
  };

  A['tissue-layers'] = () => {
    const sh = nid();
    const band = (y, h, c, l) => `<path d="M60 ${y} H250 V${y + h} H60Z" fill="${c}" stroke="${l}" stroke-width="1"/>`;
    return svg(360, 274, `${title("From skin to bone: the root for each layer")}
      <g filter="url(#${sh})">${band(40, 26, '#f6c9ae', '#d39a7c')}${band(66, 40, '#f6dc8f', '#c9a64a')}${band(106, 56, '#d9665a', '#a8433a')}${band(162, 60, '#f3e4c4', '#c4a46c')}</g>
      ${[78, 96, 116, 134].map(x => `<circle cx="${x * 1.7}" cy="${86 + (x % 3) * 4}" r="7" fill="#fbe8a8" stroke="#d9b65a"/>`).join('')}
      ${[0, 1, 2, 3, 4].map(i => `<path d="M${70 + i * 36} 112 V156" stroke="#b8433c" stroke-width="2" opacity=".5"/>`).join('')}
      <circle cx="150" cy="192" r="15" fill="#f6dc8f" stroke="#c4a46c" stroke-width="1.5"/>
      <path d="M60 84 H250" stroke="#d9443a" stroke-width="4"/><path d="M60 92 H250" stroke="#3b6fd4" stroke-width="4"/>
      <path d="M60 132 C120 128 180 140 250 134" stroke="#f2c94c" stroke-width="3" fill="none"/>
      ${pin(230, 52, 284, 50)}${lab(312, 46, 'dermat/o', "skin", { size: 9.5 })}
      ${pin(220, 72, 284, 82)}${lab(312, 80, 'lip/o', "fat", { size: 9.5 })}
      ${pin(240, 88, 284, 112)}${lab(312, 112, 'angi/o', "vessel", { size: 9.5 })}
      ${pin(230, 136, 284, 144)}${lab(312, 144, 'neur/o', "nerve", { size: 9.5 })}
      ${pin(200, 150, 284, 176)}${lab(312, 176, 'my/o', "muscle", { size: 9.5 })}
      ${pin(220, 200, 284, 208)}${lab(312, 208, 'oste/o', "bone", { size: 9.5 })}
      ${pin(150, 192, 40, 238)}${lab(14, 240, 'myel/o', "bone marrow", { size: 9, anchor: 'start' })}
      ${f(196, 266, "root + -itis → dermatitis, neuritis, myositis, osteitis", { size: 8.8, fill: INK, w: 700 })}`, "Body layers", shadow(sh));
  };

  A['color-wheel'] = () => {
    const sh = nid();
    const dot = (x, y, c, en, fa, ex) => `<g filter="url(#${sh})"><circle cx="${x}" cy="${y}" r="21" fill="${c}" stroke="#0002" stroke-width="1.2"/></g>${lab(x, y + 36, en, fa, { size: 9.5 })}${t(x, y + 63, ex, { size: 8.5, w: 700, fill: MUTED })}`;
    return svg(360, 254, `${title("Colour roots")}
      ${dot(45, 60, '#d9443a', 'erythr/o', "red", 'erythrocyte')}${dot(135, 60, '#fafafa', 'leuk/o', "white", 'leukocyte')}${dot(225, 60, '#3b6fd4', 'cyan/o', "blue", 'cyanosis')}${dot(315, 60, '#2b2b2b', 'melan/o', "black", 'melanoma')}
      ${dot(45, 160, '#f2c94c', 'xanth/o', "yellow", 'xanthoma')}${dot(135, 160, '#3f8a05', 'chlor/o', "green", 'chlorophyll')}${dot(225, 160, '#9aa3a8', 'poli/o', "grey", 'poliomyelitis')}${dot(315, 160, '#8e4a8a', 'purpur/o', "purple", 'purpura')}`, "Colours", shadow(sh));
  };

  A['bacteria-shapes'] = () => {
    const sh = nid();
    const cc = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#0003"/>`;
    const rod = (x, y, c, a) => `<rect x="${x - 15}" y="${y - 6}" width="30" height="12" rx="6" fill="${c}" stroke="#0003" transform="rotate(${a || 0} ${x} ${y})"/>`;
    const cell = (x, y, art, en, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="104" height="104" rx="14" fill="#f4f6f8"/></g>${art}${lab(x + 52, y + 80, en, fa, { size: 9.5 })}`;
    const cluster = [[0, 0], [12, 2], [6, 11], [-6, 10], [-10, -2], [2, -11], [14, -9]].map(p => cc(52 + 128 + p[0], 70 + p[1], '#4b9ac4')).join('');
    const chain = [0, 1, 2, 3, 4].map(i => cc(144 + 128 + i * 13, 64 + Math.sin(i) * 6, '#7cb342')).join('');
    return svg(360, 268, `${title("Bacterial shapes and the roots of their names")}
      ${cell(10, 30, cc(62, 66, '#4b9ac4'), 'coccus', "round")}${cell(128, 30, cluster, 'staphylococcus', "in clusters")}${cell(246, 30, chain, 'streptococcus', "in chains")}
      ${cell(10, 146, cc(54, 182, '#c0563b') + cc(68, 182, '#c0563b'), 'diplococcus', "in pairs")}${cell(128, 146, rod(180, 182, '#d97a3a', -18), 'bacillus', "rod-shaped")}${cell(246, 146, rod(282, 178, '#8e4a8a') + rod(312, 184, '#8e4a8a'), 'streptobacillus', "rods in chains")}`, "Bacteria", shadow(sh));
  };

  A['cell-to-system'] = () => {
    const sh = nid(), m = nid();
    const step = (x, art, en, fa, root) => `<g filter="url(#${sh})"><rect x="${x}" y="44" width="76" height="112" rx="14" fill="#f3f4fd"/></g>${art}${lab(x + 38, 128, en, fa, { size: 9.5 })}${t(x + 38, 176, root, { size: root.length > 10 ? 8.4 : 10, w: 900, fill: C.rootDark })}`;
    const cellA = `<circle cx="46" cy="84" r="20" fill="#fde3d0" stroke="${C.skinLine}" stroke-width="1.4"/><circle cx="50" cy="82" r="7" fill="#8e4a8a"/>`;
    const tis = [0, 1, 2].map(r => [0, 1, 2].map(c => `<circle cx="${110 + c * 14}" cy="${70 + r * 14}" r="6.5" fill="#f6c9ae" stroke="#d39a7c"/>`).join('')).join('');
    const organ = `<path d="M218 64 C236 56 250 72 240 92 L224 110 L208 92 C198 74 206 60 218 64Z" fill="#d9443a" stroke="#9c2a23"/>`;
    const sys = `<path d="M300 60 V108" stroke="#d9443a" stroke-width="4"/><path d="M300 70 L286 98 M300 70 L314 98" stroke="#3b6fd4" stroke-width="3"/><path d="M300 66 C312 60 318 74 310 84 L300 92 L290 84 C282 74 288 60 300 66Z" fill="#d9443a"/>`;
    return svg(360, 214, `${title("From cell to system")}
      ${step(8, cellA, 'cell', "cell", 'cyt/o')}${step(96, tis, 'tissue', "tissue", 'hist/o')}${step(184, organ, 'organ', "organ", 'cardi/o')}${step(272, sys, 'system', "system", 'cardiovascular')}
      ${arrow(m, 86, 100, 94, 100)}${arrow(m, 174, 100, 182, 100)}${arrow(m, 262, 100, 270, 100)}
      ${f(180, 202, "cytology is the study of cells and histology the study of tissues", { size: 9.2, fill: INK, w: 700 })}`, "Levels of the body", shadow(sh) + marker(m));
  };

  A['body-systems'] = () => {
    const sh = nid();
    const S = [['🦴', 'musculoskeletal', "muscles and bones"], ['🧴', 'integumentary', "skin and appendages"], ['🫀', 'cardiovascular', "heart and vessels"], ['🫁', 'respiratory', "breathing"],
      ['🍽️', 'gastrointestinal', "of the stomach and intestines"], ['💧', 'urinary', "urinary"], ['🧠', 'nervous', "of the nerves"], ['⚗️', 'endocrine', "secreting into the blood (endocrine)"],
      ['👁️', 'sensory', "special senses"], ['🧬', 'reproductive', "reproduction"], ['🛡️', 'lymphatic', "lymph and immunity"], ['🧩', 'all together', "all together"]];
    let b = '';
    S.forEach((s, i) => { const x = 8 + (i % 4) * 87, y = 32 + Math.floor(i / 4) * 78; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="72" rx="12" fill="${i === 11 ? '#eef0fb' : '#f6f7f9'}"/></g>${t(x + 41, y + 25, s[0], { size: 18 })}${lab(x + 41, y + 46, s[1], s[2], { size: s[1].length > 13 ? 8 : 9 })}`; });
    return svg(360, 274, `${title("Body systems")}${b}`, "Body systems", shadow(sh));
  };

  A['blood-words'] = () => {
    const sh = nid();
    const rbc = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="8" fill="#d9443a" stroke="#9c2a23"/><ellipse cx="${x}" cy="${y}" rx="4" ry="3" fill="#b8332b"/>`;
    const wbc = (x, y) => `<circle cx="${x}" cy="${y}" r="10" fill="#f3f0fa" stroke="#9aa3c8"/><path d="M${x - 5} ${y} q3 -6 6 0 q3 6 5 -1" stroke="#7b5ab8" stroke-width="3" fill="none"/>`;
    const row = (y, art, w, fa) => `<g filter="url(#${sh})"><rect x="16" y="${y}" width="328" height="40" rx="10" fill="#f8f9fc"/></g>${art}${t(150, y + 25, w, { size: 11.5, w: 900, anchor: 'start', fill: C.indigo })}${f(334, y + 25, fa, { size: 9.5, fill: INK, w: 700, anchor: 'end' })}`;
    return svg(360, 264, `${title("Root + suffix in blood words: -cyte, -emia, -penia")}
      ${row(34, rbc(44, 54) + rbc(70, 56) + rbc(96, 52), 'erythrocyte', "red blood cell")}
      ${row(80, wbc(44, 100) + wbc(70, 100), 'leukocyte', "white blood cell")}
      ${row(126, wbc(36, 146) + wbc(56, 140) + wbc(76, 150) + wbc(96, 142) + wbc(114, 150), 'leukemia', "cancer of white blood cells")}
      ${row(172, wbc(70, 192), 'leukopenia', "too few white blood cells")}
      ${row(218, rbc(70, 238), 'anemia', "low red blood cells (anaemia)")}`, "Blood words", shadow(sh));
  };

  /* ================= sf: پسوندها ================= */
  A['suffix-families'] = () => {
    const sh = nid();
    const col = (x, c, bg, en, fa, items) => `<g filter="url(#${sh})"><rect x="${x}" y="32" width="82" height="214" rx="14" fill="${bg}"/></g>${lab(x + 41, 52, en, fa, { size: 9.5, fill: c })}${items.map((it, i) => t(x + 41, 92 + i * 22, it, { size: 10.5, w: 900, fill: c })).join('')}`;
    return svg(360, 258, `${title("Four suffix families")}
      ${col(8, '#b8332b', '#fde8e6', 'condition', "disease and condition", ['-itis', '-osis', '-algia', '-megaly', '-oma', '-pathy', '-emia'])}
      ${col(96, '#1f6fa8', '#e3f0fb', 'diagnosis', "diagnosis", ['-scopy', '-scope', '-gram', '-graph', '-graphy', '-metry', '-opsy'])}
      ${col(184, '#17806f', '#e0f5f1', 'surgery', "surgery", ['-ectomy', '-tomy', '-stomy', '-plasty', '-rrhaphy', '-pexy', '-centesis'])}
      ${col(272, '#5e3586', '#f1e8fa', 'grammar', "adjective, noun, specialty", ['-al, -ic', '-ous, -ar', '-ia, -y', '-ism', '-logy', '-logist', '-iatrics'])}`, "Suffix families", shadow(sh));
  };

  A['condition-suffixes'] = () => {
    const sh = nid();
    const c = (x, y, ic, s, fa, ex, col) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="108" height="92" rx="14" fill="#f8f9fc"/></g>${t(x + 54, y + 26, ic, { size: 19 })}${t(x + 54, y + 48, s, { size: 12.5, w: 900, fill: col })}${f(x + 54, y + 63, fa, { size: 9.2, fill: INK, w: 700 })}${t(x + 54, y + 81, ex, { size: 8.8, w: 700, fill: MUTED })}`;
    return svg(360, 244, `${title("Suffixes for diseases and symptoms")}
      ${c(8, 32, '🔥', '-itis', "inflammation", 'arthritis', '#b8332b')}${c(126, 32, '⚠️', '-osis', "abnormal condition", 'osteoporosis', '#a8801f')}${c(244, 32, '⚡', '-algia, -dynia', "pain", 'gastralgia', '#d9443a')}
      ${c(8, 134, '🎈', '-megaly', "enlargement", 'hepatomegaly', '#1f6fa8')}${c(126, 134, '🔴', '-oma', "tumour, mass", 'lipoma', '#8e4a8a')}${c(244, 134, '🦠', '-pathy', "disease", 'neuropathy', '#17806f')}`, "Disease suffixes", shadow(sh));
  };

  A['cut-suffixes'] = () => {
    const sh = nid();
    const tub = (x, y) => `<path d="M${x + 8} ${y + 34} H${x + 100}" stroke="#e8a39b" stroke-width="16" stroke-linecap="round"/><path d="M${x + 8} ${y + 34} H${x + 100}" stroke="#f7c9bd" stroke-width="9" stroke-linecap="round"/>`;
    const card2 = (x, y, art, s, fa, ex) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="108" height="104" rx="14" fill="#f8f9fc"/></g>${art}${t(x + 54, y + 70, s, { size: 12.5, w: 900, fill: '#17806f' })}${f(x + 54, y + 85, fa, { size: 9.2, fill: INK, w: 700 })}${t(x + 54, y + 98, ex, { size: 8.5, w: 700, fill: MUTED })}`;
    const ect = (x, y) => tub(x, y) + `<rect x="${x + 40}" y="${y + 22}" width="28" height="24" fill="#fff"/><path d="M${x + 40} ${y + 20} V${y + 48} M${x + 68} ${y + 20} V${y + 48}" stroke="#d9443a" stroke-width="2" stroke-dasharray="3 2"/><path d="M${x + 44} ${y + 12} q10 -8 20 0" stroke="#17806f" stroke-width="2" fill="none"/>`;
    const tom = (x, y) => tub(x, y) + `<path d="M${x + 54} ${y + 18} V${y + 50}" stroke="#d9443a" stroke-width="2.6"/>`;
    const sto = (x, y) => tub(x, y) + `<ellipse cx="${x + 54}" cy="${y + 34}" rx="9" ry="7" fill="#b8433c" stroke="#7a2d26"/>`;
    const pla = (x, y) => tub(x, y) + `<rect x="${x + 42}" y="${y + 25}" width="24" height="18" rx="4" fill="#9ccc65" stroke="#3f8a05"/>`;
    const rrh = (x, y) => tub(x, y) + [0, 1, 2, 3].map(i => `<path d="M${x + 40 + i * 9} ${y + 22} L${x + 46 + i * 9} ${y + 46}" stroke="#2b2b2b" stroke-width="2"/>`).join('');
    const pex = (x, y) => `<path d="M${x + 10} ${y + 46} H${x + 98}" stroke="#c4a46c" stroke-width="5"/>` + `<ellipse cx="${x + 54}" cy="${y + 28}" rx="20" ry="14" fill="#c8574f" stroke="#8e2f2a"/><path d="M${x + 54} ${y + 40} V${y + 50}" stroke="#17806f" stroke-width="3"/><circle cx="${x + 54}" cy="${y + 50}" r="3" fill="#17806f"/>`;
    return svg(360, 262, `${title("Surgical suffixes")}
      ${card2(8, 32, ect(8, 32), '-ectomy', "removal", 'appendectomy')}${card2(126, 32, tom(126, 32), '-tomy', "incision", 'tracheotomy')}${card2(244, 32, sto(244, 32), '-stomy', "new opening", 'colostomy')}
      ${card2(8, 146, pla(8, 146), '-plasty', "repair", 'rhinoplasty')}${card2(126, 146, rrh(126, 146), '-rrhaphy', "stitch", 'myorrhaphy')}${card2(244, 146, pex(244, 146), '-pexy', "surgical fixation", 'nephropexy')}`, "Surgical suffixes", shadow(sh));
  };

  A['scope-gram'] = () => {
    const rows = [['', 'instrument', 'process', 'record'], ['view', '-scope', '-scopy', '—'], ['record', '-graph', '-graphy', '-gram'], ['measure', '-meter', '-metry', '—']];
    return svg(360, 248, `${title("Instrument, procedure and result")}
      ${table(14, 34, [74, 90, 90, 78], 28, rows, { colFill: [INK, '#1f6fa8', '#17806f', '#8e4a8a'] })}
      ${f(304, 166, "An endoscope is the instrument; endoscopy is the procedure of looking with it", { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${f(304, 188, "An electrocardiograph is the machine; an electrocardiogram is the tracing it makes", { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${f(304, 210, "A thermometer is an instrument; spirometry is a measuring procedure", { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${t(330, 166, '①', { size: 11, fill: C.indigo })}${t(330, 188, '②', { size: 11, fill: C.indigo })}${t(330, 210, '③', { size: 11, fill: C.indigo })}
      ${f(180, 236, "Rows: viewing, recording, measuring", { size: 8.8 })}`, "Instrument and procedure");
  };

  A['specialist-suffixes'] = () => {
    const sh = nid();
    const r = (y, s, fa, ex, exfa, c) => `<g filter="url(#${sh})"><rect x="14" y="${y}" width="332" height="36" rx="10" fill="#f8f9fc"/></g>${t(60, y + 23, s, { size: 12, w: 900, fill: c })}${t(170, y + 23, ex, { size: 10.5, w: 800 })}${f(336, y + 16, fa, { size: 9.4, fill: INK, w: 800, anchor: 'end' })}${f(336, y + 30, exfa, { size: 8.6, anchor: 'end' })}`;
    return svg(360, 262, `${title("Specialty and specialist suffixes")}
      ${r(32, '-logy', "study of", 'cardiology', "study of the heart", '#1f6fa8')}
      ${r(74, '-logist', "specialist", 'cardiologist', "heart specialist", '#1f6fa8')}
      ${r(116, '-iatrics', "medical treatment", 'pediatrics', "children’s medicine", '#17806f')}
      ${r(158, '-ician', "specialist physician", 'pediatrician', "children’s doctor", '#17806f')}
      ${r(200, '-iatrist', "specialist physician", 'psychiatrist', "psychiatrist", '#8e4a8a')}
      ${f(180, 252, "iatr/o means treatment and physician", { size: 8.8 })}`, "Specialist suffixes", shadow(sh));
  };

  A['rrh-family'] = () => {
    const sh = nid();
    const box = (x, art, s, fa, ex) => `<g filter="url(#${sh})"><rect x="${x}" y="34" width="108" height="168" rx="14" fill="#f8f9fc"/></g>${art}${t(x + 54, 140, s, { size: 13, w: 900, fill: '#b8332b' })}${f(x + 54, 158, fa, { size: 9.4, fill: INK, w: 700 })}${t(x + 54, 184, ex, { size: 9.5, w: 800, fill: C.indigo })}`;
    const drip = x => `<path d="M${x + 30} 60 H${x + 78}" stroke="#7cb2e5" stroke-width="8" stroke-linecap="round"/>` + [0, 1, 2].map(i => `<path d="M${x + 38 + i * 16} ${74 + i * 6} c-5 9 -5 14 0 15 c5 -1 5 -6 0 -15z" fill="#7cb2e5"/>`).join('');
    const burst = x => `<circle cx="${x + 54}" cy="88" r="12" fill="#d9443a"/>` + [0, 45, 90, 135, 180, 225, 270, 315].map(a => { const r1 = 16, r2 = 30, ar = a * Math.PI / 180; return `<path d="M${(x + 54 + r1 * Math.cos(ar)).toFixed(1)} ${(88 + r1 * Math.sin(ar)).toFixed(1)} L${(x + 54 + r2 * Math.cos(ar)).toFixed(1)} ${(88 + r2 * Math.sin(ar)).toFixed(1)}" stroke="#d9443a" stroke-width="3" stroke-linecap="round"/>`; }).join('');
    const sew = x => `<path d="M${x + 22} 88 H${x + 86}" stroke="#d9665a" stroke-width="4"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${x + 28 + i * 12} 76 L${x + 34 + i * 12} 100" stroke="#2b2b2b" stroke-width="2.2"/>`).join('');
    return svg(360, 236, `${title("Three suffixes with rrh: watch the spelling")}
      ${box(8, drip(8), '-rrhea', "flow, discharge", 'rhinorrhea')}${box(126, burst(126), '-rrhage', "bursting forth of blood", 'hemorrhage')}${box(244, sew(244), '-rrhaphy', "stitch", 'myorrhaphy')}
      ${f(180, 226, "All three are spelled with two r’s and one h: diarrhea, hemorrhage", { size: 9, fill: INK, w: 700 })}`, "The rrh suffixes", shadow(sh));
  };

  A['small-vessels'] = () => {
    const m = nid();
    return svg(360, 220, `${title("Diminutive suffixes: -ole and -ule")}
      ${tube('M20 80 H96', C.art, C.artLine, 18)}${tube('M96 80 C120 80 130 62 156 62', C.art, C.artLine, 9)}${tube('M96 80 C120 80 130 98 156 98', C.art, C.artLine, 9)}
      <path d="M156 62 C176 62 184 74 204 74 M156 98 C176 98 184 86 204 86 M156 62 C176 70 186 90 204 86 M156 98 C176 90 186 70 204 74" stroke="#a46aa8" stroke-width="2.4" fill="none"/>
      ${tube('M204 74 C230 74 236 62 262 62', C.vein, C.veinLine, 9)}${tube('M204 86 C230 86 236 98 262 98', C.vein, C.veinLine, 9)}${tube('M262 62 C290 62 290 80 340 80', C.vein, C.veinLine, 20)}${tube('M262 98 C290 98 290 80 340 80', C.vein, C.veinLine, 20)}
      ${lab(56, 116, 'artery', "artery", { size: 10 })}${lab(130, 136, 'arteriole', "small artery", { size: 10, fill: '#b8332b' })}${lab(180, 40, 'capillary', "capillary", { size: 9.5 })}${lab(236, 136, 'venule', "small vein", { size: 10, fill: '#24479a' })}${lab(314, 120, 'vein', "vein", { size: 10 })}
      ${arrow(m, 30, 176, 330, 176, LINE, 2)}${f(180, 200, "Blood flows from artery to arteriole, capillary, venule and vein", { size: 9, fill: INK, w: 700 })}`, "Small vessels", marker(m));
  };

  A['adjective-suffixes'] = () => {
    const rows = [['noun', 'adjective', 'suffix'], ['heart', 'cardiac', '-ac'], ['nerve', 'neural', '-al'], ['pelvis', 'pelvic', '-ic'], ['lung', 'pulmonary', '-ary'], ['esophagus', 'esophageal', '-eal'], ['skin', 'cutaneous', '-ous'], ['vessel', 'vascular', '-ar']];
    return svg(360, 262, `${title("Adjective suffixes: they all mean “pertaining to”")}
      ${table(34, 32, [98, 110, 84], 24, rows, { colFill: [MUTED, '#1f6fa8', '#8e4a8a'] })}
      ${f(180, 240, "noun + adjective suffix → adjective; for example, the adjective of neuron is neuronal", { size: 9, fill: INK, w: 700 })}`, "Adjective suffixes");
  };

  /* ================= pf: پیشوندها ================= */
  A['number-prefixes'] = () => {
    const sh = nid();
    const dots = (x, y, n) => Array.from({ length: n }, (_, i) => `<circle cx="${x + (i - (n - 1) / 2) * 13}" cy="${y}" r="5" fill="${C.preLine}"/>`).join('');
    const box = (i, art, p, fa, ex) => { const x = 8 + (i % 4) * 87, y = 32 + Math.floor(i / 4) * 106; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="98" rx="12" fill="#fff8df"/></g>${art(x + 41, y + 22)}${t(x + 41, y + 50, p, { size: p.length > 12 ? 9.5 : 11, w: 900, fill: C.preDark })}${f(x + 41, y + 66, fa, { size: 9.2, fill: INK, w: 700 })}${t(x + 41, y + 86, ex, { size: 8.4, w: 700, fill: MUTED })}`; };
    return svg(360, 248, `${title("Number prefixes")}
      ${box(0, (x, y) => dots(x, y, 1), 'uni-, mono-', "one", 'unilateral')}${box(1, (x, y) => dots(x, y, 2), 'bi-, di-', "two", 'bilateral')}
      ${box(2, (x, y) => dots(x, y, 3), 'tri-', "three", 'tricuspid')}${box(3, (x, y) => dots(x, y, 4), 'quadri-, tetra-', "four", 'quadriplegia')}
      ${box(4, (x, y) => `<path d="M${x - 14} ${y + 6} A14 14 0 0 1 ${x + 14} ${y + 6} Z" fill="${C.preLine}"/><path d="M${x - 14} ${y + 6} A14 14 0 0 0 ${x + 14} ${y + 6}" fill="none" stroke="${C.preLine}" stroke-dasharray="3 2"/>`, 'hemi-, semi-', "half", 'hemiplegia')}
      ${box(5, (x, y) => dots(x, y - 4, 5) + dots(x, y + 8, 4), 'multi-, poly-', "many, much", 'polyuria')}
      ${box(6, (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="${C.preLine}"/>${t(x, y + 4, 'ALL', { size: 8, w: 900, fill: '#fff' })}`, 'pan-', "all", 'pancytopenia')}
      ${box(7, (x, y) => `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${C.preLine}" stroke-width="3"/>${t(x, y + 4, '0', { size: 12, w: 900, fill: C.preDark })}`, 'nulli-', "none", 'nullipara')}`, "Number prefixes", shadow(sh));
  };

  A['direction-terms'] = () => {
    const m = nid(), m2 = nid();
    return svg(360, 300, `${title("Directions on the body in anatomic position")}
      ${mannequin(150, 30, 1.0, { op: 0.75 })}
      ${arrow(m, 150, 52, 150, 34, C.indigo, 2.4)}${arrow(m, 150, 262, 150, 280, C.indigo, 2.4)}
      ${lab(206, 38, 'superior', "upper, toward the head", { size: 9.5, fill: C.indigo })}${lab(206, 282, 'inferior', "lower, toward the feet", { size: 9.5, fill: C.indigo })}
      <path d="M150 60 V256" stroke="#9aa3c8" stroke-dasharray="4 3"/>${f(156, 236, "midline", { size: 8, anchor: 'start' })}
      ${arrow(m2, 132, 120, 108, 120, C.red, 2.2)}${arrow(m2, 132, 120, 146, 120, C.red, 2.2)}
      ${lab(56, 106, 'lateral', "toward the side", { size: 9.5, fill: C.red })}${lab(56, 136, 'medial', "toward the midline", { size: 9.5, fill: C.red })}
      <circle cx="194" cy="94" r="5" fill="${C.teal}"/><circle cx="203" cy="152" r="5" fill="${C.teal}"/>
      ${pin(194, 94, 262, 92, C.teal)}${lab(300, 88, 'proximal', "nearer the trunk", { size: 9.5, fill: C.teal })}
      ${pin(203, 152, 262, 160, C.teal)}${lab(300, 156, 'distal', "farther from the trunk", { size: 9.5, fill: C.teal })}
      <rect x="250" y="194" width="100" height="62" rx="12" fill="#f3f4fd"/>
      ${lab(300, 214, 'anterior ↔ posterior', "front ↔ back", { size: 8.6 })}${f(300, 248, "that is, ventral and dorsal", { size: 8 })}`, "Directions", marker(m, C.indigo) + marker(m2, C.red));
  };

  A['position-prefixes'] = () => {
    const m = nid();
    const org = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c || '#f2b3a6'}" stroke="#c26a5c" stroke-width="1.6"/>`;
    return svg(360, 290, `${title("Position prefixes: relative to an organ")}
      <circle cx="140" cy="148" r="64" fill="none" stroke="${C.preLine}" stroke-width="3" stroke-dasharray="6 4"/>${org(140, 148, 44)}
      <circle cx="140" cy="170" r="6" fill="${C.preLine}"/>
      ${lab(140, 140, 'intra-, endo-', "within", { size: 8.6, fill: C.preDark })}
      ${pin(140, 104, 140, 54)}${lab(140, 40, 'epi-, supra-', "upon, above", { size: 9.5, fill: C.preDark })}
      ${pin(140, 192, 140, 236)}${lab(140, 252, 'hypo-, sub-, infra-', "below", { size: 9.5, fill: C.preDark })}
      ${pin(194, 116, 252, 74)}${lab(296, 62, 'peri-, circum-', "around", { size: 9.5, fill: C.preDark })}
      ${pin(208, 160, 252, 160)}${lab(296, 156, 'extra-, exo-, ecto-', "outside", { size: 9, fill: C.preDark })}
      ${org(290, 226, 12)}${org(326, 226, 12)}<path d="M308 214 V238" stroke="${C.preLine}" stroke-width="3"/>${lab(308, 258, 'inter-', "between", { size: 9.5, fill: C.preDark })}
      ${arrow(m, 22, 196, 96, 150, C.indigo, 2)}${lab(40, 222, 'trans-, dia-', "through", { size: 9, fill: C.indigo })}
      ${lab(40, 62, 'retro-', "behind", { size: 9.5, fill: C.preDark })}${lab(40, 106, 'para-', "beside", { size: 9.5, fill: C.preDark })}`, "Position prefixes", marker(m, C.indigo));
  };

  A['injection-routes'] = () => {
    const sh = nid();
    const needle = (x, y, a, c) => `<g transform="translate(${x} ${y}) rotate(${a})"><rect x="-52" y="-4" width="34" height="8" rx="2" fill="#dfe8ee" stroke="#8aa0ad"/><rect x="-62" y="-2" width="10" height="4" fill="#8aa0ad"/><path d="M-18 0 H0" stroke="${c}" stroke-width="2"/></g>`;
    return svg(360, 268, `${title("Injection routes: the prefix and root tell you where the needle goes")}
      <g filter="url(#${sh})"><rect x="20" y="96" width="320" height="22" fill="#f6c9ae" stroke="#d39a7c"/><rect x="20" y="118" width="320" height="36" fill="#f6dc8f" stroke="#c9a64a"/><rect x="20" y="154" width="320" height="60" fill="#d9665a" stroke="#a8433a"/></g>
      ${tube('M206 136 H278', C.vein, C.veinLine, 10)}
      ${needle(66, 104, 12, '#555')}${needle(130, 128, 45, '#555')}${needle(196, 176, 90, '#555')}${needle(246, 136, 22, '#555')}
      ${lab(56, 56, 'intradermal (ID)', "into the skin", { size: 9 })}${lab(132, 72, 'subcutaneous', "subcutaneously", { size: 9 })}${lab(210, 56, 'intramuscular (IM)', "into the muscle", { size: 9 })}${lab(290, 72, 'intravenous (IV)', "into the vein", { size: 9 })}
      ${f(330, 112, "skin", { size: 8.4, anchor: 'end', fill: INK })}${f(330, 151, "fat under the skin", { size: 8.4, anchor: 'end', fill: INK })}${f(330, 200, "muscle", { size: 8.4, anchor: 'end', fill: '#fff' })}
      ${f(180, 240, "intra- means within and sub- means below; ven/o is vein", { size: 9.2, fill: INK, w: 700 })}
      ${f(180, 258, "parenteral means any route other than the digestive tract", { size: 8.6 })}`, "Injection routes", shadow(sh));
  };

  A['negation-prefixes'] = () => {
    const sh = nid();
    const c = (x, y, p, fa, ex, exfa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="62" rx="12" fill="#fff8df"/></g><circle cx="${x + 22}" cy="${y + 31}" r="12" fill="none" stroke="${C.red}" stroke-width="2.6"/><path d="M${x + 14} ${y + 39} L${x + 30} ${y + 23}" stroke="${C.red}" stroke-width="2.6"/>${t(x + 98, y + 22, p, { size: 11.5, w: 900, fill: C.preDark })}${f(x + 98, y + 37, fa, { size: 9, fill: INK, w: 700 })}${t(x + 98, y + 53, exfa ? ex + ' • ' + exfa : ex, { size: 8.4, w: 700, fill: MUTED })}`;
    return svg(360, 252, `${title("Prefixes of negation and opposition")}
      ${c(8, 34, 'a-, an-', "without, lacking", 'afebrile', 'anoxia')}${c(186, 34, 'anti-', "against", 'antibiotic', 'antacid')}
      ${c(8, 106, 'contra-', "against, opposing", 'contraindication', '')}${c(186, 106, 'dis-', "apart, away", 'dislocation', '')}
      ${c(8, 178, 'de-', "remove, down", 'dehydration', '')}${c(186, 178, 'mal-', "bad", 'malnutrition', '')}`, "Negation prefixes", shadow(sh));
  };

  A['opposite-prefixes'] = () => {
    const rows = [['prefix', '↔', 'prefix'], ["brady-  slow", '↔', "tachy-  fast"], ["hypo-  low", '↔', "hyper-  high"], ["ab-  away from", '↔', "ad-  toward"], ["endo-  within", '↔', "exo-  outside"], ["pre-  before", '↔', "post-  after"], ["micro-  small", '↔', "macro-  large"], ["eu-  good", '↔', "dys-  bad"]];
    let b = '', y = 34;
    rows.forEach((r, i) => {
      b += `<rect x="24" y="${y}" width="312" height="26" fill="${i === 0 ? '#fff3c4' : i % 2 ? '#fff' : '#fffbea'}" stroke="#f0e2a8"/>`;
      if (i === 0) b += f(180, y + 17, "Opposite pairs (antonyms)", { size: 9.5, fill: INK, w: 900 });
      else {
        const [a, fa1] = r[0].split('  '), [c2, fa2] = r[2].split('  ');
        b += t(56, y + 18, a, { size: 11, w: 900, fill: C.preDark, anchor: 'start' }) + f(150, y + 18, fa1, { size: 9, anchor: 'end', fill: INK }) + t(180, y + 18, '↔', { size: 12, fill: MUTED });
        b += t(214, y + 18, c2, { size: 11, w: 900, fill: C.preDark, anchor: 'start' }) + f(316, y + 18, fa2, { size: 9, anchor: 'end', fill: INK });
      }
      y += 26;
    });
    return svg(360, 274, `${title("Opposite prefixes")}${b}${f(180, 264, "bradycardia is a slow heartbeat and tachycardia a fast heartbeat", { size: 8.8, fill: INK, w: 700 })}`, "Opposite prefixes");
  };

  A['patient-positions'] = () => {
    const sh = nid();
    const panel = (x, y, art, en, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="108" height="104" rx="12" fill="#f3f4fd"/></g>${art}${lab(x + 54, y + 78, en, fa, { size: 9.4 })}`;
    const bed = (x, y, a) => `<g transform="rotate(${a || 0} ${x + 54} ${y + 52})"><rect x="${x + 10}" y="${y + 52}" width="88" height="6" rx="3" fill="#9aa3a8"/></g>`;
    const head = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="7" fill="#fff" stroke="#4b4fc4" stroke-width="4"/>`;
    const sup = (x, y) => bed(x, y) + head(x + 22, y + 42) + stick(`M${x + 30} ${y + 46} H${x + 90}`);
    const pro = (x, y) => bed(x, y) + head(x + 22, y + 44) + stick(`M${x + 30} ${y + 47} H${x + 90}`) + `<path d="M${x + 16} ${y + 46} h-4" stroke="#4b4fc4" stroke-width="3"/>`;
    const fow = (x, y) => `<path d="M${x + 14} ${y + 58} H${x + 98} M${x + 40} ${y + 58} L${x + 22} ${y + 20}" stroke="#9aa3a8" stroke-width="6" stroke-linecap="round"/>` + head(x + 30, y + 18) + stick(`M${x + 34} ${y + 26} L${x + 48} ${y + 50} H${x + 92}`);
    const tre = (x, y) => bed(x, y, 16) + head(x + 22, y + 32) + stick(`M${x + 30} ${y + 36} L${x + 90} ${y + 54}`);
    const sim = (x, y) => bed(x, y) + head(x + 22, y + 42) + stick(`M${x + 30} ${y + 46} H${x + 62} L${x + 76} ${y + 30} L${x + 92} ${y + 44} M${x + 62} ${y + 46} H${x + 90}`);
    const lit = (x, y) => bed(x, y) + head(x + 22, y + 42) + stick(`M${x + 30} ${y + 46} H${x + 66} L${x + 76} ${y + 22} L${x + 90} ${y + 30}`);
    return svg(360, 254, `${title("Patient positions in bed")}
      ${panel(8, 32, sup(8, 32), 'supine', "lying face up")}${panel(126, 32, pro(126, 32), 'prone', "lying face down")}${panel(244, 32, fow(244, 32), 'Fowler', "half sitting")}
      ${panel(8, 144, tre(8, 144), 'Trendelenburg', "head lower than feet")}${panel(126, 144, sim(126, 144), 'Sims', "on the left side, knees drawn up")}${panel(244, 144, lit(244, 144), 'lithotomy', "on the back, thighs raised")}`, "Patient positions", shadow(sh));
  };

  A['time-prefixes'] = () => {
    const m = nid();
    const dot = (x, c) => `<circle cx="${x}" cy="0" r="9" fill="${c}"/>`;
    const tl = (y, a, b, c, fa) => `<g transform="translate(0 ${y})"><path d="M30 0 H330" stroke="#d9dbe8" stroke-width="6" stroke-linecap="round"/>${dot(70, C.pre)}${dot(180, C.red)}${dot(290, C.teal)}
      ${t(70, -16, a[0], { size: 10.5, w: 900, fill: C.preDark })}${f(70, 26, a[1], { size: 9, fill: INK })}${t(180, -16, b[0], { size: 10.5, w: 900, fill: C.red })}${f(180, 26, b[1], { size: 9, fill: INK })}${t(290, -16, c[0], { size: 10.5, w: 900, fill: '#17806f' })}${f(290, 26, c[1], { size: 9, fill: INK })}</g>`;
    return svg(360, 252, `${title("Time prefixes: before, during, after")}
      ${tl(72, ['preoperative', "before surgery"], ['operation', "surgery"], ['postoperative', "after surgery"])}
      ${tl(150, ['prenatal', "before birth"], ['birth', "birth"], ['neonate', "newborn (neo- = new)"])}
      ${arrow(m, 40, 196, 320, 196, LINE, 2)}${f(180, 216, "time", { size: 9 })}
      ${f(180, 240, "pre- and ante- mean before; post- means after; primi- means first", { size: 9, fill: INK, w: 700 })}`, "Time prefixes", marker(m));
  };

  /* ================= rl: قواعد و تله‌ها ================= */
  A['plural-rules'] = () => {
    const rows = [['singular', 'plural', 'example'], ['-a', '-ae', 'vertebra → vertebrae'], ['-um', '-a', 'bacterium → bacteria'], ['-us', '-i', 'bronchus → bronchi'], ['-is', '-es', 'diagnosis → diagnoses'], ['-ma', '-mata', 'carcinoma → carcinomata'],
      ['-ix, -ex', '-ices', 'appendix → appendices'], ['-ax', '-aces', 'thorax → thoraces'], ['-nx', '-nges', 'phalanx → phalanges'], ['-on', '-a', 'ganglion → ganglia'], ['-en', '-ina', 'lumen → lumina'], ['-y', '-ies', 'artery → arteries']];
    return svg(360, 352, `${title("Plural rules for Latin and Greek words")}
      ${table(14, 30, [70, 70, 192], 24, rows, { colFill: ['#9a5418', '#17806f', INK] })}
      ${f(180, 334, "Many words can also take the English -s or -es plural: viruses", { size: 9, fill: INK, w: 700 })}`, "Plural rules");
  };

  A['plural-exceptions'] = () => {
    const sh = nid();
    const c = (x, y, a, b, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="44" rx="10" fill="#f8f9fc"/></g>${t(x + 83, y + 20, `${a} → ${b}`, { size: 10.5, w: 900, fill: '#9a5418' })}${f(x + 83, y + 36, fa, { size: 8.6 })}`;
    const say = (x, end, s, fa) => `<rect x="${x}" y="206" width="104" height="48" rx="10" fill="#eef0fb"/>${t(x + 52, 226, end + '  =  ' + s, { size: 10.5, w: 900, fill: C.indigo })}${f(x + 52, 244, fa, { size: 8.4 })}`;
    return svg(360, 266, `${title("Exceptions and how to pronounce plural endings")}
      ${c(8, 34, 'meatus', 'meatus', "unchanged")}${c(186, 34, 'femur', 'femora', "exception to -ur")}
      ${c(8, 86, 'corpus', 'corpora', "exception to -us")}${c(186, 86, 'viscus', 'viscera', "exception to -us")}
      ${c(8, 138, 'iris', 'irides', "exception to -is")}${c(186, 138, 'pons', 'pontes', "exception to -s")}
      ${f(180, 198, "Pronouncing plural endings:", { size: 9, fill: INK, w: 800 })}
      ${say(14, '-i', 'eye', 'glomeruli')}${say(128, '-ae', 'ay', 'vertebrae')}${say(242, '-es', 'eez', 'testes')}`, "Exceptions", shadow(sh));
  };

  A['ileum-ilium'] = () => {
    const sh = nid();
    const coil = `<path d="M60 78 q14 -14 28 0 t28 0 t28 0 M60 100 q14 -14 28 0 t28 0 t28 0 M60 122 q14 -14 28 0 t28 0 t28 0" stroke="#e8a39b" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M60 78 q14 -14 28 0 t28 0 t28 0 M60 100 q14 -14 28 0 t28 0 t28 0 M60 122 q14 -14 28 0 t28 0 t28 0" stroke="#f7c9bd" stroke-width="8" fill="none" stroke-linecap="round"/>`;
    const bone = `<path d="M222 70 C240 46 300 48 318 74 C330 92 314 112 296 120 L282 150 C278 164 262 166 256 152 L244 120 C226 110 210 92 222 70Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.8"/><circle cx="270" cy="150" r="9" fill="#fff" stroke="${C.boneLine}"/>`;
    return svg(360, 262, `${title("Sound-alikes: ileum and ilium sound the same but are two organs")}
      <g filter="url(#${sh})">${coil}${bone}</g>
      ${lab(102, 160, 'ileum', "last part of the small intestine", { size: 12 })}${lab(270, 180, 'ilium', "wing of the hip bone", { size: 12 })}
      <rect x="40" y="212" width="280" height="40" rx="10" fill="#fff3c4"/>
      ${f(180, 229, "ileum with an e, as in enter/o (intestine)", { size: 9.4, fill: INK, w: 800 })}${f(180, 245, "ilium with an i, as in hip", { size: 9.4, fill: INK, w: 800 })}`, "ileum and ilium", shadow(sh));
  };

  A['peri-pero'] = () => {
    return svg(360, 300, `${title("Three look-alike words: peritoneal, perineal, peroneal")}
      ${mannequin(180, 26, 1.02, { op: 0.7 })}
      <path d="M152 112 C150 150 154 176 166 186 L194 186 C206 176 210 150 208 112Z" fill="#f7c9bd" stroke="#c26a5c" stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"/>
      <circle cx="180" cy="196" r="6" fill="#8e4a8a"/>
      <path d="M210 232 C214 250 214 266 210 282" stroke="#3f8a05" stroke-width="5" stroke-linecap="round"/>
      ${pin(196, 140, 272, 112)}${lab(306, 104, 'peritoneal', "of the peritoneum (abdominal lining)", { size: 10 })}
      ${pin(180, 196, 84, 184)}${lab(50, 176, 'perineal', "of the perineum (between the legs)", { size: 10 })}
      ${pin(210, 258, 272, 248)}${lab(306, 242, 'peroneal', "of the outer lower leg", { size: 10 })}
      ${f(180, 294, "perINeal: IN between the legs; perONeal: ON the lower leg", { size: 9, fill: INK, w: 800 })}`, "Three look-alike words");
  };

  A['soundalikes'] = () => {
    const sh = nid();
    const pair = (y, a, fa1, b, fa2) => `<g filter="url(#${sh})"><rect x="10" y="${y}" width="164" height="42" rx="10" fill="#f8f9fc"/><rect x="186" y="${y}" width="164" height="42" rx="10" fill="#f8f9fc"/></g>${t(92, y + 18, a, { size: 10.5, w: 900, fill: '#b8332b' })}${f(92, y + 34, fa1, { size: 8.6, fill: INK })}${t(268, y + 18, b, { size: 10.5, w: 900, fill: '#1f6fa8' })}${f(268, y + 34, fa2, { size: 8.6, fill: INK })}${t(180, y + 25, '≠', { size: 13, w: 900, fill: MUTED })}`;
    return svg(360, 292, `${title("Sound-alike traps: one letter, a different meaning")}
      ${pair(32, 'dysphagia', "difficulty swallowing", 'dysphasia', "difficulty speaking")}${pair(82, 'palpation', "examining by touch", 'palpitation', "pounding heartbeat")}
      ${pair(132, 'mucus', "noun: mucus", 'mucous', "adjective: mucous")}${pair(182, 'prostatic', "of the prostate", 'prosthetic', "artificial part, prosthesis")}
      ${pair(232, 'pruritus', "itching", 'pleuritis', "inflammation of the lung lining (pleurisy)")}`, "Sound-alikes", shadow(sh));
  };

  A['word-kinds'] = () => {
    const sh = nid();
    const c = (x, y, h, en, fa, ex, note) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="104" rx="14" fill="#f3f4fd"/></g>${t(x + 83, y + 32, h, { size: 15, w: 900, fill: C.indigo, sym: true })}${lab(x + 83, y + 56, en, fa, { size: 10 })}${t(x + 83, y + 86, ex, { size: 8.6, w: 700, fill: MUTED })}${note ? f(x + 83, y + 99, note, { size: 7.8 }) : ''}`;
    return svg(360, 258, `${title("Abbreviation, acronym, eponym and symbol")}
      ${c(8, 34, 'CBC', 'abbreviation', "abbreviation", "read letter by letter", '')}${c(186, 34, 'AIDS', 'acronym', "acronym", "read as one word", '')}
      ${c(8, 146, 'Parkinson', 'eponym', "eponym", "named after a discoverer or place", '')}${c(186, 146, '↑  ↓  ♀  ♂', 'symbol', "symbol", "increase, decrease, female, male", '')}`, "Kinds of shortened forms", shadow(sh));
  };

  A['eponym-cards'] = () => {
    const sh = nid();
    const c = (i, who, yr, dz, fa) => { const x = 8 + (i % 2) * 178, y = 32 + Math.floor(i / 2) * 70; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="62" rx="12" fill="#fff8f0"/></g>${t(x + 83, y + 20, dz, { size: 10.5, w: 900, fill: '#9a5418' })}${t(x + 83, y + 36, who + '  ' + yr, { size: 8.6, w: 700, fill: MUTED })}${f(x + 83, y + 52, fa, { size: 9, fill: INK, w: 700 })}`; };
    return svg(360, 254, `${title("Eponyms: diseases named after people or places")}
      ${c(0, 'Alois Alzheimer', '1864–1915', 'Alzheimer disease', "progressive brain decline")}${c(1, 'James Parkinson', '1755–1824', 'Parkinson disease', "tremor and muscle stiffness")}
      ${c(2, 'John Haydon Down', '1828–1896', 'Down syndrome', "trisomy 21")}${c(3, 'Virginia Apgar', '1909–1974', 'Apgar score', "newborn score at minutes 1 and 5")}
      ${c(4, 'Old Lyme, Connecticut', '1975', 'Lyme disease', "named after a town; spread by ticks")}${c(5, 'Harvey Cushing', '1869–1939', 'Cushing syndrome', "overactive adrenal cortex")}`, "Eponyms", shadow(sh));
  };

  A['word-breaker'] = () => {
    const sh = nid();
    const w = word(10, 52, 40, [['root', 'ot', 42], ['cv', 'o', 30], ['root', 'rhin', 54], ['cv', 'o', 30], ['root', 'laryng', 70], ['cv', 'o', 30], ['suf', '-logist', 72]], { size: 11.5 });
    const X = w.xs;
    return svg(360, 214, `${title("Breaking down a long word: otorhinolaryngologist")}
      <g filter="url(#${sh})">${w.svg}</g>
      ${lab(X[0], 118, 'ear', "ear", { size: 9.5, fill: C.rootDark })}${lab(X[2], 118, 'nose', "nose", { size: 9.5, fill: C.rootDark })}${lab(X[4], 118, 'larynx', "voice box", { size: 9.5, fill: C.rootDark })}${lab(X[6], 118, 'specialist', "specialist", { size: 9.5, fill: C.sufDark })}
      <rect x="28" y="152" width="304" height="46" rx="12" fill="#eef0fb"/>
      ${f(180, 171, "ear, nose and throat specialist (ENT)", { size: 10.5, fill: INK, w: 900 })}${f(180, 189, "Read a long word from the end and split it with “/”", { size: 8.8 })}`, "Word breaking", shadow(sh));
  };

  A['spelling-traps'] = () => {
    const sh = nid();
    const r = (y, pre, hl, post, fa) => `<g filter="url(#${sh})"><rect x="16" y="${y}" width="328" height="32" rx="9" fill="#f8f9fc"/></g><text x="34" y="${y + 21}" font-size="13" font-weight="800" fill="${INK}" direction="ltr" font-family="Nunito, system-ui, sans-serif">${pre}<tspan fill="${C.red}" font-weight="900">${hl}</tspan>${post}</text>${f(332, y + 21, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}`;
    return svg(360, 258, `${title("The most commonly misspelled words")}
      ${r(32, 'tonsi', 'll', 'ectomy', "two l’s")}${r(68, 'hemo', 'rrh', 'age', "two r’s and one h; bursting forth of blood")}${r(104, 'oph', 'th', 'almology', "both ph and th")}
      ${r(140, 'diar', 'rh', 'ea', "two r’s and one h; flowing through")}${r(176, 'pr', 'u', 'ritus', "with a u, not pruritis")}${r(212, 'h', 'u', 'merus', "a bone; humorous means funny")}`, "Tricky spellings", shadow(sh));
  };

  /* ================= hs: در بیمارستان ================= */
  A['record-parts'] = () => {
    const sh = nid();
    const P = [['📝', 'history and physical', "history and physical"], ['📋', "physician's orders", "physician’s orders"], ['🩺', "nurse's notes", "nurse’s notes"], ['📈', 'progress notes', "daily progress"],
      ['🤝', 'consultation report', "consultation report"], ['🔪', 'operative report', "operative report"], ['🔬', 'pathology report', "pathology report"], ['🏠', 'discharge summary', "discharge summary"]];
    let b = '';
    P.forEach((p, i) => { const x = 8 + (i % 2) * 176, y = 34 + Math.floor(i / 2) * 52; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="168" height="44" rx="10" fill="#f8f9fc"/></g>${t(x + 20, y + 28, p[0], { size: 15 })}${t(x + 98, y + 19, p[1], { size: 9.4, w: 900, fill: '#17806f' })}${f(x + 98, y + 35, p[2], { size: 9, fill: INK, w: 700 })}`; });
    return svg(360, 274, `${title("Parts of the medical record (chart)")}${b}
      ${f(180, 264, "The chart is a legal document; every page carries the patient’s name, age, physician and admission date", { size: 8.8, fill: INK, w: 700 })}`, "medical record", shadow(sh));
  };

  A['prescription-anatomy'] = () => {
    const sh = nid();
    const pad = `<g filter="url(#${sh})"><rect x="12" y="34" width="166" height="200" rx="8" fill="${C.paper}" stroke="${C.paperLine}" stroke-width="1.4"/></g>
      <path d="M12 62 H178" stroke="${C.paperLine}"/>${t(95, 54, 'Dr. ____   DEA # ____', { size: 8.5, w: 700, fill: MUTED })}
      ${t(26, 98, 'Rx', { size: 22, w: 900, fill: C.indigo, anchor: 'start', italic: true })}${t(60, 96, 'Tagamet 800 mg', { size: 11, w: 900, anchor: 'start' })}
      ${t(26, 132, 'Sig: i po tid', { size: 11.5, w: 800, anchor: 'start', fill: '#17806f' })}
      ${t(26, 164, 'Disp: #30', { size: 11, w: 800, anchor: 'start' })}${t(26, 194, 'Refill: 2x', { size: 11, w: 800, anchor: 'start' })}
      <path d="M28 220 C46 208 66 230 92 214 S130 208 162 218" stroke="#3b6fd4" stroke-width="1.6" fill="none"/>`;
    const ex = (y, fa) => `<path d="M184 ${y - 4} H196" stroke="${LINE}" stroke-width="1.4"/>${f(350, y, fa, { size: 9.2, fill: INK, w: 700, anchor: 'end' })}`;
    return svg(360, 262, `${title("Reading a prescription")}${pad}
      ${ex(78, "The prescription sign; Rx means “take”")}${ex(100, "drug name and strength of each tablet")}${ex(136, "label directions (Sig): one tablet")}${f(350, 152, "by mouth (po), three times a day (tid)", { size: 9.2, fill: INK, w: 700, anchor: 'end' })}
      ${ex(168, "dispense 30 (Disp)")}${ex(198, "the prescription can be refilled twice")}${ex(224, "physician’s signature; no prescription without one")}
      ${f(180, 254, "Sample from chapter 1 of Fremgen; Tagamet reduces stomach acid", { size: 8.6 })}`, "prescription", shadow(sh));
  };

  A['dose-clock'] = () => {
    const x = h => 40 + (h - 6) / 18 * 290;
    const row = (y, ab, fa, hs) => `${t(22, y + 4, ab, { size: 11, w: 900, fill: C.indigo })}<path d="M40 ${y} H330" stroke="#e1e4ef" stroke-width="10" stroke-linecap="round"/>${hs.map(h => `<circle cx="${x(h).toFixed(1)}" cy="${y}" r="6.5" fill="${C.teal}"/>`).join('')}${f(340, y + 4, fa, { size: 8.6, anchor: 'end', fill: INK })}`;
    let tick = '';
    [6, 9, 12, 15, 18, 21, 24].forEach(h => { tick += `<path d="M${x(h)} 40 V48" stroke="${LINE}"/>` + t(x(h), 37, (h % 24 || 24) + ':00', { size: 8, w: 700, fill: MUTED }); });
    return svg(360, 262, `${title("Dosing-frequency abbreviations")}${tick}
      ${row(66, 'daily', '', [9])}${row(94, 'bid', '', [9, 21])}${row(122, 'tid', '', [8, 14, 20])}${row(150, 'qid', '', [8, 12, 16, 20])}${row(178, 'q6h', '', [6, 12, 18, 24])}${row(206, 'hs', '', [22])}
      ${f(180, 236, "Don’t write qd or qod; write daily and every other day", { size: 9.2, fill: C.red, w: 800 })}
      ${f(180, 254, "ac means before meals and pc after meals; prn means as needed", { size: 8.8, fill: INK })}`, "Dosing frequency");
  };

  A['route-abbr'] = () => {
    const sh = nid();
    const c = (i, ic, ab, en, fa) => { const x = 8 + (i % 4) * 87, y = 34 + Math.floor(i / 4) * 100; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="92" rx="12" fill="#e9f7f4"/></g>${t(x + 41, y + 26, ic, { size: 18 })}${t(x + 41, y + 48, ab, { size: 12, w: 900, fill: '#17806f', sym: true })}${t(x + 41, y + 64, en, { size: 7.8, w: 700, fill: MUTED })}${f(x + 41, y + 80, fa, { size: 8.6, fill: INK, w: 700 })}`; };
    return svg(360, 246, `${title("Abbreviations for drug routes")}
      ${c(0, '👄', 'po', 'per os', "by mouth")}${c(1, '👅', 'SL', 'sublingual', "under the tongue")}${c(2, '💉', 'IV', 'intravenous', "into the vein")}${c(3, '💪', 'IM', 'intramuscular', "into the muscle")}
      ${c(4, '🩹', 'subcut', 'subcutaneous', "subcutaneously")}${c(5, '💧', 'gtt', 'drops', "drops")}${c(6, '👁️', 'OD / OS', 'right / left eye', "right / left eye")}${c(7, '🚫', 'NPO', 'nothing by mouth', "nothing by mouth")}`, "Routes", shadow(sh));
  };

  A['do-not-use'] = () => {
    const rows = [['do not write', 'write instead', "danger"], ['qd, q.d.', 'daily', "mistaken for qid"], ['qod', 'every other day', "mistaken for qd and qid"], ['U, u', 'unit', "read as 0 or 4"], ['IU', 'international unit', "read as IV or 10"], ['1.0 mg', '1 mg', "tenfold dose"], ['.5 mg', '0.5 mg', "tenfold dose"], ['MS, MSO4', 'morphine sulfate', "mistaken for magnesium sulfate"]];
    return svg(360, 262, `${title("Do-not-use abbreviations in prescriptions")}
      ${table(12, 32, [86, 116, 134], 25, rows, { colFill: [C.red, '#17806f', INK], size: 9.4, sym: [true, false, false] })}
      ${f(180, 244, "Never invent an abbreviation; if in doubt, write it out", { size: 9, fill: INK, w: 800 })}`, "Do-not-use abbreviations");
  };

  A['drug-names'] = () => {
    const sh = nid();
    const lvl = (y, w, c, en, fa, ex) => `<g filter="url(#${sh})"><rect x="${180 - w / 2}" y="${y}" width="${w}" height="50" rx="12" fill="${c}"/></g>${t(180, y + 19, en, { size: 11, w: 900 })}${f(180, y + 33, fa, { size: 9, fill: INK, w: 700 })}${t(180, y + 45, ex, { size: 8.2, w: 700, fill: MUTED })}`;
    return svg(360, 236, `${title("Three names for one drug")}
      ${lvl(34, 330, '#eef0fb', 'chemical name', "chemical name: a long formula", '2-p-isobutylphenyl propionic acid')}
      ${lvl(92, 230, '#e9f7f4', 'generic (nonproprietary) name', "generic name: only one", 'ibuprofen')}
      ${lvl(150, 300, '#fff3e0', 'brand (proprietary) name', "brand name: one per company", 'Advil®   Motrin®   Nuprin®')}
      ${f(180, 224, "OTC means without a prescription; the generic is usually cheaper", { size: 9, fill: INK, w: 700 })}`, "Drug names", shadow(sh));
  };

  A['care-settings'] = () => {
    const sh = nid();
    const S = [['🏥', 'acute care hospital', "general hospital"], ['🧠', 'specialty hospital', "specialty hospital"], ['🛏️', 'long-term care', "nursing home, long-term care"], ['🚶', 'ambulatory care', "outpatient, no overnight stay"],
      ['🩺', "physician's office", "doctor’s office"], ['🏠', 'home health care', "care at home"], ['🏋️', 'rehabilitation', "rehabilitation"], ['🕊️', 'hospice', "end-of-life care"]];
    let b = '';
    S.forEach((s, i) => { const x = 8 + (i % 2) * 176, y = 34 + Math.floor(i / 2) * 52; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="168" height="44" rx="10" fill="#f3f4fd"/></g>${t(x + 20, y + 28, s[0], { size: 15 })}${t(x + 98, y + 19, s[1], { size: 9.4, w: 900, fill: C.indigo })}${f(x + 98, y + 35, s[2], { size: 9, fill: INK, w: 700 })}`; });
    return svg(360, 252, `${title("Health-care settings")}${b}`, "Care settings", shadow(sh));
  };

  A['chart-note'] = () => {
    const sh = nid();
    const line = (y, parts) => { let x = 22, out = ''; parts.forEach(p => { const hl = p[1]; out += `<tspan${hl ? ` fill="${C.red}" font-weight="900"` : ''}>${p[0]}</tspan>`; }); return `<text x="${x}" y="${y}" font-size="11" font-weight="700" fill="${INK}" direction="ltr" font-family="Nunito, system-ui, sans-serif">${out}</text>`; };
    return svg(360, 268, `${title("An emergency note full of abbreviations")}
      <g filter="url(#${sh})"><rect x="10" y="32" width="340" height="132" rx="10" fill="${C.paper}" stroke="${C.paperLine}"/></g>
      ${line(56, [['68 '], ['y/o', 1], [' male '], ['c/o', 1], [' angina with '], ['SOB', 1], ['.']])}
      ${line(80, [['Productive cough 3 weeks; T 102.4; '], ['EKG', 1], [' normal.']])}
      ${line(104, [['Impression: '], ['R/O', 1], [' pneumonia.']])}
      ${line(128, [['Plan: '], ['CXR', 1], [' AP/Lat, '], ['CBC', 1], [', chem panel.']])}
      ${line(152, [['Hx: '], ['HTN', 1], ['; '], ['NKDA', 1], ['.']])}
      ${table(10, 176, [70, 100, 70, 100], 22, [['y/o', "years old", 'c/o', "complaining of"], ['SOB', "shortness of breath", 'R/O', "rule out"], ['CXR', "chest X-ray", 'NKDA', "no drug allergies"]], { size: 9, sym: [true, false, true, false], head: '#fff' })}`, "Clinical note", shadow(sh));
  };
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۰: الفبای زبان پزشکی (پایه همه دنیاها)
 * سطح ۱: زبان پزشکی و ریشه تاریخی • سطح ۲: چهار جزء واژه • سطح ۳: ترجمه و تلفظ
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'bs', sym: 'Ab', name: "The ABCs of Medical Language", short: "ABCs", sub: "Where medical language comes from, the four parts of a word, combining vowels, translating from the suffix and correct pronunciation",
    color: '#4B4FC4', dark: '#33369A', light: '#ECEEFD',
    levels: ["Medical language and its history", "The four word parts", "Translation and pronunciation"],
    gens: EA.genIds('bs'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'bs1', title: "Why a medical language?", icon: '💬', items: [
          L("A shared language", `${fig('cartoon', [], "When there is no shared language")}${e('<b>medical terminology</b>')} is the precise language of medicine. Instead of “tummy ache, maybe a kidney stone”, physicians, nurses and pharmacists speak with one exact word and understand each other without error.`),
          L("Words that are built", `Most medical words are built from a few Greek and Latin pieces. Learn the pieces and you can work out thousands of words without memorising them.${pearl("Chapter 1 of Fremgen points out that one spelling mistake or one bad abbreviation in a drug dose can put a patient’s life at risk.")}${memo("Medical language is like a puzzle: few pieces, countless words.")}`),
          M("What is the most important reason to learn medical terminology?", ["precise, error-free communication among the care team", "a nicer-looking chart", "hiding the diagnosis from the patient", "shortening drug names"], "A shared language reduces errors.", null, F('cartoon', [])),
          T("Most medical words are built from Greek and Latin pieces.", true, "That is why knowing the pieces lets you work out a new word."),
          M("If you know the pieces of a word…", ["you can work out new words too", "you understand only that one word", "you never need a dictionary again", "pronunciation no longer matters"], "Word building is the key to understanding unfamiliar words."),
          B("The precise language of medicine is called ___.", ['medical terminology', 'medical record', 'pharmacology'], 'medical terminology.'),
          P("Match each term to its meaning", [['medical terminology', "the language of medicine"], ['word building', "joining word parts into new terms"], ['etymology', "word origin"], ['medical dictionary', "reference book of medical terms"]], "Basic terms."),
          T("A spelling mistake in a drug name is harmless.", false, "A misspelling or a wrong abbreviation can lead to a medication error."),
          S("Spell the word for the language of medicine (one word)", 'terminology', 'termin + ‎-ology‎.', 'termin…'),
          N('t2f:bs')
        ]
      },
      {
        id: 'bs2', title: "Greek and Latin", icon: '🏛️', items: [
          L("Two ancient languages", `${fig('greek-latin', [], "Greek and Latin pairs")}Most organs have two roots: one Greek and one Latin. The Greek root ${e('nephr/o')} and the Latin root ${e('ren/o')} both mean kidney.${fig('kidney-roots', ["kidney, ureter, bladder and urethra"], "The kidney has two roots")}`),
          L("Names with a story", `${fig('coccyx', ["the spine down to the tailbone"], "Where the tailbone got its name")}Look at the spine: the ${e('<b>coccyx</b>')} (tailbone) is named for its likeness to a cuckoo’s beak. The Greeks called cancer ${e('karkinos')}, meaning “crab”; ${e('carcinoma')} comes from there.${memo("The Greek name shows up mostly in diseases and procedures, the Latin name mostly in adjectives: nephritis but renal.")}`),
          M("Which root, like nephr/o, means kidney?", ['ren/o', 'pulmon/o', 'cutane/o', 'or/o'], "ren/o is the Latin root for kidney.", null, F('greek-latin', [])),
          M(`${e('<b>pulmonary</b>')} means…`, ["of the lungs", "of the kidney", "of the skin", "of the mouth"], "pulmon/o is the Latin root for lung; its Greek root is pneum/o."),
          P("Match each Greek root to its Latin partner", [['nephr/o', 'ren/o'], ['pneum/o', 'pulmon/o'], ['dermat/o', 'cutane/o'], ['stomat/o', 'or/o']], "Greek and Latin pairs."),
          T("The word carcinoma comes from the Greek word for crab.", true, "karkinos means crab, and cancer."),
          B("The Latin adjective for “of the kidney” is ___.", ['renal', 'nephric', 'nephritis'], 'ren/o + ‎-al‎.'),
          M("What did the tailbone (coccyx) get its name from?", ["a cuckoo’s beak", "a fish tail", "a bird’s feather", "a deer’s antler"], "One of many words named for the shape of things.", null, F('coccyx', [])),
          S("Spell the Latin adjective meaning “pertaining to the kidney”", 'renal', 'ren/o + ‎-al‎.', 're…'),
          N('m2r:bs')
        ]
      },
      {
        id: 'bs3', title: "From Hippocrates to today", icon: '📜', items: [
          L("The father of medicine", `${fig('hippocratic-oath', ["Hippocratic Oath"], "Hippocratic Oath")}Hippocrates, the Greek physician (460–377 BC), is called “the father of medicine”. He brought order to medicine, and the ${e('<b>Hippocratic Oath</b>')} is still the foundation of medical ethics.`),
          L("New words are still being made", `${fig('medicine-timeline', [], "Some great steps in medicine")}From the stethoscope in 1816 to the face transplant in 2008, every new discovery has been named with the same ancient pieces, such as ${e('electrocardiogram')}.${pearl("Chapter 1 of Fremgen points out that word building is still the main way new medical discoveries are named.")}`),
          M("What title is Hippocrates known by?", ["The father of medicine", "discoverer of germs", "inventor of the stethoscope", "the first heart surgeon"], "Hippocrates is called the father of medicine.", null, F('hippocratic-oath', [])),
          O("Put these discoveries in time order", ['stethoscope', 'x-rays', 'penicillin', 'heart transplant'], "1816, 1895, 1928, 1967."),
          T("New medical words are built from the same Greek and Latin roots.", true, "Such as electrocardiogram or laparoscopy."),
          M("What is the Hippocratic Oath mainly about?", ["the ethics and duties of a physician", "a list of drugs", "the anatomy of the heart", "a surgical technique"], "It is the foundation of professional medical ethics."),
          B("Hippocrates was a physician from ___.", ["Greece", "Egypt", "Persia"], "Hippocrates was Greek."),
          P("Match each discovery to its year", [['stethoscope', "1816"], ['insulin', "1922"], ['penicillin', "1928"], ['face transplant', "2008"]], "History of medicine.", F('medicine-timeline', [])),
          S("Spell the antibiotic discovered in 1928", 'penicillin', "Two l’s and two i’s.", 'penic…'),
          N('f2t:bs')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'bs4', title: "Four pieces", icon: '🧩', items: [
          L("Four parts", `${fig('four-parts', [], "The four word parts")}Every medical word is built from these pieces: ${e('<b>prefix</b>')}, ${e('<b>word root</b>')}, ${e('<b>combining vowel</b>')} and ${e('<b>suffix</b>')}. Not every word has all four parts, but there is almost always a root.`),
          L("Where does each piece go?", `${fig('puzzle-prs', ["prefix, root, suffix"], "Where the pieces go")}A prefix always comes first and tells position, number, time or state. A suffix always comes last and tells the disease, procedure or part of speech.${wb('epi-', 'gastr/o', '-ic')} → pertaining to above the stomach${memo("A prefix comes before the root and a suffix after it; their names tell you where they go.")}`),
          M("The part of a word that carries its core meaning…", ['word root', 'prefix', 'suffix', 'combining vowel'], "The root is the core of the meaning.", null, F('four-parts', [])),
          M(`In ${e('<b>epigastric</b>')}, what is epi-?`, ["prefix", "root", "suffix", "combining vowel"], "epi- comes before the root gastr."),
          T("A suffix always comes at the end of a word.", true, "The suffix is at the end of the word."),
          O("Put the pieces in order from the start to the end of a word", ['prefix', 'word root', 'combining vowel', 'suffix'], "Prefix, root, vowel, suffix."),
          P("Match each part to its job", [['prefix', "position, number or time"], ['word root', "core meaning"], ['combining vowel', "easier pronunciation"], ['suffix', "disease or procedure"]], "The job of each part."),
          W("Build the term that means “pertaining to above the stomach”", ['epi-', 'gastr/o', '-ic'], ['hypo-', '-itis', 'enter/o'], 'epigastric.'),
          S("Spell the word for the part added to the end of a word", 'suffix', "Two f’s.", 'suf…'),
          N('t2f:bs')
        ]
      },
      {
        id: 'bs5', title: "Root and combining form", icon: '🔵', items: [
          L("Root + vowel", `${fig('puzzle-cf', ["root and vowel, the combining form"], "Combining form")}When a combining vowel (usually ${e('o')}) attaches to a root, it forms a ${e('<b>combining form</b>')}. It is written with a slash: ${e('cardi/o')}, ${e('gastr/o')}, ${e('oste/o')}.`),
          L("Some examples", `${tbl([["Combining form", "Meaning"], [e('cardi/o'), "heart"], [e('gastr/o'), "stomach"], [e('oste/o'), "bone"], [e('arthr/o'), "joint"], [e('splen/o'), "spleen"]])}${memo("The slash in cardi/o means “this o sometimes stays and sometimes goes”.")}`),
          M("A combining form is…", ["a root with its combining vowel", "a prefix with a suffix", "two suffixes in a row", "a complete word"], 'word root + combining vowel = combining form.', null, F('puzzle-cf', [])),
          M(`In ${e('<b>gastr/o</b>')}, what is the letter o?`, ["combining vowel", "prefix", "suffix", "root"], 'combining vowel.'),
          T("The combining vowel is usually the letter o.", true, "Sometimes it is i or e, as in pelv/i."),
          P("Match each combining form to its meaning", [['cardi/o', "heart"], ['gastr/o', "stomach"], ['oste/o', "bone"], ['splen/o', "spleen"]], "Combining forms."),
          B("A combining form is written with a ___ between the root and the vowel.", ["slash (/)", "hyphen (-)", "full stop (.)"], "As in cardi/o."),
          M(`${e('<b>arthr/o</b>')} means…`, ["joint", "artery", "bone", "muscle"], "arthr/o is joint; arthritis is inflammation of a joint."),
          S("Write the combining form for “heart” without the slash", 'cardio', 'cardi/o.', 'card…'),
          N('r2m:bs')
        ]
      },
      {
        id: 'bs6', title: "The combining-vowel rule", icon: '🟠', items: [
          L("Stay or go?", `${fig('cv-rule', [], "The combining-vowel rule")}If the suffix starts with a consonant, the ${e('o')} stays: ${e('gastroscopy')}. If the suffix starts with a vowel, the ${e('o')} is dropped: ${e('gastritis')}, not gastroitis.`),
          L("Between two roots", `${fig('puzzle-word', ["root, vowel, suffix"], "The vowel between root and suffix")}Between two roots the combining vowel always stays, even if the second root starts with a vowel; for example, ${e('<b>osteoarthritis</b>')} is built from ${e('oste/o + arthr/o + -itis')}.${memo("A suffix that starts with a vowel pushes the o out; a second root never does.")}`),
          M("Which spelling is correct?", ['gastritis', 'gastroitis', 'gastoritis', 'gastritiss'], "-itis starts with a vowel, so the o is dropped.", null, F('cv-rule', [])),
          M("Which spelling is correct?", ['gastroscopy', 'gastrscopy', 'gastriscopy', 'gastroscopie'], "-scopy starts with a consonant, so the o stays."),
          T("In osteoarthritis, the o between oste and arthr is dropped.", false, "Between two roots the combining vowel stays."),
          B("Before a suffix that starts with a vowel, the combining vowel ___.", ["is dropped", "is doubled", "turns into a"], 'gastr + ‎-itis‎ = gastritis.'),
          W("Build the term that means “inflammation of bone and joint”", ['oste/o', 'arthr/o', '-itis'], ['gastr/o', '-algia', 'cardi/o'], 'osteoarthritis.'),
          P("Match each combination to its correct word", [['gastr/o + -itis', 'gastritis'], ['gastr/o + -scopy', 'gastroscopy'], ['gastr/o + -ectomy', 'gastrectomy'], ['gastr/o + -algia', 'gastralgia']], "The o was dropped before a vowel."),
          S("Spell the term for “stomach pain” (with -algia)", 'gastralgia', "gastr + -algia, with no o.", 'gastr…'),
          N('wb:bs')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'bs7', title: "word with two or more roots", icon: '🔗', items: [
          L("Two roots in one word", `${fig('word-parts', [], "Five pieces of one word")}A word with more than one root is a ${e('<b>compound word</b>')}: ${e('gastroenterology')} has two roots, stomach and intestine.${fig('english-puzzle', ["English compound words"], "like sunflower in English")}`),
          L("An example from the textbook", `${fig('gastroduodenostomy', ["stomach and duodenum"], 'gastroduodenostomy')}${wb('gastr/o', 'duoden/o', '-stomy')} → a new opening between the stomach and the duodenum${memo("Read a compound word like two English words stuck together: sun + flower, gastro + entero.")}`),
          M("Which word is a compound word?", ['osteoarthritis', 'gastritis', 'arthritis', 'carcinoma'], "It has two roots, oste and arthr.", null, F('word-parts', [])),
          M(`${e('<b>gastroenterology</b>')} means…`, ["study of the stomach and intestines", "inflammation of the stomach and intestines", "removal of the stomach", "stomach pain"], "-logy means study of."),
          T("gastroduodenostomy means making a new opening between the stomach and the duodenum.", true, "-stomy means a new opening.", F('gastroduodenostomy', [])),
          W("Build the term that means “study of the stomach and intestines”", ['gastr/o', 'enter/o', '-logy'], ['cardi/o', '-itis', 'oste/o'], 'gastroenterology.'),
          B("A word with more than one root is a ___.", ['compound word', 'acronym', 'eponym'], 'compound word.'),
          P("Match each term to its roots", [['osteoarthritis', "bone + joint"], ['gastroenterology', "stomach + intestine"], ['gastroduodenostomy', "stomach + duodenum"], ['electrocardiogram', "electricity + heart"]], "Compound words."),
          S("Spell the term for “specialist in the stomach and intestines”", 'gastroenterologist', 'gastr/o + enter/o + ‎-logist‎.', 'gastroentero…'),
          N('d2t:bs')
        ]
      },
      {
        id: 'bs8', title: "Read from the suffix", icon: '🔍', items: [
          L("Three translation steps", `${fig('translate-steps', [], "Three translation steps")}To work out a meaning, read the suffix first, then the prefix and finally the root: ${e('pericarditis')} → inflammation, around, heart → “inflammation around the heart”.`),
          L("The suffix makes the meaning", `${fig('suffix-puzzle', ["the root, base of the puzzle"], "the root is the base; the suffixes are separate pieces")}With one root and a few suffixes you have several new words: ${e('gastritis')}, ${e('gastralgia')}, ${e('gastrectomy')} and ${e('gastroscopy')}.${pearl("In a case study in Cohen, a 22-year-old student named David had epigastric pain and underwent gastroduodenoscopy; both terms can be worked out with these same three steps.")}`),
          M("Where do you start when translating a word?", ["suffix", "prefix", "root", "the first letter"], "Suffix first, then prefix, then root.", null, F('translate-steps', [])),
          O("Put the translation steps in order", ['suffix', 'prefix', 'word root'], "Suffix, prefix, root."),
          M(`${e('<b>gastrectomy</b>')} means…`, ["removal of the stomach", "stomach inflammation", "looking inside the stomach", "stomach pain"], "-ectomy means removal."),
          P("Match each term to its meaning", [['gastritis', "stomach inflammation"], ['gastralgia', "stomach ache"], ['gastrectomy', "removal of the stomach"], ['gastroscopy', "looking inside the stomach"]], "One root, several suffixes.", F('suffix-puzzle', [])),
          T("In pericarditis, we start the meaning with “around”.", false, "We start with the suffix -itis (inflammation)."),
          B("The epi- in epigastric means ___.", ["upon, above", "below", "within"], "epigastric means the region above the stomach."),
          S("Spell the term for “looking inside the stomach”", 'gastroscopy', 'gastr/o + ‎-scopy‎.', 'gastro…'),
          N('wb:bs')
        ]
      },
      {
        id: 'bs9', title: "Pronunciation and silent letters", icon: '🗣️', items: [
          L("Letters you don’t hear", `${fig('silent-letters', [], "Surprising pronunciations")}At the start of a word, ${e('p')} before ${e('s')}, ${e('n')} and ${e('t')} is silent: ${e('psychology')}, ${e('pneumonia')}, ${e('ptosis')}. ${e('ch')} sounds like ${e('k')} and ${e('x')} like ${e('z')}.`),
          L("The stressed syllable", `${fig('stress-marks', [], "Pronunciation guide")}In a pronunciation guide, the stressed syllable is written in capitals: ${e('FEM-or-al')}. A straight line over a vowel means it is long, and a curve means it is short.${memo("A p at the start of a word is like the p in swimming pool: it’s there, but you don’t hear it!")}`),
          M(`How does ${e('<b>pneumonia</b>')} begin?`, ["with an n sound", "with a p sound", "with an f sound", "with an s sound"], "The p is silent: noo-MOH-nee-ah.", null, F('silent-letters', [])),
          M(`In ${e('<b>chronic</b>')}, what sound does ch make?`, ['k', 'ch', 'sh', 's'], 'KRON-ik.'),
          T("In ptosis the p is not pronounced.", true, 'TOH-sis.'),
          P("Match each word to its opening sound", [['psychology', 's'], ['xeroderma', 'z'], ['phlegm', 'f'], ['gingivitis', 'j']], "How words begin."),
          B("In cytology, c before y makes the ___ sound.", ["s", "k", "ch"], "c is soft before e, i and y."),
          M("If a word starts with a “z” sound, which letter might it start with?", ['x', 'p', 'c', 'g'], "xeroderma is pronounced with a z sound."),
          S("Spell the word for thick mucus coughed up from the airways", 'phlegm', "ph sounds like f; the g is silent.", 'phl…'),
          N('sp:bs')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۱: ریشه‌ها، نقشه بدن
 * سطح ۱: ریشه‌های اندام‌ها • سطح ۲: از یاخته تا دستگاه • سطح ۳: رنگ، خون و باکتری
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'rt', sym: 'Rt', name: "Roots: A Map of the Body", short: "Roots", sub: "Roots of the head, trunk and limbs, from cell to system, and roots for colours, blood and bacterial shapes",
    color: '#2B86C5', dark: '#1F5590', light: '#E3F0FB',
    levels: ["Roots of the organs", "From cell to system", "Colour, blood and bacteria"],
    gens: EA.genIds('rt'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'rt1', title: "Roots of the head", icon: '🙂', items: [
          L("Map of the face", `${fig('head-roots', [], "Roots of the head and face")}${e('cephal/o')} is the head and ${e('encephal/o')} the brain inside the head (en- means within). ${e('ophthalm/o')} is the eye, ${e('ot/o')} the ear, ${e('rhin/o')} the nose and ${e('stomat/o')} the mouth.`),
          L("From root to disease", `${fig('mri-brain', ["brain scan showing inflammation"], "encephalitis on imaging")}${wb('encephal/o', '-itis')} → inflammation of the brain${wb('rhin/o', '-plasty')} → surgical repair of the nose${memo("en-cephal means “inside the head”, so encephal/o is the brain.")}`),
          M("Which root means brain?", ['encephal/o', 'cephal/o', 'ot/o', 'rhin/o'], "cephal/o is the head and encephal/o the brain.", null, F('head-roots', [])),
          M(`${e('<b>otitis</b>')} means…`, ["ear inflammation", "eye inflammation", "inflammation of the nose", "inflammation of the mouth"], "ot/o is the ear."),
          P("Match each root to its organ", [['ophthalm/o', "eye"], ['rhin/o', "nose"], ['stomat/o', "mouth"], ['gingiv/o', "gums"]], "Roots of the face."),
          T("encephalitis means inflammation of the brain.", true, 'encephal/o + ‎-itis‎.', F('mri-brain', [])),
          W("Build the term that means “inflammation of the nose”", ['rhin/o', '-itis'], ['ot/o', '-algia', 'stomat/o'], 'rhinitis.'),
          B("The study and treatment of eye diseases is ___.", ['ophthalmology', 'otology', 'rhinology'], 'ophthalm/o + ‎-logy‎.'),
          S("Spell the term for the medical specialty of the eye", 'ophthalmology', "Both ph and th.", 'ophth…'),
          N('m2r:rt')
        ]
      },
      {
        id: 'rt2', title: "Roots of the trunk", icon: '🫀', items: [
          L("Organs inside the trunk", `${fig('trunk-roots', [], "Roots of the trunk organs")}${e('cardi/o')} is the heart, ${e('pneum/o')} and ${e('pulmon/o')} the lung, ${e('hepat/o')} the liver, ${e('gastr/o')} the stomach, ${e('splen/o')} the spleen, ${e('enter/o')} the small intestine, ${e('col/o')} the large intestine and ${e('cyst/o')} the bladder.`),
          L("A big liver", `${fig('hepatomegaly', ["normal liver and enlarged liver"], 'hepatomegaly')}${wb('hepat/o', '-megaly')} → enlarged liver${wb('cardi/o', '-megaly')} → enlarged heart${memo("Remember hepat/o through hepatitis, inflammation of the liver.")}`),
          M("Which root means liver?", ['hepat/o', 'splen/o', 'gastr/o', 'col/o'], "hepatitis is inflammation of the liver.", null, F('trunk-roots', [])),
          M(`${e('<b>hepatomegaly</b>')} means…`, ["enlarged liver", "liver inflammation", "liver tumour", "liver pain"], "-megaly means enlargement.", null, F('hepatomegaly', [])),
          P("Match each root to its organ", [['cardi/o', "heart"], ['splen/o', "spleen"], ['enter/o', "small intestine"], ['cyst/o', "bladder"]], "Roots of the trunk."),
          T("enter/o means large intestine.", false, "enter/o is the small intestine and col/o the large intestine."),
          W("Build the term that means “enlarged heart”", ['cardi/o', '-megaly'], ['hepat/o', '-itis', 'splen/o'], 'cardiomegaly.'),
          B("Looking inside the large intestine with an endoscope is ___.", ['colonoscopy', 'gastroscopy', 'arthroscopy'], 'colon/o + ‎-scopy‎.'),
          S("Spell the term for “inflammation of the liver”", 'hepatitis', 'hepat/o + ‎-itis‎.', 'hepat…'),
          N('t2f:rt')
        ]
      },
      {
        id: 'rt3', title: "Skin to bone", icon: '🦴', items: [
          L("Layer by layer", `${fig('tissue-layers', [], "The root of each layer")}From the outside in: ${e('dermat/o')} skin, ${e('lip/o')} fat, ${e('my/o')} muscle, ${e('oste/o')} bone. ${e('angi/o')} vessels and ${e('neur/o')} nerves run through these layers.`),
          L("Two diseases, two roots", `${fig('osteoporosis', ["normal bone and porous bone"], 'osteoporosis')}${wb('oste/o', 'por/o', '-osis')} → porous, brittle bones${fig('contact-dermatitis', ["contact dermatitis from poison ivy"], 'contact dermatitis')}${wb('dermat/o', '-itis')} → inflammation of the skin${memo("Remember my/o through “myalgia”, muscle pain.")}`),
          M("Which root means muscle?", ['my/o', 'myel/o', 'oste/o', 'lip/o'], "myel/o is the spinal cord or bone marrow, not muscle.", null, F('tissue-layers', [])),
          M(`${e('<b>osteoporosis</b>')} means…`, ["porous, brittle bones", "bone inflammation", "bone tumour", "softening of bone"], "por/o means pore: bone full of holes.", null, F('osteoporosis', [])),
          P("Match each root to its layer", [['dermat/o', "skin"], ['lip/o', "fat"], ['my/o', "muscle"], ['oste/o', "bone"]], "Layers."),
          T("A lipoma is a tumour of fatty tissue.", true, 'lip/o + ‎-oma‎.'),
          W("Build the term that means “muscle pain”", ['my/o', '-algia'], ['oste/o', '-itis', 'lip/o'], 'myalgia.'),
          B("Inflammation of the skin is called ___.", ['dermatitis', 'dermatosis', 'arthritis'], 'dermat/o + ‎-itis‎.'),
          S("Spell the term for porous, brittle bones", 'osteoporosis', 'oste/o + por/o + ‎-osis‎.', 'osteo…'),
          N('wb:rt')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'rt4', title: "Cell, tissue, organ", icon: '🔬', items: [
          L("Four levels", `${fig('cell-to-system', [], "From cell to system")}The body starts with the ${e('<b>cell</b>')}; cells make up ${e('<b>tissue</b>')}, tissues make up an ${e('<b>organ</b>')} and organs make up a ${e('<b>system</b>')}.`),
          L("The science of each level", `${tbl([["root", "Term", "Meaning"], [e('cyt/o'), e('cytology'), "study of cells"], [e('hist/o'), e('histology'), "study of tissues"], [e('path/o'), e('pathology'), "study of disease (pathology)"]])}${fig('lumen', ["artery and vein under the microscope"], "vessel tissue under the microscope")}${memo("Don’t confuse hist/o with “history”; hist/o means tissue.")}`),
          M("Which root do we use for tissue?", ['hist/o', 'cyt/o', 'path/o', 'physi/o'], "histology is the study of tissues.", null, F('cell-to-system', [])),
          O("Put them in order from small to large", ['cell', 'tissue', 'organ', 'system'], "Cell, tissue, organ, system."),
          M(`${e('<b>pathology</b>')} means…`, ["the study of disease and tissue changes", "the study of cells", "the study of body function", "the study of drugs"], "path/o means disease."),
          T("Anatomy is the study of body structure and physiology the study of its function.", true, "Two basic medical sciences."),
          P("Match each science to its subject", [['cytology', "cell"], ['histology', "tissue"], ['anatomy', "body structure"], ['physiology', "body function"]], "Basic sciences."),
          B("The study of cancer and tumours is ___.", ['oncology', 'cytology', 'histology'], "onc/o means tumour."),
          S("Spell the term for the study of tissues", 'histology', 'hist/o + ‎-logy‎.', 'hist…'),
          N('d2t:rt')
        ]
      },
      {
        id: 'rt5', title: "Body systems", icon: '🧭', items: [
          L("Eleven systems", `${fig('body-systems', [], "Body systems")}Each system has several organs that work together; for example, ${e('<b>musculoskeletal</b>')} means 206 bones and more than 600 muscles, and ${e('<b>gastrointestinal (GI)</b>')} means the digestive system.`),
          L("Systems working together", `${fig('diabetic-neuropathy', ["reduced blood supply and nerve damage"], 'diabetic neuropathy')}Systems don’t work alone. In ${e('diabetic neuropathy')}, high blood sugar damages both the vessels and the nerves of the foot.${pearl("Chapter 11 of the Dummies book notes that the body systems work as a team, and a disease of one involves the others too.")}`),
          M("What is the system of bones and muscles called?", ['musculoskeletal', 'integumentary', 'gastrointestinal', 'genitourinary'], 'muscul/o + skelet/o.', null, F('body-systems', [])),
          M(`${e('<b>integumentary</b>')} refers to the system of…`, ["the skin and its appendages", "digestion", "urine", "of the nerves"], "Skin, hair, nails and glands."),
          P("Match each system to its name", [['gastrointestinal', "of the stomach and intestines"], ['genitourinary', "genital and urinary"], ['musculoskeletal', "muscles and bones"], ['integumentary', "of the skin"]], "System names."),
          T("neuropathy means nerve disease.", true, 'neur/o + ‎-pathy‎.', F('diabetic-neuropathy', [])),
          B("The abbreviation GI means ___.", ['gastrointestinal', 'genitourinary', 'general internal'], "The digestive system."),
          W("Build the term that means “nerve disease”", ['neur/o', '-pathy'], ['my/o', '-itis', 'cardi/o'], 'neuropathy.'),
          S("Spell the adjective meaning “of the stomach and intestines”", 'gastrointestinal', 'gastr/o + intestin + ‎-al‎.', 'gastro…'),
          N('ab:rt')
        ]
      },
      {
        id: 'rt6', title: "One root, many words", icon: '🌱', items: [
          L("The neur/o family", `${tbl([["Term", "Meaning"], [e('neuritis'), "nerve inflammation"], [e('neuralgia'), "nerve pain"], [e('neuroma'), "nerve tumour"], [e('neuropathy'), "nerve disease"], [e('neurologist'), "nervous system specialist (neurologist)"]])}One root with five suffixes makes five words.`),
          L("The cardi/o family", `${fig('heart-valves', ["heart valves"], "the heart from above")}${wb('cardi/o', '-logy')} → study of the heart${wb('my/o', 'cardi/o', '-itis')} → inflammation of the heart muscle${memo("Take one root and try every suffix after it; it’s the best word-building practice.")}`),
          M(`${e('<b>neuralgia</b>')} means…`, ["nerve pain", "nerve inflammation", "nerve tumour", "nerve disease"], "-algia means pain."),
          M(`${e('<b>myocarditis</b>')} means…`, ["inflammation of the heart muscle", "enlarged heart", "muscle pain", "heart tumour"], 'my/o + cardi/o + ‎-itis‎.', null, F('heart-valves', [])),
          P("Match each term to its meaning", [['neuritis', "nerve inflammation"], ['neuroma', "nerve tumour"], ['cardiomegaly', "enlarged heart"], ['cardiology', "study of the heart"]], "One root, many words."),
          T("A neurologist is a heart specialist.", false, "A neurologist is a nervous-system specialist; a cardiologist is a heart specialist."),
          W("Build the term that means “nerve tumour”", ['neur/o', '-oma'], ['cardi/o', '-algia', 'lip/o'], 'neuroma.'),
          B("Disease of the heart is called ___.", ['cardiopathy', 'neuropathy', 'cardiology'], 'cardi/o + ‎-pathy‎.'),
          S("Spell the term for “nerve pain”", 'neuralgia', 'neur/o + ‎-algia‎.', 'neur…'),
          N('wb:rt')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'rt7', title: "Colour roots", icon: '🎨', items: [
          L("Colour palette", `${fig('color-wheel', [], "Colour roots")}${e('erythr/o')} is red, ${e('leuk/o')} white, ${e('cyan/o')} blue, ${e('melan/o')} black and ${e('xanth/o')} yellow.${fig('color-palette', ["palette of colour roots"], "The textbook palette")}`),
          L("Colour on the skin", `${fig('cyanosis-toes', ["bluish toes"], 'cyanosis')}${e('<b>cyanosis</b>')} is bluish skin from lack of oxygen. Yellowing of the skin and eyes is called ${e('<b>jaundice</b>')}.${fig('jaundice', ["yellow skin"], 'jaundice')}${memo("Remember melan/o through melanin, the dark pigment of the skin.")}`),
          M("Which root means blue?", ['cyan/o', 'erythr/o', 'xanth/o', 'leuk/o'], "cyanosis is bluish discolouration.", null, F('color-wheel', [])),
          M(`${e('<b>melanoma</b>')} means…`, ["black tumour of pigment cells", "white blood cell", "yellow skin", "purple spot"], 'melan/o + ‎-oma‎.'),
          P("Match each root to its colour", [['erythr/o', "red"], ['leuk/o', "white"], ['xanth/o', "yellow"], ['chlor/o', "green"]], "Colours."),
          T("Cyanosis is a bluish colour of the skin.", true, "A sign of low oxygen.", F('cyanosis-toes', [])),
          B("Poliomyelitis affects the ___ matter of the spinal cord.", ["grey", "white", "red"], "poli/o means grey."),
          M("What is yellowing of the skin and eyes called?", ['jaundice', 'cyanosis', 'purpura', 'albino'], "jaundice, or icterus.", null, F('jaundice', [])),
          S("Spell the term for bluish skin from lack of oxygen", 'cyanosis', 'cyan/o + ‎-osis‎.', 'cyan…'),
          N('m2r:rt')
        ]
      },
      {
        id: 'rt8', title: "Colour in the blood", icon: '🩸', items: [
          L("Red and white", `${fig('blood-words', [], "-cyte, -emia and -penia")}${wb('erythr/o', '-cyte')} → red blood cell${wb('leuk/o', '-cyte')} → white blood cell`),
          L("Three blood suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-cyte'), "cell", e('leukocyte')], [e('-emia'), "blood condition", e('leukemia')], [e('-penia'), "deficiency", e('leukopenia')]])}${memo("-penia sounds like “penny”, a small coin: it means too little.")}`),
          M(`${e('<b>erythrocyte</b>')} means…`, ["red blood cell", "white blood cell", "platelet", "nerve cell"], "erythr/o is red and -cyte is cell.", null, F('blood-words', [])),
          M(`${e('<b>leukopenia</b>')} means…`, ["too few white blood cells", "too many white blood cells", "cancer of white blood cells", "red blood cell"], "-penia means deficiency."),
          P("Match each term to its meaning", [['leukocyte', "white blood cell"], ['leukemia', "cancer of white blood cells"], ['leukopenia', "too few white blood cells"], ['anemia', "low red blood cells (anaemia)"]], "Blood words."),
          T("leukemia means a shortage of red blood cells.", false, "Leukemia is cancer of the white blood cells; a shortage of red blood cells is anemia."),
          W("Build the term that means “white blood cell”", ['leuk/o', '-cyte'], ['erythr/o', '-emia', 'cyan/o'], 'leukocyte.'),
          B("The abbreviation RBC means ___.", ["red blood cell", "white blood cell", "complete blood count"], 'red blood cell.'),
          S("Spell the term for “red blood cell”", 'erythrocyte', 'erythr/o + ‎-cyte‎.', 'erythro…'),
          N('ab:rt')
        ]
      },
      {
        id: 'rt9', title: "Bacterial shapes", icon: '🦠', items: [
          L("Round or rod-shaped", `${fig('bacteria-shapes', [], "Bacterial shapes")}A round bacterium is a ${e('<b>coccus</b>')} (plural: cocci) and a rod-shaped one is a ${e('<b>bacillus</b>')} (plural: bacilli). The prefix of the name gives the arrangement: ${e('dipl/o')} in pairs, ${e('staphyl/o')} in grape-like clusters and ${e('strept/o')} in chains.`),
          L("Bacteria in the textbook", `${fig('bacteria', ["staphylococcus, streptococcus, bacillus…"], "Bacterial shapes")}${pearl("Chapter 3 of Stanfield notes that not all bacteria cause disease; some help us digest food and make yoghurt.")}${fig('tonsillectomy', ["an inflamed tonsil and its removal"], "inflamed tonsil, often from streptococci")}`),
          M("A round bacterium that grows in grape-like clusters…", ['staphylococcus', 'streptococcus', 'diplococcus', 'bacillus'], "staphyl/o means cluster.", null, F('bacteria-shapes', [])),
          M(`What shape is ${e('<b>bacillus</b>')}?`, ["rod-shaped", "round", "spiral", "in clusters"], "A bacillus is a rod-shaped bacterium."),
          P("Match each prefix to its arrangement", [['dipl/o', "in pairs"], ['staphyl/o', "in clusters"], ['strept/o', "in chains"], ['bacteri/o', "bacteria"]], "Bacteria names.", F('bacteria', [])),
          T("The plural of coccus is cocci.", true, "-us becomes -i."),
          B("Round bacteria in chains are called ___.", ['streptococcus', 'staphylococcus', 'diplococcus'], "strept/o means twisted chain."),
          M(`${e('<b>tonsillitis</b>')} means…`, ["tonsil inflammation", "removal of the tonsil", "ear inflammation", "sore throat"], 'tonsill/o + ‎-itis‎.', null, F('tonsillectomy', [])),
          S("Spell the term for the study of bacteria", 'bacteriology', 'bacteri/o + ‎-logy‎.', 'bacterio…'),
          N('f2t:rt')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۲: پسوندها
 * سطح ۱: پسوندهای بیماری و نشانه • سطح ۲: پسوندهای تشخیص • سطح ۳: جراحی، صفت و رشته
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'sf', sym: 'Sf', name: "Suffixes", short: "Suffixes", sub: "Suffixes for diseases and symptoms, diagnostic instruments and procedures, surgery, adjective endings and specialty suffixes",
    color: '#8A5CB3', dark: '#5E3586', light: '#F1E8FA',
    levels: ["Diseases and symptoms", "Diagnosis and measurement", "Surgery, adjectives and specialties"],
    gens: EA.genIds('sf'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'sf1', title: "Four families", icon: '🗂️', items: [
          L("The suffix makes the meaning", `${fig('suffix-families', [], "Four suffix families")}Suffixes come in four families: disease and condition (${e('-itis')}), diagnosis (${e('-scopy')}), surgery (${e('-ectomy')}) and grammar or specialty (${e('-al')}, ${e('-logy')}). Know the family and you can guess what kind of word it is.`),
          L("One root, four families", `${tbl([["Term", "Family", "Meaning"], [e('arthritis'), "disease", "joint inflammation"], [e('arthroscopy'), "diagnosis", "looking inside a joint"], [e('arthroplasty'), "surgery", "joint repair"], [e('arthralgia'), "symptom", "joint pain"]])}${memo("A suffix is like a label at the end: it tells you whether it’s a disease, a test or an operation.")}`),
          M("Which family does the suffix -ectomy belong to?", ["surgery", "disease", "diagnosis", "adjective ending"], "It means surgical removal.", null, F('suffix-families', [])),
          M(`${e('<b>arthroscopy</b>')} means…`, ["looking inside a joint with an instrument", "joint inflammation", "removal of a joint", "joint pain"], "-scopy means viewing with an instrument."),
          P("Match each suffix to its family", [['-itis', "disease"], ['-scopy', "diagnosis"], ['-ectomy', "surgery"], ['-al', "adjective ending"]], "Families."),
          T("The suffix always tells us what kind of word it is.", true, "For example, -logy means a field of study and -itis an inflammatory disease."),
          B("The suffix ___ means study of.", ['-logy', '-logist', '-lysis'], "As in cardiology."),
          O("Put these words in order from “disease” to “treatment”", ['arthritis', 'arthroscopy', 'arthroplasty'], "Inflammation, viewing, repair."),
          S("Write the suffix for “inflammation” without the hyphen", 'itis', '‎-itis‎.', 'it…'),
          N('r2m:sf')
        ]
      },
      {
        id: 'sf2', title: "Inflammation, pain, enlargement", icon: '🔥', items: [
          L("Six common suffixes", `${fig('condition-suffixes', [], "Suffixes for diseases and symptoms")}${e('-itis')} is inflammation, ${e('-osis')} an abnormal condition, ${e('-algia')} and ${e('-dynia')} pain, ${e('-megaly')} enlargement, ${e('-oma')} a tumour and ${e('-pathy')} disease.`),
          L("Pain and clots", `${fig('gastralgia', ["man with a stomach ache"], "gastralgia or gastrodynia")}${e('gastralgia')} and ${e('gastrodynia')} both mean stomach ache; two suffixes with the same meaning.${fig('thrombosis', ["clot inside a vessel"], 'thrombosis')}${wb('thromb/o', '-osis')} → condition of a clot inside a vessel${memo("-osis means “condition”; on its own it doesn’t say what the disease is; the root does.")}`),
          M("Which suffix means enlargement?", ['-megaly', '-malacia', '-oma', '-algia'], "hepatomegaly means enlargement of the liver.", null, F('condition-suffixes', [])),
          M(`${e('<b>gastrodynia</b>')} means…`, ["stomach ache", "stomach inflammation", "enlarged stomach", "stomach tumour"], "-dynia means the same as -algia.", null, F('gastralgia', [])),
          P("Match each suffix to its meaning", [['-itis', "inflammation"], ['-osis', "abnormal condition"], ['-oma', "tumour"], ['-pathy', "disease"]], "Disease suffixes."),
          T("thrombosis means the condition of having a clot in a vessel.", true, 'thromb/o + ‎-osis‎.', F('thrombosis', [])),
          W("Build the term that means “earache”", ['ot/o', '-algia'], ['rhin/o', '-itis', '-oma'], 'otalgia.'),
          B("Headache is called ___.", ['cephalalgia', 'cephalitis', 'encephaloma'], 'cephal/o + ‎-algia‎.'),
          S("Spell the term for “liver tumour”", 'hepatoma', 'hepat/o + ‎-oma‎.', 'hepat…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf3', title: "Flow, bursting, deficiency", icon: '💧', items: [
          L("The rrh family", `${fig('rrh-family', [], "three suffixes with rrh")}${e('-rrhea')} is flow or discharge (${e('rhinorrhea')}, a runny nose), ${e('-rrhage')} is bursting forth of blood (${e('hemorrhage')}) and ${e('-rrhaphy')} is suturing.`),
          L("Hardening, softening, paralysis", `${tbl([["suffix", "Meaning", "Example"], [e('-sclerosis'), "hardening", e('arteriosclerosis')], [e('-malacia'), "softening", e('osteomalacia')], [e('-stenosis'), "narrowing", e('mitral stenosis')], [e('-plegia'), "paralysis", e('hemiplegia')], [e('-penia'), "deficiency", e('leukopenia')]])}${memo("Remember -malacia through “mellow”: soft and limp.")}`),
          M(`${e('<b>hemorrhage</b>')} means…`, ["heavy bleeding", "oozing of blood", "suturing a vessel", "low red blood cells (anaemia)"], "-rrhage means bursting forth.", null, F('rrh-family', [])),
          M(`${e('<b>osteomalacia</b>')} means…`, ["softening of bone", "hardening of bone", "porous, brittle bones", "bone inflammation"], "-malacia means softening."),
          P("Match each suffix to its meaning", [['-rrhea', "flow, discharge"], ['-rrhage', "bursting forth of blood"], ['-sclerosis', "hardening"], ['-plegia', "paralysis"]], "Suffixes."),
          T("diarrhea is built from dia- (through) and -rrhea (flow).", true, "A watery flow from the bowel."),
          B("Hardening of the arteries is called ___.", ['arteriosclerosis', 'arteriomalacia', 'arteriostenosis'], 'arteri/o + ‎-sclerosis‎.'),
          W("Build the term that means “runny nose”", ['rhin/o', '-rrhea'], ['ot/o', '-rrhage', '-itis'], 'rhinorrhea.'),
          S("Spell the term for “heavy bleeding”", 'hemorrhage', "hem/o + -rrhage; two r’s.", 'hemor…'),
          N('t2f:sf')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'sf4', title: "Instrument or procedure?", icon: '🔭', items: [
          L("The diagnostic trio", `${fig('scope-gram', [], "instrument, procedure and result")}${e('-scope')} is a viewing instrument and ${e('-scopy')} the procedure of viewing. ${e('-graph')} is a recording machine, ${e('-graphy')} the recording procedure and ${e('-gram')} the record itself.`),
          L("heart tracing (ECG)", `${fig('ecg-machine', ["ECG machine"], "electrocardiograph: the machine")}${fig('ecg-strip', ["heart tracing (ECG)"], "electrocardiogram: the resulting tracing")}${memo("A -gram is something you can hold in your hand; a -graph is the machine that makes it.")}`),
          M(`What is ${e('<b>electrocardiogram</b>')}?`, ["the recorded tracing of the heart’s electrical activity", "the machine that records the heart tracing", "the procedure of recording the heart tracing", "heart surgery"], "-gram means the record, the tracing itself.", null, F('ecg-strip', [])),
          M("What is an instrument for looking inside the body called?", ['endoscope', 'endoscopy', 'endogram', 'endography'], "-scope is the instrument."),
          P("Match each suffix to its meaning", [['-scope', "viewing instrument"], ['-scopy', "viewing procedure"], ['-graph', "recording machine"], ['-gram', "the recorded image"]], "Instrument and procedure.", F('scope-gram', [])),
          T("An electrocardiograph is the paper tracing of the heart.", false, "-graph is the machine; the paper tracing is the electrocardiogram.", F('ecg-machine', [])),
          B("Looking inside the abdomen through small incisions is ___.", ['laparoscopy', 'laparoscope', 'laparotomy'], 'lapar/o + ‎-scopy‎.'),
          O("Order them from instrument to result", ['electrocardiograph', 'electrocardiography', 'electrocardiogram'], "Machine, procedure, tracing."),
          S("Spell the term for “looking inside with a scope”", 'endoscopy', 'endo- + ‎-scopy‎.', 'endo…'),
          N('f2t:sf')
        ]
      },
      {
        id: 'sf5', title: "Images", icon: '🩻', items: [
          L("Radiography", `${fig('radiography', ["machine, procedure and image"], "radiograph, radiography and radiogram")}${e('<b>radiography</b>')} is the procedure of taking pictures with X-rays, and its result is a ${e('radiograph')} or ${e('radiogram')}.`),
          L("Breast X-ray and CT", `${fig('mammogram', ["chest muscle, fatty tissue and breast tissue"], 'mammogram')}${wb('mamm/o', '-gram')} → breast image${fig('ct-scan', ["CT of the abdomen and liver"], 'computed tomography')}${memo("Remember mamm/o through “mamma”: the breast that feeds a baby.")}`),
          M(`${e('<b>mammography</b>')} means…`, ["the procedure of breast X-ray imaging", "a breast X-ray picture", "a breast X-ray machine", "removal of the breast"], "-graphy means the recording procedure.", null, F('mammogram', [])),
          M("What is the result of radiography called?", ['radiograph', 'radiography', 'radiology', 'radiologist'], "A radiograph or radiogram is the picture itself.", null, F('radiography', [])),
          P("Match each term to its meaning", [['mammogram', "breast image"], ['radiography', "X-ray imaging procedure"], ['radiologist', "imaging specialist"], ['radiology', "the science of X-ray imaging"]], "The radi/o family."),
          T("In CT, an X-ray beam rotates around the body and captures slices at different depths.", true, 'computed tomography.', F('ct-scan', [])),
          B("The abbreviation CXR means ___.", ["chest X-ray", "abdominal CT", "heart tracing (ECG)"], 'chest x-ray.'),
          W("Build the term that means “breast image”", ['mamm/o', '-gram'], ['radi/o', '-scopy', '-graph'], 'mammogram.'),
          S("Spell the term for “X-ray imaging procedure”", 'radiography', 'radi/o + ‎-graphy‎.', 'radio…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf6', title: "Sampling and measuring", icon: '📏', items: [
          L("Measuring", `${e('-meter')} is a measuring instrument and ${e('-metry')} the measuring procedure: ${e('thermometer')} is a thermometer and ${e('spirometry')} measures breathing.${fig('spirometry', ["measuring breathing"], 'spirometry')}`),
          L("Taking a sample", `${fig('punch-biopsy', ["punch tool and skin cut"], 'punch biopsy')}${wb('bi/o', '-opsy')} → viewing living tissue, that is, a biopsy (${e('Bx')})${wb('thorac/o', '-centesis')} → drawing fluid from the chest with a needle${memo("bi/o means life; a biopsy is a look at living tissue.")}`),
          M(`${e('<b>spirometry</b>')} means…`, ["measuring breathing", "lung X-ray", "looking at the bronchi", "lung inflammation"], 'spir/o + ‎-metry‎.', null, F('spirometry', [])),
          M(`${e('<b>biopsy</b>')} means…`, ["removing living tissue for examination", "removing a whole organ", "stitching a wound", "injecting a drug"], 'bi/o + ‎-opsy‎.', null, F('punch-biopsy', [])),
          P("Match each suffix to its meaning", [['-meter', "measuring instrument"], ['-metry', "measuring procedure"], ['-opsy', "viewing"], ['-centesis', "drawing fluid with a needle"]], "Measuring suffixes."),
          T("A thermometer is a procedure for measuring temperature.", false, "-meter is an instrument; a thermometer measures temperature."),
          B("The abbreviation Bx means ___.", ["tissue sample", "fracture", "diagnosis"], 'biopsy.'),
          W("Build the term that means “drawing fluid from the chest”", ['thorac/o', '-centesis'], ['pneum/o', '-scopy', '-metry'], 'thoracentesis.'),
          S("Spell the instrument that measures body temperature", 'thermometer', 'therm/o + ‎-meter‎.', 'thermo…'),
          N('d2t:sf')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'sf7', title: "Removal, incision, opening", icon: '✂️', items: [
          L("Three similar suffixes", `${fig('cut-suffixes', [], "Surgical suffixes")}${e('-ectomy')} means taking an organ out, ${e('-tomy')} means cutting into it and ${e('-stomy')} means making a new opening. One letter different, a completely different operation.`),
          L("Appendectomy", `${fig('appendectomy', ["before and after removal of the appendix"], 'appendectomy')}${wb('append/o', '-ectomy')} → removal of the appendix${wb('trache/o', '-stomy')} → a new opening into the windpipe${memo("-ectomy: “ec” as in exit, out; -stomy: “stoma”, a mouth-like opening. -tomy is only a cut.")}`),
          M(`${e('<b>appendectomy</b>')} means…`, ["removal of the appendix", "incision into the appendix", "inflammation of the appendix", "an opening in the appendix"], "-ectomy means removal.", null, F('appendectomy', [])),
          M(`What is the difference between ${e('tracheotomy')} and ${e('tracheostomy')}?`, ["The first is an incision into the windpipe; the second makes a lasting opening in it", "they are the same", "the first is removal of the windpipe", "the second is inflammation of the windpipe"], "-tomy is an incision and -stomy an opening."),
          P("Match each suffix to its meaning", [['-ectomy', "removal"], ['-tomy', "incision"], ['-stomy', "new opening"], ['-pexy', "surgical fixation"]], "Surgical suffixes.", F('cut-suffixes', [])),
          T("A colostomy is an opening of the large intestine onto the abdomen.", true, 'col/o + ‎-stomy‎.'),
          B("Removal of the spleen is ___.", ['splenectomy', 'splenotomy', 'splenostomy'], 'splen/o + ‎-ectomy‎.'),
          W("Build the term that means “removal of the tonsils”", ['tonsill/o', '-ectomy'], ['-tomy', 'ot/o', '-itis'], 'tonsillectomy.'),
          S("Spell the term for “removal of the appendix”", 'appendectomy', 'append/o + ‎-ectomy‎.', 'append…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf8', title: "Repair, suture, fixation", icon: '🪡', items: [
          L("Repairing and reshaping", `${fig('rhinoplasty', ["before and after nose surgery"], 'rhinoplasty')}${e('-plasty')} means surgical repair or reconstruction: ${e('rhinoplasty')} is surgical repair of the nose and ${e('angioplasty')} repair of a vessel.`),
          L("Suture and fixation", `${fig('sutures', ["several kinds of sutures"], 'sutures')}${e('-rrhaphy')} means suturing (${e('myorrhaphy')}, suturing a muscle) and ${e('-pexy')} means fixing an organ in place (${e('nephropexy')}, fixing a dropped kidney).${memo("Remember -pexy as “pin”: the organ is pinned in place.")}`),
          M(`${e('<b>rhinoplasty</b>')} means…`, ["surgical repair of the nose", "removal of the nose", "inflammation of the nose", "runny nose"], 'rhin/o + ‎-plasty‎.', null, F('rhinoplasty', [])),
          M("Which suffix means suturing?", ['-rrhaphy', '-rrhea', '-rrhage', '-pexy'], "myorrhaphy means suturing a muscle.", null, F('sutures', [])),
          P("Match each term to its meaning", [['angioplasty', "repair of a vessel"], ['myorrhaphy', "suturing a muscle"], ['nephropexy', "fixing a floating kidney"], ['lithotripsy', "stone crushing"]], "Repair operations."),
          T("Suture is used both for the act of stitching and for the stitch itself.", true, "To suture means to sew the edges of a wound together."),
          B("Crushing a stone with waves or a laser is ___.", ['lithotripsy', 'lithotomy', 'lithiasis'], 'lith/o + ‎-tripsy‎.'),
          W("Build the term that means “repair of a vessel”", ['angi/o', '-plasty'], ['-pexy', 'my/o', '-rrhaphy'], 'angioplasty.'),
          S("Spell the term for “fixing a floating kidney”", 'nephropexy', 'nephr/o + ‎-pexy‎.', 'nephro…'),
          N('m2r:sf')
        ]
      },
      {
        id: 'sf9', title: "Adjectives and specialists", icon: '🎓', items: [
          L("Adjective endings", `${fig('adjective-suffixes', [], "Adjective suffixes")}${e('-al')}, ${e('-ic')}, ${e('-ar')}, ${e('-ary')}, ${e('-ous')} and ${e('-eal')} all mean “pertaining to”. The adjective of ${e('neuron')} is ${e('neuronal')} and of ${e('pelvis')} is ${e('pelvic')}.${fig('neuron', ["nerve cell under the microscope"], 'neuron ← neuronal')}`),
          L("Specialty and specialist", `${fig('specialist-suffixes', [], "Specialty suffixes")}${fig('anesthesia-sites', ["injection sites for spinal and epidural anaesthesia"], 'anesthesia ← anesthesiologist')}${e('-ole')} and ${e('-ule')} are diminutives: an ${e('arteriole')} is a small artery and a ${e('venule')} a small vein.${memo("-iatrics is the specialty and -ician the person in it: pediatrics and pediatrician.")}`),
          M(`What is the adjective of ${e('pelvis')}?`, ['pelvic', 'pelvical', 'pelvous', 'pelvary'], 'pelv/i + ‎-ic‎.', null, F('adjective-suffixes', [])),
          M(`Who is a ${e('<b>pediatrician</b>')}?`, ["a physician who specialises in children", "a foot doctor", "the study of children", "a doctor for older adults"], "ped/o means child.", null, F('specialist-suffixes', [])),
          P("Match each term to its meaning", [['geriatrics', "care of older adults"], ['psychiatry', "medicine of mental disorders"], ['arteriole', "small artery"], ['venule', "small vein"]], "Specialties and diminutives.", F('small-vessels', [])),
          T("Psychiatry and physiatry are the same specialty.", false, "Psychiatry treats mental illness; physiatry is rehabilitation medicine."),
          B("The physician who gives anaesthesia is an ___.", ['anesthesiologist', 'anesthesia', 'analgesic'], 'an- + esthesi/o + ‎-logist‎.', F('anesthesia-sites', [])),
          W("Build the term that means “care of older adults”", ['ger/o', '-iatrics'], ['ped/o', '-logist', '-ician'], 'geriatrics.'),
          S("Write the adjective of “neuron”", 'neuronal', 'neuron + ‎-al‎.', 'neuro…'),
          N('d2t:sf')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۳: پیشوندها
 * سطح ۱: عدد و زمان • سطح ۲: جا، تزریق و جهت • سطح ۳: نفی، متضادها، حرکت و وضعیت
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'pf', sym: 'Pf', name: "Prefixes", short: "Prefixes", sub: "Prefixes for number and time, position and direction, injection routes, negation and opposition, opposite pairs, movements and patient positions",
    color: '#C9A12C', dark: '#8A6A00', light: '#FFF6D8',
    levels: ["Number and time", "Position and direction", "Negation, opposites and movement"],
    gens: EA.genIds('pf'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'pf1', title: "One, two, three, four", icon: '🔢', items: [
          L("Number prefixes", `${fig('number-prefixes', [], "Number prefixes")}The prefixes ${e('uni-')} and ${e('mono-')} mean one, ${e('bi-')} and ${e('di-')} two, ${e('tri-')} three and ${e('quadri-')} and ${e('tetra-')} four. ${e('unilateral')} means one-sided and ${e('bilateral')} two-sided.`),
          L("Two cusps, three cusps", `${fig('heart-valves', ["tricuspid and bicuspid valves"], "heart valves from above")}The valve on the right side of the heart has three cusps: the ${e('<b>tricuspid</b>')}. The valve on the left side has two: the ${e('<b>bicuspid</b>')}.${memo("The tri valve is on the right, with the three-lobed right lung; the bi valve is on the left, with the two-lobed left lung. A trick from the Dummies book!")}`),
          M(`${e('<b>bilateral</b>')} means…`, ["on both sides", "on one side", "between the two sides", "behind"], "bi- means two.", null, F('number-prefixes', [])),
          M("Which heart valve has three cusps?", ['tricuspid', 'bicuspid', 'unicuspid', 'quadricuspid'], "tri- means three.", null, F('heart-valves', [])),
          P("Match each prefix to its number", [['uni-', "one"], ['bi-', "two"], ['tri-', "three"], ['quadri-', "four"]], "Number prefixes."),
          T("quadriplegia means paralysis of all four limbs.", true, 'quadri- + ‎-plegia‎.'),
          B("The three-headed arm muscle is called the ___.", ['triceps', 'biceps', 'quadriceps'], "tri- means three."),
          W("Build the term that means “on one side”", ['uni-', 'later/o', '-al'], ['bi-', 'tri-', '-itis'], 'unilateral.'),
          S("Spell the term for “on both sides”", 'bilateral', 'bi- + later/o + ‎-al‎.', 'bilat…'),
          N('m2r:pf')
        ]
      },
      {
        id: 'pf2', title: "Half, many, all, none", icon: '◐', items: [
          L("Halves", `${fig('hemispheres', ["right and left hemispheres of the brain"], 'hemisphere')}The prefixes ${e('hemi-')} and ${e('semi-')} mean half. Each half of the brain is a ${e('<b>hemisphere</b>')}, and ${e('<b>hemiplegia</b>')} means paralysis of one half of the body.${fig('hemiplegia', ["paralysis of the green half of the body"], 'hemiplegia')}`),
          L("Many, all and none", `${tbl([["prefix", "Meaning", "Example"], [e('multi-, poly-'), "many, much", e('multicellular')], [e('pan-'), "all", e('pancytopenia')], [e('primi-'), "first", e('primigravida')], [e('nulli-'), "none", e('nullipara')]])}${fig('fungus', ["a many-celled fungus"], 'multicellular')}${memo("The prefix pan- as in “pandemic”, everywhere: it means all.")}`),
          M(`${e('<b>hemiplegia</b>')} means…`, ["paralysis of one half of the body", "paralysis of all four limbs", "half-blind", "one-sided headache"], "hemi- means half.", null, F('hemiplegia', [])),
          M(`${e('<b>pancytopenia</b>')} means…`, ["shortage of all blood cells", "too few white blood cells", "too many cells", "low red blood cells (anaemia)"], "pan- all, cyt/o cell, -penia deficiency."),
          P("Match each prefix to its meaning", [['hemi-', "half"], ['multi-', "many"], ['pan-', "all"], ['nulli-', "none"]], "Quantity prefixes."),
          T("A primigravida is a woman pregnant for the first time.", true, "primi- means first."),
          B("An organism made of many cells is ___.", ['multicellular', 'unicellular', 'intracellular'], 'multi- + cellul/o + ‎-ar‎.', F('fungus', [])),
          M("What is each half of the brain called?", ['hemisphere', 'semicircle', 'hemiplegia', 'bilateral'], 'hemi- + sphere.', null, F('hemispheres', [])),
          S("Spell the term for “excessive urination”", 'polyuria', 'poly- + ur/o + ‎-ia‎.', 'poly…'),
          N('t2f:pf')
        ]
      },
      {
        id: 'pf3', title: "Before and after", icon: '⏳', items: [
          L("Before, during, after", `${fig('time-prefixes', [], "Time prefixes")}The prefixes ${e('pre-')} and ${e('ante-')} mean before and ${e('post-')} means after: ${e('preoperative')} is before surgery and ${e('postoperative')} after surgery. ${e('neo-')} means new; a ${e('neonate')} is a newborn.${fig('synapse', ["presynaptic cell, synapse and postsynaptic cell"], "presynaptic and postsynaptic")}`),
          L("before birth", `${fig('fetal-ultrasound', ["fetal ultrasound at 15 weeks"], "prenatal care with ultrasound")}${wb('pre-', 'nat/o', '-al')} → before birth${pearl("In the Cohen case study of a hip fracture, Esther received a painkiller injection before surgery (preoperative), and after surgery (postoperative) her thigh was kept in abduction.")}`),
          M(`${e('<b>postoperative</b>')} means…`, ["after surgery", "before surgery", "during surgery", "without surgery"], "post- means after.", null, F('time-prefixes', [])),
          M(`Who is a ${e('<b>neonate</b>')}?`, ["a baby in its first 4 weeks", "a pregnant woman", "a schoolchild", "an older adult"], "neo- means new."),
          O("Put the stages in time order", ['preoperative', 'operation', 'postoperative'], "Before, during, after."),
          P("Match each prefix to its meaning", [['pre-', "before"], ['post-', "after"], ['neo-', "new"], ['primi-', "first"]], "Time prefixes."),
          T("antecubital means behind the elbow.", false, "ante- means in front; antecubital means in front of the elbow."),
          B("Care during pregnancy is called ___ care.", ['prenatal', 'postnatal', 'neonatal'], 'pre- + nat/o + ‎-al‎.', F('fetal-ultrasound', [])),
          S("Spell the term for “before birth”", 'prenatal', 'pre- + nat/o + ‎-al‎.', 'pre…'),
          N('wb:pf')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'pf4', title: "Within, outside, around", icon: '⭕', items: [
          L("Where things are", `${fig('position-prefixes', [], "Position prefixes")}The prefixes ${e('intra-')} and ${e('endo-')} mean within, ${e('extra-')} and ${e('exo-')} outside, ${e('peri-')} and ${e('circum-')} around, ${e('inter-')} between, ${e('epi-')} upon, ${e('sub-')} and ${e('hypo-')} below, ${e('retro-')} behind and ${e('trans-')} through.`),
          L("Endocrine and exocrine", `${vs(['endocrine', "endocrine: hormones go into the blood"], ['exocrine', "exocrine: secretion through a duct"])}${wb('peri-', 'odont/o', '-al')} → around a tooth${wb('inter-', 'cost/o', '-al')} → between the ribs${memo("intra- means within and inter- means between; one letter changes the place.")}`),
          M(`${e('<b>intercostal</b>')} means…`, ["between the ribs", "inside a rib", "below a rib", "around a rib"], "inter- means between.", null, F('position-prefixes', [])),
          M(`${e('<b>epidermis</b>')} means…`, ["the layer on top of the skin", "under the skin", "into the skin", "around the skin"], "epi- means upon."),
          P("Match each prefix to its meaning", [['intra-', "within"], ['inter-', "between"], ['peri-', "around"], ['retro-', "behind"]], "Position prefixes."),
          T("The pericardium is a sac around the heart.", true, 'peri- + cardi/o.'),
          W("Build the term that means “between the ribs”", ['inter-', 'cost/o', '-al'], ['intra-', 'peri-', '-itis'], 'intercostal.'),
          B("A pregnancy outside the uterus is called an ___ pregnancy.", ['ectopic', 'endocrine', 'intrauterine'], "ecto- means outside, out of place."),
          S("Spell the term for “behind the abdominal lining”", 'retroperitoneal', 'retro- + peritone/o + ‎-al‎.', 'retro…'),
          N('wb:pf')
        ]
      },
      {
        id: 'pf5', title: "Injection routes", icon: '💉', items: [
          L("Where does the needle go?", `${fig('injection-routes', [], "Injection routes")}${e('<b>intradermal (ID)</b>')} is into the skin, ${e('<b>subcutaneous</b>')} under the skin into the fat, ${e('<b>intramuscular (IM)</b>')} into the muscle and ${e('<b>intravenous (IV)</b>')} into a vein.`),
          L("In the textbook", `${fig('injections', ["intravenous, intradermal and intramuscular injection"], "Three kinds of injection")}${e('<b>parenteral</b>')} means giving a drug by any route other than the digestive tract, usually by injection. ${e('<b>hypodermic</b>')} means under the skin; the injection needle is also called a ${e('hypodermic needle')}.${memo("Remember ven/o through “vein”, the blue vessel on the back of your hand.")}`),
          M("What is an injection into a muscle called?", ['intramuscular', 'intravenous', 'intradermal', 'subcutaneous'], 'intra- + muscul/o + ‎-ar‎.', null, F('injection-routes', [])),
          M(`${e('<b>subcutaneous</b>')} means…`, ["under the skin", "into the skin", "into the vein", "on the skin"], "sub- means below.", null, F('injections', [])),
          P("Match each abbreviation to its injection route", [['IV', "into the vein"], ['IM', "into the muscle"], ['ID', "into the skin"], ['subcut', "under the skin"]], "Injection routes."),
          T("parenteral means a drug given by mouth.", false, "parenteral means any route except the digestive tract; by mouth is po."),
          O("Order the injections from shallowest to deepest", ['intradermal', 'subcutaneous', 'intramuscular'], "Skin, fat, muscle."),
          W("Build the term that means “into a vein”", ['intra-', 'ven/o', '-ous'], ['sub-', 'dermat/o', '-al'], 'intravenous.'),
          S("Spell the term for “under the skin”", 'subcutaneous', 'sub- + cutane/o + ‎-ous‎.', 'subcut…'),
          N('ab:pf')
        ]
      },
      {
        id: 'pf6', title: "Directions on the body", icon: '🧭', items: [
          L("anatomic position", `${fig('anatomic-position', ["standing, facing forward, palms forward"], 'anatomic position')}Every direction is measured from the ${e('<b>anatomic position</b>')}: standing, facing forward, arms at the sides and palms facing forward.`),
          L("Paired directions", `${fig('direction-terms', [], "Directions on the body")}${tbl([["Direction", "Meaning"], [e('superior / inferior'), "above / below"], [e('anterior / posterior'), "front / back"], [e('medial / lateral'), "toward the midline / toward the side"], [e('proximal / distal'), "nearer / farther from the trunk"]])}${fig('transection', ["cross-section of the body"], "transection: a cross cut")}${memo("proximal as in proximity, nearness; distal as in distance.")}`),
          M("The direction toward the head…", ['superior', 'inferior', 'distal', 'lateral'], "superior means upper.", null, F('direction-terms', [])),
          M("How is the wrist positioned relative to the elbow?", ['distal', 'proximal', 'medial', 'superior'], "The wrist is farther from the trunk."),
          P("Match each direction to its opposite", [['anterior', 'posterior'], ['medial', 'lateral'], ['proximal', 'distal'], ['superior', 'inferior']], "Paired directions."),
          T("In anatomic position the palms face backward.", false, "The palms face forward.", F('anatomic-position', [])),
          B("The direction toward the midline of the body is ___.", ['medial', 'lateral', 'distal'], 'medial.'),
          M("What is a cut across the body or an organ called?", ['transection', 'bisection', 'dissection', 'resection'], "trans- means through.", null, F('transection', [])),
          S("Spell the term for “nearer the trunk”", 'proximal', "As in proximity.", 'proxi…'),
          N('d2t:pf')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'pf7', title: "Negation and opposition", icon: '🚫', items: [
          L("Without and against", `${fig('negation-prefixes', [], "Negation prefixes")}The prefixes ${e('a-')} and ${e('an-')} mean without: ${e('afebrile')} is without fever and ${e('anemia')} is a lack of red blood cells. ${e('anti-')} and ${e('contra-')} mean against: ${e('antibiotic')} and ${e('contraindication')}.`),
          L("Without oxygen", `${fig('anoxia-hand', ["hand with bluish nails"], "anoxia and cyanosis")}${wb('an-', 'ox/o', '-ia')} → absence of oxygen<br>The prefix ${e('dis-')} means apart (${e('dislocation')}, a displaced joint) and the prefix ${e('de-')} means remove (${e('dehydration')}, loss of water).${memo("an- is used before a vowel and a- before a consonant, as in anemia and afebrile.")}`),
          M(`${e('<b>afebrile</b>')} means…`, ["without fever", "high fever", "fever-reducing", "after a fever"], "a- means without.", null, F('negation-prefixes', [])),
          M(`${e('<b>anoxia</b>')} means…`, ["absence of oxygen in the tissues", "too much oxygen", "bluish skin", "shortness of breath"], 'an- + ox/o + ‎-ia‎.', null, F('anoxia-hand', [])),
          P("Match each term to its meaning", [['antibiotic', "against bacteria"], ['contraindication', "reason not to use a treatment"], ['dislocation', "displaced joint"], ['dehydration', "loss of body water"]], "Negation and opposition."),
          T("A contraindication is a condition that makes a treatment inadvisable or dangerous.", true, "contra- means against."),
          B("Poor nutrition is called ___.", ['malnutrition', 'dysnutrition', 'antinutrition'], "mal- means bad."),
          W("Build the term that means “absence of oxygen”", ['an-', 'ox/o', '-ia'], ['anti-', 'hyper-', '-itis'], 'anoxia.'),
          S("Spell the term for “without fever”", 'afebrile', 'a- + febrile.', 'afeb…'),
          N('t2f:pf')
        ]
      },
      {
        id: 'pf8', title: "Opposite pairs", icon: '↔️', items: [
          L("Opposites", `${fig('opposite-prefixes', [], "Opposite prefixes")}Many prefixes come in opposite pairs: ${e('brady-')} slow and ${e('tachy-')} fast, ${e('hypo-')} low and ${e('hyper-')} high, ${e('eu-')} good and ${e('dys-')} bad.`),
          L("Shrinking and growing", `${fig('atrophy-hypertrophy', ["A: wasted muscle, B: enlarged muscle"], "atrophy and hypertrophy")}${vs(['atrophy', "wasting away; no growth"], ['hypertrophy', "enlargement; excess growth"])}${vs(['bradycardia', "heart rate below 60"], ['tachycardia', "fast heart rate"])}${memo("tachy speeds along like a taxi; brady plods along slowly.")}`),
          M(`${e('<b>tachycardia</b>')} means…`, ["fast heartbeat", "slow heartbeat", "enlarged heart", "heart pain"], "tachy- means fast.", null, F('opposite-prefixes', [])),
          M("What is wasting and shrinking of a muscle called?", ['atrophy', 'hypertrophy', 'dystrophy', 'eutrophy'], 'a- + ‎-trophy‎.', null, F('atrophy-hypertrophy', [])),
          P("Match each prefix to its opposite", [['brady-', 'tachy-'], ['hypo-', 'hyper-'], ['endo-', 'exo-'], ['micro-', 'macro-']], "Opposite pairs."),
          T("hypoglycemia means high blood sugar.", false, "hypo- means low; high blood sugar is hyperglycemia."),
          B("Difficulty swallowing is called ___.", ['dysphagia', 'euphagia', 'aphagia'], 'dys- + ‎-phagia‎.'),
          W("Build the term that means “high blood sugar”", ['hyper-', 'glyc/o', '-emia'], ['hypo-', 'brady-', '-itis'], 'hyperglycemia.'),
          S("Spell the term for “slow heartbeat”", 'bradycardia', 'brady- + cardi/o + ‎-ia‎.', 'brady…'),
          N('wb:pf')
        ]
      },
      {
        id: 'pf9', title: "Movement and position", icon: '🤸', items: [
          L("Away and toward", `${fig('abduction', ["moving the leg away and back toward the midline"], "abduction and adduction")}The prefix ${e('ab-')} means away from and the prefix ${e('ad-')} means toward: ${e('<b>abduction</b>')} is moving a limb away from the midline and ${e('<b>adduction</b>')} is moving it toward the midline.${fig('joint-movements', ["joint movements"], "Movements of the mobile joints")}`),
          L("Patient positions", `${fig('patient-positions', [], "Patient positions")}${e('supine')} is lying face up, ${e('prone')} lying face down, ${e('Fowler')} half sitting and ${e('Trendelenburg')} head lower than the feet.${memo("Remember supine through “soup”: a soup bowl faces up; prone faces down.")}`),
          M("Moving a limb toward the midline of the body…", ['adduction', 'abduction', 'flexion', 'extension'], "ad- means toward.", null, F('abduction', [])),
          M("A patient lying on the back, face up, is in the … position.", ['supine', 'prone', 'Fowler', 'Sims'], 'supine.', null, F('patient-positions', [])),
          P("Match each movement to its meaning", [['flexion', "bending a joint"], ['extension', "straightening a joint"], ['abduction', "moving away"], ['adduction', "moving toward"]], "Movements.", F('joint-movements', [])),
          T("In the Trendelenburg position the patient’s head is lower than the feet.", true, "A tilted bed with the head down."),
          B("A patient lying on the abdomen, face down, is in the ___ position.", ['prone', 'supine', 'Fowler'], 'prone.'),
          O("Order them from lying down to standing up", ['supine', 'Fowler', 'upright'], "Supine, half sitting, standing."),
          S("Spell the term for “moving away from the midline”", 'abduction', 'ab- + duct.', 'abd…'),
          N('f2t:pf')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۴: قواعد و تله‌ها
 * سطح ۱: جمع بستن واژه‌های لاتین و یونانی • سطح ۲: اختصار، سرواژه، نام‌واژه و هم‌آوا • سطح ۳: تله‌های املایی و واژه‌های بلند
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'rl', sym: 'Rl', name: "Rules and Traps", short: "Rules", sub: "Plurals of Latin and Greek words, abbreviations and acronyms, eponyms, sound-alikes, spelling traps and breaking down long words",
    color: '#E2683C', dark: '#9A3F1E', light: '#FDEDE5',
    levels: ["Plurals", "Short forms and sound-alikes", "Traps and long words"],
    gens: EA.genIds('rl'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'rl1', title: "Simple Latin plurals", icon: '🔤', items: [
          L("The first three rules", `${fig('plural-rules', [], "Plural rules")}Latin and Greek words form their plurals by their own rules. The first three rules:${tbl([["Singular", "Plural", "Example"], [e('-a'), e('-ae'), e('vertebra → vertebrae')], [e('-us'), e('-i'), e('bronchus → bronchi')], [e('-um'), e('-a'), e('bacterium → bacteria')]])}`),
          L("The spine", `${fig('spine-vertebrae', ["A: one vertebra, B: the spinal column"], "vertebra and vertebrae")}Each bone of the spine is a ${e('<b>vertebra</b>')}, and the adult spine has 26 ${e('<b>vertebrae</b>')}.${memo("Say the -ae plural as “ay”: VER-teh-bray. Say the -i plural as “eye”: bronch-eye.")}`),
          M(`What is the plural of ${e('<b>vertebra</b>')}?`, ['vertebrae', 'vertebras', 'vertebri', 'vertebra'], '‎-a → -ae‎.', null, F('spine-vertebrae', [])),
          M(`What is the plural of ${e('<b>bronchus</b>')}?`, ['bronchi', 'bronchuses', 'bronchae', 'bronchia'], '‎-us → -i‎.', null, F('plural-rules', [])),
          P("Match each word to its plural", [['bursa', 'bursae'], ['fungus', 'fungi'], ['atrium', 'atria'], ['diverticulum', 'diverticula']], "The first three rules."),
          T("bacteria is the plural of bacterium.", true, '‎-um → -a‎.'),
          B("The plural of glomerulus is ___.", ['glomeruli', 'glomerulae', 'glomeruluses'], '‎-us → -i‎.'),
          M(`How is the ending ${e('-i')} pronounced in plural words?`, ["“eye”", "“ee”", "“eh”", "it is silent"], 'calculi: KAL-kyoo-lye.'),
          S("Write the plural of “bacterium”", 'bacteria', '‎-um → -a‎.', 'bacter…'),
          N('sp:rl')
        ]
      },
      {
        id: 'rl2', title: "Plurals of x, is and on", icon: '🔠', items: [
          L("Four more rules", `${tbl([["Singular", "Plural", "Example"], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-ix'), e('-ices'), e('appendix → appendices')], [e('-ax'), e('-aces'), e('thorax → thoraces')], [e('-nx'), e('-nges'), e('phalanx → phalanges')], [e('-on'), e('-a'), e('ganglion → ganglia')], [e('-en'), e('-ina'), e('lumen → lumina')], [e('-ma'), e('-mata'), e('carcinoma → carcinomata')]])}`),
          L("Finger bones", `${fig('hand-phalanges', ["the bones of the fingers"], "phalanx and phalanges")}Each finger bone is a ${e('<b>phalanx</b>')}, and its plural is ${e('<b>phalanges</b>')}.${fig('lumen', ["the channel of an artery and a vein"], "lumen and lumina")}${memo("An x at the end means “bring in a c or g and add es”: appendices, phalanges.")}`),
          M(`What is the plural of ${e('<b>diagnosis</b>')}?`, ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], '‎-is → -es‎.'),
          M(`What is the plural of ${e('<b>phalanx</b>')}?`, ['phalanges', 'phalanxes', 'phalanci', 'phalances'], '‎-nx → -nges‎.', null, F('hand-phalanges', [])),
          P("Match each word to its plural", [['appendix', 'appendices'], ['thorax', 'thoraces'], ['larynx', 'larynges'], ['ganglion', 'ganglia']], "The x and on rules."),
          T("The plural of lumen is lumina.", true, '‎-en → -ina‎.', F('lumen', [])),
          B("The plural of metastasis is ___.", ['metastases', 'metastasi', 'metastasises'], '‎-is → -es‎.'),
          M(`The Latin plural of ${e('<b>carcinoma</b>')} is…`, ['carcinomata', 'carcinomae', 'carcinomi', 'carcinomum'], "-ma → -mata; carcinomas is also accepted."),
          S("Write the plural of “appendix”", 'appendices', '‎-ix → -ices‎.', 'appendi…'),
          N('t2f:rl')
        ]
      },
      {
        id: 'rl3', title: "Exceptions", icon: '⚠️', items: [
          L("Rule breakers", `${fig('plural-exceptions', [], "exceptions and pronunciation")}Some words don’t follow the rules: ${e('meatus')} stays ${e('meatus')}, ${e('femur')} becomes ${e('femora')} and ${e('corpus')} becomes ${e('corpora')}.${fig('femur', ["head and neck of the thigh bone"], "femur and femora")}`),
          L("Numbers and abbreviations", `With a number, a unit of measure is not made plural, so we write ${e('7 cm')} and never ${e('7 cms')}. Capital-letter abbreviations take a small s for the plural: ${e('CVAs')}, ${e('WBCs')}.${pearl("Chapter 4 of the Dummies book notes that English plurals such as carcinomas are becoming more and more accepted.")}${memo("meatus is like “sheep” in English: one sheep, many sheep!")}`),
          M(`What is the plural of ${e('<b>meatus</b>')}?`, ['meatus', 'meati', 'meatae', 'meatuses'], "An exception; it stays the same.", null, F('plural-exceptions', [])),
          M(`What is the plural of ${e('<b>femur</b>')}?`, ['femora', 'femurs', 'femuri', 'femurae'], "A Latin exception.", null, F('femur', [])),
          P("Match each word to its plural", [['corpus', 'corpora'], ['viscus', 'viscera'], ['iris', 'irides'], ['pons', 'pontes']], "Exceptions."),
          T("It is correct to write: The incision was 7 cms long.", false, "With a number, the unit is not made plural: 7 cm."),
          B("The plural of the abbreviation CVA is ___.", ['CVAs', 'CVA\'s', 'CVAes'], "A capital-letter abbreviation takes a small s, with no apostrophe."),
          M(`How is the ending ${e('-es')} in ${e('testes')} pronounced?`, ["“eez”", "“es”", "“eye”", "it is silent"], 'test-EEZ.'),
          S("Write the plural of “femur”", 'femora', "An exception.", 'fem…'),
          N('f2t:rl')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'rl4', title: "Abbreviations and acronyms", icon: '🔡', items: [
          L("Four kinds of short forms", `${fig('word-kinds', [], "Abbreviation, acronym, eponym and symbol")}An ${e('<b>abbreviation</b>')} is read letter by letter (${e('CBC')}). An ${e('<b>acronym</b>')} is read as one word (${e('AIDS')}). Symbols are short forms too: ${e('↑')} increase and ${e('↓')} decrease.`),
          L("One abbreviation, several meanings", `${tbl([["abbreviation", "Meanings"], [e('AMA'), "against medical advice; American Medical Association"], [e('MS'), "multiple sclerosis; mitral valve stenosis"], [e('BM'), "bowel movement; bone marrow; breast milk…"]])}${pearl("Chapter 4 of the Dummies book notes that only the context of the sentence makes the meaning of an abbreviation clear.")}${memo("If an abbreviation has two meanings, read the context; if you’re still unsure, write it out.")}`),
          M(`What kind of short form is ${e('<b>AIDS</b>')}?`, ["acronym", "eponym", "symbol", "sound-alike word"], "It is read as one word.", null, F('word-kinds', [])),
          M(`In a heart patient’s chart, the abbreviation ${e('<b>MS</b>')} most likely means…`, ['mitral stenosis', 'multiple sclerosis', 'morphine sulfate', 'medical student'], "The context decides the meaning."),
          P("Match each abbreviation to its meaning", [['CBC', "complete blood count"], ['MRI', "MRI scan"], ['COPD', "chronic obstructive lung disease"], ['AMA', "against medical advice"]], "Abbreviations."),
          T("In a history, the symbol ↑ means increase.", true, "↓ means decrease."),
          B("A word formed from the first letters of several words and read as one word is an ___.", ['acronym', 'eponym', 'homonym'], "Such as AIDS or laser."),
          M("What is the best thing to do when the meaning of an abbreviation isn’t clear?", ["write the word out or ask the writer", "invent a new abbreviation", "guess", "delete it"], "Never write a made-up abbreviation."),
          S("Spell the term for a word made of initials and read as one word", 'acronym', 'acr/o + onym.', 'acro…'),
          N('ab:rl')
        ]
      },
      {
        id: 'rl5', title: "Eponyms", icon: '👤', items: [
          L("People’s names on diseases", `${fig('eponym-cards', [], "Eponyms")}An ${e('<b>eponym</b>')} is a disease, sign or instrument named after its discoverer or a place: ${e('Alzheimer disease')}, ${e('Parkinson disease')}, ${e('Down syndrome')} and ${e('Lyme disease')}.`),
          L("With or without the apostrophe", `Today the apostrophe can be dropped: ${e("Alzheimer's disease")} or ${e('Alzheimer disease')}; both are accepted.${pearl("Chapter 4 of the Dummies book notes that Lyme disease is named after the town of Old Lyme, Connecticut, where it was first reported in 1975.")}${memo("eponym = epi (upon) + onyma (name): a name placed upon something.")}`),
          M("An eponym is…", ["a name taken from a person or a place", "a word with the opposite meaning", "a sound-alike word", "a multi-letter abbreviation"], 'eponym.', null, F('eponym-cards', [])),
          M("What did Lyme disease get its name from?", ["a town", "a physician", "a tick", "an antibiotic"], 'Old Lyme, Connecticut.'),
          P("Match each eponym to its meaning", [['Alzheimer disease', "progressive brain decline"], ['Parkinson disease', "tremor and muscle stiffness"], ['Down syndrome', "trisomy 21"], ['Apgar score', "newborn score"]], "Eponyms."),
          T("The Apgar score rates a newborn’s condition at 1 and 5 minutes after birth.", true, 'Virginia Apgar.'),
          B("Another name for Down syndrome is ___.", ['trisomy 21', 'trisomy 18', 'monosomy X'], "A chromosomal disorder."),
          M("Which spelling is accepted today?", ["both: Parkinson disease and Parkinson’s disease", "only Parkinson’s disease", "only parkinsons disease", "only PARKINSON"], "The apostrophe can be dropped."),
          S("Spell the term for a name taken from a person or a place", 'eponym', 'epi + onym.', 'epo…'),
          N('d2t:rl')
        ]
      },
      {
        id: 'rl6', title: "Homonyms, antonyms, synonyms", icon: '👯', items: [
          L("One sound, two organs", `${fig('ileum-ilium', [], "ileum and ilium")}A ${e('<b>homonym</b>')} is one of two words that sound the same but mean different things: the ${e('ileum')} is the last part of the small intestine and the ${e('ilium')} the wing of the hip bone.${fig('pelvis', ["the pelvis, the bony hip girdle"], "the ilium is part of the pelvis")}`),
          L("Antonyms and synonyms", `An ${e('<b>antonym</b>')} has the opposite meaning, like ${e('brady-')} and ${e('tachy-')}; a ${e('<b>synonym</b>')} has the same meaning, like ${e('gastralgia')} and ${e('gastrodynia')}.${vs(['mnemonic', "memory aid; silent m"], ['pneumonic', "of the lungs; silent p"])}${memo("ileum with an e, as in enter/o (intestine); ilium with an i, as in hip.")}`),
          M("Which is the last part of the small intestine?", ['ileum', 'ilium', 'ileus', 'ilion'], "ileum, with an e.", null, F('ileum-ilium', [])),
          M("gastralgia and gastrodynia are…", ["synonyms", "antonyms", "homonyms", "eponyms"], "Both mean stomach ache."),
          P("Match each term to its meaning", [['homonym', "sound-alike word"], ['antonym', "word of opposite meaning"], ['synonym', "word of the same meaning"], ['eponym', "term named after a person"]], "Kinds of words."),
          T("The ilium is part of the hip bone.", true, "ilium, with an i.", F('pelvis', [])),
          B("A memory trick is called a ___.", ['mnemonic', 'pneumonic', 'eponym'], "The first m is silent."),
          M(`What is ${e('<b>humerus</b>')}?`, ["upper arm bone", "funny", "thigh bone", "a body fluid"], "It sounds like humorous."),
          S("Spell the name of the upper arm bone", 'humerus', "With a u, not humorous.", 'hum…'),
          N('t2f:rl')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'rl7', title: "One letter, one meaning", icon: '🪤', items: [
          L("Sound-alike traps", `${fig('soundalikes', [], "Sound-alike traps")}${e('dysphagia')} is difficulty swallowing and ${e('dysphasia')} difficulty speaking. ${e('palpation')} is examining by touch and ${e('palpitation')} a pounding heartbeat.`),
          L("Noun or adjective?", `${vs(['mucus', "noun: the mucus itself"], ['mucous', "adjective: mucous membrane"])}${vs(['callus', "hardened skin or healing bone"], ['callous', "hard; unfeeling"])}${vs(['afferent', "afferent: toward the centre"], ['efferent', "efferent: away from the centre"])}${memo("dysphaGia with a G as in Gulp; dysphaSia with an S as in Speech.")}`),
          M("A patient who has trouble swallowing food…", ['dysphagia', 'dysphasia', 'dysphoria', 'dyspnea'], "-phagia means eating and swallowing.", null, F('soundalikes', [])),
          M("A patient who says “my heart is racing and pounding”…", ['palpitation', 'palpation', 'pulsation', 'perforation'], "palpitation means a pounding heartbeat."),
          P("Match each term to its meaning", [['pruritus', "itching"], ['pleuritis', "inflammation of the lung lining (pleurisy)"], ['prostatic', "of the prostate"], ['prosthetic', "artificial"]], "Sound-alike traps."),
          T("mucus is the adjective and mucous the noun.", false, "The other way round: mucus is the noun and mucous the adjective."),
          B("The physician ___ the abdomen with the hands.", ['palpation', 'palpitation', 'pulsation'], "Feeling with the fingers."),
          M("afferent means…", ["toward the centre", "away from the centre", "between two centres", "without a centre"], "a as in arrive."),
          S("Spell the term for “difficulty speaking”", 'dysphasia', "-phasia means speech.", 'dysph…'),
          N('wb:rl')
        ]
      },
      {
        id: 'rl8', title: "Three look-alike words", icon: '🎯', items: [
          L("peri, pero or periton?", `${fig('peri-pero', [], "peritoneal, perineal, peroneal")}${e('<b>peritoneal</b>')} refers to the peritoneum, the lining inside the abdomen. ${e('<b>perineal</b>')} refers to the area between the legs and ${e('<b>peroneal</b>')} to the outer side of the lower leg.`),
          L("The textbook trick", `${pearl("Chapter 25 of the Dummies book says: perINeal means IN, between the legs; perONeal means ON, on the lower leg. These three words are famous mix-ups among health-care staff.")}${tbl([["Term", "Location"], [e('peritoneal'), "lining inside the abdomen"], [e('perineal'), "between the legs"], [e('peroneal'), "of the outer lower leg"]])}`),
          M(`Where does ${e('<b>peroneal</b>')} refer to?`, ["the outer side of the lower leg", "lining inside the abdomen", "the area between the legs", "around the kidney"], "perONeal: on the lower leg.", null, F('peri-pero', [])),
          M("What is dialysis using the abdominal lining called?", ['peritoneal dialysis', 'perineal dialysis', 'peroneal dialysis', 'pericardial dialysis'], "peritone/o means peritoneum."),
          P("Match each term to its location", [['peritoneal', "lining inside the abdomen"], ['perineal', "between the legs"], ['peroneal', "side of the lower leg"], ['pericardial', "around the heart"]], "Three look-alike words."),
          T("perineal and peroneal mean the same thing.", false, "One is between the legs and the other on the side of the lower leg."),
          B("The nerve that runs along the side of the lower leg is the ___ nerve.", ['peroneal', 'perineal', 'peritoneal'], 'peroneal nerve.'),
          M("Which word is built from the root for peritoneum?", ['retroperitoneal', 'perineal', 'peroneal', 'periodontal'], 'retro- + peritone/o + ‎-al‎.'),
          S("Spell the adjective meaning “of the peritoneum”", 'peritoneal', 'peritone/o + ‎-al‎.', 'perito…'),
          N('m2r:rl')
        ]
      },
      {
        id: 'rl9', title: "Spelling and long words", icon: '📏', items: [
          L("Tricky spellings", `${fig('spelling-traps', [], "Tricky spellings")}${e('tonsillectomy')} has two l’s, ${e('hemorrhage')} and ${e('diarrhea')} have two r’s and one h, and ${e('ophthalmology')} has both ph and th. The word ${e('pruritus')} is spelled with a u, not an i.`),
          L("The longest word", `${fig('word-breaker', [], "Breaking down a long word")}Read a long word from the end and break it into pieces. ${e('pneumonoultramicroscopic silicovolcanoconiosis')} is a lung disease caused by very fine volcanic silica dust.${pearl("Chapter 27 of the Dummies book notes that this word has to be broken after microscopic to make it readable.")}${memo("For a long word, ask just three questions: What is its suffix? What is its prefix? What are its roots?")}`),
          M("Which spelling is correct?", ['tonsillectomy', 'tonsilectomy', 'tonsilectommy', 'tonsillectommy'], "Two l’s and one m.", null, F('spelling-traps', [])),
          M("Which spelling is correct?", ['hemorrhage', 'hemorage', 'hemmorhage', 'hemorhage'], "Two r’s and one h."),
          P("Match each part to its meaning", [['ot/o', "ear"], ['rhin/o', "nose"], ['laryng/o', "voice box"], ['-logist', "specialist"]], 'otorhinolaryngologist.', F('word-breaker', [])),
          T("pruritus is spelled with a u.", true, "pruritis is a common misspelling."),
          B("The abbreviation for an ear, nose and throat specialist is ___.", ['ENT', 'EGD', 'EKG'], 'ear, nose and throat.'),
          O("Put the parts of otorhinolaryngologist in order from the start", ['ot/o', 'rhin/o', 'laryng/o', '-logist'], "Ear, nose, larynx, specialist."),
          S("Spell the term for frequent watery stools", 'diarrhea', 'dia- + ‎-rrhea‎.', 'diar…'),
          N('sp:rl')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* لِکسا — دنیای ۵: در بیمارستان
 * سطح ۱: پرونده و محیط درمان • سطح ۲: دارو، نسخه و اختصارهای ممنوع • سطح ۳: تیم درمان، تشخیص و گزارش‌ها
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'hs', sym: 'Hs', name: "In the Hospital", short: "Hospital", sub: "The medical record and notes, care settings and confidentiality, drug names, prescriptions, dosing frequency and routes, do-not-use abbreviations and the care team",
    color: '#17A398', dark: '#0E6E66', light: '#E0F5F1',
    levels: ["The record and care settings", "Drugs and prescriptions", "The care team and reports"],
    gens: EA.genIds('hs'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'hs1', title: "medical record", icon: '🗂️', items: [
          L("Parts of the record", `${fig('record-parts', [], "Parts of the record")}The ${e('<b>medical record</b>')}, or chart, is the legal document of all of a patient’s care: the ${e('history and physical (H&P)')}, physician’s orders, nurse’s notes, ${e('progress notes')}, the operative report and the ${e('discharge summary')}.`),
          L("From paper to computer", `${fig('records-room', ["Health records officer"], "Records archive")}Today most records are ${e('<b>electronic health record (EHR)</b>')}s; they are filled in on a computer or tablet and shared among the care team.${memo("The H&P is written on the first day, progress notes every day and the discharge summary on the last day.")}`),
          M("Which part of the record summarises the whole hospital stay?", ['discharge summary', 'history and physical', 'progress note', "physician's orders"], "It is written at discharge.", null, F('record-parts', [])),
          M(`The abbreviation ${e('<b>H&P</b>')} means…`, ["history and physical", "blood pressure and pulse", "history and prognosis", "hospital and pharmacy"], 'history and physical.'),
          O("Put these forms in the order of the hospital stay", ['history and physical', 'progress note', 'discharge summary'], "Admission, every day, discharge."),
          P("Match each part to its writer or purpose", [['operative report', "the surgeon"], ["nurse's notes", "daily vital signs"], ['consultation report', "the consulting physician"], ['informed consent', "the patient’s signature"]], "Parts of the record."),
          T("The medical record is a legal document.", true, "Every page must be complete and signed.", F('records-room', [])),
          B("A digital record is called an ___.", ['EHR', 'H&P', 'ROS'], 'electronic health record.'),
          S("Spell the one-word name for the medical record", 'chart', 'medical record.', 'ch…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs2', title: "The language of notes", icon: '📝', items: [
          L("A real note", `${fig('chart-note', [], "Emergency note")}Notes are full of abbreviations: ${e('y/o')} years old, ${e('c/o')} complaining of, ${e('SOB')} shortness of breath, ${e('R/O')} rule out and ${e('CXR')} chest X-ray.`),
          L("Parts of the history", `${tbl([["abbreviation", "Meaning"], [e('CC'), "main complaint"], [e('HPI'), "history of present illness"], [e('PMHx'), "past medical history"], [e('ROS'), "review of systems"], [e('HEENT'), "head, eyes, ears, nose, throat"], [e('WNL'), "within normal limits"]])}${pearl("In an emergency note in Stanfield, a 68-year-old man came in with chest pain and SOB, and the note says R/O pneumonia.")}`),
          M(`In a note, ${e('<b>c/o</b>')} means…`, ["complaining of", "caring for", "instead of", "next to"], 'complaining of.', null, F('chart-note', [])),
          M(`${e('<b>R/O pneumonia</b>')} means…`, ["pneumonia must be ruled out or confirmed", "pneumonia is certain", "pneumonia has been treated", "right-sided pneumonia"], 'rule out.'),
          P("Match each abbreviation to its meaning", [['SOB', "shortness of breath"], ['WNL', "within normal limits"], ['NKDA', "no drug allergies"], ['Hx', "history of"]], "Note abbreviations."),
          T("HEENT means head, eyes, ears, nose and throat.", true, 'head, eyes, ears, nose, throat.'),
          B("The patient’s chief complaint is written with the abbreviation ___.", ['CC', 'Dx', 'Tx'], 'chief complaint.'),
          M(`${e('<b>Dx</b>')} and ${e('<b>Tx</b>')} mean…`, ["diagnosis and treatment", "treatment and diagnosis", "drugs and tests", "history and examination"], "diagnosis and treatment."),
          S("Write the abbreviation for “shortness of breath”", 'SOB', 'shortness of breath.', 'S…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs3', title: "Care settings and confidentiality", icon: '🏥', items: [
          L("Where are patients treated?", `${fig('care-settings', [], "Care settings")}A general hospital (${e('acute care')}) is for short-term treatment, ${e('long-term care')} for extended care, ${e('ambulatory care')} without an overnight stay, and ${e('<b>hospice</b>')} for patients at the end of life and their families.`),
          L("keeping patient information private", `${e('<b>confidentiality</b>')} means all patient information is private and released only with the patient’s written permission. In the United States, the ${e('HIPAA')} law protects this information.${pearl("Chapter 1 of Fremgen points out that anyone who works with medical terms must fully understand and respect confidentiality.")}${memo("The word ambulatory comes from ambulate, to walk: the patient is up and about and doesn’t stay overnight in hospital.")}`),
          M("Care that doesn’t require an overnight stay…", ['ambulatory care', 'acute care', 'long-term care', 'hospice'], "Outpatient.", null, F('care-settings', [])),
          M("Who is hospice for?", ["patients at the end of life and their families", "premature babies", "injured athletes", "outpatients"], "Supportive care."),
          P("Match each setting to its purpose", [['acute care hospital', "short-term treatment"], ['long-term care', "extended care"], ['rehabilitation', "restoring function after illness"], ['home health care', "care at home"]], "Care settings."),
          T("Patient information can be given to anyone without the patient’s permission.", false, "The information is confidential; the patient’s written permission is required."),
          B("The US law that protects health information is called ___.", ['HIPAA', 'ICD', 'EHR'], 'Health Insurance Portability and Accountability Act.'),
          M("A psychiatric hospital is an example of which setting?", ['specialty care hospital', 'ambulatory care', 'home health care', 'hospice'], "For particular illnesses."),
          S("Spell the term for keeping patient information private", 'confidentiality', 'confidential + ‎-ity‎.', 'confiden…'),
          N('d2t:hs')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'hs4', title: "Three names for one drug", icon: '💊', items: [
          L("Chemical, generic, brand", `${fig('drug-names', [], "Three drug names")}Every drug has a long ${e('<b>chemical name</b>')}, just one ${e('<b>generic name</b>')} (such as ibuprofen) and one or more ${e('<b>brand name</b>')}s (such as Advil and Motrin).`),
          L("With or without a prescription", `${fig('pharmacy', ["pharmacy, pharmacist and pharmacology"], "pharmacy, pharmacist and pharmacology")}An ${e('<b>OTC</b>')} drug is sold without a prescription, like ${e('aspirin')}. Addictive drugs are called ${e('controlled substance')}s and are classified from ${e('Schedule I')} to ${e('V')}.${memo("The generic name is single and public; brand names are many and belong to companies.")}`),
          M("How many generic names does a drug have?", ["only one", "two", "one per company", "none"], "The generic name is unique.", null, F('drug-names', [])),
          M(`What kind of name is ${e('<b>Advil</b>')}?`, ["brand name", "generic name", "chemical name", "scientific name"], "A brand name of ibuprofen."),
          P("Match each term to its meaning", [['pharmacology', "study of drugs"], ['pharmacist', "expert who prepares and dispenses drugs"], ['over-the-counter', "sold without a prescription"], ['analgesic', "painkiller"]], "Drug terms.", F('pharmacy', [])),
          T("A generic drug is usually cheaper than a brand-name drug.", true, "According to Fremgen."),
          B("A drug sold without a prescription is marked with the abbreviation ___.", ['OTC', 'NPO', 'PRN'], 'over-the-counter.'),
          M("Schedule I drugs…", ["have the highest potential for addiction and no accepted medical use", "have the lowest potential for addiction", "are sold without a prescription", "are only vitamins"], "Such as heroin; Schedule V is the lowest."),
          S("Spell the term for a drug that relieves pain", 'analgesic', 'an- + ‎-algesia‎ + ‎-ic‎.', 'analg…'),
          N('t2f:hs')
        ]
      },
      {
        id: 'hs5', title: "Reading a prescription", icon: '📃', items: [
          L("Parts of a prescription", `${fig('prescription-anatomy', [], "A prescription")}${e('Rx')} means “take”, followed by the drug name and strength. ${e('Sig')} is the label directions: ${e('i po tid')} means one tablet, by mouth, three times a day. ${e('Disp #30')} means dispense 30.`),
          L("Route", `${fig('route-abbr', [], "Route abbreviations")}${e('po')}, from the Latin per os, means by mouth, ${e('SL')} under the tongue, ${e('IV')} into a vein, ${e('IM')} into a muscle, ${e('gtt')} drops and ${e('NPO')} nothing by mouth.${memo("OD is the right eye and OS the left eye, but today it’s better to write it out: right eye.")}`),
          M(`${e('<b>i po tid</b>')} means…`, ["one tablet, by mouth, three times a day", "one tablet, by injection, twice a day", "three tablets, by mouth, once", "one drop, left eye"], "i one, po by mouth, tid three times.", null, F('prescription-anatomy', [])),
          M(`${e('<b>NPO</b>')} means…`, ["nothing by mouth", "as needed", "after meals", "at bedtime"], "nothing by mouth, for example before surgery.", null, F('route-abbr', [])),
          P("Match each abbreviation to its meaning", [['po', "by mouth"], ['SL', "under the tongue"], ['gtt', "drops"], ['OS', "left eye"]], "Routes."),
          T("Disp #30 means take the drug for 30 days.", false, "It means dispense 30 to the patient."),
          B("The label-directions section begins with ___.", ['Sig', 'Rx', 'Disp'], "signa means write."),
          O("Put the parts of the prescription in order", ['Rx', 'drug and dose', 'Sig', 'Disp', 'refill'], "In the order of the Fremgen example."),
          S("Write the abbreviation for “by mouth”", 'po', 'per os.', 'p…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs6', title: "How often, and what not to write", icon: '⏰', items: [
          L("Dosing frequency", `${fig('dose-clock', [], "Dosing frequency")}${e('bid')} is twice a day, ${e('tid')} three times, ${e('qid')} four times, ${e('q6h')} every 6 hours, ${e('hs')} at bedtime, ${e('ac')} before meals, ${e('pc')} after meals, ${e('prn')} as needed and ${e('stat')} immediately.`),
          L("Do-not-use abbreviations", `${fig('do-not-use', [], "The Do Not Use list")}${e('qd')} is mistaken for ${e('qid')}, so write daily. ${e('U')} may be read as zero, so write unit. Never write a trailing zero (${e('1.0 mg')}), but a leading zero (${e('0.5 mg')}) is required.${pearl("Chapter 1 of Cohen notes that organisations such as the Joint Commission and ISMP publish lists of do-not-use abbreviations.")}`),
          M(`${e('<b>qid</b>')} means…`, ["four times a day", "once a day", "every hour", "every other day"], 'quater in die.', null, F('dose-clock', [])),
          M(`Why shouldn’t you write ${e('qd')}?`, ["it is mistaken for qid and the dose is quadrupled", "because it is long", "because it isn’t English", "because it is only for drops"], "Write daily instead.", null, F('do-not-use', [])),
          P("Match each abbreviation to its meaning", [['bid', "twice a day"], ['hs', "at bedtime"], ['ac', "before meals"], ['prn', "as needed"]], "Dosing frequency."),
          T("Writing 0.5 mg is correct and .5 mg is dangerous.", true, "A decimal point without a zero may be missed, making the dose ten times larger."),
          B("An immediate order on a prescription is written as ___.", ['stat', 'prn', 'hs'], "statim means at once."),
          M("What should you write instead of U on a prescription?", ['unit', 'IU', 'u.', '0'], "U is mistaken for 0 or 4."),
          S("Write the abbreviation for “as needed”", 'prn', 'pro re nata.', 'p…'),
          N('t2f:hs')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'hs7', title: "The care team", icon: '👩‍⚕️', items: [
          L("Every organ, a specialist", `${tbl([["Organ", "specialist"], ["heart", e('cardiologist')], ["skin", e('dermatologist')], ["nerves", e('neurologist')], ["ear, nose, throat", e('otorhinolaryngologist (ENT)')], ["tumour", e('oncologist')], ["bones and joints", e('orthopedist')]])}`),
          L("Behind the scenes", `${fig('lab-team', ["a research lab team"], "The lab team")}The ${e('<b>radiologist</b>')} reads the images, the ${e('<b>pathologist</b>')} examines the tissues and the ${e('<b>pharmacist</b>')} prepares and dispenses the drugs. An ${e('<b>internist</b>')} is a specialist in internal medicine.${memo("The root orth/o means straight: an orthopedist straightens bones, and orthopnea is breathing comfortably only when sitting upright.")}`),
          M("Who is the cancer specialist?", ['oncologist', 'otologist', 'urologist', 'neurologist'], "onc/o means tumour."),
          M("Who examines removed tissue under the microscope?", ['pathologist', 'radiologist', 'pharmacist', 'chiropractor'], "path/o means disease.", null, F('lab-team', [])),
          P("Match each specialist to their field", [['nephrologist', "kidney"], ['gynecologist', "women’s diseases"], ['obstetrician', "pregnancy and childbirth"], ['audiologist', "hearing"]], "The care team."),
          T("An internist is a specialist in internal medicine, not a trainee.", true, "The trainee is an intern."),
          B("An ear, nose and throat specialist is known by the abbreviation ___.", ['ENT', 'ICU', 'OR'], 'ear, nose and throat.'),
          W("Build the term that means “kidney specialist”", ['nephr/o', '-logist'], ['ur/o', '-iatrics', 'onc/o'], 'nephrologist.'),
          S("Spell the term for the physician who reads medical images", 'radiologist', 'radi/o + ‎-logist‎.', 'radio…'),
          N('wb:hs')
        ]
      },
      {
        id: 'hs8', title: "Imaging and tests", icon: '🩺', items: [
          L("Three imaging methods", `${e('<b>ultrasonography (US)</b>')} makes images with sound waves, ${e('<b>computed tomography (CT)</b>')} with a rotating X-ray beam and ${e('<b>magnetic resonance imaging (MRI)</b>')} with a magnetic field.${fig('mri-brain', ["MRI and CT of the brain"], 'MRI')}`),
          L("vital signs", `${e('<b>vital signs</b>')} means temperature, pulse, respiration and blood pressure (${e('TPR')} and ${e('BP')}). ${e('CBC')} is the complete blood count.${pearl("In Gary Smith’s history in Stanfield, a CBC and liver tests were ordered for a 35-year-old patient with jaundice.")}${memo("ultrasonography has three pieces: ultra- beyond, son/o sound and -graphy the recording procedure.")}`),
          M("Which method makes images with sound waves?", ['ultrasonography', 'computed tomography', 'radiography', 'mammography'], "son/o means sound."),
          M(`What are the ${e('<b>vital signs</b>')}?`, ["temperature, pulse, respiration and blood pressure", "sugar, fats and cholesterol", "weight and height", "ECG and EEG"], "TPR and BP."),
          P("Match each abbreviation to its meaning", [['US', "ultrasound scan"], ['CT', "CT scan"], ['MRI', "MRI scan"], ['CBC', "complete blood count"]], "Imaging and tests.", F('mri-brain', [])),
          T("The abbreviation BP means blood pressure.", true, 'blood pressure.'),
          B("The abbreviation TPR means temperature, pulse and ___.", ["breathing", "blood pressure", "weight"], 'temperature, pulse, respiration.'),
          W("Build the term for “imaging with sound waves”", ['ultra-', 'son/o', '-graphy'], ['radi/o', '-gram', '-scopy'], 'ultrasonography.'),
          S("Spell the term for “imaging with sound waves”", 'ultrasonography', 'ultra- + son/o + ‎-graphy‎.', 'ultra…'),
          N('d2t:hs')
        ]
      },
      {
        id: 'hs9', title: "Read the reports", icon: '📑', items: [
          L("Radiology report", `A radiology report in Stanfield describes 79-year-old Betty Street, who had a ${e('bone scan')} after a fall. Findings: ${e('degenerative')} changes in the lumbar vertebrae and a fracture (${e('FX')}) of the right pubic bone.`),
          L("discharge summary", `${tbl([["Section", "Meaning"], [e('HISTORY OF PRESENT ILLNESS'), "history of present illness"], [e('PHYSICAL EXAMINATION'), "examination"], [e('HOSPITAL COURSE'), "hospital course"], [e('DISCHARGE MEDICATIONS'), "discharge medications"], [e('FOLLOW UP'), "follow-up"]])}${memo("In a discharge summary, the headings are the map; find them first, then read the details.")}`),
          M(`In a report, ${e('<b>FX</b>')} means…`, ["fracture", "history of", "finding", "test"], 'fracture.'),
          M("Which section of the discharge summary lists the drugs after the stay?", ['DISCHARGE MEDICATIONS', 'HOSPITAL COURSE', 'PHYSICAL EXAMINATION', 'FOLLOW UP'], "Discharge medications."),
          O("Put the sections of the discharge summary in order", ['history of present illness', 'physical examination', 'hospital course', 'discharge medications', 'follow up'], "In the order used in Stanfield."),
          P("Match each abbreviation to its meaning", [['FX', "fracture"], ['Hx', "history of"], ['ED', "emergency department"], ['IV', "intravenously"]], "Report abbreviations."),
          T("degenerative means wearing down and progressive.", true, "As in degenerative changes in the spine."),
          B("The order “one tablet by mouth every 8 hours” on a prescription: one ___ q 8 hours.", ['p.o.', 'IV', 'SL'], "In the textbook’s discharge summary: Augmentin, one p.o. q. 8 hours."),
          S("Spell the term for a broken bone", 'fracture', 'Fx.', 'frac…'),
          N('ab:hs')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* لِکسا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از قطعه پازل، کتاب، اندام‌ها، پسوندها، پیشوندها، قاعده‌ها و نسخه الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'bs-0', w: 'bs', lv: 0, name: "Puzzly", title: "The Curious Root Piece", shape: 'puzzle', color: '#7FB2E5', acc: ['sparkle'], bio: "A blue puzzle piece; it always sits in the middle of a word because it is the root and carries the core meaning." },
    { id: 'bs-1', w: 'bs', lv: 1, name: "Linky O", title: "The Bridge-Building Vowel", shape: 'bubble', color: '#F5B880', acc: ['glasses'], bio: "A tiny letter o that builds bridges between roots, but steps aside before a suffix that starts with a vowel: gastritis." },
    { id: 'bs-2', w: 'bs', lv: 2, name: "Little Hippocrates", title: "Guardian of Medical Language", shape: 'book', color: '#4B4FC4', acc: ['crown'], bio: "A 2,400-year-old book that has carried the Greek and Latin roots from the days of Hippocrates to today’s electronic records." },
    { id: 'rt-0', w: 'rt', lv: 0, name: "Cardio", title: "Owner of the root cardi/o", shape: 'heart', color: '#D9443A', acc: ['sparkle'], bio: "A heart whose name you’ll find in cardiology, cardiomegaly and electrocardiogram." },
    { id: 'rt-1', w: 'rt', lv: 1, name: "Encephalo", title: "The Root-Savvy Brain", shape: 'brain', color: '#F2A7B8', acc: ['glasses'], bio: "Never mixes up encephal/o and cephal/o: one is the brain and the other the head." },
    { id: 'rt-2', w: 'rt', lv: 2, name: "Osteo", title: "Body-Map Reader", shape: 'bone', color: '#F3E4C4', acc: ['crown'], bio: "From oste/o and arthr/o to nephr/o and ren/o, it carries the map of every organ’s roots in its pocket." },
    { id: 'sf-0', w: 'sf', lv: 0, name: "Flamitis", title: "The Inflammation Suffix", shape: 'flame', color: '#E2683C', acc: ['sparkle'], bio: "Wherever -itis sits, that organ is inflamed: arthritis, gastritis, dermatitis." },
    { id: 'sf-1', w: 'sf', lv: 1, name: "Lens", title: "Master of -scope and -scopy", shape: 'lens', color: '#2B86C5', acc: ['glasses'], bio: "Tells the instrument from the procedure: it holds the endoscope and performs the endoscopy." },
    { id: 'sf-2', w: 'sf', lv: 2, name: "Suffix Surgeon", title: "King of -ectomy", shape: 'bandage', color: '#C39BE0', acc: ['crown'], bio: "Explains at a glance the difference between removal, incision, opening, repair, suture and fixation." },
    { id: 'pf-0', w: 'pf', lv: 0, name: "Number Dice", title: "The Prefix Counter", shape: 'hex', color: '#F7D774', acc: ['sparkle'], bio: "Counts from uni- and bi- to quadri- and pan-, and counts hemi- as a half." },
    { id: 'pf-1', w: 'pf', lv: 1, name: "Compass", title: "The Body Guide", shape: 'meter', color: '#F2C94C', acc: ['glasses'], bio: "Always measures superior and inferior, medial and lateral, proximal and distal from the anatomic position." },
    { id: 'pf-2', w: 'pf', lv: 2, name: "Anti Shield", title: "Keeper of the Against Prefixes", shape: 'shield', color: '#C9A12C', acc: ['crown'], bio: "Knows anti-, contra- and a-, and knows that afebrile means without fever." },
    { id: 'rl-0', w: 'rl', lv: 0, name: "Sound-Alike Twins", title: "Ileum or ilium?", shape: 'pea', color: '#9CCC65', acc: ['sparkle'], bio: "Two words with one pronunciation, one an intestine and the other a hip bone; told apart by a single e or i." },
    { id: 'rl-1', w: 'rl', lv: 1, name: "Plural Key", title: "Master of -ae and -i", shape: 'key', color: '#9A5418', acc: ['glasses'], bio: "Turns vertebra into vertebrae, bronchus into bronchi and phalanx into phalanges." },
    { id: 'rl-2', w: 'rl', lv: 2, name: "Trap Scales", title: "Enemy of Sound-Alikes", shape: 'scale', color: '#E2683C', acc: ['crown'], bio: "Never puts dysphagia with dysphasia, or palpation with palpitation, on the same pan." },
    { id: 'hs-0', w: 'hs', lv: 0, name: "Capsy", title: "The Generic Drug", shape: 'capsule', color: '#17A398', acc: ['sparkle'], bio: "Has one long chemical name, one generic name and several brand names; OTC or prescription." },
    { id: 'hs-1', w: 'hs', lv: 1, name: "Rx Reader", title: "The Sig Decoder", shape: 'clipboard', color: '#FFFDF5', acc: ['glasses'], bio: "Reads i po tid as “one tablet by mouth three times a day” and stops qd and U in their tracks." },
    { id: 'hs-2', w: 'hs', lv: 2, name: "Grand Lexa", title: "Master of the Chart and the Puzzle", shape: 'puzzle', color: '#4B4FC4', acc: ['cape', 'crown'], bio: "Breaks down the H&P, progress notes, discharge summary and any long word at a glance." }
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
    /* تخمک با تاج سلولی */
    ovum: { fy: 84, top: 26, body: c => `${Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return `<circle cx="${(60 + Math.cos(a) * 52).toFixed(1)}" cy="${(86 + Math.sin(a) * 52).toFixed(1)}" r="9" fill="#FDE3C8" stroke="#E8B48A" stroke-width="1.3"/>`; }).join('')}<circle cx="60" cy="86" r="44" fill="#fff" opacity=".9"/><circle cx="60" cy="86" r="39" fill="${c}" stroke="#D77A96" stroke-width="2"/><path d="M32 66 C38 54 50 50 58 50" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* رحم با لوله‌ها */
    uterus: { fy: 74, top: 30, body: c => `<path d="M30 46 C16 40 6 46 4 58 M90 46 C104 40 114 46 116 58" stroke="#D77A96" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="8" cy="66" rx="8" ry="6" fill="#FDE3C8" stroke="#D79A63"/><ellipse cx="112" cy="66" rx="8" ry="6" fill="#FDE3C8" stroke="#D79A63"/><path d="M26 44 C24 22 96 22 94 44 C92 92 72 116 68 126 L68 146 L52 146 L52 126 C48 116 28 92 26 44Z" fill="${c}" stroke="#B84E6E" stroke-width="2"/><path d="M36 46 C38 36 46 32 54 32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* اسپرم: سر بیضی و دم موجی */
    sperm: { fy: 70, top: 22, body: c => `<path d="M60 116 C46 126 74 134 60 144 C46 152 70 158 62 164" stroke="#3F87BF" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="50" y="104" width="20" height="16" rx="6" fill="#E9C27A" stroke="#B4903C"/><ellipse cx="60" cy="70" rx="42" ry="40" fill="${c}" stroke="#3F87BF" stroke-width="2.4"/><ellipse cx="58" cy="60" rx="24" ry="20" fill="#fff" opacity=".35"/>` },
    /* مغز: دو نیمکره با شکنج‌ها */
    /* کره چشم: صلبیه سفید با رگ‌های ریز و کلاهک عنبیه */
    eyeball: { fy: 92, top: 30, body: c => `<circle cx="60" cy="90" r="50" fill="${c}" stroke="#9fb3c2" stroke-width="2.5"/><path d="M28 54 C40 36 80 36 92 54 C80 46 40 46 28 54Z" fill="#2F8FB0"/><path d="M104 96 l-12 -2 M102 110 l-12 2 M18 100 l10 -2" stroke="#E07A6A" stroke-width="1.6" opacity=".6"/><path d="M26 76 C28 62 38 52 50 48" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>` },
    /* لاله گوش */
    ear: { fy: 88, top: 22, body: c => `<path d="M60 22 C18 20 8 70 14 104 C20 132 44 148 62 142 C78 136 74 118 64 110 C56 102 66 92 80 86 C100 76 106 58 100 44 C94 30 80 22 60 22Z" fill="${c}" stroke="#D9A988" stroke-width="2.5"/><path d="M58 36 C34 38 26 66 30 92" stroke="#D9A988" stroke-width="3" fill="none" opacity=".7"/><path d="M40 44 C46 34 56 30 66 30" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* حلزون گوش */
    snail: { fy: 88, top: 32, body: c => `<circle cx="60" cy="90" r="50" fill="${c}" stroke="#3F8FB8" stroke-width="2.5"/><path d="M60 90 m-40 0 a40 40 0 1 1 80 0 a32 32 0 1 1 -64 0 a24 24 0 1 1 48 0" stroke="#3F8FB8" stroke-width="3" fill="none" opacity=".45"/><path d="M26 68 C32 54 44 46 56 44" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".7"/>` },
    /* طبل (پرده گوش) */
    drum: { fy: 96, top: 40, body: c => `<path d="M20 64 L20 124 Q60 146 100 124 L100 64Z" fill="${c}"/><ellipse cx="60" cy="64" rx="40" ry="14" fill="#F5E6D3" stroke="#C27A5C" stroke-width="2.5"/><path d="M20 80 L40 124 L60 82 L80 124 L100 80" stroke="#fff" stroke-width="3" fill="none" opacity=".55"/><path d="M30 30 L50 58 M92 26 L72 56" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><circle cx="30" cy="30" r="6" fill="#F2C94C"/><circle cx="92" cy="26" r="6" fill="#F2C94C"/>` },
    /* عدسی دوکوژ */
    lens: { fy: 90, top: 28, body: c => `<path d="M60 26 C110 50 110 130 60 152 C10 130 10 50 60 26Z" fill="${c}" stroke="#6F9FC0" stroke-width="2.5"/><path d="M42 56 C34 74 34 96 40 112" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>` },
    /* گیرنده مخروطی */
    cone: { fy: 96, top: 26, body: c => `<path d="M60 22 L98 120 Q60 136 22 120Z" fill="${c}" stroke="#B5562F" stroke-width="2.5" stroke-linejoin="round"/><rect x="48" y="124" width="24" height="16" rx="6" fill="#F2C94C" stroke="#C9A12C"/><path d="M48 54 L36 100" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>` },
    /* زنگوله وزوز */
    bell: { fy: 92, top: 26, body: c => `<path d="M60 26 C30 26 24 60 24 88 C24 110 14 118 10 128 H110 C106 118 96 110 96 88 C96 60 90 26 60 26Z" fill="${c}" stroke="#C9A12C" stroke-width="2.5"/><circle cx="60" cy="136" r="9" fill="#C9A12C"/><path d="M8 60 q-6 10 0 20 M112 60 q6 10 0 20" stroke="#C9A12C" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M38 52 C42 42 50 36 58 34" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* چارت اسنلن */
    chart: { fy: 100, top: 20, body: c => `<rect x="18" y="20" width="84" height="122" rx="10" fill="${c}" stroke="#9AA9B1" stroke-width="2.5"/><text x="60" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="30" fill="#1d1d1d">E</text><path d="M34 128 H86" stroke="#c2413a" stroke-width="2"/><path d="M38 132 h8 M52 132 h6 M64 132 h8 M78 132 h4" stroke="#555" stroke-width="2.4"/>` },
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
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` },
    /* کلیه لوبیایی با ناف رو به راست و دم میزنای */
    kidney: { fy: 90, top: 34, body: c => `<path d="M76 98 C86 112 84 130 92 146" stroke="#E7C26B" stroke-width="7" fill="none" stroke-linecap="round"/><path transform="translate(54 92) scale(1.02 0.94)" d="M-6 -60 C26 -64 40 -40 38 -18 C36 -8 24 -6 22 0 C24 6 36 8 38 18 C40 40 26 64 -6 60 C-34 56 -44 28 -44 0 C-44 -28 -34 -56 -6 -60Z" fill="${c}"/><path d="M22 62 C16 78 16 98 20 112" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".35"/>` },
    /* مثانه بادکنکی با ادرار، دو میزنای و پیشابراه */
    bladder: { fy: 78, top: 30, body: c => `<path d="M34 34 C32 20 30 12 28 4 M86 34 C88 20 90 12 92 4" stroke="#E7C26B" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M60 128 V146" stroke="#E7C26B" stroke-width="8" stroke-linecap="round"/><path d="M18 74 C16 30 104 30 102 74 C104 108 80 128 60 130 C40 128 16 108 18 74Z" fill="${c}"/><path d="M22 96 C30 116 46 126 60 126 C74 126 90 116 98 96Z" fill="#F2C94C" opacity=".75"/><ellipse cx="38" cy="54" rx="7" ry="11" transform="rotate(28 38 54)" fill="#fff" opacity=".4"/>` },
    /* سنگ نامنظم */
    stone: { fy: 88, top: 42, body: c => `<path d="M30 54 L58 40 L88 48 L106 76 L100 112 L74 136 L40 132 L16 108 L14 74Z" fill="${c}" stroke="#6F522C" stroke-width="3" stroke-linejoin="round"/><path d="M40 60 L52 54" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".4"/><circle cx="86" cy="118" r="3" fill="#6F522C" opacity=".5"/><circle cx="30" cy="96" r="2.5" fill="#6F522C" opacity=".5"/>` },
    /* ظرف نمونه ادرار با درپوش */
    cup: { fy: 86, top: 34, body: c => `<rect x="20" y="36" width="80" height="14" rx="5" fill="#E05A4F"/><path d="M24 50 H96 L90 144 H30Z" fill="#fff" stroke="#9fb3c2" stroke-width="3"/><path d="M27 104 H93 L90 141 H30Z" fill="${c}"/><path d="M34 60 L38 132" stroke="#fff" stroke-width="5" opacity=".7"/>` },
    /* کلاف گلومرول درون کپسول بومن */
    glom: { fy: 92, top: 38, body: c => `<circle cx="60" cy="94" r="52" fill="${c}"/><circle cx="60" cy="94" r="42" fill="#FFF8E6"/><path d="M28 94 C30 66 60 60 64 80 C68 100 44 104 50 84 C56 64 92 72 88 96 C84 118 56 122 50 108 C44 92 76 92 74 110 C72 128 40 126 34 110" stroke="#E07A70" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/><path d="M8 70 C18 66 26 72 30 80" stroke="#D9443A" stroke-width="7" fill="none" stroke-linecap="round"/>` },
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

  const FACE_X = { kidney: 52 };
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
/* لِکسا — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study کتاب Cohen (مشکلات گوارشی David، Case Study 1-1
 * زانوهای Greg، Case Study 1-2 تنفس Sally، Case Study 1-3 شکستگی گردن ران Esther)، یادداشت‌های بالینی کتاب Stanfield
 * (شرح حال Gary Smith، یادداشت مطب Maria Brown، مشاوره پوست بیمار گرمازده، یادداشت اورژانس، یادداشت سیر بیماری بیمار ۹۲ ساله،
 * گزارش رادیولوژی Betty Street، خلاصه ترخیص انگشت عفونی)، تمرین‌های واژه‌سازی، جمع و نسخه‌خوانی فصل ۱ کتاب Fremgen
 * و جدول‌های اختصار، هم‌آوا و وضعیت بیمار کتاب‌های Dummies و Stanfield.
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= الفبای زبان پزشکی ================= */
    {
      id: 'r1', w: 'bs', title: "A student’s heartburn", who: "David, a 22-year-old student",
      brief: "In a Cohen case study, David, a 22-year-old student, has had a burning pain in the middle of his chest at night for four months. The examination notes say: epigastric pain, orthopnea and occasional dysphagia. He was referred to a gastroenterologist for possible GERD and underwent EGD.",
      chart: [['Age', '22 y/o'], ['CC', 'epigastric pain, heartburn'], ['Sx', 'orthopnea, dysphagia'], ['Referral', 'gastroenterologist'], ['Test', 'barium swallow, EGD']],
      fig: { a: 'translate-steps', l: [] },
      steps: [
        M("Translation", "epigastric pain means pain…", ["above the stomach, in the upper middle abdomen", "below the stomach", "inside the intestine", "in the lower back"], "epi- upon + gastr/o + -ic."),
        M("specialist", "What does a gastroenterologist specialise in?", ["stomach and intestines", "heart", "lung", "liver and spleen"], 'gastr/o + enter/o + ‎-logist‎.', null, { a: ['word-parts'], l: [] }),
        M("symptom", "dysphagia means…", ["difficulty swallowing", "difficulty speaking", "difficulty breathing", "stomach ache"], 'dys- + ‎-phagia‎.'),
        T("abbreviation", "In a chart, y/o means years old.", true, 'years old.'),
        M("Test", "What does the physician see in an EGD?", ["oesophagus, stomach and duodenum", "large intestine", "trachea and bronchi", "bladder"], 'esophagogastroduodenoscopy.'),
        O("Translation", "Put the steps for translating epigastric in order", ['suffix -ic', 'prefix epi-', 'root gastr'], "Pertaining to, upon, stomach: the region above the stomach."),
        T("Pronunciation", "In dysphagia, the ph is pronounced like f.", true, 'dis-FAY-jee-ah.'),
        S("Spelling", "Spell the term for “specialist in the stomach and intestines”", 'gastroenterologist', 'gastr/o + enter/o + ‎-logist‎.', 'gastroentero…')
      ]
    },
    {
      id: 'r2', w: 'bs', title: "A history with yellow skin", who: "Gary Smith, a 35-year-old man",
      brief: "In a history and physical (H&P) in Stanfield, Gary Smith came in with fatigue, sore throat, muscle pain and itchy skin. His eyes and skin are yellow, his liver is enlarged and tender, and he is post-tonsillectomy from childhood. The physician suspected hepatitis and ordered a CBC and liver tests.",
      chart: [['Age', '35'], ['HEENT', 'eyes jaundiced; throat red'], ['GI', 'tender, enlarged liver'], ['Hx', 'post-tonsillectomy at age 10'], ['Plan', 'CBC, liver function, Hep A/B/C']],
      fig: { a: 'hepatomegaly', l: ["A big liver"] },
      steps: [
        M("symptom", "What is yellowing of the skin and eyes called?", ['jaundice', 'cyanosis', 'pruritus', 'erythema'], 'jaundice.', null, { a: ['jaundice'], l: ["yellow skin"] }),
        M("Translation", "post-tonsillectomy means…", ["after removal of the tonsils", "before removal of the tonsils", "tonsil inflammation", "incision into the tonsil"], "post- after, tonsill/o tonsil, -ectomy removal."),
        M("Term", "Enlargement of the liver…", ['hepatomegaly', 'splenomegaly', 'hepatitis', 'hepatoma'], 'hepat/o + ‎-megaly‎.'),
        T("abbreviation", "HEENT means head, eyes, ears, nose and throat.", true, 'head, eyes, ears, nose, throat.'),
        M("diagnosis", "hepatitis means…", ["liver inflammation", "liver tumour", "enlarged liver", "removal of the liver"], 'hepat/o + ‎-itis‎.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['CBC', "complete blood count"], ['BP', "blood pressure"], ['T', "temperature"], ['H&P', "history and physical"]], "Note abbreviations."),
        S("Spelling", "Spell the term for “inflammation of the liver”", 'hepatitis', 'hepat/o + ‎-itis‎.', 'hepat…')
      ]
    },
    {
      id: 'r3', w: 'bs', title: "Follow-up at the office", who: "Maria Brown, a 64-year-old woman",
      brief: "In an office note in Stanfield, Maria Brown came for follow-up of gastralgia and aphasia (left over from an earlier stroke). A week ago she had an EGD, and a bleeding stomach ulcer was brought to hemostasis with cautery. Her gastralgia has now resolved, and peristalsis is heard in all four quadrants of the abdomen.",
      chart: [['Age', '64'], ['Follow-up', 'gastralgia, aphasia'], ['EGD', 'bleeding gastric ulcer; cautery'], ['Now', 'gastralgia ceased; peristalsis present']],
      fig: { a: 'gastralgia', l: ["stomach ache"] },
      steps: [
        M("Translation", "gastralgia means…", ["stomach ache", "stomach inflammation", "removal of the stomach", "stomach bleeding"], 'gastr/o + ‎-algia‎.'),
        M("Translation", "aphasia means…", ["inability to speak", "inability to swallow", "inability to see", "inability to walk"], 'a- + ‎-phasia‎.'),
        T("Term", "hemostasis means stopping of bleeding.", true, "hem/o + -stasis (standing still)."),
        M("sound-alike word", "If the patient had difficulty swallowing instead of aphasia, what would the correct term be?", ['dysphagia', 'dysphasia', 'aphasia', 'dyspnea'], "-phagia is swallowing and -phasia is speech."),
        M("suffix", "In gastric ulcer, gastric means…", ["pertaining to the stomach", "stomach inflammation", "removal of the stomach", "below the stomach"], 'gastr/o + ‎-ic‎.'),
        P("Term", "Match each term to its meaning", [['gastralgia', "stomach ache"], ['aphasia', "loss of speech"], ['hemostasis', "stopping of bleeding"], ['peristalsis', "wave-like movement of the intestine"]], "Note terms."),
        S("Spelling", "Spell the term for “stomach pain” (with -algia)", 'gastralgia', 'gastr + ‎-algia‎.', 'gastr…')
      ]
    },
    /* ================= ریشه‌ها ================= */
    {
      id: 'r4', w: 'rt', title: "Arthritic knees", who: "Greg, a 68-year-old man",
      brief: "In Case Study 1-1 in Cohen, Greg is complaining of (c/o) bilateral knee discomfort that gets worse before rain. He takes NSAIDs prn but hasn’t improved. He tore his ACL in college, and he takes Lipitor for hyperlipidemia. His family physician referred him to an orthopedic surgeon.",
      chart: [['Age', '68 y/o'], ['CC', 'bilateral knee discomfort'], ['Meds', 'NSAIDs prn; Lipitor 10 mg'], ['Hx', 'torn ACL'], ['X-ray', 'joint space narrowing, R > L']],
      fig: { a: 'tissue-layers', l: [] },
      steps: [
        M("prefix", "In bilateral, bi- means…", ["two", "one", "half", "three"], "Both knees."),
        M("suffix", "What is -itis in arthritis?", ["a suffix meaning inflammation", "root", "prefix", "combining vowel"], 'arthr/o + ‎-itis‎.'),
        M("root", "arthr/o is a…", ["Combining form", "acronym", "prefix", "suffix"], "Root + combining vowel."),
        M("abbreviation", "In NSAID, AI means…", ['anti-inflammatory', 'antacid', 'anti-infectious', 'after incident'], 'nonsteroidal anti-inflammatory drug.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['c/o', "complaining of"], ['prn', "as needed"], ['ACL', "anterior cruciate ligament"], ['y/o', "years old"]], "Abbreviations in Greg’s chart."),
        M("Term", "hyperlipidemia means…", ["too much fat in the blood", "too much sugar in the blood", "too little fat in the blood", "inflammation of fat"], 'hyper- + lip/o + ‎-emia‎.'),
        T("Field", "orthopedic is built from orth/o (straight) and ped/o.", true, "A bone and joint surgeon."),
        S("Spelling", "Spell the term for wear-and-tear disease of bone and joint", 'osteoarthritis', 'oste/o + arthr/o + ‎-itis‎.', 'osteo…')
      ]
    },
    {
      id: 'r5', w: 'rt', title: "A hairdresser’s difficult breathing", who: "Sally, a 54-year-old woman",
      brief: "In Case Study 1-2 in Cohen, Sally has dyspnea that was first put down to LUL pneumonia. She didn’t improve on antibiotics, and a small pneumothorax was seen on the X-ray. Dr. Williams, a pulmonologist, performed bronchoscopy and biopsy. She is a hairdresser, and the fumes from hair and nail products make her short of breath.",
      chart: [['Age', '54 y/o'], ['CC', 'dyspnea'], ['CXR', 'small LUL pneumothorax'], ['Sputum', 'purulent'], ['Tests', 'bronchoscopy, biopsy (negative)']],
      fig: { a: 'trunk-roots', l: [] },
      steps: [
        M("Pronunciation", "How are the gh in cough and the ph in radiograph pronounced?", ['f', 'g', 'h', 's'], "koff and RAY-dee-oh-graf."),
        M("Pronunciation", "How is the pn in bronchopneumonia pronounced?", ['n', 'p', 'f', 's'], "The p is silent."),
        M("word with two or more roots", "Which word is a compound word (has more than one root)?", ['pneumothorax', 'pulmonary', 'respiratory', 'antibiotic'], 'pneum/o + thorac/o.'),
        M("suffix", "Which is the “condition” suffix in pneumonia?", ['-ia', '-nia', '-monia', '-onia'], 'pneumon + ‎-ia‎.'),
        M("Plural", "What is the plural of spectrum?", ['spectra', 'spectria', 'spectrina', 'spectri'], '‎-um → -a‎.'),
        P("Term", "Match each term to its meaning", [['dyspnea', "shortness of breath"], ['purulent', "containing pus"], ['febrile', "feverish"], ['pulmonologist', "lung specialist"]], "Terms in Sally’s chart."),
        T("abbreviation", "LUL means the left upper lobe of the lung.", true, 'left upper lobe.'),
        S("Spelling", "Spell the term for “difficult breathing”", 'dyspnea', "dys- + -pnea; here the p is not silent.", 'dysp…')
      ]
    },
    {
      id: 'r6', w: 'rt', title: "Heatstroke and a suspicious mole", who: "a 33-year-old construction worker",
      brief: "In a dermatology consultation in Stanfield, a 33-year-old worker was admitted with heatstroke and dehydration and given IV fluids. On examination, an irregular 3 × 5 cm lesion, red to black with poorly defined borders, was seen on his right thigh. Dr. Henri Adams, a dermatologist, wrote: R/O melanoma and Bx.",
      chart: [['Age', '33'], ['Admit', 'heat stroke, dehydration'], ['Allergies', 'NKA'], ['Skin', 'irregular lesion R thigh'], ['Impression', 'R/O melanoma; Bx']],
      fig: { a: 'color-wheel', l: [] },
      steps: [
        M("root", "In melanoma, melan/o means…", ["black", "red", "white", "yellow"], "melanoma means black tumour."),
        M("specialist", "What does a dermatologist specialise in?", ["skin", "blood", "heart", "bone"], 'dermat/o + ‎-logist‎.'),
        M("abbreviation", "Bx means…", ["tissue sample", "fracture", "diagnosis", "treatment"], 'biopsy.', null, { a: ['punch-biopsy'], l: ["punch biopsy"] }),
        T("abbreviation", "R/O melanoma means melanoma is certain.", false, "It means melanoma must be ruled out or confirmed."),
        M("Term", "dehydration means…", ["loss of body water", "too much water in the body", "treatment with water", "fear of water"], 'de- + hydr/o.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['NKA', "no known allergies"], ['WNL', "within normal limits"], ['ED', "emergency department"], ['IV', "intravenously"]], "Consultation abbreviations."),
        S("Spelling", "Spell the term for a black tumour of pigment cells", 'melanoma', 'melan/o + ‎-oma‎.', 'melan…')
      ]
    },
    /* ================= پسوندها ================= */
    {
      id: 'r7', w: 'sf', title: "Word-building orders", who: "The word-building exercise in Fremgen",
      brief: "In the “Building Medical Terms” exercise in chapter 1 of Fremgen, you must use the right root and suffix to build words for abnormal softening of the heart, a surgical opening into the stomach, repair of the nose, the study of disease, a nerve tumour and inflammation of the ear, as in the textbook example: splen/o + -megaly = splenomegaly.",
      chart: [['Example', 'splenomegaly'], ['Task 1', 'softening of the heart'], ['Task 2', 'opening into the stomach'], ['Task 3', 'repair of the nose'], ['Task 4', 'nerve tumor']],
      fig: { a: 'suffix-families', l: [] },
      steps: [
        M("Build", "Abnormal softening of the heart…", ['cardiomalacia', 'cardiomegaly', 'cardiosclerosis', 'cardiopathy'], 'cardi/o + ‎-malacia‎.'),
        M("Build", "A surgical opening into the stomach…", ['gastrostomy', 'gastrotomy', 'gastrectomy', 'gastroscopy'], 'gastr/o + ‎-stomy‎.', null, { a: ['cut-suffixes'], l: [] }),
        M("Build", "Surgical repair of the nose…", ['rhinoplasty', 'rhinitis', 'rhinorrhea', 'rhinotomy'], 'rhin/o + ‎-plasty‎.'),
        M("Build", "The study of disease…", ['pathology', 'pathogen', 'neuropathy', 'pathologist'], 'path/o + ‎-logy‎.'),
        M("Build", "A nerve tumour…", ['neuroma', 'neuralgia', 'neuritis', 'neuropathy'], 'neur/o + ‎-oma‎.'),
        M("Build", "Inflammation of the ear…", ['otitis', 'otalgia', 'otorrhea', 'otoplasty'], 'ot/o + ‎-itis‎.'),
        T("Build", "carcinogenic means cancer-causing.", true, 'carcin/o + ‎-genic‎.'),
        S("Spelling", "Spell the term for “enlarged spleen”", 'splenomegaly', 'splen/o + ‎-megaly‎.', 'spleno…')
      ]
    },
    {
      id: 'r8', w: 'sf', title: "A bone scan report", who: "Betty Street, a 79-year-old woman",
      brief: "In a radiology report in Stanfield, Betty Street had a whole-body bone scan after a fall and low back pain. Findings: degenerative changes in the lower T and L vertebrae, no sign of metastatic disease or compression FX, and traumatic fractures of the upper and lower branches of the right pubic bone.",
      chart: [['Age', '79'], ['Dx', 'cervical FX'], ['Study', 'bone scan, total body, A/P views'], ['Hx', 'fall and back pain'], ['Findings', 'degenerative changes; traumatic fractures']],
      fig: { a: 'spine-vertebrae', l: ["The spine"] },
      steps: [
        M("abbreviation", "FX means…", ["fracture", "finding", "history of", "treatment"], 'fracture.'),
        M("abbreviation", "Hx means…", ["history of", "Hospital", "diagnosis", "treatment"], 'history.'),
        M("Term", "metastatic disease is a disease that…", ["has spread to a distant site", "is congenital", "is infectious", "has been treated"], "meta- beyond + -stasis."),
        T("Direction", "A/P views means front-to-back views.", true, 'anterior-posterior.', { a: ['direction-terms'], l: [] }),
        M("Plural", "What is the plural of vertebra?", ['vertebrae', 'vertebras', 'vertebri', 'vertebrum'], '‎-a → -ae‎.'),
        P("Term", "Match each term to its meaning", [['degenerative', "wearing down"], ['traumatic', "caused by injury"], ['superior', "upper"], ['inferior', "lower"]], "Report terms."),
        S("Spelling", "Spell the term for the physician who reads X-ray images", 'radiologist', 'radi/o + ‎-logist‎.', 'radio…')
      ]
    },
    {
      id: 'r9', w: 'sf', title: "A swollen finger", who: "a 28-year-old photocopier technician",
      brief: "In a discharge summary in Stanfield, a 28-year-old man had a week of pain and swelling in the tip (distal phalanx) of his right index finger. His distal interphalangeal joint was aspirated and he was admitted for IV antibiotics. His WBC on admission was 13,600 and the C&S stayed negative. He was discharged on Augmentin, one p.o. q. 8 hours.",
      chart: [['Age', '28'], ['HPI', 'pain, swelling R index distal phalanx'], ['PE', 'soft tissue swelling, erythema'], ['Lab', 'WBC 13,600; C&S negative'], ['D/C meds', 'Augmentin p.o. q 8 h × 7 days']],
      fig: { a: 'hand-phalanges', l: ["Finger bones"] },
      steps: [
        M("Direction", "distal phalanx means the finger bone…", ["farthest from the trunk, at the fingertip", "nearer the trunk", "in the middle", "in the palm"], "distal means far."),
        M("Plural", "What is the plural of phalanx?", ['phalanges', 'phalanxes', 'phalanci', 'phalangi'], '‎-nx → -nges‎.'),
        M("prefix", "interphalangeal joint means the joint…", ["between two finger bones", "inside one finger bone", "around the finger", "under the nail"], "inter- means between."),
        M("prescription", "one p.o. q. 8 hours means…", ["one by mouth every 8 hours", "one by injection every 8 hours", "eight by mouth a day", "one after meals"], "p.o. by mouth; q every.", null, { a: ['dose-clock'], l: [] }),
        P("abbreviation", "Match each abbreviation to its meaning", [['WBC', "white blood cell"], ['C&S', "culture and sensitivity"], ['IV', "intravenously"], ['ED', "emergency department"]], "Discharge-summary abbreviations."),
        T("Term", "erythema means redness of the skin.", true, "erythr/o means red."),
        S("Spelling", "Spell the term for a single finger or toe bone", 'phalanx', "Plural: phalanges.", 'phal…')
      ]
    },
    /* ================= پیشوندها ================= */
    {
      id: 'r10', w: 'pf', title: "A broken hip", who: "Esther, a 72-year-old woman",
      brief: "In Case Study 1-3 in Cohen, Esther, who already had osteoporosis, fell on a kerb and broke the neck of her right femur. She received an analgesic before surgery (preoperative), had a bipolar hemiarthroplasty under spinal anesthesia with intravenous antibiotics, and after surgery (postoperative) her thigh was kept in abduction.",
      chart: [['Age', '72 y/o'], ['Hx', 'pre-existing osteoporosis'], ['Dx', 'displaced fracture, R femoral neck'], ['Surgery', 'bipolar hemiarthroplasty'], ['Postop', 'hip in abduction; PT']],
      fig: { a: 'femur', l: ["femoral neck"] },
      steps: [
        M("prefix", "In pre-existing, pre- means…", ["before", "after", "between", "against"], "It existed before."),
        M("prefix", "In analgesic and anesthesia, an- means…", ["without", "against", "many", "half"], "Without pain and without sensation.", null, { a: ['negation-prefixes'], l: [] }),
        M("prefix", "In hemiarthroplasty, hemi- means…", ["half", "blood", "two", "all"], "Replacement of half a joint."),
        M("prefix", "In bipolar, bi- means…", ["two", "life", "half", "one"], "Two poles."),
        M("Movement", "abduction means…", ["moving a limb away from the midline", "moving toward the midline", "bending a joint", "rotating"], "ab- means away from.", null, { a: ['abduction'], l: ['abduction'] }),
        P("prefix", "Match each prefix to its meaning", [['dis-', "apart, away"], ['re-', "again"], ['de-', "down, remove"], ['intra-', "within"]], "dislocation, replacement, degeneration, intravenous."),
        O("time", "Put the stages of Esther’s operation in order", ['preoperative analgesic', 'spinal anesthesia', 'hemiarthroplasty', 'postoperative abduction'], "Before, during and after surgery."),
        S("Spelling", "Spell the term for “after surgery”", 'postoperative', 'post- + operative.', 'postop…')
      ]
    },
    {
      id: 'r11', w: 'pf', title: "Position the patient correctly", who: "Patient-positioning exercise",
      brief: "Based on the “Terms for Directions and Positions” table in Stanfield, you are the operating-room technologist and must place several patients in the right position for different procedures: one supine, one prone, one half sitting, one with the head lowered and one on the left side.",
      chart: [['Bed 1', 'supine'], ['Bed 2', 'prone'], ['Bed 3', 'Fowler'], ['Bed 4', 'Trendelenburg'], ['Bed 5', 'Sims']],
      fig: { a: 'patient-positions', l: [] },
      steps: [
        M("Position", "A patient lying on the back, face up…", ['supine', 'prone', 'Sims', 'lithotomy'], 'supine.'),
        M("Position", "A patient lying on the abdomen, face down…", ['prone', 'supine', 'Fowler', 'Trendelenburg'], 'prone.'),
        M("Position", "The head of the bed is raised and the patient is half sitting…", ['Fowler', 'Sims', 'prone', 'lithotomy'], 'Fowler.'),
        M("Position", "The patient lies on the back on a tilted bed with the head lower than the feet…", ['Trendelenburg', 'Fowler', 'supine', 'knee-chest'], 'Trendelenburg.'),
        T("Position", "In the Sims position the patient lies on the left side with the right knee drawn up.", true, 'Sims position.'),
        P("Direction", "Match each direction to its meaning", [['lateral', "toward the side"], ['medial', "toward the midline"], ['recumbent', "lying down"], ['upright', "standing"]], "Directions and positions."),
        S("Spelling", "Spell the term for lying face up", 'supine', "Like a soup bowl facing up.", 'sup…')
      ]
    },
    {
      id: 'r12', w: 'pf', title: "Three injections, three depths", who: "Injection-route exercise",
      brief: "Based on figure 2-1 in the companion books, you have three drug orders: an intravenous drip, an intradermal skin test and an intramuscular vaccine. You need to know the prefix and root of each route and how deep the needle goes.",
      chart: [['Order 1', 'IV fluids'], ['Order 2', 'ID skin test'], ['Order 3', 'IM vaccine'], ['Order 4', 'subcut insulin']],
      fig: { a: 'injections', l: ["Three kinds of injection"] },
      steps: [
        M("Route", "IV means…", ["intravenously", "intramuscularly", "into the skin", "under the tongue"], 'intra- + ven/o + ‎-ous‎.'),
        M("Route", "A skin test injected into the skin…", ['intradermal', 'intramuscular', 'intravenous', 'transdermal'], 'intra- + derm/o + ‎-al‎.', null, { a: ['injection-routes'], l: [] }),
        M("Route", "Where is insulin usually injected?", ["under the skin (subcutaneous)", "into the vein", "into the bone", "under the tongue"], "Into the fatty tissue under the skin."),
        O("Depth", "Order the routes from shallowest to deepest", ['intradermal', 'subcutaneous', 'intramuscular'], "Skin, fat, muscle."),
        T("Route", "parenteral means any route other than the digestive tract.", true, "para- beside + enter/o intestine."),
        P("prefix", "Match each prefix to its meaning", [['intra-', "within"], ['sub-', "below"], ['trans-', "through"], ['hypo-', "below, low"]], "Injection-route prefixes."),
        S("Spelling", "Spell the term for “into a muscle”", 'intramuscular', 'intra- + muscul/o + ‎-ar‎.', 'intramus…')
      ]
    },
    /* ================= قواعد و تله‌ها ================= */
    {
      id: 'r13', w: 'rl', title: "Plurals in the chart", who: "The “Making Plurals” exercise in Fremgen",
      brief: "In the Making Plurals exercise in chapter 1 of Fremgen and the case-study questions in Cohen, you have to write the plurals of chart terms: diagnosis, diverticulum, bursa, bronchus and artery. Look at the ending of each word before you write.",
      chart: [['1', 'diagnosis'], ['2', 'diverticulum'], ['3', 'bursa'], ['4', 'bronchus'], ['5', 'artery']],
      fig: { a: 'plural-rules', l: [] },
      steps: [
        M("Plural", "The plural of diagnosis…", ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], '‎-is → -es‎.'),
        M("Plural", "The plural of diverticulum…", ['diverticula', 'diverticuli', 'diverticulums', 'diverticulae'], '‎-um → -a‎.'),
        M("Plural", "The plural of bursa…", ['bursae', 'bursi', 'bursas', 'bursata'], '‎-a → -ae‎.'),
        M("Plural", "The plural of bronchus…", ['bronchi', 'bronchae', 'bronchuses', 'bronchia'], '‎-us → -i‎.'),
        M("Plural", "The plural of artery…", ['arteries', 'arterys', 'arteriae', 'arteri'], "English rule: -y → -ies."),
        P("Plural", "Match each singular to its plural", [['ganglion', 'ganglia'], ['lumen', 'lumina'], ['appendix', 'appendices'], ['larynx', 'larynges']], "Other rules.", { a: ['plural-exceptions'], l: [] }),
        T("Plural", "meatus stays meatus in the plural.", true, "An exception."),
        S("Spelling", "Write the plural of “fungus”", 'fungi', '‎-us → -i‎.', 'fung…')
      ]
    },
    {
      id: 'r14', w: 'rl', title: "Ambiguous abbreviations", who: "The acronym exercise in the Dummies book",
      brief: "Chapter 4 of the Dummies book notes that one acronym can have several meanings: AMA, CAT, ECT and MRI each have two or three, and BM even more. You have to find the meaning of each from the context.",
      chart: [['AMA', 'patient left AMA'], ['MS', 'cardiac murmur, MS'], ['ECT', 'severe depression, ECT'], ['BM', 'no BM since yesterday']],
      fig: { a: 'word-kinds', l: [] },
      steps: [
        M("tissue", "“The patient left the hospital AMA” means…", ["against medical advice", "with the American Medical Association", "after lunch", "by ambulance"], 'against medical advice.'),
        M("tissue", "In a cardiac chart, MS most likely means…", ["narrowing of the mitral valve", "multiple sclerosis", "morphine sulfate", "Medical student"], 'mitral stenosis.'),
        M("tissue", "In a patient with severe depression, ECT means…", ["electroconvulsive therapy", "enteric-coated tablet", "clotting test", "heart tracing (ECG)"], 'electroconvulsive therapy.'),
        M("tissue", "“Has had no BM since yesterday” means…", ["bowel movement", "bone marrow", "breast milk", "body mass"], 'bowel movement.'),
        T("Rule", "If the meaning of an abbreviation isn’t clear, it’s better to write it out.", true, "Never write a made-up abbreviation."),
        P("acronym", "Match each acronym to its usual meaning", [['MRI', "magnetic resonance imaging"], ['COPD', "chronic obstructive lung disease"], ['CAT', "computed tomography"], ['AIDS', "acquired immunodeficiency syndrome"]], "Acronyms."),
        S("Spelling", "Spell the term for a word made of initials and read as one word", 'acronym', 'acr/o + onym.', 'acro…')
      ]
    },
    {
      id: 'r15', w: 'rl', title: "Traps in a nursing note", who: "Sound-alike exercise",
      brief: "Based on the “Troublesome Soundalikes” table in the Dummies book, you are reviewing a nursing note in which several sound-alike words have been written wrongly. You must decide which word is correct.",
      chart: [['Line 1', 'difficulty swallowing'], ['Line 2', 'heart pounding'], ['Line 3', 'itching of arms'], ['Line 4', 'pain at fibula side of leg']],
      fig: { a: 'soundalikes', l: [] },
      steps: [
        M("Sound-alike", "The patient has trouble swallowing:", ['dysphagia', 'dysphasia', 'dysphonia', 'dyspnea'], "-phagia: swallowing."),
        M("Sound-alike", "The patient says his heart is racing and pounding:", ['palpitation', 'palpation', 'pulsation', 'perfusion'], 'palpitation.'),
        M("Sound-alike", "Itching of the skin of the arms:", ['pruritus', 'pleuritis', 'pruritis', 'purpura'], "pruritus, with a u."),
        M("Sound-alike", "Pain on the outer side of the lower leg:", ['peroneal', 'perineal', 'peritoneal', 'periosteal'], "perONeal: on the lower leg.", null, { a: ['peri-pero'], l: [] }),
        M("sound-alike word", "A fracture in the pelvis (the wing of the hip bone):", ['ilium', 'ileum', 'ileus', 'ilion'], "ilium, with an i."),
        P("Sound-alike", "Match each term to its meaning", [['mucus', "slimy secretion (noun)"], ['mucous', "relating to mucus (adjective)"], ['callus', "hardened skin; new bone at a fracture"], ['efferent', "carrying away from the centre"]], "Sound-alike words."),
        S("Spelling", "Spell the term for itching", 'pruritus', "With a u.", 'prur…')
      ]
    },
    /* ================= در بیمارستان ================= */
    {
      id: 'r16', w: 'hs', title: "Four prescriptions", who: "The “Prescription Practice” exercise in Fremgen",
      brief: "In the Prescription Practice exercise in chapter 1 of Fremgen, you have to write out four prescriptions in plain language. The drugs are Pravachol, Lanoxin, Synthroid and Norvasc, and the full text of each prescription is in the patient’s chart.",
      chart: [['Rx 1', 'Pravachol 20 mg, i q noc, #30, refill 3x, no sub'], ['Rx 2', 'Lanoxin 0.125 mg, iii stat, then ii q am, #100'], ['Rx 3', 'Synthroid 0.075 mg, i daily, #100, refill x4'], ['Rx 4', 'Norvasc 5 mg, i q am, #60, 0 refills']],
      fig: { a: 'prescription-anatomy', l: [] },
      steps: [
        M('Sig', "i q noc means…", ["one every night", "one every morning", "one as needed", "one before meals"], "noc means night."),
        M('Sig', "iii stat, then ii q am means…", ["three immediately, then two every morning", "three times a day, twice at night", "three every morning", "two immediately"], "stat immediately; q am every morning."),
        M('Disp', "#30 means…", ["dispense 30", "take for 30 days", "30 mg", "every 30 minutes"], "The quantity to dispense."),
        M('Refill', "no sub means…", ["the pharmacist must not substitute another drug", "not to be taken under the tongue", "sold without a prescription", "without food"], 'no substitution.'),
        T('Refill', "refill x4 means the prescription can be refilled four times.", true, "Four refills."),
        P("abbreviation", "Match each part of the prescription to its meaning", [['Rx', "take; prescription"], ['Sig', "directions for use"], ['stat', "immediately"], ['daily', "once a day"]], "Parts of the prescription."),
        S("Spelling", "Write the abbreviation for “at bedtime”", 'hs', 'hour of sleep.', 'h…')
      ]
    },
    {
      id: 'r17', w: 'hs', title: "A dehydrated older woman", who: "a 92-year-old woman",
      brief: "In a progress note in Stanfield, a 92-year-old woman with dehydration is a little better. Her medications: D5W @ 100 cc/hr I.V., Biaxin 500 mg PO q12 hr for sinusitis, Omeprazole 20 mg PO daily for GERD and Xalatan drops 2 gtt in OS and OD for glaucoma. If she keeps improving, she will be D/C to LTC.",
      chart: [['Age', '92'], ['Dx', 'dehydration'], ['IV', 'D5W @ 100 cc/hr'], ['Meds', 'Biaxin PO q12 hr; Omeprazole PO daily; Xalatan 2 gtt OS/OD'], ['Plan', 'D/C to LTC']],
      fig: { a: 'route-abbr', l: [] },
      steps: [
        M("abbreviation", "PO q12 hr means…", ["by mouth every 12 hours", "by injection every 12 hours", "by mouth 12 times a day", "drops every 12 hours"], "per os; q means every."),
        M("abbreviation", "2 gtt OS means…", ["two drops in the left eye", "two drops in the right eye", "two tablets under the tongue", "two drops in the ear"], "gtt drops; OS left eye."),
        M("abbreviation", "D/C to LTC means…", ["discharge to a long-term care facility", "stop the drug in the intensive care unit", "transfer to the emergency department", "discharge home"], 'discharge to long-term care.', null, { a: ['care-settings'], l: [] }),
        M("Term", "sinusitis means…", ["sinus inflammation", "inflammation of the nose", "throat inflammation", "ear inflammation"], 'sinus + ‎-itis‎.'),
        T("Term", "dehydration means a lack of body water.", true, 'de- + hydr/o.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['OD', "right eye"], ['GERD', "acid reflux into the oesophagus"], ['IV', "intravenously"], ['daily', "once a day"]], "Note abbreviations."),
        S("Spelling", "Spell the term for loss of body water", 'dehydration', 'de- + hydr/o + ‎-ation‎.', 'dehyd…')
      ]
    },
    {
      id: 'r18', w: 'hs', title: "A three-week cold", who: "a 68-year-old man in the emergency department",
      brief: "In an emergency note in Stanfield, a 68-year-old man came in with angina and SOB. He has had a “cold” for three weeks with a cough producing green phlegm, fever up to 102.4, malaise and diaphoresis. A bedside EKG is normal. Impression: R/O pneumonia. Plan: CXR AP/Lateral, CBC, chem panel and cardiac enzymes three times over three hours.",
      chart: [['Age', '68'], ['CC', 'angina, SOB'], ['T', '102.4'], ['EKG', 'normal'], ['Plan', 'CXR AP/Lat, CBC, chem panel, cardiac enzymes × 3']],
      fig: { a: 'chart-note', l: [] },
      steps: [
        M("abbreviation", "SOB means…", ["shortness of breath", "cough", "chest pain", "fever"], 'shortness of breath.'),
        M("Term", "diaphoresis means…", ["heavy sweating", "frequent watery stools", "fever", "dehydration"], "Sweating."),
        M("abbreviation", "CXR AP/Lat means…", ["chest X-ray from the front and the side", "chest CT", "heart tracing (ECG)", "abdominal ultrasound"], 'chest x-ray, anterior-posterior and lateral.'),
        T("abbreviation", "R/O pneumonia means pneumonia is the confirmed diagnosis.", false, "It means the possibility has to be checked."),
        M("Instrument", "What is an EKG?", ["the recorded tracing of the heart’s electrical activity", "ECG machine", "a picture of the heart", "a blood test"], 'electrocardiogram.', null, { a: ['ecg-strip'], l: ["heart tracing (ECG)"] }),
        P("abbreviation", "Match each abbreviation to its meaning", [['CBC', "complete blood count"], ['CXR', "chest X-ray"], ['EKG', "heart tracing (ECG)"], ['R/O', "rule out"]], "Emergency-note abbreviations."),
        S("Spelling", "Spell the term for a lung infection", 'pneumonia', "Silent p.", 'pneu…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* لِکسا — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Ab', "Start the meaning of every word from the suffix, then read the prefix and finally the root."],
    ['Ab', "Root + combining vowel = combining form, such as cardi/o and gastr/o."],
    ['Ab', "Before a suffix that starts with a vowel, the o is dropped: gastritis, not gastroitis."],
    ['Ab', "Between two roots, the combining vowel always stays: osteoarthritis."],
    ['Ab', "At the start of a word, p before s, n and t is silent: psychology, pneumonia, ptosis."],
    ['Ab', "nephr/o is Greek and ren/o is Latin; both mean kidney."],
    ['Rt', "cephal/o is the head and encephal/o the brain inside the head."],
    ['Rt', "enter/o is the small intestine and col/o the large intestine."],
    ['Rt', "my/o is muscle and myel/o is the spinal cord or bone marrow."],
    ['Rt', "erythr/o is red, leuk/o white, cyan/o blue, melan/o black and xanth/o yellow."],
    ['Rt', "staphyl/o means in grape-like clusters and strept/o in chains."],
    ['Sf', "-itis is inflammation, -osis condition, -algia pain and -megaly enlargement."],
    ['Sf', "-ectomy is removal, -tomy incision and -stomy a new opening."],
    ['Sf', "-scope is the instrument and -scopy the procedure; -graph is the machine and -gram the record."],
    ['Sf', "-rrhea is flow, -rrhage bursting forth of blood and -rrhaphy suture; all three with rrh."],
    ['Sf', "-iatrics is the specialty and -ician its physician: pediatrics and pediatrician."],
    ['Pf', "uni- is one, bi- two, tri- three, quadri- four and hemi- half."],
    ['Pf', "intra- is within and inter- between; one letter, two places."],
    ['Pf', "brady- is slow and tachy- fast; hypo- low and hyper- high."],
    ['Pf', "abduction is moving away from the midline and adduction moving toward it."],
    ['Pf', "proximal is nearer the trunk and distal farther from it."],
    ['Rl', "vertebra → vertebrae, bronchus → bronchi, bacterium → bacteria."],
    ['Rl', "appendix → appendices, phalanx → phalanges, ganglion → ganglia."],
    ['Rl', "meatus stays meatus in the plural, and femur becomes femora."],
    ['Rl', "The ileum is the last part of the small intestine and the ilium the wing of the hip bone."],
    ['Rl', "dysphagia is difficulty swallowing and dysphasia difficulty speaking."],
    ['Rl', "perINeal is between the legs and perONeal on the lower leg."],
    ['Hs', "The H&P is written on the day of admission, progress notes every day and the discharge summary on the day of discharge."],
    ['Hs', "i po tid means one tablet, by mouth, three times a day."],
    ['Hs', "Don’t write qd and qod; write daily and every other day."],
    ['Hs', "Never write a trailing zero (1 mg), but a leading zero is required (0.5 mg)."],
    ['Hs', "Every drug has one generic name and one or more brand names."]
  ];
  const COLORS = { Ab: '#4B4FC4', Rt: '#2B86C5', Sf: '#8A5CB3', Pf: '#C9A12C', Rl: '#E2683C', Hs: '#17A398', '': '#4B4FC4' };
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
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#D9643A' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: "Abbreviations", color: '#1899D6' },
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
      <header class="vhead"><h1>Tools</h1><p>A full dictionary of ${fa(L().TERMS.length)} terms, ${fa(L().ROOTS.length)} word parts and ${fa(L().ABBR.length)} abbreviations, all offline.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">${A.toolsDisclaimer}</p>
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
          <span class="dict__t"><b class="en-text">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="Leitner box">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 Pronounce</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? "★ Starred" : "☆ Star"}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ Parse</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>Show ${fa(Math.min(40, list.length - st.limit))} more terms</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox(A.ph.dict)}
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
  const SAMPLES = A.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. ${esc(A.parseSamples[1] || A.parseDefault)}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(A.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(A.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
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
