(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[27290],{989077:(r,e,n)=>{"use strict";n.d(e,{LR:()=>g,RP:()=>p,UC:()=>y});var t=n(178598),o=n.n(t),a=n(997995),l=n.n(a),u=(n(279003),n(489597),n(966085),n(882702)),i=(n(727418),n(972163)),c=(n(505055),n(3674),n(252628),n(227361),n(91175),n(66604),n(187185),n(630998),n(478718),n(218721),n(493220),n(423570),n(957557),n(747037),n(385564)),f=n.n(c);function s(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a,l,u=[],i=!0,c=!1;try{if(a=(n=n.call(r)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(t=a.call(n)).done)&&(u.push(t.value),u.length!==e);i=!0);}catch(r){c=!0,o=r}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(r,e)||function(r,e){if(r){if("string"==typeof r)return v(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}n(313311),n(406557);var d=function(r,e,n,t){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return f()([[[/\&/g,"&amp;"]],r?[]:[[/\"/g,"&quot;"]],e?[]:[[/\'/g,"&apos;"]],n?[]:[[/\>/g,"&gt;"]],t?[]:[[/\</g,"&lt;"]]]).reduce((function(r,e){var n=s(e,2),t=n[0],o=n[1];return r.replace(t,o)}),o)};d.bind(null,!0,!0,!0,!1),d.bind(null,!1,!1,!0,!1),n(624262),n(986267),new DOMParser;var g=function(r,e,n){var t=new Blob([r],{type:n});o().saveAs(t,e)},p=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snapshot.png",n=arguments.length>2?arguments[2]:void 0;g(l()(r),e,n)},y=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new u.Promise((function(n,t){var o=new FileReader;o.onload=function(){try{var r=JSON.parse(o.result);n({geoJSON:r,errors:(0,i.$)(r).filter((function(r){return e||"message"!==r.level}))})}catch(r){t(r)}},o.onerror=function(){t(o.error.name)},o.readAsText(r)}))}},272810:()=>{},486799:()=>{}}]);