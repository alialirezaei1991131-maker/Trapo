// واژه‌نامه انگلیسی: معنی کوتاهی که خود واژه را تکرار می‌کند (جواب را لو می‌دهد)
const run = require('./rt.js');
for (const m of process.argv.slice(2)) {
  const EA = run(m, '/home/user/trapo/src/courses/termino/' + m + '.en.js', 'en');
  const L = EA.lex; const bad = [];
  const norm = s => String(s).toLowerCase().replace(/[^a-z]/g, '');
  L.TERMS.forEach(t => { const g = norm(L.short ? L.short(t.fa) : t.fa), w = norm(t.t); if (w.length > 3 && (g.includes(w) || (g.length > 4 && w.includes(g)))) bad.push(t.t + ' => ' + t.fa); });
  (L.ROOTS || []).forEach(r => { if (r.fa && norm(r.fa) === norm(r.a)) bad.push('ROOT ' + r.a + ' => ' + r.fa); });
  console.log(m, 'terms', L.TERMS.length, 'self-glosses', bad.length); bad.forEach(x => console.log('  ', x));
}
