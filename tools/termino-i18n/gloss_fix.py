"""معنی کوتاه واژه‌نامه انگلیسی که خود واژه را تکرار می‌کند ← توضیح کوتاه؛ فقط همان رخداد داخل فهرست واژه‌ها (TERMS_RAW)
استفاده: python3 gloss_fix.py <حیطه> <فایل term\\tgloss>  → en/<حیطه>-gloss.txt"""
import sys, os, re, json
import tu
m, path = sys.argv[1], sys.argv[2]
want = {}
for ln in open(path, encoding='utf-8').read().split('\n'):
    if ln.strip() and not ln.startswith('#'):
        a, b = ln.split('\t', 1); want[a.strip()] = b.strip()
src = open(os.path.join(tu.SRC, m + '.js'), encoding='utf-8').read()
us = sorted(tu.units(m), key=lambda u: (u['s'], -u['e']))
occ = {}; out = []; found = set()
for u in us:
    i = tu.uid(u['t']); occ[i] = occ.get(i, 0) + 1
    if u['k'] != 's': continue
    before = src[max(0, u['s'] - 600):u['s']]
    mm = re.search(r'\[\s*"([^"]+)",\s*"[^"]*",\s*"(?:[^"\\]|\\.)*",\s*$', before)
    if mm and mm.group(1) in want:
        out.append('%s@%s#%d\t%s' % (i, m, occ[i], want[mm.group(1)])); found.add(mm.group(1))
open(os.path.join(tu.HERE, 'en', m + '-gloss.txt'), 'w', encoding='utf-8').write('# معنی کوتاه واژه‌نامه (بدون تکرار خود واژه)\n' + '\n'.join(out) + '\n')
print(m, 'overrides', len(out), 'missing', sorted(set(want) - found))
