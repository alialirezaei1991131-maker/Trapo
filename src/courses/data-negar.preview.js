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
    descEn: 'Malnutrition criteria, inflammation, muscle and fat, fluid, grip strength and micronutrients.', toolsEn: 'Malnutrition classification & NFPE tools', domainEn: 'NFPE',
    color: '#8e2c6e', dark: '#6a1d51', light: '#f7e2ef', langs: ["fa", "en"], codePrefix: 'NG',
    stats: {"worlds": 5, "levels": 15, "lessons": 45, "questions": 267, "rounds": 15, "roundSteps": 76, "chars": 15, "firstLesson": "hx1"},
    /* کاتالوگ برای صفحه اول و پنجره معرفی/ارتقا: دنیاها و سطح‌ها، ابزارها، اهداف یادگیری */
    catalog: {"tagline": "بدن بیمار را مثل یک کتاب بخوان", "about": "نگار، ذره‌بینی که با دقت نگاه می‌کند، معاینه فیزیکی تغذیه‌محور بزرگسالان را بر پایه معیارهای Academy/ASPEN آموزش می‌دهد: شش ویژگی سوءتغذیه در زمینه حاد، مزمن و اجتماعی، التهاب و مستندسازی با کد ICD-10، معاینه عضله و چربی از گیجگاه تا ساق، ادم و دهیدراتاسیون، قدرت چنگش و نشانه‌های ریزمغذی‌ها در پوست، ناخن، مو و دهان. بیش از صد تصویر بالینی (طبیعی، خفیف تا متوسط و شدید) چشمت را برای معاینه واقعی تربیت می‌کند و ۱۵ بیمار در راند، ارزیابی و نوشتن یادداشت را تمرین می‌دهند.", "audience": "کارشناس و دانشجوی تغذیه، متخصص تغذیه، پزشک و رزیدنت، پرستار بخش و ICU", "highlights": ["بیش از ۱۰۰ تصویر بالینی واقعی", "طبقه‌بندی سوءتغذیه با متن آماده یادداشت", "نسخه کامل فارسی و انگلیسی"], "outcomes": ["شش ویژگی سوءتغذیه را در زمینه حاد، مزمن و اجتماعی به کار ببری", "کاهش وزن و دریافت انرژی را حساب کنی و بدانی دقیقاً کدام آستانه را کامل می‌کنند", "گیجگاه، ترقوه، کتف، دنده‌ها، سه‌سر، دست، ران و ساق را معاینه کنی و درجه تحلیل را تعیین کنی", "ادم گوده‌گذار را از ۱+ تا ۴+ درجه‌بندی کنی و از ادم براونی و ترومبوز ورید عمقی جدا کنی", "دهیدراتاسیون را در دهان، چشم، پوست، ناخن و نسبت BUN به کراتینین بشناسی", "قدرت چنگش را به روش استاندارد بسنجی و نشانه‌های پوست، ناخن، مو و دهان را بخوانی", "یادداشت سوءتغذیه را خلاصه، مستدل و با کد ICD-10 درست بنویسی"], "worlds": [{"id": "hx", "name": "آمادگی و ارزیابی", "sub": "شش ویژگی سوءتغذیه، دریافت، وزن و روش معاینه", "sym": "Hx", "color": "#FF7A45", "levels": ["قدم‌های اول", "کارآگاهان تاریخچه", "استادان سر تا پا"]}, {"id": "inf", "name": "التهاب و مستندسازی", "sub": "اتیولوژی، نشانگرها، کدگذاری و پرونده", "sym": "CRP", "color": "#7B5CE0", "levels": ["ردیابان التهاب", "خوانندگان آزمایش", "نویسندگان پرونده"]}, {"id": "mf", "name": "عضله و چربی", "sub": "معاینه سر تا پای ذخیره عضله و چربی زیرپوستی", "sym": "M/F", "color": "#E5476B", "levels": ["نقشه‌خوانان بدن", "لمس‌شناسان", "استادان تحلیل"]}, {"id": "fl", "name": "وضعیت مایعات", "sub": "ادم، درجه‌بندی گوده و دهیدراتاسیون", "sym": "H₂O", "color": "#18A6D9", "levels": ["ردیابان مایع", "درجه‌بندان ادم", "نگهبانان آب"]}, {"id": "mn", "name": "عملکرد و ریزمغذی‌ها", "sub": "قدرت چنگش و نشانه‌های پوست، ناخن، مو و دهان", "sym": "Zn", "color": "#12A594", "levels": ["قدرت‌سنج‌ها", "کارآگاهان پوست و ناخن", "استادان سر تا پا"]}], "tools": [{"id": "aspen", "sym": "Dx", "name": "طبقه‌بندی سوءتغذیه", "color": "#8E2C6E", "desc": "شش ویژگی سوءتغذیه در سه زمینه؛ تشخیص پیشنهادی، کد ICD-10 و متن یادداشت"}, {"id": "wt", "sym": "Wt", "name": "تغییر وزن", "color": "#FF7A45", "desc": "درصد کاهش وزن، درصد وزن معمول، BMI و معیار هر زمینه"}, {"id": "intake", "sym": "kcal", "name": "دریافت انرژی", "color": "#7B5CE0", "desc": "دریافت به صورت درصد نیاز و معیار دریافت در هر زمینه"}, {"id": "grip", "sym": "Grip", "name": "قدرت چنگش", "color": "#12A594", "desc": "میانگین سه تلاش هر دست به روش استاندارد و نقطه برش قدرت کم"}, {"id": "edema", "sym": "1+", "name": "درجه ادم", "color": "#18A6D9", "desc": "درجه ادم گوده‌گذار از عمق، شدت در الگوی پرونده و معیار سوءتغذیه"}], "en": {"tagline": "Read the patient’s body like a book", "about": "Negar, a magnifying glass that looks closely, teaches the adult nutrition-focused physical exam based on the Academy/ASPEN criteria: the six characteristics of malnutrition in acute, chronic and social contexts, inflammation and documentation with ICD-10 codes, muscle and fat examination from the temples to the calves, edema and dehydration, grip strength and micronutrient signs in the skin, nails, hair and mouth. More than a hundred clinical images (normal, mild to moderate and severe) train your eye for the real exam, and 15 patients on rounds let you practise assessment and writing the note.", "audience": "Dietitians and nutrition students, nutrition specialists, physicians and residents, ward and ICU nurses", "highlights": ["More than 100 real clinical images", "Malnutrition classification with a ready-made note", "Full Persian and English versions"], "outcomes": ["Apply the six characteristics of malnutrition in acute, chronic and social contexts", "Calculate weight loss and energy intake and know exactly which threshold they meet", "Examine the temples, clavicles, scapulae, ribs, triceps, hands, thighs and calves and grade the wasting", "Grade pitting edema from 1+ to 4+ and tell it apart from brawny edema and deep vein thrombosis", "Recognize dehydration in the mouth, eyes, skin, nails and the BUN-to-creatinine ratio", "Measure grip strength the standard way and read the signs in the skin, nails, hair and mouth", "Write a concise, well-reasoned malnutrition note with the correct ICD-10 code"], "worlds": [{"id": "hx", "name": "Preparation & assessment", "sub": "The six malnutrition characteristics, intake, weight and exam technique", "levels": ["First Steps", "History Detectives", "Head-to-Toe Masters"]}, {"id": "inf", "name": "Inflammation & documentation", "sub": "Etiology, markers, coding and the chart", "levels": ["Inflammation Trackers", "Lab Readers", "Chart Writers"]}, {"id": "mf", "name": "Muscle & fat", "sub": "A head-to-toe exam of muscle and subcutaneous fat stores", "levels": ["Body Map Readers", "Palpation Pros", "Wasting Masters"]}, {"id": "fl", "name": "Fluid status", "sub": "Edema, pit grading and dehydration", "levels": ["Fluid Trackers", "Edema Graders", "Water Guardians"]}, {"id": "mn", "name": "Function & micronutrients", "sub": "Grip strength and signs in the skin, nails, hair and mouth", "levels": ["Strength Testers", "Skin & Nail Detectives", "Head-to-Toe Masters"]}], "tools": [{"id": "aspen", "name": "Malnutrition classifier", "desc": "The six malnutrition characteristics in three contexts; recommended diagnosis, ICD-10 code and a note"}, {"id": "wt", "name": "Weight change", "desc": "Percentage weight loss, % of usual weight, BMI and the criterion in each context"}, {"id": "intake", "name": "Energy intake", "desc": "Intake as a percentage of needs and the intake criterion in each context"}, {"id": "grip", "name": "Grip strength", "desc": "Mean of three trials per hand (standard method) and the low-strength cut-off"}, {"id": "edema", "name": "Edema grade", "desc": "Pitting edema grade from depth, EMR severity and the malnutrition criterion"}]}},
    /* منابع دوره (در پایان معرفی دوره و صفحه معرفی سایت نمایش داده می‌شوند) */
    refs: ["White JV, Guenter P, Jensen G, et al. Consensus statement: Academy of Nutrition and Dietetics and American Society for Parenteral and Enteral Nutrition: characteristics recommended for the identification and documentation of adult malnutrition (undernutrition). JPEN J Parenter Enteral Nutr. 2012;36(3):275–283.", "Cederholm T, Jensen GL, Correia MITD, et al. GLIM criteria for the diagnosis of malnutrition: a consensus report from the global clinical nutrition community. Clin Nutr. 2019;38(1):1–9.", "Mueller CM, ed. The ASPEN Adult Nutrition Support Core Curriculum. 3rd ed. Silver Spring, MD: ASPEN; 2017.", "Esper DH. Utilization of nutrition-focused physical assessment in identifying micronutrient deficiencies. Nutr Clin Pract. 2015;30(2):194–202.", "Fischer M, JeVenn A, Hipskind P. Evaluation of muscle and fat loss as diagnostic criteria for malnutrition. Nutr Clin Pract. 2015;30(2):239–248.", "Roberts HC, Denison HJ, Martin HJ, et al. A review of the measurement of grip strength in clinical and epidemiological studies: towards a standardised approach. Age Ageing. 2011;40(4):423–429.", "Cruz-Jentoft AJ, Bahat G, Bauer J, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16–31.", "Raymond JL, Morrow K, eds. Krause and Mahan’s Food & the Nutrition Care Process. 15th ed. St. Louis: Elsevier; 2021."],

    config: function (EA) {
      const T = EA.T;
      const fa = (n, d) => EA.fa(n, d);
      return {
        id: 'negar', bit: 4, key: 'academy_course_negar', langs: ["fa", "en"], startWorld: 'hx', codePrefix: 'NG',
        nameFa: 'نگار', nameEn: 'Negar', titleFa: 'نگار • آموزش معاینه فیزیکی تغذیه‌محور', titleEn: 'Negar • Learn the Nutrition-Focused Physical Exam',

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
            kicker: `<small class="cert__kicker">${T('نگار • آکادمی معاینه تغذیه‌محور', 'Negar • Nutrition-Focused Physical Exam Academy')}</small>`,
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
          ${back ? `<span class="land__me">${avatar()}<span><b>${T(`خوش برگشتی ${esc(s.profile.name)}!`, `Welcome back, ${esc(s.profile.name)}!`)}</b><small>${T(`🔥 ${fa(s.streak)} روز • ⚡ ${fa(s.xp)} امتیاز • سطح ${fa(lv.n)}: ${lv.title}`, `🔥 ${fa(s.streak)} days • ⚡ ${fa(s.xp)} XP • Level ${fa(lv.n)}: ${lv.title}`)}</small></span></span>`
            : `<small class="land__free">${T('بدون ثبت‌نام • بدون اینترنت • از همین گوشی', 'No sign-up • Works offline • Right on your phone')}</small><button class="btn btn--ghost" data-land="import">${T('پیشرفت قبلی را بازیابی کن', 'Restore previous progress')}</button>`}</div>
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
      ${window.ACADEMY && ACADEMY.refsHTML ? ACADEMY.refsHTML(EA.COURSE && EA.COURSE.id, true) : ''}
      <section class="land__sec">
        <h2>${T('همه چیزهایی که یک بازی خوب لازم دارد', 'Everything a good game needs')}</h2>
        <div class="land__feat">${[
          ['🎯', T('هدف روزانه', 'Daily goal'), T('هر روز هدفت را کامل کن و پیشرفتت را ببین', 'Hit your goal every day and watch your progress grow')],
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
    if (o.intake && isFinite(o.intake.pct) && isFinite(o.intake.days)) items.push({ k: 'intake', level: intakeLevel(ctx, o.intake.pct, o.intake.days), label: T('دریافت ناکافی انرژی', 'Insufficient energy intake'), val: `${fa(o.intake.pct, 0)}${pc()} • ${fa(o.intake.days, 0)} ${T('روز', 'd')}` });
    if (o.wt && isFinite(o.wt.pct) && isFinite(o.wt.days)) { const w = weightLevel(ctx, o.wt.pct, o.wt.days); items.push({ k: 'wt', level: w.level, label: T('کاهش وزن', 'Weight loss'), val: `${fa(o.wt.pct, 1)}${pc()} • ${fa(o.wt.days, 0)} ${T('روز', 'd')}`, win: w.win }); }
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
        T(`ویژگی‌های شدید: ${fa(r.nSev)} • ویژگی‌های دست‌کم متوسط: ${fa(r.nMod)}. برای هر تشخیص دست‌کم دو ویژگی لازم است؛ قدرت چنگش فقط پشتیبان «شدید» است.`, `Severe characteristics: ${fa(r.nSev)} • at least moderate: ${fa(r.nMod)}. Each diagnosis needs at least two characteristics; grip strength only supports “severe”.`) + ` ${AR()} <b>${right}</b>`
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

/* نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و پرونده‌ها را سرور فقط به مشترکان می‌دهد */
      (function (EA, S) {
        if (S.W) { EA.W = { fa: S.W.fa, en: S.W.en || S.W.fa }; EA.worlds = EA.W[EA.lang] || EA.W.fa; } else EA.worlds = S.worlds;
        if (S.RD) EA.RD = { fa: [], en: [] };
        EA.rounds = [];
        if (S.per) EA.PER_LEVEL = S.per;
        if (S.exam) EA.exam = S.exam;
        EA.PREVIEW = true;
      })(window.EA, {"worlds": [{"id": "hx", "sym": "Hx", "name": "آمادگی و ارزیابی", "sub": "شش ویژگی سوءتغذیه، دریافت، وزن و روش معاینه", "color": "#FF7A45", "dark": "#DD5A28", "light": "#FFE7DC", "levels": ["قدم‌های اول", "کارآگاهان تاریخچه", "استادان سر تا پا"], "gens": ["h.wl", "h.wlc", "h.int", "h.intc", "h.bmi"], "lessons": [{"id": "hx1", "title": "NFPE چیست؟", "icon": "🔍", "items": [{"t": "learn", "title": "معاینه فیزیکی تغذیه‌محور", "body": "<b>NFPE</b> (Nutrition-Focused Physical Exam) یعنی معاینه بدن بیمار با یک سؤال مشخص: <b>تغذیه چه ردی روی بدن گذاشته است؟</b><br><br>NFPE یکی از اجزای <b>ارزیابی جامع تغذیه</b> است. بقیه اجزا هم لازم‌اند: تاریخچه پزشکی، جراحی، اجتماعی و رژیم غذایی، آزمایش‌ها و تست‌های دیگر. ولی <b>هیچ جزئی به‌تنهایی</b> وضعیت تغذیه را تعیین نمی‌کند.<br><br>NFPE تغییرات فیزیکی ناشی از <b>کم‌تغذیه‌ای یا پرتغذیه‌ای</b> را تأیید می‌کند."}, {"t": "mcq", "q": "کدام مورد به‌تنهایی وضعیت تغذیه بیمار را تعیین می‌کند؟", "opts": ["هیچ‌کدام؛ همه اجزا با هم لازم‌اند", "آلبومین سرم", "نمایه توده بدن", "معاینه فیزیکی"], "why": "هیچ جزئی به‌تنهایی وضعیت تغذیه را تعیین نمی‌کند؛ NFPE شواهد فیزیکی را به بقیه داده‌ها اضافه می‌کند."}, {"t": "learn", "title": "NFPE دنبال چه می‌گردد؟", "body": "با <b>نگاه کامل</b> و سپس <b>لمس</b>، چهار چیز را بررسی می‌کنیم:<br>• <b>ذخیره عضله</b> و <b>چربی زیرپوستی</b><br>• <b>جابه‌جایی مایعات</b> (ادم یا دهیدراتاسیون)<br>• <b>نشانه‌های کمبود ریزمغذی</b> در پوست، مو، ناخن و دهان؛ مثل بثورات، زخم یا تغییر رنگ که از نشانه‌های زودرس کمبودند<br>• <b>وضعیت عملکردی</b>، مثلاً قدرت چنگش دست<br><br>برای بیمار بستری، ارزیابی کامل اهمیت ویژه‌ای دارد."}, {"t": "match", "q": "هر یافته را به بخش مربوط در NFPE وصل کن", "pairs": [["فرورفتگی گیجگاه", "ذخیره عضله"], ["ادم گوده‌گذار پا", "وضعیت مایعات"], ["لثه اسفنجی و خونریزی‌دهنده", "نشانه ریزمغذی"], ["قدرت چنگش کم", "وضعیت عملکردی"]]}, {"t": "tf", "q": "NFPE فقط کم‌تغذیه‌ای را بررسی می‌کند و برای پرتغذیه‌ای کاربرد ندارد.", "a": false, "why": "NFPE تغییرات فیزیکی ناشی از کم‌تغذیه‌ای <b>یا پرتغذیه‌ای</b> را تأیید می‌کند؛ بیمار چاق هم می‌تواند عضله از دست داده باشد."}, {"t": "learn", "title": "چرا همه NFPE انجام نمی‌دهند؟", "body": "NFPE مدت‌ها به‌خاطر <b>کمبود آموزش</b> و درک ناکافی از نقشش در ارزیابی جامع، در کار روزمره کمتر دیده می‌شد.<br><br>خبر خوب: معاینه عضله و چربی ذهنی است، ولی <b>آموزش کنار یک بالینگر باتجربه و تمرین تکراری</b> این ذهنی بودن را کم می‌کند. این برنامه برای همین ساخته شده است."}, {"t": "fill", "q": "معاینه عضله و چربی ذهنی است؛ این ذهنی بودن با آموزش و ___ تکراری کم می‌شود.", "opts": ["تمرین", "آزمایش", "تصویربرداری"], "why": "تمرین تکراری با یک روش نظام‌مند، دقت و سرعت معاینه را بالا می‌برد."}, {"t": "mcq", "q": "بهترین تعریف NFPE کدام است؟", "opts": ["بخشی از ارزیابی جامع تغذیه که تغییرات فیزیکی ناشی از وضعیت تغذیه را بررسی می‌کند", "جایگزین تاریخچه رژیم غذایی", "آزمایش خون برای کمبود ریزمغذی‌ها", "اندازه‌گیری وزن و قد بیمار"], "why": "NFPE جایگزین هیچ جزئی نیست؛ یافته‌هایش باید با تاریخچه، آزمایش‌ها و دریافت غذایی هم‌خوان باشد."}, {"t": "tf", "q": "یافته‌های NFPE باید با داده‌های پرونده و مصاحبه هم‌خوانی داشته باشند.", "a": true, "why": "درست. یافته فیزیکی بدون پشتوانه بالینی، یا داده پرونده بدون تأیید در معاینه، تشخیص محکمی نمی‌سازد."}]}, {"id": "hx2", "title": "شش ویژگی سوءتغذیه", "icon": "📐", "items": [], "locked": 1}, {"id": "hx3", "title": "دریافت انرژی", "icon": "🍽️", "items": [], "locked": 1}, {"id": "hx4", "title": "کاهش وزن", "icon": "⚖️", "items": [], "locked": 1}, {"id": "hx5", "title": "رویکرد نظام‌مند: پرونده", "icon": "📂", "items": [], "locked": 1}, {"id": "hx6", "title": "مصاحبه با بیمار", "icon": "💬", "items": [], "locked": 1}, {"id": "hx7", "title": "نگاه و لمس", "icon": "🖐️", "items": [], "locked": 1}, {"id": "hx8", "title": "ایمنی و نگاه کلی", "icon": "🧤", "items": [], "locked": 1}, {"id": "hx9", "title": "معاینه سر تا پا", "icon": "🧍", "items": [], "locked": 1}]}, {"id": "inf", "sym": "CRP", "name": "التهاب و مستندسازی", "sub": "اتیولوژی، نشانگرها، کدگذاری و پرونده", "color": "#7B5CE0", "dark": "#5D40C4", "light": "#ECE6FF", "levels": ["ردیابان التهاب", "خوانندگان آزمایش", "نویسندگان پرونده"], "gens": ["i.vital", "i.ctx", "i.dx", "i.lab"], "lessons": [{"id": "inf1", "title": "اتیولوژی: التهاب و زمان", "icon": "🔥", "items": [], "locked": 1}, {"id": "inf2", "title": "بیماری‌ها و زمینه‌ها", "icon": "📚", "items": [], "locked": 1}, {"id": "inf3", "title": "التهاب حاد و مزمن", "icon": "🌡️", "items": [], "locked": 1}, {"id": "inf4", "title": "علائم حیاتی", "icon": "💓", "items": [], "locked": 1}, {"id": "inf5", "title": "آلبومین، پره‌آلبومین و CRP", "icon": "🧪", "items": [], "locked": 1}, {"id": "inf6", "title": "قند، گلبول سفید و پلاکت", "icon": "🔬", "items": [], "locked": 1}, {"id": "inf7", "title": "تصویربرداری", "icon": "🩻", "items": [], "locked": 1}, {"id": "inf8", "title": "مستندسازی و کدگذاری", "icon": "📝", "items": [], "locked": 1}, {"id": "inf9", "title": "یادداشت پرونده الکترونیک", "icon": "💻", "items": [], "locked": 1}]}, {"id": "mf", "sym": "M/F", "name": "عضله و چربی", "sub": "معاینه سر تا پای ذخیره عضله و چربی زیرپوستی", "color": "#E5476B", "dark": "#C22B50", "light": "#FFE3EA", "levels": ["نقشه‌خوانان بدن", "لمس‌شناسان", "استادان تحلیل"], "gens": ["m.img", "m.map", "m.region"], "lessons": [{"id": "mf1", "title": "چرا عضله و چربی؟", "icon": "💪", "items": [], "locked": 1}, {"id": "mf2", "title": "چاقی، ICU و سارکوپنی", "icon": "🏥", "items": [], "locked": 1}, {"id": "mf3", "title": "نقشه سر تا پا", "icon": "🗺️", "items": [], "locked": 1}, {"id": "mf4", "title": "سر و صورت", "icon": "🙂", "items": [], "locked": 1}, {"id": "mf5", "title": "ترقوه و شانه", "icon": "🦴", "items": [], "locked": 1}, {"id": "mf6", "title": "پشت و خط میدآگزیلاری", "icon": "🔙", "items": [], "locked": 1}, {"id": "mf7", "title": "بازو: چربی سه‌سر", "icon": "🤏", "items": [], "locked": 1}, {"id": "mf8", "title": "دست‌ها", "icon": "👌", "items": [], "locked": 1}, {"id": "mf9", "title": "ران، کشکک و ساق", "icon": "🦵", "items": [], "locked": 1}]}, {"id": "fl", "sym": "H₂O", "name": "وضعیت مایعات", "sub": "ادم، درجه‌بندی گوده و دهیدراتاسیون", "color": "#18A6D9", "dark": "#1185B2", "light": "#DDF3FC", "levels": ["ردیابان مایع", "درجه‌بندان ادم", "نگهبانان آب"], "gens": ["f.img", "f.grade", "f.map", "f.bun", "f.drug"], "lessons": [{"id": "fl1", "title": "چرا مایعات مهم‌اند؟", "icon": "💧", "items": [], "locked": 1}, {"id": "fl2", "title": "ادم را بشناس", "icon": "🎈", "items": [], "locked": 1}, {"id": "fl3", "title": "اصطلاحات ادم", "icon": "📖", "items": [], "locked": 1}, {"id": "fl4", "title": "تشخیص افتراقی ادم", "icon": "🧭", "items": [], "locked": 1}, {"id": "fl5", "title": "داروهایی که ادم می‌دهند", "icon": "💊", "items": [], "locked": 1}, {"id": "fl6", "title": "درجه‌بندی ادم گوده‌گذار", "icon": "👆", "items": [], "locked": 1}, {"id": "fl7", "title": "ارزیابی تجمع مایع", "icon": "🔎", "items": [], "locked": 1}, {"id": "fl8", "title": "دهیدراتاسیون: علائم و آزمایش‌ها", "icon": "🏜️", "items": [], "locked": 1}, {"id": "fl9", "title": "معاینه دهیدراتاسیون", "icon": "👅", "items": [], "locked": 1}]}, {"id": "mn", "sym": "Zn", "name": "عملکرد و ریزمغذی‌ها", "sub": "قدرت چنگش و نشانه‌های پوست، ناخن، مو و دهان", "color": "#12A594", "dark": "#0C8577", "light": "#D8F5EF", "levels": ["قدرت‌سنج‌ها", "کارآگاهان پوست و ناخن", "استادان سر تا پا"], "gens": ["z.grip", "z.img", "z.sign", "z.non"], "lessons": [{"id": "mn1", "title": "وضعیت عملکردی", "icon": "🏋️", "items": [], "locked": 1}, {"id": "mn2", "title": "دینامومتر دستی", "icon": "✊", "items": [], "locked": 1}, {"id": "mn3", "title": "ریزمغذی‌ها: مقدمه", "icon": "🔬", "items": [], "locked": 1}, {"id": "mn4", "title": "پوست (۱)", "icon": "🧴", "items": [], "locked": 1}, {"id": "mn5", "title": "پوست (۲)", "icon": "🩹", "items": [], "locked": 1}, {"id": "mn6", "title": "ناخن", "icon": "💅", "items": [], "locked": 1}, {"id": "mn7", "title": "مو", "icon": "💇", "items": [], "locked": 1}, {"id": "mn8", "title": "چشم و صورت", "icon": "👁️", "items": [], "locked": 1}, {"id": "mn9", "title": "دهان و گردن", "icon": "👄", "items": [], "locked": 1}]}], "W": {"fa": [{"id": "hx", "sym": "Hx", "name": "آمادگی و ارزیابی", "sub": "شش ویژگی سوءتغذیه، دریافت، وزن و روش معاینه", "color": "#FF7A45", "dark": "#DD5A28", "light": "#FFE7DC", "levels": ["قدم‌های اول", "کارآگاهان تاریخچه", "استادان سر تا پا"], "gens": ["h.wl", "h.wlc", "h.int", "h.intc", "h.bmi"], "lessons": [{"id": "hx1", "title": "NFPE چیست؟", "icon": "🔍", "items": [{"t": "learn", "title": "معاینه فیزیکی تغذیه‌محور", "body": "<b>NFPE</b> (Nutrition-Focused Physical Exam) یعنی معاینه بدن بیمار با یک سؤال مشخص: <b>تغذیه چه ردی روی بدن گذاشته است؟</b><br><br>NFPE یکی از اجزای <b>ارزیابی جامع تغذیه</b> است. بقیه اجزا هم لازم‌اند: تاریخچه پزشکی، جراحی، اجتماعی و رژیم غذایی، آزمایش‌ها و تست‌های دیگر. ولی <b>هیچ جزئی به‌تنهایی</b> وضعیت تغذیه را تعیین نمی‌کند.<br><br>NFPE تغییرات فیزیکی ناشی از <b>کم‌تغذیه‌ای یا پرتغذیه‌ای</b> را تأیید می‌کند."}, {"t": "mcq", "q": "کدام مورد به‌تنهایی وضعیت تغذیه بیمار را تعیین می‌کند؟", "opts": ["هیچ‌کدام؛ همه اجزا با هم لازم‌اند", "آلبومین سرم", "نمایه توده بدن", "معاینه فیزیکی"], "why": "هیچ جزئی به‌تنهایی وضعیت تغذیه را تعیین نمی‌کند؛ NFPE شواهد فیزیکی را به بقیه داده‌ها اضافه می‌کند."}, {"t": "learn", "title": "NFPE دنبال چه می‌گردد؟", "body": "با <b>نگاه کامل</b> و سپس <b>لمس</b>، چهار چیز را بررسی می‌کنیم:<br>• <b>ذخیره عضله</b> و <b>چربی زیرپوستی</b><br>• <b>جابه‌جایی مایعات</b> (ادم یا دهیدراتاسیون)<br>• <b>نشانه‌های کمبود ریزمغذی</b> در پوست، مو، ناخن و دهان؛ مثل بثورات، زخم یا تغییر رنگ که از نشانه‌های زودرس کمبودند<br>• <b>وضعیت عملکردی</b>، مثلاً قدرت چنگش دست<br><br>برای بیمار بستری، ارزیابی کامل اهمیت ویژه‌ای دارد."}, {"t": "match", "q": "هر یافته را به بخش مربوط در NFPE وصل کن", "pairs": [["فرورفتگی گیجگاه", "ذخیره عضله"], ["ادم گوده‌گذار پا", "وضعیت مایعات"], ["لثه اسفنجی و خونریزی‌دهنده", "نشانه ریزمغذی"], ["قدرت چنگش کم", "وضعیت عملکردی"]]}, {"t": "tf", "q": "NFPE فقط کم‌تغذیه‌ای را بررسی می‌کند و برای پرتغذیه‌ای کاربرد ندارد.", "a": false, "why": "NFPE تغییرات فیزیکی ناشی از کم‌تغذیه‌ای <b>یا پرتغذیه‌ای</b> را تأیید می‌کند؛ بیمار چاق هم می‌تواند عضله از دست داده باشد."}, {"t": "learn", "title": "چرا همه NFPE انجام نمی‌دهند؟", "body": "NFPE مدت‌ها به‌خاطر <b>کمبود آموزش</b> و درک ناکافی از نقشش در ارزیابی جامع، در کار روزمره کمتر دیده می‌شد.<br><br>خبر خوب: معاینه عضله و چربی ذهنی است، ولی <b>آموزش کنار یک بالینگر باتجربه و تمرین تکراری</b> این ذهنی بودن را کم می‌کند. این برنامه برای همین ساخته شده است."}, {"t": "fill", "q": "معاینه عضله و چربی ذهنی است؛ این ذهنی بودن با آموزش و ___ تکراری کم می‌شود.", "opts": ["تمرین", "آزمایش", "تصویربرداری"], "why": "تمرین تکراری با یک روش نظام‌مند، دقت و سرعت معاینه را بالا می‌برد."}, {"t": "mcq", "q": "بهترین تعریف NFPE کدام است؟", "opts": ["بخشی از ارزیابی جامع تغذیه که تغییرات فیزیکی ناشی از وضعیت تغذیه را بررسی می‌کند", "جایگزین تاریخچه رژیم غذایی", "آزمایش خون برای کمبود ریزمغذی‌ها", "اندازه‌گیری وزن و قد بیمار"], "why": "NFPE جایگزین هیچ جزئی نیست؛ یافته‌هایش باید با تاریخچه، آزمایش‌ها و دریافت غذایی هم‌خوان باشد."}, {"t": "tf", "q": "یافته‌های NFPE باید با داده‌های پرونده و مصاحبه هم‌خوانی داشته باشند.", "a": true, "why": "درست. یافته فیزیکی بدون پشتوانه بالینی، یا داده پرونده بدون تأیید در معاینه، تشخیص محکمی نمی‌سازد."}]}, {"id": "hx2", "title": "شش ویژگی سوءتغذیه", "icon": "📐", "items": [], "locked": 1}, {"id": "hx3", "title": "دریافت انرژی", "icon": "🍽️", "items": [], "locked": 1}, {"id": "hx4", "title": "کاهش وزن", "icon": "⚖️", "items": [], "locked": 1}, {"id": "hx5", "title": "رویکرد نظام‌مند: پرونده", "icon": "📂", "items": [], "locked": 1}, {"id": "hx6", "title": "مصاحبه با بیمار", "icon": "💬", "items": [], "locked": 1}, {"id": "hx7", "title": "نگاه و لمس", "icon": "🖐️", "items": [], "locked": 1}, {"id": "hx8", "title": "ایمنی و نگاه کلی", "icon": "🧤", "items": [], "locked": 1}, {"id": "hx9", "title": "معاینه سر تا پا", "icon": "🧍", "items": [], "locked": 1}]}, {"id": "inf", "sym": "CRP", "name": "التهاب و مستندسازی", "sub": "اتیولوژی، نشانگرها، کدگذاری و پرونده", "color": "#7B5CE0", "dark": "#5D40C4", "light": "#ECE6FF", "levels": ["ردیابان التهاب", "خوانندگان آزمایش", "نویسندگان پرونده"], "gens": ["i.vital", "i.ctx", "i.dx", "i.lab"], "lessons": [{"id": "inf1", "title": "اتیولوژی: التهاب و زمان", "icon": "🔥", "items": [], "locked": 1}, {"id": "inf2", "title": "بیماری‌ها و زمینه‌ها", "icon": "📚", "items": [], "locked": 1}, {"id": "inf3", "title": "التهاب حاد و مزمن", "icon": "🌡️", "items": [], "locked": 1}, {"id": "inf4", "title": "علائم حیاتی", "icon": "💓", "items": [], "locked": 1}, {"id": "inf5", "title": "آلبومین، پره‌آلبومین و CRP", "icon": "🧪", "items": [], "locked": 1}, {"id": "inf6", "title": "قند، گلبول سفید و پلاکت", "icon": "🔬", "items": [], "locked": 1}, {"id": "inf7", "title": "تصویربرداری", "icon": "🩻", "items": [], "locked": 1}, {"id": "inf8", "title": "مستندسازی و کدگذاری", "icon": "📝", "items": [], "locked": 1}, {"id": "inf9", "title": "یادداشت پرونده الکترونیک", "icon": "💻", "items": [], "locked": 1}]}, {"id": "mf", "sym": "M/F", "name": "عضله و چربی", "sub": "معاینه سر تا پای ذخیره عضله و چربی زیرپوستی", "color": "#E5476B", "dark": "#C22B50", "light": "#FFE3EA", "levels": ["نقشه‌خوانان بدن", "لمس‌شناسان", "استادان تحلیل"], "gens": ["m.img", "m.map", "m.region"], "lessons": [{"id": "mf1", "title": "چرا عضله و چربی؟", "icon": "💪", "items": [], "locked": 1}, {"id": "mf2", "title": "چاقی، ICU و سارکوپنی", "icon": "🏥", "items": [], "locked": 1}, {"id": "mf3", "title": "نقشه سر تا پا", "icon": "🗺️", "items": [], "locked": 1}, {"id": "mf4", "title": "سر و صورت", "icon": "🙂", "items": [], "locked": 1}, {"id": "mf5", "title": "ترقوه و شانه", "icon": "🦴", "items": [], "locked": 1}, {"id": "mf6", "title": "پشت و خط میدآگزیلاری", "icon": "🔙", "items": [], "locked": 1}, {"id": "mf7", "title": "بازو: چربی سه‌سر", "icon": "🤏", "items": [], "locked": 1}, {"id": "mf8", "title": "دست‌ها", "icon": "👌", "items": [], "locked": 1}, {"id": "mf9", "title": "ران، کشکک و ساق", "icon": "🦵", "items": [], "locked": 1}]}, {"id": "fl", "sym": "H₂O", "name": "وضعیت مایعات", "sub": "ادم، درجه‌بندی گوده و دهیدراتاسیون", "color": "#18A6D9", "dark": "#1185B2", "light": "#DDF3FC", "levels": ["ردیابان مایع", "درجه‌بندان ادم", "نگهبانان آب"], "gens": ["f.img", "f.grade", "f.map", "f.bun", "f.drug"], "lessons": [{"id": "fl1", "title": "چرا مایعات مهم‌اند؟", "icon": "💧", "items": [], "locked": 1}, {"id": "fl2", "title": "ادم را بشناس", "icon": "🎈", "items": [], "locked": 1}, {"id": "fl3", "title": "اصطلاحات ادم", "icon": "📖", "items": [], "locked": 1}, {"id": "fl4", "title": "تشخیص افتراقی ادم", "icon": "🧭", "items": [], "locked": 1}, {"id": "fl5", "title": "داروهایی که ادم می‌دهند", "icon": "💊", "items": [], "locked": 1}, {"id": "fl6", "title": "درجه‌بندی ادم گوده‌گذار", "icon": "👆", "items": [], "locked": 1}, {"id": "fl7", "title": "ارزیابی تجمع مایع", "icon": "🔎", "items": [], "locked": 1}, {"id": "fl8", "title": "دهیدراتاسیون: علائم و آزمایش‌ها", "icon": "🏜️", "items": [], "locked": 1}, {"id": "fl9", "title": "معاینه دهیدراتاسیون", "icon": "👅", "items": [], "locked": 1}]}, {"id": "mn", "sym": "Zn", "name": "عملکرد و ریزمغذی‌ها", "sub": "قدرت چنگش و نشانه‌های پوست، ناخن، مو و دهان", "color": "#12A594", "dark": "#0C8577", "light": "#D8F5EF", "levels": ["قدرت‌سنج‌ها", "کارآگاهان پوست و ناخن", "استادان سر تا پا"], "gens": ["z.grip", "z.img", "z.sign", "z.non"], "lessons": [{"id": "mn1", "title": "وضعیت عملکردی", "icon": "🏋️", "items": [], "locked": 1}, {"id": "mn2", "title": "دینامومتر دستی", "icon": "✊", "items": [], "locked": 1}, {"id": "mn3", "title": "ریزمغذی‌ها: مقدمه", "icon": "🔬", "items": [], "locked": 1}, {"id": "mn4", "title": "پوست (۱)", "icon": "🧴", "items": [], "locked": 1}, {"id": "mn5", "title": "پوست (۲)", "icon": "🩹", "items": [], "locked": 1}, {"id": "mn6", "title": "ناخن", "icon": "💅", "items": [], "locked": 1}, {"id": "mn7", "title": "مو", "icon": "💇", "items": [], "locked": 1}, {"id": "mn8", "title": "چشم و صورت", "icon": "👁️", "items": [], "locked": 1}, {"id": "mn9", "title": "دهان و گردن", "icon": "👄", "items": [], "locked": 1}]}], "en": [{"id": "hx", "sym": "Hx", "name": "Preparation & assessment", "sub": "The six malnutrition characteristics, intake, weight and exam technique", "color": "#FF7A45", "dark": "#DD5A28", "light": "#FFE7DC", "levels": ["First Steps", "History Detectives", "Head-to-Toe Masters"], "gens": ["h.wl", "h.wlc", "h.int", "h.intc", "h.bmi"], "lessons": [{"id": "hx1", "icon": "🔍", "title": "What is an NFPE?", "items": [{"t": "learn", "title": "The nutrition-focused physical exam", "body": "An <b>NFPE</b> (nutrition-focused physical exam) is an examination of the patient’s body with one specific question in mind: <b>what mark has nutrition left on the body?</b><br><br>The NFPE is one component of a <b>comprehensive nutrition assessment</b>. The other components are needed too: medical, surgical, social and diet histories, laboratory data and other tests. But <b>no single component</b> determines nutrition status on its own.<br><br>The NFPE verifies the physical changes caused by <b>undernutrition or overnutrition</b>."}, {"t": "mcq", "q": "Which of these determines a patient’s nutrition status on its own?", "opts": ["None of them; all components are needed together", "Serum albumin", "Body mass index", "The physical exam"], "why": "No single component determines nutrition status; the NFPE adds physical evidence to the other data."}, {"t": "learn", "title": "What does the NFPE look for?", "body": "With <b>full visualization</b> followed by <b>palpation</b>, we assess four things:<br>• <b>muscle stores</b> and <b>subcutaneous fat</b><br>• <b>fluid shifts</b> (edema or dehydration)<br>• <b>signs of micronutrient depletion</b> in the skin, hair, nails and mouth, such as rashes, sores or color changes, which are early signs of depletion<br>• <b>functional status</b>, for example handgrip strength<br><br>A full assessment is especially important for hospitalized patients."}, {"t": "match", "q": "Match each finding to its part of the NFPE", "pairs": [["Hollowing of the temple", "Muscle stores"], ["Pitting edema of the foot", "Fluid status"], ["Spongy, bleeding gums", "Micronutrient sign"], ["Low grip strength", "Functional status"]]}, {"t": "tf", "q": "The NFPE only assesses undernutrition and is of no use for overnutrition.", "a": false, "why": "The NFPE verifies physical changes from undernutrition <b>or overnutrition</b>; a patient with obesity can still have lost muscle."}, {"t": "learn", "title": "Why doesn’t everyone do an NFPE?", "body": "The NFPE was long underused in daily practice because of a <b>lack of training</b> and an incomplete understanding of its role in a comprehensive assessment.<br><br>The good news: the muscle and fat exam is subjective, but <b>training alongside an experienced clinician and repetitive practice</b> reduce that subjectivity. That is exactly what this course is for."}, {"t": "fill", "q": "The muscle and fat exam is subjective; training and repetitive ___ reduce that subjectivity.", "opts": ["practice", "testing", "imaging"], "why": "Repeated practice with a systematic approach makes the exam more accurate and faster."}, {"t": "mcq", "q": "Which is the best definition of an NFPE?", "opts": ["A part of the comprehensive nutrition assessment that examines physical changes caused by nutrition status", "A replacement for the diet history", "A blood test for micronutrient deficiencies", "Measuring the patient’s weight and height"], "why": "The NFPE replaces no other component; its findings must agree with the history, labs and intake."}, {"t": "tf", "q": "NFPE findings should agree with the data from the chart and the interview.", "a": true, "why": "Correct. A physical finding without clinical support, or chart data not confirmed on examination, makes a weak case."}]}, {"id": "hx2", "icon": "📐", "title": "The six malnutrition characteristics", "items": [], "locked": 1}, {"id": "hx3", "icon": "🍽️", "title": "Energy intake", "items": [], "locked": 1}, {"id": "hx4", "icon": "⚖️", "title": "Weight loss", "items": [], "locked": 1}, {"id": "hx5", "icon": "📂", "title": "A systematic approach: the chart", "items": [], "locked": 1}, {"id": "hx6", "icon": "💬", "title": "Interviewing the patient", "items": [], "locked": 1}, {"id": "hx7", "icon": "🖐️", "title": "Inspection and palpation", "items": [], "locked": 1}, {"id": "hx8", "icon": "🧤", "title": "Safety and the general survey", "items": [], "locked": 1}, {"id": "hx9", "icon": "🧍", "title": "The head-to-toe exam", "items": [], "locked": 1}]}, {"id": "inf", "sym": "CRP", "name": "Inflammation & documentation", "sub": "Etiology, markers, coding and the chart", "color": "#7B5CE0", "dark": "#5D40C4", "light": "#ECE6FF", "levels": ["Inflammation Trackers", "Lab Readers", "Chart Writers"], "gens": ["i.vital", "i.ctx", "i.dx", "i.lab"], "lessons": [{"id": "inf1", "icon": "🔥", "title": "Etiology: inflammation and time", "items": [], "locked": 1}, {"id": "inf2", "icon": "📚", "title": "Diagnoses and contexts", "items": [], "locked": 1}, {"id": "inf3", "icon": "🌡️", "title": "Acute and chronic inflammation", "items": [], "locked": 1}, {"id": "inf4", "icon": "💓", "title": "Vital signs", "items": [], "locked": 1}, {"id": "inf5", "icon": "🧪", "title": "Albumin, prealbumin and CRP", "items": [], "locked": 1}, {"id": "inf6", "icon": "🔬", "title": "Glucose, white cells and platelets", "items": [], "locked": 1}, {"id": "inf7", "icon": "🩻", "title": "Imaging", "items": [], "locked": 1}, {"id": "inf8", "icon": "📝", "title": "Documentation and coding", "items": [], "locked": 1}, {"id": "inf9", "icon": "💻", "title": "The EMR note", "items": [], "locked": 1}]}, {"id": "mf", "sym": "M/F", "name": "Muscle & fat", "sub": "A head-to-toe exam of muscle and subcutaneous fat stores", "color": "#E5476B", "dark": "#C22B50", "light": "#FFE3EA", "levels": ["Body Map Readers", "Palpation Pros", "Wasting Masters"], "gens": ["m.img", "m.map", "m.region"], "lessons": [{"id": "mf1", "icon": "💪", "title": "Why muscle and fat?", "items": [], "locked": 1}, {"id": "mf2", "icon": "🏥", "title": "Obesity, ICU and sarcopenia", "items": [], "locked": 1}, {"id": "mf3", "icon": "🗺️", "title": "The head-to-toe map", "items": [], "locked": 1}, {"id": "mf4", "icon": "🙂", "title": "Head and face", "items": [], "locked": 1}, {"id": "mf5", "icon": "🦴", "title": "Clavicle and shoulder", "items": [], "locked": 1}, {"id": "mf6", "icon": "🔙", "title": "Back and midaxillary line", "items": [], "locked": 1}, {"id": "mf7", "icon": "🤏", "title": "Upper arm: triceps fat", "items": [], "locked": 1}, {"id": "mf8", "icon": "👌", "title": "Hands", "items": [], "locked": 1}, {"id": "mf9", "icon": "🦵", "title": "Thigh, kneecap and calf", "items": [], "locked": 1}]}, {"id": "fl", "sym": "H₂O", "name": "Fluid status", "sub": "Edema, pit grading and dehydration", "color": "#18A6D9", "dark": "#1185B2", "light": "#DDF3FC", "levels": ["Fluid Trackers", "Edema Graders", "Water Guardians"], "gens": ["f.img", "f.grade", "f.map", "f.bun", "f.drug"], "lessons": [{"id": "fl1", "icon": "💧", "title": "Why does fluid matter?", "items": [], "locked": 1}, {"id": "fl2", "icon": "🎈", "title": "Know your edema", "items": [], "locked": 1}, {"id": "fl3", "icon": "📖", "title": "Edema terminology", "items": [], "locked": 1}, {"id": "fl4", "icon": "🧭", "title": "Differential diagnosis of edema", "items": [], "locked": 1}, {"id": "fl5", "icon": "💊", "title": "Medications that cause edema", "items": [], "locked": 1}, {"id": "fl6", "icon": "👆", "title": "Grading pitting edema", "items": [], "locked": 1}, {"id": "fl7", "icon": "🔎", "title": "Evaluating fluid accumulation", "items": [], "locked": 1}, {"id": "fl8", "icon": "🏜️", "title": "Dehydration: symptoms and labs", "items": [], "locked": 1}, {"id": "fl9", "icon": "👅", "title": "Examining for dehydration", "items": [], "locked": 1}]}, {"id": "mn", "sym": "Zn", "name": "Function & micronutrients", "sub": "Grip strength and signs in the skin, nails, hair and mouth", "color": "#12A594", "dark": "#0C8577", "light": "#D8F5EF", "levels": ["Strength Testers", "Skin & Nail Detectives", "Head-to-Toe Masters"], "gens": ["z.grip", "z.img", "z.sign", "z.non"], "lessons": [{"id": "mn1", "icon": "🏋️", "title": "Functional status", "items": [], "locked": 1}, {"id": "mn2", "icon": "✊", "title": "The handgrip dynamometer", "items": [], "locked": 1}, {"id": "mn3", "icon": "🔬", "title": "Micronutrients: introduction", "items": [], "locked": 1}, {"id": "mn4", "icon": "🧴", "title": "Skin (1)", "items": [], "locked": 1}, {"id": "mn5", "icon": "🩹", "title": "Skin (2)", "items": [], "locked": 1}, {"id": "mn6", "icon": "💅", "title": "Nails", "items": [], "locked": 1}, {"id": "mn7", "icon": "💇", "title": "Hair", "items": [], "locked": 1}, {"id": "mn8", "icon": "👁️", "title": "Eyes and face", "items": [], "locked": 1}, {"id": "mn9", "icon": "👄", "title": "Mouth and neck", "items": [], "locked": 1}]}]}, "RD": true, "per": 3, "exam": {"checkpoint": {"count": 10, "gens": 3, "pass": 0.7}, "final": {"perWorld": 5, "gensPerWorld": 2, "pass": 0.8, "minutes": 25}}});









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

















      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش؛ در برنامه کاری نمی‌کند

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
        out.rows.push([T('کاهش وزن', 'Weight loss'), `${fa(p, 1)}${pc()} • ${fa(v.usual - v.cur, 1)} kg`, HERO]);
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
        out.steps.push(`${fa(v.kcal)} ÷ ${fa(v.req)} × ${fa(100)} = <b>${fa(p, 0)}${pc()}</b> • ${fa(v.days)} ${T('روز', 'days')}`);
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
