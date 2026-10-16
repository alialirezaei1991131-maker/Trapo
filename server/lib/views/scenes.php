<?php
/* تراپو — صحنه‌های متحرک صفحه معرفی و صفحه دوره‌ها (فقط SVG و CSS، بدون کد برنامه)
 * ward = بخش بیمارستان (یونا)، class = کلاس درس (ترمینو)، icu = اورژانس و ICU (هما)، lab = آزمایشگاه و کلینیک تغذیه (نگار) */
function trapo_scene(string $k): string
{
    $m = fn($id, $cls) => '<img class="sc-m ' . $cls . '" src="img/m-' . $id . '.svg" width="80" height="100" alt="" loading="lazy">';
    $bub = fn($cls, array $t) => '<div class="sc-bub ' . $cls . '" dir="rtl">' . implode('', array_map(fn($x, $i) => '<span style="--i:' . $i . '">' . $x . '</span>', $t, array_keys($t))) . '</div>';
    if ($k === 'ward') return '<div class="sc sc--ward" aria-hidden="true"><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="wdW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eafaf7"/><stop offset="1" stop-color="#cfeee9"/></linearGradient><clipPath id="wdWin"><rect x="150" y="22" width="96" height="70" rx="8"/></clipPath></defs>
  <rect width="400" height="250" fill="url(#wdW)"/><rect y="192" width="400" height="58" fill="#b9ddd7"/><path d="M0 192H400" stroke="#9ccac2" stroke-width="3"/>
  <g clip-path="url(#wdWin)"><rect x="150" y="22" width="96" height="70" fill="#bfe6ff"/><circle cx="226" cy="40" r="10" fill="#ffd84d" class="sc-sun"/><g class="sc-cloud"><ellipse cx="150" cy="58" rx="20" ry="8" fill="#fff"/><ellipse cx="162" cy="52" rx="12" ry="8" fill="#fff"/></g><g class="sc-cloud sc-cloud--2"><ellipse cx="120" cy="76" rx="16" ry="6" fill="#fff"/></g></g>
  <rect x="150" y="22" width="96" height="70" rx="8" fill="none" stroke="#fff" stroke-width="5"/><path d="M198 22V92" stroke="#fff" stroke-width="4"/>
  <g class="sc-cross"><rect x="36" y="34" width="36" height="36" rx="9" fill="#fff"/><path d="M50 41h8v7h7v8h-7v7h-8v-7h-7v-8h7z" fill="#ff4b4b"/></g>
  <path d="M342 104V196M326 196h32" stroke="#7d97a3" stroke-width="4" stroke-linecap="round"/>
  <rect x="296" y="36" width="92" height="68" rx="9" fill="#11262c" stroke="#6f8d97" stroke-width="3"/>
  <polyline class="sc-wave" points="302,74 318,74 322,68 326,74 332,74 336,50 340,90 344,74 356,74 360,68 364,74 384,74" fill="none" stroke="#58ff8a" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="380" y="52" text-anchor="end" font-size="13" font-weight="900" fill="#58ff8a" class="sc-blink">۷۲</text><path class="sc-heart" d="M308 46c0-4 6-5 6 0 0-5 6-4 6 0 0 3-6 7-6 7s-6-4-6-7z" fill="#ff5a6a"/>
  <path d="M100 34V196M86 196h28" stroke="#93a8b1" stroke-width="4" stroke-linecap="round"/><path d="M100 34h20" stroke="#93a8b1" stroke-width="4"/>
  <path d="M108 40h22v30q0 8-11 8t-11-8z" fill="#dff3ff" stroke="#8fb9cf" stroke-width="2"/><rect x="110" y="56" width="18" height="12" rx="3" fill="#9ad7ff" class="sc-fluid"/>
  <rect x="115" y="80" width="8" height="16" rx="3" fill="#e9f7ff" stroke="#8fb9cf" stroke-width="1.5"/><circle class="sc-drop" cx="119" cy="84" r="2.2" fill="#4cb8f5"/><circle class="sc-drop sc-drop--2" cx="119" cy="84" r="2.2" fill="#4cb8f5"/>
  <path d="M119 96C119 130 150 120 168 138" fill="none" stroke="#a9cfe0" stroke-width="2"/>
  <rect x="122" y="118" width="12" height="50" rx="4" fill="#7fa6bd"/><rect x="120" y="150" width="190" height="14" rx="6" fill="#8fb3c9"/><path d="M134 164v24M298 164v24" stroke="#7395aa" stroke-width="5" stroke-linecap="round"/>
  <rect x="130" y="136" width="176" height="18" rx="8" fill="#fff"/><ellipse cx="150" cy="134" rx="18" ry="9" fill="#f2fbff" stroke="#d5e7ee"/>
  <circle cx="152" cy="126" r="12" fill="#ffd9b8"/><path d="M147 125q2 2 4 0M155 125q2 2 4 0" stroke="#8a5a3a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M142 118q10-10 20 0" fill="#6b4a32"/>
  <path class="sc-breathe" d="M164 132q60-10 140 0v18h-140z" fill="#8fd1c9"/>
</svg>' . $m('yona', 'sc-doc') . '<span class="sc-tag sc-tag--w">🩺</span>' . $bub('sc-bub--ward', ['سدیم: ۱۲۲ ⚠️', 'تشنج؟ سالین ۳٪ 💉', 'هر ۴ ساعت سدیم ✔️']) . '</div>';

    if ($k === 'class') return '<div class="sc sc--class" aria-hidden="true"><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="clW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff7e6"/><stop offset="1" stop-color="#ffecc8"/></linearGradient></defs>
  <rect width="400" height="250" fill="url(#clW)"/><rect y="196" width="400" height="54" fill="#e8c493"/><path d="M0 196H400" stroke="#d2a873" stroke-width="3"/>
  <g transform="translate(46 50)"><circle r="20" fill="#fff" stroke="#c99a60" stroke-width="4"/><path class="sc-hand sc-hand--h" d="M0 0V-10" stroke="#444" stroke-width="3" stroke-linecap="round"/><path class="sc-hand" d="M0 0V-15" stroke="#ff4b4b" stroke-width="2" stroke-linecap="round"/><circle r="2.5" fill="#444"/></g>
  <rect x="100" y="22" width="230" height="122" rx="8" fill="#fbfffd" stroke="#6f7f88" stroke-width="5"/><rect x="100" y="140" width="230" height="7" rx="3" fill="#a5b2b8"/>
  <g class="sc-write sc-write--1"><text x="318" y="48" text-anchor="end" font-size="14" font-weight="900" fill="#2a7de1">پیشوند + ریشه + پسوند</text></g>
  <g class="sc-write sc-write--2"><text x="114" y="74" font-size="15" font-weight="900" fill="#e5484d" direction="ltr">gastr / o / logy</text></g>
  <g class="sc-write sc-write--3"><text x="318" y="98" text-anchor="end" font-size="13" font-weight="800" fill="#3a4a52">= علم معده و گوارش ✔️</text></g>
  <g class="sc-bars"><rect class="sc-bar" x="120" y="104" width="12" height="30" rx="2" fill="#58cc02"/><rect class="sc-bar sc-bar--2" x="138" y="114" width="12" height="20" rx="2" fill="#1cb0f6"/><rect class="sc-bar sc-bar--3" x="156" y="96" width="12" height="38" rx="2" fill="#ffc800"/></g>
  <path class="sc-tick" d="M190 120l8 8 16-18" fill="none" stroke="#58cc02" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="sc-pointer" d="M86 150L150 88" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>
  <g fill="#c9925a"><rect x="128" y="200" width="66" height="10" rx="4"/><rect x="214" y="200" width="66" height="10" rx="4"/><rect x="300" y="200" width="66" height="10" rx="4"/></g>
  <g stroke="#a87545" stroke-width="5" stroke-linecap="round"><path d="M136 210v26M186 210v26M222 210v26M272 210v26M308 210v26M358 210v26"/></g>
</svg>' . $m('homa', 'sc-teacher') . $m('yona', 'sc-st sc-st--1') . $m('negar', 'sc-st sc-st--2') . $m('termino', 'sc-st sc-st--3') . '<span class="sc-tag sc-tag--hand">✋</span><span class="sc-tag sc-tag--idea">💡</span>' . $bub('sc-bub--class', ['این واژه یعنی چی؟ 🤔', 'معده + علم! 🎓', 'آفرین! +۱۵ امتیاز ⭐']) . '</div>';

    if ($k === 'icu') return '<div class="sc sc--icu" aria-hidden="true"><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="icW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2c4c"/><stop offset="1" stop-color="#2a4072"/></linearGradient><radialGradient id="icB" cx="0" cy="0" r="1"><stop offset="0" stop-color="#ff4b4b" stop-opacity=".55"/><stop offset="1" stop-color="#ff4b4b" stop-opacity="0"/></radialGradient></defs>
  <rect width="400" height="250" fill="url(#icW)"/><rect y="196" width="400" height="54" fill="#17213a"/>
  <rect class="sc-flash" width="400" height="250" fill="#ff4b4b" opacity="0"/>
  <g transform="translate(200 10)"><rect x="-16" y="-6" width="32" height="12" rx="4" fill="#3b4a6b"/><path d="M-14 6a14 14 0 0 1 28 0z" fill="#ff3b3b" class="sc-siren"/><g class="sc-beam"><path d="M0 6L-120 120L-60 140z" fill="url(#icB)"/><path d="M0 6L120 120L60 140z" fill="url(#icB)"/></g></g>
  <rect x="226" y="36" width="160" height="104" rx="10" fill="#0b1626" stroke="#55688f" stroke-width="3"/>
  <polyline class="sc-wave" points="234,62 254,62 258,56 262,62 268,62 272,42 276,78 280,62 300,62 304,56 308,62 314,62 318,42 322,78 326,62 340,62" fill="none" stroke="#58ff8a" stroke-width="2.2"/>
  <path class="sc-wave sc-wave--2" d="M234 96q8-14 16 0t16 0 16 0 16 0 16 0 16 0" fill="none" stroke="#3fd0ff" stroke-width="2.2"/>
  <path class="sc-wave sc-wave--3" d="M234 124q14-12 28 0t28 0 28 0" fill="none" stroke="#ffd04a" stroke-width="2.2"/>
  <text x="378" y="66" text-anchor="end" font-size="15" font-weight="900" fill="#58ff8a">۱۱۸</text>
  <text x="378" y="100" text-anchor="end" font-size="15" font-weight="900" fill="#3fd0ff"><tspan class="sc-spo">۸۸</tspan><tspan class="sc-spo sc-spo--2" x="378">۹۶</tspan></text>
  <text x="378" y="128" text-anchor="end" font-size="11" font-weight="900" fill="#ffd04a">pH ۷٫۱۸</text>
  <rect x="28" y="96" width="58" height="96" rx="8" fill="#d6e0ee" stroke="#8ea0bb" stroke-width="3"/><rect x="36" y="104" width="42" height="22" rx="4" fill="#0b1626"/><text x="57" y="120" text-anchor="middle" font-size="10" font-weight="900" fill="#3fd0ff">VENT</text>
  <g class="sc-bellows"><rect x="40" y="134" width="34" height="40" rx="5" fill="#9fb8d8"/><path d="M40 144h34M40 154h34M40 164h34" stroke="#7d97bb" stroke-width="2"/></g>
  <path d="M86 150C110 150 120 132 150 132" fill="none" stroke="#a9c3e4" stroke-width="5" stroke-linecap="round"/>
  <rect x="112" y="150" width="190" height="14" rx="6" fill="#6f86ad"/><path d="M126 164v26M290 164v26" stroke="#5a6f96" stroke-width="5" stroke-linecap="round"/>
  <rect x="120" y="136" width="176" height="18" rx="8" fill="#eef3fb"/><circle cx="146" cy="126" r="12" fill="#ffd9b8"/><path d="M141 125q2 2 4 0M149 125q2 2 4 0" stroke="#8a5a3a" stroke-width="1.6" fill="none"/>
  <path class="sc-breathe" d="M160 132q60-10 136 0v18h-136z" fill="#6aa3d8"/>
</svg>' . $m('homa', 'sc-run') . '<span class="sc-tag sc-tag--abg">🩸</span><div class="sc-alert" dir="rtl"><b class="sc-a1">🚨 کد آبی!</b><b class="sc-a2">✅ بیمار پایدار شد</b></div>' . $bub('sc-bub--icu', ['ABG: اسیدوز متابولیک', 'آنیون گپ: ۲۶ ⚠️', 'جبران تنفسی ✔️']) . '</div>';

    // lab
    return '<div class="sc sc--lab" aria-hidden="true"><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="lbW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6efff"/><stop offset="1" stop-color="#e9dcfb"/></linearGradient></defs>
  <rect width="400" height="250" fill="url(#lbW)"/><rect y="168" width="400" height="82" fill="#d9c7f2"/><rect y="160" width="400" height="12" fill="#b49ad8"/>
  <rect x="20" y="40" width="150" height="8" rx="3" fill="#b49ad8"/><g class="sc-jar"><rect x="30" y="16" width="22" height="24" rx="5" fill="#ffd166"/><rect x="60" y="20" width="18" height="20" rx="5" fill="#9be15d"/><rect x="86" y="12" width="24" height="28" rx="5" fill="#ff9ec4"/><rect x="118" y="18" width="20" height="22" rx="5" fill="#7fd4ff"/></g>
  <g transform="translate(240 112)"><rect x="-30" y="34" width="60" height="14" rx="5" fill="#6d5a8f"/><rect x="-6" y="-24" width="12" height="60" rx="5" fill="#8c78ad"/><rect x="-16" y="-40" width="26" height="22" rx="6" fill="#5b4a7a" transform="rotate(-18)"/><rect x="-22" y="14" width="44" height="6" rx="3" fill="#cdbfe6"/><circle class="sc-slide" cx="0" cy="12" r="5" fill="#ff9ec4"/></g>
  <g transform="translate(330 128)"><circle r="26" fill="#efe7fb" stroke="#8c78ad" stroke-width="4"/><g class="sc-spin"><circle cx="0" cy="-14" r="5" fill="#e5484d"/><circle cx="12" cy="7" r="5" fill="#ffd166"/><circle cx="-12" cy="7" r="5" fill="#58cc02"/></g><circle r="4" fill="#8c78ad"/></g>
  <g transform="translate(60 100)"><rect x="-6" y="56" width="92" height="8" rx="3" fill="#8c78ad"/>
    <g><rect x="0" y="0" width="16" height="58" rx="8" fill="#fff" stroke="#9b88bd" stroke-width="2"/><rect class="sc-liq" x="2" y="26" width="12" height="30" rx="6" fill="#58cc02"/><circle class="sc-bubl" cx="8" cy="48" r="2.4" fill="#fff"/></g>
    <g transform="translate(26 0)"><rect x="0" y="0" width="16" height="58" rx="8" fill="#fff" stroke="#9b88bd" stroke-width="2"/><rect class="sc-liq sc-liq--2" x="2" y="18" width="12" height="38" rx="6" fill="#ff6b8a"/><circle class="sc-bubl sc-bubl--2" cx="8" cy="48" r="2.4" fill="#fff"/></g>
    <g transform="translate(52 0)"><rect x="0" y="0" width="16" height="58" rx="8" fill="#fff" stroke="#9b88bd" stroke-width="2"/><rect class="sc-liq sc-liq--3" x="2" y="32" width="12" height="24" rx="6" fill="#ffc800"/><circle class="sc-bubl sc-bubl--3" cx="8" cy="48" r="2.4" fill="#fff"/></g></g>
  <g class="sc-steam"><path d="M70 92q-6-10 0-18t0-18" fill="none" stroke="#cbb8ea" stroke-width="3" stroke-linecap="round"/><path d="M96 92q-6-10 0-18" fill="none" stroke="#cbb8ea" stroke-width="3" stroke-linecap="round"/></g>
  <g transform="translate(180 128)"><rect x="-22" y="20" width="44" height="12" rx="4" fill="#8c78ad"/><rect x="-16" y="10" width="32" height="12" rx="3" fill="#efe7fb" stroke="#8c78ad" stroke-width="2"/><text x="0" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="#5b4a7a" class="sc-blink">۵۲ kg</text></g>
</svg>' . $m('negar', 'sc-scan') . '<span class="sc-tag sc-tag--lab">🔬</span>' . $bub('sc-bub--lab', ['آلبومین: ۲٫۸ ⚠️', 'تحلیل عضله گیجگاهی 🔍', 'سوءتغذیه شدید؟ ✔️']) . '</div>';
}

/** بخش «یادگیری در دل بیمارستان»: صحنه‌های متحرک */
function trapo_scenes_html(): string
{
    $L = fn($fa, $en) => '<span data-l="fa">' . $fa . '</span><span data-l="en" lang="en">' . $en . '</span>';
    $cards = [
        ['ward', 'سر بالین بیمار', 'At the bedside', 'هیپوناترمی تشنج‌دار؟ یونا کنارت است: از ارزیابی تا محاسبه سالین ۳٪.', 'A seizing hyponatraemic patient? Yona is with you, from assessment to 3% saline.'],
        ['class', 'سر کلاس درس', 'In the classroom', 'هر واژه پزشکی یک پازل است؛ ریشه‌ها را بشکن و معنی را خودت بساز.', 'Every medical word is a puzzle — break the roots and build the meaning.'],
        ['icu', 'در ICU و اورژانس', 'In the ICU', 'کد آبی! گاز خون را بخوان، اسیدوز را پیدا کن و بیمار را پایدار کن.', 'Code blue! Read the blood gas, find the acidosis and stabilise the patient.'],
        ['lab', 'در آزمایشگاه و کلینیک', 'In the lab & clinic', 'آلبومین، قدرت چنگش و معاینه عضله؛ سوءتغذیه را مثل یک متخصص تشخیص بده.', 'Albumin, grip strength and muscle exam — diagnose malnutrition like a pro.'],
    ];
    $h = '<section class="lp-sec lp-scenes" id="scenes" aria-labelledby="sc-t"><h2 id="sc-t">' . $L('یادگیری در دل بیمارستان', 'Learning inside the hospital') . '</h2>'
        . '<p class="lp-sub">' . $L('هر درس تراپو یک صحنه واقعی است: سر بالین، سر کلاس، در ICU و آزمایشگاه. تو تصمیم می‌گیری و شخصیت‌های دوره همراهت هستند.', 'Every Therapo lesson is a real scene — at the bedside, in class, in the ICU and the lab. You decide, and the course characters are right there with you.') . '</p><div class="lp-scg">';
    foreach ($cards as $c) $h .= '<article class="lp-sci">' . trapo_scene($c[0]) . '<div class="lp-sci__t"><h3>' . $L($c[1], $c[2]) . '</h3><p>' . $L($c[3], $c[4]) . '</p></div></article>';
    return $h . '</div></section>';
}
