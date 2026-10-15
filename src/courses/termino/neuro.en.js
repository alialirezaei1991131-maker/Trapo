/* تراپو • ترمینو — حیطه «neuro» (Nervous System and Mental Health)
 * این فایل هنگام ورود به همین حیطه بارگذاری می‌شود؛ ماژول‌های محتوایی دست‌نخورده‌اند. */
(function (SUB) {
  const D = SUB.tm_neuro;
  D.css = ".gcs__h{display: flex; align-items: center; gap: 8px; margin: 14px 0 6px; font-size: 15px;}\n.gcs__h i{flex-shrink: 0; font-style: normal; display: inline-grid; place-items: center; min-width: 28px; height: 28px; padding: 0 6px; border-radius: 9px; background: var(--brand-l); color: var(--brand-t); font-family: Arial, Helvetica, sans-serif; font-weight: 900;}\n.gcs__h b{min-width: 0;}\n.gcs__row{display: flex; flex-direction: column; gap: 6px;}\n.gcs__o{display: flex; align-items: center; gap: 10px; width: 100%; text-align: start; font: inherit; color: var(--text); background: var(--card); border: 2px solid var(--line); border-bottom-width: 4px; border-radius: 14px; padding: 8px 12px; cursor: pointer; min-width: 0;}\n.gcs__o span{flex: 1 1 auto; min-width: 0; overflow-wrap: anywhere; font-weight: 700;}\n.gcs__o em{flex-shrink: 0; font-style: normal; display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--bg); border: 2px solid var(--line); font-weight: 900; font-family: Arial, Helvetica, sans-serif;}\n.gcs__o.is-on{border-color: var(--brand); background: var(--brand-l);}\n.gcs__o.is-on em{background: var(--brand); border-color: var(--brand); color: #fff;}\n.gcs__out{display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; padding: 12px 16px; border-radius: 16px; background: color-mix(in srgb, var(--brand) 12%, var(--bg)); border: 2px solid color-mix(in srgb, var(--brand) 40%, var(--line)); margin: 8px 0 12px; position: sticky; top: 0; z-index: 2;}\n.gcs__out b{font-size: 26px; color: var(--brand-t); font-family: Arial, Helvetica, sans-serif;}\n.gcs__out small{flex-basis: 100%; color: var(--muted); font-weight: 700;}\n.tsc--ok{color: #46a302 !important;}\n.tsc--mid{color: #e5a500 !important;}\n.tsc--bad{color: #c2413a !important;}";
  D.ready = true; // فایل این حیطه رسیده است (نسخه هاست بدون اشتراک آن را نمی‌دهد)
  D.content = function () {
    window.EA.IMG = D.IMG;
/* نورو — پیکربندی اپ: هر متن، نام، کلید ذخیره‌سازی، شخصیت و ابزار ویژه‌ای که موتور مشترک (engine/) از اپ می‌خواهد.
 * این فایل پیش از همه ماژول‌ها بارگذاری می‌شود؛ تابع‌ها بعداً و هنگام اجرا صدا زده می‌شوند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.APP = {
    name: "Neuro", key: 'neuro', title: "Neuro • Nervous System and Mental Health Terminology", certCode: 'NR',
    subject: "Medical terminology of the nervous system and mental health (brain, spinal cord, nerves and mental disorders)",
    kicker: "🧠 Medical terminology: Brain, Spinal Cord, Nerves and Mental Health",
    hello: "Hi, I’m <b>Neuro</b>, a smiling brain who always carries a nerve spark ⚡ along!",
    disclaimer: "Neuro is a learning tool and does not replace examination, clinical judgement or a physician’s orders.",
    eyes: "Dozens of bilingual figures and clinical pictures, from the neuron and synapse to the brain lobes, meninges, reflex arc, haematomas, MRI and EEG.",
    outcomes: [
      "Break every neuro word into prefix, root and suffix and say what it means",
      "Point out the brain lobes, brainstem, cerebellum, meninges, ventricles and spinal cord on a figure",
      "Explain the neuron, synapse, reflex arc, cranial nerves and autonomic system",
      "Tell stroke, epilepsy, Parkinson’s, Alzheimer’s, MS and other neurological diseases apart",
      "Recognise anxiety, mood and psychotic disorders and their medicines",
      "Read EEG, lumbar puncture, CT and MRI, the Glasgow scale, operations and record abbreviations"
    ],
    endText: "Just 5 minutes a day. A few weeks from now you’ll read a neurology note like a familiar story.",
    obHello: "Hi! I’m Neuro, a smiling brain 🧠 What’s your name?",
    obWorld: "Which world shall we start with? If you’re new, “Language of Nerves” is the best start; the basic roots and the parts of the nervous system are taught there!",
    demo: () => ({
      q: "The word <b dir=\"ltr\">hemiplegia</b> means…",
      fig: { a: ['paralysis-types'], l: ["Types of paralysis"] },
      opts: ["paralysis of one side", "paralysis of all four limbs", "weakness of one limb", "paralysis of both legs"],
      why: `${EA.K.wb('hemi-', '-plegia')}<br><b>hemi-</b> = half, <b>-plegia</b> = paralysis. So it means <b>paralysis of one half of the body</b>, for example after a stroke. Start the meaning from the suffix!`
    }),
    /* نام هر سطح امتیاز (یکی برای هر پله) و نقش رقیبان خیالی لیگ */
    titles: ["New Spark", "Curious Dendrite", "Speedy Axon", "Root Decoder", "Guardian of the Meninges", "Synapse Master", "Cranial Nerve Guide",
      "Reflex Hunter", "EEG Reader", "Stroke Detective", "Mental Health Companion", "Glasgow Master", "Word-Building Master", "Neurology Legend", "Terminology Icon"],
    leagueRoles: ["Medical student", "Nursing student", "psychology student", "Anaesthesia technologist", "Occupational therapy student", "Surgical technologist", "ICU nurse", "neurology resident", "Physiotherapy student", "EEG technologist", "Emergency nurse", "speech therapy student", "Radiology technologist"],
    firstBadge: ['🧠', "First Spark"],
    worldBadges: { lx: ['🧩', "Decoder"], cn: ['🧠', "Brain Map Reader"], pn: ['⚡', "Impulse Master"], ds: ['🩺', "Nerve Detective"], ps: ['💭', "Mind Companion"], tx: ['📈', "EEG Reader"] },
    confetti: ['#6C4FD0', '#F6B3C6', '#FFC800', '#F0A030', '#17A398', '#D9534F', '#3D6FD6', '#58CC02'],
    /* ابزارها */
    parseDefault: 'electroencephalography',
    parseSamples: ['electroencephalography', 'hemiplegia', 'myelomeningocele', 'hydrocephalus', 'radiculopathy', 'craniotomy', 'schizophrenia', 'narcolepsy'],
    ph: { dict: "Search: neur, brain, seizure…", roots: "Search: encephal, nerve, -plegia…", abbr: "Search: CVA, spinal cord, EEG…" },
    toolsDisclaimer: "⚕️ Neuro is a learning tool; the dictionary and Glasgow score do not replace a neurological examination and clinical judgement.",
    /* شخصیت: یک مغز صورتی با شکنج‌ها و جرقه عصبی (بدنه؛ چشم و دهان را موتور می‌کشد، مرکز چهره cx,cy) */
    mascot: (cx, cy) => `
        <path d="M${cx} 30 C${cx - 14} 18 ${cx - 40} 22 ${cx - 44} 40 C${cx - 60} 46 ${cx - 62} 70 ${cx - 52} 82 C${cx - 58} 102 ${cx - 44} 122 ${cx - 24} 120 C${cx - 16} 134 ${cx - 2} 132 ${cx} 124 C${cx + 2} 132 ${cx + 16} 134 ${cx + 24} 120 C${cx + 44} 122 ${cx + 58} 102 ${cx + 52} 82 C${cx + 62} 70 ${cx + 60} 46 ${cx + 44} 40 C${cx + 40} 22 ${cx + 14} 18 ${cx} 30 Z" fill="#F6B3C6" stroke="#D97890" stroke-width="2.2"/>
        <path d="M${cx} 32 V122" stroke="#D97890" stroke-width="2" opacity=".7"/>
        <path d="M${cx - 40} 52 q10 -8 18 0 q8 8 16 -2 M${cx + 40} 52 q-10 -8 -18 0 q-8 8 -16 -2 M${cx - 52} 96 q8 -6 14 2 M${cx + 52} 96 q-8 -6 -14 2 M${cx - 30} 30 q6 8 14 4 M${cx + 30} 30 q-6 8 -14 4" stroke="#D97890" stroke-width="2" fill="none" stroke-linecap="round" opacity=".75"/>
        <path d="M${cx - 44} 46 C${cx - 40} 36 ${cx - 30} 30 ${cx - 22} 30" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M${cx + 54} 6 l-10 16 h8 l-6 14 14 -18 h-8 l6 -12 z" fill="#FFC800" stroke="var(--c)" stroke-width="1.6" stroke-linejoin="round"/>
        <path class="negar-spark" d="M14 26 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#FFC800"/>
`
  };

  /* ---------- ابزار ویژه: مقیاس کمای گلاسگو (GCS) ----------
   * E (باز شدن چشم) ۱ تا ۴، V (پاسخ کلامی) ۱ تا ۵، M (پاسخ حرکتی) ۱ تا ۶؛ جمع ۳ تا ۱۵.
   * ۱۳ تا ۱۵ آسیب خفیف، ۹ تا ۱۲ متوسط، ۸ و کمتر شدید (کما). اعداد آموزشی‌اند. */
  const GCS = [
    ['e', 'E', "Eye opening", [[4, "Opens spontaneously"], [3, "Opens to voice"], [2, "Only to painful stimulus"], [1, "No response"]]],
    ['v', 'V', "Verbal response", [[5, "Oriented to time and place"], [4, "Confused"], [3, "Inappropriate words"], [2, "Incomprehensible sounds"], [1, "No sounds"]]],
    ['m', 'M', "Motor response", [[6, "Obeys commands"], [5, "Localises pain"], [4, "Withdraws from pain"], [3, "Abnormal flexion (decorticate)"], [2, "Abnormal extension (decerebrate)"], [1, "No movement"]]]
  ];
  const st = { e: 0, v: 0, m: 0 };
  const fa = n => EA.fa(n);
  const total = () => st.e + st.v + st.m;
  function out() {
    const t = total();
    if (!st.e || !st.v || !st.m) return `<b>${t ? fa(t) : '—'}</b><span>out of 15</span><small>Choose one option for each of the three parts E, V and M.</small>`;
    const c = t >= 13 ? ["Mild brain injury", "Consciousness close to normal; keep monitoring neurological signs.", 'ok'] : t >= 9 ? ["Moderate injury", "Reduced consciousness; needs careful assessment and a CT scan.", 'mid'] : ["Severe injury (coma)", "A score of 8 or less: the airway is at risk; intensive care is needed.", 'bad'];
    return `<b class="tsc--${c[2]}">${fa(t)}</b><span>out of 15 • <bdi dir="ltr">E${st.e} V${st.v} M${st.m}</bdi></span><small><b class="tsc--${c[2]}" style="font-size:inherit">${c[0]}</b>; ${c[1]}</small>`;
  }
  EA.APP.extraTool = {
    id: 'gcs', sym: 'GCS', name: "Glasgow Coma Scale", color: '#6C4FD0',
    value: total,
    pane: () => `<div class="tpane"><p class="muted">Choose the patient’s best response for each part; the Glasgow score runs from 3 to 15.</p>
    <div class="gcs__out" aria-live="polite">${out()}</div>
    ${GCS.map(([k, s, name, rows]) => `<h4 class="gcs__h"><i>${s}</i><b>${name}</b></h4><div class="gcs__row">${rows.map(([v, t]) =>
      `<button class="gcs__o${st[k] === v ? ' is-on' : ''}" data-gcs="${k}" data-v="${v}"><em>${fa(v)}</em><span>${EA.bi(t)}</span></button>`).join('')}</div>`).join('')}
    <table class="mini"><tr><th>Score</th><th>Interpretation</th></tr>
      <tr><td>13 to 15</td><td>Mild injury</td></tr><tr><td>9 to 12</td><td>Moderate injury</td></tr><tr><td>8 or less</td><td>Severe injury; coma</td></tr></table>
    ${EA.ui.figCard({ a: ['gcs'], l: ["The three parts of the Glasgow scale"] })}
    <p class="muted">The Glasgow score is part of the neurological examination, and treatment decisions rest with the physician.</p></div>`,
    click: e => { const b = e.target.closest('[data-gcs]'); if (!b) return false; const v = +b.dataset.v; st[b.dataset.gcs] = st[b.dataset.gcs] === v ? 0 : v; return true; },
    /* برای آزمون دود: E3 + V4 + M6 = ۱۳ */
    test: { clicks: ['[data-gcs="e"][data-v="3"]', '[data-gcs="v"][data-v="4"]', '[data-gcs="m"][data-v="6"]'], expect: 13 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور — هسته: فضای نام، متن‌ها، رقم فارسی و سازنده‌های کوتاه محتوا
 * این فایل پیش از همه بارگذاری می‌شود؛ هم در مرورگر و هم در Node (برای آزمون‌ها).
 * زبان رابط فارسی است و واژه‌های پزشکی همیشه انگلیسی و چپ‌به‌راست می‌مانند.
 *   EA.T(fa)          متن رابط (برای سازگاری با موتور نگار، آرگومان دوم نادیده گرفته می‌شود)
 *   EA.fa(n, d)       عدد با رقم فارسی
 *   EA.en(s)          تکه انگلیسی جدا و چپ‌به‌راست درون متن فارسی
 * سازنده‌های محتوا (EA.K):
 *   L(عنوان، متن)                       کارت آموزشی
 *   M(سؤال، گزینه‌ها، چرا، پرونده، شکل)  چندگزینه‌ای — گزینه اول درست است و در اجرا به‌هم می‌ریزد
 *   T(جمله، درست/غلط، چرا، شکل)         درست یا نادرست
 *   B(جمله با ___، گزینه‌ها، چرا)        جای خالی — گزینه اول درست است
 *   O(سؤال، مراحل به ترتیب درست، چرا)     مرتب‌سازی
 *   P(سؤال، جفت‌ها، چرا)                 جفت‌کردن
 *   S(سؤال، پاسخ یا پاسخ‌ها، چرا، راهنما)  املای واژه: کاربر واژه انگلیسی را تایپ می‌کند
 *   W(سؤال، اجزا به ترتیب، اجزای انحرافی، چرا) واژه‌سازی: ساختن واژه از ریشه‌ها
 *   N(شناسه مولد)                        سؤال تازه از واژه‌نامه در هر بار
 *   F(کلید شکل یا آرایه، برچسب‌ها، توضیح)  شکل SVG درون سؤال؛ fig(...) همان شکل را درون کارت آموزشی می‌گذارد */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* نام، کلید و متن‌های هر اپ در config.js آن اپ (پیش از هسته بارگذاری می‌شود) */
  EA.APP = EA.APP || { name: 'App', key: 'app', title: 'App' };

  /* ---------- اعداد ---------- */
  function fa(n, d) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    const dd = d == null ? 1 : d;
    return n.toLocaleString(EA.lang === 'en' ? 'en-US' : 'fa-IR', { maximumFractionDigits: dd, useGrouping: false });
  }
  function toEn(s) {
    return String(s)
      .replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 1776))
      .replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 1632))
      .replace(/[٫,/]/g, '.')
      .replace(/[−–]/g, '-')
      .replace(/[^\d.\-]/g, '');
  }
  function parseNum(s) {
    const t = toEn(s);
    if (!t || t === '.' || t === '-') return NaN;
    return parseFloat(t);
  }
  const round = (x, d) => { const p = Math.pow(10, d || 0); return Math.round(x * p) / p; };
  EA.fa = fa; EA.num = fa; EA.toEn = toEn; EA.parseNum = parseNum; EA.round = round;

  /* ---------- تصویرها ----------
   * در نسخه ساخته‌شده، build.js همه تصویرهای src/img را به‌صورت داده در EA.IMG می‌گذارد؛
   * در حالت توسعه نشانی فایل برگردانده می‌شود. EA.IMG_USED کلیدهایی است که محتوا به کار برده. */
  EA.IMG = EA.IMG || {};
  EA.IMG_USED = EA.IMG_USED || new Set();
  EA.img = k => { EA.IMG_USED.add(k); return EA.IMG[k] || ('img/' + k + '.webp'); };

  /** واژه انگلیسی درون متن فارسی: جدا و چپ‌به‌راست */
  EA.en = s => `<bdi class="en" dir="ltr">${s}</bdi>`;
  /* متن دوزبانه: هر تکه لاتین را در <bdi dir="ltr"> می‌گذاریم تا در جمله فارسی جابه‌جا نشود.
   * تکه‌های لاتینی که با فاصله، «,»، «+»، «=»، «:»، «/»، «→»، «↔» یا «×» به هم چسبیده‌اند یک تکه‌اند
   * (vertebra → vertebrae، PET / SPECT، C1–C7)؛ ولی «،» و «•» فارسی جداکننده فهرست راست‌به‌چپ است.
   * پرانتزی که جفتش درون تکه نیست بیرون از bdi می‌ماند تا در متن فارسی درست قرینه شود. */
  const BI_TOK = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?", BI_TOK2 = "\\(?-?[A-Za-zÀ-ÖØ-öø-ÿ0-9][A-Za-zÀ-ÖØ-öø-ÿ0-9²⁺⁻\\/\\-.+–°'’]*\\)?";
  const BI_RUN = new RegExp(`(?<![&#\\w])${BI_TOK}(?:(?:\\s*(?:[,+=:\\/→↔×]|&amp;|&)\\s*|\\s+)${BI_TOK2})*`, 'g');
  const biSeg = b => { const t = b.trim(); if (!t || !/[A-Za-z0-9]/.test(t)) return b; return b.match(/^\s*/)[0] + `<bdi dir="ltr">${t}</bdi>` + b.match(/\s*$/)[0]; };
  const biWrap = m => {
    /* نقطه، ویرگول و دونقطه پایانی مال جمله فارسی است، نه واژه لاتین */
    const tail = (m.match(/[.,:]+$/) || [''])[0];
    if (tail && !/\b[A-Za-z]\.[A-Za-z]\.$/.test(m)) return biWrap(m.slice(0, -tail.length)) + tail;
    const open = [], bad = new Set();
    for (let i = 0; i < m.length; i++) { if (m[i] === '(') open.push(i); else if (m[i] === ')') { if (open.length) open.pop(); else bad.add(i); } }
    open.forEach(i => bad.add(i));
    if (!bad.size) return `<bdi dir="ltr">${m}</bdi>`;
    let out = '', buf = '';
    for (let i = 0; i < m.length; i++) { if (bad.has(i)) { out += biSeg(buf) + m[i]; buf = ''; } else buf += m[i]; }
    return out + biSeg(buf);
  };
  /* اختصار یا نماد علمی: حروف بزرگ و رقم (BCC، SPF، I&D، UVA، C&S، Na+) ← کلاس sym با فونت Arial */
  const SYM = /^\(?[A-Z][A-Za-z0-9]*(?:[&+\/\-][A-Za-z0-9]*)*\)?$/;
  EA.isSym = t => SYM.test(t) && /[A-Z].*[A-Z0-9&]|^[A-Z]$/.test(t);
  /** تکه‌ای که همه اجزایش اختصار یا عدد است (SPF 30، T3 / T4) */
  const symRun = t => { const p = t.replace(/&amp;/g, '&').split(/\s+/).filter(Boolean); return p.some(EA.isSym) && p.every(x => EA.isSym(x) || /^[\d.,%°×\/–-]+$/.test(x)); };
  EA.bi = s => {
    let depth = 0;
    const out = String(s).split(/(<[^>]+>)/).map(x => {
      if (x.startsWith('<')) { if (/^<bdi\b/i.test(x)) depth++; else if (/^<\/bdi>/i.test(x)) depth--; return x; }
      /* نشانه LRM دیگر لازم نیست (خود bdi جهت را نگه می‌دارد) و پیوستن تکه‌ها را می‌شکند */
      return depth ? x : x.replace(/\u200e/g, '').replace(BI_RUN, biWrap);
    }).join('');
    /* تکه‌های کوتاه لاتین (مثل ‎-scopy) نباید سر خط از خط تیره بشکنند */
    /* nowrap جلوی شکستن خط در فاصله بعدی را هم می‌گیرد؛ فاصله صفرعرض (U+200B) آن فرصت را برمی‌گرداند.
     * <wbr> نه: در Chromium، <wbr> پس از bdi درون سلول جدول (با فونت بارگذاری‌شده) چیدمان را قفل می‌کند. */
    return out.replace(/<bdi dir="ltr">([^<]{1,40})<\/bdi>(?=(\s?))/g, (m, t, sp) => {
      const sym = symRun(t), short = !/\s/.test(t) && t.length <= 26;
      if (!sym && !short) return m;
      return `<bdi dir="ltr" class="${[short ? 'nw' : '', sym ? 'sym' : ''].filter(Boolean).join(' ')}">${t}</bdi>${short && sp ? '\u200b' : ''}`;
    });
  };

  /* ---------- سازنده‌های محتوا ---------- */
  const fig = (ks, ls, capTxt) => ({ a: ks, l: ls, cap: capTxt });
  EA.K = {
    L: (title, body) => ({ t: 'learn', title, body }),
    M: (q, opts, why, kase, f) => ({ t: 'mcq', q, opts, why, case: kase, fig: f }),
    T: (q, a, why, f) => ({ t: 'tf', q, a, why, fig: f }),
    B: (q, opts, why) => ({ t: 'fill', q, opts, why }),
    O: (q, steps, why) => ({ t: 'order', q, steps, why }),
    P: (q, pairs, why) => ({ t: 'match', q, pairs, why }),
    S: (q, ans, why, hint) => ({ t: 'spell', q, ans: [].concat(ans), why, hint }),
    W: (q, parts, extra, why) => ({ t: 'build', q, parts, extra: extra || [], why }),
    N: gen => ({ t: 'num', gen }),
    F: fig,
    /** جدول کوچک؛ ردیف اول سرستون است */
    tbl: rows => '<table class="mini">' + rows.map((r, i) => '<tr>' + r.map(c => (i ? `<td>${c}</td>` : `<th>${c}</th>`)).join('') + '</tr>').join('') + '</table>',
    /** شکل درون کارت آموزشی (در زمان نمایش ساخته می‌شود) */
    fig: (ks, ls, capTxt) => `<!--fig:${encodeURIComponent(JSON.stringify(fig(ks, ls, capTxt)))}-->`,
    /** واژه با ساختار رنگی: wb('erythr/o','cyt','-penia') */
    wb: (...parts) => `<span class="wb" dir="ltr">${parts.map(p => `<b class="wb__p wb__p--${p.endsWith('-') ? 'pre' : p.startsWith('-') ? 'suf' : 'root'}">${p}</b>`).join('<i>+</i>')}</span>`,
    en: s => EA.en(s),
    /** جعبه «ترفند حفظ»: یک تصویر ذهنی یا قلاب حافظه */
    memo: s => `<div class="memo"><b class="memo__h">🧠 Memory trick</b>${EA.bi(s)}</div>`,
    /** جعبه «در بالین»: کاربرد واقعی همان واژه در بخش و آزمایشگاه */
    pearl: s => `<div class="pearl"><b class="pearl__h">🩺 At the bedside</b>${EA.bi(s)}</div>`,
    /** مقایسه دو مفهوم شبیه: vs(['عنوان', 'توضیح'], ['عنوان', 'توضیح']) */
    vs: (a, b) => `<div class="vs"><div class="vs__c"><b>${a[0]}</b><span>${EA.bi(a[1])}</span></div><i class="vs__x">VS</i><div class="vs__c vs__c--b"><b>${b[0]}</b><span>${EA.bi(b[1])}</span></div></div>`
  };
  EA.worlds = EA.worlds || [];

  /* ساختار دوره: هر دنیا ۳ سطح × ۳ درس؛ آزمون مرحله در پایان هر دنیا و امتحان نهایی پس از همه */
  EA.PER_LEVEL = 3;
  EA.exam = {
    checkpoint: { count: 12, gens: 4, pass: 0.7 },
    final: { perWorld: 6, gensPerWorld: 2, pass: 0.8, minutes: 25 }
  };

  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — واژه‌نامه ادغام‌شده (ساخته‌شده خودکار با tools/make_terms.py از apps/neuro/terms.py؛ دستی ویرایش نکنید)
 * هر ردیف: [واژه، تلفظ، تعریف انگلیسی، معادل فارسی، دنیا، دسته، اختصارهای مرتبط] */
(function (root) {
  const EA = root.EA = root.EA || {};
  EA.TERMS_RAW = [["absence seizure", "AB-sens SEE-zher", "Brief seizure with a blank stare and loss of awareness for a few seconds; formerly petit mal.", "brief staring spell of a few seconds (petit mal)", "ds", "dz", []],
["acetylcholine", "ah-see-til-KOH-leen", "Neurotransmitter of motor neurons and the parasympathetic system.", "transmitter of muscle movement and the parasympathetic system", "pn", "phys", ["ACh"]],
["afferent neuron", "AF-er-ent NOO-ron", "Sensory neuron that carries impulses toward the CNS (af- = toward).", "sensory neuron carrying signals in", "pn", "body", []],
["agnosia", "ag-NOH-zee-ah", "Inability to recognize objects or sounds by the senses (gnos/o = knowledge).", "inability to recognise objects", "ds", "sx", []],
["agoraphobia", "ag-oh-rah-FOH-bee-ah", "Fear of open or public places from which escape may be difficult (agora = marketplace).", "fear of open and crowded places", "ps", "psy", []],
["Alzheimer disease", "ALTS-hye-mer dih-ZEEZ", "Progressive brain degeneration and the most common cause of dementia; memory loss, confusion and personality change.", "progressive memory loss; the commonest cause of dementia", "ds", "dz", ["AD"]],
["amnesia", "am-NEE-zee-ah", "Loss of memory (a- = without, -mnesia = memory).", "loss of memory", "ds", "sx", []],
["amyotrophic lateral sclerosis", "ah-mye-oh-TROH-fik LAT-er-al skleh-ROH-sis", "Fatal disease in which motor neurons degenerate, causing muscle wasting and paralysis; Lou Gehrig disease.", "degeneration of motor neurons with weakness and wasting", "ds", "dz", ["ALS"]],
["analgesia", "an-al-JEE-zee-ah", "Absence of pain sensation (an- = without, -algesia = pain).", "absence of pain", "ds", "sx", []],
["analgesic", "an-al-JEE-zik", "Drug that relieves pain without loss of consciousness.", "pain-relieving drug", "tx", "tx", []],
["anencephaly", "an-en-SEF-ah-lee", "Absence of the brain and cranial vault at birth (an- = without, encephal/o = brain).", "absence of the brain", "ds", "dz", []],
["anesthesia", "an-es-THEE-zee-ah", "Loss of feeling or sensation (an- = without, -esthesia = feeling).", "loss of sensation or consciousness", "lx", "sx", []],
["anesthesiologist", "an-es-thee-zee-OL-oh-jist", "Physician who specializes in giving anesthetic drugs (an- = without, esthesi/o = feeling).", "anaesthesia specialist", "lx", "field", []],
["anesthetic", "an-es-THET-ik", "Drug that causes loss of sensation; general anesthetics also cause unconsciousness.", "drug that removes sensation or consciousness", "tx", "tx", ["GA"]],
["aneurysm", "AN-yoo-rizm", "Localized bulging (dilation) of an artery wall that may burst and bleed.", "local bulge in an artery wall", "ds", "dz", []],
["anorexia nervosa", "an-oh-REK-see-ah ner-VOH-sah", "Eating disorder with extreme fear of weight gain, self-starvation and distorted body image.", "eating disorder of self-starvation", "ps", "psy", []],
["anticonvulsant", "an-tih-kon-VUL-sant", "Drug that prevents or relieves seizures, such as phenytoin or diazepam.", "drug against seizures", "tx", "tx", []],
["antidepressant", "an-tih-dee-PRES-ant", "Drug that relieves depression, such as an SSRI.", "drug against depression", "ps", "tx", ["SSRI"]],
["antipsychotic", "an-tih-sye-KOT-ik", "Drug that controls psychotic symptoms such as hallucinations; also called a neuroleptic.", "drug against hallucinations and delusions", "ps", "tx", []],
["anxiety", "ang-ZYE-eh-tee", "Feeling of worry, nervousness or fear, often with a racing heart and sweating.", "feeling of worry and fear", "ps", "sx", []],
["anxiolytic", "ang-zye-oh-LIT-ik", "Drug that relieves anxiety (-lytic = breaking down).", "anti-anxiety drug", "ps", "tx", []],
["aphasia", "ah-FAY-zee-ah", "Loss or impairment of the ability to speak or understand speech (a- = without, -phasia = speech).", "loss of language ability", "lx", "sx", []],
["apraxia", "ah-PRAK-see-ah", "Inability to carry out purposeful movements although muscles are not paralyzed.", "inability to carry out learned movements", "ds", "sx", []],
["arachnoid", "ah-RAK-noyd", "Middle, web-like layer of the meninges (arachne = spider).", "web-like middle layer of the meninges", "cn", "body", []],
["astrocytoma", "as-troh-sye-TOH-mah", "Tumor of the star-shaped glial cells (astrocytes) of the brain.", "tumour of star-shaped glial cells", "ds", "dz", []],
["ataxia", "ah-TAK-see-ah", "Lack of muscle coordination (a- = without, tax/o = order, coordination).", "lack of movement coordination", "ds", "sx", []],
["attention-deficit/hyperactivity disorder", "ah-TEN-shun DEF-ih-sit hye-per-ak-TIV-ih-tee dis-OR-der", "Disorder of inattention, impulsiveness and overactivity, usually starting in childhood.", "inattention, impulsivity and overactivity from childhood", "ps", "psy", ["ADHD"]],
["aura", "AW-rah", "Warning sensation, such as flashing lights, that comes before a migraine or seizure.", "warning sensation before an attack", "ds", "sx", []],
["autism spectrum disorder", "AW-tizm SPEK-trum dis-OR-der", "Developmental disorder affecting social interaction and communication, with repetitive behaviors (aut/o = self).", "developmental difficulty with social communication and repetitive behaviour", "ps", "psy", ["ASD"]],
["autonomic nervous system", "aw-toh-NOM-ik NER-vus SIS-tem", "Part of the PNS that controls involuntary functions of the heart, smooth muscles and glands.", "involuntary control of heart, glands and smooth muscle", "pn", "body", ["ANS"]],
["axon", "AK-son", "Long fiber of a neuron that carries impulses away from the cell body.", "long fibre carrying the message away from the cell body", "pn", "body", []],
["Babinski sign", "bah-BIN-skee syne", "Big toe bends upward and the other toes fan out when the sole is stroked; normal in infants but a sign of motor nerve damage in adults.", "big toe rising when the sole is stroked", "pn", "lab", []],
["Bell palsy", "bel PAWL-zee", "Sudden paralysis of the facial nerve, drooping one side of the face.", "facial nerve palsy", "ds", "dz", []],
["bipolar disorder", "bye-POH-lar dis-OR-der", "Mood disorder with episodes of mania alternating with depression.", "alternating mania and depression", "ps", "psy", ["BPD"]],
["blood-brain barrier", "blud brayn BAIR-ee-er", "Protective layer of brain capillaries that keeps many harmful substances and germs out of the brain.", "capillary wall that keeps harmful substances out of the CNS", "cn", "phys", []],
["brain", "brayn", "The organ inside the skull that controls thought, memory, movement, sensation and body functions (encephal/o = brain).", "organ of thought inside the skull", "cn", "body", []],
["brainstem", "BRAYN-stem", "Stalk of the brain made of the midbrain, pons and medulla oblongata; controls breathing, heart rate and blood pressure.", "midbrain, pons and medulla together", "cn", "body", []],
["Broca area", "BROH-kah AIR-ee-ah", "Region of the left frontal lobe that controls the production of speech.", "speech-producing centre in the left frontal lobe", "cn", "phys", []],
["bulimia nervosa", "boo-LIM-ee-ah ner-VOH-sah", "Eating disorder with binge eating followed by purging, such as self-induced vomiting.", "binge eating with purging", "ps", "psy", []],
["carotid endarterectomy", "kah-ROT-id end-ar-ter-EK-toh-mee", "Removal of plaque from the inner lining of the carotid artery to prevent stroke.", "removing plaque from the main neck artery", "tx", "tx", []],
["carotid ultrasound", "kah-ROT-id UL-trah-sownd", "Sound-wave imaging of the carotid arteries in the neck to find narrowing.", "sound-wave scan of the neck arteries", "tx", "lab", []],
["cauda equina", "KAW-dah eh-KWYE-nah", "Bundle of spinal nerve roots below the end of the spinal cord; looks like a horse's tail.", "“horse’s tail” of roots below the end of the cord", "cn", "body", []],
["cell body", "sel BOD-ee", "Main part of a neuron that contains the nucleus.", "part of the neuron holding the nucleus", "pn", "body", []],
["central nervous system", "SEN-tral NER-vus SIS-tem", "The brain and the spinal cord.", "brain and spinal cord", "lx", "body", ["CNS"]],
["cephalalgia", "sef-ah-LAL-jee-ah", "Headache (cephal/o = head, -algia = pain).", "headache", "ds", "sx", ["HA"]],
["cerebellar", "ser-eh-BEL-ar", "Pertaining to the cerebellum.", "relating to the cerebellum", "cn", "body", []],
["cerebellum", "ser-eh-BEL-um", "Second-largest part of the brain, at the back; coordinates muscle movement and balance (cerebell/o = cerebellum).", "“little brain” for balance and coordination", "cn", "body", []],
["cerebral", "seh-REE-bral", "Pertaining to the cerebrum or brain (cerebr/o = cerebrum).", "relating to the largest part of the brain", "lx", "body", []],
["cerebral angiography", "seh-REE-bral an-jee-OG-rah-fee", "X-ray of the blood vessels of the brain after injecting contrast dye; detects aneurysms and blockages.", "contrast X-ray of the brain’s vessels", "tx", "lab", []],
["cerebral cortex", "seh-REE-bral KOR-teks", "The thin outer layer of gray matter covering the cerebrum (cortic/o = cortex).", "thin grey outer layer of the cerebrum", "cn", "body", []],
["cerebral hemisphere", "seh-REE-bral HEM-is-feer", "One of the two halves (right or left) of the cerebrum.", "left or right half of the cerebrum", "cn", "body", []],
["cerebral palsy", "seh-REE-bral PAWL-zee", "Group of movement and posture disorders from brain damage before, during or soon after birth.", "movement disorder from brain damage around birth", "ds", "dz", ["CP"]],
["cerebrospinal", "ser-eh-broh-SPYE-nal", "Pertaining to the brain and spinal cord (cerebr/o = cerebrum, spin/o = spine).", "relating to the brain and the cord", "lx", "body", []],
["cerebrospinal fluid", "ser-eh-broh-SPYE-nal FLOO-id", "Clear fluid that fills the ventricles and surrounds the brain and spinal cord, cushioning them.", "clear fluid around the brain and cord", "cn", "phys", ["CSF"]],
["cerebrovascular accident", "ser-eh-broh-VAS-kyoo-lar AK-sih-dent", "Stroke; damage to the brain from interrupted blood flow, caused by a thrombus, embolus or hemorrhage.", "stroke", "ds", "dz", ["CVA"]],
["cerebrum", "SER-eh-brum", "The largest part of the brain, divided into right and left hemispheres; controls thought, voluntary movement and the senses.", "largest part of the brain", "cn", "body", []],
["choroid plexus", "KOR-oyd PLEK-sus", "Network of capillaries in the ventricles that produces cerebrospinal fluid.", "capillary network in the ventricles that makes CSF", "cn", "body", []],
["claustrophobia", "klaws-troh-FOH-bee-ah", "Fear of closed or small spaces.", "fear of enclosed spaces", "ps", "psy", []],
["cognitive behavioral therapy", "KOG-nih-tiv bee-HAYV-yor-al THAIR-ah-pee", "Psychotherapy that changes unhelpful thoughts and behaviors.", "cognitive behavioural therapy", "ps", "tx", ["CBT"]],
["coma", "KOH-mah", "State of deep unconsciousness from which the person cannot be awakened.", "deep unconsciousness without waking", "ds", "sx", []],
["computed tomography", "kom-PYOO-ted toh-MOG-rah-fee", "X-ray imaging that makes cross-sectional pictures of the brain; quickly shows bleeding.", "CT scan", "tx", "lab", ["CT"]],
["concussion", "kon-KUSH-un", "Temporary disturbance of brain function from a blow to the head, often with brief loss of consciousness.", "temporary brain dysfunction after a blow", "ds", "dz", []],
["contusion", "kon-TOO-zhun", "Bruising of brain tissue from a head injury.", "bruise", "ds", "dz", []],
["convulsion", "kon-VUL-shun", "Sudden, violent, involuntary contractions of a group of muscles.", "violent involuntary muscle contractions", "ds", "sx", []],
["corpus callosum", "KOR-pus kah-LOH-sum", "A thick band of nerve fibers that connects the right and left cerebral hemispheres.", "white band joining the two hemispheres", "cn", "body", []],
["cranial nerves", "KRAY-nee-al nervz", "Twelve pairs of nerves that arise from the brain, such as the optic, facial and vagus nerves.", "12 pairs of nerves leaving the brain directly", "pn", "body", []],
["craniectomy", "kray-nee-EK-toh-mee", "Surgical removal of part of the skull (-ectomy = removal).", "removal of part of the skull", "tx", "tx", []],
["craniotomy", "kray-nee-OT-oh-mee", "Surgical incision into the skull to reach the brain (crani/o = skull, -tomy = incision).", "incision into the skull", "tx", "tx", []],
["cranium", "KRAY-nee-um", "The skull bones that enclose and protect the brain (crani/o = skull).", "skull", "cn", "body", []],
["Creutzfeldt-Jakob disease", "KROYTS-felt YAH-kob dih-ZEEZ", "Rare, fatal brain degeneration caused by a prion, with rapid dementia.", "rapid prion dementia", "ds", "dz", ["CJD"]],
["cryosurgery", "krye-oh-SER-jer-ee", "Use of extreme cold to destroy tissue such as a tumor (cry/o = cold).", "destroying tissue with extreme cold", "tx", "tx", []],
["deep tendon reflex", "deep TEN-don REE-fleks", "Reflex muscle contraction when a tendon is tapped, such as the patellar (knee-jerk) reflex.", "jerk when a tendon is tapped", "pn", "lab", ["DTR"]],
["delirium", "deh-LEER-ee-um", "Sudden state of confusion, disorientation and agitation, often from illness or drugs.", "sudden, temporary confusion", "ps", "sx", []],
["delusion", "deh-LOO-zhun", "Fixed false belief that is not changed by reasoning or evidence.", "false, fixed belief", "ps", "sx", []],
["dementia", "deh-MEN-shee-ah", "Progressive loss of memory, thinking and reasoning that interferes with daily life (de- = loss, ment/o = mind).", "progressive loss of memory and thinking", "ds", "dz", []],
["dendrite", "DEN-dryte", "Branching fiber of a neuron that receives impulses and carries them toward the cell body (dendr/o = tree).", "branch that receives the message", "pn", "body", []],
["depression", "dee-PRESH-un", "Mood disorder with persistent sadness, loss of interest, low energy and hopelessness.", "lasting sadness and loss of interest", "ps", "psy", []],
["dermatome", "DER-mah-tohm", "Area of skin supplied by the sensory fibers of a single spinal nerve.", "skin area supplied by one spinal nerve", "pn", "body", []],
["Diagnostic and Statistical Manual of Mental Disorders", "dye-ag-NOS-tik and stah-TIS-tih-kal MAN-yoo-al", "Reference book that defines and classifies mental disorders.", "official classification of psychiatric disorders (DSM)", "ps", "lab", ["DSM"]],
["diencephalon", "dye-en-SEF-ah-lon", "The interbrain between the cerebrum and midbrain; contains the thalamus and hypothalamus.", "thalamus and hypothalamus together", "cn", "body", []],
["diplopia", "dih-PLOH-pee-ah", "Double vision (dipl/o = double, -opia = vision).", "double vision", "ds", "sx", []],
["disorientation", "dis-or-ee-en-TAY-shun", "Confusion about time, place or identity.", "not knowing time, place or self", "ps", "sx", []],
["dopamine", "DOH-pah-meen", "Neurotransmitter involved in movement, mood and reward; low in Parkinson disease.", "transmitter of movement and reward", "pn", "phys", ["DA"]],
["dopaminergic drugs", "doh-pah-mee-NER-jik drugz", "Drugs such as levodopa that raise dopamine activity to treat Parkinson disease.", "medicines that boost dopamine, used in Parkinson’s", "tx", "tx", []],
["dura mater", "DOO-rah MAY-ter", "Tough outer layer of the meninges ('hard mother') (dur/o = dura mater).", "tough outer layer of the meninges", "cn", "body", []],
["dysarthria", "dis-AR-three-ah", "Difficult, poorly pronounced speech from weak speech muscles (arthr/o = articulation).", "difficulty articulating speech", "ds", "sx", []],
["dyslexia", "dis-LEK-see-ah", "Difficulty reading and understanding written words (-lexia = reading).", "difficulty reading", "ds", "sx", []],
["dysphasia", "dis-FAY-zee-ah", "Difficulty with speech or with understanding language (dys- = difficult).", "difficulty speaking or understanding language", "lx", "sx", []],
["effector", "ee-FEK-tor", "Muscle or gland that responds to a motor impulse.", "muscle or gland that responds", "pn", "body", []],
["efferent neuron", "EF-er-ent NOO-ron", "Motor neuron that carries impulses away from the CNS to muscles and glands (ef- = away from).", "motor neuron carrying signals out", "pn", "body", []],
["electroconvulsive therapy", "ee-lek-troh-kon-VUL-siv THAIR-ah-pee", "Treatment of severe depression by passing a controlled electric current through the brain under anesthesia.", "controlled electric current for severe depression", "ps", "tx", ["ECT"]],
["electroencephalogram", "ee-lek-troh-en-SEF-ah-loh-gram", "The record (tracing) of the brain's electrical activity (-gram = record).", "tracing of the brain’s electrical activity", "tx", "lab", []],
["electroencephalography", "ee-lek-troh-en-sef-ah-LOG-rah-fee", "Recording the electrical activity of the brain with electrodes on the scalp.", "recording the brain’s electrical activity", "tx", "lab", ["EEG"]],
["electromyography", "ee-lek-troh-mye-OG-rah-fee", "Recording the electrical activity of muscles, to test nerves and muscles.", "recording the electrical activity of muscle", "tx", "lab", ["EMG"]],
["embolism", "EM-boh-lizm", "Blockage of a vessel by a clot or other material carried from elsewhere in the bloodstream.", "embolus", "ds", "dz", []],
["encephalitis", "en-sef-ah-LYE-tis", "Inflammation of the brain, usually caused by a virus (encephal/o = brain).", "inflammation of the brain", "lx", "dz", []],
["encephalopathy", "en-sef-ah-LOP-ah-thee", "Any disease or disorder of the brain tissue (encephal/o = brain, -pathy = disease).", "any disease of the brain", "lx", "dz", []],
["epidural hematoma", "ep-ih-DOO-ral hee-mah-TOH-mah", "Blood collection between the skull and the dura mater, usually from a torn artery after head injury.", "epidural haematoma", "ds", "dz", []],
["epidural space", "ep-ih-DOO-ral spays", "Space above (outside) the dura mater; used for epidural anesthesia in the spine.", "space above the dura", "cn", "body", []],
["epilepsy", "EP-ih-lep-see", "Disorder marked by recurrent seizures (epi- = upon, -lepsy = seizure).", "recurrent seizures", "ds", "dz", []],
["evoked potentials", "ee-VOHKT poh-TEN-shalz", "Recording of brain responses to stimuli such as sound, light or touch.", "brain responses to light, sound or touch", "tx", "lab", ["VEP"]],
["facial nerve", "FAY-shal nerv", "Seventh cranial nerve; controls the muscles of facial expression.", "seventh cranial nerve, moves the face", "pn", "body", []],
["fissure", "FISH-er", "A deep groove in the brain, such as the longitudinal fissure between the hemispheres.", "split", "cn", "body", []],
["flaccid", "FLAS-id", "Limp, without muscle tone.", "floppy, without tone", "ds", "sx", []],
["frontal lobe", "FRUN-tal lohb", "Front lobe of the cerebrum; controls voluntary movement, planning, personality and speech (Broca area).", "front lobe for movement, planning and personality", "cn", "body", []],
["ganglion", "GANG-glee-on", "Cluster of nerve cell bodies outside the CNS; plural ganglia (gangli/o = ganglion).", "cluster of cell bodies outside the CNS", "pn", "body", []],
["ganglionic", "gang-glee-ON-ik", "Pertaining to a ganglion.", "relating to a nerve cell cluster", "pn", "body", []],
["generalized anxiety disorder", "JEN-er-al-ized ang-ZYE-eh-tee dis-OR-der", "Constant, excessive worry about everyday things that lasts for months.", "generalised anxiety disorder", "ps", "psy", ["GAD"]],
["Glasgow Coma Scale", "GLAS-goh KOH-mah skayl", "Score from 3 to 15 for level of consciousness based on eye opening, verbal response and motor response.", "3 to 15 score of consciousness", "tx", "lab", ["GCS"]],
["glioblastoma", "glye-oh-blas-TOH-mah", "Most malignant, fast-growing type of glioma.", "most malignant glial tumour", "ds", "dz", []],
["glioma", "glye-OH-mah", "Tumor of the glial (supporting) cells of the brain.", "tumour of the supporting cells", "ds", "dz", []],
["gray matter", "gray MAT-er", "Nerve tissue made mostly of cell bodies; forms the cerebral cortex and the H-shaped center of the spinal cord.", "grey matter", "cn", "body", []],
["Guillain-Barré syndrome", "gee-YAN bah-RAY SIN-drohm", "Autoimmune attack on peripheral nerves, often after an infection, causing rising weakness and paralysis.", "immune attack on peripheral nerves with ascending weakness", "ds", "dz", []],
["gyrus", "JYE-rus", "A raised fold (convolution) on the surface of the cerebrum; plural gyri.", "raised fold on the brain surface", "cn", "body", []],
["hallucination", "hah-loo-sih-NAY-shun", "Seeing, hearing or feeling something that is not really there.", "perceiving something that is not there", "ps", "sx", []],
["hematoma", "hee-mah-TOH-mah", "Collection of blood in a tissue or space (hemat/o = blood, -oma = mass).", "pool of clotted blood", "ds", "dz", []],
["hemiparesis", "hem-ee-pah-REE-sis", "Weakness or partial paralysis of one side of the body (-paresis = partial paralysis).", "weakness of one side of the body", "lx", "sx", []],
["hemiplegia", "hem-ee-PLEE-jee-ah", "Paralysis of one side of the body (hemi- = half, -plegia = paralysis).", "paralysis of one side of the body", "lx", "sx", []],
["hemorrhage", "HEM-or-ij", "Bleeding; profuse escape of blood from a vessel.", "bleeding", "ds", "dz", []],
["herpes zoster", "HER-peez ZOS-ter", "Shingles; painful blistering rash along a dermatome from reactivation of the chickenpox virus in a nerve.", "shingles (herpes zoster)", "ds", "dz", []],
["homeostasis", "hoh-mee-oh-STAY-sis", "Steady, balanced internal state of the body, kept by the nervous and endocrine systems.", "keeping the body’s balance", "pn", "phys", []],
["Huntington chorea", "HUN-ting-ton koh-REE-ah", "Inherited degenerative disease with jerky involuntary movements (chorea) and dementia.", "hereditary dance-like movements and dementia", "ds", "dz", []],
["hydrocephalus", "hye-droh-SEF-ah-lus", "Buildup of cerebrospinal fluid in the ventricles, enlarging the head in infants (hydr/o = water, cephal/o = head).", "CSF build-up in the ventricles", "ds", "dz", []],
["hyperesthesia", "hye-per-es-THEE-zee-ah", "Increased sensitivity to touch or other stimuli.", "excessive sensitivity to sensation", "ds", "sx", []],
["hypnotic", "hip-NOT-ik", "Drug that induces sleep (hypn/o = sleep).", "sleep-inducing drug", "tx", "tx", []],
["hypochondriasis", "hye-poh-kon-DRYE-ah-sis", "Excessive worry about having a serious illness; illness anxiety disorder.", "constant fear of having a serious illness", "ps", "psy", []],
["hypothalamus", "hye-poh-THAL-ah-mus", "Region below the thalamus that controls body temperature, hunger, thirst, sleep and the pituitary gland.", "brain area controlling temperature, thirst and the pituitary", "cn", "body", []],
["impulse", "IM-puls", "Electrical signal that travels along a neuron.", "electrical message along a nerve fibre", "pn", "phys", []],
["infarct", "IN-farkt", "Area of dead tissue caused by loss of blood supply.", "area of dead tissue from lost blood supply", "ds", "dz", []],
["insomnia", "in-SOM-nee-ah", "Inability to fall asleep or stay asleep (in- = not, somn/o = sleep).", "inability to sleep", "ds", "sx", []],
["interneuron", "in-ter-NOO-ron", "Neuron inside the CNS that connects sensory and motor neurons.", "connecting nerve cell within the CNS", "pn", "body", []],
["intracranial", "in-trah-KRAY-nee-al", "Within the skull (intra- = within, crani/o = skull).", "within the skull", "cn", "body", ["ICP"]],
["ischemia", "is-KEE-mee-ah", "Lack of blood supply to a tissue (isch/o = hold back, -emia = blood).", "local lack of blood supply", "ds", "sx", []],
["laminectomy", "lam-ih-NEK-toh-mee", "Removal of the lamina of a vertebra to relieve pressure on the spinal cord or nerve roots.", "removal of the vertebral lamina", "tx", "tx", []],
["lethargy", "LETH-ar-jee", "Abnormal drowsiness, sluggishness and lack of energy.", "drowsiness and sluggishness", "ds", "sx", []],
["level of consciousness", "LEV-el ov KON-shus-nes", "Degree of alertness and awareness of a person.", "how alert and awake a person is", "tx", "lab", ["LOC"]],
["limbic system", "LIM-bik SIS-tem", "Group of brain structures involved in emotion, behavior and memory.", "brain circuit of emotion and memory", "cn", "phys", []],
["lumbar puncture", "LUM-bar PUNK-chur", "Inserting a needle between lumbar vertebrae (usually L3–L4) into the subarachnoid space to remove CSF; spinal tap.", "drawing spinal fluid with a needle in the lower back", "tx", "lab", ["LP"]],
["magnetic resonance angiography", "mag-NET-ik REZ-oh-nans an-jee-OG-rah-fee", "MRI study of blood vessels, such as those of the brain.", "MR angiography", "tx", "lab", ["MRA"]],
["magnetic resonance imaging", "mag-NET-ik REZ-oh-nans IM-ah-jing", "Imaging with a magnetic field and radio waves; shows soft tissue of the brain and spinal cord in detail.", "scan with magnets and radio waves", "tx", "lab", ["MRI"]],
["mania", "MAY-nee-ah", "State of excessive excitement, elevated mood, rapid speech and little need for sleep.", "excessive elation and energy", "ps", "sx", []],
["medulla oblongata", "meh-DUL-ah ob-long-GAH-tah", "Lowest part of the brainstem, continuous with the spinal cord; controls breathing, heartbeat and blood pressure.", "lowest brainstem part, controls breathing and heartbeat", "cn", "body", []],
["meningeal", "meh-NIN-jee-al", "Pertaining to the meninges.", "relating to the brain’s membranes", "cn", "body", []],
["meninges", "meh-NIN-jeez", "Three protective membranes around the brain and spinal cord: dura mater, arachnoid and pia mater (mening/o = meninges).", "membranes of the brain", "cn", "body", []],
["meningioma", "meh-nin-jee-OH-mah", "Usually benign, slow-growing tumor of the meninges.", "usually benign tumour of the brain’s membranes", "ds", "dz", []],
["meningitis", "men-in-JYE-tis", "Inflammation of the meninges, the membranes covering the brain and spinal cord (mening/o = meninges).", "inflammation of the brain membranes", "lx", "dz", []],
["meningocele", "meh-NING-goh-seel", "Protrusion of the meninges through a defect in the skull or spine (-cele = hernia).", "protrusion of the meninges", "ds", "dz", []],
["mental health", "MEN-tal helth", "State of emotional and psychological well-being (ment/o = mind).", "emotional and psychological well-being", "ps", "phys", []],
["midbrain", "MID-brayn", "Upper part of the brainstem; contains reflex centers for vision and hearing.", "upper part of the brainstem", "cn", "body", []],
["migraine", "MYE-grayn", "Severe, recurring headache, often one-sided, with nausea and sensitivity to light; may begin with an aura.", "severe one-sided headache with nausea", "ds", "dz", []],
["monoplegia", "mon-oh-PLEE-jee-ah", "Paralysis of one limb (mono- = one).", "paralysis of one limb", "ds", "sx", []],
["mood stabilizer", "mood STAY-bih-lye-zer", "Drug that evens out mood swings in bipolar disorder, such as lithium.", "mood stabiliser", "ps", "tx", []],
["motor", "MOH-tor", "Pertaining to movement; motor nerves carry commands to muscles and glands.", "relating to movement", "pn", "phys", []],
["multiple sclerosis", "MUL-tih-pul skleh-ROH-sis", "Disease in which the myelin sheath is destroyed and replaced by hard plaques, causing weakness, numbness and vision problems.", "autoimmune loss of myelin with plaques", "ds", "dz", ["MS"]],
["muscle relaxant", "MUS-el ree-LAK-sant", "Drug that relieves muscle spasm and stiffness.", "drug that loosens tight muscles", "tx", "tx", []],
["myasthenia gravis", "mye-as-THEE-nee-ah GRAV-is", "Autoimmune disease at the neuromuscular junction causing muscle weakness and fatigue, often of the eyelids (my/o = muscle, -asthenia = weakness).", "autoimmune muscle weakness", "ds", "dz", ["MG"]],
["myelin sheath", "MYE-eh-lin sheeth", "Fatty white covering around many axons that insulates them and speeds up impulses.", "white fatty coating of the axon", "pn", "body", []],
["myelitis", "mye-eh-LYE-tis", "Inflammation of the spinal cord (myel/o = spinal cord).", "inflammation of the spinal cord", "lx", "dz", []],
["myelography", "mye-eh-LOG-rah-fee", "X-ray of the spinal cord after injecting contrast into the subarachnoid space (myel/o = spinal cord).", "contrast X-ray of the spinal canal", "tx", "lab", []],
["myelomeningocele", "mye-eh-loh-meh-NING-goh-seel", "Protrusion of the spinal cord and meninges through a spinal defect; severe spina bifida.", "protrusion of cord and membranes through the spine", "ds", "dz", []],
["narcolepsy", "NAR-koh-lep-see", "Sleep disorder with sudden, uncontrollable attacks of sleep during the day (narc/o = stupor, -lepsy = seizure).", "sudden attacks of sleep", "ds", "dz", []],
["narcotic", "nar-KOT-ik", "Strong pain-relieving drug that can cause stupor and dependence, such as morphine (narc/o = stupor).", "strong painkiller with risk of dependence", "tx", "tx", []],
["nerve", "nerv", "A bundle of neuron fibers (axons) outside the CNS that carries impulses to or from the brain and spinal cord.", "bundle of axons outside the CNS", "lx", "body", []],
["nerve conduction study", "nerv kon-DUK-shun STUD-ee", "Test that measures how fast impulses travel along a nerve.", "measuring how fast a nerve carries signals", "tx", "lab", ["NCS"]],
["nerve root", "nerv root", "The part of a spinal nerve where it joins the spinal cord (radicul/o = nerve root).", "where a spinal nerve leaves the cord", "pn", "body", []],
["nervous system", "NER-vus SIS-tem", "The brain, spinal cord and nerves; it receives information, processes it and directs the activity of every other body system.", "brain, spinal cord and nerves", "lx", "body", []],
["neural", "NOO-ral", "Pertaining to a nerve or the nervous system (neur/o = nerve, -al = pertaining to).", "of the nerves", "lx", "body", []],
["neuralgia", "noo-RAL-jee-ah", "Sharp pain along the course of a nerve (neur/o = nerve, -algia = pain).", "nerve pain", "lx", "sx", []],
["neurectomy", "noo-REK-toh-mee", "Surgical removal of a nerve or part of a nerve.", "removal of part of a nerve", "tx", "tx", []],
["neuritis", "noo-RYE-tis", "Inflammation of a nerve (neur/o = nerve, -itis = inflammation).", "inflammation of a nerve", "lx", "dz", []],
["neuroglia", "noo-ROG-lee-ah", "Supporting cells of the nervous system that protect and nourish neurons; also called glial cells (gli/o = glue).", "supporting cells of nerve tissue", "lx", "body", []],
["neuroleptic", "noo-roh-LEP-tik", "Antipsychotic drug, such as haloperidol.", "antipsychotic drug", "ps", "tx", []],
["neuroleptic malignant syndrome", "noo-roh-LEP-tik mah-LIG-nant SIN-drohm", "Rare, life-threatening reaction to antipsychotic drugs with high fever, muscle rigidity and altered consciousness.", "dangerous fever and rigidity from antipsychotic drugs", "ps", "dz", ["NMS"]],
["neurologic", "noo-roh-LOJ-ik", "Pertaining to neurology or the nervous system; a neuro check assesses nervous function.", "relating to the nerves", "lx", "phys", []],
["neurological examination", "noo-roh-LOJ-ih-kal eg-zam-ih-NAY-shun", "Examination of mental status, cranial nerves, reflexes, strength, sensation and coordination.", "testing mental status, reflexes, strength and sensation", "tx", "lab", []],
["neurologist", "noo-ROL-oh-jist", "Physician who specializes in disorders of the nervous system; does not perform surgery.", "brain and nerve specialist", "lx", "field", []],
["neurology", "noo-ROL-oh-jee", "Branch of medicine that studies and treats disorders of the nervous system (neur/o = nerve, -logy = study of).", "study of the nervous system", "lx", "field", []],
["neurolysis", "noo-ROL-ih-sis", "Destruction or loosening of a nerve (-lysis = destruction, loosening).", "freeing or destroying a nerve", "tx", "tx", []],
["neuromuscular", "noo-roh-MUS-kyoo-lar", "Pertaining to nerves and muscles; the neuromuscular junction is where a motor neuron meets a muscle fiber.", "relating to nerve and muscle", "pn", "phys", []],
["neuron", "NOO-ron", "The basic cell of the nervous system; it carries electrical impulses (neur/o = nerve).", "nerve cell", "lx", "body", []],
["neuropathy", "noo-ROP-ah-thee", "Any disease of the nerves, often with numbness, tingling and weakness (-pathy = disease).", "nerve disease (neuropathy)", "lx", "dz", []],
["neuroplasty", "NOO-roh-plas-tee", "Surgical repair of a nerve (-plasty = surgical repair).", "nerve repair", "tx", "tx", []],
["neurorrhaphy", "noo-ROR-ah-fee", "Suturing of a severed nerve (-rrhaphy = suture).", "nerve suture", "tx", "tx", []],
["neurosis", "noo-ROH-sis", "Older term for an emotional disorder with anxiety but without loss of contact with reality.", "anxiety without losing touch with reality", "ps", "psy", []],
["neurosurgeon", "noo-roh-SER-jun", "Surgeon who operates on the brain, spinal cord and nerves.", "surgeon of the brain, cord and nerves", "lx", "field", []],
["neurosurgery", "noo-roh-SER-jer-ee", "Surgery of the nervous system.", "operations on the brain, cord and nerves", "lx", "field", []],
["neurotransmitter", "noo-roh-TRANS-mit-er", "Chemical released at a synapse that carries the impulse to the next cell, such as acetylcholine or dopamine.", "chemical messenger at a synapse", "pn", "phys", []],
["obsessive-compulsive disorder", "ob-SES-iv kom-PUL-siv dis-OR-der", "Anxiety disorder with recurring unwanted thoughts (obsessions) and repeated actions (compulsions).", "repeated unwanted thoughts and acts", "ps", "psy", ["OCD"]],
["occipital lobe", "ok-SIP-ih-tal lohb", "Back lobe of the cerebrum; controls vision and visual interpretation (reading).", "back lobe for vision", "cn", "body", []],
["occupational therapy", "ok-yoo-PAY-shun-al THAIR-ah-pee", "Therapy that helps patients relearn activities of daily living.", "retraining everyday tasks", "tx", "tx", ["OT"]],
["optic nerve", "OP-tik nerv", "Second cranial nerve; carries vision from the eye to the brain.", "second cranial nerve, for vision", "pn", "body", []],
["panic disorder", "PAN-ik dis-OR-der", "Repeated sudden attacks of intense fear with pounding heart, shortness of breath and chest pain.", "sudden attacks of intense fear", "ps", "psy", []],
["paralysis", "pah-RAL-ih-sis", "Loss of muscle function and movement in a part of the body (-plegia = paralysis).", "loss of muscle function", "ds", "sx", []],
["paranoia", "pair-ah-NOY-ah", "Mental state with unfounded suspicion and a feeling of being threatened or persecuted.", "groundless feeling of being persecuted", "ps", "sx", []],
["paraplegia", "pair-ah-PLEE-jee-ah", "Paralysis of both legs and the lower part of the body, usually from spinal cord injury.", "paralysis of both legs and lower body", "ds", "sx", []],
["parasympathetic nervous system", "pair-ah-sim-pah-THET-ik NER-vus SIS-tem", "Division of the ANS that calms the body and restores energy: 'rest and digest'.", "“rest and digest” division", "pn", "phys", []],
["paresthesia", "pair-es-THEE-zee-ah", "Abnormal sensation such as numbness, tingling or 'pins and needles' (para- = abnormal).", "tingling and pins and needles", "ds", "sx", []],
["parietal lobe", "pah-RYE-eh-tal lohb", "Upper middle lobe of the cerebrum; receives touch, pain and temperature sensations.", "upper lobe for touch and pain", "cn", "body", []],
["Parkinson disease", "PAR-kin-son dih-ZEEZ", "Progressive disease from loss of dopamine, causing tremor, rigidity, slow movement and a shuffling gait.", "tremor, rigidity and slowness from lack of dopamine", "ds", "dz", ["PD"]],
["peripheral nervous system", "peh-RIF-er-al NER-vus SIS-tem", "All the nerves outside the brain and spinal cord: 12 pairs of cranial nerves and 31 pairs of spinal nerves.", "all nerves outside the brain and cord", "lx", "body", ["PNS"]],
["personality disorder", "per-soh-NAL-ih-tee dis-OR-der", "Long-lasting, inflexible patterns of behavior and thinking that cause problems in relationships and work.", "lasting unhealthy pattern of thinking and behaving", "ps", "psy", []],
["phobia", "FOH-bee-ah", "Extreme, persistent, irrational fear of a specific object or situation.", "intense irrational fear of something specific", "ps", "psy", []],
["physical therapy", "FIZ-ih-kal THAIR-ah-pee", "Treatment with exercise and movement to restore strength and function.", "exercise to restore strength and walking", "tx", "tx", ["PT"]],
["pia mater", "PEE-ah MAY-ter", "Delicate inner layer of the meninges that clings to the brain and spinal cord ('soft mother').", "delicate inner layer of the meninges", "cn", "body", []],
["plexus", "PLEK-sus", "Network of interlacing nerves, such as the brachial or lumbosacral plexus.", "network of joining nerves", "pn", "body", []],
["poliomyelitis", "poh-lee-oh-mye-eh-LYE-tis", "Viral inflammation of the gray matter of the spinal cord that may cause paralysis (poli/o = gray).", "viral inflammation of the cord’s grey matter", "ds", "dz", []],
["polyneuritis", "pol-ee-noo-RYE-tis", "Inflammation of many nerves at once (poly- = many).", "inflammation of many nerves", "pn", "dz", []],
["pons", "ponz", "Part of the brainstem between the midbrain and medulla; a bridge connecting parts of the brain (pont/o = pons).", "middle part of the brainstem", "cn", "body", []],
["positron emission tomography", "POZ-ih-tron ee-MISH-un toh-MOG-rah-fee", "Nuclear imaging with a radioactive tracer that shows brain activity and metabolism.", "scan of brain activity with a radioactive tracer", "tx", "lab", ["PET"]],
["posttraumatic stress disorder", "post-traw-MAT-ik stres dis-OR-der", "Anxiety, flashbacks and nightmares after a terrifying event.", "anxiety and flashbacks after a terrifying event", "ps", "psy", ["PTSD"]],
["psychiatric", "sye-kee-AT-rik", "Pertaining to psychiatry or to mental disorders.", "relating to mental disorders", "ps", "psy", []],
["psychiatrist", "sye-KYE-ah-trist", "Physician who treats mental disorders and may prescribe medication.", "physician for mental disorders", "lx", "field", []],
["psychiatry", "sye-KYE-ah-tree", "Branch of medicine that diagnoses and treats mental disorders (psych/o = mind, iatr/o = treatment).", "medicine of mental disorders", "lx", "field", []],
["psychogenic", "sye-koh-JEN-ik", "Originating in the mind (psych/o = mind, -genic = producing).", "of mental origin", "lx", "psy", []],
["psychologist", "sye-KOL-oh-jist", "Specialist (not a physician) who studies behavior and treats mental disorders with psychotherapy and testing.", "specialist in testing and talking therapy", "lx", "field", []],
["psychology", "sye-KOL-oh-jee", "The study of the mind, behavior and mental processes.", "study of the mind and behaviour", "lx", "field", []],
["psychosis", "sye-KOH-sis", "Serious mental state with loss of contact with reality, often with delusions and hallucinations.", "losing touch with reality", "ps", "psy", []],
["psychotherapy", "sye-koh-THAIR-ah-pee", "Treatment of mental disorders by talking with a trained therapist.", "treatment by talking", "ps", "tx", []],
["quadriplegia", "kwah-drih-PLEE-jee-ah", "Paralysis of all four limbs; also called tetraplegia (quadri- = four).", "paralysis of all four limbs", "ds", "sx", []],
["radiculitis", "rah-dik-yoo-LYE-tis", "Inflammation of a spinal nerve root.", "inflammation of a nerve root", "pn", "dz", []],
["radiculopathy", "rah-dik-yoo-LOP-ah-thee", "Disease of a spinal nerve root, causing pain, numbness or weakness (radicul/o = nerve root).", "disease of a nerve root", "ds", "dz", []],
["receptor", "ree-SEP-tor", "Sensory nerve ending that detects a stimulus such as touch, heat or pain.", "structure that senses a stimulus", "pn", "body", []],
["reflex", "REE-fleks", "Simple, rapid, automatic response to a stimulus that needs few cells, such as the knee-jerk reflex.", "fast automatic response", "pn", "phys", []],
["reflex arc", "REE-fleks ark", "Pathway of a reflex: receptor, sensory neuron, spinal cord, motor neuron and effector.", "path of an automatic response", "pn", "phys", []],
["rehabilitation", "ree-hah-bil-ih-TAY-shun", "Therapy program that helps a patient regain function after illness or injury.", "restoring ability after illness or injury", "tx", "tx", []],
["Reye syndrome", "rye SIN-drohm", "Rare brain and liver disorder in children, linked to aspirin use during a viral illness.", "brain and liver damage after aspirin in children", "ds", "dz", []],
["rhizotomy", "rye-ZOT-oh-mee", "Cutting a spinal nerve root to relieve severe pain or spasticity (rhiz/o = root).", "cutting a nerve root", "tx", "tx", []],
["schizophrenia", "skiz-oh-FREE-nee-ah", "Psychotic disorder with delusions, hallucinations, disorganized thinking and withdrawal (schiz/o = split, phren/o = mind).", "psychotic disorder with a mind split from reality", "ps", "psy", []],
["Schwann cell", "shvahn sel", "Cell that forms the myelin sheath around axons in the peripheral nervous system.", "cell that makes myelin in the PNS", "pn", "body", []],
["sciatic nerve", "sye-AT-ik nerv", "Largest nerve of the body; runs from the lower back down the back of the leg.", "largest nerve, from lower back down the leg", "pn", "body", []],
["sciatica", "sye-AT-ih-kah", "Pain along the sciatic nerve, down the back of the leg, often from a herniated disk.", "pain along the leg’s largest nerve", "ds", "dz", []],
["seasonal affective disorder", "SEE-zon-al af-FEK-tiv dis-OR-der", "Depression that occurs during the dark winter months.", "winter depression", "ps", "psy", ["SAD"]],
["sedative", "SED-ah-tiv", "Drug that calms and relaxes; in larger doses may cause sleep.", "calming drug", "tx", "tx", []],
["seizure", "SEE-zher", "Sudden burst of abnormal electrical activity in the brain that may cause convulsions or loss of awareness.", "sudden electrical storm in the brain", "ds", "sx", []],
["sensory", "SEN-soh-ree", "Pertaining to sensation; sensory nerves carry information to the CNS.", "relating to sensation", "pn", "phys", []],
["serotonin", "ser-oh-TOH-nin", "Neurotransmitter that affects mood, sleep and appetite; low levels are linked with depression.", "transmitter of mood, sleep and appetite", "pn", "phys", []],
["somatic nervous system", "soh-MAT-ik NER-vus SIS-tem", "Part of the PNS that controls voluntary movement of skeletal muscles (somat/o = body).", "voluntary control of skeletal muscles", "pn", "body", ["SNS"]],
["somatic symptom disorder", "soh-MAT-ik SIMP-tom dis-OR-der", "Physical symptoms with excessive worry about them, without a fully explaining medical cause.", "physical symptoms with excessive worry", "ps", "psy", ["SSD"]],
["spasticity", "spas-TIS-ih-tee", "Stiff, tight muscles with exaggerated reflexes, from damage to motor neurons.", "muscle stiffness with exaggerated reflexes", "ds", "sx", []],
["spina bifida", "SPYE-nah BIF-ih-dah", "Birth defect in which the vertebral column does not close completely around the spinal cord.", "incomplete closure of the spine", "ds", "dz", []],
["spinal cord", "SPYE-nal kord", "Column of nerve tissue from the medulla to the second lumbar vertebra that carries impulses to and from the brain (myel/o = spinal cord).", "column of nerve tissue inside the spine", "cn", "body", []],
["spinal cord injury", "SPYE-nal kord IN-jer-ee", "Damage to the spinal cord that may cause paraplegia or quadriplegia below the injury.", "damage to the cord with paralysis below it", "ds", "dz", ["SCI"]],
["spinal fusion", "SPYE-nal FYOO-zhun", "Surgery that joins two or more vertebrae to stabilize the spine.", "fusing vertebrae", "tx", "tx", []],
["spinal nerves", "SPYE-nal nervz", "Thirty-one pairs of nerves that arise from the spinal cord: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral and 1 coccygeal.", "31 pairs of nerves leaving the cord", "pn", "body", []],
["stereotactic radiosurgery", "ster-ee-oh-TAK-tik ray-dee-oh-SER-jer-ee", "Precisely aimed radiation beams that destroy a brain tumor without open surgery.", "precise beams that destroy a tumour without opening the skull", "tx", "tx", []],
["stimulant", "STIM-yoo-lant", "Drug that increases alertness and activity, such as those used for ADHD.", "drug that increases alertness, used in ADHD", "tx", "tx", []],
["stimulus", "STIM-yoo-lus", "A change inside or outside the body that starts a nerve impulse; plural stimuli.", "change that triggers a response", "pn", "phys", []],
["subarachnoid space", "sub-ah-RAK-noyd spays", "Space below the arachnoid that contains cerebrospinal fluid.", "CSF-filled space beneath the arachnoid", "cn", "body", []],
["subdural hematoma", "sub-DOO-ral hee-mah-TOH-mah", "Blood collection between the dura mater and the arachnoid, usually from a torn vein.", "subdural haematoma", "ds", "dz", []],
["subdural space", "sub-DOO-ral spays", "Space below the dura mater, between it and the arachnoid.", "space beneath the dura", "cn", "body", []],
["substance use disorder", "SUB-stans yooz dis-OR-der", "Repeated use of alcohol or drugs despite harm; addiction.", "harmful, uncontrolled drug or alcohol use", "ps", "psy", []],
["sulcus", "SUL-kus", "A shallow groove between gyri on the surface of the cerebrum; plural sulci.", "groove", "cn", "body", []],
["sympathectomy", "sim-pah-THEK-toh-mee", "Cutting part of the sympathetic nerve pathway.", "cutting sympathetic nerves", "tx", "tx", []],
["sympathetic nervous system", "sim-pah-THET-ik NER-vus SIS-tem", "Division of the ANS that prepares the body for stress: 'fight or flight'.", "“fight or flight” division", "pn", "phys", []],
["synapse", "SIN-aps", "Junction between two neurons, or between a neuron and a muscle, where impulses pass by chemicals.", "junction between two neurons", "pn", "phys", []],
["syncope", "SING-koh-pee", "Fainting; brief loss of consciousness from too little blood flow to the brain.", "fainting", "ds", "sx", []],
["temporal lobe", "TEM-poh-ral lohb", "Side lobe of the cerebrum; controls hearing, smell and understanding of speech (Wernicke area).", "side lobe for hearing and understanding speech", "cn", "body", []],
["thalamic", "thah-LAM-ik", "Pertaining to the thalamus.", "relating to the brain’s sensory relay station", "cn", "body", []],
["thalamus", "THAL-ah-mus", "Relay center in the diencephalon that sends sensory impulses to the cerebral cortex (thalam/o = thalamus).", "sensory relay station of the brain", "cn", "body", []],
["thrombolytic therapy", "throm-boh-LIT-ik THAIR-ah-pee", "Clot-dissolving drugs (fibrinolytics such as tPA) given soon after an ischemic stroke.", "clot-dissolving therapy", "tx", "tx", ["tPA"]],
["thrombosis", "throm-BOH-sis", "Formation of a blood clot that blocks a vessel; the most common cause of ischemic stroke.", "blood clot formation in a vessel", "ds", "dz", []],
["tonic-clonic seizure", "TON-ik KLON-ik SEE-zher", "Generalized seizure with loss of consciousness, body stiffening (tonic) then jerking (clonic); formerly grand mal.", "stiffening then jerking (grand mal)", "ds", "dz", []],
["transcutaneous electrical nerve stimulation", "trans-kyoo-TAY-nee-us ee-LEK-trih-kal nerv stim-yoo-LAY-shun", "Pain relief with mild electrical currents applied through the skin.", "pain relief with current through the skin", "tx", "tx", ["TENS"]],
["transient ischemic attack", "TRAN-see-ent is-KEE-mik ah-TAK", "Temporary interruption of blood flow to the brain with stroke-like symptoms that clear within 24 hours; a warning sign of stroke.", "transient ischaemic attack (mini-stroke)", "ds", "dz", ["TIA"]],
["traumatic brain injury", "traw-MAT-ik brayn IN-jer-ee", "Damage to the brain caused by an external force such as a fall or accident.", "brain damage from an external force", "ds", "dz", ["TBI"]],
["tremor", "TREM-or", "Involuntary, rhythmic shaking of a part of the body.", "involuntary trembling", "ds", "sx", []],
["trigeminal nerve", "trye-JEM-ih-nal nerv", "Fifth cranial nerve with three branches; carries sensation from the face and controls chewing.", "fifth cranial nerve, facial sensation and chewing", "pn", "body", []],
["trigeminal neuralgia", "trye-JEM-ih-nal noo-RAL-jee-ah", "Severe, stabbing facial pain along the trigeminal nerve; tic douloureux.", "shooting facial pain along the fifth cranial nerve", "ds", "dz", ["TN"]],
["unconscious", "un-KON-shus", "Not awake or aware of the surroundings; not responding to stimuli.", "not awake or responsive", "ds", "sx", []],
["vagal", "VAY-gal", "Pertaining to the vagus nerve.", "relating to the tenth cranial nerve", "pn", "body", []],
["vagotomy", "vay-GOT-oh-mee", "Cutting of the vagus nerve.", "cutting the vagus nerve", "tx", "tx", []],
["vagus nerve", "VAY-gus nerv", "Tenth cranial nerve; supplies most organs in the chest and abdomen (vag/o = vagus).", "tenth cranial nerve, to heart, lungs and gut", "pn", "body", []],
["ventricle", "VEN-trih-kul", "One of four cavities in the brain that make and hold cerebrospinal fluid (ventricul/o = ventricle).", "fluid-filled cavity in the brain", "cn", "body", []],
["ventriculoperitoneal shunt", "ven-trik-yoo-loh-pair-ih-toh-NEE-al shunt", "Tube that drains extra CSF from a brain ventricle into the abdomen to treat hydrocephalus.", "tube draining CSF to the abdomen", "tx", "tx", ["VP"]],
["vertigo", "VER-tih-goh", "Sensation that the room or oneself is spinning; dizziness.", "dizziness with a spinning sensation", "ds", "sx", []],
["Wernicke area", "VER-nih-kee AIR-ee-ah", "Region of the temporal lobe that controls the understanding of speech.", "speech-understanding centre in the temporal lobe", "cn", "phys", []],
["white matter", "wyte MAT-er", "Nerve tissue made of myelinated axons; carries impulses between parts of the CNS.", "myelinated fibres", "cn", "body", []]];
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — داده واژه‌نامه: ریشه‌ها، پیشوندها، پسوندها، اختصارها و دسته‌های واژه (موتور: engine/js/lexicon.js)
 * ریشه‌ها و اختصارها از Total.txt و پنج فصل PDF پیوست (Cohen، Gylys، Fremgen، Dummies و…) گردآوری و دستی پالایش شده‌اند.
 * دنیاها: lx زبان عصب (همه واژه‌ها) • cn مغز و نخاع • pn اعصاب محیطی و خودکار • ds نشانه‌ها و بیماری‌ها • ps سلامت روان • tx تشخیص و درمان */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const roots = [
    // پیشوندها
    ['a-, an-', ['an', 'a'], 'without, not', "without, lacking", '*'],
    ['af-', ['af'], 'toward', "toward", 'pn'],
    ['anti-', ['anti'], 'against', "against", 'tx'],
    ['de-', ['de'], 'down, loss, removal', "decrease, loss", 'ds'],
    ['dys-', ['dys'], 'difficult, painful, abnormal', "difficult, abnormal", 'lx'],
    ['ef-', ['ef'], 'away from', "away from", 'pn'],
    ['epi-', ['epi'], 'above, upon', "upon, above", 'ds'],
    ['hemi-', ['hemi'], 'half, one side', "half", 'lx'],
    ['hyper-', ['hyper'], 'excessive, above normal', "excessive", '*'],
    ['hypo-', ['hypo', 'hyp'], 'below, deficient', "below, less than normal", '*'],
    ['in-', ['in'], 'not; in', "not, in", 'ds'],
    ['inter-', ['inter'], 'between', "between", 'pn'],
    ['intra-', ['intra'], 'within', "within", 'cn'],
    ['mono-', ['mono'], 'one', "one", 'ds'],
    ['para-', ['para', 'par'], 'beside; abnormal', "beside, abnormal", 'ds'],
    ['poly-', ['poly'], 'many', "many", 'ds'],
    ['quadri-, tetra-', ['quadri', 'tetra'], 'four', "four", 'ds'],
    ['sub-', ['sub'], 'below, under', "below", 'cn'],
    ['trans-', ['trans'], 'across, through', "through", 'tx'],
    // ریشه‌ها: عصب و نخاع
    ['neur/o, neur/i', ['neur'], 'nerve, nervous system', "nerve", 'lx'],
    ['gli/o', ['gli'], 'neuroglia (glue)', "nerve supporting cell (glue)", 'lx'],
    ['gangli/o, ganglion/o', ['ganglion', 'gangli'], 'ganglion', "ganglion", 'pn'],
    ['mening/o, meningi/o', ['meningi', 'mening'], 'meninges', "membranes of the brain", 'lx'],
    ['myel/o', ['myel'], 'spinal cord; bone marrow', "spinal cord; bone marrow", 'lx'],
    ['radicul/o, rhiz/o', ['radicul', 'rhiz'], 'nerve root', "nerve root", 'pn'],
    ['spin/o', ['spin'], 'spine', "spine, spinal cord", 'cn'],
    ['vag/o', ['vag'], 'vagus nerve', "vagus nerve", 'pn'],
    ['dendr/o', ['dendr'], 'tree', "tree", 'pn'],
    ['somat/o', ['somat'], 'body', "body", 'pn'],
    // ریشه‌ها: مغز
    ['encephal/o', ['encephal'], 'brain', "brain", 'lx'],
    ['cerebr/o', ['cerebr'], 'cerebrum, brain', "cerebrum, brain", 'lx'],
    ['cerebell/o', ['cerebell'], 'cerebellum', "cerebellum", 'cn'],
    ['cortic/o', ['cortic'], 'cortex (outer layer)', "cortex", 'cn'],
    ['thalam/o', ['thalam'], 'thalamus', "thalamus", 'cn'],
    ['pont/o', ['pont'], 'pons', "pons", 'cn'],
    ['medull/o', ['medull'], 'medulla oblongata', "medulla oblongata", 'cn'],
    ['ventricul/o', ['ventricul'], 'ventricle (cavity)', "pumping chamber of the heart", 'cn'],
    ['crani/o', ['crani'], 'cranium (skull)', "skull", 'cn'],
    ['cephal/o', ['cephal'], 'head', "head", 'ds'],
    ['dur/o', ['dur'], 'dura mater', "dura mater", 'cn'],
    ['hydr/o', ['hydr'], 'water', "water", 'ds'],
    ['vascul/o', ['vascul'], 'blood vessel', "blood vessel", 'ds'],
    ['hem/o, hemat/o', ['hemat', 'hem'], 'blood', "blood", 'ds'],
    ['isch/o', ['isch'], 'to hold back', "prevention, deficiency", 'ds'],
    ['thromb/o', ['thromb'], 'blood clot', "blood clot", 'ds'],
    ['poli/o', ['poli'], 'gray (matter)', "grey", 'ds'],
    // ریشه‌ها: حس، حرکت و ذهن
    ['esthesi/o', ['esthesi', 'esthes', 'esthet'], 'feeling, sensation', "sensation", 'lx'],
    ['alges/o, algesi/o', ['algesi', 'alges'], 'pain', "pain", 'ds'],
    ['kinesi/o', ['kinesi'], 'movement', "Movement", 'ds'],
    ['tax/o', ['tax'], 'order, coordination', "order, coordination", 'ds'],
    ['gnos/o', ['gnos'], 'knowledge, recognition', "knowing", 'ds'],
    ['phas/o', ['phas'], 'speech', "speech", 'ds'],
    ['my/o', ['my'], 'muscle', "muscle", 'ds'],
    ['muscul/o', ['muscul'], 'muscle', "muscle", 'pn'],
    ['arthr/o', ['arthr'], 'joint; articulation (of speech)', "joint; articulation", 'ds'],
    ['lamin/o', ['lamin'], 'lamina (part of a vertebra)', "vertebral lamina", 'tx'],
    ['embol/o', ['embol'], 'plug, embolus', "travelling clot", 'ds'],
    ['psych/o', ['psych'], 'mind', "psyche, mind", 'lx'],
    ['ment/o, phren/o', ['ment', 'phren'], 'mind', "mind", 'ps'],
    ['schiz/o', ['schiz'], 'split', "split", 'ps'],
    ['somn/o, hypn/o', ['somn', 'hypn'], 'sleep', "sleep", 'ds'],
    ['narc/o', ['narc'], 'stupor, numbness', "numbness, stupor", 'ds'],
    ['aut/o', ['aut'], 'self', "self", 'ps'],
    ['electr/o', ['electr'], 'electricity', "electricity", 'tx'],
    ['cry/o', ['cry'], 'cold', "cold", 'tx'],
    ['iatr/o', ['iatr'], 'treatment, physician', "treatment, physician", 'lx'],
    ['dipl/o', ['dipl'], 'double', "two-unit", 'ds'],
    ['astr/o', ['astr'], 'star', "star", 'ds'],
    ['cyt/o', ['cyt'], 'cell', "cell", 'ds'],
    ['sympath/o', ['sympath'], 'sympathetic nerves', "sympathetic nerve", 'tx'],
    // پسوندها
    ['-al, -ic, -ar, -ary, -eal, -ous', ['ary', 'eal', 'ial', 'ous', 'ic', 'al', 'ar'], 'pertaining to', "pertaining to", '*'],
    ['-is, -um, -us, -a, -on', ['is', 'um', 'us', 'on', 'a'], 'noun ending', "noun ending", '*'],
    ['-ia, -y', ['ia', 'y'], 'condition', "condition", '*'],
    ['-ist', ['ist'], 'specialist', "specialist", 'lx'],
    ['-logist', ['logist'], 'specialist in the study of', "specialist", 'lx'],
    ['-logy', ['logy'], 'study of', "study of", 'lx'],
    ['-itis', ['itis'], 'inflammation', "inflammation", '*'],
    ['-osis', ['osis', 'sis'], 'abnormal condition', "abnormal condition", '*'],
    ['-oma', ['oma'], 'tumor, mass', "tumour, mass", '*'],
    ['-pathy', ['pathy'], 'disease', "disease", 'lx'],
    ['-algia', ['algia'], 'pain', "pain", 'lx'],
    ['-genic', ['genic'], 'producing, originating in', "produced by", 'lx'],
    ['-plegia', ['plegia'], 'paralysis', "paralysis", 'lx'],
    ['-paresis', ['paresis'], 'partial paralysis, weakness', "slight paralysis, weakness", 'lx'],
    ['-phasia', ['phasia'], 'speech', "speech", 'lx'],
    ['-lexia', ['lexia'], 'reading, words', "Reading", 'ds'],
    ['-esthesia', ['esthesia'], 'feeling, sensation', "sensation", 'lx'],
    ['-algesia', ['algesia'], 'sensitivity to pain', "sensation of pain", 'ds'],
    ['-asthenia', ['asthenia'], 'weakness', "weakness", 'ds'],
    ['-lepsy', ['lepsy'], 'seizure', "attack, seizure", 'ds'],
    ['-mnesia', ['mnesia'], 'memory', "memory", 'ds'],
    ['-phobia', ['phobia'], 'irrational fear', "intense fear", 'ps'],
    ['-mania', ['mania'], 'excited state, obsession', "madness, obsession", 'ps'],
    ['-phrenia', ['phrenia'], 'mind', "mind", 'ps'],
    ['-cele', ['cele'], 'hernia, protrusion', "hernia, protrusion", 'ds'],
    ['-emia', ['emia'], 'blood condition', "blood condition", 'ds'],
    ['-opia', ['opia'], 'vision', "vision", 'ds'],
    ['-tomy', ['tomy'], 'incision, cutting into', "incision", '*'],
    ['-ectomy', ['ectomy'], 'surgical removal', "surgical removal", '*'],
    ['-plasty', ['plasty'], 'surgical repair', "surgical repair", 'tx'],
    ['-rrhaphy', ['rrhaphy'], 'suture', "stitch", 'tx'],
    ['-lysis', ['lysis'], 'destruction, loosening', "destruction, freeing", 'tx'],
    ['-lytic', ['lytic'], 'breaking down, relieving', "destroying agent", 'tx'],
    ['-graphy', ['graphy'], 'process of recording', "recording process", 'tx'],
    ['-gram', ['gram'], 'record', "writing, record", 'tx'],
    ['-blast', ['blast'], 'immature cell', "immature cell", 'ds'],
    ['-ism', ['ism'], 'condition, process', "condition", 'ds'],
    ['-therapy', ['therapy'], 'treatment', "treatment", 'tx']
  ];
  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const abbr = [
    ['ACh', 'acetylcholine', "acetylcholine", 'pn'],
    ['AD', "Alzheimer disease", "Alzheimer disease", 'ds'],
    ['ADHD', 'attention-deficit/hyperactivity disorder', "attention-deficit/hyperactivity disorder", 'ps'],
    ['ALS', 'amyotrophic lateral sclerosis', "amyotrophic lateral sclerosis", 'ds'],
    ['ANS', 'autonomic nervous system', "autonomic nervous system", 'pn'],
    ['ASD', 'autism spectrum disorder', "autism spectrum disorder", 'ps'],
    ['BPD', 'bipolar disorder', "bipolar disorder", 'ps'],
    ['C1–C8', 'cervical nerves (or vertebrae) 1 to 8', "cervical nerves 1 to 8", 'pn'],
    ['c/o', 'complains of', "complains of", 'lx'],
    ['CBT', 'cognitive behavioral therapy', "cognitive behavioural therapy", 'ps'],
    ['CJD', 'Creutzfeldt-Jakob disease', "Creutzfeldt–Jakob disease", 'ds'],
    ['CNS', 'central nervous system', "central nervous system", 'lx'],
    ['CP', 'cerebral palsy', "cerebral palsy", 'ds'],
    ['CSF', 'cerebrospinal fluid', "cerebrospinal fluid", 'cn'],
    ['CT', 'computed tomography', "CT scan", 'tx'],
    ['CTE', 'chronic traumatic encephalopathy', "chronic traumatic encephalopathy", 'ds'],
    ['CVA', 'cerebrovascular accident (stroke)', "stroke", 'ds'],
    ['CVD', 'cerebrovascular disease', "cerebrovascular disease", 'ds'],
    ['DA', 'dopamine', "dopamine", 'pn'],
    ['DSM', 'Diagnostic and Statistical Manual of Mental Disorders', "Diagnostic and Statistical Manual of Mental Disorders", 'ps'],
    ['DTR', 'deep tendon reflex', "deep tendon reflex", 'pn'],
    ['ECT', 'electroconvulsive therapy', "electroconvulsive therapy", 'ps'],
    ['ED', 'emergency department', "emergency department", 'tx'],
    ['EEG', 'electroencephalogram, electroencephalography', "EEG recording", 'tx'],
    ['EMG', 'electromyography', "electromyography", 'tx'],
    ['GA', 'general anesthesia', "general anaesthesia", 'tx'],
    ['GAD', 'generalized anxiety disorder', "generalised anxiety disorder", 'ps'],
    ['GCS', 'Glasgow Coma Scale', "Glasgow Coma Scale", 'tx'],
    ['HA', 'headache', "headache", 'ds'],
    ['ICP', 'intracranial pressure', "intracranial pressure", 'cn'],
    ['L1–L5', 'lumbar nerves (or vertebrae) 1 to 5', "lumbar nerves 1 to 5", 'pn'],
    ['LMN', 'lower motor neuron', "lower motor neuron", 'pn'],
    ['LOC', 'level of consciousness; loss of consciousness', "level of consciousness; loss of consciousness", 'tx'],
    ['LP', 'lumbar puncture', "lumbar puncture", 'tx'],
    ['MAOI', 'monoamine oxidase inhibitor', "monoamine oxidase inhibitor", 'ps'],
    ['MG', 'myasthenia gravis', "autoimmune muscle weakness", 'ds'],
    ['MRA', 'magnetic resonance angiography', "MR angiography", 'tx'],
    ['MRI', 'magnetic resonance imaging', "magnetic resonance imaging", 'tx'],
    ['MS', 'multiple sclerosis', "multiple sclerosis (MS)", 'ds'],
    ['MTBI', 'mild traumatic brain injury', "Mild brain injury", 'ds'],
    ['NCS', 'nerve conduction study', "nerve conduction study", 'tx'],
    ['NICU', 'neurologic intensive care unit', "neurological intensive care unit", 'tx'],
    ['NMS', 'neuroleptic malignant syndrome', "neuroleptic malignant syndrome", 'ps'],
    ['OCD', 'obsessive-compulsive disorder', "obsessive-compulsive disorder", 'ps'],
    ['OT', 'occupational therapy', "occupational therapy", 'tx'],
    ['PD', 'Parkinson disease', "Parkinson disease", 'ds'],
    ['PET', 'positron emission tomography', "positron emission tomography", 'tx'],
    ['PNS', 'peripheral nervous system', "peripheral nervous system", 'lx'],
    ['PT', 'physical therapy', "physical therapy", 'tx'],
    ['PTSD', 'posttraumatic stress disorder', "post-traumatic stress disorder", 'ps'],
    ['REM', 'rapid eye movement (sleep)', "rapid eye movement sleep", 'cn'],
    ['SAD', 'seasonal affective disorder', "seasonal affective disorder", 'ps'],
    ['SCI', 'spinal cord injury', "spinal cord injury", 'ds'],
    ['SNS', 'somatic nervous system', "somatic nervous system", 'pn'],
    ['SSD', 'somatic symptom disorder', "somatic symptom disorder", 'ps'],
    ['SSRI', 'selective serotonin reuptake inhibitor', "selective serotonin reuptake inhibitor", 'ps'],
    ['T1–T12', 'thoracic nerves (or vertebrae) 1 to 12', "thoracic nerves 1 to 12", 'pn'],
    ['TBI', 'traumatic brain injury', "traumatic brain injury", 'ds'],
    ['TENS', 'transcutaneous electrical nerve stimulation', "transcutaneous electrical nerve stimulation", 'tx'],
    ['TIA', 'transient ischemic attack', "mini-stroke", 'ds'],
    ['TN', 'trigeminal neuralgia', "trigeminal neuralgia", 'ds'],
    ['tPA', 'tissue plasminogen activator (clot-dissolving drug)', "clot-dissolving drug", 'tx'],
    ['UMN', 'upper motor neuron', "upper motor neuron", 'pn'],
    ['VEP', 'visual evoked potentials', "visual evoked potential", 'tx'],
    ['VP', 'ventriculoperitoneal (shunt)', "ventriculoperitoneal (shunt)", 'tx'],
    ['y/o', 'years old', "years old", 'lx']
  ];
  /* دسته ریز هر واژه در داده آمده (k)؛ main دسته‌های تازه را به دسته اصلی وصل می‌کند */
  const cats = [
    { id: 'body', icon: '🧠', name: "Structures of the nervous system" },
    { id: 'phys', icon: '⚡', name: "Nerve function and physiology" },
    { id: 'field', icon: '🎓', name: "Specialties and specialists" },
    { id: 'dz', icon: '🩻', name: "Neurological diseases" },
    { id: 'sx', icon: '🔍', name: "Signs" },
    { id: 'psy', icon: '💭', name: "Mental disorders" },
    { id: 'lab', icon: '🧪', name: "Diagnosis and examination" },
    { id: 'tx', icon: '💊', name: "Treatment, drugs and surgery" }
  ];
  const main = { phys: 'Anatomy_and_Physiology', psy: 'Pathology_and_Disorders' };
  EA.LEX_DATA = { roots, abbr, cats, main, worlds: ['lx', 'cn', 'pn', 'ds', 'ps', 'tx'], base: 'lx' };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* موتور واژه‌نامه: تجزیه‌گر واژه، جست‌وجو و مولد سؤال‌ها (مشترک همه اپ‌ها)
 * داده‌ها از EA.TERMS_RAW (data-terms.js) و EA.LEX_DATA (lexdata.js) هر اپ می‌آیند. */
(function (root) {
  const EA = root.EA = root.EA || {};
  /* داده‌ها (ریشه‌ها، اختصارها، دسته‌ها، فهرست دنیاها) از lexdata.js هر اپ می‌آیند */
  const D = EA.LEX_DATA;

  /* ---------- ریشه‌ها: [نمایش، شکل‌های قابل تطبیق، معنی انگلیسی، معنی فارسی، دنیا] ---------- */
  const ROOTS_RAW = D.roots;
  const ROOTS = ROOTS_RAW.map((r, i) => ({
    id: 'r' + i, a: r[0], stems: r[1], en: r[2], fa: r[3], w: r[4],
    kind: r[0].startsWith('-') ? 'suffix' : /-(,|$)/.test(r[0].split(',')[0]) ? 'prefix' : 'root'
  }));

  /* ---------- اختصارها: [اختصار، شکل کامل، معنی فارسی، دنیا] ---------- */
  const ABBR_RAW = D.abbr;
  const ABBR = ABBR_RAW.map((a, i) => ({ id: 'a' + i, a: a[0], full: a[1], fa: a[2], w: a[3] }));

  /* ---------- واژه‌ها ---------- */
  const CAT_FA = {
    Anatomy_and_Physiology: "Anatomy and physiology", Pathology_and_Disorders: "Diseases and disorders",
    Laboratory_and_Diagnostics: "Laboratory and diagnosis", Pharmacology_and_Treatment: "Treatment, drugs and surgery"
  };
  /* دسته ریز هر واژه در داده آمده (k)؛ دسته اصلی (c) از روی آن ساخته می‌شود */
  const CATS = D.cats;
  /* هر اپ می‌تواند دسته‌های ریز تازه بسازد و در D.main به یکی از چهار دسته اصلی وصلشان کند */
  const MAIN = Object.assign({ body: 'Anatomy_and_Physiology', cell: 'Anatomy_and_Physiology', field: 'Anatomy_and_Physiology', dz: 'Pathology_and_Disorders', sx: 'Pathology_and_Disorders', lab: 'Laboratory_and_Diagnostics', tx: 'Pharmacology_and_Treatment' }, D.main || {});
  const TERMS = (EA.TERMS_RAW || []).map((r, i) => ({ id: 't' + i, t: r[0], p: r[1], d: r[2], fa: r[3], w: r[4], k: r[5], c: MAIN[r[5]], ab: r[6] || [] }));
  const classify = t => t.k;
  /** معنی کوتاه فارسی: بدون توضیح داخل پرانتز */
  const short = s => String(s).replace(/\s*\([^)]*\)\s*/g, ' ').trim() || s;
  const norm = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
  const byTerm = {};
  TERMS.forEach(t => { byTerm[norm(t.t)] = t; });
  const term = s => byTerm[norm(s)] || null;

  /* ---------- تجزیه‌گر واژه ----------
   * واژه را به پیشوند، ریشه (با واکه رابط o یا i) و پسوند می‌شکند؛ کمترین تعداد تکه برنده است. */
  const STEMS = [];
  ROOTS.forEach(r => r.stems.forEach(s => STEMS.push({ s, r })));
  STEMS.sort((a, b) => b.s.length - a.s.length);
  function analyze(word) {
    const w = norm(word).replace(/[^a-z]/g, '');
    const n = w.length;
    if (!n) return { word: w, parts: [], full: false };
    // best[i] = {cost, prev, piece}
    const best = Array(n + 1).fill(null);
    best[0] = { cost: 0, pre: true };
    for (let i = 0; i < n; i++) {
      const b = best[i]; if (!b) continue;
      const push = (j, cost, piece) => { if (!best[j] || cost < best[j].cost) best[j] = { cost, prev: i, piece, pre: piece.kind === 'prefix' && b.pre }; };
      for (const st of STEMS) {
        if (!w.startsWith(st.s, i)) continue;
        const k = st.r.kind;
        if (k === 'prefix' && !b.pre) continue;
        const j = i + st.s.length;
        /* پسوند هرگز اول واژه نمی‌آید و پسوندهای یکی‌دوحرفی (‎-a، ‎-is) فقط در پایان واژه */
        if (k === 'suffix' && (i === 0 || (st.s.length <= 2 && j < n))) continue;
        push(j, b.cost + 10 + (k === 'suffix' && j < n ? 6 : 0), { text: st.s, r: st.r, kind: k });
        // واکه رابط پس از ریشه: derm + o، derm + a (dermatome)
        if (k === 'root' && j < n && /[oia]/.test(w[j])) push(j + 1, b.cost + 10, { text: st.s + w[j], r: st.r, kind: k });
      }
      // حرف ناشناخته
      push(i + 1, b.cost + 40, { text: w[i], r: null, kind: 'gap' });
    }
    const parts = [];
    for (let j = n; j > 0;) { const b = best[j]; parts.unshift(b.piece); j = b.prev; }
    // حروف ناشناخته پشت سر هم را یکی کن
    const merged = [];
    parts.forEach(p => { const last = merged[merged.length - 1]; if (p.kind === 'gap' && last && last.kind === 'gap') last.text += p.text; else merged.push(Object.assign({}, p)); });
    return { word: w, parts: merged, full: merged.every(p => p.kind !== 'gap') };
  }
  /** شکل نمایشی یک تکه: erythr/o، ‎-penia، pan- */
  function partLabel(p) {
    if (!p.r) return p.text;
    const k = p.r.kind;
    if (k === 'suffix') return '-' + p.text;
    if (k === 'prefix') return p.text + '-';
    const v = p.text.slice(-1), base = p.text.slice(0, -1);
    if (p.r.stems.some(s => s === base) && /[oia]/.test(v)) return base + '/' + v;
    const m = p.r.a.match(new RegExp('\\b' + p.text + '/([oi])\\b'));
    return m ? p.text + '/' + m[1] : p.text;
  }

  /* ---------- جست‌وجو ---------- */
  function search(q, list) {
    const s = norm(q);
    if (!s) return list;
    return list.filter(x => [x.t, x.a, x.fa, x.full, x.en, x.d].some(f => f && norm(f).includes(s)));
  }

  /* ---------- مولد سؤال‌ها ---------- */
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const inW = (x, w) => !w || x.w === w || x.w === '*';
  const E = s => EA.en(s);
  /** گزینه‌های انحرافی یکتا */
  function distract(pool, right, key, n) {
    const seen = new Set([key(right)]);
    const out = [];
    shuffle(pool).forEach(x => { const k = key(x); if (out.length < n && k && !seen.has(k)) { seen.add(k); out.push(x); } });
    return out;
  }
  const good = t => t.fa && t.d && t.t.length < 48;
  const termsOf = w => TERMS.filter(t => (!w || t.w === w) && good(t));
  const defShort = d => { const s = d.split(/(?<=\.)\s/)[0]; return s.length > 170 ? s.slice(0, 167) + '…' : s; };
  const why = t => `${E(`<b>${t.t}</b>`)}${t.p ? ` <small class="pron" dir="ltr">/${t.p}/</small>` : ''} = <b>${t.fa}</b><br><span class="defen" dir="ltr">${defShort(t.d)}</span>`;

  const G = {};
  const WORLDS = D.worlds, BASE = D.base;
  /* دنیای پایه (BASE) از همه واژه‌ها، ریشه‌ها و اختصارها سؤال می‌سازد */
  const rootsOf = w => (w === BASE ? ROOTS : ROOTS.filter(r => inW(r, w)));
  WORLDS.forEach(W => {
    const w = W === BASE ? null : W;
    G['t2f:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => short(x.fa), 3);
      return { kind: 'mcq', tag: 'term', q: `What does ${E(`<b>${t.t}</b>`)} mean?`, opts: [t].concat(ds).map(x => x.fa), a: 0, why: why(t) };
    };
    G['f2t:' + W] = () => {
      const pool = termsOf(w), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      return { kind: 'mcq', tag: 'term', q: `Which medical term means “<b>${t.fa}</b>”?`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['d2t:' + W] = () => {
      const pool = termsOf(w).filter(x => x.d.length > 25), t = rnd(pool);
      const ds = distract(pool, t, x => norm(x.t), 3);
      const d = defShort(t.d).replace(new RegExp(t.t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), '_____');
      return { kind: 'mcq', tag: 'def', q: `Which term does this definition describe?<span class="defq" dir="ltr">${d}</span>`, opts: [t].concat(ds).map(x => E(x.t)), a: 0, why: why(t) };
    };
    G['sp:' + W] = () => {
      const pool = termsOf(w).filter(x => /^[A-Za-z][a-z-]+(?: [a-z-]+)?$/.test(x.t) && x.t.length <= 22), t = rnd(pool);
      return { kind: 'spell', tag: 'spell', q: `Spell the term for “<b>${t.fa}</b>”`, ans: [t.t], why: why(t), hint: t.p ? `/${t.p}/` : t.t[0] + '…' };
    };
    G['r2m:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS, r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `The ${r.kind === 'suffix' ? "suffix" : r.kind === 'prefix' ? "prefix" : "root"} ${E(`<b>${r.a}</b>`)} means…`, opts: [r].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['m2r:' + W] = () => {
      const pool = rootsOf(W), r = rnd(pool);
      const ds = distract(ROOTS.filter(x => x.kind === r.kind || Math.random() < 0.3), r, x => x.fa, 3);
      return { kind: 'mcq', tag: 'root', q: `Which word part means “<b>${r.fa}</b>”?`, opts: [r].concat(ds).map(x => E(x.a)), a: 0, why: `${E(`<b>${r.a}</b>`)} = ${r.fa} <span dir="ltr">(${r.en})</span>${example(r)}` };
    };
    G['wb:' + W] = () => {
      const pool = buildable(w), x = rnd(pool);
      const used = new Set(x.parts.map(p => p.r.id));
      const extra = shuffle(ROOTS.filter(r => !used.has(r.id) && inW(r, w) && r.w !== '*')).slice(0, 3).map(r => r.kind === 'root' ? r.a.split(',')[0] : r.a.split(',')[0]);
      return { kind: 'build', tag: 'build', q: `Build the term that means “<b>${short(x.t.fa)}</b>”`, parts: x.parts.map(partLabel), extra, why: why(x.t) + `<div class="wbx">${x.parts.map(p => `<span><b dir="ltr">${partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` };
    };
    G['ab:' + W] = () => {
      const own = ABBR.filter(a => !w || a.w === w), pool = own.length >= 4 ? own : ABBR, a = rnd(pool);
      const ds = distract(ABBR, a, x => x.fa, 3);
      return { kind: 'mcq', tag: 'abbr', q: `The abbreviation ${E(`<b>${a.a}</b>`)} means…`, opts: [a].concat(ds).map(x => x.fa), a: 0, why: `${E(`<b>${a.a}</b>`)} = <span dir="ltr">${a.full}</span><br>${a.fa}` };
    };
  });
  /** نمونه واژه برای یک ریشه */
  function example(r) {
    const ex = TERMS.filter(t => /^[a-z]+$/i.test(t.t) && analyze(t.t).parts.some(p => p.r === r)).slice(0, 3);
    return ex.length ? `<br><small>Example: ${ex.map(t => E(t.t)).join(", ")}</small>` : '';
  }
  const BUILD_CACHE = {};
  function buildable(w) {
    if (BUILD_CACHE[w]) return BUILD_CACHE[w];
    const out = [];
    termsOf(w).forEach(t => {
      if (!/^[a-z]+$/.test(t.t) || t.t.length < 7) return;
      const a = analyze(t.t);
      if (a.full && a.parts.length >= 2 && a.parts.length <= 4 && a.parts.some(p => p.kind === 'root') && new Set(a.parts.map(p => p.r.id)).size === a.parts.length && !a.parts.some(p => p.r.w === '*' && p.r.stems[0].length <= 2 && p.kind !== 'suffix')) out.push({ t, parts: a.parts });
    });
    return (BUILD_CACHE[w] = out);
  }
  EA.gen = Object.assign(EA.gen || {}, G);
  EA.genIds = w => ['t2f', 'f2t', 'd2t', 'sp', 'r2m', 'm2r', 'wb', 'ab'].map(g => g + ':' + w);

  EA.lex = { ROOTS, ABBR, TERMS, CAT_FA, CATS, classify, term, analyze, partLabel, search, short, norm, buildable, defShort, why };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/* نورو — شکل‌های آموزشی (SVG ساخته‌شده؛ بدون فایل تصویر)
 * سبک یکسان با الگوی هورمونا و اپ‌های قبلی: زمینه سفید کارت، بافت‌ها با گرادیان و سایه نرم، برچسب دوزبانه (واژه انگلیسی + معنی فارسی زیر آن)،
 * پیکان‌ها و خط‌های راهنمای خاکستری گرد. پالت: صورتی مغز، بنفش عصب، کهربایی جریان عصبی، کرم استخوان جمجمه و ستون مهره.
 * لوب‌های مغز همیشه با یک رنگ ثابت کشیده می‌شوند (پیشانی نارنجی، آهیانه بنفش، گیجگاهی آبی، پس‌سری سبز) تا در همه شکل‌ها آشنا بمانند.
 * EA.art(کلید) ← رشته SVG؛ EA.ART_KEYS فهرست کلیدهاست (آزمون‌ها بررسی می‌کنند). */
(function (root) {
  const EA = root.EA = root.EA || {};
  let UID = 0;
  const FONT_EN = 'Nunito, Vazirmatn, system-ui, sans-serif', FONT_FA = 'Vazirmatn, Tahoma, sans-serif';
  const INK = '#2b2b2b', MUTED = '#6f7a80', LINE = '#5b6b73';
  /* پالت بافت‌ها */
  const C = {
    brain: '#f8c3cf', brain2: '#eb9bb0', brainLine: '#c9677f', gray: '#c9b8a8', white: '#f4ede4',
    nerve: '#f2c94c', nerveLine: '#c99a1d', myelin: '#dfe9f5', myelinLine: '#8aa3c2', cell: '#b7a3ea', cellLine: '#6c4fd0',
    fr: '#f7a46b', pa: '#b79be6', te: '#7fb2e5', oc: '#8fd18a', cb: '#d98aa0', stem: '#e8b48a',
    csf: '#cfe9fb', csfLine: '#5e9fc4', dura: '#9cb3c9', bone: '#f3e4c4', bone2: '#e3cc9c', boneLine: '#b8975f',
    skin: '#f6d2b8', skinLine: '#d9a988', art: '#d9443a', blood: '#b3262e', vein: '#4f7fd1', spark: '#ffc800'
  };
  const nid = () => 'g' + (++UID);

  /* ---------- پایه ---------- */
  function svg(w, h, body, label, defs) {
    return `<svg class="art" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || ''}" xmlns="http://www.w3.org/2000/svg"><defs>${defs || ''}</defs><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
  }
  /** متن انگلیسی */
  const t = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 11}" font-weight="${p.w || 700}" fill="${p.fill || INK}" text-anchor="${p.anchor || 'middle'}" direction="ltr" font-family="${p.sym ? 'Arial, Helvetica, sans-serif' : FONT_EN}"${p.italic ? ' font-style="italic"' : ''}>${s}</text>`; };
  /** متن فارسی؛ anchor همیشه «دیداری» است (start = لبه چپ متن) */
  const FLIP = { start: 'end', end: 'start', middle: 'middle' };
  /* هر تکه لاتین درون متن فارسی با LRI…PDI جدا می‌شود تا جابه‌جا نشود */
  const LRI = s => String(s).replace(/(?<![&#\w])\(?-?[A-Za-z0-9][A-Za-z0-9\/\-.+–°%]*\)?(?:\s*(?:[=+\/→]|\s)\s*\(?[A-Za-z0-9][A-Za-z0-9\/\-.+–°%]*\)?)*/g, m => '⁦' + m + '⁩');
  const f = (x, y, s, o) => { const p = o || {}; return `<text x="${x}" y="${y}" font-size="${p.size || 10}" font-weight="${p.w || 600}" fill="${p.fill || MUTED}" text-anchor="${(p.anchor || 'middle')}" direction="ltr" font-family="${FONT_EN}">${LRI(s)}</text>`; };
  /** برچسب دوزبانه: واژه انگلیسی و زیر آن معنی فارسی (فاصله کافی تا شلوغ نشود) */
  const lab = (x, y, en, fa, o) => { const p = o || {}; return t(x, y, en, { size: p.size || 11, fill: p.fill || INK, anchor: p.anchor, w: 800, sym: p.sym }) + (fa ? f(x, y + (p.gap || 13.5), fa, { size: (p.size || 11) - 1.5, anchor: p.anchor === 'start' ? 'start' : p.anchor === 'end' ? 'end' : 'middle', fill: p.faFill }) : ''); };
  const title = s => f(180, 19, s, { size: 11.5, fill: INK, w: 800 });
  const marker = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c || LINE}"/></marker>`;
  const arrow = (id, x1, y1, x2, y2, c, w, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const curve = (id, d, c, w, dash) => `<path d="${d}" stroke="${c || LINE}" stroke-width="${w || 2}" fill="none" stroke-linecap="round" marker-end="url(#${id})"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  const linear = (id, c1, c2, vertical) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
  const radial = (id, c1, c2) => `<radialGradient id="${id}" cx="50%" cy="50%" r="55%" fx="38%" fy="34%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  const shadow = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity=".16"/></filter>`;
  /** خط راهنما با نقطه سر */
  const pin = (x1, y1, x2, y2, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c || '#5b6b73'}" stroke-width="1.1"/><circle cx="${x1}" cy="${y1}" r="2.4" fill="#fff" stroke="${c || '#c2413a'}" stroke-width="1.4"/>`;
  function rng(seed) { let s = seed || 7; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  /** کارت رنگی با عنوان دوزبانه */
  const card = (x, y, w, h, bg, ic, en, fa, sub) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${bg}"/>${ic ? t(x + w / 2, y + 28, ic, { size: 22 }) : ''}${t(x + w / 2, y + (ic ? 50 : 24), en, { size: 10.5, w: 900 })}${f(x + w / 2, y + (ic ? 64 : 38), fa, { size: 9.5, fill: INK, w: 700 })}${sub ? f(x + w / 2, y + (ic ? 77 : 51), sub, { size: 8.5 }) : ''}`;

  /* ---------- بدن مانکن (نمای روبه‌رو) ----------
   * outline(cx, top, s) ← مسیر بدن ساده؛ s مقیاس (۱ = قد حدود ۲۶۰) */
  function mannequin(cx, top, s, o) {
    const p = o || {}; const k = s || 1;
    const X = d => (cx + d * k).toFixed(1), Y = d => (top + d * k).toFixed(1);
    const head = `<ellipse cx="${X(0)}" cy="${Y(22)}" rx="${(17 * k).toFixed(1)}" ry="${(21 * k).toFixed(1)}"/>`;
    const body = `<path d="M${X(-8)} ${Y(40)} L${X(-8)} ${Y(48)} C${X(-26)} ${Y(50)} ${X(-40)} ${Y(52)} ${X(-44)} ${Y(64)} L${X(-52)} ${Y(128)} L${X(-56)} ${Y(158)} C${X(-57)} ${Y(166)} ${X(-48)} ${Y(167)} ${X(-47)} ${Y(158)} L${X(-40)} ${Y(122)} L${X(-34)} ${Y(86)} L${X(-30)} ${Y(124)} C${X(-34)} ${Y(140)} ${X(-34)} ${Y(150)} ${X(-30)} ${Y(162)} L${X(-26)} ${Y(222)} L${X(-26)} ${Y(254)} C${X(-34)} ${Y(258)} ${X(-34)} ${Y(264)} ${X(-22)} ${Y(264)} L${X(-12)} ${Y(264)} L${X(-12)} ${Y(222)} L${X(-4)} ${Y(166)} L${X(0)} ${Y(164)} L${X(4)} ${Y(166)} L${X(12)} ${Y(222)} L${X(12)} ${Y(264)} L${X(22)} ${Y(264)} C${X(34)} ${Y(264)} ${X(34)} ${Y(258)} ${X(26)} ${Y(254)} L${X(26)} ${Y(222)} L${X(30)} ${Y(162)} C${X(34)} ${Y(150)} ${X(34)} ${Y(140)} ${X(30)} ${Y(124)} L${X(34)} ${Y(86)} L${X(40)} ${Y(122)} L${X(47)} ${Y(158)} C${X(48)} ${Y(167)} ${X(57)} ${Y(166)} ${X(56)} ${Y(158)} L${X(52)} ${Y(128)} L${X(44)} ${Y(64)} C${X(40)} ${Y(52)} ${X(26)} ${Y(50)} ${X(8)} ${Y(48)} L${X(8)} ${Y(40)} Z"/>`;
    return `<g fill="${p.fill || C.skin}" stroke="${p.line || C.skinLine}" stroke-width="1.3">${head}${body}</g>`;
  }


  const A = {};

  /* ---------- اجزای پایه دستگاه عصبی ---------- */
  /* مغز از نمای کنار (پیشانی سمت چپ تصویر)؛ مختصات نسبی به مرکز (cx,cy) با مقیاس s */
  const BRAIN_OUT = 'M-104 12 C-114 -38 -72 -80 -8 -82 C54 -84 104 -52 110 -8 C114 16 108 34 94 42 C80 34 60 30 44 36 C30 46 6 52 -20 50 C-50 48 -70 44 -84 34 C-96 28 -102 22 -104 12Z';
  const GYRI = 'M-88 -20 q14 -12 26 0 q10 12 22 0 M-70 -54 q12 -10 24 2 M-30 -66 q10 10 2 24 q-8 14 4 26 M-92 14 q16 -6 26 4 M20 -66 q-8 14 4 26 q10 12 -2 26 M52 -56 q16 4 18 22 M70 -24 q14 0 26 12 M-40 30 q16 -8 30 2 q14 8 30 -4 M86 18 q8 -6 14 4';
  function brainSide(cx, cy, s, o) {
    const p = o || {}; const k = s || 1; const cid = nid(), sh = nid(), g = nid();
    const T = `translate(${cx} ${cy}) scale(${k})`;
    const lobes = p.lobes === false
      ? `<rect x="-130" y="-100" width="260" height="170" fill="url(#${g})"/>`
      : `<path d="M-130 -100 L6 -100 L-22 8 L-62 24 L-130 44Z" fill="${C.fr}"/><path d="M6 -100 L130 -100 L130 -14 L72 -12 L36 -2 L-22 8Z" fill="${C.pa}"/><path d="M72 -12 L130 -14 L130 70 L88 70Z" fill="${C.oc}"/><path d="M-130 44 L-62 24 L-22 8 L36 -2 L72 -12 L88 70 L-130 70Z" fill="${C.te}"/>`;
    return {
      d: `<clipPath id="${cid}"><path d="${BRAIN_OUT}"/></clipPath>${shadow(sh)}${linear(g, C.brain, C.brain2, true)}`,
      b: `<g transform="${T}" filter="url(#${sh})">
        ${p.stem === false ? '' : `<path d="M30 30 C36 58 36 82 30 108 L48 108 C50 82 52 58 56 36Z" fill="${C.stem}" stroke="#b9875f" stroke-width="1.2"/>`}
        ${p.cerebellum === false ? '' : `<ellipse cx="76" cy="52" rx="34" ry="19" fill="${C.cb}" stroke="#a85670" stroke-width="1.2"/><path d="M48 50 q14 -6 28 0 q14 6 26 0 M52 60 q12 -4 24 0 q12 4 22 -2" stroke="#a85670" stroke-width="1" fill="none" opacity=".7"/>`}
        <g clip-path="url(#${cid})">${lobes}<path d="${GYRI}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/></g>
        <path d="${BRAIN_OUT}" fill="none" stroke="${C.brainLine}" stroke-width="1.6"/>
        ${p.lobes === false ? '' : `<path d="M6 -82 L-22 8" stroke="#7a4a5a" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M-62 24 C-30 10 10 4 72 -12" stroke="#7a4a5a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`}
      </g>`
    };
  }
  /* مغز در برش میانی (ساجیتال): مخ، جسم پینه‌ای، تالاموس، هیپوتالاموس، هیپوفیز، ساقه و مخچه */
  function brainSag(cx, cy, s) {
    const k = s || 1; const sh = nid(), g = nid();
    return {
      d: `${shadow(sh)}${linear(g, C.brain, C.brain2, true)}`,
      b: `<g transform="translate(${cx} ${cy}) scale(${k})" filter="url(#${sh})">
        <path d="M30 30 C36 58 36 82 30 108 L48 108 C50 82 52 58 56 36Z" fill="${C.stem}" stroke="#b9875f" stroke-width="1.2"/>
        <ellipse cx="40" cy="62" rx="14" ry="12" fill="#dc9d70" stroke="#b9875f" stroke-width="1.2"/>
        <ellipse cx="78" cy="52" rx="34" ry="21" fill="${C.cb}" stroke="#a85670" stroke-width="1.2"/>
        <path d="M60 52 h20 M70 52 l10 -10 M70 52 l10 10 M80 52 l12 -8 M80 52 l12 8 M80 52 h16" stroke="#fbe3ea" stroke-width="2.2" stroke-linecap="round"/>
        <path d="${BRAIN_OUT}" fill="url(#${g})" stroke="${C.brainLine}" stroke-width="1.6"/>
        <path d="M-84 0 q14 -14 30 -4 M-70 -40 q16 -10 30 0 M-30 -62 q12 10 30 4 M30 -62 q10 14 30 8 M74 -30 q14 4 22 18" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M-56 -6 C-40 -40 40 -46 66 -12 C60 -4 54 -6 48 -14 C24 -36 -30 -32 -46 -2Z" fill="#f3ede6" stroke="#b39b8a" stroke-width="1.3"/>
        <path d="M-20 -4 C-10 -22 30 -24 44 -8 C34 -2 -6 0 -20 -4Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1"/>
        <ellipse cx="14" cy="12" rx="20" ry="13" fill="#e5a3b7" stroke="#a85670" stroke-width="1.2"/>
        <path d="M-12 22 C-6 34 6 36 14 30 C10 22 -2 20 -12 22Z" fill="#d07a96" stroke="#a85670" stroke-width="1"/>
        <path d="M-4 34 L-6 44" stroke="#a85670" stroke-width="2"/><ellipse cx="-6" cy="48" rx="7" ry="5" fill="#f2c94c" stroke="#c99a1d"/>
      </g>`
    };
  }
  /* نورون: دندریت‌ها، جسم سلولی با هسته، آکسون با غلاف میلین و پایانه‌ها؛ از چپ به راست */
  function neuron(x, y, len, o) {
    const p = o || {}; const L = len || 220; const segs = p.segs || 5; const sw = (L - 70) / segs;
    let den = '';
    for (let i = 0; i < 7; i++) {
      const a = Math.PI * (0.62 + i * 0.12), r = 26 + (i % 2) * 8;
      const x1 = x + Math.cos(a) * 16, y1 = y + Math.sin(a) * 16, x2 = x + Math.cos(a) * r * 1.4, y2 = y + Math.sin(a) * r * 1.4;
      den += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} M${x2.toFixed(1)} ${y2.toFixed(1)} l${(Math.cos(a - .5) * 10).toFixed(1)} ${(Math.sin(a - .5) * 10).toFixed(1)} M${x2.toFixed(1)} ${y2.toFixed(1)} l${(Math.cos(a + .5) * 10).toFixed(1)} ${(Math.sin(a + .5) * 10).toFixed(1)}" stroke="${C.cellLine}" stroke-width="2.4" stroke-linecap="round"/>`;
    }
    let my = '';
    for (let i = 0; i < segs; i++) my += `<rect x="${(x + 26 + i * sw + 3).toFixed(1)}" y="${y - 7}" width="${(sw - 6).toFixed(1)}" height="14" rx="7" fill="${C.myelin}" stroke="${C.myelinLine}" stroke-width="1.1"/>`;
    const ex = x + 26 + segs * sw;
    const term = [-14, -5, 5, 14].map(d => `<path d="M${ex} ${y} C${ex + 12} ${y} ${ex + 14} ${y + d} ${ex + 26} ${y + d * 1.4}" stroke="${C.cellLine}" stroke-width="2" fill="none"/><circle cx="${ex + 27}" cy="${y + d * 1.4}" r="3.4" fill="${C.cell}" stroke="${C.cellLine}"/>`).join('');
    return `${den}<path d="M${x + 14} ${y} L${ex} ${y}" stroke="${C.cellLine}" stroke-width="3"/>${p.myelin === false ? '' : my}${term}
      <circle cx="${x}" cy="${y}" r="18" fill="${C.cell}" stroke="${C.cellLine}" stroke-width="1.6"/><circle cx="${x - 2}" cy="${y - 1}" r="6.5" fill="#7a5fd0" stroke="#4b3499"/>`;
  }
  /* سر از نیم‌رخ (رو به چپ) برای جای‌دادن مغز */
  const head = (cx, cy, k) => { const s = k || 1; return `<path transform="translate(${cx} ${cy}) scale(${s})" d="M-6 -108 C66 -110 120 -64 118 4 C116 40 104 62 92 76 L92 128 L22 128 L20 108 C-6 108 -26 104 -34 92 C-40 82 -40 72 -46 64 C-58 62 -58 54 -52 48 C-58 40 -60 34 -50 26 L-66 2 C-70 -4 -66 -10 -58 -12 C-56 -70 -38 -106 -6 -108Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.4"/>`; };
  /* مهره ساده (برش) */
  const vert = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.1"/>`;
  /* جرقه عصبی */
  const zap = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s || 1})" d="M6 -14 l-10 16 h8 l-6 14 14 -18 h-8 l6 -12z" fill="${c || C.spark}" stroke="#c99a1d" stroke-width="1" stroke-linejoin="round"/>`;

  /* ================= دنیای پایه: زبان عصب ================= */
  A['ns-overview'] = () => {
    return svg(360, 330, `${title("Nervous system: central (CNS) and peripheral (PNS)")}
      ${mannequin(180, 40, 1.05)}
      <ellipse cx="180" cy="63" rx="13" ry="15" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.4"/>
      <path d="M180 78 V210" stroke="${C.nerve}" stroke-width="5" stroke-linecap="round"/><path d="M180 78 V210" stroke="${C.nerveLine}" stroke-width="1" />
      ${[96, 112, 128, 144, 160, 176, 192, 206].map((y, i) => `<path d="M180 ${y} C${166 - i * 2} ${y + 4} ${150 - i * 3} ${y + 10} ${136 - i * 2} ${y + 18} M180 ${y} C${194 + i * 2} ${y + 4} ${210 + i * 3} ${y + 10} ${224 + i * 2} ${y + 18}" stroke="${C.nerveLine}" stroke-width="1.4" fill="none"/>`).join('')}
      <path d="M134 112 L130 160 L124 200 M226 112 L230 160 L236 200 M170 214 L164 270 L160 312 M190 214 L196 270 L200 312" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      <path d="M22 50 V214 M16 50 H28 M16 214 H28" stroke="#6c4fd0" stroke-width="1.6" fill="none"/>
      ${pin(180, 60, 100, 52)}${lab(70, 48, 'brain', "brain", { size: 10 })}
      ${pin(180, 150, 100, 140)}${lab(66, 136, 'spinal cord', "spinal cord", { size: 10 })}
      ${pin(146, 160, 100, 210)}${lab(62, 210, 'spinal nerves', "spinal nerves", { size: 10 })}
      ${pin(162, 280, 100, 286)}${lab(62, 282, 'peripheral nerve', "peripheral nerve", { size: 10 })}
      <rect x="250" y="56" width="104" height="58" rx="12" fill="#eeeafb"/>${t(302, 78, 'CNS', { size: 14, fill: '#5a3fbf', w: 900, sym: true })}${f(302, 96, "brain + spinal cord", { size: 9.5, fill: INK, w: 800 })}
      <rect x="250" y="226" width="104" height="58" rx="12" fill="#fdf3dc"/>${t(302, 248, 'PNS', { size: 14, fill: '#a87a12', w: 900, sym: true })}${f(302, 266, "nerves outside the CNS", { size: 9, fill: INK, w: 800 })}`, "nervous system");
  };

  /* آناتومی یک واژه: hemi + pleg + ia */
  A.wordparts = () => {
    const part = (x, w, s, c, bg) => `<rect x="${x}" y="40" width="${w}" height="40" rx="10" fill="${bg}"/>${t(x + w / 2, 67, s, { size: 19, fill: c, w: 900 })}`;
    const br = (x1, x2, en, fa, c) => `<path d="M${x1} 90 v8 h${x2 - x1} v-8" stroke="${c}" stroke-width="2" fill="none"/>${t((x1 + x2) / 2, 114, en, { size: 10.5, fill: c, w: 900 })}${f((x1 + x2) / 2, 129, fa, { size: 9.5, fill: c })}`;
    return svg(360, 192, `${title("One word = prefix + root + suffix")}
      ${part(10, 70, 'hemi', '#1272a3', '#ddf1fb')}${part(86, 80, 'pleg', '#b03e5c', '#fde6ec')}${part(172, 52, 'ia', '#3f8a05', '#e7f9d8')}
      ${br(10, 80, 'prefix', "prefix: half", '#1272a3')}${br(86, 166, 'root', "root: paralysis", '#b03e5c')}${br(172, 224, 'suffix', "suffix: condition", '#3f8a05')}
      <rect x="236" y="40" width="116" height="40" rx="10" fill="#f8f6f5"/>${f(294, 57, "condition of paralysis", { size: 10.5, fill: '#3f8a05', w: 800 })}${f(294, 73, "half of the body", { size: 10.5, fill: INK, w: 800 })}
      <path d="M200 150 C150 176 96 176 44 150" stroke="#b03e5c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M48 146 l-6 4 l7 3" stroke="#b03e5c" stroke-width="2" fill="none"/>
      ${f(140, 186, "Read the meaning from the end: suffix → prefix → root", { size: 10, fill: '#b03e5c', w: 700 })}`, "The anatomy of a medical word");
  };

  /* نقشه ریشه‌ها روی سر و ستون مهره */
  A['root-map'] = () => {
    const b = brainSide(176, 112, 0.74, { lobes: false });
    const R = (x1, y1, x2, y2, root, fa, side) => `${pin(x1, y1, x2, y2)}${t(side < 0 ? 8 : x2 + 4, y2 - 2, root, { size: 11, anchor: 'start', fill: '#5a3fbf', w: 900 })}${f(side < 0 ? 8 : x2 + 4, y2 + 12, fa, { size: 9, anchor: 'start', fill: INK })}`;
    return svg(360, 300, `${title("Map of roots: one root for each part")}
      <path d="M90 104 C88 44 132 26 176 26 C230 26 264 56 266 104" fill="none" stroke="${C.boneLine}" stroke-width="5" opacity=".55"/>
      ${b.b}
      <path d="M195 196 V288" stroke="${C.nerve}" stroke-width="9" stroke-linecap="round"/>
      ${R(120, 80, 80, 56, 'encephal/o', "brain", -1)}${R(140, 100, 80, 112, 'cerebr/o', "cerebrum", -1)}${R(150, 140, 80, 168, 'psych/o', "psyche, mind", -1)}
      ${R(195, 270, 80, 262, 'neur/o', "nerve", -1)}
      ${R(232, 152, 270, 196, 'cerebell/o', "cerebellum", 1)}${R(222, 30, 270, 40, 'crani/o', "skull", 1)}${R(258, 90, 270, 118, 'mening/o', "membranes of the brain", 1)}
      ${R(197, 236, 236, 248, 'myel/o', "spinal cord", 1)}`, "The root map", b.d);
  };

  /* دوقلوهای فریبنده */
  A.twins = () => {
    const box = (x, y, c, bg, w1, m1, ex, ic) => `<rect x="${x}" y="${y}" width="164" height="86" rx="14" fill="${bg}"/>${t(x + 30, y + 50, ic, { size: 22 })}${t(x + 100, y + 32, w1, { size: 15, fill: c, w: 900 })}${f(x + 100, y + 52, m1, { size: 10.5, fill: INK, w: 800 })}${t(x + 100, y + 72, ex, { size: 9.5, fill: c, w: 800 })}`;
    return svg(360, 236, `${title("Two tricky pairs")}
      ${box(10, 32, '#b03e5c', '#fde6ec', '-plegia', "complete paralysis", 'hemiplegia', '⛔')}${box(186, 32, '#e07a3a', '#fdeee3', '-paresis', "weakness, partial paralysis", 'hemiparesis', '〰️')}
      ${box(10, 126, '#5a3fbf', '#eeeafb', 'myel/o', "spinal cord (or bone marrow)", 'myelitis', '🦴')}${box(186, 126, '#17a398', '#e1f6f3', 'my/o', "muscle", 'myositis', '💪')}
      ${f(180, 228, "myel/o has “el” and my/o does not; one letter, two different organs", { size: 9.5, fill: MUTED, w: 700 })}`, "Look-alike words");
  };

  A.neuron = () => {
    const m = nid();
    return svg(360, 220, `${title("Neuron: the basic cell of the nervous system")}
      ${neuron(70, 110, 250)}
      ${arrow(m, 100, 160, 260, 160, '#e5a500', 3)}${f(180, 180, "direction of the nerve impulse", { size: 9.5, fill: '#a87a12', w: 800 })}
      ${pin(44, 84, 30, 50)}${lab(44, 40, 'dendrites', "dendrites", { size: 10 })}
      ${pin(70, 110, 96, 60)}${lab(112, 42, 'cell body', "cell body", { size: 10 })}
      ${pin(150, 104, 180, 62)}${lab(196, 44, 'axon', "axon", { size: 10 })}
      ${pin(232, 104, 256, 62)}${lab(276, 44, 'myelin sheath', "myelin sheath", { size: 10 })}
      ${pin(330, 126, 318, 198)}${lab(292, 200, 'axon terminals', "terminals", { size: 10 })}`, "neuron", marker(m, '#e5a500'));
  };

  /* ================= دنیای ۱: مغز و نخاع ================= */
  A['brain-lobes'] = () => {
    const b = brainSide(176, 150, 1.12);
    return svg(360, 290, `${title("Lobes of the cerebrum (side view; frontal on the left)")}
      ${b.b}
      ${lab(70, 104, 'frontal', "The forehead", { size: 11 })}
      ${lab(206, 84, 'parietal', "parietal", { size: 11 })}
      ${lab(274, 142, 'occipital', "back of the head", { size: 10.5 })}
      ${lab(140, 176, 'temporal', "temporal", { size: 11 })}
      ${pin(262, 214, 300, 248)}${lab(312, 256, 'cerebellum', "cerebellum", { size: 10 })}
      ${pin(218, 248, 200, 272)}${lab(150, 272, 'brainstem', "brainstem", { size: 10 })}
      ${pin(183, 70, 230, 40)}${lab(268, 36, 'central sulcus', "central sulcus", { size: 9.5 })}
      ${pin(98, 172, 54, 216)}${lab(52, 228, 'lateral sulcus', "lateral sulcus", { size: 9.5 })}`, "Lobes of the brain", b.d);
  };

  A['brain-sagittal'] = () => {
    const b = brainSag(166, 140, 1.12);
    return svg(360, 300, `${title("Midline section of the brain (sagittal)")}
      ${b.b}
      ${pin(110, 76, 48, 52)}${lab(30, 46, 'cerebrum', "cerebrum", { size: 10, anchor: 'start' })}
      ${pin(160, 96, 300, 52)}${lab(312, 46, 'corpus callosum', "corpus callosum", { size: 9.5 })}
      ${pin(182, 152, 300, 108)}${lab(312, 102, 'thalamus', "thalamus", { size: 10 })}
      ${pin(158, 168, 90, 120)}${lab(10, 124, 'hypothalamus', "hypothalamus", { size: 9.5, anchor: 'start' })}
      ${pin(159, 194, 66, 176)}${lab(10, 180, 'pituitary', "pituitary", { size: 9.5, anchor: 'start' })}
      ${pin(214, 190, 300, 152)}${lab(312, 156, 'midbrain', "midbrain", { size: 9.5 })}
      ${pin(208, 209, 46, 226)}${lab(10, 230, 'pons', "pons", { size: 10, anchor: 'start' })}
      ${pin(210, 243, 104, 270)}${lab(10, 274, 'medulla oblongata', "medulla oblongata", { size: 9.5, anchor: 'start' })}
      ${pin(266, 202, 300, 236)}${lab(312, 240, 'cerebellum', "cerebellum", { size: 10 })}`, "Midline section of the brain", b.d);
  };

  A['brain-functions'] = () => {
    const b = brainSide(176, 158, 1.12, { lobes: false });
    const spot = (x, y, c) => `<circle cx="${x}" cy="${y}" r="13" fill="${c}" opacity=".85" stroke="#fff" stroke-width="2"/>`;
    return svg(360, 300, `${title("Each area of the cerebral cortex, one job")}
      ${b.b}
      ${spot(168, 80, '#e07a3a')}${spot(196, 82, '#8e6bd8')}${spot(104, 164, '#d9443a')}${spot(176, 164, '#3d6fd6')}${spot(270, 150, '#3f8a05')}${spot(90, 110, '#f2a33a')}
      ${pin(168, 80, 120, 36)}${lab(92, 32, 'motor area', "voluntary movement", { size: 9.5 })}
      ${pin(196, 82, 246, 36)}${lab(284, 32, 'sensory area', "touch and pain sensation", { size: 9.5 })}
      ${pin(90, 110, 40, 92)}${lab(36, 76, 'planning', "planning, personality", { size: 9 })}
      ${pin(104, 164, 50, 214)}${lab(52, 226, 'Broca area', "producing speech", { size: 9.5 })}
      ${pin(176, 164, 150, 270)}${lab(150, 282, 'Wernicke area', "understanding speech", { size: 9.5 })}
      ${pin(270, 150, 310, 112)}${lab(316, 100, 'visual area', "vision (reading)", { size: 9.5 })}
      ${pin(244, 216, 290, 270)}${lab(300, 282, 'cerebellum', "balance and coordination", { size: 9.5 })}`, "Functions of the brain areas", b.d);
  };

  A.meninges = () => {
    const L = (y, h, c, line) => `<rect x="20" y="${y}" width="220" height="${h}" fill="${c}" stroke="${line || 'none'}"/>`;
    const R = (y1, y2, en, fa) => `${pin(226, y1, 262, y2)}${lab(304, y2 - 4, en, fa, { size: 9.5 })}`;
    return svg(360, 300, `${title("Meninges: three protective membranes of the brain and spinal cord")}
      ${L(34, 20, C.skin, C.skinLine)}${L(54, 30, C.bone, C.boneLine)}
      ${[44, 92, 140, 188].map(x => `<circle cx="${x}" cy="69" r="4" fill="${C.bone2}"/>`).join('')}
      ${L(84, 8, '#f3ede6')}${L(92, 16, C.dura, '#6f879e')}${L(108, 6, '#fff')}
      ${L(114, 8, '#dccfe9', '#9b85bf')}${L(122, 30, C.csf)}
      ${[34, 70, 106, 142, 178, 214].map(x => `<path d="M${x} 122 l6 30 M${x + 12} 122 l-6 30" stroke="#9b85bf" stroke-width="1"/>`).join('')}
      ${L(152, 6, '#f4b7c4', '#c9677f')}
      <path d="M20 158 H240 V280 H20Z" fill="${C.brain}"/><path d="M20 160 q27.5 34 55 0 q27.5 34 55 0 q27.5 34 55 0 q27.5 34 55 0" fill="#f4b7c4" stroke="${C.brainLine}" stroke-width="1.2"/>
      ${R(44, 44, 'scalp', "scalp")}${R(70, 84, 'skull', "skull bone")}
      ${R(100, 124, 'dura mater', "dura mater")}${R(118, 164, 'arachnoid', "arachnoid")}
      ${R(138, 204, 'subarachnoid space', "subarachnoid space (CSF)")}${R(155, 244, 'pia mater', "pia mater")}
      ${f(130, 236, "cerebral cortex", { size: 10, fill: '#a3485f', w: 800 })}
      ${f(130, 294, "From outside in: dura mater, arachnoid, pia mater", { size: 9, fill: MUTED, w: 700 })}`, "Meninges");
  };

  /* بطن‌ها و جریان CSF */
  A.ventricles = () => {
    const b = brainSide(170, 130, 1.05, { lobes: false }), m = nid();
    return svg(360, 290, `${title("Ventricles of the brain and CSF flow")}
      ${b.b}
      <g transform="translate(170 130) scale(1.05)">
        <path d="M-60 -18 C-50 -44 10 -50 40 -30 C52 -22 60 -6 66 10 C56 6 48 0 40 -6 C20 -20 -20 -22 -40 -4 C-46 4 -40 18 -30 24 C-44 24 -60 14 -60 -18Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/>
        <path d="M-6 6 C-2 20 6 24 10 14 C8 6 2 2 -6 6Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4"/>
        <path d="M6 18 C14 30 26 36 40 40" stroke="${C.csfLine}" stroke-width="3" fill="none"/>
        <path d="M40 40 L50 50 L42 58 L34 50Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4"/>
        <path d="M44 58 V104" stroke="${C.csfLine}" stroke-width="3" stroke-dasharray="5 4"/>
        <path d="M-40 -30 q8 -6 14 0 q6 6 12 0" stroke="#d65a52" stroke-width="2.4" fill="none"/>
      </g>
      ${curve(m, 'M120 98 C150 80 196 84 214 106', '#1d77a8', 2.2)}
      ${pin(110, 112, 60, 70)}${lab(52, 56, 'lateral ventricle', "lateral ventricle", { size: 9.5 })}
      ${pin(172, 146, 74, 186)}${lab(56, 196, 'third ventricle', "third ventricle", { size: 9.5 })}
      ${pin(216, 184, 300, 186)}${lab(312, 182, 'fourth ventricle', "fourth ventricle", { size: 9.5 })}
      ${pin(128, 100, 228, 40)}${lab(282, 34, 'choroid plexus', "choroid plexus: makes CSF", { size: 9.5 })}
      ${pin(216, 222, 280, 260)}${lab(300, 262, 'central canal', "central canal of the spinal cord", { size: 9.5 })}
      ${f(110, 282, "CSF floats and protects the brain and spinal cord", { size: 9.5, fill: '#1d77a8', w: 800 })}`, "Ventricles of the brain", b.d + marker(m, '#1d77a8'));
  };

  /* برش عرضی نخاع با ریشه‌ها */
  A['spinal-cord'] = () => {
    const m = nid(), n = nid();
    return svg(360, 300, `${title("Cross-section of the spinal cord: grey and white matter")}
      <g transform="translate(0 26)">
      <ellipse cx="180" cy="140" rx="92" ry="74" fill="${C.white}" stroke="#b39b8a" stroke-width="1.6"/>
      <path d="M180 140 C160 130 140 96 130 84 C150 92 166 104 180 114 C194 104 210 92 230 84 C220 96 200 130 180 140 C200 150 222 184 232 200 C210 190 194 170 180 160 C166 170 150 190 128 200 C138 184 160 150 180 140Z" fill="${C.gray}" stroke="#8d7663" stroke-width="1.4"/>
      <circle cx="180" cy="140" r="4" fill="${C.csf}" stroke="${C.csfLine}"/>
      <path d="M100 96 C76 86 56 82 30 84" stroke="#2e9bd6" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M260 96 C284 86 304 82 330 84" stroke="#2e9bd6" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="294" cy="84" rx="12" ry="9" fill="#9bd0ee" stroke="#2e9bd6"/>
      <path d="M104 186 C80 196 56 200 30 198" stroke="#d65a52" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M256 186 C280 196 304 200 330 198" stroke="#d65a52" stroke-width="7" fill="none" stroke-linecap="round"/>
      ${arrow(m, 22, 66, 84, 72, '#2e9bd6', 2)}${arrow(n, 84, 214, 22, 214, '#d65a52', 2)}
      </g>
      ${t(14, 62, 'sensory root', { size: 9.5, anchor: 'start', fill: '#1d77a8', w: 800 })}${f(14, 76, "sensory root", { size: 9, anchor: 'start' })}
      ${pin(146, 126, 150, 52)}${lab(150, 40, 'dorsal horn', "dorsal horn (sensory)", { size: 9.5 })}
      ${pin(294, 110, 300, 62)}${lab(300, 40, 'dorsal root ganglion', "dorsal root ganglion", { size: 9.5 })}
      ${pin(248, 150, 316, 150)}${lab(326, 134, 'white matter', "white matter", { size: 9.5 })}
      ${pin(196, 160, 232, 108)}${lab(240, 88, 'gray matter', "grey matter", { size: 9 })}
      ${pin(218, 210, 270, 268)}${lab(300, 262, 'ventral horn', "anterior horn (motor)", { size: 9.5 })}
      ${t(14, 262, 'motor root', { size: 9.5, anchor: 'start', fill: '#c2413a', w: 800 })}${f(14, 276, "motor root", { size: 9, anchor: 'start' })}
      ${f(180, 294, "Sensation enters from the back and motor commands leave from the front", { size: 9.5, fill: INK, w: 700 })}`, "Cross-section of the spinal cord", marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  /* سطوح نخاع و اعصاب نخاعی */
  A['spinal-levels'] = () => {
    const seg = (y1, y2, c, n, en, fa, k) => { let s = ''; const h = (y2 - y1) / n; for (let i = 0; i < n; i++) s += vert(150, y1 + i * h + 1, 30, h - 2.5) + `<path d="M180 ${(y1 + i * h + h / 2).toFixed(1)} h${18 + k}" stroke="${c}" stroke-width="2.2"/>`; return s + `<rect x="228" y="${y1}" width="124" height="${y2 - y1 - 4}" rx="10" fill="${c}" opacity=".14"/>${t(290, (y1 + y2) / 2 - 2, en, { size: 10.5, fill: c, w: 900 })}${f(290, (y1 + y2) / 2 + 13, fa, { size: 9, fill: INK })}`; };
    return svg(360, 330, `${title("31 pairs of spinal nerves")}
      <path d="M140 30 V320" stroke="${C.nerve}" stroke-width="0"/>
      ${seg(30, 96, '#e07a3a', 8, 'cervical C1–C8', "8 cervical pairs", 0)}${seg(96, 210, '#3d6fd6', 12, 'thoracic T1–T12', "12 thoracic pairs", 4)}
      ${seg(210, 268, '#17a398', 5, 'lumbar L1–L5', "5 lumbar pairs", 8)}${seg(268, 312, '#8e6bd8', 5, 'sacral S1–S5', "5 sacral pairs", 12)}
      <path d="M165 24 V226" stroke="${C.nerve}" stroke-width="7" stroke-linecap="round" opacity=".9"/>
      <path d="M165 226 C162 260 160 290 158 316 M165 226 C166 262 168 290 170 316 M165 226 C170 256 174 290 176 316" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      ${pin(165, 214, 90, 200)}${lab(64, 196, 'conus', "end of the spinal cord (L1–L2)", { size: 9.5 })}
      ${pin(168, 280, 90, 266)}${lab(64, 262, 'cauda equina', "cauda equina", { size: 9.5 })}
      ${pin(165, 60, 90, 60)}${lab(64, 56, 'spinal cord', "spinal cord", { size: 9.5 })}
      ${f(70, 326, "+ 1 coccygeal pair", { size: 9, fill: MUTED })}`, "spinal nerves");
  };

  /* ================= دنیای ۲: اعصاب محیطی و خودکار ================= */
  A.synapse = () => {
    const m = nid();
    const ves = [[90, 112], [104, 128], [86, 140], [112, 150], [98, 164]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff3c4" stroke="#c99a1d"/>${[0, 1, 2].map(i => `<circle cx="${p[0] - 3 + i * 3}" cy="${p[1] + (i % 2 ? 2 : -2)}" r="1.4" fill="#e07a3a"/>`).join('')}`).join('');
    const dots = Array.from({ length: 14 }, (_, i) => `<circle cx="${150 + (i * 7) % 26}" cy="${116 + (i * 13) % 52}" r="2" fill="#e07a3a"/>`).join('');
    return svg(360, 260, `${title("Synapse: the message passes from one neuron to the next")}
      <path d="M10 140 C40 140 50 70 120 80 C150 86 150 200 120 204 C50 214 40 140 10 140Z" fill="${C.cell}" stroke="${C.cellLine}" stroke-width="1.6"/>
      ${ves}${dots}
      <path d="M190 74 C210 70 240 70 350 60 V220 C240 214 210 214 190 210 C178 170 178 116 190 74Z" fill="#f6c8d6" stroke="#c9677f" stroke-width="1.6"/>
      ${[100, 124, 148, 172, 196].map(y => `<rect x="186" y="${y - 6}" width="8" height="12" rx="3" fill="#7fb2e5" stroke="#3d6fd6"/>`).join('')}
      ${arrow(m, 20, 236, 330, 236, '#e5a500', 3)}${f(176, 254, "direction of the message", { size: 9.5, fill: '#a87a12', w: 800 })}
      ${pin(64, 140, 44, 58)}${lab(56, 46, 'axon terminal', "axon terminal", { size: 9.5 })}
      ${pin(98, 164, 120, 228)}${t(124, 224, "vesicles • transmitter sacs", { size: 9, anchor: 'start' })}
      ${pin(163, 140, 160, 58)}${lab(170, 46, 'synaptic cleft', "synaptic cleft", { size: 9.5 })}
      ${pin(160, 150, 300, 100)}${lab(300, 84, 'neurotransmitter', "neurotransmitter", { size: 9.5 })}
      ${pin(190, 172, 300, 170)}${lab(300, 154, 'receptors', "receptors", { size: 9.5 })}`, "Synapse", marker(m, '#e5a500'));
  };

  A['reflex-arc'] = () => {
    const m = nid(), n = nid();
    return svg(360, 300, `${title("Knee-jerk reflex arc (patellar reflex)")}
      <ellipse cx="270" cy="70" rx="56" ry="42" fill="${C.white}" stroke="#b39b8a" stroke-width="1.4"/>
      <path d="M270 70 C258 64 246 46 240 40 C252 44 262 52 270 58 C278 52 288 44 300 40 C294 46 282 64 270 70 C282 76 294 94 300 102 C288 98 278 88 270 82 C262 88 252 98 240 102 C246 94 258 76 270 70Z" fill="${C.gray}" stroke="#8d7663"/>
      <path d="M66 140 C60 196 66 236 82 290 L118 290 C114 240 116 200 120 150 C140 150 150 160 166 172 L196 260 L226 258 L200 160 C180 132 150 120 118 118Z" fill="${C.skin}" stroke="${C.skinLine}" stroke-width="1.3"/>
      <path d="M118 128 C140 132 160 146 172 168" stroke="#d65a52" stroke-width="10" fill="none" stroke-linecap="round" opacity=".55"/>
      <rect x="154" y="160" width="16" height="16" rx="5" fill="${C.bone}" stroke="${C.boneLine}"/>
      <path d="M220 222 l28 -30 l10 8 l-28 30z" fill="#9aa5ab" stroke="#5b6b73"/>
      ${curve(m, 'M174 186 C200 150 220 110 246 80', '#2e9bd6', 2.6)}
      ${curve(n, 'M280 82 C260 130 200 140 140 132', '#d65a52', 2.6)}
      ${zap(234, 210, 0.9)}
      
      ${pin(174, 186, 120, 264)}${lab(150, 276, 'receptor', "1. Receptor (tendon stretch)", { size: 9.5 })}
      ${pin(212, 128, 140, 70)}${lab(110, 56, 'sensory neuron', "2. Sensory (afferent) neuron", { size: 9.5 })}
      ${pin(270, 70, 300, 140)}${lab(312, 152, 'spinal cord', "3. Spinal cord", { size: 9.5 })}
      ${pin(240, 112, 312, 200)}${lab(312, 212, 'motor neuron', "4. Motor (efferent) neuron", { size: 9.5 })}
      ${pin(130, 132, 50, 110)}${lab(46, 96, 'effector', "5. Quadriceps muscle", { size: 9.5 })}`, "Reflex arc", marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  A['cranial-nerves'] = () => {
    const N = [['I', 'olfactory', "smell"], ['II', 'optic', "vision"], ['III', 'oculomotor', "eye movement, pupil"], ['IV', 'trochlear', "eye movement"], ['V', 'trigeminal', "facial sensation, chewing"], ['VI', 'abducens', "turning the eye outwards"],
      ['VII', 'facial', "facial movements"], ['VIII', 'vestibulocochlear', "hearing and balance"], ['IX', 'glossopharyngeal', "swallowing, taste"], ['X', 'vagus', "chest and abdominal organs"], ['XI', 'accessory', "neck and shoulder muscles"], ['XII', 'hypoglossal', "tongue movement"]];
    const row = (n, i) => { const x = i < 6 ? 8 : 184, y = 34 + (i % 6) * 44; return `<rect x="${x}" y="${y}" width="168" height="38" rx="10" fill="${i % 2 ? '#f3eefc' : '#fdf3dc'}"/><circle cx="${x + 20}" cy="${y + 19}" r="13" fill="#6c4fd0"/>${t(x + 20, y + 23.5, n[0], { size: 10, fill: '#fff', w: 900, sym: true })}${t(x + 40, y + 16, n[1], { size: 10, anchor: 'start', w: 800 })}${f(x + 40, y + 31, n[2], { size: 9, anchor: 'start', fill: INK })}`; };
    return svg(360, 306, `${title("The 12 pairs of cranial nerves")}${N.map(row).join('')}`, "cranial nerves");
  };

  /* سمپاتیک و پاراسمپاتیک */
  A.ans = () => {
    const R = (y, ic, sym, par) => `<rect x="10" y="${y}" width="340" height="30" rx="9" fill="${y % 2 ? '#fff' : '#faf8fd'}"/>${t(180, y + 21, ic, { size: 16 })}${f(90, y + 20, sym, { size: 9.5, fill: '#c2413a', w: 800 })}${f(270, y + 20, par, { size: 9.5, fill: '#17a398', w: 800 })}`;
    return svg(360, 292, `${title("Autonomic system: two opposing forces")}
      <rect x="10" y="30" width="160" height="50" rx="12" fill="#fde6e4"/>${t(90, 50, 'sympathetic', { size: 11, fill: '#c2413a', w: 900 })}${f(90, 68, "fight or flight (stress)", { size: 9.5, fill: INK, w: 800 })}
      <rect x="190" y="30" width="160" height="50" rx="12" fill="#e1f6f3"/>${t(270, 50, 'parasympathetic', { size: 11, fill: '#17a398', w: 900 })}${f(270, 68, "rest and digest", { size: 9.5, fill: INK, w: 800 })}
      ${R(90, '👁️', "pupils dilated", "pupil constricted")}${R(122, '❤️', "fast heart rate", "slow heartbeat")}${R(154, '🫁', "bronchi open", "bronchi narrowed")}
      ${R(186, '🍽️', "digestion slowed", "digestion active")}${R(218, '💧', "sweating and high blood sugar", "saliva secretion")}${R(250, '🚽', "bladder relaxed", "emptying the bladder")}`, "Sympathetic and parasympathetic");
  };

  A.dermatomes = () => {
    const bands = [['#f7a46b', 70, 86, 'C'], ['#b79be6', 86, 150, 'T'], ['#7fb2e5', 150, 190, 'L'], ['#8fd18a', 190, 210, 'S']];
    const cid = nid();
    return svg(360, 326, `${title("Dermatomes: each skin area, one spinal nerve")}
      <defs><clipPath id="${cid}">${mannequin(150, 26, 1.05).replace(/<g[^>]*>/, '').replace('</g>', '')}</clipPath></defs>
      ${mannequin(150, 26, 1.05)}
      <g clip-path="url(#${cid})" opacity=".85">${bands.map(b => `<rect x="80" y="${b[1]}" width="140" height="${b[2] - b[1]}" fill="${b[0]}"/>`).join('')}
        <rect x="80" y="210" width="140" height="70" fill="#7fb2e5"/><rect x="80" y="280" width="140" height="40" fill="#8fd18a"/><rect x="80" y="84" width="34" height="130" fill="#f7a46b"/><rect x="186" y="84" width="34" height="130" fill="#f7a46b"/>
        ${[94, 106, 118, 130, 142].map(y => `<path d="M80 ${y} H220" stroke="#fff" stroke-width="1" opacity=".7"/>`).join('')}</g>
      ${[['C', 'cervical', "cervical", '#e07a3a', 80], ['T', 'thoracic', "of the chest", '#8e6bd8', 128], ['L', 'lumbar', "lower back", '#3d6fd6', 210], ['S', 'sacral', "lowest back, over the sacrum", '#3f8a05', 290]].map(r => `<rect x="244" y="${r[4] - 18}" width="108" height="36" rx="10" fill="${r[3]}" opacity=".14"/>${t(264, r[4] + 5, r[0], { size: 15, fill: r[3], w: 900, sym: true })}${t(316, r[4] - 2, r[1], { size: 9.5, fill: r[3], w: 800 })}${f(316, r[4] + 12, r[2], { size: 9, fill: INK })}`).join('')}
      ${f(180, 320, "Shingles causes a rash along one dermatome", { size: 9, fill: MUTED, w: 700 })}`, "Dermatomes");
  };

  A['afferent-efferent'] = () => {
    const m = nid(), n = nid();
    return svg(360, 220, `${title("Afferent towards the CNS, efferent away from the CNS")}
      <rect x="140" y="60" width="80" height="100" rx="16" fill="#eeeafb" stroke="#6c4fd0" stroke-width="1.6"/>${t(180, 104, 'CNS', { size: 16, fill: '#5a3fbf', w: 900, sym: true })}${f(180, 124, "the brain and spinal cord", { size: 9.5, fill: INK })}
      ${t(40, 78, '👆', { size: 24 })}${f(40, 108, "skin receptor", { size: 9 })}
      ${t(320, 78, '💪', { size: 24 })}${f(320, 108, "muscle or gland", { size: 9 })}
      ${arrow(m, 62, 76, 136, 90, '#2e9bd6', 3)}${arrow(n, 224, 90, 298, 76, '#d65a52', 3)}
      ${lab(96, 150, 'afferent (sensory)', "afferent: sensory", { size: 10, fill: '#1d77a8' })}
      ${lab(268, 150, 'efferent (motor)', "efferent: motor", { size: 10, fill: '#c2413a' })}
      ${f(180, 204, "AF = Arrive • EF = Exit", { size: 9.5, fill: MUTED, w: 700 })}`, "Afferent and efferent", marker(m, '#2e9bd6') + marker(n, '#d65a52'));
  };

  /* ================= دنیای ۳: نشانه‌ها و بیماری‌ها ================= */
  A['paralysis-types'] = () => {
    const fig = (x, en, fa, parts) => {
      const k = 0.5, cid = nid();
      const fill = parts.map(p => `<rect x="${x + p[0]}" y="${p[1]}" width="${p[2]}" height="${p[3]}" fill="#d9443a" opacity=".55"/>`).join('');
      return `<defs><clipPath id="${cid}">${mannequin(x, 34, k).replace(/<g[^>]*>/, '').replace('</g>', '')}</clipPath></defs>${mannequin(x, 34, k)}<g clip-path="url(#${cid})">${fill}</g>${lab(x, 186, en, fa, { size: 10 })}`;
    };
    return svg(360, 232, `${title("Types of paralysis (red = paralysed part)")}
      ${fig(48, 'monoplegia', "one limb", [[-40, 96, 20, 80]])}
      ${fig(136, 'hemiplegia', "half of the body", [[-40, 30, 40, 150]])}
      ${fig(224, 'paraplegia', "both legs and lower body", [[-40, 106, 80, 80]])}
      ${fig(312, 'quadriplegia', "Four organs", [[-40, 56, 80, 130]])}
      ${f(180, 226, "The suffix -plegia means complete paralysis and -paresis means weakness", { size: 9.5, fill: MUTED, w: 700 })}`, "Types of paralysis");
  };

  A['stroke-types'] = () => {
    const b1 = brainSide(92, 118, 0.62, { lobes: false }), b2 = brainSide(268, 118, 0.62, { lobes: false });
    return svg(360, 250, `${title("Stroke (CVA): blockage or bleeding")}
      ${b1.b}${b2.b}
      <path d="M40 150 C60 120 80 100 110 92" stroke="${C.art}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="78" cy="112" rx="8" ry="5" fill="#5a1a1a"/><path d="M84 106 C100 98 112 96 126 98" stroke="#9aa5ab" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
      <ellipse cx="116" cy="92" rx="24" ry="16" fill="#9aa5ab" opacity=".55"/>
      <path d="M216 150 C236 120 256 100 286 92" stroke="${C.art}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="274" cy="102" rx="26" ry="17" fill="${C.blood}" opacity=".8"/><circle cx="262" cy="106" r="5" fill="${C.art}"/>
      ${lab(92, 196, 'ischemic stroke', "Ischaemic stroke: a clot blocks the vessel", { size: 10, fill: '#3d6fd6' })}
      ${lab(268, 196, 'hemorrhagic stroke', "Haemorrhagic stroke: the vessel ruptures", { size: 10, fill: '#c2413a' })}
      ${f(180, 240, "TIA: stroke symptoms that resolve in less than 24 hours (a warning)", { size: 9.5, fill: MUTED, w: 700 })}`, "Types of stroke", b1.d + b2.d);
  };

  A.hematomas = () => {
    const H = (cx, kind) => {
      const sh = nid();
      const blood = kind === 'epi' ? `<path d="M${cx - 30} ${50} C${cx - 10} 44 ${cx + 12} 46 ${cx + 22} 58 C${cx + 4} 70 ${cx - 18} 70 ${cx - 30} 64Z" fill="${C.blood}"/>`
        : kind === 'sub' ? `<path d="M${cx - 40} 64 C${cx - 10} 50 ${cx + 26} 52 ${cx + 40} 70 L${cx + 36} 76 C${cx + 20} 62 ${cx - 10} 60 ${cx - 36} 72Z" fill="${C.blood}"/>`
        : `<ellipse cx="${cx + 4}" cy="100" rx="14" ry="11" fill="${C.blood}"/>`;
      return `<g filter="url(#${sh})"><ellipse cx="${cx}" cy="100" rx="52" ry="60" fill="${C.bone}" stroke="${C.boneLine}" stroke-width="1.4"/></g>
        <ellipse cx="${cx}" cy="100" rx="45" ry="53" fill="${C.dura}"/><ellipse cx="${cx}" cy="102" rx="41" ry="49" fill="${C.brain}" stroke="${C.brainLine}"/>
        <path d="M${cx - 30} 90 q10 -8 20 0 q10 8 20 0 M${cx - 26} 120 q10 -8 20 0 q10 8 20 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>${blood}${shadow(sh)}`;
    };
    return svg(360, 230, `${title("Brain haematomas: the location of the blood matters")}
      ${H(62, 'epi')}${H(180, 'sub')}${H(298, 'intra')}
      ${lab(62, 182, 'epidural', "between the skull and the dura", { size: 10 })}
      ${lab(180, 182, 'subdural', "beneath the dura", { size: 10 })}
      ${lab(298, 182, 'intracerebral', "within the brain tissue", { size: 10 })}
      ${f(180, 222, "The prefix epi means on, sub means below and intra means within", { size: 9.5, fill: MUTED, w: 700 })}`, "Haematomas");
  };

  A.aneurysm = () => {
    return svg(360, 240, `${title("Aneurysm: a bulge in the wall of a brain artery")}
      <path d="M180 200 V150 M180 150 C150 140 120 120 100 90 M180 150 C210 140 240 120 260 90 M100 90 C96 70 110 52 130 46 M260 90 C264 70 250 52 230 46 M130 46 H230 M100 90 L40 70 M260 90 L320 70 M130 46 L110 24 M230 46 L250 24" stroke="${C.art}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="236" cy="118" r="20" fill="#e66a5c" stroke="${C.blood}" stroke-width="2"/><path d="M228 108 q6 -4 12 2" stroke="#fff" stroke-width="2.4" fill="none" opacity=".7"/>
      ${pin(236, 118, 290, 150)}${lab(306, 160, 'aneurysm', "Aneurysm", { size: 10.5, fill: '#c2413a' })}
      ${lab(180, 92, 'circle of Willis', "circle of Willis beneath the brain", { size: 10 })}
      ${pin(180, 180, 110, 196)}${lab(80, 204, 'basilar artery', "basilar artery", { size: 9.5 })}
      ${f(180, 232, "Ruptured aneurysm → subarachnoid haemorrhage (haemorrhagic stroke)", { size: 9.5, fill: MUTED, w: 700 })}`, "Aneurysm");
  };

  A['seizure-types'] = () => {
    const wave = (y, c, amp, per, n) => { let d = `M30 ${y}`; for (let i = 0; i < n; i++) d += ` q${per / 4} ${-amp} ${per / 2} 0 t${per / 2} 0`; return `<path d="${d}" stroke="${c}" stroke-width="2" fill="none"/>`; };
    return svg(360, 262, `${title("Seizures and epilepsy: an electrical storm in the brain")}
      <rect x="20" y="32" width="320" height="58" rx="12" fill="#f6f8fa"/>${f(330, 46, "normal", { size: 9, anchor: 'end', fill: '#3d6fd6', w: 800 })}${wave(70, '#3d6fd6', 7, 24, 13)}
      <rect x="20" y="98" width="320" height="70" rx="12" fill="#fdf0f0"/>${f(330, 112, "during a seizure", { size: 9, anchor: 'end', fill: '#c2413a', w: 800 })}${wave(142, '#c2413a', 18, 12, 26)}
      ${card(20, 178, 100, 76, '#fde6e4', '', 'tonic-clonic', "stiffening then jerking", "grand mal")}
      ${card(130, 178, 100, 76, '#eeeafb', '', 'absence', "brief staring", "petit mal")}
      ${card(240, 178, 100, 76, '#fdf3dc', '', 'aura', "warning sign", "before the attack")}`, "Types of seizure");
  };

  A['spina-bifida'] = () => {
    const P = (x, en, fa, extra) => `<g>${[0, 1, 2].map(i => vert(x - 20, 60 + i * 34, 40, 28)).join('')}<path d="M${x - 6} 40 V170" stroke="${C.nerve}" stroke-width="8" stroke-linecap="round"/>${extra}${lab(x, 196, en, fa, { size: 9.5 })}</g>`;
    return svg(360, 240, `${title("Spina bifida: failure of the spine to close")}
      ${P(46, 'normal', "normal", '')}
      ${P(126, 'occulta', "hidden (occulta)", `<rect x="128" y="94" width="18" height="28" fill="#fff"/><path d="M144 100 q10 8 0 16" stroke="#7a5a3a" stroke-width="2" fill="none"/>`)}
      ${P(206, 'meningocele', "protrusion of the membranes", `<rect x="208" y="94" width="18" height="28" fill="#fff"/><circle cx="240" cy="108" r="16" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/>`)}
      ${P(296, 'myelomeningocele', "spinal cord and membranes", `<rect x="298" y="94" width="18" height="28" fill="#fff"/><circle cx="330" cy="108" r="16" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.6"/><path d="M290 102 C310 100 324 104 334 112" stroke="${C.nerve}" stroke-width="5" fill="none"/>`)}
      ${f(180, 234, "The suffix -cele means hernia or protrusion", { size: 9.5, fill: MUTED, w: 700 })}`, "Spina bifida");
  };

  A.hydrocephalus = () => {
    const H = (cx, big) => `${head(cx, 120, big ? 0.78 : 0.62)}<ellipse cx="${cx + 10}" cy="${big ? 92 : 98}" rx="${big ? 60 : 44}" ry="${big ? 52 : 40}" fill="${C.brain}" stroke="${C.brainLine}" stroke-width="1.4"/><path d="M${cx - (big ? 20 : 12)} ${big ? 86 : 94} C${cx - 10} ${big ? 50 : 74} ${cx + 40} ${big ? 50 : 74} ${cx + (big ? 44 : 30)} ${big ? 86 : 94} C${cx + 30} ${big ? 116 : 104} ${cx} ${big ? 116 : 104} ${cx - (big ? 20 : 12)} ${big ? 86 : 94}Z" fill="${C.csf}" stroke="${C.csfLine}" stroke-width="1.4" ${big ? '' : 'transform="scale(1)"'}/>`;
    return svg(360, 270, `${title("Hydrocephalus: CSF builds up in the ventricles")}
      ${H(90, false)}${H(260, true)}
      ${lab(90, 226, 'normal ventricles', "normal ventricles", { size: 10 })}
      ${lab(260, 226, 'hydrocephalus', "enlarged ventricles, large head", { size: 10, fill: '#1d77a8' })}
      ${f(180, 264, "treatment: ventriculoperitoneal shunt (VP shunt)", { size: 9.5, fill: MUTED, w: 700 })}`, "Hydrocephalus");
  };

  A['ms-myelin'] = () => {
    return svg(360, 236, `${title("MS: destruction of the myelin sheath")}
      ${f(330, 44, "healthy axon", { size: 9.5, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      <path d="M20 70 H340" stroke="${C.cellLine}" stroke-width="3"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${24 + i * 54}" y="61" width="48" height="18" rx="9" fill="${C.myelin}" stroke="${C.myelinLine}"/>`).join('')}
      ${zap(40, 54, 0.7)}${[90, 150, 210, 270].map(x => `<circle cx="${x}" cy="48" r="3" fill="#e5a500"/>`).join('')}
      ${f(330, 120, "axon in MS", { size: 9.5, anchor: 'end', fill: '#c2413a', w: 800 })}
      <path d="M20 146 H340" stroke="${C.cellLine}" stroke-width="3"/>${[0, 3, 5].map(i => `<rect x="${24 + i * 54}" y="137" width="48" height="18" rx="9" fill="${C.myelin}" stroke="${C.myelinLine}"/>`).join('')}
      ${[1, 2, 4].map(i => `<rect x="${28 + i * 54}" y="139" width="40" height="14" rx="4" fill="#b9a3a3" opacity=".75"/>`).join('')}
      ${zap(40, 130, 0.7)}<circle cx="96" cy="124" r="3" fill="#e5a500"/><path d="M110 124 l6 -6 m0 6 l-6 -6" stroke="#c2413a" stroke-width="2"/>
      ${pin(110, 146, 110, 178)}${lab(110, 190, 'plaque', "hard plaque (sclerosis)", { size: 9.5 })}
      ${pin(240, 146, 250, 178)}${lab(250, 190, 'demyelination', "loss of myelin", { size: 9.5 })}
      ${f(180, 230, "The message slows or stops: weakness, numbness, blurred vision", { size: 9.5, fill: MUTED, w: 700 })}`, "MS");
  };

  A.degenerative = () => {
    return svg(360, 228, `${title("Neurodegenerative diseases")}
      ${card(8, 30, 112, 92, '#fdf3dc', '🧓', 'Alzheimer', "memory loss, dementia", 'AD')}
      ${card(124, 30, 112, 92, '#eeeafb', '🤲', 'Parkinson', "tremor, rigidity, slowness", "dopamine deficiency")}
      ${card(240, 30, 112, 92, '#e1f6f3', '⚡', 'MS', "myelin destruction", "relapsing episodes")}
      ${card(66, 130, 112, 92, '#fde6e4', '💪', 'ALS', "motor neuron degeneration", "weakness and atrophy")}
      ${card(182, 130, 112, 92, '#e2f2fb', '💃', 'Huntington', "dance-like movements", "hereditary (chorea)")}`, "Degenerative diseases");
  };

  /* ================= دنیای ۴: سلامت روان ================= */
  A['mind-map'] = () => {
    const B = (x, y, w, c, bg, en, fa, ex) => `<rect x="${x}" y="${y}" width="${w}" height="70" rx="14" fill="${bg}" stroke="${c}" stroke-width="1.4"/>${t(x + w / 2, y + 22, en, { size: 10.5, fill: c, w: 900 })}${f(x + w / 2, y + 38, fa, { size: 9.5, fill: INK, w: 800 })}${t(x + w / 2, y + 57, ex, { size: 8.5, fill: MUTED })}`;
    return svg(360, 286, `${title("Families of mental disorders")}
      <circle cx="180" cy="148" r="34" fill="#eeeafb" stroke="#6c4fd0" stroke-width="2"/>${t(180, 146, '💭', { size: 20 })}${f(180, 168, "mental health", { size: 9, fill: '#5a3fbf', w: 800 })}
      <path d="M180 114 V100 M146 148 H122 M214 148 H238 M156 172 L120 206 M204 172 L240 206" stroke="#b7a3ea" stroke-width="2"/>
      ${B(110, 30, 140, '#e07a3a', '#fdeee3', 'anxiety disorders', "anxiety", 'GAD • panic • phobia • OCD • PTSD')}
      ${B(4, 112, 118, '#3d6fd6', '#e2ecfb', 'mood disorders', "mood", 'depression • bipolar')}
      ${B(238, 112, 118, '#c2413a', '#fde6e4', 'psychotic', "psychotic", 'schizophrenia')}
      ${B(20, 206, 150, '#17a398', '#e1f6f3', 'developmental', "developmental", 'autism • ADHD')}
      ${B(190, 206, 150, '#8e6bd8', '#f3eefc', 'eating & somatic', "eating and somatic symptoms", 'anorexia • bulimia • SSD')}`, "Mental disorders");
  };

  A['fight-flight'] = () => {
    const R = (y, ic, fa) => `${t(54, y + 4, ic, { size: 16 })}${f(84, y + 4, fa, { size: 9.5, fill: INK, w: 700, anchor: 'start' })}`;
    return svg(360, 262, `${title("The “fight or flight” response in anxiety")}
      ${head(270, 120, 0.62)}
      ${zap(300, 60, 1)}
      <rect x="20" y="40" width="190" height="196" rx="16" fill="#fdf0f0"/>
      ${R(66, '❤️', "fast heartbeat (tachycardia)")}${R(98, '🫁', "fast breathing (tachypnea)")}${R(130, '💦', "sweating (diaphoresis)")}${R(162, '👁️', "pupils dilated")}${R(194, '😰', "worry, restlessness")}
      ${lab(268, 222, 'sympathetic', "the sympathetic system is activated", { size: 10, fill: '#c2413a' })}
      ${f(180, 256, "A normal response to stress; when it is groundless and persistent, it is an anxiety disorder", { size: 9, fill: MUTED, w: 700 })}`, "Fight or flight");
  };

  A['mood-wave'] = () => {
    return svg(360, 258, `${title("Mood: depression, normal and mania")}
      <rect x="30" y="40" width="310" height="44" fill="#fdf3dc"/><rect x="30" y="84" width="310" height="52" fill="#f6f8fa"/><rect x="30" y="136" width="310" height="44" fill="#e2ecfb"/>
      ${f(336, 54, "mania", { size: 9, anchor: 'end', fill: '#a87a12', w: 800 })}${f(336, 98, "normal mood", { size: 9, anchor: 'end', fill: MUTED, w: 800 })}${f(336, 176, "depression", { size: 9, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      <path d="M30 110 C60 104 70 52 100 56 C130 60 130 160 166 160 C200 160 200 60 236 58 C270 56 270 164 306 160 C322 158 330 120 340 110" stroke="#6c4fd0" stroke-width="3" fill="none"/>
      <path d="M30 196 H340" stroke="#9aa5ab" stroke-width="1.4"/>${f(185, 212, "time (weeks and months)", { size: 9, fill: MUTED })}
      ${lab(180, 234, 'bipolar disorder', "Bipolar disorder: swinging between two poles", { size: 10, fill: '#5a3fbf' })}`, "Mood swings");
  };

  A['psych-drugs'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 96, bg, ic, en, fa, sub);
    return svg(360, 236, `${title("Psychiatric drugs")}
      ${c2(8, 30, '🌤️', 'antidepressant', "antidepressant", "such as SSRIs", '#e2ecfb')}
      ${c2(126, 30, '🧘', 'anxiolytic', "drug against anxiety", "calming", '#fdeee3')}
      ${c2(244, 30, '🧩', 'antipsychotic', "antipsychotic", 'neuroleptic', '#fde6e4')}
      ${c2(67, 134, '⚖️', 'mood stabilizer', "mood stabilising", "such as lithium", '#f3eefc')}
      ${c2(185, 134, '🎯', 'stimulant', "stimulus", "for ADHD", '#e1f6f3')}`, "Psychiatric drugs");
  };

  A.phobias = () => {
    const P = (x, y, ic, en, fa) => `<rect x="${x}" y="${y}" width="108" height="78" rx="14" fill="#f6f2fd"/>${t(x + 54, y + 28, ic, { size: 20 })}${t(x + 54, y + 50, en, { size: 10, fill: '#5a3fbf', w: 900 })}${f(x + 54, y + 66, fa, { size: 9, fill: INK })}`;
    return svg(360, 220, `${title("-phobia: intense, irrational fear")}
      ${P(8, 30, '🏟️', 'agoraphobia', "fear of crowded, open places")}${P(126, 30, '🚪', 'claustrophobia', "claustrophobia")}${P(244, 30, '💡', 'photophobia', "sensitivity to light")}
      ${P(8, 118, '🌙', 'nyctophobia', "fear of night and darkness")}${P(126, 118, '🕷️', 'arachnophobia', "fear of spiders")}${P(244, 118, '🗻', 'acrophobia', "fear of heights")}
      ${f(180, 214, "agora in Greek means marketplace; claustr means closed", { size: 9, fill: MUTED, w: 700 })}`, "Phobias");
  };

  /* ================= دنیای ۵: تشخیص و درمان ================= */
  A.eeg = () => {
    const wave = (y, c, amp, per, n) => { let d = `M120 ${y}`; for (let i = 0; i < n; i++) d += ` q${per / 4} ${-amp} ${per / 2} 0 t${per / 2} 0`; return `<path d="${d}" stroke="${c}" stroke-width="1.8" fill="none"/>`; };
    return svg(360, 256, `${title("EEG: recording the electrical activity of the brain")}
      ${head(60, 132, 0.5)}
      ${[[36, 82], [56, 74], [76, 80], [42, 100], [66, 96], [86, 104]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#6c4fd0" stroke="#fff" stroke-width="1.4"/>`).join('')}
      <path d="M60 74 C80 50 100 50 118 56" stroke="#9aa5ab" stroke-width="1.4" fill="none"/>
      ${wave(62, '#3d6fd6', 7, 20, 11)}${f(340, 50, "alpha: awake and relaxed", { size: 8.5, anchor: 'end', fill: '#3d6fd6', w: 800 })}
      ${wave(110, '#17a398', 4, 10, 22)}${f(340, 96, "beta: alert and active", { size: 8.5, anchor: 'end', fill: '#17a398', w: 800 })}
      ${wave(158, '#8e6bd8', 12, 44, 5)}${f(340, 140, "delta: deep sleep", { size: 8.5, anchor: 'end', fill: '#8e6bd8', w: 800 })}
      ${wave(206, '#c2413a', 20, 12, 18)}${f(340, 188, "seizure: irregular and large", { size: 8.5, anchor: 'end', fill: '#c2413a', w: 800 })}
      ${pin(56, 74, 30, 190)}${lab(40, 202, 'electrodes', "electrodes on the head", { size: 9.5 })}
      ${f(180, 250, "The word electroencephalography means the method of recording the brain’s electricity", { size: 9, fill: MUTED, w: 700 })}`, "EEG recording");
  };

  A['lumbar-puncture'] = () => {
    return svg(360, 270, `${title("Lumbar puncture (LP): a CSF sample from the lower back")}
      ${[0, 1, 2, 3, 4].map(i => vert(40 + i * 56, 150, 48, 54)).join('')}
      ${[0, 1, 2, 3].map(i => `<rect x="${88 + i * 56}" y="156" width="8" height="42" rx="3" fill="#a9c7e4"/>`).join('')}
      <rect x="20" y="118" width="320" height="24" fill="${C.csf}" stroke="${C.csfLine}"/>
      <rect x="20" y="114" width="320" height="4" fill="${C.dura}"/>
      <path d="M20 128 H150" stroke="${C.nerve}" stroke-width="10" stroke-linecap="round"/>
      <path d="M150 128 C200 126 260 132 340 130 M150 128 C200 132 260 124 340 136 M150 128 C210 122 270 128 340 124" stroke="${C.nerveLine}" stroke-width="1.6" fill="none"/>
      <rect x="20" y="40" width="320" height="74" fill="${C.skin}" opacity=".6"/>
      <path d="M204 50 L204 132" stroke="#77868e" stroke-width="3"/><rect x="193" y="36" width="22" height="14" rx="3" fill="#cfd8dc" stroke="#77868e"/>
      ${['L1', 'L2', 'L3', 'L4', 'L5'].map((l, i) => t(64 + i * 56, 230, l, { size: 11, sym: true, fill: MUTED })).join('')}
      ${pin(204, 128, 270, 70)}${lab(300, 58, 'needle', "needle between L3 and L4", { size: 9.5 })}
      ${pin(60, 130, 70, 76)}${lab(70, 62, 'spinal cord ends', "end of the spinal cord (L1–L2)", { size: 9.5 })}
      ${pin(300, 136, 300, 100)}${t(334, 96, 'subarachnoid space', { size: 8.5, anchor: 'end', fill: '#1d77a8' })}
      ${f(180, 258, "The needle goes in below the end of the spinal cord so the cord is not injured", { size: 9.5, fill: INK, w: 700 })}`, "lumbar puncture");
  };

  A['brain-imaging'] = () => {
    const S = (x, en, fa, sub, inner) => `<rect x="${x}" y="34" width="108" height="108" rx="14" fill="#101418"/>${inner}${lab(x + 54, 162, en, fa, { size: 10 })}${f(x + 54, 190, sub, { size: 8.5 })}`;
    return svg(360, 212, `${title("Brain imaging")}
      ${S(8, 'CT', "CT scan", "fast; shows bleeding", `<ellipse cx="62" cy="88" rx="38" ry="44" fill="#cfd4d8"/><ellipse cx="62" cy="88" rx="33" ry="39" fill="#8b9499"/><path d="M52 74 q10 -6 20 0 M54 104 q8 6 16 0" stroke="#5c656a" stroke-width="3" fill="none"/><circle cx="80" cy="76" r="8" fill="#f2f4f5"/>`)}
      ${S(126, 'MRI', "magnetic imaging", "soft tissue detail", `<ellipse cx="180" cy="88" rx="38" ry="44" fill="#3a4044"/><ellipse cx="180" cy="88" rx="33" ry="39" fill="#b8bec2"/><path d="M160 70 q20 -14 40 0 q-20 10 -40 0 M162 104 q18 12 36 0" stroke="#e6e9eb" stroke-width="3" fill="none"/><path d="M180 52 V124" stroke="#6b7378" stroke-width="2"/>`)}
      ${S(244, 'PET', "picture of brain activity", "colours = metabolism", `<ellipse cx="298" cy="88" rx="36" ry="42" fill="#1d3fa0"/><ellipse cx="286" cy="76" rx="14" ry="12" fill="#f2c94c"/><ellipse cx="310" cy="96" rx="12" ry="14" fill="#d9443a"/><ellipse cx="294" cy="108" rx="10" ry="8" fill="#3fbf6a"/>`)}`, "Brain imaging");
  };

  A.gcs = () => {
    const B = (x, c, bg, L, en, fa, max) => `<rect x="${x}" y="34" width="108" height="118" rx="14" fill="${bg}"/><circle cx="${x + 54}" cy="64" r="20" fill="${c}"/>${t(x + 54, 71, L, { size: 18, fill: '#fff', w: 900, sym: true })}${t(x + 54, 104, en, { size: 10, fill: c, w: 900 })}${f(x + 54, 120, fa, { size: 9.5, fill: INK, w: 800 })}${f(x + 54, 140, max, { size: 9, fill: MUTED })}`;
    return svg(360, 232, `${title("Glasgow Coma Scale (GCS): 3 to 15")}
      ${B(8, '#e07a3a', '#fdeee3', 'E', 'eye opening', "eye opening", "1 to 4")}
      ${B(126, '#3d6fd6', '#e2ecfb', 'V', 'verbal', "verbal response", "1 to 5")}
      ${B(244, '#17a398', '#e1f6f3', 'M', 'motor', "motor response", "1 to 6")}
      <rect x="8" y="164" width="344" height="56" rx="12" fill="#f6f2fd"/>
      ${f(66, 186, "15–13", { size: 11, fill: '#46a302', w: 900 })}${f(66, 204, "mild", { size: 9, fill: INK })}
      ${f(180, 186, "12–9", { size: 11, fill: '#e5a500', w: 900 })}${f(180, 204, "moderate", { size: 9, fill: INK })}
      ${f(294, 186, "8 or less", { size: 11, fill: '#c2413a', w: 900 })}${f(294, 204, "severe (coma)", { size: 9, fill: INK })}`, "Glasgow scale");
  };

  A.craniotomy = () => {
    const b = brainSide(176, 176, 0.86, { lobes: false });
    return svg(360, 290, `${title("Skull and spine operations")}
      <path d="M80 180 C74 104 124 74 178 74 C242 74 278 112 274 176" fill="none" stroke="${C.bone2}" stroke-width="10"/>
      ${b.b}
      <path d="M152 86 L206 84 L210 114 L150 116Z" fill="#fff" stroke="#c2413a" stroke-width="2" stroke-dasharray="4 3"/>
      ${pin(170, 92, 92, 62)}${lab(64, 48, 'craniotomy', "cutting and opening the skull", { size: 10, fill: '#c2413a' })}
      ${pin(250, 100, 280, 66)}${lab(296, 48, 'craniectomy', "craniectomy", { size: 9.5 })}
      <rect x="10" y="234" width="340" height="48" rx="12" fill="#f6f2fd"/>
      ${t(70, 254, 'laminectomy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(70, 270, "removing the vertebral lamina", { size: 9, fill: INK })}
      ${t(180, 254, 'neurorrhaphy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(180, 270, "nerve suture", { size: 9, fill: INK })}
      ${t(290, 254, 'rhizotomy', { size: 10, fill: '#5a3fbf', w: 900 })}${f(290, 270, "rhizotomy", { size: 9, fill: INK })}`, "Nerve surgery", b.d);
  };

  A['vp-shunt'] = () => {
    return svg(360, 300, `${title("Ventriculoperitoneal shunt (VP shunt)")}
      ${mannequin(180, 30, 1.05)}
      <ellipse cx="180" cy="53" rx="14" ry="16" fill="${C.brain}" stroke="${C.brainLine}"/><ellipse cx="182" cy="52" rx="7" ry="6" fill="${C.csf}" stroke="${C.csfLine}"/>
      <path d="M184 50 C196 44 204 56 200 72 C196 90 200 110 198 140 C196 170 190 190 186 206" stroke="#2e9bd6" stroke-width="3" fill="none"/>
      <circle cx="200" cy="66" r="4" fill="#fff" stroke="#2e9bd6" stroke-width="2"/>
      <ellipse cx="180" cy="200" rx="30" ry="18" fill="#fde6c4" opacity=".7"/>
      ${pin(182, 52, 100, 40)}${lab(70, 36, 'ventricle', "ventricle of the brain", { size: 10 })}
      ${pin(200, 66, 270, 64)}${lab(300, 58, 'valve', "one-way valve", { size: 10 })}
      ${pin(198, 130, 270, 130)}${lab(300, 124, 'catheter', "tube under the skin", { size: 10 })}
      ${pin(186, 204, 100, 222)}${lab(66, 220, 'peritoneum', "peritoneal cavity (abdomen)", { size: 10 })}
      ${f(180, 294, "Treating hydrocephalus: excess CSF drains into the abdomen", { size: 9.5, fill: INK, w: 700 })}`, "Shunt");
  };

  A['neuro-drugs'] = () => {
    const c2 = (x, y, ic, en, fa, sub, bg) => card(x, y, 108, 96, bg, ic, en, fa, sub);
    return svg(360, 236, `${title("Nervous system drugs")}
      ${c2(8, 30, '💊', 'analgesic', "analgesic (painkiller)", "without anaesthesia", '#e2ecfb')}
      ${c2(126, 30, '😴', 'anesthetic', "numbness or anaesthesia", 'local • general', '#f3eefc')}
      ${c2(244, 30, '⚡', 'anticonvulsant', "anticonvulsant", "for epilepsy", '#fdeee3')}
      ${c2(8, 134, '🌙', 'hypnotic', "sleep-inducing drug", "hypn/o = sleep", '#e1f6f3')}
      ${c2(126, 134, '🧪', 'thrombolytic', "clot dissolver", "ischaemic stroke", '#fde6e4')}
      ${c2(244, 134, '🧠', 'dopaminergic', "raising dopamine", "Parkinson’s", '#fdf3dc')}`, "Neuro drugs");
  };

  EA.ART_KEYS = Object.keys(A);
  EA.art = k => (A[k] ? A[k]() : `<svg class="art" viewBox="0 0 10 10"></svg>`);
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* نورو — دنیای ۰: زبان عصب (پایه همه دنیاها)
 * پیش از رفتن سراغ مغز و نخاع دو چیز را یاد می‌گیریم: «دستگاه عصبی چه بخش‌هایی دارد» و «واژه‌هایش چطور ساخته می‌شوند».
 * سطح ۱: بخش‌های دستگاه عصبی • سطح ۲: ریشه‌های اصلی • سطح ۳: پیشوندها، پسوندها و دام‌های همزاد
 * سازنده‌ها در core.js توضیح داده شده‌اند؛ گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'lx', sym: 'Lx', name: "Language of Nerves", short: "Language of Nerves", sub: "What parts the nervous system has and how its words are built: root, prefix and suffix",
    color: '#6C4FD0', dark: '#4B3499', light: '#EEEAFB',
    levels: ["Parts of the Nervous System", "Main roots", "Prefixes and suffixes"],
    gens: EA.genIds('lx'),
    lessons: [
      /* ================= سطح ۱: بخش‌های دستگاه عصبی ================= */
      {
        id: 'lx1', title: "Central and Peripheral", icon: '🧠', items: [
          L("Two big divisions", `${fig('ns-overview', [], "Central and peripheral nervous systems")}The nervous system receives messages, analyses them and gives commands. It has two parts:<br>• ${e('<b>central nervous system (CNS)</b>')}: the brain and spinal cord<br>• ${e('<b>peripheral nervous system (PNS)</b>')}: all the nerves outside the brain and spinal cord; 12 pairs of cranial nerves and 31 pairs of spinal nerves`),
          L("Specialists", `${tbl([["specialist", "Job"], [e('neurologist'), "diseases of the nervous system; does not operate"], [e('neurosurgeon'), "surgery on the brain, spinal cord and nerves"], [e('psychiatrist'), "physician for mental disorders; prescribes medicines"], [e('psychologist'), "psychologist; testing and psychotherapy"]])}${memo("A neurologist treats with medicines and examination; a neurosurgeon with the scalpel.")}${pearl("In William’s record (a Case Study in Cohen’s book), his care team included a pediatrician, a neurosurgeon, a neurologist and a PM&R specialist.")}`),
          M("What does the central nervous system (CNS) consist of?", ["the brain and spinal cord", "the brain and cranial nerves", "the spinal cord and spinal nerves", "all the nerves of the body"], 'CNS = brain + spinal cord.', null, F('ns-overview', [])),
          M(`Who is a ${e('<b>neurologist</b>')}?`, ["a specialist in diseases of the nervous system", "neurosurgeon", "psychiatrist", "anaesthesia specialist"], "neur/o (nerve) + -logist (specialist)."),
          T("Cranial and spinal nerves are part of the peripheral nervous system (PNS).", true, "Everything outside the brain and spinal cord = PNS."),
          P("Match each part to its group", [['brain', 'CNS'], ['sciatic nerve', 'PNS'], ['neurosurgeon', "the surgeon"], ['psychiatrist', "physician for mental disorders"]], "Two divisions and two specialists."),
          B("The abbreviation ___ means peripheral nervous system.", ['PNS', 'CNS', 'ANS'], 'peripheral nervous system.'),
          O("Put the path of a sensory message in order", ['receptor in skin', 'sensory nerve', 'spinal cord', 'brain'], "From the receptor to the brain."),
          S("Spell the term for a doctor who treats brain and nerve disorders", 'neurologist', 'neur/o + -logist.', 'neuro…'),
          N('t2f:lx')
        ]
      },
      {
        id: 'lx2', title: "Neuron: The Messenger Cell", icon: '⚡', items: [
          L("Structure of the neuron", `${fig('neuron', [], "neuron")}${e('<b>neuron</b>')} is the basic cell of the nervous system:<br>• ${e('<b>dendrites</b>')}: branches that <b>receive</b> the message<br>• ${e('<b>cell body</b>')}: the cell body with the nucleus<br>• ${e('<b>axon</b>')}: the long fibre that carries the message <b>away</b> from the cell body<br>• ${e('<b>myelin sheath</b>')}: the white fatty sheath around the axon that speeds the message up`),
          L("The nerve and its supporters", `${e('<b>nerve</b>')} is a bundle of axons outside the CNS.<br>${wb('neur/o', '-glia')} → ${e('<b>neuroglia</b>')}: supporting cells that hold and nourish the neurons (${e('gli/o')} = glue).${memo("A Dendrite, like a tree (dendr/o), gathers the message, and an Axon, like a cable, carries it away.")}${pearl("The brain tumour glioma grows from these supporting cells, not from the neurons themselves.")}`),
          M("Which part of the neuron brings the message towards the cell body?", ["dendrite", "axon", "myelin sheath", "axon terminal"], "dendr/o = tree; the receiving branches.", null, F('neuron', [])),
          M(`What does the ${e('<b>myelin sheath</b>')} do?`, ["insulates the axon and speeds the message", "makes neurotransmitters", "feeds the brain", "receives messages from another neuron"], "A white fatty sheath."),
          T("Glia (neuroglia) are the supporting cells of the nervous system.", true, "gli/o = glue."),
          O("Put the path of a message through a neuron in order", ['dendrite', 'cell body', 'axon', 'axon terminal'], "Receive, process, send."),
          P("Match each part to its job", [['dendrite', "receiving the message"], ['axon', "carrying the message"], ['myelin', "insulation"], ['neuroglia', "support"]], "Parts of nerve tissue."),
          B("The long fibre of a neuron that carries the message away is called the ___.", ['axon', 'dendrite', 'nerve root'], 'axon.'),
          S("Spell the term for a nerve cell", 'neuron', "neur/o = nerve.", 'neu…'),
          N('f2t:lx')
        ]
      },
      {
        id: 'lx3', title: "The anatomy of a word", icon: '🧩', items: [
          L("A medical word is a puzzle", `${fig('wordparts', [], "Prefix + root + suffix")}Every word is built from pieces:<br>• <b>Root</b>: the core meaning; e.g. ${e('neur')} = nerve<br>• <b>Prefix</b>: at the start of the word; e.g. ${e('hemi-')} = half<br>• <b>Suffix</b>: at the end of the word; e.g. ${e('-itis')} = inflammation<br>• <b>Combining vowel</b> (usually ${e('o')}): ${e('neur/o/logy')}`),
          L("The golden rule", `Start the meaning from the <b>suffix</b>, then the <b>prefix</b>, and finally the <b>root</b>:<br>${wb('neur/o', '-itis')} → “inflammation of a nerve”<br>${wb('hemi-', '-plegia')} → “paralysis of half the body”<br>${wb('encephal/o', '-pathy')} → “disease of the brain”${memo("If the suffix begins with a vowel, the combining vowel is dropped: neur/o + -itis becomes neuritis, not neuroitis.")}`),
          M(`${e('<b>neuritis</b>')} means…`, ["nerve inflammation", "nerve pain", "disease of the brain", "nerve tumour"], 'neur/o + -itis.'),
          M(`In ${e('<b>hemiplegia</b>')}, which is the prefix?`, ["hemi- = half", "-plegia = paralysis", "-ia = condition", "he- = blood"], 'hemi + pleg + ia.', null, F('wordparts', [])),
          T("In encephalitis the combining vowel o has been dropped.", true, "encephal + itis = inflammation of the brain."),
          W("Build a word meaning “disease of the brain”", ['encephal/o', '-pathy'], ['neur/o', '-itis', 'hemi-'], 'encephal/o + -pathy = encephalopathy.'),
          O("Read the meaning of hemiplegia with the golden rule; put the steps in order", ["-ia: condition", "-pleg: paralysis", "hemi-: half", "result: condition of paralysis of half the body"], "Suffix → root → prefix."),
          P("Match each piece to its type", [['hemi-', "prefix"], ['neur/o', "root"], ['-itis', "suffix"], ["the o in neurology", "combining vowel"]], "Three parts + a combining vowel."),
          S("Spell the term for inflammation of the brain", 'encephalitis', 'encephal/o + -itis.', 'encep…'),
          N('d2t:lx')
        ]
      },
      /* ================= سطح ۲: ریشه‌های اصلی ================= */
      {
        id: 'lx4', title: "Roots of Nerve and Spinal Cord", icon: '🧵', items: [
          L("Five common roots", `${tbl([["root", "Meaning", "Example"], [e('neur/o'), "nerve", e('neuralgia')], [e('myel/o'), "spinal cord (or bone marrow)", e('myelitis')], [e('mening/o'), "membranes of the brain", e('meningitis')], [e('gli/o'), "supporting cell", e('glioma')], [e('radicul/o'), "nerve root", e('radiculopathy')]])}`),
          L("A few example words", `${wb('neur/o', '-algia')} → ${e('<b>neuralgia</b>')}: pain along a nerve<br>${wb('myel/o', '-itis')} → ${e('<b>myelitis</b>')}: inflammation of the spinal cord<br>${wb('mening/o', '-itis')} → ${e('<b>meningitis</b>')}: inflammation of the membranes of the brain and spinal cord<br>${wb('radicul/o', '-pathy')} → ${e('<b>radiculopathy</b>')}: disease of a spinal nerve root${pearl("In Case Study 7-1 of the book, one of the terms asked for was “inflammation of the meninges”: meningitis.")}`),
          M(`In the nervous system, the root ${e('<b>myel/o</b>')} means…`, ["spinal cord", "muscle", "brain", "myelin"], "myel/o = spinal cord; in bone it means bone marrow."),
          M("Which word means “pain along a nerve”?", ['neuralgia', 'neuritis', 'neuropathy', 'neurolysis'], 'neur/o + -algia.'),
          T("meningitis means inflammation of the membranes of the brain and spinal cord.", true, "mening/o = meninges."),
          W("Build a word meaning “disease of a nerve root”", ['radicul/o', '-pathy'], ['myel/o', '-itis', 'neur/o'], 'radicul/o + -pathy.'),
          P("Match each root to its meaning", [['neur/o', "nerve"], ['myel/o', "spinal cord"], ['mening/o', "membranes of the brain"], ['radicul/o', "nerve root"]], "Roots of nerve and spinal cord."),
          B("The root ___ means the supporting cell (glue) of the nervous system.", ['gli/o', 'gangli/o', 'neur/o'], "glioma = tumour of glia."),
          S("Spell the term for inflammation of the spinal cord", 'myelitis', 'myel/o + -itis.', 'myel…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx5', title: "Roots of Brain and Head", icon: '🗺️', items: [
          L("The root map", `${fig('root-map', [], "The root map")}${tbl([["root", "Meaning"], [e('encephal/o'), "brain (the whole brain)"], [e('cerebr/o'), "cerebrum; the largest part of the brain"], [e('cerebell/o'), "cerebellum"], [e('crani/o'), "skull"], [e('cephal/o'), "head"]])}`),
          L("word building", `${wb('cerebr/o', 'spin/o', '-al')} → ${e('<b>cerebrospinal</b>')}: relating to the brain and spinal cord<br>${wb('intra-', 'crani/o', '-al')} → ${e('<b>intracranial</b>')}: within the skull<br>${wb('cephal/o', '-algia')} → ${e('<b>cephalalgia</b>')}: headache${memo("encephal/o means “inside the head” (en = in, cephal = head); that is, the brain.")}`),
          M(`The root ${e('<b>crani/o</b>')} means…`, ["skull", "cerebrum", "head", "cerebellum"], "cranium = skull.", null, F('root-map', [])),
          M("Which word means “headache”?", ['cephalalgia', 'encephalitis', 'craniotomy', 'cerebralgia'], 'cephal/o + -algia.'),
          T("cerebell/o means cerebellum and cerebr/o means cerebrum.", true, "The cerebellum is smaller and lies behind the cerebrum."),
          W("Build a word meaning “within the skull”", ['intra-', 'crani/o', '-al'], ['sub-', 'cerebr/o', '-itis'], 'intra- + crani/o + -al.'),
          P("Match each root to its meaning", [['encephal/o', "brain"], ['cerebr/o', "cerebrum"], ['crani/o', "skull"], ['cephal/o', "head"]], "Roots of the head."),
          B("The word ___ means “relating to the brain and spinal cord”.", ['cerebrospinal', 'craniospinal', 'encephalomyel'], 'cerebrospinal fluid = CSF.'),
          S("Spell the term meaning within the skull", 'intracranial', 'intra- + crani/o + -al.', 'intra…'),
          N('m2r:lx')
        ]
      },
      {
        id: 'lx6', title: "Mind, Sensation and Movement", icon: '💭', items: [
          L("Roots of mind and sensation", `${tbl([["root", "Meaning", "Example"], [e('psych/o'), "psyche, mind", e('psychiatry')], [e('esthesi/o'), "sensation", e('anesthesia')], [e('phas/o'), "speech", e('aphasia')], [e('tax/o'), "order, coordination", e('ataxia')], [e('somn/o'), "sleep", e('insomnia')]])}`),
          L("A few words", `${wb('psych/o', 'iatr/o', '-y')} → ${e('<b>psychiatry</b>')}: treatment of the mind (${e('iatr/o')} = treatment)<br>${wb('an-', 'esthesi/o', '-ia')} → ${e('<b>anesthesia</b>')}: loss of sensation<br>${wb('in-', 'somn/o', '-ia')} → ${e('<b>insomnia</b>')}: inability to sleep${memo("In Greek, psyche means both “soul” and “butterfly”; psych begins with a silent p.")}${pearl("In Jane’s record (Case Study 7-2), the psychiatrist had changed her medicine.")}`),
          M(`The root ${e('<b>esthesi/o</b>')} means…`, ["sensation", "sleep", "speech", "Movement"], "anesthesia = loss of sensation."),
          M(`${e('<b>insomnia</b>')} means…`, ["insomnia", "sleepiness", "sleep attack", "sleepwalking"], "in- (not) + somn/o (sleep) + -ia."),
          T("psychiatry is the branch of medicine that treats mental disorders.", true, 'psych/o + iatr/o + -y.'),
          W("Build a word meaning “loss of sensation”", ['an-', 'esthesi/o', '-ia'], ['dys-', 'phas/o', 'somn/o'], 'an- + esthesi/o + -ia.'),
          P("Match each root to its meaning", [['psych/o', "mind"], ['phas/o', "speech"], ['tax/o', "coordination"], ['somn/o', "sleep"]], "Mind, sensation and movement."),
          B("The root ___ means “treatment, physician”.", ['iatr/o', 'psych/o', 'esthesi/o'], "psychiatry, pediatrics."),
          S("Spell the term for the branch of medicine treating mental disorders", 'psychiatry', "The first p is silent.", 'psych…'),
          N('t2f:lx')
        ]
      },
      /* ================= سطح ۳: پیشوندها و پسوندها ================= */
      {
        id: 'lx7', title: "Neuro Prefixes", icon: '⏱️', items: [
          L("Common prefixes", `${tbl([["prefix", "Meaning", "Example"], [e('a-, an-'), "without", e('aphasia')], [e('dys-'), "difficult, abnormal", e('dysphasia')], [e('hemi-'), "half", e('hemiplegia')], [e('para-'), "beside; abnormal", e('paresthesia')], [e('quadri-'), "four", e('quadriplegia')]])}`),
          L("Where the prefixes sit", `${tbl([["prefix", "Meaning", "Example"], [e('epi-'), "on, over", e('epidural')], [e('sub-'), "below", e('subdural')], [e('intra-'), "within", e('intracranial')], [e('inter-'), "between", e('interneuron')], [e('poly-'), "many", e('polyneuritis')]])}${memo("epidural is above the dura and subdural is below it, like the upper and lower floors of a building.")}`),
          M(`${e('<b>aphasia</b>')} means…`, ["inability to speak or understand speech", "difficult speech", "rapid speech", "inability to read"], "a- (without) + -phasia (speech)."),
          M("Which prefix means “four”?", ['quadri-', 'hemi-', 'para-', 'poly-'], "quadriplegia = paralysis of all four limbs."),
          T("subdural means beneath the dura mater.", true, "sub- = beneath; dur/o = dura mater."),
          W("Build a word meaning “inflammation of many nerves”", ['poly-', 'neur/o', '-itis'], ['hemi-', 'myel/o', '-algia'], 'poly- + neur/o + -itis.'),
          P("Match each prefix to its meaning", [['dys-', "difficult"], ['hemi-', "half"], ['epi-', "on, over"], ['inter-', "between"]], "Basic prefixes."),
          B("A speech disorder (speech becoming difficult) is called ___.", ['dysphasia', 'aphasia', 'dyslexia'], 'dys- + -phasia.'),
          S("Spell the term for loss of language ability", 'aphasia', 'a- + -phasia.', 'apha…'),
          N('wb:lx')
        ]
      },
      {
        id: 'lx8', title: "Neuro Suffixes", icon: '✂️', items: [
          L("Symptom suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-plegia'), "paralysis", e('paraplegia')], [e('-paresis'), "weakness, partial paralysis", e('hemiparesis')], [e('-phasia'), "speech", e('dysphasia')], [e('-esthesia'), "sensation", e('paresthesia')], [e('-algia'), "pain", e('neuralgia')]])}`),
          L("Disease suffixes", `${tbl([["suffix", "Meaning", "Example"], [e('-lepsy'), "attack, seizure", e('epilepsy')], [e('-mnesia'), "memory", e('amnesia')], [e('-pathy'), "disease", e('neuropathy')], [e('-oma'), "tumour", e('meningioma')], [e('-cele'), "hernia, protrusion", e('meningocele')]])}${memo("narcolepsy means “sleep attack”: narc/o is stupor and -lepsy is seizure.")}`),
          M(`The suffix ${e('<b>-paresis</b>')} means…`, ["weakness or partial paralysis", "complete paralysis", "pain", "sensation"], "hemiparesis = weakness of half the body."),
          M(`${e('<b>amnesia</b>')} means…`, ["amnesia", "Numbing", "insomnia", "loss of language"], "a- + -mnesia (memory)."),
          T("The suffix -lepsy means attack or seizure.", true, "epilepsy, narcolepsy."),
          W("Build a word meaning “tumour of the brain membranes”", ['meningi/o', '-oma'], ['neur/o', '-cele', 'gli/o'], 'meningi/o + -oma = meningioma.'),
          P("Match each suffix to its meaning", [['-plegia', "paralysis"], ['-algia', "pain"], ['-pathy', "disease"], ['-cele', "rupture"]], "Basic suffixes."),
          B("Protrusion of the brain membranes through a gap in the bone is called a ___.", ['meningocele', 'meningioma', 'meningitis'], 'mening/o + -cele.'),
          S("Spell the term for a disorder of recurrent seizures", 'epilepsy', 'epi- + -lepsy.', 'epil…'),
          N('r2m:lx')
        ]
      },
      {
        id: 'lx9', title: "Look-alike Traps", icon: '🪤', items: [
          L("One letter, two meanings", `${fig('twins', [], "Tricky pairs")}${vs(['myel/o', "spinal cord"], ['my/o', "muscle"])}${vs(['-plegia', "complete paralysis"], ['-paresis', "weakness, partial paralysis"])}`),
          L("Other pairs", `${vs(['-phasia', "speech (talking)"], ['-phagia', "swallowing (eating)"])}${vs(['-lexia', "Reading"], ['-lalia', "talking, chatter"])}${memo("aphasia means unable to speak and aphagia means unable to swallow; phas = phrase and phag = eat.")}`),
          M(`${e('<b>myositis</b>')} means inflammation of…`, ["muscle", "spinal cord", "myelin", "bone marrow"], "my/o = muscle; myel/o = spinal cord.", null, F('twins', [])),
          M("What is weakness of one side of the body without complete paralysis called?", ['hemiparesis', 'hemiplegia', 'paraplegia', 'quadriplegia'], "-paresis = weakness."),
          T("dysphagia means difficulty swallowing, not speaking.", true, "-phagia = eating, swallowing."),
          W("Build a word meaning “paralysis of half the body”", ['hemi-', '-plegia'], ['-paresis', 'para-', 'my/o'], 'hemi- + -plegia.'),
          P("Match each pair correctly", [['-phasia', "speech"], ['-phagia', "swallowing"], ['-lexia', "Reading"], ['my/o', "muscle"]], "Look-alike traps."),
          B("In Exercise 7-9, the patient had right-sided weakness after a stroke; that is, ___.", ['right hemiparesis', 'right hemiplegia', 'paraplegia'], "weakness = -paresis."),
          S("Spell the term for weakness of one side of the body", 'hemiparesis', 'hemi- + -paresis.', 'hemip…'),
          N('m2r:lx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نورو — دنیای ۱: مغز و نخاع (دستگاه عصبی مرکزی)
 * سطح ۱: مغز و لوب‌ها • سطح ۲: پرده‌ها، بطن‌ها و CSF • سطح ۳: نخاع و سطوح آن */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'cn', sym: 'Cn', name: "Brain and Spinal Cord", short: "Brain and Spinal Cord", sub: "Cerebrum and lobes, cerebellum, brainstem, meninges, ventricles and CSF, and the spinal cord",
    color: '#E0708C', dark: '#B04A66', light: '#FDE6EC',
    levels: ["Brain and Lobes", "Membranes, Ventricles and CSF", "spinal cord"],
    gens: EA.genIds('cn'),
    lessons: [
      /* ================= سطح ۱: مغز و لوب‌ها ================= */
      {
        id: 'cn1', title: "Lobes of the Cerebrum", icon: '🧠', items: [
          L("Cerebrum and the two hemispheres", `${fig('brain-lobes', [], "Lobes of the Cerebrum")}${e('<b>cerebrum</b>')} is the largest part of the brain and is divided into left and right halves, each a ${e('<b>cerebral hemisphere</b>')}. Its surface is full of folds:<br>• ${e('<b>gyrus</b>')} (plural: ${e('gyri')}): a ridge<br>• ${e('<b>sulcus</b>')} (plural: ${e('sulci')}): a shallow groove<br>• ${e('<b>fissure</b>')}: a deep cleft, like the one between the two hemispheres`),
          L("four lobes", `${tbl([["lobe", "Main job"], [e('frontal'), "voluntary movement, planning, personality, speech"], [e('parietal'), "touch, pain and temperature"], [e('temporal'), "hearing, smell, understanding speech"], [e('occipital'), "vision and interpreting images"]])}${memo("Front to back: “frontal, parietal, occipital”; and the temporal lobe is beside the ear.")}${pearl(`The ${e('corpus callosum')} is a broad band of white fibres that joins the two hemispheres.`)}`),
          M("Which is the largest part of the brain?", ['cerebrum', 'cerebellum', 'brainstem', 'thalamus'], "Cohen’s Pretest: The largest part of the brain is the cerebrum.", null, F('brain-lobes', [])),
          M("In which lobe is vision processed?", ['occipital', 'frontal', 'temporal', 'parietal'], "The occipital lobe."),
          T("gyri are the ridges and sulci the grooves on the surface of the cerebrum.", true, "gyrus = raised fold."),
          O("Put the lobes in order from front to back", ['frontal', 'parietal', 'occipital'], "Frontal, parietal, occipital."),
          P("Match each lobe to its job", [['frontal', "voluntary movement"], ['parietal', "touch"], ['temporal', "hearing"], ['occipital', "vision"]], "The four lobes of the cerebrum."),
          B("The white band that joins the two hemispheres is called the ___.", ['corpus callosum', 'cerebellum', 'pons'], "Corpus callosum."),
          S("Spell the term for the largest part of the brain", 'cerebrum', 'cerebr/o + -um.', 'cereb…'),
          N('t2f:cn')
        ]
      },
      {
        id: 'cn2', title: "Each Part, One Job", icon: '🎯', items: [
          L("Centres of the cerebral cortex", `${fig('brain-functions', [], "Functions of the brain areas")}The ${e('<b>cerebral cortex</b>')} is the thin layer of grey matter covering the cerebrum. Some important centres:<br>• ${e('<b>motor area</b>')}: in front of the central sulcus; voluntary movement<br>• ${e('<b>sensory area</b>')}: behind the central sulcus; touch and pain<br>• ${e('<b>Broca area</b>')}: in the left frontal lobe; producing speech<br>• ${e('<b>Wernicke area</b>')}: in the temporal lobe; understanding speech`),
          L("Left and right", `Each hemisphere controls the <b>opposite</b> half of the body. Damage to the left hemisphere → paralysis of the right side and often ${e('aphasia')}.${memo("Broca = Build (building sentences); Wernicke = Word meaning (understanding words).")}${pearl("The book’s APPLY scenario: after a blow to the head, Mr Robert Jones has trouble reading and is easily distracted; so the occipital lobe (reading and vision) and the frontal lobe have probably been injured.")}`),
          M("Which is the centre for producing speech?", ['Broca area', 'Wernicke area', 'visual area', 'sensory area'], "Broca, in the left frontal lobe.", null, F('brain-functions', [])),
          M("Damage to the left hemisphere usually paralyses which side of the body?", ["right", "left", "both", "neither"], "Crossed control."),
          T("Wernicke area is involved in understanding speech.", true, "In the temporal lobe."),
          M("After a blow to the head, Mr Robert Jones can barely read; which lobe has probably been injured?", ['occipital', 'temporal', 'parietal', 'cerebellum'], "Reading depends on vision."),
          P("Match each centre to its job", [['Broca area', "producing speech"], ['Wernicke area', "understanding speech"], ['motor area', "voluntary movement"], ['sensory area', "touch and pain sensation"]], "Centres of the cerebral cortex."),
          B("The grey layer covering the cerebrum is called the ___.", ['cerebral cortex', 'white matter', 'dura mater'], "cortic/o = cortex."),
          S("Spell the term for the grey outer layer of the cerebrum", 'cerebral cortex', "cortex = outer layer.", 'cerebral c…'),
          N('f2t:cn')
        ]
      },
      {
        id: 'cn3', title: "Diencephalon, Brainstem and Cerebellum", icon: '🔎', items: [
          L("The middle parts", `${fig('brain-sagittal', [], "Midline section of the brain")}The ${e('<b>diencephalon</b>')} has two parts:<br>• ${e('<b>thalamus</b>')}: a relay station for sensory messages to the cerebral cortex<br>• ${e('<b>hypothalamus</b>')}: below the thalamus; body temperature, hunger, thirst, sleep and the pituitary gland`),
          L("Brainstem and cerebellum", `The ${e('<b>brainstem</b>')} has three parts: ${e('midbrain')}, ${e('pons')} and ${e('medulla oblongata')}. The medulla oblongata controls breathing, heart rate and blood pressure.<br>The ${e('<b>cerebellum</b>')} lies behind the brainstem and regulates balance and coordination of movement.${memo("The brainstem from top to bottom: midbrain, pons, medulla; like the stem of a flower reaching down to the spinal cord.")}${pearl("Cohen’s Pretest: the midbrain, pons and medulla oblongata together make up the brainstem.")}`),
          M("What are the midbrain, pons and medulla oblongata together called?", ['brainstem', 'cerebellum', 'diencephalon', 'spinal cord'], "The brainstem.", null, F('brain-sagittal', [])),
          M("Which part controls balance and coordination of movement?", ['cerebellum', 'thalamus', 'medulla', 'frontal lobe'], "The cerebellum."),
          T("The hypothalamus regulates body temperature, thirst and hunger.", true, "hypo- = below + thalamus."),
          O("Put the brainstem in order from top to bottom", ['midbrain', 'pons', 'medulla oblongata', 'spinal cord'], "Midbrain, pons, medulla, spinal cord."),
          P("Match each part to its job", [['thalamus', "sensory relay"], ['hypothalamus', "temperature and thirst"], ['medulla oblongata', "breathing and heart rate"], ['cerebellum', "balance"]], "Deep parts of the brain."),
          W("Build a word meaning “below the thalamus”", ['hypo-', 'thalam/o', '-us'], ['sub-', 'cerebell/o', '-ic'], 'hypo- + thalam/o + -us.'),
          S("Spell the term for the “little brain” that controls balance", 'cerebellum', 'cerebell/o + -um.', 'cerebe…'),
          N('d2t:cn')
        ]
      },
      /* ================= سطح ۲: پرده‌ها، بطن‌ها و CSF ================= */
      {
        id: 'cn4', title: "Meninges: Three Protective Membranes", icon: '🛡️', items: [
          L("Three layers", `${fig('meninges', [], "Meninges")}The ${e('<b>meninges</b>')} are three membranes around the brain and spinal cord (from outside in):<br>• ${e('<b>dura mater</b>')}: tough and firm (“tough mother”)<br>• ${e('<b>arachnoid</b>')}: the web-like middle layer<br>• ${e('<b>pia mater</b>')}: thin and attached to the brain (“tender mother”)`),
          L("Spaces", `${tbl([["Space", "Location", "Note"], [e('epidural space'), "above the dura", "epidural anaesthesia"], [e('subdural space'), "beneath the dura", "subdural haematoma"], [e('subarachnoid space'), "beneath the arachnoid", "filled with CSF"]])}${memo("Order from the outside: DAP; that is, Dura, Arachnoid, Pia.")}`),
          M("Which is the outermost layer of the meninges?", ['dura mater', 'arachnoid', 'pia mater', 'cerebral cortex'], "The dura mater.", null, F('meninges', [])),
          M("In which space does cerebrospinal fluid flow?", ['subarachnoid space', 'epidural space', 'subdural space', 'ventricle of the heart'], "Beneath the arachnoid."),
          T("The pia mater is attached to the surface of the brain.", true, "The pia mater."),
          O("Put the layers in order from outside in", ['skull', 'dura mater', 'arachnoid', 'pia mater', 'brain'], 'DAP.'),
          P("Match each layer to its description", [['dura mater', "tough outer layer"], ['arachnoid', "web-like middle layer"], ['pia mater', "delicate inner layer"], ['meninges', "all three membranes together"]], "Three membranes."),
          B("The word ___ means “relating to the meninges”.", ['meningeal', 'meningioma', 'meningocele'], 'mening/o + -eal.'),
          S("Spell the term for the tough outermost layer of the meninges", 'dura mater', "dur/o = hard.", 'dura…'),
          N('r2m:cn')
        ]
      },
      {
        id: 'cn5', title: "Ventricles and Cerebrospinal Fluid", icon: '💧', items: [
          L("Four ventricles", `${fig('ventricles', [], "Ventricles of the brain")}A ${e('<b>ventricle</b>')} is one of the four cavities inside the brain: two lateral ventricles, the third ventricle and the fourth ventricle. The ${e('<b>choroid plexus</b>')} in the ventricles makes ${e('<b>cerebrospinal fluid (CSF)</b>')}.`),
          L("The job of CSF", `CSF is a clear fluid that fills the ventricles, the subarachnoid space and the central canal of the spinal cord, floating the brain and protecting it from blows.${memo("ventricul/o = ventricle; intraventricular means within a ventricle.")}${pearl("If the flow of CSF is blocked, the ventricles enlarge: hydrocephalus. In Mr Jones’s scenario, too, the doctor was worried about a CSF leak.")}`),
          M("Where is CSF made?", ['choroid plexus', 'cerebellum', 'dura mater', 'spinal nerves'], "A network of capillaries inside the ventricles.", null, F('ventricles', [])),
          M("How many ventricles does the brain have?", ["four", "two", "three", "twelve"], "Two lateral, the third and the fourth."),
          T("CSF keeps the brain and spinal cord afloat and protects them from blows.", true, "A fluid shock absorber."),
          W("Build a word meaning “within a ventricle”", ['intra-', 'ventricul/o', '-ar'], ['sub-', 'crani/o', '-itis'], 'intraventricular.'),
          P("Match each term to its meaning", [['ventricle', "pumping chamber of the heart"], ['CSF', "cerebrospinal fluid"], ['choroid plexus', "makes CSF"], ['central canal', "channel in the centre of the cord"]], "Ventricles and fluid."),
          B("The abbreviation ___ means cerebrospinal fluid.", ['CSF', 'CNS', 'ICP'], 'cerebrospinal fluid.'),
          S("Spell the term for a lower heart chamber", 'ventricle', 'ventricul/o.', 'ventr…'),
          N('m2r:cn')
        ]
      },
      {
        id: 'cn6', title: "Skull and Protective Barriers", icon: '🪖', items: [
          L("Layered protection", `The brain is protected by several layers: the ${e('<b>cranium</b>')} (skull), the meninges, CSF and the ${e('<b>blood-brain barrier</b>')}, a layer of brain capillaries that keeps out many harmful substances and microbes.`),
          L("intracranial pressure", `${wb('intra-', 'crani/o', '-al')} → ${e('<b>intracranial pressure (ICP)</b>')}: pressure inside the skull. A tumour, bleeding or brain swelling raises ICP and threatens the patient’s life.${memo("The skull is a closed box; anything new inside it raises the pressure.")}${pearl("The book’s APPLY scenario: “Concerned ICP is elevated”; that is, the doctor is worried that the pressure inside the skull has risen.")}`),
          M("ICP means…", ["intracranial pressure", "cerebrospinal fluid", "neurological intensive care unit", "stroke"], 'intracranial pressure.'),
          M("What does the blood–brain barrier do?", ["It keeps many harmful substances out of the brain", "It makes CSF", "It pumps blood to the brain", "It attaches the brain to the skull"], 'blood-brain barrier.'),
          T("Bleeding inside the skull can raise ICP.", true, "A closed box."),
          O("Put the protective layers in order from outside in", ['scalp', 'cranium', 'meninges', 'CSF', 'brain'], "Skin, bone, membrane, fluid, brain."),
          P("Match each term to its meaning", [['cranium', "skull"], ['intracranial', "within the skull"], ['ICP', "intracranial pressure"], ['blood-brain barrier', "capillary wall that blocks harmful substances"]], "Protection of the brain."),
          B("The root ___ means skull.", ['crani/o', 'cephal/o', 'cerebr/o'], 'cranium.'),
          S("Spell the term for the skull", 'cranium', 'crani/o + -um.', 'cran…'),
          N('t2f:cn')
        ]
      },
      /* ================= سطح ۳: نخاع ================= */
      {
        id: 'cn7', title: "Cross-section of the spinal cord", icon: '🦋', items: [
          L("Grey and white", `${fig('spinal-cord', [], "Cross-section of the spinal cord")}The ${e('<b>spinal cord</b>')} is a column of nerve tissue. In cross-section:<br>• ${e('<b>gray matter</b>')}: in the middle, shaped like an H or a butterfly; full of cell bodies<br>• ${e('<b>white matter</b>')}: all around it; myelinated axons that carry messages up and down`),
          L("Horns and roots", `${tbl([["Section", "Job"], [e('dorsal horn'), "dorsal horn; sensation comes in"], [e('ventral horn'), "anterior horn; motor commands go out"], [e('dorsal root ganglion'), "dorsal root ganglion; cell bodies of sensory neurons"]])}${memo("In the brain the grey matter is on the outside (the cortex), but in the spinal cord it is in the middle; the other way round!")}`),
          M("Where is the grey matter in the spinal cord?", ["in the middle, H-shaped", "all around", "only in the roots", "on the meninges"], "Unlike the brain.", null, F('spinal-cord', [])),
          M("From which horn of the spinal cord do motor commands leave?", ['ventral horn', 'dorsal horn', 'dorsal root ganglion', 'central canal'], "The anterior horn."),
          T("White matter is made of myelinated axons.", true, "Myelin is white."),
          O("Put the path of pain sensation from the skin to the brain in order", ['receptor', 'sensory nerve', 'dorsal root', 'spinal cord', 'brain'], "Sensation enters from the back."),
          P("Match each part to its job", [['dorsal horn', "sensation in"], ['ventral horn', "movement out"], ['gray matter', "cell body"], ['white matter', "myelinated axon"]], "Cross-section of the spinal cord."),
          B("The root ___ means spinal cord.", ['myel/o', 'my/o', 'medull/o'], 'myelitis.'),
          S("Spell the term for the column of nerve tissue inside the spine", 'spinal cord', "spin/o = spine.", 'spinal…'),
          N('r2m:cn')
        ]
      },
      {
        id: 'cn8', title: "Levels of the Spinal Cord", icon: '📏', items: [
          L("31 pairs", `${fig('spinal-levels', [], "spinal nerves")}The spinal cord runs from the medulla oblongata down to the second lumbar vertebra (${e('L2')}). Thirty-one pairs of spinal nerves leave it:<br>8 cervical (${e('C1–C8')}), 12 thoracic (${e('T1–T12')}), 5 lumbar (${e('L1–L5')}), 5 sacral (${e('S1–S5')}) and 1 coccygeal.`),
          L("cauda equina", `Below the end of the spinal cord, the nerve roots run down like a horse’s tail: the ${e('<b>cauda equina</b>')}.${memo("The numbers are like a working day: 8 a.m. (C8), 12 noon (T12), 5 p.m. (L5), 5 p.m. (S5)!")}${pearl("In the Discharge Summary in Fremgen’s book, an L2 fracture with spinal cord injury caused complete paraplegia at the L2 level.")}`),
          M("How many pairs of spinal nerves are there?", ["31", "12", "33", "24"], "8 + 12 + 5 + 5 + 1.", null, F('spinal-levels', [])),
          M("What are the nerve roots below the end of the spinal cord called?", ['cauda equina', 'plexus', 'conus', 'ganglion'], "The cauda equina."),
          T("In adults the spinal cord continues to about the L2 vertebra.", true, "That is why an LP is done lower down."),
          O("Put the groups of spinal nerves in order from top to bottom", ['cervical', 'thoracic', 'lumbar', 'sacral', 'coccygeal'], "C, T, L, S, Co."),
          P("Match each group to its number", [['cervical', "8 pairs"], ['thoracic', "12 pairs"], ['lumbar', "5 pairs in the lower back"], ['coccygeal', "1 pair"]], "Counting the nerves."),
          B("C6 means the sixth ___ vertebra or nerve.", ["cervical", "of the chest", "lower back"], 'C = cervical.'),
          S("Spell the Latin term for the “horse’s tail” of nerve roots", 'cauda equina', "Latin: horse’s tail.", 'cauda…'),
          N('m2r:cn')
        ]
      },
      {
        id: 'cn9', title: "Adjectives of Brain and Spinal Cord", icon: '🏷️', items: [
          L("Relating to…", `${tbl([["Adjective", "Meaning"], [e('cerebral'), "relating to the cerebrum"], [e('cerebellar'), "relating to the cerebellum"], [e('thalamic'), "relating to the thalamus"], [e('meningeal'), "relating to the meninges"], [e('medullary'), "relating to the medulla oblongata"], [e('cortical'), "relating to the cortex"]])}`),
          L("Adjective suffixes", `${e('-al')}, ${e('-ar')}, ${e('-ic')}, ${e('-eal')} and ${e('-ary')} all mean “relating to”.<br>${wb('cerebell/o', '-ar')} → ${e('cerebellar')}<br>${wb('thalam/o', '-ic')} → ${e('thalamic')}${memo("To find the organ, remove the adjective suffix: cerebellar minus -ar gives cerebell, that is, the cerebellum.")}${vs(['cerebral', "cerebrum"], ['cerebellar', "cerebellum"])}`),
          M(`${e('<b>cerebellar</b>')} means relating to…`, ["cerebellum", "cerebrum", "medulla oblongata", "cortex"], 'cerebell/o + -ar.'),
          M("Which means “relating to the thalamus”?", ['thalamic', 'thalamal', 'thalamary', 'thalameal'], 'thalam/o + -ic.'),
          T("The suffixes -al and -ic both mean “relating to”.", true, "cerebral, thalamic."),
          W("Build a word meaning “relating to the cerebellum”", ['cerebell/o', '-ar'], ['cerebr/o', '-al', '-itis'], 'cerebellar.'),
          P("Match each adjective to its organ", [['cerebral', "cerebrum"], ['cerebellar', "cerebellum"], ['meningeal', "Meninges"], ['medullary', "medulla oblongata"]], "Adjectives."),
          B("A stroke is also called a ___ accident.", ['cerebrovascular', 'cerebellar', 'meningeal'], 'cerebr/o + vascul/o + -ar.'),
          S("Spell the term meaning relating to the brain and spinal cord", 'cerebrospinal', 'cerebr/o + spin/o + -al.', 'cerebro…'),
          N('t2f:cn')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نورو — دنیای ۲: اعصاب محیطی و خودکار
 * سطح ۱: نورون، سیناپس و میلین • سطح ۲: اعصاب جمجمه‌ای و نخاعی • سطح ۳: رفلکس و دستگاه خودکار */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'pn', sym: 'Pn', name: "Peripheral and Autonomic Nerves", short: "Peripheral nerves", sub: "Neuron and synapse, cranial and spinal nerves, dermatomes, the reflex arc, sympathetic and parasympathetic",
    color: '#E89A1E', dark: '#B06F06', light: '#FDF3DC',
    levels: ["Neuron, Synapse and Myelin", "Cranial and Spinal Nerves", "Reflexes and the Autonomic System"],
    gens: EA.genIds('pn'),
    lessons: [
      /* ================= سطح ۱: نورون، سیناپس و میلین ================= */
      {
        id: 'pn1', title: "Afferent and efferent", icon: '↔️', items: [
          L("From Stimulus to Response", `A ${e('<b>stimulus</b>')} is a change inside or outside the body, such as heat or touch. A ${e('<b>receptor</b>')} senses it and produces an ${e('<b>impulse</b>')} (nerve impulse). Finally the ${e('<b>effector</b>')} (a muscle or gland) responds.`),
          L("two directions", `${fig('afferent-efferent', [], "Afferent and efferent")}• ${e('<b>afferent neuron</b>')}: a sensory neuron; carries the message <b>towards</b> the CNS (${e('af-')} = towards)<br>• ${e('<b>efferent neuron</b>')}: a motor neuron; carries the message <b>away from</b> the CNS to muscles and glands (${e('ef-')} = away from)<br>• ${e('<b>interneuron</b>')}: a connecting neuron within the CNS${memo("Afferent = Arrive; Efferent = Exit.")}${pearl("The book’s APPLY scenario: “Explain to the class how afferent and efferent differ”; the answer is this direction of the message.")}`),
          M(`Where does an ${e('<b>afferent neuron</b>')} carry the message?`, ["towards the CNS", "from the CNS to a muscle", "from a muscle to a gland", "between two muscles"], "af- = towards.", null, F('afferent-efferent', [])),
          M("What is the neuron that carries the message to a muscle called?", ['efferent (motor) neuron', 'afferent (sensory) neuron', 'interneuron', 'receptor'], "ef- = away from the CNS."),
          T("An effector is a muscle or gland that responds to a nerve command.", true, "The responding organ."),
          O("Put the steps of a nerve response in order", ['stimulus', 'receptor', 'afferent neuron', 'CNS', 'efferent neuron', 'effector'], "From stimulus to response."),
          P("Match each term to its meaning", [['stimulus', "change that triggers a response"], ['receptor', "structure that senses the change"], ['impulse', "electrical message along a nerve"], ['effector', "muscle or gland that responds"]], "Basic terms."),
          B("A connecting neuron within the spinal cord and brain is called an ___.", ['interneuron', 'afferent neuron', 'ganglion'], "inter- = between."),
          S("Spell the term for a change that triggers a nerve response", 'stimulus', "Plural: stimuli.", 'stim…'),
          N('t2f:pn')
        ]
      },
      {
        id: 'pn2', title: "Synapse and Neurotransmitters", icon: '🔗', items: [
          L("A chemical bridge", `${fig('synapse', [], "Synapse")}A ${e('<b>synapse</b>')} is the junction between two neurons (or a neuron and a muscle). The axon terminal releases a ${e('<b>neurotransmitter</b>')}, which crosses the ${e('synaptic cleft')} and binds to receptors on the next cell.`),
          L("Important transmitters", `${tbl([["Transmitter", "Role"], [e('acetylcholine (ACh)'), "muscle movement and the parasympathetic system"], [e('dopamine (DA)'), "movement and the sense of reward; low in Parkinson’s"], [e('serotonin'), "mood, sleep and appetite; low in depression"]])}${memo("Remember Dopamine by its “D”: Drive and Doing; a shortage slows movement.")}${pearl("SSRIs treat depression by keeping serotonin high in the synapse.")}`),
          M("Which transmitter falls in Parkinson’s disease?", ['dopamine', 'serotonin', 'acetylcholine', 'insulin'], "Dopamine deficiency."),
          M("Where is the message passed from one neuron to the next?", ['synapse', 'dendrite', 'myelin', 'ganglion'], "The synapse.", null, F('synapse', [])),
          T("Serotonin affects mood, sleep and appetite.", true, "Its deficiency is linked to depression."),
          O("Put the steps of message transfer at the synapse in order", ['impulse reaches axon terminal', 'neurotransmitter released', 'crosses synaptic cleft', 'binds to receptors'], "From terminal to receptor."),
          P("Match each transmitter to its role", [['acetylcholine', "muscle movement"], ['dopamine', "movement and reward"], ['serotonin', "mood and sleep"], ['receptor', "where the transmitter binds"]], "Transmitters."),
          B("The abbreviation ___ means acetylcholine.", ['ACh', 'DA', 'AD'], 'acetylcholine.'),
          S("Spell the term for a chemical messenger released at a synapse", 'neurotransmitter', 'neur/o + transmitter.', 'neurotr…'),
          N('f2t:pn')
        ]
      },
      {
        id: 'pn3', title: "Myelin and the Nerve–Muscle Junction", icon: '🧶', items: [
          L("myelin sheath", `${fig('neuron', [], "Myelin sheath on the axon")}The ${e('<b>myelin sheath</b>')} is the white fatty sheath around the axon. In the PNS it is made by the ${e('<b>Schwann cell</b>')}. The message <b>jumps</b> from one gap between the sheaths to the next and arrives faster.`),
          L("Nerve and muscle", `${wb('neur/o', 'muscul/o', '-ar')} → ${e('<b>neuromuscular</b>')}: relating to nerve and muscle. The ${e('neuromuscular junction')} is where a motor neuron commands a muscle fibre using ${e('ACh')}.${memo("Myelin is like the plastic coating on an electric wire; if it is lost, the wires short-circuit (MS).")}${pearl("In myasthenia gravis this very nerve–muscle junction fails, and the muscles tire quickly.")}`),
          M("In the peripheral nervous system, which cell makes myelin?", ['Schwann cell', 'neuron', 'red blood cell', 'astrocyte'], "The Schwann cell."),
          M(`${e('<b>neuromuscular</b>')} means…`, ["relating to nerve and muscle", "inflammation of nerve and muscle", "nerve tumour", "muscle pain"], 'neur/o + muscul/o + -ar.'),
          T("Myelin increases the speed of the message.", true, "The message jumps from node to node."),
          W("Build a word meaning “relating to nerve and muscle”", ['neur/o', 'muscul/o', '-ar'], ['myel/o', '-itis', 'my/o'], 'neuromuscular.'),
          P("Match each term to its meaning", [['myelin sheath', "white fatty coating of the axon"], ['Schwann cell', "cell that makes myelin in the PNS"], ['neuromuscular junction', "nerve–muscle junction"], ['axon', "long fibre of the neuron"]], "Myelin and muscle."),
          B("The disease that destroys myelin in the CNS is ___.", ['multiple sclerosis', 'myasthenia gravis', 'poliomyelitis'], 'MS.'),
          S("Spell the name of the white fatty coating around axons", 'myelin', 'myel/o.', 'mye…'),
          N('d2t:pn')
        ]
      },
      /* ================= سطح ۲: اعصاب جمجمه‌ای و نخاعی ================= */
      {
        id: 'pn4', title: "The 12 pairs of cranial nerves", icon: '🔢', items: [
          L("List", `${fig('cranial-nerves', [], "cranial nerves")}The ${e('<b>cranial nerves</b>')} come directly out of the brain and are numbered with Roman numerals (${e('I')} to ${e('XII')}).`),
          L("A few important nerves", `${tbl([["nerve", "Job"], [e('II optic'), "vision"], [e('V trigeminal'), "facial sensation and chewing"], [e('VII facial'), "facial movements; damaged in Bell’s palsy"], [e('VIII vestibulocochlear'), "hearing and balance"], [e('X vagus'), "heart, lungs and digestive tract"]])}${memo("vagus means “wandering”, because it travels from the neck to the abdomen.")}${pearl("In the Practice Exercises of Fremgen’s book, you have to match all 12 nerves to their functions.")}`),
          M("Which is the nerve of vision?", ['optic (II)', 'olfactory (I)', 'facial (VII)', 'vagus (X)'], "optic = vision.", null, F('cranial-nerves', [])),
          M("Which nerve supplies most of the chest and abdominal organs?", ['vagus (X)', 'trigeminal (V)', 'hypoglossal (XII)', 'accessory (XI)'], "The wandering nerve."),
          T("The facial nerve controls the movements of the facial muscles.", true, "The seventh nerve."),
          O("Put these nerves in numerical order", ['olfactory', 'optic', 'trigeminal', 'facial', 'vagus', 'hypoglossal'], "I, II, V, VII, X, XII."),
          P("Match each nerve to its function", [['olfactory', "smell"], ['vestibulocochlear', "hearing and balance"], ['hypoglossal', "tongue movement"], ['trigeminal', "facial sensation"]], "Cranial nerves."),
          B("The fifth nerve, with three branches, is called the ___ nerve.", ['trigeminal', 'trochlear', 'abducens'], "tri = three."),
          S("Spell the name of the “wandering” tenth cranial nerve", 'vagus', 'vag/o.', 'vag…'),
          N('r2m:pn')
        ]
      },
      {
        id: 'pn5', title: "Roots, Ganglia and Plexuses", icon: '🕸️', items: [
          L("From the spinal cord to the limbs", `Each spinal nerve leaves the spinal cord by a ${e('<b>nerve root</b>')}. A ${e('<b>ganglion</b>')} (plural: ${e('ganglia')}) is a cluster of cell bodies outside the CNS. Nerves join one another in a ${e('<b>plexus</b>')} (network), such as the brachial (${e('brachial')}) and lumbosacral (${e('lumbosacral')}) plexuses.`),
          L("sciatic nerve", `The ${e('<b>sciatic nerve</b>')} is the largest nerve in the body and runs from the lower back to the back of the leg. Pain along its path is called ${e('sciatica')}.${wb('radicul/o', '-itis')} → ${e('radiculitis')}: inflammation of a nerve root${memo("A plexus is like a junction of cables; a ganglion is like a small station by the road.")}${pearl("The book’s APPLY scenario: Mr Randy Allen’s leg was injured in an accident; the surgeon must check the lumbar roots, the lumbosacral plexus and the sciatic nerve.")}`),
          M("Which is the largest nerve in the body?", ['sciatic nerve', 'vagus nerve', 'optic nerve', 'facial nerve'], "The sciatic nerve."),
          M(`${e('<b>plexus</b>')} means…`, ["nerve plexus", "ganglion", "nerve root", "axon terminal"], "Such as the brachial plexus."),
          T("A ganglion is a cluster of cell bodies outside the CNS.", true, "Plural: ganglia."),
          W("Build a word meaning “inflammation of a nerve root”", ['radicul/o', '-itis'], ['gangli/o', '-oma', 'neur/o'], 'radiculitis.'),
          P("Match each term to its meaning", [['nerve root', "where a spinal nerve leaves the cord"], ['ganglion', "cluster of cell bodies outside the CNS"], ['plexus', "network of joining nerves"], ['sciatica', "pain of the sciatic nerve"]], "Peripheral nerves."),
          B("The adjective “relating to a ganglion” is ___.", ['ganglionic', 'glial', 'radicular'], 'ganglion + -ic.'),
          S("Spell the term for a network of nerves", 'plexus', 'brachial plexus.', 'plex…'),
          N('m2r:pn')
        ]
      },
      {
        id: 'pn6', title: "Dermatomes", icon: '🗾', items: [
          L("Map of the Skin", `${fig('dermatomes', [], "Dermatomes")}A ${e('<b>dermatome</b>')} is an area of skin that receives sensation from only one spinal nerve. By testing sensation over the dermatomes, the doctor finds the level of a spinal cord or root injury.`),
          L("Shingles on a dermatome", `${fig('shingles', ["Shingles rash"], "Shingles (herpes zoster)")}The chickenpox virus sleeps for years in a nerve ganglion and may wake up: ${e('<b>herpes zoster</b>')} (shingles), with a painful rash on just one dermatome and one side of the body.${memo("derm/o is skin and -tome means section; dermatome = “skin section”.")}`),
          M(`What is ${e('<b>dermatome</b>')}?`, ["an area of skin supplied with sensation by one spinal nerve", "skin-cutting instrument", "skin disease", "a layer of the meninges"], "The sensory map of the skin.", null, F('dermatomes', [])),
          M("A painful rash along one dermatome is a sign of which disease?", ['herpes zoster', 'meningitis', 'migraine', 'Bell palsy'], "Shingles.", null, F('shingles', [])),
          T("Shingles usually affects only one side of the body.", true, "Along one dermatome."),
          O("Put the path of shingles reawakening in order", ['chickenpox in childhood', 'virus sleeps in ganglion', 'virus reactivates', 'painful rash on dermatome'], "Chickenpox → dormancy → shingles."),
          P("Match each term to its meaning", [['dermatome', "sensory area of skin"], ['herpes zoster', "shingles"], ['cervical', "relating to the neck"], ['sacral', "lowest back, over the sacrum"]], "Dermatome and shingles."),
          B("The common name of herpes zoster is ___.", ['shingles', 'chickenpox', 'cold sore'], "Shingles."),
          S("Spell the term for a skin area supplied by one spinal nerve", 'dermatome', 'derm/o + -tome.', 'derma…'),
          N('t2f:pn')
        ]
      },
      /* ================= سطح ۳: رفلکس و دستگاه خودکار ================= */
      {
        id: 'pn7', title: "Reflex arc", icon: '🦵', items: [
          L("Automatic Response", `${fig('reflex-arc', [], "Knee-jerk reflex arc")}A ${e('<b>reflex</b>')} is a fast, automatic response to a stimulus that needs only a few cells. The ${e('<b>reflex arc</b>')} has five parts: receptor, sensory neuron, spinal cord, motor neuron and muscle (effector).`),
          L("Reflexes in the examination", `${e('<b>deep tendon reflex (DTR)</b>')}: muscle contraction when the tendon is tapped, such as the knee jerk (${e('patellar')}).<br>${fig('babinski', ["Babinski sign"], 'Babinski sign')}${e('<b>Babinski sign</b>')}: when a nail is drawn along the sole, the big toe goes up and the toes fan out. It is normal in babies but in adults it is a sign of motor neuron damage.${pearl("Cohen’s Pretest: “A simple response that requires few cells is a reflex”.")}`),
          M("What is a simple response that needs only a few cells called?", ['reflex', 'stimulus', 'sensation', 'mutation'], "Cohen’s Pretest.", null, F('reflex-arc', [])),
          M("What does a Babinski sign mean in an adult?", ["motor neuron damage", "it is completely normal", "vitamin deficiency", "a broken foot"], "Normal in a baby, abnormal in an adult.", null, F('babinski', [])),
          T("DTR stands for deep tendon reflex.", true, "Deep tendon reflex."),
          O("Put the parts of the reflex arc in order", ['receptor', 'sensory neuron', 'spinal cord', 'motor neuron', 'effector'], "Five parts."),
          P("Match each term to its meaning", [['reflex', "Automatic Response"], ['DTR', "deep tendon reflex"], ['patellar reflex', "knee jerk"], ['Babinski sign', "big toe going up"]], "Reflexes."),
          B("In the book’s scenario, Dr Stanley performed several ___ tests and confirmed Parkinson’s.", ['reflex', 'sweat', 'skin'], 'reflex tests.'),
          S("Spell the term for a fast automatic response to a stimulus", 'reflex', "An automatic reaction.", 'refl…'),
          N('r2m:pn')
        ]
      },
      {
        id: 'pn8', title: "Fight or Flight; Rest and Digest", icon: '⚖️', items: [
          L("The autonomic system", `${fig('ans', [], "Sympathetic and parasympathetic")}The ${e('<b>autonomic nervous system (ANS)</b>')} controls the involuntary work of the heart, smooth muscle and glands and has two opposing parts:<br>• ${e('<b>sympathetic</b>')}: “fight or flight”; fast heartbeat, dilated pupils, sweating<br>• ${e('<b>parasympathetic</b>')}: “rest and digest”; slow heartbeat, active digestion`),
          L("A scenario", `${pearl("The book’s APPLY scenario: Mrs Gina Jones says that in every stressful situation her heart and breathing speed up and she sweats, and she thinks she has a mental disorder. The nurse explains that this is the normal response of the sympathetic system to stress.")}${memo("Sympathetic = Stress and Speed; Parasympathetic = Peace and Pause.")}${vs(['sympathetic', "Fight or flight"], ['parasympathetic', "rest and digest"])}`),
          M("Which system is active in the “fight or flight” response?", ['sympathetic', 'parasympathetic', 'somatic', 'central'], "The sympathetic system.", null, F('ans', [])),
          M("What effect does the parasympathetic system have on the heart rate?", ["it slows it", "it speeds it up", "it stops it", "it has no effect"], 'rest and digest.'),
          T("Mrs Gina Jones’s fast heartbeat and sweating under stress are a normal sympathetic response.", true, "Not necessarily a mental disorder."),
          O("Put the events of the stress response in order", ['stressful situation', 'sympathetic activation', 'fast heart rate and sweating', 'parasympathetic calms the body'], "Stress, response, calm."),
          P("Match each effect to its system", [["pupils dilated", "sympathetic"], ["digestion active", "parasympathetic"], ["involuntary functions", 'ANS'], ["voluntary movement", 'somatic']], "Two opposing forces."),
          B("The abbreviation ___ means autonomic nervous system.", ['ANS', 'CNS', 'SNS'], 'autonomic nervous system.'),
          S("Spell the name of the “fight or flight” division of the autonomic system", 'sympathetic', "sym- = together.", 'sympa…'),
          N('wb:pn')
        ]
      },
      {
        id: 'pn9', title: "Somatic or Autonomic?", icon: '🎛️', items: [
          L("Voluntary and involuntary", `${tbl([["Section", "Control", "Target"], [e('somatic nervous system (SNS)'), "voluntary", "skeletal muscles"], [e('autonomic nervous system (ANS)'), "involuntary", "heart, smooth muscle, glands"]])}${wb('somat/o', '-ic')} → ${e('somatic')}: relating to the body`),
          L("keeping the body’s balance", `Together with the endocrine system, the nervous system maintains ${e('<b>homeostasis</b>')}, a stable internal state (temperature, sugar, pressure). ${e('vagal')} means relating to the vagus nerve, the main arm of the parasympathetic system.${memo("somatic = soma (body) and autonomic = auto (self); one you choose to do, the other works by itself.")}${pearl("Cohen’s Pretest: “Involuntary responses are controlled by the autonomic nervous system”.")}`),
          M("Which division controls involuntary responses?", ['autonomic nervous system', 'somatic nervous system', 'voluntary nervous system', 'cerebral cortex'], "Cohen’s Pretest."),
          M(`${e('<b>homeostasis</b>')} means…`, ["a stable internal state of the body", "a response to stress", "a type of reflex", "producing a neurotransmitter"], "homeo = same + stasis = standing still."),
          T("Moving a finger at will is the work of the somatic system.", true, "Skeletal muscles."),
          W("Build a word meaning “relating to the body”", ['somat/o', '-ic'], ['aut/o', '-ism', 'psych/o'], 'somatic.'),
          P("Match each term to its meaning", [['somatic', "body-controlling, voluntary"], ['autonomic', "self-governing, involuntary"], ['homeostasis', "keeping the body’s balance"], ['vagal', "relating to the wandering nerve"]], "Somatic and autonomic."),
          B("The abbreviation ___ means somatic nervous system.", ['SNS', 'ANS', 'PNS'], 'somatic nervous system.'),
          S("Spell the term for keeping the internal environment stable", 'homeostasis', 'homeo + stasis.', 'homeo…'),
          N('m2r:pn')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نورو — دنیای ۳: نشانه‌ها و بیماری‌های عصبی
 * سطح ۱: نشانه‌های عصبی • سطح ۲: سکته، خونریزی، ضربه و تشنج • سطح ۳: بیماری‌های مادرزادی، تحلیل‌برنده، عفونی و تومورها */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ds', sym: 'Ds', name: "Neurological Signs and Diseases", short: "Neurological diseases", sub: "Paralysis and weakness, speech and sensory disorders, coma, stroke, haematoma, epilepsy, Parkinson’s, Alzheimer’s, MS, meningitis and tumours",
    color: '#D9534F', dark: '#A8312E', light: '#FDE6E4',
    levels: ["Neurological Signs", "Stroke, Injury and Seizure", "Diseases and Tumours"],
    gens: EA.genIds('ds'),
    lessons: [
      /* ================= سطح ۱: نشانه‌های عصبی ================= */
      {
        id: 'ds1', title: "Paralysis and Weakness", icon: '♿', items: [
          L("Types of paralysis", `${fig('paralysis-types', [], "Types of paralysis")}${e('<b>paralysis</b>')} means loss of muscle function. The prefix tells where the paralysis is:<br>• ${e('<b>monoplegia</b>')}: one limb<br>• ${e('<b>hemiplegia</b>')}: one half of the body (usually after a stroke)<br>• ${e('<b>paraplegia</b>')}: both legs and the lower body (thoracic or lumbar spinal cord injury)<br>• ${e('<b>quadriplegia</b>')}: all four limbs (cervical spinal cord injury); also called ${e('tetraplegia')}`),
          L("Floppy or stiff?", `${e('<b>flaccid</b>')}: a floppy muscle without tone<br>${e('<b>spasticity</b>')}: a stiff muscle with exaggerated reflexes${pearl("Case Study in Cohen’s book: 12-year-old William fractured C6 diving into a shallow pool; his legs were flaccid and there was a risk of quadriplegia.")}${memo("quadri = four, as in a quad bike; para = beside; the two legs side by side.")}`),
          M("What paralysis does a cervical spinal cord injury (such as C6) mostly cause?", ['quadriplegia', 'paraplegia', 'monoplegia', 'hemiplegia'], "The neck is above the nerves of the arms and legs.", null, F('paralysis-types', [])),
          M("What is paralysis of both legs and the lower body called?", ['paraplegia', 'quadriplegia', 'hemiparesis', 'monoplegia'], "Spinal cord injury below the neck."),
          T("flaccid means a floppy muscle without tone.", true, "Unlike spastic."),
          P("Match each term to its meaning", [['monoplegia', "paralysis of one limb"], ['hemiplegia', "paralysis of one side"], ['paraplegia', "paralysis of both legs"], ['quadriplegia', "paralysis of all four limbs"]], "Types of paralysis."),
          W("Build a word meaning “paralysis of one limb”", ['mono-', '-plegia'], ['quadri-', '-paresis', 'hemi-'], 'monoplegia.'),
          B("Another name for quadriplegia is ___.", ['tetraplegia', 'paraplegia', 'hemiplegia'], "tetra- = four."),
          S("Spell the term for loss of muscle function", 'paralysis', 'para- + -lysis.', 'paral…'),
          N('t2f:ds')
        ]
      },
      {
        id: 'ds2', title: "Speech, Sensation and Coordination", icon: '🗣️', items: [
          L("Speech and movement", `${tbl([["Term", "Meaning"], [e('aphasia'), "inability to speak or understand speech"], [e('dysarthria'), "difficult articulation from weak speech muscles"], [e('ataxia'), "lack of movement coordination (tax/o = order)"], [e('apraxia'), "inability to perform purposeful movement"], [e('agnosia'), "inability to recognise objects (gnos/o = knowing)"]])}`),
          L("Sensation and balance", `${tbl([["Term", "Meaning"], [e('paresthesia'), "tingling and pins and needles"], [e('hyperesthesia'), "excessive sensitivity"], [e('vertigo'), "spinning dizziness"], [e('diplopia'), "double vision"], [e('syncope'), "fainting, brief loss of consciousness"]])}${pearl("Chart Note in Gylys’s book: three days ago the patient had vertigo, and with the stroke developed aphasia and diplopia.")}${vs(['aphasia', "a language problem in the brain"], ['dysarthria', "a problem of the articulation muscles"])}`),
          M(`${e('<b>ataxia</b>')} means…`, ["lack of coordination", "complete paralysis", "tingling", "double vision"], "a- + tax/o (order)."),
          M("Which word means “double vision”?", ['diplopia', 'diplegia', 'dysphasia', 'diploidy'], 'dipl/o + -opia.'),
          T("paresthesia means a sensation of tingling and pins and needles.", true, "para- (abnormal) + -esthesia."),
          W("Build a word meaning “abnormal sensation (tingling)”", ['para-', '-esthesia'], ['an-', '-algesia', 'hyper-'], 'paresthesia.'),
          P("Match each term to its meaning", [['vertigo', "dizziness"], ['syncope', "fainting"], ['agnosia', "inability to recognise"], ['dysarthria', "difficult articulation"]], "Signs."),
          B("Spinning dizziness is called ___.", ['vertigo', 'syncope', 'ataxia'], 'vertigo.'),
          S("Spell the term for seeing two images of one object", 'diplopia', 'dipl/o + -opia.', 'dipl…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds3', title: "Consciousness, Memory and Pain", icon: '💤', items: [
          L("level of consciousness", `${tbl([["Term", "Meaning"], [e('lethargy'), "unusual drowsiness and sluggishness"], [e('unconscious'), "unconscious; does not respond"], [e('coma'), "deep unconsciousness without waking"], [e('amnesia'), "amnesia"], [e('dementia'), "progressive decline of memory and thinking"]])}`),
          L("Pain and headache", `${wb('cephal/o', '-algia')} → ${e('<b>cephalalgia</b>')}: headache (${e('HA')})<br>${e('<b>migraine</b>')}: severe, usually one-sided headache with nausea; sometimes with an ${e('<b>aura</b>')} (a warning sign such as flashes of light)<br>${wb('an-', '-algesia')} → ${e('analgesia')}: absence of pain${pearl("The book’s APPLY scenario: 9-year-old Josie fell from a 14-foot slide and was “asleep” for a few moments; a brief loss of consciousness means a doctor must see her (possible concussion).")}`),
          M("What is deep unconsciousness from which the patient does not wake called?", ['coma', 'syncope', 'lethargy', 'insomnia'], "Coma."),
          M(`${e('<b>dementia</b>')} means…`, ["progressive decline of memory and thinking", "headache", "paralysis of one side", "seizure"], "de- + ment/o (mind)."),
          T("Josie was unconscious for a few moments after the fall, so she must see a doctor.", true, 'loss of consciousness.'),
          O("Put the levels of consciousness in order from highest to lowest", ['alert', 'lethargy', 'unconscious', 'coma'], "Alert to coma."),
          P("Match each term to its meaning", [['cephalalgia', "headache"], ['aura', "warning sign"], ['amnesia', "loss of memory"], ['lethargy', "sluggishness"]], "Consciousness and pain."),
          B("Jane in Case Study 7-2 was very ___; that is, drowsy and sluggish.", ['lethargic', 'manic', 'aphasic'], 'lethargy.'),
          S("Spell the term for a severe one-sided headache with nausea", 'migraine', "A one-sided headache.", 'migr…'),
          N('d2t:ds')
        ]
      },
      /* ================= سطح ۲: سکته، ضربه و تشنج ================= */
      {
        id: 'ds4', title: "Stroke (CVA)", icon: '🚑', items: [
          L("Two types of stroke", `${fig('stroke-types', [], "Types of stroke")}A ${e('<b>cerebrovascular accident (CVA)</b>')} is brain damage caused by an interrupted blood supply:<br>• ${e('<b>ischemic stroke</b>')}: a clot blocks the vessel; ${e('thrombosis')} (a clot formed in place) or ${e('embolism')} (a travelling clot)<br>• ${e('<b>hemorrhagic stroke</b>')}: the vessel ruptures and bleeds<br>Tissue that gets no blood develops ${e('ischemia')} and then an ${e('infarct')} (tissue death).`),
          L("Warning and treatment", `${e('<b>transient ischemic attack (TIA)</b>')}: stroke symptoms that disappear in less than 24 hours; a serious warning.${fig('ct-hemorrhage', ["Brain haemorrhage on CT"], "CT: haemorrhagic stroke")}${pearl("Case Study 7-1 in Cohen’s book: Allen, 62, reached the ED within 15 minutes with right hemiplegia and aphasia; the CT showed no bleeding, so it was an ischemic stroke and he received fibrinolytic therapy.")}`),
          M("What most often causes an ischaemic stroke?", ["thrombosis (a clot)", 'hemorrhage', 'hematoma', 'hemangioma'], 'Case Study 7-1: Ischemic stroke is generally caused by thrombosis.', null, F('stroke-types', [])),
          M("TIA means…", ["transient ischaemic attack; symptoms that resolve within 24 hours", "haemorrhagic stroke", "traumatic brain injury", "intracranial pressure"], 'transient ischemic attack.'),
          T("Before giving a clot-dissolving drug, bleeding must be ruled out with a CT scan.", true, "A clot-dissolving drug makes bleeding worse.", F('ct-hemorrhage', [])),
          O("Put Allen’s treatment steps in order", ['sudden right-sided weakness', 'arrival at ED', 'noncontrast CT scan', 'fibrinolytic therapy', 'NICU observation'], 'Case Study 7-1.'),
          P("Match each term to its meaning", [['ischemia', "lack of blood supply"], ['infarct', "dead tissue"], ['embolism', "blockage by a travelling clot"], ['CVA', "stroke"]], "Stroke."),
          B("A ___ drug dissolves the clot.", ['fibrinolytic', 'anticonvulsant', 'analgesic'], 'fibrin + -lytic.'),
          S("Spell the term for a local lack of blood supply", 'ischemia', 'isch/o + -emia.', 'isch…'),
          N('r2m:ds')
        ]
      },
      {
        id: 'ds5', title: "Aneurysm and Haematoma", icon: '🩸', items: [
          L("Aneurysm", `${fig('aneurysm', [], "Aneurysm in the circle of Willis")}An ${e('<b>aneurysm</b>')} is a local bulge in the wall of an artery; if it ruptures, it causes a subarachnoid haemorrhage and a haemorrhagic stroke.${fig('aneurysm-photo', ["Aneurysm on a brain artery"], "Aneurysm")}`),
          L("Haematomas", `${fig('hematomas', [], "Brain haematomas")}A ${e('<b>hematoma</b>')} is a collection of blood:<br>• ${e('<b>epidural</b>')}: between the skull and the dura; usually from a torn artery<br>• ${e('<b>subdural</b>')}: beneath the dura; usually from a torn vein<br>• ${e('<b>intracerebral</b>')}: within the brain tissue${pearl("Case Study 7-1: “collection of blood below the dura mater” means a subdural hematoma.")}`),
          M("What is a bulge in the wall of an artery called?", ['aneurysm', 'embolism', 'hematoma', 'infarct'], "A local dilation.", null, F('aneurysm-photo', [])),
          M("What is a collection of blood beneath the dura called?", ['subdural hematoma', 'epidural hematoma', 'intracerebral hematoma', 'meningioma'], "sub- = beneath.", null, F('hematomas', [])),
          T("An epidural hematoma lies between the skull and the dura.", true, "epi- = upon."),
          W("Build a word meaning “mass of blood”", ['hemat/o', '-oma'], ['hem/o', '-emia', 'thromb/o'], 'hematoma.'),
          P("Match each haematoma to its location", [['epidural', "above the dura"], ['subdural', "beneath the dura"], ['intracerebral', "within the brain tissue"], ['subarachnoid hemorrhage', "bleeding beneath the arachnoid"]], "Where the blood is."),
          B("The correct spelling is ___.", ['aneurysm', 'aneurism', 'anurysm'], "The book’s Exercise: a localized dilation of an artery."),
          S("Spell the term for a collection of blood in tissue", 'hematoma', 'hemat/o + -oma.', 'hema…'),
          N('m2r:ds')
        ]
      },
      {
        id: 'ds6', title: "Head Injury and Seizure", icon: '⚡', items: [
          L("Traumatic injuries", `${tbl([["Term", "Meaning"], [e('concussion'), "temporary brain dysfunction after a blow; often with brief unconsciousness"], [e('contusion'), "bruising of brain tissue"], [e('traumatic brain injury (TBI)'), "brain injury from an external force"], [e('spinal cord injury (SCI)'), "spinal cord injury; paralysis below the level of injury"]])}`),
          L("Epilepsy and seizures", `${fig('seizure-types', [], "Seizures and epilepsy")}A ${e('<b>seizure</b>')} is a sudden storm of electrical activity in the brain. ${e('<b>epilepsy</b>')} means recurrent seizures.<br>• ${e('tonic-clonic')}: the body stiffens, then jerks; grand mal<br>• ${e('absence')}: staring for a few seconds; petit mal${pearl("The book’s APPLY scenario: during Mrs April Johnson’s seizure, the time of onset, duration, body movements and consciousness must be watched closely and recorded, because they identify the type of seizure.")}`),
          M("What is a disease with recurrent seizures called?", ['epilepsy', 'cystic fibrosis', 'spina bifida', 'thyrotoxicosis'], "Cohen’s Pretest.", null, F('seizure-types', [])),
          M("What is a temporary brain dysfunction after a blow to the head called?", ['concussion', 'contusion', 'aneurysm', 'neuralgia'], "Concussion."),
          T("In an absence seizure the patient stares for a few seconds.", true, "Petit mal."),
          O("Put the stages of a tonic-clonic seizure in order", ['aura', 'loss of consciousness', 'tonic stiffening', 'clonic jerking', 'drowsiness'], "From warning sign to drowsiness."),
          P("Match each abbreviation to its meaning", [['TBI', "traumatic brain injury"], ['SCI', "spinal cord injury"], ['MTBI', "mild brain injury"], ['CTE', "chronic traumatic encephalopathy"]], "Injuries."),
          B("The correct spelling is ___.", ['seizure', 'siezure', 'seisure'], "The book’s Exercise: ei."),
          S("Spell the term for a disorder of recurrent seizures", 'epilepsy', 'epi- + -lepsy.', 'epil…'),
          N('t2f:ds')
        ]
      },
      /* ================= سطح ۳: بیماری‌ها و تومورها ================= */
      {
        id: 'ds7', title: "Congenital Diseases", icon: '👶', items: [
          L("Failure of the neural tube to close", `${fig('spina-bifida', [], "Spina bifida")}${e('<b>spina bifida</b>')}: the spine does not close completely around the spinal cord.<br>• ${e('occulta')}: hidden, with no protrusion<br>• ${e('<b>meningocele</b>')}: protrusion of the membranes<br>• ${e('<b>myelomeningocele</b>')}: protrusion of the spinal cord and membranes; the most severe<br>${e('<b>anencephaly</b>')}: absence of the brain at birth`),
          L("Hydrocephalus and cerebral palsy", `${fig('hydrocephalus', [], "Hydrocephalus")}${wb('hydr/o', 'cephal/o', '-us')} → ${e('<b>hydrocephalus</b>')}: CSF builds up in the ventricles and the baby’s head enlarges.${fig('hydrocephalus-brain', ["greatly enlarged ventricles"], "Brain section in hydrocephalus")}${e('<b>cerebral palsy (CP)</b>')}: a disorder of movement and posture from brain damage before, during or shortly after birth.`),
          M("What is the protrusion of the spinal cord and membranes through a gap in the spine called?", ['myelomeningocele', 'meningocele', 'spina bifida occulta', 'meningioma'], 'myel/o + mening/o + -cele.', null, F('spina-bifida', [])),
          M(`${e('<b>hydrocephalus</b>')} means…`, ["CSF building up in the ventricles", "a brain tumour", "brain inflammation", "brain haemorrhage"], "hydr/o (water) + cephal/o (head).", null, F('hydrocephalus-brain', [])),
          T("Spina bifida occulta has no protrusion.", true, "occulta = hidden."),
          W("Build a word meaning “hernia of the brain membranes”", ['mening/o', '-cele'], ['myel/o', '-oma', 'hydr/o'], 'meningocele.'),
          P("Match each disease to its meaning", [['anencephaly', "absence of the brain"], ['hydrocephalus', "water on the brain"], ['cerebral palsy', "movement disorder from brain damage around birth"], ['spina bifida', "split spine"]], "Congenital."),
          B("The abbreviation ___ means cerebral palsy.", ['CP', 'CVA', 'MS'], 'cerebral palsy.'),
          S("Spell the term for CSF building up in the brain’s ventricles", 'hydrocephalus', 'hydr/o + cephal/o + -us.', 'hydro…'),
          N('r2m:ds')
        ]
      },
      {
        id: 'ds8', title: "Degenerative diseases", icon: '🧓', items: [
          L("Five important diseases", `${fig('degenerative', [], "Degenerative diseases")}${tbl([["disease", "Main sign"], [e('Alzheimer disease (AD)'), "progressive memory loss; the most common cause of dementia"], [e('Parkinson disease (PD)'), "tremor, rigidity, slowness; dopamine deficiency"], [e('multiple sclerosis (MS)'), "myelin destruction; weakness, numbness, blurred vision"], [e('ALS'), "motor neuron degeneration; weakness and atrophy"], [e('Huntington chorea'), "hereditary; dance-like movements and dementia"]])}`),
          L("Scenarios", `${fig('alzheimer-brain', ["Normal brain and brain in Alzheimer’s"], "Brain atrophy in Alzheimer’s")}${pearl("The book’s APPLY scenario: Jose Gutierrez has trouble buttoning his clothes and remembering things, and he limps; his blood pressure is normal. An EEG, blood tests and reflex tests confirmed the diagnosis of Parkinson disease.")}${pearl("Mrs Amy Shine, 49, tested positive for Huntington chorea; it is a hereditary, progressive disease, and treatment only controls the symptoms.")}`),
          M("Dopamine deficiency causes which disease?", ['Parkinson disease', 'Alzheimer disease', 'multiple sclerosis', 'ALS'], "Tremor and slow movement.", null, F('degenerative', [])),
          M("What is destroyed in MS?", ["myelin sheath", "heart muscle", "skull", "cerebrospinal fluid"], 'demyelination.', null, F('ms-myelin', [])),
          T("Alzheimer’s is the most common cause of dementia.", true, 'AD.', F('alzheimer-brain', [])),
          O("Put Jose Gutierrez’s findings in the order they were discovered", ['trouble buttoning shirts', 'memory problems and limp', 'EEG and reflex tests', 'diagnosis: Parkinson disease'], "The book’s scenario."),
          P("Match each disease to its sign", [['Alzheimer disease', "amnesia"], ['Parkinson disease', "tremor and slowness"], ['Huntington chorea', "dance-like movements"], ['ALS', "motor neuron degeneration"]], "Degenerative diseases."),
          B("Muscle weakness with early fatigue at the nerve–muscle junction is ___.", ['myasthenia gravis', 'multiple sclerosis', 'Bell palsy'], 'my/o + -asthenia.'),
          S("Spell the term for progressive loss of memory and thinking", 'dementia', 'de- + ment/o + -ia.', 'demen…'),
          N('f2t:ds')
        ]
      },
      {
        id: 'ds9', title: "Infection, Nerves and Tumours", icon: '🦠', items: [
          L("Infections and nerve diseases", `${tbl([["disease", "Meaning"], [e('meningitis'), "inflammation of the meninges; fever, headache, stiff neck"], [e('encephalitis'), "inflammation of the brain, often viral"], [e('poliomyelitis'), "inflammation of the grey matter of the spinal cord (poli/o = grey)"], [e('Bell palsy'), "sudden paralysis of the facial nerve"], [e('Guillain-Barré syndrome'), "immune attack on the peripheral nerves; ascending weakness"]])}${pearl("The book’s APPLY scenario: the doctor tells Jaime Shew’s family that he has viral meningitis and his symptoms will improve in a few days; viral meningitis is usually treated with rest, fluids and painkillers.")}`),
          L("Brain tumours", `${fig('mri-tumor', ["A cerebellar tumour that has pushed the brainstem forward"], "MRI: brain tumour")}• ${e('<b>glioma</b>')}: a tumour of the supporting cells<br>• ${e('<b>astrocytoma</b>')}: a tumour of the star-shaped astrocytes<br>• ${e('<b>glioblastoma</b>')}: the most malignant glioma<br>• ${e('<b>meningioma</b>')}: a usually benign tumour of the meninges${memo("In the closed skull, even a benign tumour is dangerous because of pressure (ICP); that is why the size of a tumour matters.")}`),
          M("Which is inflammation of the grey matter of the spinal cord?", ['poliomyelitis', 'meningitis', 'encephalitis', 'neuritis'], 'poli/o + myel/o + -itis.'),
          M("What is a tumour of the star-shaped brain cells called?", ['astrocytoma', 'meningioma', 'neuroma', 'myeloma'], "astro = star.", null, F('mri-tumor', [])),
          T("A meningioma is usually benign and slow-growing.", true, "A tumour of the meninges."),
          W("Build a word meaning “tumour of glia”", ['gli/o', '-oma'], ['gangli/o', '-itis', 'mening/o'], 'glioma.'),
          P("Match each disease to its meaning", [['meningitis', "inflammation of the meninges"], ['encephalitis', "brain inflammation"], ['Bell palsy', "facial nerve palsy"], ['sciatica', "pain of the sciatic nerve"]], "Infection and nerves."),
          B("Shooting facial pain along the fifth nerve is ___.", ['trigeminal neuralgia', 'Bell palsy', 'migraine'], 'TN.'),
          S("Spell the term for inflammation of the meninges", 'meningitis', 'mening/o + -itis.', 'mening…'),
          N('wb:ds')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نورو — دنیای ۴: سلامت روان
 * سطح ۱: پایه‌ها؛ روان‌پریشی و آشفتگی ذهن • سطح ۲: اضطراب و خلق • سطح ۳: اسکیزوفرنی، رشد، خوردن و درمان
 * لحن درس‌ها محترمانه و بدون برچسب‌زنی است: «بیمار مبتلا به…» نه «بیمار روانی». */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'ps', sym: 'Ps', name: "Mental Health", short: "Mental Health", sub: "Anxiety, phobias, obsessions, depression and bipolar disorder, schizophrenia, autism and ADHD, eating disorders, psychotherapy and medicines",
    color: '#17A398', dark: '#0F7A71', light: '#E1F6F3',
    levels: ["Basics and Psychosis", "Anxiety and Mood", "Other Disorders and Treatment"],
    gens: EA.genIds('ps'),
    lessons: [
      /* ================= سطح ۱: پایه‌ها و روان‌پریشی ================= */
      {
        id: 'ps1', title: "Families of mental disorders", icon: '💭', items: [
          L("The big picture", `${fig('mind-map', [], "Families of mental disorders")}${e('<b>mental health</b>')} means emotional and psychological well-being. Mental disorders are grouped into several families: anxiety, mood, psychotic, developmental, and eating and somatic symptom disorders. The official reference for the classification is the ${e('<b>DSM</b>')}.`),
          L("Two older terms", `${vs(['neurosis', "anxiety without losing touch with reality"], ['psychosis', "losing touch with reality"])}${wb('psych/o', '-osis')} → ${e('psychosis')}<br>${wb('psych/o', '-genic')} → ${e('psychogenic')}: of mental origin${memo("psychosis = the mind “detaches” from reality; neurosis = the mind is worried but stays in reality.")}`),
          M("What is the official reference for classifying mental disorders?", ['DSM', 'GCS', 'EEG', 'MMPI'], 'Diagnostic and Statistical Manual of Mental Disorders.', null, F('mind-map', [])),
          M(`${e('<b>psychosis</b>')} means…`, ["a state of losing touch with reality", "mild anxiety", "insomnia", "an eating disorder"], 'psych/o + -osis.'),
          T("psychogenic means of mental origin.", true, 'psych/o + -genic.'),
          W("Build a word meaning “of mental origin”", ['psych/o', '-genic'], ['neur/o', '-osis', 'schiz/o'], 'psychogenic.'),
          P("Match each disorder to its family", [['panic disorder', "anxiety"], ['bipolar disorder', "mood"], ['schizophrenia', "psychotic"], ['autism', "developmental"]], "Families."),
          B("The adjective ___ means “relating to psychiatry or mental disorder”.", ['psychiatric', 'psychogenic', 'psychotic'], 'psych/o + iatr/o + -ic.'),
          S("Spell the term for losing touch with reality", 'psychosis', 'psych/o + -osis.', 'psych…'),
          N('t2f:ps')
        ]
      },
      {
        id: 'ps2', title: "Delusion, Hallucination and Paranoia", icon: '🌀', items: [
          L("Three signs of psychosis", `${tbl([["Term", "Meaning", "Example"], [e('delusion'), "a false, fixed belief", "the belief that others are out to harm them"], [e('hallucination'), "seeing or hearing something that is not there", "hearing voices"], [e('paranoia'), "suspicion and a sense of threat", 'paranoid schizophrenia']])}`),
          L("Watch out", `${vs(['delusion', "an error of belief (thought)"], ['hallucination', "an error of the senses (seeing, hearing)"])}${memo("Delusion = Do believe (belief); Hallucination = Hear or see (senses).")}${pearl("Case Study 7-2: Jane, 21, had “chronic paranoid schizophrenia”; paranoid means with a sense of threat and persecution.")}`),
          M("What is hearing a voice that is not there called?", ['hallucination', 'delusion', 'paranoia', 'mania'], "An error of the senses."),
          M(`${e('<b>delusion</b>')} means…`, ["a false, fixed belief", "seeing something that is not there", "amnesia", "anxiety"], "An error of thought."),
          T("paranoia means a groundless feeling of being threatened and persecuted by others.", true, 'Case Study 7-2.'),
          O("Put the path from sign to diagnosis in order", ['patient hears voices', 'psychiatric evaluation', 'DSM criteria checked', 'diagnosis made'], "The assessment process."),
          P("Match each term to its meaning", [['delusion', "false belief"], ['hallucination', "sensory illusion"], ['paranoia', "suspicion"], ['psychosis', "losing touch with reality"]], "Psychosis."),
          B("The adjective “with a sense of threat” is ___.", ['paranoid', 'manic', 'phobic'], 'Case Study 7-2.'),
          S("Spell the term for perceiving something that is not there", 'hallucination', "Two l’s, one c.", 'hallu…'),
          N('f2t:ps')
        ]
      },
      {
        id: 'ps3', title: "Confusion and Disorientation", icon: '🧭', items: [
          L("Delirium or dementia?", `${vs(['delirium', "sudden, temporary, from illness or medicine"], ['dementia', "gradual, progressive, such as Alzheimer’s"])}${e('<b>delirium</b>')} is a sudden disturbance with confusion and restlessness. ${e('<b>disorientation</b>')} means the patient does not know the time, place or themselves.`),
          L("At the bedside", `${fig('elderly-woman', ["An older woman"], "an older adult")}${pearl("Case Study in Fremgen’s book: Mrs Anna Moore, 83, came to the ER with aphasia, left hemiparesis, syncope and delirium; the CT showed an infarct of the right hemisphere: a stroke (CVA) in the middle cerebral artery.")}${memo("Delirium is like a sudden storm and dementia like a slow sunset.")}`),
          M("What is a sudden disturbance of the mind, often from illness or medicine, called?", ['delirium', 'dementia', 'depression', 'dyslexia'], "Sudden onset."),
          M("A patient who does not know where they are or what day it is has…", ['disorientation', 'insomnia', 'aphasia', 'mania'], "Disorientation."),
          T("Dementia is usually gradual and progressive.", true, "Unlike delirium."),
          P("Match each word to its feature", [['delirium', "sudden"], ['dementia', "progressive"], ['disorientation', "losing track of time and place"], ['amnesia', "loss of memory"]], "Mental confusion."),
          M("In Anna Moore’s record, which sign means “fainting”?", ['syncope', 'delirium', 'aphasia', 'hemiparesis'], 'syncope.', null, F('elderly-woman', [])),
          B("Anna Moore had left-sided weakness; that is, left ___.", ['hemiparesis', 'hemiplegia', 'paraplegia'], "weakness = -paresis."),
          S("Spell the term for a sudden, temporary state of confusion", 'delirium', "Acute confusion.", 'deli…'),
          N('d2t:ps')
        ]
      },
      /* ================= سطح ۲: اضطراب و خلق ================= */
      {
        id: 'ps4', title: "Anxiety and Panic", icon: '😰', items: [
          L("The anxious body", `${fig('fight-flight', [], "fight-or-flight response")}${e('<b>anxiety</b>')} is a feeling of worry and fear with a fast heartbeat, fast breathing and sweating; the same as the sympathetic response. When it is groundless, intense and persistent, it is a disorder.`),
          L("Two disorders", `• ${e('<b>generalized anxiety disorder (GAD)</b>')}: constant, excessive worry about everyday things for months<br>• ${e('<b>panic disorder</b>')}: sudden attacks of intense fear with palpitations, shortness of breath and chest pain${pearl("Mrs Gina Jones (the book’s scenario) has symptoms only in stressful situations; this is a normal response and not necessarily a disorder.")}${memo("GAD = worry like never-ending rain; panic = like a sudden thunderbolt.")}`),
          M("What is constant, excessive worry about everyday things called?", ['generalized anxiety disorder', 'panic disorder', 'bipolar disorder', 'phobia'], 'GAD.', null, F('fight-flight', [])),
          M("A sudden attack of intense fear with palpitations is a sign of what?", ['panic disorder', 'depression', 'schizophrenia', 'autism'], "A panic attack."),
          T("The fast heartbeat and sweating of anxiety are the work of the sympathetic system.", true, "Fight or flight."),
          O("Put a panic attack in order", ['sudden intense fear', 'pounding heart and short breath', 'peak within minutes', 'gradual calming'], "Peaks within minutes."),
          P("Match each term to its meaning", [['anxiety', "worry and fear"], ['GAD', "generalised anxiety"], ['panic attack', "sudden surge of intense fear"], ['anxiolytic', "anti-anxiety drug"]], "Anxiety."),
          B("A drug against anxiety is called an ___.", ['anxiolytic', 'antipsychotic', 'anticonvulsant'], 'anxio + -lytic.'),
          S("Spell the term for a feeling of worry and fear", 'anxiety', "The x sounds like “gz”.", 'anx…'),
          N('r2m:ps')
        ]
      },
      {
        id: 'ps5', title: "Phobia, Obsession and PTSD", icon: '🕷️', items: [
          L("Phobia", `${fig('phobias', [], "Phobias")}A ${e('<b>phobia</b>')} is an intense, persistent, irrational fear of something specific.<br>${e('agoraphobia')}: fear of crowded, open places • ${e('claustrophobia')}: fear of enclosed spaces • ${e('photophobia')}: sensitivity to light`),
          L("Obsession and trauma", `• ${e('<b>obsessive-compulsive disorder (OCD)</b>')}: unwanted recurring thoughts (${e('obsessions')}) and repeated acts (${e('compulsions')}), such as washing the hands again and again<br>• ${e('<b>posttraumatic stress disorder (PTSD)</b>')}: anxiety, nightmares and flashbacks after a terrifying event${memo("An Obsession is in the mind and a Compulsion is in the hands.")}${pearl("Cohen’s Pretest: “An extreme, persistent fear is a phobia”.")}`),
          M("What is an intense, persistent fear of something specific called?", ['phobia', 'mania', 'delusion', 'paranoia'], "Cohen’s Pretest.", null, F('phobias', [])),
          M("Which is the fear of enclosed spaces?", ['claustrophobia', 'agoraphobia', 'acrophobia', 'photophobia'], "claustr = closed."),
          T("In OCD, repeated hand-washing is a compulsion.", true, "A repeated behaviour."),
          W("Build a word meaning “fear of open and crowded places”", ['agora', '-phobia'], ['claustro', '-mania', 'photo'], 'agoraphobia.'),
          P("Match each term to its meaning", [['agoraphobia', "fear of crowded places"], ['claustrophobia', "fear of enclosed spaces"], ['OCD', "obsessive-compulsive"], ['PTSD', "post-traumatic stress"]], "Anxiety disorders."),
          B("The abbreviation ___ means post-traumatic stress disorder.", ['PTSD', 'OCD', 'GAD'], 'posttraumatic stress disorder.'),
          S("Spell the term for an intense, irrational fear", 'phobia', "ph sounds like f.", 'pho…'),
          N('m2r:ps')
        ]
      },
      {
        id: 'ps6', title: "Depression and Bipolar Disorder", icon: '🌗', items: [
          L("Mood", `${fig('mood-wave', [], "Mood swings")}• ${e('<b>depression</b>')}: lasting sadness, loss of interest, low energy and hopelessness<br>• ${e('<b>mania</b>')}: excessive excitement and elation, rapid speech and little sleep<br>• ${e('<b>bipolar disorder (BPD)</b>')}: alternating episodes of mania and depression`),
          L("Other types", `${e('<b>seasonal affective disorder (SAD)</b>')}: depression in the dark winter months. The suffix ${e('-mania')} appears in other words too, such as ${e('megalomania')} (delusions of grandeur).${memo("bipolar means “two poles”, like a magnet with two ends: mania and depression.")}${pearl("After his spinal cord injury, William (Case Study in Cohen’s book) developed depression and anxiety and received psychological counselling.")}`),
          M("What is a disorder with alternating episodes of mania and depression called?", ['bipolar disorder', 'GAD', 'schizophrenia', 'OCD'], "Two poles.", null, F('mood-wave', [])),
          M(`${e('<b>mania</b>')} means…`, ["excessive excitement and elation", "lasting sadness", "intense fear", "amnesia"], "Mania."),
          T("SAD is a type of depression in the dark months of the year.", true, 'seasonal affective disorder.'),
          O("Put the mood cycle of bipolar disorder in order", ['normal mood', 'mania (high)', 'return to baseline', 'depression (low)'], "Swinging between two poles."),
          P("Match each term to its meaning", [['depression', "lasting sadness"], ['mania', "excessive elation"], ['BPD', "bipolar disorder"], ['SAD', "seasonal affective disorder"]], "Mood disorders."),
          B("An ___ drug, such as an SSRI, treats depression.", ['antidepressant', 'anticonvulsant', 'antipsychotic'], 'anti- + depressant.'),
          S("Spell the term for lasting sadness and loss of interest", 'depression', 'de- + press.', 'depr…'),
          N('t2f:ps')
        ]
      },
      /* ================= سطح ۳: اختلال‌های دیگر و درمان ================= */
      {
        id: 'ps7', title: "Schizophrenia and Its Medicines", icon: '🧩', items: [
          L("schizophrenia", `${wb('schiz/o', '-phrenia')} → ${e('<b>schizophrenia</b>')}: a psychotic disorder with delusions, hallucinations, disorganised thinking and withdrawal (${e('schiz/o')} = split, ${e('phren/o')} = mind). The main treatment is an ${e('<b>antipsychotic</b>')}, also called a ${e('<b>neuroleptic</b>')}.`),
          L("A dangerous reaction", `${e('<b>neuroleptic malignant syndrome (NMS)</b>')}: a rare, dangerous reaction to antipsychotic drugs with high fever, muscle rigidity and altered consciousness.${pearl("Case Study 7-2 in Cohen’s book: Jane came in with a fever of 104 °F, lethargy and muscular rigidity; her neuroleptic drug had been changed the week before. The drugs were stopped and she was treated with IV fluids, bromocriptine and dantrolene.")}${memo("Schizophrenia does not mean “split personality”; it means the mind splits from reality.")}`),
          M("Which drug group is the main treatment for schizophrenia?", ['antipsychotic', 'antidepressant', 'analgesic', 'anticonvulsant'], 'neuroleptic.'),
          M("Which drugs is NMS linked to?", ["antipsychotic drugs", "steroids", "clot-dissolving drugs", "painkillers"], 'Case Study 7-2.'),
          T("A neuroleptic is the same as an antipsychotic.", true, "Haldol (haloperidol) is an example."),
          O("Put Jane’s treatment in order", ['neuroleptic changed', 'fever and rigidity', 'drugs stopped and IV fluids', 'restart low-dose neuroleptic'], 'Case Study 7-2.'),
          P("Match each word in Jane’s record to its meaning", [['lethargic', "drowsy and sluggish"], ['psychiatrist', "physician for mental disorders"], ['diaphoresis', "profuse sweating"], ['antispasmodic', "against spasm"]], 'Case Study 7-2.'),
          B("The abbreviation ___ means neuroleptic malignant syndrome.", ['NMS', 'MS', 'CNS'], 'neuroleptic malignant syndrome.'),
          S("Spell the term for a psychotic disorder with a mind split from reality", 'schizophrenia', 'schiz/o + -phrenia.', 'schizo…'),
          N('wb:ps')
        ]
      },
      {
        id: 'ps8', title: "Development, Eating and Somatic Symptoms", icon: '🍽️', items: [
          L("Developmental disorders", `• ${e('<b>autism spectrum disorder (ASD)</b>')}: difficulty with social communication and speech, with repetitive behaviours (${e('aut/o')} = self)<br>• ${e('<b>ADHD</b>')}: inattention, impulsivity and hyperactivity starting in childhood`),
          L("Eating and the body", `${tbl([["Disorder", "Meaning"], [e('anorexia nervosa'), "intense fear of fatness and starving oneself"], [e('bulimia nervosa'), "binge eating followed by purging such as vomiting"], [e('somatic symptom disorder'), "physical symptoms with excessive worry"], [e('hypochondriasis'), "constant worry about having a serious illness"]])}${memo("an- + orexia means “no appetite”; but in anorexia nervosa the appetite is there and the patient does not eat for fear of gaining weight.")}`),
          M("Which developmental disorder involves difficulty with social communication and repetitive behaviour?", ['autism spectrum disorder', 'ADHD', 'bulimia', 'OCD'], 'ASD.'),
          M("Binge eating followed by deliberate vomiting is a sign of which?", ['bulimia nervosa', 'anorexia nervosa', 'hypochondriasis', 'SAD'], "Purging."),
          T("ADHD usually starts in childhood.", true, 'attention-deficit/hyperactivity disorder.'),
          P("Match each disorder to its meaning", [['ASD', "autism spectrum"], ['ADHD', "attention deficit-hyperactivity"], ['anorexia nervosa', "eating disorder of self-starvation"], ['hypochondriasis', "constant fear of having a serious illness"]], "Other disorders."),
          M("The root aut/o in autism means…", ["self", "ear", "car", "mind"], 'aut/o = self.'),
          B("The abbreviation ___ means somatic symptom disorder.", ['SSD', 'SAD', 'ASD'], 'somatic symptom disorder.'),
          S("Spell the term for self-starvation from an intense fear of fatness", 'anorexia nervosa', 'an- + orexia.', 'anor…'),
          N('f2t:ps')
        ]
      },
      {
        id: 'ps9', title: "Treatment in Mental Health", icon: '🛋️', items: [
          L("Talking and treatment", `• ${e('<b>psychotherapy</b>')}: treatment by talking with a trained therapist<br>• ${e('<b>cognitive behavioral therapy (CBT)</b>')}: changing unhelpful thoughts and behaviours<br>• ${e('<b>electroconvulsive therapy (ECT)</b>')}: a controlled electric current under anaesthesia for severe depression`),
          L("Drugs", `${fig('psych-drugs', [], "Psychiatric drugs")}${tbl([["drug", "For"], [e('antidepressant (SSRI)'), "depression"], [e('anxiolytic'), "anxiety"], [e('antipsychotic'), "psychotic"], [e('mood stabilizer'), "bipolar disorder; such as lithium"], [e('stimulant'), 'ADHD']])}${pearl("The abbreviation SSRI means selective serotonin reuptake inhibitor; it keeps more serotonin in the synapse.")}`),
          M("What is treatment by changing unhelpful thoughts and behaviours called?", ['CBT', 'ECT', 'TENS', 'EEG'], 'cognitive behavioral therapy.'),
          M("Which drug stabilises mood in bipolar disorder?", ['mood stabilizer (lithium)', 'stimulant', 'analgesic', 'anticonvulsant only'], 'lithium.', null, F('psych-drugs', [])),
          T("ECT is used for severe depression and is done under anaesthesia.", true, 'electroconvulsive therapy.'),
          W("Build a word meaning “treatment of the mind (by talking)”", ['psych/o', '-therapy'], ['neur/o', '-lysis', '-osis'], 'psychotherapy.'),
          P("Match each drug to its use", [['antidepressant', "depression"], ['anxiolytic', "anxiety"], ['antipsychotic', "psychotic"], ['stimulant', 'ADHD']], "Psychiatric drugs."),
          B("The abbreviation ___ means electroconvulsive therapy.", ['ECT', 'CBT', 'EEG'], 'electroconvulsive therapy.'),
          S("Spell the term for treatment by talking with a therapist", 'psychotherapy', 'psych/o + -therapy.', 'psycho…'),
          N('m2r:ps')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/*<<PV-DATA>>*/
/* نورو — دنیای ۵: تشخیص و درمان
 * سطح ۱: معاینه و آزمون‌ها • سطح ۲: تصویربرداری و جراحی • سطح ۳: دارو، توان‌بخشی و اختصارهای پرونده */
(function (root) {
  const EA = root.EA;
  const { L, M, T, B, O, P, S, W, N, F, tbl, fig, wb, memo, pearl, vs } = EA.K;
  const e = s => `<bdi dir="ltr">${s}</bdi>`;

  EA.worlds.push({
    id: 'tx', sym: 'Tx', name: "Diagnosis and Treatment", short: "Diagnosis and Treatment", sub: "Neurological examination and Glasgow scale, EEG and EMG, lumbar puncture, CT, MRI and PET, craniotomy and laminectomy, shunts, drugs and rehabilitation",
    color: '#3D6FD6', dark: '#274FA8', light: '#E2ECFB',
    levels: ["Examination and Tests", "Imaging and surgery", "Drugs, Rehabilitation and Records"],
    gens: EA.genIds('tx'),
    lessons: [
      /* ================= سطح ۱: معاینه و آزمون‌ها ================= */
      {
        id: 'tx1', title: "Neurological Examination and Glasgow Scale", icon: '🩺', items: [
          L("neurological examination", `The ${e('<b>neurological examination</b>')} assesses: mental status and ${e('level of consciousness (LOC)')}, cranial nerves, muscle strength, sensation, reflexes (${e('DTR')} and Babinski) and coordination and walking (${e('gait')}).`),
          L("Glasgow scale", `${fig('gcs', [], "Glasgow Coma Scale")}The ${e('<b>Glasgow Coma Scale (GCS)</b>')} scores the level of consciousness from 3 to 15: eye opening (${e('E')} 1 to 4), verbal response (${e('V')} 1 to 5) and motor response (${e('M')} 1 to 6). A score of 8 or less means severe injury.${pearl("Case Study 7-1: in the ED a GCS was taken for Allen to see whether he was suitable for clot-dissolving treatment. Try the “Glasgow Coma Scale” tool in the Tools section!")}`),
          M("What is the highest GCS score?", ["15", "10", "20", "6"], "4 + 5 + 6.", null, F('gcs', [])),
          M("A GCS score of 8 or less means…", ["severe brain injury (coma)", "mild injury", "full consciousness", "a measurement error"], "The airway is at risk."),
          T("The GCS has three parts: eyes, verbal and motor.", true, "E, V, M."),
          O("Put the parts of the GCS in their usual order", ['eye opening', 'verbal response', 'motor response'], "E, V, M."),
          P("Match each part to its highest score", [['eye opening', "4"], ['verbal response', "5"], ['motor response', "6"], ['total GCS', "15"]], "Scores."),
          B("The abbreviation ___ means level of consciousness.", ['LOC', 'GCS', 'ICP'], 'level of consciousness.'),
          S("Spell the phrase for how alert and awake a patient is", 'level of consciousness', "conscious = awake and aware.", 'level…'),
          N('t2f:tx')
        ]
      },
      {
        id: 'tx2', title: "EEG and Nerve Tests", icon: '📈', items: [
          L('EEG', `${fig('eeg', [], "EEG recording")}${wb('electr/o', 'encephal/o', '-graphy')} → ${e('<b>electroencephalography (EEG)</b>')}: recording the electrical activity of the brain with electrodes on the head. Its result is an ${e('electroencephalogram')}. In a seizure, irregular, large waves are seen.`),
          L("Other tests", `${fig('eeg-photo', ["EEG electrodes on the head"], 'EEG')}• ${e('<b>electromyography (EMG)</b>')}: recording the electrical activity of muscle<br>• ${e('<b>nerve conduction study (NCS)</b>')}: the speed at which a nerve conducts its message<br>• ${e('<b>evoked potentials</b>')}: the brain’s response to sound, light or touch, such as ${e('VEP')}${memo("-graphy is the recording method and -gram is the tracing itself.")}`),
          M("Which is a tool for examining the electrical activity of the brain?", ['electroencephalograph', 'electrocardiograph', 'CT scanner', 'sonograph'], "Cohen’s Pretest.", null, F('eeg', [])),
          M("What does EMG record?", ["electrical activity of muscle", "brain activity", "blood flow in the brain", "CSF pressure"], "my/o = muscle."),
          T("An electroencephalogram is the recorded tracing itself.", true, "-gram = writing, record.", F('eeg-photo', [])),
          W("Build a word meaning “method of recording the brain’s electricity”", ['electr/o', 'encephal/o', '-graphy'], ['-gram', 'my/o', 'cerebr/o'], 'electroencephalography.'),
          P("Match each test to its job", [['EEG', "brain electricity"], ['EMG', "muscle electricity"], ['NCS', "nerve conduction speed"], ['VEP', "the brain’s response to light"]], "Electrical tests."),
          B("The doctor ordered an ___ of the brain for Mr Gutierrez.", ['electroencephalogram', 'electrocardiogram', 'myelogram'], "The book’s scenario."),
          S("Spell the term for the recorded tracing of the brain’s electrical activity", 'electroencephalogram', 'electr/o + encephal/o + -gram.', 'electro…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx3', title: "lumbar puncture", icon: '💉', items: [
          L("Drawing Spinal Fluid", `${fig('lumbar-puncture', [], "lumbar puncture")}${e('<b>lumbar puncture (LP)</b>')} or ${e('spinal tap')}: a needle is passed between the lumbar vertebrae (usually ${e('L3–L4')}) into the subarachnoid space, and CSF is taken for testing (for example in meningitis). The needle goes in below the end of the spinal cord (${e('L1–L2')}) so the cord is not injured.`),
          L("Patient positions", `${fig('lp-position', ["Side-lying position for an LP"], "Patient positions")}The patient lies on their side and pulls the knees up to the chest to open the spaces between the vertebrae.${pearl("In the Consultation Report in Fremgen’s book, the phrase “puncture with a needle into the low back to withdraw fluid” means lumbar puncture; its result was normal.")}`),
          M("Between which vertebrae is the LP needle usually inserted?", ["L3 and L4", "C1 and C2", "T6 and T7", "S1 and S2"], "Below the end of the spinal cord.", null, F('lumbar-puncture', [])),
          M("What is taken in an LP?", ["cerebrospinal fluid", "arterial blood", "bone marrow", "nerve tissue"], 'CSF.'),
          T("The LP needle goes in below the end of the spinal cord so the cord is not injured.", true, "The cord reaches about L2."),
          O("Put the steps of an LP in order", ['patient lies on side, knees to chest', 'skin cleaned and numbed', 'needle between L3 and L4', 'CSF collected', 'sample sent to lab'], "The puncture procedure."),
          P("Match each term to its meaning", [['lumbar puncture', "drawing CSF from the lower back"], ['spinal tap', "another name for LP"], ['subarachnoid space', "the CSF space"], ['L3', "third lumbar vertebra"]], 'LP.'),
          B("The abbreviation ___ means lumbar puncture.", ['LP', 'PT', 'PL'], 'lumbar puncture.'),
          S("Spell the procedure for drawing CSF with a needle in the lower back", 'lumbar puncture', "lumb/o = lower back.", 'lumbar…'),
          N('d2t:tx')
        ]
      },
      /* ================= سطح ۲: تصویربرداری و جراحی ================= */
      {
        id: 'tx4', title: "Brain imaging", icon: '🖥️', items: [
          L("Three main methods", `${fig('brain-imaging', [], "CT, MRI and PET")}• ${e('<b>CT</b>')}: fast; shows bleeding well<br>• ${e('<b>MRI</b>')}: detail of the soft tissue of the brain and spinal cord; ${e('MRA')} for the vessels<br>• ${e('<b>PET</b>')}: with a radioactive tracer, shows the activity and metabolism of the brain`),
          L("A few real images", `${fig('mri-coronal', ["Tumour in the upper right of the brain"], "MRI: brain tumour")}${fig('pet-cocaine', ["Reduced brain activity caused by cocaine"], "PET: the effect of cocaine on the brain")}${e('cerebral angiography')}: an image of the brain vessels with contrast; ${e('myelography')}: an image of the spinal cord with contrast; ${e('carotid ultrasound')}: ultrasound of the neck arteries.`),
          M("Which method shows the activity and metabolism of the brain?", ['PET', 'CT', 'X-ray', 'EMG'], 'positron emission tomography.', null, F('pet-cocaine', [])),
          M("What is MRA used to see?", ["blood vessels", "brain waves", "nerve speed", "skull bone"], 'magnetic resonance angiography.'),
          T("CT is good for quickly finding bleeding in the brain.", true, 'Case Study 7-1.', F('ct-tumor', [])),
          W("Build a word meaning “method of imaging the spinal cord”", ['myel/o', '-graphy'], ['my/o', '-gram', 'encephal/o'], 'myelography.'),
          P("Match each abbreviation to its meaning", [['CT', 'computed tomography'], ['MRI', 'magnetic resonance imaging'], ['MRA', 'magnetic resonance angiography'], ['PET', 'positron emission tomography']], "Imaging."),
          B("In the book’s Consultation Report, “injection with radioactive isotopes” is for ___.", ['PET scan', 'EEG', 'lumbar puncture'], "A radioactive substance."),
          S("Spell the term for imaging the spinal cord with contrast", 'myelography', 'myel/o + -graphy.', 'myelo…'),
          N('r2m:tx')
        ]
      },
      {
        id: 'tx5', title: "Skull Surgery", icon: '🔪', items: [
          L("Opening the skull", `${fig('craniotomy', [], "Skull operations")}${wb('crani/o', '-tomy')} → ${e('<b>craniotomy</b>')}: cutting into the skull to reach the brain<br>${wb('crani/o', '-ectomy')} → ${e('<b>craniectomy</b>')}: removing part of the skull`),
          L("Without open surgery", `${e('<b>stereotactic radiosurgery</b>')}: precise beams that destroy a tumour without open surgery.<br>${wb('cry/o', 'surgery')} → ${e('<b>cryosurgery</b>')}: surgery with extreme cold.${pearl("Consultation Report in Fremgen’s book: a 38-year-old woman with an astrocytoma in the cortex of the right hemisphere; a “right skull incision” (craniotomy) was performed and the tumour was destroyed with “extreme cold” (cryosurgery).")}${fig('ct-tumor', ["Malignant tumour in the left hemisphere"], "Image of a brain tumour")}`),
          M(`${e('<b>craniotomy</b>')} means…`, ["cutting into the skull", "removing skull bone", "repairing the skull", "X-ray of the skull"], 'crani/o + -tomy.', null, F('craniotomy', [])),
          M("What is destroying a tumour with extreme cold called?", ['cryosurgery', 'radiosurgery', 'craniectomy', 'neurolysis'], "cry/o = cold."),
          T("Stereotactic radiosurgery is done without opening the skull.", true, "Precise beams."),
          O("Put the treatment of the 38-year-old woman (Consultation Report) in order", ['speech difficulty and hemiparesis', 'EEG and LP normal', 'PET shows mass', 'craniotomy', 'cryosurgery of the tumor'], "The book’s report."),
          P("Match each phrase in the record to its medical term", [['specialist in nervous system diseases', 'neurologist'], ['loss of motion on one side', 'hemiplegia'], ['astrocyte tumor', 'astrocytoma'], ['right skull incision', 'craniotomy']], 'Chart Note Transcription.'),
          B("Removing part of the skull is a ___.", ['craniectomy', 'craniotomy', 'cranioplasty'], "-ectomy = removal."),
          S("Spell the term for cutting into the skull to reach the brain", 'craniotomy', 'crani/o + -tomy.', 'cranio…'),
          N('m2r:tx')
        ]
      },
      {
        id: 'tx6', title: "Spine and Nerve Surgery", icon: '🧵', items: [
          L("The spine", `${wb('lamin/o', '-ectomy')} → ${e('<b>laminectomy</b>')}: removing the vertebral lamina to relieve pressure on the spinal cord or roots<br>${e('<b>spinal fusion</b>')}: joining two or more vertebrae for spinal stability${pearl("Discharge Summary in Fremgen’s book: a 23-year-old man, after a motorcycle accident, had a burst fracture of L2 with an epidural hematoma and complete paraplegia; a lumbar laminectomy with spinal fusion was performed.")}`),
          L("nerve", `${tbl([["surgery", "Meaning"], [e('neurorrhaphy'), "nerve suture (-rrhaphy)"], [e('neuroplasty'), "nerve repair"], [e('neurectomy'), "neurectomy"], [e('neurolysis'), "freeing or destroying a nerve"], [e('rhizotomy'), "cutting a nerve root for pain or spasticity"], [e('vagotomy'), "cutting the vagus nerve"]])}${memo("-rrhaphy is suturing and -rrhexis is rupture; both begin with rrh.")}`),
          M(`${e('<b>neurorrhaphy</b>')} means…`, ["nerve suture", "neurectomy", "nerve pain", "nerve inflammation"], "-rrhaphy = suture."),
          M("To relieve pressure on the spinal cord, the vertebral lamina is removed; this operation is…", ['laminectomy', 'craniotomy', 'vagotomy', 'neuroplasty'], 'lamin/o + -ectomy.'),
          T("spinal fusion means joining vertebrae together.", true, "Stability of the spine."),
          W("Build a word meaning “surgical repair of a nerve”", ['neur/o', '-plasty'], ['-rrhaphy', 'myel/o', '-ectomy'], 'neuroplasty.'),
          P("Match each operation to its meaning", [['neurectomy', "removal of a nerve"], ['rhizotomy', "cutting a nerve root"], ['vagotomy', "cutting the vagus nerve"], ['spinal fusion', "fusing the vertebrae"]], "Nerve surgery."),
          B("The Discharge Summary patient became completely paralysed at the ___ level.", ['L2', 'C6', 'T12'], 'complete paraplegia at the L2 level.'),
          S("Spell the term for removal of the vertebral lamina", 'laminectomy', 'lamin/o + -ectomy.', 'lamin…'),
          N('t2f:tx')
        ]
      },
      /* ================= سطح ۳: دارو، توان‌بخشی و پرونده ================= */
      {
        id: 'tx7', title: "Shunts and Vessel Surgery", icon: '🔧', items: [
          L("Shunt", `${fig('vp-shunt', [], "ventriculoperitoneal shunt")}${e('<b>ventriculoperitoneal (VP) shunt</b>')}: a tube with a one-way valve that drains excess CSF from a brain ventricle to the abdomen; the treatment for hydrocephalus.${fig('hydrocephalus-child', ["A child with hydrocephalus"], "Hydrocephalus")}`),
          L("Preventing and treating stroke", `• ${e('<b>carotid endarterectomy</b>')}: removing plaque from the inner wall of the carotid artery to prevent a stroke<br>• ${e('<b>thrombolytic therapy</b>')}: a clot-dissolving drug (such as ${e('tPA')}) given soon after an ischaemic stroke${memo("endarterectomy means “removal from inside an artery”: endo + arter + ectomy.")}`),
          M("What is the surgical treatment for hydrocephalus?", ['VP shunt', 'laminectomy', 'vagotomy', 'ECT'], "Draining CSF to the abdomen.", null, F('vp-shunt', [])),
          M("What is removing plaque from the carotid artery called?", ['carotid endarterectomy', 'craniectomy', 'sympathectomy', 'angioplasty of the vagus'], "Preventing stroke."),
          T("A clot-dissolving drug is not given in a haemorrhagic stroke.", true, "It makes the bleeding worse."),
          O("Put the path of CSF through a VP shunt in order", ['ventricle', 'catheter', 'one-way valve', 'tube under the skin', 'peritoneal cavity'], "From ventricle to abdomen."),
          P("Match each term to its meaning", [['VP shunt', "ventriculoperitoneal shunt"], ['tPA', "clot-dissolving drug"], ['carotid', "neck artery"], ['peritoneum', "membrane lining the abdomen"]], "Shunts and vessels."),
          B("The abbreviation ___ means the clot-dissolving drug tissue plasminogen activator.", ['tPA', 'TIA', 'TENS'], 'tissue plasminogen activator.'),
          S("Spell the term for a tube that diverts fluid to another place", 'shunt', "A bypass route.", 'shu…'),
          N('wb:tx')
        ]
      },
      {
        id: 'tx8', title: "Nervous system drugs", icon: '💊', items: [
          L("Drug groups", `${fig('neuro-drugs', [], "Neuro drugs")}${tbl([["drug", "Job"], [e('analgesic'), "painkiller; reduces pain without loss of consciousness"], [e('narcotic'), "a strong painkiller with a risk of dependence, such as morphine"], [e('anesthetic'), "local anaesthesia or general anaesthesia (GA)"], [e('anticonvulsant'), "anticonvulsant, such as phenytoin and diazepam"], [e('hypnotic'), "sleep-inducing (hypn/o = sleep)"]])}`),
          L("A few more drugs", `${tbl([["drug", "Job"], [e('sedative'), "calming"], [e('muscle relaxant'), "muscle relaxant, such as dantrolene"], [e('dopaminergic drugs'), "raising dopamine in Parkinson’s, such as levodopa"]])}${pearl("The book’s APPLY scenario: pain management is a delicate art; narcotic painkillers are strong but carry a risk of dependence and side effects.")}${vs(['analgesic', "reduces pain, consciousness remains"], ['anesthetic', "removes sensation; sometimes consciousness too"])}`),
          M("Which drug prevents seizures?", ['anticonvulsant', 'antidepressant', 'hypnotic', 'analgesic'], "The book’s drug table: phenobarbital and diazepam.", null, F('neuro-drugs', [])),
          M("A painkiller that reduces pain without causing euphoria is…", ['analgesic', 'narcotic', 'anesthetic', 'stimulant'], "The book’s exercise: without inducing a euphoric state."),
          T("A hypnotic is a sleep-inducing drug.", true, "hypn/o = sleep."),
          W("Build a word meaning “absence of pain”", ['an-', '-algesia'], ['anti-', '-esthesia', 'hyper-'], 'analgesia.'),
          P("Match each drug to its job", [['analgesic', "painkiller"], ['anesthetic', "Numbing"], ['hypnotic', "sleep-inducing drug"], ['sedative', "calming"]], "Neuro drugs."),
          B("A strong painkiller that causes euphoria and dependence is a ___.", ['narcotic', 'analgesic', 'anticonvulsant'], "narc/o = stupor."),
          S("Spell the term for a drug that prevents seizures", 'anticonvulsant', 'anti- + convulsant.', 'anticon…'),
          N('f2t:tx')
        ]
      },
      {
        id: 'tx9', title: "Rehabilitation and Record Abbreviations", icon: '📋', items: [
          L("rehabilitation", `${e('<b>rehabilitation</b>')} is a programme to restore ability after illness or injury:<br>• ${e('<b>physical therapy (PT)</b>')}: exercise and movement for strength and walking<br>• ${e('<b>occupational therapy (OT)</b>')}: retraining everyday tasks<br>• ${e('<b>TENS</b>')}: electrical nerve stimulation through the skin to reduce pain${pearl("After three weeks of intensive rehabilitation, William was able to take a few small steps and move his shoulders, arms and fingers.")}`),
          L("A real note", `${pearl("The book’s APPLY scenario: “Mr. Jones presents to the ED after a motor vehicle accident. Experienced TIA last week; may now have a CVA. Will evaluate for SCI and get MRI, MRA, and EEG. Concerned ICP is elevated. May have a CSF leak.”")}${tbl([["abbreviation", "Meaning"], [e('TIA'), "mini-stroke"], [e('CVA'), "stroke"], [e('SCI'), "spinal cord injury"], [e('ICP'), "intracranial pressure"], [e('CSF'), "cerebrospinal fluid"]])}`),
          M("Retraining everyday tasks such as dressing is the work of which therapy?", ['occupational therapy', 'physical therapy', 'psychotherapy', 'TENS'], 'OT.'),
          M("What is TENS for?", ["reducing pain by electrical nerve stimulation", "recording brain electricity", "imaging the spinal cord", "treating depression"], 'transcutaneous electrical nerve stimulation.'),
          T("In Mr Jones’s note, the doctor is worried that the pressure inside the skull is high.", true, 'Concerned ICP is elevated.'),
          O("Put the path of treating a spinal cord injury in order", ['emergency department', 'imaging (MRI)', 'surgery', 'rehabilitation center', 'return home'], "From the emergency department to home."),
          P("Match each abbreviation in the note to its meaning", [['SCI', "spinal cord injury"], ['MRA', "MR angiography"], ['ICP', "intracranial pressure"], ['CSF leak', "leak of cerebrospinal fluid"]], "Mr Jones’s note."),
          B("The abbreviation ___ means physical therapy.", ['PT', 'OT', 'PET'], 'physical therapy.'),
          S("Spell the term for restoring ability after injury", 'rehabilitation', 're + habilitation.', 'rehab…'),
          N('m2r:tx')
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
/* نورو — کاراکترهای قابل جمع‌آوری
 * هر دنیا سه سطح دارد و تمام کردن هر سطح یک کاراکتر هدیه می‌دهد (۱۸ کاراکتر).
 * همه با SVG ساخته می‌شوند؛ هر کاراکتر چهره‌ای دارد که حالت (خوشحال، ناراحت، …) می‌گیرد
 * و می‌تواند «همراه» کاربر در درس‌ها شود. شکل‌ها از دنیای مغز، نورون، تکانه عصبی، سلامت روان و درمان‌های عصبی الهام گرفته‌اند. */
(function (root) {
  const EA = root.EA = root.EA || {};

  const CHARS = [
    { id: 'lx-0', w: 'lx', lv: 0, name: "Brainy", title: "A Beginner Brain", shape: 'brain', color: '#F6B3C6', acc: ['sparkle'], bio: "Weighs about 1,400 grams and has eighty-six billion neurons; every thought, movement and memory starts with him." },
    { id: 'lx-1', w: 'lx', lv: 1, name: "Rooty", title: "Master of neur/o and encephal/o", shape: 'book', color: '#6C4FD0', acc: ['glasses'], bio: "A living dictionary that breaks every neuro word into root, prefix and suffix and never mixes up myel/o and my/o." },
    { id: 'lx-2', w: 'lx', lv: 2, name: "Puzzly", title: "King of Prefixes and Suffixes", shape: 'puzzle', color: '#4B3499', acc: ['crown'], bio: "Tells -plegia from -paresis and fits hemi-, para- and quadri- together like puzzle pieces." },
    { id: 'cn-0', w: 'cn', lv: 0, name: "Skully", title: "The Brain’s Bony Shield", shape: 'skull', color: '#F3E4C4', acc: ['helmet'], bio: "The eight bones of the skull that enclose the brain; crani/o is his name." },
    { id: 'cn-1', w: 'cn', lv: 1, name: "Trimeni", title: "The Three-Layer Guardian", shape: 'shield', color: '#9CB3C9', acc: ['glasses'], bio: "Has the dura mater, arachnoid and pia mater together and holds CSF in the subarachnoid space." },
    { id: 'cn-2', w: 'cn', lv: 2, name: "Spiny", title: "The Spinal Highway", shape: 'vertebra', color: '#F2C94C', acc: ['crown'], bio: "Shelters the spinal cord in the vertebral canal; 31 pairs of spinal nerves leave from both sides." },
    { id: 'pn-0', w: 'pn', lv: 0, name: "Neuri", title: "The Messenger Cell", shape: 'neuron', color: '#B7A3EA', acc: ['sparkle'], bio: "Receives messages with her dendrites and sends them along her long axon to the terminals." },
    { id: 'pn-1', w: 'pn', lv: 1, name: "Sparky", title: "The Speedy Impulse", shape: 'bolt', color: '#FFC800', acc: ['glasses'], bio: "Jumps from node to node along the myelin sheath and arrives at more than 100 metres per second." },
    { id: 'pn-2', w: 'pn', lv: 2, name: "Libra", title: "Sympathetic and parasympathetic", shape: 'scale', color: '#17A398', acc: ['crown'], bio: "One pan of her scale is “fight or flight” and the other “rest and digest”; she keeps homeostasis." },
    { id: 'ds-0', w: 'ds', lv: 0, name: "Ruby", title: "The Stroke Alarm", shape: 'drop', color: '#D9443A', acc: ['sparkle'], bio: "Knows that every minute counts in a stroke; takes TIA seriously and wants the clot-dissolving drug on time." },
    { id: 'ds-1', w: 'ds', lv: 1, name: "Myeli", title: "The Insulating Sheath", shape: 'tube', color: '#DFE9F5', acc: ['glasses'], bio: "Wrapped around the axons so messages travel fast; in MS a hard plaque takes her place." },
    { id: 'ds-2', w: 'ds', lv: 2, name: "Stormy", title: "The Epilepsy Detective", shape: 'cloud', color: '#8E6BD8', acc: ['crown'], bio: "Knows the brain’s electrical storm; tells aura, tonic-clonic and absence seizures apart on the EEG." },
    { id: 'ps-0', w: 'ps', lv: 0, name: "Luna", title: "Guardian of sleep", shape: 'moon', color: '#9FD3C7', acc: ['sparkle'], bio: "Knows insomnia and narcolepsy and knows that good sleep is half of mental health." },
    { id: 'ps-1', w: 'ps', lv: 1, name: "Bubbles", title: "The Talking Companion", shape: 'bubble', color: '#C3B5F7', acc: ['glasses'], bio: "A fan of psychotherapy and CBT; names anxiety, phobias and obsessions with kindness." },
    { id: 'ps-2', w: 'ps', lv: 2, name: "Psyche", title: "Psyche, Symbol of the Mind", shape: 'butterfly', color: '#E0708C', acc: ['crown'], bio: "In Greek, psyche means both “soul” and “butterfly”; she knows depression, mania and schizophrenia well." },
    { id: 'tx-0', w: 'tx', lv: 0, name: "Wavy", title: "The Wave Reader", shape: 'meter', color: '#3D6FD6', acc: ['sparkle'], bio: "Knows alpha, beta and delta waves and finds the storm of a seizure on the EEG." },
    { id: 'tx-1', w: 'tx', lv: 1, name: "Capsy", title: "The Neuro Pharmacist", shape: 'capsule', color: '#F2A33A', acc: ['glasses'], bio: "Tells analgesics, anticonvulsants and hypnotics apart and knows the right dose." },
    { id: 'tx-2', w: 'tx', lv: 2, name: "Scripty", title: "Master of the Neurology Record", shape: 'clipboard', color: '#274FA8', acc: ['cape', 'crown'], bio: "Reads CVA, TIA, GCS and LP at a glance and accompanies the patient from the emergency department to rehabilitation." }
  ];

  /* ---------- بدنه‌ها: مسیر، مرکز چهره، ارتفاع بالای سر ---------- */
  function starPath(cx, cy, R, r) {
    let d = '';
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R;
      d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1);
    }
    return d + 'Z';
  }
  function hexPath(cx, cy, R) {
    let d = '';
    for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; d += (i ? 'L' : 'M') + (cx + R * Math.cos(a)).toFixed(1) + ' ' + (cy + R * Math.sin(a)).toFixed(1); }
    return d + 'Z';
  }
  const SHAPES = {
    /* بلوک پوست: اپیدرم، درم و چربی با یک تار مو */
    tile: { fy: 92, top: 36, body: c => `<path d="M74 42 q-2 -16 10 -30" stroke="#5a2e1c" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="14" y="40" width="92" height="104" rx="20" fill="${c}"/><path d="M14 66 q11.5 -8 23 0 t23 0 t23 0 t23 0 V60 a20 20 0 0 0 -20 -20 H34 a20 20 0 0 0 -20 20Z" fill="#000" opacity=".12"/><g fill="#fff2c4" opacity=".75"><circle cx="30" cy="130" r="7"/><circle cx="48" cy="132" r="7"/><circle cx="66" cy="132" r="7"/><circle cx="84" cy="130" r="7"/></g><ellipse cx="34" cy="56" rx="7" ry="4" fill="#fff" opacity=".35"/>` },
    /* فولیکول و پیاز مو */
    hair: { fy: 96, top: 20, body: c => `<path d="M52 36 q-10 -18 -2 -30 M60 34 q0 -20 10 -30 M68 36 q12 -14 6 -28" stroke="#3a2414" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M60 30 C92 30 104 70 100 100 C96 128 80 142 60 142 C40 142 24 128 20 100 C16 70 28 30 60 30Z" fill="${c}"/><ellipse cx="60" cy="134" rx="16" ry="6" fill="#e0675a" opacity=".8"/><ellipse cx="38" cy="58" rx="7" ry="12" transform="rotate(25 38 58)" fill="#fff" opacity=".3"/>` },
    /* سر انگشت با ناخن و هلال */
    nail: { fy: 110, top: 30, body: c => `<path d="M24 146 V68 C24 26 96 26 96 68 V146Z" fill="${c}"/><path d="M38 46 C38 28 82 28 82 46 V78 C82 88 38 88 38 78Z" fill="#fff5ef" stroke="#e3b9a3" stroke-width="2"/><path d="M44 80 Q60 68 76 80" fill="#fff" stroke="#f0d7c9"/><ellipse cx="50" cy="44" rx="5" ry="8" fill="#fff" opacity=".8"/>` },
    /* تاول گنبدی شفاف */
    blister: { fy: 98, top: 40, body: c => `<rect x="4" y="132" width="112" height="12" rx="6" fill="#f2b893"/><path d="M10 136 C10 72 38 40 60 40 C82 40 110 72 110 136Z" fill="${c}" opacity=".92"/><path d="M28 80 C34 62 46 52 58 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>` },
    /* خوشه باکتری */
    grape: { fy: 92, top: 26, body: c => `${[[40, 56], [80, 56], [60, 42], [28, 90], [92, 90], [60, 70], [42, 124], [78, 124], [60, 110], [30, 64], [90, 64]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="19" fill="${c}" stroke="#000" stroke-opacity=".12" stroke-width="2"/>`).join('')}<circle cx="60" cy="92" r="32" fill="${c}"/><ellipse cx="46" cy="42" rx="5" ry="8" fill="#fff" opacity=".4"/>` },
    /* تیوب پماد */
    ointment: { fy: 70, top: 22, body: c => `<rect x="26" y="20" width="68" height="12" rx="3" fill="#C9D2D8"/><path d="M26 26 H94" stroke="#9AA9B1" stroke-width="2" stroke-dasharray="3 3"/><path d="M30 32 H90 L84 128 H36Z" fill="${c}"/><rect x="38" y="98" width="44" height="18" rx="4" fill="#fff" opacity=".75"/><path d="M44 107 h32" stroke="${c}" stroke-width="3" stroke-linecap="round"/><rect x="48" y="128" width="24" height="16" rx="4" fill="#fff" stroke="#C9D2D8" stroke-width="2"/><ellipse cx="42" cy="50" rx="5" ry="12" fill="#fff" opacity=".3"/>` },
    /* خورشید ضدآفتاب */
    sun: { fy: 90, top: 30, body: c => `${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const x1 = 60 + Math.cos(a) * 46, y1 = 90 + Math.sin(a) * 46, x2 = 60 + Math.cos(a) * 58, y2 = 90 + Math.sin(a) * 58; return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>`; }).join('')}<circle cx="60" cy="90" r="42" fill="${c}"/><ellipse cx="40" cy="70" rx="8" ry="12" transform="rotate(30 40 70)" fill="#fff" opacity=".35"/>` },
    /* چسب زخم */
    bandage: { fy: 88, top: 46, body: c => `<g transform="rotate(-16 60 88)"><rect x="2" y="62" width="116" height="52" rx="26" fill="${c}" stroke="#d9a274" stroke-width="2"/><rect x="36" y="64" width="48" height="48" rx="6" fill="#fff" opacity=".6"/>${[14, 24, 96, 106].map(x => `<circle cx="${x}" cy="80" r="2" fill="#d9a274"/><circle cx="${x}" cy="96" r="2" fill="#d9a274"/>`).join('')}</g>` },
    /* پاکت نامه: هورمون پیام‌رسان */
    envelope: { fy: 102, top: 44, body: c => `<rect x="14" y="46" width="92" height="84" rx="12" fill="${c}"/><path d="M18 52 L60 80 L102 52" stroke="#fff" stroke-width="5" fill="none" stroke-linejoin="round" opacity=".55"/><rect x="14" y="46" width="92" height="84" rx="12" fill="#000" opacity=".06"/>` },
    /* قفل: گیرنده */
    lock: { fy: 96, top: 20, body: c => `<path d="M36 66 V46 a24 24 0 0 1 48 0 V66" stroke="#9AA9B1" stroke-width="11" fill="none"/><rect x="16" y="62" width="88" height="80" rx="16" fill="${c}"/><circle cx="60" cy="132" r="4.5" fill="#000" opacity=".25"/><path d="M26 74 q10 -6 22 -4" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".4"/>` },
    /* نخود: هیپوفیز */
    pea: { fy: 90, top: 40, body: c => `<path d="M60 44 q4 -16 18 -20" stroke="#58A700" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M72 30 q14 -12 26 -4 q-12 10 -26 4z" fill="#58CC02"/><circle cx="60" cy="92" r="50" fill="${c}"/><circle cx="60" cy="96" r="38" fill="#000" opacity=".06"/><ellipse cx="38" cy="66" rx="9" ry="14" transform="rotate(35 38 66)" fill="#fff" opacity=".35"/>` },
    /* خط‌کش: هورمون رشد */
    ruler: { fy: 76, top: 8, body: c => `<rect x="28" y="8" width="64" height="136" rx="14" fill="${c}"/>${[22, 34, 46, 58, 70, 82, 94, 106, 118, 130].map((y, i) => `<path d="M28 ${y} h${i % 2 ? 9 : 15}" stroke="#fff" stroke-width="3" opacity=".6"/>`).join('')}<rect x="28" y="8" width="64" height="136" rx="14" fill="#000" opacity=".05"/>` },
    /* پروانه: تیروئید */
    butterfly: { fy: 88, top: 42, body: c => `<ellipse cx="36" cy="90" rx="30" ry="46" transform="rotate(-14 36 90)" fill="${c}"/><ellipse cx="84" cy="90" rx="30" ry="46" transform="rotate(14 84 90)" fill="${c}"/><rect x="38" y="96" width="44" height="26" rx="12" fill="${c}"/><ellipse cx="60" cy="112" rx="22" ry="10" fill="#000" opacity=".07"/><ellipse cx="26" cy="68" rx="7" ry="13" transform="rotate(20 26 68)" fill="#fff" opacity=".35"/>` },
    /* شش‌ضلعی: کریستال ید */
    hex: { fy: 88, top: 36, body: c => `<path d="${hexPath(60, 90, 52)}" fill="${c}" stroke="${c}" stroke-width="10" stroke-linejoin="round"/><path d="${hexPath(60, 92, 38)}" fill="#000" opacity=".07"/><path d="M28 70 l14 -8" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".4"/>` },
    /* کلاه مثلثی: فوق‌کلیه */
    hat: { fy: 100, top: 30, body: c => `<path d="M12 134 Q60 2 108 134 Z" fill="${c}"/><path d="M34 134 Q60 50 86 134 Z" fill="#000" opacity=".06"/><ellipse cx="60" cy="134" rx="54" ry="10" fill="${c}"/><ellipse cx="60" cy="134" rx="54" ry="10" fill="#000" opacity=".12"/><path d="M40 70 q8 -18 16 -26" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".4"/>` },
    /* نمکدان: آلدوسترون */
    salt: { fy: 98, top: 20, body: c => `<rect x="24" y="50" width="72" height="94" rx="20" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M24 50 a20 20 0 0 1 20 -24 h32 a20 20 0 0 1 20 24z" fill="${c}"/><g fill="#fff" opacity=".8"><circle cx="48" cy="38" r="3"/><circle cx="60" cy="34" r="3"/><circle cx="72" cy="38" r="3"/></g><path d="M34 62 v40" stroke="#eef2f4" stroke-width="6" stroke-linecap="round"/>` },
    /* جزیره با نخل: جزایر لانگرهانس */
    island: { fy: 110, top: 22, body: c => `<path d="M80 86 C82 60 86 42 92 28" stroke="#8B5A2B" stroke-width="6" fill="none" stroke-linecap="round"/><g fill="${c}"><path d="M92 28 q-26 -10 -40 6 q20 -4 40 -6z"/><path d="M92 28 q24 -12 26 10 q-12 -10 -26 -10z"/><path d="M92 28 q-6 -18 8 -24 q0 14 -8 24z"/></g><ellipse cx="60" cy="114" rx="54" ry="32" fill="#F4D58D"/><ellipse cx="60" cy="140" rx="58" ry="8" fill="${c}" opacity=".45"/><ellipse cx="40" cy="96" rx="9" ry="5" fill="#fff" opacity=".45"/>` },
    /* کلید: انسولین */
    key: { fy: 60, top: 14, body: c => `<rect x="51" y="92" width="18" height="54" rx="6" fill="${c}"/><rect x="66" y="116" width="16" height="9" rx="3" fill="${c}"/><rect x="66" y="132" width="12" height="9" rx="3" fill="${c}"/><circle cx="60" cy="60" r="44" fill="${c}"/><circle cx="60" cy="30" r="7" fill="#fff" opacity=".9"/><circle cx="60" cy="64" r="32" fill="#000" opacity=".05"/>` },
    /* قندسنج */
    meter: { fy: 104, top: 16, body: c => `<rect x="20" y="18" width="80" height="124" rx="18" fill="${c}"/><rect x="31" y="30" width="58" height="40" rx="8" fill="#DFF6E8"/><path d="M38 58 l8 -10 8 6 8 -14 8 8 8 -4" stroke="#1F8A4C" stroke-width="3" fill="none" stroke-linejoin="round"/><rect x="52" y="140" width="16" height="10" rx="2" fill="#fff" stroke="#d4d9dc"/>` },
    /* ماه: ملاتونین */
    moon: { fy: 88, top: 36, body: c => `<circle cx="60" cy="90" r="52" fill="${c}"/><g fill="#000" opacity=".09"><circle cx="34" cy="64" r="8"/><circle cx="90" cy="120" r="10"/><circle cx="84" cy="56" r="5"/></g><path d="M22 92 a38 38 0 0 1 22 -40" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".35"/>` },
    /* قطعه پازل */
    puzzle: { fy: 98, top: 40, body: c => `<path d="M18 52 H46 C40 30 80 30 74 52 H102 V80 C122 74 122 112 102 106 V140 H18 V106 C38 112 38 74 18 80Z" fill="${c}"/><path d="M18 106 C38 112 38 74 18 80 V140 H60 C40 140 24 128 18 106Z" fill="#000" opacity=".08"/><path d="M28 64 q10 -6 22 -4" stroke="#fff" stroke-opacity=".45" stroke-width="5" fill="none" stroke-linecap="round"/>` },
    /* کتاب واژه‌نامه */
    book: { fy: 84, top: 26, body: c => `<rect x="18" y="26" width="86" height="116" rx="10" fill="${c}"/><rect x="18" y="26" width="16" height="116" rx="7" fill="#000" opacity=".18"/><rect x="34" y="124" width="70" height="10" rx="3" fill="#fff" opacity=".9"/><path d="M40 112 h48" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/><text x="70" y="58" font-size="16" font-weight="900" fill="#fff" fill-opacity=".9" text-anchor="middle" font-family="Nunito, system-ui, sans-serif">Aa</text>` },
    /* حباب گفتگو */
    bubble: { fy: 80, top: 28, body: c => `<path d="M60 28 C96 28 112 50 112 78 C112 106 92 124 62 124 C56 124 50 123 45 122 L22 142 L28 116 C14 106 8 94 8 78 C8 50 26 28 60 28Z" fill="${c}"/><ellipse cx="34" cy="54" rx="8" ry="12" transform="rotate(35 34 54)" fill="#fff" opacity=".3"/>` },
    /* گلبول قرمز دوکاو */
    disc: { fy: 84, top: 38, body: c => `<ellipse cx="60" cy="88" rx="52" ry="48" fill="${c}"/><ellipse cx="60" cy="92" rx="30" ry="24" fill="#000" opacity=".1"/><path d="M22 70 A44 40 0 0 1 48 46" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* پلاکت نامنظم */
    platelet: { fy: 88, top: 46, body: c => `<path d="M18 92 C10 62 38 44 62 50 C88 40 112 62 104 90 C114 114 88 136 60 130 C32 138 10 118 18 92Z" fill="${c}"/><g fill="#6E48A6" opacity=".5"><circle cx="34" cy="70" r="3"/><circle cx="92" cy="72" r="3"/><circle cx="40" cy="118" r="3"/><circle cx="88" cy="116" r="2.5"/></g>` },
    /* کیسه خون */
    bag: { fy: 100, top: 26, body: c => `<rect x="54" y="8" width="12" height="22" rx="4" fill="#B7C2C8"/><rect x="18" y="26" width="84" height="116" rx="20" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M21 66 H99 V122 a17 17 0 0 1 -17 17 H38 a17 17 0 0 1 -17 -17z" fill="${c}"/><path d="M30 40 H70 M30 50 H58" stroke="#d4d9dc" stroke-width="4" stroke-linecap="round"/>` },
    /* گره لنفاوی لوبیایی */
    bean: { fy: 84, top: 36, body: c => `<path d="M26 64 C34 28 98 26 106 64 C112 96 96 136 64 134 C50 133 50 114 38 112 C16 110 18 84 26 64Z" fill="${c}"/><path d="M40 112 C50 114 50 133 64 134" stroke="#000" stroke-opacity=".12" stroke-width="4" fill="none"/><ellipse cx="42" cy="56" rx="7" ry="12" transform="rotate(40 42 56)" fill="#fff" opacity=".35"/>` },
    /* آنتی‌بادی Y شکل */
    yab: { fy: 96, top: 30, body: c => `<g stroke="${c}" stroke-width="22" stroke-linecap="round" fill="none"><path d="M60 140 V100"/><path d="M60 96 L24 40"/><path d="M60 96 L96 40"/></g><g stroke="#fff" stroke-opacity=".35" stroke-width="5" stroke-linecap="round" fill="none"><path d="M22 34 L32 50"/><path d="M98 34 L88 50"/></g><circle cx="60" cy="96" r="32" fill="${c}"/><circle cx="24" cy="36" r="9" fill="#FF9600"/><circle cx="96" cy="36" r="9" fill="#FF9600"/>` },
    /* لنفوسیت با هسته بزرگ */
    lympho: { fy: 88, top: 38, body: c => `<circle cx="60" cy="90" r="52" fill="#A9C8F2"/><circle cx="60" cy="90" r="42" fill="${c}"/><ellipse cx="42" cy="68" rx="8" ry="12" transform="rotate(35 42 68)" fill="#fff" opacity=".3"/>` },
    /* لوله آزمایش */
    tube: { fy: 98, top: 14, body: c => `<rect x="30" y="8" width="60" height="16" rx="6" fill="#9AA9B1"/><path d="M34 24 H86 V112 a26 26 0 0 1 -52 0z" fill="#F4F7F8" stroke="#77868E" stroke-width="3"/><path d="M36 64 H84 V112 a24 24 0 0 1 -48 0z" fill="${c}"/><path d="M42 34 V58" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>` },
    /* کپسول دارو */
    capsule: { fy: 96, top: 28, body: c => `<rect x="20" y="30" width="80" height="114" rx="40" fill="#fff" stroke="#d4d9dc" stroke-width="3"/><path d="M20 87 V70 a40 40 0 0 1 80 0 V87z" fill="${c}"/><path d="M34 60 a26 26 0 0 1 16 -18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    drop: { fy: 90, top: 14, body: c => `<path d="M60 10 C60 10 14 64 14 96 a46 46 0 0 0 92 0 C106 64 60 10 60 10 Z" fill="${c}"/><ellipse cx="42" cy="58" rx="7" ry="13" transform="rotate(28 42 58)" fill="#fff" opacity=".4"/>` },
    heart: { fy: 72, top: 26, body: c => `<path d="M60 132 C20 104 10 80 10 62 C10 38 30 26 46 30 C54 32 58 38 60 44 C62 38 66 32 74 30 C90 26 110 38 110 62 C110 80 100 104 60 132Z" fill="${c}"/><ellipse cx="34" cy="50" rx="8" ry="11" transform="rotate(-30 34 50)" fill="#fff" opacity=".4"/>` },
    blob: { fy: 86, top: 30, body: c => `<path d="M60 30 C94 30 110 54 108 86 C106 118 88 134 60 134 C32 134 12 118 12 86 C10 54 26 30 60 30Z" fill="${c}"/><ellipse cx="38" cy="54" rx="8" ry="12" transform="rotate(30 38 54)" fill="#fff" opacity=".35"/>` },
    shield: { fy: 82, top: 26, body: c => `<path d="M60 26 L106 42 V80 C106 106 86 124 60 136 C34 124 14 106 14 80 V42Z" fill="${c}"/><path d="M60 26 L106 42 V80 C106 106 86 124 60 136Z" fill="#000" opacity=".1"/><path d="M60 38 L94 50 V80 C94 100 80 114 60 124" stroke="#fff" stroke-opacity=".35" stroke-width="4" fill="none"/>` },
    cloud: { fy: 94, top: 44, body: c => `<path d="M30 128 C8 128 4 100 22 92 C18 66 46 56 58 70 C64 46 100 46 102 76 C122 78 124 108 106 116 C104 126 96 128 90 128 Z" fill="${c}"/><path d="M30 128 C8 128 4 100 22 92 C24 108 40 118 90 128 Z" fill="#000" opacity=".07"/><ellipse cx="72" cy="62" rx="10" ry="5" transform="rotate(-10 72 62)" fill="#fff" opacity=".5"/>` },
    /* تخته یادداشت با گیره */
    clipboard: { fy: 78, top: 18, body: c => `<rect x="20" y="26" width="80" height="116" rx="12" fill="#A0673A"/><rect x="28" y="36" width="64" height="98" rx="6" fill="${c}"/><path d="M38 114 H82 M38 124 H68" stroke="#000" stroke-opacity=".14" stroke-width="4" stroke-linecap="round"/><rect x="42" y="16" width="36" height="20" rx="6" fill="#B7C2C8" stroke="#77868E" stroke-width="3"/>` },
    /* ترازو با صفحه عقربه‌ای */
    scale: { fy: 104, top: 24, body: c => `<rect x="10" y="46" width="100" height="94" rx="24" fill="${c}"/><rect x="10" y="46" width="100" height="94" rx="24" fill="#000" opacity=".06"/><circle cx="60" cy="50" r="25" fill="#fff" stroke="${c}" stroke-width="6"/><path d="M44 50 a16 16 0 0 1 32 0" stroke="#d4d9dc" stroke-width="3" fill="none"/><path d="M60 50 L71 38" stroke="#E5476B" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="50" r="4" fill="#3b1530"/>` },
    /* دستکش معاینه */
    glove: { fy: 100, top: 22, body: c => `<path d="M28 78 C28 60 30 50 38 50 C44 50 46 56 46 64 V38 C46 30 50 26 55 26 C60 26 63 30 63 38 V32 C63 24 67 20 72 20 C77 20 80 24 80 32 V42 C80 36 84 32 89 32 C95 32 98 36 98 44 V100 C98 124 84 138 62 138 C40 138 26 124 24 106 L12 84 C8 76 16 68 23 74 Z" fill="${c}"/><path d="M63 38 V60 M80 42 V62" stroke="#000" stroke-opacity=".1" stroke-width="3" stroke-linecap="round"/><rect x="34" y="132" width="54" height="12" rx="5" fill="#000" opacity=".15"/>` },
    flame: { fy: 102, top: 14, body: c => `<path d="M60 10 C76 38 106 58 106 96 C106 124 86 142 60 142 C34 142 14 124 14 96 C14 70 32 58 40 32 C48 48 52 54 56 56 C58 40 56 26 60 10Z" fill="${c}"/><path d="M60 64 C72 82 86 92 86 110 C86 128 74 138 60 138 C46 138 34 128 34 110 C34 96 48 86 60 64Z" fill="#FFD93D" opacity=".5"/>` },
    /* دماسنج با مخزن */
    thermo: { fy: 108, top: 12, body: c => `<rect x="38" y="10" width="44" height="96" rx="22" fill="#fff" stroke="${c}" stroke-width="6"/><rect x="54" y="38" width="12" height="70" rx="6" fill="#FF6B57"/><path d="M82 34 H72 M82 50 H72 M82 66 H72" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="110" r="33" fill="${c}"/><ellipse cx="46" cy="96" rx="6" ry="9" transform="rotate(30 46 96)" fill="#fff" opacity=".35"/>` },
    bone: { fy: 76, top: 10, body: c => `<path d="M38 42 C22 42 20 16 36 14 C42 2 58 8 60 20 C62 8 78 2 84 14 C100 16 98 42 82 42 V106 C98 106 100 132 84 134 C78 146 62 140 60 128 C58 140 42 146 36 134 C20 132 22 106 38 106 Z" fill="${c}" stroke="#D8C6AE" stroke-width="3"/>` },
    /* جمجمه خندان */
    skull: { fy: 82, top: 30, body: c => `<circle cx="60" cy="80" r="48" fill="${c}" stroke="#C9AE7C" stroke-width="2"/><rect x="34" y="108" width="52" height="34" rx="12" fill="${c}" stroke="#C9AE7C" stroke-width="2"/>${[42, 52, 62, 72].map(x => `<rect x="${x}" y="128" width="7" height="12" rx="2" fill="#fff" stroke="#C9AE7C"/>`).join('')}<path d="M56 112 l4 -8 l4 8z" fill="#8a6a3c"/><path d="M30 60 q10 -18 30 -22" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/>` },
    /* مهره با زائده خاری و عرضی */
    vertebra: { fy: 100, top: 24, body: c => `<rect x="52" y="20" width="16" height="44" rx="7" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><rect x="4" y="76" width="112" height="16" rx="8" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="106" rx="46" ry="36" fill="${c}" stroke="#3f6f9f" stroke-width="2"/><ellipse cx="60" cy="72" rx="14" ry="9" fill="#f6d36a" stroke="#c99a1d" stroke-width="1.5"/><path d="M26 98 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* فیلم رادیوگرافی با استخوان */
    xray: { fy: 96, top: 18, body: c => `<rect x="12" y="20" width="96" height="124" rx="12" fill="${c}"/><rect x="20" y="28" width="80" height="108" rx="8" fill="#16232f"/><path d="M84 36 l8 -4 l-2 8 M84 36 l-24 96" stroke="#dfe9f2" stroke-width="7" stroke-linecap="round" opacity=".55"/><path d="M58 128 l-8 6 l10 2" stroke="#dfe9f2" stroke-width="5" fill="none" opacity=".55"/><rect x="24" y="32" width="18" height="8" rx="2" fill="#fff" opacity=".5"/>` },
    /* یک جفت ریه با نای */
    lungs: { fy: 94, top: 18, body: c => `<rect x="54" y="8" width="12" height="40" rx="6" fill="#BFE0F2" stroke="#5E9FC4" stroke-width="1.5"/><path d="M57 50 C38 32 10 44 10 84 C10 118 16 140 36 142 C50 144 57 132 57 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M63 50 C82 32 110 44 110 84 C110 118 104 140 84 142 C70 144 63 132 63 112Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M20 76 C22 60 32 52 42 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* مغز: دو نیمکره با شکنج‌ها */
    brain: { fy: 84, top: 26, body: c => `<path d="M60 30 C46 18 20 22 16 40 C2 46 0 70 10 82 C4 102 18 122 38 120 C46 134 58 132 60 124 C62 132 74 134 82 120 C102 122 116 102 110 82 C120 70 118 46 104 40 C100 22 74 18 60 30Z" fill="${c}" stroke="#C9677F" stroke-width="2"/><path d="M60 32 V122" stroke="#C9677F" stroke-width="2" opacity=".7"/><path d="M22 52 q10 -8 18 0 q8 8 16 -2 M98 52 q-10 -8 -18 0 q-8 8 -16 -2 M14 96 q8 -6 14 2 M106 96 q-8 -6 -14 2" stroke="#C9677F" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/><path d="M20 46 C24 36 32 32 40 32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>` },
    /* نورون: جسم سلولی با دندریت‌ها و آکسون */
    neuron: { fy: 76, top: 34, body: c => `<path d="M60 112 V146 M60 146 l-10 6 M60 146 l10 6" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round" fill="none"/>${[[24, 40], [96, 40], [10, 84], [110, 84], [40, 22], [80, 22]].map(p => `<path d="M60 76 L${p[0]} ${p[1]}" stroke="#6C4FD0" stroke-width="5" stroke-linecap="round"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#6C4FD0"/>`).join('')}<circle cx="60" cy="78" r="38" fill="${c}" stroke="#6C4FD0" stroke-width="2.5"/><ellipse cx="44" cy="62" rx="9" ry="6" transform="rotate(-30 44 62)" fill="#fff" opacity=".45"/>` },
    /* صاعقه: تکانه عصبی */
    bolt: { fy: 74, top: 22, body: c => `<path d="M74 10 L22 86 H56 L42 146 L100 60 H66 L84 10Z" fill="${c}" stroke="#C99A1D" stroke-width="3" stroke-linejoin="round"/><path d="M70 18 L36 70" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".5"/>` },
    /* میکروفون: حنجره و صدا */
    mic: { fy: 70, top: 16, body: c => `<rect x="52" y="112" width="16" height="26" rx="5" fill="#77868E"/><rect x="34" y="134" width="52" height="10" rx="5" fill="#9AA9B1"/><path d="M28 74 C28 104 92 104 92 74" stroke="#77868E" stroke-width="5" fill="none"/><rect x="26" y="16" width="68" height="96" rx="34" fill="${c}"/>${[34, 46, 58].map(y => `<path d="M34 ${y} h52" stroke="#fff" stroke-width="2" opacity=".35"/>`).join('')}<path d="M38 40 q4 -14 16 -18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/>` },
    /* وزنه کتل‌بل */
    kettle: { fy: 98, top: 22, body: c => `<path d="M36 54 C30 20 90 20 84 54" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/><path d="M36 54 C30 20 90 20 84 54" stroke="#000" stroke-opacity=".18" stroke-width="13" fill="none" stroke-linecap="round"/><circle cx="60" cy="96" r="46" fill="${c}"/><ellipse cx="38" cy="76" rx="8" ry="12" transform="rotate(30 38 76)" fill="#fff" opacity=".35"/>` },
    tooth: { fy: 68, top: 22, body: c => `<path d="M22 48 C22 24 44 18 60 28 C76 18 98 24 98 48 C98 72 92 86 90 106 C88 130 82 142 75 142 C66 142 66 118 60 118 C54 118 54 142 45 142 C38 142 32 130 30 106 C28 86 22 72 22 48Z" fill="${c}" stroke="#E2D2B8" stroke-width="3"/><ellipse cx="38" cy="44" rx="6" ry="10" transform="rotate(25 38 44)" fill="#fff" opacity=".8"/>` },
    carrot: { fy: 68, top: 34, body: c => `<path d="M18 46 C38 32 82 32 102 46 C100 82 76 122 63 144 C60 148 57 148 55 144 C42 122 20 82 18 46Z" fill="${c}"/><path d="M36 82 h12 M72 96 h10 M50 116 h9" stroke="#000" stroke-opacity=".15" stroke-width="3" stroke-linecap="round"/>` },
    /* دینامومتر دستی با صفحه */
    dyna: { fy: 64, top: 16, body: c => `<rect x="44" y="96" width="32" height="48" rx="10" fill="#77868E"/><rect x="30" y="110" width="60" height="11" rx="5" fill="#B7C2C8"/><circle cx="60" cy="62" r="48" fill="${c}"/><circle cx="60" cy="62" r="38" fill="#fff"/><path d="M60 26 v6 M94 62 h-6 M26 62 h6 M84 38 l-4 4 M36 38 l4 4" stroke="#9AA9B1" stroke-width="3" stroke-linecap="round"/>` }
  };

  /* ---------- لوازم ---------- */
  const BEHIND = {
    cape: () => `<path d="M24 72 Q6 124 16 146 L104 146 Q114 124 96 72 Z" fill="#1F9E8F"/><path d="M60 80 L60 146" stroke="#137568" stroke-width="3"/>`,
    halo: (s) => `<ellipse cx="60" cy="${s.top - 16}" rx="26" ry="7" fill="none" stroke="#FFC800" stroke-width="5"/>`
  };
  const FRONT = {
    sparkle: () => ['M18 36 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z', 'M102 110 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z', 'M14 126 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z'].map(d => `<path d="${d}" fill="#FFC800"/>`).join(''),
    headband: s => `<path d="M20 ${s.fy - 22} Q60 ${s.fy - 38} 100 ${s.fy - 22}" stroke="#FF6B57" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M100 ${s.fy - 22} q10 4 14 14 M100 ${s.fy - 22} q12 -2 18 6" stroke="#FF6B57" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    crown: s => { const y = s.top + 6; return `<path d="M38 ${y} L38 ${y - 18} L49 ${y - 8} L60 ${y - 26} L71 ${y - 8} L82 ${y - 18} L82 ${y} Z" fill="#FFC800" stroke="#E5A500" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="${y - 7}" r="4" fill="#E8455A"/>`; },
    glasses: s => `<g stroke="#3b1f0e" stroke-width="3.5" fill="#fff" fill-opacity=".25"><circle cx="46" cy="${s.fy}" r="13"/><circle cx="74" cy="${s.fy}" r="13"/></g><path d="M59 ${s.fy} h2" stroke="#3b1f0e" stroke-width="3.5"/>`,
    helmet: s => `<path d="M28 ${s.top + 22} Q60 ${s.top - 22} 92 ${s.top + 22} Z" fill="#9AA9B1" stroke="#77868E" stroke-width="3"/><path d="M60 ${s.top - 2} q-4 -22 14 -28" stroke="#E8455A" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    wizard: s => { const y = s.top + 26; return `<path d="M60 ${y - 60} L92 ${y} H28 Z" fill="#4B2FA0"/><ellipse cx="60" cy="${y}" rx="40" ry="8" fill="#3A2380"/><path d="M58 ${y - 34} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z M70 ${y - 16} l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#FFC800"/><line x1="100" y1="132" x2="114" y2="96" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><path d="M114 84 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#FFC800"/>`; },
    antenna: s => `<path d="M46 ${s.top + 6} q-6 -18 -16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="29" cy="${s.top - 17}" r="6" fill="#58CC02"/><path d="M74 ${s.top + 6} q6 -18 16 -22" stroke="#CC7800" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="91" cy="${s.top - 17}" r="6" fill="#58CC02"/>`,
    stem: () => `<path d="M60 50 q2 -12 10 -16" stroke="#6b4a12" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M68 36 q14 -10 24 -2 q-12 8 -24 2z" fill="#58CC02"/>`,
    leaves: () => `<path d="M57 38 q-16 -18 -8 -30 q12 10 8 30z M63 38 q2 -24 16 -30 q2 16 -16 30z M60 38 q-3 -26 1 -36 q7 14 -1 36z" fill="#58CC02"/>`,
    pacifier: s => `<rect x="46" y="${s.fy + 14}" width="28" height="12" rx="6" fill="#8FA0FF"/><circle cx="60" cy="${s.fy + 20}" r="7" fill="#5B6CF0" stroke="#fff" stroke-width="2"/>`
  };

  /* ---------- چهره ---------- */
  function face(m, cx, cy) {
    const ink = '#3b1f0e';
    const eyes = m === 'cheer'
      ? `<path d="M${cx - 21} ${cy + 2} Q${cx - 14} ${cy - 8} ${cx - 7} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M${cx + 7} ${cy + 2} Q${cx + 14} ${cy - 8} ${cx + 21} ${cy + 2}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`
      : `<g class="yona-eyes"><ellipse cx="${cx - 14}" cy="${cy}" rx="8" ry="10" fill="#fff"/><ellipse cx="${cx + 14}" cy="${cy}" rx="8" ry="10" fill="#fff"/><circle cx="${cx - 13}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.5" fill="#1d1d1d"/><circle cx="${cx + 15}" cy="${cy + (m === 'think' ? -3 : 2)}" r="4.5" fill="#1d1d1d"/><circle cx="${cx - 11}" cy="${cy - 1}" r="1.6" fill="#fff"/><circle cx="${cx + 17}" cy="${cy - 1}" r="1.6" fill="#fff"/></g>`;
    const my = cy + 18;
    const mouth = {
      happy: `<path d="M${cx - 12} ${my} Q${cx} ${my + 12} ${cx + 12} ${my}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cheer: `<path d="M${cx - 14} ${my - 2} Q${cx} ${my + 20} ${cx + 14} ${my - 2} Z" fill="${ink}"/><path d="M${cx - 7} ${my + 7} Q${cx} ${my + 12} ${cx + 7} ${my + 7}" fill="#ff7a9a"/>`,
      sad: `<path d="M${cx - 11} ${my + 8} Q${cx} ${my - 2} ${cx + 11} ${my + 8}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wow: `<ellipse cx="${cx}" cy="${my + 3}" rx="6" ry="8" fill="${ink}"/>`,
      think: `<path d="M${cx - 10} ${my + 4} L${cx + 10} ${my + 1}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`
    }[m] || '';
    const blush = `<ellipse cx="${cx - 26}" cy="${cy + 14}" rx="6" ry="3.5" fill="#ff7a9a" opacity=".5"/><ellipse cx="${cx + 26}" cy="${cy + 14}" rx="6" ry="3.5" fill="#ff7a9a" opacity=".5"/>`;
    return eyes + blush + mouth;
  }

  const FACE_X = {};
  function draw(c, mood, size, locked) {
    const s = SHAPES[c.shape];
    const m = mood || 'happy';
    const behind = c.acc.filter(a => BEHIND[a]).map(a => BEHIND[a](s)).join('');
    const rest = c.acc.filter(a => FRONT[a]).map(a => FRONT[a](s)).join('');
    const sz = size || 120;
    return `<svg class="char yona--${m}${locked ? ' char--locked' : ''}" viewBox="0 0 120 150" width="${sz}" height="${sz * 1.25}" aria-hidden="true">
      <ellipse cx="60" cy="146" rx="32" ry="4" fill="currentColor" opacity=".12"/>
      <g class="yona-body">${behind}${s.body(c.color)}${face(m, FACE_X[c.shape] || 60, s.fy)}${rest}</g>
    </svg>`;
  }

  /* ---------- پیشرفت ---------- */
  const per = () => EA.PER_LEVEL || 3;
  function levelLessons(w, lv) { return w.lessons.slice(lv * per(), lv * per() + per()); }
  function levelDone(w, lv, s) { const ls = levelLessons(w, lv); return ls.length > 0 && ls.every(l => s.done[l.id]); }
  function levelOfLesson(w, lid) { return Math.floor(w.lessons.findIndex(l => l.id === lid) / per()); }
  /** کاراکترهایی که تازه باز شده‌اند را ثبت می‌کند و برمی‌گرداند */
  function check(s) {
    s.chars = s.chars || {};
    const got = [];
    CHARS.forEach(c => {
      const w = EA.worlds.find(x => x.id === c.w);
      if (!s.chars[c.id] && w && levelDone(w, c.lv, s)) { s.chars[c.id] = Date.now(); got.push(c); }
    });
    return got;
  }
  const byId = id => CHARS.find(c => c.id === id);
  const forLevel = (wid, lv) => CHARS.find(c => c.w === wid && c.lv === lv);

  EA.chars = { list: CHARS, draw, byId, forLevel, check, levelDone, levelLessons, levelOfLesson };
  if (typeof module !== 'undefined') module.exports = EA;
})(typeof window !== 'undefined' ? window : globalThis);
/*<<PV-DATA>>*/
/* نورو — راند بالینی: پرونده‌های چندمرحله‌ای
 * کیس‌ها از مطالعات موردی و تمرین‌های فایل‌های پیوست آمده‌اند: Case Study ویلیام (Spinal Cord Injury)، Case Study 7-1 (CVA)، Case Study 7-2
 * (Neuroleptic Malignant Syndrome)، Exercise 7-9 (ER record)، Discharge Summary و Consultation Report و Case Study خانم Anna Moore (Fremgen)،
 * Chart Note سکته (Gylys) و سناریوهای APPLY (Robert Jones، Gina Jones، Jose Gutierrez، Josie Martin، Amy Shine، April Johnson، Jaime Shew،
 * Randy Allen و یادداشت Mr. Jones).
 * گزینه اول هر سؤال درست است و در اجرا به‌هم می‌ریزد. */
(function (root) {
  const EA = root.EA;
  const M = (stage, q, opts, why, kase, fig) => ({ t: 'mcq', stage, q, opts, why, case: kase, fig });
  const T = (stage, q, a, why, fig) => ({ t: 'tf', stage, q, a, why, fig });
  const O = (stage, q, steps, why) => ({ t: 'order', stage, q, steps, why });
  const P = (stage, q, pairs, why) => ({ t: 'match', stage, q, pairs, why });
  const S = (stage, q, ans, why, hint) => ({ t: 'spell', stage, q, ans: [].concat(ans), why, hint });

  EA.rounds = [
    /* ================= زبان عصب ================= */
    {
      id: 'r1', w: 'lx', title: "Jumbled speech and right-sided weakness", who: "J.D., an 85-year-old woman",
      brief: "J.D. has come to the emergency department because she can hardly speak. Her daughter says her speech has been jumbled for a few days and she answers every question with just “How do you do?”. This has happened before and got better. This morning she woke up with weakness on the right side of her body. Assessment: probable history of TIA; now a CVA with dysphasia and right hemiparesis.",
      chart: [['CC', 'mental status changes, aphasia'], ['Hx', 'probable TIA'], ['Assessment', 'CVA with dysphasia and right hemiparesis']],
      fig: { a: 'stroke-types', l: [] },
      steps: [
        M("abbreviation", "TIA means…", ["mini-stroke", "traumatic brain injury", "a completed stroke", "intracranial pressure"], 'transient ischemic attack.'),
        M("abbreviation", "CVA means…", ["stroke", "heart vessel disease", "spinal cord injury", "cerebrospinal fluid"], 'cerebrovascular accident.'),
        P("Term", "Break down dysphasia: match each piece to its meaning", [['dys-', "difficult"], ['-phasia', "speech"], ['hemi-', "half"], ['-paresis', "weakness"]], 'Exercise 7-9.'),
        M("Difference", "What is the difference between hemiparesis and hemiplegia?", ["the first is weakness of half the body and the second is complete paralysis of it", "they are the same", "the first is paralysis of both legs", "the second occurs only in children"], "-paresis is weakness and -plegia is paralysis."),
        T("side", "Right-sided weakness means the left hemisphere of the brain has probably been damaged.", true, "Crossed control."),
        S("Spelling", "Write the term for one-sided weakness of the body", 'hemiparesis', 'hemi- + -paresis.', 'hemip…')
      ]
    },
    {
      id: 'r2', w: 'lx', title: "An emergency note full of abbreviations", who: 'Mr. Jones',
      brief: "The doctor’s note: “Mr. Jones presents to the emergency department after a motor vehicle accident. Experienced TIA last week; may now have a CVA. Will evaluate for SCI and get MRI, MRA, and EEG. Concerned ICP is elevated. May have a CSF leak.” You need to rewrite it in full words.",
      chart: [['ED', 'motor vehicle accident'], ['Hx', 'TIA last week'], ['Plan', 'MRI, MRA, EEG; evaluate SCI'], ['Concern', 'elevated ICP; CSF leak']],
      fig: { a: 'brain-imaging', l: [] },
      steps: [
        P("abbreviation", "Match each abbreviation to its meaning", [['SCI', "spinal cord injury"], ['ICP', "intracranial pressure"], ['CSF', "cerebrospinal fluid"], ['ED', "emergency department"]], "Mr Jones’s note."),
        P("Test", "Match each test to its job", [['MRI', "soft tissue image"], ['MRA', "image of the vessels"], ['EEG', "brain electricity"], ['CT', "quick image of bleeding"]], "The tests ordered."),
        M("Meaning", "“Concerned ICP is elevated” means…", ["the doctor is worried that the pressure inside the skull is high", "the blood pressure is low", "the spinal fluid has decreased", "a stroke has been ruled out"], 'intracranial pressure.'),
        M("Meaning", "CSF leak means…", ["leak of cerebrospinal fluid", "brain haemorrhage", "seizure", "inflammation of the meninges"], "leak = escape of fluid."),
        T("history of", "A TIA last week raises the risk of a completed stroke (CVA).", true, "A TIA is a warning."),
        S("Spelling", "Spell the adjective for the blood vessels of the brain", 'cerebrovascular', 'cerebr/o + vascul/o + -ar.', 'cerebro…')
      ]
    },
    /* ================= مغز و نخاع ================= */
    {
      id: 'r3', w: 'cn', title: "Head injury and difficulty reading", who: 'Mr. Robert Jones',
      brief: "Mr Robert Jones has had a head injury. He can barely read and is easily distracted. You need to say which part of the brain has probably been injured and what other signs you might see.",
      chart: [['Injury', 'head injury'], ['Sx', 'difficulty reading, easily distracted']],
      fig: { a: 'brain-functions', l: [] },
      steps: [
        M("lobe", "Difficulty reading (interpreting images) relates mostly to which lobe?", ['occipital', 'temporal', 'parietal', 'cerebellum'], "The centre of vision.", null, { a: ['brain-lobes'], l: [] }),
        M("lobe", "Distractibility and problems with concentration and planning relate mostly to which lobe?", ['frontal', 'occipital', 'medulla', 'pons'], "The frontal lobe."),
        P("Function", "Match each lobe to its job", [['occipital', "vision"], ['frontal', "concentration and personality"], ['temporal', "hearing"], ['parietal', "touch and pain"]], "The four lobes."),
        M("symptom", "Which other sign is also seen in frontal lobe injury?", ["a change in personality", "double vision only", "complete deafness", "paralysis of the legs"], "Personality and behaviour."),
        T("Test", "To look for structural brain damage after a blow, CT or MRI is appropriate.", true, "Imaging."),
        S("Spelling", "Spell the name of the lobe at the back of the head", 'occipital', "occipit = back of the head.", 'occip…')
      ]
    },
    {
      id: 'r4', w: 'cn', title: "A fall from the slide", who: "Josie Martin, a 9-year-old girl",
      brief: "Josie fell from a 14-foot slide during break time. The children say she was “asleep” for a few moments after the fall. She is awake now but looks tired.",
      chart: [['Event', 'fall from 14-foot slide'], ['LOC', 'brief'], ['Now', 'awake, tired']],
      fig: { a: 'meninges', l: [] },
      steps: [
        M("Decision", "Should Josie see a doctor?", ["yes; loss of consciousness after a head injury is serious", "no; she has woken up", "only if she cries", "only tomorrow"], "Assessing for concussion."),
        M("diagnosis", "What is a temporary brain dysfunction after a blow called?", ['concussion', 'contusion', 'aneurysm', 'meningioma'], "Concussion."),
        M("danger", "Why is tiredness after a blow worrying?", ["it may be a sign of bleeding and rising ICP", "it is a sign of lack of sleep", "it is a sign of hunger", "it is always normal"], "An epidural or subdural haematoma."),
        P("Term", "Match each term to its meaning", [['LOC', "loss of consciousness"], ['lethargy', "sluggishness"], ['epidural hematoma', "blood on the dura"], ['GCS', "consciousness scale"]], "Head injury."),
        T("Protection", "The skull, meninges and CSF protect the brain from blows.", true, "Protective layers."),
        S("Spelling", "Spell the term for a temporary brain dysfunction after a blow", 'concussion', "Two s’s.", 'concu…')
      ]
    },
    {
      id: 'r5', w: 'cn', title: "A mass in the cortex of the right hemisphere", who: "A 38-year-old woman",
      brief: "Pearson Hospital consultation report: the patient was referred to a “specialist in diseases of the nervous system”; she has “difficulty speaking”, “loss of movement on one side of the body” and “severe involuntary muscle contractions”. “Recording of the brain’s electrical activity” and “a needle puncture in the lower back to withdraw fluid” were normal; but “an injection of radioactive isotopes” showed a mass in the “outer layer of the largest part of the brain” on the right. The diagnosis was an “astrocyte tumour”; it was treated with a “skull incision” and “extreme cold”.",
      chart: [['CC', 'speech difficulty, one-sided weakness, seizures'], ['EEG, LP', 'normal'], ['Scan', 'mass in right cerebral cortex'], ['Tx', 'craniotomy, cryosurgery']],
      fig: { a: 'craniotomy', l: [] },
      steps: [
        P("Term", "Match each phrase to its medical term", [["specialist of the nervous system", 'neurologist'], ["difficulty speaking", 'aphasia'], ["loss of movement on one side", 'hemiplegia'], ["severe involuntary contraction", 'seizure']], 'Chart Note Transcription.'),
        P("Method", "Match each procedure to its term", [["recording brain electricity", 'electroencephalography'], ["drawing fluid from the lower back", 'lumbar puncture'], ["isotope injection", 'PET scan'], ["extreme cold", 'cryosurgery']], "The methods."),
        M("Location", "“The outer layer of the largest part of the brain” means…", ['cerebral cortex', 'cerebellum', 'medulla', 'dura mater'], "The cerebral cortex.", null, { a: ['brain-lobes'], l: [] }),
        M("diagnosis", "What is an “astrocyte tumour” called?", ['astrocytoma', 'meningioma', 'neuroma', 'glioblastoma'], 'astro + cyt + oma.', null, { a: ['ct-tumor'], l: [] }),
        T("side", "The mass is in the right hemisphere and the patient’s weakness was in the left limbs.", true, "Crossed control."),
        S("Spelling", "Write the term for a surgical incision into the skull", 'craniotomy', 'crani/o + -tomy.', 'cranio…')
      ]
    },
    /* ================= اعصاب محیطی و خودکار ================= */
    {
      id: 'r6', w: 'pn', title: "Afferent and efferent class", who: "Nursing students",
      brief: "You have been asked to explain to a class the difference between afferent and efferent neurons and to show it with an example such as touching a hot stove.",
      chart: [['Topic', 'afferent vs efferent neurons'], ['Example', 'touching a hot stove']],
      fig: { a: 'afferent-efferent', l: [] },
      steps: [
        M("Definition", "What does an afferent neuron do?", ["it carries the sensory message towards the CNS", "it carries the command to the muscle", "it connects two neurons in the CNS", "it makes myelin"], "af- = towards."),
        M("Definition", "What does an efferent neuron do?", ["it carries the motor command from the CNS to the muscle", "it carries sensation to the brain", "It makes CSF", "it senses pain"], "ef- = away from."),
        O("Example", "Put the path of pulling the hand away from a hot stove in order", ['heat stimulus', 'receptor in skin', 'afferent neuron', 'spinal cord', 'efferent neuron', 'arm muscle contracts'], "The reflex arc."),
        P("Term", "Match each term to its meaning", [['afferent', "sensory, towards the CNS"], ['efferent', "motor, away from the CNS"], ['interneuron', "connector within the CNS"], ['effector', "muscle or gland"]], "Neurons."),
        T("Reflex", "When pulling the hand away, the message may turn back at the spinal cord before reaching the brain.", true, "A spinal reflex.", { a: ['reflex-arc'], l: [] }),
        S("Spelling", "Spell the term for neurons that carry signals towards the CNS", 'afferent', "af- = towards.", 'affe…')
      ]
    },
    {
      id: 'r7', w: 'pn', title: "nerve damage in the foot", who: 'Mr. Randy Allen',
      brief: "Three years ago, Mr Allen injured the nerves of his leg in a car accident. A neurosurgeon operated to repair the nerves, with partial success. After physiotherapy, his walking improved.",
      chart: [['Injury', 'leg nerve damage (MVA)'], ['Tx', 'nerve surgery; physical therapy'], ['Result', 'improved walking']],
      fig: { a: 'spinal-levels', l: [] },
      steps: [
        M("Assessment", "Where else could the leg nerve injury come from that the surgeon should check?", ["the lumbosacral nerve roots and the sciatic nerve", "the cranial nerves", "vagus nerve", "the cervical spinal cord only"], "The path of the leg nerves."),
        M("nerve", "Which is the largest nerve of the leg?", ['sciatic nerve', 'femoral vein', 'vagus nerve', 'optic nerve'], "The sciatic nerve."),
        P("surgery", "Match each nerve operation to its meaning", [['neurorrhaphy', "nerve suture"], ['neuroplasty', "nerve repair"], ['neurolysis', "freeing a nerve"], ['neurectomy', "removal of a nerve"]], "Nerve surgery."),
        M("treatment", "Why was physiotherapy prescribed for him?", ["to restore muscle strength and walking", "to treat an infection", "for better sleep", "to lower blood pressure"], 'PT.'),
        T("specialist", "A neurosurgeon operates on the brain, spinal cord and nerves.", true, "A nerve surgeon."),
        S("Spelling", "Spell the term for a surgeon of the brain, spinal cord and nerves", 'neurosurgeon', 'neur/o + surgeon.', 'neurosu…')
      ]
    },
    {
      id: 'r8', w: 'pn', title: "Diving into a shallow pool", who: "William, a 12-year-old boy",
      brief: "At a birthday party, William dived head first into a shallow concrete pool. He complains of (c/o) severe head and neck pain; his arms move slightly and he cannot move his legs. His blood pressure was low and his heart rate slow. His legs were flaccid and his toes did not move. Diagnosis: a burst fracture of the C6 vertebra that may lead to quadriplegia.",
      chart: [['c/o', 'severe head and neck pain'], ['VS', 'hypotensive, bradycardic'], ['Dx', 'burst fracture of C6'], ['Risk', 'quadriplegia']],
      fig: { a: 'paralysis-types', l: [] },
      steps: [
        M("Level", "Which vertebra is C6?", ["the sixth cervical vertebra", "the sixth thoracic vertebra", "the sixth cranial nerve", "the sixth lumbar vertebra"], 'C = cervical.', null, { a: ['spinal-levels'], l: [] }),
        M("paralysis", "What paralysis can a cervical spinal cord injury cause?", ['quadriplegia', 'monoplegia', 'hemiplegia', 'Bell palsy'], "All four limbs."),
        P("Term", "Match each chart term to its meaning", [['hypotensive', "low blood pressure"], ['bradycardic', "slow beat"], ['flaccid', "floppy, without tone"], ['c/o', "complains of"]], "William’s record."),
        P("Team", "Match each team member to their job", [['neurosurgeon', "spine surgery"], ['neurologist', "nerve disease"], ['PM&R specialist', "rehabilitation"], ['psychologist', "psychological counselling"]], "The care team."),
        T("mind", "During rehabilitation, William received counselling for depression and anxiety.", true, 'Case Study Revisited.'),
        S("Spelling", "Spell the term for paralysis of all four limbs", 'quadriplegia', 'quadri- + -plegia.', 'quadri…')
      ]
    },
    /* ================= نشانه‌ها و بیماری‌ها ================= */
    {
      id: 'r9', w: 'ds', title: "Acute ischaemic stroke", who: "Allen, a 62-year-old man",
      brief: "Allen came to the ED with right hemiplegia and aphasia. He has a history of high blood pressure and recent TIAs. He arrived by ambulance 15 minutes after the right-sided weakness began. A rapid assessment and neurological examination with the GCS were done. A CT without contrast showed no intracerebral or subarachnoid bleeding. Diagnosis: probable acute ischemic stroke, with fibrinolytic treatment. He was monitored in the NICU for 48 hours and discharged with a prognosis of full recovery.",
      chart: [['CC', 'right hemiplegia, aphasia'], ['Hx', 'hypertension, recent TIAs'], ['CT', 'no hemorrhage'], ['Tx', 'fibrinolytic therapy; NICU 48 h']],
      fig: { a: 'stroke-types', l: [] },
      steps: [
        M("Cause", "What usually causes an ischaemic stroke?", ['thrombosis', 'hemorrhage', 'hematoma', 'hemangioma'], 'Case Study 7-1.'),
        M("treatment", "What is the aim of fibrinolytic treatment?", ["dissolving a clot", "stabilising blood cells", "destruction of red blood cells", "stimulating clotting"], 'fibrin + -lytic.'),
        P("Term", "Match each meaning to the term in the record", [["lack of blood supply", 'ischemic'], ["inflammation of the meninges", 'meningitis'], ["blood beneath the dura", 'subdural hematoma'], ["inability to speak", 'aphasia']], 'Case Study 7-1.'),
        P("abbreviation", "Match each abbreviation to its meaning", [['GCS', "Glasgow Coma Scale"], ['NICU', "neurological intensive care"], ['CT', "CT scan"], ['TIA', "mini-stroke"]], 'Case Study 7-1.'),
        M("Term", "Which is the general term for any disorder of brain tissue?", ['encephalopathy', 'neurocytoma', 'dysencephaloma', 'psychosomatic'], 'encephal/o + -pathy.', null, { a: ['ct-hemorrhage'], l: [] }),
        S("Spelling", "Spell the adjective for a lack of blood supply", 'ischemic', 'isch/o + -emic.', 'isch…')
      ]
    },
    {
      id: 'r10', w: 'ds', title: "Middle cerebral artery stroke", who: "Anna Moore, an 83-year-old woman",
      brief: "Mrs Moore came to the ER with aphasia, left-sided hemiparesis, syncope and delirium. Her daughter found her like this at home. She has a history of hypertension, atherosclerosis and diabetes mellitus. A brain scan showed an infarct in the right hemisphere of the brain: a CVA in the middle cerebral artery.",
      chart: [['Sx', 'aphasia, L hemiparesis, syncope, delirium'], ['Hx', 'HTN, atherosclerosis, DM'], ['Scan', 'infarct, right cerebral hemisphere'], ['Dx', 'CVA, middle cerebral artery']],
      fig: { a: 'elderly-woman', l: [] },
      steps: [
        P("symptom", "Match each sign to its meaning", [['aphasia', "inability to speak"], ['hemiparesis', "weakness of one side of the body"], ['syncope', "fainting"], ['delirium', "acute mental confusion"]], "Case Study in Fremgen’s book."),
        M("Term", "infarct means…", ["dead tissue caused by a cut-off blood supply", "tumour", "inflammation", "bleeding"], "Tissue death."),
        M("history of", "atherosclerosis means…", ["hardening and narrowing of the arteries with plaque", "diabetes", "low blood pressure", "brain inflammation"], "The groundwork for a stroke."),
        T("side", "An infarct of the right hemisphere fits with weakness of the left side of the body.", true, "Crossed control."),
        O("Causes", "Put the four common causes of CVA from the book in this order", ['cerebral hemorrhage', 'cerebral embolism', 'cerebral thrombosis', 'compression by a tumor'], "Figure 12-10 in Fremgen’s book."),
        S("Spelling", "Spell the term for an area of dead tissue from lost blood supply", 'infarct', "Dead tissue.", 'infa…')
      ]
    },
    {
      id: 'r11', w: 'ds', title: "A seizure on the ward", who: 'Mrs. April Johnson',
      brief: "Mrs April Johnson is having a seizure. You need to know what to observe and record, and why an exact description of the seizure matters.",
      chart: [['Event', 'seizure in progress'], ['Task', 'observe and document']],
      fig: { a: 'seizure-types', l: [] },
      steps: [
        M("inspection", "What should you record during a seizure?", ["the time of onset, duration, body movements and level of consciousness", "only the colour of the patient’s clothes", "only the morning blood pressure", "nothing; just wait"], "A full description."),
        M("Importance", "Why does an exact description matter?", ["it identifies the type of seizure and the treatment", "it is enough to fill in the record", "it is needed for insurance", "it does not matter"], "Diagnosing the type of epilepsy."),
        P("Type", "Match each type to its feature", [['tonic-clonic', "stiffening then jerking"], ['absence', "brief staring"], ['aura', "warning sign"], ['postictal', "drowsiness after the seizure"]], "Seizures."),
        M("drug", "Which drug prevents seizures?", ['anticonvulsant', 'antidepressant', 'antipsychotic', 'analgesic'], "Anticonvulsant."),
        T("Test", "An EEG is used to investigate epilepsy.", true, "Irregular waves.", { a: ['eeg'], l: [] }),
        S("Spelling", "Spell the term for a sudden electrical storm in the brain", 'seizure', 'ei.', 'sei…')
      ]
    },
    {
      id: 'r12', w: 'ds', title: "Buttons that won’t fasten", who: 'Mr. Jose Gutierrez',
      brief: "Over the past few months, Mr Gutierrez has had trouble buttoning his shirt and remembering things, and he limps; his fingers are numb. He has no history of stroke, and his blood pressure has always been normal. Dr Stanley performed an EEG, blood tests and several reflex tests and confirmed Parkinson disease. He asked the patient to record his walking, vision, speech and tremor every day for three weeks.",
      chart: [['Sx', 'trouble buttoning, memory problems, limp, numb fingers'], ['Hx', 'no CVA; normal BP'], ['Tests', 'EEG, blood tests, reflex tests'], ['Dx', 'Parkinson disease']],
      fig: { a: 'degenerative', l: [] },
      steps: [
        M("Cause", "A shortage of which transmitter causes Parkinson’s?", ['dopamine', 'serotonin', 'insulin', 'acetylcholine'], "Dopamine."),
        M("recording", "Why did the doctor ask the patient to record his symptoms for three weeks?", ["to see the course of the disease and the effect of the medicines", "to keep the patient busy", "for insurance", "to diagnose a stroke"], "Monitoring the response to treatment."),
        P("symptom", "Match each sign to its meaning", [['tremor', "involuntary trembling"], ['limp', "limping"], ['numbness', "Numbing"], ['rigidity', "hardening"]], "Signs."),
        M("Test", "What does the EEG examine in this patient?", ["the electrical activity of the brain", "blood flow in the legs", "blood sugar", "CSF pressure"], 'electroencephalogram.'),
        T("Ruled out", "His normal blood pressure made a stroke less likely.", true, "The doctor suspected another disease."),
        S("Spelling", "Spell the term for involuntary trembling", 'tremor', "Involuntary trembling.", 'trem…')
      ]
    },
    {
      id: 'r13', w: 'ds', title: "A positive genetic test", who: "Mrs Amy Shine, 49",
      brief: "Mrs Shine has tested positive for Huntington chorea. She asks the nurse what symptoms she will develop and what she can do to stop the disease progressing.",
      chart: [['Test', 'positive for Huntington chorea'], ['Q', 'symptoms and prevention']],
      fig: { a: 'degenerative', l: [] },
      steps: [
        M("Type", "What kind of disease is Huntington chorea?", ["hereditary and degenerative", "infectious", "caused by injury", "stroke"], "Genetic."),
        M("symptom", "chorea means…", ["involuntary dance-like movements", "tremor at rest", "complete paralysis", "headache"], "chorea = dance."),
        M("Answer", "Which is the nurse’s correct answer about the progression of the disease?", ["there is no cure; treating symptoms and support help", "exercise prevents it completely", "it is treated with antibiotics", "no follow-up is needed"], "Progressive."),
        P("Term", "Match each term to its meaning", [['chorea', "dance-like movements"], ['dementia', "progressive loss of memory and thinking"], ['degenerative', "gradually wearing away"], ['hereditary', "inherited"]], 'Huntington.'),
        T("Course", "Dementia can also develop in Huntington chorea.", true, "Motor and mental."),
        S("Spelling", "Spell the term for involuntary dance-like movements", 'chorea', "ch sounds like k.", 'chor…')
      ]
    },
    {
      id: 'r14', w: 'ds', title: "Viral meningitis", who: 'Jaime Shew',
      brief: "The doctor tells Jaime’s family that he has viral meningitis and his symptoms will settle in a few days. You need to explain what this disease is, what signs it has and how it is treated.",
      chart: [['Dx', 'viral meningitis'], ['Prognosis', 'improves in a few days']],
      fig: { a: 'meninges', l: [] },
      steps: [
        M("Definition", "viral meningitis means…", ["viral inflammation of the membranes of the brain and spinal cord", "a tumour of the meninges", "inflammation of the facial nerve", "brain haemorrhage"], 'mening/o + -itis.'),
        M("symptom", "Which group of signs is common in meningitis?", ["fever, headache and stiff neck", "double vision and tremor", "paralysis of one leg", "itchy skin"], "The classic triad."),
        M("treatment", "How is viral meningitis usually treated?", ["rest, fluids and painkillers", "emergency surgery", "electroconvulsive therapy", "a VP shunt"], "Supportive treatment."),
        M("Test", "Which test examines the CSF to diagnose meningitis?", ['lumbar puncture', 'EMG', 'carotid ultrasound', 'PET scan'], 'LP.', null, { a: ['lumbar-puncture'], l: [] }),
        P("Term", "Match each term to its meaning", [['meninges', "membranes of the brain"], ['viral', "caused by a virus"], ['cephalalgia', "headache"], ['CSF', "cerebrospinal fluid"]], "Meningitis."),
        S("Spelling", "Write the term for inflammation of the brain and spinal cord membranes", 'meningitis', 'mening/o + -itis.', 'mening…')
      ]
    },
    /* ================= سلامت روان ================= */
    {
      id: 'r15', w: 'ps', title: "A racing heart in stressful situations", who: 'Mrs. Gina Jones',
      brief: "Mrs Gina Jones has come to the clinic and says that every time she is in a stressful situation, her heart rate and breathing rate go up and she sweats. She is worried she has a mental disorder and wants medicine. How should the nurse respond?",
      chart: [['Sx', 'fast HR, fast breathing, sweating under stress'], ['Concern', 'psychological disorder?']],
      fig: { a: 'fight-flight', l: [] },
      steps: [
        M("Description", "Mrs Jones’s symptoms are the work of which system?", ['sympathetic nervous system', 'parasympathetic nervous system', 'somatic nervous system', 'cerebellum'], "Fight or flight.", null, { a: ['ans'], l: [] }),
        M("Answer", "Which is the nurse’s appropriate response?", ["this is the body’s normal response to stress; if it becomes groundless or constant, further assessment is needed", "she definitely has a mental disorder", "she must take an antipsychotic drug right away", "no explanation is needed"], "Patient education."),
        P("Term", "Match each symptom to its medical term", [["fast heart rate", 'tachycardia'], ["fast breathing", 'tachypnea'], ["profuse sweating", 'diaphoresis'], ["worry and fear", 'anxiety']], "The stress response."),
        T("Difference", "If worry is groundless, intense and lasts for months, it may be GAD.", true, "Generalised anxiety."),
        M("treatment", "Which drug-free treatment is effective for anxiety?", ['CBT', 'ECT', 'craniotomy', 'LP'], "Cognitive behavioural therapy."),
        S("Spelling", "Write the term for worry and fear with a racing heart and sweating", 'anxiety', "The x sounds like “gz”.", 'anx…')
      ]
    },
    {
      id: 'r16', w: 'ps', title: "neuroleptic malignant syndrome", who: "Jane, a 21-year-old woman",
      brief: "Jane, who has chronic paranoid schizophrenia, was admitted with a diagnosis of pneumonia. Her mother says she has been very lethargic for three days and has a fever of 104 °F and muscular rigidity. Her medicines are Haldol and Cogentin, and her psychiatrist changed her neuroleptic last week. Second diagnosis: neuroleptic malignant syndrome. The drugs were stopped, IV fluids were given and she was treated with bromocriptine and dantrolene. After 5 days she was transferred to a mental health centre, and the neuroleptic was restarted at a low dose.",
      chart: [['Hx', 'chronic paranoid schizophrenia'], ['Sx', 'lethargy, T 104°F, rigidity'], ['Dx', 'NMS'], ['Tx', 'stop drugs, IV fluids, bromocriptine, dantrolene']],
      fig: { a: 'psych-drugs', l: [] },
      steps: [
        M("Cause", "NMS is linked to taking which drug?", ["antipsychotic drugs", "steroids", "clot-dissolving drugs", "painkillers"], 'Case Study 7-2.'),
        M("Function", "Jane had symptoms in involuntary functions and in movement outside the pyramidal tract; these functions are…", ["autonomic and extrapyramidal", "autonomic and voluntary", "extrapyramidal and pyramidal", "autonomic and neuroleptic"], 'Case Study 7-2 Questions.'),
        P("Term", "Match each meaning to the term in the record", [["drowsy and sluggish", 'lethargic'], ["doctor for mental disorders", 'psychiatrist'], ["antipsychotic drug", 'neuroleptic'], ["profuse sweating", 'diaphoresis']], 'Case Study 7-2.'),
        M("drug", "What kind of drug is dantrolene?", ["a muscle relaxant and antispasmodic", "antidepressant", "a narcotic painkiller", "bacteria-killing drug"], 'muscle relaxant.'),
        T("Term", "paranoid means with a sense of threat and persecution.", true, 'paranoia.'),
        S("Spelling", "Write the name of Jane’s chronic psychotic disorder", 'schizophrenia', 'schiz/o + -phrenia.', 'schizo…')
      ]
    },
    /* ================= تشخیص و درمان ================= */
    {
      id: 'r17', w: 'tx', title: "L2 fracture and paraplegia", who: "A 23-year-old man",
      brief: "Discharge summary: after a motorcycle accident he was unconscious for 35 minutes, and on regaining consciousness he felt complete numbness and paralysis below the waist. CT showed extensive bone destruction at the fracture site and a transected spinal cord. A lumbar laminectomy with spinal fusion was performed to stabilise the fracture and remove the epidural hematoma. After two months of physiotherapy and occupational therapy he was transferred to a rehabilitation centre.",
      chart: [['Dx', 'comminuted L2 fracture, epidural hematoma, SCI'], ['Result', 'complete paraplegia at L2'], ['Op', 'lumbar laminectomy, spinal fusion'], ['Plan', 'intensive PT and OT']],
      fig: { a: 'spinal-cord', l: [] },
      steps: [
        M("paralysis", "paraplegia means…", ["paralysis of both legs and lower body", "paralysis of all four limbs", "paralysis of one arm", "weakness of one side of the body"], 'para- + -plegia.', null, { a: ['paralysis-types'], l: [] }),
        P("Term", "Match each term in the discharge summary to its meaning", [['anesthesia', "Numbing"], ['laminectomy', "removing the vertebral lamina"], ['spinal fusion', "fusing the vertebrae"], ['epidural hematoma', "blood on the dura"]], 'Medical Record Analysis.'),
        M("fracture", "comminuted fracture means…", ["a fracture crushed into several pieces", "a cracked fracture", "an open fracture", "displaced joint"], "Crushed."),
        O("Process", "Put the course of treatment in order", ['motorcycle accident', 'CT scan', 'laminectomy with spinal fusion', 'PT and OT', 'rehabilitation institute'], 'Discharge Summary.'),
        T("abbreviation", "PT means physical therapy and OT means occupational therapy.", true, 'physical / occupational therapy.'),
        S("Spelling", "Spell the term for paralysis of both legs and the lower body", 'paraplegia', 'para- + -plegia.', 'para…')
      ]
    },
    {
      id: 'r18', w: 'tx', title: "A stroke in a patient with cancer", who: "A woman admitted to Riverside Hospital",
      brief: "Chart note: the patient was admitted with a sudden stroke. Three days ago she had vertigo. Because of advanced adenocarcinoma of the head of the pancreas with liver metastases, her daughter cares for her at home. She fell to the floor, her right arm and leg became paralysed and she developed aphasia. She has no problem with deglutition. At the onset of the stroke she also had diplopia. Diagnosis: stroke, probably due to a metastatic brain lesion or cerebrovascular disease.",
      chart: [['CC', 'sudden stroke'], ['Sx', 'vertigo, R arm and leg paralysis, aphasia, diplopia'], ['Hx', 'adenocarcinoma of pancreas with liver metastasis'], ['Dx', 'stroke: metastatic lesion vs CVD']],
      fig: { a: 'brain-imaging', l: [] },
      steps: [
        P("Term", "Match each term in the note to its meaning", [['vertigo', "dizziness"], ['aphasia', "loss of language"], ['deglutition', "swallowing"], ['diplopia', "double vision"]], "Chart Note Analysis in Gylys’s book."),
        M("paralysis", "What is paralysis of the right arm and leg called?", ['right hemiplegia', 'paraplegia', 'quadriplegia', 'right monoplegia'], "One half of the body."),
        M("abbreviation", "CVD means…", ["cerebrovascular disease", "stroke", "intracranial pressure", "heart valve disease"], 'cerebrovascular disease.'),
        M("Cause", "metastatic lesion of the brain means…", ["a brain lesion that cancer has reached from elsewhere", "a primary brain tumour", "a brain abscess", "brain inflammation"], "Metastasis."),
        T("Test", "To tell a metastatic lesion from a vascular stroke, a brain CT or MRI is needed.", true, "Imaging.", { a: ['mri-coronal'], l: [] }),
        S("Spelling", "Spell the term for a spinning dizziness", 'vertigo', "Spinning dizziness.", 'verti…')
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
/*<</PV-DATA>>*/
      window.__PREVIEW_CAPTURE && window.__PREVIEW_CAPTURE(window.EA); // فقط هنگام ساخت نسخه پیش‌نمایش
/* نورو — نکته‌های کوتاه که خودبه‌خود عوض می‌شوند
 * هر بار از یک دسته برزده‌شده برداشته می‌شود تا تکراری دیده نشود. */
(function () {
  const EA = window.EA = window.EA || {};
  const TIPS = [
    ['Lx', "The nervous system has two parts: the CNS (brain and spinal cord) and the PNS (all the nerves outside them)."],
    ['Lx', "Start the meaning from the suffix: hemi/pleg/ia means “condition of paralysis of half the body”."],
    ['Lx', "neur/o is nerve, encephal/o brain, myel/o spinal cord, mening/o the brain membranes and crani/o the skull."],
    ['Lx', "myel/o means spinal cord but my/o means muscle; myelitis is different from myositis."],
    ['Lx', "-plegia is complete paralysis and -paresis is weakness or partial paralysis."],
    ['Lx', "-phasia means speech and -phagia means swallowing; aphasia and aphagia are two different things."],
    ['Lx', "A neurologist treats with medicines and examination; a neurosurgeon with surgery."],
    ['Lx', "A psychiatrist is a physician and prescribes medicines; a psychologist does psychotherapy and testing."],
    ['Lx', "The brain has about 86 billion neurons."],
    ['Cn', "The cerebrum is the largest part of the brain, and the cerebellum controls balance and coordination."],
    ['Cn', "The brainstem has three parts: the midbrain, pons and medulla oblongata."],
    ['Cn', "The medulla oblongata controls breathing and heart rate."],
    ['Cn', "The meninges from outside in: dura mater, arachnoid and pia mater."],
    ['Cn', "CSF is made in the choroid plexus of the ventricles and keeps the brain afloat."],
    ['Cn', "Broca area produces speech and Wernicke area understands it."],
    ['Cn', "Each hemisphere of the brain controls the opposite half of the body."],
    ['Cn', "In the brain the grey matter is on the outside, but in the spinal cord it is in the middle and shaped like a butterfly."],
    ['Cn', "In adults the spinal cord reaches about the L2 vertebra, and below it is the cauda equina."],
    ['Pn', "We have 12 pairs of cranial nerves and 31 pairs of spinal nerves."],
    ['Pn', "Afferent carries the message towards the CNS and efferent away from it."],
    ['Pn', "The dendrite receives the message and the axon carries it away."],
    ['Pn', "The myelin sheath is like the coating on an electric wire and makes the message faster."],
    ['Pn', "The vagus nerve (X) supplies most of the chest and abdominal organs."],
    ['Pn', "Sympathetic means “fight or flight” and parasympathetic “rest and digest”."],
    ['Pn', "A Babinski sign is normal in a baby, but in an adult it is a sign of motor neuron damage."],
    ['Pn', "Shingles (herpes zoster) causes a painful rash along one dermatome on one side of the body."],
    ['Ds', "A CVA is a stroke; either ischaemic (a clot) or haemorrhagic."],
    ['Ds', "A TIA is stroke symptoms that resolve within 24 hours; a serious warning."],
    ['Ds', "An epidural hematoma is above the dura and a subdural one is below it."],
    ['Ds', "epilepsy means recurrent seizures; -lepsy means attack."],
    ['Ds', "Parkinson’s comes from a lack of dopamine: tremor, rigidity and slow movement."],
    ['Ds', "Alzheimer’s is the most common cause of dementia."],
    ['Ds', "In MS the myelin sheath is destroyed and replaced by hard plaque."],
    ['Ds', "hydrocephalus means CSF building up in the ventricles; it is treated with a VP shunt."],
    ['Ds', "A meningocele is a protrusion of the membranes and a myelomeningocele a protrusion of the spinal cord and membranes."],
    ['Ds', "Meningitis usually shows itself with fever, headache and a stiff neck."],
    ['Ps', "A delusion is an error of belief and a hallucination an error of the senses."],
    ['Ps', "A phobia is an intense, persistent, irrational fear of something specific."],
    ['Ps', "In OCD, an obsession is a repeated thought and a compulsion a repeated act."],
    ['Ps', "Bipolar disorder means swinging between mania and depression."],
    ['Ps', "Schizophrenia does not mean split personality; it means the mind detaching from reality."],
    ['Ps', "A neuroleptic is an antipsychotic drug; NMS is a rare, dangerous reaction to it."],
    ['Ps', "SSRIs keep more serotonin in the synapse and ease depression."],
    ['Ps', "Delirium is sudden and temporary, but dementia is gradual and progressive."],
    ['Tx', "The GCS runs from 3 to 15; 8 or less means severe injury."],
    ['Tx', "EEG records the electricity of the brain and EMG that of muscle."],
    ['Tx', "A lumbar puncture is usually done between L3 and L4, below the end of the spinal cord."],
    ['Tx', "CT shows bleeding quickly and MRI shows soft tissue detail."],
    ['Tx', "A craniotomy is an incision into the skull and a craniectomy removal of part of it."],
    ['Tx', "laminectomy means removing the vertebral lamina to relieve pressure on the spinal cord."],
    ['Tx', "-rrhaphy means suture; neurorrhaphy is suturing a nerve."],
    ['Tx', "An analgesic reduces pain and an anesthetic removes sensation."],
    ['Tx', "PT restores strength and walking and OT restores everyday tasks."]
  ];
  const COLORS = { Lx: '#6C4FD0', Cn: '#E0708C', Pn: '#E89A1E', Ds: '#D9534F', Ps: '#17A398', Tx: '#3D6FD6', '': '#6C4FD0' };
  let deck = [];
  function next() {
    if (!deck.length) deck = TIPS.map((_, i) => i).sort(() => Math.random() - 0.5);
    return TIPS[deck.pop()];
  }
  function html(t) {
    return `<span class="tip__el" style="--c:${COLORS[t[0]]}">${t[0] || '💡'}</span><span class="tip__t">${t[1]}</span>`;
  }
  /** نکته را در یک عنصر نشان بده و هر چند ثانیه عوضش کن؛ لمس یعنی نکته بعدی */
  function mount(el, ms) {
    if (!el) return;
    const box = el.querySelector('.tip__body') || el;
    const show = () => {
      box.classList.add('is-out');
      setTimeout(() => { box.innerHTML = html(next()); box.classList.remove('is-out'); }, 260);
    };
    box.innerHTML = html(next());
    const id = setInterval(() => { if (!document.body.contains(el)) return clearInterval(id); if (!document.hidden) show(); }, ms || 9000);
    el.addEventListener('click', show);
  }
  EA.tips = { list: TIPS, next, mount, html };
})();
  };
  D.config = function (EA) {
    const M = { id: D.id, bit: D.bit, langs: D.langs, start: D.startWorld, prefix: D.codePrefix, nameFa: D.nameFa, nameEn: D.nameEn, titleFa: D.titleFa, titleEn: D.titleEn,
      unitRun: /([−≈+]?[\d۰-۹][\d۰-۹٫.,]*(?:\s?[×÷=+−-]\s?[\d۰-۹][\d۰-۹٫.,]*)*\s?(?:mg\/dL|g\/dL|mm\/hr|mm Hg|mmHg|\/µL|\/mm³|µL|mg\/L|ng\/mL|kcal|kg|mm|cm|mL|L|°C|bpm|sec|\/min)(?![A-Za-z]))/g,
      mascot: D.mascotFn };
    return window.ACADEMY_COURSES.termino.kit.config(EA, M);
  };
  D.tools = function () {
/* درما — کارت‌های واژه (فلش‌کارت) با جعبه لایتنر
 * روی کارت: واژه انگلیسی و تلفظ؛ پشت کارت: معادل فارسی، تعریف، اجزای واژه و اختصارهای مرتبط.
 * «بلد بودم» کارت را یک خانه جلو می‌برد و «بلد نبودم» به خانه اول برمی‌گرداند؛ کارت‌های خانه‌های پایین‌تر زودتر می‌آیند. */
(function () {
  const EA = window.EA;
  const { sfx, confetti, esc } = EA.ui;
  const fa = n => EA.fa(n);
  const S = () => EA.S.get();
  const L = () => EA.lex;

  /** تلفظ با صدای انگلیسی مرورگر (اگر باشد) */
  function speak(text) {
    try {
      const ss = window.speechSynthesis; if (!ss) return false;
      ss.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.85;
      const v = ss.getVoices().find(x => /^en(-|_)/i.test(x.lang));
      if (v) u.voice = v;
      ss.speak(u);
      return true;
    } catch (e) { return false; }
  }
  const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

  /** پشت کارت یک واژه؛ در واژه‌نامه هم استفاده می‌شود */
  function back(t) {
    const a = L().analyze(t.t.split(' ')[0]);
    const parts = /^[a-z]+$/i.test(t.t) && a.full && a.parts.length > 1
      ? `<div class="wbx">${a.parts.map(p => `<span><b dir="ltr">${L().partLabel(p)}</b> ${p.r.fa}</span>`).join('')}</div>` : '';
    const ab = t.ab && t.ab.length ? `<div class="tchips">${t.ab.map(x => `<span class="tchip" dir="ltr">${esc(x)}</span>`).join('')}</div>` : '';
    return `<div class="tback"><b class="tback__fa">${t.fa}</b>
      <p class="defen" dir="ltr">${esc(t.d)}</p>${parts}${ab}
      ${t.c ? `<small class="tback__c">${L().CAT_FA[t.c] || t.c}</small>` : ''}</div>`;
  }

  let root = null, D = null;
  function deck(wid, n) {
    const pool = L().TERMS.filter(t => t.fa && t.d && (!wid || t.w === wid));
    const box = id => EA.S.cardBox(id);
    return pool.map(t => ({ t, k: box(t.id) + Math.random() * 1.6 })).sort((a, b) => a.k - b.k).slice(0, n || 15).map(x => x.t);
  }

  function open(wid) {
    const w = wid ? EA.worlds.find(x => x.id === wid) : null;
    D = { wid, list: deck(wid, 15), i: 0, known: 0, flipped: false, start: Date.now() };
    root = document.createElement('div');
    root.className = 'player cards';
    root.style.setProperty('--wc', w ? w.color : 'var(--brand)');
    root.style.setProperty('--wd', w ? w.dark : 'var(--brand-d)');
    root.innerHTML = `<header class="player__top"><button class="iconbtn" data-c="quit" aria-label="Exit">✕</button><div class="pbar"><i></i></div><div class="p-meta"></div></header>
      <div class="player__body"></div><footer class="player__foot"></footer>`;
    document.body.appendChild(root);
    document.body.classList.add('no-scroll');
    root.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    draw();
  }
  function close() {
    if (!root) return;
    document.removeEventListener('keydown', onKey);
    root.remove(); root = null; D = null;
    document.body.classList.remove('no-scroll');
    EA.app.refresh();
  }
  function draw() {
    const t = D.list[D.i];
    root.querySelector('.pbar i').style.width = Math.max(3, D.i / D.list.length * 100) + '%';
    root.querySelector('.p-meta').innerHTML = `<span class="p-count">${fa(D.i + 1)} / ${fa(D.list.length)}</span>`;
    const box = EA.S.cardBox(t.id);
    const w = EA.worlds.find(x => x.id === t.w);
    root.querySelector('.player__body').innerHTML = `<div class="qwrap">
      <div class="fcard ${D.flipped ? 'is-flip' : ''}" data-c="flip" role="button" tabindex="0" aria-label="Flip the card">
        <div class="fcard__in">
          <div class="fcard__f">
            <span class="fcard__w" style="--wc:${w ? w.color : 'var(--brand)'}">${w ? w.sym : ''}</span>
            <span class="fcard__box" title="Leitner box">${'●'.repeat(box)}${'○'.repeat(5 - box)}</span>
            <b class="fcard__t" dir="ltr">${esc(t.t)}</b>
            ${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}
            <small class="fcard__h">Tap to see the meaning</small>
          </div>
          <div class="fcard__b"><b class="fcard__t fcard__t--sm" dir="ltr">${esc(t.t)}</b>${back(t)}</div>
        </div>
      </div>
      ${canSpeak() ? `<button class="hintbtn hintbtn--c" data-c="say">🔊 Hear the pronunciation</button>` : ''}
    </div>`;
    root.querySelector('.player__foot').innerHTML = D.flipped
      ? `<div class="foot__row"><button class="btn btn--red btn--lg" data-c="no">✗ I didn’t know it</button><button class="btn btn--green btn--lg" data-c="yes">✓ I knew it</button></div>`
      : `<div class="foot__row"><span class="foot__note">Say the meaning in your head first, then flip the card</span><button class="btn btn--wc btn--lg" data-c="flip">Flip</button></div>`;
  }
  function mark(known) {
    const t = D.list[D.i];
    EA.S.cardMark(t.id, known);
    if (known) { D.known++; sfx('correct'); } else sfx('wrong');
    D.i++; D.flipped = false;
    if (D.i >= D.list.length) return finish();
    draw();
  }
  function finish() {
    const xp = 5 + D.known;
    const ev = EA.S.addXp(xp);
    const badges = EA.S.checkBadges();
    const total = L().TERMS.length, mastered = Object.values(S().cards || {}).filter(b => b >= 4).length;
    root.querySelector('.player__top').classList.add('is-hidden');
    root.querySelector('.player__body').innerHTML = `<div class="res">
      <div class="res__m">${EA.ui.buddy('cheer', 120)}</div>
      <h2 class="res__t">You knew ${fa(D.known)} of ${fa(D.list.length)} cards!</h2>
      <p class="res__sub">Cards in Leitner boxes 4 and 5: ${fa(mastered)} of ${fa(total)} terms</p>
      <div class="tiles"><div class="tile tile--xp" style="--d:.2s"><div class="tile__h">XP</div><div class="tile__v">⚡ ${fa(xp)}</div></div></div>
      ${badges.map(b => `<p class="res__combo">${b.icon} New badge: ${b.name}</p>`).join('')}
    </div>`;
    root.querySelector('.player__foot').innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-c="again">Another set</button><button class="btn btn--brand btn--lg" data-c="quit">Continue</button></div>`;
    sfx('done'); confetti(80);
    if (ev.some(e => e.type === 'level')) EA.ui.toast("🎉 New level:" + EA.S.level().title);
    D.done = true;
  }
  function onClick(e) {
    const b = e.target.closest('[data-c]'); if (!b || !D) return;
    const a = b.dataset.c;
    if (a === 'quit') return close();
    if (a === 'again') { const wid = D.wid; root.remove(); root = null; document.removeEventListener('keydown', onKey); return open(wid); }
    if (a === 'say') { speak(D.list[D.i].t); return; }
    if (D.done) return;
    if (a === 'flip') { D.flipped = !D.flipped; sfx('tap'); draw(); return; }
    if (a === 'yes') return mark(true);
    if (a === 'no') return mark(false);
  }
  function onKey(e) {
    if (!D || D.done) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); D.flipped = !D.flipped; draw(); }
    else if (D.flipped && (e.key === 'ArrowRight' || e.key === '1')) mark(false);
    else if (D.flipped && (e.key === 'ArrowLeft' || e.key === '2')) mark(true);
  }

  EA.cards = { open, back, speak, canSpeak };
})();
/* موتور — ابزارها: واژه‌نامه، تجزیه‌گر واژه، ریشه‌ها و پسوندها، اختصارها و ابزار ویژه هر اپ (EA.APP.extraTool)
 * همه داده‌ها از EA.lex می‌آیند؛ جست‌وجو هم فارسی و هم انگلیسی را می‌فهمد. */
(function () {
  const EA = window.EA;
  const { esc, sfx } = EA.ui;
  const fa = n => EA.fa(n);
  const L = () => EA.lex;
  const A = EA.APP, X = A.extraTool;
  const KEY = A.key + '.tool';

  const TOOLS = [
    { id: 'dict', sym: 'Aa', name: "Dictionary", color: '#D9643A' },
    { id: 'parse', sym: '✂', name: "Word parser", color: '#B24E26' },
    { id: 'roots', sym: '-o-', name: "Roots and suffixes", color: '#1F9E8F' },
    { id: 'abbr', sym: 'BCC', name: "Abbreviations", color: '#1899D6' },
  ].concat(X ? [{ id: X.id, sym: X.sym, name: X.name, color: X.color }] : []);
  let cur = 'dict';
  const st = { q: '', w: '', k: '', parse: A.parseDefault, open: null, limit: 40 };
  try { const v = sessionStorage.getItem(KEY); if (v && TOOLS.some(t => t.id === v)) cur = v; } catch (e) { /* */ }
  const persist = () => { try { sessionStorage.setItem(KEY, cur); } catch (e) { /* */ } };
  const tool = () => TOOLS.find(t => t.id === cur);

  /* ---------- نمای اصلی ---------- */
  function view() {
    const t = tool();
    return `<section class="tools" style="--tc:${t.color}">
      <header class="vhead"><h1>Tools</h1><p>A full dictionary of ${fa(L().TERMS.length)} terms, ${fa(L().ROOTS.length)} word parts and ${fa(L().ABBR.length)} abbreviations, all offline.</p></header>
      <div class="ttabs" role="tablist">${TOOLS.map(x => `<button class="ttab ${x.id === cur ? 'is-on' : ''}" data-tool="${x.id}" style="--tc:${x.color}" role="tab" aria-selected="${x.id === cur}"><span class="ttab__s">${x.sym}</span>${x.name}</button>`).join('')}</div>
      <div class="tcard">${PANES[cur]()}</div>
      <p class="disclaimer">${A.toolsDisclaimer}</p>
    </section>`;
  }

  const worldChips = (sel, all) => `<div class="seg seg--w">${all ? `<button class="seg__b ${!sel ? 'is-on' : ''}" data-tw="">All</button>` : ''}${EA.worlds.filter(w => L().ABBR.some(a => a.w === w.id)).map(w => `<button class="seg__b ${sel === w.id ? 'is-on' : ''}" data-tw="${w.id}" style="--wc:${w.color}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span> ${w.short || w.name}</button>`).join('')}</div>`;
  const searchBox = ph => `<label class="tsearch"><span aria-hidden="true">🔍</span><input type="search" data-tq value="${esc(st.q)}" placeholder="${ph}" autocomplete="off" spellcheck="false"></label>`;

  /* ---------- واژه‌نامه ---------- */
  function dictList() {
    const fav = EA.S.get().fav || {};
    let list = L().TERMS.filter(t => (!st.w || (st.w === 'fav' ? fav[t.id] : t.w === st.w)) && (!st.k || t.k === st.k));
    list = L().search(st.q, list);
    return list;
  }
  function dictRows() {
    const list = dictList();
    const fav = EA.S.get().fav || {};
    if (!list.length) return `<div class="tres--empty">${EA.ui.mascot('think', 'var(--brand)', 54)}<span>No term found. Search with part of the word or its meaning, or try the “Word parser”.</span></div>`;
    return `<p class="tcount">${fa(list.length)} terms</p><ul class="dict">${list.slice(0, st.limit).map(t => {
      const w = EA.worlds.find(x => x.id === t.w);
      const op = st.open === t.id;
      return `<li class="dict__i ${op ? 'is-open' : ''}">
        <button class="dict__h" data-term="${t.id}" aria-expanded="${op}">
          <span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span>
          <span class="dict__t"><b class="en-text">${esc(t.t)}</b><small>${esc(L().short(t.fa))}</small></span>
          <span class="dict__box" title="Leitner box">${'●'.repeat(EA.S.cardBox(t.id))}</span>
        </button>
        ${op ? `<div class="dict__b">${(c => c ? `<span class="kchip kchip--tag"><i>${c.icon}</i>${c.name}</span> ` : '')(L().CATS.find(c => c.id === t.k))}${t.p ? `<span class="pron" dir="ltr">/${esc(t.p)}/</span>` : ''}${EA.cards.back(t)}
          <div class="dict__act">${EA.cards.canSpeak() ? `<button class="btn btn--ghost btn--sm" data-say="${t.id}">🔊 Pronounce</button>` : ''}<button class="btn btn--ghost btn--sm" data-fav="${t.id}">${fav[t.id] ? "★ Starred" : "☆ Star"}</button><button class="btn btn--ghost btn--sm" data-parse="${esc(t.t)}">✂ Parse</button></div></div>` : ''}
      </li>`;
    }).join('')}</ul>${list.length > st.limit ? `<button class="btn btn--ghost btn--block" data-more>Show ${fa(Math.min(40, list.length - st.limit))} more terms</button>` : ''}`;
  }
  const dict = () => `<div class="tpane">${searchBox(A.ph.dict)}
    <div class="seg seg--w"><button class="seg__b ${!st.w ? 'is-on' : ''}" data-tw="">All</button><button class="seg__b ${st.w === 'fav' ? 'is-on' : ''}" data-tw="fav">★ Starred</button>${EA.worlds.filter(w => L().TERMS.some(t => t.w === w.id)).map(w => `<button class="seg__b ${st.w === w.id ? 'is-on' : ''}" data-tw="${w.id}" title="${w.name}"><span class="wsym wsym--xs" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span></button>`).join('')}</div>
    <div class="kchips" role="group" aria-label="Term category">${[{ id: '', icon: '🗂️', name: "All categories" }].concat(L().CATS).map(c => { const n = c.id ? L().TERMS.filter(t => t.k === c.id && (!st.w || st.w === 'fav' || t.w === st.w)).length : 0; return `<button class="kchip ${st.k === c.id ? 'is-on' : ''}" data-tk="${c.id}"><i>${c.icon}</i>${c.name}${c.id ? `<small>${fa(n)}</small>` : ''}</button>`; }).join('')}</div>
    <div class="tlist">${dictRows()}</div></div>`;

  /* ---------- تجزیه‌گر ---------- */
  function parseOut() {
    const words = String(st.parse || '').trim().split(/\s+/).filter(Boolean).slice(0, 4);
    if (!words.length) return '';
    return words.map(wd => {
      const a = L().analyze(wd);
      if (!a.word) return '';
      const t = L().term(wd) || L().term(st.parse);
      const meaning = a.parts.filter(p => p.r).map(p => p.r.fa.split(",")[0]);
      return `<div class="parse">
        <div class="parse__w" dir="ltr">${a.parts.map(p => `<span class="pp pp--${p.kind}"><b>${p.kind === 'gap' ? esc(p.text) : esc(L().partLabel(p))}</b><small dir="ltr">${p.r ? esc(p.r.fa) : "unknown"}</small></span>`).join('<i>+</i>')}</div>
        ${a.full ? `<p class="parse__m">Literal meaning (read from the end back to the start): <b>${meaning.slice().reverse().join(' ← ')}</b></p>` : "<p class=\"note note--warn\">Part of this word isn’t in the list of roots; the parts we recognise are coloured.</p>"}
        ${t ? `<div class="parse__t"><b dir="ltr">${esc(t.t)}</b> = ${t.fa}<p class="defen" dir="ltr">${esc(t.d)}</p></div>` : ''}
      </div>`;
    }).join('');
  }
  const SAMPLES = A.parseSamples;
  const parse = () => `<div class="tpane">
    <p class="muted">Type a medical word and it will be broken into prefix, root and suffix. The golden rule: start the meaning from the <b>suffix</b>, then the prefix, and finally the roots.</p>
    <label class="tsearch tsearch--big"><span aria-hidden="true">✂</span><input type="text" data-tp value="${esc(st.parse)}" dir="ltr" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. ${esc(A.parseSamples[1] || A.parseDefault)}"></label>
    <div class="tchips tchips--btn">${SAMPLES.map(s => `<button class="tchip" data-parse="${s}" dir="ltr">${s}</button>`).join('')}</div>
    <div class="tout" aria-live="polite">${parseOut()}</div></div>`;

  /* ---------- ریشه‌ها ---------- */
  const KIND = { prefix: "prefix", root: "root", suffix: "suffix" };
  function roots() {
    const list = L().search(st.q, L().ROOTS);
    const groups = ['prefix', 'root', 'suffix'].map(k => [k, list.filter(r => r.kind === k)]).filter(g => g[1].length);
    return `<div class="tpane">${searchBox(A.ph.roots)}
      ${groups.map(([k, rs]) => `<h3 class="tgh">${KIND[k]} list <small>${fa(rs.length)}</small></h3><div class="rgrid">${rs.map(r => `<button class="rcard2 rcard2--${r.kind}" data-rq="${esc(r.stems[0])}"><b class="en-text">${esc(r.a)}</b><span>${esc(r.fa)}</span><small class="en-text">${esc(r.en)}</small></button>`).join('')}</div>`).join('') || "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  /* ---------- اختصارها ---------- */
  function abbr() {
    const list = L().search(st.q, L().ABBR).filter(a => !st.w || a.w === st.w);
    return `<div class="tpane">${searchBox(A.ph.abbr)}${worldChips(st.w, true)}
      <table class="mini abbr"><tr><th>Abbreviation</th><th>Full form and meaning</th></tr>${list.map(a => `<tr><td><span class="en-text">${esc(a.a)}</span></td><td><span class="en-text abbr__f">${esc(a.full)}</span><br>${esc(a.fa)}</td></tr>`).join('')}</table>
      ${list.length ? '' : "<p class=\"muted\">Nothing found.</p>"}</div>`;
  }

  const PANES = { dict, parse, roots, abbr };
  if (X) PANES[X.id] = X.pane;

  /* ---------- رویدادها ---------- */
  function redraw(el, keepFocus) {
    /* فوکوس جعبه جست‌وجو، تجزیه‌گر یا هر ورودی data-keep ابزار ویژه پس از بازسازی برمی‌گردد */
    const active = document.activeElement, sel = active && active.matches && (active.matches('[data-tq]') ? '[data-tq]' : active.matches('[data-tp]') ? '[data-tp]' : active.matches('[data-keep]') ? `[data-keep="${active.dataset.keep}"]` : null);
    let pos = 0; try { pos = sel ? active.selectionStart : 0; } catch (e) { /* number input */ }
    el.querySelector('.tcard').innerHTML = PANES[cur]();
    if (keepFocus && sel) { const i = el.querySelector(sel); if (i) { i.focus(); try { i.setSelectionRange(pos, pos); } catch (e) { /* */ } } }
  }
  function bind(el) {
    el.addEventListener('click', e => {
      const tb = e.target.closest('[data-tool]');
      if (tb) { cur = tb.dataset.tool; st.q = ''; st.w = ''; st.k = ''; st.limit = 40; persist(); sfx('select'); EA.app.refresh(); return; }
      const k = e.target.closest('[data-tk]');
      if (k) { st.k = k.dataset.tk; st.limit = 40; sfx('select'); return redraw(el); }
      const w = e.target.closest('[data-tw]');
      if (w) { st.w = w.dataset.tw; st.limit = 40; sfx('select'); return redraw(el); }
      const tm = e.target.closest('[data-term]');
      if (tm) { st.open = st.open === tm.dataset.term ? null : tm.dataset.term; sfx('tap'); return redraw(el); }
      const sy = e.target.closest('[data-say]');
      if (sy) { const t = L().TERMS.find(x => x.id === sy.dataset.say); if (t) EA.cards.speak(t.t); return; }
      const fv = e.target.closest('[data-fav]');
      if (fv) { const s = EA.S.get(); s.fav = s.fav || {}; if (s.fav[fv.dataset.fav]) delete s.fav[fv.dataset.fav]; else s.fav[fv.dataset.fav] = 1; EA.S.save(); sfx('select'); return redraw(el); }
      const pr = e.target.closest('[data-parse]');
      if (pr) { st.parse = pr.dataset.parse; if (cur !== 'parse') { cur = 'parse'; persist(); EA.app.refresh(); } else redraw(el); sfx('select'); return; }
      const rq = e.target.closest('[data-rq]');
      if (rq) { cur = 'dict'; st.q = rq.dataset.rq; st.w = ''; persist(); sfx('select'); EA.app.refresh(); return; }
      if (e.target.closest('[data-more]')) { st.limit += 40; return redraw(el); }
      if (X && X.click && cur === X.id && X.click(e)) { sfx('select'); return redraw(el); }
    });
    el.addEventListener('input', e => {
      if (e.target.matches('[data-tq]')) { st.q = e.target.value; st.limit = 40; redraw(el, true); }
      else if (e.target.matches('[data-tp]')) { st.parse = e.target.value; el.querySelector('.tout').innerHTML = parseOut(); }
      else if (X && X.input && cur === X.id && X.input(e, el)) redraw(el, true);
    });
  }

  EA.tools = { view, bind, TOOLS };
})();
  };
  D.ready = true;
})(window.ACADEMY_SUBCOURSES);
