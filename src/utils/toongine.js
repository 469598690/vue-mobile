!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=a(o);!function(){window.toongine=u.default}(),window.document.write('<script src="http://cdn.jsdelivr.net/eruda/1.2.2/eruda.min.js" type="text/javascript" async></script>')},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return!!e.handlerName||(e.callback({msg:"参数不合法~",code:-1}),!1)}function u(e){o(e)&&(window.AEJSBridge?window.AEJSBridge.dispatch(e):ne.push(e))}function d(e){o(e)&&window.AEJSBridge&&window.AEJSBridge.addEventListener(e)}function r(e){o(e)&&window.AEJSBridge&&window.AEJSBridge.removeEventListener(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),i=a(l),c=n(4),s=a(c),f=n(5),_=a(f),p=n(6),v=a(p),m=n(7),g=a(m),y=n(8),h=a(y),M=n(9),b=a(M),w=n(10),N=a(w),E=n(11),P=a(E),j=n(12),L=a(j),K=n(13),O=a(K),C=n(14),S=a(C),k=n(15),B=a(k),A=n(16),J=a(A),D=n(17),I=a(D),R=n(18),T=a(R),F=n(19),G=a(F),x=n(20),U=a(x),H=n(21),Q=a(H),V=n(23),$=a(V),q=n(24),z=a(q),W=n(25),X=a(W),Y=n(26),Z=a(Y),ee=n(27),te=a(ee),ne=[];if(!window.AEJSBridge){var ae=function e(){for(var t=0;t<ne.length;t++){var n=ne.shift();window.AEJSBridge.dispatch({handlerName:n.handlerName,params:n.params,callback:n.callback})}document.removeEventListener("AEJSBridgeReady",e)};document.addEventListener("AEJSBridgeReady",ae)}t.default={dispatch:u,addEventListener:d,removeEventListener:r,device:i.default,location:s.default,media:_.default,page:v.default,app:g.default,frame:h.default,file:b.default,open:N.default,card:P.default,chat:L.default,groupChat:O.default,recommend:S.default,toonflash:B.default,trends:J.default,group:I.default,discovery:T.default,notify:G.default,contact:U.default,devTools:Q.default,pay:$.default,toon:z.default,oauth:X.default,topic:Z.default,net:te.default}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"device",actionKeys:["makePhoneCall","getClipboardData","setClipboardData","getNetworkType","scanCode","genQrCode","rotateScreen","addCalendarEvent","deleteCalendarEvent","editCalendarEvent","getCalendarEvent","startVibrate","openGps","getSystemInfo"]})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={generate:function(e){var t=e.moduleName,n=e.actionKeys,a=e.eventKeys;if(t){var o={};return n&&n.forEach(function(e){o[e]=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};toongine.dispatch({handlerName:"action_"+t+"_"+e,params:n.params,callback:n.callback})}}),a&&a.forEach(function(e){o[e]=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};toongine.addEventListener({handlerName:n.eventId&&"string"==typeof n.eventId?"event_"+t+"_"+e+"_"+n.eventId:"event_"+t+"_"+e,callback:n.callback})}}),o}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"location",actionKeys:["getLocation","openLocation","chooseLocation"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"media",actionKeys:["chooseImage","previewImage","audioPlay","videoPlay","audioRecord","chooseVideo"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"page",actionKeys:["setShareInfo","openShare","hideLoading","hideToast","showActionSheet","showLoading","showModal","showToast","navigateBack","navigateTo","redirectTo","hideNavigationBarLoading","setNavigationBarTitle","showNavigationBarLoading","disableLoadMore","disableRefresh","dismissLoadMore","enableLoadMore","enableRefresh","dismissRefresh"],eventKeys:["onLoadMoreListener","onRefreshListener"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"app",actionKeys:["shutdown"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"frame",actionKeys:["open","openFrame","displayFrame"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"file",actionKeys:["openDocument","getFileInfo","deleteFile","getFileList"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"open",actionKeys:["getCode","getEnv","getSystemInfo"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"card",actionKeys:["chooseCard","openQrCode"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"chat",actionKeys:["openChat","createSingleChat"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"groupChat",actionKeys:["create","joinGroupChat","openGroupChat"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"recommend",actionKeys:["openHome","recommendFriend"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"toonflash",actionKeys:["openHome"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"trends",actionKeys:["openDetail","openEditor"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"group",actionKeys:["setGroup","create","openQrCode","discovery"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"discovery",actionKeys:["openAround","openGroup"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"notify",actionKeys:["openHome","openCatalog"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"contact",actionKeys:["openFriends","openColleagues","openCard"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22),u=a(o);t.default={setEnableDebug:function(e){return e.params.enable?(document.getElementById("eruda")||eruda.init(),eruda._$el.show(),void e.callback({code:0,msg:"开启调试工具成功~"})):(eruda._$el.hide(),void e.callback({code:0,msg:"关闭调试工具成功~"}))},enableDebugMode:function(e){u.default.init(e)}}},function(e,t){"use strict";function n(e){l=e,r()}function a(e){setTimeout(function(){e.callback&&e.callback(d(e.handlerName),function(e){console.log("res",e)})},2e3)}function o(e){}function u(e){e&&e.callback&&e.callback(d(e.handlerName,e.params))}function d(e,t){return{data:l[e]?l[e]:"handlerName 不存在！！！",msg:"ok !!!",code:0}}function r(){if(!window.AEJSBridge){var e=window.AEJSBridge={init:n,addEventListener:a,removeEventListener:o,dispatch:u},t=document,d=t.createEvent("Events");d.initEvent("AEJSBridgeReady"),d.bridge=e,t.dispatchEvent(d)}}Object.defineProperty(t,"__esModule",{value:!0});var l={};t.default={init:n}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"pay",actionKeys:["openCashPay","openLuckyMoney","openGathering","stopGathering","openRecharge"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"toon",actionKeys:["goHome"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"oauth",actionKeys:["personal","organizational"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"topic",actionKeys:["openArticle"]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o);t.default=u.default.generate({moduleName:"net",actionKeys:["request","startDownload","resumeDownload","pauseDownload","cancelDownload","initUpload","resumeUpload","cancelUpload"],eventKeys:["onNetworkStatusChange","onDownloadProgressListener","onDownloadCompleteListener","onUploadProgressListener","onUploadCompleteListener"]})}]);