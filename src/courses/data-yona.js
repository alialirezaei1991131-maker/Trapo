/* آکادمی بالینی — داده‌های دوره «یونا» (اصلاح اختلالات الکترولیتی)
 * این فایل هیچ کدی را اجرا نمی‌کند؛ فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند.
 * موتور (js/engine.js) هنگام ورود به این دوره، به ترتیب config → content → tools را صدا می‌زند.
 *   content(): همه ماژول‌های محتوایی اصلی (فرمول‌ها، دنیاها، درس‌ها، کاراکترها، راند بیمارستان، نکته‌ها، انگلیسی) بدون هیچ حذف یا خلاصه‌سازی
 *   tools():   ماشین‌حساب‌ها و ابزارهای بالینی دوره
 *   config():  متن‌ها، شخصیت و ثابت‌های اختصاصی دوره که موتور مشترک از آن‌ها استفاده می‌کند */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  AC.yona = {
    /* bitFlag: بیت یکتای این دوره در کدهای فعال‌سازی (توان ۲: 1، 2، 4، 8، … 32768). هرگز عوض نشود. */
    id: 'yona', bitFlag: 1, order: 1,
    nameFa: 'یونا', nameEn: 'Yona', subjectFa: 'اصلاح اختلالات الکترولیتی', subjectEn: 'Electrolyte correction',
    courseFa: 'تشخیص و اصلاح اختلالات الکترولیت', courseEn: 'Diagnosis and Correction of Electrolyte Disorders', descFa: 'سدیم، پتاسیم، کلسیم، منیزیم و فسفر؛ از تشخیص تا دوز دقیق اصلاح.', toolsFa: 'ماشین‌حساب اصلاح الکترولیت', icon: '💧',
    descEn: 'Sodium, potassium, calcium, magnesium and phosphate — from diagnosis to the exact correction dose.', toolsEn: 'Electrolyte correction calculators', domainEn: 'Electrolytes',
    color: '#58cc02', dark: '#46a302', light: '#d7ffb8', langs: ["fa", "en"], codePrefix: 'YN',
    stats: {"worlds": 5, "levels": 15, "lessons": 45, "questions": 287, "rounds": 6, "roundSteps": 36, "chars": 15, "firstLesson": "na1"},
    /* کاتالوگ برای صفحه اول و پنجره معرفی/ارتقا: دنیاها و سطح‌ها، ابزارها، اهداف یادگیری */
    catalog: {"tagline": "اصلاح الکترولیت را مثل یک پزشک کشیک یاد بگیر", "about": "یونا، قطره‌ای با بار مثبت، تو را قدم‌به‌قدم از فیزیولوژی آب و سدیم تا اورژانس‌های پتاسیم، کلسیم، منیزیم و فسفر می‌برد. هر درس حدود سه دقیقه است: کارت آموزشی کوتاه با فرمول و جدول، سؤال‌های تعاملی در هفت قالب و مسئله‌های محاسباتی که هر بار با عددهای تازه ساخته می‌شوند. در پایان هر دنیا آزمون مرحله داری و در راند بیمارستان، بیمارانی مثل هیپوناترمی تشنج‌دار، هیپرکالمی با تغییرات نوار قلب، سندرم ریفیدینگ و کتواسیدوز دیابتی را خودت از ارزیابی تا پایش مدیریت می‌کنی.", "audience": "دانشجوی پزشکی، انترن و رزیدنت، پرستار ICU و اورژانس، داروساز و کارشناس تغذیه بالینی", "highlights": ["۵ ماشین‌حساب اصلاح با راه‌حل گام‌به‌گام", "راند بیمارستان با تصمیم‌های چندمرحله‌ای", "نسخه کامل فارسی و انگلیسی"], "outcomes": ["هیپوناترمی علامت‌دار را در دقیقه‌های اول درست مدیریت کنی و سرعت ایمن اصلاح را حساب کنی", "هیپرکالمی با تغییرات نوار قلب را به ترتیب درست درمان کنی: پایدارسازی، جابجایی، دفع", "کلسیم را با آلبومین اصلاح کنی و دوز کلسیم گلوکونات را بنویسی", "دوز سولفات منیزیم را بر اساس شدت و کارکرد کلیه تعیین کنی", "سندرم ریفیدینگ را پیش‌بینی، پیشگیری و درمان کنی", "فسفات وریدی و فرآورده مناسب را برای هر بیمار انتخاب کنی", "پتاسیم و انسولین را در کتواسیدوز دیابتی ایمن تنظیم کنی"], "worlds": [{"id": "na", "name": "سدیم", "sub": "آب، اسمولالیته و مغز", "sym": "Na", "color": "#1CB0F6", "levels": ["قطره‌های کنجکاو", "موج‌سواران اسمز", "اقیانوس‌بان‌ها"]}, {"id": "k", "name": "پتاسیم", "sub": "ریتم قلب در دستان تو", "sym": "K", "color": "#CE82FF", "levels": ["تپش‌های نخستین", "نگهبانان ریتم", "فرماندهان ضربان"]}, {"id": "ca", "name": "کلسیم", "sub": "استخوان، عضله و آلبومین", "sym": "Ca", "color": "#FF9600", "levels": ["استخوان‌بندها", "معماران کلسیم", "دژبانان اسکلت"]}, {"id": "mg", "name": "منیزیم", "sub": "کاتیون فراموش‌شده", "sym": "Mg", "color": "#1FC8A0", "levels": ["جرقه‌های سبز", "افسونگران منیزیم", "جادوگران مثلث"]}, {"id": "p", "name": "فسفر", "sub": "انرژی سلول و سندرم ریفیدینگ", "sym": "P", "color": "#FF4B8B", "levels": ["باتری‌های تازه", "مهندسان انرژی", "فرمانروایان ATP"]}], "tools": [{"id": "na", "sym": "Na", "name": "سدیم", "color": "#1CB0F6", "desc": "حجم سالین، کمبود آب آزاد، سدیم اصلاح‌شده و اسمولالیته"}, {"id": "k", "sym": "K", "name": "پتاسیم", "color": "#CE82FF", "desc": "مقدار و زمان تزریق KCl، پروتکل اورژانس هیپرکالمی"}, {"id": "ca", "sym": "Ca", "name": "کلسیم", "color": "#FF9600", "desc": "کلسیم اصلاح‌شده، بولوس و انفوزیون کلسیم، درمان هیپرکلسمی"}, {"id": "mg", "sym": "Mg", "name": "منیزیم", "color": "#1FC8A0", "desc": "دوز سولفات منیزیم بر اساس شدت و کارکرد کلیه"}, {"id": "p", "sym": "P", "name": "فسفر", "color": "#FF4B8B", "desc": "دوز وزن‌محور فسفات، انتخاب فرآورده و پتاسیم همراه"}, {"id": "conv", "sym": "⇄", "name": "تبدیل واحد", "color": "#58CC02", "desc": "mg/dL، mmol/L و mEq/L برای هر یون"}], "en": {"tagline": "Learn electrolyte correction like an on-call physician", "about": "Yona, a positively charged droplet, takes you step by step from water and sodium physiology to potassium, calcium, magnesium and phosphate emergencies. Each lesson takes about three minutes: a short teaching card with formulas and tables, interactive questions in seven formats, and calculation problems generated with fresh numbers every time. Every world ends with a checkpoint, and on hospital rounds you manage patients such as seizing hyponatremia, hyperkalemia with ECG changes, refeeding syndrome and diabetic ketoacidosis yourself, from assessment to monitoring.", "audience": "Medical students, interns and residents, ICU and emergency nurses, pharmacists and clinical dietitians", "highlights": ["5 correction calculators with step-by-step solutions", "Hospital rounds with multi-step decisions", "Full Persian and English versions"], "outcomes": ["Manage symptomatic hyponatremia correctly in the first minutes and calculate a safe correction rate", "Treat hyperkalemia with ECG changes in the right order: stabilize, shift, remove", "Correct calcium for albumin and write the calcium gluconate dose", "Set the magnesium sulfate dose by severity and kidney function", "Predict, prevent and treat refeeding syndrome", "Choose IV phosphate and the right product for each patient", "Titrate potassium and insulin safely in diabetic ketoacidosis"], "worlds": [{"id": "na", "name": "Sodium", "sub": "Water, osmolality and the brain", "levels": ["Curious Droplets", "Osmosis Surfers", "Ocean Keepers"]}, {"id": "k", "name": "Potassium", "sub": "The heart’s rhythm in your hands", "levels": ["First Heartbeats", "Rhythm Guardians", "Pulse Commanders"]}, {"id": "ca", "name": "Calcium", "sub": "Bones, muscle and albumin", "levels": ["Bone Builders", "Calcium Architects", "Skeleton Sentinels"]}, {"id": "mg", "name": "Magnesium", "sub": "The forgotten cation", "levels": ["Green Sparks", "Magnesium Enchanters", "Triangle Wizards"]}, {"id": "p", "name": "Phosphate", "sub": "Cell energy and refeeding syndrome", "levels": ["Fresh Batteries", "Energy Engineers", "ATP Rulers"]}], "tools": [{"id": "na", "name": "Sodium", "desc": "Saline volume, free water deficit, corrected sodium and osmolality"}, {"id": "k", "name": "Potassium", "desc": "KCl dose and infusion time, emergency hyperkalemia protocol"}, {"id": "ca", "name": "Calcium", "desc": "Corrected calcium, calcium bolus and infusion, hypercalcemia treatment"}, {"id": "mg", "name": "Magnesium", "desc": "Magnesium sulfate dose by severity and kidney function"}, {"id": "p", "name": "Phosphate", "desc": "Weight-based phosphate dose, product choice and accompanying potassium"}, {"id": "conv", "name": "Unit converter", "desc": "mg/dL, mmol/L and mEq/L for each ion"}]}},

    config: function (EA) {
      const T = EA.T;
      const fa = (n, d) => EA.fa(n, d);
      return {
        id: 'yona', bit: 1, key: 'academy_course_yona', langs: ["fa", "en"], startWorld: 'na', codePrefix: 'YN',
        nameFa: 'یونا', nameEn: 'Yona', titleFa: 'یونا • آموزش اصلاح الکترولیت', titleEn: 'Yona • Learn Electrolyte Correction',

        /* ---------- وضعیت: عنوان سطح‌ها، نقش رقبای لیگ و نشان‌ها ---------- */
        state: {
          titles: ['قطره تازه‌وارد', 'یون کنجکاو', 'کاتیون پرانرژی', 'آنیون باهوش', 'کارآموز بخش', 'شکارچی هیپوناترمی', 'رام‌کننده پتاسیم',
    'معمار اسمولالیته', 'نگهبان ریتم', 'جادوگر منیزیم', 'فرمانده ICU', 'استاد تعادل', 'افسانه الکترولیت', 'اسطوره یون‌ها', 'امپراتور هموستاز'],
          titlesEn: ['Fresh Droplet', 'Curious Ion', 'Energetic Cation', 'Clever Anion', 'Ward Trainee', 'Hyponatremia Hunter', 'Potassium Tamer',
    'Osmolality Architect', 'Rhythm Guardian', 'Magnesium Wizard', 'ICU Commander', 'Master of Balance', 'Electrolyte Legend', 'Ion Myth', 'Emperor of Homeostasis'],
          roles: ['پرستار ICU', 'رزیدنت داخلی', 'دانشجوی پزشکی', 'داروساز', 'کارشناس تغذیه', 'انترن', 'رزیدنت اورژانس', 'پرستار دیالیز', 'پزشک عمومی', 'رزیدنت اطفال', 'پرستار اورژانس', 'دانشجوی داروسازی'],
          rolesEn: ['ICU nurse', 'Internal medicine resident', 'Medical student', 'Pharmacist', 'Dietitian', 'Intern', 'Emergency medicine resident', 'Dialysis nurse', 'General practitioner', 'Pediatrics resident', 'ER nurse', 'Pharmacy student'],
          badges: [
    { id: 'first', icon: '🌱', name: 'اولین قدم', desc: 'اولین درس را تمام کن' },
    { id: 'perfect3', icon: '💯', name: 'بی‌نقص', desc: 'سه درس را بدون اشتباه تمام کن' },
    { id: 'streak3', icon: '🔥', name: 'گرم شدی', desc: 'زنجیره ۳ روزه' },
    { id: 'streak7', icon: '🌋', name: 'آتشفشان', desc: 'زنجیره ۷ روزه' },
    { id: 'calc10', icon: '🧮', name: 'ماشین‌حساب انسانی', desc: '۱۰ مسئله محاسباتی درست' },
    { id: 'calc50', icon: '🧠', name: 'مغز محاسبه‌گر', desc: '۵۰ مسئله محاسباتی درست' },
    { id: 'speed15', icon: '⚡', name: 'برق‌آسا', desc: 'در چالش سرعت ۱۵ جواب درست بده' },
    { id: 'combo10', icon: '🎯', name: 'تک‌تیرانداز', desc: '۱۰ جواب درست پشت سر هم' },
    { id: 'w_na', icon: '💧', name: 'ارباب سدیم', desc: 'آزمون مرحله سدیم را قبول شو' },
    { id: 'w_k', icon: '💜', name: 'نگهبان ریتم', desc: 'آزمون مرحله پتاسیم را قبول شو' },
    { id: 'w_ca', icon: '🦴', name: 'استخوان‌دار', desc: 'آزمون مرحله کلسیم را قبول شو' },
    { id: 'w_mg', icon: '✨', name: 'جادوگر منیزیم', desc: 'آزمون مرحله منیزیم را قبول شو' },
    { id: 'w_p', icon: '🔋', name: 'شارژ کامل', desc: 'آزمون مرحله فسفر را قبول شو' },
    { id: 'xp1000', icon: '🏅', name: 'هزار امتیاز', desc: '۱۰۰۰ امتیاز جمع کن' },
    { id: 'rounds', icon: '🩺', name: 'دکتر کشیک', desc: 'همه کیس‌های راند بیمارستان را قبول شو' },
    { id: 'final', icon: '🎓', name: 'استاد الکترولیت', desc: 'امتحان نهایی را قبول شو' }
  ],
          badgesEn: {
    first: ['First Step', 'Finish your first lesson'], perfect3: ['Flawless', 'Finish three lessons without a mistake'],
    streak3: ['Warming Up', 'A 3-day streak'], streak7: ['Volcano', 'A 7-day streak'],
    calc10: ['Human Calculator', '10 correct calculations'], calc50: ['Calculating Mind', '50 correct calculations'],
    speed15: ['Lightning Fast', '15 correct answers in the speed challenge'], combo10: ['Sharpshooter', '10 correct answers in a row'],
    w_na: ['Lord of Sodium', 'Pass the Sodium checkpoint'], w_k: ['Rhythm Keeper', 'Pass the Potassium checkpoint'],
    w_ca: ['Strong Bones', 'Pass the Calcium checkpoint'], w_mg: ['Magnesium Mage', 'Pass the Magnesium checkpoint'],
    w_p: ['Fully Charged', 'Pass the Phosphate checkpoint'], xp1000: ['Thousand Club', 'Earn 1,000 XP'],
    rounds: ['On-Call Doctor', 'Pass every hospital round case'], final: ['Electrolyte Master', 'Pass the final exam']
  }
        },

        /* ---------- رابط: شخصیت، کنفتی و الگوی واحدها ---------- */
        confetti: ['#58CC02', '#1CB0F6', '#FFC800', '#FF4B8B', '#CE82FF', '#FF9600', '#1FC8A0'],
        unitRun: /([−≈]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mEq\/L|mEq\/h|mEq|mmol\/L|mmol\/kg|mmol|mg\/dL|mg\/kg\/h|mg\/kg|mg\/h|mg|g\/dL|kcal\/kg|kcal|mOsm\/kg|IU|mL\/h|mL|kg)(?![A-Za-z]))/g,
        mascot: function (mood, color, size) {
            const c = color || 'var(--brand)';
            const m = mood || 'happy';
            const mouths = {
              happy: '<path d="M46 100 Q60 114 74 100" stroke="#3b1f0e" stroke-width="4" fill="none" stroke-linecap="round"/>',
              cheer: '<path d="M44 97 Q60 122 76 97 Z" fill="#3b1f0e"/><path d="M52 108 Q60 114 68 108" fill="#ff7a9a"/>',
              sad: '<path d="M47 108 Q60 97 73 108" stroke="#3b1f0e" stroke-width="4" fill="none" stroke-linecap="round"/>',
              wow: '<ellipse cx="60" cy="104" rx="7" ry="9" fill="#3b1f0e"/>',
              think: '<path d="M49 104 L71 101" stroke="#3b1f0e" stroke-width="4" stroke-linecap="round"/>'
            };
            const brows = m === 'think' ? '<path d="M38 66 L52 70" stroke="#3b1f0e" stroke-width="3.5" stroke-linecap="round"/><path d="M68 64 L82 62" stroke="#3b1f0e" stroke-width="3.5" stroke-linecap="round"/>'
              : m === 'sad' ? '<path d="M38 68 L51 64" stroke="#3b1f0e" stroke-width="3.5" stroke-linecap="round"/><path d="M69 64 L82 68" stroke="#3b1f0e" stroke-width="3.5" stroke-linecap="round"/>' : '';
            const tear = m === 'sad' ? '<path d="M82 88 q4 8 0 12 q-4 -4 0 -12z" fill="#8fdcff"/>' : '';
            const eyes = m === 'cheer'
              ? '<path d="M38 82 Q45 72 52 82" stroke="#3b1f0e" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M68 82 Q75 72 82 82" stroke="#3b1f0e" stroke-width="4.5" fill="none" stroke-linecap="round"/>'
              : '<g class="yona-eyes"><ellipse cx="45" cy="82" rx="9" ry="11" fill="#fff"/><ellipse cx="75" cy="82" rx="9" ry="11" fill="#fff"/><circle cx="' + (m === 'think' ? 48 : 46) + '" cy="' + (m === 'think' ? 79 : 84) + '" r="5" fill="#1d1d1d"/><circle cx="' + (m === 'think' ? 78 : 76) + '" cy="' + (m === 'think' ? 79 : 84) + '" r="5" fill="#1d1d1d"/><circle cx="48" cy="81" r="1.8" fill="#fff"/><circle cx="78" cy="81" r="1.8" fill="#fff"/></g>';
            return `<svg class="yona yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
              <ellipse cx="60" cy="144" rx="30" ry="5" fill="currentColor" opacity=".12"/>
              <g class="yona-body">
                <path d="M60 8 C60 8 14 62 14 94 a46 46 0 0 0 92 0 C106 62 60 8 60 8 Z" fill="var(--c)"/>
                <path d="M60 8 C60 8 14 62 14 94 a46 46 0 0 0 46 46 C40 128 30 110 30 92 C30 64 60 8 60 8 Z" fill="#000" opacity=".08"/>
                <ellipse cx="42" cy="56" rx="7" ry="13" transform="rotate(28 42 56)" fill="#fff" opacity=".45"/>
                <circle cx="86" cy="42" r="13" fill="#FFC800" stroke="#fff" stroke-width="3"/>
                <path d="M86 35 V49 M79 42 H93" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
                ${brows}${eyes}
                <ellipse cx="34" cy="98" rx="7" ry="4" fill="#ff7a9a" opacity=".5"/><ellipse cx="86" cy="98" rx="7" ry="4" fill="#ff7a9a" opacity=".5"/>
                ${mouths[m] || mouths.happy}${tear}
              </g>
            </svg>`;
          },
        uiExtra: function () {
          return {};
        },

        /* ---------- اجراکننده ---------- */
        numPlaceholder: () => T('عدد یا عبارت، مثلاً (513-118)/31', 'A number or expression, e.g. (513-118)/31'),
        roundBrief: function (r, figCard, caseCard, labCard) {
          const brief = { kind: 'learn', title: T(`پرونده: ${r.title}`, `Case: ${r.title}`), bubble: T('بیمار تازه رسید! 🚑', 'A new patient just arrived! 🚑'), body: `<div class="rbrief"><b>${r.who}</b><p>${r.brief}</p></div><p>${T('در هر مرحله بهترین تصمیم را بگیر. توضیح هر پاسخ را بخوان؛ این‌جا خود مدیریت بیمار تمرین می‌شود.', 'Make the best decision at each step and read every explanation; this is where you practice managing a real patient.')}</p>` };
          return brief;
        },

        /* ---------- پوسته ---------- */
        icons: { tools: '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="4" fill="#1FC8A0"/><rect x="9" y="6" width="14" height="6" rx="1.5" fill="#fff"/><g fill="#fff" opacity=".9"><circle cx="11" cy="17" r="1.8"/><circle cx="16" cy="17" r="1.8"/><circle cx="21" cy="17" r="1.8"/><circle cx="11" cy="23" r="1.8"/><circle cx="16" cy="23" r="1.8"/><rect x="19.2" y="21.2" width="3.6" height="3.6" rx="1" fill="#FFC800"/></g></svg>', chars: '<svg viewBox="0 0 32 32"><path d="M16 3C16 3 6 15 6 21a10 10 0 0 0 20 0C26 15 16 3 16 3Z" fill="#CE82FF"/><circle cx="12.5" cy="20" r="2" fill="#fff"/><circle cx="19.5" cy="20" r="2" fill="#fff"/><path d="M13 25q3 2.5 6 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="m24 4 1.2 2.8L28 8l-2.8 1.2L24 12l-1.2-2.8L20 8l2.8-1.2z" fill="#FFC800"/></svg>' },
        obRoles: [['دانشجوی پزشکی', 'Medical student'], ['انترن یا رزیدنت', 'Intern or resident'], ['پرستار', 'Nurse'], ['داروساز', 'Pharmacist'], ['کارشناس تغذیه', 'Dietitian'], ['پزشک عمومی', 'General practitioner'], ['سایر', 'Other']],
        practice: function (h) {
          const { s, worldOf } = h;
          return {
            calc: `<div class="pcard__i">🧮</div><h3>${T('تمرین محاسبات', 'Calculation practice')}</h3>
          <p>${T('مسئله‌های بالینی با اعداد تازه در هر بار. دنیا را انتخاب کن:', 'Clinical problems with fresh numbers every time. Pick a world:')}</p>`,
            rounds: `<p>${T(`${fa(EA.rounds.length)} بیمار واقعی‌نما که باید خودت از ارزیابی تا پایش مدیریتشان کنی. بهترین تمرین برای بخش.`, `${fa(EA.rounds.length)} realistic patients you manage yourself, from assessment to monitoring. The best preparation for the ward.`)}</p>
          <div class="rlist">${EA.rounds.map(r => { const w = worldOf(r.w), st = (s.rounds || {})[r.id]; return `<button class="rcase ${st && st.passed ? 'is-done' : ''}" data-act="round" data-id="${r.id}" style="--wc:${w.color};--wd:${w.dark}"><span class="wsym">${w.sym}</span><span class="rcase__t"><b>${r.title}</b><small>${r.who}</small></span><span class="rcase__s">${st ? (st.passed ? '✓ ' : '') + fa(Math.round(st.best * 100)) + T('٪', '%') : fa(r.steps.length) + ' ' + T('مرحله', 'steps')}</span></button>`; }).join('')}</div>`,
            guide: `<p>${T('همه فرمول‌ها و نکته‌های هر دنیا در یک نگاه.', 'Every formula and key idea of each world at a glance.')}</p>`
          };
        },
        cert: function (s) {
          return {
            kicker: `<small class="cert__kicker">${T('یونا • آکادمی اصلاح الکترولیت', 'Yona • Electrolyte Correction Academy')}</small>`,
            body: `<p>${T(`دوره آموزشی <b>تشخیص و اصلاح اختلالات الکترولیت</b> شامل سدیم، پتاسیم، کلسیم، منیزیم و فسفر را با موفقیت به پایان رساند و در امتحان نهایی نمره <b>${fa(Math.round(s.final.score * 100))}٪</b> کسب کرد.`, `has successfully completed the course <b>Diagnosis and Correction of Electrolyte Disorders</b>, covering sodium, potassium, calcium, magnesium and phosphate, with a final exam score of <b>${fa(Math.round(s.final.score * 100))}%</b>.`)}</p>`
          };
        },
        landing: function (h) {
          const { S, mascot, avatar, musicIcon, langBtn, esc } = h;
          const DEMO = () => EA.lang === 'en' ? {
    q: 'What is the right first step?',
    case: [['Patient', '68-year-old woman, confused'], ['Sodium', '114 mEq/L'], ['In the ED', 'One brief seizure']],
    opts: ['100–150 mL bolus of 3% saline', 'Slow normal saline', 'Restrict fluids and wait', 'Oral tolvaptan'],
    why: 'Hyponatremia with a seizure is an emergency. A small bolus of hypertonic saline raises sodium by 4–6 mEq/L and eases brain swelling; after that, correct slowly and safely.'
  } : {
    q: 'اولین اقدام درست کدام است؟',
    case: [['بیمار', 'خانم ۶۸ ساله، گیج'], ['سدیم', '۱۱۴ mEq/L'], ['در اورژانس', 'یک تشنج کوتاه']],
    opts: ['بولوس ۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪', 'سالین نرمال آهسته', 'محدودیت مایع و صبر', 'تولواپتان خوراکی'],
    why: 'هیپوناترمی با تشنج اورژانس است. بولوس کوچک سالین هیپرتونیک سدیم را ۴ تا ۶ واحد بالا می‌برد و ورم مغز را کم می‌کند؛ بعد، اصلاح آهسته و ایمن.'
  };
    const s = S(), back = !!s.profile;
    const demo = DEMO();
    const lessons = EA.worlds.reduce((a, w) => a + w.lessons.length, 0);
    const qs = EA.worlds.reduce((a, w) => a + w.lessons.reduce((b, l) => b + l.items.filter(x => x.t !== 'learn').length, 0), 0) + EA.rounds.reduce((a, r) => a + r.steps.length, 0);
    const ions = [['Na', '+', '#1CB0F6'], ['K', '+', '#CE82FF'], ['Ca', '2+', '#FF9600'], ['Mg', '2+', '#1FC8A0'], ['PO₄', '3−', '#FF4B8B']];
    const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    const startLbl = back ? T('ادامه یادگیری', 'Continue learning') : T('همین حالا شروع کن', 'Start now — it’s free');
    const lv = back ? EA.S.level() : null;
    const html = `
      <header class="land__bar"><span class="brand">${mascot('happy', '#58CC02', 30)}<span>${T('یونا', 'Yona')}</span></span>
        <span class="land__bar-r">${langBtn('data-land="lang"')}<button class="chip-stat chip-stat--music ${s.settings.music ? 'is-on' : ''}" data-act="music" aria-label="${T('موسیقی', 'Music')}">${musicIcon()}</button><button class="btn btn--green btn--sm" data-land="start">${back ? T('ادامه', 'Continue') : T('شروع', 'Start')}</button></span></header>
      <section class="land__hero">
        <div class="land__orbit" aria-hidden="true">
          <div class="land__yona">${mascot('cheer', '#58CC02', 150)}</div>
          ${ions.map((x, i) => `<span class="ion" style="--i:${i};--c:${x[2]}"><b dir="ltr">${x[0]}<sup>${x[1]}</sup></b></span>`).join('')}
        </div>
        <span class="land__kicker">${T('🏆 بهترین مسیر برای یادگیری کامل اصلاح الکترولیت', '🏆 The best way to truly master electrolyte correction')}</span>
        <h1 class="land__h">${T('یک بار یاد بگیر،<br><em>برای همیشه بلد باش</em>', 'Learn it once.<br><em>Know it for good.</em>')}</h1>
        <p class="land__p">${T('تو همین حالا بهترین راه را انتخاب کردی. این‌جا فرمول حفظ نمی‌کنی؛ مثل یک پزشک کشیک تمرین می‌کنی: درس‌های سه‌دقیقه‌ای، بازخورد فوری، و بیمارانی که خودت باید مدیریتشان کنی.', 'You’ve just chosen the best way to learn. Here you don’t memorize formulas — you practice like the doctor on call: three-minute lessons, instant feedback, and patients you manage yourself.')}</p>
        <div class="land__cta"><button class="btn btn--green btn--lg" data-land="start">${startLbl}</button>
          ${back ? `<span class="land__me">${avatar()}<span><b>${T(`خوش برگشتی ${esc(s.profile.name)}!`, `Welcome back, ${esc(s.profile.name)}!`)}</b><small>${T(`🔥 ${fa(s.streak)} روز • ⚡ ${fa(s.xp)} امتیاز • سطح ${fa(lv.n)}: ${lv.title}`, `🔥 ${fa(s.streak)}-day streak • ⚡ ${fa(s.xp)} XP • Level ${fa(lv.n)}: ${lv.title}`)}</small></span></span>`
            : `<small class="land__free">${T('بدون ثبت‌نام • بدون اینترنت • از همین گوشی', 'No sign-up • Works offline • Right on your phone')}</small><button class="btn btn--ghost" data-land="import">${T('پیشرفت قبلی را بازیابی کن', 'Restore earlier progress')}</button>`}</div>
      </section>
      <section class="land__nums">
        ${[[fa(EA.worlds.length), T('دنیای الکترولیت', 'Electrolyte worlds')], [fa(EA.worlds.length * 3), T('سطح نام‌دار', 'Named levels')], [fa(lessons), T('درس کوتاه', 'Bite-sized lessons')], [fa(qs) + '+', T('سؤال و مرحله بالینی', 'Questions & clinical steps')], [fa(EA.rounds.length), T('بیمار برای مدیریت', 'Patients to manage')], [fa(EA.chars.list.length), T('کاراکتر', 'Characters')]].map(n => `<div><b>${n[0]}</b><small>${n[1]}</small></div>`).join('')}
      </section>
      <section class="land__sec">
        <h2>${T('همین حالا یک سؤال امتحان کن', 'Try a question right now')}</h2>
        <div class="demo">
          <div class="case"><div class="case__h">🩺 ${T('پرونده بیمار', 'Patient chart')}</div>${demo.case.map(r => `<div class="case__r"><span>${r[0]}</span><b>${EA.ui.iso(r[1])}</b></div>`).join('')}</div>
          <h3 class="q q--sm">${demo.q}</h3>
          <div class="opts">${order.map(k => `<button class="opt" data-demo="${k}"><span>${demo.opts[k]}</span></button>`).join('')}</div>
          <div class="demo__fb" hidden></div>
        </div>
      </section>
      <section class="land__sec">
        <h2>${T('چرا این روش بهترین راه است؟', 'Why is this the best way to learn?')}</h2>
        <p class="land__sub">${T('یونا بر پایه اصولی ساخته شده که پژوهش‌های یادگیری بارها اثرشان را نشان داده‌اند.', 'Yona is built on principles that learning research has confirmed again and again.')}</p>
        <div class="land__why">${[
          ['🧠', T('یادآوری فعال', 'Active recall'), T('به جای خواندن، جواب می‌دهی. هر بار که از حافظه‌ات بیرون می‌کشی، آن نکته محکم‌تر می‌شود.', 'Instead of rereading, you answer. Every time you pull a fact from memory, it sticks a little more firmly.')],
          ['🔁', T('تکرار هوشمند', 'Smart repetition'), T('هر سؤالی که اشتباه کنی، دوباره و در زمان مناسب برمی‌گردد تا دیگر فراموشش نکنی.', 'Every question you miss comes back at just the right time, so it never slips away again.')],
          ['⚡', T('بازخورد فوری', 'Instant feedback'), T('همان لحظه می‌فهمی چرا درست یا غلط بود؛ هر اشتباه یک درس کوچک می‌شود.', 'You see right away why an answer is right or wrong, so every mistake becomes a mini-lesson.')],
          ['🏥', T('یادگیری روی بیمار', 'Learning at the bedside'), T('هر دنیا با بیمارستان، آی‌سی‌یو و راند بالینی تمام می‌شود؛ دانسته‌ها به تصمیم تبدیل می‌شوند.', 'Every world ends on the ward, in the ICU and on a clinical round, turning knowledge into decisions.')]
        ].map(x => `<article><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('در پایان دوره تو می‌توانی…', 'By the end of the course, you’ll be able to…')}</h2>
        <ul class="land__out">${(EA.lang === 'en' ? [
          'Manage symptomatic hyponatremia in the first critical minutes and calculate a safe correction rate',
          'Treat hyperkalemia with ECG changes in the right order: stabilize, shift, remove',
          'Correct calcium for albumin and write the calcium gluconate dose',
          'Choose the magnesium sulfate dose based on severity and kidney function',
          'Anticipate, prevent and treat refeeding syndrome',
          'Pick the right IV phosphate product for each patient',
          'Safely titrate potassium and insulin in diabetic ketoacidosis'
        ] : [
          'هیپوناترمی علامت‌دار را در دقیقه‌های اول درست مدیریت کنی و سرعت ایمن اصلاح را حساب کنی',
          'هیپرکالمی با تغییرات نوار قلب را به ترتیب درست درمان کنی: پایدارسازی، جابجایی، دفع',
          'کلسیم را با آلبومین اصلاح کنی و دوز کلسیم گلوکونات را بنویسی',
          'دوز سولفات منیزیم را بر اساس شدت و کارکرد کلیه تعیین کنی',
          'سندرم ریفیدینگ را پیش‌بینی، پیشگیری و درمان کنی',
          'فسفات وریدی و فرآورده مناسب را برای هر بیمار انتخاب کنی',
          'پتاسیم و انسولین را در کتواسیدوز دیابتی ایمن تنظیم کنی'
        ]).map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>${T('مسیرت این شکلی است', 'Here’s how your journey works')}</h2>
        <ol class="land__steps">${[
          [T('یاد بگیر', 'Learn'), T('کارت‌های کوتاه با فرمول و جدول، قدم‌به‌قدم روی یک مسیر پیچان.', 'Short cards with formulas and tables, one step at a time along a winding path.')],
          [T('تمرین کن', 'Practice'), T('هفت نوع سؤال، از چندگزینه‌ای تا محاسبه دوز با پرونده بیمار.', 'Seven question types, from multiple choice to dose calculations from a patient chart.')],
          [T('بیمار را مدیریت کن', 'Manage a patient'), T('راند بیمارستان: یک بیمار، از ارزیابی تا پایش، با تصمیم‌های خودت.', 'Hospital rounds: one patient, from assessment to monitoring, driven by your decisions.')],
          [T('امتحان بده و گواهی بگیر', 'Pass the exam, earn a certificate'), T('با هر سطح یک کاراکتر، با هر دنیا یک نشان، و در پایان گواهی با نام خودت.', 'A character for every level, a badge for every world, and a certificate in your name at the finish.')]
        ].map((x, i) => `<li><span>${fa(i + 1)}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></li>`).join('')}</ol>
      </section>
      <section class="land__sec">
        <h2>${T('پنج دنیا، پانزده سطح', 'Five worlds, fifteen levels')}</h2>
        <div class="land__worlds">${EA.worlds.map(w => `<article class="lw" style="--wc:${w.color};--wd:${w.dark}">
          <span class="wsym">${w.sym}</span><h3>${w.name}</h3><p>${w.sub}</p>
          <ol>${w.levels.map(n => `<li>${n}</li>`).join('')}</ol></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('کاراکترها را جمع کن', 'Collect the characters')}</h2>
        <p class="land__sub">${T('هر سطح که تمام شود، یک کاراکتر تازه به تو می‌پیوندد و می‌تواند همراهت در درس‌ها باشد.', 'Finish a level and a new character joins you — and can keep you company during lessons.')}</p>
        <div class="land__chars">${EA.chars.list.filter(c => c.lv === 0).map(c => `<figure>${EA.chars.draw(c, 'happy', 76)}<figcaption>${c.name}</figcaption></figure>`).join('')}
          ${EA.chars.list.filter(c => c.lv > 0).slice(0, 3).map(c => `<figure class="is-lock">${EA.chars.draw(c, 'happy', 76, true)}<figcaption>${T('؟؟؟', '???')}</figcaption></figure>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('آیا می‌دانستی؟', 'Did you know?')}</h2>
        <div class="tip tip--land" role="button" tabindex="0" title="${T('نکته بعدی', 'Next tip')}"><div class="tip__body"></div></div>
      </section>
      <section class="land__sec">
        <h2>${T('همه چیزهایی که یک بازی خوب لازم دارد', 'Everything a great game needs')}</h2>
        <div class="land__feat">${[
          ['🎯', T('هدف روزانه', 'Daily goal'), T('هر روز هدفت را کامل کن و پیشرفتت را ببین', 'Hit your goal every day and watch your progress grow')],
          ['🔥', T('زنجیره روزانه', 'Daily streak'), T('هر روز چند دقیقه، آتشت روشن می‌ماند', 'A few minutes a day keeps your flame burning')],
          ['🏆', T('لیگ هفتگی', 'Weekly league'), T(`${fa(30)} نفر در هر گروه، از برنز تا الماس`, `${fa(30)} players per group, from Bronze to Diamond`)],
          ['🧮', T('ماشین‌حساب بالینی', 'Clinical calculator'), T('پنج ابزار با راه‌حل گام‌به‌گام', 'Five tools with step-by-step solutions')],
          ['🎵', T('موسیقی تمرکز', 'Focus music'), T('آرام و بی‌کلام؛ با یک لمس قطع می‌شود', 'Calm and wordless; one tap to mute')],
          ['🎓', T('گواهی پایان دوره', 'Course certificate'), T('با نام و تاریخ شمسی', 'With your name and completion date')]
        ].map(f => `<div><span>${f[0]}</span><b>${f[1]}</b><small>${f[2]}</small></div>`).join('')}</div>
      </section>
      <section class="land__end">
        ${mascot('cheer', '#58CC02', 110)}
        <h2>${back ? T('درس بعدی منتظرت است', 'Your next lesson is waiting') : T('اولین درس کمتر از ۳ دقیقه است', 'Your first lesson takes less than 3 minutes')}</h2>
        <p class="land__p">${T('هر روز فقط ۵ دقیقه. چند هفته بعد، اصلاح الکترولیت یکی از نقاط قوت تو خواهد بود.', 'Just 5 minutes a day. A few weeks from now, electrolyte correction will be one of your strengths.')}</p>
        <button class="btn btn--green btn--lg" data-land="start">${startLbl}</button>
        <p class="disclaimer">${T('یونا ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.', 'Yona is an educational tool. It does not replace clinical judgment, a physician’s orders or your hospital’s protocols.')}</p>
      </section>
      <div class="land__sticky"><button class="btn btn--green btn--lg btn--block" data-land="start">${startLbl}</button></div>`;
          return { html, demo };
        },
        demoFeedback: function (good, demo) {
          const ok = good;
          return `<b>${ok ? T('✓ آفرین! دقیقاً همین.', '✓ Well done — exactly right.') : T('✗ نزدیک بود؛ پاسخ درست: بولوس سالین ۳٪', '✗ Close! The right answer is a 3% saline bolus.')}</b><p>${demo.why}</p><button class="btn btn--green" data-land="start">${ok ? T('تو آماده‌ای؛ بیا ادامه بدهیم', 'You’re ready — let’s keep going') : T('بیا با هم یادش بگیریم', 'Let’s learn it together')}</button>`;
        },
        obSteps: function (h) {
          const { d, bubble, esc, GOALS } = h;
          const ROLES = this.obRoles;
          const steps = [
      () => `${bubble(T('سلام! من یونا هستم، یک یون مثبت و پرانرژی ⚡ اسمت چیه؟', 'Hi! I’m Yona, a positive, high-energy ion ⚡ What’s your name?'))}
        <input class="ob__in" id="ob-name" maxlength="40" placeholder="${T('نام تو', 'Your name')}" value="${esc(d.name)}" autocomplete="given-name">
        <div class="ob__btns"><button class="btn btn--green btn--lg btn--block" data-ob="name">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T(`خوشبختم ${esc(d.name)}! یک عکس برای پروفایلت می‌گذاری؟ (اختیاری)`, `Nice to meet you, ${esc(d.name)}! Would you like to add a profile photo? (optional)`))}
        <div class="ob__photo"><label class="avpick" for="ob-ph">${d.photo ? `<span class="avatar avatar--xl"><img src="${d.photo}" alt="" draggable="false"></span>` : `<span class="avatar avatar--xl" style="--h:100">${esc(d.name[0] || T('؟', '?'))}</span>`}<span class="avpick__cam" aria-hidden="true">📷</span></label>
        <input type="file" id="ob-ph" accept="image/*" hidden><label class="link link--btn" for="ob-ph">${d.photo ? T('تغییر عکس', 'Change photo') : T('انتخاب عکس از گالری', 'Choose from your gallery')}</label></div>
        <div class="ob__btns"><button class="btn btn--green btn--lg btn--block" data-ob="next">${d.photo ? T('ادامه', 'Continue') : T('فعلاً نه، ادامه', 'Not now, continue')}</button></div>`,
      () => `${bubble(T('در چه زمینه‌ای کار یا تحصیل می‌کنی؟', 'What do you do? Pick the one that fits you best.'))}
        <div class="ob__grid">${ROLES.map((r, i) => `<button class="ob__opt ${d.role === r[0] ? 'is-sel' : ''}" data-ob="role" data-v="${i}">${T(r[0], r[1])}</button>`).join('')}</div>`,
      () => `${bubble(T('هدف روزانه‌ات چقدر باشد؟', 'How much do you want to learn each day?'))}
        <div class="ob__list">${GOALS().map(g => `<button class="ob__opt ob__opt--row ${d.goal === g[0] ? 'is-sel' : ''}" data-ob="goal" data-v="${g[0]}"><b>${g[1]}</b><span>${g[2]}</span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--green btn--lg btn--block" data-ob="next">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T('از کدام الکترولیت شروع کنیم؟ بعداً به بقیه هم سر می‌زنیم!', 'Which electrolyte shall we start with? We’ll visit the others later!'))}
        <div class="wlist">${EA.worlds.map(w => `<button class="wcard ${d.start === w.id ? 'is-sel' : ''}" data-ob="start" data-v="${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}"><span class="wsym">${w.sym}</span><span><b>${w.name}</b><small>${w.sub}</small></span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--green btn--lg btn--block" data-ob="finish">${T('بزن بریم! 🚀', 'Let’s go! 🚀')}</button></div>`
    ];
          return steps;
        }
      };
    },

    /* ================= محتوای کامل دوره (ماژول‌های اصلی، بدون تغییر) ================= */
    content: function () {

/* یونا — فرمول‌های اصلاح الکترولیت و مولد مسئله‌های محاسباتی
 * همه محاسبه‌های آموزشی و ابزارها از همین فایل می‌آیند تا یک منبع واحد داشته باشیم.
 * این فایل هم در مرورگر و هم در Node (برای آزمون‌ها) بارگذاری می‌شود.
 * متن‌ها دوزبانه‌اند: T(فارسی، انگلیسی) و اعداد با رقم همان زبان نوشته می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  const T = (a, b) => (EA.lang === 'en' ? b : a);

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
      .replace(/[^\d.\-]/g, '');
  }
  function parseNum(s) {
    const t = toEn(s);
    if (!t || t === '.' || t === '-') return NaN;
    return parseFloat(t);
  }
  const round = (x, d) => { const p = Math.pow(10, d || 0); return Math.round(x * p) / p; };
  /** عدد ثابت درون متن، با رقم زبان فعلی: n(513) */
  const n = x => fa(x, 3);

  /* ---------- مایعات وریدی ---------- */
  const FLUIDS = [
    { id: 'ns3', fa: 'سالین ۳٪', en: '3% saline', na: 513 },
    { id: 'ns09', fa: 'سالین ۰٫۹٪ (نرمال)', en: '0.9% saline (normal)', na: 154 },
    { id: 'rl', fa: 'رینگر لاکتات', en: 'Lactated Ringer’s', na: 130 },
    { id: 'ns045', fa: 'سالین ۰٫۴۵٪ (نیم‌نرمال)', en: '0.45% saline (half-normal)', na: 77 },
    { id: 'd5w', fa: 'دکستروز ۵٪ در آب', en: 'D5W (5% dextrose)', na: 0 }
  ];
  FLUIDS.forEach(f => Object.defineProperty(f, 'name', { get: () => T(f.fa, f.en), enumerable: true }));

  /* ---------- فرمول‌ها ---------- */
  const F = {
    /** ضریب آب کل بدن */
    tbwFactor(sex, age) {
      if (age < 18) return 0.6;
      if (sex === 'm') return age >= 65 ? 0.5 : 0.6;
      return age >= 65 ? 0.45 : 0.5;
    },
    tbw(w, sex, age) { return w * F.tbwFactor(sex, age); },
    /** آدروگه–مادیاس: تغییر سدیم سرم با یک لیتر از مایع */
    adrogue(infNa, serumNa, tbw, infK) { return ((infNa + (infK || 0)) - serumNa) / (tbw + 1); },
    /** کمبود آب آزاد (لیتر) */
    fwd(na, tbw) { return tbw * (na / 140 - 1); },
    /** سدیم اصلاح‌شده برای قند (کاتز) */
    corrNaGlu(na, glu) { return na + 1.6 * (glu - 100) / 100; },
    /** اسمولالیته محاسبه‌شده سرم */
    osm(na, glu, bun) { return 2 * na + glu / 18 + bun / 2.8; },
    /** برآورد KCl لازم: هر ۱۰ mEq ≈ ۰٫۱ mEq/L */
    kNeed(k, target) { return Math.max(0, ((target || 4) - k) * 100); },
    /** کلسیم اصلاح‌شده با آلبومین */
    corrCa(ca, alb) { return ca + 0.8 * (4 - alb); },
    caGlucElemMg(g) { return g * 93; },
    caChlorElemMg(g) { return g * 273; },
    mgToMmol(mgdl) { return mgdl / 2.43; },
    mgFromMmol(mmol) { return mmol * 2.43; },
    mgso4Meq(g) { return g * 8.12; },
    mgso4Mmol(g) { return g * 4.06; },
    pToMmol(mgdl) { return mgdl / 3.1; },
    pFromMmol(mmol) { return mmol * 3.1; },
    /** مرحله‌بندی نمونه پروتکل فسفات وریدی (بیماران بدحال، کلیه طبیعی) */
    pTier(p) {
      if (p <= 1.5) return { key: 'severe', perKg: 0.64, label: T('شدید (≤ ۱٫۵)', 'severe (≤ 1.5)') };
      if (p <= 2.2) return { key: 'moderate', perKg: 0.32, label: T('متوسط (۱٫۶ تا ۲٫۲)', 'moderate (1.6–2.2)') };
      if (p <= 3.0) return { key: 'mild', perKg: 0.16, label: T('خفیف (۲٫۳ تا ۳٫۰)', 'mild (2.3–3.0)') };
      return null;
    },
    pDose(p, w) { const t = F.pTier(p); return t ? t.perKg * w : 0; },
    /** هر میلی‌لیتر پتاسیم فسفات: ۳ mmol فسفر + ۴٫۴ mEq پتاسیم */
    kphosK(mmolP) { return mmolP * 4.4 / 3; },
    naphosNa(mmolP) { return mmolP * 4 / 3; },
    /** نمونه پروتکل سولفات منیزیم وریدی (کلیه طبیعی) */
    mgTier(m) {
      if (m < 1.0) return { key: 'severe', dose: T('۴ تا ۸ گرم طی ۱۲ تا ۲۴ ساعت', '4–8 g over 12–24 hours'), min: 4, max: 8 };
      if (m < 1.5) return { key: 'moderate', dose: T('۲ تا ۴ گرم', '2–4 g'), min: 2, max: 4 };
      if (m < 1.7) return { key: 'mild', dose: T('۱ تا ۲ گرم (یا خوراکی اگر بی‌علامت است)', '1–2 g (or oral if asymptomatic)'), min: 1, max: 2 };
      return null;
    }
  };

  /* ---------- مولد مسئله‌ها ---------- */
  const R = {
    int(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    step(a, b, s) { const k = Math.round((b - a) / s); return round(a + R.int(0, k) * s, 4); },
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  };

  function patient() {
    const sex = R.pick(['m', 'f']);
    const age = R.pick([R.int(22, 60), R.int(66, 85)]);
    const w = R.step(sex === 'm' ? 60 : 50, sex === 'm' ? 95 : 80, 5);
    return { sex, age, w };
  }
  const who = p => T(`${p.sex === 'm' ? 'مرد' : 'زن'} ${fa(p.age)} ساله، ${fa(p.w)} کیلوگرم`, `${p.sex === 'm' ? 'Man' : 'Woman'}, ${fa(p.age)} years, ${fa(p.w)} kg`);
  const factorWhy = p => T(`ضریب ${p.sex === 'm' ? 'مرد' : 'زن'} ${p.age >= 65 ? 'سالمند' : 'بزرگسال'} = ${fa(F.tbwFactor(p.sex, p.age), 2)}`,
    `Factor for ${p.age >= 65 ? 'an older' : 'an adult'} ${p.sex === 'm' ? 'man' : 'woman'} = ${fa(F.tbwFactor(p.sex, p.age), 2)}`);
  const L_PT = () => T('بیمار', 'Patient'), L_NA = () => T('سدیم سرم', 'Serum sodium');
  const U = {
    L: () => T('لیتر', 'L'), mL: () => T('میلی‌لیتر', 'mL'), mg: () => T('میلی‌گرم', 'mg'), h: () => T('ساعت', 'h'),
    units: () => T('واحد', 'units'), kg: () => T('کیلوگرم', 'kg'), pct: () => T('٪', '%'), ratio: () => T('نسبت', 'ratio')
  };

  const G = {};

  G['na.tbw'] = () => {
    const p = patient();
    const t = F.tbw(p.w, p.sex, p.age);
    return {
      kind: 'num', q: T('آب کل بدن (TBW) این بیمار چند لیتر است؟', 'What is this patient’s total body water (TBW) in liters?'),
      case: [[L_PT(), who(p)]],
      ans: round(t, 1), tol: 0.5, unit: U.L(),
      hint: T('TBW = وزن × ضریب', 'TBW = weight × factor'),
      why: `${factorWhy(p)}<br>TBW = ${fa(p.w)} × ${fa(F.tbwFactor(p.sex, p.age), 2)} = <b>${fa(t)}</b> ${U.L()}`
    };
  };

  G['na.osm'] = () => {
    const na = R.int(126, 146), glu = R.step(90, 450, 10), bun = R.step(10, 70, 7);
    const o = F.osm(na, glu, bun);
    return {
      kind: 'num', q: T('اسمولالیته محاسبه‌شده سرم چقدر است؟', 'What is the calculated serum osmolality?'),
      case: [[T('سدیم', 'Sodium'), fa(na) + ' mEq/L'], [T('گلوکز', 'Glucose'), fa(glu) + ' mg/dL'], ['BUN', fa(bun) + ' mg/dL']],
      ans: round(o, 0), tol: 2, unit: 'mOsm/kg',
      hint: T('۲×Na + گلوکز÷۱۸ + BUN÷۲٫۸', '2×Na + glucose÷18 + BUN÷2.8'),
      why: `${n(2)}×${fa(na)} + ${fa(glu)}÷${n(18)} + ${fa(bun)}÷${n(2.8)} = ${fa(2 * na)} + ${fa(glu / 18)} + ${fa(bun / 2.8)} = <b>${fa(o, 0)}</b>`
    };
  };

  G['na.corrGlu'] = () => {
    const na = R.int(120, 132), glu = R.step(300, 800, 50);
    const c = F.corrNaGlu(na, glu);
    return {
      kind: 'num', q: T('سدیم اصلاح‌شده برای قند خون چقدر است؟', 'What is the glucose-corrected sodium?'),
      case: [[T('سدیم اندازه‌گیری‌شده', 'Measured sodium'), fa(na) + ' mEq/L'], [T('گلوکز', 'Glucose'), fa(glu) + ' mg/dL']],
      ans: round(c, 1), tol: 0.5, unit: 'mEq/L',
      hint: T('Na + ۱٫۶ × (گلوکز − ۱۰۰) ÷ ۱۰۰', 'Na + 1.6 × (glucose − 100) ÷ 100'),
      why: `${fa(na)} + ${n(1.6)} × (${fa(glu)} − ${n(100)}) ÷ ${n(100)} = ${fa(na)} + ${fa(1.6 * (glu - 100) / 100)} = <b>${fa(c)}</b><br>${T('پس بخش مهمی از هیپوناترمی به علت کشیده‌شدن آب به بیرون سلول توسط گلوکز است.', 'So much of this hyponatremia comes from glucose pulling water out of cells.')}`
    };
  };

  G['na.adrogue'] = () => {
    const p = patient(), na = R.int(108, 124);
    const t = F.tbw(p.w, p.sex, p.age);
    const d = F.adrogue(513, na, t);
    return {
      kind: 'num', q: T('یک لیتر سالین ۳٪ سدیم این بیمار را چقدر بالا می‌برد؟', 'How much will 1 L of 3% saline raise this patient’s sodium?'),
      case: [[L_PT(), who(p)], [L_NA(), fa(na) + ' mEq/L'], [T('سدیم سالین ۳٪', 'Sodium in 3% saline'), n(513) + ' mEq/L']],
      ans: round(d, 1), tol: 0.3, unit: 'mEq/L',
      hint: T('ΔNa = (Na مایع − Na سرم) ÷ (TBW + ۱)', 'ΔNa = (infusate Na − serum Na) ÷ (TBW + 1)'),
      why: `${factorWhy(p)} → TBW = ${fa(t)} ${U.L()}<br>ΔNa = (${n(513)} − ${fa(na)}) ÷ (${fa(t)} + ${n(1)}) = ${fa(513 - na)} ÷ ${fa(t + 1)} = <b>${fa(d)}</b> ${T('mEq/L به ازای هر لیتر', 'mEq/L per liter')}`
    };
  };

  G['na.adrogueVol'] = () => {
    const p = patient(), na = R.int(110, 122), goal = R.pick([4, 5, 6, 8]);
    const t = F.tbw(p.w, p.sex, p.age);
    const d = F.adrogue(513, na, t);
    const ml = goal / d * 1000;
    return {
      kind: 'num', q: T(`برای افزایش ${fa(goal)} واحدی سدیم، تقریباً چند میلی‌لیتر سالین ۳٪ لازم است؟`, `About how many mL of 3% saline are needed to raise sodium by ${fa(goal)} mEq/L?`),
      case: [[L_PT(), who(p)], [L_NA(), fa(na) + ' mEq/L']],
      ans: round(ml, 0), tol: Math.max(15, ml * 0.05), unit: U.mL(),
      hint: T('حجم (لیتر) = افزایش هدف ÷ ΔNa هر لیتر', 'Volume (L) = target rise ÷ ΔNa per liter'),
      why: `TBW = ${fa(t)} → ${T('ΔNa هر لیتر', 'ΔNa per liter')} = (${n(513)} − ${fa(na)}) ÷ ${fa(t + 1)} = ${fa(d, 2)}<br>${T('حجم', 'Volume')} = ${fa(goal)} ÷ ${fa(d, 2)} = ${fa(goal / d, 2)} ${U.L()} ≈ <b>${fa(ml, 0)}</b> ${U.mL()}<br><small>${T('فرمول تخمین است؛ سدیم را هر ۲ تا ۴ ساعت دوباره بسنج.', 'The formula is an estimate; recheck sodium every 2–4 hours.')}</small>`
    };
  };

  G['na.limit'] = () => {
    const na = R.int(106, 124), high = Math.random() < 0.5;
    const lim = high ? 8 : 10;
    const risk = high ? R.pick(T(['مصرف مزمن الکل', 'سوءتغذیه شدید', 'هیپوکالمی همزمان', 'بیماری کبدی پیشرفته'], ['Chronic alcohol use', 'Severe malnutrition', 'Concurrent hypokalemia', 'Advanced liver disease'])) : T('بدون عامل خطر خاص', 'No specific risk factor');
    return {
      kind: 'num', q: T('بیشترین سدیم مجاز این بیمار در پایان ۲۴ ساعت اول چند است؟', 'What is the highest acceptable sodium at the end of the first 24 hours?'),
      case: [[T('سدیم فعلی (هیپوناترمی مزمن)', 'Current sodium (chronic hyponatremia)'), fa(na) + ' mEq/L'], [T('عامل خطر ODS', 'ODS risk factor'), risk]],
      ans: na + lim, tol: 0, unit: 'mEq/L',
      hint: T('در ۲۴ ساعت اول حداکثر ۱۰ واحد، در بیمار پرخطر ۸ واحد', 'At most +10 in the first 24 h; +8 if high risk'),
      why: `${high ? T('بیمار پرخطر است ← سقف ۸', 'High-risk patient → limit 8') : T('بیمار پرخطر نیست ← سقف ۱۰', 'Not high risk → limit 10')} ${T('mEq/L در ۲۴ ساعت', 'mEq/L per 24 h')}<br>${fa(na)} + ${fa(lim)} = <b>${fa(na + lim)}</b>`
    };
  };

  G['na.fwd'] = () => {
    const p = patient(), na = R.int(150, 166);
    const t = F.tbw(p.w, p.sex, p.age);
    const f = F.fwd(na, t);
    return {
      kind: 'num', q: T('کمبود آب آزاد این بیمار چند لیتر است؟', 'What is this patient’s free water deficit in liters?'),
      case: [[L_PT(), who(p)], [L_NA(), fa(na) + ' mEq/L']],
      ans: round(f, 1), tol: 0.3, unit: U.L(),
      hint: T('کمبود آب = TBW × (Na ÷ ۱۴۰ − ۱)', 'Water deficit = TBW × (Na ÷ 140 − 1)'),
      why: `${factorWhy(p)} → TBW = ${fa(t)}<br>${fa(t)} × (${fa(na)} ÷ ${n(140)} − ${n(1)}) = ${fa(t)} × ${fa(na / 140 - 1, 3)} = <b>${fa(f)}</b> ${U.L()}<br><small>${T('این مقدار را به همراه دفع جاری، آهسته (حداکثر ۱۰ تا ۱۲ واحد کاهش در ۲۴ ساعت) جبران کن.', 'Replace this plus ongoing losses slowly (lower sodium by no more than 10–12 mEq/L per 24 h).')}</small>`
    };
  };

  G['na.d5w'] = () => {
    const p = patient(), na = R.int(152, 166);
    const t = F.tbw(p.w, p.sex, p.age);
    const d = -F.adrogue(0, na, t);
    return {
      kind: 'num', q: T('یک لیتر دکستروز ۵٪ سدیم این بیمار را حدوداً چند واحد پایین می‌آورد؟', 'About how much will 1 L of D5W lower this patient’s sodium?'),
      case: [[L_PT(), who(p)], [L_NA(), fa(na) + ' mEq/L']],
      ans: round(d, 1), tol: 0.3, unit: 'mEq/L',
      hint: T('ΔNa = (۰ − Na سرم) ÷ (TBW + ۱)', 'ΔNa = (0 − serum Na) ÷ (TBW + 1)'),
      why: `TBW = ${fa(t)}<br>ΔNa = (${n(0)} − ${fa(na)}) ÷ ${fa(t + 1)} = −${fa(d)} → ${T(`کاهش <b>${fa(d)}</b> واحد با هر لیتر`, `a fall of <b>${fa(d)}</b> mEq/L per liter`)}`
    };
  };

  G['k.need'] = () => {
    const k = R.step(2.6, 3.4, 0.1);
    const need = F.kNeed(k, 4);
    return {
      kind: 'num', q: T('برای رساندن پتاسیم به ۴٫۰، تقریباً چند mEq کلرید پتاسیم لازم است؟', 'About how many mEq of KCl are needed to bring potassium to 4.0?'),
      case: [[T('پتاسیم سرم', 'Serum potassium'), fa(k) + ' mEq/L'], [T('کارکرد کلیه', 'Kidney function'), T('طبیعی', 'Normal')], [L_PT(), T('بزرگسال حدود ۷۰ کیلوگرم', 'Adult, about 70 kg')]],
      ans: round(need, 0), tol: 5, unit: 'mEq',
      hint: T('هر ۱۰ mEq ≈ ۰٫۱ mEq/L افزایش', 'Every 10 mEq ≈ +0.1 mEq/L'),
      why: `${T('کمبود سرمی', 'Serum deficit')} = ${n(4)} − ${fa(k)} = ${fa(4 - k)} mEq/L<br>${fa(4 - k)} ÷ ${n(0.1)} × ${n(10)} = <b>${fa(need, 0)}</b> mEq<br><small>${T('در دوزهای تقسیم‌شده بده و پس از هر نوبت دوباره بسنج؛ اگر علت جابجایی سلولی باشد نیاز کمتر است.', 'Give in divided doses and recheck after each one; needs are lower if the cause is a transcellular shift.')}</small>`
    };
  };

  G['k.time'] = () => {
    const total = R.pick([20, 40, 60, 80]), central = Math.random() < 0.4;
    const rate = central ? 20 : 10;
    return {
      kind: 'num', q: T(`با بیشترین سرعت مجاز، تزریق ${fa(total)} mEq کلرید پتاسیم حداقل چند ساعت طول می‌کشد؟`, `At the maximum allowed rate, how many hours will ${fa(total)} mEq of KCl take at least?`),
      case: [[T('راه وریدی', 'IV access'), central ? T('ورید مرکزی با پایش قلبی', 'Central line with cardiac monitoring') : T('ورید محیطی', 'Peripheral line')], [T('مقدار کل', 'Total dose'), fa(total) + ' mEq']],
      ans: total / rate, tol: 0.05, unit: U.h(),
      hint: T('محیطی ۱۰ و مرکزی ۲۰ mEq در ساعت', 'Peripheral 10, central 20 mEq/h'),
      why: `${T('سقف سرعت', 'Maximum rate,')} ${central ? T('مرکزی', 'central') : T('محیطی', 'peripheral')} = ${fa(rate)} mEq/h<br>${fa(total)} ÷ ${fa(rate)} = <b>${fa(total / rate)}</b> ${U.h()}`
    };
  };

  G['ca.corr'] = () => {
    const ca = R.step(6.8, 8.4, 0.1), alb = R.step(1.6, 3.4, 0.1);
    const c = F.corrCa(ca, alb);
    return {
      kind: 'num', q: T('کلسیم اصلاح‌شده با آلبومین چقدر است؟', 'What is the albumin-corrected calcium?'),
      case: [[T('کلسیم تام', 'Total calcium'), fa(ca) + ' mg/dL'], [T('آلبومین', 'Albumin'), fa(alb) + ' g/dL']],
      ans: round(c, 2), tol: 0.1, unit: 'mg/dL',
      hint: T('Ca + ۰٫۸ × (۴ − آلبومین)', 'Ca + 0.8 × (4 − albumin)'),
      why: `${fa(ca)} + ${n(0.8)} × (${n(4)} − ${fa(alb)}) = ${fa(ca)} + ${fa(0.8 * (4 - alb), 2)} = <b>${fa(c, 2)}</b> mg/dL<br>${c >= 8.5 ? T('در محدوده طبیعی است؛ کاهش ظاهری از کمبود آلبومین بوده.', 'This is normal; the low total was due to low albumin.') : T('هنوز پایین است؛ کلسیم یونیزه را هم بسنج.', 'Still low; measure ionized calcium too.')}`
    };
  };

  G['ca.elem'] = () => {
    const chl = Math.random() < 0.3;
    const g = chl ? 1 : R.pick([1, 2, 3]);
    const mg = chl ? F.caChlorElemMg(g) : F.caGlucElemMg(g);
    return {
      kind: 'num', q: T(`${fa(g)} گرم ${chl ? 'کلسیم کلراید' : 'کلسیم گلوکونات'} چند میلی‌گرم کلسیم عنصری دارد؟`, `How many mg of elemental calcium are in ${fa(g)} g of ${chl ? 'calcium chloride' : 'calcium gluconate'}?`),
      case: [[T('آمپول ۱۰٪', '10% ampule'), T(`${fa(g * 10)} میلی‌لیتر = ${fa(g)} گرم نمک`, `${fa(g * 10)} mL = ${fa(g)} g of salt`)]],
      ans: mg, tol: Math.max(5, mg * 0.04), unit: U.mg(),
      hint: T('هر گرم گلوکونات ≈ ۹۳ و هر گرم کلراید ≈ ۲۷۳ میلی‌گرم کلسیم عنصری', 'Each gram of gluconate ≈ 93 mg and of chloride ≈ 273 mg elemental calcium'),
      why: `${fa(g)} × ${n(chl ? 273 : 93)} = <b>${fa(mg, 0)}</b> ${T('میلی‌گرم کلسیم عنصری', 'mg elemental calcium')}`
    };
  };

  G['ca.inf'] = () => {
    const w = R.step(50, 90, 5), r = R.pick([0.5, 1, 1.5]);
    const mg = w * r;
    return {
      kind: 'num', q: T('سرعت انفوزیون کلسیم عنصری چند میلی‌گرم در ساعت است؟', 'What is the elemental calcium infusion rate in mg/h?'),
      case: [[T('وزن', 'Weight'), fa(w) + ' ' + U.kg()], [T('دستور', 'Order'), T(`${fa(r)} میلی‌گرم کلسیم عنصری به ازای هر کیلوگرم در ساعت`, `${fa(r)} mg elemental calcium per kg per hour`)]],
      ans: mg, tol: 1, unit: 'mg/h',
      hint: T('وزن × دوز هر کیلوگرم', 'weight × dose per kg'),
      why: `${fa(w)} × ${fa(r)} = <b>${fa(mg)}</b> mg/h → ${T(`یعنی حدود ${fa(mg / 93, 2)} گرم کلسیم گلوکونات در ساعت`, `about ${fa(mg / 93, 2)} g of calcium gluconate per hour`)}`
    };
  };

  G['mg.conv'] = () => {
    const rev = Math.random() < 0.4;
    if (rev) {
      const mm = R.step(0.4, 1.0, 0.05);
      const v = F.mgFromMmol(mm);
      return {
        kind: 'num', q: T('این مقدار منیزیم چند mg/dL است؟', 'What is this magnesium level in mg/dL?'),
        case: [[T('منیزیم سرم', 'Serum magnesium'), fa(mm, 2) + ' mmol/L']],
        ans: round(v, 2), tol: 0.05, unit: 'mg/dL', hint: `mmol/L × ${n(2.43)}`,
        why: `${fa(mm, 2)} × ${n(2.43)} = <b>${fa(v, 2)}</b> mg/dL`
      };
    }
    const m = R.step(0.8, 2.4, 0.1);
    const v = F.mgToMmol(m);
    return {
      kind: 'num', q: T('این مقدار منیزیم چند mmol/L است؟', 'What is this magnesium level in mmol/L?'),
      case: [[T('منیزیم سرم', 'Serum magnesium'), fa(m) + ' mg/dL']],
      ans: round(v, 2), tol: 0.02, unit: 'mmol/L', hint: `mg/dL ÷ ${n(2.43)}`,
      why: `${fa(m)} ÷ ${n(2.43)} = <b>${fa(v, 2)}</b> mmol/L`
    };
  };

  G['mg.meq'] = () => {
    const g = R.pick([1, 2, 4, 6]);
    const v = F.mgso4Meq(g);
    return {
      kind: 'num', q: T(`${fa(g)} گرم سولفات منیزیم چند mEq منیزیم دارد؟`, `How many mEq of magnesium are in ${fa(g)} g of magnesium sulfate?`),
      case: [[T('هر گرم MgSO₄', 'Each gram of MgSO₄'), `≈ ${n(8.1)} mEq = ${n(4)} mmol`]],
      ans: round(v, 1), tol: Math.max(0.5, v * 0.03), unit: 'mEq', hint: T('گرم × ۸٫۱', 'grams × 8.1'),
      why: `${fa(g)} × ${n(8.12)} = <b>${fa(v)}</b> mEq (≈ ${fa(F.mgso4Mmol(g))} mmol)`
    };
  };

  G['mg.tier'] = () => {
    const m = R.pick([0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6]);
    const t = F.mgTier(m);
    const all = [F.mgTier(0.5).dose, F.mgTier(1.2).dose, F.mgTier(1.6).dose, T('نیازی به جایگزینی نیست', 'No replacement needed')];
    const opts = [t.dose].concat(all.filter(x => x !== t.dose));
    const grp = t.key === 'severe' ? T('شدید (زیر ۱٫۰)', 'severe (below 1.0)') : t.key === 'moderate' ? T('متوسط (۱٫۰ تا ۱٫۴)', 'moderate (1.0–1.4)') : T('خفیف (۱٫۵ تا ۱٫۶)', 'mild (1.5–1.6)');
    return {
      kind: 'mcq', q: T('طبق نمونه پروتکل، چه مقدار سولفات منیزیم وریدی مناسب است؟', 'According to the sample protocol, how much IV magnesium sulfate is appropriate?'),
      case: [[T('منیزیم سرم', 'Serum magnesium'), fa(m) + ' mg/dL'], [T('کارکرد کلیه', 'Kidney function'), T('طبیعی', 'Normal')], [T('علائم', 'Symptoms'), T('ندارد', 'None')]],
      opts, a: 0,
      why: T(`منیزیم ${fa(m)} در گروه «${grp}» است ← ${t.dose}.`, `A magnesium of ${fa(m)} is in the ${grp} group → ${t.dose}.`)
    };
  };

  G['p.conv'] = () => {
    const p = R.step(0.8, 6.0, 0.1);
    const v = F.pToMmol(p);
    return {
      kind: 'num', q: T('این مقدار فسفر چند mmol/L است؟', 'What is this phosphate level in mmol/L?'),
      case: [[T('فسفر سرم', 'Serum phosphate'), fa(p) + ' mg/dL']],
      ans: round(v, 2), tol: 0.03, unit: 'mmol/L', hint: `mg/dL ÷ ${n(3.1)}`,
      why: `${fa(p)} ÷ ${n(3.1)} = <b>${fa(v, 2)}</b> mmol/L`
    };
  };

  G['p.dose'] = () => {
    const tier = R.pick(['mild', 'moderate', 'severe']);
    const p = tier === 'mild' ? R.pick([2.3, 2.4]) : tier === 'moderate' ? R.step(1.6, 2.2, 0.1) : R.step(0.8, 1.5, 0.1);
    const w = tier === 'severe' ? R.step(45, 75, 5) : R.step(50, 90, 5);
    const t = F.pTier(p), d = F.pDose(p, w);
    return {
      kind: 'num', q: T('طبق نمونه پروتکل وزن‌محور، چند میلی‌مول فسفات وریدی تجویز می‌شود؟', 'Using the sample weight-based protocol, how many mmol of IV phosphate should be given?'),
      case: [[T('فسفر سرم', 'Serum phosphate'), fa(p) + ' mg/dL'], [T('وزن', 'Weight'), fa(w) + ' ' + U.kg()], [T('کلیه', 'Kidneys'), T('طبیعی', 'Normal')]],
      ans: round(d, 1), tol: 0.5, unit: 'mmol',
      hint: T('خفیف ۰٫۱۶، متوسط ۰٫۳۲، شدید ۰٫۶۴ mmol/kg', 'mild 0.16, moderate 0.32, severe 0.64 mmol/kg'),
      why: `${T('گروه', 'Group:')} ${t.label} → ${fa(t.perKg, 2)} mmol/kg<br>${fa(t.perKg, 2)} × ${fa(w)} = <b>${fa(d)}</b> mmol ${T('طی ۴ تا ۶ ساعت', 'over 4–6 hours')}`
    };
  };

  G['p.kphos'] = () => {
    const mm = R.pick([15, 21, 30]);
    const k = F.kphosK(mm);
    return {
      kind: 'num', q: T(`اگر ${fa(mm)} mmol فسفر به شکل پتاسیم فسفات بدهیم، بیمار چند mEq پتاسیم هم می‌گیرد؟`, `If ${fa(mm)} mmol of phosphate is given as potassium phosphate, how many mEq of potassium does the patient also receive?`),
      case: [[T('هر میلی‌لیتر پتاسیم فسفات', 'Each mL of potassium phosphate'), T('۳ mmol فسفر + ۴٫۴ mEq پتاسیم', '3 mmol phosphate + 4.4 mEq potassium')]],
      ans: round(k, 1), tol: 0.5, unit: 'mEq',
      hint: T('mmol فسفر ÷ ۳ × ۴٫۴', 'mmol phosphate ÷ 3 × 4.4'),
      why: `${fa(mm)} ÷ ${n(3)} = ${fa(mm / 3)} ${U.mL()} → × ${n(4.4)} = <b>${fa(k)}</b> ${T('mEq پتاسیم', 'mEq potassium')}<br><small>${T('همین پتاسیم را در سقف سرعت تزریق پتاسیم حساب کن.', 'Count this potassium toward the maximum potassium infusion rate.')}</small>`
    };
  };

  G['p.refeed'] = () => {
    const w = R.step(35, 55, 1), extreme = Math.random() < 0.3;
    const kcal = w * (extreme ? 5 : 10);
    return {
      kind: 'num', q: T('انرژی روز اول تغذیه برای این بیمار پرخطر چند کیلوکالری است؟', 'How many kcal should this high-risk patient receive on day 1 of feeding?'),
      case: [[T('وزن', 'Weight'), fa(w) + ' ' + U.kg()], [T('وضعیت', 'History'), extreme ? T('BMI زیر ۱۴ و بیش از ۱۵ روز بدون غذا', 'BMI under 14 and more than 15 days without food') : T('BMI زیر ۱۶ و ۱۲ روز غذای ناچیز', 'BMI under 16 and 12 days of negligible intake')]],
      ans: kcal, tol: 0, unit: 'kcal',
      hint: T('پرخطر: ۱۰ kcal/kg، بسیار پرخطر: ۵ kcal/kg', 'high risk: 10 kcal/kg; very high risk: 5 kcal/kg'),
      why: `${extreme ? T('بسیار پرخطر ← ۵', 'Very high risk → 5') : T('پرخطر ← ۱۰', 'High risk → 10')} kcal/kg × ${fa(w)} = <b>${fa(kcal)}</b> kcal<br><small>${T('و پیش از شروع تغذیه، تیامین.', 'And give thiamine before feeding starts.')}</small>`
    };
  };

  G['p.caxp'] = () => {
    const ca = R.step(7.5, 10.5, 0.1), p = R.step(4.5, 8.5, 0.1);
    const x = ca * p;
    return {
      kind: 'num', q: T('حاصل‌ضرب کلسیم × فسفر چقدر است؟', 'What is the calcium × phosphate product?'),
      case: [[T('کلسیم', 'Calcium'), fa(ca) + ' mg/dL'], [T('فسفر', 'Phosphate'), fa(p) + ' mg/dL']],
      ans: round(x, 0), tol: 1, unit: 'mg²/dL²', hint: 'Ca × P',
      why: `${fa(ca)} × ${fa(p)} = <b>${fa(x, 0)}</b><br>${x > 55 ? T('بالای ۵۵ است ← خطر رسوب کلسیم–فسفات در بافت‌ها؛ فسفات وریدی نده.', 'Above 55 → risk of calcium–phosphate deposition in tissues; do not give IV phosphate.') : T('زیر ۵۵ است.', 'Below 55.')}`
    };
  };

  G['na.furst'] = () => {
    const sna = R.int(118, 128), una = R.int(40, 140), uk = R.int(20, 70);
    const r = (una + uk) / sna;
    const adv = r > 1 ? T('بیشتر از ۱ ← محدودیت مایع به‌تنهایی جواب نمی‌دهد', 'Above 1 → fluid restriction alone will not work')
      : r >= 0.5 ? T('بین ۰٫۵ و ۱ ← محدودیت حدود ۵۰۰ میلی‌لیتر در روز', 'Between 0.5 and 1 → restrict to about 500 mL/day')
        : T('کمتر از ۰٫۵ ← محدودیت حدود ۱ لیتر در روز', 'Below 0.5 → restrict to about 1 L/day');
    return {
      kind: 'num', q: T('نسبت فورست این بیمار SIADH چقدر است؟', 'What is the Furst ratio for this SIADH patient?'),
      case: [[L_NA(), fa(sna) + ' mEq/L'], [T('سدیم ادرار', 'Urine sodium'), fa(una) + ' mEq/L'], [T('پتاسیم ادرار', 'Urine potassium'), fa(uk) + ' mEq/L']],
      ans: round(r, 2), tol: 0.03, unit: U.ratio(),
      hint: T('(Na ادرار + K ادرار) ÷ Na سرم', '(urine Na + urine K) ÷ serum Na'),
      why: `(${fa(una)} + ${fa(uk)}) ÷ ${fa(sna)} = <b>${fa(r, 2)}</b><br>${adv}`
    };
  };

  G['k.dka'] = () => {
    const k = R.pick([2.7, 2.9, 3.1, 3.2, 3.5, 3.9, 4.4, 4.8, 5.1, 5.5, 5.9, 6.3]);
    const all = T(['انسولین را نگه دار و ۲۰ تا ۳۰ mEq پتاسیم در ساعت بده تا پتاسیم به ۳٫۳ برسد', 'انسولین را شروع کن و ۲۰ تا ۳۰ mEq پتاسیم به هر لیتر مایع اضافه کن', 'انسولین را شروع کن، پتاسیم نده و هر ۲ ساعت بسنج', 'انسولین و بی‌کربنات بده، پتاسیم لازم نیست'],
      ['Hold insulin and give 20–30 mEq/h of potassium until K reaches 3.3', 'Start insulin and add 20–30 mEq of potassium to each liter of fluid', 'Start insulin, give no potassium, and recheck every 2 hours', 'Give insulin and bicarbonate; potassium is not needed']);
    const a = k < 3.3 ? 0 : k <= 5.2 ? 1 : 2;
    return {
      kind: 'mcq', q: T('طبق راهنمای ADA، برنامه پتاسیم و انسولین این بیمار چیست؟', 'Per ADA guidance, what is the potassium and insulin plan?'),
      case: [[T('تشخیص', 'Diagnosis'), T('کتواسیدوز دیابتی', 'Diabetic ketoacidosis')], [T('پتاسیم سرم', 'Serum potassium'), fa(k) + ' mEq/L'], [T('برون‌ده ادرار', 'Urine output'), T('کافی', 'Adequate')]],
      opts: [all[a]].concat(all.filter((_, i) => i !== a)), a: 0,
      why: a === 0 ? T(`پتاسیم ${fa(k)} کمتر از ۳٫۳ است ← انسولین خطر هیپوکالمی کشنده دارد؛ اول پتاسیم.`, `Potassium ${fa(k)} is below 3.3 → insulin risks fatal hypokalemia; replace potassium first.`)
        : a === 1 ? T(`پتاسیم ${fa(k)} بین ۳٫۳ و ۵٫۲ است ← پتاسیم در مایع، هدف ۴ تا ۵.`, `Potassium ${fa(k)} is between 3.3 and 5.2 → add potassium to fluids, target 4–5.`)
          : T(`پتاسیم ${fa(k)} بالای ۵٫۲ است ← فعلاً پتاسیم نده؛ با انسولین پایین می‌آید.`, `Potassium ${fa(k)} is above 5.2 → hold potassium for now; insulin will bring it down.`)
    };
  };

  G['ca.calcitonin'] = () => {
    const w = R.step(45, 95, 5);
    return {
      kind: 'num', q: T('دوز هر نوبت کلسی‌تونین این بیمار چند واحد است؟', 'What is each calcitonin dose for this patient, in units?'),
      case: [[T('وزن', 'Weight'), fa(w) + ' ' + U.kg()], [T('دستور', 'Order'), T('۴ واحد به ازای هر کیلوگرم، زیرجلدی هر ۱۲ ساعت', '4 units/kg subcutaneously every 12 hours')], [T('کلسیم', 'Calcium'), n(14.2) + ' mg/dL']],
      ans: 4 * w, tol: 0, unit: U.units(), hint: T('۴ × وزن', '4 × weight'),
      why: `${n(4)} × ${fa(w)} = <b>${fa(4 * w)}</b> ${T('واحد هر ۱۲ ساعت', 'units every 12 hours')}<br><small>${T('پس از ۴۸ ساعت اثرش کم می‌شود؛ هم‌زمان بیس‌فسفونات را شروع کن.', 'Its effect fades after 48 hours; start a bisphosphonate at the same time.')}</small>`
    };
  };

  G['mg.femg'] = () => {
    const smg = R.step(0.9, 1.5, 0.1), scr = R.step(0.7, 1.2, 0.1), ucr = R.int(60, 140), umg = R.step(0.5, 12, 0.5);
    const fe = umg * scr / (0.7 * smg * ucr) * 100;
    return {
      kind: 'num', q: T('دفع کسری منیزیم (FEMg) چند درصد است؟', 'What is the fractional excretion of magnesium (FEMg), in %?'),
      case: [[T('منیزیم سرم', 'Serum magnesium'), fa(smg) + ' mg/dL'], [T('کراتینین سرم', 'Serum creatinine'), fa(scr) + ' mg/dL'], [T('منیزیم ادرار', 'Urine magnesium'), fa(umg) + ' mg/dL'], [T('کراتینین ادرار', 'Urine creatinine'), fa(ucr) + ' mg/dL']],
      ans: round(fe, 1), tol: Math.max(0.2, fe * 0.04), unit: U.pct(),
      hint: T('(Mg ادرار × Cr سرم) ÷ (۰٫۷ × Mg سرم × Cr ادرار) × ۱۰۰', '(urine Mg × serum Cr) ÷ (0.7 × serum Mg × urine Cr) × 100'),
      why: `(${fa(umg)} × ${fa(scr)}) ÷ (${n(0.7)} × ${fa(smg)} × ${fa(ucr)}) × ${n(100)} = <b>${fa(fe)}${U.pct()}</b><br>${fe < 2 ? T('کمتر از ۲٪ ← علت گوارشی', 'Below 2% → gastrointestinal cause') : T('بیشتر از ۲٪ ← هدررفت کلیوی', 'Above 2% → renal wasting')}`
    };
  };

  G['mg.asthmaChild'] = () => {
    const w = R.int(10, 60);
    const mg = Math.min(2000, w * 40);
    return {
      kind: 'num', q: T('دوز سولفات منیزیم وریدی این کودک در آسم شدید چند میلی‌گرم است؟', 'What IV magnesium sulfate dose (mg) does this child with severe asthma need?'),
      case: [[T('وزن', 'Weight'), fa(w) + ' ' + U.kg()], [T('دستور', 'Order'), T('۴۰ mg/kg، حداکثر ۲ گرم، طی ۲۰ دقیقه', '40 mg/kg, maximum 2 g, over 20 minutes')]],
      ans: mg, tol: 0, unit: U.mg(), hint: T('۴۰ × وزن، حداکثر ۲۰۰۰', '40 × weight, maximum 2000'),
      why: `${n(40)} × ${fa(w)} = ${fa(w * 40)}${w * 40 > 2000 ? T(' ← بیشتر از سقف است، پس <b>۲۰۰۰</b>', ' → above the maximum, so <b>2000</b>') : ' → <b>' + fa(mg) + '</b>'} ${U.mg()}`
    };
  };

  G['p.fepo4'] = () => {
    const sp = R.step(1.0, 2.2, 0.1), scr = R.step(0.6, 1.2, 0.1), ucr = R.int(60, 140), up = R.int(5, 60);
    const fe = up * scr / (sp * ucr) * 100;
    return {
      kind: 'num', q: T('دفع کسری فسفات (FEPO4) چند درصد است؟', 'What is the fractional excretion of phosphate (FEPO4), in %?'),
      case: [[T('فسفر سرم', 'Serum phosphate'), fa(sp) + ' mg/dL'], [T('کراتینین سرم', 'Serum creatinine'), fa(scr) + ' mg/dL'], [T('فسفر ادرار', 'Urine phosphate'), fa(up) + ' mg/dL'], [T('کراتینین ادرار', 'Urine creatinine'), fa(ucr) + ' mg/dL']],
      ans: round(fe, 1), tol: Math.max(0.3, fe * 0.04), unit: U.pct(),
      hint: T('(P ادرار × Cr سرم) ÷ (P سرم × Cr ادرار) × ۱۰۰', '(urine P × serum Cr) ÷ (serum P × urine Cr) × 100'),
      why: `(${fa(up)} × ${fa(scr)}) ÷ (${fa(sp)} × ${fa(ucr)}) × ${n(100)} = <b>${fa(fe)}${U.pct()}</b><br>${fe > 5 ? T('بالای ۵٪ در هیپوفسفاتمی ← هدررفت کلیوی', 'Above 5% during hypophosphatemia → renal wasting') : T('کمتر از ۵٪ ← جابجایی یا جذب کم', 'Below 5% → shift into cells or poor absorption')}`
    };
  };

  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round;
  EA.F = F; EA.FLUIDS = FLUIDS; EA.gen = G; EA.R = R;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/*<<PV-DATA>>*/
/* یونا — محتوای آموزشی پنج دنیای الکترولیت
 * سازنده‌های کوتاه:
 *   L(عنوان، متن)                  کارت آموزشی
 *   M(سؤال، گزینه‌ها، چرا، کیس)     چندگزینه‌ای — گزینه اول درست است و در اجرا به‌هم می‌ریزد
 *   T(جمله، درست/غلط، چرا)          درست یا نادرست
 *   B(جمله با ___، گزینه‌ها، چرا)   جای خالی — گزینه اول درست است
 *   O(سؤال، مراحل به ترتیب درست، چرا) مرتب‌سازی
 *   P(سؤال، جفت‌ها)                 جفت‌کردن
 *   N(شناسه مولد)                   مسئله محاسباتی با اعداد تصادفی
 */
(function (root) {
  const EA = root.EA = root.EA || {};

  const L = (title, body) => ({ t: 'learn', title, body });
  const M = (q, opts, why, kase) => ({ t: 'mcq', q, opts, why, case: kase });
  const T = (q, a, why) => ({ t: 'tf', q, a, why });
  const B = (q, opts, why) => ({ t: 'fill', q, opts, why });
  const O = (q, steps, why) => ({ t: 'order', q, steps, why });
  const P = (q, pairs, why) => ({ t: 'match', q, pairs, why });
  const N = gen => ({ t: 'num', gen });

  const fx = s => `<div class="fx" dir="ltr">${s}</div>`;
  const tbl = rows => '<table class="mini">' + rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</table>';

  EA.worlds = [
    /* ================================ سدیم ================================ */
    {
      id: 'na', sym: 'Na', name: 'سدیم', sub: 'آب، اسمولالیته و مغز', color: '#1CB0F6', dark: '#1899D6', light: '#DDF4FF',
      gens: ['na.tbw', 'na.osm', 'na.corrGlu', 'na.adrogue', 'na.adrogueVol', 'na.limit', 'na.fwd', 'na.d5w'],
      lessons: [
        {
          id: 'na1', title: 'سدیم و آب بدن', icon: '💧', items: [
            L('سدیم یعنی حساب آب', 'سدیم اصلی‌ترین کاتیون مایع خارج سلولی است و محدوده طبیعی آن <b>۱۳۵ تا ۱۴۵ mEq/L</b> است.<br><br>نکته کلیدی: اختلال سدیم بیشتر <b>اختلال آب</b> است تا اختلال خود سدیم. هیپوناترمی یعنی آب نسبت به سدیم زیاد است، نه لزوماً اینکه سدیم کم باشد.'),
            M('محدوده طبیعی سدیم سرم کدام است؟', ['۱۳۵ تا ۱۴۵ mEq/L', '۱۲۵ تا ۱۳۵ mEq/L', '۱۴۵ تا ۱۵۵ mEq/L', '۳٫۵ تا ۵٫۰ mEq/L'], '۱۳۵ تا ۱۴۵ طبیعی است. ۳٫۵ تا ۵ محدوده پتاسیم است!'),
            L('آب کل بدن (TBW)', 'تقریباً همه فرمول‌های سدیم به آب کل بدن نیاز دارند:' + fx('TBW = وزن (kg) × ضریب') + tbl([['کودک', '۰٫۶'], ['مرد بزرگسال', '۰٫۶'], ['زن بزرگسال', '۰٫۵'], ['مرد سالمند (۶۵+)', '۰٫۵'], ['زن سالمند (۶۵+)', '۰٫۴۵']])),
            M('ضریب TBW برای زن ۴۰ ساله چند است؟', ['۰٫۵', '۰٫۶', '۰٫۴۵', '۰٫۷'], 'زن بزرگسال زیر ۶۵ سال: ۰٫۵.'),
            N('na.tbw'),
            T('هیپوناترمی تقریباً همیشه یعنی سدیم کل بدن کم است.', false, 'خیر. در نارسایی قلب یا سیروز سدیم کل بدن زیاد است ولی آب بیشتر از آن زیاد شده. هیپوناترمی نسبت آب به سدیم است.'),
            L('اسمولالیته سرم', 'غلظت ذرات حل‌شده در سرم:' + fx('Osm = 2×Na + Glucose/18 + BUN/2.8') + 'محدوده طبیعی: <b>۲۷۵ تا ۲۹۵ mOsm/kg</b>.<br>اوره آزادانه از غشای سلول می‌گذرد؛ پس در «تونیسیته مؤثر» نقشی ندارد.'),
            N('na.osm'),
            M('کدام ماده تونیسیته مؤثر سرم را بالا نمی‌برد؟', ['اوره', 'گلوکز', 'سدیم', 'مانیتول'], 'اوره از غشا عبور می‌کند و آب را جابجا نمی‌کند، پس «اسمول غیرمؤثر» است.'),
            P('جفت‌ها را پیدا کن', [['سدیم طبیعی', '۱۳۵–۱۴۵'], ['اسمولالیته طبیعی', '۲۷۵–۲۹۵'], ['ضریب TBW زن سالمند', '۰٫۴۵'], ['ضریب TBW مرد جوان', '۰٫۶']])
          ]
        },
        {
          id: 'na2', title: 'هیپوناترمی: تشخیص', icon: '🔍', items: [
            L('اول تونیسیته!', 'قدم اول در هر هیپوناترمی، اسمولالیته سرم است:<br>• <b>کمتر از ۲۷۵</b> ← هیپوناترمی هیپوتونیک (واقعی)<br>• <b>۲۷۵ تا ۲۹۵</b> ← ایزوتونیک؛ «کاذب» از چربی یا پروتئین بسیار بالا<br>• <b>بیشتر از ۲۹۵</b> ← هیپرتونیک؛ مثل هیپرگلیسمی یا مانیتول'),
            M('بیمار با تری‌گلیسرید بسیار بالا، سدیم ۱۲۸ و اسمولالیته اندازه‌گیری‌شده طبیعی دارد. تشخیص؟', ['هیپوناترمی کاذب', 'SIADH', 'مسمومیت با آب', 'نارسایی قلب'], 'چربی زیاد حجم آبی نمونه را کم نشان می‌دهد؛ اسمولالیته طبیعی است و درمان سدیم لازم نیست.'),
            L('سدیم اصلاح‌شده با قند', 'گلوکز بالا آب را از سلول بیرون می‌کشد و سدیم را رقیق می‌کند:' + fx('Na اصلاح‌شده = Na + 1.6 × (Glu − 100) / 100') + 'در قند بالای ۴۰۰، گاهی ضریب ۲٫۴ به کار می‌رود.'),
            N('na.corrGlu'),
            L('حالا حجم بیمار را بسنج', '• <b>هیپوولمیک</b>: استفراغ، اسهال، دیورتیک؛ سدیم ادرار زیر ۲۰ به نفع علت غیرکلیوی<br>• <b>یوولمیک</b>: SIADH، کم‌کاری تیروئید، نارسایی آدرنال<br>• <b>هیپرولمیک</b>: نارسایی قلب، سیروز، سندرم نفروتیک'),
            P('هر علت را به نوعش وصل کن', [['استفراغ طولانی', 'هیپوولمیک'], ['SIADH', 'یوولمیک'], ['نارسایی قلب', 'هیپرولمیک'], ['هیپرگلیسمی', 'هیپرتونیک']]),
            M('کدام یافته به نفع SIADH است؟', ['اسمولالیته ادرار بالای ۱۰۰ و سدیم ادرار بالای ۳۰ در بیمار یوولمیک', 'اسمولالیته ادرار زیر ۱۰۰', 'سدیم ادرار زیر ۲۰ همراه ادم', 'اسمولالیته سرم بالای ۲۹۵'], 'در SIADH ادرار به‌طور نامناسب غلیظ است و سدیم ادرار بالاست؛ بیمار یوولمیک و اسمولالیته سرم پایین است.'),
            T('اسمولالیته ادرار زیر ۱۰۰ در هیپوناترمی به نفع پلی‌دیپسی اولیه یا دریافت کم املاح است.', true, 'درست. کلیه ADH را سرکوب کرده و ادرار حداکثر رقیق است؛ مشکل ورودی زیاد آب یا کمبود املاح است.'),
            B('هیپوناترمی همراه ادم و آسیت در ___ دیده می‌شود.', ['سیروز', 'SIADH', 'اسهال'], 'سیروز هیپوناترمی هیپرولمیک می‌دهد.'),
            O('مراحل تشخیص هیپوناترمی را مرتب کن', ['علائم شدید را بررسی کن', 'اسمولالیته سرم را بسنج', 'اسمولالیته ادرار را بسنج', 'سدیم ادرار و وضعیت حجم را ارزیابی کن'], 'علائم شدید نیاز به درمان فوری دارند؛ سپس تونیسیته، بعد ADH (اسمولالیته ادرار) و در آخر سدیم ادرار و حجم.')
          ]
        },
        {
          id: 'na3', title: 'اصلاح هیپوناترمی', icon: '🩺', items: [
            L('قانون طلایی: آهسته!', 'در هیپوناترمی مزمن (بیش از ۴۸ ساعت یا نامعلوم) مغز خودش را تطبیق داده است. اصلاح سریع ← <b>دمیلیناسیون اسمزی (ODS)</b>.<br><br>سقف افزایش: <b>۱۰ mEq/L در ۲۴ ساعت اول</b> و ۸ در هر ۲۴ ساعت بعدی.<br>در بیمار پرخطر <b>۸ در ۲۴ ساعت</b>.<br><br>عوامل خطر ODS: سدیم ≤ ۱۰۵، الکلیسم، سوءتغذیه، هیپوکالمی، بیماری کبدی.'),
            M('حداکثر افزایش مجاز سدیم در ۲۴ ساعت اول برای بیمار الکلی با سوءتغذیه؟', ['۸ mEq/L', '۱۲ mEq/L', '۱۵ mEq/L', '۲۰ mEq/L'], 'بیمار پرخطر ODS است؛ سقف ۸ واحد در ۲۴ ساعت.'),
            N('na.limit'),
            L('علائم شدید؟ سالین ۳٪', 'تشنج، کاهش هوشیاری، استفراغ مکرر یا دیسترس تنفسی:<br>• بولوس <b>۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪</b> طی ۱۰ تا ۲۰ دقیقه<br>• در صورت نیاز تا ۲ بار دیگر تکرار<br>• هدف: افزایش <b>۴ تا ۶ واحد</b> یا رفع علائم — همین برای کاهش ادم مغزی کافی است'),
            M('بیمار با تشنج و سدیم ۱۱۴. اولین اقدام؟', ['بولوس ۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪', 'محدودیت مایع', 'سالین ۰٫۹٪ آهسته', 'تولواپتان خوراکی'], 'هیپوناترمی با علائم شدید اورژانس است؛ سالین هیپرتونیک بولوس.'),
            L('فرمول آدروگه–مادیاس', 'پیش‌بینی تغییر سدیم با <b>یک لیتر</b> از هر مایع:' + fx('ΔNa = (Na<sub>مایع</sub> − Na<sub>سرم</sub>) / (TBW + 1)') + tbl([['سالین ۳٪', '۵۱۳'], ['سالین ۰٫۹٪', '۱۵۴'], ['رینگر لاکتات', '۱۳۰'], ['سالین ۰٫۴۵٪', '۷۷'], ['دکستروز ۵٪', '۰']]) + '<small>اگر مایع پتاسیم دارد، پتاسیم را هم به صورت کسر اضافه کن.</small>'),
            N('na.adrogue'),
            B('عارضه اصلاح سریع هیپوناترمی مزمن ___ است.', ['دمیلیناسیون اسمزی (ODS)', 'ادم مغزی', 'هیپرکالمی'], 'ODS ممکن است ۲ تا ۶ روز بعد با دیزارتری، دیسفاژی و فلج ظاهر شود.'),
            T('اگر سدیم بیش از حد مجاز بالا رفت، می‌توان با دکستروز ۵٪ و دسموپرسین آن را دوباره پایین آورد.', true, 'درست. «پایین‌آوردن دوباره» با آب آزاد و دسموپرسین در اصلاح بیش از حد توصیه می‌شود.'),
            M('درمان خط اول SIADH بدون علامت شدید؟', ['محدودیت مایع', 'سالین ۰٫۹٪', 'دکستروز ۵٪', 'فوروزماید به‌تنهایی'], 'محدودیت مایع (معمولاً زیر ۸۰۰ تا ۱۰۰۰ میلی‌لیتر در روز). سالین ۰٫۹٪ در SIADH ممکن است سدیم را بدتر کند.')
          ]
        },
        {
          id: 'na4', title: 'هیپرناترمی', icon: '🔥', items: [
            L('هیپرناترمی یعنی کمبود آب', 'سدیم بالای ۱۴۵ ← همیشه هیپرتونیک.<br>علت‌ها: از دست دادن آب (تب، اسهال، دیابت بی‌مزه)، دسترسی نداشتن به آب (سالمند، شیرخوار، بیمار بی‌هوش)، یا دریافت سدیم زیاد.<br>علائم: تشنگی، بی‌قراری، خواب‌آلودگی، تشنج.'),
            L('کمبود آب آزاد', fx('کمبود آب (L) = TBW × (Na / 140 − 1)') + 'در هیپرناترمی مزمن سدیم را حداکثر <b>۱۰ تا ۱۲ واحد در ۲۴ ساعت</b> (حدود ۰٫۵ در ساعت) پایین بیاور. اصلاح سریع ← ادم مغزی.'),
            N('na.fwd'),
            M('سرعت ایمن کاهش سدیم در هیپرناترمی مزمن؟', ['حداکثر ۱۰ تا ۱۲ mEq/L در ۲۴ ساعت', '۲۰ mEq/L در ۲۴ ساعت', 'هر چه سریع‌تر بهتر', '۲ mEq/L در ۲۴ ساعت'], 'آهسته، چون سلول‌های مغز اسمول‌های داخلی ساخته‌اند و آب سریع باعث ورم آن‌ها می‌شود.'),
            B('اصلاح سریع هیپرناترمی مزمن خطر ___ دارد.', ['ادم مغزی', 'ODS', 'هیپوکلسمی'], 'برعکس هیپوناترمی: این‌جا خطر، ورم مغز است.'),
            N('na.d5w'),
            M('پلی‌اوری با ادرار رقیق (اسمولالیته زیر ۳۰۰) و هیپرناترمی. محتمل‌ترین تشخیص؟', ['دیابت بی‌مزه', 'SIADH', 'استفراغ', 'هیپرآلدوسترونیسم'], 'کلیه نمی‌تواند ادرار را تغلیظ کند ← دیابت بی‌مزه مرکزی یا نفروژنیک.'),
            T('در بیمار هیپرناترمیک در شوک، اول باید حجم را با سالین ۰٫۹٪ جبران کرد و بعد آب آزاد داد.', true, 'درست. ثبات همودینامیک اولویت دارد؛ سالین ۰٫۹٪ نسبت به سرم بیمار هنوز هیپوتونیک است.')
          ]
        },
        {
          id: 'na5', title: 'بیمارستان سدیم', icon: '🏥', items: [
            M('کدام تصمیم درست است؟', ['هدف افزایش حداکثر ۸ در ۲۴ ساعت و اصلاح هم‌زمان پتاسیم', 'رساندن سدیم به ۱۳۵ در ۲۴ ساعت', 'پتاسیم اهمیتی ندارد', 'بولوس مکرر ۳٪ تا رسیدن به ۱۳۰'], 'بیمار پرخطر ODS است. جایگزینی پتاسیم هم خودش سدیم را بالا می‌برد، پس باید در محاسبه لحاظ شود.', [['بیمار', 'مرد ۴۵ ساله الکلی'], ['سدیم', '۱۱۰ mEq/L'], ['پتاسیم', '۲٫۹ mEq/L'], ['علائم', 'گیجی خفیف، بدون تشنج']]),
            N('na.adrogueVol'),
            T('دادن پتاسیم هم سدیم سرم را بالا می‌برد.', true, 'درست. در معادله ادلمن سدیم سرم به (Na + K) قابل تبادل تقسیم بر آب بدن بستگی دارد.'),
            N('na.corrGlu'),
            M('قدم بعدی؟', ['دکستروز ۵٪ و در صورت لزوم دسموپرسین برای پایین‌آوردن دوباره سدیم', 'ادامه سالین ۳٪', 'اقدامی لازم نیست', 'فوروزماید'], 'افزایش ۱۴ واحد در ۱۸ ساعت بیش از حد مجاز است؛ باید دوباره پایین آورد.', [['سدیم پایه', '۱۱۲'], ['سدیم ۱۸ ساعت بعد', '۱۲۶'], ['وضعیت', 'بدون علامت']]),
            N('na.fwd'),
            N('na.osm'),
            M('کدام دستور مناسب‌تر است؟', ['جبران آهسته آب آزاد (مثلاً دکستروز ۵٪ یا آب از راه لوله) طی ۴۸ ساعت', 'دکستروز ۵٪ با سرعت بالا برای اصلاح در ۶ ساعت', 'سالین ۳٪', 'محدودیت مایع'], 'بیمار هیپرناترمی مزمن دارد و همودینامیک پایدار است ← آب آزاد، آهسته.', [['بیمار', 'زن ۸۲ ساله از خانه سالمندان'], ['سدیم', '۱۶۲'], ['فشار خون', 'پایدار']])
          ]
        }
      ]
    },

    /* ================================ پتاسیم ================================ */
    {
      id: 'k', sym: 'K', name: 'پتاسیم', sub: 'ریتم قلب در دستان تو', color: '#CE82FF', dark: '#A568CC', light: '#F4E6FF',
      gens: ['k.need', 'k.time'],
      lessons: [
        {
          id: 'k1', title: 'پتاسیم و قلب', icon: '💜', items: [
            L('پتاسیم کجاست؟', 'حدود <b>۹۸٪</b> پتاسیم بدن داخل سلول است. سطح طبیعی سرم <b>۳٫۵ تا ۵٫۰ mEq/L</b>.<br><br>چون مقدار سرمی کم است، تغییر کوچک آن اثر بزرگی روی پتانسیل غشای قلب و عضله دارد.'),
            M('محدوده طبیعی پتاسیم سرم؟', ['۳٫۵ تا ۵٫۰ mEq/L', '۵ تا ۷ mEq/L', '۱۳۵ تا ۱۴۵ mEq/L', '۲٫۵ تا ۳٫۵ mEq/L'], '۳٫۵ تا ۵٫۰.'),
            L('چه چیزی پتاسیم را جابجا می‌کند؟', '<b>به داخل سلول</b>: انسولین، آگونیست بتا (سالبوتامول)، آلکالوز<br><b>به بیرون سلول</b>: کمبود انسولین، اسیدوز، تخریب سلول (رابدومیولیز، لیز تومور، همولیز)'),
            B('آلکالوز باعث ___ پتاسیم سرم می‌شود.', ['کاهش', 'افزایش', 'تغییرنکردن'], 'در آلکالوز یون هیدروژن از سلول خارج و پتاسیم وارد سلول می‌شود.'),
            P('هر مورد را به اثرش وصل کن', [['انسولین', 'انتقال K به داخل سلول'], ['رابدومیولیز', 'آزادشدن K از سلول‌ها'], ['اسپیرونولاکتون', 'کاهش دفع کلیوی K'], ['فوروزماید', 'افزایش دفع کلیوی K']]),
            T('همولیز نمونه خون می‌تواند پتاسیم را کاذب بالا نشان دهد.', true, 'درست. «هیپرکالمی کاذب» — نوار قلب طبیعی و همولیز گزارش‌شده؟ آزمایش را تکرار کن.'),
            M('کدام دارو می‌تواند هیپرکالمی بدهد؟', ['انالاپریل', 'فوروزماید', 'سالبوتامول', 'انسولین'], 'مهارکننده‌های ACE و ARBها با کاهش آلدوسترون دفع پتاسیم را کم می‌کنند.'),
            M('موج U برجسته در نوار قلب نشانه کدام است؟', ['هیپوکالمی', 'هیپرکالمی', 'هیپرکلسمی', 'هیپوناترمی'], 'هیپوکالمی: صاف‌شدن T، موج U، افت ST.')
          ]
        },
        {
          id: 'k2', title: 'هیپوکالمی', icon: '📉', items: [
            L('هیپوکالمی: چرا و چه؟', 'علت‌ها: از دست رفتن گوارشی (استفراغ، اسهال)، دیورتیک‌ها، <b>هیپومنیزیمی</b>، انسولین، آگونیست بتا، هیپرآلدوسترونیسم.<br>علائم: ضعف عضلانی، ایلئوس، کرامپ، آریتمی.<br>نوار قلب: T صاف، موج U، افت ST.'),
            M('کدام مورد باعث هیپوکالمی نمی‌شود؟', ['اسپیرونولاکتون', 'استفراغ', 'سالبوتامول', 'هیپومنیزیمی'], 'اسپیرونولاکتون نگه‌دارنده پتاسیم است و هیپرکالمی می‌دهد.'),
            L('قانون «۱۰ به ۰٫۱»', 'در بزرگسال با کلیه طبیعی و بدون جابجایی سلولی:' + fx('10 mEq KCl ≈ +0.1 mEq/L') + 'یعنی برای بالا بردن ۰٫۵ واحدی حدود ۵۰ mEq لازم است. این فقط تخمین است؛ همیشه پس از تجویز دوباره بسنج.'),
            N('k.need'),
            M('هیپوکالمی با وجود جایگزینی کافی اصلاح نمی‌شود. چه چیزی را بسنجیم؟', ['منیزیم', 'سدیم', 'کلسیم', 'فسفر'], 'کمبود منیزیم دفع کلیوی پتاسیم را زیاد می‌کند؛ تا منیزیم اصلاح نشود پتاسیم بالا نمی‌رود.'),
            T('در پتاسیم ۳٫۳ بدون علامت و با بلع طبیعی، راه خوراکی ارجح است.', true, 'درست. خوراکی ایمن‌تر است؛ وریدی برای هیپوکالمی شدید، علامت‌دار یا ناتوانی در بلع.'),
            O('مراحل مدیریت هیپوکالمی را مرتب کن', ['نوار قلب و علائم را بررسی کن', 'راه تجویز و دوز را انتخاب کن', 'با سرعت مجاز تجویز کن', 'پتاسیم را دوباره اندازه بگیر'], 'ارزیابی شدت ← انتخاب راه و دوز ← تجویز ایمن ← پایش.'),
            N('k.need')
          ]
        },
        {
          id: 'k3', title: 'تزریق امن پتاسیم', icon: '💉', items: [
            L('قوانین قرمز تزریق KCl', '🚫 <b>هرگز</b> KCl را وریدی پوش (بولوس) نکن — می‌تواند ایست قلبی بدهد.<br>• ورید محیطی: حداکثر <b>۱۰ mEq در ساعت</b><br>• ورید مرکزی با پایش قلبی: معمولاً تا <b>۲۰ mEq در ساعت</b><br>• در سالین رقیق کن، نه دکستروز (دکستروز ← انسولین ← پتاسیم پایین‌تر)<br>• در نارسایی کلیه دوز کمتر و پایش بیشتر'),
            M('حداکثر معمول سرعت KCl از ورید محیطی؟', ['۱۰ mEq در ساعت', '۴۰ mEq در ساعت', '۱ mEq در ساعت', 'بولوس سریع'], '۱۰ mEq/h؛ غلظت و سرعت بالاتر هم فلبیت می‌دهد و هم خطر آریتمی.'),
            T('KCl غلیظ را می‌توان مستقیماً وریدی پوش کرد.', false, 'هرگز! این یکی از خطاهای دارویی کشنده شناخته‌شده است.'),
            N('k.time'),
            B('بهتر است KCl وریدی در ___ رقیق شود.', ['سالین نرمال', 'دکستروز ۵٪', 'آب مقطر'], 'دکستروز ترشح انسولین را زیاد می‌کند و پتاسیم را پایین‌تر می‌برد.'),
            M('در بیمار با نارسایی کلیه، دوز جایگزینی پتاسیم چطور است؟', ['کمتر و با پایش دقیق‌تر', 'دو برابر', 'بدون تغییر', 'ممنوع است'], 'دفع پتاسیم کم است و خطر هیپرکالمی ناشی از درمان بالاست.'),
            N('k.time'),
            N('k.need')
          ]
        },
        {
          id: 'k4', title: 'هیپرکالمی اورژانسی', icon: '⚡', items: [
            L('نوار قلب هیپرکالمی', 'به ترتیب شدت:<br>۱. موج T بلند و نوک‌تیز<br>۲. طولانی‌شدن PR و صاف‌شدن P<br>۳. پهن‌شدن QRS<br>۴. موج سینوسی ← فیبریلاسیون بطنی یا آسیستول<br><br>هر تغییر نوار قلب یعنی <b>اورژانس</b>، حتی اگر عدد خیلی بالا نباشد.'),
            O('تغییرات نوار قلب را از خفیف به شدید مرتب کن', ['موج T نوک‌تیز', 'طولانی‌شدن PR و صاف‌شدن P', 'پهن‌شدن QRS', 'موج سینوسی']),
            L('سه قدم: پایدارسازی، جابجایی، دفع', '<b>۱. پایدارسازی غشای قلب</b>: کلسیم گلوکونات ۱۰٪، ۱۰ میلی‌لیتر (۱ گرم) طی ۲ تا ۳ دقیقه؛ اگر تغییرات نوار قلب ماند، بعد از ۵ دقیقه تکرار. <i>پتاسیم را پایین نمی‌آورد!</i><br><b>۲. جابجایی به داخل سلول</b>: انسولین رگولار ۱۰ واحد وریدی + ۲۵ گرم دکستروز (۵۰ میلی‌لیتر دکستروز ۵۰٪)؛ سالبوتامول استنشاقی ۱۰ تا ۲۰ میلی‌گرم؛ بی‌کربنات فقط در اسیدوز متابولیک<br><b>۳. دفع</b>: دیورتیک لوپ، رزین‌های اتصالی (سدیم زیرکونیوم سیکلوسیلیکات، پاتیرومر)، دیالیز'),
            M('اولین دارو در هیپرکالمی با QRS پهن؟', ['کلسیم گلوکونات', 'انسولین', 'فوروزماید', 'رزین خوراکی'], 'اول قلب را محافظت کن؛ کلسیم ظرف چند دقیقه اثر می‌کند.'),
            T('کلسیم گلوکونات پتاسیم سرم را پایین می‌آورد.', false, 'نه؛ فقط غشای قلب را پایدار می‌کند. برای پایین آوردن پتاسیم انسولین، سالبوتامول و روش‌های دفع لازم است.'),
            M('دوز رایج انسولین در هیپرکالمی؟', ['۱۰ واحد رگولار وریدی + ۲۵ گرم دکستروز', '۱۰۰ واحد رگولار وریدی', '۱۰ واحد NPH زیرجلدی', '۲ واحد رگولار وریدی بدون دکستروز'], 'انسولین رگولار وریدی ظرف ۱۵ تا ۳۰ دقیقه پتاسیم را حدود ۰٫۶ تا ۱ واحد پایین می‌آورد.'),
            P('هر درمان را به نقشش وصل کن', [['کلسیم گلوکونات', 'پایدارسازی غشای قلب'], ['انسولین + دکستروز', 'انتقال K به داخل سلول'], ['رزین‌های اتصالی', 'دفع K از روده'], ['دیالیز', 'دفع قطعی در نارسایی کلیه']]),
            B('بعد از انسولین باید قند خون پایش شود، چون خطر ___ وجود دارد.', ['هیپوگلیسمی', 'هیپرگلیسمی', 'هیپرناترمی'], 'هیپوگلیسمی تا چند ساعت بعد ممکن است رخ دهد، به‌خصوص در نارسایی کلیه.')
          ]
        },
        {
          id: 'k5', title: 'بیمارستان پتاسیم', icon: '🏥', items: [
            M('ترتیب درست درمان؟', ['کلسیم گلوکونات ← انسولین و دکستروز ← دیالیز', 'دیالیز ← کلسیم', 'فقط رزین خوراکی', 'فوروزماید و صبر'], 'نوار قلب غیرطبیعی: اول پایدارسازی، بعد جابجایی، و در بیمار دیالیزی دفع قطعی با دیالیز.', [['بیمار', 'دیالیزی، یک جلسه دیالیز را جا انداخته'], ['پتاسیم', '۷٫۲ mEq/L'], ['نوار قلب', 'موج T نوک‌تیز']]),
            M('بهترین اقدام؟', ['تکرار آزمایش با نمونه بدون همولیز', 'کلسیم گلوکونات فوری', 'دیالیز فوری', 'انسولین و دکستروز'], 'احتمال هیپرکالمی کاذب زیاد است.', [['پتاسیم', '۶٫۰ mEq/L'], ['گزارش آزمایشگاه', 'نمونه همولیز شده'], ['نوار قلب', 'طبیعی'], ['بیمار', 'بی‌علامت']]),
            M('در کتواسیدوز دیابتی با پتاسیم ۳٫۱ چه باید کرد؟', ['اول پتاسیم را جایگزین کن و انسولین را تا رسیدن پتاسیم به ۳٫۳ به تعویق بینداز', 'فوراً انسولین با دوز کامل', 'بی‌کربنات وریدی', 'محدودیت مایع'], 'انسولین پتاسیم را به داخل سلول می‌برد و هیپوکالمی کشنده می‌دهد.'),
            N('k.need'),
            N('k.time'),
            T('بیمار با پتاسیم ۲٫۵ و آریتمی باید پتاسیم وریدی از ورید مرکزی با پایش قلبی بگیرد.', true, 'درست. هیپوکالمی شدید و علامت‌دار: وریدی، ترجیحاً مرکزی، با مانیتور قلبی.'),
            M('بیماری که دیگوکسین مصرف می‌کند، پتاسیم ۳٫۰ دارد. چرا اصلاح فوری مهم است؟', ['هیپوکالمی خطر مسمومیت با دیگوکسین و آریتمی را زیاد می‌کند', 'دیگوکسین پتاسیم را بالا می‌برد', 'اهمیتی ندارد', 'فقط به خاطر ضعف عضلانی'], 'پتاسیم پایین اتصال دیگوکسین به پمپ سدیم–پتاسیم را زیاد می‌کند.')
          ]
        }
      ]
    },

    /* ================================ کلسیم ================================ */
    {
      id: 'ca', sym: 'Ca', name: 'کلسیم', sub: 'استخوان، عضله و آلبومین', color: '#FF9600', dark: '#CC7800', light: '#FFF0DB',
      gens: ['ca.corr', 'ca.elem', 'ca.inf'],
      lessons: [
        {
          id: 'ca1', title: 'کلسیم و آلبومین', icon: '🦴', items: [
            L('سه شکل کلسیم', 'کلسیم تام طبیعی: <b>۸٫۵ تا ۱۰٫۵ mg/dL</b><br>• حدود ۴۵٪ <b>یونیزه</b> (فعال) — طبیعی ۴٫۵ تا ۵٫۳ mg/dL یا ۱٫۱۲ تا ۱٫۳۲ mmol/L<br>• حدود ۴۰٪ متصل به آلبومین<br>• بقیه متصل به آنیون‌ها (سیترات، فسفات)'),
            M('محدوده طبیعی کلسیم تام سرم؟', ['۸٫۵ تا ۱۰٫۵ mg/dL', '۴٫۵ تا ۵٫۳ mg/dL', '۲٫۵ تا ۴٫۵ mg/dL', '۱٫۷ تا ۲٫۲ mg/dL'], '۴٫۵ تا ۵٫۳ مربوط به کلسیم یونیزه و ۲٫۵ تا ۴٫۵ مربوط به فسفر است.'),
            L('آلبومین کم؟ کلسیم را اصلاح کن', 'به ازای هر ۱ g/dL کاهش آلبومین از ۴، کلسیم تام حدود ۰٫۸ کم نشان داده می‌شود:' + fx('Ca اصلاح‌شده = Ca + 0.8 × (4 − Albumin)') + 'در بیمار بدحال ICU این فرمول دقیق نیست؛ <b>کلسیم یونیزه</b> را بسنج.'),
            N('ca.corr'),
            T('در آلکالوز، کلسیم یونیزه کاهش می‌یابد.', true, 'درست. در آلکالوز آلبومین کلسیم بیشتری می‌گیرد؛ به همین دلیل هایپرونتیلاسیون گزگز می‌دهد.'),
            M('بهترین شاخص کلسیم در بیمار بدحال ICU؟', ['کلسیم یونیزه', 'کلسیم تام', 'کلسیم اصلاح‌شده با آلبومین', 'فسفر سرم'], 'فرمول آلبومین در بیماران بدحال خطای زیادی دارد.'),
            P('هر مورد را به اثرش وصل کن', [['PTH', 'افزایش کلسیم سرم'], ['کلسی‌تونین', 'کاهش کلسیم سرم'], ['ویتامین D فعال', 'افزایش جذب روده‌ای کلسیم'], ['آلبومین پایین', 'کاهش کلسیم تام، نه یونیزه']]),
            N('ca.corr')
          ]
        },
        {
          id: 'ca2', title: 'هیپوکلسمی', icon: '🥶', items: [
            L('علائم هیپوکلسمی', 'تحریک‌پذیری عصبی–عضلانی:<br>• گزگز دور دهان و انگشتان، کرامپ، تتانی<br>• <b>شوستک</b>: ضربه به عصب صورت ← انقباض عضلات صورت<br>• <b>تروسو</b>: باد کردن کاف فشار ← اسپاسم مچ دست<br>• تشنج، لارنگواسپاسم<br>• نوار قلب: <b>طولانی‌شدن QT</b>'),
            M('بعد از تیروئیدکتومی، بیمار گزگز دور دهان دارد و با بستن کاف فشار مچ دستش اسپاسم می‌کند. این چیست؟', ['علامت تروسو در هیپوکلسمی', 'هیپرکالمی', 'هیپرکلسمی', 'هیپوناترمی'], 'آسیب پاراتیروئیدها بعد از تیروئیدکتومی از علل شایع هیپوکلسمی است.'),
            B('ضربه به عصب صورت و انقباض عضلات صورت، علامت ___ است.', ['شوستک', 'تروسو', 'بابینسکی'], 'شوستک: صورت. تروسو: دست.'),
            M('تغییر نوار قلب در هیپوکلسمی؟', ['طولانی‌شدن QT', 'کوتاه‌شدن QT', 'موج U', 'موج T نوک‌تیز'], 'هیپوکلسمی QT را طولانی و هیپرکلسمی کوتاه می‌کند.'),
            L('علت‌ها', '• کم‌کاری پاراتیروئید (پس از جراحی گردن)<br>• کمبود ویتامین D<br>• <b>هیپومنیزیمی</b> (ترشح و اثر PTH مختل می‌شود)<br>• نارسایی مزمن کلیه<br>• پانکراتیت حاد<br>• تزریق خون حجیم (سیترات کلسیم را می‌گیرد)'),
            T('هیپوکلسمی مقاوم به درمان ممکن است به علت کمبود منیزیم باشد.', true, 'درست. بدون منیزیم کافی، PTH نه درست ترشح می‌شود نه اثر می‌کند.'),
            M('تزریق خون حجیم به کدام اختلال منجر می‌شود؟', ['هیپوکلسمی به علت سیترات', 'هیپرکلسمی', 'هیپرناترمی', 'هیپرمنیزیمی'], 'سیترات ضدانعقاد کیسه‌های خون، کلسیم یونیزه را متصل می‌کند.'),
            P('علامت را به توضیحش وصل کن', [['شوستک', 'انقباض عضلات صورت با ضربه'], ['تروسو', 'اسپاسم مچ با کاف فشار'], ['QT طولانی', 'یافته نوار قلب'], ['لارنگواسپاسم', 'تهدید راه هوایی']])
          ]
        },
        {
          id: 'ca3', title: 'اصلاح هیپوکلسمی', icon: '💉', items: [
            L('هیپوکلسمی علامت‌دار', '• <b>کلسیم گلوکونات ۱۰٪، ۱ تا ۲ گرم</b> (۱۰ تا ۲۰ میلی‌لیتر) وریدی طی ۱۰ تا ۲۰ دقیقه<br>• سپس انفوزیون <b>۰٫۵ تا ۱٫۵ میلی‌گرم کلسیم عنصری به ازای هر کیلوگرم در ساعت</b><br>• منیزیم را هم بسنج و اصلاح کن<br>• در هیپوکلسمی بی‌علامت یا خفیف، کلسیم خوراکی و ویتامین D'),
            L('گلوکونات یا کلراید؟', tbl([['', 'کلسیم عنصری در ۱ گرم'], ['کلسیم گلوکونات ۱۰٪', '≈ ۹۳ mg (۴٫۶ mEq)'], ['کلسیم کلراید ۱۰٪', '≈ ۲۷۳ mg (۱۳٫۶ mEq)']]) + 'کلراید حدود <b>۳ برابر</b> قوی‌تر ولی بسیار تحریک‌کننده است ← ترجیحاً ورید مرکزی.<br>کلسیم را با بی‌کربنات یا فسفات در یک رگ نده (رسوب).'),
            N('ca.elem'),
            M('کلسیم کلراید ۱۰٪ حدوداً چند برابر کلسیم گلوکونات ۱۰٪ کلسیم عنصری دارد؟', ['۳ برابر', 'برابر', '۱۰ برابر', 'نصف'], '۲۷۳ در برابر ۹۳ میلی‌گرم.'),
            M('چرا کلسیم کلراید را ترجیحاً از ورید مرکزی می‌دهیم؟', ['تحریک شدید و خطر نکروز بافت در صورت نشت', 'اثرش کمتر است', 'گران‌تر است', 'باید در یخچال بماند'], 'نشت کلسیم کلراید می‌تواند نکروز پوست و بافت بدهد.'),
            N('ca.inf'),
            T('کلسیم را می‌توان در همان رگ با بی‌کربنات سدیم تزریق کرد.', false, 'نه؛ کربنات کلسیم رسوب می‌کند و رگ را می‌بندد.'),
            T('در بیمار مصرف‌کننده دیگوکسین، تزریق سریع کلسیم باید با احتیاط و پایش قلبی باشد.', true, 'درست. کلسیم سمیت قلبی دیگوکسین را تشدید می‌کند.')
          ]
        },
        {
          id: 'ca4', title: 'هیپرکلسمی', icon: '🌋', items: [
            L('سنگ، استخوان، ناله، افسردگی', '• <b>سنگ</b>: سنگ کلیه، پلی‌اوری<br>• <b>استخوان</b>: درد استخوان<br>• <b>ناله</b>: یبوست، تهوع، پانکراتیت<br>• <b>افسردگی</b>: خستگی، گیجی، کما<br>نوار قلب: <b>کوتاه‌شدن QT</b>.<br><br>بیش از ۹۰٪ علت‌ها: <b>پرکاری پاراتیروئید</b> (شایع‌ترین در سرپایی) و <b>بدخیمی</b> (شایع‌ترین در بستری). کلسیم بالای ۱۴ mg/dL شدید است.'),
            M('شایع‌ترین علت هیپرکلسمی در بیمار سرپایی؟', ['پرکاری اولیه پاراتیروئید', 'بدخیمی', 'مسمومیت با ویتامین D', 'سارکوئیدوز'], 'در بیماران بستری بدخیمی شایع‌تر است.'),
            L('درمان هیپرکلسمی شدید', '<b>۱. آبرسانی</b>: سالین ۰٫۹٪ وریدی (مثلاً ۲۰۰ تا ۳۰۰ میلی‌لیتر در ساعت، با هدف ادرار ۱۰۰ تا ۱۵۰ میلی‌لیتر در ساعت)<br><b>۲. کلسی‌تونین</b>: ۴ واحد به ازای هر کیلوگرم زیرجلدی یا عضلانی هر ۱۲ ساعت — شروع اثر ظرف ساعت‌ها، ولی بعد از ۴۸ ساعت اثرش کم می‌شود<br><b>۳. بیس‌فسفونات</b>: زولدرونیک اسید ۴ میلی‌گرم وریدی طی حداقل ۱۵ دقیقه — اثر پس از ۲ تا ۴ روز<br>• دنوزوماب در نارسایی کلیه، گلوکوکورتیکوئید در علل وابسته به ویتامین D، دیالیز در موارد مقاوم<br>• دیورتیک لوپ فقط بعد از جبران حجم'),
            O('اقدامات هیپرکلسمی شدید را به ترتیب اولویت مرتب کن', ['آبرسانی با سالین ۰٫۹٪', 'کلسی‌تونین برای اثر سریع', 'زولدرونیک اسید برای اثر پایدار', 'پیدا کردن و درمان علت زمینه‌ای']),
            T('فوروزماید خط اول درمان هیپرکلسمی در بیمار دهیدراته است.', false, 'نه. بیمار هیپرکلسمیک معمولاً دهیدراته است؛ اول سالین. دیورتیک فقط در صورت اضافه‌حجم.'),
            M('کدام دارو سریع‌ترین شروع اثر را دارد ولی بعد از ۴۸ ساعت اثرش کم می‌شود؟', ['کلسی‌تونین', 'زولدرونیک اسید', 'دنوزوماب', 'پردنیزولون'], 'پدیده «تاکی‌فیلاکسی» کلسی‌تونین.'),
            B('در هیپرکلسمی ناشی از لنفوم یا سارکوئیدوز، ___ مؤثر است.', ['گلوکوکورتیکوئید', 'کلسیم', 'ویتامین D'], 'این علل با تولید بیش از حد ویتامین D فعال ایجاد می‌شوند.'),
            M('تغییر نوار قلب در هیپرکلسمی؟', ['کوتاه‌شدن QT', 'طولانی‌شدن QT', 'موج T نوک‌تیز', 'موج U'], 'کلسیم بالا ← QT کوتاه.')
          ]
        },
        {
          id: 'ca5', title: 'بیمارستان کلسیم', icon: '🏥', items: [
            M('کدام درست است؟', ['کلسیم اصلاح‌شده طبیعی است؛ درمان فوری لازم نیست', 'کلسیم گلوکونات فوری', 'کلسیم کلراید از ورید مرکزی', 'ویتامین D با دوز بالا'], 'کلسیم اصلاح‌شده = ۷٫۶ + ۰٫۸ × (۴ − ۲) = ۹٫۲ ← طبیعی.', [['کلسیم تام', '۷٫۶ mg/dL'], ['آلبومین', '۲٫۰ g/dL'], ['علائم', 'ندارد']]),
            M('بهترین برنامه اولیه؟', ['سالین ۰٫۹٪ + کلسی‌تونین + زولدرونیک اسید', 'فوروزماید به‌تنهایی', 'محدودیت مایع', 'کلسیم گلوکونات'], 'هیپرکلسمی شدید بدخیمی: آبرسانی، کلسی‌تونین برای اثر سریع و بیس‌فسفونات برای اثر پایدار.', [['بیمار', 'سرطان ریه'], ['کلسیم', '۱۴٫۵ mg/dL'], ['وضعیت', 'گیج و دهیدراته']]),
            N('ca.corr'),
            N('ca.elem'),
            N('ca.inf'),
            M('قدم بعدی؟', ['سنجش و اصلاح منیزیم', 'دوز کلسیم را دو برابر کن', 'کلسی‌تونین', 'فوروزماید'], 'هیپوکلسمی مقاوم همراه کمبود منیزیم تا منیزیم اصلاح نشود درمان نمی‌شود.', [['بیمار', 'مصرف طولانی امپرازول و اسهال مزمن'], ['کلسیم', 'با وجود کلسیم وریدی پایین مانده'], ['منیزیم', 'اندازه‌گیری نشده']]),
            T('بعد از تزریق خون حجیم، کلسیم یونیزه را باید پایش کرد.', true, 'درست. سیترات خون‌های ذخیره‌شده کلسیم یونیزه را پایین می‌آورد.')
          ]
        }
      ]
    },

    /* ================================ منیزیم ================================ */
    {
      id: 'mg', sym: 'Mg', name: 'منیزیم', sub: 'کاتیون فراموش‌شده', color: '#1FC8A0', dark: '#16A383', light: '#DBF8F0',
      gens: ['mg.conv', 'mg.meq', 'mg.tier'],
      lessons: [
        {
          id: 'mg1', title: 'منیزیم را بشناس', icon: '✨', items: [
            L('منیزیم پنهان', 'محدوده طبیعی تقریبی: <b>۱٫۷ تا ۲٫۲ mg/dL</b> (۰٫۷ تا ۰٫۹۵ mmol/L؛ بسته به آزمایشگاه).<br>بیشتر منیزیم در <b>استخوان</b> و داخل سلول است و کمتر از ۱٪ در سرم. پس سطح سرمی طبیعی کمبود بدن را رد نمی‌کند.<br>کوفاکتور بیش از ۳۰۰ آنزیم، از جمله پمپ سدیم–پتاسیم.'),
            L('تبدیل واحدها', fx('1 mmol/L = 2.43 mg/dL = 2 mEq/L') + fx('1 g MgSO₄ ≈ 8.1 mEq ≈ 4 mmol ≈ 99 mg Mg')),
            N('mg.conv'),
            T('سطح طبیعی منیزیم سرم کمبود منیزیم کل بدن را رد می‌کند.', false, 'نه. کمتر از ۱٪ منیزیم در سرم است؛ کمبود بافتی با سرم طبیعی ممکن است.'),
            B('بیشتر منیزیم بدن در ___ ذخیره شده است.', ['استخوان', 'پلاسما', 'کبد'], 'حدود ۶۰٪ در استخوان.'),
            M('کدام دارو با هیپومنیزیمی ارتباط شناخته‌شده دارد؟', ['امپرازول (مهارکننده پمپ پروتون)', 'آملودیپین', 'پاراستامول', 'لووتیروکسین'], 'مصرف طولانی PPI جذب روده‌ای منیزیم را کم می‌کند.'),
            P('هر علت را به سازوکارش وصل کن', [['الکلیسم', 'دریافت کم و دفع زیاد'], ['اسهال مزمن', 'از دست رفتن گوارشی'], ['دیورتیک لوپ', 'افزایش دفع کلیوی'], ['نارسایی کلیه', 'تجمع و هیپرمنیزیمی']]),
            N('mg.meq')
          ]
        },
        {
          id: 'mg2', title: 'مثلث Mg–K–Ca', icon: '🔗', items: [
            L('منیزیم رهبر گروه است', '• کمبود منیزیم ← دفع کلیوی پتاسیم ← <b>هیپوکالمی مقاوم</b><br>• کمبود منیزیم ← ترشح و اثر PTH کم ← <b>هیپوکلسمی مقاوم</b><br><br>قانون: هر هیپوکالمی یا هیپوکلسمی مقاوم ← <b>منیزیم را بسنج و اول آن را اصلاح کن</b>.'),
            M('بیمار با وجود ۱۶۰ mEq کلرید پتاسیم هنوز پتاسیم ۳٫۰ دارد. محتمل‌ترین مشکل؟', ['کمبود منیزیم', 'کمبود سدیم', 'کمبود کلسیم', 'کمبود فسفر'], 'بدون منیزیم، کانال‌های پتاسیم کلیه پتاسیم را هدر می‌دهند.'),
            T('در هیپومنیزیمی شدید، ترشح PTH مختل می‌شود.', true, 'درست؛ به همین خاطر هیپوکلسمی می‌دهد.'),
            L('تورسادو پوینت', 'تاکی‌کاردی بطنی چندشکلی با QT طولانی.<br>درمان: <b>سولفات منیزیم ۱ تا ۲ گرم وریدی طی ۵ تا ۲۰ دقیقه</b> (در ایست قلبی بدون نبض سریع‌تر)، حتی اگر سطح منیزیم طبیعی باشد.'),
            B('داروی انتخابی در تورسادو پوینت ___ است.', ['سولفات منیزیم', 'آمیودارون', 'آدنوزین'], 'منیزیم حتی با سطح طبیعی مؤثر است.'),
            M('کدام آریتمی بیشترین ارتباط را با هیپومنیزیمی دارد؟', ['تورسادو پوینت', 'برادی‌کاردی سینوسی', 'بلوک شاخه راست', 'ریتم جانکشنال'], 'منیزیم پایین QT را طولانی می‌کند و زمینه تورساد را فراهم می‌کند.'),
            P('جفت‌ها را پیدا کن', [['هیپومنیزیمی', 'هیپوکالمی مقاوم'], ['PTH ناکافی', 'هیپوکلسمی'], ['QT طولانی', 'تورسادو پوینت'], ['سولفات منیزیم', 'درمان تورساد']])
          ]
        },
        {
          id: 'mg3', title: 'اصلاح هیپومنیزیمی', icon: '💉', items: [
            L('نمونه پروتکل سولفات منیزیم وریدی', 'برای بزرگسال با کارکرد کلیه طبیعی:' + tbl([['منیزیم (mg/dL)', 'دوز'], ['۱٫۵ تا ۱٫۶', '۱ تا ۲ گرم (یا خوراکی اگر بی‌علامت)'], ['۱٫۰ تا ۱٫۴', '۲ تا ۴ گرم'], ['کمتر از ۱٫۰ یا علامت‌دار', '۴ تا ۸ گرم طی ۱۲ تا ۲۴ ساعت']]) + '• در حالت غیراورژانسی آهسته بده (مثلاً حدود ۱ گرم در ساعت)؛ تزریق سریع بخش زیادی را از ادرار دفع می‌کند<br>• در نارسایی کلیه (eGFR زیر ۳۰) حدود ۵۰٪ کمتر و پایش دقیق<br><small>دوز دقیق را با پروتکل بیمارستان خودت تطبیق بده.</small>'),
            N('mg.tier'),
            N('mg.meq'),
            M('در بیمار با eGFR زیر ۳۰، دوز منیزیم وریدی چطور است؟', ['حدود ۵۰٪ کمتر با پایش دقیق', 'دو برابر', 'بدون تغییر', 'منع مطلق دارد'], 'خطر هیپرمنیزیمی در نارسایی کلیه بالاست.'),
            T('شایع‌ترین عارضه منیزیم خوراکی اسهال است.', true, 'درست؛ به همین دلیل در کمبود شدید راه وریدی ارجح است.'),
            T('در حالت غیراورژانسی، تزریق آهسته‌تر منیزیم باعث ماندگاری بیشتر آن در بدن می‌شود.', true, 'درست. افزایش ناگهانی سطح سرمی، بازجذب کلیوی را کم و دفع ادراری را زیاد می‌کند.'),
            N('mg.tier'),
            N('mg.conv')
          ]
        },
        {
          id: 'mg4', title: 'هیپرمنیزیمی و پره‌اکلامپسی', icon: '🤰', items: [
            L('وقتی منیزیم زیاد است', 'علت‌ها: نارسایی کلیه همراه مصرف آنتی‌اسید، ملین یا انمای حاوی منیزیم؛ درمان پره‌اکلامپسی.<br>علائم به ترتیب افزایش سطح:<br>۱. کاهش <b>رفلکس‌های وتری عمقی</b> (اولین نشانه)<br>۲. افت فشار و برادی‌کاردی<br>۳. دپرسیون تنفسی<br>۴. ایست قلبی'),
            O('علائم مسمومیت با منیزیم را از خفیف به شدید مرتب کن', ['کاهش رفلکس‌های وتری عمقی', 'افت فشار و برادی‌کاردی', 'دپرسیون تنفسی', 'ایست قلبی']),
            L('سولفات منیزیم در پره‌اکلامپسی', '• دوز بارگیری: <b>۴ تا ۶ گرم</b> وریدی طی ۱۵ تا ۲۰ دقیقه<br>• نگه‌دارنده: <b>۱ تا ۲ گرم در ساعت</b><br>• پایش: رفلکس پاتلا، تعداد تنفس (بالای ۱۲)، برون‌ده ادرار (بالای ۳۰ میلی‌لیتر در ساعت)<br>• پادزهر: <b>کلسیم گلوکونات ۱ گرم</b> وریدی آهسته'),
            M('پادزهر مسمومیت با منیزیم؟', ['کلسیم گلوکونات', 'نالوکسان', 'فلومازنیل', 'پروتامین'], 'کلسیم اثر منیزیم روی غشا و اتصال عصب–عضله را خنثی می‌کند.'),
            M('اولین نشانه بالینی مسمومیت با منیزیم که باید پایش شود؟', ['از بین رفتن رفلکس پاتلا', 'تاکی‌کاردی', 'تب', 'افزایش فشار خون'], 'رفلکس‌ها زودتر از تنفس و قلب از بین می‌روند.'),
            B('دوز بارگیری سولفات منیزیم در پره‌اکلامپسی ___ گرم است.', ['۴ تا ۶', '۱۰ تا ۲۰', '۰٫۵'], '۴ تا ۶ گرم طی ۱۵ تا ۲۰ دقیقه.'),
            T('ملین‌های حاوی منیزیم در نارسایی کلیه بی‌خطرند.', false, 'نه؛ کلیه نمی‌تواند منیزیم را دفع کند و هیپرمنیزیمی خطرناک می‌دهد.')
          ]
        },
        {
          id: 'mg5', title: 'بیمارستان منیزیم', icon: '🏥', items: [
            M('بهترین اقدام؟', ['قطع سولفات منیزیم و کلسیم گلوکونات وریدی', 'افزایش دوز منیزیم', 'فوروزماید', 'ادامه درمان و پایش'], 'رفلکس از بین رفته و تنفس کند: نشانه مسمومیت.', [['بیمار', 'باردار با پره‌اکلامپسی'], ['درمان', 'سولفات منیزیم ۲ گرم در ساعت'], ['یافته', 'رفلکس پاتلا ندارد، تنفس ۱۰ در دقیقه']]),
            M('چه اقدامی؟', ['سولفات منیزیم ۲ گرم وریدی طی ۵ تا ۲۰ دقیقه', 'آدنوزین', 'دیگوکسین', 'کلسیم کلراید'], 'تورسادو پوینت با نبض ← سولفات منیزیم.', [['نوار قلب', 'تاکی‌کاردی بطنی چندشکلی با QT طولانی'], ['بیمار', 'نبض دارد']]),
            N('mg.tier'),
            N('mg.meq'),
            N('mg.conv'),
            M('بیمار الکلی با هیپوکالمی، هیپوکلسمی و منیزیم ۰٫۸. ترتیب درست؟', ['اصلاح منیزیم همراه یا پیش از پتاسیم و کلسیم', 'فقط پتاسیم', 'فقط کلسیم', 'اول کلسیم، منیزیم لازم نیست'], 'تا منیزیم اصلاح نشود پتاسیم و کلسیم پایدار نمی‌شوند.')
          ]
        }
      ]
    },

    /* ================================ فسفر ================================ */
    {
      id: 'p', sym: 'P', name: 'فسفر', sub: 'انرژی سلول و سندرم ریفیدینگ', color: '#FF4B8B', dark: '#D93A72', light: '#FFE2EC',
      gens: ['p.conv', 'p.dose', 'p.kphos', 'p.refeed', 'p.caxp'],
      lessons: [
        {
          id: 'p1', title: 'فسفر، باتری سلول', icon: '🔋', items: [
            L('چرا فسفر مهم است؟', 'محدوده طبیعی بزرگسال: <b>۲٫۵ تا ۴٫۵ mg/dL</b> (۰٫۸ تا ۱٫۴۵ mmol/L). کودکان بالاتر.<br>• ساخت <b>ATP</b>: انرژی همه سلول‌ها<br>• <b>2,3-DPG</b>: آزادسازی اکسیژن از هموگلوبین<br>• غشای سلول و استخوان (حدود ۸۵٪ در استخوان)'),
            M('محدوده طبیعی فسفر سرم بزرگسال؟', ['۲٫۵ تا ۴٫۵ mg/dL', '۸٫۵ تا ۱۰٫۵ mg/dL', '۱٫۷ تا ۲٫۲ mg/dL', '۳٫۵ تا ۵٫۰ mg/dL'], '۲٫۵ تا ۴٫۵.'),
            L('تبدیل واحد', fx('P (mmol/L) = P (mg/dL) ÷ 3.1')),
            N('p.conv'),
            T('کودکان محدوده طبیعی فسفر بالاتری از بزرگسالان دارند.', true, 'درست؛ به خاطر رشد استخوان.'),
            P('هر مورد را به نقشش وصل کن', [['ATP', 'منبع انرژی سلول'], ['2,3-DPG', 'آزادسازی اکسیژن از هموگلوبین'], ['PTH', 'افزایش دفع کلیوی فسفات'], ['کلسیتریول', 'افزایش جذب روده‌ای فسفات']]),
            M('کمبود شدید فسفر به کدام منجر نمی‌شود؟', ['هیپرکالمی', 'ضعف عضلات تنفسی', 'همولیز', 'رابدومیولیز'], 'کمبود ATP ← ضعف عضلات (از جمله دیافراگم)، همولیز و رابدومیولیز.'),
            N('p.conv')
          ]
        },
        {
          id: 'p2', title: 'سندرم ریفیدینگ', icon: '🍽️', items: [
            L('ریفیدینگ چیست؟', 'پس از گرسنگی طولانی، شروع ناگهانی کربوهیدرات ← ترشح <b>انسولین</b> ← ورود فسفر، پتاسیم و منیزیم به سلول ← افت شدید سطح سرمی.<br>نتیجه: نارسایی قلب، نارسایی تنفسی، آریتمی، تشنج و حتی مرگ. کمبود <b>تیامین</b> ← انسفالوپاتی ورنیکه.<br>مشخص‌ترین نشانه آزمایشگاهی: <b>هیپوفسفاتمی</b>.'),
            B('در ریفیدینگ، ترشح ___ باعث ورود فسفر به سلول می‌شود.', ['انسولین', 'گلوکاگون', 'کورتیزول'], 'انسولین فسفر را برای ساخت ATP و گلیکوژن به سلول می‌برد.'),
            L('چه کسی پرخطر است؟', '<b>یک مورد از این‌ها</b>:<br>• BMI کمتر از ۱۶<br>• کاهش وزن ناخواسته بیش از ۱۵٪ در ۳ تا ۶ ماه<br>• غذای ناچیز بیش از ۱۰ روز<br>• پتاسیم، فسفر یا منیزیم پایین پیش از تغذیه<br><b>یا دو مورد از این‌ها</b>:<br>• BMI کمتر از ۱۸٫۵ • کاهش وزن بیش از ۱۰٪ • غذای ناچیز بیش از ۵ روز • سابقه الکل یا داروهایی مثل انسولین، شیمی‌درمانی، آنتی‌اسید و دیورتیک'),
            L('پیشگیری', '• شروع با <b>۱۰ kcal/kg/day</b> (در موارد بسیار شدید مثل BMI زیر ۱۴ یا بیش از ۱۵ روز بی‌غذایی: <b>۵ kcal/kg</b>)<br>• افزایش آهسته طی ۴ تا ۷ روز<br>• <b>تیامین</b> ۲۰۰ تا ۳۰۰ میلی‌گرم در روز، پیش از شروع تغذیه<br>• سنجش و اصلاح فسفر، پتاسیم و منیزیم؛ پایش روزانه در هفته اول'),
            M('کدام اقدام درست است؟', ['پرخطر است؛ شروع با ۱۰ kcal/kg و تیامین پیش از تغذیه', 'شروع با ۳۵ kcal/kg برای جبران سریع', 'تغذیه را تا اصلاح کامل وزن عقب بینداز', 'فقط سرم دکستروز ۱۰٪'], 'یک معیار اصلی (BMI زیر ۱۶ یا بیش از ۱۰ روز بی‌غذایی) کافی است.', [['BMI', '۱۵'], ['دریافت غذا', '۱۲ روز ناچیز']]),
            N('p.refeed'),
            T('تیامین باید پیش از شروع تغذیه داده شود.', true, 'درست؛ گلوکوز بدون تیامین می‌تواند ورنیکه را آشکار کند.'),
            M('مشخص‌ترین الکترولیت در سندرم ریفیدینگ؟', ['فسفر', 'سدیم', 'کلر', 'کلسیم'], 'هیپوفسفاتمی نشانه اصلی است.')
          ]
        },
        {
          id: 'p3', title: 'اصلاح هیپوفسفاتمی', icon: '💉', items: [
            L('خوراکی یا وریدی؟', 'هیپوفسفاتمی خفیف تا متوسط در بیماری که می‌خورد ← <b>خوراکی</b> (عارضه شایع: اسهال).<br>شدید، علامت‌دار، یا بیمار بدحال ← <b>وریدی</b>.'),
            L('نمونه پروتکل وزن‌محور وریدی', 'برای بیماران بدحال با کلیه طبیعی:' + tbl([['فسفر (mg/dL)', 'دوز'], ['۲٫۳ تا ۳٫۰', '۰٫۱۶ mmol/kg'], ['۱٫۶ تا ۲٫۲', '۰٫۳۲ mmol/kg'], ['۱٫۵ و کمتر', '۰٫۶۴ mmol/kg']]) + 'طی <b>۴ تا ۶ ساعت</b>. در نارسایی کلیه دوز کمتر.<br><small>سقف دوز و سرعت را طبق پروتکل بیمارستان خودت رعایت کن.</small>'),
            N('p.dose'),
            L('پتاسیم فسفات یا سدیم فسفات؟', tbl([['هر میلی‌لیتر', 'فسفر', 'کاتیون همراه'], ['پتاسیم فسفات', '۳ mmol', '۴٫۴ mEq پتاسیم'], ['سدیم فسفات', '۳ mmol', '۴ mEq سدیم']]) + '• پتاسیم زیر ۴ و کلیه طبیعی ← پتاسیم فسفات<br>• پتاسیم ۴ و بیشتر ← سدیم فسفات<br>• تزریق سریع ← هیپوکلسمی و رسوب کلسیم–فسفات'),
            N('p.kphos'),
            M('بیمار با پتاسیم ۵٫۱ و فسفر ۱٫۴. کدام فرآورده؟', ['سدیم فسفات', 'پتاسیم فسفات', 'کلسیم فسفات', 'فرقی ندارد'], 'پتاسیم بالای ۴ است؛ پتاسیم اضافه نده.'),
            T('تزریق سریع فسفات می‌تواند باعث هیپوکلسمی شود.', true, 'درست؛ فسفات کلسیم را رسوب می‌دهد.'),
            M('حاصل‌ضرب کلسیم × فسفر بالای ۵۵ تا ۶۰ نشان‌دهنده خطر چیست؟', ['رسوب کلسیم–فسفات در بافت‌ها', 'هیپرکالمی', 'هیپوناترمی', 'اسیدوز تنفسی'], 'در این حالت فسفات وریدی نده.')
          ]
        },
        {
          id: 'p4', title: 'هیپرفسفاتمی', icon: '🧱', items: [
            L('فسفر زیاد', 'علت‌ها: <b>نارسایی مزمن کلیه</b> (شایع‌ترین)، سندرم لیز تومور، رابدومیولیز، انمای سدیم فسفات، کم‌کاری پاراتیروئید.<br>پیامد: هیپوکلسمی، کلسیفیکاسیون عروق، خارش، پرکاری ثانویه پاراتیروئید.'),
            L('درمان', '• رژیم: <b>۸۰۰ تا ۱۰۰۰ میلی‌گرم فسفر در روز</b><br>• فسفر افزودنی غذاهای فرآوری‌شده و نوشابه کولا حدود ۹۰٪ جذب می‌شود؛ فسفر گیاهی (به خاطر فیتات) حدود ۴۰ تا ۵۰٪<br>• <b>بایندرها همراه غذا</b>: کلسیم استات یا کربنات، سولامر، لانتانیوم<br>• دیالیز در بیمار ESRD یا موارد حاد شدید'),
            M('کدام منبع فسفر بیشترین جذب را دارد؟', ['افزودنی‌های فسفاتی غذاهای فرآوری‌شده و نوشابه کولا', 'حبوبات', 'غلات کامل', 'آجیل'], 'فسفر معدنی افزودنی تقریباً کامل جذب می‌شود.'),
            B('بایندرهای فسفات باید ___ مصرف شوند.', ['همراه غذا', 'ناشتا قبل از خواب', 'هفته‌ای یک بار'], 'بایندر فسفر همان وعده را در روده می‌گیرد.'),
            M('محدودیت فسفر رژیم در نارسایی مزمن کلیه؟', ['۸۰۰ تا ۱۰۰۰ میلی‌گرم در روز', '۱۰۰ میلی‌گرم در روز', '۳۰۰۰ میلی‌گرم در روز', 'محدودیتی لازم نیست'], '۸۰۰ تا ۱۰۰۰ میلی‌گرم با تأکید بر کیفیت منبع.'),
            T('سولامر بایندر فسفات فاقد کلسیم است.', true, 'درست؛ مناسب بیمارانی که کلسیم بالا یا کلسیفیکاسیون عروقی دارند.'),
            P('هر بایندر را به نوعش وصل کن', [['کلسیم استات', 'بایندر کلسیم‌دار'], ['سولامر', 'بدون کلسیم و فلز'], ['لانتانیوم', 'بایندر فلزی بدون کلسیم'], ['دیالیز', 'دفع فسفر در ESRD']]),
            M('در سندرم لیز تومور کدام الگو دیده می‌شود؟', ['فسفر، پتاسیم و اسید اوریک بالا با کلسیم پایین', 'همه الکترولیت‌ها پایین', 'فقط سدیم بالا', 'کلسیم بالا و فسفر پایین'], 'سلول‌های تومور محتویات داخل سلولی را آزاد می‌کنند.'),
            N('p.caxp')
          ]
        },
        {
          id: 'p5', title: 'بیمارستان فسفر', icon: '🏥', items: [
            M('محتمل‌ترین علت؟', ['سندرم ریفیدینگ', 'نارسایی کلیه', 'کم‌کاری پاراتیروئید', 'خطای آزمایشگاه'], 'شروع تغذیه پس از بی‌غذایی طولانی + افت فسفر = ریفیدینگ.', [['بیمار', 'بی‌اشتهایی عصبی، BMI = ۱۴'], ['روز دوم تغذیه', 'فسفر از ۳٫۲ به ۱٫۱ رسیده'], ['علائم', 'تنگی نفس و ضعف']]),
            N('p.dose'),
            N('p.kphos'),
            N('p.refeed'),
            N('p.caxp'),
            M('بهترین اقدام؟', ['کاهش موقت انرژی و جایگزینی فسفر، پتاسیم و منیزیم', 'افزایش کالری برای جبران', 'توقف کامل و دائمی تغذیه', 'فقط سرم دکستروز'], 'در ریفیدینگ: کالری را کم کن، الکترولیت‌ها را جایگزین کن و بعد دوباره آهسته بالا ببر.'),
            T('در بیمار با کلسیم ۱۰ و فسفر ۷، تزریق فسفات وریدی ایمن است.', false, 'حاصل‌ضرب ۷۰ است؛ خطر رسوب. تازه فسفر ۷ خودش بالاست!')
          ]
        }
      ]
    }
  ];

  /* آزمون‌های جمع‌بندی */
  EA.exam = {
    checkpoint: { count: 10, gens: 3, pass: 0.7 },
    final: { perWorld: 5, gensPerWorld: 2, pass: 0.8, minutes: 25 }
  };

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/

/*<<PV-DATA>>*/
/* یونا — درس‌های تکمیلی و سطح‌بندی هر دنیا
 * هر دنیا ۹ درس دارد در سه سطح (هر سطح ۳ درس). این فایل پس از content.js بارگذاری می‌شود،
 * درس‌های تازه را اضافه می‌کند و ترتیب نهایی را می‌چیند. شناسه درس‌های قبلی تغییر نمی‌کند
 * تا پیشرفت کاربران قدیمی حفظ شود. */
(function (root) {
  const EA = root.EA;
  const L = (title, body) => ({ t: 'learn', title, body });
  const M = (q, opts, why, kase) => ({ t: 'mcq', q, opts, why, case: kase });
  const T = (q, a, why) => ({ t: 'tf', q, a, why });
  const B = (q, opts, why) => ({ t: 'fill', q, opts, why });
  const O = (q, steps, why) => ({ t: 'order', q, steps, why });
  const P = (q, pairs, why) => ({ t: 'match', q, pairs, why });
  const N = gen => ({ t: 'num', gen });
  const fx = s => `<div class="fx" dir="ltr">${s}</div>`;
  const tbl = rows => '<table class="mini">' + rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</table>';

  const EXTRA = {
    /* ================================ سدیم ================================ */
    na: [
      {
        id: 'na6', title: 'علت‌ها و داروها', icon: '💊', items: [
          L('داروهایی که سدیم را پایین می‌آورند', '• <b>تیازیدها</b> (شایع‌ترین علت دارویی، به‌خصوص در زنان سالمند)<br>• ضدافسردگی‌های SSRI (سرترالین، سیتالوپرام)<br>• کاربامازپین و اکس‌کاربازپین<br>• سیکلوفسفامید، وینکریستین، مخدرها، اکستازی (MDMA)<br>• دسموپرسین'),
          M('کدام دیورتیک بیشتر هیپوناترمی می‌دهد؟', ['تیازید (مثل هیدروکلروتیازید)', 'فوروزماید', 'اسپیرونولاکتون', 'استازولامید'], 'تیازیدها توان رقیق‌کردن ادرار را مختل می‌کنند؛ دیورتیک لوپ شیب غلظت مدولا را از بین می‌برد و کمتر هیپوناترمی می‌دهد.'),
          M('کدام دارو با SIADH ارتباط شناخته‌شده دارد؟', ['سرترالین', 'آملودیپین', 'متفورمین', 'آتورواستاتین'], 'SSRIها به‌خصوص در سالمندان SIADH می‌دهند.'),
          T('نوشیدن آب بسیار زیاد در مسابقه دوی استقامت می‌تواند هیپوناترمی خطرناک بدهد.', true, 'هیپوناترمی مرتبط با ورزش: آب بیش از توان دفع کلیه، همراه ترشح ADH ناشی از فشار ورزش.'),
          L('بیرپوتومانیا و «چای و نان»', 'دریافت کم املاح (پروتئین و نمک) همراه مایع زیاد (آبجو، یا رژیم چای و نان). کلیه برای دفع آب به املاح نیاز دارد؛ بدون املاح، آب دفع نمی‌شود.<br>ادرار بسیار رقیق است و با شروع تغذیه، سدیم ممکن است <b>خیلی سریع</b> بالا برود.'),
          B('در بیرپوتومانیا اسمولالیته ادرار معمولاً ___ است.', ['کمتر از ۱۰۰', 'بیشتر از ۵۰۰', 'حدود ۳۰۰'], 'ADH سرکوب شده و ادرار حداکثر رقیق است.'),
          P('هر علت را به سازوکارش وصل کن', [['تیازید', 'اختلال رقیق‌سازی ادرار'], ['کاربامازپین', 'افزایش اثر ADH'], ['نارسایی آدرنال', 'کمبود کورتیزول و ADH بالا'], ['کم‌کاری شدید تیروئید', 'کاهش دفع آب آزاد']]),
          M('علت اصلی هیپوناترمی پس از جراحی؟', ['ترشح ADH به علت درد، تهوع و داروها همراه مایع هیپوتونیک', 'کمبود نمک رژیم', 'دیابت بی‌مزه', 'هیپرآلدوسترونیسم'], 'پس از جراحی از مایع هیپوتونیک پرهیز کن و سدیم را پایش کن.')
        ]
      },
      {
        id: 'na7', title: 'SIADH و درمان‌های ویژه', icon: '🧪', items: [
          L('SIADH چیست؟', 'ADH بدون محرک مناسب ترشح می‌شود ← آب نگه داشته می‌شود ← هیپوناترمی یوولمیک.<br><b>معیارها</b>: اسمولالیته سرم زیر ۲۷۵، اسمولالیته ادرار بالای ۱۰۰، سدیم ادرار بالای ۳۰، یوولمی، و رد کم‌کاری تیروئید، نارسایی آدرنال و مصرف دیورتیک.<br><b>علت‌ها</b>: سرطان سلول کوچک ریه، پنومونی، بیماری‌های مغزی، داروها، درد و تهوع.'),
          M('شایع‌ترین تومور ایجادکننده SIADH؟', ['سرطان سلول کوچک ریه', 'آدنوکارسینوم پروستات', 'لنفوم هوچکین', 'ملانوم'], 'تومور ADH نابجا می‌سازد.'),
          B('برای تشخیص SIADH باید کم‌کاری تیروئید و نارسایی ___ رد شوند.', ['آدرنال', 'پانکراس', 'کبد'], 'هر دو تصویر مشابه SIADH می‌دهند.'),
          L('نسبت فورست: آیا محدودیت مایع جواب می‌دهد؟', fx('(Na<sub>ادرار</sub> + K<sub>ادرار</sub>) / Na<sub>سرم</sub>') + tbl([['نسبت', 'محدودیت پیشنهادی'], ['کمتر از ۰٫۵', 'حدود ۱ لیتر در روز'], ['۰٫۵ تا ۱', 'حدود ۵۰۰ میلی‌لیتر در روز'], ['بیشتر از ۱', 'محدودیت به‌تنهایی جواب نمی‌دهد']])),
          N('na.furst'),
          L('وقتی محدودیت مایع کافی نیست', '• افزایش املاح: قرص نمک یا <b>اوره خوراکی</b><br>• دیورتیک لوپ همراه نمک<br>• <b>تولواپتان</b> (واپتان): فقط با پایش دقیق سدیم، خطر اصلاح سریع؛ در بیماری کبدی توصیه نمی‌شود'),
          M('کدام درمان SIADH بیشترین خطر اصلاح سریع را دارد؟', ['تولواپتان', 'محدودیت مایع', 'قرص نمک', 'اوره خوراکی با دوز کم'], 'واپتان‌ها دفع آب آزاد را ناگهان زیاد می‌کنند.'),
          T('در SIADH، تزریق سالین ۰٫۹٪ ممکن است سدیم را پایین‌تر ببرد.', true, 'وقتی اسمولالیته ادرار از اسمولالیته سالین (حدود ۳۰۰) بالاتر است، املاح دفع و بخشی از آب نگه داشته می‌شود.'),
          O('درمان SIADH مزمن را از ساده به پیشرفته مرتب کن', ['محدودیت مایع', 'افزایش املاح (نمک یا اوره خوراکی)', 'واپتان با پایش دقیق'])
        ]
      },
      {
        id: 'na8', title: 'دیابت بی‌مزه و انتخاب مایع', icon: '🚰', items: [
          L('دیابت بی‌مزه', '• <b>مرکزی</b>: کمبود ADH — ضربه مغزی، جراحی هیپوفیز<br>• <b>نفروژنیک</b>: کلیه به ADH پاسخ نمی‌دهد — لیتیم، هیپرکلسمی، هیپوکالمی<br>علامت: ادرار بیش از ۳ لیتر در روز، ادرار رقیق (زیر ۳۰۰)، تشنگی. بدون دسترسی به آب ← هیپرناترمی.<br>اگر پس از دسموپرسین اسمولالیته ادرار بالا برود ← مرکزی.'),
          M('بیمار مصرف‌کننده لیتیم با پلی‌اوری و ادرار رقیق. محتمل‌ترین تشخیص؟', ['دیابت بی‌مزه نفروژنیک', 'دیابت بی‌مزه مرکزی', 'SIADH', 'پلی‌دیپسی روانی'], 'لیتیم کانال‌های آب (آکواپورین ۲) را مختل می‌کند.'),
          M('درمان دیابت بی‌مزه مرکزی؟', ['دسموپرسین', 'تیازید به‌تنهایی', 'محدودیت نمک', 'فوروزماید'], 'جایگزینی هورمون کمبود.'),
          T('در دیابت بی‌مزه نفروژنیک، تیازید و رژیم کم‌نمک می‌توانند حجم ادرار را کم کنند.', true, 'کاهش حجم خفیف، بازجذب پروگزیمال را زیاد و آب رسیده به توبول انتهایی را کم می‌کند.'),
          L('کدام مایع برای چه؟', tbl([['مایع', 'سدیم', 'کاربرد'], ['سالین ۰٫۹٪', '۱۵۴', 'جبران حجم'], ['رینگر لاکتات', '۱۳۰', 'جبران حجم'], ['سالین ۰٫۴۵٪', '۷۷', 'نیمی آب آزاد'], ['دکستروز ۵٪', '۰', 'آب آزاد خالص'], ['سالین ۳٪', '۵۱۳', 'هیپوناترمی علامت‌دار']])),
          P('هر مایع را به کاربردش وصل کن', [['سالین ۳٪', 'هیپوناترمی علامت‌دار'], ['دکستروز ۵٪', 'جبران آب آزاد'], ['سالین ۰٫۹٪', 'جبران حجم در شوک'], ['سالین ۰٫۴۵٪', 'نیمی آب آزاد']]),
          B('یک لیتر سالین ۰٫۴۵٪ حدود ___ میلی‌لیتر آب آزاد دارد.', ['۵۰۰', '۱۰۰۰', '۱۵۰'], 'نصف غلظت سالین نرمال ← نصف حجم، آب آزاد است.'),
          N('na.d5w')
        ]
      },
      {
        id: 'na9', title: 'آی‌سی‌یو سدیم', icon: '🚨', items: [
          M('تشخیص و درمان؟', ['دیابت بی‌مزه مرکزی؛ دسموپرسین و جبران آب', 'SIADH؛ محدودیت مایع', 'سندرم از دست دادن نمک مغزی', 'ادامه سالین ۳٪'], 'پس از جراحی هیپوفیز، ادرار زیاد و رقیق با سدیم بالا.', [['بیمار', 'روز اول پس از جراحی هیپوفیز'], ['ادرار', '۶ لیتر در ۲۴ ساعت'], ['سدیم', '۱۵۲'], ['اسمولالیته ادرار', '۱۲۰']]),
          M('محتمل‌ترین تشخیص؟', ['سندرم از دست دادن نمک مغزی؛ جبران حجم و نمک', 'SIADH؛ محدودیت مایع', 'دیابت بی‌مزه', 'هیپوناترمی کاذب'], 'کاهش حجم همراه سدیم ادرار بالا، SIADH نیست؛ محدودیت مایع این‌جا مضر است.', [['بیمار', 'خونریزی ساب‌آراکنوئید'], ['سدیم', '۱۲۶'], ['حجم', 'کاهش‌یافته، فشار ورید مرکزی پایین'], ['سدیم ادرار', '۸۰']]),
          T('در خونریزی ساب‌آراکنوئید، محدودیت مایع برای هیپوناترمی می‌تواند خطر وازواسپاسم را زیاد کند.', true, 'در این بیماران حجم را حفظ کن؛ از نمک یا سالین هیپرتونیک و در صورت نیاز فلودروکورتیزون کمک بگیر.'),
          N('na.adrogue'),
          N('na.furst'),
          M('بهترین اقدام؟', ['قطع مایع هیپرتونیک، دکستروز ۵٪ و دسموپرسین برای مهار افزایش بیشتر', 'ادامه مایع فعلی', 'بولوس سالین ۳٪', 'فوروزماید'], 'دیورز آبی ناگهانی پس از اصلاح هیپوولمی خطر ODS دارد.', [['سدیم پایه', '۱۱۸ (مزمن)'], ['۸ ساعت بعد', '۱۲۸'], ['ادرار', '۴۰۰ میلی‌لیتر در ساعت، رقیق']]),
          N('na.fwd')
        ]
      }
    ],

    /* ================================ پتاسیم ================================ */
    k: [
      {
        id: 'k6', title: 'علت‌یابی هیپوکالمی', icon: '🔎', items: [
          L('ادرار حرف می‌زند', 'پتاسیم ادرار <b>کمتر از ۲۵ تا ۳۰ mEq در روز</b> (یا نسبت پتاسیم به کراتینین ادرار کمتر از ۱۳ mEq/g) ← علت غیرکلیوی (مثل اسهال) یا جابجایی به داخل سلول.<br>بیشتر از آن ← دفع کلیوی.'),
          B('پتاسیم ادرار کمتر از ___ mEq در روز به نفع علت غیرکلیوی است.', ['۲۵', '۱۰۰', '۲۰۰'], 'کلیه سالم در کمبود پتاسیم، پتاسیم را نگه می‌دارد.'),
          L('اسید–باز راهنمایی می‌کند', '• هیپوکالمی + <b>اسیدوز متابولیک</b> ← اسهال، اسیدوز توبولار کلیوی<br>• هیپوکالمی + <b>آلکالوز متابولیک</b> ← استفراغ، دیورتیک، هیپرآلدوسترونیسم<br>• همراه فشار خون بالا ← به هیپرآلدوسترونیسم فکر کن'),
          M('هیپوکالمی همراه اسیدوز متابولیک. محتمل‌ترین علت؟', ['اسهال', 'استفراغ', 'دیورتیک تیازید', 'هیپرآلدوسترونیسم'], 'اسهال هم پتاسیم و هم بی‌کربنات را از بدن خارج می‌کند.'),
          T('در استفراغ طولانی، بیشتر پتاسیم از راه ادرار از دست می‌رود.', true, 'آلکالوز و آلدوسترون بالا دفع کلیوی پتاسیم را زیاد می‌کنند؛ پتاسیم ترشحات معده کم است.'),
          M('هیپوکالمی + فشار خون بالا + آلکالوز متابولیک. به چه فکر کنیم؟', ['هیپرآلدوسترونیسم اولیه', 'اسهال مزمن', 'سندرم بارتر', 'مصرف مسهل'], 'بارتر و ژیتلمن فشار خون طبیعی یا پایین دارند.'),
          P('جفت‌ها را پیدا کن', [['اسهال', 'اسیدوز متابولیک'], ['استفراغ', 'آلکالوز متابولیک'], ['هیپرآلدوسترونیسم', 'فشار خون بالا'], ['فلج دوره‌ای تیروتوکسیک', 'جابجایی به داخل سلول']]),
          N('k.need')
        ]
      },
      {
        id: 'k7', title: 'هیپرکالمی مزمن و داروها', icon: '💊', items: [
          L('داروهای افزاینده پتاسیم', 'مهارکننده ACE، ARB، اسپیرونولاکتون و اپلرنون، <b>تری‌متوپریم</b>، هپارین، NSAIDها، تاکرولیموس و سیکلوسپورین، بتابلاکرهای غیرانتخابی، سوکسینیل‌کولین و مسمومیت با دیگوکسین.'),
          M('کدام آنتی‌بیوتیک مثل آمیلوراید عمل می‌کند و هیپرکالمی می‌دهد؟', ['تری‌متوپریم', 'آموکسی‌سیلین', 'آزیترومایسین', 'سیپروفلوکساسین'], 'تری‌متوپریم کانال سدیم توبول جمع‌کننده را می‌بندد.'),
          P('هر دارو را به سازوکارش وصل کن', [['اسپیرونولاکتون', 'مهار گیرنده آلدوسترون'], ['هپارین', 'کاهش ساخت آلدوسترون'], ['NSAID', 'کاهش رنین'], ['تری‌متوپریم', 'بستن کانال سدیم توبول']]),
          T('در بیمار مزمن کلیوی با پتاسیم ۵٫۵ حتماً باید مهارکننده ACE را قطع کرد.', false, 'اغلب با رژیم، دیورتیک و بایندرهای تازه می‌شود درمان محافظ کلیه را ادامه داد.'),
          L('رژیم و بایندرها', 'منابع پرپتاسیم: موز، پرتقال، سیب‌زمینی، گوجه، خشکبار، حبوبات، و <b>جایگزین‌های نمک</b> (کلرید پتاسیم!).<br>بایندرها: سدیم زیرکونیوم سیکلوسیلیکات (شروع اثر حدود ۱ ساعت)، پاتیرومر (حدود ۷ ساعت)، سدیم پلی‌استایرن سولفونات (کایگزالات؛ خطر نکروز روده).'),
          M('کدام «نمک کم‌سدیم» برای بیمار کلیوی خطرناک است؟', ['جایگزین نمک حاوی کلرید پتاسیم', 'نمک یددار معمولی', 'ادویه‌های گیاهی', 'آب‌لیمو'], 'یک قاشق چای‌خوری از این نمک‌ها ده‌ها میلی‌اکی‌والان پتاسیم دارد.'),
          M('کدام بایندر پتاسیم سریع‌ترین شروع اثر را دارد؟', ['سدیم زیرکونیوم سیکلوسیلیکات', 'پاتیرومر', 'کایگزالات', 'سولامر'], 'سولامر بایندر فسفات است، نه پتاسیم.'),
          B('عارضه جدی کایگزالات، ___ روده است.', ['نکروز', 'انسداد', 'خونریزی'], 'به‌خصوص همراه سوربیتول و پس از جراحی.')
        ]
      },
      {
        id: 'k8', title: 'پتاسیم در کتواسیدوز', icon: '🍬', items: [
          L('پارادوکس کتواسیدوز', 'پتاسیم سرم معمولاً طبیعی یا حتی بالاست، ولی ذخیره کل بدن <b>۳ تا ۵ mEq/kg</b> کم است (دیورز اسمزی).<br>انسولین و اصلاح اسیدوز پتاسیم را به سلول برمی‌گردانند ← افت سریع و خطرناک.'),
          L('قانون ADA', tbl([['پتاسیم سرم', 'اقدام'], ['کمتر از ۳٫۳', 'انسولین را نگه دار؛ ۲۰ تا ۳۰ mEq پتاسیم در ساعت تا ۳٫۳'], ['۳٫۳ تا ۵٫۲', '۲۰ تا ۳۰ mEq پتاسیم در هر لیتر مایع؛ هدف ۴ تا ۵'], ['بیشتر از ۵٫۲', 'پتاسیم نده؛ هر ۲ ساعت بسنج']])),
          N('k.dka'),
          T('در کتواسیدوز با پتاسیم ۵٫۸ باید فوراً کلرید پتاسیم شروع کرد.', false, 'بالای ۵٫۲ پتاسیم نده، ولی هر ۲ ساعت دوباره بسنج؛ با انسولین پایین می‌آید.'),
          M('چرا در کتواسیدوز ذخیره پتاسیم بدن کم است؟', ['دیورز اسمزی و دفع ادراری', 'فقط دریافت کم غذا', 'همولیز', 'اسهال'], 'گلوکز زیاد در ادرار، آب و پتاسیم را با خود می‌برد.'),
          N('k.dka'),
          M('کدام درمان در کتواسیدوز پتاسیم را بیشتر پایین می‌آورد؟', ['انسولین', 'سالین ۰٫۹٪', 'پتاسیم فسفات', 'هپارین'], 'انسولین پمپ سدیم–پتاسیم را فعال می‌کند.'),
          N('k.dka')
        ]
      },
      {
        id: 'k9', title: 'آی‌سی‌یو پتاسیم', icon: '🚨', items: [
          M('بهترین اقدام؟', ['فلج دوره‌ای تیروتوکسیک؛ پتاسیم با دوز کم و پروپرانولول', 'جایگزینی سریع ۲۰۰ mEq پتاسیم', 'دیالیز', 'انسولین'], 'کمبود واقعی نیست، جابجایی است؛ پتاسیم زیاد ← هیپرکالمی برگشتی.', [['بیمار', 'مرد ۲۸ ساله، ضعف ناگهانی هر چهار اندام'], ['پتاسیم', '۲٫۱'], ['یافته‌ها', 'تاکی‌کاردی، ترمور، TSH سرکوب‌شده']]),
          M('درمان اختصاصی؟', ['آنتی‌بادی ضد دیگوکسین', 'بولوس‌های مکرر کلسیم کلراید', 'فقط رزین خوراکی', 'سالبوتامول به‌تنهایی'], 'در مسمومیت با دیگوکسین، هیپرکالمی نشانه شدت است و پادزهر درمان قطعی است.', [['دارو', 'دیگوکسین، مسمومیت حاد'], ['پتاسیم', '۶٫۸'], ['نوار قلب', 'برادی‌کاردی و بلوک']]),
          M('بیمار رابدومیولیز با پتاسیم رو به افزایش و آنوری. قطعی‌ترین درمان؟', ['دیالیز', 'رزین خوراکی', 'بی‌کربنات به‌تنهایی', 'فوروزماید'], 'بدون ادرار، فقط دیالیز پتاسیم را خارج می‌کند.'),
          O('درمان هیپرکالمی با تغییرات نوار قلب را مرتب کن', ['کلسیم گلوکونات', 'انسولین و دکستروز', 'رزین یا دیورتیک یا دیالیز', 'پایش قند و پتاسیم']),
          N('k.need'),
          N('k.dka'),
          T('پتاسیم کاذب بالا در لوکوسیتوز یا ترومبوسیتوز شدید دیده می‌شود.', true, 'سلول‌ها در لوله آزمایش پتاسیم آزاد می‌کنند؛ پتاسیم پلاسما (نه سرم) را بسنج.'),
          N('k.time')
        ]
      }
    ],

    /* ================================ کلسیم ================================ */
    ca: [
      {
        id: 'ca6', title: 'PTH و ویتامین D', icon: '☀️', items: [
          L('سه بازیگر اصلی', '• <b>PTH</b>: کلسیم را از استخوان آزاد، بازجذب کلیوی کلسیم را زیاد و فسفات را دفع می‌کند؛ ساخت ویتامین D فعال را بالا می‌برد<br>• <b>کلسیتریول</b> (ویتامین D فعال): جذب روده‌ای کلسیم و فسفر<br>• <b>۲۵-هیدروکسی ویتامین D</b>: شاخص ذخیره بدن'),
          M('بهترین شاخص ذخیره ویتامین D بدن؟', ['۲۵-هیدروکسی ویتامین D', '۱ و ۲۵-دی‌هیدروکسی ویتامین D', 'PTH', 'کلسیم ادرار'], 'کلسیتریول نیمه‌عمر کوتاهی دارد و در کمبود ممکن است طبیعی بماند.'),
          T('PTH بازجذب کلیوی فسفات را زیاد می‌کند.', false, 'برعکس؛ PTH فسفات را دفع می‌کند.'),
          M('هیپوکلسمی + فسفر بالا + PTH پایین. تشخیص؟', ['کم‌کاری پاراتیروئید', 'کمبود ویتامین D', 'نارسایی کلیه', 'پانکراتیت'], 'PTH نیست ← فسفات دفع نمی‌شود.'),
          M('هیپوکلسمی + فسفر پایین + PTH بالا. تشخیص؟', ['کمبود ویتامین D', 'کم‌کاری پاراتیروئید', 'هیپرمنیزیمی', 'مسمومیت با ویتامین D'], 'PTH بالا در پاسخ به کمبود ویتامین D فسفات را دفع می‌کند.'),
          P('الگو را به تشخیص وصل کن', [['PTH بالا + کلسیم بالا', 'پرکاری اولیه پاراتیروئید'], ['PTH بالا + کلسیم پایین', 'پرکاری ثانویه'], ['PTH پایین + کلسیم بالا', 'بدخیمی یا ویتامین D'], ['PTH پایین + کلسیم پایین', 'کم‌کاری پاراتیروئید']]),
          B('نور خورشید در پوست ___ می‌سازد.', ['ویتامین D3', 'ویتامین K', 'کلسیتریول'], 'کلسیتریول در کلیه ساخته می‌شود.')
        ]
      },
      {
        id: 'ca7', title: 'بحران هیپرکلسمی', icon: '🔥', items: [
          L('هیپرکلسمی بدخیمی', '• <b>PTHrP</b>: شایع‌ترین (مثل سرطان سلول سنگفرشی)<br>• متاستاز استخوانی استئولیتیک (پستان، میلوم)<br>• ساخت کلسیتریول (لنفوم)<br>در همه این‌ها PTH معمولاً سرکوب شده است.'),
          M('شایع‌ترین سازوکار هیپرکلسمی بدخیمی؟', ['PTHrP', 'متاستاز استخوانی', 'ساخت کلسیتریول', 'PTH نابجا'], 'پروتئین شبه PTH.'),
          T('در هیپرکلسمی بدخیمی، سطح PTH معمولاً پایین است.', true, 'کلسیم بالا PTH غدد سالم را سرکوب می‌کند.'),
          N('ca.calcitonin'),
          M('بیمار با کلسیم بالا و نارسایی شدید کلیه. کدام ضدجذب مناسب‌تر است؟', ['دنوزوماب', 'زولدرونیک اسید با دوز کامل', 'کلسی‌تونین برای همیشه', 'ویتامین D'], 'دنوزوماب از کلیه دفع نمی‌شود؛ مراقب هیپوکلسمی پس از آن باش.'),
          L('بحران هیپرکلسمی', 'کلسیم بالای ۱۴ همراه گیجی، نارسایی کلیه یا آریتمی.<br>اگر نارسایی قلب یا کلیه اجازه آبرسانی نمی‌دهد ← <b>دیالیز با مایع کم‌کلسیم</b>.'),
          M('هیپرکلسمی شدید در بیمار با نارسایی قلب که آبرسانی را تحمل نمی‌کند؟', ['دیالیز', 'سالین با سرعت ۵۰۰ میلی‌لیتر در ساعت', 'کلسیم گلوکونات', 'تیازید'], 'دیالیز کلسیم را سریع پایین می‌آورد بدون بار حجمی.'),
          B('تیازیدها دفع ادراری کلسیم را ___ می‌دهند.', ['کاهش', 'افزایش', 'ناگهان افزایش'], 'به همین دلیل در هیپرکلسمی ممنوع‌اند و در سنگ هیپرکلسیوریک مفید.')
        ]
      },
      {
        id: 'ca8', title: 'کلسیم، کلیه و سنگ', icon: '🪨', items: [
          L('نارسایی کلیه و استخوان', 'کاهش ساخت ویتامین D فعال + احتباس فسفات ← هیپوکلسمی و <b>پرکاری ثانویه پاراتیروئید</b>.<br>درمان: کنترل فسفر، ویتامین D فعال یا آنالوگ‌ها، داروی کلسیمیمتیک (سیناکلست).'),
          M('داروی کلسیمیمتیک برای پرکاری ثانویه پاراتیروئید؟', ['سیناکلست', 'سولامر', 'کلسی‌تونین', 'آلندرونات'], 'حساسیت گیرنده کلسیم پاراتیروئید را زیاد می‌کند.'),
          L('سنگ کلیه کلسیمی', 'شایع‌ترین سنگ: <b>کلسیم اگزالات</b>.<br>برخلاف تصور، <b>کلسیم رژیم را محدود نکن</b>؛ کلسیم غذا اگزالات را در روده می‌گیرد.<br>توصیه‌ها: مایع کافی (ادرار بیش از ۲ تا ۲٫۵ لیتر)، سدیم کم، پروتئین حیوانی متعادل، سیترات.'),
          T('برای پیشگیری از سنگ کلسیم اگزالات، باید کلسیم رژیم را به‌شدت محدود کرد.', false, 'محدودیت کلسیم جذب اگزالات را بیشتر و خطر سنگ را زیاد می‌کند.'),
          M('کدام دارو دفع ادراری کلسیم را کم می‌کند و در سنگ هیپرکلسیوریک کاربرد دارد؟', ['هیدروکلروتیازید', 'فوروزماید', 'ویتامین D', 'کلسی‌تونین'], 'تیازید بازجذب کلسیم را در توبول دیستال زیاد می‌کند.'),
          M('توصیه مایعات برای پیشگیری از سنگ؟', ['برون‌ده ادرار بیش از ۲ تا ۲٫۵ لیتر در روز', 'کمتر از یک لیتر', 'فقط آب معدنی پرکلسیم', 'نوشابه کولا'], 'ادرار رقیق ← اشباع کمتر.'),
          P('جفت‌ها را پیدا کن', [['سیترات پتاسیم', 'مهار تشکیل سنگ'], ['سیناکلست', 'کاهش PTH'], ['کلسیتریول', 'ویتامین D فعال'], ['فوروزماید', 'افزایش دفع کلسیم']]),
          N('ca.corr')
        ]
      },
      {
        id: 'ca9', title: 'آی‌سی‌یو کلسیم', icon: '🚨', items: [
          M('بهترین اقدام؟', ['کلسیم وریدی (کلراید یا گلوکونات)', 'صبر تا اصلاح خودبه‌خود', 'ویتامین D خوراکی', 'بی‌کربنات'], 'هیپوکلسمی ناشی از سیترات، انقباض قلب و انعقاد را مختل می‌کند.', [['بیمار', 'ترومای شدید، ۱۰ واحد خون'], ['کلسیم یونیزه', '۰٫۸ mmol/L'], ['فشار خون', 'پایین']]),
          M('کدام درست است؟', ['کلسیم اصلاح‌شده حدود ۹٫۲ و طبیعی است؛ کلسیم یونیزه را بسنج', 'کلسیم کلراید فوری', 'ویتامین D وریدی', 'فوروزماید'], '۷٫۸ + ۰٫۸ × (۴ − ۲٫۲) = ۹٫۲۴', [['بیمار', 'پانکراتیت حاد'], ['کلسیم تام', '۷٫۸'], ['آلبومین', '۲٫۲'], ['علائم', 'ندارد']]),
          M('تشخیص؟', ['سندرم استخوان گرسنه؛ کلسیم وریدی، کلسیتریول و پایش فسفر و منیزیم', 'هیپرکلسمی برگشتی', 'خطای آزمایشگاه', 'مسمومیت با ویتامین D'], 'پس از برداشتن آدنوم، استخوان کلسیم، فسفر و منیزیم را با ولع جذب می‌کند.', [['بیمار', 'دو روز پس از پاراتیروئیدکتومی'], ['کلسیم', 'افت شدید تا ۶٫۹'], ['فسفر و منیزیم', 'پایین']]),
          N('ca.elem'),
          N('ca.inf'),
          N('ca.calcitonin'),
          T('تزریق کلسیم به بیمار با هیپرفسفاتمی شدید خطر رسوب بافتی دارد.', true, 'فقط در هیپوکلسمی علامت‌دار کلسیم بده و فسفر را هم‌زمان کنترل کن.')
        ]
      }
    ],

    /* ================================ منیزیم ================================ */
    mg: [
      {
        id: 'mg6', title: 'علت‌های هیپومنیزیمی', icon: '🍷', items: [
          L('منیزیم از کجا می‌رود؟', '• <b>گوارشی</b>: اسهال مزمن، سوءجذب، PPI طولانی، الکل<br>• <b>کلیوی</b>: دیورتیک لوپ و تیازید، آمینوگلیکوزیدها، آمفوتریسین B، <b>سیس‌پلاتین</b>، تاکرولیموس، سندرم ژیتلمن<br>• <b>توزیع مجدد</b>: ریفیدینگ، پانکراتیت، سندرم استخوان گرسنه'),
          M('کدام داروی شیمی‌درمانی هیپومنیزیمی شدید کلیوی می‌دهد؟', ['سیس‌پلاتین', 'دوکسوروبیسین', 'متوترکسات با دوز کم', 'تاموکسیفن'], 'آسیب توبولی سیس‌پلاتین ممکن است ماه‌ها بماند.'),
          T('آمفوتریسین B می‌تواند منیزیم و پتاسیم را از راه ادرار هدر دهد.', true, 'آسیب توبول دیستال.'),
          L('ادرار را بسنج: FEMg', fx('FEMg = (U<sub>Mg</sub> × S<sub>Cr</sub>) / (0.7 × S<sub>Mg</sub> × U<sub>Cr</sub>) × 100') + '• کمتر از ۲٪ ← علت گوارشی<br>• بیشتر از ۲ تا ۴٪ ← هدررفت کلیوی<br><small>ضریب ۰٫۷: فقط حدود ۷۰٪ منیزیم سرم فیلتر می‌شود.</small>'),
          N('mg.femg'),
          M('FEMg ۰٫۸٪ در بیمار با اسهال مزمن. تفسیر؟', ['علت گوارشی؛ کلیه منیزیم را نگه می‌دارد', 'هدررفت کلیوی', 'خطای آزمایش', 'نارسایی کلیه'], 'کلیه سالم در کمبود، منیزیم را نگه می‌دارد.'),
          P('هر علت را به سازوکارش وصل کن', [['امپرازول', 'کاهش جذب روده‌ای'], ['سیس‌پلاتین', 'هدررفت کلیوی'], ['الکل', 'دفع ادراری و دریافت کم'], ['پانکراتیت', 'رسوب در بافت چربی']]),
          B('سندرم ___ با هیپومنیزیمی، هیپوکالمی و کلسیم ادرار پایین مشخص می‌شود.', ['ژیتلمن', 'کوشینگ', 'کان'], 'شبیه مصرف مزمن تیازید.')
        ]
      },
      {
        id: 'mg7', title: 'منیزیم در قلب و آسم', icon: '🫀', items: [
          L('منیزیم در اورژانس', '• <b>تورسادو پوینت</b>: ۱ تا ۲ گرم وریدی<br>• <b>آسم شدید حاد</b>: بزرگسال ۲ گرم وریدی طی ۲۰ دقیقه؛ کودک حدود ۴۰ mg/kg (حداکثر ۲ گرم)<br>• پیشگیری از فیبریلاسیون دهلیزی پس از جراحی قلب<br>• اکلامپسی'),
          M('دوز سولفات منیزیم وریدی در حمله شدید آسم بزرگسال؟', ['۲ گرم طی ۲۰ دقیقه', '۱۰ گرم بولوس', '۲۰۰ میلی‌گرم', '۴ گرم در ساعت برای ۲۴ ساعت'], 'منیزیم عضله صاف برونش را شل می‌کند.'),
          N('mg.asthmaChild'),
          T('منیزیم وریدی در تورسادو پوینت حتی با سطح منیزیم طبیعی هم مؤثر است.', true, 'اثر ضدآریتمی مستقل از کمبود دارد.'),
          M('نگه داشتن منیزیم حدود ۲ mg/dL یا بیشتر در بیماران قلبی چه فایده‌ای دارد؟', ['کاهش خطر آریتمی', 'افزایش فشار خون', 'کاهش قند', 'افزایش پتاسیم ادرار'], 'به‌خصوص پس از جراحی قلب و در QT طولانی.'),
          T('تزریق خیلی سریع منیزیم می‌تواند گرگرفتگی و افت فشار بدهد.', true, 'منیزیم گشادکننده عروق است.'),
          B('در کودک با آسم شدید، دوز منیزیم حدود ___ میلی‌گرم به ازای هر کیلوگرم است.', ['۴۰', '۴۰۰', '۴'], 'حداکثر ۲ گرم.'),
          N('mg.asthmaChild')
        ]
      },
      {
        id: 'mg8', title: 'منیزیم در غذا و قرص', icon: '🥬', items: [
          L('منابع غذایی', 'سبزیجات برگ سبز (منیزیم در مرکز <b>کلروفیل</b> است)، مغزها و دانه‌ها (بادام، تخمه کدو)، حبوبات، غلات کامل و کاکائوی تلخ.<br>نیاز روزانه بزرگسال: حدود <b>۳۱۰ تا ۴۲۰ میلی‌گرم</b>.'),
          M('منیزیم در مرکز کدام مولکول است؟', ['کلروفیل', 'هموگلوبین', 'انسولین', 'ویتامین B12'], 'هموگلوبین آهن و B12 کبالت دارد.'),
          M('نیاز روزانه منیزیم بزرگسال تقریباً چقدر است؟', ['۳۱۰ تا ۴۲۰ میلی‌گرم', '۳۰ میلی‌گرم', '۳ گرم', '۱۰ گرم'], 'مردان کمی بیشتر از زنان.'),
          L('قرص‌های منیزیم', '• <b>اکسید منیزیم</b>: منیزیم عنصری زیاد ولی جذب کم و اسهال بیشتر<br>• سیترات، لاکتات، کلرید و گلیسینات: جذب بهتر<br>• دوز را تقسیم کن تا اسهال کمتر شود<br>• با فاصله از لووتیروکسین، بیس‌فسفونات‌ها، تتراسایکلین و کینولون‌ها'),
          M('کدام نمک منیزیم کمترین جذب را دارد؟', ['اکسید منیزیم', 'گلیسینات منیزیم', 'لاکتات منیزیم', 'کلرید منیزیم'], 'حلالیت کم.'),
          T('منیزیم خوراکی جذب لووتیروکسین و آنتی‌بیوتیک‌های کینولون را کم می‌کند.', true, 'چند ساعت فاصله بگذار.'),
          P('هر مورد را به ویژگی‌اش وصل کن', [['تخمه کدو', 'بسیار غنی از منیزیم'], ['اسفناج', 'منیزیم در کلروفیل'], ['اکسید منیزیم', 'جذب کم، اسهال بیشتر'], ['گلیسینات منیزیم', 'جذب بهتر، ملایم‌تر']]),
          N('mg.meq')
        ]
      },
      {
        id: 'mg9', title: 'آی‌سی‌یو منیزیم', icon: '🚨', items: [
          M('قدم کلیدی؟', ['سنجش و جایگزینی وریدی منیزیم', 'فقط افزایش KCl', 'قطع کلسیم', 'دیالیز'], 'فوروزماید و آمینوگلیکوزید هر دو منیزیم را هدر می‌دهند.', [['بیمار', 'ICU، مصرف فوروزماید و جنتامایسین'], ['پتاسیم', 'مقاوم به جایگزینی'], ['کلسیم', 'پایین']]),
          M('بهترین تنظیم؟', ['کاهش دوز نگه‌دارنده و پایش سطح منیزیم و رفلکس‌ها', 'دوز معمول', 'دو برابر کردن دوز', 'قطع کامل بدون جایگزین'], 'منیزیم از کلیه دفع می‌شود؛ الیگوری یعنی تجمع.', [['بیمار', 'پره‌اکلامپسی'], ['کراتینین', '۲٫۱'], ['ادرار', '۱۵ میلی‌لیتر در ساعت']]),
          N('mg.tier'),
          N('mg.femg'),
          N('mg.asthmaChild'),
          T('در بیمار با eGFR زیر ۳۰، ملین‌های حاوی منیزیم می‌توانند هیپرمنیزیمی خطرناک بدهند.', true, 'در نارسایی کلیه از ملین‌های بدون منیزیم استفاده کن.'),
          M('پس از جراحی قلب، هدف رایج منیزیم؟', ['حدود ۲ mg/dL یا بیشتر', 'زیر ۱ mg/dL', 'بالای ۶ mg/dL', 'اهمیتی ندارد'], 'برای کاهش آریتمی‌های دهلیزی و بطنی.')
        ]
      }
    ],

    /* ================================ فسفر ================================ */
    p: [
      {
        id: 'p6', title: 'علت‌های هیپوفسفاتمی', icon: '🔍', items: [
          L('سه راه افت فسفر', '<b>۱. جابجایی به سلول</b>: ریفیدینگ، انسولین در کتواسیدوز، آلکالوز تنفسی، استخوان گرسنه<br><b>۲. جذب کم</b>: آنتی‌اسیدهای آلومینیوم یا منیزیم، سوءجذب، کمبود ویتامین D، الکل<br><b>۳. دفع کلیوی</b>: پرکاری پاراتیروئید، سندرم فانکونی، FGF23 بالا (مثلاً پس از تزریق فریک کربوکسی‌مالتوز)'),
          M('کدام اختلال اسید–باز فسفر را پایین می‌برد؟', ['آلکالوز تنفسی', 'اسیدوز تنفسی', 'اسیدوز متابولیک مزمن', 'هیچ‌کدام'], 'آلکالوز گلیکولیز را فعال می‌کند و فسفات صرف ساخت ترکیبات فسفردار می‌شود.'),
          T('تزریق آهن وریدی فریک کربوکسی‌مالتوز می‌تواند هیپوفسفاتمی بدهد.', true, 'با افزایش FGF23 و دفع کلیوی فسفات.'),
          M('در کتواسیدوز، فسفر اولیه ممکن است طبیعی باشد. پس از شروع انسولین چه می‌شود؟', ['افت می‌کند', 'بالا می‌رود', 'ثابت می‌ماند', 'صفر می‌شود'], 'مثل پتاسیم، ذخیره بدن کم است و انسولین آن را به سلول می‌برد.'),
          L('فسفر ادرار: FEPO4', fx('FEPO4 = (U<sub>P</sub> × S<sub>Cr</sub>) / (S<sub>P</sub> × U<sub>Cr</sub>) × 100') + 'در هیپوفسفاتمی، FEPO4 <b>بالای ۵٪</b> ← هدررفت کلیوی. کمتر ← جابجایی یا جذب کم.'),
          N('p.fepo4'),
          P('هر علت را به سازوکارش وصل کن', [['ریفیدینگ', 'جابجایی به داخل سلول'], ['آنتی‌اسید آلومینیومی', 'اتصال در روده'], ['پرکاری پاراتیروئید', 'دفع کلیوی'], ['سندرم فانکونی', 'نقص بازجذب توبول پروگزیمال']])
        ]
      },
      {
        id: 'p7', title: 'فسفر در سفره کلیوی', icon: '🥛', items: [
          L('فسفر پنهان', 'روی برچسب دنبال هر کلمه‌ای با «فسفات» بگرد: سدیم فسفات، <b>اسید فسفریک</b>، پلی‌فسفات.<br>منابع افزودنی: سوسیس و کالباس، پنیر پیتزا و ورقه‌ای، نوشابه کولا، غذاهای آماده.<br>منابع طبیعی: لبنیات، گوشت، حبوبات، مغزها.'),
          M('کدام ماده روی برچسب نشانه فسفر افزودنی است؟', ['اسید فسفریک', 'اسید سیتریک', 'اسید آسکوربیک', 'اسید استیک'], 'اسید فسفریک در نوشابه‌های کولا.'),
          L('فسفر به ازای هر گرم پروتئین', 'بیمار دیالیزی پروتئین کافی لازم دارد؛ منابعی را انتخاب کن که فسفر کمتری به ازای هر گرم پروتئین دارند: <b>سفیده تخم‌مرغ</b> (بسیار کم)، مرغ و ماهی تازه.<br>پنیر فرآوری‌شده و کالباس بدترین‌اند.'),
          M('کدام منبع پروتئین کمترین فسفر را به ازای هر گرم پروتئین دارد؟', ['سفیده تخم‌مرغ', 'پنیر ورقه‌ای', 'کالباس', 'زرده تخم‌مرغ'], 'فسفر تخم‌مرغ بیشتر در زرده است.'),
          T('جوشاندن گوشت و دور ریختن آب آن، مقداری از فسفر آن را کم می‌کند.', true, 'فسفر و پتاسیم به آب پخت منتقل می‌شوند.'),
          M('فسفر ۷٫۵ است و بیمار بایندر را صبح ناشتا می‌خورد. مهم‌ترین اصلاح؟', ['مصرف بایندر همراه وعده‌ها', 'دو برابر کردن دوز صبح', 'قطع بایندر', 'مصرف قبل از خواب'], 'بایندر باید با غذا در روده باشد.'),
          B('سولامر علاوه بر فسفر، ___ را هم کمی پایین می‌آورد.', ['کلسترول LDL', 'قند خون', 'پتاسیم'], 'اسیدهای صفراوی را هم متصل می‌کند.'),
          P('هر غذا را به ویژگی‌اش وصل کن', [['نوشابه کولا', 'فسفر افزودنی بسیار قابل جذب'], ['سفیده تخم‌مرغ', 'پروتئین با فسفر کم'], ['حبوبات', 'فسفر فیتاتی با جذب کمتر'], ['پنیر پیتزا', 'فسفر بالا']])
        ]
      },
      {
        id: 'p8', title: 'لیز تومور و رابدو', icon: '💥', items: [
          L('سندرم لیز تومور', 'پس از شروع شیمی‌درمانی تومورهای حساس (لنفوم بورکیت، لوسمی حاد).<br>معیار آزمایشگاهی (کایرو–بیشاپ)، دو مورد یا بیشتر: اسید اوریک ≥ ۸، پتاسیم ≥ ۶، <b>فسفر ≥ ۴٫۵</b> (بزرگسال)، کلسیم ≤ ۷ — یا تغییر ۲۵٪ از پایه.'),
          M('معیار آزمایشگاهی فسفر در لیز تومور بزرگسال؟', ['۴٫۵ mg/dL یا بیشتر', '۲٫۵ mg/dL', '۱۰ mg/dL', '۱ mg/dL'], 'در کودکان ۶٫۵.'),
          L('پیشگیری و درمان', '• آبرسانی فراوان<br>• آلوپورینول، یا <b>رازبوریکاز</b> در پرخطرها (در کمبود G6PD ممنوع)<br>• پایش مکرر الکترولیت‌ها<br>• هیپوکلسمی <b>بی‌علامت</b> را درمان نکن (رسوب کلسیم–فسفات)'),
          M('کدام دارو در کمبود G6PD ممنوع است؟', ['رازبوریکاز', 'آلوپورینول', 'سالین', 'فوروزماید'], 'پراکسید هیدروژن تولیدی همولیز و مت‌هموگلوبینمی می‌دهد.'),
          T('در لیز تومور، هیپوکلسمی بی‌علامت را باید با کلسیم وریدی درمان کرد.', false, 'فقط هیپوکلسمی علامت‌دار؛ کلسیم اضافه با فسفر بالا رسوب می‌کند.'),
          L('رابدومیولیز', 'تخریب عضله ← آزادشدن پتاسیم، فسفر و میوگلوبین ← آسیب کلیه.<br>فاز اول: هیپوکلسمی (رسوب در عضله). فاز بهبود: ممکن است هیپرکلسمی رخ دهد.<br>درمان اصلی: <b>آبرسانی زودهنگام و فراوان</b>.'),
          M('درمان اصلی رابدومیولیز؟', ['آبرسانی زودهنگام و فراوان', 'محدودیت مایع', 'کلسیم وریدی برای همه', 'پتاسیم'], 'هدف ادرار زیاد برای دفع میوگلوبین.'),
          N('p.caxp')
        ]
      },
      {
        id: 'p9', title: 'آی‌سی‌یو فسفر', icon: '🚨', items: [
          M('بهترین اقدام؟', ['جایگزینی وریدی فسفات', 'آنتی‌بیوتیک', 'افزایش آرام‌بخش', 'کلسیم وریدی'], 'هیپوفسفاتمی شدید دیافراگم را ضعیف می‌کند.', [['بیمار', 'تهویه مکانیکی، جداسازی ناموفق'], ['فسفر', '۱٫۲ mg/dL'], ['کلیه', 'طبیعی']]),
          M('کدام درست است؟', ['جایگزینی فسفات؛ مثلاً بخشی از پتاسیم به شکل پتاسیم فسفات', 'صبر تا ترخیص', 'قطع انسولین', 'کلسیم وریدی'], 'در کتواسیدوز فقط وقتی فسفر زیر ۱٫۰ باشد یا نارسایی قلب، تنفس یا کم‌خونی باشد فسفات بده.', [['بیمار', 'کتواسیدوز در حال درمان'], ['فسفر', '۰٫۹ mg/dL'], ['علائم', 'ضعف عضلانی']]),
          T('در کتواسیدوز، جایگزینی روتین فسفات برای همه بیماران توصیه می‌شود.', false, 'روتین نیست؛ فقط در فسفر زیر ۱٫۰ یا عوارض.'),
          N('p.dose'),
          N('p.kphos'),
          N('p.fepo4'),
          N('p.refeed')
        ]
      }
    ]
  };

  /* ترتیب نهایی: سه سطح، هر سطح سه درس */
  const ORDER = {
    na: ['na1', 'na2', 'na6', 'na3', 'na7', 'na4', 'na8', 'na5', 'na9'],
    k: ['k1', 'k2', 'k6', 'k3', 'k4', 'k7', 'k8', 'k5', 'k9'],
    ca: ['ca1', 'ca2', 'ca6', 'ca3', 'ca4', 'ca7', 'ca8', 'ca5', 'ca9'],
    mg: ['mg1', 'mg2', 'mg6', 'mg3', 'mg4', 'mg7', 'mg8', 'mg5', 'mg9'],
    p: ['p1', 'p2', 'p6', 'p3', 'p4', 'p7', 'p8', 'p5', 'p9']
  };
  const NEW_GENS = { na: ['na.furst'], k: ['k.dka'], ca: ['ca.calcitonin'], mg: ['mg.femg', 'mg.asthmaChild'], p: ['p.fepo4'] };

  /* نام سطح‌ها — هر سطح یک کاراکتر هم هدیه می‌دهد (characters.js) */
  const LEVELS = {
    na: ['قطره‌های کنجکاو', 'موج‌سواران اسمز', 'اقیانوس‌بان‌ها'],
    k: ['تپش‌های نخستین', 'نگهبانان ریتم', 'فرماندهان ضربان'],
    ca: ['استخوان‌بندها', 'معماران کلسیم', 'دژبانان اسکلت'],
    mg: ['جرقه‌های سبز', 'افسونگران منیزیم', 'جادوگران مثلث'],
    p: ['باتری‌های تازه', 'مهندسان انرژی', 'فرمانروایان ATP']
  };
  EA.PER_LEVEL = 3;

  EA.worlds.forEach(w => {
    const all = w.lessons.concat(EXTRA[w.id] || []);
    w.lessons = ORDER[w.id].map(id => all.find(l => l.id === id));
    w.gens = w.gens.concat(NEW_GENS[w.id] || []);
    w.levels = LEVELS[w.id];
  });

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/

/* یونا — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۵ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'na-0', w: 'na', lv: 0, name: 'نمکی', title: 'کریستال کنجکاو', shape: 'cube', color: '#8FD8FF', acc: ['sparkle'], bio: 'از یک دانه نمک بیرون پریده و مدام می‌پرسد: «این همه آب از کجا آمد؟» هر دانه نمک خوراکی تقریباً ۴۰٪ سدیم است.' },
    { id: 'na-1', w: 'na', lv: 1, name: 'موج‌سوار', title: 'استاد آدروگه', shape: 'drop', color: '#1CB0F6', acc: ['headband'], bio: 'روی موج‌های اسمولالیته سُر می‌خورد و قانونش ساده است: هیچ‌وقت بیشتر از ۸ تا ۱۰ واحد در روز بالا نرو.' },
    { id: 'na-2', w: 'na', lv: 2, name: 'سلطان اسمز', title: 'فرمانروای آب', shape: 'drop', color: '#0F86C6', acc: ['cape', 'crown'], bio: 'فرمانروای اقیانوس درون بدن. می‌داند کجا آب اضافه است و کجا کم، و سدیم را آرام و بی‌خطر جابه‌جا می‌کند.' },
    { id: 'k-0', w: 'k', lv: 0, name: 'موزینا', title: 'میوه پرانرژی', shape: 'banana', color: '#FFD93D', acc: ['stem'], bio: 'پرپتاسیم‌ترین دوست یونا! ولی به بیماران کلیوی همیشه می‌گوید: «با من زیاده‌روی نکن.»' },
    { id: 'k-1', w: 'k', lv: 1, name: 'تپش', title: 'خواننده نوار قلب', shape: 'heart', color: '#CE82FF', acc: ['glasses'], bio: 'موج T نوک‌تیز را از یک کیلومتری تشخیص می‌دهد و موج U را از پشت عینکش.' },
    { id: 'k-2', w: 'k', lv: 2, name: 'رعدآسا', title: 'قهرمان اورژانس', shape: 'blob', color: '#9A5CD6', acc: ['cape', 'mask', 'bolt'], bio: 'شعارش را همه می‌دانند: اول کلسیم، بعد انسولین و دکستروز، بعد دفع!' },
    { id: 'ca-0', w: 'ca', lv: 0, name: 'شیرک', title: 'پاکت پرکلسیم', shape: 'carton', color: '#FFFFFF', acc: [], bio: 'هر صبح یک لیوان کلسیم تعارف می‌کند و یادآوری می‌کند که بدون ویتامین D، کلسیم جذب نمی‌شود.' },
    { id: 'ca-1', w: 'ca', lv: 1, name: 'استخوانی', title: 'معمار اسکلت', shape: 'bone', color: '#FFE3B8', acc: ['sparkle'], bio: '۹۹٪ کلسیم بدن در خانه اوست. وقتی کلسیم خون کم شود، PTH در می‌زند و او کمی قرض می‌دهد.' },
    { id: 'ca-2', w: 'ca', lv: 2, name: 'دژبان', title: 'نگهبان یون‌ها', shape: 'shield', color: '#FF9600', acc: ['helmet'], bio: 'غشای قلب را در برابر پتاسیم بالا سپر می‌کند؛ درست مثل کلسیم گلوکونات در دقیقه‌های اول.' },
    { id: 'mg-0', w: 'mg', lv: 0, name: 'برگینه', title: 'قلب کلروفیل', shape: 'leaf', color: '#58CC02', acc: [], bio: 'یک اتم منیزیم درست در مرکز کلروفیلش می‌درخشد. به همه سبزی برگ‌سبز تعارف می‌کند.' },
    { id: 'mg-1', w: 'mg', lv: 1, name: 'جرقه', title: 'کوفاکتور پرکار', shape: 'hex', color: '#1FC8A0', acc: ['antenna'], bio: 'در بیش از ۳۰۰ آنزیم کار می‌کند و پمپ سدیم–پتاسیم بدون او روشن نمی‌شود.' },
    { id: 'mg-2', w: 'mg', lv: 2, name: 'افسونگر', title: 'جادوگر مثلث', shape: 'drop', color: '#12A583', acc: ['wizard'], bio: 'با یک حرکت چوبدستی، هیپوکالمی و هیپوکلسمی مقاوم را درمان می‌کند؛ رازش؟ اول منیزیم!' },
    { id: 'p-0', w: 'p', lv: 0, name: 'باتریچه', title: 'انرژی جیبی', shape: 'battery', color: '#FF4B8B', acc: [], bio: 'همیشه شارژ است، مگر وقتی کسی بعد از گرسنگی طولانی ناگهان زیاد غذا بخورد!' },
    { id: 'p-1', w: 'p', lv: 1, name: 'اِی‌تی‌پی‌بات', title: 'ربات سوخت‌رسان', shape: 'robot', color: '#FF7AA8', acc: [], bio: 'روزی ده‌ها کیلوگرم ATP می‌سازد و بازیافت می‌کند؛ بدون فسفر، موتورش خاموش می‌شود.' },
    { id: 'p-2', w: 'p', lv: 2, name: 'فرمانروای انرژی', title: 'ستاره ATP', shape: 'star', color: '#E0437A', acc: ['halo', 'crown'], bio: 'فرمانروای همه واکنش‌های انرژی‌زا؛ اکسیژن را هم با 2,3-DPG به بافت‌ها می‌رساند.' }
  ];

  /* متن انگلیسی هر کاراکتر؛ نام، لقب و معرفی با زبان فعلی عوض می‌شوند */
  const EN = {
    'na-0': ['Salty', 'The Curious Crystal', 'Jumped out of a grain of salt and keeps asking, “Where did all this water come from?” Table salt is about 40% sodium by weight.'],
    'na-1': ['Wave Rider', 'Master of Adrogué', 'Glides on waves of osmolality with one simple rule: never raise sodium more than 8–10 a day.'],
    'na-2': ['Osmo the Great', 'Ruler of Water', 'Rules the ocean inside the body. Knows where water is too much and where it is too little, and moves sodium slowly and safely.'],
    'k-0': ['Bananita', 'The Energetic Fruit', 'Yona’s most potassium-rich friend! But she always tells kidney patients, “Don’t overdo me.”'],
    'k-1': ['Beat', 'The ECG Reader', 'Spots a peaked T wave from a mile away, and a U wave from behind those glasses.'],
    'k-2': ['Thunderbolt', 'Emergency Hero', 'Everyone knows the motto: calcium first, then insulin and dextrose, then removal!'],
    'ca-0': ['Milky', 'The Calcium Carton', 'Offers a glass of calcium every morning and reminds you that without vitamin D, calcium is not absorbed.'],
    'ca-1': ['Bony', 'Skeleton Architect', '99% of the body’s calcium lives in his house. When blood calcium drops, PTH knocks and he lends a little.'],
    'ca-2': ['Sentinel', 'Guardian of Ions', 'Shields the cardiac membrane against high potassium, just like calcium gluconate in the first minutes.'],
    'mg-0': ['Leafy', 'Heart of Chlorophyll', 'A magnesium atom glows right at the center of her chlorophyll. She offers everyone leafy greens.'],
    'mg-1': ['Spark', 'The Busy Cofactor', 'Works in more than 300 enzymes; the sodium–potassium pump will not start without him.'],
    'mg-2': ['Enchanter', 'Wizard of the Triangle', 'With one wave of the wand he cures refractory hypokalemia and hypocalcemia. The secret? Magnesium first!'],
    'p-0': ['Batterino', 'Pocket Power', 'Always charged, except when someone eats a lot suddenly after a long fast!'],
    'p-1': ['ATP-Bot', 'The Fuel Robot', 'Makes and recycles his own body weight in ATP every day; without phosphate, his engine stops.'],
    'p-2': ['Energy Monarch', 'Star of ATP', 'Ruler of every energy-making reaction; also delivers oxygen to tissues with 2,3-DPG.']
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
    cube: { fy: 88, top: 40, body: c => `<rect x="16" y="42" width="88" height="88" rx="20" fill="${c}"/><path d="M28 50 H92 a8 8 0 0 1 6 3 L86 64 H34 L22 53 a8 8 0 0 1 6 -3z" fill="#fff" opacity=".35"/><rect x="16" y="42" width="88" height="88" rx="20" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="3"/>` },
    banana: { fy: 92, top: 34, body: c => `<ellipse cx="60" cy="88" rx="36" ry="54" transform="rotate(18 60 88)" fill="${c}"/><path d="M40 52 Q30 90 50 128" stroke="#fff" stroke-width="6" fill="none" opacity=".35" stroke-linecap="round"/><ellipse cx="45" cy="140" rx="7" ry="4" fill="#6b4a12"/>` },
    heart: { fy: 72, top: 26, body: c => `<path d="M60 132 C20 104 10 80 10 62 C10 38 30 26 46 30 C54 32 58 38 60 44 C62 38 66 32 74 30 C90 26 110 38 110 62 C110 80 100 104 60 132Z" fill="${c}"/><ellipse cx="34" cy="50" rx="8" ry="11" transform="rotate(-30 34 50)" fill="#fff" opacity=".4"/>` },
    blob: { fy: 86, top: 30, body: c => `<path d="M60 30 C94 30 110 54 108 86 C106 118 88 134 60 134 C32 134 12 118 12 86 C10 54 26 30 60 30Z" fill="${c}"/><ellipse cx="38" cy="54" rx="8" ry="12" transform="rotate(30 38 54)" fill="#fff" opacity=".35"/>` },
    carton: { fy: 84, top: 26, body: c => `<path d="M24 60 L60 30 L96 60 V128 a8 8 0 0 1 -8 8 H32 a8 8 0 0 1 -8 -8Z" fill="${c}" stroke="#FFD08A" stroke-width="3"/><path d="M24 60 L60 30 L96 60 Z" fill="#FF9600"/><rect x="54" y="18" width="12" height="16" rx="2" fill="#CC7800"/><rect x="24" y="108" width="72" height="18" fill="#1CB0F6"/><path d="M36 117 q6 -6 12 0 t12 0 t12 0 t12 0" stroke="#fff" stroke-width="3" fill="none"/>` },
    bone: { fy: 86, top: 44, body: c => `<g fill="${c}" stroke="#E6C08A" stroke-width="3"><circle cx="26" cy="62" r="16"/><circle cx="26" cy="110" r="16"/><circle cx="94" cy="62" r="16"/><circle cx="94" cy="110" r="16"/></g><rect x="24" y="58" width="72" height="56" rx="22" fill="${c}"/><rect x="34" y="62" width="40" height="6" rx="3" fill="#fff" opacity=".6"/>` },
    shield: { fy: 82, top: 26, body: c => `<path d="M60 26 L106 42 V80 C106 106 86 124 60 136 C34 124 14 106 14 80 V42Z" fill="${c}"/><path d="M60 26 L106 42 V80 C106 106 86 124 60 136Z" fill="#000" opacity=".1"/><path d="M60 38 L94 50 V80 C94 100 80 114 60 124" stroke="#fff" stroke-opacity=".35" stroke-width="4" fill="none"/>` },
    leaf: { fy: 80, top: 22, body: c => `<path d="M60 136 C22 118 12 76 28 48 C42 22 80 16 106 24 C114 62 104 114 60 136Z" fill="${c}"/><path d="M60 136 Q72 82 100 30" stroke="#3E8F00" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M60 136 C22 118 12 76 28 48 C36 36 48 28 62 24 C40 50 38 100 60 136Z" fill="#000" opacity=".08"/><circle cx="84" cy="54" r="7" fill="#1FC8A0" stroke="#fff" stroke-width="2"/>` },
    hex: { fy: 88, top: 38, body: c => `<path d="${hexPath(60, 88, 50)}" fill="${c}" stroke="${c}" stroke-width="10" stroke-linejoin="round"/><path d="${hexPath(60, 88, 36)}" fill="#fff" opacity=".12"/>` },
    battery: { fy: 76, top: 26, body: c => `<rect x="46" y="26" width="28" height="16" rx="4" fill="#B8325F"/><rect x="24" y="38" width="72" height="98" rx="16" fill="${c}"/><rect x="34" y="104" width="52" height="8" rx="3" fill="#FFE066"/><rect x="34" y="116" width="52" height="8" rx="3" fill="#FFE066"/><rect x="30" y="44" width="12" height="40" rx="6" fill="#fff" opacity=".3"/>` },
    robot: { fy: 84, top: 22, body: c => `<line x1="60" y1="46" x2="60" y2="26" stroke="#9AA9B1" stroke-width="5"/><circle cx="60" cy="22" r="7" fill="#FFC800"/><rect x="10" y="72" width="12" height="26" rx="5" fill="#9AA9B1"/><rect x="98" y="72" width="12" height="26" rx="5" fill="#9AA9B1"/><rect x="18" y="44" width="84" height="84" rx="20" fill="${c}"/><rect x="30" y="64" width="60" height="42" rx="14" fill="#fff" opacity=".22"/><rect x="40" y="114" width="40" height="6" rx="3" fill="#fff" opacity=".4"/>` },
    star: { fy: 92, top: 36, body: c => `<path d="${starPath(60, 90, 56, 30)}" fill="${c}" stroke="${c}" stroke-width="12" stroke-linejoin="round"/><path d="${starPath(60, 90, 36, 20)}" fill="#fff" opacity=".12"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#FF4B4B"/><path d="M60 80 L60 146" stroke="#EA2B2B" stroke-width="3"/>`,
    halo: (s) => `<ellipse cx="60" cy="${s.top - 16}" rx="26" ry="7" fill="none" stroke="#FFC800" stroke-width="5"/>`
  };
  const FRONT = {
    sparkle: () => ['M18 36 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z', 'M102 28 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z', 'M106 118 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z'].map(d => `<path d="${d}" fill="#FFC800"/>`).join(''),
    headband: s => `<path d="M20 ${s.fy - 22} Q60 ${s.fy - 38} 100 ${s.fy - 22}" stroke="#FF4B4B" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M100 ${s.fy - 22} q10 4 14 14 M100 ${s.fy - 22} q12 -2 18 6" stroke="#FF4B4B" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    crown: s => { const y = s.top + 6; return `<path d="M38 ${y} L38 ${y - 18} L49 ${y - 8} L60 ${y - 26} L71 ${y - 8} L82 ${y - 18} L82 ${y} Z" fill="#FFC800" stroke="#E5A500" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="${y - 7}" r="4" fill="#FF4B8B"/>`; },
    glasses: s => `<g stroke="#3b1f0e" stroke-width="3.5" fill="#fff" fill-opacity=".25"><circle cx="46" cy="${s.fy}" r="13"/><circle cx="74" cy="${s.fy}" r="13"/></g><path d="M59 ${s.fy} h2" stroke="#3b1f0e" stroke-width="3.5"/>`,
    mask: s => `<rect x="24" y="${s.fy - 13}" width="72" height="24" rx="12" fill="#2d2d3a"/><path d="M96 ${s.fy - 6} q12 -2 16 -10 M96 ${s.fy + 2} q12 4 14 14" stroke="#2d2d3a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    bolt: () => `<path d="M104 96 L92 118 H102 L92 142 L118 112 H106 L114 96Z" fill="#FFC800" stroke="#E5A500" stroke-width="2" stroke-linejoin="round"/>`,
    helmet: s => `<path d="M28 ${s.top + 22} Q60 ${s.top - 22} 92 ${s.top + 22} Z" fill="#9AA9B1" stroke="#77868E" stroke-width="3"/><path d="M60 ${s.top - 2} q-4 -22 14 -28" stroke="#FF4B4B" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    wizard: s => { const y = s.top + 26; return `<path d="M60 ${y - 60} L92 ${y} H28 Z" fill="#6B4BCC"/><ellipse cx="60" cy="${y}" rx="40" ry="8" fill="#5639A8"/><path d="M58 ${y - 34} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z M70 ${y - 16} l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#FFC800"/><line x1="100" y1="132" x2="114" y2="96" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><path d="M114 84 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFC800"/>`; },
    antenna: s => `<path d="M46 ${s.top + 6} q-6 -18 -16 -22" stroke="#12A583" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="29" cy="${s.top - 17}" r="6" fill="#FFC800"/><path d="M74 ${s.top + 6} q6 -18 16 -22" stroke="#12A583" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="91" cy="${s.top - 17}" r="6" fill="#FFC800"/>`,
    stem: () => `<path d="M76 36 q4 -12 14 -16" stroke="#6b4a12" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M84 26 q12 -10 22 -2 q-12 8 -22 2z" fill="#58CC02"/>`
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

  function draw(c, mood, size, locked) {
    const s = SHAPES[c.shape];
    const m = mood || 'happy';
    const behind = c.acc.filter(a => BEHIND[a]).map(a => BEHIND[a](s)).join('');
    // ماسک باید زیر چشم‌ها باشد
    const maskFirst = c.acc.includes('mask') ? FRONT.mask(s) : '';
    const rest = c.acc.filter(a => FRONT[a] && a !== 'mask').map(a => FRONT[a](s)).join('');
    const sz = size || 120;
    return `<svg class="char yona--${m}${locked ? ' char--locked' : ''}" viewBox="0 0 120 150" width="${sz}" height="${sz * 1.25}" aria-hidden="true">
      <ellipse cx="60" cy="146" rx="32" ry="4" fill="currentColor" opacity=".12"/>
      <g class="yona-body">${behind}${s.body(c.color)}${maskFirst}${face(m, c.shape === 'leaf' ? 62 : 60, s.fy)}${rest}</g>
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
/* یونا — راند بیمارستان: کیس‌های چندمرحله‌ای مدیریت بیمار
 * هر کیس یک بیمار است که از ارزیابی تا پایش، قدم‌به‌قدم مدیریت می‌شود.
 * همچنین در ابتدای درس آی‌سی‌یو هر دنیا یک «الگوریتم مدیریت» اضافه می‌شود. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase) => ({ t: 'mcq', stage, q, opts, why, case: kase });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const S = (stage, q, ans, tol, unit, why, kase, hint) => ({ t: 'numS', stage, q, ans, tol, unit, why, case: kase, hint });
  const T = (stage, q, a, why) => ({ t: 'tf', stage, q, a, why });

  EA.rounds = [
    {
      id: 'r-na', w: 'na', title: 'تشنج در اورژانس', who: 'زن ۷۲ ساله، ۵۵ کیلوگرم',
      brief: 'سه روز تهوع و گیجی؛ مصرف هیدروکلروتیازید. در اورژانس دو بار تشنج کوتاه.',
      steps: [
        M('ارزیابی اولیه', 'اولین اقدام؟', ['بولوس ۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪ طی ۱۰ تا ۲۰ دقیقه', 'سالین ۰٫۹٪ با سرعت ۱۰۰ میلی‌لیتر در ساعت', 'محدودیت مایع و صبر', 'تولواپتان خوراکی'], 'هیپوناترمی با علائم شدید (تشنج) اورژانس است؛ پیش از هر بررسی دیگری سالین هیپرتونیک.', [['سدیم', '۱۱۴ mEq/L'], ['پتاسیم', '۳٫۰ mEq/L'], ['علائم', 'تشنج، گیجی']]),
        M('تشخیص', 'این هیپوناترمی از چه نوعی است؟', ['هیپوتونیک با ADH فعال؛ تیازید محتمل‌ترین علت', 'هیپوناترمی کاذب', 'هیپوناترمی هیپرتونیک', 'پلی‌دیپسی اولیه'], 'اسمولالیته سرم پایین = هیپوتونیک. ادرار غلیظ یعنی ADH فعال است. تیازید هم رقیق‌سازی ادرار را مختل می‌کند و هم سدیم ادرار را بالا نگه می‌دارد.', [['اسمولالیته سرم', '۲۳۸'], ['اسمولالیته ادرار', '۴۲۰'], ['سدیم ادرار', '۴۵'], ['گلوکز', '۱۱۰']]),
        S('محاسبه', 'یک لیتر سالین ۳٪ سدیم این بیمار را چقدر بالا می‌برد؟', 15.5, 0.3, 'mEq/L', 'زن سالمند ← ضریب ۰٫۴۵ ← TBW = ۵۵ × ۰٫۴۵ = ۲۴٫۸<br>ΔNa = (۵۱۳ − ۱۱۴) ÷ (۲۴٫۸ + ۱) = <b>۱۵٫۵</b><br>پس ۱۵۰ میلی‌لیتر حدود ۲٫۳ واحد بالا می‌برد؛ ممکن است به بولوس دوم نیاز شود.', [['وزن', '۵۵ کیلوگرم'], ['سن', '۷۲ سال'], ['سدیم', '۱۱۴']], 'TBW = وزن × ۰٫۴۵ ؛ ΔNa = (۵۱۳ − Na) ÷ (TBW + ۱)'),
        S('ایمنی', 'با توجه به هیپوکالمی، بیشترین سدیم مجاز در پایان ۲۴ ساعت اول چند است؟', 122, 0, 'mEq/L', 'هیپوکالمی عامل خطر ODS است ← سقف ۸ واحد ← ۱۱۴ + ۸ = <b>۱۲۲</b>', [['سدیم پایه', '۱۱۴'], ['پتاسیم', '۳٫۰']], 'بیمار پرخطر: +۸'),
        M('درمان', 'پس از رفع تشنج، بهترین برنامه؟', ['قطع تیازید، جایگزینی پتاسیم، و پایش سدیم هر ۲ تا ۴ ساعت', 'ادامه سالین ۳٪ تا سدیم ۱۳۵', 'تیازید را ادامه بده و محدودیت مایع', 'دسموپرسین روتین از همان ابتدا'], 'پتاسیم هم سدیم را بالا می‌برد و باید در محاسبه لحاظ شود. علت (تیازید) را حذف کن.'),
        M('پایش', 'چه باید کرد؟', ['قطع مایع هیپرتونیک، دکستروز ۵٪ و دسموپرسین تا سدیم از ۱۲۲ بالاتر نرود', 'ادامه برنامه فعلی', 'بولوس دیگر سالین ۳٪', 'فوروزماید'], 'پس از قطع تیازید، کلیه آب آزاد را سریع دفع می‌کند؛ اصلاح بیش از حد در راه است.', [['۸ ساعت بعد', 'سدیم ۱۲۱'], ['ادرار', '۳۵۰ میلی‌لیتر در ساعت، رقیق']])
      ]
    },
    {
      id: 'r-k', w: 'k', title: 'بیمار دیالیزی با QRS پهن', who: 'مرد ۶۵ ساله، دیالیزی',
      brief: 'دو جلسه دیالیز را از دست داده؛ ضعف شدید و تپش قلب.',
      steps: [
        M('ارزیابی اولیه', 'اولین دارو؟', ['کلسیم گلوکونات ۱۰٪، ۱۰ میلی‌لیتر طی ۲ تا ۳ دقیقه', 'انسولین و دکستروز', 'رزین خوراکی', 'فوروزماید وریدی'], 'تغییرات نوار قلب یعنی اول غشای قلب را پایدار کن.', [['پتاسیم', '۷٫۴ mEq/L'], ['نوار قلب', 'QRS پهن، T نوک‌تیز'], ['قند', '۱۴۰ mg/dL']]),
        M('پایش فوری', '۵ دقیقه بعد QRS هنوز پهن است. قدم بعد؟', ['تکرار کلسیم گلوکونات', 'صبر برای اثر کلسیم تا ۳۰ دقیقه', 'بی‌کربنات به‌تنهایی', 'آمیودارون'], 'اثر کلسیم ظرف دقیقه‌ها دیده می‌شود؛ اگر نوار قلب طبیعی نشد، دوز را تکرار کن.'),
        M('جابجایی پتاسیم', 'کدام ترکیب درست است؟', ['انسولین رگولار ۱۰ واحد وریدی + ۲۵ گرم دکستروز، و سالبوتامول استنشاقی', 'انسولین ۱۰ واحد بدون دکستروز چون قند ۱۴۰ است', 'انسولین NPH زیرجلدی', 'فقط سالبوتامول'], 'قند زیر ۲۵۰ است، پس دکستروز لازم است؛ بیمار دیالیزی بیشتر در خطر هیپوگلیسمی است.'),
        M('دفع قطعی', 'درمان قطعی این بیمار؟', ['دیالیز فوری', 'فوروزماید با دوز بالا', 'رزین خوراکی و ترخیص', 'تکرار انسولین هر ساعت'], 'بیمار آنوری است؛ فقط دیالیز پتاسیم را خارج می‌کند. انسولین و کلسیم فقط زمان می‌خرند.'),
        O('جمع‌بندی', 'ترتیب کامل درمان را مرتب کن', ['کلسیم گلوکونات', 'انسولین و دکستروز + سالبوتامول', 'دیالیز', 'پایش قند و پتاسیم']),
        M('پایش', 'پس از انسولین، قند خون را چگونه پایش کنیم؟', ['ساعتی تا ۴ تا ۶ ساعت', 'فقط یک بار پس از ۲۴ ساعت', 'نیازی نیست', 'فقط اگر علامت داشت'], 'هیپوگلیسمی دیررس در نارسایی کلیه شایع است.')
      ]
    },
    {
      id: 'r-ca', w: 'ca', title: 'گیجی در بیمار سرطانی', who: 'زن ۵۸ ساله، ۷۰ کیلوگرم، سرطان پستان',
      brief: 'یک هفته یبوست، تشنگی، خواب‌آلودگی و گیجی.',
      steps: [
        S('ارزیابی', 'کلسیم اصلاح‌شده چند است؟', 15, 0.1, 'mg/dL', '۱۴٫۲ + ۰٫۸ × (۴ − ۳٫۰) = <b>۱۵٫۰</b> ← هیپرکلسمی شدید', [['کلسیم تام', '۱۴٫۲ mg/dL'], ['آلبومین', '۳٫۰ g/dL'], ['کراتینین', '۱٫۶']], 'Ca + ۰٫۸ × (۴ − آلبومین)'),
        M('درمان فوری', 'بهترین برنامه اولیه؟', ['سالین ۰٫۹٪ وریدی + کلسی‌تونین + زولدرونیک اسید', 'فوروزماید وریدی به‌تنهایی', 'محدودیت مایع', 'کلسیم گلوکونات'], 'آبرسانی برای دهیدراتاسیون و افزایش دفع کلسیم، کلسی‌تونین برای اثر سریع، بیس‌فسفونات برای اثر پایدار.'),
        S('محاسبه', 'دوز هر نوبت کلسی‌تونین (۴ واحد/kg هر ۱۲ ساعت)؟', 280, 0, 'واحد', '۴ × ۷۰ = <b>۲۸۰</b> واحد زیرجلدی یا عضلانی هر ۱۲ ساعت', [['وزن', '۷۰ کیلوگرم']], '۴ × وزن'),
        T('درمان', 'در این بیمار دهیدراته، فوروزماید باید همراه اولین لیتر سالین شروع شود.', false, 'فوروزماید فقط پس از جبران حجم و اگر بار حجمی مشکل‌ساز شد؛ در بیمار دهیدراته حجم را کمتر و کلیه را بدتر می‌کند.'),
        M('علت', 'سطح PTH احتمالاً چگونه است؟', ['پایین (سرکوب‌شده)', 'بالا', 'طبیعی رو به بالا', 'قابل پیش‌بینی نیست'], 'در هیپرکلسمی بدخیمی (PTHrP یا متاستاز) PTH سرکوب می‌شود.'),
        M('پایش', 'در روزهای بعد، مراقب چه باشیم؟', ['کلسیم، کراتینین، فسفر و منیزیم؛ و هیپوکلسمی پس از بیس‌فسفونات', 'فقط قند خون', 'هیچ؛ درمان تمام شد', 'فقط وزن'], 'بیس‌فسفونات ممکن است کلسیم را زیر حد طبیعی ببرد و بر کلیه اثر بگذارد.')
      ]
    },
    {
      id: 'r-mg', w: 'mg', title: 'الکلی با پتاسیمی که بالا نمی‌رود', who: 'مرد ۴۸ ساله، ۷۵ کیلوگرم',
      brief: 'سابقه مصرف الکل، استفراغ سه‌روزه، ضعف و لرزش.',
      steps: [
        M('تشخیص', 'چرا پتاسیم و کلسیم با وجود جایگزینی پایین مانده‌اند؟', ['کمبود منیزیم', 'خطای آزمایشگاه', 'کمبود فسفر', 'نارسایی آدرنال'], 'کمبود منیزیم دفع کلیوی پتاسیم را زیاد و ترشح PTH را مختل می‌کند.', [['پتاسیم', '۲٫۹ (پس از ۸۰ mEq)'], ['کلسیم', '۷٫۲ (آلبومین ۴)'], ['منیزیم', '۰٫۹ mg/dL'], ['نوار قلب', 'QT طولانی']]),
        M('ایمنی', 'پیش از هر سرم قندی، چه باید داد؟', ['تیامین', 'انسولین', 'بی‌کربنات', 'ویتامین K'], 'در الکلی، گلوکز بدون تیامین ممکن است انسفالوپاتی ورنیکه را آشکار کند.'),
        M('درمان', 'دوز مناسب سولفات منیزیم (کلیه طبیعی)؟', ['۴ تا ۸ گرم طی ۱۲ تا ۲۴ ساعت', '۱ گرم خوراکی', '۲۰ گرم بولوس', 'نیاز ندارد'], 'منیزیم زیر ۱٫۰ = کمبود شدید.'),
        S('محاسبه', '۶ گرم سولفات منیزیم چند mEq منیزیم دارد؟', 48.7, 0.8, 'mEq', '۶ × ۸٫۱۲ = <b>۴۸٫۷</b> mEq', null, 'گرم × ۸٫۱'),
        T('درمان', 'بهتر است منیزیم و پتاسیم هم‌زمان جایگزین شوند.', true, 'بدون منیزیم، پتاسیم تزریقی از ادرار هدر می‌رود.'),
        M('پایش', 'در حین انفوزیون منیزیم، کدام یافته یعنی باید سرعت را کم یا تزریق را قطع کرد؟', ['از بین رفتن رفلکس پاتلا یا افت فشار', 'افزایش ادرار', 'احساس گرمای خفیف', 'بهبود لرزش'], 'رفلکس‌ها اولین نشانه سطح بالای منیزیم‌اند.')
      ]
    },
    {
      id: 'r-p', w: 'p', title: 'تنگی نفس در روز دوم تغذیه', who: 'زن ۲۴ ساله، ۳۸ کیلوگرم، بی‌اشتهایی عصبی',
      brief: 'BMI = ۱۳٫۸، سه هفته غذای ناچیز؛ برای تغذیه لوله‌ای بستری شده.',
      steps: [
        M('ارزیابی خطر', 'خطر ریفیدینگ این بیمار؟', ['بسیار بالا؛ شروع با ۵ kcal/kg و تیامین پیش از تغذیه', 'متوسط؛ شروع با ۲۰ kcal/kg', 'پایین؛ تغذیه کامل از روز اول', 'تغذیه ممنوع است'], 'BMI زیر ۱۴ و بیش از ۱۵ روز بی‌غذایی = بسیار پرخطر.'),
        S('محاسبه', 'انرژی روز اول؟', 190, 0, 'kcal', '۵ × ۳۸ = <b>۱۹۰</b> کیلوکالری', [['وزن', '۳۸ کیلوگرم']], '۵ × وزن'),
        M('تشخیص', 'روز دوم چه اتفاقی افتاده است؟', ['سندرم ریفیدینگ', 'پنومونی آسپیراسیون', 'نارسایی کلیه', 'خطای آزمایشگاه'], 'افت فسفر، پتاسیم و منیزیم همراه تنگی نفس پس از شروع تغذیه.', [['فسفر', '۱٫۱ mg/dL'], ['پتاسیم', '۲٫۹'], ['منیزیم', '۱٫۳'], ['علائم', 'تنگی نفس، ضعف']]),
        S('محاسبه', 'دوز فسفات وریدی (نمونه پروتکل: فسفر ≤ ۱٫۵ ← ۰٫۶۴ mmol/kg)؟', 24.3, 0.5, 'mmol', '۰٫۶۴ × ۳۸ = <b>۲۴٫۳</b> mmol طی ۴ تا ۶ ساعت', null, '۰٫۶۴ × وزن'),
        M('انتخاب فرآورده', 'کدام فرآورده فسفات؟', ['پتاسیم فسفات (پتاسیم ۲٫۹ است)', 'سدیم فسفات', 'فرقی ندارد', 'فسفات خوراکی فقط'], 'پتاسیم زیر ۴ و کلیه طبیعی ← پتاسیم فسفات؛ پتاسیم همراه را در سقف سرعت پتاسیم حساب کن.'),
        M('پایش', 'برنامه تغذیه و پایش؟', ['کاهش موقت انرژی، جایگزینی الکترولیت‌ها، پایش روزانه فسفر، پتاسیم، منیزیم، قند و مایعات', 'افزایش انرژی برای جبران', 'قطع کامل و دائمی تغذیه', 'فقط وزن روزانه'], 'پس از اصلاح، انرژی را آهسته طی ۴ تا ۷ روز بالا ببر.')
      ]
    },
    {
      id: 'r-mix', w: 'k', title: 'کتواسیدوز دیابتی', who: 'مرد ۳۰ ساله با دیابت نوع ۱',
      brief: 'دو روز استفراغ و تنفس عمیق؛ انسولین را قطع کرده بود.',
      steps: [
        S('ارزیابی', 'سدیم اصلاح‌شده برای قند؟', 134.7, 0.5, 'mEq/L', '۱۲۸ + ۱٫۶ × (۵۲۰ − ۱۰۰) ÷ ۱۰۰ = <b>۱۳۴٫۷</b>', [['سدیم', '۱۲۸'], ['قند', '۵۲۰ mg/dL'], ['پتاسیم', '۴٫۹'], ['pH', '۷٫۰۸']], 'Na + ۱٫۶ × (قند − ۱۰۰) ÷ ۱۰۰'),
        M('پتاسیم و انسولین', 'با پتاسیم ۴٫۹ چه کنیم؟', ['انسولین را شروع کن و ۲۰ تا ۳۰ mEq پتاسیم به هر لیتر مایع اضافه کن', 'انسولین را نگه دار', 'پتاسیم نده و فقط انسولین', 'بی‌کربنات بده'], 'پتاسیم بین ۳٫۳ و ۵٫۲ است (ADA).'),
        M('چهار ساعت بعد', 'پتاسیم به ۳٫۱ رسیده. اقدام؟', ['انسولین را موقتاً نگه دار و ۲۰ تا ۳۰ mEq پتاسیم در ساعت بده', 'ادامه همان برنامه', 'افزایش دوز انسولین', 'قطع مایعات'], 'زیر ۳٫۳ انسولین خطر آریتمی کشنده دارد.'),
        M('قند در حال افت', 'قند به حدود ۲۰۰ رسیده ولی اسیدوز ادامه دارد. اقدام؟', ['دکستروز ۵٪ به مایع اضافه کن و انسولین را ادامه بده', 'انسولین را قطع کن', 'بی‌کربنات بده', 'مایعات را قطع کن'], 'هدف رفع کتواسیدوز است، نه فقط قند؛ دکستروز اجازه می‌دهد انسولین ادامه پیدا کند.'),
        M('فسفر', 'فسفر ۰٫۹ و ضعف عضلانی. اقدام؟', ['جایگزینی فسفات؛ مثلاً بخشی از پتاسیم به شکل پتاسیم فسفات', 'هیچ؛ در کتواسیدوز فسفات لازم نیست', 'کلسیم وریدی', 'قطع انسولین'], 'فسفر زیر ۱٫۰ از اندیکاسیون‌های جایگزینی فسفات در کتواسیدوز است.'),
        O('جمع‌بندی', 'مراحل مدیریت کتواسیدوز را مرتب کن', ['جبران حجم با سالین', 'بررسی پتاسیم پیش از انسولین', 'انسولین وریدی', 'افزودن دکستروز با افت قند', 'انتقال به انسولین زیرجلدی پس از رفع اسیدوز'])
      ]
    }
  ];

  /* الگوریتم مدیریت در ابتدای درس آی‌سی‌یو هر دنیا */
  const L = (title, body) => ({ t: 'learn', title, body });
  const OL = (q, steps, why) => ({ t: 'order', q, steps, why });
  const ALGO = {
    na9: [L('الگوریتم مدیریت هیپوناترمی', '<ol class="algo"><li><b>علائم شدید؟</b> ← بولوس سالین ۳٪، هدف +۴ تا ۶</li><li><b>تونیسیته</b>: اسمولالیته سرم (کاذب و هیپرتونیک را رد کن)</li><li><b>ADH</b>: اسمولالیته ادرار</li><li><b>حجم و سدیم ادرار</b> ← علت</li><li><b>درمان علت</b> با سقف ۸ تا ۱۰ در ۲۴ ساعت</li><li><b>پایش</b> هر ۲ تا ۴ ساعت؛ آماده دکستروز ۵٪ و دسموپرسین</li></ol>'),
      OL('مراحل مدیریت هیپوناترمی را مرتب کن', ['درمان علائم شدید', 'سنجش تونیسیته', 'سنجش اسمولالیته ادرار', 'ارزیابی حجم و سدیم ادرار', 'درمان علت با سقف ایمن', 'پایش مکرر سدیم'])],
    k9: [L('الگوریتم مدیریت پتاسیم', '<b>هیپرکالمی</b><ol class="algo"><li>نوار قلب و رد نمونه همولیز</li><li>تغییرات نوار قلب ← کلسیم گلوکونات</li><li>جابجایی: انسولین + دکستروز، سالبوتامول</li><li>دفع: دیورتیک، بایندر، دیالیز</li><li>پایش قند و پتاسیم؛ حذف داروهای مقصر</li></ol><b>هیپوکالمی</b><ol class="algo"><li>نوار قلب و شدت</li><li>منیزیم را بسنج</li><li>راه و دوز (هر ۱۰ mEq ≈ ۰٫۱)</li><li>سقف سرعت و رقیق‌سازی در سالین</li><li>سنجش مجدد و علت‌یابی</li></ol>'),
      OL('مراحل مدیریت هیپوکالمی را مرتب کن', ['ارزیابی نوار قلب و شدت', 'سنجش منیزیم', 'انتخاب راه و دوز', 'تجویز با سرعت مجاز', 'سنجش مجدد و علت‌یابی'])],
    ca9: [L('الگوریتم مدیریت کلسیم', '<ol class="algo"><li>کلسیم را با آلبومین اصلاح کن یا یونیزه را بسنج</li><li>علائم و نوار قلب (QT)</li><li>هیپوکلسمی علامت‌دار ← کلسیم گلوکونات وریدی و سپس انفوزیون</li><li>منیزیم را اصلاح کن</li><li>علت: PTH، ویتامین D، فسفر، کلیه</li></ol><b>هیپرکلسمی شدید</b>: سالین ← کلسی‌تونین ← بیس‌فسفونات ← علت'),
      OL('مراحل مدیریت هیپوکلسمی را مرتب کن', ['اصلاح با آلبومین یا سنجش یونیزه', 'ارزیابی علائم و نوار قلب', 'کلسیم وریدی در صورت علامت', 'اصلاح منیزیم', 'پیدا کردن علت'])],
    mg9: [L('الگوریتم مدیریت منیزیم', '<ol class="algo"><li>سطح منیزیم و علائم (آریتمی، تشنج، تتانی)</li><li>کارکرد کلیه</li><li>انتخاب دوز بر اساس شدت؛ در eGFR زیر ۳۰ نصف</li><li>تزریق آهسته در حالت غیراورژانسی</li><li>سنجش مجدد؛ اصلاح هم‌زمان پتاسیم و کلسیم</li></ol>'),
      OL('مراحل مدیریت هیپومنیزیمی را مرتب کن', ['سنجش سطح و علائم', 'بررسی کارکرد کلیه', 'انتخاب دوز', 'تزریق آهسته', 'سنجش مجدد و اصلاح پتاسیم و کلسیم'])],
    p9: [L('الگوریتم مدیریت فسفر', '<ol class="algo"><li>خطر ریفیدینگ و علت را بسنج</li><li>شدت و علائم (ضعف تنفسی، همولیز)</li><li>راه: خوراکی در خفیف، وریدی در شدید</li><li>فرآورده بر اساس پتاسیم؛ دوز وزن‌محور</li><li>سرعت ۴ تا ۶ ساعت؛ سنجش مجدد ۶ ساعت بعد</li></ol>'),
      OL('مراحل مدیریت هیپوفسفاتمی شدید را مرتب کن', ['بررسی خطر ریفیدینگ و علت', 'ارزیابی شدت و علائم', 'انتخاب راه تجویز', 'انتخاب فرآورده و دوز', 'تزریق طی ۴ تا ۶ ساعت و سنجش مجدد'])]
  };
  EA.worlds.forEach(w => w.lessons.forEach(l => { if (ALGO[l.id] && !l._algo) { l.items = ALGO[l.id].concat(l.items); l._algo = true; } }));

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/

/*<<PV-DATA>>*/
/* Yona — English course content
 * Mirrors the Persian course exactly: same lesson ids, same item order and types,
 * so progress, review keys and characters work identically in both languages.
 * Loaded after content.js, content-more.js, characters.js and rounds.js. */
(function (root) {
  const EA = root.EA;
  const L = (title, body) => ({ t: 'learn', title, body });
  const M = (q, opts, why, kase) => ({ t: 'mcq', q, opts, why, case: kase });
  const T = (q, a, why) => ({ t: 'tf', q, a, why });
  const B = (q, opts, why) => ({ t: 'fill', q, opts, why });
  const O = (q, steps, why) => ({ t: 'order', q, steps, why });
  const P = (q, pairs, why) => ({ t: 'match', q, pairs, why });
  const N = gen => ({ t: 'num', gen });
  const fx = s => `<div class="fx" dir="ltr">${s}</div>`;
  const tbl = rows => '<table class="mini">' + rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</table>';

  const LESSONS = {
    /* ================================ SODIUM ================================ */
    na1: { title: 'Sodium and body water', items: [
      L('Sodium is really about water', 'Sodium is the main cation of the extracellular fluid. The normal range is <b>135–145 mEq/L</b>.<br><br>Key idea: sodium disorders are mostly <b>water disorders</b>. Hyponatremia means too much water relative to sodium, not necessarily too little sodium.'),
      M('What is the normal serum sodium range?', ['135–145 mEq/L', '125–135 mEq/L', '145–155 mEq/L', '3.5–5.0 mEq/L'], '135–145 is normal. 3.5–5.0 is the potassium range!'),
      L('Total body water (TBW)', 'Almost every sodium formula needs total body water:' + fx('TBW = weight (kg) × factor') + tbl([['Child', '0.6'], ['Adult man', '0.6'], ['Adult woman', '0.5'], ['Older man (65+)', '0.5'], ['Older woman (65+)', '0.45']])),
      M('What is the TBW factor for a 40-year-old woman?', ['0.5', '0.6', '0.45', '0.7'], 'Adult woman under 65: 0.5.'),
      N('na.tbw'),
      T('Hyponatremia almost always means total body sodium is low.', false, 'No. In heart failure or cirrhosis total body sodium is high, but water has risen even more. Hyponatremia reflects the ratio of water to sodium.'),
      L('Serum osmolality', 'The concentration of dissolved particles in serum:' + fx('Osm = 2×Na + Glucose/18 + BUN/2.8') + 'Normal: <b>275–295 mOsm/kg</b>.<br>Urea crosses cell membranes freely, so it does not contribute to <b>effective</b> osmolality (tonicity).'),
      N('na.osm'),
      M('Which substance does NOT raise effective serum tonicity?', ['Urea', 'Glucose', 'Sodium', 'Mannitol'], 'Urea crosses membranes and does not move water, so it is an “ineffective osmole.”'),
      P('Match the pairs', [['Normal sodium', '135–145'], ['Normal osmolality', '275–295'], ['TBW factor, older woman', '0.45'], ['TBW factor, young man', '0.6']])
    ] },
    na2: { title: 'Hyponatremia: diagnosis', items: [
      L('Tonicity first!', 'Step one in any hyponatremia is serum osmolality:<br>• <b>Below 275</b> → hypotonic (true) hyponatremia<br>• <b>275–295</b> → isotonic; “pseudo” from very high lipids or protein<br>• <b>Above 295</b> → hypertonic; for example hyperglycemia or mannitol'),
      M('A patient with very high triglycerides has sodium 128 and a normal measured osmolality. Diagnosis?', ['Pseudohyponatremia', 'SIADH', 'Water intoxication', 'Heart failure'], 'Excess lipid makes the aqueous fraction look smaller; osmolality is normal and sodium needs no treatment.'),
      L('Glucose-corrected sodium', 'High glucose pulls water out of cells and dilutes sodium:' + fx('Corrected Na = Na + 1.6 × (Glu − 100) / 100') + 'Above 400 mg/dL, a factor of 2.4 is sometimes used.'),
      N('na.corrGlu'),
      L('Now assess volume status', '• <b>Hypovolemic</b>: vomiting, diarrhea, diuretics; urine sodium below 20 suggests a non-renal cause<br>• <b>Euvolemic</b>: SIADH, hypothyroidism, adrenal insufficiency<br>• <b>Hypervolemic</b>: heart failure, cirrhosis, nephrotic syndrome'),
      P('Match each cause to its type', [['Prolonged vomiting', 'Hypovolemic'], ['SIADH', 'Euvolemic'], ['Heart failure', 'Hypervolemic'], ['Hyperglycemia', 'Hypertonic']]),
      M('Which finding supports SIADH?', ['Urine osmolality above 100 and urine sodium above 30 in a euvolemic patient', 'Urine osmolality below 100', 'Urine sodium below 20 with edema', 'Serum osmolality above 295'], 'In SIADH the urine is inappropriately concentrated and urine sodium is high; the patient is euvolemic with low serum osmolality.'),
      T('Urine osmolality below 100 in hyponatremia points to primary polydipsia or low solute intake.', true, 'Correct. ADH is suppressed and the urine is maximally dilute; the problem is excess water intake or too little solute.'),
      B('Hyponatremia with edema and ascites is seen in ___.', ['cirrhosis', 'SIADH', 'diarrhea'], 'Cirrhosis causes hypervolemic hyponatremia.'),
      O('Put the steps of hyponatremia work-up in order', ['Check for severe symptoms', 'Measure serum osmolality', 'Measure urine osmolality', 'Assess urine sodium and volume status'], 'Severe symptoms need immediate treatment; then tonicity, then ADH activity (urine osmolality), and finally urine sodium and volume.')
    ] },
    na6: { title: 'Causes and drugs', items: [
      L('Drugs that lower sodium', '• <b>Thiazides</b> (the most common drug cause, especially in older women)<br>• SSRI antidepressants (sertraline, citalopram)<br>• Carbamazepine and oxcarbazepine<br>• Cyclophosphamide, vincristine, opioids, ecstasy (MDMA)<br>• Desmopressin'),
      M('Which diuretic causes hyponatremia most often?', ['A thiazide (e.g., hydrochlorothiazide)', 'Furosemide', 'Spironolactone', 'Acetazolamide'], 'Thiazides impair urine dilution; loop diuretics wash out the medullary gradient and cause hyponatremia less often.'),
      M('Which drug is well known to cause SIADH?', ['Sertraline', 'Amlodipine', 'Metformin', 'Atorvastatin'], 'SSRIs cause SIADH, especially in older adults.'),
      T('Drinking large amounts of water during an endurance race can cause dangerous hyponatremia.', true, 'Exercise-associated hyponatremia: water intake beyond the kidneys’ capacity plus exercise-driven ADH release.'),
      L('Beer potomania and “tea and toast”', 'Low solute intake (protein and salt) plus high fluid intake (beer, or a tea-and-toast diet). The kidneys need solute to excrete water; without it, water is retained.<br>Urine is very dilute, and once feeding starts, sodium can rise <b>very fast</b>.'),
      B('In beer potomania, urine osmolality is usually ___.', ['below 100', 'above 500', 'about 300'], 'ADH is suppressed and urine is maximally dilute.'),
      P('Match each cause to its mechanism', [['Thiazide', 'Impaired urine dilution'], ['Carbamazepine', 'Enhanced ADH effect'], ['Adrenal insufficiency', 'Low cortisol, high ADH'], ['Severe hypothyroidism', 'Reduced free water excretion']]),
      M('Main cause of post-operative hyponatremia?', ['ADH release from pain, nausea and drugs, plus hypotonic fluids', 'Low dietary salt', 'Diabetes insipidus', 'Hyperaldosteronism'], 'Avoid hypotonic fluids after surgery and monitor sodium.')
    ] },
    na3: { title: 'Correcting hyponatremia', items: [
      L('The golden rule: slowly!', 'In chronic hyponatremia (over 48 hours or unknown duration) the brain has adapted. Rapid correction → <b>osmotic demyelination syndrome (ODS)</b>.<br><br>Limit: <b>10 mEq/L in the first 24 hours</b> and 8 in each 24 hours after that.<br>In high-risk patients <b>8 per 24 hours</b>.<br><br>ODS risk factors: sodium ≤ 105, alcoholism, malnutrition, hypokalemia, liver disease.'),
      M('Maximum sodium rise in the first 24 hours for a malnourished patient with alcoholism?', ['8 mEq/L', '12 mEq/L', '15 mEq/L', '20 mEq/L'], 'The patient is at high risk of ODS; limit the rise to 8 in 24 hours.'),
      N('na.limit'),
      L('Severe symptoms? 3% saline', 'Seizure, reduced consciousness, repeated vomiting or respiratory distress:<br>• Bolus <b>100–150 mL of 3% saline</b> over 10–20 minutes<br>• Repeat up to 2 more times if needed<br>• Goal: a rise of <b>4–6 mEq/L</b> or symptom resolution — this is enough to reduce cerebral edema'),
      M('A patient is seizing with sodium 114. First step?', ['Bolus 100–150 mL of 3% saline', 'Fluid restriction', 'Slow 0.9% saline', 'Oral tolvaptan'], 'Hyponatremia with severe symptoms is an emergency: give a hypertonic saline bolus.'),
      L('The Adrogué–Madias formula', 'Predicts the change in sodium from <b>one liter</b> of any fluid:' + fx('ΔNa = (Na<sub>infusate</sub> − Na<sub>serum</sub>) / (TBW + 1)') + tbl([['3% saline', '513'], ['0.9% saline', '154'], ['Lactated Ringer’s', '130'], ['0.45% saline', '77'], ['D5W', '0']]) + '<small>If the fluid contains potassium, add potassium to the numerator too.</small>'),
      N('na.adrogue'),
      B('The complication of rapidly correcting chronic hyponatremia is ___.', ['osmotic demyelination (ODS)', 'cerebral edema', 'hyperkalemia'], 'ODS may appear 2–6 days later with dysarthria, dysphagia and paralysis.'),
      T('If sodium rises faster than allowed, it can be lowered again with D5W and desmopressin.', true, 'Correct. Re-lowering with free water and desmopressin is recommended after overcorrection.'),
      M('First-line treatment of SIADH without severe symptoms?', ['Fluid restriction', '0.9% saline', 'D5W', 'Furosemide alone'], 'Fluid restriction (usually below 800–1000 mL/day). Normal saline may worsen sodium in SIADH.')
    ] },
    na7: { title: 'SIADH and special treatments', items: [
      L('What is SIADH?', 'ADH is released without an appropriate stimulus → water is retained → euvolemic hyponatremia.<br><b>Criteria</b>: serum osmolality below 275, urine osmolality above 100, urine sodium above 30, euvolemia, and exclusion of hypothyroidism, adrenal insufficiency and diuretic use.<br><b>Causes</b>: small-cell lung cancer, pneumonia, brain disorders, drugs, pain and nausea.'),
      M('The tumor that most often causes SIADH?', ['Small-cell lung cancer', 'Prostate adenocarcinoma', 'Hodgkin lymphoma', 'Melanoma'], 'The tumor produces ectopic ADH.'),
      B('To diagnose SIADH, hypothyroidism and ___ insufficiency must be excluded.', ['adrenal', 'pancreatic', 'hepatic'], 'Both can mimic SIADH.'),
      L('Furst ratio: will fluid restriction work?', fx('(Na<sub>urine</sub> + K<sub>urine</sub>) / Na<sub>serum</sub>') + tbl([['Ratio', 'Suggested restriction'], ['Below 0.5', 'About 1 L/day'], ['0.5–1', 'About 500 mL/day'], ['Above 1', 'Restriction alone will not work']])),
      N('na.furst'),
      L('When fluid restriction is not enough', '• Increase solute: salt tablets or <b>oral urea</b><br>• Loop diuretic with salt<br>• <b>Tolvaptan</b> (a vaptan): only with close sodium monitoring because of overcorrection risk; not recommended in liver disease'),
      M('Which SIADH treatment carries the highest risk of overcorrection?', ['Tolvaptan', 'Fluid restriction', 'Salt tablets', 'Low-dose oral urea'], 'Vaptans cause a sudden rise in free water excretion.'),
      T('In SIADH, 0.9% saline can lower sodium further.', true, 'When urine osmolality exceeds that of saline (about 300), the salt is excreted and part of the water is retained.'),
      O('Order chronic SIADH treatments from simple to advanced', ['Fluid restriction', 'More solute (salt or oral urea)', 'A vaptan with close monitoring'])
    ] },
    na4: { title: 'Hypernatremia', items: [
      L('Hypernatremia means a water deficit', 'Sodium above 145 → always hypertonic.<br>Causes: water loss (fever, diarrhea, diabetes insipidus), no access to water (older adults, infants, unconscious patients), or sodium gain.<br>Symptoms: thirst, restlessness, lethargy, seizures.'),
      L('Free water deficit', fx('Water deficit (L) = TBW × (Na / 140 − 1)') + 'In chronic hypernatremia lower sodium by at most <b>10–12 mEq/L per 24 hours</b> (about 0.5 per hour). Rapid correction → cerebral edema.'),
      N('na.fwd'),
      M('Safe rate for lowering sodium in chronic hypernatremia?', ['At most 10–12 mEq/L per 24 hours', '20 mEq/L per 24 hours', 'As fast as possible', '2 mEq/L per 24 hours'], 'Slowly, because brain cells have built up internal osmoles and rapid water entry makes them swell.'),
      B('Rapid correction of chronic hypernatremia risks ___.', ['cerebral edema', 'ODS', 'hypocalcemia'], 'The opposite of hyponatremia: here the danger is brain swelling.'),
      N('na.d5w'),
      M('Polyuria with dilute urine (osmolality below 300) and hypernatremia. Most likely diagnosis?', ['Diabetes insipidus', 'SIADH', 'Vomiting', 'Hyperaldosteronism'], 'The kidneys cannot concentrate urine → central or nephrogenic diabetes insipidus.'),
      T('In a hypernatremic patient in shock, restore volume with 0.9% saline first, then give free water.', true, 'Hemodynamic stability comes first; 0.9% saline is still hypotonic relative to the patient’s serum.')
    ] },
    na8: { title: 'Diabetes insipidus and fluid choice', items: [
      L('Diabetes insipidus', '• <b>Central</b>: ADH deficiency — head injury, pituitary surgery<br>• <b>Nephrogenic</b>: the kidney does not respond to ADH — lithium, hypercalcemia, hypokalemia<br>Symptoms: urine over 3 L/day, dilute urine (below 300), thirst. Without access to water → hypernatremia.<br>If urine osmolality rises after desmopressin → central.'),
      M('A patient on lithium has polyuria and dilute urine. Most likely diagnosis?', ['Nephrogenic diabetes insipidus', 'Central diabetes insipidus', 'SIADH', 'Psychogenic polydipsia'], 'Lithium disrupts water channels (aquaporin-2).'),
      M('Treatment of central diabetes insipidus?', ['Desmopressin', 'A thiazide alone', 'Salt restriction', 'Furosemide'], 'Replace the missing hormone.'),
      T('In nephrogenic diabetes insipidus, a thiazide and a low-salt diet can reduce urine volume.', true, 'Mild volume contraction increases proximal reabsorption and reduces water delivery to the distal tubule.'),
      L('Which fluid for what?', tbl([['Fluid', 'Sodium', 'Use'], ['0.9% saline', '154', 'Volume replacement'], ['Lactated Ringer’s', '130', 'Volume replacement'], ['0.45% saline', '77', 'Half free water'], ['D5W', '0', 'Pure free water'], ['3% saline', '513', 'Symptomatic hyponatremia']])),
      P('Match each fluid to its use', [['3% saline', 'Symptomatic hyponatremia'], ['D5W', 'Free water replacement'], ['0.9% saline', 'Volume replacement in shock'], ['0.45% saline', 'Half free water']]),
      B('One liter of 0.45% saline contains about ___ mL of free water.', ['500', '1000', '150'], 'Half the concentration of normal saline → half the volume is free water.'),
      N('na.d5w')
    ] },
    na5: { title: 'Sodium hospital', items: [
      M('Which decision is correct?', ['Aim for a rise of at most 8 in 24 hours and correct potassium at the same time', 'Bring sodium to 135 within 24 hours', 'Potassium does not matter', 'Repeat 3% boluses until sodium is 130'], 'The patient is at high risk of ODS. Potassium replacement also raises sodium, so include it in your plan.', [['Patient', 'Man, 45, alcohol use disorder'], ['Sodium', '110 mEq/L'], ['Potassium', '2.9 mEq/L'], ['Symptoms', 'Mild confusion, no seizures']]),
      N('na.adrogueVol'),
      T('Giving potassium also raises serum sodium.', true, 'Correct. By the Edelman equation, serum sodium depends on exchangeable (Na + K) divided by body water.'),
      N('na.corrGlu'),
      M('Next step?', ['D5W and, if needed, desmopressin to re-lower sodium', 'Continue 3% saline', 'No action needed', 'Furosemide'], 'A rise of 14 in 18 hours exceeds the limit; sodium must be brought back down.', [['Baseline sodium', '112'], ['Sodium after 18 hours', '126'], ['Status', 'Asymptomatic']]),
      N('na.fwd'),
      N('na.osm'),
      M('Which order is most appropriate?', ['Slow free water replacement (e.g., D5W or enteral water) over 48 hours', 'Fast D5W to correct within 6 hours', '3% saline', 'Fluid restriction'], 'Chronic hypernatremia with stable hemodynamics → free water, slowly.', [['Patient', 'Woman, 82, from a nursing home'], ['Sodium', '162'], ['Blood pressure', 'Stable']])
    ] },
    na9: { title: 'Sodium ICU', items: [
      L('Hyponatremia management algorithm', '<ol class="algo"><li><b>Severe symptoms?</b> → 3% saline bolus, goal +4 to 6</li><li><b>Tonicity</b>: serum osmolality (exclude pseudo and hypertonic)</li><li><b>ADH</b>: urine osmolality</li><li><b>Volume and urine sodium</b> → cause</li><li><b>Treat the cause</b> within a limit of 8–10 per 24 hours</li><li><b>Monitor</b> every 2–4 hours; have D5W and desmopressin ready</li></ol>'),
      O('Put the steps of hyponatremia management in order', ['Treat severe symptoms', 'Measure tonicity', 'Measure urine osmolality', 'Assess volume and urine sodium', 'Treat the cause within a safe limit', 'Monitor sodium frequently']),
      M('Diagnosis and treatment?', ['Central diabetes insipidus; desmopressin and water replacement', 'SIADH; fluid restriction', 'Cerebral salt wasting', 'Continue 3% saline'], 'After pituitary surgery: large volumes of dilute urine with high sodium.', [['Patient', 'Day 1 after pituitary surgery'], ['Urine', '6 L in 24 hours'], ['Sodium', '152'], ['Urine osmolality', '120']]),
      M('Most likely diagnosis?', ['Cerebral salt wasting; replace volume and salt', 'SIADH; fluid restriction', 'Diabetes insipidus', 'Pseudohyponatremia'], 'Volume depletion with high urine sodium is not SIADH; fluid restriction is harmful here.', [['Patient', 'Subarachnoid hemorrhage'], ['Sodium', '126'], ['Volume', 'Depleted, low central venous pressure'], ['Urine sodium', '80']]),
      T('In subarachnoid hemorrhage, fluid restriction for hyponatremia can increase the risk of vasospasm.', true, 'Maintain volume in these patients; use salt or hypertonic saline and, if needed, fludrocortisone.'),
      N('na.adrogue'),
      N('na.furst'),
      M('Best action?', ['Stop hypertonic fluid; give D5W and desmopressin to stop a further rise', 'Continue the current fluid', '3% saline bolus', 'Furosemide'], 'A sudden water diuresis after volume repletion risks ODS.', [['Baseline sodium', '118 (chronic)'], ['8 hours later', '128'], ['Urine', '400 mL/h, dilute']]),
      N('na.fwd')
    ] },

    /* ================================ POTASSIUM ================================ */
    k1: { title: 'Potassium and the heart', items: [
      L('Where is potassium?', 'About <b>98%</b> of body potassium is inside cells. Normal serum level: <b>3.5–5.0 mEq/L</b>.<br><br>Because the serum amount is small, small changes have large effects on the membrane potential of heart and muscle.'),
      M('Normal serum potassium range?', ['3.5–5.0 mEq/L', '5–7 mEq/L', '135–145 mEq/L', '2.5–3.5 mEq/L'], '3.5–5.0.'),
      L('What moves potassium?', '<b>Into cells</b>: insulin, beta-agonists (salbutamol), alkalosis<br><b>Out of cells</b>: insulin deficiency, acidosis, cell breakdown (rhabdomyolysis, tumor lysis, hemolysis)'),
      B('Alkalosis causes serum potassium to ___.', ['fall', 'rise', 'stay the same'], 'In alkalosis hydrogen ions leave cells and potassium moves in.'),
      P('Match each item to its effect', [['Insulin', 'Shifts K into cells'], ['Rhabdomyolysis', 'Releases K from cells'], ['Spironolactone', 'Reduces renal K excretion'], ['Furosemide', 'Increases renal K excretion']]),
      T('Hemolysis of a blood sample can falsely raise potassium.', true, 'Correct: “pseudohyperkalemia.” Normal ECG and a hemolyzed sample? Repeat the test.'),
      M('Which drug can cause hyperkalemia?', ['Enalapril', 'Furosemide', 'Salbutamol', 'Insulin'], 'ACE inhibitors and ARBs reduce aldosterone and therefore potassium excretion.'),
      M('A prominent U wave on the ECG suggests…', ['Hypokalemia', 'Hyperkalemia', 'Hypercalcemia', 'Hyponatremia'], 'Hypokalemia: flattened T waves, U waves, ST depression.')
    ] },
    k2: { title: 'Hypokalemia', items: [
      L('Hypokalemia: why and what', 'Causes: GI losses (vomiting, diarrhea), diuretics, <b>hypomagnesemia</b>, insulin, beta-agonists, hyperaldosteronism.<br>Symptoms: muscle weakness, ileus, cramps, arrhythmias.<br>ECG: flat T waves, U waves, ST depression.'),
      M('Which of these does NOT cause hypokalemia?', ['Spironolactone', 'Vomiting', 'Salbutamol', 'Hypomagnesemia'], 'Spironolactone is potassium-sparing and causes hyperkalemia.'),
      L('The “10 for 0.1” rule', 'In an adult with normal kidneys and no transcellular shift:' + fx('10 mEq KCl ≈ +0.1 mEq/L') + 'So raising potassium by 0.5 needs about 50 mEq. This is only an estimate; always recheck after dosing.'),
      N('k.need'),
      M('Hypokalemia does not improve despite adequate replacement. What should you check?', ['Magnesium', 'Sodium', 'Calcium', 'Phosphate'], 'Magnesium deficiency increases renal potassium loss; potassium will not rise until magnesium is corrected.'),
      T('With potassium 3.3, no symptoms and a normal ability to swallow, the oral route is preferred.', true, 'Correct. Oral replacement is safer; IV is for severe or symptomatic hypokalemia or when the patient cannot swallow.'),
      O('Put the steps of hypokalemia management in order', ['Check the ECG and symptoms', 'Choose the route and dose', 'Give it at a safe rate', 'Recheck potassium'], 'Assess severity → choose route and dose → administer safely → monitor.'),
      N('k.need')
    ] },
    k6: { title: 'Finding the cause of hypokalemia', items: [
      L('The urine tells the story', 'Urine potassium <b>below 25–30 mEq/day</b> (or a urine potassium-to-creatinine ratio below 13 mEq/g) → a non-renal cause (such as diarrhea) or a shift into cells.<br>Higher than that → renal loss.'),
      B('Urine potassium below ___ mEq/day points to a non-renal cause.', ['25', '100', '200'], 'Healthy kidneys conserve potassium when the body is short of it.'),
      L('Acid–base gives a clue', '• Hypokalemia + <b>metabolic acidosis</b> → diarrhea, renal tubular acidosis<br>• Hypokalemia + <b>metabolic alkalosis</b> → vomiting, diuretics, hyperaldosteronism<br>• With high blood pressure → think of hyperaldosteronism'),
      M('Hypokalemia with metabolic acidosis. Most likely cause?', ['Diarrhea', 'Vomiting', 'Thiazide diuretic', 'Hyperaldosteronism'], 'Diarrhea removes both potassium and bicarbonate from the body.'),
      T('In prolonged vomiting, most potassium is lost in the urine.', true, 'Alkalosis and high aldosterone increase renal potassium loss; gastric fluid itself contains little potassium.'),
      M('Hypokalemia + hypertension + metabolic alkalosis. What should you think of?', ['Primary hyperaldosteronism', 'Chronic diarrhea', 'Bartter syndrome', 'Laxative use'], 'Bartter and Gitelman syndromes have normal or low blood pressure.'),
      P('Match the pairs', [['Diarrhea', 'Metabolic acidosis'], ['Vomiting', 'Metabolic alkalosis'], ['Hyperaldosteronism', 'High blood pressure'], ['Thyrotoxic periodic paralysis', 'Shift into cells']]),
      N('k.need')
    ] },
    k3: { title: 'Giving potassium safely', items: [
      L('Red rules for IV KCl', '🚫 <b>Never</b> give KCl as an IV push (bolus) — it can cause cardiac arrest.<br>• Peripheral line: at most <b>10 mEq per hour</b><br>• Central line with cardiac monitoring: usually up to <b>20 mEq per hour</b><br>• Dilute in saline, not dextrose (dextrose → insulin → lower potassium)<br>• In kidney failure use lower doses and monitor more'),
      M('Usual maximum rate of KCl through a peripheral line?', ['10 mEq per hour', '40 mEq per hour', '1 mEq per hour', 'Rapid bolus'], '10 mEq/h; higher concentrations and rates cause phlebitis and arrhythmia risk.'),
      T('Concentrated KCl can be pushed directly IV.', false, 'Never! This is a well-known fatal medication error.'),
      N('k.time'),
      B('IV KCl is best diluted in ___.', ['normal saline', 'D5W', 'sterile water'], 'Dextrose stimulates insulin release and lowers potassium further.'),
      M('How should the potassium replacement dose change in kidney failure?', ['Lower, with closer monitoring', 'Doubled', 'Unchanged', 'Contraindicated'], 'Potassium excretion is reduced and treatment-induced hyperkalemia is a real risk.'),
      N('k.time'),
      N('k.need')
    ] },
    k4: { title: 'Emergency hyperkalemia', items: [
      L('The ECG in hyperkalemia', 'In order of severity:<br>1. Tall, peaked T waves<br>2. Prolonged PR and flattened P waves<br>3. Widened QRS<br>4. Sine wave → ventricular fibrillation or asystole<br><br>Any ECG change means an <b>emergency</b>, even if the number is not very high.'),
      O('Order the ECG changes from mild to severe', ['Peaked T waves', 'Prolonged PR and flattened P', 'Widened QRS', 'Sine wave']),
      L('Three steps: stabilize, shift, remove', '<b>1. Stabilize the cardiac membrane</b>: calcium gluconate 10%, 10 mL (1 g) over 2–3 minutes; repeat after 5 minutes if ECG changes persist. <i>It does not lower potassium!</i><br><b>2. Shift into cells</b>: regular insulin 10 units IV + 25 g dextrose (50 mL of D50); inhaled salbutamol 10–20 mg; bicarbonate only in metabolic acidosis<br><b>3. Remove</b>: loop diuretic, binders (sodium zirconium cyclosilicate, patiromer), dialysis'),
      M('First drug in hyperkalemia with a wide QRS?', ['Calcium gluconate', 'Insulin', 'Furosemide', 'Oral binder'], 'Protect the heart first; calcium works within minutes.'),
      T('Calcium gluconate lowers serum potassium.', false, 'No; it only stabilizes the cardiac membrane. Lowering potassium needs insulin, salbutamol and removal strategies.'),
      M('Usual insulin dose in hyperkalemia?', ['10 units regular IV + 25 g dextrose', '100 units regular IV', '10 units NPH subcutaneously', '2 units regular IV without dextrose'], 'IV regular insulin lowers potassium by about 0.6–1 mEq/L within 15–30 minutes.'),
      P('Match each treatment to its role', [['Calcium gluconate', 'Stabilizes the cardiac membrane'], ['Insulin + dextrose', 'Shifts K into cells'], ['Binders', 'Remove K through the gut'], ['Dialysis', 'Definitive removal in kidney failure']]),
      B('After insulin, blood glucose must be monitored because of the risk of ___.', ['hypoglycemia', 'hyperglycemia', 'hypernatremia'], 'Hypoglycemia can occur hours later, especially in kidney failure.')
    ] },
    k7: { title: 'Chronic hyperkalemia and drugs', items: [
      L('Drugs that raise potassium', 'ACE inhibitors, ARBs, spironolactone and eplerenone, <b>trimethoprim</b>, heparin, NSAIDs, tacrolimus and cyclosporine, non-selective beta-blockers, succinylcholine and digoxin toxicity.'),
      M('Which antibiotic acts like amiloride and causes hyperkalemia?', ['Trimethoprim', 'Amoxicillin', 'Azithromycin', 'Ciprofloxacin'], 'Trimethoprim blocks the sodium channel in the collecting duct.'),
      P('Match each drug to its mechanism', [['Spironolactone', 'Blocks the aldosterone receptor'], ['Heparin', 'Reduces aldosterone synthesis'], ['NSAID', 'Reduces renin'], ['Trimethoprim', 'Blocks the tubular sodium channel']]),
      T('In a patient with chronic kidney disease and potassium 5.5, the ACE inhibitor must always be stopped.', false, 'Often diet, diuretics and newer binders allow kidney-protective therapy to continue.'),
      L('Diet and binders', 'High-potassium foods: bananas, oranges, potatoes, tomatoes, dried fruit, legumes, and <b>salt substitutes</b> (potassium chloride!).<br>Binders: sodium zirconium cyclosilicate (onset about 1 hour), patiromer (about 7 hours), sodium polystyrene sulfonate (Kayexalate; risk of bowel necrosis).'),
      M('Which “low-sodium salt” is dangerous for a kidney patient?', ['A salt substitute containing potassium chloride', 'Regular iodized salt', 'Herbal seasoning', 'Lemon juice'], 'A teaspoon of these substitutes contains dozens of milliequivalents of potassium.'),
      M('Which potassium binder has the fastest onset?', ['Sodium zirconium cyclosilicate', 'Patiromer', 'Kayexalate', 'Sevelamer'], 'Sevelamer is a phosphate binder, not a potassium binder.'),
      B('The serious complication of Kayexalate is bowel ___.', ['necrosis', 'obstruction', 'bleeding'], 'Especially with sorbitol and after surgery.')
    ] },
    k8: { title: 'Potassium in ketoacidosis', items: [
      L('The DKA paradox', 'Serum potassium is often normal or even high, but total body stores are down by <b>3–5 mEq/kg</b> (osmotic diuresis).<br>Insulin and correction of acidosis drive potassium back into cells → a fast, dangerous fall.'),
      L('The ADA rule', tbl([['Serum potassium', 'Action'], ['Below 3.3', 'Hold insulin; give 20–30 mEq/h of potassium until 3.3'], ['3.3–5.2', '20–30 mEq of potassium in each liter of fluid; target 4–5'], ['Above 5.2', 'No potassium; recheck every 2 hours']])),
      N('k.dka'),
      T('In ketoacidosis with potassium 5.8, KCl should be started immediately.', false, 'Above 5.2 give no potassium, but recheck every 2 hours; insulin will bring it down.'),
      M('Why are body potassium stores low in ketoacidosis?', ['Osmotic diuresis and urinary loss', 'Poor food intake alone', 'Hemolysis', 'Diarrhea'], 'Glucose in the urine carries water and potassium with it.'),
      N('k.dka'),
      M('Which treatment in ketoacidosis lowers potassium the most?', ['Insulin', '0.9% saline', 'Potassium phosphate', 'Heparin'], 'Insulin activates the sodium–potassium pump.'),
      N('k.dka')
    ] },
    k5: { title: 'Potassium hospital', items: [
      M('Correct order of treatment?', ['Calcium gluconate → insulin and dextrose → dialysis', 'Dialysis → calcium', 'Oral binder only', 'Furosemide and wait'], 'Abnormal ECG: stabilize first, then shift, and in a dialysis patient remove definitively with dialysis.', [['Patient', 'On dialysis, missed a session'], ['Potassium', '7.2 mEq/L'], ['ECG', 'Peaked T waves']]),
      M('Best action?', ['Repeat the test with a non-hemolyzed sample', 'Immediate calcium gluconate', 'Urgent dialysis', 'Insulin and dextrose'], 'Pseudohyperkalemia is likely.', [['Potassium', '6.0 mEq/L'], ['Lab report', 'Hemolyzed sample'], ['ECG', 'Normal'], ['Patient', 'Asymptomatic']]),
      M('What should you do in ketoacidosis with potassium 3.1?', ['Replace potassium first and delay insulin until potassium reaches 3.3', 'Start full-dose insulin immediately', 'IV bicarbonate', 'Fluid restriction'], 'Insulin drives potassium into cells and causes fatal hypokalemia.'),
      N('k.need'),
      N('k.time'),
      T('A patient with potassium 2.5 and arrhythmia should get IV potassium through a central line with cardiac monitoring.', true, 'Correct. Severe symptomatic hypokalemia: IV, preferably central, with a cardiac monitor.'),
      M('A patient on digoxin has potassium 3.0. Why is prompt correction important?', ['Hypokalemia increases the risk of digoxin toxicity and arrhythmia', 'Digoxin raises potassium', 'It does not matter', 'Only because of muscle weakness'], 'Low potassium increases digoxin binding to the sodium–potassium pump.')
    ] },
    k9: { title: 'Potassium ICU', items: [
      L('Potassium management algorithm', '<b>Hyperkalemia</b><ol class="algo"><li>ECG and exclude a hemolyzed sample</li><li>ECG changes → calcium gluconate</li><li>Shift: insulin + dextrose, salbutamol</li><li>Remove: diuretic, binder, dialysis</li><li>Monitor glucose and potassium; stop offending drugs</li></ol><b>Hypokalemia</b><ol class="algo"><li>ECG and severity</li><li>Check magnesium</li><li>Route and dose (every 10 mEq ≈ 0.1)</li><li>Maximum rate and dilution in saline</li><li>Recheck and look for the cause</li></ol>'),
      O('Put the steps of hypokalemia management in order', ['Assess the ECG and severity', 'Check magnesium', 'Choose route and dose', 'Give at an allowed rate', 'Recheck and find the cause']),
      M('Best action?', ['Thyrotoxic periodic paralysis; low-dose potassium and propranolol', 'Rapid replacement of 200 mEq potassium', 'Dialysis', 'Insulin'], 'This is a shift, not a true deficit; large doses cause rebound hyperkalemia.', [['Patient', 'Man, 28, sudden weakness of all four limbs'], ['Potassium', '2.1'], ['Findings', 'Tachycardia, tremor, suppressed TSH']]),
      M('Specific treatment?', ['Digoxin-specific antibody fragments', 'Repeated calcium chloride boluses', 'Oral binder only', 'Salbutamol alone'], 'In digoxin toxicity, hyperkalemia signals severity and the antidote is the definitive treatment.', [['Drug', 'Digoxin, acute toxicity'], ['Potassium', '6.8'], ['ECG', 'Bradycardia and heart block']]),
      M('A patient with rhabdomyolysis, rising potassium and anuria. The most definitive treatment?', ['Dialysis', 'Oral binder', 'Bicarbonate alone', 'Furosemide'], 'Without urine, only dialysis removes potassium.'),
      O('Order the treatment of hyperkalemia with ECG changes', ['Calcium gluconate', 'Insulin and dextrose', 'Binder, diuretic or dialysis', 'Monitor glucose and potassium']),
      N('k.need'),
      N('k.dka'),
      T('Falsely high potassium occurs with severe leukocytosis or thrombocytosis.', true, 'Cells release potassium in the tube; measure plasma (not serum) potassium.'),
      N('k.time')
    ] },

    /* ================================ CALCIUM ================================ */
    ca1: { title: 'Calcium and albumin', items: [
      L('Three forms of calcium', 'Normal total calcium: <b>8.5–10.5 mg/dL</b><br>• About 45% <b>ionized</b> (active) — normal 4.5–5.3 mg/dL or 1.12–1.32 mmol/L<br>• About 40% bound to albumin<br>• The rest bound to anions (citrate, phosphate)'),
      M('Normal total serum calcium?', ['8.5–10.5 mg/dL', '4.5–5.3 mg/dL', '2.5–4.5 mg/dL', '1.7–2.2 mg/dL'], '4.5–5.3 is ionized calcium and 2.5–4.5 is phosphate.'),
      L('Low albumin? Correct the calcium', 'For every 1 g/dL fall in albumin below 4, total calcium reads about 0.8 lower:' + fx('Corrected Ca = Ca + 0.8 × (4 − Albumin)') + 'In critically ill ICU patients this formula is unreliable; measure <b>ionized calcium</b>.'),
      N('ca.corr'),
      T('In alkalosis, ionized calcium falls.', true, 'Correct. In alkalosis albumin binds more calcium, which is why hyperventilation causes tingling.'),
      M('Best calcium measure in a critically ill ICU patient?', ['Ionized calcium', 'Total calcium', 'Albumin-corrected calcium', 'Serum phosphate'], 'The albumin formula has large errors in critically ill patients.'),
      P('Match each item to its effect', [['PTH', 'Raises serum calcium'], ['Calcitonin', 'Lowers serum calcium'], ['Active vitamin D', 'Increases gut calcium absorption'], ['Low albumin', 'Lowers total, not ionized, calcium']]),
      N('ca.corr')
    ] },
    ca2: { title: 'Hypocalcemia', items: [
      L('Signs of hypocalcemia', 'Neuromuscular irritability:<br>• Perioral and fingertip tingling, cramps, tetany<br>• <b>Chvostek</b>: tapping the facial nerve → facial muscle twitch<br>• <b>Trousseau</b>: inflating a BP cuff → carpal spasm<br>• Seizures, laryngospasm<br>• ECG: <b>prolonged QT</b>'),
      M('After thyroidectomy, a patient has perioral tingling and carpal spasm when the BP cuff is inflated. What is this?', ['Trousseau sign of hypocalcemia', 'Hyperkalemia', 'Hypercalcemia', 'Hyponatremia'], 'Parathyroid injury after thyroidectomy is a common cause of hypocalcemia.'),
      B('Facial muscle twitching when the facial nerve is tapped is the ___ sign.', ['Chvostek', 'Trousseau', 'Babinski'], 'Chvostek: face. Trousseau: hand.'),
      M('ECG change in hypocalcemia?', ['Prolonged QT', 'Short QT', 'U wave', 'Peaked T wave'], 'Hypocalcemia prolongs the QT; hypercalcemia shortens it.'),
      L('Causes', '• Hypoparathyroidism (after neck surgery)<br>• Vitamin D deficiency<br>• <b>Hypomagnesemia</b> (PTH secretion and action are impaired)<br>• Chronic kidney disease<br>• Acute pancreatitis<br>• Massive transfusion (citrate binds calcium)'),
      T('Treatment-resistant hypocalcemia may be caused by magnesium deficiency.', true, 'Correct. Without enough magnesium, PTH is neither secreted properly nor effective.'),
      M('Massive blood transfusion leads to which disorder?', ['Hypocalcemia from citrate', 'Hypercalcemia', 'Hypernatremia', 'Hypermagnesemia'], 'Citrate, the anticoagulant in stored blood, binds ionized calcium.'),
      P('Match each sign to its description', [['Chvostek', 'Facial twitch when tapped'], ['Trousseau', 'Carpal spasm with a BP cuff'], ['Long QT', 'ECG finding'], ['Laryngospasm', 'Airway threat']])
    ] },
    ca6: { title: 'PTH and vitamin D', items: [
      L('The three main players', '• <b>PTH</b>: releases calcium from bone, increases renal calcium reabsorption, excretes phosphate, and increases active vitamin D production<br>• <b>Calcitriol</b> (active vitamin D): increases gut absorption of calcium and phosphate<br>• <b>25-hydroxyvitamin D</b>: marker of body stores'),
      M('Best marker of body vitamin D stores?', ['25-hydroxyvitamin D', '1,25-dihydroxyvitamin D', 'PTH', 'Urine calcium'], 'Calcitriol has a short half-life and may stay normal in deficiency.'),
      T('PTH increases renal phosphate reabsorption.', false, 'The opposite: PTH makes the kidneys excrete phosphate.'),
      M('Hypocalcemia + high phosphate + low PTH. Diagnosis?', ['Hypoparathyroidism', 'Vitamin D deficiency', 'Kidney failure', 'Pancreatitis'], 'No PTH → phosphate is not excreted.'),
      M('Hypocalcemia + low phosphate + high PTH. Diagnosis?', ['Vitamin D deficiency', 'Hypoparathyroidism', 'Hypermagnesemia', 'Vitamin D toxicity'], 'High PTH in response to vitamin D deficiency drives phosphate out.'),
      P('Match each pattern to its diagnosis', [['High PTH + high calcium', 'Primary hyperparathyroidism'], ['High PTH + low calcium', 'Secondary hyperparathyroidism'], ['Low PTH + high calcium', 'Malignancy or vitamin D'], ['Low PTH + low calcium', 'Hypoparathyroidism']]),
      B('Sunlight on the skin makes ___.', ['vitamin D3', 'vitamin K', 'calcitriol'], 'Calcitriol is made in the kidney.')
    ] },
    ca3: { title: 'Correcting hypocalcemia', items: [
      L('Symptomatic hypocalcemia', '• <b>Calcium gluconate 10%, 1–2 g</b> (10–20 mL) IV over 10–20 minutes<br>• Then an infusion of <b>0.5–1.5 mg elemental calcium per kg per hour</b><br>• Check and correct magnesium<br>• In mild or asymptomatic hypocalcemia: oral calcium and vitamin D'),
      L('Gluconate or chloride?', tbl([['', 'Elemental calcium per 1 g'], ['Calcium gluconate 10%', '≈ 93 mg (4.6 mEq)'], ['Calcium chloride 10%', '≈ 273 mg (13.6 mEq)']]) + 'Chloride is about <b>3 times</b> stronger but very irritating → preferably through a central line.<br>Do not give calcium in the same line as bicarbonate or phosphate (precipitation).'),
      N('ca.elem'),
      M('Calcium chloride 10% contains roughly how many times the elemental calcium of calcium gluconate 10%?', ['3 times', 'The same', '10 times', 'Half'], '273 versus 93 mg.'),
      M('Why is calcium chloride preferably given through a central line?', ['Severe irritation and tissue necrosis if it extravasates', 'It is less effective', 'It is more expensive', 'It must be refrigerated'], 'Extravasation of calcium chloride can cause skin and tissue necrosis.'),
      N('ca.inf'),
      T('Calcium can be infused in the same line as sodium bicarbonate.', false, 'No; calcium carbonate precipitates and blocks the line.'),
      T('In a patient taking digoxin, rapid calcium infusion requires caution and cardiac monitoring.', true, 'Correct. Calcium can worsen digoxin cardiotoxicity.')
    ] },
    ca4: { title: 'Hypercalcemia', items: [
      L('Stones, bones, groans and moans', '• <b>Stones</b>: kidney stones, polyuria<br>• <b>Bones</b>: bone pain<br>• <b>Groans</b>: constipation, nausea, pancreatitis<br>• <b>Moans</b>: fatigue, confusion, coma<br>ECG: <b>short QT</b>.<br><br>Over 90% of causes: <b>primary hyperparathyroidism</b> (most common in outpatients) and <b>malignancy</b> (most common in inpatients). Calcium above 14 mg/dL is severe.'),
      M('Most common cause of hypercalcemia in an outpatient?', ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D toxicity', 'Sarcoidosis'], 'Among inpatients, malignancy is more common.'),
      L('Treating severe hypercalcemia', '<b>1. Hydration</b>: IV 0.9% saline (for example 200–300 mL/h, aiming for urine output of 100–150 mL/h)<br><b>2. Calcitonin</b>: 4 units/kg subcutaneously or IM every 12 hours — works within hours, but the effect fades after 48 hours<br><b>3. Bisphosphonate</b>: zoledronic acid 4 mg IV over at least 15 minutes — effect after 2–4 days<br>• Denosumab in kidney failure, glucocorticoids for vitamin D–mediated causes, dialysis if refractory<br>• Loop diuretics only after volume repletion'),
      O('Order the steps for severe hypercalcemia by priority', ['Hydrate with 0.9% saline', 'Calcitonin for a fast effect', 'Zoledronic acid for a lasting effect', 'Find and treat the underlying cause']),
      T('Furosemide is first-line treatment for hypercalcemia in a dehydrated patient.', false, 'No. Hypercalcemic patients are usually dehydrated; give saline first. Diuretics only for volume overload.'),
      M('Which drug acts fastest but loses its effect after 48 hours?', ['Calcitonin', 'Zoledronic acid', 'Denosumab', 'Prednisolone'], 'Calcitonin tachyphylaxis.'),
      B('In hypercalcemia caused by lymphoma or sarcoidosis, ___ are effective.', ['glucocorticoids', 'calcium supplements', 'vitamin D supplements'], 'These causes produce excess active vitamin D.'),
      M('ECG change in hypercalcemia?', ['Short QT', 'Prolonged QT', 'Peaked T wave', 'U wave'], 'High calcium → short QT.')
    ] },
    ca7: { title: 'Hypercalcemic crisis', items: [
      L('Hypercalcemia of malignancy', '• <b>PTHrP</b>: the most common (e.g., squamous cell carcinoma)<br>• Osteolytic bone metastases (breast, myeloma)<br>• Calcitriol production (lymphoma)<br>In all of these, PTH is usually suppressed.'),
      M('Most common mechanism of hypercalcemia of malignancy?', ['PTHrP', 'Bone metastases', 'Calcitriol production', 'Ectopic PTH'], 'Parathyroid hormone–related protein.'),
      T('In hypercalcemia of malignancy, PTH is usually low.', true, 'High calcium suppresses PTH from the normal glands.'),
      N('ca.calcitonin'),
      M('A patient with high calcium and severe kidney failure. Which anti-resorptive agent is more suitable?', ['Denosumab', 'Full-dose zoledronic acid', 'Calcitonin indefinitely', 'Vitamin D'], 'Denosumab is not cleared by the kidneys; watch for hypocalcemia afterwards.'),
      L('Hypercalcemic crisis', 'Calcium above 14 with confusion, kidney failure or arrhythmia.<br>If heart or kidney failure prevents hydration → <b>dialysis with a low-calcium bath</b>.'),
      M('Severe hypercalcemia in a patient with heart failure who cannot tolerate fluids?', ['Dialysis', 'Saline at 500 mL/h', 'Calcium gluconate', 'A thiazide'], 'Dialysis lowers calcium quickly without a fluid load.'),
      B('Thiazides ___ urinary calcium excretion.', ['decrease', 'increase', 'sharply increase'], 'That is why they are avoided in hypercalcemia and helpful in hypercalciuric stones.')
    ] },
    ca8: { title: 'Calcium, kidneys and stones', items: [
      L('Kidney failure and bone', 'Less active vitamin D + phosphate retention → hypocalcemia and <b>secondary hyperparathyroidism</b>.<br>Treatment: control phosphate, active vitamin D or its analogues, a calcimimetic (cinacalcet).'),
      M('Calcimimetic drug for secondary hyperparathyroidism?', ['Cinacalcet', 'Sevelamer', 'Calcitonin', 'Alendronate'], 'It sensitizes the parathyroid calcium-sensing receptor.'),
      L('Calcium kidney stones', 'The most common stone: <b>calcium oxalate</b>.<br>Contrary to intuition, <b>do not restrict dietary calcium</b>; dietary calcium binds oxalate in the gut.<br>Advice: enough fluid (urine over 2–2.5 L), low sodium, moderate animal protein, citrate.'),
      T('To prevent calcium oxalate stones, dietary calcium should be severely restricted.', false, 'Calcium restriction increases oxalate absorption and stone risk.'),
      M('Which drug lowers urinary calcium and helps in hypercalciuric stones?', ['Hydrochlorothiazide', 'Furosemide', 'Vitamin D', 'Calcitonin'], 'Thiazides increase calcium reabsorption in the distal tubule.'),
      M('Fluid advice for stone prevention?', ['Urine output above 2–2.5 L per day', 'Less than 1 liter', 'Only calcium-rich mineral water', 'Cola drinks'], 'Dilute urine → less supersaturation.'),
      P('Match the pairs', [['Potassium citrate', 'Inhibits stone formation'], ['Cinacalcet', 'Lowers PTH'], ['Calcitriol', 'Active vitamin D'], ['Furosemide', 'Increases calcium excretion']]),
      N('ca.corr')
    ] },
    ca5: { title: 'Calcium hospital', items: [
      M('Which statement is correct?', ['Corrected calcium is normal; no urgent treatment needed', 'Immediate calcium gluconate', 'Calcium chloride through a central line', 'High-dose vitamin D'], 'Corrected calcium = 7.6 + 0.8 × (4 − 2) = 9.2 → normal.', [['Total calcium', '7.6 mg/dL'], ['Albumin', '2.0 g/dL'], ['Symptoms', 'None']]),
      M('Best initial plan?', ['0.9% saline + calcitonin + zoledronic acid', 'Furosemide alone', 'Fluid restriction', 'Calcium gluconate'], 'Severe hypercalcemia of malignancy: hydration, calcitonin for speed and a bisphosphonate for lasting effect.', [['Patient', 'Lung cancer'], ['Calcium', '14.5 mg/dL'], ['Status', 'Confused and dehydrated']]),
      N('ca.corr'),
      N('ca.elem'),
      N('ca.inf'),
      M('Next step?', ['Measure and correct magnesium', 'Double the calcium dose', 'Calcitonin', 'Furosemide'], 'Hypocalcemia with magnesium deficiency will not resolve until magnesium is corrected.', [['Patient', 'Long-term omeprazole and chronic diarrhea'], ['Calcium', 'Still low despite IV calcium'], ['Magnesium', 'Not measured']]),
      T('After massive transfusion, ionized calcium should be monitored.', true, 'Correct. Citrate in stored blood lowers ionized calcium.')
    ] },
    ca9: { title: 'Calcium ICU', items: [
      L('Calcium management algorithm', '<ol class="algo"><li>Correct calcium for albumin or measure ionized calcium</li><li>Symptoms and ECG (QT)</li><li>Symptomatic hypocalcemia → IV calcium gluconate, then an infusion</li><li>Correct magnesium</li><li>Cause: PTH, vitamin D, phosphate, kidneys</li></ol><b>Severe hypercalcemia</b>: saline → calcitonin → bisphosphonate → cause'),
      O('Put the steps of hypocalcemia management in order', ['Correct for albumin or measure ionized calcium', 'Assess symptoms and ECG', 'Give IV calcium if symptomatic', 'Correct magnesium', 'Find the cause']),
      M('Best action?', ['IV calcium (chloride or gluconate)', 'Wait for spontaneous correction', 'Oral vitamin D', 'Bicarbonate'], 'Citrate-induced hypocalcemia impairs cardiac contraction and coagulation.', [['Patient', 'Major trauma, 10 units of blood'], ['Ionized calcium', '0.8 mmol/L'], ['Blood pressure', 'Low']]),
      M('Which statement is correct?', ['Corrected calcium is about 9.2 and normal; measure ionized calcium', 'Immediate calcium chloride', 'IV vitamin D', 'Furosemide'], '7.8 + 0.8 × (4 − 2.2) = 9.24', [['Patient', 'Acute pancreatitis'], ['Total calcium', '7.8'], ['Albumin', '2.2'], ['Symptoms', 'None']]),
      M('Diagnosis?', ['Hungry bone syndrome; IV calcium, calcitriol, and monitoring of phosphate and magnesium', 'Rebound hypercalcemia', 'Lab error', 'Vitamin D toxicity'], 'After adenoma removal, bone avidly takes up calcium, phosphate and magnesium.', [['Patient', 'Two days after parathyroidectomy'], ['Calcium', 'Fell sharply to 6.9'], ['Phosphate and magnesium', 'Low']]),
      N('ca.elem'),
      N('ca.inf'),
      N('ca.calcitonin'),
      T('Giving calcium to a patient with severe hyperphosphatemia risks tissue deposition.', true, 'Give calcium only for symptomatic hypocalcemia and control phosphate at the same time.')
    ] },

    /* ================================ MAGNESIUM ================================ */
    mg1: { title: 'Meet magnesium', items: [
      L('Hidden magnesium', 'Approximate normal range: <b>1.7–2.2 mg/dL</b> (0.7–0.95 mmol/L; lab-dependent).<br>Most magnesium is in <b>bone</b> and inside cells; less than 1% is in serum. So a normal serum level does not rule out a body deficit.<br>It is a cofactor for more than 300 enzymes, including the sodium–potassium pump.'),
      L('Unit conversion', fx('1 mmol/L = 2.43 mg/dL = 2 mEq/L') + fx('1 g MgSO₄ ≈ 8.1 mEq ≈ 4 mmol ≈ 99 mg Mg')),
      N('mg.conv'),
      T('A normal serum magnesium rules out total body magnesium deficiency.', false, 'No. Less than 1% of magnesium is in serum; a tissue deficit can exist with a normal serum level.'),
      B('Most of the body’s magnesium is stored in ___.', ['bone', 'plasma', 'liver'], 'About 60% is in bone.'),
      M('Which drug is known to cause hypomagnesemia?', ['Omeprazole (a proton pump inhibitor)', 'Amlodipine', 'Paracetamol', 'Levothyroxine'], 'Long-term PPI use reduces gut magnesium absorption.'),
      P('Match each cause to its mechanism', [['Alcohol use disorder', 'Low intake and high losses'], ['Chronic diarrhea', 'GI losses'], ['Loop diuretic', 'Increased renal losses'], ['Kidney failure', 'Accumulation and hypermagnesemia']]),
      N('mg.meq')
    ] },
    mg2: { title: 'The Mg–K–Ca triangle', items: [
      L('Magnesium leads the group', '• Magnesium deficiency → renal potassium wasting → <b>refractory hypokalemia</b><br>• Magnesium deficiency → less PTH secretion and action → <b>refractory hypocalcemia</b><br><br>Rule: any refractory hypokalemia or hypocalcemia → <b>check magnesium and correct it first</b>.'),
      M('A patient still has potassium 3.0 despite 160 mEq of KCl. The most likely problem?', ['Magnesium deficiency', 'Sodium deficiency', 'Calcium deficiency', 'Phosphate deficiency'], 'Without magnesium, renal potassium channels waste potassium.'),
      T('In severe hypomagnesemia, PTH secretion is impaired.', true, 'Correct, which is why it causes hypocalcemia.'),
      L('Torsades de pointes', 'Polymorphic ventricular tachycardia with a long QT.<br>Treatment: <b>magnesium sulfate 1–2 g IV over 5–20 minutes</b> (faster in pulseless arrest), even if the magnesium level is normal.'),
      B('The drug of choice for torsades de pointes is ___.', ['magnesium sulfate', 'amiodarone', 'adenosine'], 'Magnesium works even at a normal level.'),
      M('Which arrhythmia is most associated with hypomagnesemia?', ['Torsades de pointes', 'Sinus bradycardia', 'Right bundle branch block', 'Junctional rhythm'], 'Low magnesium prolongs the QT and sets the stage for torsades.'),
      P('Match the pairs', [['Hypomagnesemia', 'Refractory hypokalemia'], ['Insufficient PTH', 'Hypocalcemia'], ['Long QT', 'Torsades de pointes'], ['Magnesium sulfate', 'Treats torsades']])
    ] },
    mg6: { title: 'Causes of hypomagnesemia', items: [
      L('Where does magnesium go?', '• <b>GI</b>: chronic diarrhea, malabsorption, long-term PPIs, alcohol<br>• <b>Renal</b>: loop and thiazide diuretics, aminoglycosides, amphotericin B, <b>cisplatin</b>, tacrolimus, Gitelman syndrome<br>• <b>Redistribution</b>: refeeding, pancreatitis, hungry bone syndrome'),
      M('Which chemotherapy drug causes severe renal hypomagnesemia?', ['Cisplatin', 'Doxorubicin', 'Low-dose methotrexate', 'Tamoxifen'], 'Cisplatin tubular injury may last for months.'),
      T('Amphotericin B can waste magnesium and potassium in the urine.', true, 'Distal tubular injury.'),
      L('Check the urine: FEMg', fx('FEMg = (U<sub>Mg</sub> × S<sub>Cr</sub>) / (0.7 × S<sub>Mg</sub> × U<sub>Cr</sub>) × 100') + '• Below 2% → GI cause<br>• Above 2–4% → renal wasting<br><small>The 0.7 factor: only about 70% of serum magnesium is filtered.</small>'),
      N('mg.femg'),
      M('FEMg of 0.8% in a patient with chronic diarrhea. Interpretation?', ['GI cause; the kidneys are conserving magnesium', 'Renal wasting', 'Lab error', 'Kidney failure'], 'Healthy kidneys conserve magnesium in deficiency.'),
      P('Match each cause to its mechanism', [['Omeprazole', 'Reduced gut absorption'], ['Cisplatin', 'Renal wasting'], ['Alcohol', 'Urinary loss and low intake'], ['Pancreatitis', 'Deposition in fat tissue']]),
      B('___ syndrome features hypomagnesemia, hypokalemia and low urine calcium.', ['Gitelman', 'Cushing', 'Conn'], 'It resembles chronic thiazide use.')
    ] },
    mg3: { title: 'Correcting hypomagnesemia', items: [
      L('Sample IV magnesium sulfate protocol', 'For adults with normal kidney function:' + tbl([['Magnesium (mg/dL)', 'Dose'], ['1.5–1.6', '1–2 g (or oral if asymptomatic)'], ['1.0–1.4', '2–4 g'], ['Below 1.0 or symptomatic', '4–8 g over 12–24 hours']]) + '• When not an emergency, infuse slowly (for example about 1 g per hour); fast infusion sends much of it into the urine<br>• In kidney failure (eGFR below 30) give about 50% less and monitor closely<br><small>Match the exact dose to your hospital protocol.</small>'),
      N('mg.tier'),
      N('mg.meq'),
      M('How should the IV magnesium dose change with eGFR below 30?', ['About 50% lower with close monitoring', 'Doubled', 'Unchanged', 'Absolutely contraindicated'], 'The risk of hypermagnesemia is high in kidney failure.'),
      T('The most common side effect of oral magnesium is diarrhea.', true, 'Correct, which is why IV is preferred in severe deficiency.'),
      T('When not an emergency, slower magnesium infusion keeps more of it in the body.', true, 'Correct. A sudden rise in serum level reduces renal reabsorption and increases urinary loss.'),
      N('mg.tier'),
      N('mg.conv')
    ] },
    mg4: { title: 'Hypermagnesemia and pre-eclampsia', items: [
      L('When magnesium is too high', 'Causes: kidney failure plus magnesium-containing antacids, laxatives or enemas; treatment of pre-eclampsia.<br>Signs as the level rises:<br>1. Loss of <b>deep tendon reflexes</b> (the first sign)<br>2. Hypotension and bradycardia<br>3. Respiratory depression<br>4. Cardiac arrest'),
      O('Order the signs of magnesium toxicity from mild to severe', ['Loss of deep tendon reflexes', 'Hypotension and bradycardia', 'Respiratory depression', 'Cardiac arrest']),
      L('Magnesium sulfate in pre-eclampsia', '• Loading dose: <b>4–6 g</b> IV over 15–20 minutes<br>• Maintenance: <b>1–2 g per hour</b><br>• Monitor: patellar reflex, respiratory rate (above 12), urine output (above 30 mL/h)<br>• Antidote: <b>calcium gluconate 1 g</b> IV, slowly'),
      M('Antidote for magnesium toxicity?', ['Calcium gluconate', 'Naloxone', 'Flumazenil', 'Protamine'], 'Calcium counteracts magnesium’s effect on membranes and the neuromuscular junction.'),
      M('The first clinical sign of magnesium toxicity to monitor?', ['Loss of the patellar reflex', 'Tachycardia', 'Fever', 'Hypertension'], 'Reflexes disappear before breathing and the heart are affected.'),
      B('The loading dose of magnesium sulfate in pre-eclampsia is ___ g.', ['4–6', '10–20', '0.5'], '4–6 g over 15–20 minutes.'),
      T('Magnesium-containing laxatives are safe in kidney failure.', false, 'No; the kidneys cannot excrete magnesium and dangerous hypermagnesemia follows.')
    ] },
    mg7: { title: 'Magnesium for heart and asthma', items: [
      L('Magnesium in the emergency department', '• <b>Torsades de pointes</b>: 1–2 g IV<br>• <b>Acute severe asthma</b>: adults 2 g IV over 20 minutes; children about 40 mg/kg (maximum 2 g)<br>• Prevention of atrial fibrillation after cardiac surgery<br>• Eclampsia'),
      M('IV magnesium sulfate dose for a severe asthma attack in an adult?', ['2 g over 20 minutes', '10 g bolus', '200 mg', '4 g per hour for 24 hours'], 'Magnesium relaxes bronchial smooth muscle.'),
      N('mg.asthmaChild'),
      T('IV magnesium works in torsades de pointes even with a normal magnesium level.', true, 'Its antiarrhythmic effect does not depend on a deficit.'),
      M('What is the benefit of keeping magnesium around 2 mg/dL or higher in cardiac patients?', ['Lower arrhythmia risk', 'Higher blood pressure', 'Lower glucose', 'Higher urine potassium'], 'Especially after cardiac surgery and with a long QT.'),
      T('Very rapid magnesium infusion can cause flushing and hypotension.', true, 'Magnesium is a vasodilator.'),
      B('In a child with severe asthma, the magnesium dose is about ___ mg per kg.', ['40', '400', '4'], 'Maximum 2 g.'),
      N('mg.asthmaChild')
    ] },
    mg8: { title: 'Magnesium in food and tablets', items: [
      L('Food sources', 'Green leafy vegetables (magnesium sits at the center of <b>chlorophyll</b>), nuts and seeds (almonds, pumpkin seeds), legumes, whole grains and dark chocolate.<br>Adult daily requirement: about <b>310–420 mg</b>.'),
      M('Magnesium sits at the center of which molecule?', ['Chlorophyll', 'Hemoglobin', 'Insulin', 'Vitamin B12'], 'Hemoglobin contains iron and B12 contains cobalt.'),
      M('Approximate adult daily magnesium requirement?', ['310–420 mg', '30 mg', '3 g', '10 g'], 'Slightly higher in men than in women.'),
      L('Magnesium tablets', '• <b>Magnesium oxide</b>: a lot of elemental magnesium but poor absorption and more diarrhea<br>• Citrate, lactate, chloride and glycinate: better absorbed<br>• Split the dose to reduce diarrhea<br>• Separate from levothyroxine, bisphosphonates, tetracyclines and quinolones'),
      M('Which magnesium salt is least absorbed?', ['Magnesium oxide', 'Magnesium glycinate', 'Magnesium lactate', 'Magnesium chloride'], 'Low solubility.'),
      T('Oral magnesium reduces the absorption of levothyroxine and quinolone antibiotics.', true, 'Leave a few hours between them.'),
      P('Match each item to its feature', [['Pumpkin seeds', 'Very rich in magnesium'], ['Spinach', 'Magnesium in chlorophyll'], ['Magnesium oxide', 'Poor absorption, more diarrhea'], ['Magnesium glycinate', 'Better absorbed, gentler']]),
      N('mg.meq')
    ] },
    mg5: { title: 'Magnesium hospital', items: [
      M('Best action?', ['Stop magnesium sulfate and give IV calcium gluconate', 'Increase the magnesium dose', 'Furosemide', 'Continue treatment and monitor'], 'Absent reflexes and slow breathing: signs of toxicity.', [['Patient', 'Pregnant with pre-eclampsia'], ['Treatment', 'Magnesium sulfate 2 g per hour'], ['Findings', 'No patellar reflex, breathing 10/min']]),
      M('What should you do?', ['Magnesium sulfate 2 g IV over 5–20 minutes', 'Adenosine', 'Digoxin', 'Calcium chloride'], 'Torsades de pointes with a pulse → magnesium sulfate.', [['ECG', 'Polymorphic ventricular tachycardia with long QT'], ['Patient', 'Has a pulse']]),
      N('mg.tier'),
      N('mg.meq'),
      N('mg.conv'),
      M('A patient with alcohol use disorder has hypokalemia, hypocalcemia and magnesium 0.8. Correct order?', ['Correct magnesium together with or before potassium and calcium', 'Potassium only', 'Calcium only', 'Calcium first; magnesium is not needed'], 'Potassium and calcium will not stabilize until magnesium is corrected.')
    ] },
    mg9: { title: 'Magnesium ICU', items: [
      L('Magnesium management algorithm', '<ol class="algo"><li>Magnesium level and symptoms (arrhythmia, seizures, tetany)</li><li>Kidney function</li><li>Choose the dose by severity; halve it if eGFR is below 30</li><li>Infuse slowly when not an emergency</li><li>Recheck; correct potassium and calcium at the same time</li></ol>'),
      O('Put the steps of hypomagnesemia management in order', ['Check the level and symptoms', 'Check kidney function', 'Choose the dose', 'Infuse slowly', 'Recheck and correct potassium and calcium']),
      M('Key step?', ['Measure and replace magnesium IV', 'Just increase KCl', 'Stop calcium', 'Dialysis'], 'Furosemide and aminoglycosides both waste magnesium.', [['Patient', 'ICU, on furosemide and gentamicin'], ['Potassium', 'Resistant to replacement'], ['Calcium', 'Low']]),
      M('Best adjustment?', ['Reduce the maintenance dose and monitor magnesium levels and reflexes', 'Usual dose', 'Double the dose', 'Stop completely with no replacement'], 'Magnesium is excreted by the kidneys; oliguria means accumulation.', [['Patient', 'Pre-eclampsia'], ['Creatinine', '2.1'], ['Urine output', '15 mL per hour']]),
      N('mg.tier'),
      N('mg.femg'),
      N('mg.asthmaChild'),
      T('With eGFR below 30, magnesium-containing laxatives can cause dangerous hypermagnesemia.', true, 'In kidney failure use magnesium-free laxatives.'),
      M('Usual magnesium target after cardiac surgery?', ['About 2 mg/dL or higher', 'Below 1 mg/dL', 'Above 6 mg/dL', 'It does not matter'], 'To reduce atrial and ventricular arrhythmias.')
    ] },

    /* ================================ PHOSPHATE ================================ */
    p1: { title: 'Phosphate, the cell’s battery', items: [
      L('Why phosphate matters', 'Normal adult range: <b>2.5–4.5 mg/dL</b> (0.8–1.45 mmol/L). Higher in children.<br>• Makes <b>ATP</b>: energy for every cell<br>• <b>2,3-DPG</b>: releases oxygen from hemoglobin<br>• Cell membranes and bone (about 85% is in bone)'),
      M('Normal adult serum phosphate?', ['2.5–4.5 mg/dL', '8.5–10.5 mg/dL', '1.7–2.2 mg/dL', '3.5–5.0 mg/dL'], '2.5–4.5.'),
      L('Unit conversion', fx('P (mmol/L) = P (mg/dL) ÷ 3.1')),
      N('p.conv'),
      T('Children have a higher normal phosphate range than adults.', true, 'Correct, because of bone growth.'),
      P('Match each item to its role', [['ATP', 'The cell’s energy source'], ['2,3-DPG', 'Releases oxygen from hemoglobin'], ['PTH', 'Increases renal phosphate excretion'], ['Calcitriol', 'Increases gut phosphate absorption']]),
      M('Severe phosphate deficiency does NOT lead to…', ['Hyperkalemia', 'Respiratory muscle weakness', 'Hemolysis', 'Rhabdomyolysis'], 'ATP depletion → muscle weakness (including the diaphragm), hemolysis and rhabdomyolysis.'),
      N('p.conv')
    ] },
    p2: { title: 'Refeeding syndrome', items: [
      L('What is refeeding?', 'After prolonged starvation, a sudden carbohydrate load → <b>insulin</b> release → phosphate, potassium and magnesium move into cells → serum levels crash.<br>Result: heart failure, respiratory failure, arrhythmia, seizures and even death. <b>Thiamine</b> deficiency → Wernicke encephalopathy.<br>The hallmark lab finding: <b>hypophosphatemia</b>.'),
      B('In refeeding, ___ release drives phosphate into cells.', ['insulin', 'glucagon', 'cortisol'], 'Insulin carries phosphate into cells to make ATP and glycogen.'),
      L('Who is at high risk?', '<b>One of these</b>:<br>• BMI below 16<br>• Unintentional weight loss over 15% in 3–6 months<br>• Negligible intake for more than 10 days<br>• Low potassium, phosphate or magnesium before feeding<br><b>Or two of these</b>:<br>• BMI below 18.5 • Weight loss over 10% • Negligible intake for more than 5 days • History of alcohol use or drugs such as insulin, chemotherapy, antacids and diuretics'),
      L('Prevention', '• Start with <b>10 kcal/kg/day</b> (in extreme cases such as BMI below 14 or more than 15 days without food: <b>5 kcal/kg</b>)<br>• Increase slowly over 4–7 days<br>• <b>Thiamine</b> 200–300 mg per day, before feeding starts<br>• Measure and correct phosphate, potassium and magnesium; monitor daily in the first week'),
      M('Which action is correct?', ['High risk; start with 10 kcal/kg and give thiamine before feeding', 'Start with 35 kcal/kg to catch up fast', 'Delay feeding until weight recovers', 'Only 10% dextrose'], 'One major criterion (BMI below 16 or more than 10 days without food) is enough.', [['BMI', '15'], ['Food intake', 'Negligible for 12 days']]),
      N('p.refeed'),
      T('Thiamine should be given before feeding starts.', true, 'Correct; glucose without thiamine can unmask Wernicke encephalopathy.'),
      M('The hallmark electrolyte in refeeding syndrome?', ['Phosphate', 'Sodium', 'Chloride', 'Calcium'], 'Hypophosphatemia is the key sign.')
    ] },
    p6: { title: 'Causes of hypophosphatemia', items: [
      L('Three ways phosphate falls', '<b>1. Shift into cells</b>: refeeding, insulin in ketoacidosis, respiratory alkalosis, hungry bone<br><b>2. Poor absorption</b>: aluminum or magnesium antacids, malabsorption, vitamin D deficiency, alcohol<br><b>3. Renal loss</b>: hyperparathyroidism, Fanconi syndrome, high FGF23 (for example after ferric carboxymaltose infusion)'),
      M('Which acid–base disorder lowers phosphate?', ['Respiratory alkalosis', 'Respiratory acidosis', 'Chronic metabolic acidosis', 'None of these'], 'Alkalosis activates glycolysis and phosphate is used to make phosphorylated compounds.'),
      T('IV ferric carboxymaltose can cause hypophosphatemia.', true, 'By raising FGF23 and renal phosphate loss.'),
      M('In ketoacidosis, initial phosphate may be normal. What happens after insulin starts?', ['It falls', 'It rises', 'It stays the same', 'It drops to zero'], 'Like potassium, body stores are low and insulin drives it into cells.'),
      L('Urine phosphate: FEPO4', fx('FEPO4 = (U<sub>P</sub> × S<sub>Cr</sub>) / (S<sub>P</sub> × U<sub>Cr</sub>) × 100') + 'In hypophosphatemia, FEPO4 <b>above 5%</b> → renal wasting. Lower → shift or poor absorption.'),
      N('p.fepo4'),
      P('Match each cause to its mechanism', [['Refeeding', 'Shift into cells'], ['Aluminum antacid', 'Binding in the gut'], ['Hyperparathyroidism', 'Renal loss'], ['Fanconi syndrome', 'Proximal tubule reabsorption defect']])
    ] },
    p3: { title: 'Correcting hypophosphatemia', items: [
      L('Oral or IV?', 'Mild to moderate hypophosphatemia in a patient who can eat → <b>oral</b> (common side effect: diarrhea).<br>Severe, symptomatic, or critically ill → <b>IV</b>.'),
      L('Sample weight-based IV protocol', 'For critically ill patients with normal kidneys:' + tbl([['Phosphate (mg/dL)', 'Dose'], ['2.3–3.0', '0.16 mmol/kg'], ['1.6–2.2', '0.32 mmol/kg'], ['1.5 or less', '0.64 mmol/kg']]) + 'Over <b>4–6 hours</b>. Lower doses in kidney failure.<br><small>Follow your hospital protocol for maximum dose and rate.</small>'),
      N('p.dose'),
      L('Potassium phosphate or sodium phosphate?', tbl([['Per mL', 'Phosphate', 'Accompanying cation'], ['Potassium phosphate', '3 mmol', '4.4 mEq potassium'], ['Sodium phosphate', '3 mmol', '4 mEq sodium']]) + '• Potassium below 4 and normal kidneys → potassium phosphate<br>• Potassium 4 or higher → sodium phosphate<br>• Fast infusion → hypocalcemia and calcium–phosphate precipitation'),
      N('p.kphos'),
      M('A patient has potassium 5.1 and phosphate 1.4. Which product?', ['Sodium phosphate', 'Potassium phosphate', 'Calcium phosphate', 'It does not matter'], 'Potassium is above 4; do not add more.'),
      T('Fast phosphate infusion can cause hypocalcemia.', true, 'Correct; phosphate precipitates calcium.'),
      M('A calcium × phosphate product above 55–60 signals a risk of…', ['Calcium–phosphate deposition in tissues', 'Hyperkalemia', 'Hyponatremia', 'Respiratory acidosis'], 'In this case, do not give IV phosphate.')
    ] },
    p4: { title: 'Hyperphosphatemia', items: [
      L('Too much phosphate', 'Causes: <b>chronic kidney disease</b> (the most common), tumor lysis syndrome, rhabdomyolysis, sodium phosphate enemas, hypoparathyroidism.<br>Consequences: hypocalcemia, vascular calcification, itching, secondary hyperparathyroidism.'),
      L('Treatment', '• Diet: <b>800–1000 mg phosphate per day</b><br>• Additive phosphate in processed foods and colas is about 90% absorbed; plant phosphate (because of phytate) about 40–50%<br>• <b>Binders with meals</b>: calcium acetate or carbonate, sevelamer, lanthanum<br>• Dialysis in end-stage kidney disease or severe acute cases'),
      M('Which phosphate source is absorbed the most?', ['Phosphate additives in processed foods and cola drinks', 'Legumes', 'Whole grains', 'Nuts'], 'Inorganic additive phosphate is almost completely absorbed.'),
      B('Phosphate binders should be taken ___.', ['with meals', 'on an empty stomach at bedtime', 'once a week'], 'The binder has to meet that meal’s phosphate in the gut.'),
      M('Dietary phosphate limit in chronic kidney disease?', ['800–1000 mg per day', '100 mg per day', '3000 mg per day', 'No limit needed'], '800–1000 mg with attention to the quality of the source.'),
      T('Sevelamer is a calcium-free phosphate binder.', true, 'Correct; suitable for patients with high calcium or vascular calcification.'),
      P('Match each binder to its type', [['Calcium acetate', 'Calcium-based binder'], ['Sevelamer', 'Calcium-free, metal-free'], ['Lanthanum', 'Calcium-free metal binder'], ['Dialysis', 'Phosphate removal in ESKD']]),
      M('Which pattern is seen in tumor lysis syndrome?', ['High phosphate, potassium and uric acid with low calcium', 'All electrolytes low', 'Only high sodium', 'High calcium and low phosphate'], 'Tumor cells release their intracellular contents.'),
      N('p.caxp')
    ] },
    p7: { title: 'Phosphate on the kidney-friendly plate', items: [
      L('Hidden phosphate', 'Check labels for any word containing “phosphate”: sodium phosphate, <b>phosphoric acid</b>, polyphosphate.<br>Additive sources: sausages and cold cuts, pizza and processed cheese, cola drinks, ready meals.<br>Natural sources: dairy, meat, legumes, nuts.'),
      M('Which label ingredient signals added phosphate?', ['Phosphoric acid', 'Citric acid', 'Ascorbic acid', 'Acetic acid'], 'Phosphoric acid is found in cola drinks.'),
      L('Phosphate per gram of protein', 'Dialysis patients need enough protein, so choose sources with less phosphate per gram of protein: <b>egg white</b> (very low), fresh chicken and fish.<br>Processed cheese and cold cuts are the worst.'),
      M('Which protein source has the least phosphate per gram of protein?', ['Egg white', 'Processed cheese slices', 'Cold cuts', 'Egg yolk'], 'Most of an egg’s phosphate is in the yolk.'),
      T('Boiling meat and discarding the water reduces some of its phosphate.', true, 'Phosphate and potassium move into the cooking water.'),
      M('Phosphate is 7.5 and the patient takes the binder in the morning on an empty stomach. Most important fix?', ['Take the binder with meals', 'Double the morning dose', 'Stop the binder', 'Take it at bedtime'], 'The binder must be in the gut together with the food.'),
      B('Besides phosphate, sevelamer also slightly lowers ___.', ['LDL cholesterol', 'blood glucose', 'potassium'], 'It also binds bile acids.'),
      P('Match each food to its feature', [['Cola drinks', 'Highly absorbable additive phosphate'], ['Egg white', 'Protein with little phosphate'], ['Legumes', 'Phytate phosphate, less absorbed'], ['Pizza cheese', 'High phosphate']])
    ] },
    p8: { title: 'Tumor lysis and rhabdomyolysis', items: [
      L('Tumor lysis syndrome', 'After starting chemotherapy for sensitive tumors (Burkitt lymphoma, acute leukemia).<br>Laboratory criteria (Cairo–Bishop), two or more of: uric acid ≥ 8, potassium ≥ 6, <b>phosphate ≥ 4.5</b> (adults), calcium ≤ 7 — or a 25% change from baseline.'),
      M('Laboratory phosphate criterion for tumor lysis in adults?', ['4.5 mg/dL or higher', '2.5 mg/dL', '10 mg/dL', '1 mg/dL'], 'In children it is 6.5.'),
      L('Prevention and treatment', '• Generous hydration<br>• Allopurinol, or <b>rasburicase</b> in high-risk patients (contraindicated in G6PD deficiency)<br>• Frequent electrolyte monitoring<br>• Do not treat <b>asymptomatic</b> hypocalcemia (calcium–phosphate precipitation)'),
      M('Which drug is contraindicated in G6PD deficiency?', ['Rasburicase', 'Allopurinol', 'Saline', 'Furosemide'], 'The hydrogen peroxide it produces causes hemolysis and methemoglobinemia.'),
      T('In tumor lysis, asymptomatic hypocalcemia should be treated with IV calcium.', false, 'Only symptomatic hypocalcemia; extra calcium with high phosphate precipitates.'),
      L('Rhabdomyolysis', 'Muscle breakdown → release of potassium, phosphate and myoglobin → kidney injury.<br>Early phase: hypocalcemia (deposition in muscle). Recovery phase: hypercalcemia may occur.<br>Main treatment: <b>early, generous hydration</b>.'),
      M('Main treatment of rhabdomyolysis?', ['Early, generous hydration', 'Fluid restriction', 'IV calcium for everyone', 'Potassium'], 'The goal is high urine output to clear myoglobin.'),
      N('p.caxp')
    ] },
    p5: { title: 'Phosphate hospital', items: [
      M('Most likely cause?', ['Refeeding syndrome', 'Kidney failure', 'Hypoparathyroidism', 'Lab error'], 'Feeding after prolonged starvation + falling phosphate = refeeding.', [['Patient', 'Anorexia nervosa, BMI = 14'], ['Day 2 of feeding', 'Phosphate fell from 3.2 to 1.1'], ['Symptoms', 'Breathlessness and weakness']]),
      N('p.dose'),
      N('p.kphos'),
      N('p.refeed'),
      N('p.caxp'),
      M('Best action?', ['Temporarily reduce calories and replace phosphate, potassium and magnesium', 'Increase calories to catch up', 'Stop feeding completely and permanently', 'Dextrose infusion only'], 'In refeeding: reduce calories, replace electrolytes, then increase slowly again.'),
      T('In a patient with calcium 10 and phosphate 7, IV phosphate is safe.', false, 'The product is 70; deposition risk. And a phosphate of 7 is already high!')
    ] },
    p9: { title: 'Phosphate ICU', items: [
      L('Phosphate management algorithm', '<ol class="algo"><li>Assess refeeding risk and the cause</li><li>Severity and symptoms (respiratory weakness, hemolysis)</li><li>Route: oral if mild, IV if severe</li><li>Product according to potassium; weight-based dose</li><li>Infuse over 4–6 hours; recheck 6 hours later</li></ol>'),
      O('Put the steps of severe hypophosphatemia management in order', ['Assess refeeding risk and cause', 'Assess severity and symptoms', 'Choose the route', 'Choose the product and dose', 'Infuse over 4–6 hours and recheck']),
      M('Best action?', ['IV phosphate replacement', 'Antibiotics', 'More sedation', 'IV calcium'], 'Severe hypophosphatemia weakens the diaphragm.', [['Patient', 'Mechanically ventilated, failed weaning'], ['Phosphate', '1.2 mg/dL'], ['Kidneys', 'Normal']]),
      M('Which statement is correct?', ['Replace phosphate; for example give part of the potassium as potassium phosphate', 'Wait until discharge', 'Stop insulin', 'IV calcium'], 'In ketoacidosis give phosphate only when it is below 1.0 or with heart failure, respiratory depression or anemia.', [['Patient', 'Ketoacidosis under treatment'], ['Phosphate', '0.9 mg/dL'], ['Symptoms', 'Muscle weakness']]),
      T('In ketoacidosis, routine phosphate replacement is recommended for all patients.', false, 'It is not routine; only for phosphate below 1.0 or complications.'),
      N('p.dose'),
      N('p.kphos'),
      N('p.fepo4'),
      N('p.refeed')
    ] }
  };

  const WORLD_EN = {
    na: { name: 'Sodium', sub: 'Water, osmolality and the brain', levels: ['Curious Droplets', 'Osmosis Surfers', 'Ocean Keepers'] },
    k: { name: 'Potassium', sub: 'The heart’s rhythm in your hands', levels: ['First Heartbeats', 'Rhythm Guardians', 'Pulse Commanders'] },
    ca: { name: 'Calcium', sub: 'Bones, muscle and albumin', levels: ['Bone Builders', 'Calcium Architects', 'Skeleton Sentinels'] },
    mg: { name: 'Magnesium', sub: 'The forgotten cation', levels: ['Green Sparks', 'Magnesium Enchanters', 'Triangle Wizards'] },
    p: { name: 'Phosphate', sub: 'Cell energy and refeeding syndrome', levels: ['Fresh Batteries', 'Energy Engineers', 'ATP Rulers'] }
  };

  /* ---------- English hospital rounds ---------- */
  const RM = (stage, q, opts, why, kase) => ({ t: 'mcq', stage, q, opts, why, case: kase });
  const RO = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const RS = (stage, q, ans, tol, unit, why, kase, hint) => ({ t: 'numS', stage, q, ans, tol, unit, why, case: kase, hint });
  const RT = (stage, q, a, why) => ({ t: 'tf', stage, q, a, why });
  const ROUNDS_EN = {
    'r-na': { title: 'Seizure in the emergency department', who: 'Woman, 72 years, 55 kg', brief: 'Three days of nausea and confusion; takes hydrochlorothiazide. Two brief seizures in the ED.', steps: [
      RM('Initial assessment', 'First action?', ['Bolus 100–150 mL of 3% saline over 10–20 minutes', '0.9% saline at 100 mL/h', 'Fluid restriction and wait', 'Oral tolvaptan'], 'Hyponatremia with severe symptoms (seizures) is an emergency; hypertonic saline comes before any further work-up.', [['Sodium', '114 mEq/L'], ['Potassium', '3.0 mEq/L'], ['Symptoms', 'Seizures, confusion']]),
      RM('Diagnosis', 'What type of hyponatremia is this?', ['Hypotonic with active ADH; the thiazide is the most likely cause', 'Pseudohyponatremia', 'Hypertonic hyponatremia', 'Primary polydipsia'], 'Low serum osmolality = hypotonic. Concentrated urine means ADH is active. A thiazide impairs urine dilution and keeps urine sodium high.', [['Serum osmolality', '238'], ['Urine osmolality', '420'], ['Urine sodium', '45'], ['Glucose', '110']]),
      RS('Calculation', 'How much will 1 L of 3% saline raise her sodium?', 15.5, 0.3, 'mEq/L', 'Older woman → factor 0.45 → TBW = 55 × 0.45 = 24.8<br>ΔNa = (513 − 114) ÷ (24.8 + 1) = <b>15.5</b><br>So 150 mL raises sodium by about 2.3; a second bolus may be needed.', [['Weight', '55 kg'], ['Age', '72 years'], ['Sodium', '114']], 'TBW = weight × 0.45; ΔNa = (513 − Na) ÷ (TBW + 1)'),
      RS('Safety', 'Given her hypokalemia, what is the highest acceptable sodium at the end of the first 24 hours?', 122, 0, 'mEq/L', 'Hypokalemia is an ODS risk factor → limit 8 → 114 + 8 = <b>122</b>', [['Baseline sodium', '114'], ['Potassium', '3.0']], 'High-risk patient: +8'),
      RM('Treatment', 'After the seizures stop, what is the best plan?', ['Stop the thiazide, replace potassium, and check sodium every 2–4 hours', 'Continue 3% saline until sodium is 135', 'Continue the thiazide with fluid restriction', 'Routine desmopressin from the start'], 'Potassium also raises sodium and must be counted. Remove the cause (the thiazide).'),
      RM('Monitoring', 'What should be done?', ['Stop hypertonic fluid; give D5W and desmopressin so sodium does not exceed 122', 'Continue the current plan', 'Another 3% saline bolus', 'Furosemide'], 'Once the thiazide is stopped, the kidneys excrete free water quickly; overcorrection is on the way.', [['8 hours later', 'Sodium 121'], ['Urine', '350 mL/h, dilute']])
    ] },
    'r-k': { title: 'Dialysis patient with a wide QRS', who: 'Man, 65 years, on dialysis', brief: 'Missed two dialysis sessions; severe weakness and palpitations.', steps: [
      RM('Initial assessment', 'First drug?', ['Calcium gluconate 10%, 10 mL over 2–3 minutes', 'Insulin and dextrose', 'Oral binder', 'IV furosemide'], 'ECG changes mean you stabilize the cardiac membrane first.', [['Potassium', '7.4 mEq/L'], ['ECG', 'Wide QRS, peaked T waves'], ['Glucose', '140 mg/dL']]),
      RM('Immediate monitoring', 'After 5 minutes the QRS is still wide. Next step?', ['Repeat calcium gluconate', 'Wait up to 30 minutes for calcium to work', 'Bicarbonate alone', 'Amiodarone'], 'Calcium acts within minutes; if the ECG does not normalize, repeat the dose.'),
      RM('Shift potassium', 'Which combination is correct?', ['Regular insulin 10 units IV + 25 g dextrose, plus inhaled salbutamol', 'Insulin 10 units without dextrose because glucose is 140', 'Subcutaneous NPH insulin', 'Salbutamol only'], 'Glucose is below 250, so dextrose is needed; dialysis patients are at higher risk of hypoglycemia.'),
      RM('Definitive removal', 'Definitive treatment for this patient?', ['Urgent dialysis', 'High-dose furosemide', 'Oral binder and discharge', 'Hourly insulin'], 'The patient is anuric; only dialysis removes potassium. Insulin and calcium only buy time.'),
      RO('Summary', 'Put the complete treatment in order', ['Calcium gluconate', 'Insulin and dextrose + salbutamol', 'Dialysis', 'Monitor glucose and potassium']),
      RM('Monitoring', 'After insulin, how should glucose be monitored?', ['Hourly for 4–6 hours', 'Once after 24 hours', 'Not needed', 'Only if symptomatic'], 'Delayed hypoglycemia is common in kidney failure.')
    ] },
    'r-ca': { title: 'Confusion in a cancer patient', who: 'Woman, 58 years, 70 kg, breast cancer', brief: 'A week of constipation, thirst, drowsiness and confusion.', steps: [
      RS('Assessment', 'What is the corrected calcium?', 15, 0.1, 'mg/dL', '14.2 + 0.8 × (4 − 3.0) = <b>15.0</b> → severe hypercalcemia', [['Total calcium', '14.2 mg/dL'], ['Albumin', '3.0 g/dL'], ['Creatinine', '1.6']], 'Ca + 0.8 × (4 − albumin)'),
      RM('Urgent treatment', 'Best initial plan?', ['IV 0.9% saline + calcitonin + zoledronic acid', 'IV furosemide alone', 'Fluid restriction', 'Calcium gluconate'], 'Hydration for dehydration and calcium excretion, calcitonin for a fast effect, a bisphosphonate for a lasting effect.'),
      RS('Calculation', 'Each calcitonin dose (4 units/kg every 12 hours)?', 280, 0, 'units', '4 × 70 = <b>280</b> units subcutaneously or IM every 12 hours', [['Weight', '70 kg']], '4 × weight'),
      RT('Treatment', 'In this dehydrated patient, furosemide should start with the first liter of saline.', false, 'Furosemide only after volume repletion and if fluid overload becomes a problem; in a dehydrated patient it reduces volume and worsens kidney function.'),
      RM('Cause', 'What is her PTH likely to be?', ['Low (suppressed)', 'High', 'High-normal', 'Unpredictable'], 'In hypercalcemia of malignancy (PTHrP or metastases) PTH is suppressed.'),
      RM('Monitoring', 'What should you watch over the next days?', ['Calcium, creatinine, phosphate and magnesium; and hypocalcemia after the bisphosphonate', 'Only blood glucose', 'Nothing; treatment is done', 'Only weight'], 'Bisphosphonates can push calcium below normal and affect the kidneys.')
    ] },
    'r-mg': { title: 'Alcohol use and potassium that won’t rise', who: 'Man, 48 years, 75 kg', brief: 'History of alcohol use, three days of vomiting, weakness and tremor.', steps: [
      RM('Diagnosis', 'Why do potassium and calcium stay low despite replacement?', ['Magnesium deficiency', 'Lab error', 'Phosphate deficiency', 'Adrenal insufficiency'], 'Magnesium deficiency increases renal potassium loss and impairs PTH secretion.', [['Potassium', '2.9 (after 80 mEq)'], ['Calcium', '7.2 (albumin 4)'], ['Magnesium', '0.9 mg/dL'], ['ECG', 'Long QT']]),
      RM('Safety', 'What must be given before any glucose-containing fluid?', ['Thiamine', 'Insulin', 'Bicarbonate', 'Vitamin K'], 'In alcohol use disorder, glucose without thiamine can unmask Wernicke encephalopathy.'),
      RM('Treatment', 'Appropriate magnesium sulfate dose (normal kidneys)?', ['4–8 g over 12–24 hours', '1 g orally', '20 g bolus', 'Not needed'], 'Magnesium below 1.0 = severe deficiency.'),
      RS('Calculation', 'How many mEq of magnesium are in 6 g of magnesium sulfate?', 48.7, 0.8, 'mEq', '6 × 8.12 = <b>48.7</b> mEq', null, 'grams × 8.1'),
      RT('Treatment', 'Magnesium and potassium are best replaced together.', true, 'Without magnesium, infused potassium is lost in the urine.'),
      RM('Monitoring', 'During the magnesium infusion, which finding means you should slow or stop it?', ['Loss of the patellar reflex or hypotension', 'More urine output', 'A mild feeling of warmth', 'Less tremor'], 'Reflexes are the first sign of a high magnesium level.')
    ] },
    'r-p': { title: 'Breathlessness on day 2 of feeding', who: 'Woman, 24 years, 38 kg, anorexia nervosa', brief: 'BMI 13.8, three weeks of negligible intake; admitted for tube feeding.', steps: [
      RM('Risk assessment', 'Her refeeding risk?', ['Very high; start at 5 kcal/kg and give thiamine before feeding', 'Moderate; start at 20 kcal/kg', 'Low; full feeding from day 1', 'Feeding is contraindicated'], 'BMI below 14 and more than 15 days without food = very high risk.'),
      RS('Calculation', 'Energy on day 1?', 190, 0, 'kcal', '5 × 38 = <b>190</b> kcal', [['Weight', '38 kg']], '5 × weight'),
      RM('Diagnosis', 'What has happened on day 2?', ['Refeeding syndrome', 'Aspiration pneumonia', 'Kidney failure', 'Lab error'], 'Falling phosphate, potassium and magnesium with breathlessness after feeding started.', [['Phosphate', '1.1 mg/dL'], ['Potassium', '2.9'], ['Magnesium', '1.3'], ['Symptoms', 'Breathlessness, weakness']]),
      RS('Calculation', 'IV phosphate dose (sample protocol: phosphate ≤ 1.5 → 0.64 mmol/kg)?', 24.3, 0.5, 'mmol', '0.64 × 38 = <b>24.3</b> mmol over 4–6 hours', null, '0.64 × weight'),
      RM('Product choice', 'Which phosphate product?', ['Potassium phosphate (potassium is 2.9)', 'Sodium phosphate', 'It does not matter', 'Oral phosphate only'], 'Potassium below 4 with normal kidneys → potassium phosphate; count the accompanying potassium toward the potassium rate limit.'),
      RM('Monitoring', 'Feeding and monitoring plan?', ['Temporarily reduce calories, replace electrolytes, and check phosphate, potassium, magnesium, glucose and fluids daily', 'Increase calories to catch up', 'Stop feeding completely and permanently', 'Daily weight only'], 'After correction, increase calories slowly over 4–7 days.')
    ] },
    'r-mix': { title: 'Diabetic ketoacidosis', who: 'Man, 30 years, type 1 diabetes', brief: 'Two days of vomiting and deep breathing; had stopped his insulin.', steps: [
      RS('Assessment', 'Glucose-corrected sodium?', 134.7, 0.5, 'mEq/L', '128 + 1.6 × (520 − 100) ÷ 100 = <b>134.7</b>', [['Sodium', '128'], ['Glucose', '520 mg/dL'], ['Potassium', '4.9'], ['pH', '7.08']], 'Na + 1.6 × (glucose − 100) ÷ 100'),
      RM('Potassium and insulin', 'With potassium 4.9, what should you do?', ['Start insulin and add 20–30 mEq of potassium to each liter of fluid', 'Hold insulin', 'Give no potassium, only insulin', 'Give bicarbonate'], 'Potassium is between 3.3 and 5.2 (ADA).'),
      RM('Four hours later', 'Potassium is now 3.1. Action?', ['Hold insulin temporarily and give 20–30 mEq/h of potassium', 'Continue the same plan', 'Increase the insulin dose', 'Stop fluids'], 'Below 3.3, insulin risks a fatal arrhythmia.'),
      RM('Falling glucose', 'Glucose is about 200 but acidosis persists. Action?', ['Add D5W to the fluids and continue insulin', 'Stop insulin', 'Give bicarbonate', 'Stop fluids'], 'The goal is to clear ketoacidosis, not just lower glucose; dextrose lets insulin continue.'),
      RM('Phosphate', 'Phosphate is 0.9 with muscle weakness. Action?', ['Replace phosphate; for example give part of the potassium as potassium phosphate', 'Nothing; phosphate is never needed in ketoacidosis', 'IV calcium', 'Stop insulin'], 'Phosphate below 1.0 is an indication for phosphate replacement in ketoacidosis.'),
      RO('Summary', 'Put the steps of ketoacidosis management in order', ['Restore volume with saline', 'Check potassium before insulin', 'IV insulin', 'Add dextrose as glucose falls', 'Switch to subcutaneous insulin once acidosis resolves'])
    ] }
  };

  /* ---------- Build the English world and round objects ---------- */
  const faWorlds = EA.worlds;
  const enWorlds = faWorlds.map(w => {
    const meta = WORLD_EN[w.id];
    return Object.assign({}, w, meta, {
      lessons: w.lessons.map(l => {
        const e = LESSONS[l.id];
        if (!e) throw new Error('Missing English lesson ' + l.id);
        return { id: l.id, icon: l.icon, title: e.title, items: e.items };
      })
    });
  });
  const faRounds = EA.rounds;
  const enRounds = faRounds.map(r => Object.assign({}, r, ROUNDS_EN[r.id]));

  EA.W = { fa: faWorlds, en: enWorlds };
  EA.RD = { fa: faRounds, en: enRounds };
  EA.worlds = EA.W[EA.lang] || faWorlds;
  EA.rounds = EA.RD[EA.lang] || faRounds;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/

      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش؛ در برنامه کاری نمی‌کند

/* یونا — نکته‌های کوتاه بالینی که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Na', 'در هیپوناترمی مزمن، کُند یعنی ایمن: حداکثر ۱۰ واحد در ۲۴ ساعت اول، و در بیمار پرخطر ۸ واحد.', 'In chronic hyponatremia, slow is safe: at most +10 in the first 24 hours, and +8 if the patient is high risk.'],
    ['Na', 'تشنج با سدیم پایین؟ ۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪ طی ۱۰ تا ۲۰ دقیقه؛ افزایش ۴ تا ۶ واحد معمولاً کافی است.', 'Seizure with low sodium? 100–150 mL of 3% saline over 10–20 minutes; a rise of 4–6 is usually enough.'],
    ['Na', 'یک لیتر سالین ۳٪ حدود ۵۱۳ mEq سدیم دارد؛ سالین نرمال ۱۵۴.', 'One liter of 3% saline contains about 513 mEq of sodium; normal saline has 154.'],
    ['Na', 'قند بالا سدیم را رقیق می‌کند: به ازای هر ۱۰۰ واحد قند بالای ۱۰۰، حدود ۱٫۶ به سدیم اضافه کن.', 'High glucose dilutes sodium: add about 1.6 to sodium for every 100 mg/dL of glucose above 100.'],
    ['Na', 'اسمولالیته ادرار زیر ۱۰۰ یعنی ADH خاموش است؛ به پلی‌دیپسی یا دریافت کم املاح فکر کن.', 'Urine osmolality below 100 means ADH is off; think of polydipsia or low solute intake.'],
    ['Na', 'تیازیدها بیشتر از دیورتیک‌های لوپ هیپوناترمی می‌دهند، به‌خصوص در زنان سالمند.', 'Thiazides cause hyponatremia more often than loop diuretics, especially in older women.'],
    ['Na', 'اگر سدیم بیش از حد مجاز بالا رفت، با دکستروز ۵٪ و دسموپرسین دوباره پایینش بیاور.', 'If sodium rises too fast, bring it back down with D5W and desmopressin.'],
    ['Na', 'در SIADH، سالین نرمال ممکن است سدیم را پایین‌تر ببرد.', 'In SIADH, normal saline can lower sodium further.'],
    ['Na', 'هیپرناترمی مزمن را آهسته اصلاح کن: حدود ۰٫۵ واحد در ساعت؛ عجله یعنی ادم مغزی.', 'Correct chronic hypernatremia slowly, about 0.5 per hour; rushing means cerebral edema.'],
    ['Na', 'دیورز آبی ناگهانی پس از اصلاح حجم، شایع‌ترین علت اصلاح بیش از حد سدیم است.', 'A sudden water diuresis after volume repletion is the most common cause of sodium overcorrection.'],
    ['Na', 'در خونریزی ساب‌آراکنوئید، محدودیت مایع برای هیپوناترمی خطرناک است.', 'In subarachnoid hemorrhage, fluid restriction for hyponatremia is dangerous.'],
    ['Na', 'نسبت (سدیم + پتاسیم ادرار) به سدیم سرم بالای ۱ یعنی محدودیت مایع جواب نمی‌دهد.', 'If (urine Na + urine K) ÷ serum Na is above 1, fluid restriction will not work.'],
    ['K', 'KCl هرگز پوش وریدی نمی‌شود. هرگز!', 'KCl is never given as an IV push. Never!'],
    ['K', 'هیپوکالمی مقاوم؟ اول منیزیم را ببین.', 'Refractory hypokalemia? Check magnesium first.'],
    ['K', 'کلسیم گلوکونات قلب را محافظت می‌کند، پتاسیم را پایین نمی‌آورد.', 'Calcium gluconate protects the heart; it does not lower potassium.'],
    ['K', 'در بزرگسال با کلیه سالم، هر ۱۰ mEq KCl پتاسیم را حدود ۰٫۱ بالا می‌برد.', 'In an adult with healthy kidneys, every 10 mEq of KCl raises potassium by about 0.1.'],
    ['K', 'سقف معمول KCl از رگ محیطی ۱۰ mEq در ساعت است.', 'The usual maximum for KCl through a peripheral line is 10 mEq per hour.'],
    ['K', 'KCl را در سالین رقیق کن؛ دکستروز با ترشح انسولین پتاسیم را پایین‌تر می‌برد.', 'Dilute KCl in saline; dextrose triggers insulin and lowers potassium further.'],
    ['K', 'در کتواسیدوز با پتاسیم زیر ۳٫۳، انسولین را نگه دار تا پتاسیم بالا بیاید.', 'In ketoacidosis with potassium below 3.3, hold insulin until potassium comes up.'],
    ['K', 'انسولین ۱۰ واحد وریدی با ۲۵ گرم دکستروز پتاسیم را ظرف ۱۵ تا ۳۰ دقیقه پایین می‌آورد؛ قند را پایش کن.', 'Insulin 10 units IV with 25 g dextrose lowers potassium within 15–30 minutes; watch the glucose.'],
    ['K', 'پتاسیم بالا با نوار قلب طبیعی و نمونه همولیز؟ اول آزمایش را تکرار کن.', 'High potassium, normal ECG and a hemolyzed sample? Repeat the test first.'],
    ['K', 'جایگزین‌های «نمک کم‌سدیم» معمولاً کلرید پتاسیم‌اند؛ برای بیمار کلیوی خطرناک.', '“Low-sodium” salt substitutes are usually potassium chloride; dangerous for kidney patients.'],
    ['K', 'تری‌متوپریم مثل آمیلوراید پتاسیم را بالا می‌برد.', 'Trimethoprim raises potassium, just like amiloride.'],
    ['K', 'ترتیب نوار قلب هیپرکالمی: T نوک‌تیز ← PR بلند ← QRS پهن ← موج سینوسی.', 'Hyperkalemia ECG sequence: peaked T → long PR → wide QRS → sine wave.'],
    ['K', 'هیپوکالمی با اسیدوز متابولیک؟ به اسهال یا اسیدوز توبولار کلیوی فکر کن.', 'Hypokalemia with metabolic acidosis? Think of diarrhea or renal tubular acidosis.'],
    ['Ca', 'آلبومین پایین کلسیم تام را کم نشان می‌دهد: هر ۱ گرم کمبود آلبومین، ۰٫۸ به کلسیم اضافه کن.', 'Low albumin makes total calcium look low: add 0.8 for every 1 g/dL of albumin below 4.'],
    ['Ca', 'یک گرم کلسیم گلوکونات حدود ۹۳ میلی‌گرم کلسیم عنصری دارد؛ کلسیم کلراید تقریباً سه برابر.', 'One gram of calcium gluconate has about 93 mg of elemental calcium; calcium chloride has about three times as much.'],
    ['Ca', 'کلسیم را با بی‌کربنات یا فسفات در یک رگ نده؛ رسوب می‌کند.', 'Never run calcium in the same line as bicarbonate or phosphate; it precipitates.'],
    ['Ca', 'هیپوکلسمی مقاوم به درمان؟ منیزیم را اصلاح کن.', 'Hypocalcemia that won’t correct? Fix the magnesium.'],
    ['Ca', 'در هیپرکلسمی شدید، اول آبرسانی با سالین؛ فوروزماید فقط بعد از جبران حجم.', 'In severe hypercalcemia, hydrate with saline first; furosemide only after volume repletion.'],
    ['Ca', 'کلسی‌تونین سریع اثر می‌کند ولی بعد از ۴۸ ساعت اثرش کم می‌شود.', 'Calcitonin works fast, but its effect fades after 48 hours.'],
    ['Ca', 'در سنگ کلسیم اگزالات، کلسیم رژیم را محدود نکن؛ کلسیم غذا اگزالات را در روده می‌گیرد.', 'With calcium oxalate stones, don’t restrict dietary calcium; food calcium binds oxalate in the gut.'],
    ['Ca', 'پس از تزریق خون حجیم، کلسیم یونیزه را بسنج؛ سیترات آن را پایین می‌آورد.', 'After massive transfusion, check ionized calcium; citrate lowers it.'],
    ['Ca', 'علامت شوستک در صورت است و علامت تروسو در دست.', 'Chvostek’s sign is in the face; Trousseau’s sign is in the hand.'],
    ['Ca', 'هیپوکلسمی QT را طولانی و هیپرکلسمی کوتاه می‌کند.', 'Hypocalcemia prolongs the QT; hypercalcemia shortens it.'],
    ['Ca', 'در هیپرکلسمی بدخیمی، PTH معمولاً سرکوب شده است.', 'In hypercalcemia of malignancy, PTH is usually suppressed.'],
    ['Mg', 'اولین نشانه مسمومیت با منیزیم: از بین رفتن رفلکس پاتلا.', 'The first sign of magnesium toxicity: loss of the patellar reflex.'],
    ['Mg', 'پادزهر مسمومیت با منیزیم: کلسیم گلوکونات وریدی آهسته.', 'The antidote to magnesium toxicity: slow IV calcium gluconate.'],
    ['Mg', 'در تورسادو پوینت، ۱ تا ۲ گرم سولفات منیزیم وریدی بده، حتی اگر سطح منیزیم طبیعی باشد.', 'In torsades de pointes, give 1–2 g of IV magnesium sulfate even if the magnesium level is normal.'],
    ['Mg', 'منیزیم را آهسته تزریق کن؛ تزریق سریع بخش زیادی از آن را به ادرار می‌فرستد.', 'Infuse magnesium slowly; a fast infusion sends much of it into the urine.'],
    ['Mg', 'مصرف طولانی داروهای مهارکننده پمپ پروتون (PPI) می‌تواند منیزیم را پایین بیاورد.', 'Long-term proton pump inhibitors (PPIs) can lower magnesium.'],
    ['Mg', 'منیزیم در مرکز کلروفیل است؛ سبزی برگ‌سبز منبع خوبی است.', 'Magnesium sits at the center of chlorophyll; leafy greens are a great source.'],
    ['Mg', 'در eGFR زیر ۳۰، دوز منیزیم را نصف کن و قبل از هر نوبت دوباره بسنج.', 'With eGFR below 30, halve the magnesium dose and recheck before each dose.'],
    ['Mg', 'اکسید منیزیم ارزان است ولی جذب کمی دارد و اسهال بیشتری می‌دهد.', 'Magnesium oxide is cheap but poorly absorbed and causes more diarrhea.'],
    ['Mg', 'دوز منیزیم وریدی در آسم شدید بزرگسال: ۲ گرم طی ۲۰ دقیقه.', 'IV magnesium for severe asthma in adults: 2 g over 20 minutes.'],
    ['P', 'فسفر افزودنی غذاهای فرآوری‌شده تقریباً کامل جذب می‌شود.', 'Phosphate additives in processed foods are almost completely absorbed.'],
    ['P', 'در ریفیدینگ، تیامین را پیش از شروع تغذیه بده.', 'In refeeding, give thiamine before feeding starts.'],
    ['P', 'بیمار بسیار پرخطر ریفیدینگ را با ۵ کیلوکالری به ازای هر کیلوگرم شروع کن.', 'Start a very high-risk refeeding patient at 5 kcal/kg.'],
    ['P', 'مشخص‌ترین نشانه آزمایشگاهی ریفیدینگ، افت فسفر است.', 'The hallmark lab sign of refeeding is a falling phosphate.'],
    ['P', 'هر میلی‌لیتر پتاسیم فسفات ۴٫۴ mEq پتاسیم هم دارد؛ در سقف سرعت پتاسیم حسابش کن.', 'Each mL of potassium phosphate carries 4.4 mEq of potassium; count it toward the potassium rate limit.'],
    ['P', 'بایندر فسفات را همراه غذا بخور، نه ناشتا.', 'Take phosphate binders with meals, not on an empty stomach.'],
    ['P', 'حاصل‌ضرب کلسیم × فسفر بالای ۵۵ یعنی فسفات وریدی نده.', 'A calcium × phosphate product above 55 means no IV phosphate.'],
    ['P', 'سفیده تخم‌مرغ پروتئین زیاد و فسفر کم دارد؛ دوست بیمار دیالیزی.', 'Egg white is high in protein and low in phosphate: a dialysis patient’s friend.'],
    ['P', 'در لیز تومور، هیپوکلسمی بی‌علامت را درمان نکن.', 'In tumor lysis, don’t treat asymptomatic hypocalcemia.'],
    ['P', 'تزریق آهن فریک کربوکسی‌مالتوز می‌تواند فسفر را پایین بیاورد.', 'Ferric carboxymaltose infusions can lower phosphate.'],
    ['P', 'هیپوفسفاتمی شدید دیافراگم را ضعیف می‌کند؛ به جداسازی ناموفق از ونتیلاتور فکر کن.', 'Severe hypophosphatemia weakens the diaphragm; think of it in failed ventilator weaning.'],
    ['', 'اشتباه‌هایت هدر نمی‌روند؛ در بخش «تمرین» دوباره پرسیده می‌شوند تا ماندگار شوند.', 'Your mistakes aren’t wasted; they come back in Practice until they stick.'],
    ['', 'روزی ۵ دقیقه تمرین منظم از یک جلسه طولانی در هفته ماندگارتر است.', 'Five minutes a day sticks better than one long session a week.'],
    ['', 'مسئله‌های محاسباتی را با عبارت هم می‌توانی جواب بدهی، مثلاً (513-118)/31.', 'You can answer calculation questions with an expression, like (513-118)/31.'],
    ['', 'هر سطح که تمام شود، یک کاراکتر تازه به کلکسیونت اضافه می‌شود.', 'Every level you finish adds a new character to your collection.']
  ];
  const COLORS = { Na: '#1CB0F6', K: '#CE82FF', Ca: '#FF9600', Mg: '#1FC8A0', P: '#FF4B8B', '': '#58CC02' };
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
/* یونا — ماشین‌حساب‌های اصلاح الکترولیت (پنج ابزار + تبدیل واحد)
 * هر ابزار: فیلدها، و تابع محاسبه‌ای که ردیف نتیجه، گام‌های حل و هشدارها را برمی‌گرداند. */
(function () {
  const EA = window.EA;
  const { F, FLUIDS } = EA;
  const fa = (n, d) => EA.fa(n, d);

  const T = EA.T;
  const n = x => EA.fa(x, 3);
  const HERO = 1; // سومین عضو ردیف: این ردیف نتیجه اصلی است
  const sexOpts = () => [['m', T('مرد', 'Male')], ['f', T('زن', 'Female')]];
  const hypoHyper = v => v.mode === 'hypo' || v.mode === 'hyper';

  const TOOLS = [
    {
      id: 'na', sym: 'Na', get name() { return T('سدیم', 'Sodium'); }, color: '#1CB0F6',
      get fields() {
        return [
          { k: 'mode', label: T('محاسبه', 'Calculation'), type: 'seg', def: 'hypo', opts: [['hypo', T('هیپوناترمی', 'Hyponatremia')], ['hyper', T('هیپرناترمی', 'Hypernatremia')], ['glu', T('اصلاح با قند', 'Glucose correction')], ['osm', T('اسمولالیته', 'Osmolality')]] },
          { k: 'sex', label: T('جنس', 'Sex'), type: 'seg', def: 'f', opts: sexOpts(), show: hypoHyper },
          { k: 'age', label: T('سن', 'Age'), type: 'num', unit: T('سال', 'years'), def: 60, show: hypoHyper },
          { k: 'w', label: T('وزن', 'Weight'), type: 'num', unit: 'kg', def: 60, show: hypoHyper },
          { k: 'na', label: T('سدیم سرم', 'Serum sodium'), type: 'num', unit: 'mEq/L', def: 118 },
          { k: 'fluid', label: T('مایع تجویزی', 'Infusate'), type: 'sel', def: 'ns3', opts: FLUIDS.map(f => [f.id, `${f.name} — ${fa(f.na)}`]), show: hypoHyper },
          { k: 'goal', label: T('تغییر هدف در ۲۴ ساعت', 'Target change in 24 h'), type: 'num', unit: 'mEq/L', def: 6, show: hypoHyper },
          { k: 'risk', label: T('عامل خطر ODS دارد (الکل، سوءتغذیه، هیپوکالمی، کبد، Na ≤ ۱۰۵)', 'ODS risk factor present (alcohol, malnutrition, hypokalemia, liver disease, Na ≤ 105)'), type: 'chk', def: false, show: v => v.mode === 'hypo' },
          { k: 'glu', label: T('گلوکز', 'Glucose'), type: 'num', unit: 'mg/dL', def: 450, show: v => v.mode === 'glu' || v.mode === 'osm' },
          { k: 'bun', label: 'BUN', type: 'num', unit: 'mg/dL', def: 20, show: v => v.mode === 'osm' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const L_ = T('لیتر', 'L'), ML = T('میلی‌لیتر', 'mL'), MLH = T('میلی‌لیتر در ساعت', 'mL/h');
        if (v.mode === 'glu') {
          const c = F.corrNaGlu(v.na, v.glu), h = v.na + 2.4 * (v.glu - 100) / 100;
          out.rows.push([T('سدیم اصلاح‌شده (کاتز ۱٫۶)', 'Corrected sodium (Katz, 1.6)'), fa(c) + ' mEq/L', HERO], [T('سدیم اصلاح‌شده (هیلیر ۲٫۴)', 'Corrected sodium (Hillier, 2.4)'), fa(h) + ' mEq/L']);
          out.steps.push(`${fa(v.na)} + ${n(1.6)} × (${fa(v.glu)} − ${n(100)}) ÷ ${n(100)} = <b>${fa(c)}</b>`);
          if (c > 145) out.warn.push(T('با وجود سدیم اندازه‌گیری‌شده، بیمار در واقع هیپرناترمیک است؛ کمبود آب را جدی بگیر.', 'Despite the measured sodium, the patient is actually hypernatremic; take the water deficit seriously.'));
          return out;
        }
        if (v.mode === 'osm') {
          const o = F.osm(v.na, v.glu, v.bun);
          out.rows.push([T('اسمولالیته محاسبه‌شده', 'Calculated osmolality'), fa(o, 0) + ' mOsm/kg', HERO], [T('تفسیر', 'Interpretation'), o < 275 ? T('هیپوتونیک', 'Hypotonic') : o > 295 ? T('هیپراسمولار', 'Hyperosmolar') : T('طبیعی', 'Normal')]);
          out.steps.push(`${n(2)}×${fa(v.na)} + ${fa(v.glu)}÷${n(18)} + ${fa(v.bun)}÷${n(2.8)} = <b>${fa(o, 0)}</b>`);
          out.ok.push(T('اگر اسمولالیته اندازه‌گیری‌شده بیش از ۱۰ واحد بالاتر باشد (شکاف اسمولار)، به الکل‌های سمی فکر کن.', 'If measured osmolality is more than 10 higher (an osmolar gap), think of toxic alcohols.'));
          return out;
        }
        const f = FLUIDS.find(x => x.id === v.fluid);
        const fac = F.tbwFactor(v.sex, v.age), t = F.tbw(v.w, v.sex, v.age);
        const d = F.adrogue(f.na, v.na, t);
        out.rows.push([T('آب کل بدن', 'Total body water'), T(`${fa(t)} لیتر (ضریب ${fa(fac, 2)})`, `${fa(t)} L (factor ${fa(fac, 2)})`)], [T(`تغییر سدیم با ۱ لیتر ${f.name}`, `Sodium change per 1 L of ${f.name}`), `${d > 0 ? '+' : ''}${fa(d, 2)} mEq/L`]);
        out.steps.push(`TBW = ${fa(v.w)} × ${fa(fac, 2)} = ${fa(t)}`, `ΔNa = (${fa(f.na)} − ${fa(v.na)}) ÷ (${fa(t)} + ${n(1)}) = <b>${fa(d, 2)}</b>`);
        if (v.mode === 'hypo') {
          const lim = v.risk ? 8 : 10;
          const ceil = [T('سقف سدیم در پایان ۲۴ ساعت', 'Sodium ceiling at 24 h'), fa(v.na + lim) + ' mEq/L'];
          out.rows.push(ceil);
          if (v.na >= 135) out.warn.push(T('سدیم در محدوده هیپوناترمی نیست.', 'Sodium is not in the hyponatremic range.'));
          if (d <= 0) { ceil[2] = HERO; out.warn.push(T(`${f.name} سدیم این بیمار را بالا نمی‌برد؛ مایع دیگری انتخاب کن.`, `${f.name} will not raise this patient’s sodium; choose another fluid.`)); }
          else {
            const Lv = v.goal / d;
            out.rows.push([T(`حجم لازم برای +${fa(v.goal)}`, `Volume needed for +${fa(v.goal)}`), `${fa(Lv * 1000, 0)} ${ML}`, HERO], [T('سرعت در ۲۴ ساعت', 'Rate over 24 h'), `${fa(Lv * 1000 / 24, 0)} ${MLH}`]);
            out.steps.push(`${T('حجم', 'Volume')} = ${fa(v.goal)} ÷ ${fa(d, 2)} = ${fa(Lv, 2)} ${L_}`);
          }
          if (v.goal > lim) out.warn.push(T(`هدف ${fa(v.goal)} از سقف ایمن ${fa(lim)} در ۲۴ ساعت بیشتر است — خطر ODS.`, `A target of ${fa(v.goal)} exceeds the safe limit of ${fa(lim)} per 24 h — risk of ODS.`));
          if (v.goal < 4 && v.na < 125) out.ok.push(T('حداقل هدف رایج در روز اول ۴ تا ۶ واحد است.', 'The usual minimum target on day 1 is 4–6 mEq/L.'));
          out.ok.push(T('در علائم شدید: بولوس ۱۰۰ تا ۱۵۰ میلی‌لیتر سالین ۳٪ طی ۱۰ تا ۲۰ دقیقه، تا ۳ بار، تا افزایش ۴ تا ۶ واحد.', 'With severe symptoms: bolus 100–150 mL of 3% saline over 10–20 minutes, up to 3 times, until sodium rises by 4–6.'));
          out.ok.push(T('سدیم را هر ۲ تا ۴ ساعت بسنج؛ دیورز آبی ناگهانی (مثلاً پس از اصلاح حجم) می‌تواند اصلاح را سریع کند.', 'Check sodium every 2–4 hours; a sudden water diuresis (for example after volume repletion) can speed correction.'));
        } else {
          const fw = F.fwd(v.na, t);
          out.rows.unshift([T('کمبود آب آزاد', 'Free water deficit'), fa(fw) + ' ' + L_, HERO]);
          out.steps.unshift(`${T('کمبود آب', 'Water deficit')} = ${fa(t)} × (${fa(v.na)} ÷ ${n(140)} − ${n(1)}) = <b>${fa(fw)}</b> ${L_}`);
          if (v.na <= 145) out.warn.push(T('سدیم در محدوده هیپرناترمی نیست.', 'Sodium is not in the hypernatremic range.'));
          if (d >= 0) out.warn.push(T(`${f.name} سدیم این بیمار را پایین نمی‌آورد؛ مایع هیپوتونیک (مثل دکستروز ۵٪ یا سالین ۰٫۴۵٪) انتخاب کن.`, `${f.name} will not lower this patient’s sodium; choose a hypotonic fluid (such as D5W or 0.45% saline).`));
          else {
            const Lv = v.goal / -d;
            out.rows.push([T(`حجم لازم برای −${fa(v.goal)}`, `Volume needed for −${fa(v.goal)}`), T(`${fa(Lv * 1000, 0)} میلی‌لیتر + دفع نامحسوس`, `${fa(Lv * 1000, 0)} mL + insensible losses`)], [T('سرعت در ۲۴ ساعت', 'Rate over 24 h'), T(`${fa(Lv * 1000 / 24, 0)} میلی‌لیتر در ساعت + دفع جاری`, `${fa(Lv * 1000 / 24, 0)} mL/h + ongoing losses`)]);
            out.steps.push(`${T('حجم', 'Volume')} = ${fa(v.goal)} ÷ ${fa(-d, 2)} = ${fa(Lv, 2)} ${L_}`);
          }
          if (v.goal > 12) out.warn.push(T('کاهش بیش از ۱۰ تا ۱۲ در ۲۴ ساعت در هیپرناترمی مزمن خطر ادم مغزی دارد.', 'Lowering sodium by more than 10–12 per 24 h in chronic hypernatremia risks cerebral edema.'));
          out.ok.push(T('دفع نامحسوس بزرگسال حدود ۱ تا ۱٫۵ لیتر در روز است؛ به حجم محاسبه‌شده اضافه کن.', 'Adult insensible losses are about 1–1.5 L/day; add them to the calculated volume.'));
        }
        return out;
      }
    },
    {
      id: 'k', sym: 'K', get name() { return T('پتاسیم', 'Potassium'); }, color: '#CE82FF',
      get fields() {
        return [
          { k: 'mode', label: T('وضعیت', 'Condition'), type: 'seg', def: 'hypo', opts: [['hypo', T('هیپوکالمی', 'Hypokalemia')], ['hyper', T('هیپرکالمی', 'Hyperkalemia')]] },
          { k: 'k', label: T('پتاسیم سرم', 'Serum potassium'), type: 'num', unit: 'mEq/L', def: 3.0 },
          { k: 'route', label: T('راه وریدی', 'IV access'), type: 'seg', def: 'p', opts: [['p', T('محیطی', 'Peripheral')], ['c', T('مرکزی + مانیتور', 'Central + monitor')]], show: v => v.mode === 'hypo' },
          { k: 'renal', label: T('نارسایی کلیه دارد', 'Kidney failure'), type: 'chk', def: false },
          { k: 'ecg', label: T('تغییرات نوار قلب دارد', 'ECG changes present'), type: 'chk', def: false }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const SEV = { normal: T('طبیعی', 'Normal'), mild: T('خفیف', 'Mild'), mod: T('متوسط', 'Moderate'), sev: T('شدید', 'Severe') };
        if (v.mode === 'hypo') {
          const sev = v.k >= 3.5 ? SEV.normal : v.k >= 3.0 ? SEV.mild : v.k >= 2.5 ? SEV.mod : SEV.sev;
          let need = F.kNeed(v.k, 4);
          out.rows.push([T('شدت', 'Severity'), sev, v.k >= 3.5 ? HERO : 0]);
          if (v.k >= 3.5) { out.ok.push(T('پتاسیم کم نیست.', 'Potassium is not low.')); return out; }
          out.steps.push(`(${n(4)} − ${fa(v.k)}) × ${n(100)} = <b>${fa(need, 0)}</b> mEq (${T('هر ۱۰ mEq ≈ ۰٫۱', 'every 10 mEq ≈ 0.1')})`);
          if (v.renal) { need /= 2; out.warn.push(T('نارسایی کلیه: حدود نصف دوز و پایش مکرر.', 'Kidney failure: about half the dose and frequent monitoring.')); }
          const rate = v.route === 'c' ? 20 : 10;
          out.rows.push([T('برآورد KCl لازم', 'Estimated KCl needed'), fa(need, 0) + ' mEq', HERO], [T('سقف سرعت', 'Maximum rate'), fa(rate) + ' ' + T('mEq در ساعت', 'mEq/h')], [T('حداقل زمان تزریق', 'Minimum infusion time'), fa(need / rate) + ' ' + T('ساعت', 'h')]);
          out.rows.push([T('راه پیشنهادی', 'Suggested route'), v.k >= 3.0 && !v.ecg ? T('خوراکی (در صورت امکان بلع)', 'Oral (if the patient can swallow)') : T('وریدی', 'IV') + (v.k < 2.5 || v.ecg ? T('، با پایش قلبی', ', with cardiac monitoring') : '')]);
          out.warn.push(T('KCl را هرگز وریدی پوش نکن.', 'Never give KCl as an IV push.'));
          out.ok.push(T('در سالین رقیق کن، نه دکستروز.', 'Dilute in saline, not dextrose.'), T('منیزیم را بسنج و اصلاح کن.', 'Check and correct magnesium.'), T('پس از هر ۴۰ تا ۶۰ mEq، پتاسیم را دوباره بسنج.', 'Recheck potassium after every 40–60 mEq.'));
        } else {
          const sev = v.k < 5.5 ? SEV.normal : v.k < 6.0 ? SEV.mild : v.k < 6.5 ? SEV.mod : SEV.sev;
          out.rows.push([T('شدت', 'Severity'), sev, v.k < 5.5 ? HERO : 0]);
          if (v.k < 5.5) { out.ok.push(T('پتاسیم بالا نیست.', 'Potassium is not high.')); return out; }
          const emerg = v.ecg || v.k >= 6.5;
          out.rows.push([T('وضعیت', 'Status'), emerg ? T('🚨 اورژانس', '🚨 Emergency') : T('غیراورژانسی', 'Not an emergency'), HERO]);
          if (emerg) {
            out.steps.push(T('<b>۱. پایدارسازی:</b> کلسیم گلوکونات ۱۰٪، ۱۰ میلی‌لیتر طی ۲ تا ۳ دقیقه (در صورت ماندن تغییرات نوار قلب، تکرار پس از ۵ دقیقه)', '<b>1. Stabilize:</b> calcium gluconate 10%, 10 mL over 2–3 minutes (repeat after 5 minutes if ECG changes persist)'),
              T('<b>۲. جابجایی:</b> انسولین رگولار ۱۰ واحد وریدی + ۲۵ گرم دکستروز؛ سالبوتامول استنشاقی ۱۰ تا ۲۰ میلی‌گرم', '<b>2. Shift:</b> regular insulin 10 units IV + 25 g dextrose; inhaled salbutamol 10–20 mg'),
              T('<b>۳. دفع:</b> دیورتیک لوپ (اگر ادرار دارد)، رزین اتصالی', '<b>3. Remove:</b> loop diuretic (if making urine), potassium binder') + (v.renal ? T('، <b>دیالیز</b>', ', <b>dialysis</b>') : ''),
              T('<b>۴. پایش:</b> قند خون ساعتی تا ۶ ساعت، پتاسیم ۱ تا ۲ ساعت بعد، مانیتور قلبی', '<b>4. Monitor:</b> hourly glucose for 6 hours, potassium after 1–2 hours, cardiac monitor'));
          } else {
            out.steps.push(T('نمونه را از نظر همولیز بررسی و در صورت شک تکرار کن', 'Check the sample for hemolysis and repeat if in doubt'), T('داروهای افزاینده (مهارکننده ACE، ARB، اسپیرونولاکتون، NSAID) و مکمل پتاسیم را بازبینی کن', 'Review potassium-raising drugs (ACE inhibitors, ARBs, spironolactone, NSAIDs) and potassium supplements'), T('رژیم کم‌پتاسیم و در صورت نیاز رزین اتصالی', 'Low-potassium diet and, if needed, a potassium binder'));
          }
          if (v.renal) out.warn.push(T('در نارسایی کلیه، دوز دکستروز را کم نکن؛ خطر هیپوگلیسمی دیررس بیشتر است.', 'In kidney failure, do not reduce the dextrose; the risk of delayed hypoglycemia is higher.'));
        }
        return out;
      }
    },
    {
      id: 'ca', sym: 'Ca', get name() { return T('کلسیم', 'Calcium'); }, color: '#FF9600',
      get fields() {
        return [
          { k: 'ca', label: T('کلسیم تام', 'Total calcium'), type: 'num', unit: 'mg/dL', def: 7.2 },
          { k: 'alb', label: T('آلبومین', 'Albumin'), type: 'num', unit: 'g/dL', def: 3.0 },
          { k: 'w', label: T('وزن', 'Weight'), type: 'num', unit: 'kg', def: 70 },
          { k: 'sym', label: T('علامت‌دار است (تتانی، تشنج، QT طولانی)', 'Symptomatic (tetany, seizure, long QT)'), type: 'chk', def: false },
          { k: 'rate', label: T('دوز انفوزیون (کلسیم عنصری)', 'Infusion dose (elemental calcium)'), type: 'seg', def: '1', opts: [['0.5', fa(0.5)], ['1', fa(1)], ['1.5', fa(1.5)]], unit: 'mg/kg/h' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const c = F.corrCa(v.ca, v.alb);
        out.rows.push([T('کلسیم اصلاح‌شده', 'Corrected calcium'), fa(c, 2) + ' mg/dL', HERO]);
        out.steps.push(`${fa(v.ca)} + ${n(0.8)} × (${n(4)} − ${fa(v.alb)}) = <b>${fa(c, 2)}</b>`);
        if (c < 8.5 || v.sym) {
          out.rows.push([T('وضعیت', 'Status'), c < 7.5 || v.sym ? T('هیپوکلسمی قابل توجه', 'Significant hypocalcemia') : T('هیپوکلسمی خفیف', 'Mild hypocalcemia')]);
          if (v.sym || c < 7.5) {
            const r = +v.rate, mg = v.w * r, g = mg / 93;
            out.rows.push([T('بولوس', 'Bolus'), T('کلسیم گلوکونات ۱۰٪: ۱ تا ۲ گرم (۱۰ تا ۲۰ میلی‌لیتر) طی ۱۰ تا ۲۰ دقیقه', 'Calcium gluconate 10%: 1–2 g (10–20 mL) over 10–20 minutes')],
              [T('انفوزیون کلسیم عنصری', 'Elemental calcium infusion'), fa(mg) + ' mg/h'], [T('معادل کلسیم گلوکونات', 'Calcium gluconate equivalent'), T(`${fa(g, 2)} گرم در ساعت (${fa(g * 10, 1)} میلی‌لیتر ۱۰٪ در ساعت)`, `${fa(g, 2)} g/h (${fa(g * 10, 1)} mL of 10% per hour)`)]);
            out.steps.push(`${fa(v.w)} × ${fa(r)} = ${fa(mg)} mg/h → ÷ ${n(93)} = ${fa(g, 2)} ${T('گرم گلوکونات', 'g gluconate')}`);
          } else out.ok.push(T('هیپوکلسمی خفیف بی‌علامت: کلسیم خوراکی و ویتامین D، و بررسی علت.', 'Mild asymptomatic hypocalcemia: oral calcium and vitamin D, and look for the cause.'));
          out.ok.push(T('منیزیم را بسنج؛ هیپومنیزیمی علت شایع هیپوکلسمی مقاوم است.', 'Check magnesium; hypomagnesemia is a common cause of refractory hypocalcemia.'), T('در بیمار بدحال، کلسیم یونیزه را مستقیم بسنج.', 'In a critically ill patient, measure ionized calcium directly.'));
          out.warn.push(T('با بی‌کربنات یا فسفات در یک رگ نده.', 'Do not give in the same line as bicarbonate or phosphate.'));
        } else if (c > 10.5) {
          const sev = c <= 12 ? T('خفیف', 'mild') : c <= 14 ? T('متوسط', 'moderate') : T('شدید', 'severe');
          out.rows.push([T('وضعیت', 'Status'), T('هیپرکلسمی ' + sev, sev[0].toUpperCase() + sev.slice(1) + ' hypercalcemia')]);
          if (c > 12) {
            out.steps.push(T('سالین ۰٫۹٪: مثلاً ۲۰۰ تا ۳۰۰ میلی‌لیتر در ساعت، هدف ادرار ۱۰۰ تا ۱۵۰ میلی‌لیتر در ساعت', '0.9% saline: for example 200–300 mL/h, targeting urine output of 100–150 mL/h'),
              T(`کلسی‌تونین ${fa(4 * v.w)} واحد (۴ واحد/kg) زیرجلدی یا عضلانی هر ۱۲ ساعت`, `Calcitonin ${fa(4 * v.w)} units (4 units/kg) SC or IM every 12 hours`),
              T('زولدرونیک اسید ۴ میلی‌گرم وریدی طی حداقل ۱۵ دقیقه (با توجه به کارکرد کلیه)', 'Zoledronic acid 4 mg IV over at least 15 minutes (considering kidney function)'));
          } else out.ok.push(T('هیپرکلسمی خفیف: آبرسانی خوراکی، قطع داروهای مؤثر (تیازید، لیتیم، کلسیم، ویتامین D) و بررسی PTH.', 'Mild hypercalcemia: oral hydration, stop contributing drugs (thiazides, lithium, calcium, vitamin D) and check PTH.'));
          out.warn.push(T('دیورتیک لوپ فقط پس از جبران حجم.', 'Loop diuretics only after volume repletion.'));
        } else out.ok.push(T('کلسیم اصلاح‌شده طبیعی است.', 'Corrected calcium is normal.'));
        return out;
      }
    },
    {
      id: 'mg', sym: 'Mg', get name() { return T('منیزیم', 'Magnesium'); }, color: '#1FC8A0',
      get fields() {
        return [
          { k: 'unit', label: T('واحد', 'Unit'), type: 'seg', def: 'mg', opts: [['mg', 'mg/dL'], ['mmol', 'mmol/L']] },
          { k: 'mg', label: T('منیزیم سرم', 'Serum magnesium'), type: 'num', unit: '', def: 1.2 },
          { k: 'renal', label: T('eGFR کمتر از ۳۰', 'eGFR below 30'), type: 'chk', def: false },
          { k: 'sym', label: T('علامت‌دار / آریتمی / تورساد', 'Symptomatic / arrhythmia / torsades'), type: 'chk', def: false }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const m = v.unit === 'mmol' ? F.mgFromMmol(v.mg) : v.mg;
        if (v.unit === 'mmol') out.steps.push(`${fa(v.mg, 2)} mmol/L × ${n(2.43)} = ${fa(m, 2)} mg/dL`);
        const mgRow = [T('منیزیم', 'Magnesium'), `${fa(m, 2)} mg/dL = ${fa(F.mgToMmol(m), 2)} mmol/L`];
        out.rows.push(mgRow);
        const emRow = [T('اورژانس', 'Emergency'), T('سولفات منیزیم ۱ تا ۲ گرم وریدی طی ۵ تا ۲۰ دقیقه', 'Magnesium sulfate 1–2 g IV over 5–20 minutes')];
        if (v.sym) out.rows.push(emRow);
        const t = F.mgTier(m);
        if (!t) {
          if (m > 2.6) {
            out.rows.push([T('وضعیت', 'Status'), T('هیپرمنیزیمی', 'Hypermagnesemia'), HERO]);
            out.steps.push(T('منابع منیزیم (ملین، آنتی‌اسید، انفوزیون) را قطع کن', 'Stop magnesium sources (laxatives, antacids, infusions)'), T('رفلکس‌های وتری، فشار و تنفس را پایش کن', 'Monitor tendon reflexes, blood pressure and breathing'), T('در علائم: کلسیم گلوکونات ۱ گرم وریدی آهسته', 'If symptomatic: calcium gluconate 1 g IV slowly'), T('در نارسایی کلیه: دیالیز', 'In kidney failure: dialysis'));
          } else {
            (v.sym ? emRow : mgRow)[2] = HERO;
            if (!v.sym) out.ok.push(T('منیزیم در محدوده طبیعی است.', 'Magnesium is in the normal range.'));
          }
          return out;
        }
        let min = t.min, max = t.max;
        if (v.renal) { min /= 2; max /= 2; out.warn.push(T('eGFR زیر ۳۰: حدود نصف دوز و سنجش مجدد پیش از هر نوبت.', 'eGFR below 30: about half the dose and recheck before each dose.')); }
        out.rows.push([T('گروه', 'Group'), t.key === 'severe' ? T('شدید (زیر ۱٫۰)', 'Severe (below 1.0)') : t.key === 'moderate' ? T('متوسط (۱٫۰ تا ۱٫۴)', 'Moderate (1.0–1.4)') : T('خفیف (۱٫۵ تا ۱٫۶)', 'Mild (1.5–1.6)')],
          [T('دوز سولفات منیزیم', 'Magnesium sulfate dose'), T(`${fa(min)} تا ${fa(max)} گرم${t.key === 'severe' ? ' طی ۱۲ تا ۲۴ ساعت' : ''}`, `${fa(min)}–${fa(max)} g${t.key === 'severe' ? ' over 12–24 hours' : ''}`), HERO],
          [T('معادل', 'Equivalent'), `${fa(F.mgso4Meq(min), 0)}–${fa(F.mgso4Meq(max), 0)} mEq`]);
        out.ok.push(T('در حالت غیراورژانسی آهسته بده (حدود ۱ گرم در ساعت) تا کمتر از ادرار دفع شود.', 'When not urgent, infuse slowly (about 1 g per hour) so less is lost in the urine.'), T('هم‌زمان پتاسیم و کلسیم را بسنج.', 'Check potassium and calcium at the same time.'));
        return out;
      }
    },
    {
      id: 'p', sym: 'P', get name() { return T('فسفر', 'Phosphate'); }, color: '#FF4B8B',
      get fields() {
        return [
          { k: 'p', label: T('فسفر سرم', 'Serum phosphate'), type: 'num', unit: 'mg/dL', def: 1.8 },
          { k: 'w', label: T('وزن', 'Weight'), type: 'num', unit: 'kg', def: 65 },
          { k: 'k', label: T('پتاسیم سرم', 'Serum potassium'), type: 'num', unit: 'mEq/L', def: 3.8 },
          { k: 'ca', label: T('کلسیم (اختیاری)', 'Calcium (optional)'), type: 'num', unit: 'mg/dL', def: '' },
          { k: 'renal', label: T('نارسایی کلیه', 'Kidney failure'), type: 'chk', def: false }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const pRow = [T('فسفر', 'Phosphate'), `${fa(v.p)} mg/dL = ${fa(F.pToMmol(v.p), 2)} mmol/L`];
        out.rows.push(pRow);
        if (isFinite(v.ca) && v.ca > 0) {
          const x = v.ca * v.p;
          out.rows.push(['Ca × P', fa(x, 0)]);
          if (x > 55) out.warn.push(T('حاصل‌ضرب کلسیم × فسفر بالای ۵۵ است؛ خطر رسوب — فسفات وریدی نده.', 'The calcium × phosphate product is above 55; risk of deposition — do not give IV phosphate.'));
        }
        if (v.p > 4.5) { out.rows.push([T('وضعیت', 'Status'), T('هیپرفسفاتمی', 'Hyperphosphatemia'), HERO]); out.ok.push(T('محدودیت رژیمی ۸۰۰ تا ۱۰۰۰ mg در روز، بایندر همراه غذا، بررسی لیز تومور یا رابدومیولیز؛ دیالیز در موارد شدید.', 'Diet limit of 800–1000 mg/day, binders with meals, look for tumor lysis or rhabdomyolysis; dialysis if severe.')); return out; }
        const t = F.pTier(v.p);
        if (!t) { pRow[2] = HERO; out.ok.push(T('فسفر طبیعی است.', 'Phosphate is normal.')); return out; }
        let dose = t.perKg * v.w;
        out.steps.push(`${fa(t.perKg, 2)} mmol/kg × ${fa(v.w)} = ${fa(dose)} mmol`);
        if (v.renal) { dose /= 2; out.warn.push(T('نارسایی کلیه: حدود نصف دوز با پایش دقیق.', 'Kidney failure: about half the dose with close monitoring.')); }
        const useK = v.k < 4 && !v.renal;
        const ml = dose / 3;
        out.rows.push([T('گروه', 'Group'), t.label], [T('دوز فسفات وریدی', 'IV phosphate dose'), T(`${fa(dose)} mmol طی ۴ تا ۶ ساعت`, `${fa(dose)} mmol over 4–6 hours`), HERO],
          [T('فرآورده پیشنهادی', 'Suggested product'), useK ? T('پتاسیم فسفات', 'Potassium phosphate') : T('سدیم فسفات', 'Sodium phosphate')], [T('حجم فرآورده', 'Product volume'), `${fa(ml)} ${T('میلی‌لیتر', 'mL')}`],
          [useK ? T('پتاسیم همراه', 'Accompanying potassium') : T('سدیم همراه', 'Accompanying sodium'), `${fa(useK ? F.kphosK(dose) : F.naphosNa(dose))} mEq`]);
        if (useK && F.kphosK(dose) / 4 > 10) out.warn.push(T('پتاسیم همراه را در سقف سرعت تزریق پتاسیم (محیطی ۱۰ mEq در ساعت) حساب کن؛ زمان تزریق را طولانی‌تر کن.', 'Count the accompanying potassium toward the potassium rate limit (10 mEq/h peripherally); extend the infusion time.'));
        if (t.key === 'mild') out.ok.push(T('اگر بیمار می‌تواند بخورد، فسفات خوراکی گزینه اول است.', 'If the patient can eat, oral phosphate is the first choice.'));
        out.ok.push(T('۶ ساعت پس از پایان تزریق فسفر را دوباره بسنج.', 'Recheck phosphate 6 hours after the infusion ends.'), T('در ریفیدینگ: انرژی را موقتاً کم کن و تیامین بده.', 'In refeeding: reduce calories temporarily and give thiamine.'));
        return out;
      }
    },
    {
      id: 'conv', sym: '⇄', get name() { return T('تبدیل واحد', 'Unit converter'); }, color: '#58CC02',
      get fields() {
        return [
          { k: 'el', label: T('یون', 'Ion'), type: 'seg', def: 'ca', opts: [['ca', T('کلسیم', 'Calcium')], ['mg', T('منیزیم', 'Magnesium')], ['p', T('فسفر', 'Phosphate')], ['na', T('سدیم/پتاسیم', 'Sodium/Potassium')]] },
          { k: 'val', label: T('مقدار', 'Value'), type: 'num', unit: '', def: 9 }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const k = { ca: 4.008, mg: 2.43, p: 3.1 }[v.el];
        if (v.el === 'na') { out.rows.push(['mmol/L = mEq/L', fa(v.val, 2), HERO]); out.ok.push(T('برای یون‌های تک‌ظرفیتی (سدیم، پتاسیم، کلر) mmol/L و mEq/L برابرند.', 'For monovalent ions (sodium, potassium, chloride), mmol/L equals mEq/L.')); return out; }
        out.rows.push([T('اگر mg/dL است ← mmol/L', 'If in mg/dL → mmol/L'), fa(v.val / k, 3), HERO], [T('اگر mmol/L است ← mg/dL', 'If in mmol/L → mg/dL'), fa(v.val * k, 2)]);
        if (v.el !== 'p') out.rows.push([T('اگر mmol/L است ← mEq/L', 'If in mmol/L → mEq/L'), fa(v.val * 2, 2)]);
        out.ok.push(v.el === 'ca' ? T('کلسیم: ۱ mmol/L ≈ ۴ mg/dL ≈ ۲ mEq/L', 'Calcium: 1 mmol/L ≈ 4 mg/dL ≈ 2 mEq/L') : v.el === 'mg' ? T('منیزیم: ۱ mmol/L = ۲٫۴۳ mg/dL = ۲ mEq/L', 'Magnesium: 1 mmol/L = 2.43 mg/dL = 2 mEq/L') : T('فسفر: ۱ mmol/L = ۳٫۱ mg/dL', 'Phosphate: 1 mmol/L = 3.1 mg/dL'));
        return out;
      }
    }
  ];

  /* ---------- اطلاعات نمایشی هر ابزار: توضیح، بیمار نمونه، گروه فیلدها، گام دکمه‌ها، شدت ---------- */
  const GROUPS = { p: () => T('👤 بیمار', '👤 Patient'), l: () => T('🧪 آزمایش', '🧪 Labs'), t: () => T('💉 درمان و هدف', '💉 Treatment and target') };
  const S_ = (lv, fa_, en_) => [lv, T(fa_, en_)];
  const META = {
    na: {
      get desc() { return T('حجم سالین، کمبود آب آزاد، سدیم اصلاح‌شده و اسمولالیته', 'Saline volume, free water deficit, corrected sodium and osmolality'); },
      preset: { mode: 'hypo', sex: 'f', age: 72, w: 55, na: 114, fluid: 'ns3', goal: 6, risk: true },
      group: { sex: 'p', age: 'p', w: 'p', fluid: 't', goal: 't', risk: 't' },
      step: { age: 1, w: 1, na: 1, goal: 1, glu: 10, bun: 1 },
      sev(v) {
        if (v.mode === 'hypo') return v.na < 120 ? S_('sev', 'هیپوناترمی شدید', 'Severe hyponatremia') : v.na < 130 ? S_('mod', 'هیپوناترمی متوسط', 'Moderate hyponatremia') : v.na < 135 ? S_('mild', 'هیپوناترمی خفیف', 'Mild hyponatremia') : S_('ok', 'سدیم طبیعی', 'Normal sodium');
        if (v.mode === 'hyper') return v.na > 160 ? S_('sev', 'هیپرناترمی شدید', 'Severe hypernatremia') : v.na > 150 ? S_('mod', 'هیپرناترمی متوسط', 'Moderate hypernatremia') : v.na > 145 ? S_('mild', 'هیپرناترمی خفیف', 'Mild hypernatremia') : S_('ok', 'سدیم طبیعی', 'Normal sodium');
        return null;
      }
    },
    k: {
      get desc() { return T('مقدار و زمان تزریق KCl، پروتکل اورژانس هیپرکالمی', 'KCl dose and infusion time, emergency hyperkalemia protocol'); },
      preset: { mode: 'hypo', k: 2.8, route: 'p', renal: false, ecg: false },
      group: { route: 't', renal: 'p', ecg: 'l' },
      step: { k: 0.1 },
      sev(v) {
        if (v.mode === 'hypo') return v.k < 2.5 ? S_('sev', 'هیپوکالمی شدید', 'Severe hypokalemia') : v.k < 3 ? S_('mod', 'هیپوکالمی متوسط', 'Moderate hypokalemia') : v.k < 3.5 ? S_('mild', 'هیپوکالمی خفیف', 'Mild hypokalemia') : S_('ok', 'پتاسیم طبیعی', 'Normal potassium');
        return v.ecg || v.k >= 6.5 ? S_('sev', 'هیپرکالمی اورژانسی', 'Emergency hyperkalemia') : v.k >= 6 ? S_('mod', 'هیپرکالمی متوسط', 'Moderate hyperkalemia') : v.k >= 5.5 ? S_('mild', 'هیپرکالمی خفیف', 'Mild hyperkalemia') : S_('ok', 'پتاسیم طبیعی', 'Normal potassium');
      }
    },
    ca: {
      get desc() { return T('کلسیم اصلاح‌شده، بولوس و انفوزیون کلسیم، درمان هیپرکلسمی', 'Corrected calcium, calcium bolus and infusion, hypercalcemia treatment'); },
      preset: { ca: 6.9, alb: 3.0, w: 70, sym: true, rate: '1' },
      group: { w: 'p', sym: 'p', rate: 't' },
      step: { ca: 0.1, alb: 0.1, w: 1 },
      sev(v) {
        const c = EA.F.corrCa(v.ca, v.alb);
        if (c < 8.5 || v.sym) return c < 7.5 || v.sym ? S_('sev', 'هیپوکلسمی قابل توجه', 'Significant hypocalcemia') : S_('mild', 'هیپوکلسمی خفیف', 'Mild hypocalcemia');
        return c > 14 ? S_('sev', 'هیپرکلسمی شدید', 'Severe hypercalcemia') : c > 12 ? S_('mod', 'هیپرکلسمی متوسط', 'Moderate hypercalcemia') : c > 10.5 ? S_('mild', 'هیپرکلسمی خفیف', 'Mild hypercalcemia') : S_('ok', 'کلسیم طبیعی', 'Normal calcium');
      }
    },
    mg: {
      get desc() { return T('دوز سولفات منیزیم بر اساس شدت و کارکرد کلیه', 'Magnesium sulfate dose by severity and kidney function'); },
      preset: { unit: 'mg', mg: 0.9, renal: false, sym: false },
      group: { renal: 'p', sym: 'p' },
      step: { mg: 0.1 },
      sev(v) {
        const m = v.unit === 'mmol' ? EA.F.mgFromMmol(v.mg) : v.mg;
        return m < 1 ? S_('sev', 'هیپومنیزیمی شدید', 'Severe hypomagnesemia') : m < 1.5 ? S_('mod', 'هیپومنیزیمی متوسط', 'Moderate hypomagnesemia') : m < 1.7 ? S_('mild', 'هیپومنیزیمی خفیف', 'Mild hypomagnesemia') : m > 2.6 ? S_('mod', 'هیپرمنیزیمی', 'Hypermagnesemia') : S_('ok', 'منیزیم طبیعی', 'Normal magnesium');
      }
    },
    p: {
      get desc() { return T('دوز وزن‌محور فسفات، انتخاب فرآورده و پتاسیم همراه', 'Weight-based phosphate dose, product choice and accompanying potassium'); },
      preset: { p: 1.3, w: 60, k: 3.4, ca: 8.8, renal: false },
      group: { w: 'p', renal: 'p' },
      step: { p: 0.1, w: 1, k: 0.1, ca: 0.1 },
      sev(v) { return v.p <= 1.5 ? S_('sev', 'هیپوفسفاتمی شدید', 'Severe hypophosphatemia') : v.p <= 2.2 ? S_('mod', 'هیپوفسفاتمی متوسط', 'Moderate hypophosphatemia') : v.p < 2.5 ? S_('mild', 'هیپوفسفاتمی خفیف', 'Mild hypophosphatemia') : v.p > 4.5 ? S_('mod', 'هیپرفسفاتمی', 'Hyperphosphatemia') : S_('ok', 'فسفر طبیعی', 'Normal phosphate'); }
    },
    conv: { get desc() { return T('mg/dL، mmol/L و mEq/L برای هر یون', 'mg/dL, mmol/L and mEq/L for each ion'); }, preset: { el: 'ca', val: 9 }, group: {}, step: { val: 0.1 }, sev: () => null }
  };

  let cur = 'na';
  const vals = {};
  try { const o = JSON.parse(localStorage.getItem('yona.tools') || 'null'); if (o) { cur = o.cur || cur; Object.assign(vals, o.vals || {}); } } catch (e) { /* */ }
  const persist = () => { try { localStorage.setItem('yona.tools', JSON.stringify({ cur, vals })); } catch (e) { /* */ } };
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
  const isTab = f => f.type === 'seg' && (f.k === 'mode' || f.k === 'el');

  function field(t, f, v) {
    if (f.show && !f.show(v)) return '';
    const id = `f-${t.id}-${f.k}`;
    if (f.type === 'seg') return `<div class="fld fld--wide"><span class="fld__l">${f.label}${f.unit ? ` <small dir="ltr">${f.unit}</small>` : ''}</span><div class="seg">${f.opts.map(o => `<button type="button" class="seg__b ${String(v[f.k]) === o[0] ? 'is-on' : ''}" data-tk="${f.k}" data-tv="${o[0]}">${o[1]}</button>`).join('')}</div></div>`;
    if (f.type === 'sel') return `<label class="fld fld--wide" for="${id}"><span class="fld__l">${f.label}</span><select id="${id}" data-tk="${f.k}">${f.opts.map(o => `<option value="${o[0]}" ${v[f.k] === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></label>`;
    if (f.type === 'chk') return `<label class="fld fld--wide fld--chk"><input type="checkbox" data-tk="${f.k}" ${v[f.k] ? 'checked' : ''}><span>${f.label}</span></label>`;
    const val = typeof v[f.k] === 'number' ? EA.fa(v[f.k], 3) : esc(v[f.k] == null ? '' : v[f.k]);
    return `<label class="fld" for="${id}"><span class="fld__l">${f.label}${f.unit ? ` <small dir="ltr">${f.unit}</small>` : ''}</span>
      <span class="nstep"><button type="button" class="nstep__b" data-step="1" data-sk="${f.k}" aria-label="${T('بیشتر', 'Increase')}">+</button><input id="${id}" type="text" inputmode="decimal" dir="ltr" data-tk="${f.k}" value="${val}" autocomplete="off"><button type="button" class="nstep__b" data-step="-1" data-sk="${f.k}" aria-label="${T('کمتر', 'Decrease')}">−</button></span></label>`;
  }

  function form(t, v) {
    const m = META[t.id];
    const tabs = t.fields.filter(isTab).map(f => `<div class="tmodes" role="tablist">${f.opts.map(o => `<button type="button" role="tab" class="tmode ${String(v[f.k]) === o[0] ? 'is-on' : ''}" data-tk="${f.k}" data-tv="${o[0]}">${o[1]}</button>`).join('')}</div>`).join('');
    const rest = t.fields.filter(f => !isTab(f) && (!f.show || f.show(v)));
    const groups = ['p', 'l', 't'].map(g => {
      const fs = rest.filter(f => (m.group[f.k] || 'l') === g);
      return fs.length ? `<fieldset class="tgrp"><legend>${GROUPS[g]()}</legend><div class="tgrp__f">${fs.map(f => field(t, f, v)).join('')}</div></fieldset>` : '';
    }).join('');
    return tabs + groups;
  }

  function compute(t) {
    const v = numeric(t, values(t));
    const miss = t.fields.filter(f => f.type === 'num' && (!f.show || f.show(v)) && f.k !== 'ca' && !isFinite(v[f.k]));
    if (miss.length) return { miss: miss[0] };
    const r = t.calc(v);
    const m = META[t.id];
    let hi = r.rows.findIndex(x => x[2] === HERO);
    if (hi < 0 && r.rows.length) hi = 0;
    const hero = hi >= 0 ? r.rows[hi] : null;
    return { r, hero, rows: r.rows.filter((_, i) => i !== hi), sev: m.sev(v) };
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
    </div>`;
  }
  function sticky(t) {
    const c = compute(t);
    return c.hero ? `${c.sev ? `<span class="sevc sevc--${c.sev[0]}">${c.sev[1]}</span>` : ''}<span class="tsticky__v"><small>${c.hero[0]}</small><b>${EA.ui.iso(c.hero[1])}</b></span><span class="tsticky__go">${T('جزئیات ↓', 'Details ↓')}</span>` : '';
  }

  function view() {
    const t = tool(), v = values(t);
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>${T('ابزارهای اصلاح', 'Correction tools')}</h1><p>${T('عددهای بیمار را وارد کن؛ نتیجه، شدت و راه‌حل گام‌به‌گام همان لحظه ساخته می‌شود.', 'Enter the patient’s numbers; the result, severity and a step-by-step solution appear instantly.')}</p></header>
      <div class="tpick">${TOOLS.map(x => `<button class="tpc ${x.id === cur ? 'is-on' : ''}" style="--tc:${x.color}" data-tool="${x.id}"><span class="tpc__s">${x.sym}</span><b>${x.name}</b><small>${META[x.id].desc}</small></button>`).join('')}</div>
      <div class="tpanel">
        <div class="tpanel__h"><span class="tpc__s tpc__s--lg">${t.sym}</span><div><h2>${t.name}</h2><small>${META[t.id].desc}</small></div>
          <div class="tpanel__act"><button type="button" class="btn btn--ghost btn--sm" data-tact="preset">🧪 ${T('بیمار نمونه', 'Sample patient')}</button><button type="button" class="btn btn--ghost btn--sm" data-tact="reset" aria-label="${T('بازنشانی', 'Reset')}">↺</button></div></div>
        <div class="tgrid">
          <form class="tform" onsubmit="return false">${form(t, v)}</form>
          <div class="tout" aria-live="polite">${result(t)}</div>
        </div>
      </div>
      <button type="button" class="tsticky" data-tact="jump">${sticky(t)}</button>
      <p class="disclaimer">⚕️ ${T('این ابزار برای آموزش است. دوز نهایی را با پزشک معالج و پروتکل بیمارستان خودت تطبیق بده.', 'This tool is for education. Confirm the final dose with the treating physician and your hospital protocol.')}</p>
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
        const nv = EA.round((isFinite(cur0) ? cur0 : 0) + stp * +sb.dataset.step, 3);
        v[k] = Math.max(0, nv);
        const inp = el.querySelector(`#f-${t.id}-${k}`); if (inp) inp.value = EA.fa(v[k], 3);
        EA.ui.sfx('tap'); redraw(el, false); return;
      }
      const sg = e.target.closest('[data-tv]');
      if (sg) {
        const t = tool(), v = values(t);
        v[sg.dataset.tk] = sg.dataset.tv;
        if (t.id === 'na' && sg.dataset.tk === 'mode') {
          v.goal = v.mode === 'hyper' ? 10 : 6;
          if (v.mode === 'hyper') v.fluid = 'd5w';
          if (v.mode === 'hypo') v.fluid = 'ns3';
        }
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
