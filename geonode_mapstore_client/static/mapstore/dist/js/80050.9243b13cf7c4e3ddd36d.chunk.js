(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[80050],{887157:(t,e,o)=>{var r=o(640554),i=o(588958);t.exports=function(t,e,o,n){var a=t.length;for((o=r(o))<0&&(o=-o>a?0:a+o),(n=void 0===n||n>a?a:r(n))<0&&(n+=a),n=o>n?0:i(n);o<n;)t[o++]=e;return t}},819873:(t,e,o)=>{var r=o(887157),i=o(816612);t.exports=function(t,e,o,n){var a=null==t?0:t.length;return a?(o&&"number"!=typeof o&&i(t,e,o)&&(o=0,n=a),r(t,e,o,n)):[]}},410240:(t,e,o)=>{var r=o(829750),i=o(880531),n=o(640554),a=o(479833);t.exports=function(t,e,o){return t=a(t),o=null==o?0:r(n(o),0,t.length),e=i(e),t.slice(o,o+e.length)==e}},588958:(t,e,o)=>{var r=o(829750),i=o(640554);t.exports=function(t){return t?r(i(t),0,4294967295):0}},506806:(t,e,o)=>{"use strict";var r,i=(r=o(715132))&&r.__esModule?r:{default:r};e.Z=i.default},715132:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=o(124852),s=l(a),u=l(o(675263));function l(t){return t&&t.__esModule?t:{default:t}}var h={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},c={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},d={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},p={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},o.overlayClicked=o.overlayClicked.bind(o),o.onTouchStart=o.onTouchStart.bind(o),o.onTouchMove=o.onTouchMove.bind(o),o.onTouchEnd=o.onTouchEnd.bind(o),o.onScroll=o.onScroll.bind(o),o.saveSidebarRef=o.saveSidebarRef.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":i(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=r({},c,this.props.styles.sidebar),e=r({},d,this.props.styles.content),o=r({},f,this.props.styles.overlay),i=this.state.dragSupported&&this.props.touch,n=this.isTouching(),a={className:this.props.rootClassName,style:r({},h,this.props.styles.root),role:"navigation"},u=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),n){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),o.opacity=l,o.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",o.opacity=1,o.visibility="visible");if(!n&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",o.transition="none"),i)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var b=r({},p,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,u=s.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return s.default.createElement("div",a,s.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),s.default.createElement("div",{className:this.props.overlayClassName,style:o,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),s.default.createElement("div",{className:this.props.contentClassName,style:e},u,this.props.children))}}]),e}(a.Component);b.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b},93054:(t,e,o)=>{"use strict";e.__esModule=!0,e.default=function(t){if("function"!=typeof t)throw new TypeError("You must provide a valid moment object");var e="function"==typeof t().locale?"locale":"lang";if(!t.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function o(o,r,i){return o?t(r,i)[e](o):t(r,i)}var r={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(e,o,r){return r.format(e,"YYYY",o)+" - "+r.format(function(e){return t(e).add(10,"year").add(-1,"millisecond").toDate()}(e),"YYYY",o)},century:function(e,o,r){return r.format(e,"YYYY",o)+" - "+r.format(function(e){return t(e).add(100,"year").add(-1,"millisecond").toDate()}(e),"YYYY",o)}},firstOfWeek:function(e){return t.localeData(e).firstDayOfWeek()},parse:function(t,e,r){if(!t)return null;var i=o(r,t,e);return i.isValid()?i.toDate():null},format:function(t,e,r){return o(r,t).format(e)}};return i.default.setDateLocalizer(r),r};var r,i=(r=o(577036))&&r.__esModule?r:{default:r};t.exports=e.default},828878:(t,e,o)=>{"use strict";var r,i={fromESObservable:((r=o(49977))&&r.__esModule?r:{default:r}).default.Observable.from,toESObservable:function(t){return t}};e.Z=i},819412:(t,e,o)=>{var r=o(798098);t.exports=function(t,e){var o=new r.io.GeoJSONReader,i=o.read(JSON.stringify(t.geometry)),n=o.read(JSON.stringify(e.geometry)),a=i.union(n);return{type:"Feature",geometry:a=(new r.io.GeoJSONWriter).write(a),properties:t.properties}}}}]);