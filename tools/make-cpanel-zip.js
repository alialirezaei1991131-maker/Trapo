#!/usr/bin/env node
/*
 * تراپو — بسته آماده بارگذاری در File Manager هاست cPanel (بدون نیاز به Git)
 *   node tools/make-cpanel-zip.js          (اول: npm run build و npm run build:server)
 *
 * خروجی: deploy/trapo-cpanel.zip با دو پوشه، همان چیدمان .cpanel.yml:
 *   public_html/   ← محتوای server/public (تنها بخشی که از وب دیده می‌شود)
 *   trapo_app/     ← lib، private، data (فقط .htaccess)، config.sample.php و راهنمای نصب؛ بیرون از وب
 * این فایل در «پوشه خانه» هاست (نه داخل public_html) باز می‌شود. config.php و پایگاه داده در بسته نیستند،
 * پس باز کردن نسخه تازه روی نسخه قبلی آن‌ها را دست نمی‌زند.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..'), SRV = path.join(ROOT, 'server');
const OUT = path.join(ROOT, 'deploy', 'trapo-cpanel.zip');
const walk = (d, base = '') => fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name), path.posix.join(base, e.name)) : [path.posix.join(base, e.name)]);

if (!fs.existsSync(path.join(SRV, 'private', 'app', 'shell.html'))) { console.error('server/private/app not built: run npm run build && npm run build:server'); process.exit(1); }

const entries = []; // [نام در بسته، مسیر روی دیسک]
walk(path.join(SRV, 'public')).forEach(f => entries.push(['public_html/' + f, path.join(SRV, 'public', f)]));
['lib', 'private'].forEach(d => walk(path.join(SRV, d)).forEach(f => entries.push([`trapo_app/${d}/${f}`, path.join(SRV, d, f)])));
entries.push(['trapo_app/.htaccess', path.join(SRV, '.htaccess')]);
entries.push(['trapo_app/data/.htaccess', path.join(SRV, 'data', '.htaccess')]);
entries.push(['trapo_app/config.sample.php', path.join(SRV, 'config.sample.php')]);
entries.push(['trapo_app/README-INSTALL.txt', path.join(SRV, 'INSTALL-cpanel.txt')]);
// پوشه‌ها هم صریح در بسته باشند (بعضی استخراج‌کننده‌ها بدون آن پوشه نمی‌سازند)
const dirs = [...new Set(entries.flatMap(([n]) => n.split('/').slice(0, -1).map((_, i, a) => a.slice(0, i + 1).join('/') + '/')))].sort();
entries.unshift(...dirs.map(d => [d, null]));
for (const [name] of entries) if (/(^|\/)config\.php$|\.sqlite|admin-key/i.test(name)) { console.error('refusing to pack secret file:', name); process.exit(1); }

// نوشتن ZIP (بدون وابستگی): فشرده‌سازی deflate، نام فایل UTF-8
// زمان فایل‌ها = زمان ساخت بسته؛ اگر ثابت باشد، کش PHP هاست (opcache) فایل تازه را با فایل قبلی یکی می‌گیرد و کد قدیمی را اجرا می‌کند
const NOW = new Date();
const DOS_TIME = NOW.getHours() << 11 | NOW.getMinutes() << 5 | Math.floor(NOW.getSeconds() / 2);
const DOS_DATE = (NOW.getFullYear() - 1980) << 9 | (NOW.getMonth() + 1) << 5 | NOW.getDate();
// فایل‌های عمومی سایت در بسته فشرده و ناخوانا می‌شوند (منبع خوانا فقط در مخزن می‌ماند):
// CSS و HTML فشرده؛ JS (جز loader.js که از قبل درهم است) درهم و یک‌خطی
const MIN = require('./minify');
let JO = null; try { JO = require('javascript-obfuscator'); } catch (e) { console.warn('javascript-obfuscator not found (set NODE_PATH): public JS packed unminified'); }
function pack(name, file) {
  const raw = fs.readFileSync(file);
  if (!name.startsWith('public_html/')) return raw;
  if (/\.css$/.test(name)) return Buffer.from(MIN.css(raw.toString('utf8')), 'utf8');
  if (/\.html$/.test(name)) return Buffer.from(MIN.html(raw.toString('utf8')), 'utf8');
  if (/\.js$/.test(name) && !/\/loader\.js$/.test(name) && JO) {
    return Buffer.from(JO.obfuscate(raw.toString('utf8'), { compact: true, simplify: true, stringArray: true, stringArrayThreshold: 1, stringArrayEncoding: ['base64'],
      identifierNamesGenerator: 'hexadecimal', renameGlobals: false, seed: 11, target: /\/sw\.js$/.test(name) ? 'service-worker' : 'browser' }).getObfuscatedCode(), 'utf8');
  }
  return raw;
}
const parts = [], central = []; let off = 0;
for (const [name, file] of entries) {
  const data = file ? pack(name, file) : Buffer.alloc(0), nameB = Buffer.from(name, 'utf8');
  const def = zlib.deflateRawSync(data, { level: 9 }), useDef = def.length < data.length, body = useDef ? def : data;
  const crc = zlib.crc32(data) >>> 0;
  const lh = Buffer.alloc(30); lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0x0800, 6); lh.writeUInt16LE(useDef ? 8 : 0, 8);
  lh.writeUInt16LE(DOS_TIME, 10); lh.writeUInt16LE(DOS_DATE, 12); lh.writeUInt32LE(crc, 14); lh.writeUInt32LE(body.length, 18); lh.writeUInt32LE(data.length, 22);
  lh.writeUInt16LE(nameB.length, 26); lh.writeUInt16LE(0, 28);
  parts.push(lh, nameB, body);
  const ch = Buffer.alloc(46); ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(0x0314, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0x0800, 8); ch.writeUInt16LE(useDef ? 8 : 0, 10);
  ch.writeUInt16LE(DOS_TIME, 12); ch.writeUInt16LE(DOS_DATE, 14); ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(body.length, 20); ch.writeUInt32LE(data.length, 24);
  ch.writeUInt16LE(nameB.length, 28); ch.writeUInt32LE(((file ? 0o100644 : 0o40755) << 16) >>> 0, 38); ch.writeUInt32LE(off, 42);
  central.push(ch, nameB);
  off += 30 + nameB.length + body.length;
}
const cd = Buffer.concat(central), end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10); end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(off, 16);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.concat([...parts, cd, end]));
console.log('cpanel zip:', path.relative(ROOT, OUT), entries.length - dirs.length, 'files,', dirs.length, 'folders,', (fs.statSync(OUT).size / 1048576).toFixed(1), 'MB');
