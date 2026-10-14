/* آکادمی بالینی — داده‌های دوره «هما» (تفسیر گازهای خون و اسید-باز)
 * این فایل هیچ کدی را اجرا نمی‌کند؛ فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند.
 * موتور (js/engine.js) هنگام ورود به این دوره، به ترتیب config → content → tools را صدا می‌زند.
 *   content(): همه ماژول‌های محتوایی اصلی (فرمول‌ها، دنیاها، درس‌ها، کاراکترها، راند بیمارستان، نکته‌ها، انگلیسی) بدون هیچ حذف یا خلاصه‌سازی
 *   tools():   ماشین‌حساب‌ها و ابزارهای بالینی دوره
 *   config():  متن‌ها، شخصیت و ثابت‌های اختصاصی دوره که موتور مشترک از آن‌ها استفاده می‌کند */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  AC.homa = {
    /* bitFlag: بیت یکتای این دوره در کدهای فعال‌سازی (توان ۲: 1، 2، 4، 8، … 32768). هرگز عوض نشود. */
    id: 'homa', bitFlag: 2, order: 2,
    nameFa: 'هما', nameEn: 'Homa', subjectFa: 'تفسیر گازهای خون و اسید-باز', subjectEn: 'Blood gas & acid–base',
    courseFa: 'تفسیر گازهای خون شریانی و وریدی (ABG و VBG)', courseEn: 'Arterial and Venous Blood Gas Interpretation (ABG & VBG)', descFa: 'اکسیژناسیون، اسید و باز، آنیون گپ، اختلالات تنفسی، VBG و گاز خون نوزاد.', toolsFa: 'مفسر گاز خون (ABG)', icon: '🫁',
    descEn: 'Oxygenation, acid–base, anion gap, respiratory disorders, VBG and neonatal blood gases.', toolsEn: 'Blood gas (ABG) interpreter', domainEn: 'Blood gas',
    color: '#12b3a8', dark: '#0e8c84', light: '#d4f5f2', langs: ["fa", "en"], codePrefix: 'HM',
    stats: {"worlds": 5, "levels": 15, "lessons": 45, "questions": 257, "rounds": 29, "roundSteps": 133, "chars": 15, "firstLesson": "o1"},
    /* کاتالوگ برای صفحه اول و پنجره معرفی/ارتقا: دنیاها و سطح‌ها، ابزارها، اهداف یادگیری */
    catalog: {"tagline": "گاز خون را مثل یک داستان بخوان", "about": "هما، گلبول قرمز بال‌داری که اکسیژن را همه‌جا می‌برد، روش گام‌به‌گام تفسیر ABG و VBG را یادت می‌دهد: اول تبادل گاز و اکسیژناسیون، بعد اسید و باز، جبران مورد انتظار، آنیون گپ و نسبت دلتا. هر سؤال با کارت کامل گاز خون و خط‌کش pH همراه است و ۲۹ بیمار از کتاب «ABG در بالین» و کیس‌های تکمیلی، از COPD و کتواسیدوز تا گاز خون نوزاد، تفسیر را به بالین نزدیک می‌کنند. تفسیرگر کامل گاز خون هر نمونه را قدم‌به‌قدم برایت باز می‌کند.", "audience": "دانشجوی پزشکی، رزیدنت بیهوشی، اورژانس و داخلی، پرستار ICU و NICU، کارشناس هوشبری و تنفس‌درمانی", "highlights": ["تفسیرگر کامل ABG/VBG + ۵ ابزار", "۲۹ کیس بالینی با کارت گاز خون", "گاز خون نوزاد و نمونه‌گیری"], "outcomes": ["هر ABG را با روش قدم‌به‌قدم کتاب تفسیر کنی: اول تبادل گاز، بعد اسید و باز", "نارسایی تنفسی نوع ۱ و ۲، حاد و مزمن را از هم جدا کنی و شدت هیپوکسمی را بسنجی", "گرادیان A–a و نسبت P/F را حساب کنی و بفهمی مشکل از ریه است یا تهویه", "با فرمول وینتر و قانون «۱-۴، ۲-۴» اختلال دوم پنهان را پیدا کنی", "آنیون گپ، دلتا، شکاف اسمولار و آنیون گپ ادرار را برای علت‌یابی اسیدوز به کار ببری", "اکسیژن را در بیمار COPD هوشمندانه تیتر کنی و زمان NIV را بشناسی", "VBG را سریع تفسیر کنی، دام‌های نمونه‌گیری را بشناسی و گاز خون نوزاد را بخوانی"], "worlds": [{"id": "o2", "name": "اکسیژن و تبادل گاز", "sub": "ریه، هموگلوبین و PaO₂", "sym": "O₂", "color": "#1CB0F6", "levels": ["نفس‌های اول", "شکارچیان هیپوکسمی", "فرماندهان اکسیژن"]}, {"id": "ph", "name": "اصول اسید و باز", "sub": "pH، بافر، جبران و تفسیر گام‌به‌گام", "sym": "pH", "color": "#A560E8", "levels": ["قطره‌های بافر", "نگهبانان تعادل", "اساتید تفسیر"]}, {"id": "ag", "name": "اسیدوز متابولیک", "sub": "آنیون گپ، دلتا و علت‌یابی", "sym": "AG", "color": "#FF9600", "levels": ["کاشفان گپ", "شکارچیان سم", "استادان دلتا"]}, {"id": "co2", "name": "تنفسی و آلکالوز", "sub": "هیپرکاپنی، هیپرونتیلاسیون و آلکالوز متابولیک", "sym": "CO₂", "color": "#FF4B8B", "levels": ["نفس‌شمارها", "رام‌کنندگان آلکالوز", "داوران مختلط"]}, {"id": "vbg", "name": "VBG، نمونه و نوزاد", "sub": "نمونه‌گیری درست، گاز وریدی و مویرگی، NICU", "sym": "VBG", "color": "#5B6CF0", "levels": ["سرنگ‌به‌دستان", "رمزگشایان VBG", "نگهبانان NICU"]}], "tools": [{"id": "abg", "sym": "ABG", "name": "تفسیرگر گاز خون", "color": "#12B3A8", "desc": "تفسیر گام‌به‌گام: راستی‌آزمایی، اختلال اولیه، جبران، آنیون گپ، دلتا و تبادل گاز"}, {"id": "ag", "sym": "AG", "name": "آنیون گپ و شکاف‌ها", "color": "#FF9600", "desc": "آنیون گپ و اصلاح با آلبومین، دلتا، شکاف اسمولار و آنیون گپ ادرار"}, {"id": "comp", "sym": "Δ", "name": "جبران مورد انتظار", "color": "#A560E8", "desc": "وینتر، ۰٫۷ برای آلکالوز، و قانون ۱-۴ / ۲-۴ برای اختلالات تنفسی"}, {"id": "oxy", "sym": "O₂", "name": "اکسیژناسیون", "color": "#1CB0F6", "desc": "PAO₂، گرادیان A–a با سن، نسبت P/F و محتوای اکسیژن"}, {"id": "bicarb", "sym": "HCO₃", "name": "بی‌کربنات", "color": "#5B6CF0", "desc": "کمبود بی‌کربنات بزرگسال و دوز نوزادی از روی BE"}, {"id": "conv", "sym": "⇄", "name": "تبدیل‌ها", "color": "#58CC02", "desc": "pH و [H⁺]، kPa و mmHg، برآورد شریانی از VBG، لاکتات"}], "en": {"tagline": "Read a blood gas like a story", "about": "Homa, a winged red blood cell that carries oxygen everywhere, teaches you the step-by-step method for interpreting ABGs and VBGs: gas exchange and oxygenation first, then acid–base, expected compensation, anion gap and the delta ratio. Every question comes with a full blood gas card and a pH ruler, and 29 patients from the book “ABG at the Bedside” plus supplementary cases, from COPD and ketoacidosis to neonatal blood gases, bring interpretation to the bedside. The complete blood gas interpreter walks you through every sample step by step.", "audience": "Medical students, anesthesia, emergency and internal medicine residents, ICU and NICU nurses, anesthesia technologists and respiratory therapists", "highlights": ["Complete ABG/VBG interpreter + 5 tools", "29 clinical cases with blood gas cards", "Neonatal blood gases and sampling"], "outcomes": ["Interpret any ABG with the book’s step-by-step method: gas exchange first, then acid–base", "Tell type 1 from type 2, acute from chronic respiratory failure, and grade hypoxemia", "Calculate the A–a gradient and P/F ratio and tell whether the problem is the lung or ventilation", "Find a hidden second disorder with Winters’ formula and the “1-4, 2-4” rule", "Use the anion gap, delta, osmolar gap and urine anion gap to find the cause of acidosis", "Titrate oxygen wisely in COPD and recognize when NIV is needed", "Interpret a VBG quickly, recognize sampling pitfalls and read neonatal blood gases"], "worlds": [{"id": "o2", "name": "Oxygen & gas exchange", "sub": "Lungs, hemoglobin and PaO₂", "levels": ["First Breaths", "Hypoxemia Hunters", "Oxygen Commanders"]}, {"id": "ph", "name": "Acid–base basics", "sub": "pH, buffers, compensation and stepwise interpretation", "levels": ["Buffer Drops", "Balance Guardians", "Interpretation Masters"]}, {"id": "ag", "name": "Metabolic acidosis", "sub": "Anion gap, delta and finding the cause", "levels": ["Gap Explorers", "Toxin Hunters", "Delta Masters"]}, {"id": "co2", "name": "Respiratory & alkalosis", "sub": "Hypercapnia, hyperventilation and metabolic alkalosis", "levels": ["Breath Counters", "Alkalosis Tamers", "Mixed-Disorder Judges"]}, {"id": "vbg", "name": "VBG, sampling & neonates", "sub": "Correct sampling, venous and capillary gases, NICU", "levels": ["Syringe Holders", "VBG Decoders", "NICU Guardians"]}], "tools": [{"id": "abg", "name": "Blood gas interpreter", "desc": "Step-by-step interpretation: validity check, primary disorder, compensation, anion gap, delta and gas exchange"}, {"id": "ag", "name": "Anion gap & gaps", "desc": "Anion gap with albumin correction, delta, osmolar gap and urine anion gap"}, {"id": "comp", "name": "Expected compensation", "desc": "Winter’s formula, 0.7 for alkalosis, and the 1-4 / 2-4 rule for respiratory disorders"}, {"id": "oxy", "name": "Oxygenation", "desc": "PAO₂, age-adjusted A–a gradient, P/F ratio and oxygen content"}, {"id": "bicarb", "name": "Bicarbonate", "desc": "Adult bicarbonate deficit and neonatal dose from BE"}, {"id": "conv", "name": "Conversions", "desc": "pH and [H⁺], kPa and mmHg, arterial estimate from a VBG, lactate"}]}},

    config: function (EA) {
      const T = EA.T;
      const fa = (n, d) => EA.fa(n, d);
      return {
        id: 'homa', bit: 2, key: 'academy_course_homa', langs: ["fa", "en"], startWorld: 'o2', codePrefix: 'HM',
        nameFa: 'هما', nameEn: 'Homa', titleFa: 'هما • آموزش تفسیر گازهای خون', titleEn: 'Homa • Blood Gas Interpretation',

        /* ---------- وضعیت: عنوان سطح‌ها، نقش رقبای لیگ و نشان‌ها ---------- */
        state: {
          titles: ['حباب تازه‌وارد', 'مولکول کنجکاو', 'بافر پرانرژی', 'شکارچی H⁺', 'کارآموز بخش', 'خواننده ABG', 'رام‌کننده PaCO₂',
    'معمار آنیون گپ', 'نگهبان اکسیژن', 'جادوگر دلتا', 'فرمانده ICU', 'استاد تعادل', 'افسانه گاز خون', 'اسطوره هندرسون', 'امپراتور هموستاز'],
          titlesEn: ['Fresh Bubble', 'Curious Molecule', 'Energetic Buffer', 'H⁺ Hunter', 'Ward Trainee', 'ABG Reader', 'PaCO₂ Tamer',
    'Anion Gap Architect', 'Oxygen Guardian', 'Delta Wizard', 'ICU Commander', 'Master of Balance', 'Blood Gas Legend', 'Henderson Myth', 'Emperor of Homeostasis'],
          roles: ['پرستار ICU', 'رزیدنت داخلی', 'دانشجوی پزشکی', 'رزیدنت بیهوشی', 'کارشناس هوشبری', 'انترن', 'رزیدنت اورژانس', 'پرستار NICU', 'پزشک عمومی', 'رزیدنت اطفال', 'پرستار اورژانس', 'کارشناس تنفس‌درمانی'],
          rolesEn: ['ICU nurse', 'Internal medicine resident', 'Medical student', 'Anesthesia resident', 'Anesthesia technologist', 'Intern', 'Emergency medicine resident', 'NICU nurse', 'General practitioner', 'Pediatrics resident', 'ER nurse', 'Respiratory therapist'],
          badges: [
    { id: 'first', icon: '🌱', name: 'اولین نفس', desc: 'اولین درس را تمام کن' },
    { id: 'perfect3', icon: '💯', name: 'بی‌نقص', desc: 'سه درس را بدون اشتباه تمام کن' },
    { id: 'streak3', icon: '🔥', name: 'گرم شدی', desc: 'زنجیره ۳ روزه' },
    { id: 'streak7', icon: '🌋', name: 'آتشفشان', desc: 'زنجیره ۷ روزه' },
    { id: 'calc10', icon: '🧮', name: 'ماشین‌حساب انسانی', desc: '۱۰ مسئله محاسباتی درست' },
    { id: 'calc50', icon: '🧠', name: 'مغز هندرسونی', desc: '۵۰ مسئله محاسباتی درست' },
    { id: 'speed15', icon: '⚡', name: 'برق‌آسا', desc: 'در چالش سرعت ۱۵ جواب درست بده' },
    { id: 'combo10', icon: '🎯', name: 'تک‌تیرانداز', desc: '۱۰ جواب درست پشت سر هم' },
    { id: 'w_o2', icon: '🫁', name: 'فرمانده اکسیژن', desc: 'آزمون مرحله اکسیژن را قبول شو' },
    { id: 'w_ph', icon: '⚖️', name: 'نگهبان تعادل', desc: 'آزمون مرحله اسید و باز را قبول شو' },
    { id: 'w_ag', icon: '🍋', name: 'شکارچی گپ', desc: 'آزمون مرحله اسیدوز متابولیک را قبول شو' },
    { id: 'w_co2', icon: '🌬️', name: 'رام‌کننده CO₂', desc: 'آزمون مرحله تنفسی و آلکالوز را قبول شو' },
    { id: 'w_vbg', icon: '💉', name: 'استاد نمونه', desc: 'آزمون مرحله VBG و نوزاد را قبول شو' },
    { id: 'xp1000', icon: '🏅', name: 'هزار امتیاز', desc: '۱۰۰۰ امتیاز جمع کن' },
    { id: 'rounds', icon: '🩺', name: 'دکتر کشیک', desc: 'همه کیس‌های راند بیمارستان را قبول شو' },
    { id: 'final', icon: '🎓', name: 'استاد گاز خون', desc: 'امتحان نهایی را قبول شو' }
  ],
          badgesEn: {
    first: ['First Breath', 'Finish your first lesson'], perfect3: ['Flawless', 'Finish three lessons without a mistake'],
    streak3: ['Warming Up', 'A 3-day streak'], streak7: ['Volcano', 'A 7-day streak'],
    calc10: ['Human Calculator', '10 correct calculations'], calc50: ['Henderson Brain', '50 correct calculations'],
    speed15: ['Lightning Fast', '15 correct answers in the speed challenge'], combo10: ['Sharpshooter', '10 correct answers in a row'],
    w_o2: ['Oxygen Commander', 'Pass the Oxygen checkpoint'], w_ph: ['Balance Guardian', 'Pass the Acid–base checkpoint'],
    w_ag: ['Gap Hunter', 'Pass the Metabolic acidosis checkpoint'], w_co2: ['CO₂ Tamer', 'Pass the Respiratory & alkalosis checkpoint'],
    w_vbg: ['Sampling Master', 'Pass the VBG & neonates checkpoint'], xp1000: ['Thousand Club', 'Earn 1,000 XP'],
    rounds: ['On-Call Doctor', 'Pass every hospital round case'], final: ['Blood Gas Master', 'Pass the final exam']
  }
        },

        /* ---------- رابط: شخصیت، کنفتی و الگوی واحدها ---------- */
        confetti: ['#12B3A8', '#1CB0F6', '#FFC800', '#FF4B8B', '#A560E8', '#FF9600', '#E8455A', '#5B6CF0'],
        unitRun: /([−≈+]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mEq\/L|nEq\/L|mEq\/h|mEq|mmol\/L|mmol\/kg|mmol|mg\/dL|mL\/dL|g\/dL|mg\/kg|mg|mmHg|kPa|mOsm\/kg|mL\/kg|mL\/h|mL|kg|L\/min)(?![A-Za-z]))/g,
        mascot: function (mood, color, size) {
            const c = color || 'var(--brand)';
            const m = mood || 'happy';
            const ink = '#3b1f0e';
            const mouths = {
              happy: `<path d="M48 104 Q60 116 72 104" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
              cheer: `<path d="M46 101 Q60 124 74 101 Z" fill="${ink}"/><path d="M53 111 Q60 116 67 111" fill="#ff9aa8"/>`,
              sad: `<path d="M49 111 Q60 101 71 111" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
              wow: `<ellipse cx="60" cy="107" rx="7" ry="9" fill="${ink}"/>`,
              think: `<path d="M50 107 L70 104" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`
            };
            const brows = m === 'think' ? `<path d="M38 72 L52 76" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M68 70 L82 68" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>`
              : m === 'sad' ? `<path d="M38 74 L51 70" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M69 70 L82 74" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>` : '';
            const tear = m === 'sad' ? '<path d="M84 94 q4 8 0 12 q-4 -4 0 -12z" fill="#8fdcff"/>' : '';
            const eyes = m === 'cheer'
              ? `<path d="M38 88 Q45 78 52 88" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M68 88 Q75 78 82 88" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`
              : `<g class="yona-eyes"><ellipse cx="45" cy="88" rx="9" ry="11" fill="#fff"/><ellipse cx="75" cy="88" rx="9" ry="11" fill="#fff"/><circle cx="${m === 'think' ? 48 : 46}" cy="${m === 'think' ? 85 : 90}" r="5" fill="#1d1d1d"/><circle cx="${m === 'think' ? 78 : 76}" cy="${m === 'think' ? 85 : 90}" r="5" fill="#1d1d1d"/><circle cx="48" cy="87" r="1.8" fill="#fff"/><circle cx="78" cy="87" r="1.8" fill="#fff"/></g>`;
            return `<svg class="yona homa yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
              <ellipse cx="60" cy="144" rx="30" ry="5" fill="currentColor" opacity=".12"/>
              <g class="yona-body">
                <g class="homa-wing homa-wing--l"><path d="M24 90 C2 80 -2 56 8 44 C14 60 24 64 34 70 C22 70 18 78 24 90 Z" fill="var(--c)"/><path d="M10 52 C16 62 22 66 30 70 M8 62 C14 70 20 74 26 78" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
                <g class="homa-wing homa-wing--r"><path d="M96 90 C118 80 122 56 112 44 C106 60 96 64 86 70 C98 70 102 78 96 90 Z" fill="var(--c)"/><path d="M110 52 C104 62 98 66 90 70 M112 62 C106 70 100 74 94 78" stroke="#fff" stroke-opacity=".45" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
                <path d="M58 52 C52 40 54 30 62 24 C60 34 64 42 68 50 Z" fill="#FFC800"/><path d="M62 52 C62 40 70 34 78 34 C72 40 70 46 70 54 Z" fill="#FF9600"/>
                <ellipse cx="60" cy="94" rx="47" ry="44" fill="#EF4056"/>
                <ellipse cx="60" cy="98" rx="29" ry="22" fill="#000" opacity=".08"/>
                <path d="M13 94 a47 44 0 0 0 94 0 a47 36 0 0 1 -94 0z" fill="#000" opacity=".07"/>
                <ellipse cx="34" cy="68" rx="8" ry="13" transform="rotate(38 34 68)" fill="#fff" opacity=".42"/>
                <g class="homa-o2"><circle cx="96" cy="44" r="12" fill="#1CB0F6" stroke="#fff" stroke-width="3"/><circle cx="92" cy="45" r="4" fill="#fff"/><circle cx="100" cy="42" r="3.2" fill="#fff"/></g>
                ${brows}${eyes}
                <ellipse cx="33" cy="102" rx="7" ry="4" fill="#ffb1bd" opacity=".75"/><ellipse cx="87" cy="102" rx="7" ry="4" fill="#ffb1bd" opacity=".75"/>
                ${mouths[m] || mouths.happy}${tear}
              </g>
            </svg>`;
          },
        uiExtra: function () {
          const esc = EA.ui.esc;
          function phScale(pH) {
          const p = Math.max(0, Math.min(1, (pH - 6.8) / 1.0));
          const lab = pH < 7.35 ? T('اسیدمی', 'Acidemia') : pH > 7.45 ? T('آلکالمی', 'Alkalemia') : T('طبیعی', 'Normal');
          return `<div class="phs" aria-label="pH ${fa(pH, 2)}: ${lab}">
            <div class="phs__bar"><span class="phs__norm"></span><i class="phs__m" style="inset-inline-start:${(1 - p) * 100}%"><b>${fa(pH, 2)}</b></i></div>
            <div class="phs__t"><span>${T(fa(7.8, 1) + ' قلیایی', fa(7.8, 1) + ' alkaline')}</span><span>${fa(7.4, 1)}</span><span>${T('اسیدی ' + fa(6.8, 1), 'acidic ' + fa(6.8, 1))}</span></div>
          </div>`;
        }
      
          /* ---------- کارت گزارش گاز خون ---------- */
          function labCard(o) {
          if (!o) return '';
          const rows = EA.labRows(o);
          if (!rows.length) return '';
          const kind = o.kind || 'ABG';
          const flag = f => f === 'H' ? `<i class="lab__f lab__f--h" aria-label="${T('بالا', 'High')}">▲</i>` : f === 'L' ? `<i class="lab__f lab__f--l" aria-label="${T('پایین', 'Low')}">▼</i>` : '';
          return `<div class="lab">
            <div class="lab__h"><span class="lab__k">${kind}</span>${o.o2 ? `<span class="lab__o2">🫁 ${esc(o.o2)}</span>` : ''}</div>
            ${typeof o.pH === 'number' ? phScale(o.pH) : ''}
            <div class="lab__g">${rows.map(r => `<div class="lab__c ${r[3] ? 'is-' + r[3] : ''}"><span class="lab__n" dir="ltr">${r[0]}</span><b dir="ltr">${r[1]}${flag(r[3])}</b><small dir="ltr">${r[2]}${r[2] ? ' • ' : ''}${r[4]}</small></div>`).join('')}</div>
          </div>`;
        }
          return { phScale, labCard };
        },

        /* ---------- اجراکننده ---------- */
        numPlaceholder: () => T('عدد یا عبارت، مثلاً 0.21*713-40/0.8', 'Number or expression, e.g. 0.21*713-40/0.8'),
        roundBrief: function (r, figCard, caseCard, labCard) {
          const brief = { kind: 'learn', title: T(`پرونده: ${r.title}`, `Case: ${r.title}`), bubble: T('بیمار تازه رسید! 🚑', 'A new patient just arrived! 🚑'), body: `<div class="rbrief"><b>${r.who}</b><p>${r.brief}</p></div>${labCard(r.lab)}<p>${T('در هر مرحله بهترین تصمیم را بگیر. توضیح هر پاسخ را بخوان؛ این‌جا خود مدیریت بیمار تمرین می‌شود.', 'Make the best decision at each step and read every explanation; this is where you practice managing a real patient.')}</p>` };
          return brief;
        },

        /* ---------- پوسته ---------- */
        icons: { tools: '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="4" fill="#12B3A8"/><rect x="9" y="6" width="14" height="6" rx="1.5" fill="#fff"/><g fill="#fff" opacity=".9"><circle cx="11" cy="17" r="1.8"/><circle cx="16" cy="17" r="1.8"/><circle cx="21" cy="17" r="1.8"/><circle cx="11" cy="23" r="1.8"/><circle cx="16" cy="23" r="1.8"/><rect x="19.2" y="21.2" width="3.6" height="3.6" rx="1" fill="#FFC800"/></g></svg>', chars: '<svg viewBox="0 0 32 32"><ellipse cx="16" cy="18" rx="12" ry="11" fill="#EF4056"/><ellipse cx="16" cy="19" rx="7" ry="5" fill="#000" opacity=".12"/><circle cx="12.5" cy="17" r="2" fill="#fff"/><circle cx="19.5" cy="17" r="2" fill="#fff"/><path d="M13 22q3 2.5 6 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="m25 3 1.2 2.8L29 7l-2.8 1.2L25 11l-1.2-2.8L21 7l2.8-1.2z" fill="#FFC800"/></svg>' },
        obRoles: [['دانشجوی پزشکی', 'Medical student'], ['انترن یا رزیدنت', 'Intern or resident'], ['پرستار', 'Nurse'], ['هوشبری یا بیهوشی', 'Anesthesia technician'], ['تنفس‌درمانی', 'Respiratory therapist'], ['پزشک عمومی یا متخصص', 'Physician'], ['سایر', 'Other']],
        practice: function (h) {
          const { s, worldOf } = h;
          return {
            calc: `<div class="pcard__i">🧮</div><h3>${T('تمرین محاسبات', 'Calculation practice')}</h3>
          <p>${T('مسئله‌های بالینی با اعداد تازه در هر بار. دنیا را انتخاب کن:', 'Clinical problems with fresh numbers every time. Pick a world:')}</p>`,
            rounds: `<p>${T(`${fa(EA.rounds.length)} بیمار از کتاب «ABG در بالین» و کیس‌های تکمیلی؛ گاز خون را بخوان، تفسیر کن و تصمیم بگیر. بهترین تمرین برای بخش.`, `${fa(EA.rounds.length)} realistic patients you manage yourself, from assessment to monitoring. The best preparation for the ward.`)}</p>
          <div class="rgroups">${EA.worlds.map(w => { const rs = EA.rounds.filter(r => r.w === w.id); if (!rs.length) return ''; return `<div class="rgroup"><div class="rgroup__h"><span class="wsym" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span><b>${w.name}</b><small>${T(fa(rs.length) + ' بیمار', fa(rs.length) + (rs.length === 1 ? ' patient' : ' patients'))}</small></div><div class="rlist">${rs.map(r => { const st = (s.rounds || {})[r.id]; return `<button class="rcase ${st && st.passed ? 'is-done' : ''}" data-act="round" data-id="${r.id}" style="--wc:${w.color};--wd:${w.dark}"><span class="rcase__t"><b>${r.title}</b><small>${r.who}</small></span><span class="rcase__s">${st ? (st.passed ? '✓ ' : '') + fa(Math.round(st.best * 100)) + '٪' : fa(r.steps.length) + T(' مرحله', ' steps')}</span></button>`; }).join('')}</div></div>`; }).join('')}</div>`,
            guide: `<p>${T('همه فرمول‌ها و نکته‌های هر دنیا در یک نگاه.', 'Every formula and key idea of each world at a glance.')}</p>`
          };
        },
        cert: function (s) {
          return {
            kicker: `<small class="cert__kicker">${T('هما • آکادمی تفسیر گازهای خون', 'Homa • Blood Gas Interpretation Academy')}</small>`,
            body: `<p>${T(`دوره آموزشی <b>تفسیر گازهای خون شریانی و وریدی (ABG و VBG)</b> شامل اکسیژناسیون و تبادل گاز، اصول اسید و باز، اسیدوز متابولیک و آنیون گپ، اختلالات تنفسی و آلکالوز، و نمونه‌گیری و گاز خون نوزادان را با موفقیت به پایان رساند و در امتحان نهایی نمره <b>${fa(Math.round(s.final.score * 100))}٪</b> کسب کرد.`, `has successfully completed the course <b>Diagnosis and Correction of Electrolyte Disorders</b>, covering sodium, potassium, calcium, magnesium and phosphate, with a final exam score of <b>${fa(Math.round(s.final.score * 100))}%</b>.`)}</p>`
          };
        },
        landing: function (h) {
          const { S, mascot, avatar, musicIcon, langBtn, esc } = h;
          const DEMO = () => EA.lang === 'en' ? {
    q: 'What is the correct interpretation of this blood gas?',
    case: [['Patient', '28-year-old man with diabetes, deep rapid breathing'], ['Glucose', '520 mg/dL']],
    lab: { o2: 'Room air', pH: 7.25, pco2: 28, hco3: 12, po2: 98 },
    opts: ['Metabolic acidosis with respiratory compensation', 'Uncompensated respiratory acidosis', 'Primary respiratory alkalosis', 'Mixed respiratory and metabolic acidosis'],
    why: 'The pH is low and the low HCO₃ explains it (the primary disorder). The low PCO₂ is respiratory compensation; Winter’s formula predicts 1.5 × 12 + 8 = 26 ± 2, so compensation is appropriate. In a diabetic with Kussmaul breathing: ketoacidosis.'
  } : {
    q: 'تفسیر درست این گاز خون کدام است؟',
    case: [['بیمار', 'مرد ۲۸ ساله دیابتی، تنفس عمیق و تند'], ['قند', '۵۲۰ mg/dL']],
    lab: { o2: 'هوای اتاق', pH: 7.25, pco2: 28, hco3: 12, po2: 98 },
    opts: ['اسیدوز متابولیک با جبران تنفسی', 'اسیدوز تنفسی جبران‌نشده', 'آلکالوز تنفسی اولیه', 'اسیدوز تنفسی و متابولیک مختلط'],
    why: 'pH پایین است و HCO₃ پایین آن را توضیح می‌دهد (اختلال اولیه). PCO₂ پایین جبران تنفسی است؛ با فرمول وینتر انتظار ۱٫۵ × ۱۲ + ۸ = ۲۶ ± ۲ داریم، پس جبران مناسب است. در دیابتی با تنفس کوسمال: کتواسیدوز.'
  };
    const s = S(), back = !!s.profile;
    const demo = DEMO();
    const lessons = EA.worlds.reduce((a, w) => a + w.lessons.length, 0);
    const qs = EA.worlds.reduce((a, w) => a + w.lessons.reduce((b, l) => b + l.items.filter(x => x.t !== 'learn').length, 0), 0) + EA.rounds.reduce((a, r) => a + r.steps.length, 0);
    const mols = [['O₂', '#1CB0F6'], ['CO₂', '#FF4B8B'], ['H⁺', '#FF9600'], ['HCO₃⁻', '#A560E8'], ['pH', '#5B6CF0']];
    const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    const startLbl = back ? T('ادامه یادگیری', 'Continue learning') : T('همین حالا شروع کن', 'Start now — it’s free');
    const lv = back ? EA.S.level() : null;
    const html = `
      <header class="land__bar"><span class="brand">${mascot('happy', 'var(--brand)', 30)}<span>${T('هما', 'Homa')}</span></span>
        <span class="land__bar-r">${langBtn('data-land="lang"')}<button class="chip-stat chip-stat--music ${s.settings.music ? 'is-on' : ''}" data-act="music" aria-label="${T('موسیقی', 'Music')}">${musicIcon()}</button><button class="btn btn--brand btn--sm" data-land="start">${back ? T('ادامه', 'Continue') : T('شروع', 'Start')}</button></span></header>
      <section class="land__hero">
        <div class="land__orbit" aria-hidden="true">
          <div class="land__yona">${mascot('cheer', 'var(--brand)', 150)}</div>
          ${mols.map((x, i) => `<span class="ion" style="--i:${i};--c:${x[1]}"><b dir="ltr">${x[0]}</b></span>`).join('')}
        </div>
        <span class="land__kicker">${T('🏆 کامل‌ترین مسیر یادگیری تفسیر ABG و VBG', '🏆 The most complete path to mastering ABG and VBG interpretation')}</span>
        <h1 class="land__h">${T('گاز خون را<br><em>مثل یک داستان بخوان</em>', 'Read a blood gas<br><em>like a story</em>')}</h1>
        <p class="land__p">${T(`سلام، من <b>هما</b> هستم؛ گلبولی که اکسیژن را به همه‌جا می‌برد. این‌جا فرمول حفظ نمی‌کنی؛ مثل پزشک کشیک تمرین می‌کنی: درس‌های سه‌دقیقه‌ای، بازخورد فوری، ${fa(EA.rounds.length)} بیمار از کتاب «ABG در بالین»، و تفسیرگری که هر گاز خون را قدم‌به‌قدم برایت باز می‌کند.`, `Hi, I’m <b>Homa</b>, the blood cell that carries oxygen everywhere. Here you don’t memorize formulas — you practice like the doctor on call: three-minute lessons, instant feedback, ${fa(EA.rounds.length)} patients from the book “ABG at the Bedside”, and an interpreter that unpacks any blood gas for you step by step.`)}</p>
        <div class="land__cta"><button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
          ${back ? `<span class="land__me">${avatar()}<span><b>${T(`خوش برگشتی ${esc(s.profile.name)}!`, `Welcome back, ${esc(s.profile.name)}!`)}</b><small>${T(`🔥 ${fa(s.streak)} روز • ⚡ ${fa(s.xp)} امتیاز • سطح ${fa(lv.n)}: ${lv.title}`, `🔥 ${fa(s.streak)}-day streak • ⚡ ${fa(s.xp)} XP • Level ${fa(lv.n)}: ${lv.title}`)}</small></span></span>`
            : `<small class="land__free">${T('بدون ثبت‌نام • بدون اینترنت • از همین گوشی', 'No sign-up • Works offline • Right on your phone')}</small><button class="btn btn--ghost" data-land="import">${T('پیشرفت قبلی را بازیابی کن', 'Restore earlier progress')}</button>`}</div>
      </section>
      <section class="land__nums">
        ${[[fa(EA.worlds.length), T('دنیای گاز خون', 'Blood gas worlds')], [fa(EA.worlds.length * 3), T('سطح نام‌دار', 'Named levels')], [fa(lessons), T('درس کوتاه', 'Bite-sized lessons')], [fa(qs) + '+', T('سؤال و مرحله بالینی', 'Questions & clinical steps')], [fa(EA.rounds.length), T('بیمار برای مدیریت', 'Patients to manage')], [fa(EA.tools.TOOLS.length), T('ابزار و تفسیرگر', 'Tools & interpreter')]].map(x => `<div><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
      </section>
      <section class="land__sec">
        <h2>${T('همین حالا یک ABG تفسیر کن', 'Interpret an ABG right now')}</h2>
        <div class="demo">
          ${EA.ui.labCard(demo.lab)}
          <div class="case"><div class="case__h">🩺 ${T('پرونده بیمار', 'Patient chart')}</div>${demo.case.map(r => `<div class="case__r"><span>${r[0]}</span><b>${EA.ui.iso(r[1])}</b></div>`).join('')}</div>
          <h3 class="q q--sm">${demo.q}</h3>
          <div class="opts">${order.map(k => `<button class="opt" data-demo="${k}"><span>${demo.opts[k]}</span></button>`).join('')}</div>
          <div class="demo__fb" hidden></div>
        </div>
      </section>
      <section class="land__sec">
        <h2>${T('چرا این روش بهترین راه است؟', 'Why is this the best way to learn?')}</h2>
        <p class="land__sub">${T('هما بر پایه اصولی ساخته شده که پژوهش‌های یادگیری بارها اثرشان را نشان داده‌اند.', 'Homa is built on principles that learning research has confirmed again and again.')}</p>
        <div class="land__why">${[
          ['🧠', T('یادآوری فعال', 'Active recall'), T('به جای خواندن، جواب می‌دهی. هر بار که از حافظه‌ات بیرون می‌کشی، آن نکته محکم‌تر می‌شود.', 'Instead of rereading, you answer. Every time you pull a fact from memory, it sticks a little more firmly.')],
          ['🔁', T('تکرار هوشمند', 'Smart repetition'), T('هر سؤالی که اشتباه کنی، دوباره و در زمان مناسب برمی‌گردد تا دیگر فراموشش نکنی.', 'Every question you miss comes back at just the right time, so it never slips away again.')],
          ['⚡', T('بازخورد فوری', 'Instant feedback'), T('همان لحظه می‌فهمی چرا درست یا غلط بود؛ هر اشتباه یک درس کوچک می‌شود.', 'You see right away why an answer is right or wrong, so every mistake becomes a mini-lesson.')],
          ['🏥', T('یادگیری روی بیمار', 'Learning at the bedside'), T('کیس‌های کتاب را با کارت کامل گاز خون، مرحله‌به‌مرحله مثل راند واقعی تفسیر می‌کنی.', 'You work through the book’s cases with a full blood gas report, step by step, like a real ward round.')]
        ].map(x => `<article><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('در پایان دوره تو می‌توانی…', 'By the end of the course, you’ll be able to…')}</h2>
        <ul class="land__out">${(EA.lang === 'en' ? [
          'Interpret any ABG with the book’s step-by-step method: gas exchange first, then acid–base',
          'Tell type 1 from type 2, acute from chronic respiratory failure, and grade hypoxemia',
          'Calculate the A–a gradient and P/F ratio and tell whether the problem is the lung or ventilation',
          'Use Winter’s formula and the “1-4, 2-4” rule to uncover a hidden second disorder',
          'Apply the anion gap, delta ratio, osmolar gap and urine anion gap to find the cause of an acidosis',
          'Titrate oxygen wisely in COPD and recognize when NIV is needed',
          'Interpret a VBG quickly, spot sampling pitfalls and read a neonatal blood gas'
        ] : [
          'هر ABG را با روش قدم‌به‌قدم کتاب تفسیر کنی: اول تبادل گاز، بعد اسید و باز',
          'نارسایی تنفسی نوع ۱ و ۲، حاد و مزمن را از هم جدا کنی و شدت هیپوکسمی را بسنجی',
          'گرادیان A–a و نسبت P/F را حساب کنی و بفهمی مشکل از ریه است یا تهویه',
          'با فرمول وینتر و قانون «۱-۴، ۲-۴» اختلال دوم پنهان را پیدا کنی',
          'آنیون گپ، دلتا، شکاف اسمولار و آنیون گپ ادرار را برای علت‌یابی اسیدوز به کار ببری',
          'اکسیژن را در بیمار COPD هوشمندانه تیتر کنی و زمان NIV را بشناسی',
          'VBG را سریع تفسیر کنی، دام‌های نمونه‌گیری را بشناسی و گاز خون نوزاد را بخوانی'
        ]).map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>${T('مسیرت این شکلی است', 'Here’s how your journey works')}</h2>
        <ol class="land__steps">${[
          [T('یاد بگیر', 'Learn'), T('کارت‌های کوتاه با جدول، فلوچارت و رمزهای به‌یادماندنی، قدم‌به‌قدم روی یک مسیر پیچان.', 'Short cards with tables, flowcharts and memorable mnemonics, one step at a time along a winding path.')],
          [T('تمرین کن', 'Practice'), T('هفت نوع سؤال، از چندگزینه‌ای تا محاسبه با کارت آزمایش؛ مسئله‌های محاسباتی هر بار با عددهای تازه.', 'Seven question types, from multiple choice to calculations from a lab report; calculation problems get fresh numbers every time.')],
          [T('بیمار را مدیریت کن', 'Manage a patient'), T('راند بیمارستان: گاز خون را بخوان، تفسیر کن و تصمیم درمانی بگیر.', 'Hospital rounds: read the blood gas, interpret it and make the treatment decision.')],
          [T('امتحان بده و گواهی بگیر', 'Pass the exam, earn a certificate'), T('با هر سطح یک کاراکتر، با هر دنیا یک نشان، و در پایان گواهی با نام خودت.', 'A character for every level, a badge for every world, and a certificate in your name at the finish.')]
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
        <p class="land__sub">${T('هر سطح که تمام شود، یک کاراکتر تازه به تو می‌پیوندد و می‌تواند همراهت در درس‌ها باشد.', 'Finish a level and a new character joins you — and can keep you company during lessons.')}</p>
        <div class="land__chars">${EA.chars.list.filter(c => c.lv === 0).map(c => `<figure>${EA.chars.draw(c, 'happy', 76)}<figcaption>${c.name}</figcaption></figure>`).join('')}
          ${EA.chars.list.filter(c => c.lv > 0).slice(0, 3).map(c => `<figure class="is-lock">${EA.chars.draw(c, 'happy', 76, true)}<figcaption>${T('؟؟؟', '???')}</figcaption></figure>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>${T('آیا می‌دانستی؟', 'Did you know?')}</h2>
        <div class="tip tip--land" role="button" tabindex="0" title="${T('نکته بعدی', 'Next tip')}"><div class="tip__body"></div></div>
      </section>
      <section class="land__sec">
        <h2>${T('منابع این دوره', 'Course sources')}</h2>
        <ul class="land__out land__src">${(EA.lang === 'en' ? [
          'The book “ABG at the Bedside”: principles, sampling technique, step-by-step interpretation and 25 clinical exercises',
          'ABG and VBG interpretation notes by Dr. Reza Zhian and Dr. Shayan Sigari (author: Keyvan Mohammadzadeh)',
          'Acid–base interpretation flowchart and compensation formulas (Sina Moradi)',
          'Slides on ABG and neonatal blood gas interpretation (Elaheh Rastkar)',
          'Updated with the BTS oxygen guideline, ADA guidance on ketoacidosis and the Berlin definition of ARDS'
        ] : [
          'کتاب «ABG در بالین»: اصول، روش نمونه‌گیری، تفسیر قدم‌به‌قدم و ۲۵ تمرین بالینی',
          'جزوه تفسیر ABG و VBG دکتر رضا ژیان و دکتر شایان سیگاری (نویسنده: کیوان محمدزاده)',
          'فلوچارت تفسیر اسید و باز و فرمول‌های جبران (سینا مرادی)',
          'اسلایدهای تفسیر ABG و گاز خون نوزادان (الهه راستکار)',
          'به‌روزرسانی با راهنماهای BTS برای اکسیژن‌درمانی، ADA برای کتواسیدوز و تعریف برلین ARDS'
        ]).map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>${T('همه چیزهایی که یک بازی خوب لازم دارد', 'Everything a great game needs')}</h2>
        <div class="land__feat">${[
          ['❤️', T('قلب‌ها', 'Hearts'), T('هر اشتباه یک قلب؛ با تمرین برمی‌گردد', 'Each mistake costs a heart; practice wins it back')],
          ['🔥', T('زنجیره روزانه', 'Daily streak'), T('هر روز چند دقیقه، آتشت روشن می‌ماند', 'A few minutes a day keeps your flame burning')],
          ['🏆', T('لیگ هفتگی', 'Weekly league'), T(`${fa(30)} نفر در هر گروه، از برنز تا الماس`, `${fa(30)} players per group, from Bronze to Diamond`)],
          ['🧮', T('تفسیرگر ABG', 'ABG interpreter'), T('و پنج ابزار دیگر با راه‌حل گام‌به‌گام', 'plus five more tools with step-by-step solutions')],
          ['🎵', T('موسیقی تمرکز', 'Focus music'), T('آرام و بی‌کلام؛ با یک لمس قطع می‌شود', 'Calm and wordless; one tap to mute')],
          ['🎓', T('گواهی پایان دوره', 'Course certificate'), T('با نام و تاریخ شمسی', 'With your name and completion date')]
        ].map(x => `<div><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div>
      </section>
      <section class="land__end">
        ${mascot('cheer', 'var(--brand)', 110)}
        <h2>${back ? T('درس بعدی منتظرت است', 'Your next lesson is waiting') : T('اولین درس کمتر از ۳ دقیقه است', 'Your first lesson takes less than 3 minutes')}</h2>
        <p class="land__p">${T('هر روز فقط ۵ دقیقه. چند هفته بعد، تفسیر ABG یکی از نقاط قوت تو خواهد بود.', 'Just 5 minutes a day. A few weeks from now, ABG interpretation will be one of your strengths.')}</p>
        <button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
        <p class="disclaimer">${T('هما ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.', 'Homa is an educational tool. It does not replace clinical judgment, a physician’s orders or your hospital’s protocols.')}</p>
      </section>
      <div class="land__sticky"><button class="btn btn--brand btn--lg btn--block" data-land="start">${startLbl}</button></div>`;
          return { html, demo };
        },
        demoFeedback: function (good, demo) {
          const ok = good;
          return `<b>${good ? T('✓ آفرین! دقیقاً همین.', '✓ Well done — exactly right.') : T('✗ نزدیک بود؛ پاسخ درست: اسیدوز متابولیک با جبران تنفسی', '✗ Close! The right answer is metabolic acidosis with respiratory compensation.')}</b><p>${demo.why}</p><button class="btn btn--brand" data-land="start">${good ? T('تو آماده‌ای؛ بیا ادامه بدهیم', 'You’re ready — let’s keep going') : T('بیا با هم یادش بگیریم', 'Let’s learn it together')}</button>`;
        },
        obSteps: function (h) {
          const { d, bubble, esc, GOALS } = h;
          const ROLES = this.obRoles;
          const steps = [
      () => `${bubble(T('سلام! من هما هستم؛ یک گلبول قرمز بال‌دار که اکسیژن را به همه‌جا می‌برم 🫁 اسمت چیه؟', 'Hi! I’m Homa, a winged red blood cell who carries oxygen everywhere 🫁 What’s your name?'))}
        <input class="ob__in" id="ob-name" maxlength="40" placeholder="${T('نام تو', 'Your name')}" value="${esc(d.name)}" autocomplete="given-name">
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="name">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T(`خوشبختم ${esc(d.name)}! یک عکس برای پروفایلت می‌گذاری؟ (اختیاری)`, `Nice to meet you, ${esc(d.name)}! Would you like to add a profile photo? (optional)`))}
        <div class="ob__photo"><label class="avpick" for="ob-ph">${d.photo ? `<span class="avatar avatar--xl"><img src="${d.photo}" alt="" draggable="false"></span>` : `<span class="avatar avatar--xl" style="--h:170">${esc(d.name[0] || T('؟', '?'))}</span>`}<span class="avpick__cam" aria-hidden="true">📷</span></label>
        <input type="file" id="ob-ph" accept="image/*" hidden><label class="link link--btn" for="ob-ph">${d.photo ? T('تغییر عکس', 'Change photo') : T('انتخاب عکس از گالری', 'Choose from your gallery')}</label></div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">${d.photo ? T('ادامه', 'Continue') : T('فعلاً نه، ادامه', 'Not now, continue')}</button></div>`,
      () => `${bubble(T('در چه زمینه‌ای کار یا تحصیل می‌کنی؟', 'What do you do? Pick the one that fits you best.'))}
        <div class="ob__grid">${ROLES.map((r, i) => `<button class="ob__opt ${d.role === r[0] ? 'is-sel' : ''}" data-ob="role" data-v="${i}">${T(r[0], r[1])}</button>`).join('')}</div>`,
      () => `${bubble(T('هدف روزانه‌ات چقدر باشد؟', 'How much do you want to learn each day?'))}
        <div class="ob__list">${GOALS().map(g => `<button class="ob__opt ob__opt--row ${d.goal === g[0] ? 'is-sel' : ''}" data-ob="goal" data-v="${g[0]}"><b>${g[1]}</b><span>${g[2]}</span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">${T('ادامه', 'Continue')}</button></div>`,
      () => `${bubble(T('از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «اکسیژن و تبادل گاز» بهترین شروع است؛ بعداً به بقیه هم سر می‌زنیم!', 'Which world shall we start with? If you’re new, “Oxygen & Gas Exchange” is the best place to begin; we’ll visit the others later!'))}
        <div class="wlist">${EA.worlds.map(w => `<button class="wcard ${d.start === w.id ? 'is-sel' : ''}" data-ob="start" data-v="${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}"><span class="wsym">${w.sym}</span><span><b>${w.name}</b><small>${w.sub}</small></span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="finish">${T('بزن بریم! 🚀', 'Let’s go! 🚀')}</button></div>`
    ];
          return steps;
        }
      };
    },

    /* ================= محتوای کامل دوره (ماژول‌های اصلی، بدون تغییر) ================= */
    content: function () {

/* هما — فرمول‌های گازهای خون، تفسیرگر گام‌به‌گام و مولد مسئله‌های محاسباتی
 * همه محاسبه‌های درس‌ها، ابزارها و آزمون‌ها از همین فایل می‌آیند تا یک منبع واحد داشته باشیم.
 * این فایل هم در مرورگر و هم در Node (برای آزمون‌ها) بارگذاری می‌شود. */
(function (root) {
  const EA = root.EA = root.EA || {};
  /** متن دوزبانه: T(فارسی، انگلیسی) — در لحظه نمایش، با زبان فعلی */
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
      .replace(/[−–]/g, '-')
      .replace(/[^\d.\-]/g, '');
  }
  function parseNum(s) {
    const t = toEn(s);
    if (!t || t === '.' || t === '-') return NaN;
    return parseFloat(t);
  }
  const round = (x, d) => { const p = Math.pow(10, d || 0); return Math.round(x * p) / p; };
  const n = x => fa(x, 3);
  /** عدد علامت‌دار: +۴ یا −۵ (+4 یا −5) */
  const sg = (x, d) => (x > 0 ? '+' : x < 0 ? '−' : '') + fa(Math.abs(x), d == null ? 1 : d);

  /* ---------- مقادیر طبیعی گزارش گاز خون (بر پایه کتاب ABG و منابع مرجع) ---------- */
  const NORM = {
    pH: { lo: 7.35, hi: 7.45, txt: '7.35–7.45', unit: '', d: 2 },
    h: { lo: 35, hi: 45, txt: '35–45', unit: 'nEq/L', d: 1, label: 'H⁺' },
    pco2: { lo: 35, hi: 45, txt: '35–45', unit: 'mmHg', d: 1, label: 'PCO₂' },
    po2: { lo: 80, hi: Infinity, txt: '> 80', unit: 'mmHg', d: 0, label: 'PO₂' },
    hco3: { lo: 22, hi: 26, txt: '22–26', unit: 'mEq/L', d: 1, label: 'HCO₃⁻' },
    be: { lo: -2, hi: 2, txt: '−2…+2', unit: 'mEq/L', d: 1, label: 'BE' },
    so2: { lo: 95, hi: Infinity, txt: '> 95', unit: '%', d: 1, label: 'SO₂' },
    lac: { lo: 0.5, hi: 2, txt: '0.5–2', unit: 'mmol/L', d: 1, label: 'Lactate' },
    na: { lo: 135, hi: 145, txt: '135–145', unit: 'mEq/L', d: 0, label: 'Na⁺' },
    k: { lo: 3.5, hi: 5, txt: '3.5–5', unit: 'mEq/L', d: 1, label: 'K⁺' },
    cl: { lo: 95, hi: 105, txt: '95–105', unit: 'mEq/L', d: 0, label: 'Cl⁻' },
    ca: { lo: 4, hi: 5, txt: '4–5', unit: 'mg/dL', d: 1, label: 'iCa²⁺' },
    hbm: { lo: 13, hi: 18, txt: '13–18', unit: 'g/dL', d: 1, label: 'Hb' },
    hbf: { lo: 11.5, hi: 15.5, txt: '11.5–15.5', unit: 'g/dL', d: 1, label: 'Hb' },
    glu: { lo: 60, hi: 110, txt: '60–110', unit: 'mg/dL', d: 0, label: 'Glucose' },
    alb: { lo: 3.5, hi: 5, txt: '3.5–5', unit: 'g/dL', d: 1, label: 'Albumin' },
    cohb: { lo: 0, hi: 3, txt: '< 3', unit: '%', d: 0, label: 'COHb' }
  };
  const LAB_ORDER = ['h', 'pH', 'pco2', 'po2', 'hco3', 'be', 'so2', 'lac', 'na', 'k', 'cl', 'ca', 'hb', 'glu', 'alb', 'cohb'];

  /** ردیف‌های کارت آزمایش: [برچسب، مقدار، واحد، پرچم، محدوده طبیعی] */
  function labRows(o) {
    return LAB_ORDER.filter(k => o[k] != null).map(k => {
      const key = k === 'hb' ? (o.sex === 'f' ? 'hbf' : 'hbm') : k;
      const m = NORM[key];
      const v = o[k];
      const flag = typeof v === 'number' ? (v < m.lo ? 'L' : v > m.hi ? 'H' : '') : '';
      const txt = typeof v === 'number' ? fa(v, k === 'pH' ? 2 : 2) : v;
      return [k === 'pH' ? 'pH' : m.label, txt, m.unit, flag, m.txt];
    });
  }

  /* ---------- فرمول‌ها ---------- */
  const F = {
    /** غلظت یون هیدروژن از pH (نانواکی‌والان در لیتر) */
    hFromPh: pH => Math.pow(10, 9 - pH),
    phFromH: h => 9 - Math.log10(h),
    /** قاعده «۸۰ منهای دو رقم اعشار» (در pH بین ۷٫۲ و ۷٫۵ دقیق است) */
    h80: pH => 80 - Math.round((pH - 7) * 100),
    /** معادله کسیرر–بلیچ (شکل ساده هندرسون) */
    hKB: (pco2, hco3) => 24 * pco2 / hco3,
    /** هندرسون–هاسلباخ */
    phHH: (pco2, hco3) => 6.1 + Math.log10(hco3 / (0.03 * pco2)),
    hcoHH: (pH, pco2) => 0.03 * pco2 * Math.pow(10, pH - 6.1),
    /** آنیون گپ؛ اگر پتاسیم داده شود نسخه کتاب (با پتاسیم) */
    ag: (na, cl, hco3, k) => (k ? na + k : na) - cl - hco3,
    /** آنیون گپ اصلاح‌شده با آلبومین (g/dL) */
    agCorr: (ag, alb) => ag + 2.5 * (4 - alb),
    /** نسبت دلتا: ΔAG ÷ ΔHCO3 */
    delta: (ag, hco3) => (ag - 12) / (24 - hco3),
    /** بی‌کربنات «اصلاح‌شده» (دلتا گپ): HCO3 + ΔAG */
    hcoCorr: (ag, hco3) => hco3 + (ag - 12),
    /** فرمول وینتر: PCO2 مورد انتظار در اسیدوز متابولیک (±۲) */
    winter: hco3 => 1.5 * hco3 + 8,
    /** PCO2 مورد انتظار در آلکالوز متابولیک: ۴۰ + ۰٫۷ × ΔHCO3 (±۵) */
    malk: hco3 => 40 + 0.7 * (hco3 - 24),
    /** HCO3 مورد انتظار در اسیدوز تنفسی */
    racid: (pco2, chronic) => 24 + (chronic ? 0.4 : 0.1) * (pco2 - 40),
    /** HCO3 مورد انتظار در آلکالوز تنفسی */
    ralk: (pco2, chronic) => 24 - (chronic ? 0.4 : 0.2) * (40 - pco2),
    /** pH مورد انتظار در اسیدوز تنفسی: حاد ۰٫۰۰۸ و مزمن ۰٫۰۰۳ به ازای هر mmHg */
    racidPh: (pco2, chronic) => 7.4 - (chronic ? 0.003 : 0.008) * (pco2 - 40),
    osm: (na, glu, bun) => 2 * na + glu / 18 + bun / 2.8,
    uag: (una, uk, ucl) => una + uk - ucl,
    /** فشار اکسیژن حبابچه‌ای: FiO2 × (Patm − 47) − PaCO2 ÷ 0.8 */
    pAO2: (fio2, pco2, patm) => fio2 * ((patm || 760) - 47) - pco2 / 0.8,
    aa: (fio2, pao2, pco2, patm) => F.pAO2(fio2, pco2, patm) - pao2,
    /** گرادیان A–a مورد انتظار در هوای اتاق: سن ÷ ۴ + ۴ */
    aaExp: age => age / 4 + 4,
    pf: (pao2, fio2) => pao2 / fio2,
    /** محتوای اکسیژن شریانی (mL/dL) */
    cao2: (hb, sao2, pao2) => 1.34 * hb * sao2 / 100 + 0.003 * pao2,
    /** PaO2 مورد انتظار تقریبی: ۵ برابر درصد FiO2 */
    expPao2: fio2pct => 5 * fio2pct,
    /** FiO2 تقریبی کانول بینی: ۲۱ + ۴ × لیتر (درصد) */
    ncFio2: L => 21 + 4 * L,
    /** کمبود بی‌کربنات بزرگسال: ۰٫۵ × وزن × (هدف − HCO3) */
    bicarbDef: (w, hco3, target, factor) => (factor || 0.5) * w * ((target || 24) - hco3),
    /** بی‌کربنات در نوزاد: کمبود باز × وزن × ۰٫۳ */
    bicarbBE: (w, bd) => 0.3 * w * Math.abs(bd),
    kpa: mmhg => mmhg / 7.5,
    mmhg: kpa => kpa * 7.5,
    /** برآورد تقریبی مقادیر شریانی از نمونه وریدی محیطی */
    vbgToAbg: v => ({ pH: v.pH + 0.04, pco2: v.pco2 - 5, hco3: v.hco3 - 1.5 }),
    hypoxSev(pao2) {
      if (pao2 >= 80) return null;
      if (pao2 >= 60) return { key: 'mild', label: T('خفیف', 'mild'), sat: T('۹۰ تا ۹۴٪', '90 to 94%') };
      if (pao2 >= 40) return { key: 'mod', label: T('متوسط', 'moderate'), sat: T('۷۵ تا ۸۹٪', '75 to 89%') };
      return { key: 'sev', label: T('شدید', 'severe'), sat: T('کمتر از ۷۵٪', 'below 75%') };
    },
    pfSev(pf) {
      if (pf > 300) return null;
      if (pf > 200) return { key: 'mild', label: T('خفیف (۲۰۰ تا ۳۰۰)', 'mild (200 to 300)') };
      if (pf > 100) return { key: 'mod', label: T('متوسط (۱۰۰ تا ۲۰۰)', 'moderate (100 to 200)') };
      return { key: 'sev', label: T('شدید (۱۰۰ یا کمتر)', 'severe (100 or less)') };
    }
  };

  /* ---------- نام اختلال‌ها ---------- */
  const DN_TXT = {
    racid: ['اسیدوز تنفسی', 'respiratory acidosis'], ralk: ['آلکالوز تنفسی', 'respiratory alkalosis'], macid: ['اسیدوز متابولیک', 'metabolic acidosis'], malk: ['آلکالوز متابولیک', 'metabolic alkalosis'],
    hagma: ['اسیدوز متابولیک با آنیون گپ بالا', 'high anion gap metabolic acidosis'], nagma: ['اسیدوز متابولیک با آنیون گپ طبیعی (هیپرکلرمیک)', 'normal anion gap (hyperchloremic) metabolic acidosis']
  };
  /** نام اختلال‌ها به زبان فعلی (هر بار خواندن، زبان همان لحظه) */
  const DN = {};
  Object.keys(DN_TXT).forEach(k => Object.defineProperty(DN, k, { get: () => T(DN_TXT[k][0], DN_TXT[k][1]), enumerable: true }));

  /**
   * تفسیرگر کامل گاز خون.
   * ورودی: { pH, pco2, hco3, po2?, fio2? (کسر، مثلاً ۰٫۲۱), age?, na?, cl?, k?, alb?, chronic? ('acute'|'chronic'|'auto'), patm?, sample? ('abg'|'vbg') }
   * خروجی: فهرست‌های نتیجه، گام‌ها، هشدارها و نکته‌ها برای نمایش در ابزار و آزمون‌ها.
   */
  function interpret(inp) {
    const v = Object.assign({ sample: 'abg', fio2: 0.21, patm: 760 }, inp);
    const out = { steps: [], warn: [], notes: [], disorders: [], primary: null, status: null, gas: null, ag: null, comp: null, valid: null, summary: '' };
    const venous = v.sample === 'vbg';
    let { pH, pco2, hco3 } = v;
    if (![pH, pco2, hco3].every(x => typeof x === 'number' && isFinite(x) && x > 0)) return null;

    /* ۰. نمونه وریدی ← برآورد شریانی */
    if (venous) {
      const a = F.vbgToAbg({ pH, pco2, hco3 });
      out.steps.push(T(`<b>نمونه وریدی:</b> مقادیر شریانی تقریبی ← pH ≈ ${fa(pH, 2)} + ${n(0.04)} = ${fa(a.pH, 2)}، PCO₂ ≈ ${fa(pco2)} − ${n(5)} = ${fa(a.pco2)}، HCO₃ ≈ ${fa(hco3)} − ${n(1.5)} = ${fa(a.hco3)}`, `<b>Venous sample:</b> approximate arterial values → pH ≈ ${fa(pH, 2)} + ${n(0.04)} = ${fa(a.pH, 2)}, PCO₂ ≈ ${fa(pco2)} − ${n(5)} = ${fa(a.pco2)}, HCO₃ ≈ ${fa(hco3)} − ${n(1.5)} = ${fa(a.hco3)}`));
      if (pco2 < 45) out.notes.push(T('PCO₂ وریدی کمتر از ۴۵ است؛ هیپرکاپنی شریانی تقریباً رد می‌شود.', 'Venous PCO₂ is below 45; arterial hypercapnia is almost ruled out.'));
      else out.notes.push(T('PCO₂ وریدی بالا مقدار شریانی را دقیق پیش‌بینی نمی‌کند؛ اگر هیپرکاپنی برای تصمیم مهم است، ABG بگیر.', 'A high venous PCO₂ does not predict the arterial value precisely; if hypercapnia matters for the decision, take an ABG.'));
      out.notes.push(T('از نمونه وریدی برای قضاوت درباره اکسیژناسیون استفاده نکن؛ پالس اکسیمتری یا ABG لازم است.', 'Do not judge oxygenation from a venous sample; pulse oximetry or an ABG is needed.'));
      pH = a.pH; pco2 = a.pco2; hco3 = a.hco3;
    }

    /* ۱. راستی‌آزمایی داده‌ها */
    const hm = F.hFromPh(pH), hk = F.hKB(pco2, hco3), diff = Math.abs(hk - hm) / hm;
    out.valid = { hm, hk, ok: diff <= 0.12 };
    out.steps.push(T(`<b>راستی‌آزمایی:</b> [H⁺] از pH = ${fa(hm)} و از فرمول ۲۴ × PCO₂ ÷ HCO₃ = ${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = ${fa(hk)} nEq/L ← ${out.valid.ok ? 'هم‌خوان است ✓' : 'هم‌خوان نیست ✗'}`, `<b>Validity check:</b> [H⁺] from pH = ${fa(hm)} and from 24 × PCO₂ ÷ HCO₃ = ${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = ${fa(hk)} nEq/L → ${out.valid.ok ? 'consistent ✓' : 'not consistent ✗'}`));
    if (!out.valid.ok && !venous) out.warn.push(T('عددهای pH، PCO₂ و HCO₃ با هم نمی‌خوانند. یا عددی اشتباه وارد شده، یا به جای بی‌کربنات واقعی (actual) بی‌کربنات استاندارد وارد شده است؛ برای تفسیر، HCO₃ واقعی لازم است.', 'The pH, PCO₂ and HCO₃ do not agree. Either a number was entered wrongly, or standard bicarbonate was entered instead of the actual bicarbonate; interpretation needs the actual HCO₃.'));

    /* ۲. وضعیت pH */
    out.status = pH < 7.35 ? 'acidemia' : pH > 7.45 ? 'alkalemia' : 'normal';
    const stTxt = { acidemia: T('اسیدمی', 'acidemia'), alkalemia: T('آلکالمی', 'alkalemia'), normal: T('pH طبیعی', 'normal pH') }[out.status];
    out.steps.push(`<b>pH:</b> ${fa(pH, 2)} ${T('←', '→')} ${stTxt}${out.status === 'normal' ? (pH < 7.4 ? T(' (سمت اسیدی ۷٫۴۰)', ' (acidic side of 7.40)') : pH > 7.4 ? T(' (سمت قلیایی ۷٫۴۰)', ' (alkaline side of 7.40)') : '') : ''}`);
    if (pH < 7.25) out.warn.push(T('pH کمتر از ۷٫۲۵: مکانیسم‌های جبرانی شکست خورده‌اند؛ اورژانس پزشکی.', 'pH below 7.25: compensatory mechanisms have failed; a medical emergency.'));
    if (pH < 6.8 || pH > 7.8) out.warn.push(T('pH خارج از محدوده ۶٫۸ تا ۷٫۸ با زندگی سازگار نیست؛ خطای نمونه را هم در نظر بگیر.', 'A pH outside 6.8 to 7.8 is incompatible with life; consider a sample error too.'));

    const lowP = pco2 < 35, highP = pco2 > 45, lowB = hco3 < 22, highB = hco3 > 26;
    const pTxt = highP ? T('بالا (به سمت اسیدوز)', 'high (toward acidosis)') : lowP ? T('پایین (به سمت آلکالوز)', 'low (toward alkalosis)') : T('طبیعی', 'normal');
    const bTxt = highB ? T('بالا (به سمت آلکالوز)', 'high (toward alkalosis)') : lowB ? T('پایین (به سمت اسیدوز)', 'low (toward acidosis)') : T('طبیعی', 'normal');
    out.steps.push(`<b>PCO₂:</b> ${fa(pco2)} mmHg ${T('←', '→')} ${pTxt} • <b>HCO₃:</b> ${fa(hco3)} mEq/L ${T('←', '→')} ${bTxt}`);

    /* ۳. اختلال اولیه */
    let prim = null; const add = [];
    if (out.status === 'acidemia') {
      if (highP && lowB) { add.push('racid', 'macid'); }
      else if (highP) prim = 'racid';
      else if (lowB) prim = 'macid';
      else prim = pco2 >= 40 && hco3 <= 24 ? null : pco2 > 40 ? 'racid' : 'macid';
      if (!prim && !add.length) add.push('racid', 'macid');
    } else if (out.status === 'alkalemia') {
      if (lowP && highB) { add.push('ralk', 'malk'); }
      else if (lowP) prim = 'ralk';
      else if (highB) prim = 'malk';
      else prim = pco2 <= 40 && hco3 >= 24 ? null : pco2 < 40 ? 'ralk' : 'malk';
      if (!prim && !add.length) add.push('ralk', 'malk');
    } else {
      if (highP && highB) { prim = pH < 7.4 ? 'racid' : 'malk'; out.notes.push(T('PCO₂ و HCO₃ هر دو بالا با pH طبیعی: یا یک اختلال کاملاً جبران‌شده است یا اسیدوز تنفسی + آلکالوز متابولیک. pH سمت کدام طرف ۷٫۴۰ است، اختلال اولیه را نشان می‌دهد؛ بالین بیمار حرف آخر را می‌زند.', 'PCO₂ and HCO₃ both high with a normal pH: either one fully compensated disorder, or respiratory acidosis + metabolic alkalosis. The side of 7.40 the pH is on points to the primary disorder; the clinical picture has the final word.')); }
      else if (lowP && lowB) { prim = pH < 7.4 ? 'macid' : 'ralk'; out.notes.push(T('PCO₂ و HCO₃ هر دو پایین با pH طبیعی: یا یک اختلال جبران‌شده است یا اسیدوز متابولیک + آلکالوز تنفسی (مثل مسمومیت با آسپرین).', 'PCO₂ and HCO₃ both low with a normal pH: either one compensated disorder, or metabolic acidosis + respiratory alkalosis (as in aspirin poisoning).')); }
      else if (highP && lowB) { add.push('racid', 'macid'); out.warn.push(T('PCO₂ بالا و HCO₃ پایین با pH طبیعی تقریباً ممکن نیست؛ عددها را بررسی کن.', 'A high PCO₂ and a low HCO₃ with a normal pH is almost impossible; check the numbers.')); }
      else if (lowP && highB) { add.push('ralk', 'malk'); out.warn.push(T('PCO₂ پایین و HCO₃ بالا با pH طبیعی تقریباً ممکن نیست؛ عددها را بررسی کن.', 'A low PCO₂ and a high HCO₃ with a normal pH is almost impossible; check the numbers.')); }
      else if (highP) prim = 'racid';
      else if (lowP) prim = 'ralk';
      else if (highB) prim = 'malk';
      else if (lowB) prim = 'macid';
    }
    out.primary = prim;
    if (add.length) {
      out.disorders.push(...add);
      out.steps.push(T(`<b>اختلال اولیه:</b> هر دو جزء تنفسی و متابولیک در یک جهت‌اند ← <b>${DN[add[0]]} + ${DN[add[1]]}</b> (اختلال مختلط؛ جبرانی در کار نیست و تغییر pH خطرناک است)`, `<b>Primary disorder:</b> the respiratory and metabolic components move in the same direction → <b>${DN[add[0]]} + ${DN[add[1]]}</b> (a mixed disorder; there is no compensation and the pH change is dangerous)`));
    } else if (prim) {
      out.disorders.push(prim);
      const why = { racid: T('PCO₂ بالا pH را پایین آورده', 'a high PCO₂ has lowered the pH'), ralk: T('PCO₂ پایین pH را بالا برده', 'a low PCO₂ has raised the pH'), macid: T('HCO₃ پایین pH را پایین آورده', 'a low HCO₃ has lowered the pH'), malk: T('HCO₃ بالا pH را بالا برده', 'a high HCO₃ has raised the pH') }[prim];
      out.steps.push(T(`<b>اختلال اولیه:</b> ${DN[prim]} (${why}؛ هم‌جهت با pH)`, `<b>Primary disorder:</b> ${DN[prim]} (${why}; moving with the pH)`));
    } else if (out.status === 'normal') {
      out.steps.push(T('<b>اختلال اولیه:</b> pH، PCO₂ و HCO₃ همه طبیعی‌اند.', '<b>Primary disorder:</b> pH, PCO₂ and HCO₃ are all normal.'));
    }

    /* ۴. جبران مورد انتظار */
    const r1 = x => fa(x, 1);
    if (prim === 'macid') {
      const e = F.winter(hco3);
      out.comp = { exp: e, lo: e - 2, hi: e + 2 };
      out.steps.push(T(`<b>جبران (وینتر):</b> PCO₂ مورد انتظار = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${r1(e)} ± ${n(2)} ← یعنی ${r1(e - 2)} تا ${r1(e + 2)}`, `<b>Compensation (Winters):</b> expected PCO₂ = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${r1(e)} ± ${n(2)} → that is ${r1(e - 2)} to ${r1(e + 2)}`));
      if (pco2 > e + 2) { out.disorders.push('racid'); out.steps.push(T(`PCO₂ بیمار (${fa(pco2)}) از حد انتظار بالاتر است ← <b>اسیدوز تنفسی همراه</b> (ریه نمی‌تواند جبران کند؛ به خستگی تنفسی فکر کن)`, `The patient’s PCO₂ (${fa(pco2)}) is higher than expected → <b>an accompanying respiratory acidosis</b> (the lungs cannot compensate; think of respiratory fatigue)`)); }
      else if (pco2 < e - 2) { out.disorders.push('ralk'); out.steps.push(T(`PCO₂ بیمار (${fa(pco2)}) از حد انتظار پایین‌تر است ← <b>آلکالوز تنفسی همراه</b> (مثلاً سپسیس یا آسپرین)`, `The patient’s PCO₂ (${fa(pco2)}) is lower than expected → <b>an accompanying respiratory alkalosis</b> (for example sepsis or aspirin)`)); }
      else out.steps.push(T(`PCO₂ بیمار در محدوده است ← جبران تنفسی مناسب${out.status === 'normal' ? ' و کامل' : ' (نسبی)'}`, `The patient’s PCO₂ is within range → appropriate respiratory compensation${out.status === 'normal' ? ' (complete)' : ' (partial)'}`));
    } else if (prim === 'malk') {
      const e = F.malk(hco3);
      out.comp = { exp: e, lo: e - 5, hi: e + 5 };
      out.steps.push(T(`<b>جبران:</b> PCO₂ مورد انتظار = ${n(40)} + ${n(0.7)} × (${fa(hco3)} − ${n(24)}) = ${r1(e)} ± ${n(5)} (قاعده سریع: HCO₃ + ۱۵ = ${r1(hco3 + 15)})`, `<b>Compensation:</b> expected PCO₂ = ${n(40)} + ${n(0.7)} × (${fa(hco3)} − ${n(24)}) = ${r1(e)} ± ${n(5)} (quick rule: HCO₃ + 15 = ${r1(hco3 + 15)})`));
      if (pco2 > e + 5) { out.disorders.push('racid'); out.steps.push(T(`PCO₂ بیمار (${fa(pco2)}) بیش از حد انتظار است ← <b>اسیدوز تنفسی همراه</b>`, `The patient’s PCO₂ (${fa(pco2)}) is above the expected value → <b>an accompanying respiratory acidosis</b>`)); }
      else if (pco2 < e - 5) { out.disorders.push('ralk'); out.steps.push(T(`PCO₂ بیمار (${fa(pco2)}) کمتر از حد انتظار است ← <b>آلکالوز تنفسی همراه</b>`, `The patient’s PCO₂ (${fa(pco2)}) is below the expected value → <b>an accompanying respiratory alkalosis</b>`)); }
      else out.steps.push(T('PCO₂ بیمار در محدوده است ← جبران تنفسی مناسب (جبران تنفسی آلکالوز به‌خاطر هیپوکسمی محدود است و PCO₂ معمولاً از ۵۵ بالاتر نمی‌رود)', 'The patient’s PCO₂ is within range → appropriate respiratory compensation (respiratory compensation for alkalosis is limited by hypoxemia and PCO₂ rarely rises above 55)'));
    } else if (prim === 'racid') {
      const a = F.racid(pco2, false), c = F.racid(pco2, true);
      out.comp = { acute: a, chronic: c };
      out.steps.push(T(`<b>جبران کلیوی:</b> HCO₃ مورد انتظار ← حاد: ${n(24)} + ${n(0.1)} × ${fa(pco2 - 40)} = ${r1(a)} • مزمن: ${n(24)} + ${n(0.4)} × ${fa(pco2 - 40)} = ${r1(c)}`, `<b>Renal compensation:</b> expected HCO₃ → acute: ${n(24)} + ${n(0.1)} × ${fa(pco2 - 40)} = ${r1(a)} • chronic: ${n(24)} + ${n(0.4)} × ${fa(pco2 - 40)} = ${r1(c)}`));
      if (v.chronic === 'acute' && hco3 > a + 3 || hco3 > c + 2) { out.disorders.push('malk'); out.steps.push(T(`HCO₃ بیمار (${fa(hco3)}) از حد انتظار بالاتر است ← <b>آلکالوز متابولیک همراه</b>`, `The patient’s HCO₃ (${fa(hco3)}) is higher than expected → <b>an accompanying metabolic alkalosis</b>`)); }
      else if (hco3 < a - 3) { out.disorders.push('macid'); out.steps.push(T(`HCO₃ بیمار (${fa(hco3)}) حتی از حالت حاد کمتر است ← <b>اسیدوز متابولیک همراه</b>`, `The patient’s HCO₃ (${fa(hco3)}) is even lower than the acute value → <b>an accompanying metabolic acidosis</b>`)); }
      else if (hco3 <= a + 2) out.steps.push(T('HCO₃ در حد حاد است ← <b>اسیدوز تنفسی حاد</b> (هنوز فرصت جبران کلیوی نبوده)', 'HCO₃ is at the acute level → <b>acute respiratory acidosis</b> (no time yet for renal compensation)'));
      else if (hco3 >= c - 2) out.steps.push(T('HCO₃ در حد مزمن است ← <b>اسیدوز تنفسی مزمن</b> (کلیه‌ها جبران کرده‌اند)', 'HCO₃ is at the chronic level → <b>chronic respiratory acidosis</b> (the kidneys have compensated)'));
      else out.steps.push(T('HCO₃ بین حالت حاد و مزمن است ← <b>حاد روی مزمن</b> یا در حال جبران', 'HCO₃ is between the acute and chronic values → <b>acute on chronic</b> or still compensating'));
      out.chronicity = hco3 <= a + 2 ? 'acute' : hco3 >= c - 2 ? 'chronic' : 'mid';
    } else if (prim === 'ralk') {
      const a = F.ralk(pco2, false), c = Math.max(12, F.ralk(pco2, true));
      out.comp = { acute: a, chronic: c };
      out.steps.push(T(`<b>جبران کلیوی:</b> HCO₃ مورد انتظار ← حاد: ${n(24)} − ${n(0.2)} × ${fa(40 - pco2)} = ${r1(a)} • مزمن: ${n(24)} − ${n(0.4)} × ${fa(40 - pco2)} = ${r1(c)}`, `<b>Renal compensation:</b> expected HCO₃ → acute: ${n(24)} − ${n(0.2)} × ${fa(40 - pco2)} = ${r1(a)} • chronic: ${n(24)} − ${n(0.4)} × ${fa(40 - pco2)} = ${r1(c)}`));
      out.chronicity = hco3 >= a - 3 ? 'acute' : hco3 <= c + 2 ? 'chronic' : 'mid';
      if (hco3 > a + 3) { out.disorders.push('malk'); out.steps.push(T(`HCO₃ بیمار (${fa(hco3)}) بیش از حد انتظار است ← <b>آلکالوز متابولیک همراه</b>`, `The patient’s HCO₃ (${fa(hco3)}) is above the expected value → <b>an accompanying metabolic alkalosis</b>`)); }
      else if (hco3 < c - 2) { out.disorders.push('macid'); out.steps.push(T(`HCO₃ بیمار (${fa(hco3)}) کمتر از حد انتظار است ← <b>اسیدوز متابولیک همراه</b>`, `The patient’s HCO₃ (${fa(hco3)}) is below the expected value → <b>an accompanying metabolic acidosis</b>`)); }
      else if (hco3 >= a - 3) out.steps.push(T('HCO₃ در حد حاد است ← <b>آلکالوز تنفسی حاد</b>', 'HCO₃ is at the acute level → <b>acute respiratory alkalosis</b>'));
      else if (hco3 <= c + 2) out.steps.push(T('HCO₃ در حد مزمن است ← <b>آلکالوز تنفسی مزمن</b>', 'HCO₃ is at the chronic level → <b>chronic respiratory alkalosis</b>'));
      else out.steps.push(T('HCO₃ بین حالت حاد و مزمن است ← در حال جبران', 'HCO₃ is between the acute and chronic values → still compensating'));
    }

    /* ۵. آنیون گپ و دلتا */
    if (typeof v.na === 'number' && typeof v.cl === 'number' && isFinite(v.na) && isFinite(v.cl)) {
      const ag = F.ag(v.na, v.cl, hco3);
      const hasAlb = typeof v.alb === 'number' && isFinite(v.alb) && v.alb > 0;
      const agc = hasAlb ? F.agCorr(ag, v.alb) : ag;
      out.ag = { ag, agc, high: agc > 16 };
      out.steps.push(T(`<b>آنیون گپ:</b> ${fa(v.na)} − (${fa(v.cl)} + ${fa(hco3)}) = ${r1(ag)}${hasAlb ? ` ← اصلاح با آلبومین: ${r1(ag)} + ${n(2.5)} × (${n(4)} − ${fa(v.alb)}) = ${r1(agc)}` : ''} (طبیعی حدود ۱۲ ± ۴)`, `<b>Anion gap:</b> ${fa(v.na)} − (${fa(v.cl)} + ${fa(hco3)}) = ${r1(ag)}${hasAlb ? ` → corrected for albumin: ${r1(ag)} + ${n(2.5)} × (${n(4)} − ${fa(v.alb)}) = ${r1(agc)}` : ''} (normal about 12 ± 4)`));
      if (typeof v.k === 'number' && isFinite(v.k) && v.k > 0) out.notes.push(T(`آنیون گپ با پتاسیم (روش کتاب) = ${r1(F.ag(v.na, v.cl, hco3, v.k))} (طبیعی ۱۰ تا ۲۰).`, `Anion gap with potassium (the book’s method) = ${r1(F.ag(v.na, v.cl, hco3, v.k))} (normal 10 to 20).`));
      if (!hasAlb) out.notes.push(T('اگر آلبومین پایین است آن را وارد کن؛ هر ۱ g/dL کاهش آلبومین آنیون گپ را حدود ۲٫۵ کم نشان می‌دهد.', 'If albumin is low, enter it; each 1 g/dL fall in albumin makes the anion gap read about 2.5 lower.'));
      const acidOn = out.disorders.includes('macid') || hco3 < 22;
      const GOLD = T('علل آنیون گپ بالا (GOLDMARK): گلیکول‌ها، ۵-اکسوپرولین، ال-لاکتات، دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتواسیدوز. در شک به الکل‌های سمی، شکاف اسمولار را حساب کن.', 'Causes of a high anion gap (GOLDMARK): glycols, 5-oxoproline, L-lactate, D-lactate, methanol, aspirin, renal failure, ketoacidosis. If a toxic alcohol is suspected, calculate the osmolar gap.');
      if (agc > 16 && acidOn) {
        if (!out.disorders.includes('macid')) out.disorders.push('macid');
        out.agType = 'hagma';
        if (24 - hco3 >= 4) {
          const d = F.delta(agc, hco3);
          out.ag.delta = d;
          out.steps.push(T(`<b>نسبت دلتا:</b> (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(d, 2)} ← ${d < 1 ? '<b>کمتر از ۱</b>: اسیدوز متابولیک با آنیون گپ طبیعی هم همراه است' : d > 2 ? '<b>بیشتر از ۲</b>: آلکالوز متابولیک (یا HCO₃ بالای ناشی از جبران اسیدوز تنفسی مزمن) هم همراه است' : 'بین ۱ و ۲: اسیدوز متابولیک خالص با آنیون گپ بالا'}`, `<b>Delta ratio:</b> (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(d, 2)} → ${d < 1 ? '<b>below 1</b>: a normal anion gap metabolic acidosis is also present' : d > 2 ? '<b>above 2</b>: a metabolic alkalosis (or a high HCO₃ from compensation for chronic respiratory acidosis) is also present' : 'between 1 and 2: a pure high anion gap metabolic acidosis'}`));
          if (d < 1) out.agType = 'both';
          if (d > 2 && !out.disorders.includes('malk')) out.disorders.push('malk');
        } else out.notes.push(T('HCO₃ کمتر از ۴ واحد افت کرده؛ نسبت دلتا در این حالت قابل اعتماد نیست.', 'HCO₃ has fallen by less than 4; the delta ratio is unreliable here.'));
        out.notes.push(GOLD);
      } else if (agc > 20) {
        out.disorders.push('macid'); out.agType = 'hagma';
        if (!out.disorders.includes('malk')) out.disorders.push('malk');
        out.steps.push(T('آنیون گپ بیش از ۲۰ است ولی HCO₃ پایین نیست ← <b>اسیدوز متابولیک پنهان</b>؛ یک آلکالوز متابولیک هم‌زمان (مثلاً استفراغ) کاهش HCO₃ را پوشانده است.', 'The anion gap is above 20 but HCO₃ is not low → <b>a hidden metabolic acidosis</b>; a simultaneous metabolic alkalosis (for example vomiting) has masked the fall in HCO₃.'));
        out.notes.push(GOLD);
      } else if (agc > 16) {
        out.notes.push(T('آنیون گپ کمی بالاست ولی HCO₃ پایین نیست؛ لاکتات، کتون، کراتینین و آلبومین را بررسی کن.', 'The anion gap is slightly high but HCO₃ is not low; check lactate, ketones, creatinine and albumin.'));
      } else if (out.disorders.includes('macid')) {
        out.agType = 'nagma';
        out.steps.push(T('آنیون گپ طبیعی است ← <b>اسیدوز متابولیک هیپرکلرمیک</b> (اسهال، RTA، سالین فراوان، استازولامید). آنیون گپ ادرار کمک می‌کند: منفی ← اسهال، مثبت ← RTA.', 'The anion gap is normal → <b>hyperchloremic metabolic acidosis</b> (diarrhea, RTA, large volumes of saline, acetazolamide). The urine anion gap helps: negative → diarrhea, positive → RTA.'));
      }
    } else if (out.disorders.includes('macid')) {
      out.notes.push(T('برای علت‌یابی اسیدوز متابولیک، سدیم و کلر را وارد کن تا آنیون گپ حساب شود.', 'To find the cause of a metabolic acidosis, enter sodium and chloride so the anion gap can be calculated.'));
    }

    /* ۶. تبادل گاز */
    if (!venous && typeof v.po2 === 'number' && isFinite(v.po2) && v.po2 > 0) {
      const fio2 = v.fio2 || 0.21, room = Math.abs(fio2 - 0.21) < 0.005;
      const pa = F.pAO2(fio2, pco2, v.patm), aa = pa - v.po2, pf = v.po2 / fio2;
      const low = room ? v.po2 < 80 : v.po2 < F.expPao2(fio2 * 100) * 0.8 || pf < 300;
      let type;
      if (low) type = pco2 > 45 ? (hco3 > 26 ? 't2c' : 't2a') : 't1';
      else type = pco2 > 45 ? (hco3 > 26 ? 't2c' : 't2a') : pco2 < 35 ? (out.disorders.includes('macid') ? 'hv2' : 'hv1') : 'ok';
      const TT = { t1: T('نارسایی (اختلال) تنفسی نوع ۱', 'type 1 respiratory failure (impairment)'), t2a: T('نارسایی تنفسی نوع ۲ حاد', 'acute type 2 respiratory failure'), t2c: T('نارسایی تنفسی نوع ۲ مزمن', 'chronic type 2 respiratory failure'), hv1: T('هیپرونتیلاسیون اولیه', 'primary hyperventilation'), hv2: T('هیپرونتیلاسیون ثانویه (جبران اسیدوز متابولیک)', 'secondary hyperventilation (compensating a metabolic acidosis)'), ok: T('تبادل گاز طبیعی', 'normal gas exchange') };
      if (type === 't2c' && pH < 7.35) TT.t2c = T('نارسایی تنفسی نوع ۲ حاد روی مزمن', 'acute on chronic type 2 respiratory failure');
      out.gas = { type, label: TT[type], pa, aa, pf, room, low };
      out.steps.push(T(`<b>تبادل گاز:</b> PaO₂ = ${fa(v.po2, 0)} ${room ? 'در هوای اتاق' : `با FiO₂ ${fa(fio2 * 100, 0)}٪`} ← ${low ? 'پایین' : 'کافی'} • PaCO₂ ${pTxt} ← <b>${TT[type]}</b>`, `<b>Gas exchange:</b> PaO₂ = ${fa(v.po2, 0)} ${room ? 'on room air' : `on FiO₂ ${fa(fio2 * 100, 0)}%`} → ${low ? 'low' : 'adequate'} • PaCO₂ ${pTxt} → <b>${TT[type]}</b>`));
      if (room) {
        const s = F.hypoxSev(v.po2);
        if (s) { out.gas.sev = s; out.steps.push(T(`شدت هیپوکسمی: <b>${s.label}</b> (معادل SaO₂ حدود ${s.sat})`, `Severity of hypoxemia: <b>${s.label}</b> (SaO₂ about ${s.sat})`)); }
        const e = v.age ? F.aaExp(v.age) : 20;
        out.steps.push(T(`<b>گرادیان A–a:</b> PAO₂ = ${n(0.21)} × (${fa(v.patm || 760)} − ${n(47)}) − ${fa(pco2)} ÷ ${n(0.8)} = ${fa(pa, 0)} ← A–a = ${fa(pa, 0)} − ${fa(v.po2, 0)} = <b>${fa(aa, 0)}</b> mmHg (حد طبیعی ${v.age ? `برای ${fa(v.age)} سال ≈ ${fa(e, 0)}` : 'کمتر از ۲۰'})`, `<b>A–a gradient:</b> PAO₂ = ${n(0.21)} × (${fa(v.patm || 760)} − ${n(47)}) − ${fa(pco2)} ÷ ${n(0.8)} = ${fa(pa, 0)} → A–a = ${fa(pa, 0)} − ${fa(v.po2, 0)} = <b>${fa(aa, 0)}</b> mmHg (normal ${v.age ? `for age ${fa(v.age)} ≈ ${fa(e, 0)}` : 'below 20'})`));
        if (aa > e + 2) out.notes.push(T('گرادیان A–a بالاست ← مشکل در خود ریه (عدم تناسب V/Q، شانت یا اختلال انتشار)؛ مثلاً پنومونی یا آمبولی.', 'The A–a gradient is high → a problem in the lung itself (V/Q mismatch, shunt or diffusion impairment); for example pneumonia or embolism.'));
        else if (low) out.notes.push(T('هیپوکسمی با گرادیان A–a طبیعی ← هیپوونتیلاسیون یا اکسیژن کم هوای دمی (ارتفاع)؛ ریه خودش سالم است.', 'Hypoxemia with a normal A–a gradient → hypoventilation or low inspired oxygen (altitude); the lung itself is healthy.'));
        if (v.po2 + pco2 > 150) out.warn.push(T('در هوای اتاق مجموع PaO₂ و PaCO₂ از ۱۴۰ تا ۱۵۰ بیشتر نمی‌شود؛ حباب هوا در نمونه یا دریافت اکسیژن را بررسی کن.', 'On room air, PaO₂ plus PaCO₂ does not exceed 140 to 150; check for an air bubble in the sample or oxygen delivery.'));
      } else {
        const ps = F.pfSev(pf);
        out.gas.sev = ps;
        out.steps.push(T(`<b>PaO₂/FiO₂:</b> ${fa(v.po2, 0)} ÷ ${fa(fio2, 2)} = <b>${fa(pf, 0)}</b> ${ps ? `← اختلال اکسیژناسیون ${ps.label}` : '← طبیعی (بیش از ۳۰۰)'} • PaO₂ مورد انتظار با این FiO₂ حدود ${fa(F.expPao2(fio2 * 100), 0)}`, `<b>PaO₂/FiO₂:</b> ${fa(v.po2, 0)} ÷ ${fa(fio2, 2)} = <b>${fa(pf, 0)}</b> ${ps ? `→ ${ps.label} impairment of oxygenation` : '→ normal (above 300)'} • expected PaO₂ on this FiO₂ about ${fa(F.expPao2(fio2 * 100), 0)}`));
      }
      if (v.po2 > pa + 5) out.warn.push(T('PaO₂ از فشار اکسیژن حبابچه‌ای بیشتر است که ممکن نیست؛ FiO₂ یا نمونه را بررسی کن.', 'PaO₂ is higher than the alveolar oxygen pressure, which is impossible; check the FiO₂ or the sample.'));
      if (type === 't2a' || type === 't2c') out.notes.push(T('در نارسایی نوع ۲، پالس اکسیمتری جانشین ABG نیست؛ PaCO₂ را پایش کن و اکسیژن را کنترل‌شده بده (هدف SpO₂ ۸۸ تا ۹۲٪ در بیمار مستعد هیپرکاپنی).', 'In type 2 failure, pulse oximetry does not replace an ABG; monitor PaCO₂ and give controlled oxygen (target SpO₂ 88 to 92% in patients at risk of hypercapnia).'));
    }

    /* ۷. جمع‌بندی */
    const uniq = out.disorders.filter((d, i) => out.disorders.indexOf(d) === i);
    out.disorders = uniq;
    /* وضعیت جبران به زبان فلوچارت کتاب: جبران‌نشده، نسبی یا کامل */
    if (prim) {
      const other = { macid: pco2 < 35, malk: pco2 > 45, racid: hco3 > 26, ralk: hco3 < 22 }[prim];
      out.compState = !other ? 'u' : out.status === 'normal' ? 'c' : 'p';
      out.compText = { u: T('جبران‌نشده', 'uncompensated'), p: T('با جبران نسبی', 'partially compensated'), c: T('جبران‌شده', 'compensated') }[out.compState];
    }
    const AGS = { hagma: T(' با آنیون گپ بالا', ' with a high anion gap'), nagma: T(' با آنیون گپ طبیعی (هیپرکلرمیک)', ' with a normal anion gap (hyperchloremic)'), both: T(' با گپ بالا و گپ طبیعی', ' with high and normal gap components') };
    const names = uniq.map(d => {
      let t = DN[d];
      if (d === prim && out.compText) t = EA.lang === 'en' ? out.compText + ' ' + t : t + ' ' + out.compText;
      if (d === 'macid' && out.agType) t += AGS[out.agType];
      return t;
    });
    out.summary = names.length ? names.join(' + ') : T('وضعیت اسید و باز طبیعی', 'normal acid–base status');
    if (EA.lang === 'en' && out.summary) out.summary = out.summary.charAt(0).toUpperCase() + out.summary.slice(1);
    if (uniq.length > 1) out.mixed = true;
    return out;
  }

  /* ---------- مولد مسئله‌ها ---------- */
  const R = {
    int(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    step(a, b, s) { const k = Math.round((b - a) / s); return round(a + R.int(0, k) * s, 4); },
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  };
  /** یک گاز خون سازگار بساز: از PCO2 و HCO3، pH را با هندرسون حساب کن */
  function gas(pco2, hco3, extra) {
    const pH = round(F.phHH(pco2, hco3), 2);
    return Object.assign({ pH, pco2: round(pco2, 1), hco3: round(hco3, 1) }, extra || {});
  }

  const G = {};

  /* ===== O2 ===== */
  G['o.aa'] = () => {
    const age = R.int(22, 80), pco2 = R.int(26, 44), po2 = R.int(52, 92);
    const pa = F.pAO2(0.21, pco2), aa = pa - po2;
    return {
      kind: 'num', q: T('گرادیان A–a این بیمار در هوای اتاق چند mmHg است؟', 'What is this patient’s A–a gradient on room air, in mmHg?'),
      case: [[T('بیمار', 'Patient'), T(`${fa(age)} ساله، هوای اتاق، سطح دریا`, `${fa(age)} years old, room air, sea level`)]], lab: { pco2, po2 },
      ans: round(aa, 0), tol: 3, unit: 'mmHg',
      hint: T('PAO₂ = ۰٫۲۱ × ۷۱۳ − PaCO₂ ÷ ۰٫۸ ؛ A–a = PAO₂ − PaO₂', 'PAO₂ = 0.21 × 713 − PaCO₂ ÷ 0.8 ; A–a = PAO₂ − PaO₂'),
      why: T(`PAO₂ = ${n(0.21)} × ${n(713)} − ${fa(pco2)} ÷ ${n(0.8)} = ${n(149.7)} − ${fa(pco2 / 0.8)} = ${fa(pa, 0)}<br>A–a = ${fa(pa, 0)} − ${fa(po2)} = <b>${fa(aa, 0)}</b><br>حد طبیعی برای ${fa(age)} سال ≈ سن ÷ ۴ + ۴ = ${fa(F.aaExp(age), 0)} ← ${aa > F.aaExp(age) + 2 ? 'بالا؛ مشکل در خود ریه (V/Q، شانت یا انتشار).' : 'طبیعی؛ اگر هیپوکسمی هست، به هیپوونتیلاسیون فکر کن.'}`, `PAO₂ = ${n(0.21)} × ${n(713)} − ${fa(pco2)} ÷ ${n(0.8)} = ${n(149.7)} − ${fa(pco2 / 0.8)} = ${fa(pa, 0)}<br>A–a = ${fa(pa, 0)} − ${fa(po2)} = <b>${fa(aa, 0)}</b><br>Normal limit for age ${fa(age)} ≈ age ÷ 4 + 4 = ${fa(F.aaExp(age), 0)} → ${aa > F.aaExp(age) + 2 ? 'high; a problem in the lung itself (V/Q, shunt or diffusion).' : 'normal; if there is hypoxemia, think of hypoventilation.'}`)
    };
  };
  G['o.pao2'] = () => {
    const fio2 = R.pick([21, 28, 35, 40, 50, 60]), pco2 = R.int(30, 60);
    const pa = F.pAO2(fio2 / 100, pco2);
    return {
      kind: 'num', q: T('فشار اکسیژن حبابچه‌ای (PAO₂) چند mmHg است؟', 'What is the alveolar oxygen pressure (PAO₂) in mmHg?'),
      case: [['FiO₂', T(fa(fio2) + '٪', fa(fio2) + '%')], ['PaCO₂', fa(pco2) + ' mmHg'], [T('محل', 'Location'), T('سطح دریا', 'Sea level')]],
      ans: round(pa, 0), tol: 4, unit: 'mmHg', hint: T('PAO₂ = FiO₂ × (۷۶۰ − ۴۷) − PaCO₂ ÷ ۰٫۸', 'PAO₂ = FiO₂ × (760 − 47) − PaCO₂ ÷ 0.8'),
      why: `${fa(fio2 / 100, 2)} × ${n(713)} − ${fa(pco2)} ÷ ${n(0.8)} = ${fa(fio2 / 100 * 713, 0)} − ${fa(pco2 / 0.8, 0)} = <b>${fa(pa, 0)}</b>`
    };
  };
  G['o.pf'] = () => {
    const fio2 = R.pick([30, 40, 50, 60, 70, 80, 100]), po2 = R.int(55, 160);
    const pf = po2 / (fio2 / 100), s = F.pfSev(pf);
    return {
      kind: 'num', q: T('نسبت PaO₂/FiO₂ (P/F) این بیمار چند است؟', 'What is this patient’s PaO₂/FiO₂ (P/F) ratio?'),
      case: [[T('بیمار', 'Patient'), T('تحت تهویه مکانیکی، PEEP = ۸', 'On mechanical ventilation, PEEP = 8')], ['FiO₂', T(fa(fio2) + '٪', fa(fio2) + '%')], ['PaO₂', fa(po2) + ' mmHg']],
      ans: round(pf, 0), tol: 3, unit: '', hint: T('PaO₂ ÷ FiO₂ (به صورت کسر، مثلاً ۰٫۴)', 'PaO₂ ÷ FiO₂ (as a fraction, for example 0.4)'),
      why: `${fa(po2)} ÷ ${fa(fio2 / 100, 2)} = <b>${fa(pf, 0)}</b><br>${s ? T(`اگر معیارهای دیگر ARDS (حاد، ارتشاح دوطرفه، رد علت قلبی) هم باشد: <b>ARDS ${s.label}</b>`, `If the other ARDS criteria (acute, bilateral infiltrates, cardiac cause excluded) are met: <b>${s.label} ARDS</b>`) : T('بیش از ۳۰۰: اکسیژناسیون قابل قبول.', 'Above 300: acceptable oxygenation.')}`
    };
  };
  G['o.cao2'] = () => {
    const hb = R.pick([6, 7, 8, 10, 12, 14, 15, 16]), sat = R.pick([80, 85, 88, 90, 94, 97, 99]), po2 = sat >= 97 ? R.int(90, 110) : sat >= 90 ? R.int(60, 75) : R.int(45, 58);
    const c = F.cao2(hb, sat, po2);
    return {
      kind: 'num', q: T('محتوای اکسیژن خون شریانی (CaO₂) چند میلی‌لیتر در دسی‌لیتر است؟', 'What is the arterial oxygen content (CaO₂) in mL/dL?'),
      case: [['Hb', fa(hb) + ' g/dL'], ['SaO₂', T(fa(sat) + '٪', fa(sat) + '%')], ['PaO₂', fa(po2) + ' mmHg']],
      ans: round(c, 1), tol: 0.4, unit: 'mL/dL', hint: T('CaO₂ = ۱٫۳۴ × Hb × SaO₂ + ۰٫۰۰۳ × PaO₂', 'CaO₂ = 1.34 × Hb × SaO₂ + 0.003 × PaO₂'),
      why: T(`${n(1.34)} × ${fa(hb)} × ${fa(sat / 100, 2)} + ${n(0.003)} × ${fa(po2)} = ${fa(1.34 * hb * sat / 100, 2)} + ${fa(0.003 * po2, 2)} = <b>${fa(c, 1)}</b> mL/dL (طبیعی حدود ۱۸ تا ۲۰)<br><small>اکسیژن محلول (بخش دوم) ناچیز است؛ محتوای اکسیژن را Hb و اشباع می‌سازند.</small>`, `${n(1.34)} × ${fa(hb)} × ${fa(sat / 100, 2)} + ${n(0.003)} × ${fa(po2)} = ${fa(1.34 * hb * sat / 100, 2)} + ${fa(0.003 * po2, 2)} = <b>${fa(c, 1)}</b> mL/dL (normal about 18 to 20)<br><small>Dissolved oxygen (the second part) is negligible; Hb and saturation make up the oxygen content.</small>`)
    };
  };
  G['o.sev'] = () => {
    const po2 = R.pick([35, 38, 42, 48, 52, 57, 62, 66, 71, 76, 85, 92]);
    const s = F.hypoxSev(po2);
    const all = [T('هیپوکسمی خفیف', 'Mild hypoxemia'), T('هیپوکسمی متوسط', 'Moderate hypoxemia'), T('هیپوکسمی شدید', 'Severe hypoxemia'), T('اکسیژناسیون طبیعی', 'Normal oxygenation')];
    const right = s ? T('هیپوکسمی ' + s.label, s.label.charAt(0).toUpperCase() + s.label.slice(1) + ' hypoxemia') : T('اکسیژناسیون طبیعی', 'Normal oxygenation');
    return {
      kind: 'mcq', q: T('شدت هیپوکسمی این بیمار چیست؟', 'How severe is this patient’s hypoxemia?'), lab: { po2 }, case: [['FiO₂', T('هوای اتاق', 'Room air')]],
      opts: [right].concat(all.filter(x => x !== right)), a: 0,
      why: T(`PaO₂ ${fa(po2)}: خفیف ۶۰ تا ۷۹، متوسط ۴۰ تا ۵۹، شدید کمتر از ۴۰ ← <b>${right}</b>`, `PaO₂ ${fa(po2)}: mild 60 to 79, moderate 40 to 59, severe below 40 → <b>${right}</b>`)
    };
  };
  G['o.nc'] = () => {
    const L = R.int(1, 6), f = F.ncFio2(L);
    return {
      kind: 'num', q: T(`کانول بینی با ${fa(L)} لیتر در دقیقه تقریباً چه FiO₂ای می‌دهد؟`, `Roughly what FiO₂ does a nasal cannula at ${fa(L)} litres per minute give?`), case: [[T('وسیله', 'Device'), T('کانول بینی', 'Nasal cannula')], [T('جریان', 'Flow'), T(fa(L) + ' لیتر در دقیقه', fa(L) + ' L/min')]],
      ans: f, tol: 2, unit: T('٪', '%'), hint: T('۲۱ + ۴ × لیتر', '21 + 4 × litres'),
      why: T(`${n(21)} + ${n(4)} × ${fa(L)} = <b>${fa(f)}٪</b><br><small>تخمینی است و به الگوی تنفس بیمار بستگی دارد؛ بیش از ۶ لیتر فقط خشکی مخاط اضافه می‌کند.</small>`, `${n(21)} + ${n(4)} × ${fa(L)} = <b>${fa(f)}%</b><br><small>An estimate that depends on the patient’s breathing pattern; above 6 litres it only adds mucosal dryness.</small>`)
    };
  };
  G['o.type'] = () => {
    const kind = R.pick(['t1', 't1', 't2a', 't2c', 'hv1', 'hv2']);
    let g;
    if (kind === 't1') g = gas(R.int(28, 40), R.int(22, 26), { po2: R.int(45, 72) });
    else if (kind === 't2a') g = gas(R.int(55, 75), R.int(23, 26), { po2: R.int(48, 70) });
    else if (kind === 't2c') { const p = R.int(55, 70); g = gas(p, round(F.racid(p, true), 0), { po2: R.int(45, 65) }); }
    else if (kind === 'hv1') g = gas(R.int(22, 30), R.int(22, 25), { po2: R.int(90, 110) });
    else { const h = R.int(8, 15); g = gas(round(F.winter(h), 0), h, { po2: R.int(90, 108) }); }
    const TT = T({ t1: 'نارسایی تنفسی نوع ۱', t2a: 'نارسایی تنفسی نوع ۲ حاد', t2c: 'نارسایی تنفسی نوع ۲ مزمن', hv1: 'هیپرونتیلاسیون اولیه', hv2: 'هیپرونتیلاسیون ثانویه به اسیدوز متابولیک' }, { t1: 'Type 1 respiratory failure', t2a: 'Acute type 2 respiratory failure', t2c: 'Chronic type 2 respiratory failure', hv1: 'Primary hyperventilation', hv2: 'Hyperventilation secondary to metabolic acidosis' });
    const why = {
      t1: T('PaO₂ پایین با PaCO₂ طبیعی یا پایین ← نوع ۱ (معمولاً عدم تناسب V/Q).', 'Low PaO₂ with a normal or low PaCO₂ → type 1 (usually V/Q mismatch).'),
      t2a: T('PaCO₂ بالا با HCO₃ طبیعی ← نوع ۲ حاد؛ کلیه هنوز فرصت جبران نداشته.', 'High PaCO₂ with a normal HCO₃ → acute type 2; the kidneys have not had time to compensate.'),
      t2c: T('PaCO₂ بالا با HCO₃ بالا ← نوع ۲ مزمن؛ جبران کلیوی روزها طول می‌کشد، پس مشکل قدیمی است.', 'High PaCO₂ with a high HCO₃ → chronic type 2; renal compensation takes days, so the problem is long-standing.'),
      hv1: T('PaO₂ طبیعی، PaCO₂ پایین و HCO₃ طبیعی ← هیپرونتیلاسیون اولیه (اضطراب، درد، تب…).', 'Normal PaO₂, low PaCO₂ and normal HCO₃ → primary hyperventilation (anxiety, pain, fever…).'),
      hv2: T('PaCO₂ پایین همراه HCO₃ پایین ← ریه در حال جبران اسیدوز متابولیک است.', 'Low PaCO₂ with a low HCO₃ → the lungs are compensating for a metabolic acidosis.')
    };
    const right = TT[kind];
    return { kind: 'mcq', q: T('وضعیت تبادل گاز در این ABG (هوای اتاق) چیست؟', 'What is the gas exchange status on this ABG (room air)?'), lab: g, opts: [right].concat(Object.values(TT).filter(x => x !== right).slice(0, 3)), a: 0, why: why[kind] };
  };

  /* ===== pH ===== */
  G['p.h80'] = () => {
    const pH = R.step(7.2, 7.5, 0.01);
    const h = F.h80(pH);
    return {
      kind: 'num', q: T('غلظت یون هیدروژن [H⁺] تقریباً چند nEq/L است؟', 'Roughly what is the hydrogen ion concentration [H⁺] in nEq/L?'), lab: { pH },
      ans: h, tol: 2, unit: 'nEq/L', hint: T('۸۰ منهای دو رقم اعشار pH', '80 minus the two decimal digits of pH'),
      why: T(`دو رقم اعشار pH ${fa(pH, 2)} = ${fa(Math.round((pH - 7) * 100))} ← ${n(80)} − ${fa(Math.round((pH - 7) * 100))} = <b>${fa(h)}</b><br><small>مقدار دقیق: ۱۰<sup>(۹ − pH)</sup> = ${fa(F.hFromPh(pH))}</small>`, `The two decimal digits of pH ${fa(pH, 2)} = ${fa(Math.round((pH - 7) * 100))} → ${n(80)} − ${fa(Math.round((pH - 7) * 100))} = <b>${fa(h)}</b><br><small>Exact value: 10<sup>(9 − pH)</sup> = ${fa(F.hFromPh(pH))}</small>`)
    };
  };
  G['p.hkb'] = () => {
    const pco2 = R.int(20, 80), hco3 = R.int(8, 40);
    const h = F.hKB(pco2, hco3);
    return {
      kind: 'num', q: T('[H⁺] را با معادله هندرسون (کسیرر–بلیچ) حساب کن:', 'Calculate [H⁺] with the Henderson (Kassirer–Bleich) equation:'), lab: { pco2, hco3 },
      ans: round(h, 0), tol: 1.5, unit: 'nEq/L', hint: T('[H⁺] = ۲۴ × PCO₂ ÷ HCO₃', '[H⁺] = 24 × PCO₂ ÷ HCO₃'),
      why: T(`${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = <b>${fa(h, 0)}</b> nEq/L ← pH حدود ${fa(F.phFromH(h), 2)}`, `${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = <b>${fa(h, 0)}</b> nEq/L → pH about ${fa(F.phFromH(h), 2)}`)
    };
  };
  G['p.hh'] = () => {
    const pco2 = R.int(20, 80), hco3 = R.int(8, 40);
    const pH = F.phHH(pco2, hco3);
    return {
      kind: 'num', q: T('pH این نمونه با معادله هندرسون–هاسلباخ چند است؟', 'What is the pH of this sample by the Henderson–Hasselbalch equation?'), lab: { pco2, hco3 },
      ans: round(pH, 2), tol: 0.02, unit: '', hint: T('pH = ۶٫۱ + log (HCO₃ ÷ (۰٫۰۳ × PCO₂))', 'pH = 6.1 + log (HCO₃ ÷ (0.03 × PCO₂))'),
      why: `${n(6.1)} + log(${fa(hco3)} ÷ (${n(0.03)} × ${fa(pco2)})) = ${n(6.1)} + log(${fa(hco3 / (0.03 * pco2), 2)}) = <b>${fa(pH, 2)}</b>`
    };
  };
  G['p.fold'] = () => {
    const a = R.pick([6.8, 7.0, 7.1, 7.2]), d = R.pick([1, 2]);
    const b = round(a + d * 0.3, 1);
    const k = Math.pow(10, b - a);
    return {
      kind: 'num', q: T(`غلظت H⁺ در pH ${fa(a, 1)} تقریباً چند برابر pH ${fa(b, 1)} است؟`, `Roughly how many times higher is the H⁺ concentration at pH ${fa(a, 1)} than at pH ${fa(b, 1)}?`),
      ans: round(k, 0), tol: Math.max(0.3, k * 0.08), unit: T('برابر', 'times'), hint: T('هر ۰٫۳ واحد کاهش pH ≈ دو برابر شدن H⁺ (و هر ۱ واحد = ۱۰ برابر)', 'Each 0.3 fall in pH ≈ double the H⁺ (and each 1 unit = 10 times)'),
      why: T(`۱۰<sup>(${fa(b, 1)} − ${fa(a, 1)})</sup> = ۱۰<sup>${fa(b - a, 1)}</sup> ≈ <b>${fa(k, 0)}</b> برابر<br><small>مقیاس pH لگاریتمی است؛ تغییرات کوچک pH یعنی تغییرات بزرگ اسیدیته.</small>`, `10<sup>(${fa(b, 1)} − ${fa(a, 1)})</sup> = 10<sup>${fa(b - a, 1)}</sup> ≈ <b>${fa(k, 0)}</b> times<br><small>The pH scale is logarithmic; small pH changes mean large changes in acidity.</small>`)
    };
  };
  G['p.primary'] = () => {
    const t = R.pick(['macid-u', 'macid-p', 'macid-c', 'malk-u', 'malk-p', 'racid-u', 'racid-p', 'racid-c', 'ralk-u', 'ralk-p', 'ralk-c']);
    const [d, c] = t.split('-');
    /* جبران کامل: از pH هدف (در محدوده طبیعی) و HCO3، PCO2 را با هندرسون بساز */
    const full = (pH, h) => gas(round(h / (0.03 * Math.pow(10, pH - 6.1)), 0), h);
    let g;
    if (d === 'macid') { const h = R.int(10, 18); g = c === 'u' ? gas(R.int(38, 42), h) : c === 'p' ? gas(round(F.winter(h), 0), h) : full(R.pick([7.36, 7.37]), R.int(17, 19)); }
    else if (d === 'malk') { const h = R.int(32, 40); g = c === 'u' ? gas(R.int(38, 42), h) : gas(round(F.malk(h), 0), h); }
    else if (d === 'racid') { const p = R.int(55, 72); g = c === 'u' ? gas(p, R.int(23, 26)) : c === 'p' ? gas(p, round(F.racid(p, true) - 3, 0)) : full(R.pick([7.36, 7.37]), R.int(31, 34)); }
    else { const p = R.int(22, 30); g = c === 'u' ? gas(p, R.int(23, 25)) : c === 'p' ? gas(p, round(F.ralk(p, false) - 1.5, 0)) : full(R.pick([7.43, 7.44]), R.int(17, 20)); }
    const cn = { u: T('جبران‌نشده', 'uncompensated'), p: T('با جبران نسبی', 'partially compensated'), c: T('جبران‌شده', 'compensated') };
    /** «اسیدوز متابولیک جبران‌نشده» / «Uncompensated metabolic acidosis» */
    const nm = (dd, cc) => { if (EA.lang !== 'en') return `${DN[dd]} ${cn[cc]}`; const t = `${cn[cc]} ${DN[dd]}`; return t.charAt(0).toUpperCase() + t.slice(1); };
    const right = nm(d, c);
    const others = [];
    ['u', 'p', 'c'].forEach(x => { if (x !== c) others.push(nm(d, x)); });
    const opp = { macid: 'ralk', ralk: 'macid', racid: 'malk', malk: 'racid' }[d];
    others.push(nm(opp, c));
    const hint = T({ macid: 'HCO₃ پایین هم‌جهت با pH', malk: 'HCO₃ بالا هم‌جهت با pH', racid: 'PCO₂ بالا هم‌جهت با pH', ralk: 'PCO₂ پایین هم‌جهت با pH' }, { macid: 'A low HCO₃ moves with the pH', malk: 'A high HCO₃ moves with the pH', racid: 'A high PCO₂ moves with the pH', ralk: 'A low PCO₂ moves with the pH' })[d];
    const cw = c === 'u' ? T('جزء دیگر طبیعی است ← جبران‌نشده', 'The other component is normal → uncompensated') : c === 'p' ? T('جزء دیگر در جهت مخالف تغییر کرده ولی pH هنوز غیرطبیعی است ← جبران نسبی', 'The other component has moved the opposite way but the pH is still abnormal → partial compensation') : T('pH به محدوده طبیعی برگشته ← جبران‌شده (و سمتی از ۷٫۴۰ که pH در آن است، اختلال اولیه را نشان می‌دهد)', 'The pH is back in the normal range → compensated (and the side of 7.40 the pH is on shows the primary disorder)');
    return { kind: 'mcq', q: T('این ABG کدام اختلال اسید و باز را نشان می‌دهد؟', 'Which acid–base disorder does this ABG show?'), lab: g, opts: [right].concat(others.slice(0, 3)), a: 0, why: `${hint} ${T('←', '→')} ${DN[d]}.<br>${cw}.` };
  };

  /* ===== AG ===== */
  G['a.ag'] = () => {
    const na = R.int(128, 146), hco3 = R.int(6, 24), ag = R.int(8, 32), cl = na - hco3 - ag;
    return {
      kind: 'num', q: T('آنیون گپ این بیمار چند است؟', 'What is this patient’s anion gap?'), lab: { na, cl, hco3 },
      ans: ag, tol: 0.5, unit: 'mEq/L', hint: 'AG = Na − (Cl + HCO₃)',
      why: T(`${fa(na)} − (${fa(cl)} + ${fa(hco3)}) = <b>${fa(ag)}</b> ← ${ag > 12 ? 'بالا؛ آنیون‌های اندازه‌گیری‌نشده (لاکتات، کتون، سم…) زیاد شده‌اند.' : 'طبیعی (۸ تا ۱۲)؛ اگر اسیدوز متابولیک هست، هیپرکلرمیک است.'}`, `${fa(na)} − (${fa(cl)} + ${fa(hco3)}) = <b>${fa(ag)}</b> → ${ag > 12 ? 'high; unmeasured anions (lactate, ketones, a toxin…) have increased.' : 'normal (8 to 12); if there is a metabolic acidosis, it is hyperchloremic.'}`)
    };
  };
  G['a.agk'] = () => {
    const na = R.int(130, 145), k = R.step(3.0, 6.0, 0.1), hco3 = R.int(6, 26), cl = R.int(92, 112);
    const ag = F.ag(na, cl, hco3, k);
    return {
      kind: 'num', q: T('آنیون گپ را به روش کتاب (با پتاسیم) حساب کن:', 'Calculate the anion gap by the book’s method (with potassium):'), lab: { na, k, cl, hco3 },
      ans: round(ag, 1), tol: 0.3, unit: 'mEq/L', hint: 'AG = (Na + K) − (Cl + HCO₃)',
      why: T(`(${fa(na)} + ${fa(k)}) − (${fa(cl)} + ${fa(hco3)}) = ${fa(na + k)} − ${fa(cl + hco3)} = <b>${fa(ag)}</b> ← طبیعی با پتاسیم ۱۰ تا ۲۰ ${ag > 20 ? '(بالا)' : ''}`, `(${fa(na)} + ${fa(k)}) − (${fa(cl)} + ${fa(hco3)}) = ${fa(na + k)} − ${fa(cl + hco3)} = <b>${fa(ag)}</b> → normal with potassium 10 to 20 ${ag > 20 ? '(high)' : ''}`)
    };
  };
  G['a.agc'] = () => {
    const ag = R.int(8, 16), alb = R.step(1.5, 3.5, 0.1);
    const c = F.agCorr(ag, alb);
    return {
      kind: 'num', q: T('آنیون گپ اصلاح‌شده با آلبومین چند است؟', 'What is the albumin-corrected anion gap?'), case: [[T('آنیون گپ محاسبه‌شده', 'Calculated anion gap'), fa(ag) + ' mEq/L'], [T('آلبومین', 'Albumin'), fa(alb) + ' g/dL']],
      ans: round(c, 1), tol: 0.3, unit: 'mEq/L', hint: T('AG + ۲٫۵ × (۴ − آلبومین)', 'AG + 2.5 × (4 − albumin)'),
      why: T(`${fa(ag)} + ${n(2.5)} × (${n(4)} − ${fa(alb)}) = ${fa(ag)} + ${fa(2.5 * (4 - alb), 2)} = <b>${fa(c)}</b><br>${c > 12 && ag <= 12 ? 'آنیون گپ ظاهراً طبیعی بود ولی پس از اصلاح بالاست؛ اسیدوز با گپ بالا پنهان شده بود!' : c > 12 ? 'بالا.' : 'طبیعی.'}`, `${fa(ag)} + ${n(2.5)} × (${n(4)} − ${fa(alb)}) = ${fa(ag)} + ${fa(2.5 * (4 - alb), 2)} = <b>${fa(c)}</b><br>${c > 12 && ag <= 12 ? 'The anion gap looked normal but is high after correction; a high gap acidosis was hidden!' : c > 12 ? 'High.' : 'Normal.'}`)
    };
  };
  G['a.winter'] = () => {
    const hco3 = R.int(5, 20), e = F.winter(hco3);
    return {
      kind: 'num', q: T('در این اسیدوز متابولیک، PCO₂ مورد انتظار (فرمول وینتر) چند است؟', 'In this metabolic acidosis, what is the expected PCO₂ (Winters’ formula)?'), lab: { hco3 },
      ans: round(e, 1), tol: 0.6, unit: 'mmHg', hint: T('۱٫۵ × HCO₃ + ۸ (± ۲)', '1.5 × HCO₃ + 8 (± 2)'),
      why: T(`${n(1.5)} × ${fa(hco3)} + ${n(8)} = <b>${fa(e)}</b> ← محدوده ${fa(e - 2)} تا ${fa(e + 2)}<br><small>PCO₂ بالاتر ← اسیدوز تنفسی همراه؛ پایین‌تر ← آلکالوز تنفسی همراه.</small>`, `${n(1.5)} × ${fa(hco3)} + ${n(8)} = <b>${fa(e)}</b> → range ${fa(e - 2)} to ${fa(e + 2)}<br><small>A higher PCO₂ → an accompanying respiratory acidosis; lower → an accompanying respiratory alkalosis.</small>`)
    };
  };
  G['a.winterMcq'] = () => {
    const hco3 = R.int(6, 18), e = F.winter(hco3), kind = R.pick(['ok', 'hi', 'lo']);
    const pco2 = kind === 'ok' ? round(e + R.pick([-1, 0, 1]), 0) : kind === 'hi' ? round(e + R.int(5, 12), 0) : round(Math.max(10, e - R.int(5, 9)), 0);
    const g = gas(pco2, hco3);
    const opts = T(['اسیدوز متابولیک با جبران تنفسی مناسب', 'اسیدوز متابولیک + اسیدوز تنفسی', 'اسیدوز متابولیک + آلکالوز تنفسی', 'اسیدوز تنفسی اولیه'], ['Metabolic acidosis with appropriate respiratory compensation', 'Metabolic acidosis + respiratory acidosis', 'Metabolic acidosis + respiratory alkalosis', 'Primary respiratory acidosis']);
    const a = kind === 'ok' ? 0 : kind === 'hi' ? 1 : 2;
    return { kind: 'mcq', q: T('با فرمول وینتر، تفسیر کامل این گاز خون چیست؟', 'Using Winters’ formula, what is the full interpretation of this blood gas?'), lab: g, opts: [opts[a]].concat(opts.filter((_, i) => i !== a)), a: 0, why: T(`PCO₂ مورد انتظار = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${fa(e)} ± ${n(2)}؛ PCO₂ بیمار ${fa(pco2)} ← <b>${opts[a]}</b>`, `Expected PCO₂ = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${fa(e)} ± ${n(2)}; the patient’s PCO₂ is ${fa(pco2)} → <b>${opts[a]}</b>`) };
  };
  G['a.delta'] = () => {
    const hco3 = R.int(8, 18), kind = R.pick(['pure', 'nag', 'alk']);
    const dH = 24 - hco3;
    const dAG = kind === 'pure' ? Math.round(dH * R.pick([1, 1.2, 1.5, 1.8])) : kind === 'nag' ? Math.max(3, Math.round(dH * R.pick([0.4, 0.5, 0.7]))) : Math.round(dH * R.pick([2.4, 3, 3.5]));
    const ag = 12 + dAG, d = dAG / dH;
    return {
      kind: 'num', q: T('نسبت دلتا (ΔAG ÷ ΔHCO₃) چند است؟', 'What is the delta ratio (ΔAG ÷ ΔHCO₃)?'), case: [[T('آنیون گپ', 'Anion gap'), fa(ag)], ['HCO₃', fa(hco3) + ' mEq/L'], [T('پایه طبیعی', 'Normal baseline'), T('AG = ۱۲ و HCO₃ = ۲۴', 'AG = 12 and HCO₃ = 24')]],
      ans: round(d, 2), tol: 0.06, unit: '', hint: T('(AG − ۱۲) ÷ (۲۴ − HCO₃)', '(AG − 12) ÷ (24 − HCO₃)'),
      why: T(`(${fa(ag)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(dAG)} ÷ ${fa(dH)} = <b>${fa(d, 2)}</b><br>${d < 1 ? 'کمتر از ۱ ← HCO₃ بیش از افزایش گپ افت کرده: <b>اسیدوز با گپ طبیعی همراه</b> (مثلاً اسهال در کنار کتواسیدوز).' : d > 2 ? 'بیشتر از ۲ ← HCO₃ کمتر از انتظار افت کرده: <b>آلکالوز متابولیک همراه</b> (مثلاً استفراغ در کنار اسیدوز).' : 'بین ۱ و ۲ ← اسیدوز متابولیک خالص با گپ بالا.'}`, `(${fa(ag)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(dAG)} ÷ ${fa(dH)} = <b>${fa(d, 2)}</b><br>${d < 1 ? 'Below 1 → HCO₃ has fallen more than the gap rose: <b>an accompanying normal gap acidosis</b> (for example diarrhea alongside ketoacidosis).' : d > 2 ? 'Above 2 → HCO₃ has fallen less than expected: <b>an accompanying metabolic alkalosis</b> (for example vomiting alongside acidosis).' : 'Between 1 and 2 → a pure high gap metabolic acidosis.'}`)
    };
  };
  G['a.osm'] = () => {
    const na = R.int(132, 146), glu = R.step(80, 300, 10), bun = R.int(8, 40), gap = R.pick([2, 5, 8, 18, 25, 35, 50]);
    const calc = F.osm(na, glu, bun), meas = Math.round(calc + gap);
    const g = meas - calc;
    return {
      kind: 'num', q: T('شکاف اسمولار (اسمولار گپ) این بیمار چند است؟', 'What is this patient’s osmolar gap?'), lab: { na, glu }, case: [['BUN', fa(bun) + ' mg/dL'], [T('اسمولالیته اندازه‌گیری‌شده', 'Measured osmolality'), fa(meas) + ' mOsm/kg']],
      ans: round(g, 0), tol: 2, unit: 'mOsm/kg', hint: T('اندازه‌گیری‌شده − (۲Na + قند÷۱۸ + BUN÷۲٫۸)', 'Measured − (2Na + glucose÷18 + BUN÷2.8)'),
      why: T(`محاسبه‌شده = ${n(2)}×${fa(na)} + ${fa(glu)}÷${n(18)} + ${fa(bun)}÷${n(2.8)} = ${fa(calc, 0)}<br>شکاف = ${fa(meas)} − ${fa(calc, 0)} = <b>${fa(g, 0)}</b> ← ${g > 10 ? 'بالا؛ در اسیدوز با گپ بالا به <b>متانول یا اتیلن گلیکول</b> فکر کن.' : 'طبیعی (کمتر از ۱۰).'}`, `Calculated = ${n(2)}×${fa(na)} + ${fa(glu)}÷${n(18)} + ${fa(bun)}÷${n(2.8)} = ${fa(calc, 0)}<br>Gap = ${fa(meas)} − ${fa(calc, 0)} = <b>${fa(g, 0)}</b> → ${g > 10 ? 'high; in a high gap acidosis think of <b>methanol or ethylene glycol</b>.' : 'normal (below 10).'}`)
    };
  };
  G['a.uag'] = () => {
    const una = R.int(20, 80), uk = R.int(10, 50), ucl = R.int(30, 140);
    const u = F.uag(una, uk, ucl);
    return {
      kind: 'num', q: T('آنیون گپ ادرار چند است؟', 'What is the urine anion gap?'), case: [[T('تشخیص', 'Diagnosis'), T('اسیدوز متابولیک با آنیون گپ طبیعی', 'Normal anion gap metabolic acidosis')], [T('Na ادرار', 'Urine Na'), fa(una)], [T('K ادرار', 'Urine K'), fa(uk)], [T('Cl ادرار', 'Urine Cl'), fa(ucl)]],
      ans: u, tol: 0.5, unit: 'mEq/L', hint: T('(Na + K) ادرار − Cl ادرار', 'Urine (Na + K) − urine Cl'),
      why: T(`(${fa(una)} + ${fa(uk)}) − ${fa(ucl)} = <b>${fa(u)}</b> ← ${u < 0 ? 'منفی: کلیه آمونیوم (همراه کلر) زیاد دفع می‌کند؛ علت <b>گوارشی (اسهال)</b> است.' : 'مثبت: دفع آمونیوم مختل است؛ <b>اسیدوز توبولار کلیوی (RTA)</b> محتمل است.'}`, `(${fa(una)} + ${fa(uk)}) − ${fa(ucl)} = <b>${fa(u)}</b> → ${u < 0 ? 'negative: the kidney is excreting plenty of ammonium (with chloride); the cause is <b>gastrointestinal (diarrhea)</b>.' : 'positive: ammonium excretion is impaired; <b>renal tubular acidosis (RTA)</b> is likely.'}`)
    };
  };
  G['a.bicarb'] = () => {
    const w = R.step(50, 90, 5), hco3 = R.int(4, 10), target = R.pick([12, 15]);
    const d = F.bicarbDef(w, hco3, target);
    return {
      kind: 'num', q: T(`برای رساندن HCO₃ به ${fa(target)}، تقریباً چند mEq بی‌کربنات سدیم لازم است؟`, `Roughly how many mEq of sodium bicarbonate are needed to bring HCO₃ up to ${fa(target)}?`), case: [[T('وزن', 'Weight'), T(fa(w) + ' کیلوگرم', fa(w) + ' kg')], ['HCO₃', fa(hco3) + ' mEq/L'], ['pH', T('۷٫۰۵', '7.05')]],
      ans: round(d, 0), tol: Math.max(5, d * 0.04), unit: 'mEq', hint: T('۰٫۵ × وزن × (HCO₃ هدف − HCO₃ فعلی)', '0.5 × weight × (target HCO₃ − current HCO₃)'),
      why: T(`${n(0.5)} × ${fa(w)} × (${fa(target)} − ${fa(hco3)}) = <b>${fa(d, 0)}</b> mEq<br><small>معمولاً نصف آن را آهسته می‌دهند و دوباره گاز خون می‌گیرند؛ هدف رفع اسیدمی تهدیدکننده است، نه رساندن HCO₃ به حد طبیعی. هر میلی‌لیتر بی‌کربنات ۸٫۴٪ = ۱ mEq.</small>`, `${n(0.5)} × ${fa(w)} × (${fa(target)} − ${fa(hco3)}) = <b>${fa(d, 0)}</b> mEq<br><small>Usually half is given slowly and the blood gas repeated; the goal is to relieve life-threatening acidemia, not to normalize HCO₃. Each millilitre of 8.4% bicarbonate = 1 mEq.</small>`)
    };
  };

  /* ===== CO2 ===== */
  G['c.acute'] = () => {
    const p = R.int(50, 80), e = F.racid(p, false);
    return {
      kind: 'num', q: T('در اسیدوز تنفسی حاد، HCO₃ مورد انتظار چند است؟', 'In acute respiratory acidosis, what is the expected HCO₃?'), lab: { pco2: p },
      ans: round(e, 1), tol: 0.5, unit: 'mEq/L', hint: T('حاد: به ازای هر ۱۰ mmHg افزایش PCO₂، HCO₃ حدود ۱ واحد بالا می‌رود', 'Acute: HCO₃ rises about 1 for every 10 mmHg rise in PCO₂'),
      why: T(`${n(24)} + ${n(0.1)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>در حالت حاد فقط بافرها کار کرده‌اند؛ کلیه هنوز وارد عمل نشده.</small>`, `${n(24)} + ${n(0.1)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>In the acute state only the buffers have acted; the kidneys have not stepped in yet.</small>`)
    };
  };
  G['c.chronic'] = () => {
    const p = R.int(50, 75), e = F.racid(p, true);
    return {
      kind: 'num', q: T('در اسیدوز تنفسی مزمن (مثلاً COPD)، HCO₃ مورد انتظار چند است؟', 'In chronic respiratory acidosis (for example COPD), what is the expected HCO₃?'), lab: { pco2: p },
      ans: round(e, 1), tol: 1, unit: 'mEq/L', hint: T('مزمن: به ازای هر ۱۰ mmHg افزایش PCO₂، HCO₃ حدود ۴ واحد بالا می‌رود', 'Chronic: HCO₃ rises about 4 for every 10 mmHg rise in PCO₂'),
      why: T(`${n(24)} + ${n(0.4)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>کلیه‌ها طی ۳ تا ۵ روز HCO₃ را نگه می‌دارند.</small>`, `${n(24)} + ${n(0.4)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>The kidneys retain HCO₃ over 3 to 5 days.</small>`)
    };
  };
  G['c.alk'] = () => {
    const p = R.int(20, 32), chronic = Math.random() < 0.5, e = F.ralk(p, chronic);
    return {
      kind: 'num', q: T(`در آلکالوز تنفسی ${chronic ? 'مزمن' : 'حاد'}، HCO₃ مورد انتظار چند است؟`, `In ${chronic ? 'chronic' : 'acute'} respiratory alkalosis, what is the expected HCO₃?`), lab: { pco2: p },
      ans: round(e, 1), tol: 0.6, unit: 'mEq/L', hint: T('حاد: ۲ واحد و مزمن: ۴ واحد کاهش به ازای هر ۱۰ mmHg', 'Acute: a fall of 2 and chronic: a fall of 4 per 10 mmHg'),
      why: `${n(24)} − ${n(chronic ? 0.4 : 0.2)} × (${n(40)} − ${fa(p)}) = <b>${fa(e)}</b>`
    };
  };
  G['c.malk'] = () => {
    const h = R.int(30, 45), e = F.malk(h);
    return {
      kind: 'num', q: T('در این آلکالوز متابولیک، PCO₂ مورد انتظار چند است؟', 'In this metabolic alkalosis, what is the expected PCO₂?'), lab: { hco3: h },
      ans: round(e, 1), tol: 1, unit: 'mmHg', hint: T('۴۰ + ۰٫۷ × (HCO₃ − ۲۴)', '40 + 0.7 × (HCO₃ − 24)'),
      why: T(`${n(40)} + ${n(0.7)} × (${fa(h)} − ${n(24)}) = <b>${fa(e)}</b> (± ۵)<br><small>قاعده سریع دیگر: HCO₃ + ۱۵ = ${fa(h + 15)}</small>`, `${n(40)} + ${n(0.7)} × (${fa(h)} − ${n(24)}) = <b>${fa(e)}</b> (± 5)<br><small>Another quick rule: HCO₃ + 15 = ${fa(h + 15)}</small>`)
    };
  };
  G['c.ph'] = () => {
    const p = R.int(50, 80), chronic = Math.random() < 0.4, e = F.racidPh(p, chronic);
    return {
      kind: 'num', q: T(`اگر اسیدوز تنفسی ${chronic ? 'مزمن' : 'حاد'} و خالص باشد، pH مورد انتظار چند است؟`, `If this is a pure ${chronic ? 'chronic' : 'acute'} respiratory acidosis, what is the expected pH?`), lab: { pco2: p },
      ans: round(e, 2), tol: 0.02, unit: '', hint: T('حاد: ۰٫۰۸ و مزمن: ۰٫۰۳ کاهش pH به ازای هر ۱۰ mmHg', 'Acute: a fall of 0.08 and chronic: 0.03 in pH per 10 mmHg'),
      why: `${n(7.4)} − ${n(chronic ? 0.003 : 0.008)} × (${fa(p)} − ${n(40)}) = <b>${fa(e, 2)}</b>`
    };
  };
  G['c.racidMcq'] = () => {
    const p = R.int(58, 75), kind = R.pick(['a', 'c', 'am', 'ma']);
    const h = kind === 'a' ? round(F.racid(p, false), 0) : kind === 'c' ? round(F.racid(p, true), 0) : kind === 'am' ? round(F.racid(p, false) - 5, 0) : round(F.racid(p, true) + 6, 0);
    const g = gas(p, h);
    const opts = T(['اسیدوز تنفسی حاد', 'اسیدوز تنفسی مزمن (جبران‌شده)', 'اسیدوز تنفسی + اسیدوز متابولیک', 'اسیدوز تنفسی + آلکالوز متابولیک'], ['Acute respiratory acidosis', 'Chronic (compensated) respiratory acidosis', 'Respiratory acidosis + metabolic acidosis', 'Respiratory acidosis + metabolic alkalosis']);
    const a = { a: 0, c: 1, am: 2, ma: 3 }[kind];
    return { kind: 'mcq', q: T('HCO₃ مورد انتظار را حساب کن. تفسیر درست؟', 'Calculate the expected HCO₃. The correct interpretation?'), lab: g, opts: [opts[a]].concat(opts.filter((_, i) => i !== a)), a: 0, why: T(`حاد: ${n(24)} + ${n(0.1)} × ${fa(p - 40)} = ${fa(F.racid(p, false))} • مزمن: ${n(24)} + ${n(0.4)} × ${fa(p - 40)} = ${fa(F.racid(p, true))}؛ HCO₃ بیمار ${fa(h)} ← <b>${opts[a]}</b>`, `Acute: ${n(24)} + ${n(0.1)} × ${fa(p - 40)} = ${fa(F.racid(p, false))} • chronic: ${n(24)} + ${n(0.4)} × ${fa(p - 40)} = ${fa(F.racid(p, true))}; the patient’s HCO₃ is ${fa(h)} → <b>${opts[a]}</b>`) };
  };

  /* ===== VBG ===== */
  G['v.pco2'] = () => {
    const pv = R.int(40, 75), e = pv - 5;
    return {
      kind: 'num', q: T('PCO₂ شریانی این بیمار تقریباً چند است؟', 'Roughly what is this patient’s arterial PCO₂?'), case: [[T('نمونه', 'Sample'), T('VBG از ورید محیطی', 'Peripheral venous VBG')], ['PvCO₂', fa(pv) + ' mmHg'], [T('همودینامیک', 'Hemodynamics'), T('پایدار', 'Stable')]],
      ans: e, tol: 3, unit: 'mmHg', hint: T('PCO₂ وریدی محیطی حدود ۳ تا ۸ (میانگین ۵) بیشتر از شریانی است', 'Peripheral venous PCO₂ is about 3 to 8 (average 5) higher than arterial'),
      why: T(`${fa(pv)} − ${n(5)} ≈ <b>${fa(e)}</b> (محدوده ${fa(pv - 8)} تا ${fa(pv - 3)})<br><small>در شوک این اختلاف بزرگ‌تر و غیرقابل اعتماد می‌شود.</small>`, `${fa(pv)} − ${n(5)} ≈ <b>${fa(e)}</b> (range ${fa(pv - 8)} to ${fa(pv - 3)})<br><small>In shock this difference becomes larger and unreliable.</small>`)
    };
  };
  G['v.ph'] = () => {
    const pv = R.step(7.1, 7.4, 0.01), e = pv + 0.04;
    return {
      kind: 'num', q: T('pH شریانی تقریبی چند است؟', 'What is the approximate arterial pH?'), case: [[T('نمونه', 'Sample'), T('VBG محیطی', 'Peripheral VBG')], [T('pH وریدی', 'Venous pH'), fa(pv, 2)]],
      ans: round(e, 2), tol: 0.02, unit: '', hint: T('pH وریدی حدود ۰٫۰۳ تا ۰٫۰۵ پایین‌تر از شریانی است', 'Venous pH is about 0.03 to 0.05 lower than arterial'),
      why: `${fa(pv, 2)} + ${n(0.04)} ≈ <b>${fa(e, 2)}</b>`
    };
  };
  G['v.neo'] = () => {
    const w = R.step(0.8, 4, 0.1), bd = R.int(8, 18);
    const d = F.bicarbBE(w, bd);
    return {
      kind: 'num', q: T('مقدار بی‌کربنات لازم برای اصلاح کامل این کمبود باز چند mEq است؟', 'How many mEq of bicarbonate are needed to fully correct this base deficit?'), case: [[T('بیمار', 'Patient'), T('نوزاد در NICU', 'Newborn in the NICU')], [T('وزن', 'Weight'), T(fa(w) + ' کیلوگرم', fa(w) + ' kg')], ['BE', '−' + fa(bd) + ' mEq/L']],
      ans: round(d, 1), tol: 0.2, unit: 'mEq', hint: T('کمبود باز × وزن × ۰٫۳', 'Base deficit × weight × 0.3'),
      why: T(`${fa(bd)} × ${fa(w)} × ${n(0.3)} = <b>${fa(d)}</b> mEq<br><small>بی‌کربنات روتین نیست؛ اکسیژن‌رسانی و پرفیوژن مهم‌ترند. اگر لازم شد: رقیق ۱:۱ با آب مقطر (۴٫۲٪) و آهسته طی ۳۰ تا ۶۰ دقیقه، معمولاً نیمی از مقدار محاسبه‌شده.</small>`, `${fa(bd)} × ${fa(w)} × ${n(0.3)} = <b>${fa(d)}</b> mEq<br><small>Bicarbonate is not routine; oxygen delivery and perfusion matter more. If needed: diluted 1:1 with sterile water (4.2%) and given slowly over 30 to 60 minutes, usually half the calculated amount.</small>`)
    };
  };
  G['v.kpa'] = () => {
    const toMm = Math.random() < 0.5;
    if (toMm) {
      const k = R.step(3, 14, 0.5), m = F.mmhg(k);
      return { kind: 'num', q: T(`${fa(k)} kPa چند mmHg است؟`, `How many mmHg is ${fa(k)} kPa?`), ans: round(m, 1), tol: 0.8, unit: 'mmHg', hint: T('kPa × ۷٫۵', 'kPa × 7.5'), why: `${fa(k)} × ${n(7.5)} = <b>${fa(m)}</b> mmHg` };
    }
    const m = R.int(25, 120), k = F.kpa(m);
    return { kind: 'num', q: T(`${fa(m)} mmHg چند kPa است؟`, `How many kPa is ${fa(m)} mmHg?`), ans: round(k, 1), tol: 0.15, unit: 'kPa', hint: T('mmHg ÷ ۷٫۵', 'mmHg ÷ 7.5'), why: `${fa(m)} ÷ ${n(7.5)} = <b>${fa(k)}</b> kPa` };
  };
  G['v.be'] = () => {
    const be = R.pick([-14, -9, -6, -3, -1, 0, 1, 3, 5, 8, 12]);
    const right = be < -2 ? T('به سمت اسیدوز متابولیک', 'Toward metabolic acidosis') : be > 2 ? T('به سمت آلکالوز متابولیک', 'Toward metabolic alkalosis') : T('جزء متابولیک طبیعی', 'Normal metabolic component');
    const all = [T('به سمت اسیدوز متابولیک', 'Toward metabolic acidosis'), T('به سمت آلکالوز متابولیک', 'Toward metabolic alkalosis'), T('جزء متابولیک طبیعی', 'Normal metabolic component'), T('اسیدوز تنفسی', 'Respiratory acidosis')];
    return { kind: 'mcq', q: T('این base excess در بزرگسال چه معنایی دارد؟', 'What does this base excess mean in an adult?'), lab: { be }, opts: [right].concat(all.filter(x => x !== right)), a: 0, why: T(`BE طبیعی بزرگسال ۲− تا ۲+ است؛ BE = ${sg(be, 0)} ← <b>${right}</b>. BE فقط جزء متابولیک را نشان می‌دهد و مستقل از PCO₂ است.`, `Normal adult BE is −2 to +2; BE = ${sg(be, 0)} → <b>${right}</b>. BE shows only the metabolic component and is independent of PCO₂.`) };
  };

  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round; EA.sg = sg;
  EA.F = F; EA.gen = G; EA.R = R; EA.NORM = NORM; EA.labRows = labRows; EA.interpret = interpret; EA.DN = DN; EA.gasOf = gas;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/* نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و پرونده‌ها را سرور فقط به مشترکان می‌دهد */
      (function (EA, S) {
        if (S.W) { EA.W = { fa: S.W.fa, en: S.W.en || S.W.fa }; EA.worlds = EA.W[EA.lang] || EA.W.fa; } else EA.worlds = S.worlds;
        if (S.RD) EA.RD = { fa: [], en: [] };
        EA.rounds = [];
        EA.PREVIEW = true;
      })(window.EA, {"worlds": [{"id": "o2", "sym": "O₂", "name": "اکسیژن و تبادل گاز", "sub": "ریه، هموگلوبین و PaO₂", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "levels": ["نفس‌های اول", "شکارچیان هیپوکسمی", "فرماندهان اکسیژن"], "gens": ["o.aa", "o.pao2", "o.pf", "o.cao2", "o.sev", "o.nc", "o.type"], "lessons": [{"id": "o1", "title": "ABG چه می‌گوید؟", "icon": "🌬️", "items": [{"t": "learn", "title": "سه عدد اصلی", "body": "ABG یعنی اندازه‌گیری سه چیز در <b>خون شریانی</b>:<br>• <b>pH</b>: اسیدیته خون<br>• <b>PaO₂</b>: فشار سهمی اکسیژن<br>• <b>PaCO₂</b>: فشار سهمی دی‌اکسید کربن<br><br>با همین سه عدد (و HCO₃ که از آن‌ها محاسبه می‌شود) دو سؤال را جواب می‌دهیم: <b>تبادل گاز ریه</b> چطور است؟ و <b>تعادل اسید و باز</b> چطور است؟"}, {"t": "mcq", "q": "کدام مورد جزو سه اندازه‌گیری اصلی ABG نیست؟", "opts": ["هموگلوبین", "pH", "PaO₂", "PaCO₂"], "why": "ABG در اصل pH، PaO₂ و PaCO₂ را می‌سنجد؛ دستگاه‌ها معمولاً Hb و الکترولیت‌ها را هم گزارش می‌کنند ولی جزو تعریف ABG نیستند."}, {"t": "learn", "title": "فشار سهمی یعنی چه؟", "body": "فشار هوا در سطح دریا <b>۷۶۰ mmHg</b> است. اکسیژن ۲۱٪ هواست، پس فشار سهمی آن:<div class=\"fx\" dir=\"ltr\">0.21 × 760 ≈ 160 mmHg</div>CO₂ در هوای دمی تقریباً صفر است. حرف <b>a</b> کوچک یعنی شریانی (PaO₂) و <b>A</b> بزرگ یعنی حبابچه‌ای (PAO₂)."}, {"t": "fill", "q": "اکسیژن حدود ___ درصد هوای اتاق را تشکیل می‌دهد.", "opts": ["۲۱", "۷۹", "۱۳٫۵"], "why": "۷۹٪ نیتروژن است و ۱۳٫۵٪ درصد اکسیژن در هوای حبابچه‌ها."}, {"t": "learn", "title": "PaCO₂ = آینه تهویه", "body": "CO₂ آن‌قدر راحت از خون به حبابچه منتشر می‌شود که PaCO₂ فقط به <b>تهویه حبابچه‌ای</b> بستگی دارد.<br>مرکز تنفس در ساقه مغز PaCO₂ را حس می‌کند و سرعت و عمق تنفس را تنظیم می‌کند.<br><br>پس <b>PaCO₂ بالا (هیپرکاپنی) همیشه یعنی تهویه حبابچه‌ای کم شده</b> — حتی در سپسیس که تولید CO₂ زیاد است، ریه سالم آن را دفع می‌کند."}, {"t": "tf", "q": "افزایش PaCO₂ همیشه نشانه کاهش تهویه حبابچه‌ای است.", "a": true, "why": "درست. ریه طبیعی حتی تولید زیاد CO₂ را دفع می‌کند؛ هیپرکاپنی یعنی تهویه کافی نیست."}, {"t": "mcq", "q": "PaCO₂ اصولاً با کدام عامل تعیین می‌شود؟", "opts": ["تهویه حبابچه‌ای", "غلظت هموگلوبین", "FiO₂", "فشار خون"], "why": "PaCO₂ و تهویه حبابچه‌ای رابطه معکوس دارند: تهویه نصف شود، PaCO₂ تقریباً دو برابر می‌شود."}, {"t": "match", "q": "هر نماد را به معنایش وصل کن", "pairs": [["PaO₂", "فشار اکسیژن شریانی"], ["PAO₂", "فشار اکسیژن حبابچه‌ای"], ["SaO₂", "اشباع اکسیژن شریانی"], ["FiO₂", "درصد اکسیژن هوای دمی"]]}, {"t": "tf", "q": "تبادل O₂ و CO₂ در ریه با انتقال فعال انجام می‌شود.", "a": false, "why": "نه؛ با <b>انتشار</b> ساده از غشای نازک حبابچه–مویرگ."}]}, {"id": "o2b", "title": "هموگلوبین و اشباع", "icon": "🩸", "items": [], "locked": 1}, {"id": "o3", "title": "منحنی تجزیه اکسی‌هموگلوبین", "icon": "📈", "items": [], "locked": 1}, {"id": "o4", "title": "هیپوکسی، هیپوکسمی و FiO₂", "icon": "🎭", "items": [], "locked": 1}, {"id": "o5", "title": "نارسایی تنفسی نوع ۱ و ۲", "icon": "🫁", "items": [], "locked": 1}, {"id": "o6", "title": "V/Q، شانت و گرادیان A–a", "icon": "⚖️", "items": [], "locked": 1}, {"id": "o7", "title": "اکسیژن‌درمانی هوشمند", "icon": "🎯", "items": [], "locked": 1}, {"id": "o8", "title": "CO، کم‌خونی و دام‌های اکسیمتری", "icon": "🔥", "items": [], "locked": 1}, {"id": "o9", "title": "آی‌سی‌یو اکسیژن", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ph", "sym": "pH", "name": "اصول اسید و باز", "sub": "pH، بافر، جبران و تفسیر گام‌به‌گام", "color": "#A560E8", "dark": "#8445C4", "light": "#F1E6FF", "levels": ["قطره‌های بافر", "نگهبانان تعادل", "اساتید تفسیر"], "gens": ["p.h80", "p.hkb", "p.hh", "p.fold", "p.primary"], "lessons": [{"id": "ph1", "title": "pH و یون هیدروژن", "icon": "🧪", "items": [], "locked": 1}, {"id": "ph2", "title": "ریه، کلیه و بافر", "icon": "🫧", "items": [], "locked": 1}, {"id": "ph3", "title": "هندرسون و راستی‌آزمایی", "icon": "🔎", "items": [], "locked": 1}, {"id": "ph4", "title": "چهار اختلال اصلی", "icon": "🧭", "items": [], "locked": 1}, {"id": "ph5", "title": "مقادیر طبیعی گزارش", "icon": "📋", "items": [], "locked": 1}, {"id": "ph6", "title": "جبران و قوانین طلایی", "icon": "⚖️", "items": [], "locked": 1}, {"id": "ph7", "title": "تفسیر گام‌به‌گام", "icon": "🪜", "items": [], "locked": 1}, {"id": "ph8", "title": "فرمول‌های جبران", "icon": "🧮", "items": [], "locked": 1}, {"id": "ph9", "title": "آی‌سی‌یو اسید و باز", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ag", "sym": "AG", "name": "اسیدوز متابولیک", "sub": "آنیون گپ، دلتا و علت‌یابی", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "levels": ["کاشفان گپ", "شکارچیان سم", "استادان دلتا"], "gens": ["a.ag", "a.agk", "a.agc", "a.winter", "a.winterMcq", "a.delta", "a.osm", "a.uag", "a.bicarb"], "lessons": [{"id": "ag1", "title": "اسیدوز متابولیک چیست؟", "icon": "🍋", "items": [], "locked": 1}, {"id": "ag2", "title": "آنیون گپ", "icon": "🕳️", "items": [], "locked": 1}, {"id": "ag3", "title": "علل آنیون گپ بالا", "icon": "🔥", "items": [], "locked": 1}, {"id": "ag4", "title": "لاکتات و کتواسیدوز دیابتی", "icon": "🍬", "items": [], "locked": 1}, {"id": "ag5", "title": "الکل‌های سمی و آسپرین", "icon": "☠️", "items": [], "locked": 1}, {"id": "ag6", "title": "نسبت دلتا و اختلال سه‌گانه", "icon": "🔺", "items": [], "locked": 1}, {"id": "ag7", "title": "گپ طبیعی (هیپرکلرمیک)", "icon": "🧂", "items": [], "locked": 1}, {"id": "ag8", "title": "درمان اسیدوز متابولیک", "icon": "💉", "items": [], "locked": 1}, {"id": "ag9", "title": "آی‌سی‌یو اسیدوز", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "co2", "sym": "CO₂", "name": "تنفسی و آلکالوز", "sub": "هیپرکاپنی، هیپرونتیلاسیون و آلکالوز متابولیک", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "levels": ["نفس‌شمارها", "رام‌کنندگان آلکالوز", "داوران مختلط"], "gens": ["c.acute", "c.chronic", "c.alk", "c.malk", "c.ph", "c.racidMcq"], "lessons": [{"id": "c1", "title": "اسیدوز تنفسی", "icon": "💨", "items": [], "locked": 1}, {"id": "c2", "title": "حاد، مزمن و حاد روی مزمن", "icon": "⏳", "items": [], "locked": 1}, {"id": "c3", "title": "درمان اسیدوز تنفسی", "icon": "🩺", "items": [], "locked": 1}, {"id": "c4", "title": "آلکالوز تنفسی", "icon": "🌪️", "items": [], "locked": 1}, {"id": "c5", "title": "هیپرونتیلاسیون: اضطراب یا بیماری؟", "icon": "😮‍💨", "items": [], "locked": 1}, {"id": "c6", "title": "آلکالوز متابولیک: علت‌ها", "icon": "🧃", "items": [], "locked": 1}, {"id": "c7", "title": "کلر ادرار و درمان آلکالوز", "icon": "🧪", "items": [], "locked": 1}, {"id": "c8", "title": "استفراغ و تنگی پیلور", "icon": "🤮", "items": [], "locked": 1}, {"id": "c9", "title": "آی‌سی‌یو تنفسی و مختلط", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "vbg", "sym": "VBG", "name": "VBG، نمونه و نوزاد", "sub": "نمونه‌گیری درست، گاز وریدی و مویرگی، NICU", "color": "#5B6CF0", "dark": "#4452D1", "light": "#E3E6FF", "levels": ["سرنگ‌به‌دستان", "رمزگشایان VBG", "نگهبانان NICU"], "gens": ["v.pco2", "v.ph", "v.neo", "v.kpa", "v.be"], "lessons": [{"id": "v1", "title": "کِی و چطور ABG بگیریم؟", "icon": "💉", "items": [], "locked": 1}, {"id": "v2", "title": "تست آلن و مراقبت پس از نمونه", "icon": "✋", "items": [], "locked": 1}, {"id": "v3", "title": "دام‌های نمونه‌گیری", "icon": "🪤", "items": [], "locked": 1}, {"id": "v4", "title": "VBG در برابر ABG", "icon": "🩸", "items": [], "locked": 1}, {"id": "v5", "title": "تفسیر سریع VBG به روش دکتر ژیان", "icon": "⚡", "items": [], "locked": 1}, {"id": "v6", "title": "Base Excess در عمل", "icon": "⚗️", "items": [], "locked": 1}, {"id": "v7", "title": "گاز خون مویرگی (CBG)", "icon": "🦶", "items": [], "locked": 1}, {"id": "v8", "title": "گاز خون نوزاد", "icon": "👶", "items": [], "locked": 1}, {"id": "v9", "title": "NICU: ونتیلاتور با ABG", "icon": "🚨", "items": [], "locked": 1}]}], "W": {"fa": [{"id": "o2", "sym": "O₂", "name": "اکسیژن و تبادل گاز", "sub": "ریه، هموگلوبین و PaO₂", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "levels": ["نفس‌های اول", "شکارچیان هیپوکسمی", "فرماندهان اکسیژن"], "gens": ["o.aa", "o.pao2", "o.pf", "o.cao2", "o.sev", "o.nc", "o.type"], "lessons": [{"id": "o1", "title": "ABG چه می‌گوید؟", "icon": "🌬️", "items": [{"t": "learn", "title": "سه عدد اصلی", "body": "ABG یعنی اندازه‌گیری سه چیز در <b>خون شریانی</b>:<br>• <b>pH</b>: اسیدیته خون<br>• <b>PaO₂</b>: فشار سهمی اکسیژن<br>• <b>PaCO₂</b>: فشار سهمی دی‌اکسید کربن<br><br>با همین سه عدد (و HCO₃ که از آن‌ها محاسبه می‌شود) دو سؤال را جواب می‌دهیم: <b>تبادل گاز ریه</b> چطور است؟ و <b>تعادل اسید و باز</b> چطور است؟"}, {"t": "mcq", "q": "کدام مورد جزو سه اندازه‌گیری اصلی ABG نیست؟", "opts": ["هموگلوبین", "pH", "PaO₂", "PaCO₂"], "why": "ABG در اصل pH، PaO₂ و PaCO₂ را می‌سنجد؛ دستگاه‌ها معمولاً Hb و الکترولیت‌ها را هم گزارش می‌کنند ولی جزو تعریف ABG نیستند."}, {"t": "learn", "title": "فشار سهمی یعنی چه؟", "body": "فشار هوا در سطح دریا <b>۷۶۰ mmHg</b> است. اکسیژن ۲۱٪ هواست، پس فشار سهمی آن:<div class=\"fx\" dir=\"ltr\">0.21 × 760 ≈ 160 mmHg</div>CO₂ در هوای دمی تقریباً صفر است. حرف <b>a</b> کوچک یعنی شریانی (PaO₂) و <b>A</b> بزرگ یعنی حبابچه‌ای (PAO₂)."}, {"t": "fill", "q": "اکسیژن حدود ___ درصد هوای اتاق را تشکیل می‌دهد.", "opts": ["۲۱", "۷۹", "۱۳٫۵"], "why": "۷۹٪ نیتروژن است و ۱۳٫۵٪ درصد اکسیژن در هوای حبابچه‌ها."}, {"t": "learn", "title": "PaCO₂ = آینه تهویه", "body": "CO₂ آن‌قدر راحت از خون به حبابچه منتشر می‌شود که PaCO₂ فقط به <b>تهویه حبابچه‌ای</b> بستگی دارد.<br>مرکز تنفس در ساقه مغز PaCO₂ را حس می‌کند و سرعت و عمق تنفس را تنظیم می‌کند.<br><br>پس <b>PaCO₂ بالا (هیپرکاپنی) همیشه یعنی تهویه حبابچه‌ای کم شده</b> — حتی در سپسیس که تولید CO₂ زیاد است، ریه سالم آن را دفع می‌کند."}, {"t": "tf", "q": "افزایش PaCO₂ همیشه نشانه کاهش تهویه حبابچه‌ای است.", "a": true, "why": "درست. ریه طبیعی حتی تولید زیاد CO₂ را دفع می‌کند؛ هیپرکاپنی یعنی تهویه کافی نیست."}, {"t": "mcq", "q": "PaCO₂ اصولاً با کدام عامل تعیین می‌شود؟", "opts": ["تهویه حبابچه‌ای", "غلظت هموگلوبین", "FiO₂", "فشار خون"], "why": "PaCO₂ و تهویه حبابچه‌ای رابطه معکوس دارند: تهویه نصف شود، PaCO₂ تقریباً دو برابر می‌شود."}, {"t": "match", "q": "هر نماد را به معنایش وصل کن", "pairs": [["PaO₂", "فشار اکسیژن شریانی"], ["PAO₂", "فشار اکسیژن حبابچه‌ای"], ["SaO₂", "اشباع اکسیژن شریانی"], ["FiO₂", "درصد اکسیژن هوای دمی"]]}, {"t": "tf", "q": "تبادل O₂ و CO₂ در ریه با انتقال فعال انجام می‌شود.", "a": false, "why": "نه؛ با <b>انتشار</b> ساده از غشای نازک حبابچه–مویرگ."}]}, {"id": "o2b", "title": "هموگلوبین و اشباع", "icon": "🩸", "items": [], "locked": 1}, {"id": "o3", "title": "منحنی تجزیه اکسی‌هموگلوبین", "icon": "📈", "items": [], "locked": 1}, {"id": "o4", "title": "هیپوکسی، هیپوکسمی و FiO₂", "icon": "🎭", "items": [], "locked": 1}, {"id": "o5", "title": "نارسایی تنفسی نوع ۱ و ۲", "icon": "🫁", "items": [], "locked": 1}, {"id": "o6", "title": "V/Q، شانت و گرادیان A–a", "icon": "⚖️", "items": [], "locked": 1}, {"id": "o7", "title": "اکسیژن‌درمانی هوشمند", "icon": "🎯", "items": [], "locked": 1}, {"id": "o8", "title": "CO، کم‌خونی و دام‌های اکسیمتری", "icon": "🔥", "items": [], "locked": 1}, {"id": "o9", "title": "آی‌سی‌یو اکسیژن", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ph", "sym": "pH", "name": "اصول اسید و باز", "sub": "pH، بافر، جبران و تفسیر گام‌به‌گام", "color": "#A560E8", "dark": "#8445C4", "light": "#F1E6FF", "levels": ["قطره‌های بافر", "نگهبانان تعادل", "اساتید تفسیر"], "gens": ["p.h80", "p.hkb", "p.hh", "p.fold", "p.primary"], "lessons": [{"id": "ph1", "title": "pH و یون هیدروژن", "icon": "🧪", "items": [], "locked": 1}, {"id": "ph2", "title": "ریه، کلیه و بافر", "icon": "🫧", "items": [], "locked": 1}, {"id": "ph3", "title": "هندرسون و راستی‌آزمایی", "icon": "🔎", "items": [], "locked": 1}, {"id": "ph4", "title": "چهار اختلال اصلی", "icon": "🧭", "items": [], "locked": 1}, {"id": "ph5", "title": "مقادیر طبیعی گزارش", "icon": "📋", "items": [], "locked": 1}, {"id": "ph6", "title": "جبران و قوانین طلایی", "icon": "⚖️", "items": [], "locked": 1}, {"id": "ph7", "title": "تفسیر گام‌به‌گام", "icon": "🪜", "items": [], "locked": 1}, {"id": "ph8", "title": "فرمول‌های جبران", "icon": "🧮", "items": [], "locked": 1}, {"id": "ph9", "title": "آی‌سی‌یو اسید و باز", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ag", "sym": "AG", "name": "اسیدوز متابولیک", "sub": "آنیون گپ، دلتا و علت‌یابی", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "levels": ["کاشفان گپ", "شکارچیان سم", "استادان دلتا"], "gens": ["a.ag", "a.agk", "a.agc", "a.winter", "a.winterMcq", "a.delta", "a.osm", "a.uag", "a.bicarb"], "lessons": [{"id": "ag1", "title": "اسیدوز متابولیک چیست؟", "icon": "🍋", "items": [], "locked": 1}, {"id": "ag2", "title": "آنیون گپ", "icon": "🕳️", "items": [], "locked": 1}, {"id": "ag3", "title": "علل آنیون گپ بالا", "icon": "🔥", "items": [], "locked": 1}, {"id": "ag4", "title": "لاکتات و کتواسیدوز دیابتی", "icon": "🍬", "items": [], "locked": 1}, {"id": "ag5", "title": "الکل‌های سمی و آسپرین", "icon": "☠️", "items": [], "locked": 1}, {"id": "ag6", "title": "نسبت دلتا و اختلال سه‌گانه", "icon": "🔺", "items": [], "locked": 1}, {"id": "ag7", "title": "گپ طبیعی (هیپرکلرمیک)", "icon": "🧂", "items": [], "locked": 1}, {"id": "ag8", "title": "درمان اسیدوز متابولیک", "icon": "💉", "items": [], "locked": 1}, {"id": "ag9", "title": "آی‌سی‌یو اسیدوز", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "co2", "sym": "CO₂", "name": "تنفسی و آلکالوز", "sub": "هیپرکاپنی، هیپرونتیلاسیون و آلکالوز متابولیک", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "levels": ["نفس‌شمارها", "رام‌کنندگان آلکالوز", "داوران مختلط"], "gens": ["c.acute", "c.chronic", "c.alk", "c.malk", "c.ph", "c.racidMcq"], "lessons": [{"id": "c1", "title": "اسیدوز تنفسی", "icon": "💨", "items": [], "locked": 1}, {"id": "c2", "title": "حاد، مزمن و حاد روی مزمن", "icon": "⏳", "items": [], "locked": 1}, {"id": "c3", "title": "درمان اسیدوز تنفسی", "icon": "🩺", "items": [], "locked": 1}, {"id": "c4", "title": "آلکالوز تنفسی", "icon": "🌪️", "items": [], "locked": 1}, {"id": "c5", "title": "هیپرونتیلاسیون: اضطراب یا بیماری؟", "icon": "😮‍💨", "items": [], "locked": 1}, {"id": "c6", "title": "آلکالوز متابولیک: علت‌ها", "icon": "🧃", "items": [], "locked": 1}, {"id": "c7", "title": "کلر ادرار و درمان آلکالوز", "icon": "🧪", "items": [], "locked": 1}, {"id": "c8", "title": "استفراغ و تنگی پیلور", "icon": "🤮", "items": [], "locked": 1}, {"id": "c9", "title": "آی‌سی‌یو تنفسی و مختلط", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "vbg", "sym": "VBG", "name": "VBG، نمونه و نوزاد", "sub": "نمونه‌گیری درست، گاز وریدی و مویرگی، NICU", "color": "#5B6CF0", "dark": "#4452D1", "light": "#E3E6FF", "levels": ["سرنگ‌به‌دستان", "رمزگشایان VBG", "نگهبانان NICU"], "gens": ["v.pco2", "v.ph", "v.neo", "v.kpa", "v.be"], "lessons": [{"id": "v1", "title": "کِی و چطور ABG بگیریم؟", "icon": "💉", "items": [], "locked": 1}, {"id": "v2", "title": "تست آلن و مراقبت پس از نمونه", "icon": "✋", "items": [], "locked": 1}, {"id": "v3", "title": "دام‌های نمونه‌گیری", "icon": "🪤", "items": [], "locked": 1}, {"id": "v4", "title": "VBG در برابر ABG", "icon": "🩸", "items": [], "locked": 1}, {"id": "v5", "title": "تفسیر سریع VBG به روش دکتر ژیان", "icon": "⚡", "items": [], "locked": 1}, {"id": "v6", "title": "Base Excess در عمل", "icon": "⚗️", "items": [], "locked": 1}, {"id": "v7", "title": "گاز خون مویرگی (CBG)", "icon": "🦶", "items": [], "locked": 1}, {"id": "v8", "title": "گاز خون نوزاد", "icon": "👶", "items": [], "locked": 1}, {"id": "v9", "title": "NICU: ونتیلاتور با ABG", "icon": "🚨", "items": [], "locked": 1}]}], "en": [{"id": "o2", "sym": "O₂", "name": "Oxygen & gas exchange", "sub": "Lungs, hemoglobin and PaO₂", "color": "#1CB0F6", "dark": "#1899D6", "light": "#DDF4FF", "levels": ["First Breaths", "Hypoxemia Hunters", "Oxygen Commanders"], "gens": ["o.aa", "o.pao2", "o.pf", "o.cao2", "o.sev", "o.nc", "o.type"], "lessons": [{"id": "o1", "title": "What does an ABG tell you?", "icon": "🌬️", "items": [{"t": "learn", "title": "The three main numbers", "body": "An ABG measures three things in <b>arterial blood</b>:<br>• <b>pH</b>: the acidity of the blood<br>• <b>PaO₂</b>: the partial pressure of oxygen<br>• <b>PaCO₂</b>: the partial pressure of carbon dioxide<br><br>With these three numbers (and HCO₃, calculated from them) we answer two questions: how is <b>gas exchange in the lung</b>? And how is the <b>acid–base balance</b>?"}, {"t": "mcq", "q": "Which of these is NOT one of the three core ABG measurements?", "opts": ["Hemoglobin", "pH", "PaO₂", "PaCO₂"], "why": "An ABG essentially measures pH, PaO₂ and PaCO₂; analyzers usually report Hb and electrolytes too, but they are not part of the definition of an ABG."}, {"t": "learn", "title": "What is partial pressure?", "body": "Air pressure at sea level is <b>760 mmHg</b>. Oxygen is 21% of air, so its partial pressure is:<div class=\"fx\" dir=\"ltr\">0.21 × 760 ≈ 160 mmHg</div>CO₂ in inspired air is almost zero. A lowercase <b>a</b> means arterial (PaO₂) and a capital <b>A</b> means alveolar (PAO₂)."}, {"t": "fill", "q": "Oxygen makes up about ___ percent of room air.", "opts": ["21", "79", "13.5"], "why": "79% is nitrogen, and 13.5% is the oxygen percentage in alveolar air."}, {"t": "learn", "title": "PaCO₂ = the mirror of ventilation", "body": "CO₂ diffuses from blood into the alveolus so easily that PaCO₂ depends only on <b>alveolar ventilation</b>.<br>The respiratory centre in the brainstem senses PaCO₂ and adjusts the rate and depth of breathing.<br><br>So <b>a high PaCO₂ (hypercapnia) always means reduced alveolar ventilation</b> — even in sepsis, where CO₂ production is high, healthy lungs clear it."}, {"t": "tf", "q": "A rise in PaCO₂ is always a sign of reduced alveolar ventilation.", "a": true, "why": "True. A normal lung clears even a high CO₂ production; hypercapnia means ventilation is inadequate."}, {"t": "mcq", "q": "What mainly determines PaCO₂?", "opts": ["Alveolar ventilation", "Hemoglobin concentration", "FiO₂", "Blood pressure"], "why": "PaCO₂ and alveolar ventilation are inversely related: halve the ventilation and PaCO₂ roughly doubles."}, {"t": "match", "q": "Match each symbol to its meaning", "pairs": [["PaO₂", "Arterial oxygen pressure"], ["PAO₂", "Alveolar oxygen pressure"], ["SaO₂", "Arterial oxygen saturation"], ["FiO₂", "Fraction of inspired oxygen"]]}, {"t": "tf", "q": "O₂ and CO₂ are exchanged in the lung by active transport.", "a": false, "why": "No; by simple <b>diffusion</b> across the thin alveolar–capillary membrane."}]}, {"id": "o2b", "title": "Hemoglobin & saturation", "icon": "🩸", "items": [], "locked": 1}, {"id": "o3", "title": "The oxyhemoglobin dissociation curve", "icon": "📈", "items": [], "locked": 1}, {"id": "o4", "title": "Hypoxia, hypoxemia & FiO₂", "icon": "🎭", "items": [], "locked": 1}, {"id": "o5", "title": "Type 1 & type 2 respiratory failure", "icon": "🫁", "items": [], "locked": 1}, {"id": "o6", "title": "V/Q, shunt & the A–a gradient", "icon": "⚖️", "items": [], "locked": 1}, {"id": "o7", "title": "Smart oxygen therapy", "icon": "🎯", "items": [], "locked": 1}, {"id": "o8", "title": "CO, anemia & oximetry pitfalls", "icon": "🔥", "items": [], "locked": 1}, {"id": "o9", "title": "Oxygen ICU", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ph", "sym": "pH", "name": "Acid–base basics", "sub": "pH, buffers, compensation and stepwise interpretation", "color": "#A560E8", "dark": "#8445C4", "light": "#F1E6FF", "levels": ["Buffer Drops", "Balance Guardians", "Interpretation Masters"], "gens": ["p.h80", "p.hkb", "p.hh", "p.fold", "p.primary"], "lessons": [{"id": "ph1", "title": "pH and the hydrogen ion", "icon": "🧪", "items": [], "locked": 1}, {"id": "ph2", "title": "Lungs, kidneys & buffers", "icon": "🫧", "items": [], "locked": 1}, {"id": "ph3", "title": "Henderson & data check", "icon": "🔎", "items": [], "locked": 1}, {"id": "ph4", "title": "The four main disorders", "icon": "🧭", "items": [], "locked": 1}, {"id": "ph5", "title": "Normal report values", "icon": "📋", "items": [], "locked": 1}, {"id": "ph6", "title": "Compensation & golden rules", "icon": "⚖️", "items": [], "locked": 1}, {"id": "ph7", "title": "Stepwise interpretation", "icon": "🪜", "items": [], "locked": 1}, {"id": "ph8", "title": "Compensation formulas", "icon": "🧮", "items": [], "locked": 1}, {"id": "ph9", "title": "Acid–base ICU", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "ag", "sym": "AG", "name": "Metabolic acidosis", "sub": "Anion gap, delta and finding the cause", "color": "#FF9600", "dark": "#CC7800", "light": "#FFF0DB", "levels": ["Gap Explorers", "Toxin Hunters", "Delta Masters"], "gens": ["a.ag", "a.agk", "a.agc", "a.winter", "a.winterMcq", "a.delta", "a.osm", "a.uag", "a.bicarb"], "lessons": [{"id": "ag1", "title": "What is metabolic acidosis?", "icon": "🍋", "items": [], "locked": 1}, {"id": "ag2", "title": "The anion gap", "icon": "🕳️", "items": [], "locked": 1}, {"id": "ag3", "title": "Causes of a high anion gap", "icon": "🔥", "items": [], "locked": 1}, {"id": "ag4", "title": "Lactate & diabetic ketoacidosis", "icon": "🍬", "items": [], "locked": 1}, {"id": "ag5", "title": "Toxic alcohols & aspirin", "icon": "☠️", "items": [], "locked": 1}, {"id": "ag6", "title": "The delta ratio & triple disorders", "icon": "🔺", "items": [], "locked": 1}, {"id": "ag7", "title": "Normal gap (hyperchloremic)", "icon": "🧂", "items": [], "locked": 1}, {"id": "ag8", "title": "Treating metabolic acidosis", "icon": "💉", "items": [], "locked": 1}, {"id": "ag9", "title": "Acidosis ICU", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "co2", "sym": "CO₂", "name": "Respiratory & alkalosis", "sub": "Hypercapnia, hyperventilation and metabolic alkalosis", "color": "#FF4B8B", "dark": "#D93A72", "light": "#FFE2EC", "levels": ["Breath Counters", "Alkalosis Tamers", "Mixed-Disorder Judges"], "gens": ["c.acute", "c.chronic", "c.alk", "c.malk", "c.ph", "c.racidMcq"], "lessons": [{"id": "c1", "title": "Respiratory acidosis", "icon": "💨", "items": [], "locked": 1}, {"id": "c2", "title": "Acute, chronic & acute on chronic", "icon": "⏳", "items": [], "locked": 1}, {"id": "c3", "title": "Treating respiratory acidosis", "icon": "🩺", "items": [], "locked": 1}, {"id": "c4", "title": "Respiratory alkalosis", "icon": "🌪️", "items": [], "locked": 1}, {"id": "c5", "title": "Hyperventilation: anxiety or disease?", "icon": "😮‍💨", "items": [], "locked": 1}, {"id": "c6", "title": "Metabolic alkalosis: causes", "icon": "🧃", "items": [], "locked": 1}, {"id": "c7", "title": "Urine chloride & treating alkalosis", "icon": "🧪", "items": [], "locked": 1}, {"id": "c8", "title": "Vomiting & pyloric stenosis", "icon": "🤮", "items": [], "locked": 1}, {"id": "c9", "title": "Respiratory & mixed ICU", "icon": "🚨", "items": [], "locked": 1}]}, {"id": "vbg", "sym": "VBG", "name": "VBG, sampling & neonates", "sub": "Correct sampling, venous and capillary gases, NICU", "color": "#5B6CF0", "dark": "#4452D1", "light": "#E3E6FF", "levels": ["Syringe Holders", "VBG Decoders", "NICU Guardians"], "gens": ["v.pco2", "v.ph", "v.neo", "v.kpa", "v.be"], "lessons": [{"id": "v1", "title": "When and how to take an ABG?", "icon": "💉", "items": [], "locked": 1}, {"id": "v2", "title": "The Allen test & aftercare", "icon": "✋", "items": [], "locked": 1}, {"id": "v3", "title": "Sampling pitfalls", "icon": "🪤", "items": [], "locked": 1}, {"id": "v4", "title": "VBG versus ABG", "icon": "🩸", "items": [], "locked": 1}, {"id": "v5", "title": "Quick VBG interpretation, Dr Zhian’s way", "icon": "⚡", "items": [], "locked": 1}, {"id": "v6", "title": "Base excess in practice", "icon": "⚗️", "items": [], "locked": 1}, {"id": "v7", "title": "Capillary blood gas (CBG)", "icon": "🦶", "items": [], "locked": 1}, {"id": "v8", "title": "Neonatal blood gases", "icon": "👶", "items": [], "locked": 1}, {"id": "v9", "title": "NICU: the ventilator and the ABG", "icon": "🚨", "items": [], "locked": 1}]}]}, "RD": true});









/* هما — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۵ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'o2-0', w: 'o2', lv: 0, name: 'حبابک', title: 'مولکول اکسیژن', shape: 'o2mol', color: '#8FD8FF', acc: ['sparkle'], bio: 'دو اتم اکسیژنِ دست‌به‌دست! ۲۱٪ هوای اتاق مال خانواده اوست و فشار سهمی‌اش در سطح دریا حدود ۱۶۰ mmHg است.' },
    { id: 'o2-1', w: 'o2', lv: 1, name: 'شُشی', title: 'استاد تهویه', shape: 'lung', color: '#FF9EB5', acc: ['headband'], bio: 'حدود ۴۸۰ میلیون حبابچه دارد و CO₂ را آن‌قدر خوب دفع می‌کند که PaCO₂ فقط به تهویه او بستگی دارد.' },
    { id: 'o2-2', w: 'o2', lv: 2, name: 'هموشاه', title: 'حامل چهار اکسیژن', shape: 'rbc', color: '#E8455A', acc: ['cape', 'crown'], bio: 'هر مولکول هموگلوبینش چهار اکسیژن حمل می‌کند. در تب و اسیدوز اکسیژن را سخاوتمندانه‌تر به بافت می‌دهد؛ منحنی‌اش به راست می‌رود.' },
    { id: 'ph-0', w: 'ph', lv: 0, name: 'لیتموسک', title: 'کاغذ شناساگر', shape: 'strip', color: '#CE82FF', acc: [], bio: 'در اسید قرمز و در باز آبی می‌شود؛ ولی خوب می‌داند خون فقط بین ۷٫۳۵ و ۷٫۴۵ خوشحال است.' },
    { id: 'ph-1', w: 'ph', lv: 1, name: 'بافرینا', title: 'نگهبان بی‌کربنات', shape: 'shield', color: '#A560E8', acc: ['helmet'], bio: 'هر H⁺ اضافه را در آغوش می‌گیرد و به CO₂ و آب تبدیلش می‌کند تا ریه بیرونش بفرستد. سریع‌ترین نگهبان pH است.' },
    { id: 'ph-2', w: 'ph', lv: 2, name: 'هندرسون', title: 'جادوگر لگاریتم', shape: 'drop', color: '#7A3FC4', acc: ['wizard'], bio: 'با وردِ «۶٫۱ به‌علاوه لگاریتم» جادو می‌کند و با یک نگاه می‌گوید عددهای ABG راست می‌گویند یا نه.' },
    { id: 'ag-0', w: 'ag', lv: 0, name: 'لیموک', title: 'ترش‌ترین دوست', shape: 'lemon', color: '#FFD93D', acc: ['stem'], bio: 'پر از اسید سیتریک است ولی خون را اسیدی نمی‌کند؛ سیترات در کبد به بی‌کربنات تبدیل می‌شود. برای همین تزریق خون حجیم آلکالوز می‌دهد!' },
    { id: 'ag-1', w: 'ag', lv: 1, name: 'کتونک', title: 'شکارچی کتون', shape: 'hex', color: '#FF9600', acc: ['antenna'], bio: 'بوی استون را از یک کیلومتری می‌شناسد و شعارش را همه حفظ‌اند: اول سرم، بعد پتاسیم، بعد انسولین.' },
    { id: 'ag-2', w: 'ag', lv: 2, name: 'گپ‌سالار', title: 'فرمانروای آنیون گپ', shape: 'star', color: '#E07B00', acc: ['halo', 'glasses'], bio: 'فهرست GOLDMARK را از بر است و آنیون‌های پنهان را حتی پشت یک pH کاملاً طبیعی پیدا می‌کند.' },
    { id: 'co2-0', w: 'co2', lv: 0, name: 'دودی', title: 'ابر دی‌اکسید کربن', shape: 'cloud', color: '#B9C6D0', acc: [], bio: 'هر بار که کسی کمتر نفس بکشد، بزرگ‌تر می‌شود! تنها راه کوچک کردنش تهویه حبابچه‌ای است، نه اکسیژن بیشتر.' },
    { id: 'co2-1', w: 'co2', lv: 1, name: 'تندنفس', title: 'قهرمان هیپرونتیلاسیون', shape: 'blob', color: '#FF4B8B', acc: ['headband'], bio: 'آن‌قدر تند نفس می‌کشد که PCO₂ را به ۲۵ می‌رساند؛ و بعد تعجب می‌کند چرا انگشت‌هایش گزگز می‌کند (کلسیم یونیزه!).' },
    { id: 'co2-2', w: 'co2', lv: 2, name: 'داور جبران', title: 'قاضی اختلالات مختلط', shape: 'shield', color: '#D93A72', acc: ['cape', 'glasses'], bio: 'با ترازوی وینتر و قانون «۱-۴ بالا، ۲-۴ پایین» می‌سنجد جبران کافی است یا اختلال دومی پنهان شده.' },
    { id: 'vbg-0', w: 'vbg', lv: 0, name: 'سرنگی', title: 'سرنگ هپارینه', shape: 'syringe', color: '#E8455A', acc: [], bio: 'همیشه می‌گوید: هپارین کم، حباب صفر، و اگر دیر شد یخ! وگرنه برایت اسیدوز کاذب درست می‌کنم.' },
    { id: 'vbg-1', w: 'vbg', lv: 1, name: 'نوزادک', title: 'قهرمان NICU', shape: 'baby', color: '#FFD2B8', acc: ['pacifier'], bio: 'با ساکاروز ۲۴٪ و آغوش مادر، نمونه‌گیری را تحمل می‌کند. PaO₂ هدفش ۵۰ تا ۸۰ است، نه بیشتر.' },
    { id: 'vbg-2', w: 'vbg', lv: 2, name: 'رگ‌یاب', title: 'استاد نمونه‌گیری', shape: 'heart', color: '#5B6CF0', acc: ['crown'], bio: 'پیش از هر نمونه رادیال تست آلن می‌کند و از ورید و شریان، هر دو، حرف راست بیرون می‌کشد.' }
  ];

  /* ---------- نسخه انگلیسی نام، لقب و معرفی (با getter تا تغییر زبان بی‌درنگ اعمال شود) ---------- */
  const EN = {
    'o2-0': ['Bubbly', 'Oxygen Molecule', 'Two oxygen atoms holding hands! Room air is 21% her family, and her partial pressure at sea level is about 160 mmHg.'],
    'o2-1': ['Lungy', 'Master of Ventilation', 'Has about 480 million alveoli and clears CO₂ so well that PaCO₂ depends on his ventilation alone.'],
    'o2-2': ['King Hemo', 'Carrier of Four Oxygens', 'Each of his hemoglobin molecules carries four oxygens. In fever and acidosis he hands oxygen to the tissues more generously; his curve shifts right.'],
    'ph-0': ['Litmusy', 'Indicator Strip', 'Turns red in acid and blue in base, but knows full well that blood is only happy between 7.35 and 7.45.'],
    'ph-1': ['Bufferina', 'Bicarbonate Guardian', 'Hugs every extra H⁺ and turns it into CO₂ and water for the lungs to blow off. The fastest guardian of pH.'],
    'ph-2': ['Henderson', 'Wizard of Logarithms', 'Casts spells with the charm “6.1 plus the log” and can tell at a glance whether an ABG’s numbers are telling the truth.'],
    'ag-0': ['Lemony', 'The Sourest Friend', 'Full of citric acid, yet doesn’t make blood acidic: the liver turns citrate into bicarbonate. That’s why massive transfusion causes alkalosis!'],
    'ag-1': ['Ketony', 'Ketone Hunter', 'Smells acetone a mile away, and everyone knows the motto: fluids first, then potassium, then insulin.'],
    'ag-2': ['Gap Lord', 'Ruler of the Anion Gap', 'Knows GOLDMARK by heart and finds hidden anions even behind a perfectly normal pH.'],
    'co2-0': ['Smoky', 'Carbon Dioxide Cloud', 'Grows bigger every time someone breathes less! The only way to shrink him is alveolar ventilation, not more oxygen.'],
    'co2-1': ['Quickbreath', 'Hyperventilation Champion', 'Breathes so fast that PCO₂ drops to 25, then wonders why his fingers tingle (ionized calcium!).'],
    'co2-2': ['The Referee', 'Judge of Mixed Disorders', 'Weighs things with Winter’s scale and the “1-4 up, 2-4 down” rule to decide whether compensation is enough or a second disorder is hiding.'],
    'vbg-0': ['Syringey', 'Heparinized Syringe', 'Always says: a little heparin, zero bubbles, and ice if there’s a delay! Otherwise I’ll hand you a fake acidosis.'],
    'vbg-1': ['Little Neo', 'NICU Hero', 'Gets through sampling with 24% sucrose and a mother’s hug. Target PaO₂ is 50 to 80, no higher.'],
    'vbg-2': ['Vein Finder', 'Master of Sampling', 'Does an Allen test before every radial sample, and gets the truth out of both veins and arteries.']
  };
  CHARS.forEach(c => {
    const fa = { name: c.name, title: c.title, bio: c.bio }, en = EN[c.id];
    if (en) ['name', 'title', 'bio'].forEach((k, i) => Object.defineProperty(c, k, { get: () => (EA.lang === 'en' ? en[i] : fa[k]), enumerable: true }));
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
    hex: { fy: 88, top: 38, body: c => `<path d="${hexPath(60, 88, 50)}" fill="${c}" stroke="${c}" stroke-width="10" stroke-linejoin="round"/><path d="${hexPath(60, 88, 36)}" fill="#fff" opacity=".12"/>` },
    star: { fy: 92, top: 36, body: c => `<path d="${starPath(60, 90, 56, 30)}" fill="${c}" stroke="${c}" stroke-width="12" stroke-linejoin="round"/><path d="${starPath(60, 90, 36, 20)}" fill="#fff" opacity=".12"/>` },
    /* مولکول O₂: دو اتم به هم چسبیده */
    o2mol: { fy: 94, top: 36, body: c => `<circle cx="92" cy="58" r="22" fill="${c}"/><circle cx="92" cy="58" r="22" fill="#000" opacity=".06"/><circle cx="58" cy="94" r="42" fill="${c}"/><ellipse cx="40" cy="72" rx="8" ry="12" transform="rotate(30 40 72)" fill="#fff" opacity=".45"/><ellipse cx="86" cy="48" rx="5" ry="7" transform="rotate(30 86 48)" fill="#fff" opacity=".45"/>` },
    /* ریه با نای */
    lung: { fy: 98, top: 24, body: c => `<rect x="54" y="18" width="12" height="44" rx="6" fill="#E27A94"/><path d="M52 58 C30 50 12 78 14 110 C16 136 42 142 58 128 L58 64 Z" fill="${c}"/><path d="M68 58 C90 50 108 78 106 110 C104 136 78 142 62 128 L62 64 Z" fill="${c}"/><path d="M58 64 L58 128 M62 64 L62 128" stroke="#E27A94" stroke-width="3"/><ellipse cx="30" cy="84" rx="6" ry="11" transform="rotate(20 30 84)" fill="#fff" opacity=".4"/>` },
    /* گلبول قرمز دوکاو */
    rbc: { fy: 88, top: 42, body: c => `<ellipse cx="60" cy="90" rx="52" ry="46" fill="${c}"/><ellipse cx="60" cy="96" rx="30" ry="22" fill="#000" opacity=".12"/><ellipse cx="34" cy="66" rx="9" ry="13" transform="rotate(40 34 66)" fill="#fff" opacity=".35"/>` },
    /* نوار شناساگر pH */
    strip: { fy: 70, top: 22, body: c => `<rect x="32" y="22" width="56" height="120" rx="12" fill="${c}"/><path d="M44 22 H76 a12 12 0 0 1 12 12 V96 H32 V34 a12 12 0 0 1 12 -12Z" fill="#FFF8E6"/><path d="M32 96 H88" stroke="#000" stroke-opacity=".08" stroke-width="3"/><rect x="38" y="30" width="6" height="56" rx="3" fill="#fff" opacity=".7"/><rect x="32" y="108" width="56" height="10" fill="#FF6B6B" opacity=".55"/><rect x="32" y="124" width="56" height="10" fill="#6B8BFF" opacity=".55"/>` },
    lemon: { fy: 90, top: 46, body: c => `<ellipse cx="60" cy="90" rx="50" ry="42" fill="${c}"/><circle cx="10" cy="90" r="7" fill="${c}"/><circle cx="110" cy="90" r="7" fill="${c}"/><ellipse cx="60" cy="98" rx="38" ry="28" fill="#000" opacity=".05"/><ellipse cx="36" cy="68" rx="10" ry="6" transform="rotate(-25 36 68)" fill="#fff" opacity=".5"/>` },
    cloud: { fy: 94, top: 44, body: c => `<path d="M30 128 C8 128 4 100 22 92 C18 66 46 56 58 70 C64 46 100 46 102 76 C122 78 124 108 106 116 C104 126 96 128 90 128 Z" fill="${c}"/><path d="M30 128 C8 128 4 100 22 92 C24 108 40 118 90 128 Z" fill="#000" opacity=".07"/><ellipse cx="72" cy="62" rx="10" ry="5" transform="rotate(-10 72 62)" fill="#fff" opacity=".5"/>` },
    syringe: { fy: 70, top: 20, body: c => `<rect x="54" y="8" width="12" height="18" fill="#9AA9B1"/><rect x="40" y="6" width="40" height="8" rx="4" fill="#77868E"/><rect x="34" y="26" width="52" height="98" rx="10" fill="#EEF7FC" stroke="#9AA9B1" stroke-width="3"/><path d="M36 92 H84 V114 a8 8 0 0 1 -8 8 H44 a8 8 0 0 1 -8 -8Z" fill="${c}"/><path d="M40 44 H50 M40 58 H50 M40 72 H50" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/><rect x="56" y="124" width="8" height="8" fill="#9AA9B1"/><path d="M60 132 V148" stroke="#77868E" stroke-width="3" stroke-linecap="round"/>` },
    baby: { fy: 90, top: 42, body: c => `<circle cx="16" cy="92" r="10" fill="${c}"/><circle cx="104" cy="92" r="10" fill="${c}"/><circle cx="60" cy="88" r="46" fill="${c}"/><path d="M56 44 q6 -14 18 -6 q-10 0 -8 10" stroke="#8B5A2B" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="38" cy="62" rx="8" ry="11" transform="rotate(30 38 62)" fill="#fff" opacity=".35"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#12B3A8"/><path d="M60 80 L60 146" stroke="#0E8F86" stroke-width="3"/>`,
    halo: (s) => `<ellipse cx="60" cy="${s.top - 16}" rx="26" ry="7" fill="none" stroke="#FFC800" stroke-width="5"/>`
  };
  const FRONT = {
    sparkle: () => ['M18 36 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z', 'M102 110 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z', 'M14 126 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z'].map(d => `<path d="${d}" fill="#FFC800"/>`).join(''),
    headband: s => `<path d="M20 ${s.fy - 22} Q60 ${s.fy - 38} 100 ${s.fy - 22}" stroke="#12B3A8" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M100 ${s.fy - 22} q10 4 14 14 M100 ${s.fy - 22} q12 -2 18 6" stroke="#12B3A8" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    crown: s => { const y = s.top + 6; return `<path d="M38 ${y} L38 ${y - 18} L49 ${y - 8} L60 ${y - 26} L71 ${y - 8} L82 ${y - 18} L82 ${y} Z" fill="#FFC800" stroke="#E5A500" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="${y - 7}" r="4" fill="#E8455A"/>`; },
    glasses: s => `<g stroke="#3b1f0e" stroke-width="3.5" fill="#fff" fill-opacity=".25"><circle cx="46" cy="${s.fy}" r="13"/><circle cx="74" cy="${s.fy}" r="13"/></g><path d="M59 ${s.fy} h2" stroke="#3b1f0e" stroke-width="3.5"/>`,
    helmet: s => `<path d="M28 ${s.top + 22} Q60 ${s.top - 22} 92 ${s.top + 22} Z" fill="#9AA9B1" stroke="#77868E" stroke-width="3"/><path d="M60 ${s.top - 2} q-4 -22 14 -28" stroke="#E8455A" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    wizard: s => { const y = s.top + 26; return `<path d="M60 ${y - 60} L92 ${y} H28 Z" fill="#4B2FA0"/><ellipse cx="60" cy="${y}" rx="40" ry="8" fill="#3A2380"/><path d="M58 ${y - 34} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z M70 ${y - 16} l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#FFC800"/><line x1="100" y1="132" x2="114" y2="96" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><path d="M114 84 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFC800"/>`; },
    antenna: s => `<path d="M46 ${s.top + 6} q-6 -18 -16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="29" cy="${s.top - 17}" r="6" fill="#58CC02"/><path d="M74 ${s.top + 6} q6 -18 16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="91" cy="${s.top - 17}" r="6" fill="#58CC02"/>`,
    stem: () => `<path d="M60 50 q2 -12 10 -16" stroke="#6b4a12" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M68 36 q14 -10 24 -2 q-12 8 -24 2z" fill="#58CC02"/>`,
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

  const FACE_X = { o2mol: 58 };
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



/* هما — نکته‌های کوتاه بالینی که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['O₂', 'PaCO₂ بالا همیشه یعنی تهویه حبابچه‌ای کم شده؛ حتی در سپسیس، ریه سالم CO₂ اضافه را دفع می‌کند.', 'A high PaCO₂ always means reduced alveolar ventilation; even in sepsis, healthy lungs clear the extra CO₂.'],
    ['O₂', 'PaO₂ حدود ۶۰ ≈ SaO₂ حدود ۹۰٪؛ زیر آن، هر افت کوچک PaO₂ اشباع را فرو می‌ریزد.', 'PaO₂ about 60 ≈ SaO₂ about 90%; below that, every small fall in PaO₂ makes saturation collapse.'],
    ['O₂', 'پالس اکسیمتر درباره CO₂ ساکت است؛ در نارسایی نوع ۲ جانشین ABG نیست.', 'A pulse oximeter is silent about CO₂; in type 2 failure it does not replace an ABG.'],
    ['O₂', 'PaO₂ مورد انتظار روی اکسیژن ≈ ۵ برابر درصد FiO₂؛ PaO₂ «طبیعی» روی ۶۰٪ یعنی ریه به‌شدت بیمار است.', 'Expected PaO₂ on oxygen ≈ 5 times the FiO₂ percentage; a “normal” PaO₂ on 60% means the lungs are very sick.'],
    ['O₂', 'قانون ۱۴۰: در هوای اتاق PaO₂ + PaCO₂ کمتر از ۱۴۰ است؛ بیشتر بود؟ حباب یا اکسیژن.', 'The 140 rule: on room air PaO₂ + PaCO₂ is below 140; higher? A bubble or oxygen.'],
    ['O₂', 'گرادیان A–a طبیعی ≈ سن ÷ ۴ + ۴. هیپوکسمی با A–a طبیعی یعنی هیپوونتیلاسیون یا ارتفاع.', 'Normal A–a gradient ≈ age ÷ 4 + 4. Hypoxemia with a normal A–a means hypoventilation or altitude.'],
    ['O₂', 'در مسمومیت با CO، SpO₂ کاذب طبیعی است؛ فقط CO-اکسیمتری کربوکسی‌هموگلوبین را نشان می‌دهد.', 'In CO poisoning the SpO₂ is falsely normal; only CO-oximetry shows the carboxyhemoglobin.'],
    ['O₂', 'در کم‌خونی شدید اکسیژن بیشتر کمکی نمی‌کند؛ محتوای اکسیژن را هموگلوبین می‌سازد.', 'In severe anemia more oxygen does not help; hemoglobin makes up the oxygen content.'],
    ['O₂', 'هدف SpO₂ در بیمار مستعد هیپرکاپنی ۸۸ تا ۹۲٪ است و در بقیه ۹۴ تا ۹۸٪.', 'The SpO₂ target is 88 to 92% in patients at risk of hypercapnia and 94 to 98% in everyone else.'],
    ['O₂', 'ABG طبیعی هرگز آمبولی ریه را رد نمی‌کند.', 'A normal ABG never rules out pulmonary embolism.'],
    ['O₂', 'ماسک ساده را با کمتر از ۵ لیتر نده؛ CO₂ بازدمی دوباره تنفس می‌شود.', 'Do not run a simple mask at less than 5 litres; exhaled CO₂ is rebreathed.'],
    ['O₂', 'در حمله آسم، PaCO₂ «طبیعی» یعنی بیمار دارد خسته می‌شود؛ حمله تهدیدکننده حیات است.', 'In an asthma attack, a “normal” PaCO₂ means the patient is tiring; the attack is life-threatening.'],
    ['pH', 'رمز دکتر ژیان: «بیچاره (۲۴)، یه شب چله (۴۰) افتاده»؛ HCO₃ طبیعی ۲۴ و PCO₂ طبیعی ۴۰.', 'Memory aid: “24 hours a day, 40 winks a night”; normal HCO₃ is 24 and normal PCO₂ is 40.'],
    ['pH', 'جبران هرگز بیش از حد نیست؛ با pH طبیعی، سمتی از ۷٫۴۰ که pH در آن است اختلال اولیه را لو می‌دهد.', 'There is never overcompensation; with a normal pH, the side of 7.40 the pH is on gives away the primary disorder.'],
    ['pH', '[H⁺] ≈ ۸۰ منهای دو رقم اعشار pH (بین ۷٫۲۰ و ۷٫۵۰)؛ با ۲۴ × PCO₂ ÷ HCO₃ مقایسه کن.', '[H⁺] ≈ 80 minus the two decimal digits of pH (between 7.20 and 7.50); compare it with 24 × PCO₂ ÷ HCO₃.'],
    ['pH', 'هر ۱ واحد pH یعنی ۱۰ برابر H⁺؛ و هر ۰٫۳ واحد یعنی دو برابر.', 'Each 1 unit of pH means 10 times the H⁺; and each 0.3 units means double.'],
    ['pH', 'اسیدوز تنفسی و آلکالوز تنفسی هیچ‌وقت با هم نیستند؛ بقیه ترکیب‌ها ممکن‌اند.', 'Respiratory acidosis and respiratory alkalosis never coexist; every other combination is possible.'],
    ['pH', 'اسیدوز تنفسی + اسیدوز متابولیک خطرناک‌ترین الگوی اسید و باز است.', 'Respiratory acidosis + metabolic acidosis is the most dangerous acid–base pattern.'],
    ['pH', 'بیمار از ABG مهم‌تر است؛ بدون بالین، هیچ گاز خونی را تفسیر نکن.', 'The patient matters more than the ABG; never interpret a blood gas without the clinical picture.'],
    ['pH', 'رمز جبران تنفسی: «۱-۴ بالا، ۲-۴ پایین» به ازای هر ۱۰ mmHg (حاد و مزمن).', 'Respiratory compensation code: “1-4 up, 2-4 down” per 10 mmHg (acute and chronic).'],
    ['pH', 'BE فقط جزء متابولیک را نشان می‌دهد؛ در اختلال تنفسی حاد تقریباً صفر می‌ماند.', 'BE shows only the metabolic component; in an acute respiratory disorder it stays near zero.'],
    ['AG', 'آنیون گپ را در هر ABG همراه الکترولیت حساب کن، حتی با pH طبیعی.', 'Calculate the anion gap on every ABG with electrolytes, even with a normal pH.'],
    ['AG', 'هر ۱ g/dL کاهش آلبومین، آنیون گپ را حدود ۲٫۵ کم نشان می‌دهد؛ اصلاحش کن.', 'Each 1 g/dL fall in albumin makes the anion gap read about 2.5 lower; correct it.'],
    ['AG', 'فرمول وینتر: PCO₂ مورد انتظار = ۱٫۵ × HCO₃ + ۸ ± ۲.', 'Winters’ formula: expected PCO₂ = 1.5 × HCO₃ + 8 ± 2.'],
    ['AG', 'نسبت دلتا کمتر از ۱: گپ طبیعی هم همراه است؛ بیشتر از ۲: آلکالوز متابولیک هم هست.', 'Delta ratio below 1: a normal gap acidosis is also present; above 2: there is also a metabolic alkalosis.'],
    ['AG', 'GOLDMARK: گلیکول، اکسوپرولین، ال و دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتون.', 'GOLDMARK: glycols, oxoproline, L- and D-lactate, methanol, aspirin, renal failure, ketones.'],
    ['AG', 'شکاف اسمولار بالا در اسیدوز با گپ بالا ← متانول یا اتیلن گلیکول.', 'A high osmolar gap in a high gap acidosis → methanol or ethylene glycol.'],
    ['AG', 'آنیون گپ ادرار منفی (neGUTive) یعنی روده: اسهال؛ مثبت یعنی RTA.', 'A negative urine anion gap (neGUTive) means the gut: diarrhea; positive means RTA.'],
    ['AG', 'در DKA بی‌کربنات فقط اگر pH کمتر از ۶٫۹ باشد؛ اول سرم، بعد پتاسیم، بعد انسولین.', 'In DKA, bicarbonate only if the pH is below 6.9; fluids first, then potassium, then insulin.'],
    ['AG', 'درد شکمی شدید با معاینه ناچیز و لاکتات بالا: به ایسکمی مزانتریک فکر کن.', 'Severe abdominal pain with minimal findings and a high lactate: think of mesenteric ischemia.'],
    ['AG', 'وزوز گوش + آلکالوز تنفسی + اسیدوز با گپ بالا = آسپرین، تا خلافش ثابت شود.', 'Tinnitus + respiratory alkalosis + high gap acidosis = aspirin until proven otherwise.'],
    ['AG', 'سالین زیاد اسیدوز هیپرکلرمیک می‌دهد؛ در DKA ممکن است HCO₃ با وجود بسته شدن گپ پایین بماند.', 'Too much saline causes hyperchloremic acidosis; in DKA the HCO₃ may stay low even as the gap closes.'],
    ['CO₂', 'در تشدید COPD، pH کمتر از ۷٫۳۵ با PaCO₂ بالای ۴۵ پس از درمان دارویی یعنی NIV.', 'In a COPD exacerbation, pH below 7.35 with PaCO₂ above 45 after medical treatment means NIV.'],
    ['CO₂', 'در بیمار با هیپرکاپنی مزمن، PCO₂ را به پایه خود بیمار برسان، نه ۴۰؛ وگرنه آلکالوز پس از هیپرکاپنی.', 'In chronic hypercapnia, bring PCO₂ to the patient’s own baseline, not 40; otherwise post-hypercapnic alkalosis.'],
    ['CO₂', 'آلکالمی کلسیم یونیزه را پایین می‌آورد؛ گزگز دور دهان در هیپرونتیلاسیون از همین است.', 'Alkalemia lowers ionized calcium; that is why hyperventilation causes perioral tingling.'],
    ['CO₂', 'در بارداری طبیعی PaCO₂ حدود ۳۰ است.', 'In normal pregnancy PaCO₂ is about 30.'],
    ['CO₂', 'آلکالوز متابولیک: کلر ادرار کمتر از ۲۰ یعنی پاسخ به سالین (استفراغ)؛ بیشتر از ۲۰ و فشار بالا یعنی مینرالوکورتیکوئید.', 'Metabolic alkalosis: urine chloride below 20 means saline responsive (vomiting); above 20 with high blood pressure means mineralocorticoid excess.'],
    ['CO₂', 'درمان آلکالوز ناشی از استفراغ: سالین ۰٫۹٪ + KCl؛ کلیه خودش HCO₃ اضافه را دفع می‌کند.', 'Treating vomiting-induced alkalosis: 0.9% saline + KCl; the kidney then excretes the extra HCO₃ itself.'],
    ['CO₂', 'تزریق خون حجیم آلکالوز می‌دهد؛ سیترات در کبد به بی‌کربنات تبدیل می‌شود.', 'Massive transfusion causes alkalosis; the liver converts citrate to bicarbonate.'],
    ['CO₂', 'جبران تنفسی آلکالوز متابولیک محدود است؛ PCO₂ به ندرت از ۵۵ بالاتر می‌رود.', 'Respiratory compensation for metabolic alkalosis is limited; PCO₂ rarely rises above 55.'],
    ['CO₂', 'تنفس در کیسه کاغذی دیگر توصیه نمی‌شود؛ ممکن است آمبولی یا سکته قلبی را پنهان کند.', 'Breathing into a paper bag is no longer recommended; it may hide an embolism or a heart attack.'],
    ['VBG', 'PCO₂ وریدی کمتر از ۴۵ هیپرکاپنی شریانی را تقریباً رد می‌کند.', 'A venous PCO₂ below 45 almost rules out arterial hypercapnia.'],
    ['VBG', 'pH وریدی حدود ۰٫۰۳ تا ۰٫۰۵ پایین‌تر و PCO₂ وریدی حدود ۳ تا ۸ بالاتر از شریانی است.', 'Venous pH is about 0.03 to 0.05 lower and venous PCO₂ about 3 to 8 higher than arterial.'],
    ['VBG', 'PO₂ وریدی هیچ اطلاعی از ریه نمی‌دهد؛ برای اکسیژناسیون پالس اکسیمتر یا ABG.', 'Venous PO₂ says nothing about the lung; for oxygenation use a pulse oximeter or an ABG.'],
    ['VBG', 'هپارین زیاد یا سرنگ بزرگ نیمه‌پر: PCO₂ و HCO₃ کاذب پایین (اسیدوز متابولیک کاذب).', 'Too much heparin or a half-filled large syringe: falsely low PCO₂ and HCO₃ (a false metabolic acidosis).'],
    ['VBG', 'حباب هوا PCO₂ را پایین و PO₂ را به سمت ۱۵۰ می‌کشد؛ فوراً خارجش کن.', 'An air bubble lowers PCO₂ and pulls PO₂ toward 150; expel it immediately.'],
    ['VBG', 'اگر نمونه بیش از ۱۰ تا ۱۵ دقیقه تا آنالیز فاصله دارد، روی یخ بگذار.', 'If the sample will reach the analyzer more than 10 to 15 minutes later, put it on ice.'],
    ['VBG', 'خون تیره و بی‌ضربان که با کشیدن پیستون می‌آید، وریدی است (مگر در شوک یا ایست).', 'Dark, non-pulsatile blood that comes only when you pull the plunger is venous (unless in shock or arrest).'],
    ['VBG', 'تست آلن: برگشت رنگ کمتر از ۱۰ ثانیه یعنی گردش جانبی اولنار کافی است.', 'Allen test: colour returning in under 10 seconds means the ulnar collateral circulation is adequate.'],
    ['VBG', 'در نوزاد، PaO₂ هدف ۵۰ تا ۸۰ است؛ اکسیژن زیاد رتینوپاتی و آسیب ریه می‌دهد.', 'In newborns the PaO₂ target is 50 to 80; too much oxygen causes retinopathy and lung injury.'],
    ['VBG', 'PaCO₂ زیر ۲۵ در نوزاد نارس خطر PVL و کری دارد.', 'A PaCO₂ below 25 in a premature newborn risks PVL and deafness.'],
    ['VBG', 'ساکاروز ۲۴٪ حدود ۲ دقیقه پیش از نمونه‌گیری نوزاد؛ همراه مکیدن اثرش بیشتر است.', '24% sucrose about 2 minutes before neonatal sampling; it works better with sucking.'],
    ['VBG', 'در CBG از پشت پاشنه نمونه نگیر؛ سطح داخلی یا خارجی پاشنه گرم‌شده.', 'For a CBG never sample the back of the heel; use the medial or lateral surface of a warmed heel.'],
    ['', 'اشتباه‌هایت هدر نمی‌روند؛ در بخش «تمرین» دوباره پرسیده می‌شوند تا ماندگار شوند.', 'Your mistakes aren’t wasted; they come back in Practice until they stick.'],
    ['', 'روزی ۵ دقیقه تمرین منظم از یک جلسه طولانی در هفته ماندگارتر است.', 'Five minutes of regular practice a day sticks better than one long session a week.'],
    ['', 'مسئله‌های محاسباتی را با عبارت هم می‌توانی جواب بدهی، مثلاً <bdi dir="ltr">0.21*713-40/0.8</bdi>', 'You can answer calculation questions with an expression, for example <bdi dir="ltr">0.21*713-40/0.8</bdi>'],
    ['', 'در بخش ابزارها، تفسیرگر ABG هر گاز خون را قدم‌به‌قدم برایت باز می‌کند.', 'In Tools, the ABG interpreter walks you through any blood gas step by step.'],
    ['', 'هر سطح که تمام شود، یک کاراکتر تازه به کلکسیونت اضافه می‌شود.', 'Every level you finish adds a new character to your collection.']
  ];
  const COLORS = { 'O₂': '#1CB0F6', pH: '#A560E8', AG: '#FF9600', 'CO₂': '#FF4B8B', VBG: '#5B6CF0', '': '#12B3A8' };
  let deck = [];
  function next() {
    if (!deck.length) deck = TIPS.map((_, i) => i).sort(() => Math.random() - 0.5);
    return TIPS[deck.pop()];
  }
  function html(t) {
    return `<span class="tip__el" style="--c:${COLORS[t[0]]}">${t[0] || '💡'}</span><span class="tip__t">${EA.lang === 'en' && t[2] ? t[2] : t[1]}</span>`;
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



      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش؛ در برنامه کاری نمی‌کند
    },

    /* ================= ابزارهای بالینی و ماشین‌حساب‌ها ================= */
    tools: function () {
/* هما — ماشین‌حساب‌های گاز خون (تفسیرگر کامل + پنج ابزار)
 * هر ابزار: فیلدها، و تابع محاسبه‌ای که ردیف نتیجه، گام‌های حل، هشدارها و نکته‌ها را برمی‌گرداند. */
(function () {
  const EA = window.EA;
  const { F } = EA;
  const fa = (n, d) => EA.fa(n, d);
  const T = EA.T;
  const n = x => EA.fa(x, 3);
  const HERO = 1; // سومین عضو ردیف: این ردیف نتیجه اصلی است
  const ok = x => typeof x === 'number' && isFinite(x);
  const r1 = x => fa(x, 1);

  const TOOLS = [
    {
      id: 'abg', sym: 'ABG', get name() { return T('تفسیرگر گاز خون', 'Blood gas interpreter'); }, color: '#12B3A8',
      get fields() {
        return [
          { k: 'mode', label: T('نوع نمونه', 'Sample type'), type: 'seg', def: 'abg', opts: [['abg', T('شریانی (ABG)', 'Arterial (ABG)')], ['vbg', T('وریدی (VBG)', 'Venous (VBG)')]] },
          { k: 'pH', label: 'pH', type: 'num', unit: '', def: 7.23 },
          { k: 'pco2', label: 'PCO₂', type: 'num', unit: 'mmHg', def: 22 },
          { k: 'hco3', label: T('HCO₃ (واقعی)', 'HCO₃ (actual)'), type: 'num', unit: 'mEq/L', def: 9 },
          { k: 'po2', label: 'PaO₂', type: 'num', unit: 'mmHg', def: 98, opt: true, show: v => v.mode === 'abg' },
          { k: 'fio2', label: 'FiO₂', type: 'num', unit: '%', def: 21, show: v => v.mode === 'abg' },
          { k: 'age', label: T('سن', 'Age'), type: 'num', unit: T('سال', 'years'), def: 35, opt: true, show: v => v.mode === 'abg' },
          { k: 'na', label: T('سدیم', 'Sodium'), type: 'num', unit: 'mEq/L', def: 138, opt: true },
          { k: 'cl', label: T('کلر', 'Chloride'), type: 'num', unit: 'mEq/L', def: 100, opt: true },
          { k: 'k', label: T('پتاسیم', 'Potassium'), type: 'num', unit: 'mEq/L', def: '', opt: true },
          { k: 'alb', label: T('آلبومین', 'Albumin'), type: 'num', unit: 'g/dL', def: '', opt: true }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const r = EA.interpret({ pH: v.pH, pco2: v.pco2, hco3: v.hco3, po2: v.mode === 'abg' ? v.po2 : NaN, fio2: v.fio2 / 100, age: v.age, na: v.na, cl: v.cl, k: v.k, alb: v.alb, sample: v.mode });
        if (!r) { out.warn.push(T('pH، PCO₂ و HCO₃ باید عدد مثبت باشند.', 'pH, PCO₂ and HCO₃ must be positive numbers.')); return out; }
        out.rows.push([T('تفسیر اسید و باز', 'Acid–base interpretation'), r.summary, HERO]);
        if (r.gas) out.rows.push([T('تبادل گاز', 'Gas exchange'), r.gas.label + (r.gas.sev && r.gas.sev.label ? ` (${r.gas.sev.label})` : '')]);
        if (r.ag) out.rows.push([T('آنیون گپ', 'Anion gap') + (ok(v.alb) ? T(' اصلاح‌شده', ' (corrected)') : ''), r1(r.ag.agc) + ' mEq/L' + (r.ag.high ? ' ▲' : '')]);
        if (r.ag && ok(r.ag.delta)) out.rows.push([T('نسبت دلتا', 'Delta ratio'), fa(r.ag.delta, 2)]);
        if (r.comp && ok(r.comp.exp)) out.rows.push([T('جبران مورد انتظار', 'Expected compensation'), T(`PCO₂ ≈ ${r1(r.comp.lo)} تا ${r1(r.comp.hi)} mmHg`, `PCO₂ ≈ ${r1(r.comp.lo)} to ${r1(r.comp.hi)} mmHg`)]);
        if (r.comp && ok(r.comp.acute)) out.rows.push([T('HCO₃ مورد انتظار', 'Expected HCO₃'), T(`حاد ${r1(r.comp.acute)} • مزمن ${r1(r.comp.chronic)}`, `acute ${r1(r.comp.acute)} • chronic ${r1(r.comp.chronic)}`)]);
        if (r.gas && r.gas.room) out.rows.push([T('گرادیان A–a', 'A–a gradient'), fa(r.gas.aa, 0) + ' mmHg']);
        if (r.gas && !r.gas.room) out.rows.push(['PaO₂/FiO₂', fa(r.gas.pf, 0)]);
        out.rows.push([T('[H⁺] از pH', '[H⁺] from pH'), fa(r.valid.hm, 0) + ' nEq/L']);
        out.steps = r.steps; out.warn = r.warn; out.ok = r.notes;
        out.ok.push(T('ABG را همیشه کنار بالین بیمار تفسیر کن؛ این ابزار جایگزین قضاوت بالینی نیست.', 'Always interpret an ABG at the bedside; this tool does not replace clinical judgment.'));
        return out;
      }
    },
    {
      id: 'ag', sym: 'AG', get name() { return T('آنیون گپ و شکاف‌ها', 'Anion gap & gaps'); }, color: '#FF9600',
      get fields() {
        return [
          { k: 'mode', label: T('محاسبه', 'Calculation'), type: 'seg', def: 'ag', opts: [['ag', T('آنیون گپ سرم', 'Serum anion gap')], ['osm', T('شکاف اسمولار', 'Osmolar gap')], ['uag', T('آنیون گپ ادرار', 'Urine anion gap')]] },
          { k: 'na', label: T('سدیم', 'Sodium'), type: 'num', unit: 'mEq/L', def: 140, show: v => v.mode !== 'uag' },
          { k: 'cl', label: T('کلر', 'Chloride'), type: 'num', unit: 'mEq/L', def: 100, show: v => v.mode === 'ag' },
          { k: 'hco3', label: 'HCO₃', type: 'num', unit: 'mEq/L', def: 12, show: v => v.mode === 'ag' },
          { k: 'k', label: T('پتاسیم', 'Potassium'), type: 'num', unit: 'mEq/L', def: '', opt: true, show: v => v.mode === 'ag' },
          { k: 'alb', label: T('آلبومین', 'Albumin'), type: 'num', unit: 'g/dL', def: '', opt: true, show: v => v.mode === 'ag' },
          { k: 'glu', label: T('قند', 'Glucose'), type: 'num', unit: 'mg/dL', def: 100, show: v => v.mode === 'osm' },
          { k: 'bun', label: 'BUN', type: 'num', unit: 'mg/dL', def: 14, show: v => v.mode === 'osm' },
          { k: 'mosm', label: T('اسمولالیته اندازه‌گیری‌شده', 'Measured osmolality'), type: 'num', unit: 'mOsm/kg', def: 320, show: v => v.mode === 'osm' },
          { k: 'etoh', label: T('اتانول خون', 'Blood ethanol'), type: 'num', unit: 'mg/dL', def: '', opt: true, show: v => v.mode === 'osm' },
          { k: 'una', label: T('سدیم ادرار', 'Urine sodium'), type: 'num', unit: 'mEq/L', def: 40, show: v => v.mode === 'uag' },
          { k: 'uk', label: T('پتاسیم ادرار', 'Urine potassium'), type: 'num', unit: 'mEq/L', def: 30, show: v => v.mode === 'uag' },
          { k: 'ucl', label: T('کلر ادرار', 'Urine chloride'), type: 'num', unit: 'mEq/L', def: 100, show: v => v.mode === 'uag' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'osm') {
          const c = F.osm(v.na, v.glu, v.bun), et = ok(v.etoh) ? v.etoh / 3.7 : 0, g = v.mosm - c - et;
          out.rows.push([T('شکاف اسمولار', 'Osmolar gap'), fa(g, 0) + ' mOsm/kg', HERO], [T('اسمولالیته محاسبه‌شده', 'Calculated osmolality'), fa(c, 0) + ' mOsm/kg']);
          out.steps.push(`${n(2)} × ${fa(v.na)} + ${fa(v.glu)} ÷ ${n(18)} + ${fa(v.bun)} ÷ ${n(2.8)} = <b>${fa(c, 0)}</b>`);
          if (et) out.steps.push(T(`سهم اتانول = ${fa(v.etoh)} ÷ ${n(3.7)} = ${fa(et, 0)}`, `Ethanol contribution = ${fa(v.etoh)} ÷ ${n(3.7)} = ${fa(et, 0)}`));
          out.steps.push(T(`شکاف = ${fa(v.mosm)} − ${fa(c, 0)}${et ? ' − ' + fa(et, 0) : ''} = <b>${fa(g, 0)}</b>`, `Gap = ${fa(v.mosm)} − ${fa(c, 0)}${et ? ' − ' + fa(et, 0) : ''} = <b>${fa(g, 0)}</b>`));
          if (g > 10) out.warn.push(T('شکاف اسمولار بالاست؛ در اسیدوز با گپ بالا به متانول یا اتیلن گلیکول فکر کن (فومپیزول و دیالیز).', 'The osmolar gap is high; in a high anion gap acidosis think of methanol or ethylene glycol (fomepizole and dialysis).'));
          else out.ok.push(T('شکاف طبیعی است (کمتر از ۱۰)؛ ولی در ساعت‌های دیر مسمومیت، الکل متابولیزه شده و شکاف ممکن است طبیعی باشد.', 'The gap is normal (below 10); but late in a poisoning the alcohol has been metabolized and the gap may be normal.'));
          return out;
        }
        if (v.mode === 'uag') {
          const u = F.uag(v.una, v.uk, v.ucl);
          out.rows.push([T('آنیون گپ ادرار', 'Urine anion gap'), fa(u) + ' mEq/L', HERO], [T('تفسیر', 'Interpretation'), u < 0 ? T('منفی: دفع آمونیوم سالم؛ علت گوارشی (اسهال)', 'Negative: ammonium excretion intact; gastrointestinal cause (diarrhea)') : T('مثبت: دفع آمونیوم مختل؛ اسیدوز توبولار کلیوی', 'Positive: impaired ammonium excretion; renal tubular acidosis')]);
          out.steps.push(`(${fa(v.una)} + ${fa(v.uk)}) − ${fa(v.ucl)} = <b>${fa(u)}</b>`);
          out.ok.push(T('فقط در اسیدوز متابولیک با آنیون گپ طبیعی و وقتی سدیم ادرار بالای ۲۰ است معتبر است.', 'Valid only in a normal anion gap metabolic acidosis and when urine sodium is above 20.'));
          return out;
        }
        const ag = F.ag(v.na, v.cl, v.hco3), hasAlb = ok(v.alb), agc = hasAlb ? F.agCorr(ag, v.alb) : ag;
        out.rows.push([hasAlb ? T('آنیون گپ اصلاح‌شده', 'Corrected anion gap') : T('آنیون گپ', 'Anion gap'), r1(agc) + ' mEq/L', HERO]);
        out.steps.push(T(`${fa(v.na)} − (${fa(v.cl)} + ${fa(v.hco3)}) = <b>${r1(ag)}</b> (طبیعی حدود ۱۲ ± ۴)`, `${fa(v.na)} − (${fa(v.cl)} + ${fa(v.hco3)}) = <b>${r1(ag)}</b> (normal about 12 ± 4)`));
        if (hasAlb) { out.rows.push([T('آنیون گپ خام', 'Raw anion gap'), r1(ag) + ' mEq/L']); out.steps.push(`${r1(ag)} + ${n(2.5)} × (${n(4)} − ${fa(v.alb)}) = <b>${r1(agc)}</b>`); }
        if (ok(v.k)) { const ak = F.ag(v.na, v.cl, v.hco3, v.k); out.rows.push([T('با پتاسیم (روش کتاب)', 'With potassium (book method)'), r1(ak) + T(' mEq/L (طبیعی ۱۰ تا ۲۰)', ' mEq/L (normal 10–20)')]); }
        if (agc > 16 && v.hco3 < 24) {
          const d = F.delta(agc, v.hco3), ch = F.hcoCorr(agc, v.hco3);
          out.rows.push([T('نسبت دلتا', 'Delta ratio'), fa(d, 2)], [T('HCO₃ اصلاح‌شده', 'Corrected HCO₃'), r1(ch) + ' mEq/L']);
          out.steps.push(T(`دلتا = (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(v.hco3)}) = <b>${fa(d, 2)}</b>`, `Delta = (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(v.hco3)}) = <b>${fa(d, 2)}</b>`), T(`HCO₃ اصلاح‌شده = ${fa(v.hco3)} + (${r1(agc)} − ${n(12)}) = <b>${r1(ch)}</b>`, `Corrected HCO₃ = ${fa(v.hco3)} + (${r1(agc)} − ${n(12)}) = <b>${r1(ch)}</b>`));
          if (24 - v.hco3 < 4) out.ok.push(T('افت HCO₃ کمتر از ۴ است؛ نسبت دلتا قابل اعتماد نیست.', 'The HCO₃ drop is less than 4; the delta ratio is not reliable.'));
          else if (d < 1) out.warn.push(T('نسبت دلتا کمتر از ۱: اسیدوز با گپ طبیعی هم همراه است (مثلاً اسهال یا سالین زیاد).', 'Delta ratio below 1: a normal anion gap acidosis is also present (e.g. diarrhea or large volumes of saline).'));
          else if (d > 2) out.warn.push(T('نسبت دلتا بیشتر از ۲: آلکالوز متابولیک هم‌زمان (مثلاً استفراغ) یا HCO₃ بالای قبلی.', 'Delta ratio above 2: a coexisting metabolic alkalosis (e.g. vomiting) or a previously high HCO₃.'));
          else out.ok.push(T('نسبت دلتا بین ۱ و ۲: اسیدوز متابولیک خالص با گپ بالا.', 'Delta ratio between 1 and 2: a pure high anion gap metabolic acidosis.'));
          out.ok.push(T('GOLDMARK: گلیکول‌ها، ۵-اکسوپرولین، ال-لاکتات، دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتواسیدوز.', 'GOLDMARK: glycols, 5-oxoproline, L-lactate, D-lactate, methanol, aspirin, renal failure, ketoacidosis.'));
        } else if (agc > 20) out.warn.push(T('آنیون گپ بیش از ۲۰ با HCO₃ غیرپایین: اسیدوز پنهان + آلکالوز متابولیک.', 'Anion gap above 20 with a non-low HCO₃: hidden acidosis + metabolic alkalosis.'));
        else if (agc <= 16 && v.hco3 < 22) out.ok.push(T('اسیدوز با گپ طبیعی (هیپرکلرمیک): اسهال، RTA، سالین فراوان، استازولامید؛ آنیون گپ ادرار را حساب کن.', 'Normal anion gap (hyperchloremic) acidosis: diarrhea, RTA, large volumes of saline, acetazolamide; calculate the urine anion gap.'));
        if (!hasAlb) out.ok.push(T('آلبومین پایین گپ را کاذب پایین نشان می‌دهد؛ اگر داری، واردش کن.', 'Low albumin makes the gap falsely low; enter it if you have it.'));
        return out;
      }
    },
    {
      id: 'comp', sym: 'Δ', get name() { return T('جبران مورد انتظار', 'Expected compensation'); }, color: '#A560E8',
      get fields() {
        return [
          { k: 'mode', label: T('اختلال اولیه', 'Primary disorder'), type: 'seg', def: 'macid', opts: [['macid', T('اسیدوز متابولیک', 'Metabolic acidosis')], ['malk', T('آلکالوز متابولیک', 'Metabolic alkalosis')], ['racid', T('اسیدوز تنفسی', 'Respiratory acidosis')], ['ralk', T('آلکالوز تنفسی', 'Respiratory alkalosis')]] },
          { k: 'hco3', label: T('HCO₃ بیمار', 'Patient HCO₃'), type: 'num', unit: 'mEq/L', def: 14 },
          { k: 'pco2', label: T('PCO₂ بیمار', 'Patient PCO₂'), type: 'num', unit: 'mmHg', def: 30 }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'macid' || v.mode === 'malk') {
          const acid = v.mode === 'macid';
          const e = acid ? F.winter(v.hco3) : F.malk(v.hco3), tol = acid ? 2 : 5;
          out.rows.push([T('PCO₂ مورد انتظار', 'Expected PCO₂'), T(`${r1(e - tol)} تا ${r1(e + tol)} mmHg`, `${r1(e - tol)} to ${r1(e + tol)} mmHg`), HERO]);
          out.steps.push(acid ? T(`وینتر: ${n(1.5)} × ${fa(v.hco3)} + ${n(8)} = <b>${r1(e)}</b> ± ${n(2)}`, `Winter: ${n(1.5)} × ${fa(v.hco3)} + ${n(8)} = <b>${r1(e)}</b> ± ${n(2)}`) : T(`${n(40)} + ${n(0.7)} × (${fa(v.hco3)} − ${n(24)}) = <b>${r1(e)}</b> ± ${n(5)} (یا HCO₃ + ۱۵ = ${r1(v.hco3 + 15)})`, `${n(40)} + ${n(0.7)} × (${fa(v.hco3)} − ${n(24)}) = <b>${r1(e)}</b> ± ${n(5)} (or HCO₃ + 15 = ${r1(v.hco3 + 15)})`));
          const verdict = v.pco2 > e + tol ? T('اسیدوز تنفسی همراه', 'Concurrent respiratory acidosis') : v.pco2 < e - tol ? T('آلکالوز تنفسی همراه', 'Concurrent respiratory alkalosis') : T('جبران مناسب (اختلال ساده)', 'Appropriate compensation (simple disorder)');
          out.rows.push([T('PCO₂ بیمار', 'Patient PCO₂'), fa(v.pco2) + ' mmHg'], [T('نتیجه', 'Result'), verdict]);
          if (acid && v.hco3 >= 22) out.warn.push(T('HCO₃ پایین نیست؛ مطمئنی اسیدوز متابولیک وجود دارد؟', 'HCO₃ is not low; are you sure there is a metabolic acidosis?'));
          if (!acid && v.hco3 <= 26) out.warn.push(T('HCO₃ بالا نیست؛ مطمئنی آلکالوز متابولیک وجود دارد؟', 'HCO₃ is not high; are you sure there is a metabolic alkalosis?'));
          if (acid) out.ok.push(T('قاعده سریع: PCO₂ ≈ دو رقم اعشار pH (در اسیدوز متابولیک ساده).', 'Quick rule: PCO₂ ≈ the two decimal digits of the pH (in a simple metabolic acidosis).'));
          else out.ok.push(T('جبران تنفسی آلکالوز محدود است؛ PCO₂ به ندرت از ۵۵ بالاتر می‌رود.', 'Respiratory compensation for alkalosis is limited; PCO₂ rarely rises above 55.'));
          return out;
        }
        const up = v.mode === 'racid';
        const a = up ? F.racid(v.pco2, false) : F.ralk(v.pco2, false), c = up ? F.racid(v.pco2, true) : Math.max(12, F.ralk(v.pco2, true));
        out.rows.push([T('HCO₃ مورد انتظار', 'Expected HCO₃'), T(`حاد ${r1(a)} • مزمن ${r1(c)} mEq/L`, `acute ${r1(a)} • chronic ${r1(c)} mEq/L`), HERO]);
        out.steps.push(up ? T(`حاد: ${n(24)} + ${n(0.1)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(a)}</b>`, `Acute: ${n(24)} + ${n(0.1)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(a)}</b>`) : T(`حاد: ${n(24)} − ${n(0.2)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(a)}</b>`, `Acute: ${n(24)} − ${n(0.2)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(a)}</b>`),
          up ? T(`مزمن: ${n(24)} + ${n(0.4)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(c)}</b>`, `Chronic: ${n(24)} + ${n(0.4)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(c)}</b>`) : T(`مزمن: ${n(24)} − ${n(0.4)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(c)}</b>`, `Chronic: ${n(24)} − ${n(0.4)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(c)}</b>`));
        let verdict;
        if (up) verdict = v.hco3 < a - 3 ? T('اسیدوز متابولیک همراه', 'Concurrent metabolic acidosis') : v.hco3 > c + 2 ? T('آلکالوز متابولیک همراه', 'Concurrent metabolic alkalosis') : v.hco3 <= a + 3 ? T('حاد', 'Acute') : v.hco3 >= c - 2 ? T('مزمن (جبران‌شده)', 'Chronic (compensated)') : T('حاد روی مزمن یا در حال جبران', 'Acute on chronic, or still compensating');
        else verdict = v.hco3 > a + 3 ? T('آلکالوز متابولیک همراه', 'Concurrent metabolic alkalosis') : v.hco3 < c - 2 ? T('اسیدوز متابولیک همراه', 'Concurrent metabolic acidosis') : v.hco3 >= a - 3 ? T('حاد', 'Acute') : v.hco3 <= c + 2 ? T('مزمن', 'Chronic') : T('در حال جبران', 'Still compensating');
        out.rows.push([T('HCO₃ بیمار', 'Patient HCO₃'), fa(v.hco3) + ' mEq/L'], [T('نتیجه', 'Result'), verdict]);
        if (up) out.rows.push([T('pH مورد انتظار', 'Expected pH'), T(`حاد ${fa(F.racidPh(v.pco2, false), 2)} • مزمن ${fa(F.racidPh(v.pco2, true), 2)}`, `acute ${fa(F.racidPh(v.pco2, false), 2)} • chronic ${fa(F.racidPh(v.pco2, true), 2)}`)]);
        if (up && v.pco2 <= 45) out.warn.push(T('PCO₂ بالا نیست؛ مطمئنی اسیدوز تنفسی وجود دارد؟', 'PCO₂ is not high; are you sure there is a respiratory acidosis?'));
        if (!up && v.pco2 >= 35) out.warn.push(T('PCO₂ پایین نیست؛ مطمئنی آلکالوز تنفسی وجود دارد؟', 'PCO₂ is not low; are you sure there is a respiratory alkalosis?'));
        out.ok.push(T('رمز: «۱-۴ بالا، ۲-۴ پایین» به ازای هر ۱۰ mmHg تغییر PCO₂.', 'Mnemonic: “1-4 up, 2-4 down” for every 10 mmHg change in PCO₂.'));
        return out;
      }
    },
    {
      id: 'oxy', sym: 'O₂', get name() { return T('اکسیژناسیون', 'Oxygenation'); }, color: '#1CB0F6',
      get fields() {
        return [
          { k: 'fio2', label: 'FiO₂', type: 'num', unit: '%', def: 21 },
          { k: 'po2', label: 'PaO₂', type: 'num', unit: 'mmHg', def: 70 },
          { k: 'pco2', label: 'PaCO₂', type: 'num', unit: 'mmHg', def: 35 },
          { k: 'age', label: T('سن', 'Age'), type: 'num', unit: T('سال', 'years'), def: 50 },
          { k: 'patm', label: T('فشار هوا', 'Barometric pressure'), type: 'num', unit: 'mmHg', def: 760 },
          { k: 'hb', label: T('هموگلوبین', 'Hemoglobin'), type: 'num', unit: 'g/dL', def: '', opt: true },
          { k: 'sao2', label: 'SaO₂', type: 'num', unit: '%', def: '', opt: true }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const f = v.fio2 / 100, pa = F.pAO2(f, v.pco2, v.patm), aa = pa - v.po2, pf = v.po2 / f, room = Math.abs(v.fio2 - 21) < 0.5;
        const e = F.aaExp(v.age);
        out.rows.push([room ? T('گرادیان A–a', 'A–a gradient') : T('نسبت PaO₂/FiO₂', 'PaO₂/FiO₂ ratio'), room ? fa(aa, 0) + ' mmHg' : fa(pf, 0), HERO]);
        out.rows.push(['PAO₂', fa(pa, 0) + ' mmHg']);
        if (room) out.rows.push([T('A–a مورد انتظار برای سن', 'Expected A–a for age'), '≤ ' + fa(e, 0) + ' mmHg'], [T('نسبت P/F', 'P/F ratio'), fa(pf, 0)]);
        else out.rows.push([T('گرادیان A–a', 'A–a gradient'), fa(aa, 0) + ' mmHg'], [T('PaO₂ مورد انتظار (۵ × FiO₂)', 'Expected PaO₂ (5 × FiO₂)'), '≈ ' + fa(F.expPao2(v.fio2), 0) + ' mmHg']);
        out.steps.push(`PAO₂ = ${fa(f, 2)} × (${fa(v.patm)} − ${n(47)}) − ${fa(v.pco2)} ÷ ${n(0.8)} = <b>${fa(pa, 0)}</b>`, `A–a = ${fa(pa, 0)} − ${fa(v.po2)} = <b>${fa(aa, 0)}</b>`, `P/F = ${fa(v.po2)} ÷ ${fa(f, 2)} = <b>${fa(pf, 0)}</b>`);
        if (room) {
          const s = F.hypoxSev(v.po2);
          if (s) out.rows.push([T('شدت هیپوکسمی', 'Hypoxemia severity'), s.label]);
          if (aa > e + 2) out.warn.push(T('گرادیان A–a بالاست: مشکل در خود ریه (V/Q، شانت یا انتشار).', 'The A–a gradient is high: the problem is in the lung itself (V/Q mismatch, shunt or diffusion).'));
          else if (v.po2 < 80) out.ok.push(T('هیپوکسمی با A–a طبیعی: هیپوونتیلاسیون یا اکسیژن کم هوای دمی (ارتفاع).', 'Hypoxemia with a normal A–a: hypoventilation or low inspired oxygen (altitude).'));
          if (v.po2 + v.pco2 > 150) out.warn.push(T('در هوای اتاق PaO₂ + PaCO₂ نباید از ۱۴۰ تا ۱۵۰ بیشتر شود؛ حباب یا اکسیژن؟', 'On room air, PaO₂ + PaCO₂ should not exceed 140–150; an air bubble, or supplemental oxygen?'));
        } else {
          const ps = F.pfSev(pf);
          out.rows.push([T('اختلال اکسیژناسیون', 'Impaired oxygenation'), ps ? ps.label : T('ندارد (P/F بیش از ۳۰۰)', 'None (P/F above 300)')]);
          if (ps) out.ok.push(T('اگر شروع حاد، ارتشاح دوطرفه و رد علت قلبی با PEEP ≥ ۵ باشد، این همان طبقه‌بندی ARDS (برلین) است.', 'With acute onset, bilateral infiltrates and a cardiac cause ruled out on PEEP ≥ 5, this is the ARDS (Berlin) classification.'));
        }
        if (ok(v.hb) && ok(v.sao2)) {
          const c = F.cao2(v.hb, v.sao2, v.po2);
          out.rows.push([T('محتوای اکسیژن (CaO₂)', 'Oxygen content (CaO₂)'), fa(c, 1) + ' mL/dL']);
          out.steps.push(T(`CaO₂ = ${n(1.34)} × ${fa(v.hb)} × ${fa(v.sao2 / 100, 2)} + ${n(0.003)} × ${fa(v.po2)} = <b>${fa(c, 1)}</b> (طبیعی ۱۸ تا ۲۰)`, `CaO₂ = ${n(1.34)} × ${fa(v.hb)} × ${fa(v.sao2 / 100, 2)} + ${n(0.003)} × ${fa(v.po2)} = <b>${fa(c, 1)}</b> (normal 18–20)`));
          if (c < 15) out.warn.push(T('محتوای اکسیژن کم است؛ اگر علتش کم‌خونی است، اکسیژن بیشتر کمکی نمی‌کند.', 'Oxygen content is low; if anemia is the cause, more oxygen will not help.'));
        }
        if (v.po2 > pa + 5) out.warn.push(T('PaO₂ از PAO₂ بیشتر است که ممکن نیست؛ FiO₂ را بررسی کن.', 'PaO₂ is higher than PAO₂, which is impossible; check the FiO₂.'));
        out.ok.push(T('در سطح دریا فشار هوا ۷۶۰ است؛ برای ارتفاع (مثلاً تهران حدود ۶۶۰) عدد را تغییر بده.', 'Barometric pressure at sea level is 760; change it for altitude (e.g. about 660 in Tehran).'));
        return out;
      }
    },
    {
      id: 'bicarb', sym: 'HCO₃', get name() { return T('بی‌کربنات', 'Bicarbonate'); }, color: '#5B6CF0',
      get fields() {
        return [
          { k: 'mode', label: T('بیمار', 'Patient'), type: 'seg', def: 'adult', opts: [['adult', T('بزرگسال (از روی HCO₃)', 'Adult (from HCO₃)')], ['neo', T('نوزاد (از روی BE)', 'Neonate (from BE)')]] },
          { k: 'w', label: T('وزن', 'Weight'), type: 'num', unit: 'kg', def: 70 },
          { k: 'hco3', label: T('HCO₃ فعلی', 'Current HCO₃'), type: 'num', unit: 'mEq/L', def: 6, show: v => v.mode === 'adult' },
          { k: 'target', label: T('HCO₃ هدف', 'Target HCO₃'), type: 'num', unit: 'mEq/L', def: 12, show: v => v.mode === 'adult' },
          { k: 'be', label: T('BE (کمبود باز)', 'BE (base deficit)'), type: 'num', unit: 'mEq/L', def: -12, show: v => v.mode === 'neo' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        let d;
        if (v.mode === 'adult') {
          d = F.bicarbDef(v.w, v.hco3, v.target);
          out.steps.push(`${n(0.5)} × ${fa(v.w)} × (${fa(v.target)} − ${fa(v.hco3)}) = <b>${fa(d, 0)}</b> mEq`);
          if (v.target > 15) out.warn.push(T('هدف معمولاً رفع اسیدمی تهدیدکننده است (HCO₃ حدود ۱۲ تا ۱۵ یا pH بالای ۷٫۲)، نه رساندن به حد طبیعی.', 'The goal is usually to reverse life-threatening acidemia (HCO₃ about 12–15 or pH above 7.2), not to normalize it.'));
          out.ok.push(T('اندیکاسیون: pH کمتر از ۷٫۱ (کتاب)، به‌ویژه با آسیب حاد کلیه یا از دست رفتن HCO₃ (اسهال، RTA). در DKA فقط اگر pH کمتر از ۶٫۹.', 'Indication: pH below 7.1 (book), especially with acute kidney injury or HCO₃ loss (diarrhea, RTA). In DKA only if pH is below 6.9.'));
        } else {
          d = F.bicarbBE(v.w, v.be);
          out.steps.push(`${fa(Math.abs(v.be))} × ${fa(v.w)} × ${n(0.3)} = <b>${fa(d, 1)}</b> mEq`);
          out.ok.push(T('در نوزاد روتین نیست؛ اول اکسیژن‌رسانی و پرفیوژن. رقیق ۱:۱ با آب مقطر (۴٫۲٪) و آهسته طی ۳۰ تا ۶۰ دقیقه.', 'Not routine in neonates; oxygenation and perfusion come first. Dilute 1:1 with sterile water (4.2%) and give slowly over 30–60 minutes.'));
          if (v.be > -2) out.warn.push(T('BE منفی‌تر از −۲ نیست.', 'BE is not more negative than −2.'));
        }
        d = Math.max(0, d);
        out.rows.push([T('کل بی‌کربنات محاسبه‌شده', 'Total calculated bicarbonate'), fa(d, v.mode === 'neo' ? 1 : 0) + ' mEq', HERO], [T('نیمه اول پیشنهادی', 'Suggested first half'), fa(d / 2, 1) + ' mEq'], [T('حجم ۸٫۴٪ (۱ mEq/mL)', 'Volume of 8.4% (1 mEq/mL)'), fa(d, 1) + ' mL'], [T('حجم ۴٫۲٪ (۰٫۵ mEq/mL)', 'Volume of 4.2% (0.5 mEq/mL)'), fa(d * 2, 1) + ' mL']);
        out.warn.push(T('بی‌کربنات CO₂ تولید می‌کند؛ اگر بیمار نمی‌تواند تهویه‌اش را بالا ببرد (اسیدوز مختلط)، اسیدوز تنفسی بدتر می‌شود.', 'Bicarbonate generates CO₂; if the patient cannot raise their ventilation (mixed acidosis), the respiratory acidosis gets worse.'));
        out.ok.push(T('پتاسیم و کلسیم یونیزه را پایش کن؛ پس از هر نوبت گاز خون را تکرار کن.', 'Monitor potassium and ionized calcium; repeat the blood gas after each dose.'));
        return out;
      }
    },
    {
      id: 'conv', sym: '⇄', get name() { return T('تبدیل‌ها', 'Conversions'); }, color: '#58CC02',
      get fields() {
        return [
          { k: 'mode', label: T('تبدیل', 'Conversion'), type: 'seg', def: 'ph', opts: [['ph', 'pH ↔ H⁺'], ['kpa', 'kPa ↔ mmHg'], ['vbg', T('VBG ← ABG تقریبی', 'VBG → approximate ABG')], ['lac', T('لاکتات', 'Lactate')]] },
          { k: 'val', label: T('مقدار', 'Value'), type: 'num', unit: '', def: 7.3, show: v => v.mode !== 'vbg' },
          { k: 'pH', label: T('pH وریدی', 'Venous pH'), type: 'num', unit: '', def: 7.3, show: v => v.mode === 'vbg' },
          { k: 'pco2', label: T('PCO₂ وریدی', 'Venous PCO₂'), type: 'num', unit: 'mmHg', def: 50, show: v => v.mode === 'vbg' },
          { k: 'hco3', label: T('HCO₃ وریدی', 'Venous HCO₃'), type: 'num', unit: 'mEq/L', def: 25, show: v => v.mode === 'vbg' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'ph') {
          if (v.val < 14) {
            const h = F.hFromPh(v.val);
            out.rows.push(['[H⁺]', fa(h, 1) + ' nEq/L', HERO], [T('قاعده ۸۰ منهای اعشار', 'The 80-minus-decimals rule'), fa(F.h80(v.val)) + ' nEq/L']);
            out.steps.push(T(`[H⁺] = ۱۰<sup>(۹ − ${fa(v.val, 2)})</sup> = <b>${fa(h, 1)}</b>`, `[H⁺] = 10<sup>(9 − ${fa(v.val, 2)})</sup> = <b>${fa(h, 1)}</b>`));
            if (v.val < 7.2 || v.val > 7.5) out.ok.push(T('قاعده ۸۰ منهای اعشار فقط بین ۷٫۲۰ و ۷٫۵۰ دقیق است.', 'The 80-minus-decimals rule is accurate only between 7.20 and 7.50.'));
          } else {
            const p = F.phFromH(v.val);
            out.rows.push(['pH', fa(p, 2), HERO]);
            out.steps.push(T(`pH = ۹ − log(${fa(v.val)}) = <b>${fa(p, 2)}</b>`, `pH = 9 − log(${fa(v.val)}) = <b>${fa(p, 2)}</b>`));
          }
          out.ok.push(T('عدد کمتر از ۱۴ را pH و بزرگ‌تر را [H⁺] (nEq/L) در نظر می‌گیرم.', 'I treat a number below 14 as pH and a larger one as [H⁺] (nEq/L).'));
          return out;
        }
        if (v.mode === 'kpa') {
          out.rows.push([T('اگر kPa است ← mmHg', 'If kPa → mmHg'), fa(F.mmhg(v.val), 1), HERO], [T('اگر mmHg است ← kPa', 'If mmHg → kPa'), fa(F.kpa(v.val), 2)]);
          out.ok.push(T('۱ kPa = ۷٫۵ mmHg. نکته کتاب «FiO₂ (٪) منهای PaO₂ کمتر از ۱۰» در اصل به kPa است.', '1 kPa = 7.5 mmHg. The book’s tip “FiO₂ (%) minus PaO₂ less than 10” is originally in kPa.'));
          return out;
        }
        if (v.mode === 'lac') {
          out.rows.push([T('اگر mg/dL است ← mmol/L', 'If mg/dL → mmol/L'), fa(v.val / 9.01, 2), HERO], [T('اگر mmol/L است ← mg/dL', 'If mmol/L → mg/dL'), fa(v.val * 9.01, 1)]);
          out.ok.push(T('لاکتات طبیعی کمتر از ۲ mmol/L (حدود ۱۸ mg/dL)؛ بالای ۴ در سپسیس یعنی خطر بالا.', 'Normal lactate is below 2 mmol/L (about 18 mg/dL); above 4 in sepsis means high risk.'));
          return out;
        }
        const a = F.vbgToAbg({ pH: v.pH, pco2: v.pco2, hco3: v.hco3 });
        out.rows.push([T('pH شریانی تقریبی', 'Approximate arterial pH'), T(`${fa(v.pH + 0.03, 2)} تا ${fa(v.pH + 0.05, 2)}`, `${fa(v.pH + 0.03, 2)} to ${fa(v.pH + 0.05, 2)}`), HERO], [T('PCO₂ شریانی تقریبی', 'Approximate arterial PCO₂'), T(`${fa(v.pco2 - 8, 0)} تا ${fa(v.pco2 - 3, 0)} mmHg`, `${fa(v.pco2 - 8, 0)} to ${fa(v.pco2 - 3, 0)} mmHg`)], [T('HCO₃ شریانی تقریبی', 'Approximate arterial HCO₃'), T(`${fa(v.hco3 - 2, 0)} تا ${fa(v.hco3 - 1, 0)} mEq/L`, `${fa(v.hco3 - 2, 0)} to ${fa(v.hco3 - 1, 0)} mEq/L`)]);
        out.steps.push(T(`تخمین میانه: pH ≈ ${fa(a.pH, 2)}، PCO₂ ≈ ${fa(a.pco2, 0)}، HCO₃ ≈ ${fa(a.hco3, 1)}`, `Midpoint estimate: pH ≈ ${fa(a.pH, 2)}, PCO₂ ≈ ${fa(a.pco2, 0)}, HCO₃ ≈ ${fa(a.hco3, 1)}`));
        if (v.pco2 < 45) out.ok.push(T('PCO₂ وریدی کمتر از ۴۵: هیپرکاپنی شریانی تقریباً رد می‌شود.', 'Venous PCO₂ below 45: arterial hypercapnia is nearly ruled out.'));
        out.warn.push(T('در شوک یا پرفیوژن ضعیف این تبدیل قابل اعتماد نیست؛ برای اکسیژناسیون از VBG استفاده نکن.', 'In shock or poor perfusion this conversion is unreliable; do not use a VBG for oxygenation.'));
        return out;
      }
    }
  ];

  /* ---------- اطلاعات نمایشی هر ابزار: توضیح، بیمار نمونه، گروه فیلدها، گام دکمه‌ها، شدت ---------- */
  const GROUPS = { l: () => T('🧪 گاز خون', '🧪 Blood gas'), o: () => T('🫁 اکسیژن و بیمار', '🫁 Oxygen & patient'), e: () => T('🧂 الکترولیت‌ها (برای آنیون گپ)', '🧂 Electrolytes (for the anion gap)'), p: () => T('👤 بیمار', '👤 Patient'), u: () => T('🚽 ادرار', '🚽 Urine') };
  const S_ = (lv, t) => [lv, t];
  const phSev = pH => pH < 7.25 ? S_('sev', T('اسیدمی شدید', 'Severe acidemia')) : pH < 7.35 ? S_('mod', T('اسیدمی', 'Acidemia')) : pH > 7.55 ? S_('sev', T('آلکالمی شدید', 'Severe alkalemia')) : pH > 7.45 ? S_('mild', T('آلکالمی', 'Alkalemia')) : S_('ok', T('pH طبیعی', 'Normal pH'));
  const META = {
    abg: {
      get desc() { return T('تفسیر گام‌به‌گام: راستی‌آزمایی، اختلال اولیه، جبران، آنیون گپ، دلتا و تبادل گاز', 'Step-by-step interpretation: validity check, primary disorder, compensation, anion gap, delta and gas exchange'); },
      preset: { mode: 'abg', pH: 7.39, pco2: 24, hco3: 14, po2: 82, fio2: 21, age: 70, na: 140, cl: 104, k: 4.2, alb: 3.4 },
      group: { po2: 'o', fio2: 'o', age: 'o', na: 'e', cl: 'e', k: 'e', alb: 'e' },
      step: { pH: 0.01, pco2: 1, hco3: 0.5, po2: 1, fio2: 1, age: 1, na: 1, cl: 1, k: 0.1, alb: 0.1 },
      sev: v => (ok(v.pH) ? phSev(v.mode === 'vbg' ? v.pH + 0.04 : v.pH) : null)
    },
    ag: {
      get desc() { return T('آنیون گپ و اصلاح با آلبومین، دلتا، شکاف اسمولار و آنیون گپ ادرار', 'Anion gap with albumin correction, delta, osmolar gap and urine anion gap'); },
      preset: { mode: 'ag', na: 136, cl: 99, hco3: 9.5, k: 4.5, alb: 3.2 },
      group: { una: 'u', uk: 'u', ucl: 'u' },
      step: { na: 1, cl: 1, hco3: 0.5, k: 0.1, alb: 0.1, glu: 10, bun: 1, mosm: 1, etoh: 10, una: 1, uk: 1, ucl: 1 },
      sev(v) {
        if (v.mode === 'ag') { const a = ok(v.alb) ? F.agCorr(F.ag(v.na, v.cl, v.hco3), v.alb) : F.ag(v.na, v.cl, v.hco3); return a > 20 ? S_('sev', T('گپ بالا', 'High gap')) : a > 16 ? S_('mild', T('گپ کمی بالا', 'Slightly high gap')) : S_('ok', T('گپ طبیعی', 'Normal gap')); }
        if (v.mode === 'osm') { const g = v.mosm - F.osm(v.na, v.glu, v.bun) - (ok(v.etoh) ? v.etoh / 3.7 : 0); return g > 20 ? S_('sev', T('شکاف بالا', 'High gap')) : g > 10 ? S_('mod', T('شکاف مرزی تا بالا', 'Borderline to high gap')) : S_('ok', T('شکاف طبیعی', 'Normal gap')); }
        return F.uag(v.una, v.uk, v.ucl) < 0 ? S_('ok', T('منفی: گوارشی', 'Negative: GI')) : S_('mod', T('مثبت: کلیوی', 'Positive: renal'));
      }
    },
    comp: {
      get desc() { return T('وینتر، ۰٫۷ برای آلکالوز، و قانون ۱-۴ / ۲-۴ برای اختلالات تنفسی', 'Winter’s formula, 0.7 for alkalosis, and the 1-4 / 2-4 rule for respiratory disorders'); },
      preset: { mode: 'racid', hco3: 25, pco2: 66 },
      group: {},
      step: { hco3: 0.5, pco2: 1 },
      sev: () => null
    },
    oxy: {
      get desc() { return T('PAO₂، گرادیان A–a با سن، نسبت P/F و محتوای اکسیژن', 'PAO₂, age-adjusted A–a gradient, P/F ratio and oxygen content'); },
      preset: { fio2: 21, po2: 77, pco2: 29.3, age: 24, patm: 760, hb: 13, sao2: 93.7 },
      group: { age: 'p', patm: 'o', fio2: 'o', hb: 'p', sao2: 'l' },
      step: { fio2: 1, po2: 1, pco2: 1, age: 1, patm: 10, hb: 0.5, sao2: 1 },
      sev(v) {
        const room = Math.abs(v.fio2 - 21) < 0.5;
        if (room) { const s = F.hypoxSev(v.po2); return s ? S_(s.key, T('هیپوکسمی ', 'Hypoxemia: ') + s.label) : S_('ok', T('اکسیژناسیون طبیعی', 'Normal oxygenation')); }
        const s = F.pfSev(v.po2 / (v.fio2 / 100));
        return s ? S_(s.key, T('اختلال اکسیژناسیون', 'Impaired oxygenation')) : S_('ok', T('P/F قابل قبول', 'Acceptable P/F'));
      }
    },
    bicarb: {
      get desc() { return T('کمبود بی‌کربنات بزرگسال و دوز نوزادی از روی BE', 'Adult bicarbonate deficit and neonatal dose from BE'); },
      preset: { mode: 'adult', w: 70, hco3: 5, target: 12 },
      group: { w: 'p' },
      step: { w: 1, hco3: 0.5, target: 1, be: 1 },
      sev: () => null
    },
    conv: { get desc() { return T('pH و [H⁺]، kPa و mmHg، برآورد شریانی از VBG، لاکتات', 'pH and [H⁺], kPa and mmHg, arterial estimate from a VBG, lactate'); }, preset: { mode: 'vbg', pH: 7.28, pco2: 52, hco3: 24 }, group: {}, step: { val: 0.01, pH: 0.01, pco2: 1, hco3: 0.5 }, sev: () => null }
  };

  let cur = 'abg';
  const vals = {};
  try { const o = JSON.parse(localStorage.getItem('homa.tools') || 'null'); if (o) { cur = TOOLS.some(t => t.id === o.cur) ? o.cur : cur; Object.assign(vals, o.vals || {}); } } catch (e) { /* */ }
  const persist = () => { try { localStorage.setItem('homa.tools', JSON.stringify({ cur, vals })); } catch (e) { /* */ } };
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
    return `<label class="fld" for="${id}"><span class="fld__l">${f.label}${f.unit ? ` <small dir="ltr">${f.unit}</small>` : ''}${f.opt ? T(' <small class="fld__opt">اختیاری</small>', ' <small class="fld__opt">optional</small>') : ''}</span>
      <span class="nstep"><button type="button" class="nstep__b" data-step="1" data-sk="${f.k}" aria-label="${T('بیشتر', 'More')}">+</button><input id="${id}" type="text" inputmode="decimal" dir="ltr" data-tk="${f.k}" value="${val}" autocomplete="off"><button type="button" class="nstep__b" data-step="-1" data-sk="${f.k}" aria-label="${T('کمتر', 'Less')}">−</button></span></label>`;
  }

  function form(t, v) {
    const m = META[t.id];
    const tabs = t.fields.filter(isTab).map(f => `<div class="tmodes" role="tablist">${f.opts.map(o => `<button type="button" role="tab" class="tmode ${String(v[f.k]) === o[0] ? 'is-on' : ''}" data-tk="${f.k}" data-tv="${o[0]}">${o[1]}</button>`).join('')}</div>`).join('');
    const rest = t.fields.filter(f => !isTab(f) && (!f.show || f.show(v)));
    const groups = ['l', 'p', 'o', 'e', 'u'].map(g => {
      const fs = rest.filter(f => (m.group[f.k] || 'l') === g);
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
    </div>`;
  }
  function sticky(t) {
    const c = compute(t);
    return c.hero ? `${c.sev ? `<span class="sevc sevc--${c.sev[0]}">${c.sev[1]}</span>` : ''}<span class="tsticky__v"><small>${c.hero[0]}</small><b>${EA.ui.iso(c.hero[1])}</b></span><span class="tsticky__go">${T('جزئیات ↓', 'Details ↓')}</span>` : '';
  }

  function view() {
    const t = tool(), v = values(t);
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>${T('ابزارهای گاز خون', 'Blood gas tools')}</h1><p>${T('عددهای بیمار را وارد کن؛ تفسیر، شدت و راه‌حل گام‌به‌گام همان لحظه ساخته می‌شود.', 'Enter the patient’s numbers; the interpretation, severity and step-by-step solution appear instantly.')}</p></header>
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
      <p class="disclaimer">⚕️ ${T('این ابزار برای آموزش است. تصمیم نهایی را با بالین بیمار، پزشک معالج و پروتکل بیمارستان خودت تطبیق بده.', 'This tool is for education. Check every final decision against the patient at the bedside, the treating physician and your hospital’s protocol.')}</p>
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
        v[k] = k === 'be' ? nv : Math.max(0, nv);
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
