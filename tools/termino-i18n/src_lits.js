// رشته‌ها و قالب‌های فارسی در کد منبع هر حیطه (واحد ترجمه)
const acorn = require(process.env.NODE_PATH + '/acorn');
const fs = require('fs');
const FA = /[؀-ۿ]/;
const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');
const ast = acorn.parse(src, { ecmaVersion: 2022, sourceType: 'script', ranges: true });
const units = [];
// جای‌ها به شمار نویسه (code point) برای پایتون؛ acorn واحد UTF-16 می‌شمارد
const hs = []; for (let i = 0; i < src.length; i++) { const c = src.charCodeAt(i); if (c >= 0xD800 && c <= 0xDBFF) { hs.push(i); i++; } }
const cp = i => { let lo = 0, hi = hs.length; while (lo < hi) { const m = (lo + hi) >> 1; if (hs[m] < i) lo = m + 1; else hi = m; } return i - lo; };
(function walk(n, parent) {
  if (!n || typeof n.type !== 'string') return;
  if (n.type === 'Literal' && typeof n.value === 'string' && FA.test(n.value)) units.push({ k: 's', s: cp(n.start), e: cp(n.end), t: n.value });
  else if (n.type === 'TemplateLiteral') {
    if (n.quasis.some(q => FA.test(q.value.cooked || ''))) {
      // متن قالب با جای‌نگهدار ⟦i⟧ برای عبارت‌ها
      let t = ''; n.quasis.forEach((q, i) => { t += q.value.cooked; if (i < n.expressions.length) t += '⟦' + i + '⟧'; });
      units.push({ k: 't', s: cp(n.start), e: cp(n.end), t, ex: n.expressions.map(x => [cp(x.start), cp(x.end)]) });
    }
  }
  for (const k in n) { if (k === 'parent') continue; const v = n[k]; if (Array.isArray(v)) v.forEach(c => c && typeof c.type === 'string' && walk(c, n)); else if (v && typeof v.type === 'string') walk(v, n); }
})(ast);
process.stdout.write(JSON.stringify(units));
