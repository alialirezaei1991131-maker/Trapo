/* تراپو — فشرده‌سازی ساده و امن HTML و CSS برای نسخه منتشرشده (بدون وابستگی)
 * فقط فاصله‌ها و نظرهای قالب‌بندی حذف می‌شوند؛ متن‌ها و فاصله‌های داخل یک خط دست نمی‌خورند. */
'use strict';
/** CSS: نظرها و فاصله‌های اضافه حذف؛ رشته‌ها و url() دست نمی‌خورند */
function css(src) {
  const keep = [];
  let s = String(src).replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|url\([^)]*\)/g, m => { keep.push(m); return `\u0000${keep.length - 1}\u0000`; });
  s = s.replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};,>])\s*/g, '$1')
    .replace(/:\s+/g, ':')
    .replace(/;}/g, '}')
    .trim();
  return s.replace(/\u0000(\d+)\u0000/g, (m, i) => keep[+i]);
}
/** HTML: نظرها و فاصله‌های قالب‌بندی بین برچسب‌ها (شامل شکست خط) حذف؛ <pre> و <textarea> دست نمی‌خورند */
function html(src) {
  const keep = [];
  let s = String(src).replace(/<(pre|textarea)[\s\S]*?<\/\1>/gi, m => { keep.push(m); return `\u0000${keep.length - 1}\u0000`; });
  s = s.replace(/<!--(?!\[)[\s\S]*?-->/g, '')
    .replace(/>\s*[\r\n]+\s*</g, '><')
    .replace(/^\s+/gm, '')
    .replace(/[\r\n]+/g, '\n')
    .trim();
  return s.replace(/\u0000(\d+)\u0000/g, (m, i) => keep[+i]);
}
module.exports = { css, html };
