/* Therapo — جان‌بخشی صفحه معرفی و صفحه دوره‌ها: نمایش تدریجی بخش‌ها هنگام اسکرول و شمارش عددها
 * بدون این فایل هم همه چیز دیده می‌شود (کلاس‌ها فقط وقتی اضافه می‌شوند که مرورگر پشتیبانی کند). */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var root = document.documentElement; root.classList.add('lp-anim');
  var sel = '.lp-sec > h2, .lp-sec > .lp-sub, .lp-c, .lp-why li, .lp-steps li, .lp-faq details, .lp-plan, .lp-x, .lp-note, .lp-end > *, .cp-out li, .cp-aud, .cp-hl li, .cp-syl > li, .cp-tools li, .cp-mc';
  var els = document.querySelectorAll(sel);
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (!e.isIntersecting) return; e.target.classList.add('is-in'); io.unobserve(e.target); });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  // پشت‌سرهم ظاهر شدن کارت‌های هم‌ردیف
  var groups = new Map();
  els.forEach(function (el) {
    var k = el.parentNode, i = groups.get(k) || 0; groups.set(k, i + 1);
    el.classList.add('rv'); el.style.setProperty('--rvd', Math.min(i, 8) * 70 + 'ms');
    io.observe(el);
  });
  // شمارش عددها (۴، ۹۴۵، +۸٬۸۰۰ …) وقتی دیده می‌شوند
  var fa = '۰۱۲۳۴۵۶۷۸۹';
  var toN = function (s) { return Number(String(s).replace(/[۰-۹]/g, function (d) { return fa.indexOf(d); }).replace(/[^\d]/g, '')); };
  var fmt = function (n) { return n.toLocaleString('fa-IR').replace(/,/g, '٬'); };
  var nums = document.querySelectorAll('.lp-nums b');
  var io2 = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return; io2.unobserve(e.target);
      var el = e.target, txt = el.textContent, n = toN(txt); if (!n || !/[۰-۹]/.test(txt)) return;
      var plus = /\+/.test(txt), t0 = performance.now(), dur = 1300;
      (function step(t) {
        var p = Math.min(1, (t - t0) / dur), v = Math.round(n * (1 - Math.pow(1 - p, 3)));
        el.textContent = (plus ? '+' : '') + fmt(v);
        if (p < 1) requestAnimationFrame(step); else el.textContent = txt;
      })(t0);
    });
  }, { threshold: 0.4 });
  nums.forEach(function (b) { io2.observe(b); });
  // صحنه‌های متحرک فقط وقتی دیده می‌شوند پخش می‌شوند
  var io3 = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('is-play', e.isIntersecting); }); }, { threshold: 0.05 });
  document.querySelectorAll('.sc').forEach(function (s) { io3.observe(s); });
})();
