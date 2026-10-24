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

/* نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و پرونده‌ها را سرور فقط به مشترکان می‌دهد */
      (function (EA, S) {
        if (S.W) { EA.W = { fa: S.W.fa, en: S.W.en || S.W.fa }; EA.worlds = EA.W[EA.lang] || EA.W.fa; } else EA.worlds = S.worlds;
        if (S.RD) EA.RD = { fa: [], en: [] };
        EA.rounds = [];
        if (S.per) EA.PER_LEVEL = S.per;
        if (S.exam) EA.exam = S.exam;
        EA.PREVIEW = true;
      })(window.EA, {"worlds": [{"id": "na", "sym": "Na", "name": "سدیم", "sub": "آب، اسمولالیته و مغز", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "gens": ["na.tbw", "na.osm", "na.corrGlu", "na.adrogue", "na.adrogueVol", "na.limit", "na.fwd", "na.d5w", "na.furst"], "lessons": [{"id": "na1", "title": "سدیم و آب بدن", "icon": "💧", "items": [{"t": "learn", "title": "سدیم یعنی حساب آب", "body": "سدیم اصلی‌ترین کاتیون مایع خارج سلولی است و محدوده طبیعی آن <b>۱۳۵ تا ۱۴۵ mEq/L</b> است.<br><br>نکته کلیدی: اختلال سدیم بیشتر <b>اختلال آب</b> است تا اختلال خود سدیم. هیپوناترمی یعنی آب نسبت به سدیم زیاد است، نه لزوماً اینکه سدیم کم باشد."}, {"t": "mcq", "q": "محدوده طبیعی سدیم سرم کدام است؟", "opts": ["۱۳۵ تا ۱۴۵ mEq/L", "۱۲۵ تا ۱۳۵ mEq/L", "۱۴۵ تا ۱۵۵ mEq/L", "۳٫۵ تا ۵٫۰ mEq/L"], "why": "۱۳۵ تا ۱۴۵ طبیعی است. ۳٫۵ تا ۵ محدوده پتاسیم است!"}, {"t": "learn", "title": "آب کل بدن (TBW)", "body": "تقریباً همه فرمول‌های سدیم به آب کل بدن نیاز دارند:<div class=\"fx\" dir=\"ltr\">TBW = وزن (kg) × ضریب</div><table class=\"mini\"><tr><td>کودک</td><td>۰٫۶</td></tr><tr><td>مرد بزرگسال</td><td>۰٫۶</td></tr><tr><td>زن بزرگسال</td><td>۰٫۵</td></tr><tr><td>مرد سالمند (۶۵+)</td><td>۰٫۵</td></tr><tr><td>زن سالمند (۶۵+)</td><td>۰٫۴۵</td></tr></table>"}, {"t": "mcq", "q": "ضریب TBW برای زن ۴۰ ساله چند است؟", "opts": ["۰٫۵", "۰٫۶", "۰٫۴۵", "۰٫۷"], "why": "زن بزرگسال زیر ۶۵ سال: ۰٫۵."}, {"t": "num", "gen": "na.tbw"}, {"t": "tf", "q": "هیپوناترمی تقریباً همیشه یعنی سدیم کل بدن کم است.", "a": false, "why": "خیر. در نارسایی قلب یا سیروز سدیم کل بدن زیاد است ولی آب بیشتر از آن زیاد شده. هیپوناترمی نسبت آب به سدیم است."}, {"t": "learn", "title": "اسمولالیته سرم", "body": "غلظت ذرات حل‌شده در سرم:<div class=\"fx\" dir=\"ltr\">Osm = 2×Na + Glucose/18 + BUN/2.8</div>محدوده طبیعی: <b>۲۷۵ تا ۲۹۵ mOsm/kg</b>.<br>اوره آزادانه از غشای سلول می‌گذرد؛ پس در «تونیسیته مؤثر» نقشی ندارد."}, {"t": "num", "gen": "na.osm"}, {"t": "mcq", "q": "کدام ماده تونیسیته مؤثر سرم را بالا نمی‌برد؟", "opts": ["اوره", "گلوکز", "سدیم", "مانیتول"], "why": "اوره از غشا عبور می‌کند و آب را جابجا نمی‌کند، پس «اسمول غیرمؤثر» است."}, {"t": "match", "q": "جفت‌ها را پیدا کن", "pairs": [["سدیم طبیعی", "۱۳۵–۱۴۵"], ["اسمولالیته طبیعی", "۲۷۵–۲۹۵"], ["ضریب TBW زن سالمند", "۰٫۴۵"], ["ضریب TBW مرد جوان", "۰٫۶"]]}]}, {"id": "na2", "title": "هیپوناترمی: تشخیص", "icon": "🔍", "items": [], "locked": 1}, {"id": "na6", "title": "علت‌ها و داروها", "icon": "💊", "items": [], "locked": 1}, {"id": "na3", "title": "اصلاح هیپوناترمی", "icon": "🩺", "items": [], "locked": 1}, {"id": "na7", "title": "SIADH و درمان‌های ویژه", "icon": "🧪", "items": [], "locked": 1}, {"id": "na4", "title": "هیپرناترمی", "icon": "🔥", "items": [], "locked": 1}, {"id": "na8", "title": "دیابت بی‌مزه و انتخاب مایع", "icon": "🚰", "items": [], "locked": 1}, {"id": "na5", "title": "بیمارستان سدیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "na9", "title": "آی‌سی‌یو سدیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["قطره‌های کنجکاو", "موج‌سواران اسمز", "اقیانوس‌بان‌ها"]}, {"id": "k", "sym": "K", "name": "پتاسیم", "sub": "ریتم قلب در دستان تو", "color": "#CE82FF", "dark": "#A568CC", "light": "#F4E6FF", "gens": ["k.need", "k.time", "k.dka"], "lessons": [{"id": "k1", "title": "پتاسیم و قلب", "icon": "💜", "items": [], "locked": 1}, {"id": "k2", "title": "هیپوکالمی", "icon": "📉", "items": [], "locked": 1}, {"id": "k6", "title": "علت‌یابی هیپوکالمی", "icon": "🔎", "items": [], "locked": 1}, {"id": "k3", "title": "تزریق امن پتاسیم", "icon": "💉", "items": [], "locked": 1}, {"id": "k4", "title": "هیپرکالمی اورژانسی", "icon": "⚡", "items": [], "locked": 1}, {"id": "k7", "title": "هیپرکالمی مزمن و داروها", "icon": "💊", "items": [], "locked": 1}, {"id": "k8", "title": "پتاسیم در کتواسیدوز", "icon": "🍬", "items": [], "locked": 1}, {"id": "k5", "title": "بیمارستان پتاسیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "k9", "title": "آی‌سی‌یو پتاسیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["تپش‌های نخستین", "نگهبانان ریتم", "فرماندهان ضربان"]}, {"id": "ca", "sym": "Ca", "name": "کلسیم", "sub": "استخوان، عضله و آلبومین", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "gens": ["ca.corr", "ca.elem", "ca.inf", "ca.calcitonin"], "lessons": [{"id": "ca1", "title": "کلسیم و آلبومین", "icon": "🦴", "items": [], "locked": 1}, {"id": "ca2", "title": "هیپوکلسمی", "icon": "🥶", "items": [], "locked": 1}, {"id": "ca6", "title": "PTH و ویتامین D", "icon": "☀️", "items": [], "locked": 1}, {"id": "ca3", "title": "اصلاح هیپوکلسمی", "icon": "💉", "items": [], "locked": 1}, {"id": "ca4", "title": "هیپرکلسمی", "icon": "🌋", "items": [], "locked": 1}, {"id": "ca7", "title": "بحران هیپرکلسمی", "icon": "🔥", "items": [], "locked": 1}, {"id": "ca8", "title": "کلسیم، کلیه و سنگ", "icon": "🪨", "items": [], "locked": 1}, {"id": "ca5", "title": "بیمارستان کلسیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "ca9", "title": "آی‌سی‌یو کلسیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["استخوان‌بندها", "معماران کلسیم", "دژبانان اسکلت"]}, {"id": "mg", "sym": "Mg", "name": "منیزیم", "sub": "کاتیون فراموش‌شده", "color": "#1FC8A0", "dark": "#16A383", "light": "#DBF8F0", "gens": ["mg.conv", "mg.meq", "mg.tier", "mg.femg", "mg.asthmaChild"], "lessons": [{"id": "mg1", "title": "منیزیم را بشناس", "icon": "✨", "items": [], "locked": 1}, {"id": "mg2", "title": "مثلث Mg–K–Ca", "icon": "🔗", "items": [], "locked": 1}, {"id": "mg6", "title": "علت‌های هیپومنیزیمی", "icon": "🍷", "items": [], "locked": 1}, {"id": "mg3", "title": "اصلاح هیپومنیزیمی", "icon": "💉", "items": [], "locked": 1}, {"id": "mg4", "title": "هیپرمنیزیمی و پره‌اکلامپسی", "icon": "🤰", "items": [], "locked": 1}, {"id": "mg7", "title": "منیزیم در قلب و آسم", "icon": "🫀", "items": [], "locked": 1}, {"id": "mg8", "title": "منیزیم در غذا و قرص", "icon": "🥬", "items": [], "locked": 1}, {"id": "mg5", "title": "بیمارستان منیزیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "mg9", "title": "آی‌سی‌یو منیزیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["جرقه‌های سبز", "افسونگران منیزیم", "جادوگران مثلث"]}, {"id": "p", "sym": "P", "name": "فسفر", "sub": "انرژی سلول و سندرم ریفیدینگ", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "gens": ["p.conv", "p.dose", "p.kphos", "p.refeed", "p.caxp", "p.fepo4"], "lessons": [{"id": "p1", "title": "فسفر، باتری سلول", "icon": "🔋", "items": [], "locked": 1}, {"id": "p2", "title": "سندرم ریفیدینگ", "icon": "🍽️", "items": [], "locked": 1}, {"id": "p6", "title": "علت‌های هیپوفسفاتمی", "icon": "🔍", "items": [], "locked": 1}, {"id": "p3", "title": "اصلاح هیپوفسفاتمی", "icon": "💉", "items": [], "locked": 1}, {"id": "p4", "title": "هیپرفسفاتمی", "icon": "🧱", "items": [], "locked": 1}, {"id": "p7", "title": "فسفر در سفره کلیوی", "icon": "🥛", "items": [], "locked": 1}, {"id": "p8", "title": "لیز تومور و رابدو", "icon": "💥", "items": [], "locked": 1}, {"id": "p5", "title": "بیمارستان فسفر", "icon": "🏥", "items": [], "locked": 1}, {"id": "p9", "title": "آی‌سی‌یو فسفر", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["باتری‌های تازه", "مهندسان انرژی", "فرمانروایان ATP"]}], "W": {"fa": [{"id": "na", "sym": "Na", "name": "سدیم", "sub": "آب، اسمولالیته و مغز", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "gens": ["na.tbw", "na.osm", "na.corrGlu", "na.adrogue", "na.adrogueVol", "na.limit", "na.fwd", "na.d5w", "na.furst"], "lessons": [{"id": "na1", "title": "سدیم و آب بدن", "icon": "💧", "items": [{"t": "learn", "title": "سدیم یعنی حساب آب", "body": "سدیم اصلی‌ترین کاتیون مایع خارج سلولی است و محدوده طبیعی آن <b>۱۳۵ تا ۱۴۵ mEq/L</b> است.<br><br>نکته کلیدی: اختلال سدیم بیشتر <b>اختلال آب</b> است تا اختلال خود سدیم. هیپوناترمی یعنی آب نسبت به سدیم زیاد است، نه لزوماً اینکه سدیم کم باشد."}, {"t": "mcq", "q": "محدوده طبیعی سدیم سرم کدام است؟", "opts": ["۱۳۵ تا ۱۴۵ mEq/L", "۱۲۵ تا ۱۳۵ mEq/L", "۱۴۵ تا ۱۵۵ mEq/L", "۳٫۵ تا ۵٫۰ mEq/L"], "why": "۱۳۵ تا ۱۴۵ طبیعی است. ۳٫۵ تا ۵ محدوده پتاسیم است!"}, {"t": "learn", "title": "آب کل بدن (TBW)", "body": "تقریباً همه فرمول‌های سدیم به آب کل بدن نیاز دارند:<div class=\"fx\" dir=\"ltr\">TBW = وزن (kg) × ضریب</div><table class=\"mini\"><tr><td>کودک</td><td>۰٫۶</td></tr><tr><td>مرد بزرگسال</td><td>۰٫۶</td></tr><tr><td>زن بزرگسال</td><td>۰٫۵</td></tr><tr><td>مرد سالمند (۶۵+)</td><td>۰٫۵</td></tr><tr><td>زن سالمند (۶۵+)</td><td>۰٫۴۵</td></tr></table>"}, {"t": "mcq", "q": "ضریب TBW برای زن ۴۰ ساله چند است؟", "opts": ["۰٫۵", "۰٫۶", "۰٫۴۵", "۰٫۷"], "why": "زن بزرگسال زیر ۶۵ سال: ۰٫۵."}, {"t": "num", "gen": "na.tbw"}, {"t": "tf", "q": "هیپوناترمی تقریباً همیشه یعنی سدیم کل بدن کم است.", "a": false, "why": "خیر. در نارسایی قلب یا سیروز سدیم کل بدن زیاد است ولی آب بیشتر از آن زیاد شده. هیپوناترمی نسبت آب به سدیم است."}, {"t": "learn", "title": "اسمولالیته سرم", "body": "غلظت ذرات حل‌شده در سرم:<div class=\"fx\" dir=\"ltr\">Osm = 2×Na + Glucose/18 + BUN/2.8</div>محدوده طبیعی: <b>۲۷۵ تا ۲۹۵ mOsm/kg</b>.<br>اوره آزادانه از غشای سلول می‌گذرد؛ پس در «تونیسیته مؤثر» نقشی ندارد."}, {"t": "num", "gen": "na.osm"}, {"t": "mcq", "q": "کدام ماده تونیسیته مؤثر سرم را بالا نمی‌برد؟", "opts": ["اوره", "گلوکز", "سدیم", "مانیتول"], "why": "اوره از غشا عبور می‌کند و آب را جابجا نمی‌کند، پس «اسمول غیرمؤثر» است."}, {"t": "match", "q": "جفت‌ها را پیدا کن", "pairs": [["سدیم طبیعی", "۱۳۵–۱۴۵"], ["اسمولالیته طبیعی", "۲۷۵–۲۹۵"], ["ضریب TBW زن سالمند", "۰٫۴۵"], ["ضریب TBW مرد جوان", "۰٫۶"]]}]}, {"id": "na2", "title": "هیپوناترمی: تشخیص", "icon": "🔍", "items": [], "locked": 1}, {"id": "na6", "title": "علت‌ها و داروها", "icon": "💊", "items": [], "locked": 1}, {"id": "na3", "title": "اصلاح هیپوناترمی", "icon": "🩺", "items": [], "locked": 1}, {"id": "na7", "title": "SIADH و درمان‌های ویژه", "icon": "🧪", "items": [], "locked": 1}, {"id": "na4", "title": "هیپرناترمی", "icon": "🔥", "items": [], "locked": 1}, {"id": "na8", "title": "دیابت بی‌مزه و انتخاب مایع", "icon": "🚰", "items": [], "locked": 1}, {"id": "na5", "title": "بیمارستان سدیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "na9", "title": "آی‌سی‌یو سدیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["قطره‌های کنجکاو", "موج‌سواران اسمز", "اقیانوس‌بان‌ها"]}, {"id": "k", "sym": "K", "name": "پتاسیم", "sub": "ریتم قلب در دستان تو", "color": "#CE82FF", "dark": "#A568CC", "light": "#F4E6FF", "gens": ["k.need", "k.time", "k.dka"], "lessons": [{"id": "k1", "title": "پتاسیم و قلب", "icon": "💜", "items": [], "locked": 1}, {"id": "k2", "title": "هیپوکالمی", "icon": "📉", "items": [], "locked": 1}, {"id": "k6", "title": "علت‌یابی هیپوکالمی", "icon": "🔎", "items": [], "locked": 1}, {"id": "k3", "title": "تزریق امن پتاسیم", "icon": "💉", "items": [], "locked": 1}, {"id": "k4", "title": "هیپرکالمی اورژانسی", "icon": "⚡", "items": [], "locked": 1}, {"id": "k7", "title": "هیپرکالمی مزمن و داروها", "icon": "💊", "items": [], "locked": 1}, {"id": "k8", "title": "پتاسیم در کتواسیدوز", "icon": "🍬", "items": [], "locked": 1}, {"id": "k5", "title": "بیمارستان پتاسیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "k9", "title": "آی‌سی‌یو پتاسیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["تپش‌های نخستین", "نگهبانان ریتم", "فرماندهان ضربان"]}, {"id": "ca", "sym": "Ca", "name": "کلسیم", "sub": "استخوان، عضله و آلبومین", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "gens": ["ca.corr", "ca.elem", "ca.inf", "ca.calcitonin"], "lessons": [{"id": "ca1", "title": "کلسیم و آلبومین", "icon": "🦴", "items": [], "locked": 1}, {"id": "ca2", "title": "هیپوکلسمی", "icon": "🥶", "items": [], "locked": 1}, {"id": "ca6", "title": "PTH و ویتامین D", "icon": "☀️", "items": [], "locked": 1}, {"id": "ca3", "title": "اصلاح هیپوکلسمی", "icon": "💉", "items": [], "locked": 1}, {"id": "ca4", "title": "هیپرکلسمی", "icon": "🌋", "items": [], "locked": 1}, {"id": "ca7", "title": "بحران هیپرکلسمی", "icon": "🔥", "items": [], "locked": 1}, {"id": "ca8", "title": "کلسیم، کلیه و سنگ", "icon": "🪨", "items": [], "locked": 1}, {"id": "ca5", "title": "بیمارستان کلسیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "ca9", "title": "آی‌سی‌یو کلسیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["استخوان‌بندها", "معماران کلسیم", "دژبانان اسکلت"]}, {"id": "mg", "sym": "Mg", "name": "منیزیم", "sub": "کاتیون فراموش‌شده", "color": "#1FC8A0", "dark": "#16A383", "light": "#DBF8F0", "gens": ["mg.conv", "mg.meq", "mg.tier", "mg.femg", "mg.asthmaChild"], "lessons": [{"id": "mg1", "title": "منیزیم را بشناس", "icon": "✨", "items": [], "locked": 1}, {"id": "mg2", "title": "مثلث Mg–K–Ca", "icon": "🔗", "items": [], "locked": 1}, {"id": "mg6", "title": "علت‌های هیپومنیزیمی", "icon": "🍷", "items": [], "locked": 1}, {"id": "mg3", "title": "اصلاح هیپومنیزیمی", "icon": "💉", "items": [], "locked": 1}, {"id": "mg4", "title": "هیپرمنیزیمی و پره‌اکلامپسی", "icon": "🤰", "items": [], "locked": 1}, {"id": "mg7", "title": "منیزیم در قلب و آسم", "icon": "🫀", "items": [], "locked": 1}, {"id": "mg8", "title": "منیزیم در غذا و قرص", "icon": "🥬", "items": [], "locked": 1}, {"id": "mg5", "title": "بیمارستان منیزیم", "icon": "🏥", "items": [], "locked": 1}, {"id": "mg9", "title": "آی‌سی‌یو منیزیم", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["جرقه‌های سبز", "افسونگران منیزیم", "جادوگران مثلث"]}, {"id": "p", "sym": "P", "name": "فسفر", "sub": "انرژی سلول و سندرم ریفیدینگ", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "gens": ["p.conv", "p.dose", "p.kphos", "p.refeed", "p.caxp", "p.fepo4"], "lessons": [{"id": "p1", "title": "فسفر، باتری سلول", "icon": "🔋", "items": [], "locked": 1}, {"id": "p2", "title": "سندرم ریفیدینگ", "icon": "🍽️", "items": [], "locked": 1}, {"id": "p6", "title": "علت‌های هیپوفسفاتمی", "icon": "🔍", "items": [], "locked": 1}, {"id": "p3", "title": "اصلاح هیپوفسفاتمی", "icon": "💉", "items": [], "locked": 1}, {"id": "p4", "title": "هیپرفسفاتمی", "icon": "🧱", "items": [], "locked": 1}, {"id": "p7", "title": "فسفر در سفره کلیوی", "icon": "🥛", "items": [], "locked": 1}, {"id": "p8", "title": "لیز تومور و رابدو", "icon": "💥", "items": [], "locked": 1}, {"id": "p5", "title": "بیمارستان فسفر", "icon": "🏥", "items": [], "locked": 1}, {"id": "p9", "title": "آی‌سی‌یو فسفر", "icon": "🚨", "items": [], "_algo": true, "locked": 1}], "levels": ["باتری‌های تازه", "مهندسان انرژی", "فرمانروایان ATP"]}], "en": [{"id": "na", "sym": "Na", "name": "Sodium", "sub": "Water, osmolality and the brain", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "gens": ["na.tbw", "na.osm", "na.corrGlu", "na.adrogue", "na.adrogueVol", "na.limit", "na.fwd", "na.d5w", "na.furst"], "lessons": [{"id": "na1", "icon": "💧", "title": "Sodium and body water", "items": [{"t": "learn", "title": "Sodium is really about water", "body": "Sodium is the main cation of the extracellular fluid. The normal range is <b>135–145 mEq/L</b>.<br><br>Key idea: sodium disorders are mostly <b>water disorders</b>. Hyponatremia means too much water relative to sodium, not necessarily too little sodium."}, {"t": "mcq", "q": "What is the normal serum sodium range?", "opts": ["135–145 mEq/L", "125–135 mEq/L", "145–155 mEq/L", "3.5–5.0 mEq/L"], "why": "135–145 is normal. 3.5–5.0 is the potassium range!"}, {"t": "learn", "title": "Total body water (TBW)", "body": "Almost every sodium formula needs total body water:<div class=\"fx\" dir=\"ltr\">TBW = weight (kg) × factor</div><table class=\"mini\"><tr><td>Child</td><td>0.6</td></tr><tr><td>Adult man</td><td>0.6</td></tr><tr><td>Adult woman</td><td>0.5</td></tr><tr><td>Older man (65+)</td><td>0.5</td></tr><tr><td>Older woman (65+)</td><td>0.45</td></tr></table>"}, {"t": "mcq", "q": "What is the TBW factor for a 40-year-old woman?", "opts": ["0.5", "0.6", "0.45", "0.7"], "why": "Adult woman under 65: 0.5."}, {"t": "num", "gen": "na.tbw"}, {"t": "tf", "q": "Hyponatremia almost always means total body sodium is low.", "a": false, "why": "No. In heart failure or cirrhosis total body sodium is high, but water has risen even more. Hyponatremia reflects the ratio of water to sodium."}, {"t": "learn", "title": "Serum osmolality", "body": "The concentration of dissolved particles in serum:<div class=\"fx\" dir=\"ltr\">Osm = 2×Na + Glucose/18 + BUN/2.8</div>Normal: <b>275–295 mOsm/kg</b>.<br>Urea crosses cell membranes freely, so it does not contribute to <b>effective</b> osmolality (tonicity)."}, {"t": "num", "gen": "na.osm"}, {"t": "mcq", "q": "Which substance does NOT raise effective serum tonicity?", "opts": ["Urea", "Glucose", "Sodium", "Mannitol"], "why": "Urea crosses membranes and does not move water, so it is an “ineffective osmole.”"}, {"t": "match", "q": "Match the pairs", "pairs": [["Normal sodium", "135–145"], ["Normal osmolality", "275–295"], ["TBW factor, older woman", "0.45"], ["TBW factor, young man", "0.6"]]}]}, {"id": "na2", "icon": "🔍", "title": "Hyponatremia: diagnosis", "items": [], "locked": 1}, {"id": "na6", "icon": "💊", "title": "Causes and drugs", "items": [], "locked": 1}, {"id": "na3", "icon": "🩺", "title": "Correcting hyponatremia", "items": [], "locked": 1}, {"id": "na7", "icon": "🧪", "title": "SIADH and special treatments", "items": [], "locked": 1}, {"id": "na4", "icon": "🔥", "title": "Hypernatremia", "items": [], "locked": 1}, {"id": "na8", "icon": "🚰", "title": "Diabetes insipidus and fluid choice", "items": [], "locked": 1}, {"id": "na5", "icon": "🏥", "title": "Sodium hospital", "items": [], "locked": 1}, {"id": "na9", "icon": "🚨", "title": "Sodium ICU", "items": [], "locked": 1}], "levels": ["Curious Droplets", "Osmosis Surfers", "Ocean Keepers"]}, {"id": "k", "sym": "K", "name": "Potassium", "sub": "The heart’s rhythm in your hands", "color": "#CE82FF", "dark": "#A568CC", "light": "#F4E6FF", "gens": ["k.need", "k.time", "k.dka"], "lessons": [{"id": "k1", "icon": "💜", "title": "Potassium and the heart", "items": [], "locked": 1}, {"id": "k2", "icon": "📉", "title": "Hypokalemia", "items": [], "locked": 1}, {"id": "k6", "icon": "🔎", "title": "Finding the cause of hypokalemia", "items": [], "locked": 1}, {"id": "k3", "icon": "💉", "title": "Giving potassium safely", "items": [], "locked": 1}, {"id": "k4", "icon": "⚡", "title": "Emergency hyperkalemia", "items": [], "locked": 1}, {"id": "k7", "icon": "💊", "title": "Chronic hyperkalemia and drugs", "items": [], "locked": 1}, {"id": "k8", "icon": "🍬", "title": "Potassium in ketoacidosis", "items": [], "locked": 1}, {"id": "k5", "icon": "🏥", "title": "Potassium hospital", "items": [], "locked": 1}, {"id": "k9", "icon": "🚨", "title": "Potassium ICU", "items": [], "locked": 1}], "levels": ["First Heartbeats", "Rhythm Guardians", "Pulse Commanders"]}, {"id": "ca", "sym": "Ca", "name": "Calcium", "sub": "Bones, muscle and albumin", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "gens": ["ca.corr", "ca.elem", "ca.inf", "ca.calcitonin"], "lessons": [{"id": "ca1", "icon": "🦴", "title": "Calcium and albumin", "items": [], "locked": 1}, {"id": "ca2", "icon": "🥶", "title": "Hypocalcemia", "items": [], "locked": 1}, {"id": "ca6", "icon": "☀️", "title": "PTH and vitamin D", "items": [], "locked": 1}, {"id": "ca3", "icon": "💉", "title": "Correcting hypocalcemia", "items": [], "locked": 1}, {"id": "ca4", "icon": "🌋", "title": "Hypercalcemia", "items": [], "locked": 1}, {"id": "ca7", "icon": "🔥", "title": "Hypercalcemic crisis", "items": [], "locked": 1}, {"id": "ca8", "icon": "🪨", "title": "Calcium, kidneys and stones", "items": [], "locked": 1}, {"id": "ca5", "icon": "🏥", "title": "Calcium hospital", "items": [], "locked": 1}, {"id": "ca9", "icon": "🚨", "title": "Calcium ICU", "items": [], "locked": 1}], "levels": ["Bone Builders", "Calcium Architects", "Skeleton Sentinels"]}, {"id": "mg", "sym": "Mg", "name": "Magnesium", "sub": "The forgotten cation", "color": "#1FC8A0", "dark": "#16A383", "light": "#DBF8F0", "gens": ["mg.conv", "mg.meq", "mg.tier", "mg.femg", "mg.asthmaChild"], "lessons": [{"id": "mg1", "icon": "✨", "title": "Meet magnesium", "items": [], "locked": 1}, {"id": "mg2", "icon": "🔗", "title": "The Mg–K–Ca triangle", "items": [], "locked": 1}, {"id": "mg6", "icon": "🍷", "title": "Causes of hypomagnesemia", "items": [], "locked": 1}, {"id": "mg3", "icon": "💉", "title": "Correcting hypomagnesemia", "items": [], "locked": 1}, {"id": "mg4", "icon": "🤰", "title": "Hypermagnesemia and pre-eclampsia", "items": [], "locked": 1}, {"id": "mg7", "icon": "🫀", "title": "Magnesium for heart and asthma", "items": [], "locked": 1}, {"id": "mg8", "icon": "🥬", "title": "Magnesium in food and tablets", "items": [], "locked": 1}, {"id": "mg5", "icon": "🏥", "title": "Magnesium hospital", "items": [], "locked": 1}, {"id": "mg9", "icon": "🚨", "title": "Magnesium ICU", "items": [], "locked": 1}], "levels": ["Green Sparks", "Magnesium Enchanters", "Triangle Wizards"]}, {"id": "p", "sym": "P", "name": "Phosphate", "sub": "Cell energy and refeeding syndrome", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "gens": ["p.conv", "p.dose", "p.kphos", "p.refeed", "p.caxp", "p.fepo4"], "lessons": [{"id": "p1", "icon": "🔋", "title": "Phosphate, the cell’s battery", "items": [], "locked": 1}, {"id": "p2", "icon": "🍽️", "title": "Refeeding syndrome", "items": [], "locked": 1}, {"id": "p6", "icon": "🔍", "title": "Causes of hypophosphatemia", "items": [], "locked": 1}, {"id": "p3", "icon": "💉", "title": "Correcting hypophosphatemia", "items": [], "locked": 1}, {"id": "p4", "icon": "🧱", "title": "Hyperphosphatemia", "items": [], "locked": 1}, {"id": "p7", "icon": "🥛", "title": "Phosphate on the kidney-friendly plate", "items": [], "locked": 1}, {"id": "p8", "icon": "💥", "title": "Tumor lysis and rhabdomyolysis", "items": [], "locked": 1}, {"id": "p5", "icon": "🏥", "title": "Phosphate hospital", "items": [], "locked": 1}, {"id": "p9", "icon": "🚨", "title": "Phosphate ICU", "items": [], "locked": 1}], "levels": ["Fresh Batteries", "Energy Engineers", "ATP Rulers"]}]}, "RD": true, "per": 3, "exam": {"checkpoint": {"count": 10, "gens": 3, "pass": 0.7}, "final": {"perWorld": 5, "gensPerWorld": 2, "pass": 0.8, "minutes": 25}}});



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
