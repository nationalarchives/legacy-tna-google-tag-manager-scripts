!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=35)}({0:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushInDataLayer=void 0;t.pushInDataLayer=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===o(e))&&window.dataLayer.push(e),e}},35:function(e,t,n){"use strict";var o=n(36),r=n(37),a=n(0);if(Element&&!Element.prototype.matches){var u=Element.prototype;u.matches=u.matchesSelector||u.mozMatchesSelector||u.msMatchesSelector||u.oMatchesSelector||u.webkitMatchesSelector}var c=function(e){("A"===e.target.nodeName||"SELECT"===e.target.nodeName||e.target.matches("#thumbPanel img")||e.target.matches(".control-buttons span"))&&(0,a.pushInDataLayer)((0,o.controlObj)("Discovery image viewer","Discovery","Image viewer functions",(0,r.getEventLabel)(e,"title")))};document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("imageViewer");e&&e&&e.addEventListener("click",c,!1)})},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.controlObj=void 0;t.controlObj=function(e,t,n,o){return{event:e||"no event",eventCategory:t||"no event category",eventAction:n||"no event action",eventLabel:o||"no event label"}}},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEventLabel=void 0;t.getEventLabel=function(e,t){return e.target.matches("#thumbPanel img")?"View full size image":e.target.matches("select")?"Page number":e.target.getAttribute(t)}}});