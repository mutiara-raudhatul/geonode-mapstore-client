(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22794],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>u,Ih:()=>i,Xw:()=>a,Pn:()=>c,DZ:()=>l,e8:()=>f,E0:()=>s,F9:()=>p,X_:()=>y,pb:()=>b,qb:()=>m,Re:()=>g,ih:()=>d,xy:()=>v,jL:()=>O,oz:()=>h,ph:()=>E,lF:()=>S,gG:()=>P,cb:()=>j,GI:()=>T,B1:()=>w,fv:()=>_,gc:()=>I,zX:()=>F,ZF:()=>N,Zb:()=>R,DW:()=>D,Xp:()=>A,Fm:()=>q,sV:()=>C,Mn:()=>G,LU:()=>M,XP:()=>L,WU:()=>k,JB:()=>x,g:()=>U,ws:()=>Y,HP:()=>z,aN:()=>V,Pg:()=>W,u0:()=>K,TM:()=>B,PM:()=>Z,lK:()=>X,sv:()=>Q,MO:()=>J,oO:()=>$,Mc:()=>tt,Zw:()=>et,RA:()=>rt,am:()=>nt,ZM:()=>ot,wm:()=>ut,Y$:()=>it,Qu:()=>at,kT:()=>ct});var n=r(647310),o="LOAD_FEATURE_INFO",u="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",g="NO_QUERYABLE_LAYERS",d="CLEAR_WARNING",v="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",S="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",j="IDENTIFY:CLOSE_IDENTIFY",T="IDENTIFY:CHANGE_FORMAT",w="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",_="IDENTIFY:EDIT_LAYER_FEATURES",I="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",F="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",D="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function q(t,e,r,n,u){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:u}}function C(t,e,r,n){return{type:u,error:e,reqId:t,requestParams:r,layerMetadata:n}}function G(t,e,r,n){return{type:i,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function M(){return{type:g}}function L(){return{type:d}}function k(t,e){return{type:c,reqId:t,request:e}}function x(t,e,r,n){return{type:m,layer:t,request:e,metadata:r,queryableLayers:n}}function U(){return{type:l}}function Y(t){return{type:f,infoFormat:t}}function z(){return{type:s}}function V(){return{type:p}}function H(t){return{type:y,reverseGeocodeData:t.data}}function W(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(H(t))})).catch((function(t){e(H(t))}))}}function K(){return{type:b}}function B(){return{type:E}}function Z(t){return{type:S,status:t}}function X(t,e){return{type:v,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function Q(t){return{type:O,point:t}}function J(t){return{type:h,enabled:t}}function $(t){return{type:P,index:t}}var tt=function(){return{type:j}},et=function(t){return{type:T,format:t}},rt=function(t){return{type:w,showCoordinateEditor:t}},nt=function(t){return{type:_,layer:t}},ot=function(t){return{type:I,query:t}},ut=function(t){return{type:F,trigger:t}},it=function(t){return{type:R,value:t}},at=function(t){return{type:D,isMounted:t}},ct=function(t){return{type:A,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(375875),o=r.n(n),u=r(472500),i=r.n(u),a=r(727418),c=r.n(a),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var r=c()({q:t},l,e||{}),n=i().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},l),n=i().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},683520:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>q});var n=r(124852),o=r.n(n),u=r(675263),i=r.n(u),a=r(171703),c=r(264317),l=r(731255),f=r(55105),s=r(22222),p=r(727418),y=r.n(p),b=r(658252);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var g=["children"],d=["children"];function v(t,e,r){return(e=j(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},O.apply(this,arguments)}function h(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function P(t,e,r){return e&&S(t.prototype,e),r&&S(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function j(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}function T(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=F(t);if(e){var o=F(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}(this,r)}}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var N=function(t){T(r,t);var e=_(r);function r(){return E(this,r),e.apply(this,arguments)}return P(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=h(t,g);return o().createElement(c.CSSTransitionGroup,O({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),e)}}]),r}(o().Component),R=function(t){T(r,t);var e=_(r);function r(){return E(this,r),e.apply(this,arguments)}return P(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=h(t,d);return o().createElement("div",r,e)}}]),r}(o().Component),D=function(t){T(r,t);var e=_(r);function r(){var t;E(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return v(I(t=e.call.apply(e,[this].concat(o))),"getPanel",(function(t){return!0===t.panel?t.plugin:t.panel})),v(I(t),"getPanels",(function(){return t.getTools().filter((function(t){return t.panel})).map((function(e){return{name:e.name,title:e.title,cfg:e.cfg,panel:t.getPanel(e),items:e.items,wrap:e.wrap||!1}}))})),v(I(t),"getTools",(function(){var e=t.props.items.filter((function(t){return!t.alwaysVisible}))||[];return t.props.items.filter((function(r){return r.alwaysVisible||1===e.length||t.props.allVisible})).filter((function(e){return!e.showWhen||e.showWhen(t.props)})).map((function(t,e){return y()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),t}return P(r,[{key:"render",value:function(){var t=this.props.disableAnimation?R:N;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:t,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);v(D,"propTypes",{id:i().string,tools:i().array,mapType:i().string,style:i().object,panelStyle:i().object,panelClassName:i().string,disableAnimation:i().bool,active:i().string,items:i().array,allVisible:i().bool,layout:i().string,stateSelector:i().string,buttonStyle:i().string,buttonSize:i().string,pressedButtonStyle:i().string,btnConfig:i().object}),v(D,"contextTypes",{messages:i().object,router:i().object}),v(D,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});var A=function(t){return(0,s.P1)([function(e){return e.controls&&e.controls[t]&&e.controls[t].active},function(e){return e.controls&&e.controls[t]&&e.controls[t].expanded},l.Rd,function(t){return(0,f.ic)(t,{right:!0,bottom:!0})}],(function(e,r,n,o){return{active:e,allVisible:r,stateSelector:t,layout:n?"horizontal":"vertical",style:o}}))};const q={ToolbarPlugin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,a.connect)(A(t))(D)},reducers:{controls:r(925108).Z}}},925108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(782904),o=r(727418),u=r.n(o),i=r(921914);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return u()({},t,f({},e.control,u()({},t[e.control],f({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?u()({},t,f({},e.control,u()({},t[e.control],f({},e.property,void 0)))):u()({},t,f({},e.control,u()({},t[e.control],f({},e.property,e.value))));case n.dc:return u()({},t,f({},e.control,u()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})).reduce((function(e,r){return u()(e,f({},r,u()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return u()({},t,o);case i.DW:return l(l({},t),{},{info:l(l({},t.info),{},{available:e.isMounted})});default:return t}}},731255:(t,e,r)=>{"use strict";r.d(e,{u$:()=>P,Xh:()=>j,_w:()=>T,eO:()=>w,kG:()=>_,P3:()=>I,bq:()=>R,LB:()=>D,b4:()=>A,M0:()=>q,Li:()=>C,Rd:()=>G,g5:()=>M,Sj:()=>L,o:()=>k,eK:()=>x,jY:()=>U,ND:()=>Y,OK:()=>z,tU:()=>V,ou:()=>H,DK:()=>W,Gl:()=>K,uz:()=>B,Ci:()=>Z,Ae:()=>X,gz:()=>Q,He:()=>J,P4:()=>$,kd:()=>tt,TC:()=>et,nq:()=>rt,Vf:()=>nt,lg:()=>ot});var n=r(91175),o=r.n(n),u=r(227361),i=r.n(u),a=r(513218),c=r.n(a),l=r(675110),f=r(378889),s=r(308316),p=r(552259),y=r(196958),b=r(285148),m=r(274621),g=r(93152),d=r(824260);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=l.CA,P=function(t){return i()(t,"featuregrid.selectedLayer")},j=function(t){return i()(t,"featuregrid.attributes")},T=function(t){return t&&t.featuregrid&&t.featuregrid.select},w=function(t){return t&&t.featuregrid&&t.featuregrid.changes},_=function(t){return t&&t.featuregrid&&t.featuregrid.newFeatures},I=function(t){return o()(T(t))},F=function(t){var e=(0,d.Qs)(t);if(e){var r=(0,f.findGeometryProperty)(e);return r&&r.localType}return null},N=["Geometry","GeometryCollection"],R=function(t){return!o()(N.filter((function(e){return F(t)===e})))},D=function(t){return w(t)&&w(t).length>0},A=function(t){return _(t)&&_(t).length>0},q=function(t){return t&&t.featuregrid&&t.featuregrid.filters},C=function(t){return S(t,P(t))},G=function(t){return t&&t.featuregrid&&t.featuregrid.open},M=function(t,e){return i()(q(t),e)},L=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.title||t.name}(S(t,P(t)));return c()(e)?e[(0,s.Pz)(t)]||e.default||"":e},k=function(t){return((0,d.L)(t)||[]).map((function(e){var r=function(t,e){return i()(t,"featuregrid.attributes[".concat(e.name||e.attribute,"]"))}(t,e);return r?h(h({},e),r):e}))},x=function(t){return t&&t.featuregrid&&t.featuregrid.mode},U=function(t){return(T(t)||[]).length},Y=function(t){return(0,y.rK)(w(t))},z=function(t){return function(t){var e=I(t);if(e){var r=(0,y.rK)(w(t));return!((!r[e.id]||null===r[e.id].geometry)&&(r[e.id]&&null===r[e.id].geometry||e._new&&o()(_(t))&&null===o()(_(t)).geometry||(!e._new||!o()(_(t))||null===o()(_(t)).geometry)&&null===e.geometry))}return!1}(t)},V=function(t){return i()(t,"featuregrid.showAgain",!1)},H=function(t){if(i()(t,"featuregrid.showTimeSync",!1)){var e=P(t);return(0,b.jo)({id:e},"time")(t)}return null},W=function(t){return i()(t,"featuregrid.timeSync",!1)},K=function(t){return i()(t,"featuregrid.showPopoverSync",!0)},B=function(t){return t&&t.featuregrid&&t.featuregrid.saving},Z=function(t){return t&&t.featuregrid&&t.featuregrid.saved},X=function(t){return t&&t.featuregrid&&t.featuregrid.drawing},Q=function(t){return i()(t,"featuregrid.multiselect",!1)},J=function(t){return(0,p.isSimpleGeomType)(F(t))},$=function(t){return t.featuregrid&&t.featuregrid.dockSize},tt=function(t){var e=S(t,P(t));return e&&e.name||""},et=function(t){var e=function(t){return i()(S(t,P(t)),"params")}(t);return{viewParams:e&&(e.VIEWPARAMS||e.viewParams||e.viewparams),cqlFilter:e&&(e.CQL_FILTER||e.cqlFilter||e.cql_filter)}},rt=function(t){var e=(0,m.L3)(t),r=function(t){return i()(t,"featuregrid.editingAllowedRoles",["ADMIN"])}(t)||["ADMIN"],n=function(t){return t&&t.featuregrid&&t.featuregrid.canEdit}(t);return(-1!==r.indexOf(e)||n)&&!(0,g.c0)(t)},nt=function(t){return i()(t,"featuregrid.pagination")},ot=function(t){return i()(t,"featuregrid.useLayerFilter",!0)}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>s,Nr:()=>p,ic:()=>y,Jz:()=>m,VM:()=>g,CF:()=>d});var n=r(91175),o=r.n(n),u=r(800827),i=r(552259);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){return t.maplayout&&t.maplayout.layout||{}},p=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s(t);return r&&Object.keys(r).filter((function(t){return e[t]})).reduce((function(t,e){return l(l({},t),{},f({},e,r[e]))}),{})||{}},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=s(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))},m=function(t){return b(t,[{key:"right",value:658}])},g=function(t){return b(t,[{key:"bottom",value:30,type:"not"}])},d=function(t){var e=(0,u.Od)(t),r=p(t);return r&&e&&e.size&&{left:(0,i.parseLayoutValue)(r.left,e.size.width),bottom:(0,i.parseLayoutValue)(r.bottom,e.size.height),right:(0,i.parseLayoutValue)(r.right,e.size.width),top:(0,i.parseLayoutValue)(r.top,e.size.height)}}},824260:(t,e,r)=>{"use strict";r.d(e,{qj:()=>O,Bu:()=>h,UM:()=>E,X1:()=>S,L:()=>P,HY:()=>j,Mz:()=>T,F0:()=>w,dc:()=>_,b0:()=>I,hk:()=>F,Qs:()=>N,gy:()=>R,M7:()=>D,VD:()=>A});var n=r(414293),o=r.n(n),u=r(227361),i=r.n(u),a=r(91175),c=r.n(a),l=r(701469),f=r.n(l),s=r(630998),p=r.n(s);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return i()(t,"query.filterObj.featureTypeName")},v=function(t){return function(e){return i()(e,'query.featureTypes["'.concat(t,'"]'))}},O=function(t,e){return i()(v(e)(t),"original")},h=function(t){return t&&t.query&&t.query.searchUrl},E=function(t){return t&&t.query&&t.query.url},S=function(t){return t&&t.query&&t.query.filterObj},P=function(t){return i()(v(d(t))(t),"attributes")},j=function(t){return i()(t,"query.typeName")},T=function(t){return i()(t,"query.result.features")},w=function(t){var e=i()(t,"query.result");return m(m({},e),{},{features:(e&&e.features||[]).filter((function(t){return!o()(t.geometry)}))})},_=function(t,e){var r=t&&t.query&&t.query.result&&t.query.result.features;return c()(r.filter((function(t){return t.id===e})))},I={startIndex:function(t){return i()(t,"query.filterObj.pagination.startIndex")},maxFeatures:function(t){return i()(t,"query.filterObj.pagination.maxFeatures")},resultSize:function(t){return i()(t,"query.result.features.length")},totalFeatures:function(t){return i()(t,"query.result.totalFeatures")}},F=function(t,e){var r=v(e)(t);return!!(r&&r.attributes&&r.geometry&&r.original)},N=function(t){return O(t,d(t))},R=function(t){return i()(t,"query.featureLoading")},D=function(t){return i()(t,"query.syncWmsFilter",!1)},A=function(t){var e=i()(t,"query.filterObj.crossLayerFilter"),r=i()(t,"query.filterObj.spatialField"),n=i()(t,"query.filterObj.filterFields");return!!(n&&c()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(t){return t.method&&t.operation&&t.geometry}))>-1)||e&&e.collectGeometries&&e.operation)}},887157:(t,e,r)=>{var n=r(640554),o=r(588958);t.exports=function(t,e,r,u){var i=t.length;for((r=n(r))<0&&(r=-r>i?0:i+r),(u=void 0===u||u>i?i:n(u))<0&&(u+=i),u=r>u?0:o(u);r<u;)t[r++]=e;return t}},819873:(t,e,r)=>{var n=r(887157),o=r(816612);t.exports=function(t,e,r,u){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,u=i),n(t,e,r,u)):[]}},588958:(t,e,r)=>{var n=r(829750),o=r(640554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},264317:(t,e,r)=>{"use strict";var n=u(r(1174)),o=u(r(692381));function u(t){return t&&t.__esModule?t:{default:t}}t.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}}}]);