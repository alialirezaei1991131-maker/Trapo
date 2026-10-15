/* تراپو — بارگذار نسخه هاست
 * فایل‌های برنامه را از /api (فقط برای کاربر واردشده) می‌گیرد، با کلید همین نشست (AES-256-GCM) باز می‌کند
 * و به ترتیب اجرا می‌کند. پیش از موتور، پیشرفت ذخیره‌شده روی سرور (اگر تازه‌تر باشد) برگردانده می‌شود.
 * این فایل هنگام ساخت (tools/build-server.js) درهم و ناخوانا می‌شود. */
(function () {
  'use strict';
  var S = window.TRAPO_SERVER;
  if (!S || !S.ck || !window.crypto || !crypto.subtle) { document.body.innerHTML = '<p style="padding:24px;text-align:center">مرورگر شما پشتیبانی نمی‌شود؛ لطفاً کروم، اج یا فایرفاکس تازه را به کار ببرید. · Please use an up-to-date browser.</p>'; return; }
  var hex = function (h) { var u = new Uint8Array(h.length / 2); for (var i = 0; i < u.length; i++) u[i] = parseInt(h.substr(i * 2, 2), 16); return u; };
  var keyP = crypto.subtle.importKey('raw', hex(S.ck), { name: 'AES-GCM' }, false, ['decrypt']);
  delete S.ck; // کلید فقط درون این بارگذار می‌ماند
  var done = window.TRAPO_LOADED = {};

  function b64(s) { var bin = atob(s.trim()), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }
  async function get(f) {
    var r = await fetch('api/?a=asset&f=' + encodeURIComponent(f), { credentials: 'same-origin', cache: 'no-store' });
    if (r.status === 401) { location.reload(); throw new Error('auth'); }
    if (!r.ok) throw new Error(f + ' ' + r.status);
    var b = b64(await r.text());
    var pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b.subarray(0, 12) }, await keyP, b.subarray(12));
    return new TextDecoder().decode(pt);
  }
  function run(code) {
    return new Promise(function (res) {
      var u = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
      var s = document.createElement('script');
      s.src = u;
      s.onload = s.onerror = function () { URL.revokeObjectURL(u); s.remove(); res(); };
      document.head.appendChild(s);
    });
  }
  /** دریافت هم‌زمان، اجرا به ترتیب؛ فایل ممنوع (مثلاً حیطه بدون اشتراک) بی‌صدا رد می‌شود */
  async function load(list) {
    var todo = list.filter(function (f) { return !done[f]; });
    var codes = todo.map(function (f) { return get(f).catch(function () { return null; }); });
    for (var i = 0; i < todo.length; i++) { var c = await codes[i]; done[todo[i]] = 1; if (c) await run(c); }
  }
  window.TRAPO_LOAD = load;

  async function progress() {
    try {
      var r = await fetch('api/?a=progress', { credentials: 'same-origin', cache: 'no-store' });
      var j = await r.json();
      if (!j.ok) return;
      var meta = {};
      try { meta = JSON.parse(localStorage.getItem('academy.sync') || '{}') || {}; } catch (e) { /* */ }
      Object.keys(j.items).forEach(function (k) {
        var it = j.items[k];
        if (!meta[k] || it.at > meta[k]) { localStorage.setItem(k, it.v); meta[k] = it.at; }
      });
      localStorage.setItem('academy.sync', JSON.stringify(meta));
    } catch (e) { /* بدون اینترنت: پیشرفت همین دستگاه */ }
  }

  (async function () {
    await progress();
    await load(S.files.data);
    var m = /[?&](?:course|calc)=([\w-]+)/.exec(location.search);
    if (m) {
      var c = (window.ACADEMY_COURSES || {})[m[1]] || (window.ACADEMY_SUBCOURSES || {})[m[1]];
      var en = false; try { en = JSON.parse(localStorage.getItem('academy_global_state') || '{}').lang === 'en'; } catch (e) { /* */ }
      var list = c && ((en && c.assetsEn) || c.assets);
      if (list) await load(list);
    }
    await load(S.files.engine);
  })();
})();
