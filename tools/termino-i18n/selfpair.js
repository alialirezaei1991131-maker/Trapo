// جفت‌هایی که در نسخه انگلیسی دو طرفشان یکی شده (پازل بی‌معنی)
const run = require('./rt.js');
for (const m of process.argv.slice(2)) {
  const EA = run(m, '/home/user/trapo/src/courses/termino/' + m + '.en.js', 'en');
  const out = [];
  const norm = s => String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]/g, '');
  const chk = (it, where) => { if (Array.isArray(it.pairs)) it.pairs.forEach(p => { const a = norm(p[0]), b = norm(p[1]); if (a && b && (a === b || (a.length > 4 && b.includes(a)))) out.push(where + ' | ' + p[0] + ' = ' + p[1]); }); };
  EA.worlds.forEach(w => w.lessons.forEach(l => l.items.forEach((it, k) => chk(it, w.id + '/' + l.id + '#' + k))));
  EA.rounds.forEach(r => r.steps.forEach((it, k) => chk(it, r.id + '#' + k)));
  console.log(m, 'self pairs', out.length); out.forEach(x => console.log('  ', x));
}
