"""ابزار ترجمه ترمینو: استخراج واحدها از کد منبع حیطه‌ها، تکه‌های کار، فرهنگ ترجمه و ساخت نسخه انگلیسی."""
import json, os, re, subprocess, sys, hashlib, glob
HERE = os.path.dirname(os.path.abspath(__file__))
SP = os.path.dirname(os.path.dirname(HERE))
SRC = '/home/user/trapo/src/courses/termino'
MODS = 'lexa peykar timar derma osteo tapesh imena nafas govara nephra zaya hormona neuro hessa mahar'.split()
ENV = dict(os.environ, NODE_PATH=SP + '/obf/node_modules')

def uid(t): return hashlib.sha1(t.replace('·', '•').encode('utf-8')).hexdigest()[:8]  # جداکننده پس از ساخت یکسان می‌شود

def units(m, path=None):
    out = subprocess.run(['node', os.path.join(SP, 'i18n/src_lits.js'), path or os.path.join(SRC, m + '.js')], capture_output=True, text=True, env=ENV)
    if out.returncode: raise SystemExit(out.stderr[-1500:])
    return json.loads(out.stdout)

def load_dict():
    D = {}
    for f in sorted(glob.glob(os.path.join(HERE, 'en', '*.txt'))):
        for ln in open(f, encoding='utf-8').read().split('\n'):
            if not ln.strip() or ln.startswith('#'): continue
            if '\t' not in ln: raise SystemExit('bad line in %s: %r' % (f, ln[:80]))
            k, v = ln.split('\t', 1)
            D[k.strip()] = v.replace('⏎', '\n')
    return D

KEEP = re.compile(r'^[\s۰-۹0-9٫٬.,:;٪%+\-−–/×()\[\]«»"\'*#@!?؟،؛]*$')

LATIN = str.maketrans({**{chr(0x06F0 + k): str(k) for k in range(10)}, **{chr(0x0660 + k): str(k) for k in range(10)}, '،': ',', '؛': ';', '؟': '?', '٪': '%', '٫': '.', '٬': ',', '«': '“', '»': '”'})

def esc(t): return t.replace('\n', '⏎').replace('\t', ' ')

def todo(m, limit=9000):
    src = open(os.path.join(SRC, m + '.js'), encoding='utf-8').read()
    D = load_dict(); seen = set(); rows = []; size = 0; left = 0
    for u in units(m):
        i = uid(u['t'])
        if i in D or i in seen or KEEP.match(u['t']): continue
        seen.add(i)
        if size > limit or len(rows) >= 330: left += 1; continue
        ctx = ''
        if u['k'] == 't':
            ctx = ' '.join('⟦%d⟧=%s' % (j, src[a:b][:60].replace('\n', ' ')) for j, (a, b) in enumerate(u['ex']))
        elif len(u['t']) < 14:
            a = max(0, u['s'] - 55); ctx = src[a:u['e'] + 35].replace('\n', ' ')
        rows.append('%s\t%s' % (i, esc(u['t'])) + ('\n#   ' + ctx if ctx else ''))
        size += len(u['t'])
    n = len(glob.glob(os.path.join(HERE, 'todo', m + '-*.txt')))
    f = os.path.join(HERE, 'todo', '%s-%02d.txt' % (m, n + 1))
    if rows: open(f, 'w', encoding='utf-8').write('\n'.join(rows) + '\n')
    print(f if rows else 'nothing', '| units', len(rows), 'chars', size, '| remaining after this', left)

def stats():
    D = load_dict(); tot = done = 0
    for m in MODS:
        us = {uid(u['t']): u['t'] for u in units(m) if not KEEP.match(u['t'])}
        d = sum(1 for k in us if k in D); tot += len(us); done += d
        print('%-8s %5d / %5d  (%d%%)' % (m, d, len(us), 100 * d // max(1, len(us))))
    print('ALL %d / %d' % (done, tot), 'dict', len(D))

def jsstr(t):
    return json.dumps(t, ensure_ascii=False).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')

def tplesc(t):
    return t.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def ltr(js):
    """متن انگلیسی چپ‌به‌راست: برچسب‌های شکل‌ها (direction=rtl و جابه‌جایی start/end) و dir=rtl در قالب‌ها"""
    js = re.sub(r"FLIP\[(p\.anchor \|\| 'middle')\]", r"(\1)", js)
    js = js.replace('direction="rtl"', 'direction="ltr"').replace('dir="rtl"', 'dir="ltr"')
    return js.replace('font-family="${FONT_FA}"', 'font-family="${FONT_EN}"')

def build_en(m, src_path=None, out_path=None, D=None):
    """نسخه انگلیسی یک حیطه: هر رشته/قالب فارسی با ترجمه‌اش عوض می‌شود (ترجمه نشده = همان فارسی)."""
    src_path = src_path or os.path.join(SRC, m + '.js')
    src = open(src_path, encoding='utf-8').read()
    D = D if D is not None else load_dict()
    us = sorted(units(m, src_path), key=lambda u: (u['s'], -u['e']))
    miss = []; bad = []
    seen = {}
    def tr(t):
        i = uid(t)
        if KEEP.match(t): return t.translate(LATIN)  # فقط رقم و نشانه: رقم لاتین و نشانه انگلیسی
        # ترجمه ویژه یک جای خاص: id@حیطه#شماره‌رخداد (مثلاً معنی کوتاه واژه‌نامه که نباید خود واژه باشد)
        seen[i] = seen.get(i, 0) + 1
        return D.get('%s@%s#%d' % (i, m, seen[i]), D.get(i + '@' + m, D.get(i)))
    def render(a, b):
        out = []; pos = a
        for u in us:
            if u['s'] < pos or u['e'] > b: continue
            out.append(src[pos:u['s']])
            en = tr(u['t'])
            if en is None: miss.append(u['t']); en = u['t']
            if u['k'] == 's':
                out.append(jsstr(en))
            else:
                ex = [render(x, y) for x, y in u['ex']]
                parts = re.split(r'⟦(\d+)⟧', en); t = '`'
                for j, p in enumerate(parts):
                    if j % 2 == 0: t += tplesc(p)
                    else:
                        k = int(p)
                        if k >= len(ex): bad.append((u['t'], en)); continue
                        t += '${' + ex[k] + '}'
                used = set(int(x) for x in re.findall(r'⟦(\d+)⟧', en))
                if used != set(range(len(ex))) and en != u['t']: bad.append((u['t'][:80], en[:80]))
                out.append(t + '`')
            pos = u['e']
        out.append(src[pos:b])
        return ''.join(out)
    js = ltr(render(0, len(src)))
    if out_path: open(out_path, 'w', encoding='utf-8').write(js)
    return js, miss, bad

FA_RE = re.compile('[\u0600-\u06FF]')

def check(name):
    """تکه کار todo/<name>.txt در برابر en/<name>.txt: همه شناسه‌ها، جای‌نگهدارها، بدون حرف فارسی"""
    rows = {}
    for ln in open(os.path.join(HERE, 'todo', name + '.txt'), encoding='utf-8').read().split('\n'):
        if ln and not ln.startswith('#'):
            k, v = ln.split('\t', 1); rows[k] = v
    en = {}
    for ln in open(os.path.join(HERE, 'en', name + '.txt'), encoding='utf-8').read().split('\n'):
        if ln.strip() and not ln.startswith('#'):
            if '\t' not in ln: print('NO TAB', ln[:60]); continue
            k, v = ln.split('\t', 1); k = k.split('@')[0]
            if k not in rows: print('UNKNOWN id', k)
            en[k] = v
    probs = 0
    for k, fa in rows.items():
        if k not in en: print('MISSING', k, fa[:70]); probs += 1; continue
        a = sorted(re.findall(r'⟦\d+⟧', fa)); b = sorted(set(re.findall(r'⟦\d+⟧', en[k])))
        if sorted(set(a)) != b: print('PLACEHOLDER', k, a, b); probs += 1
        if FA_RE.search(en[k]): print('PERSIAN LEFT', k, en[k][:80]); probs += 1
        ta = re.findall(r'</?[a-zA-Z][^>]*>', fa); tb = re.findall(r'</?[a-zA-Z][^>]*>', en[k])
        if len(ta) != len(tb): print('TAGS', k, len(ta), len(tb), en[k][:70]); probs += 1
    print(name, 'rows', len(rows), 'translated', len(en), 'problems', probs)

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'todo': todo(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 9000)
    elif cmd == 'stats': stats()
    elif cmd == 'check': check(sys.argv[2])
    elif cmd == 'occ':  # رخدادهای یک شناسه در یک حیطه با بافت کد
        m, i = sys.argv[2], sys.argv[3]
        src = open(os.path.join(SRC, m + '.js'), encoding='utf-8').read()
        us = sorted(units(m), key=lambda u: (u['s'], -u['e']))
        k = 0
        for u in us:
            if uid(u['t']) == i:
                k += 1; print('#%d' % k, src[max(0, u['s'] - 70):u['e'] + 30].replace('\n', ' '))
