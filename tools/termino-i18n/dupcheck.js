// گزینه‌های تکراری در نسخه انگلیسی (دو گزینه فارسی متفاوت که یک ترجمه گرفته‌اند) و معنی تکراری در واژه‌نامه
const run = require('./rt.js');
for (const m of process.argv.slice(2)) {
  const EA = run(m, '/home/user/trapo/src/courses/termino/' + m + '.en.js', 'en');
  const issues = [];
  const norm = s => String(s).toLowerCase().replace(/<[^>]+>/g, '').trim();
  const chk = (it, where) => {
    const lists = [it.opts, it.options, it.chips, it.choices].filter(Array.isArray);
    lists.forEach(l => { const n = l.map(norm); const d = n.filter((x, i) => n.indexOf(x) !== i); if (d.length) issues.push(where + ' | ' + d[0]); });
    if (Array.isArray(it.pairs)) { const r = it.pairs.map(p => norm(p[1])); const d = r.filter((x, i) => r.indexOf(x) !== i); if (d.length) issues.push(where + ' pairs | ' + d[0]); const l = it.pairs.map(p => norm(p[0])); const d2 = l.filter((x, i) => l.indexOf(x) !== i); if (d2.length) issues.push(where + ' pairsL | ' + d2[0]); }
  };
  EA.worlds.forEach(w => w.lessons.forEach(l => l.items.forEach((it, k) => chk(it, w.id + '/' + l.id + '#' + k))));
  EA.rounds.forEach(r => r.steps.forEach((it, k) => chk(it, r.id + '#' + k)));
  const g = {}; EA.lex.TERMS.forEach(t => { const k = norm(EA.lex.short ? EA.lex.short(t.fa) : t.fa); (g[k] = g[k] || []).push(t.t); });
  const dg = Object.entries(g).filter(([k, v]) => v.length > 1);
  console.log(m, 'option dups', issues.length, '| shared glosses', dg.length);
  issues.slice(0, 40).forEach(x => console.log('  ', x)); dg.slice(0, 40).forEach(([k, v]) => console.log('   G', k, '=>', v.join(', ')));
}
