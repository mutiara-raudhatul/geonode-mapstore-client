(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[83806],{57604:(e,t,r)=>{"use strict";r.d(t,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>c,yR:()=>u,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",c=function(e,t,r){return{type:n,dimension:t,layerId:e,data:r}},u=function(e){return{type:o,time:e}},l=function(e){return{type:i,offsetTime:e}},s=function(e){return{type:a,time:e}}},162187:(e,t,r)=>{"use strict";r.d(t,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>c,NC:()=>u,c9:()=>l,up:()=>s,AN:()=>p,FZ:()=>f,Fi:()=>y,KB:()=>d,E0:()=>b,Q_:()=>m,hY:()=>v,wO:()=>h,sT:()=>E,wR:()=>O,h1:()=>g,hS:()=>P,zK:()=>S,VS:()=>w,oz:()=>T,FH:()=>A,XN:()=>j,Ym:()=>I,RQ:()=>N});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",u="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",p="PLAYBACK:SET_INTERVAL_DATA",f="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",d="PLAYBACK:ANIMATION_STEP_MOVE",b="PLAYBACK:UPDATE_METADATA",m={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},h=function(){return{type:o}},E=function(){return{type:i}},O=function(e){return{type:a,frames:e}},g=function(e){return{type:l,frame:e}},P=function(e){return{type:c,frames:e}},S=function(e){return{type:u,loading:e}},w=function(e){return{type:s,range:e}},T=function(e,t){return{type:f,name:e,value:t}},A=function(){return{type:y}},j=function(e){return{type:d,direction:e}},I=function(e){var t=e.next,r=e.previous,n=e.forTime;return{type:b,forTime:n,next:t,previous:r}},N=function(e){return{type:p,timeIntervalData:e}}},757676:(e,t,r)=>{"use strict";r.d(t,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>c,cO:()=>u,br:()=>l,aA:()=>s,Xe:()=>p,Nb:()=>f,_V:()=>y,kq:()=>d,JU:()=>b,PQ:()=>m,cb:()=>v,KI:()=>h,lz:()=>E,m7:()=>O,Wb:()=>g,Hz:()=>P,M5:()=>S,w2:()=>w,w:()=>T,Z7:()=>A,p:()=>j,_e:()=>I});var n="TIMELINE:SELECT_TIME",o=function(e,t,r,o){return{type:n,time:e,group:t,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end;return{type:i,start:t,end:r}},c="TIMELINE:RANGE_DATA_LOADED",u=function(e,t,r,n){return{type:c,layerId:e,range:t,histogram:r,domain:n}},l="TIMELINE:LOADING",s=function(e,t){return{type:l,layerId:e,loading:t}},p="TIMELINE:INIT_SELECT_LAYER",f=function(e){return{type:p,layerId:e}},y="TIMELINE:SELECT_LAYER",d=function(e){return{type:y,layerId:e}},b="TIMELINE:ENABLE_OFFSET",m=function(e){return{type:b,enabled:e}},v="TIMELINE:AUTOSELECT",h=function(){return{type:v}},E="TIMELINE:SET_SNAP_TYPE",O=function(e){return{type:E,snapType:e}},g="TIMELINE:SET_END_VALUES_SUPPORT",P=function(e){return{type:g,endValuesSupport:e}},S="TIMELINE:SET_COLLAPSED",w=function(e){return{type:S,collapsed:e}},T="TIMELINE:SET_MAP_SYNC",A=function(e){return{type:T,mapSync:e}},j="TIMELINE:INIT_TIMELINE",I=function(e,t,r,n){return{type:j,showHiddenLayers:e,expandLimit:t,snapType:r,endValuesSupport:n}}},496361:(e,t,r)=>{"use strict";r.d(t,{i8:()=>b,ot:()=>m,Ci:()=>v,CX:()=>h});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),c=r(49977),u=r(375875),l=r.n(u),s=r(510284);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){return Object.keys(e).reduce((function(t,r){return void 0!==e[r]&&null!==e[r]?f(f({},t),{},y({},r,e[r])):t}),{})},b=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,u=void 0===a?"1.0.0":a,p=n.tileMatrixSet,y=void 0===p?"EPSG:4326":p,b=n.bbox,m=n.domains,v=n.expandLimit;return c.Observable.defer((function(){return l().get(e,{params:d(f({service:i,REQUEST:"DescribeDomains",version:u,layer:t,tileMatrixSet:y,bbox:b,domains:m,expandLimit:v},r))})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},m=function(e,t,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,u=void 0===a?"WMTS":a,p=i.version,y=void 0===p?"1.1.0":p,b=i.tileMatrixSet,m=void 0===b?"EPSG:4326":b,v=i.bbox;return c.Observable.defer((function(){return l().get(e,{params:d(f({service:u,REQUEST:"GetHistogram",resolution:o,histogram:r,version:y,layer:t,tileMatrixSet:m,bbox:v},n))})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},v=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,u=void 0===a?"asc":a,p=n.limit,f=void 0===p?20:p,y=n.fromEnd,b=void 0!==y&&y,m=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=m.bbox,h=m.tileMatrixSet,E=void 0===h?"EPSG:4326":h,O=m.service,g=void 0===O?"WMTS":O,P=m.version,S=void 0===P?"1.0.0":P;return c.Observable.defer((function(){return l().get(e,{params:d({service:g,version:S,request:"GetDomainValues",tileMatrixSet:E,bbox:v,layer:t,domain:r,fromValue:i,sort:u,limit:f,fromEnd:b,time:o})})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(757588).Overlay)},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),c=r.n(a),u=r(815135);const l=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(124852),o=r.n(n),i=r(867076),a=r(675263),c=r.n(a),u=r(957557),l=r.n(u),s=r(757588),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(f,t);var r,n,a,c,u=(a=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(a);if(c){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function f(){return y(this,f),u.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,l()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(o().Component),h(t,"propTypes",{popover:c().object}),h(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),c=r(757588),u=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,y=void 0===f?{}:f,d=e.transitionProps,b=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,m=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,c=p(e,l);return n?a||i&&o().createElement(i,s({key:c.key||t},c))||o().createElement(u.Z,s({key:c.key||t},y,c)):null}))};return o().createElement(c.ButtonGroup,i,b?o().createElement(a(),b,m()):m())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),c=r(957557),u=r.n(c),l=r(757588),s=r(532425),p=r(212610),f=r(617252),y=r(282467),d=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const v=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,v=e.loaderProps,h=void 0===v?{}:v,E=e.children,O=m(e,d);return o().createElement(y.Z,u()(O,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(l.Glyphicon,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,r?o().createElement(s.Z,b({className:"ms-loader".concat(O.bsStyle&&" ms-loader-"+O.bsStyle||"").concat(O.bsSize&&" ms-loader-"+O.bsSize||"")},h)):null,E)}))},365295:(e,t,r)=>{"use strict";r.d(t,{Z:()=>A});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),c=r(414293),u=r.n(c),l=r(675263),s=r.n(l),p=r(730381),f=r.n(p),y=r(757588),d=r(815135),b=r(282467);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=(0,d.Z)(y.Glyphicon),T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(l,e);var t,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(i){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function l(){var e;v(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return S(g(e=c.call.apply(c,[this].concat(r))),"onUpdate",(function(t,r){var n=f()(e.props.date).utc(),o=r?f()(n).add(1,t):f()(n).subtract(1,t);o.isValid()&&!isNaN(o.toDate().getTime())&&e.props.onUpdate(o.toISOString())})),S(g(e),"onChange",(function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(""!==r){var o=f()(e.props.date).utc(),i=o["day"===t?"date":t]&&f()(o)["day"===t?"date":t](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&e.props.onUpdate(i.toISOString())}})),S(g(e),"getForm",(function(){var t=e.props.date&&f()(e.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:t&&t.date()},{name:"month",placeholder:"MM",readOnly:!0,value:t&&t.month(),format:function(e){return!u()(e)&&""!==e&&f().monthsShort(e)},parseValue:function(e){return e-1}},{name:"year",placeholder:"YYYY",value:t&&t.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:t&&t.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:t&&t.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:t&&t.seconds()},{name:"separator",value:t&&t.utcOffset(),type:"separator",format:function(e){return"UTC "+(e>=0?"+":"-")+a()(e/60,2,0)}}]})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return e.props.clickable&&e.props.onIconClick(e.props.date,e.props.glyph)}},o().createElement(w,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),t.map((function(t){return"icon"===t.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},o().createElement(w,{glyph:t.value}))||"separator"===t.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},t.format&&t.format(t.value)||t.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},e.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!e.props.date,onClick:function(){return e.onUpdate(t.name,!0)}},o().createElement(w,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:t.readOnly,placeholder:t.placeholder||t.name,disabled:!e.props.date,value:t.format&&t.format(t.value)||t.value,onChange:function(r){return e.onChange(t.name,r.target.value,t.parseValue)}}),e.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!e.props.date,onClick:function(){return e.onUpdate(t.name)}},o().createElement(w,{glyph:"chevron-down"})))}))))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);S(T,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),S(T,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const A=T},589919:(e,t,r)=>{"use strict";r.d(t,{hP:()=>s});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,c(t))},s=function(e,t,r){return function(n){return(r?l(n,o()(e)).catch(r):l(n,o()(e))).concat(a().Observable.from(o()(t)))}}},50886:(e,t,r)=>{"use strict";r.d(t,{w:()=>d});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e,t,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,p(e(r,l({sort:"asc",fromValue:t?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return c(e,1)[0]})).catch((function(e){return e&&o().Observable.of(null)})),i.Ci.apply(void 0,p(e(r,l({sort:"desc",fromValue:t?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(e){return e.DomainValues.Domain.split(",")})).map((function(e){return c(e,1)[0]})).catch((function(e){return e&&o().Observable.of(null)})))}},937307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),c=r(730381),u=r.n(c),l=r(66604),s=r.n(l),p=r(535937),f=r.n(p);const y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.XV:return(0,a.t8)("data[".concat(t.dimension,"][").concat(t.layerId,"]"),t.data,e);case n.mE:return(0,a.t8)("currentTime",t.time,e);case n.at:return(0,a.t8)("offsetTime",t.offsetTime,e);case n.mD:if(e.offsetTime&&e.currentTime){var r=u()(e.offsetTime).diff(e.currentTime),c=u()(t.time).add(r);return(0,a.t8)("currentTime",t.time,(0,a.t8)("offsetTime",c.toISOString(),e))}return(0,a.t8)("currentTime",t.time,e);case o.sb:var l=s()(e.data,(function(e){return f()(e,(function(e,r){return r!==t.node}))}));return(0,a.t8)("data",l,e);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,e)));default:return e}}},176843:(e,t,r)=>{"use strict";r.d(t,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>u,E2:()=>l,Np:()=>s,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>d});var n=r(22222),o=function(e){return e&&e.playback&&e.playback.settings},i=function(e){return(o(e)||{}).frameDuration||5},a=function(e){return e&&e.playback&&e.playback.status},c=function(e){return e&&e.playback&&e.playback.frames},u=function(e){var t=c(e)||[];return t[t.length-1]},l=function(e){return e&&e.playback&&e.playback.framesLoading},s=function(e){return e&&e.playback&&e.playback.currentFrame},p=function(e){return function(e){return e&&e.playback&&e.playback.playbackRange}(e)},f=function(e){return(c(e)||[])[s(e)]},y=function(e){return e&&e.playback&&e.playback.metadata},d=(0,n.P1)(c,s,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return{hasNext:e[t+1],hasPrevious:e[t-1]}}))},510284:(e,t,r)=>{"use strict";r.d(t,{sw:()=>v,oB:()=>h});var n=r(49977),o=r.n(n),i=r(227361),a=r.n(i),c=r(505055),u=r(507526);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t="function"==typeof Map?new Map:void 0;return p=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,b(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)},p(e)}function f(e,t,r){return f=y()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o},f.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}r(324384);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(i,e);var t,r,n,o=(t=i,r=y(),function(){var e,n=b(t);if(r){var o=b(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return s(this,e)});function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e)).name="OGCError",r.code=t,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(p(Error)),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[u.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(e,r){return(0,c.parseString)(e,t,r)}))(e)},h=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(e,t){return(0,c.parseString)(e,{tagNameProcessors:[u.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=a()(e,"ExceptionReport.Exception.ExceptionText");throw new m(t||"Undefined OGC Service Error",a()(e,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(e)}))}}}]);