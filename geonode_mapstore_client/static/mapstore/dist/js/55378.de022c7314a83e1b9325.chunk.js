(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[55378],{542872:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F});var n=r(124852),o=r.n(n),i=r(675263),s=r.n(i),a=r(107412),c=r(615402),u=r(805346),l=r(757588);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,r,n,i,s=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(i){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(b(e=s.call.apply(s,[this].concat(r))),"onTouchStart",(function(t){var r=t.touches[0];e.startX=r.pageX,e.startY=r.pageY,e.setState({scrolling:!1})})),d(b(e),"onTouchMove",(function(t){var r=t.touches[0],n=t.currentTarget;if(e.state.scrolling)t.stopPropagation();else if(Math.abs(e.startY-r.pageY)>Math.abs(e.startX-r.pageX))t.stopPropagation();else{var o=e.startX<r.pageX?"left":"right";(n&&"left"===o&&n.clientWidth<n.scrollWidth&&0!==n.scrollLeft||n&&"right"===o&&n.clientWidth+n.scrollLeft!==n.scrollWidth)&&(e.setState({scrolling:!0}),t.stopPropagation())}})),d(b(e),"onTouchEnd",(function(){e.setState({scrolling:!1})})),d(b(e),"renderPage",(function(){var t="function"==typeof e.props.viewers?e.props.viewers:e.props.viewers[e.props.format];return t?o().createElement(t,{response:e.props.response,layer:e.props.layer}):null})),e}return t=a,(r=[{key:"render",value:function(){return o().createElement("div",{style:{width:"100%",height:"100%",overflowX:"auto"},onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},this.renderPage())}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);d(h,"propTypes",{format:s().string,viewers:s().oneOfType([s().func,s().object]),response:s().oneOfType([s().string,s().object,s().node]),layer:s().object});var g=r(441609),O=r.n(g),w=r(531351),P=r.n(w),j=r(410240),E=r.n(j),S=r(902870),R=r(262971),x=r.n(R);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function k(e,t,r){return(t=N(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}r(658767);var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(p,e);var t,r,n,i,s=(n=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(n);if(i){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return k(C(e=s.call.apply(s,[this].concat(r))),"state",{openAttachment:!1,attachments:[]}),k(C(e),"getResponseProperties",(function(){var t=e.props.validator(e.props.format),r=e.props.responses.map((function(e){return void 0===e?{}:e})),n=e.props.renderValidOnly?t.getValidResponses(r):r,o=t.getNoValidResponses(e.props.responses),i=e.props.requests.length===o.length;return{validResponses:n,currResponse:e.getCurrentResponse(n[e.props.index]),emptyResponses:i,invalidResponses:o}})),k(C(e),"getCurrentResponse",(function(t){return e.props.validator(e.props.format).getValidResponses([t])})),k(C(e),"renderEmptyLayers",(function(){var t=e.getResponseProperties(),r=t.invalidResponses,n=t.emptyResponses;if(0===e.props.missingResponses&&n)return null;var i=0!==r.length;if(e.props.renderValidOnly||(i=i&&0===e.props.missingResponses),i){var s=r.map((function(e){return e.layerMetadata.title}));return e.props.showEmptyMessageGFI&&!e.props.disableInfoAlert?o().createElement(l.Alert,{bsStyle:"info"},o().createElement(u.Z,{msgId:"noInfoForLayers"}),o().createElement("b",null,s.join(", "))):null}return null})),k(C(e),"renderPage",(function(t){var r=e.props.viewers[e.props.format];return r?o().createElement(r,{response:t}):null})),k(C(e),"renderEmptyPages",(function(){var t=e.getResponseProperties().emptyResponses;return 0===e.props.missingResponses&&t?o().createElement(l.Alert,{bsStyle:"danger"},o().createElement("h4",null,o().createElement(c.Z,{msgId:"noFeatureInfo"}))):null})),k(C(e),"renderAttachment",(function(){return e.state.attachments&&e.state.attachments.length>0?o().createElement("div",{style:{margin:"auto",display:"flex",flexDirection:"column",alignItems:"center"}},o().createElement("div",null,o().createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({openAttachment:!0},(function(){return e.forceUpdate()}))}},"Lihat Lampiran Foto/Video")),e.state.openAttachment&&o().createElement(x(),{data:e.state.attachments,startIndex:0,showResourceCount:!0,onCloseCallback:function(){return e.setState({openAttachment:!1},(function(){return e.forceUpdate()}))}})):null})),k(C(e),"renderPages",(function(){var t=e.getResponseProperties().validResponses;return t.map((function(r,n){var i,s,c=r.response,u=r.layerMetadata,p=(0,S.Qo)(r,e.props),f=e.props.header;null!=u&&null!==(i=u.viewer)&&void 0!==i&&i.type&&(s=(0,a.gA)(u.viewer.type));var y=t.filter((function(e){return!E()(e.response,"no features were found")})).length;return o().createElement(l.Panel,{eventKey:n,key:n,collapsible:e.props.collapsible,header:f?o().createElement("span",null,o().createElement(f,_({size:y},e.props.headerOptions,u,{index:e.props.index,onNext:function(){return e.props.onNext()},onPrevious:function(){return e.props.onPrevious()}}))):null,style:e.props.style},o().createElement(h,{response:c,format:p,viewers:s||e.props.viewers,layer:u}))}))})),k(C(e),"containerStyle",(function(t){return O()(t)&&e.props.isMobile?{height:"100%"}:{display:O()(t)?"none":"block"}})),e}return t=p,(r=[{key:"shouldComponentUpdate",value:function(e){return e.responses!==this.props.responses||e.missingResponses!==this.props.missingResponses||e.index!==this.props.index}},{key:"render",value:function(){var e=this,t=this.props.container,r=this.getResponseProperties(),n=(r.responses,r.currResponse),i=r.emptyResponses,s=[this.renderEmptyLayers(),o().createElement(t,_({},this.props.containerProps,{onChangeIndex:function(t){e.props.setIndex(t)},ref:"container",index:this.props.index||0,key:"swiper",style:this.containerStyle(n),className:"swipeable-view"}),this.renderPages())];if(n&&n.length>0){var a=n[0].response;a.features&&0==this.state.attachments.length&&a.features.forEach((function(t){t.properties&&t.properties.___att&&t.properties.___att.split(";").forEach((function(t){if(t){var r=t.split("#");r.length>2&&("photo"===r[1]||"video"===r[1])&&e.state.attachments.push({url:"/static/attachment/".concat(r[0]),type:r[1],tanggal:r[2]})}}))}))}return s=this.props.isMobile?s:P()(s),o().createElement("div",{className:"mapstore-identify-viewer"},i?this.renderEmptyPages():s.map((function(e){return e})),this.renderAttachment())}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o().Component);k(D,"propTypes",{format:s().string,collapsible:s().bool,requests:s().array,responses:s().array,missingResponses:s().number,container:s().oneOfType([s().object,s().func]),header:s().oneOfType([s().object,s().func]),headerOptions:s().object,validator:s().func,viewers:s().object,style:s().object,containerProps:s().object,index:s().number,onNext:s().func,onPrevious:s().func,onUpdateIndex:s().func,setIndex:s().func,showEmptyMessageGFI:s().bool,renderValidOnly:s().bool,loaded:s().bool,isMobile:s().bool,disableInfoAlert:s().bool}),k(D,"defaultProps",{format:(0,a.wR)(),responses:[],requests:[],missingResponses:0,collapsible:!1,headerOptions:{},container:l.Accordion,validator:a.Te,viewers:(0,a.Qm)(),style:{position:"relative",marginBottom:0},containerProps:{},showEmptyMessageGFI:!0,renderValidOnly:!1,onNext:function(){},onPrevious:function(){},setIndex:function(){},isMobile:!1,disableInfoAlert:!1});const F=D},11196:(e,t,r)=>{"use strict";r.d(t,{mI:()=>i,Yy:()=>s});var n=r(867076),o=r(107412),i=(0,n.withHandlers)({onNext:function(e){var t=e.index,r=void 0===t?0:t,n=e.setIndex,o=void 0===n?function(){}:n,i=e.validResponses,s=void 0===i?[]:i;return function(){o(Math.min(s.length-1,r+1))}},onPrevious:function(e){var t=e.index,r=e.setIndex,n=void 0===r?function(){}:r;return function(){n(Math.max(0,t-1))}}}),s=(0,n.defaultProps)({format:(0,o.wR)(),validator:o.Te})},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(496259),s=r(532425);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=function(e){var t=e.width,r=e.height,n=e.className,a=void 0===n?"loader-container":n,c=e.contentStyle,l=void 0===c?{}:c;return o().createElement("div",{className:a},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,a=e.height,c=void 0===a?200:a,p=t||(c>0?Math.min(i,c):i),f=r||(c>0?Math.min(i,c):i),y=Math.min(p,f);return o().createElement(s.Z,{size:y,style:u({padding:y/10,margin:"auto",display:"flex"},l)})})))}},173014:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),s=r(82110);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var c=function(e){var t=e.loading,r=e.isLoading;return t||r&&("function"==typeof r?r():!0===r)};const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;return(0,i.branch)(e,(function(){return function(e){var n=e.loaderProps;return o().createElement(r,a({},t,n))}}))}},902870:(e,t,r)=>{"use strict";r.d(t,{Qo:()=>y,jg:()=>b,oH:()=>m});var n=r(227361),o=r.n(n),i=r(453005),s=r(986267),a=r(552259);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e,t){var r=e.format,n=e.queryParams,o=void 0===n?{}:n;return o.info_format||o.outputFormat||r&&i.O7[r]||t.format},b=function(e){return!!o()(e,"layer.search.url")},m=function(e,t){var r,n,i,c=o()(e,"latlng.lng"),u=o()(e,"latlng.lat"),p=(0,s.reproject)([c,u],"EPSG:4326",t),y=(0,a.getHook)(a.GET_PIXEL_FROM_COORDINATES_HOOK);if(y){var b=(n=y([p.x,p.y]),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(n,i)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());r={x:b[0],y:b[1]}}else r=e.pixel;var m=(0,a.getHook)(a.GET_COORDINATES_FROM_PIXEL_HOOK),d=(0,s.calculateCircleRadiusFromPixel)(m,r,p,5),v={type:"geometry",enabled:!0,value:{geometry:{center:[p.x,p.y],coordinates:(0,s.calculateCircleCoordinates)(p,d,12),extent:[p.x-d,p.y-d,p.x+d,p.y+d],projection:t,radius:d,type:"Polygon"},method:"Circle",operation:"INTERSECTS"}};return l(l({},e),{},{pixel:r,geometricFilter:v})}}}]);