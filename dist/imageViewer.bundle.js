!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({1:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",function(){return o});var o=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===r(e))&&window.dataLayer.push(e),e}},18:function(e,t,n){"use strict";n.r(t);var r=n(1);if(Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}var a=function(e){var t,n,o,a;("A"===e.target.nodeName||"SELECT"===e.target.nodeName||e.target.matches("#thumbPanel img")||e.target.matches(".control-buttons span"))&&Object(r.a)((t="Discovery image viewer",n="Discovery",o="Image viewer functions",a=function(e,t){return e.target.matches("#thumbPanel img")?"View full size image":e.target.matches("select")?"Page number":e.target.getAttribute(t)}(e,"title"),{event:t||"no event",eventCategory:n||"no event category",eventAction:o||"no event action",eventLabel:a||"no event label"}))};document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("imageViewer");e&&e&&e.addEventListener("click",a,!1)})}});