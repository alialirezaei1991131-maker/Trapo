#!/usr/bin/env node
/* لوگوی Therapo: «جغدپو»، جغد دانا با عینک گرد و گوشی پزشکی روی کاشی رنگی Therapo.
 * owlSVG(...) نشانه‌گذاری SVG را می‌دهد (برای engine.js و نماهای PHP همین خروجی کپی شده است).
 * اجرا: node tools/logo.js  ← آیکن‌های اپ (svg و png و maskable) و تصویر اشتراک‌گذاری og.png را می‌سازد. */
'use strict';
const fs = require('fs');
const path = require('path');

const K = '#1d2b3a';
/** بدن جغد در جعبه ۱۲۸×۱۲۸ (بدون کاشی) */
function owlBody(uid) {
  return `<path d="M33 50C27 38 27 27 30 17c9 6 17 14 23 23z" fill="#fff"/><path d="M95 50c6-12 6-23 3-33-9 6-17 14-23 23z" fill="#fff"/>`
    + `<ellipse cx="29" cy="84" rx="10" ry="18" fill="#d6f2ec" transform="rotate(18 29 84)"/><ellipse cx="99" cy="84" rx="10" ry="18" fill="#d6f2ec" transform="rotate(-18 99 84)"/>`
    + `<ellipse cx="64" cy="74" rx="38" ry="40" fill="#fff"/>`
    + `<ellipse cx="64" cy="101" rx="19" ry="11" fill="#e3f6f2"/><path d="M57 99q7 4 14 0M57 106q7 4 14 0" stroke="#bfe6df" stroke-width="2" fill="none" stroke-linecap="round"/>`
    + `<circle cx="49" cy="64" r="15" fill="#fff" stroke="#8e2c6e" stroke-width="4"/><circle cx="79" cy="64" r="15" fill="#fff" stroke="#8e2c6e" stroke-width="4"/><path d="M60 62q4-3 8 0" stroke="#8e2c6e" stroke-width="4" fill="none" stroke-linecap="round"/>`
    + `<g class="owl-eyes"><ellipse cx="49" cy="65" rx="6.5" ry="7.8" fill="${K}"/><ellipse cx="79" cy="65" rx="6.5" ry="7.8" fill="${K}"/><circle cx="51.5" cy="61.5" r="2.6" fill="#fff"/><circle cx="81.5" cy="61.5" r="2.6" fill="#fff"/><circle cx="47" cy="68" r="1.1" fill="#fff"/><circle cx="77" cy="68" r="1.1" fill="#fff"/></g>`
    + `<ellipse cx="37" cy="82" rx="6" ry="3.6" fill="#ff8fab" opacity=".75"/><ellipse cx="91" cy="82" rx="6" ry="3.6" fill="#ff8fab" opacity=".75"/>`
    + `<path d="M58.6 79h10.8c1.3 0 2 1.5 1.2 2.5l-5.4 7c-.6.8-1.8.8-2.4 0l-5.4-7c-.8-1 0-2.5 1.2-2.5z" fill="#ffb020"/>`
    + `<path d="M57.5 91.5q6.5 5 13 0" stroke="${K}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    + `<path d="M36 86c2 18 14 26 28 26s26-8 28-26" stroke="#12b3a8" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="64" cy="112" r="6" fill="#12b3a8"/><circle cx="64" cy="112" r="2.4" fill="#fff"/>`
    + `<path d="M106 16l2.2 5.3 5.3 2.2-5.3 2.2-2.2 5.3-2.2-5.3-5.3-2.2 5.3-2.2z" fill="#ffd23f"/>`;
}
const grad = id => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient>`;

/** لوگوی کامل؛ maskable: کاشی تمام‌صفحه و جغد کوچک‌تر در ناحیه امن */
function owlSVG({ size = 128, id = 'acg', maskable = false, attrs = '' } = {}) {
  const tile = maskable ? `<rect width="128" height="128" fill="url(#${id})"/>` : `<rect width="128" height="128" rx="36" fill="url(#${id})"/>`;
  const body = maskable ? `<g transform="translate(64 66) scale(.72) translate(-64 -66)">${owlBody(id)}</g>` : owlBody(id);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="${size}" height="${size}"${attrs ? ' ' + attrs : ''}><defs>${grad(id)}</defs>${tile}${body}</svg>`;
}

async function build() {
  const root = path.join(__dirname, '..');
  const icons = path.join(root, 'src', 'icons');
  fs.writeFileSync(path.join(icons, 'icon.svg'), owlSVG({ size: 512, id: 'g' }));
  const { chromium } = require('playwright');
  const b = await chromium.launch();
  const shot = async (html, file, w, h) => {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:transparent}</style></head><body>${html}</body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: file, omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
    await p.close();
  };
  await shot(owlSVG({ size: 192, id: 'a' }), path.join(icons, 'icon-192.png'), 192, 192);
  await shot(owlSVG({ size: 512, id: 'b' }), path.join(icons, 'icon-512.png'), 512, 512);
  await shot(owlSVG({ size: 512, id: 'c', maskable: true }), path.join(icons, 'icon-512-maskable.png'), 512, 512);
  // تصویر اشتراک‌گذاری (og:image) سایت: لوگو، شعار و شخصیت پنج دوره
  const fontCss = fs.readFileSync(path.join(root, 'src', 'css', 'fonts.css'), 'utf8').replace(/url\((?!data:)\.\.\/fonts\//g, 'url(file://' + path.join(root, 'src', 'fonts') + '/');
  const img = path.join(root, 'server', 'public', 'img');
  const mascot = id => fs.readFileSync(path.join(img, `m-${id}.svg`), 'utf8');
  const courses = [['yona', 'یونا', '#58a700'], ['homa', 'هما', '#d33131'], ['negar', 'نگار', '#8e2c6e'], ['termino', 'ترمینو', '#4f5bd5'], ['ritma', 'ریتما', '#e0436b']];
  const og = `<style>${fontCss}
    .og{width:1200px;height:630px;box-sizing:border-box;padding:56px 70px;direction:rtl;font-family:Vazirmatn,sans-serif;color:#13202b;
      background:radial-gradient(circle at 100% 0,#e3fbd0 0,transparent 38%),radial-gradient(circle at 0 100%,#fbe1ef 0,transparent 40%),#eef8f7;display:flex;flex-direction:column;gap:14px}
    .hd{display:flex;align-items:center;gap:22px}.hd b{font:900 84px/1 Nunito,Vazirmatn,sans-serif;letter-spacing:-1px}
    h1{margin:6px 0 0;font-size:46px;font-weight:900;line-height:1.45}p{margin:0;font-size:26px;font-weight:700;color:#4a5963}
    .row{margin-top:auto;display:flex;gap:18px;align-items:flex-end}
    .c{width:150px;height:150px;border-radius:26px;background:#fff;box-shadow:0 10px 30px -18px rgba(0,0,0,.35);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;font-weight:900;font-size:22px}
    .c svg{width:88px;height:88px}
    .go{white-space:nowrap;margin-inline-start:auto;align-self:center;background:#12b3a8;color:#fff;font-weight:900;font-size:30px;padding:20px 38px;border-radius:22px;box-shadow:0 7px 0 #0b8078}</style>
    <div class="og"><div class="hd">${owlSVG({ size: 120, id: 'og' })}<b>Therapo</b></div>
    <h1>مهارت‌های بالینی را با درس‌های سه‌دقیقه‌ای یاد بگیر</h1>
    <p>الکترولیت · گاز خون · معاینه تغذیه‌محور · ترمینولوژی پزشکی · نوار قلب</p>
    <div class="row">${courses.map(([id, fa, col]) => `<div class="c">${mascot(id)}<span style="color:${col}">${fa}</span></div>`).join('')}<span class="go">شروع رایگان</span></div></div>`;
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0">${og}</body></html>`);
  await p.waitForTimeout(600);
  await p.screenshot({ path: path.join(img, 'og.png') });
  await p.close();
  // بسته لوگو برای فروشگاه‌ها، شبکه‌های اجتماعی و پروفایل تلگرام و بله (brand/)
  const out = path.join(root, 'brand');
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'therapo-logo.svg'), owlSVG({ size: 1024, id: 'g' }));
  fs.writeFileSync(path.join(out, 'therapo-avatar.svg'), owlSVG({ size: 1024, id: 'g', maskable: true }));
  await shot(owlSVG({ size: 1024, id: 'd' }), path.join(out, 'therapo-logo-1024.png'), 1024, 1024);
  await shot(owlSVG({ size: 512, id: 'e' }), path.join(out, 'therapo-logo-512.png'), 512, 512);
  await shot(owlSVG({ size: 1024, id: 'f', maskable: true }), path.join(out, 'therapo-avatar-1024.png'), 1024, 1024);
  const word = (col, bg) => `<style>${fontCss}</style><div style="width:1400px;height:400px;display:flex;align-items:center;justify-content:center;gap:56px;background:${bg}">${owlSVG({ size: 300, id: 'w' + col.slice(1) })}<b style="font:900 190px/1 Nunito,Vazirmatn,sans-serif;letter-spacing:-3px;color:${col}">Therapo</b></div>`;
  await shot(word('#13202b', 'transparent'), path.join(out, 'therapo-wordmark.png'), 1400, 400);
  await shot(word('#ffffff', 'transparent'), path.join(out, 'therapo-wordmark-white.png'), 1400, 400);
  await b.close();
  console.log('logo: src/icons (svg, 192, 512, maskable) + server/public/img/og.png + brand/');
}

module.exports = { owlSVG, owlBody };
if (require.main === module) build().catch(e => { console.error(e); process.exit(1); });
