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
    name: 'لِکسا', key: 'lexa', title: 'لِکسا • مقدمه ترمینولوژی پزشکی: ساخت واژه، پیشوند، ریشه و پسوند', certCode: 'LX',
    subject: 'مقدمه ترمینولوژی پزشکی: ریشه، پیشوند، پسوند، واکه رابط، جمع، اختصار و زبان پرونده',
    kicker: '🧩 ترمینولوژی پزشکی: الفبای واژه‌سازی',
    hello: 'سلام، من <b>لِکسا</b> هستم؛ یک قطعه پازل که هر واژه بلند پزشکی را به تکه‌های کوچک و آشنا می‌شکند!',
    disclaimer: 'لِکسا یک ابزار آموزشی است و جایگزین منابع رسمی، دستورالعمل دارویی، قضاوت بالینی یا دستور پزشک نیست.',
    eyes: 'ده‌ها شکل دوزبانه و تصویر آموزشی؛ از پازل ریشه و پسوند و نقشه ریشه‌های بدن تا قاعده‌های جمع، نسخه، اختصارهای ممنوع و پرونده پزشکی.',
    outcomes: [
      'هر واژه پزشکی را به پیشوند، ریشه، واکه رابط و پسوند بشکنی و معنی‌اش را از پسوند شروع کنی',
      'ریشه‌های اندام‌ها، رنگ‌ها و شکل باکتری‌ها را بشناسی و جفت‌های یونانی و لاتین را از هم جدا کنی',
      'پسوندهای بیماری، تشخیص، جراحی و رشته را درست به کار ببری',
      'پیشوندهای عدد، جا، زمان، نفی و جهت‌های بدن را روی شکل نشان دهی',
      'واژه‌های لاتین را جمع ببندی و از تله‌های هم‌آوا و املایی دور بمانی',
      'نسخه، یادداشت بالینی و اختصارهای پرونده را بخوانی و اختصارهای ممنوع را بشناسی'
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، هر واژه ناآشنای پزشکی را مثل یک پازل در چند ثانیه حل می‌کنی.',
    obHello: 'سلام! من لِکسا هستم؛ یک قطعه پازل خندان 🧩 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «الفبای زبان پزشکی» بهترین شروع است؛ پایه همه دنیاهای دیگر همان‌جاست!',
    demo: () => ({
      q: 'واژه <b dir="ltr">gastroenterology</b> یعنی…',
      fig: { a: ['word-parts'], l: ['قطعه‌های واژه gastroenterology'] },
      opts: ['دانش معده و روده', 'التهاب معده و روده', 'برداشتن معده', 'درد روده'],
      why: `${EA.K.wb('gastr/o', 'enter/o', '-logy')}<br>ریشه <b dir="ltr">gastr/o</b> یعنی معده، <b dir="ltr">enter/o</b> یعنی روده و پسوند <b dir="ltr">-logy</b> یعنی دانش؛ پس <b>گوارش‌شناسی</b>. معنی را از پسوند شروع کن!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ['تازه‌وارد', 'قطعه کنجکاو', 'شکارچی ریشه', 'رمزگشای پسوند', 'استاد واکه رابط', 'نقشه‌خوان بدن', 'نگهبان پیشوند',
      'استاد جمع لاتین', 'دشمن تله‌ها', 'خواننده نسخه', 'کارآگاه اختصار', 'استاد پرونده', 'معمار واژه', 'افسانه پازل', 'اسطوره ترمینولوژی'],
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'دانشجوی مامایی', 'کارشناس مدارک پزشکی', 'منشی پزشکی', 'دانشجوی داروسازی', 'کارشناس آزمایشگاه', 'کارشناس رادیولوژی', 'کارشناس اتاق عمل', 'تکنسین فوریت پزشکی', 'دانشجوی فیزیوتراپی', 'دانشجوی دندان‌پزشکی', 'مترجم متون پزشکی'],
    firstBadge: ['🧩', 'اولین قطعه'],
    worldBadges: { bs: ['🧩', 'پازل‌باز'], rt: ['🫀', 'نقشه‌خوان'], sf: ['🔚', 'استاد پسوند'], pf: ['🔜', 'استاد پیشوند'], rl: ['⚖️', 'دشمن تله'], hs: ['🏥', 'خواننده پرونده'] },
    confetti: ['#4B4FC4', '#7FB2E5', '#F7D774', '#F5B880', '#C39BE0', '#17A398', '#E2683C', '#FFC800'],
    /* ابزارها */
    parseDefault: 'gastroenterology',
    parseSamples: ['gastroenterology', 'osteoarthritis', 'otorhinolaryngologist', 'hepatomegaly', 'tonsillectomy', 'intramuscular', 'erythrocyte', 'bradycardia'],
    ph: { dict: 'جست‌وجو: suffix، معده، gastritis…', roots: 'جست‌وجو: cardi، قلب، ‎-itis‎…', abbr: 'جست‌وجو: bid، ناشتا، NPO…' },
    toolsDisclaimer: '⚕️ لِکسا ابزار آموزشی است؛ جمع‌ساز و نسخه‌خوان جای دستور پزشک، داروساز و منابع رسمی را نمی‌گیرند.',
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
    meatus: ['meatus', 'بدون تغییر می‌ماند'], corpus: ['corpora', 'استثنای ‎-us‎'], viscus: ['viscera', 'استثنای ‎-us‎'], plexus: ['plexuses', 'استثنای ‎-us‎'],
    femur: ['femora', 'استثنا'], iris: ['irides', 'استثنای ‎-is‎'], epididymis: ['epididymides', 'استثنای ‎-is‎'], pons: ['pontes', 'استثنا'],
    cornu: ['cornua', 'استثنا'], vas: ['vasa', 'استثنا'], embryo: ['embryos', 'استثنای قاعده ‎-o‎'], placebo: ['placebos', 'استثنای قاعده ‎-o‎'],
    cortex: ['cortices', 'واژه لاتین ‎-ex → -ices‎'], apex: ['apices', 'واژه لاتین ‎-ex → -ices‎'], index: ['indices', 'واژه لاتین ‎-ex → -ices‎'], vertex: ['vertices', 'واژه لاتین ‎-ex → -ices‎'],
    comedo: ['comedones', 'پایان ‎-o‎ پس از صامت ← ‎-ones‎'], datum: ['data', 'قاعده ‎-um → -a‎'], syllabus: ['syllabi', 'قاعده ‎-us → -i‎ (syllabuses هم درست است)'],
    'placenta previa': ['placentae previae', 'اسم و صفت لاتین هر دو جمع می‌شوند'], 'verruca vulgaris': ['verrucae vulgares', 'اسم و صفت لاتین هر دو جمع می‌شوند'],
    'condyloma acuminatum': ['condylomata acuminata', 'اسم و صفت لاتین هر دو جمع می‌شوند']
  };
  const RULES = [
    [/ma$/, w => w + 'ta', '‎-ma → -mata‎ (جمع انگلیسی ‎-mas‎ هم پذیرفته است)', ''],
    [/nx$/, w => w.slice(0, -1) + 'ges', '‎-nx → -nges‎', 'JEEZ'],
    [/[iy]x$/, w => w.slice(0, -1) + 'ces', '‎-ix → -ices‎ و ‎-yx → -yces‎', 'seez'],
    [/ax$/, w => w.slice(0, -1) + 'ces', '‎-ax → -aces‎', 'seez'],
    [/is$/, w => w.slice(0, -2) + 'es', '‎-is → -es‎', 'eez'],
    [/us$/, w => w.slice(0, -2) + 'i', '‎-us → -i‎', 'eye'],
    [/um$/, w => w.slice(0, -2) + 'a', '‎-um → -a‎', 'ah'],
    [/on$/, w => w.slice(0, -2) + 'a', '‎-on → -a‎ (واژه‌های یونانی)', 'ah'],
    [/en$/, w => w.slice(0, -2) + 'ina', '‎-en → -ina‎', ''],
    [/a$/, w => w + 'e', '‎-a → -ae‎', 'ay'],
    [/[^aeiou]y$/, w => w.slice(0, -1) + 'ies', 'قاعده انگلیسی: ‎-y‎ پس از صامت ← ‎-ies‎', ''],
    [/(s|x|z|ch|sh)$/, w => w + 'es', 'قاعده انگلیسی: افزودن ‎-es‎', ''],
    [/./, w => w + 's', 'قاعده انگلیسی: افزودن ‎-s‎', '']
  ];
  function plural(raw) {
    const w = String(raw || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!/^[a-z][a-z ]*$/.test(w)) return null;
    if (EXC[w]) return { p: EXC[w][0], rule: EXC[w][1], say: '' };
    const r = RULES.find(x => x[0].test(w));
    return { p: r[1](w), rule: r[2], say: r[3] };
  }
  const RX = [
    [/^rx$/i, 'نسخه؛ بگیر'], [/^sig\.?:?$/i, 'دستور مصرف:'], [/^disp\.?:?$/i, 'تحویل بده'], [/^#(\d+)$/, (m) => `${EA.fa(+m[1], 4)} عدد`],
    [/^(refills?|ref)\.?:?$/i, 'تکرار نسخه:'], [/^(\d+)x$/i, m => `${EA.fa(+m[1], 4)} بار`], [/^x(\d+)$/i, m => `${EA.fa(+m[1], 4)} بار`],
    [/^(tab|tabs|tablet|tablets)\.?$/i, 'قرص'], [/^(cap|caps|capsule)\.?$/i, 'کپسول'], [/^supp\.?$/i, 'شیاف'],
    [/^(i|ī|ı)$/i, 'یک عدد'], [/^(ii|īī)$/i, 'دو عدد'], [/^(iii|īīī)$/i, 'سه عدد'], [/^ss$/i, 'نصف'],
    [/^(\d+(?:\.\d+)?)$/, m => EA.fa(+m[1], 4)], [/^mg$/i, 'میلی‌گرم'], [/^mcg$/i, 'میکروگرم'], [/^(g|gm)$/i, 'گرم'], [/^ml$/i, 'میلی‌لیتر'], [/^(gtt|gtts)\.?$/i, 'قطره'],
    [/^(po|p\.o\.)$/i, 'از راه دهان'], [/^(sl|subling)$/i, 'زیر زبان'], [/^iv$/i, 'داخل وریدی'], [/^im$/i, 'داخل عضلانی'], [/^(subcut|subq|sc)$/i, 'زیرجلدی'], [/^(od|o\.d\.)$/i, 'در چشم راست'], [/^(os|o\.s\.)$/i, 'در چشم چپ'], [/^(ou|o\.u\.)$/i, 'در هر دو چشم'],
    [/^daily$/i, 'روزی یک بار'], [/^(bid|b\.i\.d\.)$/i, 'روزی دو بار'], [/^(tid|t\.i\.d\.)$/i, 'روزی سه بار'], [/^(qid|q\.i\.d\.)$/i, 'روزی چهار بار'],
    [/^q(\d+)h$/i, m => `هر ${EA.fa(+m[1], 4)} ساعت`], [/^qh$/i, 'هر ساعت'], [/^(qam|q\.?am)$/i, 'هر صبح'], [/^(qpm|q\.?pm)$/i, 'هر عصر'], [/^(qhs|q\.?noc|noc)$/i, 'هر شب'],
    [/^(hs|h\.s\.)$/i, 'هنگام خواب'], [/^(ac|a\.c\.)$/i, 'پیش از غذا'], [/^(pc|p\.c\.)$/i, 'پس از غذا'], [/^(prn|p\.r\.n\.)$/i, 'در صورت نیاز'], [/^stat$/i, 'فوری'],
    [/^npo$/i, 'ناشتا'], [/^then$/i, 'سپس'], [/^and$/i, 'و'], [/^ad\s?lib$/i, 'به دلخواه'], [/^(no)$/i, 'بدون'], [/^(sub|subs)\.?$/i, 'جایگزینی'],
    [/^(qd|q\.d\.)$/i, 'روزی یک بار', 'ممنوع: daily بنویس'], [/^(qod|q\.o\.d\.)$/i, 'یک روز در میان', 'ممنوع: every other day بنویس'],
    [/^(u|iu)$/i, 'واحد', 'ممنوع: unit کامل بنویس'], [/^(ms|mso4)$/i, 'مورفین سولفات', 'ممنوع: morphine sulfate کامل بنویس']
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
    if (!r) return '<p class="pl__note">یک واژه انگلیسی مفرد بنویس؛ مثل bronchus یا vertebra.</p>';
    return `<div class="pl__res"><span class="pl__s">${L(EA.ui.esc(st.w.trim()))}</span><span class="pl__ar">←</span><b class="pl__p">${L(EA.ui.esc(r.p))}</b></div>
      <p class="pl__note">قاعده: ${r.rule}${r.say ? `؛ پایان واژه جمع را ${L('“' + r.say + '”')} تلفظ کن` : ''}</p>`;
  }
  function rxOut() {
    const ts = readRx(st.rx);
    if (!ts.length) return '<p class="pl__note">یک دستور نسخه بنویس؛ مثل «i po tid».</p>';
    const chips = ts.map(x => `<span class="rx__c${x.warn ? ' is-warn' : x.fa ? '' : ' is-name'}"><b>${L(EA.ui.esc(x.tk))}</b>${x.fa ? `<small>${x.fa}</small>` : '<small>نام دارو یا واژه</small>'}</span>`).join('');
    const warns = ts.filter(x => x.warn).map(x => `<li>${L(EA.ui.esc(x.tk))}: ${x.warn}</li>`).join('');
    const sent = ts.map(x => x.fa || L(EA.ui.esc(x.tk))).join(' ').replace(/\s+:/g, ':');
    return `<div class="rx__cs">${chips}</div><p class="rx__sent">${sent}</p>${warns ? `<ul class="rx__warn">${warns}</ul>` : ''}`;
  }
  EA.APP.extraTool = {
    id: 'pl', sym: 'i→ae', name: 'جمع‌ساز و نسخه‌خوان', color: '#4B4FC4',
    /* برای آزمون: شکل جمع واژه نوشته‌شده */
    value: () => { const r = plural(st.w); return r ? r.p : ''; },
    pane: () => `<div class="tpane"><p class="muted">واژه‌های لاتین و یونانی جمع خودشان را دارند. یک واژه مفرد بنویس تا شکل جمع و قاعده‌اش را ببینی.</p>
    <label class="pl__in"><span>واژه مفرد</span><input type="text" dir="ltr" data-keep="w" data-pl="w" value="${EA.ui.esc(st.w)}" placeholder="vertebra" autocomplete="off" spellcheck="false"></label>
    <div class="pl__ex">${PL_SAMPLES.map(s => `<button type="button" class="pl__chip" data-plex="${s}">${L(s)}</button>`).join('')}</div>
    <div class="pl__out" aria-live="polite">${plOut()}</div>
    <table class="mini"><tr><th>مفرد</th><th>جمع</th><th>نمونه</th></tr>
      <tr><td>${L('-a')}</td><td>${L('-ae')}</td><td>${L('bursa → bursae')}</td></tr><tr><td>${L('-us')}</td><td>${L('-i')}</td><td>${L('fungus → fungi')}</td></tr>
      <tr><td>${L('-um')}</td><td>${L('-a')}</td><td>${L('atrium → atria')}</td></tr><tr><td>${L('-is')}</td><td>${L('-es')}</td><td>${L('prognosis → prognoses')}</td></tr>
      <tr><td>${L('-ix')}</td><td>${L('-ices')}</td><td>${L('appendix → appendices')}</td></tr><tr><td>${L('-nx')}</td><td>${L('-nges')}</td><td>${L('larynx → larynges')}</td></tr>
      <tr><td>${L('-on')}</td><td>${L('-a')}</td><td>${L('ganglion → ganglia')}</td></tr><tr><td>${L('-ma')}</td><td>${L('-mata')}</td><td>${L('fibroma → fibromata')}</td></tr></table>
    <h4 class="pl__h">نسخه‌خوان</h4>
    <p class="muted">دستور نسخه را بنویس تا هر اختصار به فارسی برگردد. اختصارهای فهرست ممنوع با رنگ قرمز هشدار می‌گیرند.</p>
    <label class="pl__in"><span>متن نسخه</span><input type="text" dir="ltr" data-keep="rx" data-pl="rx" value="${EA.ui.esc(st.rx)}" placeholder="i po tid" autocomplete="off" spellcheck="false"></label>
    <div class="pl__ex">${RX_SAMPLES.map((s, i) => `<button type="button" class="pl__chip" data-rxex="${i}">${L(EA.ui.esc(s.split(' ').slice(0, 2).join(' ')))}</button>`).join('')}</div>
    <div class="rx__out" aria-live="polite">${rxOut()}</div>
    ${EA.ui.figCard({ a: ['prescription-anatomy'], l: ['بخش‌های یک نسخه'] })}
    <p class="muted">نمونه نسخه‌ها از تمرین «Prescription Practice» آمده‌اند. هرگز دارو را بی‌دستور پزشک و داروساز مصرف یا تغییر نده.</p></div>`,
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
/* لِکسا — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/lexa/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["abduction", "ab-DUK-shun", "Movement away from the midline of the body (ab- = away from).", "دورشدن از خط میانی (ابداکشن)", "pf", "body", []],
["acronym", "AK-roh-nim", "Abbreviation formed from the first letters of words and spoken as one word, such as AIDS or MRI.", "سرواژه", "rl", "concept", []],
["adduction", "ah-DUK-shun", "Movement toward the midline of the body (ad- = toward).", "نزدیک‌شدن به خط میانی (اداکشن)", "pf", "body", []],
["afebrile", "ay-FEB-ril", "Without fever (a- = without).", "بدون تب", "pf", "sx", []],
["afferent", "AF-er-ent", "Carrying toward the center; compare efferent, carrying away.", "آوران", "rl", "body", []],
["albino", "al-BYE-noh", "Person with white hair, very pale skin and unpigmented irises (alb- = white).", "زال (آلبینو)", "rt", "dz", []],
["alcoholism", "AL-koh-hol-izm", "Condition of dependence on alcohol (-ism = condition, state).", "اعتیاد به الکل", "sf", "dz", []],
["Alzheimer disease", "ALTS-hye-mer dih-ZEEZ", "Progressive degenerative disease of the brain, named for Alois Alzheimer.", "بیماری آلزایمر", "rl", "dz", ["AD"]],
["ambidextrous", "am-bee-DEKS-trus", "Able to use either hand equally well (ambi- = both).", "دوسودست", "pf", "concept", []],
["ambulatory", "AM-byoo-lah-tor-ee", "Able to walk; also care given without an overnight hospital stay.", "سرپایی", "hs", "concept", []],
["analgesic", "an-al-JEE-zik", "Drug that relieves pain without loss of consciousness (an- + -algesia).", "مسکن", "hs", "tx", []],
["anatomic position", "an-ah-TOM-ik poh-ZISH-un", "Standard posture for describing the body: standing, facing forward, arms at the sides, palms forward.", "وضعیت آناتومیک", "pf", "body", []],
["anatomy", "ah-NAT-oh-mee", "Study of the structure of the body and its parts.", "کالبدشناسی (آناتومی)", "rt", "concept", []],
["anemia", "ah-NEE-mee-ah", "Lack of red blood cells or hemoglobin; literally without blood (an- + -emia).", "کم‌خونی", "sf", "dz", []],
["anesthesia", "an-es-THEE-zee-ah", "Condition of lack of sensation (an- + esthesi/o + -ia).", "بیهوشی (بی‌حسی)", "sf", "tx", []],
["anesthesiologist", "an-es-thee-zee-OL-oh-jist", "Physician who specializes in giving anesthesia.", "متخصص بیهوشی", "sf", "field", []],
["angioplasty", "AN-jee-oh-plas-tee", "Surgical repair of a blood vessel (angi/o + -plasty).", "ترمیم رگ (آنژیوپلاستی)", "rt", "tx", []],
["anoxia", "an-OK-see-ah", "Absence of oxygen in the tissues (an- + ox/o + -ia).", "نبود اکسیژن", "pf", "sx", []],
["antacid", "ant-AS-id", "Drug that neutralizes stomach acid.", "ضداسید", "hs", "tx", []],
["antecubital", "an-tee-KYOO-bih-tal", "In front of the elbow (ante- = before, in front).", "جلوی آرنج", "pf", "body", []],
["anterior", "an-TEER-ee-or", "Toward the front of the body; opposite of posterior.", "قدامی (جلویی)", "pf", "body", []],
["antibiotic", "an-tee-bye-OT-ik", "Drug that kills or slows the growth of bacteria (anti- = against + bio = life).", "آنتی‌بیوتیک", "pf", "tx", []],
["antonym", "AN-toh-nim", "A word with the opposite meaning, such as brady- and tachy-.", "متضاد", "rl", "concept", []],
["Apgar score", "AP-gar skor", "Rating of a newborn's condition at 1 and 5 minutes of age, named for Virginia Apgar.", "نمره آپگار", "rl", "lab", []],
["appendectomy", "ap-en-DEK-toh-mee", "Surgical removal of the appendix (append/o + -ectomy).", "برداشتن آپاندیس", "rt", "tx", []],
["appendicitis", "ah-pen-dih-SYE-tis", "Inflammation of the appendix (append/o + -itis).", "التهاب آپاندیس", "sf", "dz", []],
["appendix", "ah-PEN-diks", "A small pouch attached to the large intestine; plural appendices (ix becomes ices).", "آپاندیس", "rl", "body", []],
["arteriole", "ar-TEER-ee-ohl", "A small artery (-ole = small).", "سرخرگ کوچک", "sf", "body", []],
["arteriosclerosis", "ar-teer-ee-oh-skleh-ROH-sis", "Hardening of the arteries (arteri/o + -sclerosis).", "سختی سرخرگ‌ها", "sf", "dz", []],
["arthritis", "ar-THRY-tis", "Inflammation of a joint (arthr/o + -itis).", "التهاب مفصل (آرتریت)", "bs", "dz", []],
["arthroscopy", "ar-THROS-koh-pee", "Visual examination inside a joint with an arthroscope (arthr/o + -scopy).", "آرتروسکوپی", "rt", "lab", []],
["atrium", "AY-tree-um", "Upper chamber of the heart; plural atria.", "دهلیز", "rl", "body", []],
["atrophy", "AT-roh-fee", "Wasting away or decrease in size, as of a muscle (a- + -trophy).", "تحلیل (آتروفی)", "pf", "sx", []],
["audiologist", "aw-dee-OL-oh-jist", "Professional who evaluates hearing and balance problems.", "شنوایی‌شناس", "hs", "field", []],
["bacillus", "bah-SIL-us", "Rod-shaped bacterium; plural bacilli.", "باسیل (باکتری میله‌ای)", "rt", "body", []],
["bacteriology", "bak-teer-ee-OL-oh-jee", "Scientific study of bacteria (bacteri/o + -logy).", "باکتری‌شناسی", "rt", "field", []],
["bacterium", "bak-TEER-ee-um", "A single one-celled microbe; plural bacteria (um becomes a).", "باکتری (مفرد)", "rl", "body", []],
["bicuspid", "bye-KUS-pid", "Having two points or cusps, like the mitral valve or a premolar tooth.", "دولختی", "pf", "body", []],
["bilateral", "bye-LAT-er-al", "Pertaining to both sides (bi- + later/o + -al).", "دوطرفه", "pf", "concept", []],
["biopsy", "BYE-op-see", "Removal of living tissue for microscopic examination (bi/o + -opsy), such as a punch biopsy of the skin.", "نمونه‌برداری (بیوپسی)", "sf", "lab", ["Bx"]],
["bradycardia", "brad-ee-KAR-dee-ah", "Slow heart rate, under 60 beats a minute (brady- = slow).", "کندی ضربان قلب", "pf", "sx", []],
["brand name", "brand naym", "The proprietary trademark name a company gives a drug, such as Advil or Motrin.", "نام تجاری", "hs", "tx", []],
["bronchus", "BRONG-kus", "A main air passage of the lung; plural bronchi (us becomes i).", "نایژه", "rl", "body", []],
["bursa", "BER-sah", "A small fluid-filled sac that cushions a joint; plural bursae.", "بورس (کیسه مفصلی)", "rl", "body", []],
["callus", "KAL-us", "A hardened area of skin, or new bone at a healing fracture.", "پینه", "rl", "sx", []],
["carcinogen", "kar-SIN-oh-jen", "A substance that produces cancer (carcin/o + -gen).", "عامل سرطان‌زا", "sf", "sx", []],
["carcinogenic", "kar-sih-noh-JEN-ik", "Producing cancer (carcin/o + -genic).", "سرطان‌زا", "rt", "sx", []],
["carcinoma", "kar-sih-NOH-mah", "Cancerous tumor of epithelial tissue; from Greek karkinos, crab.", "کارسینوم (سرطان بافت پوششی)", "bs", "dz", ["Ca"]],
["cardiologist", "kar-dee-OL-oh-jist", "Physician skilled in the diagnosis and treatment of heart disease.", "متخصص قلب", "bs", "field", []],
["cardiology", "kar-dee-OL-oh-jee", "Study of the heart and its functions (cardi/o + -logy).", "قلب‌شناسی", "bs", "field", []],
["cardiomalacia", "kar-dee-oh-mah-LAY-shee-ah", "Abnormal softening of the heart muscle (cardi/o + -malacia).", "نرمی عضله قلب", "sf", "dz", []],
["cardiomegaly", "kar-dee-oh-MEG-ah-lee", "Enlargement of the heart (cardi/o + -megaly).", "بزرگی قلب", "rt", "sx", []],
["cardiopathy", "kar-dee-OP-ah-thee", "Any disease of the heart (cardi/o + -pathy).", "بیماری قلب", "sf", "dz", []],
["cephalalgia", "sef-ah-LAL-jee-ah", "Headache (cephal/o + -algia).", "سردرد", "sf", "sx", []],
["cephalic", "seh-FAL-ik", "Pertaining to the head or the head end of the body (cephal/o + -ic).", "سری", "rt", "body", []],
["chemical name", "KEM-ih-kal naym", "Long name describing the chemical formula of a drug.", "نام شیمیایی", "hs", "tx", []],
["chief complaint", "cheef kom-PLAYNT", "The main reason the patient seeks care, in the patient's own words.", "شکایت اصلی", "hs", "concept", ["CC"]],
["chiropractor", "KYE-roh-prak-tor", "Professional trained in manipulation of the spinal column.", "کایروپراکتور", "hs", "field", ["DC"]],
["chlorophyll", "KLOR-oh-fil", "Green pigment of plants (chlor/o = green); an example of the color root.", "سبزینه", "rt", "concept", []],
["chronic", "KRON-ik", "Lasting a long time; ch is pronounced like k.", "مزمن", "bs", "sx", []],
["circumcision", "ser-kum-SIZH-un", "Surgical removal of the foreskin; cutting around (circum- = around).", "ختنه", "pf", "tx", []],
["coccus", "KOK-us", "Round bacterium; plural cocci, pronounced KOK-sye.", "کوکوس (باکتری کروی)", "rt", "body", []],
["colectomy", "koh-LEK-toh-mee", "Surgical removal of the colon (col/o + -ectomy).", "برداشتن روده بزرگ", "sf", "tx", []],
["colonoscopy", "koh-lon-OS-koh-pee", "Visual examination of the colon with a colonoscope (colon/o + -scopy).", "کولونوسکوپی", "rt", "lab", []],
["colostomy", "koh-LOS-toh-mee", "Surgical opening of the colon onto the abdomen (col/o + -stomy).", "کولوستومی", "sf", "tx", []],
["combining form", "kom-BYE-ning form", "A word root plus its combining vowel, written with a slash, such as cardi/o or gastr/o.", "شکل ترکیبی ریشه", "bs", "concept", []],
["combining vowel", "kom-BYE-ning VOW-el", "A vowel, usually o, added between a root and another root or a suffix to make the word easier to pronounce.", "حرف ربط (واکه پیونددهنده)", "bs", "concept", []],
["compound word", "KOM-pownd werd", "A medical term that contains more than one word root, such as gastroenterology or osteoarthritis.", "واژه مرکب", "bs", "concept", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-ray beam rotated around the body to image slices at different depths.", "سی‌تی‌اسکن", "hs", "lab", ["CT"]],
["confidentiality", "kon-fih-den-shee-AL-ih-tee", "Duty to keep all patient information private; protected in the United States by HIPAA.", "رازداری", "hs", "concept", ["HIPAA"]],
["contraindication", "kon-trah-in-dih-KAY-shun", "A condition that makes a treatment unsafe or undesirable (contra- = against).", "منع مصرف", "pf", "tx", []],
["controlled substance", "kon-TROHLD SUB-stans", "Drug with potential for addiction or abuse, classified in Schedules I to V.", "داروی تحت کنترل", "hs", "tx", []],
["cutaneous", "kyoo-TAY-nee-us", "Pertaining to the skin (cutane/o + -ous).", "پوستی", "sf", "body", []],
["cyanosis", "sye-ah-NOH-sis", "Bluish discoloration of skin and mucous membranes from lack of oxygen (cyan/o + -osis).", "کبودی (سیانوز)", "rt", "sx", []],
["cystitis", "sis-TYE-tis", "Inflammation of the urinary bladder (cyst/o + -itis).", "التهاب مثانه", "rt", "dz", []],
["cytology", "sye-TOL-oh-jee", "Study of cells (cyt/o + -logy); c before y sounds like s.", "یاخته‌شناسی", "bs", "field", []],
["dehydration", "dee-hye-DRAY-shun", "Excessive loss of body water (de- = remove + hydr/o = water).", "کم‌آبی بدن", "hs", "sx", []],
["dermatitis", "der-mah-TYE-tis", "Inflammation of the skin (dermat/o + -itis), such as contact dermatitis from poison ivy.", "التهاب پوست (درماتیت)", "rt", "dz", []],
["dermatologist", "der-mah-TOL-oh-jist", "Physician who treats diseases of the skin.", "متخصص پوست", "rt", "field", []],
["dermatosis", "der-mah-TOH-sis", "Any abnormal condition of the skin (dermat/o + -osis).", "بیماری پوستی", "sf", "dz", []],
["diacritical mark", "dye-ah-KRIT-ih-kal mark", "A mark placed over a vowel to show its sound, such as the macron for a long vowel and the breve for a short vowel.", "علامت تلفظ (نشانه آوایی)", "bs", "concept", []],
["diagnosis", "dye-ag-NOH-sis", "Identification of a disease by testing (dia- = through + gnosis = knowledge); plural diagnoses.", "تشخیص", "rl", "concept", ["Dx"]],
["diarrhea", "dye-ah-REE-ah", "Frequent watery stools; flow through (dia- + -rrhea).", "اسهال", "sf", "sx", []],
["diplococcus", "dip-loh-KOK-us", "Round bacteria that grow in pairs (dipl/o + -coccus), such as Neisseria.", "دیپلوکوک (کوکسی جفتی)", "rt", "body", []],
["discharge summary", "DIS-charj SUM-ah-ree", "Outline of the whole hospital stay, final diagnosis and follow-up plan.", "خلاصه ترخیص", "hs", "concept", []],
["dislocation", "dis-loh-KAY-shun", "Displacement of a bone from its joint (dis- = apart).", "دررفتگی", "pf", "dz", []],
["distal", "DIS-tal", "Farther from the point of attachment (think distance).", "دور (دیستال)", "pf", "body", []],
["diverticulum", "dye-ver-TIK-yoo-lum", "A pouch in the wall of a hollow organ; plural diverticula.", "دیورتیکول", "rl", "body", []],
["Down syndrome", "down SIN-drohm", "Chromosomal disorder, also called trisomy 21, named for John Haydon Down.", "سندرم داون", "rl", "dz", []],
["dysphagia", "dis-FAY-jee-ah", "Difficulty swallowing (dys- + -phagia).", "اختلال بلع", "pf", "sx", []],
["dysphasia", "dis-FAY-zhah", "Difficulty speaking; compare dysphagia, difficulty swallowing.", "اختلال گفتار", "rl", "sx", []],
["dysphoria", "dis-FOR-ee-ah", "Feeling of unease or dissatisfaction (dys- + -phoria); opposite of euphoria.", "ناخوشی روانی", "hs", "sx", []],
["dyspnea", "DISP-nee-ah", "Difficult or labored breathing (dys- + -pnea).", "تنگی نفس", "pf", "sx", ["SOB"]],
["ectopic", "ek-TOP-ik", "Located away from the normal position (ecto- = outside).", "نابه‌جا", "pf", "dz", []],
["efferent", "EF-er-ent", "Carrying away from the center.", "وابران", "rl", "body", []],
["electrocardiogram", "ee-lek-troh-KAR-dee-oh-gram", "Record of the electrical activity of the heart (electr/o + cardi/o + -gram).", "نوار قلب", "sf", "lab", ["ECG", "EKG"]],
["electrocardiograph", "ee-lek-troh-KAR-dee-oh-graf", "Instrument that records the electrical activity of the heart (-graph).", "دستگاه نوار قلب", "sf", "lab", []],
["electronic health record", "ee-lek-TRON-ik helth REK-ord", "Digital medical record entered and shared by computer or tablet.", "پرونده الکترونیک سلامت", "hs", "concept", ["EHR", "EMR"]],
["encephalitis", "en-sef-ah-LYE-tis", "Inflammation of the brain (encephal/o + -itis).", "التهاب مغز", "rt", "dz", []],
["endocrine", "EN-doh-krin", "Secreting hormones within, into the blood (endo- = within).", "درون‌ریز", "pf", "body", []],
["endoscope", "EN-doh-skohp", "Instrument for viewing inside the body (endo- + -scope).", "آندوسکوپ", "sf", "lab", []],
["endoscopy", "en-DOS-koh-pee", "Visual examination inside a hollow organ with an endoscope.", "آندوسکوپی", "sf", "lab", []],
["enteritis", "en-ter-EYE-tis", "Inflammation of the small intestine (enter/o + -itis).", "التهاب روده", "rt", "dz", []],
["enuresis", "en-yoo-REE-sis", "Bed-wetting; compare anuresis, retention of urine.", "شب‌ادراری", "rl", "sx", []],
["epidermis", "ep-ih-DER-mis", "Outer layer of the skin; upon the dermis (epi- = upon).", "روپوست (اپیدرم)", "pf", "body", []],
["epigastric", "ep-ih-GAS-trik", "Pertaining to the region above the stomach, the upper middle abdomen (epi- + gastr/o + -ic).", "سردلی (بالای معده)", "bs", "body", []],
["eponym", "EP-oh-nim", "A disease, sign or procedure named after a person or place, such as Parkinson disease.", "نام‌واژه (برگرفته از نام شخص)", "rl", "concept", []],
["erythrocyte", "eh-RITH-roh-site", "Red blood cell (erythr/o + -cyte).", "گلبول قرمز", "rt", "body", ["RBC"]],
["esophageal", "eh-sof-ah-JEE-al", "Pertaining to the esophagus (esophag/o + -eal).", "مری‌ای", "bs", "body", []],
["etymology", "et-ih-MOL-oh-jee", "The study of the origin of words and how their meanings have changed.", "ریشه‌شناسی واژه", "bs", "concept", []],
["euphoria", "yoo-FOR-ee-ah", "Feeling of well-being (eu- = good).", "سرخوشی", "pf", "sx", []],
["exocrine", "EK-soh-krin", "Secreting outward through a duct (exo- = outside).", "برون‌ریز", "pf", "body", []],
["extension", "ek-STEN-shun", "Straightening a joint so the angle increases.", "باز کردن", "pf", "body", []],
["extrauterine", "eks-trah-YOO-ter-in", "Outside the uterus (extra- = outside).", "خارج رحمی", "pf", "body", []],
["femur", "FEE-mer", "The thigh bone; plural femora. The femoral neck is a common fracture site.", "استخوان ران", "rl", "body", []],
["flexion", "FLEK-shun", "Bending a joint so the angle decreases.", "خم کردن", "pf", "body", []],
["Fowler position", "FOW-ler poh-ZISH-un", "Sitting position with the head of the bed raised.", "وضعیت فاولر", "pf", "tx", []],
["fungus", "FUNG-gus", "A simple organism such as yeast or mold; plural fungi.", "قارچ", "rl", "body", []],
["ganglion", "GANG-glee-on", "A collection of nerve cell bodies; plural ganglia (on becomes a).", "گره عصبی", "rl", "body", []],
["gastralgia", "gas-TRAL-jee-ah", "Stomach pain; stomachache (gastr/o + -algia).", "معده‌درد", "bs", "sx", []],
["gastrectomy", "gas-TREK-toh-mee", "Surgical removal of all or part of the stomach (gastr/o + -ectomy).", "برداشتن معده", "bs", "tx", []],
["gastritis", "gas-TRY-tis", "Inflammation of the stomach (gastr/o + -itis); the combining vowel is dropped before a suffix that begins with a vowel.", "التهاب معده", "bs", "dz", []],
["gastroduodenostomy", "gas-troh-doo-oh-deh-NOS-toh-mee", "Surgical opening between the stomach and the duodenum, the first part of the small intestine.", "ایجاد راه بین معده و دوازدهه", "bs", "tx", []],
["gastrodynia", "gas-troh-DIN-ee-ah", "Stomach pain (gastr/o + -dynia); same meaning as gastralgia.", "معده‌درد", "sf", "sx", []],
["gastroenterologist", "gas-troh-en-ter-OL-oh-jist", "Physician who specializes in diseases of the stomach and intestines.", "متخصص گوارش", "bs", "field", []],
["gastroenterology", "gas-troh-en-ter-OL-oh-jee", "Study of the stomach and intestines and their diseases (gastr/o + enter/o + -logy).", "گوارش‌شناسی", "bs", "field", []],
["gastroesophageal reflux disease", "gas-troh-eh-sof-ah-JEE-al REE-fluks dih-ZEEZ", "Backflow of stomach acid into the esophagus causing heartburn.", "بیماری ریفلاکس معده به مری", "hs", "dz", ["GERD"]],
["gastrointestinal", "gas-troh-in-TES-tih-nal", "Pertaining to the stomach and intestines; the digestive tract.", "گوارشی", "rt", "body", ["GI"]],
["gastroscopy", "gas-TROS-koh-pee", "Visual examination of the stomach with an endoscope (gastr/o + -scopy).", "معده‌بینی (گاستروسکوپی)", "bs", "lab", []],
["gastrostomy", "gas-TROS-toh-mee", "Surgical creation of an opening into the stomach (gastr/o + -stomy).", "ایجاد منفذ در معده", "sf", "tx", []],
["generic name", "jeh-NAIR-ik naym", "The single nonproprietary name of a drug, such as ibuprofen.", "نام ژنریک (عمومی)", "hs", "tx", []],
["genitourinary", "jen-ih-toh-YOO-rih-nair-ee", "Pertaining to the genital and urinary organs.", "ادراری-تناسلی", "rt", "body", ["GU"]],
["geriatrician", "jer-ee-ah-TRISH-an", "Physician who specializes in diseases of the elderly.", "متخصص سالمندان", "sf", "field", []],
["geriatrics", "jer-ee-AT-riks", "Care and treatment of the aged (ger/o + -iatrics).", "طب سالمندان", "sf", "field", []],
["gingivitis", "jin-jih-VYE-tis", "Inflammation of the gums (gingiv/o + -itis); g before i sounds like j.", "التهاب لثه", "bs", "dz", []],
["glomerulus", "gloh-MAIR-yoo-lus", "A cluster of capillaries in the kidney; plural glomeruli.", "گلومرول", "rl", "body", []],
["gynecologist", "gye-neh-KOL-oh-jist", "Physician who treats diseases of the female reproductive tract.", "متخصص زنان", "hs", "field", []],
["hematology", "hee-mah-TOL-oh-jee", "Study of blood and blood-forming tissues (hemat/o + -logy).", "خون‌شناسی", "rt", "field", []],
["hemiarthroplasty", "hem-ee-AR-throh-plas-tee", "Replacement of half of a joint, such as the head of the femur (hemi- + arthr/o + -plasty).", "تعویض نیمی از مفصل", "hs", "tx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- + -plegia).", "فلج نیمه بدن", "sf", "dz", []],
["hemisphere", "HEM-ih-sfeer", "Half of a sphere; each half of the brain (hemi- = half).", "نیمکره", "pf", "body", []],
["hemolysis", "hee-MOL-ih-sis", "Breakdown of red blood cells (hem/o + -lysis).", "همولیز (تجزیه گلبول قرمز)", "sf", "lab", []],
["hemorrhage", "HEM-or-ij", "Profuse bleeding, bursting forth of blood (hem/o + -rrhage).", "خونریزی شدید", "sf", "sx", []],
["hepatitis", "hep-ah-TYE-tis", "Inflammation of the liver (hepat/o + -itis).", "التهاب کبد (هپاتیت)", "rt", "dz", []],
["hepatoma", "hep-ah-TOH-mah", "Tumor of the liver (hepat/o + -oma).", "تومور کبد", "sf", "dz", []],
["hepatomegaly", "hep-ah-toh-MEG-ah-lee", "Enlargement of the liver (hepat/o + -megaly).", "بزرگی کبد", "rt", "sx", []],
["Hippocratic Oath", "hip-oh-KRAT-ik ohth", "Ethical oath of physicians attributed to Hippocrates (460-377 BC), the Greek physician called the father of medicine.", "سوگندنامه بقراط", "bs", "concept", []],
["histology", "his-TOL-oh-jee", "Study of tissues under the microscope (hist/o + -logy).", "بافت‌شناسی", "rt", "field", []],
["history and physical", "HIS-toh-ree and FIZ-ih-kal", "Admission document by the physician with the history, examination, diagnoses and plan.", "شرح حال و معاینه", "hs", "concept", ["H&P"]],
["homonym", "HOM-oh-nim", "A word that sounds like another but has a different meaning and often a different spelling, such as ileum and ilium.", "هم‌آوا", "rl", "concept", []],
["hospice", "HOS-pis", "Supportive care for terminally ill patients and their families.", "مراقبت پایان زندگی", "hs", "concept", []],
["humerus", "HYOO-mer-us", "The long bone of the upper arm; sounds like humorous.", "استخوان بازو", "rl", "body", []],
["hyperglycemia", "hye-per-glye-SEE-mee-ah", "Too much glucose in the blood (hyper- + glyc/o + -emia).", "قند خون بالا", "pf", "lab", []],
["hypertension", "hye-per-TEN-shun", "Persistently high arterial blood pressure (hyper- = excessive).", "فشار خون بالا", "pf", "dz", ["HTN"]],
["hyperthermia", "hye-per-THER-mee-ah", "Abnormally high body temperature (hyper- + therm/o + -ia).", "افزایش دمای بدن", "bs", "sx", []],
["hypertrophy", "hye-PER-troh-fee", "Increase in the size of an organ or muscle (hyper- + -trophy).", "بزرگ‌شدن (هیپرتروفی)", "pf", "sx", []],
["hypodermic", "hye-poh-DER-mik", "Under the skin (hypo- + derm/o + -ic).", "زیرپوستی", "pf", "tx", []],
["hypoglycemia", "hye-poh-glye-SEE-mee-ah", "Too little glucose in the blood (hypo- + glyc/o + -emia).", "قند خون پایین", "pf", "lab", []],
["ileum", "IL-ee-um", "The last part of the small intestine; homonym of ilium.", "ایلئوم (روده باریک)", "rl", "body", []],
["ilium", "IL-ee-um", "The upper part of the hip bone; homonym of ileum.", "ایلیوم (استخوان لگن)", "rl", "body", []],
["inferior", "in-FEER-ee-or", "Below or toward the feet.", "تحتانی", "pf", "body", []],
["informed consent", "in-FORMD kon-SENT", "Document signed by the patient after the purpose, benefits and risks of a procedure are explained.", "رضایت آگاهانه", "hs", "concept", []],
["integumentary", "in-teg-yoo-MEN-tah-ree", "Pertaining to the skin and its appendages: hair, nails and glands.", "پوششی (پوست و ضمائم)", "rt", "body", []],
["intercostal", "in-ter-KOS-tal", "Between the ribs (inter- + cost/o + -al).", "بین‌دنده‌ای", "pf", "body", []],
["internist", "in-TER-nist", "Physician who specializes in the internal organs and their diseases.", "متخصص داخلی", "hs", "field", []],
["intracellular", "in-trah-SEL-yoo-lar", "Inside a cell.", "درون‌یاخته‌ای", "pf", "body", []],
["intradermal", "in-trah-DER-mal", "Within the skin (intra- + derm/o + -al).", "داخل جلدی", "pf", "tx", ["ID"]],
["intramuscular", "in-trah-MUS-kyoo-lar", "Within a muscle (intra- + muscul/o + -ar).", "داخل عضلانی", "pf", "tx", ["IM"]],
["intravenous", "in-trah-VEE-nus", "Within a vein (intra- + ven/o + -ous).", "داخل وریدی", "pf", "tx", ["IV"]],
["jaundice", "JAWN-dis", "Yellow color of skin and eyes from bilirubin; also called icterus.", "یرقان (زردی)", "rt", "sx", []],
["kyphosis", "kye-FOH-sis", "Abnormal outward curve of the upper spine, hunchback (kyph/o + -osis).", "قوز پشت (کیفوز)", "bs", "dz", []],
["laparoscopy", "lap-ah-ROS-koh-pee", "Visual examination of the abdominal cavity through small incisions (lapar/o + -scopy).", "لاپاراسکوپی", "sf", "lab", []],
["larynx", "LAIR-inks", "The voice box; plural larynges (nx becomes nges).", "حنجره", "rl", "body", []],
["lateral", "LAT-er-al", "Away from the midline; toward the side.", "خارجی (کناری)", "pf", "body", []],
["leukemia", "loo-KEE-mee-ah", "Cancer of white blood cells, white blood (leuk/o + -emia).", "سرطان خون (لوسمی)", "sf", "dz", []],
["leukocyte", "LOO-koh-site", "White blood cell (leuk/o + -cyte).", "گلبول سفید", "rt", "body", ["WBC"]],
["leukopenia", "loo-koh-PEE-nee-ah", "Too few white blood cells (leuk/o + -penia).", "کمبود گلبول سفید", "sf", "lab", []],
["lipoma", "lih-POH-mah", "Benign tumor of fat tissue (lip/o + -oma).", "تومور چربی (لیپوم)", "rt", "dz", []],
["lithotripsy", "LITH-oh-trip-see", "Crushing of a stone (lith/o + -tripsy).", "سنگ‌شکنی", "sf", "tx", []],
["lumen", "LOO-men", "The central opening of a tube or vessel; plural lumina (en becomes ina).", "مجرای داخلی (لومن)", "rl", "body", []],
["Lyme disease", "lime dih-ZEEZ", "Tick-borne multisystem disease named after the place Old Lyme, Connecticut.", "بیماری لایم", "rl", "dz", []],
["macrocephaly", "mak-roh-SEF-ah-lee", "Abnormally large head (macro- = large).", "بزرگ‌سری", "pf", "dz", []],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a magnetic field and radio waves.", "ام‌آرآی", "hs", "lab", ["MRI"]],
["malnutrition", "mal-noo-TRISH-un", "Poor or bad nutrition (mal- = bad).", "سوءتغذیه", "pf", "dz", []],
["mammogram", "MAM-oh-gram", "X-ray record of the breast (mamm/o + -gram).", "ماموگرام", "sf", "lab", []],
["mammography", "mam-OG-rah-fee", "Process of x-ray imaging of the breast (mamm/o + -graphy).", "ماموگرافی", "sf", "lab", []],
["meatus", "mee-AY-tus", "An opening or passage; the plural stays meatus.", "مجرا، سوراخ", "rl", "body", []],
["medial", "MEE-dee-al", "Toward the midline of the body.", "داخلی (نزدیک خط میانی)", "pf", "body", []],
["medical dictionary", "MED-ih-kal DIK-shun-air-ee", "Reference book or app that lists medical terms with their spelling, pronunciation and meaning.", "فرهنگ لغت پزشکی", "bs", "concept", []],
["medical record", "MED-ih-kal REK-ord", "Legal document of a patient's care: history, examinations, tests, treatments and responses; also called the chart.", "پرونده پزشکی", "hs", "concept", ["MR"]],
["medical terminology", "MED-ih-kal ter-mih-NOL-oh-jee", "The language of medicine: words built mostly from Greek and Latin word parts to describe the body, diseases and treatments precisely.", "ترمینولوژی پزشکی (زبان پزشکی)", "bs", "concept", []],
["melanoma", "mel-ah-NOH-mah", "Malignant tumor of pigment cells, a black tumor (melan/o + -oma).", "ملانوم", "rt", "dz", []],
["metastasis", "meh-TAS-tah-sis", "Spread of disease, such as cancer, to a distant part (meta- = beyond, change); plural metastases.", "دست‌اندازی (متاستاز)", "pf", "dz", []],
["microscope", "MYE-kroh-skohp", "Instrument for viewing very small objects (micr/o- = small).", "میکروسکوپ", "pf", "lab", []],
["mitral stenosis", "MY-tral steh-NOH-sis", "Narrowing of the mitral valve of the heart (-stenosis = narrowing).", "تنگی دریچه میترال", "sf", "dz", ["MS"]],
["mnemonic", "neh-MON-ik", "A memory aid; the first m is silent. Sounds like pneumonic, which pertains to the lungs.", "ترفند حفظ (یادیار)", "rl", "concept", []],
["monocyte", "MON-oh-site", "A white blood cell with a single large nucleus (mono- = one).", "مونوسیت", "pf", "body", []],
["mucous", "MYOO-kus", "Adjective: pertaining to or producing mucus, as in mucous membrane.", "مخاطی (صفت)", "rl", "body", []],
["mucus", "MYOO-kus", "Slimy secretion of the mucous membranes (noun).", "مخاط (ماده)", "rl", "body", []],
["multicellular", "mul-tee-SEL-yoo-lar", "Composed of many cells (multi- + cellul/o + -ar).", "پریاخته", "pf", "concept", []],
["musculoskeletal", "mus-kyoo-loh-SKEL-eh-tal", "Pertaining to muscles and bones; the system of 206 bones and more than 600 muscles.", "اسکلتی-عضلانی", "rt", "body", []],
["myalgia", "mye-AL-jee-ah", "Muscle pain (my/o + -algia).", "درد عضله", "rt", "sx", []],
["myocarditis", "mye-oh-kar-DYE-tis", "Inflammation of the heart muscle (my/o + cardi/o + -itis).", "التهاب عضله قلب", "rt", "dz", []],
["myorrhaphy", "mye-OR-ah-fee", "Suture of a muscle (my/o + -rrhaphy).", "بخیه عضله", "sf", "tx", []],
["neonate", "NEE-oh-nayt", "Newborn infant in the first 4 weeks of life (neo- = new).", "نوزاد", "pf", "concept", []],
["nephritis", "neh-FRY-tis", "Inflammation of the kidney (nephr/o + -itis); Greek nephr and Latin ren both mean kidney.", "التهاب کلیه", "rt", "dz", []],
["nephrologist", "neh-FROL-oh-jist", "Physician who specializes in the kidneys.", "متخصص کلیه", "hs", "field", []],
["nephropexy", "NEF-roh-pek-see", "Surgical fixation of a floating kidney (nephr/o + -pexy).", "تثبیت کلیه", "sf", "tx", []],
["neural", "NOO-ral", "Pertaining to nerves (neur/o + -al).", "عصبی", "sf", "body", []],
["neuralgia", "noo-RAL-jee-ah", "Pain along a nerve (neur/o + -algia).", "درد عصب", "rt", "sx", []],
["neurologist", "noo-ROL-oh-jist", "Physician who specializes in the nervous system.", "متخصص مغز و اعصاب", "hs", "field", []],
["neuroma", "noo-ROH-mah", "Tumor made of nerve cells (neur/o + -oma).", "تومور عصب", "rt", "dz", []],
["neuronal", "noo-ROH-nal", "Pertaining to a neuron, a nerve cell (adjective of neuron).", "مربوط به نورون", "sf", "body", []],
["neuropathy", "noo-ROP-ah-thee", "Disease of the nerves, such as diabetic neuropathy of the feet (neur/o + -pathy).", "بیماری عصب (نوروپاتی)", "rt", "dz", []],
["nullipara", "nul-IP-ah-rah", "Woman who has never given birth (nulli- = none).", "زن نزاییده", "pf", "concept", []],
["obstetrician", "ob-steh-TRISH-an", "Physician who specializes in pregnancy, labor and the postpartum period.", "متخصص مامایی", "hs", "field", []],
["oncologist", "ong-KOL-oh-jist", "Physician who specializes in tumors and cancer.", "متخصص سرطان (انکولوژیست)", "hs", "field", []],
["oncology", "ong-KOL-oh-jee", "Study and treatment of tumors (onc/o + -logy).", "سرطان‌شناسی (انکولوژی)", "rt", "field", []],
["operative report", "OP-er-ah-tiv ree-PORT", "Surgeon's report of an operation with pre- and postoperative diagnoses.", "گزارش عمل جراحی", "hs", "concept", []],
["ophthalmologist", "off-thal-MOL-oh-jist", "Physician who diagnoses and treats eye diseases.", "چشم‌پزشک", "hs", "field", []],
["ophthalmology", "off-thal-MOL-oh-jee", "Branch of medicine dealing with the eye (ophthalm/o + -logy).", "چشم‌پزشکی", "rt", "field", []],
["orthopedist", "or-thoh-PEE-dist", "Surgeon who treats bones, joints and muscles (orth/o = straight + ped/o).", "متخصص ارتوپدی", "hs", "field", []],
["orthopnea", "or-THOP-nee-ah", "Difficulty breathing except when sitting upright (orth/o + -pnea).", "تنفس دشوار در درازکش", "hs", "sx", []],
["osteoarthritis", "os-tee-oh-ar-THRY-tis", "Degenerative inflammation of bone and joint (oste/o + arthr/o + -itis); a compound word.", "آرتروز (استئوآرتریت)", "bs", "dz", ["OA"]],
["osteoma", "os-tee-OH-mah", "Benign tumor of bone (oste/o + -oma).", "تومور استخوان", "rt", "dz", []],
["osteomalacia", "os-tee-oh-mah-LAY-shee-ah", "Abnormal softening of bone (oste/o + -malacia).", "نرمی استخوان", "sf", "dz", []],
["osteoporosis", "os-tee-oh-poh-ROH-sis", "Condition of porous, thin bones that break easily (oste/o + por/o + -osis).", "پوکی استخوان", "rt", "dz", []],
["otalgia", "oh-TAL-jee-ah", "Earache (ot/o + -algia).", "گوش‌درد", "sf", "sx", []],
["otitis", "oh-TYE-tis", "Inflammation of the ear (ot/o + -itis).", "التهاب گوش", "rt", "dz", []],
["otorhinolaryngologist", "oh-toh-rye-noh-lair-in-GOL-oh-jist", "Physician who treats the ear, nose and throat (ot/o + rhin/o + laryng/o + -logist).", "متخصص گوش و حلق و بینی", "hs", "field", ["ENT"]],
["over-the-counter", "OH-ver the KOWN-ter", "A drug that can be bought without a prescription, such as aspirin.", "بدون نسخه", "hs", "tx", ["OTC"]],
["palpation", "pal-PAY-shun", "Examining by feeling with the fingers; compare palpitation.", "لمس (معاینه با دست)", "rl", "lab", []],
["palpitation", "pal-pih-TAY-shun", "A rapid or pounding heartbeat felt by the patient.", "تپش قلب", "rl", "sx", []],
["pancytopenia", "pan-sye-toh-PEE-nee-ah", "Decrease of all types of blood cells (pan- = all).", "کمبود همه یاخته‌های خون", "pf", "lab", []],
["paramedical", "pair-ah-MED-ih-kal", "Related to and supporting medicine (para- = beside).", "پیراپزشکی", "pf", "field", []],
["parenteral", "pah-REN-ter-al", "Given by a route other than the digestive tract, usually by injection.", "تزریقی (غیرگوارشی)", "hs", "tx", []],
["Parkinson disease", "PAR-kin-sun dih-ZEEZ", "Nervous system disorder with tremor and muscle rigidity, named for James Parkinson.", "بیماری پارکینسون", "rl", "dz", ["PD"]],
["pathologist", "pah-THOL-oh-jist", "Physician who studies diseased tissue and body fluids.", "متخصص آسیب‌شناسی", "hs", "field", []],
["pathology", "pah-THOL-oh-jee", "Study of the nature of disease and the changes it causes in tissues (path/o + -logy).", "آسیب‌شناسی", "rt", "field", []],
["pediatrician", "pee-dee-ah-TRISH-an", "Physician who specializes in children's diseases (-ician).", "متخصص کودکان", "sf", "field", []],
["pediatrics", "pee-dee-AT-riks", "Medical specialty for the care and treatment of children (ped/o + -iatrics).", "طب کودکان", "sf", "field", []],
["pelvic", "PEL-vik", "Pertaining to the pelvis, the bony hip girdle.", "لگنی", "sf", "body", []],
["pericardium", "pair-ih-KAR-dee-um", "Sac around the heart (peri- = around).", "پریکارد (کیسه دور قلب)", "pf", "body", []],
["perineal", "pair-ih-NEE-al", "Pertaining to the perineum, the area between the legs.", "عجانی", "rl", "body", []],
["periodontal", "pair-ee-oh-DON-tal", "Around a tooth (peri- + odont/o + -al).", "اطراف دندان", "pf", "body", []],
["peritoneal", "pair-ih-toh-NEE-al", "Pertaining to the peritoneum, the membrane lining the abdominal cavity.", "صفاقی", "rl", "body", []],
["peroneal", "pair-oh-NEE-al", "Pertaining to the fibula side of the leg.", "نازک‌نئی (کناره ساق)", "rl", "body", []],
["phalanges", "fah-LAN-jeez", "Plural of phalanx, the finger and toe bones; do not confuse with flanges.", "بندهای انگشتان", "rl", "body", []],
["phalanx", "FAY-lanks", "A bone of a finger or toe; plural phalanges. Each hand has 14 phalanges.", "بند انگشت", "rl", "body", []],
["pharmacist", "FAR-mah-sist", "Licensed professional who prepares and dispenses drugs.", "داروساز", "hs", "field", []],
["pharmacology", "far-mah-KOL-oh-jee", "Study of the origin, characteristics and effects of drugs.", "داروشناسی", "hs", "field", []],
["phlegm", "flem", "Thick mucus from the respiratory tract; ph sounds like f and the g is silent.", "خلط", "bs", "sx", []],
["phonetic spelling", "foh-NET-ik SPEL-ing", "Writing a word as it sounds, divided into syllables with the stressed syllable in capitals, such as FEM-or-al.", "آوانویسی", "bs", "concept", []],
["physiatry", "fiz-ee-AT-ree", "Branch of medicine that deals with physical rehabilitation; do not confuse with psychiatry.", "طب فیزیکی و توان‌بخشی", "sf", "field", []],
["physiology", "fiz-ee-OL-oh-jee", "Study of the functions of the living body and its parts (physi/o + -logy).", "فیزیولوژی (کارشناسی بدن)", "rt", "concept", []],
["pleuritis", "ploo-RYE-tis", "Inflammation of the pleura of the lung.", "التهاب پرده جنب", "rl", "dz", []],
["pneumonia", "noo-MOH-nee-ah", "Inflammation of the lung, usually from infection; the p in pn is silent.", "سینه‌پهلو (پنومونی)", "bs", "dz", []],
["pneumonoultramicroscopic silicovolcanoconiosis", "noo-moh-noh-ul-trah-mye-kroh-SKOP-ik sil-ih-koh-vol-KAY-noh-koh-nee-OH-sis", "Lung disease from inhaling very fine silica dust from a volcano; famous as the longest word.", "بیماری ریه ناشی از گرد سیلیس آتشفشانی", "rl", "dz", []],
["pneumothorax", "noo-moh-THOR-aks", "Air in the chest cavity outside the lung (pneum/o + thorac/o); a compound word.", "هوا در قفسه سینه (پنوموتوراکس)", "rt", "dz", []],
["poliomyelitis", "poh-lee-oh-mye-eh-LYE-tis", "Viral inflammation of the gray matter of the spinal cord (poli/o = gray + myel/o + -itis).", "فلج اطفال (پولیو)", "rt", "dz", []],
["polyuria", "pol-ee-YOO-ree-ah", "Excessive urination (poly- = many, much).", "پرادراری", "pf", "sx", []],
["posterior", "pos-TEER-ee-or", "Toward the back of the body; opposite of anterior.", "خلفی (پشتی)", "pf", "body", []],
["postoperative", "pohst-OP-er-ah-tiv", "After surgery (post- = after).", "پس از عمل", "pf", "concept", ["postop"]],
["prefix", "PREE-fiks", "A word part placed before a root to change its meaning, often showing number, location, time or status.", "پیشوند", "bs", "concept", []],
["prenatal", "pree-NAY-tal", "Before birth (pre- + nat/o + -al).", "پیش از تولد", "pf", "concept", []],
["preoperative", "pree-OP-er-ah-tiv", "Before surgery (pre- = before).", "پیش از عمل", "pf", "concept", ["preop"]],
["prescription", "prih-SKRIP-shun", "Written order for a drug with its dose, route, frequency, amount to dispense and refills.", "نسخه", "hs", "tx", ["Rx"]],
["primigravida", "prye-mih-GRAV-ih-dah", "Woman pregnant for the first time (primi- = first).", "زن نخست‌باردار", "pf", "concept", []],
["prognosis", "prog-NOH-sis", "Prediction of the likely outcome of a disease (pro- = before); plural prognoses.", "پیش‌آگهی", "rl", "concept", []],
["progress note", "PROG-res noht", "Physician's daily record of the patient's condition, results and updated plan.", "یادداشت سیر بیماری", "hs", "concept", []],
["prone", "prohn", "Lying face downward.", "دمر", "pf", "body", []],
["prostatic", "pros-TAT-ik", "Pertaining to the prostate gland; compare prosthetic.", "پروستاتی", "rl", "body", []],
["prosthetic", "pros-THET-ik", "Pertaining to an artificial device that replaces a body part.", "پروتزی (مصنوعی)", "rl", "tx", []],
["proximal", "PROK-sih-mal", "Nearer to the point of attachment or the center (think proximity).", "نزدیک (پروگزیمال)", "pf", "body", []],
["pruritus", "proo-RYE-tus", "Itching; often confused with pleuritis.", "خارش", "rl", "sx", []],
["psychiatrist", "sye-KYE-ah-trist", "Physician who diagnoses and treats mental disorders (psych/o + -iatrist).", "روان‌پزشک", "bs", "field", []],
["psychiatry", "sye-KYE-ah-tree", "Branch of medicine that treats mental illness (psych/o + -iatry).", "روان‌پزشکی", "sf", "field", []],
["psychology", "sye-KOL-oh-jee", "Study of the mind and behavior; the p in ps is silent.", "روان‌شناسی", "bs", "field", []],
["ptosis", "TOH-sis", "Drooping or sagging of an organ, such as the eyelid; the p in pt is silent.", "افتادگی", "bs", "sx", []],
["pulmonary", "PUL-moh-nair-ee", "Pertaining to the lungs (pulmon/o + -ary).", "ریوی", "rt", "body", []],
["purpura", "PER-pyoo-rah", "Purple spots and patches from bleeding into the skin (purpur/o = purple).", "پورپورا (لکه‌های ارغوانی)", "rt", "sx", []],
["quadriplegia", "kwod-rih-PLEE-jee-ah", "Paralysis of all four limbs (quadri- + -plegia).", "فلج چهار اندام", "pf", "dz", []],
["radiograph", "RAY-dee-oh-graf", "An x-ray image, also called a radiogram.", "رادیوگرافی (تصویر)", "sf", "lab", []],
["radiography", "ray-dee-OG-rah-fee", "Process of making x-ray images (radi/o + -graphy).", "پرتونگاری (رادیوگرافی)", "sf", "lab", []],
["radiologist", "ray-dee-OL-oh-jist", "Physician who interprets x-rays and other medical images.", "متخصص رادیولوژی", "hs", "field", []],
["renal", "REE-nal", "Pertaining to the kidney (ren/o + -al).", "کلیوی", "rt", "body", []],
["retroperitoneal", "ret-roh-pair-ih-toh-NEE-al", "Behind the peritoneum (retro- = behind).", "پشت صفاقی", "pf", "body", []],
["rhinitis", "rye-NYE-tis", "Inflammation of the nasal lining (rhin/o + -itis).", "التهاب بینی", "rt", "dz", []],
["rhinoplasty", "RYE-noh-plas-tee", "Surgical repair or reshaping of the nose (rhin/o + -plasty).", "جراحی ترمیمی بینی", "rt", "tx", []],
["rhinorrhea", "rye-noh-REE-ah", "Discharge from the nose, runny nose (rhin/o + -rrhea).", "آبریزش بینی", "sf", "sx", []],
["semicircular", "sem-ee-SER-kyoo-lar", "Shaped like a half circle (semi- = half).", "نیم‌دایره‌ای", "pf", "body", []],
["spirometry", "spye-ROM-eh-tree", "Measurement of breathing (spir/o + -metry).", "اسپیرومتری (سنجش تنفس)", "sf", "lab", []],
["splenectomy", "spleh-NEK-toh-mee", "Surgical removal of the spleen (splen/o + -ectomy).", "برداشتن طحال", "sf", "tx", []],
["splenomegaly", "splee-noh-MEG-ah-lee", "Enlargement of the spleen (splen/o + -megaly).", "بزرگی طحال", "bs", "sx", []],
["staphylococcus", "staf-ih-loh-KOK-us", "Round bacteria that grow in grape-like clusters (staphyl/o + -coccus).", "استافیلوکوک (کوکسی خوشه‌ای)", "rt", "body", []],
["stomatitis", "stoh-mah-TYE-tis", "Inflammation of the mouth (stomat/o + -itis).", "التهاب دهان", "rt", "dz", []],
["streptobacillus", "strep-toh-bah-SIL-us", "Rod-shaped bacteria that grow in twisted chains.", "استرپتوباسیل", "rt", "body", []],
["streptococcus", "strep-toh-KOK-us", "Round bacteria that grow in twisted chains (strept/o + -coccus).", "استرپتوکوک (کوکسی زنجیره‌ای)", "rt", "body", []],
["subcutaneous", "sub-kyoo-TAY-nee-us", "Beneath the skin, in the fatty tissue (sub- + cutane/o + -ous).", "زیرجلدی", "pf", "body", ["subcut", "subq"]],
["sublingual", "sub-LING-gwal", "Under the tongue (sub- + lingu/o + -al).", "زیرزبانی", "hs", "tx", ["SL"]],
["suffix", "SUF-iks", "A word part attached to the end of a root, usually showing a condition, disease, procedure or part of speech.", "پسوند", "bs", "concept", []],
["superior", "soo-PEER-ee-or", "Above or toward the head.", "فوقانی", "pf", "body", []],
["supine", "soo-PINE", "Lying on the back, face upward.", "طاق‌باز", "pf", "body", []],
["suture", "SOO-chur", "To sew the edges of a wound together; also the stitch itself.", "بخیه", "sf", "tx", []],
["synonym", "SIN-oh-nim", "A word with the same meaning as another, such as gastralgia and gastrodynia.", "مترادف", "rl", "concept", []],
["tachycardia", "tak-ee-KAR-dee-ah", "Abnormally rapid heart rate (tachy- = fast).", "تندی ضربان قلب", "pf", "sx", []],
["tetralogy", "teh-TRAL-oh-jee", "A combination of four elements, as in tetralogy of Fallot (tetra- = four).", "چهارگانه (تترالوژی)", "pf", "concept", []],
["thermometer", "ther-MOM-eh-ter", "Instrument for measuring temperature (therm/o + -meter).", "دماسنج", "sf", "lab", []],
["thoracentesis", "thor-ah-sen-TEE-sis", "Puncture of the chest wall to remove fluid (thorac/o + -centesis).", "کشیدن مایع از قفسه سینه", "sf", "tx", []],
["thoracic", "thoh-RAS-ik", "Pertaining to the chest (thorac/o + -ic).", "سینه‌ای", "rt", "body", []],
["thorax", "THOR-aks", "The chest; plural thoraces (ax becomes aces).", "قفسه سینه", "rl", "body", []],
["thrombosis", "throm-BOH-sis", "Condition of a blood clot inside a vessel (thromb/o + -osis).", "ترومبوز (لخته در رگ)", "sf", "dz", []],
["tonsillectomy", "ton-sih-LEK-toh-mee", "Surgical removal of the tonsils (tonsill/o + -ectomy); note the double l.", "برداشتن لوزه‌ها", "rt", "tx", []],
["tonsillitis", "ton-sih-LYE-tis", "Inflammation of the tonsils (tonsill/o + -itis).", "التهاب لوزه", "sf", "dz", []],
["tracheostomy", "tray-kee-OS-toh-mee", "Surgical creation of an opening into the trachea (trache/o + -stomy).", "ایجاد منفذ در نای", "sf", "tx", []],
["tracheotomy", "tray-kee-OT-oh-mee", "Incision into the trachea (trache/o + -tomy).", "برش نای", "sf", "tx", []],
["transdermal", "tranz-DER-mal", "Through the skin, as a drug patch (trans- = through).", "از راه پوست", "pf", "tx", []],
["Trendelenburg position", "tren-DEL-en-berg poh-ZISH-un", "Lying supine with the head lower than the legs on an inclined bed.", "وضعیت ترندلنبرگ", "pf", "tx", []],
["triceps", "TRY-seps", "Muscle of the upper arm with three heads.", "عضله سه‌سر بازو", "pf", "body", []],
["tricuspid", "try-KUS-pid", "Having three cusps, like the valve between the right atrium and right ventricle.", "سه‌لختی", "pf", "body", []],
["ultrasonography", "ul-trah-soh-NOG-rah-fee", "Imaging with high-frequency sound waves, such as fetal ultrasound.", "سونوگرافی", "hs", "lab", ["US"]],
["unilateral", "yoo-nih-LAT-er-al", "Affecting only one side (uni- + later/o + -al).", "یک‌طرفه", "pf", "concept", []],
["urologist", "yoo-ROL-oh-jist", "Physician who treats the urinary tract and the male reproductive system.", "متخصص اورولوژی", "hs", "field", []],
["vascular", "VAS-kyoo-lar", "Pertaining to blood vessels (vascul/o + -ar).", "عروقی", "rt", "body", []],
["venule", "VEN-yool", "A small vein (-ule = small).", "سیاهرگ کوچک", "sf", "body", []],
["vertebra", "VER-teh-brah", "One bone of the spinal column; plural vertebrae (a becomes ae).", "مهره", "rl", "body", []],
["vertebrae", "VER-teh-bray", "Plural of vertebra; the spinal column has 26 vertebrae in the adult.", "مهره‌ها", "rl", "body", []],
["vital signs", "VYE-tal sines", "Temperature, pulse, respiration and blood pressure.", "علائم حیاتی", "hs", "lab", ["VS", "TPR", "BP"]],
["word building", "werd BIL-ding", "Putting prefixes, roots, combining vowels and suffixes together to form a medical term.", "واژه‌سازی", "bs", "concept", []],
["word root", "werd root", "The foundation of a medical term that carries its basic meaning, usually a body part, such as gastr in gastritis.", "ریشه واژه", "bs", "concept", []],
["xanthoma", "zan-THOH-mah", "Yellow fatty nodule in the skin (xanth/o + -oma).", "گزانتوم (برجستگی زرد)", "rt", "dz", []],
["xeroderma", "zee-roh-DER-mah", "Dry skin (xer/o + -derma); x at the start sounds like z.", "خشکی پوست", "bs", "dz", []]];
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
    ['uni-, mono-', ['uni', 'mono'], 'one', 'یک', 'pf'],
    ['bi-, di-', ['bi', 'di'], 'two, twice', 'دو', 'pf'],
    ['tri-', ['tri'], 'three', 'سه', 'pf'],
    ['quadri-, tetra-', ['quadri', 'tetra'], 'four', 'چهار', 'pf'],
    ['hemi-, semi-', ['hemi', 'semi'], 'half', 'نیم', 'pf'],
    ['multi-, poly-', ['multi', 'poly'], 'many, much', 'چند، زیاد', 'pf'],
    ['primi-', ['primi'], 'first', 'نخست', 'pf'],
    ['nulli-', ['nulli'], 'none', 'هیچ', 'pf'],
    ['ambi-', ['ambi'], 'both', 'هر دو', 'pf'],
    ['pan-', ['pan'], 'all', 'همه', 'pf'],
    // پیشوندهای جا و جهت
    ['ab-', ['ab'], 'away from', 'دور از', 'pf'],
    ['ad-', ['ad'], 'toward', 'به سوی', 'pf'],
    ['ante-, pre-', ['ante', 'pre'], 'before, in front of', 'پیش، جلو', 'pf'],
    ['post-', ['post'], 'after, behind', 'پس، پشت', 'pf'],
    ['epi-', ['epi'], 'upon, over, above', 'روی، بالای', '*'],
    ['hypo-, sub-, infra-', ['hypo', 'sub', 'infra'], 'below, under, deficient', 'زیر، کمتر از حد', '*'],
    ['hyper-, supra-', ['hyper', 'supra'], 'above, excessive', 'بالای، بیش از حد', '*'],
    ['intra-, endo-', ['intra', 'endo', 'end'], 'within, inside', 'درون', '*'],
    ['extra-, exo-, ecto-', ['extra', 'exo', 'ecto'], 'outside', 'بیرون', 'pf'],
    ['inter-', ['inter'], 'between', 'میان', 'pf'],
    ['peri-, circum-', ['peri', 'circum'], 'around', 'پیرامون', 'pf'],
    ['para-', ['para'], 'beside, near, abnormal', 'کنار؛ نابه‌جا', 'pf'],
    ['retro-', ['retro'], 'behind, backward', 'پشت، رو به عقب', 'pf'],
    ['trans-, dia-', ['trans', 'dia'], 'through, across', 'از میان', '*'],
    ['meta-', ['meta'], 'beyond, change', 'فراتر؛ دگرگونی', 'pf'],
    // پیشوندهای نفی و کیفیت
    ['a-, an-', ['an', 'a'], 'without, not', 'بدون، فاقد', '*'],
    ['anti-, contra-', ['anti', 'contra'], 'against', 'ضد', 'pf'],
    ['de-, dis-', ['dis', 'de'], 'down, apart, remove', 'برداشتن، جدا', 'pf'],
    ['dys-', ['dys'], 'bad, painful, difficult', 'بد، دشوار، دردناک', '*'],
    ['eu-', ['eu'], 'good, normal', 'خوب، طبیعی', 'pf'],
    ['mal-', ['mal'], 'bad', 'بد', 'pf'],
    ['brady-', ['brady'], 'slow', 'کند', 'pf'],
    ['tachy-', ['tachy'], 'fast', 'تند', 'pf'],
    ['neo-', ['neo'], 'new', 'نو', 'pf'],
    ['macro-', ['macro'], 'large', 'بزرگ', 'pf'],
    ['micro-', ['micro'], 'small', 'کوچک', 'pf'],
    ['homo-, iso-', ['homo', 'iso'], 'same, equal', 'یکسان', 'rl'],
    ['hetero-', ['hetero'], 'different', 'دیگر، ناهمسان', 'rl'],
    ['pro-', ['pro'], 'before, forward', 'پیش', 'rl'],
    ['syn-, sym-', ['syn', 'sym'], 'together, with', 'با هم', 'rl'],
    // ریشه‌های بدن
    ['cardi/o', ['cardi', 'card'], 'heart', 'قلب', '*'],
    ['gastr/o', ['gastr'], 'stomach', 'معده', '*'],
    ['enter/o', ['enter'], 'small intestine', 'روده باریک', 'rt'],
    ['col/o, colon/o', ['colon', 'col'], 'colon, large intestine', 'روده بزرگ', 'rt'],
    ['duoden/o', ['duoden'], 'duodenum', 'دوازدهه', 'bs'],
    ['esophag/o', ['esophag'], 'esophagus', 'مری', 'bs'],
    ['hepat/o', ['hepat'], 'liver', 'کبد', 'rt'],
    ['splen/o', ['splen'], 'spleen', 'طحال', 'bs'],
    ['append/o, appendic/o', ['appendic', 'append'], 'appendix', 'آپاندیس', 'rt'],
    ['lapar/o', ['lapar'], 'abdominal wall', 'دیواره شکم', 'sf'],
    ['nephr/o, ren/o', ['nephr', 'ren'], 'kidney', 'کلیه', 'rt'],
    ['cyst/o', ['cyst'], 'urinary bladder; sac', 'مثانه؛ کیسه', 'rt'],
    ['ur/o', ['ur'], 'urine, urinary tract', 'ادرار', 'rt'],
    ['oste/o', ['oste'], 'bone', 'استخوان', '*'],
    ['arthr/o', ['arthr'], 'joint', 'مفصل', '*'],
    ['my/o, muscul/o', ['muscul', 'my'], 'muscle', 'عضله', 'rt'],
    ['dermat/o, derm/o, cutane/o', ['dermat', 'derm', 'cutane'], 'skin', 'پوست', '*'],
    ['neur/o', ['neur'], 'nerve', 'عصب', '*'],
    ['encephal/o', ['encephal'], 'brain', 'مغز', 'rt'],
    ['cephal/o', ['cephal'], 'head', 'سر', 'rt'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', 'نخاع؛ مغز استخوان', 'rt'],
    ['psych/o', ['psych'], 'mind', 'روان', 'bs'],
    ['rhin/o', ['rhin'], 'nose', 'بینی', 'rt'],
    ['ot/o', ['ot'], 'ear', 'گوش', 'rt'],
    ['laryng/o', ['laryng'], 'larynx, voice box', 'حنجره', 'rl'],
    ['ophthalm/o', ['ophthalm'], 'eye', 'چشم', 'rt'],
    ['stomat/o', ['stomat'], 'mouth', 'دهان', 'rt'],
    ['gingiv/o', ['gingiv'], 'gums', 'لثه', 'bs'],
    ['odont/o', ['odont'], 'tooth', 'دندان', 'pf'],
    ['tonsill/o', ['tonsill'], 'tonsils', 'لوزه', 'rt'],
    ['lingu/o', ['lingu'], 'tongue', 'زبان', 'hs'],
    ['pneum/o, pulmon/o', ['pneumon', 'pneum', 'pulmon'], 'lung, air', 'ریه، هوا', 'rt'],
    ['thorac/o', ['thorac'], 'chest', 'قفسه سینه', 'rt'],
    ['trache/o', ['trache'], 'trachea, windpipe', 'نای', 'sf'],
    ['spir/o', ['spir'], 'breathing', 'تنفس', 'sf'],
    ['cost/o', ['cost'], 'rib', 'دنده', 'pf'],
    ['angi/o, vas/o, vascul/o', ['angi', 'vascul', 'vas'], 'vessel', 'رگ', 'rt'],
    ['arteri/o', ['arteri'], 'artery', 'سرخرگ', 'sf'],
    ['ven/o', ['ven'], 'vein', 'سیاهرگ', 'pf'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', '*'],
    ['thromb/o', ['thromb'], 'clot', 'لخته', 'sf'],
    ['mamm/o', ['mamm'], 'breast', 'پستان', 'sf'],
    ['later/o', ['later'], 'side', 'پهلو، طرف', 'pf'],
    ['cellul/o, cyt/o', ['cellul', 'cyt'], 'cell', 'یاخته', '*'],
    ['hist/o', ['hist'], 'tissue', 'بافت', 'rt'],
    ['lip/o', ['lip'], 'fat', 'چربی', 'rt'],
    ['carcin/o, onc/o', ['carcin', 'onc'], 'cancer, tumor', 'سرطان، تومور', 'rt'],
    ['path/o', ['path'], 'disease', 'بیماری', '*'],
    ['bi/o', ['bio', 'bi'], 'life', 'زندگی', 'sf'],
    ['ped/o', ['ped'], 'child', 'کودک', 'sf'],
    ['ger/o', ['ger'], 'old age', 'پیری', 'sf'],
    ['nat/o', ['nat'], 'birth', 'تولد', 'pf'],
    ['physi/o', ['physi'], 'nature, function', 'طبیعت، کارکرد', 'rt'],
    ['orth/o', ['orth'], 'straight, upright', 'راست، صاف', 'hs'],
    ['radi/o', ['radi'], 'x-ray, radiation', 'پرتو', 'sf'],
    ['electr/o', ['electr'], 'electricity', 'برق', 'sf'],
    ['therm/o', ['therm'], 'heat', 'گرما', 'bs'],
    ['hydr/o', ['hydr'], 'water', 'آب', 'hs'],
    ['glyc/o', ['glyc'], 'sugar', 'قند', 'pf'],
    ['ox/o', ['ox'], 'oxygen', 'اکسیژن', 'pf'],
    ['xer/o', ['xer'], 'dry', 'خشک', 'bs'],
    ['kyph/o', ['kyph'], 'hump', 'قوز', 'bs'],
    ['lith/o', ['lith'], 'stone', 'سنگ', 'sf'],
    ['por/o', ['por'], 'pore, passage', 'منفذ', 'rt'],
    ['esthesi/o', ['esthesi'], 'sensation', 'حس', 'sf'],
    // رنگ‌ها و باکتری‌ها
    ['erythr/o, rubi/o', ['erythr', 'rub'], 'red', 'قرمز', 'rt'],
    ['leuk/o, alb-', ['leuk', 'alb'], 'white', 'سفید', 'rt'],
    ['cyan/o', ['cyan'], 'blue', 'آبی', 'rt'],
    ['melan/o', ['melan'], 'black', 'سیاه', 'rt'],
    ['xanth/o, cirrh/o', ['xanth', 'cirrh'], 'yellow', 'زرد', 'rt'],
    ['chlor/o', ['chlor'], 'green', 'سبز', 'rt'],
    ['poli/o', ['poli'], 'gray', 'خاکستری', 'rt'],
    ['purpur/o', ['purpur'], 'purple', 'ارغوانی', 'rt'],
    ['chrom/o', ['chrom'], 'color', 'رنگ', 'rt'],
    ['bacteri/o', ['bacteri'], 'bacteria', 'باکتری', 'rt'],
    ['staphyl/o', ['staphyl'], 'clusters, like grapes', 'خوشه‌ای', 'rt'],
    ['strept/o', ['strept'], 'twisted chains', 'زنجیره‌ای', 'rt'],
    ['dipl/o', ['dipl'], 'pairs, double', 'جفت', 'rt'],
    ['-coccus', ['coccus'], 'round bacterium', 'باکتری کروی', 'rt'],
    ['-bacillus', ['bacillus'], 'rod-shaped bacterium', 'باکتری میله‌ای', 'rt'],
    ['intestin/o', ['intestin'], 'intestine', 'روده', 'rt'],
    ['skelet/o', ['skelet'], 'skeleton', 'اسکلت', 'rt'],
    ['peritone/o', ['peritone'], 'peritoneum', 'صفاق', 'rl'],
    ['perine/o', ['perine'], 'perineum', 'عجان (میان‌دوراهی)', 'rl'],
    ['prostat/o', ['prostat'], 'prostate gland', 'پروستات', 'rl'],
    ['pleur/o', ['pleur'], 'pleura', 'پرده جنب', 'rl'],
    ['son/o', ['son'], 'sound', 'صدا', 'hs'],
    ['ultra-', ['ultra'], 'beyond, excess', 'فراتر', 'hs'],
    ['uter/o', ['uter'], 'uterus', 'رحم', 'pf'],
    ['audi/o', ['audi'], 'hearing', 'شنوایی', 'hs'],
    ['gynec/o', ['gynec'], 'woman, female', 'زن', 'hs'],
    ['pharmac/o', ['pharmac'], 'drug', 'دارو', 'hs'],
    ['pelv/i', ['pelv'], 'pelvis', 'لگن', 'sf'],
    ['iatr/o', ['iatr'], 'treatment, physician', 'درمان، پزشک', 'sf'],
    ['-cyte', ['cyte'], 'cell', 'یاخته', 'rt'],
    ['-crine', ['crine'], 'to secrete', 'ترشح', 'pf'],
    ['-stasis', ['stasis'], 'standing, stopping', 'ایستایی', 'pf'],
    // پسوندهای بیماری و نشانه
    ['-itis', ['itis'], 'inflammation', 'التهاب', '*'],
    ['-osis', ['osis'], 'abnormal condition', 'حالت غیرطبیعی', '*'],
    ['-algia, -dynia', ['algia', 'dynia'], 'pain', 'درد', '*'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', '*'],
    ['-oma', ['oma'], 'tumor, mass', 'تومور، توده', '*'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'sf'],
    ['-emia', ['emia'], 'blood condition', 'حالت خون', 'sf'],
    ['-rrhage, -rrhagia', ['rrhage', 'rrhagia'], 'bursting forth (of blood)', 'خونریزی شدید', 'sf'],
    ['-rrhea', ['rrhea'], 'flow, discharge', 'جریان، ترشح', 'sf'],
    ['-penia', ['penia'], 'deficiency, too few', 'کمبود', 'sf'],
    ['-plegia', ['plegia'], 'paralysis', 'فلج', 'sf'],
    ['-malacia', ['malacia'], 'softening', 'نرمی', 'sf'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سختی', 'sf'],
    ['-stenosis', ['stenosis'], 'narrowing', 'تنگی', 'sf'],
    ['-ptosis', ['ptosis'], 'drooping', 'افتادگی', 'bs'],
    ['-genic, -gen', ['genic', 'gen'], 'producing', 'سازنده، زا', 'sf'],
    ['-trophy', ['trophy'], 'development, nourishment', 'رشد، تغذیه', 'pf'],
    ['-phagia', ['phagia'], 'eating, swallowing', 'خوردن، بلع', 'pf'],
    ['-phasia', ['phasia'], 'speech', 'گفتار', 'rl'],
    ['-pnea', ['pnea'], 'breathing', 'تنفس', 'pf'],
    ['-phoria', ['phoria'], 'feeling, carrying', 'حس، حالت', 'pf'],
    ['-derma', ['derma'], 'skin', 'پوست', 'bs'],
    ['-gnosis', ['gnosis'], 'knowledge', 'شناخت', 'rl'],
    // پسوندهای جراحی و تشخیص
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', '*'],
    ['-tomy', ['tomy'], 'incision, cutting into', 'برش', '*'],
    ['-stomy', ['stomy'], 'new opening', 'ایجاد منفذ', '*'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', '*'],
    ['-rrhaphy', ['rrhaphy'], 'suture', 'بخیه', 'sf'],
    ['-pexy', ['pexy'], 'surgical fixation', 'تثبیت', 'sf'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', 'کشیدن مایع با سوزن', 'sf'],
    ['-tripsy', ['tripsy'], 'crushing', 'خرد کردن', 'sf'],
    ['-lysis', ['lysis'], 'breakdown, destruction', 'تجزیه', 'sf'],
    ['-scope', ['scope'], 'instrument for viewing', 'ابزار دیدن', '*'],
    ['-scopy', ['scopy'], 'visual examination', 'مشاهده با ابزار', '*'],
    ['-gram', ['gram'], 'record, image', 'ثبت، نگاره', 'sf'],
    ['-graph', ['graph'], 'instrument for recording', 'ابزار ثبت', 'sf'],
    ['-graphy', ['graphy'], 'process of recording', 'روش ثبت', 'sf'],
    ['-meter', ['meter'], 'instrument for measuring', 'ابزار سنجش', 'sf'],
    ['-metry', ['metry'], 'process of measuring', 'سنجش', 'sf'],
    ['-opsy', ['opsy'], 'view of', 'دیدن', 'sf'],
    // پسوندهای رشته و دستوری
    ['-logy', ['logy'], 'study of', 'دانش، مطالعه', '*'],
    ['-logist', ['logist'], 'specialist in the study of', 'متخصص', '*'],
    ['-iatrics, -iatry', ['iatrics', 'iatry'], 'medical treatment', 'درمان پزشکی', 'sf'],
    ['-iatrist, -ician, -ist', ['iatrist', 'ician', 'ist'], 'specialist', 'متخصص', 'sf'],
    ['-ole, -ule', ['ole', 'ule'], 'small', 'کوچک', 'sf'],
    ['-ism', ['ism'], 'condition, state', 'حالت', 'sf'],
    ['-ia, -y', ['ia', 'y'], 'condition, process', 'حالت', '*'],
    ['-al, -ic, -ar, -ary, -eal, -ous, -ac, -tic', ['ary', 'eal', 'ous', 'tic', 'al', 'ic', 'ar', 'ac'], 'pertaining to', 'مربوط به', '*']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['a', 'before (ante)', 'پیش از', 'hs'],
    ['ac', 'before meals', 'پیش از غذا', 'hs'],
    ['AD', 'Alzheimer disease', 'بیماری آلزایمر', 'rl'],
    ['ad lib', 'as desired', 'به دلخواه', 'hs'],
    ['AIDS', 'acquired immunodeficiency syndrome', 'ایدز', 'rl'],
    ['AMA', 'against medical advice; American Medical Association', 'برخلاف توصیه پزشک؛ انجمن پزشکی آمریکا', 'rl'],
    ['bid', 'twice a day', 'دو بار در روز', 'hs'],
    ['BM', 'bowel movement', 'اجابت مزاج', 'rl'],
    ['BP', 'blood pressure', 'فشار خون', 'hs'],
    ['BRP', 'bathroom privileges', 'اجازه رفتن به دستشویی', 'hs'],
    ['Bx', 'biopsy', 'نمونه‌برداری', 'sf'],
    ['c', 'with (cum)', 'با', 'hs'],
    ['c/o', 'complaining of', 'شاکی از', 'hs'],
    ['Ca', 'cancer; carcinoma (also calcium)', 'سرطان (و کلسیم)', 'bs'],
    ['CBC', 'complete blood count', 'شمارش کامل خون', 'hs'],
    ['CC', 'chief complaint', 'شکایت اصلی', 'hs'],
    ['cm', 'centimeter', 'سانتی‌متر', 'rl'],
    ['COPD', 'chronic obstructive pulmonary disease', 'بیماری انسدادی مزمن ریه', 'rl'],
    ['CT', 'computed tomography', 'سی‌تی‌اسکن', 'hs'],
    ['CVA', 'cerebrovascular accident (stroke)', 'سکته مغزی', 'rl'],
    ['CXR', 'chest x-ray', 'عکس قفسه سینه', 'hs'],
    ['D/C', 'discharge; discontinue', 'ترخیص؛ قطع', 'hs'],
    ['DC', 'doctor of chiropractic', 'کایروپراکتور', 'hs'],
    ['DOB', 'date of birth', 'تاریخ تولد', 'hs'],
    ['Dx', 'diagnosis', 'تشخیص', 'rl'],
    ['ECG, EKG', 'electrocardiogram', 'نوار قلب', 'sf'],
    ['ED, ER', 'emergency department; emergency room', 'اورژانس', 'hs'],
    ['EGD', 'esophagogastroduodenoscopy', 'آندوسکوپی مری، معده و دوازدهه', 'bs'],
    ['EHR, EMR', 'electronic health (medical) record', 'پرونده الکترونیک سلامت', 'hs'],
    ['ENT', 'ear, nose and throat', 'گوش و حلق و بینی', 'hs'],
    ['ETOH', 'ethyl alcohol', 'الکل', 'hs'],
    ['Fx', 'fracture', 'شکستگی', 'hs'],
    ['GERD', 'gastroesophageal reflux disease', 'ریفلاکس معده به مری', 'hs'],
    ['GI', 'gastrointestinal', 'گوارشی', 'rt'],
    ['gtt', 'drops', 'قطره', 'hs'],
    ['GU', 'genitourinary', 'ادراری-تناسلی', 'rt'],
    ['H&P', 'history and physical', 'شرح حال و معاینه', 'hs'],
    ['HEENT', 'head, eyes, ears, nose, throat', 'سر، چشم، گوش، بینی و گلو', 'hs'],
    ['HIPAA', 'Health Insurance Portability and Accountability Act', 'قانون حفظ حریم اطلاعات سلامت', 'hs'],
    ['h/o', 'history of', 'سابقه', 'hs'],
    ['hs', 'at bedtime (hour of sleep)', 'هنگام خواب', 'hs'],
    ['HTN', 'hypertension', 'فشار خون بالا', 'pf'],
    ['Hx', 'history', 'شرح حال، سابقه', 'hs'],
    ['I&O', 'intake and output', 'جذب و دفع', 'hs'],
    ['ICD', 'International Classification of Diseases', 'طبقه‌بندی بین‌المللی بیماری‌ها', 'hs'],
    ['ICU', 'intensive care unit', 'بخش مراقبت‌های ویژه', 'hs'],
    ['ID', 'intradermal', 'داخل جلدی', 'pf'],
    ['IM', 'intramuscular', 'داخل عضلانی', 'pf'],
    ['IV', 'intravenous', 'داخل وریدی', 'pf'],
    ['LUL', 'left upper lobe', 'لوب فوقانی چپ', 'hs'],
    ['mg', 'milligram', 'میلی‌گرم', 'hs'],
    ['mL', 'milliliter', 'میلی‌لیتر', 'hs'],
    ['MR', 'medical records', 'مدارک پزشکی', 'hs'],
    ['MRI', 'magnetic resonance imaging', 'ام‌آرآی', 'hs'],
    ['MS', 'multiple sclerosis; mitral stenosis', 'ام‌اس؛ تنگی میترال', 'sf'],
    ['NKDA', 'no known drug allergies', 'حساسیت دارویی شناخته‌شده ندارد', 'hs'],
    ['NPO', 'nothing by mouth (nil per os)', 'ناشتا؛ چیزی از راه دهان نخورد', 'hs'],
    ['NSAID', 'nonsteroidal anti-inflammatory drug', 'داروی ضدالتهاب غیراستروئیدی', 'hs'],
    ['OA', 'osteoarthritis', 'آرتروز', 'bs'],
    ['OD', 'right eye (oculus dexter)', 'چشم راست', 'hs'],
    ['OOB', 'out of bed', 'بیرون از تخت', 'hs'],
    ['OR', 'operating room', 'اتاق عمل', 'hs'],
    ['OS', 'left eye (oculus sinister)', 'چشم چپ', 'hs'],
    ['OTC', 'over-the-counter', 'بدون نسخه', 'hs'],
    ['pc', 'after meals', 'پس از غذا', 'hs'],
    ['PD', 'Parkinson disease', 'بیماری پارکینسون', 'rl'],
    ['PE', 'physical examination', 'معاینه فیزیکی', 'hs'],
    ['po', 'by mouth (per os)', 'از راه دهان', 'hs'],
    ['postop', 'postoperative', 'پس از عمل', 'pf'],
    ['preop', 'preoperative', 'پیش از عمل', 'pf'],
    ['prn', 'as needed', 'در صورت نیاز', 'hs'],
    ['q', 'every', 'هر', 'hs'],
    ['qh', 'every hour', 'هر ساعت', 'hs'],
    ['qid', 'four times a day', 'چهار بار در روز', 'hs'],
    ['R/O', 'rule out', 'رد کردن احتمال', 'hs'],
    ['RBC', 'red blood cell', 'گلبول قرمز', 'rt'],
    ['ROS', 'review of systems', 'مرور دستگاه‌ها', 'hs'],
    ['Rx', 'prescription; take (recipe)', 'نسخه؛ بگیر', 'hs'],
    ['s', 'without (sine)', 'بدون', 'hs'],
    ['Sig', 'write on label; instructions (signa)', 'دستور مصرف', 'hs'],
    ['SL', 'sublingual', 'زیرزبانی', 'hs'],
    ['SOB', 'shortness of breath', 'تنگی نفس', 'pf'],
    ['stat', 'immediately (statim)', 'فوری', 'hs'],
    ['subcut, subq', 'subcutaneous', 'زیرجلدی', 'pf'],
    ['tab', 'tablet', 'قرص', 'hs'],
    ['tid', 'three times a day', 'سه بار در روز', 'hs'],
    ['TPR', 'temperature, pulse, respiration', 'دما، نبض، تنفس', 'hs'],
    ['Tx', 'treatment', 'درمان', 'hs'],
    ['US', 'ultrasound, ultrasonography', 'سونوگرافی', 'hs'],
    ['VS', 'vital signs', 'علائم حیاتی', 'hs'],
    ['WBC', 'white blood cell', 'گلبول سفید', 'rt'],
    ['WNL', 'within normal limits', 'در محدوده طبیعی', 'hs'],
    ['w/o', 'without', 'بدون', 'hs'],
    ['y/o', 'years old', 'ساله', 'hs']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'concept', icon: '🧩', name: 'مفاهیم و قواعد واژه‌سازی' },
    { id: 'body', icon: '🫀', name: 'اندام‌ها و ساختارها' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '🩺', name: 'بیماری‌ها' },
    { id: 'sx', icon: '🔍', name: 'نشانه‌ها و یافته‌ها' },
    { id: 'lab', icon: '🧪', name: 'آزمایش و تصویربرداری' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و جراحی' }
  ];
  const main = { concept: 'مفاهیم و قواعد واژه‌سازی' };
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
    return svg(360, 236, `${title('یک واژه، پنج قطعه: gastroenterology')}
      <g filter="url(#${sh})">${w.svg}</g>
      ${lab(X[0], 132, 'root', 'ریشه: معده', { size: 9.5, fill: C.rootDark })}${lab(X[1], 132, 'vowel', 'واکه', { size: 9.5, fill: C.cvDark })}
      ${lab(X[2], 132, 'root', 'ریشه: روده', { size: 9.5, fill: C.rootDark })}${lab(X[3], 132, 'vowel', 'واکه', { size: 9.5, fill: C.cvDark })}
      ${lab(X[4], 132, 'suffix', 'پسوند: دانش', { size: 9.5, fill: C.sufDark })}
      <rect x="30" y="166" width="300" height="50" rx="12" fill="#eef0fb"/>
      ${f(180, 186, 'معنی: دانش معده و روده (گوارش‌شناسی)', { size: 10.5, fill: INK, w: 800 })}
      ${f(180, 205, 'واژه‌ای که دو ریشه دارد «واژه مرکب» است', { size: 9.2 })}`, 'قطعه‌های واژه', shadow(sh));
  };

  A['four-parts'] = () => {
    const sh = nid();
    const row = (y, kind, en, n, fa, job) => `<g filter="url(#${sh})">${piece(222, y, 116, 40, kind, en, { size: 12.5, noNotch: kind === 'pre', noTab: kind === 'suf' })}</g>${f(206, y + 17, n, { size: 10.5, fill: INK, w: 900, anchor: 'end' })}${f(206, y + 33, fa, { size: 8.8, anchor: 'end' })}`;
    return svg(360, 262, `${title('چهار جزء هر واژه پزشکی')}
      ${row(40, 'pre', 'epi-', 'پیشوند', 'اول واژه؛ عدد، جا، زمان یا حالت', '')}
      ${row(94, 'root', 'gastr', 'ریشه', 'پایه معنی؛ معمولاً یک عضو بدن', '')}
      ${row(148, 'cv', 'o', 'واکه رابط', 'معمولاً o؛ تلفظ را آسان می‌کند', '')}
      ${row(202, 'suf', '-ic', 'پسوند', 'آخر واژه؛ بیماری، روش یا نقش دستوری', '')}
      ${f(98, 252, 'ریشه + واکه = combining form، مثل gastr/o', { size: 9, fill: INK, w: 700 })}`, 'چهار جزء واژه', shadow(sh));
  };

  A['cv-rule'] = () => {
    const sh = nid(), m = nid();
    const line = (y, parts, res, ok, note) => {
      const w = word(14, y, 32, parts, { size: 11 });
      return `<g filter="url(#${sh})">${w.svg}</g>${arrow(m, w.end + 8, y + 16, w.end + 30, y + 16, LINE, 2)}${t(w.end + 36, y + 21, res, { size: res.length > 12 ? 10.5 : 12, w: 900, anchor: 'start', fill: ok ? C.green : C.red })}${f(180, y + 48, note, { size: 9, fill: INK, w: 700 })}`;
    };
    return svg(360, 276, `${title('قانون واکه رابط o')}
      ${line(36, [['root', 'gastr', 60], ['cv', 'o', 30], ['suf', '-scopy', 74]], 'gastroscopy', true, 'پسوند با صامت شروع شده (s)؛ پس o می‌ماند')}
      ${line(112, [['root', 'gastr', 60], ['suf', '-itis', 66]], 'gastritis', true, 'پسوند با واکه شروع شده (i)؛ پس o حذف می‌شود، نه gastroitis')}
      ${line(188, [['root', 'oste', 54], ['cv', 'o', 30], ['root', 'arthr', 60], ['suf', '-itis', 60]], 'osteoarthritis', true, 'میان دو ریشه o همیشه می‌ماند: osteoarthritis')}`, 'قانون واکه رابط', shadow(sh) + marker(m));
  };

  A['translate-steps'] = () => {
    const sh = nid(), m = nid();
    const w = word(30, 58, 44, [['pre', 'peri-', 84], ['root', 'card', 82], ['suf', '-itis', 90]], { size: 14 });
    const X = w.xs;
    const badge = (x, n, c) => `<circle cx="${x}" cy="44" r="11" fill="${c}"/>${t(x, 48.5, n, { size: 12, w: 900, fill: '#fff' })}`;
    return svg(360, 252, `${title('ترجمه واژه در سه گام: pericarditis')}
      <g filter="url(#${sh})">${w.svg}</g>${badge(X[2], '1', C.sufDark)}${badge(X[0], '2', C.preDark)}${badge(X[1], '3', C.rootDark)}
      ${lab(X[0], 124, 'around', 'پیرامون', { size: 10, fill: C.preDark })}${lab(X[1], 124, 'heart', 'قلب', { size: 10, fill: C.rootDark })}${lab(X[2], 124, 'inflammation', 'التهاب', { size: 10, fill: C.sufDark })}
      ${curve(m, `M${X[2]} 156 C${X[2] - 40} 176 ${X[0] + 30} 176 ${X[0]} 158`, '#8a5cb3', 1.6, true)}
      <rect x="26" y="186" width="308" height="52" rx="12" fill="#eef0fb"/>
      ${f(180, 206, '۱ پسوند ← ۲ پیشوند ← ۳ ریشه', { size: 10.5, fill: INK, w: 900 })}
      ${f(180, 226, 'یعنی: التهاب (پرده) پیرامون قلب', { size: 10, fill: INK, w: 700 })}`, 'سه گام ترجمه', shadow(sh) + marker(m, '#8a5cb3'));
  };

  A['greek-latin'] = () => {
    const rows = [['Greek', 'Latin', 'معنی'], ['nephr/o', 'ren/o', 'کلیه'], ['pneum/o', 'pulmon/o', 'ریه'], ['dermat/o', 'cutane/o', 'پوست'], ['stomat/o', 'or/o', 'دهان'], ['ophthalm/o', 'ocul/o', 'چشم'], ['hem/o', 'sanguin/o', 'خون']];
    return svg(360, 262, `${title('یک عضو، دو ریشه: یونانی و لاتین')}
      ${table(36, 32, [104, 104, 80], 24, rows, { colFill: ['#1f5590', '#9a5418', INK] })}
      ${f(180, 218, 'ریشه یونانی بیشتر در نام بیماری و روش می‌آید: nephritis، nephrectomy', { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 236, 'ریشه لاتین بیشتر در صفت‌ها: renal، pulmonary، cutaneous', { size: 8.8, fill: INK, w: 700 })}
      ${f(180, 254, 'کلمه carcinoma از karkinos یونانی یعنی «خرچنگ» آمده است', { size: 8.6 })}`, 'یونانی و لاتین');
  };

  A['silent-letters'] = () => {
    const sh = nid();
    const box = (x, y, k, ex, say, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="80" height="72" rx="12" fill="#f3f4fd"/></g>${t(x + 40, y + 21, k, { size: 15, w: 900, fill: C.indigo })}${t(x + 40, y + 39, ex, { size: 9.5, w: 800 })}${t(x + 40, y + 52, say, { size: 8.5, w: 700, fill: C.red })}${f(x + 40, y + 65, fa, { size: 8.2 })}`;
    return svg(360, 228, `${title('حرف‌هایی که خوانده نمی‌شوند یا صدای دیگری دارند')}
      ${box(8, 34, 'ps', 'psychology', 'sye-KOL…', 'p ساکت')}${box(96, 34, 'pn', 'pneumonia', 'noo-MOH…', 'p ساکت')}${box(184, 34, 'pt', 'ptosis', 'TOH-sis', 'p ساکت')}${box(272, 34, 'ch', 'chronic', 'KRON-ik', 'مثل k')}
      ${box(8, 118, 'x', 'xeroderma', 'zee-roh…', 'مثل z')}${box(96, 118, 'ph', 'phlegm', 'flem', 'مثل f')}${box(184, 118, 'c / g', 'cytology', 'sye-TOL…', 'پیش از e، i، y نرم')}${box(272, 118, 'mn', 'mnemonic', 'neh-MON…', 'm ساکت')}
      ${f(180, 216, 'اگر صدای «س» شنیدی، واژه شاید با c، ps یا s شروع شود', { size: 9, fill: INK, w: 700 })}`, 'تلفظ', shadow(sh));
  };

  A['stress-marks'] = () => {
    const rows = [['vowel', 'long ¯', 'short ˘'], ['a', 'ā  pace', 'ă  cat'], ['e', 'ē  easy', 'ĕ  pet'], ['i', 'ī  bite', 'ĭ  pit'], ['o', 'ō  boat', 'ŏ  hot'], ['u', 'ū  cute', 'ŭ  cut']];
    return svg(360, 268, `${title('راهنمای تلفظ: هجای تکیه‌دار و علامت واکه')}
      <rect x="40" y="34" width="280" height="46" rx="12" fill="#eef0fb"/>
      ${t(180, 56, 'FEM - or - al', { size: 15, w: 900, fill: C.indigo })}${f(180, 73, 'هجای با حروف بزرگ تکیه دارد', { size: 9 })}
      ${table(60, 92, [70, 85, 85], 22, rows, { sym: [true, true, true] })}
      ${f(180, 248, 'خط صاف (macron) واکه کشیده و هلال (breve) واکه کوتاه است', { size: 9, fill: INK, w: 700 })}`, 'راهنمای تلفظ');
  };

  A['medicine-timeline'] = () => {
    const ev = [[1816, 'stethoscope', 'گوشی پزشکی'], [1842, 'ether anesthesia', 'بیهوشی با اتر'], [1895, 'x-rays', 'اشعه ایکس'], [1922, 'insulin', 'انسولین'], [1928, 'penicillin', 'پنی‌سیلین'], [1967, 'heart transplant', 'پیوند قلب'], [2008, 'face transplant', 'پیوند صورت']];
    const x = yr => 26 + (yr - 1800) / 215 * 308;
    let body = `<path d="M18 132 H342" stroke="${C.teal}" stroke-width="8" stroke-linecap="round"/>`;
    ev.forEach((e, i) => {
      const X = x(e[0]), up = i % 2 === 0, y = up ? 84 : 172;
      body += `<path d="M${X} 132 L${X} ${up ? 104 : 156}" stroke="${LINE}" stroke-width="1.2"/><circle cx="${X}" cy="132" r="6" fill="#fff" stroke="${C.teal}" stroke-width="3"/>`;
      body += t(X, up ? y - 26 : y + 2, String(e[0]), { size: 10, w: 900, fill: C.red }) + lab(X, up ? y - 12 : y + 16, e[1], e[2], { size: 9 });
    });
    return svg(360, 228, `${title('چند گام بزرگ در تاریخ پزشکی')}${body}
      ${f(180, 222, 'ریشه‌های یونانی و لاتین از زمان بقراط (۴۶۰ پیش از میلاد) تا امروز کار می‌کنند', { size: 8.8, fill: INK, w: 700 })}`, 'تاریخ پزشکی');
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
    return svg(360, 268, `${title('ریشه‌های سر و صورت')}${face}
      ${pin(204, 84, 286, 52)}${lab(318, 44, 'encephal/o', 'مغز', { size: 9.5 })}
      ${pin(126, 100, 70, 52)}${lab(42, 44, 'cephal/o', 'سر', { size: 9.5 })}
      ${pin(208, 128, 286, 104)}${lab(318, 98, 'ophthalm/o', 'چشم', { size: 9.5 })}
      ${pin(108, 146, 50, 104)}${lab(36, 98, 'ot/o', 'گوش', { size: 9.5 })}
      ${pin(182, 160, 286, 154)}${lab(318, 150, 'rhin/o', 'بینی', { size: 9.5 })}
      ${pin(170, 194, 52, 160)}${lab(38, 154, 'stomat/o', 'دهان', { size: 9.5 })}
      ${pin(194, 190, 286, 202)}${lab(318, 198, 'odont/o', 'دندان', { size: 9.5 })}
      ${pin(160, 196, 52, 208)}${lab(38, 204, 'gingiv/o', 'لثه', { size: 9.5 })}
      ${pin(180, 240, 286, 246)}${lab(318, 244, 'laryng/o', 'حنجره', { size: 9.5 })}`, 'ریشه‌های سر', shadow(sh) + radial(g, '#fde3d0', C.skin));
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
    return svg(360, 318, `${title('ریشه‌های اندام‌های درون تنه')}<g transform="translate(0 18)">
      ${mannequin(180, 10, 1.08, { op: 0.5 })}${org}
      ${pin(190, 112, 270, 60)}${lab(306, 52, 'cardi/o', 'قلب', { size: 9.5 })}
      ${pin(140, 100, 70, 60)}${lab(46, 52, 'pneum/o, pulmon/o', 'ریه', { size: 9 })}
      ${pin(150, 158, 70, 120)}${lab(46, 112, 'hepat/o', 'کبد', { size: 9.5 })}
      ${pin(212, 160, 280, 114)}${lab(310, 106, 'gastr/o', 'معده', { size: 9.5 })}
      ${pin(236, 152, 290, 156)}${lab(318, 152, 'splen/o', 'طحال', { size: 9.5 })}
      ${pin(146, 170, 70, 176)}${lab(46, 170, 'nephr/o, ren/o', 'کلیه', { size: 9 })}
      ${pin(180, 206, 290, 204)}${lab(312, 198, 'enter/o', 'روده باریک', { size: 9.5 })}
      ${pin(140, 222, 70, 230)}${lab(46, 224, 'col/o', 'روده بزرگ', { size: 9.5 })}
      ${pin(186, 252, 290, 256)}${lab(314, 252, 'cyst/o', 'مثانه', { size: 9.5 })}</g>`, 'ریشه‌های تنه', shadow(sh));
  };

  A['tissue-layers'] = () => {
    const sh = nid();
    const band = (y, h, c, l) => `<path d="M60 ${y} H250 V${y + h} H60Z" fill="${c}" stroke="${l}" stroke-width="1"/>`;
    return svg(360, 274, `${title('از پوست تا استخوان: ریشه هر لایه')}
      <g filter="url(#${sh})">${band(40, 26, '#f6c9ae', '#d39a7c')}${band(66, 40, '#f6dc8f', '#c9a64a')}${band(106, 56, '#d9665a', '#a8433a')}${band(162, 60, '#f3e4c4', '#c4a46c')}</g>
      ${[78, 96, 116, 134].map(x => `<circle cx="${x * 1.7}" cy="${86 + (x % 3) * 4}" r="7" fill="#fbe8a8" stroke="#d9b65a"/>`).join('')}
      ${[0, 1, 2, 3, 4].map(i => `<path d="M${70 + i * 36} 112 V156" stroke="#b8433c" stroke-width="2" opacity=".5"/>`).join('')}
      <circle cx="150" cy="192" r="15" fill="#f6dc8f" stroke="#c4a46c" stroke-width="1.5"/>
      <path d="M60 84 H250" stroke="#d9443a" stroke-width="4"/><path d="M60 92 H250" stroke="#3b6fd4" stroke-width="4"/>
      <path d="M60 132 C120 128 180 140 250 134" stroke="#f2c94c" stroke-width="3" fill="none"/>
      ${pin(230, 52, 284, 50)}${lab(312, 46, 'dermat/o', 'پوست', { size: 9.5 })}
      ${pin(220, 72, 284, 82)}${lab(312, 80, 'lip/o', 'چربی', { size: 9.5 })}
      ${pin(240, 88, 284, 112)}${lab(312, 112, 'angi/o', 'رگ', { size: 9.5 })}
      ${pin(230, 136, 284, 144)}${lab(312, 144, 'neur/o', 'عصب', { size: 9.5 })}
      ${pin(200, 150, 284, 176)}${lab(312, 176, 'my/o', 'عضله', { size: 9.5 })}
      ${pin(220, 200, 284, 208)}${lab(312, 208, 'oste/o', 'استخوان', { size: 9.5 })}
      ${pin(150, 192, 40, 238)}${lab(14, 240, 'myel/o', 'مغز استخوان', { size: 9, anchor: 'start' })}
      ${f(196, 266, 'ریشه + ‎-itis‎ ← dermatitis، neuritis، myositis، osteitis', { size: 8.8, fill: INK, w: 700 })}`, 'لایه‌های بدن', shadow(sh));
  };

  A['color-wheel'] = () => {
    const sh = nid();
    const dot = (x, y, c, en, fa, ex) => `<g filter="url(#${sh})"><circle cx="${x}" cy="${y}" r="21" fill="${c}" stroke="#0002" stroke-width="1.2"/></g>${lab(x, y + 36, en, fa, { size: 9.5 })}${t(x, y + 63, ex, { size: 8.5, w: 700, fill: MUTED })}`;
    return svg(360, 254, `${title('ریشه‌های رنگ')}
      ${dot(45, 60, '#d9443a', 'erythr/o', 'قرمز', 'erythrocyte')}${dot(135, 60, '#fafafa', 'leuk/o', 'سفید', 'leukocyte')}${dot(225, 60, '#3b6fd4', 'cyan/o', 'آبی', 'cyanosis')}${dot(315, 60, '#2b2b2b', 'melan/o', 'سیاه', 'melanoma')}
      ${dot(45, 160, '#f2c94c', 'xanth/o', 'زرد', 'xanthoma')}${dot(135, 160, '#3f8a05', 'chlor/o', 'سبز', 'chlorophyll')}${dot(225, 160, '#9aa3a8', 'poli/o', 'خاکستری', 'poliomyelitis')}${dot(315, 160, '#8e4a8a', 'purpur/o', 'ارغوانی', 'purpura')}`, 'رنگ‌ها', shadow(sh));
  };

  A['bacteria-shapes'] = () => {
    const sh = nid();
    const cc = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#0003"/>`;
    const rod = (x, y, c, a) => `<rect x="${x - 15}" y="${y - 6}" width="30" height="12" rx="6" fill="${c}" stroke="#0003" transform="rotate(${a || 0} ${x} ${y})"/>`;
    const cell = (x, y, art, en, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="104" height="104" rx="14" fill="#f4f6f8"/></g>${art}${lab(x + 52, y + 80, en, fa, { size: 9.5 })}`;
    const cluster = [[0, 0], [12, 2], [6, 11], [-6, 10], [-10, -2], [2, -11], [14, -9]].map(p => cc(52 + 128 + p[0], 70 + p[1], '#4b9ac4')).join('');
    const chain = [0, 1, 2, 3, 4].map(i => cc(144 + 128 + i * 13, 64 + Math.sin(i) * 6, '#7cb342')).join('');
    return svg(360, 268, `${title('شکل باکتری‌ها و ریشه نامشان')}
      ${cell(10, 30, cc(62, 66, '#4b9ac4'), 'coccus', 'کروی')}${cell(128, 30, cluster, 'staphylococcus', 'خوشه‌ای')}${cell(246, 30, chain, 'streptococcus', 'زنجیره‌ای')}
      ${cell(10, 146, cc(54, 182, '#c0563b') + cc(68, 182, '#c0563b'), 'diplococcus', 'جفتی')}${cell(128, 146, rod(180, 182, '#d97a3a', -18), 'bacillus', 'میله‌ای')}${cell(246, 146, rod(282, 178, '#8e4a8a') + rod(312, 184, '#8e4a8a'), 'streptobacillus', 'میله‌های زنجیره')}`, 'باکتری‌ها', shadow(sh));
  };

  A['cell-to-system'] = () => {
    const sh = nid(), m = nid();
    const step = (x, art, en, fa, root) => `<g filter="url(#${sh})"><rect x="${x}" y="44" width="76" height="112" rx="14" fill="#f3f4fd"/></g>${art}${lab(x + 38, 128, en, fa, { size: 9.5 })}${t(x + 38, 176, root, { size: root.length > 10 ? 8.4 : 10, w: 900, fill: C.rootDark })}`;
    const cellA = `<circle cx="46" cy="84" r="20" fill="#fde3d0" stroke="${C.skinLine}" stroke-width="1.4"/><circle cx="50" cy="82" r="7" fill="#8e4a8a"/>`;
    const tis = [0, 1, 2].map(r => [0, 1, 2].map(c => `<circle cx="${110 + c * 14}" cy="${70 + r * 14}" r="6.5" fill="#f6c9ae" stroke="#d39a7c"/>`).join('')).join('');
    const organ = `<path d="M218 64 C236 56 250 72 240 92 L224 110 L208 92 C198 74 206 60 218 64Z" fill="#d9443a" stroke="#9c2a23"/>`;
    const sys = `<path d="M300 60 V108" stroke="#d9443a" stroke-width="4"/><path d="M300 70 L286 98 M300 70 L314 98" stroke="#3b6fd4" stroke-width="3"/><path d="M300 66 C312 60 318 74 310 84 L300 92 L290 84 C282 74 288 60 300 66Z" fill="#d9443a"/>`;
    return svg(360, 214, `${title('از یاخته تا دستگاه')}
      ${step(8, cellA, 'cell', 'یاخته', 'cyt/o')}${step(96, tis, 'tissue', 'بافت', 'hist/o')}${step(184, organ, 'organ', 'اندام', 'cardi/o')}${step(272, sys, 'system', 'دستگاه', 'cardiovascular')}
      ${arrow(m, 86, 100, 94, 100)}${arrow(m, 174, 100, 182, 100)}${arrow(m, 262, 100, 270, 100)}
      ${f(180, 202, 'cytology دانش یاخته و histology دانش بافت است', { size: 9.2, fill: INK, w: 700 })}`, 'سطح‌های بدن', shadow(sh) + marker(m));
  };

  A['body-systems'] = () => {
    const sh = nid();
    const S = [['🦴', 'musculoskeletal', 'اسکلتی-عضلانی'], ['🧴', 'integumentary', 'پوست و ضمائم'], ['🫀', 'cardiovascular', 'قلب و عروق'], ['🫁', 'respiratory', 'تنفسی'],
      ['🍽️', 'gastrointestinal', 'گوارشی'], ['💧', 'urinary', 'ادراری'], ['🧠', 'nervous', 'عصبی'], ['⚗️', 'endocrine', 'درون‌ریز'],
      ['👁️', 'sensory', 'حواس ویژه'], ['🧬', 'reproductive', 'تولیدمثل'], ['🛡️', 'lymphatic', 'لنفاوی و ایمنی'], ['🧩', 'all together', 'همه با هم']];
    let b = '';
    S.forEach((s, i) => { const x = 8 + (i % 4) * 87, y = 32 + Math.floor(i / 4) * 78; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="72" rx="12" fill="${i === 11 ? '#eef0fb' : '#f6f7f9'}"/></g>${t(x + 41, y + 25, s[0], { size: 18 })}${lab(x + 41, y + 46, s[1], s[2], { size: s[1].length > 13 ? 8 : 9 })}`; });
    return svg(360, 274, `${title('دستگاه‌های بدن')}${b}`, 'دستگاه‌های بدن', shadow(sh));
  };

  A['blood-words'] = () => {
    const sh = nid();
    const rbc = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="8" fill="#d9443a" stroke="#9c2a23"/><ellipse cx="${x}" cy="${y}" rx="4" ry="3" fill="#b8332b"/>`;
    const wbc = (x, y) => `<circle cx="${x}" cy="${y}" r="10" fill="#f3f0fa" stroke="#9aa3c8"/><path d="M${x - 5} ${y} q3 -6 6 0 q3 6 5 -1" stroke="#7b5ab8" stroke-width="3" fill="none"/>`;
    const row = (y, art, w, fa) => `<g filter="url(#${sh})"><rect x="16" y="${y}" width="328" height="40" rx="10" fill="#f8f9fc"/></g>${art}${t(150, y + 25, w, { size: 11.5, w: 900, anchor: 'start', fill: C.indigo })}${f(334, y + 25, fa, { size: 9.5, fill: INK, w: 700, anchor: 'end' })}`;
    return svg(360, 264, `${title('ریشه + پسوند در خون: ‎-cyte‎، ‎-emia‎، ‎-penia‎')}
      ${row(34, rbc(44, 54) + rbc(70, 56) + rbc(96, 52), 'erythrocyte', 'گلبول قرمز')}
      ${row(80, wbc(44, 100) + wbc(70, 100), 'leukocyte', 'گلبول سفید')}
      ${row(126, wbc(36, 146) + wbc(56, 140) + wbc(76, 150) + wbc(96, 142) + wbc(114, 150), 'leukemia', 'سرطان گلبول سفید')}
      ${row(172, wbc(70, 192), 'leukopenia', 'کمبود گلبول سفید')}
      ${row(218, rbc(70, 238), 'anemia', 'کم‌خونی')}`, 'واژه‌های خون', shadow(sh));
  };

  /* ================= sf: پسوندها ================= */
  A['suffix-families'] = () => {
    const sh = nid();
    const col = (x, c, bg, en, fa, items) => `<g filter="url(#${sh})"><rect x="${x}" y="32" width="82" height="214" rx="14" fill="${bg}"/></g>${lab(x + 41, 52, en, fa, { size: 9.5, fill: c })}${items.map((it, i) => t(x + 41, 92 + i * 22, it, { size: 10.5, w: 900, fill: c })).join('')}`;
    return svg(360, 258, `${title('چهار خانواده پسوند')}
      ${col(8, '#b8332b', '#fde8e6', 'condition', 'بیماری و حالت', ['-itis', '-osis', '-algia', '-megaly', '-oma', '-pathy', '-emia'])}
      ${col(96, '#1f6fa8', '#e3f0fb', 'diagnosis', 'تشخیص', ['-scopy', '-scope', '-gram', '-graph', '-graphy', '-metry', '-opsy'])}
      ${col(184, '#17806f', '#e0f5f1', 'surgery', 'جراحی', ['-ectomy', '-tomy', '-stomy', '-plasty', '-rrhaphy', '-pexy', '-centesis'])}
      ${col(272, '#5e3586', '#f1e8fa', 'grammar', 'صفت، اسم، رشته', ['-al, -ic', '-ous, -ar', '-ia, -y', '-ism', '-logy', '-logist', '-iatrics'])}`, 'خانواده‌های پسوند', shadow(sh));
  };

  A['condition-suffixes'] = () => {
    const sh = nid();
    const c = (x, y, ic, s, fa, ex, col) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="108" height="92" rx="14" fill="#f8f9fc"/></g>${t(x + 54, y + 26, ic, { size: 19 })}${t(x + 54, y + 48, s, { size: 12.5, w: 900, fill: col })}${f(x + 54, y + 63, fa, { size: 9.2, fill: INK, w: 700 })}${t(x + 54, y + 81, ex, { size: 8.8, w: 700, fill: MUTED })}`;
    return svg(360, 244, `${title('پسوندهای بیماری و نشانه')}
      ${c(8, 32, '🔥', '-itis', 'التهاب', 'arthritis', '#b8332b')}${c(126, 32, '⚠️', '-osis', 'حالت غیرطبیعی', 'osteoporosis', '#a8801f')}${c(244, 32, '⚡', '-algia, -dynia', 'درد', 'gastralgia', '#d9443a')}
      ${c(8, 134, '🎈', '-megaly', 'بزرگی', 'hepatomegaly', '#1f6fa8')}${c(126, 134, '🔴', '-oma', 'تومور، توده', 'lipoma', '#8e4a8a')}${c(244, 134, '🦠', '-pathy', 'بیماری', 'neuropathy', '#17806f')}`, 'پسوندهای بیماری', shadow(sh));
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
    return svg(360, 262, `${title('پسوندهای جراحی')}
      ${card2(8, 32, ect(8, 32), '-ectomy', 'برداشتن', 'appendectomy')}${card2(126, 32, tom(126, 32), '-tomy', 'برش', 'tracheotomy')}${card2(244, 32, sto(244, 32), '-stomy', 'ایجاد منفذ', 'colostomy')}
      ${card2(8, 146, pla(8, 146), '-plasty', 'ترمیم', 'rhinoplasty')}${card2(126, 146, rrh(126, 146), '-rrhaphy', 'بخیه', 'myorrhaphy')}${card2(244, 146, pex(244, 146), '-pexy', 'تثبیت', 'nephropexy')}`, 'پسوندهای جراحی', shadow(sh));
  };

  A['scope-gram'] = () => {
    const rows = [['', 'instrument', 'process', 'record'], ['view', '-scope', '-scopy', '—'], ['record', '-graph', '-graphy', '-gram'], ['measure', '-meter', '-metry', '—']];
    return svg(360, 248, `${title('ابزار، روش و حاصل کار')}
      ${table(14, 34, [74, 90, 90, 78], 28, rows, { colFill: [INK, '#1f6fa8', '#17806f', '#8e4a8a'] })}
      ${f(304, 166, 'endoscope ابزار است و endoscopy روش دیدن با آن', { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${f(304, 188, 'electrocardiograph دستگاه است و electrocardiogram نوار حاصل', { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${f(304, 210, 'thermometer ابزار و spirometry روش سنجش است', { size: 9, fill: INK, w: 700, anchor: 'end' })}
      ${t(330, 166, '①', { size: 11, fill: C.indigo })}${t(330, 188, '②', { size: 11, fill: C.indigo })}${t(330, 210, '③', { size: 11, fill: C.indigo })}
      ${f(180, 236, 'سطرها: دیدن، ثبت کردن، سنجیدن', { size: 8.8 })}`, 'ابزار و روش');
  };

  A['specialist-suffixes'] = () => {
    const sh = nid();
    const r = (y, s, fa, ex, exfa, c) => `<g filter="url(#${sh})"><rect x="14" y="${y}" width="332" height="36" rx="10" fill="#f8f9fc"/></g>${t(60, y + 23, s, { size: 12, w: 900, fill: c })}${t(170, y + 23, ex, { size: 10.5, w: 800 })}${f(336, y + 16, fa, { size: 9.4, fill: INK, w: 800, anchor: 'end' })}${f(336, y + 30, exfa, { size: 8.6, anchor: 'end' })}`;
    return svg(360, 262, `${title('پسوندهای رشته و متخصص')}
      ${r(32, '-logy', 'دانش، مطالعه', 'cardiology', 'قلب‌شناسی', '#1f6fa8')}
      ${r(74, '-logist', 'متخصص', 'cardiologist', 'متخصص قلب', '#1f6fa8')}
      ${r(116, '-iatrics', 'درمان پزشکی', 'pediatrics', 'طب کودکان', '#17806f')}
      ${r(158, '-ician', 'پزشک متخصص', 'pediatrician', 'متخصص کودکان', '#17806f')}
      ${r(200, '-iatrist', 'پزشک متخصص', 'psychiatrist', 'روان‌پزشک', '#8e4a8a')}
      ${f(180, 252, 'iatr/o یعنی درمان و پزشک', { size: 8.8 })}`, 'پسوندهای متخصص', shadow(sh));
  };

  A['rrh-family'] = () => {
    const sh = nid();
    const box = (x, art, s, fa, ex) => `<g filter="url(#${sh})"><rect x="${x}" y="34" width="108" height="168" rx="14" fill="#f8f9fc"/></g>${art}${t(x + 54, 140, s, { size: 13, w: 900, fill: '#b8332b' })}${f(x + 54, 158, fa, { size: 9.4, fill: INK, w: 700 })}${t(x + 54, 184, ex, { size: 9.5, w: 800, fill: C.indigo })}`;
    const drip = x => `<path d="M${x + 30} 60 H${x + 78}" stroke="#7cb2e5" stroke-width="8" stroke-linecap="round"/>` + [0, 1, 2].map(i => `<path d="M${x + 38 + i * 16} ${74 + i * 6} c-5 9 -5 14 0 15 c5 -1 5 -6 0 -15z" fill="#7cb2e5"/>`).join('');
    const burst = x => `<circle cx="${x + 54}" cy="88" r="12" fill="#d9443a"/>` + [0, 45, 90, 135, 180, 225, 270, 315].map(a => { const r1 = 16, r2 = 30, ar = a * Math.PI / 180; return `<path d="M${(x + 54 + r1 * Math.cos(ar)).toFixed(1)} ${(88 + r1 * Math.sin(ar)).toFixed(1)} L${(x + 54 + r2 * Math.cos(ar)).toFixed(1)} ${(88 + r2 * Math.sin(ar)).toFixed(1)}" stroke="#d9443a" stroke-width="3" stroke-linecap="round"/>`; }).join('');
    const sew = x => `<path d="M${x + 22} 88 H${x + 86}" stroke="#d9665a" stroke-width="4"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${x + 28 + i * 12} 76 L${x + 34 + i * 12} 100" stroke="#2b2b2b" stroke-width="2.2"/>`).join('');
    return svg(360, 236, `${title('سه پسوند با rrh: مراقب املا باش')}
      ${box(8, drip(8), '-rrhea', 'جریان، ترشح', 'rhinorrhea')}${box(126, burst(126), '-rrhage', 'فوران خون', 'hemorrhage')}${box(244, sew(244), '-rrhaphy', 'بخیه', 'myorrhaphy')}
      ${f(180, 226, 'هر سه با دو r و یک h نوشته می‌شوند: diarrhea، hemorrhage', { size: 9, fill: INK, w: 700 })}`, 'پسوندهای rrh', shadow(sh));
  };

  A['small-vessels'] = () => {
    const m = nid();
    return svg(360, 220, `${title('پسوندهای کوچک‌کننده: ‎-ole‎ و ‎-ule‎')}
      ${tube('M20 80 H96', C.art, C.artLine, 18)}${tube('M96 80 C120 80 130 62 156 62', C.art, C.artLine, 9)}${tube('M96 80 C120 80 130 98 156 98', C.art, C.artLine, 9)}
      <path d="M156 62 C176 62 184 74 204 74 M156 98 C176 98 184 86 204 86 M156 62 C176 70 186 90 204 86 M156 98 C176 90 186 70 204 74" stroke="#a46aa8" stroke-width="2.4" fill="none"/>
      ${tube('M204 74 C230 74 236 62 262 62', C.vein, C.veinLine, 9)}${tube('M204 86 C230 86 236 98 262 98', C.vein, C.veinLine, 9)}${tube('M262 62 C290 62 290 80 340 80', C.vein, C.veinLine, 20)}${tube('M262 98 C290 98 290 80 340 80', C.vein, C.veinLine, 20)}
      ${lab(56, 116, 'artery', 'سرخرگ', { size: 10 })}${lab(130, 136, 'arteriole', 'سرخرگ کوچک', { size: 10, fill: '#b8332b' })}${lab(180, 40, 'capillary', 'مویرگ', { size: 9.5 })}${lab(236, 136, 'venule', 'سیاهرگ کوچک', { size: 10, fill: '#24479a' })}${lab(314, 120, 'vein', 'سیاهرگ', { size: 10 })}
      ${arrow(m, 30, 176, 330, 176, LINE, 2)}${f(180, 200, 'خون از سرخرگ به سرخرگ کوچک، مویرگ، سیاهرگ کوچک و سیاهرگ می‌رود', { size: 9, fill: INK, w: 700 })}`, 'رگ‌های کوچک', marker(m));
  };

  A['adjective-suffixes'] = () => {
    const rows = [['noun', 'adjective', 'suffix'], ['heart', 'cardiac', '-ac'], ['nerve', 'neural', '-al'], ['pelvis', 'pelvic', '-ic'], ['lung', 'pulmonary', '-ary'], ['esophagus', 'esophageal', '-eal'], ['skin', 'cutaneous', '-ous'], ['vessel', 'vascular', '-ar']];
    return svg(360, 262, `${title('پسوندهای صفت‌ساز: همه یعنی «مربوط به»')}
      ${table(34, 32, [98, 110, 84], 24, rows, { colFill: [MUTED, '#1f6fa8', '#8e4a8a'] })}
      ${f(180, 240, 'اسم + پسوند صفت ← صفت؛ مثل neuron که صفتش neuronal است', { size: 9, fill: INK, w: 700 })}`, 'پسوندهای صفت‌ساز');
  };

  /* ================= pf: پیشوندها ================= */
  A['number-prefixes'] = () => {
    const sh = nid();
    const dots = (x, y, n) => Array.from({ length: n }, (_, i) => `<circle cx="${x + (i - (n - 1) / 2) * 13}" cy="${y}" r="5" fill="${C.preLine}"/>`).join('');
    const box = (i, art, p, fa, ex) => { const x = 8 + (i % 4) * 87, y = 32 + Math.floor(i / 4) * 106; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="98" rx="12" fill="#fff8df"/></g>${art(x + 41, y + 22)}${t(x + 41, y + 50, p, { size: p.length > 12 ? 9.5 : 11, w: 900, fill: C.preDark })}${f(x + 41, y + 66, fa, { size: 9.2, fill: INK, w: 700 })}${t(x + 41, y + 86, ex, { size: 8.4, w: 700, fill: MUTED })}`; };
    return svg(360, 248, `${title('پیشوندهای عدد')}
      ${box(0, (x, y) => dots(x, y, 1), 'uni-, mono-', 'یک', 'unilateral')}${box(1, (x, y) => dots(x, y, 2), 'bi-, di-', 'دو', 'bilateral')}
      ${box(2, (x, y) => dots(x, y, 3), 'tri-', 'سه', 'tricuspid')}${box(3, (x, y) => dots(x, y, 4), 'quadri-, tetra-', 'چهار', 'quadriplegia')}
      ${box(4, (x, y) => `<path d="M${x - 14} ${y + 6} A14 14 0 0 1 ${x + 14} ${y + 6} Z" fill="${C.preLine}"/><path d="M${x - 14} ${y + 6} A14 14 0 0 0 ${x + 14} ${y + 6}" fill="none" stroke="${C.preLine}" stroke-dasharray="3 2"/>`, 'hemi-, semi-', 'نیم', 'hemiplegia')}
      ${box(5, (x, y) => dots(x, y - 4, 5) + dots(x, y + 8, 4), 'multi-, poly-', 'چند، زیاد', 'polyuria')}
      ${box(6, (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="${C.preLine}"/>${t(x, y + 4, 'ALL', { size: 8, w: 900, fill: '#fff' })}`, 'pan-', 'همه', 'pancytopenia')}
      ${box(7, (x, y) => `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${C.preLine}" stroke-width="3"/>${t(x, y + 4, '0', { size: 12, w: 900, fill: C.preDark })}`, 'nulli-', 'هیچ', 'nullipara')}`, 'پیشوندهای عدد', shadow(sh));
  };

  A['direction-terms'] = () => {
    const m = nid(), m2 = nid();
    return svg(360, 300, `${title('جهت‌ها روی بدن در وضعیت آناتومیک')}
      ${mannequin(150, 30, 1.0, { op: 0.75 })}
      ${arrow(m, 150, 52, 150, 34, C.indigo, 2.4)}${arrow(m, 150, 262, 150, 280, C.indigo, 2.4)}
      ${lab(206, 38, 'superior', 'بالایی، به سوی سر', { size: 9.5, fill: C.indigo })}${lab(206, 282, 'inferior', 'پایینی، به سوی پا', { size: 9.5, fill: C.indigo })}
      <path d="M150 60 V256" stroke="#9aa3c8" stroke-dasharray="4 3"/>${f(156, 236, 'خط میانی', { size: 8, anchor: 'start' })}
      ${arrow(m2, 132, 120, 108, 120, C.red, 2.2)}${arrow(m2, 132, 120, 146, 120, C.red, 2.2)}
      ${lab(56, 106, 'lateral', 'به سوی پهلو', { size: 9.5, fill: C.red })}${lab(56, 136, 'medial', 'به سوی خط میانی', { size: 9.5, fill: C.red })}
      <circle cx="194" cy="94" r="5" fill="${C.teal}"/><circle cx="203" cy="152" r="5" fill="${C.teal}"/>
      ${pin(194, 94, 262, 92, C.teal)}${lab(300, 88, 'proximal', 'نزدیک به تنه', { size: 9.5, fill: C.teal })}
      ${pin(203, 152, 262, 160, C.teal)}${lab(300, 156, 'distal', 'دور از تنه', { size: 9.5, fill: C.teal })}
      <rect x="250" y="194" width="100" height="62" rx="12" fill="#f3f4fd"/>
      ${lab(300, 214, 'anterior ↔ posterior', 'جلو ↔ پشت', { size: 8.6 })}${f(300, 248, 'یعنی ventral و dorsal', { size: 8 })}`, 'جهت‌ها', marker(m, C.indigo) + marker(m2, C.red));
  };

  A['position-prefixes'] = () => {
    const m = nid();
    const org = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c || '#f2b3a6'}" stroke="#c26a5c" stroke-width="1.6"/>`;
    return svg(360, 290, `${title('پیشوندهای جا: نسبت به یک اندام')}
      <circle cx="140" cy="148" r="64" fill="none" stroke="${C.preLine}" stroke-width="3" stroke-dasharray="6 4"/>${org(140, 148, 44)}
      <circle cx="140" cy="170" r="6" fill="${C.preLine}"/>
      ${lab(140, 140, 'intra-, endo-', 'درون', { size: 8.6, fill: C.preDark })}
      ${pin(140, 104, 140, 54)}${lab(140, 40, 'epi-, supra-', 'روی، بالای', { size: 9.5, fill: C.preDark })}
      ${pin(140, 192, 140, 236)}${lab(140, 252, 'hypo-, sub-, infra-', 'زیر', { size: 9.5, fill: C.preDark })}
      ${pin(194, 116, 252, 74)}${lab(296, 62, 'peri-, circum-', 'پیرامون', { size: 9.5, fill: C.preDark })}
      ${pin(208, 160, 252, 160)}${lab(296, 156, 'extra-, exo-, ecto-', 'بیرون', { size: 9, fill: C.preDark })}
      ${org(290, 226, 12)}${org(326, 226, 12)}<path d="M308 214 V238" stroke="${C.preLine}" stroke-width="3"/>${lab(308, 258, 'inter-', 'میان', { size: 9.5, fill: C.preDark })}
      ${arrow(m, 22, 196, 96, 150, C.indigo, 2)}${lab(40, 222, 'trans-, dia-', 'از میان', { size: 9, fill: C.indigo })}
      ${lab(40, 62, 'retro-', 'پشت', { size: 9.5, fill: C.preDark })}${lab(40, 106, 'para-', 'کنار', { size: 9.5, fill: C.preDark })}`, 'پیشوندهای جا', marker(m, C.indigo));
  };

  A['injection-routes'] = () => {
    const sh = nid();
    const needle = (x, y, a, c) => `<g transform="translate(${x} ${y}) rotate(${a})"><rect x="-52" y="-4" width="34" height="8" rx="2" fill="#dfe8ee" stroke="#8aa0ad"/><rect x="-62" y="-2" width="10" height="4" fill="#8aa0ad"/><path d="M-18 0 H0" stroke="${c}" stroke-width="2"/></g>`;
    return svg(360, 268, `${title('راه‌های تزریق: پیشوند و ریشه جای سوزن را می‌گویند')}
      <g filter="url(#${sh})"><rect x="20" y="96" width="320" height="22" fill="#f6c9ae" stroke="#d39a7c"/><rect x="20" y="118" width="320" height="36" fill="#f6dc8f" stroke="#c9a64a"/><rect x="20" y="154" width="320" height="60" fill="#d9665a" stroke="#a8433a"/></g>
      ${tube('M206 136 H278', C.vein, C.veinLine, 10)}
      ${needle(66, 104, 12, '#555')}${needle(130, 128, 45, '#555')}${needle(196, 176, 90, '#555')}${needle(246, 136, 22, '#555')}
      ${lab(56, 56, 'intradermal (ID)', 'درون پوست', { size: 9 })}${lab(132, 72, 'subcutaneous', 'زیرجلدی', { size: 9 })}${lab(210, 56, 'intramuscular (IM)', 'درون عضله', { size: 9 })}${lab(290, 72, 'intravenous (IV)', 'درون سیاهرگ', { size: 9 })}
      ${f(330, 112, 'پوست', { size: 8.4, anchor: 'end', fill: INK })}${f(330, 151, 'چربی زیرجلد', { size: 8.4, anchor: 'end', fill: INK })}${f(330, 200, 'عضله', { size: 8.4, anchor: 'end', fill: '#fff' })}
      ${f(180, 240, 'intra- یعنی درون و sub- یعنی زیر؛ ven/o سیاهرگ است', { size: 9.2, fill: INK, w: 700 })}
      ${f(180, 258, 'parenteral یعنی هر راهی جز دستگاه گوارش', { size: 8.6 })}`, 'راه‌های تزریق', shadow(sh));
  };

  A['negation-prefixes'] = () => {
    const sh = nid();
    const c = (x, y, p, fa, ex, exfa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="62" rx="12" fill="#fff8df"/></g><circle cx="${x + 22}" cy="${y + 31}" r="12" fill="none" stroke="${C.red}" stroke-width="2.6"/><path d="M${x + 14} ${y + 39} L${x + 30} ${y + 23}" stroke="${C.red}" stroke-width="2.6"/>${t(x + 98, y + 22, p, { size: 11.5, w: 900, fill: C.preDark })}${f(x + 98, y + 37, fa, { size: 9, fill: INK, w: 700 })}${t(x + 98, y + 53, exfa ? ex + ' • ' + exfa : ex, { size: 8.4, w: 700, fill: MUTED })}`;
    return svg(360, 252, `${title('پیشوندهای نفی و ضد')}
      ${c(8, 34, 'a-, an-', 'بدون، فاقد', 'afebrile', 'anoxia')}${c(186, 34, 'anti-', 'ضد', 'antibiotic', 'antacid')}
      ${c(8, 106, 'contra-', 'ضد، مخالف', 'contraindication', '')}${c(186, 106, 'dis-', 'جدا، دور', 'dislocation', '')}
      ${c(8, 178, 'de-', 'برداشتن، پایین', 'dehydration', '')}${c(186, 178, 'mal-', 'بد', 'malnutrition', '')}`, 'پیشوندهای نفی', shadow(sh));
  };

  A['opposite-prefixes'] = () => {
    const rows = [['prefix', '↔', 'prefix'], ['brady-  کند', '↔', 'tachy-  تند'], ['hypo-  کم', '↔', 'hyper-  زیاد'], ['ab-  دور از', '↔', 'ad-  به سوی'], ['endo-  درون', '↔', 'exo-  بیرون'], ['pre-  پیش', '↔', 'post-  پس'], ['micro-  کوچک', '↔', 'macro-  بزرگ'], ['eu-  خوب', '↔', 'dys-  بد']];
    let b = '', y = 34;
    rows.forEach((r, i) => {
      b += `<rect x="24" y="${y}" width="312" height="26" fill="${i === 0 ? '#fff3c4' : i % 2 ? '#fff' : '#fffbea'}" stroke="#f0e2a8"/>`;
      if (i === 0) b += f(180, y + 17, 'جفت‌های متضاد (antonym)', { size: 9.5, fill: INK, w: 900 });
      else {
        const [a, fa1] = r[0].split('  '), [c2, fa2] = r[2].split('  ');
        b += t(56, y + 18, a, { size: 11, w: 900, fill: C.preDark, anchor: 'start' }) + f(150, y + 18, fa1, { size: 9, anchor: 'end', fill: INK }) + t(180, y + 18, '↔', { size: 12, fill: MUTED });
        b += t(214, y + 18, c2, { size: 11, w: 900, fill: C.preDark, anchor: 'start' }) + f(316, y + 18, fa2, { size: 9, anchor: 'end', fill: INK });
      }
      y += 26;
    });
    return svg(360, 274, `${title('پیشوندهای متضاد')}${b}${f(180, 264, 'bradycardia کندی ضربان و tachycardia تندی ضربان قلب است', { size: 8.8, fill: INK, w: 700 })}`, 'پیشوندهای متضاد');
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
    return svg(360, 254, `${title('وضعیت‌های بیمار روی تخت')}
      ${panel(8, 32, sup(8, 32), 'supine', 'طاق‌باز')}${panel(126, 32, pro(126, 32), 'prone', 'دمر')}${panel(244, 32, fow(244, 32), 'Fowler', 'نیمه‌نشسته')}
      ${panel(8, 144, tre(8, 144), 'Trendelenburg', 'سر پایین‌تر از پا')}${panel(126, 144, sim(126, 144), 'Sims', 'پهلوی چپ، زانو جمع')}${panel(244, 144, lit(244, 144), 'lithotomy', 'طاق‌باز، ران‌ها بالا')}`, 'وضعیت‌های بیمار', shadow(sh));
  };

  A['time-prefixes'] = () => {
    const m = nid();
    const dot = (x, c) => `<circle cx="${x}" cy="0" r="9" fill="${c}"/>`;
    const tl = (y, a, b, c, fa) => `<g transform="translate(0 ${y})"><path d="M30 0 H330" stroke="#d9dbe8" stroke-width="6" stroke-linecap="round"/>${dot(70, C.pre)}${dot(180, C.red)}${dot(290, C.teal)}
      ${t(70, -16, a[0], { size: 10.5, w: 900, fill: C.preDark })}${f(70, 26, a[1], { size: 9, fill: INK })}${t(180, -16, b[0], { size: 10.5, w: 900, fill: C.red })}${f(180, 26, b[1], { size: 9, fill: INK })}${t(290, -16, c[0], { size: 10.5, w: 900, fill: '#17806f' })}${f(290, 26, c[1], { size: 9, fill: INK })}</g>`;
    return svg(360, 252, `${title('پیشوندهای زمان: پیش، حین، پس')}
      ${tl(72, ['preoperative', 'پیش از عمل'], ['operation', 'عمل جراحی'], ['postoperative', 'پس از عمل'])}
      ${tl(150, ['prenatal', 'پیش از تولد'], ['birth', 'تولد'], ['neonate', 'نوزاد (neo- = نو)'])}
      ${arrow(m, 40, 196, 320, 196, LINE, 2)}${f(180, 216, 'زمان', { size: 9 })}
      ${f(180, 240, 'pre- و ante- یعنی پیش؛ post- یعنی پس؛ primi- یعنی نخستین', { size: 9, fill: INK, w: 700 })}`, 'پیشوندهای زمان', marker(m));
  };

  /* ================= rl: قواعد و تله‌ها ================= */
  A['plural-rules'] = () => {
    const rows = [['singular', 'plural', 'example'], ['-a', '-ae', 'vertebra → vertebrae'], ['-um', '-a', 'bacterium → bacteria'], ['-us', '-i', 'bronchus → bronchi'], ['-is', '-es', 'diagnosis → diagnoses'], ['-ma', '-mata', 'carcinoma → carcinomata'],
      ['-ix, -ex', '-ices', 'appendix → appendices'], ['-ax', '-aces', 'thorax → thoraces'], ['-nx', '-nges', 'phalanx → phalanges'], ['-on', '-a', 'ganglion → ganglia'], ['-en', '-ina', 'lumen → lumina'], ['-y', '-ies', 'artery → arteries']];
    return svg(360, 352, `${title('قاعده‌های جمع واژه‌های لاتین و یونانی')}
      ${table(14, 30, [70, 70, 192], 24, rows, { colFill: ['#9a5418', '#17806f', INK] })}
      ${f(180, 334, 'بیشتر واژه‌ها با s یا es انگلیسی هم جمع بسته می‌شوند: viruses', { size: 9, fill: INK, w: 700 })}`, 'قاعده‌های جمع');
  };

  A['plural-exceptions'] = () => {
    const sh = nid();
    const c = (x, y, a, b, fa) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="44" rx="10" fill="#f8f9fc"/></g>${t(x + 83, y + 20, `${a} → ${b}`, { size: 10.5, w: 900, fill: '#9a5418' })}${f(x + 83, y + 36, fa, { size: 8.6 })}`;
    const say = (x, end, s, fa) => `<rect x="${x}" y="206" width="104" height="48" rx="10" fill="#eef0fb"/>${t(x + 52, 226, end + '  =  ' + s, { size: 10.5, w: 900, fill: C.indigo })}${f(x + 52, 244, fa, { size: 8.4 })}`;
    return svg(360, 266, `${title('استثناها و تلفظ پایان جمع')}
      ${c(8, 34, 'meatus', 'meatus', 'بدون تغییر')}${c(186, 34, 'femur', 'femora', 'استثنای ‎-ur‎')}
      ${c(8, 86, 'corpus', 'corpora', 'استثنای ‎-us‎')}${c(186, 86, 'viscus', 'viscera', 'استثنای ‎-us‎')}
      ${c(8, 138, 'iris', 'irides', 'استثنای ‎-is‎')}${c(186, 138, 'pons', 'pontes', 'استثنای ‎-s‎')}
      ${f(180, 198, 'تلفظ پایان واژه‌های جمع:', { size: 9, fill: INK, w: 800 })}
      ${say(14, '-i', 'eye', 'glomeruli')}${say(128, '-ae', 'ay', 'vertebrae')}${say(242, '-es', 'eez', 'testes')}`, 'استثناها', shadow(sh));
  };

  A['ileum-ilium'] = () => {
    const sh = nid();
    const coil = `<path d="M60 78 q14 -14 28 0 t28 0 t28 0 M60 100 q14 -14 28 0 t28 0 t28 0 M60 122 q14 -14 28 0 t28 0 t28 0" stroke="#e8a39b" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M60 78 q14 -14 28 0 t28 0 t28 0 M60 100 q14 -14 28 0 t28 0 t28 0 M60 122 q14 -14 28 0 t28 0 t28 0" stroke="#f7c9bd" stroke-width="8" fill="none" stroke-linecap="round"/>`;
    const bone = `<path d="M222 70 C240 46 300 48 318 74 C330 92 314 112 296 120 L282 150 C278 164 262 166 256 152 L244 120 C226 110 210 92 222 70Z" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.8"/><circle cx="270" cy="150" r="9" fill="#fff" stroke="${C.boneLine}"/>`;
    return svg(360, 262, `${title('هم‌آوا: ileum و ilium یک تلفظ، دو عضو')}
      <g filter="url(#${sh})">${coil}${bone}</g>
      ${lab(102, 160, 'ileum', 'بخش پایانی روده باریک', { size: 12 })}${lab(270, 180, 'ilium', 'بال استخوان لگن', { size: 12 })}
      <rect x="40" y="212" width="280" height="40" rx="10" fill="#fff3c4"/>
      ${f(180, 229, 'ileum با e مثل enter/o (روده)', { size: 9.4, fill: INK, w: 800 })}${f(180, 245, 'ilium با i مثل hip (لگن)', { size: 9.4, fill: INK, w: 800 })}`, 'ileum و ilium', shadow(sh));
  };

  A['peri-pero'] = () => {
    return svg(360, 300, `${title('سه واژه شبیه: peritoneal، perineal، peroneal')}
      ${mannequin(180, 26, 1.02, { op: 0.7 })}
      <path d="M152 112 C150 150 154 176 166 186 L194 186 C206 176 210 150 208 112Z" fill="#f7c9bd" stroke="#c26a5c" stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"/>
      <circle cx="180" cy="196" r="6" fill="#8e4a8a"/>
      <path d="M210 232 C214 250 214 266 210 282" stroke="#3f8a05" stroke-width="5" stroke-linecap="round"/>
      ${pin(196, 140, 272, 112)}${lab(306, 104, 'peritoneal', 'صفاقی (پرده شکم)', { size: 10 })}
      ${pin(180, 196, 84, 184)}${lab(50, 176, 'perineal', 'عجانی (میان دو پا)', { size: 10 })}
      ${pin(210, 258, 272, 248)}${lab(306, 242, 'peroneal', 'کناره ساق پا', { size: 10 })}
      ${f(180, 294, 'perINeal یعنی IN میان دو پا؛ perONeal یعنی ON روی ساق', { size: 9, fill: INK, w: 800 })}`, 'سه واژه شبیه');
  };

  A['soundalikes'] = () => {
    const sh = nid();
    const pair = (y, a, fa1, b, fa2) => `<g filter="url(#${sh})"><rect x="10" y="${y}" width="164" height="42" rx="10" fill="#f8f9fc"/><rect x="186" y="${y}" width="164" height="42" rx="10" fill="#f8f9fc"/></g>${t(92, y + 18, a, { size: 10.5, w: 900, fill: '#b8332b' })}${f(92, y + 34, fa1, { size: 8.6, fill: INK })}${t(268, y + 18, b, { size: 10.5, w: 900, fill: '#1f6fa8' })}${f(268, y + 34, fa2, { size: 8.6, fill: INK })}${t(180, y + 25, '≠', { size: 13, w: 900, fill: MUTED })}`;
    return svg(360, 292, `${title('تله‌های هم‌آوا: یک حرف، یک معنی دیگر')}
      ${pair(32, 'dysphagia', 'اختلال بلع', 'dysphasia', 'اختلال گفتار')}${pair(82, 'palpation', 'لمس با دست', 'palpitation', 'تپش قلب')}
      ${pair(132, 'mucus', 'اسم: مخاط', 'mucous', 'صفت: مخاطی')}${pair(182, 'prostatic', 'مربوط به پروستات', 'prosthetic', 'مصنوعی، پروتز')}
      ${pair(232, 'pruritus', 'خارش', 'pleuritis', 'التهاب پرده جنب')}`, 'هم‌آواها', shadow(sh));
  };

  A['word-kinds'] = () => {
    const sh = nid();
    const c = (x, y, h, en, fa, ex, note) => `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="104" rx="14" fill="#f3f4fd"/></g>${t(x + 83, y + 32, h, { size: 15, w: 900, fill: C.indigo, sym: true })}${lab(x + 83, y + 56, en, fa, { size: 10 })}${t(x + 83, y + 86, ex, { size: 8.6, w: 700, fill: MUTED })}${note ? f(x + 83, y + 99, note, { size: 7.8 }) : ''}`;
    return svg(360, 258, `${title('اختصار، سرواژه، نام‌واژه و نماد')}
      ${c(8, 34, 'CBC', 'abbreviation', 'اختصار', 'حرف به حرف خوانده می‌شود', '')}${c(186, 34, 'AIDS', 'acronym', 'سرواژه', 'مثل یک واژه خوانده می‌شود', '')}
      ${c(8, 146, 'Parkinson', 'eponym', 'نام‌واژه', 'نام کاشف یا مکان', '')}${c(186, 146, '↑  ↓  ♀  ♂', 'symbol', 'نماد', 'افزایش، کاهش، زن، مرد', '')}`, 'انواع کوته‌نوشت', shadow(sh));
  };

  A['eponym-cards'] = () => {
    const sh = nid();
    const c = (i, who, yr, dz, fa) => { const x = 8 + (i % 2) * 178, y = 32 + Math.floor(i / 2) * 70; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="166" height="62" rx="12" fill="#fff8f0"/></g>${t(x + 83, y + 20, dz, { size: 10.5, w: 900, fill: '#9a5418' })}${t(x + 83, y + 36, who + '  ' + yr, { size: 8.6, w: 700, fill: MUTED })}${f(x + 83, y + 52, fa, { size: 9, fill: INK, w: 700 })}`; };
    return svg(360, 254, `${title('نام‌واژه‌ها: بیماری‌هایی که نام آدم یا جا دارند')}
      ${c(0, 'Alois Alzheimer', '1864–1915', 'Alzheimer disease', 'زوال پیش‌رونده مغز')}${c(1, 'James Parkinson', '1755–1824', 'Parkinson disease', 'لرزش و سفتی عضله')}
      ${c(2, 'John Haydon Down', '1828–1896', 'Down syndrome', 'تریزومی ۲۱')}${c(3, 'Virginia Apgar', '1909–1974', 'Apgar score', 'نمره نوزاد در دقیقه ۱ و ۵')}
      ${c(4, 'Old Lyme, Connecticut', '1975', 'Lyme disease', 'نام یک شهر؛ با کنه منتقل می‌شود')}${c(5, 'Harvey Cushing', '1869–1939', 'Cushing syndrome', 'پرکاری قشر غده فوق‌کلیه')}`, 'نام‌واژه‌ها', shadow(sh));
  };

  A['word-breaker'] = () => {
    const sh = nid();
    const w = word(10, 52, 40, [['root', 'ot', 42], ['cv', 'o', 30], ['root', 'rhin', 54], ['cv', 'o', 30], ['root', 'laryng', 70], ['cv', 'o', 30], ['suf', '-logist', 72]], { size: 11.5 });
    const X = w.xs;
    return svg(360, 214, `${title('شکستن یک واژه بلند: otorhinolaryngologist')}
      <g filter="url(#${sh})">${w.svg}</g>
      ${lab(X[0], 118, 'ear', 'گوش', { size: 9.5, fill: C.rootDark })}${lab(X[2], 118, 'nose', 'بینی', { size: 9.5, fill: C.rootDark })}${lab(X[4], 118, 'larynx', 'حنجره', { size: 9.5, fill: C.rootDark })}${lab(X[6], 118, 'specialist', 'متخصص', { size: 9.5, fill: C.sufDark })}
      <rect x="28" y="152" width="304" height="46" rx="12" fill="#eef0fb"/>
      ${f(180, 171, 'متخصص گوش و حلق و بینی (ENT)', { size: 10.5, fill: INK, w: 900 })}${f(180, 189, 'واژه بلند را از آخر بخوان و با «/» تکه‌تکه کن', { size: 8.8 })}`, 'شکستن واژه', shadow(sh));
  };

  A['spelling-traps'] = () => {
    const sh = nid();
    const r = (y, pre, hl, post, fa) => `<g filter="url(#${sh})"><rect x="16" y="${y}" width="328" height="32" rx="9" fill="#f8f9fc"/></g><text x="34" y="${y + 21}" font-size="13" font-weight="800" fill="${INK}" direction="ltr" font-family="Nunito, system-ui, sans-serif">${pre}<tspan fill="${C.red}" font-weight="900">${hl}</tspan>${post}</text>${f(332, y + 21, fa, { size: 9, fill: INK, w: 700, anchor: 'end' })}`;
    return svg(360, 258, `${title('املاهایی که بیشتر اشتباه نوشته می‌شوند')}
      ${r(32, 'tonsi', 'll', 'ectomy', 'دو l')}${r(68, 'hemo', 'rrh', 'age', 'دو r و یک h؛ فوران خون')}${r(104, 'oph', 'th', 'almology', 'ph و th هر دو')}
      ${r(140, 'diar', 'rh', 'ea', 'دو r و یک h؛ جریان از میان')}${r(176, 'pr', 'u', 'ritus', 'با u، نه pruritis')}${r(212, 'h', 'u', 'merus', 'استخوان؛ humorous خنده‌دار')}`, 'املای دشوار', shadow(sh));
  };

  /* ================= hs: در بیمارستان ================= */
  A['record-parts'] = () => {
    const sh = nid();
    const P = [['📝', 'history and physical', 'شرح حال و معاینه'], ['📋', "physician's orders", 'دستورهای پزشک'], ['🩺', "nurse's notes", 'یادداشت پرستار'], ['📈', 'progress notes', 'سیر بیماری روزانه'],
      ['🤝', 'consultation report', 'گزارش مشاوره'], ['🔪', 'operative report', 'گزارش عمل'], ['🔬', 'pathology report', 'گزارش آسیب‌شناسی'], ['🏠', 'discharge summary', 'خلاصه ترخیص']];
    let b = '';
    P.forEach((p, i) => { const x = 8 + (i % 2) * 176, y = 34 + Math.floor(i / 2) * 52; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="168" height="44" rx="10" fill="#f8f9fc"/></g>${t(x + 20, y + 28, p[0], { size: 15 })}${t(x + 98, y + 19, p[1], { size: 9.4, w: 900, fill: '#17806f' })}${f(x + 98, y + 35, p[2], { size: 9, fill: INK, w: 700 })}`; });
    return svg(360, 274, `${title('بخش‌های پرونده پزشکی (chart)')}${b}
      ${f(180, 264, 'پرونده سند قانونی است؛ هر برگه نام، سن، پزشک و تاریخ پذیرش بیمار را دارد', { size: 8.8, fill: INK, w: 700 })}`, 'پرونده پزشکی', shadow(sh));
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
    return svg(360, 262, `${title('خواندن یک نسخه')}${pad}
      ${ex(78, 'نشان نسخه؛ Rx یعنی «بگیر»')}${ex(100, 'نام دارو و مقدار هر قرص')}${ex(136, 'دستور روی برچسب (Sig): یک قرص')}${f(350, 152, 'خوراکی (po)، روزی سه بار (tid)', { size: 9.2, fill: INK, w: 700, anchor: 'end' })}
      ${ex(168, '۳۰ عدد تحویل بده (Disp)')}${ex(198, 'دو بار می‌شود نسخه را تکرار کرد')}${ex(224, 'امضای پزشک؛ نسخه بی‌امضا نداریم')}
      ${f(180, 254, 'نمونه ؛ Tagamet اسید معده را کم می‌کند', { size: 8.6 })}`, 'نسخه', shadow(sh));
  };

  A['dose-clock'] = () => {
    const x = h => 40 + (h - 6) / 18 * 290;
    const row = (y, ab, fa, hs) => `${t(22, y + 4, ab, { size: 11, w: 900, fill: C.indigo })}<path d="M40 ${y} H330" stroke="#e1e4ef" stroke-width="10" stroke-linecap="round"/>${hs.map(h => `<circle cx="${x(h).toFixed(1)}" cy="${y}" r="6.5" fill="${C.teal}"/>`).join('')}${f(340, y + 4, fa, { size: 8.6, anchor: 'end', fill: INK })}`;
    let tick = '';
    [6, 9, 12, 15, 18, 21, 24].forEach(h => { tick += `<path d="M${x(h)} 40 V48" stroke="${LINE}"/>` + t(x(h), 37, (h % 24 || 24) + ':00', { size: 8, w: 700, fill: MUTED }); });
    return svg(360, 262, `${title('اختصارهای تعداد دفعات مصرف')}${tick}
      ${row(66, 'daily', '', [9])}${row(94, 'bid', '', [9, 21])}${row(122, 'tid', '', [8, 14, 20])}${row(150, 'qid', '', [8, 12, 16, 20])}${row(178, 'q6h', '', [6, 12, 18, 24])}${row(206, 'hs', '', [22])}
      ${f(180, 236, 'qd و qod را ننویس؛ daily و every other day بنویس', { size: 9.2, fill: C.red, w: 800 })}
      ${f(180, 254, 'ac یعنی پیش از غذا و pc پس از غذا؛ prn در صورت نیاز', { size: 8.8, fill: INK })}`, 'دفعات مصرف');
  };

  A['route-abbr'] = () => {
    const sh = nid();
    const c = (i, ic, ab, en, fa) => { const x = 8 + (i % 4) * 87, y = 34 + Math.floor(i / 4) * 100; return `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="82" height="92" rx="12" fill="#e9f7f4"/></g>${t(x + 41, y + 26, ic, { size: 18 })}${t(x + 41, y + 48, ab, { size: 12, w: 900, fill: '#17806f', sym: true })}${t(x + 41, y + 64, en, { size: 7.8, w: 700, fill: MUTED })}${f(x + 41, y + 80, fa, { size: 8.6, fill: INK, w: 700 })}`; };
    return svg(360, 246, `${title('اختصارهای راه مصرف دارو')}
      ${c(0, '👄', 'po', 'per os', 'از راه دهان')}${c(1, '👅', 'SL', 'sublingual', 'زیر زبان')}${c(2, '💉', 'IV', 'intravenous', 'درون سیاهرگ')}${c(3, '💪', 'IM', 'intramuscular', 'درون عضله')}
      ${c(4, '🩹', 'subcut', 'subcutaneous', 'زیرجلدی')}${c(5, '💧', 'gtt', 'drops', 'قطره')}${c(6, '👁️', 'OD / OS', 'right / left eye', 'چشم راست / چپ')}${c(7, '🚫', 'NPO', 'nothing by mouth', 'ناشتا')}`, 'راه‌های مصرف', shadow(sh));
  };

  A['do-not-use'] = () => {
    const rows = [['do not write', 'write instead', 'خطر'], ['qd, q.d.', 'daily', 'با qid اشتباه می‌شود'], ['qod', 'every other day', 'با qd و qid'], ['U, u', 'unit', 'صفر یا ۴ خوانده می‌شود'], ['IU', 'international unit', 'IV یا ۱۰'], ['1.0 mg', '1 mg', 'ده برابر دوز'], ['.5 mg', '0.5 mg', 'ده برابر دوز'], ['MS, MSO4', 'morphine sulfate', 'با منیزیم سولفات']];
    return svg(360, 262, `${title('اختصارهای ممنوع در نسخه‌نویسی')}
      ${table(12, 32, [86, 116, 134], 25, rows, { colFill: [C.red, '#17806f', INK], size: 9.4, sym: [true, false, false] })}
      ${f(180, 244, 'هرگز اختصار من‌درآوردی ننویس؛ اگر شک داری، کامل بنویس', { size: 9, fill: INK, w: 800 })}`, 'اختصارهای ممنوع');
  };

  A['drug-names'] = () => {
    const sh = nid();
    const lvl = (y, w, c, en, fa, ex) => `<g filter="url(#${sh})"><rect x="${180 - w / 2}" y="${y}" width="${w}" height="50" rx="12" fill="${c}"/></g>${t(180, y + 19, en, { size: 11, w: 900 })}${f(180, y + 33, fa, { size: 9, fill: INK, w: 700 })}${t(180, y + 45, ex, { size: 8.2, w: 700, fill: MUTED })}`;
    return svg(360, 236, `${title('سه نام یک دارو')}
      ${lvl(34, 330, '#eef0fb', 'chemical name', 'نام شیمیایی: فرمول بلند', '2-p-isobutylphenyl propionic acid')}
      ${lvl(92, 230, '#e9f7f4', 'generic (nonproprietary) name', 'نام ژنریک: فقط یکی', 'ibuprofen')}
      ${lvl(150, 300, '#fff3e0', 'brand (proprietary) name', 'نام تجاری: هر شرکت یکی', 'Advil®   Motrin®   Nuprin®')}
      ${f(180, 224, 'OTC یعنی بدون نسخه؛ نام ژنریک معمولاً ارزان‌تر است', { size: 9, fill: INK, w: 700 })}`, 'نام دارو', shadow(sh));
  };

  A['care-settings'] = () => {
    const sh = nid();
    const S = [['🏥', 'acute care hospital', 'بیمارستان عمومی'], ['🧠', 'specialty hospital', 'بیمارستان تخصصی'], ['🛏️', 'long-term care', 'آسایشگاه، مراقبت طولانی'], ['🚶', 'ambulatory care', 'سرپایی، بدون بستری'],
      ['🩺', "physician's office", 'مطب'], ['🏠', 'home health care', 'مراقبت در خانه'], ['🏋️', 'rehabilitation', 'توان‌بخشی'], ['🕊️', 'hospice', 'مراقبت پایان زندگی']];
    let b = '';
    S.forEach((s, i) => { const x = 8 + (i % 2) * 176, y = 34 + Math.floor(i / 2) * 52; b += `<g filter="url(#${sh})"><rect x="${x}" y="${y}" width="168" height="44" rx="10" fill="#f3f4fd"/></g>${t(x + 20, y + 28, s[0], { size: 15 })}${t(x + 98, y + 19, s[1], { size: 9.4, w: 900, fill: C.indigo })}${f(x + 98, y + 35, s[2], { size: 9, fill: INK, w: 700 })}`; });
    return svg(360, 252, `${title('محیط‌های ارائه خدمات سلامت')}${b}`, 'محیط‌های درمان', shadow(sh));
  };

  A['chart-note'] = () => {
    const sh = nid();
    const line = (y, parts) => { let x = 22, out = ''; parts.forEach(p => { const hl = p[1]; out += `<tspan${hl ? ` fill="${C.red}" font-weight="900"` : ''}>${p[0]}</tspan>`; }); return `<text x="${x}" y="${y}" font-size="11" font-weight="700" fill="${INK}" direction="ltr" font-family="Nunito, system-ui, sans-serif">${out}</text>`; };
    return svg(360, 268, `${title('یک یادداشت اورژانس با اختصارها')}
      <g filter="url(#${sh})"><rect x="10" y="32" width="340" height="132" rx="10" fill="${C.paper}" stroke="${C.paperLine}"/></g>
      ${line(56, [['68 '], ['y/o', 1], [' male '], ['c/o', 1], [' angina with '], ['SOB', 1], ['.']])}
      ${line(80, [['Productive cough 3 weeks; T 102.4; '], ['EKG', 1], [' normal.']])}
      ${line(104, [['Impression: '], ['R/O', 1], [' pneumonia.']])}
      ${line(128, [['Plan: '], ['CXR', 1], [' AP/Lat, '], ['CBC', 1], [', chem panel.']])}
      ${line(152, [['Hx: '], ['HTN', 1], ['; '], ['NKDA', 1], ['.']])}
      ${table(10, 176, [70, 100, 70, 100], 22, [['y/o', 'ساله', 'c/o', 'شکایت از'], ['SOB', 'تنگی نفس', 'R/O', 'رد کردن احتمال'], ['CXR', 'عکس سینه', 'NKDA', 'حساسیت دارویی ندارد']], { size: 9, sym: [true, false, true, false], head: '#fff' })}`, 'یادداشت بالینی', shadow(sh));
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
    id: 'bs', sym: 'Ab', name: 'الفبای زبان پزشکی', short: 'الفبا', sub: 'زبان پزشکی از کجا آمده، چهار جزء هر واژه، واکه رابط، ترجمه واژه از پسوند و تلفظ درست',
    color: '#4B4FC4', dark: '#33369A', light: '#ECEEFD',
    levels: ['زبان پزشکی و ریشه تاریخی', 'چهار جزء واژه', 'ترجمه و تلفظ'],
    gens: EA.genIds('bs'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'bs1', title: 'چرا زبان پزشکی؟', icon: '💬', items: [
          L('یک زبان مشترک', `${fig('cartoon', [], 'وقتی زبان مشترک نیست')}${e('<b>medical terminology</b>')} زبان دقیق پزشکی است. به‌جای «دل‌درد یا شاید سنگ کلیه»، پزشک، پرستار و داروساز با یک واژه مشخص حرف می‌زنند و همدیگر را بی‌خطا می‌فهمند.`),
          L('واژه‌هایی که ساخته می‌شوند', `بیشتر واژه‌های پزشکی از چند قطعه یونانی و لاتین ساخته شده‌اند. اگر قطعه‌ها را بشناسی، هزاران واژه را بدون حفظ کردن معنی می‌کنی.${pearl('در منابع مرجع آمده است: یک غلط املایی یا یک اختصار بد در دوز دارو می‌تواند جان بیمار را به خطر بیندازد.')}${memo('زبان پزشکی مثل پازل است: قطعه‌ها کم‌اند، ولی واژه‌ها بی‌شمار.')}`),
          M('مهم‌ترین دلیل یادگیری ترمینولوژی پزشکی چیست؟', ['ارتباط دقیق و بی‌خطا میان کادر درمان', 'زیباتر شدن پرونده', 'پنهان کردن تشخیص از بیمار', 'کوتاه کردن نام داروها'], 'زبان مشترک خطا را کم می‌کند.', null, F('cartoon', [])),
          T('بیشتر واژه‌های پزشکی از قطعه‌های یونانی و لاتین ساخته شده‌اند.', true, 'برای همین با شناختن قطعه‌ها می‌شود واژه تازه را معنی کرد.'),
          M('اگر قطعه‌های واژه را بشناسی…', ['واژه‌های تازه را هم می‌توانی معنی کنی', 'فقط همان واژه را می‌فهمی', 'دیگر به واژه‌نامه نیاز نداری', 'تلفظ مهم نمی‌شود'], 'واژه‌سازی کلید فهم واژه‌های ناآشناست.'),
          B('زبان دقیق پزشکی را ___ می‌گویند.', ['medical terminology', 'medical record', 'pharmacology'], 'medical terminology.'),
          P('هر واژه را به معنی‌اش وصل کن', [['medical terminology', 'زبان پزشکی'], ['word building', 'واژه‌سازی'], ['etymology', 'ریشه‌شناسی واژه'], ['medical dictionary', 'فرهنگ لغت پزشکی']], 'واژه‌های پایه.'),
          T('یک غلط املایی در نام دارو هیچ خطری ندارد.', false, 'غلط املایی یا اختصار نادرست می‌تواند به خطای دارویی برسد.'),
          S('املای انگلیسی «ترمینولوژی» را بنویس', 'terminology', 'termin + ‎-ology‎.', 'termin…'),
          N('t2f:bs')
        ]
      },
      {
        id: 'bs2', title: 'یونانی و لاتین', icon: '🏛️', items: [
          L('دو زبان کهن', `${fig('greek-latin', [], 'جفت‌های یونانی و لاتین')}برای بیشتر اندام‌ها دو ریشه داریم: یکی یونانی و یکی لاتین. ریشه یونانی ${e('nephr/o')} و ریشه لاتین ${e('ren/o')} هر دو یعنی کلیه.${fig('kidney-roots', ['کلیه، میزنای، مثانه و پیشابراه'], 'کلیه با دو ریشه')}`),
          L('نام‌هایی با داستان', `${fig('coccyx', ['ستون مهره تا دنبالچه'], 'ریشه نام دنبالچه')}ستون مهره را ببین: ${e('<b>coccyx</b>')} (دنبالچه) را به خاطر شباهتش به منقار فاخته این‌طور نامیده‌اند. یونانیان سرطان را ${e('karkinos')} یعنی «خرچنگ» می‌گفتند؛ ${e('carcinoma')} از همین‌جا آمده است.${memo('نام یونانی بیشتر در بیماری‌ها و روش‌ها، و نام لاتین بیشتر در صفت‌ها می‌آید: nephritis ولی renal.')}`),
          M('کدام ریشه، مثل nephr/o، به معنی کلیه است؟', ['ren/o', 'pulmon/o', 'cutane/o', 'or/o'], 'ren/o ریشه لاتین کلیه است.', null, F('greek-latin', [])),
          M(`${e('<b>pulmonary</b>')} یعنی…`, ['ریوی', 'کلیوی', 'پوستی', 'دهانی'], 'pulmon/o ریشه لاتین ریه است؛ ریشه یونانی آن pneum/o است.'),
          P('هر ریشه یونانی را به همتای لاتینش وصل کن', [['nephr/o', 'ren/o'], ['pneum/o', 'pulmon/o'], ['dermat/o', 'cutane/o'], ['stomat/o', 'or/o']], 'جفت‌های یونانی و لاتین.'),
          T('واژه carcinoma از واژه یونانی به معنی خرچنگ آمده است.', true, 'karkinos یعنی خرچنگ و سرطان.'),
          B('صفت لاتین «کلیوی» ___ است.', ['renal', 'nephric', 'nephritis'], 'ren/o + ‎-al‎.'),
          M('دنبالچه (coccyx) نامش را از شباهت به چه گرفته است؟', ['منقار فاخته', 'دم ماهی', 'پر پرنده', 'شاخ گوزن'], 'یک نمونه از واژه‌هایی که از شکل چیزها نام گرفته‌اند.', null, F('coccyx', [])),
          S('املای انگلیسی «کلیوی» را بنویس', 'renal', 'ren/o + ‎-al‎.', 're…'),
          N('m2r:bs')
        ]
      },
      {
        id: 'bs3', title: 'از بقراط تا امروز', icon: '📜', items: [
          L('پدر پزشکی', `${fig('hippocratic-oath', ['سوگندنامه بقراط'], 'سوگندنامه بقراط')}بقراط، پزشک یونانی (۴۶۰ تا ۳۷۷ پیش از میلاد)، را «پدر پزشکی» می‌نامند. او پزشکی را نظم داد و ${e('<b>Hippocratic Oath</b>')} هنوز پایه اخلاق پزشکی است.`),
          L('واژه‌ها هنوز ساخته می‌شوند', `${fig('medicine-timeline', [], 'چند گام بزرگ پزشکی')}از گوشی پزشکی در ۱۸۱۶ تا پیوند صورت در ۲۰۰۸، هر کشف تازه با همان قطعه‌های کهن نام گرفته است؛ مثل ${e('electrocardiogram')}.${pearl('در منابع مرجع آمده است: واژه‌سازی هنوز اصلی‌ترین راه نام‌گذاری کشف‌های تازه پزشکی است.')}`),
          M('بقراط را با چه لقبی می‌شناسند؟', ['پدر پزشکی', 'کاشف میکروب', 'سازنده گوشی پزشکی', 'نخستین جراح قلب'], 'Hippocrates را father of medicine می‌نامند.', null, F('hippocratic-oath', [])),
          O('این کشف‌ها را به ترتیب زمان بچین', ['stethoscope', 'x-rays', 'penicillin', 'heart transplant'], '۱۸۱۶، ۱۸۹۵، ۱۹۲۸، ۱۹۶۷.'),
          T('واژه‌های پزشکی تازه هم با همان ریشه‌های یونانی و لاتین ساخته می‌شوند.', true, 'مثل electrocardiogram یا laparoscopy.'),
          M('سوگندنامه بقراط بیشتر درباره چیست؟', ['اخلاق و وظیفه پزشک', 'فهرست داروها', 'آناتومی قلب', 'روش جراحی'], 'پایه اخلاق حرفه‌ای پزشکی است.'),
          B('بقراط پزشکی از کشور ___ بود.', ['یونان', 'مصر', 'ایران'], 'Hippocrates یونانی بود.'),
          P('هر کشف را به سالش وصل کن', [['stethoscope', '۱۸۱۶'], ['insulin', '۱۹۲۲'], ['penicillin', '۱۹۲۸'], ['face transplant', '۲۰۰۸']], 'تاریخ پزشکی.', F('medicine-timeline', [])),
          S('املای انگلیسی «پنی‌سیلین» را بنویس', 'penicillin', 'دو l و دو i.', 'penic…'),
          N('f2t:bs')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'bs4', title: 'چهار قطعه', icon: '🧩', items: [
          L('چهار جزء', `${fig('four-parts', [], 'چهار جزء واژه')}هر واژه پزشکی از این قطعه‌ها ساخته می‌شود: ${e('<b>prefix</b>')} (پیشوند)، ${e('<b>word root</b>')} (ریشه)، ${e('<b>combining vowel</b>')} (واکه رابط) و ${e('<b>suffix</b>')} (پسوند). همه واژه‌ها هر چهار جزء را ندارند، ولی ریشه تقریباً همیشه هست.`),
          L('هر قطعه کجاست؟', `${fig('puzzle-prs', ['پیشوند، ریشه، پسوند'], 'جای قطعه‌ها')}پیشوند همیشه اول می‌آید و جا، عدد، زمان یا حالت را می‌گوید. پسوند همیشه آخر می‌آید و بیماری، روش یا نقش دستوری را می‌گوید.${wb('epi-', 'gastr/o', '-ic')} ← مربوط به بالای معده${memo('پیشوند پیش از ریشه و پسوند پس از ریشه؛ خود نامشان جایشان را می‌گوید.')}`),
          M('بخشی از واژه که معنی اصلی را دارد…', ['word root', 'prefix', 'suffix', 'combining vowel'], 'ریشه پایه معنی است.', null, F('four-parts', [])),
          M(`در ${e('<b>epigastric</b>')}، بخش epi- چیست؟`, ['پیشوند', 'ریشه', 'پسوند', 'واکه رابط'], 'epi- پیش از ریشه gastr آمده است.'),
          T('پسوند همیشه در پایان واژه می‌آید.', true, 'suffix در آخر واژه است.'),
          O('جای قطعه‌ها را از اول تا آخر واژه بچین', ['prefix', 'word root', 'combining vowel', 'suffix'], 'پیشوند، ریشه، واکه، پسوند.'),
          P('هر جزء را به کارش وصل کن', [['prefix', 'جا، عدد یا زمان'], ['word root', 'معنی اصلی'], ['combining vowel', 'آسان کردن تلفظ'], ['suffix', 'بیماری یا روش']], 'کار هر جزء.'),
          W('واژه‌ای بساز به معنی «مربوط به بالای معده»', ['epi-', 'gastr/o', '-ic'], ['hypo-', '-itis', 'enter/o'], 'epigastric.'),
          S('املای انگلیسی «پسوند» را بنویس', 'suffix', 'دو f.', 'suf…'),
          N('t2f:bs')
        ]
      },
      {
        id: 'bs5', title: 'ریشه و شکل ترکیبی', icon: '🔵', items: [
          L('ریشه + واکه', `${fig('puzzle-cf', ['ریشه و واکه، شکل ترکیبی'], 'شکل ترکیبی')}وقتی به ریشه یک واکه رابط (معمولاً ${e('o')}) بچسبد، ${e('<b>combining form</b>')} ساخته می‌شود. آن را با یک خط مورب می‌نویسند: ${e('cardi/o')}، ${e('gastr/o')}، ${e('oste/o')}.`),
          L('چند نمونه', `${tbl([['شکل ترکیبی', 'معنی'], [e('cardi/o'), 'قلب'], [e('gastr/o'), 'معده'], [e('oste/o'), 'استخوان'], [e('arthr/o'), 'مفصل'], [e('splen/o'), 'طحال']])}${memo('خط مورب در cardi/o یعنی «این o گاهی می‌ماند و گاهی می‌رود».')}`),
          M('شکل ترکیبی یعنی…', ['ریشه همراه واکه رابط', 'پیشوند همراه پسوند', 'دو پسوند پشت هم', 'یک واژه کامل'], 'word root + combining vowel = combining form.', null, F('puzzle-cf', [])),
          M(`در ${e('<b>gastr/o</b>')} حرف o چیست؟`, ['واکه رابط', 'پیشوند', 'پسوند', 'ریشه'], 'combining vowel.'),
          T('واکه رابط بیشتر وقت‌ها حرف o است.', true, 'گاهی i یا e هم می‌آید، مثل pelv/i.'),
          P('هر شکل ترکیبی را به معنی‌اش وصل کن', [['cardi/o', 'قلب'], ['gastr/o', 'معده'], ['oste/o', 'استخوان'], ['splen/o', 'طحال']], 'شکل‌های ترکیبی.'),
          B('شکل ترکیبی را با یک ___ میان ریشه و واکه می‌نویسند.', ['خط مورب (/)', 'خط تیره (-)', 'نقطه (.)'], 'مثل cardi/o.'),
          M(`${e('<b>arthr/o</b>')} یعنی…`, ['مفصل', 'سرخرگ', 'استخوان', 'عضله'], 'arthr/o مفصل است؛ arthritis التهاب مفصل.'),
          S('شکل ترکیبی «قلب» را بی‌خط مورب بنویس', 'cardio', 'cardi/o.', 'card…'),
          N('r2m:bs')
        ]
      },
      {
        id: 'bs6', title: 'قانون واکه رابط', icon: '🟠', items: [
          L('بماند یا برود؟', `${fig('cv-rule', [], 'قانون واکه رابط')}اگر پسوند با صامت شروع شود، ${e('o')} می‌ماند: ${e('gastroscopy')}. اگر پسوند با واکه شروع شود، ${e('o')} حذف می‌شود: ${e('gastritis')}، نه gastroitis.`),
          L('میان دو ریشه', `${fig('puzzle-word', ['ریشه، واکه، پسوند'], 'واکه میان ریشه و پسوند')}میان دو ریشه، واکه رابط همیشه می‌ماند، حتی اگر ریشه دوم با واکه شروع شود؛ مثلاً ${e('<b>osteoarthritis</b>')} از ${e('oste/o + arthr/o + -itis')} ساخته شده است.${memo('پسوند صدادار، o را بیرون می‌کند؛ ریشه دوم هیچ‌وقت.')}`),
          M('کدام املا درست است؟', ['gastritis', 'gastroitis', 'gastoritis', 'gastritiss'], '‎-itis‎ با واکه شروع می‌شود؛ o حذف می‌شود.', null, F('cv-rule', [])),
          M('کدام املا درست است؟', ['gastroscopy', 'gastrscopy', 'gastriscopy', 'gastroscopie'], '‎-scopy‎ با صامت شروع می‌شود؛ o می‌ماند.'),
          T('در osteoarthritis، حرف o میان oste و arthr حذف می‌شود.', false, 'میان دو ریشه واکه رابط می‌ماند.'),
          B('پیش از پسوندی که با واکه شروع شود، واکه رابط ___.', ['حذف می‌شود', 'دو برابر می‌شود', 'به a تبدیل می‌شود'], 'gastr + ‎-itis‎ = gastritis.'),
          W('واژه‌ای بساز به معنی «التهاب استخوان و مفصل»', ['oste/o', 'arthr/o', '-itis'], ['gastr/o', '-algia', 'cardi/o'], 'osteoarthritis.'),
          P('هر ترکیب را به واژه درستش وصل کن', [['gastr/o + -itis', 'gastritis'], ['gastr/o + -scopy', 'gastroscopy'], ['gastr/o + -ectomy', 'gastrectomy'], ['gastr/o + -algia', 'gastralgia']], 'o پیش از واکه حذف شده است.'),
          S('املای انگلیسی «معده‌درد» را بنویس', 'gastralgia', 'gastr + ‎-algia‎؛ بی o.', 'gastr…'),
          N('wb:bs')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'bs7', title: 'واژه مرکب', icon: '🔗', items: [
          L('دو ریشه در یک واژه', `${fig('word-parts', [], 'پنج قطعه یک واژه')}واژه‌ای که بیش از یک ریشه دارد ${e('<b>compound word</b>')} است: ${e('gastroenterology')} دو ریشه معده و روده را دارد.${fig('english-puzzle', ['واژه‌های مرکب انگلیسی'], 'مثل sunflower در انگلیسی')}`),
          L('نمونه از مرجع', `${fig('gastroduodenostomy', ['معده و دوازدهه'], 'gastroduodenostomy')}${wb('gastr/o', 'duoden/o', '-stomy')} ← ایجاد راه میان معده و دوازدهه${memo('واژه مرکب را مثل دو کلمه انگلیسی چسبیده بخوان: sun + flower، gastro + entero.')}`),
          M('کدام واژه مرکب است؟', ['osteoarthritis', 'gastritis', 'arthritis', 'carcinoma'], 'دو ریشه oste و arthr دارد.', null, F('word-parts', [])),
          M(`${e('<b>gastroenterology</b>')} یعنی…`, ['دانش معده و روده', 'التهاب معده و روده', 'برداشتن معده', 'درد معده'], '‎-logy‎ یعنی دانش.'),
          T('gastroduodenostomy یعنی ایجاد راه میان معده و دوازدهه.', true, '‎-stomy‎ یعنی ایجاد منفذ.', F('gastroduodenostomy', [])),
          W('واژه‌ای بساز به معنی «گوارش‌شناسی»', ['gastr/o', 'enter/o', '-logy'], ['cardi/o', '-itis', 'oste/o'], 'gastroenterology.'),
          B('واژه‌ای که بیش از یک ریشه دارد ___ است.', ['compound word', 'acronym', 'eponym'], 'compound word.'),
          P('هر واژه را به ریشه‌هایش وصل کن', [['osteoarthritis', 'استخوان + مفصل'], ['gastroenterology', 'معده + روده'], ['gastroduodenostomy', 'معده + دوازدهه'], ['electrocardiogram', 'برق + قلب']], 'واژه‌های مرکب.'),
          S('املای انگلیسی «متخصص گوارش» را بنویس', 'gastroenterologist', 'gastr/o + enter/o + ‎-logist‎.', 'gastroentero…'),
          N('d2t:bs')
        ]
      },
      {
        id: 'bs8', title: 'از پسوند بخوان', icon: '🔍', items: [
          L('سه گام ترجمه', `${fig('translate-steps', [], 'سه گام ترجمه')}برای معنی کردن، اول پسوند را بخوان، بعد پیشوند و در آخر ریشه را: ${e('pericarditis')} ← التهاب، پیرامون، قلب ← «التهاب پیرامون قلب».`),
          L('پسوند معنی را می‌سازد', `${fig('suffix-puzzle', ['ریشه، پایه پازل'], 'ریشه پایه، پسوندها قطعه‌های جدا')}با یک ریشه و چند پسوند، چند واژه تازه داری: ${e('gastritis')}، ${e('gastralgia')}، ${e('gastrectomy')} و ${e('gastroscopy')}.${pearl('در مطالعه موردی مرجع، دانشجویی ۲۲ ساله به نام David درد epigastric داشت و برایش gastroduodenoscopy انجام شد؛ هر دو را با همین سه گام می‌شود معنی کرد.')}`),
          M('برای ترجمه یک واژه، از کجا شروع کنیم؟', ['پسوند', 'پیشوند', 'ریشه', 'حرف اول'], 'اول پسوند، بعد پیشوند، بعد ریشه.', null, F('translate-steps', [])),
          O('گام‌های ترجمه را بچین', ['suffix', 'prefix', 'word root'], 'پسوند، پیشوند، ریشه.'),
          M(`${e('<b>gastrectomy</b>')} یعنی…`, ['برداشتن معده', 'التهاب معده', 'دیدن درون معده', 'درد معده'], '‎-ectomy‎ یعنی برداشتن.'),
          P('هر واژه را به معنی‌اش وصل کن', [['gastritis', 'التهاب معده'], ['gastralgia', 'معده‌درد'], ['gastrectomy', 'برداشتن معده'], ['gastroscopy', 'معده‌بینی']], 'یک ریشه، چند پسوند.', F('suffix-puzzle', [])),
          T('در pericarditis، معنی را با «پیرامون» شروع می‌کنیم.', false, 'با پسوند ‎-itis‎ (التهاب) شروع می‌کنیم.'),
          B('بخش epi- در epigastric یعنی ___.', ['روی، بالای', 'زیر', 'درون'], 'epigastric یعنی ناحیه بالای معده.'),
          S('املای انگلیسی «معده‌بینی» را بنویس', 'gastroscopy', 'gastr/o + ‎-scopy‎.', 'gastro…'),
          N('wb:bs')
        ]
      },
      {
        id: 'bs9', title: 'تلفظ و حرف ساکت', icon: '🗣️', items: [
          L('حرف‌هایی که نمی‌شنوی', `${fig('silent-letters', [], 'تلفظ‌های غافلگیرکننده')}در آغاز واژه، ${e('p')} پیش از ${e('s')}، ${e('n')} و ${e('t')} خوانده نمی‌شود: ${e('psychology')}، ${e('pneumonia')}، ${e('ptosis')}. ${e('ch')} مثل ${e('k')} و ${e('x')} مثل ${e('z')} است.`),
          L('هجای تکیه‌دار', `${fig('stress-marks', [], 'راهنمای تلفظ')}در راهنمای تلفظ، هجای تکیه‌دار با حروف بزرگ نوشته می‌شود: ${e('FEM-or-al')}. علامت خط صاف روی واکه یعنی کشیده و هلال یعنی کوتاه.${memo('حرف p در اول واژه مثل p در swimming pool است: آن‌جا هست ولی صدایش را نمی‌شنوی!')}`),
          M(`${e('<b>pneumonia</b>')} چطور شروع می‌شود؟`, ['با صدای n', 'با صدای p', 'با صدای f', 'با صدای s'], 'p ساکت است: noo-MOH-nee-ah.', null, F('silent-letters', [])),
          M(`در ${e('<b>chronic</b>')}، ch چه صدایی دارد؟`, ['k', 'ch', 'sh', 's'], 'KRON-ik.'),
          T('در ptosis حرف p خوانده نمی‌شود.', true, 'TOH-sis.'),
          P('هر واژه را به صدای آغازش وصل کن', [['psychology', 's'], ['xeroderma', 'z'], ['phlegm', 'f'], ['gingivitis', 'j']], 'تلفظ آغاز واژه.'),
          B('در cytology، حرف c پیش از y صدای ___ دارد.', ['س', 'ک', 'چ'], 'c پیش از e، i و y نرم است.'),
          M('اگر واژه‌ای را با صدای «ز» شنیدی، ممکن است با کدام حرف شروع شود؟', ['x', 'p', 'c', 'g'], 'xeroderma با صدای z خوانده می‌شود.'),
          S('املای انگلیسی «خلط» را بنویس', 'phlegm', 'ph مثل f، g ساکت.', 'phl…'),
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
    id: 'rt', sym: 'Rt', name: 'ریشه‌ها: نقشه بدن', short: 'ریشه‌ها', sub: 'ریشه‌های سر، تنه و اندام‌ها، از یاخته تا دستگاه، ریشه‌های رنگ، خون و شکل باکتری‌ها',
    color: '#2B86C5', dark: '#1F5590', light: '#E3F0FB',
    levels: ['ریشه‌های اندام‌ها', 'از یاخته تا دستگاه', 'رنگ، خون و باکتری'],
    gens: EA.genIds('rt'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'rt1', title: 'ریشه‌های سر', icon: '🙂', items: [
          L('نقشه صورت', `${fig('head-roots', [], 'ریشه‌های سر و صورت')}${e('cephal/o')} سر است و ${e('encephal/o')} مغز درون سر (en- یعنی درون). ${e('ophthalm/o')} چشم، ${e('ot/o')} گوش، ${e('rhin/o')} بینی و ${e('stomat/o')} دهان است.`),
          L('از ریشه تا بیماری', `${fig('mri-brain', ['تصویر مغز با التهاب'], 'encephalitis در تصویربرداری')}${wb('encephal/o', '-itis')} ← التهاب مغز${wb('rhin/o', '-plasty')} ← جراحی ترمیمی بینی${memo('en-cephal یعنی «درون سر»؛ پس encephal/o همان مغز است.')}`),
          M('کدام ریشه یعنی مغز؟', ['encephal/o', 'cephal/o', 'ot/o', 'rhin/o'], 'cephal/o سر است و encephal/o مغز.', null, F('head-roots', [])),
          M(`${e('<b>otitis</b>')} یعنی…`, ['التهاب گوش', 'التهاب چشم', 'التهاب بینی', 'التهاب دهان'], 'ot/o گوش است.'),
          P('هر ریشه را به عضوش وصل کن', [['ophthalm/o', 'چشم'], ['rhin/o', 'بینی'], ['stomat/o', 'دهان'], ['gingiv/o', 'لثه']], 'ریشه‌های صورت.'),
          T('encephalitis یعنی التهاب مغز.', true, 'encephal/o + ‎-itis‎.', F('mri-brain', [])),
          W('واژه‌ای بساز به معنی «التهاب بینی»', ['rhin/o', '-itis'], ['ot/o', '-algia', 'stomat/o'], 'rhinitis.'),
          B('دانش و درمان بیماری‌های چشم ___ است.', ['ophthalmology', 'otology', 'rhinology'], 'ophthalm/o + ‎-logy‎.'),
          S('املای انگلیسی «چشم‌پزشکی» را بنویس', 'ophthalmology', 'ph و th هر دو.', 'ophth…'),
          N('m2r:rt')
        ]
      },
      {
        id: 'rt2', title: 'ریشه‌های تنه', icon: '🫀', items: [
          L('اندام‌های درون تنه', `${fig('trunk-roots', [], 'ریشه‌های اندام‌های تنه')}${e('cardi/o')} قلب، ${e('pneum/o')} و ${e('pulmon/o')} ریه، ${e('hepat/o')} کبد، ${e('gastr/o')} معده، ${e('splen/o')} طحال، ${e('enter/o')} روده باریک، ${e('col/o')} روده بزرگ و ${e('cyst/o')} مثانه است.`),
          L('کبد بزرگ', `${fig('hepatomegaly', ['کبد طبیعی و کبد بزرگ'], 'hepatomegaly')}${wb('hepat/o', '-megaly')} ← بزرگی کبد${wb('cardi/o', '-megaly')} ← بزرگی قلب${memo('hepat/o را با «هپاتیت» به خاطر بسپار؛ همان التهاب کبد است.')}`),
          M('کدام ریشه یعنی کبد؟', ['hepat/o', 'splen/o', 'gastr/o', 'col/o'], 'hepatitis التهاب کبد است.', null, F('trunk-roots', [])),
          M(`${e('<b>hepatomegaly</b>')} یعنی…`, ['بزرگی کبد', 'التهاب کبد', 'تومور کبد', 'درد کبد'], '‎-megaly‎ یعنی بزرگی.', null, F('hepatomegaly', [])),
          P('هر ریشه را به اندامش وصل کن', [['cardi/o', 'قلب'], ['splen/o', 'طحال'], ['enter/o', 'روده باریک'], ['cyst/o', 'مثانه']], 'ریشه‌های تنه.'),
          T('enter/o یعنی روده بزرگ.', false, 'enter/o روده باریک و col/o روده بزرگ است.'),
          W('واژه‌ای بساز به معنی «بزرگی قلب»', ['cardi/o', '-megaly'], ['hepat/o', '-itis', 'splen/o'], 'cardiomegaly.'),
          B('دیدن درون روده بزرگ با آندوسکوپ ___ است.', ['colonoscopy', 'gastroscopy', 'arthroscopy'], 'colon/o + ‎-scopy‎.'),
          S('املای انگلیسی «التهاب کبد» را بنویس', 'hepatitis', 'hepat/o + ‎-itis‎.', 'hepat…'),
          N('t2f:rt')
        ]
      },
      {
        id: 'rt3', title: 'پوست تا استخوان', icon: '🦴', items: [
          L('لایه به لایه', `${fig('tissue-layers', [], 'ریشه هر لایه')}از بیرون به درون: ${e('dermat/o')} پوست، ${e('lip/o')} چربی، ${e('my/o')} عضله، ${e('oste/o')} استخوان. ${e('angi/o')} رگ و ${e('neur/o')} عصب از میان این لایه‌ها می‌گذرند.`),
          L('دو بیماری، دو ریشه', `${fig('osteoporosis', ['استخوان طبیعی و پوک'], 'osteoporosis')}${wb('oste/o', 'por/o', '-osis')} ← پوکی استخوان${fig('contact-dermatitis', ['درماتیت تماسی با پیچک سمی'], 'contact dermatitis')}${wb('dermat/o', '-itis')} ← التهاب پوست${memo('my/o را با «ماهیچه» به خاطر بسپار: myalgia یعنی درد ماهیچه.')}`),
          M('کدام ریشه یعنی عضله؟', ['my/o', 'myel/o', 'oste/o', 'lip/o'], 'myel/o نخاع یا مغز استخوان است، نه عضله.', null, F('tissue-layers', [])),
          M(`${e('<b>osteoporosis</b>')} یعنی…`, ['پوکی استخوان', 'التهاب استخوان', 'تومور استخوان', 'نرمی استخوان'], 'por/o یعنی منفذ؛ استخوان سوراخ‌سوراخ.', null, F('osteoporosis', [])),
          P('هر ریشه را به لایه‌اش وصل کن', [['dermat/o', 'پوست'], ['lip/o', 'چربی'], ['my/o', 'عضله'], ['oste/o', 'استخوان']], 'لایه‌ها.'),
          T('lipoma توموری از بافت چربی است.', true, 'lip/o + ‎-oma‎.'),
          W('واژه‌ای بساز به معنی «درد عضله»', ['my/o', '-algia'], ['oste/o', '-itis', 'lip/o'], 'myalgia.'),
          B('التهاب پوست را ___ می‌گویند.', ['dermatitis', 'dermatosis', 'arthritis'], 'dermat/o + ‎-itis‎.'),
          S('املای انگلیسی «پوکی استخوان» را بنویس', 'osteoporosis', 'oste/o + por/o + ‎-osis‎.', 'osteo…'),
          N('wb:rt')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'rt4', title: 'یاخته، بافت، اندام', icon: '🔬', items: [
          L('چهار سطح', `${fig('cell-to-system', [], 'از یاخته تا دستگاه')}بدن از ${e('<b>cell</b>')} (یاخته) شروع می‌شود؛ یاخته‌ها ${e('<b>tissue</b>')} (بافت)، بافت‌ها ${e('<b>organ</b>')} (اندام) و اندام‌ها ${e('<b>system</b>')} (دستگاه) را می‌سازند.`),
          L('دانش هر سطح', `${tbl([['ریشه', 'واژه', 'معنی'], [e('cyt/o'), e('cytology'), 'یاخته‌شناسی'], [e('hist/o'), e('histology'), 'بافت‌شناسی'], [e('path/o'), e('pathology'), 'آسیب‌شناسی']])}${fig('lumen', ['سرخرگ و سیاهرگ زیر میکروسکوپ'], 'بافت رگ زیر میکروسکوپ')}${memo('hist/o را با «history» قاطی نکن؛ hist/o یعنی بافت.')}`),
          M('بافت را با کدام ریشه می‌سازیم؟', ['hist/o', 'cyt/o', 'path/o', 'physi/o'], 'histology یعنی بافت‌شناسی.', null, F('cell-to-system', [])),
          O('از کوچک به بزرگ بچین', ['cell', 'tissue', 'organ', 'system'], 'یاخته، بافت، اندام، دستگاه.'),
          M(`${e('<b>pathology</b>')} یعنی…`, ['دانش بیماری و تغییرهای بافت', 'دانش یاخته', 'دانش کارکرد بدن', 'دانش دارو'], 'path/o یعنی بیماری.'),
          T('anatomy دانش ساختار بدن و physiology دانش کارکرد آن است.', true, 'دو دانش پایه پزشکی.'),
          P('هر دانش را به موضوعش وصل کن', [['cytology', 'یاخته'], ['histology', 'بافت'], ['anatomy', 'ساختار بدن'], ['physiology', 'کارکرد بدن']], 'دانش‌های پایه.'),
          B('دانش سرطان و تومور ___ است.', ['oncology', 'cytology', 'histology'], 'onc/o یعنی تومور.'),
          S('املای انگلیسی «بافت‌شناسی» را بنویس', 'histology', 'hist/o + ‎-logy‎.', 'hist…'),
          N('d2t:rt')
        ]
      },
      {
        id: 'rt5', title: 'دستگاه‌های بدن', icon: '🧭', items: [
          L('یازده دستگاه', `${fig('body-systems', [], 'دستگاه‌های بدن')}هر دستگاه چند اندام دارد که با هم کار می‌کنند؛ مثلاً ${e('<b>musculoskeletal</b>')} یعنی ۲۰۶ استخوان و بیش از ۶۰۰ عضله، و ${e('<b>gastrointestinal (GI)</b>')} یعنی دستگاه گوارش.`),
          L('دستگاه‌ها با هم', `${fig('diabetic-neuropathy', ['کاهش خون‌رسانی و آسیب عصب'], 'diabetic neuropathy')}دستگاه‌ها تنها کار نمی‌کنند. در ${e('diabetic neuropathy')} قند بالا هم رگ و هم عصب پا را آسیب می‌زند.${pearl('در منابع مرجع آمده است: دستگاه‌های بدن مثل یک تیم کار می‌کنند و بیماری یکی، دیگری را هم درگیر می‌کند.')}`),
          M('دستگاه استخوان و عضله را چه می‌نامند؟', ['musculoskeletal', 'integumentary', 'gastrointestinal', 'genitourinary'], 'muscul/o + skelet/o.', null, F('body-systems', [])),
          M(`${e('<b>integumentary</b>')} یعنی دستگاه…`, ['پوست و ضمائم آن', 'گوارش', 'ادرار', 'عصبی'], 'پوست، مو، ناخن و غده‌ها.'),
          P('هر دستگاه را به نامش وصل کن', [['gastrointestinal', 'گوارشی'], ['genitourinary', 'ادراری-تناسلی'], ['musculoskeletal', 'اسکلتی-عضلانی'], ['integumentary', 'پوستی']], 'نام دستگاه‌ها.'),
          T('neuropathy یعنی بیماری عصب.', true, 'neur/o + ‎-pathy‎.', F('diabetic-neuropathy', [])),
          B('اختصار GI یعنی ___.', ['gastrointestinal', 'genitourinary', 'general internal'], 'دستگاه گوارش.'),
          W('واژه‌ای بساز به معنی «بیماری عصب»', ['neur/o', '-pathy'], ['my/o', '-itis', 'cardi/o'], 'neuropathy.'),
          S('املای انگلیسی «گوارشی» را بنویس', 'gastrointestinal', 'gastr/o + intestin + ‎-al‎.', 'gastro…'),
          N('ab:rt')
        ]
      },
      {
        id: 'rt6', title: 'یک ریشه، چند واژه', icon: '🌱', items: [
          L('خانواده neur/o', `${tbl([['واژه', 'معنی'], [e('neuritis'), 'التهاب عصب'], [e('neuralgia'), 'درد عصب'], [e('neuroma'), 'تومور عصب'], [e('neuropathy'), 'بیماری عصب'], [e('neurologist'), 'متخصص مغز و اعصاب']])}یک ریشه با پنج پسوند، پنج واژه می‌سازد.`),
          L('خانواده cardi/o', `${fig('heart-valves', ['دریچه‌های قلب'], 'قلب از بالا')}${wb('cardi/o', '-logy')} ← قلب‌شناسی${wb('my/o', 'cardi/o', '-itis')} ← التهاب عضله قلب${memo('یک ریشه را بگیر و همه پسوندها را جلویش امتحان کن؛ این بهترین تمرین واژه‌سازی است.')}`),
          M(`${e('<b>neuralgia</b>')} یعنی…`, ['درد عصب', 'التهاب عصب', 'تومور عصب', 'بیماری عصب'], '‎-algia‎ یعنی درد.'),
          M(`${e('<b>myocarditis</b>')} یعنی…`, ['التهاب عضله قلب', 'بزرگی قلب', 'درد عضله', 'تومور قلب'], 'my/o + cardi/o + ‎-itis‎.', null, F('heart-valves', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['neuritis', 'التهاب عصب'], ['neuroma', 'تومور عصب'], ['cardiomegaly', 'بزرگی قلب'], ['cardiology', 'قلب‌شناسی']], 'یک ریشه، چند واژه.'),
          T('neurologist متخصص قلب است.', false, 'neurologist متخصص مغز و اعصاب است؛ cardiologist متخصص قلب.'),
          W('واژه‌ای بساز به معنی «تومور عصب»', ['neur/o', '-oma'], ['cardi/o', '-algia', 'lip/o'], 'neuroma.'),
          B('بیماری قلب را ___ می‌گویند.', ['cardiopathy', 'neuropathy', 'cardiology'], 'cardi/o + ‎-pathy‎.'),
          S('املای انگلیسی «درد عصب» را بنویس', 'neuralgia', 'neur/o + ‎-algia‎.', 'neur…'),
          N('wb:rt')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'rt7', title: 'ریشه‌های رنگ', icon: '🎨', items: [
          L('پالت رنگ', `${fig('color-wheel', [], 'ریشه‌های رنگ')}${e('erythr/o')} قرمز، ${e('leuk/o')} سفید، ${e('cyan/o')} آبی، ${e('melan/o')} سیاه و ${e('xanth/o')} زرد است.${fig('color-palette', ['پالت رنگ‌های ریشه'], 'پالت')}`),
          L('رنگ روی پوست', `${fig('cyanosis-toes', ['کبودی انگشتان پا'], 'cyanosis')}${e('<b>cyanosis</b>')} کبودی پوست از کمبود اکسیژن است. زردی پوست و چشم را ${e('<b>jaundice</b>')} می‌گویند.${fig('jaundice', ['زردی پوست'], 'jaundice')}${memo('melan/o را با «ملانین»، رنگ‌دانه تیره پوست، به خاطر بسپار.')}`),
          M('کدام ریشه یعنی آبی؟', ['cyan/o', 'erythr/o', 'xanth/o', 'leuk/o'], 'cyanosis کبودی است.', null, F('color-wheel', [])),
          M(`${e('<b>melanoma</b>')} یعنی…`, ['تومور سیاه یاخته‌های رنگ‌دانه', 'گلبول سفید', 'زردی پوست', 'لکه ارغوانی'], 'melan/o + ‎-oma‎.'),
          P('هر ریشه را به رنگش وصل کن', [['erythr/o', 'قرمز'], ['leuk/o', 'سفید'], ['xanth/o', 'زرد'], ['chlor/o', 'سبز']], 'رنگ‌ها.'),
          T('cyanosis رنگ آبی‌کبود پوست است.', true, 'نشانه کمبود اکسیژن.', F('cyanosis-toes', [])),
          B('poliomyelitis درگیری ماده ___ نخاع است.', ['خاکستری', 'سفید', 'قرمز'], 'poli/o یعنی خاکستری.'),
          M('زردی پوست و چشم را چه می‌نامند؟', ['jaundice', 'cyanosis', 'purpura', 'albino'], 'jaundice یا icterus.', null, F('jaundice', [])),
          S('املای انگلیسی «کبودی» را بنویس', 'cyanosis', 'cyan/o + ‎-osis‎.', 'cyan…'),
          N('m2r:rt')
        ]
      },
      {
        id: 'rt8', title: 'رنگ در خون', icon: '🩸', items: [
          L('قرمز و سفید', `${fig('blood-words', [], '‎-cyte‎، ‎-emia‎ و ‎-penia‎')}${wb('erythr/o', '-cyte')} ← گلبول قرمز${wb('leuk/o', '-cyte')} ← گلبول سفید`),
          L('سه پسوند خون', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-cyte'), 'یاخته', e('leukocyte')], [e('-emia'), 'حالت خون', e('leukemia')], [e('-penia'), 'کمبود', e('leukopenia')]])}${memo('‎-penia‎ مثل «پنی»، سکه کوچک است؛ یعنی کم بودن.')}`),
          M(`${e('<b>erythrocyte</b>')} یعنی…`, ['گلبول قرمز', 'گلبول سفید', 'پلاکت', 'یاخته عصبی'], 'erythr/o قرمز و ‎-cyte‎ یاخته.', null, F('blood-words', [])),
          M(`${e('<b>leukopenia</b>')} یعنی…`, ['کمبود گلبول سفید', 'افزایش گلبول سفید', 'سرطان گلبول سفید', 'گلبول قرمز'], '‎-penia‎ یعنی کمبود.'),
          P('هر واژه را به معنی‌اش وصل کن', [['leukocyte', 'گلبول سفید'], ['leukemia', 'سرطان گلبول سفید'], ['leukopenia', 'کمبود گلبول سفید'], ['anemia', 'کم‌خونی']], 'واژه‌های خون.'),
          T('leukemia یعنی کم‌خونی.', false, 'leukemia سرطان گلبول سفید است؛ کم‌خونی anemia است.'),
          W('واژه‌ای بساز به معنی «گلبول سفید»', ['leuk/o', '-cyte'], ['erythr/o', '-emia', 'cyan/o'], 'leukocyte.'),
          B('اختصار RBC یعنی ___.', ['گلبول قرمز', 'گلبول سفید', 'شمارش کامل خون'], 'red blood cell.'),
          S('املای انگلیسی «گلبول قرمز» را بنویس', 'erythrocyte', 'erythr/o + ‎-cyte‎.', 'erythro…'),
          N('ab:rt')
        ]
      },
      {
        id: 'rt9', title: 'شکل باکتری‌ها', icon: '🦠', items: [
          L('گرد یا میله‌ای', `${fig('bacteria-shapes', [], 'شکل باکتری‌ها')}باکتری کروی ${e('<b>coccus</b>')} (جمع: cocci) و باکتری میله‌ای ${e('<b>bacillus</b>')} (جمع: bacilli) است. پیشوند نام، چیدمان را می‌گوید: ${e('dipl/o')} جفتی، ${e('staphyl/o')} خوشه‌ای مثل انگور و ${e('strept/o')} زنجیره‌ای.`),
          L('باکتری در منابع مرجع', `${fig('bacteria', ['استافیلوکوک، استرپتوکوک، باسیل و…'], 'شکل‌های باکتری')}${pearl('در منابع مرجع آمده است: همه باکتری‌ها بیماری‌زا نیستند؛ بعضی به هضم غذا و ساخت ماست کمک می‌کنند.')}${fig('tonsillectomy', ['لوزه ملتهب و برداشتن آن'], 'لوزه ملتهب، اغلب با استرپتوکوک')}`),
          M('باکتری کروی‌ای که خوشه‌ای مثل انگور رشد می‌کند…', ['staphylococcus', 'streptococcus', 'diplococcus', 'bacillus'], 'staphyl/o یعنی خوشه.', null, F('bacteria-shapes', [])),
          M(`${e('<b>bacillus</b>')} چه شکلی دارد؟`, ['میله‌ای', 'کروی', 'مارپیچ', 'خوشه‌ای'], 'bacillus باکتری میله‌ای است.'),
          P('هر پیشوند را به چیدمانش وصل کن', [['dipl/o', 'جفتی'], ['staphyl/o', 'خوشه‌ای'], ['strept/o', 'زنجیره‌ای'], ['bacteri/o', 'باکتری']], 'نام باکتری‌ها.', F('bacteria', [])),
          T('جمع coccus واژه cocci است.', true, '‎-us‎ به ‎-i‎ تبدیل می‌شود.'),
          B('باکتری‌های کروی زنجیره‌ای را ___ می‌گویند.', ['streptococcus', 'staphylococcus', 'diplococcus'], 'strept/o یعنی زنجیره پیچ‌خورده.'),
          M(`${e('<b>tonsillitis</b>')} یعنی…`, ['التهاب لوزه', 'برداشتن لوزه', 'التهاب گوش', 'درد گلو'], 'tonsill/o + ‎-itis‎.', null, F('tonsillectomy', [])),
          S('املای انگلیسی «باکتری‌شناسی» را بنویس', 'bacteriology', 'bacteri/o + ‎-logy‎.', 'bacterio…'),
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
    id: 'sf', sym: 'Sf', name: 'پسوندها', short: 'پسوندها', sub: 'پسوندهای بیماری و نشانه، ابزار و روش تشخیص، جراحی، صفت‌سازها و پسوندهای رشته و متخصص',
    color: '#8A5CB3', dark: '#5E3586', light: '#F1E8FA',
    levels: ['بیماری و نشانه', 'تشخیص و سنجش', 'جراحی، صفت و رشته'],
    gens: EA.genIds('sf'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'sf1', title: 'چهار خانواده', icon: '🗂️', items: [
          L('پسوند معنی را می‌سازد', `${fig('suffix-families', [], 'چهار خانواده پسوند')}پسوندها چهار خانواده‌اند: بیماری و حالت (${e('-itis')})، تشخیص (${e('-scopy')})، جراحی (${e('-ectomy')}) و دستوری یا رشته (${e('-al')}، ${e('-logy')}). با دانستن خانواده، نوع واژه را حدس می‌زنی.`),
          L('یک ریشه، چهار خانواده', `${tbl([['واژه', 'خانواده', 'معنی'], [e('arthritis'), 'بیماری', 'التهاب مفصل'], [e('arthroscopy'), 'تشخیص', 'دیدن درون مفصل'], [e('arthroplasty'), 'جراحی', 'ترمیم مفصل'], [e('arthralgia'), 'نشانه', 'درد مفصل']])}${memo('پسوند مثل برچسب پایان کار است: می‌گوید بیماری است، آزمایش است یا جراحی.')}`),
          M('پسوند ‎-ectomy‎ از کدام خانواده است؟', ['جراحی', 'بیماری', 'تشخیص', 'صفت‌ساز'], 'یعنی برداشتن با جراحی.', null, F('suffix-families', [])),
          M(`${e('<b>arthroscopy</b>')} یعنی…`, ['دیدن درون مفصل با ابزار', 'التهاب مفصل', 'برداشتن مفصل', 'درد مفصل'], '‎-scopy‎ یعنی مشاهده با ابزار.'),
          P('هر پسوند را به خانواده‌اش وصل کن', [['-itis', 'بیماری'], ['-scopy', 'تشخیص'], ['-ectomy', 'جراحی'], ['-al', 'صفت‌ساز']], 'خانواده‌ها.'),
          T('پسوند همیشه نوع واژه را به ما می‌گوید.', true, 'مثلاً ‎-logy‎ یعنی رشته و ‎-itis‎ یعنی بیماری التهابی.'),
          B('پسوند ___ یعنی دانش یا مطالعه.', ['-logy', '-logist', '-lysis'], 'مثل cardiology.'),
          O('این واژه‌ها را از «بیماری» تا «درمان» بچین', ['arthritis', 'arthroscopy', 'arthroplasty'], 'التهاب، دیدن، ترمیم.'),
          S('املای انگلیسی پسوند «التهاب» را بی‌خط تیره بنویس', 'itis', '‎-itis‎.', 'it…'),
          N('r2m:sf')
        ]
      },
      {
        id: 'sf2', title: 'التهاب، درد، بزرگی', icon: '🔥', items: [
          L('شش پسوند پرکاربرد', `${fig('condition-suffixes', [], 'پسوندهای بیماری و نشانه')}${e('-itis')} التهاب، ${e('-osis')} حالت غیرطبیعی، ${e('-algia')} و ${e('-dynia')} درد، ${e('-megaly')} بزرگی، ${e('-oma')} تومور و ${e('-pathy')} بیماری است.`),
          L('درد و لخته', `${fig('gastralgia', ['مرد با معده‌درد'], 'gastralgia یا gastrodynia')}${e('gastralgia')} و ${e('gastrodynia')} هر دو معده‌درد هستند؛ دو پسوند هم‌معنی.${fig('thrombosis', ['لخته درون رگ'], 'thrombosis')}${wb('thromb/o', '-osis')} ← حالت لخته درون رگ${memo('‎-osis‎ یعنی «حالت»؛ به‌تنهایی نمی‌گوید بیماری چیست، ریشه آن را می‌گوید.')}`),
          M('کدام پسوند یعنی بزرگی؟', ['-megaly', '-malacia', '-oma', '-algia'], 'hepatomegaly یعنی بزرگی کبد.', null, F('condition-suffixes', [])),
          M(`${e('<b>gastrodynia</b>')} یعنی…`, ['معده‌درد', 'التهاب معده', 'بزرگی معده', 'تومور معده'], '‎-dynia‎ هم‌معنی ‎-algia‎ است.', null, F('gastralgia', [])),
          P('هر پسوند را به معنی‌اش وصل کن', [['-itis', 'التهاب'], ['-osis', 'حالت غیرطبیعی'], ['-oma', 'تومور'], ['-pathy', 'بیماری']], 'پسوندهای بیماری.'),
          T('thrombosis یعنی حالت وجود لخته در رگ.', true, 'thromb/o + ‎-osis‎.', F('thrombosis', [])),
          W('واژه‌ای بساز به معنی «گوش‌درد»', ['ot/o', '-algia'], ['rhin/o', '-itis', '-oma'], 'otalgia.'),
          B('سردرد را ___ می‌گویند.', ['cephalalgia', 'cephalitis', 'encephaloma'], 'cephal/o + ‎-algia‎.'),
          S('املای انگلیسی «تومور کبد» را بنویس', 'hepatoma', 'hepat/o + ‎-oma‎.', 'hepat…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf3', title: 'جریان، فوران، کمبود', icon: '💧', items: [
          L('خانواده rrh', `${fig('rrh-family', [], 'سه پسوند با rrh')}${e('-rrhea')} جریان و ترشح (${e('rhinorrhea')}، آبریزش بینی)، ${e('-rrhage')} فوران خون (${e('hemorrhage')}) و ${e('-rrhaphy')} بخیه است.`),
          L('سختی، نرمی، فلج', `${tbl([['پسوند', 'معنی', 'نمونه'], [e('-sclerosis'), 'سختی', e('arteriosclerosis')], [e('-malacia'), 'نرمی', e('osteomalacia')], [e('-stenosis'), 'تنگی', e('mitral stenosis')], [e('-plegia'), 'فلج', e('hemiplegia')], [e('-penia'), 'کمبود', e('leukopenia')]])}${memo('‎-malacia‎ را با «ملایم» به خاطر بسپار: نرم و شل.')}`),
          M(`${e('<b>hemorrhage</b>')} یعنی…`, ['خونریزی شدید', 'ترشح خون', 'بخیه رگ', 'کم‌خونی'], '‎-rrhage‎ یعنی فوران.', null, F('rrh-family', [])),
          M(`${e('<b>osteomalacia</b>')} یعنی…`, ['نرمی استخوان', 'سختی استخوان', 'پوکی استخوان', 'التهاب استخوان'], '‎-malacia‎ یعنی نرمی.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-rrhea', 'جریان، ترشح'], ['-rrhage', 'فوران خون'], ['-sclerosis', 'سختی'], ['-plegia', 'فلج']], 'پسوندها.'),
          T('diarrhea از dia- (از میان) و ‎-rrhea‎ (جریان) ساخته شده است.', true, 'جریان آب‌گونه از روده.'),
          B('سختی سرخرگ‌ها را ___ می‌گویند.', ['arteriosclerosis', 'arteriomalacia', 'arteriostenosis'], 'arteri/o + ‎-sclerosis‎.'),
          W('واژه‌ای بساز به معنی «آبریزش بینی»', ['rhin/o', '-rrhea'], ['ot/o', '-rrhage', '-itis'], 'rhinorrhea.'),
          S('املای انگلیسی «خونریزی شدید» را بنویس', 'hemorrhage', 'hem/o + ‎-rrhage‎؛ دو r.', 'hemor…'),
          N('t2f:sf')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'sf4', title: 'ابزار یا روش؟', icon: '🔭', items: [
          L('سه گانه تشخیص', `${fig('scope-gram', [], 'ابزار، روش و حاصل')}${e('-scope')} ابزار دیدن است و ${e('-scopy')} روش دیدن. ${e('-graph')} دستگاه ثبت، ${e('-graphy')} روش ثبت و ${e('-gram')} خود نگاره است.`),
          L('نوار قلب', `${fig('ecg-machine', ['دستگاه نوار قلب'], 'electrocardiograph: دستگاه')}${fig('ecg-strip', ['نوار قلب'], 'electrocardiogram: نوار حاصل')}${memo('‎-gram‎ مثل «گرم» چیزی است که در دستت می‌ماند؛ ‎-graph‎ دستگاهی است که آن را می‌سازد.')}`),
          M(`${e('<b>electrocardiogram</b>')} چیست؟`, ['نوار ثبت‌شده فعالیت برقی قلب', 'دستگاه ثبت نوار قلب', 'روش ثبت نوار قلب', 'جراحی قلب'], '‎-gram‎ یعنی نگاره، خود نوار.', null, F('ecg-strip', [])),
          M('ابزار دیدن درون بدن را چه می‌نامند؟', ['endoscope', 'endoscopy', 'endogram', 'endography'], '‎-scope‎ ابزار است.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-scope', 'ابزار دیدن'], ['-scopy', 'روش دیدن'], ['-graph', 'دستگاه ثبت'], ['-gram', 'نگاره ثبت‌شده']], 'ابزار و روش.', F('scope-gram', [])),
          T('electrocardiograph همان نوار کاغذی قلب است.', false, '‎-graph‎ دستگاه است؛ نوار کاغذی electrocardiogram است.', F('ecg-machine', [])),
          B('روش دیدن درون شکم از راه برش‌های کوچک ___ است.', ['laparoscopy', 'laparoscope', 'laparotomy'], 'lapar/o + ‎-scopy‎.'),
          O('از ابزار تا حاصل بچین', ['electrocardiograph', 'electrocardiography', 'electrocardiogram'], 'دستگاه، روش، نوار.'),
          S('املای انگلیسی «آندوسکوپی» را بنویس', 'endoscopy', 'endo- + ‎-scopy‎.', 'endo…'),
          N('f2t:sf')
        ]
      },
      {
        id: 'sf5', title: 'نگاره‌ها', icon: '🩻', items: [
          L('پرتونگاری', `${fig('radiography', ['دستگاه، روش و نگاره'], 'radiograph، radiography و radiogram')}${e('<b>radiography</b>')} روش گرفتن عکس با پرتو ایکس است و حاصلش ${e('radiograph')} یا ${e('radiogram')}.`),
          L('عکس پستان و سی‌تی', `${fig('mammogram', ['عضله سینه، بافت چربی و بافت پستان'], 'mammogram')}${wb('mamm/o', '-gram')} ← نگاره پستان${fig('ct-scan', ['سی‌تی شکم و کبد'], 'computed tomography')}${memo('mamm/o را با «مامان» به خاطر بسپار: پستان شیردهی.')}`),
          M(`${e('<b>mammography</b>')} یعنی…`, ['روش عکس‌برداری پستان', 'عکس پستان', 'دستگاه عکس پستان', 'برداشتن پستان'], '‎-graphy‎ یعنی روش ثبت.', null, F('mammogram', [])),
          M('حاصل پرتونگاری را چه می‌نامند؟', ['radiograph', 'radiography', 'radiology', 'radiologist'], 'radiograph یا radiogram همان عکس است.', null, F('radiography', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['mammogram', 'نگاره پستان'], ['radiography', 'روش پرتونگاری'], ['radiologist', 'متخصص رادیولوژی'], ['radiology', 'دانش پرتونگاری']], 'خانواده radi/o.'),
          T('در CT، پرتو ایکس دور بدن می‌چرخد و برش‌هایی در عمق‌های گوناگون می‌گیرد.', true, 'computed tomography.', F('ct-scan', [])),
          B('اختصار CXR یعنی ___.', ['عکس قفسه سینه', 'سی‌تی شکم', 'نوار قلب'], 'chest x-ray.'),
          W('واژه‌ای بساز به معنی «نگاره پستان»', ['mamm/o', '-gram'], ['radi/o', '-scopy', '-graph'], 'mammogram.'),
          S('املای انگلیسی «پرتونگاری» را بنویس', 'radiography', 'radi/o + ‎-graphy‎.', 'radio…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf6', title: 'نمونه و سنجش', icon: '📏', items: [
          L('سنجیدن', `${e('-meter')} ابزار سنجش است و ${e('-metry')} روش سنجیدن: ${e('thermometer')} دماسنج است و ${e('spirometry')} سنجش تنفس.${fig('spirometry', ['سنجش تنفس'], 'spirometry')}`),
          L('برداشتن نمونه', `${fig('punch-biopsy', ['ابزار پانچ و برش پوست'], 'punch biopsy')}${wb('bi/o', '-opsy')} ← دیدن بافت زنده؛ یعنی نمونه‌برداری (${e('Bx')})${wb('thorac/o', '-centesis')} ← کشیدن مایع از قفسه سینه با سوزن${memo('bi/o یعنی زندگی؛ biopsy یعنی نگاه به بافت زنده.')}`),
          M(`${e('<b>spirometry</b>')} یعنی…`, ['سنجش تنفس', 'عکس ریه', 'دیدن نایژه', 'التهاب ریه'], 'spir/o + ‎-metry‎.', null, F('spirometry', [])),
          M(`${e('<b>biopsy</b>')} یعنی…`, ['برداشتن بافت زنده برای بررسی', 'برداشتن کامل عضو', 'بخیه زخم', 'تزریق دارو'], 'bi/o + ‎-opsy‎.', null, F('punch-biopsy', [])),
          P('هر پسوند را به معنی‌اش وصل کن', [['-meter', 'ابزار سنجش'], ['-metry', 'روش سنجش'], ['-opsy', 'دیدن'], ['-centesis', 'کشیدن مایع با سوزن']], 'پسوندهای سنجش.'),
          T('thermometer روش سنجش دماست.', false, '‎-meter‎ ابزار است؛ thermometer یعنی دماسنج.'),
          B('اختصار Bx یعنی ___.', ['نمونه‌برداری', 'شکستگی', 'تشخیص'], 'biopsy.'),
          W('واژه‌ای بساز به معنی «کشیدن مایع از قفسه سینه»', ['thorac/o', '-centesis'], ['pneum/o', '-scopy', '-metry'], 'thoracentesis.'),
          S('املای انگلیسی «دماسنج» را بنویس', 'thermometer', 'therm/o + ‎-meter‎.', 'thermo…'),
          N('d2t:sf')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'sf7', title: 'برداشتن، برش، منفذ', icon: '✂️', items: [
          L('سه پسوند شبیه', `${fig('cut-suffixes', [], 'پسوندهای جراحی')}${e('-ectomy')} یعنی بیرون آوردن عضو، ${e('-tomy')} یعنی برش و ${e('-stomy')} یعنی ساختن منفذ تازه. یک حرف فرق دارد، کار کاملاً فرق دارد.`),
          L('آپاندکتومی', `${fig('appendectomy', ['قبل و بعد از برداشتن آپاندیس'], 'appendectomy')}${wb('append/o', '-ectomy')} ← برداشتن آپاندیس${wb('trache/o', '-stomy')} ← ایجاد منفذ در نای${memo('‎-ectomy‎ = «اِک»، بیرون؛ ‎-stomy‎ = «استوم»، دهانه. ‎-tomy‎ فقط برش است.')}`),
          M(`${e('<b>appendectomy</b>')} یعنی…`, ['برداشتن آپاندیس', 'برش آپاندیس', 'التهاب آپاندیس', 'منفذ در آپاندیس'], '‎-ectomy‎ یعنی برداشتن.', null, F('appendectomy', [])),
          M(`فرق ${e('tracheotomy')} و ${e('tracheostomy')} چیست؟`, ['اولی برش نای و دومی ساختن منفذ ماندگار در نای است', 'هر دو یکی‌اند', 'اولی برداشتن نای است', 'دومی التهاب نای است'], '‎-tomy‎ برش و ‎-stomy‎ منفذ.'),
          P('هر پسوند را به معنی‌اش وصل کن', [['-ectomy', 'برداشتن'], ['-tomy', 'برش'], ['-stomy', 'ایجاد منفذ'], ['-pexy', 'تثبیت']], 'پسوندهای جراحی.', F('cut-suffixes', [])),
          T('colostomy یعنی ایجاد منفذ روده بزرگ روی شکم.', true, 'col/o + ‎-stomy‎.'),
          B('برداشتن طحال ___ است.', ['splenectomy', 'splenotomy', 'splenostomy'], 'splen/o + ‎-ectomy‎.'),
          W('واژه‌ای بساز به معنی «برداشتن لوزه‌ها»', ['tonsill/o', '-ectomy'], ['-tomy', 'ot/o', '-itis'], 'tonsillectomy.'),
          S('املای انگلیسی «برداشتن آپاندیس» را بنویس', 'appendectomy', 'append/o + ‎-ectomy‎.', 'append…'),
          N('wb:sf')
        ]
      },
      {
        id: 'sf8', title: 'ترمیم، بخیه، تثبیت', icon: '🪡', items: [
          L('ترمیم و شکل‌دهی', `${fig('rhinoplasty', ['پیش و پس از جراحی بینی'], 'rhinoplasty')}${e('-plasty')} یعنی ترمیم یا بازسازی با جراحی: ${e('rhinoplasty')} جراحی ترمیمی بینی و ${e('angioplasty')} ترمیم رگ است.`),
          L('بخیه و تثبیت', `${fig('sutures', ['چند نوع بخیه'], 'sutures')}${e('-rrhaphy')} یعنی بخیه زدن (${e('myorrhaphy')}، بخیه عضله) و ${e('-pexy')} یعنی ثابت کردن عضو در جایش (${e('nephropexy')}، تثبیت کلیه افتاده).${memo('‎-pexy‎ را با «پیچ» به خاطر بسپار؛ عضو را سر جایش پیچ می‌کنند.')}`),
          M(`${e('<b>rhinoplasty</b>')} یعنی…`, ['جراحی ترمیمی بینی', 'برداشتن بینی', 'التهاب بینی', 'آبریزش بینی'], 'rhin/o + ‎-plasty‎.', null, F('rhinoplasty', [])),
          M('کدام پسوند یعنی بخیه زدن؟', ['-rrhaphy', '-rrhea', '-rrhage', '-pexy'], 'myorrhaphy یعنی بخیه عضله.', null, F('sutures', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['angioplasty', 'ترمیم رگ'], ['myorrhaphy', 'بخیه عضله'], ['nephropexy', 'تثبیت کلیه'], ['lithotripsy', 'سنگ‌شکنی']], 'جراحی‌های ترمیمی.'),
          T('suture هم به عمل بخیه زدن و هم به خود بخیه گفته می‌شود.', true, 'to suture یعنی دوختن لبه‌های زخم.'),
          B('خرد کردن سنگ با موج یا لیزر ___ است.', ['lithotripsy', 'lithotomy', 'lithiasis'], 'lith/o + ‎-tripsy‎.'),
          W('واژه‌ای بساز به معنی «ترمیم رگ»', ['angi/o', '-plasty'], ['-pexy', 'my/o', '-rrhaphy'], 'angioplasty.'),
          S('املای انگلیسی «تثبیت کلیه» را بنویس', 'nephropexy', 'nephr/o + ‎-pexy‎.', 'nephro…'),
          N('m2r:sf')
        ]
      },
      {
        id: 'sf9', title: 'صفت‌ها و متخصص‌ها', icon: '🎓', items: [
          L('صفت‌سازها', `${fig('adjective-suffixes', [], 'پسوندهای صفت‌ساز')}${e('-al')}، ${e('-ic')}، ${e('-ar')}، ${e('-ary')}، ${e('-ous')} و ${e('-eal')} همه یعنی «مربوط به». ${e('neuron')} صفتش ${e('neuronal')} و ${e('pelvis')} صفتش ${e('pelvic')} است.${fig('neuron', ['یاخته عصبی زیر میکروسکوپ'], 'neuron ← neuronal')}`),
          L('رشته و متخصص', `${fig('specialist-suffixes', [], 'پسوندهای رشته')}${fig('anesthesia-sites', ['جای تزریق بی‌حسی نخاعی و اپیدورال'], 'anesthesia ← anesthesiologist')}${e('-ole')} و ${e('-ule')} هم کوچک‌کننده‌اند: ${e('arteriole')} سرخرگ کوچک و ${e('venule')} سیاهرگ کوچک است.${memo('‎-iatrics‎ رشته است و ‎-ician‎ آدمِ آن رشته: pediatrics و pediatrician.')}`),
          M(`صفت ${e('pelvis')} کدام است؟`, ['pelvic', 'pelvical', 'pelvous', 'pelvary'], 'pelv/i + ‎-ic‎.', null, F('adjective-suffixes', [])),
          M(`${e('<b>pediatrician</b>')} کیست؟`, ['پزشک متخصص کودکان', 'پزشک پا', 'دانش کودکان', 'پزشک سالمندان'], 'ped/o یعنی کودک.', null, F('specialist-suffixes', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['geriatrics', 'طب سالمندان'], ['psychiatry', 'روان‌پزشکی'], ['arteriole', 'سرخرگ کوچک'], ['venule', 'سیاهرگ کوچک']], 'رشته‌ها و کوچک‌کننده‌ها.', F('small-vessels', [])),
          T('psychiatry و physiatry یک رشته‌اند.', false, 'psychiatry روان‌پزشکی و physiatry طب توان‌بخشی است.'),
          B('پزشکی که بیهوشی می‌دهد ___ است.', ['anesthesiologist', 'anesthesia', 'analgesic'], 'an- + esthesi/o + ‎-logist‎.', F('anesthesia-sites', [])),
          W('واژه‌ای بساز به معنی «طب سالمندان»', ['ger/o', '-iatrics'], ['ped/o', '-logist', '-ician'], 'geriatrics.'),
          S('صفت «neuron» را بنویس', 'neuronal', 'neuron + ‎-al‎.', 'neuro…'),
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
    id: 'pf', sym: 'Pf', name: 'پیشوندها', short: 'پیشوندها', sub: 'پیشوندهای عدد و زمان، جا و جهت، راه‌های تزریق، نفی و ضد، جفت‌های متضاد، حرکت‌ها و وضعیت‌های بیمار',
    color: '#C9A12C', dark: '#8A6A00', light: '#FFF6D8',
    levels: ['عدد و زمان', 'جا و جهت', 'نفی، متضاد و حرکت'],
    gens: EA.genIds('pf'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'pf1', title: 'یک، دو، سه، چهار', icon: '🔢', items: [
          L('پیشوندهای عدد', `${fig('number-prefixes', [], 'پیشوندهای عدد')}پیشوندهای ${e('uni-')} و ${e('mono-')} یک، ${e('bi-')} و ${e('di-')} دو، ${e('tri-')} سه و ${e('quadri-')} و ${e('tetra-')} چهار است. ${e('unilateral')} یعنی یک‌طرفه و ${e('bilateral')} یعنی دوطرفه.`),
          L('دو لخت، سه لخت', `${fig('heart-valves', ['دریچه سه‌لختی و دولختی'], 'دریچه‌های قلب از بالا')}دریچه سمت راست قلب سه لخت دارد: ${e('<b>tricuspid</b>')}. دریچه سمت چپ دو لخت دارد: ${e('<b>bicuspid</b>')}.${memo('دریچه tri سمت راست با ریه سه‌لوبی راست؛ bi سمت چپ با ریه دولوبی چپ. همان ترفند!')}`),
          M(`${e('<b>bilateral</b>')} یعنی…`, ['دوطرفه', 'یک‌طرفه', 'میان دو طرف', 'پشت'], 'bi- یعنی دو.', null, F('number-prefixes', [])),
          M('دریچه سه‌لختی قلب کدام است؟', ['tricuspid', 'bicuspid', 'unicuspid', 'quadricuspid'], 'tri- یعنی سه.', null, F('heart-valves', [])),
          P('هر پیشوند را به عددش وصل کن', [['uni-', 'یک'], ['bi-', 'دو'], ['tri-', 'سه'], ['quadri-', 'چهار']], 'پیشوندهای عدد.'),
          T('quadriplegia یعنی فلج هر چهار اندام.', true, 'quadri- + ‎-plegia‎.'),
          B('عضله سه‌سر بازو ___ نام دارد.', ['triceps', 'biceps', 'quadriceps'], 'tri- یعنی سه.'),
          W('واژه‌ای بساز به معنی «یک‌طرفه»', ['uni-', 'later/o', '-al'], ['bi-', 'tri-', '-itis'], 'unilateral.'),
          S('املای انگلیسی «دوطرفه» را بنویس', 'bilateral', 'bi- + later/o + ‎-al‎.', 'bilat…'),
          N('m2r:pf')
        ]
      },
      {
        id: 'pf2', title: 'نیم، چند، همه، هیچ', icon: '◐', items: [
          L('نیمه‌ها', `${fig('hemispheres', ['نیمکره راست و چپ مغز'], 'hemisphere')}پیشوندهای ${e('hemi-')} و ${e('semi-')} یعنی نیم. هر نیمه مغز یک ${e('<b>hemisphere</b>')} است و ${e('<b>hemiplegia</b>')} یعنی فلج یک نیمه بدن.${fig('hemiplegia', ['فلج نیمه سبز بدن'], 'hemiplegia')}`),
          L('زیاد، همه و هیچ', `${tbl([['پیشوند', 'معنی', 'نمونه'], [e('multi-, poly-'), 'چند، زیاد', e('multicellular')], [e('pan-'), 'همه', e('pancytopenia')], [e('primi-'), 'نخستین', e('primigravida')], [e('nulli-'), 'هیچ', e('nullipara')]])}${fig('fungus', ['یک قارچ چندیاخته‌ای'], 'multicellular')}${memo('پیشوند pan- مثل «پاندمی»، همه‌گیر؛ یعنی همه.')}`),
          M(`${e('<b>hemiplegia</b>')} یعنی…`, ['فلج یک نیمه بدن', 'فلج هر چهار اندام', 'نیمه‌کور', 'سردرد یک‌طرفه'], 'hemi- یعنی نیم.', null, F('hemiplegia', [])),
          M(`${e('<b>pancytopenia</b>')} یعنی…`, ['کمبود همه یاخته‌های خون', 'کمبود گلبول سفید', 'زیادی گلبول‌ها', 'کم‌خونی'], 'pan- همه، cyt/o یاخته، ‎-penia‎ کمبود.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['hemi-', 'نیم'], ['multi-', 'چند'], ['pan-', 'همه'], ['nulli-', 'هیچ']], 'پیشوندهای اندازه.'),
          T('primigravida زنی است که برای نخستین بار باردار شده است.', true, 'primi- یعنی نخستین.'),
          B('موجود ساخته‌شده از یاخته‌های بسیار ___ است.', ['multicellular', 'unicellular', 'intracellular'], 'multi- + cellul/o + ‎-ar‎.', F('fungus', [])),
          M('هر نیمه مغز را چه می‌نامند؟', ['hemisphere', 'semicircle', 'hemiplegia', 'bilateral'], 'hemi- + sphere.', null, F('hemispheres', [])),
          S('املای انگلیسی «پرادراری» را بنویس', 'polyuria', 'poly- + ur/o + ‎-ia‎.', 'poly…'),
          N('t2f:pf')
        ]
      },
      {
        id: 'pf3', title: 'پیش و پس', icon: '⏳', items: [
          L('پیش، حین، پس', `${fig('time-prefixes', [], 'پیشوندهای زمان')}پیشوندهای ${e('pre-')} و ${e('ante-')} یعنی پیش و ${e('post-')} یعنی پس: ${e('preoperative')} پیش از عمل و ${e('postoperative')} پس از عمل. ${e('neo-')} یعنی نو؛ ${e('neonate')} نوزاد است.${fig('synapse', ['یاخته پیش‌سیناپسی، سیناپس و یاخته پس‌سیناپسی'], 'presynaptic و postsynaptic')}`),
          L('پیش از تولد', `${fig('fetal-ultrasound', ['سونوگرافی جنین در هفته ۱۵'], 'مراقبت prenatal با سونوگرافی')}${wb('pre-', 'nat/o', '-al')} ← پیش از تولد${pearl('در مطالعه موردی شکستگی گردن ران مرجع، به Esther پیش از عمل (preoperative) مسکن تزریق شد و پس از عمل (postoperative) ران او در حالت abduction نگه داشته شد.')}`),
          M(`${e('<b>postoperative</b>')} یعنی…`, ['پس از عمل', 'پیش از عمل', 'حین عمل', 'بدون عمل'], 'post- یعنی پس.', null, F('time-prefixes', [])),
          M(`${e('<b>neonate</b>')} کیست؟`, ['نوزاد در ۴ هفته نخست', 'زن باردار', 'کودک دبستانی', 'سالمند'], 'neo- یعنی نو.'),
          O('مراحل را به ترتیب زمان بچین', ['preoperative', 'operation', 'postoperative'], 'پیش، حین، پس.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['pre-', 'پیش'], ['post-', 'پس'], ['neo-', 'نو'], ['primi-', 'نخستین']], 'پیشوندهای زمان.'),
          T('antecubital یعنی پشت آرنج.', false, 'ante- یعنی جلو؛ antecubital یعنی جلوی آرنج.'),
          B('مراقبت‌های دوران بارداری را مراقبت ___ می‌گویند.', ['prenatal', 'postnatal', 'neonatal'], 'pre- + nat/o + ‎-al‎.', F('fetal-ultrasound', [])),
          S('املای انگلیسی «پیش از تولد» را بنویس', 'prenatal', 'pre- + nat/o + ‎-al‎.', 'pre…'),
          N('wb:pf')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'pf4', title: 'درون، بیرون، پیرامون', icon: '⭕', items: [
          L('جای چیزها', `${fig('position-prefixes', [], 'پیشوندهای جا')}پیشوندهای ${e('intra-')} و ${e('endo-')} درون، ${e('extra-')} و ${e('exo-')} بیرون، ${e('peri-')} و ${e('circum-')} پیرامون، ${e('inter-')} میان، ${e('epi-')} روی، ${e('sub-')} و ${e('hypo-')} زیر، ${e('retro-')} پشت و ${e('trans-')} از میان است.`),
          L('درون‌ریز و برون‌ریز', `${vs(['endocrine', 'درون‌ریز؛ هورمون به خون می‌ریزد'], ['exocrine', 'برون‌ریز؛ ترشح از راه مجرا'])}${wb('peri-', 'odont/o', '-al')} ← پیرامون دندان${wb('inter-', 'cost/o', '-al')} ← میان دنده‌ها${memo('پیشوند intra- «اینترا» درون است و inter- «اینتر» میان؛ یک a جای را عوض می‌کند.')}`),
          M(`${e('<b>intercostal</b>')} یعنی…`, ['میان دنده‌ها', 'درون دنده', 'زیر دنده', 'پیرامون دنده'], 'inter- یعنی میان.', null, F('position-prefixes', [])),
          M(`${e('<b>epidermis</b>')} یعنی…`, ['لایه روی پوست', 'زیر پوست', 'درون پوست', 'پیرامون پوست'], 'epi- یعنی روی.'),
          P('هر پیشوند را به معنی‌اش وصل کن', [['intra-', 'درون'], ['inter-', 'میان'], ['peri-', 'پیرامون'], ['retro-', 'پشت']], 'پیشوندهای جا.'),
          T('pericardium کیسه‌ای پیرامون قلب است.', true, 'peri- + cardi/o.'),
          W('واژه‌ای بساز به معنی «میان دنده‌ای»', ['inter-', 'cost/o', '-al'], ['intra-', 'peri-', '-itis'], 'intercostal.'),
          B('بارداری بیرون از رحم را بارداری ___ می‌گویند.', ['ectopic', 'endocrine', 'intrauterine'], 'ecto- یعنی بیرون، نابه‌جا.'),
          S('املای انگلیسی «پشت صفاقی» را بنویس', 'retroperitoneal', 'retro- + peritone/o + ‎-al‎.', 'retro…'),
          N('wb:pf')
        ]
      },
      {
        id: 'pf5', title: 'راه‌های تزریق', icon: '💉', items: [
          L('سوزن کجا می‌رود؟', `${fig('injection-routes', [], 'راه‌های تزریق')}${e('<b>intradermal (ID)</b>')} درون پوست، ${e('<b>subcutaneous</b>')} زیر پوست در چربی، ${e('<b>intramuscular (IM)</b>')} درون عضله و ${e('<b>intravenous (IV)</b>')} درون سیاهرگ است.`),
          L('در منابع مرجع', `${fig('injections', ['تزریق وریدی، درون‌جلدی و عضلانی'], 'سه نوع تزریق')}${e('<b>parenteral</b>')} یعنی دادن دارو از هر راهی جز دستگاه گوارش، معمولاً تزریق. ${e('<b>hypodermic</b>')} یعنی زیرپوستی؛ سوزن تزریق را هم ${e('hypodermic needle')} می‌گویند.${memo('ven/o را با «ون»، رگ آبی پشت دست، به خاطر بسپار.')}`),
          M('تزریق درون عضله را چه می‌نامند؟', ['intramuscular', 'intravenous', 'intradermal', 'subcutaneous'], 'intra- + muscul/o + ‎-ar‎.', null, F('injection-routes', [])),
          M(`${e('<b>subcutaneous</b>')} یعنی…`, ['زیر پوست', 'درون پوست', 'درون سیاهرگ', 'روی پوست'], 'sub- یعنی زیر.', null, F('injections', [])),
          P('هر اختصار را به راه تزریق وصل کن', [['IV', 'درون سیاهرگ'], ['IM', 'درون عضله'], ['ID', 'درون پوست'], ['subcut', 'زیر پوست']], 'راه‌های تزریق.'),
          T('parenteral یعنی دارو از راه دهان.', false, 'parenteral یعنی هر راهی جز گوارش؛ از راه دهان po است.'),
          O('از سطحی‌ترین تا عمیق‌ترین تزریق بچین', ['intradermal', 'subcutaneous', 'intramuscular'], 'پوست، چربی، عضله.'),
          W('واژه‌ای بساز به معنی «داخل وریدی»', ['intra-', 'ven/o', '-ous'], ['sub-', 'dermat/o', '-al'], 'intravenous.'),
          S('املای انگلیسی «زیرجلدی» را بنویس', 'subcutaneous', 'sub- + cutane/o + ‎-ous‎.', 'subcut…'),
          N('ab:pf')
        ]
      },
      {
        id: 'pf6', title: 'جهت‌های بدن', icon: '🧭', items: [
          L('وضعیت آناتومیک', `${fig('anatomic-position', ['ایستاده، رو به جلو، کف دست‌ها رو به جلو'], 'anatomic position')}همه جهت‌ها از ${e('<b>anatomic position</b>')} سنجیده می‌شوند: ایستاده، رو به جلو، دست‌ها کنار بدن و کف دست‌ها رو به جلو.`),
          L('جفت‌جهت‌ها', `${fig('direction-terms', [], 'جهت‌ها روی بدن')}${tbl([['جهت', 'معنی'], [e('superior / inferior'), 'بالا / پایین'], [e('anterior / posterior'), 'جلو / پشت'], [e('medial / lateral'), 'به سوی خط میانی / پهلو'], [e('proximal / distal'), 'نزدیک / دور از تنه']])}${fig('transection', ['برش عرضی بدن'], 'transection: برش عرضی')}${memo('proximal مثل proximity، نزدیکی؛ distal مثل distance، دوری.')}`),
          M('جهتی که به سوی سر است…', ['superior', 'inferior', 'distal', 'lateral'], 'superior یعنی بالایی.', null, F('direction-terms', [])),
          M('مچ دست نسبت به آرنج چگونه است؟', ['distal', 'proximal', 'medial', 'superior'], 'مچ از تنه دورتر است.'),
          P('هر جهت را به متضادش وصل کن', [['anterior', 'posterior'], ['medial', 'lateral'], ['proximal', 'distal'], ['superior', 'inferior']], 'جفت‌جهت‌ها.'),
          T('در وضعیت آناتومیک، کف دست‌ها رو به عقب است.', false, 'کف دست‌ها رو به جلوست.', F('anatomic-position', [])),
          B('جهت به سوی خط میانی بدن ___ است.', ['medial', 'lateral', 'distal'], 'medial.'),
          M('برش عرضی بدن یا عضو را چه می‌نامند؟', ['transection', 'bisection', 'dissection', 'resection'], 'trans- یعنی از میان.', null, F('transection', [])),
          S('املای انگلیسی «نزدیک به تنه» را بنویس', 'proximal', 'مثل proximity.', 'proxi…'),
          N('d2t:pf')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'pf7', title: 'نفی و ضد', icon: '🚫', items: [
          L('بدون و ضد', `${fig('negation-prefixes', [], 'پیشوندهای نفی')}پیشوندهای ${e('a-')} و ${e('an-')} یعنی بدون: ${e('afebrile')} بی‌تب و ${e('anemia')} کم‌خونی. ${e('anti-')} و ${e('contra-')} یعنی ضد: ${e('antibiotic')} و ${e('contraindication')}.`),
          L('بی‌اکسیژن', `${fig('anoxia-hand', ['دست با ناخن‌های کبود'], 'anoxia و cyanosis')}${wb('an-', 'ox/o', '-ia')} ← نبود اکسیژن<br>پیشوند ${e('dis-')} یعنی جدا (${e('dislocation')}، دررفتگی) و پیشوند ${e('de-')} یعنی برداشتن (${e('dehydration')}، از دست رفتن آب).${memo('پیش از واکه از an- و پیش از صامت از a- استفاده می‌شود؛ مثل anemia و afebrile.')}`),
          M(`${e('<b>afebrile</b>')} یعنی…`, ['بدون تب', 'تب بالا', 'ضد تب', 'پس از تب'], 'a- یعنی بدون.', null, F('negation-prefixes', [])),
          M(`${e('<b>anoxia</b>')} یعنی…`, ['نبود اکسیژن در بافت', 'اکسیژن زیاد', 'کبودی پوست', 'تنگی نفس'], 'an- + ox/o + ‎-ia‎.', null, F('anoxia-hand', [])),
          P('هر واژه را به معنی‌اش وصل کن', [['antibiotic', 'ضد باکتری'], ['contraindication', 'منع مصرف'], ['dislocation', 'دررفتگی'], ['dehydration', 'کم‌آبی بدن']], 'نفی و ضد.'),
          T('contraindication یعنی وضعیتی که درمانی را ناروا یا خطرناک می‌کند.', true, 'contra- یعنی ضد.'),
          B('سوءتغذیه را ___ می‌گویند.', ['malnutrition', 'dysnutrition', 'antinutrition'], 'mal- یعنی بد.'),
          W('واژه‌ای بساز به معنی «نبود اکسیژن»', ['an-', 'ox/o', '-ia'], ['anti-', 'hyper-', '-itis'], 'anoxia.'),
          S('املای انگلیسی «بدون تب» را بنویس', 'afebrile', 'a- + febrile.', 'afeb…'),
          N('t2f:pf')
        ]
      },
      {
        id: 'pf8', title: 'جفت‌های متضاد', icon: '↔️', items: [
          L('متضادها', `${fig('opposite-prefixes', [], 'پیشوندهای متضاد')}بسیاری از پیشوندها جفت متضاد دارند: ${e('brady-')} کند و ${e('tachy-')} تند، ${e('hypo-')} کم و ${e('hyper-')} زیاد، ${e('eu-')} خوب و ${e('dys-')} بد.`),
          L('کوچک و بزرگ شدن', `${fig('atrophy-hypertrophy', ['A: تحلیل عضله، B: بزرگ شدن عضله'], 'atrophy و hypertrophy')}${vs(['atrophy', 'تحلیل رفتن؛ بدون رشد'], ['hypertrophy', 'بزرگ شدن؛ رشد زیاد'])}${vs(['bradycardia', 'ضربان کمتر از ۶۰'], ['tachycardia', 'ضربان تند'])}${memo('tachy مثل تاکسی تند می‌رود؛ brady مثل «برادر کوچک» آهسته.')}`),
          M(`${e('<b>tachycardia</b>')} یعنی…`, ['تندی ضربان قلب', 'کندی ضربان قلب', 'بزرگی قلب', 'درد قلب'], 'tachy- یعنی تند.', null, F('opposite-prefixes', [])),
          M('تحلیل رفتن و کوچک شدن عضله را چه می‌نامند؟', ['atrophy', 'hypertrophy', 'dystrophy', 'eutrophy'], 'a- + ‎-trophy‎.', null, F('atrophy-hypertrophy', [])),
          P('هر پیشوند را به متضادش وصل کن', [['brady-', 'tachy-'], ['hypo-', 'hyper-'], ['endo-', 'exo-'], ['micro-', 'macro-']], 'جفت‌های متضاد.'),
          T('hypoglycemia یعنی قند خون بالا.', false, 'hypo- یعنی کم؛ قند خون بالا hyperglycemia است.'),
          B('دشواری بلع را ___ می‌گویند.', ['dysphagia', 'euphagia', 'aphagia'], 'dys- + ‎-phagia‎.'),
          W('واژه‌ای بساز به معنی «قند خون بالا»', ['hyper-', 'glyc/o', '-emia'], ['hypo-', 'brady-', '-itis'], 'hyperglycemia.'),
          S('املای انگلیسی «کندی ضربان قلب» را بنویس', 'bradycardia', 'brady- + cardi/o + ‎-ia‎.', 'brady…'),
          N('wb:pf')
        ]
      },
      {
        id: 'pf9', title: 'حرکت و وضعیت', icon: '🤸', items: [
          L('دور و نزدیک', `${fig('abduction', ['دور شدن و نزدیک شدن پا'], 'abduction و adduction')}پیشوند ${e('ab-')} یعنی دور از و پیشوند ${e('ad-')} یعنی به سوی: ${e('<b>abduction</b>')} دور کردن اندام از خط میانی و ${e('<b>adduction</b>')} نزدیک کردن آن است.${fig('joint-movements', ['حرکت‌های مفصل'], 'حرکت‌های مفصل‌های متحرک')}`),
          L('وضعیت‌های بیمار', `${fig('patient-positions', [], 'وضعیت‌های بیمار')}${e('supine')} طاق‌باز، ${e('prone')} دمر، ${e('Fowler')} نیمه‌نشسته و ${e('Trendelenburg')} سر پایین‌تر از پاست.${memo('supine را با «سوپ» به خاطر بسپار: کاسه سوپ رو به بالا؛ prone رو به پایین.')}`),
          M('نزدیک کردن اندام به خط میانی بدن…', ['adduction', 'abduction', 'flexion', 'extension'], 'ad- یعنی به سوی.', null, F('abduction', [])),
          M('بیماری که طاق‌باز و رو به بالا خوابیده در وضعیت … است.', ['supine', 'prone', 'Fowler', 'Sims'], 'supine.', null, F('patient-positions', [])),
          P('هر حرکت را به معنی‌اش وصل کن', [['flexion', 'خم کردن'], ['extension', 'باز کردن'], ['abduction', 'دور کردن'], ['adduction', 'نزدیک کردن']], 'حرکت‌ها.', F('joint-movements', [])),
          T('در وضعیت Trendelenburg سر بیمار پایین‌تر از پاهاست.', true, 'تخت شیب‌دار و سر پایین.'),
          B('بیماری که روی شکم و رو به پایین خوابیده، در وضعیت ___ است.', ['prone', 'supine', 'Fowler'], 'prone.'),
          O('از خوابیده تا نشسته بچین', ['supine', 'Fowler', 'upright'], 'طاق‌باز، نیمه‌نشسته، ایستاده.'),
          S('املای انگلیسی «دور کردن از خط میانی» را بنویس', 'abduction', 'ab- + duct.', 'abd…'),
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
    id: 'rl', sym: 'Rl', name: 'قواعد و تله‌ها', short: 'قواعد', sub: 'جمع بستن واژه‌های لاتین و یونانی، اختصار و سرواژه، نام‌واژه‌ها، هم‌آواها، تله‌های املایی و شکستن واژه‌های بلند',
    color: '#E2683C', dark: '#9A3F1E', light: '#FDEDE5',
    levels: ['جمع بستن', 'کوته‌نوشت و هم‌آوا', 'تله‌ها و واژه‌های بلند'],
    gens: EA.genIds('rl'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'rl1', title: 'جمع ساده لاتین', icon: '🔤', items: [
          L('سه قاعده نخست', `${fig('plural-rules', [], 'قاعده‌های جمع')}واژه‌های لاتین و یونانی با قاعده خودشان جمع بسته می‌شوند. سه قاعده نخست:${tbl([['مفرد', 'جمع', 'نمونه'], [e('-a'), e('-ae'), e('vertebra → vertebrae')], [e('-us'), e('-i'), e('bronchus → bronchi')], [e('-um'), e('-a'), e('bacterium → bacteria')]])}`),
          L('ستون مهره', `${fig('spine-vertebrae', ['A: یک مهره، B: ستون مهره'], 'vertebra و vertebrae')}هر استخوان ستون مهره یک ${e('<b>vertebra</b>')} است و ستون مهره بزرگسال ۲۶ ${e('<b>vertebrae</b>')} دارد.${memo('جمع ‎-ae‎ را «ای» بخوان: VER-teh-bray. جمع ‎-i‎ را «آی»: bronch-eye.')}`),
          M(`جمع ${e('<b>vertebra</b>')} کدام است؟`, ['vertebrae', 'vertebras', 'vertebri', 'vertebra'], '‎-a → -ae‎.', null, F('spine-vertebrae', [])),
          M(`جمع ${e('<b>bronchus</b>')} کدام است؟`, ['bronchi', 'bronchuses', 'bronchae', 'bronchia'], '‎-us → -i‎.', null, F('plural-rules', [])),
          P('هر واژه را به جمعش وصل کن', [['bursa', 'bursae'], ['fungus', 'fungi'], ['atrium', 'atria'], ['diverticulum', 'diverticula']], 'سه قاعده نخست.'),
          T('bacteria جمع bacterium است.', true, '‎-um → -a‎.'),
          B('جمع glomerulus ___ است.', ['glomeruli', 'glomerulae', 'glomeruluses'], '‎-us → -i‎.'),
          M(`پایان ${e('-i')} در واژه‌های جمع چطور خوانده می‌شود؟`, ['آی (eye)', 'ای (ee)', 'اِ (eh)', 'خوانده نمی‌شود'], 'calculi: KAL-kyoo-lye.'),
          S('جمع «bacterium» را بنویس', 'bacteria', '‎-um → -a‎.', 'bacter…'),
          N('sp:rl')
        ]
      },
      {
        id: 'rl2', title: 'جمع‌های x، is و on', icon: '🔠', items: [
          L('چهار قاعده دیگر', `${tbl([['مفرد', 'جمع', 'نمونه'], [e('-is'), e('-es'), e('diagnosis → diagnoses')], [e('-ix'), e('-ices'), e('appendix → appendices')], [e('-ax'), e('-aces'), e('thorax → thoraces')], [e('-nx'), e('-nges'), e('phalanx → phalanges')], [e('-on'), e('-a'), e('ganglion → ganglia')], [e('-en'), e('-ina'), e('lumen → lumina')], [e('-ma'), e('-mata'), e('carcinoma → carcinomata')]])}`),
          L('بندهای انگشت', `${fig('hand-phalanges', ['بندهای انگشت دست'], 'phalanx و phalanges')}هر بند انگشت یک ${e('<b>phalanx</b>')} است و جمعش ${e('<b>phalanges</b>')}.${fig('lumen', ['مجرای سرخرگ و سیاهرگ'], 'lumen و lumina')}${memo('x در پایان یعنی «c یا g بیاور و es بچسبان»: appendices، phalanges.')}`),
          M(`جمع ${e('<b>diagnosis</b>')} کدام است؟`, ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], '‎-is → -es‎.'),
          M(`جمع ${e('<b>phalanx</b>')} کدام است؟`, ['phalanges', 'phalanxes', 'phalanci', 'phalances'], '‎-nx → -nges‎.', null, F('hand-phalanges', [])),
          P('هر واژه را به جمعش وصل کن', [['appendix', 'appendices'], ['thorax', 'thoraces'], ['larynx', 'larynges'], ['ganglion', 'ganglia']], 'قاعده‌های x و on.'),
          T('جمع lumen، lumina است.', true, '‎-en → -ina‎.', F('lumen', [])),
          B('جمع metastasis ___ است.', ['metastases', 'metastasi', 'metastasises'], '‎-is → -es‎.'),
          M(`جمع ${e('<b>carcinoma</b>')} در شکل لاتین…`, ['carcinomata', 'carcinomae', 'carcinomi', 'carcinomum'], '‎-ma → -mata‎؛ carcinomas هم پذیرفته است.'),
          S('جمع «appendix» را بنویس', 'appendices', '‎-ix → -ices‎.', 'appendi…'),
          N('t2f:rl')
        ]
      },
      {
        id: 'rl3', title: 'استثناها', icon: '⚠️', items: [
          L('قاعده‌شکن‌ها', `${fig('plural-exceptions', [], 'استثناها و تلفظ')}بعضی واژه‌ها از قاعده پیروی نمی‌کنند: ${e('meatus')} همان ${e('meatus')} می‌ماند، ${e('femur')} می‌شود ${e('femora')} و ${e('corpus')} می‌شود ${e('corpora')}.${fig('femur', ['سر و گردن استخوان ران'], 'femur و femora')}`),
          L('عدد و اختصار', `با عدد، واحد اندازه جمع بسته نمی‌شود؛ پس می‌نویسیم ${e('7 cm')} و هرگز ${e('7 cms')} نمی‌نویسیم. اختصارهای حروف بزرگ با s کوچک جمع بسته می‌شوند: ${e('CVAs')}، ${e('WBCs')}.${pearl('در منابع مرجع آمده است: جمع انگلیسی، مثل carcinomas، هم روزبه‌روز پذیرفته‌تر می‌شود.')}${memo('meatus مثل «گوسفند» در انگلیسی است: یکی و چندتا هر دو sheep!')}`),
          M(`جمع ${e('<b>meatus</b>')} کدام است؟`, ['meatus', 'meati', 'meatae', 'meatuses'], 'استثنا؛ بدون تغییر.', null, F('plural-exceptions', [])),
          M(`جمع ${e('<b>femur</b>')} کدام است؟`, ['femora', 'femurs', 'femuri', 'femurae'], 'استثنای لاتین.', null, F('femur', [])),
          P('هر واژه را به جمعش وصل کن', [['corpus', 'corpora'], ['viscus', 'viscera'], ['iris', 'irides'], ['pons', 'pontes']], 'استثناها.'),
          T('درست است بنویسیم: The incision was 7 cms long.', false, 'با عدد، واحد جمع بسته نمی‌شود: 7 cm.'),
          B('جمع اختصار CVA ___ است.', ['CVAs', 'CVA\'s', 'CVAes'], 'اختصار حروف بزرگ با s کوچک، بی‌آپاستروف.'),
          M(`پایان ${e('-es')} در ${e('testes')} چطور خوانده می‌شود؟`, ['ایز (eez)', 'اِس (es)', 'آی (eye)', 'خوانده نمی‌شود'], 'test-EEZ.'),
          S('جمع «femur» را بنویس', 'femora', 'استثنا.', 'fem…'),
          N('f2t:rl')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'rl4', title: 'اختصار و سرواژه', icon: '🔡', items: [
          L('چهار نوع کوته‌نوشت', `${fig('word-kinds', [], 'اختصار، سرواژه، نام‌واژه و نماد')}${e('<b>abbreviation</b>')} حرف به حرف خوانده می‌شود (${e('CBC')}). ${e('<b>acronym</b>')} مثل یک واژه خوانده می‌شود (${e('AIDS')}). نمادها هم کوته‌نوشت‌اند: ${e('↑')} افزایش و ${e('↓')} کاهش.`),
          L('یک اختصار، چند معنی', `${tbl([['اختصار', 'معنی‌ها'], [e('AMA'), 'برخلاف توصیه پزشک؛ انجمن پزشکی آمریکا'], [e('MS'), 'ام‌اس؛ تنگی دریچه میترال'], [e('BM'), 'اجابت مزاج؛ مغز استخوان؛ شیر مادر و…']])}${pearl('در منابع مرجع آمده است: معنی یک اختصار را فقط بافت جمله روشن می‌کند.')}${memo('اگر اختصار دو معنی داشت، بافت جمله را بخوان؛ اگر باز شک داشتی، کامل بنویس.')}`),
          M(`${e('<b>AIDS</b>')} کدام نوع کوته‌نوشت است؟`, ['سرواژه (acronym)', 'نام‌واژه (eponym)', 'نماد', 'هم‌آوا'], 'مثل یک واژه خوانده می‌شود.', null, F('word-kinds', [])),
          M(`اختصار ${e('<b>MS</b>')} در پرونده یک بیمار قلبی بیشتر یعنی…`, ['mitral stenosis', 'multiple sclerosis', 'morphine sulfate', 'medical student'], 'بافت جمله معنی را تعیین می‌کند.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['CBC', 'شمارش کامل خون'], ['MRI', 'ام‌آرآی'], ['COPD', 'بیماری انسدادی مزمن ریه'], ['AMA', 'برخلاف توصیه پزشک']], 'اختصارها.'),
          T('نماد ↑ در شرح حال یعنی افزایش.', true, '↓ یعنی کاهش.'),
          B('واژه‌ای که از حرف اول چند واژه ساخته و مثل یک واژه خوانده می‌شود ___ است.', ['acronym', 'eponym', 'homonym'], 'مثل AIDS یا laser.'),
          M('بهترین کار وقتی معنی یک اختصار روشن نیست چیست؟', ['واژه را کامل بنویسی یا از نویسنده بپرسی', 'یک اختصار تازه بسازی', 'حدس بزنی', 'آن را حذف کنی'], 'هرگز اختصار من‌درآوردی ننویس.'),
          S('املای انگلیسی «سرواژه» را بنویس', 'acronym', 'acr/o + onym.', 'acro…'),
          N('ab:rl')
        ]
      },
      {
        id: 'rl5', title: 'نام‌واژه‌ها', icon: '👤', items: [
          L('نام آدم‌ها روی بیماری‌ها', `${fig('eponym-cards', [], 'نام‌واژه‌ها')}${e('<b>eponym</b>')} بیماری، نشانه یا ابزاری است که نام کاشف یا جایی را گرفته است: ${e('Alzheimer disease')}، ${e('Parkinson disease')}، ${e('Down syndrome')} و ${e('Lyme disease')}.`),
          L('با یا بی آپاستروف', `امروز می‌شود آپاستروف را برداشت: ${e("Alzheimer's disease")} یا ${e('Alzheimer disease')}؛ هر دو پذیرفته است.${pearl('در منابع مرجع آمده است: Lyme disease نام خود را از شهر Old Lyme در ایالت Connecticut گرفته که بیماری نخستین بار در ۱۹۷۵ آن‌جا گزارش شد.')}${memo('eponym = epi (روی) + onyma (نام)؛ نامی که روی چیزی گذاشته‌اند.')}`),
          M('نام‌واژه یعنی…', ['نامی برگرفته از یک شخص یا مکان', 'واژه‌ای با معنی متضاد', 'واژه‌ای هم‌آوا', 'اختصار چندحرفی'], 'eponym.', null, F('eponym-cards', [])),
          M('Lyme disease نام خود را از چه گرفته است؟', ['یک شهر', 'یک پزشک', 'یک کنه', 'یک آنتی‌بیوتیک'], 'Old Lyme, Connecticut.'),
          P('هر نام‌واژه را به معنی‌اش وصل کن', [['Alzheimer disease', 'زوال پیش‌رونده مغز'], ['Parkinson disease', 'لرزش و سفتی عضله'], ['Down syndrome', 'تریزومی ۲۱'], ['Apgar score', 'نمره نوزاد']], 'نام‌واژه‌ها.'),
          T('نمره Apgar وضعیت نوزاد را در دقیقه ۱ و ۵ پس از تولد می‌سنجد.', true, 'Virginia Apgar.'),
          B('نام دیگر Down syndrome ___ است.', ['trisomy 21', 'trisomy 18', 'monosomy X'], 'یک اختلال کروموزومی.'),
          M('کدام املا امروز پذیرفته است؟', ['هر دو: Parkinson disease و Parkinson\'s disease', 'فقط Parkinson\'s disease', 'فقط parkinsons disease', 'فقط PARKINSON'], 'آپاستروف را می‌شود برداشت.'),
          S('املای انگلیسی «نام‌واژه» را بنویس', 'eponym', 'epi + onym.', 'epo…'),
          N('d2t:rl')
        ]
      },
      {
        id: 'rl6', title: 'هم‌آوا، متضاد، مترادف', icon: '👯', items: [
          L('یک صدا، دو عضو', `${fig('ileum-ilium', [], 'ileum و ilium')}${e('<b>homonym</b>')} یعنی دو واژه با تلفظ یکسان و معنی متفاوت: ${e('ileum')} بخش پایانی روده باریک و ${e('ilium')} بال استخوان لگن است.${fig('pelvis', ['لگن، کمربند استخوانی'], 'ilium بخشی از لگن است')}`),
          L('متضاد و مترادف', `${e('<b>antonym</b>')} یعنی متضاد، مثل ${e('brady-')} و ${e('tachy-')}؛ و ${e('<b>synonym</b>')} یعنی هم‌معنی، مثل ${e('gastralgia')} و ${e('gastrodynia')}.${vs(['mnemonic', 'ترفند حفظ؛ m ساکت'], ['pneumonic', 'ریوی؛ p ساکت'])}${memo('ileum با e مثل enter/o (روده)؛ ilium با i مثل hip (لگن).')}`),
          M('بخش پایانی روده باریک کدام است؟', ['ileum', 'ilium', 'ileus', 'ilion'], 'ileum با e.', null, F('ileum-ilium', [])),
          M('gastralgia و gastrodynia نسبت به هم…', ['مترادف‌اند', 'متضادند', 'هم‌آوا هستند', 'نام‌واژه‌اند'], 'هر دو یعنی معده‌درد.'),
          P('هر اصطلاح را به معنی‌اش وصل کن', [['homonym', 'هم‌آوا'], ['antonym', 'متضاد'], ['synonym', 'مترادف'], ['eponym', 'نام‌واژه']], 'انواع واژه.'),
          T('ilium بخشی از استخوان لگن است.', true, 'ilium با i.', F('pelvis', [])),
          B('ترفند حفظ کردن را ___ می‌گویند.', ['mnemonic', 'pneumonic', 'eponym'], 'm اول خوانده نمی‌شود.'),
          M(`${e('<b>humerus</b>')} چیست؟`, ['استخوان بازو', 'خنده‌دار', 'استخوان ران', 'مایع بدن'], 'با humorous هم‌آواست.'),
          S('املای انگلیسی «استخوان بازو» را بنویس', 'humerus', 'با u، نه humorous.', 'hum…'),
          N('t2f:rl')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'rl7', title: 'یک حرف، یک معنی', icon: '🪤', items: [
          L('تله‌های هم‌صدا', `${fig('soundalikes', [], 'تله‌های هم‌آوا')}${e('dysphagia')} اختلال بلع است و ${e('dysphasia')} اختلال گفتار. ${e('palpation')} لمس با دست است و ${e('palpitation')} تپش قلب.`),
          L('اسم یا صفت؟', `${vs(['mucus', 'اسم: خود مخاط'], ['mucous', 'صفت: mucous membrane'])}${vs(['callus', 'پینه پوست یا استخوان'], ['callous', 'سخت؛ بی‌احساس'])}${vs(['afferent', 'آوران؛ به سوی مرکز'], ['efferent', 'وابران؛ دور از مرکز'])}${memo('dysphaGia با G مثل Gulp (قورت دادن)؛ dysphaSia با S مثل Speech.')}`),
          M('بیماری که در قورت دادن غذا مشکل دارد…', ['dysphagia', 'dysphasia', 'dysphoria', 'dyspnea'], '‎-phagia‎ یعنی خوردن و بلع.', null, F('soundalikes', [])),
          M('بیماری که می‌گوید قلبم تند و محکم می‌زند…', ['palpitation', 'palpation', 'pulsation', 'perforation'], 'palpitation یعنی تپش قلب.'),
          P('هر واژه را به معنی‌اش وصل کن', [['pruritus', 'خارش'], ['pleuritis', 'التهاب پرده جنب'], ['prostatic', 'مربوط به پروستات'], ['prosthetic', 'مصنوعی']], 'تله‌های هم‌صدا.'),
          T('mucus صفت است و mucous اسم.', false, 'برعکس: mucus اسم و mucous صفت است.'),
          B('پزشک شکم را با دست ___ می‌کند.', ['palpation', 'palpitation', 'pulsation'], 'لمس با انگشتان.'),
          M('afferent یعنی…', ['به سوی مرکز', 'دور از مرکز', 'میان دو مرکز', 'بی‌مرکز'], 'a مثل arrive.'),
          S('املای انگلیسی «اختلال گفتار» را بنویس', 'dysphasia', '‎-phasia‎ یعنی گفتار.', 'dysph…'),
          N('wb:rl')
        ]
      },
      {
        id: 'rl8', title: 'سه واژه شبیه', icon: '🎯', items: [
          L('peri، pero یا periton؟', `${fig('peri-pero', [], 'peritoneal، perineal، peroneal')}${e('<b>peritoneal</b>')} مربوط به صفاق، پرده درون شکم است. ${e('<b>perineal</b>')} مربوط به ناحیه میان دو پاست و ${e('<b>peroneal</b>')} مربوط به کناره بیرونی ساق.`),
          L('ترفند', `${pearl('در منابع مرجع آمده است: perINeal یعنی IN، میان دو پا؛ perONeal یعنی ON، روی ساق پا. این سه واژه از اشتباه‌های مشهور کادر درمان‌اند.')}${tbl([['واژه', 'جا'], [e('peritoneal'), 'پرده درون شکم'], [e('perineal'), 'میان دو پا'], [e('peroneal'), 'کناره ساق پا']])}`),
          M(`${e('<b>peroneal</b>')} مربوط به کجاست؟`, ['کناره بیرونی ساق پا', 'پرده درون شکم', 'ناحیه میان دو پا', 'پیرامون کلیه'], 'perONeal روی ساق.', null, F('peri-pero', [])),
          M('دیالیز با صفاق شکم را چه می‌نامند؟', ['peritoneal dialysis', 'perineal dialysis', 'peroneal dialysis', 'pericardial dialysis'], 'peritone/o یعنی صفاق.'),
          P('هر واژه را به جایش وصل کن', [['peritoneal', 'پرده درون شکم'], ['perineal', 'میان دو پا'], ['peroneal', 'کناره ساق'], ['pericardial', 'پیرامون قلب']], 'سه واژه شبیه.'),
          T('perineal و peroneal یک معنی دارند.', false, 'یکی میان دو پا و دیگری کناره ساق است.'),
          B('عصبی که در کناره ساق پا می‌گذرد عصب ___ است.', ['peroneal', 'perineal', 'peritoneal'], 'peroneal nerve.'),
          M('کدام واژه با ریشه صفاق ساخته شده است؟', ['retroperitoneal', 'perineal', 'peroneal', 'periodontal'], 'retro- + peritone/o + ‎-al‎.'),
          S('املای انگلیسی «صفاقی» را بنویس', 'peritoneal', 'peritone/o + ‎-al‎.', 'perito…'),
          N('m2r:rl')
        ]
      },
      {
        id: 'rl9', title: 'املا و واژه بلند', icon: '📏', items: [
          L('املاهای دشوار', `${fig('spelling-traps', [], 'املای دشوار')}${e('tonsillectomy')} دو l دارد، ${e('hemorrhage')} و ${e('diarrhea')} دو r و یک h، و ${e('ophthalmology')} هم ph دارد و هم th. واژه ${e('pruritus')} هم با u نوشته می‌شود، نه با i.`),
          L('بلندترین واژه', `${fig('word-breaker', [], 'شکستن واژه بلند')}واژه بلند را از آخر بخوان و تکه‌تکه کن. ${e('pneumonoultramicroscopic silicovolcanoconiosis')} بیماری ریه از گرد بسیار ریز سیلیس آتشفشانی است.${pearl('در منابع مرجع آمده است: این واژه را باید بعد از microscopic شکست تا خوانا شود.')}${memo('برای واژه بلند فقط سه سؤال بپرس: پسوندش چیست؟ پیشوندش چیست؟ ریشه‌هایش چیست؟')}`),
          M('کدام املا درست است؟', ['tonsillectomy', 'tonsilectomy', 'tonsilectommy', 'tonsillectommy'], 'دو l و یک m.', null, F('spelling-traps', [])),
          M('کدام املا درست است؟', ['hemorrhage', 'hemorage', 'hemmorhage', 'hemorhage'], 'دو r و یک h.'),
          P('هر بخش را به معنی‌اش وصل کن', [['ot/o', 'گوش'], ['rhin/o', 'بینی'], ['laryng/o', 'حنجره'], ['-logist', 'متخصص']], 'otorhinolaryngologist.', F('word-breaker', [])),
          T('pruritus با u نوشته می‌شود.', true, 'pruritis غلط رایج است.'),
          B('اختصار متخصص گوش و حلق و بینی ___ است.', ['ENT', 'EGD', 'EKG'], 'ear, nose and throat.'),
          O('بخش‌های otorhinolaryngologist را از اول بچین', ['ot/o', 'rhin/o', 'laryng/o', '-logist'], 'گوش، بینی، حنجره، متخصص.'),
          S('املای انگلیسی «اسهال» را بنویس', 'diarrhea', 'dia- + ‎-rrhea‎.', 'diar…'),
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
    id: 'hs', sym: 'Hs', name: 'در بیمارستان', short: 'بیمارستان', sub: 'پرونده پزشکی و یادداشت‌ها، محیط‌های درمان و رازداری، نام دارو، نسخه، دفعات و راه مصرف، اختصارهای ممنوع و تیم درمان',
    color: '#17A398', dark: '#0E6E66', light: '#E0F5F1',
    levels: ['پرونده و محیط درمان', 'دارو و نسخه', 'تیم درمان و گزارش‌ها'],
    gens: EA.genIds('hs'),
    lessons: [
      /* ================= سطح ۱ ================= */
      {
        id: 'hs1', title: 'پرونده پزشکی', icon: '🗂️', items: [
          L('بخش‌های پرونده', `${fig('record-parts', [], 'بخش‌های پرونده')}${e('<b>medical record</b>')} یا chart سند قانونی همه مراقبت‌های بیمار است: ${e('history and physical (H&P)')}، دستورهای پزشک، یادداشت پرستار، ${e('progress notes')}، گزارش عمل و ${e('discharge summary')}.`),
          L('از کاغذ تا رایانه', `${fig('records-room', ['کارشناس مدارک پزشکی'], 'بایگانی پرونده‌ها')}امروز بیشتر پرونده‌ها ${e('<b>electronic health record (EHR)</b>')} هستند؛ با رایانه یا تبلت پر می‌شوند و میان کادر درمان به اشتراک گذاشته می‌شوند.${memo('برگه H&P روز اول، progress notes هر روز و discharge summary روز آخر نوشته می‌شود.')}`),
          M('کدام بخش پرونده خلاصه کل دوره بستری است؟', ['discharge summary', 'history and physical', 'progress note', "physician's orders"], 'هنگام ترخیص نوشته می‌شود.', null, F('record-parts', [])),
          M(`اختصار ${e('<b>H&P</b>')} یعنی…`, ['شرح حال و معاینه', 'فشار خون و نبض', 'سابقه و پیش‌آگهی', 'بیمارستان و داروخانه'], 'history and physical.'),
          O('این برگه‌ها را به ترتیب زمان بستری بچین', ['history and physical', 'progress note', 'discharge summary'], 'پذیرش، هر روز، ترخیص.'),
          P('هر بخش را به نویسنده یا کارش وصل کن', [['operative report', 'جراح'], ["nurse's notes", 'علائم حیاتی روزانه'], ['consultation report', 'پزشک مشاور'], ['informed consent', 'امضای بیمار']], 'بخش‌های پرونده.'),
          T('پرونده پزشکی یک سند قانونی است.', true, 'هر برگه باید کامل و امضاشده باشد.', F('records-room', [])),
          B('پرونده دیجیتال را ___ می‌گویند.', ['EHR', 'H&P', 'ROS'], 'electronic health record.'),
          S('املای انگلیسی «پرونده» (chart) را بنویس', 'chart', 'medical record.', 'ch…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs2', title: 'زبان یادداشت‌ها', icon: '📝', items: [
          L('یک یادداشت واقعی', `${fig('chart-note', [], 'یادداشت اورژانس')}یادداشت‌ها پر از اختصارند: ${e('y/o')} ساله، ${e('c/o')} شاکی از، ${e('SOB')} تنگی نفس، ${e('R/O')} رد کردن احتمال و ${e('CXR')} عکس قفسه سینه.`),
          L('بخش‌های شرح حال', `${tbl([['اختصار', 'معنی'], [e('CC'), 'شکایت اصلی'], [e('HPI'), 'شرح بیماری فعلی'], [e('PMHx'), 'سابقه پزشکی'], [e('ROS'), 'مرور دستگاه‌ها'], [e('HEENT'), 'سر، چشم، گوش، بینی، گلو'], [e('WNL'), 'در محدوده طبیعی']])}${pearl('در یادداشت اورژانس مرجع، مردی ۶۸ ساله با درد قفسه سینه و SOB آمده و برایش R/O pneumonia نوشته شده است.')}`),
          M(`${e('<b>c/o</b>')} در یادداشت یعنی…`, ['شاکی از', 'مراقبت از', 'به‌جای', 'در کنار'], 'complaining of.', null, F('chart-note', [])),
          M(`${e('<b>R/O pneumonia</b>')} یعنی…`, ['احتمال سینه‌پهلو باید رد یا تأیید شود', 'سینه‌پهلو قطعی است', 'سینه‌پهلو درمان شد', 'سینه‌پهلوی راست'], 'rule out.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['SOB', 'تنگی نفس'], ['WNL', 'در محدوده طبیعی'], ['NKDA', 'حساسیت دارویی ندارد'], ['Hx', 'سابقه']], 'اختصارهای یادداشت.'),
          T('HEENT یعنی سر، چشم، گوش، بینی و گلو.', true, 'head, eyes, ears, nose, throat.'),
          B('شکایت اصلی بیمار با اختصار ___ نوشته می‌شود.', ['CC', 'Dx', 'Tx'], 'chief complaint.'),
          M(`${e('<b>Dx</b>')} و ${e('<b>Tx</b>')} یعنی…`, ['تشخیص و درمان', 'درمان و تشخیص', 'دارو و آزمایش', 'سابقه و معاینه'], 'diagnosis و treatment.'),
          S('اختصار «تنگی نفس» را بنویس', 'SOB', 'shortness of breath.', 'S…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs3', title: 'محیط درمان و رازداری', icon: '🏥', items: [
          L('کجا درمان می‌شوند؟', `${fig('care-settings', [], 'محیط‌های درمان')}بیمارستان عمومی (${e('acute care')}) برای درمان کوتاه‌مدت است، ${e('long-term care')} برای مراقبت طولانی، ${e('ambulatory care')} بدون بستری شبانه و ${e('<b>hospice</b>')} برای بیماران در پایان زندگی و خانواده‌شان.`),
          L('رازداری', `${e('<b>confidentiality</b>')} یعنی همه اطلاعات بیمار محرمانه است و فقط با اجازه کتبی خودش داده می‌شود. در آمریکا قانون ${e('HIPAA')} از این اطلاعات محافظت می‌کند.${pearl('در منابع مرجع آمده است: هر کسی که با واژه‌های پزشکی کار می‌کند، باید رازداری را کاملاً بفهمد و رعایت کند.')}${memo('واژه ambulatory از ambulate، راه رفتن، می‌آید: بیمار سرپاست و شب در بیمارستان نمی‌ماند.')}`),
          M('مراقبتی که نیاز به بستری شبانه ندارد…', ['ambulatory care', 'acute care', 'long-term care', 'hospice'], 'سرپایی.', null, F('care-settings', [])),
          M('hospice برای چه کسانی است؟', ['بیماران در پایان زندگی و خانواده‌شان', 'نوزادان نارس', 'ورزشکاران آسیب‌دیده', 'بیماران سرپایی'], 'مراقبت حمایتی.'),
          P('هر محیط را به کارش وصل کن', [['acute care hospital', 'درمان کوتاه‌مدت'], ['long-term care', 'مراقبت طولانی'], ['rehabilitation', 'توان‌بخشی'], ['home health care', 'مراقبت در خانه']], 'محیط‌های درمان.'),
          T('اطلاعات بیمار را می‌شود بدون اجازه او به هر کسی داد.', false, 'اطلاعات محرمانه است؛ اجازه کتبی بیمار لازم است.'),
          B('قانون حفاظت از اطلاعات سلامت در آمریکا ___ نام دارد.', ['HIPAA', 'ICD', 'EHR'], 'Health Insurance Portability and Accountability Act.'),
          M('بیمارستان روان‌پزشکی نمونه کدام محیط است؟', ['specialty care hospital', 'ambulatory care', 'home health care', 'hospice'], 'برای بیماری‌های مشخص.'),
          S('املای انگلیسی «رازداری» را بنویس', 'confidentiality', 'confidential + ‎-ity‎.', 'confiden…'),
          N('d2t:hs')
        ]
      },
      /* ================= سطح ۲ ================= */
      {
        id: 'hs4', title: 'سه نام یک دارو', icon: '💊', items: [
          L('شیمیایی، ژنریک، تجاری', `${fig('drug-names', [], 'سه نام دارو')}هر دارو یک ${e('<b>chemical name</b>')} بلند، فقط یک ${e('<b>generic name</b>')} (مثل ibuprofen) و یک یا چند ${e('<b>brand name</b>')} (مثل Advil و Motrin) دارد.`),
          L('با نسخه یا بی‌نسخه', `${fig('pharmacy', ['داروخانه، داروساز و داروشناسی'], 'pharmacy، pharmacist و pharmacology')}داروی ${e('<b>OTC</b>')} بدون نسخه فروخته می‌شود، مثل ${e('aspirin')}. داروهای اعتیادآور را ${e('controlled substance')} می‌نامند و از ${e('Schedule I')} تا ${e('V')} دسته‌بندی می‌کنند.${memo('نام generic یکی است و عمومی؛ brand چندتاست و مال شرکت‌ها.')}`),
          M('هر دارو چند نام ژنریک دارد؟', ['فقط یکی', 'دو تا', 'به تعداد شرکت‌ها', 'هیچ'], 'generic name یکتاست.', null, F('drug-names', [])),
          M(`${e('<b>Advil</b>')} کدام نوع نام است؟`, ['نام تجاری', 'نام ژنریک', 'نام شیمیایی', 'نام علمی'], 'نام تجاری ibuprofen.'),
          P('هر واژه را به معنی‌اش وصل کن', [['pharmacology', 'داروشناسی'], ['pharmacist', 'داروساز'], ['over-the-counter', 'بدون نسخه'], ['analgesic', 'مسکن']], 'واژه‌های دارو.', F('pharmacy', [])),
          T('داروی ژنریک معمولاً ارزان‌تر از داروی با نام تجاری است.', true, 'به گفته مرجع.'),
          B('داروی بدون نسخه را با اختصار ___ نشان می‌دهند.', ['OTC', 'NPO', 'PRN'], 'over-the-counter.'),
          M('داروهای Schedule I…', ['بیشترین احتمال اعتیاد را دارند و مصرف پزشکی پذیرفته ندارند', 'کمترین احتمال اعتیاد را دارند', 'بدون نسخه‌اند', 'فقط ویتامین‌اند'], 'مثل هروئین؛ Schedule V کمترین است.'),
          S('املای انگلیسی «مسکن» را بنویس', 'analgesic', 'an- + ‎-algesia‎ + ‎-ic‎.', 'analg…'),
          N('t2f:hs')
        ]
      },
      {
        id: 'hs5', title: 'خواندن نسخه', icon: '📃', items: [
          L('بخش‌های نسخه', `${fig('prescription-anatomy', [], 'یک نسخه')}${e('Rx')} یعنی «بگیر»، پس از آن نام و مقدار دارو می‌آید. ${e('Sig')} دستور روی برچسب است: ${e('i po tid')} یعنی یک قرص، خوراکی، روزی سه بار. ${e('Disp #30')} یعنی ۳۰ عدد بده.`),
          L('راه مصرف', `${fig('route-abbr', [], 'اختصارهای راه مصرف')}${e('po')} از لاتین per os یعنی از راه دهان، ${e('SL')} زیر زبان، ${e('IV')} درون سیاهرگ، ${e('IM')} درون عضله، ${e('gtt')} قطره و ${e('NPO')} یعنی چیزی از راه دهان نخورد.${memo('اختصار OD چشم راست و OS چشم چپ است؛ ولی امروز بهتر است کامل بنویسی: right eye.')}`),
          M(`${e('<b>i po tid</b>')} یعنی…`, ['یک قرص، خوراکی، روزی سه بار', 'یک قرص، تزریقی، روزی دو بار', 'سه قرص، خوراکی، یک بار', 'یک قطره، چشم چپ'], 'i یک، po خوراکی، tid سه بار.', null, F('prescription-anatomy', [])),
          M(`${e('<b>NPO</b>')} یعنی…`, ['چیزی از راه دهان نخورد', 'در صورت نیاز', 'پس از غذا', 'هنگام خواب'], 'nothing by mouth؛ مثلاً پیش از عمل.', null, F('route-abbr', [])),
          P('هر اختصار را به معنی‌اش وصل کن', [['po', 'از راه دهان'], ['SL', 'زیر زبان'], ['gtt', 'قطره'], ['OS', 'چشم چپ']], 'راه مصرف.'),
          T('Disp #30 یعنی ۳۰ روز دارو بخور.', false, 'یعنی ۳۰ عدد به بیمار تحویل بده.'),
          B('بخش دستور مصرف روی برچسب با ___ شروع می‌شود.', ['Sig', 'Rx', 'Disp'], 'signa یعنی بنویس.'),
          O('بخش‌های نسخه را به ترتیب بچین', ['Rx', 'drug and dose', 'Sig', 'Disp', 'refill'], 'ترتیب نمونه.'),
          S('اختصار «از راه دهان» را بنویس', 'po', 'per os.', 'p…'),
          N('ab:hs')
        ]
      },
      {
        id: 'hs6', title: 'چند بار و ممنوع‌ها', icon: '⏰', items: [
          L('دفعات مصرف', `${fig('dose-clock', [], 'دفعات مصرف')}${e('bid')} روزی دو بار، ${e('tid')} سه بار، ${e('qid')} چهار بار، ${e('q6h')} هر ۶ ساعت، ${e('hs')} هنگام خواب، ${e('ac')} پیش از غذا، ${e('pc')} پس از غذا، ${e('prn')} در صورت نیاز و ${e('stat')} فوری است.`),
          L('اختصارهای ممنوع', `${fig('do-not-use', [], 'فهرست Do Not Use')}${e('qd')} با ${e('qid')} اشتباه می‌شود؛ پس daily بنویس. ${e('U')} ممکن است صفر خوانده شود؛ unit بنویس. هرگز صفر پایانی (${e('1.0 mg')}) ننویس، ولی صفر آغازین (${e('0.5 mg')}) لازم است.${pearl('در منابع مرجع آمده است: سازمان‌هایی مثل Joint Commission و ISMP فهرست اختصارهای ممنوع منتشر می‌کنند.')}`),
          M(`${e('<b>qid</b>')} یعنی…`, ['روزی چهار بار', 'روزی یک بار', 'هر ساعت', 'یک روز در میان'], 'quater in die.', null, F('dose-clock', [])),
          M(`چرا ${e('qd')} را نباید نوشت؟`, ['با qid اشتباه می‌شود و دوز چهار برابر می‌شود', 'چون طولانی است', 'چون انگلیسی نیست', 'چون فقط برای قطره است'], 'به‌جایش daily بنویس.', null, F('do-not-use', [])),
          P('هر اختصار را به معنی‌اش وصل کن', [['bid', 'روزی دو بار'], ['hs', 'هنگام خواب'], ['ac', 'پیش از غذا'], ['prn', 'در صورت نیاز']], 'دفعات مصرف.'),
          T('نوشتن 0.5 mg درست است و .5 mg خطرناک.', true, 'نقطه بی‌صفر ممکن است دیده نشود و دوز ده برابر شود.'),
          B('دستور فوری در نسخه با ___ نوشته می‌شود.', ['stat', 'prn', 'hs'], 'statim یعنی فوراً.'),
          M('به‌جای U در نسخه چه بنویسیم؟', ['unit', 'IU', 'u.', '0'], 'U با صفر یا ۴ اشتباه می‌شود.'),
          S('اختصار «در صورت نیاز» را بنویس', 'prn', 'pro re nata.', 'p…'),
          N('t2f:hs')
        ]
      },
      /* ================= سطح ۳ ================= */
      {
        id: 'hs7', title: 'تیم درمان', icon: '👩‍⚕️', items: [
          L('هر عضو، یک متخصص', `${tbl([['عضو', 'متخصص'], ['قلب', e('cardiologist')], ['پوست', e('dermatologist')], ['اعصاب', e('neurologist')], ['گوش، حلق، بینی', e('otorhinolaryngologist (ENT)')], ['تومور', e('oncologist')], ['استخوان و مفصل', e('orthopedist')]])}`),
          L('پشت صحنه', `${fig('lab-team', ['تیم آزمایشگاه پژوهشی'], 'تیم آزمایشگاه')}${e('<b>radiologist</b>')} عکس‌ها را می‌خواند، ${e('<b>pathologist</b>')} بافت‌ها را بررسی می‌کند و ${e('<b>pharmacist</b>')} دارو را آماده و تحویل می‌دهد. ${e('<b>internist</b>')} متخصص بیماری‌های داخلی است.${memo('ریشه ortho یعنی راست: orthopedist استخوان را راست می‌کند و orthopnea یعنی نفس کشیدن فقط در حالت راست نشسته.')}`),
          M('متخصص سرطان کیست؟', ['oncologist', 'otologist', 'urologist', 'neurologist'], 'onc/o یعنی تومور.'),
          M('چه کسی بافت برداشته‌شده را زیر میکروسکوپ بررسی می‌کند؟', ['pathologist', 'radiologist', 'pharmacist', 'chiropractor'], 'path/o یعنی بیماری.', null, F('lab-team', [])),
          P('هر متخصص را به حوزه‌اش وصل کن', [['nephrologist', 'کلیه'], ['gynecologist', 'بیماری‌های زنان'], ['obstetrician', 'بارداری و زایمان'], ['audiologist', 'شنوایی']], 'تیم درمان.'),
          T('internist متخصص بیماری‌های داخلی است، نه کارورز.', true, 'کارورز intern است.'),
          B('متخصص گوش و حلق و بینی با اختصار ___ شناخته می‌شود.', ['ENT', 'ICU', 'OR'], 'ear, nose and throat.'),
          W('واژه‌ای بساز به معنی «متخصص کلیه»', ['nephr/o', '-logist'], ['ur/o', '-iatrics', 'onc/o'], 'nephrologist.'),
          S('املای انگلیسی «متخصص رادیولوژی» را بنویس', 'radiologist', 'radi/o + ‎-logist‎.', 'radio…'),
          N('wb:hs')
        ]
      },
      {
        id: 'hs8', title: 'تصویر و آزمایش', icon: '🩺', items: [
          L('سه روش تصویربرداری', `${e('<b>ultrasonography (US)</b>')} با امواج صوتی، ${e('<b>computed tomography (CT)</b>')} با پرتو ایکس چرخان و ${e('<b>magnetic resonance imaging (MRI)</b>')} با میدان مغناطیسی تصویر می‌سازد.${fig('mri-brain', ['ام‌آرآی و سی‌تی مغز'], 'MRI')}`),
          L('علائم حیاتی', `${e('<b>vital signs</b>')} یعنی دما، نبض، تنفس و فشار خون (${e('TPR')} و ${e('BP')}). ${e('CBC')} شمارش کامل خون است.${pearl('در شرح حال Gary Smith در منابع مرجع، برای بیمار ۳۵ ساله با زردی، CBC و آزمون‌های کبدی خواسته شد.')}${memo('در ultrasonography سه قطعه هست: ultra- فراتر، son/o صدا و ‎-graphy‎ روش ثبت؛ یعنی سونوگرافی.')}`),
          M('کدام روش با امواج صوتی تصویر می‌سازد؟', ['ultrasonography', 'computed tomography', 'radiography', 'mammography'], 'son/o یعنی صدا.'),
          M(`${e('<b>vital signs</b>')} کدام‌اند؟`, ['دما، نبض، تنفس و فشار خون', 'قند، چربی و کلسترول', 'وزن و قد', 'نوار قلب و نوار مغز'], 'TPR و BP.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['US', 'سونوگرافی'], ['CT', 'سی‌تی‌اسکن'], ['MRI', 'ام‌آرآی'], ['CBC', 'شمارش کامل خون']], 'تصویر و آزمایش.', F('mri-brain', [])),
          T('اختصار BP یعنی فشار خون.', true, 'blood pressure.'),
          B('اختصار TPR یعنی دما، نبض و ___.', ['تنفس', 'فشار خون', 'وزن'], 'temperature, pulse, respiration.'),
          W('واژه‌ای بساز به معنی «سونوگرافی»', ['ultra-', 'son/o', '-graphy'], ['radi/o', '-gram', '-scopy'], 'ultrasonography.'),
          S('املای انگلیسی «سونوگرافی» را بنویس', 'ultrasonography', 'ultra- + son/o + ‎-graphy‎.', 'ultra…'),
          N('d2t:hs')
        ]
      },
      {
        id: 'hs9', title: 'گزارش‌ها را بخوان', icon: '📑', items: [
          L('گزارش رادیولوژی', `در گزارش رادیولوژی مرجع آمده است: خانمی ۷۹ ساله به نام Betty Street پس از زمین خوردن ${e('bone scan')} شد. یافته‌ها: تغییرهای ${e('degenerative')} در مهره‌های کمری و شکستگی (${e('FX')}) استخوان شرمگاهی راست.`),
          L('خلاصه ترخیص', `${tbl([['بخش', 'یعنی'], [e('HISTORY OF PRESENT ILLNESS'), 'شرح بیماری فعلی'], [e('PHYSICAL EXAMINATION'), 'معاینه'], [e('HOSPITAL COURSE'), 'سیر بستری'], [e('DISCHARGE MEDICATIONS'), 'داروهای ترخیص'], [e('FOLLOW UP'), 'پیگیری']])}${memo('در خلاصه ترخیص، سرتیترها نقشه‌اند؛ اول آن‌ها را پیدا کن و بعد جزئیات را بخوان.')}`),
          M(`${e('<b>FX</b>')} در گزارش یعنی…`, ['شکستگی', 'سابقه', 'یافته', 'آزمایش'], 'fracture.'),
          M('کدام بخش خلاصه ترخیص داروهای پس از بستری را می‌گوید؟', ['DISCHARGE MEDICATIONS', 'HOSPITAL COURSE', 'PHYSICAL EXAMINATION', 'FOLLOW UP'], 'داروهای ترخیص.'),
          O('بخش‌های خلاصه ترخیص را بچین', ['history of present illness', 'physical examination', 'hospital course', 'discharge medications', 'follow up'], 'ترتیب مرجع.'),
          P('هر اختصار را به معنی‌اش وصل کن', [['FX', 'شکستگی'], ['Hx', 'سابقه'], ['ED', 'اورژانس'], ['IV', 'داخل وریدی']], 'اختصارهای گزارش.'),
          T('degenerative یعنی فرسایشی و پیش‌رونده.', true, 'مثل degenerative changes در ستون مهره.'),
          B('دستور «یک قرص خوراکی هر ۸ ساعت» در نسخه: one ___ q 8 hours.', ['p.o.', 'IV', 'SL'], 'در خلاصه ترخیص: Augmentin, one p.o. q. 8 hours.'),
          S('املای انگلیسی «شکستگی» را بنویس', 'fracture', 'Fx.', 'frac…'),
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
    { id: 'bs-0', w: 'bs', lv: 0, name: 'پازلی', title: 'قطعه ریشه کنجکاو', shape: 'puzzle', color: '#7FB2E5', acc: ['sparkle'], bio: 'یک قطعه پازل آبی؛ همیشه وسط واژه می‌نشیند چون ریشه است و معنی اصلی را با خودش دارد.' },
    { id: 'bs-1', w: 'bs', lv: 1, name: 'اُوی رابط', title: 'واکه پل‌ساز', shape: 'bubble', color: '#F5B880', acc: ['glasses'], bio: 'حرف o کوچولویی که میان ریشه‌ها پل می‌زند؛ ولی جلوی پسوندی که با واکه شروع شود کنار می‌رود: gastritis.' },
    { id: 'bs-2', w: 'bs', lv: 2, name: 'بقراط کوچک', title: 'نگهبان زبان پزشکی', shape: 'book', color: '#4B4FC4', acc: ['crown'], bio: 'کتابی ۲۴۰۰ ساله که ریشه‌های یونانی و لاتین را از روزگار بقراط تا پرونده الکترونیک امروز آورده است.' },
    { id: 'rt-0', w: 'rt', lv: 0, name: 'کاردیو', title: 'صاحب ریشه cardi/o', shape: 'heart', color: '#D9443A', acc: ['sparkle'], bio: 'قلبی که اسمش را در cardiology، cardiomegaly و electrocardiogram پیدا می‌کنی.' },
    { id: 'rt-1', w: 'rt', lv: 1, name: 'انسفالو', title: 'مغز ریشه‌شناس', shape: 'brain', color: '#F2A7B8', acc: ['glasses'], bio: 'encephal/o را با cephal/o قاطی نمی‌کند: یکی مغز است و دیگری سر.' },
    { id: 'rt-2', w: 'rt', lv: 2, name: 'اُستئو', title: 'نقشه‌خوان بدن', shape: 'bone', color: '#F3E4C4', acc: ['crown'], bio: 'از oste/o و arthr/o تا nephr/o و ren/o، نقشه ریشه‌های همه اندام‌ها را در جیب دارد.' },
    { id: 'sf-0', w: 'sf', lv: 0, name: 'شعله‌ایتیس', title: 'پسوند التهاب', shape: 'flame', color: '#E2683C', acc: ['sparkle'], bio: 'هر جا ‎-itis‎ بنشیند، آن عضو ملتهب است: arthritis، gastritis، dermatitis.' },
    { id: 'sf-1', w: 'sf', lv: 1, name: 'ذره‌بین', title: 'استاد ‎-scope‎ و ‎-scopy‎', shape: 'lens', color: '#2B86C5', acc: ['glasses'], bio: 'ابزار را از روش جدا می‌کند: endoscope را در دست دارد و endoscopy انجام می‌دهد.' },
    { id: 'sf-2', w: 'sf', lv: 2, name: 'جراح پسوند', title: 'سلطان ‎-ectomy‎', shape: 'bandage', color: '#C39BE0', acc: ['crown'], bio: 'فرق برداشتن، برش، منفذ، ترمیم، بخیه و تثبیت را در یک نگاه می‌گوید.' },
    { id: 'pf-0', w: 'pf', lv: 0, name: 'تاس عدد', title: 'شمارنده پیشوندها', shape: 'hex', color: '#F7D774', acc: ['sparkle'], bio: 'از uni- و bi- تا quadri- و pan- می‌شمارد و hemi- را نصفه حساب می‌کند.' },
    { id: 'pf-1', w: 'pf', lv: 1, name: 'جهت‌نما', title: 'راهنمای بدن', shape: 'meter', color: '#F2C94C', acc: ['glasses'], bio: 'superior و inferior، medial و lateral، proximal و distal را همیشه از وضعیت آناتومیک می‌سنجد.' },
    { id: 'pf-2', w: 'pf', lv: 2, name: 'سپر آنتی', title: 'نگهبان پیشوندهای ضد', shape: 'shield', color: '#C9A12C', acc: ['crown'], bio: 'anti-، contra- و a- را می‌شناسد و می‌داند afebrile یعنی بی‌تب.' },
    { id: 'rl-0', w: 'rl', lv: 0, name: 'دوقلوی هم‌آوا', title: 'ileum یا ilium؟', shape: 'pea', color: '#9CCC65', acc: ['sparkle'], bio: 'دو واژه با یک تلفظ که یکی روده است و دیگری لگن؛ با یک حرف e یا i شناخته می‌شوند.' },
    { id: 'rl-1', w: 'rl', lv: 1, name: 'کلید جمع', title: 'استاد ‎-ae‎ و ‎-i‎', shape: 'key', color: '#9A5418', acc: ['glasses'], bio: 'vertebra را vertebrae، bronchus را bronchi و phalanx را phalanges می‌کند.' },
    { id: 'rl-2', w: 'rl', lv: 2, name: 'ترازوی تله', title: 'دشمن هم‌آواها', shape: 'scale', color: '#E2683C', acc: ['crown'], bio: 'dysphagia را با dysphasia و palpation را با palpitation در یک کفه نمی‌گذارد.' },
    { id: 'hs-0', w: 'hs', lv: 0, name: 'کپسولی', title: 'داروی ژنریک', shape: 'capsule', color: '#17A398', acc: ['sparkle'], bio: 'یک نام شیمیایی بلند، یک نام ژنریک و چند نام تجاری دارد؛ OTC یا با نسخه.' },
    { id: 'hs-1', w: 'hs', lv: 1, name: 'نسخه‌خوان', title: 'رمزگشای Sig', shape: 'clipboard', color: '#FFFDF5', acc: ['glasses'], bio: 'i po tid را «یک قرص خوراکی روزی سه بار» می‌خواند و جلوی qd و U ایست می‌دهد.' },
    { id: 'hs-2', w: 'hs', lv: 2, name: 'لِکسای بزرگ', title: 'استاد پرونده و پازل', shape: 'puzzle', color: '#4B4FC4', acc: ['cape', 'crown'], bio: 'H&P، یادداشت سیر بیماری، خلاصه ترخیص و هر واژه بلند را در یک نگاه قطعه‌قطعه می‌خواند.' }
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
      id: 'r1', w: 'bs', title: 'سوزش سر دل دانشجو', who: 'David، دانشجوی ۲۲ ساله',
      brief: 'در مطالعه موردی مرجع، دانشجویی ۲۲ ساله به نام David چهار ماه است شب‌ها درد سوزشی وسط قفسه سینه دارد. در معاینه نوشته‌اند: epigastric pain، orthopnea و گاهی dysphagia. او را برای احتمال GERD به gastroenterologist ارجاع داده‌اند و برایش EGD انجام شده است.',
      chart: [['Age', '22 y/o'], ['CC', 'epigastric pain, heartburn'], ['Sx', 'orthopnea, dysphagia'], ['Referral', 'gastroenterologist'], ['Test', 'barium swallow, EGD']],
      fig: { a: 'translate-steps', l: [] },
      steps: [
        M('ترجمه', 'epigastric pain یعنی درد…', ['بالای معده، وسط بالای شکم', 'زیر معده', 'درون روده', 'پشت کمر'], 'epi- روی + gastr/o + ‎-ic‎.'),
        M('متخصص', 'gastroenterologist متخصص چیست؟', ['معده و روده', 'قلب', 'ریه', 'کبد و طحال'], 'gastr/o + enter/o + ‎-logist‎.', null, { a: ['word-parts'], l: [] }),
        M('نشانه', 'dysphagia یعنی…', ['دشواری بلع', 'دشواری گفتار', 'دشواری تنفس', 'دل‌درد'], 'dys- + ‎-phagia‎.'),
        T('اختصار', 'y/o در پرونده یعنی ساله.', true, 'years old.'),
        M('آزمون', 'در EGD پزشک کدام بخش‌ها را می‌بیند؟', ['مری، معده و دوازدهه', 'روده بزرگ', 'نای و نایژه', 'مثانه'], 'esophagogastroduodenoscopy.'),
        O('ترجمه', 'گام‌های ترجمه epigastric را بچین', ['suffix -ic', 'prefix epi-', 'root gastr'], 'مربوط به، روی، معده: ناحیه بالای معده.'),
        T('تلفظ', 'در dysphagia حرف‌های ph مثل f خوانده می‌شوند.', true, 'dis-FAY-jee-ah.'),
        S('املا', 'املای «متخصص گوارش» را بنویس', 'gastroenterologist', 'gastr/o + enter/o + ‎-logist‎.', 'gastroentero…')
      ]
    },
    {
      id: 'r2', w: 'bs', title: 'شرح حال با پوست زرد', who: 'Gary Smith، مرد ۳۵ ساله',
      brief: 'در شرح حال و معاینه (H&P) مرجع، Gary Smith با خستگی، گلودرد، درد عضله و خارش پوست آمده است. چشم‌ها و پوستش زردند، کبد بزرگ و دردناک است و در کودکی post-tonsillectomy بوده. پزشک احتمال hepatitis را داده و CBC و آزمون‌های کبدی خواسته است.',
      chart: [['Age', '35'], ['HEENT', 'eyes jaundiced; throat red'], ['GI', 'tender, enlarged liver'], ['Hx', 'post-tonsillectomy at age 10'], ['Plan', 'CBC, liver function, Hep A/B/C']],
      fig: { a: 'hepatomegaly', l: ['کبد بزرگ'] },
      steps: [
        M('نشانه', 'زردی پوست و چشم را چه می‌نامند؟', ['jaundice', 'cyanosis', 'pruritus', 'erythema'], 'jaundice.', null, { a: ['jaundice'], l: ['زردی پوست'] }),
        M('ترجمه', 'post-tonsillectomy یعنی…', ['پس از برداشتن لوزه‌ها', 'پیش از برداشتن لوزه‌ها', 'التهاب لوزه', 'برش لوزه'], 'post- پس، tonsill/o لوزه، ‎-ectomy‎ برداشتن.'),
        M('واژه', 'بزرگی کبد…', ['hepatomegaly', 'splenomegaly', 'hepatitis', 'hepatoma'], 'hepat/o + ‎-megaly‎.'),
        T('اختصار', 'HEENT یعنی سر، چشم، گوش، بینی و گلو.', true, 'head, eyes, ears, nose, throat.'),
        M('تشخیص', 'hepatitis یعنی…', ['التهاب کبد', 'تومور کبد', 'بزرگی کبد', 'برداشتن کبد'], 'hepat/o + ‎-itis‎.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['CBC', 'شمارش کامل خون'], ['BP', 'فشار خون'], ['T', 'دما'], ['H&P', 'شرح حال و معاینه']], 'اختصارهای یادداشت.'),
        S('املا', 'املای «التهاب کبد» را بنویس', 'hepatitis', 'hepat/o + ‎-itis‎.', 'hepat…')
      ]
    },
    {
      id: 'r3', w: 'bs', title: 'پیگیری در مطب', who: 'Maria Brown، خانم ۶۴ ساله',
      brief: 'در یادداشت مطب مرجع، Maria Brown برای پیگیری gastralgia و aphasia (باقی‌مانده سکته قبلی) آمده است. یک هفته پیش EGD شده و زخم معده خونریز با cautery به hemostasis رسیده است. اکنون gastralgia برطرف شده و peristalsis در هر چهار ربع شکم شنیده می‌شود.',
      chart: [['Age', '64'], ['Follow-up', 'gastralgia, aphasia'], ['EGD', 'bleeding gastric ulcer; cautery'], ['Now', 'gastralgia ceased; peristalsis present']],
      fig: { a: 'gastralgia', l: ['معده‌درد'] },
      steps: [
        M('ترجمه', 'gastralgia یعنی…', ['معده‌درد', 'التهاب معده', 'برداشتن معده', 'خونریزی معده'], 'gastr/o + ‎-algia‎.'),
        M('ترجمه', 'aphasia یعنی…', ['ناتوانی در گفتار', 'ناتوانی در بلع', 'ناتوانی در دیدن', 'ناتوانی در راه رفتن'], 'a- + ‎-phasia‎.'),
        T('واژه', 'hemostasis یعنی بند آمدن خون.', true, 'hem/o + ‎-stasis‎ (ایستادن).'),
        M('هم‌آوا', 'اگر بیمار به‌جای aphasia دشواری بلع داشت، واژه درست چه بود؟', ['dysphagia', 'dysphasia', 'aphasia', 'dyspnea'], '‎-phagia‎ بلع است و ‎-phasia‎ گفتار.'),
        M('پسوند', 'gastric در gastric ulcer یعنی…', ['مربوط به معده', 'التهاب معده', 'برداشتن معده', 'زیر معده'], 'gastr/o + ‎-ic‎.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['gastralgia', 'معده‌درد'], ['aphasia', 'ناتوانی گفتار'], ['hemostasis', 'بند آمدن خون'], ['peristalsis', 'حرکت دودی روده']], 'واژه‌های یادداشت.'),
        S('املا', 'املای «معده‌درد» را بنویس', 'gastralgia', 'gastr + ‎-algia‎.', 'gastr…')
      ]
    },
    /* ================= ریشه‌ها ================= */
    {
      id: 'r4', w: 'rt', title: 'زانوهای آرتروزی', who: 'Greg، مرد ۶۸ ساله',
      brief: 'در Case Study 1-1، Greg از ناراحتی bilateral زانوها شاکی (c/o) است که پیش از باران بدتر می‌شود. NSAIDs را prn می‌خورد ولی بهتر نشده است. در دانشگاه ACL او پاره شده بود و Lipitor برای hyperlipidemia مصرف می‌کند. پزشک خانواده او را به orthopedic surgeon ارجاع داده است.',
      chart: [['Age', '68 y/o'], ['CC', 'bilateral knee discomfort'], ['Meds', 'NSAIDs prn; Lipitor 10 mg'], ['Hx', 'torn ACL'], ['X-ray', 'joint space narrowing, R > L']],
      fig: { a: 'tissue-layers', l: [] },
      steps: [
        M('پیشوند', 'bi- در bilateral یعنی…', ['دو', 'یک', 'نیم', 'سه'], 'هر دو زانو.'),
        M('پسوند', '‎-itis‎ در arthritis چیست؟', ['پسوند به معنی التهاب', 'ریشه', 'پیشوند', 'واکه رابط'], 'arthr/o + ‎-itis‎.'),
        M('ریشه', 'arthr/o یک … است.', ['شکل ترکیبی', 'سرواژه', 'پیشوند', 'پسوند'], 'ریشه + واکه رابط.'),
        M('اختصار', 'AI در NSAID یعنی…', ['anti-inflammatory', 'antacid', 'anti-infectious', 'after incident'], 'nonsteroidal anti-inflammatory drug.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['c/o', 'شاکی از'], ['prn', 'در صورت نیاز'], ['ACL', 'رباط صلیبی قدامی'], ['y/o', 'ساله']], 'اختصارهای پرونده Greg.'),
        M('واژه', 'hyperlipidemia یعنی…', ['چربی زیاد در خون', 'قند زیاد در خون', 'چربی کم در خون', 'التهاب چربی'], 'hyper- + lip/o + ‎-emia‎.'),
        T('رشته', 'orthopedic از orth/o (راست) و ped/o ساخته شده است.', true, 'جراح استخوان و مفصل.'),
        S('املا', 'املای «آرتروز» را بنویس', 'osteoarthritis', 'oste/o + arthr/o + ‎-itis‎.', 'osteo…')
      ]
    },
    {
      id: 'r5', w: 'rt', title: 'تنفس دشوار آرایشگر', who: 'Sally، خانم ۵۴ ساله',
      brief: 'در Case Study 1-2، Sally دچار dyspnea است که نخست به LUL pneumonia نسبت داده شد. پس از آنتی‌بیوتیک بهتر نشد و در عکس، pneumothorax کوچک دیده شد. Dr. Williams، یک pulmonologist، bronchoscopy و biopsy انجام داد. او آرایشگر است و بخار مواد مو و ناخن نفسش را تنگ می‌کند.',
      chart: [['Age', '54 y/o'], ['CC', 'dyspnea'], ['CXR', 'small LUL pneumothorax'], ['Sputum', 'purulent'], ['Tests', 'bronchoscopy, biopsy (negative)']],
      fig: { a: 'trunk-roots', l: [] },
      steps: [
        M('تلفظ', 'gh در cough و radiograph چطور خوانده می‌شود؟', ['f', 'g', 'h', 's'], 'کاف و ریدیوگراف.'),
        M('تلفظ', 'pn در bronchopneumonia چطور خوانده می‌شود؟', ['n', 'p', 'f', 's'], 'p ساکت است.'),
        M('واژه مرکب', 'کدام واژه مرکب است (بیش از یک ریشه دارد)؟', ['pneumothorax', 'pulmonary', 'respiratory', 'antibiotic'], 'pneum/o + thorac/o.'),
        M('پسوند', 'پسوند «حالت» در pneumonia کدام است؟', ['-ia', '-nia', '-monia', '-onia'], 'pneumon + ‎-ia‎.'),
        M('جمع', 'جمع spectrum کدام است؟', ['spectra', 'spectria', 'spectrina', 'spectri'], '‎-um → -a‎.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['dyspnea', 'تنگی نفس'], ['purulent', 'چرکی'], ['febrile', 'تب‌دار'], ['pulmonologist', 'متخصص ریه']], 'واژه‌های پرونده Sally.'),
        T('اختصار', 'LUL یعنی لوب فوقانی چپ ریه.', true, 'left upper lobe.'),
        S('املا', 'املای «تنگی نفس» را بنویس', 'dyspnea', 'dys- + ‎-pnea‎؛ p ساکت نیست.', 'dysp…')
      ]
    },
    {
      id: 'r6', w: 'rt', title: 'گرمازده با یک خال مشکوک', who: 'کارگر ساختمانی ۳۳ ساله',
      brief: 'در مشاوره پوست مرجع، کارگری ۳۳ ساله با گرمازدگی و dehydration بستری شده و IV گرفته است. در معاینه، ضایعه‌ای نامنظم ۳ در ۵ سانتی‌متر، قرمز تا سیاه با حاشیه نامشخص روی ران راست دیده شده است. Dr. Henri Adams، یک dermatologist، نوشته است: R/O melanoma و Bx.',
      chart: [['Age', '33'], ['Admit', 'heat stroke, dehydration'], ['Allergies', 'NKA'], ['Skin', 'irregular lesion R thigh'], ['Impression', 'R/O melanoma; Bx']],
      fig: { a: 'color-wheel', l: [] },
      steps: [
        M('ریشه', 'melan/o در melanoma یعنی…', ['سیاه', 'قرمز', 'سفید', 'زرد'], 'melanoma یعنی تومور سیاه.'),
        M('متخصص', 'dermatologist متخصص چیست؟', ['پوست', 'خون', 'قلب', 'استخوان'], 'dermat/o + ‎-logist‎.'),
        M('اختصار', 'Bx یعنی…', ['نمونه‌برداری', 'شکستگی', 'تشخیص', 'درمان'], 'biopsy.', null, { a: ['punch-biopsy'], l: ['نمونه‌برداری پانچ'] }),
        T('اختصار', 'R/O melanoma یعنی ملانوم قطعی است.', false, 'یعنی احتمال ملانوم باید رد یا تأیید شود.'),
        M('واژه', 'dehydration یعنی…', ['از دست رفتن آب بدن', 'آب زیاد در بدن', 'درمان با آب', 'ترس از آب'], 'de- + hydr/o.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['NKA', 'حساسیت شناخته‌شده ندارد'], ['WNL', 'در محدوده طبیعی'], ['ED', 'اورژانس'], ['IV', 'داخل وریدی']], 'اختصارهای مشاوره.'),
        S('املا', 'املای «ملانوم» را بنویس', 'melanoma', 'melan/o + ‎-oma‎.', 'melan…')
      ]
    },
    /* ================= پسوندها ================= */
    {
      id: 'r7', w: 'sf', title: 'سفارش‌های واژه‌سازی', who: 'تمرین واژه‌سازی',
      brief: 'در تمرین «Building Medical Terms»، باید با ریشه و پسوند درست، واژه‌هایی برای نرمی غیرطبیعی قلب، ایجاد منفذ در معده، ترمیم بینی، دانش بیماری، تومور عصب و التهاب گوش بسازی؛ مثل نمونه: splen/o + ‎-megaly‎ = splenomegaly.',
      chart: [['Example', 'splenomegaly'], ['Task 1', 'softening of the heart'], ['Task 2', 'opening into the stomach'], ['Task 3', 'repair of the nose'], ['Task 4', 'nerve tumor']],
      fig: { a: 'suffix-families', l: [] },
      steps: [
        M('ساخت', 'نرمی غیرطبیعی قلب…', ['cardiomalacia', 'cardiomegaly', 'cardiosclerosis', 'cardiopathy'], 'cardi/o + ‎-malacia‎.'),
        M('ساخت', 'ایجاد منفذ با جراحی در معده…', ['gastrostomy', 'gastrotomy', 'gastrectomy', 'gastroscopy'], 'gastr/o + ‎-stomy‎.', null, { a: ['cut-suffixes'], l: [] }),
        M('ساخت', 'ترمیم جراحی بینی…', ['rhinoplasty', 'rhinitis', 'rhinorrhea', 'rhinotomy'], 'rhin/o + ‎-plasty‎.'),
        M('ساخت', 'دانش بیماری…', ['pathology', 'pathogen', 'neuropathy', 'pathologist'], 'path/o + ‎-logy‎.'),
        M('ساخت', 'تومور عصب…', ['neuroma', 'neuralgia', 'neuritis', 'neuropathy'], 'neur/o + ‎-oma‎.'),
        M('ساخت', 'التهاب گوش…', ['otitis', 'otalgia', 'otorrhea', 'otoplasty'], 'ot/o + ‎-itis‎.'),
        T('ساخت', 'carcinogenic یعنی سرطان‌زا.', true, 'carcin/o + ‎-genic‎.'),
        S('املا', 'املای «بزرگی طحال» را بنویس', 'splenomegaly', 'splen/o + ‎-megaly‎.', 'spleno…')
      ]
    },
    {
      id: 'r8', w: 'sf', title: 'گزارش اسکن استخوان', who: 'Betty Street، خانم ۷۹ ساله',
      brief: 'در گزارش رادیولوژی مرجع، Betty Street پس از زمین خوردن و کمردرد bone scan کل بدن شده است. یافته‌ها: تغییرهای degenerative در مهره‌های پایینی T و L، بدون نشانه metastatic disease یا compression FX، و شکستگی‌های traumatic در شاخه‌های بالایی و پایینی استخوان شرمگاهی راست.',
      chart: [['Age', '79'], ['Dx', 'cervical FX'], ['Study', 'bone scan, total body, A/P views'], ['Hx', 'fall and back pain'], ['Findings', 'degenerative changes; traumatic fractures']],
      fig: { a: 'spine-vertebrae', l: ['ستون مهره'] },
      steps: [
        M('اختصار', 'FX یعنی…', ['شکستگی', 'یافته', 'سابقه', 'درمان'], 'fracture.'),
        M('اختصار', 'Hx یعنی…', ['سابقه', 'بیمارستان', 'تشخیص', 'درمان'], 'history.'),
        M('واژه', 'metastatic disease یعنی بیماری‌ای که…', ['به جای دوری دست‌اندازی کرده است', 'مادرزادی است', 'عفونی است', 'درمان شده است'], 'meta- فراتر + ‎-stasis‎.'),
        T('جهت', 'A/P views یعنی نمای جلو به عقب.', true, 'anterior-posterior.', { a: ['direction-terms'], l: [] }),
        M('جمع', 'جمع vertebra کدام است؟', ['vertebrae', 'vertebras', 'vertebri', 'vertebrum'], '‎-a → -ae‎.'),
        P('واژه', 'هر واژه را به معنی‌اش وصل کن', [['degenerative', 'فرسایشی'], ['traumatic', 'ناشی از ضربه'], ['superior', 'بالایی'], ['inferior', 'پایینی']], 'واژه‌های گزارش.'),
        S('املا', 'املای «پرتونگار» (radiologist) را بنویس', 'radiologist', 'radi/o + ‎-logist‎.', 'radio…')
      ]
    },
    {
      id: 'r9', w: 'sf', title: 'انگشت متورم', who: 'تکنسین دستگاه کپی، مرد ۲۸ ساله',
      brief: 'در خلاصه ترخیص، مردی ۲۸ ساله یک هفته درد و تورم در بند انتهایی (distal phalanx) انگشت اشاره راست داشته است. مفصل بین‌بندی دیستال او aspirate شده و برای آنتی‌بیوتیک IV بستری شده است. WBC هنگام پذیرش ۱۳٬۶۰۰ بوده و C&S منفی ماند. با Augmentin, one p.o. q. 8 hours ترخیص شد.',
      chart: [['Age', '28'], ['HPI', 'pain, swelling R index distal phalanx'], ['PE', 'soft tissue swelling, erythema'], ['Lab', 'WBC 13,600; C&S negative'], ['D/C meds', 'Augmentin p.o. q 8 h × 7 days']],
      fig: { a: 'hand-phalanges', l: ['بندهای انگشت'] },
      steps: [
        M('جهت', 'distal phalanx یعنی بند انگشت…', ['دورتر از تنه، نوک انگشت', 'نزدیک به تنه', 'میانی', 'کف دست'], 'distal یعنی دور.'),
        M('جمع', 'جمع phalanx کدام است؟', ['phalanges', 'phalanxes', 'phalanci', 'phalangi'], '‎-nx → -nges‎.'),
        M('پیشوند', 'interphalangeal joint یعنی مفصل…', ['میان دو بند انگشت', 'درون یک بند', 'پیرامون انگشت', 'زیر ناخن'], 'inter- یعنی میان.'),
        M('نسخه', 'one p.o. q. 8 hours یعنی…', ['یک عدد خوراکی هر ۸ ساعت', 'یک عدد تزریقی هر ۸ ساعت', 'هشت عدد خوراکی در روز', 'یک عدد پس از غذا'], 'p.o. از راه دهان؛ q هر.', null, { a: ['dose-clock'], l: [] }),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['WBC', 'گلبول سفید'], ['C&S', 'کشت و آنتی‌بیوگرام'], ['IV', 'داخل وریدی'], ['ED', 'اورژانس']], 'اختصارهای خلاصه ترخیص.'),
        T('واژه', 'erythema یعنی قرمزی پوست.', true, 'erythr/o یعنی قرمز.'),
        S('املا', 'املای «بند انگشت» را بنویس', 'phalanx', 'جمع: phalanges.', 'phal…')
      ]
    },
    /* ================= پیشوندها ================= */
    {
      id: 'r10', w: 'pf', title: 'شکستگی گردن ران', who: 'Esther، خانم ۷۲ ساله',
      brief: 'در Case Study 1-3، Esther که از پیش osteoporosis داشت، روی جدول خیابان زمین خورد و گردن ران راستش شکست. پیش از عمل (preoperative) analgesic گرفت، با spinal anesthesia و آنتی‌بیوتیک intravenous عمل bipolar hemiarthroplasty شد و پس از عمل (postoperative) ران او در abduction نگه داشته شد.',
      chart: [['Age', '72 y/o'], ['Hx', 'pre-existing osteoporosis'], ['Dx', 'displaced fracture, R femoral neck'], ['Surgery', 'bipolar hemiarthroplasty'], ['Postop', 'hip in abduction; PT']],
      fig: { a: 'femur', l: ['گردن ران'] },
      steps: [
        M('پیشوند', 'pre- در pre-existing یعنی…', ['پیش', 'پس', 'میان', 'ضد'], 'پیش از این وجود داشت.'),
        M('پیشوند', 'an- در analgesic و anesthesia یعنی…', ['بدون', 'ضد', 'زیاد', 'نیم'], 'بی‌درد و بی‌حس.', null, { a: ['negation-prefixes'], l: [] }),
        M('پیشوند', 'hemi- در hemiarthroplasty یعنی…', ['نیم', 'خون', 'دو', 'همه'], 'تعویض نیمی از مفصل.'),
        M('پیشوند', 'bi- در bipolar یعنی…', ['دو', 'زندگی', 'نیم', 'یک'], 'دو قطبی.'),
        M('حرکت', 'abduction یعنی…', ['دور کردن اندام از خط میانی', 'نزدیک کردن به خط میانی', 'خم کردن', 'چرخاندن'], 'ab- یعنی دور از.', null, { a: ['abduction'], l: ['abduction'] }),
        P('پیشوند', 'هر پیشوند را به معنی‌اش وصل کن', [['dis-', 'جدا، دور'], ['re-', 'دوباره'], ['de-', 'پایین، برداشتن'], ['intra-', 'درون']], 'dislocation، replacement، degeneration، intravenous.'),
        O('زمان', 'مراحل عمل Esther را بچین', ['preoperative analgesic', 'spinal anesthesia', 'hemiarthroplasty', 'postoperative abduction'], 'پیش، حین و پس از عمل.'),
        S('املا', 'املای «پس از عمل» را بنویس', 'postoperative', 'post- + operative.', 'postop…')
      ]
    },
    {
      id: 'r11', w: 'pf', title: 'بیمار را درست بخوابان', who: 'تمرین وضعیت‌دهی بیمار',
      brief: 'بر پایه جدول «Terms for Directions and Positions» مرجع، تو کارشناس اتاق عمل هستی و باید چند بیمار را برای کارهای گوناگون در وضعیت درست قرار دهی: یکی طاق‌باز، یکی دمر، یکی نیمه‌نشسته، یکی با سر پایین‌تر و یکی به پهلوی چپ.',
      chart: [['Bed 1', 'supine'], ['Bed 2', 'prone'], ['Bed 3', 'Fowler'], ['Bed 4', 'Trendelenburg'], ['Bed 5', 'Sims']],
      fig: { a: 'patient-positions', l: [] },
      steps: [
        M('وضعیت', 'بیمار طاق‌باز و رو به بالا…', ['supine', 'prone', 'Sims', 'lithotomy'], 'supine.'),
        M('وضعیت', 'بیمار روی شکم و رو به پایین…', ['prone', 'supine', 'Fowler', 'Trendelenburg'], 'prone.'),
        M('وضعیت', 'سر تخت بالا آمده و بیمار نیمه‌نشسته است…', ['Fowler', 'Sims', 'prone', 'lithotomy'], 'Fowler.'),
        M('وضعیت', 'بیمار طاق‌باز روی تخت شیب‌دار با سر پایین‌تر از پا…', ['Trendelenburg', 'Fowler', 'supine', 'knee-chest'], 'Trendelenburg.'),
        T('وضعیت', 'در وضعیت Sims بیمار به پهلوی چپ می‌خوابد و زانوی راست جمع است.', true, 'Sims position.'),
        P('جهت', 'هر جهت را به معنی‌اش وصل کن', [['lateral', 'به سوی پهلو'], ['medial', 'به سوی خط میانی'], ['recumbent', 'درازکش'], ['upright', 'ایستاده']], 'جهت‌ها و وضعیت‌ها.'),
        S('املا', 'املای «طاق‌باز» را بنویس', 'supine', 'مثل کاسه سوپ رو به بالا.', 'sup…')
      ]
    },
    {
      id: 'r12', w: 'pf', title: 'سه تزریق، سه عمق', who: 'تمرین راه‌های تزریق',
      brief: 'بر پایه شکل راه‌های تزریق، سه دستور دارویی داری: یک سرم داخل وریدی، یک تست پوستی درون پوست و یک واکسن درون عضله. باید پیشوند و ریشه هر راه را بشناسی و بدانی سوزن تا کجا می‌رود.',
      chart: [['Order 1', 'IV fluids'], ['Order 2', 'ID skin test'], ['Order 3', 'IM vaccine'], ['Order 4', 'subcut insulin']],
      fig: { a: 'injections', l: ['سه نوع تزریق'] },
      steps: [
        M('راه', 'IV یعنی…', ['داخل وریدی', 'داخل عضلانی', 'درون پوست', 'زیر زبان'], 'intra- + ven/o + ‎-ous‎.'),
        M('راه', 'تست پوستی که درون پوست تزریق می‌شود…', ['intradermal', 'intramuscular', 'intravenous', 'transdermal'], 'intra- + derm/o + ‎-al‎.', null, { a: ['injection-routes'], l: [] }),
        M('راه', 'insulin معمولاً کجا تزریق می‌شود؟', ['زیر پوست (subcutaneous)', 'درون سیاهرگ', 'درون استخوان', 'زیر زبان'], 'در بافت چربی زیر پوست.'),
        O('عمق', 'راه‌ها را از سطحی تا عمیق بچین', ['intradermal', 'subcutaneous', 'intramuscular'], 'پوست، چربی، عضله.'),
        T('راه', 'parenteral یعنی هر راهی جز دستگاه گوارش.', true, 'para- کنار + enter/o روده.'),
        P('پیشوند', 'هر پیشوند را به معنی‌اش وصل کن', [['intra-', 'درون'], ['sub-', 'زیر'], ['trans-', 'از میان'], ['hypo-', 'زیر، کم']], 'پیشوندهای راه تزریق.'),
        S('املا', 'املای «داخل عضلانی» را بنویس', 'intramuscular', 'intra- + muscul/o + ‎-ar‎.', 'intramus…')
      ]
    },
    /* ================= قواعد و تله‌ها ================= */
    {
      id: 'r13', w: 'rl', title: 'جمع‌های پرونده', who: 'تمرین «Making Plurals»',
      brief: 'در تمرین Making Plurals و پرسش‌های Case Study، باید شکل جمع واژه‌های پرونده را بنویسی: diagnosis، diverticulum، bursa، bronchus و artery. پیش از نوشتن، پایان هر واژه را ببین.',
      chart: [['1', 'diagnosis'], ['2', 'diverticulum'], ['3', 'bursa'], ['4', 'bronchus'], ['5', 'artery']],
      fig: { a: 'plural-rules', l: [] },
      steps: [
        M('جمع', 'جمع diagnosis…', ['diagnoses', 'diagnosises', 'diagnosi', 'diagnosae'], '‎-is → -es‎.'),
        M('جمع', 'جمع diverticulum…', ['diverticula', 'diverticuli', 'diverticulums', 'diverticulae'], '‎-um → -a‎.'),
        M('جمع', 'جمع bursa…', ['bursae', 'bursi', 'bursas', 'bursata'], '‎-a → -ae‎.'),
        M('جمع', 'جمع bronchus…', ['bronchi', 'bronchae', 'bronchuses', 'bronchia'], '‎-us → -i‎.'),
        M('جمع', 'جمع artery…', ['arteries', 'arterys', 'arteriae', 'arteri'], 'قاعده انگلیسی: ‎-y → -ies‎.'),
        P('جمع', 'هر مفرد را به جمعش وصل کن', [['ganglion', 'ganglia'], ['lumen', 'lumina'], ['appendix', 'appendices'], ['larynx', 'larynges']], 'قاعده‌های دیگر.', { a: ['plural-exceptions'], l: [] }),
        T('جمع', 'meatus در جمع هم meatus می‌ماند.', true, 'استثنا.'),
        S('املا', 'جمع «fungus» را بنویس', 'fungi', '‎-us → -i‎.', 'fung…')
      ]
    },
    {
      id: 'r14', w: 'rl', title: 'اختصارهای دوپهلو', who: 'تمرین سرواژه‌های',
      brief: 'در منابع مرجع آمده است که یک سرواژه می‌تواند چند معنی داشته باشد: AMA، CAT، ECT و MRI هر کدام دو یا سه معنی دارند و BM حتی بیشتر. باید معنی هر کدام را از بافت جمله پیدا کنی.',
      chart: [['AMA', 'patient left AMA'], ['MS', 'cardiac murmur, MS'], ['ECT', 'severe depression, ECT'], ['BM', 'no BM since yesterday']],
      fig: { a: 'word-kinds', l: [] },
      steps: [
        M('بافت', '«بیمار AMA بیمارستان را ترک کرد» یعنی…', ['برخلاف توصیه پزشک', 'با انجمن پزشکی آمریکا', 'پس از ناهار', 'با آمبولانس'], 'against medical advice.'),
        M('بافت', 'در پرونده قلبی، MS بیشتر یعنی…', ['تنگی دریچه میترال', 'مولتیپل اسکلروزیس', 'مورفین سولفات', 'دانشجوی پزشکی'], 'mitral stenosis.'),
        M('بافت', 'در بیمار با افسردگی شدید، ECT یعنی…', ['شوک‌درمانی الکتریکی', 'قرص روکش‌دار', 'آزمون لخته', 'نوار قلب'], 'electroconvulsive therapy.'),
        M('بافت', '«از دیروز BM نداشته است» یعنی…', ['اجابت مزاج', 'مغز استخوان', 'شیر مادر', 'جرم بدن'], 'bowel movement.'),
        T('قاعده', 'اگر معنی اختصار روشن نیست، بهتر است کامل بنویسیم.', true, 'هرگز اختصار من‌درآوردی ننویس.'),
        P('سرواژه', 'هر سرواژه را به معنی رایجش وصل کن', [['MRI', 'تصویربرداری تشدید مغناطیسی'], ['COPD', 'بیماری انسدادی مزمن ریه'], ['CAT', 'توموگرافی رایانه‌ای'], ['AIDS', 'نشانگان نقص ایمنی اکتسابی']], 'سرواژه‌ها.'),
        S('املا', 'املای «سرواژه» را بنویس', 'acronym', 'acr/o + onym.', 'acro…')
      ]
    },
    {
      id: 'r15', w: 'rl', title: 'تله‌های یادداشت پرستاری', who: 'تمرین واژه‌های هم‌صدا',
      brief: 'بر پایه جدول «Troublesome Soundalikes»، یک یادداشت پرستاری را بازبینی می‌کنی که در آن چند واژه هم‌صدا اشتباه نوشته شده‌اند. باید تشخیص دهی کدام واژه درست است.',
      chart: [['Line 1', 'difficulty swallowing'], ['Line 2', 'heart pounding'], ['Line 3', 'itching of arms'], ['Line 4', 'pain at fibula side of leg']],
      fig: { a: 'soundalikes', l: [] },
      steps: [
        M('هم‌صدا', 'بیمار در قورت دادن مشکل دارد:', ['dysphagia', 'dysphasia', 'dysphonia', 'dyspnea'], '‎-phagia‎ بلع.'),
        M('هم‌صدا', 'بیمار می‌گوید قلبش تند و محکم می‌زند:', ['palpitation', 'palpation', 'pulsation', 'perfusion'], 'palpitation.'),
        M('هم‌صدا', 'خارش پوست بازوها:', ['pruritus', 'pleuritis', 'pruritis', 'purpura'], 'pruritus با u.'),
        M('هم‌صدا', 'درد در کناره بیرونی ساق:', ['peroneal', 'perineal', 'peritoneal', 'periosteal'], 'perONeal روی ساق.', null, { a: ['peri-pero'], l: [] }),
        M('هم‌آوا', 'شکستگی در لگن (بال استخوان لگن):', ['ilium', 'ileum', 'ileus', 'ilion'], 'ilium با i.'),
        P('هم‌صدا', 'هر واژه را به معنی‌اش وصل کن', [['mucus', 'مخاط (اسم)'], ['mucous', 'مخاطی (صفت)'], ['callus', 'پینه'], ['efferent', 'وابران']], 'واژه‌های هم‌صدا.'),
        S('املا', 'املای «خارش» را بنویس', 'pruritus', 'با u.', 'prur…')
      ]
    },
    /* ================= در بیمارستان ================= */
    {
      id: 'r16', w: 'hs', title: 'چهار نسخه', who: 'تمرین «Prescription Practice»',
      brief: 'در تمرین Prescription Practice، باید چهار نسخه را به زبان ساده بنویسی. داروها Pravachol، Lanoxin، Synthroid و Norvasc هستند و متن کامل هر نسخه در پرونده بیمار آمده است.',
      chart: [['Rx 1', 'Pravachol 20 mg, i q noc, #30, refill 3x, no sub'], ['Rx 2', 'Lanoxin 0.125 mg, iii stat, then ii q am, #100'], ['Rx 3', 'Synthroid 0.075 mg, i daily, #100, refill x4'], ['Rx 4', 'Norvasc 5 mg, i q am, #60, 0 refills']],
      fig: { a: 'prescription-anatomy', l: [] },
      steps: [
        M('Sig', 'i q noc یعنی…', ['یک عدد هر شب', 'یک عدد هر صبح', 'یک عدد در صورت نیاز', 'یک عدد پیش از غذا'], 'noc یعنی شب.'),
        M('Sig', 'iii stat, then ii q am یعنی…', ['سه عدد فوری، سپس هر صبح دو عدد', 'سه بار در روز، دو بار در شب', 'سه عدد هر صبح', 'دو عدد فوری'], 'stat فوری؛ q am هر صبح.'),
        M('Disp', '#30 یعنی…', ['۳۰ عدد تحویل بده', '۳۰ روز بخور', '۳۰ میلی‌گرم', 'هر ۳۰ دقیقه'], 'تعداد تحویلی.'),
        M('Refill', 'no sub یعنی…', ['داروساز نباید داروی دیگری جایگزین کند', 'زیر زبان نخورد', 'بدون نسخه', 'بدون غذا'], 'no substitution.'),
        T('Refill', 'refill x4 یعنی نسخه را چهار بار می‌شود تکرار کرد.', true, 'چهار بار تکرار.'),
        P('اختصار', 'هر بخش نسخه را به معنی‌اش وصل کن', [['Rx', 'بگیر؛ نسخه'], ['Sig', 'دستور مصرف'], ['stat', 'فوری'], ['daily', 'روزی یک بار']], 'بخش‌های نسخه.'),
        S('املا', 'اختصار «هنگام خواب» را بنویس', 'hs', 'hour of sleep.', 'h…')
      ]
    },
    {
      id: 'r17', w: 'hs', title: 'سالمند کم‌آب', who: 'خانم ۹۲ ساله',
      brief: 'در یادداشت سیر بیماری مرجع، خانمی ۹۲ ساله با dehydration کمی بهتر شده است. داروهایش: سرم D5W @ 100 cc/hr به‌صورت I.V.، Biaxin 500 mg PO q12 hr برای sinusitis، Omeprazole 20 mg PO daily برای GERD و قطره Xalatan 2 gtt در OS و OD برای glaucoma. اگر بهبود ادامه یابد، D/C به LTC می‌شود.',
      chart: [['Age', '92'], ['Dx', 'dehydration'], ['IV', 'D5W @ 100 cc/hr'], ['Meds', 'Biaxin PO q12 hr; Omeprazole PO daily; Xalatan 2 gtt OS/OD'], ['Plan', 'D/C to LTC']],
      fig: { a: 'route-abbr', l: [] },
      steps: [
        M('اختصار', 'PO q12 hr یعنی…', ['خوراکی هر ۱۲ ساعت', 'تزریقی هر ۱۲ ساعت', 'خوراکی ۱۲ بار در روز', 'قطره هر ۱۲ ساعت'], 'per os؛ q یعنی هر.'),
        M('اختصار', '2 gtt OS یعنی…', ['دو قطره در چشم چپ', 'دو قطره در چشم راست', 'دو قرص زیر زبان', 'دو قطره در گوش'], 'gtt قطره؛ OS چشم چپ.'),
        M('اختصار', 'D/C to LTC یعنی…', ['ترخیص به مرکز مراقبت طولانی‌مدت', 'قطع دارو در بخش ویژه', 'انتقال به اورژانس', 'ترخیص به خانه'], 'discharge to long-term care.', null, { a: ['care-settings'], l: [] }),
        M('واژه', 'sinusitis یعنی…', ['التهاب سینوس', 'التهاب بینی', 'التهاب گلو', 'التهاب گوش'], 'sinus + ‎-itis‎.'),
        T('واژه', 'dehydration یعنی کمبود آب بدن.', true, 'de- + hydr/o.'),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['OD', 'چشم راست'], ['GERD', 'ریفلاکس معده به مری'], ['IV', 'داخل وریدی'], ['daily', 'روزی یک بار']], 'اختصارهای یادداشت.'),
        S('املا', 'املای «کم‌آبی بدن» را بنویس', 'dehydration', 'de- + hydr/o + ‎-ation‎.', 'dehyd…')
      ]
    },
    {
      id: 'r18', w: 'hs', title: 'سرماخوردگی سه‌هفته‌ای', who: 'مرد ۶۸ ساله در اورژانس',
      brief: 'در یادداشت اورژانس مرجع، مردی ۶۸ ساله با angina و SOB آمده است. سه هفته «سرماخوردگی» داشته با سرفه خلط‌دار سبز، تب تا ۱۰۲٫۴، malaise و diaphoresis. EKG کنار تخت طبیعی است. Impression: R/O pneumonia. Plan: CXR AP/Lateral، CBC، chem panel و cardiac enzymes سه بار در سه ساعت.',
      chart: [['Age', '68'], ['CC', 'angina, SOB'], ['T', '102.4'], ['EKG', 'normal'], ['Plan', 'CXR AP/Lat, CBC, chem panel, cardiac enzymes × 3']],
      fig: { a: 'chart-note', l: [] },
      steps: [
        M('اختصار', 'SOB یعنی…', ['تنگی نفس', 'سرفه', 'درد قفسه سینه', 'تب'], 'shortness of breath.'),
        M('واژه', 'diaphoresis یعنی…', ['تعریق زیاد', 'اسهال', 'تب', 'کم‌آبی'], 'تعریق.'),
        M('اختصار', 'CXR AP/Lat یعنی…', ['عکس قفسه سینه از جلو و پهلو', 'سی‌تی قفسه سینه', 'نوار قلب', 'سونوگرافی شکم'], 'chest x-ray, anterior-posterior and lateral.'),
        T('اختصار', 'R/O pneumonia یعنی تشخیص قطعی سینه‌پهلوست.', false, 'یعنی باید احتمالش بررسی شود.'),
        M('ابزار', 'EKG چیست؟', ['نوار ثبت‌شده فعالیت برقی قلب', 'دستگاه نوار قلب', 'عکس قلب', 'آزمایش خون'], 'electrocardiogram.', null, { a: ['ecg-strip'], l: ['نوار قلب'] }),
        P('اختصار', 'هر اختصار را به معنی‌اش وصل کن', [['CBC', 'شمارش کامل خون'], ['CXR', 'عکس قفسه سینه'], ['EKG', 'نوار قلب'], ['R/O', 'رد کردن احتمال']], 'اختصارهای یادداشت اورژانس.'),
        S('املا', 'املای «سینه‌پهلو» را بنویس', 'pneumonia', 'p ساکت.', 'pneu…')
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
    ['Ab', 'معنی هر واژه را از پسوند شروع کن، بعد پیشوند و در آخر ریشه را بخوان.'],
    ['Ab', 'ریشه + واکه رابط = شکل ترکیبی؛ مثل cardi/o و gastr/o.'],
    ['Ab', 'پیش از پسوندی که با واکه شروع شود، o حذف می‌شود: gastritis، نه gastroitis.'],
    ['Ab', 'میان دو ریشه، واکه رابط همیشه می‌ماند: osteoarthritis.'],
    ['Ab', 'در آغاز واژه، p پیش از s، n و t خوانده نمی‌شود: psychology، pneumonia، ptosis.'],
    ['Ab', 'nephr/o یونانی و ren/o لاتین است؛ هر دو یعنی کلیه.'],
    ['Rt', 'cephal/o سر است و encephal/o مغز درون سر.'],
    ['Rt', 'enter/o روده باریک است و col/o روده بزرگ.'],
    ['Rt', 'my/o عضله است و myel/o نخاع یا مغز استخوان.'],
    ['Rt', 'erythr/o قرمز، leuk/o سفید، cyan/o آبی، melan/o سیاه و xanth/o زرد است.'],
    ['Rt', 'staphyl/o خوشه‌ای مثل انگور و strept/o زنجیره‌ای است.'],
    ['Sf', '‎-itis‎ التهاب، ‎-osis‎ حالت، ‎-algia‎ درد و ‎-megaly‎ بزرگی است.'],
    ['Sf', '‎-ectomy‎ برداشتن، ‎-tomy‎ برش و ‎-stomy‎ ایجاد منفذ است.'],
    ['Sf', '‎-scope‎ ابزار است و ‎-scopy‎ روش؛ ‎-graph‎ دستگاه و ‎-gram‎ نگاره.'],
    ['Sf', '‎-rrhea‎ جریان، ‎-rrhage‎ فوران خون و ‎-rrhaphy‎ بخیه است؛ هر سه با rrh.'],
    ['Sf', '‎-iatrics‎ رشته است و ‎-ician‎ پزشکِ آن رشته: pediatrics و pediatrician.'],
    ['Pf', 'uni- یک، bi- دو، tri- سه، quadri- چهار و hemi- نیم است.'],
    ['Pf', 'intra- درون است و inter- میان؛ یک حرف، دو جا.'],
    ['Pf', 'brady- کند و tachy- تند است؛ hypo- کم و hyper- زیاد.'],
    ['Pf', 'abduction دور شدن از خط میانی و adduction نزدیک شدن به آن است.'],
    ['Pf', 'proximal نزدیک به تنه و distal دور از تنه است.'],
    ['Rl', 'vertebra ← vertebrae، bronchus ← bronchi، bacterium ← bacteria.'],
    ['Rl', 'appendix ← appendices، phalanx ← phalanges، ganglion ← ganglia.'],
    ['Rl', 'meatus در جمع هم meatus می‌ماند و femur می‌شود femora.'],
    ['Rl', 'ileum بخش پایانی روده باریک است و ilium بال استخوان لگن.'],
    ['Rl', 'dysphagia اختلال بلع است و dysphasia اختلال گفتار.'],
    ['Rl', 'perINeal میان دو پاست و perONeal روی ساق.'],
    ['Hs', 'H&P روز پذیرش، progress notes هر روز و discharge summary روز ترخیص نوشته می‌شود.'],
    ['Hs', 'i po tid یعنی یک قرص، خوراکی، روزی سه بار.'],
    ['Hs', 'qd و qod را ننویس؛ daily و every other day بنویس.'],
    ['Hs', 'صفر پایانی ننویس (1 mg) ولی صفر آغازین لازم است (0.5 mg).'],
    ['Hs', 'هر دارو یک نام ژنریک و یک یا چند نام تجاری دارد.']
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
