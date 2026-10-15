// اجرای یک فایل حیطه در Node و برگرداندن محتوا (برای مقایسه و آزمون)
const vm = require('vm'), fs = require('fs');
const SRC = '/home/user/trapo/src/courses/';
function run(m, file, lang) {
  const win = { ACADEMY_COURSES: {}, ACADEMY_SUBCOURSES: {}, navigator: {}, matchMedia: () => ({ matches: false }) };
  win.window = win;
  const ctx = vm.createContext(win);
  vm.runInContext(fs.readFileSync(SRC + 'data-termino.js', 'utf8').replace('__CATALOG_TERMINO__', '{}'), ctx);
  vm.runInContext(fs.readFileSync(SRC + 'termino/' + m + '-img.js', 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
  const D = win.ACADEMY_SUBCOURSES['tm_' + m];
  win.EA = { lang: lang || 'fa', T: (a, b) => (lang === 'en' && b != null ? b : a), tx: x => (x && x.fa) || x, onLang: () => {}, isEn: () => lang === 'en' };
  D.content.call(win);
  return win.EA;
}
module.exports = run;
if (require.main === module) {
  const [m, a, b] = process.argv.slice(2);
  const pick = EA => JSON.stringify([EA.worlds, EA.rounds, EA.lex && [EA.lex.TERMS, EA.lex.ROOTS, EA.lex.ABBR], EA.chars, EA.tips, EA.APP], (k, v) => k === 'IMG' ? undefined : v);
  const x = pick(run(m, a)), y = pick(run(m, b));
  console.log(m, x === y ? 'SAME' : 'DIFF', x.length);
}
