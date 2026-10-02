/* تراپو — ساخت نسخه محافظت‌شده برای کاربران
 *   ورودی:  src/  (کد خوانا؛ فقط برای توسعه)
 *   خروجی:  app/  (همین پوشه را به کاربران بدهید)
 * کار: موتور و فایل‌های درس دوره‌ها درهم و ناخوانا (obfuscate) می‌شوند؛ بقیه فایل‌ها کپی می‌شوند.
 * اجرا:  npm install  ← یک بار؛  سپس  npm run build */
const fs = require('fs'), path = require('path');
const JO = require('javascript-obfuscator');
const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'src'), OUT = path.join(ROOT, 'app');

const OPTS = {
  compact: true,
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,            // نام‌های سراسری (ACADEMY، ACADEMY_COURSES) میان فایل‌ها مشترک‌اند
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 1,
  stringArrayRotate: false,         // چرخش آرایه در شروع، با هزاران متن درس کند است
  stringArrayShuffle: true,
  stringArrayIndexShift: true,
  stringArrayCallsTransform: false,
  stringArrayWrappersCount: 1,
  stringArrayWrappersType: 'variable',
  splitStrings: false,               // روشنش حجم و زمان بارگذاری را چند برابر می‌کند
  numbersToExpressions: false,
  simplify: true,
  transformObjectKeys: false,
  controlFlowFlattening: false,    // روشن کردنش برنامه را کند می‌کند
  deadCodeInjection: false,
  selfDefending: false,            // روشنش بارگذاری را دو برابر کند می‌کند
  debugProtection: false,
  disableConsoleOutput: false,
  unicodeEscapeSequence: false,
  target: 'browser',
  sourceMap: false
};
const shouldObfuscate = rel => rel === path.join('js', 'engine.js') || (/^courses[\\/]data-.*\.js$/.test(rel) && !/-img\.js$/.test(rel));

function walk(dir, base = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name), path.join(base, d.name)) : [path.join(base, d.name)]);
}
fs.rmSync(OUT, { recursive: true, force: true });
let n = 0;
for (const rel of walk(SRC)) {
  if (rel === 'README.md') continue; // راهنمای توسعه‌دهنده در نسخه کاربران لازم نیست
  const from = path.join(SRC, rel), to = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (shouldObfuscate(rel)) {
    const t0 = Date.now();
    const code = JO.obfuscate(fs.readFileSync(from, 'utf8'), OPTS).getObfuscatedCode();
    fs.writeFileSync(to, '/* Therapo (تراپو) Clinical Academy — © All rights reserved. */\n' + code);
    console.log('obfuscated', rel, Math.round(fs.statSync(from).size / 1024) + 'KB →', Math.round(code.length / 1024) + 'KB', (Date.now() - t0) + 'ms');
    n++;
  } else fs.copyFileSync(from, to);
}
console.log('done:', n, 'files obfuscated → app/');
