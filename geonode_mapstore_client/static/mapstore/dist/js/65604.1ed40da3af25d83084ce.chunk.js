(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[65604],{392663:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>M});var r=i(214431),s=i(29217),o=i(611256),n=i(613002),a=i(173381),h=i(421915),u=function(t){function e(e,i,r,s,n,a){t.call(this,e,i,r,o.Z.IDLE),this.src_=s,this.image_=new Image,null!==n&&(this.image_.crossOrigin=n),this.imageListenerKeys_=null,this.state=o.Z.IDLE,this.imageLoadFunction_=a}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getImage=function(){return this.image_},e.prototype.handleImageError_=function(){this.state=o.Z.ERROR,this.unlistenImage_(),this.changed()},e.prototype.handleImageLoad_=function(){void 0===this.resolution&&(this.resolution=(0,h.Cr)(this.extent)/this.image_.height),this.state=o.Z.LOADED,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state!=o.Z.IDLE&&this.state!=o.Z.ERROR||(this.state=o.Z.LOADING,this.changed(),this.imageListenerKeys_=[(0,n.Vx)(this.image_,a.Z.ERROR,this.handleImageError_,this),(0,n.Vx)(this.image_,a.Z.LOAD,this.handleImageLoad_,this)],this.imageLoadFunction_(this,this.src_))},e.prototype.setImage=function(t){this.image_=t},e.prototype.unlistenImage_=function(){this.imageListenerKeys_.forEach(n.bN),this.imageListenerKeys_=null},e}(s.Z);const p=u;var _=i(438906),c=i(913580),g=i(218672),l=i(152209),d=i(949179),m=i(435211),R=i(179682),E=i(9520),v=i(856245),f=function(t){function e(e,i,r,s,n,a){var u=e.getExtent(),p=i.getExtent(),_=p?(0,h.Ed)(r,p):r,c=(0,h.qg)(_),g=(0,l.a)(e,i,c,s),d=m.m,R=new v.Z(e,i,_,u,g*d),E=a(R.calculateSourceExtent(),g,n),f=o.Z.LOADED;E&&(f=o.Z.IDLE);var I=E?E.getPixelRatio():1;t.call(this,r,s,I,f),this.targetProj_=i,this.maxSourceExtent_=u,this.triangulation_=R,this.targetResolution_=s,this.targetExtent_=r,this.sourceImage_=E,this.sourcePixelRatio_=I,this.canvas_=null,this.sourceListenerKey_=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.state==o.Z.LOADING&&this.unlistenSource_(),t.prototype.disposeInternal.call(this)},e.prototype.getImage=function(){return this.canvas_},e.prototype.getProjection=function(){return this.targetProj_},e.prototype.reproject_=function(){var t=this.sourceImage_.getState();if(t==o.Z.LOADED){var e=(0,h.dz)(this.targetExtent_)/this.targetResolution_,i=(0,h.Cr)(this.targetExtent_)/this.targetResolution_;this.canvas_=(0,l.s)(e,i,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0)}this.state=t,this.changed()},e.prototype.load=function(){if(this.state==o.Z.IDLE){this.state=o.Z.LOADING,this.changed();var t=this.sourceImage_.getState();t==o.Z.LOADED||t==o.Z.ERROR?this.reproject_():(this.sourceListenerKey_=(0,n.oL)(this.sourceImage_,a.Z.CHANGE,(function(t){var e=this.sourceImage_.getState();e!=o.Z.LOADED&&e!=o.Z.ERROR||(this.unlistenSource_(),this.reproject_())}),this),this.sourceImage_.load())}},e.prototype.unlistenSource_=function(){(0,n.bN)(this.sourceListenerKey_),this.sourceListenerKey_=null},e}(s.Z);const I=f;var S=i(771405),y=function(t){function e(e,i){t.call(this,e),this.image=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(E.ZP),O=function(t){function e(e){t.call(this,{attributions:e.attributions,projection:e.projection,state:e.state}),this.resolutions_=void 0!==e.resolutions?e.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.findNearestResolution=function(t){if(this.resolutions_){var e=(0,R.h7)(this.resolutions_,t,0);t=this.resolutions_[e]}return t},e.prototype.getImage=function(t,e,i,r){var s=this.getProjection();if(m.j&&s&&r&&!(0,g.OP)(s,r)){if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&(0,g.OP)(this.reprojectedImage_.getProjection(),r)&&this.reprojectedImage_.getResolution()==e&&(0,h.fS)(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new I(s,r,t,e,i,function(t,e,i){return this.getImageInternal(t,e,i,s)}.bind(this)),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}return s&&(r=s),this.getImageInternal(t,e,i,r)},e.prototype.getImageInternal=function(t,e,i,r){return(0,d.O3)()},e.prototype.handleImageChange=function(t){var e=t.target;switch(e.getState()){case o.Z.LOADING:this.loading=!0,this.dispatchEvent(new y("imageloadstart",e));break;case o.Z.LOADED:this.loading=!1,this.dispatchEvent(new y("imageloadend",e));break;case o.Z.ERROR:this.loading=!1,this.dispatchEvent(new y("imageloaderror",e))}},e}(S.Z);function T(t,e){t.getImage().src=e}const A=O;var L=i(199274),P=i(579313),j=i(578487),N=[101,101],Z=function(t){function e(e){var i=e||{};t.call(this,{attributions:i.attributions,projection:i.projection,resolutions:i.resolutions}),this.crossOrigin_=void 0!==i.crossOrigin?i.crossOrigin:null,this.url_=i.url,this.imageLoadFunction_=void 0!==i.imageLoadFunction?i.imageLoadFunction:T,this.params_=i.params||{},this.v13_=!0,this.updateV13_(),this.serverType_=i.serverType,this.hidpi_=void 0===i.hidpi||i.hidpi,this.image_=null,this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==i.ratio?i.ratio:1.5}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getGetFeatureInfoUrl=function(t,e,i,s){if(void 0!==this.url_){var o=(0,g.U2)(i),n=this.getProjection();n&&n!==o&&(e=(0,l.a)(n,o,t,e),t=(0,g.vs)(t,o,n));var a=(0,h.p8)(t,e,0,N),u={SERVICE:"WMS",VERSION:r.E,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};(0,c.f0)(u,this.params_,s);var p=Math.floor((t[0]-a[0])/e),_=Math.floor((a[3]-t[1])/e);return u[this.v13_?"I":"X"]=p,u[this.v13_?"J":"Y"]=_,this.getRequestUrl_(a,N,1,n||o,u)}},e.prototype.getParams=function(){return this.params_},e.prototype.getImageInternal=function(t,e,i,s){if(void 0===this.url_)return null;e=this.findNearestResolution(e),1==i||this.hidpi_&&void 0!==this.serverType_||(i=1);var o=e/i,u=(0,h.qg)(t),_=Math.ceil((0,h.dz)(t)/o),g=Math.ceil((0,h.Cr)(t)/o),l=(0,h.p8)(u,o,0,[_,g]),d=Math.ceil(this.ratio_*(0,h.dz)(t)/o),m=Math.ceil(this.ratio_*(0,h.Cr)(t)/o),R=(0,h.p8)(u,o,0,[d,m]),E=this.image_;if(E&&this.renderedRevision_==this.getRevision()&&E.getResolution()==e&&E.getPixelRatio()==i&&(0,h.r4)(E.getExtent(),l))return E;var v={SERVICE:"WMS",VERSION:r.E,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};(0,c.f0)(v,this.params_),this.imageSize_[0]=Math.round((0,h.dz)(R)/o),this.imageSize_[1]=Math.round((0,h.Cr)(R)/o);var f=this.getRequestUrl_(R,this.imageSize_,i,s,v);return this.image_=new p(R,e,i,f,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),(0,n.oL)(this.image_,a.Z.CHANGE,this.handleImageChange,this),this.image_},e.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},e.prototype.getRequestUrl_=function(t,e,i,r,s){if((0,_.h)(void 0!==this.url_,9),s[this.v13_?"CRS":"SRS"]=r.getCode(),"STYLES"in this.params_||(s.STYLES=""),1!=i)switch(this.serverType_){case L.Z.GEOSERVER:var o=90*i+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+o:s.FORMAT_OPTIONS="dpi:"+o;break;case L.Z.MAPSERVER:s.MAP_RESOLUTION=90*i;break;case L.Z.CARMENTA_SERVER:case L.Z.QGIS:s.DPI=90*i;break;default:(0,_.h)(!1,8)}s.WIDTH=e[0],s.HEIGHT=e[1];var n,a=r.getAxisOrientation();return n=this.v13_&&"ne"==a.substr(0,2)?[t[1],t[0],t[3],t[2]]:t,s.BBOX=n.join(","),(0,j.B)(this.url_,s)},e.prototype.getUrl=function(){return this.url_},e.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},e.prototype.setUrl=function(t){t!=this.url_&&(this.url_=t,this.image_=null,this.changed())},e.prototype.updateParams=function(t){(0,c.f0)(this.params_,t),this.updateV13_(),this.image_=null,this.changed()},e.prototype.updateV13_=function(){var t=this.params_.VERSION||r.E;this.v13_=(0,P.n)(t,"1.3")>=0},e}(A);const M=Z},991587:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>R});var r=i(214431),s=i(438906),o=i(421915),n=i(913580),a=i(921882),h=i(218672),u=i(152209),p=i(450596),_=i(676122),c=i(199274),g=i(570701),l=i(579313),d=i(578487);function m(t,e,i){var s=this.getTileGrid();if(s||(s=this.getTileGridForProjection(i)),!(s.getResolutions().length<=t[0])){1==e||this.hidpi_&&void 0!==this.serverType_||(e=1);var a=s.getResolution(t[0]),h=s.getTileCoordExtent(t,this.tmpExtent_),u=(0,p.Pq)(s.getTileSize(t[0]),this.tmpSize),_=this.gutter_;0!==_&&(u=(0,p.f3)(u,_,this.tmpSize),h=(0,o.f3)(h,a*_,h)),1!=e&&(u=(0,p.bA)(u,e,this.tmpSize));var c={SERVICE:"WMS",VERSION:r.E,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return(0,n.f0)(c,this.params_),this.getRequestUrl_(t,u,h,e,i,c)}}const R=function(t){function e(e){var i=e||{},r=i.params||{},s=!("TRANSPARENT"in r)||r.TRANSPARENT;t.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,opaque:!s,projection:i.projection,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileClass:i.tileClass,tileGrid:i.tileGrid,tileLoadFunction:i.tileLoadFunction,tileUrlFunction:m,url:i.url,urls:i.urls,wrapX:void 0===i.wrapX||i.wrapX,transition:i.transition}),this.gutter_=void 0!==i.gutter?i.gutter:0,this.params_=r,this.v13_=!0,this.serverType_=i.serverType,this.hidpi_=void 0===i.hidpi||i.hidpi,this.tmpExtent_=(0,o.lJ)(),this.updateV13_(),this.setKey(this.getKeyForParams_())}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getGetFeatureInfoUrl=function(t,e,i,s){var a=(0,h.U2)(i),_=this.getProjection(),c=this.getTileGrid();c||(c=this.getTileGridForProjection(a));var g=c.getTileCoordForCoordAndResolution(t,e);if(!(c.getResolutions().length<=g[0])){var l=c.getResolution(g[0]),d=c.getTileCoordExtent(g,this.tmpExtent_),m=(0,p.Pq)(c.getTileSize(g[0]),this.tmpSize),R=this.gutter_;0!==R&&(m=(0,p.f3)(m,R,this.tmpSize),d=(0,o.f3)(d,l*R,d)),_&&_!==a&&(l=(0,u.a)(_,a,t,l),d=(0,h.$A)(d,a,_),t=(0,h.vs)(t,a,_));var E={SERVICE:"WMS",VERSION:r.E,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};(0,n.f0)(E,this.params_,s);var v=Math.floor((t[0]-d[0])/l),f=Math.floor((d[3]-t[1])/l);return E[this.v13_?"I":"X"]=v,E[this.v13_?"J":"Y"]=f,this.getRequestUrl_(g,m,d,1,_||a,E)}},e.prototype.getGutter=function(){return this.gutter_},e.prototype.getParams=function(){return this.params_},e.prototype.getRequestUrl_=function(t,e,i,r,o,n){var h=this.urls;if(h){if(n.WIDTH=e[0],n.HEIGHT=e[1],n[this.v13_?"CRS":"SRS"]=o.getCode(),"STYLES"in this.params_||(n.STYLES=""),1!=r)switch(this.serverType_){case c.Z.GEOSERVER:var u=90*r+.5|0;"FORMAT_OPTIONS"in n?n.FORMAT_OPTIONS+=";dpi:"+u:n.FORMAT_OPTIONS="dpi:"+u;break;case c.Z.MAPSERVER:n.MAP_RESOLUTION=90*r;break;case c.Z.CARMENTA_SERVER:case c.Z.QGIS:n.DPI=90*r;break;default:(0,s.h)(!1,52)}var p,_,l=o.getAxisOrientation(),m=i;return this.v13_&&"ne"==l.substr(0,2)&&(p=i[0],m[0]=i[1],m[1]=p,p=i[2],m[2]=i[3],m[3]=p),n.BBOX=m.join(","),_=1==h.length?h[0]:h[(0,a.$W)((0,g.vp)(t),h.length)],(0,d.B)(_,n)}},e.prototype.getTilePixelRatio=function(t){return this.hidpi_&&void 0!==this.serverType_?t:1},e.prototype.getKeyForParams_=function(){var t=0,e=[];for(var i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")},e.prototype.updateParams=function(t){(0,n.f0)(this.params_,t),this.updateV13_(),this.setKey(this.getKeyForParams_())},e.prototype.updateV13_=function(){var t=this.params_.VERSION||r.E;this.v13_=(0,l.n)(t,"1.3")>=0},e}(_.Z)},199274:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r={CARMENTA_SERVER:"carmentaserver",GEOSERVER:"geoserver",MAPSERVER:"mapserver",QGIS:"qgis"}},214431:(t,e,i)=>{"use strict";i.d(e,{E:()=>r});var r="1.3.0"},579313:(t,e,i)=>{"use strict";function r(t,e){for(var i=(""+t).split("."),r=(""+e).split("."),s=0;s<Math.max(i.length,r.length);s++){var o=parseInt(i[s]||"0",10),n=parseInt(r[s]||"0",10);if(o>n)return 1;if(n>o)return-1}return 0}i.d(e,{n:()=>r})}}]);