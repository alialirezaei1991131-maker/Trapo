"""نام و نام کوتاه دنیاها در انگلیسی: کلید رخداد هر کدام را پیدا و نسخه Title Case را در en/<حیطه>-worlds.txt می‌نویسد."""
import sys, os, re, json, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tu
SMALL = set('and or of the to in a an for on with by at from vs'.split())
FIX = {'tongue': 'Language', 'hollow space in the body': 'Cavities'}
def tcase(s):
    s = FIX.get(s, s); out = []
    for i, w in enumerate(s.split(' ')):
        if i and w.lower() in SMALL: out.append(w.lower())
        elif w[:1].islower(): out.append(w[:1].upper() + w[1:])
        else: out.append(w)
    return ' '.join(out)
m = sys.argv[1]
src_path = os.path.join(tu.SRC, m + '.js'); src = open(src_path, encoding='utf-8').read()
D = tu.load_dict(); us = sorted(tu.units(m, src_path), key=lambda u: (u['s'], -u['e']))
seen = {}
def tr(t):
    i = tu.uid(t)
    if tu.KEEP.match(t): return t.translate(tu.LATIN), None
    seen[i] = seen.get(i, 0) + 1
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
const res = []; EA.worlds.forEach(w => ['name', 'short'].forEach(f => { const s = String(w[f] || ''); const k = (s.match(/^⟪([^⟫]*)⟫/) || [])[1]; res.push([w.id, f, k || '', s.replace(/⟪[^⟫]*⟫/g, '')]); }));
console.log(JSON.stringify(res));
''', m], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
os.remove(out)
if r.returncode: raise SystemExit(r.stderr[-1500:])
lines = ['# world names and short names in Title Case']; n = 0
for wid, f, k, s in json.loads(r.stdout):
    t = tcase(s)
    if not k: print('NO KEY', m, wid, f, s); continue
    if t != s: lines.append('%s\t%s' % (k, t)); n += 1; print(m, wid, f, repr(s), '->', repr(t))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'en', m + '-worlds.txt'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
