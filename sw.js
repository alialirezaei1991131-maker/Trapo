/* آکادمی بالینی — کارگر سرویس (Service Worker) برای نصب PWA و اجرای ۱۰۰٪ آفلاین در بیمارستان
 * فقط روی http(s) ثبت می‌شود (روی file:// مرورگرها کارگر سرویس ندارند و برنامه بدون آن هم کار می‌کند).
 * راهبرد: همه فایل‌های برنامه هنگام نصب کش می‌شوند؛ درخواست‌ها اول از کش (Cache-first) پاسخ می‌گیرند
 * و نسخه تازه در پس‌زمینه گرفته می‌شود (stale-while-revalidate). با تغییر CACHE_VERSION، کش قبلی همین برنامه پاک می‌شود. */
/* به‌روزرسانی امن:
 *  - با افزودن دوره تازه یا هر تغییر فایل‌ها فقط CACHE_VERSION را بالا ببرید (و در صورت تمایل فایل دوره را به SHELL
 *    اضافه کنید؛ اگر نکنید، اولین بار که آنلاین باز شود خودکار کش می‌شود).
 *  - این کارگر فقط کش فایل‌های ایستای خودش (نام‌هایی که با CACHE_PREFIX شروع می‌شوند) را عوض یا پاک می‌کند.
 *  - به داده‌های کاربر (localStorage: academy_global_state، academy_license_data، academy_course_*) هیچ دسترسی‌ای
 *    ندارد و هرگز به آن‌ها دست نمی‌زند؛ اشتراک، الماس، زنجیره و پیشرفت با هر به‌روزرسانی سالم می‌ماند. */
const CACHE_PREFIX = 'academy-';
const CACHE_VERSION = CACHE_PREFIX + 'v1.2.0';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/fonts.css',
  './css/styles.css',
  './js/engine.js',
  './courses/data-yona.js',
  './courses/data-homa.js',
  './courses/data-negar.js',
  './courses/data-negar-img.js',
  './courses/data-grand-rounds.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.indexOf(CACHE_PREFIX) === 0 && k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // index.html?course=…، ?calc=… و #/… همه همان پوسته‌اند؛ پارامترها در جست‌وجوی کش نادیده گرفته می‌شوند
  event.respondWith(
    caches.open(CACHE_VERSION).then(cache =>
      cache.match(req, { ignoreSearch: true }).then(hit => {
        const net = fetch(req).then(res => {
          if (res && res.ok && res.type === 'basic') cache.put(req.url.split('?')[0], res.clone());
          return res;
        }).catch(() => hit || (req.mode === 'navigate' ? cache.match('./index.html') : undefined));
        return hit || net;
      })
    )
  );
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
