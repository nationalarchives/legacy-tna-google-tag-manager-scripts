!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=41)}({0:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushInDataLayer=void 0;t.pushInDataLayer=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===n(e))&&window.dataLayer.push(e),e}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalizeFirstLetter=void 0;t.capitalizeFirstLetter=function(e){return"string"!=typeof e?null:e[0].toUpperCase()+e.slice(1)}},4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderObjFunc=void 0;var n=r(2);t.renderObjFunc=function(e,t,r,o){return"string"!=typeof e||"string"!=typeof t||"string"!=typeof r||"string"!=typeof o?null:{event:(0,n.capitalizeFirstLetter)(e),eventCategory:(0,n.capitalizeFirstLetter)(t),eventAction:(0,n.capitalizeFirstLetter)(r),eventLabel:o}}},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkValue=void 0;var n=r(0),o=r(2),i=r(4),u=function(e){return-1!==e.target.getAttribute("href").indexOf("result")?(0,o.capitalizeFirstLetter)("search results bookmark"):(0,o.capitalizeFirstLetter)("catalogue description bookmark")};t.checkValue=u,document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("#bookmarks .bookmarkMain a");if(e.length>0)for(var t=e,r=0;r<t.length;r++)t[r].addEventListener("click",function(e){(0,n.pushInDataLayer)((0,i.renderObjFunc)("discovery","discovery","bookmark link",u(e)))})})}});