!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}({1:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",function(){return o});var o=function(t){return window.dataLayer||(window.dataLayer=[]),(t||"object"===r(t))&&window.dataLayer.push(t),t}},12:function(t,e,n){"use strict";n.r(e),n.d(e,"checkValue",function(){return i});var r=n(1),o=n(2),u=n(5),i=function(t){return-1!==t.target.getAttribute("href").indexOf("result")?Object(o.a)("search results bookmark"):Object(o.a)("catalogue description bookmark")};document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("#bookmarks .bookmarkMain a");if(t.length>0)for(var e=t,n=0;n<e.length;n++)e[n].addEventListener("click",function(t){Object(r.a)(Object(u.a)("discovery","discovery","bookmark link",i(t)))})})},2:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return"string"!=typeof t?null:t[0].toUpperCase()+t.slice(1)}},5:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(2),o=function(t,e,n,o){return"string"!=typeof t||"string"!=typeof e||"string"!=typeof n||"string"!=typeof o?null:{event:Object(r.a)(t),eventCategory:Object(r.a)(e),eventAction:Object(r.a)(n),eventLabel:o}}}});