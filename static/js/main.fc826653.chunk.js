(this["webpackJsonpbarcode-reader"]=this["webpackJsonpbarcode-reader"]||[]).push([[0],{52:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(28),i=a(81),m=a(97),u=a(84),s=a(85),d=a(25),f=a(83),h=a(41),v=a.n(h),g=Object(i.a)((function(e){return Object(m.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function p(){var e=g();return r.a.createElement(f.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(s.a,{edge:"start",color:"inherit","aria-label":"menu",className:e.menuButton},r.a.createElement(v.a,null)),r.a.createElement(d.a,{variant:"h6",className:e.title},"Leitor de c\xf3digo de barras")))}var E=a(86),b=a(87),y=a(88),O=a(89),w=a(42),S=a.n(w);function j(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{elevation:2,style:{marginTop:"20px"}},r.a.createElement(b.a,null,r.a.createElement(d.a,{variant:"body1"},"Nenhum c\xf3digo foi lido ainda."))),r.a.createElement(E.a,{elevation:2,style:{marginTop:"20px"}},r.a.createElement(y.a,{title:"B000000"}),r.a.createElement(b.a,null,r.a.createElement(d.a,{variant:"body1"},e.codeScannerd)),r.a.createElement(O.a,null,r.a.createElement(s.a,{color:"secondary","aria-label":"Deletar"},r.a.createElement(S.a,null)))))}var x=a(91),k=a(96),C=a(92),_=a(93),F=a(94),V=a(95),B=a(44),R=a(90);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("path",{d:"M2 6h2v12H2V6m3 0h1v12H5V6m2 0h3v12H7V6m4 0h1v12h-1V6m3 0h2v12h-2V6m3 0h3v12h-3V6m4 0h1v12h-1V6z",fill:"#FFFFFF"}),W=r.a.createElement("rect",{x:0,y:0,width:24,height:24,fill:"rgba(0, 0, 0, 0)"}),H=function(e){var t=e.svgRef,a=e.title,n=M(e,["svgRef","title"]);return r.a.createElement("svg",D({width:24,height:24,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},ref:t},n),a?r.a.createElement("title",null,a):null,N,W)},L=r.a.forwardRef((function(e,t){return r.a.createElement(H,D({svgRef:t},e))})),P=(a.p,function(e){return r.a.createElement(R.a,{color:"secondary",onClick:e.openScanner,style:{position:"fixed",right:0,bottom:0,margin:"0 1em 1em 1em"}},r.a.createElement(L,null))}),T=a(30),G=a(43),I=a.n(G),z=function(e){var t=I.a.config(e.config).fromSource(Object(T.a)(Object(T.a)({},e.config.inputStream),{},{target:".overlay__content"}));return Object(n.useEffect)((function(){return t.toPromise().promise.then(e.onDetected).catch(e.onCancel),function(){t.removeEventListener("detected",e.onDetected).stop(),console.log("cleanup...")}}),[t,e.onDetected,e.onCancel]),r.a.createElement("div",{className:"overlay__content"})},J={frequency:5,numOfWorkers:2,locate:!0,inputStream:{name:"Live",type:"LiveStream",constraints:{width:800,height:600,deviceId:1,facingMode:"environment"},area:{top:"0%",right:"0%",left:"0%",bottom:"0%"}},decoder:{readers:["ean_reader","code_39_reader","code_128_reader"]},locator:{halfSample:!0,patchSize:"medium"}},q=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(B.a)(),m=Object(x.a)(i.breakpoints.down("sm")),u=function(){c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{open:o,onClose:u,fullScreen:m},r.a.createElement(C.a,{id:"barcode-camera-dialog"},"Camera"),r.a.createElement(_.a,null,r.a.createElement(z,{config:J,onDetected:function(t){e.setCodeScanner(t)},onCancel:function(){console.log("Stop Scan...")}})),r.a.createElement(F.a,{style:{width:"95%",maxWidth:"95%",height:"95%",maxHeight:"95%"}},r.a.createElement(V.a,{color:"primary",variant:"contained",onClick:u},"Close"))),r.a.createElement(P,{openScanner:function(){c(!0)}}))},A=Object(i.a)((function(e){return Object(m.a)({root:{flexGrow:1}})})),Y=function(){var e=A(),t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(p,null),r.a.createElement(j,{codeScannerd:o}),r.a.createElement(q,{setCodeScanner:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.fc826653.chunk.js.map