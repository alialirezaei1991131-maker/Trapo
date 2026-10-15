// اسکن داده نسخه انگلیسی یک حیطه: هر رشته‌ای که هنوز حرف فارسی دارد
const run = require('./rt.js');
const FA = /[؀-ۿ]/;
for (const m of process.argv.slice(2)) {
  const EA = run(m, '/home/user/trapo/src/courses/termino/' + m + '.en.js', 'en');
  const bad = new Map();
  const walk = (v, p, d) => { if (d > 14 || v == null) return; if (typeof v === 'string') { if (FA.test(v)) bad.set(v, p); return; } if (typeof v === 'function') return; if (Array.isArray(v)) return v.forEach(x => walk(x, p, d + 1)); if (typeof v === 'object') for (const k of Object.keys(v)) { if (k === 'IMG') continue; walk(v[k], p ? p + '.' + k : k, d + 1); } };
  walk(EA, '', 0);
  console.log(m, 'persian strings left:', bad.size); [...bad].slice(0, 15).forEach(([s, p]) => console.log('  ', p, '|', s.slice(0, 140)));
}
