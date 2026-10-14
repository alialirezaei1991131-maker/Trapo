#!/usr/bin/env node
/*
 * تراپو — ساخت نسخه هاست (server/) از روی نسخه درهم‌شده کاربران (app/)
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
['css', 'icons'].forEach(d => { rm(path.join(PUB, d)); walk(path.join(APP, d)).forEach(f => cp(path.join(APP, d, f), path.join(PUB, d, f))); });
cp(path.join(APP, 'manifest.json'), path.join(PUB, 'manifest.json'));

// ۳. قالب صفحه
let html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
const srcs = [];
html = html.replace(/<!--[\s\S]*?-->/g, '');  // نظرها (و نمونه‌های درونشان) حذف می‌شوند
html = html.replace(/<script src="([^"]+)"><\/script>\s*/g, (m, src) => { srcs.push(src); return ''; });
// بارگذار فایل‌های جانبی دوره (document.write) در نسخه هاست کار بارگذار است
html = html.replace(/<script>\s*\/\* فایل‌های جانبی دوره[\s\S]*?<\/script>\s*/, '');
html = html.replace(/<script>/g, '<script nonce="{{NONCE}}">');
const files = { data: srcs.filter(s => s !== 'js/engine.js'), engine: ['js/engine.js'] };
if (!files.data.length || !srcs.includes('js/engine.js')) { console.error('unexpected index.html scripts', srcs); process.exit(1); }
html = html.replace('</body>', `<script nonce="{{NONCE}}">window.TRAPO_SERVER = {{CFG}};</script>\n<script src="loader.js?v={{VER}}"></script>\n</body>`);
fs.writeFileSync(path.join(PRIV, 'shell.html'), html);
fs.writeFileSync(path.join(PRIV, 'files.json'), JSON.stringify(files));

// ۴. بارگذار درهم‌شده
const JO = require('javascript-obfuscator');
const loader = fs.readFileSync(path.join(__dirname, 'server-loader.js'), 'utf8');
fs.writeFileSync(path.join(PUB, 'loader.js'), JO.obfuscate(loader, { compact: true, controlFlowFlattening: true, stringArray: true, stringArrayEncoding: ['base64'], identifierNamesGenerator: 'hexadecimal', target: 'browser' }).getObfuscatedCode());

// ۵. نسخه پیش‌نمایش دوره‌ها (courses/*.preview.js) را assemble می‌سازد و همراه بقیه به private/app می‌آید

const ver = Date.now().toString(36);
fs.writeFileSync(path.join(PRIV, 'version.txt'), ver);
console.log('server build ok:', walk(PRIV).length, 'private files,', files.data.length, 'data scripts, version', ver);
