(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[92184],{532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(675263),o=n.n(r),i=n(124852),u=n.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return u().createElement("div",{className:o,style:l({width:t,height:t,overflow:"hidden"},r)},!i&&u().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},892761:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(124852),o=n.n(r),i=n(322843),u=n(882017),a=n(532425),c=n(375875),l=n.n(c),f=["jpg","jpeg","png"],s=["mp4","mpg","avi","m4v","mp2","3gp","flv","vdo","afl","mpga","webm"],p=["glb","gltf"],d=["pcd"];function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=n(991288),b=n(535721),g=["resource"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var h=(0,r.lazy)((function(){return Promise.all([n.e(80813),n.e(4333)]).then(n.bind(n,504333))})),O={image:u.ZP,video:u.ZP,pdf:function(e){var t=e.src,n=m((0,r.useState)(null),2),i=n[0],u=n[1],c=m((0,r.useState)(!1),2),f=c[0],s=c[1];return(0,r.useEffect)((function(){s(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/pdf";return l().get(e,{responseType:"blob"}).then((function(e){var n=e.data,r=new Blob([n],{type:t});return URL.createObjectURL(r)}))}(t).then((function(e){s(!1),u(e)})).finally((function(){s(!1)}))}),[]),f?o().createElement("div",{className:"pdf-loader"},o().createElement(a.Z,{size:70})):o().createElement("iframe",{className:"gn-pdf-viewer",type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"100%",width:"100%",src:i})},gltf:h,pcd:h,unsupported:function(){return o().createElement(y.Z,{msgId:"gnhome.noPreview",icon:"file"})}},j={video:{mode:"view",inView:!0,fit:"contain"},image:{fit:"contain",enableFullscreen:!0,loaderComponent:function(){return o().createElement("div",{className:"pdf-loader"},o().createElement(a.Z,{size:70}))}},pdf:{},unsupported:{}};const E=function(e){var t,n=e.resource,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,g),u=(0,b.NN)(),a=(n&&(u[n.subtype]||u[n.resource_type])||{}).canPreviewed,c=(null==n?void 0:n.pk)&&a&&a(n);if(n&&c){var l="pdf"===(t=n.extension)?"pdf":f.includes(t)?"image":s.includes(t)?"video":p.includes(t)?"gltf":d.includes(t)?"pcd":"unsupported",m=O[l];return o().createElement(r.Suspense,{fallback:null},o().createElement(m,w({mediaType:l},j[l],i[l],{description:n.abstract,id:n.pk,thumbnail:function(){return(0,b.Ql)(null==n?void 0:n.thumbnail_url)},src:n.href})))}return o().createElement(y.Z,{msgId:"gnhome.permissionsMissing"})};var P=n(171703),S=n(22222),T=n(572036),x=(0,P.connect)((0,S.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1}],(function(e,t,n){return{resource:e,loading:t,editMode:n}})))(E),k=(0,P.connect)((0,S.P1)([],(function(){return{}})),{})((function(e){return o().createElement("div",{className:"gn-media-viewer"},o().createElement(x,e))}));const N=(0,i.rx)("MediaViewer",{component:k,containers:{},epics:{},reducers:{gnresource:T.Z}})},945177:(e,t,n)=>{"use strict";var r=n(595318);t.__esModule=!0,t.default=void 0;var o,i=r(n(250139)),u="clearTimeout",a=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),r=setTimeout(e,n);return l=t,r},c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(e){var t=c(e,"request");if(t in window)return u=c(e,"cancel"),a=function(e){return window[t](e)}}));var l=(new Date).getTime();(o=function(e){return a(e)}).cancel=function(e){window[u]&&"function"==typeof window[u]&&window[u](e)};var f=o;t.default=f,e.exports=t.default},23279:(e,t,n)=>{var r=n(513218),o=n(707771),i=n(14841),u=Math.max,a=Math.min;e.exports=function(e,t,n){var c,l,f,s,p,d,m=0,v=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,r=l;return c=l=void 0,m=t,s=e.apply(r,n)}function w(e){var n=e-d;return void 0===d||n>=t||n<0||y&&e-m>=f}function h(){var e=o();if(w(e))return O(e);p=setTimeout(h,function(e){var n=t-(e-d);return y?a(n,f-(e-m)):n}(e))}function O(e){return p=void 0,b&&c?g(e):(c=l=void 0,s)}function j(){var e=o(),n=w(e);if(c=arguments,l=this,d=e,n){if(void 0===p)return function(e){return m=e,p=setTimeout(h,t),v?g(e):s}(d);if(y)return clearTimeout(p),p=setTimeout(h,t),g(d)}return void 0===p&&(p=setTimeout(h,t)),s}return t=i(t)||0,r(n)&&(v=!!n.leading,f=(y="maxWait"in n)?u(i(n.maxWait)||0,t):f,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,c=d=l=p=void 0},j.flush=function(){return void 0===p?s:O(o())},j}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}}}]);