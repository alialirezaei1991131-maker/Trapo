/* آکادمی بالینی — داده‌های دوره «نگار» (معاینه فیزیکی تغذیه‌محور (NFPE))
 * این فایل هیچ کدی را اجرا نمی‌کند؛ فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند.
 * موتور (js/engine.js) هنگام ورود به این دوره، به ترتیب config → content → tools را صدا می‌زند.
 *   content(): همه ماژول‌های محتوایی اصلی (فرمول‌ها، دنیاها، درس‌ها، کاراکترها، راند بیمارستان، نکته‌ها، انگلیسی) بدون هیچ حذف یا خلاصه‌سازی
 *   tools():   ماشین‌حساب‌ها و ابزارهای بالینی دوره
 *   config():  متن‌ها، شخصیت و ثابت‌های اختصاصی دوره که موتور مشترک از آن‌ها استفاده می‌کند */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  AC.negar = {
    /* bitFlag: بیت یکتای این دوره در کدهای فعال‌سازی (توان ۲: 1، 2، 4، 8، … 32768). هرگز عوض نشود. */
    id: 'negar', bitFlag: 4, order: 3,
    /* فایل‌های جانبی: فقط هنگام ورود به همین دوره (یا کیس‌های ICU) بارگذاری می‌شوند */
    assets: ['courses/data-negar-img.js'],
    nameFa: 'نگار', nameEn: 'Negar', subjectFa: 'معاینه فیزیکی تغذیه‌محور (NFPE)', subjectEn: 'Nutrition-focused physical exam',
    courseFa: 'معاینه فیزیکی تغذیه‌محور بزرگسالان (NFPE)', courseEn: 'Nutrition-Focused Physical Exam for Adults (NFPE)', descFa: 'معیارهای سوءتغذیه، التهاب، عضله و چربی، مایعات، قدرت چنگش و ریزمغذی‌ها.', toolsFa: 'طبقه‌بندی سوءتغذیه و ابزارهای NFPE', icon: '🔍',
    color: '#8e2c6e', dark: '#6a1d51', light: '#f7e2ef', langs: ["fa", "en"], codePrefix: 'NG',
    stats: {"worlds": 5, "levels": 15, "lessons": 45, "questions": 267, "rounds": 15, "roundSteps": 76, "chars": 15, "firstLesson": "hx1"},
    /* کاتالوگ برای صفحه اول و پنجره معرفی/ارتقا: دنیاها و سطح‌ها، ابزارها، اهداف یادگیری */
    catalog: {"tagline": "بدن بیمار را مثل یک کتاب بخوان", "about": "نگار، ذره‌بینی که با دقت نگاه می‌کند، معاینه فیزیکی تغذیه‌محور بزرگسالان را بر پایه معیارهای Academy/ASPEN آموزش می‌دهد: شش ویژگی سوءتغذیه در زمینه حاد، مزمن و اجتماعی، التهاب و مستندسازی با کد ICD-10، معاینه عضله و چربی از گیجگاه تا ساق، ادم و دهیدراتاسیون، قدرت چنگش و نشانه‌های ریزمغذی‌ها در پوست، ناخن، مو و دهان. بیش از صد تصویر بالینی (طبیعی، خفیف تا متوسط و شدید) چشمت را برای معاینه واقعی تربیت می‌کند و ۱۵ بیمار در راند، ارزیابی و نوشتن یادداشت را تمرین می‌دهند.", "audience": "کارشناس و دانشجوی تغذیه، متخصص تغذیه، پزشک و رزیدنت، پرستار بخش و ICU", "highlights": ["بیش از ۱۰۰ تصویر بالینی واقعی", "طبقه‌بندی سوءتغذیه با متن آماده یادداشت", "نسخه کامل فارسی و انگلیسی"], "outcomes": ["شش ویژگی سوءتغذیه را در زمینه حاد، مزمن و اجتماعی به کار ببری", "کاهش وزن و دریافت انرژی را حساب کنی و بدانی دقیقاً کدام آستانه را کامل می‌کنند", "گیجگاه، ترقوه، کتف، دنده‌ها، سه‌سر، دست، ران و ساق را معاینه کنی و درجه تحلیل را تعیین کنی", "ادم گوده‌گذار را از ۱+ تا ۴+ درجه‌بندی کنی و از ادم براونی و ترومبوز ورید عمقی جدا کنی", "دهیدراتاسیون را در دهان، چشم، پوست، ناخن و نسبت BUN به کراتینین بشناسی", "قدرت چنگش را به روش استاندارد بسنجی و نشانه‌های پوست، ناخن، مو و دهان را بخوانی", "یادداشت سوءتغذیه را خلاصه، مستدل و با کد ICD-10 درست بنویسی"], "worlds": [{"id": "hx", "name": "آمادگی و ارزیابی", "sub": "شش ویژگی سوءتغذیه، دریافت، وزن و روش معاینه", "sym": "Hx", "color": "#FF7A45", "levels": ["قدم‌های اول", "کارآگاهان تاریخچه", "استادان سر تا پا"]}, {"id": "inf", "name": "التهاب و مستندسازی", "sub": "اتیولوژی، نشانگرها، کدگذاری و پرونده", "sym": "CRP", "color": "#7B5CE0", "levels": ["ردیابان التهاب", "خوانندگان آزمایش", "نویسندگان پرونده"]}, {"id": "mf", "name": "عضله و چربی", "sub": "معاینه سر تا پای ذخیره عضله و چربی زیرپوستی", "sym": "M/F", "color": "#E5476B", "levels": ["نقشه‌خوانان بدن", "لمس‌شناسان", "استادان تحلیل"]}, {"id": "fl", "name": "وضعیت مایعات", "sub": "ادم، درجه‌بندی گوده و دهیدراتاسیون", "sym": "H₂O", "color": "#18A6D9", "levels": ["ردیابان مایع", "درجه‌بندان ادم", "نگهبانان آب"]}, {"id": "mn", "name": "عملکرد و ریزمغذی‌ها", "sub": "قدرت چنگش و نشانه‌های پوست، ناخن، مو و دهان", "sym": "Zn", "color": "#12A594", "levels": ["قدرت‌سنج‌ها", "کارآگاهان پوست و ناخن", "استادان سر تا پا"]}], "tools": [{"id": "aspen", "sym": "Dx", "name": "طبقه‌بندی سوءتغذیه", "color": "#8E2C6E", "desc": "شش ویژگی سوءتغذیه در سه زمینه؛ تشخیص پیشنهادی، کد ICD-10 و متن یادداشت"}, {"id": "wt", "sym": "Wt", "name": "تغییر وزن", "color": "#FF7A45", "desc": "درصد کاهش وزن، درصد وزن معمول، BMI و معیار هر زمینه"}, {"id": "intake", "sym": "kcal", "name": "دریافت انرژی", "color": "#7B5CE0", "desc": "دریافت به صورت درصد نیاز و معیار دریافت در هر زمینه"}, {"id": "grip", "sym": "Grip", "name": "قدرت چنگش", "color": "#12A594", "desc": "میانگین سه تلاش هر دست به روش استاندارد و نقطه برش قدرت کم"}, {"id": "edema", "sym": "1+", "name": "درجه ادم", "color": "#18A6D9", "desc": "درجه ادم گوده‌گذار از عمق، شدت در الگوی پرونده و معیار سوءتغذیه"}]},

    config: function (EA) {
      const T = EA.T;
      const fa = (n, d) => EA.fa(n, d);
      return {
        id: 'negar', bit: 4, key: 'academy_course_negar', langs: ["fa", "en"], startWorld: 'hx', codePrefix: 'NG',
        nameFa: 'نگار', nameEn: 'Negar', titleFa: 'نگار · آموزش معاینه فیزیکی تغذیه‌محور', titleEn: 'Negar · Learn the Nutrition-Focused Physical Exam',

        /* ---------- وضعیت: عنوان سطح‌ها، نقش رقبای لیگ و نشان‌ها ---------- */
        state: {
          titles: ['ناظر تازه‌کار', 'چشم کنجکاو', 'دست‌های گرم', 'لمس‌شناس', 'کارآموز بالین', 'شکارچی تحلیل عضله', 'کاشف پد چربی',
    'خواننده ادم', 'استاد گیجگاهی', 'دینامومترباز', 'کارآگاه ریزمغذی', 'فرمانده NFPE', 'استاد سر تا پا', 'افسانه بالین', 'اسطوره تغذیه بالینی'],
          titlesEn: ['Fresh Observer', 'Curious Eye', 'Warm Hands', 'Palpation Pro', 'Bedside Trainee', 'Wasting Hunter', 'Fat-Pad Finder',
    'Edema Reader', 'Temple Master', 'Dynamometer Ace', 'Micronutrient Detective', 'NFPE Commander', 'Head-to-Toe Master', 'Bedside Legend', 'Clinical Nutrition Myth'],
          roles: ['کارشناس تغذیه بالینی', 'دانشجوی تغذیه', 'کارشناس ارشد تغذیه', 'رزیدنت داخلی', 'پرستار ICU', 'دانشجوی پزشکی', 'متخصص تغذیه', 'کارشناس تغذیه ICU', 'پزشک عمومی', 'پرستار بخش', 'دانشجوی دکتری تغذیه', 'کارشناس تغذیه انکولوژی'],
          rolesEn: ['Clinical dietitian', 'Nutrition student', 'MSc dietitian', 'Internal medicine resident', 'ICU nurse', 'Medical student', 'Nutrition specialist', 'ICU dietitian', 'General practitioner', 'Ward nurse', 'PhD nutrition student', 'Oncology dietitian'],
          badges: [
    { id: 'first', icon: '🌱', name: 'اولین لمس', desc: 'اولین درس را تمام کن' },
    { id: 'perfect3', icon: '💯', name: 'بی‌نقص', desc: 'سه درس را بدون اشتباه تمام کن' },
    { id: 'streak3', icon: '🔥', name: 'گرم شدی', desc: 'زنجیره ۳ روزه' },
    { id: 'streak7', icon: '🌋', name: 'آتشفشان', desc: 'زنجیره ۷ روزه' },
    { id: 'calc10', icon: '🧮', name: 'ماشین‌حساب انسانی', desc: '۱۰ مسئله محاسباتی درست' },
    { id: 'calc50', icon: '🧠', name: 'مغز بالینی', desc: '۵۰ مسئله محاسباتی درست' },
    { id: 'speed15', icon: '⚡', name: 'برق‌آسا', desc: 'در چالش سرعت ۱۵ جواب درست بده' },
    { id: 'combo10', icon: '🎯', name: 'تک‌تیرانداز', desc: '۱۰ جواب درست پشت سر هم' },
    { id: 'w_hx', icon: '📋', name: 'آماده معاینه', desc: 'آزمون مرحله آمادگی و ارزیابی را قبول شو' },
    { id: 'w_inf', icon: '🔥', name: 'رمزگشای التهاب', desc: 'آزمون مرحله التهاب و مستندسازی را قبول شو' },
    { id: 'w_mf', icon: '💪', name: 'شکارچی تحلیل', desc: 'آزمون مرحله عضله و چربی را قبول شو' },
    { id: 'w_fl', icon: '💧', name: 'نگهبان مایعات', desc: 'آزمون مرحله وضعیت مایعات را قبول شو' },
    { id: 'w_mn', icon: '🔍', name: 'کارآگاه ریزمغذی', desc: 'آزمون مرحله عملکرد و ریزمغذی‌ها را قبول شو' },
    { id: 'xp1000', icon: '🏅', name: 'هزار امتیاز', desc: '۱۰۰۰ امتیاز جمع کن' },
    { id: 'rounds', icon: '🩺', name: 'کارشناس کشیک', desc: 'همه کیس‌های راند بیمارستان را قبول شو' },
    { id: 'final', icon: '🎓', name: 'استاد NFPE', desc: 'امتحان نهایی را قبول شو' }
  ],
          badgesEn: {
    first: ['First Touch', 'Finish your first lesson'],
    perfect3: ['Flawless', 'Finish three lessons without a mistake'],
    streak3: ['Warming Up', '3-day streak'],
    streak7: ['Volcano', '7-day streak'],
    calc10: ['Human Calculator', '10 correct calculations'],
    calc50: ['Clinical Brain', '50 correct calculations'],
    speed15: ['Lightning Fast', '15 correct answers in the speed challenge'],
    combo10: ['Sharpshooter', '10 correct answers in a row'],
    w_hx: ['Exam Ready', 'Pass the preparation and assessment checkpoint'],
    w_inf: ['Inflammation Decoder', 'Pass the inflammation and documentation checkpoint'],
    w_mf: ['Wasting Hunter', 'Pass the muscle and fat checkpoint'],
    w_fl: ['Fluid Guardian', 'Pass the fluid status checkpoint'],
    w_mn: ['Micronutrient Detective', 'Pass the function and micronutrient checkpoint'],
    xp1000: ['Thousand Club', 'Earn 1000 XP'],
    rounds: ['On-Call Dietitian', 'Pass every hospital-round case'],
    final: ['NFPE Master', 'Pass the final exam']
  }
        },

        /* ---------- رابط: شخصیت، کنفتی و الگوی واحدها ---------- */
        confetti: ['#8E2C6E', '#FF6B57', '#FFC800', '#18A6D9', '#7B5CE0', '#12A594', '#E5476B', '#FF9F43'],
        unitRun: /([−≈+]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mg\/dL|g\/dL|mm Hg|mmHg|kcal\/kg|kcal|kg\/m²|kg|mm|cm|mL|°C|bpm|\/min)(?![A-Za-z]))/g,
        mascot: function (mood, color, size) {
            const c = color || 'var(--brand)';
            const m = mood || 'happy';
            const ink = '#3b1530';
            const cx = 56, cy = 72;
            const my = cy + 19;
            const mouths = {
              happy: `<path d="M${cx - 11} ${my} Q${cx} ${my + 11} ${cx + 11} ${my}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
              cheer: `<path d="M${cx - 13} ${my - 3} Q${cx} ${my + 20} ${cx + 13} ${my - 3} Z" fill="${ink}"/><path d="M${cx - 6} ${my + 7} Q${cx} ${my + 11} ${cx + 6} ${my + 7}" fill="#ff8a7a"/>`,
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
            return `<svg class="yona negar yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
              <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
              <g class="yona-body">
                <path d="M88 104 L108 130" stroke="#6E1F54" stroke-width="17" stroke-linecap="round"/>
                <path d="M95 113 L108 130" stroke="#FF6B57" stroke-width="17" stroke-linecap="round"/>
                <path d="M97 116 L106 128" stroke="#fff" stroke-opacity=".35" stroke-width="4" stroke-linecap="round"/>
                <circle cx="${cx}" cy="${cy}" r="47" fill="var(--c)"/>
                <circle cx="${cx}" cy="${cy}" r="47" fill="#000" opacity=".08"/>
                <circle cx="${cx}" cy="${cy}" r="37" fill="#F1FAFF"/>
                <path d="M${cx - 27} ${cy - 12} A30 30 0 0 1 ${cx - 6} ${cy - 30}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
                <circle cx="${cx}" cy="${cy}" r="37" fill="none" stroke="#000" stroke-opacity=".06" stroke-width="5"/>
                <path class="negar-spark" d="M98 22 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FF6B57"/>
                ${brows}${eyes}
                <ellipse cx="${cx - 24}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff8a7a" opacity=".6"/><ellipse cx="${cx + 24}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff8a7a" opacity=".6"/>
                ${mouths[m] || mouths.happy}${tear}
              </g>
            </svg>`;
          },
        uiExtra: function () {
          return {};
        },

        /* ---------- اجراکننده ---------- */
        numPlaceholder: () => T('عدد یا عبارت، مثلاً (72-65)/72*100', ''),
        roundBrief: function (r, figCard, caseCard, labCard) {
          const brief = { kind: 'learn', title: T(`پرونده: ${r.title}`, `Case: ${r.title}`), bubble: T('بیمار تازه رسید! 🚑', 'A new patient just arrived! 🚑'), body: `<div class="rbrief"><b>${r.who}</b><p>${r.brief}</p></div>${figCard(r.fig)}${caseCard(r.chart)}<p>${T('در هر مرحله بهترین تصمیم را بگیر و توضیح هر پاسخ را بخوان؛ این‌جا ارزیابی کامل و مستندسازی یک بیمار واقعی تمرین می‌شود.', 'Make the best decision at each step and read every explanation; this is where you practice assessing and documenting a real patient.')}</p>` };
          return brief;
        },

        /* ---------- پوسته ---------- */
        icons: { tools: '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="4" fill="#8E2C6E"/><rect x="9" y="6" width="14" height="6" rx="1.5" fill="#fff"/><g fill="#fff" opacity=".9"><circle cx="11" cy="17" r="1.8"/><circle cx="16" cy="17" r="1.8"/><circle cx="21" cy="17" r="1.8"/><circle cx="11" cy="23" r="1.8"/><circle cx="16" cy="23" r="1.8"/><rect x="19.2" y="21.2" width="3.6" height="3.6" rx="1" fill="#FFC800"/></g></svg>', chars: '<svg viewBox="0 0 32 32"><ellipse cx="16" cy="18" rx="12" ry="11" fill="#FF6B57"/><ellipse cx="16" cy="19" rx="7" ry="5" fill="#000" opacity=".1"/><circle cx="12.5" cy="17" r="2" fill="#fff"/><circle cx="19.5" cy="17" r="2" fill="#fff"/><path d="M13 22q3 2.5 6 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="m25 3 1.2 2.8L29 7l-2.8 1.2L25 11l-1.2-2.8L21 7l2.8-1.2z" fill="#FFC800"/></svg>' },
        obRoles: [['کارشناس تغذیه', 'Dietitian'], ['دانشجوی تغذیه', 'Nutrition student'], ['پزشک یا رزیدنت', 'Physician or resident'], ['دانشجوی پزشکی', 'Medical student'], ['پرستار', 'Nurse'], ['سایر', 'Other']],
        practice: function (h) {
          const { s, worldOf } = h;
          return {
            calc: `<div class="pcard__i">🧮</div><h3>${T('تمرین با عدد و تصویر', 'Numbers & pictures practice')}</h3>
          <p>${T('محاسبه، طبقه‌بندی و تصویرهای بالینی تازه در هر بار. دنیا را انتخاب کن:', 'Fresh calculations, classifications and clinical pictures every time. Pick a world:')}</p>`,
            rounds: `<p>${T(`${fa(EA.rounds.length)} بیمار، از ICU تا درمانگاه؛ پرونده را بخوان، معاینه کن، معیارهای سوءتغذیه را بسنج و یادداشت بنویس.`, `${fa(EA.rounds.length)} patients, from the ICU to the clinic: read the chart, examine, apply the malnutrition criteria and write the note.`)}</p>
          <div class="rgroups">${EA.worlds.map(w => { const rs = EA.rounds.filter(r => r.w === w.id); if (!rs.length) return ''; return `<div class="rgroup"><div class="rgroup__h"><span class="wsym" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span><b>${w.name}</b><small>${T(`${fa(rs.length)} بیمار`, `${fa(rs.length)} patients`)}</small></div><div class="rlist">${rs.map(r => { const st = (s.rounds || {})[r.id]; return `<button class="rcase ${st && st.passed ? 'is-done' : ''}" data-act="round" data-id="${r.id}" style="--wc:${w.color};--wd:${w.dark}"><span class="rcase__t"><b>${r.title}</b><small>${r.who}</small></span><span class="rcase__s">${st ? (st.passed ? '✓ ' : '') + fa(Math.round(st.best * 100)) + T('٪', '%') : T(`${fa(r.steps.length)} مرحله`, `${fa(r.steps.length)} steps`)}</span></button>`; }).join('')}</div></div>`; }).join('')}</div>`,
            guide: `<p>${T('همه جدول‌ها، تصویرها و نکته‌های هر دنیا در یک نگاه.', 'Every table, picture and key idea of each world at a glance.')}</p>`
          };
        },
        cert: function (s) {
          return {
            kicker: `<small class="cert__kicker">${T('نگار · آکادمی معاینه تغذیه‌محور', 'Negar · Nutrition-Focused Physical Exam Academy')}</small>`,
            body: `<p>${T(`دوره آموزشی <b>معاینه فیزیکی تغذیه‌محور بزرگسالان (NFPE)</b> شامل معیارهای سوءتغذیه، التهاب و مستندسازی، معاینه عضله و چربی، ارزیابی مایعات، و وضعیت عملکردی و ریزمغذی‌ها را با موفقیت به پایان رساند و در امتحان نهایی نمره <b>${fa(Math.round(s.final.score * 100))}٪</b> کسب کرد.`, `has successfully completed the course <b>Nutrition-Focused Physical Exam for Adults (NFPE)</b>, covering the malnutrition characteristics, inflammation and documentation, muscle and fat examination, fluid assessment, and functional and micronutrient status, with a final exam score of <b>${fa(Math.round(s.final.score * 100))}%</b>.`)}</p>`
          };
        },
        landing: function (h) {
          const { S, mascot, avatar, musicIcon, langBtn, esc } = h;
          const DEMO = () => ({
    q: T('در این تصویر، وضعیت عضله گیجگاه و چربی زیر چشم چیست؟', 'In this picture, what is the state of the temporalis muscle and the orbital fat pads?'),
    case: [[T('بیمار', 'Patient'), T('مرد ۶۴ ساله، سرطان مری، ۳ ماه کم‌خوردن', 'Man, 64, esophageal cancer, 3 months of poor intake')]],
    fig: { k: 'face-s' },
    opts: [T('از دست رفتن شدید', 'Severe loss'), T('طبیعی', 'Normal'), T('خفیف تا متوسط', 'Mild to moderate'), T('ادم صورت', 'Facial edema')],
    why: T('گودی عمیق گیجگاه که عضله‌ای در لمس ندارد، فرورفتگی و حلقه تیره دور چشم با پوست شل، و استخوان‌های کاملاً مشخص صورت ← از دست رفتن <b>شدید</b> عضله و چربی. در بیماری مزمن، این یافته از سوءتغذیه شدید پشتیبانی می‌کند.',
      'Deep temporal hollowing with no muscle to the touch, a hollow look with dark circles and loose skin around the eyes, and very defined facial bones → <b>severe</b> muscle and fat loss. In chronic illness, this finding supports severe malnutrition.')
  });
    const s = S(), back = !!s.profile;
    const demo = DEMO();
    const lessons = EA.worlds.reduce((a, w) => a + w.lessons.length, 0);
    const qs = EA.worlds.reduce((a, w) => a + w.lessons.reduce((b, l) => b + l.items.filter(x => x.t !== 'learn').length, 0), 0) + EA.rounds.reduce((a, r) => a + r.steps.length, 0);
    const mols = [['Hx', '#FF7A45'], ['CRP', '#7B5CE0'], ['M/F', '#E5476B'], ['H₂O', '#18A6D9'], ['Zn', '#12A594']];
    const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    const startLbl = back ? T('ادامه یادگیری', 'Continue learning') : T('همین حالا شروع کن', 'Start now');
    const lv = back ? EA.S.level() : null;
    const html = `
      <header class="land__bar"><span class="brand">${mascot('happy', 'var(--brand)', 30)}<span>${T('نگار', 'Negar')}</span></span>
        <span class="land__bar-r">${langBtn('data-land="lang"')}<button class="chip-stat chip-stat--music ${s.settings.music ? 'is-on' : ''}" data-act="music" aria-label="${T('موسیقی', 'Music')}">${musicIcon()}</button><button class="btn btn--brand btn--sm" data-land="start">${back ? T('ادامه', 'Continue') : T('شروع', 'Start')}</button></span></header>
      <section class="land__hero">
        <div class="land__orbit" aria-hidden="true">
          <div class="land__yona">${mascot('cheer', 'var(--brand)', 150)}</div>
          ${mols.map((x, i) => `<span class="ion" style="--i:${i};--c:${x[1]}"><b dir="ltr">${x[0]}</b></span>`).join('')}
        </div>
        <span class="land__kicker">${T('🏆 کامل‌ترین مسیر یادگیری معاینه فیزیکی تغذیه‌محور (NFPE)', '🏆 The most complete path to mastering the nutrition-focused physical exam')}</span>
        <h1 class="land__h">${T('بدن بیمار را<br><em>مثل یک کتاب بخوان</em>', 'Read your patient’s body<br><em>like a book</em>')}</h1>
        <p class="land__p">${T(`سلام، من <b>نگار</b> هستم؛ ذره‌بینی که با دقت نگاه می‌کند. این‌جا معاینه را فقط نمی‌خوانی؛ تمرینش می‌کنی: درس‌های سه‌دقیقه‌ای، ${fa(EA.IMG_USED.size)} تصویر بالینی، ${fa(EA.rounds.length)} بیمار برای ارزیابی و ابزاری که معیارهای سوءتغذیه را برایت می‌سنجد.`, `Hi, I’m <b>Negar</b>, a magnifying glass that looks closely. Here you don’t just read about the exam, you practice it: three-minute lessons, ${fa(EA.IMG_USED.size)} clinical pictures, ${fa(EA.rounds.length)} patients to assess and a tool that applies the malnutrition criteria for you.`)}</p>
        <div class="land__cta"><button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
          ${back ? `<span class="land__me">${avatar()}<span><b>${T(`خوش برگشتی ${esc(s.profile.name)}!`, `Welcome back, ${esc(s.profile.name)}!`)}</b><small>${T(`🔥 ${fa(s.streak)} روز · ⚡ ${fa(s.xp)} امتیاز · سطح ${fa(lv.n)}: ${lv.title}`, `🔥 ${fa(s.streak)} days · ⚡ ${fa(s.xp)} XP · Level ${fa(lv.n)}: ${lv.title}`)}</small></span></span>`
            : `<small class="land__free">${T('بدون ثبت‌نام · بدون اینترنت · از همین گوشی', 'No sign-up · Works offline · Right on your phone')}</small><button class="btn btn--ghost" data-land="import">${T('پیشرفت قبلی را بازیابی کن', 'Restore previous progress')}</button>`}</div>
      </section>
      <section class="land__nums">
        ${[[fa(EA.worlds.length), T('دنیای معاینه', 'Exam worlds')], [fa(EA.worlds.length * 3), T('سطح نام‌دار', 'Named levels')], [fa(lessons), T('درس کوتاه', 'Bite-sized lessons')], [fa(qs) + '+', T('سؤال و مرحله بالینی', 'Questions & clinical steps')], [fa(EA.rounds.length), T('بیمار برای مدیریت', 'Patients to manage')], [fa(EA.tools.TOOLS.length), T('ابزار ارزیابی', 'Assessment tools')]].map(x => `<div><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
      </section>
      <section class="land__sec">
        <h2>${T('همین حالا یک معاینه را امتحان کن', 'Try an exam finding right now')}</h2>
        <div class="demo">
          ${EA.ui.figCard(demo.fig)}
          <div class="case"><div class="case__h">🩺 ${T('پرونده بیمار', 'Patient chart')}</div>${demo.case.map(r => `<div class="case__r"><span>${r[0]}</span><b>${EA.ui.iso(r[1])}</b></div>`).join('')}</div>
          <h3 class="q q--sm">${demo.q}</h3>
          <div class="opts">${order.map(k => `<button class="opt" data-demo="${k}"><span>${demo.opts[k]}</span></button>`).join('')}</div>
          <div class="demo__fb" hidden></div>
        </div>
      </section>
      <section class="land__sec">
        <h2>${T('چرا این روش بهترین راه است؟', 'Why this method works')}</h2>
        <p class="land__sub">${T('نگار بر پایه اصولی ساخته شده که پژوهش‌های یادگیری بارها اثرشان را نشان داده‌اند.', 'Negar is built on principles that learning research has shown to work again and again.')}</p>
        <div class="land__why">${[
          ['🧠', T('یادآوری فعال', 'Active recall'), T('به جای خواندن، جواب می‌دهی. هر بار که از حافظه‌ات بیرون می‌کشی، آن نکته محکم‌تر می‌شود.', 'You answer instead of rereading. Every time you pull an idea from memory, it gets stronger.')],
          ['🔁', T('تکرار هوشمند', 'Spaced repetition'), T('هر سؤالی که اشتباه کنی، دوباره و در زمان مناسب برمی‌گردد تا دیگر فراموشش نکنی.', 'Every question you miss comes back at the right time so you never forget it.')],
          ['⚡', T('بازخورد فوری', 'Instant feedback'), T('همان لحظه می‌فهمی چرا درست یا غلط بود؛ هر اشتباه یک درس کوچک می‌شود.', 'You learn right away why you were right or wrong; every mistake becomes a mini-lesson.')],
          ['👁️', T('یادگیری با چشم', 'Learning by seeing'), T('ده‌ها عکس طبیعی، خفیف تا متوسط و شدید؛ چشمت برای معاینه واقعی تربیت می‌شود.', 'Dozens of normal, mild-to-moderate and severe photos train your eye for the real exam.')]
        ].map(x => `<article><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('در پایان دوره تو می‌توانی…', 'By the end of the course you can…')}</h2>
        <ul class="land__out">${(EA.lang === 'en' ? [
          'Apply the six malnutrition characteristics in acute, chronic and social contexts',
          'Calculate weight loss and energy intake and know exactly which threshold they meet',
          'Examine the temples, clavicles, scapulae, ribs, triceps, hands, thighs and calves and grade the loss',
          'Grade pitting edema from 1+ to 4+ and tell it apart from brawny edema and DVT',
          'Spot dehydration in the mouth, eyes, skin and nails and in the BUN-to-creatinine ratio',
          'Measure grip strength by the standard method and read skin, nail, hair and mouth signs',
          'Write a concise, defensible malnutrition note with the right ICD-10 code'
        ] : [
          'شش ویژگی سوءتغذیه را در زمینه حاد، مزمن و اجتماعی به کار ببری',
          'کاهش وزن و دریافت انرژی را حساب کنی و بدانی دقیقاً کدام آستانه را کامل می‌کنند',
          'گیجگاه، ترقوه، کتف، دنده‌ها، سه‌سر، دست، ران و ساق را معاینه کنی و درجه تحلیل را تعیین کنی',
          'ادم گوده‌گذار را از ۱+ تا ۴+ درجه‌بندی کنی و از ادم براونی و ترومبوز ورید عمقی جدا کنی',
          'دهیدراتاسیون را در دهان، چشم، پوست، ناخن و نسبت BUN به کراتینین بشناسی',
          'قدرت چنگش را به روش استاندارد بسنجی و نشانه‌های پوست، ناخن، مو و دهان را بخوانی',
          'یادداشت سوءتغذیه را خلاصه، مستدل و با کد ICD-10 درست بنویسی'
        ]).map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>${T('مسیرت این شکلی است', 'Here’s your path')}</h2>
        <ol class="land__steps">${[
          [T('یاد بگیر', 'Learn'), T('کارت‌های کوتاه با جدول، فلوچارت و رمزهای به‌یادماندنی، قدم‌به‌قدم روی یک مسیر پیچان.', 'Short cards with tables, flowcharts and memorable mnemonics, step by step along a winding path.')],
          [T('تمرین کن', 'Practice'), T('هفت نوع سؤال، از چندگزینه‌ای و سؤال تصویری تا محاسبه؛ مسئله‌ها و تصویرها هر بار تازه‌اند.', 'Seven question types, from multiple choice and picture questions to calculations; problems and pictures are fresh every time.')],
          [T('بیمار را ارزیابی کن', 'Assess patients'), T('راند بیمارستان: پرونده را بخوان، معاینه کن، شدت سوءتغذیه را تعیین و یادداشت را انتخاب کن.', 'Hospital rounds: read the chart, examine, decide the severity of malnutrition and choose the note.')],
          [T('امتحان بده و گواهی بگیر', 'Pass the exam, get certified'), T('با هر سطح یک کاراکتر، با هر دنیا یک نشان، و در پایان گواهی با نام خودت.', 'A character for every level, a badge for every world, and a certificate with your name at the end.')]
        ].map((x, i) => `<li><span>${fa(i + 1)}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></li>`).join('')}</ol>
      </section>
      <section class="land__sec">
        <h2>${T('پنج دنیا، پانزده سطح', 'Five worlds, fifteen levels')}</h2>
        <div class="land__worlds">${EA.worlds.map(w => `<article class="lw" style="--wc:${w.color};--wd:${w.dark}">
          <span class="wsym">${w.sym}</span><h3>${w.name}</h3><p>${w.sub}</p>
          <ol>${w.levels.map(x => `<li>${x}</li>`).join('')}</ol></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('کاراکترها را جمع کن', 'Collect the characters')}</h2>
        <p class="land__sub">${T('هر سطح که تمام شود، یک کاراکتر تازه به تو می‌پیوندد و می‌تواند همراهت در درس‌ها باشد.', 'Every level you finish, a new character joins you and can be your companion in lessons.')}</p>
        <div class="land__chars">${EA.chars.list.filter(c => c.lv === 0).map(c => `<figure>${EA.chars.draw(c, 'happy', 76)}<figcaption>${c.name}</figcaption></figure>`).join('')}
          ${EA.chars.list.filter(c => c.lv > 0).slice(0, 3).map(c => `<figure class="is-lock">${EA.chars.draw(c, 'happy', 76, true)}<figcaption>???</figcaption></figure>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('آیا می‌دانستی؟', 'Did you know?')}</h2>
        <div class="tip tip--land" role="button" tabindex="0" title="${T('نکته بعدی', 'Next tip')}"><div class="tip__body"></div></div>
      </section>
      <section class="land__sec">
        <h2>${T('همه چیزهایی که یک بازی خوب لازم دارد', 'Everything a good game needs')}</h2>
        <div class="land__feat">${[
          ['❤️', T('قلب‌ها', 'Hearts'), T('هر اشتباه یک قلب؛ با تمرین برمی‌گردد', 'Each mistake costs a heart; practice brings it back')],
          ['🔥', T('زنجیره روزانه', 'Daily streak'), T('هر روز چند دقیقه، آتشت روشن می‌ماند', 'A few minutes a day keeps your fire burning')],
          ['🏆', T('لیگ هفتگی', 'Weekly league'), T(`${fa(30)} نفر در هر گروه، از برنز تا الماس`, `${fa(30)} players per group, from Bronze to Diamond`)],
          ['🧮', T('طبقه‌بندی سوءتغذیه', 'Malnutrition classifier'), T('و چهار ابزار دیگر، با متن آماده یادداشت پرونده', 'plus four more tools, with a ready-made chart note')],
          ['🎵', T('موسیقی تمرکز', 'Focus music'), T('آرام و بی‌کلام؛ با یک لمس قطع می‌شود', 'Calm and wordless; one tap turns it off')],
          ['🎓', T('گواهی پایان دوره', 'Course certificate'), T('با نام و تاریخ شمسی', 'With your name and the date')]
        ].map(x => `<div><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div>
      </section>
      <section class="land__end">
        ${mascot('cheer', 'var(--brand)', 110)}
        <h2>${back ? T('درس بعدی منتظرت است', 'Your next lesson is waiting') : T('اولین درس کمتر از ۳ دقیقه است', 'The first lesson takes under 3 minutes')}</h2>
        <p class="land__p">${T('هر روز فقط ۵ دقیقه. چند هفته بعد، معاینه تغذیه‌محور یکی از نقاط قوت تو خواهد بود.', 'Just 5 minutes a day. In a few weeks, the nutrition-focused exam will be one of your strengths.')}</p>
        <button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
        <p class="disclaimer">${T('نگار ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.', 'Negar is an educational tool and does not replace clinical judgment, a physician’s orders or your hospital protocol.')}</p>
      </section>
      <div class="land__sticky"><button class="btn btn--brand btn--lg btn--block" data-land="start">${startLbl}</button></div>`;
          return { html, demo };
        },
        demoFeedback: function (good, demo) {
          const ok = good;
          return `<b>${good ? T('✓ آفرین! دقیقاً همین.', '✓ Nice! Exactly right.') : T('✗ نزدیک بود؛ پاسخ درست: ', '✗ Close; the correct answer: ') + demo.opts[0]}</b><p>${demo.why}</p><button class="btn btn--brand" data-land="start">${good ? T('تو آماده‌ای؛ بیا ادامه بدهیم', 'You’re ready; let’s keep going') : T('بیا با هم یادش بگیریم', 'Let’s learn it together')}</button>`;
        },
        obSteps: function (h) {
          const { d, bubble, esc, GOALS } = h;
          const ROLES = this.obRoles;
          const steps = [
      () => `${bubble(T('سلام! من نگار هستم؛ ذره‌بینی که بدن بیمار را با دقت می‌خواند 🔍 اسمت چیه؟', 'Hi! I’m Negar, a magnifying glass who reads the patient’s body closely 🔍 What’s your name?'))}
        <input class="ob__in" id="ob-name" maxlength="40" placeholder="${T('نام تو', 'Your name')}" value="${esc(d.name)}" autocomplete="given-name">
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="name">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T(`خوشبختم ${esc(d.name)}! یک عکس برای پروفایلت می‌گذاری؟ (اختیاری)`, `Nice to meet you, ${esc(d.name)}! Want to add a profile photo? (optional)`))}
        <div class="ob__photo"><label class="avpick" for="ob-ph">${d.photo ? `<span class="avatar avatar--xl"><img src="${d.photo}" alt="" draggable="false"></span>` : `<span class="avatar avatar--xl" style="--h:170">${esc(d.name[0] || '?')}</span>`}<span class="avpick__cam" aria-hidden="true">📷</span></label>
        <input type="file" id="ob-ph" accept="image/*" hidden><label class="link link--btn" for="ob-ph">${d.photo ? T('تغییر عکس', 'Change photo') : T('انتخاب عکس از گالری', 'Choose a photo from your gallery')}</label></div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">${d.photo ? T('ادامه', 'Continue') : T('فعلاً نه، ادامه', 'Not now, continue')}</button></div>`,
      () => `${bubble(T('در چه زمینه‌ای کار یا تحصیل می‌کنی؟', 'What do you work or study in?'))}
        <div class="ob__grid">${ROLES.map((r, i) => `<button class="ob__opt ${d.role === r[0] ? 'is-sel' : ''}" data-ob="role" data-v="${i}">${T(r[0], r[1])}</button>`).join('')}</div>`,
      () => `${bubble(T('هدف روزانه‌ات چقدر باشد؟', 'How big should your daily goal be?'))}
        <div class="ob__list">${GOALS().map(g => `<button class="ob__opt ob__opt--row ${d.goal === g[0] ? 'is-sel' : ''}" data-ob="goal" data-v="${g[0]}"><b>${g[1]}</b><span>${g[2]}</span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T('از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «آمادگی و ارزیابی» بهترین شروع است؛ بعداً به بقیه هم سر می‌زنیم!', 'Which world shall we start with? If you’re new, “Preparation & assessment” is the best place to begin; we’ll visit the others later!'))}
        <div class="wlist">${EA.worlds.map(w => `<button class="wcard ${d.start === w.id ? 'is-sel' : ''}" data-ob="start" data-v="${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}"><span class="wsym">${w.sym}</span><span><b>${w.name}</b><small>${w.sub}</small></span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="finish">${T('بزن بریم! 🚀', 'Let’s go! 🚀')}</button></div>`
    ];
          return steps;
        }
      };
    },

    /* ================= محتوای کامل دوره (ماژول‌های اصلی، بدون تغییر) ================= */
    content: function () {
      window.EA.IMG = AC.negar.IMG || {}; // همه تصویرهای بالینی NFPE (فایل data-negar-img.js)

/* نگار — نشانی تصویرها
 * در نسخه مستقل ساخته‌شده، build.js پیش از این فایل همه تصویرها را به‌صورت داده در EA.IMG می‌گذارد؛
 * در حالت توسعه (و در آزمون‌های Node) نشانی فایل در پوشه src/img برگردانده می‌شود. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.IMG = EA.IMG || {};
  /** کلیدهای تصویری که محتوا به کار برده؛ آزمون‌ها وجود فایل همه را بررسی می‌کنند */
  EA.IMG_USED = EA.IMG_USED || new Set();
  EA.img = k => { EA.IMG_USED.add(k); return EA.IMG[k] || ('src/img/' + k + '.webp'); };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — معیارهای Academy/ASPEN، محاسبه‌های ارزیابی تغذیه و مولد مسئله‌ها
 * همه محاسبه‌های درس‌ها، ابزارها و آزمون‌ها از همین فایل می‌آیند تا یک منبع واحد داشته باشیم.
 * این فایل هم در مرورگر و هم در Node (برای آزمون‌ها) بارگذاری می‌شود.
 * متن‌ها دوزبانه‌اند: T(فارسی، انگلیسی) و اعداد با رقم همان زبان نوشته می‌شوند.
 * منبع معیارها: Nutrition-Focused Physical Exam for Adults, 2nd ed. (ASPEN/Cleveland Clinic, 2022)
 * و بیانیه اجماع Academy/ASPEN (White و همکاران، ۲۰۱۲). */
(function (root) {
  const EA = root.EA = root.EA || {};
  const T = (a, b) => (EA.lang === 'en' ? b : a);
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ---------- اعداد به رقم زبان فعلی ---------- */
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
  const sg = (x, d) => (x > 0 ? '+' : x < 0 ? '−' : '') + fa(Math.abs(x), d == null ? 1 : d);
  const pc = () => T('٪', '%');

  /* ---------- فرمول‌ها ---------- */
  const F = {
    /** درصد کاهش وزن نسبت به وزن معمول (پایه) */
    wlPct: (usual, cur) => (usual - cur) / usual * 100,
    /** وزن فعلی به صورت درصدی از وزن معمول */
    ubwPct: (usual, cur) => cur / usual * 100,
    /** دریافت انرژی به صورت درصدی از نیاز برآوردشده */
    intakePct: (kcal, req) => kcal / req * 100,
    bmi: (kg, cm) => kg / Math.pow(cm / 100, 2),
    /** میانگین سه بار اندازه‌گیری قدرت چنگش یک دست (روش انجمن درمانگران دست آمریکا) */
    gripMean: (a, b, c) => (a + b + c) / 3,
    bunCr: (bun, cr) => bun / cr
  };

  /* ---------- معیارهای Academy/ASPEN ----------
   * سه زمینه (اتیولوژی): acute = بیماری یا آسیب حاد، chronic = بیماری مزمن، social = شرایط اجتماعی/محیطی.
   * هر ویژگی سطح «mod» (پشتیبان سوءتغذیه متوسط)، «sev» (پشتیبان سوءتغذیه شدید) یا null می‌گیرد.
   * تشخیص پیشنهادی: دست‌کم دو ویژگی لازم است (بیانیه اجماع ۲۰۱۲). */
  const CTX = ['acute', 'chronic', 'social'];
  const CTX_T = {
    acute: ['بیماری یا آسیب حاد', 'acute illness or injury'],
    chronic: ['بیماری مزمن', 'chronic illness'],
    social: ['شرایط اجتماعی یا محیطی', 'social or environmental circumstances']
  };
  const ctxName = c => T(CTX_T[c][0], CTX_T[c][1]);
  const ctxCap = c => (EA.lang === 'en' ? cap(CTX_T[c][1]) : CTX_T[c][0]);
  /** پنجره‌های زمانی کاهش وزن به روز: [روز، آستانه متوسط، آستانه شدید (بیش از)] */
  const WL_WIN = {
    acute: [[7, 1, 2], [30, 5, 5], [90, 7.5, 7.5]],
    chronic: [[30, 5, 5], [90, 7.5, 7.5], [180, 10, 10], [365, 20, 20]],
    social: [[30, 5, 5], [90, 7.5, 7.5], [180, 10, 10], [365, 20, 20]]
  };
  const winName = d => ({ 7: T('۱ هفته', '1 week'), 30: T('۱ ماه', '1 month'), 90: T('۳ ماه', '3 months'), 180: T('۶ ماه', '6 months'), 365: T('۱ سال', '1 year') }[d]);
  /** آستانه‌ها یک عدد واحدند («۵٪ در ۱ ماه» در برابر «بیش از ۵٪»)؛ درصد کاهش را با دقت همان آستانه گرد می‌کنیم:
   * عدد صحیح برای ۵، ۱۰ و ۲۰ درصد، و نیم درصد برای ۱ تا ۲ و ۷٫۵ درصد. */
  const rnd = (x, cut) => (cut % 1 || cut <= 2 ? Math.round(x * 2) / 2 : Math.round(x));
  function weightLevel(ctx, pct, days) {
    const wins = WL_WIN[ctx];
    const w = wins.find(x => days <= x[0]);
    if (!w || !(pct > 0)) return { level: null, win: w ? w[0] : null };
    const r = rnd(pct, w[2]);
    let level = null;
    if (w[0] === 7) level = r > 2 ? 'sev' : r >= 1 ? 'mod' : null;
    else level = r > w[2] ? 'sev' : r === w[1] ? 'mod' : null;
    return { level, win: w[0], cutMod: w[1], cutSev: w[2], r };
  }
  /** دریافت انرژی (درصد نیاز) و مدت به روز */
  function intakeLevel(ctx, pct, days) {
    if (!(pct >= 0) || !(days >= 0)) return null;
    if (ctx === 'acute') return pct <= 50 && days >= 5 ? 'sev' : pct < 75 && days > 7 ? 'mod' : null;
    /* در بیماری مزمن جدول اجماع برای متوسط «کمتر از ۷۵٪» و برای شدید «۷۵٪ یا کمتر»، هر دو برای دست‌کم ۱ ماه، آورده است */
    if (ctx === 'chronic') return pct <= 75 && days >= 30 ? 'sev' : null;
    return pct <= 50 && days >= 30 ? 'sev' : pct < 75 && days >= 90 ? 'mod' : null;
  }
  /** شدت از دست رفتن عضله یا چربی در معاینه: 0 ندارد، 1 خفیف، 2 متوسط، 3 شدید */
  function mfLevel(ctx, g) {
    if (!g) return null;
    if (ctx === 'acute') return g === 1 ? 'mod' : 'sev';
    return g === 3 ? 'sev' : 'mod';
  }
  /** تجمع مایع: حاد = خفیف (متوسط) و متوسط تا شدید (شدید)؛ مزمن و اجتماعی = خفیف و شدید */
  const fluidLevel = mfLevel;
  /** درجه ادم گوده‌گذار به شدت تجمع مایع (الگوی مستندسازی پیوست ۲): ۱+ خفیف، ۲+ متوسط، ۳+ و ۴+ شدید */
  const edemaToSev = g => (g <= 0 ? 0 : g === 1 ? 1 : g === 2 ? 2 : 3);
  /** درجه ادم از عمق گوده (میلی‌متر): ۲، ۴، ۶ و ۸ */
  const edemaFromDepth = mm => (mm < 1 ? 0 : mm < 3 ? 1 : mm < 5 ? 2 : mm < 7 ? 3 : 4);

  const LV = { mod: () => T('متوسط', 'moderate'), sev: () => T('شدید', 'severe') };
  const DX = {
    severe: () => ({ name: T('سوءتغذیه پروتئین-کالری شدید', 'Severe protein-calorie malnutrition'), code: 'E43' }),
    moderate: () => ({ name: T('سوءتغذیه پروتئین-کالری متوسط (غیرشدید)', 'Moderate (nonsevere) protein-calorie malnutrition'), code: 'E44.0' }),
    none: () => ({ name: T('معیارهای سوءتغذیه کامل نیست', 'Malnutrition criteria not met'), code: '' })
  };
  const SEV_NAMES = () => [T('ندارد', 'none'), T('خفیف', 'mild'), T('متوسط', 'moderate'), T('شدید', 'severe')];

  /**
   * تشخیص پیشنهادی بر پایه شش ویژگی.
   * o = { ctx, intake: {pct, days}, wt: {pct, days}, muscle: 0-3, fat: 0-3, fluid: 0-3, grip: true اگر به‌طور قابل اندازه‌گیری کم شده }
   */
  function classify(o) {
    const ctx = o.ctx, items = [];
    if (o.intake && isFinite(o.intake.pct) && isFinite(o.intake.days)) items.push({ k: 'intake', level: intakeLevel(ctx, o.intake.pct, o.intake.days), label: T('دریافت ناکافی انرژی', 'Insufficient energy intake'), val: `${fa(o.intake.pct, 0)}${pc()} · ${fa(o.intake.days, 0)} ${T('روز', 'd')}` });
    if (o.wt && isFinite(o.wt.pct) && isFinite(o.wt.days)) { const w = weightLevel(ctx, o.wt.pct, o.wt.days); items.push({ k: 'wt', level: w.level, label: T('کاهش وزن', 'Weight loss'), val: `${fa(o.wt.pct, 1)}${pc()} · ${fa(o.wt.days, 0)} ${T('روز', 'd')}`, win: w.win }); }
    if (o.muscle != null) items.push({ k: 'muscle', level: mfLevel(ctx, +o.muscle), label: T('از دست رفتن عضله', 'Muscle loss'), val: SEV_NAMES()[+o.muscle] });
    if (o.fat != null) items.push({ k: 'fat', level: mfLevel(ctx, +o.fat), label: T('از دست رفتن چربی زیرپوستی', 'Subcutaneous fat loss'), val: SEV_NAMES()[+o.fat] });
    if (o.fluid != null) items.push({ k: 'fluid', level: fluidLevel(ctx, +o.fluid), label: T('تجمع مایع', 'Fluid accumulation'), val: SEV_NAMES()[+o.fluid] });
    if (o.grip != null) items.push({ k: 'grip', level: o.grip ? 'sev' : null, label: T('کاهش قدرت چنگش', 'Reduced grip strength'), val: o.grip ? T('به‌طور قابل اندازه‌گیری کم', 'measurably reduced') : T('طبیعی', 'normal') });
    const nSev = items.filter(x => x.level === 'sev').length;
    const nMod = items.filter(x => x.level && x.k !== 'grip').length; // قدرت چنگش فقط پشتیبان سوءتغذیه شدید است
    const dx = nSev >= 2 ? 'severe' : nMod >= 2 ? 'moderate' : 'none';
    return Object.assign({ dx, items, nSev, nMod, ctx }, DX[dx]());
  }

  /* ---------- نشانه‌های ریزمغذی (جدول‌های ۷-۱ تا ۷-۴ کتاب) ----------
   * area: skin، nails، hair، face (چشم، لب، دهان و گردن)؛ img: کلید عکس */
  const SIGNS = [
    { k: 'petechiae', area: 'skin', name: ['پتشی (لکه‌های ریز خونریزی پوست)', 'Petechiae (small hemorrhagic spots)'], nut: ['کمبود ویتامین K، E یا C', 'Vitamin K, E and/or C deficiency'], non: ['اختلال خونی، بیماری کبد، مصرف زیاد ضدانعقاد', 'Hematologic disorder, liver disease, anticoagulant overdose'] },
    { k: 'dermatitis', area: 'skin', name: ['درماتیت (پوست متورم و قرمز که ممکن است تاول بزند یا ترشح کند)', 'Dermatitis (swollen, red skin that may blister or ooze)'], nut: ['کمبود روی یا اسیدهای چرب ضروری', 'Zinc or essential fatty acid deficiency'], non: ['درماتیت، بثورات حساسیتی یا دارویی، پسوریازیس', 'Dermatitis, allergic or drug rashes, psoriasis'] },
    { k: 'pellagra', area: 'skin', name: ['درماتوز پلاگرایی (پررنگی پوست در نواحی آفتاب‌خورده)', 'Pellagrous dermatosis (hyperpigmentation of sun-exposed areas)'], nut: ['کمبود نیاسین یا تریپتوفان', 'Niacin or tryptophan deficiency'], non: ['سوختگی، بیماری آدیسون، پسوریازیس', 'Burns, Addison’s disease, psoriasis'] },
    { k: 'flakypaint', area: 'skin', name: ['درماتیت «رنگ پوسته‌شده» (نواحی دور از آفتاب)', '“Flaky paint” dermatitis (areas not exposed to sun)'], nut: ['کمبود پروتئین-کالری', 'Protein-calorie deficiency'], non: ['عوامل محیطی', 'Environmental factors'] },
    { k: 'xerosis', area: 'skin', name: ['زروز (پوست خشک، فلس‌دار و پوسته‌پوسته)', 'Xerosis (dry, scaly, flaky skin)'], nut: ['دهیدراتاسیون، کمبود اسید چرب ضروری یا ویتامین A', 'Dehydration, essential fatty acid or vitamin A deficiency'], non: ['عوامل محیطی یا بهداشتی', 'Environmental or hygiene factors'] },
    { k: 'pallor', area: 'skin', name: ['رنگ‌پریدگی پوست', 'Pallor (pale skin)'], nut: ['کمبود آهن، فولات یا ویتامین B12', 'Iron, folate or vitamin B12 deficiency'], non: ['حالت‌های کم‌حجمی و کم‌خون‌رسانی', 'Low-volume, low-perfusion states'] },
    { k: 'wound', area: 'skin', name: ['زخمی که خوب نمی‌شود', 'Nonhealing wound'], nut: ['کمبود روی، ویتامین C یا پروتئین', 'Zinc, vitamin C or protein deficiency'], non: ['سلولیت', 'Cellulitis'] },
    { k: 'koilonychia', area: 'nails', name: ['کویلونیشیا (ناخن قاشقی)', 'Koilonychia (spoon-shaped nails)'], nut: ['کمبود آهن، با یا بدون کم‌خونی', 'Iron deficiency, with or without anemia'], non: ['ارثی، عفونت، دیابت، کم‌کاری تیروئید', 'Hereditary, infection, diabetes, hypothyroidism'] },
    { k: 'beau', area: 'nails', name: ['خطوط بو (شیارهای عرضی ناخن)', 'Beau’s lines (transverse grooves)'], nut: ['ناکافی بودن پروتئین یا هیپرکلسمی', 'Protein inadequacy or hypercalcemia'], non: ['ضربه، انسداد کرونر، بیماری پوست، بیماری گذرا', 'Trauma, coronary occlusion, skin disease, transient illness'] },
    { k: 'blanch', area: 'nails', name: ['کم‌رنگی بستر ناخن', 'Poor blanching (pale nail bed)'], nut: ['کمبود ویتامین A و C', 'Vitamin A and C deficiency'], non: ['گردش خون ضعیف', 'Poor circulation'] },
    { k: 'splinter', area: 'nails', name: ['خونریزی‌های ترکشی زیر ناخن', 'Splinter hemorrhages'], nut: ['اسکوروی یا هموکروماتوز', 'Scurvy or hemochromatosis'], non: ['سپتی‌سمی، ضربه، همودیالیز', 'Septicemia, trauma, hemodialysis'] },
    { k: 'nailplate', area: 'nails', name: ['نواحی سفید روی صفحه ناخن', 'Whitened areas on the nail plate'], nut: ['کمبود سلنیوم', 'Selenium deficiency'], non: ['ضربه یا عوامل محیطی', 'Trauma or environmental factors'] },
    { k: 'flakynail', area: 'nails', name: ['ناخن پوسته‌پوسته', 'Flaky nails'], nut: ['هیپومنیزیمی، کمبود بیوتین یا اسید چرب ضروری', 'Hypomagnesemia, biotin or essential fatty acid deficiency'], non: ['ضربه یا عوامل محیطی', 'Trauma or environmental factors'] },
    { k: 'clubbing', area: 'nails', name: ['چماقی شدن (زاویه صفحه ناخن بیش از ۱۸۰ درجه)', 'Clubbing (nail plate angle over 180°)'], nut: ['هیچ؛ علت تغذیه‌ای ندارد', 'None; no nutrient cause'], non: ['بیماری تنفسی یا قلبی، سیروز، کولیت', 'Respiratory or cardiac disease, cirrhosis, colitis'] },
    { k: 'alopecia', area: 'hair', name: ['آلوپسی (نازک شدن یا ریزش مو)', 'Alopecia (hair thinning or loss)'], nut: ['کمبود پروتئین، روی یا بیوتین؛ ریزش منتشر (با ابرو): اسید چرب ضروری یا سلنیوم', 'Protein, zinc or biotin deficiency; diffuse loss incl. eyebrows: essential fatty acids or selenium'], non: ['طاسی مردانه، کم‌کاری تیروئید یا هیپوفیز، درمان سرطان، دارو', 'Male-pattern baldness, hypothyroidism or hypopituitarism, cancer treatment, medication'] },
    { k: 'lighthair', area: 'hair', name: ['روشن شدن رنگ مو', 'Lightened hair color'], nut: ['کمبود مس، سلنیوم یا پروتئین', 'Copper, selenium or protein deficiency'], non: ['تغییر شیمیایی (رنگ کردن مو)', 'Chemical alteration'] },
    { k: 'corkscrew', area: 'hair', name: ['موی پیچ‌خورده (چوب‌پنبه‌کشی) روی بازو', 'Corkscrew hair (on the arms)'], nut: ['کمبود مس؛ هیپرکراتوز فولیکولی اسکوروی در سالمندان', 'Copper deficiency; follicular hyperkeratosis of scurvy in older adults'], non: ['تغییر شیمیایی', 'Chemical alteration'] },
    { k: 'seborrhea', area: 'face', name: ['سبوره نازولبیال (پوسته‌ریزی کنار پره‌های بینی)', 'Nasolabial seborrhea (scaling around the nostrils)'], nut: ['کمبود ویتامین B2، B3 یا B6', 'Vitamin B2, B3 and/or B6 deficiency'], non: ['توبروس اسکلروزیس', 'Tuberous sclerosis'] },
    { k: 'bitot', area: 'face', name: ['لکه بیتو (لکه خاکستری اسفنجی روی سفیدی چشم)', 'Bitot’s spot (gray, spongy spot on the white of the eye)'], nut: ['کمبود ویتامین A', 'Vitamin A deficiency'], non: ['پینگکولا در سالمندان، بیماری گوشه، ناخنک', 'Pinguecula in older adults, Gaucher disease, pterygium'] },
    { k: 'keratomalacia', area: 'face', name: ['کراتومالاسی (قرنیه کدر)', 'Keratomalacia (hazy cornea)'], nut: ['کمبود ویتامین A', 'Vitamin A deficiency'], non: ['پرکاری تیروئید', 'Hyperthyroidism'] },
    { k: 'paleconj', area: 'face', name: ['ملتحمه رنگ‌پریده', 'Pale conjunctivae'], nut: ['کمبود آهن، فولات یا ویتامین B12', 'Iron, folate or vitamin B12 deficiency'], non: ['حالت‌های کاهش برون‌ده قلب', 'Low cardiac-output states'] },
    { k: 'cheilosis', area: 'face', name: ['کیلوزیس (ترک و التهاب لب)', 'Cheilosis'], nut: ['کمبود ویتامین B2، B3 یا B6؛ کمبود آهن', 'Vitamin B2, B3 and/or B6 deficiency; iron deficiency'], non: ['عوامل محیطی، تبخال', 'Environmental factors, herpes'] },
    { k: 'angular', area: 'face', name: ['استوماتیت زاویه‌ای (ترک و قرمزی دوطرفه گوشه لب)', 'Angular stomatitis (bilateral cracks and redness at the lip corners)'], nut: ['کمبود ویتامین B2، B3 یا B6؛ کمبود آهن', 'Vitamin B2, B3 and/or B6 deficiency; iron deficiency'], non: ['دندان مصنوعی نامناسب، تبخال، هوای خشن', 'Ill-fitting dentures, herpes, chapping from a harsh climate'] },
    { k: 'gums', area: 'face', name: ['لثه اسفنجی و خونریزی‌دهنده', 'Spongy, bleeding gums'], nut: ['کمبود ویتامین C', 'Vitamin C deficiency'], non: ['ژنژیویت (بهداشت ضعیف دهان)، بیماری پریودنتال، دارو، لوسمی', 'Gingivitis (poor oral hygiene), periodontal disease, drugs, leukemia'] },
    { k: 'mouthlesion', area: 'face', name: ['ضایعه‌های دهان', 'Mouth lesions'], nut: ['کمبود روی', 'Zinc deficiency'], non: ['ضربه، بیماری پیوند علیه میزبان، درمان سرطان', 'Trauma, graft-vs-host disease, cancer treatment'] },
    { k: 'palegum', area: 'face', name: ['لثه کم‌رنگ', 'Pale gums'], nut: ['کمبود آهن', 'Iron deficiency'], non: ['حالت کم‌جریانی (کاهش خون‌رسانی)', 'Low-flow state'] },
    { k: 'glossitis', area: 'face', name: ['گلوسیت (زبان ملتهب، صاف و ارغوانی)', 'Glossitis (inflamed, smooth, magenta tongue)'], nut: ['کمبود ویتامین B2، B3، B6 یا B12، فولات؛ کمبود شدید آهن', 'Vitamin B2, B3, B6 and/or B12 or folate deficiency; severe iron deficiency'], non: ['بیماری کرون، اورمی، عفونت، بدخیمی، درمان ضدسرطان', 'Crohn’s disease, uremia, infection, malignancy, anticancer therapy'] },
    { k: 'parotid', area: 'face', name: ['بزرگی دوطرفه پاروتید', 'Bilateral parotid enlargement'], nut: ['ناکافی بودن پروتئین', 'Protein inadequacy'], non: ['بولیمی و استفراغ زیاد، اوریون، سیروز، شوگرن', 'Bulimia and excessive vomiting, mumps, cirrhosis, Sjögren’s syndrome'] },
    { k: 'thyroid', area: 'face', name: ['بزرگی تیروئید', 'Enlarged thyroid'], nut: ['کمبود ید', 'Iodine deficiency'], non: ['گریوز، تیروئیدیت، بدخیمی، کیست', 'Graves’ disease, thyroiditis, malignancy, cysts'] }
  ];
  SIGNS.forEach(s => ['name', 'nut', 'non'].forEach(f => { const v = s[f]; Object.defineProperty(s, f + 'T', { get: () => T(v[0], v[1]) }); }));
  const AREA = { skin: ['پوست', 'Skin'], nails: ['ناخن', 'Nails'], hair: ['مو', 'Hair'], face: ['چشم، دهان و صورت', 'Eyes, mouth and face'] };

  /* ---------- نواحی معاینه عضله و چربی (شکل‌های ۴-۲ کتاب) ---------- */
  const REGIONS = [
    { k: 'face', kind: 'mix', name: ['سر و صورت: پد چربی اربیتال و عضله تمپورالیس', 'Head and face: orbital fat pads and temporalis'], target: ['تمپورالیس (عضله) و پد چربی زیر چشم', 'Temporalis (muscle) and orbital fat pads'] },
    { k: 'chest', kind: 'muscle', name: ['قفسه سینه بالا: ترقوه و آکرومیون', 'Upper chest: clavicle and acromion'], target: ['پکتورالیس ماژور، دلتوئید و تراپزیوس', 'Pectoralis major, deltoid and trapezius'] },
    { k: 'back', kind: 'muscle', name: ['پشت بالا: ناحیه کتف', 'Upper back: scapular region'], target: ['تراپزیوس، سوپرااسپیناتوس و اینفرااسپیناتوس', 'Trapezius, supraspinatus and infraspinatus'] },
    { k: 'mid', kind: 'fat', name: ['خط میدآگزیلاری: دنده‌ها و ستیغ ایلیاک', 'Midaxillary line: ribs and iliac crest'], target: ['چربی ناحیه سینه‌ای و کمری', 'Thoracic and lumbar fat'] },
    { k: 'arm', kind: 'fat', name: ['بازو: زیر عضله سه‌سر', 'Upper arm: under the triceps'], target: ['چربی زیرپوستی سه‌سر', 'Triceps subcutaneous fat'] },
    { k: 'palm', kind: 'muscle', name: ['دست (کف): بین شست و انگشت اشاره', 'Hand (palmar): between thumb and forefinger'], target: ['اپوننس، ادداکتور و ابداکتور پولیسیس و اولین بین‌استخوانی پشتی', 'Opponens, adductor and abductor pollicis and first dorsal interosseous'] },
    { k: 'dors', kind: 'muscle', name: ['دست (پشت): بین استخوان‌های کف‌دست', 'Hand (dorsal): between the metacarpals'], target: ['عضلات بین‌استخوانی پشتی و ادداکتورها', 'Dorsal interossei and adductor muscles'] },
    { k: 'thigh', kind: 'muscle', name: ['ران و کشکک', 'Thigh and patella'], target: ['چهارسر ران', 'Quadriceps'] },
    { k: 'leg', kind: 'muscle', name: ['ران، کشکک و ساق', 'Thigh, patella and calf'], target: ['چهارسر ران و گاستروکنمیوس', 'Quadriceps and gastrocnemius'] }
  ];
  const GRADES = () => [T('طبیعی', 'Normal'), T('خفیف تا متوسط', 'Mild to moderate'), T('شدید', 'Severe')];

  /* ---------- جدول ۳-۱: بیماری‌ها و زمینه سوءتغذیه ---------- */
  const DIAG = {
    acute: [['آبسه شکمی', 'Abdominal abscess'], ['سندرم دیسترس تنفسی حاد', 'Acute respiratory distress syndrome'], ['سوختگی', 'Burns'], ['تروما', 'Trauma'], ['عفونت بزرگ یا سپسیس', 'Major infection or sepsis'], ['جراحی بزرگ', 'Major surgery']],
    chronic: [['نارسایی ارگان', 'Organ failure'], ['سرطان', 'Cancer'], ['نارسایی احتقانی قلب', 'Congestive heart failure'], ['فیبروز کیستیک', 'Cystic fibrosis'], ['پانکراتیت مزمن', 'Chronic pancreatitis'], ['دیابت', 'Diabetes'], ['HIV', 'HIV'], ['آرتریت روماتوئید', 'Rheumatoid arthritis'], ['بیماری سلیاک', 'Celiac disease'], ['چاقی', 'Obesity'], ['ALS', 'ALS'], ['لوپوس', 'Lupus']],
    social: [['آشالازی', 'Achalasia'], ['الکلیسم', 'Alcoholism'], ['زوال عقل', 'Dementia'], ['اختلال خوردن', 'Eating disorder'], ['مشکلات اقتصادی', 'Economic hardship'], ['سوءمصرف مواد', 'Drug abuse'], ['اختلال روانی', 'Mental disorder']]
  };

  /* ---------- مولد مسئله‌ها ---------- */
  const R = {
    int(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    step(a, b, s) { const k = Math.round((b - a) / s); return round(a + R.int(0, k) * s, 4); },
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  };
  const AR = () => T('←', '→');
  /** گزینه درست اول؛ گزینه‌های غلط یکتا و حداکثر سه تا */
  const opts = (right, wrong) => [right].concat(R.shuffle(wrong.filter((x, i, a) => x !== right && a.indexOf(x) === i)).slice(0, 3));
  const lvText = l => (l === 'sev' ? T('پشتیبان سوءتغذیه شدید', 'Supports severe malnutrition') : l === 'mod' ? T('پشتیبان سوءتغذیه متوسط', 'Supports moderate malnutrition') : T('معیار را کامل نمی‌کند', 'Does not meet the criterion'));
  const LV_OPTS = () => [lvText('sev'), lvText('mod'), lvText(null)];
  const days = d => (d % 30 === 0 && d >= 30 ? T(`${fa(d / 30)} ماه`, `${fa(d / 30)} month${d > 30 ? 's' : ''}`) : d % 7 === 0 ? T(`${fa(d / 7)} هفته`, `${fa(d / 7)} week${d > 7 ? 's' : ''}`) : T(`${fa(d)} روز`, `${fa(d)} days`));

  const G = {};

  /* ===== آمادگی و ارزیابی (Hx) ===== */
  G['h.wl'] = () => {
    const usual = R.int(52, 98), loss = R.step(1.5, 14, 0.5), cur = round(usual - loss, 1);
    const p = F.wlPct(usual, cur);
    return {
      kind: 'num', q: T('درصد کاهش وزن این بیمار نسبت به وزن معمولش چند است؟', 'What is this patient’s percentage weight loss from usual body weight?'),
      case: [[T('وزن معمول', 'Usual weight'), fa(usual) + ' kg'], [T('وزن فعلی', 'Current weight'), fa(cur) + ' kg']],
      ans: round(p, 1), tol: 0.2, unit: pc(), hint: T('(وزن معمول − وزن فعلی) ÷ وزن معمول × ۱۰۰', '(usual − current) ÷ usual × 100'),
      why: `(${fa(usual)} − ${fa(cur)}) ÷ ${fa(usual)} × ${fa(100)} = <b>${fa(p, 1)}${pc()}</b><br><small>` + T('همیشه درصد را نسبت به وزن پایه (معمول) حساب کن، نه وزن فعلی؛ و یادت باشد ادم کاهش وزن را پنهان می‌کند.', 'Always calculate the percentage from the baseline (usual) weight, not the current weight, and remember that edema hides weight loss.') + '</small>'
    };
  };
  G['h.wlc'] = () => {
    const ctx = R.pick(CTX);
    const d = R.pick(ctx === 'acute' ? [5, 7, 14, 21, 30, 60, 90] : [21, 30, 60, 90, 120, 180, 270, 365]);
    const target = R.pick(['sev', 'mod', null]);
    const w = WL_WIN[ctx].find(x => d <= x[0]);
    let p;
    if (w[0] === 7) p = target === 'sev' ? R.step(2.5, 5, 0.5) : target === 'mod' ? R.step(1, 2, 0.5) : 0.5;
    else p = target === 'sev' ? w[2] + R.step(1, 6, 0.5) : target === 'mod' ? w[1] : Math.max(0.5, w[1] - R.step(1.5, 3, 0.5));
    const r = weightLevel(ctx, p, d);
    return {
      kind: 'mcq', q: T('این کاهش وزن کدام معیار سوءتغذیه را کامل می‌کند؟', 'Which malnutrition criterion does this weight loss meet?'),
      case: [[T('زمینه', 'Context'), ctxCap(ctx)], [T('کاهش وزن', 'Weight loss'), fa(p, 1) + pc()], [T('در مدت', 'Over'), days(d)]],
      opts: opts(lvText(r.level), LV_OPTS()), a: 0,
      why: T(`در ${ctxName(ctx)} برای پنجره ${winName(r.win)}: `, `In ${ctxName(ctx)}, for the ${winName(r.win)} window: `) +
        (r.win === 7 ? T('متوسط ۱ تا ۲٪، شدید بیش از ۲٪', 'moderate 1–2%, severe more than 2%') : T(`متوسط ${fa(r.cutMod, 1)}٪، شدید بیش از ${fa(r.cutSev, 1)}٪`, `moderate ${fa(r.cutMod, 1)}%, severe more than ${fa(r.cutSev, 1)}%`)) +
        ` ${AR()} <b>${lvText(r.level)}</b>`
    };
  };
  G['h.int'] = () => {
    const req = R.pick([1500, 1600, 1750, 1800, 1900, 2000, 2100, 2200, 2400]), pct = R.int(25, 95), kcal = Math.round(req * pct / 100 / 10) * 10;
    const p = F.intakePct(kcal, req);
    return {
      kind: 'num', q: T('دریافت انرژی بیمار چند درصد نیاز برآوردشده اوست؟', 'What percentage of estimated energy needs is the patient taking in?'),
      case: [[T('نیاز برآوردشده', 'Estimated needs'), fa(req) + ' kcal'], [T('میانگین دریافت روزانه (دهانی + روده‌ای + وریدی)', 'Average daily intake (oral + enteral + parenteral)'), fa(kcal) + ' kcal']],
      ans: round(p, 0), tol: 1, unit: pc(), hint: T('دریافت ÷ نیاز × ۱۰۰', 'intake ÷ needs × 100'),
      why: `${fa(kcal)} ÷ ${fa(req)} × ${fa(100)} = <b>${fa(p, 0)}${pc()}</b><br><small>` + T('دریافت از همه منابع (دهانی، روده‌ای و وریدی) با نیاز مقایسه می‌شود؛ مدت این وضعیت هم به اندازه درصد مهم است.', 'Intake from every source (oral, enteral, parenteral) is compared with needs; how long it has lasted matters as much as the percentage.') + '</small>'
    };
  };
  G['h.intc'] = () => {
    const ctx = R.pick(CTX);
    const pct = R.pick([30, 40, 45, 50, 60, 65, 70, 74, 80, 90]);
    const d = R.pick(ctx === 'acute' ? [3, 5, 6, 8, 10, 14] : [14, 30, 45, 60, 90, 120]);
    const l = intakeLevel(ctx, pct, d);
    const rule = {
      acute: T('حاد: متوسط کمتر از ۷۵٪ برای بیش از ۷ روز؛ شدید ۵۰٪ یا کمتر برای ۵ روز یا بیشتر', 'Acute: moderate <75% for >7 days; severe ≤50% for ≥5 days'),
      chronic: T('مزمن: کمتر از ۷۵٪ (متوسط) و ۷۵٪ یا کمتر (شدید)، هر دو برای دست‌کم ۱ ماه؛ آستانه‌ها عملاً یکی‌اند', 'Chronic: <75% (moderate) and ≤75% (severe), both for ≥1 month; the two cut-points are effectively the same'),
      social: T('اجتماعی: متوسط کمتر از ۷۵٪ برای ۳ ماه یا بیشتر؛ شدید ۵۰٪ یا کمتر برای ۱ ماه یا بیشتر', 'Social: moderate <75% for ≥3 months; severe ≤50% for ≥1 month')
    }[ctx];
    return {
      kind: 'mcq', q: T('این دریافت انرژی کدام معیار را کامل می‌کند؟', 'Which criterion does this energy intake meet?'),
      case: [[T('زمینه', 'Context'), ctxCap(ctx)], [T('دریافت', 'Intake'), fa(pct) + T('٪ نیاز', '% of needs')], [T('مدت', 'Duration'), days(d)]],
      opts: opts(lvText(l), LV_OPTS()), a: 0, why: `${rule} ${AR()} <b>${lvText(l)}</b>`
    };
  };
  G['h.bmi'] = () => {
    const h = R.int(150, 190), b = R.step(15, 34, 0.5), w = round(b * Math.pow(h / 100, 2), 1);
    const v = F.bmi(w, h);
    return {
      kind: 'num', q: T('نمایه توده بدن (BMI) چند است؟', 'What is the body mass index (BMI)?'),
      case: [[T('وزن', 'Weight'), fa(w) + ' kg'], [T('قد', 'Height'), fa(h) + ' cm']],
      ans: round(v, 1), tol: 0.2, unit: 'kg/m²', hint: T('وزن ÷ (قد به متر)²', 'weight ÷ (height in m)²'),
      why: `${fa(w)} ÷ ${fa(h / 100, 2)}² = <b>${fa(v, 1)}</b><br><small>` + T('BMI به‌تنهایی سوءتغذیه را رد یا ثابت نمی‌کند؛ بیمار چاق هم می‌تواند عضله از دست داده باشد.', 'BMI alone neither proves nor rules out malnutrition; a patient with obesity can still have lost muscle.') + '</small>'
    };
  };

  /* ===== التهاب و مستندسازی (CRP) ===== */
  const VITALS = () => [
    { n: T('دمای بدن', 'Temperature'), ok: () => fa(R.step(36.3, 37.4, 0.1), 1) + ' °C', bad: () => fa(R.step(37.8, 39.6, 0.1), 1) + ' °C', why: T('تب: ۳۷٫۷ درجه یا بیشتر (ممکن است با تب‌بر پنهان شود)', 'Fever: ≥37.7 °C (antipyretics can mask it)') },
    { n: T('دمای بدن', 'Temperature'), ok: () => fa(R.step(36.3, 37.4, 0.1), 1) + ' °C', bad: () => fa(R.step(33.8, 34.8, 0.1), 1) + ' °C', why: T('هیپوترمی: کمتر از ۳۵ درجه', 'Hypothermia: <35.0 °C') },
    { n: T('ضربان قلب', 'Heart rate'), ok: () => fa(R.int(62, 96)) + T(' در دقیقه', ' /min'), bad: () => fa(R.int(106, 132)) + T(' در دقیقه', ' /min'), why: T('تاکی‌کاردی: بیش از ۱۰۰ در دقیقه (داروهای ضدآریتمی ممکن است پنهانش کنند)', 'Tachycardia: >100 /min (anti-arrhythmics can mask it)') },
    { n: T('فشار خون سیستولیک', 'Systolic blood pressure'), ok: () => fa(R.int(108, 136)) + ' mm Hg', bad: () => fa(R.int(72, 86)) + ' mm Hg', why: T('فشار سیستولیک کمتر از ۹۰ یا افت بیش از ۴۰ از حد معمول', 'Systolic BP <90 mm Hg or a drop of >40 from normal') },
    { n: T('تعداد تنفس', 'Respiratory rate'), ok: () => fa(R.int(12, 19)) + T(' در دقیقه', ' /min'), bad: () => fa(R.int(24, 32)) + T(' در دقیقه', ' /min'), why: T('تعداد تنفس بیش از ۲۰ در دقیقه', 'Respiratory rate >20 /min') }
  ];
  G['i.vital'] = () => {
    const vs = VITALS(), bi = R.int(0, vs.length - 1), bad = vs[bi];
    const names = [...new Set(vs.map(v => v.n))];
    const rows = names.map(n => { const v = n === bad.n ? bad : vs.find(x => x.n === n); return [n, n === bad.n ? bad.bad() : v.ok()]; });
    return {
      kind: 'mcq', q: T('کدام علامت حیاتی به نفع وجود التهاب است؟', 'Which vital sign points to inflammation?'), case: rows,
      opts: opts(bad.n, names), a: 0, why: bad.why + '<br><small>' + T('علائم حیاتی غیرطبیعی فقط شواهد پشتیبان‌اند؛ ممکن است به وضعیت تغذیه ربطی نداشته باشند.', 'Abnormal vital signs are only supportive evidence; they may have nothing to do with nutrition status.') + '</small>'
    };
  };
  G['i.ctx'] = () => {
    const ctx = R.pick(CTX), d = R.pick(DIAG[ctx]);
    const why = {
      acute: T('التهاب شدید و پرشدت ← سوءتغذیه در زمینه بیماری یا آسیب حاد.', 'Heightened, high-intensity inflammation → malnutrition in the context of acute illness or injury.'),
      chronic: T('التهاب طولانی با شدت کمتر (بیش از ۳ ماه) ← سوءتغذیه در زمینه بیماری مزمن.', 'Prolonged, lower-intensity inflammation (over 3 months) → malnutrition in the context of chronic illness.'),
      social: T('بدون نشانه التهاب (گرسنگی خالص) ← سوءتغذیه در زمینه شرایط اجتماعی یا محیطی.', 'No signs of inflammation (pure starvation) → malnutrition in the context of social or environmental circumstances.')
    }[ctx];
    return {
      kind: 'mcq', q: T(`«${d[0]}» در کدام زمینه سوءتغذیه قرار می‌گیرد؟`, `In which context of malnutrition does “${d[1]}” belong?`),
      opts: opts(ctxCap(ctx), CTX.map(ctxCap)), a: 0, why: why + '<br><small>' + T('جدول راهنماست، نه قانون: بیمار دیابتی که شغلش را از دست داده ممکن است به‌خاطر مشکل اقتصادی سوءتغذیه گرفته باشد.', 'The table is a guide, not a rule: a patient with diabetes who lost their job may be malnourished because of economic hardship.') + '</small>'
    };
  };
  /** سناریوی کامل: زمینه + چند ویژگی ← تشخیص پیشنهادی و کد */
  function randScenario() {
    const ctx = R.pick(CTX), o = { ctx };
    const pool = R.shuffle(['intake', 'wt', 'muscle', 'fat', 'fluid', 'grip']).slice(0, R.int(2, 4));
    if (pool.includes('intake')) o.intake = ctx === 'acute' ? { pct: R.pick([40, 50, 60, 70]), days: R.pick([5, 6, 8, 10]) } : { pct: R.pick([40, 50, 60, 70]), days: R.pick([30, 45, 90, 120]) };
    if (pool.includes('wt')) { const d = ctx === 'acute' ? R.pick([7, 30]) : R.pick([30, 90, 180]); const w = WL_WIN[ctx].find(x => d <= x[0]); o.wt = { pct: d === 7 ? R.pick([1.5, 2, 3, 4]) : R.pick([w[1], w[1] + 2, w[1] + 4]), days: d }; }
    if (pool.includes('muscle')) o.muscle = R.int(1, 3);
    if (pool.includes('fat')) o.fat = R.int(1, 3);
    if (pool.includes('fluid')) o.fluid = R.int(1, 3);
    if (pool.includes('grip')) o.grip = true;
    return o;
  }
  const dxOpt = d => { const x = DX[d](); return x.code ? `${x.name} (${x.code})` : x.name; };
  G['i.dx'] = () => {
    const o = randScenario(), r = classify(o);
    const rows = [[T('زمینه', 'Context'), ctxCap(o.ctx)]].concat(r.items.map(x => [x.label, x.val]));
    const right = dxOpt(r.dx);
    const wrong = ['severe', 'moderate', 'none'].map(dxOpt).concat([T('سوءتغذیه خفیف (E44.1)', 'Mild malnutrition (E44.1)')]);
    return {
      kind: 'mcq', q: T('بر پایه معیارهای سوءتغذیه، چه تشخیصی را به پزشک پیشنهاد می‌کنی؟', 'Using the malnutrition characteristics, what diagnosis do you recommend to the physician?'), case: rows,
      opts: opts(right, wrong), a: 0,
      why: r.items.map(x => `${x.label}: <b>${x.level ? LV[x.level]() : T('—', '—')}</b>`).join('<br>') + '<br>' +
        T(`ویژگی‌های شدید: ${fa(r.nSev)} · ویژگی‌های دست‌کم متوسط: ${fa(r.nMod)}. برای هر تشخیص دست‌کم دو ویژگی لازم است؛ قدرت چنگش فقط پشتیبان «شدید» است.`, `Severe characteristics: ${fa(r.nSev)} · at least moderate: ${fa(r.nMod)}. Each diagnosis needs at least two characteristics; grip strength only supports “severe”.`) + ` ${AR()} <b>${right}</b>`
    };
  };
  const LABS = [
    { n: ['آلبومین', 'Albumin'], norm: '3.5–5.0 g/dL', up: [['دهیدراتاسیون', 'Dehydration']], down: [['التهاب', 'Inflammation'], ['نارسایی کبد', 'Liver failure'], ['سندرم نفروتیک', 'Nephrotic syndrome'], ['اضافه‌بار مایع', 'Fluid overload']], low: 2.6, high: 5.4 },
    { n: ['پره‌آلبومین', 'Prealbumin'], norm: '15–35 mg/dL', up: [['بیماری مزمن کلیه', 'Chronic kidney disease'], ['مصرف استروئید', 'Steroid use']], down: [['نارسایی کبد', 'Liver failure'], ['التهاب', 'Inflammation']], low: 9, high: 41 },
    { n: ['پروتئین واکنشی C (CRP)', 'C-reactive protein (CRP)'], norm: '< 1.0 mg/dL', up: [['التهاب', 'Inflammation']], down: [], low: null, high: 8.4 }
  ];
  G['i.lab'] = () => {
    const L = R.pick(LABS), dir = L.down.length && Math.random() < 0.6 ? 'down' : 'up';
    const right = R.pick(L[dir]);
    const other = (dir === 'up' ? L.down : L.up).concat([['کم‌خونی فقر آهن', 'Iron deficiency anemia'], ['کمبود ویتامین D', 'Vitamin D deficiency'], ['پرکاری تیروئید', 'Hyperthyroidism']]);
    const v = dir === 'up' ? L.high : L.low;
    return {
      kind: 'mcq', q: T(`${L.n[0]} بیمار ${dir === 'up' ? 'بالا' : 'پایین'} است. کدام مورد می‌تواند علت آن باشد؟`, `The patient’s ${L.n[1]} is ${dir === 'up' ? 'high' : 'low'}. Which of these can explain it?`),
      case: [[T(L.n[0], L.n[1]), fa(v, 1) + ' ' + L.norm.split(' ').pop()], [T('محدوده طبیعی', 'Normal range'), L.norm]],
      opts: opts(T(right[0], right[1]), other.map(x => T(x[0], x[1]))), a: 0,
      why: T(`${L.n[0]} ${dir === 'up' ? 'بالا' : 'پایین'} ← ${L[dir].map(x => x[0]).join('، ')}.`, `${dir === 'up' ? 'High' : 'Low'} ${L.n[1]} → ${L[dir].map(x => x[1]).join(', ')}.`) + '<br><small>' +
        T('آلبومین و پره‌آلبومین نشانگر التهاب و وضعیت مایع‌اند، نه شاخص وضعیت تغذیه؛ به‌تنهایی سوءتغذیه را تشخیص نمی‌دهند.', 'Albumin and prealbumin reflect inflammation and fluid status, not nutrition status; on their own they do not diagnose malnutrition.') + '</small>'
    };
  };

  /* ===== عضله و چربی (M/F) ===== */
  G['m.img'] = () => {
    const rg = R.pick(REGIONS), g = R.int(0, 2), gs = GRADES();
    return {
      kind: 'mcq', q: T(`در این تصویر (${rg.name[0]}) وضعیت ذخیره ${rg.kind === 'fat' ? 'چربی' : rg.kind === 'muscle' ? 'عضله' : 'عضله و چربی'} چگونه است؟`, `In this picture (${rg.name[1]}), what is the state of the ${rg.kind === 'fat' ? 'fat' : rg.kind === 'muscle' ? 'muscle' : 'muscle and fat'} stores?`),
      fig: { k: `${rg.k}-${'nms'[g]}` }, opts: opts(gs[g], gs), a: 0,
      why: T(`پاسخ: <b>${gs[g]}</b>. ${rg.target[0]} را بررسی کن و با دو درجه دیگر مقایسه کن (درس‌های دنیای عضله و چربی).`, `Answer: <b>${gs[g]}</b>. Examine the ${rg.target[1].toLowerCase()} and compare with the other two grades (see the muscle and fat lessons).`)
    };
  };
  G['m.map'] = () => {
    const ctx = R.pick(CTX), g = R.int(1, 3), what = R.pick([['تحلیل عضله', 'muscle loss'], ['از دست رفتن چربی زیرپوستی', 'subcutaneous fat loss']]);
    const l = mfLevel(ctx, g), sv = SEV_NAMES();
    return {
      kind: 'mcq', q: T(`در ${ctxName(ctx)}، ${what[0]} «${sv[g]}» از کدام تشخیص پشتیبانی می‌کند؟`, `In ${ctxName(ctx)}, ${sv[g]} ${what[1]} supports which diagnosis?`),
      opts: opts(lvText(l), LV_OPTS()), a: 0,
      why: (ctx === 'acute' ? T('زمینه حاد: خفیف ← متوسط؛ متوسط ← شدید.', 'Acute context: mild → moderate; moderate → severe.') : T('زمینه مزمن و اجتماعی: خفیف ← متوسط؛ شدید ← شدید.', 'Chronic and social contexts: mild → moderate; severe → severe.')) + ` ${AR()} <b>${lvText(l)}</b>`
    };
  };
  G['m.region'] = () => {
    const rg = R.pick(REGIONS.filter(x => x.k !== 'thigh'));
    return {
      kind: 'mcq', q: T(`در معاینه «${rg.name[0]}» چه چیزی را بررسی می‌کنی؟`, `When you examine the “${rg.name[1]}”, what are you assessing?`),
      opts: opts(T(rg.target[0], rg.target[1]), REGIONS.filter(x => x.k !== 'thigh').map(x => T(x.target[0], x.target[1]))), a: 0,
      why: T(`${rg.name[0]} ← <b>${rg.target[0]}</b>. معاینه همیشه دوطرفه است؛ تحلیل یک‌طرفه معمولاً علت تغذیه‌ای ندارد.`, `${rg.name[1]} → <b>${rg.target[1]}</b>. Always examine both sides; one-sided wasting is usually not nutritional.`)
    };
  };

  /* ===== وضعیت مایعات (H₂O) ===== */
  const EG = () => [T('بدون ادم', 'No edema'), '1+', '2+', '3+', '4+'];
  G['f.img'] = () => {
    const g = R.int(0, 4), e = EG();
    return {
      kind: 'mcq', q: T('درجه ادم گوده‌گذار در این تصویر چند است؟', 'What grade of pitting edema does this picture show?'), fig: { k: 'edema' + g },
      opts: opts(e[g], e), a: 0,
      why: T(`پاسخ: <b>${e[g]}</b>. هرچه گوده عمیق‌تر و دیرتر پر شود، درجه بالاتر است (۱+ حدود ۲ میلی‌متر تا ۴+ حدود ۸ میلی‌متر).`, `Answer: <b>${e[g]}</b>. The deeper the pit and the slower it refills, the higher the grade (1+ about 2 mm up to 4+ about 8 mm).`)
    };
  };
  G['f.grade'] = () => {
    const g = R.int(1, 4), e = EG();
    const desc = {
      1: T('گوده خفیف بدون تغییر شکل که فوراً پر می‌شود؛ حدود ۲ میلی‌متر؛ فقط مچ و پاها', 'Slight pit with no distortion that refills immediately; about 2 mm; ankles and feet only'),
      2: T('گوده عمیق‌تر، حدود ۴ میلی‌متر، که ۱۰ تا ۲۵ ثانیه بعد از بین می‌رود؛ ساق پا و دست‌ها هم درگیرند', 'Deeper pit, about 4 mm, that disappears after 10–25 s; lower legs and hands involved'),
      3: T('گوده عمیق، حدود ۶ میلی‌متر، اندام پر و متورم؛ فرورفتگی بیش از ۱ دقیقه می‌ماند', 'Deep pit, about 6 mm, limb looks full and swollen; indentation lasts over 1 minute'),
      4: T('گوده بسیار عمیق، حدود ۸ میلی‌متر؛ اندام بدشکل؛ فرورفتگی ۲ تا ۵ دقیقه می‌ماند', 'Very deep pit, about 8 mm; limb grossly misshapen; indentation lasts 2–5 minutes')
    }[g];
    return {
      kind: 'mcq', q: T('این یافته کدام درجه ادم گوده‌گذار است؟', 'Which grade of pitting edema is this?'), case: [[T('یافته', 'Finding'), desc]],
      opts: opts(e[g], e.slice(1)), a: 0, fig: { k: 'pit' + g },
      why: T(`پاسخ: <b>${e[g]}</b>. ادم سفت (براونی) گوده نمی‌دهد و با این مقیاس درجه‌بندی نمی‌شود.`, `Answer: <b>${e[g]}</b>. Brawny edema leaves no pit and is not graded on this scale.`)
    };
  };
  G['f.map'] = () => {
    const ctx = R.pick(CTX), g = R.int(1, 4), sev = edemaToSev(g), l = fluidLevel(ctx, sev);
    return {
      kind: 'mcq', q: T(`بیمار در ${ctxName(ctx)}، ادم گوده‌گذار ${fa(g)}+ در هر دو پا دارد. این تجمع مایع از کدام تشخیص پشتیبانی می‌کند؟`, `A patient with ${ctxName(ctx)} has ${fa(g)}+ pitting edema in both legs. Which diagnosis does this fluid accumulation support?`),
      opts: opts(lvText(l), LV_OPTS()), a: 0,
      why: T(`در الگوی پرونده: ۱+ خفیف، ۲+ متوسط، ۳+ تا ۴+ شدید ← ${SEV_NAMES()[sev]}. `, `In the EMR template: 1+ mild, 2+ moderate, 3–4+ severe → ${SEV_NAMES()[sev]}. `) +
        (ctx === 'acute' ? T('زمینه حاد: خفیف ← متوسط؛ متوسط تا شدید ← شدید.', 'Acute context: mild → moderate; moderate to severe → severe.') : T('زمینه مزمن و اجتماعی: خفیف ← متوسط؛ شدید ← شدید.', 'Chronic and social contexts: mild → moderate; severe → severe.')) + ` ${AR()} <b>${lvText(l)}</b>`
    };
  };
  G['f.bun'] = () => {
    const cr = R.step(0.7, 2.2, 0.1), ratio = R.pick([12, 15, 18, 22, 25, 28, 32]), bun = Math.round(cr * ratio);
    const v = F.bunCr(bun, cr);
    return {
      kind: 'num', q: T('نسبت BUN به کراتینین چند است؟', 'What is the BUN-to-creatinine ratio?'),
      case: [['BUN', fa(bun) + ' mg/dL'], [T('کراتینین', 'Creatinine'), fa(cr, 1) + ' mg/dL']],
      ans: round(v, 1), tol: 0.5, unit: '', hint: 'BUN ÷ Cr',
      why: `${fa(bun)} ÷ ${fa(cr, 1)} = <b>${fa(v, 1)}</b> ${AR()} ` + (v > 20 ? T('بیش از ۲۰:۱؛ با دهیدراتاسیون هم‌خوان است.', 'above 20:1; consistent with dehydration.') : T('۲۰ یا کمتر؛ این نسبت به نفع دهیدراتاسیون نیست.', '20 or less; this ratio does not point to dehydration.'))
    };
  };
  const EDEMA_DRUGS = [['آملودیپین', 'Amlodipine'], ['پیوگلیتازون', 'Pioglitazone'], ['گاباپنتین', 'Gabapentin'], ['پره‌گابالین', 'Pregabalin'], ['ایبوپروفن', 'Ibuprofen'], ['کورتیکواستروئیدها', 'Corticosteroids'], ['ترازودون', 'Trazodone'], ['مینوکسیدیل', 'Minoxidil'], ['سیکلوسپورین', 'Cyclosporine'], ['تاموکسیفن', 'Tamoxifen'], ['پرامیپکسول', 'Pramipexole'], ['دوستاکسل', 'Docetaxel']];
  G['f.drug'] = () => {
    const d = R.pick(EDEMA_DRUGS);
    return {
      kind: 'mcq', q: T('کدام دارو می‌تواند ادم بدهد؟', 'Which medication can cause edema?'),
      opts: opts(T(d[0], d[1]), [T('متفورمین', 'Metformin'), T('فوروزماید', 'Furosemide'), T('اسپیرونولاکتون', 'Spironolactone'), T('وارفارین', 'Warfarin'), T('لووتیروکسین', 'Levothyroxine')]), a: 0,
      why: T(`«${d[0]}» از داروهایی است که ادم می‌دهند. پیش از نسبت دادن ادم به سوءتغذیه، فهرست دارویی بیمار را مرور کن.`, `${d[1]} is one of the drugs that can cause edema. Before blaming malnutrition for edema, review the patient’s medication list.`)
    };
  };

  /* ===== عملکرد و ریزمغذی‌ها (Zn) ===== */
  G['z.grip'] = () => {
    const base = R.int(10, 44), a = base + R.int(-2, 2), b = base + R.int(-2, 2), c = base + R.int(-2, 2);
    const hand = R.pick([['راست', 'right'], ['چپ', 'left']]);
    const m = F.gripMean(a, b, c);
    return {
      kind: 'num', q: T(`میانگین قدرت چنگش دست ${hand[0]} چند کیلوگرم است؟`, `What is the mean grip strength of the ${hand[1]} hand, in kg?`),
      case: [[T('تلاش ۱', 'Trial 1'), fa(a) + ' kg'], [T('تلاش ۲', 'Trial 2'), fa(b) + ' kg'], [T('تلاش ۳', 'Trial 3'), fa(c) + ' kg']],
      ans: round(m, 1), tol: 0.2, unit: 'kg', hint: T('(تلاش ۱ + تلاش ۲ + تلاش ۳) ÷ ۳', '(trial 1 + trial 2 + trial 3) ÷ 3'),
      why: `(${fa(a)} + ${fa(b)} + ${fa(c)}) ÷ ${fa(3)} = <b>${fa(m, 1)}</b> kg<br><small>` + T('شش اندازه‌گیری متناوب (سه بار هر دست، با ۱۵ ثانیه استراحت)؛ میانگین هر دست با جدول هنجار سازنده دستگاه مقایسه می‌شود.', 'Six alternating readings (three per hand, 15 s rest between); each hand’s mean is compared with the manufacturer’s normative table.') + '</small>'
    };
  };
  G['z.img'] = () => {
    const s = R.pick(SIGNS);
    return {
      kind: 'mcq', q: T('این نشانه بیشتر به کدام یافته تغذیه‌ای اشاره دارد؟', 'Which nutrient finding does this sign most suggest?'), fig: { k: s.k },
      opts: opts(s.nutT, SIGNS.filter(x => x.nutT !== s.nutT).map(x => x.nutT)), a: 0,
      why: T(`<b>${s.name[0]}</b> ← ${s.nut[0]}.<br><small>علت‌های غیرتغذیه‌ای هم دارد: ${s.non[0]}.</small>`, `<b>${s.name[1]}</b> → ${s.nut[1]}.<br><small>Non-nutrient causes also exist: ${s.non[1]}.</small>`)
    };
  };
  G['z.sign'] = () => {
    const s = R.pick(SIGNS);
    return {
      kind: 'mcq', q: T(`«${s.name[0]}» می‌تواند نشانه کدام مورد باشد؟`, `“${s.name[1]}” can be a sign of what?`),
      opts: opts(s.nutT, SIGNS.filter(x => x.nutT !== s.nutT).map(x => x.nutT)), a: 0,
      why: T(`یافته تغذیه‌ای: <b>${s.nut[0]}</b>. علت غیرتغذیه‌ای: ${s.non[0]}.`, `Nutrient finding: <b>${s.nut[1]}</b>. Non-nutrient causes: ${s.non[1]}.`)
    };
  };
  G['z.non'] = () => {
    const s = R.pick(SIGNS.filter(x => x.k !== 'clubbing'));
    return {
      kind: 'mcq', q: T(`کدام مورد علت «غیرتغذیه‌ای» محتمل برای «${s.name[0]}» است؟`, `Which is a possible NON-nutrient cause of “${s.name[1]}”?`),
      opts: opts(s.nonT, SIGNS.filter(x => x.nonT !== s.nonT && x.area !== s.area).map(x => x.nonT)), a: 0,
      why: T(`${s.name[0]} ← غیرتغذیه‌ای: <b>${s.non[0]}</b>؛ تغذیه‌ای: ${s.nut[0]}. همیشه پیش از نسبت دادن نشانه به کمبود، علت‌های دیگر را رد کن.`, `${s.name[1]} → non-nutrient: <b>${s.non[1]}</b>; nutrient: ${s.nut[1]}. Always rule out other causes before blaming a deficiency.`)
    };
  };

  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round; EA.sg = sg;
  EA.F = F; EA.gen = G; EA.R = R;
  EA.aspen = { CTX, ctxName, ctxCap, WL_WIN, weightLevel, intakeLevel, mfLevel, fluidLevel, edemaToSev, edemaFromDepth, classify, lvText, SEV_NAMES, DX, winName };
  EA.SIGNS = SIGNS; EA.AREA = AREA; EA.REGIONS = REGIONS; EA.GRADES = GRADES; EA.DIAG = DIAG;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — دنیای ۱: آمادگی و ارزیابی (فصل ۱ و ۲ کتاب)
 * سازنده‌های کوتاه (مشترک در همه فایل‌های محتوا):
 *   L(عنوان، متن)                             کارت آموزشی
 *   M(سؤال، گزینه‌ها، چرا، پرونده، تصویر)       چندگزینه‌ای — گزینه اول درست است و در اجرا به‌هم می‌ریزد
 *   T(جمله، درست/غلط، چرا، تصویر)             درست یا نادرست
 *   B(جمله با ___، گزینه‌ها، چرا)              جای خالی — گزینه اول درست است
 *   O(سؤال، مراحل به ترتیب درست، چرا)           مرتب‌سازی
 *   P(سؤال، جفت‌ها)                            جفت‌کردن
 *   N(شناسه مولد)                              مسئله با عددها یا تصویرهای تازه
 *   pic(کلیدها، برچسب‌ها، توضیح)               ردیف تصویر درون کارت آموزشی
 *   I(کلید، برچسب) و I3(ناحیه)                 تصویر سؤال؛ I3 سه درجه طبیعی، خفیف تا متوسط و شدید را کنار هم می‌گذارد
 * منبع: Nutrition-Focused Physical Exam for Adults: An Illustrated Handbook, 2nd ed. (ASPEN و کلیولند کلینیک، ۲۰۲۲). */
(function (root) {
  const EA = root.EA = root.EA || {};
  const K = EA.K = EA.K || (() => {
    const esc = s => String(s).replace(/"/g, '&quot;');
    const pic = (ks, ls, capTxt) => {
      const a = [].concat(ks), l = ls ? [].concat(ls) : [];
      return `<figure class="fig fig--n${a.length}">${a.map((k, i) => `<div class="fig__i"><img src="${EA.img(k)}" alt="${esc(l[i] || capTxt || '')}" draggable="false" data-zoom>${l[i] ? `<span class="fig__l">${l[i]}</span>` : ''}</div>`).join('')}${capTxt ? `<figcaption>${capTxt}</figcaption>` : ''}</figure>`;
    };
    return {
      L: (title, body) => ({ t: 'learn', title, body }),
      M: (q, opts, why, kase, fig) => ({ t: 'mcq', q, opts, why, case: kase, fig }),
      T: (q, a, why, fig) => ({ t: 'tf', q, a, why, fig }),
      B: (q, opts, why) => ({ t: 'fill', q, opts, why }),
      O: (q, steps, why) => ({ t: 'order', q, steps, why }),
      P: (q, pairs, why) => ({ t: 'match', q, pairs, why }),
      N: gen => ({ t: 'num', gen }),
      I: (k, l) => ({ k, l }),
      tbl: rows => '<table class="mini">' + rows.map((r, i) => '<tr>' + r.map(c => (i ? `<td>${c}</td>` : `<th>${c}</th>`)).join('') + '</tr>').join('') + '</table>',
      pic,
      /** سه درجه یک ناحیه کنار هم، با برچسب به زبان فعلی */
      pic3: (rg, cap, en) => pic(['n', 'm', 's'].map(g => rg + '-' + g), en ? ['Normal', 'Mild to moderate', 'Severe'] : ['طبیعی', 'خفیف تا متوسط', 'شدید'], cap)
    };
  })();
  const { L, M, T, B, O, P, N, tbl, pic } = K;
  EA.worlds = EA.worlds || [];

  EA.worlds.push({
    id: 'hx', sym: 'Hx', name: 'آمادگی و ارزیابی', sub: 'شش ویژگی سوءتغذیه، دریافت، وزن و روش معاینه', color: '#FF7A45', dark: '#DD5A28', light: '#FFE7DC',
    levels: ['قدم‌های اول', 'کارآگاهان تاریخچه', 'استادان سر تا پا'],
    gens: ['h.wl', 'h.wlc', 'h.int', 'h.intc', 'h.bmi'],
    lessons: [
      {
        id: 'hx1', title: 'NFPE چیست؟', icon: '🔍', items: [
          L('معاینه فیزیکی تغذیه‌محور', '<b>NFPE</b> (Nutrition-Focused Physical Exam) یعنی معاینه بدن بیمار با یک سؤال مشخص: <b>تغذیه چه ردی روی بدن گذاشته است؟</b><br><br>NFPE یکی از اجزای <b>ارزیابی جامع تغذیه</b> است. بقیه اجزا هم لازم‌اند: تاریخچه پزشکی، جراحی، اجتماعی و رژیم غذایی، آزمایش‌ها و تست‌های دیگر. ولی <b>هیچ جزئی به‌تنهایی</b> وضعیت تغذیه را تعیین نمی‌کند.<br><br>NFPE تغییرات فیزیکی ناشی از <b>کم‌تغذیه‌ای یا پرتغذیه‌ای</b> را تأیید می‌کند.'),
          M('کدام مورد به‌تنهایی وضعیت تغذیه بیمار را تعیین می‌کند؟', ['هیچ‌کدام؛ همه اجزا با هم لازم‌اند', 'آلبومین سرم', 'نمایه توده بدن', 'معاینه فیزیکی'], 'هیچ جزئی به‌تنهایی وضعیت تغذیه را تعیین نمی‌کند؛ NFPE شواهد فیزیکی را به بقیه داده‌ها اضافه می‌کند.'),
          L('NFPE دنبال چه می‌گردد؟', 'با <b>نگاه کامل</b> و سپس <b>لمس</b>، چهار چیز را بررسی می‌کنیم:<br>• <b>ذخیره عضله</b> و <b>چربی زیرپوستی</b><br>• <b>جابه‌جایی مایعات</b> (ادم یا دهیدراتاسیون)<br>• <b>نشانه‌های کمبود ریزمغذی</b> در پوست، مو، ناخن و دهان؛ مثل بثورات، زخم یا تغییر رنگ که از نشانه‌های زودرس کمبودند<br>• <b>وضعیت عملکردی</b>، مثلاً قدرت چنگش دست<br><br>برای بیمار بستری، ارزیابی کامل اهمیت ویژه‌ای دارد.'),
          P('هر یافته را به بخش مربوط در NFPE وصل کن', [['فرورفتگی گیجگاه', 'ذخیره عضله'], ['ادم گوده‌گذار پا', 'وضعیت مایعات'], ['لثه اسفنجی و خونریزی‌دهنده', 'نشانه ریزمغذی'], ['قدرت چنگش کم', 'وضعیت عملکردی']]),
          T('NFPE فقط کم‌تغذیه‌ای را بررسی می‌کند و برای پرتغذیه‌ای کاربرد ندارد.', false, 'NFPE تغییرات فیزیکی ناشی از کم‌تغذیه‌ای <b>یا پرتغذیه‌ای</b> را تأیید می‌کند؛ بیمار چاق هم می‌تواند عضله از دست داده باشد.'),
          L('چرا همه NFPE انجام نمی‌دهند؟', 'NFPE مدت‌ها به‌خاطر <b>کمبود آموزش</b> و درک ناکافی از نقشش در ارزیابی جامع، در کار روزمره کمتر دیده می‌شد.<br><br>خبر خوب: معاینه عضله و چربی ذهنی است، ولی <b>آموزش کنار یک بالینگر باتجربه و تمرین تکراری</b> این ذهنی بودن را کم می‌کند. این برنامه برای همین ساخته شده است.'),
          B('معاینه عضله و چربی ذهنی است؛ این ذهنی بودن با آموزش و ___ تکراری کم می‌شود.', ['تمرین', 'آزمایش', 'تصویربرداری'], 'تمرین تکراری با یک روش نظام‌مند، دقت و سرعت معاینه را بالا می‌برد.'),
          M('بهترین تعریف NFPE کدام است؟', ['بخشی از ارزیابی جامع تغذیه که تغییرات فیزیکی ناشی از وضعیت تغذیه را بررسی می‌کند', 'جایگزین تاریخچه رژیم غذایی', 'آزمایش خون برای کمبود ریزمغذی‌ها', 'اندازه‌گیری وزن و قد بیمار'], 'NFPE جایگزین هیچ جزئی نیست؛ یافته‌هایش باید با تاریخچه، آزمایش‌ها و دریافت غذایی هم‌خوان باشد.'),
          T('یافته‌های NFPE باید با داده‌های پرونده و مصاحبه هم‌خوانی داشته باشند.', true, 'درست. یافته فیزیکی بدون پشتوانه بالینی، یا داده پرونده بدون تأیید در معاینه، تشخیص محکمی نمی‌سازد.')
        ]
      },
      {
        id: 'hx2', title: 'شش ویژگی سوءتغذیه', icon: '📐', items: [
          L('شش ویژگی سوءتغذیه', 'برای شناسایی سوءتغذیه بزرگسالان <b>شش ویژگی</b> تعریف شده است:<br>۱. <b>دریافت ناکافی انرژی</b><br>۲. <b>کاهش وزن</b><br>۳. <b>از دست رفتن عضله</b><br>۴. <b>از دست رفتن چربی زیرپوستی</b><br>۵. <b>تجمع مایع</b> (موضعی یا عمومی؛ گاهی کاهش وزن را پنهان می‌کند)<br>۶. <b>کاهش قدرت چنگش</b> (وضعیت عملکردی)<br><br>برای پیشنهاد تشخیص، <b>دست‌کم دو ویژگی</b> لازم است. چهار ویژگی آخر مستقیماً با NFPE سنجیده می‌شوند.'),
          M('برای پیشنهاد تشخیص سوءتغذیه، دست‌کم چند ویژگی لازم است؟', ['دو', 'یک', 'سه', 'شش'], 'دست‌کم دو ویژگی از شش ویژگی لازم است.'),
          P('هر ویژگی را به روش سنجشش وصل کن', [['دریافت ناکافی انرژی', 'تاریخچه غذایی و مقایسه با نیاز'], ['کاهش وزن', 'وزن فعلی در برابر وزن معمول'], ['از دست رفتن عضله و چربی', 'نگاه و لمس'], ['کاهش قدرت چنگش', 'دینامومتر دستی']]),
          L('سه زمینه (اتیولوژی)', 'سوءتغذیه همیشه در یک <b>زمینه</b> تعریف می‌شود که با <b>شدت التهاب</b> و <b>مدت</b> بیماری تعیین می‌شود:<br>• <b>بیماری یا آسیب حاد</b>: التهاب شدید و پرشدت (سپسیس، سوختگی، جراحی بزرگ)<br>• <b>بیماری مزمن</b>: التهاب طولانی با شدت کمتر (سرطان، نارسایی ارگان، دیابت)<br>• <b>شرایط اجتماعی یا محیطی</b>: بدون التهاب؛ گرسنگی خالص (فقر، اختلال خوردن، زوال عقل)<br><br>آستانه هر ویژگی در هر زمینه فرق دارد.'),
          M('بیماری که به‌خاطر مشکلات اقتصادی ماه‌هاست کم غذا می‌خورد و نشانه التهاب ندارد، در کدام زمینه قرار می‌گیرد؟', ['شرایط اجتماعی یا محیطی', 'بیماری مزمن', 'بیماری یا آسیب حاد', 'هیچ‌کدام؛ سوءتغذیه ندارد'], 'نبود التهاب و علت اجتماعی ← زمینه اجتماعی یا محیطی (گرسنگی یا نیمه‌گرسنگی).'),
          L('دو درجه شدت', 'در هر زمینه دو درجه داریم:<br>• <b>متوسط (غیرشدید)</b> ← کد ICD-10: <b>E44.0</b><br>• <b>شدید</b> ← کد ICD-10: <b>E43</b><br><br>هر ویژگی آستانه جدایی برای «متوسط» و «شدید» دارد. اگر دو ویژگی در محدوده شدید باشند، سوءتغذیه شدید پیشنهاد می‌شود.<br><small>کاهش قدرت چنگش فقط برای «شدید» آستانه دارد و برای «متوسط» کاربرد ندارد.</small>'),
          B('کد ICD-10 سوءتغذیه پروتئین-کالری شدید ___ است.', ['E43', 'E44.0', 'E46'], 'E43 برای شدید و E44.0 برای متوسط.'),
          T('تجمع مایع می‌تواند کاهش وزن واقعی بیمار را پنهان کند.', true, 'درست. ادم وزن را بالا نشان می‌دهد و کاهش وزن، عضله و چربی را می‌پوشاند؛ برای همین جزو ویژگی‌هاست.'),
          M('کدام مورد جزو شش ویژگی سوءتغذیه نیست؟', ['آلبومین پایین', 'کاهش وزن', 'تجمع مایع', 'کاهش قدرت چنگش'], 'آلبومین و پره‌آلبومین نشانگر التهاب‌اند، نه ویژگی تشخیصی سوءتغذیه.')
        ]
      },
      {
        id: 'hx3', title: 'دریافت انرژی', icon: '🍽️', items: [
          L('دریافت در برابر نیاز', 'سوءتغذیه نتیجه <b>دریافت یا جذب ناکافی</b> غذا و مواد مغذی است؛ پس مقایسه دریافت اخیر با نیاز، معیار اصلی است.<br><br>کارشناس تغذیه:<br>۱. تاریخچه غذایی می‌گیرد<br>۲. نیاز انرژی را برآورد می‌کند<br>۳. دریافت را از <b>همه منابع</b> (دهانی، روده‌ای، وریدی) حساب می‌کند<br>۴. دریافت را به صورت <b>درصدی از نیاز</b> در طول زمان بیان می‌کند'),
          N('h.int'),
          L('آستانه‌های دریافت', tbl([['زمینه', 'متوسط', 'شدید'], ['حاد', 'کمتر از ۷۵٪ برای بیش از ۷ روز', '۵۰٪ یا کمتر برای ۵ روز یا بیشتر'], ['مزمن', 'کمتر از ۷۵٪ برای ۱ ماه یا بیشتر', '۷۵٪ یا کمتر برای ۱ ماه یا بیشتر'], ['اجتماعی', 'کمتر از ۷۵٪ برای ۳ ماه یا بیشتر', '۵۰٪ یا کمتر برای ۱ ماه یا بیشتر']]) + '<small>در بیماری مزمن، برای متوسط و شدید عملاً یک آستانه (حدود ۷۵٪ برای یک ماه) آورده؛ در عمل بقیه ویژگی‌ها شدت را روشن می‌کنند.</small>'),
          M('بیمار پس از جراحی بزرگ، ۶ روز است که حدود ۴۵٪ نیازش را می‌خورد. این دریافت؟', ['پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط', 'معیار را کامل نمی‌کند', 'فقط در بیماری مزمن معنا دارد'], 'زمینه حاد: ۵۰٪ یا کمتر برای ۵ روز یا بیشتر ← شدید.'),
          N('h.intc'),
          T('در زمینه حاد، دریافت ۶۰٪ نیاز به مدت ۵ روز معیار «متوسط» را کامل می‌کند.', false, 'متوسط در حاد یعنی کمتر از ۷۵٪ برای <b>بیش از ۷ روز</b>؛ ۵ روز کافی نیست (و ۶۰٪ هم برای شدید زیاد است).'),
          L('سؤال‌های کاوشگر', 'حساب دقیق کالری گذشته همیشه ممکن نیست. به جای آن، تغییر الگوی خوردن را بپرس:<br>• «مقدار غذایی که در هر وعده می‌خوری تغییر کرده؟»<br>• «وقتی حالت خوب است و عادی غذا می‌خوری، با الان چه فرقی دارد؟»<br>• «الان در مقایسه با مقدار همیشگی‌ات چقدر می‌خوری؟»<br>• «چند وقت یک بار وعده‌ای را جا می‌اندازی؟»<br>• «آخرین بار کی یک وعده «عادی» خوردی؟»<br>• برای تغذیه لوله‌ای یا وریدی: «چند وقت یک بار حجم تجویزشده کامل می‌رسد؟»'),
          M('کدام سؤال برای برآورد دریافت مناسب‌تر است؟', ['الان در مقایسه با مقدار همیشگی‌ات چقدر می‌خوری؟', 'غذایت را کامل می‌خوری، درست است؟', 'دیروز دقیقاً چند کالری خوردی؟', 'اشتهایت که خوب است؟'], 'سؤال باید باز و کاوشگر باشد، نه جهت‌دار؛ پرسیدن کالری دقیق هم واقع‌بینانه نیست.'),
          B('دریافت انرژی از همه منابع، یعنی دهانی، روده‌ای و ___، با نیاز مقایسه می‌شود.', ['وریدی', 'مکمل ویتامین', 'آب'], 'تغذیه وریدی (پرنترال) هم بخشی از دریافت است.')
        ]
      },
      {
        id: 'hx4', title: 'کاهش وزن', icon: '⚖️', items: [
          L('درصد کاهش وزن', 'کاهش وزن همیشه به صورت <b>درصدی از وزن پایه (معمول)</b> و در یک <b>بازه زمانی</b> بیان می‌شود:<br><div class="fx" dir="ltr">% = (usual − current) ÷ usual × 100</div>مقدار، درصد و <b>سرعت</b> تغییر وزن همه مهم‌اند. کارشناس تغذیه وزن را کنار یافته‌های دیگر و به‌خصوص <b>کم‌آبی یا پرآبی بدن</b> تفسیر می‌کند.'),
          N('h.wl'),
          L('آستانه‌های کاهش وزن', tbl([['زمینه', 'متوسط', 'شدید'], ['حاد', '۱ تا ۲٪ در ۱ هفته · ۵٪ در ۱ ماه · ۷٫۵٪ در ۳ ماه', 'بیش از ۲٪ در ۱ هفته · بیش از ۵٪ در ۱ ماه · بیش از ۷٫۵٪ در ۳ ماه'], ['مزمن و اجتماعی', '۵٪ در ۱ ماه · ۷٫۵٪ در ۳ ماه · ۱۰٪ در ۶ ماه · ۲۰٪ در ۱ سال', 'بیش از ۵٪ · ۷٫۵٪ · ۱۰٪ · ۲۰٪ در همان بازه‌ها']]) + '<small>آستانه‌ها یک عددند («۵٪» در برابر «بیش از ۵٪»)؛ ابزارهای نگار درصد را با دقت همان آستانه گرد می‌کنند.</small>'),
          M('بیمار با سرطان (بیماری مزمن) در ۶ ماه ۱۲٪ وزنش را از دست داده است. این کاهش وزن؟', ['پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط', 'معیار را کامل نمی‌کند', 'در بیماری مزمن کاهش وزن معیار نیست'], 'مزمن: بیش از ۱۰٪ در ۶ ماه ← شدید.'),
          N('h.wlc'),
          T('در زمینه حاد، کاهش ۳٪ وزن در یک هفته معیار «شدید» را کامل می‌کند.', true, 'حاد: بیش از ۲٪ در ۱ هفته ← شدید.'),
          L('دام‌های وزن', '• <b>ادم و آسیت</b> وزن را بالا نشان می‌دهند و کاهش وزن را پنهان می‌کنند.<br>• <b>دهیدراتاسیون</b> وزن را به‌طور کاذب پایین نشان می‌دهد و کاهش وزن را بزرگ‌تر جلوه می‌دهد.<br>• وزن «گزارش‌شده» را با سؤال‌هایی مثل «لباس‌هایت گشاد شده؟» و پرونده‌های قبلی راستی‌آزمایی کن.<br>• درصد را همیشه از وزن <b>معمول</b> حساب کن، نه وزن فعلی.'),
          M('بیمار نارسایی قلبی با ادم ۳+ پاها، در یک ماه وزنش تغییری نکرده است. بهترین برداشت؟', ['ادم ممکن است کاهش وزن واقعی را پنهان کرده باشد؛ عضله و چربی را در اندام فوقانی بررسی کن', 'کاهش وزن ندارد پس سوءتغذیه ندارد', 'باید وزن را ۱۰٪ کم‌تر ثبت کرد', 'وزن در این بیمار بی‌معناست و نباید اندازه‌گیری شود'], 'تجمع مایع کاهش وزن، عضله و چربی را می‌پوشاند؛ اندام فوقانی کمتر درگیر ادم است.'),
          B('دهیدراتاسیون وزن بیمار را به‌طور کاذب ___ نشان می‌دهد.', ['پایین', 'بالا', 'ثابت'], 'کم شدن آب بدن وزن را پایین می‌آورد و کاهش وزن را بیش از واقع نشان می‌دهد.'),
          N('h.bmi')
        ]
      },
      {
        id: 'hx5', title: 'رویکرد نظام‌مند: پرونده', icon: '📂', items: [
          L('پیش از رفتن سراغ بیمار', 'NFPE فقط یک جزء ارزیابی است. اول <b>پرونده</b> را مرور کن؛ پرونده کامل نیست ولی جاهای خالی‌ای را نشان می‌دهد که باید در مصاحبه و معاینه پر شوند.<br><br>تا جای ممکن این‌ها را جمع کن:<br>• تاریخچه و تشخیص بالینی<br>• نشانه‌ها و علائم حیاتی<br>• داده‌های تن‌سنجی<br>• آزمایش‌ها<br>• داده‌های رژیمی<br>• وضعیت عملکردی'),
          P('هر داده پرونده را به کاربردش وصل کن', [['تاریخچه بیماری و جراحی', 'علت احتمالی و زمینه سوءتغذیه'], ['تهوع، اسهال، درد', 'عوامل مانع دریافت کافی'], ['وزن و تاریخچه وزن', 'مقدار، درصد و سرعت تغییر'], ['آزمایش‌ها', 'هیدراتاسیون، التهاب و کمبود ریزمغذی']]),
          L('تاریخچه و نشانه‌ها', '<b>تاریخچه و تشخیص بالینی</b>: بیماری‌ها، جراحی‌ها، شیمی‌درمانی، بستری‌های قبلی یا تروما ممکن است دریافت یا استفاده از مواد مغذی را مختل کنند. بیماری حاد می‌تواند روی بیماری مزمن سوار شود.<br><br><b>نشانه‌ها و علائم حیاتی</b>: درد، تهوع، استفراغ، اسهال و یبوست مانع دریافت کافی‌اند؛ علائم حیاتی وجود و شدت التهاب را نشان می‌دهند.'),
          T('بیماری حاد و مزمن نمی‌توانند هم‌زمان در یک بیمار وجود داشته باشند.', false, 'بیماری حاد ممکن است همراه بیماری مزمن باشد؛ مثلاً بیمار سرطانی با سپسیس.'),
          L('داده‌های رژیمی و عملکردی', '<b>داده‌های رژیمی</b>: دریافت از همه منابع (دهانی، روده‌ای، وریدی) در پرونده ممکن است ذهنی باشد؛ با گفته بیمار یا مراقبش تأییدش کن و با نیاز و دریافت معمول بیمار مقایسه کن.<br><br><b>وضعیت عملکردی</b>: قدرت و توان جسمی را با فعالیت‌های عادی و قدرت پایه بیمار مقایسه کن. فقط تغییرهایی که به وضعیت تغذیه مربوط‌اند (مثلاً تحلیل عضله که فعالیت را سخت کرده) «عملکردی-تغذیه‌ای» حساب می‌شوند.'),
          M('کدام تغییر عملکردی به وضعیت تغذیه مربوط است؟', ['ضعف در بالا رفتن از پله به دنبال تحلیل عضله ران', 'ناتوانی در راه رفتن پس از شکستگی لگن', 'ضعف یک‌طرفه پس از سکته مغزی', 'محدودیت حرکت شانه به‌خاطر آرتروز'], 'تغییرهایی که از تحلیل عضله ناشی شوند تغذیه‌ای‌اند؛ شکستگی، سکته و آرتروز علت غیرتغذیه‌ای دارند.'),
          O('داده‌های پیش از معاینه را به ترتیب رویکرد نظام‌مند مرتب کن', ['تاریخچه و تشخیص بالینی', 'نشانه‌ها و علائم حیاتی', 'داده‌های تن‌سنجی', 'آزمایش‌ها', 'داده‌های رژیمی', 'وضعیت عملکردی'], 'با این ترتیب هدف این است که هیچ بخشی جا نماند.'),
          B('داده‌های رژیمی ثبت‌شده در پرونده ممکن است ___ باشند و باید با گفته بیمار یا مراقب تأیید شوند.', ['ذهنی', 'دقیق', 'قدیمی'], 'ثبت دریافت در پرونده اغلب تقریبی است.'),
          M('هدف اصلی مرور پرونده پیش از معاینه چیست؟', ['پیدا کردن جاهای خالی که باید در مصاحبه و معاینه پر شوند', 'جایگزین کردن معاینه', 'تعیین تشخیص قطعی', 'محاسبه دقیق کالری'], 'پرونده نقطه شروع است، نه منبع کامل.')
        ]
      },
      {
        id: 'hx6', title: 'مصاحبه با بیمار', icon: '💬', items: [
          L('هدف‌های اولین برخورد', 'وقتی سراغ بیمار می‌روی:<br>• خودت را معرفی کن و دلیل آمدنت را بگو<br>• <b>ارتباط</b> بساز<br>• برای مصاحبه و معاینه <b>رضایت</b> بگیر<br>• در تمام مدت <b>حریم خصوصی</b> بیمار را حفظ کن<br><br>اگر بیمار نمی‌تواند حرف بزند، خانواده یا مراقب اطلاعات لازم را می‌دهند و تناقض‌ها را روشن می‌کنند.'),
          O('گام‌های شروع برخورد با بیمار را مرتب کن', ['معرفی خود و دلیل ملاقات', 'برقراری ارتباط', 'گرفتن رضایت برای مصاحبه و معاینه', 'حفظ حریم خصوصی در تمام مدت'], 'رضایت پیش از هر لمسی گرفته می‌شود.'),
          L('سؤال باز، نه جهت‌دار', 'سؤال‌ها باید <b>باز و کاوشگر</b> باشند تا اطلاعات بی‌طرفانه بدهند. در مصاحبه روی <b>شدت و مدت</b> مشکل تغذیه‌ای تمرکز کن؛ همین دو برای استفاده از معیارهای سوءتغذیه لازم‌اند.<br><br>نکته: بیماران اغلب <b>هنگام معاینه دستی</b> اطلاعات بیشتری می‌دهند تا در مصاحبه تنها؛ پس هم‌زمان با معاینه سؤال بپرس.'),
          T('بیماران اغلب هنگام معاینه دستی اطلاعات بیشتری از مصاحبه تنها می‌دهند.', true, 'درست؛ پس بازخورد بیمار را هم‌زمان با معاینه بگیر.'),
          L('کلمه‌ها اثر دارند', '• از اصطلاحاتی که <b>پریشانی عاطفی</b> می‌آورند پرهیز کن؛ بدن بیمار را با کلمات منفی توصیف نکن (چاقی، لاغری شدید، اختلال خوردن). از واژه‌های بالینی و توصیفی استفاده کن.<br>• به جای «چقدر عضله از دست دادی!» بگو: «کاهش ناخواسته عضله ممکن است پیش بیاید؛ با یک معاینه دقیق می‌توانیم برنامه درمان بهتری بچینیم.»<br>• درباره <b>برگشت</b> وزن، چربی یا عضله قول نده و <b>اطمینان کاذب</b> نده.'),
          M('کدام جمله به بیمار سرطانی مناسب‌تر است؟', ['کاهش ناخواسته عضله ممکن است پیش بیاید؛ با معاینه دقیق می‌توانیم برنامه بهتری بچینیم.', 'از دفعه قبل خیلی عضله از دست داده‌ای!', 'نگران نباش، با این مکمل همه عضله‌ات برمی‌گردد.', 'خیلی لاغر شده‌ای؛ باید بیشتر بخوری.'], 'توصیف خنثی و آموزشی، بدون قضاوت و بدون اطمینان کاذب درباره بهبود.'),
          L('اگر بیمار معاینه را نپذیرفت', 'باز هم راه هست:<br>• نواحی <b>باز</b> بدن (صورت، دست‌ها) را هنگام مصاحبه نگاه کن<br>• از بیمار بخواه علامت <b>«OK»</b> با انگشتانش نشان دهد (عضله بین شست و اشاره)<br>• درباره تغییر عضله و چربی سؤال‌های مشخص بپرس<br><br>همین روش‌ها در <b>ویزیت از راه دور (تله‌هلث)</b> هم کار می‌کنند.<br><small>نکته: در گرفتن و اشتراک اطلاعات بیمار، قوانین حفظ حریم خصوصی (در آمریکا HIPAA) را رعایت کن.</small>'),
          M('بیمار اجازه معاینه نمی‌دهد. کدام کار درست است؟', ['نواحی باز مثل صورت و دست را نگاه کن و بخواه علامت OK نشان دهد', 'بدون اجازه معاینه را انجام بده', 'ارزیابی تغذیه را کنار بگذار', 'فقط بر پایه BMI تصمیم بگیر'], 'رضایت بیمار شرط است؛ ولی مشاهده نواحی باز و سؤال‌های هدفمند هنوز اطلاعات مفید می‌دهند.'),
          B('در مصاحبه، روی ___ و مدت مشکل تغذیه‌ای تمرکز کن.', ['شدت', 'علت', 'هزینه'], 'شدت و مدت دقیقاً همان چیزی است که معیارهای سوءتغذیه لازم دارند.')
        ]
      },
      {
        id: 'hx7', title: 'نگاه و لمس', icon: '🖐️', items: [
          L('چهار روش معاینه، دو روش اصلی', 'روش‌های معاینه فیزیکی: <b>نگاه (inspection)</b>، <b>لمس (palpation)</b>، دق و سمع. در NFPE فقط دو روش اول به کار می‌روند.<br><br>• <b>نگاه</b>: مشاهده کلی ظاهر، وضعیت بدن، رنگ، بافت، اندازه و <b>تقارن</b><br>• <b>لمس</b>: بررسی حجم، تون، بافت، اندازه، کیفیت حجم و توده، تورم، تقارن و دما با دست' + pic('palpate', null, 'لمس پشت دست و عضلات بین‌استخوانی')),
          P('هر روش را به کاری که انجام می‌دهد وصل کن', [['نگاه', 'رنگ، تقارن و وضعیت بدن'], ['لمس', 'حجم و تون عضله'], ['دق', 'در NFPE به کار نمی‌رود'], ['تکرار معاینه در بستری', 'پیدا کردن تغییر وضعیت تغذیه']]),
          L('کِی معاینه کنیم؟', 'معاینه را در <b>ویزیت اول</b> انجام بده و <b>در طول بستری تکرار کن</b> تا تغییرات وضعیت تغذیه را ببینی.<br><br>کل ارزیابی را هماهنگ کن: عضله و چربی، کمبود ریزمغذی‌ها و تجمع مایع. یافته‌های فیزیکی باید با شواهد پرونده و مصاحبه جور باشند.'),
          L('نگاه و لمس برای هر ویژگی', tbl([['ویژگی', 'نگاه', 'لمس'], ['مایعات', 'ادم، مخاط دهان، خشکی پوست', 'کیفیت و شدت ادم، تورگور، پرشدن مویرگی ناخن'], ['عضله و چربی', 'بافت، اندازه، تقارن، وضعیت بدن', 'حجم و تون عضله، ذخیره چربی'], ['پوست', 'رنگ، بثورات، خشکی، زخم', 'دما'], ['ناخن', 'رنگ، بافت، شکل (لاک و کاشت را در نظر بگیر)', 'پرشدن مویرگی، شکنندگی'], ['مو', 'رنگ، براقی، پراکندگی', 'بافت']])),
          M('برای بررسی ناخن کدام کار با «لمس» انجام می‌شود؟', ['بررسی پرشدن مویرگی و شکنندگی', 'دیدن رنگ و شکل', 'توجه به لاک ناخن', 'مقایسه تقارن'], 'رنگ، شکل و بهداشت با نگاه؛ پرشدن مویرگی و شکنندگی با لمس.'),
          L('چشم، دهان و گردن با چراغ‌قوه', '• <b>چشم</b>: با چراغ‌قوه رنگ، ظاهر و ترشح<br>• <b>بینی</b>: رنگ، بافت و ترشح<br>• <b>لب</b>: ترک، ضایعه، رنگ و بافت<br>• <b>دهان و زبان</b>: با چراغ‌قوه رنگ، بافت، رطوبت، تورم، ضایعه، پوسیدگی و ساییدگی دندان<br>• <b>گردن</b>: نگاه و لمس برای تورم و تقارن' + pic(['penlight-mouth', 'penlight-eye'], ['دهان و زبان', 'چشم'])),
          T('در NFPE برای بررسی دهان و زبان از چراغ‌قوه استفاده می‌شود.', true, 'درست؛ نور کافی برای دیدن رنگ، رطوبت، ضایعه و پوسیدگی لازم است.', { k: 'penlight-mouth' }),
          B('یافته‌های فیزیکی باید با شواهد ___ و مصاحبه هم‌خوان باشند.', ['پرونده', 'رادیولوژی', 'ژنتیک'], 'NFPE بخشی از تصویر کامل است.'),
          M('کدام روش معاینه در NFPE به کار نمی‌رود؟', ['سمع', 'نگاه', 'لمس', 'هر سه به کار می‌روند'], 'فقط نگاه و لمس روش‌های اصلی NFPE هستند.')
        ]
      },
      {
        id: 'hx8', title: 'ایمنی و نگاه کلی', icon: '🧤', items: [
          L('احتیاطات استاندارد', 'در <b>شروع و پایان</b> هر برخورد با بیمار، بهداشت دست را دقیق رعایت کن: شستن با آب و صابون یا ضدعفونی‌کننده الکلی.<br><br>اگر احتمال تماس با مایعات بدن، زخم یا مواد عفونی هست، <b>تجهیزات حفاظت فردی</b> لازم است: دستکش، ماسک، گان ایزولاسیون، عینک و شیلد صورت. نوع آن را ماهیت تماس تعیین می‌کند و پوشیدن، درآوردن و دور انداختن آن روش درست دارد.' + pic(['hygiene', 'ppe'], ['بهداشت دست', 'تجهیزات حفاظت فردی'])),
          M('بهداشت دست در کدام زمان لازم است؟', ['در شروع و پایان هر برخورد با بیمار', 'فقط پس از معاینه', 'فقط اگر بیمار عفونت دارد', 'فقط وقتی دستکش نمی‌پوشی'], 'در ابتدا و انتهای هر برخورد.'),
          L('نگاه کلی اول', 'پیش از لمس، یک <b>نگاه کلی</b> بینداز:<br>• بیمار نشسته است یا خوابیده؟ می‌تواند وضعیتش را حفظ کند؟<br>• از دست رفتن عضله یا چربی <b>دیده می‌شود</b>؟ کم‌وزن به نظر می‌رسد؟<br>• چه <b>وسایل پزشکی</b> (لوله، درن، کاتتر) جلوی معاینه بعضی نواحی را می‌گیرند؟<br>• تورم، ادم یا آسیت آشکار هست؟ ممکن است وزن را گمراه‌کننده کند؟<br>• بیمار آشکارا دهیدراته است؟<br>• نشانه کمبود ریزمغذی روی صورت، پوست، مو یا ناخن دیده می‌شود؟'),
          T('پیش از لمس بیمار، یک نگاه کلی به وضعیت بدن، وسایل پزشکی و ادم آشکار انداخته می‌شود.', true, 'درست؛ نگاه کلی گام دوم پس از احتیاطات استاندارد است.'),
          L('جاذبه و جای ادم', 'ادم محیطی به <b>پایین‌ترین نواحی بدن</b> می‌رود:<br>• بیمار <b>نشسته یا ایستاده</b> ← مچ و پاها<br>• بیمار <b>خوابیده به پشت</b> ← ران‌ها و ناحیه <b>ساکرال</b><br>• پاهای بالا نگه‌داشته‌شده ادم را جابه‌جا می‌کنند<br><br>پس در بیمار بستری، اگر پاها ادم ندارند، پشت ران و ساکروم را هم ببین.'),
          M('بیمار یک هفته است به پشت در تخت خوابیده. ادم را بیشتر کجا جست‌وجو می‌کنی؟', ['ران‌ها و ناحیه ساکرال', 'فقط مچ پا', 'صورت', 'دست‌ها'], 'در وضعیت خوابیده، مایع به نواحی وابسته یعنی ران و ساکروم می‌رود.'),
          P('هر وضعیت را به محل تجمع ادم وصل کن', [['ایستاده یا نشسته', 'مچ و پاها'], ['خوابیده به پشت', 'ران و ساکروم'], ['تجمع مایع در شکم', 'آسیت'], ['ادم عمومی و گسترده', 'آنازارکا']]),
          B('در بیمار بستری، لوله‌ها و ___ ممکن است مانع معاینه بعضی نواحی شوند.', ['درن‌ها', 'لباس‌ها', 'ملحفه‌ها'], 'وسایل پزشکی را در نگاه کلی شناسایی کن تا بدون جابه‌جا کردنشان معاینه کنی.'),
          M('کدام تجهیز حفاظتی را چه چیزی تعیین می‌کند؟', ['ماهیت تماس مورد انتظار', 'سلیقه بالینگر', 'سن بیمار', 'زمان ویزیت'], 'نوع و میزان PPE به ماهیت تماس بستگی دارد؛ بعضی عفونت‌ها دستورالعمل خاص دارند.')
        ]
      },
      {
        id: 'hx9', title: 'معاینه سر تا پا', icon: '🧍', items: [
          L('سر تا پا، با نگاه و لمس', 'معاینه را <b>از سر تا پا</b> با ترکیب لمس و نگاه ادامه بده. وضعیت درست بدن معاینه را دقیق‌تر و قابل اعتمادتر می‌کند (اگر بیمار خطر سقوط یا آسیب ندارد):<br>• از بیمار بخواه بنشیند، بایستد یا دراز بکشد<br>• بیمار بستری را به پهلو بچرخان<br>• در بیمار بدحال مراقب لوله‌ها، درن‌ها، خط‌های وریدی و اتصال به دستگاه‌ها باش' + pic(['position0', 'position1', 'position2', 'position3'])),
          L('حریم و تقارن', '• پتو، لباس، گان و جوراب فشاری را طوری کنار بزن که ناحیه دیده شود ولی <b>حرمت و حریم بیمار</b> حفظ شود.<br>• <b>هر دو طرف بدن</b> را ببین: تغییر <b>یک‌طرفه</b> معمولاً علت تغذیه‌ای ندارد (مثلاً سکته یا شکستگی). تحلیل تغذیه‌ای معمولاً <b>قرینه</b> است.'),
          M('ران راست بیمار نسبت به ران چپ به‌وضوح لاغرتر است. بهترین برداشت؟', ['احتمالاً علت غیرتغذیه‌ای دارد؛ تاریخچه سکته، شکستگی یا آسیب عصب را بپرس', 'سوءتغذیه شدید دارد', 'سوءتغذیه متوسط دارد', 'باید فقط ران راست را ثبت کرد'], 'تحلیل تغذیه‌ای قرینه است؛ تفاوت یک‌طرفه به نفع علت عصبی یا عضلانی-اسکلتی است.'),
          L('هم‌زمان حرف بزن', 'هنگام معاینه سؤال بپرس تا هم اطلاعات بگیری و هم کمتر فرض کنی:<br>• «صورتت لاغرتر به نظر خودت می‌رسد؟»<br>• «عینک یا دندان مصنوعی‌ات اندازه‌اش فرق کرده؟»<br>• «لباس‌هایت جور دیگری اندازه‌ات هستند؟»<br>• «جواهرات (انگشتر، ساعت) گشاد شده‌اند؟»<br>• هنگام معاینه دست و پا: ضعف دارد؟ فعالیتش با قبل چه فرقی کرده؟<br>• هنگام معاینه سر و دهان: زخم دهان، درد دندان، مشکل جویدن، بلع یا تغییر چشایی؟'),
          T('پرسیدن «انگشتر یا ساعتت گشاد شده؟» بخشی از معاینه سر تا پاست.', true, 'درست؛ تغییر اندازه جواهرات و لباس سرنخ ساده‌ای از کاهش عضله، چربی یا تغییر مایعات است.'),
          O('ترتیب کلی یک NFPE را مرتب کن', ['بهداشت دست و تجهیزات حفاظتی', 'معرفی و گرفتن رضایت', 'نگاه کلی به بیمار', 'معاینه سر تا پا با نگاه و لمس', 'ثبت یافته‌ها و مقایسه با پرونده'], 'احتیاطات، ارتباط، نگاه کلی، معاینه نظام‌مند و در پایان مستندسازی.'),
          M('بیمار بستری نمی‌تواند بنشیند. برای معاینه پشت چه می‌کنی؟', ['از او می‌خواهم به پهلو بچرخد', 'معاینه پشت را کنار می‌گذارم', 'او را به‌زور می‌نشانم', 'فقط از روی لباس نگاه می‌کنم'], 'بیمار بستری را می‌توان به پهلو چرخاند.'),
          B('در بیمار بدحال ICU، مراقب لوله‌ها، درن‌ها و ___ باش تا به‌طور ناخواسته جابه‌جا نشوند.', ['خط‌های وریدی', 'ملحفه‌ها', 'عینک'], 'معاینه کافی نباید به اتصال‌های حیاتی آسیب بزند.'),
          M('کدام سؤال برای ناحیه سر و دهان مناسب است؟', ['در جویدن یا بلع مشکل داری؟', 'ساق پایت ضعیف شده؟', 'لباس‌هایت تنگ شده؟', 'روزی چند ساعت پیاده‌روی می‌کنی؟'], 'زخم دهان، درد دندان، مشکل جویدن و بلع و تغییر چشایی مستقیماً بر دریافت اثر می‌گذارند.')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — دنیای ۲: التهاب و مستندسازی (فصل ۳ و پیوست ۲ کتاب) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl } = EA.K;

  EA.worlds.push({
    id: 'inf', sym: 'CRP', name: 'التهاب و مستندسازی', sub: 'اتیولوژی، نشانگرها، کدگذاری و پرونده', color: '#7B5CE0', dark: '#5D40C4', light: '#ECE6FF',
    levels: ['ردیابان التهاب', 'خوانندگان آزمایش', 'نویسندگان پرونده'],
    gens: ['i.vital', 'i.ctx', 'i.dx', 'i.lab'],
    lessons: [
      {
        id: 'inf1', title: 'اتیولوژی: التهاب و زمان', icon: '🔥', items: [
          L('دو سؤال برای تعیین زمینه', 'اتیولوژی سوءتغذیه با <b>دو عامل</b> تعیین می‌شود:<br>۱. آیا روند بیماری <b>التهاب</b> ایجاد کرده؟ با چه <b>شدتی</b>؟<br>۲. این وضعیت <b>چه مدت</b> بر تغذیه بیمار اثر گذاشته؟<br><br>شناختن زمینه التهابی بیمار کمک می‌کند بفهمی سوءتغذیه با چه سرعتی و چه اثری پیش می‌رود.'),
          M('اتیولوژی سوءتغذیه با کدام دو عامل تعیین می‌شود؟', ['وجود و شدت التهاب، و مدت اثر بیماری', 'سن و جنس بیمار', 'BMI و آلبومین', 'نوع تغذیه و راه دریافت'], 'التهاب و طول مدت، دو عامل اصلی اتیولوژی‌اند.'),
          L('سه زمینه، سه شدت التهاب', tbl([['زمینه', 'وضعیت التهاب'], ['بیماری یا آسیب حاد', 'التهاب شدید و پرشدت'], ['بیماری مزمن', 'التهاب طولانی با شدت کمتر'], ['شرایط اجتماعی یا محیطی', 'بدون نشانه التهاب (گرسنگی یا نیمه‌گرسنگی)']]) + 'بیماری‌ای که <b>بیش از ۳ ماه</b> طول بکشد مزمن حساب می‌شود.'),
          P('هر زمینه را به وضعیت التهابش وصل کن', [['حاد', 'التهاب شدید و پرشدت'], ['مزمن', 'التهاب طولانی و کم‌شدت'], ['اجتماعی یا محیطی', 'بدون التهاب']]),
          L('دام اتیولوژی', 'در انتخاب علت دقت کن. مثلاً بیمار <b>دیابتی</b> که چند ماه پیش <b>شغلش را از دست داده</b>، ممکن است نه به‌خاطر دیابت، بلکه به‌خاطر <b>مشکل اقتصادی</b> و ناتوانی در تهیه غذا یا دارو دچار سوءتغذیه شده باشد.<br><br>پس فقط به فهرست تشخیص‌ها نگاه نکن؛ بپرس <b>چه چیزی واقعاً</b> باعث کم‌خوردن شده است.'),
          M('بیمار دیابتی پس از بیکاری، چند ماه است غذای کافی تهیه نمی‌کند و نشانه التهاب ندارد. زمینه مناسب؟', ['شرایط اجتماعی یا محیطی', 'بیماری مزمن', 'بیماری حاد', 'نمی‌توان تعیین کرد'], 'علت اصلی کم‌خوردن اقتصادی است و التهاب فعالی وجود ندارد.'),
          T('هر بیمار مبتلا به بیماری مزمن، لزوماً در زمینه «بیماری مزمن» دچار سوءتغذیه می‌شود.', false, 'زمینه را علت واقعی سوءتغذیه تعیین می‌کند، نه صرفاً فهرست بیماری‌های بیمار.'),
          B('بیماری حاد ممکن است روی بیماری ___ سوار شود.', ['مزمن', 'اجتماعی', 'ارثی'], 'مثلاً بیمار سرطانی که دچار سپسیس شده است.'),
          M('در تحلیل عضله بیمار ICU، چرا اتیولوژی مهم است؟', ['التهاب حاد کاتابولیسم عضله را سرعت می‌دهد، نه فقط مدت بیماری', 'چون فقط بیماران ICU سوءتغذیه می‌گیرند', 'چون اتیولوژی کد ICD را عوض نمی‌کند', 'اتیولوژی اهمیتی ندارد'], 'کاهش توده عضله در بیماری بحرانی کاهش بیشتر عضله را جلو می‌برد؛ شدت التهاب مهم است، نه فقط زمان.')
        ]
      },
      {
        id: 'inf2', title: 'بیماری‌ها و زمینه‌ها', icon: '📚', items: [
          L('زمینه حاد', '<b>التهاب شدید و پرشدت</b>:<br>• آبسه شکمی<br>• سندرم دیسترس تنفسی حاد (ARDS)<br>• سوختگی<br>• تروما<br>• عفونت بزرگ یا سپسیس<br>• جراحی بزرگ'),
          M('کدام مورد در زمینه «بیماری یا آسیب حاد» است؟', ['سوختگی وسیع', 'نارسایی احتقانی قلب', 'زوال عقل', 'آرتریت روماتوئید'], 'سوختگی التهاب شدید و حاد می‌سازد.'),
          L('زمینه مزمن', '<b>التهاب طولانی با شدت کمتر</b>: نارسایی ارگان، سرطان، بیماری قلبی-عروقی، سلیاک، نارسایی احتقانی قلب، فیبروز کیستیک، سکته مغزی، پانکراتیت مزمن، دیابت، HIV، لوپوس، <b>چاقی</b>، کیست کاذب پانکراس، آرتریت روماتوئید، ALS و دیستروفی‌های عضلانی.'),
          T('چاقی جزو بیماری‌های زمینه مزمن است.', true, 'درست؛ چاقی یک وضعیت التهابی مزمن با شدت کم است.'),
          L('زمینه اجتماعی یا محیطی', '<b>بدون نشانه التهاب</b>: آشالازی، الکلیسم، زوال عقل، سوءمصرف مواد، اختلال خوردن، مشکلات اقتصادی، گیلن‌باره، اختلالات روانی، درد، و درد کم‌خونی داسی‌شکل.<br><br><small>این فهرست کامل نیست و همه علت‌های تغذیه‌ای و غیرتغذیه‌ای را در بر نمی‌گیرد.</small>'),
          P('هر بیماری را به زمینه‌اش وصل کن', [['سپسیس', 'حاد'], ['فیبروز کیستیک', 'مزمن'], ['آشالازی', 'اجتماعی یا محیطی']]),
          N('i.ctx'),
          M('کدام مورد در زمینه «شرایط اجتماعی یا محیطی» است؟', ['اختلال خوردن', 'HIV', 'جراحی بزرگ', 'پانکراتیت مزمن'], 'اختلال خوردن بدون التهاب فعال، کم‌خوردن طولانی می‌سازد.'),
          N('i.ctx')
        ]
      },
      {
        id: 'inf3', title: 'التهاب حاد و مزمن', icon: '🌡️', items: [
          L('التهاب حاد', 'نشانه‌های <b>التهاب حاد</b>: تورم، قرمزی (اریتم)، تب، درد، <b>افزایش چشمگیر CRP</b> و لکوسیتوز.<br><br>التهاب حاد یک پاسخ <b>دفاعی، پاک‌سازی، سازگاری و ترمیم</b> است.'),
          M('کدام مورد جزو نشانه‌های التهاب حاد نیست؟', ['کاهش CRP', 'تب', 'لکوسیتوز', 'قرمزی و تورم'], 'در التهاب حاد CRP به‌طور چشمگیر بالا می‌رود.'),
          L('التهاب مزمن', 'نشانگرهای <b>التهاب مزمن</b> ممکن است همان‌ها باشند (لکوسیتوز، تب، CRP بالا) ولی <b>با شدت کمتر و برای مدت طولانی‌تر</b>. گاهی بیماری مزمن اصلاً نشانه‌های کلاسیک التهاب را ندارد.<br><br>هدف پاسخ التهابی خفیف، <b>ترمیمی</b> و رسیدن به تعادل (هموستاز) است.'),
          T('بیماری مزمن ممکن است هیچ نشانه کلاسیک التهاب نداشته باشد.', true, 'درست؛ بیماری‌های مزمن ممکن است نشانه‌های کلاسیک روند التهابی حاد را نداشته باشند.'),
          L('نشانگرها فقط پشتیبان‌اند', 'علائم حیاتی غیرطبیعی، نشانگرهای بیوشیمیایی و تصویربرداری ممکن است وجود التهاب را نشان دهند، ولی <b>ممکن است به وضعیت تغذیه ربطی نداشته باشند</b>.<br><br>آن‌ها را فقط <b>اطلاعات پشتیبان</b> برای تعیین اتیولوژی بدان، نه معیار تشخیص سوءتغذیه.'),
          M('نقش علائم حیاتی و آزمایش‌های التهابی در تشخیص سوءتغذیه چیست؟', ['اطلاعات پشتیبان برای تعیین اتیولوژی', 'معیار اصلی تعیین شدت', 'جایگزین معاینه فیزیکی', 'بی‌ارزش‌اند و نباید دیده شوند'], 'نشانگرهای التهاب به تعیین زمینه کمک می‌کنند، نه به اثبات سوءتغذیه.'),
          P('هر ویژگی را به نوع التهاب وصل کن', [['افزایش چشمگیر CRP', 'التهاب حاد'], ['شدت کم و طولانی', 'التهاب مزمن'], ['پاسخ دفاع و ترمیم', 'هدف التهاب حاد'], ['رسیدن به هموستاز', 'هدف التهاب خفیف مزمن']]),
          B('هدف پاسخ التهابی خفیف و طولانی، ترمیمی و رسیدن به ___ است.', ['هموستاز', 'کاتابولیسم', 'تب'], 'التهاب مزمن خفیف برای بازگرداندن تعادل است.'),
          T('تعیین وجود و شدت التهاب همیشه ساده و سرراست است.', false, 'همیشه ساده نیست؛ برای همین باید همه شواهد را کنار هم گذاشت.')
        ]
      },
      {
        id: 'inf4', title: 'علائم حیاتی', icon: '💓', items: [
          L('علائم حیاتی التهاب', tbl([['علامت', 'غیرطبیعی', 'نکته'], ['تب', '۳۷٫۷ درجه یا بیشتر', 'تب‌برها (سالیسیلات، استامینوفن، NSAID) پنهانش می‌کنند'], ['هیپوترمی', 'کمتر از ۳۵ درجه', 'علل دیگر را رد کن'], ['نبض', 'بیش از ۱۰۰ در دقیقه', 'داروهای ضدآریتمی (آمیودارون، دیزوپیرامید، کینیدین) پنهانش می‌کنند'], ['فشار خون', 'کمتر از ۹۰ یا افت بیش از ۴۰ از حد معمول', 'علل دیگر را رد کن'], ['تعداد تنفس', 'بیش از ۲۰ در دقیقه', 'علل دیگر را رد کن']]) + '<small>معیارهای فشار خون و تنفس بر پایه سندرم پاسخ التهابی سیستمیک (SIRS) برای سپسیس است.</small>'),
          N('i.vital'),
          M('بیمار تب ندارد ولی هر ۶ ساعت استامینوفن می‌گیرد. برداشت درست؟', ['تب‌بر ممکن است تب را پنهان کرده باشد', 'قطعاً التهاب ندارد', 'باید دارو را قطع کرد تا تب ظاهر شود', 'دمای بدن دیگر ارزشی ندارد'], 'تب ممکن است با تب‌برها پنهان شود.'),
          B('تب یعنی دمای ___ درجه سانتی‌گراد یا بیشتر.', ['۳۷٫۷', '۳۷٫۲', '۳۸٫۵'], 'معادل ۹۹٫۹ درجه فارنهایت.'),
          T('آمیودارون ممکن است تاکی‌کاردی ناشی از التهاب را پنهان کند.', true, 'درست؛ داروهای ضدآریتمی نبض را پایین نگه می‌دارند.'),
          N('i.vital'),
          P('هر علامت را به آستانه غیرطبیعی‌اش وصل کن', [['نبض', 'بیش از ۱۰۰ در دقیقه'], ['تعداد تنفس', 'بیش از ۲۰ در دقیقه'], ['هیپوترمی', 'کمتر از ۳۵ درجه'], ['فشار سیستولیک', 'کمتر از ۹۰']]),
          M('کدام علامت حیاتی جزو نشانگرهای التهاب در این درس نیست؟', ['اشباع اکسیژن', 'تعداد تنفس', 'فشار خون', 'دمای بدن'], 'نشانگرها: تب، هیپوترمی، نبض، فشار خون و تعداد تنفس.')
        ]
      },
      {
        id: 'inf5', title: 'آلبومین، پره‌آلبومین و CRP', icon: '🧪', items: [
          L('پروتئین‌های کبدی: نشانگر التهاب', tbl([['نشانگر', 'طبیعی', 'بالا', 'پایین'], ['آلبومین', '۳٫۵ تا ۵ g/dL', 'دهیدراتاسیون', 'التهاب، نارسایی کبد، سندرم نفروتیک، اضافه‌بار مایع'], ['پره‌آلبومین', '۱۵ تا ۳۵ mg/dL', 'تغییر وضعیت مایع، بیماری مزمن کلیه، مصرف استروئید', 'نارسایی کبد، التهاب'], ['CRP', 'کمتر از ۱ mg/dL', 'التهاب', '—']]) + '<small>محدوده‌ها در آزمایشگاه‌های مختلف فرق دارند.</small>'),
          M('آلبومین پایین در بیمار سپتیک بیشتر نشانه چیست؟', ['التهاب (پاسخ فاز حاد)', 'سوءتغذیه شدید', 'دهیدراتاسیون', 'دریافت پروتئین کم در هفته اخیر'], 'آلبومین در التهاب افت می‌کند و همبستگی قابل اعتمادی با سوءتغذیه ندارد.'),
          L('آلبومین ≠ وضعیت تغذیه', 'آلبومین و پره‌آلبومین <b>جزو شش ویژگی سوءتغذیه نیستند</b>. هیپوآلبومینمی ممکن است با کاهش فشار انکوتیک ادم بدهد، ولی <b>به‌طور قابل اعتمادی با سوءتغذیه همبستگی ندارد</b>.<br><br>در الگوی پرونده الکترونیک، هیپوآلبومینمی و پره‌آلبومین پایین در بخش «<b>نشانگرهای التهاب</b>» تیک می‌خورند.'),
          T('هیپوآلبومینمی به‌تنهایی برای تشخیص سوءتغذیه کافی است.', false, 'آلبومین نشانگر التهاب و وضعیت مایع است، نه ویژگی تشخیصی سوءتغذیه.'),
          N('i.lab'),
          P('هر یافته را به علت محتملش وصل کن', [['آلبومین بالا', 'دهیدراتاسیون'], ['پره‌آلبومین بالا', 'بیماری مزمن کلیه'], ['CRP بالا', 'التهاب'], ['آلبومین پایین با ادم و پروتئینوری', 'سندرم نفروتیک']]),
          B('محدوده طبیعی CRP کمتر از ___ mg/dL است.', ['۱', '۵', '۱۰'], 'CRP بالا به نفع التهاب است.'),
          N('i.lab'),
          M('مصرف استروئید روی پره‌آلبومین چه اثری دارد؟', ['ممکن است آن را بالا ببرد', 'همیشه آن را صفر می‌کند', 'اثری ندارد', 'آن را به آلبومین تبدیل می‌کند'], 'مصرف استروئید جزو علت‌های افزایش پره‌آلبومین است.')
        ]
      },
      {
        id: 'inf6', title: 'قند، گلبول سفید و پلاکت', icon: '🔬', items: [
          L('قند خون', '<b>طبیعی</b>: ناشتا ۷۰ تا ۱۰۰ mg/dL (تصادفی کمتر از ۱۲۵)<br><b>بالا</b>: دیابت، پرکاری تیروئید، سرطان یا التهاب پانکراس، <b>تروما، سکته، حمله قلبی، جراحی، عفونت</b>، کوشینگ و بعضی داروها<br><b>پایین</b>: هیپوگلیسمی واکنشی، الکل، انسولینوما، عفونت، نارسایی ارگان<br><br>هیپرگلیسمی استرسی یکی از نشانگرهای التهاب در الگوی پرونده است.'),
          M('بیمار غیردیابتی پس از جراحی بزرگ قند ۱۹۰ دارد. این یافته بیشتر نشانه چیست؟', ['پاسخ استرسی و التهابی به جراحی', 'تغذیه بیش از حد', 'کمبود ویتامین', 'سوءتغذیه شدید'], 'جراحی، تروما و عفونت جزو علت‌های قند بالا هستند.'),
          L('گلبول سفید و پلاکت', '<b>گلبول سفید</b> (طبیعی ۴۵۰۰ تا ۱۰٬۰۰۰): لکوسیتوز در عفونت، بیماری‌های التهابی، آسیب بافتی، سیگار، بعضی داروها و لوسمی؛ لکوپنی در سپسیس، شیمی‌درمانی، بعضی عفونت‌ها و بیماری‌های خودایمنی<br><br><b>پلاکت</b> (طبیعی ۱۵۰ تا ۴۰۰ هزار): افزایش در عفونت، جراحی بزرگ، تروما، سوختگی، سرطان، فقر آهن و بیماری‌های التهابی؛ کاهش در لوسمی، عفونت ویروسی، شیمی‌درمانی، الکل و بیماری خودایمنی'),
          T('سپسیس می‌تواند به جای لکوسیتوز، لکوپنی بدهد.', true, 'درست؛ سپسیس جزو علت‌های کاهش گلبول سفید هم هست.'),
          P('هر یافته را به یک علت محتمل وصل کن', [['لکوپنی', 'شیمی‌درمانی'], ['ترومبوسیتوز', 'فقر آهن'], ['هیپوگلیسمی', 'انسولینوما'], ['هیپرگلیسمی', 'سکته مغزی']]),
          L('تعادل نیتروژن و کشت', '<b>تعادل نیتروژن</b>: طبیعی مثبت؛ <b>منفی</b> در ناشتایی، بیماری، عفونت و استرس (یعنی بدن پروتئین را تجزیه می‌کند)<br><b>کشت مایعات بدن</b>: طبیعی منفی؛ مثبت یعنی عفونت'),
          M('تعادل نیتروژن منفی در بیمار ICU یعنی چه؟', ['تجزیه پروتئین بیش از دریافت؛ در استرس، عفونت یا ناشتایی', 'دریافت پروتئین بیش از نیاز', 'عملکرد طبیعی کلیه', 'دهیدراتاسیون'], 'تعادل منفی یعنی دفع نیتروژن بیش از دریافت.'),
          B('لکوسیتوز و تب در بیماری مزمن ممکن است با شدت ___ دیده شوند.', ['کمتر', 'بیشتر', 'یکسان'], 'التهاب مزمن همان نشانگرها را خفیف‌تر و طولانی‌تر نشان می‌دهد.'),
          M('محدوده طبیعی پلاکت کدام است؟', ['۱۵۰ تا ۴۰۰ هزار در میلی‌لیتر', '۴۵۰۰ تا ۱۰ هزار', '۷۰ تا ۱۰۰', '۱۵ تا ۳۵'], '۴۵۰۰ تا ۱۰٬۰۰۰ محدوده گلبول سفید است.')
        ]
      },
      {
        id: 'inf7', title: 'تصویربرداری', icon: '🩻', items: [
          L('تصویربرداری', tbl([['روش', 'حاد', 'مزمن'], ['عکس قفسه سینه', 'پنومونی، ارتشاح', 'اسکلرودرمی'], ['عکس شکم یا لگن', 'آبسه، پانکراتیت حاد، انسداد روده', 'پانکراتیت مزمن'], ['تخلیه معده، ترانزیت روده کوچک', 'سوراخ شدن روده، نشت روده', 'گاستروپارزی، اختلال حرکت، فیستول، آبسه'], ['آندوسکوپی یا کولونوسکوپی', 'گاستریت، ازوفاژیت، شعله‌ور شدن کرون یا کولیت', 'سندرم روده تحریک‌پذیر، انتریت پرتویی، تنگی'], ['اکوی مری', 'اندوکاردیت، وژتاسیون', 'نارسایی قلب، اختلال دریچه']])),
          M('کدام یافته تصویربرداری به نفع فرایند التهابی «حاد» است؟', ['آبسه در عکس شکم', 'گاستروپارزی در تخلیه معده', 'تنگی در کولونوسکوپی', 'اسکلرودرمی در عکس قفسه سینه'], 'آبسه، پانکراتیت حاد و انسداد روده در ستون حاد جدول‌اند.'),
          P('هر روش تصویربرداری را به یک یافته وصل کن', [['عکس قفسه سینه', 'پنومونی'], ['تخلیه معده', 'گاستروپارزی'], ['اکوی ازطریق مری', 'اندوکاردیت'], ['کولونوسکوپی', 'شعله‌ور شدن کولیت']]),
          T('یافته‌های تصویربرداری ممکن است به وضعیت تغذیه بیمار ربطی نداشته باشند.', true, 'درست؛ مثل بقیه نشانگرهای التهاب، فقط اطلاعات پشتیبان‌اند.'),
          L('تصویربرداری و ترکیب بدن', 'سی‌تی، MRI، سونوگرافی، DXA و BIA برای ارزیابی <b>بافت بدون چربی و عضله</b> هم به کار می‌روند و روندی رو به رشدند؛ ولی گران‌اند و همیشه در دسترس نیستند.<br><br>NFPE به تجهیزات گران نیاز ندارد و بالینگر آموزش‌دیده می‌تواند آن را <b>سریع و آسان</b> روی بیشتر بیماران انجام دهد.'),
          M('مزیت اصلی NFPE نسبت به سی‌تی یا DXA برای ترکیب بدن چیست؟', ['ارزان، سریع و بدون تجهیزات خاص', 'دقیق‌تر بودن در همه بیماران', 'عینی بودن کامل', 'نیاز نداشتن به آموزش'], 'NFPE به تجهیزات گران وابسته نیست؛ ولی ذهنی است و آموزش می‌خواهد.'),
          B('اکوی ازطریق مری می‌تواند ___ را به عنوان یک فرایند حاد نشان دهد.', ['اندوکاردیت', 'اسکلرودرمی', 'سندرم روده تحریک‌پذیر'], 'اندوکاردیت و وژتاسیون جزو یافته‌های حادند.'),
          T('سندرم روده تحریک‌پذیر یک یافته «حاد» است.', false, 'سندرم روده تحریک‌پذیر، انتریت پرتویی و تنگی در ستون مزمن‌اند.')
        ]
      },
      {
        id: 'inf8', title: 'مستندسازی و کدگذاری', icon: '📝', items: [
          L('سازمان‌دهی بیمارستان', 'برای کدگذاری موفق سوءتغذیه:<br>• یک <b>خط‌مشی مصوب کادر پزشکی</b> برای روش شناسایی سوءتغذیه داشته باش<br>• پزشکان، کدگذاران و متخصصان مستندسازی را آموزش بده<br>• کدهای ICD-10: <b>E43</b> سوءتغذیه پروتئین-کالری شدید نامشخص؛ <b>E44.0</b> سوءتغذیه پروتئین-کالری متوسط<br>• با واحد فناوری اطلاعات زبان ثابت و مشخصی در پرونده بساز'),
          P('هر مورد را به معنا یا مسئولش وصل کن', [['E43', 'سوءتغذیه پروتئین-کالری شدید'], ['E44.0', 'سوءتغذیه پروتئین-کالری متوسط'], ['پیشنهاد درجه سوءتغذیه', 'کارشناس تغذیه'], ['تشخیص نهایی', 'پزشک یا ارائه‌دهنده مستقل دارای مجوز']]),
          L('پرونده باید چه چیزهایی را نشان دهد؟', '• وجود و <b>شدت</b> سوءتغذیه بر پایه یک <b>چارچوب اتیولوژیک</b> مشخص<br>• <b>شواهد</b> هر ویژگی<br>• <b>برنامه درمان</b> سوءتغذیه<br>• روش <b>پایش و ارزشیابی</b> برنامه<br><br>کارشناس تغذیه درجه سوءتغذیه را <b>پیشنهاد</b> می‌دهد؛ اگر پزشک موافق بود، در یادداشت پزشک ثبت می‌شود.'),
          L('بایدها', '✅ مطمئن شو ویژگی‌ها با <b>اتیولوژی انتخاب‌شده</b> جورند<br>✅ مطمئن شو <b>حداقل آستانه</b> شدت در همان اتیولوژی رسیده است<br>✅ نتایج NFPE را <b>واضح و مشخص</b> بنویس<br>✅ علت‌های <b>غیرتغذیه‌ای</b> از دست رفتن عضله و چربی را رد کن<br>✅ تا جای ممکن <b>نواحی بیشتری</b> از عضله و چربی را بررسی کن (حداقل تعداد ندارد)<br>✅ داده ذهنی را با شواهد <b>عینی</b> تأیید کن<br>✅ دقیق و کامل ولی <b>خلاصه</b> بنویس؛ نوشتن «نمی‌توان تعیین کرد» و ارزیابی مجدد بعدی اشکالی ندارد'),
          L('نبایدها', '❌ <b>تناقض</b> در یک یادداشت بدون توضیح<br>❌ پیشنهاد تشخیص سوءتغذیه وقتی <b>اطلاعات کافی</b> نداری<br>❌ نتایج مبهم یا گیج‌کننده<br>❌ <b>فرض</b> کردن درباره مشاهدات NFPE<br>❌ «<b>تشخیص دادن</b>» سوءتغذیه؛ این باید <b>پیشنهادی</b> به پزشک یا ارائه‌دهنده مستقل دارای مجوز باشد<br>❌ مستندات طولانی، تکراری یا ناقص<br>❌ «نمی‌توان تعیین کرد» <b>بدون برنامه ارزیابی مجدد</b>'),
          M('کدام جمله در یادداشت کارشناس تغذیه درست‌تر است؟', ['سوءتغذیه پروتئین-کالری شدید در زمینه بیماری حاد پیشنهاد می‌شود، بر پایه دریافت ≤۵۰٪ برای ۷ روز و تحلیل متوسط گیجگاه و ترقوه.', 'بیمار سوءتغذیه شدید دارد.', 'به نظر می‌رسد بیمار کمی لاغر شده است.', 'بیمار بر اساس آلبومین ۲٫۵ دچار سوءتغذیه است.'], 'پیشنهاد (نه تشخیص)، با اتیولوژی، شدت و شواهد هر ویژگی.'),
          T('کارشناس تغذیه می‌تواند در پرونده بنویسد «سوءتغذیه را تشخیص دادم».', false, 'کارشناس تغذیه پیشنهاد می‌دهد؛ تشخیص با پزشک یا ارائه‌دهنده مستقل دارای مجوز است.'),
          T('ثبت «نمی‌توان سوءتغذیه را تعیین کرد» همراه با برنامه ارزیابی مجدد قابل قبول است.', true, 'درست؛ ولی بدون برنامه ارزیابی مجدد جزو نبایدهاست.'),
          M('برای تعیین سوءتغذیه، حداقل چند ناحیه عضله و چربی باید معاینه شود؟', ['حداقل مشخصی ندارد؛ تا جای ممکن بیشتر، با قضاوت بالینی', 'دقیقاً سه ناحیه', 'همه ۱۲ ناحیه', 'فقط یک ناحیه کافی است'], 'حداقل لازم وجود ندارد؛ تصمیم بالینی بر پایه هر بیمار است.')
        ]
      },
      {
        id: 'inf9', title: 'یادداشت پرونده الکترونیک', icon: '💻', items: [
          L('الگوی پرونده: بخش تشخیص', 'یک الگوی خوب پرونده الکترونیک این بخش‌ها را دارد:<br>• <b>تشخیص پیشنهادی</b> (یکی): بدون سوءتغذیه، متوسط، شدید، نمی‌توان تعیین کرد<br>• <b>در زمینه</b> (یکی): حاد، مزمن، اجتماعی یا محیطی<br>• <b>بر پایه</b> (همه موارد): دریافت ناکافی، کاهش وزن، افت عملکرد، از دست رفتن عضله، از دست رفتن چربی، تجمع مایع'),
          O('بخش‌های اصلی الگوی پرونده را مرتب کن', ['تشخیص پیشنهادی', 'در زمینه', 'بر پایه', 'تاریخچه دریافت و تن‌سنجی', 'معاینه فیزیکی و ظرفیت عملکردی', 'نشانگرهای التهاب', 'مداخله و پایش'], 'از نتیجه به شواهد، سپس برنامه درمان و پایش.'),
          L('الگوی پرونده: معاینه و التهاب', '• <b>از دست رفتن عضله</b> و <b>چربی</b>: ندارد، خفیف، متوسط، شدید، نمی‌توان تعیین کرد<br>• <b>تجمع مایع</b>: ندارد، خفیف (۱+)، متوسط (۲+)، شدید (۳+ تا ۴+)؛ محل: اندام فوقانی، تحتانی، عمومی، آسیت<br>• <b>ظرفیت عملکردی</b>: طبیعی، پس‌رفت‌کرده، قدرت چنگش کاهش‌یافته، بی‌ارتباط با تغذیه<br>• <b>نشانگرهای التهاب</b>: هیپوآلبومینمی، CRP بالا، فاز حاد پس از جراحی، سپسیس، تاکی‌کاردی، تب، پره‌آلبومین پایین، هیپرگلیسمی'),
          P('هر درجه ادم را به شدت تجمع مایع در الگوی پرونده وصل کن', [['۱+', 'خفیف'], ['۲+', 'متوسط'], ['۳+ تا ۴+', 'شدید']]),
          M('کدام مورد در بخش «نشانگرهای التهاب» الگوی پرونده آمده است؟', ['پره‌آلبومین پایین', 'کاهش وزن', 'قدرت چنگش کم', 'تحلیل گیجگاه'], 'آلبومین و پره‌آلبومین در بخش التهاب ثبت می‌شوند، نه در ویژگی‌های سوءتغذیه.'),
          N('i.dx'),
          T('در الگوی پرونده، «ظرفیت عملکردی» گزینه «بی‌ارتباط با وضعیت تغذیه» هم دارد.', true, 'درست؛ مثلاً ضعف ناشی از سکته یا شکستگی.'),
          N('i.dx'),
          B('مستندات کارشناس تغذیه باید یک مداخله همراه با برنامه ___ و ارزشیابی داشته باشد.', ['پایش', 'ترخیص', 'جراحی'], 'مداخله باید برنامه پایش و ارزشیابی مشخص داشته باشد.')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — دنیای ۳: معاینه عضله و چربی زیرپوستی (فصل ۴ کتاب)
 * تصویرهای سه‌گانه (طبیعی، خفیف تا متوسط، شدید) از شکل‌های ۴-۲ کتاب‌اند. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic, pic3 } = EA.K;
  const G3 = ['طبیعی', 'خفیف تا متوسط', 'شدید'];

  EA.worlds.push({
    id: 'mf', sym: 'M/F', name: 'عضله و چربی', sub: 'معاینه سر تا پای ذخیره عضله و چربی زیرپوستی', color: '#E5476B', dark: '#C22B50', light: '#FFE3EA',
    levels: ['نقشه‌خوانان بدن', 'لمس‌شناسان', 'استادان تحلیل'],
    gens: ['m.img', 'm.map', 'm.region'],
    lessons: [
      {
        id: 'mf1', title: 'چرا عضله و چربی؟', icon: '💪', items: [
          L('هدف اصلی NFPE', 'یکی از دلایل اصلی NFPE، بررسی <b>وجود و تغییر</b> اندازه و تون عضله و توده چربی است؛ دو ویژگی از شش ویژگی سوءتغذیه.<br><br><b>تحلیل عضله</b> (آتروفی) یعنی از دست رفتن <b>حجم و تون</b> که با لمس قابل تشخیص است.<br><br>داده‌های عضله و چربی در <b>بیشتر بیماران بستری، حتی بیماران بدحال</b>، به‌راحتی از معاینه به دست می‌آیند.'),
          M('تحلیل عضله در NFPE چگونه تعریف می‌شود؟', ['از دست رفتن حجم و تون عضله که با لمس قابل تشخیص است', 'کاهش آلبومین', 'کاهش وزن بیش از ۵٪', 'ضعف یک‌طرفه اندام'], 'تحلیل عضله یعنی کاهش حجم (bulk) و تون (tone) که با لمس پیدا می‌شود.'),
          L('عضله و چربی در هر زمینه', tbl([['زمینه', 'متوسط', 'شدید'], ['بیماری یا آسیب حاد', 'از دست رفتن خفیف', 'از دست رفتن متوسط'], ['بیماری مزمن', 'خفیف', 'شدید'], ['اجتماعی یا محیطی', 'خفیف', 'شدید']]) + '<small>در زمینه حاد، چون التهاب شدید کاتابولیسم را سرعت می‌دهد، تحلیل «متوسط» هم کافی است تا از سوءتغذیه شدید پشتیبانی کند.</small>'),
          M('در بیماری حاد، از دست رفتن «متوسط» عضله از کدام تشخیص پشتیبانی می‌کند؟', ['سوءتغذیه شدید', 'سوءتغذیه متوسط', 'هیچ‌کدام', 'فقط اگر کاهش وزن هم باشد'], 'در زمینه حاد: تحلیل متوسط ← سوءتغذیه شدید.'),
          N('m.map'),
          L('ذهنی، ولی قابل آموزش', 'معاینه عضله و چربی <b>ذهنی</b> است. این ذهنی بودن با آموزش کنار بالینگران باتجربه و <b>تمرین تکراری</b> کم می‌شود.<br><br>یافته‌ها در سه دسته ثبت می‌شوند: <b>طبیعی</b>، <b>خفیف تا متوسط</b>، و <b>شدید</b>.<br><br>لحظه ارزیابی و وضعیت بالینی بیمار هم بر تصمیم درباره اتیولوژی و شدت اثر دارند.'),
          T('در بیماری مزمن، از دست رفتن «خفیف» چربی زیرپوستی از سوءتغذیه شدید پشتیبانی می‌کند.', false, 'مزمن: خفیف ← متوسط؛ برای شدید باید از دست رفتن «شدید» باشد.'),
          T('در زمینه حاد، تحلیل «متوسط» برای پشتیبانی از سوءتغذیه شدید کافی است؛ در زمینه مزمن و اجتماعی تحلیل باید «شدید» باشد.', true, 'درست؛ التهاب شدید حاد تحلیل را سریع‌تر و خطرناک‌تر می‌کند.'),
          N('m.map')
        ]
      },
      {
        id: 'mf2', title: 'چاقی، ICU و سارکوپنی', icon: '🏥', items: [
          L('بیمار چاق', 'در بیمار <b>چاق</b>، بافت چربی زیاد دیدن و لمس عضله زیرین را محدود می‌کند؛ پس از دست رفتن عضله و چربی ممکن است <b>به‌وضوح دیده نشود</b>.<br><br>بیمار چاق هم می‌تواند سوءتغذیه و تحلیل عضله داشته باشد؛ برای همین تاریخچه، دریافت و عملکرد در او اهمیت بیشتری دارند.'),
          T('بیمار چاق نمی‌تواند تحلیل عضله داشته باشد.', false, 'چاقی تحلیل عضله را پنهان می‌کند ولی آن را رد نمی‌کند؛ سارکوپنی چاقی هم وجود دارد.'),
          L('بیمار ICU', 'در ICU معاینه کامل ممکن است سخت باشد: مشارکت کم بیمار، ناپایداری همودینامیک، <b>ادم</b>، خط‌های وریدی، درن‌ها و وسایل پزشکی.<br><br>از دست رفتن عضله و چربی ممکن است <b>در هفته اول بستری در ICU</b> دیده شود. پس بیمار را <b>زود</b> و سپس <b>به‌طور سریالی</b> معاینه کن؛ با برداشته شدن وسایل یا بیشتر شدن تحرک، نواحی تازه‌ای قابل معاینه می‌شوند.'),
          M('چرا بیمار ICU باید به‌طور سریالی معاینه شود؟', ['تغییرات سریع‌اند و نواحی قابل معاینه با وسایل و ادم عوض می‌شوند', 'چون یک معاینه هیچ‌وقت کافی نیست', 'برای افزایش هزینه', 'چون آلبومین هر روز تغییر می‌کند'], 'از دست رفتن عضله می‌تواند در هفته اول آشکار شود و وسایل و ادم نواحی را پنهان یا آشکار می‌کنند.'),
          L('سارکوپنی', 'سارکوپنی یعنی <b>از دست رفتن پیشرونده و فراگیر توده، قدرت و عملکرد عضله اسکلتی</b> با خطر پیامدهای نامطلوب؛ یک وضعیت التهابی مرتبط با استرس اکسیداتیو.<br>• <b>اولیه</b>: مرتبط با سالمندی<br>• <b>ثانویه</b>: ناشی از بیماری، تغذیه یا بی‌تحرکی<br><br>وقتی توده عضله را نمی‌توان سنجید، <b>قدرت عضله</b> شواهد پشتیبان می‌دهد. برای سارکوپنی چاقی معیار ویژه‌ای نیست؛ سارکوپنی و چاقی جداگانه ارزیابی می‌شوند.'),
          P('هر اصطلاح را به تعریفش وصل کن', [['سارکوپنی اولیه', 'مرتبط با سالمندی'], ['سارکوپنی ثانویه', 'ناشی از بیماری، تغذیه یا بی‌تحرکی'], ['سارکوپنی چاقی', 'سارکوپنی و چاقی جداگانه ارزیابی می‌شوند']]),
          L('ابزارهای ترکیب بدن', 'DXA، BIA، سی‌تی، MRI، سونوگرافی و پلتیسموگرافی جابه‌جایی هوا، توده بدون چربی را عینی‌تر می‌سنجند و پیگیری در طول زمان را ممکن می‌کنند؛ ولی <b>گران</b> و همیشه در دسترس نیستند.<br><br>برای عملکرد، علاوه بر قدرت چنگش، <b>سرعت راه رفتن</b> و <b>آزمون برخاستن از صندلی</b> هم پیشنهاد شده‌اند.'),
          M('کدام آزمون برای سنجش عملکرد عضله در کنار قدرت چنگش پیشنهاد شده است؟', ['سرعت راه رفتن و برخاستن از صندلی', 'اندازه‌گیری آلبومین', 'دور کمر', 'آزمون تحمل گلوکز'], 'سرعت راه رفتن (gait speed) و برخاستن از صندلی (chair stand).'),
          B('وقتی توده عضله قابل سنجش نیست، ___ عضله شواهد پشتیبان می‌دهد.', ['قدرت', 'رنگ', 'دمای'], 'کاهش چشمگیر توده معمولاً با کاهش عملکرد همراه است.')
        ]
      },
      {
        id: 'mf3', title: 'نقشه سر تا پا', icon: '🗺️', items: [
          L('کجا را معاینه کنیم؟', 'کلید ارزیابی ترکیب بدن، آشنایی با <b>نواحی‌ای</b> است که عضله و چربی در آن‌ها راحت در دسترس‌اند. رویکرد <b>سر تا پا</b> معاینه را نظام‌مند می‌کند.' + pic('muscles', null, 'گروه‌های عضلانی برای ارزیابی سر تا پا')),
          L('چرا بالاتنه؟', '<b>بالاتنه</b> بیشتر برای شناسایی از دست رفتن عضله و چربی به کار می‌رود، چون:<br>• کمتر درگیر <b>ادم</b> می‌شود<br>• برای بالینگر <b>در دسترس‌تر</b> است<br>• بازتاب خوبی از <b>کل توده عضله</b> است<br><br>معاینه <b>دوطرفه</b> برای جدا کردن تحلیل تغذیه‌ای از تحلیل ناشی از بیماری یا بی‌تحرکی مهم است.'),
          M('چرا معاینه بالاتنه برای تحلیل عضله ارجح است؟', ['کمتر درگیر ادم است و بازتاب خوبی از کل توده عضله است', 'چون پاها هیچ‌وقت عضله از دست نمی‌دهند', 'چون معاینه پا ممنوع است', 'چون فقط چربی در بالاتنه است'], 'سه دلیل: ادم کمتر، دسترسی بهتر، بازتاب توده کلی.'),
          L('نواحی عضله و چربی', tbl([['ناحیه', 'بافت'], ['گیجگاه', 'عضله تمپورالیس'], ['زیر چشم', 'پد چربی اربیتال'], ['ترقوه و آکرومیون', 'پکتورالیس، دلتوئید، تراپزیوس'], ['کتف', 'تراپزیوس، سوپرا و اینفرااسپیناتوس'], ['خط میدآگزیلاری', 'چربی روی دنده‌ها و ستیغ ایلیاک'], ['بازو', 'چربی زیر سه‌سر'], ['دست', 'عضلات بین‌استخوانی و شست'], ['ران و ساق', 'چهارسر و گاستروکنمیوس']])),
          P('هر ناحیه را به عضله‌ای که بررسی می‌شود وصل کن', [['گیجگاه', 'تمپورالیس'], ['آکرومیون', 'دلتوئید'], ['ساق پا', 'گاستروکنمیوس'], ['ران', 'چهارسر']]),
          N('m.region'),
          T('پد چربی اربیتال و چربی زیر سه‌سر، نواحی ارزیابی «چربی» هستند.', true, 'درست؛ همراه با خط میدآگزیلاری. بقیه نواحی بیشتر برای عضله‌اند.'),
          M('کدام ناحیه برای ارزیابی «چربی» به کار می‌رود؟', ['خط میدآگزیلاری روی دنده‌ها', 'گیجگاه', 'ساق پا', 'بین شست و اشاره'], 'دنده‌ها در خط میدآگزیلاری، زیر سه‌سر و زیر چشم: نواحی چربی.'),
          N('m.region')
        ]
      },
      {
        id: 'mf4', title: 'سر و صورت', icon: '🙂', items: [
          L('پد چربی اربیتال و تمپورالیس', '<b>وضعیت</b>: روبه‌روی بیمار بایست؛ زیر چشم را بالای استخوان گونه <b>آرام لمس</b> کن. گیجگاه را از <b>روبه‌رو و نیم‌رخ</b> ببین و عضله تمپورالیس را از نظر <b>پری و سفتی</b> لمس کن.' + pic(['tip-face1', 'tip-face2'], ['زیر چشم: لمس آرام بالای گونه', 'گیجگاه: لمس تمپورالیس'])),
          L('سه درجه', pic3('face') + tbl([['', 'زیر چشم (چربی)', 'گیجگاه (عضله)'], ['طبیعی', 'پد چربی کمی برآمده', 'عضله مشخص، صاف یا کمی برآمده'], ['خفیف تا متوسط', 'حلقه‌های کمی تیره، کمی گود', 'فرورفتگی خفیف'], ['شدید', 'گود، فرورفتگی دور چشم، حلقه تیره، پوست شل', 'گودی عمیق، عضله لمس نمی‌شود، استخوان‌های صورت کاملاً مشخص']])),
          M('در این تصویر وضعیت گیجگاه و زیر چشم چیست؟', G3.slice().reverse(), 'گودی عمیق گیجگاه، فرورفتگی دور چشم و استخوان‌های مشخص صورت ← شدید.', null, { k: 'face-s' }),
          M('در این تصویر وضعیت گیجگاه و زیر چشم چیست؟', ['خفیف تا متوسط', 'طبیعی', 'شدید'], 'حلقه‌های کمی تیره زیر چشم و فرورفتگی خفیف گیجگاه.', null, { k: 'face-m' }),
          T('در وضعیت طبیعی، پد چربی زیر چشم کمی برآمده است.', true, 'درست؛ گودی و حلقه تیره نشانه از دست رفتن چربی است.'),
          B('گیجگاه را از روبه‌رو و ___ نگاه کن.', ['نیم‌رخ', 'پشت سر', 'بالا'], 'نمای نیم‌رخ فرورفتگی تمپورالیس را بهتر نشان می‌دهد.'),
          N('m.img'),
          M('کدام جمله درباره معاینه زیر چشم درست است؟', ['آرام و بالای استخوان گونه لمس می‌شود', 'با فشار محکم روی کره چشم', 'فقط با چراغ‌قوه دیده می‌شود', 'لازم نیست لمس شود'], 'لمس سبک بالای cheekbone؛ هرگز روی کره چشم فشار نده.'),
          T('حلقه تیره زیر چشم در همه افراد نشانه سوءتغذیه است.', false, 'حلقه تیره علت‌های دیگری (بی‌خوابی، ژنتیک) هم دارد؛ باید با بقیه نواحی و تاریخچه جور باشد.')
        ]
      },
      {
        id: 'mf5', title: 'ترقوه و شانه', icon: '🦴', items: [
          L('قفسه سینه بالا', '<b>وضعیت</b>: بیمار <b>صاف و بدون خمیدگی</b> بنشیند. عضله پکتورالیس را زیر و کنار ترقوه از نظر پری و سفتی لمس کن و برجستگی ترقوه را ببین. دلتوئید را لمس کن و <b>مربعی شدن شانه</b> را بررسی کن.' + pic(['tip-chest1', 'tip-chest2', 'tip-chest3'])),
          L('سه درجه', pic3('chest') + tbl([['', 'ناحیه ترقوه', 'ناحیه آکرومیون (دلتوئید)'], ['طبیعی', 'عضله مشخص دور استخوان؛ ترقوه در مردان دیده نمی‌شود و در زنان ممکن است کمی برجسته باشد', 'انحنای گرد بازو، شانه و گردن'], ['خفیف تا متوسط', 'ترقوه برجسته‌تر، عضله کمتر در لمس', 'زائده آکرومیون ممکن است کمی بیرون بزند'], ['شدید', 'استخوان بیرون‌زده با عضله کم دور آن', 'شانه مربعی، استخوان‌ها برجسته، آکرومیون بسیار برجسته']])),
          M('در این تصویر عضله ناحیه ترقوه و شانه چگونه است؟', ['شدید', 'طبیعی', 'خفیف تا متوسط'], 'ترقوه بیرون‌زده و شانه مربعی با آکرومیون بسیار برجسته.', null, { k: 'chest-s' }),
          T('در زنان سالم، ترقوه ممکن است کمی برجسته باشد.', true, 'درست؛ این تفاوت جنسی در وضعیت طبیعی دیده می‌شود.'),
          M('«مربعی شدن شانه» نشانه از دست رفتن کدام عضله است؟', ['دلتوئید', 'گاستروکنمیوس', 'تمپورالیس', 'چهارسر'], 'دلتوئید انحنای گرد شانه را می‌سازد؛ با تحلیل آن، مفصل شانه گوشه‌دار می‌شود.'),
          M('در این تصویر عضله ناحیه ترقوه و شانه چگونه است؟', ['طبیعی', 'خفیف تا متوسط', 'شدید'], 'عضله مشخص دور ترقوه و انحنای گرد شانه.', null, { k: 'chest-n' }),
          N('m.img'),
          B('برای معاینه ترقوه، بیمار باید صاف و بدون ___ بنشیند.', ['خمیدگی', 'لباس', 'عینک'], 'خمیدگی ترقوه را برجسته‌تر و قضاوت را نادرست می‌کند.'),
          P('هر یافته را به درجه‌اش وصل کن', [['انحنای گرد شانه', 'طبیعی'], ['آکرومیون کمی بیرون‌زده', 'خفیف تا متوسط'], ['شانه مربعی', 'شدید']])
        ]
      },
      {
        id: 'mf6', title: 'پشت و خط میدآگزیلاری', icon: '🔙', items: [
          L('ناحیه کتف (عضله)', '<b>وضعیت</b>: از بیمار بخواه دست‌هایش را جلو ببرد و <b>به یک جسم محکم فشار دهد</b> (دست بالینگر هم می‌تواند تکیه‌گاه باشد). تراپزیوس، سوپرا و اینفرااسپیناتوس را لمس کن و برجستگی کتف، ستون مهره و دنده‌ها را ببین. اگر نمی‌تواند بنشیند یا بایستد، به پهلو بچرخد و دست‌ها را تا جای ممکن جلو ببرد.' + pic(['tip-back1', 'tip-back2'])),
          L('کتف: سه درجه', pic3('back') + tbl([['درجه', 'یافته'], ['طبیعی', 'استخوان‌ها برجسته نیستند؛ فرورفتگی قابل توجه ندارد'], ['خفیف تا متوسط', 'فرورفتگی خفیف دور کتف یا استخوان کمی پیداست'], ['شدید', 'کتف برجسته و دیدنی؛ فرورفتگی آشکار بین دنده‌ها، کتف، شانه یا ستون مهره']])),
          M('در این تصویر عضلات ناحیه کتف چگونه‌اند؟', ['شدید', 'خفیف تا متوسط', 'طبیعی'], 'کتف برجسته و فرورفتگی آشکار بین دنده‌ها و ستون مهره.', null, { k: 'back-s' }),
          L('خط میدآگزیلاری (چربی)', '<b>وضعیت</b>: بیمار دست‌ها را جلو یا به طرفین ببرد و به جسم محکمی فشار دهد. دنده‌ها را در امتداد خط میدآگزیلاری لمس کن و برجستگی دنده‌ها و ستیغ ایلیاک را ببین. اگر نمی‌تواند بایستد، به پشت بخوابد (به‌خاطر وضعیت، ارزیابی ممکن است دقیق نباشد).' + pic(['tip-mid1', 'tip-mid2'])),
          L('میدآگزیلاری: سه درجه', pic3('mid') + tbl([['درجه', 'یافته'], ['طبیعی', 'قفسه سینه پر، دنده‌ها پیدا نیستند، ستیغ ایلیاک برجسته نیست'], ['خفیف تا متوسط', 'دنده‌ها کمی پیداتر، فرورفتگی‌ها خیلی آشکار نیستند، ستیغ ایلیاک کمی برجسته'], ['شدید', 'فرورفتگی بین دنده‌ها بسیار آشکار، ستیغ ایلیاک بسیار برجسته']])),
          M('در این تصویر ذخیره چربی خط میدآگزیلاری چگونه است؟', ['شدید', 'طبیعی', 'خفیف تا متوسط'], 'دنده‌ها با فرورفتگی آشکار بین آن‌ها و ستیغ ایلیاک بسیار برجسته.', null, { k: 'mid-s' }),
          T('خط میدآگزیلاری ناحیه ارزیابی «عضله» است.', false, 'خط میدآگزیلاری ناحیه ارزیابی «چربی» است.'),
          N('m.img'),
          B('برای معاینه پشت، بیمار دست‌ها را جلو می‌برد و به جسم ___ فشار می‌دهد.', ['محکم', 'نرم', 'گرم'], 'فشار دادن عضلات را منقبض و برجستگی استخوان‌ها را واضح‌تر می‌کند.')
        ]
      },
      {
        id: 'mf7', title: 'بازو: چربی سه‌سر', icon: '🤏', items: [
          L('معاینه چربی زیر سه‌سر', '<b>وضعیت</b>: آرنج را <b>۹۰ درجه</b> خم کن (بازو عمود بر بدن؛ اگر بیمار همکاری نمی‌کند ساعد را افقی روی بدن بگذار). وسط بازو، بین شانه و آرنج، را با کف دست و انگشتان بگیر و پوست را آرام از بازو دور کن و هم‌زمان <b>کمی تکان بده</b> تا چربی از عضله جدا شود. سپس به مقدار چربی بین انگشتانت توجه کن.' + pic('tip-arm')),
          L('سه درجه', pic3('arm') + tbl([['درجه', 'یافته'], ['طبیعی', 'بافت چربی فراوان بین چین‌های پوست'], ['خفیف تا متوسط', 'چین کمی عمق دارد ولی فراوان نیست'], ['شدید', 'فاصله بسیار کم بین چین‌ها؛ انگشتان تقریباً به هم می‌رسند']])),
          M('هنگام گرفتن چین پوست سه‌سر، انگشتانت تقریباً به هم می‌رسند. یافته؟', ['از دست رفتن شدید چربی', 'طبیعی', 'خفیف تا متوسط', 'ادم'], 'انگشتان تقریباً به هم می‌رسند ← شدید.'),
          M('در این تصویر ذخیره چربی بازو چگونه است؟', ['خفیف تا متوسط', 'طبیعی', 'شدید'], 'لایه چربی زیر سه‌سر هست ولی نازک‌تر از حالت طبیعی.', null, { k: 'arm-m' }),
          O('مراحل معاینه چربی سه‌سر را مرتب کن', ['خم کردن آرنج به ۹۰ درجه', 'گرفتن وسط بازو بین شانه و آرنج', 'دور کردن پوست از بازو با تکان ملایم', 'سنجیدن مقدار چربی بین انگشتان'], 'ترتیب فهرست بررسی NFPE.'),
          T('برای جدا کردن چربی از عضله سه‌سر، پوست را آرام می‌کشی و کمی تکان می‌دهی.', true, 'درست؛ wiggling چربی را از عضله زیرین جدا می‌کند.'),
          N('m.img'),
          B('در معاینه سه‌سر، آرنج ___ درجه خم می‌شود.', ['۹۰', '۴۵', '۱۸۰'], 'زاویه ۹۰ درجه پوست و چربی را برای گرفتن آماده می‌کند.'),
          M('اگر بیمار نمی‌تواند همکاری کند، معاینه سه‌سر چطور انجام می‌شود؟', ['آرنج را ۹۰ درجه خم کن و ساعد را افقی روی بدن بگذار', 'معاینه را کنار بگذار', 'از کالیپر صنعتی استفاده کن', 'فقط بازوی مقابل را ببین'], 'در بیمار ناتوان، ساعد افقی روی بدن قرار می‌گیرد.')
        ]
      },
      {
        id: 'mf8', title: 'دست‌ها', icon: '👌', items: [
          L('علامت OK', '<b>وضعیت</b>: از بیمار بخواه با شست و انگشت اشاره علامت <b>«OK»</b> بسازد. بالشتک عضلانی محل تلاقی شست و اشاره را ببین و لمس کن، و عضلات بین‌استخوانی بین بقیه انگشتان را هم بررسی کن. هر دو سطح <b>کف</b> و <b>پشت</b> دست را ببین و لمس کن.' + pic(['tip-hand1', 'tip-hand2', 'tip-hand3'])),
          L('کف دست', pic3('palm') + tbl([['درجه', 'اپوننس، ادداکتور و ابداکتور پولیسیس و اولین بین‌استخوانی پشتی'], ['طبیعی', 'عضله برآمده؛ در بعضی افراد خوش‌تغذیه ممکن است صاف باشد'], ['خفیف تا متوسط', 'فرورفتگی خفیف'], ['شدید', 'نواحی فرورفته، به‌خصوص بین شست و اشاره']])),
          L('پشت دست', pic3('dors') + tbl([['درجه', 'بین‌استخوانی‌های پشتی و ادداکتورها'], ['طبیعی', 'برآمدگی خفیف یا صاف بین استخوان‌ها؛ عضله بین اشاره و شست برآمده یا صاف'], ['خفیف تا متوسط', 'فرورفتگی خفیف بین استخوان‌های پشت دست'], ['شدید', 'فرورفتگی بین استخوان‌ها، به‌خصوص بین شست و اشاره؛ استخوان‌ها برجسته']])),
          M('در این تصویر عضلات دست چگونه‌اند؟', ['شدید', 'طبیعی', 'خفیف تا متوسط'], 'فرورفتگی‌های آشکار بین استخوان‌ها و بین شست و اشاره، با استخوان‌های برجسته.', null, { k: 'dors-s' }),
          T('در بعضی افراد خوش‌تغذیه، عضله بین شست و اشاره ممکن است صاف باشد.', true, 'درست؛ پس صاف بودن به‌تنهایی شدید نیست؛ دنبال فرورفتگی باش.'),
          M('در این تصویر عضلات کف دست چگونه‌اند؟', ['طبیعی', 'خفیف تا متوسط', 'شدید'], 'بالشتک عضلانی شست برآمده است.', null, { k: 'palm-n' }),
          N('m.img'),
          T('علامت «OK» در ویزیت از راه دور (تله‌هلث) هم برای دیدن عضلات دست به کار می‌رود.', true, 'درست؛ برای بیمارانی که معاینه را نمی‌پذیرند و ویزیت از راه دور هم به کار می‌رود.'),
          P('هر عضله را به ناحیه‌اش وصل کن', [['ادداکتور پولیسیس', 'بین شست و اشاره'], ['بین‌استخوانی‌های پشتی', 'بین استخوان‌های پشت دست'], ['تمپورالیس', 'گیجگاه']])
        ]
      },
      {
        id: 'mf9', title: 'ران، کشکک و ساق', icon: '🦵', items: [
          L('اندام تحتانی', '<b>وضعیت</b>: بیمار بنشیند و پا را خم یا روی چیزی بالا بگذارد؛ چهارسر و گاستروکنمیوس را با کف دست و انگشتان <b>بگیر</b> تا عضله را از چربی جدا کنی. اگر نمی‌تواند بنشیند، در حالت خوابیده زانو را خم کند تا ساق و چهارسر از تخت جدا شوند.' + pic(['tip-leg1', 'tip-leg2', 'tip-leg4'])),
          L('سه درجه', pic3('leg') + tbl([['', 'ران (چهارسر)', 'کشکک', 'ساق (گاستروکنمیوس)'], ['طبیعی', 'گرد و خوب رشدکرده', 'عضله برآمده، کشکک برجسته نیست', 'بالشتک عضلانی خوب'], ['خفیف تا متوسط', 'فرورفتگی خفیف داخل ران', 'کشکک برجسته‌تر', 'خوب رشد نکرده'], ['شدید', 'فرورفتگی یا خط روی ران', 'کشکک برجسته، عضله کمی دور زانو', 'نازک، تعریف عضلانی کم یا هیچ']])),
          M('در این تصویر عضلات ران و ساق چگونه‌اند؟', ['شدید', 'خفیف تا متوسط', 'طبیعی'], 'ران با خط و فرورفتگی، کشکک بسیار برجسته و ساق نازک.', null, { k: 'leg-s' }),
          M('در این تصویر (نمای خوابیده) عضلات ران و ساق چگونه‌اند؟', ['طبیعی', 'شدید', 'خفیف تا متوسط'], 'ران گرد و ساق با بالشتک عضلانی خوب.', null, { k: 'thigh-n' }),
          T('کشکک برجسته با عضله کم در اطراف زانو نشانه از دست رفتن شدید چهارسر است.', true, 'درست؛ این یافته درجه شدید است.'),
          L('دام اندام تحتانی', '• پاها <b>بیشتر درگیر ادم</b>اند؛ ادم ممکن است تحلیل را پنهان کند.<br>• <b>بی‌تحرکی</b>، سکته یا شکستگی هم پا را لاغر می‌کنند؛ مقایسه دوطرفه و تاریخچه را فراموش نکن.<br>• در فهرست بررسی NFPE: زانو را در صورت امکان ۹۰ درجه خم کن و ساق را برای پری، سفتی و گردی بگیر.'),
          M('ساق پای چپ بیمار پس از گچ‌گرفتگی ۶ هفته‌ای لاغرتر از راست است. برداشت؟', ['تحلیل ناشی از بی‌حرکتی؛ علت تغذیه‌ای ندارد', 'سوءتغذیه شدید', 'سوءتغذیه متوسط', 'ادم یک‌طرفه'], 'تحلیل یک‌طرفه پس از بی‌حرکتی اندام معمولاً تغذیه‌ای نیست.'),
          N('m.img'),
          B('در بیمار خوابیده، زانو خم می‌شود تا ساق و چهارسر از ___ جدا شوند.', ['تخت', 'زمین', 'لباس'], 'بلند شدن عضلات از سطح تخت لمس را دقیق‌تر می‌کند.')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — دنیای ۴: ارزیابی وضعیت مایعات؛ تجمع مایع و دهیدراتاسیون (فصل ۵ کتاب) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic } = EA.K;

  EA.worlds.push({
    id: 'fl', sym: 'H₂O', name: 'وضعیت مایعات', sub: 'ادم، درجه‌بندی گوده و دهیدراتاسیون', color: '#18A6D9', dark: '#1185B2', light: '#DDF3FC',
    levels: ['ردیابان مایع', 'درجه‌بندان ادم', 'نگهبانان آب'],
    gens: ['f.img', 'f.grade', 'f.map', 'f.bun', 'f.drug'],
    lessons: [
      {
        id: 'fl1', title: 'چرا مایعات مهم‌اند؟', icon: '💧', items: [
          L('آب، وزن و فریب', 'بدن در حالت عادی هیدراتاسیون را دقیق تنظیم می‌کند و کلیه سالم تعادل آب و نمک را نگه می‌دارد؛ پس تغییر صرف دریافت آب یا نمک نباید ادم بدهد.<br><br>ولی در NFPE مایعات دو نقش فریبنده دارند:<br>• <b>تجمع مایع</b> وزن را بالا نشان می‌دهد و <b>کاهش وزن، عضله و چربی را پنهان</b> می‌کند<br>• <b>دهیدراتاسیون</b> وزن را به‌طور کاذب <b>پایین</b> نشان می‌دهد'),
          M('ادم چه اثری بر ارزیابی سوءتغذیه دارد؟', ['کاهش وزن و از دست رفتن عضله و چربی را پنهان می‌کند', 'وزن را کاذب پایین نشان می‌دهد', 'هیچ اثری ندارد', 'همیشه نشانه سوءتغذیه است'], 'ادم وزن اضافه می‌کند و معاینه عضله و چربی را هم مختل می‌کند.'),
          L('علت‌های تغذیه‌ای ادم', 'کمبود شدید و طولانی <b>پروتئین</b>، پاسخ فیزیولوژیک به <b>سندرم بازتغذیه (ریفیدینگ)</b> و پاسخ‌های التهابی بیماری‌های حاد و مزمن می‌توانند ادم بدهند.<br><br>با این حال، تجمع مایع <b>به‌ندرت</b> تظاهر مستقیم سوءتغذیه است. هیپوآلبومینمی با کاهش فشار انکوتیک ادم می‌دهد، ولی <b>همبستگی قابل اعتمادی با سوءتغذیه ندارد</b>.'),
          T('تجمع مایع معمولاً تظاهر مستقیم سوءتغذیه است.', false, 'به‌ندرت تظاهر مستقیم است؛ ولی چون کاهش وزن را پنهان می‌کند جزو ویژگی‌هاست.'),
          L('تجمع مایع در هر زمینه', tbl([['زمینه', 'متوسط', 'شدید'], ['حاد', 'خفیف', 'متوسط تا شدید'], ['مزمن', 'خفیف', 'شدید'], ['اجتماعی یا محیطی', 'خفیف', 'شدید']])),
          M('در بیماری مزمن، تجمع مایع «شدید» از کدام تشخیص پشتیبانی می‌کند؟', ['سوءتغذیه شدید', 'سوءتغذیه متوسط', 'هیچ‌کدام', 'فقط در زمینه حاد معنا دارد'], 'در زمینه مزمن: تجمع مایع شدید ← سوءتغذیه شدید.'),
          N('f.map'),
          B('دهیدراتاسیون جزو ویژگی‌های تشخیص سوءتغذیه ___، ولی وزن را کاذب پایین نشان می‌دهد.', ['نیست', 'است', 'گاهی است'], 'دهیدراتاسیون و هیپوولمی جزو ویژگی‌ها نیستند ولی تشخیص را منحرف می‌کنند.'),
          T('ادم می‌تواند معاینه دقیق عضله و چربی را مختل کند.', true, 'درست؛ برای همین بالاتنه که کمتر درگیر ادم است ارجح است.')
        ]
      },
      {
        id: 'fl2', title: 'ادم را بشناس', icon: '🎈', items: [
          L('ادم چیست؟', '<b>ادم</b> یعنی تجمع اضافی مایع میان‌بافتی که در لمس احساس می‌شود و ممکن است <b>۱۰ تا ۳۰٪ وزن بدن</b> را تشکیل دهد.<br><br>احتباس مایع سیستمیک ممکن است تا وقتی به <b>دست‌کم ۱۰٪ وزن بدن</b> یا افزایش <b>۲٫۵ تا ۳ لیتر</b> مایع میان‌بافتی نرسیده، از نظر بالینی دیده نشود. ادم عظیم و فراگیر را <b>آنازارکا</b> می‌گویند.'),
          M('احتباس مایع سیستمیک معمولاً تا رسیدن به چه حجمی از نظر بالینی آشکار نمی‌شود؟', ['۲٫۵ تا ۳ لیتر مایع میان‌بافتی', '۲۰۰ میلی‌لیتر', '۱ لیتر', '۱۰ لیتر'], 'یا حدود ۱۰٪ وزن بدن؛ پس احتباس قابل توجه ممکن است بدون ادم آشکار باشد.'),
          L('مایع پنهان', 'مایع اطراف قلب، مایع در ریه، آسیت کم یا هماتوم ممکن است در معاینه دیده نشوند و فقط در <b>تصویربرداری</b> پیدا شوند.<br><br>سرنخ‌های غیرمستقیم:<br>• کفش یا انگشتر تنگ<br>• افزایش سریع وزن<br>• افت سدیم سرم<br>• تنگی نفس<br>• افزایش فشار خون<br>• برجستگی وریدهای گردن'),
          P('هر سرنخ را به معنایش وصل کن', [['انگشتر تنگ شده', 'احتباس مایع در دست'], ['افزایش وزن سریع چندکیلویی', 'تجمع مایع، نه چربی'], ['وریدهای گردن برجسته', 'اضافه‌بار حجم'], ['افت سدیم سرم', 'احتباس آب']]),
          L('توصیف ادم', 'تجمع مایع را با این ویژگی‌ها توصیف کن؛ هر کدام به علت‌یابی کمک می‌کند:<br>• <b>عمومی</b> یا <b>موضعی</b><br>• <b>حاد</b> یا <b>مزمن</b><br>• <b>یک‌طرفه</b> یا <b>دوطرفه</b><br>• <b>گوده‌گذار</b> یا <b>سفت (براونی)</b><br><br>ادم محیطی به نواحی وابسته (پایین) می‌رود و به وضعیت بدن بستگی دارد. مشاهده علائم در معاینه همان‌قدر مهم است که پایش تغییر وزن.'),
          T('ادم محیطی به نواحی وابسته بدن می‌رود و جایش به وضعیت بدن بستگی دارد.', true, 'درست؛ ایستاده در مچ و پا، خوابیده در ران و ساکروم.'),
          M('افزایش ۴ کیلوگرم وزن در ۳ روز در بیمار بستری بیشتر نشانه چیست؟', ['تجمع مایع', 'افزایش توده چربی', 'افزایش توده عضله', 'بهبود وضعیت تغذیه'], 'تغییر سریع وزن تقریباً همیشه مایع است.'),
          B('ادم عظیم، عمومی و تمام‌بدن ___ نام دارد.', ['آنازارکا', 'آسیت', 'لنف‌ادم'], 'آسیت تجمع مایع در شکم است و لنف‌ادم ادم واقعی نیست.'),
          T('نبود ادم آشکار یعنی احتباس مایع قابل توجهی وجود ندارد.', false, 'تا ۲٫۵ تا ۳ لیتر ممکن است دیده نشود؛ مایع پنهان هم فقط در تصویربرداری پیداست.')
        ]
      },
      {
        id: 'fl3', title: 'اصطلاحات ادم', icon: '📖', items: [
          L('اصطلاحات', tbl([['اصطلاح', 'تعریف'], ['آسیت', 'تجمع مایع در شکم با اتساع؛ ماتیته متحرک و موج مایع در دق'], ['آنازارکا', 'ادم عظیم، عمومی و تمام‌بدن'], ['ادم محیطی', 'مایع اضافی میان‌بافتی، گوده‌گذار یا سفت؛ بیشتر در اندام تحتانی و نواحی وابسته (ران، ساکروم در بستری)؛ ممکن است راه رفتن را سخت کند'], ['ادم گوده‌گذار', 'با دست‌کم ۵ ثانیه فشار، فرورفتگی باقی می‌گذارد'], ['ادم سفت (براونی)', 'با فشار فرورفتگی نمی‌گذارد؛ ضخیم شدن، تیرگی، لکه‌های خشک و پوسته‌دار، سفتی و لیپواسکلروز']])),
          P('هر اصطلاح را به تعریفش وصل کن', [['آسیت', 'مایع در شکم با موج مایع'], ['آنازارکا', 'ادم فراگیر تمام‌بدن'], ['ادم گوده‌گذار', 'فرورفتگی پس از ۵ ثانیه فشار'], ['ادم براونی', 'بدون فرورفتگی، پوست ضخیم و تیره']]),
          M('برای دیدن ادم گوده‌گذار، دست‌کم چند ثانیه فشار لازم است؟', ['۵ ثانیه', '۱ ثانیه', '۳۰ ثانیه', '۲ دقیقه'], 'دست‌کم ۵ ثانیه فشار روی ناحیه ادماتو.'),
          T('ادم سفت (براونی) را با مقیاس ۱+ تا ۴+ درجه‌بندی می‌کنیم.', false, 'براونی فرورفتگی نمی‌گذارد؛ استفاده از مقیاس گوده مناسب نیست.'),
          M('پوست ساق ضخیم، تیره و پوسته‌دار است و با فشار فرورفتگی نمی‌گذارد. این کدام است؟', ['ادم سفت (براونی)', 'ادم گوده‌گذار ۱+', 'دهیدراتاسیون', 'آسیت'], 'ضخیم شدن، تیرگی، لکه خشک و لیپواسکلروز ← براونی.'),
          B('در آسیت، دق شکم ماتیته ___ و موج مایع نشان می‌دهد.', ['متحرک', 'ثابت', 'یک‌طرفه'], 'shifting dullness و fluid wave نشانه‌های آسیت‌اند.'),
          T('ادم محیطی ممکن است راه رفتن بیمار را سخت کند.', true, 'درست؛ ادم محیطی ممکن است راه رفتن را سخت کند.'),
          M('در بیمار بستری که به پشت خوابیده، ادم محیطی کجا جمع می‌شود؟', ['ران و ساکروم', 'صورت', 'شانه', 'دست'], 'نواحی وابسته در بستری: ران و ساکروم.')
        ]
      },
      {
        id: 'fl4', title: 'تشخیص افتراقی ادم', icon: '🧭', items: [
          L('ادم عمومی و موضعی', '<b>آنازارکا یا ادم عمومی</b>: بیماری قلبی-عروقی و نارسایی قلب (فشار ورید ژوگولار بالا، تنگی نفس)، بیماری کبد یا سیروز (همراه آسیت)، بیماری کلیه (پروتئینوری، فشار خون بالا)، سندرم نفروتیک، گلومرولونفریت، میکزدم (ضخیم شدن پوست، گوده نمی‌دهد)<br><br><b>ادم موضعی</b>: تروما، سوختگی، آنژیوادم، کهیر، عفونت پوست (اریسیپل، سلولیت)'),
          M('ادم عمومی همراه با فشار ورید ژوگولار بالا و تنگی نفس بیشتر به نفع کدام است؟', ['نارسایی قلب', 'سلولیت', 'لنف‌ادم', 'کمبود پروتئین'], 'بیماری قلبی-عروقی با JVP بالا و تنگی نفس همراه است.'),
          L('آسیت و ادم یک‌طرفه', '<b>آسیت</b>: سیروز (همراه آنازارکا یا ادم محیطی)، بیماری انسدادی وریدهای کبد، بدخیمی، نارسایی شدید قلب راست<br><br><b>ادم یک‌طرفه اندام تحتانی</b>: <b>ترومبوز ورید عمقی</b> (نگرانی اصلی؛ حاد با درد، قرمزی و گرمی)، نارسایی مزمن وریدی، کشیدگی یا پارگی عضله، لنف‌ادم، سندرم کمپارتمان، تومورهای لگن'),
          M('ادم حاد یک‌طرفه ساق با درد، قرمزی و گرمی؛ اولین نگرانی؟', ['ترومبوز ورید عمقی', 'سوءتغذیه', 'نارسایی قلب', 'کمبود پروتئین'], 'DVT نگرانی اصلی در ادم یک‌طرفه حاد است.'),
          L('ادم دوطرفه پاها و اندام فوقانی', '<b>دوطرفه اندام تحتانی</b>: شایع‌ترین‌ها <b>بیماری مزمن وریدی</b> و <b>نارسایی قلب</b>؛ فشار خون ریوی (شایع ولی اغلب نادیده)، اضافه‌بار مایع، التهاب و سپسیس، سندرم بازتغذیه، بری‌بری، سندرم نفروتیک، بارداری، سیروز، <b>سوءتغذیه و سوءجذب</b> (ناشایع)، میکزدم پره‌تیبیال<br><br><b>اندام فوقانی</b>: تروما، ترومبوفلبیت سطحی، عفونت، آرتریت، DVT (به‌خصوص با کاتتر وریدی)، سندرم ورید اجوف فوقانی، لنف‌ادم (پس از پرتودرمانی یا جراحی)'),
          P('هر الگو را به یک علت شایع وصل کن', [['ادم دوطرفه پاها', 'بیماری مزمن وریدی'], ['ادم یک‌طرفه حاد دردناک', 'ترومبوز ورید عمقی'], ['ادم بازو پس از جراحی پستان', 'لنف‌ادم'], ['آسیت با ادم محیطی', 'سیروز']]),
          T('سوءتغذیه و سوءجذب علت «شایع» ادم دوطرفه پاها هستند.', false, 'این علت «ناشایع» و مزمن است؛ شایع‌ترین‌ها بیماری وریدی و نارسایی قلب‌اند.'),
          M('سندرم بازتغذیه در کدام الگوی ادم آمده است؟', ['ادم دوطرفه اندام تحتانی (و گاهی عمومی)', 'فقط ادم یک‌طرفه', 'فقط آسیت', 'ادم صورت به‌تنهایی'], 'ریفیدینگ ممکن است ادم عمومی هم بدهد.'),
          B('بری‌بری (کمبود ___) در علت‌های ادم دوطرفه پاها آمده است.', ['تیامین', 'ویتامین C', 'آهن'], 'بری‌بری مرطوب (کمبود تیامین یا B1) با نارسایی قلب پربرون‌ده و ادم همراه است.')
        ]
      },
      {
        id: 'fl5', title: 'داروهایی که ادم می‌دهند', icon: '💊', items: [
          L('داروهای ایجادکننده ادم', tbl([['گروه', 'نمونه‌ها'], ['ضدافسردگی', 'ترازودون، مهارکننده‌های MAO'], ['ضدفشار خون', 'مسدودکننده‌های کانال کلسیم (آملودیپین، فلودیپین، دیلتیازم، وراپامیل)، بتابلاکرها، گشادکننده‌های عروق (هیدرالازین، مینوکسیدیل، کلونیدین، متیل‌دوپا)'], ['هورمون‌ها', 'استروژن، پروژسترون، تستوسترون، کورتیکواستروئیدها، استروئیدهای آنابولیک، هورمون رشد'], ['NSAIDها', 'آسپرین، ایبوپروفن، ناپروکسن، مهارکننده‌های COX-2'], ['تیازولیدین‌دیون‌ها', 'روزیگلیتازون، پیوگلیتازون'], ['ضدتشنج', 'گاباپنتین، پره‌گابالین'], ['ضدسرطان و ایمنی‌درمانی', 'دوستاکسل، سیس‌پلاتین، اینترلوکین-۲'], ['ضدپارکینسون', 'پرامیپکسول، روپینیرول'], ['سایر', 'سیکلوسپورین، مهارکننده‌های پمپ پروتون، تاموکسیفن']]) + '<small>این فهرست کامل نیست.</small>'),
          N('f.drug'),
          M('بیمار دیابتی با پیوگلیتازون دچار ادم دوطرفه پا شده است. اولین فکر؟', ['اثر جانبی دارو؛ با پزشک معالج مطرح کن', 'سوءتغذیه شدید', 'کمبود پروتئین', 'ادم ناشی از دیابت'], 'تیازولیدین‌دیون‌ها از داروهای ایجادکننده ادم‌اند.'),
          P('هر دارو را به گروهش وصل کن', [['آملودیپین', 'مسدودکننده کانال کلسیم'], ['پره‌گابالین', 'ضدتشنج'], ['ناپروکسن', 'NSAID'], ['روپینیرول', 'ضدپارکینسون']]),
          T('مهارکننده‌های پمپ پروتون جزو داروهای ایجادکننده ادم‌اند.', true, 'درست؛ در گروه «سایر» همراه سیکلوسپورین و تاموکسیفن.'),
          N('f.drug'),
          M('کدام دارو جزو داروهای ایجادکننده ادم نیست؟', ['فوروزماید', 'گاباپنتین', 'کورتیکواستروئید', 'دیلتیازم'], 'فوروزماید دیورتیک است و برای درمان ادم به کار می‌رود.'),
          L('چرا این جدول برای کارشناس تغذیه مهم است؟', 'پیش از نسبت دادن ادم به وضعیت تغذیه یا ثبت آن به عنوان «تجمع مایع»، <b>فهرست دارویی</b> را مرور کن. ادم دارویی هنوز وزن را بالا نشان می‌دهد و کاهش وزن را پنهان می‌کند؛ پس در تفسیر وزن مهم است، ولی علتش را باید شفاف در یادداشت نوشت.'),
          B('گاباپنتین و پره‌گابالین داروهای ___ هستند که ممکن است ادم بدهند.', ['ضدتشنج', 'ضدفشار خون', 'هورمونی'], 'هر دو ضدتشنج‌اند و ادم می‌دهند.')
        ]
      },
      {
        id: 'fl6', title: 'درجه‌بندی ادم گوده‌گذار', icon: '👆', items: [
          L('روش کار', '۱. جایی از اندام تحتانی را پیدا کن که پوست روی <b>استخوان</b> است: ساق، قوزک یا پشت پا<br>۲. با <b>بالشتک انگشت یا شست</b> و فشار متوسط، دست‌کم <b>۵ ثانیه</b> فشار بده<br>۳. انگشت را بردار و فرورفتگی را ببین:<br>  • <b>عمقش</b> چقدر است؟<br>  • <b>چقدر طول می‌کشد</b> پر شود؟<br>  • ادم <b>تا کجای پا</b> بالا رفته؟' + pic('tip-pitting')),
          O('مراحل درجه‌بندی ادم گوده‌گذار را مرتب کن', ['پیدا کردن پوست روی استخوان (ساق یا پشت پا)', 'فشار متوسط با بالشتک انگشت دست‌کم ۵ ثانیه', 'برداشتن انگشت و دیدن عمق گوده', 'زمان‌گیری تا پر شدن و دیدن گستره ادم'], 'ترتیب درست ارزیابی کیفیت ادم.'),
          L('درجه‌بندی: سه روش', pic(['edema0', 'edema1', 'edema2', 'edema3', 'edema4'], ['بدون ادم', '۱+', '۲+', '۳+', '۴+']) + tbl([['درجه', 'روش ۱', 'روش ۲', 'روش ۳ (گستره)'], ['۱+', 'گوده خفیف بدون تغییر شکل، سریع ناپدید می‌شود', 'به‌سختی دیده می‌شود، برگشت فوری', 'خفیف؛ فقط مچ و پاها'], ['۲+', 'گوده عمیق‌تر، ۱۰ تا ۲۵ ثانیه بعد ناپدید', 'چند ثانیه تا برگشت', 'متوسط؛ ساق و دست‌ها'], ['۳+', 'گوده عمیق، اندام پر و متورم؛ بیش از ۱ دقیقه', 'حدود ۱۰ تا ۱۲ ثانیه تا برگشت', 'شدید؛ عمومی، شامل اندام بالا و صورت'], ['۴+', 'بسیار عمیق، اندام بدشکل؛ ۲ تا ۵ دقیقه', 'گوده ۸ میلی‌متری، بیش از ۲۰ ثانیه', '—']])),
          L('عمق گوده', pic(['pit1', 'pit2', 'pit3', 'pit4'], ['۱+ · ۲ mm', '۲+ · ۴ mm', '۳+ · ۶ mm', '۴+ · ۸ mm']) + '<small>درجه‌بندی ادم ذهنی است؛ ولی استفاده از یک مقیاس ثابت ثبت تغییرات در طول زمان را ممکن می‌کند.</small>'),
          M('این تصویر کدام درجه ادم است؟', ['۴+', '۲+', '۱+', 'بدون ادم'], 'گوده بسیار عمیق و پهن ← ۴+.', null, { k: 'edema4' }),
          N('f.grade'),
          T('در روش ۱، ادم ۲+ گوده‌ای است که ۱۰ تا ۲۵ ثانیه بعد ناپدید می‌شود.', true, 'درست.'),
          N('f.img'),
          B('در روش ۲، ادم ۴+ گوده‌ای حدود ___ میلی‌متر است که بیش از ۲۰ ثانیه طول می‌کشد تا برگردد.', ['۸', '۲', '۴'], '۲ میلی‌متر ۱+، ۴ میلی‌متر ۲+، ۶ میلی‌متر ۳+ و ۸ میلی‌متر ۴+.'),
          N('f.img')
        ]
      },
      {
        id: 'fl7', title: 'ارزیابی تجمع مایع', icon: '🔎', items: [
          L('کِی و کجا', tbl([['', 'نگاه', 'لمس'], ['کِی', 'ویزیت اول؛ تکرار در فواصل منظم یا با تغییر مهم بالینی', 'ویزیت اول؛ تکرار در فواصل منظم'], ['کجا', 'سر تا پا: صورت، دست‌ها، ساکروم، اسکروتوم یا وولو، پهلوها و شکم، ران، ساق و پا', 'ساکروم و پهلوها؛ ران، ساق و پا'], ['نکته', 'وضعیت بدن (جاذبه)؛ عمومی یا موضعی، یک‌طرفه یا دوطرفه', 'وضعیت بدن؛ عمومی یا موضعی، یک‌طرفه یا دوطرفه، گوده‌گذار یا براونی']])),
          M('کدام ویژگی را فقط با «لمس» می‌توان تعیین کرد؟', ['گوده‌گذار یا براونی بودن ادم', 'عمومی یا موضعی بودن', 'یک‌طرفه یا دوطرفه بودن', 'وضعیت بدن بیمار'], 'گوده‌گذار یا براونی بودن فقط با لمس معلوم می‌شود.'),
          L('چند نکته', '• نواحی <b>کمتر آشکار</b> (پهلوها، شکم، ران، ساکروم) را با کنار زدن پتو و لباس پیدا کن<br>• اگر تورمی ندیدی، بپرس: «لباس یا جواهراتت جور دیگری اندازه‌ات هستند؟» «تغییر وزن داشته‌ای؟»<br>• یافته‌ها را با <b>علائم حیاتی، ورودی و خروجی مایع، آزمایش‌ها و وزن‌ها</b> تطبیق بده'),
          P('هر ابزار را به کاربردش در ارزیابی مایع وصل کن', [['ورودی و خروجی مایع', 'تعادل روزانه مایع'], ['وزن روزانه', 'تغییر سریع حجم'], ['سدیم سرم', 'احتباس آب'], ['پرسیدن درباره انگشتر', 'تورم پنهان دست']]),
          N('f.map'),
          T('اگر در پاها تورمی نمی‌بینی، می‌توانی تجمع مایع را رد کنی.', false, 'نواحی کمتر آشکار مثل ساکروم، پهلوها و ران را هم ببین و از بیمار بپرس.'),
          M('بیمار در زمینه حاد ادم ۳+ پاها دارد. در الگوی پرونده این تجمع مایع چه شدتی دارد و از چه پشتیبانی می‌کند؟', ['شدید؛ پشتیبان سوءتغذیه شدید', 'خفیف؛ پشتیبان متوسط', 'متوسط؛ پشتیبان متوسط', 'هیچ‌کدام'], 'الگوی پرونده: ۳+ تا ۴+ شدید؛ در زمینه حاد، متوسط تا شدید ← شدید.'),
          N('f.map'),
          B('چون جاذبه بر محل ادم اثر دارد، همیشه ___ بیمار را ثبت کن.', ['وضعیت بدن', 'رنگ لباس', 'ساعت غذا'], 'نشسته، ایستاده یا خوابیده.')
        ]
      },
      {
        id: 'fl8', title: 'دهیدراتاسیون: علائم و آزمایش‌ها', icon: '🏜️', items: [
          L('سخت ولی مهم', 'دهیدراتاسیون و هیپوولمی جزو ویژگی‌های سوءتغذیه نیستند، ولی بیمار را با <b>وزن کاذب پایین</b> نشان می‌دهند و درصد کاهش وزن را <b>بیش از واقع</b> برآورد می‌کنند.<br><br>ارزیابی آن حتی برای افراد باتجربه سخت است: معاینه <b>نه حساس است نه اختصاصی</b> و به یک نشانه وابسته نیست. معاینه را کنار وزن، علائم حیاتی و آزمایش‌ها تفسیر کن.'),
          L('علائم دهیدراتاسیون', tbl([['شدت', 'علائم'], ['خفیف تا متوسط', 'بی‌حالی، خشکی دهان و مخاط، تشنگی، گرفتگی عضله، کاهش حجم یا دفعات ادرار، ادرار تیره، سردرد، پوست خشک، فشار ورید ژوگولار پایین، سرگیجه وضعیتی، افزایش دمای بدن، ضعف عضله، کاهش تورگور پوست، فشار خون پایین، نداشتن ادرار چند ساعته'], ['شدید', 'ادرار زرد بسیار تیره یا کهربایی، تشنگی شدید، کاهش وزن حاد، ضربان سریع، درد شکم یا قفسه سینه، تحریک‌پذیری یا گیجی، تشنج، کما']])),
          M('کدام علامت جزو علائم دهیدراتاسیون «شدید» است؟', ['گیجی و تحریک‌پذیری', 'تشنگی', 'سردرد', 'خشکی پوست'], 'گیجی، تشنج و کما نشانه‌های دهیدراتاسیون شدیدند.'),
          L('آزمایش‌ها و علائم حیاتی', tbl([['آزمایش یا علامت', 'یافته', 'توضیح'], ['سدیم سرم', '↑ یا ↓', 'بالا در از دست دادن آب؛ پایین در از دست دادن آب و سدیم'], ['پتاسیم سرم', '↑ یا ↓', 'بالا با احتباس پتاسیم (مثل نارسایی کلیه)؛ پایین با دفع زیاد گوارشی یا ادراری'], ['اسمولالیته پلاسما', '↑', ''], ['نسبت BUN/Cr', '↑', 'اغلب بیش از ۲۰ به ۱'], ['هماتوکریت و آلبومین', '↑', 'کاهش حجم پلاسما'], ['اسیدوز متابولیک', 'ممکن', 'دفع بی‌کربنات: اسهال، فیستول یا استومی پرخروجی'], ['آلکالوز متابولیک', 'ممکن', 'دفع یون هیدروژن: دیورتیک، استفراغ، ساکشن معده'], ['سدیم ادرار', '↓', 'در هیپوولمی (مگر حالت دفع نمک)'], ['فشار خون و نبض', 'فشار ↓، تاکی‌کاردی', 'اول وضعیتی، سپس پایدار با بدتر شدن']])),
          N('f.bun'),
          P('هر یافته را به معنایش در دهیدراتاسیون وصل کن', [['BUN/Cr بیش از ۲۰', 'به نفع دهیدراتاسیون'], ['آلبومین بالا', 'کاهش حجم پلاسما'], ['آلکالوز متابولیک', 'استفراغ یا ساکشن معده'], ['سدیم ادرار پایین', 'هیپوولمی']]),
          T('در دهیدراتاسیون، آلبومین ممکن است به‌طور کاذب بالا باشد.', true, 'درست؛ به‌خاطر کاهش حجم پلاسما.'),
          N('f.bun')
        ]
      },
      {
        id: 'fl9', title: 'معاینه دهیدراتاسیون', icon: '👅', items: [
          L('دهان و چشم', '<b>دهان (لب، لثه، زبان)</b>: با نگاه و چراغ‌قوه. طبیعی: مرطوب. دهیدراته: نبود بزاق جمع‌شده، بزاق غلیظ، مخاط خشک، زبان شیاردار، چسبیدن لب و زبان، لب ترک‌خورده، شکایت از تشنگی<br><br><b>چشم</b>: با نگاه و چراغ‌قوه. طبیعی: غشاها مرطوب. دهیدراته: سوزش، خشکی غشاها، قرمزی، اشک‌ریزش' + pic(['dh-mouth', 'dh-eyes'], ['دهان', 'چشم'])),
          L('پوست و ناخن', '<b>تورگور پوست</b>: پوست پشت دست، ساعد یا جناغ را چند ثانیه نیشگون بگیر و رها کن. طبیعی: سریع برمی‌گردد. دهیدراته: <b>آهسته</b> برمی‌گردد.<br><small>در جوانان قابل اعتماد است؛ ولی در چاقی یا سن بالای ۵۵ تا ۶۰ سال دقیق نیست؛ کشسانی پوست روی جناغ یا داخل ران بهتر حفظ می‌شود.</small><br><br><b>ناخن (پرشدن مویرگی)</b>: دست بالاتر از قلب، بستر ناخن را فشار بده تا سفید شود و رها کن. طبیعی: <b>کمتر از ۲ ثانیه</b> صورتی می‌شود. بیش از ۲ ثانیه ممکن است دهیدراتاسیون باشد (یا شوک، بیماری عروق محیطی، هیپوترمی).' + pic(['dh-turgor', 'dh-turgor2', 'dh-nail'], ['نیشگون پوست', 'برگشت آهسته', 'پرشدن مویرگی'])),
          M('پرشدن مویرگی بستر ناخن ۴ ثانیه طول کشید. کدام برداشت درست‌تر است؟', ['ممکن است دهیدراتاسیون باشد؛ شوک، بیماری عروق محیطی و هیپوترمی را هم در نظر بگیر', 'قطعاً دهیدراتاسیون است', 'طبیعی است', 'نشانه کمبود آهن است'], 'بیش از ۲ ثانیه، با علت‌های دیگر.'),
          T('تورگور پوست در فرد ۸۰ ساله شاخص دقیقی برای دهیدراتاسیون است.', false, 'در بالای ۵۵ تا ۶۰ سال و در چاقی دقیق نیست؛ جناغ یا داخل ران بهترند.'),
          O('مراحل آزمون پرشدن مویرگی را مرتب کن', ['دست بیمار را بالاتر از سطح قلب نگه دار', 'بستر ناخن را فشار بده تا سفید شود', 'فشار را بردار', 'زمان صورتی شدن را بشمار (طبیعی کمتر از ۲ ثانیه)'], 'طبیعی کمتر از ۲ ثانیه است.'),
          L('چه کسانی در خطرند؟', 'شیرخواران، کودکان، <b>ورزشکاران</b>، <b>سالمندان</b> و افراد با <b>اختلال شناختی</b> بیشتر در خطرند. شرایط دیگر:<br>• اسهال یا استفراغ زیاد<br>• تعریق زیاد<br>• خونریزی گوارشی<br>• دفع گوارشی از فیستول، استومی یا درن<br>• پرادراری (دیابت بی‌مزه، دیورتیک)<br>• تب، سوختگی<br>• محیط گرم<br>• ورزش طولانی و سنگین'),
          P('هر بیمار را به عامل خطر دهیدراتاسیونش وصل کن', [['بیمار با ایلئوستومی پرخروجی', 'دفع گوارشی'], ['بیمار با دیابت بی‌مزه', 'پرادراری'], ['بیمار سوختگی', 'از دست دادن مایع از پوست'], ['سالمند با زوال عقل', 'اختلال شناختی']]),
          M('کدام یافته دهان به نفع دهیدراتاسیون است؟', ['زبان شیاردار و بزاق غلیظ', 'مخاط مرطوب', 'بزاق جمع‌شده زیر زبان', 'لب صورتی و نرم'], 'بزاق غلیظ، زبان شیاردار، لب ترک‌خورده و مخاط خشک.', null, { k: 'dh-mouth' })
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — دنیای ۵: وضعیت عملکردی و ریزمغذی‌ها (فصل ۶ و ۷ و پیوست ۱ کتاب)
 * نشانه‌ها و تصویرهایشان از جدول‌های ۷-۱ تا ۷-۴ کتاب‌اند. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic } = EA.K;

  EA.worlds.push({
    id: 'mn', sym: 'Zn', name: 'عملکرد و ریزمغذی‌ها', sub: 'قدرت چنگش و نشانه‌های پوست، ناخن، مو و دهان', color: '#12A594', dark: '#0C8577', light: '#D8F5EF',
    levels: ['قدرت‌سنج‌ها', 'کارآگاهان پوست و ناخن', 'استادان سر تا پا'],
    gens: ['z.grip', 'z.img', 'z.sign', 'z.non'],
    lessons: [
      {
        id: 'mn1', title: 'وضعیت عملکردی', icon: '🏋️', items: [
          L('قدرت = پیش‌آگهی', 'کاهش قدرت عضله پیش‌بینی‌کننده <b>بقا</b> در بیماری بحرانی است. کاهش قدرت چنگش پیش‌بینی‌کننده قابل اعتماد <b>بستری طولانی‌تر</b>، کیفیت و طول عمر کمتر و <b>مرگ‌ومیر بیشتر</b> است.<br><br>بی‌تحرکی، التهاب، تغذیه ناکافی و مقاومت به انسولین با هم کاتابولیسم عضله را تشدید می‌کنند.'),
          M('کاهش قدرت چنگش پیش‌بینی‌کننده کدام پیامد است؟', ['بستری طولانی‌تر و مرگ‌ومیر بیشتر', 'افزایش وزن', 'بهبود سریع‌تر زخم', 'کاهش نیاز به تغذیه'], 'قدرت عضله پیش‌آگهی بیمار را نشان می‌دهد.'),
          L('قدرت چنگش در هر زمینه', tbl([['زمینه', 'متوسط', 'شدید'], ['حاد', 'کاربرد ندارد', 'به‌طور قابل اندازه‌گیری کم'], ['مزمن', 'کاربرد ندارد', 'به‌طور قابل اندازه‌گیری کم'], ['اجتماعی', 'کاربرد ندارد', 'به‌طور قابل اندازه‌گیری کم']]) + 'قدرت چنگش کم فقط از <b>سوءتغذیه شدید</b> پشتیبانی می‌کند.'),
          T('قدرت چنگش کاهش‌یافته می‌تواند یکی از دو ویژگی لازم برای سوءتغذیه «متوسط» باشد.', false, 'برای متوسط «کاربرد ندارد»؛ فقط پشتیبان شدید است.'),
          L('اگر دینامومتر نبود', 'در بعضی بخش‌ها دینامومتر در دسترس یا عملی نیست. گزینه‌های دیگر:<br>• <b>سرعت راه رفتن</b> و <b>آزمون برخاستن از صندلی</b><br>• ابزارهای کیفیت زندگی و عملکرد: <b>شاخص کتز</b> (فعالیت‌های روزانه)، <b>لاوتن</b> (فعالیت‌های ابزاری)، <b>کارنوفسکی</b> و <b>ECOG</b><br>• ابزارهای ارزیابی تغذیه با بخش عملکرد: <b>SGA</b>، <b>امتیاز سوءتغذیه دیالیز</b> و <b>PG-SGA</b>'),
          P('هر ابزار را به حوزه‌اش وصل کن', [['شاخص کتز', 'فعالیت‌های روزمره زندگی'], ['لاوتن', 'فعالیت‌های ابزاری روزمره'], ['PG-SGA', 'ارزیابی تغذیه در سرطان'], ['ECOG', 'وضعیت عملکرد در انکولوژی']]),
          M('کدام دستگاه برای سنجش قدرت چنگش معتبر شناخته شده است؟', ['دینامومتر جامار', 'کالیپر چین پوستی', 'ترازوی دیجیتال', 'متر نواری'], 'دینامومتر جامار ابزار معتبر سنجش قدرت چنگش است.'),
          B('تغییر عملکرد فقط وقتی تغذیه‌ای است که از ___ عضله ناشی شود.', ['تحلیل', 'افزایش', 'گرفتگی'], 'کاهش عملکرد از سکته، شکستگی یا آرتروز علت غیرتغذیه‌ای دارد.')
        ]
      },
      {
        id: 'mn2', title: 'دینامومتر دستی', icon: '✊', items: [
          L('روش استاندارد', 'روش «استاندارد طلایی»: <b>سه اندازه‌گیری متناوب</b> برای هر دست با جابه‌جایی سریع بین دو دست. این کار هم خستگی عضله را برطرف می‌کند و هم جلوی تلاش ناقص یا تمارض را می‌گیرد.<br><br>در کل <b>۶ بار</b> اندازه‌گیری انجام می‌شود تا برای هر دست میانگین به دست آید؛ سپس با <b>جدول هنجار سازنده دستگاه</b> مقایسه می‌شود.'),
          L('گام‌ها', '۱. بیمار در وضعیت استاندارد بنشیند:<br>  • روی صندلی دسته‌دار، صاف، با بازوهای بدون تکیه<br>  • یا لبه تخت، یا روی تخت با پاهای صاف (۹۰ درجه نسبت به بالاتنه)<br>  • شانه‌ها شل، <b>آرنج ۹۰ درجه</b>، مچ خم نشده<br>۲. بین تلاش‌ها <b>۱۵ ثانیه</b> استراحت<br>۳. دست‌ها را <b>یکی در میان</b> عوض کن تا ۳ اندازه برای هر دست<br>۴. سه عدد هر دست را جمع کن و بر ۳ تقسیم کن<br>۵. با جدول سازنده مقایسه کن'),
          O('گام‌های سنجش قدرت چنگش را مرتب کن', ['نشاندن بیمار در وضعیت استاندارد با آرنج ۹۰ درجه', 'فشار دادن دستگاه با یک دست', '۱۵ ثانیه استراحت و تکرار با دست دیگر', 'ادامه تا سه اندازه برای هر دست', 'میانگین هر دست و مقایسه با جدول سازنده'], 'روش استاندارد سنجش قدرت چنگش.'),
          L('درست و نادرست', pic(['grip-ok0', 'grip-ok1', 'grip-bad0', 'grip-bad1'], ['✔ درست: نشسته، آرنج ۹۰ درجه', '✔ درست: دستگاه کنار بدن', '✘ نادرست: بازو صاف و جلو', '✘ نادرست: نشستن نادرست روی تخت'])),
          M('در این تصویر وضعیت سنجش قدرت چنگش چگونه است؟', ['نادرست؛ آرنج باید ۹۰ درجه و بازو کنار بدن باشد', 'درست', 'درست، فقط باید ایستاده باشد', 'درست، به شرط سه بار تکرار'], 'بازوی صاف و کشیده به جلو «نادرست» است.', null, { k: 'grip-bad0' }),
          N('z.grip'),
          T('هر شش اندازه‌گیری را می‌توان پشت سر هم با یک دست انجام داد.', false, 'دست‌ها یکی در میان عوض می‌شوند (rapid exchange) تا خستگی و تمارض کمتر شود.'),
          L('نقطه برش‌ها', 'نتیجه را با جدول سازنده دستگاه مقایسه کن. نقطه برش رایج برای <b>قدرت کم</b>:<br>• مرد: <b>کمتر از ۲۷ کیلوگرم</b><br>• زن: <b>کمتر از ۱۶ کیلوگرم</b><br><small>این عددها برای غربالگری سارکوپنی‌اند؛ تفسیر «به‌طور قابل اندازه‌گیری کم» را با سن، جنس و جدول دستگاه انجام بده.</small>'),
          N('z.grip')
        ]
      },
      {
        id: 'mn3', title: 'ریزمغذی‌ها: مقدمه', icon: '🔬', items: [
          L('سرنخ‌های روی بدن', 'کمبود ریزمغذی‌ها جزو شش ویژگی سوءتغذیه <b>نیست</b>، ولی <b>شواهد پشتیبان</b> تشخیص سوءتغذیه است و درباره دریافت، هضم، جذب و متابولیسم مواد مغذی سرنخ می‌دهد.<br><br>بیشترین خطر: بیماری‌های مزمن با <b>سوءجذب</b>، <b>نارسایی پانکراس</b>، <b>بیماری کلیوی مرحله آخر</b>، رژیم‌های محدود و نبود دسترسی به غذا.'),
          M('جایگاه نشانه‌های کمبود ریزمغذی در تشخیص سوءتغذیه چیست؟', ['شواهد پشتیبان؛ جزو شش ویژگی نیستند', 'یکی از شش ویژگی اصلی‌اند', 'به‌تنهایی سوءتغذیه شدید را ثابت می‌کنند', 'بی‌ارتباط با سوءتغذیه‌اند'], 'نشانه‌های ریزمغذی فقط شواهد پشتیبان‌اند.'),
          L('چرا پوست، مو، ناخن و دهان؟', 'این بافت‌ها <b>نوسازی سریع</b> دارند و کمبود را زود نشان می‌دهند:<br>' + tbl([['بافت', 'سرعت نوسازی'], ['پوست', 'هر ۱۰ تا ۳۰ روز'], ['ناخن شست', '۰٫۱۰ تا ۰٫۱۲ میلی‌متر در روز'], ['مو', '۰٫۳ میلی‌متر در روز'], ['مخاط دهان', 'کمتر از ۱ هفته']]) + 'پوست بزرگ‌ترین عضو بدن است و حدود <b>۱۶٪ وزن بدن</b> را تشکیل می‌دهد.'),
          P('هر بافت را به سرعت نوسازی‌اش وصل کن', [['مخاط دهان', 'کمتر از ۱ هفته'], ['پوست', '۱۰ تا ۳۰ روز'], ['مو', '۰٫۳ میلی‌متر در روز'], ['ناخن شست', '۰٫۱ میلی‌متر در روز']]),
          T('چون مخاط دهان سریع نوسازی می‌شود، پایش آن برای سنجش اثر درمان تغذیه‌ای مفید است.', true, 'درست؛ نوسازی کمتر از یک هفته‌ای کمبود را زود نشان می‌دهد و بهبود را هم زود.'),
          L('همیشه علت دیگر را هم در نظر بگیر', 'تقریباً هر نشانه یک علت <b>غیرتغذیه‌ای</b> هم دارد: حساسیت، دارو، بیماری پوست، ضربه، رنگ کردن مو یا لاک ناخن.<br><br>نشانه ریزمغذی را با <b>تاریخچه غذایی</b>، آزمایش و یافته‌های پوست، مو، ناخن و دهان کنار هم بگذار.'),
          N('z.non'),
          B('کمبود ریزمغذی بیشتر در بیماران با سوءجذب، نارسایی پانکراس و بیماری ___ مرحله آخر دیده می‌شود.', ['کلیوی', 'قلبی', 'پوستی'], 'بیماری کلیوی مرحله آخر از عوامل خطر کمبود ریزمغذی است.')
        ]
      },
      {
        id: 'mn4', title: 'پوست (۱)', icon: '🧴', items: [
          L('پتشی و درماتیت', pic(['petechiae', 'dermatitis'], ['پتشی', 'درماتیت']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['پتشی: لکه‌های ریز خونریزی', 'کمبود ویتامین K، E یا C', 'اختلال خونی، بیماری کبد، مصرف زیاد ضدانعقاد'], ['درماتیت: پوست متورم و قرمز که تاول می‌زند یا ترشح دارد', 'کمبود روی یا اسید چرب ضروری', 'درماتیت، بثورات حساسیتی یا دارویی، پسوریازیس']])),
          M('این نشانه پوستی بیشتر به کدام کمبود اشاره دارد؟', ['ویتامین K، E یا C', 'روی', 'نیاسین', 'آهن'], 'پتشی: لکه‌های ریز خونریزی؛ کمبود ویتامین K، E یا C.', null, { k: 'petechiae' }),
          L('پلاگرا و پوست «رنگ پوسته‌شده»', pic(['pellagra', 'flakypaint'], ['درماتوز پلاگرایی', 'درماتیت رنگ پوسته‌شده']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['درماتوز پلاگرایی: پررنگی نواحی آفتاب‌خورده یا آسیب‌دیده', 'کمبود نیاسین یا تریپتوفان', 'سوختگی، آدیسون، پسوریازیس'], ['درماتیت «رنگ پوسته‌شده»: پوست دوطرفه شبیه رنگ ورقه‌شده در نواحی دور از آفتاب', 'کمبود پروتئین-کالری', 'عوامل محیطی']])),
          M('پررنگی و پوسته‌ریزی پوست در نواحی آفتاب‌خورده بیمار الکلی بیشتر به نفع کدام کمبود است؟', ['نیاسین', 'ویتامین A', 'ید', 'مس'], 'درماتوز پلاگرایی: نیاسین یا تریپتوفان.'),
          T('درماتیت «رنگ پوسته‌شده» در نواحی دور از آفتاب به نفع کمبود پروتئین-کالری است.', true, 'درست.', { k: 'flakypaint' }),
          N('z.img'),
          P('هر نشانه پوستی را به کمبودش وصل کن', [['پتشی', 'ویتامین K، E یا C'], ['درماتیت', 'روی یا اسید چرب ضروری'], ['پلاگرا', 'نیاسین'], ['رنگ پوسته‌شده', 'پروتئین-کالری']]),
          M('بیمار با درماتیت اطراف دهان پس از ماه‌ها تغذیه وریدی بدون عناصر کمیاب. محتمل‌ترین کمبود؟', ['روی', 'ویتامین K', 'ید', 'ویتامین B12'], 'درماتیت: روی یا اسید چرب ضروری؛ در تغذیه وریدی طولانی بدون عناصر کمیاب، کمبود روی مطرح است.', null, { k: 'dermatitis' })
        ]
      },
      {
        id: 'mn5', title: 'پوست (۲)', icon: '🩹', items: [
          L('خشکی، رنگ‌پریدگی، زخم', pic(['xerosis', 'pallor', 'wound'], ['زروز', 'رنگ‌پریدگی', 'زخم مزمن']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['زروز: پوست خشک، فلس‌دار، پوسته‌پوسته', 'دهیدراتاسیون، اسید چرب ضروری، ویتامین A', 'عوامل محیطی و بهداشتی'], ['رنگ‌پریدگی', 'آهن، فولات، ویتامین B12', 'کم‌حجمی و کم‌خون‌رسانی'], ['زخم بدون بهبود', 'روی، ویتامین C، پروتئین', 'سلولیت']])),
          M('زخمی که خوب نمی‌شود با کمبود کدام گروه مرتبط است؟', ['روی، ویتامین C و پروتئین', 'ید و مس', 'ویتامین K و E', 'بیوتین و منیزیم'], 'زخم مزمن با کمبود روی، ویتامین C و پروتئین همراه است.', null, { k: 'wound' }),
          L('فهرست بررسی پوست', 'در تمام مدت معاینه، پوست را از نظر این موارد ببین:<br>• پوسته‌ریزی، بهبود ضعیف زخم، درماتیت<br>• بثورات، پتشی، اکیموز<br>• خشکی، تورگور ضعیف، زخم فشاری<br><br><b>نکته</b>: یکپارچگی و کشسانی پوست با آفتاب، سن و هیدراتاسیون تغییر می‌کند؛ حساسیت‌ها و داروها بثورات می‌دهند و اختلال تغذیه تغییر رنگ و بثورات.'),
          T('پوست فقط در ابتدای معاینه بررسی می‌شود.', false, 'پوست «در تمام مدت معاینه» بررسی می‌شود.'),
          M('رنگ‌پریدگی پوست با کدام کمبودها مرتبط است؟', ['آهن، فولات و ویتامین B12', 'ویتامین A و E', 'روی و مس', 'نیاسین و تریپتوفان'], 'و در کم‌حجمی یا کم‌خون‌رسانی هم دیده می‌شود.', null, { k: 'pallor' }),
          N('z.img'),
          N('z.sign'),
          B('زروز ممکن است از دهیدراتاسیون، کمبود اسید چرب ضروری یا کمبود ویتامین ___ باشد.', ['A', 'K', 'B12'], 'زروز: دهیدراتاسیون، اسید چرب ضروری یا ویتامین A.')
        ]
      },
      {
        id: 'mn6', title: 'ناخن', icon: '💅', items: [
          L('ناخن سالم', 'ناخن از کراتین ساخته شده و باید محکم به بستر چسبیده، <b>صاف</b>، <b>ضخامت یکنواخت</b> و <b>قرینه</b> باشد. ناخن سالم <b>شفاف با رنگ صورتی</b>، صاف یا کمی محدب، با <b>زاویه قاعده ۱۶۰ درجه</b> است.<br><br>تغییرات ناخن ممکن است از کمبود تغذیه‌ای یا بیماری‌های سیستمیک باشد.'),
          L('نشانه‌های ناخن', pic(['koilonychia', 'beau', 'splinter', 'flakynail'], ['کویلونیشیا', 'خطوط بو', 'خونریزی ترکشی', 'ناخن پوسته‌پوسته']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['کویلونیشیا (قاشقی)', 'کمبود آهن، با یا بدون کم‌خونی', 'ارثی، عفونت، دیابت، کم‌کاری تیروئید'], ['خطوط بو (شیار عرضی)', 'پروتئین ناکافی، هیپرکلسمی', 'ضربه، انسداد کرونر، بیماری گذرا'], ['بستر ناخن کم‌رنگ', 'ویتامین A و C', 'گردش خون ضعیف'], ['خونریزی ترکشی', 'اسکوروی یا هموکروماتوز', 'سپتی‌سمی، ضربه، همودیالیز'], ['نواحی سفید صفحه ناخن', 'سلنیوم', 'ضربه، محیط'], ['ناخن پوسته‌پوسته', 'هیپومنیزیمی، بیوتین، اسید چرب ضروری', 'ضربه، محیط'], ['چماقی (زاویه بیش از ۱۸۰°)', 'هیچ', 'بیماری تنفسی و قلبی، سیروز، کولیت']])),
          M('این شکل ناخن بیشتر به کدام کمبود اشاره دارد؟', ['آهن', 'سلنیوم', 'بیوتین', 'ویتامین C'], 'ناخن قاشقی (کویلونیشیا) ← کمبود آهن.', null, { k: 'koilonychia' }),
          T('چماقی شدن ناخن علت تغذیه‌ای مشخصی دارد.', false, 'یافته تغذیه‌ای «هیچ»؛ علت‌ها تنفسی، قلبی، سیروز و کولیت.', { k: 'clubbing' }),
          M('شیارهای عرضی روی همه ناخن‌ها، چند هفته پس از یک بستری طولانی. محتمل‌ترین تفسیر تغذیه‌ای؟', ['پروتئین ناکافی در دوره بیماری', 'کمبود آهن', 'کمبود ید', 'کمبود ویتامین A'], 'خطوط بو: پروتئین ناکافی، هیپرکلسمی یا بیماری گذرا.', null, { k: 'beau' }),
          L('نکته‌های معاینه ناخن', '• برای بررسی پرشدن مویرگی، ناخن را آرام بین شست و اشاره فشار بده؛ اگر <b>خونریزی</b> شد، ممکن است نشانه سوءتغذیه عمومی باشد.<br>• صفحه ناخن <b>کدر و بی‌روح</b> ممکن است نشانه کمبود پروتئین باشد، ولی عفونت یا لوپوس هم چنین می‌کنند.<br>• لاک و کاشت ناخن را در نظر بگیر.' + pic('tip-refill')),
          N('z.img'),
          P('هر نشانه ناخن را به یافته تغذیه‌ای‌اش وصل کن', [['ناخن قاشقی', 'آهن'], ['خونریزی ترکشی', 'اسکوروی'], ['نواحی سفید صفحه ناخن', 'سلنیوم'], ['ناخن پوسته‌پوسته', 'بیوتین یا منیزیم']])
        ]
      },
      {
        id: 'mn7', title: 'مو', icon: '💇', items: [
          L('موی سالم', 'مو روزی حدود <b>۰٫۳ میلی‌متر</b> رشد می‌کند و مثل ناخن و پوست تغییرات ریزمغذی را نشان می‌دهد. موی سالم <b>براق، صاف، مقاوم</b> است و <b>به‌راحتی کنده نمی‌شود</b>.<br><br>کیفیت ضعیف مو با کمبود <b>پروتئین، روی، اسید چرب ضروری و بیوتین</b> همراه است.<br><br>فهرست بررسی: نازکی، شکنندگی، رشد تکه‌تکه، کنده شدن آسان، کدری و خشکی.'),
          L('نشانه‌های مو', pic(['alopecia', 'lighthair', 'corkscrew'], ['آلوپسی', 'روشن شدن رنگ مو', 'موی پیچ‌خورده']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['آلوپسی (نازک شدن یا ریزش)', 'پروتئین، روی یا بیوتین؛ ریزش منتشر با ابرو: اسید چرب ضروری یا سلنیوم', 'طاسی مردانه، کم‌کاری تیروئید یا هیپوفیز، درمان سرطان، کوشینگ، دارو'], ['روشن شدن رنگ مو', 'مس، سلنیوم، پروتئین', 'رنگ کردن مو'], ['موی پیچ‌خورده روی بازو', 'مس؛ هیپرکراتوز فولیکولی اسکوروی در سالمندان', 'تغییر شیمیایی']])),
          M('موی پیچ‌خورده (چوب‌پنبه‌کشی) روی بازوی سالمند همراه با لثه خونریزی‌دهنده، بیشتر به نفع کدام است؟', ['اسکوروی (کمبود ویتامین C)', 'کمبود آهن', 'کمبود ید', 'کمبود ویتامین A'], 'هیپرکراتوز فولیکولی اسکوروی در سالمندان؛ لثه خونریزی‌دهنده هم نشانه کمبود ویتامین C است.', null, { k: 'corkscrew' }),
          L('نکته‌های معاینه مو', '• موی <b>کدر و بی‌روح</b> ممکن است نشانه کمبود آهن، پروتئین یا روی باشد؛ درمان شیمیایی را در نظر بگیر و <b>بپرس</b> آیا مو را رنگ یا صاف کرده است.<br>• مو را لمس کن تا ببینی <b>مقاوم</b> است و <b>به‌راحتی کنده نمی‌شود</b>.<br>• بپرس ریزش مو بیشتر شده؟ به موی روی <b>بالش یا لباس</b> توجه کن.'),
          T('پیش از نسبت دادن روشن شدن مو به کمبود مس، باید درباره رنگ کردن مو پرسید.', true, 'درست؛ علت غیرتغذیه‌ای اصلی آن تغییر شیمیایی است.', { k: 'lighthair' }),
          M('ریزش منتشر مو همراه با ریزش ابرو بیشتر با کمبود کدام مرتبط است؟', ['اسید چرب ضروری یا سلنیوم', 'ویتامین K', 'ید', 'ویتامین D'], 'ریزش منتشر با ابرو: اسید چرب ضروری یا سلنیوم.'),
          N('z.img'),
          B('موی سالم براق و مقاوم است و به‌راحتی ___ نمی‌شود.', ['کنده', 'خیس', 'سفید'], 'کنده شدن آسان (easily pluckable) نشانه کیفیت ضعیف است.')
        ]
      },
      {
        id: 'mn8', title: 'چشم و صورت', icon: '👁️', items: [
          L('چشم و ویتامین A', 'معاینه چشم، صورت، لب و دهان ممکن است کمبود ریزمغذی را نشان دهد و باید با یافته‌های پوست، ناخن، مو و تاریخچه غذایی جور باشد. مثلاً کمبود <b>ویتامین A</b> ممکن است به صورت <b>شب‌کوری</b>، <b>لکه بیتو</b> و <b>کراتومالاسی</b> دیده شود.' + pic(['bitot', 'keratomalacia', 'paleconj', 'seborrhea'], ['لکه بیتو', 'کراتومالاسی', 'ملتحمه رنگ‌پریده', 'سبوره نازولبیال'])),
          L('نشانه‌های چشم و صورت', tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['سبوره نازولبیال (پوسته‌ریزی کنار بینی)', 'ویتامین B2، B3 یا B6', 'توبروس اسکلروزیس'], ['لکه بیتو (لکه خاکستری اسفنجی روی سفیدی چشم)', 'ویتامین A', 'پینگکولا در سالمندان، گوشه، ناخنک'], ['کراتومالاسی (قرنیه کدر)', 'ویتامین A', 'پرکاری تیروئید'], ['ملتحمه رنگ‌پریده', 'آهن، فولات، ویتامین B12', 'برون‌ده پایین قلب']])),
          M('این یافته چشمی بیشتر به کدام کمبود اشاره دارد؟', ['ویتامین A', 'آهن', 'ویتامین C', 'روی'], 'لکه بیتو ← کمبود ویتامین A.', null, { k: 'bitot' }),
          L('روش معاینه چشم', '• بپرس <b>در دیدن مشکل</b> دارد یا <b>خشکی غیرعادی چشم</b> دارد (ممکن است کمبود ویتامین A باشد؛ یا تحریک محیطی)<br>• از بیمار بخواه <b>به چپ و راست نگاه کند</b> تا کل چشم دیده شود<br>• انگشت اشاره‌ات را بالا بگیر و بخواه با چشم دنبالش کند؛ هنگام حرکت، نور چراغ‌قوه را روی <b>صلبیه</b> بینداز و <b>مستقیم به مردمک نتابان</b>' + pic('tip-eye')),
          T('برای دیدن صلبیه، نور چراغ‌قوه باید مستقیم به مردمک تابانده شود.', false, 'سعی کن نور را مستقیم به مردمک نتابانی؛ روی صلبیه بینداز.'),
          M('ملتحمه رنگ‌پریده با کدام کمبودها مرتبط است؟', ['آهن، فولات و ویتامین B12', 'ویتامین A', 'ویتامین B2 و B6', 'ید'], 'علت غیرتغذیه‌ای: برون‌ده پایین قلب.', null, { k: 'paleconj' }),
          N('z.img'),
          P('هر نشانه را به یافته تغذیه‌ای‌اش وصل کن', [['شب‌کوری', 'ویتامین A'], ['سبوره نازولبیال', 'ویتامین B2، B3 یا B6'], ['ملتحمه رنگ‌پریده', 'آهن، فولات یا B12']])
        ]
      },
      {
        id: 'mn9', title: 'دهان و گردن', icon: '👄', items: [
          L('لب و لثه', pic(['cheilosis', 'angular', 'gums', 'palegum'], ['کیلوزیس', 'استوماتیت زاویه‌ای', 'لثه اسفنجی و خونی', 'لثه کم‌رنگ']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['کیلوزیس و استوماتیت زاویه‌ای', 'ویتامین B2، B3 یا B6؛ آهن', 'دندان مصنوعی نامناسب، تبخال، هوای خشن'], ['لثه اسفنجی و خونریزی‌دهنده', 'ویتامین C', 'ژنژیویت، بیماری پریودنتال، دارو، لوسمی'], ['لثه کم‌رنگ', 'آهن', 'حالت کم‌جریانی']])),
          M('این یافته لثه بیشتر به کدام کمبود اشاره دارد؟', ['ویتامین C', 'آهن', 'روی', 'ویتامین A'], 'لثه اسفنجی و خونریزی‌دهنده ← ویتامین C؛ ولی ژنژیویت ناشی از بهداشت ضعیف را هم رد کن.', null, { k: 'gums' }),
          L('زبان، ضایعه دهان و گردن', pic(['glossitis', 'mouthlesion', 'parotid', 'thyroid'], ['گلوسیت', 'ضایعه دهان', 'بزرگی پاروتید', 'بزرگی تیروئید']) + tbl([['نشانه', 'یافته تغذیه‌ای', 'علت غیرتغذیه‌ای'], ['گلوسیت (زبان ملتهب ارغوانی)', 'B2، B3، B6، B12، فولات؛ کمبود شدید آهن', 'کرون، اورمی، عفونت، بدخیمی'], ['ضایعه دهان', 'روی', 'ضربه، پیوند علیه میزبان، درمان سرطان'], ['بزرگی دوطرفه پاروتید', 'پروتئین ناکافی', 'بولیمی، اوریون، سیروز، شوگرن'], ['بزرگی تیروئید', 'ید', 'گریوز، تیروئیدیت، بدخیمی']])),
          M('بزرگی دوطرفه پاروتید در زن جوان با استفراغ‌های مکرر بیشتر به کدام اشاره دارد؟', ['بولیمی (و پروتئین ناکافی)', 'کمبود ید', 'کمبود ویتامین C', 'کمبود روی'], 'یافته تغذیه‌ای پروتئین ناکافی؛ بولیمی و استفراغ زیاد علت غیرتغذیه‌ای مهم.', null, { k: 'parotid' }),
          L('معاینه دهان', '• از بیمار بخواه <b>زبانش را بیرون بیاورد</b>، به چپ و راست ببرد و بالا ببرد<br>• بلع را ببین یا درباره توانایی بلع بپرس<br>• این سه سؤال علت تغذیه‌ای و غیرتغذیه‌ای را جدا می‌کنند:<br>  ۱. چشایی‌ات تغییر کرده؟<br>  ۲. دهانت می‌سوزد؟<br>  ۳. درد دهان یا خونریزی لثه داری؟<br><small>همکاری کارشناس تغذیه و دندانپزشک برای پیشگیری و درمان توصیه می‌شود.</small>' + pic('tip-mouth')),
          M('زبان صاف، براق و ارغوانی در بیمار مبتلا به کم‌خونی پرنیشیوز. محتمل‌ترین کمبود؟', ['ویتامین B12', 'ویتامین C', 'ید', 'سلنیوم'], 'گلوسیت با کمبود ویتامین‌های B (از جمله B12) و فولات.', null, { k: 'glossitis' }),
          N('z.img'),
          O('فهرست بررسی NFPE را از سر تا پا مرتب کن', ['مو و گیجگاه', 'دهان، دندان، لثه و چشم', 'قفسه سینه و شانه', 'پشت و خط میدآگزیلاری', 'سه‌سر، دست‌ها و ناخن‌ها', 'ران، ساق و پاها'], 'سر، بالاتنه، پایین‌تنه؛ پوست در تمام مدت. همه نواحی دوطرفه معاینه می‌شوند.')
        ]
      }
    ]
  });

  /* آزمون‌های جمع‌بندی */
  EA.exam = {
    checkpoint: { count: 10, gens: 3, pass: 0.7 },
    final: { perWorld: 5, gensPerWorld: 2, pass: 0.8, minutes: 25 }
  };
  EA.PER_LEVEL = 3;
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۵ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'hx-0', w: 'hx', lv: 0, name: 'دفترچه', title: 'ثبت‌کننده تاریخچه', shape: 'clipboard', color: '#FFE2CF', acc: ['sparkle'], bio: 'پیش از هر معاینه، پرونده را ورق می‌زند: تاریخچه، علائم حیاتی، آزمایش‌ها، دریافت و عملکرد. می‌گوید «پرونده کامل نیست، ولی جاهای خالی را نشانت می‌دهد».' },
    { id: 'hx-1', w: 'hx', lv: 1, name: 'ترازوک', title: 'نگهبان درصد کاهش وزن', shape: 'scale', color: '#FF7A45', acc: ['headband'], bio: 'همیشه درصد را از وزن معمول حساب می‌کند، نه وزن فعلی. از ادم بدش می‌آید؛ چون کاهش وزن واقعی را از چشمش پنهان می‌کند.' },
    { id: 'hx-2', w: 'hx', lv: 2, name: 'دستکش آبی', title: 'استاد نگاه و لمس', shape: 'glove', color: '#5B8CFF', acc: ['crown'], bio: 'اول بهداشت دست، بعد رضایت، بعد نگاه کلی، و آخر لمس آرام از سر تا پا. هر دو طرف بدن را مقایسه می‌کند؛ تحلیل تغذیه‌ای قرینه است.' },
    { id: 'inf-0', w: 'inf', lv: 0, name: 'شعله', title: 'التهاب حاد', shape: 'flame', color: '#FF9F43', acc: [], bio: 'در سپسیس، سوختگی و جراحی بزرگ شعله‌ور می‌شود و عضله را با سرعت می‌سوزاند. برای همین در زمینه حاد، تحلیل «متوسط» هم شدید حساب می‌شود.' },
    { id: 'inf-1', w: 'inf', lv: 1, name: 'دماسنج', title: 'نگهبان ۳۷٫۷', shape: 'thermo', color: '#9B84F0', acc: ['glasses'], bio: 'از ۳۷٫۷ درجه به بالا را تب می‌داند؛ ولی می‌داند استامینوفن می‌تواند او را فریب دهد. نبض بالای ۱۰۰ و تنفس بالای ۲۰ دوستان همیشگی‌اش‌اند.' },
    { id: 'inf-2', w: 'inf', lv: 2, name: 'کدنویس', title: 'استاد E43 و E44.0', shape: 'shield', color: '#7B5CE0', acc: ['cape', 'glasses'], bio: 'هیچ‌وقت نمی‌نویسد «تشخیص دادم»؛ می‌نویسد «پیشنهاد می‌شود». اتیولوژی، شدت و شواهد هر ویژگی را خلاصه و بدون تناقض ثبت می‌کند.' },
    { id: 'mf-0', w: 'mf', lv: 0, name: 'استخوانک', title: 'ترقوه کنجکاو', shape: 'bone', color: '#FBF1E3', acc: [], bio: 'وقتی عضله‌های اطرافش آب می‌شوند، از زیر پوست سرک می‌کشد. اگر او و آکرومیون هر دو بیرون زده باشند و شانه مربعی شده باشد، تحلیل شدید است.' },
    { id: 'mf-1', w: 'mf', lv: 1, name: 'وزنه', title: 'قهرمان چهارسر', shape: 'kettle', color: '#E5476B', acc: ['headband'], bio: 'ران گرد و ساق پر را دوست دارد. ولی می‌داند پای گچ‌گرفته یا فلج، لاغرتر می‌شود بی‌آنکه ربطی به تغذیه داشته باشد.' },
    { id: 'mf-2', w: 'mf', lv: 2, name: 'تمپورا', title: 'سلطان گیجگاه', shape: 'blob', color: '#C22B50', acc: ['crown', 'glasses'], bio: 'از روبه‌رو و نیم‌رخ نگاهت می‌کند. گیجگاه گود، زیر چشم تیره و استخوان‌های مشخص صورت را از دور تشخیص می‌دهد.' },
    { id: 'fl-0', w: 'fl', lv: 0, name: 'قطره', title: 'آب گمشده', shape: 'drop', color: '#7FD3FF', acc: ['sparkle'], bio: 'وقتی بدن خشک می‌شود، وزن کاذب پایین می‌آید و BUN به کراتینین بالای ۲۰ می‌رود. پرشدن مویرگی را زیر ۲ ثانیه دوست دارد.' },
    { id: 'fl-1', w: 'fl', lv: 1, name: 'پفکی', title: 'ادم گوده‌گذار', shape: 'cloud', color: '#A9E2F7', acc: [], bio: 'اگر ۵ ثانیه فشارش بدهی، گوده‌ای ۲ تا ۸ میلی‌متری می‌سازد. وقتی بیمار به پشت می‌خوابد، به ران و ساکروم کوچ می‌کند.' },
    { id: 'fl-2', w: 'fl', lv: 2, name: 'تعادل', title: 'نگهبان مایعات', shape: 'heart', color: '#18A6D9', acc: ['cape'], bio: 'ادم را با جدول داروها، DVT و نارسایی قلب می‌سنجد و دهیدراتاسیون را با دهان، چشم، تورگور و ناخن. هیچ وزنی را بی‌حساب مایع قبول نمی‌کند.' },
    { id: 'mn-0', w: 'mn', lv: 0, name: 'جامار', title: 'قدرت‌سنج', shape: 'dyna', color: '#12A594', acc: [], bio: 'سه بار راست، سه بار چپ، یکی در میان، با ۱۵ ثانیه استراحت. آرنج ۹۰ درجه را دوست دارد و بازوی کشیده به جلو را نه!' },
    { id: 'mn-1', w: 'mn', lv: 1, name: 'هویجک', title: 'دوست ویتامین A', shape: 'carrot', color: '#FF8C1A', acc: ['leaves'], bio: 'از لکه بیتو، کراتومالاسی و شب‌کوری متنفر است. می‌گوید چشم‌ها را با چراغ‌قوه ببین، ولی نور را مستقیم به مردمک نتابان.' },
    { id: 'mn-2', w: 'mn', lv: 2, name: 'دندونی', title: 'نگهبان لثه', shape: 'tooth', color: '#FFF7EA', acc: ['crown'], bio: 'لثه اسفنجی و خونریزی‌دهنده را نشانه کمبود ویتامین C می‌داند؛ ولی اول می‌پرسد مسواک می‌زنی؟ همیشه علت غیرتغذیه‌ای را هم در نظر دارد.' }
  ];

  /* متن انگلیسی هر کاراکتر؛ نام، لقب و معرفی با زبان فعلی عوض می‌شوند */
  const EN = {
    'hx-0': ['Clippy', 'History Keeper', 'Flips through the chart before every exam: history, vital signs, labs, intake and function. Says: “The chart isn’t complete, but it shows you the gaps.”'],
    'hx-1': ['Scaley', 'Guardian of Weight Loss', 'Always calculates the percentage from usual weight, never current weight. Dislikes edema, because it hides true weight loss.'],
    'hx-2': ['Blue Glove', 'Master of Inspection and Palpation', 'Hand hygiene first, then consent, then the general survey, and finally gentle palpation from head to toe. Compares both sides: nutritional wasting is symmetric.'],
    'inf-0': ['Blaze', 'Acute Inflammation', 'Flares up in sepsis, burns and major surgery and burns through muscle fast. That is why in acute illness even “moderate” wasting counts as severe.'],
    'inf-1': ['Thermo', 'Guardian of 37.7', 'Calls anything from 37.7 °C up a fever, but knows acetaminophen can fool him. A pulse over 100 and breathing over 20 are his best friends.'],
    'inf-2': ['The Coder', 'Master of E43 and E44.0', 'Never writes “I diagnosed”; writes “recommended”. Documents etiology, severity and the evidence for each characteristic, concisely and without contradictions.'],
    'mf-0': ['Bony', 'The Curious Clavicle', 'Peeks out from under the skin when the muscles around him melt away. If he and the acromion both stick out and the shoulder looks square, the wasting is severe.'],
    'mf-1': ['Kettle', 'Quadriceps Champion', 'Loves a round thigh and a full calf, but knows a casted or paralyzed leg gets thinner for reasons that have nothing to do with nutrition.'],
    'mf-2': ['Tempora', 'Queen of the Temple', 'Looks at you from the front and in profile. Spots a hollow temple, dark under-eye circles and well-defined facial bones from across the room.'],
    'fl-0': ['Droplet', 'The Missing Water', 'When the body dries out, weight drops falsely and the BUN-to-creatinine ratio climbs above 20. Likes capillary refill under 2 seconds.'],
    'fl-1': ['Puffy', 'Pitting Edema', 'Press him for 5 seconds and he leaves a 2- to 8-mm pit. When the patient lies on their back, he moves to the thighs and sacrum.'],
    'fl-2': ['Balance', 'Guardian of Fluids', 'Checks edema against the drug table, DVT and heart failure, and dehydration against mouth, eyes, turgor and nails. Never accepts a weight without accounting for fluid.'],
    'mn-0': ['Jamar', 'The Strength Meter', 'Three times right, three times left, alternating, with 15 seconds’ rest. Loves a 90° elbow and hates an arm stretched out in front!'],
    'mn-1': ['Carrotina', 'Friend of Vitamin A', 'Can’t stand Bitot’s spots, keratomalacia or night blindness. Says: look at the eyes with a penlight, but don’t shine it straight into the pupil.'],
    'mn-2': ['Toothy', 'Guardian of the Gums', 'Sees spongy, bleeding gums as a sign of vitamin C deficiency, but first asks: do you brush? Always keeps non-nutrient causes in mind.']
  };
  CHARS.forEach(c => {
    const fa = { name: c.name, title: c.title, bio: c.bio }, en = EN[c.id];
    ['name', 'title', 'bio'].forEach((k, i) => Object.defineProperty(c, k, { get: () => (EA.lang === 'en' ? en[i] : fa[k]), enumerable: true }));
  });

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
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#8E2C6E"/><path d="M60 80 L60 146" stroke="#6E1F54" stroke-width="3"/>`,
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

/* نگار — راند بیمارستان: کیس‌های چندمرحله‌ای ارزیابی و مستندسازی سوءتغذیه
 * هر کیس: شرح حال، پرونده (chart)، گاهی یک تصویر (fig) و چند مرحله تصمیم‌گیری.
 * پاسخ‌ها با تابع EA.aspen.classify هم‌خوان‌اند (آزمون محتوا این را بررسی می‌کند: o). */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const S = (stage, q, ans, tol, unit, why, hint) => ({ t: 'numS', stage, q, ans, tol, unit, why, hint });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const SEV = 'سوءتغذیه پروتئین-کالری شدید (E43)', MOD = 'سوءتغذیه پروتئین-کالری متوسط (E44.0)', NONE = 'معیارهای سوءتغذیه کامل نیست';

  EA.rounds = [
    /* ================= آمادگی و ارزیابی ================= */
    {
      id: 'r1', w: 'hx', title: 'سرطان معده و بی‌اشتهایی', who: 'زن ۶۲ ساله، سرطان معده تحت شیمی‌درمانی',
      brief: 'از دو ماه پیش با شروع شیمی‌درمانی اشتهایش کم شده و می‌گوید «نصف همیشه» می‌خورد. لباس‌هایش گشاد شده‌اند. در معاینه، گیجگاه فرورفتگی خفیف و ترقوه برجسته‌تر از معمول است.',
      chart: [['وزن ۶ ماه پیش', '۶۸ kg'], ['وزن فعلی', '۶۰ kg'], ['دریافت', 'حدود ۵۵٪ نیاز، ۲ ماه'], ['معاینه', 'تحلیل عضله خفیف تا متوسط']],
      o: { ctx: 'chronic', intake: { pct: 55, days: 60 }, wt: { pct: 11.8, days: 180 }, muscle: 1 },
      steps: [
        M('زمینه', 'سوءتغذیه این بیمار در کدام زمینه است؟', ['بیماری مزمن', 'بیماری یا آسیب حاد', 'شرایط اجتماعی', 'نمی‌توان تعیین کرد'], 'سرطان در زمینه مزمن است؛ التهاب طولانی با شدت کمتر.'),
        S('محاسبه', 'درصد کاهش وزن در ۶ ماه چند است؟', 11.8, 0.3, '%', '(۶۸ − ۶۰) ÷ ۶۸ × ۱۰۰ = <b>۱۱٫۸٪</b>', '(وزن معمول − وزن فعلی) ÷ وزن معمول × ۱۰۰'),
        M('کاهش وزن', 'این کاهش وزن از کدام تشخیص پشتیبانی می‌کند؟', ['سوءتغذیه شدید', 'سوءتغذیه متوسط', 'معیار را کامل نمی‌کند'], 'مزمن: بیش از ۱۰٪ در ۶ ماه ← شدید.'),
        M('دریافت', 'دریافت ۵۵٪ نیاز به مدت ۲ ماه در زمینه مزمن؟', ['پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط', 'معیار را کامل نمی‌کند'], 'مزمن: ۷۵٪ یا کمتر برای دست‌کم ۱ ماه.'),
        M('تشخیص', 'چه تشخیصی را پیشنهاد می‌کنی؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'دو ویژگی شدید (کاهش وزن و دریافت) + تحلیل عضله خفیف (پشتیبان متوسط) ← شدید.')
      ]
    },
    {
      id: 'r2', w: 'hx', title: 'پیرمرد تنها', who: 'مرد ۸۰ ساله، تنها زندگی می‌کند، زوال عقل خفیف',
      brief: 'پسرش می‌گوید از ۴ ماه پیش که همسرش فوت کرده، روزی یک وعده می‌خورد. بیمار خودش به سؤال‌ها جواب‌های کوتاه می‌دهد. نشانه التهاب ندارد. گیجگاه گود است و بین شست و اشاره فرورفتگی آشکار دیده می‌شود.',
      chart: [['وزن ۴ ماه پیش', '۶۳ kg'], ['وزن فعلی', '۵۸ kg'], ['دریافت', 'حدود ۴۵٪ نیاز، ۴ ماه'], ['دما، نبض، CRP', 'طبیعی']],
      fig: { k: 'dors-s' },
      o: { ctx: 'social', intake: { pct: 45, days: 120 }, wt: { pct: 7.9, days: 120 }, muscle: 3 },
      steps: [
        M('مصاحبه', 'بهترین منبع تاریخچه غذایی در این بیمار کیست؟', ['خود بیمار همراه با پسرش به عنوان مراقب', 'فقط پرونده بیمارستان', 'فقط خود بیمار', 'نیازی به تاریخچه نیست'], 'وقتی بیمار به‌خوبی نمی‌تواند گزارش دهد، خانواده یا مراقب اطلاعات و راستی‌آزمایی می‌دهند.'),
        M('زمینه', 'زمینه سوءتغذیه؟', ['شرایط اجتماعی یا محیطی', 'بیماری مزمن', 'بیماری حاد', 'بدون سوءتغذیه'], 'تنهایی، سوگ و زوال عقل بدون التهاب فعال ← اجتماعی یا محیطی.'),
        S('محاسبه', 'درصد کاهش وزن؟', 7.9, 0.3, '%', '(۶۳ − ۵۸) ÷ ۶۳ × ۱۰۰ = <b>۷٫۹٪</b> در ۴ ماه'),
        M('کاهش وزن', 'کاهش ۷٫۹٪ در ۴ ماه (زمینه اجتماعی) چه معیاری را کامل می‌کند؟', ['معیار را کامل نمی‌کند؛ در پنجره ۶ ماهه آستانه ۱۰٪ است', 'سوءتغذیه شدید', 'سوءتغذیه متوسط'], '۴ ماه از پنجره ۳ ماهه گذشته، پس با پنجره ۶ ماهه (۱۰٪) مقایسه می‌شود؛ ۷٫۹٪ کمتر است. ولی وزن را پیگیری کن.'),
        M('تشخیص', 'با دریافت ۴۵٪ برای ۴ ماه و تحلیل شدید عضله، چه پیشنهاد می‌کنی؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'اجتماعی: دریافت ۵۰٪ یا کمتر برای ۱ ماه ← شدید؛ تحلیل شدید ← شدید. دو ویژگی شدید.')
      ]
    },
    {
      id: 'r3', w: 'hx', title: 'روز نهم پس از ویپل', who: 'مرد ۵۴ ساله، پانکراتیکودئودنکتومی (ویپل)',
      brief: 'پس از جراحی ۴ روز ناشتا بود و از آن به بعد کمتر از نصف رژیم را می‌خورد؛ در کل ۸ روز دریافت ۵۰٪ یا کمتر. وزن در یک هفته از ۸۱ به ۷۹٫۵ کیلوگرم رسیده است. پد چربی زیر چشم کمی گود است و دو مچ پا ادم ۱+ دارند.',
      chart: [['وزن پیش از جراحی', '۸۱ kg'], ['وزن امروز', '۷۹٫۵ kg'], ['دریافت', '۵۰٪ یا کمتر، ۸ روز'], ['ادم', '۱+ دو مچ پا'], ['چربی', 'از دست رفتن خفیف']],
      o: { ctx: 'acute', intake: { pct: 50, days: 8 }, wt: { pct: 1.85, days: 7 }, fat: 1, fluid: 1 },
      steps: [
        M('زمینه', 'زمینه سوءتغذیه؟', ['بیماری یا آسیب حاد', 'بیماری مزمن', 'شرایط اجتماعی', 'نمی‌توان تعیین کرد'], 'جراحی بزرگ: التهاب شدید و پرشدت.'),
        S('محاسبه', 'درصد کاهش وزن در یک هفته؟', 1.85, 0.1, '%', '(۸۱ − ۷۹٫۵) ÷ ۸۱ × ۱۰۰ = <b>۱٫۸۵٪</b>'),
        M('کاهش وزن', 'این کاهش وزن (زمینه حاد، یک هفته)؟', ['پشتیبان سوءتغذیه متوسط', 'پشتیبان سوءتغذیه شدید', 'معیار را کامل نمی‌کند'], 'حاد: ۱ تا ۲٪ در ۱ هفته ← متوسط؛ بیش از ۲٪ ← شدید.'),
        T('تفسیر', 'ادم ۱+ مچ پا ممکن است کاهش وزن واقعی را کمی پنهان کرده باشد.', true, 'درست؛ مایع وزن اضافه می‌کند. شاید کاهش وزن واقعی بیش از ۱٫۸۵٪ باشد.'),
        M('تشخیص', 'چه تشخیصی را پیشنهاد می‌کنی؟', [MOD, SEV, NONE, 'سوءتغذیه خفیف (E44.1)'], 'دریافت ≤۵۰٪ برای ≥۵ روز ← شدید (۱ ویژگی شدید). کاهش وزن، چربی خفیف و ادم خفیف ← متوسط. برای «شدید» دو ویژگی شدید لازم است ← متوسط.')
      ]
    },
    /* ================= التهاب و مستندسازی ================= */
    {
      id: 'r4', w: 'inf', title: 'شوک سپتیک در ICU', who: 'زن ۴۵ ساله، پریتونیت و شوک سپتیک',
      brief: 'روز سوم ICU، زیر تهویه مکانیکی. تب، تاکی‌کاردی و نیاز به وازوپرسور دارد. پزشک می‌پرسد آیا آلبومین پایین یعنی بیمار سوءتغذیه دارد.',
      chart: [['دما', '۳۸٫۹ °C'], ['نبض', '۱۱۸ در دقیقه'], ['CRP', '۱۸ mg/dL'], ['آلبومین', '۲٫۳ g/dL'], ['قند', '۲۱۰ mg/dL']],
      steps: [
        M('علائم حیاتی', 'کدام علائم حیاتی به نفع التهاب‌اند؟', ['تب ۳۸٫۹ و نبض ۱۱۸', 'فقط تب', 'هیچ‌کدام', 'فقط نبض'], 'تب ≥۳۷٫۷ و نبض بیش از ۱۰۰.'),
        M('آلبومین', 'بهترین پاسخ به پزشک درباره آلبومین ۲٫۳؟', ['آلبومین پایین در این بیمار بیشتر نشانه التهاب است و به‌تنهایی سوءتغذیه را ثابت نمی‌کند', 'بله، آلبومین زیر ۳ یعنی سوءتغذیه شدید', 'آلبومین پایین یعنی دهیدراتاسیون', 'آلبومین به التهاب ربطی ندارد'], 'آلبومین نشانگر التهاب و وضعیت مایع است؛ جزو شش ویژگی نیست.'),
        M('زمینه', 'اگر سوءتغذیه پیدا شود، در کدام زمینه است؟', ['بیماری یا آسیب حاد', 'بیماری مزمن', 'شرایط اجتماعی'], 'سپسیس و جراحی بزرگ: التهاب شدید و حاد.'),
        M('پرونده', 'در بخش «نشانگرهای التهاب» الگوی پرونده، کدام موارد را تیک می‌زنی؟', ['تب، تاکی‌کاردی، سپسیس، CRP بالا، هیپوآلبومینمی، هیپرگلیسمی', 'فقط سپسیس', 'کاهش وزن و تحلیل عضله', 'هیچ‌کدام؛ هنوز زود است'], 'همه این‌ها جزو نشانگرهای التهاب در الگوی پرونده هستند.'),
        T('پایش', 'چون تحلیل عضله در ICU ممکن است در هفته اول آشکار شود، این بیمار باید زود و سریالی معاینه شود.', true, 'درست؛ تحلیل عضله در ICU سریع است.')
      ]
    },
    {
      id: 'r5', w: 'inf', title: 'دیابت و بیکاری', who: 'مرد ۵۰ ساله، دیابت نوع ۲',
      brief: 'سه ماه پیش کارش را از دست داده و دو ماه است فقط نان و چای می‌خورد؛ پول خرید انسولین هم ندارد. تب ندارد و CRP طبیعی است. گیجگاه و چربی زیر سه‌سر کمی کم شده‌اند.',
      chart: [['وزن ۲ ماه پیش', '۷۴ kg'], ['وزن فعلی', '۷۰ kg'], ['دریافت', 'حدود ۵۰٪ نیاز، ۲ ماه'], ['قند ناشتا', '۱۸۵ mg/dL'], ['CRP', '۰٫۴ mg/dL']],
      o: { ctx: 'social', intake: { pct: 50, days: 60 }, wt: { pct: 5.4, days: 60 }, muscle: 1, fat: 1 },
      steps: [
        M('زمینه', 'زمینه سوءتغذیه این بیمار؟', ['شرایط اجتماعی یا محیطی', 'بیماری مزمن (دیابت)', 'بیماری حاد', 'بدون سوءتغذیه'], 'دیابتی که شغلش را از دست داده؛ علت اصلی مشکل اقتصادی است و التهاب فعال ندارد.'),
        M('قند', 'قند ناشتای ۱۸۵ در این بیمار بیشتر نشانه چیست؟', ['کنترل نشدن دیابت به‌خاطر نداشتن انسولین', 'التهاب حاد شدید', 'سوءتغذیه شدید', 'دهیدراتاسیون'], 'هیپرگلیسمی علت‌های زیادی دارد؛ این‌جا دیابت درمان‌نشده محتمل‌تر از التهاب است (CRP طبیعی).'),
        M('کاهش وزن', 'کاهش ۵٫۴٪ در ۲ ماه (زمینه اجتماعی)؟', ['معیار را کامل نمی‌کند؛ پنجره ۳ ماهه آستانه ۷٫۵٪ دارد', 'پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط'], '۲ ماه از پنجره ۱ ماهه گذشته؛ با پنجره ۳ ماهه (۷٫۵٪) مقایسه می‌شود.'),
        M('دریافت', 'دریافت ۵۰٪ برای ۲ ماه در زمینه اجتماعی؟', ['پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط', 'معیار را کامل نمی‌کند'], 'اجتماعی: ۵۰٪ یا کمتر برای دست‌کم ۱ ماه ← شدید.'),
        M('تشخیص', 'چه تشخیصی را پیشنهاد می‌کنی؟', [MOD, SEV, NONE, 'سوءتغذیه خفیف (E44.1)'], 'یک ویژگی شدید (دریافت) و دو ویژگی متوسط (عضله و چربی خفیف) ← متوسط.'),
        M('مداخله', 'کدام اقدام در برنامه مراقبت او مهم‌تر است؟', ['ارجاع به مددکار اجتماعی همراه برنامه تغذیه و هماهنگی دارو با پزشک', 'فقط مکمل خوراکی پرکالری', 'ترخیص بدون پیگیری', 'تغذیه وریدی'], 'علت ریشه‌ای اقتصادی است؛ بدون حل آن، مداخله تغذیه‌ای پایدار نمی‌ماند.')
      ]
    },
    {
      id: 'r6', w: 'inf', title: 'نوشتن یادداشت', who: 'زن ۷۰ ساله، نارسایی مزمن قلب، بستری برای تنگی نفس',
      brief: 'ارزیابی را تمام کرده‌ای: دریافت ۶۵٪ برای ۲ ماه، ادم ۲+ هر دو پا که وزن را قابل اعتماد نمی‌کند، تحلیل شدید گیجگاه و ترقوه، و چربی زیر سه‌سر کم ولی نه شدید. حالا باید یادداشت پرونده را بنویسی.',
      chart: [['دریافت', '۶۵٪ نیاز، ۲ ماه'], ['ادم', '۲+ دوطرفه پاها'], ['عضله', 'تحلیل شدید (گیجگاه، ترقوه)'], ['چربی', 'خفیف تا متوسط']],
      o: { ctx: 'chronic', intake: { pct: 65, days: 60 }, muscle: 3, fat: 2, fluid: 2 },
      steps: [
        M('تشخیص', 'تشخیص پیشنهادی؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'مزمن: دریافت ≤۷۵٪ برای ≥۱ ماه ← شدید؛ تحلیل شدید عضله ← شدید. دو ویژگی شدید.'),
        M('نوشتن', 'کدام جمله برای پرونده بهتر است؟', ['سوءتغذیه پروتئین-کالری شدید در زمینه بیماری مزمن پیشنهاد می‌شود، بر پایه دریافت ۶۵٪ نیاز برای ۲ ماه و تحلیل شدید عضله گیجگاه و ترقوه؛ وزن به‌خاطر ادم ۲+ قابل اتکا نیست.', 'بیمار سوءتغذیه شدید دارد.', 'تشخیص سوءتغذیه شدید داده شد.', 'بیمار ظاهراً لاغر است و احتمالاً سوءتغذیه دارد.'], 'پیشنهاد، اتیولوژی، شدت، شواهد هر ویژگی و توضیح محدودیت وزن.'),
        O('ترتیب', 'بخش‌های یادداشت را مرتب کن', ['تشخیص پیشنهادی و زمینه', 'شواهد هر ویژگی', 'نشانگرهای التهاب', 'مداخله تغذیه‌ای', 'برنامه پایش و ارزشیابی'], 'الگوی پرونده: از نتیجه به شواهد، سپس درمان و پایش.'),
        T('اخلاق حرفه‌ای', 'اگر پزشک با پیشنهاد موافق باشد، این موافقت در یادداشت پزشک ثبت می‌شود.', true, 'درست؛ تشخیص نهایی با پزشک است.'),
        M('ادم', 'تجمع مایع ۲+ در این زمینه مزمن را چطور ثبت می‌کنی؟', ['تجمع مایع متوسط در اندام تحتانی؛ پشتیبان سوءتغذیه متوسط', 'تجمع مایع شدید', 'ثبت نمی‌کنم', 'آسیت'], 'الگوی پرونده: ۲+ = متوسط؛ محل: اندام تحتانی. مزمن: خفیف یا متوسط ← پشتیبان متوسط.')
      ]
    },
    /* ================= عضله و چربی ================= */
    {
      id: 'r7', w: 'mf', title: 'تروما و ادم پاها', who: 'مرد ۳۵ ساله، تصادف رانندگی، روز دهم ICU',
      brief: 'شکستگی لگن و ران دارد و پاها در آتل و متورم‌اند. لوله تراشه برداشته شده و حالا می‌تواند بنشیند. دریافت ۱۰ روز است حدود ۴۰٪ نیاز است.',
      chart: [['دریافت', '۴۰٪ نیاز، ۱۰ روز'], ['پاها', 'آتل و ادم'], ['وضعیت', 'نشسته، هوشیار']],
      fig: { k: 'face-m' },
      o: { ctx: 'acute', intake: { pct: 40, days: 10 }, muscle: 2 },
      steps: [
        M('کجا', 'عضله را بیشتر کجا معاینه می‌کنی؟', ['بالاتنه: گیجگاه، ترقوه، شانه، دست‌ها', 'فقط ران‌ها', 'فقط ساق پا', 'معاینه ممکن نیست'], 'پاها آتل و ادم دارند؛ بالاتنه کمتر درگیر ادم و در دسترس‌تر است.'),
        M('تصویر', 'گیجگاه و زیر چشم او شبیه این تصویر است. درجه؟', ['خفیف تا متوسط', 'طبیعی', 'شدید'], 'فرورفتگی خفیف گیجگاه و حلقه کمی تیره زیر چشم.', null, { k: 'face-m' }),
        M('ترقوه', 'ترقوه برجسته‌تر و آکرومیون کمی بیرون‌زده است. در زمینه حاد، تحلیل «متوسط» عضله؟', ['پشتیبان سوءتغذیه شدید', 'پشتیبان سوءتغذیه متوسط', 'معیار را کامل نمی‌کند'], 'در زمینه حاد: تحلیل متوسط ← سوءتغذیه شدید.'),
        M('تشخیص', 'با دریافت ۴۰٪ برای ۱۰ روز؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'دریافت ≤۵۰٪ ≥۵ روز ← شدید + تحلیل متوسط در حاد ← شدید.'),
        T('دام', 'لاغر شدن ران شکسته نسبت به ران سالم، شاهد سوءتغذیه است.', false, 'تحلیل یک‌طرفه ناشی از شکستگی و بی‌حرکتی است؛ تحلیل تغذیه‌ای قرینه است.')
      ]
    },
    {
      id: 'r8', w: 'mf', title: 'چاقی پنهان‌کننده', who: 'زن ۵۸ ساله، BMI ۳۴، بیماری کرون فعال',
      brief: 'چهار ماه است با درد شکم و اسهال کمتر می‌خورد (حدود ۶۵٪ نیاز). می‌گوید «هنوز چاقم، پس سوءتغذیه ندارم». پشت دست و بین شست و اشاره فرورفتگی آشکار دارد و قدرت چنگش به‌طور قابل اندازه‌گیری کم است.',
      chart: [['BMI', '۳۴ kg/m²'], ['دریافت', '۶۵٪ نیاز، ۴ ماه'], ['دست', 'فرورفتگی آشکار بین استخوان‌ها'], ['قدرت چنگش', 'کم']],
      fig: { k: 'dors-s' },
      o: { ctx: 'chronic', intake: { pct: 65, days: 120 }, muscle: 3, grip: true },
      steps: [
        M('چاقی', 'جواب درست به جمله «هنوز چاقم پس سوءتغذیه ندارم»؟', ['چاقی تحلیل عضله را پنهان می‌کند ولی رد نمی‌کند؛ عضله دست شما کم شده است', 'درست است؛ با BMI بالا سوءتغذیه ممکن نیست', 'باید اول وزن کم کنید', 'فقط آزمایش خون تعیین می‌کند'], 'چربی زیاد دیدن و لمس عضله را محدود می‌کند؛ نواحی کم‌چربی مثل دست و گیجگاه کمک می‌کنند.'),
        M('تصویر', 'پشت دست او شبیه این تصویر است. درجه؟', ['شدید', 'خفیف تا متوسط', 'طبیعی'], 'فرورفتگی بین استخوان‌ها و استخوان‌های برجسته ← شدید.', null, { k: 'dors-s' }),
        M('زمینه', 'زمینه؟', ['بیماری مزمن', 'بیماری حاد', 'شرایط اجتماعی'], 'کرون فعال طولانی: بیماری مزمن (شعله‌ورشدن شدید می‌تواند حاد روی مزمن باشد).'),
        M('چنگش', 'قدرت چنگش کم در این بیمار از چه پشتیبانی می‌کند؟', ['فقط سوءتغذیه شدید', 'سوءتغذیه متوسط', 'هیچ‌چیز', 'فقط در زمینه حاد معنا دارد'], 'قدرت چنگش کم فقط پشتیبان سوءتغذیه شدید است.'),
        M('تشخیص', 'تشخیص پیشنهادی؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'دریافت ≤۷۵٪ ≥۱ ماه (شدید)، تحلیل شدید عضله (شدید) و چنگش کم (شدید) ← شدید.')
      ]
    },
    {
      id: 'r9', w: 'mf', title: 'سکته و دست لاغر', who: 'مرد ۶۸ ساله، سه ماه پس از سکته مغزی نیمکره چپ',
      brief: 'دست و پای راستش ضعیف و لاغرتر از سمت چپ است. غذا را با کمک می‌خورد و دریافتش حدود ۹۰٪ نیاز است. وزنش در ۳ ماه ۲٪ کم شده. گیجگاه و ترقوه دو طرف طبیعی‌اند.',
      chart: [['دریافت', '۹۰٪ نیاز'], ['کاهش وزن', '۲٪ در ۳ ماه'], ['سمت راست', 'تحلیل و ضعف'], ['سمت چپ', 'طبیعی']],
      o: { ctx: 'chronic', intake: { pct: 90, days: 90 }, wt: { pct: 2, days: 90 } },
      steps: [
        M('تقارن', 'تحلیل یک‌طرفه سمت راست را چطور تفسیر می‌کنی؟', ['ناشی از سکته و بی‌حرکتی؛ تغذیه‌ای نیست', 'سوءتغذیه شدید', 'سوءتغذیه متوسط', 'ادم سمت چپ'], 'تحلیل تغذیه‌ای قرینه است؛ تفاوت یک‌طرفه به نفع علت عصبی است.'),
        M('معاینه', 'برای ارزیابی تغذیه‌ای عضله کدام سمت را بیشتر مبنا قرار می‌دهی؟', ['سمت سالم (چپ) و نواحی مرکزی مثل گیجگاه', 'فقط سمت راست', 'هیچ سمتی', 'فقط ساق پا'], 'سمت فلج نماینده وضعیت تغذیه نیست.'),
        M('عملکرد', 'ضعف چنگش دست راست در الگوی پرونده چطور ثبت می‌شود؟', ['ظرفیت عملکردی: بی‌ارتباط با وضعیت تغذیه', 'قدرت چنگش کاهش‌یافته؛ پشتیبان شدید', 'طبیعی', 'پس‌رفت‌کرده به‌خاطر سوءتغذیه'], 'الگوی پرونده گزینه «بی‌ارتباط با تغذیه» دارد.'),
        M('تشخیص', 'تشخیص پیشنهادی؟', [NONE, MOD, SEV, 'سوءتغذیه خفیف (E44.1)'], 'دریافت ۹۰٪ و کاهش وزن ۲٪ در ۳ ماه هیچ آستانه‌ای را کامل نمی‌کنند؛ تحلیل یک‌طرفه هم تغذیه‌ای نیست.'),
        T('پایش', 'چون بیمار برای خوردن به کمک نیاز دارد، باید دریافتش پایش شود.', true, 'درست؛ خطر کاهش دریافت در آینده بالاست.')
      ]
    },
    /* ================= مایعات ================= */
    {
      id: 'r10', w: 'fl', title: 'سیروز و آسیت', who: 'مرد ۵۹ ساله، سیروز الکلی',
      brief: 'شکمش بزرگ شده و ادم ۳+ تا زانو دارد. وزنش در ۳ ماه ۴ کیلوگرم بیشتر شده و خوشحال است که «چاق شده». گیجگاه گود است، ترقوه و آکرومیون بسیار برجسته‌اند و شانه‌ها مربعی شده‌اند. دریافت ۴۵٪ نیاز برای ۲ ماه.',
      chart: [['وزن', '۴ kg افزایش در ۳ ماه'], ['شکم', 'آسیت با موج مایع'], ['ادم', '۳+ تا زانو'], ['عضله', 'تحلیل شدید بالاتنه'], ['دریافت', '۴۵٪ نیاز، ۲ ماه']],
      fig: { k: 'chest-s' },
      o: { ctx: 'chronic', intake: { pct: 45, days: 60 }, muscle: 3, fluid: 3 },
      steps: [
        M('وزن', 'افزایش وزن ۴ کیلوگرمی را چطور تفسیر می‌کنی؟', ['تجمع مایع (آسیت و ادم) که کاهش وزن واقعی را پنهان کرده', 'بهبود وضعیت تغذیه', 'افزایش توده عضله', 'خطای ترازو'], 'مایع وزن را بالا می‌برد و تحلیل بافت را می‌پوشاند.'),
        M('اصطلاح', 'تجمع مایع در شکم با ماتیته متحرک و موج مایع چه نام دارد؟', ['آسیت', 'آنازارکا', 'ادم براونی', 'لنف‌ادم'], 'تجمع مایع در شکم با ماتیته متحرک و موج مایع: آسیت.'),
        M('ادم', 'ادم ۳+ در زمینه مزمن از چه پشتیبانی می‌کند؟', ['سوءتغذیه شدید', 'سوءتغذیه متوسط', 'هیچ‌کدام'], 'الگوی پرونده: ۳+ تا ۴+ شدید؛ مزمن: شدید ← شدید.'),
        M('تصویر', 'شانه و ترقوه بیمار شبیه این تصویر است. درجه؟', ['شدید', 'خفیف تا متوسط', 'طبیعی'], 'ترقوه بیرون‌زده و شانه مربعی.', null, { k: 'chest-s' }),
        M('تشخیص', 'تشخیص پیشنهادی؟', [SEV, MOD, NONE, 'سوءتغذیه خفیف (E44.1)'], 'دریافت ≤۷۵٪ ≥۱ ماه، تحلیل شدید عضله و تجمع مایع شدید ← سه ویژگی شدید.')
      ]
    },
    {
      id: 'r11', w: 'fl', title: 'سالمند با اسهال', who: 'زن ۸۲ ساله، سه روز اسهال و استفراغ',
      brief: 'خواب‌آلود است، زبانش شیاردار و خشک و لب‌ها ترک‌خورده‌اند. پرشدن مویرگی ۳ ثانیه است. وزنش امروز ۳ کیلوگرم کمتر از وزن معمولش است.',
      chart: [['BUN', '۴۸ mg/dL'], ['کراتینین', '۱٫۶ mg/dL'], ['سدیم', '۱۴۹ mEq/L'], ['فشار خون', '۹۲/۵۸ mm Hg'], ['نبض', '۱۰۸ در دقیقه']],
      fig: { k: 'dh-mouth' },
      steps: [
        S('محاسبه', 'نسبت BUN به کراتینین؟', 30, 0.5, '', '۴۸ ÷ ۱٫۶ = <b>۳۰</b>؛ بیش از ۲۰:۱ به نفع دهیدراتاسیون.', 'BUN ÷ Cr'),
        M('سدیم', 'سدیم ۱۴۹ بیشتر نشانه چیست؟', ['از دست رفتن آب بیش از سدیم', 'احتباس آب', 'اضافه‌بار مایع', 'کمبود پروتئین'], 'هیپرناترمی در از دست دادن آب دیده می‌شود.'),
        M('تورگور', 'برای سنجش تورگور در این بیمار ۸۲ ساله کجا بهتر است؟', ['جناغ یا داخل ران', 'پشت دست', 'ساعد', 'تورگور در او معنا ندارد'], 'در سن بالای ۵۵ تا ۶۰ سال، کشسانی پوست روی جناغ و داخل ران بهتر حفظ می‌شود.'),
        M('وزن', 'کاهش ۳ کیلوگرمی وزن امروز را چطور تفسیر می‌کنی؟', ['بیشتر از دست رفتن آب است؛ پس از اصلاح هیدراتاسیون دوباره وزن کن', 'سوءتغذیه شدید', 'از دست رفتن چربی', 'از دست رفتن عضله'], 'دهیدراتاسیون وزن را کاذب پایین نشان می‌دهد.'),
        T('معیارها', 'دهیدراتاسیون یکی از شش ویژگی تشخیص سوءتغذیه است.', false, 'جزو ویژگی‌ها نیست، ولی تفسیر کاهش وزن را منحرف می‌کند.')
      ]
    },
    {
      id: 'r12', w: 'fl', title: 'ادم تازه پاها', who: 'زن ۶۶ ساله، فشار خون بالا',
      brief: 'دو هفته پیش آملودیپین برایش شروع شده و حالا هر دو مچ پایش ورم دارد. ورم با فشار گوده‌ای حدود ۴ میلی‌متر می‌سازد که ۱۵ ثانیه بعد پر می‌شود. ساق راستش از دیروز دردناک، قرمز، گرم و متورم‌تر از چپ شده است.',
      chart: [['داروی تازه', 'آملودیپین'], ['ادم دو مچ', 'گوده ۴ mm، ۱۵ ثانیه'], ['ساق راست', 'درد، قرمزی، گرمی، تورم بیشتر']],
      fig: { k: 'pit2' },
      steps: [
        M('درجه', 'ادم دو مچ پا چه درجه‌ای است؟', ['۲+', '۱+', '۳+', '۴+'], 'گوده حدود ۴ میلی‌متر که ۱۰ تا ۲۵ ثانیه بعد ناپدید می‌شود ← ۲+.', null, { k: 'pit2' }),
        M('دارو', 'محتمل‌ترین علت ادم دوطرفه مچ‌ها؟', ['اثر جانبی آملودیپین', 'سوءتغذیه', 'کمبود پروتئین', 'دهیدراتاسیون'], 'مسدودکننده‌های کانال کلسیم از داروهای ایجادکننده ادم‌اند.'),
        M('فوری', 'ساق راست دردناک، قرمز و گرم با تورم بیشتر؛ اولین نگرانی؟', ['ترومبوز ورید عمقی؛ فوراً به پزشک اطلاع بده', 'ادم دارویی ساده', 'سلولیت پیش‌پاافتاده', 'نیازی به اقدام نیست'], 'در ادم یک‌طرفه حاد، DVT نگرانی اصلی است.'),
        T('روش', 'برای درجه‌بندی ادم، دست‌کم ۵ ثانیه روی پوست روی استخوان فشار می‌دهی.', true, 'درست.'),
        M('ثبت', 'در یادداشت تغذیه، این ادم را چطور ثبت می‌کنی؟', ['ادم ۲+ دوطرفه مچ‌ها، احتمالاً دارویی؛ وزن را با احتیاط تفسیر کن', 'سوءتغذیه شدید به‌خاطر ادم', 'ادم را ثبت نمی‌کنم', 'آسیت'], 'علت را شفاف بنویس و اثرش را بر وزن در نظر بگیر.')
      ]
    },
    /* ================= عملکرد و ریزمغذی‌ها ================= */
    {
      id: 'r13', w: 'mn', title: 'ریزش مو پس از بای‌پس معده', who: 'زن ۳۸ ساله، دو سال پس از جراحی بای‌پس معده',
      brief: 'مکمل‌هایش را مدت‌هاست قطع کرده. از ریزش مو شکایت دارد. ناخن‌هایش قاشقی شده‌اند، زبانش صاف و ارغوانی است و ملتحمه رنگ‌پریده دارد.',
      chart: [['مو', 'ریزش منتشر'], ['ناخن', 'قاشقی'], ['زبان', 'صاف، ارغوانی'], ['ملتحمه', 'رنگ‌پریده']],
      fig: { k: 'koilonychia' },
      steps: [
        M('ناخن', 'ناخن قاشقی بیشتر به کدام کمبود اشاره دارد؟', ['آهن', 'سلنیوم', 'ویتامین A', 'ید'], 'کویلونیشیا ← آهن.', null, { k: 'koilonychia' }),
        M('زبان', 'گلوسیت در این بیمار با کدام کمبودها جور است؟', ['ویتامین B12، فولات و آهن', 'ویتامین K', 'ید و مس', 'ویتامین D'], 'گلوسیت با کمبود ویتامین‌های B، فولات و آهن همراه است.', null, { k: 'glossitis' }),
        M('مو', 'ریزش منتشر مو بعد از جراحی چاقی با کمبود کدام‌ها مرتبط است؟', ['پروتئین، روی یا بیوتین', 'ویتامین K', 'ید', 'ویتامین C'], 'ریزش منتشر مو با کمبود پروتئین، روی یا بیوتین همراه است.'),
        M('علت', 'چرا این بیمار در خطر کمبود ریزمغذی است؟', ['سوءجذب پس از بای‌پس و قطع مکمل‌ها', 'چاقی', 'سن جوان', 'ورزش زیاد'], 'سوءجذب از عوامل خطر اصلی کمبود ریزمغذی‌هاست.'),
        T('تفسیر', 'نشانه‌های ریزمغذی به‌تنهایی برای تشخیص سوءتغذیه پروتئین-کالری کافی‌اند.', false, 'شواهد پشتیبان‌اند؛ تشخیص به دست‌کم دو ویژگی از شش ویژگی نیاز دارد.')
      ]
    },
    {
      id: 'r14', w: 'mn', title: 'قدرت چنگش در COPD', who: 'مرد ۷۲ ساله، COPD شدید',
      brief: 'می‌خواهی قدرت چنگش را با دینامومتر جامار بسنجی. سه بار دست راست و سه بار دست چپ، یکی در میان، اندازه گرفته‌ای.',
      chart: [['دست راست', '۱۸، ۲۰، ۱۹ kg'], ['دست چپ', '۱۶، ۱۷، ۱۵ kg']],
      fig: { k: 'grip-ok0' },
      steps: [
        M('وضعیت', 'وضعیت درست بیمار؟', ['نشسته، شانه شل، آرنج ۹۰ درجه، مچ صاف', 'ایستاده با بازوی کشیده به جلو', 'خوابیده به پشت', 'نشسته با آرنج کاملاً صاف'], 'وضعیت استاندارد سنجش قدرت چنگش.', null, { k: 'grip-ok0' }),
        S('محاسبه', 'میانگین دست راست؟', 19, 0.2, 'kg', '(۱۸ + ۲۰ + ۱۹) ÷ ۳ = <b>۱۹</b> kg', '(تلاش ۱ + ۲ + ۳) ÷ ۳'),
        S('محاسبه', 'میانگین دست چپ؟', 16, 0.2, 'kg', '(۱۶ + ۱۷ + ۱۵) ÷ ۳ = <b>۱۶</b> kg'),
        M('تفسیر', 'با جدول سازنده و نقطه برش رایج (مرد کمتر از ۲۷)، قدرت چنگش او؟', ['کم است؛ فقط از سوءتغذیه شدید پشتیبانی می‌کند', 'طبیعی است', 'از سوءتغذیه متوسط پشتیبانی می‌کند', 'قابل تفسیر نیست'], 'قدرت چنگش برای متوسط کاربرد ندارد.'),
        T('روش', 'بین هر تلاش ۱۵ ثانیه استراحت داده می‌شود.', true, 'درست؛ و دست‌ها یکی در میان عوض می‌شوند.')
      ]
    },
    {
      id: 'r15', w: 'mn', title: 'الکل و پوست آفتاب‌خورده', who: 'مرد ۵۲ ساله، مصرف طولانی الکل، بی‌خانمان',
      brief: 'پوست پشت دست و گردنش پررنگ و پوسته‌پوسته است. گوشه‌های لبش ترک‌خورده و قرمز است. روی ساق‌هایش لکه‌های ریز خونریزی دیده می‌شود و لثه‌هایش با کمترین تماس خون می‌آیند.',
      chart: [['پوست آفتاب‌خورده', 'پررنگ، پوسته‌دار'], ['گوشه لب', 'ترک و قرمزی دوطرفه'], ['ساق', 'لکه‌های ریز خونریزی'], ['لثه', 'اسفنجی و خونریزی‌دهنده']],
      fig: { k: 'pellagra' },
      steps: [
        M('پوست', 'پررنگی پوست آفتاب‌خورده بیشتر نشانه کدام کمبود است؟', ['نیاسین (پلاگرا)', 'ویتامین A', 'آهن', 'ید'], 'درماتوز پلاگرایی ← نیاسین یا تریپتوفان.', null, { k: 'pellagra' }),
        M('لب', 'ترک دوطرفه گوشه لب (استوماتیت زاویه‌ای)؟', ['ویتامین‌های B2، B3، B6 یا آهن', 'ویتامین K', 'سلنیوم', 'ید'], 'استوماتیت زاویه‌ای: ویتامین‌های B2، B3، B6 یا آهن.', null, { k: 'angular' }),
        M('لثه و پتشی', 'لثه خونریزی‌دهنده همراه لکه‌های ریز خونریزی پوست بیشتر به نفع کدام است؟', ['کمبود ویتامین C', 'کمبود آهن', 'کمبود روی', 'کمبود ید'], 'لثه اسفنجی و پتشی هر دو با کمبود ویتامین C جورند؛ بیماری کبد و مصرف ضدانعقاد را هم رد کن.'),
        M('زمینه', 'اگر سوءتغذیه داشته باشد، زمینه؟', ['شرایط اجتماعی یا محیطی', 'بیماری حاد', 'بیماری مزمن'], 'الکلیسم و بی‌خانمانی جزو زمینه اجتماعی‌اند (اگر بیماری کبد التهابی نداشته باشد).'),
        T('غیرتغذیه‌ای', 'پتشی ممکن است از بیماری کبد یا مصرف زیاد ضدانعقاد هم باشد.', true, 'درست؛ پیش از نسبت دادن به کمبود، این علت‌ها را رد کن.')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English content, world 1: Preparation & assessment
 * Mirrors content-hx.js exactly: same lesson ids, same item order and types.
 * Pictures inside questions are copied from the Persian items by content-en.js. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic } = EA.K;
  const EN = EA.EN = EA.EN || { worlds: {}, lessons: {}, rounds: {} };

  EN.worlds.hx = { name: 'Preparation & assessment', sub: 'The six malnutrition characteristics, intake, weight and exam technique', levels: ['First Steps', 'History Detectives', 'Head-to-Toe Masters'] };

  Object.assign(EN.lessons, {
    hx1: { title: 'What is an NFPE?', items: [
      L('The nutrition-focused physical exam', 'An <b>NFPE</b> (nutrition-focused physical exam) is an examination of the patient’s body with one specific question in mind: <b>what mark has nutrition left on the body?</b><br><br>The NFPE is one component of a <b>comprehensive nutrition assessment</b>. The other components are needed too: medical, surgical, social and diet histories, laboratory data and other tests. But <b>no single component</b> determines nutrition status on its own.<br><br>The NFPE verifies the physical changes caused by <b>undernutrition or overnutrition</b>.'),
      M('Which of these determines a patient’s nutrition status on its own?', ['None of them; all components are needed together', 'Serum albumin', 'Body mass index', 'The physical exam'], 'No single component determines nutrition status; the NFPE adds physical evidence to the other data.'),
      L('What does the NFPE look for?', 'With <b>full visualization</b> followed by <b>palpation</b>, we assess four things:<br>• <b>muscle stores</b> and <b>subcutaneous fat</b><br>• <b>fluid shifts</b> (edema or dehydration)<br>• <b>signs of micronutrient depletion</b> in the skin, hair, nails and mouth, such as rashes, sores or color changes, which are early signs of depletion<br>• <b>functional status</b>, for example handgrip strength<br><br>A full assessment is especially important for hospitalized patients.'),
      P('Match each finding to its part of the NFPE', [['Hollowing of the temple', 'Muscle stores'], ['Pitting edema of the foot', 'Fluid status'], ['Spongy, bleeding gums', 'Micronutrient sign'], ['Low grip strength', 'Functional status']]),
      T('The NFPE only assesses undernutrition and is of no use for overnutrition.', false, 'The NFPE verifies physical changes from undernutrition <b>or overnutrition</b>; a patient with obesity can still have lost muscle.'),
      L('Why doesn’t everyone do an NFPE?', 'The NFPE was long underused in daily practice because of a <b>lack of training</b> and an incomplete understanding of its role in a comprehensive assessment.<br><br>The good news: the muscle and fat exam is subjective, but <b>training alongside an experienced clinician and repetitive practice</b> reduce that subjectivity. That is exactly what this course is for.'),
      B('The muscle and fat exam is subjective; training and repetitive ___ reduce that subjectivity.', ['practice', 'testing', 'imaging'], 'Repeated practice with a systematic approach makes the exam more accurate and faster.'),
      M('Which is the best definition of an NFPE?', ['A part of the comprehensive nutrition assessment that examines physical changes caused by nutrition status', 'A replacement for the diet history', 'A blood test for micronutrient deficiencies', 'Measuring the patient’s weight and height'], 'The NFPE replaces no other component; its findings must agree with the history, labs and intake.'),
      T('NFPE findings should agree with the data from the chart and the interview.', true, 'Correct. A physical finding without clinical support, or chart data not confirmed on examination, makes a weak case.')
    ] },
    hx2: { title: 'The six malnutrition characteristics', items: [
      L('Six characteristics of malnutrition', 'Adult malnutrition is identified with <b>six characteristics</b>:<br>1. <b>Insufficient energy intake</b><br>2. <b>Weight loss</b><br>3. <b>Loss of muscle mass</b><br>4. <b>Loss of subcutaneous fat</b><br>5. <b>Fluid accumulation</b> (localized or generalized; it can mask weight loss)<br>6. <b>Reduced grip strength</b> (functional status)<br><br>At least <b>two characteristics</b> are needed to recommend a diagnosis. The last four are assessed directly with the NFPE.'),
      M('How many characteristics are needed, at minimum, to recommend a malnutrition diagnosis?', ['Two', 'One', 'Three', 'Six'], 'At least two of the six characteristics are required.'),
      P('Match each characteristic to how it is measured', [['Insufficient energy intake', 'Diet history compared with needs'], ['Weight loss', 'Current weight versus usual weight'], ['Muscle and fat loss', 'Inspection and palpation'], ['Reduced grip strength', 'Handgrip dynamometer']]),
      L('Three contexts (etiology)', 'Malnutrition is always defined within a <b>context</b>, set by the <b>intensity of inflammation</b> and the <b>duration</b> of the illness:<br>• <b>Acute illness or injury</b>: heightened, high-intensity inflammation (sepsis, burns, major surgery)<br>• <b>Chronic illness</b>: prolonged, lower-intensity inflammation (cancer, organ failure, diabetes)<br>• <b>Social or environmental circumstances</b>: no inflammation; pure starvation (poverty, eating disorders, dementia)<br><br>The threshold for each characteristic differs by context.'),
      M('A patient has eaten too little for months because of economic hardship and has no signs of inflammation. Which context applies?', ['Social or environmental circumstances', 'Chronic illness', 'Acute illness or injury', 'None; this is not malnutrition'], 'No inflammation and a social cause → the social or environmental context (starvation or semistarvation).'),
      L('Two degrees of severity', 'Each context has two degrees:<br>• <b>Moderate (nonsevere)</b> → ICD-10 code <b>E44.0</b><br>• <b>Severe</b> → ICD-10 code <b>E43</b><br><br>Each characteristic has separate thresholds for “moderate” and “severe”. If two characteristics fall in the severe range, severe malnutrition is recommended.<br><small>Reduced grip strength only has a threshold for “severe”; it is not applicable to “moderate”.</small>'),
      B('The ICD-10 code for severe protein-calorie malnutrition is ___.', ['E43', 'E44.0', 'E46'], 'E43 for severe and E44.0 for moderate.'),
      T('Fluid accumulation can hide a patient’s true weight loss.', true, 'Correct. Edema makes weight look higher and masks loss of weight, muscle and fat; that is why it is one of the characteristics.'),
      M('Which is NOT one of the six malnutrition characteristics?', ['Low albumin', 'Weight loss', 'Fluid accumulation', 'Reduced grip strength'], 'Albumin and prealbumin are markers of inflammation, not diagnostic characteristics of malnutrition.')
    ] },
    hx3: { title: 'Energy intake', items: [
      L('Intake versus needs', 'Malnutrition results from <b>inadequate intake or assimilation</b> of food and nutrients, so comparing recent intake with requirements is a primary criterion.<br><br>The registered dietitian:<br>1. takes a food and nutrition history<br>2. estimates energy needs<br>3. counts intake from <b>every source</b> (oral, enteral, parenteral)<br>4. expresses intake as a <b>percentage of needs</b> over time'),
      N('h.int'),
      L('Intake thresholds in each context', tbl([['Context', 'Moderate', 'Severe'], ['Acute', '<75% for >7 days', '≤50% for ≥5 days'], ['Chronic', '<75% for ≥1 month', '≤75% for ≥1 month'], ['Social', '<75% for ≥3 months', '≤50% for ≥1 month']]) + '<small>In chronic illness the thresholds effectively give one cut-point (about 75% for a month) for both moderate and severe; in practice the other characteristics clarify the severity.</small>'),
      M('After major surgery, a patient has eaten about 45% of needs for 6 days. This intake…', ['Supports severe malnutrition', 'Supports moderate malnutrition', 'Does not meet the criterion', 'Only matters in chronic illness'], 'Acute context: ≤50% for ≥5 days → severe.'),
      N('h.intc'),
      T('In the acute context, intake of 60% of needs for 5 days meets the “moderate” criterion.', false, 'Moderate in acute illness means <75% for <b>more than 7 days</b>; 5 days is not enough (and 60% is too high for severe).'),
      L('Probing questions', 'An exact calorie count of the past is rarely possible. Ask about changes in eating patterns instead:<br>• “Have you noticed a change in the amount you eat at meals?”<br>• “When you feel well and eat normally, how is that different from now?”<br>• “How much are you eating compared with your normal amount?”<br>• “How often are you skipping meals?”<br>• “When did you last eat a meal you would call ‘normal’?”<br>• For tube or IV feeding: “How often does the infusion meet the prescribed volume?”'),
      M('Which question is better for estimating intake?', ['How much are you eating compared with your usual amount?', 'You finish your meals, right?', 'Exactly how many calories did you eat yesterday?', 'Your appetite is fine, isn’t it?'], 'Questions should be open and probing, not leading; asking for exact calories is unrealistic.'),
      B('Energy intake from all sources, that is oral, enteral and ___, is compared with needs.', ['parenteral', 'vitamin supplements', 'water'], 'Parenteral (IV) nutrition is part of intake too.')
    ] },
    hx4: { title: 'Weight loss', items: [
      L('Percentage weight loss', 'Weight loss is always expressed as a <b>percentage of baseline (usual) weight</b> over a <b>period of time</b>:<br><div class="fx" dir="ltr">% = (usual − current) ÷ usual × 100</div>The amount, the percentage and the <b>rate</b> of change all matter. The dietitian interprets weight alongside other findings, especially <b>under- or overhydration</b>.'),
      N('h.wl'),
      L('Weight-loss thresholds in each context', tbl([['Context', 'Moderate', 'Severe'], ['Acute', '1–2% in 1 week · 5% in 1 month · 7.5% in 3 months', '>2% in 1 week · >5% in 1 month · >7.5% in 3 months'], ['Chronic and social', '5% in 1 month · 7.5% in 3 months · 10% in 6 months · 20% in 1 year', '>5% · >7.5% · >10% · >20% in the same periods']]) + '<small>The thresholds are single numbers (“5%” versus “more than 5%”); Negar’s tools round the percentage to the precision of the cut-point.</small>'),
      M('A patient with cancer (chronic illness) has lost 12% of body weight in 6 months. This weight loss…', ['Supports severe malnutrition', 'Supports moderate malnutrition', 'Does not meet the criterion', 'Weight loss is not a criterion in chronic illness'], 'Chronic: more than 10% in 6 months → severe.'),
      N('h.wlc'),
      T('In the acute context, a 3% weight loss in one week meets the “severe” criterion.', true, 'Acute: more than 2% in 1 week → severe.'),
      L('Weight traps', '• <b>Edema and ascites</b> make weight look higher and hide weight loss.<br>• <b>Dehydration</b> makes weight falsely low and exaggerates weight loss.<br>• Check a “reported” weight with questions such as “Are your clothes looser?” and with earlier records.<br>• Always calculate the percentage from the <b>usual</b> weight, not the current weight.'),
      M('A patient with heart failure and 3+ leg edema has had no change in weight over a month. Best interpretation?', ['Edema may be hiding true weight loss; examine muscle and fat in the upper body', 'No weight loss, so no malnutrition', 'Record the weight as 10% lower', 'Weight is meaningless in this patient and should not be measured'], 'Fluid accumulation masks loss of weight, muscle and fat; the upper body is less affected by edema.'),
      B('Dehydration makes a patient’s weight look falsely ___.', ['low', 'high', 'stable'], 'Losing body water lowers the weight and makes weight loss look bigger than it is.'),
      N('h.bmi')
    ] },
    hx5: { title: 'A systematic approach: the chart', items: [
      L('Before you see the patient', 'The NFPE is only one component of the assessment. Start with the <b>medical record</b>; it is not complete, but it shows the gaps to fill during the interview and exam.<br><br>Gather as much of the following as possible:<br>• history and clinical diagnosis<br>• clinical signs, symptoms and vital signs<br>• anthropometric data<br>• laboratory data<br>• dietary data<br>• functional status'),
      P('Match each chart item to what it tells you', [['Medical and surgical history', 'Possible cause and context of malnutrition'], ['Nausea, diarrhea, pain', 'Barriers to adequate intake'], ['Weight and weight history', 'Amount, percentage and rate of change'], ['Laboratory data', 'Hydration, inflammation and micronutrient deficits']]),
      L('History and symptoms', '<b>History and clinical diagnosis</b>: diseases, surgery, chemotherapy, previous hospitalizations or severe trauma can impair intake or the use of nutrients. Acute conditions may be present alongside chronic ones.<br><br><b>Signs, symptoms and vital signs</b>: pain, nausea, vomiting, diarrhea and constipation get in the way of adequate intake; vital signs show whether inflammation is present and how intense it is.'),
      T('Acute and chronic illness cannot coexist in the same patient.', false, 'Acute conditions may be present with chronic ones, for example a patient with cancer who develops sepsis.'),
      L('Dietary and functional data', '<b>Dietary data</b>: intake from all sources (oral, enteral, parenteral) recorded in the chart can be subjective; confirm it with the patient or caregiver and compare it with the patient’s needs and normal intake.<br><br><b>Functional status</b>: compare strength and physical performance with the patient’s normal activities and baseline strength. Only changes related to nutrition (for example, muscle wasting that makes activities harder) count as nutrition-related functional changes.'),
      M('Which functional change is related to nutrition status?', ['Weakness climbing stairs because of thigh muscle wasting', 'Inability to walk after a hip fracture', 'One-sided weakness after a stroke', 'Limited shoulder movement from arthritis'], 'Changes caused by muscle wasting are nutritional; a fracture, stroke or arthritis has a non-nutritional cause.'),
      O('Put the pre-exam data in a systematic order', ['History and clinical diagnosis', 'Signs, symptoms and vital signs', 'Anthropometric data', 'Laboratory data', 'Dietary data', 'Functional status'], 'This is the order of a systematic approach; the aim is not to miss anything.'),
      B('Dietary data recorded in the chart may be ___ and should be confirmed with the patient or caregiver.', ['subjective', 'exact', 'outdated'], 'Charted intake is often approximate.'),
      M('What is the main purpose of reviewing the chart before the exam?', ['To find the gaps to fill during the interview and exam', 'To replace the exam', 'To make a final diagnosis', 'To calculate exact calories'], 'The chart is a starting point, not a complete source.')
    ] },
    hx6: { title: 'Interviewing the patient', items: [
      L('Goals of the first contact', 'When you approach the patient:<br>• introduce yourself and explain the reason for your visit<br>• build <b>rapport</b><br>• gain <b>consent</b> for the interview and exam<br>• protect the patient’s <b>privacy</b> throughout<br><br>If the patient cannot communicate, family or caregivers can provide the information and clear up conflicting details.'),
      O('Put the first steps of the patient encounter in order', ['Introduce yourself and the reason for the visit', 'Build rapport', 'Gain consent for the interview and exam', 'Maintain privacy throughout'], 'Consent comes before any touching.'),
      L('Open, not leading', 'Questions should be <b>open and probing</b> so they draw out impartial information. Keep the focus on the <b>severity and duration</b> of the nutrition problem; you need exactly those two for the malnutrition characteristics.<br><br>A tip: patients often reveal more <b>during the hands-on exam</b> than in the interview alone, so ask questions while you examine.'),
      T('Patients often reveal more during the hands-on exam than in the interview alone.', true, 'Correct; gather feedback while you perform the exam.'),
      L('Words matter', '• Avoid terms that cause <b>emotional distress</b>; don’t describe the patient’s body negatively (excess adiposity, extreme weight loss, eating disorder). Use clinical, descriptive words instead.<br>• Instead of “You have lost so much muscle!” say: “Unintended loss of muscle can happen; with a thorough exam we can plan better treatment.”<br>• Don’t promise <b>recovery</b> of weight, fat or muscle, and don’t give <b>false reassurance</b>.'),
      M('Which sentence is more appropriate for a patient with cancer?', ['Unintended loss of muscle can happen; with a careful exam we can plan better treatment.', 'You’ve lost so much muscle since last time!', 'Don’t worry, this supplement will bring all your muscle back.', 'You’ve become very thin; you have to eat more.'], 'A neutral, educational description, without judgment and without false reassurance about recovery.'),
      L('If the patient declines the exam', 'There are still options:<br>• look at <b>exposed</b> areas (face, hands) during the interview<br>• ask the patient to make an <b>“OK” sign</b> with their fingers (the muscle between thumb and forefinger)<br>• ask specific questions about changes in muscle and fat<br><br>The same techniques work in <b>telehealth</b> visits.<br><small>A tip: when obtaining and sharing patient information, follow privacy rules (in the United States, HIPAA).</small>'),
      M('The patient will not allow an exam. What is the right approach?', ['Observe exposed areas such as the face and hands and ask for an OK sign', 'Do the exam without permission', 'Abandon the nutrition assessment', 'Decide on BMI alone'], 'Consent is required, but observing exposed areas and asking targeted questions still provide useful information.'),
      B('In the interview, focus on the ___ and duration of the nutrition problem.', ['severity', 'cause', 'cost'], 'Severity and duration are exactly what the diagnostic criteria need.')
    ] },
    hx7: { title: 'Inspection and palpation', items: [
      L('Four techniques, two that matter', 'The physical exam techniques are <b>inspection</b>, <b>palpation</b>, percussion and auscultation. Only the first two are used in the NFPE.<br><br>• <b>Inspection</b>: a broad look at physical appearance, posture, color, texture, size and <b>symmetry</b><br>• <b>Palpation</b>: using the hands to examine bulk, tone, texture, size, quality of volume and mass, swelling, symmetry and temperature' + pic('palpate', null, 'Palpating the back of the hand and the interosseous muscles')),
      P('Match each technique or step to what it does', [['Inspection', 'Color, symmetry and posture'], ['Palpation', 'Muscle bulk and tone'], ['Percussion', 'Not used in the NFPE'], ['Repeating the exam during admission', 'Detecting a change in nutrition status']]),
      L('When to examine', 'Perform the exam at the <b>initial visit</b> and <b>repeat it during the hospitalization</b> to catch changes in nutrition status.<br><br>Coordinate the whole assessment: muscle and fat stores, micronutrient deficiencies and fluid accumulation. Physical findings should correlate with the evidence already gathered from the chart and the interview.'),
      L('Inspection and palpation for each characteristic', tbl([['Characteristic', 'Inspection', 'Palpation'], ['Fluid', 'Edema, oral mucous membranes, skin dryness', 'Quality and severity of edema, skin turgor, capillary nail refill'], ['Muscle and fat', 'Texture, size, symmetry, posture', 'Muscle bulk and tone, adequacy of fat stores'], ['Skin', 'Color, rashes, dryness, wounds', 'Temperature'], ['Nails', 'Color, texture, shape (consider polish and manicures)', 'Capillary refill, frailty'], ['Hair', 'Color, shine, distribution', 'Texture']])),
      M('Which nail assessment is done by palpation?', ['Checking capillary refill and frailty', 'Looking at color and shape', 'Noting nail polish', 'Comparing symmetry'], 'Color, shape and hygiene by inspection; capillary refill and frailty by palpation.'),
      L('Eyes, mouth and neck with a penlight', '• <b>Eyes</b>: penlight; color, appearance and discharge<br>• <b>Nose</b>: color, texture and discharge<br>• <b>Lips</b>: cracks, lesions, color and texture<br>• <b>Mouth and tongue</b>: penlight; color, texture, hydration, swelling, lesions, dental caries and erosions<br>• <b>Neck</b>: inspect and palpate for swelling and symmetry' + pic(['penlight-mouth', 'penlight-eye'], ['Mouth and tongue', 'Eyes'])),
      T('A penlight is used in the NFPE to examine the mouth and tongue.', true, 'Correct; good light is needed to see color, moisture, lesions and caries.'),
      B('Physical findings should agree with the evidence from the ___ and the interview.', ['chart', 'radiology', 'genetics'], 'The NFPE is part of the full picture.'),
      M('Which exam technique is not used in the NFPE?', ['Auscultation', 'Inspection', 'Palpation', 'All three are used'], 'Inspection and palpation are the main NFPE techniques.')
    ] },
    hx8: { title: 'Safety and the general survey', items: [
      L('Standard precautions', 'At the <b>beginning and end</b> of every patient encounter, practice careful hand hygiene: soap and water or an alcohol-based sanitizer.<br><br>When you expect contact with body fluids, skin wounds or infectious material, <b>personal protective equipment</b> is needed: gloves, masks, isolation gowns, goggles and face shields. The nature of the expected contact decides which, and donning, doffing and disposal each have a correct procedure.' + pic(['hygiene', 'ppe'], ['Hand hygiene', 'Personal protective equipment'])),
      M('When is hand hygiene required?', ['At the beginning and end of every patient encounter', 'Only after the exam', 'Only if the patient has an infection', 'Only when you are not wearing gloves'], 'At the start and end of each encounter.'),
      L('Start with a general survey', 'Before you touch the patient, take a <b>general look</b>:<br>• Is the patient sitting or lying in bed? Can they maintain their posture?<br>• Are losses of muscle or fat <b>visible</b>? Does the patient look underweight?<br>• Which <b>medical devices</b> (tubes, drains, catheters) will get in the way of examining some areas?<br>• Is there obvious swelling, edema or ascites? Could it make the weight misleading?<br>• Does the patient look overtly dehydrated?<br>• Are signs of micronutrient deficiency visible on the face, skin, hair or nails?'),
      T('Before touching the patient, you take a general look at posture, medical devices and obvious edema.', true, 'Correct; the general survey is the second step, after standard precautions.'),
      L('Gravity and where edema goes', 'Peripheral edema moves to the <b>lowest parts of the body</b>:<br>• patient <b>sitting or standing</b> → ankles and feet<br>• patient <b>lying on their back</b> → thighs and the <b>sacral</b> area<br>• elevated legs shift the edema<br><br>So in a bedbound patient with no swelling in the feet, also look at the back of the thighs and the sacrum.'),
      M('A patient has lain on their back in bed for a week. Where do you look for edema?', ['Thighs and the sacral area', 'Ankles only', 'Face', 'Hands'], 'When lying down, fluid moves to the dependent areas: thighs and sacrum.'),
      P('Match each position or term to where the fluid collects', [['Standing or sitting', 'Ankles and feet'], ['Lying on the back', 'Thighs and sacrum'], ['Fluid in the abdomen', 'Ascites'], ['Massive, generalized edema', 'Anasarca']]),
      B('In a hospitalized patient, tubes and ___ may prevent examination of some areas.', ['drains', 'clothes', 'sheets'], 'Identify medical devices during the general survey so you can examine without disturbing them.'),
      M('What decides which protective equipment you use?', ['The nature of the expected contact', 'The clinician’s preference', 'The patient’s age', 'The time of the visit'], 'The type and extent of PPE depend on the expected contact; some infections have specific guidelines.')
    ] },
    hx9: { title: 'The head-to-toe exam', items: [
      L('Head to toe, by inspection and palpation', 'Continue the exam <b>from head to toe</b> with a combination of palpation and inspection. Proper positioning makes the exam more accurate and reliable (as long as the patient has no fall risk or injury):<br>• ask the patient to sit, stand or lie down<br>• roll a bedbound patient onto one side<br>• in a critically ill patient, take care not to disturb tubes, drains, lines and connections to life-support devices' + pic(['position0', 'position1', 'position2', 'position3'])),
      L('Dignity and symmetry', '• Move blankets, clothing, gowns and compression stockings so the area can be seen while protecting the patient’s <b>dignity and privacy</b>.<br>• Look at <b>both sides</b> of the body: <b>one-sided</b> changes are usually not caused by nutrition (a stroke or a fracture, for example). Nutrition-related wasting is usually <b>symmetrical</b>.'),
      M('The patient’s right thigh is clearly thinner than the left. Best interpretation?', ['Probably a non-nutritional cause; ask about stroke, fracture or nerve injury', 'Severe malnutrition', 'Moderate malnutrition', 'Record only the right thigh'], 'Nutritional wasting is symmetrical; a one-sided difference points to a neurological or musculoskeletal cause.'),
      L('Talk while you examine', 'Ask questions during the exam to gather information and avoid assumptions:<br>• “Does your face look thinner to you?”<br>• “Do your glasses or dentures fit differently?”<br>• “Are your clothes fitting differently?”<br>• “Does your jewelry (ring, watch) feel loose?”<br>• While examining the arms and legs: any weakness? How does activity compare with before?<br>• While examining the head and mouth: mouth sores, tooth pain, trouble chewing or swallowing, taste changes?'),
      T('Asking “Has your ring or watch become loose?” is part of the head-to-toe exam.', true, 'Correct; a change in the fit of jewelry or clothes is a simple clue to loss of muscle or fat or to a change in fluid.'),
      O('Put the overall NFPE sequence in order', ['Hand hygiene and protective equipment', 'Introduction and consent', 'General survey of the patient', 'Head-to-toe exam by inspection and palpation', 'Recording findings and comparing them with the chart'], 'Precautions, rapport, general survey, systematic exam and finally documentation.'),
      M('A bedbound patient cannot sit up. How do you examine the back?', ['Ask them to roll onto their side', 'Skip the back', 'Force them to sit', 'Only look through the gown'], 'A bedbound patient can be rolled onto one side.'),
      B('In a critically ill ICU patient, take care with tubes, drains and ___ so they are not dislodged.', ['IV lines', 'sheets', 'glasses'], 'An adequate exam must not disrupt vital connections.'),
      M('Which question suits the head and mouth area?', ['Do you have trouble chewing or swallowing?', 'Have your calves become weak?', 'Have your clothes become tight?', 'How many hours a day do you walk?'], 'Mouth sores, tooth pain, chewing and swallowing problems and taste changes directly affect intake.')
    ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English content, world 2: Inflammation & documentation (mirrors content-inf.js) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl } = EA.K;
  const EN = EA.EN;

  EN.worlds.inf = { name: 'Inflammation & documentation', sub: 'Etiology, markers, coding and the chart', levels: ['Inflammation Trackers', 'Lab Readers', 'Chart Writers'] };

  Object.assign(EN.lessons, {
    inf1: { title: 'Etiology: inflammation and time', items: [
      L('Two questions that set the context', 'The etiology of malnutrition is determined by <b>two factors</b>:<br>1. Has the disease process caused <b>inflammation</b>? How <b>intense</b> is it?<br>2. For <b>how long</b> has the condition been affecting the patient’s nutrition?<br><br>Understanding the patient’s inflammatory context helps you see how fast, and how hard, malnutrition is likely to develop.'),
      M('Which two factors determine the etiology of malnutrition?', ['The presence and intensity of inflammation, and how long the illness has lasted', 'The patient’s age and sex', 'BMI and albumin', 'The type and route of feeding'], 'Inflammation and duration are the two main factors.'),
      L('Three contexts, three levels of inflammation', tbl([['Context', 'Inflammatory state'], ['Acute illness or injury', 'Heightened, high-intensity inflammation'], ['Chronic illness', 'Prolonged, lower-intensity inflammation'], ['Social or environmental circumstances', 'No signs of inflammation (starvation or semistarvation)']]) + 'An illness lasting <b>more than 3 months</b> is considered chronic.'),
      P('Match each context to its inflammatory state', [['Acute', 'Heightened, high-intensity inflammation'], ['Chronic', 'Prolonged, low-grade inflammation'], ['Social or environmental', 'No inflammation']]),
      L('The etiology trap', 'Be careful when choosing the cause. For example, a patient with <b>diabetes</b> who <b>lost their job</b> several months ago may be malnourished not because of the diabetes but because of <b>economic hardship</b> and an inability to buy food or medicine.<br><br>So don’t just look at the diagnosis list; ask what <b>really</b> made the patient eat less.'),
      M('A patient with diabetes has not been able to buy enough food for months since losing their job, and has no signs of inflammation. The right context?', ['Social or environmental circumstances', 'Chronic illness', 'Acute illness', 'Cannot be determined'], 'The main reason for eating less is economic, and there is no active inflammation.'),
      T('Every patient with a chronic disease necessarily becomes malnourished in the context of “chronic illness”.', false, 'The context is set by the real cause of the malnutrition, not just by the patient’s list of diseases.'),
      B('An acute illness may be superimposed on a ___ illness.', ['chronic', 'social', 'hereditary'], 'For example, a patient with cancer who develops sepsis.'),
      M('Why does etiology matter for muscle loss in an ICU patient?', ['Acute inflammation speeds up muscle catabolism, not just the length of illness', 'Because only ICU patients get malnutrition', 'Because etiology does not change the ICD code', 'Etiology doesn’t matter'], 'Reduced muscle mass in critical illness promotes further loss; the intensity of inflammation matters, not only time.')
    ] },
    inf2: { title: 'Diagnoses and contexts', items: [
      L('The acute context', '<b>Heightened, high-intensity inflammation</b>:<br>• abdominal abscess<br>• acute respiratory distress syndrome (ARDS)<br>• burns<br>• trauma<br>• major infection or sepsis<br>• major surgery'),
      M('Which belongs to the “acute illness or injury” context?', ['Extensive burns', 'Congestive heart failure', 'Dementia', 'Rheumatoid arthritis'], 'Burns create intense, acute inflammation.'),
      L('The chronic context', '<b>Prolonged, lower-intensity inflammation</b>: organ failure, cancer, cardiovascular disease, celiac disease, congestive heart failure, cystic fibrosis, stroke, chronic pancreatitis, diabetes, HIV, lupus, <b>obesity</b>, pancreatic pseudocyst, rheumatoid arthritis, ALS and muscular dystrophies.'),
      T('Obesity belongs to the chronic illness context.', true, 'Correct; obesity is a low-grade chronic inflammatory state.'),
      L('The social or environmental context', '<b>No signs of inflammation</b>: achalasia, alcoholism, dementia, drug abuse, eating disorders, economic hardship, Guillain-Barré syndrome, mental disorders, pain, and sickle-cell anemia pain.<br><br><small>This list is not complete and does not cover every nutritional and non-nutritional cause.</small>'),
      P('Match each diagnosis to its context', [['Sepsis', 'Acute'], ['Cystic fibrosis', 'Chronic'], ['Achalasia', 'Social or environmental']]),
      N('i.ctx'),
      M('Which belongs to the “social or environmental circumstances” context?', ['Eating disorder', 'HIV', 'Major surgery', 'Chronic pancreatitis'], 'An eating disorder causes long-term undereating without active inflammation.'),
      N('i.ctx')
    ] },
    inf3: { title: 'Acute and chronic inflammation', items: [
      L('Acute inflammation', 'Signs of <b>acute inflammation</b>: swelling, redness (erythema), fever, pain, <b>marked elevation of CRP</b> and leukocytosis.<br><br>Acute inflammation is a <b>defense, clearance, adaptation and repair</b> response.'),
      M('Which is NOT a sign of acute inflammation?', ['A fall in CRP', 'Fever', 'Leukocytosis', 'Redness and swelling'], 'In acute inflammation CRP rises markedly.'),
      L('Chronic inflammation', 'Markers of <b>chronic inflammation</b> may be the same (leukocytosis, fever, high CRP) but <b>to a lesser degree and over a longer time</b>. Sometimes a chronic illness lacks the classic signs of inflammation altogether.<br><br>The purpose of a low-grade inflammatory response is <b>restorative</b>: to reach balance (homeostasis).'),
      T('A chronic illness may show none of the classic signs of inflammation.', true, 'Correct; chronic conditions may lack the classic signs of the acute inflammatory process.'),
      L('Markers are only supportive', 'Abnormal vital signs, biochemical markers and imaging may indicate inflammation, but <b>they may have nothing to do with nutrition status</b>.<br><br>Treat them as <b>supportive information</b> for determining etiology, not as criteria for diagnosing malnutrition.'),
      M('What is the role of vital signs and inflammatory labs in diagnosing malnutrition?', ['Supportive information for determining etiology', 'The main criterion for severity', 'A replacement for the physical exam', 'Worthless and best ignored'], 'Inflammatory markers help set the context, not prove malnutrition.'),
      P('Match each feature to the type of inflammation', [['Marked CRP elevation', 'Acute inflammation'], ['Low intensity, long duration', 'Chronic inflammation'], ['Defense and repair response', 'Purpose of acute inflammation'], ['Reaching homeostasis', 'Purpose of low-grade chronic inflammation']]),
      B('The purpose of a low-grade, prolonged inflammatory response is restorative: to achieve ___.', ['homeostasis', 'catabolism', 'fever'], 'Low-grade chronic inflammation aims to restore balance.'),
      T('Determining the presence and degree of inflammation is always simple and straightforward.', false, 'It is not always straightforward, which is why several guiding points help.')
    ] },
    inf4: { title: 'Vital signs', items: [
      L('Vital signs and inflammation', tbl([['Sign', 'Abnormal', 'Note'], ['Fever', '≥37.7 °C (99.9 °F)', 'Masked by antipyretics (salicylates, acetaminophen, NSAIDs)'], ['Hypothermia', '<35.0 °C (95.0 °F)', 'Rule out other causes'], ['Pulse', '>100 beats/min', 'Masked by anti-arrhythmics (amiodarone, disopyramide, quinidine)'], ['Blood pressure', '<90 mm Hg or a drop of >40 from normal', 'Rule out other causes'], ['Respiratory rate', '>20 breaths/min', 'Rule out other causes']]) + '<small>The blood-pressure and respiratory-rate criteria are based on the systemic inflammatory response syndrome (SIRS) criteria for sepsis.</small>'),
      N('i.vital'),
      M('A patient has no fever but takes acetaminophen every 6 hours. Correct interpretation?', ['The antipyretic may be masking a fever', 'There is definitely no inflammation', 'Stop the drug so the fever shows', 'Temperature is now worthless'], 'Fever may be masked by antipyretics.'),
      B('Fever means a temperature of ___ °C or more.', ['37.7', '37.2', '38.5'], 'Equivalent to 99.9 °F.'),
      T('Amiodarone may mask tachycardia caused by inflammation.', true, 'Correct; anti-arrhythmic drugs keep the pulse down.'),
      N('i.vital'),
      P('Match each sign to its abnormal threshold', [['Pulse', 'More than 100 /min'], ['Respiratory rate', 'More than 20 /min'], ['Hypothermia', 'Below 35 °C'], ['Systolic pressure', 'Below 90 mm Hg']]),
      M('Which is NOT one of the vital signs used to judge inflammation?', ['Oxygen saturation', 'Respiratory rate', 'Blood pressure', 'Body temperature'], 'The list covers fever, hypothermia, pulse, blood pressure and respiratory rate.')
    ] },
    inf5: { title: 'Albumin, prealbumin and CRP', items: [
      L('Hepatic proteins: markers of inflammation', tbl([['Marker', 'Normal', 'High', 'Low'], ['Albumin', '3.5–5.0 g/dL', 'Dehydration', 'Inflammation, liver failure, nephrotic syndrome, fluid overload'], ['Prealbumin', '15–35 mg/dL', 'Fluid status change, chronic kidney disease, steroid use', 'Liver failure, inflammation'], ['CRP', '<1.0 mg/dL', 'Inflammation', '—']]) + '<small>Ranges vary from laboratory to laboratory.</small>'),
      M('Low albumin in a septic patient is mainly a sign of what?', ['Inflammation (the acute-phase response)', 'Severe malnutrition', 'Dehydration', 'Low protein intake in the past week'], 'Albumin falls with inflammation and does not reliably correlate with malnutrition.'),
      L('Albumin ≠ nutrition status', 'Albumin and prealbumin are <b>not among the six malnutrition characteristics</b>. Hypoalbuminemia can cause edema by lowering oncotic pressure, but it <b>does not reliably correlate with malnutrition</b>.<br><br>In the EMR template, hypoalbuminemia and low prealbumin are ticked under “<b>markers of inflammation</b>”.'),
      T('Hypoalbuminemia alone is enough to diagnose malnutrition.', false, 'Albumin is a marker of inflammation and fluid status, not a diagnostic characteristic of malnutrition.'),
      N('i.lab'),
      P('Match each finding to a likely cause', [['High albumin', 'Dehydration'], ['High prealbumin', 'Chronic kidney disease'], ['High CRP', 'Inflammation'], ['Low albumin with edema and proteinuria', 'Nephrotic syndrome']]),
      B('Normal CRP is below ___ mg/dL.', ['1', '5', '10'], 'A high CRP points to inflammation.'),
      N('i.lab'),
      M('What effect can steroid use have on prealbumin?', ['It may raise it', 'It always drops it to zero', 'None', 'It turns it into albumin'], 'Steroid use is one of the causes of increased prealbumin.')
    ] },
    inf6: { title: 'Glucose, white cells and platelets', items: [
      L('Blood glucose', '<b>Normal</b>: fasting 70–100 mg/dL (random <125)<br><b>High</b>: diabetes, hyperthyroidism, pancreatic cancer or pancreatitis, <b>trauma, stroke, heart attack, surgery, infection</b>, Cushing’s syndrome and some medications<br><b>Low</b>: reactive hypoglycemia, alcohol, insulinoma, infection, organ failure<br><br>Stress hyperglycemia is one of the inflammation markers in the EMR template.'),
      M('A non-diabetic patient has a glucose of 190 after major surgery. This mostly reflects what?', ['The stress and inflammatory response to surgery', 'Overfeeding', 'A vitamin deficiency', 'Severe malnutrition'], 'Surgery, trauma and infection are among the causes of high glucose.'),
      L('White cells and platelets', '<b>White blood cells</b> (normal 4500–10,000/mL): leukocytosis with infection, inflammatory diseases, tissue damage, smoking, some medications and leukemia; leukopenia with sepsis, chemotherapy, some infections and autoimmune diseases<br><br><b>Platelets</b> (normal 150,000–400,000/mL): increased with infection, major surgery, trauma, burns, cancer, iron deficiency and inflammatory diseases; decreased with leukemia, viral infections, chemotherapy, alcohol and autoimmune disease'),
      T('Sepsis can cause leukopenia instead of leukocytosis.', true, 'Correct; sepsis is also a cause of a low white count.'),
      P('Match each finding to a possible cause', [['Leukopenia', 'Chemotherapy'], ['Thrombocytosis', 'Iron deficiency'], ['Hypoglycemia', 'Insulinoma'], ['Hyperglycemia', 'Stroke']]),
      L('Nitrogen balance and cultures', '<b>Nitrogen balance</b>: normally positive; <b>negative</b> in fasting, illness, infection and stress (the body is breaking down protein)<br><b>Body fluid cultures</b>: normally negative; positive means infection'),
      M('What does a negative nitrogen balance in an ICU patient mean?', ['Protein breakdown exceeds intake, as in stress, infection or fasting', 'Protein intake is above needs', 'Normal kidney function', 'Dehydration'], 'A negative balance means nitrogen losses exceed intake.'),
      B('In chronic illness, leukocytosis and fever may appear to a ___ degree.', ['lesser', 'greater', 'similar'], 'Chronic inflammation shows the same markers, milder and longer.'),
      M('What is the normal platelet range?', ['150,000–400,000 /mL', '4500–10,000', '70–100', '15–35'], '4500–10,000 is the white-cell range.')
    ] },
    inf7: { title: 'Imaging', items: [
      L('Imaging', tbl([['Study', 'Acute', 'Chronic'], ['Chest x-ray', 'Pneumonia, infiltrates', 'Scleroderma'], ['Abdominal or pelvic x-ray', 'Abscess, acute pancreatitis, bowel obstruction', 'Chronic pancreatitis'], ['Gastric emptying, small-bowel follow-through', 'Bowel perforation, intestinal leak', 'Gastroparesis, dysmotility, fistulas, abscesses'], ['Endoscopy or colonoscopy', 'Gastritis, esophagitis, Crohn’s or colitis flare', 'Irritable bowel disease, radiation enteritis, strictures'], ['Transesophageal echo', 'Endocarditis, vegetations', 'Heart failure, valve abnormalities']])),
      M('Which imaging finding points to an “acute” inflammatory process?', ['An abscess on abdominal x-ray', 'Gastroparesis on gastric emptying', 'A stricture on colonoscopy', 'Scleroderma on chest x-ray'], 'Abscess, acute pancreatitis and bowel obstruction are in the acute column.'),
      P('Match each imaging study to a finding', [['Chest x-ray', 'Pneumonia'], ['Gastric emptying study', 'Gastroparesis'], ['Transesophageal echo', 'Endocarditis'], ['Colonoscopy', 'Colitis flare']]),
      T('Imaging findings may have nothing to do with the patient’s nutrition status.', true, 'Correct; like other inflammatory markers, they are only supportive information.'),
      L('Imaging and body composition', 'CT, MRI, ultrasound, DXA and BIA are also used, increasingly, to assess <b>lean tissue and muscle</b>; but they are expensive and not always available.<br><br>The NFPE needs no expensive equipment, and a trained clinician can do it <b>quickly and easily</b> on most patients.'),
      M('What is the main advantage of the NFPE over CT or DXA for body composition?', ['Inexpensive, quick and needs no special equipment', 'More accurate in every patient', 'Completely objective', 'Needs no training'], 'The NFPE does not depend on expensive equipment; but it is subjective and needs training.'),
      B('A transesophageal echo can show ___ as an acute process.', ['endocarditis', 'scleroderma', 'irritable bowel disease'], 'Endocarditis and vegetations are acute imaging findings.'),
      T('Irritable bowel disease is an “acute” imaging finding.', false, 'Irritable bowel disease, radiation enteritis and strictures are in the chronic column.')
    ] },
    inf8: { title: 'Documentation and coding', items: [
      L('Organizing the hospital', 'For successful coding of malnutrition:<br>• have a <b>policy approved by the medical staff</b> that states the method used to identify malnutrition<br>• educate providers, coders and documentation specialists<br>• ICD-10 codes: <b>E43</b> unspecified severe protein-calorie malnutrition; <b>E44.0</b> moderate protein-calorie malnutrition<br>• work with IT to build consistent, specific language in the record'),
      P('Match each item to its meaning or owner', [['E43', 'Severe protein-calorie malnutrition'], ['E44.0', 'Moderate protein-calorie malnutrition'], ['Recommending the degree of malnutrition', 'The dietitian'], ['Final diagnosis', 'The physician or licensed independent practitioner']]),
      L('What must the record show?', '• the presence and <b>severity</b> of malnutrition within a specific <b>etiologic framework</b><br>• <b>evidence</b> for each characteristic<br>• a <b>plan of care</b> to treat the malnutrition<br>• how the plan will be <b>monitored and evaluated</b><br><br>The dietitian <b>recommends</b> the degree of malnutrition; if the physician agrees, it is documented in the physician’s note.'),
      L('Dos', '✅ Confirm the characteristics align with the <b>chosen etiology</b><br>✅ Ensure the <b>minimum threshold</b> for severity is met within that etiology<br>✅ Document NFPE results <b>clearly and specifically</b><br>✅ Rule out <b>non-nutritional</b> causes of muscle and fat loss<br>✅ Evaluate as <b>many muscle and fat areas</b> as possible (there is no minimum)<br>✅ Verify subjective data with <b>objective</b> evidence<br>✅ Be accurate and thorough but <b>concise</b>; it is fine to write “unable to identify” and reassess later'),
      L('Don’ts', '❌ <b>Contradictions</b> in the same entry without explanation<br>❌ Recommending a malnutrition diagnosis without <b>adequate information</b><br>❌ Vague or confusing results<br>❌ <b>Assumptions</b> about NFPE observations<br>❌ “<b>Diagnosing</b>” malnutrition; it must be a <b>recommendation</b> to the physician or licensed independent practitioner<br>❌ Lengthy, repetitive or incomplete documentation<br>❌ “Unable to identify” <b>without a plan for reevaluation</b>'),
      M('Which sentence in a dietitian’s note is more appropriate?', ['Severe protein-calorie malnutrition in the context of acute illness is recommended, based on intake ≤50% for 7 days and moderate temporal and clavicular wasting.', 'The patient has severe malnutrition.', 'The patient seems to have lost a little weight.', 'The patient is malnourished based on an albumin of 2.5.'], 'A recommendation (not a diagnosis), with etiology, severity and evidence for each characteristic.'),
      T('A dietitian may write in the chart: “I diagnosed malnutrition.”', false, 'The dietitian recommends; the diagnosis belongs to the physician or licensed independent practitioner.'),
      T('Recording “unable to identify malnutrition” with a reassessment plan is acceptable.', true, 'Correct; without a reassessment plan it is one of the don’ts.'),
      M('What is the minimum number of muscle and fat areas you must examine?', ['There is no set minimum; as many as possible, using clinical judgment', 'Exactly three areas', 'All 12 areas', 'One area is enough'], 'No minimum exists; it is a clinical decision for each case.')
    ] },
    inf9: { title: 'The EMR note', items: [
      L('The EMR template: the diagnosis section', 'An electronic-medical-record template:<br>• <b>Recommended diagnosis</b> (choose 1): no malnutrition, moderate, severe, unable to determine<br>• <b>In the context of</b> (choose 1): acute, chronic, social or environmental<br>• <b>Based on</b> (all that apply): inadequate intake, weight loss, functional decline, muscle loss, fat loss, fluid accumulation'),
      O('Put the main sections of the EMR template in order', ['Recommended diagnosis', 'In the context of', 'Based on', 'Intake history and anthropometrics', 'Physical exam and functional capacity', 'Markers of inflammation', 'Intervention and monitoring'], 'From the conclusion to the evidence, then the treatment and monitoring plan.'),
      L('The EMR template: exam and inflammation', '• <b>Muscle loss</b> and <b>fat loss</b>: none, mild, moderate, severe, unable to determine<br>• <b>Fluid accumulation</b>: none, mild (1+), moderate (2+), severe (3–4+); location: upper extremities, lower extremities, generalized, ascites<br>• <b>Functional capacity</b>: normal, regressed, handgrip measurably reduced, not related to nutrition status<br>• <b>Markers of inflammation</b>: hypoalbuminemia, elevated CRP, acute post-op, sepsis, tachycardia, fevers, low prealbumin, hyperglycemia'),
      P('Match each edema grade to its fluid-accumulation severity in the EMR template', [['1+', 'Mild'], ['2+', 'Moderate'], ['3+ to 4+', 'Severe']]),
      M('Which item appears under “markers of inflammation” in the EMR template?', ['Low prealbumin', 'Weight loss', 'Low grip strength', 'Temporal wasting'], 'Albumin and prealbumin are recorded under inflammation, not under the malnutrition characteristics.'),
      N('i.dx'),
      T('In the EMR template, “functional capacity” includes an option “not related to nutrition status”.', true, 'Correct; for example weakness from a stroke or a fracture.'),
      N('i.dx'),
      B('The dietitian’s documentation should include an intervention with an established ___ and evaluation plan.', ['monitoring', 'discharge', 'surgical'], 'An intervention with a defined monitoring and evaluation plan.')
    ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English content, world 3: Muscle & fat (mirrors content-mf.js; question pictures are shared) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic, pic3 } = EA.K;
  const EN = EA.EN;

  EN.worlds.mf = { name: 'Muscle & fat', sub: 'A head-to-toe exam of muscle and subcutaneous fat stores', levels: ['Body Map Readers', 'Palpation Pros', 'Wasting Masters'] };

  Object.assign(EN.lessons, {
    mf1: { title: 'Why muscle and fat?', items: [
      L('A primary reason for the NFPE', 'One of the main reasons for an NFPE is to assess the <b>presence of and changes in</b> muscle size and tone and fat mass: two of the six malnutrition characteristics.<br><br><b>Muscle wasting</b> (atrophy) is a loss of <b>bulk and tone</b> that can be detected by palpation.<br><br>Muscle and fat data from the exam are readily available in <b>the vast majority of hospitalized patients, including the critically ill</b>.'),
      M('How is muscle wasting defined in the NFPE?', ['A loss of muscle bulk and tone detectable by palpation', 'A fall in albumin', 'Weight loss above 5%', 'One-sided limb weakness'], 'Definition: loss of bulk and tone found by palpation.'),
      L('Muscle and fat in each context', tbl([['Context', 'Moderate', 'Severe'], ['Acute illness or injury', 'Mild loss', 'Moderate loss'], ['Chronic illness', 'Mild', 'Severe'], ['Social or environmental', 'Mild', 'Severe']]) + '<small>In the acute context, because intense inflammation speeds up catabolism, even a “moderate” loss is enough to support severe malnutrition.</small>'),
      M('In acute illness, a “moderate” loss of muscle supports which diagnosis?', ['Severe malnutrition', 'Moderate malnutrition', 'Neither', 'Only if there is also weight loss'], 'In the acute context: moderate loss → severe malnutrition.'),
      N('m.map'),
      L('Subjective, but learnable', 'The muscle and fat exam is <b>subjective</b>. Training with experienced clinicians and <b>repetitive practice</b> reduce that subjectivity.<br><br>Findings are recorded in three groups: <b>normal</b>, <b>mild to moderate</b>, and <b>severe</b>.<br><br>The timing of the assessment and the patient’s clinical condition also influence decisions about etiology and severity.'),
      T('In chronic illness, a “mild” loss of subcutaneous fat supports severe malnutrition.', false, 'Chronic: mild → moderate; severe requires a “severe” loss.'),
      T('In the acute context, a “moderate” loss is enough to support severe malnutrition; in the chronic and social contexts the loss must be “severe”.', true, 'Correct. Intense acute inflammation makes wasting faster and more dangerous.'),
      N('m.map')
    ] },
    mf2: { title: 'Obesity, ICU and sarcopenia', items: [
      L('The patient with obesity', 'In a patient with <b>obesity</b>, excess adipose tissue limits observation and palpation of the underlying muscle, so muscle and fat losses <b>may not be readily visible</b>.<br><br>Patients with obesity can still be malnourished and lose muscle, which makes the history, intake and function even more important.'),
      T('A patient with obesity cannot have muscle wasting.', false, 'Obesity hides muscle wasting but does not rule it out; sarcopenic obesity exists.'),
      L('The ICU patient', 'In the ICU a full exam can be difficult: limited participation, hemodynamic instability, <b>edema</b>, IV lines, drains and medical devices.<br><br>Loss of muscle and fat can be evident <b>within the first week of an ICU stay</b>. So examine the patient <b>early</b> and then <b>serially</b>; as devices are removed or mobility improves, new areas become available to examine.'),
      M('Why should an ICU patient be examined serially?', ['Changes are rapid and devices and edema change which areas can be examined', 'Because one exam is never enough', 'To increase costs', 'Because albumin changes daily'], 'Muscle loss can become evident in the first week, and devices and edema hide or reveal areas.'),
      L('Sarcopenia', 'Sarcopenia is the <b>progressive and generalized loss of skeletal muscle mass, strength and function</b> with a risk of adverse outcomes; an inflammatory condition linked to oxidative stress.<br>• <b>Primary</b>: related to aging<br>• <b>Secondary</b>: caused by disease, nutrition or inactivity<br><br>When muscle mass cannot be assessed, <b>muscle strength</b> provides supporting evidence. There are no special criteria for sarcopenic obesity; sarcopenia and obesity are assessed separately.'),
      P('Match each term to its definition', [['Primary sarcopenia', 'Related to aging'], ['Secondary sarcopenia', 'Caused by disease, nutrition or inactivity'], ['Sarcopenic obesity', 'Sarcopenia and obesity assessed separately']]),
      L('Body-composition tools', 'DXA, BIA, CT, MRI, ultrasound and air-displacement plethysmography measure lean mass more objectively and allow tracking over time, but they are <b>expensive</b> and not always available.<br><br>For function, besides grip strength, <b>gait speed</b> and the <b>chair-stand test</b> have been suggested.'),
      M('Which tests have been suggested, alongside grip strength, to measure muscle function?', ['Gait speed and chair standing', 'Measuring albumin', 'Waist circumference', 'A glucose tolerance test'], 'Gait speed and the chair stand test.'),
      B('When muscle mass cannot be assessed, muscle ___ provides supporting evidence.', ['strength', 'color', 'temperature'], 'A considerable loss of mass is usually accompanied by a loss of function.')
    ] },
    mf3: { title: 'The head-to-toe map', items: [
      L('Where to examine', 'The key to body-composition assessment is knowing the <b>regions</b> where muscle and fat are easy to reach. A <b>head-to-toe</b> approach makes the exam systematic.' + pic('muscles', null, 'Muscle groups for the head-to-toe assessment')),
      L('Why the upper body?', 'The <b>upper body</b> is used more often to identify muscle and fat loss because it:<br>• is less affected by <b>edema</b><br>• is <b>more accessible</b> to the clinician<br>• is a good reflection of <b>overall muscle mass</b><br><br>A <b>bilateral</b> exam is important for telling nutrition-related wasting from wasting caused by disease or deconditioning.'),
      M('Why is the upper body preferred for assessing muscle wasting?', ['It is less affected by edema and reflects overall muscle mass', 'Because the legs never lose muscle', 'Because examining the legs is forbidden', 'Because fat is only found in the upper body'], 'Three reasons: less edema, better access, reflects total mass.'),
      L('Muscle and fat regions', tbl([['Region', 'Tissue'], ['Temple', 'Temporalis muscle'], ['Under the eyes', 'Orbital fat pads'], ['Clavicle and acromion', 'Pectoralis, deltoid, trapezius'], ['Scapula', 'Trapezius, supra- and infraspinatus'], ['Midaxillary line', 'Fat over the ribs and iliac crest'], ['Upper arm', 'Fat under the triceps'], ['Hand', 'Interosseous and thumb muscles'], ['Thigh and calf', 'Quadriceps and gastrocnemius']])),
      P('Match each region to the muscle you assess', [['Temple', 'Temporalis'], ['Acromion', 'Deltoid'], ['Calf', 'Gastrocnemius'], ['Thigh', 'Quadriceps']]),
      N('m.region'),
      T('The orbital fat pads and the fat under the triceps are “fat” assessment areas.', true, 'Correct, together with the midaxillary line. The other regions are mostly for muscle.'),
      M('Which region is used to assess “fat”?', ['The midaxillary line over the ribs', 'The temple', 'The calf', 'Between the thumb and forefinger'], 'Ribs at the midaxillary line, under the triceps and under the eyes: fat areas.'),
      N('m.region')
    ] },
    mf4: { title: 'Head and face', items: [
      L('Orbital fat pads and the temporalis', '<b>Positioning</b>: stand directly in front of the patient and <b>lightly palpate</b> under the eyes, above the cheekbone. Look at the temple from the <b>front and in profile</b> and palpate the temporalis for <b>fullness and firmness</b>.' + pic(['tip-face1', 'tip-face2'], ['Under the eyes: light palpation above the cheekbone', 'Temple: palpating the temporalis'])),
      L('Three grades', pic3('face', null, true) + tbl([['', 'Under the eyes (fat)', 'Temple (muscle)'], ['Normal', 'Slightly bulged fat pads', 'Well-defined muscle, flat or slight bulge'], ['Mild to moderate', 'Slightly dark circles, somewhat hollow look', 'Slight depression'], ['Severe', 'Hollow look, depressions around the eye, dark circles, loose saggy skin', 'Deep hollowing, no muscle to the touch, facial bones very defined']])),
      M('What is the state of the temple and orbital area in this picture?', ['Severe', 'Mild to moderate', 'Normal'], 'Deep temporal hollowing, depressions around the eyes and very defined facial bones → severe.'),
      M('What is the state of the temple and orbital area in this picture?', ['Mild to moderate', 'Normal', 'Severe'], 'Slightly dark circles under the eyes and a slight temporal depression.'),
      T('Normally, the orbital fat pads bulge slightly.', true, 'Correct; hollowing and dark circles are signs of fat loss.'),
      B('Look at the temple from the front and in ___.', ['profile', 'the back', 'above'], 'The profile view shows temporal hollowing better.'),
      N('m.img'),
      M('Which statement about examining under the eyes is correct?', ['Palpate lightly above the cheekbone', 'Press firmly on the eyeball', 'Only look with a penlight', 'It need not be palpated'], 'Light palpation above the cheekbone; never press on the eyeball.'),
      T('Dark circles under the eyes are a sign of malnutrition in everyone.', false, 'Dark circles have other causes (sleep loss, genetics); they must agree with the other regions and the history.')
    ] },
    mf5: { title: 'Clavicle and shoulder', items: [
      L('The upper chest', '<b>Positioning</b>: the patient sits <b>upright, not hunched over</b>. Palpate the pectoralis below and along the clavicle for fullness and firmness and observe how prominent the clavicle is. Palpate the deltoid and check for <b>squaring of the shoulders</b>.' + pic(['tip-chest1', 'tip-chest2', 'tip-chest3'])),
      L('Three grades', pic3('chest', null, true) + tbl([['', 'Clavicle region', 'Acromion region (deltoid)'], ['Normal', 'Well-defined muscle around the bone; the clavicle is usually not visible in males and may be slightly prominent in females', 'Rounded curves at the arms, shoulders and neck'], ['Mild to moderate', 'More prominent clavicle, less muscle on palpation', 'The acromion process may protrude slightly'], ['Severe', 'Protruding bone with little surrounding muscle', 'Square shoulder, prominent bones, very prominent acromion']])),
      M('What is the state of the clavicle and shoulder muscles in this picture?', ['Severe', 'Normal', 'Mild to moderate'], 'A protruding clavicle and a square shoulder with a very prominent acromion.'),
      T('In healthy women the clavicle may be slightly prominent.', true, 'Correct; this sex difference applies to the normal grade.'),
      M('“Squaring of the shoulder” is a sign of loss of which muscle?', ['Deltoid', 'Gastrocnemius', 'Temporalis', 'Quadriceps'], 'The deltoid makes the rounded curve of the shoulder; when it wastes, the shoulder joint looks angular.'),
      M('What is the state of the clavicle and shoulder muscles in this picture?', ['Normal', 'Mild to moderate', 'Severe'], 'Well-defined muscle around the clavicle and a rounded shoulder.'),
      N('m.img'),
      B('To examine the clavicle, the patient should sit upright and not ___.', ['hunched over', 'dressed', 'wearing glasses'], 'Hunching makes the clavicle look more prominent and misleads you.'),
      P('Match each finding to its grade', [['Rounded shoulder curve', 'Normal'], ['Slightly protruding acromion', 'Mild to moderate'], ['Square shoulder', 'Severe']])
    ] },
    mf6: { title: 'Back and midaxillary line', items: [
      L('The scapular region (muscle)', '<b>Positioning</b>: ask the patient to extend their arms and <b>push against a solid object</b> (the clinician’s hand can serve as support). Palpate the trapezius, supraspinatus and infraspinatus and look at how prominent the scapula, spine and ribs are. If the patient cannot sit or stand, they roll onto their side and extend their arms as able.' + pic(['tip-back1', 'tip-back2'])),
      L('Scapula: three grades', pic3('back', null, true) + tbl([['Grade', 'Finding'], ['Normal', 'Bones not prominent; no significant depressions'], ['Mild to moderate', 'Mild depression around the scapula, or the bone may show slightly'], ['Severe', 'Prominent, visible scapula; notable depressions between the ribs, scapula, shoulder or spine']])),
      M('What is the state of the scapular muscles in this picture?', ['Severe', 'Mild to moderate', 'Normal'], 'A prominent scapula with obvious depressions between the ribs and along the spine.'),
      L('The midaxillary line (fat)', '<b>Positioning</b>: the patient extends their arms in front or to the sides and pushes against a solid object. Palpate the ribs along the midaxillary line and look at how prominent the ribs and iliac crest are. If the patient cannot stand, they may lie on their back (this may be less accurate because of positioning).' + pic(['tip-mid1', 'tip-mid2'])),
      L('Midaxillary line: three grades', pic3('mid', null, true) + tbl([['Grade', 'Finding'], ['Normal', 'Chest is full, ribs do not show, slight to no protrusion of the iliac crest'], ['Mild to moderate', 'Ribs somewhat more apparent, depressions not very pronounced, iliac crest somewhat prominent'], ['Severe', 'Depressions between the ribs very apparent, iliac crest very prominent']])),
      M('What is the state of the fat stores at the midaxillary line in this picture?', ['Severe', 'Normal', 'Mild to moderate'], 'Ribs with obvious depressions between them and a very prominent iliac crest.'),
      T('The midaxillary line is a “muscle” assessment area.', false, 'It is examined as a “fat” area.'),
      N('m.img'),
      B('To examine the back, the patient extends their arms and pushes against a ___ object.', ['solid', 'soft', 'warm'], 'Pushing contracts the muscles and makes the bones’ prominence clearer.')
    ] },
    mf7: { title: 'Upper arm: triceps fat', items: [
      L('Examining the fat under the triceps', '<b>Positioning</b>: bend the elbow to <b>90°</b> (upper arm perpendicular to the body; if the patient cannot cooperate, place the forearm horizontally across the body). Grasp the middle of the upper arm, between shoulder and elbow, with your palm and fingers, gently pull the skin away from the arm and <b>wiggle slightly</b> to separate fat from muscle. Then note how much fat is between your fingers.' + pic('tip-arm')),
      L('Three grades', pic3('arm', null, true) + tbl([['Grade', 'Finding'], ['Normal', 'Ample fat tissue between the folds of skin'], ['Mild to moderate', 'Some depth to the pinch, but not ample'], ['Severe', 'Very little space between the folds; fingers practically touching']])),
      M('While pinching the skin over the triceps, your fingers almost touch. Finding?', ['Severe fat loss', 'Normal', 'Mild to moderate', 'Edema'], 'Fingers practically touching → severe.'),
      M('What is the state of the upper-arm fat stores in this picture?', ['Mild to moderate', 'Normal', 'Severe'], 'There is a fat layer under the triceps, but thinner than normal.'),
      O('Put the steps of the triceps fat exam in order', ['Bend the elbow to 90°', 'Grasp the mid upper arm between shoulder and elbow', 'Pull the skin away from the arm with a gentle wiggle', 'Gauge the amount of fat between your fingers'], 'The order of the NFPE checklist.'),
      T('To separate fat from the triceps muscle, you gently pull the skin and wiggle slightly.', true, 'Correct; wiggling separates the fat from the underlying muscle.'),
      N('m.img'),
      B('In the triceps exam, the elbow is bent to ___ degrees.', ['90', '45', '180'], 'A 90° angle prepares the skin and fat for the pinch.'),
      M('If the patient cannot cooperate, how is the triceps exam done?', ['Bend the elbow to 90° and place the forearm horizontally across the body', 'Skip the exam', 'Use an industrial caliper', 'Only look at the other arm'], 'In an uncooperative patient, the forearm rests horizontally across the body.')
    ] },
    mf8: { title: 'Hands', items: [
      L('The OK sign', '<b>Positioning</b>: ask the patient to make an <b>“OK” sign</b> with the thumb and forefinger. Look at and palpate the muscle pad where the thumb and forefinger meet, and check the interosseous muscles between the other fingers. Look at and palpate both the <b>palmar</b> and <b>dorsal</b> sides of the hand.' + pic(['tip-hand1', 'tip-hand2', 'tip-hand3'])),
      L('Palmar side', pic3('palm', null, true) + tbl([['Grade', 'Opponens, adductor and abductor pollicis and first dorsal interosseous'], ['Normal', 'Muscle bulges; may be flat in some well-nourished people'], ['Mild to moderate', 'Slight depression'], ['Severe', 'Depressed areas, especially between thumb and forefinger']])),
      L('Dorsal side', pic3('dors', null, true) + tbl([['Grade', 'Dorsal interossei and adductors'], ['Normal', 'Flat or mild bulge between the bones; muscle between index finger and thumb bulging or flat'], ['Mild to moderate', 'Slight depression between the dorsal bones'], ['Severe', 'Depressed areas between the bones, especially between thumb and forefinger; bones prominent']])),
      M('What is the state of the hand muscles in this picture?', ['Severe', 'Normal', 'Mild to moderate'], 'Obvious depressions between the bones and between thumb and forefinger, with prominent bones.'),
      T('In some well-nourished people, the muscle between thumb and forefinger may be flat.', true, 'Correct; so flatness alone is not severe; look for depression.'),
      M('What is the state of the palmar hand muscles in this picture?', ['Normal', 'Mild to moderate', 'Severe'], 'The thumb muscle pad bulges.'),
      N('m.img'),
      T('The “OK” sign is also used in telehealth visits to look at the hand muscles.', true, 'Correct; it is useful for patients who decline an exam and for telehealth visits.'),
      P('Match each muscle to its region', [['Adductor pollicis', 'Between thumb and forefinger'], ['Dorsal interossei', 'Between the bones on the back of the hand'], ['Temporalis', 'Temple']])
    ] },
    mf9: { title: 'Thigh, kneecap and calf', items: [
      L('The lower extremities', '<b>Positioning</b>: the patient sits with the leg propped up or bent at the knee; <b>grasp</b> the quadriceps and gastrocnemius with your palm and fingers to tell muscle from fat. If the patient cannot sit up, they bend the knee while lying down so the calf and quadriceps lift off the bed.' + pic(['tip-leg1', 'tip-leg2', 'tip-leg4'])),
      L('Three grades', pic3('leg', null, true) + tbl([['', 'Thigh (quadriceps)', 'Kneecap', 'Calf (gastrocnemius)'], ['Normal', 'Well rounded, well developed', 'Muscles protrude, kneecap not prominent', 'Well-developed bulb of muscle'], ['Mild to moderate', 'Mild depression on the inner thigh', 'Kneecap more prominent', 'Not well developed'], ['Severe', 'Depression or line on the thigh', 'Kneecap prominent, little muscle around the knee', 'Thin, minimal to no muscle definition']])),
      M('What is the state of the thigh and calf muscles in this picture?', ['Severe', 'Mild to moderate', 'Normal'], 'A thigh with a line and depression, a very prominent kneecap and a thin calf.'),
      M('What is the state of the thigh and calf muscles in this picture (lying view)?', ['Normal', 'Severe', 'Mild to moderate'], 'A round thigh and a calf with a well-developed bulb of muscle.'),
      T('A prominent kneecap with little muscle around the knee is a sign of severe quadriceps loss.', true, 'Correct.'),
      L('Lower-extremity traps', '• The legs are <b>more affected by edema</b>; edema can hide wasting.<br>• <b>Immobility</b>, stroke or a fracture also make a leg thinner; don’t forget the bilateral comparison and the history.<br>• Checklist: bend the knee to 90° if possible and grasp the calf to judge fullness, firmness and roundness.'),
      M('After 6 weeks in a cast, the patient’s left calf is thinner than the right. Interpretation?', ['Disuse atrophy; not a nutritional cause', 'Severe malnutrition', 'Moderate malnutrition', 'One-sided edema'], 'One-sided wasting after limb immobilization is usually not nutritional.'),
      N('m.img'),
      B('In a patient lying down, the knee is bent so the calf and quadriceps lift off the ___.', ['bed', 'floor', 'gown'], 'Lifting the muscles off the bed makes palpation more accurate.')
    ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English content, world 4: Fluid status (mirrors content-fl.js; question pictures are shared) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic } = EA.K;
  const EN = EA.EN;

  EN.worlds.fl = { name: 'Fluid status', sub: 'Edema, pit grading and dehydration', levels: ['Fluid Trackers', 'Edema Graders', 'Water Guardians'] };

  Object.assign(EN.lessons, {
    fl1: { title: 'Why does fluid matter?', items: [
      L('Water, weight and deception', 'Normally the body regulates hydration tightly and healthy kidneys keep water and salt in balance, so a change in water or salt intake alone should not cause edema.<br><br>But in the NFPE, fluid plays two deceptive roles:<br>• <b>fluid accumulation</b> makes weight look higher and <b>hides loss of weight, muscle and fat</b><br>• <b>dehydration</b> makes weight look falsely <b>low</b>'),
      M('How does edema affect the assessment of malnutrition?', ['It hides weight loss and the loss of muscle and fat', 'It makes weight look falsely low', 'It has no effect', 'It is always a sign of malnutrition'], 'Edema adds weight and also interferes with the muscle and fat exam.'),
      L('Nutritional causes of edema', 'Prolonged, gross <b>protein</b> deficiency, the physiological response to <b>refeeding syndrome</b> and the inflammatory responses of acute and chronic disease can all cause edema.<br><br>Even so, fluid accumulation is <b>rarely</b> a direct manifestation of malnutrition. Hypoalbuminemia can cause edema by lowering oncotic pressure, but it <b>does not reliably correlate with malnutrition</b>.'),
      T('Fluid accumulation is usually a direct manifestation of malnutrition.', false, 'It is rarely a direct manifestation; but because it hides weight loss, it is one of the characteristics.'),
      L('Fluid accumulation in each context', tbl([['Context', 'Moderate', 'Severe'], ['Acute', 'Mild', 'Moderate to severe'], ['Chronic', 'Mild', 'Severe'], ['Social or environmental', 'Mild', 'Severe']])),
      M('In chronic illness, “severe” fluid accumulation supports which diagnosis?', ['Severe malnutrition', 'Moderate malnutrition', 'Neither', 'It only matters in the acute context'], 'In the chronic context: severe fluid accumulation → severe malnutrition.'),
      N('f.map'),
      B('Dehydration ___ one of the characteristics for diagnosing malnutrition, but it makes weight look falsely low.', ['is not', 'is', 'is sometimes'], 'Dehydration and hypovolemia are not characteristics, but they skew the diagnosis.'),
      T('Edema can interfere with an accurate exam of muscle and fat.', true, 'Correct; that is why the upper body, which is less affected by edema, is preferred.')
    ] },
    fl2: { title: 'Know your edema', items: [
      L('What is edema?', '<b>Edema</b> is an excess of interstitial fluid that can be felt on palpation and can account for <b>10–30% of body weight</b>.<br><br>Systemic fluid retention may not show clinically until it reaches <b>at least 10% of body weight</b> or an increase of <b>2.5–3 L</b> of interstitial fluid. Massive, generalized edema is called <b>anasarca</b>.'),
      M('Up to what volume may systemic fluid retention remain clinically invisible?', ['2.5–3 L of interstitial fluid', '200 mL', '1 L', '10 L'], 'Or about 10% of body weight; so considerable retention can exist without obvious edema.'),
      L('Hidden fluid', 'Fluid around the heart, fluid in the lungs, small amounts of ascites or hematomas may not be visible on examination and may only show on <b>imaging</b>.<br><br>Indirect clues:<br>• tight shoes or rings<br>• rapid weight gain<br>• falling serum sodium<br>• shortness of breath<br>• rising blood pressure<br>• distended neck veins'),
      P('Match each clue to its meaning', [['A ring has become tight', 'Fluid retention in the hand'], ['A rapid gain of several kilograms', 'Fluid, not fat'], ['Distended neck veins', 'Volume overload'], ['Falling serum sodium', 'Water retention']]),
      L('Describing edema', 'Describe fluid accumulation by these features; each helps find the cause:<br>• <b>generalized</b> or <b>localized</b><br>• <b>acute</b> or <b>chronic</b><br>• <b>unilateral</b> or <b>bilateral</b><br>• <b>pitting</b> or <b>brawny</b><br><br>Peripheral edema gravitates to dependent areas and depends on body position. Observing symptoms on exam matters as much as monitoring weight changes.'),
      T('Peripheral edema moves to the dependent parts of the body, so its location depends on position.', true, 'Correct; standing it is in the ankles and feet, lying down in the thighs and sacrum.'),
      M('A 4-kg weight gain over 3 days in a hospitalized patient is most likely what?', ['Fluid accumulation', 'An increase in fat mass', 'An increase in muscle mass', 'Improved nutrition status'], 'A rapid change in weight is almost always fluid.'),
      B('Massive, generalized, whole-body edema is called ___.', ['anasarca', 'ascites', 'lymphedema'], 'Ascites is fluid in the abdomen, and lymphedema is not true edema.'),
      T('The absence of visible edema means there is no significant fluid retention.', false, 'Up to 2.5–3 L may not be visible, and hidden fluid may only show on imaging.')
    ] },
    fl3: { title: 'Edema terminology', items: [
      L('Terminology', tbl([['Term', 'Definition'], ['Ascites', 'Fluid in the abdomen causing distention; shifting dullness and a fluid wave on percussion'], ['Anasarca', 'Massive, generalized, whole-body edema'], ['Peripheral edema', 'Excess interstitial fluid, pitting or nonpitting; mainly swollen lower extremities and dependent areas (thighs, sacrum with bed rest); may make walking difficult'], ['Pitting edema', 'Leaves an indentation when pressure is applied for at least 5 seconds'], ['Nonpitting (brawny) edema', 'No indentation after pressure; thickening, dark color, dry scaly patches, induration and liposclerosis']])),
      P('Match each term to its definition', [['Ascites', 'Abdominal fluid with a fluid wave'], ['Anasarca', 'Generalized whole-body edema'], ['Pitting edema', 'An indentation after 5 seconds of pressure'], ['Brawny edema', 'No indentation, thick dark skin']]),
      M('To see pitting edema, how many seconds of pressure are needed at minimum?', ['5 seconds', '1 second', '30 seconds', '2 minutes'], 'At least 5 seconds of pressure on the edematous area.'),
      T('Brawny edema is graded on the 1+ to 4+ scale.', false, 'Brawny edema leaves no pit; the pitting scale does not apply.'),
      M('The skin of the shin is thick, dark and scaly and leaves no pit when pressed. What is it?', ['Brawny (nonpitting) edema', '1+ pitting edema', 'Dehydration', 'Ascites'], 'Thickening, darkening, dry patches and liposclerosis → brawny.'),
      B('In ascites, percussion of the abdomen shows ___ dullness and a fluid wave.', ['shifting', 'fixed', 'one-sided'], 'Shifting dullness and a fluid wave are signs of ascites.'),
      T('Peripheral edema may make it difficult for the patient to walk.', true, 'Correct; peripheral edema may make walking difficult.'),
      M('In a bedbound patient lying on their back, where does peripheral edema collect?', ['Thighs and sacrum', 'Face', 'Shoulders', 'Hands'], 'Dependent areas in bed: thighs and sacrum.')
    ] },
    fl4: { title: 'Differential diagnosis of edema', items: [
      L('Generalized and localized edema', '<b>Anasarca or generalized edema</b>: cardiovascular disease and heart failure (raised jugular venous pressure, shortness of breath), liver disease or cirrhosis (with ascites), kidney disease (proteinuria, hypertension), nephrotic syndrome, glomerulonephritis, myxedema (skin thickening, nonpitting)<br><br><b>Localized edema</b>: trauma, burns, angioedema, hives, skin infection (erysipelas, cellulitis)'),
      M('Generalized edema with raised jugular venous pressure and shortness of breath points most to what?', ['Heart failure', 'Cellulitis', 'Lymphedema', 'Protein deficiency'], 'Cardiovascular disease comes with raised JVP and dyspnea.'),
      L('Ascites and one-sided edema', '<b>Ascites</b>: cirrhosis (with anasarca or peripheral edema), hepatic veno-occlusive disease, malignancy, severe right-sided heart failure<br><br><b>Asymmetric (unilateral) lower-extremity edema</b>: <b>deep vein thrombosis</b> (the primary concern; acute, with pain, erythema and local warmth), chronic venous insufficiency, muscle strain or tear, lymphedema, compartment syndrome, pelvic tumors'),
      M('Acute one-sided calf swelling with pain, redness and warmth; first concern?', ['Deep vein thrombosis', 'Malnutrition', 'Heart failure', 'Protein deficiency'], 'DVT is the primary concern in acute one-sided edema.'),
      L('Bilateral leg edema and the upper limb', '<b>Bilateral lower extremities</b>: most common are <b>chronic venous disease</b> and <b>heart failure</b>; pulmonary hypertension (common but often overlooked), fluid overload, inflammation and sepsis, refeeding syndrome, beriberi, nephrotic syndrome, pregnancy, cirrhosis, <b>malnutrition and malabsorption</b> (uncommon), pretibial myxedema<br><br><b>Upper extremity</b>: trauma, superficial thrombophlebitis, infection, arthritis, DVT (especially with a venous catheter), superior vena cava syndrome, lymphedema (after radiation or surgery)'),
      P('Match each pattern to a common cause', [['Bilateral leg edema', 'Chronic venous disease'], ['Acute painful one-sided edema', 'Deep vein thrombosis'], ['Arm edema after breast surgery', 'Lymphedema'], ['Ascites with peripheral edema', 'Cirrhosis']]),
      T('Malnutrition and malabsorption are a “common” cause of bilateral leg edema.', false, 'They are an “uncommon”, chronic cause; the most common are venous disease and heart failure.'),
      M('Under which edema pattern does refeeding syndrome appear?', ['Bilateral lower-extremity edema (sometimes generalized)', 'Only one-sided edema', 'Only ascites', 'Facial edema alone'], 'Refeeding may also present as generalized edema.'),
      B('Beriberi (___ deficiency) is listed among the causes of bilateral leg edema.', ['thiamin', 'vitamin C', 'iron'], 'Wet beriberi (thiamin, or vitamin B1, deficiency) comes with high-output heart failure and edema.')
    ] },
    fl5: { title: 'Medications that cause edema', items: [
      L('Medications that cause edema', tbl([['Class', 'Examples'], ['Antidepressants', 'Trazodone, MAO inhibitors'], ['Antihypertensives', 'Calcium channel blockers (amlodipine, felodipine, diltiazem, verapamil), beta-blockers, vasodilators (hydralazine, minoxidil, clonidine, methyldopa)'], ['Hormones', 'Estrogen, progesterone, testosterone, corticosteroids, anabolic steroids, growth hormone'], ['NSAIDs', 'Aspirin, ibuprofen, naproxen, COX-2 inhibitors'], ['Thiazolidinediones', 'Rosiglitazone, pioglitazone'], ['Anticonvulsants', 'Gabapentin, pregabalin'], ['Antineoplastics and immunotherapies', 'Docetaxel, cisplatin, interleukin-2'], ['Anti-Parkinson drugs', 'Pramipexole, ropinirole'], ['Others', 'Cyclosporine, proton pump inhibitors, tamoxifen']]) + '<small>This list is not all-inclusive.</small>'),
      N('f.drug'),
      M('A patient with diabetes on pioglitazone has developed bilateral leg edema. First thought?', ['A drug side effect; raise it with the treating physician', 'Severe malnutrition', 'Protein deficiency', 'Edema caused by diabetes itself'], 'Thiazolidinediones are among the medications that cause edema.'),
      P('Match each drug to its class', [['Amlodipine', 'Calcium channel blocker'], ['Pregabalin', 'Anticonvulsant'], ['Naproxen', 'NSAID'], ['Ropinirole', 'Anti-Parkinson drug']]),
      T('Proton pump inhibitors are among the medications that cause edema.', true, 'Correct; under “others” with cyclosporine and tamoxifen.'),
      N('f.drug'),
      M('Which drug is NOT one of the medications that cause edema?', ['Furosemide', 'Gabapentin', 'Corticosteroid', 'Diltiazem'], 'Furosemide is a diuretic used to treat edema.'),
      L('Why this table matters to the dietitian', 'Before attributing edema to nutrition status or recording it as “fluid accumulation”, review the <b>medication list</b>. Drug-induced edema still inflates weight and hides weight loss, so it matters for interpreting weight, but its cause should be stated clearly in the note.'),
      B('Gabapentin and pregabalin are ___ drugs that can cause edema.', ['anticonvulsant', 'antihypertensive', 'hormonal'], 'Both are anticonvulsants and cause edema.')
    ] },
    fl6: { title: 'Grading pitting edema', items: [
      L('Technique', '1. Find an area of the lower extremity where the skin lies over <b>bone</b>: the shin, the malleolus or the top of the foot<br>2. With the <b>pad of your finger or thumb</b> and moderate pressure, press for at least <b>5 seconds</b><br>3. Lift your finger and look at the indentation:<br>  • how <b>deep</b> is it?<br>  • how <b>long</b> does it take to refill?<br>  • <b>how far up</b> the leg does the edema go?' + pic('tip-pitting')),
      O('Put the steps of grading pitting edema in order', ['Find skin over bone (shin or top of the foot)', 'Press with a finger pad and moderate pressure for at least 5 seconds', 'Lift the finger and look at the depth of the pit', 'Time the refill and note how far the edema extends'], 'The correct order for assessing the quality of edema.'),
      L('Grading: three methods', pic(['edema0', 'edema1', 'edema2', 'edema3', 'edema4'], ['No edema', '1+', '2+', '3+', '4+']) + tbl([['Grade', 'Method 1', 'Method 2', 'Method 3 (extent)'], ['1+', 'Slight pitting without distortion, rapidly disappears', 'Barely detectable, immediate rebound', 'Mild; ankles and feet only'], ['2+', 'Somewhat deeper pit, gone 10–25 s later', 'A few seconds to rebound', 'Moderate; lower legs and hands'], ['3+', 'Deep pit, limb looks full and swollen; over 1 min', 'About 10–12 s to rebound', 'Severe; generalized, including upper limbs and face'], ['4+', 'Very deep, limb grossly misshapen; 2–5 min', '8-mm pit, over 20 s to rebound', '—']])),
      L('Pit depth', pic(['pit1', 'pit2', 'pit3', 'pit4'], ['1+ · 2 mm', '2+ · 4 mm', '3+ · 6 mm', '4+ · 8 mm']) + '<small>Edema grading is subjective, but using one consistent scale makes it possible to record changes over time.</small>'),
      M('What grade of edema is this?', ['4+', '2+', '1+', 'No edema'], 'A very deep, wide pit → 4+.'),
      N('f.grade'),
      T('In method 1, 2+ edema is a pit that disappears 10–25 seconds later.', true, 'Correct.'),
      N('f.img'),
      B('In method 2, 4+ edema is a pit of about ___ mm that takes more than 20 seconds to rebound.', ['8', '2', '4'], '2 mm is 1+, 4 mm is 2+, 6 mm is 3+ and 8 mm is 4+.'),
      N('f.img')
    ] },
    fl7: { title: 'Evaluating fluid accumulation', items: [
      L('When and where', tbl([['', 'Inspection', 'Palpation'], ['When', 'Initial visit; repeat at routine intervals or with a significant clinical change', 'Initial visit; repeat at routine intervals'], ['Where', 'Head to toe: face, arms, hands, sacrum, scrotum or vulva, flanks and abdomen, thighs, calves and feet', 'Sacrum and flanks; thighs, calves and feet'], ['Notes', 'Body position (gravity); generalized or localized, unilateral or bilateral', 'Body position; generalized or localized, unilateral or bilateral, pitting or brawny']])),
      M('Which feature can only be determined by “palpation”?', ['Whether the edema is pitting or brawny', 'Whether it is generalized or localized', 'Whether it is unilateral or bilateral', 'The patient’s position'], 'Pitting or brawny can only be told by palpation.'),
      L('A few tips', '• Seek out <b>less obvious</b> areas (flanks, abdomen, thighs, sacrum) by moving blankets and clothing<br>• If you see no swelling, ask: “Do your clothes or jewelry fit differently?” “Have you noticed any weight changes?”<br>• Correlate findings with <b>vital signs, intake and output, lab values and weights</b>'),
      P('Match each tool to its use in fluid assessment', [['Intake and output records', 'Daily fluid balance'], ['Daily weights', 'Rapid volume change'], ['Serum sodium', 'Water retention'], ['Asking about rings', 'Hidden swelling of the hand']]),
      N('f.map'),
      T('If you see no swelling in the feet, you can rule out fluid accumulation.', false, 'Also look at less obvious areas such as the sacrum, flanks and thighs, and ask the patient.'),
      M('In the acute context the patient has 3+ leg edema. In the EMR template, how severe is this fluid accumulation and what does it support?', ['Severe; supports severe malnutrition', 'Mild; supports moderate', 'Moderate; supports moderate', 'Neither'], 'EMR template: 3–4+ is severe; in the acute context, moderate to severe → severe.'),
      N('f.map'),
      B('Because gravity affects where edema collects, always record the patient’s ___.', ['position', 'clothing color', 'mealtime'], 'Sitting, standing or lying down.')
    ] },
    fl8: { title: 'Dehydration: symptoms and labs', items: [
      L('Hard but important', 'Dehydration and hypovolemia are not malnutrition characteristics, but they present the patient with a <b>falsely low weight</b> and lead to <b>overestimating</b> weight loss.<br><br>Assessing them is hard even for experienced practitioners: the exam is <b>neither sensitive nor specific</b> and does not depend on a single indicator. Interpret the exam together with weight, vital signs and labs.'),
      L('Symptoms of dehydration', tbl([['Severity', 'Symptoms'], ['Mild to moderate', 'Lassitude, dry mouth and mucous membranes, thirst, muscle cramps, decreased urine volume or frequency, darker urine, headache, dry skin, low jugular venous pressure, postural dizziness, rise in body temperature, muscle weakness, decreased skin turgor, low blood pressure, no urine output for several hours'], ['Severe', 'Very dark yellow or amber urine, extreme thirst, acute weight loss, rapid heart rate, abdominal or chest pain, irritability or confusion, seizures, coma']])),
      M('Which symptom belongs to “severe” dehydration?', ['Confusion and irritability', 'Thirst', 'Headache', 'Dry skin'], 'Confusion, seizures and coma are signs of severe dehydration.'),
      L('Labs and vital signs', tbl([['Lab or sign', 'Result', 'Note'], ['Serum sodium', '↑ or ↓', 'High with water loss; low with water and sodium loss'], ['Serum potassium', '↑ or ↓', 'High with potassium retention (e.g. renal failure); low with large GI or urine losses'], ['Plasma osmolality', '↑', ''], ['BUN/Cr ratio', '↑', 'Often above 20:1'], ['Hematocrit and albumin', '↑', 'Reduced plasma volume'], ['Metabolic acidosis', 'Possible', 'Bicarbonate loss: diarrhea, high-output fistula or ostomy'], ['Metabolic alkalosis', 'Possible', 'Hydrogen-ion loss: diuretics, vomiting, nasogastric suction'], ['Urine sodium', '↓', 'In hypovolemia (unless a salt-wasting state)'], ['Blood pressure and pulse', 'Low BP, tachycardia', 'Postural at first, then persistent as dehydration worsens']])),
      N('f.bun'),
      P('Match each finding to its meaning in dehydration', [['BUN/Cr above 20', 'Points to dehydration'], ['High albumin', 'Reduced plasma volume'], ['Metabolic alkalosis', 'Vomiting or gastric suction'], ['Low urine sodium', 'Hypovolemia']]),
      T('In dehydration, albumin may be falsely high.', true, 'Correct; because plasma volume is reduced.'),
      N('f.bun')
    ] },
    fl9: { title: 'Examining for dehydration', items: [
      L('Mouth and eyes', '<b>Mouth (lips, gums, tongue)</b>: inspection with a penlight. Normal: moist. Dehydrated: no saliva pooling, thick saliva, dry mucous membranes, fissured tongue, lips and tongue sticking together, cracked lips, complaints of thirst<br><br><b>Eyes</b>: inspection with a penlight. Normal: moist membranes. Dehydrated: stinging or burning, dry membranes, redness, watery eyes' + pic(['dh-mouth', 'dh-eyes'], ['Mouth', 'Eyes'])),
      L('Skin and nails', '<b>Skin turgor</b>: pinch the skin on the back of the hand, the forearm or the sternum for a few seconds and let go. Normal: returns quickly. Dehydrated: returns <b>slowly</b>.<br><small>Reliable in younger patients, but not accurate with obesity or over 55–60 years; skin elasticity is best preserved over the sternum or the inner thigh.</small><br><br><b>Nails (capillary refill)</b>: with the hand above heart level, press the nail bed until it blanches and let go. Normal: pink again in <b>under 2 seconds</b>. Over 2 seconds may mean dehydration (or shock, peripheral vascular disease, hypothermia).' + pic(['dh-turgor', 'dh-turgor2', 'dh-nail'], ['Pinching the skin', 'Slow return', 'Capillary refill'])),
      M('Nail-bed capillary refill took 4 seconds. Which interpretation is best?', ['It may be dehydration; also consider shock, peripheral vascular disease and hypothermia', 'It is definitely dehydration', 'It is normal', 'It is a sign of iron deficiency'], 'Over 2 seconds, with other possible causes.'),
      T('Skin turgor is an accurate test for dehydration in an 80-year-old.', false, 'Over 55–60 years and in obesity it is not accurate; the sternum or inner thigh is better.'),
      O('Put the steps of the capillary refill test in order', ['Hold the patient’s hand above heart level', 'Press the nail bed until it turns white', 'Release the pressure', 'Count the time until it turns pink (normal under 2 seconds)'], 'Normal is under 2 seconds.'),
      L('Who is at risk?', 'Infants, young children, <b>athletes</b>, <b>older adults</b> and people with <b>cognitive impairment</b> are at higher risk. Other conditions:<br>• excessive diarrhea or vomiting<br>• profuse sweating<br>• GI hemorrhage<br>• GI losses from fistulae, ostomies or drains<br>• polyuria (diabetes insipidus, diuretics)<br>• fever, burns<br>• warm environments<br>• prolonged, strenuous exercise'),
      P('Match each patient to their dehydration risk factor', [['Patient with a high-output ileostomy', 'GI losses'], ['Patient with diabetes insipidus', 'Polyuria'], ['Patient with burns', 'Fluid loss through the skin'], ['Older adult with dementia', 'Cognitive impairment']]),
      M('Which mouth finding points to dehydration?', ['A fissured tongue and thick saliva', 'Moist mucosa', 'Saliva pooling under the tongue', 'Pink, soft lips'], 'Thick saliva, a fissured tongue, cracked lips and dry mucosa.')
    ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English content, world 5: Function & micronutrients (mirrors content-mn.js; question pictures are shared) */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, tbl, pic } = EA.K;
  const EN = EA.EN;

  EN.worlds.mn = { name: 'Function & micronutrients', sub: 'Grip strength and signs in the skin, nails, hair and mouth', levels: ['Strength Testers', 'Skin & Nail Detectives', 'Head-to-Toe Masters'] };

  Object.assign(EN.lessons, {
    mn1: { title: 'Functional status', items: [
      L('Strength = prognosis', 'Reduced muscle strength predicts <b>survival</b> in critical illness. Reduced grip strength is a reliable predictor of <b>longer hospital stays</b>, poorer quality and length of life and <b>higher mortality</b>.<br><br>Immobility, inflammation, inadequate feeding and insulin resistance together accelerate muscle catabolism.'),
      M('Reduced grip strength predicts which outcome?', ['Longer hospital stays and higher mortality', 'Weight gain', 'Faster wound healing', 'Lower nutrition needs'], 'Muscle strength reflects the patient’s prognosis.'),
      L('Grip strength in each context', tbl([['Context', 'Moderate', 'Severe'], ['Acute', 'Not applicable', 'Measurably reduced'], ['Chronic', 'Not applicable', 'Measurably reduced'], ['Social', 'Not applicable', 'Measurably reduced']]) + 'Low grip strength only supports <b>severe malnutrition</b>.'),
      T('Reduced grip strength can be one of the two characteristics needed for “moderate” malnutrition.', false, '“Not applicable” for moderate; it only supports severe.'),
      L('If there is no dynamometer', 'In some settings a dynamometer is not available or practical. Alternatives:<br>• <b>gait speed</b> and the <b>chair-stand test</b><br>• quality-of-life and function tools: the <b>Katz</b> index (activities of daily living), <b>Lawton</b> (instrumental activities), <b>Karnofsky</b> and <b>ECOG</b><br>• nutrition assessment tools with a function component: <b>SGA</b>, the <b>Dialysis Malnutrition Score</b> and <b>PG-SGA</b>'),
      P('Match each tool to its domain', [['Katz index', 'Activities of daily living'], ['Lawton', 'Instrumental activities of daily living'], ['PG-SGA', 'Nutrition assessment in cancer'], ['ECOG', 'Performance status in oncology']]),
      M('Which device is validated for measuring grip strength?', ['The Jamar dynamometer', 'A skinfold caliper', 'A digital scale', 'A tape measure'], 'The Jamar dynamometer is the validated device for grip strength.'),
      B('A change in function counts as nutritional only when it results from muscle ___.', ['wasting', 'gain', 'cramps'], 'Loss of function from a stroke, fracture or arthritis has a non-nutritional cause.')
    ] },
    mn2: { title: 'The handgrip dynamometer', items: [
      L('The American Society of Hand Therapists method', 'The “gold standard” technique: <b>three alternating measurements</b> for each hand, switching rapidly between hands. This allows recovery from muscle fatigue and prevents submaximal effort or malingering.<br><br>In total <b>6 readings</b> are taken so a mean can be calculated for each hand, which is then compared with the <b>manufacturer’s normative table</b>.'),
      L('Steps', '1. Seat the patient in the standard position:<br>  • in an armchair, upright, arms unsupported<br>  • or at the side of the bed, or in bed with the legs out straight (90° to the upper body)<br>  • shoulders relaxed, <b>elbow at 90°</b>, wrist not bent<br>2. Allow <b>15 seconds</b> of rest between trials<br>3. <b>Alternate</b> hands until there are 3 measurements for each<br>4. Add the three values for each hand and divide by 3<br>5. Compare with the manufacturer’s chart'),
      O('Put the steps of grip-strength testing in order', ['Seat the patient in the standard position with the elbow at 90°', 'Squeeze the device with one hand', 'Rest 15 seconds and repeat with the other hand', 'Continue until each hand has three measurements', 'Average each hand and compare with the manufacturer’s chart'], 'The standard method for measuring grip strength.'),
      L('Correct and incorrect', pic(['grip-ok0', 'grip-ok1', 'grip-bad0', 'grip-bad1'], ['✔ Correct: seated, elbow at 90°', '✔ Correct: device beside the body', '✘ Incorrect: arm straight out in front', '✘ Incorrect: poor sitting position on the bed'])),
      M('How is the grip-strength position in this picture?', ['Incorrect; the elbow should be at 90° and the arm beside the body', 'Correct', 'Correct, but the patient should stand', 'Correct, as long as it is repeated three times'], 'A straight arm stretched out in front is “incorrect”.'),
      N('z.grip'),
      T('All six readings can be taken in a row with one hand.', false, 'The hands alternate (rapid exchange) to reduce fatigue and malingering.'),
      L('Cut-offs', 'Compare the result with the manufacturer’s chart. Common cut-offs for <b>low strength</b>:<br>• men: <b>below 27 kg</b><br>• women: <b>below 16 kg</b><br><small>These numbers are for sarcopenia screening; interpret “measurably reduced” with age, sex and the device’s table.</small>'),
      N('z.grip')
    ] },
    mn3: { title: 'Micronutrients: introduction', items: [
      L('Clues on the body', 'Micronutrient deficiencies are <b>not</b> one of the six malnutrition characteristics, but they provide <b>supporting evidence</b> for a malnutrition diagnosis and give clues about nutrient ingestion, digestion, absorption and metabolism.<br><br>Highest risk: chronic conditions with <b>malabsorption</b>, <b>pancreatic insufficiency</b>, <b>end-stage renal disease</b>, restricted diets and lack of access to food.'),
      M('What role do signs of micronutrient deficiency play in diagnosing malnutrition?', ['Supporting evidence; they are not among the six characteristics', 'They are one of the six main characteristics', 'On their own they prove severe malnutrition', 'They are unrelated to malnutrition'], 'Micronutrient signs are only supporting evidence.'),
      L('Why skin, hair, nails and mouth?', 'These tissues <b>turn over quickly</b> and show deficiencies early:<br>' + tbl([['Tissue', 'Turnover'], ['Skin', 'Every 10–30 days'], ['Thumbnail', '0.10–0.12 mm per day'], ['Hair', '0.3 mm per day'], ['Oral mucosa', 'Less than 1 week']]) + 'The skin is the body’s largest organ and makes up about <b>16% of body weight</b>.'),
      P('Match each tissue to its turnover rate', [['Oral mucosa', 'Less than 1 week'], ['Skin', '10–30 days'], ['Hair', '0.3 mm per day'], ['Thumbnail', '0.1 mm per day']]),
      T('Because the oral mucosa renews quickly, monitoring it is useful for judging the effect of nutrition therapy.', true, 'Correct; turnover under a week shows deficiencies early and improvement early too.'),
      L('Always consider another cause', 'Almost every sign also has a <b>non-nutrient</b> cause: allergies, medications, skin disease, trauma, hair dye or nail polish.<br><br>Put a micronutrient sign together with the <b>diet history</b>, labs and the findings in the skin, hair, nails and mouth.'),
      N('z.non'),
      B('Micronutrient deficiencies are most common in patients with malabsorption, pancreatic insufficiency and end-stage ___ disease.', ['renal', 'heart', 'skin'], 'End-stage renal disease is a risk factor for micronutrient deficiency.')
    ] },
    mn4: { title: 'Skin (1)', items: [
      L('Petechiae and dermatitis', pic(['petechiae', 'dermatitis'], ['Petechiae', 'Dermatitis']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Petechiae: small hemorrhagic spots', 'Vitamin K, E or C deficiency', 'Hematologic disorder, liver disease, anticoagulant overdose'], ['Dermatitis: swollen, red skin that may blister or ooze', 'Zinc or essential fatty acid deficiency', 'Dermatitis, allergic or drug rashes, psoriasis']])),
      M('Which deficiency does this skin sign mostly suggest?', ['Vitamin K, E or C', 'Zinc', 'Niacin', 'Iron'], 'Petechiae: small hemorrhagic spots; vitamin K, E or C deficiency.'),
      L('Pellagra and “flaky paint” skin', pic(['pellagra', 'flakypaint'], ['Pellagrous dermatosis', '“Flaky paint” dermatitis']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Pellagrous dermatosis: hyperpigmentation of areas exposed to sun or trauma', 'Niacin or tryptophan deficiency', 'Burns, Addison’s disease, psoriasis'], ['“Flaky paint” dermatitis: bilateral peeling-paint skin in areas not exposed to sun', 'Protein-calorie deficiency', 'Environmental factors']])),
      M('Darkened, scaly skin in sun-exposed areas of a patient with alcoholism points most to which deficiency?', ['Niacin', 'Vitamin A', 'Iodine', 'Copper'], 'Pellagrous dermatosis: niacin or tryptophan.'),
      T('“Flaky paint” dermatitis in areas away from the sun points to protein-calorie deficiency.', true, 'Correct.'),
      N('z.img'),
      P('Match each skin sign to its deficiency', [['Petechiae', 'Vitamin K, E or C'], ['Dermatitis', 'Zinc or essential fatty acids'], ['Pellagra', 'Niacin'], ['Flaky paint', 'Protein-calorie']]),
      M('A patient has dermatitis around the mouth after months of parenteral nutrition without trace elements. Most likely deficiency?', ['Zinc', 'Vitamin K', 'Iodine', 'Vitamin B12'], 'Dermatitis: zinc or essential fatty acids; with long-term parenteral nutrition lacking trace elements, zinc deficiency is the concern.')
    ] },
    mn5: { title: 'Skin (2)', items: [
      L('Dryness, pallor, wounds', pic(['xerosis', 'pallor', 'wound'], ['Xerosis', 'Pallor', 'Chronic wound']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Xerosis: dry, scaly, flaky skin', 'Dehydration, essential fatty acids, vitamin A', 'Environmental and hygiene factors'], ['Pallor', 'Iron, folate, vitamin B12', 'Low-volume, low-perfusion states'], ['Nonhealing wounds', 'Zinc, vitamin C, protein', 'Cellulitis']])),
      M('A wound that won’t heal is linked to deficiency of which group?', ['Zinc, vitamin C and protein', 'Iodine and copper', 'Vitamins K and E', 'Biotin and magnesium'], 'A chronic wound is linked to zinc, vitamin C and protein deficiency.'),
      L('The skin checklist', 'Throughout the whole exam, look at the skin for:<br>• scaliness, poor wound healing, dermatitis<br>• rashes, petechiae, ecchymosis<br>• dryness, poor turgor, pressure ulcers<br><br><b>Tip</b>: skin integrity and elasticity are altered by sun, age and hydration; allergies and medications cause rashes, and nutrition abnormalities cause pigment changes and rashes.'),
      T('The skin is only checked at the start of the exam.', false, 'The skin is observed “throughout the entire examination”.'),
      M('Pale skin is linked to which deficiencies?', ['Iron, folate and vitamin B12', 'Vitamins A and E', 'Zinc and copper', 'Niacin and tryptophan'], 'It is also seen in low-volume or low-perfusion states.'),
      N('z.img'),
      N('z.sign'),
      B('Xerosis can come from dehydration, essential fatty acid deficiency or vitamin ___ deficiency.', ['A', 'K', 'B12'], 'Xerosis: dehydration, essential fatty acids or vitamin A.')
    ] },
    mn6: { title: 'Nails', items: [
      L('A healthy nail', 'Nails are made of keratin and should be firmly attached to the nail bed, <b>smooth</b>, <b>uniformly thick</b> and <b>symmetrical</b>. A healthy nail is <b>translucent with a pink hue</b>, flat or slightly convex, with a <b>base angle of 160°</b>.<br><br>Nail changes can result from nutrient deficiencies or systemic disease.'),
      L('Nail signs', pic(['koilonychia', 'beau', 'splinter', 'flakynail'], ['Koilonychia', 'Beau’s lines', 'Splinter hemorrhages', 'Flaky nails']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Koilonychia (spoon-shaped)', 'Iron deficiency, with or without anemia', 'Hereditary, infection, diabetes, hypothyroidism'], ['Beau’s lines (transverse grooves)', 'Protein inadequacy, hypercalcemia', 'Trauma, coronary occlusion, transient illness'], ['Pale nail bed', 'Vitamins A and C', 'Poor circulation'], ['Splinter hemorrhages', 'Scurvy or hemochromatosis', 'Septicemia, trauma, hemodialysis'], ['White areas on the nail plate', 'Selenium', 'Trauma, environment'], ['Flaky nails', 'Hypomagnesemia, biotin, essential fatty acids', 'Trauma, environment'], ['Clubbing (angle over 180°)', 'None', 'Respiratory and cardiac disease, cirrhosis, colitis']])),
      M('Which deficiency does this nail shape mostly suggest?', ['Iron', 'Selenium', 'Biotin', 'Vitamin C'], 'Spoon-shaped nails (koilonychia) → iron deficiency.'),
      T('Nail clubbing has a specific nutritional cause.', false, 'Nutrient finding “none”; the causes are respiratory, cardiac, cirrhosis and colitis.'),
      M('Transverse grooves on every nail, a few weeks after a long hospital stay. Most likely nutritional interpretation?', ['Inadequate protein during the illness', 'Iron deficiency', 'Iodine deficiency', 'Vitamin A deficiency'], 'Beau’s lines: protein inadequacy, hypercalcemia or a transient illness.'),
      L('Nail exam tips', '• To assess capillary refill, gently squeeze the nail between thumb and forefinger; if it <b>bleeds</b>, it may indicate general malnutrition.<br>• A <b>lackluster, dull</b> nail plate may indicate protein deficiency, but infection or lupus can do the same.<br>• Consider nail polish and manicures.' + pic('tip-refill')),
      N('z.img'),
      P('Match each nail sign to its nutrient finding', [['Spoon-shaped nail', 'Iron'], ['Splinter hemorrhages', 'Scurvy'], ['White areas on the nail plate', 'Selenium'], ['Flaky nails', 'Biotin or magnesium']])
    ] },
    mn7: { title: 'Hair', items: [
      L('Healthy hair', 'Hair grows about <b>0.3 mm a day</b> and, like nails and skin, reflects micronutrient changes. Healthy hair is <b>shiny, smooth, resilient</b> and <b>not easily plucked</b>.<br><br>Poor hair quality goes with deficiencies of <b>protein, zinc, essential fatty acids and biotin</b>.<br><br>Checklist: thinness, brittleness, patchy growth, easy pluckability, dullness and dryness.'),
      L('Hair signs', pic(['alopecia', 'lighthair', 'corkscrew'], ['Alopecia', 'Lightened hair color', 'Corkscrew hair']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Alopecia (thinning or loss)', 'Protein, zinc or biotin; diffuse loss including eyebrows: essential fatty acids or selenium', 'Male-pattern baldness, hypothyroidism or hypopituitarism, cancer treatment, Cushing’s, medication'], ['Lightened hair color', 'Copper, selenium, protein', 'Hair dye'], ['Corkscrew hair on the arms', 'Copper; follicular hyperkeratosis of scurvy in older adults', 'Chemical alteration']])),
      M('Corkscrew hair on an older adult’s arm, together with bleeding gums, points most to what?', ['Scurvy (vitamin C deficiency)', 'Iron deficiency', 'Iodine deficiency', 'Vitamin A deficiency'], 'Follicular hyperkeratosis of scurvy in older adults; bleeding gums are also a sign of vitamin C deficiency.'),
      L('Hair exam tips', '• <b>Lackluster or dull</b> hair may indicate iron, protein or zinc deficiency; consider chemical treatment and <b>ask</b> whether the hair has been colored or altered.<br>• Palpate the hair to see whether it is <b>resilient</b> and <b>not easily plucked</b>.<br>• Ask whether more hair is falling out; notice hair on the <b>pillow or clothing</b>.'),
      T('Before blaming copper deficiency for lightened hair, you should ask whether the hair has been dyed.', true, 'Correct; its main non-nutrient cause is chemical alteration.'),
      M('Diffuse hair loss together with loss of the eyebrows is linked to which deficiency?', ['Essential fatty acids or selenium', 'Vitamin K', 'Iodine', 'Vitamin D'], 'Diffuse loss with the eyebrows: essential fatty acids or selenium.'),
      N('z.img'),
      B('Healthy hair is shiny and resilient and is not easily ___.', ['plucked', 'wet', 'white'], 'Being easily pluckable is a sign of poor quality.')
    ] },
    mn8: { title: 'Eyes and face', items: [
      L('The eyes and vitamin A', 'Examining the eyes, face, lips and mouth can reveal micronutrient deficiencies and should agree with the skin, nail and hair findings and the diet history. For example, <b>vitamin A</b> deficiency can show as <b>night blindness</b>, <b>Bitot’s spots</b> and <b>keratomalacia</b>.' + pic(['bitot', 'keratomalacia', 'paleconj', 'seborrhea'], ['Bitot’s spot', 'Keratomalacia', 'Pale conjunctiva', 'Nasolabial seborrhea'])),
      L('Eye and face signs', tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Nasolabial seborrhea (scaling around the nostrils)', 'Vitamin B2, B3 or B6', 'Tuberous sclerosis'], ['Bitot’s spot (gray, spongy spot on the white of the eye)', 'Vitamin A', 'Pinguecula in older adults, Gaucher disease, pterygium'], ['Keratomalacia (hazy cornea)', 'Vitamin A', 'Hyperthyroidism'], ['Pale conjunctivae', 'Iron, folate, vitamin B12', 'Low cardiac-output states']])),
      M('Which deficiency does this eye finding mostly suggest?', ['Vitamin A', 'Iron', 'Vitamin C', 'Zinc'], 'Bitot’s spot → vitamin A deficiency.'),
      L('How to examine the eyes', '• Ask whether the patient has <b>difficulty seeing</b> or <b>abnormal eye dryness</b> (possibly vitamin A deficiency, or environmental irritation)<br>• Ask the patient to <b>look side to side</b> so you can see the whole eye<br>• Hold up your index finger and ask the patient to follow it; as you move it, shine the penlight onto the <b>sclera</b> and <b>avoid shining it directly into the pupil</b>' + pic('tip-eye')),
      T('To see the sclera, the penlight should be shone directly into the pupil.', false, 'Try not to shine the light directly into the pupil; aim it at the sclera.'),
      M('Pale conjunctivae are linked to which deficiencies?', ['Iron, folate and vitamin B12', 'Vitamin A', 'Vitamins B2 and B6', 'Iodine'], 'Non-nutrient cause: low cardiac output.'),
      N('z.img'),
      P('Match each sign to its nutrient finding', [['Night blindness', 'Vitamin A'], ['Nasolabial seborrhea', 'Vitamin B2, B3 or B6'], ['Pale conjunctiva', 'Iron, folate or B12']])
    ] },
    mn9: { title: 'Mouth and neck', items: [
      L('Lips and gums', pic(['cheilosis', 'angular', 'gums', 'palegum'], ['Cheilosis', 'Angular stomatitis', 'Spongy, bleeding gums', 'Pale gums']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Cheilosis and angular stomatitis', 'Vitamin B2, B3 or B6; iron', 'Ill-fitting dentures, herpes, harsh climate'], ['Spongy, bleeding gums', 'Vitamin C', 'Gingivitis, periodontal disease, drugs, leukemia'], ['Pale gums', 'Iron', 'Low-flow state']])),
      M('Which deficiency does this gum finding mostly suggest?', ['Vitamin C', 'Iron', 'Zinc', 'Vitamin A'], 'Spongy, bleeding gums → vitamin C; but also rule out gingivitis from poor oral hygiene.'),
      L('Tongue, mouth lesions and neck', pic(['glossitis', 'mouthlesion', 'parotid', 'thyroid'], ['Glossitis', 'Mouth lesion', 'Parotid enlargement', 'Enlarged thyroid']) + tbl([['Sign', 'Nutrient finding', 'Non-nutrient causes'], ['Glossitis (inflamed magenta tongue)', 'B2, B3, B6, B12, folate; severe iron deficiency', 'Crohn’s disease, uremia, infection, malignancy'], ['Mouth lesions', 'Zinc', 'Trauma, graft-vs-host disease, cancer treatment'], ['Bilateral parotid enlargement', 'Protein inadequacy', 'Bulimia, mumps, cirrhosis, Sjögren’s syndrome'], ['Enlarged thyroid', 'Iodine', 'Graves’ disease, thyroiditis, malignancy']])),
      M('Bilateral parotid enlargement in a young woman with frequent vomiting points most to what?', ['Bulimia (and protein inadequacy)', 'Iodine deficiency', 'Vitamin C deficiency', 'Zinc deficiency'], 'Nutrient finding is protein inadequacy; bulimia and excessive vomiting are an important non-nutrient cause.'),
      L('Examining the mouth', '• Ask the patient to <b>stick out the tongue</b>, move it side to side and lift it<br>• Watch the patient swallow or ask about swallowing<br>• These three questions help separate nutrient from non-nutrient causes:<br>  1. Do you have any changes in taste?<br>  2. Do you have any burning sensations in your mouth?<br>  3. Do you have any mouth pain or notice gum bleeding?<br><small>Collaboration between dietitians and dental professionals is recommended for prevention and treatment.</small>' + pic('tip-mouth')),
      M('A smooth, shiny, magenta tongue in a patient with pernicious anemia. Most likely deficiency?', ['Vitamin B12', 'Vitamin C', 'Iodine', 'Selenium'], 'Glossitis goes with B-vitamin (including B12) and folate deficiency.'),
      N('z.img'),
      O('Put the NFPE checklist in head-to-toe order', ['Hair and temple', 'Mouth, teeth, gums and eyes', 'Chest and shoulders', 'Back and midaxillary line', 'Triceps, hands and nails', 'Thighs, calves and feet'], 'Head, upper body, lower body; the skin throughout. Every area is examined on both sides.')
    ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — English hospital rounds (mirrors rounds.js step by step; pictures and answers are shared) */
(function (root) {
  const EA = root.EA;
  const EN = EA.EN = EA.EN || { worlds: {}, lessons: {}, rounds: {} };
  const M = (stage, q, opts, why, kase) => ({ t: 'mcq', stage, q, opts, why, case: kase });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const S = (stage, q, ans, tol, unit, why, hint) => ({ t: 'numS', stage, q, ans, tol, unit, why, hint });
  const T = (stage, q, a, why) => ({ t: 'tf', stage, q, a, why });
  const SEV = 'Severe protein-calorie malnutrition (E43)', MOD = 'Moderate protein-calorie malnutrition (E44.0)', NONE = 'Malnutrition criteria not met', MILD = 'Mild malnutrition (E44.1)';

  Object.assign(EN.rounds, {
    r1: { title: 'Gastric cancer and poor appetite', who: 'Woman, 62, gastric cancer on chemotherapy',
      brief: 'Her appetite fell two months ago when chemotherapy started, and she says she eats “half of usual”. Her clothes have become loose. On exam the temples are slightly hollow and the clavicles more prominent than usual.',
      chart: [['Weight 6 months ago', '68 kg'], ['Current weight', '60 kg'], ['Intake', 'About 55% of needs, 2 months'], ['Exam', 'Mild-to-moderate muscle loss']],
      steps: [
        M('Context', 'In which context is this patient’s malnutrition?', ['Chronic illness', 'Acute illness or injury', 'Social circumstances', 'Cannot be determined'], 'Cancer is in the chronic context: prolonged, lower-intensity inflammation.'),
        S('Calculation', 'What is the percentage weight loss over 6 months?', 11.8, 0.3, '%', '(68 − 60) ÷ 68 × 100 = <b>11.8%</b>', '(usual − current) ÷ usual × 100'),
        M('Weight loss', 'Which diagnosis does this weight loss support?', ['Severe malnutrition', 'Moderate malnutrition', 'Does not meet the criterion'], 'Chronic: more than 10% in 6 months → severe.'),
        M('Intake', 'Intake of 55% of needs for 2 months in chronic illness?', ['Supports severe malnutrition', 'Supports moderate malnutrition', 'Does not meet the criterion'], 'Chronic: ≤75% for at least 1 month.'),
        M('Diagnosis', 'What diagnosis do you recommend?', [SEV, MOD, NONE, MILD], 'Two severe characteristics (weight loss and intake) + mild muscle loss (supports moderate) → severe.')
      ] },
    r2: { title: 'The man who lives alone', who: 'Man, 80, lives alone, mild dementia',
      brief: 'His son says he has eaten one meal a day since his wife died 4 months ago. The patient gives short answers. No signs of inflammation. The temples are hollow and there is an obvious depression between thumb and forefinger.',
      chart: [['Weight 4 months ago', '63 kg'], ['Current weight', '58 kg'], ['Intake', 'About 45% of needs, 4 months'], ['Temperature, pulse, CRP', 'Normal']],
      steps: [
        M('Interview', 'Who is the best source of the diet history for this patient?', ['The patient together with his son as caregiver', 'Only the hospital chart', 'Only the patient', 'No history is needed'], 'When the patient cannot report well, family or caregivers supply and verify the information.'),
        M('Context', 'Context of the malnutrition?', ['Social or environmental circumstances', 'Chronic illness', 'Acute illness', 'No malnutrition'], 'Living alone, grief and dementia without active inflammation → social or environmental.'),
        S('Calculation', 'Percentage weight loss?', 7.9, 0.3, '%', '(63 − 58) ÷ 63 × 100 = <b>7.9%</b> over 4 months'),
        M('Weight loss', 'Which criterion does 7.9% in 4 months (social context) meet?', ['It does not meet the criterion; the 6-month window threshold is 10%', 'Severe malnutrition', 'Moderate malnutrition'], 'Four months is past the 3-month window, so it is compared with the 6-month window (10%); 7.9% is below that. Keep following the weight, though.'),
        M('Diagnosis', 'With intake of 45% for 4 months and severe muscle loss, what do you recommend?', [SEV, MOD, NONE, MILD], 'Social: intake ≤50% for 1 month → severe; severe wasting → severe. Two severe characteristics.')
      ] },
    r3: { title: 'Day 9 after a Whipple', who: 'Man, 54, pancreaticoduodenectomy (Whipple)',
      brief: 'He was NPO for 4 days after surgery and has eaten less than half of his diet since; in total 8 days at 50% or less. His weight went from 81 to 79.5 kg in one week. The orbital fat pads are slightly hollow and both ankles have 1+ edema.',
      chart: [['Weight before surgery', '81 kg'], ['Weight today', '79.5 kg'], ['Intake', '50% or less, 8 days'], ['Edema', '1+ both ankles'], ['Fat', 'Mild loss']],
      steps: [
        M('Context', 'Context of the malnutrition?', ['Acute illness or injury', 'Chronic illness', 'Social circumstances', 'Cannot be determined'], 'Major surgery: heightened, high-intensity inflammation.'),
        S('Calculation', 'Percentage weight loss in one week?', 1.85, 0.1, '%', '(81 − 79.5) ÷ 81 × 100 = <b>1.85%</b>'),
        M('Weight loss', 'This weight loss (acute context, one week)?', ['Supports moderate malnutrition', 'Supports severe malnutrition', 'Does not meet the criterion'], 'Acute: 1–2% in 1 week → moderate; more than 2% → severe.'),
        T('Interpretation', 'The 1+ ankle edema may be hiding some of the true weight loss.', true, 'Correct; fluid adds weight, so the true weight loss may be more than 1.85%.'),
        M('Diagnosis', 'What diagnosis do you recommend?', [MOD, SEV, NONE, MILD], 'Intake ≤50% for ≥5 days → severe (1 severe characteristic). Weight loss, mild fat loss and mild edema → moderate. Severe needs two severe characteristics → moderate.')
      ] },
    r4: { title: 'Septic shock in the ICU', who: 'Woman, 45, peritonitis and septic shock',
      brief: 'ICU day 3, on mechanical ventilation. She has a fever, tachycardia and needs vasopressors. The physician asks whether the low albumin means she is malnourished.',
      chart: [['Temperature', '38.9 °C'], ['Pulse', '118 /min'], ['CRP', '18 mg/dL'], ['Albumin', '2.3 g/dL'], ['Glucose', '210 mg/dL']],
      steps: [
        M('Vital signs', 'Which vital signs point to inflammation?', ['Fever of 38.9 and a pulse of 118', 'Only the fever', 'Neither', 'Only the pulse'], 'Fever ≥37.7 and pulse over 100.'),
        M('Albumin', 'Best answer to the physician about an albumin of 2.3?', ['Low albumin here mostly reflects inflammation and does not prove malnutrition on its own', 'Yes, albumin below 3 means severe malnutrition', 'Low albumin means dehydration', 'Albumin is unrelated to inflammation'], 'Albumin is a marker of inflammation and fluid status; it is not one of the six characteristics.'),
        M('Context', 'If malnutrition is found, in which context will it be?', ['Acute illness or injury', 'Chronic illness', 'Social circumstances'], 'Sepsis and major surgery: intense, acute inflammation.'),
        M('Chart', 'Which items do you tick under “markers of inflammation” in the EMR template?', ['Fevers, tachycardia, sepsis, elevated CRP, hypoalbuminemia, hyperglycemia', 'Only sepsis', 'Weight loss and muscle wasting', 'None; it is too early'], 'All of these are inflammation markers in the EMR template.'),
        T('Monitoring', 'Because muscle loss in the ICU can become evident within the first week, this patient should be examined early and serially.', true, 'Correct; muscle wasting is fast in the ICU.')
      ] },
    r5: { title: 'Diabetes and unemployment', who: 'Man, 50, type 2 diabetes',
      brief: 'He lost his job three months ago and for two months has eaten only bread and tea; he cannot afford insulin either. No fever and a normal CRP. His temples and the fat under the triceps are slightly reduced.',
      chart: [['Weight 2 months ago', '74 kg'], ['Current weight', '70 kg'], ['Intake', 'About 50% of needs, 2 months'], ['Fasting glucose', '185 mg/dL'], ['CRP', '0.4 mg/dL']],
      steps: [
        M('Context', 'Context of this patient’s malnutrition?', ['Social or environmental circumstances', 'Chronic illness (diabetes)', 'Acute illness', 'No malnutrition'], 'A patient with diabetes who lost their job; the main cause is economic and there is no active inflammation.'),
        M('Glucose', 'A fasting glucose of 185 in this patient most likely reflects what?', ['Uncontrolled diabetes because he has no insulin', 'Severe acute inflammation', 'Severe malnutrition', 'Dehydration'], 'Hyperglycemia has many causes; here untreated diabetes is more likely than inflammation (normal CRP).'),
        M('Weight loss', '5.4% loss in 2 months (social context)?', ['Does not meet the criterion; the 3-month window threshold is 7.5%', 'Supports severe malnutrition', 'Supports moderate malnutrition'], 'Two months is past the 1-month window, so it is compared with the 3-month window (7.5%).'),
        M('Intake', 'Intake of 50% for 2 months in the social context?', ['Supports severe malnutrition', 'Supports moderate malnutrition', 'Does not meet the criterion'], 'Social: ≤50% for at least 1 month → severe.'),
        M('Diagnosis', 'What diagnosis do you recommend?', [MOD, SEV, NONE, MILD], 'One severe characteristic (intake) and two moderate ones (mild muscle and fat loss) → moderate.'),
        M('Intervention', 'Which action matters most in his care plan?', ['Referral to a social worker plus a nutrition plan and medication coordination with the physician', 'Only an oral high-calorie supplement', 'Discharge without follow-up', 'Parenteral nutrition'], 'The root cause is economic; without addressing it, no nutrition intervention will last.')
      ] },
    r6: { title: 'Writing the note', who: 'Woman, 70, chronic heart failure, admitted for breathlessness',
      brief: 'You have finished the assessment: intake 65% for 2 months, 2+ edema in both legs that makes weight unreliable, severe wasting of the temples and clavicles, and reduced but not severe fat under the triceps. Now you have to write the chart note.',
      chart: [['Intake', '65% of needs, 2 months'], ['Edema', '2+ both legs'], ['Muscle', 'Severe wasting (temples, clavicles)'], ['Fat', 'Mild to moderate']],
      steps: [
        M('Diagnosis', 'Recommended diagnosis?', [SEV, MOD, NONE, MILD], 'Chronic: intake ≤75% for ≥1 month → severe; severe muscle wasting → severe. Two severe characteristics.'),
        M('Writing', 'Which sentence is best for the chart?', ['Severe protein-calorie malnutrition in the context of chronic illness is recommended, based on intake of 65% of needs for 2 months and severe wasting of the temporalis and clavicular muscles; weight is unreliable because of 2+ edema.', 'The patient has severe malnutrition.', 'Severe malnutrition was diagnosed.', 'The patient looks thin and probably has malnutrition.'], 'A recommendation, with etiology, severity, evidence for each characteristic and an explanation of the weight limitation.'),
        O('Order', 'Put the sections of the note in order', ['Recommended diagnosis and context', 'Evidence for each characteristic', 'Markers of inflammation', 'Nutrition intervention', 'Monitoring and evaluation plan'], 'The EMR template: from the conclusion to the evidence, then treatment and monitoring.'),
        T('Professional practice', 'If the physician agrees with the recommendation, this is documented in the physician’s note.', true, 'Correct; the final diagnosis rests with the physician.'),
        M('Edema', 'How do you record 2+ fluid accumulation in this chronic context?', ['Moderate fluid accumulation in the lower extremities; supports moderate malnutrition', 'Severe fluid accumulation', 'I don’t record it', 'Ascites'], 'EMR template: 2+ = moderate; location: lower extremities. Chronic: mild or moderate → supports moderate.')
      ] },
    r7: { title: 'Trauma and swollen legs', who: 'Man, 35, road traffic accident, ICU day 10',
      brief: 'He has pelvic and femoral fractures; his legs are splinted and swollen. He has been extubated and can now sit up. His intake has been about 40% of needs for 10 days.',
      chart: [['Intake', '40% of needs, 10 days'], ['Legs', 'Splints and edema'], ['Status', 'Sitting up, alert']],
      steps: [
        M('Where', 'Where do you mainly examine muscle?', ['The upper body: temples, clavicles, shoulders, hands', 'Only the thighs', 'Only the calves', 'An exam is not possible'], 'The legs are splinted and edematous; the upper body is less affected by edema and easier to reach.'),
        M('Picture', 'His temples and orbital area look like this picture. Grade?', ['Mild to moderate', 'Normal', 'Severe'], 'A slight temporal depression and slightly dark circles under the eyes.'),
        M('Clavicle', 'The clavicles are more prominent and the acromion protrudes slightly. In the acute context, a “moderate” muscle loss…', ['Supports severe malnutrition', 'Supports moderate malnutrition', 'Does not meet the criterion'], 'In the acute context: moderate wasting → severe malnutrition.'),
        M('Diagnosis', 'With intake of 40% for 10 days?', [SEV, MOD, NONE, MILD], 'Intake ≤50% for ≥5 days → severe + moderate loss in acute illness → severe.'),
        T('Trap', 'The broken leg being thinner than the healthy leg is evidence of malnutrition.', false, 'One-sided wasting comes from the fracture and immobility; nutritional wasting is symmetrical.')
      ] },
    r8: { title: 'Obesity that hides', who: 'Woman, 58, BMI 34, active Crohn’s disease',
      brief: 'For four months abdominal pain and diarrhea have made her eat less (about 65% of needs). She says, “I’m still overweight, so I can’t be malnourished.” The back of her hands and the area between thumb and forefinger are clearly hollow, and her grip strength is measurably reduced.',
      chart: [['BMI', '34 kg/m²'], ['Intake', '65% of needs, 4 months'], ['Hands', 'Obvious depressions between the bones'], ['Grip strength', 'Reduced']],
      steps: [
        M('Obesity', 'The right reply to “I’m still overweight, so I can’t be malnourished”?', ['Obesity hides muscle loss but doesn’t rule it out; the muscles in your hands have wasted', 'That’s right; with a high BMI malnutrition is impossible', 'You should lose weight first', 'Only a blood test can tell'], 'Excess fat limits observing and palpating muscle; low-fat areas such as the hands and temples help.'),
        M('Picture', 'The back of her hand looks like this picture. Grade?', ['Severe', 'Mild to moderate', 'Normal'], 'Depressions between the bones and prominent bones → severe.'),
        M('Context', 'Context?', ['Chronic illness', 'Acute illness', 'Social circumstances'], 'Long-standing active Crohn’s disease: chronic illness (a severe flare can be acute on chronic).'),
        M('Grip', 'What does the reduced grip strength support in this patient?', ['Only severe malnutrition', 'Moderate malnutrition', 'Nothing', 'Only in the acute context'], 'Low grip strength only supports severe malnutrition.'),
        M('Diagnosis', 'Recommended diagnosis?', [SEV, MOD, NONE, MILD], 'Intake ≤75% for ≥1 month (severe), severe muscle wasting (severe) and reduced grip (severe) → severe.')
      ] },
    r9: { title: 'Stroke and a thin hand', who: 'Man, 68, three months after a left-hemisphere stroke',
      brief: 'His right arm and leg are weak and thinner than the left. He eats with help and takes about 90% of his needs. He has lost 2% of his weight in 3 months. Both temples and clavicles are normal.',
      chart: [['Intake', '90% of needs'], ['Weight loss', '2% in 3 months'], ['Right side', 'Wasting and weakness'], ['Left side', 'Normal']],
      steps: [
        M('Symmetry', 'How do you interpret the one-sided wasting on the right?', ['Caused by the stroke and disuse; not nutritional', 'Severe malnutrition', 'Moderate malnutrition', 'Edema on the left'], 'Nutritional wasting is symmetrical; a one-sided difference points to a neurological cause.'),
        M('Exam', 'Which side do you rely on to judge muscle for nutrition?', ['The healthy (left) side and central areas such as the temples', 'Only the right side', 'Neither side', 'Only the calves'], 'The paralyzed side does not represent nutrition status.'),
        M('Function', 'How is the weak right-hand grip recorded in the EMR template?', ['Functional capacity: not related to nutrition status', 'Handgrip reduced; supports severe', 'Normal', 'Regressed because of malnutrition'], 'The EMR template has a “not related to nutrition” option.'),
        M('Diagnosis', 'Recommended diagnosis?', [NONE, MOD, SEV, MILD], 'Intake of 90% and 2% weight loss in 3 months meet no threshold; the one-sided wasting is not nutritional.'),
        T('Monitoring', 'Because the patient needs help to eat, his intake should be monitored.', true, 'Correct; his risk of falling intake in the future is high.')
      ] },
    r10: { title: 'Cirrhosis and ascites', who: 'Man, 59, alcohol-related cirrhosis',
      brief: 'His abdomen has grown and he has 3+ edema up to the knees. He has gained 4 kg in 3 months and is happy he has “put on weight”. The temples are hollow, the clavicles and acromions very prominent and the shoulders square. Intake has been 45% of needs for 2 months.',
      chart: [['Weight', '4 kg gain in 3 months'], ['Abdomen', 'Ascites with a fluid wave'], ['Edema', '3+ up to the knees'], ['Muscle', 'Severe upper-body wasting'], ['Intake', '45% of needs, 2 months']],
      steps: [
        M('Weight', 'How do you interpret the 4-kg weight gain?', ['Fluid accumulation (ascites and edema) hiding true weight loss', 'Improved nutrition status', 'Increased muscle mass', 'A scale error'], 'Fluid raises weight and covers up tissue loss.'),
        M('Term', 'What is abdominal fluid with shifting dullness and a fluid wave called?', ['Ascites', 'Anasarca', 'Brawny edema', 'Lymphedema'], 'Abdominal fluid with shifting dullness and a fluid wave: ascites.'),
        M('Edema', 'What does 3+ edema support in the chronic context?', ['Severe malnutrition', 'Moderate malnutrition', 'Neither'], 'EMR template: 3–4+ severe; chronic: severe → severe.'),
        M('Picture', 'His shoulders and clavicles look like this picture. Grade?', ['Severe', 'Mild to moderate', 'Normal'], 'A protruding clavicle and a square shoulder.'),
        M('Diagnosis', 'Recommended diagnosis?', [SEV, MOD, NONE, MILD], 'Intake ≤75% for ≥1 month, severe muscle wasting and severe fluid accumulation → three severe characteristics.')
      ] },
    r11: { title: 'An older woman with diarrhea', who: 'Woman, 82, three days of diarrhea and vomiting',
      brief: 'She is drowsy, her tongue is fissured and dry and her lips are cracked. Capillary refill is 3 seconds. Today she weighs 3 kg less than her usual weight.',
      chart: [['BUN', '48 mg/dL'], ['Creatinine', '1.6 mg/dL'], ['Sodium', '149 mEq/L'], ['Blood pressure', '92/58 mm Hg'], ['Pulse', '108 /min']],
      steps: [
        S('Calculation', 'BUN-to-creatinine ratio?', 30, 0.5, '', '48 ÷ 1.6 = <b>30</b>; above 20:1 points to dehydration.', 'BUN ÷ Cr'),
        M('Sodium', 'A sodium of 149 most likely reflects what?', ['Loss of water in excess of sodium', 'Water retention', 'Fluid overload', 'Protein deficiency'], 'Hypernatremia is seen with water loss.'),
        M('Turgor', 'Where is it better to check skin turgor in this 82-year-old?', ['The sternum or inner thigh', 'The back of the hand', 'The forearm', 'Turgor is meaningless in her'], 'Over 55–60 years, skin elasticity is best preserved over the sternum and the inner thigh.'),
        M('Weight', 'How do you interpret today’s 3-kg weight loss?', ['Mostly water loss; reweigh after rehydration', 'Severe malnutrition', 'Fat loss', 'Muscle loss'], 'Dehydration makes weight look falsely low.'),
        T('Criteria', 'Dehydration is one of the six characteristics for diagnosing malnutrition.', false, 'It is not a characteristic, but it skews the interpretation of weight loss.')
      ] },
    r12: { title: 'New leg swelling', who: 'Woman, 66, hypertension',
      brief: 'Amlodipine was started two weeks ago, and now both ankles are swollen. Pressing leaves a pit of about 4 mm that refills in 15 seconds. Since yesterday her right calf has been painful, red, warm and more swollen than the left.',
      chart: [['New drug', 'Amlodipine'], ['Edema of both ankles', '4 mm pit, 15 seconds'], ['Right calf', 'Pain, redness, warmth, more swelling']],
      steps: [
        M('Grade', 'What grade is the edema of both ankles?', ['2+', '1+', '3+', '4+'], 'A pit of about 4 mm that disappears after 10–25 seconds → 2+.'),
        M('Drug', 'Most likely cause of the bilateral ankle edema?', ['A side effect of amlodipine', 'Malnutrition', 'Protein deficiency', 'Dehydration'], 'Calcium channel blockers are among the medications that cause edema.'),
        M('Urgent', 'A painful, red, warm and more swollen right calf; first concern?', ['Deep vein thrombosis; inform the physician at once', 'Simple drug-induced edema', 'Trivial cellulitis', 'No action needed'], 'In acute one-sided edema, DVT is the primary concern.'),
        T('Technique', 'To grade edema, you press for at least 5 seconds on skin over bone.', true, 'Correct.'),
        M('Recording', 'How do you record this edema in the nutrition note?', ['2+ bilateral ankle edema, probably drug-related; interpret weight with caution', 'Severe malnutrition because of edema', 'I don’t record the edema', 'Ascites'], 'State the cause clearly and consider its effect on weight.')
      ] },
    r13: { title: 'Hair loss after gastric bypass', who: 'Woman, 38, two years after gastric bypass surgery',
      brief: 'She stopped her supplements long ago. She complains of hair loss. Her nails have become spoon-shaped, her tongue is smooth and magenta, and her conjunctivae are pale.',
      chart: [['Hair', 'Diffuse loss'], ['Nails', 'Spoon-shaped'], ['Tongue', 'Smooth, magenta'], ['Conjunctivae', 'Pale']],
      steps: [
        M('Nails', 'Spoon-shaped nails mostly suggest which deficiency?', ['Iron', 'Selenium', 'Vitamin A', 'Iodine'], 'Koilonychia → iron.'),
        M('Tongue', 'Glossitis in this patient fits which deficiencies?', ['Vitamin B12, folate and iron', 'Vitamin K', 'Iodine and copper', 'Vitamin D'], 'Glossitis is linked to B vitamins, folate and iron.'),
        M('Hair', 'Diffuse hair loss after bariatric surgery is linked to which deficiencies?', ['Protein, zinc or biotin', 'Vitamin K', 'Iodine', 'Vitamin C'], 'Diffuse hair loss is linked to protein, zinc or biotin deficiency.'),
        M('Cause', 'Why is this patient at risk of micronutrient deficiency?', ['Malabsorption after bypass and stopping her supplements', 'Obesity', 'Young age', 'Heavy exercise'], 'Malabsorption is a major risk factor for micronutrient deficiency.'),
        T('Interpretation', 'Micronutrient signs alone are enough to diagnose protein-calorie malnutrition.', false, 'They are supporting evidence; the diagnosis needs at least two of the six characteristics.')
      ] },
    r14: { title: 'Grip strength in COPD', who: 'Man, 72, severe COPD',
      brief: 'You want to measure his grip strength with a Jamar dynamometer. You have measured the right hand three times and the left hand three times, alternating.',
      chart: [['Right hand', '18, 20, 19 kg'], ['Left hand', '16, 17, 15 kg']],
      steps: [
        M('Position', 'Correct patient position?', ['Seated, shoulders relaxed, elbow at 90°, wrist straight', 'Standing with the arm stretched forward', 'Lying on his back', 'Seated with the elbow fully straight'], 'The standard position for measuring grip strength.'),
        S('Calculation', 'Mean of the right hand?', 19, 0.2, 'kg', '(18 + 20 + 19) ÷ 3 = <b>19</b> kg', '(trial 1 + 2 + 3) ÷ 3'),
        S('Calculation', 'Mean of the left hand?', 16, 0.2, 'kg', '(16 + 17 + 15) ÷ 3 = <b>16</b> kg'),
        M('Interpretation', 'Against the manufacturer’s table and the common cut-off (men below 27), his grip strength is…', ['Low; it only supports severe malnutrition', 'Normal', 'Supporting moderate malnutrition', 'Uninterpretable'], 'Grip strength is not applicable to moderate.'),
        T('Technique', 'Allow 15 seconds of rest between trials.', true, 'Correct; and alternate the hands.')
      ] },
    r15: { title: 'Alcohol and sun-damaged skin', who: 'Man, 52, long-term alcohol use, homeless',
      brief: 'The skin on the back of his hands and neck is darkened and scaly. The corners of his mouth are cracked and red. There are small hemorrhagic spots on his shins, and his gums bleed at the slightest touch.',
      chart: [['Sun-exposed skin', 'Darkened, scaly'], ['Corners of the mouth', 'Bilateral cracks and redness'], ['Shins', 'Small hemorrhagic spots'], ['Gums', 'Spongy and bleeding']],
      steps: [
        M('Skin', 'Darkening of sun-exposed skin is mostly a sign of which deficiency?', ['Niacin (pellagra)', 'Vitamin A', 'Iron', 'Iodine'], 'Pellagrous dermatosis → niacin or tryptophan.'),
        M('Lips', 'Bilateral cracks at the corners of the mouth (angular stomatitis)?', ['Vitamins B2, B3, B6 or iron', 'Vitamin K', 'Selenium', 'Iodine'], 'Angular stomatitis: vitamins B2, B3, B6 or iron.'),
        M('Gums and petechiae', 'Bleeding gums together with small hemorrhagic skin spots point most to what?', ['Vitamin C deficiency', 'Iron deficiency', 'Zinc deficiency', 'Iodine deficiency'], 'Spongy gums and petechiae both fit vitamin C deficiency; also rule out liver disease and anticoagulants.'),
        M('Context', 'If he is malnourished, which context?', ['Social or environmental circumstances', 'Acute illness', 'Chronic illness'], 'Alcoholism and homelessness are social context items (if there is no inflammatory liver disease).'),
        T('Non-nutrient', 'Petechiae may also come from liver disease or an anticoagulant overdose.', true, 'Correct; rule out these causes before blaming a deficiency.')
      ] }
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* Negar — builds the English worlds and hospital rounds from the en-*.js files.
 * Every English lesson must mirror its Persian twin item by item (same count and type),
 * so progress, mistake keys and characters work identically in both languages.
 * Pictures are shared: an English item without its own picture borrows the Persian one.
 * Loaded after all Persian content, rounds.js and the en-*.js files. */
(function (root) {
  const EA = root.EA;
  const EN = EA.EN || { worlds: {}, lessons: {}, rounds: {} };
  /** Picture captions are language-specific; keep the key, drop any Persian label */
  const figEn = f => (f ? { k: f.k } : f);
  function mirror(fa, en, where) {
    if (!en) throw new Error('Missing English ' + where);
    if (en.length !== fa.length) throw new Error(`${where}: ${fa.length} Persian items but ${en.length} English`);
    return en.map((it, i) => {
      const f = fa[i];
      if (f.t !== it.t) throw new Error(`${where}:${i}: type ${f.t} ≠ ${it.t}`);
      const o = Object.assign({}, it);
      if (f.fig && !o.fig) o.fig = figEn(f.fig);
      if (f.t === 'order' && f.steps.length !== o.steps.length) throw new Error(`${where}:${i}: order length`);
      if (f.t === 'match' && f.pairs.length !== o.pairs.length) throw new Error(`${where}:${i}: pair count`);
      if (f.t === 'tf' && f.a !== o.a) throw new Error(`${where}:${i}: true/false answer differs`);
      if (f.t === 'num' && f.gen !== o.gen) throw new Error(`${where}:${i}: generator differs`);
      if (f.t === 'numS' && (f.ans !== o.ans || f.tol !== o.tol)) throw new Error(`${where}:${i}: numeric answer differs`);
      if ((f.t === 'mcq' || f.t === 'fill') && f.opts.length !== o.opts.length) throw new Error(`${where}:${i}: option count`);
      return o;
    });
  }

  const faWorlds = (EA.W && EA.W.fa) || EA.worlds;
  const enWorlds = faWorlds.map(w => {
    const meta = EN.worlds[w.id];
    if (!meta) throw new Error('Missing English world ' + w.id);
    return Object.assign({}, w, meta, {
      lessons: w.lessons.map(l => {
        const e = EN.lessons[l.id];
        if (!e) throw new Error('Missing English lesson ' + l.id);
        return { id: l.id, icon: l.icon, title: e.title, items: mirror(l.items, e.items, l.id) };
      })
    });
  });
  const faRounds = (EA.RD && EA.RD.fa) || EA.rounds;
  const enRounds = faRounds.map(r => {
    const e = EN.rounds[r.id];
    if (!e) throw new Error('Missing English round ' + r.id);
    if ((r.chart || []).length !== (e.chart || []).length) throw new Error(`${r.id}: chart rows`);
    return Object.assign({}, r, { title: e.title, who: e.who, brief: e.brief, chart: e.chart, fig: figEn(r.fig), steps: mirror(r.steps, e.steps, r.id) });
  });

  EA.W = { fa: faWorlds, en: enWorlds };
  EA.RD = { fa: faRounds, en: enRounds };
  EA.worlds = EA.W[EA.lang] || faWorlds;
  EA.rounds = EA.RD[EA.lang] || faRounds;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/* نگار — نکته‌های کوتاه بالینی که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Hx', 'هیچ جزئی به‌تنهایی وضعیت تغذیه را تعیین نمی‌کند؛ NFPE شواهد فیزیکی را کنار تاریخچه، آزمایش و دریافت می‌گذارد.', 'No single component determines nutrition status; the NFPE adds physical evidence to history, labs and intake.'],
    ['Hx', 'برای پیشنهاد تشخیص سوءتغذیه، دست‌کم دو ویژگی از شش ویژگی سوءتغذیه لازم است.', 'To recommend a malnutrition diagnosis you need at least two of the six malnutrition characteristics.'],
    ['Hx', 'درصد کاهش وزن را همیشه از وزن معمول (پایه) حساب کن، نه از وزن فعلی.', 'Always calculate percentage weight loss from the usual (baseline) weight, not the current weight.'],
    ['Hx', 'زمینه حاد: دریافت ۵۰٪ یا کمتر برای ۵ روز یا بیشتر از سوءتغذیه شدید پشتیبانی می‌کند.', 'Acute context: intake ≤50% for ≥5 days supports severe malnutrition.'],
    ['Hx', 'زمینه حاد: کاهش وزن بیش از ۲٪ در یک هفته شدید است؛ ۱ تا ۲٪ متوسط.', 'Acute context: more than 2% weight loss in a week is severe; 1–2% is moderate.'],
    ['Hx', 'بیماری مزمن: کاهش وزن بیش از ۱۰٪ در ۶ ماه یا بیش از ۲۰٪ در یک سال شدید است.', 'Chronic illness: more than 10% weight loss in 6 months or more than 20% in a year is severe.'],
    ['Hx', 'سؤال باز بپرس: «الان در مقایسه با همیشه چقدر می‌خوری؟»، نه «غذایت را کامل می‌خوری؟»', 'Ask open questions: “How much are you eating compared with usual?”, not “You finish your meals, right?”'],
    ['Hx', 'بیماران هنگام معاینه دستی اغلب بیشتر از مصاحبه تنها حرف می‌زنند؛ هم‌زمان سؤال بپرس.', 'Patients often reveal more during the hands-on exam than in the interview alone; ask as you examine.'],
    ['Hx', 'درباره برگشت عضله یا وزن قول نده و اطمینان کاذب نده.', 'Don’t promise that muscle or weight will come back, and don’t give false reassurance.'],
    ['Hx', 'بهداشت دست در شروع و پایان هر برخورد با بیمار؛ تجهیزات حفاظتی را ماهیت تماس تعیین می‌کند.', 'Hand hygiene at the start and end of every encounter; the type of contact decides the PPE.'],
    ['Hx', 'تغییر یک‌طرفه بدن معمولاً علت تغذیه‌ای ندارد؛ همیشه دو طرف را مقایسه کن.', 'One-sided changes are usually not nutritional; always compare both sides.'],
    ['Hx', '«انگشتر یا ساعتت گشاد شده؟» ساده‌ترین سؤال برای کشف کاهش بافت یا تغییر مایع است.', '“Has your ring or watch become loose?” is the simplest question for spotting tissue loss or fluid change.'],
    ['CRP', 'اتیولوژی را دو چیز تعیین می‌کند: وجود و شدت التهاب، و مدت اثر بیماری.', 'Two things set the etiology: whether inflammation is present and how intense it is, and how long the illness has lasted.'],
    ['CRP', 'آلبومین و پره‌آلبومین نشانگر التهاب‌اند، نه شاخص وضعیت تغذیه.', 'Albumin and prealbumin are markers of inflammation, not of nutrition status.'],
    ['CRP', 'تب یعنی ۳۷٫۷ درجه یا بیشتر؛ ولی تب‌برها ممکن است پنهانش کنند.', 'Fever means 37.7 °C or more, but antipyretics can hide it.'],
    ['CRP', 'دیابتی که شغلش را از دست داده ممکن است به‌خاطر فقر سوءتغذیه گرفته باشد، نه دیابت.', 'A person with diabetes who lost their job may be malnourished because of poverty, not diabetes.'],
    ['CRP', 'کارشناس تغذیه «پیشنهاد» می‌دهد؛ «تشخیص» با پزشک است.', 'The dietitian “recommends”; the physician “diagnoses”.'],
    ['CRP', 'E43 یعنی سوءتغذیه پروتئین-کالری شدید و E44.0 یعنی متوسط.', 'E43 is severe protein-calorie malnutrition and E44.0 is moderate.'],
    ['CRP', 'نوشتن «نمی‌توان تعیین کرد» اشکالی ندارد؛ به شرط برنامه ارزیابی مجدد.', 'Writing “unable to determine” is fine, as long as there is a plan to reassess.'],
    ['CRP', 'یادداشت خوب: اتیولوژی، شدت، شواهد هر ویژگی، مداخله و برنامه پایش؛ خلاصه و بدون تناقض.', 'A good note: etiology, severity, evidence for each characteristic, intervention and monitoring plan; concise and free of contradictions.'],
    ['CRP', 'تعادل نیتروژن منفی در ناشتایی، عفونت و استرس یعنی بدن پروتئین می‌سوزاند.', 'A negative nitrogen balance in fasting, infection and stress means the body is burning protein.'],
    ['M/F', 'در زمینه حاد، تحلیل «متوسط» عضله یا چربی از سوءتغذیه شدید پشتیبانی می‌کند.', 'In acute illness, “moderate” muscle or fat loss supports severe malnutrition.'],
    ['M/F', 'بالاتنه را ترجیح بده: کمتر ادم دارد، در دسترس‌تر است و بازتاب خوبی از کل عضله است.', 'Prefer the upper body: less edema, easier to reach and a good reflection of total muscle.'],
    ['M/F', 'گیجگاه را از روبه‌رو و نیم‌رخ ببین؛ تمپورالیس را از نظر پری و سفتی لمس کن.', 'Look at the temple from the front and in profile; palpate the temporalis for fullness and firmness.'],
    ['M/F', 'شانه مربعی با آکرومیون بسیار برجسته یعنی تحلیل شدید دلتوئید.', 'A square shoulder with a very prominent acromion means severe deltoid wasting.'],
    ['M/F', 'در گرفتن چین سه‌سر، اگر انگشتانت تقریباً به هم برسند، چربی به‌شدت کم شده است.', 'When pinching the triceps, if your fingers almost touch, fat loss is severe.'],
    ['M/F', 'علامت «OK» عضله بین شست و اشاره را نشان می‌دهد؛ حتی در ویزیت از راه دور.', 'The “OK” sign shows the muscle between thumb and forefinger, even in a telehealth visit.'],
    ['M/F', 'چاقی تحلیل عضله را پنهان می‌کند، ولی رد نمی‌کند.', 'Obesity hides muscle wasting but does not rule it out.'],
    ['M/F', 'در ICU از دست رفتن عضله ممکن است در هفته اول آشکار شود؛ زود و سریالی معاینه کن.', 'In the ICU, muscle loss can show within the first week; examine early and repeatedly.'],
    ['M/F', 'برای معاینه پشت، بیمار دست‌ها را جلو ببرد و به دست تو فشار دهد.', 'To examine the back, have the patient reach forward and push against your hand.'],
    ['M/F', 'حداقل تعداد ناحیه برای معاینه وجود ندارد؛ ولی هرچه بیشتر، بهتر.', 'There is no minimum number of areas to examine, but the more the better.'],
    ['H₂O', 'ادم کاهش وزن، عضله و چربی را پنهان می‌کند؛ دهیدراتاسیون وزن را کاذب پایین نشان می‌دهد.', 'Edema hides weight, muscle and fat loss; dehydration makes weight look falsely low.'],
    ['H₂O', 'تا ۲٫۵ تا ۳ لیتر مایع میان‌بافتی ممکن است بدون ادم آشکار جمع شود.', 'Up to 2.5–3 L of interstitial fluid can build up without visible edema.'],
    ['H₂O', 'برای ادم گوده‌گذار دست‌کم ۵ ثانیه روی پوست روی استخوان فشار بده.', 'For pitting edema, press for at least 5 seconds on skin over bone.'],
    ['H₂O', 'گوده ۲، ۴، ۶ و ۸ میلی‌متری: ادم ۱+، ۲+، ۳+ و ۴+.', 'A 2, 4, 6 and 8 mm pit: 1+, 2+, 3+ and 4+ edema.'],
    ['H₂O', 'ادم سفت (براونی) گوده نمی‌دهد؛ مقیاس ۱+ تا ۴+ را برایش به کار نبر.', 'Brawny edema leaves no pit; don’t use the 1+ to 4+ scale for it.'],
    ['H₂O', 'بیمار خوابیده به پشت؟ ادم را در ران و ساکروم جست‌وجو کن.', 'Patient lying on their back? Look for edema in the thighs and sacrum.'],
    ['H₂O', 'ادم یک‌طرفه حاد دردناک و گرم: اول به ترومبوز ورید عمقی فکر کن.', 'Acute, painful, warm one-sided edema: think deep vein thrombosis first.'],
    ['H₂O', 'آملودیپین، پیوگلیتازون، گاباپنتین و NSAIDها ادم می‌دهند؛ فهرست دارو را ببین.', 'Amlodipine, pioglitazone, gabapentin and NSAIDs can cause edema; check the medication list.'],
    ['H₂O', 'BUN به کراتینین بیش از ۲۰ به ۱ با دهیدراتاسیون جور است.', 'A BUN-to-creatinine ratio above 20:1 fits dehydration.'],
    ['H₂O', 'تورگور پوست در بالای ۵۵ تا ۶۰ سال دقیق نیست؛ جناغ یا داخل ران را امتحان کن.', 'Skin turgor is unreliable over 55–60 years; try the sternum or inner thigh.'],
    ['H₂O', 'پرشدن مویرگی بیش از ۲ ثانیه: دهیدراتاسیون، شوک، بیماری عروق محیطی یا هیپوترمی.', 'Capillary refill over 2 seconds: dehydration, shock, peripheral vascular disease or hypothermia.'],
    ['Zn', 'قدرت چنگش کم فقط از سوءتغذیه «شدید» پشتیبانی می‌کند.', 'Low grip strength only supports “severe” malnutrition.'],
    ['Zn', 'دینامومتر: سه بار هر دست، یکی در میان، ۱۵ ثانیه استراحت، آرنج ۹۰ درجه.', 'Dynamometer: three times each hand, alternating, 15 seconds’ rest, elbow at 90°.'],
    ['Zn', 'مخاط دهان کمتر از یک هفته نوسازی می‌شود؛ کمبود را زود نشان می‌دهد.', 'The oral mucosa renews in under a week, so it shows deficiencies early.'],
    ['Zn', 'ناخن قاشقی: آهن. خطوط بو: پروتئین ناکافی. نواحی سفید: سلنیوم.', 'Spoon nails: iron. Beau’s lines: protein inadequacy. White patches: selenium.'],
    ['Zn', 'چماقی شدن ناخن علت تغذیه‌ای ندارد؛ به ریه، قلب، کبد و روده فکر کن.', 'Clubbing has no nutrient cause; think lungs, heart, liver and bowel.'],
    ['Zn', 'لکه بیتو و کراتومالاسی: کمبود ویتامین A.', 'Bitot’s spots and keratomalacia: vitamin A deficiency.'],
    ['Zn', 'لثه اسفنجی و خونریزی‌دهنده: ویتامین C؛ ولی ژنژیویت را هم رد کن.', 'Spongy, bleeding gums: vitamin C, but rule out gingivitis too.'],
    ['Zn', 'پوست پررنگ و پوسته‌دار نواحی آفتاب‌خورده: پلاگرا (نیاسین).', 'Darkened, scaly skin in sun-exposed areas: pellagra (niacin).'],
    ['Zn', 'پیش از نسبت دادن روشن شدن مو به کمبود مس، بپرس مو را رنگ کرده یا نه.', 'Before blaming copper deficiency for lighter hair, ask whether it has been dyed.'],
    ['Zn', 'گلوسیت: کمبود ویتامین‌های B، فولات یا کمبود شدید آهن.', 'Glossitis: B-vitamin, folate or severe iron deficiency.'],
    ['', 'روزی ۵ دقیقه تمرین منظم از یک جلسه طولانی در هفته ماندگارتر است.', 'Five minutes of practice every day sticks better than one long session a week.'],
    ['', 'روی هر تصویر بزن تا بزرگ شود.', 'Tap any picture to enlarge it.'],
    ['', 'در بخش ابزارها، طبقه‌بندی سوءتغذیه تشخیص پیشنهادی و یادداشت پرونده را برایت می‌سازد.', 'In Tools, the malnutrition classifier builds the recommended diagnosis and the chart note for you.'],
    ['', 'هر سطح که تمام شود، یک کاراکتر تازه به کلکسیونت اضافه می‌شود.', 'Each level you finish adds a new character to your collection.']
  ];
  const COLORS = { Hx: '#FF7A45', CRP: '#7B5CE0', 'M/F': '#E5476B', 'H₂O': '#18A6D9', Zn: '#12A594', '': '#8E2C6E' };
  let deck = [];
  function next() {
    if (!deck.length) deck = TIPS.map((_, i) => i).sort(() => Math.random() - 0.5);
    return TIPS[deck.pop()];
  }
  function html(t) {
    return `<span class="tip__el" style="--c:${COLORS[t[0]]}">${t[0] || '💡'}</span><span class="tip__t">${EA.lang === 'en' ? t[2] : t[1]}</span>`;
  }
  /** نکته را در یک عنصر نشان بده و هر چند ثانیه عوضش کن؛ لمس یعنی نکته بعدی */
  function mount(el, ms) {
    if (!el) return;
    const show = () => {
      const box = el.querySelector('.tip__body') || el;
      box.classList.add('is-out');
      setTimeout(() => { box.innerHTML = html(next()); box.classList.remove('is-out'); }, 260);
    };
    const box = el.querySelector('.tip__body') || el;
    box.innerHTML = html(next());
    const id = setInterval(() => { if (!document.body.contains(el)) return clearInterval(id); if (!document.hidden) show(); }, ms || 9000);
    el.addEventListener('click', show);
  }
  EA.tips = { list: TIPS, next, mount, html };
})();
    },

    /* ================= ابزارهای بالینی و ماشین‌حساب‌ها ================= */
    tools: function () {
/* نگار — ابزارهای ارزیابی تغذیه (طبقه‌بندی ASPEN، کاهش وزن، دریافت انرژی، قدرت چنگش، ادم)
 * هر ابزار: فیلدها، و تابع محاسبه‌ای که ردیف نتیجه، گام‌های حل، هشدارها، نکته‌ها و گاهی متن یادداشت پرونده را برمی‌گرداند.
 * همه متن‌ها دوزبانه‌اند: T(فارسی، انگلیسی). */
(function () {
  const EA = window.EA;
  const { F } = EA;
  const A = EA.aspen;
  const fa = (n, d) => EA.fa(n, d);
  const T = EA.T;
  const HERO = 1; // سومین عضو ردیف: این ردیف نتیجه اصلی است
  const ok = x => typeof x === 'number' && isFinite(x);
  const pc = () => T('٪', '%');
  const LVN = l => (l === 'sev' ? T('شدید', 'severe') : l === 'mod' ? T('متوسط', 'moderate') : T('کامل نمی‌کند', 'not met'));
  const ctxOpts = () => [['acute', T('حاد', 'Acute')], ['chronic', T('مزمن', 'Chronic')], ['social', T('اجتماعی', 'Social')]];
  const sevOpts = () => [['0', T('ندارد', 'None')], ['1', T('خفیف', 'Mild')], ['2', T('متوسط', 'Moderate')], ['3', T('شدید', 'Severe')], ['u', T('نامعلوم', 'Unknown')]];
  const DAYS = () => [['7', T('۱ هفته', '1 wk')], ['30', T('۱ ماه', '1 mo')], ['90', T('۳ ماه', '3 mo')], ['180', T('۶ ماه', '6 mo')], ['365', T('۱ سال', '1 yr')]];

  const TOOLS = [
    {
      id: 'aspen', sym: 'Dx', get name() { return T('طبقه‌بندی سوءتغذیه', 'Malnutrition classifier'); }, color: '#8E2C6E',
      get fields() {
        return [
          { k: 'mode', label: T('زمینه', 'Context'), type: 'seg', def: 'acute', opts: ctxOpts() },
          { k: 'ipct', label: T('دریافت انرژی', 'Energy intake'), type: 'num', unit: T('٪ نیاز', '% of needs'), def: 45, opt: true },
          { k: 'idays', label: T('مدت دریافت کم', 'Duration of low intake'), type: 'num', unit: T('روز', 'days'), def: 7, opt: true },
          { k: 'usual', label: T('وزن معمول', 'Usual weight'), type: 'num', unit: 'kg', def: 80, opt: true },
          { k: 'cur', label: T('وزن فعلی', 'Current weight'), type: 'num', unit: 'kg', def: 78, opt: true },
          { k: 'wdays', label: T('بازه کاهش وزن', 'Weight-loss period'), type: 'seg', def: '7', opts: DAYS() },
          { k: 'muscle', label: T('از دست رفتن عضله', 'Muscle loss'), type: 'seg', def: '2', opts: sevOpts() },
          { k: 'fat', label: T('از دست رفتن چربی زیرپوستی', 'Subcutaneous fat loss'), type: 'seg', def: '1', opts: sevOpts() },
          { k: 'fluid', label: T('تجمع مایع', 'Fluid accumulation'), type: 'seg', def: '0', opts: [['0', T('ندارد', 'None')], ['1', T('خفیف ۱+', 'Mild 1+')], ['2', T('متوسط ۲+', 'Moderate 2+')], ['3', T('شدید ۳+/۴+', 'Severe 3–4+')], ['u', T('نامعلوم', 'Unknown')]] },
          { k: 'grip', label: T('قدرت چنگش', 'Grip strength'), type: 'seg', def: 'u', opts: [['n', T('طبیعی', 'Normal')], ['r', T('کم', 'Reduced')], ['u', T('اندازه‌گیری نشده', 'Not measured')]] }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const o = { ctx: v.mode };
        if (ok(v.ipct) && ok(v.idays)) o.intake = { pct: v.ipct, days: v.idays };
        let wl = NaN;
        if (ok(v.usual) && ok(v.cur) && v.usual > 0) { wl = F.wlPct(v.usual, v.cur); o.wt = { pct: wl, days: +v.wdays }; }
        if (v.muscle !== 'u') o.muscle = +v.muscle;
        if (v.fat !== 'u') o.fat = +v.fat;
        if (v.fluid !== 'u') o.fluid = +v.fluid;
        if (v.grip !== 'u') o.grip = v.grip === 'r';
        const r = A.classify(o);
        out.rows.push([T('تشخیص پیشنهادی', 'Recommended diagnosis'), r.name, HERO]);
        out.rows.push([T('کد ICD-10', 'ICD-10 code'), r.code || '—']);
        out.rows.push([T('ویژگی‌های شدید / دست‌کم متوسط', 'Severe / at least moderate'), `${fa(r.nSev)} / ${fa(r.nMod)}`]);
        if (ok(wl)) out.rows.push([T('کاهش وزن', 'Weight loss'), `${fa(wl, 1)}${pc()}`]);
        out.steps.push(T(`زمینه: <b>${A.ctxName(v.mode)}</b>`, `Context: <b>${A.ctxName(v.mode)}</b>`));
        r.items.forEach(x => out.steps.push(`${x.label} (${x.val}): <b>${x.level ? A.lvText(x.level) : T('معیار را کامل نمی‌کند', 'does not meet the criterion')}</b>`));
        out.steps.push(T('سوءتغذیه شدید: دست‌کم دو ویژگی شدید. متوسط: دست‌کم دو ویژگی در محدوده متوسط یا شدید (قدرت چنگش فقط برای شدید).', 'Severe: at least two severe characteristics. Moderate: at least two characteristics in the moderate-or-severe range (grip only counts for severe).'));
        if (ok(wl) && wl < 0) out.warn.push(T('وزن فعلی از وزن معمول بیشتر است؛ کاهش وزن ندارد (یا مایع اضافه شده).', 'Current weight is above usual weight: no weight loss (or fluid has been gained).'));
        if (o.fluid > 0 && o.wt) out.warn.push(T('تجمع مایع ممکن است کاهش وزن واقعی را پنهان کرده باشد.', 'Fluid accumulation may be hiding the true weight loss.'));
        if (r.items.length < 2) out.warn.push(T('کمتر از دو ویژگی ارزیابی شده؛ برای پیشنهاد تشخیص اطلاعات کافی نیست.', 'Fewer than two characteristics assessed; not enough information to recommend a diagnosis.'));
        if (o.wt && o.wt.pct > 0) { const w = A.weightLevel(v.mode, wl, +v.wdays); if (w.win && w.win !== +v.wdays) out.ok.push(T(`بازه ${A.winName(+v.wdays) || ''} در این زمینه با پنجره ${A.winName(w.win)} مقایسه شد.`, `In this context the period was compared with the ${A.winName(w.win)} window.`)); if (!w.win) out.warn.push(T('این بازه زمانی برای کاهش وزن در زمینه حاد تعریف نشده است (بیش از ۳ ماه).', 'This period is not defined for weight loss in the acute context (over 3 months).')); }
        out.ok.push(T('آستانه‌های کاهش وزن یک عددند (مثلاً ۵٪ در برابر بیش از ۵٪)؛ درصد با دقت همان آستانه گرد شده است.', 'Weight-loss cut-points are single numbers (e.g. 5% vs more than 5%); the percentage is rounded to the precision of the cut-point.'));
        const based = r.items.filter(x => x.level).map(x => `${x.label.toLowerCase ? (EA.lang === 'en' ? x.label.toLowerCase() : x.label) : x.label} (${x.val})`);
        out.note = r.dx === 'none'
          ? T(`ارزیابی تغذیه: معیارهای سوءتغذیه در زمینه ${A.ctxName(v.mode)} کامل نیست. ${based.length ? 'یافته‌ها: ' + based.join('، ') + '. ' : ''}برنامه ارزیابی مجدد: [تاریخ].`, `Nutrition assessment: criteria for malnutrition in the context of ${A.ctxName(v.mode)} are not met. ${based.length ? 'Findings: ' + based.join(', ') + '. ' : ''}Reassessment plan: [date].`)
          : T(`پیشنهاد: ${r.name} (${r.code}) در زمینه ${A.ctxName(v.mode)}، بر پایه ${based.join('، ')}. مداخله: [برنامه تغذیه]. پایش و ارزشیابی: [شاخص‌ها و زمان].`, `Recommendation: ${r.name} (${r.code}) in the context of ${A.ctxName(v.mode)}, based on ${based.join(', ')}. Intervention: [nutrition plan]. Monitoring and evaluation: [indicators and timing].`);
        out.ok.push(T('کارشناس تغذیه پیشنهاد می‌دهد؛ تشخیص نهایی با پزشک یا ارائه‌دهنده مستقل دارای مجوز است.', 'The dietitian recommends; the final diagnosis rests with the physician or licensed independent practitioner.'));
        return out;
      }
    },
    {
      id: 'wt', sym: 'Wt', get name() { return T('تغییر وزن', 'Weight change'); }, color: '#FF7A45',
      get fields() {
        return [
          { k: 'usual', label: T('وزن معمول', 'Usual weight'), type: 'num', unit: 'kg', def: 68 },
          { k: 'cur', label: T('وزن فعلی', 'Current weight'), type: 'num', unit: 'kg', def: 60 },
          { k: 'days', label: T('در مدت', 'Over'), type: 'seg', def: '180', opts: DAYS() },
          { k: 'h', label: T('قد', 'Height'), type: 'num', unit: 'cm', def: '', opt: true },
          { k: 'edema', label: T('ادم یا آسیت دارد', 'Edema or ascites present'), type: 'chk', def: false }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (!(v.usual > 0)) { out.warn.push(T('وزن معمول باید بیشتر از صفر باشد.', 'Usual weight must be above zero.')); return out; }
        const p = F.wlPct(v.usual, v.cur), d = +v.days;
        out.rows.push([T('کاهش وزن', 'Weight loss'), `${fa(p, 1)}${pc()} · ${fa(v.usual - v.cur, 1)} kg`, HERO]);
        out.rows.push([T('وزن فعلی / وزن معمول', 'Current / usual weight'), `${fa(F.ubwPct(v.usual, v.cur), 1)}${pc()}`]);
        if (ok(v.h) && v.h > 0) out.rows.push(['BMI', `${fa(F.bmi(v.cur, v.h), 1)} kg/m²`]);
        A.CTX.forEach(c => { const w = A.weightLevel(c, p, d); out.rows.push([A.ctxCap(c), w.win ? LVN(w.level) : T('بازه تعریف نشده', 'period not defined')]); });
        out.steps.push(`(${fa(v.usual)} − ${fa(v.cur)}) ÷ ${fa(v.usual)} × ${fa(100)} = <b>${fa(p, 1)}${pc()}</b>`);
        out.steps.push(T('حاد: ۱ تا ۲٪ در ۱ هفته، ۵٪ در ۱ ماه، ۷٫۵٪ در ۳ ماه (متوسط)؛ بیش از این‌ها شدید.', 'Acute: 1–2% in 1 week, 5% in 1 month, 7.5% in 3 months (moderate); more than these is severe.'));
        out.steps.push(T('مزمن و اجتماعی: ۵٪ در ۱ ماه، ۷٫۵٪ در ۳ ماه، ۱۰٪ در ۶ ماه، ۲۰٪ در ۱ سال (متوسط)؛ بیش از این‌ها شدید.', 'Chronic and social: 5% in 1 month, 7.5% in 3 months, 10% in 6 months, 20% in 1 year (moderate); more than these is severe.'));
        if (v.edema) out.warn.push(T('ادم یا آسیت وزن را بالا نشان می‌دهد و کاهش وزن واقعی را پنهان می‌کند؛ عضله و چربی بالاتنه را معاینه کن.', 'Edema or ascites inflates weight and hides true weight loss; examine upper-body muscle and fat.'));
        if (p < 0) out.warn.push(T('وزن بیشتر شده است؛ اگر سریع بوده، به تجمع مایع فکر کن.', 'Weight has increased; if it was rapid, think of fluid accumulation.'));
        out.ok.push(T('دهیدراتاسیون وزن را کاذب پایین نشان می‌دهد؛ پس از اصلاح هیدراتاسیون دوباره وزن کن.', 'Dehydration makes weight falsely low; reweigh after rehydration.'));
        return out;
      }
    },
    {
      id: 'intake', sym: 'kcal', get name() { return T('دریافت انرژی', 'Energy intake'); }, color: '#7B5CE0',
      get fields() {
        return [
          { k: 'req', label: T('نیاز برآوردشده', 'Estimated needs'), type: 'num', unit: 'kcal', def: 1800 },
          { k: 'kcal', label: T('میانگین دریافت روزانه', 'Average daily intake'), type: 'num', unit: 'kcal', def: 900 },
          { k: 'days', label: T('مدت', 'Duration'), type: 'num', unit: T('روز', 'days'), def: 10 }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (!(v.req > 0)) { out.warn.push(T('نیاز باید بیشتر از صفر باشد.', 'Needs must be above zero.')); return out; }
        const p = F.intakePct(v.kcal, v.req);
        out.rows.push([T('دریافت', 'Intake'), `${fa(p, 0)}${pc()} ${T('نیاز', 'of needs')}`, HERO]);
        A.CTX.forEach(c => out.rows.push([A.ctxCap(c), LVN(A.intakeLevel(c, p, v.days))]));
        out.steps.push(`${fa(v.kcal)} ÷ ${fa(v.req)} × ${fa(100)} = <b>${fa(p, 0)}${pc()}</b> · ${fa(v.days)} ${T('روز', 'days')}`);
        out.steps.push(T('حاد: کمتر از ۷۵٪ برای بیش از ۷ روز (متوسط)؛ ۵۰٪ یا کمتر برای ۵ روز یا بیشتر (شدید).', 'Acute: <75% for >7 days (moderate); ≤50% for ≥5 days (severe).'));
        out.steps.push(T('مزمن: ۷۵٪ یا کمتر برای دست‌کم ۱ ماه (برای متوسط و شدید عملاً یک آستانه وجود دارد).', 'Chronic: ≤75% for at least 1 month (moderate and severe effectively share one cut-point).'));
        out.steps.push(T('اجتماعی: کمتر از ۷۵٪ برای ۳ ماه یا بیشتر (متوسط)؛ ۵۰٪ یا کمتر برای ۱ ماه یا بیشتر (شدید).', 'Social: <75% for ≥3 months (moderate); ≤50% for ≥1 month (severe).'));
        out.ok.push(T('دریافت از همه منابع (دهانی، روده‌ای، وریدی) را حساب کن و ثبت پرونده را با گفته بیمار یا مراقب تأیید کن.', 'Count intake from every source (oral, enteral, parenteral) and confirm the charted intake with the patient or caregiver.'));
        return out;
      }
    },
    {
      id: 'grip', sym: 'Grip', get name() { return T('قدرت چنگش', 'Grip strength'); }, color: '#12A594',
      get fields() {
        return [
          { k: 'mode', label: T('جنس', 'Sex'), type: 'seg', def: 'm', opts: [['m', T('مرد', 'Male')], ['f', T('زن', 'Female')]] },
          { k: 'r1', label: T('راست ۱', 'Right 1'), type: 'num', unit: 'kg', def: 18 }, { k: 'l1', label: T('چپ ۱', 'Left 1'), type: 'num', unit: 'kg', def: 16 },
          { k: 'r2', label: T('راست ۲', 'Right 2'), type: 'num', unit: 'kg', def: 20 }, { k: 'l2', label: T('چپ ۲', 'Left 2'), type: 'num', unit: 'kg', def: 17 },
          { k: 'r3', label: T('راست ۳', 'Right 3'), type: 'num', unit: 'kg', def: 19 }, { k: 'l3', label: T('چپ ۳', 'Left 3'), type: 'num', unit: 'kg', def: 15 }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const r = F.gripMean(v.r1, v.r2, v.r3), l = F.gripMean(v.l1, v.l2, v.l3), best = Math.max(r, l);
        const cut = v.mode === 'f' ? 16 : 27;
        out.rows.push([T('بیشترین میانگین', 'Higher mean'), `${fa(best, 1)} kg`, HERO]);
        out.rows.push([T('میانگین راست', 'Right mean'), `${fa(r, 1)} kg`]);
        out.rows.push([T('میانگین چپ', 'Left mean'), `${fa(l, 1)} kg`]);
        out.rows.push([T('نقطه برش قدرت کم', 'Low-strength cut-off'), `< ${fa(cut)} kg`]);
        out.steps.push(T(`راست: (${fa(v.r1)} + ${fa(v.r2)} + ${fa(v.r3)}) ÷ ۳ = <b>${fa(r, 1)}</b>`, `Right: (${fa(v.r1)} + ${fa(v.r2)} + ${fa(v.r3)}) ÷ 3 = <b>${fa(r, 1)}</b>`));
        out.steps.push(T(`چپ: (${fa(v.l1)} + ${fa(v.l2)} + ${fa(v.l3)}) ÷ ۳ = <b>${fa(l, 1)}</b>`, `Left: (${fa(v.l1)} + ${fa(v.l2)} + ${fa(v.l3)}) ÷ 3 = <b>${fa(l, 1)}</b>`));
        out.steps.push(T('میانگین هر دست را با جدول هنجار سازنده دینامومتر (بر پایه سن و جنس) مقایسه کن.', 'Compare each hand’s mean with the dynamometer manufacturer’s normative table (by age and sex).'));
        if (best < cut) out.warn.push(T('کمتر از نقطه برش قدرت کم؛ اگر علت غیرتغذیه‌ای ندارد، «به‌طور قابل اندازه‌گیری کم» و پشتیبان سوءتغذیه شدید است.', 'Below the low-strength cut-off; if there is no non-nutritional cause, it is “measurably reduced” and supports severe malnutrition.'));
        else out.ok.push(T('بالاتر از نقطه برش قدرت کم.', 'Above the low-strength cut-off.'));
        if (Math.abs(r - l) / Math.max(r, l) > 0.2) out.warn.push(T('تفاوت دو دست بیش از ۲۰٪ است؛ علت یک‌طرفه (سکته، آسیب، آرتروز) را بررسی کن.', 'The hands differ by more than 20%; look for a one-sided cause (stroke, injury, arthritis).'));
        out.ok.push(T('روش استاندارد: نشسته، شانه شل، آرنج ۹۰ درجه، مچ صاف؛ دست‌ها یکی در میان، ۱۵ ثانیه استراحت.', 'Standard method: seated, shoulders relaxed, elbow at 90°, wrist straight; alternate hands, 15 s rest.'));
        return out;
      }
    },
    {
      id: 'edema', sym: '1+', get name() { return T('درجه ادم', 'Edema grade'); }, color: '#18A6D9',
      get fields() {
        return [
          { k: 'mode', label: T('زمینه', 'Context'), type: 'seg', def: 'acute', opts: ctxOpts() },
          { k: 'depth', label: T('عمق گوده', 'Pit depth'), type: 'num', unit: 'mm', def: 4 },
          { k: 'brawny', label: T('گوده نمی‌دهد (سفت، تیره، ضخیم)', 'No pit (hard, dark, thickened skin)'), type: 'chk', def: false }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.brawny) {
          out.rows.push([T('نوع ادم', 'Edema type'), T('سفت (براونی)', 'Brawny (nonpitting)'), HERO]);
          out.warn.push(T('ادم براونی گوده نمی‌دهد و با مقیاس ۱+ تا ۴+ درجه‌بندی نمی‌شود؛ به لنف‌ادم و میکزدم پره‌تیبیال فکر کن.', 'Brawny edema leaves no pit and is not graded on the 1+ to 4+ scale; think of lymphedema and pretibial myxedema.'));
          return out;
        }
        const g = A.edemaFromDepth(v.depth), s = A.edemaToSev(g), l = A.fluidLevel(v.mode, s);
        const GN = [T('بدون ادم', 'No edema'), '1+', '2+', '3+', '4+'];
        out.rows.push([T('درجه', 'Grade'), GN[g], HERO]);
        out.rows.push([T('شدت در الگوی پرونده', 'EMR severity'), A.SEV_NAMES()[s]]);
        out.rows.push([T('معیار سوءتغذیه', 'Malnutrition criterion'), A.lvText(l)]);
        const desc = ['', T('۲ mm؛ برگشت فوری؛ مچ و پاها', '2 mm; immediate rebound; ankles and feet'), T('۴ mm؛ ۱۰ تا ۲۵ ثانیه؛ ساق و دست‌ها', '4 mm; 10–25 s; lower legs and hands'), T('۶ mm؛ بیش از ۱ دقیقه؛ عمومی', '6 mm; over 1 minute; generalized'), T('۸ mm؛ ۲ تا ۵ دقیقه؛ اندام بدشکل', '8 mm; 2–5 minutes; limb misshapen')][g];
        if (g) out.steps.push(T(`${desc}`, `${desc}`));
        out.steps.push(T('الگوی پرونده: ۱+ خفیف، ۲+ متوسط، ۳+ تا ۴+ شدید.', 'EMR template: 1+ mild, 2+ moderate, 3–4+ severe.'));
        out.steps.push(v.mode === 'acute' ? T('حاد: خفیف ← متوسط؛ متوسط تا شدید ← شدید.', 'Acute: mild → moderate; moderate to severe → severe.') : T('مزمن و اجتماعی: خفیف ← متوسط؛ شدید ← شدید.', 'Chronic and social: mild → moderate; severe → severe.'));
        out.ok.push(T('دست‌کم ۵ ثانیه روی پوست روی استخوان (ساق، قوزک یا پشت پا) فشار بده و دو طرف را مقایسه کن.', 'Press for at least 5 seconds on skin over bone (shin, malleolus or top of foot) and compare both sides.'));
        out.ok.push(T('ادم یک‌طرفه حاد و دردناک: اول ترومبوز ورید عمقی؛ فهرست دارو را هم مرور کن.', 'Acute painful one-sided edema: think DVT first; review the medication list too.'));
        return out;
      }
    }
  ];

  /* ---------- اطلاعات نمایشی هر ابزار ---------- */
  const GROUPS = { p: () => T('👤 بیمار', '👤 Patient'), i: () => T('🍽️ دریافت', '🍽️ Intake'), w: () => T('⚖️ وزن', '⚖️ Weight'), x: () => T('🖐️ معاینه فیزیکی', '🖐️ Physical exam'), g: () => T('✊ دست راست و چپ', '✊ Right and left hand') };
  const GROUP_ORDER = ['p', 'i', 'w', 'x', 'g'];
  const S_ = (lv, t) => [lv, t];
  const META = {
    aspen: {
      get desc() { return T('شش ویژگی سوءتغذیه در سه زمینه؛ تشخیص پیشنهادی، کد ICD-10 و متن یادداشت', 'The six malnutrition characteristics in three contexts; recommended diagnosis, ICD-10 code and a note'); },
      preset: { mode: 'chronic', ipct: 55, idays: 60, usual: 68, cur: 60, wdays: '180', muscle: '1', fat: '1', fluid: '0', grip: 'u' },
      group: { ipct: 'i', idays: 'i', usual: 'w', cur: 'w', wdays: 'w', muscle: 'x', fat: 'x', fluid: 'x', grip: 'x' },
      step: { ipct: 5, idays: 1, usual: 0.5, cur: 0.5 },
      sev(v) {
        const o = { ctx: v.mode };
        if (ok(v.ipct) && ok(v.idays)) o.intake = { pct: v.ipct, days: v.idays };
        if (ok(v.usual) && ok(v.cur) && v.usual > 0) o.wt = { pct: F.wlPct(v.usual, v.cur), days: +v.wdays };
        ['muscle', 'fat', 'fluid'].forEach(k => { if (v[k] !== 'u') o[k] = +v[k]; });
        if (v.grip !== 'u') o.grip = v.grip === 'r';
        const d = A.classify(o).dx;
        return d === 'severe' ? S_('sev', T('شدید', 'Severe')) : d === 'moderate' ? S_('mod', T('متوسط', 'Moderate')) : S_('ok', T('معیار کامل نیست', 'Not met'));
      }
    },
    wt: { get desc() { return T('درصد کاهش وزن، درصد وزن معمول، BMI و معیار هر زمینه', 'Percentage weight loss, % of usual weight, BMI and the criterion in each context'); }, preset: { usual: 81, cur: 79.5, days: '7', h: 178, edema: true }, group: { usual: 'w', cur: 'w', days: 'w', h: 'p', edema: 'p' }, step: { usual: 0.5, cur: 0.5, h: 1 }, sev: v => { const p = F.wlPct(v.usual, v.cur); return p >= 10 ? S_('sev', T('کاهش زیاد', 'Large loss')) : p >= 5 ? S_('mod', T('کاهش قابل توجه', 'Significant loss')) : S_('ok', T('کاهش کم', 'Small loss')); } },
    intake: { get desc() { return T('دریافت به صورت درصد نیاز و معیار دریافت در هر زمینه', 'Intake as a percentage of needs and the intake criterion in each context'); }, preset: { req: 2000, kcal: 1100, days: 45 }, group: { req: 'i', kcal: 'i', days: 'i' }, step: { req: 50, kcal: 50, days: 1 }, sev: v => { const p = F.intakePct(v.kcal, v.req); return p <= 50 ? S_('sev', T('۵۰٪ یا کمتر', '≤50%')) : p < 75 ? S_('mod', T('کمتر از ۷۵٪', '<75%')) : S_('ok', T('۷۵٪ یا بیشتر', '≥75%')); } },
    grip: { get desc() { return T('میانگین سه تلاش هر دست به روش استاندارد و نقطه برش قدرت کم', 'Mean of three trials per hand (standard method) and the low-strength cut-off'); }, preset: { mode: 'f', r1: 14, r2: 15, r3: 13, l1: 12, l2: 13, l3: 12 }, group: { r1: 'g', r2: 'g', r3: 'g', l1: 'g', l2: 'g', l3: 'g' }, step: { r1: 1, r2: 1, r3: 1, l1: 1, l2: 1, l3: 1 }, sev: v => { const b = Math.max(F.gripMean(v.r1, v.r2, v.r3), F.gripMean(v.l1, v.l2, v.l3)); return b < (v.mode === 'f' ? 16 : 27) ? S_('sev', T('قدرت کم', 'Low strength')) : S_('ok', T('قدرت کافی', 'Adequate strength')); } },
    edema: { get desc() { return T('درجه ادم گوده‌گذار از عمق، شدت در الگوی پرونده و معیار سوءتغذیه', 'Pitting edema grade from depth, EMR severity and the malnutrition criterion'); }, preset: { mode: 'chronic', depth: 6, brawny: false }, group: { depth: 'x', brawny: 'x' }, step: { depth: 1 }, sev: v => { if (v.brawny) return S_('mild', T('براونی', 'Brawny')); const g = A.edemaFromDepth(v.depth); return g >= 3 ? S_('sev', T('شدید', 'Severe')) : g === 2 ? S_('mod', T('متوسط', 'Moderate')) : g === 1 ? S_('mild', T('خفیف', 'Mild')) : S_('ok', T('بدون ادم', 'No edema')); } }
  };

  let cur = 'aspen';
  const vals = {};
  try { const o = JSON.parse(localStorage.getItem('negar.tools') || 'null'); if (o) { cur = TOOLS.some(t => t.id === o.cur) ? o.cur : cur; Object.assign(vals, o.vals || {}); } } catch (e) { /* */ }
  const persist = () => { try { localStorage.setItem('negar.tools', JSON.stringify({ cur, vals })); } catch (e) { /* */ } };
  const tool = () => TOOLS.find(x => x.id === cur) || TOOLS[0];
  const esc = s => EA.ui.esc(s);

  function values(t) {
    if (!vals[t.id]) { vals[t.id] = {}; t.fields.forEach(f => vals[t.id][f.k] = f.def); }
    return vals[t.id];
  }
  function numeric(t, v) {
    const o = {};
    t.fields.forEach(f => { o[f.k] = f.type === 'num' ? (v[f.k] === '' || v[f.k] == null ? NaN : EA.parseNum(String(v[f.k]))) : v[f.k]; });
    return o;
  }
  const isTab = f => f.type === 'seg' && f.k === 'mode';

  function field(t, f, v) {
    if (f.show && !f.show(v)) return '';
    const id = `f-${t.id}-${f.k}`;
    if (f.type === 'seg') return `<div class="fld fld--wide"><span class="fld__l">${f.label}</span><div class="seg">${f.opts.map(o => `<button type="button" class="seg__b ${String(v[f.k]) === o[0] ? 'is-on' : ''}" data-tk="${f.k}" data-tv="${o[0]}">${o[1]}</button>`).join('')}</div></div>`;
    if (f.type === 'chk') return `<label class="fld fld--wide fld--chk"><input type="checkbox" data-tk="${f.k}" ${v[f.k] ? 'checked' : ''}><span>${f.label}</span></label>`;
    const val = typeof v[f.k] === 'number' ? EA.fa(v[f.k], 3) : esc(v[f.k] == null ? '' : v[f.k]);
    return `<label class="fld" for="${id}"><span class="fld__l">${f.label}${f.unit ? ` <small dir="ltr">${f.unit}</small>` : ''}${f.opt ? ` <small class="fld__opt">${T('اختیاری', 'optional')}</small>` : ''}</span>
      <span class="nstep"><button type="button" class="nstep__b" data-step="1" data-sk="${f.k}" aria-label="${T('بیشتر', 'Increase')}">+</button><input id="${id}" type="text" inputmode="decimal" dir="ltr" data-tk="${f.k}" value="${val}" autocomplete="off"><button type="button" class="nstep__b" data-step="-1" data-sk="${f.k}" aria-label="${T('کمتر', 'Decrease')}">−</button></span></label>`;
  }

  function form(t, v) {
    const m = META[t.id];
    const tabs = t.fields.filter(isTab).map(f => `<div class="tmodes" role="tablist">${f.opts.map(o => `<button type="button" role="tab" class="tmode ${String(v[f.k]) === o[0] ? 'is-on' : ''}" data-tk="${f.k}" data-tv="${o[0]}">${o[1]}</button>`).join('')}</div>`).join('');
    const rest = t.fields.filter(f => !isTab(f) && (!f.show || f.show(v)));
    const groups = GROUP_ORDER.map(g => {
      const fs = rest.filter(f => (m.group[f.k] || 'p') === g);
      return fs.length ? `<fieldset class="tgrp"><legend>${GROUPS[g]()}</legend><div class="tgrp__f">${fs.map(f => field(t, f, v)).join('')}</div></fieldset>` : '';
    }).join('');
    return tabs + groups;
  }

  function compute(t) {
    const nv = numeric(t, values(t));
    const miss = t.fields.filter(f => f.type === 'num' && !f.opt && (!f.show || f.show(nv)) && !isFinite(nv[f.k]));
    if (miss.length) return { miss: miss[0] };
    const r = t.calc(nv);
    const m = META[t.id];
    let hi = r.rows.findIndex(x => x[2] === HERO);
    if (hi < 0 && r.rows.length) hi = 0;
    const hero = hi >= 0 ? r.rows[hi] : null;
    return { r, hero, rows: r.rows.filter((_, i) => i !== hi), sev: m.sev(nv) };
  }

  function result(t) {
    const c = compute(t);
    if (c.miss) return `<div class="tres tres--empty">${EA.ui.mascot('think', t.color, 64)}<p>${T(`«${c.miss.label}» را وارد کن تا نتیجه ساخته شود.`, `Enter “${c.miss.label}” to see the result.`)}</p></div>`;
    const { r, hero, rows, sev } = c;
    return `<div class="tres">
      ${hero ? `<div class="thero">${sev ? `<span class="sevc sevc--${sev[0]}">${sev[1]}</span>` : ''}<small>${hero[0]}</small><b>${EA.ui.iso(hero[1])}</b></div>` : ''}
      ${rows.length ? `<div class="ttiles">${rows.map(x => `<div class="ttile"><small>${x[0]}</small><b>${EA.ui.iso(x[1])}</b></div>`).join('')}</div>` : ''}
      ${r.warn.map(s => `<div class="note note--warn">⚠️ ${s}</div>`).join('')}
      ${r.steps.length ? `<div class="tres__h">${T('راه‌حل گام‌به‌گام', 'Step-by-step solution')}</div><ol class="tsteps">${r.steps.map(s => `<li>${EA.ui.iso(s)}</li>`).join('')}</ol>` : ''}
      ${r.ok.map(s => `<div class="note">💡 ${s}</div>`).join('')}
      ${r.note ? `<div class="tres__h">${T('متن پیشنهادی برای پرونده', 'Suggested chart note')}</div><textarea class="tnote" rows="5" aria-label="${T('متن یادداشت', 'Note text')}">${esc(r.note.replace(/<[^>]+>/g, ''))}</textarea><small class="muted">${T('متن را ویرایش و کپی کن؛ عبارت‌های داخل کروشه را کامل کن.', 'Edit and copy the text; fill in the bracketed parts.')}</small>` : ''}
    </div>`;
  }
  function sticky(t) {
    const c = compute(t);
    return c.hero ? `${c.sev ? `<span class="sevc sevc--${c.sev[0]}">${c.sev[1]}</span>` : ''}<span class="tsticky__v"><small>${c.hero[0]}</small><b>${EA.ui.iso(c.hero[1])}</b></span><span class="tsticky__go">${T('جزئیات ↓', 'Details ↓')}</span>` : '';
  }

  function view() {
    const t = tool(), v = values(t);
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>${T('ابزارهای ارزیابی تغذیه', 'Nutrition assessment tools')}</h1><p>${T('یافته‌های بیمار را وارد کن؛ معیار سوءتغذیه، شدت و راه‌حل گام‌به‌گام همان لحظه ساخته می‌شود.', 'Enter the patient’s findings; the malnutrition criterion, severity and step-by-step working appear instantly.')}</p></header>
      <div class="tpick">${TOOLS.map(x => `<button class="tpc ${x.id === cur ? 'is-on' : ''}" style="--tc:${x.color}" data-tool="${x.id}"><span class="tpc__s">${x.sym}</span><b>${x.name}</b><small>${META[x.id].desc}</small></button>`).join('')}</div>
      <div class="tpanel">
        <div class="tpanel__h"><span class="tpc__s tpc__s--lg">${t.sym}</span><div><h2>${t.name}</h2><small>${META[t.id].desc}</small></div>
          <div class="tpanel__act"><button type="button" class="btn btn--ghost btn--sm" data-tact="preset">${T('🧪 بیمار نمونه', '🧪 Sample patient')}</button><button type="button" class="btn btn--ghost btn--sm" data-tact="reset" aria-label="${T('بازنشانی', 'Reset')}">↺</button></div></div>
        <div class="tgrid">
          <form class="tform" onsubmit="return false">${form(t, v)}</form>
          <div class="tout" aria-live="polite">${result(t)}</div>
        </div>
      </div>
      <button type="button" class="tsticky" data-tact="jump">${sticky(t)}</button>
      <p class="disclaimer">${T('⚕️ این ابزار برای آموزش است. تصمیم نهایی را با بالین بیمار، پزشک معالج و پروتکل بیمارستان خودت تطبیق بده.', '⚕️ This tool is for education. Check every final decision against the patient, the treating physician and your hospital’s protocol.')}</p>
    </section>`;
  }

  function redraw(el, full) {
    const t = tool(), v = values(t);
    if (full) el.querySelector('.tform').innerHTML = form(t, v);
    el.querySelector('.tout').innerHTML = result(t);
    el.querySelector('.tsticky').innerHTML = sticky(t);
    persist();
  }

  function bind(el) {
    const out = el.querySelector('.tout'), st = el.querySelector('.tsticky');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => st.classList.toggle('is-hidden', e.isIntersecting)), { threshold: 0.15 });
      io.observe(out);
    }
    el.addEventListener('click', e => {
      const tb = e.target.closest('[data-tool]');
      if (tb) { cur = tb.dataset.tool; persist(); EA.ui.sfx('select'); EA.app.refresh(); return; }
      const ta = e.target.closest('[data-tact]');
      if (ta) {
        const t = tool();
        if (ta.dataset.tact === 'jump') { out.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
        if (ta.dataset.tact === 'preset') { vals[t.id] = Object.assign({}, values(t), META[t.id].preset); EA.ui.sfx('select'); EA.ui.toast(T('بیمار نمونه بارگذاری شد 🧪', 'Sample patient loaded 🧪')); }
        else { delete vals[t.id]; EA.ui.sfx('tap'); }
        redraw(el, true); return;
      }
      const sb = e.target.closest('[data-step]');
      if (sb) {
        const t = tool(), v = values(t), k = sb.dataset.sk;
        const stp = META[t.id].step[k] || 1, cur0 = EA.parseNum(String(v[k]));
        const def = t.fields.find(f => f.k === k);
        const base = isFinite(cur0) ? cur0 : (typeof def.def === 'number' ? def.def : 0);
        const nv = EA.round(base + (isFinite(cur0) ? stp * +sb.dataset.step : 0), 3);
        v[k] = Math.max(0, nv);
        const inp = el.querySelector(`#f-${t.id}-${k}`); if (inp) inp.value = EA.fa(v[k], 3);
        EA.ui.sfx('tap'); redraw(el, false); return;
      }
      const sg = e.target.closest('[data-tv]');
      if (sg) {
        const t = tool(), v = values(t);
        v[sg.dataset.tk] = sg.dataset.tv;
        EA.ui.sfx('select'); redraw(el, true);
      }
    });
    el.addEventListener('input', e => {
      const k = e.target.dataset.tk; if (!k) return;
      const t = tool();
      values(t)[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      redraw(el, e.target.tagName === 'SELECT' || e.target.type === 'checkbox');
    });
  }

  EA.tools = { view, bind, TOOLS, META };
})();
    }
  };

})(window.ACADEMY_COURSES);
