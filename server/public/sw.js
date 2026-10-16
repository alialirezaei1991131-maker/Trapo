/* تراپو — Service Worker نسخه هاست (برای نصب به‌صورت اپ)
 *  - هرگز /api و /manage را ذخیره نمی‌کند: محتوای دوره‌ها رمزنگاری‌شده و وابسته به نشست است و همیشه از سرور می‌آید
 *  - فقط پوسته ساده (فونت، آیکون، صفحه «اینترنت قطع است») برای باز شدن سریع و پیام بی‌اینترنت ذخیره می‌شود */
const CACHE = 'trapo-shell-v3';
const SHELL = ['offline.html', 'css/fonts.css', 'auth.css', 'appicons/icon-192.png', 'appicons/icon-512.png', 'manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('trapo-shell-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin || /\/(api|manage)\//.test(u.pathname)) return;
  if (r.mode === 'navigate') { e.respondWith(fetch(r).catch(() => caches.match('offline.html'))); return; }
  // صفحه ورود (auth.css / auth.js): همیشه اول از سرور، نسخه ذخیره‌شده فقط وقتی اینترنت قطع است
  if (/\/auth\.(css|js)$/.test(u.pathname)) { e.respondWith(fetch(r).catch(() => caches.match(r, { ignoreSearch: true }))); return; }
  if (/\/(css|icons)\//.test(u.pathname)) {
    e.respondWith(caches.match(r).then(hit => {
      const net = fetch(r).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(r, res.clone())); return res; });
      return hit || net;
    }));
  }
});
