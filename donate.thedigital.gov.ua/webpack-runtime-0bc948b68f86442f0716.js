!function(){"use strict";var e,t,n,r,a,o,f,c={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=c,i.amdO={},e=[],i.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var f=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(f=!1,a<o&&(o=a));if(f){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},i.d(a,o),a},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({69:"e3ae4fdb",75:"1f25fb04",80:"a3f910ba",82:"91472edf",150:"839fce4b",196:"f7fd0995",203:"10023563",218:"a5cab8d3",323:"6cf28f96",401:"a7c91fa1",455:"0fc6fe67",482:"061e6b60",529:"66da51db",532:"styles",657:"d3d6f936",662:"29107295",678:"component---src-pages-index-js",743:"16707403",766:"8015bd09",770:"46587f98",774:"framework",814:"1385979a",823:"01faf37a",845:"922edf34",860:"79312bba",905:"d0358ebe",985:"d8158746",992:"adad2a10"}[e]||e)+"-"+{40:"5894d3405f09474d0260",69:"58333093ed7145fa43fb",75:"e2cf69ee320bed23c8d8",80:"6d0df544e5ae2d8f7fad",82:"010c587864c3571136a9",150:"525044e1d6dff67c2603",196:"a8bfb571c950ea7b1df1",203:"97dc1178de6e74c0f390",218:"f2a2a7a6cfe360c097ac",231:"e852f7c6278747dd53f6",314:"0cf8d1af4adced3c4501",323:"1da684c1f38d058c8686",401:"6ef2eec03ee69617a2aa",455:"1685b2bd21048cedff40",482:"e84090297980fe656f0d",514:"47887a42ddbdbbcf7c1c",529:"bdc48f1733ecccc8e864",532:"12a8a332219d60e25deb",610:"5563ee1277091c18307a",644:"e78d613819e13a16b88d",657:"2767700947921d53d83d",662:"389abc4aa376956f2c38",678:"9534b80fb561def48ee6",711:"082cef465c0c03d2894c",743:"e120f336a692d2511664",766:"5d0f7936e4d4f8aadc84",770:"95eced336cd8e70d0d12",774:"d9b093309510bbd6a081",814:"a334d6ea6d803b8a5ec9",823:"755c9c4d32d5994b8393",845:"be062b6b3737e5889ba4",860:"571eeaf6388bb9d00792",905:"77968bf9844bf5a44e62",985:"d21af01654cfb2fa63b9",992:"35bbce72da09919951d2"}[e]+".js"},i.miniCssF=function(e){return"styles.b342a233b260c273ecd8.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},a="gatsby-starter-minimal:",i.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var f,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+n){f=l;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",a+n),f.src=e),r[e]=[t];var s=function(t,n){f.onerror=f.onload=null,clearTimeout(b);var a=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),c&&document.head.appendChild(f)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="/",o=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),a=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(a===e||a===t))return f}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var f;if((a=(f=o[r]).getAttribute("data-href"))===e||a===t)return f}}(r,a))return t();!function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var f=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=f,d.request=c,a.parentNode.removeChild(a),r(d)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},f={658:0},i.f.miniCss=function(e,t){f[e]?t.push(f[e]):0!==f[e]&&{532:1}[e]&&t.push(f[e]=o(e).then((function(){f[e]=0}),(function(t){throw delete f[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var o=i.p+i.u(t),f=new Error;i.l(o,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,r[1](f)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],f=n[1],c=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in f)i.o(f,r)&&(i.m[r]=f[r]);if(c)var u=c(i)}for(t&&t(n);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-0bc948b68f86442f0716.js.map