"""برای جفت‌های خودتکرار: شناسه و شماره رخداد طرف راست را پیدا می‌کند تا ترجمه ویژه بنویسیم."""
import sys, os, re, json, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tu
m = sys.argv[1]
src_path = os.path.join(tu.SRC, m + '.js'); src = open(src_path, encoding='utf-8').read()
D = tu.load_dict(); us = sorted(tu.units(m, src_path), key=lambda u: (u['s'], -u['e']))
seen = {}; FA = {}
def tr(t):
    i = tu.uid(t)
    if tu.KEEP.match(t): return t.translate(tu.LATIN), None
    seen[i] = seen.get(i, 0) + 1; FA[i] = t
    return D.get('%s@%s#%d' % (i, m, seen[i]), D.get(i + '@' + m, D.get(i))) or t, '%s@%s#%d' % (i, m, seen[i])
def render(a, b):
    out = []; pos = a
    for u in us:
        if u['s'] < pos or u['e'] > b: continue
        out.append(src[pos:u['s']]); en, key = tr(u['t'])
        if u['k'] == 's': out.append(tu.jsstr(('⟪%s⟫' % key if key else '') + en))
        else:
            ex = [render(x, y) for x, y in u['ex']]; parts = re.split(r'⟦(\d+)⟧', en); t = '`'
            for j, p in enumerate(parts):
                if j % 2 == 0: t += tu.tplesc(p)
                else:
                    k = int(p); t += '${' + ex[k] + '}' if k < len(ex) else ''
            out.append(t + '`')
        pos = u['e']
    out.append(src[pos:b]); return ''.join(out)
js = tu.ltr(render(0, len(src)))
out = os.path.join(tu.SRC, m + '.mark.js'); open(out, 'w', encoding='utf-8').write(js)
r = subprocess.run(['node', '-e', r'''
const run = require('./rt.js'); const m = process.argv[1];
const EA = run(m, '/home/user/trapo/src/courses/termino/' + m + '.mark.js', 'en');
const strip = s => String(s).replace(/⟪[^⟫]*⟫/g, ''); const key = s => (String(s).match(/⟪([^⟫]*)⟫/) || [])[1];
const norm = s => strip(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]/g, '');
const res = [];
const chk = (it, where) => { if (Array.isArray(it.pairs)) it.pairs.forEach(p => { const a = norm(p[0]), b = norm(p[1]); if (a && b && (a === b || (a.length > 4 && b.includes(a)))) res.push([where, strip(p[0]), strip(p[1]), key(p[1]) || '', key(p[0]) || '']); }); };
EA.worlds.forEach(w => w.lessons.forEach(l => l.items.forEach((it, k) => chk(it, w.id + '/' + l.id + '#' + k))));
EA.rounds.forEach(r => r.steps.forEach((it, k) => chk(it, r.id + '#' + k)));
console.log(JSON.stringify(res));
''', m], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
os.remove(out)
if r.returncode: raise SystemExit(r.stderr[-1500:])
for where, a, b, kb, ka in json.loads(r.stdout):
    k = kb or ('L:' + ka); print('%s\t%s\t| %s = %s | fa: %s' % (k, b, where, a, FA.get(k.replace('L:', '').split('@')[0], '?')))
