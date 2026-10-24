/* تراپو — دوره «ریتما» (تفسیر نوار قلب ECG/EKG)
 * ساخته‌شده خودکار با tools/ritma-import.js از نسخه مستقل ریتما؛ دستی ویرایش نکنید (فایل را دوباره بسازید).
 * این فایل فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند؛ محتوا هنگام ورود به دوره اجرا می‌شود.
 *   content(): ماژول‌های محتوایی ریتما (هسته، پیکربندی، واژه‌نامه، شکل‌ها، دنیاها، کاراکترها، راند بالینی، نکته‌ها) بدون تغییر
 *   tools():   کارت‌های لایتنر و ابزارها (واژه‌نامه، تجزیه‌گر، ریشه‌ها، اختصارها، مقادیر مرجع)
 *   config():  کیت مشترک ترمینو (AC.termino.kit) با متن‌های ریتما
 * نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و راندها را سرور فقط به خریداران می‌دهد */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  /* شخصیت ریتما: قلبی با نوار طلایی پشت سرش (بدون بارگذاری محتوا) */
  const MASCOT = (function () { const EA = { APP: { mascot: (cx, cy) => {
      const heart = (dx, dy, s) => {
        const x = cx + dx, y = cy + dy, k = v => (v * s).toFixed(1);
        return `M${x} ${y + +k(46)} C${x - +k(50)} ${y + +k(14)} ${x - +k(54)} ${y - +k(38)} ${x - +k(25)} ${y - +k(43)} C${x - +k(11)} ${y - +k(45)} ${x - +k(2)} ${y - +k(37)} ${x} ${y - +k(29)} C${x + +k(2)} ${y - +k(37)} ${x + +k(11)} ${y - +k(45)} ${x + +k(25)} ${y - +k(43)} C${x + +k(54)} ${y - +k(38)} ${x + +k(50)} ${y + +k(14)} ${x} ${y + +k(46)}Z`;
      };
      const ty = cy + 32;
      /* نوار از پشت قلب می‌گذرد: سمت چپ یک ضربان کامل، زیر قلب خط صاف، سمت راست ضربان بعدی */
      const trace = `M${cx - 58} ${ty} h14 l3 -5 l3 5 h6 l3 6 l4 -26 l4 32 l3 -7 h56 l3 -5 l3 5 h2 l3 6 l3 -22 l3 26 l2 -6 h4`;
      return `<path d="${trace}" stroke="#FFC800" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${heart(0, 2, 1)}" fill="var(--c)" stroke="var(--c)" stroke-width="8" stroke-linejoin="round"/>
        <path d="${heart(0, 2, 1)}" fill="#000" opacity=".1"/>
        <path d="${heart(0, -1, 0.94)}" fill="var(--c)"/>
        <path d="${heart(0, 8, 0.62)}" fill="#000" opacity=".06"/>
        <path d="M${cx - 38} ${cy - 22} Q${cx - 34} ${cy - 38} ${cx - 20} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <path class="negar-spark" d="M${cx + 42} ${cy - 56} l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>`;
    } } }; return function (mood, color, size) {
    const c = color || 'var(--brand)';
    const m = mood || 'happy';
    const ink = '#3a0d16';
    const cx = 58, cy = 74;
    const my = cy + 19;
    const mouths = {
      happy: `<path d="M${cx - 11} ${my} Q${cx} ${my + 11} ${cx + 11} ${my}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cheer: `<path d="M${cx - 13} ${my - 3} Q${cx} ${my + 20} ${cx + 13} ${my - 3} Z" fill="${ink}"/><path d="M${cx - 6} ${my + 7} Q${cx} ${my + 11} ${cx + 6} ${my + 7}" fill="#ff8a9a"/>`,
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
    return `<svg class="yona yona--${m}" viewBox="0 0 120 150" width="${size || 120}" height="${(size || 120) * 1.25}" aria-hidden="true" style="--c:${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">${EA.APP.mascot(cx, cy)}
        ${brows}${eyes}
        <ellipse cx="${cx - 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="${cx + 25}" cy="${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        ${mouths[m] || mouths.happy}${tear}
      </g>
    </svg>`;
  }; })();

  const D = AC.ritma = {
    /* bitFlag: بیت یکتای این دوره در کدهای فعال‌سازی (توان ۲). هرگز عوض نشود. */
    id: 'ritma', bitFlag: 16, bit: 16, order: 5,
    /* تصویرهای نوار: فقط هنگام ورود به همین دوره بارگذاری می‌شوند */
    assets: ['courses/data-ritma-img.js'],
    nameFa: 'ریتما', nameEn: 'Ritma', subjectFa: 'تفسیر نوار قلب (ECG)', subjectEn: 'ECG interpretation',
    courseFa: 'تفسیر نوار قلب (ECG/EKG): از کاغذ شطرنجی تا بالین بیمار بدحال', courseEn: 'ECG Interpretation: From Grid Paper to the Critically Ill Patient',
    descFa: 'کاغذ نوار و لیدها، موج‌ها و محور، آریتمی‌ها و بلوک‌ها، ایسکمی و STEMI، الکترولیت‌ها و داروها، ICU و اورژانس.',
    descEn: 'Paper and leads, waves and axis, arrhythmias and blocks, ischemia and STEMI, electrolytes and drugs, ICU and emergency.',
    toolsFa: 'واژه‌نامه نوار قلب، اختصارها و مقادیر مرجع', toolsEn: 'ECG dictionary, abbreviations and reference values', domainFa: 'نوار قلب', domainEn: 'ECG',
    titleFa: 'ریتما • تفسیر نوار قلب', titleEn: 'Ritma • ECG Interpretation',
    icon: '💓', color: '#d7263d', dark: '#a8182c', light: '#fbe3e6', langs: ['fa'], codePrefix: 'RT', startWorld: "lx",
    /* سبک‌ها: سبک مشترک کیت ترمینو (kitOf) + قاعده‌های اختصاصی ریتما (css)؛ موتور هنگام ورود به دوره می‌گذارد */
    skin: 'negar', kitOf: 'termino', mascotFn: MASCOT,
    stats: {"worlds":6,"levels":18,"lessons":54,"questions":432,"rounds":18,"roundSteps":97,"chars":18,"terms":350,"roots":113,"abbr":98,"figs":169,"firstLesson":"lx1"},
    catalog: {"tagline":"هر نوار قلب یک داستان است؛ از کاغذ شطرنجی تا بالین بیمار بدحال","about":"ریتما، قلب کوچکی که نوارش را همیشه همراه دارد، تفسیر نوار قلب (ECG/EKG) را قدم‌به‌قدم یاد می‌دهد: کاغذ نوار و ۱۲ لید، فیزیولوژی موج‌ها و فواصل، محور و ریت، ریتم‌های سینوسی، دهلیزی، جانکشنال و بطنی، بلوک‌های دهلیزی‌بطنی، ایسکمی و STEMI با دیواره و شریان مسئول، بزرگی حفره‌ها، بلوک‌های شاخه‌ای، WPW، QT طولانی و Brugada، اثر الکترولیت‌ها و داروها، و در پایان نوار در ICU و اورژانس: مانیتور و آرتیفکت، پیس‌میکر، اصول ACLS و مراقبت پس از احیا. 169 نوار و شکل دوزبانه روی کاغذ شطرنجی واقعی، 350 واژه با تلفظ و 18 راند بالینی.","audience":"دانشجوی پزشکی و پرستاری، پرستار بخش، CCU، ICU و اورژانس، کارشناس فوریت‌های پزشکی، کارورز، رزیدنت و پزشک عمومی","highlights":["169 نوار و شکل آموزشی","رویکرد قدم‌به‌قدم خواندن نوار ۱۲ لیدی","18 راند بالینی و امتحان نهایی"],"outcomes":["هر نوار ۱۲ لیدی را با یک رویکرد قدم‌به‌قدم بخوانی: ریت، ریتم، محور، فواصل، موج‌ها و QTc","واژه‌ها و اختصارهای قلب و نوار را به پیشوند، ریشه و پسوند بشکنی و درست به کار ببری","ریتم‌های سینوسی، دهلیزی، جانکشنال و بطنی و انواع بلوک دهلیزی‌بطنی را از هم افتراق دهی","STEMI، معادل‌ها و تقلیدکننده‌هایش را بشناسی و دیواره و شریان درگیر را تعیین کنی","بزرگی حفره‌ها، بلوک‌های شاخه‌ای، WPW، Brugada و اثر الکترولیت‌ها و داروها را روی نوار ببینی","در بخش، اورژانس و ICU نوار خطرناک را زود تشخیص دهی و اصول اقدام اولیه را بدانی"],"worlds":[{"id":"lx","name":"زبان قلب و نوار","sub":"برق قلب، کاغذ نوار و ۱۲ لید؛ رمز واژه‌سازی: ریشه‌ها، پیشوندها، پسوندها و اختصارهای همزاد","sym":"Lx","color":"#E5484D","levels":["برق قلب و کاغذ نوار","ریشه‌های قلب و ریتم","پیشوند، پسوند و دام‌ها"]},{"id":"ph","name":"فیزیولوژی و موج‌ها","sub":"ضربان‌سازهای قلب، دپلاریزاسیون، معنی هر موج و فاصله، محور، ریت و روش منظم خواندن نوار","sym":"Ph","color":"#13A08F","levels":["ضربان‌ساز و هدایت","موج به موج","خواندن منظم نوار"]},{"id":"ar","name":"ریتم و آریتمی","sub":"ریتم‌های سینوسی، آریتمی‌های دهلیزی و بطنی، SVT، بلوک‌های AV و ریتم‌های ایست قلبی","sym":"Ar","color":"#7B5CE0","levels":["سینوس و دهلیز","جانکشن و بطن","بلوک‌ها و ایست"]},{"id":"mi","name":"ایسکمی و انفارکتوس","sub":"ایسکمی، آسیب و انفارکت؛ دیوارها و شریان مسئول؛ معادل‌های STEMI، الگوهای مشابه و NSTEMI","sym":"Mi","color":"#E8792B","levels":["ایسکمی، آسیب، انفارکت","دیوار و شریان","معادل‌ها و مشابه‌ها"]},{"id":"sc","name":"حفره‌ها، هدایت و عوامل متابولیک","sub":"بزرگی دهلیز و بطن، بلوک شاخه و فاسیکل، WPW، QT طولانی، Brugada، الکترولیت‌ها و اثر داروها","sym":"Sc","color":"#2F80D1","levels":["بزرگی حفره‌ها","شاخه‌ها و سندرم‌ها","یون‌ها و داروها"]},{"id":"cc","name":"ICU و اورژانس","sub":"مانیتور و آرتیفکت، پیس‌میکر، اصول ACLS، مسیر STEMI، اورژانس‌های غیرکرونری و مراقبت پس از احیا","sym":"Cc","color":"#C2307A","levels":["کنار تخت","الگوریتم‌ها و زمان","اورژانس‌های ویژه"]}],"tools":["واژه‌نامه نوار قلب با تلفظ و معنی فارسی","تجزیه‌گر واژه","ریشه‌ها و پسوندها","اختصارها (AF، LBBB، QTc، …)","مقادیر مرجع نوار قلب (PR، QRS، QTc، …)"]},
    /* منابع دوره (در پایان معرفی دوره و صفحه معرفی سایت نمایش داده می‌شوند) */
    refs: ["Goldberger AL, Goldberger ZD, Shvilkin A. Goldberger’s Clinical Electrocardiography: A Simplified Approach. 9th ed. Philadelphia: Elsevier; 2018.","Hampton JR, Hampton J. The ECG Made Easy. 9th ed. Edinburgh: Elsevier; 2019.","Surawicz B, Knilans TK. Chou’s Electrocardiography in Clinical Practice. 6th ed. Philadelphia: Saunders Elsevier; 2008.","Kligfield P, Gettes LS, Bailey JJ, et al. Recommendations for the standardization and interpretation of the electrocardiogram: Part I. Circulation. 2007;115(10):1306–1324.","Thygesen K, Alpert JS, Jaffe AS, et al. Fourth universal definition of myocardial infarction (2018). Circulation. 2018;138(20):e618–e651.","Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720–3826.","Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. Circulation. 2019;140(8):e382–e482.","Panchal AR, Bartos JA, Cabañas JG, et al. Part 3: Adult basic and advanced life support: 2020 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2020;142(16 Suppl 2):S366–S468."],
    css: ".chip-stat.is-heart b{color: var(--red);}\n@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }\n@keyframes jump { 0%, 100% { transform: translateY(0) scale(1); } 30% { transform: translateY(-12px) scale(1.02, .98); } 60% { transform: translateY(0) scale(1.04, .95); } }\n@keyframes blink { 0%, 92%, 100% { transform: scaleY(1); } 95% { transform: scaleY(.1); } }\n@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }\n@keyframes hover { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, -6px); } }\n@keyframes wiggle { 0%, 70%, 100% { transform: rotate(0); } 75% { transform: rotate(-12deg); } 85% { transform: rotate(12deg); } 95% { transform: rotate(-6deg); } }\n.sw:checked{background: var(--brand);}\n@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } }\n.pbar i{position: absolute; inset-block: 0; inset-inline-start: 0; width: 3%; background: var(--brand); border-radius: 99px; transition: width .5s cubic-bezier(.3, 1.4, .5, 1);}\n@keyframes comboPop { 0% { opacity: 0; transform: translateY(8px) scale(.8); } 15% { opacity: 1; transform: translateY(0) scale(1.1); } 80% { opacity: 1; } 100% { opacity: 0; transform: translateY(-6px); } }\n.p-hearts{color: var(--red); font-size: 18px;}\n@keyframes qIn { from { opacity: 0; transform: translateX(-24px); } }\n@keyframes pop { 50% { transform: scale(1.03); } }\n@keyframes shake { 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }\ntable.mini td{padding: 7px 10px; border-bottom: 1px solid var(--line); line-height: 1.6;}\ntable.mini th{padding: 7px 10px; text-align: start; font-weight: 800; font-size: 13px; background: color-mix(in srgb, var(--wc, var(--brand)) 12%, var(--bg)); color: var(--text); border-bottom: 2px solid var(--line);}\ntable.mini td{text-align: start; vertical-align: top;}\ntable.mini td:first-child{font-weight: 800;}\n@keyframes fbIn { from { transform: translateY(30px); } }\n@keyframes starIn { to { transform: scale(1); } }\n@keyframes tileIn { from { opacity: 0; transform: translateY(16px) scale(.8); } to { opacity: 1; transform: none; } }\n@keyframes flicker { from { transform: scale(1) rotate(-3deg); } to { transform: scale(1.08) rotate(3deg); } }\n.guide__h{position: sticky; top: 0; z-index: 3; display: flex; align-items: center; gap: 12px; padding: 16px 18px; background: var(--wc); color: #fff; border-radius: 24px 24px 0 0;}\n.ob__logo{text-align: center; font-size: 56px; font-weight: 900; color: var(--brand); line-height: 1; letter-spacing: -1px;}\n@keyframes spin { to { transform: rotate(360deg); } }\n@keyframes charIn { from { transform: scale(.2) rotate(-20deg); opacity: 0; } }\n.avatar:has(img){background: var(--bg2); box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--brand);}\n.land__hero{max-width: 760px; margin: 0 auto; padding: 28px 16px 36px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; background: radial-gradient(circle at 50% 22%, color-mix(in srgb, var(--brand) 16%, transparent), color-mix(in srgb, var(--coral) 5%, transparent) 45%, transparent 65%);}\n@keyframes orbit { from { transform: rotate(0) translateX(125px); } to { transform: rotate(360deg) translateX(125px); } }\n@keyframes counter { from { rotate: 0deg; } to { rotate: -360deg; } }\n@media (max-width: 420px){@keyframes orbit { from { transform: rotate(0) translateX(104px); } to { transform: rotate(360deg) translateX(104px); } }}\n.range{width: 100%; accent-color: var(--brand); height: 28px;}\n.tsteps li{counter-increment: s; position: relative; padding-block: 6px 10px; padding-inline: 36px 0; border-inline-start: 0; font-size: 14.5px;}\n.land__out li::before{content: \"✓\"; flex: none; width: 26px; height: 26px; border-radius: 50%; background: var(--brand); color: #fff; font-weight: 900; display: grid; place-items: center; font-size: 14px;}\n.land__sticky{position: sticky; bottom: 0; z-index: 3; padding: 10px 16px calc(10px + env(safe-area-inset-bottom)); background: linear-gradient(transparent, var(--bg) 35%); transform: translateY(110%); transition: transform .3s; pointer-events: none;}\n.negar-spark{transform-box: fill-box; transform-origin: center; animation: twinkle 2.4s ease-in-out infinite;}\n@keyframes twinkle { 0%, 100% { transform: scale(1) rotate(0); opacity: 1; } 50% { transform: scale(.7) rotate(25deg); opacity: .75; } }\n.yona--cheer .negar-spark{animation-duration: .8s;}\n.fig{margin: 10px 0; display: grid; grid-template-columns: repeat(var(--n, 1), minmax(0, 1fr)); gap: 8px;}\n.fig--n1{--n: 1;}\n.fig--n2{--n: 2;}\n.fig--n3{--n: 3;}\n.fig--n4{--n: 2;}\n.fig--n5{--n: 5;}\n.fig__i img{display: block; width: 100%; height: auto; max-height: 260px; object-fit: contain; border-radius: 8px; cursor: zoom-in; -webkit-user-drag: none; user-select: none;}\n.fig--n1 .fig__i img{max-height: 280px;}\n.fig--n1{max-width: 420px; margin-inline: auto; width: 100%;}\n.fig__l{font-size: 12.5px; font-weight: 800; color: #3c3c3c; text-align: center; line-height: 1.4;}\n.fig figcaption{grid-column: 1 / -1; font-size: 12.5px; color: var(--muted); text-align: center; line-height: 1.5;}\n.qwrap .fig{margin: 6px 0 12px;}\n.learn__body .fig{margin: 12px 0;}\n@media (min-width: 700px){.fig--n4{--n: 4;}}\n@media (max-width: 480px){.fig--n5{--n: 3;}\n.fig--n3 .fig__l{font-size: 11px;}}\n.tnote{width: 100%; font: inherit; font-size: 14px; line-height: 1.7; padding: 10px 12px; border: 2px solid var(--line); border-radius: 12px; background: var(--bg2); color: var(--text); resize: vertical;}\n.rbrief+.fig{margin-top: 10px;}\n.land__src li::before{content: \"📚\"; background: none; width: auto;}\n.demo .fig{margin-bottom: 2px;}\n.vs__c *, .match *, .opt *{text-wrap: wrap;}\n.art--q .art-ttl, .art--q .art-nt, .art--q .art-ft{display: none;}\n.fig.fig--photo{--n: 1; max-width: 760px; margin-inline: auto; width: 100%;}\n.fig--photo .fig__i img, .fig--n1.fig--photo .fig__i img{max-height: none;}\n.learn__body b, .learn__body strong{font-weight: 700;}\n.fig figcaption{font-size: 13.5px; line-height: 1.85;}"
  };

  D.content = function () {
    window.EA.IMG = D.IMG || {}; // نوارها و شکل‌ها (فایل data-ritma-img.js)
/* ریتما — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
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
  EA.lang = 'fa';
  EA.T = fa => fa;
  EA.isEn = () => false;
  EA.tx = x => (x && typeof x === 'object' && 'fa' in x ? x.fa : x);
  EA.onLang = () => { };
  EA.APP = { name: 'ریتما', key: 'ritma', title: 'ریتما · تفسیر نوار قلب' }; /* بقیه کلیدها در config.js */

  /* ---------- اعداد ---------- */
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
   * (vertebra → vertebrae، PET / SPECT، C1–C7)؛ ولی «،» و «·» فارسی جداکننده فهرست راست‌به‌چپ است.
   * پرانتزی که جفتش درون تکه نیست بیرون از bdi می‌ماند تا در متن فارسی درست قرینه شود. */
  const BI_TOK = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?", BI_TOK2 = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ0-9][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?";
  const BI_RUN = new RegExp(`(?<![&#\\w])${BI_TOK}(?:(?:\\s*(?:[,+=:\\/→↔×]|&amp;|&)\\s*|\\s+)${BI_TOK2})*`, 'g');
  /** عدد فارسی و یکای لاتینش («۱۲۰ ms»، «۲٫۵ mm») */
  const NUM_UNIT = /((?<![A-Za-z0-9۰-۹])[۰-۹][۰-۹٫]*\s?(?:mm\/s|ms|mV|mm|bpm|mmHg|kg|cm)(?![A-Za-z]))/;
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
  EA.bi = s => {
    let depth = 0;
    const out = String(s).split(/(<[^>]+>)/).map(x => {
      if (x.startsWith('<')) { if (/^<bdi\b/i.test(x)) depth++; else if (/^<\/bdi>/i.test(x)) depth--; return x; }
      /* نشانه LRM دیگر لازم نیست (خود bdi جهت را نگه می‌دارد) و پیوستن تکه‌ها را می‌شکند */
      return depth ? x : x.replace(/\u200e/g, '').split(NUM_UNIT).map((y, i) => (i % 2 ? `<bdi dir="ltr" class="nw">${y}</bdi>` : y.replace(BI_RUN, biWrap))).join('');
    }).join('');
    /* تکه‌های کوتاه لاتین (مثل ‎-scopy) نباید سر خط از خط تیره بشکنند */
    /* nowrap جلوی شکستن خط در فاصله بعدی را هم می‌گیرد؛ <wbr> آن فرصت را برمی‌گرداند */
    return out.replace(/<bdi dir="ltr">([^<\s]{1,26})<\/bdi>(?=(\s?))/g, (_, t, sp) => `<bdi dir="ltr" class="nw">${t}</bdi>${sp ? '<wbr>' : ''}`);
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
/* ریتما — پیکربندی برنامه: نام، متن‌های صفحه معرفی و ورود، سطح‌ها، نقش‌های لیگ، نشان‌ها و شخصیت
 * پس از core.js و پیش از بقیه فایل‌های محتوا بارگذاری می‌شود؛ موتور مشترک این مقادیر را از EA.APP می‌خواند.
 * مقادیر مرجع آموزشی (PR، QRS، QTc، آستانه STEMI و…) در docs/DECISIONS.md ثبت شده‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.APP = Object.assign(EA.APP || {}, {
    name: 'ریتما',
    key: 'ritma',
    certCode: 'RT',
    title: 'ریتما · تفسیر نوار قلب',
    subject: `تفسیر نوار قلب (${e('ECG/EKG')}) برای بخش، اورژانس و ${e('ICU')}`,
    kicker: `💓 تفسیر نوار قلب (${e('ECG/EKG')}): از کاغذ شطرنجی تا بالین بیمار بدحال`,
    hello: `سلام، من <b>ریتما</b> هستم؛ یک قلب کوچک که نوار خودش را همیشه همراه دارد! این‌جا نوار قلب را حفظ نمی‌کنی؛ <b>می‌خوانی‌اش</b>: خانه‌ها را می‌شماری، موج‌ها را نام می‌بری، ریتم را پیدا می‌کنی و هر نوار تازه را قدم‌به‌قدم تفسیر می‌کنی.`,
    disclaimer: 'ریتما یک ابزار آموزشی است و جایگزین قضاوت بالینی، تفسیر متخصص قلب، دستور پزشک یا پروتکل بیمارستان نیست.',
    eyes: `ده‌ها نوار و شکل دوزبانه که روی کاغذ شطرنجی واقعی کشیده شده‌اند؛ از موج‌های ${e('P')}، ${e('QRS')} و ${e('T')} تا ${e('AF')}، بلوک‌های قلبی، ${e('STEMI')} و هایپرکالمی.`,
    outcomes: [
      `هر نوار ۱۲ لیدی را با یک رویکرد قدم‌به‌قدم بخوانی: ریت، ریتم، محور، فواصل، موج‌ها و ${e('QTc')}`,
      'واژه‌ها و اختصارهای قلب و نوار را به پیشوند، ریشه و پسوند بشکنی و درست به کار ببری',
      'ریتم‌های سینوسی، دهلیزی، جانکشنال و بطنی و انواع بلوک دهلیزی‌بطنی را از هم افتراق دهی',
      `${e('STEMI')}، معادل‌ها و تقلیدکننده‌هایش را بشناسی و دیواره و شریان درگیر را تعیین کنی`,
      `بزرگی حفره‌ها، بلوک‌های شاخه‌ای، ${e('WPW')}، ${e('Brugada')} و اثر الکترولیت‌ها و داروها را روی نوار ببینی`,
      `در بخش، اورژانس و ${e('ICU')} نوار خطرناک را زود تشخیص دهی و اصول اقدام اولیه را بدانی`
    ],
    endText: 'هر روز فقط ۵ دقیقه. چند هفته بعد، نوار قلب را مثل یک متن آشنا می‌خوانی.',
    course: `دوره آموزشی <b>تفسیر نوار قلب (${e('ECG/EKG')})</b> شامل زبان قلب و نوار، فیزیولوژی و موج‌ها، ریتم و آریتمی، ایسکمی و انفارکتوس، حفره‌ها و هدایت و عوامل متابولیک، و نوار در ${e('ICU')} و اورژانس`,
    obHello: 'سلام! من ریتما هستم؛ قلبی که نوارش را همیشه همراه دارد 💓 اسمت چیه؟',
    obWorld: 'از کدام دنیا شروع کنیم؟ اگر تازه‌کاری، «زبان قلب و نوار» بهترین شروع است؛ کاغذ نوار، لیدها و ریشه‌های پایه آن‌جا یاد داده می‌شوند!',

    /** سؤال نمونه صفحه معرفی؛ گزینه اول درست است و در اجرا به‌هم می‌ریزد */
    demo: () => ({
      q: `واژه ${e('<b>bradycardia</b>')} یعنی…`,
      fig: { a: ['sinus-brady'], l: ['rate < 60 bpm'] },
      opts: ['ضربان آهسته قلب', 'ضربان تند قلب', 'ضربان نامنظم قلب', 'بزرگی قلب'],
      why: `${EA.K.wb('brady-', '-cardia')}<br><b dir="ltr">brady-</b> = آهسته، <b dir="ltr">-cardia</b> = حالت قلب. پس <b>ضربان آهسته قلب</b>؛ در بزرگسال، ریت سینوسی کمتر از ۶۰ در دقیقه. معنی را از پسوند شروع کن!`
    }),

    /** نام هر پله امتیاز (۱۵ پله، هم‌تراز با LEVELS در موتور) */
    titles: ['تازه‌وارد بخش قلب', 'شمارنده خانه‌ها', 'شکارچی موج P', 'نگهبان فاصله PR', 'رمزگشای QRS', 'کاوشگر محور', 'خواننده ریتم',
      'ردیاب آریتمی', 'نگهبان بلوک‌ها', 'شکارچی ST', 'کارآگاه انفارکتوس', 'استاد الکترولیت‌ها', 'فرمانده تله‌متری', 'قهرمان کد احیا', 'اسطوره الکتروکاردیوگرافی'],

    /** نقش هم‌گروهی‌های لیگ هفتگی (۱۳ نقش) */
    leagueRoles: ['دانشجوی پزشکی', 'دانشجوی پرستاری', 'کارورز پزشکی', 'پرستار CCU', 'پرستار ICU', 'پرستار اورژانس', 'رزیدنت طب اورژانس',
      'رزیدنت داخلی', 'رزیدنت قلب', 'کارشناس فوریت‌های پزشکی', 'پرستار بخش داخلی', 'کارشناس اتاق عمل', 'پزشک عمومی'],

    firstBadge: { id: 'first', icon: '💓', name: 'اولین ضربان', desc: 'اولین درس را تمام کن' },
    worldBadges: {
      lx: { icon: '🔤', name: 'رمزگشای نوار', desc: 'آزمون دنیای زبان قلب و نوار را قبول شو' },
      ph: { icon: '📈', name: 'شکارچی موج', desc: 'آزمون دنیای فیزیولوژی و موج‌ها را قبول شو' },
      ar: { icon: '🎵', name: 'استاد ریتم', desc: 'آزمون دنیای ریتم و آریتمی را قبول شو' },
      mi: { icon: '🫀', name: 'نگهبان میوکارد', desc: 'آزمون دنیای ایسکمی و انفارکتوس را قبول شو' },
      sc: { icon: '⚡', name: 'مهندس هدایت', desc: 'آزمون دنیای حفره‌ها، هدایت و عوامل متابولیک را قبول شو' },
      cc: { icon: '🚑', name: 'فرمانده کد', desc: 'آزمون دنیای ICU و اورژانس را قبول شو' }
    },
    confetti: ['#D7263D', '#E5484D', '#13A08F', '#7B5CE0', '#E8792B', '#2F80D1', '#C2307A', '#FFC800'],

    /* ابزار تجزیه‌گر واژه */
    parseDefault: 'bradycardia',
    parseSamples: ['bradyarrhythmia', 'tachycardia', 'electrocardiogram', 'atrioventricular', 'supraventricular', 'pericarditis', 'cardiomegaly', 'hyperkalemia'],
    ph: {
      search: 'جست‌وجو: STEMI، بلوک، tachycardia…',
      parse: 'e.g. tachycardia',
      roots: 'جست‌وجو: cardi/o، ‎-gram‎، بطن…',
      abbr: 'جست‌وجو: AF، LBBB، QTc…'
    },
    toolsDisclaimer: '⚕️ ریتما ابزار آموزشی است؛ مقادیر مرجع نوار قلب با سن، جنس، ضربان و تنظیم دستگاه تغییر می‌کنند و جایگزین تفسیر متخصص نیستند.',

    /** بدن شخصیت ریتما: قلبی با نوار طلایی پشت سرش. (cx, cy) مرکز چهره است و چشم و دهان را موتور می‌کشد. */
    mascot: (cx, cy) => {
      const heart = (dx, dy, s) => {
        const x = cx + dx, y = cy + dy, k = v => (v * s).toFixed(1);
        return `M${x} ${y + +k(46)} C${x - +k(50)} ${y + +k(14)} ${x - +k(54)} ${y - +k(38)} ${x - +k(25)} ${y - +k(43)} C${x - +k(11)} ${y - +k(45)} ${x - +k(2)} ${y - +k(37)} ${x} ${y - +k(29)} C${x + +k(2)} ${y - +k(37)} ${x + +k(11)} ${y - +k(45)} ${x + +k(25)} ${y - +k(43)} C${x + +k(54)} ${y - +k(38)} ${x + +k(50)} ${y + +k(14)} ${x} ${y + +k(46)}Z`;
      };
      const ty = cy + 32;
      /* نوار از پشت قلب می‌گذرد: سمت چپ یک ضربان کامل، زیر قلب خط صاف، سمت راست ضربان بعدی */
      const trace = `M${cx - 58} ${ty} h14 l3 -5 l3 5 h6 l3 6 l4 -26 l4 32 l3 -7 h56 l3 -5 l3 5 h2 l3 6 l3 -22 l3 26 l2 -6 h4`;
      return `<path d="${trace}" stroke="#FFC800" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${heart(0, 2, 1)}" fill="var(--c)" stroke="var(--c)" stroke-width="8" stroke-linejoin="round"/>
        <path d="${heart(0, 2, 1)}" fill="#000" opacity=".1"/>
        <path d="${heart(0, -1, 0.94)}" fill="var(--c)"/>
        <path d="${heart(0, 8, 0.62)}" fill="#000" opacity=".06"/>
        <path d="M${cx - 38} ${cy - 22} Q${cx - 34} ${cy - 38} ${cx - 20} ${cy - 40}" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
        <path class="negar-spark" d="M${cx + 42} ${cy - 56} l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>`;
    }
  });

  /* ساختار آزمون‌ها همان مرجع می‌ماند */
  EA.exam = {
    checkpoint: { count: 12, gens: 4, pass: 0.7 },
    final: { perWorld: 6, gensPerWorld: 2, pass: 0.8, minutes: 25 }
  };

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* ریتما — واژه‌نامه نوار قلب
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی (با اجزای واژه)، معادل فارسی، دنیا، دسته، اختصارهای مرتبط]
 * دسته‌ها همان چهار دسته خام مرجع‌اند و در lexicon.js به هفت دسته نمایشی ریز می‌شوند.
 * دنیاها: lx زبان قلب و نوار · ph فیزیولوژی و موج‌ها · ar ریتم و آریتمی · mi ایسکمی و انفارکتوس · sc حفره‌ها، هدایت و عوامل متابولیک · cc ICU و اورژانس */
(function (root) {
  const EA = root.EA = root.EA || {};
  const A = 'Anatomy_and_Physiology', D = 'Pathology_and_Disorders', L = 'Laboratory_and_Diagnostics', T = 'Pharmacology_and_Treatment';
  EA.TERMS_RAW = [
    /* ================= lx: زبان قلب و نوار ================= */
    ['heart', 'hart', 'Hollow muscular organ that pumps blood through the circulation; its electrical activity is recorded by the ECG.', 'قلب', 'lx', A, []],
    ['cardiac', 'KAR-dee-ak', 'Pertaining to the heart (cardi/o = heart, -ac = pertaining to).', 'قلبی، مربوط به قلب', 'lx', A, []],
    ['cardiology', 'kar-dee-OL-oh-jee', 'Study and medical specialty of the heart and its diseases (cardi/o = heart, -logy = study of).', 'قلب‌شناسی', 'lx', A, []],
    ['cardiologist', 'kar-dee-OL-oh-jist', 'Physician specializing in heart disease (cardi/o = heart, -logist = specialist).', 'متخصص قلب', 'lx', A, []],
    ['electrocardiogram', 'ee-lek-troh-KAR-dee-oh-gram', 'Record of the electrical activity of the heart (electr/o = electricity, cardi/o = heart, -gram = record).', 'نوار قلب (الکتروکاردیوگرام)', 'lx', L, ['ECG', 'EKG']],
    ['electrocardiograph', 'ee-lek-troh-KAR-dee-oh-graf', 'Instrument that records the electrical activity of the heart (-graph = instrument for recording).', 'دستگاه نوار قلب', 'lx', L, ['ECG']],
    ['electrocardiography', 'ee-lek-troh-kar-dee-OG-rah-fee', 'Process of recording the electrical activity of the heart (-graphy = process of recording).', 'نوارنگاری قلب', 'lx', L, ['ECG']],
    ['electrode', 'ee-LEK-trohd', 'Conductive pad placed on the skin that picks up the heart\'s electrical signals.', 'الکترود', 'lx', L, []],
    ['lead', 'leed', 'A view of the heart\'s electrical activity between a positive pole and a reference point; a standard ECG has 12 leads.', 'لید (اشتقاق)', 'lx', L, []],
    ['limb leads', 'lim leedz', 'The six frontal-plane leads I, II, III, aVR, aVL and aVF recorded from electrodes on the arms and legs.', 'لیدهای اندامی', 'lx', L, []],
    ['augmented limb lead', 'awg-MEN-ted lim leed', 'Unipolar limb lead (aVR, aVL, aVF) whose signal is amplified against a combined reference.', 'لید اندامی تقویت‌شده', 'lx', L, []],
    ['precordial leads', 'pree-KOR-dee-al leedz', 'Chest leads V1 to V6 that view the heart in the horizontal plane (pre- = before, cordi/o = heart).', 'لیدهای سینه‌ای (پره‌کوردیال)', 'lx', L, []],
    ['calibration', 'kal-ih-BRAY-shun', 'Standard signal (10 mm = 1 mV) printed on the ECG to confirm the gain is correct.', 'کالیبراسیون (استاندارد دستگاه)', 'lx', L, []],
    ['millivolt', 'MIL-ih-vohlt', 'One-thousandth of a volt; unit of ECG amplitude (milli- = one-thousandth, volt).', 'میلی‌ولت', 'lx', A, ['mV']],
    ['millisecond', 'MIL-ih-sek-ond', 'One-thousandth of a second; one small ECG box equals 40 ms at 25 mm/s.', 'میلی‌ثانیه', 'lx', A, ['ms']],
    ['amplitude', 'AM-plih-tood', 'Height or depth of a wave measured from the isoelectric line, in millimeters or millivolts.', 'دامنه (ارتفاع موج)', 'lx', A, []],
    ['atrium', 'AY-tree-um', 'One of the two upper chambers of the heart that receive blood (plural: atria).', 'دهلیز', 'lx', A, ['RA', 'LA']],
    ['atrial', 'AY-tree-al', 'Pertaining to the atrium (atri/o = atrium, -al = pertaining to).', 'دهلیزی', 'lx', A, []],
    ['ventricle', 'VEN-trih-kul', 'One of the two lower pumping chambers of the heart.', 'بطن', 'lx', A, ['RV', 'LV']],
    ['ventricular', 'ven-TRIK-yoo-lar', 'Pertaining to a ventricle (ventricul/o = ventricle, -ar = pertaining to).', 'بطنی', 'lx', A, []],
    ['myocardium', 'my-oh-KAR-dee-um', 'Muscular middle layer of the heart wall (my/o = muscle, cardi/o = heart, -um = structure).', 'میوکارد (عضله قلب)', 'lx', A, []],
    ['myocardial', 'my-oh-KAR-dee-al', 'Pertaining to the heart muscle (my/o = muscle, cardi/o = heart, -al = pertaining to).', 'میوکاردی', 'lx', A, []],
    ['endocardium', 'en-doh-KAR-dee-um', 'Inner lining of the heart chambers (endo- = within, cardi/o = heart, -um = structure).', 'آندوکارد (لایه درونی قلب)', 'lx', A, []],
    ['epicardium', 'ep-ih-KAR-dee-um', 'Outer layer of the heart wall (epi- = upon, cardi/o = heart, -um = structure).', 'اپی‌کارد (لایه بیرونی قلب)', 'lx', A, []],
    ['pericardium', 'pair-ih-KAR-dee-um', 'Double-layered sac that surrounds the heart (peri- = around, cardi/o = heart, -um = structure).', 'پریکارد (کیسه دور قلب)', 'lx', A, []],
    ['septum', 'SEP-tum', 'Wall that divides the heart into right and left sides.', 'دیواره (سپتوم)', 'lx', A, []],
    ['interventricular septum', 'in-ter-ven-TRIK-yoo-lar SEP-tum', 'Wall between the two ventricles (inter- = between); its activation forms the first part of the QRS.', 'دیواره بین‌بطنی', 'lx', A, ['IVS']],
    ['interatrial septum', 'in-ter-AY-tree-al SEP-tum', 'Wall between the two atria (inter- = between, atri/o = atrium).', 'دیواره بین‌دهلیزی', 'lx', A, []],
    ['coronary', 'KOR-oh-nair-ee', 'Pertaining to the arteries that encircle the heart like a crown (coron/o = crown, -ary = pertaining to).', 'کرونری (تاجی)', 'lx', A, []],
    ['coronary artery', 'KOR-oh-nair-ee AR-ter-ee', 'Artery that supplies blood to the heart muscle.', 'شریان کرونر', 'lx', A, []],
    ['aorta', 'ay-OR-tah', 'Main artery leaving the left ventricle; the coronary arteries arise from its root.', 'آئورت', 'lx', A, []],
    ['valve', 'valv', 'Flap structure between chambers or at an outflow that keeps blood moving in one direction.', 'دریچه', 'lx', A, []],
    ['cardiomegaly', 'kar-dee-oh-MEG-ah-lee', 'Enlargement of the heart (cardi/o = heart, -megaly = enlargement).', 'بزرگی قلب', 'lx', D, []],
    ['cardioplegia', 'kar-dee-oh-PLEE-jee-ah', 'Deliberate temporary arrest of the heart, usually with a cold potassium-rich solution during open-heart surgery (cardi/o = heart, -plegia = paralysis).', 'کاردیوپلژی (توقف عمدی قلب در جراحی)', 'lx', T, []],
    ['cardiomyopathy', 'kar-dee-oh-my-OP-ah-thee', 'Disease of the heart muscle (cardi/o = heart, my/o = muscle, -pathy = disease).', 'کاردیومیوپاتی (بیماری عضله قلب)', 'lx', D, []],
    ['carditis', 'kar-DY-tis', 'Inflammation of the heart (cardi/o = heart, -itis = inflammation).', 'التهاب قلب', 'lx', D, []],
    ['endocarditis', 'en-doh-kar-DY-tis', 'Inflammation of the inner lining and valves of the heart (endo- = within, cardi/o = heart, -itis = inflammation).', 'اندوکاردیت', 'lx', D, []],
    ['bradycardia', 'bray-dee-KAR-dee-ah', 'Slow heart rate, below 60 beats per minute in adults (brady- = slow, -cardia = heart condition).', 'برادی‌کاردی (ضربان آهسته)', 'lx', D, ['bpm']],
    ['tachycardia', 'tak-ih-KAR-dee-ah', 'Fast heart rate, above 100 beats per minute in adults (tachy- = fast, -cardia = heart condition).', 'تاکی‌کاردی (ضربان تند)', 'lx', D, ['bpm']],
    ['arrhythmia', 'ah-RITH-mee-ah', 'Any rhythm other than normal sinus rhythm (a- = without, -rrhythmia = rhythm condition).', 'آریتمی (بی‌نظمی ریتم)', 'lx', D, []],
    ['dysrhythmia', 'dis-RITH-mee-ah', 'Abnormal heart rhythm; often used as a synonym of arrhythmia (dys- = abnormal, rhythm/o = rhythm, -ia = condition).', 'دیس‌ریتمی (ریتم نابهنجار)', 'lx', D, []],
    ['bradyarrhythmia', 'bray-dee-ah-RITH-mee-ah', 'Abnormal rhythm with a slow ventricular rate (brady- = slow, a- = without, -rrhythmia = rhythm condition).', 'برادی‌آریتمی (آریتمی کند)', 'lx', D, []],
    ['tachyarrhythmia', 'tak-ee-ah-RITH-mee-ah', 'Abnormal rhythm with a fast ventricular rate (tachy- = fast, a- = without, -rrhythmia = rhythm condition).', 'تاکی‌آریتمی (آریتمی تند)', 'lx', D, []],
    ['palpitation', 'pal-pih-TAY-shun', 'Unpleasant awareness of a rapid, forceful or irregular heartbeat.', 'تپش قلب', 'lx', D, []],
    ['syncope', 'SIN-koh-pee', 'Transient loss of consciousness due to reduced brain blood flow; arrhythmia is an important cause.', 'سنکوپ (غش)', 'lx', D, []],
    ['echocardiography', 'ek-oh-kar-dee-OG-rah-fee', 'Ultrasound imaging of the heart (ech/o = sound, cardi/o = heart, -graphy = process of recording).', 'اکوکاردیوگرافی', 'lx', L, ['TTE']],
    ['echocardiogram', 'ek-oh-KAR-dee-oh-gram', 'Ultrasound record of the heart\'s structure and motion (ech/o = sound, cardi/o = heart, -gram = record).', 'اکوی قلب', 'lx', L, []],
    ['stethoscope', 'STETH-oh-skohp', 'Instrument for listening to the heart and lungs (steth/o = chest, -scope = instrument for examining).', 'گوشی پزشکی', 'lx', L, []],
    ['intercostal space', 'in-ter-KOS-tal spays', 'Space between two ribs; used to place the chest electrodes (inter- = between, cost/o = rib).', 'فضای بین‌دنده‌ای', 'lx', A, ['ICS']],
    ['midclavicular line', 'mid-klah-VIK-yoo-lar line', 'Vertical line through the middle of the clavicle; V4 sits on it in the 5th intercostal space.', 'خط میدکلاویکولار', 'lx', A, ['MCL']],
    ['anterior axillary line', 'an-TEER-ee-or AK-sih-lair-ee line', 'Vertical line from the front fold of the armpit; site of V5.', 'خط زیربغلی قدامی', 'lx', A, ['AAL']],
    ['midaxillary line', 'mid-AK-sih-lair-ee line', 'Vertical line from the middle of the armpit; site of V6.', 'خط زیربغلی میانی', 'lx', A, ['MAL']],
    ['cardiovascular', 'kar-dee-oh-VAS-kyoo-lar', 'Pertaining to the heart and blood vessels (cardi/o = heart, vascul/o = vessel, -ar = pertaining to).', 'قلبی‌عروقی', 'lx', A, []],

    /* ================= ph: فیزیولوژی و موج‌ها ================= */
    ['conduction system', 'kon-DUK-shun SIS-tem', 'Specialized cells that generate and rapidly spread the electrical impulse: SA node, AV node, bundle of His, bundle branches and Purkinje fibers.', 'سیستم هدایتی قلب', 'ph', A, []],
    ['sinoatrial node', 'sy-noh-AY-tree-al nohd', 'Natural pacemaker of the heart at the top of the right atrium (sin/o = sinus, atri/o = atrium).', 'گره سینوسی‌دهلیزی', 'ph', A, ['SA']],
    ['atrioventricular node', 'ay-tree-oh-ven-TRIK-yoo-lar nohd', 'Node that delays the impulse between atria and ventricles (atri/o = atrium, ventricul/o = ventricle).', 'گره دهلیزی‌بطنی', 'ph', A, ['AV']],
    ['sinoatrial', 'sy-noh-AY-tree-al', 'Pertaining to the sinus node and the atrium (sin/o = sinus, atri/o = atrium, -al = pertaining to).', 'سینوسی‌دهلیزی', 'ph', A, ['SA']],
    ['atrioventricular', 'ay-tree-oh-ven-TRIK-yoo-lar', 'Pertaining to the atria and ventricles (atri/o = atrium, ventricul/o = ventricle, -ar = pertaining to).', 'دهلیزی‌بطنی', 'ph', A, ['AV']],
    ['bundle of His', 'BUN-dul uv hiss', 'Short conducting bundle that carries the impulse from the AV node into the ventricular septum.', 'دسته هیس', 'ph', A, []],
    ['bundle branch', 'BUN-dul branch', 'Right or left division of the bundle of His that conducts the impulse to each ventricle.', 'شاخه دسته‌ای (باندل برنچ)', 'ph', A, []],
    ['left anterior fascicle', 'left an-TEER-ee-or FAS-ih-kul', 'Thin anterior-superior division of the left bundle branch.', 'فاسیکل قدامی چپ', 'ph', A, []],
    ['left posterior fascicle', 'left pos-TEER-ee-or FAS-ih-kul', 'Thick posterior-inferior division of the left bundle branch.', 'فاسیکل خلفی چپ', 'ph', A, []],
    ['Purkinje fibers', 'per-KIN-jee FY-berz', 'Network of fast-conducting fibers beneath the endocardium that spreads the impulse through the ventricles.', 'الیاف پورکنژ', 'ph', A, []],
    ['pacemaker', 'PAYS-may-ker', 'Site that sets the heart rate; normally the SA node. The same word names an implanted pacing device.', 'ضربان‌ساز (پیس‌میکر)', 'ph', A, []],
    ['automaticity', 'aw-toh-mah-TIS-ih-tee', 'Ability of pacemaker cells to generate impulses spontaneously.', 'خودکاری', 'ph', A, []],
    ['depolarization', 'dee-poh-lar-ih-ZAY-shun', 'Electrical activation of a cell as its inside becomes positive (de- = reversal, polar/o = pole, -ization = process).', 'دپلاریزاسیون', 'ph', A, []],
    ['repolarization', 'ree-poh-lar-ih-ZAY-shun', 'Return of the cell to its resting electrical state (re- = again, polar/o = pole, -ization = process).', 'رپلاریزاسیون (بازقطبش)', 'ph', A, []],
    ['action potential', 'AK-shun poh-TEN-shal', 'Sequence of voltage changes across the cell membrane during depolarization and repolarization (phases 0 to 4).', 'پتانسیل عمل', 'ph', A, []],
    ['refractory period', 'ree-FRAK-tor-ee PEER-ee-ud', 'Time after activation during which a cell cannot respond normally to a new stimulus.', 'دوره تحریک‌ناپذیری', 'ph', A, []],
    ['systole', 'SIS-toh-lee', 'Contraction phase of the cardiac cycle.', 'سیستول (انقباض)', 'ph', A, []],
    ['diastole', 'dy-AS-toh-lee', 'Relaxation and filling phase of the cardiac cycle.', 'دیاستول (استراحت)', 'ph', A, []],
    ['cardiac cycle', 'KAR-dee-ak SY-kul', 'One complete heartbeat: electrical activation followed by mechanical systole and diastole.', 'چرخه قلبی', 'ph', A, []],
    ['heart rate', 'hart rayt', 'Number of ventricular beats per minute.', 'ضربان قلب (ریت)', 'ph', A, ['HR', 'bpm']],
    ['isoelectric line', 'eye-soh-ee-LEK-trik line', 'Flat baseline of the ECG with no net electrical activity, usually judged on the TP segment (iso- = equal).', 'خط ایزوالکتریک (خط پایه)', 'ph', A, []],
    ['isoelectric', 'eye-soh-ee-LEK-trik', 'Having equal positive and negative deflection, or none (iso- = equal, electr/o = electricity, -ic = pertaining to).', 'هم‌پتانسیل (ایزوالکتریک)', 'ph', A, []],
    ['P wave', 'pee wayv', 'First ECG wave, produced by atrial depolarization.', 'موج P', 'ph', A, []],
    ['PR interval', 'pee-ar IN-ter-val', 'Time from the start of the P wave to the start of the QRS; normal 120 to 200 ms.', 'فاصله PR', 'ph', A, []],
    ['PR segment', 'pee-ar SEG-ment', 'Flat line from the end of the P wave to the start of the QRS; reflects AV nodal delay.', 'قطعه PR', 'ph', A, []],
    ['QRS complex', 'kyoo-ar-ess KOM-pleks', 'Group of waves produced by ventricular depolarization; normal duration up to 110 ms.', 'کمپلکس QRS', 'ph', A, []],
    ['Q wave', 'kyoo wayv', 'First negative deflection of the QRS complex before any R wave.', 'موج Q', 'ph', A, []],
    ['R wave', 'ar wayv', 'Any positive deflection of the QRS complex; a second one is called R prime.', 'موج R', 'ph', A, []],
    ['S wave', 'ess wayv', 'First negative deflection after the R wave.', 'موج S', 'ph', A, []],
    ['J point', 'jay poynt', 'Junction where the QRS ends and the ST segment begins; ST deviation is measured here.', 'نقطه J', 'ph', A, []],
    ['ST segment', 'ess-tee SEG-ment', 'Segment from the J point to the start of the T wave, normally on the isoelectric line.', 'قطعه ST', 'ph', A, []],
    ['T wave', 'tee wayv', 'Wave produced by ventricular repolarization.', 'موج T', 'ph', A, []],
    ['U wave', 'yoo wayv', 'Small wave after the T wave in the same direction, best seen in V2 and V3.', 'موج U', 'ph', A, []],
    ['QT interval', 'kyoo-tee IN-ter-val', 'Time from the start of the QRS to the end of the T wave; total ventricular depolarization and repolarization.', 'فاصله QT', 'ph', A, []],
    ['corrected QT interval', 'koh-REK-ted kyoo-tee IN-ter-val', 'QT adjusted for heart rate, for example with Bazett formula QT divided by the square root of RR.', 'QT اصلاح‌شده', 'ph', A, ['QTc']],
    ['TP segment', 'tee-pee SEG-ment', 'Flat line from the end of the T wave to the next P wave; the preferred isoelectric reference.', 'قطعه TP', 'ph', A, []],
    ['R-R interval', 'ar-ar IN-ter-val', 'Time between two consecutive R waves; used to judge regularity and calculate rate.', 'فاصله R تا R', 'ph', A, []],
    ['R wave progression', 'ar wayv proh-GRESH-un', 'Normal increase of R wave height from V1 to about V4 with a falling S wave.', 'پیشرفت موج R', 'ph', A, []],
    ['transition zone', 'tran-ZISH-un zohn', 'Precordial lead where R and S are about equal, normally V3 or V4.', 'ناحیه انتقالی', 'ph', A, []],
    ['R wave peak time', 'ar wayv peek time', 'Time from QRS onset to the peak of the R wave (intrinsicoid deflection); prolonged in ventricular hypertrophy.', 'زمان رسیدن به قله R', 'ph', A, []],
    ['electrical axis', 'ee-LEK-trih-kal AK-sis', 'Average direction of ventricular depolarization in the frontal plane; normal -30 to +90 degrees.', 'محور الکتریکی قلب', 'ph', A, []],
    ['hexaxial reference system', 'hek-SAK-see-al REF-er-ens SIS-tem', 'Circle of the six limb leads spaced 30 degrees apart, used to determine the axis.', 'سیستم مرجع شش‌محوری', 'ph', L, []],
    ['Einthoven triangle', 'INT-hoh-ven TRY-ang-gul', 'Triangle formed by leads I, II and III between the right arm, left arm and left leg.', 'مثلث آینتهوون', 'ph', L, []],
    ['bipolar', 'by-POH-lar', 'Having two poles; leads I, II and III record between two electrodes (bi- = two, polar/o = pole).', 'دوقطبی', 'ph', L, []],
    ['unipolar', 'yoo-nih-POH-lar', 'Having one exploring pole against a central reference, as in aVR, aVL, aVF and V1 to V6 (uni- = one).', 'تک‌قطبی', 'ph', L, []],
    ['left axis deviation', 'left AK-sis dee-vee-AY-shun', 'Frontal QRS axis between -30 and -90 degrees: lead I positive, lead II negative.', 'انحراف محور به چپ', 'ph', D, ['LAD']],
    ['right axis deviation', 'rite AK-sis dee-vee-AY-shun', 'Frontal QRS axis between +90 and 180 degrees: lead I negative, aVF positive.', 'انحراف محور به راست', 'ph', D, ['RAD']],
    ['extreme axis deviation', 'ek-STREEM AK-sis dee-vee-AY-shun', 'Axis between -90 and 180 degrees (northwest axis): leads I and aVF both negative.', 'انحراف شدید محور', 'ph', D, []],
    ['normal sinus rhythm', 'NOR-mal SY-nus RITH-um', 'Rhythm from the SA node: upright P in I and II, negative P in aVR, every P followed by a QRS, rate 60 to 100.', 'ریتم سینوسی نرمال', 'ph', A, ['NSR']],
    ['sympathetic', 'sim-pah-THET-ik', 'Part of the autonomic nervous system that speeds the heart and AV conduction.', 'سمپاتیک', 'ph', A, []],
    ['vagal tone', 'VAY-gal tohn', 'Parasympathetic influence through the vagus nerve that slows the SA node and AV conduction.', 'تون واگ', 'ph', A, []],
    ['intraventricular', 'in-trah-ven-TRIK-yoo-lar', 'Within the ventricles (intra- = within, ventricul/o = ventricle, -ar = pertaining to).', 'درون‌بطنی', 'ph', A, []],
    ['contiguous leads', 'kon-TIG-yoo-us leedz', 'Leads that look at neighboring areas of the heart, such as II, III and aVF.', 'لیدهای مجاور', 'ph', L, []],
    ['frontal plane', 'FRUN-tal playn', 'Vertical plane seen by the six limb leads.', 'صفحه فرونتال', 'ph', L, []],
    ['horizontal plane', 'hor-ih-ZON-tal playn', 'Transverse plane seen by the six precordial leads.', 'صفحه افقی (عرضی)', 'ph', L, []],

    /* ================= ar: ریتم و آریتمی ================= */
    ['sinus bradycardia', 'SY-nus bray-dee-KAR-dee-ah', 'Sinus rhythm with a rate below 60 beats per minute.', 'برادی‌کاردی سینوسی', 'ar', D, []],
    ['sinus tachycardia', 'SY-nus tak-ih-KAR-dee-ah', 'Sinus rhythm with a rate above 100 beats per minute; usually a response to fever, pain, hypovolemia or anxiety.', 'تاکی‌کاردی سینوسی', 'ar', D, []],
    ['sinus arrhythmia', 'SY-nus ah-RITH-mee-ah', 'Sinus rhythm whose rate rises with inspiration and falls with expiration; normal in the young.', 'آریتمی سینوسی', 'ar', D, []],
    ['sinus arrest', 'SY-nus ah-REST', 'Pause in which the SA node fails to fire, so no P wave appears.', 'ایست سینوسی', 'ar', D, []],
    ['sinoatrial exit block', 'sy-noh-AY-tree-al EK-sit blok', 'Impulse formed in the SA node fails to exit to the atria, producing a pause that is a multiple of the P-P interval.', 'بلوک خروجی سینوسی‌دهلیزی', 'ar', D, []],
    ['sick sinus syndrome', 'sik SY-nus SIN-drohm', 'Dysfunction of the SA node with bradycardia, pauses or alternating brady and tachy rhythms.', 'سندرم سینوس بیمار', 'ar', D, ['SSS']],
    ['tachy-brady syndrome', 'TAK-ee-BRAY-dee SIN-drohm', 'Form of sick sinus syndrome with bursts of atrial tachyarrhythmia followed by long pauses.', 'سندرم تاکی‌کاردی‌برادی‌کاردی', 'ar', D, []],
    ['ectopic', 'ek-TOP-ik', 'Arising from a site other than the SA node (ectop/o = out of place, -ic = pertaining to).', 'نابه‌جا (اکتوپیک)', 'ar', D, []],
    ['premature atrial complex', 'pree-mah-CHOOR AY-tree-al KOM-pleks', 'Early beat from an atrial focus with an abnormal P wave and usually a narrow QRS.', 'ضربان زودرس دهلیزی', 'ar', D, ['PAC']],
    ['premature junctional complex', 'pree-mah-CHOOR JUNK-shun-al KOM-pleks', 'Early narrow beat from the AV junction with an absent or retrograde P wave.', 'ضربان زودرس جانکشنال', 'ar', D, ['PJC']],
    ['premature ventricular complex', 'pree-mah-CHOOR ven-TRIK-yoo-lar KOM-pleks', 'Early wide QRS from a ventricular focus with no preceding P wave and opposite ST-T.', 'ضربان زودرس بطنی', 'ar', D, ['PVC']],
    ['bigeminy', 'by-JEM-ih-nee', 'Pattern in which every other beat is premature (bi- = two).', 'بای‌ژمینی (یکی درمیان)', 'ar', D, []],
    ['trigeminy', 'try-JEM-ih-nee', 'Pattern in which every third beat is premature (tri- = three).', 'تری‌ژمینی', 'ar', D, []],
    ['couplet', 'KUP-let', 'Two premature beats in a row.', 'کاپلت (جفت ضربان زودرس)', 'ar', D, []],
    ['compensatory pause', 'kom-PEN-sah-tor-ee pawz', 'Pause after a premature beat; full (twice the R-R) after most PVCs, less than full after PACs.', 'مکث جبرانی', 'ar', D, []],
    ['unifocal', 'yoo-nih-FOH-kal', 'Arising from one ectopic focus, so all ectopic beats look alike (uni- = one, foc/o = focus, -al = pertaining to).', 'تک‌کانونی', 'ar', D, []],
    ['multifocal', 'mul-tih-FOH-kal', 'Arising from several ectopic foci, so the ectopic beats differ in shape (multi- = many, foc/o = focus).', 'چندکانونی', 'ar', D, []],
    ['atrial tachycardia', 'AY-tree-al tak-ih-KAR-dee-ah', 'Regular tachycardia from one ectopic atrial focus with abnormal P waves.', 'تاکی‌کاردی دهلیزی', 'ar', D, []],
    ['multifocal atrial tachycardia', 'mul-tih-FOH-kal AY-tree-al tak-ih-KAR-dee-ah', 'Irregular rhythm above 100 with at least three different P wave shapes; typical in severe lung disease.', 'تاکی‌کاردی دهلیزی چندکانونی', 'ar', D, ['MAT']],
    ['wandering atrial pacemaker', 'WON-der-ing AY-tree-al PAYS-may-ker', 'Same picture as multifocal atrial tachycardia but with a rate below 100.', 'ضربان‌ساز سرگردان دهلیزی', 'ar', D, ['WAP']],
    ['atrial fibrillation', 'AY-tree-al fib-rih-LAY-shun', 'Chaotic atrial activity without P waves and an irregularly irregular ventricular response.', 'فیبریلاسیون دهلیزی', 'ar', D, ['AF']],
    ['atrial flutter', 'AY-tree-al FLUT-er', 'Macro-reentrant atrial rhythm at about 300 per minute with saw-tooth flutter waves, often conducted 2:1.', 'فلاتر دهلیزی', 'ar', D, ['AFl']],
    ['fibrillation', 'fib-rih-LAY-shun', 'Rapid chaotic quivering of muscle fibers without effective contraction (fibrill/o = small fibers, -ation = process).', 'فیبریلاسیون (لرزش)', 'ar', D, []],
    ['flutter waves', 'FLUT-er wayvz', 'Regular saw-tooth atrial waves of atrial flutter, best seen in II, III, aVF and V1.', 'امواج فلاتر (دندانه‌اره‌ای)', 'ar', D, []],
    ['fibrillatory waves', 'FIB-rih-lah-tor-ee wayvz', 'Fine or coarse irregular baseline oscillations of atrial fibrillation.', 'امواج فیبریلاسیون', 'ar', D, []],
    ['rapid ventricular response', 'RAP-id ven-TRIK-yoo-lar ree-SPONS', 'Ventricular rate above 100 in atrial fibrillation or flutter.', 'پاسخ بطنی سریع', 'ar', D, ['RVR']],
    ['junctional rhythm', 'JUNK-shun-al RITH-um', 'Narrow-complex rhythm from the AV junction at 40 to 60 per minute with absent or retrograde P waves.', 'ریتم جانکشنال', 'ar', D, []],
    ['junctional', 'JUNK-shun-al', 'Arising from the AV junction (junct/o = joining, -ion = process, -al = pertaining to).', 'جانکشنال (از محل اتصال)', 'ar', A, []],
    ['escape rhythm', 'es-KAYP RITH-um', 'Backup rhythm from a lower pacemaker that appears when higher pacemakers fail.', 'ریتم فرار', 'ar', D, []],
    ['idioventricular rhythm', 'id-ee-oh-ven-TRIK-yoo-lar RITH-um', 'Wide-complex ventricular escape rhythm at 20 to 40 per minute (idi/o = own).', 'ریتم ایدیوونتریکولار', 'ar', D, []],
    ['idioventricular', 'id-ee-oh-ven-TRIK-yoo-lar', 'Originating in the ventricle itself (idi/o = own, ventricul/o = ventricle, -ar = pertaining to).', 'خودبطنی', 'ar', A, []],
    ['accelerated idioventricular rhythm', 'ak-SEL-er-ay-ted id-ee-oh-ven-TRIK-yoo-lar RITH-um', 'Regular wide-complex ventricular rhythm at 50 to 110 per minute, typical after reperfusion; usually benign.', 'ریتم ایدیوونتریکولار تسریع‌شده', 'ar', D, ['AIVR']],
    ['supraventricular', 'soo-prah-ven-TRIK-yoo-lar', 'Arising above the ventricles, in the atria or AV node (supra- = above, ventricul/o = ventricle, -ar = pertaining to).', 'فوق‌بطنی', 'ar', A, []],
    ['supraventricular tachycardia', 'soo-prah-ven-TRIK-yoo-lar tak-ih-KAR-dee-ah', 'Tachycardia arising above the ventricles; commonly used for regular narrow-complex reentrant tachycardias.', 'تاکی‌کاردی فوق‌بطنی', 'ar', D, ['SVT', 'PSVT']],
    ['reentry', 'ree-EN-tree', 'Circular movement of an impulse around a circuit that re-excites tissue; the mechanism of most tachycardias.', 'ورود مجدد (ری‌انتری)', 'ar', A, []],
    ['AV nodal reentrant tachycardia', 'ay-vee NOH-dal ree-EN-trant tak-ih-KAR-dee-ah', 'Most common regular narrow-complex SVT, with a circuit inside the AV node; P waves hidden or just after the QRS.', 'تاکی‌کاردی ورود مجدد گره AV', 'ar', D, ['AVNRT']],
    ['AV reentrant tachycardia', 'ay-vee ree-EN-trant tak-ih-KAR-dee-ah', 'Reentrant tachycardia using an accessory pathway and the AV node.', 'تاکی‌کاردی ورود مجدد دهلیزی‌بطنی', 'ar', D, ['AVRT']],
    ['orthodromic', 'or-thoh-DROM-ik', 'Moving in the normal direction: down the AV node and up the accessory pathway, giving a narrow QRS (orth/o = straight, drom/o = course).', 'ارتودرومیک (هم‌جهت)', 'ar', A, []],
    ['antidromic', 'an-tee-DROM-ik', 'Moving in the reverse direction: down the accessory pathway, giving a wide QRS (anti- = against, drom/o = course).', 'آنتی‌درومیک (خلاف‌جهت)', 'ar', A, []],
    ['narrow complex tachycardia', 'NAR-oh KOM-pleks tak-ih-KAR-dee-ah', 'Tachycardia with QRS under 120 ms; origin is above the ventricles.', 'تاکی‌کاردی با کمپلکس باریک', 'ar', D, []],
    ['wide complex tachycardia', 'wide KOM-pleks tak-ih-KAR-dee-ah', 'Tachycardia with QRS of 120 ms or more; treat as ventricular tachycardia until proven otherwise.', 'تاکی‌کاردی با کمپلکس پهن', 'ar', D, ['WCT']],
    ['ventricular tachycardia', 'ven-TRIK-yoo-lar tak-ih-KAR-dee-ah', 'Three or more consecutive ventricular beats at a rate above 100.', 'تاکی‌کاردی بطنی', 'ar', D, ['VT']],
    ['monomorphic', 'mon-oh-MOR-fik', 'Having one shape; all QRS complexes look alike (mono- = one, morph/o = shape, -ic = pertaining to).', 'تک‌شکلی', 'ar', D, []],
    ['polymorphic', 'pol-ee-MOR-fik', 'Having many shapes; QRS complexes vary beat to beat (poly- = many, morph/o = shape).', 'چندشکلی', 'ar', D, []],
    ['nonsustained ventricular tachycardia', 'non-sus-TAYND ven-TRIK-yoo-lar tak-ih-KAR-dee-ah', 'Ventricular tachycardia lasting under 30 seconds that ends by itself.', 'تاکی‌کاردی بطنی ناپایدار', 'ar', D, ['NSVT']],
    ['torsades de pointes', 'tor-SAHD duh PWANT', 'Polymorphic ventricular tachycardia twisting around the baseline, linked to a long QT interval.', 'تورساد دو پوینت', 'ar', D, ['TdP']],
    ['ventricular fibrillation', 'ven-TRIK-yoo-lar fib-rih-LAY-shun', 'Chaotic ventricular activity without identifiable QRS complexes and without a pulse.', 'فیبریلاسیون بطنی', 'ar', D, ['VF']],
    ['fusion beat', 'FYOO-zhun beet', 'Hybrid QRS formed when a sinus impulse and a ventricular impulse activate the ventricles together; supports VT.', 'ضربان فیوژن (ادغامی)', 'ar', D, []],
    ['capture beat', 'KAP-chur beet', 'Normal narrow beat conducted from the atria in the middle of a ventricular rhythm; supports VT.', 'ضربان کپچر', 'ar', D, []],
    ['AV dissociation', 'ay-vee dih-soh-see-AY-shun', 'Atria and ventricles beat independently, each with its own regular rate.', 'جدایی دهلیزی‌بطنی', 'ar', D, []],
    ['concordance', 'kon-KOR-dans', 'All precordial QRS complexes pointing the same way, all positive or all negative; supports VT.', 'هم‌جهتی (کنکوردانس)', 'ar', D, []],
    ['heart block', 'hart blok', 'Delay or failure of conduction from the atria to the ventricles.', 'بلوک قلبی', 'ar', D, ['AVB']],
    ['first-degree AV block', 'first dih-GREE ay-vee blok', 'PR interval above 200 ms with every P wave conducted.', 'بلوک AV درجه یک', 'ar', D, []],
    ['second-degree AV block', 'SEK-und dih-GREE ay-vee blok', 'Some P waves are not conducted to the ventricles.', 'بلوک AV درجه دو', 'ar', D, []],
    ['Mobitz type I', 'MOH-bits type wun', 'Second-degree AV block with progressive PR lengthening until a beat is dropped (Wenckebach); usually at the AV node.', 'موبیتز نوع ۱ (ونکه‌باخ)', 'ar', D, []],
    ['Wenckebach', 'VEN-keh-bahk', 'Pattern of progressive conduction delay ending in a dropped beat; Mobitz type I.', 'ونکه‌باخ', 'ar', D, []],
    ['Mobitz type II', 'MOH-bits type too', 'Second-degree AV block with a constant PR interval and sudden non-conducted P waves; usually below the AV node.', 'موبیتز نوع ۲', 'ar', D, []],
    ['2:1 AV block', 'too-to-wun ay-vee blok', 'Every second P wave is not conducted; cannot be labeled Mobitz I or II from the strip alone.', 'بلوک AV دو به یک', 'ar', D, []],
    ['high-grade AV block', 'hy grayd ay-vee blok', 'Two or more consecutive non-conducted P waves with some conduction preserved.', 'بلوک AV پیشرفته', 'ar', D, []],
    ['third-degree AV block', 'third dih-GREE ay-vee blok', 'Complete heart block: no P wave is conducted and an escape rhythm drives the ventricles.', 'بلوک AV درجه سه (بلوک کامل قلبی)', 'ar', D, ['CHB']],
    ['complete heart block', 'kom-PLEET hart blok', 'Synonym of third-degree AV block with AV dissociation.', 'بلوک کامل قلبی', 'ar', D, ['CHB']],
    ['asystole', 'ay-SIS-toh-lee', 'Absence of ventricular electrical activity; flat line (a- = without, systol/o = contraction).', 'آسیستول (خط صاف)', 'ar', D, []],
    ['pulseless electrical activity', 'PULS-les ee-LEK-trih-kal ak-TIV-ih-tee', 'Organized electrical rhythm on the monitor without a palpable pulse.', 'فعالیت الکتریکی بدون نبض', 'ar', D, ['PEA']],
    ['agonal rhythm', 'AG-oh-nal RITH-um', 'Very slow, wide, irregular ventricular complexes seen just before asystole.', 'ریتم آگونال (ریتم محتضر)', 'ar', D, []],
    ['cardiac arrest', 'KAR-dee-ak ah-REST', 'Sudden loss of effective cardiac output; rhythms are VF, pulseless VT, PEA or asystole.', 'ایست قلبی', 'ar', D, []],
    ['shockable rhythm', 'SHOK-ah-bul RITH-um', 'Arrest rhythm treated with defibrillation: ventricular fibrillation or pulseless ventricular tachycardia.', 'ریتم شوک‌پذیر', 'ar', D, []],
    ['retrograde P wave', 'RET-roh-grayd pee wayv', 'Inverted P wave in II, III and aVF from backward atrial activation, as in junctional rhythm.', 'موج P رتروگرید (معکوس)', 'ar', D, []],
    ['vagal maneuver', 'VAY-gal mah-NOO-ver', 'Bedside action such as Valsalva that increases vagal tone and can stop AV-node-dependent SVT.', 'مانور واگ', 'ar', T, []],
    ['adenosine', 'ah-DEN-oh-seen', 'Very short-acting drug that briefly blocks the AV node; used to terminate or unmask SVT.', 'آدنوزین', 'ar', T, []],
    ['ablation', 'ab-LAY-shun', 'Catheter procedure that destroys the tissue causing an arrhythmia.', 'ابلیشن (سوزاندن کانون آریتمی)', 'ar', T, []],

    /* ================= mi: ایسکمی و انفارکتوس ================= */
    ['ischemia', 'is-KEE-mee-ah', 'Inadequate blood supply to tissue (isch/o = hold back, -emia = blood condition).', 'ایسکمی (کم‌خونی موضعی)', 'mi', D, []],
    ['myocardial ischemia', 'my-oh-KAR-dee-al is-KEE-mee-ah', 'Oxygen supply to the heart muscle below its demand; shows as ST depression or T wave changes.', 'ایسکمی میوکارد', 'mi', D, []],
    ['infarction', 'in-FARK-shun', 'Death of tissue due to loss of blood supply.', 'انفارکتوس', 'mi', D, []],
    ['myocardial infarction', 'my-oh-KAR-dee-al in-FARK-shun', 'Death of heart muscle from prolonged ischemia, proven by a rise and fall of troponin.', 'انفارکتوس میوکارد (سکته قلبی)', 'mi', D, ['MI']],
    ['necrosis', 'neh-KROH-sis', 'Death of cells or tissue (necr/o = death, -osis = abnormal condition).', 'نکروز (مرگ بافت)', 'mi', D, []],
    ['acute coronary syndrome', 'ah-KYOOT KOR-oh-nair-ee SIN-drohm', 'Spectrum of sudden coronary ischemia: unstable angina, NSTEMI and STEMI.', 'سندرم حاد کرونری', 'mi', D, ['ACS']],
    ['angina pectoris', 'an-JY-nah PEK-tor-is', 'Chest pain or pressure caused by myocardial ischemia (pector/o = chest).', 'آنژین صدری', 'mi', D, []],
    ['stable angina', 'STAY-bul an-JY-nah', 'Predictable ischemic chest pain with exertion, relieved by rest.', 'آنژین پایدار', 'mi', D, []],
    ['unstable angina', 'un-STAY-bul an-JY-nah', 'New, worsening or rest angina without a troponin rise.', 'آنژین ناپایدار', 'mi', D, ['UA']],
    ['variant angina', 'VAIR-ee-ant an-JY-nah', 'Prinzmetal angina: rest pain from coronary spasm with transient ST elevation that resolves.', 'آنژین واریانت (پرینزمتال)', 'mi', D, []],
    ['vasospasm', 'VAY-soh-spazm', 'Sudden narrowing of a vessel from muscle contraction (vas/o = vessel, -spasm = sudden contraction).', 'وازواسپاسم (گرفتگی عروق)', 'mi', D, []],
    ['ST-elevation myocardial infarction', 'ess-tee el-eh-VAY-shun my-oh-KAR-dee-al in-FARK-shun', 'Myocardial infarction with new ST elevation in contiguous leads, usually from complete coronary occlusion.', 'سکته قلبی با بالا رفتن ST', 'mi', D, ['STEMI']],
    ['non-ST-elevation myocardial infarction', 'non-ess-tee el-eh-VAY-shun my-oh-KAR-dee-al in-FARK-shun', 'Myocardial infarction with troponin rise but without ST elevation; ECG may show ST depression or T inversion.', 'سکته قلبی بدون بالا رفتن ST', 'mi', D, ['NSTEMI']],
    ['troponin', 'TROH-poh-nin', 'Cardiac protein released into the blood when heart muscle is injured; the key biomarker of infarction.', 'تروپونین', 'mi', L, ['cTn']],
    ['atherosclerosis', 'ath-er-oh-skleh-ROH-sis', 'Hardening and narrowing of arteries by fatty plaque (ather/o = fatty plaque, -sclerosis = hardening).', 'آترواسکلروز', 'mi', D, []],
    ['thrombus', 'THROM-bus', 'Blood clot attached to a vessel wall; forms on a ruptured plaque in acute MI.', 'لخته (ترومبوز)', 'mi', D, []],
    ['thrombosis', 'throm-BOH-sis', 'Formation of a blood clot inside a vessel (thromb/o = clot, -osis = abnormal condition).', 'ترومبوز (لخته‌شدن)', 'mi', D, []],
    ['occlusion', 'oh-KLOO-zhun', 'Complete blockage of a vessel.', 'انسداد', 'mi', D, []],
    ['plaque rupture', 'plak RUP-chur', 'Tearing of an atherosclerotic plaque that triggers clot formation.', 'پارگی پلاک', 'mi', D, []],
    ['transmural', 'trans-MYOO-ral', 'Across the whole thickness of the wall (trans- = across, mur/o = wall, -al = pertaining to); transmural ischemia causes ST elevation.', 'ترانس‌مورال (تمام ضخامت دیواره)', 'mi', D, []],
    ['subendocardial', 'sub-en-doh-KAR-dee-al', 'Beneath the endocardium (sub- = under, endo- = within, cardi/o = heart); subendocardial ischemia causes ST depression.', 'زیر آندوکارد (ساب‌اندوکاردیال)', 'mi', D, []],
    ['hyperacute T wave', 'hy-per-ah-KYOOT tee wayv', 'Broad-based, tall, symmetric T wave in the first minutes of coronary occlusion.', 'موج T هایپراکیوت', 'mi', D, []],
    ['ST elevation', 'ess-tee el-eh-VAY-shun', 'J point above the isoelectric line; in contiguous leads it suggests transmural injury.', 'بالا رفتن قطعه ST', 'mi', D, ['STE']],
    ['ST depression', 'ess-tee dee-PRESH-un', 'J point below the isoelectric line; horizontal or downsloping depression suggests subendocardial ischemia.', 'پایین رفتن قطعه ST', 'mi', D, ['STD']],
    ['T wave inversion', 'tee wayv in-VER-zhun', 'Negative T wave where it is normally upright; symmetric deep inversion suggests ischemia.', 'وارونگی موج T', 'mi', D, ['TWI']],
    ['reciprocal change', 'ree-SIP-roh-kal chaynj', 'Mirror-image ST depression in leads opposite an area of ST elevation; supports true infarction.', 'تغییرات آینه‌ای (رسیپروکال)', 'mi', D, []],
    ['pathologic Q wave', 'path-oh-LOJ-ik kyoo wayv', 'Q wave of 30 ms or more and at least 1 mm deep in two contiguous leads, or any Q over 20 ms in V2 to V3.', 'موج Q پاتولوژیک', 'mi', D, []],
    ['poor R wave progression', 'poor ar wayv proh-GRESH-un', 'R wave that fails to grow across V1 to V4; may reflect anterior infarction, LVH or lead misplacement.', 'پیشرفت ضعیف موج R', 'mi', D, ['PRWP']],
    ['culprit artery', 'KUL-prit AR-ter-ee', 'Coronary artery whose occlusion causes the current infarction.', 'شریان مقصر', 'mi', A, []],
    ['left main coronary artery', 'left mayn KOR-oh-nair-ee AR-ter-ee', 'Short trunk of the left coronary artery that divides into the LAD and circumflex.', 'شریان اصلی کرونر چپ', 'mi', A, ['LMCA']],
    ['left anterior descending artery', 'left an-TEER-ee-or dee-SEN-ding AR-ter-ee', 'Branch running down the front of the septum; supplies the anterior wall and septum (leads V1 to V4).', 'شریان نزولی قدامی چپ', 'mi', A, ['LAD']],
    ['left circumflex artery', 'left SER-kum-fleks AR-ter-ee', 'Branch wrapping around to the lateral wall (leads I, aVL, V5, V6).', 'شریان سیرکومفلکس چپ', 'mi', A, ['LCx']],
    ['right coronary artery', 'rite KOR-oh-nair-ee AR-ter-ee', 'Artery supplying the right ventricle and usually the inferior wall and AV node (leads II, III, aVF).', 'شریان کرونر راست', 'mi', A, ['RCA']],
    ['anterior wall', 'an-TEER-ee-or wawl', 'Front wall of the left ventricle seen in V3 and V4; supplied by the LAD.', 'دیواره قدامی', 'mi', A, []],
    ['inferior wall', 'in-FEER-ee-or wawl', 'Bottom wall of the left ventricle seen in II, III and aVF; usually supplied by the RCA.', 'دیواره تحتانی', 'mi', A, []],
    ['lateral wall', 'LAT-er-al wawl', 'Side wall of the left ventricle seen in I, aVL, V5 and V6; usually supplied by the circumflex.', 'دیواره لترال', 'mi', A, []],
    ['posterior wall', 'pos-TEER-ee-or wawl', 'Back wall of the left ventricle; seen directly in V7 to V9 and as a mirror image in V1 to V3.', 'دیواره خلفی', 'mi', A, []],
    ['anterior myocardial infarction', 'an-TEER-ee-or my-oh-KAR-dee-al in-FARK-shun', 'Infarction of the anterior wall with ST elevation in the precordial leads; LAD occlusion.', 'انفارکتوس قدامی', 'mi', D, []],
    ['inferior myocardial infarction', 'in-FEER-ee-or my-oh-KAR-dee-al in-FARK-shun', 'Infarction with ST elevation in II, III and aVF and reciprocal depression in aVL.', 'انفارکتوس تحتانی', 'mi', D, []],
    ['posterior myocardial infarction', 'pos-TEER-ee-or my-oh-KAR-dee-al in-FARK-shun', 'Infarction of the back wall: horizontal ST depression and tall R in V1 to V3, ST elevation in V7 to V9.', 'انفارکتوس خلفی', 'mi', D, []],
    ['right ventricular infarction', 'rite ven-TRIK-yoo-lar in-FARK-shun', 'Infarction of the right ventricle with proximal RCA occlusion; ST elevation in V4R; patients are preload dependent.', 'انفارکتوس بطن راست', 'mi', D, ['RVMI']],
    ['posterior leads', 'pos-TEER-ee-or leedz', 'Extra leads V7, V8 and V9 on the back to look for posterior infarction.', 'لیدهای خلفی', 'mi', L, []],
    ['right-sided leads', 'rite SY-ded leedz', 'Mirror-placed chest leads on the right (V1R to V6R); V4R detects right ventricular infarction.', 'لیدهای سمت راست', 'mi', L, []],
    ['STEMI equivalent', 'STEM-ee ee-KWIV-ah-lent', 'ECG pattern of acute coronary occlusion without classic ST elevation, such as de Winter T waves or posterior MI.', 'معادل STEMI', 'mi', D, []],
    ['Wellens syndrome', 'WEL-enz SIN-drohm', 'Biphasic or deep symmetric T inversion in V2 to V3 after chest pain has settled, warning of critical proximal LAD stenosis.', 'سندرم ولنز', 'mi', D, []],
    ['de Winter T waves', 'duh WIN-ter tee wayvz', 'Upsloping ST depression with tall symmetric precordial T waves; a STEMI equivalent of proximal LAD occlusion.', 'امواج T دووینتر', 'mi', D, []],
    ['Sgarbossa criteria', 'skar-BOH-sah kry-TEER-ee-ah', 'Rules for diagnosing acute MI in LBBB or ventricular pacing: concordant ST elevation, concordant ST depression in V1 to V3, excessive discordant ST elevation.', 'معیارهای اسگاربوزا', 'mi', L, []],
    ['concordant', 'kon-KOR-dant', 'Pointing in the same direction as the main QRS deflection.', 'هم‌جهت (کنکوردنت)', 'mi', D, []],
    ['discordant', 'dis-KOR-dant', 'Pointing opposite to the main QRS deflection; the expected ST-T pattern in bundle branch block.', 'خلاف‌جهت (دیسکوردنت)', 'mi', D, []],
    ['pericarditis', 'pair-ih-kar-DY-tis', 'Inflammation of the pericardium (peri- = around, cardi/o = heart, -itis = inflammation); diffuse concave ST elevation with PR depression.', 'پریکاردیت', 'mi', D, []],
    ['PR depression', 'pee-ar dee-PRESH-un', 'PR segment below the baseline; a sign of pericarditis.', 'پایین رفتن قطعه PR', 'mi', D, []],
    ['Spodick sign', 'SPOD-ik sine', 'Downsloping TP segment seen in some cases of acute pericarditis.', 'نشانه اسپودیک', 'mi', D, []],
    ['early repolarization', 'ER-lee ree-poh-lar-ih-ZAY-shun', 'Common benign variant in young people: concave ST elevation in V2 to V5 with J point notching or slurring.', 'رپلاریزاسیون زودرس', 'mi', D, ['BER']],
    ['left ventricular aneurysm', 'left ven-TRIK-yoo-lar AN-yoo-rizm', 'Thinned bulging scar after MI with persistent ST elevation and Q waves for more than two weeks.', 'آنوریسم بطن چپ', 'mi', D, ['LVA']],
    ['takotsubo cardiomyopathy', 'tah-koh-TSOO-boh kar-dee-oh-my-OP-ah-thee', 'Stress-induced transient ballooning of the left ventricular apex that mimics anterior STEMI.', 'کاردیومیوپاتی تاکوتسوبو', 'mi', D, []],
    ['Dressler syndrome', 'DRES-ler SIN-drohm', 'Pericarditis appearing weeks after MI or cardiac surgery.', 'سندرم درسلر', 'mi', D, []],
    ['reperfusion', 'ree-per-FYOO-zhun', 'Restoration of blood flow to ischemic tissue (re- = again, perfus/o = blood flow, -ion = process).', 'برقراری مجدد جریان خون', 'mi', T, []],
    ['revascularization', 'ree-vas-kyoo-lar-ih-ZAY-shun', 'Restoring blood flow by PCI or bypass surgery (re- = again, vascul/o = vessel, -ization = process).', 'بازگشایی عروق', 'mi', T, []],
    ['percutaneous coronary intervention', 'per-kyoo-TAY-nee-us KOR-oh-nair-ee in-ter-VEN-shun', 'Catheter-based opening of a blocked coronary artery with a balloon and stent.', 'مداخله کرونری از راه پوست', 'mi', T, ['PCI']],
    ['angioplasty', 'AN-jee-oh-plas-tee', 'Repair or widening of a vessel, usually with a balloon (angi/o = vessel, -plasty = surgical repair).', 'آنژیوپلاستی', 'mi', T, []],
    ['coronary angiography', 'KOR-oh-nair-ee an-jee-OG-rah-fee', 'X-ray imaging of the coronary arteries with contrast (angi/o = vessel, -graphy = process of recording).', 'آنژیوگرافی کرونر', 'mi', L, []],
    ['thrombolysis', 'throm-BOL-ih-sis', 'Dissolving a clot with medication (thromb/o = clot, -lysis = dissolution); also called fibrinolysis.', 'ترومبولیز (حل کردن لخته)', 'mi', T, []],
    ['coronary artery bypass graft', 'KOR-oh-nair-ee AR-ter-ee BY-pas graft', 'Surgery that routes blood around blocked coronary arteries using vein or artery grafts.', 'جراحی بای‌پس عروق کرونر', 'mi', T, ['CABG']],
    ['nitroglycerin', 'ny-troh-GLIS-er-in', 'Vasodilator that relieves angina; avoided in hypotension and right ventricular infarction.', 'نیتروگلیسیرین', 'mi', T, ['TNG']],
    ['antiplatelet', 'an-tee-PLAYT-let', 'Drug that prevents platelets from clumping, such as aspirin (anti- = against).', 'ضدپلاکت', 'mi', T, []],

    /* ================= sc: حفره‌ها، هدایت و عوامل متابولیک ================= */
    ['atrial enlargement', 'AY-tree-al en-LARJ-ment', 'Dilation or hypertrophy of an atrium, reflected in P wave height or width.', 'بزرگی دهلیز', 'sc', D, []],
    ['right atrial enlargement', 'rite AY-tree-al en-LARJ-ment', 'Enlarged right atrium: P wave taller than 2.5 mm in II or tall initial P in V1.', 'بزرگی دهلیز راست', 'sc', D, ['RAE']],
    ['left atrial enlargement', 'left AY-tree-al en-LARJ-ment', 'Enlarged left atrium: wide notched P in II (120 ms or more) or deep terminal negative P in V1.', 'بزرگی دهلیز چپ', 'sc', D, ['LAE']],
    ['P pulmonale', 'pee pul-moh-NAH-lee', 'Tall peaked P wave of right atrial enlargement, often from lung disease or pulmonary hypertension.', 'P پولمونال', 'sc', D, []],
    ['P mitrale', 'pee my-TRAH-lee', 'Broad notched M-shaped P wave of left atrial enlargement, classically from mitral stenosis.', 'P میترال', 'sc', D, []],
    ['hypertrophy', 'hy-PER-troh-fee', 'Increase in muscle mass (hyper- = excessive, -trophy = development).', 'هیپرتروفی (ضخیم شدن)', 'sc', D, []],
    ['left ventricular hypertrophy', 'left ven-TRIK-yoo-lar hy-PER-troh-fee', 'Thickened left ventricle: high QRS voltage, often with strain pattern and left axis deviation; common in hypertension and aortic stenosis.', 'هیپرتروفی بطن چپ', 'sc', D, ['LVH']],
    ['right ventricular hypertrophy', 'rite ven-TRIK-yoo-lar hy-PER-troh-fee', 'Thickened right ventricle: right axis deviation, dominant R in V1, deep S in V5 to V6.', 'هیپرتروفی بطن راست', 'sc', D, ['RVH']],
    ['strain pattern', 'strayn PAT-ern', 'Downsloping ST depression with asymmetric T inversion in leads with tall R waves in ventricular hypertrophy.', 'الگوی استرین', 'sc', D, []],
    ['Sokolow-Lyon criteria', 'SOH-koh-lov LY-on kry-TEER-ee-ah', 'LVH voltage rule: S in V1 plus the tallest R in V5 or V6 of 35 mm or more.', 'معیار سوکولوف‌لیون', 'sc', L, []],
    ['Cornell criteria', 'kor-NEL kry-TEER-ee-ah', 'LVH voltage rule: R in aVL plus S in V3 above 28 mm in men or 20 mm in women.', 'معیار کرنل', 'sc', L, []],
    ['low voltage', 'loh VOHL-tij', 'QRS amplitude under 5 mm in all limb leads or under 10 mm in all precordial leads.', 'ولتاژ پایین', 'sc', D, []],
    ['bundle branch block', 'BUN-dul branch blok', 'Conduction block in a bundle branch giving a QRS of 120 ms or more.', 'بلوک شاخه‌ای', 'sc', D, ['BBB']],
    ['right bundle branch block', 'rite BUN-dul branch blok', 'Wide QRS with rSR\' in V1 and broad slurred S in I, aVL, V5 and V6.', 'بلوک شاخه راست', 'sc', D, ['RBBB']],
    ['left bundle branch block', 'left BUN-dul branch blok', 'Wide QRS with QS or rS in V1, broad notched R in I, aVL, V5 and V6, no septal q waves and discordant ST-T.', 'بلوک شاخه چپ', 'sc', D, ['LBBB']],
    ['incomplete right bundle branch block', 'in-kom-PLEET rite BUN-dul branch blok', 'RBBB morphology with QRS of 110 to 119 ms.', 'بلوک ناکامل شاخه راست', 'sc', D, ['IRBBB']],
    ['fascicular', 'fah-SIK-yoo-lar', 'Pertaining to a fascicle of the left bundle (fascicul/o = small bundle, -ar = pertaining to).', 'فاسیکولار', 'sc', A, []],
    ['left anterior fascicular block', 'left an-TEER-ee-or fah-SIK-yoo-lar blok', 'Block of the left anterior fascicle: axis -45 to -90, qR in I and aVL, rS in II, III and aVF.', 'بلوک فاسیکل قدامی چپ', 'sc', D, ['LAFB']],
    ['left posterior fascicular block', 'left pos-TEER-ee-or fah-SIK-yoo-lar blok', 'Block of the left posterior fascicle: right axis deviation with rS in I and qR in III, after excluding RVH.', 'بلوک فاسیکل خلفی چپ', 'sc', D, ['LPFB']],
    ['bifascicular block', 'by-fah-SIK-yoo-lar blok', 'RBBB plus block of one left fascicle (bi- = two, fascicul/o = small bundle, -ar = pertaining to).', 'بلوک دوفاسیکولی', 'sc', D, []],
    ['trifascicular block', 'try-fah-SIK-yoo-lar blok', 'Bifascicular block with prolonged PR or intermittent block in the third fascicle (tri- = three).', 'بلوک سه‌فاسیکولی', 'sc', D, []],
    ['preexcitation', 'pree-ek-sy-TAY-shun', 'Early activation of the ventricles through an accessory pathway (pre- = before, excit/o = stimulate, -ation = process).', 'پیش‌تحریکی', 'sc', D, []],
    ['accessory pathway', 'ak-SES-oh-ree PATH-way', 'Extra muscle connection between atrium and ventricle that bypasses the AV node.', 'مسیر فرعی', 'sc', A, ['AP']],
    ['delta wave', 'DEL-tah wayv', 'Slurred upstroke at the start of the QRS caused by preexcitation.', 'موج دلتا', 'sc', D, []],
    ['Wolff-Parkinson-White syndrome', 'woolf PAR-kin-son wite SIN-drohm', 'Preexcitation (short PR, delta wave, wide QRS) with episodes of tachycardia.', 'سندرم ولف‌پارکینسون‌وایت', 'sc', D, ['WPW']],
    ['short PR interval', 'short pee-ar IN-ter-val', 'PR below 120 ms; seen in preexcitation or a low atrial or junctional focus.', 'فاصله PR کوتاه', 'sc', D, []],
    ['long QT syndrome', 'long kyoo-tee SIN-drohm', 'Congenital or acquired prolongation of QTc with risk of torsades de pointes and sudden death.', 'سندرم QT طولانی', 'sc', D, ['LQTS']],
    ['short QT syndrome', 'short kyoo-tee SIN-drohm', 'Rare inherited channelopathy with very short QTc and risk of atrial and ventricular fibrillation.', 'سندرم QT کوتاه', 'sc', D, ['SQTS']],
    ['Brugada syndrome', 'broo-GAH-dah SIN-drohm', 'Inherited sodium channel disorder with coved ST elevation of 2 mm or more in V1 to V2 and risk of ventricular fibrillation.', 'سندرم بروگادا', 'sc', D, []],
    ['coved ST elevation', 'kohvd ess-tee el-eh-VAY-shun', 'Dome-shaped ST elevation descending into an inverted T wave; the type 1 Brugada pattern.', 'بالا رفتن گنبدی ST', 'sc', D, []],
    ['arrhythmogenic right ventricular cardiomyopathy', 'ah-rith-moh-JEN-ik rite ven-TRIK-yoo-lar kar-dee-oh-my-OP-ah-thee', 'Inherited fibrofatty replacement of right ventricular muscle with epsilon waves, T inversion in V1 to V3 and ventricular arrhythmias.', 'کاردیومیوپاتی آریتموژنیک بطن راست', 'sc', D, ['ARVC']],
    ['epsilon wave', 'EP-sih-lon wayv', 'Small notch just after the QRS in V1 to V3, characteristic of ARVC.', 'موج اپسیلون', 'sc', D, []],
    ['hypertrophic cardiomyopathy', 'hy-per-TROF-ik kar-dee-oh-my-OP-ah-thee', 'Inherited thickening of the heart muscle; ECG shows LVH voltage and deep narrow dagger-like Q waves.', 'کاردیومیوپاتی هیپرتروفیک', 'sc', D, ['HCM']],
    ['electrolyte', 'ee-LEK-troh-lite', 'Charged mineral in body fluids such as potassium, calcium and magnesium.', 'الکترولیت', 'sc', A, []],
    ['hyperkalemia', 'hy-per-kah-LEE-mee-ah', 'High blood potassium (hyper- = excessive, kal/i = potassium, -emia = blood condition); peaked T, wide QRS, sine wave.', 'هایپرکالمی (پتاسیم بالا)', 'sc', D, ['K+']],
    ['hypokalemia', 'hy-poh-kah-LEE-mee-ah', 'Low blood potassium (hypo- = below, kal/i = potassium, -emia = blood condition); flat T, prominent U, ST depression.', 'هایپوکالمی (پتاسیم پایین)', 'sc', D, ['K+']],
    ['hypercalcemia', 'hy-per-kal-SEE-mee-ah', 'High blood calcium (hyper- = excessive, calc/i = calcium, -emia = blood condition); short QT.', 'هایپرکلسمی', 'sc', D, ['Ca2+']],
    ['hypocalcemia', 'hy-poh-kal-SEE-mee-ah', 'Low blood calcium (hypo- = below, calc/i = calcium); long QT from a long ST segment.', 'هایپوکلسمی', 'sc', D, ['Ca2+']],
    ['hypomagnesemia', 'hy-poh-mag-neh-SEE-mee-ah', 'Low blood magnesium (hypo- = below, magnes/o = magnesium, -emia = blood condition); long QT and torsades risk.', 'هایپومنیزیمی', 'sc', D, ['Mg2+']],
    ['peaked T wave', 'peekt tee wayv', 'Tall, narrow, tented T wave with a sharp peak, the earliest ECG sign of hyperkalemia.', 'موج T نوک‌تیز (چادری)', 'sc', D, []],
    ['sine wave pattern', 'sine wayv PAT-ern', 'Merging of a very wide QRS with the T wave in severe hyperkalemia; a pre-arrest rhythm.', 'الگوی موج سینوسی', 'sc', D, []],
    ['prominent U wave', 'PROM-ih-nent yoo wayv', 'U wave larger than a quarter of the T wave, typical of hypokalemia.', 'موج U برجسته', 'sc', D, []],
    ['digoxin', 'dih-JOK-sin', 'Cardiac glycoside that slows AV conduction and strengthens contraction; narrow therapeutic range.', 'دیگوکسین', 'sc', T, []],
    ['digoxin effect', 'dih-JOK-sin eh-FEKT', 'Scooped sagging ST depression with short QT in a patient taking digoxin; not toxicity by itself.', 'اثر دیگوکسین', 'sc', D, []],
    ['digoxin toxicity', 'dih-JOK-sin tok-SIS-ih-tee', 'Poisoning with digoxin: nausea, confusion, visual change and arrhythmias such as frequent PVCs or atrial tachycardia with block.', 'مسمومیت با دیگوکسین', 'sc', D, []],
    ['antiarrhythmic', 'an-tee-ah-RITH-mik', 'Drug used to prevent or treat arrhythmias (anti- = against, a- = without, rrhythm = rhythm, -ic = pertaining to).', 'ضدآریتمی', 'sc', T, []],
    ['amiodarone', 'ah-mee-OH-dah-rohn', 'Broad antiarrhythmic used for ventricular and atrial arrhythmias; prolongs the QT interval.', 'آمیودارون', 'sc', T, []],
    ['beta blocker', 'BAY-tah BLOK-er', 'Drug that blocks sympathetic beta receptors, slowing the sinus rate and AV conduction.', 'بتابلوکر', 'sc', T, []],
    ['calcium channel blocker', 'KAL-see-um CHAN-el BLOK-er', 'Drug such as verapamil or diltiazem that slows AV node conduction.', 'مسدودکننده کانال کلسیم', 'sc', T, ['CCB']],
    ['QT-prolonging drug', 'kyoo-tee proh-LONG-ing drug', 'Medication that lengthens repolarization, such as many antiarrhythmics, macrolides, antipsychotics, ondansetron and methadone.', 'داروی طولانی‌کننده QT', 'sc', T, []],
    ['tricyclic antidepressant', 'try-SIK-lik an-tee-dee-PRES-ant', 'Antidepressant whose overdose blocks sodium channels: wide QRS, tall R in aVR and right axis.', 'ضدافسردگی سه‌حلقه‌ای', 'sc', T, ['TCA']],
    ['sodium channel blockade', 'SOH-dee-um CHAN-el blok-AYD', 'Slowing of depolarization by drugs, widening the QRS.', 'مهار کانال سدیم', 'sc', D, []],

    /* ================= cc: ICU و اورژانس ================= */
    ['telemetry', 'teh-LEM-eh-tree', 'Continuous remote monitoring of the ECG rhythm (tele- = distant, -metry = measurement).', 'تله‌متری (پایش از راه دور)', 'cc', L, []],
    ['cardiac monitor', 'KAR-dee-ak MON-ih-ter', 'Bedside device that displays one or more ECG leads continuously with alarms.', 'مانیتور قلبی', 'cc', L, []],
    ['Holter monitor', 'HOHL-ter MON-ih-ter', 'Portable recorder of the ECG for 24 to 48 hours during daily activity.', 'هولتر مانیتورینگ', 'cc', L, []],
    ['artifact', 'AR-tih-fakt', 'ECG signal that does not come from the heart, such as from movement or electrical interference.', 'آرتیفکت (نویز)', 'cc', D, []],
    ['baseline wander', 'BAYS-line WON-der', 'Slow up-and-down drift of the baseline, often from breathing or loose electrodes.', 'سرگردانی خط پایه', 'cc', D, []],
    ['muscle tremor artifact', 'MUS-ul TREM-or AR-tih-fakt', 'Fine irregular noise from skeletal muscle activity that can mimic atrial fibrillation.', 'آرتیفکت لرزش عضلانی', 'cc', D, []],
    ['electrical interference', 'ee-LEK-trih-kal in-ter-FEER-ens', 'Regular fine fuzz on the baseline from nearby electrical equipment (50 or 60 Hz).', 'تداخل الکتریکی', 'cc', D, []],
    ['lead misplacement', 'leed mis-PLAYS-ment', 'Electrodes placed on the wrong site, producing misleading waveforms.', 'جابه‌جایی لیدها', 'cc', D, []],
    ['limb lead reversal', 'lim leed ree-VER-sal', 'Swapping of arm or leg electrodes; left-right arm reversal gives an inverted lead I and positive aVR.', 'جابه‌جایی الکترودهای اندام', 'cc', D, []],
    ['dextrocardia', 'deks-troh-KAR-dee-ah', 'Heart located in the right chest (dextr/o = right, -cardia = heart condition); mimics arm lead reversal with poor R progression.', 'دکستروکاردی (قلب در سمت راست)', 'cc', D, []],
    ['artificial pacemaker', 'ar-tih-FISH-al PAYS-may-ker', 'Implanted or temporary device that stimulates the heart when its own rhythm is too slow.', 'پیس‌میکر مصنوعی', 'cc', T, ['PPM']],
    ['pacing spike', 'PAYS-ing spike', 'Sharp vertical line on the ECG marking a pacemaker stimulus.', 'اسپایک پیس‌میکر', 'cc', L, []],
    ['paced rhythm', 'payst RITH-um', 'Rhythm driven by a pacemaker; ventricular pacing gives wide LBBB-like complexes after each spike.', 'ریتم پیس‌شده', 'cc', L, []],
    ['failure to capture', 'FAYL-yer too KAP-chur', 'Pacing spike not followed by a P wave or QRS because the stimulus did not activate the heart.', 'عدم کپچر', 'cc', D, []],
    ['undersensing', 'un-der-SENS-ing', 'Pacemaker fails to detect intrinsic beats and fires inappropriately.', 'حس‌نکردن (آندرسنسینگ)', 'cc', D, []],
    ['implantable cardioverter-defibrillator', 'im-PLANT-ah-bul kar-dee-oh-VER-ter dee-FIB-rih-lay-ter', 'Implanted device that detects VT or VF and treats it with pacing or a shock.', 'دفیبریلاتور کاشتنی', 'cc', T, ['ICD']],
    ['cardiac resynchronization therapy', 'KAR-dee-ak ree-sin-kroh-nih-ZAY-shun THAIR-ah-pee', 'Biventricular pacing that coordinates the ventricles in heart failure with wide QRS.', 'درمان همگام‌سازی مجدد قلب', 'cc', T, ['CRT']],
    ['defibrillation', 'dee-fib-rih-LAY-shun', 'Unsynchronized shock to stop VF or pulseless VT (de- = removal, fibrill/o = quivering, -ation = process).', 'دفیبریلاسیون (شوک غیرهمزمان)', 'cc', T, []],
    ['defibrillator', 'dee-FIB-rih-lay-ter', 'Device that delivers an electric shock to the heart.', 'دستگاه دفیبریلاتور', 'cc', T, ['AED']],
    ['cardioversion', 'kar-dee-oh-VER-zhun', 'Synchronized shock timed to the QRS, or drugs, to restore normal rhythm (cardi/o = heart, vers/o = turning, -ion = process).', 'کاردیوورژن', 'cc', T, []],
    ['synchronized cardioversion', 'SIN-kroh-nyzd kar-dee-oh-VER-zhun', 'Shock timed to the R wave to avoid the vulnerable T wave; for unstable tachycardia with a pulse.', 'کاردیوورژن همزمان', 'cc', T, []],
    ['transcutaneous pacing', 'trans-kyoo-TAY-nee-us PAYS-ing', 'Temporary pacing through pads on the skin for unstable bradycardia (trans- = across, cutane/o = skin).', 'پیس از راه پوست', 'cc', T, ['TCP']],
    ['atropine', 'AT-roh-peen', 'Anticholinergic drug that blocks vagal tone; first-line drug for symptomatic bradycardia.', 'آتروپین', 'cc', T, []],
    ['epinephrine', 'ep-ih-NEF-rin', 'Adrenaline; vasopressor used in cardiac arrest and for bradycardia unresponsive to atropine.', 'اپی‌نفرین', 'cc', T, []],
    ['magnesium sulfate', 'mag-NEE-zee-um SUL-fayt', 'Intravenous magnesium; first-line treatment of torsades de pointes.', 'سولفات منیزیم', 'cc', T, []],
    ['calcium gluconate', 'KAL-see-um GLOO-koh-nayt', 'Intravenous calcium that stabilizes the heart membrane in hyperkalemia with ECG changes.', 'کلسیم گلوکونات', 'cc', T, []],
    ['hemodynamic instability', 'hee-moh-dy-NAM-ik in-stah-BIL-ih-tee', 'Signs of poor perfusion from an arrhythmia: hypotension, shock, altered mental status, ischemic chest pain or acute heart failure.', 'ناپایداری همودینامیک', 'cc', D, []],
    ['hypotension', 'hy-poh-TEN-shun', 'Low blood pressure (hypo- = below, tens/o = pressure, -ion = condition).', 'افت فشار خون', 'cc', D, []],
    ['cardiogenic shock', 'kar-dee-oh-JEN-ik shok', 'Shock caused by pump failure of the heart (cardi/o = heart, gen/o = producing).', 'شوک کاردیوژنیک', 'cc', D, []],
    ['cardiopulmonary resuscitation', 'kar-dee-oh-PUL-moh-nair-ee ree-sus-ih-TAY-shun', 'Chest compressions and ventilation to maintain circulation during cardiac arrest (cardi/o = heart, pulmon/o = lung).', 'احیای قلبی‌ریوی', 'cc', T, ['CPR']],
    ['return of spontaneous circulation', 'ree-TURN uv spon-TAY-nee-us ser-kyoo-LAY-shun', 'Restoration of a sustained pulse after cardiac arrest.', 'بازگشت گردش خون خودبه‌خودی', 'cc', D, ['ROSC']],
    ['post-cardiac arrest care', 'pohst KAR-dee-ak ah-REST kair', 'Bundle of care after ROSC: 12-lead ECG, oxygenation, blood pressure, temperature control and search for the cause.', 'مراقبت پس از ایست قلبی', 'cc', T, []],
    ['targeted temperature management', 'TAR-get-ed TEM-per-ah-chur MAN-ij-ment', 'Controlled body temperature after cardiac arrest to protect the brain.', 'کنترل هدفمند دما', 'cc', T, ['TTM']],
    ['advanced cardiovascular life support', 'ad-VANST kar-dee-oh-VAS-kyoo-lar life suh-PORT', 'Guideline-based algorithms for cardiac arrest, bradycardia, tachycardia and acute coronary syndromes.', 'احیای پیشرفته قلبی‌عروقی', 'cc', T, ['ACLS']],
    ['door-to-balloon time', 'dor too bah-LOON time', 'Time from hospital arrival to opening the artery by PCI in STEMI; target 90 minutes or less.', 'زمان در تا بالون', 'cc', L, []],
    ['first medical contact', 'first MED-ih-kal KON-takt', 'Moment a patient is first assessed by EMS or a clinician; the STEMI clock starts here.', 'اولین تماس پزشکی', 'cc', L, ['FMC']],
    ['pulmonary embolism', 'PUL-moh-nair-ee EM-boh-lizm', 'Blockage of a pulmonary artery by a clot; ECG may show sinus tachycardia, right strain and S1Q3T3 (embol/o = plug, -ism = condition).', 'آمبولی ریه', 'cc', D, ['PE']],
    ['S1Q3T3 pattern', 'ess-wun kyoo-three tee-three PAT-ern', 'Deep S in lead I, Q wave and inverted T in lead III; a specific but insensitive sign of acute right heart strain.', 'الگوی S1Q3T3', 'cc', D, []],
    ['right heart strain', 'rite hart strayn', 'ECG signs of acute right ventricular pressure load: T inversion in V1 to V4 and III, right axis, RBBB.', 'فشار حاد بر قلب راست', 'cc', D, []],
    ['pericardial effusion', 'pair-ih-KAR-dee-al eh-FYOO-zhun', 'Fluid collection in the pericardial sac; ECG may show low voltage.', 'افیوژن پریکارد', 'cc', D, []],
    ['cardiac tamponade', 'KAR-dee-ak tam-poh-NAYD', 'Compression of the heart by pericardial fluid with shock; tachycardia, low voltage and electrical alternans.', 'تامپوناد قلبی', 'cc', D, []],
    ['electrical alternans', 'ee-LEK-trih-kal AWL-ter-nanz', 'Beat-to-beat alternation of QRS height as the heart swings in a large effusion.', 'آلترنانس الکتریکی', 'cc', D, []],
    ['pericardiocentesis', 'pair-ih-kar-dee-oh-sen-TEE-sis', 'Needle drainage of pericardial fluid (peri- = around, cardi/o = heart, -centesis = puncture).', 'پریکاردیوسنتز', 'cc', T, []],
    ['myocarditis', 'my-oh-kar-DY-tis', 'Inflammation of the heart muscle (my/o = muscle, cardi/o = heart, -itis = inflammation); ST-T changes, arrhythmias, troponin rise.', 'میوکاردیت', 'cc', D, []],
    ['hypothermia', 'hy-poh-THER-mee-ah', 'Core body temperature below 35 degrees C (hypo- = below, therm/o = heat, -ia = condition).', 'هیپوترمی (دمای پایین بدن)', 'cc', D, []],
    ['Osborn wave', 'OZ-born wayv', 'Positive hump at the J point that grows as temperature falls; also called J wave.', 'موج آزبورن (موج J)', 'cc', D, []],
    ['J wave', 'jay wayv', 'Dome or hump at the J point, most typical of hypothermia.', 'موج J', 'cc', D, []],
    ['subarachnoid hemorrhage', 'sub-ah-RAK-noyd HEM-or-ij', 'Bleeding into the space around the brain; may cause deep T inversion and long QT.', 'خونریزی زیرعنکبوتیه', 'cc', D, ['SAH']],
    ['raised intracranial pressure', 'rayzd in-trah-KRAY-nee-al PRESH-ur', 'High pressure inside the skull (intra- = within, crani/o = skull) causing giant inverted T waves, long QT and bradycardia.', 'افزایش فشار داخل جمجمه', 'cc', D, ['ICP']],
    ['cerebral T waves', 'seh-REE-bral tee wayvz', 'Giant symmetric inverted T waves with long QT seen after acute brain injury.', 'امواج T مغزی', 'cc', D, []],
    ['cyanosis', 'sy-ah-NOH-sis', 'Bluish skin from low blood oxygen (cyan/o = blue, -osis = abnormal condition).', 'سیانوز (کبودی)', 'cc', D, []],
    ['hypoxemia', 'hy-pok-SEE-mee-ah', 'Low oxygen in the blood (hypo- = below, ox/o = oxygen, -emia = blood condition).', 'هیپوکسمی (اکسیژن پایین خون)', 'cc', D, []],
    ['sepsis', 'SEP-sis', 'Life-threatening organ dysfunction from infection; a common cause of sinus tachycardia and new AF in ICU.', 'سپسیس', 'cc', D, []],
    ['QTc monitoring', 'kyoo-tee-see MON-ih-tor-ing', 'Repeated measurement of the corrected QT in patients receiving QT-prolonging drugs or with electrolyte loss.', 'پایش QTc', 'cc', L, []],
    ['critical care unit', 'KRIT-ih-kal kair YOO-nit', 'Hospital unit for continuous monitoring and organ support of seriously ill patients.', 'بخش مراقبت‌های ویژه', 'cc', A, ['ICU', 'CCU']]
  ];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* ریتما — واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها، تجزیه‌گر واژه و مولد سؤال‌ها
 * واژه‌ها از terms.js می‌آیند؛ ریشه‌ها و اختصارها از منابع دوره (کتاب، جزوه‌ها، راهنمای ۱۴ قدمی، کارگاه Marriott) گردآوری و پالایش شده‌اند.
 * دنیاها: lx زبان قلب و نوار (همه واژه‌ها) · ph فیزیولوژی و موج‌ها · ar ریتم و آریتمی · mi ایسکمی و انفارکتوس · sc حفره‌ها، هدایت و عوامل متابولیک · cc ICU و اورژانس · * عمومی */
(function (root) {
  const EA = root.EA = root.EA || {};

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, absence of', 'بدون، فقدان', '*'],
    ['anti-', ['anti'], 'against', 'ضد، علیه', 'sc'],
    ['bi-', ['bi'], 'two, twice', 'دو', 'ph'],
    ['brady-', ['brady'], 'slow', 'کند، آهسته', 'lx'],
    ['de-', ['de'], 'removal, reversal, down', 'برداشتن، معکوس', 'ph'],
    ['dys-', ['dys'], 'bad, abnormal, difficult', 'بد، نابهنجار', 'lx'],
    ['endo-', ['endo'], 'within, inner', 'درون', 'lx'],
    ['epi-', ['epi'], 'upon, over', 'روی، بالای', 'lx'],
    ['extra-', ['extra'], 'outside, beyond', 'خارج از، اضافه', 'ar'],
    ['hyper-', ['hyper'], 'above normal, excessive', 'بیش از حد، بالاتر از طبیعی', '*'],
    ['hypo-', ['hypo', 'hyp'], 'below normal, deficient', 'کمتر از حد، زیر', '*'],
    ['infra-', ['infra'], 'below, beneath', 'زیرِ، پایینِ', 'lx'],
    ['inter-', ['inter'], 'between', 'بین', 'lx'],
    ['intra-', ['intra'], 'within, inside', 'درونِ', 'lx'],
    ['iso-', ['iso'], 'equal, same', 'برابر، یکسان', 'ph'],
    ['milli-', ['milli'], 'one-thousandth', 'یک‌هزارم', 'lx'],
    ['mono-, uni-', ['mono', 'uni'], 'one, single', 'یک، تک', 'ar'],
    ['multi-, poly-', ['multi', 'poly'], 'many, much', 'چند، بسیار', 'ar'],
    ['peri-', ['peri'], 'around, surrounding', 'پیرامون، دور', 'lx'],
    ['post-', ['post'], 'after, behind', 'پس از، پشت', 'mi'],
    ['pre-', ['pre'], 'before, in front of', 'پیش از، جلوی', 'sc'],
    ['re-', ['re'], 'again, back', 'دوباره، بازگشت', 'mi'],
    ['sub-', ['sub'], 'under, below', 'زیر', 'mi'],
    ['supra-', ['supra'], 'above', 'بالای، فوق', 'lx'],
    ['tachy-', ['tachy'], 'fast, rapid', 'تند، سریع', 'lx'],
    ['tele-', ['tele'], 'distant, far', 'دور', 'cc'],
    ['trans-', ['trans'], 'across, through', 'از میان، سراسری', 'mi'],
    ['tri-', ['tri'], 'three', 'سه', 'sc'],
    // ریشه‌ها: قلب، حفره‌ها و هدایت
    ['cardi/o', ['cardi', 'card'], 'heart', 'قلب', 'lx'],
    ['cordi/o', ['cordi'], 'heart (Latin)', 'قلب (لاتین)', 'lx'],
    ['atri/o', ['atri'], 'atrium (upper chamber)', 'دهلیز', 'lx'],
    ['ventricul/o', ['ventricul'], 'ventricle (lower chamber)', 'بطن', 'lx'],
    ['electr/o', ['electr'], 'electricity', 'الکتریسیته، برق', 'lx'],
    ['coron/o', ['coron'], 'crown; coronary arteries', 'تاج؛ عروق کرونر', 'lx'],
    ['my/o', ['my'], 'muscle', 'عضله', 'lx'],
    ['sept/o', ['sept'], 'wall, partition (septum)', 'دیواره', 'lx'],
    ['valv/o, valvul/o', ['valvul', 'valv'], 'valve', 'دریچه', 'lx'],
    ['aort/o', ['aort'], 'aorta', 'آئورت', 'lx'],
    ['ech/o', ['ech'], 'sound', 'صدا، پژواک', 'lx'],
    ['steth/o', ['steth'], 'chest', 'سینه', 'lx'],
    ['cost/o', ['cost'], 'rib', 'دنده', 'lx'],
    ['volt', ['volt'], 'volt (unit of electrical potential)', 'ولت', 'lx'],
    ['sin/o, sinus/o', ['sinus', 'sin'], 'sinus (SA node region)', 'سینوس', 'ph'],
    ['nod/o', ['nod'], 'knot, node', 'گره', 'ph'],
    ['polar/o', ['polar'], 'pole, polarity', 'قطب', 'ph'],
    ['systol/o', ['systol'], 'contraction', 'انقباض', 'ph'],
    ['diastol/o', ['diastol'], 'relaxation, dilation', 'استراحت، شل شدن', 'ph'],
    ['ton/o', ['ton'], 'tone, tension', 'تون، کشش', 'ph'],
    ['rhythm/o', ['rhythm', 'rrhythm'], 'rhythm', 'ریتم، نظم', 'ar'],
    ['fibrill/o', ['fibrill'], 'small fibers; quivering', 'رشته‌های ریز؛ لرزش', 'ar'],
    ['ectop/o', ['ectop'], 'out of place, displaced', 'نابه‌جا', 'ar'],
    ['junct/o', ['junct'], 'joining, junction', 'محل اتصال', 'ar'],
    ['idi/o', ['idi'], 'own, self', 'خودی، از خود', 'ar'],
    ['drom/o', ['drom'], 'running, course', 'مسیر، روند', 'ar'],
    ['orth/o', ['orth'], 'straight, correct', 'راست، درست', 'ar'],
    ['morph/o', ['morph'], 'shape, form', 'شکل', 'ar'],
    ['foc/o', ['foc'], 'focus, center', 'کانون', 'ar'],
    ['fascicul/o', ['fascicul'], 'small bundle (fascicle)', 'دسته کوچک (فاسیکل)', 'sc'],
    ['excit/o', ['excit'], 'to stimulate, excite', 'تحریک کردن', 'sc'],
    // ریشه‌ها: رگ‌ها و ایسکمی
    ['angi/o', ['angi'], 'vessel', 'رگ', 'mi'],
    ['arteri/o', ['arteri'], 'artery', 'شریان', 'mi'],
    ['vas/o, vascul/o', ['vascul', 'vas'], 'vessel', 'رگ، عروق', 'mi'],
    ['ather/o', ['ather'], 'fatty plaque, paste', 'پلاک چربی', 'mi'],
    ['thromb/o', ['thromb'], 'clot', 'لخته', 'mi'],
    ['isch/o', ['isch'], 'to hold back, deficiency', 'بازداشتن، کمبود', 'mi'],
    ['necr/o', ['necr'], 'death', 'مرگ (بافت)', 'mi'],
    ['mur/o', ['mur'], 'wall', 'دیواره', 'mi'],
    ['perfus/o', ['perfus'], 'pouring through; blood flow', 'خون‌رسانی', 'mi'],
    ['pector/o', ['pector'], 'chest', 'قفسه سینه', 'mi'],
    // ریشه‌ها: الکترولیت‌ها و مواد
    ['kal/i', ['kal'], 'potassium', 'پتاسیم', 'sc'],
    ['calc/i', ['calc'], 'calcium', 'کلسیم', 'sc'],
    ['magnes/o', ['magnes'], 'magnesium', 'منیزیم', 'sc'],
    ['natr/o', ['natr'], 'sodium', 'سدیم', 'sc'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', 'خون', '*'],
    ['ox/o', ['ox'], 'oxygen', 'اکسیژن', 'cc'],
    // ریشه‌ها: بالین و ICU
    ['pulmon/o', ['pulmon'], 'lung', 'ریه', 'cc'],
    ['embol/o', ['embol'], 'plug, embolus', 'لخته رونده (آمبولی)', 'cc'],
    ['therm/o', ['therm'], 'heat, temperature', 'گرما، دما', 'cc'],
    ['tens/o', ['tens'], 'pressure, stretching', 'فشار، کشش', 'cc'],
    ['cyan/o', ['cyan'], 'blue', 'آبی، کبود', 'cc'],
    ['vers/o', ['vers'], 'turning', 'برگرداندن', 'cc'],
    ['gen/o', ['gen'], 'producing, origin', 'تولید، منشأ', 'cc'],
    ['cutane/o', ['cutane'], 'skin', 'پوست', 'cc'],
    ['crani/o', ['crani'], 'skull', 'جمجمه', 'cc'],
    ['dextr/o', ['dextr'], 'right', 'راست', 'cc'],
    // پسوندها
    ['-ac, -al, -ar, -ary, -ic, -ous', ['ary', 'ac', 'al', 'ar', 'ic', 'ous'], 'pertaining to', 'مربوط به', '*'],
    ['-cardia', ['cardia'], 'heart condition', 'حالت قلب', 'lx'],
    ['-rrhythmia', ['rrhythmia'], 'rhythm condition', 'حالت ریتم', 'lx'],
    ['-gram', ['gram'], 'record, picture', 'ثبت، نگاره', 'lx'],
    ['-graph', ['graph'], 'instrument for recording', 'دستگاه ثبت', 'lx'],
    ['-graphy', ['graphy'], 'process of recording', 'فرایند ثبت', 'lx'],
    ['-scope', ['scope'], 'instrument for examining', 'ابزار معاینه', 'lx'],
    ['-metry', ['metry'], 'process of measuring', 'اندازه‌گیری', 'cc'],
    ['-logy', ['logy'], 'study of', 'علم، مطالعه', 'lx'],
    ['-logist', ['logist'], 'specialist', 'متخصص', 'lx'],
    ['-pathy', ['pathy'], 'disease', 'بیماری', 'lx'],
    ['-megaly', ['megaly'], 'enlargement', 'بزرگی', 'lx'],
    ['-itis', ['itis'], 'inflammation', 'التهاب', 'lx'],
    ['-plegia', ['plegia'], 'paralysis, stopping', 'فلج، توقف', 'lx'],
    ['-um', ['um'], 'structure, tissue', 'ساختار، بافت', 'lx'],
    ['-ia', ['ia'], 'condition', 'حالت', '*'],
    ['-emia', ['emia'], 'blood condition', 'وضعیت خون', '*'],
    ['-osis', ['osis'], 'abnormal condition', 'حالت غیرطبیعی', '*'],
    ['-ism', ['ism'], 'condition, process', 'حالت', 'cc'],
    ['-ion, -ation, -ization', ['ization', 'ation', 'ion'], 'process, act of', 'فرایند، عمل', '*'],
    ['-trophy', ['trophy'], 'development, growth', 'رشد، پرورش', 'sc'],
    ['-sclerosis', ['sclerosis'], 'hardening', 'سخت شدن', 'mi'],
    ['-stenosis', ['stenosis'], 'narrowing', 'تنگی', 'mi'],
    ['-spasm', ['spasm'], 'sudden involuntary contraction', 'گرفتگی ناگهانی', 'mi'],
    ['-plasty', ['plasty'], 'surgical repair', 'ترمیم جراحی', 'mi'],
    ['-lysis', ['lysis'], 'breakdown, dissolution', 'حل شدن، تجزیه', 'mi'],
    ['-ectomy', ['ectomy'], 'surgical removal', 'برداشتن (جراحی)', 'mi'],
    ['-centesis', ['centesis'], 'surgical puncture to remove fluid', 'سوراخ کردن و کشیدن مایع', 'cc']
  ];
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = [
    ['ECG', 'electrocardiogram (electrocardiography)', 'نوار قلب', 'lx'],
    ['EKG', 'electrocardiogram (German spelling, Elektrokardiogramm)', 'نوار قلب؛ همان ECG', 'lx'],
    ['bpm', 'beats per minute', 'ضربان در دقیقه', 'lx'],
    ['mV', 'millivolt', 'میلی‌ولت', 'lx'],
    ['ms', 'millisecond', 'میلی‌ثانیه', 'lx'],
    ['RA', 'right atrium', 'دهلیز راست', 'lx'],
    ['LA', 'left atrium', 'دهلیز چپ', 'lx'],
    ['RV', 'right ventricle', 'بطن راست', 'lx'],
    ['LV', 'left ventricle', 'بطن چپ', 'lx'],
    ['IVS', 'interventricular septum', 'دیواره بین‌بطنی', 'lx'],
    ['ICS', 'intercostal space', 'فضای بین‌دنده‌ای', 'lx'],
    ['MCL', 'midclavicular line', 'خط میدکلاویکولار', 'lx'],
    ['TTE', 'transthoracic echocardiography', 'اکوکاردیوگرافی از روی قفسه سینه', 'lx'],
    ['SA', 'sinoatrial (node)', 'سینوسی‌دهلیزی (گره سینوسی)', 'ph'],
    ['AV', 'atrioventricular (node)', 'دهلیزی‌بطنی (گره AV)', 'ph'],
    ['HR', 'heart rate', 'ضربان قلب', 'ph'],
    ['NSR', 'normal sinus rhythm', 'ریتم سینوسی نرمال', 'ph'],
    ['QTc', 'corrected QT interval', 'QT اصلاح‌شده با ضربان', 'ph'],
    ['LAD', 'left axis deviation', 'انحراف محور به چپ (هم‌نام با شریان LAD)', 'ph'],
    ['RAD', 'right axis deviation', 'انحراف محور به راست', 'ph'],
    ['AF, AFib', 'atrial fibrillation', 'فیبریلاسیون دهلیزی', 'ar'],
    ['AFl', 'atrial flutter', 'فلاتر دهلیزی', 'ar'],
    ['RVR', 'rapid ventricular response', 'پاسخ بطنی سریع', 'ar'],
    ['SVT', 'supraventricular tachycardia', 'تاکی‌کاردی فوق‌بطنی', 'ar'],
    ['PSVT', 'paroxysmal supraventricular tachycardia', 'تاکی‌کاردی فوق‌بطنی حمله‌ای', 'ar'],
    ['AVNRT', 'atrioventricular nodal reentrant tachycardia', 'تاکی‌کاردی ورود مجدد گره AV', 'ar'],
    ['AVRT', 'atrioventricular reentrant tachycardia', 'تاکی‌کاردی ورود مجدد با مسیر فرعی', 'ar'],
    ['MAT', 'multifocal atrial tachycardia', 'تاکی‌کاردی دهلیزی چندکانونی', 'ar'],
    ['PAC', 'premature atrial complex', 'ضربان زودرس دهلیزی', 'ar'],
    ['PJC', 'premature junctional complex', 'ضربان زودرس جانکشنال', 'ar'],
    ['PVC', 'premature ventricular complex', 'ضربان زودرس بطنی', 'ar'],
    ['VT', 'ventricular tachycardia', 'تاکی‌کاردی بطنی', 'ar'],
    ['NSVT', 'nonsustained ventricular tachycardia', 'تاکی‌کاردی بطنی ناپایدار', 'ar'],
    ['VF', 'ventricular fibrillation', 'فیبریلاسیون بطنی', 'ar'],
    ['TdP', 'torsades de pointes', 'تورساد دو پوینت', 'ar'],
    ['AIVR', 'accelerated idioventricular rhythm', 'ریتم ایدیوونتریکولار تسریع‌شده', 'ar'],
    ['SSS', 'sick sinus syndrome', 'سندرم سینوس بیمار', 'ar'],
    ['AVB', 'atrioventricular block', 'بلوک دهلیزی‌بطنی', 'ar'],
    ['CHB', 'complete heart block', 'بلوک کامل قلبی', 'ar'],
    ['WCT', 'wide complex tachycardia', 'تاکی‌کاردی با کمپلکس پهن', 'ar'],
    ['PEA', 'pulseless electrical activity', 'فعالیت الکتریکی بدون نبض', 'ar'],
    ['ACS', 'acute coronary syndrome', 'سندرم حاد کرونری', 'mi'],
    ['MI', 'myocardial infarction', 'انفارکتوس میوکارد (سکته قلبی)', 'mi'],
    ['STEMI', 'ST-elevation myocardial infarction', 'سکته قلبی با بالا رفتن ST', 'mi'],
    ['NSTEMI', 'non-ST-elevation myocardial infarction', 'سکته قلبی بدون بالا رفتن ST', 'mi'],
    ['UA', 'unstable angina', 'آنژین ناپایدار', 'mi'],
    ['cTn', 'cardiac troponin', 'تروپونین قلبی', 'mi'],
    ['STE', 'ST elevation', 'بالا رفتن قطعه ST', 'mi'],
    ['STD', 'ST depression', 'پایین رفتن قطعه ST', 'mi'],
    ['TWI', 'T wave inversion', 'وارونگی موج T', 'mi'],
    ['LMCA', 'left main coronary artery', 'شریان اصلی کرونر چپ', 'mi'],
    ['LAD', 'left anterior descending artery', 'شریان نزولی قدامی چپ', 'mi'],
    ['LCx', 'left circumflex artery', 'شریان سیرکومفلکس چپ', 'mi'],
    ['RCA', 'right coronary artery', 'شریان کرونر راست', 'mi'],
    ['RVMI', 'right ventricular myocardial infarction', 'انفارکتوس بطن راست', 'mi'],
    ['PCI', 'percutaneous coronary intervention', 'مداخله کرونری از راه پوست', 'mi'],
    ['CABG', 'coronary artery bypass graft', 'جراحی بای‌پس عروق کرونر', 'mi'],
    ['TNG', 'nitroglycerin (trinitroglycerin)', 'نیتروگلیسیرین', 'mi'],
    ['BER', 'benign early repolarization', 'رپلاریزاسیون زودرس خوش‌خیم', 'mi'],
    ['LVA', 'left ventricular aneurysm', 'آنوریسم بطن چپ', 'mi'],
    ['UDMI', 'Universal Definition of Myocardial Infarction', 'تعریف جهانی انفارکتوس میوکارد', 'mi'],
    ['RAE', 'right atrial enlargement', 'بزرگی دهلیز راست', 'sc'],
    ['LAE', 'left atrial enlargement', 'بزرگی دهلیز چپ', 'sc'],
    ['LVH', 'left ventricular hypertrophy', 'هیپرتروفی بطن چپ', 'sc'],
    ['RVH', 'right ventricular hypertrophy', 'هیپرتروفی بطن راست', 'sc'],
    ['BBB', 'bundle branch block', 'بلوک شاخه‌ای', 'sc'],
    ['RBBB', 'right bundle branch block', 'بلوک شاخه راست', 'sc'],
    ['LBBB', 'left bundle branch block', 'بلوک شاخه چپ', 'sc'],
    ['LAFB', 'left anterior fascicular block', 'بلوک فاسیکل قدامی چپ', 'sc'],
    ['LPFB', 'left posterior fascicular block', 'بلوک فاسیکل خلفی چپ', 'sc'],
    ['WPW', 'Wolff-Parkinson-White (syndrome)', 'سندرم ولف‌پارکینسون‌وایت', 'sc'],
    ['LQTS', 'long QT syndrome', 'سندرم QT طولانی', 'sc'],
    ['ARVC', 'arrhythmogenic right ventricular cardiomyopathy', 'کاردیومیوپاتی آریتموژنیک بطن راست', 'sc'],
    ['HCM', 'hypertrophic cardiomyopathy', 'کاردیومیوپاتی هیپرتروفیک', 'sc'],
    ['K+', 'potassium ion', 'یون پتاسیم', 'sc'],
    ['Ca2+', 'calcium ion', 'یون کلسیم', 'sc'],
    ['Mg2+', 'magnesium ion', 'یون منیزیم', 'sc'],
    ['TCA', 'tricyclic antidepressant', 'ضدافسردگی سه‌حلقه‌ای', 'sc'],
    ['CCB', 'calcium channel blocker', 'مسدودکننده کانال کلسیم', 'sc'],
    ['ICU', 'intensive care unit', 'بخش مراقبت‌های ویژه', 'cc'],
    ['CCU', 'coronary care unit', 'بخش مراقبت‌های ویژه قلبی', 'cc'],
    ['ED', 'emergency department', 'بخش اورژانس', 'cc'],
    ['EMS', 'emergency medical services', 'فوریت‌های پزشکی پیش‌بیمارستانی', 'cc'],
    ['ACLS', 'advanced cardiovascular life support', 'احیای پیشرفته قلبی‌عروقی', 'cc'],
    ['CPR', 'cardiopulmonary resuscitation', 'احیای قلبی‌ریوی', 'cc'],
    ['ROSC', 'return of spontaneous circulation', 'بازگشت گردش خون خودبه‌خودی', 'cc'],
    ['AED', 'automated external defibrillator', 'دفیبریلاتور خودکار خارجی', 'cc'],
    ['ICD', 'implantable cardioverter-defibrillator', 'دفیبریلاتور کاشتنی', 'cc'],
    ['CRT', 'cardiac resynchronization therapy', 'درمان همگام‌سازی مجدد قلب', 'cc'],
    ['PPM', 'permanent pacemaker', 'پیس‌میکر دائمی', 'cc'],
    ['TCP', 'transcutaneous pacing', 'پیس از راه پوست', 'cc'],
    ['TTM', 'targeted temperature management', 'کنترل هدفمند دما', 'cc'],
    ['FMC', 'first medical contact', 'اولین تماس پزشکی', 'cc'],
    ['PE', 'pulmonary embolism', 'آمبولی ریه', 'cc'],
    ['SAH', 'subarachnoid hemorrhage', 'خونریزی زیرعنکبوتیه', 'cc'],
    ['ICP', 'intracranial pressure', 'فشار داخل جمجمه', 'cc'],
    ['BP', 'blood pressure', 'فشار خون', 'cc'],
    ['SpO2', 'peripheral oxygen saturation', 'اشباع اکسیژن خون محیطی', 'cc']
  ];
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: 'آناتومی و فیزیولوژی', Pathology_and_Disorders: 'بیماری‌ها و اختلالات',
    Laboratory_and_Diagnostics: 'آزمایشگاه و تشخیص', Pharmacology_and_Treatment: 'درمان، دارو و جراحی'
  };
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], c: r[5], ab: r[6] || [] }));
  /* ---------- دسته‌بندی واژه‌ها ----------
   * دسته اصلی هر واژه در داده آمده (آناتومی و فیزیولوژی، بیماری، تشخیص، درمان)؛ اینجا ریزتر می‌شود:
   * آناتومی ← «ساختارها و حفره‌ها» یا «موج‌ها، فواصل و الکتروفیزیولوژی»؛ بیماری ← «بیماری‌ها و آریتمی‌ها» یا «یافته‌ها و الگوهای نوار». */
  const CATS = [
    { id: 'body', icon: '🫀', name: 'ساختارها و حفره‌ها' },
    { id: 'phys', icon: '〰️', name: 'موج‌ها، فواصل و الکتروفیزیولوژی' },
    { id: 'field', icon: '🎓', name: 'رشته‌ها و متخصصان' },
    { id: 'dz', icon: '💔', name: 'بیماری‌ها و آریتمی‌ها' },
    { id: 'sx', icon: '📉', name: 'یافته‌ها و الگوهای نوار' },
    { id: 'lab', icon: '🧪', name: 'لیدها، ابزار و تشخیص' },
    { id: 'tx', icon: '💊', name: 'درمان، دارو و دستگاه' }
  ];
  const FIELD = /(logy|logist)$/;
  const PHYS = /(wave|interval|segment|complex|potential|polarization|automaticity|refractory|axis|rhythm|rate|systole|diastole|cycle|progression|zone|peak time|tone|isoelectric|amplitude|millivolt|millisecond|sympathetic|reentry|dromic|electrolyte)/;
  const SX = /(elevation|depression|inversion|waves?$|pattern|sign$|alternans|pause|beat$|deviation|progression|voltage|palpitation|syncope|bigeminy|trigeminy|couplet|dissociation|concordan|discordant|artifact|wander|interference|reversal|misplacement|capture|undersensing|instability|hypotension|cyanosis|hypoxemia|effect$|strain|morphic$|focal$|^ectopic$|short pr|response$|change$)/;
  /* استثناهایی که قاعده‌ها اشتباه می‌گیرند */
  const CAT_FIX = { 'conduction system': 'body', 'bundle branch': 'body', 'bundle of His': 'body', 'Purkinje fibers': 'body', 'left anterior fascicle': 'body', 'left posterior fascicle': 'body', 'sinoatrial node': 'body', 'atrioventricular node': 'body', 'escape rhythm': 'dz', 'junctional rhythm': 'dz', 'agonal rhythm': 'dz', 'idioventricular rhythm': 'dz', 'accelerated idioventricular rhythm': 'dz', 'shockable rhythm': 'dz', 'paced rhythm': 'lab', 'normal sinus rhythm': 'phys', 'heart rate': 'phys', 'flutter waves': 'sx', 'fibrillatory waves': 'sx', 'delta wave': 'sx', 'epsilon wave': 'sx', 'Osborn wave': 'sx', 'J wave': 'sx', 'cerebral T waves': 'sx', 'de Winter T waves': 'sx', 'hyperacute T wave': 'sx', 'pathologic Q wave': 'sx', 'peaked T wave': 'sx', 'prominent U wave': 'sx', 'retrograde P wave': 'sx', 'right heart strain': 'sx', 'low voltage': 'sx', 'P pulmonale': 'sx', 'P mitrale': 'sx', 'fusion beat': 'sx', 'capture beat': 'sx', 'early repolarization': 'sx', 'STEMI equivalent': 'sx', 'Wellens syndrome': 'dz', 'electrolyte': 'phys' };
  function classify(t) {
    const n = t.t.toLowerCase();
    if (CAT_FIX[t.t]) return CAT_FIX[t.t];
    if (FIELD.test(n)) return 'field';
    if (t.c === 'Laboratory_and_Diagnostics') return 'lab';
    if (t.c === 'Pharmacology_and_Treatment') return 'tx';
    if (t.c === 'Pathology_and_Disorders') return SX.test(n) ? 'sx' : 'dz';
    return PHYS.test(n) ? 'phys' : 'body';
  }
  TERMS.forEach(t => { t.k = classify(t); });
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
        push(j, b.cost + 10, { text: st.s, r: st.r, kind: k });
        // واکه رابط پس از ریشه: hem + o
        if (k === 'root' && j < n && /[oi]/.test(w[j])) push(j + 1, b.cost + 10, { text: st.s + w[j], r: st.r, kind: k });
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
    if (p.r.stems.some(s => s === base) && /[oi]/.test(v)) return base + '/' + v;
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
  const WORLDS = ['lx', 'ph', 'ar', 'mi', 'sc', 'cc'];
  /* دنیای lx (زبان قلب و نوار) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
  const rootsOf = w => (w === 'lx' ? ROOTS : ROOTS.filter(r => inW(r, w)));
  WORLDS.forEach(W => {
    const w = W === 'lx' ? null : W;
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
      const pool = ABBR.filter(a => !w || a.w === w), a = rnd(pool);
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
      if (a.full && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* ریتما — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با مرجع: زمینه سفید کارت، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)، پیکان‌های خاکستری و رنگ دنیا برای تأکید.
 * همه نوارها روی کاغذ شطرنجی استاندارد کشیده می‌شوند: ۴ پیکسل = ۱ میلی‌متر؛ ۲۵ mm/s و ۱۰ mm/mV.
 * هر ضربان از جمع چند منحنی نرم (گاوسی) ساخته می‌شود: P، Q، R، S، قطعه ST، T و U؛ پس هر الگو با چند عدد تعریف می‌شود.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#66737a', FA_INK = '#4d585e', LINE = '#5b6b73';
  const RED = '#d7263d', BLUE = '#2f80d1', GREEN = '#13a08f', ORANGE = '#e8792b', VIOLET = '#7b5ce0', GOLD = '#c99700';

  /* ---------- پایه ---------- */
  /** پایین‌ترین نقطه همه نوشته‌ها (با خط‌های شکسته) تا کادر هرگز نوشته‌ای را نبرد */
  function textBottom(body) {
    let m = 0;
    body.replace(/<text x="[^"]*" y="([\d.]+)" font-size="([\d.]+)"[^>]*>([\s\S]*?)<\/text>/g, (_, y, z, inner) => {
      const dy = (inner.match(/dy="([\d.]+)"/g) || []).reduce((a, d) => a + parseFloat(d.slice(4)), 0);
      m = Math.max(m, +y + dy + (+z) * 0.32 + 5);
    });
    return Math.ceil(m);
  }
  function svg(w, h0, body, label, defs) {
    const h = Math.max(h0, textBottom(body));
    return `<svg class="art" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || ''}" xmlns="http://www.w3.org/2000/svg"><defs>${defs || ''}</defs><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
  }
  /* هاله سفید پشت هر نوشته: خط، پیکان یا شبکه کاغذ از روی حروف رد نمی‌شود */
  const HALO = ' paint-order="stroke" stroke="#fff" stroke-width="3.4" stroke-linejoin="round"';
  /** هاله برای نوشته سفید (درون دایره یا جعبه رنگی) معنا ندارد؛ p.halo = رنگ زمینه برای نوشته روی جعبه رنگی */
  const halo = p => (p.halo === false || /^(#fff|#ffffff|white)$/i.test(p.fill || '') ? '' : typeof p.halo === 'string' ? HALO.replace('#fff', p.halo) : HALO);
  /** متن انگلیسی (Nunito) */
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 11.5}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${FONT_EN}"${halo(p)}>${s}</text>`; };
  /* در direction=rtl معنای start/end برعکس می‌شود؛ اینجا anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* متن فارسی درون SVG:
   * - بازه عددی «۶۰–۱۰۰» به «۶۰ تا ۱۰۰» تبدیل می‌شود تا در راست‌به‌چپ وارونه خوانده نشود؛
   * - عدد و یکایش («۲۰۰ ms») و هر تکه لاتین با LRI…PDI یک گروه چپ‌به‌راست می‌شوند و از هم جدا نمی‌افتند. */
  const NUM = '[\\d۰-۹][\\d۰-۹٫.,]*';
  const RANGE = new RegExp(`(${NUM})\\s*[–-]\\s*(${NUM})(?![A-Za-z])`, 'g');
  const LTR_RUN = new RegExp(`(?<![&#\\w])(?:${NUM}\\s?(?:mm\\/s|ms|mV|mm|bpm|Hz|s)(?![A-Za-z])|\\(?[A-Za-z][A-Za-z0-9\\/\\-.+–°:%'′]*\\)?(?:\\s*(?:[=+\\/→<>≥≤]|\\s)\\s*\\(?[A-Za-z0-9][A-Za-z0-9\\/\\-.+–°:%'′]*\\)?)*)`, 'g');
  const UNITS = { 'mm/s': 'میلی‌متر در ثانیه', ms: 'میلی‌ثانیه', mV: 'میلی‌ولت', mm: 'میلی‌متر', bpm: 'در دقیقه' };
  const faDigits = x => x.replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]).replace(/(?<=[۰-۹])\.(?=[۰-۹])/g, '٫');
  /** خط فارسی SVG فقط واژه و رقم فارسی می‌گیرد: یکا به واژه، مقایسه به واژه، رقم لاتین تنها به رقم فارسی */
  const faLine = s => String(s)
    .replace(/(?<![A-Za-z0-9])[0-9]+(?:\.[0-9]+)?(?![A-Za-z0-9])/g, faDigits)
    .replace(RANGE, '$1 تا $2')
    .replace(new RegExp(`(${NUM})\\s?(mm\\/s|ms|mV|mm|bpm)(?![A-Za-z])`, 'g'), (m, n, u) => `${n} ${UNITS[u]}`)
    .replace(new RegExp(`≥\\s*(${NUM}(?:\\s(?:میلی‌[^\\s؛،:()]+|در دقیقه))?)`, 'g'), '$1 یا بیشتر')
    .replace(new RegExp(`≤\\s*(${NUM}(?:\\s(?:میلی‌[^\\s؛،:()]+|در دقیقه))?)`, 'g'), 'حداکثر $1')
    .replace(new RegExp(`>\\s*(${NUM})`, 'g'), 'بیشتر از $1')
    .replace(new RegExp(`<\\s*(${NUM})`, 'g'), 'کمتر از $1');
  const LRI = s => faLine(s).replace(LTR_RUN, m => { const tail = m.match(/[\s:.]*$/)[0]; return '⁦' + m.slice(0, m.length - tail.length) + '⁩' + tail; });
  /* پهنای تقریبی نوشته (برای شکستن خط): حرف فارسی حدود نیم em، لاتین کمی پهن‌تر، فاصله یک‌چهارم */
  const textW = (s, z) => [...String(s)].reduce((a, c) => a + (c === ' ' ? 0.28 : /[A-Za-z0-9]/.test(c) ? 0.58 : /[\u2066-\u2069\u200c]/.test(c) ? 0 : 0.5), 0) * z;
  /** شکستن نوشته به چند خط تا پهنایش از maxw بیشتر نشود */
  function wrapLines(s, z, maxw) {
    if (!maxw || textW(s, z) <= maxw) return [s];
    const out = []; let cur = '';
    String(s).split(' ').forEach(w => { const nx = cur ? cur + ' ' + w : w; if (cur && textW(nx, z) > maxw) { out.push(cur); cur = w; } else cur = nx; });
    if (cur) out.push(cur);
    return out;
  }
  /** متن فارسی (Vazirmatn)؛ p.maxw = پهنای مجاز برای شکستن خط */
  const f = (x, y, s, o) => {
    const p = o || {}, z = p.size || 10.5;
    const ls = wrapLines(faLine(s), z, p.maxw);
    const body = ls.length === 1 ? LRI(ls[0]) : ls.map((l, i) => `<tspan x="${x}"${i ? ` dy="${(z * 1.45).toFixed(1)}"` : ''}>${LRI(l)}</tspan>`).join('');
    return `<text x="${x}" y="${y}" font-size="${z}" font-weight="${p.w || 600}" fill="${p.fill || FA_INK}" text-anchor="${FLIP[p.anchor || 'middle']}" direction="rtl" font-family="${FONT_FA}"${halo(p)}>${body}</text>`;
  };
  /** تعداد خط‌های یک نوشته فارسی پس از شکستن */
  const faLines = (s, z, maxw) => wrapLines(faLine(s), z, maxw).length;
  /** برچسب دوزبانه: واژه انگلیسی و زیر آن معنی فارسی */
  const lab = (x, y, en, fa, o) => { const p = o || {}; const z = p.size || 11.5; return t(x, y, en, { size: z, fill: p.fill || INK, anchor: p.anchor, w: 800 }) + (fa ? f(x, y + (p.gap || z + 3), fa, { size: z - 1.2, anchor: p.anchor || 'middle', fill: p.faFill, maxw: p.maxw }) : ''); };
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 1.8}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const pill = (x, y, w, h, fill, stroke) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(h / 2, 10)}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="1.4"` : ''}/>`;
  /** کروشه افقی زیر یا روی یک بازه با برچسب */
  const span = (x1, x2, y, en, fa, c, up) => {
    const d = up ? -5 : 5;
    return `<path d="M${x1} ${y - d} V${y} H${x2} V${y - d}" stroke="${c || LINE}" stroke-width="1.4" fill="none"/>${lab((x1 + x2) / 2, up ? y - 8 : y + 12, en, fa, { size: 9, fill: c || INK })}`;
  };

  /* ---------- کاغذ نوار ---------- */
  const MM = 4;                 // پیکسل در هر میلی‌متر
  const PXMS = MM * 25 / 1000;  // پیکسل در هر میلی‌ثانیه (۲۵ mm/s)
  /** الگوی کاغذ شطرنجی؛ شناسه یکتا برمی‌گرداند */
  function paperDefs(z) {
    const a = 'pm' + (++UID), b = 'pM' + UID, m = MM * (z || 1);
    return {
      id: b,
      defs: `<pattern id="${a}" width="${m}" height="${m}" patternUnits="userSpaceOnUse"><path d="M${m} 0 V${m} H0" fill="none" stroke="#f7c9cf" stroke-width=".5"/></pattern>
        <pattern id="${b}" width="${m * 5}" height="${m * 5}" patternUnits="userSpaceOnUse"><rect width="${m * 5}" height="${m * 5}" fill="url(#${a})"/><path d="M${m * 5} 0 V${m * 5} H0" fill="none" stroke="#ee9aa6" stroke-width="1"/></pattern>`
    };
  }
  const paper = (id, x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff6f7"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id})"/>`;

  /* ---------- موتور موج ---------- */
  const gauss = (x, c, s) => Math.exp(-((x - c) * (x - c)) / (2 * s * s));
  const agauss = (x, c, sl, sr) => gauss(x, c, x < c ? sl : sr);
  const smooth = (a, b, x) => { const u = Math.min(1, Math.max(0, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
  /** پیش‌فرض یک ضربان سینوسی در لید II (واحد: میلی‌متر و میلی‌ثانیه؛ زمان از شروع P) */
  const NORMAL = { p: 1.5, pd: 100, pr: 160, q: 0.6, r: 10, s: 2.2, qrs: 90, st: 0, sts: 'flat', t: 3, qt: 380, u: 0, ts: 1, tsym: false };
  /** تابع ولتاژ یک ضربان؛ waves: [[دامنه، کسر زمان QRS، کسر پهنا]] برای QRS دلخواه */
  function beatFn(o) {
    const B = Object.assign({}, NORMAL, o);
    const d = B.qrs, J = B.pr + d, L = B.qt - d;
    const tc = J + L * (B.tpos || 0.62), tsd = L * 0.14 * B.ts;
    const waves = B.waves || [[-B.q, 0.1, 0.06], [B.r, 0.38, 0.11], [-B.s, 0.68, 0.1]].concat(B.r2 ? [[B.r2, 0.88, 0.08]] : []);
    return x => {
      let v = 0;
      if (B.p) v += B.pbif ? B.p * (gauss(x, B.pd * 0.3, B.pd * 0.13) + gauss(x, B.pd * 0.72, B.pd * 0.13)) : B.p * gauss(x, B.pd * (B.p2 ? 0.38 : 0.5), B.pd / (B.p2 ? 7 : 5.5));
      if (B.p2) v += B.p2 * gauss(x, B.pd * 0.78, B.pd / 7);
      waves.forEach((w, i) => {
        const c = B.pr + d * w[1], s = d * w[2];
        v += w[0] * (B.delta && i === (B.waves ? B.delta - 1 : 1) ? agauss(x, c, d * 0.32, s) : gauss(x, c, s));
      });
      if (B.st) {
        const on = smooth(J - 10, J + 2, x);
        if (B.sts === 'flat') v += B.st * on * (1 - smooth(J + L * 0.3, J + L * 0.78, x));
        else if (B.sts === 'up') v += B.st * on * (1 - smooth(J, J + L * 0.45, x));
        else if (B.sts === 'down') v += B.st * smooth(J - 10, J + L * 0.3, x) * (1 - smooth(J + L * 0.6, J + L * 0.98, x)) + B.st * 0.5 * on * (1 - smooth(J, J + L * 0.3, x));
        else if (B.sts === 'scoop') { const u = Math.min(1, Math.max(0, (x - J) / (L * 0.75))); v += B.st * Math.sin(Math.PI * u) * (x > J ? 1 : 0) + B.st * 0.35 * on * (1 - smooth(J, J + 20, x)); }
        else if (B.sts === 'cove') v += B.st * on * (1 - smooth(J + 10, J + L * 0.7, x));
        else if (B.sts === 'dome') v += B.st * on * (1 - smooth(J + L * 0.55, J + L * 1.0, x));
      }
      if (B.j) v += B.j * agauss(x, J + 8, 9, 22);
      if (B.t) v += B.t * (B.tsym ? gauss(x, tc, tsd) : agauss(x, tc, tsd * 1.35, tsd * 0.8));
      if (B.tbi) v += B.tbi * gauss(x, tc + tsd * 1.6, tsd * 0.8);
      if (B.u) v += B.u * gauss(x, B.pr + B.qt + 80, 30);
      return v;
    };
  }
  /** ضربان‌های منظم با ضربان داده‌شده */
  const regular = (rate, spec, from, to, first) => { const out = [], rr = 60000 / rate; for (let x = first || 40; x < to; x += rr) out.push(Object.assign({ at: x }, spec)); return out; };
  /** خط پایه‌های ویژه (میلی‌متر بر حسب میلی‌ثانیه) */
  const BASE = {
    af: x => 0.32 * Math.sin(x / 17 + 1) + 0.22 * Math.sin(x / 11.3) + 0.18 * Math.sin(x / 7.9 + 2) + 0.12 * Math.sin(x / 5.3 + 0.5),
    flutter: x => { const ph = (x % 200) / 200; return ph < 0.78 ? 1.0 - 3.2 * (ph / 0.78) : -2.2 + 3.2 * ((ph - 0.78) / 0.22); },
    vf: x => 4.2 * Math.sin(x / 31) * (0.6 + 0.4 * Math.sin(x / 260)) + 2.3 * Math.sin(x / 19 + 1) + 1.4 * Math.sin(x / 13 + 2),
    tdp: x => (1 + 8.5 * Math.abs(Math.sin(x / 400))) * Math.sin(x / 34),
    sine: x => 6.5 * Math.sin(x / 105),
    flat: x => 0.15 * Math.sin(x / 400),
    tremor: x => { let s = Math.floor(x / 9) * 9301 + 49297; s = (s % 233280) / 233280; return 0.9 * (s - 0.5) + 0.25 * Math.sin(x / 6); },
    wander: x => 4 * Math.sin(x / 520),
    hum: x => 0.5 * Math.sin(x / 3.2)
  };
  /**
   * نوار ریتم: {x, y, w, h, beats:[{at, ...spec}], base, spikes:[ms], mid: ارتفاع خط پایه از بالا (mm), z: بزرگنمایی، stroke}
   * برمی‌گرداند {svg, X(ms), Y(mm)} تا بتوان روی نوار برچسب گذاشت.
   */
  function strip(o, pid) {
    const x0 = o.x || 0, y0 = o.y || 0, w = o.w || 360, h = o.h || 80, z = o.z || 1, mm = MM * z, pxms = PXMS * z;
    const base = y0 + (o.mid != null ? o.mid * mm : h * 0.62);
    const fns = (o.beats || []).map(b => ({ at: b.at, fn: beatFn(b), end: (b.pr || NORMAL.pr) + (b.qt || NORMAL.qt) + 260 }));
    const total = w / pxms;
    let d = '';
    for (let ms = 0; ms <= total; ms += 3) {
      let v = o.base ? BASE[o.base](ms) : 0;
      fns.forEach(b => { const r = ms - b.at; if (r > -40 && r < b.end) v += b.fn(r); });
      v = Math.max(Math.min(v, (base - y0) / mm - 0.5), -(y0 + h - base) / mm + 0.5);
      d += (ms ? 'L' : 'M') + (x0 + ms * pxms).toFixed(1) + ' ' + (base - v * mm).toFixed(1);
    }
    const spikes = (o.spikes || []).map(ms => `<path d="M${(x0 + ms * pxms).toFixed(1)} ${base} V${base - 14 * mm > y0 ? base - 14 * mm : y0 + 2}" stroke="${o.spikeColor || BLUE}" stroke-width="1.3"/>`).join('');
    const bg = o.nopaper ? '' : paper(pid, x0, y0, w, h);
    return {
      svg: `${bg}<path d="${d}" fill="none" stroke="${o.stroke || '#1d1d1d'}" stroke-width="${o.sw || 1.5}" stroke-linejoin="round" stroke-linecap="round"/>${spikes}`,
      X: ms => +(x0 + ms * pxms).toFixed(1), Y: v => +(base - v * mm).toFixed(1), base
    };
  }
  /** شکل تک‌نواری با عنوان و توضیح فارسی زیر آن.
   * عنوان (art-ttl)، یادداشت‌ها (art-nt) و پانویس (art-ft) گروه جدا دارند تا درون سؤال پنهان شوند و پاسخ را لو ندهند. */
  function rhythmFig(title, fa, o, notes, label) {
    const P = paperDefs(), mk = 'rk' + (++UID);
    const h = o.h || 96;
    const top = o.top || 24;
    const s = strip(Object.assign({ x: 0, y: top, w: 360, h }, o), P.id);
    const body = `<g class="art-ttl">${t(8, 16, title, { anchor: 'start', size: 12, fill: o.titleFill || RED, w: 900 })}${f(352, 16, fa, { anchor: 'end', size: 10.5, fill: INK, w: 700 })}</g>${s.svg}${notes ? `<g class="art-nt">${notes(s, mk)}</g>` : ''}`;
    return svg(360, h + top + (o.foot || 26), body, label || fa, P.defs + marker(mk, o.mark || RED));
  }
  const foot = (y, s, c) => `<g class="art-ft">${f(180, y, s, { size: 10.5, fill: c || MUTED, maxw: 340 })}</g>`;

  /* ---------- ۱۲ لید ---------- */
  /** مورفولوژی تقریبی هر لید در قلب سالم */
  const LEADS = {
    I: { p: 1, r: 6, s: 1, q: 0.4, t: 2 },
    II: { p: 1.5, r: 9, s: 1.5, q: 0.4, t: 2.6 },
    III: { p: 0.7, r: 4, s: 2, q: 0.3, t: 1 },
    aVR: { p: -1, r: 1, s: 6, q: 0, t: -2 },
    aVL: { p: 0.5, r: 3, s: 2.5, q: 0.3, t: 0.8 },
    aVF: { p: 1.2, r: 7, s: 1.6, q: 0.3, t: 1.9 },
    V1: { p: 0.7, p2: -0.6, r: 1.5, s: 9, q: 0, t: 0.6 },
    V2: { p: 1, r: 3, s: 12, q: 0, t: 4 },
    V3: { p: 1, r: 6, s: 8, q: 0, t: 4 },
    V4: { p: 1, r: 11, s: 5, q: 0.3, t: 3.5 },
    V5: { p: 1, r: 12, s: 2.5, q: 0.8, t: 3 },
    V6: { p: 1, r: 10, s: 1, q: 0.8, t: 2.5 }
  };
  const ORDER12 = [['I', 'aVR', 'V1', 'V4'], ['II', 'aVL', 'V2', 'V5'], ['III', 'aVF', 'V3', 'V6']];
  /**
   * نمای ۱۲ لیدی فشرده: هر خانه یک ضربان. mod(lead) ← مقادیر تغییر یافته آن لید؛ color(lead) ← رنگ قاب برای تأکید
   */
  function twelve(title, fa, mod, color, footer, opts) {
    const P = paperDefs(), o = opts || {};
    const cw = 88, ch = o.ch || 62, x0 = 4, y0 = 26;
    let body = `<g class="art-ttl">${t(8, 16, title, { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, fa, { anchor: 'end', size: 10.5, fill: INK, w: 700 })}</g>`;
    ORDER12.forEach((row, ri) => row.forEach((ld, ci) => {
      const x = x0 + ci * (cw + 0), y = y0 + ri * (ch + 4);
      const spec = Object.assign({ at: 70 }, LEADS[ld], mod ? mod(ld) || {} : {});
      const s = strip({ x, y, w: cw, h: ch, beats: [spec], mid: o.mid != null ? o.mid : 9.5 }, P.id);
      const c = color ? color(ld) : null;
      body += s.svg + (c ? `<rect x="${x + 0.8}" y="${y + 0.8}" width="${cw - 1.6}" height="${ch - 1.6}" fill="none" stroke="${c}" stroke-width="2.4" rx="3"/>` : '') +
        t(x + 5, y + 11, ld, { anchor: 'start', size: 10, fill: c || INK, w: 900 });
    }));
    const H = y0 + 3 * (ch + 4);
    return svg(360, H + (footer ? 22 : 4), body + (footer ? foot(H + 14, footer) : ''), fa, P.defs);
  }

  /* ---------- قلب و بدن ---------- */
  const HEART = 'M180 214 C120 184 70 148 66 98 C62 58 92 34 124 38 C150 41 168 58 180 78 C192 58 210 41 236 38 C268 34 298 58 294 98 C290 148 240 184 180 214Z';

  const A = {};

  /* ================= دنیای lx: زبان قلب و نوار ================= */
  /* آناتومی یک واژه: tachy + cardia و electr + cardi + gram */
  A['word-parts'] = () => {
    const part = (x, w, y, s, c, bg) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="9" fill="${bg}"/>${t(x + w / 2, y + 23, s, { size: 16, fill: c, w: 900 })}`;
    const br = (x1, x2, y, en, fa, c) => `<path d="M${x1} ${y} v6 h${x2 - x1} v-6" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, y + 20, en, { size: 10, fill: c, w: 900 })}${f((x1 + x2) / 2, y + 33, fa, { size: 9.5, fill: c })}`;
    return svg(360, 220, `${f(180, 18, 'یک واژه = پیشوند + ریشه + پسوند؛ معنی را از پسوند شروع کن', { size: 11, fill: INK, w: 800 })}
      ${part(30, 80, 32, 'tachy', '#1272a3', '#ddf1fb')}${part(116, 90, 32, 'cardia', '#3f8a05', '#e7f9d8')}
      <rect x="226" y="32" width="110" height="34" rx="9" fill="#fff4f5"/>${f(281, 54, 'حالت قلبِ تند', { size: 11, fill: RED, w: 800 })}
      ${br(30, 110, 70, 'prefix', 'پیشوند: تند', '#1272a3')}${br(116, 206, 70, 'suffix', 'پسوند: حالت قلب', '#3f8a05')}
      ${part(20, 82, 126, 'electr/o', '#7a3fd1', '#efe6fb')}${part(108, 78, 126, 'cardi/o', RED, '#fde6e7')}${part(192, 64, 126, 'gram', '#3f8a05', '#e7f9d8')}
      ${br(20, 102, 164, 'root', 'برق', '#7a3fd1')}${br(108, 186, 164, 'root', 'قلب', RED)}${br(192, 256, 164, 'suffix', 'ثبت، نگاره', '#3f8a05')}
      <rect x="264" y="126" width="84" height="34" rx="9" fill="#fff4f5"/>${f(306, 141, 'نگاره برق', { size: 10, fill: RED, w: 800 })}${f(306, 154, 'قلب = نوار قلب', { size: 10, fill: RED, w: 800 })}`, 'آناتومی یک واژه پزشکی');
  };

  /* کاغذ نوار و کالیبراسیون */
  A['ecg-paper'] = () => {
    /* کاغذ از مضرب ۲۰ پیکسل شروع می‌شود تا خانه‌های نشان‌داده‌شده دقیقاً روی خطوط شبکه بنشینند */
    const P = paperDefs(), a = 'a' + (++UID);
    const x0 = 40, y0 = 60, W = 280, H = 120, base = y0 + 100;
    const sb = [x0 + 64, y0 + 24], lb = [x0 + 180, y0 + 40];
    const cal = `<path d="M${x0} ${base} h20 v-40 h20 v40 h20" fill="none" stroke="#1d1d1d" stroke-width="2"/>`;
    return svg(360, 232, `${paper(P.id, x0, y0, W, H)}${cal}
      <rect x="${sb[0]}" y="${sb[1]}" width="${MM}" height="${MM}" fill="${BLUE}" fill-opacity=".25" stroke="${BLUE}" stroke-width="1.4"/>
      <rect x="${lb[0]}" y="${lb[1]}" width="${MM * 5}" height="${MM * 5}" fill="${RED}" fill-opacity=".12" stroke="${RED}" stroke-width="2"/>
      ${t(100, 16, 'small box = 1 mm', { size: 11.5, fill: BLUE, w: 800 })}${t(100, 31, '40 ms × 0.1 mV', { size: 10.5, fill: MUTED, w: 700 })}${f(100, 45, 'خانه کوچک', { size: 10.5, fill: BLUE })}
      ${arrow(a, 104, 50, sb[0] + 2.5, sb[1] - 3, BLUE)}
      ${t(268, 16, 'large box = 5 mm', { size: 11.5, fill: RED, w: 800 })}${t(268, 31, '200 ms × 0.5 mV', { size: 10.5, fill: MUTED, w: 700 })}${f(268, 45, 'خانه بزرگ', { size: 10.5, fill: RED })}
      ${arrow(a, 262, 50, lb[0] + 14, lb[1] - 3, RED)}
      ${t(x0 + 30, base + 13 + 2, '10 mm = 1 mV', { size: 10, fill: INK, w: 800 })}
      ${t(180, 200, '25 mm/s  →  5 large boxes = 1 s', { size: 11.5, fill: INK, w: 800 })}
      ${f(180, 220, 'محور افقی زمان است و محور عمودی ولتاژ؛ علامت مستطیلی همان کالیبراسیون است', { size: 10, fill: MUTED, maxw: 340 })}`, 'کاغذ نوار قلب و کالیبراسیون', P.defs + marker(a));
  };
  /* موج‌ها و فواصل یک ضربان */
  A['ecg-wave-parts'] = () => {
    const P = paperDefs(3.2);
    const s = strip({ x: 0, y: 28, w: 360, h: 176, z: 3.2, beats: [{ at: 120, u: 0.7, r: 10 }], mid: 11 }, P.id);
    const X = s.X, Y = s.Y;
    return svg(360, 312, `${t(8, 16, 'One beat', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'اجزای یک ضربان', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}${s.svg}
      ${lab(X(170), Y(3.6), 'P', 'دهلیز', { size: 11, fill: BLUE })}${t(X(314) - 10, Y(10), 'R', { size: 12, fill: RED, w: 900 })}${t(X(289) - 8, Y(-1.6), 'Q', { size: 11, fill: RED, w: 900 })}${t(X(341) + 9, Y(-2.6), 'S', { size: 11, fill: RED, w: 900 })}
      ${lab(X(600), Y(5.6), 'T', 'بطن', { size: 11, fill: GREEN })}${t(X(780), Y(1.6), 'U', { size: 11, fill: VIOLET, w: 900 })}
      <circle cx="${X(370)}" cy="${Y(0)}" r="3.5" fill="${ORANGE}"/>${t(X(370) + 6, Y(0) + 13, 'J', { size: 11, fill: ORANGE, anchor: 'start', w: 900 })}
      ${span(X(120), X(280), 214, 'PR interval', '۱۲۰ تا ۲۰۰ ms', BLUE)}${span(X(370), X(470), 214, 'ST segment', 'روی خط پایه', ORANGE)}
      ${span(X(280), X(370), 248, 'QRS', '≤ ۱۱۰ ms', RED)}${span(X(280), X(660), 282, 'QT interval', 'وابسته به ضربان (QTc)', GREEN)}`, 'موج‌ها و فواصل یک ضربان', P.defs);
  };

  /* سیستم هدایتی قلب */
  A['conduction-system'] = () => {
    /* برچسب‌ها به‌جای چسبیدن به شکل، با شماره روی قلب و فهرست زیر آن می‌آیند؛ هیچ نوشته‌ای روی خطوط قلب نمی‌افتد */
    const num = (n, x, y, c) => `<circle cx="${x}" cy="${y}" r="9" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x, y + 4, n, { size: 10.5, fill: c, w: 900, halo: false })}`;
    const items = [['1', 'SA node', 'گره سینوسی؛ ۶۰ تا ۱۰۰ در دقیقه', RED], ['2', 'AV node', 'گره دهلیزی‌بطنی؛ ۴۰ تا ۶۰', ORANGE], ['3', 'bundle of His', 'دسته هیس', VIOLET],
      ['4', 'right bundle branch', 'شاخه راست', BLUE], ['5', 'left anterior fascicle', 'فاسیکل قدامی چپ', GREEN], ['6', 'left posterior fascicle', 'فاسیکل خلفی چپ', GREEN], ['7', 'Purkinje fibers', 'الیاف پورکنژ؛ ۲۰ تا ۴۰', '#a8345b']];
    const legend = items.map((it, i) => { const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4, x = col ? 186 : 8, y = 236 + row * 34;
      return `${num(it[0], x + 10, y + 2, it[3])}${t(x + 26, y + 1, it[1], { anchor: 'start', size: 11, fill: it[3], w: 800 })}${f(x + 26, y + 16, it[2], { anchor: 'start', size: 10 })}`; }).join('');
    return svg(360, 372, `<g transform="translate(0 -14)"><path d="${HEART}" fill="#fde6e7" stroke="#e7a3ab" stroke-width="2"/>
      <path d="M180 82 C170 120 168 150 178 196" stroke="#f2bcc3" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M132 64 C146 84 156 100 168 118" stroke="${RED}" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
      <path d="M168 118 L178 134" stroke="${VIOLET}" stroke-width="5" stroke-linecap="round"/>
      <path d="M178 134 C170 160 150 182 128 186" stroke="${BLUE}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M178 134 C196 146 214 150 240 142" stroke="${GREEN}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M178 134 C192 162 206 182 222 194" stroke="${GREEN}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M128 186 q-12 -2 -16 -16 M128 186 q-4 10 4 18 M240 142 q12 4 16 18 M222 194 q10 2 18 -8 M222 194 q-2 10 6 14" stroke="#c46b8f" stroke-width="1.6" fill="none"/>
      <circle cx="132" cy="64" r="7" fill="${RED}"/><circle cx="168" cy="118" r="6" fill="${ORANGE}"/>
      ${num('1', 112, 50, RED)}${num('2', 148, 122, ORANGE)}${num('3', 196, 118, VIOLET)}${num('4', 140, 166, BLUE)}${num('5', 230, 128, GREEN)}${num('6', 210, 196, GREEN)}${num('7', 112, 196, '#a8345b')}</g>
      <line x1="8" y1="222" x2="352" y2="222" stroke="#eef0f2" stroke-width="1.5"/>${legend}`, 'سیستم هدایتی قلب');
  };
  /* محل الکترودها: اندام‌ها و سینه */
  A['lead-placement'] = () => {
    const dot = (x, y, c, s) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" stroke="#fff" stroke-width="2"/>${t(x, y + 3.5, s, { size: 8.5, fill: '#fff', w: 900 })}`;
    const torso = 'M180 54 c18 0 28 12 28 30 c0 14 -6 24 -14 30 v8 c30 4 58 12 70 26 c10 12 12 30 12 52 v70 h-192 v-70 c0 -22 2 -40 12 -52 c12 -14 40 -22 70 -26 v-8 c-8 -6 -14 -16 -14 -30 c0 -18 10 -30 28 -30z';
    const ribs = [134, 152, 170, 188].map(y => `<path d="M118 ${y} q62 14 124 0" stroke="#cfd8e2" stroke-width="1.2" fill="none"/>`).join('');
    const side = (x, y, en, fa, c) => t(x, y, en, { size: 11, fill: c, w: 800 }) + f(x, y + 14, fa, { size: 10, fill: c });
    return svg(360, 312, `<path d="${torso}" fill="#eef2f6" stroke="#aebccb" stroke-width="1.5"/>${ribs}<path d="M180 124 V214" stroke="#cfd8e2" stroke-width="3"/>
      ${dot(166, 146, VIOLET, 'V1')}${dot(194, 146, VIOLET, 'V2')}${dot(212, 162, VIOLET, 'V3')}${dot(230, 178, VIOLET, 'V4')}${dot(252, 178, VIOLET, 'V5')}${dot(274, 178, VIOLET, 'V6')}
      ${dot(104, 146, '#e53935', 'RA')}${dot(256, 146, '#f2b705', 'LA')}${dot(132, 276, '#222', 'RL')}${dot(228, 276, '#2e9e48', 'LL')}
      ${side(52, 104, 'right arm', 'قرمز: دست راست', '#c62828')}${side(308, 104, 'left arm', 'زرد: دست چپ', '#9a7600')}
      ${side(76, 280, 'ground', 'مشکی: پای راست', INK)}${side(286, 280, 'left leg', 'سبز: پای چپ', '#2e7d32')}
      ${f(180, 16, 'V1 و V2: فضای چهارم بین‌دنده‌ای، دو طرف جناغ · V3: بین V2 و V4', { size: 10, fill: INK, w: 700, maxw: 350 })}
      ${f(180, 32, 'V4: فضای پنجم، خط میدکلاویکولار · V5 و V6: هم‌سطح V4 روی خطوط زیربغلی', { size: 10, fill: INK, w: 700, maxw: 350 })}`, 'محل الکترودهای نوار قلب');
  };
  /* لیدهای اندامی: مثلث آینتهوون و سه لید تقویت‌شده */
  A['limb-leads'] = () => {
    const a = 'a' + (++UID);
    const RA = [70, 50], LA = [290, 50], LL = [180, 220];
    return svg(360, 252, `<path d="M${RA} L${LA} L${LL}Z" fill="#f6f7fb" stroke="#cfd8e2" stroke-width="2"/>
      ${arrow(a, 82, 44, 278, 44, BLUE, 2.4)}${t(180, 30, 'lead I  (0°)', { size: 11.5, fill: BLUE, w: 800 })}
      ${arrow(a, 76, 62, 172, 208, RED, 2.4)}${t(70, 150, 'lead II', { size: 11.5, fill: RED, w: 800 })}${t(70, 165, '+60°', { size: 10.5, fill: MUTED })}
      ${arrow(a, 284, 62, 188, 208, GREEN, 2.4)}${t(290, 150, 'lead III', { size: 11.5, fill: GREEN, w: 800 })}${t(290, 165, '+120°', { size: 10.5, fill: MUTED })}
      <circle cx="180" cy="110" r="5" fill="${INK}"/>${arrow(a, 176, 106, 92, 66, VIOLET, 1.8, true)}${arrow(a, 184, 106, 268, 66, VIOLET, 1.8, true)}${arrow(a, 180, 115, 180, 196, VIOLET, 1.8, true)}
      ${t(150, 70, 'aVR −150°', { size: 10.5, fill: VIOLET, w: 800 })}${t(210, 70, 'aVL −30°', { size: 10.5, fill: VIOLET, w: 800 })}
      ${t(190, 160, 'aVF', { size: 10.5, fill: VIOLET, w: 800, anchor: 'start' })}${t(190, 173, '+90°', { size: 9.5, fill: MUTED, anchor: 'start' })}
      ${f(180, 244, 'سه لید دوقطبی و سه لید تقویت‌شده در صفحه فرونتال', { size: 10.5, fill: INK, w: 700 })}`, 'لیدهای اندامی', marker(a, LINE));
  };
  /* لیدهای سینه‌ای در صفحه افقی */
  A['precordial-leads'] = () => {
    const pts = [['V1', 150, 66], ['V2', 186, 60], ['V3', 222, 66], ['V4', 254, 84], ['V5', 278, 112], ['V6', 290, 146]];
    const zone = (x, y, en, fa, c, anchor) => t(x, y, en, { size: 11, fill: c, w: 800, anchor }) + f(x, y + 14, fa, { size: 10.5, fill: c, anchor });
    return svg(360, 258, `<ellipse cx="180" cy="134" rx="150" ry="96" fill="#f3f5f8" stroke="#cfd8e2" stroke-width="2"/>
      <ellipse cx="180" cy="204" rx="22" ry="16" fill="#e1e7ee"/>${t(180, 208, 'spine', { size: 9, fill: MUTED, halo: false })}
      <ellipse cx="150" cy="122" rx="34" ry="28" fill="#fbd5da"/><ellipse cx="206" cy="132" rx="44" ry="36" fill="#f4a9b3"/>
      ${t(146, 126, 'RV', { size: 11, fill: '#8d2b3a', halo: false })}${t(214, 136, 'LV', { size: 12, fill: '#7a1d2b', halo: false })}
      ${pts.map(p => `<line x1="${p[1]}" y1="${p[2] + 4}" x2="${180 + (p[1] - 180) * 0.35}" y2="${134 + (p[2] + 4 - 134) * 0.35}" stroke="${VIOLET}" stroke-width="1.2" stroke-dasharray="3 3"/><circle cx="${p[1]}" cy="${p[2] + 4}" r="10" fill="${VIOLET}" stroke="#fff" stroke-width="1.5"/>${t(p[1], p[2] + 7.5, p[0], { size: 8.5, fill: '#fff', w: 900 })}`).join('')}
      ${zone(62, 70, 'V1–V2', 'سپتوم', '#a07c00')}${zone(318, 36, 'V3–V4', 'قدامی', ORANGE)}${zone(326, 196, 'V5–V6', 'لترال', BLUE)}
      ${f(180, 250, 'برش افقی قفسه سینه: لیدهای سینه‌ای قلب را در صفحه افقی می‌بینند', { size: 10.5, fill: INK, w: 700, maxw: 340 })}`, 'لیدهای سینه‌ای');
  };
  /* قلمرو لیدها و شریان‌ها (چیدمان چاپ استاندارد) */
  A['lead-territories'] = () => {
    const C = { I: BLUE, aVL: BLUE, V5: BLUE, V6: BLUE, II: GREEN, III: GREEN, aVF: GREEN, V1: GOLD, V2: GOLD, V3: ORANGE, V4: ORANGE, aVR: '#9aa5ab' };
    const cell = (ld, x, y) => `<rect x="${x}" y="${y}" width="80" height="40" rx="8" fill="${C[ld]}" opacity=".16"/><rect x="${x}" y="${y}" width="80" height="40" rx="8" fill="none" stroke="${C[ld]}" stroke-width="2"/>${t(x + 40, y + 26, ld, { size: 14, fill: C[ld], w: 900 })}`;
    let g = '';
    ORDER12.forEach((row, ri) => row.forEach((ld, ci) => { g += cell(ld, 14 + ci * 86, 14 + ri * 48); }));
    const leg = (y, c, en, fa) => `<rect x="14" y="${y}" width="12" height="12" rx="3" fill="${c}"/>${t(32, y + 10, en, { anchor: 'start', size: 10, fill: c, w: 800 })}${f(350, y + 10, fa, { anchor: 'end', size: 9.5, fill: INK })}`;
    return svg(360, 256, g + leg(166, BLUE, 'lateral: I, aVL, V5, V6', 'لترال · LCx') + leg(184, GREEN, 'inferior: II, III, aVF', 'تحتانی · RCA یا LCx') +
      leg(202, GOLD, 'septal: V1, V2', 'سپتال · LAD') + leg(220, ORANGE, 'anterior: V3, V4', 'قدامی · LAD') + leg(238, '#9aa5ab', 'aVR: base/global', 'آینه کل قلب؛ LMCA و ایسکمی منتشر'), 'قلمرو لیدها');
  };

  /* ================= دنیای ph: فیزیولوژی و موج‌ها ================= */
  /* پتانسیل عمل سلول میوکارد */
  A['action-potential'] = () => {
    const d = 'M30 170 H70 L76 52 L90 64 C130 64 170 70 200 92 C224 112 236 150 262 170 H330';
    const ph = (x, y, en, ion, fa, c, anchor) => t(x, y, en, { size: 11, fill: c, w: 800, anchor }) + (ion ? t(x, y + 13, ion, { size: 10, fill: MUTED, w: 700, anchor }) : '') + f(x, y + (ion ? 27 : 14), fa, { size: 10, fill: c, anchor });
    return svg(360, 236, `<line x1="30" y1="170" x2="330" y2="170" stroke="#cfd8e2" stroke-dasharray="4 3"/><path d="${d}" fill="none" stroke="${RED}" stroke-width="3"/>
      ${ph(88, 108, 'phase 0', 'Na⁺ in', 'دپلاریزاسیون', RED, 'start')}${t(98, 44, 'phase 1', { size: 11, fill: INK, w: 800 })}
      ${ph(168, 32, 'phase 2', 'Ca²⁺ in', 'پلاتو', ORANGE)}${ph(276, 98, 'phase 3', 'K⁺ out', 'رپلاریزاسیون', GREEN)}${ph(296, 188, 'phase 4', '', 'استراحت', INK)}
      ${t(30, 188, '−90 mV', { anchor: 'start', size: 10, fill: MUTED })}
      ${f(180, 226, 'QRS هم‌زمان با فاز ۰، قطعه ST با فاز ۲ و موج T با فاز ۳ است', { size: 10.5, fill: INK, w: 700, maxw: 340 })}`, 'پتانسیل عمل');
  };
  /* هگزاکزیال و محور */
  A['axis-hexaxial'] = () => {
    const cx = 180, cy = 112, r = 74;
    const pt = (deg, rr) => [cx + rr * Math.cos(deg * Math.PI / 180), cy + rr * Math.sin(deg * Math.PI / 180)];
    const sector = (a1, a2, c) => { const p1 = pt(a1, r), p2 = pt(a2, r); return `<path d="M${cx} ${cy} L${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${r} ${r} 0 0 1 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}Z" fill="${c}" opacity=".22"/>`; };
    const L = [['I', 0], ['II', 60], ['aVF', 90], ['III', 120], ['aVL', -30], ['aVR', -150]];
    const lines = L.map(([n, d]) => { const p = pt(d, r + 6), q = pt(d + 180, r); const tp = pt(d, r + 20); return `<line x1="${q[0].toFixed(1)}" y1="${q[1].toFixed(1)}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${LINE}" stroke-width="1.2"/>${t(tp[0].toFixed(1), (tp[1] + 4).toFixed(1), n + ' ' + (d > 0 ? '+' : '') + d + '°', { size: 9, fill: INK, w: 800 })}`; }).join('');
    return svg(360, 282, `${sector(-30, 90, GREEN)}${sector(-90, -30, BLUE)}${sector(90, 180, ORANGE)}${sector(180, 270, '#9aa5ab')}${lines}
      ${[[GREEN, 'نرمال'], [BLUE, 'انحراف چپ'], [ORANGE, 'انحراف راست'], ['#9aa5ab', 'محور شدید']].map((c, i) => `<rect x="${336 - i * 86}" y="222" width="12" height="12" rx="3" fill="${c[0]}" opacity=".6"/>${f(330 - i * 86, 232, c[1], { size: 10, fill: INK, w: 700, anchor: 'end' })}`).join('')}
      ${f(180, 256, 'روش سریع: I و II هر دو مثبت = نرمال · I مثبت و II منفی = چپ', { size: 10.5, fill: INK, w: 700, maxw: 344 })}${f(180, 273, 'I منفی و aVF مثبت = راست · هر دو منفی = محور شدید', { size: 10.5, fill: INK, w: 700, maxw: 344 })}`, 'سیستم شش‌محوری و محور قلب');
  };

  /* روش‌های محاسبه ریت */
  A['rate-methods'] = () => {
    const P = paperDefs();
    const s = strip({ x: 0, y: 28, w: 360, h: 80, beats: regular(75, {}, 0, 3600, 206), mid: 13 }, P.id);
    const xs = [400, 1200].map(s.X);
    const seq = ['300', '150', '100', '75', '60', '50'];
    return svg(360, 212, `${t(8, 16, 'Rate', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'محاسبه ضربان', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}${s.svg}
      ${seq.map((n, i) => t(xs[0] + (i + 1) * 20, 123, n, { size: 8.5, fill: i === 3 ? RED : MUTED, w: 800, halo: false })).join('')}
      <path d="M${xs[0]} 131 v5 H${xs[1]} v-5" stroke="${RED}" stroke-width="1.6" fill="none"/>
      ${t(xs[0], 152, '4 large boxes:  300 ÷ 4 = 75 bpm', { size: 11, fill: RED, w: 800, anchor: 'start' })}
      ${f(180, 176, 'ریتم منظم: ۳۰۰ تقسیم بر خانه‌های بزرگ، یا ۱۵۰۰ بر خانه‌های کوچک', { size: 10.5, fill: INK, w: 700, maxw: 344 })}
      ${f(180, 200, 'ریتم نامنظم: تعداد QRS در ۶ ثانیه (۳۰ خانه بزرگ) ضرب در ۱۰', { size: 10.5, fill: INK, w: 700, maxw: 344 })}`, 'روش‌های محاسبه ضربان', P.defs);
  };
  /* رویکرد قدم‌به‌قدم */
  A['ecg-approach'] = () => {
    const steps = [['1', 'calibration & quality', 'کیفیت و کالیبراسیون'], ['2', 'rate', 'ریت'], ['3', 'rhythm', 'ریتم'], ['4', 'axis', 'محور'], ['5', 'P wave & PR', 'موج P و PR'],
      ['6', 'QRS', 'پهنا و ولتاژ QRS'], ['7', 'ST segment', 'قطعه ST'], ['8', 'T & U waves', 'موج T و U'], ['9', 'QT / QTc', 'QTc']];
    return svg(360, 270, steps.map((s, i) => {
      const x = i % 3, y = Math.floor(i / 3), cx = 16 + x * 112, cy = 14 + y * 80;
      return `${pill(cx, cy, 104, 64, '#fff4f5', '#f3b3bb')}<circle cx="${cx + 16}" cy="${cy + 16}" r="11" fill="${RED}"/>${t(cx + 16, cy + 20.5, s[0], { size: 11, fill: '#fff', w: 900 })}${t(cx + 52, cy + 38, s[1], { size: 9.2, fill: INK, w: 800 })}${f(cx + 52, cy + 54, s[2], { size: 9.5, fill: RED })}`;
    }).join('') + f(180, 262, 'هر نوار را به همین ترتیب بخوان؛ حتی وقتی تشخیص را زود دیدی', { size: 10, fill: INK, w: 700 }), 'رویکرد قدم‌به‌قدم تفسیر نوار');
  };

  /* اندازه‌گیری QT و QTc */
  A['qt-measure'] = () => {
    const P = paperDefs();
    const s = strip({ x: 0, y: 28, w: 360, h: 90, beats: regular(75, { r: 10 }, 0, 3600, 60), mid: 14 }, P.id);
    const X = s.X;
    const br = (x1, x2, y, c) => `<path d="M${x1} ${y - 5} V${y} H${x2} V${y - 5}" stroke="${c}" stroke-width="1.6" fill="none"/>`;
    return svg(360, 250, `${t(8, 16, 'QT & QTc', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'اندازه‌گیری QT', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}${s.svg}
      ${br(X(220), X(600), 128, GREEN)}${t(X(600) + 6, 132, 'QT', { size: 11.5, fill: GREEN, w: 900, anchor: 'start' })}${f(X(600) + 30, 132, 'شروع QRS تا پایان T', { size: 10, fill: GREEN, anchor: 'start' })}
      ${br(X(220), X(1020), 150, BLUE)}${t(X(1020) + 6, 154, 'RR', { size: 11.5, fill: BLUE, w: 900, anchor: 'start' })}${f(X(1020) + 30, 154, 'به ثانیه، برای Bazett', { size: 10, fill: BLUE, anchor: 'start' })}
      ${t(180, 184, 'QTc = QT / √RR', { size: 13, fill: INK, w: 900 })}
      ${f(180, 206, 'طولانی: مرد ۴۵۰ و زن ۴۶۰ میلی‌ثانیه یا بیشتر؛ بیش از ۵۰۰ پرخطر', { size: 10.5, fill: RED, w: 700, maxw: 340 })}
      ${f(180, 226, 'پایان T را با روش مماس و در لید II یا V5 بخوان', { size: 10, fill: MUTED, maxw: 340 })}`, 'اندازه‌گیری QT', P.defs);
  };
  /* ================= دنیای ar: ریتم و آریتمی ================= */
  A['sinus-rhythm'] = () => rhythmFig('Normal sinus rhythm', 'ریتم سینوسی نرمال (۷۵ در دقیقه)', { beats: regular(75, {}, 0, 3600, 60), mid: 14 },
    () => foot(140, 'P مثبت در II قبل از هر QRS، PR ثابت، ریت ۶۰ تا ۱۰۰'));
  A['sinus-brady'] = () => rhythmFig('Sinus bradycardia', 'برادی‌کاردی سینوسی (۴۵ در دقیقه)', { beats: regular(45, {}, 0, 3600, 80), mid: 14 },
    () => foot(140, 'همه چیز سینوسی، فقط ریت کمتر از ۶۰'));
  A['sinus-tachy'] = () => rhythmFig('Sinus tachycardia', 'تاکی‌کاردی سینوسی (۱۲۵ در دقیقه)', { beats: regular(125, { qt: 320, pr: 140 }, 0, 3600, 40), mid: 14 },
    () => foot(140, 'P قبل از هر QRS؛ به دنبال علت بگرد: درد، تب، کم‌آبی، کم‌خونی، آمبولی'));
  A['sinus-arrhythmia'] = () => {
    const at = [60, 820, 1500, 2100, 2650, 3300];
    return rhythmFig('Sinus arrhythmia', 'آریتمی سینوسی', { beats: at.map(x => ({ at: x })), mid: 14 }, () => foot(140, 'فاصله‌ها با تنفس کوتاه و بلند می‌شود؛ شکل P ثابت است'));
  };
  A.pac = () => {
    const at = [40, 840, 1640, 2160, 3080];
    return rhythmFig('PAC', 'ضربان زودرس دهلیزی', { beats: at.map((x, i) => i === 3 ? { at: x, p: -0.9, pr: 140 } : { at: x }), mid: 14 },
      s => `<circle cx="${s.X(2210)}" cy="${s.Y(-2.5)}" r="12" fill="none" stroke="${BLUE}" stroke-width="2"/>${foot(140, 'ضربان زودتر از موعد با P متفاوت و QRS باریک؛ مکث جبرانی ناکامل')}`);
  };
  A.junctional = () => rhythmFig('Junctional rhythm', 'ریتم جانکشنال (۵۰ در دقیقه)', { beats: regular(50, { p: -0.8, pr: 230, pd: 70 }, 0, 3600, -110), mid: 14 },
    () => foot(140, 'QRS باریک؛ P دیده نمی‌شود یا معکوس و چسبیده به QRS است؛ ریت ۴۰ تا ۶۰'));
  A.mat = () => {
    const at = [40, 520, 1080, 1520, 2060, 2480, 3000, 3420];
    const ps = [{ p: 1.5 }, { p: -0.8 }, { p: 2.2, pbif: 1, p: 1.2 }, { p: 0.6 }, { p: 1.8 }, { p: -0.6 }, { p: 1 }, { p: 2 }];
    return rhythmFig('MAT', 'تاکی‌کاردی دهلیزی چندکانونی', { beats: at.map((x, i) => Object.assign({ at: x, qt: 330, pr: 120 + (i % 3) * 30 }, ps[i])), mid: 14 },
      () => foot(140, 'دست‌کم سه شکل P، فواصل متغیر، ریت بالای ۱۰۰؛ در بیماری شدید ریه'));
  };
  A.af = () => {
    const at = [60, 520, 1260, 1620, 2380, 2760, 3300];
    return rhythmFig('Atrial fibrillation', 'فیبریلاسیون دهلیزی', { base: 'af', beats: at.map(x => ({ at: x, p: 0, t: 2.4 })), mid: 14 },
      () => foot(140, 'بدون موج P؛ خط پایه لرزان؛ فاصله‌های R تا R کاملاً نامنظم'));
  };
  A.aflutter = () => {
    const at = [80, 480, 880, 1280, 1680, 2080, 2480, 2880, 3280].map(x => x + 145);
    return rhythmFig('Atrial flutter 2:1', 'فلاتر دهلیزی با هدایت ۲ به ۱', { base: 'flutter', beats: at.map(x => ({ at: x, p: 0, t: 0.8, qt: 320, pr: 0 })), mid: 14 },
      () => foot(140, 'امواج دندانه‌اره‌ای حدود ۳۰۰ در دقیقه در II، III و aVF؛ ریت بطنی حدود ۱۵۰'));
  };
  A.svt = () => rhythmFig('SVT (AVNRT)', 'تاکی‌کاردی فوق‌بطنی', { beats: regular(180, { p: 0, qt: 280, pr: 60, t: 2, s: 1 }, 0, 3600, 0), mid: 14 },
    () => foot(140, 'ریت حدود ۱۸۰، کاملاً منظم، QRS باریک، P پنهان در QRS'));
  A.pvc = () => {
    const at = [40, 840, 1440, 2440, 3240];
    return rhythmFig('PVC', 'ضربان زودرس بطنی', {
      beats: at.map((x, i) => i === 2 ? { at: x, p: 0, waves: [[13, 0.45, 0.25], [-3, 0.85, 0.12]], qrs: 150, st: -1.5, sts: 'down', t: -3.5, qt: 420 } : { at: x }), mid: 13
    }, s => `<circle cx="${s.X(1640)}" cy="${s.Y(4)}" r="18" fill="none" stroke="${RED}" stroke-width="2"/>${foot(140, 'QRS پهن و زودرس بدون P؛ ST و T خلاف جهت QRS؛ مکث جبرانی کامل')}`);
  };
  A.aivr = () => rhythmFig('AIVR', 'ریتم ایدیوونتریکولار تسریع‌شده (۷۵ در دقیقه)', { beats: regular(75, { p: 0, waves: [[9, 0.4, 0.22], [-2, 0.8, 0.12]], qrs: 160, t: -3, qt: 440, pr: 0 }, 0, 3600, 40), mid: 13 },
    () => foot(140, 'QRS پهن و منظم، ریت ۵۰ تا ۱۱۰؛ پس از ری‌پرفیوژن، معمولاً خوش‌خیم'));
  A.vt = () => rhythmFig('Monomorphic VT', 'تاکی‌کاردی بطنی تک‌شکلی', { beats: regular(170, { p: 0, waves: [[12, 0.35, 0.2], [-6, 0.75, 0.14]], qrs: 170, t: -4, qt: 330, pr: 0 }, 0, 3600, 0), mid: 13 },
    () => foot(140, 'QRS پهن، منظم و هم‌شکل با ریت بالای ۱۰۰؛ تاکی‌کاردی پهن را VT فرض کن'));
  A.torsades = () => rhythmFig('Torsades de pointes', 'تورساد دو پوینت', { base: 'tdp', mid: 15, h: 110 },
    () => foot(156, 'VT چندشکلی که دور خط پایه می‌پیچد؛ زمینه آن QT طولانی است'), null);
  A.vf = () => rhythmFig('Ventricular fibrillation', 'فیبریلاسیون بطنی', { base: 'vf', mid: 13 }, () => foot(140, 'فعالیت آشفته بدون QRS قابل شناسایی و بدون نبض: شوک فوری'));
  A.asystole = () => rhythmFig('Asystole', 'آسیستول', { base: 'flat', mid: 11 }, () => foot(140, 'خط تقریباً صاف؛ اتصال لیدها و گین را در دو لید بررسی کن؛ شوک‌پذیر نیست'));
  A['av-block-1'] = () => rhythmFig('1st-degree AV block', 'بلوک AV درجه یک', { beats: regular(70, { pr: 300 }, 0, 3600, 40), mid: 14 },
    s => `${span(s.X(897), s.X(1197), 134, 'PR = 300 ms', 'ثابت و بلندتر از ۲۰۰', BLUE)}`);
  A['av-block-mobitz1'] = () => {
    const prs = [180, 260, 320], beats = []; let x = 40;
    for (let c = 0; c < 2; c++) { prs.forEach(pr => { beats.push({ at: x, pr }); x += 800; }); beats.push({ at: x, pr: 180, r: 0, q: 0, s: 0, t: 0 }); x += 640; }
    return rhythmFig('Mobitz I (Wenckebach)', 'بلوک درجه دو موبیتز ۱', { beats, mid: 14 }, () => foot(140, 'PR کم‌کم بلندتر می‌شود تا یک P بدون QRS بماند؛ سپس چرخه از نو'));
  };
  A['av-block-mobitz2'] = () => {
    const beats = []; for (let i = 0; i < 5; i++) beats.push(Object.assign({ at: 40 + i * 760, pr: 180 }, i === 2 ? { r: 0, q: 0, s: 0, t: 0 } : {}));
    return rhythmFig('Mobitz II', 'بلوک درجه دو موبیتز ۲', { beats, mid: 14 },
      s => `<circle cx="${s.X(1610)}" cy="${s.Y(1)}" r="11" fill="none" stroke="${RED}" stroke-width="2"/>${foot(140, 'PR ثابت؛ ناگهان یک P هدایت نمی‌شود؛ خطر پیشرفت به بلوک کامل')}`);
  };
  A['av-block-2to1'] = () => {
    const beats = []; for (let i = 0; i < 8; i++) beats.push(Object.assign({ at: 30 + i * 440, pr: 200 }, i % 2 ? { r: 0, q: 0, s: 0, t: 0 } : {}));
    return rhythmFig('2:1 AV block', 'بلوک AV دو به یک', { beats, mid: 14 }, () => foot(140, 'یکی در میان P هدایت نمی‌شود؛ از روی همین نوار نمی‌توان گفت موبیتز ۱ است یا ۲'));
  };
  A['av-block-3'] = () => {
    const ps = [], vs = [];
    for (let x = 20; x < 3600; x += 680) ps.push({ at: x, r: 0, q: 0, s: 0, t: 0 });
    for (let x = 300; x < 3600; x += 1450) vs.push({ at: x, p: 0, waves: [[10, 0.4, 0.2], [-2, 0.8, 0.12]], qrs: 150, t: -3, qt: 460, pr: 0 });
    return rhythmFig('3rd-degree AV block', 'بلوک کامل قلبی', { beats: ps.concat(vs), mid: 14 },
      () => foot(140, 'Pها منظم و QRSها منظم اما بی‌ارتباط با هم (جدایی AV)؛ ریتم فرار پهن و کند'));
  };

  /* ================= دنیای mi: ایسکمی و انفارکتوس ================= */
  /** مقایسه چند ضربان کنار هم روی یک کاغذ */
  function compare(title, fa, items, footer, opts) {
    const o = opts || {}, n = items.length, z = o.z || (n <= 2 ? 1.6 : n === 3 ? 1.35 : n === 4 ? 1.15 : 1);
    const P = paperDefs(z), cw = 360 / n, h = Math.round((o.h || 104) * z);
    let body = `<g class="art-ttl">${t(8, 16, title, { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, fa, { anchor: 'end', size: 10.5, fill: INK, w: 700 })}</g>`;
    items.forEach((it, i) => {
      const s = strip({ x: i * cw, y: 26, w: cw, h, z, beats: [Object.assign({ at: o.at || 30 }, LEADS[it.lead || 'V3'] || {}, it.spec)], mid: o.mid || 15 }, P.id);
      body += s.svg + `<line x1="${i * cw}" y1="26" x2="${i * cw}" y2="${26 + h}" stroke="#fff" stroke-width="2"/>` + lab(i * cw + cw / 2, 26 + h + 15, it.en, it.fa, { size: 10.5, fill: it.c || INK, maxw: cw - 8 });
    });
    const extra = Math.max(0, ...items.map(it => (it.fa ? faLines(it.fa, 9.3, cw - 8) : 1) - 1)) * 13.5;
    return svg(360, 26 + h + 32 + extra + (footer ? 18 : 0), body + (footer ? foot(26 + h + 48 + extra, footer) : ''), fa, P.defs);
  }
  A['st-elevation'] = () => compare('ST elevation', 'انواع بالا رفتن ST', [
    { en: 'concave', fa: 'مقعر (اغلب خوش‌خیم)', spec: { st: 2, t: 4.5 }, c: GREEN },
    { en: 'straight', fa: 'صاف و افقی', spec: { st: 3, t: 4.5, ts: 1.2 }, c: ORANGE },
    { en: 'convex', fa: 'محدب (تومب‌استون)', spec: { st: 5, sts: 'dome', t: 3, ts: 1.4, r: 6 }, c: RED }
  ], 'میزان را در نقطه J نسبت به قطعه TP بسنج');
  A['st-depression'] = () => compare('ST depression', 'انواع پایین رفتن ST', [
    { en: 'upsloping', fa: 'رو به بالا', spec: { st: -2, sts: 'up' }, c: GREEN },
    { en: 'horizontal', fa: 'افقی', spec: { st: -2, t: 1.5 }, c: RED },
    { en: 'downsloping', fa: 'رو به پایین', spec: { st: -2, sts: 'down', t: -1.5 }, c: RED }
  ], 'افقی و رو به پایین ≥ ۰٫۵ mm در دو لید مجاور به نفع ایسکمی است', { mid: 17 });
  A['t-inversion'] = () => compare('T waves', 'موج T غیرطبیعی', [
    { en: 'normal', fa: 'طبیعی و نامتقارن', spec: {}, c: GREEN },
    { en: 'ischemic', fa: 'وارونه و متقارن', spec: { t: -4, tsym: true }, c: RED },
    { en: 'biphasic', fa: 'دوفازی', spec: { t: 2.5, tbi: -3, tpos: 0.5 }, c: ORANGE },
    { en: 'flat', fa: 'صاف', spec: { t: 0.3 }, c: '#5f6b72' }
  ], null, { mid: 15 });
  A['hyperacute-t'] = () => compare('Hyperacute T', 'T هایپراکیوت در برابر T نوک‌تیز', [
    { en: 'hyperacute', fa: 'پهن، حجیم (ایسکمی حاد)', spec: { t: 9, tsym: true, ts: 1.5, st: 1 }, c: RED },
    { en: 'peaked', fa: 'باریک، نوک‌تیز (هایپرکالمی)', spec: { t: 9, tsym: true, ts: 0.6 }, c: VIOLET }
  ], 'هایپراکیوت در لیدهای یک قلمرو؛ نوک‌تیز در لیدهای زیاد و پراکنده', { mid: 18, h: 112 });
  A['q-wave-evolution'] = () => compare('MI evolution', 'سیر زمانی تغییرات انفارکتوس', [
    { en: 'normal', fa: 'طبیعی', spec: {} },
    { en: 'minutes', fa: 'T هایپراکیوت', spec: { t: 8, tsym: true, ts: 1.4 }, c: ORANGE },
    { en: 'hours', fa: 'ST بالا', spec: { st: 4, sts: 'dome', t: 3, r: 7 }, c: RED },
    { en: '< 24 h', fa: 'Q و T وارونه', spec: { q: 4, r: 3, st: 1.5, t: -3, tsym: true }, c: RED },
    { en: 'weeks', fa: 'Q ماندگار', spec: { q: 4, r: 4, t: 1.5 }, c: '#5f6b72' }
  ], null, { mid: 15 });
  A.reciprocal = () => compare('Reciprocal change', 'تغییرات آینه‌ای', [
    { en: 'III: ST ↑', fa: 'لید درگیر', spec: { st: 3, t: 4, r: 6 }, c: RED, lead: 'III' },
    { en: 'aVL: ST ↓', fa: 'تصویر آینه‌ای', spec: { st: -2, t: -1.5 }, c: BLUE, lead: 'aVL' }
  ], 'تحتانی ↔ لترال بالا · قدامی ↔ خلفی؛ وجود آینه‌ای به نفع STEMI واقعی است', { mid: 16 });
  const ANT = ['V1', 'V2', 'V3', 'V4'], INF = ['II', 'III', 'aVF'];
  A['anterior-stemi'] = () => twelve('Anterior STEMI', 'STEMI قدامی (LAD)', ld => ANT.includes(ld) ? { st: ld === 'V1' ? 2 : 4, sts: 'dome', t: 3, r: ld === 'V4' ? 6 : 2 } : (INF.includes(ld) ? { st: -1, t: 0.6 } : null),
    ld => ANT.includes(ld) ? RED : INF.includes(ld) ? BLUE : null, 'ST بالا در V1 تا V4 (قرمز)؛ آینه‌ای در تحتانی‌ها (آبی)');
  A['inferior-stemi'] = () => twelve('Inferior STEMI', 'STEMI تحتانی (معمولاً RCA)', ld => INF.includes(ld) ? { st: ld === 'III' ? 4 : 3, t: 4, r: 6 } : (ld === 'aVL' || ld === 'I' ? { st: -1.5, t: -1 } : null),
    ld => INF.includes(ld) ? RED : (ld === 'aVL' || ld === 'I') ? BLUE : null, 'ST در III بیشتر از II به نفع RCA است؛ برای بطن راست V4R بگیر');
  A['posterior-mi'] = () => compare('Posterior MI', 'انفارکتوس خلفی', [
    { en: 'V2', fa: 'ST پایین افقی + R بلند', spec: { r: 9, s: 3, st: -3, t: 3 }, c: RED, lead: 'V2' },
    { en: 'V8', fa: 'ST بالا در لید خلفی', spec: { p: 0.6, r: 3, s: 4, q: 1.5, st: 1.5, t: 2 }, c: RED, lead: 'V6' }
  ], 'ST پایین در V1–V3 تصویر آینه‌ای است؛ V7 تا V9 را بگیر (آستانه ≥ ۰٫۵ mm)', { mid: 17 });
  A['rv-mi'] = () => compare('RV infarction', 'انفارکتوس بطن راست', [
    { en: 'III', fa: 'ST بالا (III > II)', spec: { st: 3, t: 3.5, r: 5 }, c: RED, lead: 'III' },
    { en: 'V4R', fa: 'ST بالا ≥ ۰٫۵ mm', spec: { p: 0.5, r: 2, s: 6, st: 1.5, t: 2 }, c: RED, lead: 'V1' }
  ], 'بیمار وابسته به پیش‌بار است: از نیترات و کاهش حجم پرهیز', { mid: 16 });
  A.wellens = () => compare('Wellens', 'سندرم ولنز (V2–V3)', [
    { en: 'type A', fa: 'T دوفازی (+/−)', spec: { t: 2.5, tbi: -3.5, tpos: 0.48 }, c: ORANGE, lead: 'V2' },
    { en: 'type B', fa: 'T عمیق و متقارن', spec: { t: -6, tsym: true }, c: RED, lead: 'V2' }
  ], 'وقتی درد ندارد ظاهر می‌شود؛ نشانه تنگی شدید پروگزیمال LAD؛ تست ورزش ممنوع', { mid: 15 });
  A['de-winter'] = () => compare('de Winter', 'امواج T دووینتر', [
    { en: 'V2', fa: 'ST رو به بالا + T بلند', spec: { st: -2, sts: 'up', t: 10, tsym: true, ts: 1.2 }, c: RED, lead: 'V2' },
    { en: 'V3', fa: 'معادل STEMI', spec: { st: -2.2, sts: 'up', t: 11, tsym: true, ts: 1.2 }, c: RED, lead: 'V3' }
  ], 'انسداد پروگزیمال LAD بدون ST بالا؛ مثل STEMI برخورد کن', { mid: 18, h: 112 });
  A.sgarbossa = () => compare('Sgarbossa', 'معیارهای اسگاربوزا در LBBB', [
    { en: '5 points', fa: 'ST بالا هم‌جهت ≥ ۱ mm', spec: { q: 0, r: 9, s: 0, qrs: 150, waves: [[9, 0.4, 0.2]], st: 2, t: 4 }, c: RED },
    { en: '3 points', fa: 'ST پایین V1–V3 ≥ ۱ mm', spec: { q: 0, r: 0.6, s: 12, qrs: 150, waves: [[1, 0.15, 0.08], [-12, 0.5, 0.2]], st: -2, t: -1 }, c: RED, lead: 'V1' },
    { en: '2 points', fa: 'ST بالا ناهم‌جهت ≥ ۵ mm', spec: { q: 0, qrs: 150, waves: [[1, 0.15, 0.08], [-12, 0.5, 0.2]], st: 6, t: 6 }, c: ORANGE, lead: 'V1' }
  ], 'مجموع ۳ امتیاز یا بیشتر به نفع MI است؛ در نسخه Smith نسبت ST به S برابر منفی ۰٫۲۵ یا کمتر جای معیار سوم را می‌گیرد', { mid: 13 });
  A.pericarditis = () => twelve('Pericarditis', 'پریکاردیت حاد', ld => ld === 'aVR' ? { st: -1, p: -1.2 } : ld === 'V1' ? null : { st: 1.5, t: 3 },
    ld => ld === 'aVR' ? BLUE : ld === 'V1' ? null : GREEN, 'ST بالای مقعر و منتشر با PR پایین؛ در aVR برعکس؛ بدون Q و آینه‌ای ناحیه‌ای');
  A['early-repol'] = () => compare('Early repolarization', 'رپلاریزاسیون زودرس', [
    { en: 'V3', fa: 'ST مقعر + بریدگی J', spec: { st: 1.5, j: 1.3, t: 6 }, c: GREEN, lead: 'V3' },
    { en: 'V4', fa: 'fish-hook', spec: { st: 1.2, j: 1.5, t: 5.5 }, c: GREEN, lead: 'V4' }
  ], 'جوان و بی‌علامت؛ ST/T کمتر از ۰٫۲۵؛ ثابت در نوارهای پیاپی', { mid: 17 });
  A['lv-aneurysm'] = () => compare('LV aneurysm', 'آنوریسم بطن چپ', [
    { en: 'V2', fa: 'QS + ST بالای ماندگار', spec: { q: 0, r: 0, waves: [[-10, 0.45, 0.2]], st: 2, t: 1.5 }, c: '#5f6b72', lead: 'V2' },
    { en: 'V3', fa: 'بیش از ۲ هفته پس از MI', spec: { q: 4, r: 1.5, s: 0, st: 2, t: 1 }, c: '#5f6b72', lead: 'V3' }
  ], 'T کوچک نسبت به QRS؛ تغییر نمی‌کند؛ آینه‌ای ندارد', { mid: 16 });

  /* ================= دنیای sc: حفره‌ها، هدایت و عوامل متابولیک ================= */
  A['atrial-enlargement'] = () => compare('Atrial enlargement', 'بزرگی دهلیزها (لید II و V1)', [
    { en: 'normal II', fa: 'طبیعی', spec: { p: 1.5 }, lead: 'II' },
    { en: 'RAE (II)', fa: 'P بلند و نوک‌تیز > ۲٫۵ mm', spec: { p: 3.6, pd: 90 }, c: BLUE, lead: 'II' },
    { en: 'LAE (II)', fa: 'P پهن و دوکوهانه', spec: { p: 1.4, pbif: 1, pd: 150, pr: 220 }, c: ORANGE, lead: 'II' },
    { en: 'LAE (V1)', fa: 'بخش منفی عمیق و پهن', spec: { p: 0.8, p2: -1.8, pd: 140, pr: 210 }, c: ORANGE, lead: 'V1' }
  ], null, { mid: 15 });
  A.lvh = () => twelve('LVH', 'هیپرتروفی بطن چپ', ld => ({
    V1: { s: 18, r: 1 }, V2: { s: 22, r: 2, st: 1, t: 4 }, V3: { s: 14, r: 5 }, V5: { r: 22, s: 1, st: -1.5, sts: 'down', t: -2.5 }, V6: { r: 18, st: -1.5, sts: 'down', t: -2 },
    I: { r: 12, st: -1, sts: 'down', t: -1.5 }, aVL: { r: 12, s: 1, st: -1, sts: 'down', t: -1.5 }
  })[ld], ld => ['V1', 'V2', 'V5', 'V6'].includes(ld) ? RED : null, 'S در V1 + R در V5 یا V6 ≥ ۳۵ mm؛ الگوی strain در لیدهای لترال', { mid: 9 });
  A.rvh = () => compare('RVH', 'هیپرتروفی بطن راست', [
    { en: 'V1', fa: 'R غالب + strain', spec: { r: 10, s: 2, st: -1, sts: 'down', t: -2.5 }, c: RED, lead: 'V1' },
    { en: 'V6', fa: 'S عمیق', spec: { r: 4, s: 7 }, c: RED, lead: 'V6' },
    { en: 'I', fa: 'محور به راست', spec: { r: 2, s: 6, t: 1 }, c: ORANGE, lead: 'I' }
  ], null, { mid: 15 });
  A.rbbb = () => compare('RBBB', 'بلوک شاخه راست', [
    { en: 'V1', fa: 'rSR\' (گوش خرگوشی)', spec: { qrs: 140, waves: [[3, 0.15, 0.07], [-3, 0.38, 0.08], [9, 0.72, 0.1]], st: -1, t: -2.5 }, c: RED, lead: 'V1' },
    { en: 'V6', fa: 'S پهن و کشیده', spec: { qrs: 140, waves: [[-0.8, 0.08, 0.05], [10, 0.3, 0.09], [-3, 0.72, 0.18]], t: 2.5 }, c: RED, lead: 'V6' }
  ], 'QRS ≥ ۱۲۰ ms؛ V1 «مثبت» (راه راست مثبت است)', { mid: 15 });
  A.lbbb = () => compare('LBBB', 'بلوک شاخه چپ', [
    { en: 'V1', fa: 'QS یا rS عمیق و پهن', spec: { qrs: 150, waves: [[0.6, 0.1, 0.06], [-13, 0.5, 0.2]], st: 2.5, t: 3.5 }, c: RED, lead: 'V1' },
    { en: 'V6', fa: 'R پهن و شکاف‌دار، بدون q', spec: { qrs: 150, waves: [[9, 0.32, 0.13], [9.5, 0.65, 0.14]], st: -1.5, sts: 'down', t: -2.5 }, c: RED, lead: 'V6' }
  ], 'QRS ≥ ۱۲۰ ms؛ ST و T خلاف جهت QRS (ناهم‌جهت) طبیعی است', { mid: 16 });
  A.lafb = () => compare('LAFB', 'بلوک فاسیکل قدامی چپ', [
    { en: 'I', fa: 'qR', spec: { q: 1, r: 8, s: 0.5 }, c: BLUE, lead: 'I' },
    { en: 'aVL', fa: 'qR', spec: { q: 1, r: 9, s: 0.3 }, c: BLUE, lead: 'aVL' },
    { en: 'II', fa: 'rS', spec: { q: 0, r: 2, s: 8, t: 1 }, c: ORANGE, lead: 'II' },
    { en: 'III', fa: 'rS', spec: { q: 0, r: 2, s: 9, t: 0.6 }, c: ORANGE, lead: 'III' }
  ], 'محور بین منفی ۴۵ و منفی ۹۰ درجه؛ QRS تقریباً طبیعی', { mid: 14 });
  A.wpw = () => rhythmFig('WPW', 'پیش‌تحریکی ولف‌پارکینسون‌وایت', { beats: regular(75, { pr: 90, qrs: 140, delta: 1, waves: [[-0.2, 0.05, 0.05], [10, 0.5, 0.13], [-1.5, 0.82, 0.08]], st: -0.5, t: -1.5 }, 0, 3600, 60), mid: 14, top: 50 },
    (s, mk) => `${arrow(mk, s.X(990) - 22, 40, s.X(990) - 1, s.Y(2.6) - 2, RED)}${t(s.X(990) - 26, 38, 'delta wave', { size: 11, fill: RED, w: 800, anchor: 'end' })}${f(s.X(990) + 2, 38, 'موج دلتا', { size: 10.5, fill: RED, anchor: 'start' })}
      <path d="M${s.X(860)} 152 v5 H${s.X(950)} v-5" stroke="${BLUE}" stroke-width="1.6" fill="none"/>${t(s.X(950) + 8, 160, 'short PR < 120 ms', { size: 11, fill: BLUE, w: 800, anchor: 'start' })}
      ${foot(184, 'PR کوتاه، شروع کند QRS (موج دلتا) و QRS پهن')}`);
  A['long-qt'] = () => rhythmFig('Long QT', 'QT طولانی (QTc حدود ۵۵۰ ms)', { beats: regular(65, { qt: 560, t: 2.5, ts: 1.2 }, 0, 3600, 50), mid: 14 },
    s => `${span(s.X(210), s.X(770), 134, 'QT', 'بیش از نیمی از RR', RED)}`);
  A.brugada = () => compare('Brugada', 'الگوی بروگادا (V1–V2)', [
    { en: 'type 1', fa: 'گنبدی (coved) ≥ ۲ mm + T منفی', spec: { qrs: 110, waves: [[2, 0.3, 0.1], [-4, 0.6, 0.1]], st: 4, sts: 'cove', t: -2.5 }, c: RED, lead: 'V1' },
    { en: 'type 2', fa: 'زین‌اسبی (saddleback)', spec: { qrs: 110, waves: [[2, 0.3, 0.1], [-4, 0.6, 0.1]], st: 2.5, sts: 'flat', j: 1.5, t: 2 }, c: ORANGE, lead: 'V1' }
  ], 'فقط نوع ۱ تشخیصی است؛ سابقه سنکوپ یا مرگ ناگهانی خانوادگی بپرس', { mid: 16 });
  A.epsilon = () => compare('ARVC', 'موج اپسیلون', [
    { en: 'V1', fa: 'بریدگی پس از QRS + T منفی', spec: { r: 2, s: 6, j: 1.2, t: -2.5, tsym: true }, c: RED, lead: 'V1' },
    { en: 'V2', fa: 'T منفی V1–V3', spec: { r: 3, s: 9, j: 0.9, t: -2.5, tsym: true }, c: RED, lead: 'V2' }
  ], 'کاردیومیوپاتی آریتموژنیک بطن راست؛ خطر VT با منشأ بطن راست', { mid: 15 });
  A['hyperkalemia-stages'] = () => {
    const P = paperDefs();
    const rows = [
      [{}, 'normal', 'طبیعی'], [{ t: 8, tsym: true, ts: 0.6 }, 'peaked T', 'T نوک‌تیز'], [{ p: 0.4, pr: 230, t: 7, tsym: true, ts: 0.7 }, 'flat P, long PR', 'P صاف، PR بلند'],
      [{ p: 0, qrs: 170, waves: [[6, 0.4, 0.22], [-4, 0.8, 0.18]], t: 6, tsym: true, ts: 0.9 }, 'wide QRS', 'QRS پهن']
    ];
    let body = `${t(8, 16, 'Hyperkalemia', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'سیر تغییرات هایپرکالمی', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}`;
    rows.forEach((r, i) => { const s = strip({ x: i * 72, y: 26, w: 72, h: 100, beats: [Object.assign({ at: 10 }, r[0])], mid: 15 }, P.id); body += s.svg + lab(i * 72 + 36, 140, r[1], r[2], { size: 8.6 }); });
    const s5 = strip({ x: 288, y: 26, w: 72, h: 100, base: 'sine', mid: 13 }, P.id);
    body += s5.svg + lab(324, 140, 'sine wave', 'پیش از ایست', { size: 8.6, fill: RED });
    body += `<path d="M10 172 H350" stroke="${RED}" stroke-width="3" marker-end="url(#hk${UID})"/>${f(180, 190, 'پتاسیم بالاتر ← تغییرات شدیدتر؛ هر تغییر نوار با هایپرکالمی = اورژانس', { size: 10, fill: INK, w: 700 })}`;
    return svg(360, 200, body, 'سیر هایپرکالمی', P.defs + marker('hk' + UID, RED));
  };
  A.hypokalemia = () => rhythmFig('Hypokalemia', 'هایپوکالمی', { beats: regular(70, { t: 1, u: 2.2, st: -0.8, sts: 'down' }, 0, 3600, 50), mid: 14, mark: VIOLET, top: 50 },
    (s, mk) => `${arrow(mk, s.X(1527) + 2, 42, s.X(1527) + 2, s.Y(2.6) - 4, VIOLET)}${t(s.X(1527) - 4, 38, 'U wave', { size: 11, fill: VIOLET, w: 800, anchor: 'end' })}${f(s.X(1527) + 8, 38, 'موج U برجسته', { size: 10.5, fill: VIOLET, anchor: 'start' })}${foot(166, 'T صاف، ST پایین و U بزرگ؛ QT ظاهری بلند (در واقع QU)')}`);
  A.calcium = () => compare('Calcium', 'کلسیم و فاصله QT', [
    { en: 'hypocalcemia', fa: 'ST بلند ← QT بلند', spec: { qt: 520 }, c: BLUE, lead: 'II' },
    { en: 'normal', fa: 'طبیعی', spec: {}, lead: 'II' },
    { en: 'hypercalcemia', fa: 'ST کوتاه ← QT کوتاه', spec: { qt: 300, tpos: 0.5 }, c: ORANGE, lead: 'II' }
  ], 'کلسیم طول قطعه ST را عوض می‌کند، نه شکل T را', { mid: 14 });
  A['digoxin-scoop'] = () => compare('Digoxin effect', 'اثر دیگوکسین', [
    { en: 'V5', fa: 'ST قاشقی (سیبیل دالی)', spec: { st: -2, sts: 'scoop', t: 0.8, qt: 330 }, c: VIOLET, lead: 'V5' },
    { en: 'V6', fa: 'QT کوتاه', spec: { st: -1.8, sts: 'scoop', t: 0.7, qt: 320 }, c: VIOLET, lead: 'V6' }
  ], 'اثر دارو مسمومیت نیست؛ مسمومیت: PVC مکرر، تاکی‌کاردی دهلیزی با بلوک', { mid: 16 });
  A.tca = () => compare('TCA overdose', 'مسمومیت با ضدافسردگی سه‌حلقه‌ای', [
    { en: 'II', fa: 'QRS پهن (> ۱۰۰ ms)', spec: { qrs: 130, waves: [[-0.4, 0.08, 0.06], [8, 0.38, 0.14], [-3, 0.72, 0.14]] }, c: RED, lead: 'II' },
    { en: 'aVR', fa: 'R بلند انتهایی (> ۳ mm)', spec: { qrs: 130, waves: [[-5, 0.35, 0.13], [4.5, 0.75, 0.11]] }, c: RED, lead: 'aVR' }
  ], 'مهار کانال سدیم؛ تاکی‌کاردی سینوسی و محور راست هم شایع است', { mid: 15 });

  /* ================= دنیای cc: ICU و اورژانس ================= */
  A['artifact-types'] = () => {
    const P = paperDefs();
    const rows = [['tremor', 'muscle tremor', 'لرزش عضلانی (شبیه AF)'], ['wander', 'baseline wander', 'سرگردانی خط پایه'], ['hum', 'electrical interference', 'تداخل برق ۵۰ هرتز']];
    let body = `${t(8, 16, 'Artifacts', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'انواع آرتیفکت', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}`;
    rows.forEach((r, i) => {
      const s = strip({ x: 0, y: 26 + i * 70, w: 250, h: 62, base: r[0], beats: regular(75, { r: 8 }, 0, 2500, 40), mid: 9 }, P.id);
      body += s.svg + lab(306, 52 + i * 70, r[1], r[2], { size: 9.5, fill: ORANGE });
    });
    return svg(360, 248, body + foot(240, 'پیش از درمان آریتمی، بیمار را ببین و الکترودها را چک کن'), 'انواع آرتیفکت', P.defs);
  };
  A['lead-reversal'] = () => compare('Arm lead reversal', 'جابه‌جایی الکترود دست راست و چپ', [
    { en: 'I', fa: 'همه چیز وارونه', spec: { p: -1, r: 1, s: 6, t: -2 }, c: RED, lead: 'I' },
    { en: 'aVR', fa: 'مثبت شده', spec: { p: 1, r: 6, s: 1, t: 2 }, c: RED, lead: 'aVR' },
    { en: 'V6', fa: 'لید سینه‌ای طبیعی', spec: {}, c: GREEN, lead: 'V6' }
  ], 'دکستروکاردی هم I را وارونه می‌کند اما R در V1 تا V6 پیشرفت نمی‌کند', { mid: 15 });
  A['paced-rhythm'] = () => {
    const at = []; for (let x = 120; x < 3600; x += 857) at.push(x);
    return rhythmFig('Paced rhythm', 'ریتم پیس‌شده بطنی (۷۰ در دقیقه)', {
      beats: at.map(x => ({ at: x - 4, p: 0, pr: 0, qrs: 160, waves: [[-11, 0.45, 0.22], [1.5, 0.85, 0.1]], st: 2, t: 3.5 })), spikes: at, mid: 13
    }, () => foot(140, 'اسپایک پیش از هر QRS پهن (شبیه LBBB)؛ اسپایک بدون QRS = عدم کپچر'));
  };
  A['failure-to-capture'] = () => {
    const sp = [100, 960, 1820, 2680], beats = sp.filter((_, i) => i !== 2).map(x => ({ at: x - 4, p: 0, pr: 0, qrs: 160, waves: [[-11, 0.45, 0.22], [1.5, 0.85, 0.1]], st: 2, t: 3.5 }));
    return rhythmFig('Failure to capture', 'عدم کپچر پیس‌میکر', { beats, spikes: sp, mid: 13 },
      s => `<circle cx="${s.X(1820)}" cy="${s.Y(5)}" r="14" fill="none" stroke="${RED}" stroke-width="2"/>${foot(140, 'اسپایک آمده ولی QRS ندارد؛ در بیمار وابسته به پیس خطرناک است')}`);
  };
  A['wide-vs-narrow'] = () => compare('QRS width', 'تاکی‌کاردی باریک یا پهن', [
    { en: 'narrow < 120 ms', fa: 'فوق‌بطنی', spec: { p: 0, qt: 280 }, c: GREEN, lead: 'II' },
    { en: 'wide ≥ 120 ms', fa: 'VT تا خلافش ثابت شود', spec: { p: 0, qrs: 170, waves: [[12, 0.35, 0.2], [-6, 0.75, 0.14]], t: -4, qt: 330 }, c: RED, lead: 'II' }
  ], 'قدم اول در هر تاکی‌کاردی: بیمار پایدار است؟ بعد پهنای QRS', { mid: 15 });
  /** فلوچارت ساده با جعبه‌های رنگی */
  function flow(title, fa, boxes, footer, h) {
    const a = 'fa' + (++UID);
    const body = boxes.map(b => `${pill(b.x, b.y, b.w || 150, b.h || 40, b.bg || '#f4f6f8', b.c || '#cfd8e2')}${f(b.x + (b.w || 150) / 2, b.y + (b.h ? b.h / 2 - 2 : 18), b.fa, { size: b.size || 10, fill: b.fc || INK, w: 800 })}${b.en ? t(b.x + (b.w || 150) / 2, b.y + (b.h ? b.h / 2 + 12 : 32), b.en, { size: b.ensize || 8.5, fill: MUTED }) : ''}`).join('');
    const arrows = boxes.filter(b => b.to).map(b => b.to.map(([x1, y1, x2, y2]) => arrow(a, x1, y1, x2, y2)).join('')).join('');
    return svg(360, h || 260, `${t(8, 16, title, { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, fa, { anchor: 'end', size: 10.5, fill: INK, w: 700 })}${arrows}${body}${footer ? foot((h || 260) - 8, footer) : ''}`, fa, marker(a));
  }
  A['brady-algorithm'] = () => flow('Bradycardia', 'اصول برخورد با برادی‌کاردی', [
    { x: 105, y: 26, fa: 'برادی‌کاردی با علامت؟', en: 'ABC · O₂ · IV · monitor · 12-lead', to: [[180, 66, 180, 84]] },
    { x: 105, y: 86, fa: 'علائم ناپایداری؟', en: 'hypotension · AMS · shock · ischemia · AHF', bg: '#fff4f5', c: '#f3b3bb', to: [[140, 126, 90, 150], [220, 126, 270, 150]] },
    { x: 10, y: 152, w: 160, fa: 'خیر: پایش و مشاوره', en: 'monitor & observe', bg: '#e7f9f3', c: '#9fdccd' },
    { x: 190, y: 152, w: 160, fa: 'بله: آتروپین', en: 'atropine first-line', bg: '#fff4f5', c: '#f3b3bb', to: [[270, 192, 270, 204]] },
    { x: 190, y: 206, w: 160, fa: 'بی‌پاسخ: پیس یا دارو', en: 'TCP · epinephrine · dopamine', bg: '#fff4f5', c: '#f3b3bb' }
  ], 'فقط اصول؛ دوزها طبق پروتکل بیمارستان و AHA ACLS', 270);
  A['tachy-algorithm'] = () => flow('Tachycardia', 'اصول برخورد با تاکی‌کاردی با نبض', [
    { x: 105, y: 26, fa: 'ریت معمولاً ≥ ۱۵۰ و علامت‌دار', en: 'ABC · O₂ · monitor · 12-lead', to: [[180, 66, 180, 84]] },
    { x: 105, y: 86, fa: 'ناپایدار است؟', bg: '#fff4f5', c: '#f3b3bb', to: [[140, 126, 90, 150], [220, 126, 270, 150]] },
    { x: 190, y: 152, w: 160, fa: 'بله: کاردیوورژن همزمان', en: 'synchronized cardioversion', bg: '#fff4f5', c: '#f3b3bb' },
    { x: 10, y: 152, w: 160, fa: 'خیر: پهنای QRS؟', en: '≥ 120 ms ?', to: [[60, 192, 60, 206], [120, 192, 120, 206]] },
    { x: 10, y: 208, w: 76, h: 44, fa: 'باریک', en: 'vagal, adenosine', size: 9.5, ensize: 7, bg: '#e7f9f3', c: '#9fdccd' },
    { x: 94, y: 208, w: 76, h: 44, fa: 'پهن', en: 'antiarrhythmic', size: 9.5, ensize: 7, bg: '#fdebdc', c: '#f2c19a' }
  ], null, 262);
  A['arrest-algorithm'] = () => flow('Cardiac arrest', 'اصول احیا: ریتم شوک‌پذیر یا نه', [
    { x: 105, y: 26, fa: 'CPR با کیفیت + مانیتور', en: 'start CPR · O₂ · attach monitor', to: [[140, 66, 90, 86], [220, 66, 270, 86]] },
    { x: 10, y: 88, w: 160, fa: 'شوک‌پذیر: VF یا pVT', en: 'shock → CPR 2 min', bg: '#fff4f5', c: '#f3b3bb', to: [[90, 128, 90, 146]] },
    { x: 190, y: 88, w: 160, fa: 'غیرشوک‌پذیر: آسیستول یا PEA', en: 'CPR 2 min · epinephrine ASAP', bg: '#f4f6f8', to: [[270, 128, 270, 146]] },
    { x: 10, y: 148, w: 160, fa: 'اپی‌نفرین و ضدآریتمی', en: 'per ACLS', bg: '#fff4f5', c: '#f3b3bb' },
    { x: 190, y: 148, w: 160, fa: 'علل برگشت‌پذیر (H و T)', en: 'Hs & Ts', bg: '#f4f6f8' },
    { x: 55, y: 204, w: 250, fa: 'ROSC: نوار ۱۲ لیدی و مراقبت پس از احیا', en: 'post-cardiac arrest care', bg: '#e7f9f3', c: '#9fdccd', size: 9.6 }
  ], null, 262);
  A['stemi-timeline'] = () => {
    const P = (x, en, fa, c) => `<circle cx="${x}" cy="110" r="9" fill="${c}"/>${lab(x, 140, en, fa, { size: 9.5, fill: c })}`;
    return svg(360, 214, `${t(8, 16, 'STEMI clock', { anchor: 'start', size: 12, fill: RED, w: 900 })}${f(352, 16, 'زمان تا برقراری جریان خون', { anchor: 'end', size: 10.5, fill: INK, w: 700 })}
      <line x1="30" y1="110" x2="330" y2="110" stroke="#cfd8e2" stroke-width="6" stroke-linecap="round"/>
      ${P(36, 'FMC', 'اولین تماس', BLUE)}${P(120, 'ECG ≤ 10 min', 'نوار ۱۲ لیدی', ORANGE)}${P(222, 'cath lab', 'فعال‌سازی', VIOLET)}${P(320, 'PCI', 'باز شدن رگ', RED)}
      ${f(180, 64, 'هدف: FMC تا باز شدن رگ ≤ ۹۰ دقیقه (یا ۱۲۰ با انتقال)', { size: 10.5, fill: INK, w: 800 })}
      ${f(180, 184, 'اگر PCI به‌موقع در دسترس نیست: فیبرینولیز طبق پروتکل', { size: 10, fill: MUTED })}${f(180, 202, 'هر دقیقه تأخیر = از دست رفتن میوکارد بیشتر', { size: 10, fill: RED, w: 700 })}`, 'زمان‌بندی مسیر STEMI');
  };
  A.osborn = () => rhythmFig('Hypothermia', 'هیپوترمی: موج آزبورن', { beats: regular(42, { j: 4, pr: 220, qrs: 120, qt: 520 }, 0, 3600, 80), base: 'tremor', mid: 14, mark: BLUE, top: 50 },
    (s, mk) => `${arrow(mk, s.X(1856) + 14, 42, s.X(1856) + 3, s.Y(4.2) - 3, BLUE)}${t(s.X(1856) + 10, 38, 'J (Osborn) wave', { size: 11, fill: BLUE, w: 800, anchor: 'end' })}${f(s.X(1856) + 20, 38, 'موج J', { size: 10.5, fill: BLUE, anchor: 'start' })}${foot(166, 'برادی‌کاردی، فواصل طولانی و موج J که با سرمای بیشتر بزرگ‌تر می‌شود')}`);
  A.alternans = () => {
    const at = []; for (let x = 40; x < 3600; x += 520) at.push(x);
    return rhythmFig('Electrical alternans', 'آلترنانس الکتریکی (تامپوناد)', { beats: at.map((x, i) => ({ at: x, r: i % 2 ? 3 : 6, s: 0.6, t: 1, p: 0.6, qt: 320 })), mid: 13 },
      () => foot(140, 'تاکی‌کاردی + ولتاژ پایین + QRS یکی در میان بلند و کوتاه = به تامپوناد فکر کن'));
  };
  A.s1q3t3 = () => compare('Pulmonary embolism', 'آمبولی ریه', [
    { en: 'I: deep S', fa: 'S عمیق', spec: { r: 4, s: 4 }, c: ORANGE, lead: 'I' },
    { en: 'III: Q', fa: 'Q و T وارونه', spec: { q: 2.5, r: 4, t: -2, tsym: true }, c: ORANGE, lead: 'III' },
    { en: 'V1–V4', fa: 'T وارونه (strain)', spec: { t: -2.5, tsym: true }, c: RED, lead: 'V2' }
  ], 'شایع‌ترین یافته: تاکی‌کاردی سینوسی؛ نبودن S1Q3T3 آمبولی را رد نمی‌کند', { mid: 15 });
  A['cerebral-t'] = () => rhythmFig('Cerebral T waves', 'امواج T مغزی (SAH یا افزایش ICP)', { beats: regular(52, { t: -8, tsym: true, ts: 1.5, qt: 600, tpos: 0.6 }, 0, 3600, 40), mid: 10, h: 104 },
    () => foot(148, 'T وارونه عمیق و پهن، QT بسیار طولانی، برادی‌کاردی'));
  A['post-rosc'] = () => twelve('Post-ROSC ECG', 'نوار ۱۲ لیدی پس از احیا', ld => (['V2', 'V3', 'V4'].includes(ld) ? { st: 3, sts: 'dome', t: 3, r: 3 } : ld === 'II' || ld === 'III' || ld === 'aVF' ? { st: -1, t: 0.8 } : { p: 0.4 }),
    ld => ['V2', 'V3', 'V4'].includes(ld) ? RED : null, 'ST بالا پس از ROSC ← آنژیوگرافی فوری؛ نوار را تکرار کن');

  /* ---------- صادر کردن ---------- */
  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* ریتما در تراپو: قالب نشان‌ها و متن‌های صفحه معرفی برای کیت مشترک ترمینو */
(function (EA) {
  const A = EA.APP;
  if (A.firstBadge && !Array.isArray(A.firstBadge)) A.firstBadge = [A.firstBadge.icon, A.firstBadge.name];
  Object.keys(A.worldBadges || {}).forEach(k => { const b = A.worldBadges[k]; if (b && !Array.isArray(b)) A.worldBadges[k] = [b.icon, b.name]; });
  A.landP = () => A.hello;
  A.landH = 'هر نوار قلب<br><em>یک داستان است</em>';
  A.certKicker = 'ریتما • آکادمی تفسیر نوار قلب تراپو';
  A.finalBadge = 'استاد نوار قلب';
  A.stepRounds = 'راند بالینی: نوار و پرونده بیمار را بخوان، تشخیص بده و اصول اقدام اولیه را انتخاب کن.';
  A.obRoles = [['دانشجوی پزشکی', ''], ['دانشجوی پرستاری', ''], ['پرستار بخش، CCU یا ICU', ''], ['فوریت‌های پزشکی و اورژانس', ''], ['پزشک یا رزیدنت', ''], ['سایر', '']];
})(window.EA);
/* نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و پرونده‌ها را سرور فقط به مشترکان می‌دهد */
      (function (EA, S) {
        EA.worlds = S.worlds;
        EA.rounds = [];
        if (S.per) EA.PER_LEVEL = S.per;
        if (S.exam) EA.exam = S.exam;
        EA.PREVIEW = true;
      })(window.EA, {"worlds":[{"id":"lx","sym":"Lx","name":"زبان قلب و نوار","short":"پایه","sub":"برق قلب، کاغذ نوار و ۱۲ لید؛ رمز واژه‌سازی: ریشه‌ها، پیشوندها، پسوندها و اختصارهای همزاد","color":"#E5484D","dark":"#B42F38","light":"#FDE6E7","levels":["برق قلب و کاغذ نوار","ریشه‌های قلب و ریتم","پیشوند، پسوند و دام‌ها"],"gens":["t2f:lx","f2t:lx","d2t:lx","sp:lx","r2m:lx","m2r:lx","wb:lx","ab:lx"],"lessons":[{"id":"lx1","title":"قلب برقی و نوار قلب","icon":"⚡","items":[{"t":"learn","title":"قلب، پمپی که با برق کار می‌کند","body":"بیشتر بافت قلب عضله است، اما دستور انقباض از گروه کوچکی سلول ویژه می‌آید: <b>سیستم هدایتی</b> (<bdi dir=\"ltr\">conduction system</bdi>).<!--fig:%7B%22a%22%3A%22conduction-system%22%2C%22l%22%3A%22%22%2C%22cap%22%3A%22%D8%A7%DB%8C%D9%85%D9%BE%D8%A7%D9%84%D8%B3%20%D8%A7%D8%B2%20%DA%AF%D8%B1%D9%87%20%D8%B3%DB%8C%D9%86%D9%88%D8%B3%DB%8C%20%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%DB%8C%E2%80%8C%D8%B4%D9%88%D8%AF%D8%8C%20%D8%AF%D8%B1%20%D8%AF%D9%87%D9%84%DB%8C%D8%B2%D9%87%D8%A7%20%D9%BE%D8%AE%D8%B4%20%D9%85%DB%8C%E2%80%8C%D8%B4%D9%88%D8%AF%D8%8C%20%D8%AF%D8%B1%20%DA%AF%D8%B1%D9%87%20AV%20%DA%A9%D9%85%DB%8C%20%D9%85%DA%A9%D8%AB%20%D9%85%DB%8C%E2%80%8C%DA%A9%D9%86%D8%AF%20%D9%88%20%D8%A7%D8%B2%20%D8%B1%D8%A7%D9%87%20%D8%AF%D8%B3%D8%AA%D9%87%20%D9%87%DB%8C%D8%B3%D8%8C%20%D8%AF%D9%88%20%D8%B4%D8%A7%D8%AE%D9%87%20%D9%88%20%D8%A7%D9%84%DB%8C%D8%A7%D9%81%20%D9%BE%D9%88%D8%B1%DA%A9%D9%86%DA%98%20%D8%A8%D9%87%20%D8%A8%D8%B7%D9%86%E2%80%8C%D9%87%D8%A7%20%D9%85%DB%8C%E2%80%8C%D8%B1%D8%B3%D8%AF.%22%7D-->هر بار که این موج برقی از قلب می‌گذرد، روی پوست ولتاژ کوچکی ایجاد می‌شود که دستگاه آن را ثبت می‌کند."},{"t":"learn","title":"نوار قلب یعنی «نگاره برق قلب»","body":"<span class=\"wb\" dir=\"ltr\"><b class=\"wb__p wb__p--root\">electr/o</b><i>+</i><b class=\"wb__p wb__p--root\">cardi/o</b><i>+</i><b class=\"wb__p wb__p--suf\">-gram</b></span> ← <bdi dir=\"ltr\"><b>electrocardiogram</b></bdi>: ثبت فعالیت برقی قلب.<br><table class=\"mini\"><tr><th>واژه</th><th>معنی</th></tr><tr><td><bdi dir=\"ltr\">electrocardiogram</bdi></td><td>خود نوار (نتیجه)</td></tr><tr><td><bdi dir=\"ltr\">electrocardiograph</bdi></td><td>دستگاه ثبت</td></tr><tr><td><bdi dir=\"ltr\">electrocardiography</bdi></td><td>فرایند گرفتن نوار</td></tr></table><div class=\"pearl\"><b class=\"pearl__h\">🩺 در بالین</b>نوار قلب فقط دو چیز را اندازه می‌گیرد: <b>ولتاژ</b> روی محور عمودی و <b>زمان</b> روی محور افقی. ریت، ریتم، بلوک، بزرگی حفره، ایسکمی، اختلال الکترولیت و اثر دارو همه از همین دو محور خوانده می‌شوند.</div>"},{"t":"mcq","q":"دستور انقباض قلب به‌طور طبیعی از کجا شروع می‌شود؟","opts":["گره سینوسی‌دهلیزی (SA node)","گره دهلیزی‌بطنی (AV node)","الیاف پورکنژ","دیواره بین‌بطنی"],"why":"گره SA در دیواره بالای دهلیز راست، نزدیک ورید اجوف فوقانی، ضربان‌ساز طبیعی قلب است.","case":null,"fig":{"a":"conduction-system"}},{"t":"mcq","q":"<bdi dir=\"ltr\"><b>electrocardiograph</b></bdi> یعنی…","opts":["دستگاهی که نوار قلب را ثبت می‌کند","خود نوار قلب","فرایند گرفتن نوار","متخصص نوار قلب"],"why":"پسوند ‎-graph‎ یعنی ابزار ثبت؛ ‎-gram‎ خود نگاره است و ‎-graphy‎ فرایند ثبت."},{"t":"tf","q":"گره AV ایمپالس را عمداً کمی معطل می‌کند تا دهلیزها پیش از بطن‌ها منقبض شوند.","a":true,"why":"درست. این مکث فیزیولوژیک بیشتر طول فاصله PR را می‌سازد.","fig":{"a":"conduction-system"}},{"t":"order","q":"مسیر طبیعی ایمپالس را مرتب کن","steps":["گره SA","دهلیزها","گره AV","دسته هیس","شاخه‌های راست و چپ","الیاف پورکنژ"],"why":"SA ← دهلیز ← AV ← هیس ← شاخه‌ها ← پورکنژ؛ همین مسیر شکل P، PR و QRS را می‌سازد."},{"t":"match","q":"هر بخش سیستم هدایتی را به نقشش وصل کن","pairs":[["SA node","ضربان‌ساز طبیعی"],["AV node","تأخیر و دروازه بین دهلیز و بطن"],["bundle of His","ورود ایمپالس به سپتوم"],["Purkinje fibers","پخش سریع در دیواره بطن"]],"why":"هر جزء یک وظیفه دارد؛ اختلال در هر کدام نوار خاص خودش را دارد."},{"t":"fill","q":"ثبت فعالیت برقی قلب را ___ می‌نامیم.","opts":["electrocardiogram","echocardiogram","angiogram"],"why":"electr/o = برق. echocardiogram تصویر صوتی قلب است و angiogram تصویر رگ."},{"t":"spell","q":"املای انگلیسی «نوار قلب» (شکل کامل واژه) را بنویس","ans":["electrocardiogram"],"why":"electr/o + cardi/o + ‎-gram‎ = electrocardiogram؛ اختصارش ECG یا EKG.","hint":"electro…"},{"t":"num","gen":"t2f:lx"}]},{"id":"lx2","title":"کاغذ نوار و کالیبراسیون","icon":"📏","items":[],"locked":1},{"id":"lx3","title":"الکترودها و ۱۲ لید","icon":"🎯","items":[],"locked":1},{"id":"lx4","title":"ریشه‌های قلب","icon":"🫀","items":[],"locked":1},{"id":"lx5","title":"ریشه‌های ریتم","icon":"🎵","items":[],"locked":1},{"id":"lx6","title":"پسوندهای آزمون و بیماری","icon":"🧾","items":[],"locked":1},{"id":"lx7","title":"پیشوندهای سرعت و جا","icon":"🧭","items":[],"locked":1},{"id":"lx8","title":"پسوندهای حالت قلب و ریتم","icon":"🧩","items":[],"locked":1},{"id":"lx9","title":"اختصارها و دام‌های همزاد","icon":"🎯","items":[],"locked":1}]},{"id":"ph","sym":"Ph","name":"فیزیولوژی و موج‌ها","short":"موج‌ها","sub":"ضربان‌سازهای قلب، دپلاریزاسیون، معنی هر موج و فاصله، محور، ریت و روش منظم خواندن نوار","color":"#13A08F","dark":"#0D7468","light":"#DCF4F0","levels":["ضربان‌ساز و هدایت","موج به موج","خواندن منظم نوار"],"gens":["t2f:ph","f2t:ph","d2t:ph","sp:ph","r2m:ph","m2r:ph","wb:ph","ab:ph"],"lessons":[{"id":"ph1","title":"سلسله‌مراتب ضربان‌سازها","icon":"🥁","items":[],"locked":1},{"id":"ph2","title":"دپلاریزاسیون و ساخت موج‌ها","icon":"🔋","items":[],"locked":1},{"id":"ph3","title":"گره AV، هیس و پورکنژ","icon":"🛤️","items":[],"locked":1},{"id":"ph4","title":"موج P و فاصله PR","icon":"🅿️","items":[],"locked":1},{"id":"ph5","title":"کمپلکس QRS","icon":"⛰️","items":[],"locked":1},{"id":"ph6","title":"ST، T، U و QT","icon":"📐","items":[],"locked":1},{"id":"ph7","title":"گروه لیدها و قلمرو کرونرها","icon":"🗺️","items":[],"locked":1},{"id":"ph8","title":"محور قلب","icon":"🧭","items":[],"locked":1},{"id":"ph9","title":"ریت و روش منظم خواندن","icon":"🧮","items":[],"locked":1}]},{"id":"ar","sym":"Ar","name":"ریتم و آریتمی","short":"ریتم","sub":"ریتم‌های سینوسی، آریتمی‌های دهلیزی و بطنی، SVT، بلوک‌های AV و ریتم‌های ایست قلبی","color":"#7B5CE0","dark":"#5A3DB8","light":"#ECE7FC","levels":["سینوس و دهلیز","جانکشن و بطن","بلوک‌ها و ایست"],"gens":["t2f:ar","f2t:ar","d2t:ar","sp:ar","r2m:ar","m2r:ar","wb:ar","ab:ar"],"lessons":[{"id":"ar1","title":"ریتم سینوسی و خانواده‌اش","icon":"💓","items":[],"locked":1},{"id":"ar2","title":"PAC، تاکی‌کاردی دهلیزی و MAT","icon":"⚡","items":[],"locked":1},{"id":"ar3","title":"فیبریلاسیون و فلاتر دهلیزی","icon":"🌊","items":[],"locked":1},{"id":"ar4","title":"ریتم جانکشنال و SVT","icon":"🔁","items":[],"locked":1},{"id":"ar5","title":"PVC و ریتم‌های بطنی","icon":"🔺","items":[],"locked":1},{"id":"ar6","title":"VT، تورساد و VF","icon":"🌪️","items":[],"locked":1},{"id":"ar7","title":"بلوک درجه یک و Mobitz I","icon":"⏳","items":[],"locked":1},{"id":"ar8","title":"Mobitz II و بلوک کامل","icon":"🚧","items":[],"locked":1},{"id":"ar9","title":"آسیستول، PEA و ریتم‌های ایست","icon":"🛑","items":[],"locked":1}]},{"id":"mi","sym":"Mi","name":"ایسکمی و انفارکتوس","short":"سکته","sub":"ایسکمی، آسیب و انفارکت؛ دیوارها و شریان مسئول؛ معادل‌های STEMI، الگوهای مشابه و NSTEMI","color":"#E8792B","dark":"#B65916","light":"#FDEBDC","levels":["ایسکمی، آسیب، انفارکت","دیوار و شریان","معادل‌ها و مشابه‌ها"],"gens":["t2f:mi","f2t:mi","d2t:mi","sp:mi","r2m:mi","m2r:mi","wb:mi","ab:mi"],"lessons":[{"id":"mi1","title":"ایسکمی: ST پایین و T وارونه","icon":"🩸","items":[],"locked":1},{"id":"mi2","title":"آسیب: ST بالا و تغییرات آینه‌ای","icon":"⛰️","items":[],"locked":1},{"id":"mi3","title":"تحول انفارکت و موج Q","icon":"⏱️","items":[],"locked":1},{"id":"mi4","title":"دیوار قدامی، سپتال و لترال","icon":"🫀","items":[],"locked":1},{"id":"mi5","title":"تحتانی، بطن راست و خلفی","icon":"⬇️","items":[],"locked":1},{"id":"mi6","title":"شریان مسئول و aVR","icon":"🔎","items":[],"locked":1},{"id":"mi7","title":"معادل‌های STEMI","icon":"🚨","items":[],"locked":1},{"id":"mi8","title":"تقلیدکننده‌های STEMI","icon":"🎭","items":[],"locked":1},{"id":"mi9","title":"NSTEMI، آنژین ناپایدار و ACS","icon":"🧪","items":[],"locked":1}]},{"id":"sc","sym":"Sc","name":"حفره‌ها، هدایت و عوامل متابولیک","short":"حفره و یون","sub":"بزرگی دهلیز و بطن، بلوک شاخه و فاسیکل، WPW، QT طولانی، Brugada، الکترولیت‌ها و اثر داروها","color":"#2F80D1","dark":"#1F5FA3","light":"#E0EDFB","levels":["بزرگی حفره‌ها","شاخه‌ها و سندرم‌ها","یون‌ها و داروها"],"gens":["t2f:sc","f2t:sc","d2t:sc","sp:sc","r2m:sc","m2r:sc","wb:sc","ab:sc"],"lessons":[{"id":"sc1","title":"بزرگی دهلیزها","icon":"🎈","items":[],"locked":1},{"id":"sc2","title":"هیپرتروفی بطن چپ","icon":"💪","items":[],"locked":1},{"id":"sc3","title":"هیپرتروفی بطن راست و فشار بطن راست","icon":"🫁","items":[],"locked":1},{"id":"sc4","title":"بلوک شاخه راست","icon":"🐰","items":[],"locked":1},{"id":"sc5","title":"LBBB و بلوک‌های فاسیکولار","icon":"🌿","items":[],"locked":1},{"id":"sc6","title":"WPW، QT طولانی و Brugada","icon":"⚠️","items":[],"locked":1},{"id":"sc7","title":"پتاسیم بالا و پایین","icon":"🍌","items":[],"locked":1},{"id":"sc8","title":"کلسیم و منیزیم","icon":"🦴","items":[],"locked":1},{"id":"sc9","title":"اثر داروها بر نوار","icon":"💊","items":[],"locked":1}]},{"id":"cc","sym":"Cc","name":"ICU و اورژانس","short":"اورژانس","sub":"مانیتور و آرتیفکت، پیس‌میکر، اصول ACLS، مسیر STEMI، اورژانس‌های غیرکرونری و مراقبت پس از احیا","color":"#C2307A","dark":"#93215B","light":"#FAE2EF","levels":["کنار تخت","الگوریتم‌ها و زمان","اورژانس‌های ویژه"],"gens":["t2f:cc","f2t:cc","d2t:cc","sp:cc","r2m:cc","m2r:cc","wb:cc","ab:cc"],"lessons":[{"id":"cc1","title":"تله‌متری و آرتیفکت","icon":"📺","items":[],"locked":1},{"id":"cc2","title":"جابه‌جایی لید و ریتم پیس","icon":"🔌","items":[],"locked":1},{"id":"cc3","title":"بیمار ناپایدار یا پایدار؟","icon":"⚖️","items":[],"locked":1},{"id":"cc4","title":"اصول الگوریتم برادی و تاکی","icon":"🧭","items":[],"locked":1},{"id":"cc5","title":"دفیبریلاسیون و ریتم‌های ایست","icon":"⚡","items":[],"locked":1},{"id":"cc6","title":"مسیر STEMI و زمان تا رپرفیوژن","icon":"⏰","items":[],"locked":1},{"id":"cc7","title":"پریکارد، ریه و میوکارد","icon":"🫁","items":[],"locked":1},{"id":"cc8","title":"هیپوترمی، پتاسیم و مغز","icon":"🧊","items":[],"locked":1},{"id":"cc9","title":"پس از ROSC و خطر QT در ICU","icon":"🏥","items":[],"locked":1}]}],"per":3,"exam":{"checkpoint":{"count":12,"gens":4,"pass":0.7},"final":{"perWorld":6,"gensPerWorld":2,"pass":0.8,"minutes":25}}});
/* ریتما — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای نوار قلب الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: 'جرقه', title: 'گره سینوسی', shape: 'heart', color: '#F07A7E', acc: ['sparkle'], bio: 'در دیواره دهلیز راست زندگی می‌کند و دقیقه‌ای ۶۰ تا ۱۰۰ بار جرقه می‌زند. هر ضربان قلب با سلام او شروع می‌شود.' },
    { id: 'lx-1', w: 'lx', lv: 1, name: 'ریشه‌خوان', title: 'استاد cardi/o و ‎-gram', shape: 'book', color: '#E5484D', acc: ['glasses'], bio: 'هر واژه قلبی را از آخر می‌خواند: ‎-gram نگاره است، ‎-graph دستگاه و ‎-graphy فرایند. هیچ‌وقت inter را با intra اشتباه نمی‌گیرد.' },
    { id: 'lx-2', w: 'lx', lv: 2, name: 'شطرنجی', title: 'کاغذ نوار', shape: 'clipboard', color: '#FDE6E7', acc: ['crown'], bio: 'خانه‌های کوچکش ۴۰ میلی‌ثانیه و خانه‌های بزرگش ۲۰۰ میلی‌ثانیه‌اند. اول از همه کالیبراسیون ۱۰ میلی‌متری‌اش را نگاه کن.' },
    { id: 'ph-0', w: 'ph', lv: 0, name: 'باتری', title: 'پتانسیل عمل', shape: 'capsule', color: '#13A08F', acc: ['sparkle'], bio: 'سدیم که وارد شود دپلاریزه می‌شود و پتاسیم که بیرون برود دوباره شارژ می‌شود. QRS اولین جیغ اوست و T نفس عمیقش.' },
    { id: 'ph-1', w: 'ph', lv: 1, name: 'موجی', title: 'خانواده PQRST', shape: 'wave', color: '#0D7468', acc: ['headband'], bio: 'P کوچولو، QRS قدبلند و T آرام؛ با هم یک ضربان را تعریف می‌کنند. فاصله‌هایشان را با خط‌کش خانه‌ای می‌سنجد.' },
    { id: 'ph-2', w: 'ph', lv: 2, name: 'قطب‌نما', title: 'محور قلب', shape: 'shield', color: '#4FC1B0', acc: ['crown'], bio: 'فقط به لید I و aVF نگاه می‌کند و می‌گوید محور به کدام سمت رفته است. ۳۰− تا ۹۰+ خانه امن اوست.' },
    { id: 'ar-0', w: 'ar', lv: 0, name: 'لرزان', title: 'فیبریلاسیون دهلیزی', shape: 'cloud', color: '#A08AF0', acc: ['sparkle'], bio: 'هیچ‌وقت آرام نمی‌گیرد: نه P دارد و نه RR منظم. با ریت بالا که بیاید اسمش AF با RVR می‌شود.' },
    { id: 'ar-1', w: 'ar', lv: 1, name: 'چرخان', title: 'مدار ورود مجدد', shape: 'bubble', color: '#7B5CE0', acc: ['glasses'], bio: 'دور گره AV می‌دود و SVT می‌سازد. مانور واگ که بیاید، سرش گیج می‌رود و می‌ایستد.' },
    { id: 'ar-2', w: 'ar', lv: 2, name: 'دروازه‌بان', title: 'گره دهلیزی‌بطنی', shape: 'lock', color: '#5A3DB8', acc: ['crown'], bio: 'ایمپالس‌ها را کمی معطل می‌کند. در Wenckebach خسته‌تر و خسته‌تر می‌شود تا یکی را رد کند؛ در بلوک کامل در را کلاً می‌بندد.' },
    { id: 'mi-0', w: 'mi', lv: 0, name: 'تشنه', title: 'عضله گرسنه اکسیژن', shape: 'drop', color: '#F2A066', acc: ['sparkle'], bio: 'وقتی خون کم برسد، ST را پایین می‌کشد و T را وارونه می‌کند. اگر رگ کاملاً بسته شود، ST را بالا می‌برد و فریاد کمک می‌زند.' },
    { id: 'mi-1', w: 'mi', lv: 1, name: 'نقشه‌خوان', title: 'شکارچی شریان مسئول', shape: 'clipboard', color: '#E8792B', acc: ['glasses'], bio: 'از لیدهای II، III و aVF می‌فهمد RCA بسته است و از V1 تا V4 سراغ LAD می‌رود. هیچ STEMI تحتانی را بدون V4R رها نمی‌کند.' },
    { id: 'mi-2', w: 'mi', lv: 2, name: 'کارآگاه', title: 'رمزگشای معادل‌ها', shape: 'tube', color: '#B65916', acc: ['cape', 'crown'], bio: 'Wellens، de Winter و STEMI خلفی را از پشت نقاب می‌شناسد و پریکاردیت و رپلاریزاسیون زودرس را از STEMI واقعی جدا می‌کند.' },
    { id: 'sc-0', w: 'sc', lv: 0, name: 'پهلوان', title: 'بطن چپ ضخیم', shape: 'kettle', color: '#6AA8E6', acc: ['sparkle'], bio: 'سال‌ها با فشار خون بالا وزنه زده و دیواره‌اش ضخیم شده است؛ ولتاژش آن‌قدر بالاست که Sokolow-Lyon را رد می‌کند.' },
    { id: 'sc-1', w: 'sc', lv: 1, name: 'میان‌بُر', title: 'مسیر فرعی WPW', shape: 'flame', color: '#2F80D1', acc: ['headband'], bio: 'گره AV را دور می‌زند و موج دلتا را جا می‌گذارد. در AF هیچ‌کس نباید راهش را با آدنوزین باز کند.' },
    { id: 'sc-2', w: 'sc', lv: 2, name: 'پتاسیم', title: 'نگهبان یون‌ها', shape: 'blob', color: '#1F5FA3', acc: ['crown'], bio: 'زیاد شود T را نوک‌تیز و QRS را پهن می‌کند؛ کم شود U را برجسته. کلسیم و منیزیم بهترین دوستانش‌اند.' },
    { id: 'cc-0', w: 'cc', lv: 0, name: 'مانیتور', title: 'چشم بیدار ICU', shape: 'monitor', color: '#E061A4', acc: ['sparkle'], bio: 'شب و روز ریتم را نگاه می‌کند، ولی می‌داند که لرز و مسواک زدن هم می‌تواند VF جعلی بسازد. اول بیمار را ببین!' },
    { id: 'cc-1', w: 'cc', lv: 1, name: 'پدال', title: 'دفیبریلاتور', shape: 'paddle', color: '#C2307A', acc: ['headband'], bio: 'VF و VT بی‌نبض را با یک شوک خاموش می‌کند و برای تاکی‌کاردی ناپایدار با نبض، دکمه سینکرونایز را می‌زند.' },
    { id: 'cc-2', w: 'cc', lv: 2, name: 'نجات‌گر', title: 'تیم احیا', shape: 'heart', color: '#93215B', acc: ['cape', 'crown'], bio: 'فشار عمیق، وقفه کم و شوک زود؛ بعد از ROSC هم نوار ۱۲ لید را فراموش نمی‌کند و QT بیماران ICU را هر روز چک می‌کند.' }
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
    /* مانیتور با خط ریتم */
    monitor: { fy: 74, top: 18, body: c => `<rect x="10" y="22" width="100" height="92" rx="16" fill="${c}"/><rect x="20" y="32" width="80" height="62" rx="8" fill="#13202A"/><path d="M24 80 H44 l4 -6 4 6 h6 l4 12 6 -36 6 30 4 -6 h18" stroke="#3EE07A" stroke-width="3" fill="none" stroke-linejoin="round" opacity=".7"/><rect x="40" y="114" width="40" height="12" rx="4" fill="#77868E"/><rect x="26" y="126" width="68" height="14" rx="7" fill="#9AA9B1"/>` },
    /* پدال دفیبریلاتور */
    paddle: { fy: 86, top: 30, body: c => `<rect x="48" y="122" width="24" height="24" rx="8" fill="#77868E"/><path d="M14 66 C14 44 30 32 60 32 C90 32 106 44 106 66 V102 C106 118 94 126 78 126 H42 C26 126 14 118 14 102Z" fill="${c}"/><path d="M58 40 l-12 22 h12 l-8 20 22 -28 h-12 l8 -14z" fill="#FFC800" opacity=".9"/><ellipse cx="34" cy="52" rx="7" ry="11" transform="rotate(35 34 52)" fill="#fff" opacity=".3"/>` },
    /* موج PQRST */
    wave: { fy: 96, top: 30, body: c => `<path d="M10 96 C10 60 30 40 60 40 C90 40 110 60 110 96 C110 124 90 140 60 140 C30 140 10 124 10 96Z" fill="${c}"/><path d="M14 66 h12 q5 -8 10 0 h6 l4 6 6 -34 6 40 4 -12 h8 q8 -14 16 0 h12" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity=".55"/>` },
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
    /* وزنه کتل‌بل */
    kettle: { fy: 98, top: 22, body: c => `<path d="M36 54 C30 20 90 20 84 54" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M36 54 C30 20 90 20 84 54" stroke="#000" stroke-opacity=".18" stroke-width="13" fill="none" stroke-linecap="round"/><circle cx="60" cy="96" r="46" fill="${c}"/><ellipse cx="38" cy="76" rx="8" ry="12" transform="rotate(30 38 76)" fill="#fff" opacity=".35"/>` },
    tooth: { fy: 68, top: 22, body: c => `<path d="M22 48 C22 24 44 18 60 28 C76 18 98 24 98 48 C98 72 92 86 90 106 C88 130 82 142 75 142 C66 142 66 118 60 118 C54 118 54 142 45 142 C38 142 32 130 30 106 C28 86 22 72 22 48Z" fill="${c}" stroke="#E2D2B8" stroke-width="3"/><ellipse cx="38" cy="44" rx="6" ry="10" transform="rotate(25 38 44)" fill="#fff" opacity=".8"/>` },
    carrot: { fy: 68, top: 34, body: c => `<path d="M18 46 C38 32 82 32 102 46 C100 82 76 122 63 144 C60 148 57 148 55 144 C42 122 20 82 18 46Z" fill="${c}"/><path d="M36 82 h12 M72 96 h10 M50 116 h9" stroke="#000" stroke-opacity=".15" stroke-width="3" stroke-linecap="round"/>` },
    /* دینامومتر دستی با صفحه */
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#6C3FD1"/><path d="M60 80 L60 146" stroke="#4E27A3" stroke-width="3"/>`,
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
/* ریتما — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', 'معنی واژه را از پسوند شروع کن: brady/card/ia یعنی «حالتِ قلبِ آهسته».'],
    ['Lx', '‎-gram خود نوار است، ‎-graph دستگاه و ‎-graphy فرایند ثبت.'],
    ['Lx', 'inter یعنی «بین» و intra یعنی «درون»: interventricular septum در برابر intraventricular delay.'],
    ['Lx', 'اگر پسوند با واکه شروع شود، o حذف می‌شود: cardi/o + -itis = carditis.'],
    ['Lx', 'EKG همان ECG است؛ K از املای آلمانی آمده و با EEG (نوار مغز) اشتباه نمی‌شود.'],
    ['Lx', 'LAD در بحث سکته «شریان» است و در بحث محور «انحراف به چپ»؛ از روی متن بخوان.'],
    ['Lx', 'AF «فیبریلاسیون» است و AFl «فلاتر»؛ یک حرف l تشخیص را عوض می‌کند.'],
    ['Lx', 'خانه کوچک ۴۰ ms و ۰٫۱ mV؛ خانه بزرگ ۲۰۰ ms. پنج خانه بزرگ یعنی یک ثانیه.'],
    ['Lx', 'پیش از هر تفسیر، مستطیل کالیبراسیون را ببین: ۱۰ mm یعنی ۱ mV.'],
    ['Lx', 'رنگ الکترودهای اندام: قرمز دست راست، زرد دست چپ، سبز پای چپ، مشکی پای راست.'],
    ['Ph', 'سلسله‌مراتب ضربان‌ساز: SA ۶۰ تا ۱۰۰، جانکشن ۴۰ تا ۶۰، بطن ۲۰ تا ۴۰.'],
    ['Ph', 'PR طبیعی ۳ تا ۵ خانه کوچک (۱۲۰ تا ۲۰۰ ms) است.'],
    ['Ph', 'QRS باریک کمتر از ۱۲۰ ms؛ ۱۲۰ و بیشتر یعنی پهن.'],
    ['Ph', 'محور سریع: I و aVF هر دو مثبت؟ محور طبیعی است.'],
    ['Ph', 'I مثبت و aVF منفی؟ لید II را ببین: منفی یعنی انحراف به چپ.'],
    ['Ph', 'دنباله ریت: ۳۰۰، ۱۵۰، ۱۰۰، ۷۵، ۶۰، ۵۰.'],
    ['Ph', 'ریتم نامنظم؟ QRSهای ۱۰ ثانیه را بشمار و در ۶ ضرب کن.'],
    ['Ph', 'QT را در II یا V5 و با روش مماس بخوان؛ U را جزء T حساب نکن.'],
    ['Ph', 'QTc طولانی: ۴۵۰ و بیشتر در مرد، ۴۶۰ و بیشتر در زن؛ بالای ۵۰۰ پرخطر.'],
    ['Ph', 'II، III و aVF تحتانی‌اند؛ I، aVL، V5 و V6 لترال؛ V1 و V2 سپتال؛ V3 و V4 قدامی.'],
    ['Ar', 'سه سؤال برای هر آریتمی: P کجاست؟ QRS باریک است یا پهن؟ RR منظم است؟'],
    ['Ar', 'تاکی‌کاردی منظم باریک با ریت ثابت ۱۵۰؟ به فلاتر ۲:۱ فکر کن.'],
    ['Ar', 'نامنظم نامنظم بدون P؟ AF. سه شکل P یا بیشتر؟ MAT.'],
    ['Ar', 'هر تاکی‌کاردی با QRS پهن را تا خلافش ثابت نشده VT بدان.'],
    ['Ar', 'AV dissociation، capture beat و fusion beat سرنخ‌های طلایی VT‌اند.'],
    ['Ar', 'Wenckebach: PR بلند، بلندتر، افتاد! Mobitz II: PR ثابت، ناگهان افتاد.'],
    ['Ar', 'در بلوک کامل، ریت P بیشتر از ریت QRS است و هیچ رابطه‌ای ندارند.'],
    ['Ar', 'ریتم فرار را سرکوب نکن؛ شاید تنها ریتم بیمار باشد.'],
    ['Ar', 'پیش از اعلام آسیستول، لیدها و گین را چک کن و در دو لید نگاه کن.'],
    ['Ar', 'تاکی‌کاردی سینوسی معمولاً پاسخ است، نه بیماری؛ دنبال علت بگرد.'],
    ['Mi', 'ST بالا را در نقطه J و نسبت به قطعه TP بسنج.'],
    ['Mi', 'آستانه STEMI در V2 و V3 به سن و جنس بستگی دارد؛ در بقیه لیدها ۱ mm.'],
    ['Mi', 'ST بالا با آینه؟ احتمال STEMI واقعی بیشتر است.'],
    ['Mi', 'در هر STEMI تحتانی، V4R را بگیر؛ در ST پایین V1 تا V3، V7 تا V9 را.'],
    ['Mi', 'III بیشتر از II در STEMI تحتانی به نفع RCA است.'],
    ['Mi', 'ST بالا در aVR با ST پایین منتشر: ایسکمی منتشر یا LMCA.'],
    ['Mi', 'de Winter معادل STEMI است، نه NSTEMI.'],
    ['Mi', 'Wellens در دوره بدون درد دیده می‌شود؛ تست ورزش ممنوع.'],
    ['Mi', 'پریکاردیت: ST مقعر منتشر و PR پایین؛ STEMI: محدب، یک قلمرو و آینه.'],
    ['Mi', 'یک نوار طبیعی ACS را رد نمی‌کند؛ نوار سریالی و تروپونین بگیر.'],
    ['Sc', 'P pulmonale بلند است (راست)؛ P mitrale پهن و دوکوهانه (چپ).'],
    ['Sc', 'Sokolow-Lyon: S در V1 + R در V5 یا V6 ≥ ۳۵ mm.'],
    ['Sc', 'RBBB: M در V1؛ LBBB: W در V1 و M در V6.'],
    ['Sc', 'LBBB تشخیص STEMI را سخت می‌کند؛ Sgarbossa را به کار ببر.'],
    ['Sc', 'WPW: PR کوتاه، موج دلتا، QRS پهن. در AF همراه آن، آدنوزین ممنوع.'],
    ['Sc', 'Brugada نوع ۱ «coved» است؛ تب آن را آشکار و خطرناک می‌کند.'],
    ['Sc', 'هیپرکالمی: T نوک‌تیز ← P صاف ← QRS پهن ← sine wave.'],
    ['Sc', 'U برجسته مال هیپوکالمی است، نه هیپرکالمی.'],
    ['Sc', 'کلسیم بالا QT را کوتاه و کلسیم پایین QT را با ST کشیده طولانی می‌کند.'],
    ['Sc', 'ST اسکوپ دیگوکسین «اثر» است؛ مسمومیت را با آریتمی و علائم بشناس.'],
    ['Cc', 'هشدار مانیتور؟ اول بیمار را ببین: نبض، هوشیاری و فشار.'],
    ['Cc', 'بیمار هوشیار با «VF» روی مانیتور؟ احتمالاً آرتیفکت است.'],
    ['Cc', 'لید I وارونه با پیشرفت R طبیعی؟ جای الکترودهای دست را چک کن.'],
    ['Cc', 'ناپایدار؟ برق. پایدار؟ فکر.'],
    ['Cc', 'در VF دکمه سینکرونایز را نزن؛ موج R برای هم‌زمانی وجود ندارد.'],
    ['Cc', 'پس از هر شوک بلافاصله CPR را ادامه بده؛ ریتم را دو دقیقه بعد ببین.'],
    ['Cc', 'آتروپین برای بلوک زیر گره (Mobitz II، بلوک کامل با QRS پهن) معمولاً بی‌اثر است.'],
    ['Cc', 'مسیر STEMI: نوار در ۱۰ دقیقه، رگ باز در ۹۰ دقیقه.'],
    ['Cc', 'الترنانس الکتریکی با ولتاژ پایین و افت فشار؟ تامپوناد را رد کن.'],
    ['Cc', 'پس از ROSC، نوار ۱۲ لید را هرچه زودتر بگیر.'],
    ['Cc', 'QT در ICU: دارو، یون و ریت را هر روز چک کن.'],
    ['', 'هر روز پنج دقیقه مرور کارت‌ها، از یک ساعت خواندن در شب امتحان بهتر است.'],
    ['', 'هر نوار را با یک ترتیب ثابت بخوان؛ ترتیب، خطای «ندیدن» را کم می‌کند.'],
    ['', 'همیشه نوار را با نوار قبلی و حال بیمار مقایسه کن.']
  ];
  const COLORS = { Lx: '#E5484D', Ph: '#13A08F', Ar: '#7B5CE0', Mi: '#E8792B', Sc: '#2F80D1', Cc: '#C2307A', '': '#D7263D' };
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
      unitRun: /([−≈+]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mm\/s|mm\/mV|mEq\/L|mg\/dL|mmHg|mm Hg|bpm|msec|ms|mV|mm|sec|s|\/min)(?![A-Za-z]))/g, mascot: D.mascotFn };
    const C = AC.termino.kit.config(EA, M);
    C.term = true;
    return C;
  };
  D.tools = function () {
/* ریتما — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
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
/* ریتما — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و مقادیر مرجع
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const KEY = EA.APP.key + '.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: 'واژه‌نامه', color: '#6C3FD1' },
    { id: 'parse', sym: '✂', name: 'تجزیه‌گر واژه', color: '#7B5CE0' },
    { id: 'roots', sym: '-o-', name: 'ریشه‌ها و پسوندها', color: '#0FA3A3' },
    { id: 'abbr', sym: 'QTc', name: 'اختصارها', color: '#1899D6' },
    { id: 'ref', sym: 'ms', name: 'مقادیر مرجع', color: '#E5A500' }
  ];
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: EA.APP.parseDefault, open: null, limit: 40 };
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
      <p class="disclaimer">${EA.APP.toolsDisclaimer}</p>
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
  const dict = () => `<div class="tpane">${searchBox(EA.APP.ph.search)}
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
  const SAMPLES = EA.APP.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">یک واژه پزشکی بنویس تا به پیشوند، ریشه و پسوند شکسته شود. قاعده طلایی: معنی را از <b>پسوند</b> شروع کن، بعد پیشوند، و آخر ریشه‌ها.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${EA.APP.ph.parse}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: 'پیشوند', root: 'ریشه', suffix: 'پسوند' };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(EA.APP.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]}‌ها <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(EA.APP.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>اختصار</th><th>شکل کامل و معنی</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : '<p class="muted">موردی پیدا نشد.</p>'}</div>`;
  }

  /* ---------- مقادیر مرجع ---------- */
  const REF = [
    ['سرعت کاغذ و کالیبراسیون', '25 mm/s · 10 mm/mV', 'خانه کوچک = ۴۰ ms و ۰٫۱ mV؛ خانه بزرگ = ۲۰۰ ms'],
    ['ضربان سینوسی بزرگسال', '60–100 bpm', 'کمتر از ۶۰: برادی‌کاردی · بیشتر از ۱۰۰: تاکی‌کاردی'],
    ['محاسبه ریت (نوار منظم)', '300 / large · 1500 / small', 'نوار نامنظم: تعداد QRS در ۶ ثانیه × ۱۰'],
    ['موج P', '< 120 ms · ≤ 2.5 mm', 'بلند و نوک‌تیز: بزرگی دهلیز راست · پهن و دوکوهانه: بزرگی دهلیز چپ'],
    ['فاصله PR', '120–200 ms', 'کوتاه: پیش‌تحریک (WPW) · بلند: بلوک AV درجه ۱'],
    ['کمپلکس QRS', '≤ 110 ms', '۱۱۰ تا ۱۱۹: بلوک ناکامل · ۱۲۰ یا بیشتر: BBB کامل یا ریتم بطنی'],
    ['محور QRS', '−30° to +90°', 'LAD تا ۹۰- · RAD تا ۱۸۰+ · محور شدید ۹۰- تا ۱۸۰-'],
    ['QTc (Bazett)', '♂ < 450 · ♀ < 460 ms', 'بیش از ۵۰۰: خطر بالای TdP · ۳۹۰ یا کمتر: QT کوتاه'],
    ['Q پاتولوژیک', '≥ 30 ms · ≥ 1 mm', 'در دو لید مجاور؛ هر Q بیش از ۲۰ ms در V2–V3 غیرطبیعی است'],
    ['ST بالا (STEMI، UDMI)', '≥ 1 mm', 'به جز V2–V3: مرد ۴۰+ ≥۲، مرد زیر ۴۰ ≥۲٫۵، زن ≥۱٫۵ mm؛ V7–V9 و V4R ≥۰٫۵ mm'],
    ['ولتاژ پایین QRS', '< 5 mm · < 10 mm', 'به ترتیب در لیدهای اندامی و سینه‌ای'],
    ['LVH (Sokolow-Lyon)', 'S V1 + R V5/V6 ≥ 35 mm', 'Cornell: R aVL + S V3 بیشتر از ۲۸ (مرد) یا ۲۰ (زن) mm'],
    ['موج T طبیعی', '< 5 mm · < 10 mm', 'در لیدهای اندامی و سینه‌ای؛ در aVR منفی است'],
    ['پتاسیم سرم', '3.5–5.0 mEq/L', 'بالا: T نوک‌تیز، QRS پهن · پایین: T صاف، موج U'],
    ['کلسیم تام سرم', '8.5–10.5 mg/dL', 'بالا: QT کوتاه · پایین: QT بلند'],
    ['منیزیم سرم', '1.5–2.5 mg/dL', 'پایین: QT بلند و زمینه‌ساز TdP']
  ];
  const ref = () => `<div class="tpane"><p class="muted">مقادیر بزرگسالان برای یادگیری (AHA/ACC/HRS، Fourth Universal Definition of MI)؛ جزئیات در هر درس آمده است.</p>
    <table class="mini ref"><tr><th>شاخص</th><th>محدوده</th><th>نکته</th></tr>${REF.map(r => `<tr><td>${r[0]}</td><td dir="ltr" class="ref__v">${String(r[1]).split(' ').map(x => `<span>${x}</span>`).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</table>
    ${EA.ui.figCard({ a: ['ecg-paper', 'ecg-wave-parts'], l: ['کاغذ نوار و کالیبراسیون', 'موج‌ها و فواصل یک ضربان'] })}</div>`;

  const PANES = { dict, parse, roots, abbr, ref };

  /* ---------- رویدادها ---------- */
  function redraw(el, keepFocus) {
    const active = document.activeElement, sel = active && active.matches && (active.matches('[data-tq]') ? '[data-tq]' : active.matches('[data-tp]') ? '[data-tp]' : null);
    const pos = sel ? active.selectionStart : 0;
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
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
    });
  }

  EA.tools = { view, bind, TOOLS, REF };
})();
  };
})(window.ACADEMY_COURSES);
