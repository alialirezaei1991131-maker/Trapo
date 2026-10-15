/* ==========================================================================
   تراپو (آکادمی بالینی) — موتور مشترک (js/engine.js)
   یونا (الکترولیت) • هما (گاز خون و اسید-باز) • نگار (معاینه فیزیکی تغذیه‌محور)

   بدون سرور، بدون ساخت (Zero Build) و بدون ES Module: با دابل‌کلیک روی index.html
   (پروتکل file://) اجرا می‌شود. هیچ fetch() یا import ندارد.

   ترتیب بارگذاری در index.html:
     ۱. courses/data-*.js   → هر دوره خودش را در window.ACADEMY_COURSES ثبت می‌کند (اجرا نمی‌شود)
     ۲. courses/data-grand-rounds.js → کیس‌های ترکیبی ICU در window.ACADEMY_GRAND_ROUNDS
     ۳. js/engine.js        → همین فایل

   بخش اول — موتور بازی مشترک (ENGINE.*): زبان، صدا، وضعیت و بازی‌وارسازی، رابط، اجراکننده
     درس/آزمون/تمرین/کلینیک خطاها، و پوسته دوره. هر چیزی که میان سه دوره فرق دارد از
     پیکربندی دوره (C = data-*.js → config) خوانده می‌شود.
   بخش دوم — پلتفرم (window.ACADEMY): اشتراک زمان‌دار و سطح‌بندی‌شده (Tier + Bitmask + انقضا)،
     امضای HMAC-SHA256 گره‌خورده به Device ID، قفل ضد دستکاری ساعت، فروشگاه و سبد خرید،
     رمزساز مخفی مدیر، داشبورد مرکزی، کلینیک خطاها، شیفت اورژانس ICU، گواهی و کارت استوری،
     کد پشتیبان، ماشین‌حساب شناور سر بالین.

   مسیرها:
     index.html                 داشبورد مرکزی
     index.html?course=yona     محیط یادگیری دوره (#/learn، #/practice، #/tools، ...)
     index.html?course=homa&intro=1   صفحه معرفی دوره
     index.html?course=negar&run=clinic   شروع مستقیم کلینیک خطاها
     index.html?calc=homa       فقط ماشین‌حساب (درون پنجره ماشین‌حساب سریع)

   توجه امنیتی: هر قفل سمت کاربر (بدون سرور) با خواندن کد قابل دور زدن است؛ این سیستم برای
   جلوگیری از اشتراک‌گذاری ساده کد میان دستگاه‌ها و عقب کشیدن ساعت طراحی شده است.
   ========================================================================== */
window.ACADEMY_COURSES = window.ACADEMY_COURSES || {};
(function () {
  const ENGINE = window.ACADEMY_ENGINE = {};

  /* TweetNaCl 1.0.3 (MIT، tweetnacl.js.org) — فقط برای بررسی امضای کدهای فعال‌سازی */
  const NACL = {};
  !function(i){"use strict";var m=function(r,n){this.hi=0|r,this.lo=0|n},v=function(r){var n,e=new Float64Array(16);if(r)for(n=0;n<r.length;n++)e[n]=r[n];return e},a=function(){throw new Error("no PRNG")},o=new Uint8Array(16),e=new Uint8Array(32);e[0]=9;var c=v(),w=v([1]),g=v([56129,1]),y=v([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),l=v([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),t=v([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),f=v([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),s=v([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function h(r,n){return r<<n|r>>>32-n}function b(r,n){var e=255&r[n+3];return(e=(e=e<<8|255&r[n+2])<<8|255&r[n+1])<<8|255&r[n+0]}function B(r,n){var e=r[n]<<24|r[n+1]<<16|r[n+2]<<8|r[n+3],t=r[n+4]<<24|r[n+5]<<16|r[n+6]<<8|r[n+7];return new m(e,t)}function p(r,n,e){var t;for(t=0;t<4;t++)r[n+t]=255&e,e>>>=8}function S(r,n,e){r[n]=e.hi>>24&255,r[n+1]=e.hi>>16&255,r[n+2]=e.hi>>8&255,r[n+3]=255&e.hi,r[n+4]=e.lo>>24&255,r[n+5]=e.lo>>16&255,r[n+6]=e.lo>>8&255,r[n+7]=255&e.lo}function u(r,n,e,t,o){var i,a=0;for(i=0;i<o;i++)a|=r[n+i]^e[t+i];return(1&a-1>>>8)-1}function A(r,n,e,t){return u(r,n,e,t,16)}function _(r,n,e,t){return u(r,n,e,t,32)}function U(r,n,e,t,o){var i,a,f,u=new Uint32Array(16),c=new Uint32Array(16),w=new Uint32Array(16),y=new Uint32Array(4);for(i=0;i<4;i++)c[5*i]=b(t,4*i),c[1+i]=b(e,4*i),c[6+i]=b(n,4*i),c[11+i]=b(e,16+4*i);for(i=0;i<16;i++)w[i]=c[i];for(i=0;i<20;i++){for(a=0;a<4;a++){for(f=0;f<4;f++)y[f]=c[(5*a+4*f)%16];for(y[1]^=h(y[0]+y[3]|0,7),y[2]^=h(y[1]+y[0]|0,9),y[3]^=h(y[2]+y[1]|0,13),y[0]^=h(y[3]+y[2]|0,18),f=0;f<4;f++)u[4*a+(a+f)%4]=y[f]}for(f=0;f<16;f++)c[f]=u[f]}if(o){for(i=0;i<16;i++)c[i]=c[i]+w[i]|0;for(i=0;i<4;i++)c[5*i]=c[5*i]-b(t,4*i)|0,c[6+i]=c[6+i]-b(n,4*i)|0;for(i=0;i<4;i++)p(r,4*i,c[5*i]),p(r,16+4*i,c[6+i])}else for(i=0;i<16;i++)p(r,4*i,c[i]+w[i]|0)}function E(r,n,e,t){U(r,n,e,t,!1)}function x(r,n,e,t){return U(r,n,e,t,!0),0}var d=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function K(r,n,e,t,o,i,a){var f,u,c=new Uint8Array(16),w=new Uint8Array(64);if(!o)return 0;for(u=0;u<16;u++)c[u]=0;for(u=0;u<8;u++)c[u]=i[u];for(;64<=o;){for(E(w,c,a,d),u=0;u<64;u++)r[n+u]=(e?e[t+u]:0)^w[u];for(f=1,u=8;u<16;u++)f=f+(255&c[u])|0,c[u]=255&f,f>>>=8;o-=64,n+=64,e&&(t+=64)}if(0<o)for(E(w,c,a,d),u=0;u<o;u++)r[n+u]=(e?e[t+u]:0)^w[u];return 0}function Y(r,n,e,t,o){return K(r,n,null,0,e,t,o)}function L(r,n,e,t,o){var i=new Uint8Array(32);return x(i,t,o,d),Y(r,n,e,t.subarray(16),i)}function T(r,n,e,t,o,i,a){var f=new Uint8Array(32);return x(f,i,a,d),K(r,n,e,t,o,i.subarray(16),f)}function k(r,n){var e,t=0;for(e=0;e<17;e++)t=t+(r[e]+n[e]|0)|0,r[e]=255&t,t>>>=8}var z=new Uint32Array([5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252]);function R(r,n,e,t,o,i){var a,f,u,c,w=new Uint32Array(17),y=new Uint32Array(17),l=new Uint32Array(17),s=new Uint32Array(17),h=new Uint32Array(17);for(u=0;u<17;u++)y[u]=l[u]=0;for(u=0;u<16;u++)y[u]=i[u];for(y[3]&=15,y[4]&=252,y[7]&=15,y[8]&=252,y[11]&=15,y[12]&=252,y[15]&=15;0<o;){for(u=0;u<17;u++)s[u]=0;for(u=0;u<16&&u<o;++u)s[u]=e[t+u];for(s[u]=1,t+=u,o-=u,k(l,s),f=0;f<17;f++)for(u=w[f]=0;u<17;u++)w[f]=w[f]+l[u]*(u<=f?y[f-u]:320*y[f+17-u]|0)|0;for(f=0;f<17;f++)l[f]=w[f];for(u=c=0;u<16;u++)c=c+l[u]|0,l[u]=255&c,c>>>=8;for(c=c+l[16]|0,l[16]=3&c,c=5*(c>>>2)|0,u=0;u<16;u++)c=c+l[u]|0,l[u]=255&c,c>>>=8;c=c+l[16]|0,l[16]=c}for(u=0;u<17;u++)h[u]=l[u];for(k(l,z),a=0|-(l[16]>>>7),u=0;u<17;u++)l[u]^=a&(h[u]^l[u]);for(u=0;u<16;u++)s[u]=i[u+16];for(s[16]=0,k(l,s),u=0;u<16;u++)r[n+u]=l[u];return 0}function P(r,n,e,t,o,i){var a=new Uint8Array(16);return R(a,0,e,t,o,i),A(r,n,a,0)}function M(r,n,e,t,o){var i;if(e<32)return-1;for(T(r,0,n,0,e,t,o),R(r,16,r,32,e-32,r),i=0;i<16;i++)r[i]=0;return 0}function N(r,n,e,t,o){var i,a=new Uint8Array(32);if(e<32)return-1;if(L(a,0,32,t,o),0!==P(n,16,n,32,e-32,a))return-1;for(T(r,0,n,0,e,t,o),i=0;i<32;i++)r[i]=0;return 0}function O(r,n){var e;for(e=0;e<16;e++)r[e]=0|n[e]}function C(r){var n,e;for(e=0;e<16;e++)r[e]+=65536,n=Math.floor(r[e]/65536),r[(e+1)*(e<15?1:0)]+=n-1+37*(n-1)*(15===e?1:0),r[e]-=65536*n}function F(r,n,e){for(var t,o=~(e-1),i=0;i<16;i++)t=o&(r[i]^n[i]),r[i]^=t,n[i]^=t}function Z(r,n){var e,t,o,i=v(),a=v();for(e=0;e<16;e++)a[e]=n[e];for(C(a),C(a),C(a),t=0;t<2;t++){for(i[0]=a[0]-65517,e=1;e<15;e++)i[e]=a[e]-65535-(i[e-1]>>16&1),i[e-1]&=65535;i[15]=a[15]-32767-(i[14]>>16&1),o=i[15]>>16&1,i[14]&=65535,F(a,i,1-o)}for(e=0;e<16;e++)r[2*e]=255&a[e],r[2*e+1]=a[e]>>8}function G(r,n){var e=new Uint8Array(32),t=new Uint8Array(32);return Z(e,r),Z(t,n),_(e,0,t,0)}function q(r){var n=new Uint8Array(32);return Z(n,r),1&n[0]}function D(r,n){var e;for(e=0;e<16;e++)r[e]=n[2*e]+(n[2*e+1]<<8);r[15]&=32767}function I(r,n,e){var t;for(t=0;t<16;t++)r[t]=n[t]+e[t]|0}function V(r,n,e){var t;for(t=0;t<16;t++)r[t]=n[t]-e[t]|0}function X(r,n,e){var t,o,i=new Float64Array(31);for(t=0;t<31;t++)i[t]=0;for(t=0;t<16;t++)for(o=0;o<16;o++)i[t+o]+=n[t]*e[o];for(t=0;t<15;t++)i[t]+=38*i[t+16];for(t=0;t<16;t++)r[t]=i[t];C(r),C(r)}function j(r,n){X(r,n,n)}function H(r,n){var e,t=v();for(e=0;e<16;e++)t[e]=n[e];for(e=253;0<=e;e--)j(t,t),2!==e&&4!==e&&X(t,t,n);for(e=0;e<16;e++)r[e]=t[e]}function J(r,n){var e,t=v();for(e=0;e<16;e++)t[e]=n[e];for(e=250;0<=e;e--)j(t,t),1!==e&&X(t,t,n);for(e=0;e<16;e++)r[e]=t[e]}function Q(r,n,e){var t,o,i=new Uint8Array(32),a=new Float64Array(80),f=v(),u=v(),c=v(),w=v(),y=v(),l=v();for(o=0;o<31;o++)i[o]=n[o];for(i[31]=127&n[31]|64,i[0]&=248,D(a,e),o=0;o<16;o++)u[o]=a[o],w[o]=f[o]=c[o]=0;for(f[0]=w[0]=1,o=254;0<=o;--o)F(f,u,t=i[o>>>3]>>>(7&o)&1),F(c,w,t),I(y,f,c),V(f,f,c),I(c,u,w),V(u,u,w),j(w,y),j(l,f),X(f,c,f),X(c,u,y),I(y,f,c),V(f,f,c),j(u,f),V(c,w,l),X(f,c,g),I(f,f,w),X(c,c,f),X(f,w,l),X(w,u,a),j(u,y),F(f,u,t),F(c,w,t);for(o=0;o<16;o++)a[o+16]=f[o],a[o+32]=c[o],a[o+48]=u[o],a[o+64]=w[o];var s=a.subarray(32),h=a.subarray(16);return H(s,s),X(h,h,s),Z(r,h),0}function W(r,n){return Q(r,n,e)}function $(r,n){return a(n,32),W(r,n)}function rr(r,n,e){var t=new Uint8Array(32);return Q(t,e,n),x(r,o,t,d)}var nr=M,er=N;function tr(){var r,n,e,t=0,o=0,i=0,a=0,f=65535;for(e=0;e<arguments.length;e++)t+=(r=arguments[e].lo)&f,o+=r>>>16,i+=(n=arguments[e].hi)&f,a+=n>>>16;return new m((i+=(o+=t>>>16)>>>16)&f|(a+=i>>>16)<<16,t&f|o<<16)}function or(r,n){return new m(r.hi>>>n,r.lo>>>n|r.hi<<32-n)}function ir(){var r,n=0,e=0;for(r=0;r<arguments.length;r++)n^=arguments[r].lo,e^=arguments[r].hi;return new m(e,n)}function ar(r,n){var e,t,o=32-n;return n<32?(e=r.hi>>>n|r.lo<<o,t=r.lo>>>n|r.hi<<o):n<64&&(e=r.lo>>>n|r.hi<<o,t=r.hi>>>n|r.lo<<o),new m(e,t)}var fr=[new m(1116352408,3609767458),new m(1899447441,602891725),new m(3049323471,3964484399),new m(3921009573,2173295548),new m(961987163,4081628472),new m(1508970993,3053834265),new m(2453635748,2937671579),new m(2870763221,3664609560),new m(3624381080,2734883394),new m(310598401,1164996542),new m(607225278,1323610764),new m(1426881987,3590304994),new m(1925078388,4068182383),new m(2162078206,991336113),new m(2614888103,633803317),new m(3248222580,3479774868),new m(3835390401,2666613458),new m(4022224774,944711139),new m(264347078,2341262773),new m(604807628,2007800933),new m(770255983,1495990901),new m(1249150122,1856431235),new m(1555081692,3175218132),new m(1996064986,2198950837),new m(2554220882,3999719339),new m(2821834349,766784016),new m(2952996808,2566594879),new m(3210313671,3203337956),new m(3336571891,1034457026),new m(3584528711,2466948901),new m(113926993,3758326383),new m(338241895,168717936),new m(666307205,1188179964),new m(773529912,1546045734),new m(1294757372,1522805485),new m(1396182291,2643833823),new m(1695183700,2343527390),new m(1986661051,1014477480),new m(2177026350,1206759142),new m(2456956037,344077627),new m(2730485921,1290863460),new m(2820302411,3158454273),new m(3259730800,3505952657),new m(3345764771,106217008),new m(3516065817,3606008344),new m(3600352804,1432725776),new m(4094571909,1467031594),new m(275423344,851169720),new m(430227734,3100823752),new m(506948616,1363258195),new m(659060556,3750685593),new m(883997877,3785050280),new m(958139571,3318307427),new m(1322822218,3812723403),new m(1537002063,2003034995),new m(1747873779,3602036899),new m(1955562222,1575990012),new m(2024104815,1125592928),new m(2227730452,2716904306),new m(2361852424,442776044),new m(2428436474,593698344),new m(2756734187,3733110249),new m(3204031479,2999351573),new m(3329325298,3815920427),new m(3391569614,3928383900),new m(3515267271,566280711),new m(3940187606,3454069534),new m(4118630271,4000239992),new m(116418474,1914138554),new m(174292421,2731055270),new m(289380356,3203993006),new m(460393269,320620315),new m(685471733,587496836),new m(852142971,1086792851),new m(1017036298,365543100),new m(1126000580,2618297676),new m(1288033470,3409855158),new m(1501505948,4234509866),new m(1607167915,987167468),new m(1816402316,1246189591)];function ur(r,n,e){var t,o,i,a=[],f=[],u=[],c=[];for(o=0;o<8;o++)a[o]=u[o]=B(r,8*o);for(var w,y,l,s,h,v,g,b,p,A,_,U,E,x,d=0;128<=e;){for(o=0;o<16;o++)c[o]=B(n,8*o+d);for(o=0;o<80;o++){for(i=0;i<8;i++)f[i]=u[i];for(t=tr(u[7],ir(ar(x=u[4],14),ar(x,18),ar(x,41)),(p=u[4],A=u[5],_=u[6],0,U=p.hi&A.hi^~p.hi&_.hi,E=p.lo&A.lo^~p.lo&_.lo,new m(U,E)),fr[o],c[o%16]),f[7]=tr(t,ir(ar(b=u[0],28),ar(b,34),ar(b,39)),(l=u[0],s=u[1],h=u[2],0,v=l.hi&s.hi^l.hi&h.hi^s.hi&h.hi,g=l.lo&s.lo^l.lo&h.lo^s.lo&h.lo,new m(v,g))),f[3]=tr(f[3],t),i=0;i<8;i++)u[(i+1)%8]=f[i];if(o%16==15)for(i=0;i<16;i++)c[i]=tr(c[i],c[(i+9)%16],ir(ar(y=c[(i+1)%16],1),ar(y,8),or(y,7)),ir(ar(w=c[(i+14)%16],19),ar(w,61),or(w,6)))}for(o=0;o<8;o++)u[o]=tr(u[o],a[o]),a[o]=u[o];d+=128,e-=128}for(o=0;o<8;o++)S(r,8*o,a[o]);return e}var cr=new Uint8Array([106,9,230,103,243,188,201,8,187,103,174,133,132,202,167,59,60,110,243,114,254,148,248,43,165,79,245,58,95,29,54,241,81,14,82,127,173,230,130,209,155,5,104,140,43,62,108,31,31,131,217,171,251,65,189,107,91,224,205,25,19,126,33,121]);function wr(r,n,e){var t,o=new Uint8Array(64),i=new Uint8Array(256),a=e;for(t=0;t<64;t++)o[t]=cr[t];for(ur(o,n,e),e%=128,t=0;t<256;t++)i[t]=0;for(t=0;t<e;t++)i[t]=n[a-e+t];for(i[e]=128,i[(e=256-128*(e<112?1:0))-9]=0,S(i,e-8,new m(a/536870912|0,a<<3)),ur(o,i,e),t=0;t<64;t++)r[t]=o[t];return 0}function yr(r,n){var e=v(),t=v(),o=v(),i=v(),a=v(),f=v(),u=v(),c=v(),w=v();V(e,r[1],r[0]),V(w,n[1],n[0]),X(e,e,w),I(t,r[0],r[1]),I(w,n[0],n[1]),X(t,t,w),X(o,r[3],n[3]),X(o,o,l),X(i,r[2],n[2]),I(i,i,i),V(a,t,e),V(f,i,o),I(u,i,o),I(c,t,e),X(r[0],a,f),X(r[1],c,u),X(r[2],u,f),X(r[3],a,c)}function lr(r,n,e){var t;for(t=0;t<4;t++)F(r[t],n[t],e)}function sr(r,n){var e=v(),t=v(),o=v();H(o,n[2]),X(e,n[0],o),X(t,n[1],o),Z(r,t),r[31]^=q(e)<<7}function hr(r,n,e){var t,o;for(O(r[0],c),O(r[1],w),O(r[2],w),O(r[3],c),o=255;0<=o;--o)lr(r,n,t=e[o/8|0]>>(7&o)&1),yr(n,r),yr(r,r),lr(r,n,t)}function vr(r,n){var e=[v(),v(),v(),v()];O(e[0],t),O(e[1],f),O(e[2],w),X(e[3],t,f),hr(r,e,n)}function gr(r,n,e){var t,o=new Uint8Array(64),i=[v(),v(),v(),v()];for(e||a(n,32),wr(o,n,32),o[0]&=248,o[31]&=127,o[31]|=64,vr(i,o),sr(r,i),t=0;t<32;t++)n[t+32]=r[t];return 0}var br=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function pr(r,n){var e,t,o,i;for(t=63;32<=t;--t){for(e=0,o=t-32,i=t-12;o<i;++o)n[o]+=e-16*n[t]*br[o-(t-32)],e=Math.floor((n[o]+128)/256),n[o]-=256*e;n[o]+=e,n[t]=0}for(o=e=0;o<32;o++)n[o]+=e-(n[31]>>4)*br[o],e=n[o]>>8,n[o]&=255;for(o=0;o<32;o++)n[o]-=e*br[o];for(t=0;t<32;t++)n[t+1]+=n[t]>>8,r[t]=255&n[t]}function Ar(r){var n,e=new Float64Array(64);for(n=0;n<64;n++)e[n]=r[n];for(n=0;n<64;n++)r[n]=0;pr(r,e)}function _r(r,n,e,t){var o,i,a=new Uint8Array(64),f=new Uint8Array(64),u=new Uint8Array(64),c=new Float64Array(64),w=[v(),v(),v(),v()];wr(a,t,32),a[0]&=248,a[31]&=127,a[31]|=64;var y=e+64;for(o=0;o<e;o++)r[64+o]=n[o];for(o=0;o<32;o++)r[32+o]=a[32+o];for(wr(u,r.subarray(32),e+32),Ar(u),vr(w,u),sr(r,w),o=32;o<64;o++)r[o]=t[o];for(wr(f,r,e+64),Ar(f),o=0;o<64;o++)c[o]=0;for(o=0;o<32;o++)c[o]=u[o];for(o=0;o<32;o++)for(i=0;i<32;i++)c[o+i]+=f[o]*a[i];return pr(r.subarray(32),c),y}function Ur(r,n,e,t){var o,i=new Uint8Array(32),a=new Uint8Array(64),f=[v(),v(),v(),v()],u=[v(),v(),v(),v()];if(e<64)return-1;if(function(r,n){var e=v(),t=v(),o=v(),i=v(),a=v(),f=v(),u=v();if(O(r[2],w),D(r[1],n),j(o,r[1]),X(i,o,y),V(o,o,r[2]),I(i,r[2],i),j(a,i),j(f,a),X(u,f,a),X(e,u,o),X(e,e,i),J(e,e),X(e,e,o),X(e,e,i),X(e,e,i),X(r[0],e,i),j(t,r[0]),X(t,t,i),G(t,o)&&X(r[0],r[0],s),j(t,r[0]),X(t,t,i),G(t,o))return 1;q(r[0])===n[31]>>7&&V(r[0],c,r[0]),X(r[3],r[0],r[1])}(u,t))return-1;for(o=0;o<e;o++)r[o]=n[o];for(o=0;o<32;o++)r[o+32]=t[o];if(wr(a,r,e),Ar(a),hr(f,u,a),vr(u,n.subarray(32)),yr(f,u),sr(i,f),e-=64,_(n,0,i,0)){for(o=0;o<e;o++)r[o]=0;return-1}for(o=0;o<e;o++)r[o]=n[o+64];return e}function Er(r,n){if(32!==r.length)throw new Error("bad key size");if(24!==n.length)throw new Error("bad nonce size")}function xr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function dr(r){for(var n=0;n<r.length;n++)r[n]=0}i.lowlevel={crypto_core_hsalsa20:x,crypto_stream_xor:T,crypto_stream:L,crypto_stream_salsa20_xor:K,crypto_stream_salsa20:Y,crypto_onetimeauth:R,crypto_onetimeauth_verify:P,crypto_verify_16:A,crypto_verify_32:_,crypto_secretbox:M,crypto_secretbox_open:N,crypto_scalarmult:Q,crypto_scalarmult_base:W,crypto_box_beforenm:rr,crypto_box_afternm:nr,crypto_box:function(r,n,e,t,o,i){var a=new Uint8Array(32);return rr(a,o,i),nr(r,n,e,t,a)},crypto_box_open:function(r,n,e,t,o,i){var a=new Uint8Array(32);return rr(a,o,i),er(r,n,e,t,a)},crypto_box_keypair:$,crypto_hash:wr,crypto_sign:_r,crypto_sign_keypair:gr,crypto_sign_open:Ur,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:v,D:y,L:br,pack25519:Z,unpack25519:D,M:X,A:I,S:j,Z:V,pow2523:J,add:yr,set25519:O,modL:pr,scalarmult:hr,scalarbase:vr},i.randomBytes=function(r){var n=new Uint8Array(r);return a(n,r),n},i.secretbox=function(r,n,e){xr(r,n,e),Er(e,n);for(var t=new Uint8Array(32+r.length),o=new Uint8Array(t.length),i=0;i<r.length;i++)t[i+32]=r[i];return M(o,t,t.length,n,e),o.subarray(16)},i.secretbox.open=function(r,n,e){xr(r,n,e),Er(e,n);for(var t=new Uint8Array(16+r.length),o=new Uint8Array(t.length),i=0;i<r.length;i++)t[i+16]=r[i];return t.length<32||0!==N(o,t,t.length,n,e)?null:o.subarray(32)},i.secretbox.keyLength=32,i.secretbox.nonceLength=24,i.secretbox.overheadLength=16,i.scalarMult=function(r,n){if(xr(r,n),32!==r.length)throw new Error("bad n size");if(32!==n.length)throw new Error("bad p size");var e=new Uint8Array(32);return Q(e,r,n),e},i.scalarMult.base=function(r){if(xr(r),32!==r.length)throw new Error("bad n size");var n=new Uint8Array(32);return W(n,r),n},i.scalarMult.scalarLength=32,i.scalarMult.groupElementLength=32,i.box=function(r,n,e,t){var o=i.box.before(e,t);return i.secretbox(r,n,o)},i.box.before=function(r,n){xr(r,n),function(r,n){if(32!==r.length)throw new Error("bad public key size");if(32!==n.length)throw new Error("bad secret key size")}(r,n);var e=new Uint8Array(32);return rr(e,r,n),e},i.box.after=i.secretbox,i.box.open=function(r,n,e,t){var o=i.box.before(e,t);return i.secretbox.open(r,n,o)},i.box.open.after=i.secretbox.open,i.box.keyPair=function(){var r=new Uint8Array(32),n=new Uint8Array(32);return $(r,n),{publicKey:r,secretKey:n}},i.box.keyPair.fromSecretKey=function(r){if(xr(r),32!==r.length)throw new Error("bad secret key size");var n=new Uint8Array(32);return W(n,r),{publicKey:n,secretKey:new Uint8Array(r)}},i.box.publicKeyLength=32,i.box.secretKeyLength=32,i.box.sharedKeyLength=32,i.box.nonceLength=24,i.box.overheadLength=i.secretbox.overheadLength,i.sign=function(r,n){if(xr(r,n),64!==n.length)throw new Error("bad secret key size");var e=new Uint8Array(64+r.length);return _r(e,r,r.length,n),e},i.sign.open=function(r,n){if(xr(r,n),32!==n.length)throw new Error("bad public key size");var e=new Uint8Array(r.length),t=Ur(e,r,r.length,n);if(t<0)return null;for(var o=new Uint8Array(t),i=0;i<o.length;i++)o[i]=e[i];return o},i.sign.detached=function(r,n){for(var e=i.sign(r,n),t=new Uint8Array(64),o=0;o<t.length;o++)t[o]=e[o];return t},i.sign.detached.verify=function(r,n,e){if(xr(r,n,e),64!==n.length)throw new Error("bad signature size");if(32!==e.length)throw new Error("bad public key size");var t,o=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(t=0;t<64;t++)o[t]=n[t];for(t=0;t<r.length;t++)o[t+64]=r[t];return 0<=Ur(i,o,o.length,e)},i.sign.keyPair=function(){var r=new Uint8Array(32),n=new Uint8Array(64);return gr(r,n),{publicKey:r,secretKey:n}},i.sign.keyPair.fromSecretKey=function(r){if(xr(r),64!==r.length)throw new Error("bad secret key size");for(var n=new Uint8Array(32),e=0;e<n.length;e++)n[e]=r[32+e];return{publicKey:n,secretKey:new Uint8Array(r)}},i.sign.keyPair.fromSeed=function(r){if(xr(r),32!==r.length)throw new Error("bad seed size");for(var n=new Uint8Array(32),e=new Uint8Array(64),t=0;t<32;t++)e[t]=r[t];return gr(n,e,!0),{publicKey:n,secretKey:e}},i.sign.publicKeyLength=32,i.sign.secretKeyLength=64,i.sign.seedLength=32,i.sign.signatureLength=64,i.hash=function(r){xr(r);var n=new Uint8Array(64);return wr(n,r,r.length),n},i.hash.hashLength=64,i.verify=function(r,n){return xr(r,n),0!==r.length&&0!==n.length&&(r.length===n.length&&0===u(r,0,n,0,r.length))},i.setPRNG=function(r){a=r},function(){var o="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(o&&o.getRandomValues){i.setPRNG(function(r,n){var e,t=new Uint8Array(n);for(e=0;e<n;e+=65536)o.getRandomValues(t.subarray(e,e+Math.min(n-e,65536)));for(e=0;e<n;e++)r[e]=t[e];dr(t)})}else"undefined"!=typeof require&&(o=require("crypto"))&&o.randomBytes&&i.setPRNG(function(r,n){var e,t=o.randomBytes(n);for(e=0;e<n;e++)r[e]=t[e];dr(t)})}()}(NACL);
  /* ======================================================================
     انبار داده پایدار کاربر (localStorage) — کلیدهای ثابت + مهاجرت امن
     ----------------------------------------------------------------------
     این سه نام، قرارداد دائمی با دستگاه کاربران‌اند و با هیچ به‌روزرسانی یا دوره تازه‌ای عوض نمی‌شوند:
       academy_global_state    پروفایل، تنظیمات، زبان، پوسته، گواهی‌ها، کیس‌های ICU، فهرست دوره‌های شناخته‌شده
       academy_license_data    کدهای فعال‌سازی، Device ID، last_valid_timestamp، الماس هدیه
       academy_course_<id>     پیشرفت هر دوره: XP، 💎، 🔥، ستاره‌ها، قلب‌ها، کلینیک خطاها، ...
     همه بخش‌های موتور با نام‌های منطقی قدیمی (مثل 'academy.theme') کار می‌کنند و این لایه آن‌ها را
     به فیلدی از همین سه کلید می‌برد؛ پس افزودن دوره یا امکان تازه هرگز ساختار ذخیره را نمی‌شکند.
     migrateAndSyncState() هنگام هر بار اجرا:
       ۱. داده نسخه‌های قبلی (academy.*، <id>.v1، last_valid_timestamp) را یک بار به کلیدهای ثابت می‌آورد
          و کلیدهای قدیمی را پاک نمی‌کند (برگشت به نسخه قبلی هم سالم می‌ماند)،
       ۲. بیت هر دوره را در فهرست دوره‌ها «میخ» می‌کند تا هیچ دوره تازه‌ای بیت دوره قبلی را نگیرد
          (بیت تکراری = دسترسی اشتباه به کدهای خریداری‌شده).
     هیچ داده‌ای در این لایه حذف یا ریست نمی‌شود.
     ====================================================================== */
  const STORE_KEYS = Object.freeze({
    GLOBAL: 'academy_global_state',
    LICENSE: 'academy_license_data',
    CACHE: 'academy_cache',             // فقط داده بازسازی‌شدنی (تصویر شخصیت‌ها برای صفحه ورود)
    COURSE_PREFIX: 'academy_course_'
  });
  const SCHEMA = 2;                     // ۱ = کلیدهای پراکنده نسخه اول، ۲ = کلیدهای ثابت
  const MAX_COURSES = 16;               // بیت‌مسک ۱۶ بیتی: 1، 2، 4، … 32768 (2^15)

  const PHY = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* */ } },
    keys() { const out = []; try { for (let i = 0; i < localStorage.length; i++) out.push(localStorage.key(i)); } catch (e) { /* */ } return out; }
  };
  const clone = v => (v == null || typeof v !== 'object' ? v : JSON.parse(JSON.stringify(v)));
  /* هر کلید فیزیکی یک شیء JSON است؛ رشته خام آخر کش می‌شود تا خواندن‌های پشت‌سرهم دوباره parse نشوند */
  const parsed = {};
  function readObj(k) {
    const raw = PHY.get(k), c = parsed[k];
    if (c && c.raw === raw) return c.obj;
    let obj = {};
    if (raw) {
      try { obj = JSON.parse(raw); } catch (e) { obj = null; }
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        // داده خراب پاک نمی‌شود: یک نسخه برای بازیابی دستی نگه داشته می‌شود
        PHY.set(k + '_recovery', raw);
        obj = {};
      }
    }
    parsed[k] = { raw, obj };
    return obj;
  }
  function writeObj(k, obj) {
    const raw = JSON.stringify(obj);
    if (PHY.set(k, raw)) parsed[k] = { raw, obj };
  }
  /** نام منطقی → محل واقعی: { k: کلید فیزیکی، f: فیلد } (f تهی = کل شیء) */
  function route(name) {
    if (name === 'academy.license') return { k: STORE_KEYS.LICENSE, f: null };
    if (name === 'academy.device') return { k: STORE_KEYS.LICENSE, f: 'device' };
    if (name === 'last_valid_timestamp') return { k: STORE_KEYS.LICENSE, f: 'lastValid' };
    if (name.indexOf('academy.art.') === 0) return { k: STORE_KEYS.CACHE, f: 'art.' + name.slice(12) };
    if (name.indexOf('academy.') === 0) return { k: STORE_KEYS.GLOBAL, f: name.slice(8) };
    return null; // بقیه (مثل مقدارهای ابزار هر دوره) مستقیم در localStorage
  }
  const LIC_META = ['device', 'lastValid'];
  function getField(r) {
    const o = readObj(r.k);
    if (r.f) return o[r.f];
    const p = {}; Object.keys(o).forEach(x => { if (LIC_META.indexOf(x) < 0) p[x] = o[x]; });
    return p;
  }
  function setField(r, v) {
    const o = Object.assign({}, readObj(r.k));
    if (r.f) { if (v === undefined) delete o[r.f]; else o[r.f] = v; }
    else {
      // کل مجوز: فیلدهای حیاتی (Device ID و ساعت معتبر) همیشه حفظ می‌شوند
      const keep = {}; LIC_META.forEach(x => { if (o[x] !== undefined) keep[x] = o[x]; });
      Object.keys(o).forEach(x => { delete o[x]; });
      Object.assign(o, v || {}, keep);
    }
    writeObj(r.k, o);
  }
  /** همان رابط قبلی LS؛ همه موتور از این استفاده می‌کند */
  const STORE_LS = {
    raw(k) { const r = route(k); if (!r) return PHY.get(k); const v = getField(r); return v == null ? null : typeof v === 'string' ? v : JSON.stringify(v); },
    set(k, v) { const r = route(k); if (!r) { PHY.set(k, v); return; } setField(r, String(v)); },
    del(k) { const r = route(k); if (!r) { PHY.del(k); return; } setField(r, undefined); },
    json(k, d) {
      const r = route(k);
      let v;
      if (!r) { try { v = JSON.parse(PHY.get(k) || 'null'); } catch (e) { v = null; } return v == null ? d : v; }
      v = getField(r);
      if (typeof v === 'string') { try { v = JSON.parse(v); } catch (e) { v = null; } } else v = clone(v);
      return v == null ? d : v;
    },
    put(k, o) { const r = route(k); if (!r) { PHY.set(k, JSON.stringify(o)); return; } setField(r, clone(o)); }
  };
  const courseKey = id => STORE_KEYS.COURSE_PREFIX + id;

  /* ---------- ثبت دوره‌ها: bitFlag یکتا (توان ۲ تا 2^15) و میخ شدن بیت هر دوره ---------- */
  const isFlag = b => Number.isInteger(b) && b > 0 && b <= (1 << (MAX_COURSES - 1)) && (b & (b - 1)) === 0;
  let REG = { sig: null, list: [], rejected: [] };
  /** فهرست دوره‌های معتبر به ترتیب order؛ با اضافه شدن هر فایل data-*.js خودکار به‌روز می‌شود */
  function registry() {
    const AC = window.ACADEMY_COURSES || {};
    const ids = Object.keys(AC);
    const sig = ids.join('|');
    if (sig === REG.sig) return REG;
    const g = readObj(STORE_KEYS.GLOBAL), pinned = Object.assign({}, g.courses || {});
    const byBit = {}; Object.keys(pinned).forEach(id => { byBit[pinned[id]] = id; });
    const list = [], rejected = [];
    // اول دوره‌هایی که بیتشان قبلاً میخ شده، بعد دوره‌های تازه (به ترتیب order)
    const cand = ids.map(id => AC[id]).filter(c => c && typeof c === 'object')
      .sort((a, b) => ((pinned[a.id] ? 0 : 1) - (pinned[b.id] ? 0 : 1)) || ((a.order || 99) - (b.order || 99)));
    const used = {};
    cand.forEach(c => {
      const want = c.bitFlag != null ? c.bitFlag : c.bit;
      const ok = c.id && typeof c.config === 'function' && typeof c.content === 'function' && typeof c.tools === 'function';
      let bit = pinned[c.id] != null ? pinned[c.id] : want;
      let why = '';
      if (!ok) why = 'فایل دوره ناقص است (id، config، content و tools لازم‌اند)';
      else if (!isFlag(bit)) why = `bitFlag باید یکی از 1، 2، 4، … ${1 << (MAX_COURSES - 1)} باشد`;
      else if (used[bit]) why = `bitFlag ${bit} تکراری است (مال «${used[bit]}»)`;
      else if (byBit[bit] && byBit[bit] !== c.id) why = `bitFlag ${bit} قبلاً مال دوره «${byBit[bit]}» بوده و برای حفظ کدهای خریداری‌شده قابل استفاده دوباره نیست`;
      if (why) { rejected.push({ id: c.id, why }); console.warn('[academy] دوره «' + c.id + '» ثبت نشد: ' + why); return; }
      if (pinned[c.id] != null && want !== pinned[c.id]) console.warn(`[academy] bitFlag دوره «${c.id}» در فایل ${want} است ولی برای حفظ اشتراک کاربران همان ${pinned[c.id]} قبلی استفاده می‌شود.`);
      c.bit = c.bitFlag = bit; // بیت مؤثر (میخ‌شده) برای همه بخش‌ها
      used[bit] = c.id;
      list.push(c);
    });
    list.sort((a, b) => (a.order || 99) - (b.order || 99) || a.bit - b.bit);
    REG = { sig, list, rejected };
    return REG;
  }

  /** مهاجرت از کلیدهای قدیمی + همگام‌سازی فهرست دوره‌ها؛ هر بار اجرا امن است و چیزی پاک نمی‌کند */
  function migrateAndSyncState() {
    const report = { from: 0, moved: [], courses: [], newCourses: [] };
    const g = Object.assign({}, readObj(STORE_KEYS.GLOBAL));
    report.from = g.schema || (PHY.get('academy.license') || PHY.get('academy.profile') ? 1 : 0);
    if ((g.schema || 0) < SCHEMA) {
      const lic = Object.assign({}, readObj(STORE_KEYS.LICENSE)), cache = Object.assign({}, readObj(STORE_KEYS.CACHE));
      const asVal = s => { if (typeof s !== 'string') return s; const t = s.trim(); if (t[0] === '{' || t[0] === '[') { try { return JSON.parse(t); } catch (e) { /* */ } } return s; };
      PHY.keys().forEach(k => {
        const v = PHY.get(k); if (v == null) return;
        if (k === 'academy.license') {
          let o = {}; try { o = JSON.parse(v) || {}; } catch (e) { /* */ }
          const uni = (a, b) => { const out = (a || []).slice(); (b || []).forEach(x => { if (out.indexOf(x) < 0) out.push(x); }); return out; };
          lic.codes = uni(lic.codes, o.codes); lic.ack = uni(lic.ack, o.ack);
          lic.gifts = Object.assign({}, o.gifts || {}, lic.gifts || {});
          lic.seen = Math.max(lic.seen || 0, o.seen || 0);
          Object.keys(o).forEach(x => { if (lic[x] === undefined) lic[x] = o[x]; });
          report.moved.push(k);
        } else if (k === 'academy.device') {
          if (!lic.device) lic.device = v; report.moved.push(k);
        } else if (k === 'last_valid_timestamp') {
          lic.lastValid = String(Math.max(+lic.lastValid || 0, +v || 0)); report.moved.push(k);
        } else if (k.indexOf('academy.art.') === 0) {
          cache['art.' + k.slice(12)] = v;
        } else if (k.indexOf('academy.') === 0) {
          const f = k.slice(8);
          if (g[f] === undefined) { g[f] = asVal(v); report.moved.push(k); }
        } else {
          const m = /^([a-z][a-z0-9_-]*)\.v1$/.exec(k);
          if (m && !PHY.get(courseKey(m[1]))) {
            let ok = false; try { const o = JSON.parse(v); ok = !!o && typeof o === 'object' && (!o.app || o.app === m[1]); } catch (e) { /* */ }
            if (ok) { PHY.set(courseKey(m[1]), v); report.moved.push(k); report.courses.push(m[1]); }
          }
        }
      });
      writeObj(STORE_KEYS.LICENSE, lic);
      writeObj(STORE_KEYS.CACHE, cache);
      g.schema = SCHEMA;
      if (report.from) { g.migratedFrom = report.from; g.migratedAt = Date.now(); }
      if (!g.createdAt) g.createdAt = Date.now();
    }
    // میخ کردن بیت دوره‌های فعلی (دوره تازه = بیت تازه؛ بیت دوره قدیمی هرگز به دوره دیگری نمی‌رسد)
    writeObj(STORE_KEYS.GLOBAL, g);
    REG.sig = null;
    const reg = registry();
    const pins = Object.assign({}, g.courses || {});
    reg.list.forEach(c => { if (pins[c.id] == null) { pins[c.id] = c.bit; if (g.courses) report.newCourses.push(c.id); } });
    if (JSON.stringify(pins) !== JSON.stringify(g.courses || {})) { const g2 = Object.assign({}, readObj(STORE_KEYS.GLOBAL)); g2.courses = pins; writeObj(STORE_KEYS.GLOBAL, g2); }
    report.rejected = reg.rejected;
    return report;
  }
  const STORE = { KEYS: STORE_KEYS, SCHEMA, MAX_COURSES, LS: STORE_LS, courseKey, registry, migrateAndSyncState, isFlag };

  /* ======================================================================
     زبان (D = تعریف دوره از فایل داده)
     ====================================================================== */
  ENGINE.lang = function (D) {
    /* زبان برنامه (فارسی / English) — مشترک سه دوره
     * دوره‌هایی که نسخه انگلیسی ندارند (مثل هما) فقط فارسی‌اند؛ T و tx برای سازگاری موتور می‌مانند.
     *   EA.T(fa, en)  متن مناسب زبان فعلی
     *   EA.setLang(l) عوض کردن زبان و خبر دادن به شنونده‌ها */
    (function (root) {
      const EA = root.EA = root.EA || {};
      /* زبان سراسری آکادمی: یک تنظیم برای همه دوره‌ها، تا رفتن از صفحه اول به دوره یا ابزارها زبان را عوض نکند */
      const KEY = 'academy.lang'; // در academy_global_state (لایه STORE)
      const multi = D.langs.indexOf('en') >= 0;
      let lang = multi ? STORE.LS.raw(KEY) : 'fa';
      if (lang !== 'en' && lang !== 'fa') lang = 'fa'; // مخاطب اصلی فارسی‌زبان است؛ پیش‌فرض فارسی
      EA.lang = lang;
      EA.T = multi ? (fa, en) => (EA.lang === 'en' ? en : fa) : fa => fa;
      EA.isEn = () => EA.lang === 'en';
      /** برای متن‌های ثابتی که هر دو زبان را نگه می‌دارند: {fa, en} یا رشته */
      EA.tx = x => (x && typeof x === 'object' && 'fa' in x ? (EA.lang === 'en' ? x.en : x.fa) : x);

      const listeners = [];
      EA.onLang = fn => listeners.push(fn);

      function applyDoc() {
        if (typeof document === 'undefined') return;
        const h = document.documentElement;
        h.lang = EA.lang;
        h.dir = EA.lang === 'en' ? 'ltr' : 'rtl';
        // عنوان صفحه فقط داخل دوره (نه وقتی صفحه اول داده دوره را برای کیس امروز می‌خواند)؛ عنوان دوره در config است
        if (document.body && !/\bmode-(course|calc)\b/.test(document.body.className)) return;
        const C0 = root.EA && root.EA.C, en0 = EA.lang === 'en', BR = window.ACADEMY_BRAND;
        document.title = ((C0 && (en0 ? C0.titleEn : C0.titleFa)) || D.titleFa || (en0 ? D.nameEn : D.nameFa) || '') + (BR ? ' • ' + (en0 ? BR.en : BR.fa) : '');
      }
      EA.applyLangDoc = applyDoc;

      EA.setLang = l => {
        if (!multi || (l !== 'en' && l !== 'fa')) return;
        EA.lang = l;
        STORE.LS.set(KEY, l);
        if (EA.W) EA.worlds = EA.W[l];
        if (EA.RD) EA.rounds = EA.RD[l];
        applyDoc();
        listeners.forEach(fn => { try { fn(l); } catch (e) { /* */ } });
      };

      applyDoc();
    })(window);
  };

  /* ======================================================================
     موتور صدا (Web Audio، بدون فایل صوتی)
     ====================================================================== */
  ENGINE.audio = function () {
    /* موتور صدا: افکت‌های ساخته‌شده با Web Audio و موسیقی پس‌زمینه آرام برای تمرکز
     * هیچ فایل صوتی لازم نیست؛ همه صداها در لحظه ساخته می‌شوند.
     * زنجیره: صدا ← باس (افکت/موسیقی) ← ریورب و مستر ← کمپرسور ← بلندگو */
    (function () {
      const EA = window.EA = window.EA || {};
      let ctx = null, master, sfxBus, musicBus, verbIn, noiseBuf;

      const settings = () => (EA.S && EA.S.get() && EA.S.get().settings) || { sound: true, music: true, sfxVol: 0.8, musicVol: 0.4 };

      function init() {
        if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return ctx; }
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
        const comp = ctx.createDynamicsCompressor();
        comp.threshold.value = -20; comp.knee.value = 12; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.2;
        comp.connect(ctx.destination);
        master = ctx.createGain(); master.gain.value = 0.9; master.connect(comp);

        // ریورب: پاسخ ضربه ساختگی با نویز میرا
        const len = Math.floor(ctx.sampleRate * 2.6), ir = ctx.createBuffer(2, len, ctx.sampleRate);
        for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
        const conv = ctx.createConvolver(); conv.buffer = ir;
        verbIn = ctx.createGain(); verbIn.gain.value = 0.3;
        const verbOut = ctx.createGain(); verbOut.gain.value = 0.55;
        verbIn.connect(conv); conv.connect(verbOut); verbOut.connect(master);

        sfxBus = ctx.createGain(); sfxBus.connect(master); sfxBus.connect(verbIn);
        musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(master);
        const musicVerb = ctx.createGain(); musicVerb.gain.value = 1.4; musicBus.connect(musicVerb); musicVerb.connect(verbIn);

        noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const nd = noiseBuf.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
        volumes();
        return ctx;
      }
      function volumes() {
        if (!ctx) return;
        const s = settings();
        sfxBus.gain.setTargetAtTime(s.sound ? 0.9 * (s.sfxVol == null ? 0.8 : s.sfxVol) : 0, ctx.currentTime, 0.05);
        if (playing) musicBus.gain.setTargetAtTime(musicLevel(), ctx.currentTime, 0.8);
      }
      const musicLevel = () => { const s = settings(); return 0.55 * (s.musicVol == null ? 0.4 : s.musicVol) * (duck ? 0.45 : 1); };

      /* ---------- سازها ---------- */
      const hz = n => 440 * Math.pow(2, (n - 69) / 12); // شماره MIDI ← بسامد

      /** صدای ساده با پوش ADSR و فیلتر اختیاری */
      function voice(f, t, dur, o) {
        const p = o || {};
        const bus = p.bus || sfxBus;
        const g = ctx.createGain();
        const vol = p.vol == null ? 0.2 : p.vol, a = p.a == null ? 0.008 : p.a, r = p.r == null ? dur : p.r;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(vol, t + a);
        g.gain.exponentialRampToValueAtTime(0.0001, t + a + r);
        let node = g;
        if (p.lp) { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = p.lp; fl.Q.value = p.q || 0.7; g.connect(fl); node = fl; }
        node.connect(bus);
        (p.detune ? [-p.detune, p.detune] : [0]).forEach(dt => {
          const osc = ctx.createOscillator();
          osc.type = p.type || 'sine';
          osc.frequency.setValueAtTime(f, t);
          if (p.to) osc.frequency.exponentialRampToValueAtTime(p.to, t + (p.glide || dur));
          osc.detune.value = dt;
          osc.connect(g); osc.start(t); osc.stop(t + a + r + 0.05);
        });
        return g;
      }
      /** زنگ FM: شبیه گلوکن‌اشپیل و سلستا */
      function bell(f, t, dur, vol, bus, ratio) {
        const car = ctx.createOscillator(), mod = ctx.createOscillator(), mg = ctx.createGain(), g = ctx.createGain();
        car.frequency.value = f; mod.frequency.value = f * (ratio || 3.5);
        mg.gain.setValueAtTime(f * 1.6, t); mg.gain.exponentialRampToValueAtTime(f * 0.05, t + dur * 0.6);
        mod.connect(mg); mg.connect(car.frequency);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        car.connect(g); g.connect(bus || sfxBus);
        [car, mod].forEach(o => { o.start(t); o.stop(t + dur + 0.05); });
      }
      /** نویز فیلترشده: برای تیک، کلیک و وزش */
      function noise(t, dur, o) {
        const p = o || {};
        const src = ctx.createBufferSource(); src.buffer = noiseBuf;
        const fl = ctx.createBiquadFilter(); fl.type = p.type || 'bandpass'; fl.frequency.setValueAtTime(p.f || 2000, t); fl.Q.value = p.q || 1;
        if (p.to) fl.frequency.exponentialRampToValueAtTime(p.to, t + dur);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(p.vol || 0.1, t + (p.a || 0.005)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(fl); fl.connect(g); g.connect(p.bus || sfxBus);
        src.start(t); src.stop(t + dur + 0.05);
      }
      /** سیم زخمه‌ای ملایم (کارپلاس–استرانگ ساده‌شده با تریانگل و فیلتر) */
      function pluck(f, t, dur, vol, bus) {
        voice(f, t, dur, { type: 'triangle', vol, a: 0.004, r: dur, lp: Math.min(8000, f * 4), bus });
        voice(f * 2, t, dur * 0.5, { type: 'sine', vol: vol * 0.25, a: 0.003, r: dur * 0.5, bus });
      }

      /* ---------- افکت‌ها ---------- */
      const SFX = {
        tap(t) { noise(t, 0.035, { f: 3200, q: 2.5, vol: 0.05 }); voice(1760, t, 0.03, { vol: 0.025, r: 0.03 }); },
        select(t) { voice(520, t, 0.09, { to: 880, glide: 0.06, vol: 0.09, r: 0.09 }); noise(t, 0.03, { f: 2500, vol: 0.03 }); },
        correct(t) {
          bell(hz(84), t, 0.5, 0.11); bell(hz(91), t + 0.085, 0.8, 0.12);
          voice(hz(72), t + 0.085, 0.5, { type: 'triangle', vol: 0.05, r: 0.5, lp: 2400 });
          voice(hz(76), t + 0.085, 0.5, { type: 'triangle', vol: 0.04, r: 0.5, lp: 2400 });
        },
        wrong(t) {
          voice(hz(58), t, 0.32, { type: 'triangle', to: hz(53), glide: 0.25, vol: 0.14, r: 0.32, lp: 900 });
          voice(hz(46), t, 0.28, { type: 'sine', vol: 0.12, r: 0.28 });
          noise(t, 0.08, { type: 'lowpass', f: 400, vol: 0.06 });
        },
        combo(t) { [79, 83, 86, 91, 95].forEach((n, i) => bell(hz(n), t + i * 0.045, 0.45, 0.06)); },
        done(t) {
          [72, 76, 79, 84].forEach((n, i) => pluck(hz(n), t + i * 0.09, 0.5, 0.1));
          [60, 64, 67, 72, 76].forEach(n => voice(hz(n), t + 0.4, 1.4, { type: 'triangle', vol: 0.045, a: 0.03, r: 1.4, lp: 3000, detune: 5 }));
          bell(hz(96), t + 0.4, 1.2, 0.07); bell(hz(91), t + 0.52, 1.2, 0.05);
        },
        fail(t) { [67, 63, 60].forEach((n, i) => voice(hz(n), t + i * 0.2, 0.5, { type: 'triangle', vol: 0.08, r: 0.5, lp: 1600 })); },
        chest(t) {
          noise(t, 0.5, { type: 'bandpass', f: 800, to: 7000, q: 0.8, vol: 0.05, a: 0.2 });
          [88, 91, 93, 96, 98, 100, 103].forEach((n, i) => bell(hz(n), t + 0.12 + i * 0.06 + Math.random() * 0.02, 0.6, 0.05));
        },
        level(t) {
          const ch = [[65, 69, 72], [67, 71, 74], [72, 76, 79, 84]];
          ch.forEach((c, i) => c.forEach(n => voice(hz(n), t + i * 0.22, i === 2 ? 1.3 : 0.3, { type: 'sawtooth', vol: 0.03, a: 0.02, r: i === 2 ? 1.3 : 0.25, lp: 1800, detune: 7 })));
          bell(hz(96), t + 0.44, 1.2, 0.06);
        },
        char(t) {
          noise(t, 0.9, { type: 'bandpass', f: 400, to: 9000, q: 0.7, vol: 0.045, a: 0.4 });
          [60, 64, 67, 71, 74, 76, 79, 83, 86].forEach((n, i) => pluck(hz(n + 12), t + 0.2 + i * 0.06, 0.7, 0.055));
          [72, 76, 79, 83].forEach(n => voice(hz(n), t + 0.8, 1.6, { type: 'sine', vol: 0.04, a: 0.1, r: 1.6, detune: 6 }));
        },
        streak(t) { noise(t, 0.6, { type: 'lowpass', f: 300, to: 3000, vol: 0.07, a: 0.15 }); [69, 73, 76, 81].forEach((n, i) => pluck(hz(n), t + 0.2 + i * 0.08, 0.6, 0.08)); },
        tick(t) { noise(t, 0.02, { f: 5000, q: 4, vol: 0.03 }); }
      };
      function sfx(name) {
        const s = settings();
        if (!s.sound || !SFX[name]) return;
        if (!init()) return;
        try { SFX[name](ctx.currentTime + 0.01); } catch (e) { /* بی‌صدا */ }
      }

      /* ---------- موسیقی پس‌زمینه: پد و زنگ‌های آرام، تولیدشونده ---------- */
      // ری ماژور لو‌فای: Dmaj9 ← Bm11 ← Gmaj9 ← Aadd9 (شماره MIDI)
      const CHORDS = [[50, 62, 66, 69, 73, 76], [47, 62, 66, 69, 71, 76], [43, 59, 62, 66, 69, 74], [45, 61, 64, 66, 69, 71]];
      const SCALE = [74, 76, 78, 81, 83, 86, 88, 90]; // پنتاتونیک ری
      const BAR = 7.2; // ثانیه برای هر آکورد
      let playing = false, timer = null, nextBar = 0, barIdx = 0, duck = false;

      function scheduleBar(t) {
        const ch = CHORDS[barIdx % CHORDS.length];
        ch.forEach((n, i) => {
          if (i === 0) voice(hz(n), t, BAR, { type: 'sine', vol: 0.09, a: 1.2, r: BAR + 1.2, bus: musicBus });
          else voice(hz(n), t + i * 0.05, BAR, { type: i % 2 ? 'triangle' : 'sine', vol: 0.026, a: 2.4, r: BAR + 2.2, lp: 1100, detune: 6, bus: musicBus });
        });
        // زنگ‌های پراکنده ملودی
        let tt = t + 0.6 + Math.random();
        while (tt < t + BAR - 0.4) {
          if (Math.random() < 0.62) bell(hz(SCALE[Math.floor(Math.random() * SCALE.length)]), tt, 2.6, 0.022 + Math.random() * 0.012, musicBus, 2);
          tt += [0.6, 0.9, 1.2, 1.8][Math.floor(Math.random() * 4)];
        }
        // ضربه بسیار نرم ابتدای میزان
        noise(t, 1.4, { type: 'lowpass', f: 180, vol: 0.02, a: 0.3, bus: musicBus });
        barIdx++;
      }
      function loop() {
        if (!playing) return;
        while (nextBar < ctx.currentTime + 1.5) { scheduleBar(nextBar); nextBar += BAR; }
      }
      function startMusic() {
        if (playing) return true;
        if (!init()) return false;
        playing = true;
        nextBar = ctx.currentTime + 0.2;
        musicBus.gain.cancelScheduledValues(ctx.currentTime);
        musicBus.gain.setValueAtTime(0.0001, ctx.currentTime);
        musicBus.gain.linearRampToValueAtTime(musicLevel(), ctx.currentTime + 4);
        loop(); timer = setInterval(loop, 400);
        return true;
      }
      function stopMusic() {
        if (!playing) return;
        playing = false; clearInterval(timer);
        if (ctx) musicBus.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.4);
      }
      /** در آزمون‌ها موسیقی کمی آرام‌تر می‌شود */
      function setDuck(on) { duck = !!on; volumes(); }

      function syncMusic() {
        const s = settings();
        if (s.music && !document.hidden) startMusic(); else stopMusic();
      }
      // مرورگرها صدا را فقط پس از اولین لمس کاربر اجازه می‌دهند
      let unlocked = false;
      const unlock = () => {
        if (unlocked) return;
        unlocked = true;
        init();
        syncMusic();
      };
      ['pointerdown', 'keydown', 'touchstart'].forEach(ev => document.addEventListener(ev, unlock, { capture: true, passive: true }));
      document.addEventListener('visibilitychange', () => { if (unlocked) syncMusic(); });

      EA.audio = { sfx, startMusic, stopMusic, syncMusic, volumes, setDuck, isPlaying: () => playing, unlocked: () => unlocked };
    })();
  };

  /* ======================================================================
     وضعیت کاربر و قواعد بازی‌وارسازی (C = پیکربندی دوره)
     ====================================================================== */
  ENGINE.state = function (C) {
    /* وضعیت کاربر و قواعد بازی‌وارسازی (امتیاز، قلب، زنجیره روزانه، لیگ، نشان‌ها)
     * همه‌چیز در حافظه همین مرورگر می‌ماند. */
    (function (root) {
      const EA = root.EA = root.EA || {};
      const KEY = C.key;

      const MAX_HEARTS = 5;
      const HEART_MS = 30 * 60 * 1000;
      const LEVELS = [0, 60, 150, 300, 500, 750, 1050, 1400, 1800, 2300, 2900, 3600, 4400, 5300, 6300];
      /* نام هر سطح امتیاز؛ یکی برای هر پله LEVELS */
      const TITLES = C.state.titles;
      const TIERS = [
        { id: 'bronze', name: 'برنز', color: '#CD7F32' },
        { id: 'silver', name: 'نقره', color: '#A8B5BD' },
        { id: 'gold', name: 'طلا', color: '#FFC800' },
        { id: 'ruby', name: 'یاقوت', color: '#FF4B6E' },
        { id: 'diamond', name: 'الماس', color: '#1CB0F6' }
      ];
      const NAMES = ['سارا', 'امیرحسین', 'نگار', 'رضا', 'مهسا', 'پویا', 'الهام', 'کیان', 'شیدا', 'بردیا', 'ترانه', 'آرین', 'یاسمن', 'حمید', 'نیلوفر', 'محمدرضا',
        'پریا', 'سینا', 'زهرا', 'علی', 'فاطمه', 'حسین', 'مریم', 'مهدی', 'زینب', 'امیر', 'نرگس', 'محمد', 'سمانه', 'رامین', 'هانیه', 'بهراد', 'مائده', 'پارسا',
        'کوثر', 'آرش', 'ستاره', 'نیما', 'فرشته', 'امید', 'مینا', 'سجاد', 'آیدا', 'میلاد', 'غزل', 'صادق', 'درسا', 'یاسین', 'مبینا', 'عرفان', 'هستی', 'کاوه',
        'رها', 'شایان', 'بهاره', 'مجید', 'تینا', 'فرزاد', 'لیلا', 'سعید', 'کیمیا', 'احسان', 'نازنین', 'بابک', 'شقایق', 'ماهان', 'آتنا', 'پیمان', 'سپیده', 'وحید',
        'ملیکا', 'دانیال', 'روژان', 'هومن', 'مهتاب', 'ایلیا', 'فرناز', 'جواد', 'گلاره', 'سهیل', 'شیرین', 'کامران', 'ویدا', 'اشکان', 'ثنا', 'مازیار'];
      const SURN = ['', '', '', ' ک.', ' م.', ' ر.', ' ا.', ' س.', ' ح.', ' ن.', ' ع.', ' ب.'];
      const ROLES = C.state.roles;
      const CITIES = ['تهران', 'مشهد', 'اصفهان', 'شیراز', 'تبریز', 'کرج', 'اهواز', 'قم', 'رشت', 'کرمان', 'یزد', 'ارومیه', 'همدان', 'زنجان', 'سنندج', 'کرمانشاه', 'اردبیل', 'بندرعباس', 'گرگان', 'ساری', 'قزوین', 'بوشهر', 'بیرجند', 'خرم‌آباد'];
      const NAMES_EN = ['Sara', 'Amirhossein', 'Negar', 'Reza', 'Mahsa', 'Pouya', 'Elham', 'Kian', 'Shida', 'Bardia', 'Taraneh', 'Arian', 'Yasaman', 'Hamid', 'Niloofar', 'Mohammadreza',
        'Pariya', 'Sina', 'Zahra', 'Ali', 'Fatemeh', 'Hossein', 'Maryam', 'Mahdi', 'Zeinab', 'Amir', 'Narges', 'Mohammad', 'Samaneh', 'Ramin', 'Hanieh', 'Behrad', 'Maedeh', 'Parsa',
        'Kowsar', 'Arash', 'Setareh', 'Nima', 'Fereshteh', 'Omid', 'Mina', 'Sajjad', 'Aida', 'Milad', 'Ghazal', 'Sadegh', 'Dorsa', 'Yasin', 'Mobina', 'Erfan', 'Hasti', 'Kaveh',
        'Raha', 'Shayan', 'Bahareh', 'Majid', 'Tina', 'Farzad', 'Leila', 'Saeed', 'Kimia', 'Ehsan', 'Nazanin', 'Babak', 'Shaghayegh', 'Mahan', 'Atena', 'Peyman', 'Sepideh', 'Vahid',
        'Melika', 'Danial', 'Rojan', 'Houman', 'Mahtab', 'Ilia', 'Farnaz', 'Javad', 'Gelareh', 'Soheil', 'Shirin', 'Kamran', 'Vida', 'Ashkan', 'Sana', 'Maziar'];
      const SURN_EN = ['', '', '', ' K.', ' M.', ' R.', ' A.', ' S.', ' H.', ' N.', ' E.', ' B.'];
      const ROLES_EN = C.state.rolesEn || ROLES;
      const CITIES_EN = ['Tehran', 'Mashhad', 'Isfahan', 'Shiraz', 'Tabriz', 'Karaj', 'Ahvaz', 'Qom', 'Rasht', 'Kerman', 'Yazd', 'Urmia', 'Hamadan', 'Zanjan', 'Sanandaj', 'Kermanshah', 'Ardabil', 'Bandar Abbas', 'Gorgan', 'Sari', 'Qazvin', 'Bushehr', 'Birjand', 'Khorramabad'];
      const TITLES_EN = C.state.titlesEn || TITLES;
      const TIERS_EN = { bronze: 'Bronze', silver: 'Silver', gold: 'Gold', ruby: 'Ruby', diamond: 'Diamond' };
      const GROUP = 30, UP = 7, DOWN = 5;

      const BADGES = C.state.badges;

      const en = () => EA.lang === 'en';
      const BADGES_EN = C.state.badgesEn;
      if (BADGES_EN) BADGES.forEach(b => { const fa = { name: b.name, desc: b.desc }; ['name', 'desc'].forEach((k, i) => Object.defineProperty(b, k, { get: () => (en() ? BADGES_EN[b.id][i] : fa[k]), enumerable: true })); });
      TIERS.forEach(t => { const fa = t.name; Object.defineProperty(t, 'name', { get: () => (en() ? TIERS_EN[t.id] : fa), enumerable: true }); });

      const day = d => { const x = d || new Date(); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
      const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
      /** هفته لیگ از شنبه شروع می‌شود */
      function weekStart(d) {
        const x = new Date(d || new Date()); x.setHours(0, 0, 0, 0);
        const back = (x.getDay() + 1) % 7; // شنبه = ۶ در getDay
        x.setDate(x.getDate() - back);
        return x;
      }
      function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
      function seeded(seed) { let s = seed || 1; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }

      function fresh() {
        return {
          v: 1, app: C.id, profile: null,
          xp: 0, gems: 100, hearts: MAX_HEARTS, heartsAt: Date.now(),
          streak: 0, bestStreak: 0, lastDay: null, freeze: 0,
          daily: {}, done: {}, chests: {}, checkpoints: {}, final: null,
          mistakes: [], badges: {}, chars: {}, companion: null, rounds: {}, cards: {}, fav: {},
          stats: { correct: 0, wrong: 0, calcs: 0, perfect: 0, lessons: 0, bestCombo: 0, bestSpeed: 0, seconds: 0 },
          settings: { sound: true, music: true, sfxVol: 0.8, musicVol: 0.4, theme: 'auto', noHearts: false },
          league: { week: day(weekStart()), tier: 0, lastResult: null }
        };
      }

      let S;
      function load() {
        try { const raw = localStorage.getItem(KEY); S = raw ? Object.assign(fresh(), JSON.parse(raw)) : fresh(); }
        catch (e) { S = fresh(); }
        S.stats = Object.assign(fresh().stats, S.stats);
        S.settings = Object.assign(fresh().settings, S.settings);
        tick();
        return S;
      }
      function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* حالت خصوصی */ } }
      function reset() { S = fresh(); save(); }

      /** بازسازی قلب‌ها، بررسی شکستن زنجیره و گردش هفته لیگ */
      function tick() {
        const now = Date.now();
        if (S.hearts < MAX_HEARTS) {
          const gained = Math.floor((now - S.heartsAt) / HEART_MS);
          if (gained > 0) { S.hearts = Math.min(MAX_HEARTS, S.hearts + gained); S.heartsAt += gained * HEART_MS; }
        } else S.heartsAt = now;
        if (S.lastDay) {
          const gap = daysBetween(S.lastDay, day());
          if (gap > 1) {
            const need = gap - 1;
            if (S.freeze >= need) { S.freeze -= need; S.lastDay = day(new Date(Date.now() - 864e5)); }
            else S.streak = 0;
          }
        }
        rollLeague();
      }

      /** قلب بی‌نهایت فقط برای پلن Pro و پکیج الماس (قفل هوشمند آکادمی) */
      function noHearts() { return !!(window.ACADEMY && window.ACADEMY.access(C.id).infinite); }
      /* ---------- جعبه لایتنر کارت‌های واژه (دوره‌های ترمینولوژی): خانه ۰ تا ۵ ---------- */
      function cardBox(id) { return (S.cards && S.cards[id]) || 0; }
      function cardMark(id, known) {
        S.cards = S.cards || {};
        const b = cardBox(id);
        S.cards[id] = known ? Math.min(5, b + 1) : 0;
        save();
        return S.cards[id];
      }
      function nextHeartIn() { return S.hearts >= MAX_HEARTS ? 0 : Math.max(0, HEART_MS - (Date.now() - S.heartsAt)); }
      function loseHeart() {
        if (noHearts()) return;
        if (S.hearts >= MAX_HEARTS) S.heartsAt = Date.now();
        S.hearts = Math.max(0, S.hearts - 1); save();
      }
      function addHeart(n) { S.hearts = Math.min(MAX_HEARTS, S.hearts + (n || 1)); save(); }

      function level(xp) {
        const x = xp == null ? S.xp : xp;
        let l = 0; while (l + 1 < LEVELS.length && x >= LEVELS[l + 1]) l++;
        const cur = LEVELS[l], nxt = LEVELS[l + 1] || (cur + 1000);
        return { n: l + 1, title: (en() ? TITLES_EN : TITLES)[Math.min(TITLES.length - 1, l)], cur, nxt, pct: (x - cur) / (nxt - cur) };
      }

      /** امتیاز بده؛ زنجیره روزانه و هدف روزانه را به‌روز کن. رویدادهای تازه را برمی‌گرداند. */
      function addXp(n) {
        const ev = [];
        const today = day();
        const before = S.daily[today] || 0;
        const lvBefore = level().n;
        S.xp += n; S.daily[today] = before + n;
        if (S.lastDay !== today) {
          const gap = S.lastDay ? daysBetween(S.lastDay, today) : 99;
          S.streak = gap === 1 ? S.streak + 1 : 1;
          S.lastDay = today; S.bestStreak = Math.max(S.bestStreak, S.streak);
          ev.push({ type: 'streak', n: S.streak });
        }
        const goal = (S.profile && S.profile.goal) || 30;
        if (before < goal && S.daily[today] >= goal) { S.gems += 10; ev.push({ type: 'goal' }); }
        if (level().n > lvBefore) ev.push({ type: 'level', n: level().n });
        save();
        return ev;
      }

      function award(id) {
        if (S.badges[id]) return null;
        S.badges[id] = Date.now(); S.gems += 20; save();
        return BADGES.find(b => b.id === id);
      }
      function checkBadges() {
        const got = [];
        const t = (c, id) => { if (c) { const b = award(id); if (b) got.push(b); } };
        t(S.stats.lessons >= 1, 'first');
        t(S.stats.perfect >= 3, 'perfect3');
        t(S.bestStreak >= 3, 'streak3');
        t(S.bestStreak >= 7, 'streak7');
        t(S.stats.calcs >= 10, 'calc10');
        if (C.term) t(Object.values(S.cards || {}).filter(b => b >= 4).length >= 50, 'cards50');
        t(S.stats.calcs >= 50, 'calc50');
        t(S.stats.bestSpeed >= 15, 'speed15');
        t(S.stats.bestCombo >= 10, 'combo10');
        EA.worlds.forEach(w => t(S.checkpoints[w.id] && S.checkpoints[w.id].passed, 'w_' + w.id));
        t(S.xp >= 1000, 'xp1000');
        t(EA.rounds && EA.rounds.every(r => S.rounds && S.rounds[r.id] && S.rounds[r.id].passed), 'rounds');
        t(S.final && S.final.passed, 'final');
        return got;
      }

      /* ---------- پیشرفت ---------- */
      function lessonState(w, i) {
        const l = w.lessons[i];
        if (S.done[l.id]) return 'done';
        if (i === 0 || S.done[w.lessons[i - 1].id]) return 'open';
        return 'locked';
      }
      function worldDone(w) { return w.lessons.every(l => S.done[l.id]); }
      function worldProgress(w) { return w.lessons.filter(l => S.done[l.id]).length / w.lessons.length; }
      function finalUnlocked() { return EA.worlds.every(w => S.checkpoints[w.id] && S.checkpoints[w.id].passed); }

      /* کلینیک خطاها: هر اشتباه با شمار تکرار و زمان آخرین خطا نگه داشته می‌شود تا مرور فاصله‌دار
       * (Spaced Repetition) اول سراغ پرتکرارترین و قدیمی‌ترین خطاها برود؛ با پاسخ درست از فهرست حذف می‌شود. */
      function recordMistake(key) {
        if (!S.mistakes.includes(key)) { S.mistakes.push(key); if (S.mistakes.length > 80) { const old = S.mistakes.shift(); if (S.mMeta) delete S.mMeta[old]; } }
        S.mMeta = S.mMeta || {};
        const m = S.mMeta[key] || { n: 0, first: Date.now() };
        m.n++; m.at = Date.now(); S.mMeta[key] = m;
      }
      function clearMistake(key) { S.mistakes = S.mistakes.filter(k => k !== key); if (S.mMeta) delete S.mMeta[key]; }
      /** ترتیب مرور: خطاهای «سررسیده» (فاصله ۱، ۳، ۷ روزه بر اساس تعداد تکرار) و پرتکرارتر جلوتر */
      function mistakeQueue() {
        const meta = S.mMeta || {}, now = Date.now(), gap = n => (n >= 3 ? 1 : n === 2 ? 3 : 7) * 864e5;
        const score = k => { const m = meta[k]; if (!m) return 0; const due = (m.at || 0) + gap(m.n) <= now ? 1 : 0; return due * 1000 + m.n * 10 + (now - (m.at || now)) / 864e5; };
        return S.mistakes.slice().sort((a, b) => score(b) - score(a));
      }

      /* ---------- لیگ هفتگی با رقبای شبیه‌سازی‌شده ---------- */
      function weekXp(ws) {
        const start = new Date(ws + 'T00:00');
        let sum = 0;
        for (let i = 0; i < 7; i++) { const d = new Date(start); d.setDate(d.getDate() + i); sum += S.daily[day(d)] || 0; }
        return sum;
      }
      /** رقبای گروه این هفته؛ امتیازشان واقع‌گرایانه و تدریجی بالا می‌رود:
       *  هر جلسه تمرین ۱۲ تا ۲۶ دقیقه طول می‌کشد و امتیازش دقیقه‌به‌دقیقه اضافه می‌شود؛ پنجشنبه و جمعه خلوت‌تر،
       *  روز آخر هفته فشار پایانی؛ دو رقیب «تعقیب‌کننده» با کمی تأخیر پیشرفت خود کاربر را دنبال می‌کنند (۷۸ تا ۹۷٪)
       *  تا حفظ رتبه برتر تمرین روزانه بخواهد ولی همیشه شدنی بماند. امتیاز هیچ رقیبی هرگز کم نمی‌شود. */
      function userLagged(ws, now) {
        const start = new Date(ws + 'T00:00');
        let sum = 0;
        for (let i = 0; i < 7; i++) {
          const d = new Date(start); d.setDate(d.getDate() + i);
          const t = d.getTime(), v = S.daily[day(d)] || 0;
          if (t + 864e5 <= now) sum += v; else if (t <= now) sum += v * Math.min(1, (now - t) / (18 * 36e5));
        }
        return sum;
      }
      function rivals(ws, tier, at) {
        const seed = hash(ws + ':' + tier + ':' + ((S.profile && S.profile.name) || ''));
        const rnd = seeded(seed);
        const pool = NAMES.slice().sort(() => rnd() - 0.5);
        const start = new Date(ws + 'T00:00').getTime();
        const now = at == null ? Date.now() : at;
        const DOW = [1, 1, 1, 1, 0.8, 0.55, 1]; // getDay(): یکشنبه تا شنبه
        const mine = userLagged(ws, now);
        const out = [];
        for (let i = 0; i < GROUP - 1; i++) {
          const r = seeded(seed + i * 7919);
          const chaser = i < 2;
          const drive = chaser ? 0.35 : r() < 0.15 ? 0.25 : r() < 0.35 ? 0.6 : 1 + r() * 0.8;   // کم‌کار، معمولی، پرکار
          const perSession = 8 + r() * (18 + tier * 9);
          const earlyBird = r() < 0.5;
          let xp = 0, live = false;
          for (let d = 0; d < 7; d++) {
            const d0 = start + d * 864e5;
            const f = DOW[new Date(d0).getDay()] * (d === 6 ? 1.35 : 1);
            const dr = seeded(seed + i * 131 + d * 17);
            const sessions = dr() < 0.12 * (2 - drive) ? 0 : 1 + Math.floor(dr() * 3 * drive * f);
            for (let k = 0; k < sessions; k++) {
              const hour = earlyBird ? 6 + dr() * 10 : 12 + dr() * 11.5;
              const t0 = d0 + hour * 36e5, dur = (12 + dr() * 14) * 6e4;
              const gain = Math.round(perSession * (0.6 + dr() * 0.9) * f);
              if (now >= t0 + dur) xp += gain;
              else if (now > t0) { xp += Math.floor(gain * (now - t0) / dur); live = true; }
            }
          }
          if (chaser && mine > 0) xp += Math.round(mine * (0.78 + r() * 0.19));
          const ni = NAMES.indexOf(pool[i % pool.length]), si = Math.floor(r() * SURN.length), ri = Math.floor(r() * ROLES.length), ci = Math.floor(r() * CITIES.length);
          out.push({ name: en() ? NAMES_EN[ni] + SURN_EN[si] : NAMES[ni] + SURN[si], tag: en() ? ROLES_EN[ri] + ' • ' + CITIES_EN[ci] : ROLES[ri] + ' • ' + CITIES[ci], key: 'r' + i, xp, live, hue: Math.floor(r() * 360), i });
        }
        return out;
      }
      function leagueTable(ws, at) {
        const w = ws || S.league.week;
        const me = { name: (S.profile && S.profile.name) || (en() ? 'Me' : 'من'), tag: en() ? 'You' : 'تو', xp: weekXp(w), me: true };
        return rivals(w, S.league.tier, at).concat([me]).sort((a, b) => b.xp - a.xp || (a.me ? -1 : 1));
      }
      /** تغییر رتبه هر نفر از آخرین بازدید لیگ */
      function leagueMoves(table) {
        const prev = S.league.seen && S.league.seen.week === S.league.week ? S.league.seen.ranks : null;
        const ranks = {};
        table.forEach((r, i) => { ranks[r.me ? '__me' : r.key] = i; });
        const moves = table.map((r, i) => { const k = r.me ? '__me' : r.key; return prev && prev[k] != null ? prev[k] - i : 0; });
        S.league.seen = { week: S.league.week, ranks }; save();
        return moves;
      }
      function rollLeague() {
        const cur = day(weekStart());
        if (S.league.week === cur) return;
        const table = leagueTable(S.league.week, new Date(S.league.week + 'T00:00').getTime() + 7 * 864e5);
        const rank = table.findIndex(r => r.me) + 1;
        const myXp = table[rank - 1].xp;
        let move = 0;
        if (myXp > 0 && rank <= UP && S.league.tier < TIERS.length - 1) move = 1;
        else if ((myXp === 0 || rank > GROUP - DOWN) && S.league.tier > 0) move = -1;
        S.league.lastResult = { rank, move, from: S.league.tier, week: S.league.week, seen: false };
        S.league.tier += move; S.league.week = cur;
      }

      EA.S = {
        get: () => S, load, save, reset, tick, day, weekStart, level, addXp, award, checkBadges,
        loseHeart, addHeart, nextHeartIn, lessonState, worldDone, worldProgress, finalUnlocked,
        recordMistake, clearMistake, mistakeQueue, noHearts, cardBox, cardMark, leagueTable, leagueMoves, weekXp, LEAGUE: { GROUP, UP, DOWN },
        MAX_HEARTS, TIERS, BADGES, LEVELS, TITLES, KEY
      };

      if (typeof module !== 'undefined') module.exports = EA;
    })(typeof window !== 'undefined' ? window : globalThis);
  };

  /* ======================================================================
     ابزارهای رابط
     ====================================================================== */
  ENGINE.ui = function (C) {
    /* ابزارهای رابط: صدا، کنفتی، شخصیت دوره، کارت تصویر، پنجره و اعلان */
    (function () {
      const EA = window.EA = window.EA || {};
      const fa = (n, d) => EA.fa(n, d);

      /* ---------- صدا: موتور اصلی در audio.js ---------- */
      function sfx(name) { try { EA.audio && EA.audio.sfx(name); } catch (e) { /* بی‌صدا */ } }
      function buzz(p) { try { navigator.vibrate && navigator.vibrate(p); } catch (e) { /* */ } }

      /* ---------- کنفتی ---------- */
      function confetti(n) {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const cv = document.createElement('canvas');
        cv.className = 'confetti';
        document.body.appendChild(cv);
        const W = cv.width = innerWidth * devicePixelRatio, H = cv.height = innerHeight * devicePixelRatio;
        const g = cv.getContext('2d');
        const cols = C.confetti;
        const ps = Array.from({ length: n || 140 }, () => ({
          x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35,
          vx: (Math.random() - 0.5) * 26 * devicePixelRatio, vy: (-Math.random() * 22 - 8) * devicePixelRatio,
          r: (4 + Math.random() * 6) * devicePixelRatio, c: cols[Math.floor(Math.random() * cols.length)],
          a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4, sq: Math.random() < 0.5
        }));
        let f = 0;
        (function loop() {
          g.clearRect(0, 0, W, H);
          ps.forEach(p => {
            p.vy += 0.6 * devicePixelRatio; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.a += p.va;
            g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.fillStyle = p.c;
            if (p.sq) g.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); else { g.beginPath(); g.arc(0, 0, p.r / 1.4, 0, 7); g.fill(); }
            g.restore();
          });
          if (++f < 150) requestAnimationFrame(loop); else cv.remove();
        })();
      }

      /* ---------- شخصیت دوره (یونا: قطره یون مثبت، هما: گلبول بال‌دار، نگار: ذره‌بین) — در فایل داده هر دوره ---------- */
      function mascot(mood, color, size) { return C.mascot(mood, color, size); }

      /* ---------- پنجره و اعلان ---------- */
      function modal(html, opts) {
        const o = opts || {};
        const wrap = document.createElement('div');
        wrap.className = 'modal' + (o.cls ? ' ' + o.cls : '');
        wrap.innerHTML = `<div class="modal__card" role="dialog" aria-modal="true">${html}</div>`;
        document.body.appendChild(wrap);
        requestAnimationFrame(() => wrap.classList.add('is-in'));
        const close = () => { wrap.classList.remove('is-in'); setTimeout(() => wrap.remove(), 200); document.removeEventListener('keydown', esc); o.onClose && o.onClose(); };
        const esc = e => { if (e.key === 'Escape' && !o.sticky) close(); };
        document.addEventListener('keydown', esc);
        wrap.addEventListener('click', e => {
          if (e.target === wrap && !o.sticky) close();
          const b = e.target.closest('[data-close]'); if (b) close();
        });
        return { el: wrap, close };
      }

      function toast(html, cls) {
        let box = document.querySelector('.toasts');
        if (!box) { box = document.createElement('div'); box.className = 'toasts'; document.body.appendChild(box); }
        const t = document.createElement('div');
        t.className = 'toast ' + (cls || '');
        t.innerHTML = html;
        box.appendChild(t);
        setTimeout(() => t.classList.add('is-out'), 2600);
        setTimeout(() => t.remove(), 3000);
      }

      function ring(pct, size, stroke, color, inner) {
        const r = (size - stroke) / 2, C = 2 * Math.PI * r, p = Math.max(0, Math.min(1, pct));
        return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--line)" stroke-width="${stroke}" fill="none"/>
          <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none" stroke-linecap="round"
            stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
          ${inner ? `<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" class="ring__t">${inner}</text>` : ''}
        </svg>`;
      }

      /** مقدار بدون حرف فارسی (مثل «۶۲ mmHg») را چپ‌به‌راست جدا کن تا ترتیبش به‌هم نریزد */
      const LETTERS = /[ء-يٮ-ۓۺ-ۿ]/; // فقط حروف؛ رقم و «٫» حساب نیستند
      const UNIT_RUN = C.unitRun;
      const iso = s => {
        const t = String(s);
        return LETTERS.test(t.replace(/<[^>]*>/g, '')) ? (C.term && EA.bi ? EA.bi(t.replace(UNIT_RUN, '<bdi dir="ltr">$1</bdi>')) : t.replace(UNIT_RUN, '<bdi dir="ltr">$1</bdi>')) : `<bdi dir="ltr">${t}</bdi>`;
      };
      const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
      const mmss = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return fa(Math.floor(s / 60)) + ':' + fa(s % 60).padStart(2, fa(0)); };

      /* ---------- تصویرها ----------
       * در نسخه ساخته‌شده همه تصویرها به‌صورت داده درون فایل‌اند (EA.IMG)؛ در حالت توسعه از پوشه src/img خوانده می‌شوند. */
      /** کارت تصویر: f = { k: کلید یا آرایه کلیدها، l: برچسب زیر هر تصویر، cap: توضیح } */
      function figCard(f) {
        if (!f) return '';
        const ks = [].concat(f.k), ls = f.l ? [].concat(f.l) : [];
        return `<figure class="fig fig--n${ks.length}">${ks.map((k, i) => `<div class="fig__i"><img src="${EA.img(k)}" alt="${esc(ls[i] || f.cap || '')}" draggable="false" data-zoom>${ls[i] ? `<span class="fig__l">${ls[i]}</span>` : ''}</div>`).join('')}${f.cap ? `<figcaption>${f.cap}</figcaption>` : ''}</figure>`;
      }
      /** بزرگ‌نمایی تصویر با لمس */
      function zoom(img) {
        const fig = img.closest('figure'), cap = fig && fig.querySelector('figcaption');
        const lab = img.parentNode.querySelector('.fig__l');
        modal(`<img class="zoom__img" src="${img.src}" alt="" draggable="false">${lab || cap ? `<p class="zoom__cap">${lab ? lab.innerHTML : ''}${lab && cap ? ' • ' : ''}${cap ? cap.innerHTML : ''}</p>` : ''}<div class="modal__btns"><button class="btn btn--brand" data-close>${EA.T('بستن', 'Close')}</button></div>`, { cls: 'modal--zoom' });
      }

      /** همراه کاربر: کاراکتر انتخاب‌شده، یا خود شخصیت دوره */
      function buddy(mood, size, color) {
        const s = EA.S && EA.S.get();
        const c = s && s.companion && s.chars && s.chars[s.companion] && EA.chars && EA.chars.byId(s.companion);
        return c ? EA.chars.draw(c, mood, size) : mascot(mood, color || 'var(--wc)', size);
      }


      /* ---------- دوره‌های ترمینولوژی: شکل‌های SVG، شکل درون متن و متن دوزبانه ---------- */
      /** کارت شکل: f = { a: کلید شکل SVG (EA.art) یا تصویر (EA.IMG)، l: برچسب‌ها، cap: توضیح } */
      function figCardT(f) {
        const ks = [].concat(f.a), ls = f.l ? [].concat(f.l) : [];
        const isArt = k => EA.ART_KEYS && EA.ART_KEYS.includes(k);
        const one = (k, alt) => (isArt(k) ? EA.art(k) : `<img src="${EA.img(k)}" alt="${esc(alt)}" draggable="false" loading="lazy">`);
        const wide = ks.length > 1 && ks.some(k => isArt(k) && !/^cell-/.test(k));
        return `<figure class="fig fig--n${ks.length}${wide ? ' fig--wide' : ''}">${ks.map((k, i) => `<div class="fig__i${isArt(k) ? '' : ' fig__i--photo'}" data-zoom role="button" tabindex="0" aria-label="${esc(ls[i] || f.cap || '')}">${one(k, ls[i] || f.cap || '')}${ls[i] ? `<span class="fig__l">${EA.bi(ls[i])}</span>` : ''}</div>`).join('')}${f.cap ? `<figcaption>${EA.bi(f.cap)}</figcaption>` : ''}</figure>`;
      }
      /** شکل‌هایی که درون متن کارت آموزشی جاسازی شده‌اند (<!--fig:...-->) */
      function figs(html) {
        return String(html).replace(/<!--fig:([^>]*)-->/g, (_, j) => { try { return figCardT(JSON.parse(decodeURIComponent(j))); } catch (e) { return ''; } });
      }
      /** بزرگ‌نمایی شکل SVG یا تصویر */
      function zoomT(el) {
        const fig = el.closest('figure'), cap = fig && fig.querySelector('figcaption');
        const lab = el.querySelector('.fig__l');
        const art = el.querySelector('svg.art') || el.querySelector('img');
        modal(`<div class="zoom__img">${art ? art.outerHTML.replace(' loading="lazy"', '') : ''}</div>${lab || cap ? `<p class="zoom__cap">${lab ? lab.innerHTML : ''}${lab && cap ? ' • ' : ''}${cap ? cap.innerHTML : ''}</p>` : ''}<div class="modal__btns"><button class="btn btn--ghost" data-close>${EA.T('بستن', 'Close')}</button></div>`, { cls: 'modal--zoom' });
      }
      /* هر تکه لاتین بیرون از bdi در صفحه‌های دوره ترمینولوژی در <bdi dir="ltr"> می‌رود
       * تا واژه انگلیسی، پرانتز و فلش در جمله فارسی جابه‌جا نشوند (ابزارها، نکته‌ها، کارت‌ها، پنجره‌ها). */
      const BI_SKIP = 'bdi,[dir="ltr"],svg,script,style,textarea,input,select,option,code,kbd,title,.wb,.no-bi';
      const HAS_LAT = /[A-Za-z]/;
      function biText(t) {
        const p = t.parentElement;
        if (!p || !HAS_LAT.test(t.data) || p.closest(BI_SKIP) || p.closest('#academy-root, .acside, .modal--up')) return;
        const html = EA.bi(t.data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        if (html.indexOf('<bdi') < 0) return;
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        t.replaceWith(tpl.content);
      }
      function biNode(n) {
        if (EA.lang === 'en') return; // در رابط انگلیسی همه‌چیز چپ‌به‌راست است
        if (n.nodeType === 3) return biText(n);
        if (n.nodeType !== 1 || n.closest(BI_SKIP)) return;
        const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT), list = [];
        while (w.nextNode()) if (HAS_LAT.test(w.currentNode.data)) list.push(w.currentNode);
        list.forEach(biText);
      }
      if (C.term && typeof MutationObserver !== 'undefined' && typeof document !== 'undefined' && EA.bi) {
        new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(biNode))).observe(document.documentElement, { childList: true, subtree: true });
        if (document.body) biNode(document.body); else document.addEventListener('DOMContentLoaded', () => biNode(document.body));
      }

      /** کارت آزمایش گاز خون (هما) در فایل داده هما تعریف می‌شود؛ پیش‌فرض: هیچ */
      const labCard = () => '', phScale = () => '';
      EA.ui = { buddy, sfx, buzz, confetti, mascot, modal, toast, ring, esc, iso, shuffle, mmss, figCard, zoom, labCard, phScale };
      if (C.term) Object.assign(EA.ui, { figCard: f => (f ? (f.a ? figCardT(f) : figCard(f)) : ''), figs, zoom: el => (el.tagName === 'IMG' && !el.closest('.fig__i[data-zoom]') ? zoom(el) : zoomT(el.closest('[data-zoom]') || el)) });
      Object.assign(EA.ui, C.uiExtra ? C.uiExtra() : {});
    })();
  };

  /* ======================================================================
     اجراکننده درس، آزمون، تمرین، کلینیک خطاها و راند بیمارستان
     ====================================================================== */
  ENGINE.runner = function (C) {
    /* اجراکننده درس، آزمون، تمرین، راند بیمارستان و چالش سرعت */
    (function () {
      const EA = window.EA;
      const { sfx, buzz, confetti, mascot, buddy, modal, esc, iso, shuffle, mmss, figCard } = EA.ui;
      const labCard = o => EA.ui.labCard(o);
      /* ---------- دوره‌های ترمینولوژی: متن دوزبانه، شکل درون کارت و دو نوع سؤال املا و واژه‌سازی ---------- */
      const TERM = !!C.term;
      const BI = x => (TERM && x != null ? EA.bi(x) : x);
      const FG = x => (TERM && EA.ui.figs ? EA.ui.figs(x) : x);
      /* گزینه تمام‌انگلیسی: بلوک چپ‌به‌راست؛ گزینه فارسی یا دوزبانه: تکه‌های لاتین جدا با bdi */
      const LT = x => (!TERM ? x : /<bdi|dir="ltr"/.test(String(x)) ? x : /[\u0600-\u06FF]/.test(String(x)) ? EA.bi(x) : `<bdi dir="ltr" class="en-block${EA.isSym && EA.isSym(String(x).trim()) ? ' sym' : ''}">${x}</bdi>`);
      const spellNorm = v => String(v || '').toLowerCase().replace(/[’']/g, "'").replace(/[-\s]+/g, ' ').trim();
      function prepBuild(src) {
        let bank = shuffle(src.parts.concat(src.extra || []));
        for (let i = 0; i < 5 && bank.slice(0, src.parts.length).join('|') === src.parts.join('|'); i++) bank = shuffle(bank);
        return { parts: src.parts, bank };
      }
      const fa = (n, d) => EA.fa(n, d);
      const S = () => EA.S.get();
      const T = EA.T;

      const YES = () => T(['آفرین!', 'عالیه!', 'دقیقاً!', 'درجه یک!', 'ایول!', 'دمت گرم!', 'بی‌نقص!'], ['Nice!', 'Excellent!', 'Exactly!', 'Spot on!', 'Brilliant!', 'Great job!', 'Perfect!']);
      const NO = () => T(['اشکالی نداره، یاد گرفتی!', 'نزدیک بود!', 'این یکی رو دوباره می‌پرسم.', 'اشتباه، ولی قوی‌تر شدی!'], ['No worries, now you know!', 'So close!', 'I’ll ask this one again.', 'Wrong, but you’re stronger now!']);
      const pick = a => a[Math.floor(Math.random() * a.length)];
      const worldOf = id => EA.worlds.find(w => w.id === id);

      /* ---------- ساخت نمونه سؤال ---------- */
      function prepMcq(src) {
        const order = shuffle(src.opts.map((_, i) => i));
        return { opts: order.map(i => src.opts[i]), correct: order.indexOf(src.a || 0) };
      }
      function inst(src, meta) {
        const m = meta || {};
        if (src.t === 'num') {
          const g = EA.gen[src.gen]();
          const o = Object.assign({ key: 'gen:' + src.gen, calc: true }, m, g);
          if (g.kind === 'mcq') Object.assign(o, prepMcq(g));
          if (g.kind === 'build') Object.assign(o, prepBuild(g));
          return o;
        }
        const base = Object.assign({ q: src.q, why: src.why, case: src.case, lab: src.lab, fig: src.fig, stage: src.stage }, m);
        switch (src.t) {
          case 'numS': return Object.assign(base, { kind: 'num', calc: true, ans: src.ans, tol: src.tol, unit: src.unit, hint: src.hint });
          case 'spell': return Object.assign(base, { kind: 'spell', ans: [].concat(src.ans), hint: src.hint });
          case 'build': return Object.assign(base, { kind: 'build' }, prepBuild(src));
          case 'learn': return Object.assign(base, { kind: 'learn', title: src.title, body: src.body });
          case 'mcq': return Object.assign(base, { kind: 'mcq' }, prepMcq(src));
          case 'tf': return Object.assign(base, { kind: 'tf', ans: src.a });
          case 'fill': return Object.assign(base, { kind: 'fill', chips: shuffle(src.opts), right: src.opts[0] });
          case 'order': {
            let bank = shuffle(src.steps);
            for (let i = 0; i < 5 && bank.join('|') === src.steps.join('|'); i++) bank = shuffle(src.steps);
            return Object.assign(base, { kind: 'order', steps: src.steps, bank });
          }
          case 'match': return Object.assign(base, { kind: 'match', q: src.q || T('جفت‌ها را پیدا کن', 'Match the pairs'), pairs: src.pairs, L: shuffle(src.pairs.map((p, i) => i)), R: shuffle(src.pairs.map((p, i) => i)) });
        }
      }
      function keyToInst(key) {
        if (key.startsWith('gen:')) {
          const g = key.slice(4); const w = EA.worlds.find(x => x.gens.includes(g));
          return w ? inst({ t: 'num', gen: g }, { world: w.id }) : null;
        }
        const [lid, idx] = key.split(':');
        for (const w of EA.worlds) {
          const l = w.lessons.find(x => x.id === lid);
          if (l && l.items[+idx]) return inst(l.items[+idx], { key, world: w.id });
        }
        return null;
      }
      function staticPool(w, filter) {
        const out = [];
        w.lessons.forEach(l => l.items.forEach((it, i) => {
          if (it.t !== 'learn' && it.t !== 'num' && (!filter || filter(it))) out.push({ it, key: l.id + ':' + i, world: w.id });
        }));
        return out;
      }
      function sample(w, nStatic, nGen) {
        const st = shuffle(staticPool(w)).slice(0, nStatic).map(x => inst(x.it, { key: x.key, world: w.id }));
        const gs = shuffle(w.gens).slice(0, nGen).map(g => inst({ t: 'num', gen: g }, { world: w.id }));
        return shuffle(st.concat(gs));
      }

      /* ---------- جلسه ---------- */
      let P = null; // جلسه فعال
      let root = null;

      function open(sess) {
        P = Object.assign({ idx: 0, done: 0, correct: 0, wrong: 0, graded: 0, combo: 0, maxCombo: 0, xp: 0, start: Date.now(), byWorld: {} }, sess);
        P.total = P.queue.length;
        if (P.mode === 'round') P.health = 70;
        root = document.createElement('div');
        root.className = 'player';
        const w = worldOf(P.world) || null;
        root.style.setProperty('--wc', w ? w.color : 'var(--brand)');
        root.style.setProperty('--wd', w ? w.dark : 'var(--brand-d)');
        root.innerHTML = `<header class="player__top">
            <button class="iconbtn" data-p="quit" aria-label="${T('خروج', 'Quit')}">✕</button>
            <div class="pbar"><i></i><b class="pbar__combo"></b></div>
            <div class="p-meta"></div>
            <button class="iconbtn p-music" data-p="music" aria-label="${T('موسیقی', 'Music')}">${EA.app.musicIcon()}</button>
          </header>
          <div class="player__body"></div>
          <footer class="player__foot"></footer>`;
        document.body.appendChild(root);
        document.body.classList.add('no-scroll');
        root.addEventListener('click', onClick);
        root.addEventListener('input', onInput);
        document.addEventListener('keydown', onKey);
        if (P.timed) P.timer = setInterval(tickTimer, 250);
        if (EA.audio) EA.audio.setDuck(!!P.exam || P.mode === 'speed');
        render();
      }

      function close() {
        if (!root) return;
        clearInterval(P && P.timer); stopCB();
        document.removeEventListener('keydown', onKey);
        root.remove(); root = null;
        if (EA.audio) EA.audio.setDuck(false);
        document.body.classList.remove('no-scroll');
        P = null;
      }

      const cur = () => P.queue[P.idx];
      const body = () => root.querySelector('.player__body');
      const foot = () => root.querySelector('.player__foot');

      function updateTop() {
        const pct = P.mode === 'speed' ? 1 - (P.endsAt - Date.now()) / (P.seconds * 1000)
          : P.exam || P.mode === 'round' ? P.idx / P.total : P.done / P.total;
        root.querySelector('.pbar i').style.width = Math.max(3, Math.min(100, pct * 100)) + '%';
        const meta = root.querySelector('.p-meta');
        if (P.timed) meta.innerHTML = `<span class="p-timer">⏱ ${mmss(P.endsAt - Date.now())}</span>`;
        else if (P.mode === 'lesson') meta.innerHTML = EA.S.noHearts() ? '<span class="p-hearts">❤️ ∞</span>' : `<span class="p-hearts">❤️ ${fa(S().hearts)}</span>`;
        else meta.innerHTML = `<span class="p-count">${fa(Math.min(P.idx + 1, P.total))} / ${fa(P.total)}</span>`;
        if (P.mode === 'speed') meta.innerHTML = `<span class="p-timer">⚡ ${fa(P.correct)} • ${mmss(P.endsAt - Date.now())}</span>`;
      }

      function tickTimer() {
        if (!P) return;
        updateTop();
        if (Date.now() >= P.endsAt) { clearInterval(P.timer); P.timer = null; finish(); }
      }

      /* ---------- نمایش سؤال ---------- */
      function caseCard(c) {
        if (!c || !c.length) return '';
        return `<div class="case"><div class="case__h">🩺 ${T('پرونده بیمار', 'Patient chart')}</div>${c.map(r => `<div class="case__r"><span>${r[0]}</span><b>${iso(r[1])}</b></div>`).join('')}</div>`;
      }

      function render() {
        const it = cur();
        it.sel = null; it.state = null;
        updateTop();
        let html = '';
        const tag = it.stage ? `<span class="qtag qtag--stage">🩺 ${T('مرحله', 'Step')} ${fa(P.idx + (P.mode === 'round' ? 0 : 1))}: ${it.stage}</span>`
          : it.calc ? (TERM ? `<span class="qtag qtag--calc">🔤 ${C.calcTag(it.tag)}</span>` : `<span class="qtag qtag--calc">🧮 ${T('محاسبه', 'Calculation')}</span>`) : it.retry ? `<span class="qtag qtag--retry">🔁 ${T('دوباره', 'Retry')}</span>` : '';
        switch (it.kind) {
          case 'learn':
            html = `<div class="learn">
                <div class="learn__who">${buddy('happy', 72)}<div class="bubble">${it.bubble || T('نکته تازه! 👇', 'New idea! 👇')}</div></div>
                <article class="learn__card"><h2>${BI(it.title)}</h2><div class="learn__body">${FG(BI(it.body))}</div></article>
              </div>`;
            break;
          case 'mcq':
            html = `${tag}<h2 class="q">${BI(it.q)}</h2>${labCard(it.lab)}${figCard(it.fig)}${caseCard(it.case)}
              <div class="opts">${it.opts.map((o, i) => `<button class="opt" data-p="sel" data-i="${i}"><kbd>${fa(i + 1)}</kbd><span>${LT(o)}</span></button>`).join('')}</div>`;
            break;
          case 'tf':
            html = `${tag}<div class="tf">
                <div class="tf__who">${buddy('think', 84)}</div>
                <div class="bubble bubble--big">${BI(it.q)}</div>
              </div>${labCard(it.lab)}${figCard(it.fig)}${caseCard(it.case)}
              <h3 class="q q--sm">${T('این جمله درست است یا نادرست؟', 'Is this statement true or false?')}</h3>
              <div class="opts opts--tf">
                <button class="opt opt--tf" data-p="sel" data-i="1"><kbd>${fa(1)}</kbd><span>✓ ${T('درست', 'True')}</span></button>
                <button class="opt opt--tf" data-p="sel" data-i="0"><kbd>${fa(2)}</kbd><span>✗ ${T('نادرست', 'False')}</span></button>
              </div>`;
            break;
          case 'fill': {
            const [a, b] = it.q.split('___').map(BI);
            html = `${tag}<h3 class="q q--sm">${T('جای خالی را پر کن', 'Fill in the blank')}</h3>
              <p class="fill">${a}<span class="slot" data-p="unsel">&nbsp;</span>${b || ''}</p>
              <div class="chips">${it.chips.map((c, i) => `<button class="chip" data-p="sel" data-i="${i}">${LT(c)}</button>`).join('')}</div>`;
            break;
          }
          case 'order':
            it.ans = [];
            html = `${tag}<h2 class="q">${BI(it.q)}</h2>
              <ol class="order-ans"></ol>
              <div class="chips chips--col order-bank"></div>`;
            break;
          case 'match':
            it.ok = []; it.mis = 0; it.pickL = null; it.pickR = null;
            html = `${tag}<h2 class="q">${BI(it.q)}</h2>
              <div class="match">
                <div class="match__col">${it.L.map(i => `<button class="mbtn" data-p="mL" data-i="${i}">${LT(it.pairs[i][0])}</button>`).join('')}</div>
                <div class="match__col">${it.R.map(i => `<button class="mbtn" data-p="mR" data-i="${i}">${LT(it.pairs[i][1])}</button>`).join('')}</div>
              </div>`;
            break;
          case 'spell':
            html = `${tag}<h2 class="q">${BI(it.q)}</h2>${figCard(it.fig)}${caseCard(it.case)}
              <label class="numin numin--spell">
                <input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" dir="ltr" lang="en" placeholder="${T('واژه را بنویس…', 'type the term…')}" aria-label="${T('املای واژه', 'Spelling')}">
              </label>
              ${it.hint ? `<button class="hintbtn" data-p="hint">💡 ${T('راهنما (تلفظ)', 'Hint (pronunciation)')}</button><div class="hint" hidden><span dir="ltr">${it.hint}</span></div>` : ''}`;
            break;
          case 'build':
            it.ans = [];
            html = `${tag}<h2 class="q">${BI(it.q)}</h2>
              <div class="build-ans" dir="ltr"></div>
              <div class="chips build-bank" dir="ltr"></div>`;
            break;
          case 'num':
            html = `${tag}<h2 class="q">${it.q}</h2>${labCard(it.lab)}${figCard(it.fig)}${caseCard(it.case)}
              <label class="numin">
                <input type="text" inputmode="decimal" autocomplete="off" dir="ltr" placeholder="${C.numPlaceholder()}" aria-label="${T('پاسخ', 'Answer')}">
                <span class="numin__u">${it.unit}</span>
              </label>
              <div class="numin__live" aria-live="polite"></div>
              ${it.hint ? `<button class="hintbtn" data-p="hint">💡 ${T('فرمول را نشانم بده', 'Show me the formula')}</button><div class="hint" hidden><span dir="auto">${it.hint}</span></div>` : ''}`;
            break;
        }
        body().innerHTML = `<div class="qwrap qwrap--${it.kind}">${html}</div>`;
        engageRender(it);
        body().scrollTop = 0;
        if (it.kind === 'order') drawOrder(it);
        if (it.kind === 'build') drawBuild(it);
        if (it.kind === 'spell') setTimeout(() => { if (!root) return; const i = body().querySelector('input'); i && matchMedia('(pointer:fine)').matches && i.focus(); }, 50);
        if (it.kind === 'num') setTimeout(() => { if (!root) return; const i = body().querySelector('input'); i && matchMedia('(pointer:fine)').matches && i.focus(); }, 50);
        if (P.mode === 'speed') { foot().innerHTML = ''; return; }
        foot().className = 'player__foot';
        foot().innerHTML = it.kind === 'learn'
          ? `<div class="foot__row"><span></span><button class="btn btn--wc btn--lg" data-p="next">${T('فهمیدم، بریم!', 'Got it, let’s go!')}</button></div>`
          : it.kind === 'match' ? `<div class="foot__row"><button class="btn btn--ghost" data-p="skip">${T('نمی‌دانم', 'I don’t know')}</button><span class="foot__note">${T('جفت‌ها را لمس کن', 'Tap the matching pairs')}</span></div>`
            : `<div class="foot__row"><button class="btn btn--ghost" data-p="skip">${T('نمی‌دانم', 'I don’t know')}</button><button class="btn btn--wc btn--lg" data-p="check" disabled>${T('بررسی', 'Check')}</button></div>`;
      }

      function drawOrder(it) {
        body().querySelector('.order-ans').innerHTML = it.ans.map((s, i) => `<li><button class="chip chip--on" data-p="oOut" data-i="${i}">${LT(s)}</button></li>`).join('') +
          Array.from({ length: it.steps.length - it.ans.length }, () => '<li class="ghost"></li>').join('');
        const left = it.bank.filter(s => !it.ans.includes(s));
        body().querySelector('.order-bank').innerHTML = left.map(s => `<button class="chip" data-p="oIn" data-s="${esc(s)}">${LT(s)}</button>`).join('');
        setCheck(it.ans.length === it.steps.length);
      }

      function drawBuild(it) {
        const a = body().querySelector('.build-ans');
        a.innerHTML = it.ans.length ? it.ans.map((s, i) => `<button class="chip chip--part chip--on" data-p="bOut" data-i="${i}">${s}</button>`).join('<i class="build-plus">+</i>') : `<span class="build-ph">${T('اجزای واژه را به ترتیب لمس کن', 'Tap the word parts in order')}</span>`;
        const used = it.ans.slice();
        body().querySelector('.build-bank').innerHTML = it.bank.map((s, i) => { const k = used.indexOf(s); if (k >= 0) { used.splice(k, 1); return ''; } return `<button class="chip chip--part" data-p="bIn" data-i="${i}">${s}</button>`; }).join('');
        setCheck(it.ans.length > 0);
      }

      function setCheck(on) { const b = foot().querySelector('[data-p="check"]'); if (b) b.disabled = !on; }

      /* ---------- رویدادها ---------- */
      function onInput(e) {
        const it = cur();
        if (it && it.kind === 'spell' && !it.state) { it.sel = e.target.value; setCheck(e.target.value.trim() !== ''); return; }
        if (!it || it.kind !== 'num' || it.state) return;
        const v = evalExpr(e.target.value);
        it.sel = v;
        const live = body().querySelector('.numin__live');
        const raw = EA.toEn(e.target.value);
        live.textContent = isFinite(v) && /[+*/()×÷\-]/.test(e.target.value.replace(/^-/, '')) ? '= ' + fa(v, 2) : '';
        setCheck(isFinite(v) && raw !== '');
      }

      function evalExpr(s) {
        let t = String(s).replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 1776)).replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 1632))
          .replace(/[٫,]/g, '.').replace(/×/g, '*').replace(/÷/g, '/').replace(/\s+/g, '');
        if (!t || !/^[\d.+\-*/()]+$/.test(t)) return NaN;
        try { const v = Function('"use strict";return (' + t + ')')(); return typeof v === 'number' && isFinite(v) ? v : NaN; }
        catch (e) { return NaN; }
      }

      function onClick(e) {
        const b = e.target.closest('[data-p]');
        if (!b || !P) return;
        const act = b.dataset.p, it = cur();
        if (act === 'quit') return confirmQuit();
        if (act === 'music') { EA.app.toggleMusic(); b.innerHTML = EA.app.musicIcon(); return; }
        if (act === 'next') return next();
        if (act === 'check') return check();
        if (act === 'skip') return check(true);
        if (act === 'hint') { b.hidden = true; body().querySelector('.hint').hidden = false; return; }
        if (it.state) return;
        if (act === 'sel') {
          sfx('select');
          it.sel = +b.dataset.i;
          body().querySelectorAll('[data-p="sel"]').forEach(x => x.classList.toggle('is-sel', x === b));
          if (it.kind === 'fill') { const sl = body().querySelector('.slot'); if (TERM) sl.innerHTML = LT(it.chips[it.sel]); else sl.textContent = it.chips[it.sel]; sl.classList.add('is-full'); }
          if (P.mode === 'speed') return check();
          setCheck(true);
        } else if (act === 'unsel' && it.kind === 'fill') {
          it.sel = null; b.innerHTML = '&nbsp;'; b.classList.remove('is-full');
          body().querySelectorAll('.chip').forEach(x => x.classList.remove('is-sel')); setCheck(false);
        } else if (act === 'oIn') { sfx('tap'); it.ans.push(b.dataset.s); drawOrder(it); }
        else if (act === 'oOut') { sfx('tap'); it.ans.splice(+b.dataset.i, 1); drawOrder(it); }
        else if (act === 'bIn') { sfx('tap'); it.ans.push(it.bank[+b.dataset.i]); drawBuild(it); }
        else if (act === 'bOut') { sfx('tap'); it.ans.splice(+b.dataset.i, 1); drawBuild(it); }
        else if (act === 'mL' || act === 'mR') matchTap(it, b, act === 'mL' ? 'pickL' : 'pickR');
      }

      function matchTap(it, b, side) {
        const i = +b.dataset.i;
        if (it.ok.includes(i) && b.classList.contains('is-ok')) return;
        sfx('tap');
        body().querySelectorAll(`[data-p="${side === 'pickL' ? 'mL' : 'mR'}"]`).forEach(x => x.classList.remove('is-sel'));
        it[side] = i; b.classList.add('is-sel');
        if (it.pickL == null || it.pickR == null) return;
        const l = body().querySelector(`[data-p="mL"][data-i="${it.pickL}"]`), r = body().querySelector(`[data-p="mR"][data-i="${it.pickR}"]`);
        if (it.pickL === it.pickR) {
          it.ok.push(it.pickL);
          [l, r].forEach(x => { x.classList.remove('is-sel'); x.classList.add('is-ok'); x.disabled = true; });
          if (it.ok.length === it.pairs.length) setTimeout(() => check(), 250);
          else sfx('select');
        } else {
          it.mis++;
          [l, r].forEach(x => { x.classList.remove('is-sel'); x.classList.add('is-bad'); setTimeout(() => x.classList.remove('is-bad'), 450); });
          sfx('wrong'); buzz(40);
        }
        it.pickL = it.pickR = null;
      }

      function onKey(e) {
        if (!P || document.querySelector('.modal')) return;
        const it = cur();
        if (e.key === 'Enter') {
          e.preventDefault();
          const nx = foot().querySelector('[data-p="next"]'), ck = foot().querySelector('[data-p="check"]');
          if (nx) return next();
          if (ck && !ck.disabled) return check();
          return;
        }
        if (it && !it.state && /^[1-9۱-۹]$/.test(e.key) && e.target.tagName !== 'INPUT') {
          const n = +EA.toEn(e.key) - 1;
          const btns = body().querySelectorAll('[data-p="sel"]');
          if (btns[n]) btns[n].click();
        }
      }

      /* ---------- داوری ---------- */
      function grade(it, skipped) {
        if (skipped) return false;
        switch (it.kind) {
          case 'mcq': return it.sel === it.correct;
          case 'tf': return (it.sel === 1) === it.ans;
          case 'fill': return it.chips[it.sel] === it.right;
          case 'order': return it.ans.join('|') === it.steps.join('|');
          case 'match': return it.mis === 0;
          case 'num': return Math.abs(it.sel - it.ans) <= (it.tol || 0) + 1e-9;
          case 'spell': return it.ans.some(a => spellNorm(a) === spellNorm(it.sel));
          case 'build': return it.ans.join('|') === it.parts.join('|');
        }
        return false;
      }
      function rightText(it) {
        switch (it.kind) {
          case 'mcq': return LT(it.opts[it.correct]);
          case 'tf': return it.ans ? T('درست', 'True') : T('نادرست', 'False');
          case 'fill': return LT(it.right);
          case 'order': return '<ol class="fb__ol">' + it.steps.map(s => `<li>${LT(s)}</li>`).join('') + '</ol>';
          case 'match': return it.pairs.map(p => `${LT(p[0])} ${T('←', '→')} ${LT(p[1])}`).join('<br>');
          case 'spell': return `<b dir="ltr">${it.ans[0]}</b>`;
          case 'build': return `<span dir="ltr">${it.parts.join(' + ')}</span>`;
          case 'num': return iso(`${fa(it.ans, 2)} ${it.unit}`);
        }
        return '';
      }


      /* ======================================================================
         تجربه درگیرکننده (Engaging UX) — در خدمت یادگیری و فروش، بدون دور زدن قفل‌ها
         ====================================================================== */
      const ECFG = () => (window.ACADEMY && ACADEMY.CFG) || {};
      const REFILL = () => ECFG().HEART_REFILL_GEMS || 150;
      const tierNow = () => (window.ACADEMY ? ACADEMY.access(C.id).tier : 3);
      const plainTxt = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      /* ---- کد آبی: سؤال‌های اورژانسی تایمر ضربان‌دار دارند؛ تمام شدن وقت = پاسخ غلط ---- */
      const CB_RE = /فوری|اولین اقدام|اقدام اول|نخستین اقدام|اورژانس|ایست قلبی|تشنج|کد آبی|شوک|\b(immediate|emergency|first action|first step|seizure|arrest|shock|urgent)\b/i;
      function isCodeBlue(it) {
        if (!P || P.exam || P.timed || P.mode === 'speed' || !it || it.kind === 'learn' || it.retry) return false;
        if (it.codeBlue) return true;
        if (!(P.mode === 'lesson' || P.mode === 'round' || P.mode === 'practice' || P.mode === 'clinic')) return false;
        // واژه‌های اورژانسی، یا تصمیم بالینی روی پرونده واقعی بیمار (نه سؤال‌های تعریفی)
        if (CB_RE.test((it.stage || '') + ' ' + plainTxt(it.q))) return true;
        // راند بیمارستان: مرحله‌های درمان و اقدام زیر فشار زمان
        if (P.mode === 'round' && /^(درمان|اقدام|ارزیابی اولیه|پایش فوری|treatment|action|initial assessment)/i.test(String(it.stage || '').trim())) return true;
        return P.mode === 'lesson' && !!(it.case && it.case.length) && (it.kind === 'mcq' || it.kind === 'num');
      }
      function stopCB() { if (P && P.cbT) { clearInterval(P.cbT); P.cbT = null; } if (root) root.classList.remove('is-codeblue'); }
      /* ---- وضعیت حیاتی بیمار در کیس‌های زنجیره‌ای (راند بیمارستان) ---- */
      function vitalsHTML() {
        const r = EA.rounds && EA.rounds.find(x => x.id === P.round);
        const h = P.health, st = h >= 65 ? ['ok', T('پایدار', 'Stable')] : h >= 35 ? ['warn', T('ناپایدار', 'Unstable')] : ['crit', T('بحرانی', 'Critical')];
        const vit = r && r.vitals ? Object.keys(r.vitals).map(k => `<span class="vitals__v"><small>${esc(k.toUpperCase())}</small>${iso(String(r.vitals[k]))}</span>`).join('') : '';
        return `<div class="vitals vitals--${st[0]}" style="--hp:${h}%"><div class="vitals__who"><b>💓 ${T('وضعیت حیاتی بیمار', 'Patient status')}</b><small>${r ? r.who : ''}</small></div><svg class="vitals__ecg" viewBox="0 0 120 32" aria-hidden="true"><path class="vitals__base" d="M0 18 H34 L38 18 L42 5 L47 29 L51 11 L55 18 H120"/><path class="vitals__run" d="M0 18 H34 L38 18 L42 5 L47 29 L51 11 L55 18 H120"/></svg><span class="vitals__st">${st[1]}</span>${vit}<div class="vitals__bar"><i></i></div></div>`;
      }
      function engageRender(it) {
        stopCB();
        const b = body();
        if (P.mode === 'round') b.insertAdjacentHTML('afterbegin', vitalsHTML());
        if (!isCodeBlue(it)) return;
        const sec = it.codeBlue > 1 ? it.codeBlue : (it.kind === 'num' || it.kind === 'order' || it.kind === 'match') ? 75 : 40;
        const q = b.querySelector('.qwrap');
        q.insertAdjacentHTML('afterbegin', `<div class="codeblue" role="timer" style="--t:${sec}s"><span class="codeblue__i">🚨</span><span class="codeblue__x"><b>${T('کد آبی!', 'Code Blue!')}</b><small>${T('بیمار وقت ندارد؛ سریع و درست تصمیم بگیر', 'The patient can’t wait — decide fast and right')}</small></span><b class="codeblue__n">${fa(sec)}</b><i class="codeblue__bar"></i></div>`);
        root.classList.add('is-codeblue');
        const end = Date.now() + sec * 1000, n = q.querySelector('.codeblue__n'), box = q.querySelector('.codeblue');
        P.cbT = setInterval(() => {
          if (!P || !root) return stopCB();
          const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
          n.textContent = fa(left);
          if (left <= 10) box.classList.add('is-hot');
          if (left <= 0) {
            stopCB();
            if (cur() === it && !it.state) { EA.ui.toast(T('⏱ وقت کد آبی تمام شد!', '⏱ Code Blue time ran out!'), 'toast--bad'); check(true); }
          }
        }, 250);
      }
      function engageCheck(it, ok) {
        const cb = P.cbT && body().querySelector('.codeblue');
        stopCB();
        if (cb) { cb.classList.add('is-done'); cb.querySelector('small').textContent = ok ? T('✓ به‌موقع و درست؛ بیمار نجات یافت', '✓ On time and right — patient saved') : T('✗ تصمیم اشتباه یا دیر', '✗ Wrong or too late'); }
        if (P.mode === 'round' && it.kind !== 'learn') {
          P.health = Math.max(5, Math.min(100, (P.health || 70) + (ok ? 10 : -22)));
          const v = body().querySelector('.vitals'); if (v) v.outerHTML = vitalsHTML();
        }
      }
      /* ---- پیشنهاد ارتقا هنگام تمام شدن قلب‌ها ---- */
      const heartUpsellHTML = () => EA.S.noHearts() ? '' : `<div class="ohup"><b>♾️ ${T('خسته از تمام شدن قلب‌ها در لحظات حساس؟', 'Tired of running out of hearts at the worst moment?')}</b><span>${T('با ارتقا به پلن بالینی Pro یا VIP، قلب بی‌نهایت (♾️) و ماشین‌حساب بالینی بگیرید!', 'Upgrade to Pro or VIP for unlimited hearts (♾️) and the clinical calculators!')}</span><button class="btn btn--gold" data-ohup>👑 ${T('ارتقا به Pro / VIP', 'Upgrade to Pro / VIP')}</button></div>`;
      function wireHeartUpsell(m, onUnlimited) {
        const b = m.el.querySelector('[data-ohup]');
        if (b) b.onclick = () => { sfx('tap'); EA.gate && EA.gate.upsell('hearts'); };
        // اگر همین‌جا ارتقا داد و قلب بی‌نهایت گرفت، درس بی‌وقفه ادامه پیدا می‌کند
        const iv = setInterval(() => {
          if (!document.body.contains(m.el)) return clearInterval(iv);
          if (EA.S.noHearts()) { clearInterval(iv); m.close(); onUnlimited && onUnlimited(); }
        }, 700);
      }
      /* ---- پایان درس: صندوقچه درس + صندوقچه طلایی Pro/VIP + پیش‌نمایش کیس بعدی ---- */
      function nextLessonOf(lid) {
        const all = []; EA.worlds.forEach(w => w.lessons.forEach((l, i) => all.push({ w, l, i })));
        const k = all.findIndex(x => x.l.id === lid);
        return k >= 0 && k + 1 < all.length ? Object.assign({ n: k + 2 }, all[k + 1]) : null;
      }
      function teaserOf(l) {
        const q = l.items.find(x => x.t !== 'learn' && x.q) || l.items.find(x => x.title) || {};
        let t = plainTxt(q.q || q.title);
        if (t.length > 130) t = t.slice(0, 128) + '…';
        return t;
      }
      function lessonEndHTML(gems, first) {
        const pro = tierNow() >= 2, nx = nextLessonOf(P.lesson);
        const locked = nx && EA.gate && !EA.gate.lesson(nx.w, nx.i);
        const vipSub = pro ? (first ? T('بزن تا باز شود ✨', 'Tap to open ✨') : T('با هر درس تازه پر می‌شود', 'Refills with every new lesson'))
          : T('♾️ قلب بی‌نهایت • 🧮 ابزار بالینی • 💎 الماس ویژه', '♾️ unlimited hearts • 🧮 clinical tools • 💎 bonus gems');
        return `<div class="lchests">
            <button class="lchest lchest--free" data-lc="free"><span class="lchest__i">🎁</span><b>${T('صندوقچه درس', 'Lesson chest')}</b><small class="lchest__v">+${fa(gems)} 💎</small></button>
            <button class="lchest lchest--vip ${pro ? '' : 'is-locked'}" data-lc="vip"><span class="lchest__i">${pro ? '👑' : '🎁'}</span>${pro ? '' : '<em class="lchest__lock">🔒</em>'}<b>${T('صندوقچه طلایی Pro/VIP', 'Golden Pro/VIP chest')}</b><small>${vipSub}</small></button>
          </div>${nx ? `<div class="nextcase ${locked ? 'is-locked' : ''}" style="--wc:${nx.w.color}"><small>🚑 ${T('پرونده بعدی', 'Next case')} • ${T('درس', 'Lesson')} ${fa(nx.n)}</small><b>${nx.l.icon || ''} ${nx.l.title}</b><p>${teaserOf(nx.l)}</p></div>` : ''}`;
      }
      function lessonEndWire(queue, lid, first) {
        const s = S(), nx = nextLessonOf(lid);
        const fr = body().querySelector('[data-lc="free"]'), vp = body().querySelector('[data-lc="vip"]');
        if (fr) fr.onclick = () => { if (fr.classList.contains('is-open')) return; fr.classList.add('is-open'); sfx('chest'); };
        if (vp) vp.onclick = () => {
          if (tierNow() < 2) { sfx('tap'); return EA.gate && EA.gate.upsell('vipchest'); }
          if (vp.classList.contains('is-open')) return;
          if (!first) return EA.ui.toast(T('صندوقچه طلایی با هر درس تازه پر می‌شود 👑', 'The golden chest refills with every new lesson 👑'));
          const g = ECFG().VIP_CHEST_GEMS || 15;
          s.gems += g; EA.S.save();
          vp.classList.add('is-open'); vp.querySelector('small').textContent = '+' + fa(g) + ' 💎 ' + T('الماس ویژه', 'bonus gems');
          sfx('chest'); confetti(60);
        };
        if (!nx) return;
        foot().innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-cont>${T('بازگشت به مسیر', 'Back to the path')}</button><button class="btn btn--brand btn--lg nextbtn" data-next>🚀 <span class=\"nb-x\">${T('ورود به ', 'Enter ')}</span>${T(`کیس بعدی (درس ${fa(nx.n)})`, `the next case (lesson ${fa(nx.n)})`)}</button></div>`;
        foot().querySelector('[data-cont]').onclick = () => celebrate(queue, () => { close(); EA.app.refresh('lesson'); });
        foot().querySelector('[data-next]').onclick = () => {
          // کاربر رایگان: قفل دور زده نمی‌شود؛ مستقیم پنجره خرید
          if (EA.gate && !EA.gate.lesson(nx.w, nx.i)) { sfx('tap'); return EA.gate.upsell('next'); }
          celebrate(queue, () => { close(); EA.app.refresh('lesson'); setTimeout(() => api.lesson(nx.w.id, nx.l.id), 80); });
        };
      }


      /* ---- یادداشت شخصی زیر هر سؤال (در پروفایل جمع می‌شود و در پشتیبان ذخیره) ---- */
      const nkey = it => it.key || ('q:' + Array.from(plainTxt(it.q)).reduce((h, c) => (h * 33 + c.charCodeAt(0)) | 0, 5381));
      const hasNote = it => !!(S().pnotes && S().pnotes[nkey(it)] && S().pnotes[nkey(it)].t);
      function noteBtnHTML(it) { return `<button type="button" class="fb__note ${hasNote(it) ? 'has' : ''}" data-pn>📝 ${hasNote(it) ? T('یادداشت تو', 'Your note') : T('یادداشت شخصی', 'Personal note')}</button>`; }
      function openNote(it) {
        if (!it) return;
        const s = S(), k = nkey(it), old = (s.pnotes && s.pnotes[k]) || null;
        const m = modal(`<div class="pnote"><h3>📝 ${T('یادداشت شخصی', 'Personal note')}</h3>
            <p class="pnote__q" dir="auto">${esc(plainTxt(it.q || it.title).slice(0, 220))}</p>
            <textarea maxlength="2000" dir="auto" placeholder="${T('نکته‌ای که می‌خواهی یادت بماند… (فقط برای خودت، در پروفایل جمع می‌شود)', 'A point you want to remember… (only for you; collected in your profile)')}">${esc(old ? old.t : '')}</textarea>
            <div class="modal__btns"><button class="btn btn--brand" data-sv>💾 ${T('ذخیره', 'Save')}</button>${old ? `<button class="btn btn--ghost-red" data-del>🗑️ ${T('حذف', 'Delete')}</button>` : ''}<button class="btn btn--ghost" data-close>${T('انصراف', 'Cancel')}</button></div></div>`);
        const ta = m.el.querySelector('textarea'); setTimeout(() => ta.focus(), 60);
        const after = () => { const b = root && root.querySelector('[data-pn]'); if (b) b.outerHTML = noteBtnHTML(it); };
        m.el.querySelector('[data-sv]').onclick = () => {
          const v = ta.value.trim();
          s.pnotes = s.pnotes || {};
          if (v) s.pnotes[k] = { t: v.slice(0, 2000), q: plainTxt(it.q || it.title).slice(0, 300), a: plainTxt(rightText(it)).slice(0, 200), w: it.world || (P && P.world) || null, at: Date.now() };
          else delete s.pnotes[k];
          EA.S.save(); m.close(); after(); EA.ui.toast(T('📝 یادداشت ذخیره شد', '📝 Note saved'));
        };
        const del = m.el.querySelector('[data-del]');
        if (del) del.onclick = () => { delete s.pnotes[k]; EA.S.save(); m.close(); after(); EA.ui.toast(T('یادداشت حذف شد', 'Note deleted')); };
      }
      document.addEventListener('click', e => { const b = e.target.closest('.player [data-pn]'); if (b && P) openNote(cur()); });
      function check(skipped) {
        const it = cur();
        if (!it || it.state) return;
        const ok = grade(it, skipped);
        engageCheck(it, ok);
        it.state = ok ? 'ok' : 'bad';
        const first = !it.retry;
        const w = it.world || P.world;
        if (w) { P.byWorld[w] = P.byWorld[w] || { ok: 0, n: 0 }; if (first) { P.byWorld[w].n++; if (ok) P.byWorld[w].ok++; } }
        if (first) P.graded++;
        const st = S().stats;
        if (ok) {
          if (first) P.correct++;
          P.combo++; P.maxCombo = Math.max(P.maxCombo, P.combo);
          st.correct++; if (it.calc) st.calcs++;
          st.bestCombo = Math.max(st.bestCombo, P.combo);
          P.done++;
          P.xp += it.calc ? 3 : 2;
          if (P.combo >= 3 && P.combo % 3 === 0) { P.xp += 3; showCombo(P.combo); }
          if ((P.mode === 'practice' || P.mode === 'clinic') && it.key) EA.S.clearMistake(it.key);
          sfx('correct'); buzz(15);
        } else {
          if (first) P.wrong++;
          P.combo = 0; st.wrong++;
          if (it.key && P.mode !== 'speed' && P.mode !== 'round') EA.S.recordMistake(it.key);
          if (P.mode === 'lesson') EA.S.loseHeart();
          if (!P.exam && P.mode !== 'speed' && P.mode !== 'round') { it.retry = true; P.queue.push(it); }
          sfx('wrong'); buzz([30, 40, 30]);
        }
        EA.S.save();
        // علامت‌گذاری گزینه‌ها
        const btns = body().querySelectorAll('[data-p="sel"]');
        if (it.kind === 'mcq') btns.forEach((x, i) => { if (i === it.correct) x.classList.add('is-right'); else if (i === it.sel) x.classList.add('is-wrong'); x.disabled = true; });
        if (it.kind === 'tf') btns.forEach(x => { const v = +x.dataset.i; if ((v === 1) === it.ans) x.classList.add('is-right'); else if (v === it.sel) x.classList.add('is-wrong'); x.disabled = true; });
        if (it.kind === 'fill') btns.forEach((x, i) => { if (it.chips[i] === it.right) x.classList.add('is-right'); else if (i === it.sel) x.classList.add('is-wrong'); x.disabled = true; });
        if (it.kind === 'num') { const inp = body().querySelector('input'); inp.disabled = true; inp.parentNode.classList.add(ok ? 'is-right' : 'is-wrong'); }
        if (it.kind === 'order') body().querySelectorAll('.chip').forEach(x => x.disabled = true);
        if (it.kind === 'spell') { const inp = body().querySelector('input'); inp.disabled = true; inp.parentNode.classList.add(ok ? 'is-right' : 'is-wrong'); }
        if (it.kind === 'build') body().querySelectorAll('.chip').forEach(x => { x.disabled = true; if (x.closest('.build-ans')) x.classList.add(ok ? 'is-right' : 'is-wrong'); });
        updateTop();

        if (P.mode === 'speed') { setTimeout(() => P && next(), ok ? 250 : 700); return; }
        if (P.exam) { // در آزمون فقط علامت درست/غلط، بدون توضیح طولانی
          foot().className = 'player__foot fb ' + (ok ? 'fb--ok' : 'fb--bad');
          foot().innerHTML = `<div class="foot__row"><div class="fb__t">${ok ? '✓ ' + T('درست', 'Correct') : '✗ ' + T('نادرست', 'Incorrect')}</div><button class="btn ${ok ? 'btn--green' : 'btn--red'} btn--lg" data-p="next">${T('ادامه', 'Continue')}</button></div>`;
          return;
        }
        foot().className = 'player__foot fb ' + (ok ? 'fb--ok' : 'fb--bad');
        foot().innerHTML = `<div class="fb__in">
            <div class="fb__react ${ok ? 'is-ok' : 'is-bad'}" aria-hidden="true">${mascot(ok ? 'cheer' : 'sad', 'var(--brand)', 60)}</div>
            <div class="fb__icon">${ok ? '✓' : '✗'}</div>
            <div class="fb__txt">
              <div class="fb__t">${ok ? pick(YES()) : pick(NO())}</div>
              ${ok ? '' : `<div class="fb__ans"><b>${T('پاسخ درست:', 'Correct answer:')}</b> ${rightText(it)}</div>`}
              ${it.why ? `<details class="fb__why" ${ok && !it.calc ? '' : 'open'}><summary>${T('چرا؟', 'Why?')}</summary><div>${BI(it.why)}</div></details>` : ''}
              ${noteBtnHTML(it)}
            </div>
          </div>
          <button class="btn ${ok ? 'btn--green' : 'btn--red'} btn--lg fb__btn" data-p="next">${T('ادامه', 'Continue')}</button>`;
      }

      function showCombo(n) {
        sfx('combo');
        const c = root.querySelector('.pbar__combo');
        c.textContent = T(`🔥 ${fa(n)} تا پشت سر هم!`, `🔥 ${fa(n)} in a row!`);
        c.classList.remove('is-on'); void c.offsetWidth; c.classList.add('is-on');
        const fx = document.createElement('div');
        fx.className = 'mastery';
        fx.innerHTML = `<div class="mastery__in"><span class="mastery__f">🔥</span><b>${T('تسلط بالینی!', 'Clinical mastery!')}</b><small>${fa(n)} ${T('پاسخ درست پشت سر هم', 'correct in a row')} • +${fa(3)} XP</small></div>`;
        root.appendChild(fx); setTimeout(() => fx.remove(), 1800);
      }

      function next() {
        if (!P || P.finished) return;
        stopCB();
        const it = cur();
        if (it && it.kind === 'learn') { P.done++; }
        if (P.mode === 'lesson' && !EA.S.noHearts() && S().hearts <= 0) return outOfHearts();
        P.idx++;
        if (P.mode === 'speed' && P.idx >= P.queue.length) P.queue.push(...P.refill());
        if (P.idx >= P.queue.length) return finish();
        render();
      }

      /* ---------- پنجره‌های میانی ---------- */
      function confirmQuit() {
        if (P.mode === 'speed' || P.graded === 0 && P.done === 0) { close(); EA.app.refresh(); return; }
        const m = modal(`${mascot('sad', 'var(--brand)', 90)}
          <h3>${T('صبر کن! نرو!', 'Wait, don’t go!')}</h3>
          <p>${T(`اگر الان خارج شوی پیشرفت این ${P.exam ? 'آزمون' : 'درس'} از دست می‌رود.`, `If you quit now, you’ll lose your progress in this ${P.exam ? 'exam' : 'lesson'}.`)}</p>
          <div class="modal__btns">
            <button class="btn btn--brand btn--lg" data-close>${T('ادامه یادگیری', 'Keep learning')}</button>
            <button class="btn btn--ghost-red" data-quit>${T('خروج', 'Quit')}</button>
          </div>`);
        m.el.querySelector('[data-quit]').onclick = () => { m.close(); close(); EA.app.refresh(); };
      }

      function outOfHearts() {
        const s = S();
        const m = modal(`${mascot('sad', '#FF4B4B', 90)}
          <h3>${T('قلب‌هات تموم شد!', 'You’re out of hearts!')}</h3>
          <p>${T('قلب بعدی:', 'Next heart in')} <b class="oh-t">${mmss(EA.S.nextHeartIn())}</b></p>
          ${heartUpsellHTML()}
          <div class="modal__btns">
            <button class="btn btn--blue btn--lg" data-refill ${s.gems < REFILL() ? 'disabled' : ''}>${T(`پر کردن قلب‌ها با ${fa(REFILL())} 💎`, `Refill hearts for ${fa(REFILL())} 💎`)}</button>
            <button class="btn btn--green" data-practice>${T('تمرین کن و قلب بگیر', 'Practice to earn a heart')}</button>
            <button class="btn btn--ghost" data-end>${T('پایان درس', 'End lesson')}</button>
          </div>`, { sticky: true });
        m.el.querySelector('[data-refill]').onclick = () => { if (s.gems < REFILL()) return; s.gems -= REFILL(); EA.S.addHeart(5); m.close(); sfx('chest'); P.idx++; P.idx >= P.queue.length ? finish() : render(); };
        wireHeartUpsell(m, () => { if (!P) return; EA.ui.toast(T('♾️ قلب بی‌نهایت فعال شد؛ ادامه بده!', '♾️ Unlimited hearts on — keep going!')); P.idx++; P.idx >= P.queue.length ? finish() : render(); });
        m.el.querySelector('[data-practice]').onclick = () => { m.close(); close(); EA.app.go('practice'); };
        m.el.querySelector('[data-end]').onclick = () => { m.close(); close(); EA.app.refresh(); };
      }

      /* ---------- پایان جلسه ---------- */
      function finish() {
        const s = S();
        const secs = Math.round((Date.now() - P.start) / 1000);
        s.stats.seconds += secs;
        const acc = P.graded ? P.correct / P.graded : 1;
        const events = [];
        let title = T('درس تمام شد!', 'Lesson complete!'), mood = 'cheer', extra = '', passed = true, gems = 0;

        if (P.mode === 'lesson') {
          const perfect = P.wrong === 0;
          P.xp += 10 + (perfect ? 5 : 0);
          P.firstDone = !s.done[P.lesson];
          const cg = ECFG().CHEST_GEMS || [5, 10];
          gems = P.firstDone ? cg[0] + Math.floor(Math.random() * (cg[1] - cg[0] + 1)) : 1;
          const stars = acc >= 0.95 ? 3 : acc >= 0.8 ? 2 : 1;
          const prev = s.done[P.lesson];
          s.done[P.lesson] = { stars: Math.max(stars, prev ? prev.stars : 0), at: Date.now() };
          s.stats.lessons++; if (perfect) s.stats.perfect++;
          extra = `<div class="stars">${[1, 2, 3].map(i => `<span class="star ${i <= stars ? 'on' : ''}" style="--d:${i * 0.18}s">★</span>`).join('')}</div>` + lessonEndHTML(gems, P.firstDone);
          if (perfect) title = T('درس بی‌نقص!', 'Perfect lesson!');
        } else if (P.mode === 'checkpoint') {
          passed = acc >= EA.exam.checkpoint.pass;
          const w = worldOf(P.world);
          const prev = s.checkpoints[P.world];
          s.checkpoints[P.world] = { passed: passed || !!(prev && prev.passed), best: Math.max(acc, prev ? prev.best : 0) };
          P.xp += passed ? 40 : 10; gems = passed ? 30 : 0;
          title = passed ? T(`دنیای ${w.name} را فتح کردی!`, `You conquered the ${w.name} world!`) : T('این بار نشد!', 'Not this time!');
          mood = passed ? 'cheer' : 'sad';
          extra = `<p class="res__sub">${passed ? T('نشان این دنیا مال توست 🏆', 'This world’s badge is yours 🏆') : T(`برای قبولی ${fa(Math.round(EA.exam.checkpoint.pass * 100))}٪ لازم است. درس‌ها را مرور کن و دوباره بیا.`, `You need ${fa(Math.round(EA.exam.checkpoint.pass * 100))}% to pass. Review the lessons and come back.`)}</p>`;
        } else if (P.mode === 'final') {
          passed = acc >= EA.exam.final.pass;
          P.xp += passed ? 100 : 20; gems = passed ? 100 : 0;
          const best = s.final && s.final.passed ? s.final : null;
          if (passed && (!best || acc > best.score)) s.final = { passed: true, score: acc, at: Date.now() };
          else if (!best) s.final = { passed: false, score: Math.max(acc, (s.final && s.final.score) || 0), at: Date.now() };
          title = passed ? T('تبریک! قبول شدی 🎓', 'Congratulations, you passed! 🎓') : T('امتحان نهایی: قبول نشدی', 'Final exam: not passed');
          mood = passed ? 'cheer' : 'sad';
          extra = `<div class="bw">${EA.worlds.map(w => { const r = P.byWorld[w.id] || { ok: 0, n: 0 }; const p = r.n ? r.ok / r.n : 0; return `<div class="bw__r"><span class="bw__s" style="background:${w.color}">${w.sym}</span><span class="bw__bar"><i style="width:${p * 100}%;background:${w.color}"></i></span><b>${fa(r.ok)}/${fa(r.n)}</b></div>`; }).join('')}</div>
            <p class="res__sub">${passed ? T('گواهی‌نامه‌ات آماده است.', 'Your certificate is ready.') : T(`حد قبولی ${fa(Math.round(EA.exam.final.pass * 100))}٪ است. بخش‌های ضعیف را مرور کن.`, `The pass mark is ${fa(Math.round(EA.exam.final.pass * 100))}%. Review your weaker areas.`)}</p>`;
        } else if (P.mode === 'practice' || P.mode === 'calc' || P.mode === 'clinic') {
          P.xp += 5;
          if (P.graded > 0) EA.S.addHeart(1);
          title = P.mode === 'clinic' ? T('ویزیت کلینیک خطاها تمام شد! 🩺', 'Mistake clinic visit complete! 🩺') : T('تمرین تمام شد!', 'Practice complete!');
          extra = `<p class="res__sub">${EA.S.noHearts() ? '' : T('❤️ یک قلب گرفتی!', '❤️ You earned a heart!')}</p>`;
        } else if (P.mode === 'round') {
          passed = acc >= 0.7;
          P.xp += passed ? 25 : 8; gems = passed ? 15 : 0;
          s.rounds = s.rounds || {};
          const prev = s.rounds[P.round];
          s.rounds[P.round] = { best: Math.max(acc, prev ? prev.best : 0), passed: passed || !!(prev && prev.passed), at: Date.now() };
          title = TERM ? (passed ? T('پرونده را عالی خواندی! 🩺', 'You read this chart brilliantly! 🩺') : T('این پرونده دقت بیشتری می‌خواست', 'This chart needed a closer read')) : passed ? T('بیمار را عالی مدیریت کردی! 🩺', 'You managed this patient brilliantly! 🩺') : T('بیمار نیاز به مراقبت بیشتری داشت', 'This patient needed better care');
          mood = passed ? 'cheer' : 'sad';
          extra = `<p class="res__sub">${passed ? T('تصمیم‌هایت در هر مرحله درست بود؛ این یعنی آمادگی برای بخش واقعی.', 'Your decisions were right at every step; you’re ready for the real ward.') : T('توضیح هر مرحله را دوباره بخوان و کیس را تکرار کن.', 'Reread the explanation for each step and try the case again.')}</p>`;
        } else if (P.mode === 'speed') {
          P.xp = P.correct * 2;
          s.stats.bestSpeed = Math.max(s.stats.bestSpeed, P.correct);
          title = T(`${fa(P.correct)} جواب درست در ${fa(P.seconds)} ثانیه!`, `${fa(P.correct)} correct in ${fa(P.seconds)} seconds!`);
          mood = P.correct >= 10 ? 'cheer' : 'happy';
          extra = `<p class="res__sub">${T('رکورد تو:', 'Your best:')} ${fa(s.stats.bestSpeed)}</p>`;
        }
        s.gems += gems;
        events.push(...EA.S.addXp(P.xp));
        const newChars = EA.chars.check(s);
        const badges = EA.S.checkBadges();
        EA.S.save();
        clearInterval(P.timer); stopCB();

        const tiles = [
          ['xp', T('امتیاز', 'XP'), '⚡', fa(P.xp)],
          ['acc', P.exam ? T('نمره', 'Score') : T('دقت', 'Accuracy'), '🎯', fa(Math.round(acc * 100)) + T('٪', '%')],
          ['time', T('زمان', 'Time'), '⏱', mmss(secs * 1000)]
        ];
        if (gems) tiles.push(['gem', T('الماس', 'Gems'), '💎', '+' + fa(gems)]);
        body().innerHTML = `<div class="res ${passed ? '' : 'res--fail'}">
            <div class="res__m">${buddy(mood, 130)}</div>
            <h2 class="res__t">${title}</h2>
            ${extra}
            <div class="tiles">${tiles.map((t, i) => `<div class="tile tile--${t[0]}" style="--d:${0.25 + i * 0.12}s"><div class="tile__h">${t[1]}</div><div class="tile__v">${t[2]} ${t[3]}</div></div>`).join('')}</div>
            ${P.maxCombo >= 5 ? `<p class="res__combo">🔥 ${T('بهترین زنجیره جواب درست:', 'Best answer streak:')} ${fa(P.maxCombo)}</p>` : ''}
            <div class="tip tip--res"><small>${T('نکته', 'Tip')}</small><div class="tip__body"></div></div>
          </div>`;
        EA.tips.mount(body().querySelector('.tip'), 8000);
        root.querySelector('.player__top').classList.add('is-hidden');
        const final = P.mode === 'final' && passed;
        foot().className = 'player__foot';
        foot().innerHTML = `<div class="foot__row">${P.mode === 'speed' ? `<button class="btn btn--ghost" data-again>${T('دوباره', 'Again')}</button>` : '<span></span>'}<button class="btn btn--brand btn--lg" data-cont>${final ? T('دیدن گواهی‌نامه', 'View certificate') : T('ادامه', 'Continue')}</button></div>`;
        if (passed) { sfx('done'); confetti(); } else sfx('fail');

        const queue = events.concat(newChars.map(c => ({ type: 'char', c })), badges.map(b => ({ type: 'badge', b })));
        const mode = P.mode;
        foot().querySelector('[data-cont]').onclick = () => celebrate(queue, () => { close(); if (final) EA.app.certificate(); else EA.app.refresh(mode); });
        const ag = foot().querySelector('[data-again]');
        if (ag) ag.onclick = () => { close(); EA.player.speed(); };
        if (mode === 'lesson') lessonEndWire(queue, P.lesson, P.firstDone);
        P.finished = true;
      }

      function celebrate(list, done) {
        if (!list.length) return done();
        const e = list.shift();
        let html = '';
        if (e.type === 'streak') html = `<div class="cel"><div class="cel__fire">🔥</div><div class="cel__n">${fa(e.n)}</div><h2>${T('روز زنجیره!', e.n === 1 ? 'day streak!' : 'day streak!')}</h2><p>${e.n === 1 ? T('زنجیره‌ات شروع شد. فردا هم بیا تا خاموش نشود!', 'Your streak has started. Come back tomorrow to keep it alive!') : T('آتشت روشن است! هر روز فقط چند دقیقه.', 'Your fire is burning! Just a few minutes a day.')}</p></div>`;
        else if (e.type === 'goal') html = `<div class="cel">${mascot('cheer', '#FFC800', 110)}<h2>${T('هدف روزانه کامل شد!', 'Daily goal reached!')}</h2><p>${T(`+${fa(10)} 💎 جایزه گرفتی.`, `You earned +${fa(10)} 💎.`)}</p></div>`;
        else if (e.type === 'level') { const lv = EA.S.level(); html = `<div class="cel"><div class="cel__lv">${fa(e.n)}</div><h2>${T('سطح', 'Level')} ${fa(e.n)}!</h2><p>${T('عنوان تازه:', 'New title:')} <b>${lv.title}</b></p></div>`; }
        else if (e.type === 'badge') html = `<div class="cel"><div class="cel__badge">${e.b.icon}</div><h2>${T('نشان تازه:', 'New badge:')} ${e.b.name}</h2><p>${e.b.desc} • +${fa(20)} 💎</p></div>`;
        else if (e.type === 'char') html = charReveal(e.c);
        body().innerHTML = html;
        sfx({ badge: 'chest', level: 'level', char: 'char', streak: 'streak', goal: 'done' }[e.type] || 'done');
        if (e.type !== 'streak') confetti(e.type === 'char' ? 140 : 80);
        foot().innerHTML = `<div class="foot__row">${e.type === 'char' ? `<button class="btn btn--ghost" data-buddy>${T('همراه من شو', 'Be my companion')}</button>` : '<span></span>'}<button class="btn btn--brand btn--lg" data-c2>${T('ادامه', 'Continue')}</button></div>`;
        foot().querySelector('[data-c2]').onclick = () => celebrate(list, done);
        const bd = foot().querySelector('[data-buddy]');
        if (bd) bd.onclick = () => { S().companion = e.c.id; EA.S.save(); sfx('combo'); bd.textContent = T('همراهت شد ✓', 'Now your companion ✓'); bd.disabled = true; };
      }

      function charReveal(c) {
        const w = worldOf(c.w);
        return `<div class="cel cel--char" style="--wc:${w.color}">
          <small class="cel__k">${T(`سطح «${w.levels[c.lv]}» از دنیای ${w.name} تمام شد!`, `You finished the “${w.levels[c.lv]}” level of the ${w.name} world!`)}</small>
          <div class="cel__stage"><div class="cel__rays"></div>${EA.chars.draw(c, 'cheer', 150)}</div>
          <h2>${T('کاراکتر تازه:', 'New character:')} ${c.name}</h2>
          <p class="cel__title">${c.title}</p>
          <p>${c.bio}</p>
        </div>`;
      }

      /* ---------- شروع انواع جلسه ---------- */
      function heartsGate() {
        const s = S();
        if (EA.S.noHearts() || s.hearts > 0) return true;
        const m = modal(`${mascot('sad', '#FF4B4B', 90)}<h3>${T('قلبی نمانده!', 'No hearts left!')}</h3>
          <p>${T(`قلب بعدی: <b>${mmss(EA.S.nextHeartIn())}</b>. با تمرین مرور هم قلب می‌گیری.`, `Next heart in <b>${mmss(EA.S.nextHeartIn())}</b>. You can also earn one with review practice.`)}</p>
          ${heartUpsellHTML()}
          <div class="modal__btns">
            <button class="btn btn--blue btn--lg" data-refill ${s.gems < ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150) ? 'disabled' : ''}>${T(`پر کردن با ${fa(((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150))} 💎`, `Refill for ${fa(((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150))} 💎`)}</button>
            <button class="btn btn--green" data-practice>${T('تمرین کن و قلب بگیر', 'Practice to earn a heart')}</button>
            <button class="btn btn--ghost" data-close>${T('بعداً', 'Later')}</button>
          </div>`);
        m.el.querySelector('[data-refill]').onclick = () => { s.gems -= ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150); EA.S.addHeart(5); m.close(); sfx('chest'); EA.app.refresh(); };
        wireHeartUpsell(m, () => EA.app.refresh());
        m.el.querySelector('[data-practice]').onclick = () => { m.close(); EA.app.go('practice'); };
        return false;
      }

      const api = {
        lesson(wid, lid) {
          const w = worldOf(wid), l = w.lessons.find(x => x.id === lid);
          if (EA.gate && !EA.gate.lesson(w, w.lessons.indexOf(l))) return EA.gate.upsell('lesson');
          if (!heartsGate()) return;
          open({ mode: 'lesson', world: wid, lesson: lid, queue: l.items.map((it, i) => inst(it, { key: lid + ':' + i, world: wid })) });
        },
        checkpoint(wid) {
          if (EA.gate && !EA.gate.final()) return EA.gate.upsell('checkpoint');
          const c = EA.exam.checkpoint;
          open({ mode: 'checkpoint', exam: true, world: wid, queue: sample(worldOf(wid), c.count - c.gens, c.gens) });
        },
        final() {
          if (EA.gate && !EA.gate.final()) return EA.gate.upsell('final');
          const f = EA.exam.final;
          const q = [];
          EA.worlds.forEach(w => q.push(...sample(w, f.perWorld - f.gensPerWorld, f.gensPerWorld)));
          open({ mode: 'final', exam: true, timed: true, seconds: f.minutes * 60, endsAt: Date.now() + f.minutes * 60000, queue: shuffle(q) });
        },
        /** کلینیک خطاها: فقط سؤال‌هایی که قبلاً اشتباه شده‌اند، به ترتیب تکرار فاصله‌دار */
        clinic() {
          if (EA.gate && EA.gate.clinic && !EA.gate.clinic()) return EA.gate.upsell('clinic');
          const q = EA.S.mistakeQueue().slice(0, 15).map(keyToInst).filter(Boolean);
          if (!q.length) { EA.ui.toast(T('کلینیک خلوت است؛ هیچ خطای ثبت‌شده‌ای نداری 🎉', 'The clinic is empty — no recorded mistakes 🎉')); return; }
          open({ mode: 'clinic', queue: q });
        },
        practice() {
          const keys = EA.S.mistakeQueue().slice(0, 10);
          let q = keys.map(keyToInst).filter(Boolean);
          if (q.length < 6) {
            const done = EA.worlds.filter(w => w.lessons.some(l => S().done[l.id]));
            const pool = (done.length ? done : EA.worlds.slice(0, 1)).flatMap(w => staticPool(w));
            q = q.concat(shuffle(pool).slice(0, 8 - q.length).map(x => inst(x.it, { key: x.key, world: x.world })));
          }
          open({ mode: 'practice', queue: q });
        },
        calc(wid) {
          if (EA.gate && !EA.gate.calc()) return EA.gate.upsell('calc');
          const ws = wid ? [worldOf(wid)] : EA.worlds;
          const gens = ws.flatMap(w => w.gens.map(g => ({ g, w: w.id })));
          const order = shuffle(gens);
          const q = Array.from({ length: 8 }, (_, i) => order[i % order.length]).map(x => inst({ t: 'num', gen: x.g }, { world: x.w }));
          open({ mode: 'calc', world: wid || null, queue: q });
        },
        round(id) {
          if (EA.gate && !EA.gate.rounds()) return EA.gate.upsell('rounds');
          const r = EA.rounds.find(x => x.id === id);
          const w = worldOf(r.w);
          const brief = C.roundBrief(r, figCard, caseCard, labCard);
          const steps = r.steps.map((it, i) => inst(it, { key: 'round:' + r.id + ':' + i, world: w.id }));
          open({ mode: 'round', round: r.id, world: w.id, queue: [brief].concat(steps), total: steps.length });
        },
        speed() {
          const pool = EA.worlds.flatMap(w => staticPool(w, it => it.t === 'tf' || it.t === 'mcq' || it.t === 'fill'));
          const refill = () => shuffle(pool).slice(0, 20).map(x => inst(x.it, { key: x.key, world: x.world }));
          const secs = 60;
          open({ mode: 'speed', timed: true, seconds: secs, endsAt: Date.now() + secs * 1000, queue: refill(), refill });
        },
        active: () => !!P,
        _cur: () => P && !P.finished ? P.queue[P.idx] : null,
        _inst: inst, _spellNorm: spellNorm, _grade: grade, _evalExpr: evalExpr, _sample: sample, _keyToInst: keyToInst
      };
      EA.player = api;
    })();
  };

  /* ======================================================================
     پوسته دوره: مسیرها، نقشه یادگیری، تمرین، لیگ، پروفایل و گواهی
     ====================================================================== */
  ENGINE.shell = function (C) {
    /* پوسته برنامه (مشترک سه دوره): مسیرها، ورود، نقشه یادگیری، تمرین، لیگ، پروفایل و گواهی */
    (function () {
      const EA = window.EA;
      const { sfx, confetti, mascot, buddy, modal, toast, ring, esc, mmss } = EA.ui;
      const fa = (n, d) => EA.fa(n, d);
      const S = () => EA.S.get();
      const $ = (s, r) => (r || document).querySelector(s);
      const T = EA.T;
      const LOC = () => (EA.lang === 'en' ? 'en-US' : 'fa-IR');
      const worldOf = id => EA.worlds.find(w => w.id === id);

      const ICON = {
        learn: '<svg viewBox="0 0 32 32"><path d="M5 15 16 5l11 10v11a2 2 0 0 1-2 2h-6v-8h-6v8H7a2 2 0 0 1-2-2z" fill="#FF9600"/><path d="M3 16 16 4l13 12" stroke="#CC7800" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="13" y="20" width="6" height="8" rx="1" fill="#fff" opacity=".8"/></svg>',
        practice: '<svg viewBox="0 0 32 32"><rect x="3" y="11" width="5" height="10" rx="2" fill="#1CB0F6"/><rect x="24" y="11" width="5" height="10" rx="2" fill="#1CB0F6"/><rect x="7" y="8" width="4" height="16" rx="2" fill="#1899D6"/><rect x="21" y="8" width="4" height="16" rx="2" fill="#1899D6"/><rect x="11" y="14.5" width="10" height="3" rx="1.5" fill="#9AA9B1"/></svg>',
        tools: C.icons.tools,
        league: '<svg viewBox="0 0 32 32"><path d="M9 4h14v7a7 7 0 0 1-14 0z" fill="#FFC800"/><path d="M9 7H5a4 4 0 0 0 4 6M23 7h4a4 4 0 0 1-4 6" stroke="#E5A500" stroke-width="2.5" fill="none"/><rect x="14" y="17" width="4" height="6" fill="#E5A500"/><rect x="9" y="23" width="14" height="5" rx="2" fill="#CE82FF"/></svg>',
        chars: C.icons.chars,
        profile: '<svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="6" fill="#FF4B8B"/><path d="M5 28a11 11 0 0 1 22 0z" fill="#D93A72"/></svg>'
      };
      const NAV = () => [['learn', T('یادگیری', 'Learn')], ['practice', T('تمرین', 'Practice')], ['chars', T('کاراکترها', 'Characters')], ['tools', C.navTools ? C.navTools() : T('ابزارها', 'Tools')], ['league', T('لیگ', 'League')], ['profile', T('پروفایل', 'Profile')]];
      /* نقش کاربر به فارسی ذخیره می‌شود (سازگاری با نسخه‌های قبلی) و با زبان فعلی نمایش داده می‌شود */
      const ROLES = C.obRoles;
      const roleName = r => { const x = ROLES.find(p => p[0] === r || p[1] === r); return x ? T(x[0], x[1]) : (window.ACADEMY && ACADEMY.roleName ? ACADEMY.roleName(r) : r); };
      const GOALS = () => [[20, T('راحت', 'Casual'), T('۵ دقیقه در روز', '5 minutes a day')], [50, T('معمولی', 'Regular'), T('۱۰ دقیقه در روز', '10 minutes a day')], [100, T('جدی', 'Serious'), T('۲۰ دقیقه در روز', '20 minutes a day')], [150, T('دیوانه‌وار', 'Intense'), T('۳۰ دقیقه در روز', '30 minutes a day')]];

      let view = 'learn';
      /** در نمایشگرهای جاسازی‌شده (مثل claude.ai) چاپ و دانلود فایل کار نمی‌کند */
      const EMBED = false;
      const NAME = () => T(C.nameFa, C.nameEn);
      const G = () => EA.gate;
      /* دوره‌های ترمینولوژی: متن دوزبانه و شکل درون کارت‌های دفترچه نکات */
      const BI = x => (C.term && x != null ? EA.bi(x) : x);
      const FG = x => (C.term && EA.ui.figs ? EA.ui.figs(x) : x);

      /* ---------- پوسته ---------- */
      function applyTheme() {
        if (window.ACADEMY && ACADEMY.theme) S().settings.theme = ACADEMY.theme();
        const t = S().settings.theme;
        if (t === 'auto') delete document.documentElement.dataset.theme;
        else document.documentElement.dataset.theme = t;
      }

      function shell() {
        $('#side').innerHTML = `<a class="brand" href="#/learn">${mascot('happy', 'var(--brand)', 34)}<span>${NAME()}</span></a>
          <nav class="snav">${NAV().map(n => `<a href="#/${n[0]}" class="snav__a ${view === n[0] ? 'is-on' : ''}"><i>${ICON[n[0]]}</i><span>${n[1]}</span>${n[0] === 'tools' && !G().tools() ? '<em class="snav__lock">🔒</em>' : ''}</a>`).join('')}</nav>
          ${window.ACADEMY ? ACADEMY.sideHTML(C.id) : ''}`;
        $('#bnav').innerHTML = NAV().map(n => `<a href="#/${n[0]}" class="bnav__a ${view === n[0] ? 'is-on' : ''}" aria-label="${n[1]}"><i>${ICON[n[0]]}</i><span>${n[1]}</span></a>`).join('');
        top(); rail();
      }

      function statsChips() {
        const s = S();
        const w = worldOf((s.profile && s.profile.start) || C.startWorld);
        const todayDone = (s.daily[EA.S.day()] || 0) > 0;
        return `${window.ACADEMY ? ACADEMY.topChips(C.id) : ''}<button class="chip-stat chip-stat--world" data-act="worlds" style="--wc:${w.color}" aria-label="${T('انتخاب دنیا', 'Choose a world')}"><span class="wsym">${w.sym}</span></button>
          <button class="chip-stat ${todayDone ? 'is-fire' : 'is-cold'}" data-act="streak" aria-label="${T('زنجیره روزانه', 'Daily streak')}">🔥 <b>${fa(s.streak)}</b></button>
          <button class="chip-stat is-gem" data-act="shop" aria-label="${T('الماس', 'Gems')}">💎 <b>${fa(s.gems)}</b></button>
          <button class="chip-stat is-heart" data-act="hearts" aria-label="${T('قلب', 'Hearts')}">❤️ <b>${EA.S.noHearts() ? '∞' : fa(s.hearts)}</b></button>
          <button class="chip-stat chip-stat--music ${s.settings.music ? 'is-on' : ''}" data-act="music" aria-label="${T('موسیقی پس‌زمینه', 'Background music')}" aria-pressed="${!!s.settings.music}">${musicIcon()}</button>`;
      }
      /* ---------- موسیقی ---------- */
      function musicIcon() {
        const on = S() && S().settings.music;
        return on ? '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" fill="currentColor"/><circle cx="18" cy="16" r="3" fill="currentColor"/></svg>'
          : '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/><circle cx="6" cy="18" r="3" fill="currentColor" opacity=".45"/><circle cx="18" cy="16" r="3" fill="currentColor" opacity=".45"/><path d="M3 3l18 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';
      }
      function toggleMusic() {
        const st = S().settings;
        st.music = !st.music; EA.S.save();
        EA.audio.syncMusic();
        toast(st.music ? T('🎵 موسیقی آرام روشن شد', '🎵 Calm music on') : T('🔇 موسیقی خاموش شد', '🔇 Music off'));
        document.querySelectorAll('[data-act="music"]').forEach(b => { b.innerHTML = musicIcon(); b.classList.toggle('is-on', st.music); b.setAttribute('aria-pressed', st.music); });
        const sw = document.querySelector('[data-set="music"]'); if (sw) sw.checked = st.music;
      }
      function top() { $('#top').innerHTML = `<div class="top__in">${statsChips()}</div>`; }

      function rail() {
        const s = S(), goal = s.profile.goal, today = s.daily[EA.S.day()] || 0;
        const lv = EA.S.level();
        const table = EA.S.leagueTable();
        const rank = table.findIndex(r => r.me) + 1;
        const tier = EA.S.TIERS[s.league.tier];
        $('#rail').innerHTML = `<div class="rail__stats">${statsChips()}</div>
          <div class="card rcard">
            <div class="rcard__h"><h3>${T('هدف روزانه', 'Daily goal')}</h3><a href="#/profile" class="link">${T('ویرایش', 'Edit')}</a></div>
            <div class="goal">${ring(today / goal, 64, 8, '#FFC800', '⚡')}<div><b>${T(`${fa(Math.min(today, goal))} از ${fa(goal)} امتیاز`, `${fa(Math.min(today, goal))} of ${fa(goal)} XP`)}</b><div class="bar"><i style="width:${Math.min(100, today / goal * 100)}%"></i></div><small>${today >= goal ? T('امروز کامل شد! 🎉', 'Done for today! 🎉') : T('یک درس دیگر تا هدف!', 'One more lesson to reach your goal!')}</small></div></div>
          </div>
          <a class="card rcard rcard--link" href="#/league">
            <div class="rcard__h"><h3>${T(`لیگ ${tier.name}`, `${tier.name} League`)}</h3><span class="link">${T('دیدن لیگ', 'View league')}</span></div>
            <div class="lmini"><span class="medal" style="--mc:${tier.color}">${medal()}</span><div>${T(`رتبه <b>${fa(rank)}</b> از ${fa(table.length)}`, `Rank <b>${fa(rank)}</b> of ${fa(table.length)}`)}<br><small>${T(`${fa(EA.S.weekXp(s.league.week))} امتیاز این هفته`, `${fa(EA.S.weekXp(s.league.week))} XP this week`)}</small></div></div>
          </a>
          <div class="card rcard">
            <div class="rcard__h"><h3>${T('سطح', 'Level')} ${fa(lv.n)} • ${lv.title}</h3></div>
            <div class="bar bar--xp"><i style="width:${lv.pct * 100}%"></i></div>
            <small>${fa(S().xp - lv.cur)} / ${fa(lv.nxt - lv.cur)} ${T('تا سطح بعد', 'to the next level')}</small>
          </div>
          <a class="card rcard rcard--link rcard--buddy" href="#/chars">
            <div class="rcard__h"><h3>${T('کاراکترها', 'Characters')}</h3><span class="link">${T('کلکسیون', 'Collection')}</span></div>
            <div class="lmini">${buddy('happy', 54, 'var(--brand)')}<div>${T(`<b>${fa(Object.keys(s.chars || {}).length)} از ${fa(EA.chars.list.length)}</b> جمع کرده‌ای`, `<b>${fa(Object.keys(s.chars || {}).length)} of ${fa(EA.chars.list.length)}</b> collected`)}<br><small>${T('هر سطح که تمام شود، یک کاراکتر تازه', 'A new character for every level you finish')}</small></div></div>
          </a>
          <div class="card rcard rcard--tip tip" title="${T('نکته بعدی', 'Next tip')}">${mascot('happy', '#1CB0F6', 54)}<div class="tip__body"></div></div>`;
        EA.tips.mount($('#rail .tip'), 10000);
      }

      function medal() { return '<svg viewBox="0 0 40 44" width="40" height="44"><path d="M20 2 36 10v14c0 9-7 15-16 18C11 39 4 33 4 24V10z" fill="var(--mc)"/><path d="M20 2 36 10v14c0 9-7 15-16 18z" fill="#000" opacity=".12"/><path d="m20 13 3 6 6.5.8-4.8 4.5 1.3 6.5L20 27.6 14 30.8l1.3-6.5-4.8-4.5L17 19z" fill="#fff" opacity=".92"/></svg>'; }

      /* ---------- نقشه یادگیری ---------- */

      /* ---------- شخصیت دوره در پیچ‌وتاب مسیر: کتاب می‌خواند، فکر می‌کند، دست تکان می‌دهد، چرت می‌زند، جشن می‌گیرد ---------- */
      const ACTS = () => [
        { k: 'read', m: 'happy', p: '📖', b: T('درس می‌خونم!', 'Studying!') },
        { k: 'think', m: 'think', p: '💭', b: T('هوم…', 'Hmm…') },
        { k: 'wave', m: 'cheer', p: '👋', b: T('سلام!', 'Hi!') },
        { k: 'sleep', m: 'happy', p: '💤', b: '' },
        { k: 'party', m: 'cheer', p: '🎉', b: T('ایول!', 'Yay!') },
        { k: 'doc', m: 'happy', p: '⚕️', b: T('کشیکم!', 'On call!') },
        { k: 'coffee', m: 'happy', p: '☕', b: T('یه چای!', 'Tea break!') },
        { k: 'star', m: 'wow', p: '⭐', b: T('وای!', 'Wow!') },
        { k: 'love', m: 'cheer', p: '💖', b: '' },
        { k: 'flag', m: 'happy', p: '🚩', b: T('ادامه بده!', 'Keep going!') }
      ];
      function actor(seed, off) {
        const L = ACTS(), a = L[Math.abs(seed) % L.length];
        return `<div class="path__act path__act--${a.k} ${off >= 0 ? 'is-l' : 'is-r'}" aria-hidden="true"><div class="path__actm">${mascot(a.m, 'var(--brand)', 62)}</div><span class="path__prop">${a.p}</span>${a.b ? `<span class="path__bub">${a.b}</span>` : ''}</div>`;
      }
      const OFF = [0, 46, 70, 46, 0, -46, -70, -46];
      const chestId = (w, lv) => w.id + (lv === 0 ? '-c' : '-c' + (lv + 1));
      function levelBanner(w, lv) {
        const s = S(), c = EA.chars.forLevel(w.id, lv), got = s.chars && s.chars[c.id];
        const ls = EA.chars.levelLessons(w, lv), done = ls.filter(l => s.done[l.id]).length;
        return `<div class="lvlb ${got ? 'is-got' : ''} ${done === ls.length ? 'is-done' : ''}">
          <button class="lvlb__c" data-act="char" data-id="${c.id}" aria-label="${got ? c.name : T('کاراکتر قفل', 'Locked character')}">${EA.chars.draw(c, 'happy', 44, !got)}${got ? '' : '<span class="lvlb__q">?</span>'}</button>
          <div class="lvlb__t"><small>${T(`سطح ${fa(lv + 1)} از ${fa(w.levels.length)}`, `Level ${fa(lv + 1)} of ${fa(w.levels.length)}`)}</small><b>${w.levels[lv]}</b></div>
          <span class="lvlb__n">${done === ls.length ? '✓' : fa(done) + '/' + fa(ls.length)}</span>
        </div>`;
      }
      function pathNodes(w, wi) {
        const s = S(), per = EA.PER_LEVEL;
        const nodes = [];
        w.lessons.forEach((l, i) => {
          const lv = Math.floor(i / per);
          if (i % per === 0) nodes.push({ type: 'level', lv });
          nodes.push({ type: 'lesson', l, i, lv, state: EA.S.lessonState(w, i) });
          if (i % per === per - 1 && lv < w.levels.length - 1) {
            const id = chestId(w, lv);
            nodes.push({ type: 'chest', id, state: s.chests[id] ? 'done' : s.done[l.id] ? 'open' : 'locked' });
          }
        });
        nodes.push({ type: 'check', state: s.checkpoints[w.id] && s.checkpoints[w.id].passed ? 'done' : EA.S.worldDone(w) ? 'open' : 'locked' });
        const firstOpen = nodes.findIndex(n => n.type !== 'level' && n.state === 'open');
        const started = w.lessons.some(l => s.done[l.id]);
        let k2 = 0;
        return nodes.map((n, k) => {
          if (n.type === 'level') return levelBanner(w, n.lv);
          const off = OFF[(k2++ + wi * 3) % OFF.length];
          const isCur = k === firstOpen;
          let inner = '', cls = 'node node--' + n.type + ' is-' + n.state + (isCur ? ' is-cur' : ''), data = '';
          const pay = n.type === 'lesson' ? !G().lesson(w, n.i) : n.type === 'check' ? !G().final() : false;
          if (pay) cls += ' is-pay';
          if (n.type === 'lesson') {
            const st = s.done[n.l.id];
            inner = n.state === 'locked' || (pay && n.state !== 'done') ? '<span class="node__i">🔒</span>' : `<span class="node__i">${n.state === 'done' ? '★' : n.l.icon}</span>`;
            if (pay) inner += '<span class="node__pay" aria-hidden="true">👑</span>';
            data = `data-act="node" data-w="${w.id}" data-l="${n.l.id}"`;
            if (st) inner += `<span class="node__stars">${[1, 2, 3].map(x => `<i class="${x <= st.stars ? 'on' : ''}">★</i>`).join('')}</span>`;
          } else if (n.type === 'chest') {
            inner = `<span class="node__i">${n.state === 'done' ? '📭' : '🎁'}</span>`;
            data = `data-act="chest" data-id="${n.id}"`;
          } else {
            inner = `<span class="node__i">${n.state === 'done' ? '🏆' : '🏁'}</span>`;
            data = `data-act="checkpoint" data-w="${w.id}"`;
          }
          const bubble = isCur ? `<span class="node__go">${n.type === 'lesson' && !started ? T('شروع', 'Start') : n.type === 'chest' ? T('باز کن!', 'Open!') : n.type === 'check' ? T('آزمون!', 'Test!') : T('بعدی', 'Next')}</span>` : '';
          const ringHtml = isCur && n.type === 'lesson' ? `<span class="node__ring">${ring(0.001, 96, 8, 'var(--wc)')}</span>` : '';
          let deco = '';
          if (n.type === 'lesson' && n.i % per === 1) {
            const c = EA.chars.forLevel(w.id, n.lv), got = s.chars && s.chars[c.id];
            deco = `<div class="path__mascot" style="--x:${off > 0 ? -1 : 1}">${EA.chars.draw(c, got ? 'cheer' : 'happy', 80, !got)}${got ? '' : '<span class="path__q">?</span>'}</div>`;
          } else if ((n.type === 'lesson' && n.i % per === 2) || n.type === 'check') deco = actor(wi * 5 + (n.i || 0) + (n.type === 'check' ? 3 : 0), off);
          return `<div class="pnode" style="--off:${off}px">${deco}<button class="${cls}" ${data} aria-label="${n.type === 'lesson' ? n.l.title : n.type === 'chest' ? T('صندوق جایزه', 'Reward chest') : T('آزمون مرحله', 'Checkpoint')}">${ringHtml}${inner}${bubble}</button></div>`;
        }).join('');
      }

      function learnView() {
        const s = S();
        const fin = EA.S.finalUnlocked() && G().final();
        const finPay = !G().final();
        return `<div class="learn-v">
          <div class="tip tip--strip" role="button" tabindex="0" title="${T('نکته بعدی', 'Next tip')}"><div class="tip__body"></div></div>
          <div class="wjump">${EA.worlds.map(w => `<button class="wjump__b" data-act="jump" data-w="${w.id}" style="--wc:${w.color};--wd:${w.dark}"><span class="wsym">${w.sym}</span><span class="wjump__p">${ring(EA.S.worldProgress(w), 22, 4, w.color)}</span></button>`).join('')}</div>
          ${EA.worlds.map((w, wi) => `
            <section class="unit" id="u-${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}">
              <div class="unit__b">
                <div class="unit__txt"><small>${T('دنیای', 'World')} ${fa(wi + 1)} • <bdi>${w.sym}</bdi></small><h2>${w.name}</h2><p>${w.sub}</p></div>
                <button class="unit__guide" data-act="guide" data-w="${w.id}"><span>📖</span> ${T('نکات', 'Guide')}</button>
              </div>
              <div class="path">${pathNodes(w, wi)}</div>
            </section>`).join('')}
          <section class="final ${fin ? 'is-open' : ''} ${s.final && s.final.passed ? 'is-done' : ''}">
            <div class="final__icon">${s.final && s.final.passed ? '🎓' : fin ? '🏆' : '🔒'}</div>
            <h2>${T('امتحان نهایی', 'Final exam')}</h2>
            <p>${finPay ? T('🔒 امتحان نهایی و گواهی‌نامه با پلن آموزشی یا Pro باز می‌شود.', '🔒 The final exam and certificate unlock with the Standard or Pro plan.') : fin ? T(`${fa(EA.worlds.length * EA.exam.final.perWorld)} سؤال از هر پنج دنیا، ${fa(EA.exam.final.minutes)} دقیقه. با ${fa(EA.exam.final.pass * 100)}٪ قبول می‌شوی و گواهی می‌گیری.`, `${fa(EA.worlds.length * EA.exam.final.perWorld)} questions from all five worlds, ${fa(EA.exam.final.minutes)} minutes. Score ${fa(EA.exam.final.pass * 100)}% to pass and earn your certificate.`) : T('آزمون مرحله هر پنج دنیا را قبول شو تا امتحان نهایی باز شود.', 'Pass the checkpoint of all five worlds to unlock the final exam.')}</p>
            <div class="final__w">${EA.worlds.map(w => `<span class="final__dot ${s.checkpoints[w.id] && s.checkpoints[w.id].passed ? 'on' : ''}" style="--wc:${w.color}">${w.sym}</span>`).join('')}</div>
            ${finPay ? `<button class="btn btn--gold btn--lg" data-ac="upsell" data-why="final">👑 ${T('ارتقای اشتراک', 'Upgrade')}</button>` : ''}
            ${fin ? `<button class="btn btn--gold btn--lg" data-act="final">${s.final && s.final.passed ? T('دوباره امتحان بده', 'Retake the exam') : T('شروع امتحان نهایی', 'Start the final exam')}</button>` : ''}
            ${s.final && s.final.passed ? `<button class="btn btn--ghost" data-act="cert">${T('دیدن گواهی‌نامه', 'View certificate')}</button>` : ''}
          </section>
        </div>`;
      }

      function nodePop(btn) {
        document.querySelectorAll('.pop').forEach(p => p.remove());
        const w = worldOf(btn.dataset.w);
        const i = w.lessons.findIndex(l => l.id === btn.dataset.l);
        const l = w.lessons[i], st = EA.S.lessonState(w, i);
        const pay = !G().lesson(w, i);
        const n = l.items.filter(x => x.t !== 'learn').length;
        const pop = document.createElement('div');
        pop.className = 'pop pop--' + st;
        pop.style.setProperty('--wc', w.color); pop.style.setProperty('--wd', w.dark);
        const lv = Math.floor(i / EA.PER_LEVEL);
        pop.innerHTML = `<small class="pop__k">${T('سطح', 'Level')} ${fa(lv + 1)} • ${w.levels[lv]}</small><h4>${l.title}</h4><p>${T(`درس ${fa(i % EA.PER_LEVEL + 1)} از ${fa(EA.PER_LEVEL)} این سطح • ${fa(n)} سؤال`, `Lesson ${fa(i % EA.PER_LEVEL + 1)} of ${fa(EA.PER_LEVEL)} in this level • ${fa(n)} questions`)}</p>
          ${pay ? `<p class="pop__pay">👑 ${T('🔒 با پلن آموزشی یا Pro همه درس‌ها باز می‌شوند.', '🔒 The Standard or Pro plan unlocks every lesson.')}</p><button class="btn btn--white btn--block" data-ac="upsell" data-why="lesson">🔓 ${T('باز کردن قفل', 'Unlock')}</button>`
            : st === 'locked' ? `<button class="btn btn--block" disabled>${T('اول درس قبلی را تمام کن', 'Finish the previous lesson first')}</button>`
            : `<button class="btn btn--white btn--block" data-act="start" data-w="${w.id}" data-l="${l.id}">${st === 'done' ? T(`تکرار +${fa(10)} امتیاز`, `Practice again +${fa(10)} XP`) : T(`شروع +${fa(15)} امتیاز`, `Start +${fa(15)} XP`)}</button>`}`;
        btn.parentNode.appendChild(pop);
        requestAnimationFrame(() => pop.classList.add('is-in'));
        sfx('tap');
      }

      function openChest(id) {
        const s = S();
        const [wid, suf] = id.split('-');
        const w = worldOf(wid);
        const lvEnd = (suf === 'c' ? 1 : +suf.slice(1)) * EA.PER_LEVEL - 1;
        if (s.chests[id]) return toast(T('این صندوق را قبلاً باز کرده‌ای 📭', 'You already opened this chest 📭'));
        if (!s.done[w.lessons[lvEnd].id]) return toast(T('اول درس‌های این سطح را تمام کن 🔒', 'Finish this level’s lessons first 🔒'));
        const ecg = (window.ACADEMY && ACADEMY.CFG) || {}, cg = ecg.CHEST_GEMS || [5, 10];
        const pro = !!(window.ACADEMY && ACADEMY.access(C.id).tier >= 2), bonus = pro ? (ecg.VIP_CHEST_GEMS || 15) : 0;
        const g = cg[0] + Math.floor(Math.random() * (cg[1] - cg[0] + 1)) + bonus;
        s.chests[id] = g; s.gems += g; EA.S.save();
        sfx('chest'); confetti(90);
        modal(`<div class="chest-open">🎁</div><h3>${T('صندوق باز شد!', 'Chest opened!')}</h3><p class="big">+${fa(g)} 💎</p>${bonus ? `<p class="muted">${T(`شامل ${fa(bonus)} الماس ویژه Pro/VIP 👑`, `Includes ${fa(bonus)} Pro/VIP bonus gems 👑`)}</p>` : `<p class="muted">${T('اعضای Pro و VIP از هر صندوق الماس ویژه هم می‌گیرند 👑', 'Pro and VIP members get bonus gems from every chest 👑')}</p>`}<div class="modal__btns"><button class="btn btn--brand btn--lg" data-close>${T('عالیه!', 'Awesome!')}</button></div>`, { onClose: refresh });
      }

      function guide(wid) {
        if (!G().guide()) return G().upsell('guide');
        const w = worldOf(wid);
        const cards = w.lessons.flatMap(l => l.items.filter(x => x.t === 'learn').map(x => ({ l, x })));
        modal(`<div class="guide" style="--wc:${w.color};--wl:${w.light}">
            <header class="guide__h"><span class="wsym">${w.sym}</span><div><h3>${T(`دفترچه نکات ${w.name}`, `${w.name} guidebook`)}</h3><small>${T(`${fa(cards.length)} نکته کلیدی`, `${fa(cards.length)} key ideas`)}</small></div><button class="iconbtn no-print" data-ac="printguide" title="${T('چاپ برگه مرجع جیبی (A4)', 'Print pocket reference (A4)')}" aria-label="${T('چاپ', 'Print')}">🖨️</button><button class="iconbtn no-print" data-close aria-label="${T('بستن', 'Close')}">✕</button></header>
            <div class="guide__b">${w.lessons.map(l => `<h4>${l.icon} ${l.title}</h4>${l.items.filter(x => x.t === 'learn').map(x => `<article class="gcard"><h5>${BI(x.title)}</h5><div>${FG(BI(x.body))}</div></article>`).join('')}`).join('')}</div>
          </div>`, { cls: 'modal--sheet' });
      }

      /* ---------- تمرین ---------- */
      function practiceView() {
        const s = S();
        const nm = s.mistakes.length;
        const PR = C.practice({ s, worldOf });
        const lock = why => `<div class="paylock"><span>🔒</span><p>${T('با پلن آموزشی یا Pro باز می‌شود.', 'Unlocks with Standard or Pro.')}</p><button class="btn btn--gold btn--sm" data-ac="upsell" data-why="${why}">👑 ${T('ارتقا', 'Upgrade')}</button></div>`;
        return `<section class="prac">
          <header class="vhead"><h1>${T('تمرین', 'Practice')}</h1><p>${T('با تمرین، قلب از دست رفته برمی‌گردد و نکته‌ها در ذهنت می‌مانند.', 'Practice brings back lost hearts and makes what you learn stick.')}</p></header>
          <div class="pgrid">
            <article class="pcard pcard--red">
              <div class="pcard__i">🩹</div><h3>${T('مرور اشتباه‌ها', 'Review mistakes')}</h3>
              <p>${nm ? T(`${fa(nm)} سؤال که قبلاً اشتباه جواب دادی.`, `${fa(nm)} questions you got wrong before.`) : T('اشتباهی نداری! سؤال‌های درس‌های گذرانده را مرور کن.', 'No mistakes to review! Revisit questions from completed lessons.')}</p>
              ${nm ? `<button class="btn btn--ghost btn--block" data-act="clinic">🩺 ${T(`کلینیک خطاها (${fa(nm)})`, `Mistake clinic (${fa(nm)})`)}</button>` : ''}
              <button class="btn btn--red btn--block" data-act="practice">${T('شروع مرور', 'Start review')} ${EA.S.noHearts() ? '' : `(+${fa(1)} ❤️)`}</button>
            </article>
            <article class="pcard pcard--blue">
              ${PR.calc}
              ${G().calc() ? `<div class="wpick">${EA.worlds.map(w => `<button class="wpick__b" data-act="calc" data-w="${w.id}" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</button>`).join('')}<button class="wpick__b wpick__b--all" data-act="calc" data-w="">${T('همه', 'All')}</button></div>` : lock('calc')}
            </article>
            ${PR.extra ? PR.extra(G) : ''}
            <article class="pcard pcard--wide pcard--round">
              <div class="pcard__i">🏥</div><h3>${C.term ? T('راند بالینی', 'Clinical rounds') : T('راند بیمارستان', 'Hospital rounds')}</h3>
              ${G().rounds() ? PR.rounds : lock('rounds')}
            </article>
            <article class="pcard pcard--gold">
              <div class="pcard__i">⚡</div><h3>${T('چالش سرعت', 'Speed challenge')}</h3>
              <p>${T(`${fa(60)} ثانیه، هرچه بیشتر جواب درست! رکورد تو:`, `${fa(60)} seconds, as many correct answers as you can! Your best:`)} <b>${fa(s.stats.bestSpeed)}</b></p>
              <button class="btn btn--gold btn--block" data-act="speed">${T('بزن بریم!', 'Let’s go!')}</button>
            </article>
            <article class="pcard pcard--green">
              <div class="pcard__i">📖</div><h3>${T('دفترچه نکات', 'Guidebook')}</h3>
              ${PR.guide}
              ${G().guide() ? '' : lock('guide')}<div class="wpick" ${G().guide() ? '' : 'hidden'}>${EA.worlds.map(w => `<button class="wpick__b" data-act="guide" data-w="${w.id}" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</button>`).join('')}</div>
            </article>
          </div>
        </section>`;
      }

      /* ---------- لیگ ---------- */
      function leagueView() {
        const s = S();
        const tier = EA.S.TIERS[s.league.tier];
        const { UP, DOWN, GROUP } = EA.S.LEAGUE;
        const table = EA.S.leagueTable();
        const moves = EA.S.leagueMoves(table);
        const end = new Date(s.league.week + 'T00:00'); end.setDate(end.getDate() + 7);
        const left = end - Date.now();
        const days = Math.floor(left / 864e5), hours = Math.floor(left % 864e5 / 36e5);
        const myI = table.findIndex(r => r.me), me = table[myI];
        const gap = myI >= UP ? table[UP - 1].xp - me.xp + 1 : 0;
        const top = s.league.tier === EA.S.TIERS.length - 1;
        const goalLine = top && myI < UP ? T('در صدر بالاترین لیگ هستی؛ جایگاهت را حفظ کن!', 'You’re at the top of the highest league; hold your spot!')
          : myI < UP ? T(`در منطقه صعودی! ${top ? '' : 'این جایگاه را تا پایان هفته نگه دار.'}`, `You’re in the promotion zone! ${top ? '' : 'Hold this spot until the week ends.'}`)
            : T(`${fa(gap)} امتیاز تا منطقه صعود فاصله داری؛ یک درس کافی است!`, `You’re ${fa(gap)} XP from the promotion zone; one lesson will do it!`);
        return `<section class="league">
          <div class="tiers">${EA.S.TIERS.map((t, i) => `<span class="medal ${i === s.league.tier ? 'is-cur' : i > s.league.tier ? 'is-lock' : ''}" style="--mc:${i > s.league.tier ? 'var(--line)' : t.color}" title="${t.name}">${medal()}</span>`).join('')}</div>
          <header class="vhead vhead--c"><h1>${T(`لیگ ${tier.name}`, `${tier.name} League`)}</h1><p>${T(`${fa(GROUP)} نفر در این گروه • ${fa(UP)} نفر اول صعود می‌کنند • ${fa(days)} روز و ${fa(hours)} ساعت مانده`, `${fa(GROUP)} players in this group • top ${fa(UP)} are promoted • ${fa(days)} days ${fa(hours)} hours left`)}</p></header>
          <div class="lgoal ${myI < UP ? 'is-up' : ''}"><span class="lgoal__r">${fa(myI + 1)}</span><div><b>${T('رتبه تو در این هفته', 'Your rank this week')}</b><small>${goalLine}</small></div><a href="#/learn" class="btn btn--brand btn--sm">${T('یک درس دیگر', 'One more lesson')}</a></div>
          ${(() => { const mv = moves[myI]; if (!(mv < 0)) return ''; const by = table.filter((r, i) => i < myI && moves[i] > 0 && !r.me).map(r => r.name); const prevRank = myI + 1 + mv; return `<div class="lalert"><b>⚠️ ${by.length ? esc(by.slice(0, 2).join(T('، ', ', '))) + T(' از تو جلو زد', ' overtook you') : T('رتبه‌ات پایین آمد', 'You dropped')}!</b><small>${T(`رتبه ${fa(prevRank)} ← ${fa(myI + 1)}؛ یک درس کوتاه تا پس گرفتن جایگاهت.`, `Rank ${fa(prevRank)} → ${fa(myI + 1)}; one short lesson to win it back.`)}</small><a href="#/learn" class="btn btn--brand btn--sm">⚡ ${T('پس بگیر', 'Win it back')}</a></div>`; })()}
          <ol class="ltable">${table.map((r, i) => {
            const zone = i === UP ? `<li class="lzone lzone--up">⬆ ${T('منطقه صعود', 'Promotion zone')}</li>` : i === GROUP - DOWN && s.league.tier > 0 ? `<li class="lzone lzone--down">⬇ ${T('منطقه سقوط', 'Demotion zone')}</li>` : '';
            const init = esc(r.name.trim()[0] || '?');
            const mv = moves[i];
            return `${zone}<li class="lrow ${r.me ? 'is-me' : ''} ${i < UP ? 'is-up' : ''}">
              <span class="lrow__n ${i < 3 ? 'top' + (i + 1) : ''}">${i < 3 ? ['🥇', '🥈', '🥉'][i] : fa(i + 1)}</span>
              ${r.me ? avatar() : `<span class="avatar" style="--h:${r.hue}">${init}</span>`}
              <span class="lrow__nm"><b>${esc(r.name)}${r.live ? `<i class="lrow__live" title="${T('همین حالا در حال تمرین', 'Practicing right now')}"></i>` : ''}</b><small>${r.live ? T('🟢 در حال تمرین • ', '🟢 practicing • ') : ''}${esc(r.tag)}</small></span>
              <span class="lrow__mv ${mv > 0 ? 'up' : mv < 0 ? 'down' : ''}">${mv > 0 ? '▲' + fa(mv) : mv < 0 ? '▼' + fa(-mv) : ''}</span>
              <span class="lrow__xp">${fa(r.xp)}<small> ${T('امتیاز', 'XP')}</small></span>
            </li>`;
          }).join('')}</ol>
        </section>`;
      }

      /* ---------- کاراکترها ---------- */
      function charsView() {
        const s = S(), got = Object.keys(s.chars || {}).length, total = EA.chars.list.length;
        return `<section class="chars-v">
          <header class="vhead"><h1>${T('کاراکترها', 'Characters')}</h1><p>${T('هر سطح هر دنیا را که تمام کنی، یک کاراکتر تازه به کلکسیونت اضافه می‌شود. هر کدام را می‌توانی همراه خودت در درس‌ها کنی.', 'Every level you finish adds a new character to your collection. Any of them can join you as your lesson companion.')}</p></header>
          <div class="coll"><div class="coll__b">${buddy('cheer', 64, 'var(--brand)')}</div><div class="coll__t"><b>${T(`${fa(got)} از ${fa(total)} کاراکتر`, `${fa(got)} of ${fa(total)} characters`)}</b><div class="bar bar--xp"><i style="width:${got / total * 100}%"></i></div><small>${T('همراه فعلی:', 'Current companion:')} ${s.companion && s.chars[s.companion] ? EA.chars.byId(s.companion).name : NAME()}</small></div></div>
          ${EA.worlds.map(w => `<h2 class="sh sh--w"><span class="wsym" style="--wc:${w.color};--wd:${w.dark}">${w.sym}</span><span>${w.name}</span></h2>
            <div class="cgrid">${w.levels.map((lvName, lv) => {
              const c = EA.chars.forLevel(w.id, lv), has = s.chars && s.chars[c.id], me = s.companion === c.id;
              return `<button class="ccard ${has ? 'is-got' : ''} ${me ? 'is-buddy' : ''}" data-act="char" data-id="${c.id}" style="--wc:${w.color}">
                <span class="ccard__art">${EA.chars.draw(c, 'happy', 80, !has)}${has ? '' : '<span class="ccard__q">?</span>'}</span>
                <b>${has ? c.name : T('؟؟؟', '???')}</b><small>${T('سطح', 'Level')} ${fa(lv + 1)} • ${lvName}</small>${me ? `<span class="ccard__tag">${T('همراه', 'Companion')}</span>` : ''}
              </button>`;
            }).join('')}</div>`).join('')}
        </section>`;
      }
      function charModal(id) {
        const c = EA.chars.byId(id), w = worldOf(c.w), s = S(), has = s.chars && s.chars[c.id];
        const m = modal(`<div class="cmodal" style="--wc:${w.color}">
            <div class="cel__stage">${has ? '<div class="cel__rays"></div>' : ''}${EA.chars.draw(c, has ? 'cheer' : 'happy', 140, !has)}</div>
            <small class="cel__k">${T(`دنیای ${w.name} • سطح ${fa(c.lv + 1)}: ${w.levels[c.lv]}`, `${w.name} world • Level ${fa(c.lv + 1)}: ${w.levels[c.lv]}`)}</small>
            <h3>${has ? c.name : T('این کاراکتر هنوز قفل است', 'This character is still locked')}</h3>
            ${has ? `<p class="cel__title">${c.title}</p><p>${c.bio}</p>` : `<p>${T(`سه درس سطح «${w.levels[c.lv]}» از دنیای ${w.name} را تمام کن تا این کاراکتر باز شود.`, `Finish the three lessons of the “${w.levels[c.lv]}” level in the ${w.name} world to unlock this character.`)}</p>`}
          </div>
          <div class="modal__btns">${has ? (s.companion === c.id ? `<button class="btn btn--ghost" data-unbuddy>${T(`${C.nameFa} دوباره همراهم شود`, `Make ${C.nameEn} my companion again`)}</button>` : `<button class="btn btn--brand btn--lg" data-buddy>${T('همراه من شو', 'Be my companion')}</button>`) : `<button class="btn btn--wc btn--lg" style="--wc:${w.color};--wd:${w.dark}" data-goto>${T('برو به این سطح', 'Go to this level')}</button>`}<button class="btn btn--ghost" data-close>${T('بستن', 'Close')}</button></div>`);
        const b = m.el.querySelector('[data-buddy]'), u = m.el.querySelector('[data-unbuddy]'), g = m.el.querySelector('[data-goto]');
        if (b) b.onclick = () => { s.companion = c.id; EA.S.save(); sfx('combo'); toast(T(`${c.name} همراهت شد!`, `${c.name} is now your companion!`)); m.close(); refresh(); };
        if (u) u.onclick = () => { s.companion = null; EA.S.save(); m.close(); refresh(); };
        if (g) g.onclick = () => { m.close(); go('learn'); setTimeout(() => jump(w.id), 80); };
        sfx('tap');
      }
      function newCharsModal(list) {
        if (!list.length) return;
        modal(`<h3>${T('کاراکترهای تازه‌ات رسیدند!', 'Your new characters are here!')}</h3><p>${T('برای سطح‌هایی که قبلاً تمام کرده بودی:', 'For the levels you had already finished:')}</p>
          <div class="cgrid cgrid--m">${list.map(c => `<div class="ccard is-got" style="--wc:${worldOf(c.w).color}"><span class="ccard__art">${EA.chars.draw(c, 'cheer', 70)}</span><b>${c.name}</b><small>${c.title}</small></div>`).join('')}</div>
          <div class="modal__btns"><button class="btn btn--brand btn--lg" data-close>${T('عالیه!', 'Awesome!')}</button></div>`);
        confetti(100); sfx('chest');
      }

      /* ---------- عکس پروفایل ---------- */
      function avatar(cls) {
        const p = S().profile;
        return p.photo ? `<span class="avatar ${cls || ''}"><img src="${p.photo}" alt="" draggable="false"></span>`
          : `<span class="avatar ${cls || ''}" style="--h:100">${esc(p.name.trim()[0] || '?')}</span>`;
      }
      /** عکس را برش مربعی و کوچک می‌کند تا در حافظه مرورگر جا شود */
      function readPhoto(file) {
        return new Promise((res, rej) => {
          if (!file || !/^image\//.test(file.type)) return rej(new Error('type'));
          const url = URL.createObjectURL(file), img = new Image();
          img.onload = () => {
            const N = 256, c = document.createElement('canvas'), m = Math.min(img.naturalWidth, img.naturalHeight);
            c.width = c.height = N;
            c.getContext('2d').drawImage(img, (img.naturalWidth - m) / 2, (img.naturalHeight - m) / 2, m, m, 0, 0, N, N);
            URL.revokeObjectURL(url);
            res(c.toDataURL('image/jpeg', 0.85));
          };
          img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('load')); };
          img.src = url;
        });
      }

      /* ---------- پروفایل ---------- */
      function profileView() {
        const s = S(), lv = EA.S.level(), st = s.stats;
        const acc = st.correct + st.wrong ? Math.round(st.correct / (st.correct + st.wrong) * 100) : 0;
        const joined = s.profile.joined ? new Intl.DateTimeFormat(LOC(), { dateStyle: 'long' }).format(new Date(s.profile.joined)) : '';
        const tiles = [['🔥', fa(s.streak), T('زنجیره فعلی', 'Current streak')], ['⚡', fa(s.xp), T('کل امتیاز', 'Total XP')], ['📚', fa(Object.keys(s.done).length) + ' / ' + fa(EA.worlds.reduce((a, w) => a + w.lessons.length, 0)), T('درس', 'Lessons')], ['🎯', fa(acc) + T('٪', '%'), T('دقت', 'Accuracy')], ['🏆', fa(Object.values(s.checkpoints).filter(x => x.passed).length) + ' / ' + fa(5), T('دنیای فتح‌شده', 'Worlds conquered')], ['🧮', fa(st.calcs), T('محاسبه درست', 'Correct calculations')], ['🌋', fa(s.bestStreak), T('بهترین زنجیره', 'Best streak')], ['🧸', fa(Object.keys(s.chars || {}).length) + ' / ' + fa(EA.chars.list.length), T('کاراکتر', 'Characters')]];
        return `<section class="prof">
          <header class="phead">
            <div class="phead__av">
              <label class="avpick" for="ph-in" title="${T('تغییر عکس پروفایل', 'Change profile photo')}">${avatar('avatar--xl')}<span class="avpick__cam" aria-hidden="true">📷</span></label>
              <input type="file" id="ph-in" accept="image/*" data-photo hidden>
              ${s.profile.photo ? `<button class="link link--btn" data-act="rmphoto">${T('حذف عکس', 'Remove photo')}</button>` : `<label class="link link--btn" for="ph-in">${T('افزودن عکس', 'Add a photo')}</label>`}
            </div>
            <div><h1>${esc(s.profile.name)} ${window.ACADEMY ? ACADEMY.vipBadge() : ''}</h1><p>${esc(roleName(s.profile.role))} • ${T('عضو از', 'Member since')} ${joined}</p>
              <div class="lvl"><b>${T('سطح', 'Level')} ${fa(lv.n)} • ${lv.title}</b><div class="bar bar--xp"><i style="width:${lv.pct * 100}%"></i></div></div></div>
          </header>
          ${window.ACADEMY ? ACADEMY.profileHTML(C.id) : ''}
          <h2 class="sh">${T('آمار', 'Stats')}</h2>
          <div class="stats">${tiles.map(t => `<div class="stat"><span>${t[0]}</span><b>${t[1]}</b><small>${t[2]}</small></div>`).join('')}</div>
          ${s.final && s.final.passed ? `<button class="certbar" data-act="cert">🎓 ${T(`گواهی‌نامه پایان دوره — نمره ${fa(Math.round(s.final.score * 100))}٪`, `Course certificate — score ${fa(Math.round(s.final.score * 100))}%`)} <span>${T('دیدن و چاپ ←', 'View and print →')}</span></button>` : ''}
          <h2 class="sh">${T('نشان‌ها', 'Badges')} <small>${T(`${fa(Object.keys(s.badges).length)} از ${fa(EA.S.BADGES.length)}`, `${fa(Object.keys(s.badges).length)} of ${fa(EA.S.BADGES.length)}`)}</small></h2>
          <div class="badges">${EA.S.BADGES.map(b => `<div class="badge ${s.badges[b.id] ? 'on' : ''}" title="${b.desc}"><span>${b.icon}</span><b>${b.name}</b><small>${b.desc}</small></div>`).join('')}</div>
          <h2 class="sh">${T('فروشگاه', 'Shop')}</h2>
          <div class="shop">
            <div class="shop__i"><span>❤️</span><div><b>${T('پر کردن قلب‌ها', 'Refill hearts')}</b><small>${T('همه قلب‌ها برمی‌گردند', 'All your hearts come back')}</small></div><button class="btn btn--blue" data-act="buy" data-item="hearts" ${s.hearts >= EA.S.MAX_HEARTS || s.gems < ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150) ? 'disabled' : ''}>${fa(((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150))} 💎</button></div>
            <div class="shop__i"><span>🧊</span><div><b>${T('یخ‌زدگی زنجیره', 'Streak freeze')}</b><small>${T(`یک روز غیبت، زنجیره نمی‌شکند • داری: ${fa(s.freeze)}`, `Miss a day without losing your streak • you have ${fa(s.freeze)}`)}</small></div><button class="btn btn--blue" data-act="buy" data-item="freeze" ${s.freeze >= 2 || s.gems < 200 ? 'disabled' : ''}>${fa(200)} 💎</button></div>
          </div>
          <h2 class="sh">${T('تنظیمات', 'Settings')}</h2>
          <div class="settings">
            <label class="set"><span>🎵 ${T('موسیقی پس‌زمینه', 'Background music')} <small>${T('آرام و بی‌کلام، برای تمرکز', 'Calm and wordless, for focus')}</small></span><input type="checkbox" class="sw" data-set="music" ${s.settings.music ? 'checked' : ''}></label>
            <label class="set set--col"><span>${T('بلندی موسیقی', 'Music volume')}</span><input type="range" class="range" min="0" max="1" step="0.05" value="${s.settings.musicVol == null ? 0.4 : s.settings.musicVol}" data-vol="musicVol" aria-label="${T('بلندی موسیقی', 'Music volume')}"></label>
            <label class="set"><span>🔊 ${T('افکت‌های صوتی', 'Sound effects')}</span><input type="checkbox" class="sw" data-set="sound" ${s.settings.sound ? 'checked' : ''}></label>
            <label class="set set--col"><span>${T('بلندی افکت‌ها', 'Effects volume')}</span><input type="range" class="range" min="0" max="1" step="0.05" value="${s.settings.sfxVol == null ? 0.8 : s.settings.sfxVol}" data-vol="sfxVol" aria-label="${T('بلندی افکت‌ها', 'Effects volume')}"></label>
            <div class="set"><span>♾️ ${T('قلب بی‌نهایت', 'Unlimited hearts')} <small>${EA.S.noHearts() ? T('فعال در پلن Pro', 'Active with Pro') : T('🔒 Pro', '🔒 Pro')}</small></span>${EA.S.noHearts() ? '<b class="okchip">∞ ❤️</b>' : `<button class="btn btn--gold btn--sm" data-ac="upsell" data-why="hearts">👑 ${T('ارتقا', 'Upgrade')}</button>`}</div>
            ${C.langs.length < 2 ? '' : `<div class="set"><span>🌐 ${T('زبان', 'Language')} ${T('<small lang="en">Language</small>', '<small lang="fa">زبان</small>')}</span><div class="seg">${[['fa', 'فارسی'], ['en', 'English']].map(l => `<button class="seg__b ${EA.lang === l[0] ? 'is-on' : ''}" data-act="lang" data-v="${l[0]}" lang="${l[0]}">${l[1]}</button>`).join('')}</div></div>`}
            <div class="set"><span>🌓 ${T('پوسته', 'Theme')}</span><div class="seg">${[['auto', T('خودکار', 'Auto')], ['light', T('روشن', 'Light')], ['dark', T('تیره', 'Dark')]].map(t => `<button class="seg__b ${s.settings.theme === t[0] ? 'is-on' : ''}" data-act="theme" data-v="${t[0]}">${t[1]}</button>`).join('')}</div></div>
            <div class="set set--col"><span>🎯 ${T('هدف روزانه', 'Daily goal')}</span><div class="seg">${GOALS().map(g => `<button class="seg__b ${s.profile.goal === g[0] ? 'is-on' : ''}" data-act="goal" data-v="${g[0]}">${g[1]} • ${fa(g[0])}</button>`).join('')}</div></div>
            <div class="set"><span>✏️ ${T('نام', 'Name')}</span><button class="btn btn--ghost btn--sm" data-act="rename">${T('تغییر نام', 'Change name')}</button></div>
            <div class="set"><span>🗑️ ${T('شروع از اول', 'Start over')}</span><button class="btn btn--ghost-red btn--sm" data-act="reset">${T('پاک کردن همه پیشرفت', 'Erase all progress')}</button></div>
          </div>
          <p class="disclaimer">${T(`${C.nameFa} یک ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.`, `${C.nameEn} is an educational tool and does not replace clinical judgment, a physician’s orders or your hospital protocol.`)}</p>
        </section>`;
      }

      /* ---------- گواهی ---------- */
      function certificate() {
        const s = S();
        if (!s.final || !s.final.passed) return;
        if (window.ACADEMY) ACADEMY.recordCert(C.id, s);
        const date = new Intl.DateTimeFormat(LOC(), { dateStyle: 'long' }).format(new Date(s.final.at));
        const code = window.ACADEMY ? ACADEMY.certCode(C.id, s) : C.codePrefix + '-' + (Math.abs(s.final.at ^ s.xp) % 1e6).toString(36).toUpperCase();
        const CT = C.cert(s);
        const m = modal(`<div class="cert" id="cert">
            <div class="cert__in">
              <div class="cert__seal">${mascot('cheer', 'var(--brand)', 70)}</div>
              ${CT.kicker}
              <h2>${T('گواهی پایان دوره', 'Certificate of Completion')}</h2>
              <p>${T('بدین‌وسیله گواهی می‌شود', 'This certifies that')}</p>
              ${s.profile.photo ? avatar('avatar--cert') : ''}
              <div class="cert__name">${esc(s.profile.name)}</div>
              ${CT.body}
              <div class="cert__els">${EA.worlds.map(w => `<span style="--wc:${w.color}">${w.sym}</span>`).join('')}</div>
              <div class="cert__foot"><span>${T('تاریخ:', 'Date:')} ${date}</span><span>${T('کد رهگیری:', 'Tracking code:')} <b dir="ltr">${code}</b></span></div>
            </div>
          </div>
          <div class="modal__btns no-print">${EMBED ? `<p class="muted">${T(`برای چاپ، نسخه مستقل ${C.nameFa} را در مرورگر باز کن.`, `To print, open the standalone version of ${C.nameEn} in your browser.`)}</p>` : `<button class="btn btn--brand btn--lg" data-print>🖨️ ${T('چاپ یا ذخیره PDF', 'Print or save as PDF')}</button><button class="btn btn--gold" data-story>📸 ${T('کارت استوری', 'Story card')}</button>`}<button class="btn btn--ghost" data-close>${T('بستن', 'Close')}</button></div>`, { cls: 'modal--cert', onClose: refresh });
        const pr = m.el.querySelector('[data-print]');
        if (pr) pr.onclick = () => { document.body.classList.add('printing-cert'); window.print(); setTimeout(() => document.body.classList.remove('printing-cert'), 500); };
        const sb = m.el.querySelector('[data-story]');
        if (sb) sb.onclick = () => ACADEMY.storyCard({ name: s.profile.name, course: T(EA.COURSE.courseFa, EA.COURSE.courseEn), brand: T(C.nameFa, C.nameEn), score: Math.round(s.final.score * 100), date, code, color: EA.COURSE.color, dark: EA.COURSE.dark, mascot: mascot('cheer', EA.COURSE.color, 120), photo: s.profile.photo });
        confetti(120); sfx('done');
      }

      /* ---------- پنجره‌های نوار بالا ---------- */
      function streakModal() {
        const s = S();
        const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - 6 + i); return d; });
        const wd = new Intl.DateTimeFormat(LOC(), { weekday: 'narrow' });
        modal(`<div class="cel__fire sm">🔥</div><h3>${T(`${fa(s.streak)} روز زنجیره`, `${fa(s.streak)}-day streak`)}</h3>
          <div class="week">${days.map(d => { const x = s.daily[EA.S.day(d)] > 0; return `<div class="week__d ${x ? 'on' : ''}"><small>${wd.format(d)}</small><span>${x ? '🔥' : '•'}</span></div>`; }).join('')}</div>
          <p>${T(`بهترین زنجیره: <b>${fa(s.bestStreak)}</b> روز • یخ‌زدگی: ${fa(s.freeze)} 🧊`, `Best streak: <b>${fa(s.bestStreak)}</b> days • freezes: ${fa(s.freeze)} 🧊`)}</p>
          <p class="muted">${T('هر روز دست‌کم یک درس یا تمرین انجام بده تا آتش خاموش نشود.', 'Do at least one lesson or practice every day to keep the fire burning.')}</p>
          <div class="modal__btns"><button class="btn btn--brand btn--lg" data-close>${T('باشه!', 'Got it!')}</button></div>`);
      }
      function heartsModal() {
        const s = S();
        const m = modal(`<h3>${T('قلب‌ها', 'Hearts')}</h3>
          <div class="hearts">${Array.from({ length: EA.S.MAX_HEARTS }, (_, i) => `<span class="${i < s.hearts || EA.S.noHearts() ? 'on' : ''}">❤️</span>`).join('')}</div>
          <p>${EA.S.noHearts() ? T('قلب بی‌نهایت فعال است ♾️', 'Unlimited hearts are on ♾️') : s.hearts >= EA.S.MAX_HEARTS ? T('قلب‌هایت پر است!', 'Your hearts are full!') : `${T('قلب بعدی:', 'Next heart in')} <b class="hm-t">${mmss(EA.S.nextHeartIn())}</b>`}</p>
          ${EA.S.noHearts() ? '' : `<p class="muted">👑 ${T('قلب بی‌نهایت در پلن Pro.', 'Unlimited hearts come with Pro.')} <a class="link" href="#" data-ac="store">${T('فروشگاه', 'Store')}</a></p>`}
          <p class="muted">${T('هر پاسخ اشتباه در درس یک قلب کم می‌کند. هر ۳۰ دقیقه یک قلب برمی‌گردد و با تمرین مرور هم قلب می‌گیری.', 'Each wrong answer in a lesson costs a heart. One heart comes back every 30 minutes, and review practice earns you one too.')}</p>
          <div class="modal__btns">
            ${s.hearts < EA.S.MAX_HEARTS && !EA.S.noHearts() ? `<button class="btn btn--blue btn--lg" data-refill ${s.gems < ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150) ? 'disabled' : ''}>${T(`پر کردن با ${fa(((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150))} 💎`, `Refill for ${fa(((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150))} 💎`)}</button><button class="btn btn--brand" data-prac>${T('تمرین و گرفتن قلب', 'Practice to earn a heart')}</button>` : ''}
            <button class="btn btn--ghost" data-close>${T('بستن', 'Close')}</button>
          </div>`);
        const r = m.el.querySelector('[data-refill]');
        if (r) r.onclick = () => { s.gems -= ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150); EA.S.addHeart(5); sfx('chest'); m.close(); refresh(); };
        const p = m.el.querySelector('[data-prac]');
        if (p) p.onclick = () => { m.close(); go('practice'); };
        const t = setInterval(() => { const el = m.el.querySelector('.hm-t'); if (!document.body.contains(m.el)) return clearInterval(t); if (el) el.textContent = mmss(EA.S.nextHeartIn()); }, 1000);
      }
      function worldsModal() {
        const s = S();
        const m = modal(`<h3>${T('از کدام دنیا ادامه بدهیم؟', 'Which world shall we continue?')}</h3><div class="wlist">${EA.worlds.map(w => `<button class="wcard" data-w="${w.id}" style="--wc:${w.color};--wd:${w.dark};--wl:${w.light}"><span class="wsym">${w.sym}</span><span><b>${w.name}</b><small>${w.sub}</small></span><span class="wcard__p">${fa(Math.round(EA.S.worldProgress(w) * 100))}${T('٪', '%')}</span></button>`).join('')}</div>`);
        m.el.querySelectorAll('.wcard').forEach(b => b.onclick = () => { s.profile.start = b.dataset.w; EA.S.save(); m.close(); go('learn'); setTimeout(() => jump(b.dataset.w), 60); });
      }
      function jump(wid) {
        const el = document.getElementById('u-' + wid);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      /* ---------- صفحه معرفی ---------- */
      const langBtn = attr => `<button class="chip-stat chip-lang" ${attr} lang="${T('en', 'fa')}" aria-label="${T('Switch to English', 'تغییر زبان به فارسی')}">🌐 <b>${T('English', 'فارسی')}</b></button>`;
      let landEl = null, obDraw = null;
      function landing() {
        const L = C.landing({ S, mascot, avatar, musicIcon, langBtn, esc });
        const demo = L.demo;
        const el = landEl = document.createElement('div');
        el.className = 'land';
        el.innerHTML = L.html;
        document.body.appendChild(el);
        document.body.classList.add('no-scroll');
        EA.tips.mount(el.querySelector('.tip--land'), 7000);
        const sticky = el.querySelector('.land__sticky');
        el.addEventListener('scroll', () => sticky.classList.toggle('is-on', el.scrollTop > 520 && el.scrollTop + el.clientHeight < el.scrollHeight - 260), { passive: true });
        el.addEventListener('click', e => {
          const d = e.target.closest('[data-demo]');
          if (d) {
            if (el.querySelector('.demo').classList.contains('is-done')) return;
            const good = d.dataset.demo === '0';
            el.querySelector('.demo').classList.add('is-done');
            el.querySelectorAll('[data-demo]').forEach(b => { b.disabled = true; if (b.dataset.demo === '0') b.classList.add('is-right'); else if (b === d) b.classList.add('is-wrong'); });
            const fb = el.querySelector('.demo__fb');
            fb.hidden = false; fb.className = 'demo__fb ' + (good ? 'is-ok' : 'is-bad');
            fb.innerHTML = C.demoFeedback(good, demo);
            sfx(good ? 'correct' : 'wrong'); if (good) confetti(70);
            return;
          }
          const b = e.target.closest('[data-land]'); if (!b) return;
          sfx('tap');
          const done = () => { el.remove(); landEl = null; document.body.classList.remove('no-scroll'); try { sessionStorage.setItem(C.id + '.in', '1'); } catch (x) { /* */ } };
          if (b.dataset.land === 'lang') return EA.setLang(EA.lang === 'en' ? 'fa' : 'en');
          if (b.dataset.land === 'import') return window.ACADEMY ? ACADEMY.restoreDialog() : importFile(() => { done(); enter(); });
          done(); enter();
        });
      }

      /* ---------- ورود (آشنایی) ---------- */
      function onboarding() {
        const d = { name: '', role: '', goal: 50, start: C.startWorld, photo: null };
        const ob = document.createElement('div');
        ob.className = 'ob';
        document.body.appendChild(ob);
        let step = 0;
        const steps = C.obSteps({ d, bubble, esc, GOALS });
        function bubble(t) { return `<div class="ob__talk">${mascot('happy', 'var(--brand)', 90)}<div class="bubble bubble--big">${t}</div></div>`; }
        function draw() {
          if (!ob.isConnected) { obDraw = null; return; }
          ob.innerHTML = `<div class="ob__card"><div class="ob__top"><button class="iconbtn" data-ob="back" aria-label="${T('قبلی', 'Back')}" ${step ? '' : 'hidden'}>${T('→', '←')}</button><div class="pbar"><i style="width:${(step + 1) / steps.length * 100}%"></i></div>${step || C.langs.length < 2 ? '' : langBtn('data-ob="lang"')}</div>${steps[step]()}</div>`;
          const i = ob.querySelector('#ob-name'); if (i) { if (matchMedia('(pointer:fine)').matches) i.focus(); i.onkeydown = e => { if (e.key === 'Enter') ob.querySelector('[data-ob="name"]').click(); }; }
        }
        obDraw = draw;
        ob.addEventListener('change', e => {
          if (e.target.id !== 'ob-ph') return;
          readPhoto(e.target.files[0]).then(u => { d.photo = u; draw(); }).catch(() => toast(T('این فایل تصویر نیست', 'That file isn’t an image'), 'toast--bad'));
        });
        ob.addEventListener('click', e => {
          const b = e.target.closest('[data-ob]'); if (!b) return;
          sfx('tap');
          const a = b.dataset.ob;
          if (a === 'lang') { const i = ob.querySelector('#ob-name'); if (i) d.name = i.value; return EA.setLang(EA.lang === 'en' ? 'fa' : 'en'); }
          if (a === 'back') step = Math.max(0, step - 1);
          else if (a === 'next') step++;
          else if (a === 'name') { const v = ob.querySelector('#ob-name').value.trim(); if (!v) { ob.querySelector('#ob-name').classList.add('shake'); setTimeout(() => ob.querySelector('#ob-name') && ob.querySelector('#ob-name').classList.remove('shake'), 400); return; } d.name = v; step++; }
          else if (a === 'role') { d.role = (ROLES[+b.dataset.v] || ROLES[ROLES.length - 1])[0]; step++; }
          else if (a === 'goal') { d.goal = +b.dataset.v; }
          else if (a === 'start') { d.start = b.dataset.v; }
          else if (a === 'finish') {
            const s = S();
            s.profile = { name: d.name, role: d.role || 'سایر', goal: d.goal, start: d.start, joined: Date.now(), photo: d.photo };
            EA.S.save(); ob.remove(); obDraw = null; sfx('done'); enter();
            setTimeout(() => { jump(d.start); setTimeout(() => { const n = document.querySelector(`#u-${d.start} .node.is-cur`); if (n) nodePop(n); }, 500); }, 200);
            return;
          }
          draw();
        });
        draw();
      }

      /* ---------- پشتیبان ---------- */
      function exportFile() {
        const blob = new Blob([JSON.stringify(S(), null, 1)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = C.id + '-backup-' + EA.S.day() + '.json';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        toast(T('فایل پشتیبان ذخیره شد 💾', 'Backup file saved 💾'));
      }
      function importFile(done) {
        const inp = document.createElement('input');
        inp.type = 'file'; inp.accept = 'application/json,.json';
        inp.onchange = () => {
          const f = inp.files[0]; if (!f) return;
          f.text().then(t => {
            const o = JSON.parse(t);
            if (!o || o.v !== 1 || !o.profile || (o.app && o.app !== C.id)) throw new Error('bad');
            localStorage.setItem(EA.S.KEY, JSON.stringify(o));
            EA.S.load(); toast(T('پیشرفت بازیابی شد ✅', 'Progress restored ✅')); done && done();
          }).catch(() => toast(T('فایل معتبر نیست', 'That file isn’t a valid backup'), 'toast--bad'));
        };
        inp.click();
      }

      /* ---------- رویدادها ---------- */
      function onClick(e) {
        const b = e.target.closest('[data-act]');
        if (!b) { if (!e.target.closest('.pop')) document.querySelectorAll('.pop').forEach(p => p.remove()); return; }
        const a = b.dataset.act, s = S();
        switch (a) {
          case 'node': return nodePop(b);
          case 'start': document.querySelectorAll('.pop').forEach(p => p.remove()); return EA.player.lesson(b.dataset.w, b.dataset.l);
          case 'clinic': return EA.player.clinic();
          case 'chest': return openChest(b.dataset.id);
          case 'checkpoint': {
            const w = worldOf(b.dataset.w);
            if (!G().final()) return G().upsell('checkpoint');
            if (!EA.S.worldDone(w)) return toast(T(`اول هر ${fa(w.lessons.length)} درس ${w.name} را تمام کن 🔒`, `Finish all ${fa(w.lessons.length)} ${w.name} lessons first 🔒`));
            const c = EA.exam.checkpoint, best = s.checkpoints[w.id];
            const badge = EA.S.BADGES.find(x => x.id === 'w_' + w.id).name;
            const m = modal(`<div class="big-i">🏁</div><h3>${T(`آزمون مرحله ${w.name}`, `${w.name} checkpoint`)}</h3><p>${T(`${fa(c.count)} سؤال، بدون قلب. با ${fa(c.pass * 100)}٪ قبول می‌شوی و نشان «${badge}» را می‌گیری.`, `${fa(c.count)} questions, no hearts. Score ${fa(c.pass * 100)}% to pass and earn the “${badge}” badge.`)}</p>${best ? `<p class="muted">${T('بهترین نمره', 'Best score')}: ${fa(Math.round(best.best * 100))}${T('٪', '%')}</p>` : ''}<div class="modal__btns"><button class="btn btn--brand btn--lg" data-go>${T('شروع آزمون', 'Start the test')}</button><button class="btn btn--ghost" data-close>${T('بعداً', 'Later')}</button></div>`);
            m.el.querySelector('[data-go]').onclick = () => { m.close(); EA.player.checkpoint(w.id); };
            return;
          }
          case 'final': {
            if (!G().final()) return G().upsell('final');
            const f = EA.exam.final;
            const m = modal(`<div class="big-i">🎓</div><h3>${T('امتحان نهایی', 'Final exam')}</h3><p>${T(`${fa(EA.worlds.length * f.perWorld)} سؤال از هر پنج دنیا، شامل مسئله‌های محاسباتی. ${fa(f.minutes)} دقیقه وقت داری و حد قبولی ${fa(f.pass * 100)}٪ است.`, `${fa(EA.worlds.length * f.perWorld)} questions from all five worlds, including calculations. You have ${fa(f.minutes)} minutes, and the pass mark is ${fa(f.pass * 100)}%.`)}</p><p class="muted">${T('در امتحان قلب کم نمی‌شود و توضیح پاسخ‌ها نمایش داده نمی‌شود.', 'You won’t lose hearts during the exam, and answer explanations are hidden.')}</p><div class="modal__btns"><button class="btn btn--gold btn--lg" data-go>${T('آماده‌ام!', 'I’m ready!')}</button><button class="btn btn--ghost" data-close>${T('بعداً', 'Later')}</button></div>`);
            m.el.querySelector('[data-go]').onclick = () => { m.close(); EA.player.final(); };
            return;
          }
          case 'cert': return certificate();
          case 'char': return charModal(b.dataset.id);
          case 'music': return toggleMusic();
          case 'lang': if (b.dataset.v !== EA.lang) { sfx('select'); EA.setLang(b.dataset.v); } return;
          case 'round': return EA.player.round(b.dataset.id);
          case 'rmphoto': s.profile.photo = null; EA.S.save(); toast(T('عکس حذف شد', 'Photo removed')); return refresh();
          case 'guide': return guide(b.dataset.w);
          case 'jump': return jump(b.dataset.w);
          case 'practice': return EA.player.practice();
          case 'calc': return EA.player.calc(b.dataset.w || null);
          case 'speed': return EA.player.speed();
          case 'cards': {
            if (!G().calc()) return G().upsell('calc');
            let w = b.dataset.w || null;
            /* دنیایی که واژه کارت‌دار ندارد: کارت‌های همه دنیاها */
            if (w && EA.lex && !EA.lex.TERMS.some(t => t.fa && t.d && t.w === w)) { w = null; toast(T('این دنیا کارت واژه جدا ندارد؛ کارت‌های همه دنیاها را مرور کن.', 'This world has no word cards of its own; here are cards from every world.')); }
            return EA.cards && EA.cards.open(w);
          }
          case 'streak': return streakModal();
          case 'hearts': return heartsModal();
          case 'shop': return go('profile', () => { const x = $('.shop'); x && x.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
          case 'worlds': return worldsModal();
          case 'buy':
            if (b.dataset.item === 'hearts' && s.gems >= ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150)) { s.gems -= ((window.ACADEMY && ACADEMY.CFG.HEART_REFILL_GEMS) || 150); EA.S.addHeart(5); }
            else if (b.dataset.item === 'freeze' && s.gems >= 200) { s.gems -= 200; s.freeze++; EA.S.save(); }
            sfx('chest'); toast(T('خرید انجام شد ✅', 'Purchase complete ✅')); return refresh();
          case 'theme': s.settings.theme = b.dataset.v; if (window.ACADEMY && ACADEMY.setTheme) ACADEMY.setTheme(b.dataset.v); EA.S.save(); applyTheme(); return refresh();
          case 'goal': s.profile.goal = +b.dataset.v; EA.S.save(); return refresh();
          case 'rename': {
            const m = modal(`<h3>${T('نام تازه', 'New name')}</h3><input class="ob__in" maxlength="40" value="${esc(s.profile.name)}"><div class="modal__btns"><button class="btn btn--brand btn--lg" data-ok>${T('ذخیره', 'Save')}</button><button class="btn btn--ghost" data-close>${T('انصراف', 'Cancel')}</button></div>`);
            const i = m.el.querySelector('input'); i.focus(); i.select();
            m.el.querySelector('[data-ok]').onclick = () => { const v = i.value.trim(); if (v) { s.profile.name = v; EA.S.save(); } m.close(); refresh(); };
            return;
          }
          case 'export': return exportFile();
          case 'import': return importFile(refresh);
          case 'reset': {
            const m = modal(`${mascot('sad', '#FF4B4B', 80)}<h3>${T('همه پیشرفت پاک شود؟', 'Erase all your progress?')}</h3><p>${T('امتیاز، زنجیره، نشان‌ها و گواهی از بین می‌روند. قبلش فایل پشتیبان بگیر.', 'Your XP, streak, badges and certificate will be lost. Make a backup first.')}</p><div class="modal__btns"><button class="btn btn--ghost" data-close>${T('نه، منصرف شدم', 'No, keep it')}</button><button class="btn btn--red" data-ok>${T('بله، پاک کن', 'Yes, erase it')}</button></div>`);
            m.el.querySelector('[data-ok]').onclick = () => { EA.S.reset(); m.close(); location.hash = ''; enter(); };
            return;
          }
        }
      }
      function onInput(e) {
        const k = e.target.dataset && e.target.dataset.vol; if (!k) return;
        S().settings[k] = +e.target.value; EA.S.save(); EA.audio.volumes();
      }
      function onChange(e) {
        if (e.target.dataset && e.target.dataset.vol) { sfx('select'); return; }
        if (e.target.matches('[data-photo]')) {
          readPhoto(e.target.files[0]).then(u => { S().profile.photo = u; EA.S.save(); toast(T('عکس پروفایل ذخیره شد 📸', 'Profile photo saved 📸')); refresh(); })
            .catch(() => toast(T('این فایل تصویر نیست', 'That file isn’t an image'), 'toast--bad'));
          return;
        }
        const k = e.target.dataset.set; if (!k) return;
        S().settings[k] = e.target.checked; EA.S.save();
        if (k === 'music' || k === 'sound') { EA.audio.volumes(); EA.audio.syncMusic(); document.querySelectorAll('[data-act="music"]').forEach(b => { b.innerHTML = musicIcon(); b.classList.toggle('is-on', !!S().settings.music); }); sfx('select'); return; }
        sfx('tap'); refresh();
      }

      /* ---------- مسیریابی ---------- */
      const VIEWS = { learn: learnView, practice: practiceView, chars: charsView, tools: () => (G().tools() ? EA.tools.view() : ACADEMY.lockedTools(C.id)), league: leagueView, profile: profileView };
      function route() {
        const h = (location.hash.match(/^#\/(\w+)/) || [])[1];
        view = VIEWS[h] ? h : 'learn';
        render();
      }
      function render(after) {
        if (!S().profile) return;
        EA.S.tick();
        const v = $('#view');
        v.innerHTML = VIEWS[view]();
        v.dataset.view = view;
        if (view === 'tools' && G().tools()) EA.tools.bind(v.firstElementChild);
        if (view === 'learn') EA.tips.mount(v.querySelector('.tip--strip'), 9000);
        shell();
        after && after();
        if (window.ACADEMY) ACADEMY.afterRender(C.id, view);
      }
      function go(name, after) {
        if (location.hash === '#/' + name) render(after);
        else { location.hash = '#/' + name; if (after) setTimeout(after, 80); }
      }
      function refresh(mode) {
        const y = scrollY;
        render();
        if (view === 'learn' && mode === 'lesson') {
          const n = document.querySelector('.node.is-cur');
          if (n) n.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else scrollTo(0, y);
        const lr = S().league.lastResult;
        if (lr && !lr.seen) {
          lr.seen = true; EA.S.save();
          const t = EA.S.TIERS[S().league.tier];
          modal(`<span class="medal medal--big" style="--mc:${t.color}">${medal()}</span><h3>${lr.move > 0 ? T(`صعود به لیگ ${t.name}! 🎉`, `Promoted to the ${t.name} League! 🎉`) : lr.move < 0 ? T(`سقوط به لیگ ${t.name}`, `Moved down to the ${t.name} League`) : T(`ماندی در لیگ ${t.name}`, `You stayed in the ${t.name} League`)}</h3><p>${T(`هفته گذشته رتبه ${fa(lr.rank)} شدی.`, `Last week you finished #${fa(lr.rank)}.`)}</p><div class="modal__btns"><button class="btn btn--brand btn--lg" data-close>${T('ادامه', 'Continue')}</button></div>`);
          if (lr.move > 0) confetti();
        }
      }

      /* ---------- عوض شدن زبان: همه چیز بدون بارگذاری دوباره از نو کشیده می‌شود ---------- */
      EA.onLang(() => {
        document.querySelectorAll('.pop, .modal, .toast').forEach(x => x.remove());
        if (landEl && landEl.isConnected) {
          const y = landEl.scrollTop;
          landEl.remove(); landing(); landEl.scrollTop = y;
        } else if (obDraw) obDraw();
        else if (S() && S().profile && !EA.player.active()) { const y = scrollY; render(); scrollTo(0, y); }
        toast(T('زبان برنامه: فارسی', 'Language: English'));
      });

      /** ورود به بازی پس از صفحه معرفی */
      function enter() {
        if (!S().profile && window.ACADEMY && ACADEMY.autoProfile(C, S())) EA.S.save();
        if (!S().profile) { $('#view').innerHTML = ''; onboarding(); return; }
        route();
        refresh();
        const got = EA.chars.check(S());
        if (got.length) { EA.S.save(); newCharsModal(got); }
      }
      function boot() {
        EA.S.load();
        applyTheme();
        let seen = !!(S().profile || (window.ACADEMY && ACADEMY.hasProfile())) && !(window.ACADEMY && ACADEMY.wantIntro());
        try { seen = seen || sessionStorage.getItem(C.id + '.in') === '1'; } catch (e) { /* */ }
        if (seen) enter(); else landing();
      }

      /* ---------- جلوگیری از کپی متن؛ فقط جاهایی که کاربر می‌نویسد آزادند ---------- */
      const editable = t => t && t.closest && t.closest('input, textarea, select, [contenteditable="true"]');
      ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart'].forEach(ev =>
        document.addEventListener(ev, e => { if (!editable(e.target)) e.preventDefault(); }, true));
      document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && /^[acxsup]$/i.test(e.key) && !editable(e.target)) e.preventDefault();
      }, true);
      document.addEventListener('selectionchange', () => {
        const sel = window.getSelection && window.getSelection();
        if (sel && sel.rangeCount && !editable(document.activeElement) && String(sel).length) sel.removeAllRanges();
      });

      document.addEventListener('click', e => { const im = e.target.closest && e.target.closest(C.term ? '[data-zoom]' : 'img[data-zoom]'); if (im && !im.closest('.modal--zoom')) { e.stopPropagation(); EA.ui.zoom(im); } }, true);
      document.addEventListener('click', onClick);
      document.addEventListener('change', onChange);
      document.addEventListener('input', onInput);
      window.addEventListener('hashchange', route);
      // لیگ زنده: رتبه‌ها در طول روز جابه‌جا می‌شوند
      setInterval(() => { if (view === 'league' && S() && S().profile && !EA.player.active() && !document.querySelector('.modal') && !document.hidden) { const y = scrollY; render(); scrollTo(0, y); } }, 45000);
      setInterval(() => { if (S() && S().profile && !EA.player.active() && !document.querySelector('.modal')) { const h = S().hearts; EA.S.tick(); if (S().hearts !== h) shell(); } }, 30000);

      EA.app = { go, refresh, render, certificate, boot, enter, musicIcon, toggleMusic, crashScreen, view: () => view };

      /** به جای صفحه خالی، پیام قابل فهم نشان بده */
      function crashScreen(e) {
        const d = document.createElement('div');
        d.className = 'crash';
        d.innerHTML = `${mascot('sad', '#FF4B4B', 110)}<h2>${T(`${C.nameFa} باز نشد`, `${C.nameEn} couldn’t start`)}</h2>
          <p>${T('مرورگر نتوانست برنامه را اجرا کند. فایل را با کروم، فایرفاکس یا سافاری باز کن (نه پیش‌نمایش فایل در تلگرام یا مدیر فایل).', 'Your browser couldn’t run the app. Open the file in Chrome, Firefox or Safari — not in a file preview inside Telegram or a file manager.')}</p>
          <button class="btn btn--brand btn--lg" onclick="try{localStorage.removeItem('${C.key}')}catch(x){}location.reload()">${T('شروع دوباره', 'Start over')}</button>
          <small dir="ltr">${esc(e && e.message || e)}</small>`;
        document.body.appendChild(d);
      }

    })();
  };

  /* ######################################################################
     بخش دوم: پلتفرم آکادمی — اشتراک زمان‌دار، قفل هوشمند، فروشگاه، رمزساز مدیر،
     داشبورد، کلینیک خطاها، شیفت اورژانس ICU، گواهی، پشتیبان و ماشین‌حساب شناور
     ###################################################################### */

  /* ================= پیکربندی (قیمت‌ها و پشتیبانی را این‌جا ویرایش کنید) ================= */
  const CFG = {
    BRAND_FA: 'تراپو', BRAND_EN: 'Therapo',   // نام نرم‌افزار اصلی؛ یونا، هما، نگار و دوره‌های بعدی زیرمجموعه آن‌اند
    BRAND_TAG_FA: 'آکادمی بالینی', BRAND_TAG_EN: 'Clinical academy',
    /** کلید عمومی امضای کدهای فعال‌سازی (Ed25519). این کلید فقط «بررسی» می‌کند و با آن نمی‌شود کد ساخت؛
     *  کلید خصوصی سازنده کدها فقط در فایل کلید مدیر است و هرگز داخل برنامه نیست. (برای تعویض کلید،
     *  کلید تازه را به ابتدای این فهرست اضافه کنید؛ کدهای کلید قبلی تا وقتی کلیدش این‌جا بماند معتبرند.) */
    LICENSE_KEYS: ['LNZlJrpkxzlBtHYdzIYzag82VIFejokLckHFvS05M7s='],
    WARN_DAYS: 5,            // بنر هشدار: کمتر از ۵ روز
    WARN_TRIAL_HOURS: 12,    // بنر هشدار کدهای تست ۴۸ ساعته: کمتر از ۱۲ ساعت
    CLOCK_TOLERANCE: 3600e3, // عقب کشیدن ساعت بیش از ۱ ساعت = دستکاری
    VIP_GEMS: 500,
    /* ---- اقتصاد درون‌برنامه (محافظت از ارزش قلب بی‌نهایت Pro/VIP) ---- */
    HEART_REFILL_GEMS: 150,  // پر کردن قلب‌ها با الماس: گران
    CHEST_GEMS: [5, 10],     // صندوقچه درس و صندوقچه‌های مسیر: فقط کمی الماس، هرگز قلب
    VIP_CHEST_GEMS: 15,      // صندوقچه طلایی و الماس ویژه، فقط Pro و VIP
    /* ---- کیس بالینی امروز و فلش‌کارت ---- */
    DAILY_CASE_XP: 15, DAILY_CASE_GEMS: 5,
    FLASH_DEMO_CARDS: 3,     // کارت‌های رایگان دسته فلش‌کارت در حالت دمو
    /* ---- کدهای تخفیف ثابت (کدهای سفارشی کمپین را پنل مدیر می‌سازد) ----
     *   plans: پلن‌هایی که کد رویشان اثر دارد (۱ آموزشی، ۲ Pro، ۳ الماس)؛ until: پایان مهلت (اختیاری، میلی‌ثانیه) */
    PROMOS: {
      MED20: { pct: 20, plans: [1, 2, 3], fa: 'تخفیف دانشجویان پزشکی', en: 'Medical student discount' },
      VIP30: { pct: 30, plans: [3], fa: 'تخفیف ویژه پکیج الماس', en: 'Diamond package discount' }
    },
    SUPPORT_HINT: 'این متن را برای پشتیبانی آکادمی (تلگرام / واتس‌اپ / ایمیل) بفرستید تا کد فعال‌سازی اختصاصی دستگاهتان را دریافت کنید.',
    SUPPORT_HINT_EN: 'Send this text to support (Telegram / WhatsApp / email) to receive the activation code for your device.',
    CURRENCY: 'تومان', CURRENCY_EN: 'Toman',
    /* ---- قیمت‌گذاری (مهر ۱۴۰۵، دلار ≈ ۲۵۸ هزار تومان؛ یک کتاب مرجع پزشکی ≈ ۱٫۵ تا ۲٫۵ میلیون تومان) ----
     * قیمت پایه یک ماه برای هر دوره و هر پلن؛ هر دوره به نسبت حجم و ارزش محتوایش قیمت جدا دارد:
     *   هما  بیشترین محتوا (۲۹ کیس + تفسیرگر کامل ABG/VBG) ← گران‌ترین
     *   نگار بیش از ۱۰۰ تصویر بالینی و طبقه‌بندی سوءتغذیه    ← میانه
     *   یونا ۵ ماشین‌حساب اصلاح و ۶ کیس                        ← پایه
     * اشتراک ۱ ساله هر دوره کمتر از قیمت دو کتاب مرجع است تا برای دانشجو منطقی و برای ابزار ارزشمند بماند. */
    PRICE: {
      yona: { 1: 590000, 2: 890000 },
      homa: { 1: 690000, 2: 990000 },
      negar: { 1: 640000, 2: 940000 },
      /* ترمینو: ۱۵ حیطه ترمینولوژی در یک اشتراک؛ گران‌تر از یک دوره تک ولی ارزان‌تر از پکیج الماس */
      termino: { 1: 990000, 2: 1390000 }
    },
    /** پیش‌نیاز دوره‌های مجموعه‌ای (ترمینو): 'final' = قبولی امتحان نهایی حیطه مقدمه، 'lessons' = تمام کردن همه درس‌هایش */
    PREREQ_RULE: 'final',
    /** قیمت پیش‌فرض دوره‌های آینده (یا در فایل دوره: price: { 1: …, 2: … }) */
    PRICE_DEFAULT: { 1: 590000, 2: 890000 },
    /** پکیج جامع الماس (همه دوره‌های فعلی و آینده + کیس‌های ICU) برای یک ماه */
    PRICE_DIAMOND: 1790000,
    /** ضریب مدت: ۳ ماه ۱۷٪، ۶ ماه ۲۷٪ و ۱ سال ۳۸٪ ارزان‌تر از ماه‌به‌ماه */
    DUR_MULT: { 1: 1, 2: 2.5, 3: 4.4, 4: 7.5 },
    /** تخفیف باندل: ۲ دوره ۱۵٪، ۳ دوره یا بیشتر ۲۵٪ */
    BUNDLE: { 1: 1, 2: 0.85, 3: 0.75 }
  };
  window.ACADEMY_BRAND = { fa: CFG.BRAND_FA, en: CFG.BRAND_EN }; // نام نرم‌افزار در عنوان صفحه هر دوره

  const EPOCH = Date.UTC(2024, 0, 1);
  const TIERS = [
    { id: 0, key: 'demo', fa: 'دمو (رایگان)', en: 'Demo (free)', short: 'دمو', shortEn: 'Demo', icon: '🆓', color: '#9aa9b1' },
    { id: 1, key: 'std', fa: 'پلن آموزشی', en: 'Standard', short: 'آموزشی', shortEn: 'Standard', icon: '📘', color: '#1cb0f6' },
    { id: 2, key: 'pro', fa: 'پلن Pro (بالینی حرفه‌ای)', en: 'Pro (clinical professional)', short: 'Pro', shortEn: 'Pro', icon: '🩺', color: '#a560e8' },
    { id: 3, key: 'vip', fa: 'پکیج جامع الماس (همه دوره‌ها)', en: 'Diamond All-Access (every course)', short: 'الماس', shortEn: 'Diamond', icon: '💎', color: '#e5a500' }
  ];
  const DUR = [
    { id: 0, fa: '۴۸ ساعت (هدیه تست الماس)', en: '48 hours (Diamond trial gift)', short: '۴۸ ساعته', shortEn: '48 hours', ms: 48 * 36e5, trial: true },
    { id: 1, fa: '۱ ماهه (۳۰ روز)', en: '1 month (30 days)', short: '۱ ماهه', shortEn: '1 month', ms: 30 * 864e5 },
    { id: 2, fa: '۳ ماهه (۹۰ روز)', en: '3 months (90 days)', short: '۳ ماهه', shortEn: '3 months', ms: 90 * 864e5 },
    { id: 3, fa: '۶ ماهه (۱۸۰ روز)', en: '6 months (180 days)', short: '۶ ماهه', shortEn: '6 months', ms: 180 * 864e5 },
    { id: 4, fa: '۱ ساله (۳۶۵ روز)', en: '1 year (365 days)', short: '۱ ساله', shortEn: '1 year', ms: 365 * 864e5 },
    { id: 5, fa: 'دائمی (Lifetime)', en: 'Lifetime', short: 'دائمی', shortEn: 'Lifetime', ms: 0, life: true }
  ];
  /** نام کوتاه پلن و مدت به زبان رابط */
  const tShort = t => PT(TIERS[t].short, TIERS[t].shortEn);
  const dShort = d => PT(DUR[d].short, DUR[d].shortEn);
  const CUR = () => PT(CFG.CURRENCY, CFG.CURRENCY_EN);
  /** بیت‌مسک ۱۶ دوره (یونا 1، هما 2، نگار 4، دوره‌های آینده 8، 16، … 32768).
   *  پکیج الماس (Tier 3) به بیت‌مسک وابسته نیست: همه دوره‌های فعلی و آینده را تا پایان مهلتش باز می‌کند. */
  const ALL_MASK = 0xFFFF;

  /* ================= ابزارهای کوچک ================= */
  const AC = window.ACADEMY_COURSES;
  /** حیطه‌های یک دوره مجموعه‌ای (مثل ۱۵ حیطه ترمینو): خودشان در صفحه اول نیستند و اشتراکشان همان دوره مادر است */
  const SUBC = window.ACADEMY_SUBCOURSES = window.ACADEMY_SUBCOURSES || {};
  const rootOf = id => (id && SUBC[id] && SUBC[id].parent) || id;
  const courseDef = id => AC[id] || SUBC[id];
  /** همه دوره‌های ثبت‌شده و معتبر (هر فایل data-*.js که اضافه شود، خودکار این‌جا می‌آید) */
  const courses = () => STORE.registry().list;
  const $$ = (s, r) => (r || document).querySelector(s);
  /** زبان رابط: داخل دوره همان زبان دوره، بیرون از دوره (صفحه اول، پنجره‌ها) تنظیم سراسری academy.lang */
  const UILANG = () => (window.EA && window.EA.COURSE && window.EA.lang ? window.EA.lang : (STORE.LS.raw('academy.lang') === 'en' ? 'en' : 'fa'));
  const PT = (fa, en) => (UILANG() === 'en' && en != null ? en : fa);
  /** فایل‌های جانبی دوره به زبان رابط: حیطه‌های ترمینو نسخه انگلیسی را فایل جداگانه دارند (assetsEn) */
  const assetsOf = D => (D && UILANG() === 'en' && D.assetsEn) || (D && D.assets) || [];
  const nf = (n, d) => { const v = Number(n); if (!isFinite(v)) return String(n); return v.toLocaleString(PT('fa-IR', 'en-US'), { maximumFractionDigits: d == null ? 0 : d }); };
  const pesc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fdate = (t, opt) => { try { return new Intl.DateTimeFormat(PT('fa-IR', 'en-US'), opt || { dateStyle: 'medium' }).format(new Date(t)); } catch (e) { return new Date(t).toISOString().slice(0, 10); } };
  const fdatetime = t => fdate(t, { dateStyle: 'medium', timeStyle: 'short' });
  const LS = STORE.LS; // نام‌های منطقی → کلیدهای ثابت academy_global_state / academy_license_data
  const SS = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* */ } }
  };
  const params = new URLSearchParams(location.search);

  /* ================= SHA-256 و HMAC (جاوااسکریپت خالص؛ روی file:// هم کار می‌کند) ================= */
  const K256 = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
  const utf8 = s => new TextEncoder().encode(String(s));
  function sha256(bytes) {
    const b = bytes instanceof Uint8Array ? bytes : utf8(bytes);
    const l = b.length, nb = ((l + 9 + 63) >> 6) << 6;
    const m = new Uint8Array(nb); m.set(b); m[l] = 0x80;
    const bits = l * 8; const dv = new DataView(m.buffer);
    dv.setUint32(nb - 4, bits >>> 0); dv.setUint32(nb - 8, Math.floor(bits / 4294967296));
    const H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
    const W = new Uint32Array(64);
    const rot = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < nb; o += 64) {
      for (let i = 0; i < 16; i++) W[i] = dv.getUint32(o + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rot(W[i - 15], 7) ^ rot(W[i - 15], 18) ^ (W[i - 15] >>> 3), s1 = rot(W[i - 2], 17) ^ rot(W[i - 2], 19) ^ (W[i - 2] >>> 10);
        W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
      }
      let [a, bb, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const S1 = rot(e, 6) ^ rot(e, 11) ^ rot(e, 25), ch = (e & f) ^ (~e & g), t1 = (h + S1 + ch + K256[i] + W[i]) >>> 0;
        const S0 = rot(a, 2) ^ rot(a, 13) ^ rot(a, 22), mj = (a & bb) ^ (a & c) ^ (bb & c), t2 = (S0 + mj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = bb; bb = a; a = (t1 + t2) >>> 0;
      }
      H[0] += a; H[1] += bb; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
    }
    const out = new Uint8Array(32); const ov = new DataView(out.buffer);
    for (let i = 0; i < 8; i++) ov.setUint32(i * 4, H[i]);
    return out;
  }
  const hex = b => Array.from(b, x => x.toString(16).padStart(2, '0')).join('');

  /* ================= Base32 (کراکفورد: بدون I، L، O، U برای خوانایی) ================= */
  const B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  function b32enc(bytes) {
    let bits = 0, val = 0, out = '';
    for (const x of bytes) { val = (val << 8) | x; bits += 8; while (bits >= 5) { out += B32[(val >>> (bits - 5)) & 31]; bits -= 5; } val &= (1 << bits) - 1; }
    if (bits > 0) out += B32[(val << (5 - bits)) & 31];
    return out;
  }
  function b32dec(str, n) {
    const s = str.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
    let bits = 0, val = 0; const out = [];
    for (const ch of s) {
      const v = B32.indexOf(ch); if (v < 0) return null;
      val = (val << 5) | v; bits += 5;
      if (bits >= 8) { out.push((val >>> (bits - 8)) & 255); bits -= 8; val &= (1 << bits) - 1; }
    }
    return out.length >= n ? new Uint8Array(out.slice(0, n)) : null;
  }
  const b64enc = s => { const b = utf8(s); let bin = ''; for (let i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(bin); };
  const b64dec = s => { const bin = atob(s); const b = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i); return new TextDecoder().decode(b); };

  /* ================= شناسه دستگاه (Device ID) =================
   * از ویژگی‌های پایدار سخت‌افزار و مرورگر ساخته می‌شود؛ پس با پاک کردن کش هم همان می‌ماند. */
  function fingerprint() {
    const n = navigator, s = window.screen || {};
    let gl = '';
    try {
      const c = document.createElement('canvas'), g = c.getContext('webgl') || c.getContext('experimental-webgl');
      const ext = g && g.getExtension('WEBGL_debug_renderer_info');
      gl = g ? (ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : g.getParameter(g.RENDERER)) : '';
    } catch (e) { /* */ }
    let tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { /* */ }
    const w = s.width || 0, h = s.height || 0;
    return [n.platform, n.hardwareConcurrency, n.deviceMemory, Math.max(w, h), Math.min(w, h), s.colorDepth, tz, (n.languages || [n.language])[0], n.maxTouchPoints, gl].join('|');
  }
  const fmtDev = s => s.match(/.{1,4}/g).join('-');
  const normDev = s => String(s || '').toUpperCase().replace(/[^0-9A-Z]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');
  function deviceId() {
    // نسخه هاست: شناسه ثابت حساب کاربری (کدهای فعال‌سازی به حساب گره می‌خورند، نه به مرورگر)
    if (window.TRAPO_SERVER && window.TRAPO_SERVER.user) return window.TRAPO_SERVER.user.dev;
    let id = LS.raw('academy.device');
    if (!id || normDev(id).length !== 12) { id = fmtDev(b32enc(sha256('dev|' + fingerprint())).slice(0, 12)); LS.set('academy.device', id); }
    return id;
  }

  /* ================= کد فعال‌سازی (امضای دیجیتال Ed25519) =================
   * ۸ بایت داده [نسخه=3|سطح|مدت] [بیت‌مسک ۰ تا ۷] [انقضا ۴ بایت] [بیت‌مسک ۸ تا ۱۵] [تصادفی] + ۶۴ بایت امضا روی
   * «داده + Device ID». برنامه فقط کلید عمومی دارد: می‌تواند کد را بررسی کند ولی نمی‌تواند کد بسازد.
   * نتیجه: ۱۱۶ نویسه Base32 با پیشوند TRP1 (برای کپی و چسباندن). */
  const b64bytes = s => { const bin = atob(s); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };
  const PUBKEYS = CFG.LICENSE_KEYS.map(b64bytes);
  const licMsg = (dev, p) => utf8('TRAPO-LIC-1|' + normDev(dev) + '|' + hex(p));
  /** کد را برای یک دستگاه بررسی می‌کند؛ اگر امضا نخواند ok:false */
  function parseCode(code, dev) {
    let s = String(code || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
    if (s.length === 120 && s.startsWith('TRP1')) s = s.slice(4);
    if (s.length !== 116) return { ok: false, err: 'format' };
    const all = b32dec(s, 72); if (!all) return { ok: false, err: 'format' };
    const p = all.slice(0, 8), sig = all.slice(8);
    const msg = licMsg(dev, p);
    if (!PUBKEYS.some(k => NACL.sign.detached.verify(msg, sig, k))) return { ok: false, err: 'sig' };
    if ((p[0] >> 6) !== 3) return { ok: false, err: 'ver' };
    const tier = (p[0] >> 4) & 3, durId = (p[0] >> 1) & 7;
    // الماس: همه دوره‌ها (فعلی و آینده)؛ بقیه: بیت‌مسک ۱۶ بیتی
    const mask = tier === 3 ? ALL_MASK : p[1] | (p[6] << 8);
    const expMin = ((p[2] << 24) >>> 0) + (p[3] << 16) + (p[4] << 8) + p[5];
    const d = DUR[durId] || DUR[1];
    const exp = d.life ? 0 : EPOCH + expMin * 60000;
    return { ok: true, ver: 3, tier, mask, durId, exp, life: !!d.life, trial: !!d.trial, issued: d.life ? 0 : exp - d.ms };
  }

  /* ================= انبار مجوزها و قفل ضد دستکاری ساعت ================= */
  const LIC_KEY = 'academy.license';
  const lic = () => { const o = LS.json(LIC_KEY, null) || {}; o.codes = o.codes || []; o.ack = o.ack || []; o.gifts = o.gifts || {}; o.seen = o.seen || 0; return o; };
  const saveLic = o => LS.put(LIC_KEY, o);
  let TAMPER = null; // { last, now } وقتی ساعت عقب کشیده شده
  /** last_valid_timestamp را با هر فعالیت جلو می‌برد؛ اگر ساعت دستگاه بیش از ۱ ساعت عقب‌تر باشد قفل می‌کند */
  function clockCheck() {
    const now = Date.now(), o = lic();
    let last = Math.max(+LS.raw('last_valid_timestamp') || 0, o.seen || 0);
    // کف زمانی: زمان صدور هیچ کد فعال‌شده‌ای نمی‌تواند در آینده دستگاه باشد
    o.codes.forEach(c => { const g = parseCode(c, deviceId()); if (g.ok && g.issued) last = Math.max(last, g.issued); });
    if (last && now < last - CFG.CLOCK_TOLERANCE) { TAMPER = { last, now }; return false; }
    TAMPER = null;
    if (now > (+LS.raw('last_valid_timestamp') || 0)) LS.set('last_valid_timestamp', String(now));
    if (now > (o.seen || 0)) { o.seen = now; saveLic(o); }
    return true;
  }
  let memo = { raw: undefined, list: [] };
  function grants() {
    const raw = LS.raw(LIC_KEY) + '|' + deviceId();
    if (raw === memo.raw) return memo.list;
    const dev = deviceId();
    memo = { raw, list: lic().codes.map(c => Object.assign({ code: c }, parseCode(c, dev))).filter(g => g.ok) };
    return memo.list;
  }
  const DEMO_ACCESS = { tier: 0, lessons: false, final: false, tools: false, infinite: false, vip: false, expiry: null, life: false, trial: false, active: false };
  /** دسترسی یک دوره: بالاترین سطح میان کدهای فعالی که بیت این دوره را دارند (OR بیتی) و دورترین تاریخ انقضا */
  function access(cid) {
    if (TAMPER) return Object.assign({}, DEMO_ACCESS, { blocked: true });
    const c = courses().find(x => x.id === rootOf(cid)); if (!c) return DEMO_ACCESS;
    const now = Date.now();
    let tier = 0, exp = -1, life = false, trialOnly = true, vip = false;
    grants().forEach(g => {
      const on = g.life || g.exp > now;
      if (!on) return;
      if (g.tier === 3) vip = true;
      // الماس هر دوره‌ای را باز می‌کند (حتی دوره‌ای که بعد از خرید اضافه شده)؛ بقیه فقط بیت‌های کد خودشان را
      if (g.tier !== 3 && !(g.mask & c.bit)) return;
      tier = Math.max(tier, g.tier);
      if (g.life) life = true; else exp = Math.max(exp, g.exp);
      if (!g.trial) trialOnly = false;
    });
    if (!tier) return Object.assign({}, DEMO_ACCESS, { vip });
    return { tier, lessons: tier >= 1, final: tier >= 1, tools: tier >= 2, infinite: tier >= 2, vip, expiry: life ? 0 : exp, life, trial: trialOnly && !life, active: true };
  }
  function summary() {
    const per = {}; courses().forEach(c => { per[c.id] = access(c.id); });
    const owned = courses().filter(c => per[c.id].tier >= 1);
    const vip = Object.keys(per).some(k => per[k].vip) || grants().some(g => g.tier === 3 && (g.life || g.exp > Date.now()));
    const top = Math.max(0, ...Object.keys(per).map(k => per[k].tier));
    const exps = owned.map(c => per[c.id]).filter(a => !a.life).map(a => a.expiry);
    const life = owned.length && owned.every(c => per[c.id].life);
    return { per, owned, vip, top, grand: vip || owned.length >= 2, nextExp: exps.length ? Math.min(...exps) : null, lastExp: exps.length ? Math.max(...exps) : null, life };
  }
  const daysLeft = t => Math.max(0, Math.ceil((t - Date.now()) / 864e5));
  const leftText = t => {
    const ms = t - Date.now();
    if (ms <= 0) return PT('منقضی شده', 'expired');
    if (ms < 864e5) return PT(`${nf(Math.ceil(ms / 36e5))} ساعت`, `${nf(Math.ceil(ms / 36e5))} h`);
    return PT(`${nf(daysLeft(t))} روز`, `${nf(daysLeft(t))} days`);
  };
  const maskNames = m => ((m & ALL_MASK) === ALL_MASK || m === 0xFF ? PT('همه دوره‌ها (فعلی و آینده)', 'All courses (current & future)') : courses().filter(c => m & c.bit).map(c => PT(c.nameFa, c.nameEn)).join(PT('، ', ', ')));

  /** افزودن کد: کدهای تازه با قبلی‌ها ترکیب می‌شوند (OR بیتی دوره‌ها، بالاترین سطح، دورترین انقضا) */
  function redeem(raw) {
    const code = String(raw || '').trim();
    const dev = deviceId();
    const g = parseCode(code, dev);
    if (!g.ok) return { ok: false, msg: g.err === 'sig' ? PT('این کد برای این دستگاه صادر نشده یا ناقص کپی شده است. کد کامل را دوباره بچسبان یا با پشتیبانی تماس بگیر.', 'This code was not issued for this device or was copied incompletely. Paste the full code again or contact support.') : PT('قالب کد درست نیست. کد کامل را (که با TRP1 شروع می‌شود) بدون کم و زیاد بچسبان.', 'The code format is wrong. Paste the full code (starting with TRP1) exactly as sent.') };
    if (!g.life && g.exp <= Date.now()) return { ok: false, msg: PT('این کد منقضی شده است. برای تمدید با پشتیبانی تماس بگیرید.', 'This code has expired. Contact support to renew.') };
    const o = lic();
    const norm = x => String(x).toUpperCase().replace(/[\s\-_]/g, '');
    if (o.codes.some(x => norm(x) === norm(code))) return { ok: false, msg: PT('این کد قبلاً روی این دستگاه فعال شده است ✅', 'This code is already active on this device ✅') };
    const before = summary();
    o.codes.push(code);
    if (g.tier === 3) courses().forEach(c => { o.gifts[c.id] = (o.gifts[c.id] || 0) + CFG.VIP_GEMS; });
    saveLic(o);
    clockCheck();
    return { ok: true, g, before, after: summary() };
  }
  /** الماس هدیه VIP هنگام ورود به هر دوره به حساب همان دوره اضافه می‌شود */
  function claimGifts(cid, s) {
    const o = lic();
    // دوره‌ای که بعد از خرید الماس اضافه شده هم یک بار الماس هدیه می‌گیرد
    if (o.gifts[cid] === undefined) {
      const now = Date.now(), vips = grants().filter(g => g.tier === 3 && (g.life || g.exp > now)).length;
      o.gifts[cid] = vips ? CFG.VIP_GEMS * vips : 0;
      saveLic(o);
    }
    const n = o.gifts[cid] || 0;
    if (!n || !s) return 0;
    s.gems = (s.gems || 0) + n; o.gifts[cid] = 0; saveLic(o);
    return n;
  }

  /* ================= پنجره، اعلان، کنفتی و کپی (مستقل از موتور دوره؛ روی داشبورد هم کار می‌کند) ================= */
  function pModal(html, opts) {
    const o = opts || {};
    const wrap = document.createElement('div');
    wrap.className = 'modal' + (o.cls ? ' ' + o.cls : '');
    wrap.innerHTML = `<div class="modal__card" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(wrap);
    requestAnimationFrame(() => wrap.classList.add('is-in'));
    let closed = false;
    const close = () => { if (closed) return; closed = true; wrap.classList.remove('is-in'); setTimeout(() => wrap.remove(), 200); document.removeEventListener('keydown', esc); o.onClose && o.onClose(); };
    const esc = e => { if (e.key === 'Escape' && !o.sticky) close(); };
    document.addEventListener('keydown', esc);
    wrap.addEventListener('click', e => {
      if (e.target === wrap && !o.sticky) close();
      const b = e.target.closest('[data-close]'); if (b) close();
    });
    return { el: wrap, close };
  }
  function pToast(html, cls) {
    let box = document.querySelector('.toasts');
    if (!box) { box = document.createElement('div'); box.className = 'toasts'; document.body.appendChild(box); }
    const t = document.createElement('div');
    t.className = 'toast ' + (cls || '');
    t.innerHTML = html;
    box.appendChild(t);
    setTimeout(() => t.classList.add('is-out'), 2800);
    setTimeout(() => t.remove(), 3200);
  }
  function pSfx(n) { try { window.EA && EA.ui && EA.ui.sfx(n); } catch (e) { /* */ } }
  function pConfetti(n) {
    if (window.EA && EA.ui && EA.ui.confetti) return EA.ui.confetti(n);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = document.createElement('canvas'); cv.className = 'confetti'; document.body.appendChild(cv);
    const W = cv.width = innerWidth * devicePixelRatio, H = cv.height = innerHeight * devicePixelRatio, g = cv.getContext('2d');
    const cols = ['#58CC02', '#12B3A8', '#8E2C6E', '#FFC800', '#1CB0F6', '#FF6B57', '#A560E8'];
    const ps = Array.from({ length: n || 120 }, () => ({ x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 26 * devicePixelRatio, vy: (-Math.random() * 22 - 8) * devicePixelRatio, r: (4 + Math.random() * 6) * devicePixelRatio, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4 }));
    let f = 0;
    (function loop() {
      g.clearRect(0, 0, W, H);
      ps.forEach(p => { p.vy += 0.6 * devicePixelRatio; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.a += p.va; g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.fillStyle = p.c; g.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); g.restore(); });
      if (++f < 150) requestAnimationFrame(loop); else cv.remove();
    })();
  }
  /** کپی در کلیپ‌بورد؛ روی file:// هم با روش جایگزین کار می‌کند */
  function copyText(text) {
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
      let ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove(); return ok;
    };
    try {
      if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(() => true, () => fallback());
    } catch (e) { /* */ }
    return Promise.resolve(fallback());
  }
  const copyBox = (text, rows) => `<textarea class="acbox" rows="${rows || 8}" readonly dir="auto">${pesc(text)}</textarea>`;

  /* ================= بنر هشدار انقضا ================= */
  function banner() {
    const old = $$('.acbanner'); if (old) old.remove();
    if (MODE === 'calc' || TAMPER || SS.get('academy.banner.off')) return;
    const sm = summary(); const now = Date.now();
    let warn = null;
    sm.owned.forEach(c => {
      const a = sm.per[c.id]; if (a.life || !a.expiry) return;
      const lim = a.trial ? CFG.WARN_TRIAL_HOURS * 36e5 : CFG.WARN_DAYS * 864e5;
      if (a.expiry - now < lim && (!warn || a.expiry < warn.exp)) warn = { exp: a.expiry, c, trial: a.trial };
    });
    if (!warn) return;
    const ms = warn.exp - now, inH = ms < 864e5;
    const el = document.createElement('div');
    el.className = 'acbanner no-print';
    el.innerHTML = `<span class="acbanner__i">⏳</span><span class="acbanner__t">${PT(`تنها ${inH ? nf(Math.max(1, Math.ceil(ms / 36e5))) + ' ساعت' : nf(daysLeft(warn.exp)) + ' روز'} تا پایان اعتبار اشتراک شما باقی مانده است`, `Only ${inH ? nf(Math.max(1, Math.ceil(ms / 36e5))) + ' hours' : nf(daysLeft(warn.exp)) + ' days'} left on your subscription`)} <small>(${PT(warn.c.nameFa, warn.c.nameEn)}${warn.trial ? PT(' • کد تست', ' • trial') : ''})</small></span><button class="acbanner__b" data-ac="store">${PT('تمدید اشتراک', 'Renew')}</button><button class="acbanner__x" data-ac="banneroff" aria-label="${PT('بستن', 'Close')}">✕</button>`;
    document.body.insertBefore(el, document.body.firstChild);
  }

  /* ================= پنجره‌های ساعت دستکاری‌شده و پایان مهلت ================= */
  function tamperModal() {
    if ($$('.modal--tamper')) return;
    const m = pModal(`<div class="big-i">⏰</div><h3>${PT('ساعت دستگاه عقب کشیده شده است', 'Your device clock was set back')}</h3>
      <p>${PT('برای جلوگیری از سوءاستفاده از اشتراک‌های زمان‌دار، دسترسی به دوره‌ها موقتاً مسدود شد.', 'To protect time-limited subscriptions, course access is temporarily blocked.')}</p>
      <div class="actable"><div><span>${PT('آخرین زمان معتبر', 'Last valid time')}</span><b>${fdatetime(TAMPER.last)}</b></div><div><span>${PT('ساعت فعلی دستگاه', 'Device clock')}</span><b>${fdatetime(TAMPER.now)}</b></div></div>
      <p class="muted">${PT('تاریخ و ساعت گوشی یا رایانه را روی «خودکار» بگذارید و دوباره بررسی کنید. هیچ بخشی از پیشرفت شما (امتیاز، ستاره، زنجیره، درس‌ها) پاک نشده است.', 'Set the date & time to automatic and check again. None of your progress was erased.')}</p>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-recheck>🔄 ${PT('ساعت را اصلاح کردم؛ بررسی دوباره', 'I fixed it — check again')}</button><a class="btn btn--ghost" href="${homeURL()}">${PT('داشبورد', 'Dashboard')}</a></div>`, { cls: 'modal--tamper', sticky: true });
    m.el.querySelector('[data-recheck]').onclick = () => { if (clockCheck()) { m.close(); location.reload(); } else pToast(PT('ساعت دستگاه هنوز عقب است', 'The clock is still behind'), 'toast--bad'); };
  }
  function expiryNotice() {
    if (MODE === 'calc' || TAMPER) return;
    const o = lic(), now = Date.now();
    const gone = grants().filter(g => !g.life && g.exp <= now && o.ack.indexOf(g.code) < 0);
    if (!gone.length) return;
    const names = Array.from(new Set(gone.map(g => maskNames(g.mask)))).join(PT('، ', ', '));
    pModal(`<div class="big-i">⌛</div><h3>${PT('پایان مهلت اشتراک', 'Your subscription has ended')}</h3>
      <p>${PT(`اعتبار اشتراک <b>${names}</b> به پایان رسید. درس‌های ۲ به بعد، امتحان نهایی و ماشین‌حساب‌ها دوباره قفل شدند.`, `Your access to <b>${names}</b> has expired. Lessons 2+, the final exam and the calculators are locked again.`)}</p>
      <div class="acsafe">🛡️ ${PT('نگران نباش: همه امتیازها (XP)، ستاره‌ها، زنجیره روزانه، کاراکترها و پیشرفت درس‌هایت سالم و محفوظ است. با وارد کردن کد تمدید، دقیقاً از همان‌جا ادامه می‌دهی.', 'Don’t worry: all your XP, stars, streak, characters and lesson progress are safe. Enter a renewal code and you’ll continue exactly where you left off.')}</div>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-ac="activate">🔑 ${PT('وارد کردن کد تمدید', 'Enter renewal code')}</button><button class="btn btn--gold" data-ac="store">🛒 ${PT('فروشگاه و تمدید', 'Store & renew')}</button><button class="btn btn--ghost" data-close>${PT('باشه', 'OK')}</button></div>`,
    { onClose: () => { const x = lic(); gone.forEach(g => x.ack.push(g.code)); saveLic(x); } });
  }

  /* ================= پنجره ارتقا (Paywall) ================= */
  const WHY = {
    lesson: ['📚', 'درس‌های ۲ به بعد', 'Lessons 2 and beyond', 1],
    final: ['🎓', 'امتحان نهایی و گواهی‌نامه', 'The final exam and certificate', 1],
    checkpoint: ['🏁', 'آزمون مرحله‌ها', 'World checkpoints', 1],
    rounds: ['🏥', 'راند بیمارستان', 'Hospital rounds', 1],
    calc: ['🧮', 'تمرین محاسبات و تصویر', 'Calculation & picture practice', 1],
    guide: ['📖', 'دفترچه نکات و برگه مرجع جیبی', 'The guidebook and pocket reference', 1],
    tools: ['🩺', 'تب ابزار بالینی و ماشین‌حساب', 'Clinical tools & calculators', 2],
    hearts: ['♾️', 'قلب بی‌نهایت', 'Unlimited hearts', 2, 'خسته از تمام شدن قلب‌ها در لحظات حساس؟ با ارتقا به پلن بالینی Pro یا VIP، قلب بی‌نهایت (♾️) و ماشین‌حساب بالینی بگیرید!', 'Tired of running out of hearts at critical moments? Upgrade to the clinical Pro plan or VIP for unlimited hearts (♾️) and the clinical calculators!'],
    next: ['🚑', 'کیس‌های بعدی مسیر', 'The next cases', 1, 'برای نجات بیمارِ مرحله ۲ و باز کردن کل مسیر، اشتراک خود را فعال کنید', 'Activate your subscription to save the patient in stage 2 and unlock the whole path'],
    clinic: ['🩺', 'کلینیک خطاها', 'The mistake clinic', 1, 'خطاهایت در کلینیک منتظر درمان‌اند! برای مرور هدفمند و رفع نقاط ضعفت، اشتراک خود را فعال کن', 'Your mistakes are waiting in the clinic! Activate your subscription for targeted review of your weak spots'],
    flash: ['🗂️', 'دسته کامل فلش‌کارت‌ها', 'The full flashcard deck', 1, 'فقط ۳ کارت اول رایگان است؛ برای مرور همه نکات طلایی، فرمول‌ها و مقادیر بحرانی شب امتحان، اشتراک این دوره را فعال کن', 'Only the first 3 cards are free; activate this course to review every key point, formula and critical value before the exam'],
    note: ['📋', 'متن آماده پرونده و برگ مشاوره', 'Ready-made chart text', 2, 'با پلن Pro یا VIP نتیجه هر محاسبه به متن استاندارد پرونده و برگ مشاوره تبدیل می‌شود که با یک کلیک کپی می‌کنی', 'With Pro or VIP every calculation becomes a standard chart and consult note you copy in one click'],
    vipchest: ['👑', 'صندوقچه طلایی', 'The golden chest', 2, 'صندوقچه طلایی مخصوص Pro و VIP است: قلب بی‌نهایت (♾️)، ابزار بالینی و الماس ویژه بعد از هر درس تازه', 'The golden chest is for Pro and VIP: unlimited hearts (♾️), clinical tools and bonus gems after every new lesson'],
    grand: ['🚨', 'شیفت اورژانس: کیس‌های ترکیبی ICU', 'ICU Grand Rounds', 9],
    fab: ['⚡', 'ماشین‌حساب سریع سر بالین', 'Bedside Quick-Calc', 2]
  };
  /** هر درخواست ارتقا (قفل درس، ابزار، قلب، ...) پنجره معرفی همان دوره + انتخاب پلن را باز می‌کند */
  function upsell(why) { upgradeModal(null, why); }
  function makeGate(cid) {
    const A = () => access(cid);
    const firstOK = (w, i) => window.EA && EA.worlds && EA.worlds.indexOf(w) === 0 && i === 0;
    return {
      lesson: (w, i) => A().lessons || firstOK(w, i),
      final: () => A().final, tools: () => A().tools, rounds: () => A().lessons, guide: () => A().lessons, calc: () => A().lessons,
      clinic: () => A().tier >= 1, // کلینیک خطاها فقط با اشتراک
      upsell
    };
  }

  /* ================= فروشگاه: جدول مقایسه + سبد خرید هوشمند ================= */
  /** قیمت: tier ۱ و ۲ جمع قیمت دوره‌های انتخابی × تخفیف باندل؛ الماس قیمت ثابت؛ سپس ضریب مدت */
  function price(tier, ids, durId) {
    const mult = CFG.DUR_MULT[durId] || 1;
    if (tier === 3) return Math.round(CFG.PRICE_DIAMOND * mult / 10000) * 10000;
    const list = [].concat(ids || []);
    if (!list.length) return 0;
    const sum = list.reduce((s, id) => s + ((CFG.PRICE[id] || (AC[id] && AC[id].price) || CFG.PRICE_DEFAULT)[tier] || 0), 0);
    const nb = Math.max(...Object.keys(CFG.BUNDLE).map(Number));
    return Math.round(sum * CFG.BUNDLE[Math.min(nb, list.length)] * mult / 10000) * 10000;
  }
  function storeModal(pre) { upgradeModal(pre && pre.course, null, pre && pre.tier); }

  /* ================= ورود کد فعال‌سازی ================= */
  function activateModal() {
    const m = pModal(`<div class="big-i">🔑</div><h3>${PT('فعال‌سازی اشتراک', 'Activate subscription')}</h3>
      <p class="muted">${PT('کدی را که پشتیبانی برایت فرستاده وارد کن.', 'Enter the code support sent you.')}</p>
      <input class="ob__in acin" dir="ltr" autocomplete="off" spellcheck="false" placeholder="${PT('TRP1-… (کد کامل را این‌جا بچسبان)', 'TRP1-… (paste the full code here)')}">
      <div class="acerr" hidden></div>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-go>${PT('فعال‌سازی', 'Activate')}</button><button class="btn btn--ghost" data-close>${PT('انصراف', 'Cancel')}</button></div>`);
    const inp = m.el.querySelector('.acin'), err = m.el.querySelector('.acerr');
    setTimeout(() => inp.focus(), 60);
    const go = () => tryRedeem(inp.value.trim(), err, inp, () => m.close());
    m.el.querySelector('[data-go]').onclick = go;
    inp.onkeydown = e => { if (e.key === 'Enter') go(); };
  }

  /* رمزساز مدیر داخل برنامه کاربران نیست: کدها فقط با ابزار جداگانه مدیر (admin/index.html + فایل کلید) ساخته می‌شوند */

  /* ================= تکه‌های HTML داخل دوره: نوار کناری، چیپ‌ها، پروفایل، ابزار قفل ================= */
  const tierBadge = a => (a.tier ? `<span class="actb actb--${TIERS[a.tier].key}">${TIERS[a.tier].icon} ${tShort(a.tier)}</span>` : '');
  function vipBadge() { return summary().vip ? `<span class="acvip" title="${PT('پکیج جامع الماس', 'Diamond All-Access')}">💎 ${PT('الماس', 'Diamond')}</span>` : ''; }
  function topChips() {
    return `<a class="chip-stat chip-home" href="${homeURL()}" aria-label="${PT('خانه ' + CFG.BRAND_FA, CFG.BRAND_EN + ' home')}" title="${PT('خانه ' + CFG.BRAND_FA, CFG.BRAND_EN + ' home')}">🏠</a>${summary().vip ? `<span class="chip-stat chip-vip" title="${PT('الماس', 'Diamond')}">💎</span>` : ''}`;
  }
  function sideHTML(cid) {
    const a = access(cid);
    const nm = (window.EA && EA.S && EA.S.get() && EA.S.get().mistakes.length) || 0;
    return `<div class="acside">
      ${a.tier ? `<div class="acside__plan" style="--tc:${TIERS[a.tier].color}">
        <div>${tierBadge(a)}${a.vip && a.tier < 3 ? ` <span class="acvip">💎 ${PT('الماس', 'Diamond')}</span>` : ''}</div>
        <small>${a.life ? PT('اشتراک دائمی ♾️', 'Lifetime ♾️') : PT(`${leftText(a.expiry)} باقی‌مانده`, `${leftText(a.expiry)} left`)}</small>
        ${a.tier < 3 ? `<div class="acside__btns"><button class="btn btn--gold btn--sm" data-ac="store" data-course="${cid}">👑 ${PT('ارتقا', 'Upgrade')}</button></div>` : ''}
      </div>` : `<button class="acside__up" data-ac="store" data-course="${cid}"><span>🔓</span><b>${PT('باز کردن همه درس‌ها', 'Unlock every lesson')}</b><small>${PT('آموزشی یا Pro', 'Standard or Pro')}</small></button>`}
      <button class="acside__a acside__music ${window.EA && EA.S && EA.S.get() && EA.S.get().settings.music ? 'is-on' : ''}" data-ac="music" aria-pressed="${!!(window.EA && EA.S && EA.S.get() && EA.S.get().settings.music)}">${window.EA && EA.S && EA.S.get() && EA.S.get().settings.music ? '🎵' : '🔇'} <span>${PT('موسیقی', 'Music')}</span><span class="acside__sw" aria-hidden="true"></span></button>
      <button class="acside__a" data-ac="flash">🗂️ <span>${PT('فلش‌کارت‌های مرور سریع', 'Quick-review flashcards')}</span></button>
      <button class="acside__a" data-ac="grand">🚨 <span>${PT('کیس‌های ترکیبی ICU', 'ICU grand rounds')}</span></button>
      <button class="acside__a ${!a.tier && nm ? 'acside__a--crit' : ''}" data-act="clinic">🩺 <span>${PT('کلینیک خطاها', 'Mistake clinic')}</span>${nm ? (a.tier ? `<em>${nf(nm)}</em>` : `<em class="crit">${PT(`${nf(nm)} مورد بحرانی`, `${nf(nm)} critical`)}</em>`) : ''}</button>
      <a class="acside__a" href="${homeURL()}">🏠 <span>${PT('خانه ' + CFG.BRAND_FA, CFG.BRAND_EN + ' home')}</span></a>
      ${SUBC[cid] ? `<a class="acside__a" href="?course=${SUBC[cid].parent}">🧩 <span>${PT(`همه حیطه‌های ${AC[SUBC[cid].parent].nameFa}`, `All ${AC[SUBC[cid].parent].nameEn} modules`)}</span></a>` : ''}
      <div class="acswitch">${courses().map(c => `<a href="?course=${c.id}" class="acswitch__c ${c.id === rootOf(cid) ? 'is-on' : ''}" style="--cc:${c.color}" title="${PT(c.nameFa + ' — ' + c.subjectFa, c.nameEn + ' — ' + (c.subjectEn || ''))}">${c.icon}<small>${PT(c.nameFa, c.nameEn)}</small></a>`).join('')}</div>
    </div>`;
  }
  function profileHTML(cid) {
    const a = access(cid), sm = summary();
    return `<div class="acprof">
      <h2 class="sh">💳 ${PT('اشتراک و دسترسی', 'Subscription & access')}</h2>
      <div class="acprof__card" style="--tc:${TIERS[a.tier].color}">
        <div class="acprof__row"><span>${PT('این دوره', 'This course')}</span>${tierBadge(a) || '🔒'}</div>
        <div class="acprof__row"><span>${PT('روزهای باقی‌مانده', 'Time left')}</span><b>${a.tier ? (a.life ? PT('دائمی ♾️', 'Lifetime ♾️') : leftText(a.expiry)) : '—'}</b></div>
        ${a.tier && !a.life ? `<div class="acprof__row"><span>${PT('پایان اعتبار', 'Expires')}</span><b>${fdatetime(a.expiry)}</b></div>` : ''}
        <div class="acprof__row"><span>${PT('ابزار بالینی / قلب بی‌نهایت', 'Tools / unlimited hearts')}</span><b>${a.tools ? '✓ / ♾️' : '🔒 / ' + nf(5)}</b></div>
        <div class="acprof__row"><span>${PT('همه دوره‌ها', 'All courses')}</span><b>${courses().map(c => `${c.icon} ${sm.per[c.id].tier ? tShort(sm.per[c.id].tier) : '🔒'}`).join(' • ')}</b></div>
        <div class="acprof__btns"><button class="btn btn--gold btn--sm" data-ac="store" data-course="${cid}">👑 ${PT('ارتقا / تمدید', 'Upgrade / renew')}</button><button class="btn btn--ghost btn--sm" data-ac="settings">⚙️ ${PT('تنظیمات نمایش', 'Display settings')}</button></div>
      </div>
    </div>${SRV ? inviteHTML() : ''}${notesHTML()}`;
  }
  function lockedTools(cid) {
    const c = courseDef(cid);
    return `<section class="tools aclock">
      <header class="vhead"><h1>${PT('ابزار بالینی و ماشین‌حساب', 'Clinical tools & calculators')}</h1><p>${PT(c.toolsFa, c.toolsEn || 'Bedside calculators with step-by-step solutions')}</p></header>
      <div class="aclock__card"><div class="big-i">🔒</div><h3>🔒 ${PT('ویژه پلن Pro', 'Pro plan')}</h3>
        <ul class="aclist"><li>🧮 ${PT('ماشین‌حساب‌ها با راه‌حل گام‌به‌گام و شدت', 'Calculators with step-by-step solutions')}</li><li>⚡ ${PT('دکمه شناور «ماشین‌حساب سریع سر بالین» در هر صفحه', 'Floating bedside Quick-Calc on every page')}</li><li>♾️ ${PT('قلب بی‌نهایت', 'Unlimited hearts')}</li></ul>
        <div class="modal__btns"><button class="btn btn--gold btn--lg" data-ac="store" data-tier="2" data-course="${cid}" data-why="tools">👑 ${PT('ارتقا به Pro', 'Upgrade to Pro')}</button><button class="btn btn--brand" data-ac="activate">🔑 ${PT('کد دارم', 'I have a code')}</button></div></div>
      <div class="aclock__note">${noteBoxHTML(NOTE_SAMPLE(), true)}</div>
    </section>`;
  }

  /* ================= پروفایل آکادمی و خواندن پیشرفت دوره‌ها ================= */
  const profile = () => LS.json('academy.profile', null);
  const courseState = cid => (AC[cid] && AC[cid].kind === 'suite' ? suiteState(AC[cid]) : LS.json(STORE.courseKey(cid), null));
  function hasProfile() { return !!profile(); }
  function autoProfile(C, s) {
    const p = profile(); if (!p || !s) return false;
    s.profile = { name: p.name, role: p.role || 'سایر', goal: p.goal || 50, start: C.startWorld, joined: Date.now(), photo: p.photo || null };
    return true;
  }
  const wantIntro = () => params.get('intro') === '1';
  const homeURL = () => location.pathname.split('/').pop() || 'index.html';
  const ROLES_P = ['دانشجوی پزشکی', 'انترن یا رزیدنت', 'پزشک', 'پرستار', 'کارشناس تغذیه', 'داروساز', 'هوشبری / تنفس‌درمانی', 'سایر'];
  const ROLES_EN = ['Medical student', 'Intern or resident', 'Physician', 'Nurse', 'Dietitian', 'Pharmacist', 'Anesthesia / respiratory therapy', 'Other'];
  /** نقش ذخیره‌شده (فارسی) به زبان رابط؛ نقش‌های دوره‌ها هم با همین نگاشت ترجمه می‌شوند */
  const roleName = r => { const i = ROLES_P.indexOf(r); return i >= 0 ? PT(r, ROLES_EN[i]) : r; };
  function onboardModal(after) {
    const d = { name: '', role: '' };
    // اگر قبلاً در یکی از دوره‌ها نام داده، همان را پیشنهاد بده
    courses().some(c => { const s = courseState(c.id); if (s && s.profile) { d.name = s.profile.name; d.photo = s.profile.photo; return true; } return false; });
    const m = pModal(`<div class="acob__m">${['💧', '🫁', '🔍'].map(x => `<span>${x}</span>`).join('')}</div><h3>${PT(`به ${CFG.BRAND_FA} خوش آمدی!`, `Welcome to ${CFG.BRAND_EN}!`)}</h3>
      <p class="muted">${PT(`${courses().map(c => `${c.nameFa} (${c.domainFa || c.subjectFa})`).join('، ')} در یک پلتفرم. نامت روی گواهی‌نامه‌ها چاپ می‌شود.`, `${courses().map(c => `${c.nameEn} (${c.subjectEn || c.domainEn || c.nameEn})`).join(', ')} in one platform. Your name is printed on your certificates.`)}</p>
      <input class="ob__in acin" maxlength="40" placeholder="${PT('نام و نام خانوادگی', 'Full name')}" value="${pesc(d.name)}">
      <div class="ob__grid acroles">${ROLES_P.map(r => `<button class="ob__opt" data-role="${r}">${roleName(r)}</button>`).join('')}</div>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-go>${PT('بزن بریم! 🚀', 'Let’s go! 🚀')}</button></div>`, { sticky: true });
    const inp = m.el.querySelector('input'); setTimeout(() => inp.focus(), 80);
    m.el.querySelector('.acroles').onclick = e => { const b = e.target.closest('[data-role]'); if (!b) return; d.role = b.dataset.role; m.el.querySelectorAll('[data-role]').forEach(x => x.classList.toggle('is-sel', x === b)); };
    const go = () => {
      const v = inp.value.trim();
      if (!v) { inp.classList.add('shake'); setTimeout(() => inp.classList.remove('shake'), 400); return; }
      LS.put('academy.profile', { name: v, role: d.role || 'سایر', goal: 50, photo: d.photo || null, joined: Date.now() });
      m.close(); after && after();
    };
    m.el.querySelector('[data-go]').onclick = go;
    inp.onkeydown = e => { if (e.key === 'Enter') go(); };
  }

  /* ================= کلینیک خطاها (داشبورد) ================= */
  function clinicModal() {
    const rows = courses().map(c => { const s = courseState(c.id); const n = s && s.mistakes ? s.mistakes.length : 0; const meta = (s && s.mMeta) || {}; const rep = Object.keys(meta).filter(k => meta[k].n >= 2).length; return { c, n, rep }; });
    const total = rows.reduce((a, r) => a + r.n, 0);
    pModal(`<div class="big-i">🩺</div><h3>${PT('کلینیک خطاها', 'Mistake clinic')}</h3>
      <p class="muted">${PT('هر سؤالی که اشتباه جواب بدهی خودکار این‌جا ذخیره می‌شود. مرور با تکرار فاصله‌دار انجام می‌شود و با پاسخ درست، از فهرست خطاها حذف می‌شود.', 'Every question you get wrong is saved here automatically. Review uses spaced repetition, and a correct answer removes it from the list.')}</p>
      <div class="acclin">${rows.map(r => `<div class="acclin__r" style="--cc:${r.c.color}"><span class="acclin__i">${r.c.icon}</span><span class="acclin__t"><b>${PT(r.c.nameFa, r.c.nameEn)}</b><small>${r.n ? PT(`${nf(r.n)} خطای ثبت‌شده${r.rep ? ` • ${nf(r.rep)} مورد تکراری` : ''}`, `${nf(r.n)} saved mistake${r.n === 1 ? '' : 's'}${r.rep ? ` • ${nf(r.rep)} repeated` : ''}`) : PT('بدون خطا 🎉', 'No mistakes 🎉')}</small></span>${r.n ? (access(r.c.id).tier ? `<a class="btn btn--brand btn--sm" href="?course=${r.c.id}&run=clinic">${PT('شروع ویزیت', 'Start visit')}</a>` : `<button class="btn btn--gold btn--sm" data-ac="upsell" data-course="${r.c.id}" data-why="clinic">🔓 ${PT('باز کردن کلینیک', 'Unlock the clinic')}</button>`) : ''}</div>`).join('')}</div>
      ${total ? '' : `<p class="acok">${PT('هیچ خطایی ثبت نشده؛ عالی پیش می‌روی!', 'No mistakes recorded — great work!')}</p>`}
      <div class="modal__btns"><button class="btn btn--ghost" data-close>${PT('بستن', 'Close')}</button></div>`);
  }

  /* ================= شیفت اورژانس: کیس‌های ترکیبی ICU ================= */
  const GR = () => (window.ACADEMY_GRAND_ROUNDS && window.ACADEMY_GRAND_ROUNDS.cases) || [];
  const DOM0 = { yona: ['💧', 'الکترولیت', '#58cc02', 'Electrolytes'], homa: ['🫁', 'گاز خون', '#12b3a8', 'Blood gas'], negar: ['🔍', 'NFPE', '#8e2c6e', 'NFPE'], all: ['🧠', 'جمع‌بندی', '#e5a500', 'Synthesis'] };
  /** برچسب حوزه هر مرحله ICU؛ دوره‌های آینده برچسبشان را از فایل خودشان می‌گیرند (domainFa/domainEn، icon، color) */
  const domOf = d => { const x = DOM0[d]; if (x) return [x[0], PT(x[1], x[3]), x[2]]; return AC[d] ? [AC[d].icon || '📘', PT(AC[d].domainFa || AC[d].subjectFa || AC[d].nameFa, AC[d].domainEn || AC[d].subjectEn || AC[d].nameEn), AC[d].color || DOM0.all[2]] : domOf('all'); };
  const DOM = new Proxy({}, { get: (_, d) => domOf(d) });
  /** متن دوزبانه کیس‌های ICU: رشته ساده (فارسی) یا { fa, en } */
  const GT = x => (x && typeof x === 'object' && !Array.isArray(x) && 'fa' in x ? PT(x.fa, x.en) : x);
  /** کیس ICU به زبان رابط (فیلدهای en کنار فیلدهای فارسی در data-grand-rounds.js) */
  const gLoc = c => { if (!c || UILANG() !== 'en' || !c.en) return c; const e = c.en; return Object.assign({}, c, e, { steps: c.steps.map((s, i) => Object.assign({}, s, (e.steps || [])[i] || {})) }); };
  const GNORM = {
    pH: [7.35, 7.45, '', 2], pco2: [35, 45, 'mmHg', 0, 'PaCO₂'], po2: [80, 100, 'mmHg', 0, 'PaO₂'], hco3: [22, 26, 'mEq/L', 0, 'HCO₃⁻'], be: [-2, 2, 'mEq/L', 0, 'BE'],
    sao2: [95, 100, '%', 0, 'SaO₂'], lac: [0.5, 2, 'mmol/L', 1, 'Lactate'], na: [135, 145, 'mEq/L', 0, 'Na⁺'], k: [3.5, 5, 'mEq/L', 1, 'K⁺'], cl: [98, 106, 'mEq/L', 0, 'Cl⁻'],
    ca: [8.5, 10.5, 'mg/dL', 1, 'Ca'], ica: [4.5, 5.3, 'mg/dL', 1, 'iCa'], mg: [1.7, 2.4, 'mg/dL', 1, 'Mg'], p: [2.5, 4.5, 'mg/dL', 1, 'PO₄'], glu: [70, 140, 'mg/dL', 0, 'Glucose'],
    bun: [7, 20, 'mg/dL', 0, 'BUN'], cr: [0.6, 1.2, 'mg/dL', 1, 'Cr'], alb: [3.5, 5, 'g/dL', 1, 'Albumin'], crp: [0, 10, 'mg/L', 0, 'CRP'], fio2: [21, 21, '%', 0, 'FiO₂']
  };
  function gLab(o) {
    if (!o) return '';
    const keys = Object.keys(o).filter(k => GNORM[k]);
    return `<div class="glab"><div class="glab__h"><span>${pesc(o.kind || 'ABG / Lab')}</span>${o.o2 ? `<small>🫁 ${pesc(o.o2)}</small>` : ''}</div><div class="glab__g">${keys.map(k => {
      const n = GNORM[k], v = o[k], f = k === 'fio2' ? '' : v < n[0] ? 'L' : v > n[1] ? 'H' : '';
      return `<div class="glab__c ${f ? 'is-' + f : ''}"><span dir="ltr">${n[4] || 'pH'}</span><b dir="ltr">${typeof v === 'number' ? v.toFixed(n[3]) : pesc(v)}${f === 'H' ? ' ▲' : f === 'L' ? ' ▼' : ''}</b><small dir="ltr">${n[2]}${k === 'fio2' ? '' : ` • ${n[0]}–${n[1]}`}</small></div>`;
    }).join('')}</div></div>`;
  }
  function gFig(f) {
    if (!f) return '';
    const IMG = Object.assign({}, ...courses().map(c => c.IMG || {})); // تصویرهای همه دوره‌ها (فعلاً نگار)
    const ks = [].concat(f.k).filter(k => IMG[k]);
    if (!ks.length) return '';
    const ls = f.l ? [].concat(f.l) : [];
    return `<figure class="gfig">${ks.map((k, i) => `<div class="gfig__i"><img src="${IMG[k]}" alt="${pesc(ls[i] || f.cap || '')}" draggable="false">${ls[i] ? `<span>${ls[i]}</span>` : ''}</div>`).join('')}${f.cap ? `<figcaption>${f.cap}</figcaption>` : ''}</figure>`;
  }
  const gCase = c => (c && c.length ? `<div class="case"><div class="case__h">🩺 ${PT('پرونده بیمار', 'Patient chart')}</div>${c.map(r => `<div class="case__r"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}</div>` : '');
  function grandModal() {
    const sm = summary();
    const prog = LS.json('academy.grand', {});
    const m = pModal(`<header class="acsheet__h acsheet__h--icu"><span>🚨</span><div><h3>${PT('شیفت اورژانس: کیس‌های ترکیبی ICU', 'ICU emergency shift: combined cases')}</h3><small>${PT('Grand Rounds — الکترولیت + گاز خون + معاینه تغذیه‌محور در یک بیمار', 'Grand Rounds — electrolytes + blood gas + nutrition-focused exam in one patient')}</small></div><button class="iconbtn" data-close aria-label="${PT('بستن', 'Close')}">✕</button></header>
      <div class="acsheet__b">
        ${sm.grand ? '' : `<div class="acwarn">${PT('🔒 این بخش با داشتن حداقل ۲ دوره (پلن آموزشی یا Pro) یا پکیج الماس باز می‌شود. پیش‌نمایش کیس‌ها را ببین:', '🔒 This section unlocks with at least 2 courses (Standard or Pro) or the Diamond package. Preview the cases:')}</div>`}
        <div class="gcases">${GR().map(gLoc).map((c, i) => { const p = prog[c.id]; return `<button class="gcase ${p && p.passed ? 'is-done' : ''}" data-gcase="${c.id}"><span class="gcase__n">${nf(i + 1)}</span><span class="gcase__t"><b>${c.title}</b><small>${c.who}</small><span class="gcase__tags">${c.domains.map(d => `<i style="--dc:${DOM[d][2]}">${DOM[d][0]} ${DOM[d][1]}</i>`).join('')}</span></span><span class="gcase__s">${p ? (p.passed ? '✓ ' : '') + nf(Math.round(p.best * 100)) + PT('٪', '%') : PT(nf(c.steps.length) + ' مرحله', nf(c.steps.length) + ' steps')}</span></button>`; }).join('')}</div>
        ${sm.grand ? '' : `<div class="modal__btns"><button class="btn btn--gold btn--lg" data-ac="store" data-tier="3">💎 ${PT('پکیج الماس', 'Diamond package')}</button></div>`}
      </div>`, { cls: 'modal--sheet' });
    m.el.addEventListener('click', e => {
      const b = e.target.closest('[data-gcase]'); if (!b) return;
      if (!summary().grand) return upsell('grand');
      m.close(); grandRun(b.dataset.gcase);
    });
  }
  function grandRun(id) {
    const c = gLoc(GR().find(x => x.id === id)); if (!c) return;
    const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
    const steps = c.steps.map(s => {
      const o = Object.assign({}, s);
      if (s.t === 'mcq') { const ord = shuffle(s.opts.map((_, i) => i)); o.view = ord.map(i => s.opts[i]); o.correct = ord.indexOf(0); }
      if (s.t === 'order') { let b = shuffle(s.steps); for (let i = 0; i < 5 && b.join('|') === s.steps.join('|'); i++) b = shuffle(s.steps); o.bank = b; o.ans = []; }
      return o;
    });
    const P = { i: -1, ok: 0, n: steps.length, by: {}, start: Date.now() };
    const root = document.createElement('div');
    root.className = 'player gplayer';
    root.style.setProperty('--wc', '#e5484d'); root.style.setProperty('--wd', '#b4282d');
    root.innerHTML = `<header class="player__top"><button class="iconbtn" data-g="quit" aria-label="${PT('خروج', 'Quit')}">✕</button><div class="pbar"><i></i></div><div class="p-meta"><span class="p-count"></span></div></header><div class="player__body"></div><footer class="player__foot"></footer>`;
    document.body.appendChild(root); document.body.classList.add('no-scroll');
    const body = root.querySelector('.player__body'), foot = root.querySelector('.player__foot');
    const top = () => { root.querySelector('.pbar i').style.width = Math.max(3, (P.i + 1) / P.n * 100) + '%'; root.querySelector('.p-count').textContent = P.i < 0 ? '🚑' : nf(P.i + 1) + ' / ' + nf(P.n); };
    const close = () => { root.remove(); document.body.classList.remove('no-scroll'); if (MODE === 'dash') renderDash(); };
    function brief() {
      top();
      body.innerHTML = `<div class="qwrap"><div class="learn"><article class="learn__card"><span class="qtag qtag--stage">🚨 ${PT('شیفت اورژانس ICU', 'ICU emergency shift')}</span><h2>${c.title}</h2><div class="learn__body"><div class="rbrief"><b>${c.who}</b><p>${c.brief}</p></div>${gFig(c.fig)}${gCase(c.chart)}${gLab(c.lab)}<p class="muted">${PT('در هر مرحله یکی از سه مهارت (💧 الکترولیت، 🫁 گاز خون، 🔍 NFPE) را به کار می‌گیری. توضیح هر پاسخ را بخوان؛ برای قبولی ۷۰٪ لازم است.', 'Each step uses one of three skills (💧 electrolytes, 🫁 blood gas, 🔍 NFPE). Read the explanation after every answer; 70% is needed to pass.')}</p></div></article></div></div>`;
      foot.className = 'player__foot';
      foot.innerHTML = `<div class="foot__row"><span></span><button class="btn btn--wc btn--lg" data-g="next">${PT('شروع ویزیت 🚑', 'Start the visit 🚑')}</button></div>`;
    }
    function render() {
      const s = steps[P.i]; top();
      const dm = domOf(s.d);
      let h = `<span class="qtag qtag--stage" style="--dc:${dm[2]}">${dm[0]} ${dm[1]} • ${PT('مرحله', 'Step')} ${nf(P.i + 1)}: ${s.stage}</span><h2 class="q">${s.q}</h2>${gFig(s.fig)}${gCase(s.case)}${gLab(s.lab)}`;
      if (s.t === 'mcq') h += `<div class="opts">${s.view.map((o, i) => `<button class="opt" data-g="sel" data-i="${i}"><kbd>${nf(i + 1)}</kbd><span>${o}</span></button>`).join('')}</div>`;
      if (s.t === 'tf') h += `<div class="opts opts--tf"><button class="opt opt--tf" data-g="sel" data-i="1"><span>✓ ${PT('درست', 'True')}</span></button><button class="opt opt--tf" data-g="sel" data-i="0"><span>✗ ${PT('نادرست', 'False')}</span></button></div>`;
      if (s.t === 'num') h += `<label class="numin"><input type="text" inputmode="decimal" dir="ltr" autocomplete="off" placeholder="${PT('عدد', 'Number')}"><span class="numin__u">${s.unit || ''}</span></label>`;
      if (s.t === 'order') h += `<ol class="order-ans"></ol><div class="chips chips--col order-bank"></div>`;
      body.innerHTML = `<div class="qwrap">${h}</div>`; body.scrollTop = 0;
      s.sel = null; s.state = null;
      if (s.t === 'order') drawOrder(s);
      foot.className = 'player__foot';
      foot.innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-g="skip">${PT('نمی‌دانم', 'I don’t know')}</button><button class="btn btn--wc btn--lg" data-g="check" disabled>${PT('بررسی', 'Check')}</button></div>`;
    }
    function drawOrder(s) {
      body.querySelector('.order-ans').innerHTML = s.ans.map((x, i) => `<li><button class="chip chip--on" data-g="oOut" data-i="${i}">${x}</button></li>`).join('') + Array.from({ length: s.steps.length - s.ans.length }, () => '<li class="ghost"></li>').join('');
      body.querySelector('.order-bank').innerHTML = s.bank.filter(x => !s.ans.includes(x)).map(x => `<button class="chip" data-g="oIn" data-s="${pesc(x)}">${x}</button>`).join('');
      const ck = foot.querySelector('[data-g="check"]'); if (ck) ck.disabled = s.ans.length !== s.steps.length;
    }
    const toNum = v => parseFloat(String(v).replace(/[۰-۹]/g, ch => String(ch.charCodeAt(0) - 1776)).replace(/[٫,]/g, '.'));
    function check(skip) {
      const s = steps[P.i]; if (s.state) return;
      let ok = false;
      if (!skip) {
        if (s.t === 'mcq') ok = s.sel === s.correct;
        if (s.t === 'tf') ok = (s.sel === 1) === s.a;
        if (s.t === 'num') ok = Math.abs(toNum(body.querySelector('input').value) - s.ans) <= (s.tol || 0) + 1e-9;
        if (s.t === 'order') ok = s.ans.join('|') === s.steps.join('|');
      }
      s.state = ok ? 'ok' : 'bad';
      if (ok) P.ok++;
      const d = s.d || 'all'; P.by[d] = P.by[d] || { ok: 0, n: 0 }; P.by[d].n++; if (ok) P.by[d].ok++;
      body.querySelectorAll('[data-g="sel"]').forEach(x => { const i = +x.dataset.i; const right = s.t === 'mcq' ? i === s.correct : (i === 1) === s.a; if (right) x.classList.add('is-right'); else if (i === s.sel) x.classList.add('is-wrong'); x.disabled = true; });
      if (s.t === 'num') { const inp = body.querySelector('input'); inp.disabled = true; inp.parentNode.classList.add(ok ? 'is-right' : 'is-wrong'); }
      const right = s.t === 'mcq' ? s.opts[0] : s.t === 'tf' ? (s.a ? PT('درست', 'True') : PT('نادرست', 'False')) : s.t === 'num' ? `${nf(s.ans, 2)} ${s.unit || ''}` : '<ol class="fb__ol">' + s.steps.map(x => `<li>${x}</li>`).join('') + '</ol>';
      foot.className = 'player__foot fb ' + (ok ? 'fb--ok' : 'fb--bad');
      foot.innerHTML = `<div class="fb__in"><div class="fb__icon">${ok ? '✓' : '✗'}</div><div class="fb__txt"><div class="fb__t">${ok ? PT('تصمیم درست! 👏', 'Right call! 👏') : PT('این تصمیم بهترین نبود', 'Not the best decision')}</div>${ok ? '' : `<div class="fb__ans"><b>${PT('پاسخ درست:', 'Correct answer:')}</b> ${right}</div>`}${s.why ? `<details class="fb__why" open><summary>${PT('چرا؟', 'Why?')}</summary><div>${s.why}</div></details>` : ''}</div></div><button class="btn ${ok ? 'btn--green' : 'btn--red'} btn--lg fb__btn" data-g="next">${PT('ادامه', 'Continue')}</button>`;
      pSfx(ok ? 'correct' : 'wrong');
    }
    function finish() {
      const acc = P.ok / P.n, passed = acc >= 0.7;
      const prog = LS.json('academy.grand', {});
      const prev = prog[c.id];
      prog[c.id] = { best: Math.max(acc, prev ? prev.best : 0), passed: passed || !!(prev && prev.passed), at: Date.now() };
      LS.put('academy.grand', prog);
      root.querySelector('.pbar i').style.width = '100%';
      body.innerHTML = `<div class="res ${passed ? '' : 'res--fail'}"><div class="res__m"><div class="big-i">${passed ? '🏆' : '🚑'}</div></div><h2 class="res__t">${passed ? PT('بیمار را از بحران عبور دادی! 🩺', 'You got the patient through the crisis! 🩺') : PT('بیمار به مراقبت بیشتری نیاز داشت', 'The patient needed more care')}</h2>
        <p class="res__sub">${c.title}</p>
        <div class="bw">${Object.keys(P.by).map(d => { const r = P.by[d], dm = domOf(d); return `<div class="bw__r"><span class="bw__s" style="background:${dm[2]}">${dm[0]}</span><span class="bw__bar"><i style="width:${r.ok / r.n * 100}%;background:${dm[2]}"></i></span><b>${nf(r.ok)}/${nf(r.n)}</b></div>`; }).join('')}</div>
        <div class="tiles"><div class="tile tile--acc"><div class="tile__h">${PT('نمره', 'Score')}</div><div class="tile__v">🎯 ${nf(Math.round(acc * 100))}${PT('٪', '%')}</div></div><div class="tile tile--time"><div class="tile__h">${PT('زمان', 'Time')}</div><div class="tile__v">⏱ ${nf(Math.round((Date.now() - P.start) / 60000))} ${PT('دقیقه', 'min')}</div></div></div>
        ${c.pearl ? `<div class="note">💡 ${c.pearl}</div>` : ''}</div>`;
      foot.className = 'player__foot';
      foot.innerHTML = `<div class="foot__row"><button class="btn btn--ghost" data-g="again">${PT('تکرار کیس', 'Repeat case')}</button><button class="btn btn--brand btn--lg" data-g="done">${PT('ادامه', 'Continue')}</button></div>`;
      if (passed) pConfetti(); pSfx(passed ? 'done' : 'fail');
      if (Object.keys(prog).filter(k => prog[k].passed).length >= GR().length && passed) pToast(PT('🏅 نشان «فرمانده شیفت ICU» گرفتی!', '🏅 You earned the “ICU Shift Commander” badge!'));
    }
    root.addEventListener('click', e => {
      const b = e.target.closest('[data-g]'); if (!b) return;
      const a = b.dataset.g, s = steps[P.i];
      if (a === 'quit') { if (P.i < 0 || confirm(PT('از این کیس خارج شوی؟ پیشرفت این ویزیت ذخیره نمی‌شود.', 'Leave this case? Progress in this visit will not be saved.'))) close(); return; }
      if (a === 'done') return close();
      if (a === 'again') { root.remove(); document.body.classList.remove('no-scroll'); return grandRun(id); }
      if (a === 'next') { P.i++; return P.i >= P.n ? finish() : render(); }
      if (a === 'check') return check(false);
      if (a === 'skip') return check(true);
      if (!s || s.state) return;
      if (a === 'sel') { s.sel = +b.dataset.i; body.querySelectorAll('[data-g="sel"]').forEach(x => x.classList.toggle('is-sel', x === b)); foot.querySelector('[data-g="check"]').disabled = false; pSfx('select'); }
      if (a === 'oIn') { s.ans.push(b.dataset.s); drawOrder(s); }
      if (a === 'oOut') { s.ans.splice(+b.dataset.i, 1); drawOrder(s); }
    });
    root.addEventListener('input', e => { if (e.target.matches('input')) { const ck = foot.querySelector('[data-g="check"]'); if (ck) ck.disabled = !isFinite(toNum(e.target.value)); } });
    brief();
  }

  /* ================= گواهی‌نامه: کد رهگیری و کارت استوری ================= */
  function certCode(cid, s) {
    const c = courseDef(cid);
    const sig = b32enc(sha256(['trapo-cert', cid, s.profile.name, Math.round(s.final.score * 100), s.final.at].join('|'))).slice(0, 8);
    return c.codePrefix + '-' + sig.slice(0, 4) + '-' + sig.slice(4);
  }
  function recordCert(cid, s) {
    const all = LS.json('academy.certs', {});
    all[cid] = { name: s.profile.name, score: Math.round(s.final.score * 100), at: s.final.at, code: certCode(cid, s) };
    LS.put('academy.certs', all);
  }
  function storyCard(o) {
    const W = 1080, H = 1920, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    const font = (w, px) => `${w} ${px}px Vazirmatn, Tahoma, sans-serif`;
    const draw = mascotImg => {
      const gr = g.createLinearGradient(0, 0, W, H); gr.addColorStop(0, o.color); gr.addColorStop(1, o.dark || '#222'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
      g.globalAlpha = 0.12; g.fillStyle = '#fff'; for (let i = 0; i < 14; i++) { g.beginPath(); g.arc((i * 211) % W, (i * 397) % H, 40 + (i * 37) % 120, 0, 7); g.fill(); } g.globalAlpha = 1;
      const x = 80, y = 260, w = W - 160, h = 1400, r = 56;
      g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill();
      const dir = PT('rtl', 'ltr');
      g.direction = dir; g.textAlign = 'center'; g.fillStyle = '#fff';
      g.font = font(900, 64); g.fillText(PT(CFG.BRAND_FA, CFG.BRAND_EN), W / 2, 170);
      if (mascotImg) g.drawImage(mascotImg, W / 2 - 110, 300, 220, 275);
      g.fillStyle = o.dark || '#333'; g.font = font(900, 76); g.fillText(PT('گواهی پایان دوره 🎓', 'Certificate of completion 🎓'), W / 2, 680);
      g.fillStyle = '#6f7a80'; g.font = font(600, 40); g.fillText(PT('بدین‌وسیله گواهی می‌شود', 'This certifies that'), W / 2, 770);
      g.fillStyle = '#222'; g.font = font(900, 84); g.fillText(o.name, W / 2, 890, w - 80);
      g.fillStyle = '#6f7a80'; g.font = font(600, 40); g.fillText(PT('دوره آموزشی', 'has completed the course'), W / 2, 990);
      g.fillStyle = o.dark || '#333'; g.font = font(800, 46);
      const words = o.course.split(' '); let line = '', ly = 1060;
      words.forEach(wd => { const t = line ? line + ' ' + wd : wd; if (g.measureText(t).width > w - 120) { g.fillText(line, W / 2, ly); line = wd; ly += 62; } else line = t; }); g.fillText(line, W / 2, ly);
      g.fillStyle = o.color; g.font = font(900, 150); g.fillText(nf(o.score) + PT('٪', '%'), W / 2, ly + 210);
      g.fillStyle = '#6f7a80'; g.font = font(700, 38); g.fillText(PT('نمره امتحان نهایی', 'Final exam score'), W / 2, ly + 270);
      g.font = font(600, 34); g.fillText(PT('تاریخ: ', 'Date: ') + o.date, W / 2, 1560);
      g.direction = 'ltr'; g.font = '700 36px Nunito, monospace'; g.fillStyle = '#3c3c3c'; g.fillText('Tracking code: ' + o.code, W / 2, 1615);
      g.direction = dir; g.fillStyle = '#fff'; g.font = font(800, 44); g.fillText(o.brand + ' • ' + PT(CFG.BRAND_FA, CFG.BRAND_EN), W / 2, 1780);
      const url = cv.toDataURL('image/png');
      const m = pModal(`<h3>📸 ${PT('کارت استوری گواهی', 'Certificate story card')}</h3><img class="acstory" src="${url}" alt="${PT('کارت استوری گواهی', 'Certificate story card')}"><div class="modal__btns"><a class="btn btn--brand btn--lg" href="${url}" download="certificate-story-${o.code}.png">⬇️ ${PT('ذخیره تصویر', 'Save image')}</a>${navigator.canShare ? `<button class="btn btn--gold" data-share>📤 ${PT('اشتراک‌گذاری', 'Share')}</button>` : ''}<button class="btn btn--ghost" data-close>${PT('بستن', 'Close')}</button></div>`, { cls: 'modal--story' });
      const sh = m.el.querySelector('[data-share]');
      if (sh) sh.onclick = () => {
        const bin = atob(url.split(',')[1]), arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        const f = new File([arr], 'certificate.png', { type: 'image/png' });
        if (navigator.canShare({ files: [f] })) navigator.share({ files: [f], title: PT('گواهی پایان دوره', 'Certificate of completion') }).catch(() => { /* لغو شد */ });
        else pToast(PT('اشتراک فایل در این مرورگر ممکن نیست؛ تصویر را ذخیره کن', 'This browser can’t share files; save the image instead'), 'toast--bad');
      };
    };
    const go = () => {
      if (!o.mascot) return draw(null);
      const img = new Image();
      img.onload = () => draw(img); img.onerror = () => draw(null);
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(o.mascot.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ').replace(/var\(--brand\)/g, o.color).replace(/var\(--c\)/g, o.color).replace(/currentColor/g, '#000'));
    };
    if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('900 64px Vazirmatn'), document.fonts.load('600 40px Vazirmatn')]).then(go, go); else go();
  }

  /* ================= کد پشتیبان و بازیابی بدون سرور =================
   * نسخه ۲: همان سه کلید ثابت (سراسری، پیشرفت هر دوره، کدهای اشتراک بدون Device ID) + مقدارهای ابزارها.
   * کدهای پشتیبان نسخه ۱ (کلیدهای قدیمی) هم بازیابی می‌شوند. */
  const BK_V1_RE = /^(academy\.|[a-z][a-z0-9_-]*\.v1$|[a-z][a-z0-9_-]*\.tools$|last_valid_timestamp$)/;
  function backupString() {
    const K = STORE.KEYS, data = { global: null, courses: {}, tools: {}, license: null };
    data.global = (() => { try { return JSON.parse(localStorage.getItem(K.GLOBAL) || '{}'); } catch (e) { return {}; } })();
    const l = lic(); data.license = { codes: l.codes, seen: l.seen };
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.indexOf(K.COURSE_PREFIX) === 0) data.courses[k.slice(K.COURSE_PREFIX.length)] = localStorage.getItem(k);
      else if (/^[a-z][a-z0-9_-]*\.tools$/.test(k)) data.tools[k] = localStorage.getItem(k);
    }
    const b64 = b64enc(JSON.stringify({ v: 2, at: Date.now(), dev: deviceId(), data }));
    return 'ACDB2.' + b64 + '.' + hex(sha256('trapo-bk|' + b64)).slice(0, 16);
  }
  function mergeCodes(codes, seen) {
    const merged = lic();
    (codes || []).forEach(c => { if (merged.codes.indexOf(c) < 0) merged.codes.push(c); });
    merged.seen = Math.max(merged.seen || 0, seen || 0);
    saveLic(merged);
  }
  function restoreString(str) {
    const s = String(str || '').replace(/\s+/g, '');
    const m = s.match(/^ACDB([12])\.([A-Za-z0-9+/=]+)\.([0-9a-f]{16})$/);
    if (!m) return { ok: false, msg: PT('قالب کد پشتیبان درست نیست (باید با ACDB شروع شود).', 'This is not a valid backup code (it must start with ACDB).') };
    m.splice(1, 1); // [کل، داده، چک‌سام]؛ کدهای ACDB1 قدیمی بدون بررسی چک‌سام پذیرفته می‌شوند (دسترسی فقط با کدهای امضاشده است)
    if (/^ACDB2/.test(s) && hex(sha256('trapo-bk|' + m[1])).slice(0, 16) !== m[2]) return { ok: false, msg: PT('امضای امنیتی (Checksum) کد پشتیبان نمی‌خواند؛ کد ناقص کپی شده یا دستکاری شده است.', 'The backup checksum does not match; the code was copied incompletely or altered.') };
    let o; try { o = JSON.parse(b64dec(m[1])); } catch (e) { return { ok: false, msg: PT('کد پشتیبان خراب است.', 'The backup code is corrupted.') }; }
    if (!o || (o.v !== 1 && o.v !== 2) || !o.data) return { ok: false, msg: PT('نسخه کد پشتیبان پشتیبانی نمی‌شود.', 'This backup version is not supported.') };
    const K = STORE.KEYS;
    if (o.v === 2) {
      const d = o.data, g = d.global || {};
      // تنظیمات و پروفایل جایگزین می‌شوند؛ فهرست بیت دوره‌ها و نسخه طرح این دستگاه حفظ می‌شود
      Object.keys(g).forEach(f => { if (f !== 'courses' && f !== 'schema') LS.put('academy.' + f, g[f]); });
      Object.keys(d.courses || {}).forEach(id => { try { localStorage.setItem(STORE.courseKey(id), d.courses[id]); } catch (e) { /* */ } });
      Object.keys(d.tools || {}).forEach(k => { try { localStorage.setItem(k, d.tools[k]); } catch (e) { /* */ } });
      if (d.license) mergeCodes(d.license.codes, d.license.seen);
    } else {
      // پشتیبان نسخه ۱ (کلیدهای قدیمی academy.* و <id>.v1)
      Object.keys(o.data).forEach(k => {
        if (!BK_V1_RE.test(k) || k === 'academy.device') return;
        const v = o.data[k], cm = /^([a-z][a-z0-9_-]*)\.v1$/.exec(k);
        if (cm) { try { localStorage.setItem(STORE.courseKey(cm[1]), v); } catch (e) { /* */ } return; }
        if (/\.tools$/.test(k)) { try { localStorage.setItem(k, v); } catch (e) { /* */ } return; }
        if (k === 'last_valid_timestamp') { LS.set(k, String(Math.max(+v || 0, +LS.raw(k) || 0))); return; }
        if (k === LIC_KEY) { let b = {}; try { b = JSON.parse(v) || {}; } catch (e) { /* */ } mergeCodes(b.codes, b.seen); return; }
        LS.set(k, v);
      });
    }
    return { ok: true, at: o.at, other: o.dev !== deviceId() };
  }
  function backupModal() {
    const str = backupString();
    const m = pModal(`<div class="big-i">📦</div><h3>${PT('کد پشتیبان', 'Backup code')}</h3><p class="muted">${PT('همه پیشرفت سه دوره، پروفایل، گواهی‌ها، کلینیک خطاها و کدهای اشتراک در این رشته (Base64 با امضای امنیتی) است. آن را جایی امن نگه دار یا روی دستگاه دیگر بازیابی کن.', 'All progress, profile, certificates and subscription codes in one signed Base64 string.')}</p>
      ${copyBox(str, 6)}<p class="muted acsmall">${PT(`حجم: ${nf(Math.round(str.length / 1024))} کیلوبایت • کد اشتراک روی دستگاه دیگر به کد تازه نیاز دارد.`, `Size: ${nf(Math.round(str.length / 1024))} KB • a new device needs a new subscription code.`)}</p>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-cp>📋 ${PT('کپی کد پشتیبان', 'Copy backup code')}</button><a class="btn btn--ghost" download="academy-backup-${new Date().toISOString().slice(0, 10)}.txt" href="data:text/plain;charset=utf-8,${encodeURIComponent(str)}">⬇️ ${PT('ذخیره فایل', 'Save file')}</a><button class="btn btn--ghost" data-close>${PT('بستن', 'Close')}</button></div>`);
    m.el.querySelector('[data-cp]').onclick = () => copyText(str).then(ok => pToast(ok ? '📋 ' + PT('کد پشتیبان کپی شد', 'Copied') : PT('از کادر دستی کپی کن', 'Copy it manually'), ok ? '' : 'toast--bad'));
  }
  function restoreDialog() {
    const m = pModal(`<div class="big-i">🔄</div><h3>${PT('بازیابی اطلاعات', 'Restore data')}</h3><p class="muted">${PT('کد پشتیبان (ACDB1...) را بچسبان. پیشرفت فعلی این مرورگر با اطلاعات کد جایگزین می‌شود؛ کدهای اشتراک با هم جمع می‌شوند.', 'Paste a backup code (ACDB1...). Current progress is replaced; subscription codes are merged.')}</p>
      <textarea class="acbox" rows="6" dir="ltr" placeholder="ACDB1...."></textarea><div class="acerr" hidden></div>
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-go>${PT('بازیابی', 'Restore')}</button><label class="btn btn--ghost">📄 ${PT('از فایل', 'From file')}<input type="file" accept=".txt,text/plain" hidden></label><button class="btn btn--ghost" data-close>${PT('انصراف', 'Cancel')}</button></div>`);
    const ta = m.el.querySelector('textarea'), err = m.el.querySelector('.acerr');
    m.el.querySelector('input[type=file]').onchange = e => { const f = e.target.files[0]; if (f) f.text().then(t => { ta.value = t.trim(); }); };
    m.el.querySelector('[data-go]').onclick = () => {
      const r = restoreString(ta.value);
      if (!r.ok) { err.hidden = false; err.textContent = r.msg; return; }
      m.close(); pToast('✅ ' + PT('اطلاعات بازیابی شد', 'Data restored'));
      setTimeout(() => location.reload(), 700);
    };
  }

  /* ================= ماشین‌حساب سریع سر بالین (دکمه شناور) ================= */
  function fab() {
    const old = $$('.acfab');
    if (MODE !== 'course') { if (old) old.remove(); return; }
    const sm = summary();
    const any = courses().some(c => sm.per[c.id].tools);
    const label = PT('ماشین‌حساب سریع سر بالین', 'Bedside Quick-Calc'), html = `<span>🧮</span>${any ? '' : '<i>🔒</i>'}`;
    // دکمه موجود دوباره ساخته نمی‌شود (با هر جابه‌جایی تب)
    if (old && old.innerHTML === html && old.title === label) return;
    if (old) old.remove();
    const el = document.createElement('button');
    el.className = 'acfab no-print' + (any ? '' : ' is-locked');
    el.setAttribute('data-ac', 'quickcalc');
    el.setAttribute('aria-label', label);
    el.title = label;
    el.innerHTML = html;
    document.body.appendChild(el);
  }
  /* ماشین‌حساب سریع: پنجره و iframe هر دوره یک بار ساخته و بعد فقط پنهان/نمایان می‌شود؛
     باز کردن دوباره فوری است و عددهای واردشده هم می‌مانند. با تغییر زبان، پوسته یا اشتراک از نو ساخته می‌شود. */
  let QC = null;
  const qcSig = () => { const sm = summary(); return [LS.raw('academy.theme'), LS.raw('academy.lang'), (LS.json('academy.prefs', {}) || {}).zoom, courses().map(c => sm.per[c.id].tools ? 1 : 0).join('')].join('|'); };
  function qcBuild() {
    if (QC && QC.sig === qcSig() && document.body.contains(QC.el)) return QC;
    if (QC) QC.el.remove();
    const wrap = document.createElement('div');
    wrap.className = 'acqc'; // پنهان: کلاس modal ندارد تا «پنجره باز» حساب نشود
    wrap.hidden = true;
    wrap.innerHTML = `<div class="modal__card" role="dialog" aria-modal="true"><header class="acsheet__h"><span>⚡</span><div><h3>${PT('ماشین‌حساب سریع سر بالین', 'Bedside Quick-Calc')}</h3><small>${PT('بدون خروج از صفحه فعلی', 'Without leaving this page')}</small></div><button class="iconbtn" data-close aria-label="${PT('بستن', 'Close')}">✕</button></header><div class="acqtabs"></div></div>`;
    document.body.appendChild(wrap);
    QC = { el: wrap, sig: qcSig(), cur: null, open: false };
    const card = wrap.firstChild;
    const esc = e => { if (e.key === 'Escape' && QC && QC.el === wrap && QC.open) qcClose(); };
    document.addEventListener('keydown', esc);
    wrap.addEventListener('click', e => {
      if (e.target === wrap || e.target.closest('[data-close]')) return qcClose();
      const b = e.target.closest('[data-qc]'); if (b && b.dataset.qc !== QC.cur) qcShow(b.dataset.qc);
    });
    QC.card = card;
    return QC;
  }
  /** دوره مجموعه‌ای ابزارش را از یک حیطه می‌گیرد: حیطه فعلی، آخرین حیطه دیده‌شده یا مقدمه */
  function qcTarget(c) {
    if (!c || c.kind !== 'suite') return c && c.id;
    const cur = window.EA && EA.COURSE && EA.COURSE.parent === c.id ? EA.COURSE.id : null;
    const last = LS.raw('academy.last.' + c.id);
    return cur || (last && SUBC[last] ? last : c.modules[0].id);
  }
  /** iframe دوره را می‌سازد (اگر نبود) و نمایان می‌کند */
  function qcShow(id) {
    const q = qcBuild(), sm = summary();
    q.cur = id;
    q.card.querySelector('.acqtabs').innerHTML = courses().map(c => `<button class="acqtab ${c.id === rootOf(id) ? 'is-on' : ''}" ${sm.per[c.id].tools ? `data-qc="${qcTarget(c)}"` : 'disabled'} style="--cc:${c.color}">${c.icon} ${PT(c.toolsFa, c.toolsEn || c.nameEn)}${sm.per[c.id].tools ? '' : ' 🔒'}</button>`).join('');
    let f = q.card.querySelector(`.acframe[data-c="${id}"]`);
    if (!f) { f = document.createElement('iframe'); f.className = 'acframe'; f.dataset.c = id; f.title = PT('ماشین‌حساب', 'Calculator'); f.src = '?calc=' + id; q.card.appendChild(f); }
    q.card.querySelectorAll('.acframe').forEach(x => { x.hidden = x !== f; });
    return q;
  }
  function qcClose() {
    if (!QC || !QC.open) return;
    QC.open = false;
    const w = QC.el;
    w.classList.remove('is-in');
    setTimeout(() => { if (QC && QC.el === w && !QC.open) { w.hidden = true; w.className = 'acqc'; layers(); } }, 200);
  }
  function quickCalc(pick) {
    const sm = summary();
    const list = courses().filter(c => sm.per[c.id].tools);
    if (!list.length) return upsell('fab');
    const ok = x => !!x && access(x).tools;
    const cur = ok(pick) ? pick : (QC && ok(QC.cur) ? QC.cur : (window.EA && EA.COURSE && ok(EA.COURSE.id) ? EA.COURSE.id : qcTarget(list[0])));
    const q = qcShow(cur);
    q.open = true;
    q.el.className = 'modal modal--sheet modal--calc acqc';
    q.el.hidden = false; layers();
    requestAnimationFrame(() => requestAnimationFrame(() => q.el.classList.add('is-in')));
  }
  /** آماده‌سازی پنهان ماشین‌حساب دوره فعلی در زمان بیکاری (فقط روی دستگاه‌هایی که حافظه کافی دارند) */
  function qcWarm() {
    if (MODE !== 'course' || !(window.EA && EA.COURSE)) return;
    const n = navigator, id = EA.COURSE.id;
    if ((n.deviceMemory && n.deviceMemory < 4) || (n.connection && n.connection.saveData)) return;
    if (!access(id).tools || (QC && QC.card.querySelector(`.acframe[data-c="${id}"]`) && QC.sig === qcSig())) return;
    const go = () => { if (!(QC && QC.open)) qcShow(id); };
    if (window.requestIdleCallback) requestIdleCallback(go, { timeout: 4000 }); else setTimeout(go, 1500);
  }

  /* ================= روانی رابط: مکث انیمیشن‌های بیرون از دید و زیر پنجره‌ها ================= */
  const ANIM_SEL = '.pnode, .lvlb, .unit__b, .tip, .dhero, .dc, .dsoon, .decg, .dsec, .pcard, .ccard, .rail > *, .land section, .wjump';
  let animIO = null;
  function guardAnims() {
    if (!('IntersectionObserver' in window)) return;
    if (animIO) animIO.disconnect();
    animIO = new IntersectionObserver(es => es.forEach(e => {
      const el = e.target;
      if (!e.isIntersecting) { el.classList.add('ac-off'); return; }
      if (el.classList.contains('ac-off')) {
        // ورود به دید پس از شروع بیرون از صفحه: انیمیشن ورود بی‌درنگ (بدون تأخیر پلکانی)
        el.getAnimations().forEach(a => { const t = a.effect && a.effect.getTiming(); if (t && t.iterations !== Infinity && !a.currentTime) { try { a.effect.updateTiming({ delay: 0 }); } catch (x) { /* */ } } });
        el.classList.remove('ac-off');
      }
    }), { rootMargin: '160px 0px' });
    document.querySelectorAll(ANIM_SEL).forEach(el => animIO.observe(el));
  }
  /** پنجره یا صفحه درس باز است ← هرچه زیرش است مکث می‌کند */
  let held = null;
  function layers() {
    const on = !!document.querySelector('body > .modal:not([hidden]), body > .player');
    if (on && !held) {
      // مستقیم با Web Animations: بدون محاسبه دوباره سبک همه صفحه (برخلاف یک کلاس سراسری)
      held = (document.getAnimations ? document.getAnimations() : []).filter(a => {
        const t = a.effect && a.effect.target;
        return a.playState === 'running' && t && t.closest && !t.closest('body > .modal, body > .player, .toasts');
      });
      held.forEach(a => { try { a.pause(); } catch (e) { /* */ } });
    } else if (!on && held) {
      held.forEach(a => { try { if (a.playState === 'paused') a.play(); } catch (e) { /* */ } });
      held = null;
    }
  }
  function watchLayers() {
    if (!document.body) return;
    new MutationObserver(layers).observe(document.body, { childList: true });
    layers();
  }


  /* ######################################################################
     فاز ارزش افزوده: متن پرونده بالینی، کد تخفیف، فلش‌کارت شب امتحان،
     یادداشت شخصی، کیس بالینی امروز (همه دوره‌ها، فعلی و آینده)
     ###################################################################### */
  const plainOf = h => String(h == null ? '' : h).replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').trim();
  const djb = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) | 0; return h >>> 0; };
  const curState = () => (window.EA && EA.S && EA.S.get && EA.S.get()) || null;

  /* ================= ۱. متن استاندارد پرونده بالینی (ابزارها، ویژه Pro/VIP) =================
   * از خود فرم و نتیجه هر ابزار (ساختار یکسان در همه دوره‌ها: .tform / .thero / .ttile / .note) ساخته می‌شود؛
   * پس هر ابزار تازه در هر دوره تازه هم خودکار متن پرونده دارد. */
  const txtOf = el => (el ? el.textContent : '').replace(/\s+/g, ' ').trim();
  function panelData(panel) {
    const d = { tool: txtOf(panel.querySelector('.tpanel__h h2')), mode: txtOf(panel.querySelector('.tmode.is-on')), inputs: [], hero: null, rows: [], warn: [], tips: [] };
    panel.querySelectorAll('.tform .fld').forEach(f => {
      const lab = f.querySelector('.fld__l');
      const unit = lab && lab.querySelector('small') ? txtOf(lab.querySelector('small')) : '';
      const name = lab ? txtOf(lab).replace(unit, '').trim() : '';
      if (f.classList.contains('fld--chk')) { const c = f.querySelector('input'); if (c && c.checked) d.inputs.push('✔ ' + txtOf(f.querySelector('span'))); return; }
      const sel = f.querySelector('select'); if (sel) { d.inputs.push(`${name}: ${sel.options[sel.selectedIndex] ? txtOf(sel.options[sel.selectedIndex]) : ''}`); return; }
      const seg = f.querySelector('.seg__b.is-on'); if (seg) { d.inputs.push(`${name}: ${txtOf(seg)}`); return; }
      const inp = f.querySelector('input'); if (inp && String(inp.value).trim() !== '') d.inputs.push(`${name}: ${inp.value.trim()}${unit ? ' ' + unit : ''}`);
    });
    const res = panel.querySelector('.tout .tres');
    if (!res || res.classList.contains('tres--empty')) return d;
    const h = res.querySelector('.thero');
    if (h) d.hero = { k: txtOf(h.querySelector('small')), v: txtOf(h.querySelector('b')), sev: txtOf(h.querySelector('.sevc')) };
    res.querySelectorAll('.ttile').forEach(t => d.rows.push(`${txtOf(t.querySelector('small'))}: ${txtOf(t.querySelector('b'))}`));
    res.querySelectorAll('.note').forEach(n => (n.classList.contains('note--warn') ? d.warn : d.tips).push(txtOf(n).replace(/^[⚠️💡\s]+/u, '')));
    return d;
  }
  function clinicalNote(d) {
    const en = PT(false, true), dt = fdatetime(Date.now()), L = [];
    const B = s => '• ' + s;
    L.push(`📋 ${d.tool}${d.mode ? ' — ' + d.mode : ''}`);
    L.push((en ? 'Date/time: ' : 'تاریخ و ساعت: ') + dt);
    L.push('');
    L.push(en ? 'S/O — Patient data:' : 'داده‌های بیمار (S/O):');
    d.inputs.forEach(x => L.push(B(x)));
    L.push('');
    L.push(en ? 'A — Assessment:' : 'ارزیابی (A):');
    if (d.hero) L.push(B(`${d.hero.k}: ${d.hero.v}${d.hero.sev ? (en ? ` (severity: ${d.hero.sev})` : ` (شدت: ${d.hero.sev})`) : ''}`));
    d.rows.forEach(x => L.push(B(x)));
    if (d.tips.length) { L.push(''); L.push(en ? 'P — Plan / recommendations:' : 'برنامه و توصیه‌ها (P):'); d.tips.forEach(x => L.push(B(x))); }
    if (d.warn.length) { L.push(''); L.push(en ? '⚠️ Safety alerts:' : '⚠️ هشدارهای ایمنی:'); d.warn.forEach(x => L.push(B(x))); }
    L.push('');
    L.push(en ? `— Calculated with the ${CFG.BRAND_EN} educational tool; confirm doses and orders with the attending physician and local protocol.`
      : `— محاسبه با ابزار آموزشی ${CFG.BRAND_FA}؛ دوز و دستور نهایی با نظر پزشک معالج و پروتکل بخش تطبیق داده شود.`);
    return L.join('\n');
  }
  const CN_TITLE = () => PT('📋 متن استاندارد جهت ثبت در پرونده / برگ مشاوره', '📋 Standard text for the chart / consult sheet');
  function noteBoxHTML(text, locked) {
    return `<section class="cnote ${locked ? 'is-locked' : ''}" aria-label="${CN_TITLE()}">
      <header class="cnote__h"><b>${CN_TITLE()}</b><small>${locked ? PT('ویژه پلن Pro و VIP', 'Pro & VIP feature') : PT('خودکار از همین عددها؛ قبل از ثبت بازبینی کن', 'Built from these numbers; review before charting')}</small></header>
      <pre class="cnote__t" dir="auto">${pesc(text)}</pre>
      <div class="cnote__btns">${locked ? '' : `<button type="button" class="btn btn--brand btn--sm" data-cn="copy">📋 ${PT('کپی متن پرونده', 'Copy chart text')}</button><button type="button" class="btn btn--ghost btn--sm" data-cn="print">🖨️ ${PT('چاپ', 'Print')}</button>`}</div>
      ${locked ? `<div class="cnote__lock"><span>🔒</span><b>${PT('متن پرونده و برگ مشاوره آماده', 'Ready-made chart & consult text')}</b><small>${PT('با پلن Pro یا VIP، نتیجه هر محاسبه به یک یادداشت استاندارد S/O/A/P تبدیل می‌شود که با یک کلیک کپی می‌کنی.', 'With Pro or VIP, every calculation becomes a standard S/O/A/P note you copy in one click.')}</small><button type="button" class="btn btn--gold btn--sm" data-ac="store" data-tier="2" data-why="note">👑 ${PT('ارتقا به Pro / VIP', 'Upgrade to Pro / VIP')}</button></div>` : ''}
    </section>`;
  }
  const NOTE_SAMPLE = () => PT(`📋 سدیم — هیپوناترمی
تاریخ و ساعت: …

داده‌های بیمار (S/O):
• جنس: زن • سن: ۷۲ سال • وزن: ۵۵ kg
• سدیم سرم: ۱۱۴ mEq/L • مایع: سالین ۳٪

ارزیابی (A):
• افزایش مورد انتظار سدیم با ۱ لیتر: ۱۵٫۵ mEq/L (شدید)
• حجم برای رسیدن به هدف: …

برنامه و توصیه‌ها (P):
• بولوس ۱۰۰ تا ۱۵۰ میلی‌لیتر طی ۱۰ تا ۲۰ دقیقه …`, `📋 Sodium — Hyponatremia
S/O — Patient data: …
A — Assessment: …
P — Plan: …`);
  /** بعد از نمایش تب ابزارها: کادر متن پرونده کنار نتیجه، با هر تغییر عدد به‌روز می‌شود */
  let cnObs = null;
  function attachClinicalNote(cid) {
    const panel = document.querySelector('#view .tools .tpanel'); if (!panel) return;
    const out = panel.querySelector('.tout'); if (!out) return;
    const ok = access(cid).tools;
    const draw = () => {
      const d = panelData(panel);
      const ready = !!(d.hero || d.rows.length);
      const text = ok ? (ready ? clinicalNote(d) : PT('پس از وارد کردن همه عددهای لازم، متن پرونده این‌جا ساخته می‌شود.', 'Enter all required values and the chart text appears here.')) : NOTE_SAMPLE();
      let box = panel.querySelector('.cnote');
      const html = noteBoxHTML(text, !ok);
      if (!box) { out.insertAdjacentHTML('afterend', html); box = panel.querySelector('.cnote'); }
      else if (box.querySelector('.cnote__t').textContent !== text) box.querySelector('.cnote__t').textContent = text;
      box.classList.toggle('is-empty', ok && !ready);
    };
    draw();
    if (cnObs) cnObs.disconnect();
    cnObs = new MutationObserver(() => { cnObs.disconnect(); draw(); cnObs.observe(out, { childList: true, subtree: true, characterData: true }); });
    cnObs.observe(out, { childList: true, subtree: true, characterData: true });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.cnote [data-cn]'); if (!b) return;
    const t = b.closest('.cnote').querySelector('.cnote__t').textContent;
    if (b.dataset.cn === 'copy') return copyText(t).then(ok => pToast(ok ? '📋 ' + PT('متن پرونده کپی شد', 'Chart text copied') : PT('از کادر دستی کپی کن', 'Copy it manually'), ok ? '' : 'toast--bad'));
    printText(PT('متن پرونده بالینی', 'Clinical chart text'), [t]);
  });
  /** چاپ متن‌های ساده (متن پرونده، یادداشت‌ها) در A4 بدون بقیه صفحه */
  function printText(title, blocks) {
    const box = document.createElement('div');
    box.className = 'acprint';
    box.innerHTML = `<h1>${pesc(title)}</h1><p class="acprint__m">${pesc(CFG.BRAND_FA)} • ${pesc(fdatetime(Date.now()))}</p>` + blocks.map(b => `<pre dir="auto">${pesc(b)}</pre>`).join('');
    document.body.appendChild(box);
    document.body.classList.add('printing-text');
    window.print();
    setTimeout(() => { document.body.classList.remove('printing-text'); box.remove(); }, 700);
  }

  /* ================= ۲. کد تخفیف آفلاین =================
   * کدهای ثابت در CFG.PROMOS و کدهای سفارشی که پنل مدیر می‌سازد: NAME-PPEEEP-TTTT
   *   PP درصد (۰۱ تا ۶۰)، EEE روز انقضا از ۱ ژانویه ۲۰۲۴ (Base32)، P پلن (A همه، P پرو و الماس، V فقط الماس)،
   *   TTTT برچسب کنترلی. تخفیف فقط روی مبلغ سفارش اثر دارد؛ پنل مدیر هر کد را هنگام صدور دوباره بررسی می‌کند. */
  const PROMO_PLANS = { A: [1, 2, 3], P: [2, 3], V: [3] };
  const promoTag = (name, pp, eee, p) => b32enc(sha256('TRAPO-PROMO-1|' + name + '|' + pp + '|' + eee + '|' + p)).slice(0, 4);
  function parsePromo(raw) {
    const code = String(raw || '').toUpperCase().replace(/\s+/g, '').replace(/[–—_]/g, '-');
    if (!code) return null;
    const fixed = CFG.PROMOS[code];
    if (fixed) {
      if (fixed.until && Date.now() > fixed.until) return { ok: false, code, err: PT('مهلت این کد تخفیف تمام شده است.', 'This promo code has expired.') };
      return { ok: true, code, pct: fixed.pct, plans: fixed.plans || [1, 2, 3], label: fixed.fa || '', labelEn: fixed.en || fixed.fa || '' };
    }
    const m = /^([A-Z0-9]{2,12})-(\d{2})([0-9A-Z]{3})([APV])-([0-9A-Z]{4})$/.exec(code);
    if (!m) return { ok: false, code, err: PT('این کد تخفیف معتبر نیست.', 'This promo code is not valid.') };
    if (promoTag(m[1], m[2], m[3], m[4]) !== m[5]) return { ok: false, code, err: PT('این کد تخفیف معتبر نیست.', 'This promo code is not valid.') };
    const pct = +m[2], days = m[3].split('').reduce((v, ch) => v * 32 + B32.indexOf(ch), 0);
    if (!(pct >= 1 && pct <= 60)) return { ok: false, code, err: PT('این کد تخفیف معتبر نیست.', 'This promo code is not valid.') };
    if (EPOCH + (days + 1) * 864e5 < Date.now()) return { ok: false, code, err: PT('مهلت این کد تخفیف تمام شده است.', 'This promo code has expired.') };
    return { ok: true, code, pct, plans: PROMO_PLANS[m[4]], label: `کمپین ${m[1]}`, labelEn: `${m[1]} campaign`, until: EPOCH + (days + 1) * 864e5 };
  }
  const promoFits = (pr, tier) => !!(pr && pr.ok && pr.plans.indexOf(tier) >= 0);
  const promoPrice = (p, pr) => Math.round(p * (1 - pr.pct / 100) / 10000) * 10000;

  /* ================= ۴. فلش‌کارت شب امتحان ================= */
  const FC_DEMO = () => CFG.FLASH_DEMO_CARDS || 3;
  function flashDeck() {
    if (!(window.EA && EA.worlds)) return [];
    const out = [];
    EA.worlds.forEach(w => w.lessons.forEach(l => l.items.forEach((it, i) => {
      const id = l.id + ':' + i;
      if (it.t === 'learn' && it.title && it.body) out.push({ id, w, kind: 'gold', front: it.title, back: it.body });
      else if (it.t === 'numS' && it.hint) out.push({ id, w, kind: 'calc', front: plainOf(it.q), back: `<div class="fc__f" dir="auto">${it.hint}</div><div class="fc__ans">${PT('پاسخ این مثال:', 'Answer for this example:')} <b dir="ltr">${EA.fa ? EA.fa(it.ans, 2) : it.ans} ${it.unit || ''}</b></div>` });
    })));
    return out;
  }
  function flashModal() {
    if (!(window.EA && EA.worlds && EA.S)) return;
    const cid = EA.COURSE.id, s = EA.S.get();
    s.flash = s.flash || {};
    const full = flashDeck(), open = () => access(cid).lessons;
    const demoIds = new Set(full.slice(0, FC_DEMO()).map(c => c.id));
    const st = { w: 'all', queue: [], i: 0, flipped: false, known: 0, again: 0 };
    const root = document.createElement('div');
    root.className = 'fc'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    document.body.appendChild(root); document.body.classList.add('no-scroll');
    const deck = () => full.filter(c => st.w === 'all' || c.w.id === st.w);
    function build() {
      const d = deck();
      const rank = c => { const f = s.flash[c.id]; return f && f.k ? 2 : f && f.r ? 0 : 1; };
      st.queue = d.slice().sort((a, b) => rank(a) - rank(b) || full.indexOf(a) - full.indexOf(b));
      st.i = 0; st.flipped = false; st.known = 0; st.again = 0;
    }
    function locked(c) { return !open() && !demoIds.has(c.id); }
    function draw() {
      const d = deck(), c = st.queue[st.i];
      const knownAll = d.filter(x => s.flash[x.id] && s.flash[x.id].k).length;
      root.innerHTML = `<header class="fc__top">
          <button class="iconbtn" data-fc="x" aria-label="${PT('بستن', 'Close')}">✕</button>
          <div class="fc__ttl"><b>🗂️ ${PT('فلش‌کارت‌های مرور سریع', 'Quick-review flashcards')}</b><small>${PT(`${nf(d.length)} کارت • بلدم: ${nf(knownAll)}`, `${nf(d.length)} cards • known: ${nf(knownAll)}`)}${open() ? '' : PT(` • ${nf(FC_DEMO())} کارت اول رایگان`, ` • first ${nf(FC_DEMO())} free`)}</small></div>
          <div class="fc__bar"><i style="width:${st.queue.length ? Math.round(st.i / st.queue.length * 100) : 0}%"></i></div>
        </header>
        <nav class="fc__ws">${[['all', '🗂️', PT('همه', 'All'), 'var(--brand)']].concat(EA.worlds.map(w => [w.id, w.sym, w.name, w.color])).map(x => `<button class="fc__w ${st.w === x[0] ? 'is-on' : ''}" data-fcw="${x[0]}" style="--wc:${x[3]}"><b dir="ltr">${x[1]}</b><span>${x[2]}</span></button>`).join('')}</nav>
        <main class="fc__stage">${c ? cardHTML(c) : doneHTML()}</main>
        <footer class="fc__foot">${c ? (locked(c) ? `<button class="btn btn--gold btn--lg" data-ac="store" data-course="${cid}" data-why="flash">👑 ${PT('باز کردن همه کارت‌ها', 'Unlock every card')}</button>`
          : st.flipped ? `<button class="btn btn--ghost btn--lg fc__again" data-fc="again">🔄 ${PT('مرور مجدد', 'Review again')}</button><button class="btn btn--green btn--lg" data-fc="know">✅ ${PT('بلدم', 'I know it')}</button>`
            : `<button class="btn btn--brand btn--lg" data-fc="flip">↻ ${PT('برگرداندن کارت', 'Flip the card')}</button>`) : `<button class="btn btn--brand btn--lg" data-fc="restart">🔁 ${PT('یک دور دیگر', 'Another round')}</button>`}</footer>`;
    }
    function cardHTML(c) {
      const k = s.flash[c.id], lk = locked(c);
      return `<div class="fc__card ${st.flipped ? 'is-flipped' : ''} ${lk ? 'is-locked' : ''}" style="--wc:${c.w.color}" data-fc="${lk ? '' : 'flip'}" tabindex="0">
          <div class="fc__in">
            <div class="fc__face fc__face--f"><span class="fc__k">${c.kind === 'calc' ? '🧮 ' + PT('فرمول', 'Formula') : '⭐ ' + PT('نکته طلایی', 'Key point')} • ${c.w.name}</span><h2 dir="auto">${c.front}</h2><small>${lk ? '' : PT('بزن تا برگردد', 'Tap to flip')}</small>${k && k.k ? `<em class="fc__seen">✅ ${PT('بلد بودی', 'Known')}</em>` : ''}</div>
            <div class="fc__face fc__face--b"><span class="fc__k">${c.front}</span><div class="fc__body" dir="auto">${c.back}</div></div>
          </div>
          ${lk ? `<div class="fc__lock"><span>🔒</span><b>${PT('بقیه کارت‌ها با اشتراک این دوره', 'The rest of the deck comes with a subscription')}</b><small>${PT(`فقط ${nf(FC_DEMO())} کارت اول رایگان است. همه نکات طلایی، فرمول‌ها و مقادیر بحرانی شب امتحان با پلن آموزشی، Pro یا الماس.`, `Only the first ${nf(FC_DEMO())} cards are free. Every key point, formula and critical value comes with Standard, Pro or Diamond.`)}</small></div>` : ''}
        </div>
        <p class="fc__pos">${nf(st.i + 1)} / ${nf(st.queue.length)}</p>`;
    }
    function doneHTML() {
      return `<div class="fc__done">${EA.ui && EA.ui.mascot ? EA.ui.mascot('cheer', 'var(--brand)', 110) : '🎉'}<h2>${PT('این دور تمام شد!', 'Round complete!')}</h2><p>${PT(`بلدم: ${nf(st.known)} • مرور مجدد: ${nf(st.again)}`, `Known: ${nf(st.known)} • Review again: ${nf(st.again)}`)}</p></div>`;
    }
    function act(a) {
      const c = st.queue[st.i];
      if (a === 'x') return close();
      if (a === 'restart') { build(); return draw(); }
      if (!c || locked(c)) { if (c && locked(c)) upgradeModal(cid, 'flash'); return; }
      if (a === 'flip') { st.flipped = !st.flipped; pSfx('tap'); const el = root.querySelector('.fc__card'); if (el) el.classList.toggle('is-flipped', st.flipped); return drawFoot(); }
      if (a === 'know') { s.flash[c.id] = { k: (s.flash[c.id] && s.flash[c.id].k || 0) + 1, at: Date.now() }; st.known++; pSfx('correct'); }
      if (a === 'again') { const f = s.flash[c.id] || {}; s.flash[c.id] = { k: 0, r: (f.r || 0) + 1, at: Date.now() }; st.again++; st.queue.push(c); pSfx('tap'); }
      EA.S.save(); st.i++; st.flipped = false; draw();
    }
    function drawFoot() { const keep = root.querySelector('.fc__stage').innerHTML; draw(); root.querySelector('.fc__stage').innerHTML = keep; }
    function close() { root.remove(); document.body.classList.remove('no-scroll'); document.removeEventListener('keydown', key, true); }
    function key(e) {
      if (!document.body.contains(root) || document.querySelector('.modal')) return;
      if (e.key === 'Escape') return close();
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); return act('flip'); }
      if (st.flipped && (e.key === '1' || e.key === 'ArrowRight')) return act('again');
      if (st.flipped && (e.key === '2' || e.key === 'ArrowLeft')) return act('know');
    }
    root.addEventListener('click', e => {
      const w = e.target.closest('[data-fcw]'); if (w) { st.w = w.dataset.fcw; build(); pSfx('select'); return draw(); }
      const b = e.target.closest('[data-fc]'); if (b && b.dataset.fc) act(b.dataset.fc);
      else if (e.target.closest('.fc__card.is-locked')) upgradeModal(cid, 'flash');
    });
    document.addEventListener('keydown', key, true);
    build(); draw();
  }
  function flashCardHTML(cid) {
    const n = flashDeck().length, s = curState(), known = s && s.flash ? Object.keys(s.flash).filter(k => s.flash[k].k).length : 0, op = access(cid).lessons;
    return `<article class="pcard pcard--wide pcard--flash"><div class="pcard__i">🗂️</div><h3>${PT('فلش‌کارت‌های مرور سریع (شب امتحان)', 'Quick-review flashcards (exam night)')}</h3>
      <p>${PT(`${nf(n)} کارت دوطرفه از نکات طلایی، فرمول‌ها و مقادیر بحرانی • بلدم: ${nf(known)}`, `${nf(n)} two-sided cards: key points, formulas and critical values • known: ${nf(known)}`)}${op ? '' : PT(` • ${nf(FC_DEMO())} کارت اول رایگان`, ` • first ${nf(FC_DEMO())} free`)}</p>
      <button class="btn btn--brand btn--block" data-ac="flash">🗂️ ${PT('شروع مرور', 'Start reviewing')}</button></article>`;
  }

  /* ================= ۵. یادداشت‌های شخصی بالینی (پروفایل، چاپ، پشتیبان) ================= */
  function personalNotes() {
    const s = curState(); if (!s || !s.pnotes) return [];
    return Object.keys(s.pnotes).map(k => Object.assign({ key: k }, s.pnotes[k])).filter(n => n.t).sort((a, b) => b.at - a.at);
  }
  function notesHTML() {
    const list = personalNotes();
    return `<div class="acnotes"><h2 class="sh">📝 ${PT('یادداشت‌های شخصی بالینی من', 'My personal clinical notes')}</h2>
      ${list.length ? `<div class="acnotes__tools"><span class="muted">${PT(`${nf(list.length)} یادداشت`, `${nf(list.length)} notes`)}</span><button class="btn btn--ghost btn--sm" data-pnp>🖨️ ${PT('چاپ همه', 'Print all')}</button></div>
        ${list.map(n => `<article class="acnote" data-pnk="${pesc(n.key)}"><p class="acnote__q" dir="auto">${pesc(n.q || '')}</p>${n.a ? `<p class="acnote__a">✓ ${pesc(n.a)}</p>` : ''}<div class="acnote__t" dir="auto">${pesc(n.t)}</div><footer><small>${pesc(fdate(n.at))}</small><span><button class="btn btn--ghost btn--sm" data-pne>✏️ ${PT('ویرایش', 'Edit')}</button><button class="btn btn--ghost btn--sm" data-pnd>🗑️</button></span></footer></article>`).join('')}`
        : `<p class="muted acnotes__empty">${PT('بعد از جواب دادن به هر سؤال، دکمه «📝 یادداشت شخصی» را بزن تا نکته خودت را زیر همان سؤال ثبت کنی. همه این‌جا جمع می‌شوند و قابل چاپ‌اند.', 'After answering any question, tap “📝 Personal note” to save your own point under it. They all gather here and can be printed.')}</p>`}
    </div>`;
  }
  document.addEventListener('click', e => {
    if (!e.target.closest('.acnotes')) return;
    const s = curState(); if (!s) return;
    if (e.target.closest('[data-pnp]')) return printText(PT('یادداشت‌های شخصی بالینی', 'Personal clinical notes') + ' — ' + (EA.COURSE ? PT(EA.COURSE.nameFa, EA.COURSE.nameEn) : ''), personalNotes().map(n => `${n.q || ''}${n.a ? '\n✓ ' + n.a : ''}\n\n📝 ${n.t}\n(${fdate(n.at)})`));
    const card = e.target.closest('[data-pnk]'); if (!card) return;
    const k = card.dataset.pnk, n = s.pnotes && s.pnotes[k]; if (!n) return;
    if (e.target.closest('[data-pnd]')) { if (!confirm(PT('این یادداشت پاک شود؟', 'Delete this note?'))) return; delete s.pnotes[k]; EA.S.save(); card.remove(); return pToast(PT('یادداشت پاک شد', 'Note deleted')); }
    if (e.target.closest('[data-pne]')) {
      const m = pModal(`<h3>✏️ ${PT('ویرایش یادداشت', 'Edit note')}</h3><p class="muted" dir="auto">${pesc(n.q || '')}</p><textarea class="acbox" rows="6" maxlength="2000" dir="auto">${pesc(n.t)}</textarea><div class="modal__btns"><button class="btn btn--brand" data-sv>${PT('ذخیره', 'Save')}</button><button class="btn btn--ghost" data-close>${PT('انصراف', 'Cancel')}</button></div>`);
      m.el.querySelector('[data-sv]').onclick = () => { const v = m.el.querySelector('textarea').value.trim(); if (v) { n.t = v.slice(0, 2000); n.at = Date.now(); EA.S.save(); card.querySelector('.acnote__t').textContent = n.t; } m.close(); };
    }
  });

  /* ================= ۶. کیس بالینی امروز (صفحه اول) =================
   * هر روز (new Date().toDateString()) به‌صورت قطعی یک سؤال از یکی از دوره‌ها؛ یک بار در روز؛ +XP و الماس به همان دوره. */
  let DC_CACHE = null;
  function dailyCase() {
    const day = new Date().toDateString();
    if (DC_CACHE && DC_CACHE.day === day && DC_CACHE.lang === UILANG()) return DC_CACHE;
    // دوره‌های مجموعه‌ای (ترمینو) محتوایشان را فقط هنگام ورود به هر حیطه بارگذاری می‌کنند؛ کیس روزانه از دوره‌های تک
    const list = courses().filter(c => c.kind !== 'suite'); if (!list.length) return null;
    const h = djb('TRAPO-DAILY|' + day);
    const c = list[h % list.length];
    const prev = window.EA;
    let pick = null;
    try {
      window.EA = {};
      ENGINE.lang(c); c.content();
      const items = [];
      EA.worlds.forEach(w => w.lessons.forEach(l => l.items.forEach((it, i) => {
        if ((it.t === 'mcq' && it.opts && it.opts.length >= 3) || it.t === 'tf') items.push({ it, key: l.id + ':' + i, w: { id: w.id, name: w.name, color: w.color, sym: w.sym } });
      })));
      const x = items[(h >>> 7) % items.length];
      if (x) {
        const it = x.it;
        let opts = it.t === 'tf' ? [PT('درست', 'True'), PT('نادرست', 'False')] : it.opts.slice(), right = it.t === 'tf' ? (it.a ? 0 : 1) : (it.a || 0);
        if (it.t === 'mcq') { const ord = opts.map((_, i) => i).sort((a, b) => djb(day + a) - djb(day + b)); opts = ord.map(i => it.opts[i]); right = ord.indexOf(right); }
        pick = { day, lang: UILANG(), cid: c.id, key: x.key, w: x.w, kind: it.t, q: it.q, opts, right, why: it.why || '', tfText: it.t === 'tf' };
      }
    } catch (err) { console.warn('[academy] daily case', err); } finally { window.EA = prev; }
    DC_CACHE = pick;
    return pick;
  }
  const DC_XP = () => CFG.DAILY_CASE_XP || 15, DC_GEMS = () => CFG.DAILY_CASE_GEMS || 5;
  function dailyCaseHTML() {
    const d = dailyCase(); if (!d) return '';
    const c = AC[d.cid], done = LS.json('academy.dcase', null), solved = done && done.day === d.day ? done : null;
    const opts = d.opts.map((o, i) => {
      const cls = solved ? (i === d.right ? 'is-right' : i === solved.pick ? 'is-wrong' : '') : '';
      return `<button class="dcase__o ${cls}" data-dco="${i}" ${solved ? 'disabled' : ''}><kbd>${nf(i + 1)}</kbd><span>${o}</span></button>`;
    }).join('');
    return `<section class="dcase ${solved ? (solved.ok ? 'is-ok' : 'is-bad') : ''}" style="--cc:${c.color};--cd:${c.dark};--wc:${d.w.color}" aria-label="${PT('کیس بالینی امروز', 'Today’s clinical case')}">
      <header class="dcase__h"><span class="dcase__star">🌟</span><div><b>${PT('کیس بالینی امروز', 'Today’s clinical case')}</b><small>${c.icon} ${PT(c.nameFa, c.nameEn)} • ${d.w.name} • ${fdate(Date.now())}</small></div><span class="dcase__rw"><bdi>+${nf(DC_XP())} XP</bdi> • <bdi>+${nf(DC_GEMS())} 💎</bdi></span></header>
      <div class="dcase__q" dir="auto">${d.tfText ? PT('درست یا نادرست؟ ', 'True or false? ') : ''}${d.q}</div>
      <div class="dcase__opts ${d.tfText ? 'dcase__opts--tf' : ''}">${opts}</div>
      ${solved ? `<div class="dcase__res">${solved.ok ? PT(`🎉 <b>آفرین دکتر!</b> +${nf(DC_XP())} XP و +${nf(DC_GEMS())} 💎 در دوره ${c.nameFa} ذخیره شد${solved.claimed ? '' : ' (با ورود به دوره دریافت می‌کنی)'}.`, `🎉 <b>Well done, doctor!</b> +${nf(DC_XP())} XP and +${nf(DC_GEMS())} 💎 saved to ${c.nameEn}${solved.claimed ? '' : ' (you’ll receive them when you open the course)'}.`) : PT(`<b>این بار نشد.</b> پاسخ درست مشخص شده است.`, `<b>Not this time.</b> The correct answer is marked.`)} <span class="muted">${PT('کیس بعدی: فردا 🌅', 'Next case: tomorrow 🌅')}</span></div>${d.why ? `<details class="dcase__why" open><summary>${PT('چرا؟', 'Why?')}</summary><div dir="auto">${d.why}</div></details>` : ''}` : `<p class="dcase__hint">${PT('فقط یک بار در روز می‌توانی جواب بدهی؛ با دقت انتخاب کن.', 'You can answer only once a day — choose carefully.')}</p>`}
    </section>`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.dcase [data-dco]'); if (!b || b.disabled) return;
    const d = dailyCase(); if (!d) return;
    const done = LS.json('academy.dcase', null); if (done && done.day === d.day) return;
    const i = +b.dataset.dco, ok = i === d.right;
    LS.put('academy.dcase', { day: d.day, cid: d.cid, key: d.key, pick: i, ok, at: Date.now(), claimed: false });
    if (ok) {
      const rw = LS.json('academy.rewards', {}) || {};
      const r = rw[d.cid] || { xp: 0, gems: 0 }; r.xp += DC_XP(); r.gems += DC_GEMS(); rw[d.cid] = r;
      LS.put('academy.rewards', rw);
      pSfx('done'); pConfetti(90);
    } else pSfx('wrong');
    const sec = b.closest('.dcase'); if (sec) sec.outerHTML = dailyCaseHTML();
  });
  /** پاداش‌های کیس روزانه هنگام ورود به همان دوره به حسابش اضافه می‌شود */
  function claimRewards(cid) {
    const rw = LS.json('academy.rewards', {}) || {}, r = rw[cid];
    if (!r || !(r.xp || r.gems) || !(window.EA && EA.S)) return;
    const s = EA.S.get();
    s.gems = (s.gems || 0) + (r.gems || 0);
    try { if (r.xp) EA.S.addXp(r.xp); } catch (e) { s.xp = (s.xp || 0) + r.xp; }
    EA.S.save();
    delete rw[cid]; LS.put('academy.rewards', rw);
    const dc = LS.json('academy.dcase', null); if (dc && dc.cid === cid) { dc.claimed = true; LS.put('academy.dcase', dc); }
    setTimeout(() => EA.ui && EA.ui.toast(PT(`🌟 پاداش کیس روزانه: +${nf(r.xp)} XP و +${nf(r.gems)} 💎`, `🌟 Daily case reward: +${nf(r.xp)} XP and +${nf(r.gems)} 💎`)), 1100);
  }

  /* ================= دوره‌های مجموعه‌ای (ترمینو): صفحه انتخاب حیطه، پیش‌نیاز و پیشرفت کل =================
   * دوره مجموعه‌ای یک کارت در صفحه اول دارد؛ با ورود، صفحه انتخاب حیطه‌ها باز می‌شود.
   * هر حیطه یک دوره کامل با همه امکانات است (پیشرفت، قلب، لیگ، کاراکتر، کلینیک خطا، گواهی …)
   * ولی اشتراکش همان اشتراک دوره مادر است و حیطه «مقدمه» پیش‌نیاز همه حیطه‌های دیگر است. */
  let SUITE = null;
  const isSuite = c => !!(c && c.kind === 'suite');
  const subsOf = c => (c && c.modules ? c.modules.map(m => SUBC[m.id]).filter(Boolean) : []);
  const subState = id => LS.json(STORE.courseKey(id), null);
  /** پیشرفت حیطه پیش‌نیاز: درس‌های تمام‌شده، کل درس‌ها و قبولی امتحان نهایی */
  function prereqInfo(sub) {
    const P = sub && sub.prereq ? SUBC[sub.prereq] : null;
    if (!P) return null;
    const s = subState(P.id) || {}, total = (P.stats || {}).lessons || 1, done = Object.keys(s.done || {}).length;
    return { P, done, total, passed: !!(s.final && s.final.passed) };
  }
  /** آیا پیش‌نیاز این حیطه گذرانده شده؟ (قاعده در CFG.PREREQ_RULE) */
  function prereqDone(sub) {
    const i = prereqInfo(sub);
    if (!i) return true;
    return CFG.PREREQ_RULE === 'lessons' ? i.done >= i.total || i.passed : i.passed;
  }
  /** وضعیت کل دوره مجموعه‌ای برای کارت صفحه اول: درس‌ها و خطاهای همه حیطه‌ها، گواهی وقتی همه گذرانده شوند */
  function suiteState(c) {
    const subs = subsOf(c), all = subs.map(d => [d, subState(d.id)]).filter(x => x[1]);
    if (!all.length) return null;
    const done = {}, mistakes = [];
    all.forEach(([d, s]) => { Object.keys(s.done || {}).forEach(k => { done[d.id + ':' + k] = s.done[k]; }); (s.mistakes || []).forEach(k => mistakes.push(d.id + ':' + k)); });
    const passed = subs.length && subs.every(d => { const s = subState(d.id); return s && s.final && s.final.passed; });
    const prof = all.map(x => x[1]).find(s => s.profile);
    return { done, mistakes, final: passed ? { passed: true } : null, profile: prof ? prof.profile : null };
  }
  function lockModal(sub) {
    const i = prereqInfo(sub);
    const P = i.P, pct = Math.round(i.done / i.total * 100);
    pModal(`<div class="big-i">🧩</div><h3>${PT(`اول «${P.nameFa}» را تمام کن`, `Finish “${P.nameEn}” first`)}</h3>
      <p>${PT(`«${P.nameFa}» (مقدمه ترمینولوژی) پیش‌نیاز همه حیطه‌هاست: ساخت واژه، ریشه، پیشوند و پسوند را آن‌جا یاد می‌گیری و بعد ${sub.nameFa} و بقیه حیطه‌ها را خیلی راحت‌تر می‌خوانی.`, `“${P.nameEn}” (Introduction to terminology) is the prerequisite for every module: you learn word building, roots, prefixes and suffixes there, and then ${sub.nameEn} and the other modules become much easier.`)}</p>
      <div class="suite__pre"><div class="dc__bar"><i style="width:${Math.max(pct, i.done ? 4 : 0)}%"></i></div><small>${PT(`${nf(i.done)} از ${nf(i.total)} درس • ${CFG.PREREQ_RULE === 'lessons' ? 'همه درس‌ها را تمام کن' : 'امتحان نهایی را قبول شو'}`, `${nf(i.done)} of ${nf(i.total)} lessons • ${CFG.PREREQ_RULE === 'lessons' ? 'finish every lesson' : 'pass the final exam'}`)}</small></div>
      <div class="modal__btns"><a class="btn btn--brand btn--lg" href="?course=${P.id}">${PT(`رفتن به ${P.nameFa}`, `Go to ${P.nameEn}`)} ${PT('←', '→')}</a><button class="btn btn--ghost" data-close>${PT('بستن', 'Close')}</button></div>`);
  }
  /** پرانتز لاتین درون متن فارسی کارت (مثل «(Disease and Treatment)») جدا و چپ‌به‌راست */
  const bil = s => String(s == null ? '' : s).replace(/\(([A-Za-z][^()]*)\)/g, '<bdi dir="ltr">($1)</bdi>');
  /** کارت هر حیطه در صفحه انتخاب (همان کارت دوره‌های صفحه اول + قفل پیش‌نیاز) */
  /** حیطه‌ای که محتوای انگلیسی ندارد: در حالت انگلیسی برچسب «محتوا به فارسی» می‌گیرد */
  const faOnly = d => UILANG() === 'en' && (d.langs || []).indexOf('en') < 0;
  function subCard(d, i) {
    let html = dCard(d, access(d.id), i);
    if (faOnly(d)) html = html.replace('<div class="dc__badges">', '<div class="dc__badges"><span class="actb actb--fa" lang="fa">Persian content • فارسی</span>');
    if (prereqDone(d)) return html;
    return html.replace('<article class="dc"', '<article class="dc dc--prereq"').replace('<div class="dc__badges">', `<div class="dc__badges"><span class="actb actb--lock">🔒 ${PT(`پس از ${SUBC[d.prereq].nameFa}`, `After ${SUBC[d.prereq].nameEn}`)}</span>`);
  }
  function renderSuite(c) {
    const el = $$('#dash'); if (!el) return;
    const openDd = el.querySelector('.dd'), openId = openDd ? openDd.dataset.dd : null;
    const subs = subsOf(c), a = access(c.id), th = LS.raw('academy.theme') || 'auto';
    const pre = subs.find(d => !d.prereq), pi = prereqInfo(subs.find(d => d.prereq));
    const lastSub = LS.raw('academy.last.' + c.id), L = lastSub && SUBC[lastSub] ? SUBC[lastSub] : null;
    const doneMods = subs.filter(d => { const s = subState(d.id); return s && s.final && s.final.passed; }).length;
    const lessonsDone = subs.reduce((x, d) => x + Object.keys((subState(d.id) || {}).done || {}).length, 0);
    const st = c.stats || {};
    el.innerHTML = `
      <div class="dbg" aria-hidden="true"><i></i><i></i><i></i><span class="dbg__grid"></span></div>
      <header class="dbar"><div class="dwrap dbar__in">
        <a class="dbar__logo" href="${homeURL()}" aria-label="${PT('خانه ' + CFG.BRAND_FA, CFG.BRAND_EN + ' home')}">${LOGO}<span><b>${PT(CFG.BRAND_FA, CFG.BRAND_EN)}</b><small>${PT('بازگشت به همه دوره‌ها', 'Back to all courses')}</small></span></a>
        <div class="dbar__act">
          ${a.tier ? tierBadge(a) : ''}
          <div class="dtheme" role="group" aria-label="${PT('رنگ صفحه', 'Page colour')}">${[['light', '☀️', 'روشن', 'Light'], ['auto', '🌗', 'خودکار', 'Auto'], ['dark', '🌙', 'تیره', 'Dark']].map(t => `<button class="dtheme__b ${th === t[0] ? 'is-on' : ''}" data-dtheme="${t[0]}" title="${PT(t[2], t[3])}" aria-label="${PT(t[2], t[3])}">${t[1]}</button>`).join('')}</div>
          <button class="dbtn dbtn--lang" data-dlang="${PT('en', 'fa')}" lang="${PT('en', 'fa')}" title="${PT('English', 'فارسی')}" aria-label="${PT('تغییر زبان به انگلیسی', 'Switch language to Persian')}"><span aria-hidden="true">🌐</span><b>${PT('English', 'فارسی')}</b></button>
          <button class="dbtn" data-ac="activate"><span aria-hidden="true">🔑</span><b>${PT('کد فعال‌سازی', 'Activation code')}</b></button>
          <button class="dbtn dbtn--icon" data-ac="settings" aria-label="${PT('تنظیمات', 'Settings')}">⚙️</button>
        </div>
      </div></header>
      <div class="dwrap suite" style="--cc:${c.color};--cd:${c.dark};--cl:${c.light}">
        <section class="dhero suite__hero">
          <div class="dhero__txt">
            <span class="dchip"><i></i>${PT(`${nf(subs.length)} حیطه • ${nf(st.lessons || 0)} درس • ${nf(st.terms || 0)} واژه`, `${nf(subs.length)} modules • ${nf(st.lessons || 0)} lessons • ${nf(st.terms || 0)} terms`)}</span>
            <small>${cSubj(c)}</small>
            <h1>${cName(c)} <em>${PT('ترمینولوژی پزشکی', 'Medical terminology')}</em></h1>
            <p>${cat(c).about || cDesc(c)}</p>
            <div class="dhero__cta">
              ${L ? `<a class="dcont" href="?course=${L.id}" style="--cc:${L.color};--cd:${L.dark}"><span class="dcont__m">${L.mascotFn('happy', L.color, 30)}</span><span>${PT('ادامه از', 'Continue')} <b>${PT(L.nameFa, L.nameEn)}</b></span><i aria-hidden="true">${PT('←', '→')}</i></a>` : ''}
              ${a.tier ? '' : `<button class="btn btn--gold btn--lg" data-ac="store" data-course="${c.id}">👑 ${PT('باز کردن هر ۱۵ حیطه', 'Unlock all 15 modules')}</button>`}
            </div>
            <ul class="dhero__nums">${[[doneMods, PT('حیطه کامل‌شده', 'modules completed')], [lessonsDone, PT('درس گذرانده', 'lessons done')], [st.questions + st.roundSteps, PT('سؤال و مرحله', 'questions & steps')], [st.rounds, PT('پرونده بالینی', 'clinical charts')]].map(n => `<li><b data-count="${n[0]}">${nf(n[0])}</b><small>${n[1]}</small></li>`).join('')}</ul>
          </div>
          <div class="dhero__art" aria-hidden="true">
            <span class="dring dring--1"></span><span class="dring dring--2"></span><span class="dring dring--3"></span>
            ${[subs[1], pre, subs[2]].filter(Boolean).map((d, i) => `<div class="dhm dhm--${i}" style="--cc:${d.color};--cd:${d.dark}"><div class="dhm__in">${d.mascotFn(i === 1 ? 'cheer' : 'happy', d.color, 108)}</div><span>${PT(d.nameFa, d.nameEn)}</span></div>`).join('')}
          </div>
        </section>
        ${pi && !pi.passed ? `<section class="suite__gate">
          <div class="suite__gate-m">${pre.mascotFn('cheer', pre.color, 64)}</div>
          <div><b>${PT(`از «${pre.nameFa}» شروع کن`, `Start with “${pre.nameEn}”`)}</b>
            <p>${PT(`مقدمه ترمینولوژی پیش‌نیاز همه حیطه‌هاست. ${CFG.PREREQ_RULE === 'lessons' ? 'وقتی همه درس‌هایش را تمام کنی' : 'وقتی امتحان نهایی‌اش را قبول شوی'}، ${nf(subs.length - 1)} حیطه دیگر باز می‌شوند.`, `The introduction is the prerequisite for every module. Once you ${CFG.PREREQ_RULE === 'lessons' ? 'finish all its lessons' : 'pass its final exam'}, the other ${nf(subs.length - 1)} modules open up.`)}</p>
            <div class="suite__pre"><div class="dc__bar"><i style="width:${Math.max(Math.round(pi.done / pi.total * 100), pi.done ? 4 : 0)}%"></i></div><small>${PT(`${nf(pi.done)} از ${nf(pi.total)} درس`, `${nf(pi.done)} of ${nf(pi.total)} lessons`)}</small></div></div>
          <a class="btn btn--cc btn--lg" style="--cc:${pre.color};--cd:${pre.dark}" href="?course=${pre.id}">${pi.done ? PT('ادامه', 'Continue') : PT('شروع', 'Start')} ${PT('←', '→')}</a>
        </section>` : ''}
        <div class="dsec"><h2>${PT('حیطه‌ها', 'Modules')}</h2><p>${PT('هر حیطه یک دوره کامل است با درس، تمرین، واژه‌نامه، کارت لایتنر، راند بالینی، کاراکتر، لیگ و گواهی. روی هر حیطه بزن تا جزئیاتش را ببینی.', 'Each module is a complete course with lessons, practice, a dictionary, Leitner cards, clinical rounds, characters, a league and a certificate. Tap a module for details.')}${subs.some(faOnly) ? ' <b class="suite__fa">The lessons in these modules are taught in Persian: every medical term stays in English, explained in Persian. The menus and tools follow your language setting.</b>' : ''}</p></div>
        <section class="dcourses suite__grid" id="dcourses" aria-label="${PT('حیطه‌ها', 'Modules')}">${subs.map((d, i) => subCard(d, i)).join('')}</section>
        <footer class="dfoot">${PT(`${CFG.BRAND_FA} ابزار آموزشی است و جایگزین منابع رسمی، قضاوت بالینی یا دستور پزشک نیست.`, `${CFG.BRAND_EN} is an educational tool and does not replace official references, clinical judgment or a physician’s orders.`)}</footer>
      </div>`;
    if (openId) toggleDetail(openId);
    countUp(el);
    guardAnims();
  }
  function bootSuite(D) {
    MODE = 'dash';
    SUITE = D;
    document.documentElement.dataset.course = D.id;
    document.body.classList.add('mode-dash');
    applyDashTheme();
    document.title = PT(D.titleFa, D.titleEn) + ' • ' + PT(CFG.BRAND_FA, CFG.BRAND_EN);
    LS.set('academy.last', D.id);
    renderSuite(D);
    const need = params.get('need');
    if (need && SUBC[need] && !prereqDone(SUBC[need])) setTimeout(() => lockModal(SUBC[need]), 300);
    else if (params.get('up') && SUBC[params.get('up')]) setTimeout(() => upgradeModal(D.id), 300);
    const run = params.get('run'), last = LS.raw('academy.last.' + D.id);
    if (run && last && SUBC[last]) location.replace('?course=' + last + '&run=' + encodeURIComponent(run));
  }
  /** ورود به حیطه‌ای که پیش‌نیازش گذرانده نشده: پنجره راهنما به‌جای ورود */
  document.addEventListener('click', e => {
    if (MODE !== 'dash' || !SUITE) return;
    const a = e.target.closest('a[href^="?course="]'); if (!a) return;
    const m = /^\?course=(\w+)/.exec(a.getAttribute('href'));
    const d = m && SUBC[m[1]];
    if (d && !prereqDone(d)) { e.preventDefault(); e.stopImmediatePropagation(); lockModal(d); }
  }, true);

  /* ================= حالت سرور (نسخه هاست): حساب کاربری، کد فعال‌سازی، سفارش، دعوت دوستان و همگام‌سازی =================
   * فقط وقتی فعال است که صفحه از سرور تراپو آمده باشد (window.TRAPO_SERVER را سرور می‌گذارد).
   * نسخه آفلاین (app/index.html) بدون هیچ تغییری مثل قبل کار می‌کند. */
  const SRV = window.TRAPO_SERVER || null;
  async function api(a, body) {
    const opt = { credentials: 'same-origin', headers: { 'Accept': 'application/json' } };
    if (body !== undefined) { opt.method = 'POST'; opt.headers['Content-Type'] = 'application/json'; opt.headers['X-CSRF'] = SRV.csrf; opt.body = JSON.stringify(body); }
    let r;
    try { r = await fetch('api/?a=' + a, opt); } catch (e) { return { ok: false, err: 'network' }; }
    if (r.status === 401) { setTimeout(() => location.reload(), 1500); }
    try { return await r.json(); } catch (e) { return { ok: false, err: 'server' }; }
  }
  const SRV_ERR = {
    network: ['اتصال به سرور برقرار نشد؛ اینترنت را بررسی کن.', 'Could not reach the server — check your connection.'],
    auth: ['نشست تمام شده؛ دوباره وارد شو.', 'Your session has ended — please sign in again.'],
    rate_limited: ['تعداد درخواست‌ها زیاد بود؛ چند دقیقه دیگر دوباره امتحان کن.', 'Too many attempts — try again in a few minutes.'],
    code_format: ['کد ناقص است؛ کد کامل را دوباره بچسبان.', 'The code is incomplete — paste the full code again.'],
    code_sig: ['این کد برای حساب شما صادر نشده یا ناقص کپی شده است.', 'This code was not issued for your account or was copied incompletely.'],
    code_ver: ['نسخه این کد قدیمی است؛ با پشتیبانی تماس بگیر.', 'This code version is outdated — contact support.'],
    code_expired: ['این کد منقضی شده است.', 'This code has expired.'],
    code_already: ['این کد قبلاً روی حسابت فعال شده است ✅', 'This code is already active on your account ✅'],
    code_used: ['این کد قبلاً برای حساب دیگری ثبت شده است.', 'This code is already registered to another account.'],
    promo_invalid: ['این کد تخفیف معتبر نیست.', 'This discount code is not valid.'],
    promo_expired: ['مهلت این کد تخفیف تمام شده است.', 'This discount code has expired.'],
    promo_used_up: ['ظرفیت این کد تخفیف تمام شده است.', 'This discount code has been used up.'],
    promo_plan: ['این کد برای این پلن نیست.', 'This code doesn’t apply to this plan.'],
    pro_max_two: ['پلن Pro حداکثر ۲ دوره است.', 'Pro covers up to 2 courses.'],
    credit: ['اعتبار کیف پول تغییر کرده؛ دوباره امتحان کن.', 'Your wallet credit changed — please try again.'],
    bad_credentials: ['رمز فعلی درست نیست.', 'The current password is wrong.'],
    pass_short: ['رمز تازه حداقل ۸ نویسه باشد.', 'The new password must be at least 8 characters.'],
    pass_weak: ['این رمز خیلی ساده است.', 'This password is too simple.']
  };
  const srvMsg = err => { const e = SRV_ERR[err] || ['خطایی پیش آمد؛ دوباره امتحان کن.', 'Something went wrong — please try again.']; return PT(e[0], e[1]); };

  /** کدهای فعال‌سازی ثبت‌شده روی سرور، منبع اصلی مجوز روی هر دستگاه همین حساب است */
  function srvInit() {
    if (!SRV) return;
    const o = lic();
    const norm = x => String(x).toUpperCase().replace(/[^0-9A-Z]/g, '');
    const have = o.codes.map(norm);
    (SRV.codes || []).forEach(c => { if (have.indexOf(norm(c)) < 0) { o.codes.push(c); if (parseCode(c, deviceId()).tier === 3) courses().forEach(x => { o.gifts[x.id] = (o.gifts[x.id] || 0) + CFG.VIP_GEMS; }); } });
    // کد محلی‌ای که سرور نمی‌شناسد (مثلاً از نسخه آفلاین با شناسه دیگر) برای این حساب معتبر نیست
    o.codes = o.codes.filter(c => parseCode(c, deviceId()).ok);
    saveLic(o);
    if (!LS.json('academy.profile', null) && SRV.user && SRV.user.name) LS.put('academy.profile', { name: SRV.user.name, role: 'سایر', goal: 50, joined: (SRV.user.since || 0) * 1000 || Date.now() });
  }
  async function srvRedeem(v, errEl, inp, onOk) {
    const r = await api('redeem', { code: v });
    if (!r.ok) {
      if (r.err === 'code_already') { const x = redeem(v); if (x.ok) { onOk && onOk(); return showActivated(x); } }
      if (errEl) { errEl.hidden = false; errEl.textContent = srvMsg(r.err); }
      if (inp) { inp.classList.add('shake'); setTimeout(() => inp.classList.remove('shake'), 400); }
      return pSfx('wrong');
    }
    SRV.codes = r.codes;
    const x = redeem(v); // ثبت محلی برای اجرای آفلاین همین جلسه و هدیه الماس
    onOk && onOk();
    showActivated(x.ok ? x : { ok: true, g: r.grant, before: summary(), after: summary() });
  }
  /** سفارش روی سرور: مبلغ نهایی، تخفیف دوست و اعتبار کیف پول را سرور حساب می‌کند */
  async function srvOrder(req, box) {
    box.hidden = false;
    box.innerHTML = `<p class="muted">⏳ ${PT('در حال ثبت سفارش…', 'Placing your order…')}</p>`;
    const r = await api('order', Object.assign({ lang: UILANG() }, req));
    if (!r.ok) { box.innerHTML = `<div class="acerr">${pesc(srvMsg(r.err))}</div>`; return pSfx('wrong'); }
    box.innerHTML = `<h4>✅ ${PT(`سفارش ${r.order} ثبت شد`, `Order ${r.order} placed`)}</h4>
      <div class="acsum">${r.pct ? `<p>🏷️ ${PT('قیمت پایه', 'Base price')}: <s>${nf(r.base)}</s> ${CUR()} • ${r.refPct ? PT(`🤝 تخفیف دعوت دوست ${nf(r.refPct)}٪`, `🤝 friend invite ${nf(r.refPct)}% off`) : PT(`🎁 ${pesc(r.promo.code)} ${nf(r.pct)}٪`, `🎁 ${pesc(r.promo.code)} ${nf(r.pct)}% off`)}</p>` : ''}
        ${r.creditUsed ? `<p>👛 ${PT('اعتبار کیف پول', 'Wallet credit')}: −${nf(r.creditUsed)} ${CUR()}</p>` : ''}
        <p><b>💰 ${PT('مبلغ قابل پرداخت', 'Amount to pay')}: ${nf(r.final)} ${CUR()}</b></p></div>
      ${copyBox(r.message, 9)}<p class="muted acsmall">${PT(CFG.SUPPORT_HINT, CFG.SUPPORT_HINT_EN)}</p>
      <button class="btn btn--brand" data-copyorder>📋 ${PT('کپی متن سفارش', 'Copy order text')}</button>`;
    box.querySelector('[data-copyorder]').onclick = () => copyText(r.message).then(ok => pToast(ok ? PT('📋 کپی شد', '📋 Copied') : PT('متن را دستی کپی کن', 'Copy the text manually'), ok ? '' : 'toast--bad'));
    copyText(r.message);
    if (r.creditUsed && SRV.referral) SRV.referral.credit = Math.max(0, SRV.referral.credit - r.creditUsed);
    pSfx('done');
  }
  /** بررسی کد تخفیف با سرور (کدهای کمپین فقط روی سرور معتبرند) */
  async function srvPromo(code, st, draw, list) {
    const r = await api('quote', { tier: st.tier, dur: st.dur, courses: list.filter(x => st.sel[x.id]).map(x => x.id), promo: code });
    if (r.ok && r.promo) { st.promo = { ok: true, code: r.promo.code, pct: r.promo.pct, plans: r.promo.plans, label: r.promo.label, labelEn: r.promo.labelEn }; st.promoErr = ''; pSfx('done'); }
    else if (r.ok && r.promoBeaten) { st.promo = null; st.promoErr = PT(`تخفیف دعوت دوستت (${nf(r.refPct)}٪) بیشتر است و همان اعمال می‌شود.`, `Your friend-invite discount (${nf(r.refPct)}%) is larger, so it applies instead.`); }
    else { st.promo = null; st.promoErr = srvMsg(r.promoErr || r.err); pSfx('wrong'); }
    draw(true);
  }
  /** کارت «دعوت دوستان» (پروفایل، تنظیمات، صفحه اول) */
  function inviteHTML(compact) {
    const R = SRV && SRV.referral; if (!R) return '';
    return `<section class="acinv ${compact ? 'acinv--c' : ''}">
      <div class="acinv__h"><span class="acinv__i">🎁</span><div><b>${PT('دوستانت را دعوت کن، اعتبار بگیر', 'Invite friends, earn credit')}</b>
        <small>${PT(`دوستت با کد تو ${nf(R.friendPct)}٪ تخفیف اولین خرید می‌گیرد و تو ${nf(R.rewardPct)}٪ مبلغ خریدش را اعتبار کیف پول.`, `Your friend gets ${nf(R.friendPct)}% off their first purchase with your code, and you get ${nf(R.rewardPct)}% of it as wallet credit.`)}</small></div></div>
      <div class="acinv__code"><code dir="ltr">${pesc(R.code)}</code><button class="btn btn--brand btn--sm" data-srv="copylink">🔗 ${PT('کپی لینک دعوت', 'Copy invite link')}</button><button class="btn btn--ghost btn--sm" data-srv="copycode">📋 ${PT('کپی کد', 'Copy code')}</button></div>
      <div class="acinv__nums"><div><b>${nf(R.joined)}</b><small>${PT('دوست ثبت‌نام‌کرده', 'friends joined')}</small></div><div><b>${nf(R.paid)}</b><small>${PT('خرید موفق', 'purchases')}</small></div><div><b>${nf(R.credit)}</b><small>${PT('اعتبار کیف پول', 'wallet credit')} (${CUR()})</small></div></div>
      ${R.myFriendPct ? `<p class="acinv__mine">🤝 ${PT(`تو با دعوت یک دوست آمده‌ای: ${nf(R.myFriendPct)}٪ تخفیف اولین خریدت خودکار اعمال می‌شود.`, `You joined through a friend: ${nf(R.myFriendPct)}% off your first purchase is applied automatically.`)}</p>` : ''}
    </section>`;
  }
  function accountHTML() {
    if (!SRV) return '';
    return `<div class="setc">
      <div class="setc__r"><span>👤 ${PT('حساب کاربری', 'Account')}<small dir="ltr">${pesc(SRV.user.login)}</small></span><button class="btn btn--ghost btn--sm" data-srv="logout">${PT('خروج از حساب', 'Sign out')}</button></div>
      <div class="setc__r"><span>🔒 ${PT('تغییر رمز', 'Change password')}<small>${PT('همه دستگاه‌های دیگر خارج می‌شوند', 'Signs out all other devices')}</small></span><button class="btn btn--ghost btn--sm" data-srv="pass">${PT('تغییر', 'Change')}</button></div>
      <div class="setc__r"><span>🪪 ${PT('شناسه حساب', 'Account ID')}<small>${PT('برای صدور کد فعال‌سازی', 'Used to issue activation codes')}</small></span><code dir="ltr">${pesc(SRV.user.dev)}</code></div>
    </div>${inviteHTML(true)}`;
  }
  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-srv]'); if (!b || !SRV) return;
    const act = b.dataset.srv, R = SRV.referral || {};
    if (act === 'copylink') return copyText(R.link).then(ok => pToast(ok ? PT('🔗 لینک دعوت کپی شد', '🔗 Invite link copied') : R.link));
    if (act === 'copycode') return copyText(R.code).then(ok => pToast(ok ? PT('📋 کد معرف کپی شد', '📋 Referral code copied') : R.code));
    if (act === 'logout') { if (!confirm(PT('از حساب خارج شوی؟', 'Sign out?'))) return; await api('logout', {}); location.href = './'; return; }
    if (act === 'pass') {
      const m = pModal(`<h3>🔒 ${PT('تغییر رمز', 'Change password')}</h3>
        <input class="ob__in" type="password" data-po autocomplete="current-password" placeholder="${PT('رمز فعلی', 'Current password')}">
        <input class="ob__in" type="password" data-pn autocomplete="new-password" placeholder="${PT('رمز تازه (حداقل ۸ نویسه)', 'New password (8+ characters)')}">
        <div class="acerr" hidden></div>
        <div class="modal__btns"><button class="btn btn--brand btn--lg" data-go>${PT('ذخیره', 'Save')}</button><button class="btn btn--ghost" data-close>${PT('انصراف', 'Cancel')}</button></div>`);
      m.el.querySelector('[data-go]').onclick = async () => {
        const r = await api('password', { old: m.el.querySelector('[data-po]').value, new: m.el.querySelector('[data-pn]').value });
        if (!r.ok) { const er = m.el.querySelector('.acerr'); er.hidden = false; er.textContent = srvMsg(r.err); return; }
        m.close(); pToast(PT('✅ رمز تازه ذخیره شد', '✅ New password saved'));
      };
    }
  });

  /* ---------- همگام‌سازی پیشرفت با سرور: هر تغییر کلیدهای academy_* چند ثانیه بعد فرستاده می‌شود ---------- */
  const SYNC_RE = /^academy_(course_[a-z0-9_]{2,24}|global_state)$/;
  const syncMeta = () => { try { return JSON.parse(localStorage.getItem('academy.sync') || '{}') || {}; } catch (e) { return {}; } };
  let syncDirty = {}, syncT = null;
  function syncFlush(keep) {
    clearTimeout(syncT); syncT = null;
    const keys = Object.keys(syncDirty); if (!keys.length || !SRV) return;
    const items = {}, meta = syncMeta();
    keys.forEach(k => { const v = localStorage.getItem(k); if (v != null && v.length < 300000) items[k] = { v, at: syncDirty[k] }; meta[k] = syncDirty[k]; });
    syncDirty = {};
    try { localStorage.setItem('academy.sync', JSON.stringify(meta)); } catch (e) { /* */ }
    fetch('api/?a=progress_put', { method: 'POST', keepalive: !!keep, credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-CSRF': SRV.csrf }, body: JSON.stringify({ items }) }).catch(() => { });
  }
  if (SRV) {
    const set = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      set.call(this, k, v);
      if (this === localStorage && SYNC_RE.test(k)) { syncDirty[k] = Date.now(); if (!syncT) syncT = setTimeout(syncFlush, 4000); }
    };
    addEventListener('pagehide', () => syncFlush(true));
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') syncFlush(true); });
  }

  /* ================= صفحه اول: فقط دوره‌ها (کارت + جزئیات بازشونده) ================= */
  const LOGO = `<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><rect width="64" height="64" rx="18" fill="url(#acg)"/><path d="M32 12c-6 8-12 15-12 22a12 12 0 0 0 24 0c0-7-6-14-12-22z" fill="#fff" opacity=".95"/><path d="M26 35h12M32 29v12" stroke="#12b3a8" stroke-width="4" stroke-linecap="round"/></svg>`;
  /** شخصیت هر دوره (قطره یونا، گلبول بال‌دار هما، ذره‌بین نگار) از فایل داده خودش؛ بدون بارگذاری کل دوره */
  const FAKE_EA = { T: f => f, fa: n => n, lang: 'fa', ui: {} };
  const mascotFns = {};
  function courseMascot(c, mood, size) {
    try {
      if (c.mascotFn) return c.mascotFn(mood || 'happy', c.color, size || 120); // حیطه‌های دوره مجموعه‌ای
      if (!mascotFns[c.id]) mascotFns[c.id] = c.config(FAKE_EA).mascot;
      return mascotFns[c.id](mood || 'happy', c.color, size || 120);
    } catch (e) { return `<span class="dc__emoji" style="font-size:${(size || 120) * 0.6}px">${c.icon}</span>`; }
  }
  const cat0 = c => c.catalog || { worlds: [], tools: [], outcomes: [], highlights: [] };
  /** کاتالوگ دوره به زبان رابط: متن انگلیسی (catalog.en) روی فیلدهای فارسی؛ نماد، رنگ و ترتیب از نسخه اصلی */
  const cat = c => {
    const k = cat0(c), e = k.en;
    if (UILANG() !== 'en' || !e || typeof e !== 'object') return k;
    const byId = (list, id, i) => (list || []).find(x => x.id === id) || (list || [])[i] || {};
    return Object.assign({}, k, e, {
      worlds: k.worlds.map((w, i) => Object.assign({}, w, byId(e.worlds, w.id, i), { sym: w.sym, color: w.color })),
      tools: k.tools.map((t, i) => Object.assign({}, t, byId(e.tools, t.id, i), { sym: t.sym, color: t.color })),
      outcomes: e.outcomes || k.outcomes, highlights: e.highlights || k.highlights
    });
  };
  const cName = c => PT(c.nameFa, c.nameEn), cSubj = c => PT(c.subjectFa, c.subjectEn || c.subjectFa), cDesc = c => PT(c.descFa, c.descEn || c.descFa);

  function dCard(c, a, i) {
    const s = courseState(c.id), st = c.stats || {};
    const done = s && s.done ? Object.keys(s.done).length : 0, total = st.lessons || 45, pct = Math.round(done / total * 100);
    const fin = s && s.final && s.final.passed;
    return `<article class="dc" data-dc="${c.id}" style="--cc:${c.color};--cd:${c.dark};--cl:${c.light};--d:${(i || 0) * 110}ms" tabindex="0" aria-expanded="false" aria-label="${cName(c)} — ${cSubj(c)}">
      <div class="dc__art">
        <div class="dc__orbit" aria-hidden="true">${cat(c).worlds.map((w, i) => `<span style="--i:${i};--n:${cat(c).worlds.length};--wc:${w.color}">${w.sym}</span>`).join('')}</div>
        <div class="dc__m">${courseMascot(c, 'happy', 112)}</div>
        <div class="dc__badges">${tierBadge(a)}${fin ? `<span class="actb actb--cert">🎓 ${PT('گواهی', 'Certified')}</span>` : ''}</div>
      </div>
      <div class="dc__body">
        <h2>${cName(c)}<small dir="${PT('ltr', 'rtl')}" lang="${PT('en', 'fa')}">${PT(c.nameEn, c.nameFa)}</small></h2>
        <p class="dc__sub">${c.parent ? bil(cSubj(c)) : cSubj(c)}</p>
        <p class="dc__tag">${c.parent ? bil(cat(c).tagline || cDesc(c)) : cat(c).tagline || cDesc(c)}</p>
        <div class="dc__prog"><div class="dc__bar"><i style="width:${Math.max(pct, done ? 4 : 0)}%"></i></div><span>${done ? PT(`${nf(done)} از ${nf(total)} درس • ${nf(pct)}٪`, `${nf(done)} of ${nf(total)} lessons • ${nf(pct)}%`) : PT(`${nf(total)} درس • ${nf((st.questions || 0) + (st.roundSteps || 0))}+ سؤال`, `${nf(total)} lessons • ${nf((st.questions || 0) + (st.roundSteps || 0))}+ questions`)}</span></div>
        ${(() => { const nm = s && s.mistakes ? s.mistakes.length : 0; if (!nm) return ''; return a && a.tier ? `<a class="dc__crit dc__crit--ok" href="?course=${c.id}&run=clinic">🩺 ${PT(`${nf(nm)} خطا برای مرور در کلینیک`, `${nf(nm)} mistakes to review in the clinic`)}</a>` : `<button class="dc__crit" data-ac="upsell" data-course="${c.id}" data-why="clinic">🩺 ${PT(`کلینیک خطاها: ${nf(nm)} مورد بحرانی`, `Mistake clinic: ${nf(nm)} critical`)}</button>`; })()}
        <div class="dc__cta">
          <a class="btn btn--cc btn--lg" href="?course=${c.id}">${done ? PT('ادامه یادگیری', 'Continue learning') : a && a.tier ? PT('شروع دوره', 'Start the course') : PT('شروع رایگان', 'Start free')}</a>
          <button class="dc__more" data-more="${c.id}" aria-label="${PT(`معرفی و جزئیات دوره ${c.nameFa}`, `About the ${c.nameEn} course`)}"><span class="dc__more-i" aria-hidden="true">i</span><span class="dc__more-t"><b>${PT('معرفی دوره', 'About the course')}</b><small>${PT('مسیر، اهداف و ابزارها', 'Path, goals and tools')}</small></span><i class="dc__chev" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>
        </div>
      </div>
    </article>`;
  }
  function soonCard(i) {
    return `<article class="dc dc--soon" style="--d:${(i || 0) * 110}ms" aria-label="${PT('دوره‌های جدید به‌زودی', 'New courses coming soon')}">
      <div class="dc__art"><div class="dc__soon" aria-hidden="true"><span>✨</span><i></i><i></i><i></i></div></div>
      <div class="dc__body"><h2>${PT('به‌زودی', 'Coming soon')}</h2><p class="dc__sub">${PT('دوره‌های تازه در راه است', 'New courses are on the way')}</p>
        <p class="dc__tag">${PT('مباحث بالینی تازه به‌زودی به آکادمی اضافه می‌شوند. پکیج الماس همه دوره‌های آینده را هم بدون هزینه اضافه شامل می‌شود.', 'New clinical topics are coming to the academy soon. The Diamond package includes every future course at no extra cost.')}</p></div>
    </article>`;
  }
  function dDetail(c) {
    const a = access(c.id), st = c.stats || {}, k = cat(c);
    const s = courseState(c.id), done = s && s.done ? Object.keys(s.done).length : 0;
    const nums = [['🌍', nf(st.worlds || 5), PT('دنیا', 'worlds')], ['🧗', nf(st.levels || 15), PT('سطح', 'levels')], ['📚', nf(st.lessons || 45), PT('درس', 'lessons')], ['❓', nf((st.questions || 0) + (st.roundSteps || 0)) + '+', PT('سؤال و مرحله', 'questions & steps')], ['🏥', nf(st.rounds || 0), PT('بیمار در راند', 'round patients')], ['🧮', nf(k.tools.length), PT('ابزار بالینی', 'clinical tools')], ['🧸', nf(st.chars || 15), PT('کاراکتر', 'characters')]];
    return `<section class="dd" data-dd="${c.id}" style="--cc:${c.color};--cd:${c.dark};--cl:${c.light}">
      <header class="dd__head">
        <div class="dd__m">${courseMascot(c, 'cheer', 92)}</div>
        <div class="dd__t"><small>${cSubj(c)}</small><h3>${cName(c)} • ${PT(c.courseFa, c.courseEn || c.courseFa)}</h3><p>${k.about || cDesc(c)}</p>
          ${k.highlights && k.highlights.length ? `<div class="dd__hl">${k.highlights.map(h => `<span>✦ ${h}</span>`).join('')}</div>` : ''}</div>
        <button class="iconbtn dd__x" data-more="${c.id}" aria-label="${PT('بستن جزئیات', 'Close details')}">✕</button>
      </header>
      <div class="dd__nums">${nums.map(n => `<div><span>${n[0]}</span><b>${n[1]}</b><small>${n[2]}</small></div>`).join('')}</div>
      <div class="dd__grid">
        <div class="dd__col">
          <h4>🗺️ ${isSuite(c) ? PT(`${nf(k.worlds.length)} حیطه، ${nf(st.worlds)} دنیا (${PT('مقدمه پیش‌نیاز همه', '')})`, `${nf(k.worlds.length)} modules, ${nf(st.worlds)} worlds (the introduction comes first)`) : PT(`مسیر یادگیری: ${nf(k.worlds.length)} دنیا، ${nf(k.worlds.reduce((x, w) => x + w.levels.length, 0))} سطح`, `Learning path: ${nf(k.worlds.length)} worlds, ${nf(k.worlds.reduce((x, w) => x + w.levels.length, 0))} levels`)}</h4>
          <ol class="dd__worlds">${k.worlds.map((w, i) => `<li style="--wc:${w.color}"><span class="dd__sym" dir="ltr">${w.sym}</span><div><b>${isSuite(c) ? PT('حیطه', 'Module') : PT('دنیای', 'World')} ${nf(i + 1)}: ${w.name}</b><small>${w.sub}</small><em>${w.levels.map((l, j) => `<i>${nf(j + 1)}. ${l}</i>`).join('')}</em></div></li>`).join('')}</ol>
        </div>
        <div class="dd__col">
          <h4>🎯 ${PT('در پایان دوره می‌توانی…', 'By the end of the course you can…')}</h4>
          <ul class="dd__out">${k.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
          <h4>👥 ${PT('مناسب برای', 'Who it’s for')}</h4><p class="dd__aud">${k.audience || ''}</p>
        </div>
      </div>
      <h4 class="dd__th">🧮 ${PT('ابزارهای بالینی و ماشین‌حساب‌ها', 'Clinical tools & calculators')} ${a.tools ? `<span class="actb actb--pro">${PT('باز است', 'Unlocked')}</span>` : '<span class="actb actb--lock">🔒 Pro</span>'}</h4>
      <div class="dd__tools">${k.tools.map(t => `<div class="dd__tool" style="--tc:${t.color}"><span dir="ltr">${t.sym}</span><div><b>${t.name}</b><small>${t.desc}</small></div></div>`).join('')}</div>
      <div class="dd__foot">
        <div class="dd__acc">${a.tier ? `${tierBadge(a)} <span>${a.life ? PT('اشتراک دائمی ♾️', 'Lifetime ♾️') : PT(`${leftText(a.expiry)} باقی‌مانده • تا ${fdate(a.expiry)}`, `${leftText(a.expiry)} left • until ${fdate(a.expiry)}`)}</span>` : ''}</div>
        <div class="dd__act">
          <a class="btn btn--cc btn--lg" href="?course=${c.id}">${done ? PT('ادامه یادگیری', 'Continue learning') : PT('شروع دوره', 'Start the course')} ${PT('←', '→')}</a>
          ${a.tools ? `<a class="btn btn--ghost" href="?course=${c.id}#/tools">🧮 ${PT('ابزارها', 'Tools')}</a>` : ''}
          ${a.tier < 3 ? `<button class="btn btn--gold" data-ac="store" data-course="${c.id}">👑 ${a.tier ? PT('ارتقا / تمدید', 'Upgrade / renew') : PT('فعال‌سازی کامل', 'Unlock everything')}</button>` : ''}
        </div>
      </div>
    </section>`;
  }
  function toggleDetail(id) {
    const grid = $$('#dcourses'); if (!grid) return;
    const open = grid.querySelector('.dd');
    const was = open && open.dataset.dd;
    if (open) open.remove();
    grid.querySelectorAll('.dc').forEach(x => { x.classList.remove('is-open'); x.setAttribute('aria-expanded', 'false'); });
    if (was === id) return;
    const card = grid.querySelector(`[data-dc="${id}"]`); if (!card) return;
    const items = Array.from(grid.children);
    const cols = Math.max(1, getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length);
    const idx = items.indexOf(card);
    const end = items[Math.min(items.length - 1, Math.floor(idx / cols) * cols + cols - 1)];
    const tmp = document.createElement('div'); tmp.innerHTML = dDetail(courseDef(id));
    const node = tmp.firstElementChild;
    end.after(node);
    card.classList.add('is-open'); card.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => node.classList.add('is-in'));
    setTimeout(() => node.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
  }
  function renderDash() {
    if (SUITE) return renderSuite(SUITE); // صفحه انتخاب حیطه دوره مجموعه‌ای
    const el = $$('#dash'); if (!el) return;
    const openDd = el.querySelector('.dd'), openId = openDd ? openDd.dataset.dd : null;
    const p = profile() || {}, sm = summary(), list = courses();
    const last = LS.raw('academy.last');
    const th = LS.raw('academy.theme') || 'auto';
    const tot = list.reduce((x, c) => { const s = c.stats || {}; x.l += s.lessons || 0; x.q += (s.questions || 0) + (s.roundSteps || 0); x.r += s.rounds || 0; x.t += cat(c).tools.length; return x; }, { l: 0, q: 0, r: 0, t: 0 });
    el.innerHTML = `
      <div class="dbg" aria-hidden="true"><i></i><i></i><i></i><span class="dbg__grid"></span></div>
      <header class="dbar"><div class="dwrap dbar__in">
        <button class="dbar__logo" data-logo aria-label="${PT(CFG.BRAND_FA, CFG.BRAND_EN)}">${LOGO}<span><b>${PT(CFG.BRAND_FA, CFG.BRAND_EN)}</b><small>${PT(CFG.BRAND_TAG_FA, CFG.BRAND_TAG_EN)} • ${list.map(cName).join(' • ')}</small></span></button>
        <div class="dbar__act">
          ${sm.vip ? `<span class="acvip">💎 ${PT('الماس', 'Diamond')}</span>` : ''}
          <div class="dtheme" role="group" aria-label="${PT('رنگ صفحه', 'Page colour')}">${[['light', '☀️', 'روشن', 'Light'], ['auto', '🌗', 'خودکار', 'Auto'], ['dark', '🌙', 'تیره', 'Dark']].map(t => `<button class="dtheme__b ${th === t[0] ? 'is-on' : ''}" data-dtheme="${t[0]}" title="${PT(t[2], t[3])}" aria-label="${PT('پوسته ' + t[2], t[3] + ' theme')}" aria-pressed="${th === t[0]}">${t[1]}</button>`).join('')}</div>
          <button class="dbtn dbtn--lang" data-dlang="${PT('en', 'fa')}" lang="${PT('en', 'fa')}" title="${PT('English', 'فارسی')}" aria-label="${PT('تغییر زبان به انگلیسی', 'Switch language to Persian')}"><span aria-hidden="true">🌐</span><b>${PT('EN', 'فا')}</b></button>
          <button class="dbtn" data-ac="activate"><span aria-hidden="true">🔑</span><b>${PT('کد فعال‌سازی', 'Activation code')}</b></button>
          <button class="dbtn dbtn--icon" data-ac="settings" aria-label="${PT('تنظیمات', 'Settings')}">⚙️</button>
        </div>
      </div></header>
      <div class="dwrap">
        ${dailyCaseHTML()}
        ${SRV ? inviteHTML(true) : ''}
        <section class="dhero">
          <div class="dhero__txt">
            <span class="dchip"><i></i>${PT('آموزش بالینی بازی‌وار • کاملاً آفلاین', 'Game-based clinical learning • fully offline')}</span>
            <small>${p.name ? PT(`سلام ${pesc(p.name)} 👋`, `Hi ${pesc(p.name)} 👋`) : PT('خوش آمدی 👋', 'Welcome 👋')}</small>
            <h1>${PT('امروز کدام مهارت بالینی را <em>تمرین کنیم؟</em>', 'Which clinical skill shall we <em>practise today?</em>')}</h1>
            <p>${PT('هر دوره یک مسیر کامل است: درس‌های سه‌دقیقه‌ای، بیمارهای واقعی‌نما، ماشین‌حساب بالینی و گواهی پایان دوره. روی هر دوره بزن تا جزئیاتش را ببینی.', 'Each course is a complete path: three-minute lessons, realistic patients, clinical calculators and a certificate of completion. Tap a course to see the details.')}</p>
            <div class="dhero__cta">
              ${last && AC[last] ? `<a class="dcont" href="?course=${last}" style="--cc:${AC[last].color};--cd:${AC[last].dark}"><span class="dcont__m">${courseMascot(AC[last], 'happy', 30)}</span><span>${PT('ادامه از', 'Continue')} <b>${cName(AC[last])}</b></span><i aria-hidden="true">${PT('←', '→')}</i></a>` : ''}
              <a class="dgo" href="#dcourses">${PT('مشاهده دوره‌ها', 'See the courses')} <i aria-hidden="true">↓</i></a>
            </div>
            <ul class="dhero__nums">${[[list.length, PT('دوره', 'courses')], [tot.l, PT('درس کوتاه', 'short lessons')], [tot.q, PT('سؤال و مرحله', 'questions & steps')], [tot.r, PT('بیمار در راند', 'round patients')], [tot.t, PT('ابزار بالینی', 'clinical tools')]].map((x, i) => `<li style="--d:${i * 90 + 300}ms"><b data-count="${x[0]}">${nf(x[0])}</b><small>${x[1]}</small></li>`).join('')}</ul>
          </div>
          <div class="dhero__art" aria-hidden="true">
            <span class="dring dring--1"></span><span class="dring dring--2"></span><span class="dring dring--3"></span>
            ${list.slice(0, 3).map((c, i) => `<div class="dhm dhm--${i}" style="--cc:${c.color};--cd:${c.dark}"><div class="dhm__in">${courseMascot(c, i === 1 ? 'cheer' : 'happy', 108)}</div><span>${cName(c)}</span></div>`).join('')}
          </div>
        </section>
        <svg class="decg" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ecgg" x1="0" x2="1"><stop offset="0" stop-color="#58cc02"/><stop offset=".5" stop-color="#12b3a8"/><stop offset="1" stop-color="#8e2c6e"/></linearGradient></defs><path d="M0 40 H330 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H760 l12 -6 l10 6 h18 l8 10 l14 -46 l14 58 l10 -22 h22 l14 -8 l14 8 H1200"/></svg>
        <div class="dsec"><h2>${PT('دوره‌ها', 'Courses')}</h2><p>${PT('برای دیدن معرفی کامل، مسیر یادگیری و ابزارها روی هر دوره بزن.', 'Tap a course for the full introduction, learning path and tools.')}</p></div>
        <section class="dcourses" id="dcourses" aria-label="${PT('دوره‌ها', 'Courses')}">${list.map((c, i) => dCard(c, sm.per[c.id], i)).join('')}${soonCard(list.length)}</section>
        <footer class="dfoot">${PT(`${CFG.BRAND_FA} ابزار آموزشی است و جایگزین قضاوت بالینی، دستور پزشک یا پروتکل بیمارستان نیست.`, `${CFG.BRAND_EN} is an educational tool and does not replace clinical judgement, physician orders or hospital protocols.`)}</footer>
      </div>`;
    if (openId) toggleDetail(openId);
    countUp(el);
    guardAnims();
  }
  /** شمارنده‌های بالای صفحه از صفر بالا می‌روند */
  function countUp(root) {
    if (document.documentElement.classList.contains('no-motion') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.querySelectorAll('[data-count]').forEach(b => {
      const to = +b.dataset.count, t0 = performance.now(), dur = 1100;
      const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); b.textContent = nf(Math.round(to * e)); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }
  // باز و بسته شدن جزئیات با کلیک روی کارت (به‌جز دکمه‌ها و پیوندها) یا Enter
  document.addEventListener('click', e => {
    if (MODE !== 'dash') return;
    const more = e.target.closest('[data-more]');
    if (more) { e.preventDefault(); return toggleDetail(more.dataset.more); }
    const card = e.target.closest('.dc[data-dc]');
    if (card && !e.target.closest('a, button')) toggleDetail(card.dataset.dc);
  });
  // دکمه زبان سربرگ صفحه اول
  document.addEventListener('click', e => { const b = e.target.closest('[data-dlang]'); if (b) setUILang(b.dataset.dlang); });
  document.addEventListener('click', e => {
    const t = MODE === 'dash' && e.target.closest('[data-dtheme]');
    if (!t) return;
    setPageTheme(t.dataset.dtheme);
    document.querySelectorAll('[data-dtheme]').forEach(x => { x.classList.toggle('is-on', x === t); x.setAttribute('aria-pressed', x === t); });
  });
  // کج شدن نرم کارت‌ها زیر نشانگر (فقط ماوس، بدون حرکت در حالت کاهش انیمیشن)
  document.addEventListener('pointermove', e => {
    if (MODE !== 'dash' || e.pointerType !== 'mouse' || document.documentElement.classList.contains('no-motion')) return;
    const c = e.target.closest && e.target.closest('.dc[data-dc]');
    document.querySelectorAll('.dc.is-tilt').forEach(x => { if (x !== c) { x.classList.remove('is-tilt'); x.style.removeProperty('--rx'); x.style.removeProperty('--ry'); } });
    if (!c) return;
    const r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    c.classList.add('is-tilt'); c.style.setProperty('--rx', (-py * 5).toFixed(2) + 'deg'); c.style.setProperty('--ry', (px * 7).toFixed(2) + 'deg');
    c.style.setProperty('--mx', ((px + 0.5) * 100).toFixed(1) + '%'); c.style.setProperty('--my', ((py + 0.5) * 100).toFixed(1) + '%');
  });
  document.addEventListener('keydown', e => {
    if (MODE !== 'dash' || (e.key !== 'Enter' && e.key !== ' ')) return;
    const card = e.target.closest && e.target.closest('.dc[data-dc]');
    if (card && e.target === card) { e.preventDefault(); toggleDetail(card.dataset.dc); }
  });

  /* ================= پنجره ارتقا: معرفی همان دوره + انتخاب پلن + فعال‌سازی ================= */
  const PLAN_FEAT = () => ({
    1: [['✓', PT('همه ۴۵ درس و ۱۵ سطح', 'All 45 lessons and 15 levels')], ['✓', PT('آزمون مرحله‌ها و امتحان نهایی', 'Checkpoints and the final exam')], ['✓', PT('گواهی پایان دوره و کارت استوری', 'Certificate and story card')], ['✓', PT('راند بیمارستان و دفترچه نکات', 'Hospital rounds and the guidebook')], ['✗', PT('ماشین‌حساب و ابزار بالینی', 'Calculators and clinical tools')], ['✗', PT('قلب بی‌نهایت', 'Unlimited hearts')]],
    2: [['✓', PT('همه امکانات پلن آموزشی', 'Everything in Standard')], ['✓', PT('ماشین‌حساب و ابزار بالینی', 'Calculators and clinical tools')], ['✓', PT('ماشین‌حساب شناور سر بالین', 'Floating bedside Quick-Calc')], ['✓', PT('قلب بی‌نهایت ♾️', 'Unlimited hearts ♾️')], ['•', PT('برای ۱ یا ۲ دوره', 'For 1 or 2 courses')]],
    3: [['✓', PT('همه دوره‌ها، حتی دوره‌های آینده', 'Every course, including future ones')], ['✓', PT('همه ابزارها و قلب بی‌نهایت', 'All tools and unlimited hearts')], ['✓', PT('کیس‌های ترکیبی ICU', 'ICU combined cases')], ['✓', PT(`${nf(CFG.VIP_GEMS)} الماس هدیه در هر دوره`, `${nf(CFG.VIP_GEMS)} gift gems in each course`)], ['✓', PT('نشان طلایی الماس', 'Gold Diamond badge')]]
  });
  function showActivated(r) {
    const g = r.g;
    pConfetti(140); pSfx('done');
    pModal(`<div class="big-i">${TIERS[g.tier].icon}</div><h3>${PT('اشتراک فعال شد! 🎉', 'Subscription activated! 🎉')}</h3>
      <div class="actable"><div><span>${PT('پلن', 'Plan')}</span><b>${PT(TIERS[g.tier].fa, TIERS[g.tier].en)}</b></div><div><span>${PT('دوره‌ها', 'Courses')}</span><b>${maskNames(g.mask)}</b></div><div><span>${PT('اعتبار', 'Valid')}</span><b>${g.life ? PT('دائمی ♾️', 'Lifetime ♾️') : PT(`تا ${fdatetime(g.exp)} (${leftText(g.exp)})`, `until ${fdatetime(g.exp)} (${leftText(g.exp)})`)}</b></div></div>
      ${g.tier === 3 ? `<div class="acok">💎 ${PT(`${nf(CFG.VIP_GEMS)} الماس هدیه در هر دوره + نشان طلایی`, `${nf(CFG.VIP_GEMS)} gift gems in each course + gold badge`)}</div>` : ''}
      ${r.before.owned.length ? `<p class="muted">${PT('دسترسی‌های قبلی‌ات حفظ و با این کد ترکیب شد.', 'Your previous access was kept and combined with this code.')}</p>` : ''}
      <div class="modal__btns"><button class="btn btn--brand btn--lg" data-close>${PT('عالیه!', 'Awesome!')}</button></div>`, { onClose: () => refreshAll() });
  }
  function tryRedeem(v, errEl, inp, onOk) {
    if (!v) return;
    if (SRV) return srvRedeem(v, errEl, inp, onOk);
    const r = redeem(v);
    if (!r.ok) {
      if (errEl) { errEl.hidden = false; errEl.textContent = r.msg; }
      if (inp) { inp.classList.add('shake'); setTimeout(() => inp.classList.remove('shake'), 400); }
      pSfx('wrong'); return;
    }
    onOk && onOk();
    showActivated(r);
  }
  function upgradeModal(cid, why, tierPick) {
    document.querySelectorAll('.modal').forEach(x => { if (!x.classList.contains('modal--tamper')) x.remove(); });
    const list = courses();
    const c = AC[rootOf(cid)] || (window.EA && EA.COURSE && AC[rootOf(EA.COURSE.id)]) || list[0];
    const a = access(c.id), k = cat(c), w = why && WHY[why];
    const need = w ? w[3] : 0;
    const st = {
      tier: +tierPick || (need === 9 ? 3 : need === 2 ? Math.max(2, Math.min(3, a.tier + 1)) : Math.min(3, Math.max(1, a.tier + 1))),
      dur: 1, sel: { [c.id]: true }, promo: null, promoIn: '', promoErr: ''
    };
    const m = pModal('', { cls: 'modal--sheet modal--up' });
    const card = m.el.querySelector('.modal__card');
    card.style.setProperty('--cc', c.color); card.style.setProperty('--cd', c.dark); card.style.setProperty('--cl', c.light);
    function draw(keepScroll) {
      const y = keepScroll ? (card.querySelector('.up__b') || {}).scrollTop : 0;
      if (st.tier === 3) list.forEach(x => { st.sel[x.id] = true; });
      st.sel[c.id] = true;
      const ids = list.map(x => x.id).filter(i => st.sel[i]);
      const n = ids.length;
      const p = price(st.tier, ids, st.dur), full = st.tier === 3 ? p : ids.reduce((s, id) => s + price(st.tier, [id], st.dur), 0);
      const perMonth = d => Math.round(price(st.tier, ids, d) / [0, 1, 3, 6, 12][d] / 1000) * 1000;
      const save = d => { const base = perMonth(1); return base ? Math.round((1 - perMonth(d) / base) * 100) : 0; };
      const pr = st.promo, fits = promoFits(pr, st.tier), fin = fits ? promoPrice(p, pr) : p;
      const planNames = ps => ps.map(tShort).join(PT('، ', ', '));
      card.innerHTML = `
        <header class="up__hero">
          <button class="iconbtn up__x" data-close aria-label="${PT('بستن', 'Close')}">✕</button>
          <div class="up__m">${courseMascot(c, 'cheer', 96)}</div>
          <div class="up__t">
            <small>${w ? (w[4] ? `${w[0]} ${PT(w[4], w[5] || w[4])}` : PT(`🔒 ${w[1]} در اشتراک فعلی‌ات باز نیست`, `🔒 ${w[2]} ${/s$/.test(w[2]) && !/^The /.test(w[2]) ? 'are' : 'is'} not included in your current plan`)) : PT('👑 ارتقا و فعال‌سازی دوره', '👑 Upgrade & activate')}</small>
            <h3>${cName(c)} <span>• ${cSubj(c)}</span></h3>
            <p>${k.tagline || cDesc(c)}</p>
            ${a.tier ? `<span class="up__now">${PT('اشتراک فعلی:', 'Current plan:')} ${tierBadge(a)}${!a.life ? ` <em>${PT(`${leftText(a.expiry)} مانده`, `${leftText(a.expiry)} left`)}</em>` : ''}</span>` : ''}
          </div>
        </header>
        <div class="up__b">
          <details class="up__intro" ${a.tier || innerWidth < 640 ? '' : 'open'}>
            <summary>📖 ${PT(`معرفی دوره ${c.nameFa}`, `About ${c.nameEn}`)}</summary>
            <p>${k.about || cDesc(c)}</p>
            <div class="up__chips">${k.worlds.map(x => `<span style="--wc:${x.color}"><b dir="ltr">${x.sym}</b>${x.name}</span>`).join('')}</div>
            <ul class="dd__out dd__out--sm">${k.outcomes.slice(0, 4).map(o => `<li>${o}</li>`).join('')}</ul>
          </details>
          <h4 class="acstep"><span>${nf(1)}</span> ${PT('پلن را انتخاب کن', 'Choose a plan')}</h4>
          <div class="up__plans">${[1, 2, 3].map(t => {
            const T0 = TIERS[t], pp = price(t, t === 2 ? ids.slice(0, 2) : ids, st.dur);
            return `<button class="up__plan up__plan--${T0.key} ${st.tier === t ? 'is-on' : ''}" data-tier="${t}" aria-pressed="${st.tier === t}">
              ${t === (need === 9 ? 3 : need === 2 ? 2 : need ? 1 : -1) ? `<span class="up__rec">${PT('پیشنهاد برای همین بخش', 'Recommended for this')}</span>` : t === 3 ? `<span class="up__rec up__rec--gold">${PT('کامل‌ترین', 'Most complete')}</span>` : ''}
              ${a.tier === t ? `<span class="up__cur">${PT('فعال فعلی', 'Current')}</span>` : ''}
              <span class="up__pi">${T0.icon}</span><b>${tShort(t)}</b><small>${t === 3 ? PT('همه دوره‌ها', 'Every course') : t === 2 ? PT('بالینی حرفه‌ای', 'Clinical professional') : PT('آموزشی کامل', 'Complete learning')}</small>
              <span class="up__pp">${promoFits(st.promo, t) ? `<s>${nf(pp)}</s> ${nf(promoPrice(pp, st.promo))}` : nf(pp)} <i>${CUR()}</i></span>
              <ul>${PLAN_FEAT()[t].map(f => `<li class="${f[0] === '✗' ? 'no' : ''}"><i>${f[0]}</i>${f[1]}</li>`).join('')}</ul>
            </button>`;
          }).join('')}</div>
          <h4 class="acstep"><span>${nf(2)}</span> ${PT('مدت اعتبار', 'Duration')}</h4>
          <div class="up__durs">${[1, 2, 3, 4].map(d => `<button class="up__dur ${st.dur === d ? 'is-on' : ''}" data-dur="${d}"><b>${dShort(d)}</b><small>${d > 1 && save(d) > 0 ? PT(`${nf(save(d))}٪ صرفه‌جویی`, `save ${nf(save(d))}%`) : PT('بدون تعهد', 'No commitment')}</small></button>`).join('')}</div>
          ${st.tier === 3 ? `<div class="acok">💎 ${PT(`پکیج الماس همه دوره‌های فعلی (${list.map(x => x.nameFa).join('، ')}) و دوره‌های آینده را باز می‌کند.`, `The Diamond package unlocks every current course (${list.map(x => x.nameEn).join(', ')}) and every future course.`)}</div>` : `
          <h4 class="acstep"><span>${nf(3)}</span> ${PT('دوره‌های دیگر را هم اضافه کن', 'Add other courses')} <small>${PT(`۲ دوره ۱۵٪ • ۳ دوره ۲۵٪ تخفیف${st.tier === 2 ? ' • Pro حداکثر ۲ دوره' : ''}`, `2 courses 15% • 3 courses 25% off${st.tier === 2 ? ' • Pro covers up to 2 courses' : ''}`)}</small></h4>
          <div class="up__more">${list.filter(x => x.id !== c.id).map(x => `<label class="up__add ${st.sel[x.id] ? 'is-on' : ''}" style="--ac:${x.color}"><input type="checkbox" data-add="${x.id}" ${st.sel[x.id] ? 'checked' : ''}><span class="up__addm">${courseMascot(x, 'happy', 34)}</span><span><b>${cName(x)}</b><small>${cSubj(x)}</small></span><i>${st.sel[x.id] ? '✓' : '+'}</i></label>`).join('')}</div>`}
          <div class="up__promo ${pr && pr.ok ? (fits ? 'is-ok' : 'is-warn') : ''}">
            <b>🎁 ${PT('کد تخفیف', 'Discount code')}</b>
            ${pr && pr.ok ? `<div class="up__promoon"><span>✓ <b dir="ltr">${pesc(pr.code)}</b> — ${PT(`${nf(pr.pct)}٪ تخفیف`, `${nf(pr.pct)}% off`)}${pr.label ? ` <small>(${pesc(PT(pr.label, pr.labelEn || pr.label))})</small>` : ''}</span><button class="iconbtn" data-promox aria-label="${PT('حذف کد تخفیف', 'Remove discount code')}">✕</button></div>${fits ? `<small class="up__promosave">${PT(`${nf(p - fin)} ${CUR()} صرفه‌جویی 🎉`, `You save ${nf(p - fin)} ${CUR()} 🎉`)}</small>` : `<div class="acwarn">${PT(`این کد فقط برای ${planNames(pr.plans)} است؛ پلن را عوض کن تا اعمال شود.`, `This code is only for ${planNames(pr.plans)}; change the plan to apply it.`)}</div>`}`
            : `<div class="acrow"><input class="ob__in acin" data-promo dir="ltr" autocomplete="off" spellcheck="false" value="${pesc(st.promoIn)}" placeholder="${PT('مثلاً MED20', 'e.g. MED20')}"><button class="btn btn--ghost" data-promoapply>${PT('اعمال', 'Apply')}</button></div>${st.promoErr ? `<div class="acerr">${pesc(st.promoErr)}</div>` : ''}`}
          </div>
          <div class="up__code">
            <b>🔑 ${PT('کد فعال‌سازی داری؟', 'Have an activation code?')}</b>
            <div class="acrow"><input class="ob__in acin" dir="ltr" autocomplete="off" spellcheck="false" placeholder="${PT('TRP1-… (کد کامل را این‌جا بچسبان)', 'TRP1-… (paste the full code here)')}"><button class="btn btn--brand" data-upact>${PT('فعال‌سازی', 'Activate')}</button></div>
            <div class="acerr" hidden></div>
          </div>
          <div class="acorder" hidden></div>
        </div>
        <footer class="up__sum">
          <div><small>${tShort(st.tier)} • ${dShort(st.dur)} • ${st.tier === 3 ? PT('همه دوره‌ها', 'every course') : PT(`${nf(n)} دوره`, `${nf(n)} course${n === 1 ? '' : 's'}`)} • ${PT(`روزی حدود ${nf(Math.round(fin / [0, 30, 90, 180, 365][st.dur] / 1000) * 1000)} تومان`, `about ${nf(Math.round(fin / [0, 30, 90, 180, 365][st.dur] / 1000) * 1000)} Toman a day`)}</small><span>${fits || full > p ? `<s>${nf(Math.max(full, p))}</s>` : ''}<b>${nf(fin)}</b> <i>${CUR()}</i>${fits ? `<em class="up__off">−${nf(pr.pct)}${PT('٪', '%')}</em>` : ''}</span></div>
          ${SRV && SRV.referral && SRV.referral.myFriendPct ? `<p class="acsrv-note">🤝 ${PT(`تخفیف دعوت دوست (${nf(SRV.referral.myFriendPct)}٪) هنگام ثبت سفارش اعمال می‌شود (اگر از کد تخفیفت بیشتر باشد).`, `Your friend-invite discount (${nf(SRV.referral.myFriendPct)}%) is applied when you order (if it beats your promo code).`)}</p>` : ''}
          ${SRV && SRV.referral && SRV.referral.credit > 0 ? `<label class="acsrv-credit"><input type="checkbox" data-usecredit checked> 👛 ${PT(`استفاده از اعتبار کیف پول (${nf(SRV.referral.credit)} ${CUR()})`, `Use wallet credit (${nf(SRV.referral.credit)} ${CUR()})`)}</label>` : ''}
          <button class="btn btn--gold btn--lg" data-order>🧾 ${PT('ثبت سفارش و دریافت کد', 'Place order & get a code')}</button>
        </footer>`;
      if (keepScroll) card.querySelector('.up__b').scrollTop = y;
    }
    card.addEventListener('click', e => {
      const t = e.target.closest('[data-tier]');
      if (t) {
        const prev = st.tier; st.tier = +t.dataset.tier;
        if (prev === 3 && st.tier < 3) list.forEach(x => { if (x.id !== c.id) st.sel[x.id] = false; });
        if (st.tier === 2) { let k = 0; list.forEach(x => { if (x.id !== c.id && st.sel[x.id] && ++k > 1) st.sel[x.id] = false; }); }
        pSfx('select'); return draw(true);
      }
      const d = e.target.closest('[data-dur]'); if (d) { st.dur = +d.dataset.dur; pSfx('select'); return draw(true); }
      if (e.target.closest('[data-promoapply]')) {
        const inp = card.querySelector('[data-promo]'), v = inp ? inp.value.trim() : '';
        st.promoIn = v;
        if (!v) { st.promoErr = PT('کد تخفیف را بنویس.', 'Type a discount code.'); return draw(true); }
        if (SRV) return srvPromo(v, st, draw, list);
        const r = parsePromo(v);
        if (r && r.ok) { st.promo = r; st.promoErr = ''; pSfx('done'); if (!promoFits(r, st.tier) && r.plans.length === 1) st.tier = r.plans[0]; }
        else { st.promo = null; st.promoErr = (r && r.err) || PT('این کد تخفیف معتبر نیست.', 'This discount code is not valid.'); pSfx('wrong'); }
        return draw(true);
      }
      if (e.target.closest('[data-promox]')) { st.promo = null; st.promoIn = ''; st.promoErr = ''; pSfx('tap'); return draw(true); }
      if (e.target.closest('[data-upact]')) { const inp = card.querySelector('.up__code input'); return tryRedeem(inp.value.trim(), card.querySelector('.up__code .acerr'), inp, () => m.close()); }
      if (e.target.closest('[data-order]')) {
        const sel = list.filter(x => st.sel[x.id]);
        if (SRV) return srvOrder({ tier: st.tier, dur: st.dur, courses: sel.map(x => x.id), promo: st.promo ? st.promo.code : '', use_credit: !!(card.querySelector('[data-usecredit]') || {}).checked }, card.querySelector('.acorder'));
        const base = price(st.tier, sel.map(x => x.id), st.dur), promo = promoFits(st.promo, st.tier) ? st.promo : null, pr = promo ? promoPrice(base, promo) : base;
        const id = 'ORD-' + b32enc(sha256(deviceId() + Date.now() + Math.random())).slice(0, 6);
        // پیام سفارش به زبان رابط؛ پنل مدیر هر دو زبان را می‌خواند (خط‌های ماشینی TRAPO-ORDER/TRAPO-PROMO یکسان‌اند)
        const txt = [
          PT('🧾 سفارش اشتراک ' + CFG.BRAND_FA, '🧾 ' + CFG.BRAND_EN + ' subscription order'),
          '━━━━━━━━━━━━━━',
          `👤 ${PT('نام', 'Name')}: ${(profile() && profile().name) || '—'}`,
          `📱 ${PT('شناسه دستگاه', 'Device')} (Device ID): ${deviceId()}`,
          `📚 ${PT('دوره‌ها', 'Courses')}: ${st.tier === 3 ? PT('همه دوره‌ها (' + list.map(x => x.nameFa).join('، ') + ' + دوره‌های آینده)', 'All courses (' + list.map(x => x.nameEn).join(', ') + ' + future courses)') : sel.map(x => `${cName(x)} (${cSubj(x)})`).join(PT('، ', ', '))}`,
          `💎 ${PT('پلن', 'Plan')}: ${PT(TIERS[st.tier].fa, TIERS[st.tier].en)} — Tier ${st.tier}`,
          `⏳ ${PT('مدت اعتبار', 'Duration')}: ${PT(DUR[st.dur].fa, DUR[st.dur].en)}`,
          promo ? `🏷️ ${PT('قیمت پایه', 'Base price')}: ${nf(base)} ${CUR()}` : null,
          promo ? `🎁 ${PT('کد تخفیف', 'Discount code')}: ${promo.code} (${PT(`${nf(promo.pct)}٪ تخفیف`, `${nf(promo.pct)}% off`)}${promo.label ? ' — ' + PT(promo.label, promo.labelEn || promo.label) : ''})` : null,
          `💰 ${PT('مبلغ', 'Amount')}: ${nf(pr)} ${CUR()}`,
          `🔢 ${PT('کد سفارش', 'Order ID')}: ${id}`,
          `🕒 ${PT('تاریخ', 'Date')}: ${fdatetime(Date.now())}`,
          `🔧 ${'TRAPO-ORDER:' + [deviceId(), st.tier, st.tier === 3 ? ALL_MASK : sel.reduce((mk, x) => mk | x.bit, 0), st.dur].join(':')}`,
          promo ? `🔧 TRAPO-PROMO:${promo.code}:${promo.pct}:${pr}` : null,
          '━━━━━━━━━━━━━━',
          PT('لطفاً کد فعال‌سازی این دستگاه را ارسال کنید. 🙏', 'Please send the activation code for this device. 🙏')
        ].filter(x => x !== null).join('\n');
        const box = card.querySelector('.acorder');
        box.hidden = false;
        box.innerHTML = `<h4>✅ ${PT('سفارش ساخته شد و در کلیپ‌بورد کپی شد', 'Order created and copied to the clipboard')}</h4>${copyBox(txt, 11)}<p class="muted acsmall">${PT(CFG.SUPPORT_HINT, CFG.SUPPORT_HINT_EN)}</p><button class="btn btn--ghost btn--sm" data-copyorder>📋 ${PT('کپی دوباره', 'Copy again')}</button>`;
        box.querySelector('[data-copyorder]').onclick = () => copyText(txt).then(ok => pToast(ok ? PT('📋 کپی شد', '📋 Copied') : PT('متن را دستی کپی کن', 'Copy the text manually'), ok ? '' : 'toast--bad'));
        copyText(txt).then(ok => pToast(ok ? PT('📋 متن سفارش کپی شد؛ برای پشتیبانی بفرست', '📋 Order copied — send it to support') : PT('متن را از کادر دستی کپی کن', 'Copy the text from the box'), ok ? '' : 'toast--bad'));
        setTimeout(() => box.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
        pSfx('done');
      }
    });
    card.addEventListener('change', e => {
      const x = e.target.dataset.add; if (!x) return;
      st.sel[x] = e.target.checked;
      if (st.tier === 2 && list.filter(y => st.sel[y.id]).length > 2) { st.sel[x] = false; pToast(PT('پلن Pro حداکثر ۲ دوره است؛ برای هر ۳ دوره پکیج الماس را انتخاب کن', 'Pro covers up to 2 courses; choose the Diamond package for all of them'), 'toast--bad'); }
      pSfx('select'); draw(true);
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('.up__code input')) card.querySelector('[data-upact]').click(); if (e.key === 'Enter' && e.target.matches('[data-promo]')) card.querySelector('[data-promoapply]').click(); });
    draw();
  }

  /* ================= تنظیمات: پوسته، اندازه نمایش، انیمیشن، پشتیبان ================= */
  const PREF_KEY = 'academy.prefs';
  const prefs = () => Object.assign({ zoom: 1, motion: true }, LS.json(PREF_KEY, {}));
  function applyPrefs() {
    const p = prefs(), h = document.documentElement;
    h.style.setProperty('--z', p.zoom);
    h.style.zoom = p.zoom === 1 ? '' : String(p.zoom);
    h.classList.toggle('no-motion', !p.motion);
  }
  function settingsModal() {
    const m = pModal('', { cls: 'modal--sheet modal--set' });
    const card = m.el.querySelector('.modal__card');
    function draw() {
      const p = prefs(), t = LS.raw('academy.theme') || 'auto', pr = profile() || {};
      card.innerHTML = `<header class="acsheet__h"><span>⚙️</span><div><h3>${PT('تنظیمات', 'Settings')}</h3><small>${PT('روی همه دوره‌ها اعمال می‌شود', 'Applies to every course')}</small></div><button class="iconbtn" data-close aria-label="${PT('بستن', 'Close')}">✕</button></header>
        <div class="acsheet__b">
          <div class="setc">
            <div class="setc__r"><span>🔤 ${PT('اندازه نمایش', 'Display size')}<small>${PT('متن، دکمه‌ها و کارت‌ها با هم بزرگ یا کوچک می‌شوند', 'Text, buttons and cards scale together')}</small></span>
              <div class="seg">${[[0.9, 'کوچک'], [1, 'معمولی'], [1.1, 'بزرگ'], [1.2, 'خیلی بزرگ']].map(z => `<button class="seg__b ${p.zoom === z[0] ? 'is-on' : ''}" data-zoom="${z[0]}">${PT(z[1], { 0.9: 'Small', 1: 'Normal', 1.1: 'Large', 1.2: 'X-Large' }[z[0]])}</button>`).join('')}</div></div>
            <div class="setc__r"><span>🌓 ${PT('رنگ صفحه', 'Page colour')}<small>${PT('صفحه اول و همه دوره‌ها', 'Home and every course')}</small></span>
              <div class="seg">${[['auto', 'خودکار', 'Auto'], ['light', 'روشن', 'Light'], ['dark', 'تیره', 'Dark']].map(x => `<button class="seg__b ${t === x[0] ? 'is-on' : ''}" data-ptheme="${x[0]}">${PT(x[1], x[2])}</button>`).join('')}</div></div>
            <label class="setc__r"><span>✨ ${PT('انیمیشن‌ها', 'Animations')}<small>${PT('خاموش کردن، حرکت‌ها را برای تمرکز یا گوشی‌های ضعیف کم می‌کند', 'Turn off for focus or slower phones')}</small></span><input type="checkbox" class="sw" data-motion ${p.motion ? 'checked' : ''}></label>
            ${MODE === 'dash' ? `<div class="setc__r"><span>✏️ ${PT('نام روی گواهی‌ها', 'Name on certificates')}<small>${pesc(pr.name || '—')}</small></span><button class="btn btn--ghost btn--sm" data-rename>${PT('تغییر', 'Change')}</button></div>` : ''}
            <div class="setc__r"><span>🌐 ${PT('زبان برنامه', 'App language')}<small>${PT('صفحه اول، پنجره‌ها و همه دوره‌ها؛ بلافاصله عوض می‌شود', 'Home, windows and every course — switches instantly')}</small></span>
              <div class="seg">${[['fa', 'فارسی'], ['en', 'English']].map(l => `<button class="seg__b ${(LS.raw('academy.lang') || 'fa') === l[0] ? 'is-on' : ''}" data-lang="${l[0]}" lang="${l[0]}">${l[1]}</button>`).join('')}</div></div>
            ${SRV ? '</div>' + accountHTML() + '<div class="setc">' : ''}
            <label class="setc__r"><span>🎵 ${PT('موسیقی پس‌زمینه', 'Background music')}<small>${PT('آرام و بی‌کلام، داخل همه دوره‌ها', 'Calm and wordless, in every course')}</small></span><input type="checkbox" class="sw" data-gmusic ${prefs().music !== false ? 'checked' : ''}></label>
          </div>
        </div>`;
    }
    card.addEventListener('click', e => {
      const z = e.target.closest('[data-zoom]'); if (z) { const p = prefs(); p.zoom = +z.dataset.zoom; LS.put(PREF_KEY, p); applyPrefs(); return draw(); }
      const t = e.target.closest('[data-ptheme]'); if (t) { setPageTheme(t.dataset.ptheme); return draw(); }
      const lg = e.target.closest('[data-lang]'); if (lg) { setUILang(lg.dataset.lang); if (card.isConnected) draw(); return; }
      if (e.target.closest('[data-rename]')) {
        const v = prompt(PT('نام و نام خانوادگی (روی گواهی‌ها چاپ می‌شود):', 'Full name:'), (profile() || {}).name || '');
        if (v && v.trim()) { const p = profile() || { role: 'سایر', goal: 50, joined: Date.now() }; p.name = v.trim(); LS.put('academy.profile', p); renderDash(); draw(); }
      }
    });
    card.addEventListener('change', e => {
      if (e.target.matches('[data-motion]')) { const p = prefs(); p.motion = e.target.checked; LS.put(PREF_KEY, p); applyPrefs(); }
      if (e.target.matches('[data-gmusic]')) { setMusic(e.target.checked); }
    });
    draw();
  }
  function toggleDashTheme() {
    const t = LS.raw('academy.theme') || 'auto';
    const n = t === 'auto' ? 'dark' : t === 'dark' ? 'light' : 'auto';
    setPageTheme(n);
    pToast(n === 'auto' ? PT('🌓 پوسته خودکار', '🌓 Auto theme') : n === 'dark' ? PT('🌙 پوسته تیره', '🌙 Dark theme') : PT('☀️ پوسته روشن', '☀️ Light theme'));
  }
  const dashTitle = () => { document.title = SUITE ? PT(SUITE.titleFa, SUITE.titleEn) + ' • ' + PT(CFG.BRAND_FA, CFG.BRAND_EN) : PT(CFG.BRAND_FA, CFG.BRAND_EN) + ' • ' + courses().map(c => PT(c.nameFa, c.nameEn)).join(PT('، ', ', ')); };
  /** تغییر زبان سراسری: بلافاصله و بدون بارگذاری دوباره، روی صفحه اول، دوره باز، نوار کناری، بنر و دکمه شناور */
  function setUILang(l) {
    if (l !== 'en' && l !== 'fa') return;
    LS.set('academy.lang', l);
    if (MODE === 'course' || MODE === 'calc') {
      // دوره خودش (با EA.setLang) همه صفحه، نوار کناری و پنجره‌ها را از نو می‌کشد
      if (window.EA && EA.setLang) EA.setLang(l);
    } else {
      document.querySelectorAll('.modal:not(.modal--set) , .pop').forEach(x => x.remove());
      applyDashLang(); dashTitle(); renderDash();
    }
    banner(); fab();
    document.querySelectorAll('.toasts .toast').forEach(x => x.remove()); // اعلان‌های زبان قبلی
    pToast(PT('🌐 زبان: فارسی', '🌐 Language: English'));
  }
  /** جهت و زبان سند صفحه اول (فارسی راست‌به‌چپ، انگلیسی چپ‌به‌راست) */
  function applyDashLang() {
    const en = UILANG() === 'en', h = document.documentElement;
    h.lang = en ? 'en' : 'fa'; h.dir = en ? 'ltr' : 'rtl';
  }
  function applyDashTheme() {
    applyDashLang();
    const t = globalTheme();
    if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
  }
  /* رنگ صفحه سراسری: یک تنظیم برای صفحه اول و همه دوره‌ها */
  function globalTheme() { const t = LS.raw('academy.theme'); return t === 'light' || t === 'dark' ? t : 'auto'; }
  function setPageTheme(t) {
    LS.set('academy.theme', t); applyDashTheme();
    if (window.EA && EA.S && EA.S.get()) { const st = EA.S.get().settings; if (st.theme !== t) { st.theme = t; EA.S.save(); if (MODE === 'course' && !(EA.player && EA.player.active())) try { EA.app.refresh(); } catch (e) { /* */ } } }
    document.querySelectorAll('[data-dtheme]').forEach(x => { const on = x.dataset.dtheme === t; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on); });
  }

  /* ================= رویدادهای سراسری پلتفرم ================= */
  function refreshAll() {
    if (MODE === 'dash') renderDash();
    else if (window.EA && EA.app && EA.S && EA.S.get() && EA.S.get().profile) { if (!(EA.player && EA.player.active())) EA.app.refresh(); }
    banner(); fab();
  }
  function printGuide() {
    document.body.classList.add('printing-guide');
    window.print();
    setTimeout(() => document.body.classList.remove('printing-guide'), 600);
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-ac]');
    if (!b) return;
    const a = b.dataset.ac;
    if (b.tagName === 'A' && b.getAttribute('href') === '#') e.preventDefault();
    switch (a) {
      case 'store': return upgradeModal(b.dataset.course || null, b.dataset.why || null, b.dataset.tier || null);
      case 'settings': return settingsModal();
      case 'activate': return activateModal();
      case 'upsell': return upgradeModal(b.dataset.course || null, b.dataset.why || 'lesson');
      case 'clinic': return clinicModal();
      case 'grand': return needAssets(courses(), grandModal);
      case 'flash': return flashModal();
      case 'backup': return backupModal();
      case 'restore': return restoreDialog();
      case 'quickcalc': return quickCalc();
      case 'printguide': return printGuide();
      case 'music': if (window.EA && EA.app) { EA.app.toggleMusic(); syncMusicUI(true); } return;
      case 'theme': return toggleDashTheme();
      case 'copydev': return copyText(deviceId()).then(() => pToast(PT('📋 شناسه دستگاه کپی شد', '📋 Device ID copied')));
      case 'banneroff': SS.set('academy.banner.off', '1'); return banner();
    }
  });
  // ساعت معتبر با هر فعالیت جلو می‌رود؛ اگر عقب کشیده شود قفل می‌شود
  let lastTouch = 0;
  const touch = () => {
    const now = Date.now(); if (now - lastTouch < 30000) return; lastTouch = now;
    const was = !!TAMPER;
    if (!clockCheck()) { tamperModal(); if (!was && window.EA && EA.app && EA.player && !EA.player.active()) { try { EA.app.refresh(); } catch (e) { /* */ } } }
  };
  ['pointerdown', 'keydown'].forEach(ev => document.addEventListener(ev, touch, true));
  setInterval(() => { lastTouch = 0; touch(); banner(); }, 60000);


  /* ================= موسیقی سراسری: یک کلید برای همه دوره‌ها ================= */
  function setMusic(on) {
    const p = prefs(); p.music = !!on; LS.put(PREF_KEY, p);
    if (window.EA && EA.S && EA.S.get()) { const st = EA.S.get().settings; if (st.music !== !!on) { st.music = !!on; EA.S.save(); try { EA.audio.syncMusic(); } catch (e) { /* */ } } syncMusicUI(false); }
  }
  /** remember: فقط وقتی کاربر خودش موسیقی را عوض کرده، تنظیم سراسری ذخیره شود */
  function syncMusicUI(remember) {
    if (!(window.EA && EA.S && EA.S.get())) return;
    const on = !!EA.S.get().settings.music;
    if (remember) { const p = prefs(); if (p.music !== on) { p.music = on; LS.put(PREF_KEY, p); } }
    document.querySelectorAll('.acside__music').forEach(b => { b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); b.firstChild.textContent = on ? '🎵 ' : '🔇 '; });
    document.querySelectorAll('[data-act="music"]').forEach(b => { if (EA.app && EA.app.musicIcon) { b.innerHTML = EA.app.musicIcon(); b.classList.toggle('is-on', on); } });
  }
  // هر جای دوره که موسیقی روشن/خاموش شود، تنظیم سراسری هم به‌روز می‌شود
  document.addEventListener('click', e => { if (MODE === 'course' && e.target.closest('[data-act="music"], [data-p="music"]')) setTimeout(() => syncMusicUI(true), 60); });
  document.addEventListener('change', e => { if (MODE === 'course' && e.target.matches && e.target.matches('[data-set="music"]')) setTimeout(() => syncMusicUI(true), 60); });

  /* ================= ستون‌های کناری: همراه صفحه می‌آیند و هیچ‌وقت زودتر از محتوا تمام نمی‌شوند ================= */
  function stickyFit() {
    ['.side', '.rail'].forEach(sel => {
      const el = document.querySelector(sel);
      if (!el || getComputedStyle(el).display === 'none') return;
      const t = Math.min(0, innerHeight - el.offsetHeight);
      el.style.setProperty('--stick', t + 'px');
    });
  }
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => stickyFit());
    const watch = () => ['.side', '.rail'].forEach(s => { const el = document.querySelector(s); if (el && !el.dataset.ro) { el.dataset.ro = '1'; ro.observe(el); } });
    document.addEventListener('DOMContentLoaded', watch); setTimeout(watch, 0);
  }
  window.addEventListener('resize', stickyFit);

  /* ================= ایموجی‌هایی که بعضی سیستم‌ها (مثل ویندوز ۱۰) ندارند: جایگزین خودکار به‌جای مربع خالی ================= */
  const EMOJI_ALT = { '🫁': '💨', '🫀': '❤️', '🪨': '⛰️', '🪜': '📶', '🪤': '⚠️', '🫧': '💧', '🩻': '📷', '🩺': '⚕️', '🩹': '➕', '🩸': '💉', '🧊': '❄️', '🤏': '👌' };
  let EMOJI_FIX = null;
  function emojiSupported(ch) {
    try {
      const c = document.createElement('canvas'); c.width = c.height = 24;
      const g = c.getContext('2d', { willReadFrequently: true });
      g.textBaseline = 'top'; g.font = '20px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
      const draw = s => { g.clearRect(0, 0, 24, 24); g.fillText(s, 0, 0); return g.getImageData(0, 0, 24, 24).data; };
      const a = draw(ch), z = draw('\u{10FFFD}');
      let ink = 0, diff = 0, color = 0;
      for (let i = 0; i < a.length; i += 4) { if (a[i + 3]) ink++; if (a[i + 3] !== z[i + 3]) diff++; if (a[i + 3] && (Math.abs(a[i] - a[i + 1]) > 20 || Math.abs(a[i + 1] - a[i + 2]) > 20)) color++; }
      return ink > 10 && diff > 10 && color > 4;
    } catch (e) { return true; }
  }
  function fixEmojiIn(node) {
    if (!EMOJI_FIX) return;
    const walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    let t; while ((t = walk.nextNode())) { const v = t.nodeValue; if (EMOJI_FIX.test(v)) t.nodeValue = v.replace(EMOJI_FIX, m => EMOJI_ALT[m]); }
  }
  function initEmojiFix() {
    const bad = Object.keys(EMOJI_ALT).filter(ch => !emojiSupported(ch));
    if (!bad.length) return;
    EMOJI_FIX = new RegExp(bad.join('|'), 'g');
    fixEmojiIn(document.body);
    new MutationObserver(ms => ms.forEach(m => { m.addedNodes.forEach(n => { if (n.nodeType === 3) { if (EMOJI_FIX.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(EMOJI_FIX, x => EMOJI_ALT[x]); } else if (n.nodeType === 1) fixEmojiIn(n); }); if (m.type === 'characterData') fixEmojiIn(m.target.parentNode || document.body); }))
      .observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  /* ================= راه‌اندازی ================= */
  let MODE = 'dash';
  let MIGRATION = null;
  function setMetaColor(c) {
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', c);
  }
  /* ================= دوره‌های آینده: پوسته و فایل‌های جانبی خودکار ================= */
  /** دوره‌ای که CSS اختصاصی ندارد، پوسته پایه (پیش‌فرض نگار، یا skin در فایل دوره) را با رنگ‌های خودش می‌گیرد.
   *  (خواندن قواعد CSS روی file:// مجاز نیست؛ پس قواعد پایه در زمان ساخت به data-skin گره خورده‌اند) */
  function ensureSkin(D) {
    const h = document.documentElement, id = D.id;
    /* حیطه‌های دوره مجموعه‌ای: سبک مشترک دوره مادر (مثل جعبه واژه‌سازی و شکل‌ها) + سبک‌های ویژه همان حیطه */
    [['suite-css-' + D.parent, D.parent && AC[D.parent] && AC[D.parent].css], ['sub-css-' + id, D.parent && D.css]].forEach(([k, css]) => {
      if (!css || document.getElementById(k)) return;
      const st = document.createElement('style'); st.id = k; st.textContent = css; document.head.appendChild(st);
    });
    if (D.parent) h.dataset.suite = D.parent;
    h.dataset.skin = id;
    const own = getComputedStyle(h).getPropertyValue('--course-css').trim() === '1';
    if (own) return;
    h.dataset.skin = D.skin || 'negar';
    if (document.getElementById('skin-' + id)) return;
    const c = D.color || '#3b5bdb', d = D.dark || c, l = D.light || '#eef2ff';
    const root = `:root:where([data-course="${id}"])`, dk = `color-mix(in srgb, ${c} 24%, #131f24)`, dkT = `color-mix(in srgb, ${c} 55%, #fff)`;
    const st = document.createElement('style');
    st.id = 'skin-' + id;
    st.textContent = `/* رنگ‌های دوره «${id}» روی پوسته «${h.dataset.skin}» */
${root} { --brand: ${c}; --brand-d: ${d}; --brand-l: ${l}; --brand-t: ${d}; }
@media (prefers-color-scheme: dark) { ${root}:not([data-theme="light"]) { --brand-l: ${dk}; --brand-t: ${dkT}; } }
${root}[data-theme="dark"] { --brand-l: ${dk}; --brand-t: ${dkT}; }`;
    document.head.appendChild(st);
  }
  /** فایل‌های جانبی دوره (مثل تصویرهای بالینی) فقط هنگام نیاز: assets: ['courses/data-x-img.js'] */
  function needAssets(list, cb) {
    const srcs = [];
    [].concat(list).forEach(D => assetsOf(D).forEach(src => { if (srcs.indexOf(src) < 0 && !document.querySelector(`script[src="${src}"]`) && !(window.TRAPO_LOADED && TRAPO_LOADED[src])) srcs.push(src); }));
    if (!srcs.length) return cb();
    // نسخه هاست: فایل‌ها رمزنگاری‌شده از سرور گرفته و بعد اجرا می‌شوند
    if (window.TRAPO_LOAD) return window.TRAPO_LOAD(srcs).then(cb, () => cb());
    let left = srcs.length;
    srcs.forEach(src => {
      const el = document.createElement('script');
      el.src = src;
      el.onload = el.onerror = () => { if (--left === 0) cb(); };
      document.head.appendChild(el);
    });
  }

  function bootCourse(id, calc) {
    const D = courseDef(id);
    if (isSuite(D)) return bootSuite(D);
    if (D.parent && !calc && !prereqDone(D)) { location.replace('?course=' + D.parent + '&need=' + id); return; }
    const missing = src => !document.querySelector(`script[src="${src}"]`) && !(window.TRAPO_LOADED && TRAPO_LOADED[src]);
    if (assetsOf(D).some(missing)) {
      return needAssets(D, () => { bootCourse(id, calc); hideBoot(); fab(); banner(); });
    }
    // حیطه‌ای که سرور فایلش را نداد (اشتراک ندارد یا تمام شده): برگشت به صفحه حیطه‌ها با پنجره خرید
    if (D.parent && !D.ready) { location.replace('?course=' + D.parent + '&up=' + id); return; }
    document.documentElement.dataset.course = id;
    ensureSkin(D);
    document.body.classList.add(calc ? 'mode-calc' : 'mode-course');
    setMetaColor(D.color);
    if (!calc) { LS.set('academy.last', rootOf(id)); if (D.parent) LS.set('academy.last.' + D.parent, id); }
    window.EA = {};
    ENGINE.lang(D);
    // زبان این حیطه در فایل جداگانه است: تغییر زبان = باز کردن دوباره با فایل زبان تازه
    if (D.assetsEn) EA.onLang(() => location.reload());
    D.content();
    const C = D.config(window.EA);
    C.key = STORE.courseKey(id); // academy_course_<id>: کلید ثابت پیشرفت این دوره
    C.bit = D.bit;
    EA.C = C; EA.COURSE = D;
    document.title = ((EA.lang === 'en' ? C.titleEn : C.titleFa) || D.nameFa) + ' • ' + (EA.lang === 'en' ? CFG.BRAND_EN : CFG.BRAND_FA);
    if (calc) {
      // ماشین‌حساب درون پنجره فقط می‌خواند: پیشرفت دوره را با نسخه قدیمی‌تر خودش بازنویسی نمی‌کند
      const set = Storage.prototype.setItem;
      Storage.prototype.setItem = function (k, v) { if (this === localStorage && k === C.key) return; return set.call(this, k, v); };
    }
    ENGINE.audio();
    ENGINE.state(C);
    ENGINE.ui(C);
    ENGINE.runner(C);
    D.tools();
    EA.gate = makeGate(id);
    ENGINE.shell(C);
    if (calc) {
      // حالت «فقط ماشین‌حساب» برای دکمه شناور (درون iframe)
      try { sessionStorage.setItem(id + '.in', '1'); } catch (e) { /* */ }
      if (location.hash !== '#/tools') history.replaceState(null, '', location.pathname + location.search + '#/tools');
    }
    try { EA.app.boot(); } catch (e) { console.error(e); hideBoot(); EA.app.crashScreen(e); return; }
    const s = EA.S.get();
    const pm = prefs().music;
    if (pm !== undefined && s.settings.music !== pm) { s.settings.music = pm; EA.S.save(); try { EA.audio.syncMusic(); } catch (e) { /* */ } }
    syncMusicUI(false);
    const g = claimGifts(id, s);
    if (!calc) claimRewards(id);
    if (g) { EA.S.save(); setTimeout(() => EA.ui.toast(`💎 +${nf(g)} ${PT('الماس هدیه پکیج الماس', 'Diamond gift gems')}`), 900); EA.app.refresh(); }
    if (!calc) setTimeout(qcWarm, 2500);
    const run = params.get('run');
    if (run && s.profile) setTimeout(() => {
      if (run === 'clinic') EA.player.clinic();
      else if (run === 'cert') EA.app.certificate();
      history.replaceState(null, '', location.pathname + '?course=' + id + location.hash);
    }, 350);
  }
  function bootDash() {
    MODE = 'dash';
    document.body.classList.add('mode-dash');
    applyDashTheme();
    dashTitle();
    renderDash();
    if (!profile()) onboardModal(renderDash);
  }
  /* ================= ورود نرم به دوره: بدون صفحه سفید ================= */
  /** صفحه ورود (#boot در index.html) پس از ساخته شدن دوره آرام محو می‌شود */
  function hideBoot() {
    const b = document.getElementById('boot');
    if (!b || !b.classList.contains('is-on')) return;
    if (MODE === 'course' && !(window.EA && EA.app)) return; // هنوز فایل‌های جانبی دوره در راه‌اند
    requestAnimationFrame(() => requestAnimationFrame(() => { b.classList.add('is-out'); setTimeout(() => { b.className = ''; }, 320); }));
  }
  /** کلیک روی دوره در صفحه اول: همان صفحه ورودِ دوره فوراً ظاهر می‌شود و بعد صفحه دوره باز می‌شود */
  function enterCourse(a, id, e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    const b = document.getElementById('boot'); if (!b) return;
    e.preventDefault();
    const D = courseDef(id);
    b.setAttribute('data-c', id);
    b.firstChild.innerHTML = courseMascot(D, 'happy', 120);
    b.lastChild.textContent = PT(D.nameFa, D.nameEn);
    b.className = 'is-on is-enter';
    const go = () => { location.href = a.href; };
    if (document.documentElement.classList.contains('no-motion') || matchMedia('(prefers-reduced-motion: reduce)').matches) go(); else setTimeout(go, 170);
  }
  document.addEventListener('click', e => {
    if (MODE !== 'dash') return;
    const a = e.target.closest('a[href^="?course="]'); if (!a) return;
    const m = /^\?course=(\w+)/.exec(a.getAttribute('href'));
    if (m && courseDef(m[1])) enterCourse(a, m[1], e);
  });
  // برگشت با دکمه Back (صفحه از حافظه مرورگر برمی‌گردد): صفحه ورود نباید روی صفحه اول بماند
  window.addEventListener('pageshow', e => { if (e.persisted && MODE === 'dash') { const b = document.getElementById('boot'); if (b) b.className = ''; } });
  /** شخصیت هر دوره برای صفحه ورود (پیش از بارگذاری موتور) نگه داشته می‌شود */
  function cacheArt() {
    courses().forEach(c => {
      const k = 'academy.art.' + c.id, v = courseMascot(c, 'happy', 120);
      if (LS.raw(k) !== v) LS.set(k, v);
      const meta = JSON.stringify([c.nameFa, c.nameEn || c.nameFa, c.color || '']);
      if (LS.raw(k + '.m') !== meta) LS.set(k + '.m', meta);
    });
  }
  /* بازدارنده‌های ساده برای کاربران عادی (کد اصلی در نسخه کاربران درهم و ناخوانا است) */
  function deterInspect() {
    document.addEventListener('contextmenu', e => { if (!e.target.closest('input, textarea, [contenteditable]')) e.preventDefault(); });
    document.addEventListener('keydown', e => {
      const k = (e.key || '').toLowerCase(), c = e.ctrlKey || e.metaKey;
      if (k === 'f12' || (c && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) || (c && (k === 'u' || k === 's'))) e.preventDefault();
    }, true);
  }
  function start() {
    try { deterInspect(); } catch (e) { /* */ }
    // پیش از هر چیز: داده نسخه‌های قبلی به کلیدهای ثابت می‌آید و بیت دوره‌ها میخ می‌شود (بدون حذف هیچ داده‌ای)
    try { MIGRATION = STORE.migrateAndSyncState(); } catch (e) { console.error('[academy] migrate', e); }
    applyPrefs();
    watchLayers();
    try { initEmojiFix(); } catch (e) { /* */ }
    deviceId();
    const ok = clockCheck();
    try { srvInit(); } catch (e) { console.error('[academy] server sync', e); }
    const calc = params.get('calc'), cid = params.get('course');
    const known = id => !!id && (courses().some(c => c.id === id) || (!!SUBC[id] && courses().some(c => c.id === SUBC[id].parent)));
    if (known(calc)) { MODE = 'calc'; bootCourse(calc, true); if (!ok) tamperModal(); return; }
    if (known(cid)) {
      MODE = 'course';
      if (!ok) { document.documentElement.dataset.course = cid; document.body.classList.add('mode-dash'); renderDash(); tamperModal(); hideBoot(); return; }
      bootCourse(cid, false);
    } else {
      bootDash();
      if (!ok) tamperModal();
    }
    banner(); fab(); expiryNotice();
    hideBoot();
    setTimeout(() => { try { cacheArt(); } catch (e) { /* */ } }, 1500);
    if (location.protocol.startsWith('http') && 'serviceWorker' in navigator && !SRV) {
      window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* بدون حالت آفلاین */ }); });
    }
  }

  window.ACADEMY = {
    CFG, TIERS, DUR,
    access, summary, deviceId, parseCode, redeem, clockCheck,
    theme: globalTheme, setTheme: setPageTheme,
    upsell, storeModal, upgradeModal, activateModal, settingsModal,
    sideHTML, topChips, profileHTML, lockedTools, vipBadge,
    hasProfile, autoProfile, wantIntro, restoreDialog, backupString, restoreString,
    certCode, recordCert, storyCard, needAssets, dailyCase, setUILang, uiLang: UILANG, roleName,
    store: STORE, migration: () => MIGRATION, courses,
    afterRender: (cid, view) => {
      fab(); syncMusicUI(false); requestAnimationFrame(stickyFit); guardAnims();
      // کیس‌های ترکیبی ICU فقط داخل دوره‌ها: کارت ویژه در تب تمرین
      if (view === 'tools') attachClinicalNote(cid);
      const grid = view === 'practice' && document.querySelector('#view .pgrid');
      if (grid && !grid.querySelector('.pcard--flash')) grid.insertAdjacentHTML('afterbegin', flashCardHTML(cid));
      if (grid && !grid.querySelector('.pcard--icu')) {
        const ok = summary().grand, g = LS.json('academy.grand', {}), n = GR().filter(x => g[x.id] && g[x.id].passed).length;
        grid.insertAdjacentHTML('beforeend', `<article class="pcard pcard--wide pcard--icu"><div class="pcard__i">🚨</div><h3>${PT('شیفت اورژانس: کیس‌های ترکیبی ICU', 'ICU grand rounds')}</h3><p>${PT(`${nf(GR().length)} بیمار بدحال که الکترولیت، گاز خون و معاینه تغذیه‌محور را با هم می‌خواهند • ${nf(n)} از ${nf(GR().length)} قبول`, `${nf(GR().length)} critically ill patients combining electrolytes, blood gases and NFPE`)}</p><button class="btn ${ok ? 'btn--red' : 'btn--ghost'} btn--block" data-ac="grand">${ok ? PT('ورود به شیفت 🚑', 'Start the shift 🚑') : PT('🔒 حداقل ۲ دوره یا پکیج الماس', '🔒 2 courses or Diamond')}</button></article>`);
      }
    },
    sha256hex: s => hex(sha256(s))
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
