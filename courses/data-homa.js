/* آکادمی بالینی — داده‌های دوره «هما» (تفسیر گازهای خون و اسید-باز)
 * این فایل هیچ کدی را اجرا نمی‌کند؛ فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند.
 * موتور (js/engine.js) هنگام ورود به این دوره، به ترتیب config → content → tools را صدا می‌زند.
 *   content(): همه ماژول‌های محتوایی اصلی (فرمول‌ها، دنیاها، درس‌ها، کاراکترها، راند بیمارستان، نکته‌ها) بدون هیچ حذف یا خلاصه‌سازی
 *   tools():   ماشین‌حساب‌ها و ابزارهای بالینی دوره
 *   config():  متن‌ها، شخصیت و ثابت‌های اختصاصی دوره که موتور مشترک از آن‌ها استفاده می‌کند */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  AC.homa = {
    /* bitFlag: بیت یکتای این دوره در کدهای فعال‌سازی (توان ۲: 1، 2، 4، 8، … 32768). هرگز عوض نشود. */
    id: 'homa', bitFlag: 2, order: 2,
    nameFa: 'هما', nameEn: 'Homa', subjectFa: 'تفسیر گازهای خون و اسید-باز', subjectEn: 'Blood gas & acid–base',
    courseFa: 'تفسیر گازهای خون شریانی و وریدی (ABG و VBG)', courseEn: 'Arterial and Venous Blood Gas Interpretation (ABG & VBG)', descFa: 'اکسیژناسیون، اسید و باز، آنیون گپ، اختلالات تنفسی، VBG و گاز خون نوزاد.', toolsFa: 'مفسر گاز خون (ABG)', icon: '🫁',
    color: '#12b3a8', dark: '#0e8c84', light: '#d4f5f2', langs: ["fa"], codePrefix: 'HM',
    stats: {"worlds": 5, "levels": 15, "lessons": 45, "questions": 257, "rounds": 29, "roundSteps": 133, "chars": 15, "firstLesson": "o1"},
    /* کاتالوگ برای صفحه اول و پنجره معرفی/ارتقا: دنیاها و سطح‌ها، ابزارها، اهداف یادگیری */
    catalog: {"tagline": "گاز خون را مثل یک داستان بخوان", "about": "هما، گلبول قرمز بال‌داری که اکسیژن را همه‌جا می‌برد، روش گام‌به‌گام تفسیر ABG و VBG را یادت می‌دهد: اول تبادل گاز و اکسیژناسیون، بعد اسید و باز، جبران مورد انتظار، آنیون گپ و نسبت دلتا. هر سؤال با کارت کامل گاز خون و خط‌کش pH همراه است و ۲۹ بیمار از کتاب «ABG در بالین» و کیس‌های تکمیلی، از COPD و کتواسیدوز تا گاز خون نوزاد، تفسیر را به بالین نزدیک می‌کنند. تفسیرگر کامل گاز خون هر نمونه را قدم‌به‌قدم برایت باز می‌کند.", "audience": "دانشجوی پزشکی، رزیدنت بیهوشی، اورژانس و داخلی، پرستار ICU و NICU، کارشناس هوشبری و تنفس‌درمانی", "highlights": ["تفسیرگر کامل ABG/VBG + ۵ ابزار", "۲۹ کیس بالینی با کارت گاز خون", "گاز خون نوزاد و نمونه‌گیری"], "outcomes": ["هر ABG را با روش قدم‌به‌قدم کتاب تفسیر کنی: اول تبادل گاز، بعد اسید و باز", "نارسایی تنفسی نوع ۱ و ۲، حاد و مزمن را از هم جدا کنی و شدت هیپوکسمی را بسنجی", "گرادیان A–a و نسبت P/F را حساب کنی و بفهمی مشکل از ریه است یا تهویه", "با فرمول وینتر و قانون «۱-۴، ۲-۴» اختلال دوم پنهان را پیدا کنی", "آنیون گپ، دلتا، شکاف اسمولار و آنیون گپ ادرار را برای علت‌یابی اسیدوز به کار ببری", "اکسیژن را در بیمار COPD هوشمندانه تیتر کنی و زمان NIV را بشناسی", "VBG را سریع تفسیر کنی، دام‌های نمونه‌گیری را بشناسی و گاز خون نوزاد را بخوانی"], "worlds": [{"id": "o2", "name": "اکسیژن و تبادل گاز", "sub": "ریه، هموگلوبین و PaO₂", "sym": "O₂", "color": "#1CB0F6", "levels": ["نفس‌های اول", "شکارچیان هیپوکسمی", "فرماندهان اکسیژن"]}, {"id": "ph", "name": "اصول اسید و باز", "sub": "pH، بافر، جبران و تفسیر گام‌به‌گام", "sym": "pH", "color": "#A560E8", "levels": ["قطره‌های بافر", "نگهبانان تعادل", "اساتید تفسیر"]}, {"id": "ag", "name": "اسیدوز متابولیک", "sub": "آنیون گپ، دلتا و علت‌یابی", "sym": "AG", "color": "#FF9600", "levels": ["کاشفان گپ", "شکارچیان سم", "استادان دلتا"]}, {"id": "co2", "name": "تنفسی و آلکالوز", "sub": "هیپرکاپنی، هیپرونتیلاسیون و آلکالوز متابولیک", "sym": "CO₂", "color": "#FF4B8B", "levels": ["نفس‌شمارها", "رام‌کنندگان آلکالوز", "داوران مختلط"]}, {"id": "vbg", "name": "VBG، نمونه و نوزاد", "sub": "نمونه‌گیری درست، گاز وریدی و مویرگی، NICU", "sym": "VBG", "color": "#5B6CF0", "levels": ["سرنگ‌به‌دستان", "رمزگشایان VBG", "نگهبانان NICU"]}], "tools": [{"id": "abg", "sym": "ABG", "name": "تفسیرگر گاز خون", "color": "#12B3A8", "desc": "تفسیر گام‌به‌گام: راستی‌آزمایی، اختلال اولیه، جبران، آنیون گپ، دلتا و تبادل گاز"}, {"id": "ag", "sym": "AG", "name": "آنیون گپ و شکاف‌ها", "color": "#FF9600", "desc": "آنیون گپ و اصلاح با آلبومین، دلتا، شکاف اسمولار و آنیون گپ ادرار"}, {"id": "comp", "sym": "Δ", "name": "جبران مورد انتظار", "color": "#A560E8", "desc": "وینتر، ۰٫۷ برای آلکالوز، و قانون ۱-۴ / ۲-۴ برای اختلالات تنفسی"}, {"id": "oxy", "sym": "O₂", "name": "اکسیژناسیون", "color": "#1CB0F6", "desc": "PAO₂، گرادیان A–a با سن، نسبت P/F و محتوای اکسیژن"}, {"id": "bicarb", "sym": "HCO₃", "name": "بی‌کربنات", "color": "#5B6CF0", "desc": "کمبود بی‌کربنات بزرگسال و دوز نوزادی از روی BE"}, {"id": "conv", "sym": "⇄", "name": "تبدیل‌ها", "color": "#58CC02", "desc": "pH و [H⁺]، kPa و mmHg، برآورد شریانی از VBG، لاکتات"}]},

    config: function (EA) {
      const T = EA.T;
      const fa = (n, d) => EA.fa(n, d);
      return {
        id: 'homa', bit: 2, key: 'academy_course_homa', langs: ["fa"], startWorld: 'o2', codePrefix: 'HM',
        nameFa: 'هما', nameEn: 'Homa', titleFa: 'هما · آموزش تفسیر گازهای خون', titleEn: 'Homa · Blood Gas Interpretation',

        /* ---------- وضعیت: عنوان سطح‌ها، نقش رقبای لیگ و نشان‌ها ---------- */
        state: {
          titles: ['حباب تازه‌وارد', 'مولکول کنجکاو', 'بافر پرانرژی', 'شکارچی H⁺', 'کارآموز بخش', 'خواننده ABG', 'رام‌کننده PaCO₂',
    'معمار آنیون گپ', 'نگهبان اکسیژن', 'جادوگر دلتا', 'فرمانده ICU', 'استاد تعادل', 'افسانه گاز خون', 'اسطوره هندرسون', 'امپراتور هموستاز'],
          titlesEn: null,
          roles: ['پرستار ICU', 'رزیدنت داخلی', 'دانشجوی پزشکی', 'رزیدنت بیهوشی', 'کارشناس هوشبری', 'انترن', 'رزیدنت اورژانس', 'پرستار NICU', 'پزشک عمومی', 'رزیدنت اطفال', 'پرستار اورژانس', 'کارشناس تنفس‌درمانی'],
          rolesEn: null,
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
          badgesEn: null
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
          const lab = pH < 7.35 ? 'اسیدمی' : pH > 7.45 ? 'آلکالمی' : 'طبیعی';
          return `<div class="phs" aria-label="pH ${fa(pH, 2)}: ${lab}">
            <div class="phs__bar"><span class="phs__norm"></span><i class="phs__m" style="inset-inline-start:${(1 - p) * 100}%"><b>${fa(pH, 2)}</b></i></div>
            <div class="phs__t"><span>۷٫۸ قلیایی</span><span>۷٫۴</span><span>اسیدی ۶٫۸</span></div>
          </div>`;
        }
      
          /* ---------- کارت گزارش گاز خون ---------- */
          function labCard(o) {
          if (!o) return '';
          const rows = EA.labRows(o);
          if (!rows.length) return '';
          const kind = o.kind || 'ABG';
          const flag = f => f === 'H' ? '<i class="lab__f lab__f--h" aria-label="بالا">▲</i>' : f === 'L' ? '<i class="lab__f lab__f--l" aria-label="پایین">▼</i>' : '';
          return `<div class="lab">
            <div class="lab__h"><span class="lab__k">${kind}</span>${o.o2 ? `<span class="lab__o2">🫁 ${esc(o.o2)}</span>` : ''}</div>
            ${typeof o.pH === 'number' ? phScale(o.pH) : ''}
            <div class="lab__g">${rows.map(r => `<div class="lab__c ${r[3] ? 'is-' + r[3] : ''}"><span class="lab__n" dir="ltr">${r[0]}</span><b dir="ltr">${r[1]}${flag(r[3])}</b><small dir="ltr">${r[2]}${r[2] ? ' · ' : ''}${r[4]}</small></div>`).join('')}</div>
          </div>`;
        }
          return { phScale, labCard };
        },

        /* ---------- اجراکننده ---------- */
        numPlaceholder: () => T('عدد یا عبارت، مثلاً 0.21*713-40/0.8', ''),
        roundBrief: function (r, figCard, caseCard, labCard) {
          const brief = { kind: 'learn', title: T(`پرونده: ${r.title}`, `Case: ${r.title}`), bubble: T('بیمار تازه رسید! 🚑', 'A new patient just arrived! 🚑'), body: `<div class="rbrief"><b>${r.who}</b><p>${r.brief}</p></div>${labCard(r.lab)}<p>${T('در هر مرحله بهترین تصمیم را بگیر. توضیح هر پاسخ را بخوان؛ این‌جا خود مدیریت بیمار تمرین می‌شود.', 'Make the best decision at each step and read every explanation; this is where you practice managing a real patient.')}</p>` };
          return brief;
        },

        /* ---------- پوسته ---------- */
        icons: { tools: '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="4" fill="#12B3A8"/><rect x="9" y="6" width="14" height="6" rx="1.5" fill="#fff"/><g fill="#fff" opacity=".9"><circle cx="11" cy="17" r="1.8"/><circle cx="16" cy="17" r="1.8"/><circle cx="21" cy="17" r="1.8"/><circle cx="11" cy="23" r="1.8"/><circle cx="16" cy="23" r="1.8"/><rect x="19.2" y="21.2" width="3.6" height="3.6" rx="1" fill="#FFC800"/></g></svg>', chars: '<svg viewBox="0 0 32 32"><ellipse cx="16" cy="18" rx="12" ry="11" fill="#EF4056"/><ellipse cx="16" cy="19" rx="7" ry="5" fill="#000" opacity=".12"/><circle cx="12.5" cy="17" r="2" fill="#fff"/><circle cx="19.5" cy="17" r="2" fill="#fff"/><path d="M13 22q3 2.5 6 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="m25 3 1.2 2.8L29 7l-2.8 1.2L25 11l-1.2-2.8L21 7l2.8-1.2z" fill="#FFC800"/></svg>' },
        obRoles: [['دانشجوی پزشکی', ''], ['انترن یا رزیدنت', ''], ['پرستار', ''], ['هوشبری یا بیهوشی', ''], ['تنفس‌درمانی', ''], ['پزشک عمومی یا متخصص', ''], ['سایر', '']],
        practice: function (h) {
          const { s, worldOf } = h;
          return {
            calc: `<div class="pcard__i">🧮</div><h3>${T('تمرین محاسبات', 'Calculation practice')}</h3>
          <p>${T('مسئله‌های بالینی با اعداد تازه در هر بار. دنیا را انتخاب کن:', 'Clinical problems with fresh numbers every time. Pick a world:')}</p>`,
            rounds: `<p>${T(`${fa(EA.rounds.length)} بیمار از کتاب «ABG در بالین» و کیس‌های تکمیلی؛ گاز خون را بخوان، تفسیر کن و تصمیم بگیر. بهترین تمرین برای بخش.`, `${fa(EA.rounds.length)} realistic patients you manage yourself, from assessment to monitoring. The best preparation for the ward.`)}</p>
          <div class="rgroups">${EA.worlds.map(w => { const rs = EA.rounds.filter(r => r.w === w.id); if (!rs.length) return ''; return `<div class="rgroup"><div class="rgroup__h"><span class="wsym" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span><b>${w.name}</b><small>${fa(rs.length)} بیمار</small></div><div class="rlist">${rs.map(r => { const st = (s.rounds || {})[r.id]; return `<button class="rcase ${st && st.passed ? 'is-done' : ''}" data-act="round" data-id="${r.id}" style="--wc:${w.color};--wd:${w.dark}"><span class="rcase__t"><b>${r.title}</b><small>${r.who}</small></span><span class="rcase__s">${st ? (st.passed ? '✓ ' : '') + fa(Math.round(st.best * 100)) + '٪' : fa(r.steps.length) + ' مرحله'}</span></button>`; }).join('')}</div></div>`; }).join('')}</div>`,
            guide: `<p>${T('همه فرمول‌ها و نکته‌های هر دنیا در یک نگاه.', 'Every formula and key idea of each world at a glance.')}</p>`
          };
        },
        cert: function (s) {
          return {
            kicker: `<small class="cert__kicker">${T('هما · آکادمی تفسیر گازهای خون', '')}</small>`,
            body: `<p>${T(`دوره آموزشی <b>تفسیر گازهای خون شریانی و وریدی (ABG و VBG)</b> شامل اکسیژناسیون و تبادل گاز، اصول اسید و باز، اسیدوز متابولیک و آنیون گپ، اختلالات تنفسی و آلکالوز، و نمونه‌گیری و گاز خون نوزادان را با موفقیت به پایان رساند و در امتحان نهایی نمره <b>${fa(Math.round(s.final.score * 100))}٪</b> کسب کرد.`, `has successfully completed the course <b>Diagnosis and Correction of Electrolyte Disorders</b>, covering sodium, potassium, calcium, magnesium and phosphate, with a final exam score of <b>${fa(Math.round(s.final.score * 100))}%</b>.`)}</p>`
          };
        },
        landing: function (h) {
          const { S, mascot, avatar, musicIcon, langBtn, esc } = h;
          const DEMO = {
    q: 'تفسیر درست این گاز خون کدام است؟',
    case: [['بیمار', 'مرد ۲۸ ساله دیابتی، تنفس عمیق و تند'], ['قند', '۵۲۰ mg/dL']],
    lab: { o2: 'هوای اتاق', pH: 7.25, pco2: 28, hco3: 12, po2: 98 },
    opts: ['اسیدوز متابولیک با جبران تنفسی', 'اسیدوز تنفسی جبران‌نشده', 'آلکالوز تنفسی اولیه', 'اسیدوز تنفسی و متابولیک مختلط'],
    why: 'pH پایین است و HCO₃ پایین آن را توضیح می‌دهد (اختلال اولیه). PCO₂ پایین جبران تنفسی است؛ با فرمول وینتر انتظار ۱٫۵ × ۱۲ + ۸ = ۲۶ ± ۲ داریم، پس جبران مناسب است. در دیابتی با تنفس کوسمال: کتواسیدوز.'
  };
    const s = S(), back = !!s.profile;
    const demo = DEMO;
    const lessons = EA.worlds.reduce((a, w) => a + w.lessons.length, 0);
    const qs = EA.worlds.reduce((a, w) => a + w.lessons.reduce((b, l) => b + l.items.filter(x => x.t !== 'learn').length, 0), 0) + EA.rounds.reduce((a, r) => a + r.steps.length, 0);
    const mols = [['O₂', '#1CB0F6'], ['CO₂', '#FF4B8B'], ['H⁺', '#FF9600'], ['HCO₃⁻', '#A560E8'], ['pH', '#5B6CF0']];
    const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    const startLbl = back ? 'ادامه یادگیری' : 'همین حالا شروع کن';
    const lv = back ? EA.S.level() : null;
    const html = `
      <header class="land__bar"><span class="brand">${mascot('happy', 'var(--brand)', 30)}<span>هما</span></span>
        <span class="land__bar-r"><button class="chip-stat chip-stat--music ${s.settings.music ? 'is-on' : ''}" data-act="music" aria-label="موسیقی">${musicIcon()}</button><button class="btn btn--brand btn--sm" data-land="start">${back ? 'ادامه' : 'شروع'}</button></span></header>
      <section class="land__hero">
        <div class="land__orbit" aria-hidden="true">
          <div class="land__yona">${mascot('cheer', 'var(--brand)', 150)}</div>
          ${mols.map((x, i) => `<span class="ion" style="--i:${i};--c:${x[1]}"><b dir="ltr">${x[0]}</b></span>`).join('')}
        </div>
        <span class="land__kicker">🏆 کامل‌ترین مسیر یادگیری تفسیر ABG و VBG</span>
        <h1 class="land__h">گاز خون را<br><em>مثل یک داستان بخوان</em></h1>
        <p class="land__p">سلام، من <b>هما</b> هستم؛ گلبولی که اکسیژن را به همه‌جا می‌برد. این‌جا فرمول حفظ نمی‌کنی؛ مثل پزشک کشیک تمرین می‌کنی: درس‌های سه‌دقیقه‌ای، بازخورد فوری، ${fa(EA.rounds.length)} بیمار از کتاب «ABG در بالین»، و تفسیرگری که هر گاز خون را قدم‌به‌قدم برایت باز می‌کند.</p>
        <div class="land__cta"><button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
          ${back ? `<span class="land__me">${avatar()}<span><b>خوش برگشتی ${esc(s.profile.name)}!</b><small>🔥 ${fa(s.streak)} روز · ⚡ ${fa(s.xp)} امتیاز · سطح ${fa(lv.n)}: ${lv.title}</small></span></span>`
            : `<small class="land__free">بدون ثبت‌نام · بدون اینترنت · از همین گوشی</small><button class="btn btn--ghost" data-land="import">پیشرفت قبلی را بازیابی کن</button>`}</div>
      </section>
      <section class="land__nums">
        ${[[fa(EA.worlds.length), 'دنیای گاز خون'], [fa(EA.worlds.length * 3), 'سطح نام‌دار'], [fa(lessons), 'درس کوتاه'], [fa(qs) + '+', 'سؤال و مرحله بالینی'], [fa(EA.rounds.length), 'بیمار برای مدیریت'], [fa(EA.tools.TOOLS.length), 'ابزار و تفسیرگر']].map(x => `<div><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
      </section>
      <section class="land__sec">
        <h2>همین حالا یک ABG تفسیر کن</h2>
        <div class="demo">
          ${EA.ui.labCard(demo.lab)}
          <div class="case"><div class="case__h">🩺 پرونده بیمار</div>${demo.case.map(r => `<div class="case__r"><span>${r[0]}</span><b>${EA.ui.iso(r[1])}</b></div>`).join('')}</div>
          <h3 class="q q--sm">${demo.q}</h3>
          <div class="opts">${order.map(k => `<button class="opt" data-demo="${k}"><span>${demo.opts[k]}</span></button>`).join('')}</div>
          <div class="demo__fb" hidden></div>
        </div>
      </section>
      <section class="land__sec">
        <h2>چرا این روش بهترین راه است؟</h2>
        <p class="land__sub">هما بر پایه اصولی ساخته شده که پژوهش‌های یادگیری بارها اثرشان را نشان داده‌اند.</p>
        <div class="land__why">${[
          ['🧠', 'یادآوری فعال', 'به جای خواندن، جواب می‌دهی. هر بار که از حافظه‌ات بیرون می‌کشی، آن نکته محکم‌تر می‌شود.'],
          ['🔁', 'تکرار هوشمند', 'هر سؤالی که اشتباه کنی، دوباره و در زمان مناسب برمی‌گردد تا دیگر فراموشش نکنی.'],
          ['⚡', 'بازخورد فوری', 'همان لحظه می‌فهمی چرا درست یا غلط بود؛ هر اشتباه یک درس کوچک می‌شود.'],
          ['🏥', 'یادگیری روی بیمار', 'کیس‌های کتاب را با کارت کامل گاز خون، مرحله‌به‌مرحله مثل راند واقعی تفسیر می‌کنی.']
        ].map(x => `<article><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>در پایان دوره تو می‌توانی…</h2>
        <ul class="land__out">${[
          'هر ABG را با روش قدم‌به‌قدم کتاب تفسیر کنی: اول تبادل گاز، بعد اسید و باز',
          'نارسایی تنفسی نوع ۱ و ۲، حاد و مزمن را از هم جدا کنی و شدت هیپوکسمی را بسنجی',
          'گرادیان A–a و نسبت P/F را حساب کنی و بفهمی مشکل از ریه است یا تهویه',
          'با فرمول وینتر و قانون «۱-۴، ۲-۴» اختلال دوم پنهان را پیدا کنی',
          'آنیون گپ، دلتا، شکاف اسمولار و آنیون گپ ادرار را برای علت‌یابی اسیدوز به کار ببری',
          'اکسیژن را در بیمار COPD هوشمندانه تیتر کنی و زمان NIV را بشناسی',
          'VBG را سریع تفسیر کنی، دام‌های نمونه‌گیری را بشناسی و گاز خون نوزاد را بخوانی'
        ].map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>مسیرت این شکلی است</h2>
        <ol class="land__steps">${[
          ['یاد بگیر', 'کارت‌های کوتاه با جدول، فلوچارت و رمزهای به‌یادماندنی، قدم‌به‌قدم روی یک مسیر پیچان.'],
          ['تمرین کن', 'هفت نوع سؤال، از چندگزینه‌ای تا محاسبه با کارت آزمایش؛ مسئله‌های محاسباتی هر بار با عددهای تازه.'],
          ['بیمار را مدیریت کن', 'راند بیمارستان: گاز خون را بخوان، تفسیر کن و تصمیم درمانی بگیر.'],
          ['امتحان بده و گواهی بگیر', 'با هر سطح یک کاراکتر، با هر دنیا یک نشان، و در پایان گواهی با نام خودت.']
        ].map((x, i) => `<li><span>${fa(i + 1)}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></li>`).join('')}</ol>
      </section>
      <section class="land__sec">
        <h2>پنج دنیا، پانزده سطح</h2>
        <div class="land__worlds">${EA.worlds.map(w => `<article class="lw" style="--wc:${w.color};--wd:${w.dark}">
          <span class="wsym">${w.sym}</span><h3>${w.name}</h3><p>${w.sub}</p>
          <ol>${w.levels.map(x => `<li>${x}</li>`).join('')}</ol></article>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>کاراکترها را جمع کن</h2>
        <p class="land__sub">هر سطح که تمام شود، یک کاراکتر تازه به تو می‌پیوندد و می‌تواند همراهت در درس‌ها باشد.</p>
        <div class="land__chars">${EA.chars.list.filter(c => c.lv === 0).map(c => `<figure>${EA.chars.draw(c, 'happy', 76)}<figcaption>${c.name}</figcaption></figure>`).join('')}
          ${EA.chars.list.filter(c => c.lv > 0).slice(0, 3).map(c => `<figure class="is-lock">${EA.chars.draw(c, 'happy', 76, true)}<figcaption>؟؟؟</figcaption></figure>`).join('')}</div>
      </section>
      <section class="land__sec">
        <h2>آیا می‌دانستی؟</h2>
        <div class="tip tip--land" role="button" tabindex="0" title="نکته بعدی"><div class="tip__body"></div></div>
      </section>
      <section class="land__sec">
        <h2>منابع این دوره</h2>
        <ul class="land__out land__src">${[
          'کتاب «ABG در بالین»: اصول، روش نمونه‌گیری، تفسیر قدم‌به‌قدم و ۲۵ تمرین بالینی',
          'جزوه تفسیر ABG و VBG دکتر رضا ژیان و دکتر شایان سیگاری (نویسنده: کیوان محمدزاده)',
          'فلوچارت تفسیر اسید و باز و فرمول‌های جبران (سینا مرادی)',
          'اسلایدهای تفسیر ABG و گاز خون نوزادان (الهه راستکار)',
          'به‌روزرسانی با راهنماهای BTS برای اکسیژن‌درمانی، ADA برای کتواسیدوز و تعریف برلین ARDS'
        ].map(x => `<li>${x}</li>`).join('')}</ul>
      </section>
      <section class="land__sec">
        <h2>همه چیزهایی که یک بازی خوب لازم دارد</h2>
        <div class="land__feat">${[
          ['❤️', 'قلب‌ها', 'هر اشتباه یک قلب؛ با تمرین برمی‌گردد'],
          ['🔥', 'زنجیره روزانه', 'هر روز چند دقیقه، آتشت روشن می‌ماند'],
          ['🏆', 'لیگ هفتگی', `${fa(30)} نفر در هر گروه، از برنز تا الماس`],
          ['🧮', 'تفسیرگر ABG', 'و پنج ابزار دیگر با راه‌حل گام‌به‌گام'],
          ['🎵', 'موسیقی تمرکز', 'آرام و بی‌کلام؛ با یک لمس قطع می‌شود'],
          ['🎓', 'گواهی پایان دوره', 'با نام و تاریخ شمسی']
        ].map(x => `<div><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div>
      </section>
      <section class="land__end">
        ${mascot('cheer', 'var(--brand)', 110)}
        <h2>${back ? 'درس بعدی منتظرت است' : 'اولین درس کمتر از ۳ دقیقه است'}</h2>
        <p class="land__p">هر روز فقط ۵ دقیقه. چند هفته بعد، تفسیر ABG یکی از نقاط قوت تو خواهد بود.</p>
        <button class="btn btn--brand btn--lg" data-land="start">${startLbl}</button>
        <p class="disclaimer">هما ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.</p>
      </section>
      <div class="land__sticky"><button class="btn btn--brand btn--lg btn--block" data-land="start">${startLbl}</button></div>`;
          return { html, demo };
        },
        demoFeedback: function (good, demo) {
          const ok = good;
          return `<b>${good ? '✓ آفرین! دقیقاً همین.' : '✗ نزدیک بود؛ پاسخ درست: اسیدوز متابولیک با جبران تنفسی'}</b><p>${demo.why}</p><button class="btn btn--brand" data-land="start">${good ? 'تو آماده‌ای؛ بیا ادامه بدهیم' : 'بیا با هم یادش بگیریم'}</button>`;
        },
        obSteps: function (h) {
          const { d, bubble, esc, GOALS } = h;
          const ROLES = this.obRoles;
          const steps = [
      () => `${bubble('سلام! من هما هستم؛ یک گلبول قرمز بال‌دار که اکسیژن را به همه‌جا می‌برم 🫁 اسمت چیه؟')}
        <input class="ob__in" id="ob-name" maxlength="40" placeholder="نام تو" value="${esc(d.name)}" autocomplete="given-name">
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="name">ادامه</button></div>`,
      () => `${bubble(`خوشبختم ${esc(d.name)}! یک عکس برای پروفایلت می‌گذاری؟ (اختیاری)`)}
        <div class="ob__photo"><label class="avpick" for="ob-ph">${d.photo ? `<span class="avatar avatar--xl"><img src="${d.photo}" alt="" draggable="false"></span>` : `<span class="avatar avatar--xl" style="--h:170">${esc(d.name[0] || '؟')}</span>`}<span class="avpick__cam" aria-hidden="true">📷</span></label>
        <input type="file" id="ob-ph" accept="image/*" hidden><label class="link link--btn" for="ob-ph">${d.photo ? 'تغییر عکس' : 'انتخاب عکس از گالری'}</label></div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">${d.photo ? 'ادامه' : 'فعلاً نه، ادامه'}</button></div>`,
      () => `${bubble('در چه زمینه‌ای کار یا تحصیل می‌کنی؟')}
        <div class="ob__grid">${ROLES.map((r, i) => `<button class="ob__opt ${d.role === r[0] ? 'is-sel' : ''}" data-ob="role" data-v="${i}">${r[0]}</button>`).join('')}</div>`,
      () => `${bubble('هدف روزانه‌ات چقدر باشد؟')}
        <div class="ob__list">${GOALS().map(g => `<button class="ob__opt ob__opt--row ${d.goal === g[0] ? 'is-sel' : ''}" data-ob="goal" data-v="${g[0]}"><b>${g[1]}</b><span>${g[2]}</span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="next">ادامه</button></div>`,
      () => `${bubble('از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «اکسیژن و تبادل گاز» بهترین شروع است؛ بعداً به بقیه هم سر می‌زنیم!')}
        <div class="wlist">${EA.worlds.map(w => `<button class="wcard ${d.start === w.id ? 'is-sel' : ''}" data-ob="start" data-v="${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}"><span class="wsym">${w.sym}</span><span><b>${w.name}</b><small>${w.sub}</small></span></button>`).join('')}</div>
        <div class="ob__btns"><button class="btn btn--brand btn--lg btn--block" data-ob="finish">بزن بریم! 🚀</button></div>`
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

  /* ---------- اعداد فارسی ---------- */
  function fa(n, d) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    const dd = d == null ? 1 : d;
    return n.toLocaleString('fa-IR', { maximumFractionDigits: dd, useGrouping: false });
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
  /** عدد علامت‌دار: +۴ یا −۵ */
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
      if (pao2 >= 60) return { key: 'mild', label: 'خفیف', sat: '۹۰ تا ۹۴٪' };
      if (pao2 >= 40) return { key: 'mod', label: 'متوسط', sat: '۷۵ تا ۸۹٪' };
      return { key: 'sev', label: 'شدید', sat: 'کمتر از ۷۵٪' };
    },
    pfSev(pf) {
      if (pf > 300) return null;
      if (pf > 200) return { key: 'mild', label: 'خفیف (۲۰۰ تا ۳۰۰)' };
      if (pf > 100) return { key: 'mod', label: 'متوسط (۱۰۰ تا ۲۰۰)' };
      return { key: 'sev', label: 'شدید (۱۰۰ یا کمتر)' };
    }
  };

  /* ---------- نام اختلال‌ها ---------- */
  const DN = {
    racid: 'اسیدوز تنفسی', ralk: 'آلکالوز تنفسی', macid: 'اسیدوز متابولیک', malk: 'آلکالوز متابولیک',
    hagma: 'اسیدوز متابولیک با آنیون گپ بالا', nagma: 'اسیدوز متابولیک با آنیون گپ طبیعی (هیپرکلرمیک)'
  };

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
      out.steps.push(`<b>نمونه وریدی:</b> مقادیر شریانی تقریبی ← pH ≈ ${fa(pH, 2)} + ${n(0.04)} = ${fa(a.pH, 2)}، PCO₂ ≈ ${fa(pco2)} − ${n(5)} = ${fa(a.pco2)}، HCO₃ ≈ ${fa(hco3)} − ${n(1.5)} = ${fa(a.hco3)}`);
      if (pco2 < 45) out.notes.push('PCO₂ وریدی کمتر از ۴۵ است؛ هیپرکاپنی شریانی تقریباً رد می‌شود.');
      else out.notes.push('PCO₂ وریدی بالا مقدار شریانی را دقیق پیش‌بینی نمی‌کند؛ اگر هیپرکاپنی برای تصمیم مهم است، ABG بگیر.');
      out.notes.push('از نمونه وریدی برای قضاوت درباره اکسیژناسیون استفاده نکن؛ پالس اکسیمتری یا ABG لازم است.');
      pH = a.pH; pco2 = a.pco2; hco3 = a.hco3;
    }

    /* ۱. راستی‌آزمایی داده‌ها */
    const hm = F.hFromPh(pH), hk = F.hKB(pco2, hco3), diff = Math.abs(hk - hm) / hm;
    out.valid = { hm, hk, ok: diff <= 0.12 };
    out.steps.push(`<b>راستی‌آزمایی:</b> [H⁺] از pH = ${fa(hm)} و از فرمول ۲۴ × PCO₂ ÷ HCO₃ = ${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = ${fa(hk)} nEq/L ← ${out.valid.ok ? 'هم‌خوان است ✓' : 'هم‌خوان نیست ✗'}`);
    if (!out.valid.ok && !venous) out.warn.push('عددهای pH، PCO₂ و HCO₃ با هم نمی‌خوانند. یا عددی اشتباه وارد شده، یا به جای بی‌کربنات واقعی (actual) بی‌کربنات استاندارد وارد شده است؛ برای تفسیر، HCO₃ واقعی لازم است.');

    /* ۲. وضعیت pH */
    out.status = pH < 7.35 ? 'acidemia' : pH > 7.45 ? 'alkalemia' : 'normal';
    const stTxt = { acidemia: 'اسیدمی', alkalemia: 'آلکالمی', normal: 'pH طبیعی' }[out.status];
    out.steps.push(`<b>pH:</b> ${fa(pH, 2)} ← ${stTxt}${out.status === 'normal' ? (pH < 7.4 ? ' (سمت اسیدی ۷٫۴۰)' : pH > 7.4 ? ' (سمت قلیایی ۷٫۴۰)' : '') : ''}`);
    if (pH < 7.25) out.warn.push('pH کمتر از ۷٫۲۵: مکانیسم‌های جبرانی شکست خورده‌اند؛ اورژانس پزشکی.');
    if (pH < 6.8 || pH > 7.8) out.warn.push('pH خارج از محدوده ۶٫۸ تا ۷٫۸ با زندگی سازگار نیست؛ خطای نمونه را هم در نظر بگیر.');

    const lowP = pco2 < 35, highP = pco2 > 45, lowB = hco3 < 22, highB = hco3 > 26;
    const pTxt = highP ? 'بالا (به سمت اسیدوز)' : lowP ? 'پایین (به سمت آلکالوز)' : 'طبیعی';
    const bTxt = highB ? 'بالا (به سمت آلکالوز)' : lowB ? 'پایین (به سمت اسیدوز)' : 'طبیعی';
    out.steps.push(`<b>PCO₂:</b> ${fa(pco2)} mmHg ← ${pTxt} · <b>HCO₃:</b> ${fa(hco3)} mEq/L ← ${bTxt}`);

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
      if (highP && highB) { prim = pH < 7.4 ? 'racid' : 'malk'; out.notes.push('PCO₂ و HCO₃ هر دو بالا با pH طبیعی: یا یک اختلال کاملاً جبران‌شده است یا اسیدوز تنفسی + آلکالوز متابولیک. pH سمت کدام طرف ۷٫۴۰ است، اختلال اولیه را نشان می‌دهد؛ بالین بیمار حرف آخر را می‌زند.'); }
      else if (lowP && lowB) { prim = pH < 7.4 ? 'macid' : 'ralk'; out.notes.push('PCO₂ و HCO₃ هر دو پایین با pH طبیعی: یا یک اختلال جبران‌شده است یا اسیدوز متابولیک + آلکالوز تنفسی (مثل مسمومیت با آسپرین).'); }
      else if (highP && lowB) { add.push('racid', 'macid'); out.warn.push('PCO₂ بالا و HCO₃ پایین با pH طبیعی تقریباً ممکن نیست؛ عددها را بررسی کن.'); }
      else if (lowP && highB) { add.push('ralk', 'malk'); out.warn.push('PCO₂ پایین و HCO₃ بالا با pH طبیعی تقریباً ممکن نیست؛ عددها را بررسی کن.'); }
      else if (highP) prim = 'racid';
      else if (lowP) prim = 'ralk';
      else if (highB) prim = 'malk';
      else if (lowB) prim = 'macid';
    }
    out.primary = prim;
    if (add.length) {
      out.disorders.push(...add);
      out.steps.push(`<b>اختلال اولیه:</b> هر دو جزء تنفسی و متابولیک در یک جهت‌اند ← <b>${DN[add[0]]} + ${DN[add[1]]}</b> (اختلال مختلط؛ جبرانی در کار نیست و تغییر pH خطرناک است)`);
    } else if (prim) {
      out.disorders.push(prim);
      const why = { racid: 'PCO₂ بالا pH را پایین آورده', ralk: 'PCO₂ پایین pH را بالا برده', macid: 'HCO₃ پایین pH را پایین آورده', malk: 'HCO₃ بالا pH را بالا برده' }[prim];
      out.steps.push(`<b>اختلال اولیه:</b> ${DN[prim]} (${why}؛ هم‌جهت با pH)`);
    } else if (out.status === 'normal') {
      out.steps.push('<b>اختلال اولیه:</b> pH، PCO₂ و HCO₃ همه طبیعی‌اند.');
    }

    /* ۴. جبران مورد انتظار */
    const r1 = x => fa(x, 1);
    if (prim === 'macid') {
      const e = F.winter(hco3);
      out.comp = { exp: e, lo: e - 2, hi: e + 2 };
      out.steps.push(`<b>جبران (وینتر):</b> PCO₂ مورد انتظار = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${r1(e)} ± ${n(2)} ← یعنی ${r1(e - 2)} تا ${r1(e + 2)}`);
      if (pco2 > e + 2) { out.disorders.push('racid'); out.steps.push(`PCO₂ بیمار (${fa(pco2)}) از حد انتظار بالاتر است ← <b>اسیدوز تنفسی همراه</b> (ریه نمی‌تواند جبران کند؛ به خستگی تنفسی فکر کن)`); }
      else if (pco2 < e - 2) { out.disorders.push('ralk'); out.steps.push(`PCO₂ بیمار (${fa(pco2)}) از حد انتظار پایین‌تر است ← <b>آلکالوز تنفسی همراه</b> (مثلاً سپسیس یا آسپرین)`); }
      else out.steps.push(`PCO₂ بیمار در محدوده است ← جبران تنفسی مناسب${out.status === 'normal' ? ' و کامل' : ' (نسبی)'}`);
    } else if (prim === 'malk') {
      const e = F.malk(hco3);
      out.comp = { exp: e, lo: e - 5, hi: e + 5 };
      out.steps.push(`<b>جبران:</b> PCO₂ مورد انتظار = ${n(40)} + ${n(0.7)} × (${fa(hco3)} − ${n(24)}) = ${r1(e)} ± ${n(5)} (قاعده سریع: HCO₃ + ۱۵ = ${r1(hco3 + 15)})`);
      if (pco2 > e + 5) { out.disorders.push('racid'); out.steps.push(`PCO₂ بیمار (${fa(pco2)}) بیش از حد انتظار است ← <b>اسیدوز تنفسی همراه</b>`); }
      else if (pco2 < e - 5) { out.disorders.push('ralk'); out.steps.push(`PCO₂ بیمار (${fa(pco2)}) کمتر از حد انتظار است ← <b>آلکالوز تنفسی همراه</b>`); }
      else out.steps.push('PCO₂ بیمار در محدوده است ← جبران تنفسی مناسب (جبران تنفسی آلکالوز به‌خاطر هیپوکسمی محدود است و PCO₂ معمولاً از ۵۵ بالاتر نمی‌رود)');
    } else if (prim === 'racid') {
      const a = F.racid(pco2, false), c = F.racid(pco2, true);
      out.comp = { acute: a, chronic: c };
      out.steps.push(`<b>جبران کلیوی:</b> HCO₃ مورد انتظار ← حاد: ${n(24)} + ${n(0.1)} × ${fa(pco2 - 40)} = ${r1(a)} · مزمن: ${n(24)} + ${n(0.4)} × ${fa(pco2 - 40)} = ${r1(c)}`);
      if (v.chronic === 'acute' && hco3 > a + 3 || hco3 > c + 2) { out.disorders.push('malk'); out.steps.push(`HCO₃ بیمار (${fa(hco3)}) از حد انتظار بالاتر است ← <b>آلکالوز متابولیک همراه</b>`); }
      else if (hco3 < a - 3) { out.disorders.push('macid'); out.steps.push(`HCO₃ بیمار (${fa(hco3)}) حتی از حالت حاد کمتر است ← <b>اسیدوز متابولیک همراه</b>`); }
      else if (hco3 <= a + 2) out.steps.push('HCO₃ در حد حاد است ← <b>اسیدوز تنفسی حاد</b> (هنوز فرصت جبران کلیوی نبوده)');
      else if (hco3 >= c - 2) out.steps.push('HCO₃ در حد مزمن است ← <b>اسیدوز تنفسی مزمن</b> (کلیه‌ها جبران کرده‌اند)');
      else out.steps.push('HCO₃ بین حالت حاد و مزمن است ← <b>حاد روی مزمن</b> یا در حال جبران');
      out.chronicity = hco3 <= a + 2 ? 'acute' : hco3 >= c - 2 ? 'chronic' : 'mid';
    } else if (prim === 'ralk') {
      const a = F.ralk(pco2, false), c = Math.max(12, F.ralk(pco2, true));
      out.comp = { acute: a, chronic: c };
      out.steps.push(`<b>جبران کلیوی:</b> HCO₃ مورد انتظار ← حاد: ${n(24)} − ${n(0.2)} × ${fa(40 - pco2)} = ${r1(a)} · مزمن: ${n(24)} − ${n(0.4)} × ${fa(40 - pco2)} = ${r1(c)}`);
      out.chronicity = hco3 >= a - 3 ? 'acute' : hco3 <= c + 2 ? 'chronic' : 'mid';
      if (hco3 > a + 3) { out.disorders.push('malk'); out.steps.push(`HCO₃ بیمار (${fa(hco3)}) بیش از حد انتظار است ← <b>آلکالوز متابولیک همراه</b>`); }
      else if (hco3 < c - 2) { out.disorders.push('macid'); out.steps.push(`HCO₃ بیمار (${fa(hco3)}) کمتر از حد انتظار است ← <b>اسیدوز متابولیک همراه</b>`); }
      else if (hco3 >= a - 3) out.steps.push('HCO₃ در حد حاد است ← <b>آلکالوز تنفسی حاد</b>');
      else if (hco3 <= c + 2) out.steps.push('HCO₃ در حد مزمن است ← <b>آلکالوز تنفسی مزمن</b>');
      else out.steps.push('HCO₃ بین حالت حاد و مزمن است ← در حال جبران');
    }

    /* ۵. آنیون گپ و دلتا */
    if (typeof v.na === 'number' && typeof v.cl === 'number' && isFinite(v.na) && isFinite(v.cl)) {
      const ag = F.ag(v.na, v.cl, hco3);
      const hasAlb = typeof v.alb === 'number' && isFinite(v.alb) && v.alb > 0;
      const agc = hasAlb ? F.agCorr(ag, v.alb) : ag;
      out.ag = { ag, agc, high: agc > 16 };
      out.steps.push(`<b>آنیون گپ:</b> ${fa(v.na)} − (${fa(v.cl)} + ${fa(hco3)}) = ${r1(ag)}${hasAlb ? ` ← اصلاح با آلبومین: ${r1(ag)} + ${n(2.5)} × (${n(4)} − ${fa(v.alb)}) = ${r1(agc)}` : ''} (طبیعی حدود ۱۲ ± ۴)`);
      if (typeof v.k === 'number' && isFinite(v.k) && v.k > 0) out.notes.push(`آنیون گپ با پتاسیم (روش کتاب) = ${r1(F.ag(v.na, v.cl, hco3, v.k))} (طبیعی ۱۰ تا ۲۰).`);
      if (!hasAlb) out.notes.push('اگر آلبومین پایین است آن را وارد کن؛ هر ۱ g/dL کاهش آلبومین آنیون گپ را حدود ۲٫۵ کم نشان می‌دهد.');
      const acidOn = out.disorders.includes('macid') || hco3 < 22;
      const GOLD = 'علل آنیون گپ بالا (GOLDMARK): گلیکول‌ها، ۵-اکسوپرولین، ال-لاکتات، دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتواسیدوز. در شک به الکل‌های سمی، شکاف اسمولار را حساب کن.';
      if (agc > 16 && acidOn) {
        if (!out.disorders.includes('macid')) out.disorders.push('macid');
        out.agType = 'hagma';
        if (24 - hco3 >= 4) {
          const d = F.delta(agc, hco3);
          out.ag.delta = d;
          out.steps.push(`<b>نسبت دلتا:</b> (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(d, 2)} ← ${d < 1 ? '<b>کمتر از ۱</b>: اسیدوز متابولیک با آنیون گپ طبیعی هم همراه است' : d > 2 ? '<b>بیشتر از ۲</b>: آلکالوز متابولیک (یا HCO₃ بالای ناشی از جبران اسیدوز تنفسی مزمن) هم همراه است' : 'بین ۱ و ۲: اسیدوز متابولیک خالص با آنیون گپ بالا'}`);
          if (d < 1) out.agType = 'both';
          if (d > 2 && !out.disorders.includes('malk')) out.disorders.push('malk');
        } else out.notes.push('HCO₃ کمتر از ۴ واحد افت کرده؛ نسبت دلتا در این حالت قابل اعتماد نیست.');
        out.notes.push(GOLD);
      } else if (agc > 20) {
        out.disorders.push('macid'); out.agType = 'hagma';
        if (!out.disorders.includes('malk')) out.disorders.push('malk');
        out.steps.push('آنیون گپ بیش از ۲۰ است ولی HCO₃ پایین نیست ← <b>اسیدوز متابولیک پنهان</b>؛ یک آلکالوز متابولیک هم‌زمان (مثلاً استفراغ) کاهش HCO₃ را پوشانده است.');
        out.notes.push(GOLD);
      } else if (agc > 16) {
        out.notes.push('آنیون گپ کمی بالاست ولی HCO₃ پایین نیست؛ لاکتات، کتون، کراتینین و آلبومین را بررسی کن.');
      } else if (out.disorders.includes('macid')) {
        out.agType = 'nagma';
        out.steps.push('آنیون گپ طبیعی است ← <b>اسیدوز متابولیک هیپرکلرمیک</b> (اسهال، RTA، سالین فراوان، استازولامید). آنیون گپ ادرار کمک می‌کند: منفی ← اسهال، مثبت ← RTA.');
      }
    } else if (out.disorders.includes('macid')) {
      out.notes.push('برای علت‌یابی اسیدوز متابولیک، سدیم و کلر را وارد کن تا آنیون گپ حساب شود.');
    }

    /* ۶. تبادل گاز */
    if (!venous && typeof v.po2 === 'number' && isFinite(v.po2) && v.po2 > 0) {
      const fio2 = v.fio2 || 0.21, room = Math.abs(fio2 - 0.21) < 0.005;
      const pa = F.pAO2(fio2, pco2, v.patm), aa = pa - v.po2, pf = v.po2 / fio2;
      const low = room ? v.po2 < 80 : v.po2 < F.expPao2(fio2 * 100) * 0.8 || pf < 300;
      let type;
      if (low) type = pco2 > 45 ? (hco3 > 26 ? 't2c' : 't2a') : 't1';
      else type = pco2 > 45 ? (hco3 > 26 ? 't2c' : 't2a') : pco2 < 35 ? (out.disorders.includes('macid') ? 'hv2' : 'hv1') : 'ok';
      const TT = { t1: 'نارسایی (اختلال) تنفسی نوع ۱', t2a: 'نارسایی تنفسی نوع ۲ حاد', t2c: 'نارسایی تنفسی نوع ۲ مزمن', hv1: 'هیپرونتیلاسیون اولیه', hv2: 'هیپرونتیلاسیون ثانویه (جبران اسیدوز متابولیک)', ok: 'تبادل گاز طبیعی' };
      if (type === 't2c' && pH < 7.35) TT.t2c = 'نارسایی تنفسی نوع ۲ حاد روی مزمن';
      out.gas = { type, label: TT[type], pa, aa, pf, room, low };
      out.steps.push(`<b>تبادل گاز:</b> PaO₂ = ${fa(v.po2, 0)} ${room ? 'در هوای اتاق' : `با FiO₂ ${fa(fio2 * 100, 0)}٪`} ← ${low ? 'پایین' : 'کافی'} · PaCO₂ ${pTxt} ← <b>${TT[type]}</b>`);
      if (room) {
        const s = F.hypoxSev(v.po2);
        if (s) { out.gas.sev = s; out.steps.push(`شدت هیپوکسمی: <b>${s.label}</b> (معادل SaO₂ حدود ${s.sat})`); }
        const e = v.age ? F.aaExp(v.age) : 20;
        out.steps.push(`<b>گرادیان A–a:</b> PAO₂ = ${n(0.21)} × (${fa(v.patm || 760)} − ${n(47)}) − ${fa(pco2)} ÷ ${n(0.8)} = ${fa(pa, 0)} ← A–a = ${fa(pa, 0)} − ${fa(v.po2, 0)} = <b>${fa(aa, 0)}</b> mmHg (حد طبیعی ${v.age ? `برای ${fa(v.age)} سال ≈ ${fa(e, 0)}` : 'کمتر از ۲۰'})`);
        if (aa > e + 2) out.notes.push('گرادیان A–a بالاست ← مشکل در خود ریه (عدم تناسب V/Q، شانت یا اختلال انتشار)؛ مثلاً پنومونی یا آمبولی.');
        else if (low) out.notes.push('هیپوکسمی با گرادیان A–a طبیعی ← هیپوونتیلاسیون یا اکسیژن کم هوای دمی (ارتفاع)؛ ریه خودش سالم است.');
        if (v.po2 + pco2 > 150) out.warn.push('در هوای اتاق مجموع PaO₂ و PaCO₂ از ۱۴۰ تا ۱۵۰ بیشتر نمی‌شود؛ حباب هوا در نمونه یا دریافت اکسیژن را بررسی کن.');
      } else {
        const ps = F.pfSev(pf);
        out.gas.sev = ps;
        out.steps.push(`<b>PaO₂/FiO₂:</b> ${fa(v.po2, 0)} ÷ ${fa(fio2, 2)} = <b>${fa(pf, 0)}</b> ${ps ? `← اختلال اکسیژناسیون ${ps.label}` : '← طبیعی (بیش از ۳۰۰)'} · PaO₂ مورد انتظار با این FiO₂ حدود ${fa(F.expPao2(fio2 * 100), 0)}`);
      }
      if (v.po2 > pa + 5) out.warn.push('PaO₂ از فشار اکسیژن حبابچه‌ای بیشتر است که ممکن نیست؛ FiO₂ یا نمونه را بررسی کن.');
      if (type === 't2a' || type === 't2c') out.notes.push('در نارسایی نوع ۲، پالس اکسیمتری جانشین ABG نیست؛ PaCO₂ را پایش کن و اکسیژن را کنترل‌شده بده (هدف SpO₂ ۸۸ تا ۹۲٪ در بیمار مستعد هیپرکاپنی).');
    }

    /* ۷. جمع‌بندی */
    const uniq = out.disorders.filter((d, i) => out.disorders.indexOf(d) === i);
    out.disorders = uniq;
    /* وضعیت جبران به زبان فلوچارت کتاب: جبران‌نشده، نسبی یا کامل */
    if (prim) {
      const other = { macid: pco2 < 35, malk: pco2 > 45, racid: hco3 > 26, ralk: hco3 < 22 }[prim];
      out.compState = !other ? 'u' : out.status === 'normal' ? 'c' : 'p';
      out.compText = { u: 'جبران‌نشده', p: 'با جبران نسبی', c: 'جبران‌شده' }[out.compState];
    }
    const AGS = { hagma: ' با آنیون گپ بالا', nagma: ' با آنیون گپ طبیعی (هیپرکلرمیک)', both: ' با گپ بالا و گپ طبیعی' };
    const names = uniq.map(d => {
      let t = DN[d];
      if (d === prim && out.compText) t += ' ' + out.compText;
      if (d === 'macid' && out.agType) t += AGS[out.agType];
      return t;
    });
    out.summary = names.length ? names.join(' + ') : 'وضعیت اسید و باز طبیعی';
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
      kind: 'num', q: 'گرادیان A–a این بیمار در هوای اتاق چند mmHg است؟',
      case: [['بیمار', `${fa(age)} ساله، هوای اتاق، سطح دریا`]], lab: { pco2, po2 },
      ans: round(aa, 0), tol: 3, unit: 'mmHg',
      hint: 'PAO₂ = ۰٫۲۱ × ۷۱۳ − PaCO₂ ÷ ۰٫۸ ؛ A–a = PAO₂ − PaO₂',
      why: `PAO₂ = ${n(0.21)} × ${n(713)} − ${fa(pco2)} ÷ ${n(0.8)} = ${n(149.7)} − ${fa(pco2 / 0.8)} = ${fa(pa, 0)}<br>A–a = ${fa(pa, 0)} − ${fa(po2)} = <b>${fa(aa, 0)}</b><br>حد طبیعی برای ${fa(age)} سال ≈ سن ÷ ۴ + ۴ = ${fa(F.aaExp(age), 0)} ← ${aa > F.aaExp(age) + 2 ? 'بالا؛ مشکل در خود ریه (V/Q، شانت یا انتشار).' : 'طبیعی؛ اگر هیپوکسمی هست، به هیپوونتیلاسیون فکر کن.'}`
    };
  };
  G['o.pao2'] = () => {
    const fio2 = R.pick([21, 28, 35, 40, 50, 60]), pco2 = R.int(30, 60);
    const pa = F.pAO2(fio2 / 100, pco2);
    return {
      kind: 'num', q: 'فشار اکسیژن حبابچه‌ای (PAO₂) چند mmHg است؟',
      case: [['FiO₂', fa(fio2) + '٪'], ['PaCO₂', fa(pco2) + ' mmHg'], ['محل', 'سطح دریا']],
      ans: round(pa, 0), tol: 4, unit: 'mmHg', hint: 'PAO₂ = FiO₂ × (۷۶۰ − ۴۷) − PaCO₂ ÷ ۰٫۸',
      why: `${fa(fio2 / 100, 2)} × ${n(713)} − ${fa(pco2)} ÷ ${n(0.8)} = ${fa(fio2 / 100 * 713, 0)} − ${fa(pco2 / 0.8, 0)} = <b>${fa(pa, 0)}</b>`
    };
  };
  G['o.pf'] = () => {
    const fio2 = R.pick([30, 40, 50, 60, 70, 80, 100]), po2 = R.int(55, 160);
    const pf = po2 / (fio2 / 100), s = F.pfSev(pf);
    return {
      kind: 'num', q: 'نسبت PaO₂/FiO₂ (P/F) این بیمار چند است؟',
      case: [['بیمار', 'تحت تهویه مکانیکی، PEEP = ۸'], ['FiO₂', fa(fio2) + '٪'], ['PaO₂', fa(po2) + ' mmHg']],
      ans: round(pf, 0), tol: 3, unit: '', hint: 'PaO₂ ÷ FiO₂ (به صورت کسر، مثلاً ۰٫۴)',
      why: `${fa(po2)} ÷ ${fa(fio2 / 100, 2)} = <b>${fa(pf, 0)}</b><br>${s ? `اگر معیارهای دیگر ARDS (حاد، ارتشاح دوطرفه، رد علت قلبی) هم باشد: <b>ARDS ${s.label}</b>` : 'بیش از ۳۰۰: اکسیژناسیون قابل قبول.'}`
    };
  };
  G['o.cao2'] = () => {
    const hb = R.pick([6, 7, 8, 10, 12, 14, 15, 16]), sat = R.pick([80, 85, 88, 90, 94, 97, 99]), po2 = sat >= 97 ? R.int(90, 110) : sat >= 90 ? R.int(60, 75) : R.int(45, 58);
    const c = F.cao2(hb, sat, po2);
    return {
      kind: 'num', q: 'محتوای اکسیژن خون شریانی (CaO₂) چند میلی‌لیتر در دسی‌لیتر است؟',
      case: [['Hb', fa(hb) + ' g/dL'], ['SaO₂', fa(sat) + '٪'], ['PaO₂', fa(po2) + ' mmHg']],
      ans: round(c, 1), tol: 0.4, unit: 'mL/dL', hint: 'CaO₂ = ۱٫۳۴ × Hb × SaO₂ + ۰٫۰۰۳ × PaO₂',
      why: `${n(1.34)} × ${fa(hb)} × ${fa(sat / 100, 2)} + ${n(0.003)} × ${fa(po2)} = ${fa(1.34 * hb * sat / 100, 2)} + ${fa(0.003 * po2, 2)} = <b>${fa(c, 1)}</b> mL/dL (طبیعی حدود ۱۸ تا ۲۰)<br><small>اکسیژن محلول (بخش دوم) ناچیز است؛ محتوای اکسیژن را Hb و اشباع می‌سازند.</small>`
    };
  };
  G['o.sev'] = () => {
    const po2 = R.pick([35, 38, 42, 48, 52, 57, 62, 66, 71, 76, 85, 92]);
    const s = F.hypoxSev(po2);
    const all = ['هیپوکسمی خفیف', 'هیپوکسمی متوسط', 'هیپوکسمی شدید', 'اکسیژناسیون طبیعی'];
    const right = s ? 'هیپوکسمی ' + s.label : 'اکسیژناسیون طبیعی';
    return {
      kind: 'mcq', q: 'شدت هیپوکسمی این بیمار چیست؟', lab: { po2 }, case: [['FiO₂', 'هوای اتاق']],
      opts: [right].concat(all.filter(x => x !== right)), a: 0,
      why: `PaO₂ ${fa(po2)}: خفیف ۶۰ تا ۷۹، متوسط ۴۰ تا ۵۹، شدید کمتر از ۴۰ ← <b>${right}</b>`
    };
  };
  G['o.nc'] = () => {
    const L = R.int(1, 6), f = F.ncFio2(L);
    return {
      kind: 'num', q: `کانول بینی با ${fa(L)} لیتر در دقیقه تقریباً چه FiO₂ای می‌دهد؟`, case: [['وسیله', 'کانول بینی'], ['جریان', fa(L) + ' لیتر در دقیقه']],
      ans: f, tol: 2, unit: '٪', hint: '۲۱ + ۴ × لیتر',
      why: `${n(21)} + ${n(4)} × ${fa(L)} = <b>${fa(f)}٪</b><br><small>تخمینی است و به الگوی تنفس بیمار بستگی دارد؛ بیش از ۶ لیتر فقط خشکی مخاط اضافه می‌کند.</small>`
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
    const TT = { t1: 'نارسایی تنفسی نوع ۱', t2a: 'نارسایی تنفسی نوع ۲ حاد', t2c: 'نارسایی تنفسی نوع ۲ مزمن', hv1: 'هیپرونتیلاسیون اولیه', hv2: 'هیپرونتیلاسیون ثانویه به اسیدوز متابولیک' };
    const why = {
      t1: 'PaO₂ پایین با PaCO₂ طبیعی یا پایین ← نوع ۱ (معمولاً عدم تناسب V/Q).',
      t2a: 'PaCO₂ بالا با HCO₃ طبیعی ← نوع ۲ حاد؛ کلیه هنوز فرصت جبران نداشته.',
      t2c: 'PaCO₂ بالا با HCO₃ بالا ← نوع ۲ مزمن؛ جبران کلیوی روزها طول می‌کشد، پس مشکل قدیمی است.',
      hv1: 'PaO₂ طبیعی، PaCO₂ پایین و HCO₃ طبیعی ← هیپرونتیلاسیون اولیه (اضطراب، درد، تب…).',
      hv2: 'PaCO₂ پایین همراه HCO₃ پایین ← ریه در حال جبران اسیدوز متابولیک است.'
    };
    const right = TT[kind];
    return { kind: 'mcq', q: 'وضعیت تبادل گاز در این ABG (هوای اتاق) چیست؟', lab: g, opts: [right].concat(Object.values(TT).filter(x => x !== right).slice(0, 3)), a: 0, why: why[kind] };
  };

  /* ===== pH ===== */
  G['p.h80'] = () => {
    const pH = R.step(7.2, 7.5, 0.01);
    const h = F.h80(pH);
    return {
      kind: 'num', q: 'غلظت یون هیدروژن [H⁺] تقریباً چند nEq/L است؟', lab: { pH },
      ans: h, tol: 2, unit: 'nEq/L', hint: '۸۰ منهای دو رقم اعشار pH',
      why: `دو رقم اعشار pH ${fa(pH, 2)} = ${fa(Math.round((pH - 7) * 100))} ← ${n(80)} − ${fa(Math.round((pH - 7) * 100))} = <b>${fa(h)}</b><br><small>مقدار دقیق: ۱۰<sup>(۹ − pH)</sup> = ${fa(F.hFromPh(pH))}</small>`
    };
  };
  G['p.hkb'] = () => {
    const pco2 = R.int(20, 80), hco3 = R.int(8, 40);
    const h = F.hKB(pco2, hco3);
    return {
      kind: 'num', q: '[H⁺] را با معادله هندرسون (کسیرر–بلیچ) حساب کن:', lab: { pco2, hco3 },
      ans: round(h, 0), tol: 1.5, unit: 'nEq/L', hint: '[H⁺] = ۲۴ × PCO₂ ÷ HCO₃',
      why: `${n(24)} × ${fa(pco2)} ÷ ${fa(hco3)} = <b>${fa(h, 0)}</b> nEq/L ← pH حدود ${fa(F.phFromH(h), 2)}`
    };
  };
  G['p.hh'] = () => {
    const pco2 = R.int(20, 80), hco3 = R.int(8, 40);
    const pH = F.phHH(pco2, hco3);
    return {
      kind: 'num', q: 'pH این نمونه با معادله هندرسون–هاسلباخ چند است؟', lab: { pco2, hco3 },
      ans: round(pH, 2), tol: 0.02, unit: '', hint: 'pH = ۶٫۱ + log (HCO₃ ÷ (۰٫۰۳ × PCO₂))',
      why: `${n(6.1)} + log(${fa(hco3)} ÷ (${n(0.03)} × ${fa(pco2)})) = ${n(6.1)} + log(${fa(hco3 / (0.03 * pco2), 2)}) = <b>${fa(pH, 2)}</b>`
    };
  };
  G['p.fold'] = () => {
    const a = R.pick([6.8, 7.0, 7.1, 7.2]), d = R.pick([1, 2]);
    const b = round(a + d * 0.3, 1);
    const k = Math.pow(10, b - a);
    return {
      kind: 'num', q: `غلظت H⁺ در pH ${fa(a, 1)} تقریباً چند برابر pH ${fa(b, 1)} است؟`,
      ans: round(k, 0), tol: Math.max(0.3, k * 0.08), unit: 'برابر', hint: 'هر ۰٫۳ واحد کاهش pH ≈ دو برابر شدن H⁺ (و هر ۱ واحد = ۱۰ برابر)',
      why: `۱۰<sup>(${fa(b, 1)} − ${fa(a, 1)})</sup> = ۱۰<sup>${fa(b - a, 1)}</sup> ≈ <b>${fa(k, 0)}</b> برابر<br><small>مقیاس pH لگاریتمی است؛ تغییرات کوچک pH یعنی تغییرات بزرگ اسیدیته.</small>`
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
    const cn = { u: 'جبران‌نشده', p: 'با جبران نسبی', c: 'جبران‌شده' };
    const right = `${DN[d]} ${cn[c]}`;
    const others = [];
    ['u', 'p', 'c'].forEach(x => { if (x !== c) others.push(`${DN[d]} ${cn[x]}`); });
    const opp = { macid: 'ralk', ralk: 'macid', racid: 'malk', malk: 'racid' }[d];
    others.push(`${DN[opp]} ${cn[c]}`);
    const hint = { macid: 'HCO₃ پایین هم‌جهت با pH', malk: 'HCO₃ بالا هم‌جهت با pH', racid: 'PCO₂ بالا هم‌جهت با pH', ralk: 'PCO₂ پایین هم‌جهت با pH' }[d];
    const cw = c === 'u' ? 'جزء دیگر طبیعی است ← جبران‌نشده' : c === 'p' ? 'جزء دیگر در جهت مخالف تغییر کرده ولی pH هنوز غیرطبیعی است ← جبران نسبی' : 'pH به محدوده طبیعی برگشته ← جبران‌شده (و سمتی از ۷٫۴۰ که pH در آن است، اختلال اولیه را نشان می‌دهد)';
    return { kind: 'mcq', q: 'این ABG کدام اختلال اسید و باز را نشان می‌دهد؟', lab: g, opts: [right].concat(others.slice(0, 3)), a: 0, why: `${hint} ← ${DN[d]}.<br>${cw}.` };
  };

  /* ===== AG ===== */
  G['a.ag'] = () => {
    const na = R.int(128, 146), hco3 = R.int(6, 24), ag = R.int(8, 32), cl = na - hco3 - ag;
    return {
      kind: 'num', q: 'آنیون گپ این بیمار چند است؟', lab: { na, cl, hco3 },
      ans: ag, tol: 0.5, unit: 'mEq/L', hint: 'AG = Na − (Cl + HCO₃)',
      why: `${fa(na)} − (${fa(cl)} + ${fa(hco3)}) = <b>${fa(ag)}</b> ← ${ag > 12 ? 'بالا؛ آنیون‌های اندازه‌گیری‌نشده (لاکتات، کتون، سم…) زیاد شده‌اند.' : 'طبیعی (۸ تا ۱۲)؛ اگر اسیدوز متابولیک هست، هیپرکلرمیک است.'}`
    };
  };
  G['a.agk'] = () => {
    const na = R.int(130, 145), k = R.step(3.0, 6.0, 0.1), hco3 = R.int(6, 26), cl = R.int(92, 112);
    const ag = F.ag(na, cl, hco3, k);
    return {
      kind: 'num', q: 'آنیون گپ را به روش کتاب (با پتاسیم) حساب کن:', lab: { na, k, cl, hco3 },
      ans: round(ag, 1), tol: 0.3, unit: 'mEq/L', hint: 'AG = (Na + K) − (Cl + HCO₃)',
      why: `(${fa(na)} + ${fa(k)}) − (${fa(cl)} + ${fa(hco3)}) = ${fa(na + k)} − ${fa(cl + hco3)} = <b>${fa(ag)}</b> ← طبیعی با پتاسیم ۱۰ تا ۲۰ ${ag > 20 ? '(بالا)' : ''}`
    };
  };
  G['a.agc'] = () => {
    const ag = R.int(8, 16), alb = R.step(1.5, 3.5, 0.1);
    const c = F.agCorr(ag, alb);
    return {
      kind: 'num', q: 'آنیون گپ اصلاح‌شده با آلبومین چند است؟', case: [['آنیون گپ محاسبه‌شده', fa(ag) + ' mEq/L'], ['آلبومین', fa(alb) + ' g/dL']],
      ans: round(c, 1), tol: 0.3, unit: 'mEq/L', hint: 'AG + ۲٫۵ × (۴ − آلبومین)',
      why: `${fa(ag)} + ${n(2.5)} × (${n(4)} − ${fa(alb)}) = ${fa(ag)} + ${fa(2.5 * (4 - alb), 2)} = <b>${fa(c)}</b><br>${c > 12 && ag <= 12 ? 'آنیون گپ ظاهراً طبیعی بود ولی پس از اصلاح بالاست؛ اسیدوز با گپ بالا پنهان شده بود!' : c > 12 ? 'بالا.' : 'طبیعی.'}`
    };
  };
  G['a.winter'] = () => {
    const hco3 = R.int(5, 20), e = F.winter(hco3);
    return {
      kind: 'num', q: 'در این اسیدوز متابولیک، PCO₂ مورد انتظار (فرمول وینتر) چند است؟', lab: { hco3 },
      ans: round(e, 1), tol: 0.6, unit: 'mmHg', hint: '۱٫۵ × HCO₃ + ۸ (± ۲)',
      why: `${n(1.5)} × ${fa(hco3)} + ${n(8)} = <b>${fa(e)}</b> ← محدوده ${fa(e - 2)} تا ${fa(e + 2)}<br><small>PCO₂ بالاتر ← اسیدوز تنفسی همراه؛ پایین‌تر ← آلکالوز تنفسی همراه.</small>`
    };
  };
  G['a.winterMcq'] = () => {
    const hco3 = R.int(6, 18), e = F.winter(hco3), kind = R.pick(['ok', 'hi', 'lo']);
    const pco2 = kind === 'ok' ? round(e + R.pick([-1, 0, 1]), 0) : kind === 'hi' ? round(e + R.int(5, 12), 0) : round(Math.max(10, e - R.int(5, 9)), 0);
    const g = gas(pco2, hco3);
    const opts = ['اسیدوز متابولیک با جبران تنفسی مناسب', 'اسیدوز متابولیک + اسیدوز تنفسی', 'اسیدوز متابولیک + آلکالوز تنفسی', 'اسیدوز تنفسی اولیه'];
    const a = kind === 'ok' ? 0 : kind === 'hi' ? 1 : 2;
    return { kind: 'mcq', q: 'با فرمول وینتر، تفسیر کامل این گاز خون چیست؟', lab: g, opts: [opts[a]].concat(opts.filter((_, i) => i !== a)), a: 0, why: `PCO₂ مورد انتظار = ${n(1.5)} × ${fa(hco3)} + ${n(8)} = ${fa(e)} ± ${n(2)}؛ PCO₂ بیمار ${fa(pco2)} ← <b>${opts[a]}</b>` };
  };
  G['a.delta'] = () => {
    const hco3 = R.int(8, 18), kind = R.pick(['pure', 'nag', 'alk']);
    const dH = 24 - hco3;
    const dAG = kind === 'pure' ? Math.round(dH * R.pick([1, 1.2, 1.5, 1.8])) : kind === 'nag' ? Math.max(3, Math.round(dH * R.pick([0.4, 0.5, 0.7]))) : Math.round(dH * R.pick([2.4, 3, 3.5]));
    const ag = 12 + dAG, d = dAG / dH;
    return {
      kind: 'num', q: 'نسبت دلتا (ΔAG ÷ ΔHCO₃) چند است؟', case: [['آنیون گپ', fa(ag)], ['HCO₃', fa(hco3) + ' mEq/L'], ['پایه طبیعی', 'AG = ۱۲ و HCO₃ = ۲۴']],
      ans: round(d, 2), tol: 0.06, unit: '', hint: '(AG − ۱۲) ÷ (۲۴ − HCO₃)',
      why: `(${fa(ag)} − ${n(12)}) ÷ (${n(24)} − ${fa(hco3)}) = ${fa(dAG)} ÷ ${fa(dH)} = <b>${fa(d, 2)}</b><br>${d < 1 ? 'کمتر از ۱ ← HCO₃ بیش از افزایش گپ افت کرده: <b>اسیدوز با گپ طبیعی همراه</b> (مثلاً اسهال در کنار کتواسیدوز).' : d > 2 ? 'بیشتر از ۲ ← HCO₃ کمتر از انتظار افت کرده: <b>آلکالوز متابولیک همراه</b> (مثلاً استفراغ در کنار اسیدوز).' : 'بین ۱ و ۲ ← اسیدوز متابولیک خالص با گپ بالا.'}`
    };
  };
  G['a.osm'] = () => {
    const na = R.int(132, 146), glu = R.step(80, 300, 10), bun = R.int(8, 40), gap = R.pick([2, 5, 8, 18, 25, 35, 50]);
    const calc = F.osm(na, glu, bun), meas = Math.round(calc + gap);
    const g = meas - calc;
    return {
      kind: 'num', q: 'شکاف اسمولار (اسمولار گپ) این بیمار چند است؟', lab: { na, glu }, case: [['BUN', fa(bun) + ' mg/dL'], ['اسمولالیته اندازه‌گیری‌شده', fa(meas) + ' mOsm/kg']],
      ans: round(g, 0), tol: 2, unit: 'mOsm/kg', hint: 'اندازه‌گیری‌شده − (۲Na + قند÷۱۸ + BUN÷۲٫۸)',
      why: `محاسبه‌شده = ${n(2)}×${fa(na)} + ${fa(glu)}÷${n(18)} + ${fa(bun)}÷${n(2.8)} = ${fa(calc, 0)}<br>شکاف = ${fa(meas)} − ${fa(calc, 0)} = <b>${fa(g, 0)}</b> ← ${g > 10 ? 'بالا؛ در اسیدوز با گپ بالا به <b>متانول یا اتیلن گلیکول</b> فکر کن.' : 'طبیعی (کمتر از ۱۰).'}`
    };
  };
  G['a.uag'] = () => {
    const una = R.int(20, 80), uk = R.int(10, 50), ucl = R.int(30, 140);
    const u = F.uag(una, uk, ucl);
    return {
      kind: 'num', q: 'آنیون گپ ادرار چند است؟', case: [['تشخیص', 'اسیدوز متابولیک با آنیون گپ طبیعی'], ['Na ادرار', fa(una)], ['K ادرار', fa(uk)], ['Cl ادرار', fa(ucl)]],
      ans: u, tol: 0.5, unit: 'mEq/L', hint: '(Na + K) ادرار − Cl ادرار',
      why: `(${fa(una)} + ${fa(uk)}) − ${fa(ucl)} = <b>${fa(u)}</b> ← ${u < 0 ? 'منفی: کلیه آمونیوم (همراه کلر) زیاد دفع می‌کند؛ علت <b>گوارشی (اسهال)</b> است.' : 'مثبت: دفع آمونیوم مختل است؛ <b>اسیدوز توبولار کلیوی (RTA)</b> محتمل است.'}`
    };
  };
  G['a.bicarb'] = () => {
    const w = R.step(50, 90, 5), hco3 = R.int(4, 10), target = R.pick([12, 15]);
    const d = F.bicarbDef(w, hco3, target);
    return {
      kind: 'num', q: `برای رساندن HCO₃ به ${fa(target)}، تقریباً چند mEq بی‌کربنات سدیم لازم است؟`, case: [['وزن', fa(w) + ' کیلوگرم'], ['HCO₃', fa(hco3) + ' mEq/L'], ['pH', '۷٫۰۵']],
      ans: round(d, 0), tol: Math.max(5, d * 0.04), unit: 'mEq', hint: '۰٫۵ × وزن × (HCO₃ هدف − HCO₃ فعلی)',
      why: `${n(0.5)} × ${fa(w)} × (${fa(target)} − ${fa(hco3)}) = <b>${fa(d, 0)}</b> mEq<br><small>معمولاً نصف آن را آهسته می‌دهند و دوباره گاز خون می‌گیرند؛ هدف رفع اسیدمی تهدیدکننده است، نه رساندن HCO₃ به حد طبیعی. هر میلی‌لیتر بی‌کربنات ۸٫۴٪ = ۱ mEq.</small>`
    };
  };

  /* ===== CO2 ===== */
  G['c.acute'] = () => {
    const p = R.int(50, 80), e = F.racid(p, false);
    return {
      kind: 'num', q: 'در اسیدوز تنفسی حاد، HCO₃ مورد انتظار چند است؟', lab: { pco2: p },
      ans: round(e, 1), tol: 0.5, unit: 'mEq/L', hint: 'حاد: به ازای هر ۱۰ mmHg افزایش PCO₂، HCO₃ حدود ۱ واحد بالا می‌رود',
      why: `${n(24)} + ${n(0.1)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>در حالت حاد فقط بافرها کار کرده‌اند؛ کلیه هنوز وارد عمل نشده.</small>`
    };
  };
  G['c.chronic'] = () => {
    const p = R.int(50, 75), e = F.racid(p, true);
    return {
      kind: 'num', q: 'در اسیدوز تنفسی مزمن (مثلاً COPD)، HCO₃ مورد انتظار چند است؟', lab: { pco2: p },
      ans: round(e, 1), tol: 1, unit: 'mEq/L', hint: 'مزمن: به ازای هر ۱۰ mmHg افزایش PCO₂، HCO₃ حدود ۴ واحد بالا می‌رود',
      why: `${n(24)} + ${n(0.4)} × (${fa(p)} − ${n(40)}) = <b>${fa(e)}</b><br><small>کلیه‌ها طی ۳ تا ۵ روز HCO₃ را نگه می‌دارند.</small>`
    };
  };
  G['c.alk'] = () => {
    const p = R.int(20, 32), chronic = Math.random() < 0.5, e = F.ralk(p, chronic);
    return {
      kind: 'num', q: `در آلکالوز تنفسی ${chronic ? 'مزمن' : 'حاد'}، HCO₃ مورد انتظار چند است؟`, lab: { pco2: p },
      ans: round(e, 1), tol: 0.6, unit: 'mEq/L', hint: 'حاد: ۲ واحد و مزمن: ۴ واحد کاهش به ازای هر ۱۰ mmHg',
      why: `${n(24)} − ${n(chronic ? 0.4 : 0.2)} × (${n(40)} − ${fa(p)}) = <b>${fa(e)}</b>`
    };
  };
  G['c.malk'] = () => {
    const h = R.int(30, 45), e = F.malk(h);
    return {
      kind: 'num', q: 'در این آلکالوز متابولیک، PCO₂ مورد انتظار چند است؟', lab: { hco3: h },
      ans: round(e, 1), tol: 1, unit: 'mmHg', hint: '۴۰ + ۰٫۷ × (HCO₃ − ۲۴)',
      why: `${n(40)} + ${n(0.7)} × (${fa(h)} − ${n(24)}) = <b>${fa(e)}</b> (± ۵)<br><small>قاعده سریع دیگر: HCO₃ + ۱۵ = ${fa(h + 15)}</small>`
    };
  };
  G['c.ph'] = () => {
    const p = R.int(50, 80), chronic = Math.random() < 0.4, e = F.racidPh(p, chronic);
    return {
      kind: 'num', q: `اگر اسیدوز تنفسی ${chronic ? 'مزمن' : 'حاد'} و خالص باشد، pH مورد انتظار چند است؟`, lab: { pco2: p },
      ans: round(e, 2), tol: 0.02, unit: '', hint: 'حاد: ۰٫۰۸ و مزمن: ۰٫۰۳ کاهش pH به ازای هر ۱۰ mmHg',
      why: `${n(7.4)} − ${n(chronic ? 0.003 : 0.008)} × (${fa(p)} − ${n(40)}) = <b>${fa(e, 2)}</b>`
    };
  };
  G['c.racidMcq'] = () => {
    const p = R.int(58, 75), kind = R.pick(['a', 'c', 'am', 'ma']);
    const h = kind === 'a' ? round(F.racid(p, false), 0) : kind === 'c' ? round(F.racid(p, true), 0) : kind === 'am' ? round(F.racid(p, false) - 5, 0) : round(F.racid(p, true) + 6, 0);
    const g = gas(p, h);
    const opts = ['اسیدوز تنفسی حاد', 'اسیدوز تنفسی مزمن (جبران‌شده)', 'اسیدوز تنفسی + اسیدوز متابولیک', 'اسیدوز تنفسی + آلکالوز متابولیک'];
    const a = { a: 0, c: 1, am: 2, ma: 3 }[kind];
    return { kind: 'mcq', q: 'HCO₃ مورد انتظار را حساب کن. تفسیر درست؟', lab: g, opts: [opts[a]].concat(opts.filter((_, i) => i !== a)), a: 0, why: `حاد: ${n(24)} + ${n(0.1)} × ${fa(p - 40)} = ${fa(F.racid(p, false))} · مزمن: ${n(24)} + ${n(0.4)} × ${fa(p - 40)} = ${fa(F.racid(p, true))}؛ HCO₃ بیمار ${fa(h)} ← <b>${opts[a]}</b>` };
  };

  /* ===== VBG ===== */
  G['v.pco2'] = () => {
    const pv = R.int(40, 75), e = pv - 5;
    return {
      kind: 'num', q: 'PCO₂ شریانی این بیمار تقریباً چند است؟', case: [['نمونه', 'VBG از ورید محیطی'], ['PvCO₂', fa(pv) + ' mmHg'], ['همودینامیک', 'پایدار']],
      ans: e, tol: 3, unit: 'mmHg', hint: 'PCO₂ وریدی محیطی حدود ۳ تا ۸ (میانگین ۵) بیشتر از شریانی است',
      why: `${fa(pv)} − ${n(5)} ≈ <b>${fa(e)}</b> (محدوده ${fa(pv - 8)} تا ${fa(pv - 3)})<br><small>در شوک این اختلاف بزرگ‌تر و غیرقابل اعتماد می‌شود.</small>`
    };
  };
  G['v.ph'] = () => {
    const pv = R.step(7.1, 7.4, 0.01), e = pv + 0.04;
    return {
      kind: 'num', q: 'pH شریانی تقریبی چند است؟', case: [['نمونه', 'VBG محیطی'], ['pH وریدی', fa(pv, 2)]],
      ans: round(e, 2), tol: 0.02, unit: '', hint: 'pH وریدی حدود ۰٫۰۳ تا ۰٫۰۵ پایین‌تر از شریانی است',
      why: `${fa(pv, 2)} + ${n(0.04)} ≈ <b>${fa(e, 2)}</b>`
    };
  };
  G['v.neo'] = () => {
    const w = R.step(0.8, 4, 0.1), bd = R.int(8, 18);
    const d = F.bicarbBE(w, bd);
    return {
      kind: 'num', q: 'مقدار بی‌کربنات لازم برای اصلاح کامل این کمبود باز چند mEq است؟', case: [['بیمار', 'نوزاد در NICU'], ['وزن', fa(w) + ' کیلوگرم'], ['BE', '−' + fa(bd) + ' mEq/L']],
      ans: round(d, 1), tol: 0.2, unit: 'mEq', hint: 'کمبود باز × وزن × ۰٫۳',
      why: `${fa(bd)} × ${fa(w)} × ${n(0.3)} = <b>${fa(d)}</b> mEq<br><small>بی‌کربنات روتین نیست؛ اکسیژن‌رسانی و پرفیوژن مهم‌ترند. اگر لازم شد: رقیق ۱:۱ با آب مقطر (۴٫۲٪) و آهسته طی ۳۰ تا ۶۰ دقیقه، معمولاً نیمی از مقدار محاسبه‌شده.</small>`
    };
  };
  G['v.kpa'] = () => {
    const toMm = Math.random() < 0.5;
    if (toMm) {
      const k = R.step(3, 14, 0.5), m = F.mmhg(k);
      return { kind: 'num', q: `${fa(k)} kPa چند mmHg است؟`, ans: round(m, 1), tol: 0.8, unit: 'mmHg', hint: 'kPa × ۷٫۵', why: `${fa(k)} × ${n(7.5)} = <b>${fa(m)}</b> mmHg` };
    }
    const m = R.int(25, 120), k = F.kpa(m);
    return { kind: 'num', q: `${fa(m)} mmHg چند kPa است؟`, ans: round(k, 1), tol: 0.15, unit: 'kPa', hint: 'mmHg ÷ ۷٫۵', why: `${fa(m)} ÷ ${n(7.5)} = <b>${fa(k)}</b> kPa` };
  };
  G['v.be'] = () => {
    const be = R.pick([-14, -9, -6, -3, -1, 0, 1, 3, 5, 8, 12]);
    const right = be < -2 ? 'به سمت اسیدوز متابولیک' : be > 2 ? 'به سمت آلکالوز متابولیک' : 'جزء متابولیک طبیعی';
    const all = ['به سمت اسیدوز متابولیک', 'به سمت آلکالوز متابولیک', 'جزء متابولیک طبیعی', 'اسیدوز تنفسی'];
    return { kind: 'mcq', q: 'این base excess در بزرگسال چه معنایی دارد؟', lab: { be }, opts: [right].concat(all.filter(x => x !== right)), a: 0, why: `BE طبیعی بزرگسال ۲− تا ۲+ است؛ BE = ${sg(be, 0)} ← <b>${right}</b>. BE فقط جزء متابولیک را نشان می‌دهد و مستقل از PCO₂ است.` };
  };

  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round; EA.sg = sg;
  EA.F = F; EA.gen = G; EA.R = R; EA.NORM = NORM; EA.labRows = labRows; EA.interpret = interpret; EA.DN = DN; EA.gasOf = gas;

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — دنیای ۱: اکسیژن و تبادل گاز
 * سازنده‌های کوتاه (مشترک در همه فایل‌های محتوا):
 *   L(عنوان، متن)                         کارت آموزشی
 *   M(سؤال، گزینه‌ها، چرا، کیس، آزمایش)     چندگزینه‌ای — گزینه اول درست است و در اجرا به‌هم می‌ریزد
 *   T(جمله، درست/غلط، چرا)                 درست یا نادرست
 *   B(جمله با ___، گزینه‌ها، چرا)          جای خالی — گزینه اول درست است
 *   O(سؤال، مراحل به ترتیب درست، چرا)       مرتب‌سازی
 *   P(سؤال، جفت‌ها)                        جفت‌کردن
 *   N(شناسه مولد)                          مسئله محاسباتی با اعداد تازه
 * منابع: کتاب «ABG در بالین» (فصل‌های ۱، ۲، ۶ و ۸)، جزوه تفسیر ABG و VBG دکتر رضا ژیان و دکتر شایان سیگاری،
 * و به‌روزرسانی با راهنماهای BTS برای اکسیژن‌درمانی و تعریف برلین ARDS. */
(function (root) {
  const EA = root.EA = root.EA || {};
  const K = EA.K = EA.K || {
    L: (title, body) => ({ t: 'learn', title, body }),
    M: (q, opts, why, kase, lab) => ({ t: 'mcq', q, opts, why, case: kase, lab }),
    T: (q, a, why) => ({ t: 'tf', q, a, why }),
    B: (q, opts, why) => ({ t: 'fill', q, opts, why }),
    O: (q, steps, why) => ({ t: 'order', q, steps, why }),
    P: (q, pairs, why) => ({ t: 'match', q, pairs, why }),
    N: gen => ({ t: 'num', gen }),
    fx: s => `<div class="fx" dir="ltr">${s}</div>`,
    tbl: rows => '<table class="mini">' + rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</table>'
  };
  const { L, M, T, B, O, P, N, fx, tbl } = K;
  EA.worlds = EA.worlds || [];

  EA.worlds.push({
    id: 'o2', sym: 'O₂', name: 'اکسیژن و تبادل گاز', sub: 'ریه، هموگلوبین و PaO₂', color: '#1CB0F6', dark: '#1899D6', light: '#DDF4FF',
    levels: ['نفس‌های اول', 'شکارچیان هیپوکسمی', 'فرماندهان اکسیژن'],
    gens: ['o.aa', 'o.pao2', 'o.pf', 'o.cao2', 'o.sev', 'o.nc', 'o.type'],
    lessons: [
      {
        id: 'o1', title: 'ABG چه می‌گوید؟', icon: '🌬️', items: [
          L('سه عدد اصلی', 'ABG یعنی اندازه‌گیری سه چیز در <b>خون شریانی</b>:<br>• <b>pH</b>: اسیدیته خون<br>• <b>PaO₂</b>: فشار سهمی اکسیژن<br>• <b>PaCO₂</b>: فشار سهمی دی‌اکسید کربن<br><br>با همین سه عدد (و HCO₃ که از آن‌ها محاسبه می‌شود) دو سؤال را جواب می‌دهیم: <b>تبادل گاز ریه</b> چطور است؟ و <b>تعادل اسید و باز</b> چطور است؟'),
          M('کدام مورد جزو سه اندازه‌گیری اصلی ABG نیست؟', ['هموگلوبین', 'pH', 'PaO₂', 'PaCO₂'], 'ABG در اصل pH، PaO₂ و PaCO₂ را می‌سنجد؛ دستگاه‌ها معمولاً Hb و الکترولیت‌ها را هم گزارش می‌کنند ولی جزو تعریف ABG نیستند.'),
          L('فشار سهمی یعنی چه؟', 'فشار هوا در سطح دریا <b>۷۶۰ mmHg</b> است. اکسیژن ۲۱٪ هواست، پس فشار سهمی آن:' + fx('0.21 × 760 ≈ 160 mmHg') + 'CO₂ در هوای دمی تقریباً صفر است. حرف <b>a</b> کوچک یعنی شریانی (PaO₂) و <b>A</b> بزرگ یعنی حبابچه‌ای (PAO₂).'),
          B('اکسیژن حدود ___ درصد هوای اتاق را تشکیل می‌دهد.', ['۲۱', '۷۹', '۱۳٫۵'], '۷۹٪ نیتروژن است و ۱۳٫۵٪ درصد اکسیژن در هوای حبابچه‌ها.'),
          L('PaCO₂ = آینه تهویه', 'CO₂ آن‌قدر راحت از خون به حبابچه منتشر می‌شود که PaCO₂ فقط به <b>تهویه حبابچه‌ای</b> بستگی دارد.<br>مرکز تنفس در ساقه مغز PaCO₂ را حس می‌کند و سرعت و عمق تنفس را تنظیم می‌کند.<br><br>پس <b>PaCO₂ بالا (هیپرکاپنی) همیشه یعنی تهویه حبابچه‌ای کم شده</b> — حتی در سپسیس که تولید CO₂ زیاد است، ریه سالم آن را دفع می‌کند.'),
          T('افزایش PaCO₂ همیشه نشانه کاهش تهویه حبابچه‌ای است.', true, 'درست. ریه طبیعی حتی تولید زیاد CO₂ را دفع می‌کند؛ هیپرکاپنی یعنی تهویه کافی نیست.'),
          M('PaCO₂ اصولاً با کدام عامل تعیین می‌شود؟', ['تهویه حبابچه‌ای', 'غلظت هموگلوبین', 'FiO₂', 'فشار خون'], 'PaCO₂ و تهویه حبابچه‌ای رابطه معکوس دارند: تهویه نصف شود، PaCO₂ تقریباً دو برابر می‌شود.'),
          P('هر نماد را به معنایش وصل کن', [['PaO₂', 'فشار اکسیژن شریانی'], ['PAO₂', 'فشار اکسیژن حبابچه‌ای'], ['SaO₂', 'اشباع اکسیژن شریانی'], ['FiO₂', 'درصد اکسیژن هوای دمی']]),
          T('تبادل O₂ و CO₂ در ریه با انتقال فعال انجام می‌شود.', false, 'نه؛ با <b>انتشار</b> ساده از غشای نازک حبابچه–مویرگ.')
        ]
      },
      {
        id: 'o2b', title: 'هموگلوبین و اشباع', icon: '🩸', items: [
          L('PO₂ مقدار اکسیژن نیست!', 'PO₂ فقط اکسیژن <b>آزاد و محلول</b> را می‌سنجد که حدود ۱٪ اکسیژن خون است. ۹۹٪ اکسیژن به <b>هموگلوبین</b> چسبیده.<br>محتوای اکسیژن خون به دو چیز بستگی دارد:<br>۱. <b>غلظت Hb</b> (ظرفیت حمل)<br>۲. <b>اشباع (SaO₂)</b>: چه درصدی از جاهای خالی Hb پر شده<br><br>PO₂ «نیروی محرکه»‌ای است که Hb را اشباع می‌کند.'),
          M('بیشتر اکسیژن خون به چه شکلی حمل می‌شود؟', ['متصل به هموگلوبین', 'محلول در پلاسما', 'متصل به آلبومین', 'به شکل بی‌کربنات'], 'حدود ۹۹٪ متصل به Hb و فقط ۱٪ محلول.'),
          L('محتوای اکسیژن (CaO₂)', fx('CaO₂ = 1.34 × Hb × SaO₂ + 0.003 × PaO₂') + 'طبیعی حدود <b>۱۸ تا ۲۰ mL/dL</b>. بخش دوم (اکسیژن محلول) تقریباً ناچیز است.<br>برای همین در کم‌خونی شدید، با PaO₂ و SaO₂ کاملاً طبیعی، بافت‌ها ممکن است اکسیژن کافی نگیرند.'),
          N('o.cao2'),
          L('پالس اکسیمتری و محدودیت‌هایش', 'پالس اکسیمتر SpO₂ را از روی انگشت یا لاله گوش می‌سنجد. برای پایش اکسیژناسیون عالی است، ولی:<br>• زیر <b>۷۵٪</b> دقتش کم می‌شود<br>• در <b>پرفیوژن محیطی ضعیف</b> (شوک، سرما) قابل اعتماد نیست<br>• <b>هیچ اطلاعی از PaCO₂ نمی‌دهد</b>؛ پس جانشین ABG در اختلال تهویه نیست<br>• کربوکسی‌هموگلوبین (مسمومیت با CO) را اکسی‌هموگلوبین می‌خواند'),
          T('پالس اکسیمتری طبیعی، هیپرکاپنی را رد می‌کند.', false, 'پالس اکسیمتر فقط اشباع را نشان می‌دهد؛ بیمار با اکسیژن اضافه می‌تواند SpO₂ عالی و PaCO₂ خطرناک داشته باشد.'),
          L('سیانوز', 'سیانوز وقتی دیده می‌شود که <b>هموگلوبین غیراکسیژنه بیش از ۵ g/dL</b> باشد.<br>• Hb = ۱۵: با SaO₂ حدود ۶۶ تا ۸۰٪ سیانوز پیدا می‌شود<br>• Hb = ۶ (مثلاً تالاسمی): باید نصف Hb غیراکسیژنه شود (SaO₂ حدود ۵۰٪)<br><br>پس <b>بیمار کم‌خون دیرتر سیانوز می‌شود</b> و نبودن سیانوز یعنی هیپوکسمی نیست.'),
          M('کدام بیمار با هیپوکسمی یکسان، دیرتر سیانوز می‌شود؟', ['بیمار کم‌خون', 'بیمار پلی‌سیتمی', 'بیمار با Hb طبیعی', 'فرقی ندارد'], 'سیانوز به مقدار مطلق Hb غیراکسیژنه (بیش از ۵ g/dL) بستگی دارد، نه درصد اشباع.'),
          B('مقادیر طبیعی SaO₂ در هوای اتاق بیش از ___ درصد است.', ['۹۵', '۸۰', '۷۵'], 'کتاب ۹۶ تا ۹۸٪ را طبیعی می‌داند؛ زیر ۹۴٪ باید دنبال علت گشت.')
        ]
      },
      {
        id: 'o3', title: 'منحنی تجزیه اکسی‌هموگلوبین', icon: '📈', items: [
          L('منحنی S شکل', 'رابطه PO₂ و SO₂ خطی نیست:<br>• <b>بخش صاف بالا</b> (PaO₂ بالای ۸۰): Hb تقریباً پر است؛ افزایش PO₂ محتوا را زیاد نمی‌کند<br>• <b>بخش شیب‌دار</b> (زیر ۶۰): افت کوچک PO₂ افت بزرگ اشباع می‌دهد' + tbl([['PaO₂ (mmHg)', 'SaO₂ تقریبی'], ['۱۰۰', '۹۸٪'], ['۸۰', '۹۵٪'], ['۶۰', '۹۰٪'], ['۴۰', '۷۵٪ (خون وریدی)'], ['۲۷', '۵۰٪ (P50)']]) + '<small>رمز: ۴۰–۵۰–۶۰ ↔ ۷۰–۸۰–۹۰</small>'),
          M('PaO₂ حدود ۶۰ mmHg با چه SaO₂ای هم‌خوان است؟', ['حدود ۹۰٪', 'حدود ۷۵٪', 'حدود ۹۹٪', 'حدود ۵۰٪'], 'نقطه مهم منحنی: PaO₂ ۶۰ ≈ SaO₂ ۹۰. زیر آن، سقوط سریع اشباع.'),
          T('وقتی SaO₂ حدود ۹۸٪ است، بالا بردن PaO₂ از ۱۰۰ به ۳۰۰ محتوای اکسیژن خون را تقریباً سه برابر می‌کند.', false, 'Hb از قبل پر است؛ فقط اکسیژن محلول کمی (۰٫۰۰۳ × ۲۰۰ = ۰٫۶ mL/dL) اضافه می‌شود.'),
          L('شیفت منحنی', '<b>شیفت به راست</b> (Hb اکسیژن را راحت‌تر به بافت می‌دهد): کاهش pH (اسیدوز)، افزایش PCO₂، تب، افزایش ۲،۳-DPG<br><b>شیفت به چپ</b> (Hb اکسیژن را محکم نگه می‌دارد): آلکالوز، کاهش PCO₂، هیپوترمی، کاهش ۲،۳-DPG، CO و Hb جنینی<br><br><small>رمز راست: بافت فعال گرم، اسیدی و پر از CO₂ است و اکسیژن بیشتری می‌خواهد.</small>'),
          P('هر مورد را به معنایش روی منحنی وصل کن', [['تب و اسیدوز', 'شیفت به راست'], ['آلکالوز و هیپوترمی', 'شیفت به چپ'], ['P50 بالاتر', 'تمایل کمتر Hb به اکسیژن'], ['بخش صاف منحنی', 'PaO₂ بالای ۸۰']]),
          M('کدام عامل منحنی را به چپ می‌برد؟', ['آلکالوز', 'اسیدوز', 'تب', 'افزایش PaCO₂'], 'آلکالوز تمایل Hb به اکسیژن را زیاد می‌کند؛ اکسیژن کمتری به بافت می‌رسد.'),
          L('معنای بالینی شیفت', '• بیمار سپتیک با تب و اسیدوز: منحنی به راست ← SpO₂ ممکن است ۸۵٪ باشد ولی تحویل اکسیژن به بافت نسبتاً بهتر است<br>• بیمار آلکالوتیک یا هیپوترم: منحنی به چپ ← SpO₂ ۹۴٪ ولی بافت‌ها کم‌اکسیژن‌اند<br><br>پس <b>اشباع بالا لزوماً یعنی حال خوب نیست</b> و اشباع پایین همیشه به یک اندازه خطرناک نیست؛ بیمار را ببین.'),
          B('P50 یعنی PO₂ای که در آن Hb ___ درصد اشباع است.', ['۵۰', '۹۰', '۷۵'], 'P50 طبیعی حدود ۲۶ تا ۲۷ mmHg است؛ شیفت به راست یعنی P50 بالاتر.'),
          T('افت PaO₂ از ۶۰ به ۵۰ اثر بسیار بیشتری بر اشباع دارد تا افت از ۱۰۰ به ۹۰.', true, 'درست؛ این ناحیه شیب‌دار منحنی است و خطر واقعی همین‌جاست.')
        ]
      },
      {
        id: 'o4', title: 'هیپوکسی، هیپوکسمی و FiO₂', icon: '🎭', items: [
          L('سه اصطلاح که اشتباه گرفته می‌شوند', '• <b>هیپوکسی</b>: اکسیژن ناکافی در <b>بافت</b> (هیپوکسی بافتی)<br>• <b>هیپوکسمی</b>: کاهش محتوای اکسیژن <b>خون شریانی</b> (از اختلال اکسیژناسیون، کم‌خونی یا کاهش تمایل Hb)<br>• <b>اختلال اکسیژناسیون</b>: انتقال ناقص اکسیژن از ریه به خون؛ با <b>PaO₂ کمتر از ۸۰</b> مشخص می‌شود<br><br>مثلاً در ایسکمی مزانتریک، هیپوکسی بافتی بدون هیپوکسمی داریم.'),
          P('هر اصطلاح را به تعریفش وصل کن', [['هیپوکسی', 'اکسیژن ناکافی بافت'], ['هیپوکسمی', 'کاهش اکسیژن خون شریانی'], ['اختلال اکسیژناسیون', 'انتقال ناقص اکسیژن از ریه به خون'], ['ایسکمی', 'اختلال جریان خون بافت']]),
          M('بیمار با Hb = ۶ و PaO₂ = ۹۵. کدام درست است؟', ['هیپوکسمی دارد ولی اختلال اکسیژناسیون ندارد', 'اختلال اکسیژناسیون شدید دارد', 'هیچ مشکلی ندارد', 'نارسایی تنفسی نوع ۲ دارد'], 'محتوای اکسیژن به‌خاطر Hb پایین کم است (هیپوکسمی)، ولی ریه اکسیژن را خوب منتقل می‌کند.'),
          L('FiO₂ و PaO₂ مورد انتظار', 'FiO₂ در هوای اتاق ۲۱٪ است. با اکسیژن اضافه، PaO₂ باید بالا برود.<br>قاعده سرانگشتی: <b>PaO₂ مورد انتظار ≈ ۵ × FiO₂ (درصد)</b><br>مثلاً با FiO₂ ۴۰٪ حدود ۲۰۰.<br><br>شاخص دقیق‌تر: نسبت <b>PaO₂/FiO₂ (P/F)</b>؛ طبیعی بیش از ۴۰۰ و کمتر از ۳۰۰ یعنی اختلال اکسیژناسیون.<br><small>اگر اختلال خفیفی مطرح است، ABG را در هوای اتاق تکرار کن؛ اکسیژن تفسیر را سخت می‌کند.</small>'),
          M('بیمار با FiO₂ ۴۰٪، PaO₂ = ۹۰ دارد. تفسیر؟', ['اختلال اکسیژناسیون قابل توجه دارد (P/F حدود ۲۲۵)', 'اکسیژناسیون عالی است چون PaO₂ طبیعی است', 'باید اکسیژن را قطع کرد', 'ABG قابل تفسیر نیست'], 'با ۴۰٪ انتظار حدود ۲۰۰ داریم. PaO₂ طبیعی روی اکسیژن زیاد، طبیعی نیست!'),
          L('وسایل تجویز اکسیژن', tbl([['وسیله', 'FiO₂ تقریبی'], ['کانول بینی ۱ تا ۶ لیتر', '۲۴ تا ۴۴٪ (هر لیتر ≈ ۴٪)'], ['ماسک ساده ۵ تا ۱۰ لیتر', '۳۵ تا ۵۵٪'], ['ماسک ونچوری', '۲۴ تا ۶۰٪، ثابت و دقیق'], ['ماسک ذخیره‌دار ۱۵ لیتر', '۶۰ تا ۸۰٪ و بیشتر'], ['کانول بینی پرجریان (HFNC)', 'تا ۱۰۰٪ با ۳۰ تا ۶۰ لیتر'], ['لوله‌گذاری', '۲۱ تا ۱۰۰٪']]) + '<small>ماسک ساده را با کمتر از ۵ لیتر نده؛ CO₂ بازدمی دوباره تنفس می‌شود.</small>'),
          N('o.nc'),
          M('برای اکسیژن‌درمانی کنترل‌شده با غلظت پایین و دقیق، کدام وسیله بهتر است؟', ['ماسک ونچوری (عملکرد ثابت)', 'ماسک ساده با ۳ لیتر', 'ماسک ذخیره‌دار', 'کانول بینی ۶ لیتر'], 'ماسک ونچوری FiO₂ ثابت و قابل پیش‌بینی می‌دهد؛ انتخاب اول در COPD با خطر هیپرکاپنی.'),
          T('پس از هر تغییر در اکسیژن‌درمانی، بهتر است حدود ۲۰ دقیقه صبر کرد و بعد ABG گرفت.', true, 'تا گازهای خون به حالت پایدار برسند؛ مگر در اورژانس.')
        ]
      },
      {
        id: 'o5', title: 'نارسایی تنفسی نوع ۱ و ۲', icon: '🫁', items: [
          L('نوع ۱: مشکل اکسیژن', '<b>PaO₂ پایین با PaCO₂ طبیعی یا پایین</b>.<br>تهویه کافی است ولی اکسیژناسیون ناقص؛ معمولاً <b>عدم تناسب V/Q</b>.<br>علل شایع: پنومونی، آمبولی ریه، پنوموتوراکس، ادم ریه، آسم حاد، ARDS، فیبروز ریه، COPD.'),
          L('نوع ۲: مشکل تهویه', '<b>PaCO₂ بالا (هیپرکاپنی)</b> به علت تهویه حبابچه‌ای ناکافی؛ معمولاً PaO₂ هم پایین است.<br>علل: COPD، خستگی تنفسی، قفسه سینه مواج (flail chest)، کیفواسکولیوز، مسمومیت با اپیوئید یا بنزودیازپین، جسم خارجی، بیماری‌های عصبی–عضلانی، آپنه انسدادی خواب، چاقی شدید.<br><b>نشانه‌های هیپرکاپنی</b>: گیجی، لرزش بال‌زدنی (flapping)، اندام گرم، خواب‌آلودگی، نبض جهنده، سردرد.'),
          P('هر بیمار را به الگوی تبادل گازش وصل کن', [['پنومونی', 'نوع ۱ (عدم تناسب V/Q)'], ['مسمومیت با مورفین', 'نوع ۲ حاد'], ['COPD با HCO₃ بالا', 'نوع ۲ مزمن'], ['حمله اضطراب', 'هیپرونتیلاسیون اولیه']]),
          M('کدام نشانه به نفع هیپرکاپنی است؟', ['لرزش بال‌زدنی و اندام گرم', 'اندام سرد و رنگ‌پریده', 'برادی‌پنه با مردمک گشاد', 'تتانی'], 'CO₂ بالا عروق را گشاد می‌کند: اندام گرم، نبض جهنده، سردرد؛ و مغز را خواب‌آلود می‌کند.'),
          L('حاد یا مزمن؟ HCO₃ جواب می‌دهد', 'جبران کلیوی <b>چند روز</b> طول می‌کشد. پس در نوع ۲:<br>• <b>HCO₃ طبیعی</b> ← حاد (pH افتاده)<br>• <b>HCO₃ بالا</b> ← مزمن (pH نزدیک طبیعی)<br><br>و <b>هیپرونتیلاسیون</b> (PaCO₂ پایین): اگر HCO₃ پایین باشد، ثانویه به اسیدوز متابولیک است؛ وگرنه اولیه (اضطراب، درد، تب، هیپوکسمی).'),
          O('فلوچارت تبادل گاز کتاب را مرتب کن', ['PaO₂ را ببین', 'PaCO₂ را ببین', 'HCO₃ را ببین', 'شدت را ارزیابی کن'], 'قاعده طلایی: تبادل گاز و اسید و باز را جدا از هم تفسیر کن. برای تبادل گاز: PaO₂ ← PaCO₂ ← HCO₃.'),
          L('شدت هیپوکسمی', tbl([['شدت', 'PaO₂', 'SaO₂'], ['خفیف', '۶۰ تا ۷۹', '۹۰ تا ۹۴٪'], ['متوسط', '۴۰ تا ۵۹', '۷۵ تا ۸۹٪'], ['شدید', 'کمتر از ۴۰', 'کمتر از ۷۵٪']]) + '<small>نیاز به FiO₂ بالا برای نگه داشتن PaO₂ هم یعنی شدید.</small><br><br><b>شدت هیپرکاپنی</b> به عدد مطلق PaCO₂ ربطی ندارد؛ به <b>سرعت بالا رفتن</b> و <b>افت pH</b> بستگی دارد (pH زیر ۷٫۲۵ = شدید). خستگی بیمار نشانه بدیمن است.'),
          N('o.sev'),
          N('o.type'),
          M('شدت هیپرکاپنی به کدام مورد وابسته نیست؟', ['مقدار مطلق PaCO₂', 'سرعت افزایش PaCO₂', 'میزان افت pH', 'خستگی بیمار'], 'بیمار COPD مزمن با PaCO₂ ۶۵ و pH ۷٫۳۸ ممکن است پایدار باشد؛ بیمار حاد با PaCO₂ ۶۰ و pH ۷٫۲۰ در خطر است.')
        ]
      },
      {
        id: 'o6', title: 'V/Q، شانت و گرادیان A–a', icon: '⚖️', items: [
          L('چرا CO₂ جبران می‌شود ولی O₂ نه؟', 'در عدم تناسب V/Q، خون از حبابچه‌های بد تهویه‌شده با O₂ کم و CO₂ زیاد برمی‌گردد.<br>بیمار بیشتر نفس می‌کشد: حبابچه‌های سالم <b>CO₂ اضافه</b> را دفع می‌کنند و PaCO₂ طبیعی می‌ماند.<br>ولی خون حبابچه‌های سالم از قبل <b>۹۸٪ اشباع</b> است (بخش صاف منحنی) و نمی‌تواند اکسیژن اضافه حمل کند ← <b>PaO₂ می‌افتد</b>.'),
          T('در عدم تناسب V/Q، هیپرونتیلاسیون PaCO₂ را طبیعی نگه می‌دارد ولی هیپوکسمی را جبران نمی‌کند.', true, 'دقیقاً به همین دلیل نارسایی نوع ۱، PaO₂ پایین با PaCO₂ طبیعی یا پایین دارد.'),
          L('پنج علت هیپوکسمی', '۱. <b>FiO₂ پایین</b> (ارتفاع) — A–a طبیعی<br>۲. <b>هیپوونتیلاسیون</b> — A–a طبیعی، PaCO₂ بالا<br>۳. <b>عدم تناسب V/Q</b> — A–a بالا، با اکسیژن خوب اصلاح می‌شود (شایع‌ترین)<br>۴. <b>شانت</b> (خون از کنار حبابچه بسته می‌گذرد) — A–a بالا، به اکسیژن <b>پاسخ ضعیف</b><br>۵. <b>اختلال انتشار</b> (فیبروز) — A–a بالا، با فعالیت بدتر می‌شود'),
          M('کدام علت هیپوکسمی با اکسیژن ۱۰۰٪ هم خوب اصلاح نمی‌شود؟', ['شانت واقعی', 'عدم تناسب خفیف V/Q', 'هیپوونتیلاسیون', 'ارتفاع زیاد'], 'در شانت، خون اصلاً با حبابچه تهویه‌شده تماس ندارد؛ اکسیژن اضافه به آن نمی‌رسد (مثل ARDS شدید یا کلاپس گسترده).'),
          L('گرادیان A–a', 'اختلاف اکسیژن حبابچه و خون شریانی:' + fx('PAO₂ = FiO₂ × (760 − 47) − PaCO₂ ÷ 0.8') + fx('A–a = PAO₂ − PaO₂') + 'در هوای اتاق و سطح دریا: PAO₂ ≈ ۱۵۰ − ۱٫۲۵ × PaCO₂<br>طبیعی: <b>کمتر از ۲۰</b>، یا دقیق‌تر <b>سن ÷ ۴ + ۴</b>.<br><small>در ارتفاع (مثلاً تهران با فشار حدود ۶۶۰) PAO₂ کمتر است.</small>'),
          N('o.pao2'),
          N('o.aa'),
          M('هیپوکسمی با گرادیان A–a طبیعی به نفع کدام است؟', ['هیپوونتیلاسیون (مثلاً مسمومیت با اپیوئید)', 'آمبولی ریه', 'پنومونی', 'فیبروز ریه'], 'وقتی ریه سالم است و فقط تهویه کم شده، CO₂ جای O₂ را در حبابچه می‌گیرد؛ A–a طبیعی می‌ماند.'),
          T('ABG و گرادیان A–a کاملاً طبیعی، آمبولی ریه را رد می‌کند.', false, 'هرگز! کتاب تأکید می‌کند (تمرین ۲۵): وقتی بالین به آمبولی مشکوک است، ABG طبیعی آن را رد نمی‌کند؛ تصویربرداری لازم است.'),
          L('قانون ۱۴۰', 'در هوای اتاق، مجموع PaO₂ و PaCO₂ باید <b>کمتر از ۱۴۰</b> (حداکثر حدود ۱۵۰) باشد:' + fx('PaO₂ + PaCO₂ < 140 mmHg') + 'اگر بیشتر بود: یا <b>حباب هوا</b> در نمونه است، یا بیمار <b>اکسیژن</b> دریافت می‌کرده.')
        ]
      },
      {
        id: 'o7', title: 'اکسیژن‌درمانی هوشمند', icon: '🎯', items: [
          L('تحریک ناشی از هیپوکسی', 'در هیپرکاپنی مزمن، گیرنده‌های CO₂ حساسیت خود را از دست می‌دهند و <b>PaO₂ پایین</b> محرک اصلی تنفس می‌شود.<br>اکسیژن زیاد در این بیماران ← PaCO₂ بالا می‌رود.<br><br><b>نکته به‌روز</b>: علت اصلی این هیپرکاپنی فقط کاهش تحریک تنفس نیست؛ اکسیژن زیاد انقباض عروق ریوی در نواحی بد تهویه را هم برمی‌دارد و <b>V/Q را بدتر</b> می‌کند (به‌علاوه اثر هالدین).'),
          L('هدف‌های اشباع (راهنمای BTS)', '• بیشتر بیماران بدحال: <b>SpO₂ ۹۴ تا ۹۸٪</b><br>• بیمار در خطر هیپرکاپنی (COPD، چاقی شدید، بیماری عصبی–عضلانی، دیواره قفسه سینه): <b>SpO₂ ۸۸ تا ۹۲٪</b><br>• شروع در COPD: ماسک ونچوری <b>۲۴ تا ۲۸٪</b> و ABG ۳۰ تا ۶۰ دقیقه بعد'),
          B('هدف SpO₂ در بیمار COPD با خطر هیپرکاپنی ___ است.', ['۸۸ تا ۹۲٪', '۹۴ تا ۹۸٪', '۱۰۰٪'], 'هیپوکسمی و هایپراکسی هر دو خطرناک‌اند؛ اکسیژن را تیتر کن.'),
          T('در بیمار COPD با هیپوکسمی شدید، از ترس هیپرکاپنی باید اکسیژن را قطع کرد.', false, 'هرگز! هیپوکسمی زودتر می‌کشد. اکسیژن کنترل‌شده بده و PaCO₂ را پایش کن (تمرین ۵ و ۶ کتاب).'),
          M('بیمار COPD با PaO₂ = ۴۴، PaCO₂ = ۳۶ و pH طبیعی. کدام درست است؟', ['نارسایی نوع ۱ دارد؛ اکسیژن ضروری است و به تحریک هیپوکسیک وابسته نیست', 'باید اکسیژن را محدود کرد', 'نارسایی نوع ۲ مزمن دارد', 'فقط برونکودیلاتور کافی است'], 'PaCO₂ و HCO₃ طبیعی‌اند؛ هیپرکاپنی مزمن ندارد. اکسیژن هم برای علائم و هم برای جلوگیری از هیپوکسی بافتی لازم است.', null, { pH: 7.40, pco2: 36, po2: 44, hco3: 23 }),
          L('پالس اکسیمتری کافی نیست', 'در نارسایی نوع ۲ (یا حاد روی مزمن)، SpO₂ عالی ممکن است <b>هیپرکاپنی خطرناک</b> را پنهان کند.<br>بیمار COPD که روی اکسیژن ۶۰٪ خواب‌آلود شده و سرعت تنفسش کم شده: SpO₂ ۹۶٪، ولی PaCO₂ به ۶۵ رسیده (تمرین ۹ کتاب).<br><b>راه‌حل</b>: کاهش FiO₂ به هدف ۸۸ تا ۹۲٪، تهویه غیرتهاجمی (NIV)، و ABG سریال.'),
          M('بیمار COPD روی اکسیژن ۶۰٪ خواب‌آلود شده است. محتمل‌ترین علت بدتر شدن؟', ['اکسیژن بیش از حد و هیپرکاپنی', 'هیپوکسمی شدید', 'آلکالوز متابولیک', 'آمبولی ریه'], 'SpO₂ خوب ولی PaCO₂ بالارونده با اسیدمی؛ باید FiO₂ را کم و تهویه را تقویت کرد.', [['SpO₂', '۹۶٪ روی اکسیژن ۶۰٪'], ['تعداد تنفس', '۱۴ (قبلاً ۲۴)']], { pH: 7.29, pco2: 65.3, po2: 84, hco3: 30.3 }),
          O('برخورد با بیمار COPD خواب‌آلود روی اکسیژن زیاد را مرتب کن', ['ABG فوری', 'کاهش FiO₂ به هدف ۸۸ تا ۹۲٪', 'شروع تهویه غیرتهاجمی (NIV)', 'ABG مجدد پس از ۱ ساعت'], 'اول تشخیص با ABG، سپس رفع علت (اکسیژن زیاد)، حمایت تهویه و پایش پاسخ.'),
          T('پالس اکسیمتری جانشین مناسبی برای ABG سریال در بیمار با پنومونی و هیپوکسمی متوسط بدون اختلال تهویه است.', true, 'درست (تمرین ۱). در این بیمار پایش با پالس اکسیمتری کافی است؛ ABG مجدد فقط با خستگی، شک به هیپرکاپنی یا افت بیشتر اشباع.')
        ]
      },
      {
        id: 'o8', title: 'CO، کم‌خونی و دام‌های اکسیمتری', icon: '🔥', items: [
          L('مسمومیت با منوکسید کربن', 'CO با تمایل <b>بیش از ۲۰۰ برابر</b> اکسیژن به Hb می‌چسبد (کربوکسی‌هموگلوبین) و منحنی را هم به چپ می‌برد.<br>• PaO₂ طبیعی یا بالا (اکسیژن محلول ربطی به CO ندارد)<br>• <b>SpO₂ به طور کاذب طبیعی</b>؛ بیشتر پالس‌اکسیمترها COHb را از اکسی‌هموگلوبین تشخیص نمی‌دهند<br>• SaO₂ «محاسبه‌شده» در ABG هم کاذب طبیعی است؛ فقط <b>CO-اکسیمتری</b> مقدار واقعی را نشان می‌دهد<br>• هیپوکسی بافتی ← <b>اسیدوز لاکتیک</b><br>درمان: اکسیژن ۱۰۰٪ (نیمه‌عمر COHb را از حدود ۵ ساعت به حدود ۱ ساعت می‌رساند)، و در موارد شدید اکسیژن پرفشار.'),
          M('در مسمومیت با CO کدام پارامتر به‌طور کاذب طبیعی یا بالاست؟', ['SaO₂ (پالس اکسیمتری یا محاسبه‌شده)', 'COHb', 'لاکتات', 'اسیدوز متابولیک'], 'اشباع ظاهری ۹۹٪ است در حالی که بخش بزرگی از Hb با CO پر شده.', [['سابقه', '۲۰ دقیقه در اتاق پر از دود'], ['COHb', '۴۰٪ (طبیعی کمتر از ۳٪)']], { pH: 7.36, pco2: 34, po2: 353, hco3: 18, so2: 100, lac: 2 }),
          T('در مسمومیت با CO، PaO₂ طبیعی یعنی اکسیژن‌رسانی به بافت‌ها طبیعی است.', false, 'PaO₂ فقط اکسیژن محلول را نشان می‌دهد؛ Hb اشغال شده و محتوای اکسیژن به‌شدت کم است.'),
          L('کم‌خونی: اکسیژن کمکی نمی‌کند', 'بیمار با Hb = ۶٫۸، PaO₂ و SaO₂ طبیعی (تمرین ۱۳ کتاب): ریه سالم است، ولی محتوای اکسیژن نصف شده.<br>تنگی نفس و هیپرونتیلاسیون پاسخ طبیعی است.<br><b>اکسیژن‌درمانی محتوای اکسیژن را زیاد نمی‌کند</b> (Hb از قبل اشباع است)؛ تنها راه مؤثر <b>افزایش Hb</b>: تزریق خون (سریع) یا جایگزینی آهن (کند).'),
          M('مؤثرترین راه افزایش تحویل اکسیژن به بافت در کم‌خونی شدید؟', ['افزایش هموگلوبین (مثلاً تزریق خون)', 'اکسیژن با ماسک ذخیره‌دار', 'تهویه مکانیکی', 'بی‌کربنات'], 'CaO₂ به Hb وابسته است؛ اکسیژن بیشتر فقط اکسیژن محلول ناچیز را زیاد می‌کند.'),
          L('مت‌هموگلوبینمی', 'Fe³⁺ در Hb اکسیژن حمل نمی‌کند (مثلاً پس از داپسون، نیترات‌ها یا بی‌حس‌کننده موضعی مثل بنزوکائین).<br>• PaO₂ طبیعی<br>• SpO₂ حدود <b>۸۵٪</b> و با اکسیژن بالا نمی‌رود<br>• خون شکلاتی رنگ<br>• «شکاف اشباع»: اختلاف SaO₂ محاسبه‌شده و SpO₂<br>درمان: <b>متیلن بلو</b> (در کمبود G6PD با احتیاط).'),
          M('بیمار پس از اسپری بنزوکائین سیانوز دارد؛ SpO₂ = ۸۵٪ و با اکسیژن تغییر نمی‌کند، PaO₂ = ۱۸۰. محتمل‌ترین تشخیص؟', ['مت‌هموگلوبینمی', 'آمبولی ریه', 'شانت قلبی', 'هیپوونتیلاسیون'], 'PaO₂ بالا با اشباع پایین و مقاوم به اکسیژن ← مت‌هموگلوبینمی؛ با CO-اکسیمتری تأیید کن.'),
          P('هر حالت را به ویژگی‌اش وصل کن', [['مسمومیت با CO', 'SpO₂ کاذب طبیعی'], ['مت‌هموگلوبینمی', 'SpO₂ ثابت حدود ۸۵٪'], ['کم‌خونی شدید', 'PaO₂ و SaO₂ طبیعی، محتوا کم'], ['شوک و انگشت سرد', 'پالس اکسیمتری غیرقابل اعتماد']]),
          N('o.cao2')
        ]
      },
      {
        id: 'o9', title: 'آی‌سی‌یو اکسیژن', icon: '🚨', items: [
          L('الگوریتم تفسیر تبادل گاز', '<ol class="algo"><li><b>PaO₂</b> را ببین: در هوای اتاق زیر ۸۰؟ روی اکسیژن کمتر از حد انتظار (۵ × FiO₂) یا P/F زیر ۳۰۰؟</li><li><b>PaCO₂</b>: بالا ← نوع ۲؛ طبیعی یا پایین ← نوع ۱</li><li><b>HCO₃</b>: در نوع ۲ بالا ← مزمن؛ در هیپرونتیلاسیون پایین ← ثانویه</li><li><b>شدت</b>: جدول هیپوکسمی؛ برای هیپرکاپنی pH و سرعت</li><li><b>A–a</b>: طبیعی ← هیپوونتیلاسیون یا FiO₂ کم؛ بالا ← بیماری ریه</li><li><b>بالین</b>: ABG بدون بیمار تفسیر نمی‌شود</li></ol>'),
          O('مراحل تفسیر تبادل گاز را مرتب کن', ['بررسی PaO₂ با توجه به FiO₂', 'بررسی PaCO₂', 'بررسی HCO₃ برای حاد یا مزمن', 'ارزیابی شدت', 'محاسبه گرادیان A–a']),
          L('نسبت P/F و ARDS', 'ARDS (تعریف برلین): شروع ظرف یک هفته، ارتشاح دوطرفه، رد علت قلبی، با PEEP ≥ ۵:' + tbl([['P/F', 'شدت'], ['۲۰۰ تا ۳۰۰', 'خفیف'], ['۱۰۰ تا ۲۰۰', 'متوسط'], ['۱۰۰ یا کمتر', 'شدید']])),
          N('o.pf'),
          M('بیمار با پانکراتیت، روی ماسک ذخیره‌دار (FiO₂ حدود ۷۰٪) PaO₂ = ۸۱ دارد. تفسیر؟', ['اختلال شدید اکسیژناسیون (P/F حدود ۱۱۵)؛ به ARDS فکر کن', 'اکسیژناسیون طبیعی', 'نارسایی نوع ۲', 'نمونه وریدی است'], 'PaO₂ «طبیعی» با FiO₂ بسیار بالا یعنی ریه به‌شدت بیمار است (تمرین ۲۱).', null, { pH: 7.33, pco2: 24.3, po2: 81, hco3: 14.9, lac: 3.1 }),
          M('مرد ۷۸ ساله پس از جراحی، مردمک ته‌سنجاقی و تنفس ۵ در دقیقه. تشخیص و درمان؟', ['نارسایی نوع ۲ حاد از مسمومیت با اپیوئید؛ نالوکسان', 'نارسایی نوع ۱ از پنومونی؛ آنتی‌بیوتیک', 'آلکالوز متابولیک؛ سرم', 'آمبولی ریه؛ هپارین'], 'PaCO₂ بالا با HCO₃ طبیعی و اسیدمی شدید = حاد. نالوکسان ۰٫۴ تا ۲ میلی‌گرم وریدی، قابل تکرار هر ۲ تا ۳ دقیقه (تمرین ۴).', [['اکسیژن', '۲۸٪'], ['مورفین', 'سه نوبت ۱۰ میلی‌گرم + پمپ ضددرد']], { pH: 7.18, pco2: 62, po2: 87, hco3: 22.4 }),
          M('زن ۲۱ ساله با حمله آسم، تعداد تنفس ۳۰ و PaCO₂ = ۴۳. کدام درست است؟', ['PaCO₂ «طبیعی» نشانه خستگی و حمله تهدیدکننده حیات است', 'حمله خفیف است چون ABG طبیعی است', 'باید بیمار را ترخیص کرد', 'آلکالوز تنفسی دارد'], 'در حمله آسم انتظار PaCO₂ پایین داریم (تنفس تند). PaCO₂ بالای ۳۷٫۵ تا ۴۲ یعنی بیمار دارد خسته می‌شود؛ به ICU اطلاع بده (تمرین ۱۰).', [['PEF', '۱۶۰ (پیش‌بینی ۴۰۰)'], ['تعداد تنفس', '۳۰']], { pH: 7.38, pco2: 43, po2: 76, hco3: 24 }),
          T('در بیمار با تشدید COPD، کاهش تعداد تنفس از ۲۶ به ۱۶ همراه با گیجی، نشانه بهبود است.', false, 'نشانه خستگی و نارسایی تهویه است؛ PaCO₂ را فوراً بسنج (تمرین ۶).'),
          M('کدام یافته ABG نیاز به مداخله فوری را نشان می‌دهد؟', ['PaO₂ کمتر از ۶۰ یا pH کمتر از ۷٫۲۵', 'PaO₂ = ۸۵ در هوای اتاق', 'HCO₃ = ۲۵', 'PaCO₂ = ۳۸'], 'چهار پرچم قرمز کتاب: PaO₂ < ۶۰، PaCO₂ بالارونده، HCO₃ < ۱۵ یا BE < −۱۰، و pH < ۷٫۲۵.'),
          N('o.aa')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — دنیای ۲: اصول اسید و باز و تفسیر گام‌به‌گام
 * منابع: کتاب «ABG در بالین» (فصل‌های ۳، ۷ و ۸)، فلوچارت تفسیر اسید و باز (سینا مرادی، medjuu)،
 * جزوه دکتر ژیان (رمزهای ۲۴ و ۴۰، راستی‌آزمایی)، اسلایدهای تفسیر ABG (شش گام). */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, fx, tbl } = EA.K;

  EA.worlds.push({
    id: 'ph', sym: 'pH', name: 'اصول اسید و باز', sub: 'pH، بافر، جبران و تفسیر گام‌به‌گام', color: '#A560E8', dark: '#8445C4', light: '#F1E6FF',
    levels: ['قطره‌های بافر', 'نگهبانان تعادل', 'اساتید تفسیر'],
    gens: ['p.h80', 'p.hkb', 'p.hh', 'p.fold', 'p.primary'],
    lessons: [
      {
        id: 'ph1', title: 'pH و یون هیدروژن', icon: '🧪', items: [
          L('اسید، باز، بافر', '• <b>اسید</b>: دهنده H⁺ (pH را پایین می‌آورد)<br>• <b>باز</b>: پذیرنده H⁺ (pH را بالا می‌برد)<br>• <b>بافر</b>: بسته به شرایط H⁺ می‌دهد یا می‌گیرد و جلوی تغییرات بزرگ را می‌گیرد<br><br>مهم‌ترین بافر خون: <b>بی‌کربنات</b> (اسید ضعیف H₂CO₃ و نمکش NaHCO₃).'),
          P('هر مفهوم را به تعریفش وصل کن', [['اسید', 'دهنده H⁺'], ['باز', 'پذیرنده H⁺'], ['بافر', 'دهنده یا پذیرنده H⁺'], ['pH', 'منفی لگاریتم غلظت H⁺']]),
          L('مقیاس لگاریتمی', fx('pH = −log [H⁺]') + '• علامت منفی: H⁺ بیشتر ← pH کمتر<br>• لگاریتمی: هر <b>۱ واحد</b> pH = <b>۱۰ برابر</b> H⁺؛ هر <b>۰٫۳</b> واحد ≈ <b>دو برابر</b><br>• pH ۷ (خنثی) = ۱۰۰ nEq/L و pH ۷٫۴۰ = ۴۰ nEq/L'),
          M('غلظت H⁺ در محلولی با pH = ۳ چند برابر محلول با pH = ۵ است؟', ['۱۰۰ برابر', '۲ برابر', '۲۰ برابر', '۲۰۰ برابر'], 'دو واحد اختلاف = ۱۰ × ۱۰ = ۱۰۰ برابر.'),
          N('p.fold'),
          L('pH طبیعی خون', tbl([['pH', '[H⁺] nEq/L', 'وضعیت'], ['کمتر از ۶٫۸', 'بیش از ۱۵۸', 'مرگ'], ['۶٫۸ تا ۷٫۳۵', '۴۵ تا ۱۵۸', 'اسیدمی'], ['۷٫۳۵ تا ۷٫۴۵', '۳۵ تا ۴۵', 'طبیعی'], ['۷٫۴۵ تا ۷٫۸', '۱۶ تا ۳۵', 'آلکالمی'], ['بیش از ۷٫۸', 'کمتر از ۱۶', 'مرگ']]) + 'خون کمی قلیایی است.'),
          M('کدام pH با زندگی سازگار نیست؟', ['۶٫۵', '۷٫۰', '۷٫۲۵', '۷٫۵'], 'محدوده سازگار با زندگی تقریباً ۶٫۸ تا ۷٫۸ است.'),
          L('«-می» یا «-وز»؟', '• <b>اسیدمی / آلکالمی</b>: وضعیت <b>خون</b> (pH کمتر از ۷٫۳۵ یا بیشتر از ۷٫۴۵)<br>• <b>اسیدوز / آلکالوز</b>: <b>فرایندی</b> که pH را پایین یا بالا می‌برد<br><br>بیمار می‌تواند دو فرایند هم‌زمان (اسیدوز + آلکالوز) و pH طبیعی داشته باشد.'),
          T('بیمار با pH = ۷٫۴۰ نمی‌تواند هیچ اسیدوزی داشته باشد.', false, 'ممکن است اسیدوز و آلکالوز هم‌زمان یکدیگر را خنثی کرده باشند (مثل مسمومیت با آسپرین).'),
          N('p.h80')
        ]
      },
      {
        id: 'ph2', title: 'ریه، کلیه و بافر', icon: '🫧', items: [
          L('معادله طلایی', fx('CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻') + 'CO₂ در خون به اسید کربنیک تبدیل می‌شود. pH به <b>نسبت</b> HCO₃ به CO₂ بستگی دارد، نه به مقدار مطلق هر کدام.<br>برای همین اگر CO₂ و HCO₃ هم‌جهت تغییر کنند، pH ثابت می‌ماند (جبران).'),
          L('دو راه دفع اسید', '• <b>ریه</b>: اسید کربنیک (فرّار) را به شکل CO₂ دفع می‌کند؛ بیشترین بار اسیدی روزانه (متابولیسم قند و چربی)<br>• <b>کلیه</b>: اسیدهای متابولیک (غیرفرّار، از پروتئین: سولفوریک، هیدروکلریک) را دفع می‌کند؛ H⁺ ترشح و HCO₃ بازجذب می‌کند'),
          P('هر اسید را به راه دفعش وصل کن', [['اسید کربنیک', 'ریه'], ['اسید سولفوریک از پروتئین', 'کلیه'], ['CO₂ حاصل از قند و چربی', 'بازدم'], ['H⁺ اضافه', 'ترشح در ادرار']]),
          M('اسید حاصل از متابولیسم قندها کدام است و چگونه دفع می‌شود؟', ['اسید کربنیک، با ریه', 'اسید متابولیک، با ریه', 'اسید کربنیک، با کلیه', 'اسید متابولیک، با کلیه'], 'قند و چربی CO₂ می‌سازند که با ریه دفع می‌شود.'),
          L('سرعت سیستم‌ها', tbl([['سیستم', 'سرعت'], ['بافرهای خون', 'فوری (ثانیه)'], ['جبران تنفسی', 'دقیقه تا ساعت'], ['جبران کلیوی', 'روزها (۳ تا ۵ روز) تا هفته']])),
          O('مکانیسم‌های جبرانی را از سریع‌ترین به کندترین مرتب کن', ['بافر بی‌کربنات', 'ریه‌ها', 'کلیه‌ها']),
          T('جبران کلیوی اسیدوز تنفسی حاد ظرف چند دقیقه کامل می‌شود.', false, 'جبران کلیوی روزها طول می‌کشد؛ به همین دلیل اسیدوز تنفسی حاد تقریباً همیشه جبران‌نشده و خطرناک است.'),
          B('HCO₃ طبیعی حدود ___ و PCO₂ طبیعی حدود ۴۰ است.', ['۲۴', '۴۰', '۱۲'], 'رمز دکتر ژیان: «بیچاره (۲۴)، یه شب چله (۴۰) افتاده».'),
          L('رمز ۲۴ و ۴۰', 'دو عدد مرکزی را حفظ کن: <b>HCO₃ = ۲۴</b> و <b>PCO₂ = ۴۰</b>.<br><i>«بیچاره (۲۴)، یه شب چله (۴۰) افتاده»</i><br><br>• HCO₃ بالای ۲۴ ← به سمت <b>آلکالوز</b> متابولیک<br>• PCO₂ زیر ۴۰ ← به سمت <b>آلکالوز</b> تنفسی<br>(و برعکس برای اسیدوز). یادت باشد: CO₂ اسید است و HCO₃ باز.')
        ]
      },
      {
        id: 'ph3', title: 'هندرسون و راستی‌آزمایی', icon: '🔎', items: [
          L('هندرسون–هاسلباخ', fx('pH = 6.1 + log ( HCO₃ ÷ (0.03 × PCO₂) )') + 'در حالت طبیعی نسبت HCO₃ به (۰٫۰۳ × PCO₂) = ۲۴ ÷ ۱٫۲ = <b>۲۰</b> و log ۲۰ ≈ ۱٫۳ ← pH = ۷٫۴<br>هر عاملی که این نسبت ۲۰ به ۱ را به هم بزند، pH را تغییر می‌دهد.'),
          N('p.hh'),
          L('شکل ساده: کسیرر–بلیچ', fx('[H⁺] = 24 × PCO₂ ÷ HCO₃') + 'و از طرف دیگر، در pH بین ۷٫۲۰ و ۷٫۵۰:' + fx('[H⁺] ≈ 80 − (دو رقم اعشار pH)') + 'مثال: pH ۷٫۲۵ ← [H⁺] ≈ ۸۰ − ۲۵ = ۵۵'),
          N('p.hkb'),
          L('راستی‌آزمایی ABG', 'قبل از تفسیر، مطمئن شو عددها با هم می‌خوانند: [H⁺] حاصل از pH باید با ۲۴ × PCO₂ ÷ HCO₃ تقریباً برابر باشد.<br>اگر نبود ← خطای ورود داده، خطای آزمایشگاه یا نمونه نامناسب.<br><br><small>نکته: دستگاه HCO₃ «واقعی» را از pH و PCO₂ محاسبه می‌کند. HCO₃ «استاندارد» (پس از اصلاح PCO₂ به ۴۰) در این معادله جا نمی‌رود.</small>'),
          M('pH = ۷٫۳۰، PCO₂ = ۴۰، HCO₃ = ۲۴. این ABG چطور است؟', ['قابل اعتماد نیست؛ عددها با هم نمی‌خوانند', 'اسیدوز متابولیک', 'اسیدوز تنفسی', 'طبیعی'], '۲۴ × ۴۰ ÷ ۲۴ = ۴۰ ← یعنی pH باید ۷٫۴۰ باشد، ولی ۷٫۳۰ (H⁺ = ۵۰) گزارش شده. نمونه یا ورود داده را بررسی کن.'),
          T('با pH = ۷٫۱۰، غلظت H⁺ حدود ۷۰ nEq/L است.', false, 'قاعده ۸۰ منهای اعشار فقط بین ۷٫۲۰ و ۷٫۵۰ دقیق است. مقدار واقعی در ۷٫۱۰ حدود ۷۹ است (هر ۰٫۱ کاهش ≈ ۱٫۲۵ برابر).'),
          N('p.h80'),
          B('در هوای اتاق مجموع PaO₂ و PaCO₂ باید کمتر از ___ باشد.', ['۱۴۰', '۲۰۰', '۱۰۰'], 'آزمون دوم واقعی بودن نمونه (فصل ۸ کتاب).')
        ]
      },
      {
        id: 'ph4', title: 'چهار اختلال اصلی', icon: '🧭', items: [
          L('رویدادهای اولیه', tbl([['اختلال', 'رویداد اولیه', 'جبران'], ['اسیدوز تنفسی', 'PCO₂ ↑', 'HCO₃ ↑'], ['آلکالوز تنفسی', 'PCO₂ ↓', 'HCO₃ ↓'], ['اسیدوز متابولیک', 'HCO₃ ↓', 'PCO₂ ↓'], ['آلکالوز متابولیک', 'HCO₃ ↑', 'PCO₂ ↑']]) + '<b>جبران همیشه در همان جهت رویداد اولیه است</b> (هر دو بالا یا هر دو پایین) تا نسبت ثابت بماند.'),
          P('هر اختلال را به رویداد اولیه‌اش وصل کن', [['اسیدوز تنفسی', 'افزایش PCO₂'], ['آلکالوز تنفسی', 'کاهش PCO₂'], ['اسیدوز متابولیک', 'کاهش HCO₃'], ['آلکالوز متابولیک', 'افزایش HCO₃']]),
          L('قانون هم‌جهتی', 'در اختلالات <b>متابولیک</b>، pH و PCO₂ <b>هم‌جهت</b> حرکت می‌کنند (هر دو پایین در اسیدوز متابولیک).<br>در اختلالات <b>تنفسی</b>، pH و PCO₂ <b>خلاف جهت</b>‌اند (PCO₂ بالا، pH پایین).<br><br>یا ساده‌تر: هر کدام از PCO₂ یا HCO₃ که <b>می‌تواند تغییر pH را توضیح دهد</b>، اختلال اولیه است (روش دکتر ژیان).'),
          M('pH = ۷٫۵۰، HCO₃ = ۳۴، PCO₂ = ۴۸. اختلال اولیه؟', ['آلکالوز متابولیک', 'آلکالوز تنفسی', 'اسیدوز تنفسی', 'اسیدوز متابولیک'], 'pH قلیایی است. HCO₃ بالای ۲۴ قلیایی‌کننده است و می‌تواند آن را توضیح دهد؛ PCO₂ بالا (اسیدی) جبران است.', null, { pH: 7.50, pco2: 48, hco3: 34 }),
          M('pH = ۷٫۵۰، HCO₃ = ۲۰، PCO₂ = ۲۵. اختلال اولیه؟', ['آلکالوز تنفسی', 'آلکالوز متابولیک', 'اسیدوز متابولیک', 'طبیعی'], 'PCO₂ زیر ۴۰ قلیایی‌کننده است و pH را توضیح می‌دهد؛ HCO₃ پایین جبران کلیوی است.', null, { pH: 7.50, pco2: 25, hco3: 20 }),
          T('در اسیدوز متابولیک، pH و PCO₂ خلاف جهت یکدیگر تغییر می‌کنند.', false, 'هم‌جهت‌اند: هر دو پایین می‌آیند (pH از اسید، PCO₂ از جبران تنفسی).'),
          L('جدول سریع اسلایدها', tbl([['pH', 'PCO₂', 'HCO₃ / BE', 'تفسیر'], ['↓', '↑', 'طبیعی', 'اسیدوز تنفسی'], ['↓', 'طبیعی', '↓', 'اسیدوز متابولیک'], ['↑', '↓', 'طبیعی', 'آلکالوز تنفسی'], ['↑', 'طبیعی', '↑', 'آلکالوز متابولیک']]) + '<small>«طبیعی» یعنی هنوز جبران نشده.</small>'),
          N('p.primary'),
          B('اسیدوز تنفسی و آلکالوز تنفسی ___ هم‌زمان رخ نمی‌دهند.', ['هیچ‌وقت', 'اغلب', 'گاهی'], 'PCO₂ نمی‌تواند هم‌زمان بالا و پایین باشد؛ ولی دو یا حتی سه اختلال متابولیک و تنفسی دیگر ممکن است با هم باشند.')
        ]
      },
      {
        id: 'ph5', title: 'مقادیر طبیعی گزارش', icon: '📋', items: [
          L('کارت مرجع ABG', tbl([['پارامتر', 'طبیعی'], ['pH', '۷٫۳۵ تا ۷٫۴۵'], ['[H⁺]', '۳۵ تا ۴۵ nEq/L'], ['PaCO₂', '۳۵ تا ۴۵ mmHg'], ['PaO₂ (هوای اتاق)', 'بیش از ۸۰ mmHg'], ['HCO₃', '۲۲ تا ۲۶ mEq/L (کتاب: ۲۲ تا ۲۸)'], ['BE', '−۲ تا +۲'], ['SaO₂', 'بیش از ۹۵٪'], ['لاکتات', 'کمتر از ۲ mmol/L']])),
          M('محدوده طبیعی PaCO₂ کدام است؟', ['۳۵ تا ۴۵ mmHg', '۲۲ تا ۲۶ mmHg', '۸۰ تا ۱۰۰ mmHg', '۴۵ تا ۵۵ mmHg'], '۲۲ تا ۲۶ مربوط به HCO₃ و ۸۰ تا ۱۰۰ مربوط به PaO₂ است.'),
          L('بی‌کربنات واقعی و استاندارد', '• <b>واقعی (actual)</b>: از pH و PCO₂ واقعی نمونه محاسبه می‌شود<br>• <b>استاندارد</b>: پس از «اصلاح» PCO₂ نمونه به ۴۰؛ اثر تنفسی حذف می‌شود و فقط جزء متابولیک می‌ماند<br><br>کتاب برای تشخیص جزء متابولیک، بی‌کربنات استاندارد را پیشنهاد می‌کند؛ برای معادله هندرسون و فرمول‌های جبران، بی‌کربنات واقعی لازم است.'),
          L('Base Excess (BE)', 'مقدار اسید یا بازی که باید به خون اضافه شود تا در ۳۷ درجه و PCO₂ = ۴۰ به pH ۷٫۴۰ برسد.<br>• <b>BE منفی‌تر از −۲</b> (کمبود باز) ← اسیدوز متابولیک<br>• <b>BE مثبت‌تر از +۲</b> ← آلکالوز متابولیک<br>BE فقط جزء <b>متابولیک</b> را نشان می‌دهد و از PCO₂ مستقل است.<br><b>BE کمتر از −۱۰</b> یا HCO₃ کمتر از ۱۵ ← فرایند اسیدی شدید.'),
          N('v.be'),
          M('BE = −۸ با کدام اختلال هم‌خوان است؟', ['اسیدوز متابولیک', 'آلکالوز متابولیک', 'اسیدوز تنفسی', 'آلکالوز تنفسی'], 'BE منفی = کمبود باز = جزء متابولیک اسیدی.'),
          L('لاکتات و الکترولیت‌ها', '• <b>لاکتات</b>: کمتر از ۲؛ بالای ۲ یعنی هیپوکسی بافتی یا مشکل متابولیک؛ <b>بالای ۴</b> در سپسیس یعنی شدید<br>• Na ۱۳۵ تا ۱۴۵، K ۳٫۵ تا ۵، Cl ۹۵ تا ۱۰۵<br>• کلسیم یونیزه: کتاب ۴ تا ۵ mg/dL؛ بسیاری از آزمایشگاه‌ها ۴٫۵ تا ۵٫۳ (۱٫۱۲ تا ۱٫۳۲ mmol/L)<br>• Hb: مرد ۱۳ تا ۱۸، زن ۱۱٫۵ تا ۱۵٫۵<br>• قند ناشتا ۶۰ تا ۱۱۰'),
          M('سطح بالای لاکتات خون حاکی از چیست؟', ['هیپوکسی بافتی', 'آلکالوز تنفسی', 'نارسایی کبد همیشه', 'هیپرکاپنی'], 'متابولیسم بی‌هوازی در بافت کم‌اکسیژن لاکتات می‌سازد (شوک، سپسیس، ایسکمی).'),
          P('هر پارامتر را به محدوده طبیعی‌اش وصل کن', [['pH', '۷٫۳۵ تا ۷٫۴۵'], ['HCO₃', '۲۲ تا ۲۶'], ['BE', '−۲ تا +۲'], ['[H⁺]', '۳۵ تا ۴۵']]),
          T('BE = +۱۰ با آلکالوز متابولیک مطابقت دارد.', true, 'BE مثبت یعنی باز اضافی.')
        ]
      },
      {
        id: 'ph6', title: 'جبران و قوانین طلایی', icon: '⚖️', items: [
          L('جبران یعنی چه؟', 'وقتی یک سیستم مختل می‌شود، سیستم دیگر خودکار واکنش نشان می‌دهد تا pH کمتر تغییر کند:<br>• اسیدوز متابولیک ← تنفس عمیق و تند (<b>کوسمال</b>) ← PCO₂ پایین<br>• اسیدوز تنفسی مزمن ← کلیه HCO₃ نگه می‌دارد<br><br>• <b>جبران‌نشده</b>: جزء دیگر هنوز طبیعی است<br>• <b>جبران نسبی</b>: جزء دیگر تغییر کرده ولی pH هنوز غیرطبیعی است<br>• <b>جبران کامل</b>: pH به محدوده طبیعی برگشته'),
          L('قانون ۱: جبران بیش از حد وجود ندارد', 'جبران هیچ‌وقت pH را از ۷٫۴۰ عبور نمی‌دهد. پس وقتی pH طبیعی است:<br>• <b>pH کمتر از ۷٫۴۰</b> ← احتمالاً <b>اسیدوز</b> اولیه<br>• <b>pH بیشتر از ۷٫۴۰</b> ← احتمالاً <b>آلکالوز</b> اولیه<br><br>مثال (به سبک دکتر ژیان): pH ۷٫۳۶، HCO₃ ۱۶، PCO₂ ۲۹ ← pH سمت اسیدی است؛ HCO₃ پایین (اسیدوز متابولیک) اصل است و PCO₂ پایین جبران.'),
          M('pH = ۷٫۴۴، HCO₃ = ۳۲، PCO₂ = ۴۸. اختلال اولیه؟', ['آلکالوز متابولیک', 'اسیدوز تنفسی', 'طبیعی', 'اسیدوز متابولیک'], 'pH سمت قلیایی ۷٫۴۰ است؛ HCO₃ بالا (آلکالوز) اصل است و PCO₂ بالا جبران یا اختلال همراه.', null, { pH: 7.44, pco2: 48, hco3: 32 }),
          L('قانون ۲: بیمار مهم‌تر از ABG است', 'همیشه بالین را کنار ABG بگذار. بیمار دیابتی با کتونوری ← اسیدوز متابولیک اولیه است، هر چه عددها «جبران‌شده» به نظر برسند.<br><br>• جبران تنفسی: دقیقه‌ها؛ جبران متابولیک: روزها<br>• پاسخ جبرانی بسیار بارز ممکن است یک <b>اختلال اولیه دوم</b> باشد<br>• در اسیدمی یا آلکالمی بسیار خفیف، هر دو PCO₂ و HCO₃ ممکن است طبیعی باشند ← اختلال مختلط خفیف'),
          T('جبران تنفسی ممکن است pH را از ۷٫۴۰ عبور دهد و بیمار اسیدوتیک را آلکالمیک کند.', false, 'جبران بیش از حد رخ نمی‌دهد؛ اگر pH از طرف دیگر ۷٫۴۰ است، اختلال دوم وجود دارد.'),
          M('pH = ۷٫۴۰ و PCO₂ = ۳۰. کدام محتمل است؟', ['اسیدوز متابولیک جبران‌شده یا آلکالوز تنفسی جبران‌شده (هر دو)', 'فقط آلکالوز تنفسی', 'فقط اسیدوز متابولیک', 'هیچ‌کدام'], 'دقیقاً روی ۷٫۴۰؛ بالین تعیین می‌کند (آزمون فصل ۸ کتاب).'),
          M('pH = ۷٫۳۰، PCO₂ = ۶۰، HCO₃ = ۲۹. تفسیر؟', ['اسیدوز تنفسی با جبران نسبی', 'اسیدوز تنفسی جبران‌نشده', 'اسیدوز متابولیک با جبران نسبی', 'آلکالوز متابولیک'], 'PCO₂ بالا pH را توضیح می‌دهد؛ HCO₃ بالا یعنی کلیه شروع به جبران کرده ولی pH هنوز پایین است.', null, { pH: 7.30, pco2: 60, hco3: 29 }),
          M('pH = ۷٫۵۵، PCO₂ = ۳۰، HCO₃ = ۲۶. تفسیر؟', ['آلکالوز تنفسی جبران‌نشده', 'آلکالوز تنفسی با جبران نسبی', 'آلکالوز متابولیک جبران‌نشده', 'آلکالوز متابولیک با جبران نسبی'], 'HCO₃ هنوز طبیعی است، پس جبرانی رخ نداده.', null, { pH: 7.55, pco2: 30, hco3: 26 }),
          N('p.primary')
        ]
      },
      {
        id: 'ph7', title: 'تفسیر گام‌به‌گام', icon: '🪜', items: [
          L('قاعده طلایی کتاب', '<b>تبادل گاز</b> و <b>وضعیت اسید و باز</b> را جداگانه تفسیر کن.<br><br>تبادل گاز: PaO₂ ← PaCO₂ ← HCO₃<br>اسید و باز: <b>pH ← PaCO₂ ← HCO₃</b><br><br>و قبل از همه: آیا نمونه واقعاً شریانی و عددها هم‌خوان‌اند؟'),
          L('فلوچارت pH پایین', '<ol class="algo"><li>pH < ۷٫۳۵ (اسیدمی). PaCO₂ بالاست؟</li><li><b>بله</b> ← اسیدوز تنفسی. HCO₃ بالا: جبران نسبی · طبیعی: جبران‌نشده · <b>پایین: تنفسی + متابولیک مختلط</b></li><li><b>خیر</b> ← HCO₃ پایین است؟ بله: اسیدوز متابولیک (PaCO₂ پایین: جبران نسبی · طبیعی: جبران‌نشده)</li></ol>'),
          L('فلوچارت pH بالا و طبیعی', '<b>pH > ۷٫۴۵</b>: PaCO₂ پایین؟ ← آلکالوز تنفسی (HCO₃ پایین: نسبی · طبیعی: جبران‌نشده · بالا: مختلط). وگرنه HCO₃ بالا ← آلکالوز متابولیک (PaCO₂ بالا: نسبی).<br><br><b>pH طبیعی</b>:<br>• هر دو بالا ← اسیدوز تنفسی جبران‌شده یا آلکالوز متابولیک جبران‌شده<br>• هر دو پایین ← اسیدوز متابولیک جبران‌شده یا آلکالوز تنفسی جبران‌شده<br>• برای انتخاب: سمت ۷٫۴۰'),
          O('شش گام تفسیر (اسلایدها) را مرتب کن', ['تعیین وضعیت pH', 'بررسی PCO₂', 'بررسی HCO₃', 'یافتن جزء هم‌جهت با pH (اختلال اولیه)', 'یافتن جزء خلاف جهت (جبران)', 'بررسی اکسیژناسیون']),
          M('pH = ۷٫۳۰، PCO₂ = ۳۰، HCO₃ = ۱۴٫۵، PO₂ = ۹۵. تفسیر کامل؟', ['اسیدوز متابولیک با جبران نسبی تنفسی، اکسیژناسیون طبیعی', 'اسیدوز تنفسی با هیپوکسی', 'آلکالوز تنفسی', 'اسیدوز مختلط'], 'HCO₃ پایین هم‌جهت با pH (اولیه)؛ PCO₂ پایین خلاف جهت (جبران)؛ pH هنوز پایین ← نسبی.', null, { pH: 7.30, pco2: 30, po2: 95, hco3: 14.5 }),
          M('pH = ۷٫۵۹، PCO₂ = ۴۹، HCO₃ = ۴۸٫۲، PO₂ = ۵۸٫۷ (هوای اتاق). تفسیر کامل؟', ['آلکالوز متابولیک با جبران نسبی تنفسی و هیپوکسمی متوسط', 'اسیدوز تنفسی', 'آلکالوز تنفسی با هیپوکسی', 'طبیعی'], 'HCO₃ بالا pH را توضیح می‌دهد؛ PCO₂ بالا جبران است؛ PaO₂ ۴۰ تا ۵۹ = متوسط (مثال اسلایدها).', null, { pH: 7.59, pco2: 49, po2: 58.7, hco3: 48.2 }),
          M('pH = ۷٫۲۵، PCO₂ = ۵۵، HCO₃ = ۲۵، PO₂ = ۶۰. تفسیر؟', ['اسیدوز تنفسی جبران‌نشده با هیپوکسمی خفیف', 'اسیدوز متابولیک', 'اسیدوز تنفسی مزمن جبران‌شده', 'آلکالوز متابولیک'], 'PCO₂ بالا، HCO₃ هنوز طبیعی ← حاد و جبران‌نشده.', null, { pH: 7.25, pco2: 55, po2: 60, hco3: 25 }),
          T('در یک ABG، HCO₃ پایین و PCO₂ بالا با pH ۷٫۱۵ یعنی جبران کامل.', false, 'هر دو به سمت اسیدوز رفته‌اند ← اسیدوز تنفسی + متابولیک مختلط؛ خطرناک‌ترین الگو.'),
          N('p.primary')
        ]
      },
      {
        id: 'ph8', title: 'فرمول‌های جبران', icon: '🧮', items: [
          L('چرا فرمول؟', 'فلوچارت‌ها فقط می‌گویند جبرانی هست یا نه. فرمول‌ها می‌گویند <b>جبران چقدر باید باشد</b>؛ اگر مقدار واقعی با انتظار نخواند، <b>اختلال دوم</b> وجود دارد.<br>این روش دقیق‌تر است و در بیمار بدحال ICU اختلال‌های پنهان را پیدا می‌کند.'),
          L('اختلالات متابولیک', '<b>اسیدوز متابولیک (وینتر)</b>:' + fx('PCO₂ = 1.5 × HCO₃ + 8 ± 2') + 'قاعده سریع: PCO₂ ≈ دو رقم اعشار pH<br><br><b>آلکالوز متابولیک</b>:' + fx('PCO₂ = 40 + 0.7 × (HCO₃ − 24) ± 5') + 'یا ساده‌تر: PCO₂ ≈ HCO₃ + ۱۵'),
          N('a.winter'),
          L('اختلالات تنفسی (به ازای هر ۱۰ mmHg)', tbl([['اختلال', 'تغییر HCO₃'], ['اسیدوز تنفسی حاد', '+۱'], ['اسیدوز تنفسی مزمن', '+۴ (۳٫۵ تا ۴)'], ['آلکالوز تنفسی حاد', '−۲'], ['آلکالوز تنفسی مزمن', '−۴ (۴ تا ۵)']]) + '<small>رمز: «۱-۴ بالا، ۲-۴ پایین». pH در اسیدوز تنفسی حاد به ازای هر ۱۰ mmHg حدود ۰٫۰۸ و در مزمن حدود ۰٫۰۳ افت می‌کند.</small>'),
          N('c.acute'),
          N('c.chronic'),
          M('بیمار با اسیدوز متابولیک: HCO₃ = ۱۰ و PCO₂ = ۳۵. تفسیر؟', ['اسیدوز متابولیک + اسیدوز تنفسی', 'اسیدوز متابولیک با جبران مناسب', 'اسیدوز متابولیک + آلکالوز تنفسی', 'آلکالوز تنفسی اولیه'], 'انتظار: ۱٫۵ × ۱۰ + ۸ = ۲۳ ± ۲. PCO₂ ۳۵ خیلی بالاتر است ← ریه نمی‌تواند جبران کند (خستگی، سرکوب تنفس).', null, { pH: 7.08, pco2: 35, hco3: 10 }),
          L('نتیجه مقایسه', '• مقدار واقعی = مورد انتظار ← اختلال <b>ساده</b><br>• در اسیدوز متابولیک، PCO₂ بیمار <b>بیشتر</b> از انتظار ← + اسیدوز تنفسی؛ <b>کمتر</b> ← + آلکالوز تنفسی<br>• در اسیدوز تنفسی، HCO₃ بیمار <b>بیشتر</b> از انتظار ← + آلکالوز متابولیک؛ <b>کمتر</b> ← + اسیدوز متابولیک<br><small>(فلوچارت سینا مرادی: فرمول‌های ۲ تا ۵)</small>'),
          N('c.malk')
        ]
      },
      {
        id: 'ph9', title: 'آی‌سی‌یو اسید و باز', icon: '🚨', items: [
          L('الگوریتم کامل تفسیر اسید و باز', '<ol class="algo"><li><b>بالین</b>: چه انتظاری داری؟</li><li><b>راستی‌آزمایی</b>: [H⁺] = ۲۴ × PCO₂ ÷ HCO₃</li><li><b>pH</b>: اسیدمی، آلکالمی یا طبیعی (سمت ۷٫۴۰)</li><li><b>اختلال اولیه</b>: کدام جزء هم‌جهت با pH است؟</li><li><b>جبران مورد انتظار</b> با فرمول؛ اختلال دوم؟</li><li><b>آنیون گپ</b> (همیشه، حتی با pH طبیعی) و در صورت بالا بودن، <b>نسبت دلتا</b></li><li><b>علت</b> را پیدا کن و درمان کن</li></ol>'),
          O('مراحل تفسیر کامل اسید و باز را مرتب کن', ['راستی‌آزمایی داده‌ها', 'تعیین وضعیت pH', 'یافتن اختلال اولیه', 'محاسبه جبران مورد انتظار', 'محاسبه آنیون گپ و دلتا', 'یافتن علت']),
          L('اختلالات مختلط خطرناک', 'اگر دو فرایند <b>هم‌جهت</b> باشند، pH به‌شدت تغییر می‌کند:<br>• <b>اسیدوز تنفسی + اسیدوز متابولیک</b>: خطرناک‌ترین الگو؛ معمولاً نارسایی شدید تنفسی با هیپوکسی بافتی و اسیدوز لاکتیک<br>• آلکالوز تنفسی + آلکالوز متابولیک<br><br>اگر <b>خلاف جهت</b> باشند، pH ممکن است طبیعی بماند: مثل مسمومیت با <b>سالیسیلات</b> (تحریک مستقیم تنفس + اسید).'),
          M('خطرناک‌ترین اختلال اسید و باز کدام است؟', ['اسیدوز تنفسی + اسیدوز متابولیک', 'اسیدوز تنفسی + آلکالوز متابولیک', 'اسیدوز لاکتیک به‌تنهایی', 'آلکالوز تنفسی'], 'دو فرایند اسیدی بدون جبران ← اسیدمی عمیق.'),
          M('در مسمومیت با آسپرین کدام اختلال مختلط ایجاد می‌شود؟', ['اسیدوز متابولیک + آلکالوز تنفسی', 'آلکالوز متابولیک + اسیدوز تنفسی', 'اسیدوز متابولیک + اسیدوز تنفسی', 'آلکالوز متابولیک + آلکالوز تنفسی'], 'سالیسیلات مرکز تنفس را مستقیم تحریک می‌کند و خودش هم اسید است.'),
          M('pH = ۷٫۲۰، PCO₂ = ۵۵، HCO₃ = ۲۱. تفسیر؟', ['اسیدوز تنفسی + اسیدوز متابولیک', 'اسیدوز تنفسی حاد ساده', 'اسیدوز متابولیک جبران‌شده', 'آلکالوز متابولیک'], 'اسیدوز تنفسی حاد انتظار HCO₃ حدود ۲۵٫۵ دارد؛ ۲۱ پایین است ← اسیدوز متابولیک همراه.', null, { pH: 7.20, pco2: 55, hco3: 21 }),
          M('pH = ۷٫۴۰، PCO₂ = ۴۰، HCO₃ = ۲۴، ولی Na = ۱۴۰ و Cl = ۹۵. چه چیزی پنهان است؟', ['اسیدوز متابولیک با گپ بالا + آلکالوز متابولیک', 'هیچ؛ همه چیز طبیعی است', 'اسیدوز تنفسی', 'اسیدوز هیپرکلرمیک'], 'آنیون گپ = ۱۴۰ − (۹۵ + ۲۴) = ۲۱! گپ بالا با HCO₃ طبیعی یعنی یک آلکالوز هم‌زمان کاهش HCO₃ را پوشانده (مثلاً اورمی با استفراغ).', null, { pH: 7.40, pco2: 40, hco3: 24, na: 140, cl: 95 }),
          T('ABG با pH، PCO₂ و HCO₃ کاملاً طبیعی می‌تواند دو اختلال اسید و باز داشته باشد.', true, 'آنیون گپ را همیشه حساب کن؛ اسیدوز با گپ بالا + آلکالوز متابولیک می‌تواند عددهای طبیعی بسازد.'),
          N('a.winterMcq')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — دنیای ۳: اسیدوز متابولیک و آنیون گپ
 * منابع: کتاب «ABG در بالین» (فصل ۴ و تمرین‌های ۱۴ تا ۲۱)، فلوچارت medjuu (آنیون گپ ادرار، اسمولار گپ)،
 * جزوه دکتر ژیان (علل و درمان اسیدوز متابولیک)، و به‌روزرسانی با راهنمای ADA برای کتواسیدوز. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, fx, tbl } = EA.K;

  EA.worlds.push({
    id: 'ag', sym: 'AG', name: 'اسیدوز متابولیک', sub: 'آنیون گپ، دلتا و علت‌یابی', color: '#FF9600', dark: '#CC7800', light: '#FFF0DB',
    levels: ['کاشفان گپ', 'شکارچیان سم', 'استادان دلتا'],
    gens: ['a.ag', 'a.agk', 'a.agc', 'a.winter', 'a.winterMcq', 'a.delta', 'a.osm', 'a.uag', 'a.bicarb'],
    lessons: [
      {
        id: 'ag1', title: 'اسیدوز متابولیک چیست؟', icon: '🍋', items: [
          L('تعریف', 'هر فرایندی که <b>بدون افزایش PaCO₂</b> pH را پایین بیاورد:<br>• <b>اضافه شدن اسید</b>: تولید زیاد (لاکتات، کتون)، مصرف (متانول، آسپرین)، دفع کم (نارسایی کلیه)<br>• <b>از دست رفتن باز</b>: اسهال، اسیدوز توبولار کلیوی<br><br>در ABG: <b>HCO₃ پایین و BE منفی</b>. ریه با افزایش تهویه جبران می‌کند (PaCO₂ پایین).'),
          M('واقعه اولیه در اسیدوز متابولیک کدام است؟', ['کاهش HCO₃', 'افزایش PaCO₂', 'کاهش PaCO₂', 'افزایش HCO₃'], 'کاهش PaCO₂ پاسخ جبرانی است، نه واقعه اولیه.'),
          L('علائم', '• <b>تنفس کوسمال</b>: تند و عمیق، مثل «عطش هوا»؛ نشانه غالب و بیانگر جبران ریوی<br>• نشانه‌های هیپرکالمی (کرامپ شکمی، اسهال، ضعف عضلانی)<br>• کاهش رفلکس‌ها، افت فشار خون، پوست گرم و خشک، لتارژی، گیجی و کاهش سطح هوشیاری<br>• اسیدمی عمیق (pH کمتر از ۷٫۱۵) ← کاهش انقباض قلب، شوک و نارسایی ارگان'),
          M('تظاهر غالب اسیدوز متابولیک کدام است؟', ['تنفس کوسمال (تند و عمیق)', 'برادی‌پنه', 'تتانی', 'لرزش بال‌زدنی'], 'ریه با دفع CO₂ اضافه تلاش می‌کند pH را بالا ببرد.'),
          L('شدت', '• <b>HCO₃ کمتر از ۱۵</b> یا <b>BE کمتر از −۱۰</b> ← فرایند اسیدی شدید<br>• <b>pH کمتر از ۷٫۲۵</b> ← شکست جبران، اورژانس<br>• <b>pH کمتر از ۷٫۱۵</b> ← اسیدمی عمیق؛ خطر شوک و ایست<br>• در اسیدوز لاکتیک، BE کمتر از −۱۰ یعنی هیپوکسی شدید سلولی'),
          T('اسیدوز متابولیک با آنیون گپ بالا همیشه pH کمتر از ۷٫۳۵ دارد.', false, 'اگر آلکالوز متابولیک یا تنفسی هم‌زمان باشد، pH ممکن است طبیعی یا حتی بالا باشد.'),
          N('p.primary'),
          B('در اسیدوز متابولیک شدید، HCO₃ کمتر از ___ است.', ['۱۵', '۲۲', '۳۰'], 'یا BE کمتر از −۱۰.'),
          M('کدام اسید با کلیه دفع می‌شود؟', ['اسید سولفوریک حاصل از پروتئین', 'اسید کربنیک', 'CO₂', 'هیچ‌کدام'], 'اسیدهای متابولیک (غیرفرّار) را کلیه دفع می‌کند؛ اسید کربنیک را ریه.')
        ]
      },
      {
        id: 'ag2', title: 'آنیون گپ', icon: '🕳️', items: [
          L('آنیون‌هایی که نمی‌بینیم', 'مجموع بارهای مثبت و منفی خون برابر است. ولی وقتی کاتیون‌های اصلی را با آنیون‌های اصلی مقایسه می‌کنیم، یک <b>شکاف</b> می‌ماند: آنیون‌های اندازه‌گیری‌نشده (آلبومین، فسفات، سولفات، اسیدهای آلی).' + fx('AG = Na − (Cl + HCO₃)') + 'طبیعی: حدود <b>۱۲ ± ۴</b> (بسته به آزمایشگاه؛ فلوچارت: ۱۰ تا ۱۲)'),
          N('a.ag'),
          L('روش کتاب: با پتاسیم', fx('AG = (Na + K) − (Cl + HCO₃)') + 'طبیعی: <b>۱۰ تا ۲۰</b>. افزایش به بیش از ۲۰ یعنی آنیون اندازه‌گیری‌نشده (لاکتات، سالیسیلات، کتون…) زیاد شده.<br><small>هر دو روش درست‌اند؛ فقط محدوده طبیعی را با همان روش مقایسه کن.</small>'),
          M('Na = ۱۴۰، K = ۵، Cl = ۱۰۵، HCO₃ = ۲۶. آنیون گپ (با پتاسیم) چند است؟', ['۱۴', '۲۰', '۱۸', '۱۲'], '(۱۴۰ + ۵) − (۱۰۵ + ۲۶) = ۱۴۵ − ۱۳۱ = ۱۴ (آزمون فصل ۴ کتاب).'),
          N('a.agk'),
          L('دام آلبومین', 'آلبومین مهم‌ترین آنیون اندازه‌گیری‌نشده است. در بیمار بدحال با آلبومین پایین، گپ «طبیعی» ممکن است یک اسیدوز با گپ بالا را پنهان کند:' + fx('AG اصلاح‌شده = AG + 2.5 × (4 − آلبومین)') + 'به ازای هر ۱ g/dL کاهش آلبومین، حدود ۲٫۵ به گپ اضافه کن.'),
          N('a.agc'),
          T('در بیمار سیروتیک با آلبومین ۲ و آنیون گپ ۱۱، اسیدوز با گپ بالا رد می‌شود.', false, 'گپ اصلاح‌شده = ۱۱ + ۲٫۵ × ۲ = ۱۶؛ مرزی و مشکوک. همیشه اصلاح کن.'),
          M('محاسبه آنیون گپ در علت‌یابی کدام اختلال کمک می‌کند؟', ['اسیدوز متابولیک', 'اسیدوز تنفسی', 'آلکالوز تنفسی', 'آلکالوز متابولیک'], 'گپ، اسیدوز متابولیک را به دو گروه تقسیم می‌کند: گپ بالا و گپ طبیعی.'),
          L('همیشه حساب کن!', 'آنیون گپ را در <b>هر</b> ABG همراه الکترولیت حساب کن، حتی با pH طبیعی. گپ بیش از ۲۰ تقریباً همیشه یعنی اسیدوز متابولیک واقعی، حتی اگر HCO₃ و pH طبیعی باشند (آلکالوز هم‌زمان آن را پوشانده).')
        ]
      },
      {
        id: 'ag3', title: 'علل آنیون گپ بالا', icon: '🔥', items: [
          L('GOLDMARK', tbl([['حرف', 'علت'], ['G', 'گلیکول‌ها (اتیلن و پروپیلن گلیکول)'], ['O', '۵-اکسوپرولین (مصرف مزمن استامینوفن)'], ['L', 'ال-لاکتات (شوک، سپسیس، ایسکمی)'], ['D', 'دی-لاکتات (سندرم روده کوتاه)'], ['M', 'متانول'], ['A', 'آسپرین (سالیسیلات)'], ['R', 'نارسایی کلیه (اورمی)'], ['K', 'کتواسیدوز (دیابتی، الکلی، گرسنگی)']]) + '<small>قدیمی‌تر: MUDPILES. کتاب این‌ها را در چهار گروه می‌آورد: اسیدوز لاکتیک، کتواسیدوز، نارسایی کلیه و مسمومیت.</small>'),
          P('هر علت را به گروهش وصل کن', [['شوک سپتیک', 'اسیدوز لاکتیک'], ['گرسنگی طولانی', 'کتواسیدوز'], ['اورمی', 'نارسایی کلیه'], ['متانول', 'مسمومیت']]),
          M('کدام مورد آنیون گپ را بالا نمی‌برد؟', ['اسهال', 'متانول', 'کتواسیدوز دیابتی', 'اسیدوز لاکتیک'], 'اسهال HCO₃ را از دست می‌دهد و کلر جایش را می‌گیرد ← گپ طبیعی (هیپرکلرمیک).'),
          L('رمز دکتر ژیان', '<i>«اسدالله (استازولامید) الکل خورده، دُم درآورده (DM، DKA، HHS)، رفت آس کرده (ASA، CKD) که بره سرویس بهداشتی (اسهال)»</i><br><br>این رمز علل شایع اسیدوز متابولیک (با گپ بالا و طبیعی) را با هم یادآوری می‌کند؛ استازولامید و اسهال گپ طبیعی می‌دهند.'),
          L('اسیدوز لاکتیک', 'شایع‌ترین علت اسیدوز متابولیک در بیمارستان.<br>• <b>نوع A</b>: هیپوکسی بافتی (شوک، هیپوکسمی شدید، ایست قلبی، ایسکمی مزانتریک، مسمومیت با CO)<br>• <b>نوع B</b>: بدون هیپوپرفیوژن (متفورمین، نارسایی کبد، بدخیمی، کمبود تیامین)<br>لاکتات شاخص شدت است؛ <b>بالای ۴</b> در سپسیس یعنی خطر بالا.'),
          M('کدام مورد باعث اسیدوز لاکتیک می‌شود؟', ['همه موارد', 'شوک', 'سپسیس', 'انفارکتوس'], 'همه با کاهش اکسیژن‌رسانی بافتی متابولیسم بی‌هوازی را فعال می‌کنند.'),
          T('متفورمین می‌تواند اسیدوز لاکتیک بدون شوک ایجاد کند.', true, 'اسیدوز لاکتیک نوع B؛ به‌خصوص در نارسایی کلیه.'),
          N('a.ag'),
          B('کتواسیدوز در دیابت، گرسنگی طولانی و ___ دیده می‌شود.', ['مصرف زیاد الکل', 'اسهال', 'استفراغ'], 'کتواسیدوز الکلی معمولاً با قند طبیعی یا پایین همراه است.')
        ]
      },
      {
        id: 'ag4', title: 'لاکتات و کتواسیدوز دیابتی', icon: '🍬', items: [
          L('کتواسیدوز دیابتی (DKA)', 'کمبود شدید انسولین ← هیپرگلیسمی و شکستن چربی ← <b>اجسام کتونی</b> (اسیدهای آلی) ← اسیدوز با گپ بالا.<br>• تنفس عمیق آه‌مانند و <b>بوی استون</b><br>• دیورز اسمزی ← <b>کم‌آبی شدید</b> و از دست رفتن الکترولیت‌ها<br>• پتاسیم سرم ممکن است بالا باشد ولی ذخیره کل بدن کم است'),
          M('زن دیابتی نوع ۱، انسولین را قطع کرده؛ تنفس عمیق و بوی استون. آنیون گپ (بدون پتاسیم) چند است؟', ['۳۹', '۱۲', '۲۰', '۶'], '۱۴۱ − (۹۶ + ۶) = ۳۹؛ به روش کتاب با پتاسیم ۴۳٫۶. کتون‌ها گپ را بالا برده‌اند (تمرین ۱۵).', [['قند', '۶۳۶ mg/dL'], ['K', '۴٫۶']], { pH: 7.05, pco2: 11, hco3: 6, na: 141, cl: 96 }),
          L('درمان DKA', 'به گفته دکتر ژیان، <b>DKA مثل شوک هیپوولمیک</b> است؛ اول سرم.<br><ol class="algo"><li><b>مایع</b>: سالین ۰٫۹٪ (مثلاً ۱ لیتر در ساعت اول)</li><li><b>پتاسیم را قبل از انسولین بسنج</b>: زیر ۳٫۳ ← اول پتاسیم، انسولین را نگه دار</li><li><b>انسولین</b> وریدی مداوم</li><li>قند به حدود ۲۰۰ رسید ← دکستروز اضافه کن و انسولین را ادامه بده تا گپ بسته شود</li></ol><small>بی‌کربنات در DKA فقط اگر pH کمتر از ۶٫۹ باشد (راهنمای ADA).</small>'),
          O('مراحل درمان DKA را مرتب کن', ['جبران حجم با سالین', 'سنجش پتاسیم پیش از انسولین', 'انسولین وریدی', 'افزودن دکستروز با افت قند', 'ادامه تا بسته شدن آنیون گپ']),
          T('در DKA با pH = ۷٫۰۵، بی‌کربنات وریدی روتین توصیه می‌شود.', false, 'طبق ADA فقط زیر ۶٫۹. بی‌کربنات خطر هیپوکالمی و ادم مغزی (به‌خصوص در کودکان) دارد.'),
          L('ایسکمی مزانتریک: لاکتات بدون شوک', 'زن ۷۸ ساله با فیبریلاسیون دهلیزی و درد شکمی شدید، ولی معاینه شکم تقریباً طبیعی (تمرین ۱۴):<br>• اسیدوز متابولیک با لاکتات بالا<br>• اکسیژناسیون طبیعی و بدون شوک<br>• منبع لاکتات: <b>روده ایسکمیک</b> (آمبولی یا ترومبوز شریان مزانتریک)<br><br><b>درد شدید + معاینه ناچیز + اسیدوز لاکتیک</b> = ایسکمی مزانتریک تا خلافش ثابت شود.'),
          M('محتمل‌ترین تشخیص؟', ['ایسکمی مزانتریک', 'پانکراتیت خفیف', 'گاستروانتریت', 'کتواسیدوز'], 'درد نامتناسب با معاینه، AF و اسیدوز لاکتیک.', [['بیمار', 'زن ۷۸ ساله، AF، آسپرین و دیگوکسین'], ['درد', 'شدید، ناگهانی، منتشر'], ['معاینه شکم', 'نرم، فقط تندرنس عمقی'], ['اکسیژن', '۱۰ لیتر با ماسک']], { pH: 7.28, pco2: 33, po2: 215, hco3: 16.2, be: -10.4, lac: 3.2 }),
          L('کتواسیدوز الکلی و گرسنگی', '• <b>الکلی</b>: پس از مصرف سنگین و استفراغ و بی‌غذایی؛ قند طبیعی یا پایین. درمان: سرم قندی + <b>تیامین</b> (قبل از قند)<br>• <b>گرسنگی</b>: معمولاً خفیف (HCO₃ بالای ۱۸)'),
          N('a.winter')
        ]
      },
      {
        id: 'ag5', title: 'الکل‌های سمی و آسپرین', icon: '☠️', items: [
          L('متانول', 'حتی <b>۳۰ میلی‌لیتر</b> می‌تواند کشنده باشد. کبد آن را به فرمالدئید و <b>اسید فرمیک</b> تبدیل می‌کند:<br>• اسیدوز شدید با گپ بالا<br>• <b>سمیت چشمی</b> (تاری دید تا کوری دائمی)<br>• شکاف اسمولار بالا (در ساعت‌های اول)<br><br>درمان: مهار الکل دهیدروژناز با <b>فومپیزول</b> یا <b>اتانول</b> (کتاب: اتانول ۵۰٪ ۲ mL/kg خوراکی یا اتانول ۱۰٪ ۷ mL/kg وریدی به عنوان دوز اولیه)، بی‌کربنات، و <b>همودیالیز</b>.'),
          M('مرد ۳۷ ساله بیهوش کنار بطری متانول. آنیون گپ (بدون پتاسیم) چند است و آیا با متانول می‌خواند؟', ['۲۷٫۵؛ بله', '۱۲؛ خیر', '۲۷٫۵؛ خیر', '۴۰؛ بله'], '۱۳۶ − (۹۹ + ۹٫۵) = ۲۷٫۵ (با پتاسیم ۳۲). اسیدوز شدید با گپ بالا با متانول می‌خواند (تمرین ۱۶).', [['GCS', '۹'], ['K', '۴٫۵']], { pH: 7.20, pco2: 25, po2: 96, hco3: 9.5, na: 136, cl: 99 }),
          L('شکاف اسمولار', fx('Osm محاسبه‌شده = 2 × Na + قند ÷ 18 + BUN ÷ 2.8') + fx('شکاف = اسمولالیته اندازه‌گیری‌شده − محاسبه‌شده') + 'طبیعی: <b>کمتر از ۱۰</b>. در اسیدوز با گپ بالا، شکاف بالا ← <b>متانول، اتیلن گلیکول</b> (فلوچارت: بالای ۱۵ یعنی مسمومیت با الکل‌ها و ضدیخ).<br><small>در ساعت‌های دیر، الکل متابولیزه شده و شکاف اسمولار ممکن است طبیعی شود در حالی که گپ آنیونی بالاست.</small>'),
          N('a.osm'),
          L('اتیلن گلیکول (ضدیخ)', 'مزه شیرین؛ متابولیت‌ها: اسید گلیکولیک و <b>اگزالات</b> ← کریستال اگزالات کلسیم در ادرار، <b>نارسایی حاد کلیه</b> و هیپوکلسمی. درمان مثل متانول (فومپیزول، دیالیز).'),
          L('مسمومیت با سالیسیلات (آسپرین)', '• <b>وزوز گوش</b>، تهوع، استفراغ، تب<br>• اختلال مختلط: <b>آلکالوز تنفسی</b> (تحریک مستقیم مرکز تنفس) + <b>اسیدوز متابولیک با گپ بالا</b><br>• pH ممکن است طبیعی باشد!<br>تأیید: سطح سالیسیلات خون. درمان: قلیایی کردن ادرار با بی‌کربنات، ذغال فعال، و در موارد شدید دیالیز.<br><b>هرگز</b> بیمار را بدون حمایت تهویه‌ای کافی آرام‌بخش یا لوله‌گذاری نکن (افت هیپرونتیلاسیون ← اسیدمی ناگهانی).'),
          M('دختر ۱۸ ساله با وزوز گوش و تهوع پس از مصرف ماده ناشناخته. محتمل‌ترین ماده؟', ['آسپرین', 'متانول', 'مورفین', 'بنزودیازپین'], 'گپ = ۱۴۰ − (۹۹ + ۱۷٫۶) = ۲۳٫۴ با PCO₂ بسیار پایین و pH طبیعی: اسیدوز متابولیک + آلکالوز تنفسی (تمرین ۱۸).', [['تنفس', 'تند و عمیق']], { pH: 7.41, pco2: 22.6, po2: 97.5, hco3: 17.6, na: 140, cl: 99 }),
          P('هر سم را به نشانه‌اش وصل کن', [['متانول', 'کوری'], ['اتیلن گلیکول', 'کریستال اگزالات در ادرار'], ['آسپرین', 'وزوز گوش'], ['CO', 'لاکتات بالا با SpO₂ طبیعی']]),
          T('شکاف اسمولار طبیعی، مسمومیت با متانول را در هر زمانی رد می‌کند.', false, 'پس از متابولیزه شدن الکل، شکاف اسمولار کم می‌شود ولی گپ آنیونی بالاست.')
        ]
      },
      {
        id: 'ag6', title: 'نسبت دلتا و اختلال سه‌گانه', icon: '🔺', items: [
          L('ایده دلتا', 'در اسیدوز «خالص» با گپ بالا، هر اسید آلی که اضافه می‌شود تقریباً یک HCO₃ مصرف می‌کند و یک آنیون به گپ اضافه می‌کند. پس افزایش گپ ≈ کاهش HCO₃.' + fx('Δ ratio = (AG − 12) ÷ (24 − HCO₃)') + tbl([['نسبت', 'تفسیر'], ['کمتر از ۱', '+ اسیدوز با گپ طبیعی'], ['۱ تا ۲', 'اسیدوز خالص با گپ بالا'], ['بیشتر از ۲', '+ آلکالوز متابولیک (یا HCO₃ بالای قبلی در COPD)']])),
          N('a.delta'),
          L('روش بی‌کربنات اصلاح‌شده', 'همان منطق به شکل دیگر: گپ اضافه را به HCO₃ برگردان تا ببینی HCO₃ «قبل از» اسید چقدر بوده:' + fx('HCO₃ اصلاح‌شده = HCO₃ + (AG − 12)') + '• بیشتر از ۲۶ ← آلکالوز متابولیک همراه<br>• کمتر از ۲۲ ← اسیدوز با گپ طبیعی همراه'),
          M('AG = ۲۶، HCO₃ = ۱۸. تفسیر؟', ['اسیدوز با گپ بالا + آلکالوز متابولیک', 'اسیدوز خالص با گپ بالا', 'اسیدوز با گپ بالا + اسیدوز با گپ طبیعی', 'فقط آلکالوز'], 'ΔAG = ۱۴، ΔHCO₃ = ۶ ← نسبت ۲٫۳. HCO₃ اصلاح‌شده = ۱۸ + ۱۴ = ۳۲. بیمار احتمالاً استفراغ هم داشته.'),
          M('AG = ۱۶، HCO₃ = ۸. تفسیر؟', ['اسیدوز با گپ بالا + اسیدوز با گپ طبیعی', 'اسیدوز خالص با گپ بالا', 'آلکالوز متابولیک همراه', 'طبیعی'], 'ΔAG = ۴ ولی ΔHCO₃ = ۱۶ ← نسبت ۰٫۲۵. مثل کتواسیدوز همراه اسهال، یا درمان DKA با سالین زیاد.'),
          L('اختلال سه‌گانه', 'ممکن است سه فرایند هم‌زمان باشند: <b>اسیدوز متابولیک با گپ بالا + آلکالوز متابولیک + یک اختلال تنفسی</b>.<br>مثال: بیمار الکلی با استفراغ (آلکالوز)، کتواسیدوز الکلی (اسیدوز با گپ بالا) و سیروز یا سپسیس (آلکالوز تنفسی).<br>قانون: <b>اسیدوز تنفسی و آلکالوز تنفسی هرگز با هم نیستند</b>، پس سه‌گانه حداکثر است.'),
          T('ممکن است بیمار هم‌زمان اسیدوز متابولیک، آلکالوز متابولیک و آلکالوز تنفسی داشته باشد.', true, 'اختلال سه‌گانه؛ با آنیون گپ، دلتا و فرمول جبران پیدا می‌شود.'),
          N('a.winterMcq'),
          B('نسبت دلتای بیشتر از ۲ یعنی ___ همراه است.', ['آلکالوز متابولیک', 'اسیدوز با گپ طبیعی', 'اسیدوز تنفسی'], 'HCO₃ کمتر از آن‌چه اسید مصرف کرده افت کرده؛ یعنی از قبل بالا بوده.')
        ]
      },
      {
        id: 'ag7', title: 'گپ طبیعی (هیپرکلرمیک)', icon: '🧂', items: [
          L('وقتی کلر جای بی‌کربنات را می‌گیرد', 'در از دست رفتن HCO₃، کلیه <b>کلر</b> نگه می‌دارد تا بارها برابر بمانند؛ کلر اندازه‌گیری می‌شود، پس <b>گپ طبیعی</b> می‌ماند.<br>علل:<br>• <b>گوارشی</b>: اسهال، فیستول پانکراس، یورتروسیگموئیدوستومی<br>• <b>کلیوی</b>: اسیدوز توبولار کلیوی (RTA)، استازولامید، نارسایی آدرنال<br>• <b>تجویزی</b>: سالین ۰٫۹٪ فراوان، کلرید آمونیوم'),
          M('کدام علت اسیدوز با گپ طبیعی است؟', ['اسهال', 'متانول', 'اسیدوز لاکتیک', 'نارسایی کلیه پیشرفته'], 'بقیه گپ را بالا می‌برند.'),
          L('آنیون گپ ادرار', fx('UAG = (Na + K) ادرار − Cl ادرار') + 'کلیه سالم در اسیدوز <b>آمونیوم (NH₄⁺)</b> زیاد دفع می‌کند که همراه کلر است ← Cl ادرار بالا ← <b>UAG منفی</b>.<br>• <b>منفی</b> ← کلیه سالم است؛ علت <b>گوارشی (اسهال)</b><br>• <b>مثبت</b> ← دفع آمونیوم مختل؛ <b>RTA</b><br><small>رمز: «neGUTive» — منفی یعنی روده (gut).</small>'),
          N('a.uag'),
          L('اسیدوز توبولار کلیوی (خلاصه)', tbl([['نوع', 'ویژگی'], ['۱ (دیستال)', 'pH ادرار بالای ۵٫۵، هیپوکالمی، سنگ کلیه'], ['۲ (پروگزیمال)', 'هدررفت HCO₃، هیپوکالمی، گاهی فانکونی'], ['۴', 'هیپرکالمی؛ کمبود یا مقاومت به آلدوسترون (دیابت، داروها)']])),
          M('مرد ۵۲ ساله با سنگ‌های عودکننده کلیه، بدون اسهال. تشخیص؟', ['اسیدوز توبولار کلیوی نوع ۱', 'اسهال پنهان', 'کتواسیدوز', 'مسمومیت با متانول'], 'گپ = ۱۳۷ − (۱۰۹ + ۱۸) = ۱۰ (طبیعی)، کلر بالا، هیپوکالمی و سنگ ← RTA نوع ۱. کلسیم در ادرار قلیایی رسوب می‌کند (تمرین ۱۷).', null, { pH: 7.37, pco2: 31.5, po2: 99, hco3: 18, k: 3, na: 137, cl: 109 }),
          T('تجویز حجم زیاد سالین ۰٫۹٪ می‌تواند اسیدوز متابولیک هیپرکلرمیک ایجاد کند.', true, 'سالین کلر ۱۵۴ دارد؛ محلول‌های متعادل (رینگر لاکتات) کمتر این اثر را دارند.'),
          P('هر یافته را به علتش وصل کن', [['UAG منفی', 'اسهال'], ['UAG مثبت', 'RTA'], ['هیپرکالمی و دیابت', 'RTA نوع ۴'], ['سنگ کلیه و pH ادرار بالا', 'RTA نوع ۱']]),
          L('نارسایی آدرنال', 'کمبود کورتیزول و آلدوسترون: <b>هیپوناترمی، هیپرکالمی، هیپوگلیسمی</b>، افت فشار و اسیدوز متابولیک.<br>علائم اولیه غیراختصاصی‌اند (خستگی، کاهش وزن) و ممکن است به <b>بحران حاد آدرنال</b> برسد.<br>درمان اختصاصی: <b>هیدروکورتیزون وریدی</b> (۱۰۰ میلی‌گرم) همراه مایع (تمرین ۱۹).')
        ]
      },
      {
        id: 'ag8', title: 'درمان اسیدوز متابولیک', icon: '💉', items: [
          L('اصل اول: علت را درمان کن', '• <b>DKA</b>: مایع، انسولین، پتاسیم<br>• <b>اسیدوز لاکتیک</b>: اصلاح پرفیوژن (مایع، وازوپرسور، منبع عفونت)<br>• <b>نارسایی کلیه یا مسمومیت</b>: دیالیز، پادزهر<br>• <b>اسهال</b>: جایگزینی مایع و HCO₃ از دست رفته<br>• تحریک یا حمایت جبران ریوی (در تهویه مکانیکی، تعداد تنفس را بالا نگه دار)<br>• پایش پتاسیم و وضعیت عصبی'),
          L('بی‌کربنات: کی و چقدر؟', '<b>کتاب</b>: وقتی pH کمتر از ۷٫۱ است.<br><b>به‌روز</b>: در اسیدمی شدید (pH ≤ ۷٫۱ یا ۷٫۲) به‌ویژه با آسیب حاد کلیه، و در از دست رفتن HCO₃ (اسهال، RTA) مفیدتر است؛ در اسیدوز لاکتیک و کتواسیدوز نقشش محدود است.' + fx('کمبود HCO₃ (mEq) = 0.5 × وزن × (هدف − HCO₃)') + 'معمولاً نیمی از آن را آهسته بده و گاز خون را تکرار کن. هر میلی‌لیتر بی‌کربنات ۸٫۴٪ = ۱ mEq.'),
          N('a.bicarb'),
          L('عوارض بی‌کربنات', '• تولید CO₂ ← اگر تهویه افزایش نیابد، <b>اسیدوز تنفسی</b> و اسیدوز داخل سلولی<br>• <b>هیپوکالمی</b> (پتاسیم به سلول می‌رود)<br>• کاهش کلسیم یونیزه<br>• بار سدیم و حجم، هیپرناترمی<br>• آلکالوز «برگشتی» پس از متابولیزه شدن کتون یا لاکتات'),
          M('تجویز بی‌کربنات به بیمار با اسیدوز مختلط تنفسی و متابولیک چه خطری دارد؟', ['تشدید اسیدوز تنفسی به‌خاطر تولید CO₂', 'هیپرکالمی', 'افزایش کلسیم یونیزه', 'هیچ خطری ندارد'], 'بی‌کربنات به CO₂ تبدیل می‌شود؛ بیمار باید بتواند آن را دفع کند.'),
          T('در کتواسیدوز دیابتی با pH = ۷٫۱، بی‌کربنات بخش اصلی درمان است.', false, 'مایع و انسولین درمان اصلی‌اند؛ بی‌کربنات فقط در pH کمتر از ۶٫۹.'),
          L('نکات بالینی دکتر ژیان', '• DKA مثل شوک هیپوولمیک است ← <b>سرم</b><br>• بیمار CKD: بسیاری پره‌رنال‌اند؛ اگر علت پس‌کلیوی رد شد، <b>مایع</b> بده<br>• مهم‌ترین درمان مسمومیت دارویی، حمایت و <b>سرم</b> (به‌علاوه پادزهر اختصاصی)'),
          O('برخورد با اسیدوز متابولیک را مرتب کن', ['تأیید با ABG و الکترولیت', 'محاسبه آنیون گپ', 'بررسی جبران تنفسی (وینتر)', 'یافتن علت', 'درمان علت و پایش پتاسیم']),
          N('a.winterMcq')
        ]
      },
      {
        id: 'ag9', title: 'آی‌سی‌یو اسیدوز', icon: '🚨', items: [
          L('الگوریتم اسیدوز متابولیک', '<ol class="algo"><li>HCO₃ پایین و pH پایین (یا BE منفی) ← اسیدوز متابولیک</li><li><b>وینتر</b>: PCO₂ = ۱٫۵ × HCO₃ + ۸ ± ۲ ← اختلال تنفسی همراه؟</li><li><b>آنیون گپ</b> (اصلاح با آلبومین)</li><li>گپ بالا ← <b>دلتا</b> و در شک به سم، <b>شکاف اسمولار</b>؛ لاکتات، کتون، کراتینین، سالیسیلات</li><li>گپ طبیعی ← <b>آنیون گپ ادرار</b>: منفی اسهال، مثبت RTA</li><li>درمان علت؛ بی‌کربنات فقط در موارد انتخابی</li></ol>'),
          O('مراحل علت‌یابی اسیدوز متابولیک را مرتب کن', ['تأیید اسیدوز متابولیک', 'بررسی جبران با وینتر', 'محاسبه و اصلاح آنیون گپ', 'دلتا یا آنیون گپ ادرار', 'درمان علت']),
          M('مرد ۸۷ ساله پس از ۱۲ دقیقه احیا، ریتم آگونال. پیش‌آگهی؟', ['بسیار ضعیف', 'خوب چون PaO₂ بالاست', 'خوب چون PCO₂ طبیعی است', 'قابل قضاوت نیست'], 'اسیدوز لاکتیک عمیق (pH ۶٫۸، لاکتات ۹) از هیپوپرفیوژن؛ تهویه با بگ کافی است ولی جریان خون نیست (تمرین ۲۰).', [['ریتم', 'آگونال، بدون نبض'], ['تهویه', 'بگ و ماسک با ۱۵ لیتر اکسیژن']], { pH: 6.8, pco2: 36, po2: 240, hco3: 3.8, be: -20, lac: 9, k: 4.5 }),
          M('مرد ۲۴ ساله با خستگی، کاهش وزن، BP = ۷۵/۵۵ و قند ۵۲. درمان اختصاصی؟', ['هیدروکورتیزون وریدی', 'انسولین', 'بی‌کربنات', 'فوروزماید'], 'هیپوناترمی، هیپرکالمی، هیپوگلیسمی و شوک ← بحران آدرنال (تمرین ۱۹).', null, { pH: 7.32, pco2: 24.8, po2: 97, hco3: 13.4, na: 125, k: 5.6, cl: 101, glu: 45, lac: 3 }),
          M('در اسیدوز متابولیک، PCO₂ بیمار بیشتر از عدد وینتر است. معنی؟', ['ریه جبران کافی نمی‌کند؛ اسیدوز تنفسی همراه (خطر خستگی)', 'جبران بیش از حد', 'آلکالوز تنفسی همراه', 'آزمایش اشتباه است'], 'نشانه خطر: بیمار ممکن است به زودی نیاز به حمایت تهویه داشته باشد.'),
          N('a.delta'),
          N('a.osm'),
          N('a.uag'),
          T('بیمار با DKA که تنفس کوسمال او ناگهان کند می‌شود، احتمالاً در حال بهبود است؛ نیازی به ABG نیست.', false, 'ممکن است خسته شده باشد؛ PCO₂ بالا در اسیدوز متابولیک شدید فاجعه است. ABG فوری.')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — دنیای ۴: اختلالات تنفسی و آلکالوز متابولیک
 * منابع: کتاب «ABG در بالین» (فصل ۴ و تمرین‌های ۲، ۶، ۸، ۹، ۱۱، ۲۲ و ۲۳)، جزوه دکتر ژیان
 * (علل آلکالوز متابولیک و تنفسی، اندیکاسیون انتوباسیون، base excess در COPD)، و به‌روزرسانی با
 * راهنمای BTS/ERS برای تهویه غیرتهاجمی. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, fx, tbl } = EA.K;

  EA.worlds.push({
    id: 'co2', sym: 'CO₂', name: 'تنفسی و آلکالوز', sub: 'هیپرکاپنی، هیپرونتیلاسیون و آلکالوز متابولیک', color: '#FF4B8B', dark: '#D93A72', light: '#FFE2EC',
    levels: ['نفس‌شمارها', 'رام‌کنندگان آلکالوز', 'داوران مختلط'],
    gens: ['c.acute', 'c.chronic', 'c.alk', 'c.malk', 'c.ph', 'c.racidMcq'],
    lessons: [
      {
        id: 'c1', title: 'اسیدوز تنفسی', icon: '💨', items: [
          L('یعنی PaCO₂ بالا', 'اسیدوز تنفسی به زبان ساده یعنی <b>افزایش PaCO₂</b>؛ CO₂ در خون اسید کربنیک می‌سازد و pH می‌افتد.<br>همیشه یعنی <b>تهویه حبابچه‌ای ناکافی</b>. ممکن است از هر علت نارسایی نوع ۲ باشد یا به صورت جبران آلکالوز متابولیک.<br><br>رمز دکتر ژیان: <i>«در اسیدوز تنفسی، انگار اسید در دستگاه تنفس بیمار ریخته و نمی‌تواند نفس بکشد».</i>'),
          L('علت‌ها', tbl([['گروه', 'مثال'], ['مرکزی', 'مورفین، بی‌هوشی، آرام‌بخش؛ سکته؛ عفونت مغز'], ['راه هوایی', 'انسداد، آسم شدید، COPD'], ['پارانشیم', 'آمفیزم، پنوموکونیوز، ARDS'], ['عصبی–عضلانی', 'میاستنی، گیلن‌باره، فلج اطفال، دیستروفی'], ['دیواره قفسه سینه', 'کیفواسکولیوز، قفسه سینه مواج، چاقی شدید']])),
          P('هر علت را به گروهش وصل کن', [['مورفین', 'مرکزی'], ['گیلن‌باره', 'عصبی–عضلانی'], ['کیفواسکولیوز', 'دیواره قفسه سینه'], ['آمفیزم', 'پارانشیم ریه']]),
          L('علائم', 'تاکی‌کاردی، تنگی نفس، تنفس سطحی و تند (یا در مسمومیت، کند)، تهوع، کاهش رفلکس‌ها، <b>پوست گرم و قرمز</b>، تعریق، بی‌قراری، <b>لرزش</b>، سردرد، گیجی و کاهش سطح هوشیاری (نارکوز CO₂).<br>هیپرکالمی هم ممکن است همراه باشد.'),
          M('کدام یافته با اسیدوز تنفسی حاد هم‌خوان است؟', ['پوست گرم و قرمز همراه خواب‌آلودگی', 'تتانی و گزگز دور دهان', 'تنفس کوسمال', 'پوست سرد و مرطوب با تتانی'], 'CO₂ عروق را گشاد می‌کند و مغز را تضعیف.'),
          L('چرا خطرناک است؟', 'جبران کلیوی <b>روزها</b> طول می‌کشد؛ پس اسیدوز تنفسی حاد تقریباً همیشه <b>جبران‌نشده</b> است و سریعاً به اسیدمی عمیق می‌رسد.<br>در دیسترس تنفسی، <b>PaCO₂ بالارونده</b> یعنی بیمار <b>خسته</b> شده است: نشانه بدیمن و نیازمند اقدام فوری.'),
          M('چرا اسیدوز تنفسی حاد خطرناک است؟', ['جبران متابولیک طولانی است', 'جبران متابولیک سریع است', 'PaCO₂ پایین است', 'بافرها کار نمی‌کنند'], 'تا کلیه وارد عمل شود، pH سقوط کرده است.'),
          N('c.ph'),
          T('ریه سالم حتی در سپسیس با تولید زیاد CO₂، PaCO₂ را طبیعی نگه می‌دارد.', true, 'پس اسیدوز تنفسی همیشه یعنی تهویه کافی نیست.')
        ]
      },
      {
        id: 'c2', title: 'حاد، مزمن و حاد روی مزمن', icon: '⏳', items: [
          L('HCO₃ زمان را می‌گوید', 'به ازای هر <b>۱۰ mmHg</b> افزایش PCO₂:<br>• <b>حاد</b>: HCO₃ حدود <b>۱</b> واحد بالا، pH حدود <b>۰٫۰۸</b> پایین<br>• <b>مزمن</b>: HCO₃ حدود <b>۴</b> (۳٫۵ تا ۴) واحد بالا، pH فقط <b>۰٫۰۳</b> پایین' + fx('حاد: HCO₃ = 24 + 0.1 × (PCO₂ − 40)') + fx('مزمن: HCO₃ = 24 + 0.4 × (PCO₂ − 40)')),
          N('c.acute'),
          N('c.chronic'),
          L('حاد روی مزمن', 'بیمار COPD با هیپرکاپنی مزمن (HCO₃ بالا) که ناگهان بدتر می‌شود: PCO₂ بیشتر بالا می‌رود ولی کلیه فرصت جبران ندارد ← <b>HCO₃ بالا + pH پایین</b>.<br>کتاب (تمرین ۸): «حتی در نارسایی نوع ۲ مزمن، افزایش حاد PaCO₂ اسیدمی می‌دهد. اگر pH طبیعی است، PaCO₂ در روزهای اخیر تغییر زیادی نکرده.»'),
          M('بیمار COPD: pH = ۷٫۳۶، PCO₂ = ۵۴، HCO₃ = ۳۰٫۶، PO₂ = ۴۰. کدام پارامتر احتمالاً در ۲۴ ساعت اخیر بیشتر تغییر کرده؟', ['PaO₂', 'PaCO₂', 'HCO₃', 'pH'], 'pH طبیعی یعنی هیپرکاپنی مزمن و پایدار است؛ بدتر شدن تنگی نفس از افت PaO₂ است. PCO₂ و HCO₃ بالا یعنی در اکسیژن‌درمانی احتیاط کن (تمرین ۸).', null, { pH: 7.36, pco2: 54.1, po2: 40, hco3: 30.6 }),
          M('همان بیمار روی اکسیژن ۶۰٪: pH = ۷٫۲۹، PCO₂ = ۶۵، HCO₃ = ۳۰. تفسیر؟', ['اسیدوز تنفسی حاد روی مزمن', 'اسیدوز تنفسی مزمن جبران‌شده', 'اسیدوز متابولیک', 'آلکالوز متابولیک'], 'HCO₃ بالا (زمینه مزمن) ولی pH افتاده: PCO₂ به‌طور حاد بالا رفته (اکسیژن زیاد).', null, { pH: 7.29, pco2: 65.3, po2: 84, hco3: 30.3 }),
          L('چاقی و هیپوونتیلاسیون', 'زن ۳۴ ساله با BMI = ۴۹ و بدون علامت (تمرین ۲): pH ۷٫۳۵، PCO₂ ۵۵، HCO₃ ۲۹.<br>HCO₃ و PCO₂ هر دو بالا؛ pH در مرز اسیدی ← <b>اسیدوز تنفسی مزمن جبران‌شده</b> (نه آلکالوز متابولیک، چون جبران بیش از حد رخ نمی‌دهد).<br>حدود <b>۲۰٪</b> افراد با BMI بالای ۴۰ هیپرکاپنی مزمن دارند (<b>سندرم چاقی–هیپوونتیلاسیون</b> یا پیک‌ویکین).'),
          N('c.racidMcq'),
          B('در اسیدوز تنفسی مزمن، به ازای هر ۱۰ mmHg افزایش PCO₂، HCO₃ حدود ___ واحد بالا می‌رود.', ['۴', '۱', '۱۰'], 'در حالت حاد فقط ۱.')
        ]
      },
      {
        id: 'c3', title: 'درمان اسیدوز تنفسی', icon: '🩺', items: [
          L('اصول درمان (کتاب)', '• برقراری راه هوایی مطمئن<br>• برونکودیلاتور برای راه هوایی تنگ<br>• اکسیژن در صورت نیاز (کنترل‌شده)<br>• درمان هیپرکالمی<br>• آنتی‌بیوتیک برای عفونت<br>• فیزیوتراپی قفسه سینه، ساکشن، اسپیرومتری تشویقی، سرفه و تنفس عمیق<br>• پایش ریتم قلب، الگوی تنفس و وضعیت عصبی<br>• درمان علت (مثلاً <b>نالوکسان</b> در مسمومیت با اپیوئید)'),
          L('تهویه غیرتهاجمی (NIV)', 'در <b>تشدید COPD</b> اگر پس از درمان دارویی بهینه:<br><b>pH کمتر از ۷٫۳۵ و PaCO₂ بیش از ۴۵</b> ← <b>NIV (BiPAP)</b> (راهنمای BTS/ERS)<br>• pH کمتر از ۷٫۲۵ ← ریسک شکست بالاتر؛ در محیط مراقبت ویژه و آماده لوله‌گذاری<br>• کاهش هوشیاری، ترشحات زیاد، بی‌ثباتی همودینامیک یا شکست NIV ← <b>لوله‌گذاری</b><br><br>دکتر ژیان: pH کمتر از ۷٫۲۵ با PCO₂ بالای ۵۰ و بیمار ناتوان از نفس کشیدن ← مشاوره بیهوشی برای انتوباسیون.'),
          M('بیمار COPD پس از نبولایزر، استروئید و آنتی‌بیوتیک: pH = ۷٫۲۹، PCO₂ = ۵۲. اقدام بعدی؟', ['تهویه غیرتهاجمی (NIV)', 'قطع کامل اکسیژن', 'بی‌کربنات وریدی', 'ترخیص با اسپری'], 'اسیدوز تنفسی حاد با وجود درمان دارویی: اندیکاسیون NIV (تمرین ۶ کتاب؛ کتاب دوکساپرام را هم نام می‌برد ولی امروز NIV ترجیح دارد).', null, { pH: 7.29, pco2: 52, po2: 48, hco3: 24 }),
          T('در بیمار COPD با PaCO₂ بالارونده، قطع کامل اکسیژن بهترین راه کاهش PaCO₂ است.', false, 'بیمار هیپوکسمیک است؛ FiO₂ را تیتر کن (هدف ۸۸ تا ۹۲٪)، نه قطع. تهویه را با NIV بهتر کن.'),
          L('اکسیژن در اسیدوز تنفسی', '• بیمار <b>غیر COPD</b> (مثلاً ادم ریه یا پنومونی): اکسیژن کافی بده؛ هیپوکسمی خطر اصلی است. اگر پاسخ نداد، CPAP یا BiPAP<br>• بیمار <b>COPD</b>: اکسیژن <b>کنترل‌شده</b> (ونچوری ۲۴ تا ۲۸٪ یا کانول ۱ تا ۲ لیتر) با هدف ۸۸ تا ۹۲٪ و ABG سریال'),
          L('آلکالوز پس از هیپرکاپنی', 'بیمار با هیپرکاپنی مزمن HCO₃ بالا دارد. اگر با ونتیلاتور PCO₂ را <b>سریع</b> به ۴۰ برسانی، HCO₃ بالا بی‌جبران می‌ماند ← <b>آلکالوز متابولیک شدید</b> (آریتمی، تشنج).<br>پس در این بیماران PCO₂ را به <b>حد پایه خود بیمار</b> برسان، نه به ۴۰ (نکته دکتر ژیان: تنظیم ونتیلاتور).'),
          M('بیمار COPD با PCO₂ پایه ۶۵ و HCO₃ = ۳۶ لوله‌گذاری شده. هدف PCO₂؟', ['نزدیک PCO₂ پایه بیمار (حدود ۵۵ تا ۶۵) با pH طبیعی', 'دقیقاً ۴۰', 'زیر ۳۰', 'مهم نیست'], 'کاهش سریع به ۴۰ آلکالوز پس از هیپرکاپنی می‌دهد.'),
          O('برخورد با تشدید COPD با اسیدوز تنفسی را مرتب کن', ['اکسیژن کنترل‌شده با هدف ۸۸ تا ۹۲٪', 'برونکودیلاتور، استروئید و آنتی‌بیوتیک', 'ABG مجدد', 'NIV اگر pH همچنان کمتر از ۷٫۳۵', 'لوله‌گذاری در شکست NIV']),
          N('c.racidMcq')
        ]
      },
      {
        id: 'c4', title: 'آلکالوز تنفسی', icon: '🌪️', items: [
          L('یعنی PaCO₂ پایین', 'آلکالوز تنفسی = <b>کاهش PaCO₂</b> از هیپرونتیلاسیون حبابچه‌ای.<br>رمز دکتر ژیان: <i>«آلکالوز تنفسی: الکی دارد از طریق تنفس loss می‌کند».</i><br>علائم: تاکی‌کاردی، تنفس تند و عمیق، سبکی سر و سنکوپ، تعریق، <b>پارستزی و تتانی</b>، هیپررفلکسی، اضطراب.'),
          L('علت‌ها', tbl([['گروه', 'مثال'], ['تحریک مغز', 'درد، اضطراب، تب، سکته، مننژیت، تومور، ترومای سر'], ['هیپوکسمی', 'ارتفاع، پنومونی، ادم ریه، آسپیراسیون، کم‌خونی شدید'], ['دارو و هورمون', 'بارداری (پروژسترون)، سالیسیلات، نارسایی قلب'], ['گیرنده‌های قفسه سینه', 'آمبولی ریه، پنوموتوراکس، هموتوراکس'], ['سایر', 'سپسیس، نارسایی کبد، تهویه مکانیکی زیاد، گرمازدگی']]) + '<small>رمز ژیان: «آل = ALT (کبد)، کال = کله (CVA)، تنفسی = همه بیماری‌های ریه» — و تب را فراموش نکن.</small>'),
          P('هر علت را به گروهش وصل کن', [['سیروز', 'نارسایی کبد'], ['آمبولی ریه', 'بیماری ریه'], ['بارداری', 'هورمون'], ['خونریزی مغزی', 'مغزی']]),
          M('در بارداری طبیعی، PaCO₂ معمولاً چقدر است؟', ['حدود ۳۰ mmHg', 'حدود ۴۰ mmHg', 'حدود ۵۰ mmHg', 'حدود ۲۰ mmHg'], 'پروژسترون مرکز تنفس را تحریک می‌کند؛ آلکالوز تنفسی جبران‌شده، طبیعیِ بارداری است.'),
          L('کلسیم یونیزه و گزگز', 'H⁺ و Ca²⁺ برای اتصال به آلبومین رقابت می‌کنند. در <b>آلکالمی</b>، H⁺ کم است و آلبومین کلسیم بیشتری می‌گیرد ← <b>کلسیم یونیزه افت می‌کند</b> ← گزگز دست‌ها و اطراف دهان، اسپاسم کارپوپدال (تمرین ۱۱).'),
          T('در آلکالوز تنفسی، کلسیم تام تغییر زیادی نمی‌کند ولی کلسیم یونیزه کم می‌شود.', true, 'به همین دلیل بیمار هیپرونتیله دچار پارستزی می‌شود.'),
          N('c.alk'),
          M('pH = ۷٫۵۳، PCO₂ = ۲۴، HCO₃ = ۲۴، PO₂ = ۱۰۸، iCa = ۳٫۶. تفسیر؟', ['هیپرونتیلاسیون اولیه، آلکالوز تنفسی جبران‌نشده، کاهش کلسیم یونیزه', 'آلکالوز متابولیک', 'نارسایی تنفسی نوع ۱', 'اسیدوز متابولیک جبران‌شده'], 'PaO₂ طبیعی (بالا)، PCO₂ پایین، HCO₃ طبیعی: هنوز جبرانی رخ نداده (تمرین ۱۱).', null, { pH: 7.53, pco2: 24, po2: 108, hco3: 24, ca: 3.6 }),
          B('در آلکالوز تنفسی مزمن، به ازای هر ۱۰ mmHg کاهش PCO₂، HCO₃ حدود ___ واحد کم می‌شود.', ['۴', '۲', '۱'], 'حاد ۲، مزمن ۴ (تا ۵).')
        ]
      },
      {
        id: 'c5', title: 'هیپرونتیلاسیون: اضطراب یا بیماری؟', icon: '😮‍💨', items: [
          L('اول بیماری را رد کن', 'هیپرونتیلاسیون «روانی» تشخیص <b>کنار گذاشتن</b> است. پیش از آن باید رد کرد:<br>• <b>آمبولی ریه</b> (هیپوکسمی یا A–a بالا با PaCO₂ پایین)<br>• سندرم کرونری، آسم، پنوموتوراکس<br>• <b>اسیدوز متابولیک</b> (هیپرونتیلاسیون ثانویه: HCO₃ پایین)<br>• مسمومیت با آسپرین، سپسیس'),
          M('زن جوان پس از سفر هوایی طولانی: تنگی نفس ناگهانی، CXR طبیعی، PO₂ = ۷۷، PCO₂ = ۲۹. محتمل‌ترین تشخیص؟', ['آمبولی ریه', 'حمله اضطراب', 'پنومونی', 'آسم'], 'با وجود هیپرونتیلاسیون، PaO₂ پایین است؛ A–a = ۱۱۵ − ۷۷ = ۳۸ (بالا) ← عدم تناسب V/Q (تمرین ۳).', null, { pH: 7.51, pco2: 29.3, po2: 77, hco3: 25 }),
          L('هیپرونتیلاسیون سایکوژنیک', 'تصویر کلاسیک (تمرین ۱۱): پس از استرس، احساس «نمی‌توانم نفس عمیق بکشم»، چنگ زدن در سینه، گزگز دست و دور دهان، تنفس ۳۶ در دقیقه.<br>ABG: PaCO₂ پایین، <b>PaO₂ طبیعی و A–a طبیعی</b>، HCO₃ طبیعی (هنوز جبرانی نشده).<br><br>درمان: اطمینان‌بخشی و تنفس آهسته؛ در صورت نیاز آرام‌بخش. تنفس در کیسه کاغذی (که کتاب ذکر کرده) امروزه <b>توصیه نمی‌شود</b>؛ ممکن است هیپوکسمی بدهد و علت عضوی را پنهان کند.'),
          T('تنفس در کیسه کاغذی درمان روتین و بی‌خطر هیپرونتیلاسیون است.', false, 'خطر هیپوکسمی دارد، به‌خصوص اگر علت واقعی آمبولی یا سکته قلبی باشد.'),
          M('زن ۲۳ ساله با گزگز اطراف دهان پس از استرس. کدام یافته ABG به نفع علت روانی است؟', ['PaO₂ و گرادیان A–a طبیعی با PaCO₂ پایین', 'PaO₂ پایین', 'HCO₃ پایین', 'آنیون گپ بالا'], 'اکسیژناسیون کاملاً طبیعی؛ ولی باز هم علل قلبی و ریوی را رد کن.'),
          L('خطر هیپوکاپنی', 'PaCO₂ پایین <b>عروق مغز را منقبض</b> می‌کند و جریان خون مغز را کم می‌کند.<br>• در نوزادان نارس، PaCO₂ زیر ۲۵ با خطر <b>لکومالاسی دور بطنی (PVL)</b>، کاهش شنوایی و بیماری مزمن ریه همراه است<br>• در بزرگسال زیر ونتیلاتور، هیپرونتیلاسیون تهاجمی فقط برای مدت کوتاه در فتق مغزی<br>• آلکالوز شدید آستانه آریتمی و تشنج را پایین می‌آورد'),
          M('در بیمار زیر ونتیلاتور با PCO₂ = ۲۵ و pH = ۷٫۵۸، اقدام درست؟', ['کاهش تعداد تنفس یا حجم جاری دستگاه', 'افزایش تعداد تنفس', 'بی‌کربنات', 'استازولامید'], 'آلکالوز تنفسی یاتروژنیک؛ تنظیمات ونتیلاتور را اصلاح کن.'),
          N('c.alk'),
          O('برخورد با بیمار هیپرونتیله را مرتب کن', ['ارزیابی ABC و علائم حیاتی', 'ABG و محاسبه A–a', 'رد علل عضوی (آمبولی، قلب، اسیدوز)', 'درمان علت یا اطمینان‌بخشی'])
        ]
      },
      {
        id: 'c6', title: 'آلکالوز متابولیک: علت‌ها', icon: '🧃', items: [
          L('تعریف و منطق', 'هر فرایندی که <b>بدون کاهش PaCO₂</b> pH را بالا ببرد؛ با <b>HCO₃ بالا</b> مشخص می‌شود. جبران تنفسی (PCO₂ بالا) به‌خاطر هیپوکسمی محدود است.<br><br>دو سؤال: چه چیزی آن را <b>شروع</b> کرد (از دست رفتن H⁺ یا گرفتن باز)؟ و چرا کلیه HCO₃ اضافه را <b>دفع نمی‌کند</b>؟ (کمبود کلر، پتاسیم، حجم؛ یا آلدوسترون زیاد)'),
          L('رمز «لاس» دکتر ژیان', '<i>«آلکالوز متابولیک یعنی بیمار الکی دارد loss می‌کند»</i>؛ از بالا، پایین یا کلیه:<br>• <b>استفراغ</b> و ساکشن NG (شایع‌ترین)<br>• <b>دیورتیک</b> (تیازید، لوپ)<br>• <b>هیپوکالمی</b>، هیپرکلسمی<br>• اسهال شدید خاص (آدنوم ویلوس، کلروره مادرزادی)<br>• تعریق فراوان در فیبروز کیستیک<br>• مراحل اولیه کاهش حجم (آلکالوز انقباضی)؛ در کاهش حجم پیشرفته، اسیدوز لاکتیک غالب می‌شود'),
          L('علل دیگر', '• <b>زیادی مینرالوکورتیکوئید</b> (با فشار خون بالا): هیپرآلدوسترونیسم اولیه (کان)، کوشینگ، تنگی شریان کلیه، <b>شیرین‌بیان</b><br>• بارتر و ژیتلمن (فشار طبیعی)<br>• <b>پس از هیپرکاپنی</b><br>• بار قلیایی: بی‌کربنات، سندرم شیر–قلیا، <b>تزریق خون حجیم</b> (سیترات)'),
          P('هر علت را به مکانیسمش وصل کن', [['استفراغ', 'از دست رفتن اسید معده'], ['سندرم کان', 'آلدوسترون زیاد'], ['تزریق خون حجیم', 'سیترات به بی‌کربنات تبدیل می‌شود'], ['شیرین‌بیان', 'اثر شبه‌مینرالوکورتیکوئید']]),
          L('چرا استفراغ آلکالوز را نگه می‌دارد؟', '<b>از دست رفتن</b>: H⁺، Cl⁻، Na⁺، K⁺ و آب<br><b>پاسخ کلیه</b>:<br>• کمبود حجم ← آلدوسترون ← Na بازجذب می‌شود و به جایش H⁺ و K⁺ دفع می‌شوند (اسیدوری متناقض)<br>• <b>کمبود کلر</b> ← کلیه نمی‌تواند HCO₃ را دفع کند (آنیون همراه لازم است)<br>نتیجه: HCO₃ بالا می‌ماند و هیپوکالمی بدتر می‌شود.'),
          M('استفراغ معمولاً کدام اختلال را ایجاد می‌کند؟', ['آلکالوز متابولیک', 'اسیدوز متابولیک', 'آلکالوز تنفسی', 'اسیدوز تنفسی'], 'از دست رفتن اسید معده.'),
          M('کدام یافته الکترولیتی همراه استفراغ طولانی است؟', ['هیپوکالمی و هیپوکلرمی', 'هیپرکالمی و هیپرکلرمی', 'هیپرناترمی و هیپرکلسمی', 'هیپرکالمی و هیپوکلرمی'], 'کمبود کلر و پتاسیم، هم علت و هم نگه‌دارنده آلکالوز.'),
          L('علائم', 'کاهش فشار خون، تهوع و استفراغ، بی‌اشتهایی، ضعف، <b>پارستزی</b>، رفلکس‌های تشدیدیافته، تکانه‌های عضلانی و <b>تتانی</b> (کاهش کلسیم یونیزه)، آریتمی (هیپوکالمی)، پلی‌اوری، بی‌حالی و گیجی.'),
          N('c.malk')
        ]
      },
      {
        id: 'c7', title: 'کلر ادرار و درمان آلکالوز', icon: '🧪', items: [
          L('کلر ادرار: تقسیم به دو گروه', tbl([['کلر ادرار', 'گروه', 'علل'], ['کمتر از ۲۰', 'پاسخ‌دهنده به کلر (سالین)', 'استفراغ، ساکشن NG، دیورتیک قبلی، پس از هیپرکاپنی'], ['بیشتر از ۲۰', 'مقاوم به کلر', 'زیادی مینرالوکورتیکوئید (فشار بالا)، دیورتیک در حال مصرف، بارتر و ژیتلمن، هیپوکالمی شدید']]) + '<small>سدیم ادرار در آلکالوز قابل اعتماد نیست (همراه HCO₃ دفع می‌شود)؛ کلر ادرار را بسنج.</small>'),
          M('آلکالوز متابولیک با فشار خون بالا، هیپوکالمی و کلر ادرار ۶۰. محتمل‌ترین علت؟', ['هیپرآلدوسترونیسم اولیه', 'استفراغ پنهان', 'ساکشن NG', 'اسهال'], 'مقاوم به کلر همراه فشار بالا ← زیادی مینرالوکورتیکوئید.'),
          L('درمان آلکالوز پاسخ‌دهنده به کلر', '• <b>سالین ۰٫۹٪</b> + <b>KCl</b>: با جبران حجم، کلر و پتاسیم، کلیه HCO₃ اضافه را دفع می‌کند<br>• در شوک: بولوس ۲۰ mL/kg سالین، سپس حدود ۳ لیتر در ۲۴ ساعت؛ KCl حدود ۲۰ mEq در لیتر پس از برقراری ادرار کافی (تمرین ۲۲)<br>• درمان علت: <b>ضداستفراغ</b>، قطع تیازید، قطع یا کاهش ساکشن NG؛ مهارکننده پمپ پروتون برای ساکشن طولانی<br>• شستشوی NG با <b>سالین</b>، نه آب'),
          L('وقتی سالین نمی‌شود داد', 'در بیمار <b>ادماتو</b> (نارسایی قلب، سیروز با آسیت، نفروتیک) که با دیورتیک آلکالوتیک شده: سرم نده!<br>دکتر ژیان: <b>محدودیت نمک</b>، <b>محدودیت حجم</b> (مثلاً حداکثر ۱ لیتر آب در روز) و <b>دیورتیک</b> مناسب.<br>• <b>استازولامید</b>: دفع کلیوی HCO₃ را زیاد می‌کند (مفید در آلکالوز پس از هیپرکاپنی یا نارسایی قلب)<br>• آلکالوز شدید مقاوم: کلرید آمونیوم یا HCl رقیق (نادر)، یا دیالیز'),
          M('کدام دارو دفع کلیوی بی‌کربنات را زیاد می‌کند؟', ['استازولامید', 'استامینوفن', 'هیدروکلروتیازید', 'آمپی‌سیلین'], 'مهارکننده کربنیک انیدراز (آزمون فصل ۴ کتاب).'),
          T('در آلکالوز متابولیک بیمار نارسایی قلب با ادم، سالین ۰٫۹٪ درمان انتخابی است.', false, 'بار حجم را بدتر می‌کند؛ استازولامید و اصلاح پتاسیم بهتر است.'),
          O('درمان آلکالوز ناشی از استفراغ را مرتب کن', ['ارزیابی حجم و علائم شوک', 'جبران حجم با سالین ۰٫۹٪', 'افزودن KCl پس از برقراری ادرار', 'درمان علت استفراغ', 'پایش الکترولیت‌ها و ABG']),
          N('c.malk'),
          B('آلکالوز پاسخ‌دهنده به سالین، کلر ادرار کمتر از ___ دارد.', ['۲۰', '۶۰', '۱۰۰'], 'کلیه کلر را با ولع نگه می‌دارد.')
        ]
      },
      {
        id: 'c8', title: 'استفراغ و تنگی پیلور', icon: '🤮', items: [
          M('زن ۳۵ ساله پس از سه روز استفراغ شدید بدون سرم. تفسیر ABG؟', ['آلکالوز متابولیک جبران‌شده با هیپوکالمی، هیپوکلرمی و هیپوناترمی', 'اسیدوز تنفسی مزمن', 'آلکالوز تنفسی', 'اسیدوز متابولیک'], 'pH سمت قلیایی، HCO₃ بالا (اولیه)، PCO₂ بالا (جبران = نارسایی نوع ۲ خفیف جبرانی). درمان: مایع و الکترولیت (تمرین ۲۲).', [['BP', '۱۶۰/۱۰۰'], ['تعداد تنفس', '۱۰']], { pH: 7.44, pco2: 48, po2: 83, hco3: 32, k: 3, na: 133, cl: 91 }),
          L('PCO₂ بالا در این بیمار', 'افزایش PCO₂ در آلکالوز متابولیک جبران است و ممکن است <b>نارسایی تنفسی نوع ۲ خفیف</b> به نظر برسد. تفاوت: HCO₃ «خیلی» بالا و pH سمت قلیایی.<br>جبران تنفسی محدود است (هیپوکسمی تنفس را تحریک می‌کند) و PCO₂ به ندرت از <b>۵۵</b> بالاتر می‌رود؛ PCO₂ بالاتر ← یک اسیدوز تنفسی واقعی هم هست.'),
          L('تنگی پیلور', 'شیرخوار ۲ تا ۸ هفته با <b>استفراغ جهنده غیرصفراوی</b>، کاهش وزن و توده زیتونی در اپی‌گاستر (تمرین ۲۳).<br>• آلکالوز متابولیک <b>هیپوکلرمیک هیپوکالمیک</b><br>• شدیدتر از استفراغ معمولی: مدت طولانی‌تر، و انسداد پیلور جلوی از دست رفتن HCO₃ روده را می‌گیرد<br>• جبران تنفسی کمتر از انتظار: گریه و دیسترس، محرک اضافه تنفس‌اند<br>• درمان: <b>ابتدا مایع و الکترولیت</b>، سپس پیلوروتومی'),
          M('شیرخوار ۸ هفته با استفراغ جهنده: pH ۷٫۵۴، HCO₃ ۳۷٫۵، PCO₂ ۴۵٫۸. PCO₂ نسبت به انتظار چطور است؟', ['پایین‌تر از انتظار', 'بالاتر از انتظار', 'دقیقاً مناسب', 'قابل قضاوت نیست'], 'با قاعده HCO₃ + ۱۵ انتظار حدود ۵۲ داریم؛ PCO₂ ۴۶ کمتر است ← آلکالوز تنفسی خفیف همراه (گریه و دیسترس).', null, { pH: 7.54, pco2: 45.8, po2: 80, hco3: 37.5, be: 14, k: 2.5, cl: 86 }),
          T('در تنگی پیلور، اولویت اول جراحی فوری پیش از اصلاح الکترولیت‌هاست.', false, 'اول آلکالوز و هیپوکالمی را اصلاح کن؛ بی‌هوشی در آلکالوز شدید خطر آپنه پس از عمل دارد.'),
          L('اسیدوری متناقض', 'در آلکالوز شدید با کمبود حجم و پتاسیم، کلیه برای نگه داشتن سدیم مجبور است H⁺ دفع کند ← <b>ادرار اسیدی</b> در حالی که خون قلیایی است. نشانه کمبود شدید حجم و پتاسیم.'),
          N('c.malk'),
          P('هر یافته را به معنایش وصل کن', [['کلر ادرار ۱۰', 'پاسخ‌دهنده به سالین'], ['ادرار اسیدی در آلکالوز', 'کمبود شدید حجم و پتاسیم'], ['PCO₂ = ۶۵ با HCO₃ = ۳۶', 'اسیدوز تنفسی همراه'], ['فشار بالا و هیپوکالمی', 'زیادی مینرالوکورتیکوئید']])
        ]
      },
      {
        id: 'c9', title: 'آی‌سی‌یو تنفسی و مختلط', icon: '🚨', items: [
          L('الگوریتم اختلالات تنفسی و آلکالوز', '<b>PCO₂ بالا</b>: حاد یا مزمن؟ (۱ یا ۴ به ازای هر ۱۰) ← HCO₃ خارج از محدوده = اختلال متابولیک همراه<br><b>PCO₂ پایین</b>: هیپوکسمی؟ A–a؟ HCO₃ پایین (ثانویه به اسیدوز متابولیک)؟<br><b>HCO₃ بالا</b>: PCO₂ مورد انتظار (۰٫۷ یا +۱۵)؛ کلر ادرار؛ فشار خون و پتاسیم<br><b>همیشه</b>: آنیون گپ'),
          O('مراحل ارزیابی آلکالوز متابولیک را مرتب کن', ['تأیید HCO₃ بالا و pH قلیایی', 'محاسبه PCO₂ مورد انتظار', 'سنجش کلر ادرار', 'بررسی فشار خون و پتاسیم', 'درمان علت و اصلاح حجم و پتاسیم']),
          L('COPD و بی‌کربنات: اسیدوز پنهان', 'در COPD مزمن، HCO₃ «باید» بالا باشد. مثال: PCO₂ = ۶۶ مزمن ← HCO₃ مورد انتظار ≈ ۲۴ + ۰٫۴ × ۲۶ ≈ <b>۳۴</b>.<br>اگر HCO₃ فقط ۲۶ باشد (به ظاهر طبیعی)، یک <b>اسیدوز متابولیک پنهان</b> وجود دارد (مثلاً CKD یا DKA همزمان) — نکته مهم دکتر ژیان: در بیمار COPD با کاهش هوشیاری، شاید علت تشدید COPD نباشد بلکه اسیدوز متابولیک باشد.<br>BE هم کمک می‌کند: در اسیدوز تنفسی مزمن BE مثبت است؛ BE منفی ← جزء متابولیک اسیدی.'),
          M('بیمار COPD شناخته‌شده با کاهش هوشیاری: pH = ۷٫۲۰، PCO₂ = ۶۶، HCO₃ = ۲۵. کدام درست است؟', ['اسیدوز تنفسی + اسیدوز متابولیک؛ دنبال علت متابولیک (مثلاً CKD یا DKA) بگرد', 'فقط تشدید COPD', 'آلکالوز متابولیک', 'اسیدوز تنفسی مزمن جبران‌شده'], 'در بیمار COPD شناخته‌شده با هیپرکاپنی مزمن، HCO₃ حدود ۲۴ + ۰٫۴ × ۲۶ ≈ ۳۴ انتظار می‌رود؛ HCO₃ ۲۵ یعنی چیزی بی‌کربنات را مصرف کرده. آنیون گپ، لاکتات، کتون و کراتینین را بسنج.', null, { pH: 7.20, pco2: 66, hco3: 25 }),
          M('بیمار COPD با دیورتیک: pH = ۷٫۴۲، PCO₂ = ۶۷، HCO₃ = ۴۲. تفسیر؟', ['اسیدوز تنفسی مزمن + آلکالوز متابولیک', 'اسیدوز تنفسی حاد', 'آلکالوز تنفسی', 'طبیعی'], 'مزمن: HCO₃ مورد انتظار ≈ ۲۴ + ۰٫۴ × ۲۷ ≈ ۳۵؛ ۴۲ خیلی بیشتر است ← دیورتیک آلکالوز متابولیک هم داده.', null, { pH: 7.42, pco2: 67, hco3: 42 }),
          M('بیمار سیروتیک با دیورتیک: pH = ۷٫۵۵، PCO₂ = ۳۸، HCO₃ = ۳۳. تفسیر؟', ['آلکالوز متابولیک + آلکالوز تنفسی', 'آلکالوز متابولیک ساده', 'آلکالوز تنفسی ساده', 'اسیدوز تنفسی'], 'PCO₂ مورد انتظار ≈ ۴۰ + ۰٫۷ × ۹ ≈ ۴۶؛ PCO₂ ۳۸ پایین‌تر است ← بیماری کبد آلکالوز تنفسی هم داده (مثال جدول هاریسون).', null, { pH: 7.55, pco2: 38, hco3: 33 }),
          N('c.racidMcq'),
          T('بیماری که اسیدوز تنفسی مزمن دارد، BE مثبت دارد.', true, 'کلیه HCO₃ نگه داشته؛ BE منفی در این بیمار یعنی جزء متابولیک اسیدی اضافه.'),
          N('c.malk')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — دنیای ۵: VBG، نمونه‌گیری و نوزادان
 * منابع: کتاب «ABG در بالین» (فصل‌های ۵ و ۶ و تمرین ۲۴)، جزوه تفسیر ABG و VBG دکتر رضا ژیان و
 * دکتر شایان سیگاری (VBG، base excess، دام‌های نمونه‌گیری)، اسلایدهای تفسیر ABG نوزادان (الهه راستکار). */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, N, fx, tbl } = EA.K;

  EA.worlds.push({
    id: 'vbg', sym: 'VBG', name: 'VBG، نمونه و نوزاد', sub: 'نمونه‌گیری درست، گاز وریدی و مویرگی، NICU', color: '#5B6CF0', dark: '#4452D1', light: '#E3E6FF',
    levels: ['سرنگ‌به‌دستان', 'رمزگشایان VBG', 'نگهبانان NICU'],
    gens: ['v.pco2', 'v.ph', 'v.neo', 'v.kpa', 'v.be'],
    lessons: [
      {
        id: 'v1', title: 'کِی و چطور ABG بگیریم؟', icon: '💉', items: [
          L('سه کاربرد ABG', '۱. <b>تأیید تشخیص</b>: نارسایی تنفسی، هیپرونتیلاسیون، اسیدوز و آلکالوز متابولیک<br>۲. <b>ارزیابی شدت</b>: PaO₂ < ۶۰، PaCO₂ بالارونده، HCO₃ < ۱۵ یا BE < −۱۰، pH < ۷٫۲۵<br>۳. <b>هدایت درمان</b>: تیتر اکسیژن در نارسایی نوع ۲، تنظیم ونتیلاتور و NIV'),
          L('چه کسانی ABG لازم دارند؟', '• شک به هیپرکاپنی: خواب‌آلودگی، لرزش بال‌زدنی، نبض جهنده، بدتر شدن بیمار COPD<br>• شک به هیپوکسمی شدید، سیانوز، اشباع غیرقابل ثبت<br>• دیسترس تنفسی شدید یا بدترشونده<br>• استنشاق دود (کربوکسی‌هموگلوبین)<br>• هیپرونتیلاسیون (تأیید و رد اسیدوز متابولیک)<br>• کاهش حاد هوشیاری<br>• هر بیمار بدحال: شوک، سپسیس، سوختگی، ترومای شدید، شکم حاد، مسمومیت، DKA، نارسایی قلب، کلیه یا کبد<br>• پالس اکسیمتری غیرقابل اعتماد'),
          M('ABG در کدام مورد کاربرد دارد؟', ['همه موارد', 'تأیید تشخیص', 'ارزیابی شدت', 'هدایت درمان'], 'هر سه کاربرد اصلی ABG هستند.'),
          L('پیش از نمونه‌گیری', '<ol class="algo"><li>مطمئن شو ABG لازم است؛ موارد منع را بررسی کن</li><li>اکسیژن و تنظیمات ونتیلاتور را یادداشت کن</li><li>پس از تغییر اکسیژن <b>۲۰ دقیقه</b> صبر کن (مگر در اورژانس)</li><li>توضیح و رضایت: خونریزی، کبودی، ترومبوز، عفونت، درد</li><li>وسایل: <b>سرنگ هپارینه</b> با درپوش، سوزن ۲۰ تا ۲۲، ظرف اجسام تیز؛ دستکش و محافظت</li></ol>'),
          L('موارد منع (نسبی)', '• گردش جانبی ناکافی (تست آلن منفی)<br>• ضایعه، عفونت، سوختگی یا <b>شانت جراحی</b> (فیستول دیالیز) در محل<br>• بیماری عروق محیطی در دیستال محل<br>• اختلال انعقادی یا ضدانعقاد با دوز متوسط تا زیاد<br>• در نوزاد: <b>پلاکت کمتر از ۳۰ هزار</b>'),
          M('در کدام مورد نمونه‌گیری شریانی از آن محل ممنوع است؟', ['همه موارد', 'ضایعه در محل', 'بیماری عروق محیطی', 'اختلال انعقادی'], 'موارد منع مطلق نیستند و به اهمیت بالینی ABG بستگی دارند، ولی همه باید بررسی شوند.'),
          L('تکنیک رادیال', '<ol class="algo"><li>معمولاً شریان رادیال <b>دست غیرغالب</b></li><li>تست آلن تعدیل‌شده</li><li>مچ در <b>۲۰ تا ۳۰ درجه اکستانسیون</b> (بیشتر، جریان را قطع می‌کند)</li><li>محل حداکثر نبض را پیدا کن، الکل بزن؛ در صورت نیاز لیدوکائین ۱٪، ۱ میلی‌لیتر</li><li>هپارین اضافه را خالی کن</li><li>سوزن با <b>زاویه ۴۵ درجه</b> و <b>لبه پخ رو به بالا</b>، آهسته وارد شود</li><li>خون ضربان‌دار خودش سرنگ را پر می‌کند</li></ol>'),
          M('سوزن را چگونه وارد شریان رادیال می‌کنی؟', ['زاویه ۴۵ درجه، پخ رو به بالا', 'زاویه ۳۰ درجه، پخ رو به پایین', 'زاویه ۹۰ درجه، پخ رو به پایین', 'زاویه ۴۵ درجه، پخ رو به پایین'], 'آهسته وارد کن تا اسپاسم کمتر شود.'),
          T('همراه نمونه ABG باید درصد اکسیژن دریافتی و هموگلوبین بیمار را به آزمایشگاه اعلام کرد.', true, 'بدون FiO₂، تفسیر PaO₂ ممکن نیست.')
        ]
      },
      {
        id: 'v2', title: 'تست آلن و مراقبت پس از نمونه', icon: '✋', items: [
          L('تست آلن تعدیل‌شده', '<ol class="algo"><li>بیمار مشت را چند بار باز و بسته و سپس محکم مشت می‌کند</li><li>هر دو شریان رادیال و اولنار را فشار بده</li><li>بیمار دستش را باز می‌کند؛ کف دست رنگ‌پریده است</li><li><b>اولنار</b> را آزاد کن (رادیال همچنان بسته)</li><li>رنگ کمتر از <b>۱۰ ثانیه</b> (حداکثر ۱۵) برگشت ← گردش جانبی کافی</li></ol>بیش از ۱۵ ثانیه ← از این رادیال نمونه نگیر.<br><small>ارزش روتین این تست به‌خاطر حساسیت و ویژگی کم زیر سؤال است، ولی همچنان توصیه می‌شود.</small>'),
          M('هدف تست آلن چیست؟', ['اطمینان از جریان خون جانبی کافی دست', 'هدایت سوزن در شریان', 'اطمینان از ورود سوزن به شریان', 'رد اختلال انعقادی'], 'اگر رادیال آسیب ببیند، اولنار باید دست را تغذیه کند؛ وگرنه ایسکمی و نکروز.'),
          O('مراحل تست آلن را مرتب کن', ['مشت کردن محکم', 'فشار هم‌زمان روی رادیال و اولنار', 'باز کردن دست رنگ‌پریده', 'آزاد کردن اولنار', 'بررسی برگشت رنگ در ۱۰ ثانیه']),
          L('پس از نمونه‌گیری', '• فشار مستقیم و محکم <b>حداقل ۵ دقیقه</b> (در ضدانعقاد بیشتر)<br>• اجسام تیز در ظرف مخصوص<br>• <b>حباب هوا را فوراً خارج کن</b>؛ نمونه با حباب را دور بریز<br>• نمونه را <b>فوراً</b> آنالیز کن؛ اگر بیش از ۱۰ تا ۱۵ دقیقه طول می‌کشد، در <b>یخ</b> بگذار<br>• تلاش ناموفق ← <b>مچ دست دیگر</b> (اسپاسم مانع تلاش دوم در همان محل است)'),
          M('اگر تلاش اول از مچ غیرغالب ناموفق بود، اقدام بعدی؟', ['تلاش از مچ دست دیگر', 'تلاش مجدد از همان محل', 'هرگز دوباره تلاش نکن', 'نمونه از فیستول دیالیز'], 'اسپاسم شریانی تلاش دوم را در همان محل سخت می‌کند.'),
          L('عوارض', 'هماتوم، خونریزی، <b>اسپاسم شریانی</b>، ترومبوز و ایسکمی دیستال، عفونت و باکتریمی، بی‌حسی دست (آسیب عصب مدین در براکیال)، و عفونت کادر درمان.<br>در نوزادان از شریان <b>فمورال و براکیال</b> استفاده نکن (خطر ترومبوز و از دست رفتن اندام). محل نمونه‌گیری‌های مکرر را بچرخان.'),
          L('اسپاسم در نوزاد', 'اندام رنگ‌پریده یا کبود پس از نمونه‌گیری:<br>• <b>گرم کردن اندام مقابل</b> (گشاد شدن رفلکسی عروق)<br>• اندام مبتلا در وضعیت افقی<br>• اصلاح افت فشار و کم‌آبی<br>• <b>پماد نیتروگلیسیرین ۲٪</b>، ۴ میلی‌متر به ازای هر کیلوگرم، قابل تکرار پس از ۸ ساعت'),
          P('هر مورد را به عدد درستش وصل کن', [['حداقل فشار پس از نمونه‌گیری', '۵ دقیقه'], ['زاویه سوزن رادیال', '۴۵ درجه'], ['صبر پس از تغییر اکسیژن', '۲۰ دقیقه'], ['برگشت رنگ در تست آلن', 'کمتر از ۱۰ ثانیه']]),
          T('در نوزاد، شریان فمورال محل ارجح برای نمونه‌گیری مکرر است.', false, 'خطر ترومبوز و از دست رفتن اندام؛ رادیال یا کاتتر شریان نافی ارجح است.')
        ]
      },
      {
        id: 'v3', title: 'دام‌های نمونه‌گیری', icon: '🪤', items: [
          L('حباب هوا', 'هوای اتاق PCO₂ حدود صفر و PO₂ حدود ۱۵۰ دارد. حباب:<br>• <b>PCO₂ را پایین می‌آورد</b> (آلکالوز تنفسی کاذب)<br>• PO₂ را به سمت ۱۵۰ می‌کشد (اگر کمتر بوده بالا و اگر بیشتر بوده پایین)<br><br>نکته دکتر سیگاری: بیمار بدون اکسیژن با <b>PaO₂ = ۱۲۰</b> ← احتمالاً حباب. پس از گرفتن نمونه با تلنگر حباب را بالا ببر و خارج کن.'),
          L('هپارین زیاد و سرنگ بزرگ', 'هپارین مایع نمونه را <b>رقیق</b> می‌کند:<br>• PCO₂ و HCO₃ <b>کاذب پایین</b> (شبیه اسیدوز متابولیک)<br>• pH کمی پایین (هپارین اسیدی است)<br><br>همین اتفاق وقتی خون کم در سرنگ بزرگ گرفته شود. دکتر ژیان: بیش از <b>۱ سی‌سی هپارین</b> نکش؛ سرنگ بزرگ‌تر از <b>۲ سی‌سی</b> استفاده نکن. مثال: pH ۷٫۳۹ ولی HCO₃ ۱۴ و PCO₂ ۲۴، بدون علت بالینی ← احتمالاً سرنگ ۵ سی‌سی نیمه‌پر.'),
          M('از بیمار مبتلا به سندرم ژیتلمن (که انتظار آلکالوز داریم) ABG گرفته‌ایم؛ ولی pH پایین و PCO₂ و HCO₃ هر دو پایین‌اند. بیمار نه اسهال دارد نه DKA. محتمل‌ترین توضیح؟', ['رقیق شدن نمونه با هپارین زیاد یا سرنگ بزرگ نیمه‌پر', 'DKA پنهان', 'مسمومیت با متانول', 'اسیدوز توبولار کلیوی'], 'اسیدوز متابولیک کاذب (مثال دکتر سیگاری): بیش از ۱ سی‌سی هپارین نکش و نمونه را با سرنگ مناسب تکرار کن.'),
          L('تأخیر در آنالیز', 'گلبول‌های زنده در سرنگ به متابولیسم ادامه می‌دهند:<br>• <b>PO₂ پایین</b> و <b>PCO₂ بالا</b> می‌رود<br>• در لکوسیتوز شدید سریع‌تر (دزدی اکسیژن توسط لکوسیت)<br>اگر بیش از ۱۵ دقیقه تأخیر هست، روی یخ. دکتر سیگاری: pH ۷٫۳۹، PCO₂ ۳۹، HCO₃ ۲۳ ولی <b>PaO₂ = ۷۰</b> در بیمار خوب ← نمونه دیر رسیده. این در بیمار NIV یا لوله‌دار تصمیم را عوض می‌کند.'),
          P('هر خطا را به اثرش وصل کن', [['حباب هوا', 'PCO₂ کاذب پایین'], ['هپارین زیاد', 'HCO₃ کاذب پایین'], ['تأخیر بدون یخ', 'PO₂ کاذب پایین'], ['نمونه وریدی', 'PO₂ حدود ۴۰']]),
          L('نمونه وریدی به جای شریانی', '• خون <b>تیره</b>، <b>بدون ضربان</b>، نیاز به کشیدن پیستون<br>• SaO₂ در ABG خیلی کمتر از SpO₂ پالس اکسیمتر<br>• PO₂ حدود ۳۵ تا ۵۰ با بیمار ظاهراً خوب<br>(مگر در شوک شدید یا ایست قلبی که خون شریانی هم تیره و بی‌ضربان است)<br>• سوزن را در بدن جلو و عقب نکن؛ خون شریانی و وریدی قاطی می‌شود'),
          M('زن باردار خوش‌حال با SpO₂ = ۹۹٪ ولی ABG: PO₂ = ۳۵ و SO₂ = ۷۴٪. توضیح؟', ['نمونه وریدی است؛ ABG را تکرار کن', 'نارسایی تنفسی نوع ۱ شدید', 'آمبولی ریه', 'مت‌هموگلوبینمی'], 'تناقض بالین و اشباع با عدد ABG ← نمونه وریدی (تمرین ۲۴).', null, { pH: 7.45, pco2: 35, po2: 35, hco3: 24, so2: 74 }),
          L('قاعده PaO₂ و FiO₂ (دکتر سیگاری)', '• PaO₂ بیش از <b>۳۰۰</b> ← بیمار حتماً اکسیژن می‌گرفته<br>• PaO₂ بین ۱۵۰ و ۳۰۰ ← تکنیک و اکسیژن را بررسی کن<br>• PaO₂ کمتر از ۱۵۰ ← تشخیص ABG از VBG ممکن است سخت باشد<br>• در VBG بدون اکسیژن پرجریان، PO₂ معمولاً از <b>۶۰</b> بالاتر نمی‌رود؛ VBG با PaO₂ = ۱۳۰ یعنی احتمالاً سوزن وارد شریان هم شده'),
          T('یک نمونه با PaO₂ = ۱۲۰ از بیمار بدون اکسیژن، احتمالاً حباب هوا داشته است.', true, 'در هوای اتاق PaO₂ شریانی معمولاً ۸۰ تا ۱۰۰ است.')
        ]
      },
      {
        id: 'v4', title: 'VBG در برابر ABG', icon: '🩸', items: [
          L('اختلاف وریدی و شریانی', tbl([['', 'ورید مرکزی', 'ورید محیطی'], ['pH', '۰٫۰۳ تا ۰٫۰۵ پایین‌تر', '۰٫۰۳ تا ۰٫۰۴ پایین‌تر'], ['PCO₂', '۴ تا ۵ بالاتر', '۳ تا ۸ بالاتر'], ['HCO₃', 'تقریباً برابر', '۱ تا ۲ بالاتر']]) + 'در <b>شوک</b> اختلاف‌ها بزرگ‌تر و غیرقابل اعتماد می‌شوند.'),
          L('مقادیر طبیعی VBG (دکتر ژیان)', tbl([['پارامتر', 'ABG', 'VBG'], ['pH', '۷٫۳۵ تا ۷٫۴۵', '۷٫۳۰ تا ۷٫۴۰'], ['PCO₂', '۳۵ تا ۴۵', '۴۰ تا ۵۰'], ['HCO₃', '۲۲ تا ۲۶', '۲۲ تا ۲۶'], ['PO₂', '۸۰ تا ۱۰۰', '۳۵ تا ۵۰ (متوسط ۴۰)']])),
          N('v.pco2'),
          N('v.ph'),
          L('VBG کجا کافی است؟', '✓ <b>pH و HCO₃</b>: پایش DKA، اسیدوز متابولیک، الکترولیت‌ها و لاکتات<br>✓ <b>غربالگری هیپرکاپنی</b>: PCO₂ وریدی کمتر از ۴۵ هیپرکاپنی شریانی را تقریباً رد می‌کند<br>✗ <b>اکسیژناسیون</b>: PO₂ وریدی هیچ اطلاعی از ریه نمی‌دهد (پالس اکسیمتر یا ABG)<br>✗ PCO₂ بالا در VBG مقدار دقیق شریانی را نشان نمی‌دهد<br>✗ شوک و پرفیوژن ضعیف'),
          M('برای پایش ساعتی درمان DKA در بیمار با SpO₂ طبیعی، کدام کافی است؟', ['VBG', 'ABG مکرر', 'فقط قند خون', 'CBG'], 'pH و HCO₃ وریدی به شریانی نزدیک‌اند؛ درد و عارضه کمتر.'),
          T('PO₂ در VBG برای ارزیابی شدت پنومونی مفید است.', false, 'PO₂ وریدی به مصرف بافت بستگی دارد، نه عملکرد ریه.'),
          M('PCO₂ وریدی = ۴۲ در بیمار گیج. کدام درست است؟', ['هیپرکاپنی شریانی بعید است؛ دنبال علت دیگر گیجی بگرد', 'حتماً هیپرکاپنی دارد', 'ABG لازم نیست چون PO₂ طبیعی است', 'باید NIV شروع کرد'], 'PvCO₂ زیر ۴۵ ارزش پیش‌بینی منفی بالایی برای هیپرکاپنی دارد.'),
          B('در VBG، PO₂ طبیعی حدود ___ mmHg است.', ['۴۰', '۱۰۰', '۶۰'], 'محدوده ۳۵ تا ۵۰.')
        ]
      },
      {
        id: 'v5', title: 'تفسیر سریع VBG به روش دکتر ژیان', icon: '⚡', items: [
          L('نمودار دو فلش', 'دو عدد را روی دو فلش تصور کن: <b>HCO₃ حول ۲۴</b> و <b>PCO₂ حول ۴۰</b>.<br>• HCO₃ بالای ۲۴ ← سمت آلکالوز (متابولیک)؛ زیر ۲۴ ← سمت اسیدوز<br>• PCO₂ زیر ۴۰ ← سمت آلکالوز (تنفسی)؛ بالای ۴۰ ← سمت اسیدوز<br><br>حالا ببین <b>کدام عدد می‌تواند وضعیت pH را توضیح دهد</b>؛ همان اختلال اصلی است.<br>رمز: <i>«مهم‌ترین ماده شست‌وشوی قلیایی، وایتکس است»</i>؛ هر عددی که pH را «وایتکسی» (قلیایی) کرده، مقصر آلکالوز است.'),
          M('VBG: pH = ۷٫۴۷، HCO₃ = ۳۳، PCO₂ = ۴۷. کدام عدد pH را توضیح می‌دهد؟', ['HCO₃ (آلکالوز متابولیک)', 'PCO₂ (آلکالوز تنفسی)', 'هیچ‌کدام', 'هر دو'], 'HCO₃ بالای ۲۴ قلیایی است و pH قلیایی را توضیح می‌دهد؛ PCO₂ بالا نمی‌تواند.', null, { pH: 7.47, pco2: 47, hco3: 33 }),
          M('VBG: pH = ۷٫۳۰، HCO₃ = ۱۸، PCO₂ = ۳۷. اختلال اصلی؟', ['اسیدوز متابولیک', 'اسیدوز تنفسی', 'آلکالوز تنفسی', 'طبیعی'], 'HCO₃ پایین اسیدی است و pH اسیدی را توضیح می‌دهد.', null, { pH: 7.30, pco2: 37, hco3: 18 }),
          M('VBG: pH = ۷٫۵۰، HCO₃ = ۲۱، PCO₂ = ۲۷. اختلال اصلی؟', ['آلکالوز تنفسی', 'آلکالوز متابولیک', 'اسیدوز متابولیک', 'اسیدوز تنفسی'], 'PCO₂ پایین قلیایی است؛ HCO₃ پایین نمی‌تواند آلکالوز را توضیح دهد (جبران است).', null, { pH: 7.50, pco2: 27, hco3: 21 }),
          M('VBG: pH = ۷٫۳۰، HCO₃ = ۳۰، PCO₂ = ۶۳. اختلال اصلی؟', ['اسیدوز تنفسی', 'اسیدوز متابولیک', 'آلکالوز متابولیک', 'آلکالوز تنفسی'], 'PCO₂ بالا اسیدی است؛ HCO₃ بالا جبران.', null, { pH: 7.30, pco2: 63, hco3: 30 }),
          L('وقتی هر دو مقصرند', '• <b>pH ۷٫۲۰، HCO₃ ۱۸، PCO₂ ۴۸</b>: هر دو اسیدی ← <b>اسیدوز تنفسی + متابولیک</b> (مثلاً بیمار فیبروز ریه که DKA شده)<br>• <b>pH ۷٫۶۰، HCO₃ ۳۰، PCO₂ ۳۱</b>: هر دو قلیایی ← <b>آلکالوز تنفسی + متابولیک</b> (مثلاً استفراغ همراه تب)<br>هر دو علت را باید درمان کرد.'),
          M('VBG: pH = ۷٫۲۰، HCO₃ = ۱۸، PCO₂ = ۴۸. تفسیر؟', ['اسیدوز تنفسی + اسیدوز متابولیک', 'اسیدوز متابولیک جبران‌شده', 'اسیدوز تنفسی ساده', 'آلکالوز'], 'هیچ‌کدام «وایتکسی» نیستند؛ هر دو اسیدی‌اند.', null, { pH: 7.20, pco2: 48, hco3: 18 }),
          L('در بالین چه چیزی مهم است؟', 'دکتر ژیان: «جبران شدن یا نشدن تغییرات ABG و VBG در بالین خیلی برای ما مهم نیست»؛ مهم پیدا کردن <b>اختلال اصلی و علت</b> آن است.<br>ولی یادت باشد: فرمول‌های جبران (دنیای pH) <b>اختلال دوم پنهان</b> را پیدا می‌کنند؛ در بیمار ICU هر دو را انجام بده.<br><small>مرکز ۷٫۴۰، ۲۴ و ۴۰ برای خون شریانی است؛ در VBG اعداد کمی اسیدی‌ترند، پس در مرزها محتاط باش.</small>'),
          T('در روش دکتر ژیان، اگر HCO₃ و PCO₂ هر دو به سمت اسیدوز باشند، بیمار دو اختلال دارد.', true, 'و باید علت هر دو را پیدا و درمان کرد.')
        ]
      },
      {
        id: 'v6', title: 'Base Excess در عمل', icon: '⚗️', items: [
          L('BE: وضعیت متابولیک خالص', 'دستگاه BE را محاسبه می‌کند؛ دکتر سیگاری: «در واقع یک تنبل‌آموز است و دستگاه برای ما ارزیابی کرده!»<br>• مثبت ← base excess (آلکالوز متابولیک)؛ منفی ← <b>base deficit</b> (اسیدوز متابولیک)<br>• BE (استاندارد) از PCO₂ مستقل است؛ در اختلال تنفسی <b>حاد</b> تقریباً صفر می‌ماند<br>• پس اگر HCO₃ و BE با هم نخواندند، به BE اعتماد کن: تغییر HCO₃ از اثر تنفسی (بافر) بوده'),
          M('اسیدوز تنفسی حاد: PCO₂ = ۶۰، HCO₃ = ۲۶، BE = ۰. آیا آلکالوز متابولیک هم هست؟', ['خیر؛ BE صفر است و افزایش HCO₃ از اثر بافری CO₂ است', 'بله؛ HCO₃ بالای ۲۴ است', 'بله؛ PCO₂ بالاست', 'قابل تشخیص نیست'], 'در حالت حاد HCO₃ حدود ۱ به ازای هر ۱۰ mmHg بالا می‌رود ولی BE تغییر نمی‌کند.'),
          L('BE در بیماری‌های مزمن', 'در اسیدوز تنفسی <b>مزمن</b> (COPD) کلیه HCO₃ نگه می‌دارد و BE <b>مثبت</b> می‌شود (حدود ۰٫۴ × افزایش PCO₂).<br>• BE مثبت مناسب ← فقط جبران<br>• BE <b>منفی</b> در بیمار COPD ← یک اسیدوز متابولیک هم هست (CKD، DKA، لاکتات)<br><br>دکتر ژیان: BE را همیشه در این بیماران بررسی کن: COPD و بیماری‌های مزمن ریه، بیماری‌های فلج‌کننده عضلات تنفسی (میاستنی)، بیماری‌های اسکلتی–عضلانی، چاقی شدید، و ترومای مغز و بصل‌النخاع.'),
          M('بیمار COPD با کاهش هوشیاری: PCO₂ = ۶۵ و BE = −۶. کدام محتمل‌تر است؟', ['یک اسیدوز متابولیک هم‌زمان علت بدتر شدن است', 'فقط تشدید COPD', 'آلکالوز متابولیک', 'خطای دستگاه'], 'در هیپرکاپنی مزمن BE باید مثبت باشد؛ منفی بودنش یعنی چیزی بی‌کربنات را مصرف کرده.'),
          L('BE طبیعی در سنین مختلف (دکتر سیگاری)', tbl([['سن', 'BE طبیعی'], ['بزرگسال (از ۱۶ سالگی)', '−۲ تا +۲'], ['نوجوانی', '−۴ تا +۲'], ['شیرخوارگی', 'تا −۷'], ['نوزاد تازه متولد', 'تا حدود −۱۰']]) + 'در بزرگسال برای جبران اسیدوز متابولیک به HCO₃ نگاه کن؛ در نوزاد با BE کار کن.<br><small>گاز خون بند ناف: کمبود باز ۱۲ یا بیشتر همراه pH کمتر از ۷ = اسیدوز متابولیک قابل توجه (معیار آسفیکسی).</small>'),
          N('v.be'),
          T('BE = −۶ در یک نوزاد یک‌روزه لزوماً غیرطبیعی است.', false, 'در نوزاد تازه متولد کمبود باز تا حدود −۱۰ می‌تواند طبیعی باشد.'),
          B('BE منفی را ___ هم می‌نامند.', ['base deficit', 'anion gap', 'standard bicarbonate'], 'کمبود باز.'),
          N('v.kpa')
        ]
      },
      {
        id: 'v7', title: 'گاز خون مویرگی (CBG)', icon: '🦶', items: [
          L('ایده CBG', 'خون مویرگ‌های <b>گشادشده</b> فرصت کمی برای تبادل گاز دارد، پس به خون شریانی نزدیک است.<br>• از <b>پاشنه گرم‌شده</b> (با بسته‌های گرمازای شیمیایی مخصوص؛ کمپرس آب گرم دمای قابل کنترلی ندارد)<br>• از سطح <b>داخلی یا خارجی</b> پاشنه؛ <b>هرگز از پشت پاشنه</b> (خطر استئومیلیت)'),
          M('برای CBG نوزاد از کدام قسمت پاشنه نمونه نمی‌گیرند؟', ['سطح خلفی پاشنه', 'سطح داخلی', 'سطح خارجی', 'هر دو طرف مجازند'], 'سطح خلفی نزدیک استخوان کالکانئوس است.'),
          L('خطاهای CBG', '• <b>گرم نکردن کافی</b> ← خون کمتر شریانی<br>• <b>فشردن زیاد پا</b> ← مخلوط شدن خون وریدی و مایع بین‌بافتی<br>• حباب هوا ← PO₂ و PCO₂ غلط<br>• نمونه زودتر <b>لخته</b> می‌شود<br><b>PO₂ مویرگی</b> برای تصمیم‌گیری اکسیژن‌درمانی قابل اعتماد نیست؛ pH و PCO₂ کاربرد بیشتری دارند.'),
          L('CBG کجا قابل اعتماد نیست؟', '• <b>افت فشار</b>، <b>هیپوترمی</b>، <b>کم‌آبی</b> (سه وضعیت اصلی)<br>• نوزاد سیانوتیک یا پرفیوژن مختل<br>• نوزاد کمتر از ۲۴ ساعت<br>• پلی‌سیتمی<br>• ادم یا التهاب پاشنه<br>• هر جا تصمیم بالینی دقیق لازم است'),
          P('هر خطا را به نتیجه‌اش وصل کن', [['گرم نکردن پاشنه', 'خون کمتر شریانی'], ['فشردن زیاد پا', 'مخلوط با خون وریدی و مایع بافتی'], ['حباب هوا', 'PCO₂ کاذب پایین'], ['تأخیر طولانی', 'لخته شدن نمونه']]),
          T('در نوزاد با افت فشار و هیپوترمی، CBG جایگزین مناسبی برای ABG است.', false, 'این دو از سه وضعیتی‌اند که CBG قابل اعتماد نیست.'),
          O('مراحل گرفتن CBG را مرتب کن', ['گرم کردن پاشنه با بسته گرمازا', 'انتخاب سطح داخلی یا خارجی پاشنه', 'سوراخ کردن و جمع‌آوری بدون فشار زیاد', 'خارج کردن حباب و آنالیز فوری']),
          N('v.kpa')
        ]
      },
      {
        id: 'v8', title: 'گاز خون نوزاد', icon: '👶', items: [
          L('مقادیر هدف نوزاد (اسلایدها)', tbl([['پارامتر', 'محدوده'], ['pH', '۷٫۳۵ تا ۷٫۴۵'], ['PCO₂', '۳۵ تا ۴۵'], ['HCO₃', '۲۲ تا ۲۶'], ['BE', '−۲ تا +۲ (نوزاد تازه تا حدود −۱۰)'], ['PaO₂', '۵۰ تا ۸۰']]) + 'PaO₂ هدف نوزاد پایین‌تر از بزرگسال است؛ اکسیژن زیاد در نارس‌ها خطر <b>رتینوپاتی</b> و آسیب ریه دارد.'),
          L('کاهش درد در نمونه‌گیری', '• تغذیه با شیر مادر یا مکیدن غیرتغذیه‌ای (NNS)<br>• لمس آرام والدین، پیچیدن در ملحفه<br>• <b>ساکاروز خوراکی ۲۴٪</b>: شروع اثر ۱۰ ثانیه، اوج ۲ تا ۳ دقیقه، مدت ۵ تا ۸ دقیقه؛ ۲ دقیقه قبل بده، قابل تکرار تا ۱۰ نوبت در روز؛ بیشترین اثر همراه NNS<br>• منع ساکاروز: قند ناپایدار، فیستول نای به مری ترمیم‌نشده، نوزاد فلج‌شده با دارو<br>• ± پماد <b>EMLA</b> (سن بارداری بیش از ۳۷ هفته، ۰٫۵ تا ۱ گرم، ۶۰ تا ۹۰ دقیقه قبل)<br>• ± فنتانیل وریدی در نوزاد زیر تهویه مکانیکی'),
          M('ساکاروز ۲۴٪ را چه زمانی پیش از نمونه‌گیری می‌دهیم؟', ['حدود ۲ دقیقه قبل', '۱ ساعت قبل', 'بعد از نمونه‌گیری', '۱۰ دقیقه قبل'], 'اوج اثر ۲ تا ۳ دقیقه و مدت اثر ۵ تا ۸ دقیقه است.'),
          L('اسیدوز متابولیک نوزاد', 'معمولاً از <b>تحویل ناکافی اکسیژن</b>: هیپوکسمی، کم‌خونی، برون‌ده قلبی ضعیف؛ و کمتر: سپسیس، بیماری متابولیک ارثی، دفع کلیوی HCO₃.<br>• بی‌کربنات <b>روتین توصیه نمی‌شود</b>؛ رساندن اکسیژن به بافت مهم‌تر است<br>• اگر لازم شد: رقیق ۱:۱ با آب مقطر، <b>آهسته طی ۳۰ تا ۶۰ دقیقه</b>' + fx('بی‌کربنات (mEq) = کمبود باز × وزن × 0.3') + '• در اسیدوز <b>مختلط</b> تنفسی و متابولیک احتیاط: بی‌کربنات به CO₂ تبدیل می‌شود و اسیدوز تنفسی را بدتر می‌کند'),
          N('v.neo'),
          L('آلکالوز متابولیک و اسیدوز تنفسی نوزاد', '<b>آلکالوز متابولیک</b>: شایع‌ترین علت، <b>جبران اسیدوز تنفسی مزمن</b> (مثلاً بیماری مزمن ریه)؛ سایر: استفراغ مکرر، تخلیه ترشحات معده، دیورتیک طولانی، پس از تعویض خون (سیترات).<br>HCO₃ کمتر از ۳۲ معمولاً درمان نمی‌خواهد؛ در موارد شدید با کلر ادرار پایین، <b>کلر</b> بده. اصلاح با استازولامید یا اسید ممکن است اسیدوز تنفسی جبران‌نشده بدهد.<br><b>اسیدوز تنفسی</b>: کاهش عملکرد مغز (انسفالیت، مخدر)، بوتولیسم، گیلن‌باره، دیستروفی عضلانی، پنومونی، آسم، لارنگواسپاسم.'),
          M('شایع‌ترین علت آلکالوز متابولیک در نوزاد کدام است؟', ['جبران اسیدوز تنفسی (بیماری مزمن ریه)', 'استفراغ', 'تزریق بی‌کربنات', 'هیپرآلدوسترونیسم'], 'مثلاً نوزاد نارس با دیسپلازی برونکوپولمونر (BPD).'),
          T('در نوزاد با اسیدوز تنفسی و متابولیک مختلط، بی‌کربنات سریع بهترین درمان است.', false, 'بی‌کربنات CO₂ تولید می‌کند؛ اول تهویه را درست کن.'),
          N('v.neo')
        ]
      },
      {
        id: 'v9', title: 'NICU: ونتیلاتور با ABG', icon: '🚨', items: [
          L('تنظیم اکسیژناسیون با PaO₂', tbl([['PaO₂ (mmHg)', 'اقدام'], ['کمتر از ۵۰', 'افزایش FiO₂ یا PEEP؛ اگر PaCO₂ هم بالای ۵۰، شاید PIP؛ سورفاکتانت را در نظر بگیر'], ['۵۰ تا ۸۰', 'وضعیت فعلی را حفظ کن؛ در صورت نیاز ABG پس از ۱ تا ۲ ساعت'], ['بیش از ۸۰', 'FiO₂ را هر بار ۳ تا ۵ واحد کم کن تا زیر ۴۰٪؛ سپس PEEP را یکی یکی کم کن']])),
          L('تنظیم تهویه با PaCO₂', tbl([['PaCO₂ (mmHg)', 'اقدام'], ['بیش از ۵۰', 'افزایش PIP یا تعداد؛ ABG پس از ۱ تا ۲ ساعت'], ['۴۰ تا ۵۰', 'ABG پس از ۱ تا ۲ ساعت'], ['۳۵ تا ۴۰', 'PIP را یکی یکی کم کن تا ۱۲ تا ۱۵ سانتی‌متر آب، سپس تعداد را'], ['کمتر از ۳۰', 'PIP را ۲ سانتی‌متر آب کم کن؛ ABG پس از ۲۰ تا ۳۰ دقیقه']]) + '<small>مطابق پروتکل بخش خودت تطبیق بده.</small>'),
          M('نوزاد زیر ونتیلاتور: PaO₂ = ۹۵ با FiO₂ ۶۰٪. اقدام؟', ['FiO₂ را ۳ تا ۵ واحد کم کن', 'FiO₂ را بالا ببر', 'سورفاکتانت فوری', 'PIP را زیاد کن'], 'PaO₂ بیش از ۸۰ در نوزاد؛ اکسیژن زیاد آسیب‌زاست.'),
          M('نوزاد زیر ونتیلاتور: PaCO₂ = ۲۶. اقدام؟', ['PIP را ۲ سانتی‌متر آب کم کن و ۲۰ تا ۳۰ دقیقه بعد ABG', 'تعداد تنفس را زیاد کن', 'اقدامی لازم نیست', 'بی‌کربنات'], 'هیپوکاپنی خطرناک است.'),
          L('چرا هیپوکاپنی در نوزاد خطرناک است؟', '• کاهش شدید <b>جریان خون مغز</b><br>• PaCO₂ کمتر از ۲۵ ← خطر <b>لکومالاسی دور بطنی (PVL)</b><br>• ارتباط با <b>کری</b><br>• افزایش خطر <b>بیماری مزمن ریه (BPD)</b><br>برخلاف هیپرکاپنی خفیف که در استراتژی «هیپرکاپنی مجاز» پذیرفته می‌شود.'),
          T('در نوزاد نارس، PaCO₂ پایین (زیر ۲۵) بی‌خطر و مطلوب است.', false, 'خطر PVL، کری و BPD دارد.'),
          O('کاهش حمایت اکسیژنی نوزاد با PaO₂ بالا را مرتب کن', ['کاهش FiO₂ هر بار ۳ تا ۵ واحد', 'رسیدن FiO₂ به زیر ۴۰٪', 'کاهش PEEP یکی یکی', 'ABG مجدد']),
          P('هر یافته را به اقدامش وصل کن', [['PaO₂ کمتر از ۵۰', 'افزایش FiO₂ یا PEEP'], ['PaO₂ بیش از ۸۰', 'کاهش FiO₂'], ['PaCO₂ بیش از ۵۰', 'افزایش PIP یا تعداد'], ['PaCO₂ کمتر از ۳۰', 'کاهش PIP']]),
          N('v.neo')
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

/* هما — راند بیمارستان: کیس‌های چندمرحله‌ای بر پایه ۲۵ تمرین «ABG در بالین» و چند کیس تکمیلی
 * هر کیس: شرح حال، کارت کامل گاز خون (lab) و چند مرحله تصمیم‌گیری.
 * عددهای آزمایش همان عددهای کتاب‌اند (گاهی بی‌کربنات استاندارد گزارش شده و با pH کاملاً نمی‌خواند). */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase) => ({ t: 'mcq', stage, q, opts, why, case: kase });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const S = (stage, q, ans, tol, unit, why, hint) => ({ t: 'numS', stage, q, ans, tol, unit, why, hint });
  const T = (stage, q, a, why) => ({ t: 'tf', stage, q, a, why });
  /** کارت گاز خون کتاب: H، pH، PCO2، PO2، HCO3، BE، SO2، لاکتات، K، Na، Cl، iCa، Hb، قند */
  const lab = (o2, sex, v) => {
    const k = ['h', 'pH', 'pco2', 'po2', 'hco3', 'be', 'so2', 'lac', 'k', 'na', 'cl', 'ca', 'hb', 'glu'];
    const o = { o2, sex };
    k.forEach((x, i) => { if (v[i] != null) o[x] = v[i]; });
    return o;
  };
  const RA = 'هوای اتاق';

  EA.rounds = [
    /* ================= اکسیژن ================= */
    {
      id: 'r1', w: 'o2', title: 'تب و سرفه در مرد جوان', who: 'مرد ۲۵ ساله، بدون سابقه بیماری',
      brief: 'دو روز تب، سرفه خلط‌دار و تنگی نفس پیشرونده. دما ۳۹٫۳، تعداد تنفس ۲۸، نبض ۱۰۴، فشار ۱۱۸/۷۰، SpO₂ ۸۹٪. ماتیته و تنفس برونشیال در قاعده ریه چپ.',
      lab: lab(RA, 'm', [31.8, 7.50, 28.1, 57.8, 23.9, -0.5, 88.7, 1.2, 3.7, 138, 99, 4.8, 15, 98]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ متوسط', 'نارسایی تنفسی نوع ۱ خفیف', 'نارسایی تنفسی نوع ۲ حاد', 'هیپرونتیلاسیون اولیه با اکسیژناسیون طبیعی'], 'PaO₂ ۵۷٫۸ (۴۰ تا ۵۹ = متوسط) با PaCO₂ پایین ← نوع ۱.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز تنفسی جبران‌نشده', 'آلکالوز تنفسی جبران‌شده', 'آلکالوز متابولیک', 'طبیعی'], 'هیپرونتیلاسیون پاسخ به هیپوکسمی و تنگی نفس است و آلکالمی خفیف داده؛ جبران متابولیک در اختلال حاد تنفسی رخ نمی‌دهد.'),
        S('محاسبه', 'گرادیان A–a چند است؟', 57, 3, 'mmHg', 'PAO₂ = ۰٫۲۱ × ۷۱۳ − ۲۸٫۱ ÷ ۰٫۸ = ۱۴۹٫۷ − ۳۵٫۱ = ۱۱۴٫۶ ← A–a = ۱۱۴٫۶ − ۵۷٫۸ ≈ <b>۵۷</b> (طبیعی برای ۲۵ سال حدود ۱۰) ← عدم تناسب V/Q از پنومونی.', 'PAO₂ = ۰٫۲۱ × ۷۱۳ − PaCO₂ ÷ ۰٫۸'),
        M('درمان', 'بهترین برنامه؟', ['اکسیژن برای اصلاح هیپوکسمی و آنتی‌بیوتیک مناسب', 'فقط آنتی‌بیوتیک؛ اکسیژن لازم نیست', 'تهویه مکانیکی فوری', 'آرام‌بخش برای کاهش تنفس'], 'هیپوکسمی متوسط بدون اختلال تهویه؛ اکسیژن با هدف SpO₂ ۹۴ تا ۹۸٪.'),
        T('پایش', 'در این بیمار، پالس اکسیمتری جانشین مناسبی برای ABG سریال است.', true, 'تهویه مختل نیست؛ ABG مجدد فقط با نشانه خستگی، شک به هیپرکاپنی یا افت بیشتر اشباع.')
      ]
    },
    {
      id: 'r3', w: 'o2', title: 'تنگی نفس پس از سفر هوایی', who: 'زن ۲۴ ساله، دانشجو، غیرسیگاری',
      brief: 'دیروز از پرواز طولانی برگشته؛ تنگی نفس ناگهانی بدون درد پلورتیک یا تورم ساق. مضطرب، تعداد تنفس ۲۲، SpO₂ ۹۵٪، CXR طبیعی.',
      lab: lab(RA, 'f', [31.2, 7.51, 29.3, 77, 25, 0.7, 93.7, 1, 4.3, 141, 101, 4.8, 13, 84]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ خفیف با هیپرونتیلاسیون بارز', 'هیپرونتیلاسیون اولیه با اکسیژناسیون طبیعی', 'تبادل گاز طبیعی', 'نارسایی نوع ۲'], 'با وجود هیپرونتیلاسیون، PaO₂ زیر ۸۰ است؛ اکسیژناسیون مختل است.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز تنفسی جبران‌نشده', 'آلکالوز متابولیک', 'آلکالوز تنفسی جبران‌شده', 'طبیعی'], 'PCO₂ پایین، HCO₃ طبیعی.'),
        S('محاسبه', 'گرادیان A–a چند است؟', 37, 3, 'mmHg', 'PAO₂ = ۱۴۹٫۷ − ۲۹٫۳ ÷ ۰٫۸ ≈ ۱۱۳ ← A–a ≈ ۱۱۳ − ۷۷ = <b>۳۶</b> (کتاب با ضریب ۱٫۲: ۳۸)؛ برای ۲۴ سال انتظار حدود ۱۰ ← عدم تناسب V/Q.', 'PAO₂ = ۰٫۲۱ × ۷۱۳ − PaCO₂ ÷ ۰٫۸'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['آمبولی ریه', 'حمله اضطراب', 'آسم', 'پنومونی'], 'جوان سالم با هیپوکسمی و A–a بالا بدون یافته رادیولوژیک، پس از سفر طولانی.'),
        M('اقدام', 'قدم بعدی؟', ['ارزیابی احتمال بالینی و CT آنژیوگرافی ریه (و ضدانعقاد در احتمال بالا)', 'اطمینان‌بخشی و ترخیص', 'تنفس در کیسه کاغذی', 'فقط اکسیژن'], 'در شک به آمبولی، تصویربرداری لازم است.')
      ]
    },
    {
      id: 'r5', w: 'o2', title: 'COPD با تنگی نفس شدید', who: 'مرد ۷۵ ساله با COPD طولانی',
      brief: 'سه روز بدتر شدن تنفس و افزایش خلط. به زحمت صحبت می‌کند، لب‌های غنچه‌ای، پرهوایی. نبض ۱۲۰، تعداد تنفس ۲۶، SpO₂ ۸۱٪.',
      lab: lab(RA, 'm', [39.5, 7.40, 36, 44, 23, -1.2, 80, 1, 4.1, 137, 99, 4.4, 16.5, 69]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ متوسط', 'نارسایی تنفسی نوع ۲ مزمن', 'نارسایی تنفسی نوع ۱ شدید', 'طبیعی'], 'PaO₂ ۴۴ (متوسط)، PaCO₂ و HCO₃ طبیعی.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['طبیعی', 'اسیدوز تنفسی جبران‌شده', 'آلکالوز متابولیک', 'اسیدوز متابولیک'], 'همه اعداد در محدوده.'),
        M('اکسیژن', 'درباره اکسیژن چه باید کرد؟', ['اکسیژن کنترل‌شده ضروری است (مثلاً ونچوری ۲۸٪ با هدف ۸۸ تا ۹۲٪) و ABG پیگیری', 'اکسیژن نده؛ خطر سرکوب تنفس دارد', 'ماسک ذخیره‌دار ۱۵ لیتر', 'فقط برونکودیلاتور'], 'بیمار هیپرکاپنی مزمن ندارد و نباید از ترس سرکوب تنفس، اکسیژن را دریغ کرد؛ در بخش شیب‌دار منحنی است و افت کوچک PaO₂ اشباع را فرو می‌ریزد.'),
        T('فیزیولوژی', 'افت کوچک PaO₂ در این بیمار ممکن است افت بزرگی در SaO₂ ایجاد کند.', true, 'PaO₂ ۴۴ روی بخش شیب‌دار منحنی است.')
      ]
    },
    {
      id: 'r7', w: 'o2', title: 'سکته مغزی و استفراغ', who: 'زن ۷۷ ساله بستری در بخش اعصاب',
      brief: 'ضعف سمت راست؛ تغذیه با لوله بینی–معده. ۲۴ ساعت بعد استفراغ زیاد و سپس بدتر شدن تنفس. آژیته، تب بالا، ماتیته و کراکل در قاعده هر دو ریه. SpO₂ ۹۲٪ روی اکسیژن ۶۰٪.',
      lab: lab('اکسیژن ۶۰٪', 'f', [38.8, 7.41, 33.2, 65, 21.2, -2.8, 92.7, 1.6, 4, 144, 103, 4.8, 13, 120]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ با اختلال شدید اکسیژناسیون', 'هیپوکسمی خفیف قابل قبول', 'نارسایی نوع ۲', 'طبیعی'], 'PaO₂ ۶۵ روی FiO₂ ۶۰٪ (انتظار حدود ۳۰۰).'),
        S('محاسبه', 'نسبت P/F چند است؟', 108, 3, '', '۶۵ ÷ ۰٫۶ = <b>۱۰۸</b> ← اختلال شدید (مرز شدید در تعریف برلین).', 'PaO₂ ÷ FiO₂'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز تنفسی خفیف متعادل‌شده با اسیدوز متابولیک خفیف', 'طبیعی', 'اسیدوز تنفسی', 'آلکالوز متابولیک'], 'PCO₂ و HCO₃ هر دو کمی پایین با pH طبیعی؛ اسیدوز متابولیک خفیف احتمالاً لاکتیک از هیپوکسی بافتی (کتاب).'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['پنومونی آسپیراسیون', 'آمبولی ریه', 'نارسایی قلب', 'حمله اضطراب'], 'اختلال بلع، استفراغ و یافته‌های دوطرفه قاعده ریه.'),
        M('شدت و اقدام', 'وضعیت بیمار چقدر شدید است؟', ['شدید؛ مراقبت ویژه و پایش نزدیک', 'خفیف؛ درمان سرپایی', 'متوسط؛ بخش عمومی بدون پایش', 'قابل قضاوت نیست'], 'افت بیشتر PaO₂ روی بخش شیب‌دار منحنی فاجعه‌بار است؛ کتاب هدف SaO₂ بیش از ۹۲٪ را توصیه می‌کند.')
      ]
    },
    {
      id: 'r10', w: 'o2', title: 'آسمی که ساکت می‌شود', who: 'زن ۲۱ ساله با سابقه دو بستری آسم',
      brief: 'شش ساعت ویزینگ و تنگی نفس، بدون پاسخ به سالبوتامول. تعداد تنفس ۳۰، استفاده از عضلات فرعی، جمله‌ها را کامل نمی‌کند. نبض ۱۱۵، SpO₂ ۹۶٪، PEF ۱۶۰ (پیش‌بینی ۴۰۰).',
      lab: lab(RA, 'f', [42, 7.38, 43, 76, 24, -1.3, 96, 1, 4, 140, 99, 4.5, 13, 91]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ خفیف', 'طبیعی', 'نارسایی نوع ۲', 'هیپرونتیلاسیون'], 'PaO₂ ۷۶ با PaCO₂ طبیعی.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['طبیعی', 'آلکالوز تنفسی', 'اسیدوز تنفسی', 'اسیدوز متابولیک'], 'همه اعداد طبیعی‌اند؛ ولی…'),
        M('هشدار', 'کدام پارامتر از همه نگران‌کننده‌تر است؟', ['PaCO₂ (حد بالای طبیعی)', 'PaO₂', 'pH', 'HCO₃'], 'در حمله آسم با تنفس ۳۰، PaCO₂ باید پایین باشد. PaCO₂ «طبیعی» یعنی بیمار دارد خسته می‌شود.'),
        M('شدت', 'شدت حمله؟', ['تهدیدکننده حیات', 'خفیف', 'متوسط', 'حمله نیست'], 'PaCO₂ طبیعی یا بالا از ویژگی‌های تهدیدکننده حیات است؛ به ICU اطلاع بده و ABG سریال بگیر.'),
        O('اقدام', 'اقدامات را مرتب کن', ['اکسیژن و برونکودیلاتور نبولایزر پشت سر هم', 'استروئید سیستمیک و منیزیم وریدی', 'اطلاع به ICU', 'ABG سریال برای تصمیم لوله‌گذاری'])
      ]
    },
    {
      id: 'r12', w: 'o2', title: 'نجات از آتش‌سوزی', who: 'مرد ۴۰ ساله',
      brief: '۲۰ دقیقه در اتاق پر از دود گیر افتاده. آلوده به دوده، گیج، یک بار استفراغ. SpO₂ ۹۹٪ با ۱۵ لیتر اکسیژن. کربوکسی‌هموگلوبین ۴۰٪ (غیرسیگاری طبیعی کمتر از ۳٪).',
      lab: lab('۱۵ لیتر با ماسک', 'm', [44, 7.36, 34, 353, 18, -5.5, 100, 2, 3.6, 145, 103, 4.4, 14, 73]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['طبیعی از نظر ریه، ولی با هیپوکسمی شدید (محتوای اکسیژن کم)', 'نارسایی تنفسی نوع ۱', 'هیپراکسی بی‌خطر', 'نارسایی نوع ۲'], 'PaO₂ بالاست ولی ۴۰٪ هموگلوبین با CO اشغال شده.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک جبران‌شده (لاکتیک)', 'آلکالوز تنفسی', 'طبیعی', 'اسیدوز تنفسی'], 'هیپوکسی بافتی ← لاکتات.'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['مسمومیت با منوکسید کربن', 'آسیب حرارتی راه هوایی', 'پنومونی', 'مسمومیت با سیانید به‌تنهایی'], 'COHb ۴۰٪. (در آتش‌سوزی سیانید هم ممکن است؛ لاکتات بسیار بالا به آن اشاره می‌کند.)'),
        M('دام', 'کدام پارامتر کاذب بالاست؟', ['SaO₂', 'PaO₂', 'pH', 'لاکتات'], 'پالس اکسیمتر COHb را اکسی‌هموگلوبین می‌خواند؛ SaO₂ در ABG هم از PaO₂ محاسبه می‌شود.'),
        M('درمان', 'درمان اصلی؟', ['اکسیژن ۱۰۰٪ با ماسک ذخیره‌دار (و در موارد شدید اکسیژن پرفشار)', 'کاهش FiO₂ چون PaO₂ بالاست', 'بی‌کربنات', 'آنتی‌بیوتیک'], 'اکسیژن ۱۰۰٪ نیمه‌عمر COHb را از حدود ۵ ساعت به حدود ۱ ساعت می‌رساند.')
      ]
    },
    {
      id: 'r13', w: 'o2', title: 'خستگی پیش از جراحی روده', who: 'زن ۷۹ ساله با تومور روده بزرگ',
      brief: 'شش ماه خونریزی مقعدی. هنگام پذیرش تنگی نفس و خستگی شدید. نبض ۱۰۰، تعداد تنفس ۲۴، SpO₂ ۱۰۰٪.',
      lab: lab(RA, 'f', [32.3, 7.49, 25, 89, 22, -2, 99.8, 1, 3.8, 138, 96, 4.7, 6.8, 71]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['هیپرونتیلاسیون بدون اختلال اکسیژناسیون، ولی هیپوکسمی از کم‌خونی', 'نارسایی نوع ۱', 'طبیعی و بدون مشکل', 'نارسایی نوع ۲'], 'PaO₂ و SaO₂ طبیعی‌اند؛ محتوای اکسیژن به‌خاطر Hb ۶٫۸ کم است.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز تنفسی جبران‌نشده', 'آلکالوز متابولیک', 'طبیعی', 'اسیدوز متابولیک'], 'PCO₂ پایین با HCO₃ طبیعی.'),
        S('محاسبه', 'محتوای اکسیژن شریانی (CaO₂) چند mL/dL است؟', 9.4, 0.3, 'mL/dL', '۱٫۳۴ × ۶٫۸ × ۰٫۹۹۸ + ۰٫۰۰۳ × ۸۹ ≈ ۹٫۱ + ۰٫۳ = <b>۹٫۴</b> (طبیعی حدود ۱۸ تا ۲۰)', 'CaO₂ = ۱٫۳۴ × Hb × SaO₂ + ۰٫۰۰۳ × PaO₂'),
        M('درمان', 'مؤثرترین روش بهبود تحویل اکسیژن به بافت؟', ['افزایش هموگلوبین (تزریق خون یا جایگزینی آهن)', 'اکسیژن با ماسک', 'تهویه غیرتهاجمی', 'آرام‌بخش'], 'Hb از قبل اشباع است؛ اکسیژن بیشتر کمکی نمی‌کند.')
      ]
    },
    {
      id: 'r21', w: 'o2', title: 'درد اپی‌گاستر در مصرف الکل', who: 'زن ۵۹ ساله با مصرف زیاد الکل',
      brief: 'سه روز درد شدید بالای شکم و اکنون تنگی نفس. نبض ۱۲۰، فشار ۷۵/۶۰، تندرنس اپی‌گاستر. آمیلاز ۱۸۹۰، CRP ۲۷۴؛ CXR: ارتشاح التهابی ریه. روی ماسک ذخیره‌دار ۱۵ لیتر.',
      lab: lab('ماسک ذخیره‌دار ۱۵ لیتر', 'f', [47, 7.33, 24.3, 81, 14.9, -11.8, 99, 3.1, 3.6, 141, 96, 3.6, 12, 291]),
      steps: [
        M('FiO₂', 'FiO₂ تقریبی این بیمار؟', ['۶۰ تا ۸۰٪', '۲۱٪', '۳۰ تا ۴۰٪', '۱۰۰٪ دقیق'], 'ماسک ذخیره‌دار حدود ۶۰ تا ۸۰٪ می‌دهد.'),
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۱ شدید', 'طبیعی چون PaO₂ بالای ۸۰ است', 'نارسایی نوع ۲', 'هیپرونتیلاسیون اولیه'], 'PaO₂ ۸۱ با FiO₂ حدود ۷۰٪ ← P/F حدود ۱۱۵؛ با ارتشاح دوطرفه به نفع ARDS.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک شدید با جبران نسبی', 'آلکالوز تنفسی', 'اسیدوز تنفسی', 'طبیعی'], 'HCO₃ ۱۴٫۹، BE −۱۱٫۸، لاکتات ۳٫۱ ← اسیدوز لاکتیک از هیپوپرفیوژن.'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['پانکراتیت حاد شدید با ARDS و شوک', 'زخم معده', 'کتواسیدوز الکلی ساده', 'پنومونی'], 'قند بالا و کلسیم پایین هم عوامل پیش‌آگهی بد در پانکراتیت‌اند.'),
        M('درمان', 'اولویت درمان؟', ['احیای مایع هدفمند و در صورت نیاز وازوپرسور، بستری در ICU', 'فقط مسکن', 'محدودیت مایع', 'بی‌کربنات به‌تنهایی'], 'کتاب: بولوس ۲۰ mL/kg سالین و سپس حدود ۳ لیتر در ۲۴ ساعت، و دوپامین در صورت نیاز؛ امروزه مایع هدفمند (ترجیحاً رینگر لاکتات) و نوراپی‌نفرین ترجیح دارد.')
      ]
    },
    {
      id: 'r25', w: 'o2', title: 'تنگی نفس پس از تعویض زانو', who: 'زن ۵۵ ساله، روز چهارم پس از جراحی',
      brief: 'تنگی نفس ناگهانی و درد سمت چپ قفسه سینه؛ بی‌حرکتی پس از عمل. تاکی‌کاردی و تاکی‌پنه خفیف، بدون علائم DVT. CXR طبیعی، ECG فقط تاکی‌کاردی سینوسی.',
      lab: lab(RA, 'f', [36, 7.43, 37, 91, 25.8, -1.8, 99, 1, 3.8, 136, 99, 4.8, 10, 91]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['طبیعی', 'نارسایی نوع ۱ خفیف', 'هیپرونتیلاسیون', 'نارسایی نوع ۲'], 'همه اعداد طبیعی‌اند.'),
        S('محاسبه', 'گرادیان A–a چند است؟', 13.5, 2.5, 'mmHg', 'PAO₂ = ۱۴۹٫۷ − ۳۷ ÷ ۰٫۸ ≈ ۱۰۳٫۵ ← A–a ≈ <b>۱۲٫۵</b> (کتاب با ضریب ۱٫۲: ۱۴٫۳)؛ طبیعی (برای ۵۵ سال تا حدود ۱۸).', 'PAO₂ = ۰٫۲۱ × ۷۱۳ − PaCO₂ ÷ ۰٫۸'),
        M('تصمیم', 'آیا بیمار بررسی بیشتری لازم دارد؟', ['بله؛ آمبولی ریه باید با تصویربرداری رد شود', 'خیر؛ ABG طبیعی آمبولی را رد می‌کند', 'فقط مسکن', 'فقط اکسیژن'], 'وقتی بالین به آمبولی مشکوک است، ABG طبیعی هرگز آن را رد نمی‌کند (V/Q اسکن یا CT آنژیوگرافی).')
      ]
    },

    /* ================= pH ================= */
    {
      id: 'r28', w: 'ph', title: 'سه اختلال در یک بیمار', who: 'مرد ۴۵ ساله، مصرف سنگین الکل',
      brief: 'چهار روز مصرف الکل و استفراغ مکرر، بی‌غذایی. کتون ادرار مثبت، قند ۷۰. تنفس تند. سابقه بیماری کبد.',
      lab: { o2: RA, sex: 'm', pH: 7.48, pco2: 30, hco3: 22, na: 138, cl: 88, k: 3.1, glu: 70 },
      steps: [
        M('اختلال اولیه', 'از روی pH و PCO₂، اختلال آشکار کدام است؟', ['آلکالوز تنفسی', 'آلکالوز متابولیک', 'اسیدوز متابولیک', 'اسیدوز تنفسی'], 'pH قلیایی، PCO₂ پایین؛ HCO₃ «طبیعی».'),
        S('آنیون گپ', 'آنیون گپ (بدون پتاسیم) چند است؟', 28, 0.5, 'mEq/L', '۱۳۸ − (۸۸ + ۲۲) = <b>۲۸</b> ← بالا؛ اسیدوز متابولیک با گپ بالا (کتواسیدوز الکلی) پنهان است.', 'Na − (Cl + HCO₃)'),
        S('بی‌کربنات اصلاح‌شده', 'HCO₃ اصلاح‌شده (HCO₃ + ΔAG) چند است؟', 38, 0.5, 'mEq/L', '۲۲ + (۲۸ − ۱۲) = <b>۳۸</b> ← بیش از ۲۶: آلکالوز متابولیک (استفراغ) هم هست.', 'HCO₃ + (AG − ۱۲)'),
        M('جمع‌بندی', 'تفسیر کامل؟', ['آلکالوز تنفسی + اسیدوز با گپ بالا + آلکالوز متابولیک (اختلال سه‌گانه)', 'آلکالوز تنفسی ساده', 'آلکالوز متابولیک ساده', 'اسیدوز متابولیک جبران‌شده'], 'استفراغ (آلکالوز)، کتواسیدوز الکلی (گپ بالا) و بیماری کبد (آلکالوز تنفسی).'),
        M('درمان', 'پیش از سرم قندی چه باید داد؟', ['تیامین', 'انسولین', 'بی‌کربنات', 'استازولامید'], 'تیامین پیش از گلوکز (پیشگیری از ورنیکه)؛ سپس سالین + دکستروز و KCl.')
      ]
    },
    {
      id: 'r29', w: 'ph', title: 'سپسیس با pH طبیعی', who: 'زن ۷۰ ساله با عفونت ادراری',
      brief: 'تب، لرز و گیجی. فشار ۸۵/۵۰، تعداد تنفس ۳۰. لاکتات ۵.',
      lab: { o2: RA, sex: 'f', pH: 7.39, pco2: 24, po2: 82, hco3: 14, na: 140, cl: 104, lac: 5 },
      steps: [
        S('وینتر', 'PCO₂ مورد انتظار با فرمول وینتر چند است؟', 29, 0.5, 'mmHg', '۱٫۵ × ۱۴ + ۸ = <b>۲۹</b> ± ۲ (۲۷ تا ۳۱)', '۱٫۵ × HCO₃ + ۸'),
        M('تفسیر', 'با PCO₂ = ۲۴، تفسیر؟', ['اسیدوز متابولیک + آلکالوز تنفسی', 'اسیدوز متابولیک با جبران مناسب', 'اسیدوز متابولیک + اسیدوز تنفسی', 'آلکالوز تنفسی ساده'], 'PCO₂ کمتر از انتظار ← سپسیس مرکز تنفس را هم تحریک کرده.'),
        S('آنیون گپ', 'آنیون گپ چند است؟', 22, 0.5, 'mEq/L', '۱۴۰ − (۱۰۴ + ۱۴) = <b>۲۲</b>؛ دلتا = ۱۰ ÷ ۱۰ = ۱ ← اسیدوز لاکتیک خالص.', 'Na − (Cl + HCO₃)'),
        T('شدت', 'pH طبیعی یعنی این بیمار بدحال نیست.', false, 'لاکتات بالای ۴ و افت فشار = شوک سپتیک؛ pH طبیعی از دو اختلال متقابل است.'),
        O('درمان', 'اقدامات ساعت اول را مرتب کن', ['کشت خون', 'آنتی‌بیوتیک وسیع‌الطیف', 'مایع ۳۰ mL/kg', 'نوراپی‌نفرین اگر MAP کمتر از ۶۵ ماند', 'لاکتات مجدد'])
      ]
    },

    /* ================= اسیدوز متابولیک ================= */
    {
      id: 'r14', w: 'ag', title: 'درد شکم بی‌تناسب با معاینه', who: 'زن ۷۸ ساله با فیبریلاسیون دهلیزی',
      brief: 'درد شدید، ناگهانی و منتشر شکم؛ آسپرین و دیگوکسین مصرف می‌کند. همودینامیک پایدار، شکم نرم با تندرنس عمقی. رادیوگرافی‌ها طبیعی. حالش بدتر می‌شود. روی ۱۰ لیتر اکسیژن با ماسک.',
      lab: lab('۱۰ لیتر با ماسک', 'f', [52.5, 7.28, 33, 215, 16.2, -10.4, 99.8, 3.2, 4.6, 135, 96, 4.6, 12, 69]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['هیپرونتیلاسیون ثانویه با اکسیژناسیون مناسب', 'نارسایی نوع ۱', 'نارسایی نوع ۲', 'طبیعی'], 'PaO₂ ۲۱۵ برای FiO₂ حدود ۴۰٪ مناسب است؛ PCO₂ پایین در پاسخ به اسیدوز.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک با جبران نسبی', 'اسیدوز تنفسی', 'آلکالوز تنفسی', 'اسیدوز متابولیک جبران‌نشده'], 'HCO₃ و BE پایین، PCO₂ پایین، pH هنوز اسیدی.'),
        S('آنیون گپ', 'آنیون گپ (بدون پتاسیم)؟', 22.8, 0.4, 'mEq/L', '۱۳۵ − (۹۶ + ۱۶٫۲) = <b>۲۲٫۸</b> ← گپ بالا، هم‌خوان با لاکتات ۳٫۲.', 'Na − (Cl + HCO₃)'),
        S('وینتر', 'PCO₂ مورد انتظار؟', 32.3, 0.5, 'mmHg', '۱٫۵ × ۱۶٫۲ + ۸ = <b>۳۲٫۳</b> ± ۲؛ PCO₂ بیمار (۳۳) مناسب است.', '۱٫۵ × HCO₃ + ۸'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['ایسکمی مزانتریک', 'پانکراتیت', 'انسداد روده', 'کتواسیدوز'], 'درد شدید + معاینه ناچیز + اسیدوز لاکتیک + AF.')
      ]
    },
    {
      id: 'r15', w: 'ag', title: 'دیابتی با تنفس آه‌مانند', who: 'زن ۳۵ ساله با دیابت نوع ۱',
      brief: 'چند روز استفراغ؛ انسولین را «احتیاطاً» قطع کرده. خواب‌آلود، اندام سرد، مخاط خشک، بوی استون، تنفس عمیق. نبض ۱۳۰، فشار ۱۰۰/۶۰. روی ۱۰ لیتر اکسیژن.',
      lab: lab('۱۰ لیتر با ماسک', 'f', [88.9, 7.05, 11, 187, 6, -25.2, 99.8, 1, 4.6, 141, 96, 5, 12, 636]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['هیپرونتیلاسیون ثانویه', 'نارسایی نوع ۲', 'نارسایی نوع ۱', 'هیپرونتیلاسیون اولیه'], 'PCO₂ ۱۱ در پاسخ به اسیدوز شدید.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک شدید با جبران نسبی', 'اسیدوز مختلط', 'آلکالوز تنفسی', 'اسیدوز متابولیک جبران‌شده'], 'جبران تنفسی تقریباً حداکثر است، ولی اسیدمی شدید باقی مانده.'),
        S('آنیون گپ', 'آنیون گپ به روش کتاب (با پتاسیم)؟', 43.6, 0.3, 'mEq/L', '(۱۴۱ + ۴٫۶) − (۹۶ + ۶) = <b>۴۳٫۶</b> (بدون پتاسیم ۳۹)؛ کتون‌ها گپ را بالا برده‌اند.', '(Na + K) − (Cl + HCO₃)'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['کتواسیدوز دیابتی', 'کتواسیدوز الکلی', 'اسیدوز لاکتیک', 'مسمومیت با متانول'], 'قند ۶۳۶، کتون و بوی استون.'),
        O('درمان', 'درمان را مرتب کن', ['سالین ۰٫۹٪ برای جبران حجم', 'سنجش پتاسیم', 'انسولین وریدی مداوم', 'دکستروز با رسیدن قند به حدود ۲۰۰', 'ادامه تا بسته شدن آنیون گپ']),
        T('بی‌کربنات', 'با pH = ۷٫۰۵ بی‌کربنات بخش اصلی درمان است.', false, 'طبق ADA فقط اگر pH کمتر از ۶٫۹ باشد.')
      ]
    },
    {
      id: 'r16', w: 'ag', title: 'بیهوش کنار بطری متانول', who: 'مرد ۳۷ ساله بی‌خانمان',
      brief: 'بیهوش کنار بطری ودکا و بطری نیمه‌خالی متانول پیدا شده. GCS ۹، بدون یافته عصبی موضعی.',
      lab: lab(RA, 'm', [63.3, 7.20, 25, 96, 9.5, -16.2, 97.8, 1.3, 4.5, 136, 99, 4.4, 13.5, 69]),
      steps: [
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک شدید با جبران نسبی', 'اسیدوز تنفسی', 'آلکالوز تنفسی', 'طبیعی'], 'HCO₃ ۹٫۵ و BE −۱۶.'),
        S('آنیون گپ', 'آنیون گپ به روش کتاب (با پتاسیم)؟', 32, 0.3, 'mEq/L', '(۱۳۶ + ۴٫۵) − (۹۹ + ۹٫۵) = <b>۳۲</b> (بدون پتاسیم ۲۷٫۵)', '(Na + K) − (Cl + HCO₃)'),
        M('هم‌خوانی', 'آیا این وضعیت با خوردن متانول هم‌خوان است؟', ['بله؛ اسید فرمیک اسیدوز شدید با گپ بالا می‌دهد', 'خیر؛ متانول گپ را بالا نمی‌برد', 'خیر؛ متانول آلکالوز می‌دهد', 'فقط اگر لاکتات بالا باشد'], 'لاکتات طبیعی است، پس گپ از آنیون دیگری است (فرمات).'),
        M('آزمایش بعدی', 'کدام آزمایش کمک بیشتری می‌کند؟', ['اسمولالیته سرم و محاسبه شکاف اسمولار (و سطح متانول)', 'آمیلاز', 'تروپونین', 'کلسیم'], 'شکاف اسمولار بالا به نفع الکل سمی است.'),
        M('درمان', 'درمان اختصاصی؟', ['فومپیزول یا اتانول، بی‌کربنات و همودیالیز', 'فقط سرم', 'نالوکسان', 'انسولین'], 'مهار الکل دهیدروژناز جلوی ساخت اسید فرمیک را می‌گیرد؛ دیالیز متانول و فرمات را خارج می‌کند.')
      ]
    },
    {
      id: 'r17', w: 'ag', title: 'سنگ‌های عودکننده کلیه', who: 'مرد ۵۲ ساله در بخش اورولوژی',
      brief: 'خستگی خفیف و لتارژی؛ بدون اسهال و بدون دارو. سنگ در کلیه راست.',
      lab: lab(RA, 'm', [43, 7.37, 31.5, 99, 18, -7, 99, 1, 3, 137, 109, 4, 13, 73]),
      steps: [
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک جبران‌شده', 'آلکالوز تنفسی جبران‌شده', 'طبیعی', 'اسیدوز تنفسی'], 'pH سمت اسیدی با HCO₃ پایین ← اسیدوز متابولیک اولیه.'),
        S('آنیون گپ', 'آنیون گپ به روش کتاب (با پتاسیم)؟', 13, 0.3, 'mEq/L', '(۱۳۷ + ۳) − (۱۰۹ + ۱۸) = <b>۱۳</b> ← طبیعی؛ کلر بالا ← هیپرکلرمیک.', '(Na + K) − (Cl + HCO₃)'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['اسیدوز توبولار کلیوی نوع ۱', 'اسهال پنهان', 'کتواسیدوز', 'نارسایی کلیه'], 'اسیدوز با گپ طبیعی بدون اسهال + سنگ + هیپوکالمی.'),
        M('مکانیسم', 'چرا این بیمار هیپوکالمی دارد؟', ['سدیم به جای H⁺ با K⁺ مبادله می‌شود', 'مصرف دیورتیک', 'اسهال', 'انسولین'], 'کلیه نمی‌تواند H⁺ دفع کند؛ K⁺ جایش هدر می‌رود. کلسیم هم در ادرار قلیایی سنگ می‌سازد.'),
        T('آزمایش تکمیلی', 'در این بیمار، آنیون گپ ادرار احتمالاً مثبت است.', true, 'دفع آمونیوم مختل است ← UAG مثبت.')
      ]
    },
    {
      id: 'r18', w: 'ag', title: 'ماده ناشناخته و وزوز گوش', who: 'زن ۱۸ ساله',
      brief: 'پنج ساعت پیش مقدار زیادی ماده ناشناخته خورده. تهوع و وزوز گوش؛ کمی گیج. تنفس تند و عمیق، دما ۳۷٫۶.',
      lab: lab(RA, 'f', [38.8, 7.41, 22.6, 97.5, 17.6, -8.3, 99, 1.4, 3.6, 140, 99, 4.8, 13, 91]),
      steps: [
        S('آنیون گپ', 'آنیون گپ به روش کتاب (با پتاسیم)؟', 27, 0.3, 'mEq/L', '(۱۴۰ + ۳٫۶) − (۹۹ + ۱۷٫۶) = <b>۲۷</b> ← بالا', '(Na + K) − (Cl + HCO₃)'),
        S('وینتر', 'PCO₂ مورد انتظار برای این HCO₃؟', 34.4, 0.5, 'mmHg', '۱٫۵ × ۱۷٫۶ + ۸ = <b>۳۴٫۴</b> ± ۲؛ PCO₂ بیمار ۲۲٫۶ خیلی پایین‌تر است.', '۱٫۵ × HCO₃ + ۸'),
        M('اسید و باز', 'تفسیر کامل؟', ['اسیدوز متابولیک با گپ بالا + آلکالوز تنفسی', 'اسیدوز متابولیک جبران‌شده ساده', 'آلکالوز تنفسی ساده', 'طبیعی'], 'کتاب هر دو احتمال را می‌پذیرد؛ فرمول وینتر نشان می‌دهد PCO₂ بیش از جبران افتاده ← تحریک مستقیم تنفس.'),
        M('تشخیص', 'این بیمار احتمالاً چه خورده است؟', ['آسپرین', 'متانول', 'پاراستامول', 'دیازپام'], 'وزوز گوش + اختلال مختلط؛ با سطح سالیسیلات تأیید کن.')
      ]
    },
    {
      id: 'r19', w: 'ag', title: 'جوان خسته و بی‌حال', who: 'مرد ۲۴ ساله',
      brief: 'هفته‌ها خستگی و کاهش وزن؛ چند روز ضعف و کرامپ عضلانی؛ امروز خواب‌آلود و گیج. اندام سرد، پرشدگی مویرگی کند. نبض ۱۲۰، فشار ۷۵/۵۵، قند ۵۲.',
      lab: lab(RA, 'm', [48, 7.32, 24.8, 97, 13.4, -13.9, 99, 3, 5.6, 125, 101, 4.8, 13, 45]),
      steps: [
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک شدید با جبران نسبی', 'آلکالوز تنفسی', 'اسیدوز تنفسی', 'طبیعی'], 'HCO₃ ۱۳٫۴، BE −۱۴.'),
        M('یافته‌های دیگر', 'کدام یافته‌های غیرطبیعی دیگر در ABG هست؟', ['هیپوناترمی، هیپرکالمی، هیپوگلیسمی و لاکتات بالا', 'هیپرناترمی و هیپوکالمی', 'فقط قند پایین', 'هیپرکلسمی'], 'این الگو فریاد می‌زند: نارسایی آدرنال.'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['بحران حاد آدرنال', 'سپسیس ساده', 'کتواسیدوز', 'مسمومیت با انسولین'], 'کمبود کورتیزول و آلدوسترون: از دست رفتن نمک و آب، افت تون عروق، هیپوگلیسمی.'),
        M('درمان', 'درمان اختصاصی؟', ['هیدروکورتیزون وریدی (۱۰۰ میلی‌گرم) همراه سالین و دکستروز', 'انسولین و دکستروز', 'فلودروکورتیزون خوراکی به‌تنهایی', 'بی‌کربنات'], 'تا نتیجه کورتیزول صبر نکن.')
      ]
    },
    {
      id: 'r20', w: 'ag', title: 'ایست قلبی در بخش', who: 'مرد ۸۷ ساله با بیماری قلبی، دمانس و CKD',
      brief: 'در دستشویی بخش کلاپس کرده؛ ۱۲ دقیقه احیا. GCS ۳، ریتم آگونال، بدون نبض و تلاش تنفسی. تهویه با بگ و ماسک و ۱۵ لیتر اکسیژن.',
      lab: lab('بگ و ماسک ۱۵ لیتر', 'm', [160, 6.8, 36, 240, 3.8, -20, 100, 9, 4.5, 136, 96, 4.4, 14, 73]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['تهویه و اکسیژناسیون با بگ کافی است', 'نارسایی نوع ۲', 'نارسایی نوع ۱', 'هیپرونتیلاسیون'], 'PaCO₂ طبیعی و PaO₂ بالا.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز متابولیک شدید (لاکتیک) جبران‌نشده', 'اسیدوز تنفسی', 'طبیعی', 'آلکالوز'], 'لاکتات ۹ از نبود پرفیوژن بافت.'),
        T('کاربرد', 'ABG در ایست قلبی می‌تواند هیپرکالمی (یک علت برگشت‌پذیر) را نشان دهد.', true, 'به‌علاوه ارزیابی تهویه و اطلاعات پیش‌آگهی.'),
        M('پیش‌آگهی', 'پیش‌آگهی؟', ['بسیار ضعیف', 'خوب', 'متوسط', 'قابل ارزیابی نیست'], 'pH ۶٫۸، ریتم آگونال، سن و بیماری‌های زمینه‌ای.')
      ]
    },

    /* ================= تنفسی و آلکالوز ================= */
    {
      id: 'r2', w: 'co2', title: 'چاقی بدون علامت', who: 'زن ۳۴ ساله با BMI ۴۹ و دیابت نوع ۲',
      brief: 'ارزیابی پیش از جراحی کاهش وزن؛ علامت تنفسی ندارد.',
      lab: lab(RA, 'f', [45, 7.35, 54.8, 72.2, 29, 3.8, 96, 1, 4.7, 134, 102, 4.8, 13, 106]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۲ مزمن', 'نارسایی نوع ۲ حاد', 'نارسایی نوع ۱', 'طبیعی'], 'PaCO₂ بالا با HCO₃ بالا.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز تنفسی جبران‌شده', 'آلکالوز متابولیک جبران‌شده', 'طبیعی', 'اسیدوز متابولیک'], 'هر دو بالا؛ pH در مرز اسیدی و جبران بیش از حد رخ نمی‌دهد ← اسیدوز اولیه.'),
        S('جبران', 'HCO₃ مورد انتظار در اسیدوز تنفسی مزمن؟', 29.9, 0.6, 'mEq/L', '۲۴ + ۰٫۴ × (۵۴٫۸ − ۴۰) = <b>۲۹٫۹</b> ← HCO₃ بیمار (۲۹) هم‌خوان است.', '۲۴ + ۰٫۴ × ΔPCO₂'),
        M('تشخیص', 'محتمل‌ترین تشخیص؟', ['سندرم چاقی–هیپوونتیلاسیون', 'COPD پنهان', 'آلکالوز متابولیک از دیورتیک', 'آسم'], 'حدود ۲۰٪ افراد با BMI بالای ۴۰.')
      ]
    },
    {
      id: 'r4', w: 'co2', title: 'بیمار بی‌پاسخ پس از جراحی', who: 'مرد ۷۸ ساله، چند ساعت پس از کوله‌سیستکتومی باز',
      brief: 'سه نوبت مورفین ۱۰ میلی‌گرمی + پمپ ضددرد. بی‌پاسخ، تنفس سطحی ۵ در دقیقه، مردمک ته‌سنجاقی. فشار ۹۸/۶۴. SpO₂ ۹۹٪ روی اکسیژن ۲۸٪.',
      lab: lab('اکسیژن ۲۸٪', 'm', [65.4, 7.18, 62, 87, 22.4, -1.5, 99.8, 1, 4.4, 137, 103, 4.6, 11, 71]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۲ حاد', 'نارسایی نوع ۲ مزمن', 'نارسایی نوع ۱', 'طبیعی چون SpO₂ ۹۹٪ است'], 'PaCO₂ ۶۲ با HCO₃ طبیعی. PaO₂ ۸۷ برای FiO₂ ۲۸٪ کمتر از انتظار (حدود ۱۴۰) است.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز تنفسی جبران‌نشده', 'اسیدوز تنفسی جبران‌شده', 'اسیدوز متابولیک', 'مختلط'], 'جبران متابولیک روزها طول می‌کشد؛ اسیدمی شدید.'),
        M('تشخیص', 'محتمل‌ترین علت؟', ['مسمومیت با اپیوئید (مورفین)', 'آمبولی ریه', 'سکته مغزی', 'هیپوگلیسمی'], 'مردمک ته‌سنجاقی و تنفس کند.'),
        M('درمان', 'درمان؟', ['حمایت راه هوایی و تهویه + نالوکسان ۰٫۴ تا ۲ میلی‌گرم وریدی، تکرار هر ۲ تا ۳ دقیقه', 'فقط افزایش اکسیژن', 'بی‌کربنات', 'فلومازنیل'], 'تا حداکثر ۱۰ میلی‌گرم؛ سپس پایش دقیق (اثر نالوکسان کوتاه‌تر از مورفین است).'),
        T('نکته', 'SpO₂ ۹۹٪ در این بیمار یعنی تهویه کافی است.', false, 'اکسیژن اضافه اشباع را حفظ کرده ولی CO₂ بالا رفته؛ پالس اکسیمتر تهویه را نمی‌سنجد.')
      ]
    },
    {
      id: 'r6', w: 'co2', title: 'COPD خسته در بخش', who: 'همان مرد ۷۵ ساله COPD (کیس «COPD با تنگی نفس شدید»)',
      brief: 'پس از نبولایزر، پردنیزولون و آنتی‌بیوتیک، روی ونچوری ۲۸٪. SpO₂ فقط کمی بهتر (۸۳٪). اکنون خسته و کمی گیج؛ تعداد تنفس از ۲۶ به ۱۶ رسیده. ABG شش ساعت بعد:',
      lab: lab('اکسیژن ۲۸٪', 'm', [51.4, 7.29, 52, 48, 24, -0.9, 84, 1, 4, 137, 99, 4.4, 16.5, 76]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۲ حاد', 'نارسایی نوع ۱', 'نارسایی نوع ۲ مزمن', 'بهبود یافته'], 'PaCO₂ از ۳۶ به ۵۲ رسیده با HCO₃ طبیعی.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز تنفسی جبران‌نشده', 'اسیدوز متابولیک', 'اسیدوز تنفسی مزمن', 'طبیعی'], 'حاد.'),
        M('علت', 'علت افزایش PaCO₂؟', ['خستگی عضلات تنفسی از کار زیاد تنفس', 'اکسیژن ۲۸٪ تحریک هیپوکسیک را سرکوب کرده', 'آلکالوز متابولیک', 'خطای آزمایشگاه'], 'بیمار هنوز هیپوکسمیک است (PaO₂ ۴۸)؛ پس سرکوب تحریک هیپوکسیک علت نیست.'),
        M('اکسیژن', 'آیا باید اکسیژن را قطع کرد؟', ['خیر؛ شاید حتی FiO₂ را کمی بالا برد، و NIV شروع کرد', 'بله؛ فوراً', 'بله؛ و آرام‌بخش داد', 'بله؛ و بی‌کربنات داد'], 'هیپوکسمی شدید است. کتاب دوکساپرام یا ترجیحاً NIV را پیشنهاد می‌کند؛ در شکست، لوله‌گذاری.')
      ]
    },
    {
      id: 'r8', w: 'co2', title: 'COPD با کاهش تحمل فعالیت', who: 'مرد ۶۸ ساله با COPD',
      brief: 'قبلاً ۵۰۰ متر راه می‌رفت؛ اکنون در لباس پوشیدن مشکل دارد. هوشیار، لب غنچه‌ای، ویزینگ. نبض ۹۶، تنفس ۲۴، SpO₂ ۷۸٪.',
      lab: lab(RA, 'm', [43.2, 7.36, 54.1, 40, 30.6, 4.9, 75.2, 1.2, 3.7, 144, 102, 4.8, 16, 89]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی تنفسی نوع ۲ مزمن', 'نارسایی نوع ۲ حاد', 'نارسایی نوع ۱', 'طبیعی'], 'PaCO₂ و HCO₃ بالا.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز تنفسی جبران‌شده', 'آلکالوز متابولیک', 'اسیدوز تنفسی حاد', 'طبیعی'], 'pH طبیعی.'),
        M('تغییر اخیر', 'کدام پارامتر احتمالاً در ۲۴ ساعت اخیر بیشتر تغییر کرده؟', ['PO₂', 'PCO₂', 'HCO₃', 'pH'], 'pH طبیعی یعنی PCO₂ اخیراً تغییری نکرده؛ بدتر شدن علائم از افت PaO₂ است.'),
        M('احتیاط', 'کدام دو پارامتر یعنی در اکسیژن‌درمانی احتیاط کن؟', ['PCO₂ و HCO₃', 'pH و PO₂', 'SO₂ و Hb', 'Na و K'], 'هیپرکاپنی مزمن ← اکسیژن کنترل‌شده با هدف ۸۸ تا ۹۲٪ و ABG پیگیری.')
      ]
    },
    {
      id: 'r9', w: 'co2', title: 'خواب‌آلودگی روی اکسیژن ۶۰٪', who: 'همان مرد ۶۸ ساله COPD',
      brief: 'با نبولایزر، پردنیزولون و اکسیژن ۶۰٪ با ماسک درمان شد. اشباع بهتر شد، ولی یک ساعت بعد خواب‌آلود و به سختی بیدار می‌شود؛ تنفس ۱۴. SpO₂ ۹۶٪.',
      lab: lab('اکسیژن ۶۰٪', 'm', [50.8, 7.29, 65.3, 84, 30.3, 4.7, 96.2, 1.2, 3.6, 144, 102, 4.8, 16, 91]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی نوع ۲ حاد روی مزمن', 'نارسایی نوع ۲ مزمن پایدار', 'بهبود کامل', 'نارسایی نوع ۱'], 'HCO₃ بالا (زمینه مزمن) با pH افتاده.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['اسیدوز تنفسی با جبران نسبی', 'اسیدوز تنفسی جبران‌شده', 'اسیدوز متابولیک', 'طبیعی'], 'pH ۷٫۲۹.'),
        M('علت', 'علت بدتر شدن؟', ['اکسیژن بیش از حد', 'پنومونی جدید', 'آمبولی ریه', 'هیپوگلیسمی'], 'FiO₂ ۶۰٪ در بیمار با هیپرکاپنی مزمن.'),
        O('اقدام', 'اقدامات را مرتب کن', ['کاهش FiO₂ با هدف SpO₂ ۸۸ تا ۹۲٪ (ونچوری ۲۴ تا ۲۸٪)', 'شروع تهویه غیرتهاجمی', 'ABG مجدد پس از ۳۰ تا ۶۰ دقیقه', 'لوله‌گذاری در صورت شکست NIV']),
        T('پایش', 'پالس اکسیمتری در این بیمار جانشین مناسب ABG است.', false, 'SpO₂ ۹۶٪ است در حالی که PaCO₂ خطرناک بالا رفته.')
      ]
    },
    {
      id: 'r11', w: 'co2', title: 'گزگز پس از پیچ خوردن مچ پا', who: 'زن ۲۳ ساله',
      brief: 'با رادیوگرافی طبیعی نمی‌پذیرد مچش نشکسته؛ گریه، سپس احساس چنگ در سینه، «نمی‌توانم نفس عمیق بکشم»، گزگز دست‌ها و دور دهان. تنفس ۳۶، SpO₂ ۱۰۰٪. CXR، ECG و PEF طبیعی.',
      lab: lab(RA, 'f', [29, 7.53, 24, 108, 24, -1.8, 99, 1, 3.5, 140, 99, 3.6, 12, 91]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['هیپرونتیلاسیون اولیه', 'هیپرونتیلاسیون ثانویه', 'نارسایی نوع ۱', 'طبیعی'], 'PaCO₂ پایین، PaO₂ بالا، HCO₃ طبیعی.'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز تنفسی جبران‌نشده', 'آلکالوز تنفسی جبران‌شده', 'آلکالوز متابولیک', 'طبیعی'], 'هنوز وقت جبران نبوده.'),
        M('یافته دیگر', 'کدام یافته غیرطبیعی دیگر علت گزگز است؟', ['کاهش کلسیم یونیزه', 'هیپوکالمی', 'هیپوگلیسمی', 'کم‌خونی'], 'در آلکالمی آلبومین کلسیم بیشتری می‌گیرد.'),
        M('تشخیص', 'تشخیص احتمالی؟', ['هیپرونتیلاسیون سایکوژنیک (پس از رد علل قلبی و ریوی)', 'آمبولی ریه', 'سکته قلبی', 'آسم'], 'ABG با اکسیژناسیون و گرادیان A–a طبیعی هم‌خوان است؛ ولی علل عضوی را رد کن.')
      ]
    },
    {
      id: 'r22', w: 'co2', title: 'استفراغ پس از عمل زنان', who: 'زن ۳۵ ساله، یک روز پس از بستن لوله‌ها',
      brief: 'سه روز استفراغ شدید؛ سرم وریدی نگرفته. کم‌آب، تورگور کم، مخاط خشک. نبض ۱۰۰، تنفس ۱۰، فشار ۱۶۰/۱۰۰.',
      lab: lab(RA, 'f', [36, 7.44, 48, 83, 32, 4, 96, 1, 3, 133, 91, 4, 11, 91]),
      steps: [
        M('تبادل گاز', 'وضعیت تبادل گاز؟', ['نارسایی نوع ۲ خفیف (پاسخ جبرانی)', 'نارسایی نوع ۲ حاد', 'نارسایی نوع ۱', 'هیپرونتیلاسیون'], 'PCO₂ ۴۸ جبران آلکالوز است (تنفس ۱۰).'),
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز متابولیک جبران‌شده', 'اسیدوز تنفسی مزمن', 'آلکالوز تنفسی', 'طبیعی'], 'pH سمت قلیایی و HCO₃ بالا.'),
        M('الکترولیت', 'کدام اختلالات الکترولیتی وجود دارد؟', ['هیپوکالمی، هیپوناترمی و هیپوکلرمی', 'هیپرکالمی و هیپرکلرمی', 'هیپرناترمی', 'هیپرکلسمی'], 'از دست رفتن شیره معده.'),
        M('درمان', 'چه درمانی آلکالوز را اصلاح می‌کند؟', ['جایگزینی مایع و الکترولیت (سالین ۰٫۹٪ + KCl)', 'استازولامید', 'بی‌کربنات', 'محدودیت مایع'], 'با جبران حجم، کلر و پتاسیم، کلیه HCO₃ اضافه را دفع می‌کند. در شوک ۲۰ mL/kg بولوس؛ KCl پس از برقراری ادرار.')
      ]
    },
    {
      id: 'r23', w: 'co2', title: 'شیرخوار با استفراغ جهنده', who: 'شیرخوار ۸ هفته',
      brief: 'دو هفته استفراغ همه وعده‌ها و کاهش وزن. آژیته، مخاط خشک، توده کوچک اپی‌گاستر.',
      lab: lab(RA, 'm', [29, 7.54, 45.8, 80, 37.5, 14, 99, 1, 2.5, 135, 86, 4, 18, 84]),
      steps: [
        M('اسید و باز', 'وضعیت اسید و باز؟', ['آلکالوز متابولیک با جبران نسبی', 'آلکالوز تنفسی', 'آلکالوز متابولیک جبران‌شده', 'اسیدوز تنفسی'], 'HCO₃ ۳۷٫۵، BE +۱۴، pH ۷٫۵۴.'),
        S('جبران', 'PCO₂ مورد انتظار با قاعده HCO₃ + ۱۵؟', 52.5, 0.5, 'mmHg', '۳۷٫۵ + ۱۵ = <b>۵۲٫۵</b> (با فرمول ۰٫۷: حدود ۴۹٫۵)', 'HCO₃ + ۱۵'),
        M('مقایسه', 'PCO₂ بیمار نسبت به انتظار؟', ['پایین‌تر', 'بالاتر', 'برابر', 'قابل مقایسه نیست'], 'گریه و دیسترس محرک اضافه تنفس‌اند (آلکالوز تنفسی خفیف همراه).'),
        M('تشخیص', 'تشخیص زمینه‌ای؟', ['تنگی پیلور', 'ریفلاکس ساده', 'گاستروانتریت', 'انسداد دوازدهه با صفرا'], 'استفراغ جهنده غیرصفراوی، توده زیتونی، آلکالوز هیپوکلرمیک هیپوکالمیک.'),
        M('اولویت', 'اقدام اول؟', ['اصلاح مایع و الکترولیت، سپس پیلوروتومی', 'جراحی فوری', 'بی‌کربنات', 'شیر خشک غلیظ'], 'بی‌هوشی در آلکالوز شدید خطر آپنه دارد.')
      ]
    },

    /* ================= VBG ================= */
    {
      id: 'r24', w: 'vbg', title: 'هیپوکسمی شدید در مادر خوش‌حال', who: 'زن باردار ۳۶ ساله در بخش مادران',
      brief: 'احساس تنگی نفس؛ بدون سابقه. معاینه قفسه سینه طبیعی. نبض ۱۱۰، تنفس ۲۰، SpO₂ ۹۹٪. نمونه‌گیر گفته خون آهسته وارد سرنگ شد و پیستون را کشیده.',
      lab: lab(RA, 'f', [35, 7.45, 35, 35, 24, 2, 74, 1, 3.6, 138, 104, 4.6, 13, 91]),
      steps: [
        M('ظاهر', 'اگر نمونه شریانی باشد، تبادل گاز چگونه است؟', ['نارسایی تنفسی نوع ۱ شدید', 'طبیعی', 'نارسایی نوع ۲', 'هیپرونتیلاسیون'], 'PaO₂ ۳۵.'),
        M('تناقض', 'چه چیزی با این تفسیر نمی‌خواند؟', ['بیمار خوش‌حال است و SpO₂ ۹۹٪ با SO₂ ۷۴٪ ABG تناقض دارد', 'pH', 'پتاسیم', 'هیچ چیز'], 'بالین و پالس اکسیمتر هیپوکسمی شدید را تأیید نمی‌کنند.'),
        M('توضیح', 'محتمل‌ترین توضیح؟', ['نمونه وریدی است؛ ABG را تکرار کن', 'آمبولی ریه', 'مت‌هموگلوبینمی', 'پالس اکسیمتر خراب است'], 'ورود آهسته و بدون ضربان خون و نیاز به کشیدن پیستون.'),
        T('نکته', 'در بارداری طبیعی، PaCO₂ حدود ۳۰ است.', true, 'پروژسترون تنفس را تحریک می‌کند؛ PCO₂ ۳۵ در این بیمار هم کمی بالاتر از حد انتظار بارداری است.')
      ]
    },
    {
      id: 'r26', w: 'vbg', title: 'پایش DKA با VBG', who: 'مرد ۱۹ ساله با کتواسیدوز دیابتی، ساعت ششم درمان',
      brief: 'پس از ۴ لیتر سالین و انسولین وریدی، VBG پیگیری گرفته شد. SpO₂ ۹۸٪. در پذیرش: HCO₃ ۶ و آنیون گپ ۳۰.',
      lab: { o2: RA, sex: 'm', kind: 'VBG', pH: 7.21, pco2: 30, hco3: 12, na: 138, cl: 108, k: 3.9, glu: 260 },
      steps: [
        S('برآورد', 'pH شریانی تقریبی چند است؟', 7.25, 0.02, '', '۷٫۲۱ + ۰٫۰۴ ≈ <b>۷٫۲۵</b>', 'pH وریدی + ۰٫۰۴'),
        S('آنیون گپ', 'آنیون گپ فعلی؟', 18, 0.5, 'mEq/L', '۱۳۸ − (۱۰۸ + ۱۲) = <b>۱۸</b> ← از ۳۰ به ۱۸؛ کتون‌ها در حال پاک شدن‌اند.', 'Na − (Cl + HCO₃)'),
        M('تفسیر', 'چرا HCO₃ هنوز ۱۲ است در حالی که گپ بسته می‌شود؟', ['اسیدوز هیپرکلرمیک ناشی از سالین فراوان (کلر ۱۰۸)', 'درمان شکست خورده', 'کتواسیدوز بدتر شده', 'آلکالوز متابولیک'], 'ΔAG = ۶ و ΔHCO₃ = ۱۲ ← دلتا ۰٫۵: جزء گپ طبیعی.'),
        M('اقدام', 'قدم بعدی؟', ['ادامه انسولین، افزودن دکستروز (قند ۲۶۰ و در حال افت) و پایش پتاسیم', 'قطع انسولین', 'بی‌کربنات', 'ABG به جای VBG'], 'هدف بستن گپ است؛ پتاسیم ۳٫۹ را هم جایگزین کن.'),
        T('نمونه', 'برای پایش ساعتی این بیمار ABG لازم است.', false, 'pH و HCO₃ وریدی کافی‌اند؛ اشباع با پالس اکسیمتر.')
      ]
    },
    {
      id: 'r27', w: 'vbg', title: 'نوزاد نارس زیر ونتیلاتور', who: 'نوزاد ۳۰ هفته با سندرم دیسترس تنفسی',
      brief: 'زیر ونتیلاتور با FiO₂ ۵۰٪، PIP ۲۰ و PEEP ۵. ABG از کاتتر شریان نافی:',
      lab: { o2: 'FiO₂ ۵۰٪', kind: 'ABG', pH: 7.24, pco2: 58, po2: 45, hco3: 24 },
      steps: [
        M('تفسیر', 'تفسیر؟', ['اسیدوز تنفسی حاد با PaO₂ پایین‌تر از هدف', 'اسیدوز متابولیک', 'آلکالوز تنفسی', 'طبیعی برای نوزاد'], 'PaCO₂ ۵۸ با HCO₃ طبیعی؛ PaO₂ هدف نوزاد ۵۰ تا ۸۰.'),
        M('اکسیژناسیون', 'برای PaO₂ = ۴۵ چه می‌کنی؟', ['افزایش FiO₂ یا PEEP و بررسی تجویز سورفاکتانت', 'کاهش FiO₂', 'بی‌کربنات', 'اقدامی لازم نیست'], 'PaO₂ کمتر از ۵۰.'),
        M('تهویه', 'برای PaCO₂ = ۵۸ چه می‌کنی؟', ['افزایش PIP یا تعداد تنفس و ABG پس از ۱ تا ۲ ساعت', 'کاهش PIP', 'بی‌کربنات', 'صبر'], 'PaCO₂ بیش از ۵۰.'),
        M('دو ساعت بعد', 'ABG جدید: PaO₂ = ۹۲، PaCO₂ = ۲۸. اقدام؟', ['کاهش FiO₂ ۳ تا ۵ واحد و کاهش PIP ۲ سانتی‌متر آب؛ ABG پس از ۲۰ تا ۳۰ دقیقه', 'ادامه همان تنظیمات', 'افزایش تعداد تنفس', 'افزایش FiO₂'], 'هم هایپراکسی و هم هیپوکاپنی برای نوزاد نارس آسیب‌زا هستند.'),
        T('خطر', 'PaCO₂ = ۲۸ در نوزاد نارس بی‌خطر است.', false, 'زیر ۲۵ تا ۳۰ خطر PVL، کری و BPD بالا می‌رود.')
      ]
    }
  ];

  /* هر مرحله کارت آزمایش کیس را هم نشان دهد */
  EA.rounds.forEach(r => r.steps.forEach(s => { if (!s.lab && r.lab) s.lab = r.lab; }));
})(typeof window !== 'undefined' ? window : globalThis);

/* هما — نکته‌های کوتاه بالینی که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['O₂', 'PaCO₂ بالا همیشه یعنی تهویه حبابچه‌ای کم شده؛ حتی در سپسیس، ریه سالم CO₂ اضافه را دفع می‌کند.'],
    ['O₂', 'PaO₂ حدود ۶۰ ≈ SaO₂ حدود ۹۰٪؛ زیر آن، هر افت کوچک PaO₂ اشباع را فرو می‌ریزد.'],
    ['O₂', 'پالس اکسیمتر درباره CO₂ ساکت است؛ در نارسایی نوع ۲ جانشین ABG نیست.'],
    ['O₂', 'PaO₂ مورد انتظار روی اکسیژن ≈ ۵ برابر درصد FiO₂؛ PaO₂ «طبیعی» روی ۶۰٪ یعنی ریه به‌شدت بیمار است.'],
    ['O₂', 'قانون ۱۴۰: در هوای اتاق PaO₂ + PaCO₂ کمتر از ۱۴۰ است؛ بیشتر بود؟ حباب یا اکسیژن.'],
    ['O₂', 'گرادیان A–a طبیعی ≈ سن ÷ ۴ + ۴. هیپوکسمی با A–a طبیعی یعنی هیپوونتیلاسیون یا ارتفاع.'],
    ['O₂', 'در مسمومیت با CO، SpO₂ کاذب طبیعی است؛ فقط CO-اکسیمتری کربوکسی‌هموگلوبین را نشان می‌دهد.'],
    ['O₂', 'در کم‌خونی شدید اکسیژن بیشتر کمکی نمی‌کند؛ محتوای اکسیژن را هموگلوبین می‌سازد.'],
    ['O₂', 'هدف SpO₂ در بیمار مستعد هیپرکاپنی ۸۸ تا ۹۲٪ است و در بقیه ۹۴ تا ۹۸٪.'],
    ['O₂', 'ABG طبیعی هرگز آمبولی ریه را رد نمی‌کند.'],
    ['O₂', 'ماسک ساده را با کمتر از ۵ لیتر نده؛ CO₂ بازدمی دوباره تنفس می‌شود.'],
    ['O₂', 'در حمله آسم، PaCO₂ «طبیعی» یعنی بیمار دارد خسته می‌شود؛ حمله تهدیدکننده حیات است.'],
    ['pH', 'رمز دکتر ژیان: «بیچاره (۲۴)، یه شب چله (۴۰) افتاده»؛ HCO₃ طبیعی ۲۴ و PCO₂ طبیعی ۴۰.'],
    ['pH', 'جبران هرگز بیش از حد نیست؛ با pH طبیعی، سمتی از ۷٫۴۰ که pH در آن است اختلال اولیه را لو می‌دهد.'],
    ['pH', '[H⁺] ≈ ۸۰ منهای دو رقم اعشار pH (بین ۷٫۲۰ و ۷٫۵۰)؛ با ۲۴ × PCO₂ ÷ HCO₃ مقایسه کن.'],
    ['pH', 'هر ۱ واحد pH یعنی ۱۰ برابر H⁺؛ و هر ۰٫۳ واحد یعنی دو برابر.'],
    ['pH', 'اسیدوز تنفسی و آلکالوز تنفسی هیچ‌وقت با هم نیستند؛ بقیه ترکیب‌ها ممکن‌اند.'],
    ['pH', 'اسیدوز تنفسی + اسیدوز متابولیک خطرناک‌ترین الگوی اسید و باز است.'],
    ['pH', 'بیمار از ABG مهم‌تر است؛ بدون بالین، هیچ گاز خونی را تفسیر نکن.'],
    ['pH', 'رمز جبران تنفسی: «۱-۴ بالا، ۲-۴ پایین» به ازای هر ۱۰ mmHg (حاد و مزمن).'],
    ['pH', 'BE فقط جزء متابولیک را نشان می‌دهد؛ در اختلال تنفسی حاد تقریباً صفر می‌ماند.'],
    ['AG', 'آنیون گپ را در هر ABG همراه الکترولیت حساب کن، حتی با pH طبیعی.'],
    ['AG', 'هر ۱ g/dL کاهش آلبومین، آنیون گپ را حدود ۲٫۵ کم نشان می‌دهد؛ اصلاحش کن.'],
    ['AG', 'فرمول وینتر: PCO₂ مورد انتظار = ۱٫۵ × HCO₃ + ۸ ± ۲.'],
    ['AG', 'نسبت دلتا کمتر از ۱: گپ طبیعی هم همراه است؛ بیشتر از ۲: آلکالوز متابولیک هم هست.'],
    ['AG', 'GOLDMARK: گلیکول، اکسوپرولین، ال و دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتون.'],
    ['AG', 'شکاف اسمولار بالا در اسیدوز با گپ بالا ← متانول یا اتیلن گلیکول.'],
    ['AG', 'آنیون گپ ادرار منفی (neGUTive) یعنی روده: اسهال؛ مثبت یعنی RTA.'],
    ['AG', 'در DKA بی‌کربنات فقط اگر pH کمتر از ۶٫۹ باشد؛ اول سرم، بعد پتاسیم، بعد انسولین.'],
    ['AG', 'درد شکمی شدید با معاینه ناچیز و لاکتات بالا: به ایسکمی مزانتریک فکر کن.'],
    ['AG', 'وزوز گوش + آلکالوز تنفسی + اسیدوز با گپ بالا = آسپرین، تا خلافش ثابت شود.'],
    ['AG', 'سالین زیاد اسیدوز هیپرکلرمیک می‌دهد؛ در DKA ممکن است HCO₃ با وجود بسته شدن گپ پایین بماند.'],
    ['CO₂', 'در تشدید COPD، pH کمتر از ۷٫۳۵ با PaCO₂ بالای ۴۵ پس از درمان دارویی یعنی NIV.'],
    ['CO₂', 'در بیمار با هیپرکاپنی مزمن، PCO₂ را به پایه خود بیمار برسان، نه ۴۰؛ وگرنه آلکالوز پس از هیپرکاپنی.'],
    ['CO₂', 'آلکالمی کلسیم یونیزه را پایین می‌آورد؛ گزگز دور دهان در هیپرونتیلاسیون از همین است.'],
    ['CO₂', 'در بارداری طبیعی PaCO₂ حدود ۳۰ است.'],
    ['CO₂', 'آلکالوز متابولیک: کلر ادرار کمتر از ۲۰ یعنی پاسخ به سالین (استفراغ)؛ بیشتر از ۲۰ و فشار بالا یعنی مینرالوکورتیکوئید.'],
    ['CO₂', 'درمان آلکالوز ناشی از استفراغ: سالین ۰٫۹٪ + KCl؛ کلیه خودش HCO₃ اضافه را دفع می‌کند.'],
    ['CO₂', 'تزریق خون حجیم آلکالوز می‌دهد؛ سیترات در کبد به بی‌کربنات تبدیل می‌شود.'],
    ['CO₂', 'جبران تنفسی آلکالوز متابولیک محدود است؛ PCO₂ به ندرت از ۵۵ بالاتر می‌رود.'],
    ['CO₂', 'تنفس در کیسه کاغذی دیگر توصیه نمی‌شود؛ ممکن است آمبولی یا سکته قلبی را پنهان کند.'],
    ['VBG', 'PCO₂ وریدی کمتر از ۴۵ هیپرکاپنی شریانی را تقریباً رد می‌کند.'],
    ['VBG', 'pH وریدی حدود ۰٫۰۳ تا ۰٫۰۵ پایین‌تر و PCO₂ وریدی حدود ۳ تا ۸ بالاتر از شریانی است.'],
    ['VBG', 'PO₂ وریدی هیچ اطلاعی از ریه نمی‌دهد؛ برای اکسیژناسیون پالس اکسیمتر یا ABG.'],
    ['VBG', 'هپارین زیاد یا سرنگ بزرگ نیمه‌پر: PCO₂ و HCO₃ کاذب پایین (اسیدوز متابولیک کاذب).'],
    ['VBG', 'حباب هوا PCO₂ را پایین و PO₂ را به سمت ۱۵۰ می‌کشد؛ فوراً خارجش کن.'],
    ['VBG', 'اگر نمونه بیش از ۱۰ تا ۱۵ دقیقه تا آنالیز فاصله دارد، روی یخ بگذار.'],
    ['VBG', 'خون تیره و بی‌ضربان که با کشیدن پیستون می‌آید، وریدی است (مگر در شوک یا ایست).'],
    ['VBG', 'تست آلن: برگشت رنگ کمتر از ۱۰ ثانیه یعنی گردش جانبی اولنار کافی است.'],
    ['VBG', 'در نوزاد، PaO₂ هدف ۵۰ تا ۸۰ است؛ اکسیژن زیاد رتینوپاتی و آسیب ریه می‌دهد.'],
    ['VBG', 'PaCO₂ زیر ۲۵ در نوزاد نارس خطر PVL و کری دارد.'],
    ['VBG', 'ساکاروز ۲۴٪ حدود ۲ دقیقه پیش از نمونه‌گیری نوزاد؛ همراه مکیدن اثرش بیشتر است.'],
    ['VBG', 'در CBG از پشت پاشنه نمونه نگیر؛ سطح داخلی یا خارجی پاشنه گرم‌شده.'],
    ['', 'اشتباه‌هایت هدر نمی‌روند؛ در بخش «تمرین» دوباره پرسیده می‌شوند تا ماندگار شوند.'],
    ['', 'روزی ۵ دقیقه تمرین منظم از یک جلسه طولانی در هفته ماندگارتر است.'],
    ['', 'مسئله‌های محاسباتی را با عبارت هم می‌توانی جواب بدهی، مثلاً <bdi dir="ltr">0.21*713-40/0.8</bdi>'],
    ['', 'در بخش ابزارها، تفسیرگر ABG هر گاز خون را قدم‌به‌قدم برایت باز می‌کند.'],
    ['', 'هر سطح که تمام شود، یک کاراکتر تازه به کلکسیونت اضافه می‌شود.']
  ];
  const COLORS = { 'O₂': '#1CB0F6', pH: '#A560E8', AG: '#FF9600', 'CO₂': '#FF4B8B', VBG: '#5B6CF0', '': '#12B3A8' };
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
      id: 'abg', sym: 'ABG', name: 'تفسیرگر گاز خون', color: '#12B3A8',
      get fields() {
        return [
          { k: 'mode', label: 'نوع نمونه', type: 'seg', def: 'abg', opts: [['abg', 'شریانی (ABG)'], ['vbg', 'وریدی (VBG)']] },
          { k: 'pH', label: 'pH', type: 'num', unit: '', def: 7.23 },
          { k: 'pco2', label: 'PCO₂', type: 'num', unit: 'mmHg', def: 22 },
          { k: 'hco3', label: 'HCO₃ (واقعی)', type: 'num', unit: 'mEq/L', def: 9 },
          { k: 'po2', label: 'PaO₂', type: 'num', unit: 'mmHg', def: 98, opt: true, show: v => v.mode === 'abg' },
          { k: 'fio2', label: 'FiO₂', type: 'num', unit: '%', def: 21, show: v => v.mode === 'abg' },
          { k: 'age', label: 'سن', type: 'num', unit: 'سال', def: 35, opt: true, show: v => v.mode === 'abg' },
          { k: 'na', label: 'سدیم', type: 'num', unit: 'mEq/L', def: 138, opt: true },
          { k: 'cl', label: 'کلر', type: 'num', unit: 'mEq/L', def: 100, opt: true },
          { k: 'k', label: 'پتاسیم', type: 'num', unit: 'mEq/L', def: '', opt: true },
          { k: 'alb', label: 'آلبومین', type: 'num', unit: 'g/dL', def: '', opt: true }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const r = EA.interpret({ pH: v.pH, pco2: v.pco2, hco3: v.hco3, po2: v.mode === 'abg' ? v.po2 : NaN, fio2: v.fio2 / 100, age: v.age, na: v.na, cl: v.cl, k: v.k, alb: v.alb, sample: v.mode });
        if (!r) { out.warn.push('pH، PCO₂ و HCO₃ باید عدد مثبت باشند.'); return out; }
        out.rows.push(['تفسیر اسید و باز', r.summary, HERO]);
        if (r.gas) out.rows.push(['تبادل گاز', r.gas.label + (r.gas.sev && r.gas.sev.label ? ` (${r.gas.sev.label})` : '')]);
        if (r.ag) out.rows.push(['آنیون گپ' + (ok(v.alb) ? ' اصلاح‌شده' : ''), r1(r.ag.agc) + ' mEq/L' + (r.ag.high ? ' ▲' : '')]);
        if (r.ag && ok(r.ag.delta)) out.rows.push(['نسبت دلتا', fa(r.ag.delta, 2)]);
        if (r.comp && ok(r.comp.exp)) out.rows.push(['جبران مورد انتظار', `PCO₂ ≈ ${r1(r.comp.lo)} تا ${r1(r.comp.hi)} mmHg`]);
        if (r.comp && ok(r.comp.acute)) out.rows.push(['HCO₃ مورد انتظار', `حاد ${r1(r.comp.acute)} · مزمن ${r1(r.comp.chronic)}`]);
        if (r.gas && r.gas.room) out.rows.push(['گرادیان A–a', fa(r.gas.aa, 0) + ' mmHg']);
        if (r.gas && !r.gas.room) out.rows.push(['PaO₂/FiO₂', fa(r.gas.pf, 0)]);
        out.rows.push(['[H⁺] از pH', fa(r.valid.hm, 0) + ' nEq/L']);
        out.steps = r.steps; out.warn = r.warn; out.ok = r.notes;
        out.ok.push('ABG را همیشه کنار بالین بیمار تفسیر کن؛ این ابزار جایگزین قضاوت بالینی نیست.');
        return out;
      }
    },
    {
      id: 'ag', sym: 'AG', name: 'آنیون گپ و شکاف‌ها', color: '#FF9600',
      get fields() {
        return [
          { k: 'mode', label: 'محاسبه', type: 'seg', def: 'ag', opts: [['ag', 'آنیون گپ سرم'], ['osm', 'شکاف اسمولار'], ['uag', 'آنیون گپ ادرار']] },
          { k: 'na', label: 'سدیم', type: 'num', unit: 'mEq/L', def: 140, show: v => v.mode !== 'uag' },
          { k: 'cl', label: 'کلر', type: 'num', unit: 'mEq/L', def: 100, show: v => v.mode === 'ag' },
          { k: 'hco3', label: 'HCO₃', type: 'num', unit: 'mEq/L', def: 12, show: v => v.mode === 'ag' },
          { k: 'k', label: 'پتاسیم', type: 'num', unit: 'mEq/L', def: '', opt: true, show: v => v.mode === 'ag' },
          { k: 'alb', label: 'آلبومین', type: 'num', unit: 'g/dL', def: '', opt: true, show: v => v.mode === 'ag' },
          { k: 'glu', label: 'قند', type: 'num', unit: 'mg/dL', def: 100, show: v => v.mode === 'osm' },
          { k: 'bun', label: 'BUN', type: 'num', unit: 'mg/dL', def: 14, show: v => v.mode === 'osm' },
          { k: 'mosm', label: 'اسمولالیته اندازه‌گیری‌شده', type: 'num', unit: 'mOsm/kg', def: 320, show: v => v.mode === 'osm' },
          { k: 'etoh', label: 'اتانول خون', type: 'num', unit: 'mg/dL', def: '', opt: true, show: v => v.mode === 'osm' },
          { k: 'una', label: 'سدیم ادرار', type: 'num', unit: 'mEq/L', def: 40, show: v => v.mode === 'uag' },
          { k: 'uk', label: 'پتاسیم ادرار', type: 'num', unit: 'mEq/L', def: 30, show: v => v.mode === 'uag' },
          { k: 'ucl', label: 'کلر ادرار', type: 'num', unit: 'mEq/L', def: 100, show: v => v.mode === 'uag' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'osm') {
          const c = F.osm(v.na, v.glu, v.bun), et = ok(v.etoh) ? v.etoh / 3.7 : 0, g = v.mosm - c - et;
          out.rows.push(['شکاف اسمولار', fa(g, 0) + ' mOsm/kg', HERO], ['اسمولالیته محاسبه‌شده', fa(c, 0) + ' mOsm/kg']);
          out.steps.push(`${n(2)} × ${fa(v.na)} + ${fa(v.glu)} ÷ ${n(18)} + ${fa(v.bun)} ÷ ${n(2.8)} = <b>${fa(c, 0)}</b>`);
          if (et) out.steps.push(`سهم اتانول = ${fa(v.etoh)} ÷ ${n(3.7)} = ${fa(et, 0)}`);
          out.steps.push(`شکاف = ${fa(v.mosm)} − ${fa(c, 0)}${et ? ' − ' + fa(et, 0) : ''} = <b>${fa(g, 0)}</b>`);
          if (g > 10) out.warn.push('شکاف اسمولار بالاست؛ در اسیدوز با گپ بالا به متانول یا اتیلن گلیکول فکر کن (فومپیزول و دیالیز).');
          else out.ok.push('شکاف طبیعی است (کمتر از ۱۰)؛ ولی در ساعت‌های دیر مسمومیت، الکل متابولیزه شده و شکاف ممکن است طبیعی باشد.');
          return out;
        }
        if (v.mode === 'uag') {
          const u = F.uag(v.una, v.uk, v.ucl);
          out.rows.push(['آنیون گپ ادرار', fa(u) + ' mEq/L', HERO], ['تفسیر', u < 0 ? 'منفی: دفع آمونیوم سالم؛ علت گوارشی (اسهال)' : 'مثبت: دفع آمونیوم مختل؛ اسیدوز توبولار کلیوی']);
          out.steps.push(`(${fa(v.una)} + ${fa(v.uk)}) − ${fa(v.ucl)} = <b>${fa(u)}</b>`);
          out.ok.push('فقط در اسیدوز متابولیک با آنیون گپ طبیعی و وقتی سدیم ادرار بالای ۲۰ است معتبر است.');
          return out;
        }
        const ag = F.ag(v.na, v.cl, v.hco3), hasAlb = ok(v.alb), agc = hasAlb ? F.agCorr(ag, v.alb) : ag;
        out.rows.push([hasAlb ? 'آنیون گپ اصلاح‌شده' : 'آنیون گپ', r1(agc) + ' mEq/L', HERO]);
        out.steps.push(`${fa(v.na)} − (${fa(v.cl)} + ${fa(v.hco3)}) = <b>${r1(ag)}</b> (طبیعی حدود ۱۲ ± ۴)`);
        if (hasAlb) { out.rows.push(['آنیون گپ خام', r1(ag) + ' mEq/L']); out.steps.push(`${r1(ag)} + ${n(2.5)} × (${n(4)} − ${fa(v.alb)}) = <b>${r1(agc)}</b>`); }
        if (ok(v.k)) { const ak = F.ag(v.na, v.cl, v.hco3, v.k); out.rows.push(['با پتاسیم (روش کتاب)', r1(ak) + ' mEq/L (طبیعی ۱۰ تا ۲۰)']); }
        if (agc > 16 && v.hco3 < 24) {
          const d = F.delta(agc, v.hco3), ch = F.hcoCorr(agc, v.hco3);
          out.rows.push(['نسبت دلتا', fa(d, 2)], ['HCO₃ اصلاح‌شده', r1(ch) + ' mEq/L']);
          out.steps.push(`دلتا = (${r1(agc)} − ${n(12)}) ÷ (${n(24)} − ${fa(v.hco3)}) = <b>${fa(d, 2)}</b>`, `HCO₃ اصلاح‌شده = ${fa(v.hco3)} + (${r1(agc)} − ${n(12)}) = <b>${r1(ch)}</b>`);
          if (24 - v.hco3 < 4) out.ok.push('افت HCO₃ کمتر از ۴ است؛ نسبت دلتا قابل اعتماد نیست.');
          else if (d < 1) out.warn.push('نسبت دلتا کمتر از ۱: اسیدوز با گپ طبیعی هم همراه است (مثلاً اسهال یا سالین زیاد).');
          else if (d > 2) out.warn.push('نسبت دلتا بیشتر از ۲: آلکالوز متابولیک هم‌زمان (مثلاً استفراغ) یا HCO₃ بالای قبلی.');
          else out.ok.push('نسبت دلتا بین ۱ و ۲: اسیدوز متابولیک خالص با گپ بالا.');
          out.ok.push('GOLDMARK: گلیکول‌ها، ۵-اکسوپرولین، ال-لاکتات، دی-لاکتات، متانول، آسپرین، نارسایی کلیه، کتواسیدوز.');
        } else if (agc > 20) out.warn.push('آنیون گپ بیش از ۲۰ با HCO₃ غیرپایین: اسیدوز پنهان + آلکالوز متابولیک.');
        else if (agc <= 16 && v.hco3 < 22) out.ok.push('اسیدوز با گپ طبیعی (هیپرکلرمیک): اسهال، RTA، سالین فراوان، استازولامید؛ آنیون گپ ادرار را حساب کن.');
        if (!hasAlb) out.ok.push('آلبومین پایین گپ را کاذب پایین نشان می‌دهد؛ اگر داری، واردش کن.');
        return out;
      }
    },
    {
      id: 'comp', sym: 'Δ', name: 'جبران مورد انتظار', color: '#A560E8',
      get fields() {
        return [
          { k: 'mode', label: 'اختلال اولیه', type: 'seg', def: 'macid', opts: [['macid', 'اسیدوز متابولیک'], ['malk', 'آلکالوز متابولیک'], ['racid', 'اسیدوز تنفسی'], ['ralk', 'آلکالوز تنفسی']] },
          { k: 'hco3', label: 'HCO₃ بیمار', type: 'num', unit: 'mEq/L', def: 14 },
          { k: 'pco2', label: 'PCO₂ بیمار', type: 'num', unit: 'mmHg', def: 30 }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'macid' || v.mode === 'malk') {
          const acid = v.mode === 'macid';
          const e = acid ? F.winter(v.hco3) : F.malk(v.hco3), tol = acid ? 2 : 5;
          out.rows.push(['PCO₂ مورد انتظار', `${r1(e - tol)} تا ${r1(e + tol)} mmHg`, HERO]);
          out.steps.push(acid ? `وینتر: ${n(1.5)} × ${fa(v.hco3)} + ${n(8)} = <b>${r1(e)}</b> ± ${n(2)}` : `${n(40)} + ${n(0.7)} × (${fa(v.hco3)} − ${n(24)}) = <b>${r1(e)}</b> ± ${n(5)} (یا HCO₃ + ۱۵ = ${r1(v.hco3 + 15)})`);
          const verdict = v.pco2 > e + tol ? 'اسیدوز تنفسی همراه' : v.pco2 < e - tol ? 'آلکالوز تنفسی همراه' : 'جبران مناسب (اختلال ساده)';
          out.rows.push(['PCO₂ بیمار', fa(v.pco2) + ' mmHg'], ['نتیجه', verdict]);
          if (acid && v.hco3 >= 22) out.warn.push('HCO₃ پایین نیست؛ مطمئنی اسیدوز متابولیک وجود دارد؟');
          if (!acid && v.hco3 <= 26) out.warn.push('HCO₃ بالا نیست؛ مطمئنی آلکالوز متابولیک وجود دارد؟');
          if (acid) out.ok.push('قاعده سریع: PCO₂ ≈ دو رقم اعشار pH (در اسیدوز متابولیک ساده).');
          else out.ok.push('جبران تنفسی آلکالوز محدود است؛ PCO₂ به ندرت از ۵۵ بالاتر می‌رود.');
          return out;
        }
        const up = v.mode === 'racid';
        const a = up ? F.racid(v.pco2, false) : F.ralk(v.pco2, false), c = up ? F.racid(v.pco2, true) : Math.max(12, F.ralk(v.pco2, true));
        out.rows.push(['HCO₃ مورد انتظار', `حاد ${r1(a)} · مزمن ${r1(c)} mEq/L`, HERO]);
        out.steps.push(up ? `حاد: ${n(24)} + ${n(0.1)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(a)}</b>` : `حاد: ${n(24)} − ${n(0.2)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(a)}</b>`,
          up ? `مزمن: ${n(24)} + ${n(0.4)} × (${fa(v.pco2)} − ${n(40)}) = <b>${r1(c)}</b>` : `مزمن: ${n(24)} − ${n(0.4)} × (${n(40)} − ${fa(v.pco2)}) = <b>${r1(c)}</b>`);
        let verdict;
        if (up) verdict = v.hco3 < a - 3 ? 'اسیدوز متابولیک همراه' : v.hco3 > c + 2 ? 'آلکالوز متابولیک همراه' : v.hco3 <= a + 3 ? 'حاد' : v.hco3 >= c - 2 ? 'مزمن (جبران‌شده)' : 'حاد روی مزمن یا در حال جبران';
        else verdict = v.hco3 > a + 3 ? 'آلکالوز متابولیک همراه' : v.hco3 < c - 2 ? 'اسیدوز متابولیک همراه' : v.hco3 >= a - 3 ? 'حاد' : v.hco3 <= c + 2 ? 'مزمن' : 'در حال جبران';
        out.rows.push(['HCO₃ بیمار', fa(v.hco3) + ' mEq/L'], ['نتیجه', verdict]);
        if (up) out.rows.push(['pH مورد انتظار', `حاد ${fa(F.racidPh(v.pco2, false), 2)} · مزمن ${fa(F.racidPh(v.pco2, true), 2)}`]);
        if (up && v.pco2 <= 45) out.warn.push('PCO₂ بالا نیست؛ مطمئنی اسیدوز تنفسی وجود دارد؟');
        if (!up && v.pco2 >= 35) out.warn.push('PCO₂ پایین نیست؛ مطمئنی آلکالوز تنفسی وجود دارد؟');
        out.ok.push('رمز: «۱-۴ بالا، ۲-۴ پایین» به ازای هر ۱۰ mmHg تغییر PCO₂.');
        return out;
      }
    },
    {
      id: 'oxy', sym: 'O₂', name: 'اکسیژناسیون', color: '#1CB0F6',
      get fields() {
        return [
          { k: 'fio2', label: 'FiO₂', type: 'num', unit: '%', def: 21 },
          { k: 'po2', label: 'PaO₂', type: 'num', unit: 'mmHg', def: 70 },
          { k: 'pco2', label: 'PaCO₂', type: 'num', unit: 'mmHg', def: 35 },
          { k: 'age', label: 'سن', type: 'num', unit: 'سال', def: 50 },
          { k: 'patm', label: 'فشار هوا', type: 'num', unit: 'mmHg', def: 760 },
          { k: 'hb', label: 'هموگلوبین', type: 'num', unit: 'g/dL', def: '', opt: true },
          { k: 'sao2', label: 'SaO₂', type: 'num', unit: '%', def: '', opt: true }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        const f = v.fio2 / 100, pa = F.pAO2(f, v.pco2, v.patm), aa = pa - v.po2, pf = v.po2 / f, room = Math.abs(v.fio2 - 21) < 0.5;
        const e = F.aaExp(v.age);
        out.rows.push([room ? 'گرادیان A–a' : 'نسبت PaO₂/FiO₂', room ? fa(aa, 0) + ' mmHg' : fa(pf, 0), HERO]);
        out.rows.push(['PAO₂', fa(pa, 0) + ' mmHg']);
        if (room) out.rows.push(['A–a مورد انتظار برای سن', '≤ ' + fa(e, 0) + ' mmHg'], ['نسبت P/F', fa(pf, 0)]);
        else out.rows.push(['گرادیان A–a', fa(aa, 0) + ' mmHg'], ['PaO₂ مورد انتظار (۵ × FiO₂)', '≈ ' + fa(F.expPao2(v.fio2), 0) + ' mmHg']);
        out.steps.push(`PAO₂ = ${fa(f, 2)} × (${fa(v.patm)} − ${n(47)}) − ${fa(v.pco2)} ÷ ${n(0.8)} = <b>${fa(pa, 0)}</b>`, `A–a = ${fa(pa, 0)} − ${fa(v.po2)} = <b>${fa(aa, 0)}</b>`, `P/F = ${fa(v.po2)} ÷ ${fa(f, 2)} = <b>${fa(pf, 0)}</b>`);
        if (room) {
          const s = F.hypoxSev(v.po2);
          if (s) out.rows.push(['شدت هیپوکسمی', s.label]);
          if (aa > e + 2) out.warn.push('گرادیان A–a بالاست: مشکل در خود ریه (V/Q، شانت یا انتشار).');
          else if (v.po2 < 80) out.ok.push('هیپوکسمی با A–a طبیعی: هیپوونتیلاسیون یا اکسیژن کم هوای دمی (ارتفاع).');
          if (v.po2 + v.pco2 > 150) out.warn.push('در هوای اتاق PaO₂ + PaCO₂ نباید از ۱۴۰ تا ۱۵۰ بیشتر شود؛ حباب یا اکسیژن؟');
        } else {
          const ps = F.pfSev(pf);
          out.rows.push(['اختلال اکسیژناسیون', ps ? ps.label : 'ندارد (P/F بیش از ۳۰۰)']);
          if (ps) out.ok.push('اگر شروع حاد، ارتشاح دوطرفه و رد علت قلبی با PEEP ≥ ۵ باشد، این همان طبقه‌بندی ARDS (برلین) است.');
        }
        if (ok(v.hb) && ok(v.sao2)) {
          const c = F.cao2(v.hb, v.sao2, v.po2);
          out.rows.push(['محتوای اکسیژن (CaO₂)', fa(c, 1) + ' mL/dL']);
          out.steps.push(`CaO₂ = ${n(1.34)} × ${fa(v.hb)} × ${fa(v.sao2 / 100, 2)} + ${n(0.003)} × ${fa(v.po2)} = <b>${fa(c, 1)}</b> (طبیعی ۱۸ تا ۲۰)`);
          if (c < 15) out.warn.push('محتوای اکسیژن کم است؛ اگر علتش کم‌خونی است، اکسیژن بیشتر کمکی نمی‌کند.');
        }
        if (v.po2 > pa + 5) out.warn.push('PaO₂ از PAO₂ بیشتر است که ممکن نیست؛ FiO₂ را بررسی کن.');
        out.ok.push('در سطح دریا فشار هوا ۷۶۰ است؛ برای ارتفاع (مثلاً تهران حدود ۶۶۰) عدد را تغییر بده.');
        return out;
      }
    },
    {
      id: 'bicarb', sym: 'HCO₃', name: 'بی‌کربنات', color: '#5B6CF0',
      get fields() {
        return [
          { k: 'mode', label: 'بیمار', type: 'seg', def: 'adult', opts: [['adult', 'بزرگسال (از روی HCO₃)'], ['neo', 'نوزاد (از روی BE)']] },
          { k: 'w', label: 'وزن', type: 'num', unit: 'kg', def: 70 },
          { k: 'hco3', label: 'HCO₃ فعلی', type: 'num', unit: 'mEq/L', def: 6, show: v => v.mode === 'adult' },
          { k: 'target', label: 'HCO₃ هدف', type: 'num', unit: 'mEq/L', def: 12, show: v => v.mode === 'adult' },
          { k: 'be', label: 'BE (کمبود باز)', type: 'num', unit: 'mEq/L', def: -12, show: v => v.mode === 'neo' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        let d;
        if (v.mode === 'adult') {
          d = F.bicarbDef(v.w, v.hco3, v.target);
          out.steps.push(`${n(0.5)} × ${fa(v.w)} × (${fa(v.target)} − ${fa(v.hco3)}) = <b>${fa(d, 0)}</b> mEq`);
          if (v.target > 15) out.warn.push('هدف معمولاً رفع اسیدمی تهدیدکننده است (HCO₃ حدود ۱۲ تا ۱۵ یا pH بالای ۷٫۲)، نه رساندن به حد طبیعی.');
          out.ok.push('اندیکاسیون: pH کمتر از ۷٫۱ (کتاب)، به‌ویژه با آسیب حاد کلیه یا از دست رفتن HCO₃ (اسهال، RTA). در DKA فقط اگر pH کمتر از ۶٫۹.');
        } else {
          d = F.bicarbBE(v.w, v.be);
          out.steps.push(`${fa(Math.abs(v.be))} × ${fa(v.w)} × ${n(0.3)} = <b>${fa(d, 1)}</b> mEq`);
          out.ok.push('در نوزاد روتین نیست؛ اول اکسیژن‌رسانی و پرفیوژن. رقیق ۱:۱ با آب مقطر (۴٫۲٪) و آهسته طی ۳۰ تا ۶۰ دقیقه.');
          if (v.be > -2) out.warn.push('BE منفی‌تر از −۲ نیست.');
        }
        d = Math.max(0, d);
        out.rows.push(['کل بی‌کربنات محاسبه‌شده', fa(d, v.mode === 'neo' ? 1 : 0) + ' mEq', HERO], ['نیمه اول پیشنهادی', fa(d / 2, 1) + ' mEq'], ['حجم ۸٫۴٪ (۱ mEq/mL)', fa(d, 1) + ' mL'], ['حجم ۴٫۲٪ (۰٫۵ mEq/mL)', fa(d * 2, 1) + ' mL']);
        out.warn.push('بی‌کربنات CO₂ تولید می‌کند؛ اگر بیمار نمی‌تواند تهویه‌اش را بالا ببرد (اسیدوز مختلط)، اسیدوز تنفسی بدتر می‌شود.');
        out.ok.push('پتاسیم و کلسیم یونیزه را پایش کن؛ پس از هر نوبت گاز خون را تکرار کن.');
        return out;
      }
    },
    {
      id: 'conv', sym: '⇄', name: 'تبدیل‌ها', color: '#58CC02',
      get fields() {
        return [
          { k: 'mode', label: 'تبدیل', type: 'seg', def: 'ph', opts: [['ph', 'pH ↔ H⁺'], ['kpa', 'kPa ↔ mmHg'], ['vbg', 'VBG ← ABG تقریبی'], ['lac', 'لاکتات']] },
          { k: 'val', label: 'مقدار', type: 'num', unit: '', def: 7.3, show: v => v.mode !== 'vbg' },
          { k: 'pH', label: 'pH وریدی', type: 'num', unit: '', def: 7.3, show: v => v.mode === 'vbg' },
          { k: 'pco2', label: 'PCO₂ وریدی', type: 'num', unit: 'mmHg', def: 50, show: v => v.mode === 'vbg' },
          { k: 'hco3', label: 'HCO₃ وریدی', type: 'num', unit: 'mEq/L', def: 25, show: v => v.mode === 'vbg' }
        ];
      },
      calc(v) {
        const out = { rows: [], steps: [], warn: [], ok: [] };
        if (v.mode === 'ph') {
          if (v.val < 14) {
            const h = F.hFromPh(v.val);
            out.rows.push(['[H⁺]', fa(h, 1) + ' nEq/L', HERO], ['قاعده ۸۰ منهای اعشار', fa(F.h80(v.val)) + ' nEq/L']);
            out.steps.push(`[H⁺] = ۱۰<sup>(۹ − ${fa(v.val, 2)})</sup> = <b>${fa(h, 1)}</b>`);
            if (v.val < 7.2 || v.val > 7.5) out.ok.push('قاعده ۸۰ منهای اعشار فقط بین ۷٫۲۰ و ۷٫۵۰ دقیق است.');
          } else {
            const p = F.phFromH(v.val);
            out.rows.push(['pH', fa(p, 2), HERO]);
            out.steps.push(`pH = ۹ − log(${fa(v.val)}) = <b>${fa(p, 2)}</b>`);
          }
          out.ok.push('عدد کمتر از ۱۴ را pH و بزرگ‌تر را [H⁺] (nEq/L) در نظر می‌گیرم.');
          return out;
        }
        if (v.mode === 'kpa') {
          out.rows.push(['اگر kPa است ← mmHg', fa(F.mmhg(v.val), 1), HERO], ['اگر mmHg است ← kPa', fa(F.kpa(v.val), 2)]);
          out.ok.push('۱ kPa = ۷٫۵ mmHg. نکته کتاب «FiO₂ (٪) منهای PaO₂ کمتر از ۱۰» در اصل به kPa است.');
          return out;
        }
        if (v.mode === 'lac') {
          out.rows.push(['اگر mg/dL است ← mmol/L', fa(v.val / 9.01, 2), HERO], ['اگر mmol/L است ← mg/dL', fa(v.val * 9.01, 1)]);
          out.ok.push('لاکتات طبیعی کمتر از ۲ mmol/L (حدود ۱۸ mg/dL)؛ بالای ۴ در سپسیس یعنی خطر بالا.');
          return out;
        }
        const a = F.vbgToAbg({ pH: v.pH, pco2: v.pco2, hco3: v.hco3 });
        out.rows.push(['pH شریانی تقریبی', `${fa(v.pH + 0.03, 2)} تا ${fa(v.pH + 0.05, 2)}`, HERO], ['PCO₂ شریانی تقریبی', `${fa(v.pco2 - 8, 0)} تا ${fa(v.pco2 - 3, 0)} mmHg`], ['HCO₃ شریانی تقریبی', `${fa(v.hco3 - 2, 0)} تا ${fa(v.hco3 - 1, 0)} mEq/L`]);
        out.steps.push(`تخمین میانه: pH ≈ ${fa(a.pH, 2)}، PCO₂ ≈ ${fa(a.pco2, 0)}، HCO₃ ≈ ${fa(a.hco3, 1)}`);
        if (v.pco2 < 45) out.ok.push('PCO₂ وریدی کمتر از ۴۵: هیپرکاپنی شریانی تقریباً رد می‌شود.');
        out.warn.push('در شوک یا پرفیوژن ضعیف این تبدیل قابل اعتماد نیست؛ برای اکسیژناسیون از VBG استفاده نکن.');
        return out;
      }
    }
  ];

  /* ---------- اطلاعات نمایشی هر ابزار: توضیح، بیمار نمونه، گروه فیلدها، گام دکمه‌ها، شدت ---------- */
  const GROUPS = { l: () => '🧪 گاز خون', o: () => '🫁 اکسیژن و بیمار', e: () => '🧂 الکترولیت‌ها (برای آنیون گپ)', p: () => '👤 بیمار', u: () => '🚽 ادرار' };
  const S_ = (lv, t) => [lv, t];
  const phSev = pH => pH < 7.25 ? S_('sev', 'اسیدمی شدید') : pH < 7.35 ? S_('mod', 'اسیدمی') : pH > 7.55 ? S_('sev', 'آلکالمی شدید') : pH > 7.45 ? S_('mild', 'آلکالمی') : S_('ok', 'pH طبیعی');
  const META = {
    abg: {
      desc: 'تفسیر گام‌به‌گام: راستی‌آزمایی، اختلال اولیه، جبران، آنیون گپ، دلتا و تبادل گاز',
      preset: { mode: 'abg', pH: 7.39, pco2: 24, hco3: 14, po2: 82, fio2: 21, age: 70, na: 140, cl: 104, k: 4.2, alb: 3.4 },
      group: { po2: 'o', fio2: 'o', age: 'o', na: 'e', cl: 'e', k: 'e', alb: 'e' },
      step: { pH: 0.01, pco2: 1, hco3: 0.5, po2: 1, fio2: 1, age: 1, na: 1, cl: 1, k: 0.1, alb: 0.1 },
      sev: v => (ok(v.pH) ? phSev(v.mode === 'vbg' ? v.pH + 0.04 : v.pH) : null)
    },
    ag: {
      desc: 'آنیون گپ و اصلاح با آلبومین، دلتا، شکاف اسمولار و آنیون گپ ادرار',
      preset: { mode: 'ag', na: 136, cl: 99, hco3: 9.5, k: 4.5, alb: 3.2 },
      group: { una: 'u', uk: 'u', ucl: 'u' },
      step: { na: 1, cl: 1, hco3: 0.5, k: 0.1, alb: 0.1, glu: 10, bun: 1, mosm: 1, etoh: 10, una: 1, uk: 1, ucl: 1 },
      sev(v) {
        if (v.mode === 'ag') { const a = ok(v.alb) ? F.agCorr(F.ag(v.na, v.cl, v.hco3), v.alb) : F.ag(v.na, v.cl, v.hco3); return a > 20 ? S_('sev', 'گپ بالا') : a > 16 ? S_('mild', 'گپ کمی بالا') : S_('ok', 'گپ طبیعی'); }
        if (v.mode === 'osm') { const g = v.mosm - F.osm(v.na, v.glu, v.bun) - (ok(v.etoh) ? v.etoh / 3.7 : 0); return g > 20 ? S_('sev', 'شکاف بالا') : g > 10 ? S_('mod', 'شکاف مرزی تا بالا') : S_('ok', 'شکاف طبیعی'); }
        return F.uag(v.una, v.uk, v.ucl) < 0 ? S_('ok', 'منفی: گوارشی') : S_('mod', 'مثبت: کلیوی');
      }
    },
    comp: {
      desc: 'وینتر، ۰٫۷ برای آلکالوز، و قانون ۱-۴ / ۲-۴ برای اختلالات تنفسی',
      preset: { mode: 'racid', hco3: 25, pco2: 66 },
      group: {},
      step: { hco3: 0.5, pco2: 1 },
      sev: () => null
    },
    oxy: {
      desc: 'PAO₂، گرادیان A–a با سن، نسبت P/F و محتوای اکسیژن',
      preset: { fio2: 21, po2: 77, pco2: 29.3, age: 24, patm: 760, hb: 13, sao2: 93.7 },
      group: { age: 'p', patm: 'o', fio2: 'o', hb: 'p', sao2: 'l' },
      step: { fio2: 1, po2: 1, pco2: 1, age: 1, patm: 10, hb: 0.5, sao2: 1 },
      sev(v) {
        const room = Math.abs(v.fio2 - 21) < 0.5;
        if (room) { const s = F.hypoxSev(v.po2); return s ? S_(s.key, 'هیپوکسمی ' + s.label) : S_('ok', 'اکسیژناسیون طبیعی'); }
        const s = F.pfSev(v.po2 / (v.fio2 / 100));
        return s ? S_(s.key, 'اختلال اکسیژناسیون') : S_('ok', 'P/F قابل قبول');
      }
    },
    bicarb: {
      desc: 'کمبود بی‌کربنات بزرگسال و دوز نوزادی از روی BE',
      preset: { mode: 'adult', w: 70, hco3: 5, target: 12 },
      group: { w: 'p' },
      step: { w: 1, hco3: 0.5, target: 1, be: 1 },
      sev: () => null
    },
    conv: { desc: 'pH و [H⁺]، kPa و mmHg، برآورد شریانی از VBG، لاکتات', preset: { mode: 'vbg', pH: 7.28, pco2: 52, hco3: 24 }, group: {}, step: { val: 0.01, pH: 0.01, pco2: 1, hco3: 0.5 }, sev: () => null }
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
    return `<label class="fld" for="${id}"><span class="fld__l">${f.label}${f.unit ? ` <small dir="ltr">${f.unit}</small>` : ''}${f.opt ? ' <small class="fld__opt">اختیاری</small>' : ''}</span>
      <span class="nstep"><button type="button" class="nstep__b" data-step="1" data-sk="${f.k}" aria-label="بیشتر">+</button><input id="${id}" type="text" inputmode="decimal" dir="ltr" data-tk="${f.k}" value="${val}" autocomplete="off"><button type="button" class="nstep__b" data-step="-1" data-sk="${f.k}" aria-label="کمتر">−</button></span></label>`;
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
    if (c.miss) return `<div class="tres tres--empty">${EA.ui.mascot('think', t.color, 64)}<p>«${c.miss.label}» را وارد کن تا نتیجه ساخته شود.</p></div>`;
    const { r, hero, rows, sev } = c;
    return `<div class="tres">
      ${hero ? `<div class="thero">${sev ? `<span class="sevc sevc--${sev[0]}">${sev[1]}</span>` : ''}<small>${hero[0]}</small><b>${EA.ui.iso(hero[1])}</b></div>` : ''}
      ${rows.length ? `<div class="ttiles">${rows.map(x => `<div class="ttile"><small>${x[0]}</small><b>${EA.ui.iso(x[1])}</b></div>`).join('')}</div>` : ''}
      ${r.warn.map(s => `<div class="note note--warn">⚠️ ${s}</div>`).join('')}
      ${r.steps.length ? `<div class="tres__h">راه‌حل گام‌به‌گام</div><ol class="tsteps">${r.steps.map(s => `<li>${EA.ui.iso(s)}</li>`).join('')}</ol>` : ''}
      ${r.ok.map(s => `<div class="note">💡 ${s}</div>`).join('')}
    </div>`;
  }
  function sticky(t) {
    const c = compute(t);
    return c.hero ? `${c.sev ? `<span class="sevc sevc--${c.sev[0]}">${c.sev[1]}</span>` : ''}<span class="tsticky__v"><small>${c.hero[0]}</small><b>${EA.ui.iso(c.hero[1])}</b></span><span class="tsticky__go">جزئیات ↓</span>` : '';
  }

  function view() {
    const t = tool(), v = values(t);
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>ابزارهای گاز خون</h1><p>عددهای بیمار را وارد کن؛ تفسیر، شدت و راه‌حل گام‌به‌گام همان لحظه ساخته می‌شود.</p></header>
      <div class="tpick">${TOOLS.map(x => `<button class="tpc ${x.id === cur ? 'is-on' : ''}" style="--tc:${x.color}" data-tool="${x.id}"><span class="tpc__s">${x.sym}</span><b>${x.name}</b><small>${META[x.id].desc}</small></button>`).join('')}</div>
      <div class="tpanel">
        <div class="tpanel__h"><span class="tpc__s tpc__s--lg">${t.sym}</span><div><h2>${t.name}</h2><small>${META[t.id].desc}</small></div>
          <div class="tpanel__act"><button type="button" class="btn btn--ghost btn--sm" data-tact="preset">🧪 بیمار نمونه</button><button type="button" class="btn btn--ghost btn--sm" data-tact="reset" aria-label="بازنشانی">↺</button></div></div>
        <div class="tgrid">
          <form class="tform" onsubmit="return false">${form(t, v)}</form>
          <div class="tout" aria-live="polite">${result(t)}</div>
        </div>
      </div>
      <button type="button" class="tsticky" data-tact="jump">${sticky(t)}</button>
      <p class="disclaimer">⚕️ این ابزار برای آموزش است. تصمیم نهایی را با بالین بیمار، پزشک معالج و پروتکل بیمارستان خودت تطبیق بده.</p>
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
        if (ta.dataset.tact === 'preset') { vals[t.id] = Object.assign({}, values(t), META[t.id].preset); EA.ui.sfx('select'); EA.ui.toast('بیمار نمونه بارگذاری شد 🧪'); }
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
