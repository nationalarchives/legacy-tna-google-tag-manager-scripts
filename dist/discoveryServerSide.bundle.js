!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushInDataLayer=void 0;t.pushInDataLayer=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===r(e))&&window.dataLayer.push(e),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractMetaTagContent=void 0;t.extractMetaTagContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=document.querySelector("meta[name = ".concat(e," ]"));return t?t.getAttribute("content"):null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeNullValues=void 0;t.removeNullValues=function e(t){for(var n=Object.keys(t),r=function(n){t[n]===Object(t[n])?e(t[n]):null!==t[n]&&void 0!==t[n]||delete t[n],t[n]===Object(t[n])&&0===Object.keys(t[n]).length&&delete t[n]},o=0;o<n.length;o++)r(n[o]);return t}},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(25),o=n(26),i=n(2);(0,n(0).pushInDataLayer)((0,i.removeNullValues)((0,o.buildObject)((0,r.watermarkCheck)("DCSext\\.imgviewer"))))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.watermarkCheck=void 0;t.watermarkCheck=function(e){return null!==document.querySelector("meta[name = ".concat(e," ]"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildObject=void 0;var r=n(27),o=n(28),i=n(1),u=n(29);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.buildObject=function(e){var t=(0,u.verifyUrl)(window.location.pathname,"/account/",(0,i.extractMetaTagContent)("DCSext\\.signedin"),(0,i.extractMetaTagContent)("WT\\.cg_n"));return e?a((0,r.watermarkObject)("ivp",(0,i.extractMetaTagContent)("DCSext\\.imgviewer"),"Image viewer","Below record description"),(0,o.defaultDiscoveryServerSideObject)(t,(0,i.extractMetaTagContent)("DCSext\\.docref"),(0,i.extractMetaTagContent)("DCSext\\.subscription"),(0,i.extractMetaTagContent)("DCSext\\.signedin"))):(0,o.defaultDiscoveryServerSideObject)(t,(0,i.extractMetaTagContent)("DCSext\\.docref"),(0,i.extractMetaTagContent)("DCSext\\.subscription"),(0,i.extractMetaTagContent)("DCSext\\.signedin"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.watermarkObject=void 0;t.watermarkObject=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{ecommerce:{promoView:{promotions:[{id:t[0],name:t[1],creative:t[2],position:t[3]}]}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDiscoveryServerSideObject=void 0;t.defaultDiscoveryServerSideObject=function(e,t,n,r){return{ContentGroup:e,customDimension1:t,customDimension2:n,customDimension3:r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verifyUrl=void 0;t.verifyUrl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],o=t[1],i=t[2],u=t[3];return t.every(function(e){return"string"==typeof e})?-1!==r.indexOf(o)&&"signed-in"===i?"Customer account":u:null}}]);