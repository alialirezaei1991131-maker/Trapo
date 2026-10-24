#!/usr/bin/env node
/*
 * تراپو — ساخت دوره «ریتما» (تفسیر نوار قلب) از نسخه مستقل آن (ritma.html)
 *   node tools/ritma-import.js <path/to/ritma.html>
 *
 * ریتما با همان موتور حیطه‌های ترمینو ساخته شده (واژه‌نامه، تجزیه‌گر، کارت لایتنر، راند بالینی)؛ پس:
 *  - ماژول‌های محتوا (core, config, terms, lexicon, art, worlds, chars, rounds, tips) بدون تغییر در content() می‌آیند
 *  - کارت‌ها و ابزارها (cards, tools) در tools() می‌آیند
 *  - موتور خود نسخه مستقل (audio, state, ui, runner, shell) کنار گذاشته می‌شود؛ موتور مشترک تراپو جای آن است
 *  - پیکربندی (صفحه معرفی، آشنایی، تمرین، گواهی، نشان‌ها) از کیت مشترک ترمینو (AC.termino.kit) ساخته می‌شود
 *
 * خروجی:
 *   src/courses/data-ritma.js          دوره کامل (ثبت در ACADEMY_COURSES؛ محتوا فقط هنگام ورود اجرا می‌شود)
 *   src/courses/data-ritma-img.js      تصویرهای نوار (webp)، فقط هنگام ورود به ریتما بارگذاری می‌شوند
 *   src/courses/data-ritma.preview.js  نسخه پیش‌نمایش نسخه هاست: فقط درس رایگان، بدون راندها
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'courses');
const src = process.argv[2];
if (!src || !fs.existsSync(src)) { console.error('usage: node tools/ritma-import.js <ritma.html>'); process.exit(1); }
const html = fs.readFileSync(src, 'utf8');

/* ---------- ۱. جدا کردن تکه‌ها ---------- */
const MODS = {};
html.replace(/<script>\/\* src\/([a-z/]+)\.js \*\/\n([\s\S]*?)\n?<\/script>/g, (m, name, code) => { MODS[name] = code; return m; });
const need = ['engine/core', 'config', 'terms', 'lexicon', 'art', 'chars', 'rounds', 'tips', 'engine/cards', 'engine/tools'];
const WORLDS = Object.keys(MODS).filter(k => k.startsWith('worlds/'));
need.forEach(k => { if (!MODS[k]) { console.error('missing module', k); process.exit(1); } });
if (!WORLDS.length) { console.error('no worlds'); process.exit(1); }
const imgM = html.match(/<script>window\.EA=window\.EA\|\|\{\};window\.EA\.IMG=(\{[\s\S]*?\});<\/script>/);
if (!imgM) { console.error('no image block'); process.exit(1); }
const styleM = html.match(/<style>([\s\S]*?)<\/style>/);

/* ---------- ۲. سبک‌های اختصاصی ریتما (فقط قاعده‌هایی که در پوسته تراپو و سبک مشترک ترمینو نیستند) ---------- */
function rules(css) {
  // قاعده‌های سطح بالا؛ بلوک‌های @media/@supports با قاعده‌های درونی‌شان
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out = []; let i = 0;
  while (i < css.length) {
    const open = css.indexOf('{', i); if (open < 0) break;
    const head = css.slice(i, open).trim();
    let depth = 1, j = open + 1;
    while (j < css.length && depth) { if (css[j] === '{') depth++; else if (css[j] === '}') depth--; j++; }
    const body = css.slice(open + 1, j - 1);
    if (head.startsWith('@')) out.push({ at: head, inner: /^@(media|supports)/.test(head) ? rules(body) : null, raw: css.slice(i, j).trim() });
    else out.push({ sel: head, body: body.trim() });
    i = j;
  }
  return out;
}
const norm = s => s.replace(/\s+/g, ' ').replace(/\s*([,>+~{}:;])\s*/g, '$1').trim();
const known = new Set();
const learn = list => list.forEach(r => { if (r.sel) r.sel.split(',').forEach(s => known.add(norm(s))); else if (r.inner) learn(r.inner); });
learn(rules(fs.readFileSync(path.join(ROOT, 'src', 'css', 'styles.css'), 'utf8')));
{
  const t = fs.readFileSync(path.join(OUT, 'data-termino.js'), 'utf8');
  const m = t.match(/\n    css: ("(?:[^"\\]|\\.)*"),\n/);
  if (m) learn(rules(JSON.parse(m[1])));
}
// متغیرهای رنگ و پایه صفحه را پوسته تراپو می‌دهد؛ این قاعده‌ها هرگز آورده نمی‌شوند
const SKIP = /^(:root|html|body|\*|\.app\b|\.side\b|\.main\b|\.top\b|\.rail\b|\.bnav\b|\.view\b|@font-face|@keyframes)/;
function pick(list) {
  const keep = [];
  list.forEach(r => {
    if (r.sel) {
      if (SKIP.test(r.sel)) return;
      const sels = r.sel.split(',').map(norm).filter(s => !known.has(s) && !SKIP.test(s));
      if (sels.length) keep.push(`${sels.join(', ')}{${r.body}}`);
    } else if (r.inner) {
      const inner = pick(r.inner);
      if (inner.length) keep.push(`${r.at}{${inner.join('\n')}}`);
    } else if (/^@keyframes/.test(r.at) && !known.has(r.at)) keep.push(r.raw);
  });
  return keep;
}
const CSS = styleM ? pick(rules(styleM[1])).join('\n') : '';

/* ---------- ۳. اجرای محتوا در Node برای آمار، کاتالوگ و نسخه پیش‌نمایش ---------- */
const CONTENT_MODS = ['engine/core', 'config', 'terms', 'lexicon', 'art'];
const SHIM = `
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
`;
function runContent(capture) {
  const win = { EA: { IMG: {}, lang: 'fa' }, console };
  win.window = win; win.globalThis = win;
  win.document = { createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }), querySelector: () => null, documentElement: { dataset: {} } };
  win.navigator = { language: 'fa' };
  win.__PREVIEW_CAPTURE = capture;
  const ctx = vm.createContext(win);
  const code = CONTENT_MODS.map(k => MODS[k]).join('\n') + SHIM + WORLDS.map(k => MODS[k]).join('\n') + MODS.chars + '\n' + MODS.rounds + '\nwindow.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA);\n' + MODS.tips;
  vm.runInContext(code, ctx, { filename: 'ritma-content.js' });
  return win.EA;
}
let snap = null;
const EA = runContent(E => {
  const first = E.worlds[0].lessons[0].id;
  snap = {
    worlds: E.worlds.map(w => Object.assign({}, w, {
      lessons: w.lessons.map(l => (l.id === first ? l : Object.assign({}, l, { items: [], locked: 1 })))
    })),
    per: E.PER_LEVEL, exam: E.exam
  };
});
const A = EA.APP;
const lessons = EA.worlds.reduce((a, w) => a + w.lessons.length, 0);
const qs = EA.worlds.reduce((a, w) => a + w.lessons.reduce((b, l) => b + l.items.filter(x => x.t !== 'learn').length, 0), 0);
const stats = {
  worlds: EA.worlds.length, levels: EA.worlds.reduce((a, w) => a + w.levels.length, 0), lessons, questions: qs,
  rounds: EA.rounds.length, roundSteps: EA.rounds.reduce((a, r) => a + r.steps.length, 0), chars: EA.chars.list.length,
  terms: EA.lex.TERMS.length, roots: EA.lex.ROOTS.length, abbr: EA.lex.ABBR.length, figs: Object.keys(JSON.parse(imgM[1])).length + (EA.ART_KEYS || []).length,
  firstLesson: EA.worlds[0].lessons[0].id
};
const strip = s => String(s).replace(/<[^>]+>/g, '');
const catalog = {
  tagline: 'هر نوار قلب یک داستان است؛ از کاغذ شطرنجی تا بالین بیمار بدحال',
  about: 'ریتما، قلب کوچکی که نوارش را همیشه همراه دارد، تفسیر نوار قلب (ECG/EKG) را قدم‌به‌قدم یاد می‌دهد: کاغذ نوار و ۱۲ لید، ' +
    'فیزیولوژی موج‌ها و فواصل، محور و ریت، ریتم‌های سینوسی، دهلیزی، جانکشنال و بطنی، بلوک‌های دهلیزی‌بطنی، ایسکمی و STEMI با دیواره و شریان مسئول، ' +
    'بزرگی حفره‌ها، بلوک‌های شاخه‌ای، WPW، QT طولانی و Brugada، اثر الکترولیت‌ها و داروها، و در پایان نوار در ICU و اورژانس: مانیتور و آرتیفکت، ' +
    `پیس‌میکر، اصول ACLS و مراقبت پس از احیا. ${stats.figs} نوار و شکل دوزبانه روی کاغذ شطرنجی واقعی، ${stats.terms} واژه با تلفظ و ${stats.rounds} راند بالینی.`,
  audience: 'دانشجوی پزشکی و پرستاری، پرستار بخش، CCU، ICU و اورژانس، کارشناس فوریت‌های پزشکی، کارورز، رزیدنت و پزشک عمومی',
  highlights: [`${stats.figs} نوار و شکل آموزشی`, 'رویکرد قدم‌به‌قدم خواندن نوار ۱۲ لیدی', `${stats.rounds} راند بالینی و امتحان نهایی`],
  outcomes: A.outcomes.map(strip),
  worlds: EA.worlds.map(w => ({ id: w.id, name: w.name, sub: w.sub, sym: w.sym, color: w.color, levels: w.levels })),
  tools: ['واژه‌نامه نوار قلب با تلفظ و معنی فارسی', 'تجزیه‌گر واژه', 'ریشه‌ها و پسوندها', 'اختصارها (AF، LBBB، QTc، …)', 'مقادیر مرجع نوار قلب (PR، QRS، QTc، …)']
};

/* ---------- ۴. نوشتن فایل‌ها ---------- */
const MASCOT_BODY = (() => {
  // بدن شخصیت ریتما از config.js (همان تابع mascot(cx, cy))؛ چهره (چشم، ابرو، دهان) را قالب مشترک می‌کشد
  const m = MODS.config.match(/\n    mascot: (\(cx, cy\) => \{[\s\S]*?\n    \})\n  \}\);/);
  if (!m) { console.error('mascot not found'); process.exit(1); }
  return m[1];
})();
const J = x => JSON.stringify(x);
const unitRun = '/([−≈+]?[\\d۰-۹][\\d۰-۹٫.,]*(?:\\s?[×÷=+−-]\\s?[\\d۰-۹][\\d۰-۹٫.,]*)*\\s?(?:mm\\/s|mm\\/mV|mEq\\/L|mg\\/dL|mmHg|mm Hg|bpm|msec|ms|mV|mm|sec|s|\\/min)(?![A-Za-z]))/g';

function courseFile(content, preview) {
  return `/* تراپو — دوره «ریتما» (تفسیر نوار قلب ECG/EKG)
 * ساخته‌شده خودکار با tools/ritma-import.js از نسخه مستقل ریتما؛ دستی ویرایش نکنید (فایل را دوباره بسازید).
 * این فایل فقط دوره را در window.ACADEMY_COURSES ثبت می‌کند؛ محتوا هنگام ورود به دوره اجرا می‌شود.
 *   content(): ماژول‌های محتوایی ریتما (هسته، پیکربندی، واژه‌نامه، شکل‌ها، دنیاها، کاراکترها، راند بالینی، نکته‌ها) بدون تغییر
 *   tools():   کارت‌های لایتنر و ابزارها (واژه‌نامه، تجزیه‌گر، ریشه‌ها، اختصارها، مقادیر مرجع)
 *   config():  کیت مشترک ترمینو (AC.termino.kit) با متن‌های ریتما${preview ? '\n * نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و راندها را سرور فقط به خریداران می‌دهد' : ''} */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function (AC) {
  /* شخصیت ریتما: قلبی با نوار طلایی پشت سرش (بدون بارگذاری محتوا) */
  const MASCOT = (function () { const EA = { APP: { mascot: ${MASCOT_BODY} } }; return function (mood, color, size) {
    const c = color || 'var(--brand)';
    const m = mood || 'happy';
    const ink = '#3a0d16';
    const cx = 58, cy = 74;
    const my = cy + 19;
    const mouths = {
      happy: \`<path d="M\${cx - 11} \${my} Q\${cx} \${my + 11} \${cx + 11} \${my}" stroke="\${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>\`,
      cheer: \`<path d="M\${cx - 13} \${my - 3} Q\${cx} \${my + 20} \${cx + 13} \${my - 3} Z" fill="\${ink}"/><path d="M\${cx - 6} \${my + 7} Q\${cx} \${my + 11} \${cx + 6} \${my + 7}" fill="#ff8a9a"/>\`,
      sad: \`<path d="M\${cx - 10} \${my + 7} Q\${cx} \${my - 3} \${cx + 10} \${my + 7}" stroke="\${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>\`,
      wow: \`<ellipse cx="\${cx}" cy="\${my + 3}" rx="6" ry="8" fill="\${ink}"/>\`,
      think: \`<path d="M\${cx - 9} \${my + 4} L\${cx + 9} \${my + 1}" stroke="\${ink}" stroke-width="4" stroke-linecap="round"/>\`
    };
    const brows = m === 'think' ? \`<path d="M\${cx - 21} \${cy - 15} L\${cx - 9} \${cy - 11}" stroke="\${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M\${cx + 8} \${cy - 13} L\${cx + 21} \${cy - 15}" stroke="\${ink}" stroke-width="3.5" stroke-linecap="round"/>\`
      : m === 'sad' ? \`<path d="M\${cx - 21} \${cy - 11} L\${cx - 9} \${cy - 15}" stroke="\${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M\${cx + 9} \${cy - 15} L\${cx + 21} \${cy - 11}" stroke="\${ink}" stroke-width="3.5" stroke-linecap="round"/>\` : '';
    const tear = m === 'sad' ? \`<path d="M\${cx + 22} \${cy + 8} q4 8 0 12 q-4 -4 0 -12z" fill="#8fdcff"/>\` : '';
    const eyes = m === 'cheer'
      ? \`<path d="M\${cx - 20} \${cy + 2} Q\${cx - 13} \${cy - 8} \${cx - 6} \${cy + 2}" stroke="\${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M\${cx + 6} \${cy + 2} Q\${cx + 13} \${cy - 8} \${cx + 20} \${cy + 2}" stroke="\${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>\`
      : \`<g class="yona-eyes"><ellipse cx="\${cx - 13}" cy="\${cy}" rx="8" ry="10" fill="#fff"/><ellipse cx="\${cx + 13}" cy="\${cy}" rx="8" ry="10" fill="#fff"/><circle cx="\${cx - (m === 'think' ? 10 : 12)}" cy="\${cy + (m === 'think' ? -3 : 2)}" r="4.6" fill="#1d1d1d"/><circle cx="\${cx + (m === 'think' ? 16 : 14)}" cy="\${cy + (m === 'think' ? -3 : 2)}" r="4.6" fill="#1d1d1d"/><circle cx="\${cx - 10}" cy="\${cy - 1}" r="1.7" fill="#fff"/><circle cx="\${cx + 16}" cy="\${cy - 1}" r="1.7" fill="#fff"/></g>\`;
    return \`<svg class="yona yona--\${m}" viewBox="0 0 120 150" width="\${size || 120}" height="\${(size || 120) * 1.25}" aria-hidden="true" style="--c:\${c}">
      <ellipse cx="60" cy="144" rx="32" ry="5" fill="currentColor" opacity=".12"/>
      <g class="yona-body">\${EA.APP.mascot(cx, cy)}
        \${brows}\${eyes}
        <ellipse cx="\${cx - 25}" cy="\${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/><ellipse cx="\${cx + 25}" cy="\${cy + 14}" rx="6" ry="3.6" fill="#ff9fb0" opacity=".75"/>
        \${mouths[m] || mouths.happy}\${tear}
      </g>
    </svg>\`;
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
    icon: '💓', color: '#d7263d', dark: '#a8182c', light: '#fbe3e6', langs: ['fa'], codePrefix: 'RT', startWorld: ${J(EA.worlds[0].id)},
    /* سبک‌ها: سبک مشترک کیت ترمینو (kitOf) + قاعده‌های اختصاصی ریتما (css)؛ موتور هنگام ورود به دوره می‌گذارد */
    skin: 'negar', kitOf: 'termino', mascotFn: MASCOT,
    stats: ${J(stats)},
    catalog: ${J(catalog)},
    css: ${J(CSS)}
  };

  D.content = function () {
    window.EA.IMG = D.IMG || {}; // نوارها و شکل‌ها (فایل data-ritma-img.js)
${content}
  };
  D.config = function (EA) {
    const M = { id: D.id, bit: D.bit, langs: D.langs, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
      unitRun: ${unitRun}, mascot: D.mascotFn };
    const C = AC.termino.kit.config(EA, M);
    C.term = true;
    return C;
  };
  D.tools = function () {
${MODS['engine/cards']}
${MODS['engine/tools']}
  };
})(window.ACADEMY_COURSES);
`;
}

const PV_OPEN = '/*<<PV-DATA>>*/', PV_CLOSE = '/*<</PV-DATA>>*/';
const head = CONTENT_MODS.map(k => MODS[k]).join('\n') + SHIM;
const full = head + PV_OPEN + '\n' + WORLDS.map(k => MODS[k]).join('\n') + '\n' + PV_CLOSE + '\n' + MODS.chars + '\n' +
  PV_OPEN + '\n' + MODS.rounds + '\n' + PV_CLOSE + '\n      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش\n' + MODS.tips;
const pvBlock = `/* نسخه پیش‌نمایش: فقط درس رایگان؛ بقیه درس‌ها و پرونده‌ها را سرور فقط به مشترکان می‌دهد */
      (function (EA, S) {
        EA.worlds = S.worlds;
        EA.rounds = [];
        if (S.per) EA.PER_LEVEL = S.per;
        if (S.exam) EA.exam = S.exam;
        EA.PREVIEW = true;
      })(window.EA, ${J(snap)});`;
const preview = head + pvBlock + '\n' + MODS.chars + '\n' + MODS.tips;

fs.writeFileSync(path.join(OUT, 'data-ritma.js'), courseFile(full, false));
fs.writeFileSync(path.join(OUT, 'data-ritma.preview.js'), courseFile(preview, true));
fs.writeFileSync(path.join(OUT, 'data-ritma-img.js'), `/* تراپو — نوارها و شکل‌های دوره «ریتما» (webp، درون فایل برای اجرای آفلاین)
 * جدا از data-ritma.js تا صفحه اول و دوره‌های دیگر این حجم را بارگذاری نکنند؛ فقط هنگام ورود به ریتما می‌آید. */
window.ACADEMY_COURSES.ritma.IMG = ${imgM[1]};
`);
console.log('ritma:', stats, 'css rules', CSS.split('\n').length, 'bytes', fs.statSync(path.join(OUT, 'data-ritma.js')).size);
