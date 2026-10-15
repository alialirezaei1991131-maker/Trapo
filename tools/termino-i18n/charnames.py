"""نام کاراکترها فقط در همان رخداد CHARS ترجمه شوند (نه در هر جای دیگری که همان واژه آمده)
استفاده: python3 charnames.py <حیطه>  → فهرست نام‌ها و رخدادشان؛ با فایل en/<حیطه>-chars.tsv (فارسی<TAB>انگلیسی) → en/<حیطه>-names.txt"""
import sys, os, re
import tu
m = sys.argv[1]
src = open(os.path.join(tu.SRC, m + '.js'), encoding='utf-8').read()
us = sorted(tu.units(m), key=lambda u: (u['s'], -u['e']))
occ = {}; rows = []
for u in us:
    i = tu.uid(u['t']); occ[i] = occ.get(i, 0) + 1
    before = src[max(0, u['s'] - 80):u['s']]
    if re.search(r"\{ id: '[a-z]+-\d', w: '[a-z]+', lv: \d, name: $", before):
        rows.append((u['t'], i, occ[i]))
tsv = os.path.join(tu.HERE, 'en', m + '-chars.tsv')
if not os.path.exists(tsv):
    for t, i, n in rows: print(t, i, n)
    sys.exit()
want = dict(l.split('\t', 1) for l in open(tsv, encoding='utf-8').read().strip().split('\n') if l and not l.startswith('#'))
out = ['%s@%s#%d\t%s' % (i, m, n, want[t].strip()) for t, i, n in rows if t in want]
open(os.path.join(tu.HERE, 'en', m + '-chars.txt'), 'w', encoding='utf-8').write('# نام کاراکترها (فقط رخداد CHARS)\n' + '\n'.join(out) + '\n')
print(m, 'names', len(out), 'missing', [t for t, i, n in rows if t not in want])
