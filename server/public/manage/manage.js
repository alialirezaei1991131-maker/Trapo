/* تراپو — پنل مدیریت سرور (سفارش، پرداخت، معرف، کد تخفیف، کاربران) */
(function () {
  'use strict';
  var CSRF = '';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var nf = function (n) { return Number(n || 0).toLocaleString('fa-IR'); };
  var dt = function (t) { return t ? new Date(t * 1000).toLocaleString('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }) : '—'; };
  var TIER = { 1: 'آموزشی', 2: 'Pro', 3: 'الماس' }, DUR = { 1: '۱ ماه', 2: '۳ ماه', 3: '۶ ماه', 4: '۱ سال' };
  var ERR = { bad_credentials: 'رمز درست نیست.', rate_limited: 'تلاش زیاد بود؛ کمی بعد دوباره امتحان کنید.', forbidden: 'از این IP اجازه دسترسی نیست.', not_pending: 'این سفارش در انتظار پرداخت نیست.', promo_exists: 'این کد از قبل هست.', bad_promo: 'مقدارها درست نیست (کد ۳+ نویسه، درصد ۱ تا ۷۰).' };
  async function api(a, body, q) {
    var opt = { credentials: 'same-origin', headers: { Accept: 'application/json' } };
    if (body !== undefined) { opt.method = 'POST'; opt.headers['Content-Type'] = 'application/json'; opt.headers['X-CSRF'] = CSRF; opt.body = JSON.stringify(body); }
    var r = await fetch('../api/?a=' + a + (q || ''), opt);
    var j = {}; try { j = await r.json(); } catch (e) { j = { ok: false, err: 'server' }; }
    if (r.status === 401 && a !== 'm_login') { show(false); }
    return j;
  }
  function show(on) { $('#login').hidden = on; $('#app').hidden = !on; }
  function toast(t) { var d = document.createElement('div'); d.className = 'mg__toast'; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2600); }

  $('#lf').addEventListener('submit', async function (e) {
    e.preventDefault();
    var er = $('#lf .au__err'); er.hidden = true;
    var j = await api('m_login', { pass: this.pass.value });
    if (!j.ok) { er.textContent = ERR[j.err] || 'خطا'; er.hidden = false; return; }
    CSRF = j.csrf; this.pass.value = ''; show(true); tab('dash');
  });
  document.addEventListener('click', async function (e) {
    var t = e.target.closest('[data-tab]'); if (t) return tab(t.dataset.tab);
    if (e.target.closest('[data-out]')) { await api('m_logout', {}); CSRF = ''; show(false); return; }
    var b = e.target.closest('[data-act]'); if (!b) return;
    var a = b.dataset.act, id = b.dataset.id;
    if (a === 'paid') {
      var note = prompt('یادداشت پرداخت (اختیاری؛ مثلاً شماره پیگیری کارت‌به‌کارت):', '') ;
      if (note === null) return;
      var j = await api('m_paid', { order: id, note: note });
      toast(j.ok ? '✅ پرداخت ثبت شد' + (j.reward ? ' — پاداش معرف: ' + nf(j.reward) + ' تومان' : '') : (ERR[j.err] || 'خطا'));
      return tab('orders', st.ost);
    }
    if (a === 'cancel') { if (!confirm('سفارش ' + id + ' لغو شود؟ اعتبار کیف پول کاربر برمی‌گردد.')) return; var c = await api('m_cancel', { order: id }); toast(c.ok ? 'لغو شد' : (ERR[c.err] || 'خطا')); return tab('orders', st.ost); }
    if (a === 'copy') { navigator.clipboard.writeText(b.dataset.txt).then(function () { toast('📋 کپی شد؛ در پنل آفلاین مدیر بچسبانید'); }); return; }
    if (a === 'ost') return tab('orders', id);
    if (a === 'ptoggle') { await api('m_promo_toggle', { code: id }); return tab('promos'); }
  });
  var st = { ost: 'pending' };
  async function tab(name, arg) {
    document.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.toggle('is-on', b.dataset.tab === name); });
    var v = $('#view'); v.innerHTML = '<p class="mg__muted">⏳</p>';
    if (name === 'dash') {
      var s = await api('m_stats'); if (!s.ok) return;
      v.innerHTML = '<div class="mg__nums">' + [['کاربران', s.users], ['کاربر تازه (۷ روز)', s.users7], ['سفارش در انتظار', s.pending], ['سفارش پرداخت‌شده', s.paid], ['کل فروش (تومان)', s.revenue], ['فروش ۳۰ روز', s.revenue30], ['دعوت‌شده‌ها', s.referred], ['خرید از دعوت', s.referredPaid], ['اعتبار کیف پول کاربران', s.credit]]
        .map(function (n) { return '<div><b>' + nf(n[1]) + '</b><small>' + n[0] + '</small></div>'; }).join('') + '</div>' +
        '<h3>🏆 معرف‌های برتر</h3><table class="mg__t"><tr><th>نام</th><th>ورود</th><th>کد معرف</th><th>دعوت</th><th>خرید</th><th>پاداش (تومان)</th></tr>' +
        (s.top.map(function (r) { return '<tr><td>' + esc(r.name) + '</td><td dir="ltr">' + esc(r.login) + '</td><td dir="ltr">' + esc(r.ref_code) + '</td><td>' + nf(r.joined) + '</td><td>' + nf(r.paid) + '</td><td>' + nf(r.earned) + '</td></tr>'; }).join('') || '<tr><td colspan="6">هنوز دعوتی نیست</td></tr>') + '</table>';
    }
    if (name === 'orders') {
      st.ost = arg || st.ost;
      var o = await api('m_orders', undefined, '&status=' + st.ost); if (!o.ok) return;
      v.innerHTML = '<div class="mg__seg">' + [['pending', 'در انتظار پرداخت'], ['paid', 'پرداخت‌شده'], ['cancelled', 'لغوشده']].map(function (x) { return '<button data-act="ost" data-id="' + x[0] + '" class="' + (st.ost === x[0] ? 'is-on' : '') + '">' + x[1] + '</button>'; }).join('') + '</div>' +
        (o.orders.length ? o.orders.map(function (r) {
          var line = 'TRAPO-ORDER:' + r.dev_id + ':' + r.tier + ':' + r.mask + ':' + r.dur;
          var msg = '👤 نام: ' + r.name + '\n💰 مبلغ: ' + r.final_price + '\n🔢 کد سفارش: ' + r.order_code + '\n🔧 ' + line + (r.promo ? '\n🔧 TRAPO-PROMO:' + r.promo + ':' + r.promo_pct + ':' + r.final_price : '');
          return '<article class="mg__o"><header><b>' + esc(r.order_code) + '</b><span>' + dt(r.created_at) + '</span></header>' +
            '<p>👤 ' + esc(r.name) + ' · <span dir="ltr">' + esc(r.login) + '</span> · شناسه <code dir="ltr">' + esc(r.dev_id) + '</code></p>' +
            '<p>📚 ' + esc(r.courses) + ' · ' + TIER[r.tier] + ' · ' + DUR[r.dur] + '</p>' +
            '<p>💰 <b>' + nf(r.final_price) + '</b> تومان' + (r.base_price !== r.final_price ? ' (پایه ' + nf(r.base_price) + ')' : '') + (r.promo ? ' · 🎁 ' + esc(r.promo) + ' ' + nf(r.promo_pct) + '٪' : '') + (r.ref_pct ? ' · 🤝 دعوت ' + nf(r.ref_pct) + '٪' : '') + (r.credit_used ? ' · 👛 ' + nf(r.credit_used) : '') + (r.ref_name ? ' · معرف: ' + esc(r.ref_name) : '') + '</p>' +
            (r.note ? '<p class="mg__muted">📝 ' + esc(r.note) + '</p>' : '') +
            '<div class="mg__btns">' + (r.status === 'pending' ? '<button class="au__go" data-act="paid" data-id="' + esc(r.order_code) + '">✅ پرداخت شد</button><button data-act="cancel" data-id="' + esc(r.order_code) + '">لغو</button>' : '') +
            '<button data-act="copy" data-txt="' + esc(msg) + '">📋 پیام برای پنل آفلاین (صدور کد)</button></div></article>';
        }).join('') : '<p class="mg__muted">سفارشی نیست.</p>');
    }
    if (name === 'promos') {
      var p = await api('m_promos'); if (!p.ok) return;
      v.innerHTML = '<form class="mg__pf" id="pf"><input name="code" placeholder="کد (مثلاً NOWRUZ)" dir="ltr" required><input name="pct" type="number" min="1" max="70" placeholder="درصد" required><input name="days" type="number" min="0" placeholder="روز اعتبار (۰ = بی‌پایان)"><input name="max" type="number" min="1" placeholder="حداکثر استفاده (خالی = بی‌نهایت)"><input name="label" placeholder="عنوان کمپین"><select name="plans"><option value="1,2,3">همه پلن‌ها</option><option value="2,3">Pro و الماس</option><option value="3">فقط الماس</option></select><button class="au__go">ساخت کد</button></form>' +
        '<table class="mg__t"><tr><th>کد</th><th>درصد</th><th>پلن</th><th>تا</th><th>استفاده</th><th>وضعیت</th><th></th></tr>' + p.promos.map(function (r) {
          return '<tr><td dir="ltr">' + esc(r.code) + '</td><td>' + nf(r.pct) + '٪</td><td>' + esc(r.plans) + '</td><td>' + (r.until_at ? dt(r.until_at) : '—') + '</td><td>' + nf(r.uses) + (r.max_uses ? ' / ' + nf(r.max_uses) : '') + '</td><td>' + (+r.active ? 'فعال' : 'خاموش') + '</td><td><button data-act="ptoggle" data-id="' + esc(r.code) + '">' + (+r.active ? 'خاموش کن' : 'روشن کن') + '</button></td></tr>';
        }).join('') + '</table>';
      $('#pf').addEventListener('submit', async function (e) {
        e.preventDefault();
        var f = this, j = await api('m_promo_add', { code: f.code.value, pct: +f.pct.value, days: +f.days.value || 0, max: f.max.value, label: f.label.value, plans: f.plans.value.split(',').map(Number) });
        toast(j.ok ? '✅ کد ساخته شد' : (ERR[j.err] || 'خطا')); if (j.ok) tab('promos');
      });
    }
    if (name === 'users') {
      v.innerHTML = '<form class="mg__pf" id="uf"><input name="q" placeholder="جست‌وجو: ایمیل، موبایل، نام، شناسه یا کد معرف"><button class="au__go">جست‌وجو</button></form><div id="ul"></div>';
      var run = async function (q) {
        var u = await api('m_users', undefined, '&q=' + encodeURIComponent(q || '')); if (!u.ok) return;
        $('#ul').innerHTML = u.users.map(function (r) {
          return '<article class="mg__o"><header><b>' + esc(r.name) + '</b><span dir="ltr">' + esc(r.login) + '</span></header><p>شناسه <code dir="ltr">' + esc(r.dev_id) + '</code> · کد معرف <code dir="ltr">' + esc(r.ref_code) + '</code> · عضویت ' + dt(r.created_at) + ' · آخرین ورود ' + dt(r.last_login) + '</p>' +
            '<p>👛 اعتبار: ' + nf(r.credit) + ' تومان' + (r.invited != null ? ' · 🤝 دعوت: ' + nf(r.invited) : '') + '</p>' +
            (r.licenses ? '<p>🔑 ' + (r.licenses.length ? r.licenses.map(function (l) { return TIER[l.tier] + ' (بیت ' + l.mask + ')' + (+l.life ? ' دائمی' : ' تا ' + new Date(+l.exp).toLocaleDateString('fa-IR')); }).join(' · ') : 'بدون اشتراک') + '</p>' : '') +
            (r.orders && r.orders.length ? '<p>🧾 ' + r.orders.map(function (o) { return esc(o.order_code) + ' ' + nf(o.final_price) + ' (' + o.status + ')'; }).join(' · ') + '</p>' : '') + '</article>';
        }).join('') || '<p class="mg__muted">کاربری پیدا نشد.</p>';
      };
      $('#uf').addEventListener('submit', function (e) { e.preventDefault(); run(this.q.value); });
      run('');
    }
  }
  api('m_me').then(function (j) { if (j.ok) { CSRF = j.csrf; show(true); tab('dash'); } });
})();
