/* آکادمی بالینی — شیفت اورژانس: کیس‌های ترکیبی ICU (Grand Rounds)
 * هر کیس یک بیمار بدحال است که هر سه مهارت را با هم می‌خواهد:
 *   d: 'yona'  💧 تشخیص و اصلاح الکترولیت      (فرمول‌ها و پروتکل‌های همان دوره یونا)
 *   d: 'homa'  🫁 تفسیر گاز خون و اسید-باز      (روش گام‌به‌گام دوره هما)
 *   d: 'negar' 🔍 معاینه فیزیکی تغذیه‌محور NFPE  (معیارهای Academy/ASPEN دوره نگار؛ تصویرها از data-negar.js)
 *   d: 'all'   🧠 جمع‌بندی و تصمیم نهایی
 * انواع مرحله: mcq (گزینه اول درست است و هنگام نمایش جابه‌جا می‌شود)، tf، num (ans و tol)، order (ترتیب درست).
 * lab: کارت آزمایش (pH، pco2، po2، hco3، na، k، cl، ...)؛ fig: { k: کلید تصویر نگار، l: برچسب، cap: توضیح }.
 * دسترسی: فقط برای دارندگان حداقل ۲ دوره (پلن آموزشی یا Pro) یا پکیج الماس VIP. */
window.ACADEMY_GRAND_ROUNDS = {
  version: 1,
  cases: [
    /* ================= کیس ۱: سندرم ریفیدینگ ================= */
    {
      id: 'gr-refeed',
      title: 'ضعف ناگهانی روز سوم تغذیه: سندرم ریفیدینگ',
      who: 'مرد ۵۲ ساله، مصرف مزمن الکل، پنومونی آسپیراسیون، NG فیدینگ از روز اول',
      domains: ['negar', 'yona', 'homa'],
      brief: 'سه ماه است که تقریباً چیزی نخورده و وزنش از ۷۰ به ۵۸ کیلوگرم رسیده. در ICU برای پنومونی آسپیراسیون بستری شده و از روز اول، تغذیه لوله‌ای با ۲۵ kcal/kg شروع شده است. روز سوم: ضعف شدید عضلات، گیجی و شکست در تست تنفس خودبه‌خودی (SBT).',
      fig: { k: 'face-s', cap: 'نمای صورت بیمار هنگام پذیرش' },
      chart: [['وزن معمول', '۷۰ kg (سه ماه پیش)'], ['وزن فعلی', '۵۸ kg'], ['دریافت', 'کمتر از ۲۵٪ نیاز در سه ماه اخیر'], ['روز سوم تغذیه', 'P ۰٫۹، K ۲٫۹، Mg ۱٫۱ mg/dL']],
      pearl: 'در بیمار پرخطر، تغذیه را آهسته (۱۰ تا ۲۰ kcal/kg) با تیامین شروع کن و فسفر، پتاسیم و منیزیم را هر ۶ تا ۱۲ ساعت بسنج؛ ضعف تنفسی روز ۲ تا ۴ تغذیه را با هیپوفسفاتمی توضیح بده تا خلافش ثابت شود.',
      steps: [
        { d: 'negar', stage: 'ارزیابی وزن', t: 'num', q: 'درصد کاهش وزن بیمار را حساب کن (وزن معمول ۷۰، فعلی ۵۸ کیلوگرم).', ans: 17.1, tol: 0.3, unit: '%', why: '(۷۰ − ۵۸) ÷ ۷۰ × ۱۰۰ = <b>۱۷٫۱٪</b>' },
        { d: 'negar', stage: 'معیار ASPEN', t: 'mcq', q: 'کاهش وزن ۱۷٪ در ۳ ماه در زمینه بیماری مزمن (مصرف الکل و سوءتغذیه طولانی) چه معنایی دارد؟', opts: ['معیار سوءتغذیه شدید (بیش از ۷٫۵٪ در ۳ ماه)', 'معیار سوءتغذیه متوسط (۵٪ در ۳ ماه)', 'کاهش وزن معنادار نیست', 'فقط در زمینه حاد ارزش دارد'], why: 'در زمینه مزمن و اجتماعی، کاهش وزن بیش از ۷٫۵٪ در ۳ ماه معیار <b>شدید</b> است (۵٪ در ۱ ماه، ۱۰٪ در ۶ ماه و ۲۰٪ در ۱ سال هم آستانه شدیدند).' },
        { d: 'negar', stage: 'معاینه صورت', t: 'mcq', q: 'در تصویر صورت، وضعیت عضله گیجگاهی و چربی دور چشم چیست؟', fig: { k: 'face-s' }, opts: ['از دست رفتن شدید عضله و چربی', 'طبیعی', 'از دست رفتن خفیف تا متوسط', 'ادم صورت'], why: 'گودی عمیق گیجگاه، فرورفتگی دور چشم با پوست شل و برجستگی استخوان‌های صورت ← از دست رفتن <b>شدید</b>. همراه با کاهش وزن، تشخیص سوءتغذیه شدید محکم می‌شود.' },
        { d: 'yona', stage: 'پیشگیری از ریفیدینگ', t: 'mcq', q: 'با این سابقه، تغذیه از ابتدا باید چگونه شروع می‌شد؟', opts: ['۱۰ تا ۲۰ kcal/kg در روز، تیامین پیش از تغذیه و پایش P، K و Mg هر ۶ تا ۱۲ ساعت', '۲۵ تا ۳۰ kcal/kg از روز اول برای جبران سریع کمبود', 'ابتدا ۷ روز ناشتا تا پایدار شدن', 'فقط سرم قندی ۱۰٪ با سرعت بالا'], why: 'بیمار پرخطر (کاهش وزن بیش از ۱۵٪، دریافت ناچیز بیش از ۱۰ روز، الکل). شروع آهسته و تیامین پیش از کربوهیدرات، جابه‌جایی ناگهانی فسفر، پتاسیم و منیزیم به داخل سلول (با ترشح انسولین) را کم می‌کند.' },
        { d: 'yona', stage: 'آزمایش روز سوم', t: 'mcq', q: 'روز سوم: P = ۰٫۹، K = ۲٫۹ و Mg = ۱٫۱ mg/dL. کدام یافته بهترین توضیح برای ضعف عضلات تنفسی است؟', lab: { kind: 'Chemistry', p: 0.9, k: 2.9, mg: 1.1, na: 136, glu: 168 }, opts: ['هیپوفسفاتمی شدید (کمبود ATP و ۲،۳-DPG)', 'هیپرگلیسمی خفیف', 'هیپوناترمی', 'هیپرکلسمی'], why: 'فسفر زیر ۱ mg/dL یعنی کمبود ATP در عضله دیافراگم و کاهش ۲،۳-DPG؛ نتیجه: ضعف تنفسی، شکست جداسازی از ونتیلاتور، رابدومیولیز و نارسایی قلب.' },
        { d: 'yona', stage: 'دوز فسفات', t: 'num', q: 'طبق پروتکل دوره (شدید: P ≤ ۱٫۵ → ۰٫۶۴ mmol/kg) و وزن ۵۸ kg، دوز فسفات وریدی چند میلی‌مول است؟', ans: 37.1, tol: 0.5, unit: 'mmol', why: '۰٫۶۴ × ۵۸ = <b>۳۷٫۱ mmol</b> طی ۶ تا ۱۲ ساعت (در پروتکل‌ها معمولاً سقف ۵۰ mmol). چون K هم پایین است، پتاسیم فسفات مناسب است (هر ۳ mmol P همراه ۴٫۴ mEq K).' },
        { d: 'homa', stage: 'گاز خون', t: 'mcq', q: 'گاز خون شریانی روی FiO₂ ۳۵٪ را تفسیر کن.', lab: { kind: 'ABG', o2: 'FiO₂ ۳۵٪', pH: 7.29, pco2: 58, hco3: 27, po2: 68 }, opts: ['اسیدوز تنفسی حاد (هیپوونتیلاسیون از ضعف عضلات)', 'اسیدوز متابولیک با جبران تنفسی', 'آلکالوز تنفسی', 'اسیدوز تنفسی مزمن کاملاً جبران‌شده'], why: 'pH پایین با PaCO₂ بالا ← اسیدوز تنفسی. در حالت حاد HCO₃ به ازای هر ۱۰ mmHg افزایش PaCO₂ حدود ۱ واحد بالا می‌رود: ۲۴ + ۱٫۸ ≈ ۲۶ (اندازه‌گیری ۲۷، در محدوده) ← <b>حاد</b>. علت: پمپ تنفسی ضعیف، نه ریه.' },
        { d: 'homa', stage: 'اکسیژناسیون', t: 'num', q: 'نسبت PaO₂/FiO₂ را حساب کن (PaO₂ = ۶۸، FiO₂ = ۰٫۳۵).', ans: 194, tol: 2, unit: '', why: '۶۸ ÷ ۰٫۳۵ = <b>۱۹۴</b>؛ هیپوکسمی هم هست (پنومونی آسپیراسیون) و با هیپوونتیلاسیون جمع شده است.' },
        { d: 'yona', stage: 'پتاسیم مقاوم', t: 'tf', q: 'تا وقتی هیپومنیزیمی اصلاح نشود، هیپوکالمی معمولاً به جایگزینی پتاسیم خوب جواب نمی‌دهد.', a: true, why: 'کمبود منیزیم کانال‌های ROMK را باز می‌گذارد و دفع کلیوی پتاسیم ادامه می‌یابد؛ پس سولفات منیزیم را هم‌زمان بده.' },
        { d: 'all', stage: 'تصمیم نهایی', t: 'order', q: 'اقدام‌ها را به ترتیب اولویت مرتب کن.', steps: ['کاهش سرعت تغذیه به ۱۰ تا ۲۰ kcal/kg و ادامه تیامین', 'جایگزینی وریدی فسفات (پتاسیم فسفات) و سولفات منیزیم', 'پایش P، K و Mg هر ۶ تا ۱۲ ساعت و پایش قلبی', 'افزایش تدریجی تغذیه به هدف طی ۴ تا ۷ روز پس از پایداری الکترولیت‌ها'], why: 'در ریفیدینگ: کالری را کم کن، الکترولیت‌ها را جایگزین کن و بعد دوباره آهسته بالا ببر.' }
      ]
    },

    /* ================= کیس ۲: کتواسیدوز دیابتی با استفراغ ================= */
    {
      id: 'gr-dka',
      title: 'کتواسیدوز دیابتی با استفراغ طولانی و دهیدراتاسیون',
      who: 'خانم ۲۴ ساله، دیابت نوع ۱، دو هفته تهوع و استفراغ',
      domains: ['homa', 'yona', 'negar'],
      brief: 'دو هفته است استفراغ دارد و از ترس هیپوگلیسمی انسولینش را قطع کرده. در اورژانس: تنفس عمیق و تند، تاکی‌کاردی ۱۲۴، فشار ۹۴/۵۸، مخاط خشک. وزن معمول ۵۶ و فعلی ۵۲ کیلوگرم.',
      fig: { k: ['dh-mouth', 'dh-eyes'], l: ['دهان', 'چشم'], cap: 'معاینه دهان و چشم در اورژانس' },
      lab: { kind: 'ABG + Chemistry', o2: 'هوای اتاق', pH: 7.32, pco2: 28, hco3: 14, po2: 98, na: 128, k: 5.6, cl: 80, glu: 620, bun: 38, cr: 1.6 },
      pearl: 'نسبت دلتا بیش از ۲ در DKA یعنی یک آلکالوز متابولیک پنهان (اینجا استفراغ)؛ pH «نه چندان بد» نباید شدت کتواسیدوز را پنهان کند.',
      steps: [
        { d: 'homa', stage: 'آنیون گپ', t: 'num', q: 'آنیون گپ را حساب کن (Na ۱۲۸، Cl ۸۰، HCO₃ ۱۴).', ans: 34, tol: 0.5, unit: 'mEq/L', why: '۱۲۸ − (۸۰ + ۱۴) = <b>۳۴</b> ← اسیدوز متابولیک با آنیون گپ بالا (کتواسیدها).' },
        { d: 'homa', stage: 'جبران تنفسی', t: 'mcq', q: 'با فرمول وینتر، PaCO₂ مورد انتظار چقدر است و جبران چگونه است؟', opts: ['۱٫۵ × ۱۴ + ۸ = ۲۹ ± ۲؛ PaCO₂ = ۲۸ یعنی جبران مناسب', '۴۰ − ۱۴ = ۲۶؛ اسیدوز تنفسی همراه', '۱٫۵ × ۱۴ + ۸ = ۲۹؛ آلکالوز تنفسی همراه', 'در اسیدوز متابولیک جبران تنفسی رخ نمی‌دهد'], why: 'محدوده مورد انتظار ۲۷ تا ۳۱ است و ۲۸ داخل آن است؛ اختلال تنفسی جداگانه نداریم.' },
        { d: 'homa', stage: 'نسبت دلتا', t: 'mcq', q: 'نسبت دلتا (ΔAG ÷ ΔHCO₃) را با AG طبیعی ۱۲ و HCO₃ طبیعی ۲۴ بسنج. چه چیزی پنهان است؟', opts: ['۲۲ ÷ ۱۰ = ۲٫۲ ← آلکالوز متابولیک همراه (استفراغ)', '۱ ← اسیدوز آنیون گپ بالای خالص', 'کمتر از ۱ ← اسیدوز بدون آنیون گپ همراه', 'نسبت دلتا در DKA کاربرد ندارد'], why: 'ΔAG = ۳۴ − ۱۲ = ۲۲ و ΔHCO₃ = ۲۴ − ۱۴ = ۱۰؛ نسبت بیش از ۲ یعنی HCO₃ بیشتر از انتظار مانده ← <b>آلکالوز متابولیک</b> از استفراغ و از دست رفتن کلر (Cl فقط ۸۰).' },
        { d: 'yona', stage: 'سدیم اصلاح‌شده', t: 'num', q: 'سدیم اصلاح‌شده با قند را حساب کن (Na ۱۲۸، قند ۶۲۰؛ ضریب ۱٫۶).', ans: 136.3, tol: 0.3, unit: 'mEq/L', why: '۱۲۸ + ۱٫۶ × (۶۲۰ − ۱۰۰) ÷ ۱۰۰ = ۱۲۸ + ۸٫۳ = <b>۱۳۶٫۳</b>؛ پس هیپوناترمی بیشتر «کاذب» و ناشی از کشیده‌شدن آب توسط گلوکز است.' },
        { d: 'yona', stage: 'پتاسیم و انسولین', t: 'mcq', q: 'K = ۵٫۶ mEq/L. درباره انسولین و پتاسیم چه می‌کنی؟', opts: ['انسولین را شروع کن، فعلاً پتاسیم نده و K را هر ۲ ساعت بسنج', 'انسولین را تا K زیر ۳٫۳ نگه دار', 'از همان ابتدا KCl ۴۰ mEq/h بده', 'بیکربنات بده تا K پایین بیاید'], why: 'طبق ADA: K بیش از ۵٫۲ ← انسولین بدون پتاسیم و پایش هر ۲ ساعت؛ K بین ۳٫۳ و ۵٫۲ ← ۲۰ تا ۳۰ mEq در هر لیتر مایع؛ K کمتر از ۳٫۳ ← اول پتاسیم، بعد انسولین. ذخیره کل پتاسیم بدن کم است و با انسولین سریع افت می‌کند.' },
        { d: 'negar', stage: 'معاینه مایعات', t: 'mcq', q: 'در تصویرهای دهان و چشم کدام یافته دیده می‌شود؟', fig: { k: ['dh-mouth', 'dh-eyes'], l: ['دهان', 'چشم'] }, opts: ['نشانه‌های دهیدراتاسیون: خشکی مخاط و غشاها', 'ادم مخاط', 'یافته طبیعی', 'گلوسیت ناشی از کمبود ویتامین B'], why: 'خشکی مخاط دهان و غشاهای چشم، همراه با تاکی‌کاردی و افت فشار، از دهیدراتاسیون (کمبود حجم) پشتیبانی می‌کند.' },
        { d: 'negar', stage: 'نسبت BUN به کراتینین', t: 'num', q: 'نسبت BUN به کراتینین را حساب کن (BUN ۳۸، Cr ۱٫۶).', ans: 23.8, tol: 0.2, unit: '', why: '۳۸ ÷ ۱٫۶ = <b>۲۳٫۸</b>؛ بیش از ۲۰ از کمبود حجم پیش‌کلیوی پشتیبانی می‌کند.' },
        { d: 'negar', stage: 'وزن در دهیدراتاسیون', t: 'tf', q: 'کاهش وزن ۴ کیلوگرمی این بیمار در دو هفته را نباید بی‌درنگ معیار سوءتغذیه شمرد، چون بخشی از آن از دست رفتن آب است.', a: true, why: 'در NFPE، وزن در حضور دهیدراتاسیون یا ادم گمراه‌کننده است؛ وزن را پس از اصلاح حجم دوباره بسنج و به دریافت، عضله و چربی تکیه کن.' },
        { d: 'all', stage: 'درمان', t: 'order', q: 'گام‌های اولیه درمان را مرتب کن.', steps: ['مایع ایزوتونیک ۱ تا ۱٫۵ لیتر در ساعت اول', 'سنجش پتاسیم پیش از انسولین', 'انفوزیون انسولین رگولار ۰٫۱ واحد بر کیلوگرم در ساعت', 'افزودن دکستروز وقتی قند به حدود ۲۵۰ رسید', 'رفتن به انسولین زیرجلدی پس از بسته شدن آنیون گپ (با هم‌پوشانی)'], why: 'حجم ← پتاسیم ← انسولین ← دکستروز ← انتقال؛ هدف درمان بستن آنیون گپ است، نه فقط پایین آوردن قند.' }
      ]
    },

    /* ================= کیس ۳: COPD کاشکتیک ================= */
    {
      id: 'gr-copd',
      title: 'تشدید COPD در بیمار کاشکتیک: از NIV تا آلکالوز پس از هیپرکاپنی',
      who: 'مرد ۶۸ ساله، COPD شدید، اکسیژن خانگی، BMI ۱۷',
      domains: ['homa', 'negar', 'yona'],
      brief: 'با تنگی نفس و خواب‌آلودگی آمده. در شش ماه اخیر وزنش از ۶۴ به ۵۶ کیلوگرم رسیده و دیگر نمی‌تواند در شیشه مربا را باز کند. HCO₃ پایه او در پرونده قبلی ۳۲ بوده است.',
      fig: { k: 'chest-s', cap: 'ناحیه ترقوه و قفسه سینه' },
      lab: { kind: 'ABG', o2: 'هوای اتاق', pH: 7.28, pco2: 75, hco3: 34, po2: 50 },
      pearl: 'در COPD هیپرکاپنیک، SpO₂ هدف ۸۸ تا ۹۲٪ است؛ و پس از NIV، آلکالوز «پس از هیپرکاپنی» را با پتاسیم و کلر درمان کن.',
      steps: [
        { d: 'homa', stage: 'نوع اسیدوز تنفسی', t: 'mcq', q: 'pH ۷٫۲۸، PaCO₂ ۷۵ و HCO₃ ۳۴. این اسیدوز تنفسی چه نوعی است؟', opts: ['حاد روی مزمن (HCO₃ بین حالت حاد ≈ ۲۷٫۵ و مزمن ≈ ۳۶)', 'حاد خالص', 'مزمن کاملاً جبران‌شده', 'اسیدوز متابولیک'], why: 'افزایش PaCO₂ = ۳۵. حاد: ۲۴ + ۳٫۵ = ۲۷٫۵؛ مزمن: ۲۴ + ۳٫۵ × ۳٫۵ ≈ ۳۶. مقدار ۳۴ بین این دوست و pH هم پایین است ← <b>حاد روی مزمن</b>.' },
        { d: 'homa', stage: 'اکسیژن', t: 'mcq', q: 'هدف اشباع اکسیژن در این بیمار چقدر است؟', opts: ['SpO₂ ۸۸ تا ۹۲٪ با اکسیژن کنترل‌شده (ونچوری)', 'SpO₂ ۹۸ تا ۱۰۰٪ با ماسک ذخیره‌دار', 'بدون اکسیژن تا جواب گاز خون بعدی', 'SpO₂ ۸۰ تا ۸۴٪'], why: 'اکسیژن زیاد در هیپرکاپنی مزمن با بدتر شدن V/Q و اثر هالدین PaCO₂ را بالا می‌برد (راهنمای BTS).' },
        { d: 'homa', stage: 'NIV', t: 'tf', q: 'با وجود درمان دارویی بهینه، pH کمتر از ۷٫۳۵ و PaCO₂ بیش از ۶٫۵ kPa (حدود ۴۹ mmHg) اندیکاسیون شروع تهویه غیرتهاجمی (NIV) است.', a: true, why: 'NIV در تشدید هیپرکاپنیک COPD نیاز به لوله‌گذاری و مرگ را کم می‌کند؛ گاز خون را ۱ تا ۲ ساعت بعد تکرار کن.' },
        { d: 'negar', stage: 'کاهش وزن', t: 'num', q: 'درصد کاهش وزن در شش ماه (۶۴ به ۵۶ کیلوگرم) چقدر است؟', ans: 12.5, tol: 0.2, unit: '%', why: '(۶۴ − ۵۶) ÷ ۶۴ × ۱۰۰ = <b>۱۲٫۵٪</b> ← در زمینه مزمن، بیش از ۱۰٪ در ۶ ماه یعنی معیار شدید.' },
        { d: 'negar', stage: 'معاینه ترقوه', t: 'mcq', q: 'ناحیه ترقوه در تصویر چه وضعیتی دارد؟', fig: { k: 'chest-s' }, opts: ['از دست رفتن شدید عضله (ترقوه کاملاً برجسته)', 'طبیعی (ترقوه پوشیده در عضله)', 'خفیف تا متوسط', 'ادم دیواره قفسه سینه'], why: 'ترقوه بیرون‌زده و بدون پوشش عضله پکتورالیس و دلتوئید ← تحلیل <b>شدید</b> عضله؛ در COPD کاشکسی عضلانی شایع است و تهویه را هم ضعیف‌تر می‌کند.' },
        { d: 'negar', stage: 'عملکرد', t: 'tf', q: 'کاهش قدرت چنگش (Handgrip) یکی از شش ویژگی Academy/ASPEN برای تشخیص سوءتغذیه است.', a: true, why: 'شش ویژگی: دریافت انرژی ناکافی، کاهش وزن، از دست رفتن عضله، از دست رفتن چربی زیرپوستی، تجمع مایع و کاهش قدرت چنگش؛ دو مورد یا بیشتر برای تشخیص لازم است.' },
        { d: 'yona', stage: 'روز سوم NIV', t: 'mcq', q: 'روز سوم پس از NIV، کورتون و فوروزماید: pH ۷٫۵۲، PaCO₂ ۴۴، HCO₃ ۳۵، K ۲٫۸، Cl ۸۸. بهترین اقدام کدام است؟', lab: { kind: 'ABG + Chemistry', pH: 7.52, pco2: 44, hco3: 35, k: 2.8, cl: 88 }, opts: ['جایگزینی KCl و تصحیح حجم/کلر (آلکالوز حساس به کلر)؛ در صورت پایداری حجم، استازولامید', 'بیکربنات وریدی', 'افزایش دوز فوروزماید', 'افزایش PaCO₂ هدف با کاهش تهویه'], why: 'PaCO₂ سریع پایین آمده ولی کلیه هنوز HCO₃ اضافه را نگه داشته؛ دیورتیک و کمبود کلر و پتاسیم آن را تثبیت می‌کنند. KCl هر دو کمبود را جبران می‌کند.' },
        { d: 'yona', stage: 'سرعت پتاسیم', t: 'mcq', q: 'K = ۲٫۸ با رگ محیطی. حداکثر سرعت معمول تزریق KCl چقدر است؟', opts: ['حدود ۱۰ mEq در ساعت (از رگ مرکزی تا ۲۰ mEq در ساعت با مانیتور)', '۴۰ mEq در ساعت از رگ محیطی', 'بولوس ۲۰ mEq در ۵ دقیقه', 'KCl وریدی ممنوع است'], why: 'سرعت بالاتر خطر آریتمی و آسیب رگ دارد؛ تزریق سریع فقط از رگ مرکزی و با مانیتورینگ قلبی.' },
        { d: 'all', stage: 'جمع‌بندی', t: 'mcq', q: 'کدام برنامه تغذیه‌ای برای این بیمار مناسب‌تر است؟', opts: ['تشخیص سوءتغذیه شدید مزمن؛ پروتئین کافی (حدود ۱٫۲ تا ۱٫۵ g/kg)، وعده‌های کوچک و مکرر و توان‌بخشی ریوی', 'رژیم کم‌پروتئین برای کاهش تولید CO₂', 'روزه‌داری تا رفع هیپرکاپنی', 'تغذیه پرکربوهیدرات با حجم زیاد'], why: 'کاشکسی پیش‌آگهی COPD را بد می‌کند. هدف حفظ توده عضله است؛ از پرخوری کربوهیدرات (افزایش VCO₂) پرهیز کن، نه از پروتئین.' }
      ]
    },

    /* ================= کیس ۴: شوک سپتیک و ARDS ================= */
    {
      id: 'gr-sepsis',
      title: 'شوک سپتیک، ARDS و ۶ لیتر سالین: اسیدوز سه‌لایه',
      who: 'خانم ۴۵ ساله، پرفوراسیون دیورتیکول، روز دوم ICU',
      domains: ['homa', 'yona', 'negar'],
      brief: 'پس از لاپاراتومی اورژانسی، ۶ لیتر نرمال سالین گرفته و روی نوراپی‌نفرین است. روی ونتیلاتور با FiO₂ ۶۰٪ و PEEP ۱۰. از پنج روز پیش از جراحی تقریباً چیزی نخورده است. اندام‌ها ورم کرده‌اند.',
      fig: { k: 'pit3', cap: 'معاینه ادم ساق پا (فشار ۵ ثانیه‌ای)' },
      lab: { kind: 'ABG + Chemistry', o2: 'FiO₂ ۶۰٪، PEEP ۱۰', pH: 7.18, pco2: 32, hco3: 12, po2: 72, na: 140, cl: 116, lac: 6, alb: 2.0, ca: 7.2 },
      pearl: 'در هیپوآلبومینمی، آنیون گپ را اصلاح کن (هر ۱ g/dL کاهش آلبومین ≈ ۲٫۵ واحد)؛ وگرنه اسیدوز لاکتیک زیر سایه اسیدوز هیپرکلرمیک سالین پنهان می‌ماند.',
      steps: [
        { d: 'homa', stage: 'اکسیژناسیون', t: 'num', q: 'نسبت PaO₂/FiO₂ را حساب کن (PaO₂ ۷۲، FiO₂ ۰٫۶).', ans: 120, tol: 1, unit: '', why: '۷۲ ÷ ۰٫۶ = <b>۱۲۰</b>' },
        { d: 'homa', stage: 'تعریف برلین', t: 'mcq', q: 'با P/F = ۱۲۰ روی PEEP ۱۰ و ارتشاح دوطرفه، شدت ARDS چیست؟', opts: ['متوسط (P/F بین ۱۰۰ و ۲۰۰)', 'خفیف (۲۰۰ تا ۳۰۰)', 'شدید (کمتر از ۱۰۰)', 'ARDS نیست'], why: 'تعریف برلین با PEEP دست‌کم ۵: خفیف ۲۰۰ تا ۳۰۰، متوسط ۱۰۰ تا ۲۰۰، شدید ۱۰۰ یا کمتر. تهویه محافظ ریه با حجم جاری ۶ mL/kg وزن ایده‌آل.' },
        { d: 'homa', stage: 'آنیون گپ اصلاح‌شده', t: 'num', q: 'آنیون گپ را با آلبومین ۲٫۰ اصلاح کن (Na ۱۴۰، Cl ۱۱۶، HCO₃ ۱۲).', ans: 17, tol: 0.5, unit: 'mEq/L', why: 'AG = ۱۴۰ − (۱۱۶ + ۱۲) = ۱۲ (به ظاهر طبیعی!). اصلاح: ۱۲ + ۲٫۵ × (۴ − ۲) = <b>۱۷</b> ← آنیون گپ واقعاً بالاست (لاکتات ۶).' },
        { d: 'homa', stage: 'تفسیر کامل', t: 'mcq', q: 'با فرمول وینتر (انتظار ۲۶ ± ۲) و PaCO₂ ۳۲، تفسیر کامل کدام است؟', opts: ['اسیدوز متابولیک مختلط (لاکتیک + هیپرکلرمیک سالین) همراه اسیدوز تنفسی', 'اسیدوز متابولیک خالص با جبران مناسب', 'آلکالوز تنفسی اولیه', 'اسیدوز هیپرکلرمیک خالص'], why: 'دو جزء متابولیک: آنیون گپ اصلاح‌شده بالا (لاکتات) و Cl بالا (سالین). PaCO₂ ۳۲ بیش از محدوده ۲۴ تا ۲۸ است ← تهویه ناکافی (اسیدوز تنفسی همراه).' },
        { d: 'yona', stage: 'کلسیم', t: 'num', q: 'کلسیم اصلاح‌شده با آلبومین را حساب کن (Ca ۷٫۲، آلبومین ۲٫۰).', ans: 8.8, tol: 0.05, unit: 'mg/dL', why: '۷٫۲ + ۰٫۸ × (۴ − ۲) = <b>۸٫۸</b>' },
        { d: 'yona', stage: 'کلسیم یونیزه', t: 'tf', q: 'در بیمار بدحال با آلبومین پایین و اختلال اسید و باز، کلسیم یونیزه از کلسیم اصلاح‌شده با آلبومین قابل‌اعتمادتر است.', a: true, why: 'فرمول اصلاح در ICU خطای زیادی دارد؛ تصمیم به کلسیم وریدی را با iCa بگیر (اسیدوز هم کسر یونیزه را بالا می‌برد).' },
        { d: 'negar', stage: 'درجه ادم', t: 'mcq', q: 'گوده حدود ۶ میلی‌متر که ۱۰ تا ۱۲ ثانیه طول می‌کشد تا برگردد. درجه ادم چیست؟', fig: { k: 'pit3' }, opts: ['۳+', '۱+', '۲+', '۴+'], why: 'درجه‌بندی: ۱+ ≈ ۲ mm، ۲+ ≈ ۴ mm، ۳+ ≈ ۶ mm، ۴+ ≈ ۸ mm. ادم پس از احیای مایع، وزن را بالا و کاهش وزن واقعی را پنهان می‌کند.' },
        { d: 'negar', stage: 'معیار دریافت', t: 'mcq', q: 'در این زمینه حاد (سپسیس و جراحی)، کدام معیار سوءتغذیه در دسترس‌تر و قابل‌اعتمادتر است؟', opts: ['دریافت انرژی ۵۰٪ یا کمتر برای ۵ روز یا بیشتر ← معیار شدید در زمینه حاد', 'وزن فعلی روی ترازوی تخت', 'BMI', 'آلبومین سرم ۲٫۰'], why: 'وزن با ادم و مایع گمراه‌کننده است و آلبومین در التهاب، شاخص وضعیت تغذیه نیست (پروتئین فاز حاد منفی). دریافت ۵۰٪ یا کمتر برای ۵ روز یا بیشتر در زمینه حاد، معیار شدید است.' },
        { d: 'all', stage: 'تصمیم', t: 'mcq', q: 'کدام اقدام برای اسیدوز هیپرکلرمیک در ادامه احیا منطقی‌تر است؟', opts: ['ادامه احیا با محلول بالانس (رینگر لاکتات یا پلاسمالایت) به جای سالین', 'بیکربنات برای همه بیماران با pH زیر ۷٫۲', 'ادامه نرمال سالین با حجم بیشتر', 'قطع کامل مایع'], why: 'محلول‌های بالانس اسیدوز هیپرکلرمیک و آسیب کلیه را کمتر می‌کنند؛ لاکتات رینگر لاکتات مانع پاک شدن لاکتات بیمار نیست. بیکربنات فقط در موارد خاص (مثل pH بسیار پایین با AKI).' }
      ]
    },

    /* ================= کیس ۵: ایلئوستومی پرخروجی ================= */
    {
      id: 'gr-stoma',
      title: 'ایلئوستومی پرخروجی: اسیدوز بدون گپ، منیزیم ۰٫۹ و نشانه‌های کمبود روی',
      who: 'مرد ۵۹ ساله، روز دهم پس از رزکسیون روده باریک',
      domains: ['homa', 'yona', 'negar'],
      brief: 'خروجی ایلئوستومی ۲٫۵ لیتر در روز است. ده روز است کمتر از نیمی از نیازش را خورده و وزنش در یک ماه از ۷۸ به ۶۹ کیلوگرم رسیده. ضعف، گرفتگی عضلات و ضایعات پوستی دور دهان دارد. نوار قلب: موج U.',
      fig: { k: ['dermatitis', 'alopecia'], l: ['درماتیت', 'ریزش مو'], cap: 'یافته‌های پوست و مو' },
      lab: { kind: 'ABG + Chemistry', o2: 'هوای اتاق', pH: 7.29, pco2: 31, hco3: 15, po2: 92, na: 136, k: 2.7, cl: 112, mg: 0.9, bun: 42, cr: 1.4 },
      pearl: 'استومی پرخروجی = از دست رفتن بیکربنات، سدیم، پتاسیم، منیزیم و روی؛ منیزیم را اول اصلاح کن و آنیون گپ ادرار را برای تمایز علت گوارشی از کلیوی بسنج.',
      steps: [
        { d: 'homa', stage: 'آنیون گپ', t: 'num', q: 'آنیون گپ را حساب کن (Na ۱۳۶، Cl ۱۱۲، HCO₃ ۱۵).', ans: 9, tol: 0.5, unit: 'mEq/L', why: '۱۳۶ − (۱۱۲ + ۱۵) = <b>۹</b> ← اسیدوز متابولیک <b>بدون</b> آنیون گپ (هیپرکلرمیک).' },
        { d: 'homa', stage: 'جبران', t: 'tf', q: 'با فرمول وینتر، PaCO₂ = ۳۱ برای HCO₃ = ۱۵ جبران تنفسی مناسب است.', a: true, why: '۱٫۵ × ۱۵ + ۸ = ۳۰٫۵ ± ۲ ← ۳۱ در محدوده است.' },
        { d: 'homa', stage: 'منشأ اسیدوز', t: 'mcq', q: 'سدیم، پتاسیم و کلر ادرار: ۲۰، ۲۵ و ۷۰ mEq/L. آنیون گپ ادرار چه می‌گوید؟', opts: ['۲۰ + ۲۵ − ۷۰ = −۲۵ (منفی) ← دفع آمونیوم کافی؛ علت گوارشی (از دست رفتن بیکربنات از استومی)', 'مثبت ← اسیدوز توبولار کلیوی', 'صفر ← نامشخص', 'آنیون گپ ادرار در NAGMA ارزشی ندارد'], why: 'آنیون گپ ادرار منفی یعنی کلیه آمونیوم (با کلر) را خوب دفع می‌کند، پس مشکل از کلیه نیست؛ از دست رفتن بیکربنات از روده است.' },
        { d: 'yona', stage: 'منیزیم', t: 'mcq', q: 'Mg = ۰٫۹ mg/dL با کلیه نسبتاً سالم. طبق پروتکل دوره، دوز سولفات منیزیم وریدی چیست؟', opts: ['۴ تا ۸ گرم طی ۱۲ تا ۲۴ ساعت', '۱ گرم خوراکی', '۲۰ گرم بولوس', 'نیازی به جایگزینی نیست'], why: 'Mg زیر ۱ = شدید ← ۴ تا ۸ گرم طی ۱۲ تا ۲۴ ساعت (۱ تا ۱٫۵: ۲ تا ۴ گرم؛ ۱٫۵ تا ۱٫۷: ۱ تا ۲ گرم). بدون اصلاح منیزیم، هیپوکالمی اصلاح نمی‌شود.' },
        { d: 'yona', stage: 'پتاسیم', t: 'tf', q: 'در هیپوکالمی ۲٫۷ با موج U، اگر رگ مرکزی و مانیتور قلبی داریم، تزریق KCl تا حدود ۲۰ mEq در ساعت قابل قبول است.', a: true, why: 'از رگ محیطی حدود ۱۰ mEq/h؛ از رگ مرکزی با مانیتور تا ۲۰ mEq/h (و در موارد خاص بیشتر با احتیاط). همزمان منیزیم و مایع (سدیم) را هم جبران کن.' },
        { d: 'negar', stage: 'کاهش وزن', t: 'num', q: 'درصد کاهش وزن در یک ماه (۷۸ به ۶۹ کیلوگرم) چقدر است؟', ans: 11.5, tol: 0.2, unit: '%', why: '(۷۸ − ۶۹) ÷ ۷۸ × ۱۰۰ = <b>۱۱٫۵٪</b> ← در زمینه حاد (پس از جراحی)، بیش از ۵٪ در یک ماه معیار شدید است؛ البته بخشی ممکن است کمبود حجم باشد.' },
        { d: 'negar', stage: 'ریزمغذی', t: 'mcq', q: 'درماتیت دور دهان و ریزش مو در بیمار با استومی پرخروجی بیشتر به کمبود کدام ریزمغذی اشاره دارد؟', fig: { k: ['dermatitis', 'alopecia'], l: ['درماتیت', 'ریزش مو'] }, opts: ['روی (Zinc)', 'ویتامین C', 'ویتامین A', 'آهن'], why: 'از دست رفتن روی از مایعات روده‌ای زیاد است؛ درماتیت پری‌اوریفیشیال، ریزش مو، اختلال چشایی و ترمیم کند زخم نشانه‌های آن‌اند.' },
        { d: 'all', stage: 'برنامه', t: 'order', q: 'برنامه مدیریت را به ترتیب مرتب کن.', steps: ['اصلاح حجم و سدیم با مایع ایزوتونیک', 'سولفات منیزیم وریدی و سپس/همزمان KCl', 'کاهش خروجی استومی (لوپرامید، محدودیت مایع هیپوتونیک، محلول خوراکی پرسدیم)', 'جایگزینی روی و ارزیابی تغذیه حمایتی (در صورت نیاز PN)'], why: 'اول پایداری همودینامیک و الکترولیت‌های خطرناک، بعد مهار منبع از دست رفتن، سپس جبران ریزمغذی‌ها و تغذیه.' }
      ]
    }
  ]
};

/* ================= English version of the ICU cases =================
 * Every case gets an «en» block: same step order and type, mcq option 1 still correct, order lists in the right order.
 * The platform shows it when the app language is English (fields not given fall back to the Persian case). */
(function (G) {
  const EN = {
    'gr-refeed': {
      title: 'Sudden weakness on day 3 of feeding: refeeding syndrome',
      who: '52-year-old man, chronic alcohol use, aspiration pneumonia, NG feeding from day 1',
      brief: 'He has eaten almost nothing for three months and his weight has fallen from 70 to 58 kg. He was admitted to the ICU with aspiration pneumonia, and tube feeding at 25 kcal/kg was started on day 1. Day 3: severe muscle weakness, confusion and a failed spontaneous breathing trial (SBT).',
      fig: { k: 'face-s', cap: 'The patient’s face on admission' },
      chart: [['Usual weight', '70 kg (three months ago)'], ['Current weight', '58 kg'], ['Intake', 'Under 25% of needs over the last three months'], ['Day 3 of feeding', 'P 0.9, K 2.9, Mg 1.1 mg/dL']],
      pearl: 'In a high-risk patient, start feeding slowly (10–20 kcal/kg) with thiamine and check phosphate, potassium and magnesium every 6–12 hours; explain respiratory weakness on days 2–4 of feeding by hypophosphatemia until proven otherwise.',
      steps: [
        { stage: 'Weight assessment', q: 'Calculate the percentage of weight loss (usual weight 70 kg, current 58 kg).', why: '(70 − 58) ÷ 70 × 100 = <b>17.1%</b>' },
        { stage: 'ASPEN criterion', q: 'What does a 17% weight loss in 3 months mean in the context of chronic illness (alcohol use and long-standing malnutrition)?', opts: ['Criterion for severe malnutrition (more than 7.5% in 3 months)', 'Criterion for moderate malnutrition (5% in 3 months)', 'The weight loss is not significant', 'It only counts in the acute context'], why: 'In the chronic and social context, weight loss of more than 7.5% in 3 months meets the <b>severe</b> criterion (5% in 1 month, 10% in 6 months and 20% in 1 year are also severe thresholds).' },
        { stage: 'Facial exam', q: 'In the face image, what is the state of the temporal muscle and the fat around the eyes?', opts: ['Severe loss of muscle and fat', 'Normal', 'Mild to moderate loss', 'Facial edema'], why: 'Deep temporal hollowing, sunken orbits with loose skin and prominent facial bones → <b>severe</b> loss. Together with the weight loss, the diagnosis of severe malnutrition is firm.' },
        { stage: 'Preventing refeeding', q: 'Given this history, how should feeding have been started?', opts: ['10–20 kcal/kg per day, thiamine before feeding, and P, K and Mg checks every 6–12 hours', '25–30 kcal/kg from day 1 to correct the deficit quickly', '7 days nil by mouth first until stable', 'Only 10% dextrose at a high rate'], why: 'High-risk patient (weight loss over 15%, negligible intake for more than 10 days, alcohol). A slow start and thiamine before carbohydrate reduce the sudden insulin-driven shift of phosphate, potassium and magnesium into cells.' },
        { stage: 'Day 3 labs', q: 'Day 3: P = 0.9, K = 2.9 and Mg = 1.1 mg/dL. Which finding best explains the respiratory muscle weakness?', opts: ['Severe hypophosphatemia (ATP and 2,3-DPG depletion)', 'Mild hyperglycemia', 'Hyponatremia', 'Hypercalcemia'], why: 'Phosphate below 1 mg/dL means ATP depletion in the diaphragm and low 2,3-DPG; the result is respiratory weakness, failure to wean from the ventilator, rhabdomyolysis and heart failure.' },
        { stage: 'Phosphate dose', q: 'Using the course protocol (severe: P ≤ 1.5 → 0.64 mmol/kg) and a weight of 58 kg, what is the IV phosphate dose in mmol?', why: '0.64 × 58 = <b>37.1 mmol</b> over 6–12 hours (protocols usually cap at 50 mmol). Because K is also low, potassium phosphate is appropriate (each 3 mmol P comes with 4.4 mEq K).' },
        { stage: 'Blood gas', q: 'Interpret the arterial blood gas on FiO₂ 35%.', lab: { kind: 'ABG', o2: 'FiO₂ 35%', pH: 7.29, pco2: 58, hco3: 27, po2: 68 }, opts: ['Acute respiratory acidosis (hypoventilation from muscle weakness)', 'Metabolic acidosis with respiratory compensation', 'Respiratory alkalosis', 'Fully compensated chronic respiratory acidosis'], why: 'Low pH with high PaCO₂ → respiratory acidosis. Acutely, HCO₃ rises about 1 per 10 mmHg rise in PaCO₂: 24 + 1.8 ≈ 26 (measured 27, within range) → <b>acute</b>. Cause: a weak respiratory pump, not the lung.' },
        { stage: 'Oxygenation', q: 'Calculate the PaO₂/FiO₂ ratio (PaO₂ = 68, FiO₂ = 0.35).', why: '68 ÷ 0.35 = <b>194</b>; there is also hypoxemia (aspiration pneumonia), added to the hypoventilation.' },
        { stage: 'Refractory potassium', q: 'Until hypomagnesemia is corrected, hypokalemia usually responds poorly to potassium replacement.', why: 'Magnesium deficiency leaves ROMK channels open, so renal potassium loss continues; give magnesium sulfate at the same time.' },
        { stage: 'Final decision', q: 'Put the actions in order of priority.', steps: ['Reduce feeding to 10–20 kcal/kg and continue thiamine', 'IV phosphate (potassium phosphate) and magnesium sulfate replacement', 'Check P, K and Mg every 6–12 hours with cardiac monitoring', 'Advance feeding gradually to goal over 4–7 days once electrolytes are stable'], why: 'In refeeding: cut the calories, replace the electrolytes, then increase slowly again.' }
      ]
    },
    'gr-dka': {
      title: 'Diabetic ketoacidosis with prolonged vomiting and dehydration',
      who: '24-year-old woman, type 1 diabetes, two weeks of nausea and vomiting',
      brief: 'She has been vomiting for two weeks and stopped her insulin for fear of hypoglycemia. In the emergency department: deep rapid breathing, heart rate 124, blood pressure 94/58, dry mucosa. Usual weight 56 kg, current 52 kg.',
      fig: { k: ['dh-mouth', 'dh-eyes'], l: ['Mouth', 'Eyes'], cap: 'Mouth and eye exam in the emergency department' },
      lab: { kind: 'ABG + Chemistry', o2: 'Room air', pH: 7.32, pco2: 28, hco3: 14, po2: 98, na: 128, k: 5.6, cl: 80, glu: 620, bun: 38, cr: 1.6 },
      pearl: 'A delta ratio above 2 in DKA means a hidden metabolic alkalosis (here, vomiting); a “not so bad” pH must not hide the severity of the ketoacidosis.',
      steps: [
        { stage: 'Anion gap', q: 'Calculate the anion gap (Na 128, Cl 80, HCO₃ 14).', why: '128 − (80 + 14) = <b>34</b> → high anion gap metabolic acidosis (keto-acids).' },
        { stage: 'Respiratory compensation', q: 'Using Winters’ formula, what is the expected PaCO₂ and how good is the compensation?', opts: ['1.5 × 14 + 8 = 29 ± 2; PaCO₂ = 28 means appropriate compensation', '40 − 14 = 26; concurrent respiratory acidosis', '1.5 × 14 + 8 = 29; concurrent respiratory alkalosis', 'Metabolic acidosis is not compensated by breathing'], why: 'The expected range is 27–31 and 28 is within it; there is no separate respiratory disorder.' },
        { stage: 'Delta ratio', q: 'Work out the delta ratio (ΔAG ÷ ΔHCO₃) with a normal AG of 12 and normal HCO₃ of 24. What is hidden?', opts: ['22 ÷ 10 = 2.2 → concurrent metabolic alkalosis (vomiting)', '1 → pure high anion gap acidosis', 'Below 1 → concurrent non-gap acidosis', 'The delta ratio is not useful in DKA'], why: 'ΔAG = 34 − 12 = 22 and ΔHCO₃ = 24 − 14 = 10; a ratio above 2 means HCO₃ stayed higher than expected → <b>metabolic alkalosis</b> from vomiting and chloride loss (Cl only 80).' },
        { stage: 'Corrected sodium', q: 'Calculate the glucose-corrected sodium (Na 128, glucose 620; factor 1.6).', why: '128 + 1.6 × (620 − 100) ÷ 100 = 128 + 8.3 = <b>136.3</b>; so the hyponatremia is mostly “pseudo”, caused by glucose drawing water out of cells.' },
        { stage: 'Potassium and insulin', q: 'K = 5.6 mEq/L. What do you do about insulin and potassium?', opts: ['Start insulin, give no potassium for now and check K every 2 hours', 'Hold insulin until K is below 3.3', 'Give KCl 40 mEq/h from the start', 'Give bicarbonate to lower K'], why: 'Per ADA: K above 5.2 → insulin without potassium and checks every 2 hours; K 3.3–5.2 → 20–30 mEq per litre of fluid; K below 3.3 → potassium first, then insulin. Total body potassium is low and falls quickly with insulin.' },
        { stage: 'Fluid exam', q: 'Which finding is seen in the mouth and eye images?', fig: { k: ['dh-mouth', 'dh-eyes'], l: ['Mouth', 'Eyes'] }, opts: ['Signs of dehydration: dry mucosa and membranes', 'Mucosal edema', 'Normal findings', 'Glossitis from vitamin B deficiency'], why: 'Dry oral mucosa and dry eye membranes, together with tachycardia and hypotension, support dehydration (volume depletion).' },
        { stage: 'BUN-to-creatinine ratio', q: 'Calculate the BUN-to-creatinine ratio (BUN 38, Cr 1.6).', why: '38 ÷ 1.6 = <b>23.8</b>; above 20 supports prerenal volume depletion.' },
        { stage: 'Weight in dehydration', q: 'This patient’s 4 kg weight loss over two weeks should not be counted straight away as a malnutrition criterion, because part of it is water loss.', why: 'In NFPE, weight is misleading in the presence of dehydration or edema; re-weigh after volume correction and rely on intake, muscle and fat.' },
        { stage: 'Treatment', q: 'Put the first treatment steps in order.', steps: ['Isotonic fluid 1–1.5 L in the first hour', 'Check potassium before insulin', 'Regular insulin infusion 0.1 unit/kg/h', 'Add dextrose when glucose reaches about 250', 'Switch to subcutaneous insulin after the anion gap closes (with overlap)'], why: 'Volume → potassium → insulin → dextrose → transition; the goal is to close the anion gap, not just to lower the glucose.' }
      ]
    },
    'gr-copd': {
      title: 'COPD exacerbation in a cachectic patient: from NIV to post-hypercapnic alkalosis',
      who: '68-year-old man, severe COPD, home oxygen, BMI 17',
      brief: 'He presents with breathlessness and drowsiness. Over the last six months his weight has fallen from 64 to 56 kg and he can no longer open a jam jar. His baseline HCO₃ in previous notes was 32.',
      fig: { k: 'chest-s', cap: 'Clavicle and chest region' },
      lab: { kind: 'ABG', o2: 'Room air', pH: 7.28, pco2: 75, hco3: 34, po2: 50 },
      pearl: 'In hypercapnic COPD the target SpO₂ is 88–92%; after NIV, treat “post-hypercapnic” alkalosis with potassium and chloride.',
      steps: [
        { stage: 'Type of respiratory acidosis', q: 'pH 7.28, PaCO₂ 75 and HCO₃ 34. What type of respiratory acidosis is this?', opts: ['Acute on chronic (HCO₃ between the acute ≈ 27.5 and chronic ≈ 36 values)', 'Pure acute', 'Fully compensated chronic', 'Metabolic acidosis'], why: 'PaCO₂ rise = 35. Acute: 24 + 3.5 = 27.5; chronic: 24 + 3.5 × 3.5 ≈ 36. 34 lies between them and the pH is low → <b>acute on chronic</b>.' },
        { stage: 'Oxygen', q: 'What is the oxygen saturation target for this patient?', opts: ['SpO₂ 88–92% with controlled (Venturi) oxygen', 'SpO₂ 98–100% with a non-rebreather mask', 'No oxygen until the next blood gas', 'SpO₂ 80–84%'], why: 'High oxygen in chronic hypercapnia raises PaCO₂ by worsening V/Q matching and through the Haldane effect (BTS guideline).' },
        { stage: 'NIV', q: 'Despite optimal medical treatment, pH below 7.35 and PaCO₂ above 6.5 kPa (about 49 mmHg) is an indication to start non-invasive ventilation (NIV).', why: 'NIV reduces intubation and death in hypercapnic COPD exacerbations; repeat the blood gas 1–2 hours later.' },
        { stage: 'Weight loss', q: 'What is the percentage weight loss over six months (64 to 56 kg)?', why: '(64 − 56) ÷ 64 × 100 = <b>12.5%</b> → in the chronic context, more than 10% in 6 months meets the severe criterion.' },
        { stage: 'Clavicle exam', q: 'What is the state of the clavicle region in the image?', opts: ['Severe muscle loss (clavicle fully prominent)', 'Normal (clavicle covered by muscle)', 'Mild to moderate', 'Chest wall edema'], why: 'A protruding clavicle without pectoralis and deltoid cover → <b>severe</b> muscle wasting; muscle cachexia is common in COPD and weakens ventilation further.' },
        { stage: 'Function', q: 'Reduced handgrip strength is one of the six Academy/ASPEN characteristics for diagnosing malnutrition.', why: 'The six characteristics: insufficient energy intake, weight loss, muscle loss, loss of subcutaneous fat, fluid accumulation and reduced grip strength; two or more are needed for the diagnosis.' },
        { stage: 'Day 3 of NIV', q: 'Day 3 after NIV, steroids and furosemide: pH 7.52, PaCO₂ 44, HCO₃ 35, K 2.8, Cl 88. What is the best action?', opts: ['Replace KCl and correct volume/chloride (chloride-responsive alkalosis); acetazolamide if volume is stable', 'IV bicarbonate', 'Increase the furosemide dose', 'Raise the target PaCO₂ by reducing ventilation'], why: 'PaCO₂ fell quickly but the kidney still holds the extra HCO₃; diuretics and chloride and potassium deficits sustain it. KCl corrects both deficits.' },
        { stage: 'Potassium rate', q: 'K = 2.8 through a peripheral line. What is the usual maximum KCl infusion rate?', opts: ['About 10 mEq per hour (up to 20 mEq per hour through a central line with monitoring)', '40 mEq per hour peripherally', '20 mEq bolus over 5 minutes', 'IV KCl is contraindicated'], why: 'Faster rates risk arrhythmia and vein injury; rapid infusion only through a central line with cardiac monitoring.' },
        { stage: 'Summary', q: 'Which nutrition plan suits this patient best?', opts: ['Diagnose chronic severe malnutrition; adequate protein (about 1.2–1.5 g/kg), small frequent meals and pulmonary rehabilitation', 'A low-protein diet to reduce CO₂ production', 'Fasting until the hypercapnia resolves', 'High-volume, high-carbohydrate feeding'], why: 'Cachexia worsens the COPD prognosis. The goal is to preserve muscle mass; avoid carbohydrate overfeeding (more VCO₂), not protein.' }
      ]
    },
    'gr-sepsis': {
      title: 'Septic shock, ARDS and 6 litres of saline: a three-layer acidosis',
      who: '45-year-old woman, diverticular perforation, ICU day 2',
      brief: 'After an emergency laparotomy she has received 6 litres of normal saline and is on norepinephrine. On the ventilator with FiO₂ 60% and PEEP 10. She ate almost nothing for five days before surgery. Her limbs are swollen.',
      fig: { k: 'pit3', cap: 'Leg edema exam (5-second pressure)' },
      lab: { kind: 'ABG + Chemistry', o2: 'FiO₂ 60%, PEEP 10', pH: 7.18, pco2: 32, hco3: 12, po2: 72, na: 140, cl: 116, lac: 6, alb: 2.0, ca: 7.2 },
      pearl: 'In hypoalbuminemia correct the anion gap (about 2.5 per 1 g/dL fall in albumin); otherwise a lactic acidosis stays hidden under the hyperchloremic saline acidosis.',
      steps: [
        { stage: 'Oxygenation', q: 'Calculate the PaO₂/FiO₂ ratio (PaO₂ 72, FiO₂ 0.6).', why: '72 ÷ 0.6 = <b>120</b>' },
        { stage: 'Berlin definition', q: 'With P/F = 120 on PEEP 10 and bilateral infiltrates, how severe is the ARDS?', opts: ['Moderate (P/F 100–200)', 'Mild (200–300)', 'Severe (below 100)', 'It is not ARDS'], why: 'Berlin definition with PEEP of at least 5: mild 200–300, moderate 100–200, severe 100 or less. Lung-protective ventilation with a tidal volume of 6 mL/kg ideal body weight.' },
        { stage: 'Corrected anion gap', q: 'Correct the anion gap for albumin 2.0 (Na 140, Cl 116, HCO₃ 12).', why: 'AG = 140 − (116 + 12) = 12 (apparently normal!). Corrected: 12 + 2.5 × (4 − 2) = <b>17</b> → the anion gap is really high (lactate 6).' },
        { stage: 'Full interpretation', q: 'With Winters’ formula (expected 26 ± 2) and PaCO₂ 32, what is the full interpretation?', opts: ['Mixed metabolic acidosis (lactic + hyperchloremic saline) with a concurrent respiratory acidosis', 'Pure metabolic acidosis with appropriate compensation', 'Primary respiratory alkalosis', 'Pure hyperchloremic acidosis'], why: 'Two metabolic components: a high corrected anion gap (lactate) and high Cl (saline). PaCO₂ 32 is above the 24–28 range → inadequate ventilation (concurrent respiratory acidosis).' },
        { stage: 'Calcium', q: 'Calculate the albumin-corrected calcium (Ca 7.2, albumin 2.0).', why: '7.2 + 0.8 × (4 − 2) = <b>8.8</b>' },
        { stage: 'Ionized calcium', q: 'In a critically ill patient with low albumin and an acid–base disorder, ionized calcium is more reliable than albumin-corrected calcium.', why: 'The correction formula has a large error in the ICU; decide on IV calcium with the iCa (acidosis also raises the ionized fraction).' },
        { stage: 'Edema grade', q: 'A pit of about 6 mm that takes 10–12 seconds to rebound. What is the edema grade?', opts: ['3+', '1+', '2+', '4+'], why: 'Grading: 1+ ≈ 2 mm, 2+ ≈ 4 mm, 3+ ≈ 6 mm, 4+ ≈ 8 mm. Edema after fluid resuscitation raises the weight and hides the true weight loss.' },
        { stage: 'Intake criterion', q: 'In this acute context (sepsis and surgery), which malnutrition criterion is the most available and reliable?', opts: ['Energy intake of 50% or less for 5 days or more → severe criterion in the acute context', 'The current bed-scale weight', 'BMI', 'Serum albumin 2.0'], why: 'Weight is misleading with edema and fluid, and albumin in inflammation is not a marker of nutritional status (a negative acute-phase protein). Intake of 50% or less for 5 days or more in the acute context is a severe criterion.' },
        { stage: 'Decision', q: 'Which action is more reasonable for the hyperchloremic acidosis as resuscitation continues?', opts: ['Continue resuscitation with a balanced solution (Ringer’s lactate or Plasma-Lyte) instead of saline', 'Bicarbonate for every patient with pH below 7.2', 'Continue normal saline at a higher volume', 'Stop all fluids'], why: 'Balanced solutions cause less hyperchloremic acidosis and kidney injury; the lactate in Ringer’s does not prevent clearance of the patient’s lactate. Bicarbonate only in special cases (such as a very low pH with AKI).' }
      ]
    },
    'gr-stoma': {
      title: 'High-output ileostomy: non-gap acidosis, magnesium 0.9 and signs of zinc deficiency',
      who: '59-year-old man, day 10 after small bowel resection',
      brief: 'Ileostomy output is 2.5 litres a day. For ten days he has eaten less than half of his needs, and his weight fell from 78 to 69 kg in one month. He has weakness, muscle cramps and skin lesions around the mouth. ECG: U waves.',
      fig: { k: ['dermatitis', 'alopecia'], l: ['Dermatitis', 'Hair loss'], cap: 'Skin and hair findings' },
      lab: { kind: 'ABG + Chemistry', o2: 'Room air', pH: 7.29, pco2: 31, hco3: 15, po2: 92, na: 136, k: 2.7, cl: 112, mg: 0.9, bun: 42, cr: 1.4 },
      pearl: 'A high-output stoma means loss of bicarbonate, sodium, potassium, magnesium and zinc; correct magnesium first and use the urine anion gap to separate a gut cause from a renal one.',
      steps: [
        { stage: 'Anion gap', q: 'Calculate the anion gap (Na 136, Cl 112, HCO₃ 15).', why: '136 − (112 + 15) = <b>9</b> → metabolic acidosis <b>without</b> an anion gap (hyperchloremic).' },
        { stage: 'Compensation', q: 'By Winters’ formula, PaCO₂ = 31 is appropriate respiratory compensation for HCO₃ = 15.', why: '1.5 × 15 + 8 = 30.5 ± 2 → 31 is within range.' },
        { stage: 'Source of the acidosis', q: 'Urine sodium, potassium and chloride: 20, 25 and 70 mEq/L. What does the urine anion gap say?', opts: ['20 + 25 − 70 = −25 (negative) → adequate ammonium excretion; a gut cause (bicarbonate loss from the stoma)', 'Positive → renal tubular acidosis', 'Zero → indeterminate', 'The urine anion gap is of no value in NAGMA'], why: 'A negative urine anion gap means the kidney excretes ammonium (with chloride) well, so the kidney is not the problem; bicarbonate is being lost from the gut.' },
        { stage: 'Magnesium', q: 'Mg = 0.9 mg/dL with fairly normal kidneys. Per the course protocol, what is the IV magnesium sulfate dose?', opts: ['4–8 g over 12–24 hours', '1 g orally', '20 g bolus', 'No replacement needed'], why: 'Mg below 1 = severe → 4–8 g over 12–24 hours (1–1.5: 2–4 g; 1.5–1.7: 1–2 g). Without correcting magnesium the hypokalemia will not correct.' },
        { stage: 'Potassium', q: 'In hypokalemia of 2.7 with U waves, if we have a central line and cardiac monitoring, KCl infusion up to about 20 mEq per hour is acceptable.', why: 'Peripherally about 10 mEq/h; centrally with monitoring up to 20 mEq/h (and more in special cases with caution). Replace magnesium and fluid (sodium) at the same time.' },
        { stage: 'Weight loss', q: 'What is the percentage weight loss in one month (78 to 69 kg)?', why: '(78 − 69) ÷ 78 × 100 = <b>11.5%</b> → in the acute (post-surgical) context, more than 5% in one month is a severe criterion; some of it may be volume depletion.' },
        { stage: 'Micronutrient', q: 'Perioral dermatitis and hair loss in a patient with a high-output stoma point most to a deficiency of which micronutrient?', fig: { k: ['dermatitis', 'alopecia'], l: ['Dermatitis', 'Hair loss'] }, opts: ['Zinc', 'Vitamin C', 'Vitamin A', 'Iron'], why: 'Zinc losses in intestinal fluid are large; periorificial dermatitis, hair loss, altered taste and slow wound healing are its signs.' },
        { stage: 'Plan', q: 'Put the management plan in order.', steps: ['Correct volume and sodium with isotonic fluid', 'IV magnesium sulfate, then or with KCl', 'Reduce stoma output (loperamide, limit hypotonic fluids, high-sodium oral solution)', 'Replace zinc and assess nutrition support (PN if needed)'], why: 'First hemodynamic stability and the dangerous electrolytes, then control the source of loss, then replace micronutrients and nutrition.' }
      ]
    }
  };
  G.cases.forEach(c => { if (EN[c.id]) c.en = EN[c.id]; });
})(window.ACADEMY_GRAND_ROUNDS);
