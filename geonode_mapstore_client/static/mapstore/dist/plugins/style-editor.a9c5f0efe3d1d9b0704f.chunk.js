(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701],{94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>G});var n=r(49977),a=r.n(n),o=r(27361),i=r.n(o),l=r(91175),s=r.n(l),c=r(1469),u=r.n(c),f=r(41106),y=r.n(f),p=r(97395),b=r(80416),d=r(60604),m=r(90825),v=r(80833),g=r(82904),h=r(24262),S=r(96909),O=r(9082),w=r(75875),E=r.n(w),j=r(19155),P=r.n(j),N=r(84596),T=r.n(N),D=r(99009);function U(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const C=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,D.$N)(r),s=l.name,c=l.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return E().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],n=a.map((function(e){return e.name})),o=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:k(k({},t),{},{styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return E().put(u,e).then((function(){return e}))}))},W=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,D.$N)(r),s=l.name,c=l.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return E().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[];return{layer:k(k({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(U(r),U(a))}})}})).then((function(e){return E().put(u,e).then((function(){return e}))}))},A=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,a=e.options,o=void 0===a?{}:a,i=(0,D.$N)(r),l=i.name,s=i.workspace,c="".concat(t,"rest/").concat(s&&"workspaces/".concat(s,"/")||"","layers/").concat(l,".json");return E().get(c,o).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],a=t.defaultStyle||{},o=P()([a].concat(U(r)),"name");return{layer:k(k({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return E().put(c,e).then((function(){return e}))}))};var R=r(93222),_=r(75110),V=r(7147),Z=r(8954);function F(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(e){var t=e.status,r=e.styleName,n=e.baseUrl;return"edit"===t?a().Observable.defer((function(){return O.ZP.getStyleCodeByName({baseUrl:n,styleName:r})})).switchMap((function(e){return a().Observable.of((0,S.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return a().Observable.of((0,S.Fe)("edit",e))})):a().Observable.empty()},J=function(e){var t=e.styleName,r=e.baseUrl,n=e.onSuccess$,o=e.onError$;return a().Observable.defer((function(){return O.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return n||a().Observable.empty()})).catch((function(){return o||a().Observable.empty()}))},q=function(e){var t=e.baseUrl,r=e.update,n=e.code,o=e.format,i=e.styleName,l=e.status,s=e.languageVersion,c=e.options,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],y=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a().Observable.defer((function(){return O.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:n,format:o,styleName:i,languageVersion:s,options:c})})).switchMap((function(){var e;return u()(f)&&(e=a().Observable).of.apply(e,[(0,S.Wm)()].concat(F(f)))||f})).catch((function(e){var t;return(t=a().Observable).of.apply(t,[(0,S.Fe)(l,e),(0,S.Wm)()].concat(F(y)))})).startWith((0,S.pt)(l))};const G={toggleStyleEditorEpic:function(e,t){return e.ofType(S.vZ).filter((function(){return!(0,R.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),n=(0,_.jN)(r),o=!!i()(n,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,R.gc)(e),r=(0,R.Z0)(e).baseUrl,n=void 0===r?"":r;return a().Observable.of((0,S.l1)(),(0,d.fU)({owner:D.s1})).merge(t?J({styleName:t,baseUrl:n}):a().Observable.empty())}(r);if((0,R.ji)(r)&&o)return a().Observable.empty();var l=e.layer||(0,_.Iz)(r);if(!l||l&&!l.url)return a().Observable.empty();var s=(0,h.Nd)(l);if(!s)return l.availableStyles?a().Observable.of((0,b.Xy)({availableStyles:l.availableStyles}),(0,S.Wm)()):(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?a().Observable.of((0,b.Xy)({availableStyles:t.availableStyles}),(0,b.tV)(l.id,"layer",$({},t)),(0,S.Wm)()):a().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())})).startWith((0,S.pt)("global"));var c=l.url.split(s),u="".concat(c[0]).concat(s),f=(0,R.Z0)(r);return a().Observable.defer((function(){return(0,Z.eb)({baseUrl:u,styleService:f})})).switchMap((function(e){var t,r=[(0,S.E0)(e)];return(t=(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?a().Observable.defer((function(){return O.ZP.getStylesInfo({baseUrl:u,styles:t&&t.availableStyles||[]})})).switchMap((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a().Observable.of((0,d.W)(l.id,D.s1,"override",{}),(0,b.Xy)({availableStyles:e}),(0,b.tV)(l.id,"layer",$($({},t),{},{availableStyles:e})),(0,S.Wm)())}(e)})):a().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())}))).startWith.apply(t,r).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return a().Observable.of((0,S.Fe)(t,e),(0,S.Wm)())}))})).startWith((0,S.pt)("global"),(0,S.l1)())}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(S.g$).filter((function(e){return!!e.status})).switchMap((function(r){var n=t.getState(),o=(0,R.Vf)(n),i=o&&o.params||{},l=o&&!o.describeFeatureType&&(0,m.H)(o.url,o,{query:i}),s=(0,R.i7)(n)||o.availableStyles&&o.availableStyles[0]&&o.availableStyles[0].name,c=(0,R.Ri)(n),u=(0,R.Z0)(n).baseUrl,f=void 0===u?"":u;return l&&function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=a().Observable).of.apply(r,[(0,S.pt)("global")].concat(F(o))).merge(e.ofType(b.K$).filter((function(){var e=(0,_.Iz)(t.getState());return n(e)})).switchMap((function(){var e=(0,_.Iz)(t.getState());return i(e)})).catch((function(e){return a().Observable.of((0,S.Fe)("global",e),(0,S.Wm)())})).takeUntil(e.ofType(S.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[l],(function(e){return a().Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),a().Observable.of((0,S.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,S.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON}),(0,S.Wm)()))}))||a().Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),a().Observable.of((0,S.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(S.TB,S.DX).switchMap((function(e){var r=t.getState(),n=(0,R.gc)(r),a=(0,R.Vf)(r),o=(0,D.$N)(a.name).workspace,i=e.format&&e.format!==(0,R.iB)(r),l=n||"".concat(o?"".concat(o,":"):"").concat((0,D.Vi)()),s=e.format||(0,R.iB)(r),c=(0,R.ex)(r),u=(0,R.Z0)(r).baseUrl,f=void 0===u?"":u,y=(0,R.j5)(r),b="sld"===s&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},m=y.version!==b.version?{params:{raw:!0}}:{},v=b,g=function(t){return q({update:!0,code:e.code,format:s,styleName:t,status:c,baseUrl:f,languageVersion:v,options:m},[(0,d.B1)(D.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,S.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:s,init:e.init,languageVersion:v})],"edit"===c?[]:[(0,p.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===s?"* { stroke: #888888; }":"sld"===s&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",O=function(e){return q({code:h,format:s,styleName:e,status:c,baseUrl:f},g(e),[(0,p.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,S.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return i&&n&&J({styleName:n,baseUrl:f,onSuccess$:O("".concat(o?"".concat(o,":"):"").concat((0,D.Vi)())),onError$:g(l)})||n&&g(l)||O(l)}))},createStyleEpic:function(e,t){return e.ofType(S.vA).switchMap((function(e){var r=t.getState(),n=(0,R.gB)(r),o=(0,R.Vf)(r),i=(0,D.$N)(o.name).workspace,l="".concat(i?"".concat(i,":"):"").concat((0,D.nK)(e.settings)),c=(0,R.iB)(r),u=e.settings||{},f=u.title,m=void 0===f?"":f,v=u._abstract,g=void 0===v?"":v,h=(0,R.Z0)(r).baseUrl,w=void 0===h?"":h,E=$({title:m,description:g},{msStyleJSON:null,msEditorType:"visual"});return a().Observable.defer((function(){return O.ZP.createStyle({baseUrl:w,code:y()(n)({styleTitle:m,styleAbstract:g}),format:c,styleName:l,metadata:E})})).switchMap((function(){return a().Observable.of((0,d.B1)(D.s1,[{}]),(0,b.Xy)({style:l||""},!0),(0,S.Nf)(""),(0,S.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,n=e.styleName,o=e.format,i=e.title,l=e._abstract,c=e.metadata;return a().Observable.defer((function(){return W({baseUrl:t,layerName:r.name,styles:[{name:n}]})})).switchMap((function(){var e=$({filename:"".concat(n,".").concat(o),format:o,name:n,title:i,_abstract:l},c&&{metadata:c}),t=s()(r.availableStyles),u=r.availableStyles&&[t,e].concat(F(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return a().Observable.of((0,b.Xy)({availableStyles:u},!0),(0,S.Wm)())})).catch((function(){return a().Observable.of((0,S.Wm)())})).startWith((0,S.pt)("global"))}({layer:o,styleName:l,format:c,title:m,_abstract:g,baseUrl:w,metadata:E}))})).catch((function(e){return a().Observable.of((0,S.Fe)("",e),(0,S.Wm)(),(0,p.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,S.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(S.ch).switchMap((function(){var e=t.getState(),r=(0,R.iB)(e),n=(0,R.j5)(e),o=(0,R.gB)(e),i=(0,R.i7)(e),l=(0,R.gc)(e),s=(0,R.Vf)(e),c=(0,R.Z0)(e).baseUrl,u=void 0===c?"":c,f=(0,R.WW)(e)||{},y={msStyleJSON:f.styleJSON||null,msEditorType:f.editorType},d=(s.availableStyles||[]).map((function(e){return e.name===i?$($({},e),{},{metadata:$($({},e.metadata),y)}):e}));return a().Observable.defer((function(){return O.ZP.updateStyle({baseUrl:u,code:o,format:r,styleName:i,languageVersion:n,options:{params:{raw:!0}},metadata:y})})).switchMap((function(){return a().Observable.of((0,S.Wm)(),(0,b.tV)(s.id,"layer",{_v_:Date.now(),availableStyles:d}),(0,b.Xy)({availableStyles:d}),(0,S.k5)({temporaryId:l,templateId:"",code:o,format:r,init:!0,languageVersion:n}),(0,p.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return a().Observable.of((0,S.Fe)("global",e),(0,S.Wm)(),(0,p.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,S.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(S.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,n=t.getState(),o=(0,R.Vf)(n),i=(0,R.Z0)(n).baseUrl,l=void 0===i?"":i,s=(0,V.tL)(n),c=(0,V.Gd)(n);return a().Observable.defer((function(){return C({baseUrl:l,layerName:o.name,styles:[{name:r}]})})).switchMap((function(){var e=o.availableStyles&&o.availableStyles.filter((function(e){return e.name!==r}))||[];return a().Observable.concat(a().Observable.of((0,b.Xy)({style:"",availableStyles:e},!0),(0,S.Wm)(),(0,g.Xg)("layersettings","originalSettings",$($({},s),{},{style:""})),(0,g.Xg)("layersettings","initialSettings",$($({},c),{},{style:""}))),J({styleName:r,baseUrl:l,onSuccess$:a().Observable.of((0,p.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:a().Observable.of((0,p.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return a().Observable.of((0,S.Wm)())})).startWith((function(){return a().Observable.of((0,S.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(S.rb).switchMap((function(){var e=t.getState(),r=(0,R.Z0)(e).baseUrl,n=void 0===r?"":r,o=(0,R.Vf)(e),i=(0,R.i7)(e);return a().Observable.defer((function(){return A({baseUrl:n,layerName:o.name,styleName:i})})).switchMap((function(){var e=o.availableStyles.filter((function(e){var t=e.name;return i===t})),t=o.availableStyles.filter((function(e){var t=e.name;return i!==t})),r=[].concat(F(e),F(t));return a().Observable.of((0,b.Xy)({availableStyles:r},!0),(0,p.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,S.Wm)())})).startWith((0,S.pt)("global")).catch((function(){return a().Observable.of((0,p.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,S.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>m,HI:()=>v});var n=r(72500),a=r.n(n),o=(r(91175),r(90173)),i=r(49977),l=r(67007),s=r(75875),c=r.n(s),u=(r(86267),r(24262)),f=r(10284),y=r(33044);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o.default;var m=function(e){return i.Observable.defer((function(){return l.ZP.getCapabilities((0,u.Fh)(e))})).let(f.oB).map((function(t){return l.ZP.parseLayerCapabilities(t,e)}))},v=function(e){return function(e){return i.Observable.defer((function(){return c().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,o=e.url,i=a().parse(n.url||o,!0);return a().format(b(b({},i),{},{search:void 0,query:b(b({},i.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(f.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return b(b({},e),{},{params:{},search:r?{type:"wfs",url:(0,y.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(1469),a=r.n(n),o=r(47037),i=r.n(o),l=r(27418),s=r.n(l),c=r(45697),u=r.n(c),f=r(24852),y=r.n(f),p=r(71703),b=r(67076),d=r(22222),m=r(80416),v=r(96909),g=r(15402),h=r(65539),S=r(82030),O=r(73014),w=r(32425),E=r(74621),j=r(93222),P=r(99009),N=r(2496);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(o){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function s(){return x(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||a()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,P.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return y().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?y().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,y().createElement("div",{className:"text-center"},y().createElement(N.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:y().createElement("div",{style:{height:25}})},this.props.isEditing?y().createElement(N.m2,{config:this.props.editorConfig}):y().createElement(N.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&M(t.prototype,r),s}(y().Component);W(A,"propTypes",{layer:u().object,header:u().node,isEditing:u().bool,showToolbar:u().node.bool,onInit:u().func,styleService:u().object,userRole:u().string,editingAllowedRoles:u().array,enableSetDefaultStyle:u().bool,canEdit:u().bool,editorConfig:u().object}),W(A,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var R=(0,b.compose)(b.toClass,(0,b.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,p.connect)((0,d.P1)([j.ex,j.aN,j.Vf,j.p,E.L3,j.z_,j.Z0],(function(e,t,r,n,a,o,i){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:a,canEdit:o,styleService:i}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,a,o,i=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(a=e.styleService)||void 0===a?void 0:a.baseUrl)&&(null===(o=e.styleService)||void 0===o?void 0:o.isStatic),l=r.styleService&&!i?U(U({},r.styleService),{},{isStatic:!0}):U({},e.styleService);return U(U(U(U({},r),e),t),{},{styleService:l})})),(0,S.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:y().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:y().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,O.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return y().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},y().createElement(w.Z,e))})),(0,b.compose)((0,p.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,b.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(A);const _={StyleEditorPlugin:s()(R,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:N.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(96909),a=r(47037),o=r.n(a);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return l(l({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return l(l({},e),{},{canEdit:t.canEdit});case n.gF:return l(l({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?l(l({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):l(l({},e),{},{status:t.status});case n.dJ:return{service:e.service&&l({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return l(l({},e),{},{addStyle:t.add});case n.lX:return l(l({},e),{},{loading:!t.status||t.status});case n.E2:return l(l({},e),{},{loading:!1,enabled:!0});case n.mF:var r,a,i,c=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(a=t.error)||void 0===a?void 0:a.message)||"",u=o()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},f=c.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),y=f&&2===f.length&&f.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),a=parseFloat(r[1]);return n&&!isNaN(a)&&l(l({},e),{},s({},n,a))||l({},e)}),l({message:c},u))||l({message:c},u);return l(l({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:l(l({},e.error),{},s({},t.status||"global",l({status:t.error&&t.error.status||404},y)))});case n.dk:return l(l({},e),{},{metadata:l(l({},e.metadata),t.metadata)});default:return e}}},10284:(e,t,r)=>{"use strict";r.d(t,{sw:()=>v,oB:()=>g});var n=r(49977),a=r.n(n),o=r(27361),i=r.n(o),l=r(5055),s=r(7526);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return y(e,arguments,d(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b(n,e)})(e)}function y(e,t,r){return(y=p()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&b(a,r.prototype),a}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r(24384);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,r,n=(t=a,r=p(),function(){var e,n=d(t);if(r){var a=d(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=n.call(this,e)).name="OGCError",r.code=t,r}return a}(f(Error)),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[s.stripPrefix],explicitArray:!1,mergeAttrs:!0};return a().Observable.bindNodeCallback((function(e,r){return(0,l.parseString)(e,t,r)}))(e)},g=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?a().Observable.bindNodeCallback((function(e,t){return(0,l.parseString)(e,{tagNameProcessors:[s.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=i()(e,"ExceptionReport.Exception.ExceptionText");throw new m(t||"Undefined OGC Service Error",i()(e,"ExceptionReport.Exception.exceptionCode"))})):a().Observable.of(e)}))}}}]);