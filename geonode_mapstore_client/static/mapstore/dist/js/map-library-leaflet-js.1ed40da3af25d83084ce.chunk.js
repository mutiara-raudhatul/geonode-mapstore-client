(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[37161,45992,7654],{921914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>d,pb:()=>m,qb:()=>y,Re:()=>v,ih:()=>E,xy:()=>h,jL:()=>b,oz:()=>O,ph:()=>_,lF:()=>I,gG:()=>g,cb:()=>T,GI:()=>q,B1:()=>N,fv:()=>P,gc:()=>R,zX:()=>F,ZF:()=>w,Zb:()=>A,DW:()=>S,Xp:()=>M,Fm:()=>D,sV:()=>j,Mn:()=>C,LU:()=>G,XP:()=>L,WU:()=>k,JB:()=>U,g:()=>Y,ws:()=>H,HP:()=>x,aN:()=>Z,Pg:()=>W,u0:()=>X,TM:()=>K,PM:()=>Q,lK:()=>V,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>tt,Zw:()=>et,RA:()=>nt,am:()=>rt,ZM:()=>ot,wm:()=>it,Y$:()=>ut,Qu:()=>at,kT:()=>ct});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",E="CLEAR_WARNING",h="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",_="TOGGLE_MAPINFO_STATE",I="UPDATE_CENTER_TO_MARKER",g="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",q="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",P="IDENTIFY:EDIT_LAYER_FEATURES",R="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",F="IDENTIFY:SET_MAP_TRIGGER",w="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",A="IDENTIFY:SET_SHOW_IN_MAP_POPUP",S="IDENTIFY:IDENTIFY_IS_MOUNTED",M="IDENTIFY:INIT_PLUGIN";function D(t,e,n,r,i){return{type:o,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:i}}function j(t,e,n,r){return{type:i,error:e,reqId:t,requestParams:n,layerMetadata:r}}function C(t,e,n,r){return{type:u,reqId:t,exceptions:e,requestParams:n,layerMetadata:r}}function G(){return{type:v}}function L(){return{type:E}}function k(t,e){return{type:c,reqId:t,request:e}}function U(t,e,n,r){return{type:y,layer:t,request:e,metadata:n,queryableLayers:r}}function Y(){return{type:s}}function H(t){return{type:f,infoFormat:t}}function x(){return{type:l}}function Z(){return{type:p}}function B(t){return{type:d,reverseGeocodeData:t.data}}function W(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(B(t))})).catch((function(t){e(B(t))}))}}function X(){return{type:m}}function K(){return{type:_}}function Q(t){return{type:I,status:t}}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:t,layer:e,filterNameList:n,overrideParams:r,itemId:o}}function z(t){return{type:b,point:t}}function J(t){return{type:O,enabled:t}}function $(t){return{type:g,index:t}}var tt=function(){return{type:T}},et=function(t){return{type:q,format:t}},nt=function(t){return{type:N,showCoordinateEditor:t}},rt=function(t){return{type:P,layer:t}},ot=function(t){return{type:R,query:t}},it=function(t){return{type:F,trigger:t}},ut=function(t){return{type:A,value:t}},at=function(t){return{type:S,isMounted:t}},ct=function(t){return{type:M,cfg:t}}},647310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var n=c()({q:t},s,e||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=c()({lat:t.lat,lon:t.lng},e||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},615402:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(675263),o=n.n(r),i=n(124852),u=n.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function l(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=n(868195).FormattedHTMLMessage,y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(o){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function a(){return c(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return this.context.intl?u().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(u().Component);d(y,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),d(y,"contextTypes",{intl:o().object});const v=y},48507:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=function(){return n(935701),{Map:n(739726).Z,Layer:n(152792).Z,Feature:n(444948).Z,MeasurementSupport:n(442047).Z,Overview:n(521975),ScaleBar:n(20564),DrawSupport:n(791753).Z,PopupSupport:n(967465).Z}}},808797:(t,e,n)=>{"use strict";n.d(e,{rp:()=>c,Ov:()=>f,wd:()=>l,L0:()=>p}),n(701469);var r=n(91175),o=n.n(r),i=n(807654),u=n.n(i);function a(t){var e=Math.floor(t),n=60*(t-e),r=Math.floor(n),o=60*(n-r);return e+"° "+r+"' "+Math.floor(o)+"'' "}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.measureTrueBearing,r=void 0!==n&&n,o=e.fractionDigits,i=void 0===o?0:o,u="";if(r){var c="";t>=0&&t<10?c="00":t>10&&t<100&&(c="0");var s=i>0?t.toFixed(i):Math.floor(t);u=c+s+"°"}else t>=0&&t<90?u="N "+a(t)+"E":t>90&&t<=180?u="S "+a(180-t)+"E":t>180&&t<270?u="S "+a(t-180)+"W":t>=270&&t<=360&&(u="N "+a(360-t)+"W");return u}var s={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return s[e]&&s[e][n]?t*s[e][n]:t}var l=function(t){return!u()(parseFloat(t[0]))&&!u()(parseFloat(t[1]))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type,r=e;if("LineString"===n){if((r=e.filter(l)).length<2)return[]}else if("Polygon"===n){if((r=o()(e).filter(l)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},45992:(t,e,n)=>{"use strict";n.d(e,{h:()=>f,Z:()=>l});var r=n(535937),o=n.n(r),i=n(836882),u=n(737275);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n,r,a,s,f=i.Z;if("custom"===t)n=e;else if(a=(s=t.split("."))[0],r=s[1],!(n=f[a]))throw new Error("No such provider ("+a+")");var l={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(a||n.url)+" ("+r+")");var p,d=n.variants[r];p="string"==typeof d?{variant:d}:d.options,l={url:d.url||l.url,options:c(c({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(s.splice(1,s.length-1).join(".")));var m="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&m&&(l.url="http:"+l.url),l.options.retina&&(e.detectRetina&&u.ZP.getBrowserProperties().retina?e.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,n){return t(f[n].options.attribution)}))}(l.options.attribution));var y=c(c({},l.options),o()(e,(function(t){return void 0!==t})));return[l.url,y]};const l={getLayerConfig:f}},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},807654:(t,e,n)=>{var r=n(281763);t.exports=function(t){return r(t)&&t!=+t}},893379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function u(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],s=n[c]||0,f="".concat(c," ").concat(s);n[c]=s+1;var l=u(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:y(p,e),references:1}),r.push(f)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,m=0;function y(t,e){var n,r,o;if(e.singleton){var i=m++;n=d||(d=c(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var c=a(t,e),s=0;s<n.length;s++){var f=u(n[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=c}}}}}]);