parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=c(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,o,i=!0,a=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return i=r.done,r},e:function(r){a=!0,o=r},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw o}}}}function n(r){return o(r)||t(r)||c(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return u(r)}function i(r,n){return l(r)||f(r,n)||c(r,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(r,n){if(r){if("string"==typeof r)return u(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,n):void 0}}function u(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function f(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);t=!0);}catch(u){o=!0,i=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}}function l(r){if(Array.isArray(r))return r}for(var s=document.querySelectorAll(".button"),d=i(s,2),v=d[0],y=d[1],h=document.querySelectorAll(".message"),m=i(h,3),b=m[0],w=m[1],g=m[2],p=n(document.getElementsByClassName("field_cell")),A=[],L=document.getElementById("score"),S=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],E=0,k=0;k<4;k++){A[k]=[];for(var I=0;I<4;I++)A[k].push(p[E]),E++}var j=0;function M(r){switch(r.code){case"ArrowUp":O(),D();break;case"ArrowDown":T(),D();break;case"ArrowRight":q(),D();break;case"ArrowLeft":_(),D()}}function O(){for(var r in S){var n=[S[0][r],S[1][r],S[2][r],S[3][r]];for(var e in n=x(n))S[e][r]=n[e]}U()}function T(){for(var r in S){var n=[S[0][r],S[1][r],S[2][r],S[3][r]];for(var e in(n=x(n.reverse())).reverse(),n)S[e][r]=n[e]}U()}function _(){for(var r in S)S[r]=x(S[r]);U()}function q(){for(var r in S)S[r]=x(S[r].reverse()),S[r].reverse();U()}function x(r){r=C(r);for(var n=0;n<r.length;n++)r[n]===r[n+1]&&(r[n]*=2,j+=r[n],2048===r[n]&&R(),r[n+1]=0);for(var e=(r=C(r)).length;e<4;e++)r.push(0);return H(j),r}function B(r){return r.reduce(function(r,n){return 0===n?r+1:r},0)}function C(r){return r.filter(function(r){return 0!==r})}function U(){A.forEach(function(r,n){r.forEach(function(r,e){$(r,S[n][e])})})}function D(){var r=S.reduce(function(r,n){return r+B(n)},0);if(0===r)return N();for(var n=Math.floor(Math.random()*r),e=Math.floor(100*Math.random())<=10?4:2,t=0;t<S.length;t++){for(var o=!1,i=0;i<S[t].length;i++)if(0===S[t][i]){if(0===n){S[t][i]=e,o=!0;break}n-=1}if(o)break}return U(),!0}function H(r){L.innerHTML=r}function N(){b.classList.remove("hidden"),window.removeEventListener("keydown",M)}function R(){w.classList.remove("hidden"),window.removeEventListener("keydown",M)}function $(r,n){r.classList="field_cell",r.classList.add("field_cell--".concat(n))}v.addEventListener("click",function(){v.classList.toggle("hidden"),y.classList.toggle("hidden"),g.classList.toggle("hidden"),window.addEventListener("keydown",M),D()}),y.addEventListener("click",function(){var n,e=r(S);try{for(e.s();!(n=e.n()).done;){n.value.fill(0,0,4)}}catch(t){e.e(t)}finally{e.f()}H(j=0),U(),D(),b.classList.add("hidden"),window.addEventListener("keydown",M)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a1eb1b9b.js.map