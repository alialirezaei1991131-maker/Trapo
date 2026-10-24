#!/usr/bin/env node
/*
 * Therapo — ساخت نسخه هاست (server/) از روی نسخه درهم‌شده کاربران (app/)
 *   node tools/build-server.js        (اول: node tools/build.js)
 *
 *  - کد برنامه (موتور، دوره‌ها، تصویرها) ← server/private/app (آدرس مستقیم ندارد؛ فقط از /api و رمزنگاری‌شده)
 *  - فایل‌های عمومی بی‌خطر (CSS، فونت، آیکون، manifest) ← server/public
 *  - قالب صفحه برنامه (shell.html): همه <script src> حذف و فهرستشان به بارگذار داده می‌شود؛
 *    اسکریپت‌های درون‌خطی nonce می‌گیرند (CSP سخت‌گیر)
 *  - بارگذار (server-loader.js) درهم و ناخوانا می‌شود
 *  - نسخه پیش‌نمایش دوره‌ها (فقط درس رایگان، بدون پرونده‌ها) برای کاربران بدون اشتراک هم کپی می‌شود
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const APP = path.resolve(ROOT, process.env.TRAPO_APP || 'app'), SRV = path.join(ROOT, 'server');
const PRIV = path.join(SRV, 'private', 'app'), PUB = path.join(SRV, 'public');

const rm = p => fs.rmSync(p, { recursive: true, force: true });
const cp = (a, b) => { fs.mkdirSync(path.dirname(b), { recursive: true }); fs.copyFileSync(a, b); };
const walk = (d, base = '') => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name), path.join(base, e.name)) : [path.join(base, e.name)]);

if (!fs.existsSync(path.join(APP, 'index.html'))) { console.error('app/ not built: run node tools/build.js'); process.exit(1); }

// ۱. کد خصوصی
rm(PRIV);
fs.mkdirSync(PRIV, { recursive: true });
walk(path.join(APP, 'js')).forEach(f => cp(path.join(APP, 'js', f), path.join(PRIV, 'js', f)));
walk(path.join(APP, 'courses')).forEach(f => cp(path.join(APP, 'courses', f), path.join(PRIV, 'courses', f)));

// ۲. فایل‌های عمومی
// آیکون‌ها در public/appicons (نه icons/: در بسیاری از هاست‌های Apache و cPanel نشانی /icons/ مال خود سرور است و 404 می‌دهد)
rm(path.join(PUB, 'icons'));
[['css', 'css'], ['icons', 'appicons']].forEach(([d, to]) => { rm(path.join(PUB, to)); walk(path.join(APP, d)).forEach(f => cp(path.join(APP, d, f), path.join(PUB, to, f))); });
// مانیفست نسخه هاست (نصب به‌صورت اپ روی گوشی، تبلت، لپ‌تاپ و دسکتاپ): آدرس شروع index.php است، نه index.html
{
  const mf = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
  mf.icons = mf.icons.map(i => Object.assign({}, i, { src: i.src.replace(/^icons\//, 'appicons/') }));
  Object.assign(mf, {
    name: 'Therapo · آکادمی آموزش بالینی', short_name: 'Therapo', id: '/', start_url: './?source=pwa', scope: './',
    description: 'آموزش تعاملی اصلاح الکترولیت (یونا)، تفسیر گاز خون (هما)، معاینه تغذیه‌محور (نگار)، ترمینولوژی پزشکی (ترمینو) و تفسیر نوار قلب (ریتما) با درس‌های کوتاه، بیمار واقعی‌نما و گواهی پایان دوره.',
    shortcuts: [['یونا · الکترولیت', 'یونا', 'yona'], ['هما · گاز خون', 'هما', 'homa'], ['نگار · معاینه تغذیه‌محور', 'نگار', 'negar'], ['ترمینو · ترمینولوژی پزشکی', 'ترمینو', 'termino'], ['ریتما · نوار قلب', 'ریتما', 'ritma']]
      .map(([name, short_name, c]) => ({ name, short_name, url: './?course=' + c, icons: [{ src: 'appicons/icon-192.png', sizes: '192x192' }] }))
  });
  fs.writeFileSync(path.join(PUB, 'manifest.json'), JSON.stringify(mf, null, 2));
}

// ۳. قالب صفحه
let html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
const srcs = [];
html = html.replace(/<!--[\s\S]*?-->/g, '');  // نظرها (و نمونه‌های درونشان) حذف می‌شوند
html = html.replace(/(href|src)="icons\//g, '$1="appicons/');  // آیکون‌ها از public/appicons
html = html.replace(/<script src="([^"]+)"><\/script>\s*/g, (m, src) => { srcs.push(src); return ''; });
// بارگذار فایل‌های جانبی دوره (document.write) در نسخه هاست کار بارگذار است
html = html.replace(/<script>\s*\/\* فایل‌های جانبی دوره[\s\S]*?<\/script>\s*/, '');
// اسکریپت‌ها و استایل‌های درون‌خطی فشرده و ناخوانا (مثل سایت‌های بزرگ؛ نمای «View Source» فقط یک خط فشرده است)
{
  const JO0 = require('javascript-obfuscator');
  html = html.replace(/<script>([\s\S]*?)<\/script>/g, (m, js) => '<script>' + JO0.obfuscate(js, { compact: true, simplify: true, stringArray: true, stringArrayThreshold: 1, identifierNamesGenerator: 'hexadecimal', renameGlobals: false, seed: 7, target: 'browser' }).getObfuscatedCode() + '</script>');
  html = html.replace(/<style>([\s\S]*?)<\/style>/g, (m, css) => '<style>' + require('./minify').css(css) + '</style>');
}
html = html.replace(/<title>[^<]*<\/title>/, '<title>Therapo · آکادمی آموزش بالینی</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Therapo، آکادمی آموزش بالینی: الکترولیت، گاز خون، معاینه تغذیه‌محور، ترمینولوژی پزشکی و نوار قلب با درس‌های کوتاه، بیمار واقعی‌نما و گواهی پایان دوره.">');
html = html.replace(/<script>/g, '<script nonce="{{NONCE}}">');
const files = { data: srcs.filter(s => s !== 'js/engine.js'), engine: ['js/engine.js'] };
if (!files.data.length || !srcs.includes('js/engine.js')) { console.error('unexpected index.html scripts', srcs); process.exit(1); }
html = html.replace('</body>', `<script nonce="{{NONCE}}">window.TRAPO_SERVER = {{CFG}};</script>\n<script src="loader.js?v={{VER}}"></script>\n</body>`);
fs.writeFileSync(path.join(PRIV, 'shell.html'), require('./minify').html(html));
fs.writeFileSync(path.join(PRIV, 'files.json'), JSON.stringify(files));

// ۴. بارگذار درهم‌شده
const JO = require('javascript-obfuscator');
const loader = fs.readFileSync(path.join(__dirname, 'server-loader.js'), 'utf8');
fs.writeFileSync(path.join(PUB, 'loader.js'), JO.obfuscate(loader, { compact: true, controlFlowFlattening: true, stringArray: true, stringArrayEncoding: ['base64'], identifierNamesGenerator: 'hexadecimal', target: 'browser' }).getObfuscatedCode());

// ۵. نسخه پیش‌نمایش دوره‌ها (courses/*.preview.js) را assemble می‌سازد و همراه بقیه به private/app می‌آید

const ver = Date.now().toString(36);
fs.writeFileSync(path.join(PRIV, 'version.txt'), ver);
console.log('server build ok:', walk(PRIV).length, 'private files,', files.data.length, 'data scripts, version', ver);
