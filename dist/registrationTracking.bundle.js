!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}({1:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}));var r=function(t){return window.dataLayer||(window.dataLayer=[]),(t||"object"===o(t))&&window.dataLayer.push(t),t}},18:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(3);window.addEventListener("DOMContentLoaded",(function(){var t,e,n,c,a,i,u,d,l,m,b,f,s,y,g,p,v,j,O,A,E,w=document.getElementById("regForm"),x=Array.from(document.querySelectorAll(".field-validation-error")),h=[];try{e=document.getElementById("Name"),n=e.getAttribute("name"),c=document.getElementById("Email"),a=c.getAttribute("name"),i=document.getElementById("ConfirmEmail"),u=i.getAttribute("name"),d=document.getElementById("Country"),l=d.getAttribute("name"),m=document.getElementById("Password"),b=m.getAttribute("name"),f=document.getElementById("ConfirmPassword"),s=f.getAttribute("name"),y=document.getElementById("ReaderTicket"),g=y.getAttribute("name"),p=document.getElementById("acceptTCs"),v=p.getAttribute("name"),j=document.getElementById("MailingCondition"),O=j.getAttribute("name"),A=document.getElementById("ContactCondition"),E=A.getAttribute("name")}catch(t){console.error("Error in registrationTracking.js: ".concat(t))}var B;if(w.addEventListener("submit",(function(){Object(o.a)({event:"Discovery",eventCategory:"Account Registration",eventAction:"Registration submits",eventLabel:"".concat(n,": ").concat(Object(r.a)(e,"text")," > ").concat(a,": ").concat(Object(r.a)(c,"text")," > ").concat(u,": ").concat(Object(r.a)(i,"text")," > ").concat(l,": ").concat(Object(r.a)(d,"select-one")," > ").concat(b,": ").concat(Object(r.a)(m,"password")," > ").concat(s,": ").concat(Object(r.a)(f,"password")," > ").concat(g,": ").concat(Object(r.a)(y,"text")," > ").concat(v,": ").concat(Object(r.a)(p,"checkbox")," > ").concat(O,": ").concat(Object(r.a)(j,"checkbox")," > ").concat(E,": ").concat(Object(r.a)(A,"checkbox"))})})),x.length>0){for(var I=x,S=0;S<I.length;S++)B=I[S],h.push(B.getAttribute("data-valmsg-for")+": "+B.innerHTML);t=h.join(" > "),Object(o.a)({event:"Discovery",eventCategory:"Account Registration",eventAction:"Registration errors",eventLabel:t})}}))},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t,e){return t instanceof Element&&t.type==e?"checkbox"===e?t.checked?"Yes":"No":""!==t.value?"Yes":"No":null}}});