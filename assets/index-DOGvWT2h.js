(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const y of g)if(y.type==="childList")for(const C of y.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&u(C)}).observe(document,{childList:!0,subtree:!0});function f(g){const y={};return g.integrity&&(y.integrity=g.integrity),g.referrerPolicy&&(y.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?y.credentials="include":g.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(g){if(g.ep)return;g.ep=!0;const y=f(g);fetch(g.href,y)}})();var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function A0(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var f=function u(){return this instanceof u?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};f.prototype=o.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(n).forEach(function(u){var g=Object.getOwnPropertyDescriptor(n,u);Object.defineProperty(f,u,g.get?g:{enumerable:!0,get:function(){return n[u]}})}),f}var Hu={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function E0(){if(zh)return Ol;zh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(u,g,y){var C=null;if(y!==void 0&&(C=""+y),g.key!==void 0&&(C=""+g.key),"key"in g){y={};for(var Q in g)Q!=="key"&&(y[Q]=g[Q])}else y=g;return g=y.ref,{$$typeof:n,type:u,key:C,ref:g!==void 0?g:null,props:y}}return Ol.Fragment=o,Ol.jsx=f,Ol.jsxs=f,Ol}var Oh;function _0(){return Oh||(Oh=1,Hu.exports=E0()),Hu.exports}var m=_0(),Nu={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function j0(){if(Th)return xe;Th=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),C=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),ne=Symbol.iterator;function ue(p){return p===null||typeof p!="object"?null:(p=ne&&p[ne]||p["@@iterator"],typeof p=="function"?p:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,ve={};function oe(p,b,U){this.props=p,this.context=b,this.refs=ve,this.updater=U||le}oe.prototype.isReactComponent={},oe.prototype.setState=function(p,b){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,b,"setState")},oe.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function he(){}he.prototype=oe.prototype;function ae(p,b,U){this.props=p,this.context=b,this.refs=ve,this.updater=U||le}var se=ae.prototype=new he;se.constructor=ae,P(se,oe.prototype),se.isPureReactComponent=!0;var z=Array.isArray;function O(){}var S={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function _(p,b,U){var D=U.ref;return{$$typeof:n,type:p,key:b,ref:D!==void 0?D:null,props:U}}function v(p,b){return _(p.type,b,p.props)}function B(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Z(p){var b={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return b[U]})}var R=/\/+/g;function J(p,b){return typeof p=="object"&&p!==null&&p.key!=null?Z(""+p.key):b.toString(36)}function ee(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(O,O):(p.status="pending",p.then(function(b){p.status==="pending"&&(p.status="fulfilled",p.value=b)},function(b){p.status==="pending"&&(p.status="rejected",p.reason=b)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function E(p,b,U,D,W){var K=typeof p;(K==="undefined"||K==="boolean")&&(p=null);var te=!1;if(p===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(p.$$typeof){case n:case o:te=!0;break;case X:return te=p._init,E(te(p._payload),b,U,D,W)}}if(te)return W=W(p),te=D===""?"."+J(p,0):D,z(W)?(U="",te!=null&&(U=te.replace(R,"$&/")+"/"),E(W,b,U,"",function(Se){return Se})):W!=null&&(B(W)&&(W=v(W,U+(W.key==null||p&&p.key===W.key?"":(""+W.key).replace(R,"$&/")+"/")+te)),b.push(W)),1;te=0;var ge=D===""?".":D+":";if(z(p))for(var de=0;de<p.length;de++)D=p[de],K=ge+J(D,de),te+=E(D,b,U,K,W);else if(de=ue(p),typeof de=="function")for(p=de.call(p),de=0;!(D=p.next()).done;)D=D.value,K=ge+J(D,de++),te+=E(D,b,U,K,W);else if(K==="object"){if(typeof p.then=="function")return E(ee(p),b,U,D,W);throw b=String(p),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return te}function c(p,b,U){if(p==null)return p;var D=[],W=0;return E(p,D,"","",function(K){return b.call(U,K,W++)}),D}function ie(p){if(p._status===-1){var b=p._result;b=b(),b.then(function(U){(p._status===0||p._status===-1)&&(p._status=1,p._result=U)},function(U){(p._status===0||p._status===-1)&&(p._status=2,p._result=U)}),p._status===-1&&(p._status=0,p._result=b)}if(p._status===1)return p._result.default;throw p._result}var T=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},d={map:c,forEach:function(p,b,U){c(p,function(){b.apply(this,arguments)},U)},count:function(p){var b=0;return c(p,function(){b++}),b},toArray:function(p){return c(p,function(b){return b})||[]},only:function(p){if(!B(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return xe.Activity=Y,xe.Children=d,xe.Component=oe,xe.Fragment=f,xe.Profiler=g,xe.PureComponent=ae,xe.StrictMode=u,xe.Suspense=G,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,xe.__COMPILER_RUNTIME={__proto__:null,c:function(p){return S.H.useMemoCache(p)}},xe.cache=function(p){return function(){return p.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(p,b,U){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var D=P({},p.props),W=p.key;if(b!=null)for(K in b.key!==void 0&&(W=""+b.key),b)!k.call(b,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&b.ref===void 0||(D[K]=b[K]);var K=arguments.length-2;if(K===1)D.children=U;else if(1<K){for(var te=Array(K),ge=0;ge<K;ge++)te[ge]=arguments[ge+2];D.children=te}return _(p.type,W,D)},xe.createContext=function(p){return p={$$typeof:C,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:y,_context:p},p},xe.createElement=function(p,b,U){var D,W={},K=null;if(b!=null)for(D in b.key!==void 0&&(K=""+b.key),b)k.call(b,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(W[D]=b[D]);var te=arguments.length-2;if(te===1)W.children=U;else if(1<te){for(var ge=Array(te),de=0;de<te;de++)ge[de]=arguments[de+2];W.children=ge}if(p&&p.defaultProps)for(D in te=p.defaultProps,te)W[D]===void 0&&(W[D]=te[D]);return _(p,K,W)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(p){return{$$typeof:Q,render:p}},xe.isValidElement=B,xe.lazy=function(p){return{$$typeof:X,_payload:{_status:-1,_result:p},_init:ie}},xe.memo=function(p,b){return{$$typeof:$,type:p,compare:b===void 0?null:b}},xe.startTransition=function(p){var b=S.T,U={};S.T=U;try{var D=p(),W=S.S;W!==null&&W(U,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(O,T)}catch(K){T(K)}finally{b!==null&&U.types!==null&&(b.types=U.types),S.T=b}},xe.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},xe.use=function(p){return S.H.use(p)},xe.useActionState=function(p,b,U){return S.H.useActionState(p,b,U)},xe.useCallback=function(p,b){return S.H.useCallback(p,b)},xe.useContext=function(p){return S.H.useContext(p)},xe.useDebugValue=function(){},xe.useDeferredValue=function(p,b){return S.H.useDeferredValue(p,b)},xe.useEffect=function(p,b){return S.H.useEffect(p,b)},xe.useEffectEvent=function(p){return S.H.useEffectEvent(p)},xe.useId=function(){return S.H.useId()},xe.useImperativeHandle=function(p,b,U){return S.H.useImperativeHandle(p,b,U)},xe.useInsertionEffect=function(p,b){return S.H.useInsertionEffect(p,b)},xe.useLayoutEffect=function(p,b){return S.H.useLayoutEffect(p,b)},xe.useMemo=function(p,b){return S.H.useMemo(p,b)},xe.useOptimistic=function(p,b){return S.H.useOptimistic(p,b)},xe.useReducer=function(p,b,U){return S.H.useReducer(p,b,U)},xe.useRef=function(p){return S.H.useRef(p)},xe.useState=function(p){return S.H.useState(p)},xe.useSyncExternalStore=function(p,b,U){return S.H.useSyncExternalStore(p,b,U)},xe.useTransition=function(){return S.H.useTransition()},xe.version="19.2.3",xe}var Ah;function mn(){return Ah||(Ah=1,Nu.exports=j0()),Nu.exports}var qe=mn();const pt=mc(qe);var Uu={exports:{}},Tl={},Lu={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function M0(){return Eh||(Eh=1,(function(n){function o(E,c){var ie=E.length;E.push(c);e:for(;0<ie;){var T=ie-1>>>1,d=E[T];if(0<g(d,c))E[T]=c,E[ie]=d,ie=T;else break e}}function f(E){return E.length===0?null:E[0]}function u(E){if(E.length===0)return null;var c=E[0],ie=E.pop();if(ie!==c){E[0]=ie;e:for(var T=0,d=E.length,p=d>>>1;T<p;){var b=2*(T+1)-1,U=E[b],D=b+1,W=E[D];if(0>g(U,ie))D<d&&0>g(W,U)?(E[T]=W,E[D]=ie,T=D):(E[T]=U,E[b]=ie,T=b);else if(D<d&&0>g(W,ie))E[T]=W,E[D]=ie,T=D;else break e}}return c}function g(E,c){var ie=E.sortIndex-c.sortIndex;return ie!==0?ie:E.id-c.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;n.unstable_now=function(){return y.now()}}else{var C=Date,Q=C.now();n.unstable_now=function(){return C.now()-Q}}var G=[],$=[],X=1,Y=null,ne=3,ue=!1,le=!1,P=!1,ve=!1,oe=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function se(E){for(var c=f($);c!==null;){if(c.callback===null)u($);else if(c.startTime<=E)u($),c.sortIndex=c.expirationTime,o(G,c);else break;c=f($)}}function z(E){if(P=!1,se(E),!le)if(f(G)!==null)le=!0,O||(O=!0,Z());else{var c=f($);c!==null&&ee(z,c.startTime-E)}}var O=!1,S=-1,k=5,_=-1;function v(){return ve?!0:!(n.unstable_now()-_<k)}function B(){if(ve=!1,O){var E=n.unstable_now();_=E;var c=!0;try{e:{le=!1,P&&(P=!1,he(S),S=-1),ue=!0;var ie=ne;try{t:{for(se(E),Y=f(G);Y!==null&&!(Y.expirationTime>E&&v());){var T=Y.callback;if(typeof T=="function"){Y.callback=null,ne=Y.priorityLevel;var d=T(Y.expirationTime<=E);if(E=n.unstable_now(),typeof d=="function"){Y.callback=d,se(E),c=!0;break t}Y===f(G)&&u(G),se(E)}else u(G);Y=f(G)}if(Y!==null)c=!0;else{var p=f($);p!==null&&ee(z,p.startTime-E),c=!1}}break e}finally{Y=null,ne=ie,ue=!1}c=void 0}}finally{c?Z():O=!1}}}var Z;if(typeof ae=="function")Z=function(){ae(B)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,J=R.port2;R.port1.onmessage=B,Z=function(){J.postMessage(null)}}else Z=function(){oe(B,0)};function ee(E,c){S=oe(function(){E(n.unstable_now())},c)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(E){E.callback=null},n.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<E?Math.floor(1e3/E):5},n.unstable_getCurrentPriorityLevel=function(){return ne},n.unstable_next=function(E){switch(ne){case 1:case 2:case 3:var c=3;break;default:c=ne}var ie=ne;ne=c;try{return E()}finally{ne=ie}},n.unstable_requestPaint=function(){ve=!0},n.unstable_runWithPriority=function(E,c){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var ie=ne;ne=E;try{return c()}finally{ne=ie}},n.unstable_scheduleCallback=function(E,c,ie){var T=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?T+ie:T):ie=T,E){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=ie+d,E={id:X++,callback:c,priorityLevel:E,startTime:ie,expirationTime:d,sortIndex:-1},ie>T?(E.sortIndex=ie,o($,E),f(G)===null&&E===f($)&&(P?(he(S),S=-1):P=!0,ee(z,ie-T))):(E.sortIndex=d,o(G,E),le||ue||(le=!0,O||(O=!0,Z()))),E},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(E){var c=ne;return function(){var ie=ne;ne=c;try{return E.apply(this,arguments)}finally{ne=ie}}}})(Bu)),Bu}var _h;function C0(){return _h||(_h=1,Lu.exports=M0()),Lu.exports}var qu={exports:{}},Ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function k0(){if(jh)return Ot;jh=1;var n=mn();function o(G){var $="https://react.dev/errors/"+G;if(1<arguments.length){$+="?args[]="+encodeURIComponent(arguments[1]);for(var X=2;X<arguments.length;X++)$+="&args[]="+encodeURIComponent(arguments[X])}return"Minified React error #"+G+"; visit "+$+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},g=Symbol.for("react.portal");function y(G,$,X){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:Y==null?null:""+Y,children:G,containerInfo:$,implementation:X}}var C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(G,$){if(G==="font")return"";if(typeof $=="string")return $==="use-credentials"?$:""}return Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ot.createPortal=function(G,$){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$||$.nodeType!==1&&$.nodeType!==9&&$.nodeType!==11)throw Error(o(299));return y(G,$,null,X)},Ot.flushSync=function(G){var $=C.T,X=u.p;try{if(C.T=null,u.p=2,G)return G()}finally{C.T=$,u.p=X,u.d.f()}},Ot.preconnect=function(G,$){typeof G=="string"&&($?($=$.crossOrigin,$=typeof $=="string"?$==="use-credentials"?$:"":void 0):$=null,u.d.C(G,$))},Ot.prefetchDNS=function(G){typeof G=="string"&&u.d.D(G)},Ot.preinit=function(G,$){if(typeof G=="string"&&$&&typeof $.as=="string"){var X=$.as,Y=Q(X,$.crossOrigin),ne=typeof $.integrity=="string"?$.integrity:void 0,ue=typeof $.fetchPriority=="string"?$.fetchPriority:void 0;X==="style"?u.d.S(G,typeof $.precedence=="string"?$.precedence:void 0,{crossOrigin:Y,integrity:ne,fetchPriority:ue}):X==="script"&&u.d.X(G,{crossOrigin:Y,integrity:ne,fetchPriority:ue,nonce:typeof $.nonce=="string"?$.nonce:void 0})}},Ot.preinitModule=function(G,$){if(typeof G=="string")if(typeof $=="object"&&$!==null){if($.as==null||$.as==="script"){var X=Q($.as,$.crossOrigin);u.d.M(G,{crossOrigin:X,integrity:typeof $.integrity=="string"?$.integrity:void 0,nonce:typeof $.nonce=="string"?$.nonce:void 0})}}else $==null&&u.d.M(G)},Ot.preload=function(G,$){if(typeof G=="string"&&typeof $=="object"&&$!==null&&typeof $.as=="string"){var X=$.as,Y=Q(X,$.crossOrigin);u.d.L(G,X,{crossOrigin:Y,integrity:typeof $.integrity=="string"?$.integrity:void 0,nonce:typeof $.nonce=="string"?$.nonce:void 0,type:typeof $.type=="string"?$.type:void 0,fetchPriority:typeof $.fetchPriority=="string"?$.fetchPriority:void 0,referrerPolicy:typeof $.referrerPolicy=="string"?$.referrerPolicy:void 0,imageSrcSet:typeof $.imageSrcSet=="string"?$.imageSrcSet:void 0,imageSizes:typeof $.imageSizes=="string"?$.imageSizes:void 0,media:typeof $.media=="string"?$.media:void 0})}},Ot.preloadModule=function(G,$){if(typeof G=="string")if($){var X=Q($.as,$.crossOrigin);u.d.m(G,{as:typeof $.as=="string"&&$.as!=="script"?$.as:void 0,crossOrigin:X,integrity:typeof $.integrity=="string"?$.integrity:void 0})}else u.d.m(G)},Ot.requestFormReset=function(G){u.d.r(G)},Ot.unstable_batchedUpdates=function(G,$){return G($)},Ot.useFormState=function(G,$,X){return C.H.useFormState(G,$,X)},Ot.useFormStatus=function(){return C.H.useHostTransitionStatus()},Ot.version="19.2.3",Ot}var Mh;function D0(){if(Mh)return qu.exports;Mh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),qu.exports=k0(),qu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function R0(){if(Ch)return Tl;Ch=1;var n=C0(),o=mn(),f=D0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function C(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(y(e)!==e)throw Error(u(188))}function $(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return G(l),e;if(r===i)return G(l),t;r=r.sibling}throw Error(u(188))}if(a.return!==i.return)a=l,i=r;else{for(var s=!1,h=l.child;h;){if(h===a){s=!0,a=l,i=r;break}if(h===i){s=!0,i=l,a=r;break}h=h.sibling}if(!s){for(h=r.child;h;){if(h===a){s=!0,a=r,i=l;break}if(h===i){s=!0,i=r,a=l;break}h=h.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function X(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=X(e),t!==null)return t;e=e.sibling}return null}var Y=Object.assign,ne=Symbol.for("react.element"),ue=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),he=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case oe:return"Profiler";case ve:return"StrictMode";case z:return"Suspense";case O:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case ae:return e.displayName||"Context";case he:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var ee=Array.isArray,E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,c=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},T=[],d=-1;function p(e){return{current:e}}function b(e){0>d||(e.current=T[d],T[d]=null,d--)}function U(e,t){d++,T[d]=e.current,e.current=t}var D=p(null),W=p(null),K=p(null),te=p(null);function ge(e,t){switch(U(K,t),U(W,e),U(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zp(t),e=Kp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(D),U(D,e)}function de(){b(D),b(W),b(K)}function Se(e){e.memoizedState!==null&&U(te,e);var t=D.current,a=Kp(t,e.type);t!==a&&(U(W,e),U(D,a))}function Ae(e){W.current===e&&(b(D),b(W)),te.current===e&&(b(te),xl._currentValue=ie)}var we,Ee;function be(e){if(we===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Ee}var ze=!1;function We(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(q){var L=q}Reflect.construct(e,[],F)}else{try{F.call()}catch(q){L=q}e.call(F.prototype)}}else{try{throw Error()}catch(q){L=q}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(q){if(q&&L&&typeof q.stack=="string")return[q.stack,L.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],h=r[1];if(s&&h){var x=s.split(`
`),N=h.split(`
`);for(l=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(i===x.length||l===N.length)for(i=x.length-1,l=N.length-1;1<=i&&0<=l&&x[i]!==N[l];)l--;for(;1<=i&&0<=l;i--,l--)if(x[i]!==N[l]){if(i!==1||l!==1)do if(i--,l--,0>l||x[i]!==N[l]){var V=`
`+x[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return We(e.type,!1);case 11:return We(e.type.render,!1);case 1:return We(e.type,!0);case 31:return be("Activity");default:return""}}function Ie(e){try{var t="",a=null;do t+=_e(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fe=Object.prototype.hasOwnProperty,nt=n.unstable_scheduleCallback,vt=n.unstable_cancelCallback,yn=n.unstable_shouldYield,Ha=n.unstable_requestPaint,zt=n.unstable_now,fa=n.unstable_getCurrentPriorityLevel,Hl=n.unstable_ImmediatePriority,an=n.unstable_UserBlockingPriority,cn=n.unstable_NormalPriority,sm=n.unstable_LowPriority,Tc=n.unstable_IdlePriority,um=n.log,cm=n.unstable_setDisableYieldValue,ki=null,Dt=null;function Nn(e){if(typeof um=="function"&&cm(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(ki,e)}catch{}}var Rt=Math.clz32?Math.clz32:pm,fm=Math.log,dm=Math.LN2;function pm(e){return e>>>=0,e===0?32:31-(fm(e)/dm|0)|0}var Nl=256,Ul=262144,Ll=4194304;function da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?l=da(i):(s&=h,s!==0?l=da(s):a||(a=h&~e,a!==0&&(l=da(a))))):(h=i&~r,h!==0?l=da(h):s!==0?l=da(s):a||(a=i&~e,a!==0&&(l=da(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Di(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ac(){var e=Ll;return Ll<<=1,(Ll&62914560)===0&&(Ll=4194304),e}function zo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ri(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gm(e,t,a,i,l,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(a=s&~a;0<a;){var V=31-Rt(a),F=1<<V;h[V]=0,x[V]=-1;var L=N[V];if(L!==null)for(N[V]=null,V=0;V<L.length;V++){var q=L[V];q!==null&&(q.lane&=-536870913)}a&=~F}i!==0&&Ec(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Ec(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function _c(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Rt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function jc(e,t){var a=t&-t;return a=(a&42)!==0?1:Oo(a),(a&(e.suspendedLanes|t))!==0?0:a}function Oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function To(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mc(){var e=c.p;return e!==0?e:(e=window.event,e===void 0?32:yh(e.type))}function Cc(e,t){var a=c.p;try{return c.p=e,t()}finally{c.p=a}}var Un=Math.random().toString(36).slice(2),bt="__reactFiber$"+Un,At="__reactProps$"+Un,Na="__reactContainer$"+Un,Ao="__reactEvents$"+Un,mm="__reactListeners$"+Un,ym="__reactHandles$"+Un,kc="__reactResources$"+Un,Hi="__reactMarker$"+Un;function Eo(e){delete e[bt],delete e[At],delete e[Ao],delete e[mm],delete e[ym]}function Ua(e){var t=e[bt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Na]||a[bt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=th(e);e!==null;){if(a=e[bt])return a;e=th(e)}return t}e=a,a=e.parentNode}return null}function La(e){if(e=e[bt]||e[Na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ba(e){var t=e[kc];return t||(t=e[kc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[Hi]=!0}var Dc=new Set,Rc={};function pa(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(Rc[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hc={},Nc={};function bm(e){return Fe.call(Nc,e)?!0:Fe.call(Hc,e)?!1:vm.test(e)?Nc[e]=!0:(Hc[e]=!0,!1)}function ql(e,t,a){if(bm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function vn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _o(e){if(!e._valueTracker){var t=Uc(e)?"checked":"value";e._valueTracker=Sm(e,t,""+e[t])}}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Uc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xm=/[\n"\\]/g;function Vt(e){return e.replace(xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,a,i,l,r,s,h){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Mo(e,s,Xt(t)):a!=null?Mo(e,s,Xt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Xt(h):e.removeAttribute("name")}function Bc(e,t,a,i,l,r,s,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){_o(e);return}a=a!=null?""+Xt(a):"",t=t!=null?""+Xt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),_o(e)}function Mo(e,t,a){t==="number"&&Yl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ga(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qc(e,t,a){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Xt(a):""}function Gc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(u(92));if(ee(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Xt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),_o(e)}function Ya(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Xc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Yc(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Yc(e,r,t[r])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(e){return zm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var ko=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Va=null;function Vc(e){var t=La(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[At]||null;if(!l)throw Error(u(90));jo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Lc(i)}break e;case"textarea":qc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ga(e,!!a.multiple,t,!1)}}}var Ro=!1;function Qc(e,t,a){if(Ro)return e(t,a);Ro=!0;try{var i=e(t);return i}finally{if(Ro=!1,(Xa!==null||Va!==null)&&(Mr(),Xa&&(t=Xa,e=Va,Va=Xa=null,Vc(t),e)))for(t=0;t<e.length;t++)Vc(e[t])}}function Ui(e,t){var a=e.stateNode;if(a===null)return null;var i=a[At]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(Sn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Ho=!1}var Ln=null,No=null,Vl=null;function Zc(){if(Vl)return Vl;var e,t=No,a=t.length,i,l="value"in Ln?Ln.value:Ln.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(i=1;i<=s&&t[a-i]===l[r-i];i++);return Vl=l.slice(e,1<i?1-i:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Kc(){return!1}function Et(e){function t(a,i,l,r,s){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zl:Kc,this.isPropagationStopped=Kc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Et(ha),Bi=Y({},ha,{view:0,detail:0}),Om=Et(Bi),Uo,Lo,qi,Jl=Y({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Uo=e.screenX-qi.screenX,Lo=e.screenY-qi.screenY):Lo=Uo=0,qi=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),Jc=Et(Jl),Tm=Y({},Jl,{dataTransfer:0}),Am=Et(Tm),Em=Y({},Bi,{relatedTarget:0}),Bo=Et(Em),_m=Y({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=Et(_m),Mm=Y({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=Et(Mm),km=Y({},ha,{data:0}),Wc=Et(km),Dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function qo(){return Nm}var Um=Y({},Bi,{key:function(e){if(e.key){var t=Dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=Et(Um),Bm=Y({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=Et(Bm),qm=Y({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Gm=Et(qm),Ym=Y({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=Et(Ym),Vm=Y({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=Et(Vm),Zm=Y({},ha,{newState:0,oldState:0}),Km=Et(Zm),Jm=[9,13,27,32],Go=Sn&&"CompositionEvent"in window,Gi=null;Sn&&"documentMode"in document&&(Gi=document.documentMode);var Wm=Sn&&"TextEvent"in window&&!Gi,Pc=Sn&&(!Go||Gi&&8<Gi&&11>=Gi),Fc=" ",ef=!1;function tf(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qa=!1;function Im(e,t){switch(e){case"compositionend":return nf(t);case"keypress":return t.which!==32?null:(ef=!0,Fc);case"textInput":return e=t.data,e===Fc&&ef?null:e;default:return null}}function Pm(e,t){if(Qa)return e==="compositionend"||!Go&&tf(e,t)?(e=Zc(),Vl=No=Ln=null,Qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function lf(e,t,a,i){Xa?Va?Va.push(i):Va=[i]:Xa=i,t=Ur(t,"onChange"),0<t.length&&(a=new Kl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Yi=null,Xi=null;function ey(e){qp(e,0)}function Wl(e){var t=Ni(e);if(Lc(t))return e}function rf(e,t){if(e==="change")return t}var of=!1;if(Sn){var Yo;if(Sn){var Xo="oninput"in document;if(!Xo){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),Xo=typeof sf.oninput=="function"}Yo=Xo}else Yo=!1;of=Yo&&(!document.documentMode||9<document.documentMode)}function uf(){Yi&&(Yi.detachEvent("onpropertychange",cf),Xi=Yi=null)}function cf(e){if(e.propertyName==="value"&&Wl(Xi)){var t=[];lf(t,Xi,e,Do(e)),Qc(ey,t)}}function ty(e,t,a){e==="focusin"?(uf(),Yi=t,Xi=a,Yi.attachEvent("onpropertychange",cf)):e==="focusout"&&uf()}function ny(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Xi)}function ay(e,t){if(e==="click")return Wl(t)}function iy(e,t){if(e==="input"||e==="change")return Wl(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:ly;function Vi(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Fe.call(t,l)||!Ht(e[l],t[l]))return!1}return!0}function ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function df(e,t){var a=ff(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ff(a)}}function pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yl(e.document)}return t}function Vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ry=Sn&&"documentMode"in document&&11>=document.documentMode,Za=null,Qo=null,Qi=null,Zo=!1;function gf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zo||Za==null||Za!==Yl(i)||(i=Za,"selectionStart"in i&&Vo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qi&&Vi(Qi,i)||(Qi=i,i=Ur(Qo,"onSelect"),0<i.length&&(t=new Kl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Za)))}function ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ka={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},Ko={},mf={};Sn&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function ma(e){if(Ko[e])return Ko[e];if(!Ka[e])return e;var t=Ka[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in mf)return Ko[e]=t[a];return e}var yf=ma("animationend"),vf=ma("animationiteration"),bf=ma("animationstart"),oy=ma("transitionrun"),sy=ma("transitionstart"),uy=ma("transitioncancel"),Sf=ma("transitionend"),xf=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function ln(e,t){xf.set(e,t),pa(t,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],Ja=0,Wo=0;function Pl(){for(var e=Ja,t=Wo=Ja=0;t<e;){var a=Qt[t];Qt[t++]=null;var i=Qt[t];Qt[t++]=null;var l=Qt[t];Qt[t++]=null;var r=Qt[t];if(Qt[t++]=null,i!==null&&l!==null){var s=i.pending;s===null?l.next=l:(l.next=s.next,s.next=l),i.pending=l}r!==0&&wf(a,l,r)}}function Fl(e,t,a,i){Qt[Ja++]=e,Qt[Ja++]=t,Qt[Ja++]=a,Qt[Ja++]=i,Wo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Io(e,t,a,i){return Fl(e,t,a,i),er(e)}function ya(e,t){return Fl(e,null,null,t),er(e)}function wf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Rt(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function er(e){if(50<hl)throw hl=0,ru=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wa={};function cy(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,i){return new cy(e,t,a,i)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $f(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,a,i,l,r){var s=0;if(i=e,typeof e=="function")Po(e)&&(s=1);else if(typeof e=="string")s=g0(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=Nt(31,a,t,l),e.elementType=_,e.lanes=r,e;case P:return va(a.children,l,r,t);case ve:s=8,l|=24;break;case oe:return e=Nt(12,a,t,l|2),e.elementType=oe,e.lanes=r,e;case z:return e=Nt(13,a,t,l),e.elementType=z,e.lanes=r,e;case O:return e=Nt(19,a,t,l),e.elementType=O,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:s=10;break e;case he:s=9;break e;case se:s=11;break e;case S:s=14;break e;case k:s=16,i=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Nt(s,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function va(e,t,a,i){return e=Nt(7,e,i,t),e.lanes=a,e}function Fo(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function zf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function es(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Of=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var a=Of.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ie(t)},Of.set(e,t),t)}return{value:e,source:t,stack:Ie(t)}}var Ia=[],Pa=0,nr=null,Zi=0,Kt=[],Jt=0,Bn=null,fn=1,dn="";function wn(e,t){Ia[Pa++]=Zi,Ia[Pa++]=nr,nr=e,Zi=t}function Tf(e,t,a){Kt[Jt++]=fn,Kt[Jt++]=dn,Kt[Jt++]=Bn,Bn=e;var i=fn;e=dn;var l=32-Rt(i)-1;i&=~(1<<l),a+=1;var r=32-Rt(t)+l;if(30<r){var s=l-l%5;r=(i&(1<<s)-1).toString(32),i>>=s,l-=s,fn=1<<32-Rt(t)+l|a<<l|i,dn=r+e}else fn=1<<r|a<<l|i,dn=e}function ts(e){e.return!==null&&(wn(e,1),Tf(e,1,0))}function ns(e){for(;e===nr;)nr=Ia[--Pa],Ia[Pa]=null,Zi=Ia[--Pa],Ia[Pa]=null;for(;e===Bn;)Bn=Kt[--Jt],Kt[Jt]=null,dn=Kt[--Jt],Kt[Jt]=null,fn=Kt[--Jt],Kt[Jt]=null}function Af(e,t){Kt[Jt++]=fn,Kt[Jt++]=dn,Kt[Jt++]=Bn,fn=t.id,dn=t.overflow,Bn=e}var St=null,Qe=null,De=!1,qn=null,Wt=!1,as=Error(u(519));function Gn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(Zt(t,e)),as}function Ef(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[bt]=e,t[At]=i,a){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(a=0;a<ml.length;a++)Me(ml[a],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Bc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Gc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Vp(t.textContent,a)?(i.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),i.onScroll!=null&&Me("scroll",t),i.onScrollEnd!=null&&Me("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Gn(e,!0)}function _f(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:St=St.return}}function Fa(e){if(e!==St)return!1;if(!De)return _f(e),De=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xu(e.type,e.memoizedProps)),a=!a),a&&Qe&&Gn(e),_f(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=eh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=eh(e)}else t===27?(t=Qe,na(e.type)?(e=Tu,Tu=null,Qe=e):Qe=t):Qe=St?Pt(e.stateNode.nextSibling):null;return!0}function ba(){Qe=St=null,De=!1}function is(){var e=qn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),qn=null),e}function Ki(e){qn===null?qn=[e]:qn.push(e)}var ls=p(null),Sa=null,$n=null;function Yn(e,t,a){U(ls,t._currentValue),t._currentValue=a}function zn(e){e._currentValue=ls.current,b(ls)}function rs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function os(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var x=0;x<t.length;x++)if(h.context===t[x]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),rs(r.return,a,e),i||(s=null);break e}r=h.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),rs(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ei(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var h=l.type;Ht(l.pendingProps.value,s.value)||(e!==null?e.push(h):e=[h])}}else if(l===te.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(xl):e=[xl])}l=l.return}e!==null&&os(t,e,a,i),t.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){Sa=e,$n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return jf(Sa,e)}function ir(e,t){return Sa===null&&xa(e),jf(e,t)}function jf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$n===null){if(e===null)throw Error(u(308));$n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $n=$n.next=t;return a}var fy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},dy=n.unstable_scheduleCallback,py=n.unstable_NormalPriority,lt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ss(){return{controller:new fy,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&dy(py,function(){e.controller.abort()})}var Wi=null,us=0,ti=0,ni=null;function hy(e,t){if(Wi===null){var a=Wi=[];us=0,ti=du(),ni={status:"pending",value:void 0,then:function(i){a.push(i)}}}return us++,t.then(Mf,Mf),t}function Mf(){if(--us===0&&Wi!==null){ni!==null&&(ni.status="fulfilled");var e=Wi;Wi=null,ti=0,ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gy(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Cf=E.S;E.S=function(e,t){gp=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hy(e,t),Cf!==null&&Cf(e,t)};var wa=p(null);function cs(){var e=wa.current;return e!==null?e:Ve.pooledCache}function lr(e,t){t===null?U(wa,wa.current):U(wa,t.pool)}function kf(){var e=cs();return e===null?null:{parent:lt._currentValue,pool:e}}var ai=Error(u(460)),fs=Error(u(474)),rr=Error(u(542)),or={then:function(){}};function Df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(bn,bn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e}throw za=t,ai}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,ai):a}}var za=null;function Hf(){if(za===null)throw Error(u(459));var e=za;return za=null,e}function Nf(e){if(e===ai||e===rr)throw Error(u(483))}var ii=null,Ii=0;function sr(e){var t=Ii;return Ii+=1,ii===null&&(ii=[]),Rf(ii,e,t)}function Pi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===ne?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uf(e){function t(M,A){if(e){var H=M.deletions;H===null?(M.deletions=[A],M.flags|=16):H.push(A)}}function a(M,A){if(!e)return null;for(;A!==null;)t(M,A),A=A.sibling;return null}function i(M){for(var A=new Map;M!==null;)M.key!==null?A.set(M.key,M):A.set(M.index,M),M=M.sibling;return A}function l(M,A){return M=xn(M,A),M.index=0,M.sibling=null,M}function r(M,A,H){return M.index=H,e?(H=M.alternate,H!==null?(H=H.index,H<A?(M.flags|=67108866,A):H):(M.flags|=67108866,A)):(M.flags|=1048576,A)}function s(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function h(M,A,H,I){return A===null||A.tag!==6?(A=Fo(H,M.mode,I),A.return=M,A):(A=l(A,H),A.return=M,A)}function x(M,A,H,I){var me=H.type;return me===P?V(M,A,H.props.children,I,H.key):A!==null&&(A.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===k&&$a(me)===A.type)?(A=l(A,H.props),Pi(A,H),A.return=M,A):(A=tr(H.type,H.key,H.props,null,M.mode,I),Pi(A,H),A.return=M,A)}function N(M,A,H,I){return A===null||A.tag!==4||A.stateNode.containerInfo!==H.containerInfo||A.stateNode.implementation!==H.implementation?(A=es(H,M.mode,I),A.return=M,A):(A=l(A,H.children||[]),A.return=M,A)}function V(M,A,H,I,me){return A===null||A.tag!==7?(A=va(H,M.mode,I,me),A.return=M,A):(A=l(A,H),A.return=M,A)}function F(M,A,H){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Fo(""+A,M.mode,H),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ue:return H=tr(A.type,A.key,A.props,null,M.mode,H),Pi(H,A),H.return=M,H;case le:return A=es(A,M.mode,H),A.return=M,A;case k:return A=$a(A),F(M,A,H)}if(ee(A)||Z(A))return A=va(A,M.mode,H,null),A.return=M,A;if(typeof A.then=="function")return F(M,sr(A),H);if(A.$$typeof===ae)return F(M,ir(M,A),H);ur(M,A)}return null}function L(M,A,H,I){var me=A!==null?A.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return me!==null?null:h(M,A,""+H,I);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case ue:return H.key===me?x(M,A,H,I):null;case le:return H.key===me?N(M,A,H,I):null;case k:return H=$a(H),L(M,A,H,I)}if(ee(H)||Z(H))return me!==null?null:V(M,A,H,I,null);if(typeof H.then=="function")return L(M,A,sr(H),I);if(H.$$typeof===ae)return L(M,A,ir(M,H),I);ur(M,H)}return null}function q(M,A,H,I,me){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return M=M.get(H)||null,h(A,M,""+I,me);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ue:return M=M.get(I.key===null?H:I.key)||null,x(A,M,I,me);case le:return M=M.get(I.key===null?H:I.key)||null,N(A,M,I,me);case k:return I=$a(I),q(M,A,H,I,me)}if(ee(I)||Z(I))return M=M.get(H)||null,V(A,M,I,me,null);if(typeof I.then=="function")return q(M,A,H,sr(I),me);if(I.$$typeof===ae)return q(M,A,H,ir(A,I),me);ur(A,I)}return null}function fe(M,A,H,I){for(var me=null,Re=null,pe=A,Oe=A=0,ke=null;pe!==null&&Oe<H.length;Oe++){pe.index>Oe?(ke=pe,pe=null):ke=pe.sibling;var He=L(M,pe,H[Oe],I);if(He===null){pe===null&&(pe=ke);break}e&&pe&&He.alternate===null&&t(M,pe),A=r(He,A,Oe),Re===null?me=He:Re.sibling=He,Re=He,pe=ke}if(Oe===H.length)return a(M,pe),De&&wn(M,Oe),me;if(pe===null){for(;Oe<H.length;Oe++)pe=F(M,H[Oe],I),pe!==null&&(A=r(pe,A,Oe),Re===null?me=pe:Re.sibling=pe,Re=pe);return De&&wn(M,Oe),me}for(pe=i(pe);Oe<H.length;Oe++)ke=q(pe,M,Oe,H[Oe],I),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?Oe:ke.key),A=r(ke,A,Oe),Re===null?me=ke:Re.sibling=ke,Re=ke);return e&&pe.forEach(function(oa){return t(M,oa)}),De&&wn(M,Oe),me}function ye(M,A,H,I){if(H==null)throw Error(u(151));for(var me=null,Re=null,pe=A,Oe=A=0,ke=null,He=H.next();pe!==null&&!He.done;Oe++,He=H.next()){pe.index>Oe?(ke=pe,pe=null):ke=pe.sibling;var oa=L(M,pe,He.value,I);if(oa===null){pe===null&&(pe=ke);break}e&&pe&&oa.alternate===null&&t(M,pe),A=r(oa,A,Oe),Re===null?me=oa:Re.sibling=oa,Re=oa,pe=ke}if(He.done)return a(M,pe),De&&wn(M,Oe),me;if(pe===null){for(;!He.done;Oe++,He=H.next())He=F(M,He.value,I),He!==null&&(A=r(He,A,Oe),Re===null?me=He:Re.sibling=He,Re=He);return De&&wn(M,Oe),me}for(pe=i(pe);!He.done;Oe++,He=H.next())He=q(pe,M,Oe,He.value,I),He!==null&&(e&&He.alternate!==null&&pe.delete(He.key===null?Oe:He.key),A=r(He,A,Oe),Re===null?me=He:Re.sibling=He,Re=He);return e&&pe.forEach(function(T0){return t(M,T0)}),De&&wn(M,Oe),me}function Xe(M,A,H,I){if(typeof H=="object"&&H!==null&&H.type===P&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case ue:e:{for(var me=H.key;A!==null;){if(A.key===me){if(me=H.type,me===P){if(A.tag===7){a(M,A.sibling),I=l(A,H.props.children),I.return=M,M=I;break e}}else if(A.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===k&&$a(me)===A.type){a(M,A.sibling),I=l(A,H.props),Pi(I,H),I.return=M,M=I;break e}a(M,A);break}else t(M,A);A=A.sibling}H.type===P?(I=va(H.props.children,M.mode,I,H.key),I.return=M,M=I):(I=tr(H.type,H.key,H.props,null,M.mode,I),Pi(I,H),I.return=M,M=I)}return s(M);case le:e:{for(me=H.key;A!==null;){if(A.key===me)if(A.tag===4&&A.stateNode.containerInfo===H.containerInfo&&A.stateNode.implementation===H.implementation){a(M,A.sibling),I=l(A,H.children||[]),I.return=M,M=I;break e}else{a(M,A);break}else t(M,A);A=A.sibling}I=es(H,M.mode,I),I.return=M,M=I}return s(M);case k:return H=$a(H),Xe(M,A,H,I)}if(ee(H))return fe(M,A,H,I);if(Z(H)){if(me=Z(H),typeof me!="function")throw Error(u(150));return H=me.call(H),ye(M,A,H,I)}if(typeof H.then=="function")return Xe(M,A,sr(H),I);if(H.$$typeof===ae)return Xe(M,A,ir(M,H),I);ur(M,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,A!==null&&A.tag===6?(a(M,A.sibling),I=l(A,H),I.return=M,M=I):(a(M,A),I=Fo(H,M.mode,I),I.return=M,M=I),s(M)):a(M,A)}return function(M,A,H,I){try{Ii=0;var me=Xe(M,A,H,I);return ii=null,me}catch(pe){if(pe===ai||pe===rr)throw pe;var Re=Nt(29,pe,null,M.mode);return Re.lanes=I,Re.return=M,Re}finally{}}}var Oa=Uf(!0),Lf=Uf(!1),Xn=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=er(e),wf(e,null,a),t}return Fl(e,i,t,a),er(e)}function Fi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,_c(e,a)}}function hs(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var gs=!1;function el(){if(gs){var e=ni;if(e!==null)throw e}}function tl(e,t,a,i){gs=!1;var l=e.updateQueue;Xn=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var x=h,N=x.next;x.next=null,s===null?r=N:s.next=N,s=x;var V=e.alternate;V!==null&&(V=V.updateQueue,h=V.lastBaseUpdate,h!==s&&(h===null?V.firstBaseUpdate=N:h.next=N,V.lastBaseUpdate=x))}if(r!==null){var F=l.baseState;s=0,V=N=x=null,h=r;do{var L=h.lane&-536870913,q=L!==h.lane;if(q?(Ce&L)===L:(i&L)===L){L!==0&&L===ti&&(gs=!0),V!==null&&(V=V.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var fe=e,ye=h;L=t;var Xe=a;switch(ye.tag){case 1:if(fe=ye.payload,typeof fe=="function"){F=fe.call(Xe,F,L);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ye.payload,L=typeof fe=="function"?fe.call(Xe,F,L):fe,L==null)break e;F=Y({},F,L);break e;case 2:Xn=!0}}L=h.callback,L!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[L]:q.push(L))}else q={lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},V===null?(N=V=q,x=F):V=V.next=q,s|=L;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;q=h,h=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);V===null&&(x=F),l.baseState=x,l.firstBaseUpdate=N,l.lastBaseUpdate=V,r===null&&(l.shared.lanes=0),In|=s,e.lanes=s,e.memoizedState=F}}function Bf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function qf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bf(a[e],t)}var li=p(null),cr=p(0);function Gf(e,t){e=kn,U(cr,e),U(li,t),kn=e|t.baseLanes}function ms(){U(cr,kn),U(li,li.current)}function ys(){kn=cr.current,b(li),b(cr)}var Ut=p(null),It=null;function Zn(e){var t=e.alternate;U(at,at.current&1),U(Ut,e),It===null&&(t===null||li.current!==null||t.memoizedState!==null)&&(It=e)}function vs(e){U(at,at.current),U(Ut,e),It===null&&(It=e)}function Yf(e){e.tag===22?(U(at,at.current),U(Ut,e),It===null&&(It=e)):Kn()}function Kn(){U(at,at.current),U(Ut,Ut.current)}function Lt(e){b(Ut),It===e&&(It=null),b(at)}var at=p(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zu(a)||Ou(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,$e=null,Ge=null,rt=null,dr=!1,ri=!1,Ta=!1,pr=0,nl=0,oi=null,my=0;function et(){throw Error(u(321))}function bs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ht(e[a],t[a]))return!1;return!0}function Ss(e,t,a,i,l,r){return On=r,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Td:Rs,Ta=!1,r=a(i,l),Ta=!1,ri&&(r=Vf(t,a,i,l)),Xf(e),r}function Xf(e){E.H=ll;var t=Ge!==null&&Ge.next!==null;if(On=0,rt=Ge=$e=null,dr=!1,nl=0,oi=null,t)throw Error(u(300));e===null||ot||(e=e.dependencies,e!==null&&ar(e)&&(ot=!0))}function Vf(e,t,a,i){$e=e;var l=0;do{if(ri&&(oi=null),nl=0,ri=!1,25<=l)throw Error(u(301));if(l+=1,rt=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=Ad,r=t(a,i)}while(ri);return r}function yy(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&($e.flags|=1024),t}function xs(){var e=pr!==0;return pr=0,e}function ws(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function $s(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}On=0,rt=Ge=$e=null,ri=!1,nl=pr=0,oi=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?$e.memoizedState=rt=e:rt=rt.next=e,rt}function it(){if(Ge===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=rt===null?$e.memoizedState:rt.next;if(t!==null)rt=t,Ge=e;else{if(e===null)throw $e.alternate===null?Error(u(467)):Error(u(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},rt===null?$e.memoizedState=rt=e:rt=rt.next=e}return rt}function hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=nl;return nl+=1,oi===null&&(oi=[]),e=Rf(oi,e,t),t=$e,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Td:Rs),e}function gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===ae)return xt(e)}throw Error(u(438,String(e)))}function zs(e){var t=null,a=$e.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=$e.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hr(),$e.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function Tn(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=it();return Os(t,Ge,e)}function Os(e,t,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=s=null,x=null,N=t,V=!1;do{var F=N.lane&-536870913;if(F!==N.lane?(Ce&F)===F:(On&F)===F){var L=N.revertLane;if(L===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),F===ti&&(V=!0);else if((On&L)===L){N=N.next,L===ti&&(V=!0);continue}else F={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(h=x=F,s=r):x=x.next=F,$e.lanes|=L,In|=L;F=N.action,Ta&&a(r,F),r=N.hasEagerState?N.eagerState:a(r,F)}else L={lane:F,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(h=x=L,s=r):x=x.next=L,$e.lanes|=F,In|=F;N=N.next}while(N!==null&&N!==t);if(x===null?s=r:x.next=h,!Ht(r,e.memoizedState)&&(ot=!0,V&&(a=ni,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=x,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ts(e){var t=it(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);Ht(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function Qf(e,t,a){var i=$e,l=it(),r=De;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!Ht((Ge||l).memoizedState,a);if(s&&(l.memoizedState=a,ot=!0),l=l.queue,_s(Jf.bind(null,i,l,e),[e]),l.getSnapshot!==t||s||rt!==null&&rt.memoizedState.tag&1){if(i.flags|=2048,si(9,{destroy:void 0},Kf.bind(null,i,l,a,t),null),Ve===null)throw Error(u(349));r||(On&127)!==0||Zf(i,t,a)}return a}function Zf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=$e.updateQueue,t===null?(t=hr(),$e.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Kf(e,t,a,i){t.value=a,t.getSnapshot=i,Wf(t)&&If(e)}function Jf(e,t,a){return a(function(){Wf(t)&&If(e)})}function Wf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ht(e,a)}catch{return!0}}function If(e){var t=ya(e,2);t!==null&&kt(t,e,2)}function As(e){var t=Tt();if(typeof e=="function"){var a=e;if(e=a(),Ta){Nn(!0);try{a()}finally{Nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Pf(e,t,a,i){return e.baseState=a,Os(e,Ge,typeof i=="function"?i:Tn)}function vy(e,t,a,i,l){if(br(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};E.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,Ff(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Ff(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=E.T,s={};E.T=s;try{var h=a(l,i),x=E.S;x!==null&&x(s,h),ed(e,t,h)}catch(N){Es(e,t,N)}finally{r!==null&&s.types!==null&&(r.types=s.types),E.T=r}}else try{r=a(l,i),ed(e,t,r)}catch(N){Es(e,t,N)}}function ed(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){td(e,t,i)},function(i){return Es(e,t,i)}):td(e,t,a)}function td(e,t,a){t.status="fulfilled",t.value=a,nd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ff(e,a)))}function Es(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,nd(t),t=t.next;while(t!==i)}e.action=null}function nd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ad(e,t){return t}function id(e,t){if(De){var a=Ve.formState;if(a!==null){e:{var i=$e;if(De){if(Qe){t:{for(var l=Qe,r=Wt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Qe=Pt(l.nextSibling),i=l.data==="F!";break e}}Gn(i)}i=!1}i&&(t=a[0])}}return a=Tt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ad,lastRenderedState:t},a.queue=i,a=$d.bind(null,$e,i),i.dispatch=a,i=As(!1),r=Ds.bind(null,$e,!1,i.queue),i=Tt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=vy.bind(null,$e,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function ld(e){var t=it();return rd(t,Ge,e)}function rd(e,t,a){if(t=Os(e,t,ad)[0],e=mr(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=al(t)}catch(s){throw s===ai?rr:s}else i=t;t=it();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&($e.flags|=2048,si(9,{destroy:void 0},by.bind(null,l,a),null)),[i,r,e]}function by(e,t){e.action=t}function od(e){var t=it(),a=Ge;if(a!==null)return rd(t,a,e);it(),t=t.memoizedState,a=it();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function si(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=$e.updateQueue,t===null&&(t=hr(),$e.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function sd(){return it().memoizedState}function yr(e,t,a,i){var l=Tt();$e.flags|=e,l.memoizedState=si(1|t,{destroy:void 0},a,i===void 0?null:i)}function vr(e,t,a,i){var l=it();i=i===void 0?null:i;var r=l.memoizedState.inst;Ge!==null&&i!==null&&bs(i,Ge.memoizedState.deps)?l.memoizedState=si(t,r,a,i):($e.flags|=e,l.memoizedState=si(1|t,r,a,i))}function ud(e,t){yr(8390656,8,e,t)}function _s(e,t){vr(2048,8,e,t)}function Sy(e){$e.flags|=4;var t=$e.updateQueue;if(t===null)t=hr(),$e.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function cd(e){var t=it().memoizedState;return Sy({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function fd(e,t){return vr(4,2,e,t)}function dd(e,t){return vr(4,4,e,t)}function pd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,a){a=a!=null?a.concat([e]):null,vr(4,4,pd.bind(null,t,e),a)}function js(){}function gd(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&bs(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function md(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&bs(t,i[1]))return i[0];if(i=e(),Ta){Nn(!0);try{e()}finally{Nn(!1)}}return a.memoizedState=[i,t],i}function Ms(e,t,a){return a===void 0||(On&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yp(),$e.lanes|=e,In|=e,a)}function yd(e,t,a,i){return Ht(a,t)?a:li.current!==null?(e=Ms(e,a,i),Ht(e,t)||(ot=!0),e):(On&42)===0||(On&1073741824)!==0&&(Ce&261930)===0?(ot=!0,e.memoizedState=a):(e=yp(),$e.lanes|=e,In|=e,t)}function vd(e,t,a,i,l){var r=c.p;c.p=r!==0&&8>r?r:8;var s=E.T,h={};E.T=h,Ds(e,!1,t,a);try{var x=l(),N=E.S;if(N!==null&&N(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var V=gy(x,i);il(e,t,V,Gt(e))}else il(e,t,i,Gt(e))}catch(F){il(e,t,{then:function(){},status:"rejected",reason:F},Gt())}finally{c.p=r,s!==null&&h.types!==null&&(s.types=h.types),E.T=s}}function xy(){}function Cs(e,t,a,i){if(e.tag!==5)throw Error(u(476));var l=bd(e).queue;vd(e,l,t,ie,a===null?xy:function(){return Sd(e),a(i)})}function bd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:ie},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sd(e){var t=bd(e);t.next===null&&(t=e.alternate.memoizedState),il(e,t.next.queue,{},Gt())}function ks(){return xt(xl)}function xd(){return it().memoizedState}function wd(){return it().memoizedState}function wy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gt();e=Vn(a);var i=Qn(t,e,a);i!==null&&(kt(i,t,a),Fi(i,t,a)),t={cache:ss()},e.payload=t;return}t=t.return}}function $y(e,t,a){var i=Gt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},br(e)?zd(t,a):(a=Io(e,t,a,i),a!==null&&(kt(a,e,i),Od(a,t,i)))}function $d(e,t,a){var i=Gt();il(e,t,a,i)}function il(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(br(e))zd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,h=r(s,a);if(l.hasEagerState=!0,l.eagerState=h,Ht(h,s))return Fl(e,t,l,0),Ve===null&&Pl(),!1}catch{}finally{}if(a=Io(e,t,l,i),a!==null)return kt(a,e,i),Od(a,t,i),!0}return!1}function Ds(e,t,a,i){if(i={lane:2,revertLane:du(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},br(e)){if(t)throw Error(u(479))}else t=Io(e,a,i,2),t!==null&&kt(t,e,2)}function br(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function zd(e,t){ri=dr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Od(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,_c(e,a)}}var ll={readContext:xt,use:gr,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};ll.useEffectEvent=et;var Td={readContext:xt,use:gr,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:ud,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yr(4194308,4,pd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yr(4194308,4,e,t)},useInsertionEffect:function(e,t){yr(4,2,e,t)},useMemo:function(e,t){var a=Tt();t=t===void 0?null:t;var i=e();if(Ta){Nn(!0);try{e()}finally{Nn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Tt();if(a!==void 0){var l=a(t);if(Ta){Nn(!0);try{a(t)}finally{Nn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=$y.bind(null,$e,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=As(e);var t=e.queue,a=$d.bind(null,$e,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:js,useDeferredValue:function(e,t){var a=Tt();return Ms(a,e,t)},useTransition:function(){var e=As(!1);return e=vd.bind(null,$e,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=$e,l=Tt();if(De){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ve===null)throw Error(u(349));(Ce&127)!==0||Zf(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,ud(Jf.bind(null,i,r,e),[e]),i.flags|=2048,si(9,{destroy:void 0},Kf.bind(null,i,r,a,t),null),a},useId:function(){var e=Tt(),t=Ve.identifierPrefix;if(De){var a=dn,i=fn;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=my++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:id,useActionState:id,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ds.bind(null,$e,!0,a),a.dispatch=t,[e,t]},useMemoCache:zs,useCacheRefresh:function(){return Tt().memoizedState=wy.bind(null,$e)},useEffectEvent:function(e){var t=Tt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Rs={readContext:xt,use:gr,useCallback:gd,useContext:xt,useEffect:_s,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:dd,useMemo:md,useReducer:mr,useRef:sd,useState:function(){return mr(Tn)},useDebugValue:js,useDeferredValue:function(e,t){var a=it();return yd(a,Ge.memoizedState,e,t)},useTransition:function(){var e=mr(Tn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Qf,useId:xd,useHostTransitionStatus:ks,useFormState:ld,useActionState:ld,useOptimistic:function(e,t){var a=it();return Pf(a,Ge,e,t)},useMemoCache:zs,useCacheRefresh:wd};Rs.useEffectEvent=cd;var Ad={readContext:xt,use:gr,useCallback:gd,useContext:xt,useEffect:_s,useImperativeHandle:hd,useInsertionEffect:fd,useLayoutEffect:dd,useMemo:md,useReducer:Ts,useRef:sd,useState:function(){return Ts(Tn)},useDebugValue:js,useDeferredValue:function(e,t){var a=it();return Ge===null?Ms(a,e,t):yd(a,Ge.memoizedState,e,t)},useTransition:function(){var e=Ts(Tn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Qf,useId:xd,useHostTransitionStatus:ks,useFormState:od,useActionState:od,useOptimistic:function(e,t){var a=it();return Ge!==null?Pf(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zs,useCacheRefresh:wd};Ad.useEffectEvent=cd;function Hs(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:Y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ns={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Gt(),l=Vn(i);l.payload=t,a!=null&&(l.callback=a),t=Qn(e,l,i),t!==null&&(kt(t,e,i),Fi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Gt(),l=Vn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Qn(e,l,i),t!==null&&(kt(t,e,i),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gt(),i=Vn(a);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,a),t!==null&&(kt(t,e,a),Fi(t,e,a))}};function Ed(e,t,a,i,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!Vi(a,i)||!Vi(l,r):!0}function _d(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=Y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function jd(e){Il(e)}function Md(e){console.error(e)}function Cd(e){Il(e)}function Sr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function kd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Us(e,t,a){return a=Vn(a),a.tag=3,a.payload={element:null},a.callback=function(){Sr(e,t)},a}function Dd(e){return e=Vn(e),e.tag=3,e}function Rd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){kd(t,a,i)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){kd(t,a,i),typeof l!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function zy(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ei(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 31:case 13:return It===null?Cr():a.alternate===null&&tt===0&&(tt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===or?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),uu(e,i,l)),!1;case 22:return a.flags|=65536,i===or?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),uu(e,i,l)),!1}throw Error(u(435,a.tag))}return uu(e,i,l),Cr(),!1}if(De)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==as&&(e=Error(u(422),{cause:i}),Ki(Zt(e,a)))):(i!==as&&(t=Error(u(423),{cause:i}),Ki(Zt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Zt(i,a),l=Us(e.stateNode,i,l),hs(e,l),tt!==4&&(tt=2)),!1;var r=Error(u(520),{cause:i});if(r=Zt(r,a),pl===null?pl=[r]:pl.push(r),tt!==4&&(tt=2),t===null)return!0;i=Zt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Us(a.stateNode,i,e),hs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Dd(l),Rd(l,e,a,i),hs(a,l),!1}a=a.return}while(a!==null);return!1}var Ls=Error(u(461)),ot=!1;function wt(e,t,a,i){t.child=e===null?Lf(t,null,a,i):Oa(t,e.child,a,i)}function Hd(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var s={};for(var h in i)h!=="ref"&&(s[h]=i[h])}else s=i;return xa(t),i=Ss(e,t,a,s,r,l),h=xs(),e!==null&&!ot?(ws(e,t,l),An(e,t,l)):(De&&h&&ts(t),t.flags|=1,wt(e,t,i,l),t.child)}function Nd(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!Po(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ud(e,t,r,i,l)):(e=tr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Zs(e,l)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Vi,a(s,i)&&e.ref===t.ref)return An(e,t,l)}return t.flags|=1,e=xn(r,i),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(Vi(r,i)&&e.ref===t.ref)if(ot=!1,t.pendingProps=i=r,Zs(e,l))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,An(e,t,l)}return Bs(e,t,a,i,l)}function Ld(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return Bd(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,r!==null?r.cachePool:null),r!==null?Gf(t,r):ms(),Yf(t);else return i=t.lanes=536870912,Bd(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(lr(t,r.cachePool),Gf(t,r),Kn(),t.memoizedState=null):(e!==null&&lr(t,null),ms(),Kn());return wt(e,t,l,a),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bd(e,t,a,i,l){var r=cs();return r=r===null?null:{parent:lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&lr(t,null),ms(),Yf(t),e!==null&&ei(e,t,i,!0),t.childLanes=l,null}function xr(e,t){return t=$r({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qd(e,t,a){return Oa(t,e.child,null,a),e=xr(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function Oy(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(De){if(i.mode==="hidden")return e=xr(t,i),t.lanes=536870912,rl(null,e);if(vs(t),(e=Qe)?(e=Fp(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,St=t,Qe=null)):e=null,e===null)throw Gn(t);return t.lanes=536870912,null}return xr(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(vs(t),l)if(t.flags&256)t.flags&=-257,t=qd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ot||ei(e,t,a,!1),l=(a&e.childLanes)!==0,ot||l){if(i=Ve,i!==null&&(s=jc(i,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,ya(e,s),kt(i,e,s),Ls;Cr(),t=qd(e,t,a)}else e=r.treeContext,Qe=Pt(s.nextSibling),St=t,De=!0,qn=null,Wt=!1,e!==null&&Af(t,e),t=xr(t,i),t.flags|=4096;return t}return e=xn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Bs(e,t,a,i,l){return xa(t),a=Ss(e,t,a,i,void 0,l),i=xs(),e!==null&&!ot?(ws(e,t,l),An(e,t,l)):(De&&i&&ts(t),t.flags|=1,wt(e,t,a,l),t.child)}function Gd(e,t,a,i,l,r){return xa(t),t.updateQueue=null,a=Vf(t,i,a,l),Xf(e),i=xs(),e!==null&&!ot?(ws(e,t,r),An(e,t,r)):(De&&i&&ts(t),t.flags|=1,wt(e,t,a,r),t.child)}function Yd(e,t,a,i,l){if(xa(t),t.stateNode===null){var r=Wa,s=a.contextType;typeof s=="object"&&s!==null&&(r=xt(s)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ns,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},ds(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?xt(s):Wa,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Hs(t,a,s,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Ns.enqueueReplaceState(r,r.state,null),tl(t,i,r,l),el(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,x=Aa(a,h);r.props=x;var N=r.context,V=a.contextType;s=Wa,typeof V=="object"&&V!==null&&(s=xt(V));var F=a.getDerivedStateFromProps;V=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,V||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||N!==s)&&_d(t,r,i,s),Xn=!1;var L=t.memoizedState;r.state=L,tl(t,i,r,l),el(),N=t.memoizedState,h||L!==N||Xn?(typeof F=="function"&&(Hs(t,a,F,i),N=t.memoizedState),(x=Xn||Ed(t,a,x,i,L,N,s))?(V||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),r.props=i,r.state=N,r.context=s,i=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,ps(e,t),s=t.memoizedProps,V=Aa(a,s),r.props=V,F=t.pendingProps,L=r.context,N=a.contextType,x=Wa,typeof N=="object"&&N!==null&&(x=xt(N)),h=a.getDerivedStateFromProps,(N=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==F||L!==x)&&_d(t,r,i,x),Xn=!1,L=t.memoizedState,r.state=L,tl(t,i,r,l),el();var q=t.memoizedState;s!==F||L!==q||Xn||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof h=="function"&&(Hs(t,a,h,i),q=t.memoizedState),(V=Xn||Ed(t,a,V,i,L,q,x)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(N||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,q,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,q,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),r.props=i,r.state=q,r.context=x,i=V):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,wr(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,l),t.child=Oa(t,null,a,l)):wt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=An(e,t,l),e}function Xd(e,t,a,i){return ba(),t.flags|=256,wt(e,t,a,i),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gs(e){return{baseLanes:e,cachePool:kf()}}function Ys(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function Vd(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(l?Zn(t):Kn(),(e=Qe)?(e=Fp(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,St=t,Qe=null)):e=null,e===null)throw Gn(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var h=i.children;return i=i.fallback,l?(Kn(),l=t.mode,h=$r({mode:"hidden",children:h},l),i=va(i,l,a,null),h.return=t,i.return=t,h.sibling=i,t.child=h,i=t.child,i.memoizedState=Gs(a),i.childLanes=Ys(e,s,a),t.memoizedState=qs,rl(null,i)):(Zn(t),Xs(t,h))}var x=e.memoizedState;if(x!==null&&(h=x.dehydrated,h!==null)){if(r)t.flags&256?(Zn(t),t.flags&=-257,t=Vs(e,t,a)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),h=i.fallback,l=t.mode,i=$r({mode:"visible",children:i.children},l),h=va(h,l,a,null),h.flags|=2,i.return=t,h.return=t,i.sibling=h,t.child=i,Oa(t,e.child,null,a),i=t.child,i.memoizedState=Gs(a),i.childLanes=Ys(e,s,a),t.memoizedState=qs,t=rl(null,i));else if(Zn(t),Ou(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var N=s.dgst;s=N,i=Error(u(419)),i.stack="",i.digest=s,Ki({value:i,source:null,stack:null}),t=Vs(e,t,a)}else if(ot||ei(e,t,a,!1),s=(a&e.childLanes)!==0,ot||s){if(s=Ve,s!==null&&(i=jc(s,a),i!==0&&i!==x.retryLane))throw x.retryLane=i,ya(e,i),kt(s,e,i),Ls;zu(h)||Cr(),t=Vs(e,t,a)}else zu(h)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Qe=Pt(h.nextSibling),St=t,De=!0,qn=null,Wt=!1,e!==null&&Af(t,e),t=Xs(t,i.children),t.flags|=4096);return t}return l?(Kn(),h=i.fallback,l=t.mode,x=e.child,N=x.sibling,i=xn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,N!==null?h=xn(N,h):(h=va(h,l,a,null),h.flags|=2),h.return=t,i.return=t,i.sibling=h,t.child=i,rl(null,i),i=t.child,h=e.child.memoizedState,h===null?h=Gs(a):(l=h.cachePool,l!==null?(x=lt._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=kf(),h={baseLanes:h.baseLanes|a,cachePool:l}),i.memoizedState=h,i.childLanes=Ys(e,s,a),t.memoizedState=qs,rl(e.child,i)):(Zn(t),a=e.child,e=a.sibling,a=xn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Xs(e,t){return t=$r({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $r(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Vs(e,t,a){return Oa(t,e.child,null,a),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),rs(e.return,t,a)}function Qs(e,t,a,i,l,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l,s.treeForkCount=r)}function Zd(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var s=at.current,h=(s&2)!==0;if(h?(s=s&1|2,t.flags|=128):s&=1,U(at,s),wt(e,t,i,a),i=De?Zi:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,a,t);else if(e.tag===19)Qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&fr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Qs(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Qs(t,!0,a,null,r,i);break;case"together":Qs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function An(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ei(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=xn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function Ty(e,t,a){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Yn(t,lt,e.memoizedState.cache),ba();break;case 27:case 5:Se(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Zn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vd(e,t,a):(Zn(t),e=An(e,t,a),e!==null?e.sibling:null);Zn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ei(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Zd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(at,at.current),i)break;return null;case 22:return t.lanes=0,Ld(e,t,a,t.pendingProps);case 24:Yn(t,lt,e.memoizedState.cache)}return An(e,t,a)}function Kd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!Zs(e,a)&&(t.flags&128)===0)return ot=!1,Ty(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,De&&(t.flags&1048576)!==0&&Tf(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")Po(e)?(i=Aa(e,i),t.tag=1,t=Yd(null,t,e,i,a)):(t.tag=0,t=Bs(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===se){t.tag=11,t=Hd(null,t,e,i,a);break e}else if(l===S){t.tag=14,t=Nd(null,t,e,i,a);break e}}throw t=J(e)||e,Error(u(306,t,""))}}return t;case 0:return Bs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Aa(i,t.pendingProps),Yd(e,t,i,l,a);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,ps(e,t),tl(t,i,null,a);var s=t.memoizedState;if(i=s.cache,Yn(t,lt,i),i!==r.cache&&os(t,[lt],a,!0),el(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Xd(e,t,i,a);break e}else if(i!==l){l=Zt(Error(u(424)),t),Ki(l),t=Xd(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=Pt(e.firstChild),St=t,De=!0,qn=null,Wt=!0,a=Lf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ba(),i===l){t=An(e,t,a);break e}wt(e,t,i,a)}t=t.child}return t;case 26:return wr(e,t),e===null?(a=lh(t.type,null,t.pendingProps,null))?t.memoizedState=a:De||(a=t.type,e=t.pendingProps,i=Lr(K.current).createElement(a),i[bt]=t,i[At]=e,$t(i,a,e),ht(i),t.stateNode=i):t.memoizedState=lh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&De&&(i=t.stateNode=nh(t.type,t.pendingProps,K.current),St=t,Wt=!0,l=Qe,na(t.type)?(Tu=l,Qe=Pt(i.firstChild)):Qe=l),wt(e,t,t.pendingProps.children,a),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((l=i=Qe)&&(i=n0(i,t.type,t.pendingProps,Wt),i!==null?(t.stateNode=i,St=t,Qe=Pt(i.firstChild),Wt=!1,l=!0):l=!1),l||Gn(t)),Se(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,xu(l,r)?i=null:s!==null&&xu(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Ss(e,t,yy,null,null,a),xl._currentValue=l),wr(e,t),wt(e,t,i,a),t.child;case 6:return e===null&&De&&((e=a=Qe)&&(a=a0(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,St=t,Qe=null,e=!0):e=!1),e||Gn(t)),null;case 13:return Vd(e,t,a);case 4:return ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,a):wt(e,t,i,a),t.child;case 11:return Hd(e,t,t.type,t.pendingProps,a);case 7:return wt(e,t,t.pendingProps,a),t.child;case 8:return wt(e,t,t.pendingProps.children,a),t.child;case 12:return wt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Yn(t,t.type,i.value),wt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,xa(t),l=xt(l),i=i(l),t.flags|=1,wt(e,t,i,a),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,a);case 15:return Ud(e,t,t.type,t.pendingProps,a);case 19:return Zd(e,t,a);case 31:return Oy(e,t,a);case 22:return Ld(e,t,a,t.pendingProps);case 24:return xa(t),i=xt(lt),e===null?(l=cs(),l===null&&(l=Ve,r=ss(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},ds(t),Yn(t,lt,l)):((e.lanes&a)!==0&&(ps(e,t),tl(t,null,null,a),el()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Yn(t,lt,i)):(i=r.cache,Yn(t,lt,i),i!==l.cache&&os(t,[lt],a,!0))),wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function En(e){e.flags|=4}function Ks(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(xp())e.flags|=8192;else throw za=or,fs}else e.flags&=-16777217}function Jd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ch(t))if(xp())e.flags|=8192;else throw za=or,fs}function zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ac():536870912,e.lanes|=t,di|=t)}function ol(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Ay(e,t,a){var i=t.pendingProps;switch(ns(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),zn(lt),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,is())),Ze(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(En(t),r!==null?(Ze(t),Jd(t,r)):(Ze(t),Ks(t,l,null,i,a))):r?r!==e.memoizedState?(En(t),Ze(t),Jd(t,r)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&En(t),Ze(t),Ks(t,l,e,i,a)),null;case 27:if(Ae(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}e=D.current,Fa(t)?Ef(t):(e=nh(l,i,a),t.stateNode=e,En(t))}return Ze(t),null;case 5:if(Ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}if(r=D.current,Fa(t))Ef(t);else{var s=Lr(K.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(l,{is:i.is}):s.createElement(l)}}r[bt]=t,r[At]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;e:switch($t(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&En(t)}}return Ze(t),Ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=K.current,Fa(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=St,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[bt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Vp(e.nodeValue,a)),e||Gn(t,!0)}else e=Lr(e).createTextNode(i),e[bt]=t,t.stateNode=e}return Ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fa(t),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[bt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else a=is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Fa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[bt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),l=!1}else l=is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zr(t,t.updateQueue),Ze(t),null);case 4:return de(),e===null&&mu(t.stateNode.containerInfo),Ze(t),null;case 10:return zn(t.type),Ze(t),null;case 19:if(b(at),i=t.memoizedState,i===null)return Ze(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)ol(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fr(e),r!==null){for(t.flags|=128,ol(i,!1),e=r.updateQueue,t.updateQueue=e,zr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$f(a,e),a=a.sibling;return U(at,at.current&1|2),De&&wn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zt()>_r&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304)}else{if(!l)if(e=fr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zr(t,e),ol(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!De)return Ze(t),null}else 2*zt()-i.renderingStartTime>_r&&a!==536870912&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zt(),e.sibling=null,a=at.current,U(at,l?a&1|2:a&1),De&&wn(t,i.treeForkCount),e):(Ze(t),null);case 22:case 23:return Lt(t),ys(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),a=t.updateQueue,a!==null&&zr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&b(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),zn(lt),Ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Ey(e,t){switch(ns(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(lt),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(at),null;case 4:return de(),null;case 10:return zn(t.type),null;case 22:case 23:return Lt(t),ys(),e!==null&&b(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(lt),null;case 25:return null;default:return null}}function Wd(e,t){switch(ns(t),t.tag){case 3:zn(lt),de();break;case 26:case 27:case 5:Ae(t);break;case 4:de();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:b(at);break;case 10:zn(t.type);break;case 22:case 23:Lt(t),ys(),e!==null&&b(wa);break;case 24:zn(lt)}}function sl(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,s=a.inst;i=r(),s.destroy=i}a=a.next}while(a!==l)}}catch(h){Be(t,t.return,h)}}function Jn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var s=i.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,l=t;var x=a,N=h;try{N()}catch(V){Be(l,x,V)}}}i=i.next}while(i!==r)}}catch(V){Be(t,t.return,V)}}function Id(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qf(t,a)}catch(i){Be(e,e.return,i)}}}function Pd(e,t,a){a.props=Aa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Be(e,t,i)}}function ul(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Be(e,t,l)}}function pn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Be(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Be(e,t,l)}else a.current=null}function Fd(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Be(e,e.return,l)}}function Js(e,t,a){try{var i=e.stateNode;Wy(i,e.type,a,t),i[At]=t}catch(l){Be(e,e.return,l)}}function ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Is(e,t,a),e=e.sibling;e!==null;)Is(e,t,a),e=e.sibling}function Or(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Or(e,t,a),e=e.sibling;e!==null;)Or(e,t,a),e=e.sibling}function tp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$t(t,i,a),t[bt]=e,t[At]=a}catch(r){Be(e,e.return,r)}}var _n=!1,st=!1,Ps=!1,np=typeof WeakSet=="function"?WeakSet:Set,gt=null;function _y(e,t){if(e=e.containerInfo,bu=Qr,e=hf(e),Vo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,h=-1,x=-1,N=0,V=0,F=e,L=null;t:for(;;){for(var q;F!==a||l!==0&&F.nodeType!==3||(h=s+l),F!==r||i!==0&&F.nodeType!==3||(x=s+i),F.nodeType===3&&(s+=F.nodeValue.length),(q=F.firstChild)!==null;)L=F,F=q;for(;;){if(F===e)break t;if(L===a&&++N===l&&(h=s),L===r&&++V===i&&(x=s),(q=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=q}a=h===-1||x===-1?null:{start:h,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Su={focusedElem:e,selectionRange:a},Qr=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=Aa(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Be(a,a.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$u(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function ap(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Mn(e,a),i&4&&sl(5,a);break;case 1:if(Mn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Be(a,a.return,s)}else{var l=Aa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Be(a,a.return,s)}}i&64&&Id(a),i&512&&ul(a,a.return);break;case 3:if(Mn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{qf(e,t)}catch(s){Be(a,a.return,s)}}break;case 27:t===null&&i&4&&tp(a);case 26:case 5:Mn(e,a),t===null&&i&4&&Fd(a),i&512&&ul(a,a.return);break;case 12:Mn(e,a);break;case 31:Mn(e,a),i&4&&rp(e,a);break;case 13:Mn(e,a),i&4&&op(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Uy.bind(null,a),i0(e,a))));break;case 22:if(i=a.memoizedState!==null||_n,!i){t=t!==null&&t.memoizedState!==null||st,l=_n;var r=st;_n=i,(st=t)&&!r?Cn(e,a,(a.subtreeFlags&8772)!==0):Mn(e,a),_n=l,st=r}break;case 30:break;default:Mn(e,a)}}function ip(e){var t=e.alternate;t!==null&&(e.alternate=null,ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,_t=!1;function jn(e,t,a){for(a=a.child;a!==null;)lp(e,t,a),a=a.sibling}function lp(e,t,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(ki,a)}catch{}switch(a.tag){case 26:st||pn(a,t),jn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||pn(a,t);var i=Je,l=_t;na(a.type)&&(Je=a.stateNode,_t=!1),jn(e,t,a),vl(a.stateNode),Je=i,_t=l;break;case 5:st||pn(a,t);case 6:if(i=Je,l=_t,Je=null,jn(e,t,a),Je=i,_t=l,Je!==null)if(_t)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){Be(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){Be(a,t,r)}break;case 18:Je!==null&&(_t?(e=Je,Ip(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Si(e)):Ip(Je,a.stateNode));break;case 4:i=Je,l=_t,Je=a.stateNode.containerInfo,_t=!0,jn(e,t,a),Je=i,_t=l;break;case 0:case 11:case 14:case 15:Jn(2,a,t),st||Jn(4,a,t),jn(e,t,a);break;case 1:st||(pn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Pd(a,t,i)),jn(e,t,a);break;case 21:jn(e,t,a);break;case 22:st=(i=st)||a.memoizedState!==null,jn(e,t,a),st=i;break;default:jn(e,t,a)}}function rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Si(e)}catch(a){Be(t,t.return,a)}}}function op(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Si(e)}catch(a){Be(t,t.return,a)}}function jy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new np),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new np),t;default:throw Error(u(435,e.tag))}}function Tr(e,t){var a=jy(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=Ly.bind(null,e,i);i.then(l,l)}})}function jt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,s=t,h=s;e:for(;h!==null;){switch(h.tag){case 27:if(na(h.type)){Je=h.stateNode,_t=!1;break e}break;case 5:Je=h.stateNode,_t=!1;break e;case 3:case 4:Je=h.stateNode.containerInfo,_t=!0;break e}h=h.return}if(Je===null)throw Error(u(160));lp(r,s,l),Je=null,_t=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sp(t,e),t=t.sibling}var rn=null;function sp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Mt(e),i&4&&(Jn(3,e,e.return),sl(3,e),Jn(5,e,e.return));break;case 1:jt(t,e),Mt(e),i&512&&(st||a===null||pn(a,a.return)),i&64&&_n&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=rn;if(jt(t,e),Mt(e),i&512&&(st||a===null||pn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Hi]||r[bt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),$t(r,i,a),r[bt]=e,ht(r),i=r;break e;case"link":var s=sh("link","href",l).get(i+(a.href||""));if(s){for(var h=0;h<s.length;h++)if(r=s[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;case"meta":if(s=sh("meta","content",l).get(i+(a.content||""))){for(h=0;h<s.length;h++)if(r=s[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;default:throw Error(u(468,i))}r[bt]=e,ht(r),i=r}e.stateNode=i}else uh(l,e.type,e.stateNode);else e.stateNode=oh(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?uh(l,e.type,e.stateNode):oh(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Js(e,e.memoizedProps,a.memoizedProps)}break;case 27:jt(t,e),Mt(e),i&512&&(st||a===null||pn(a,a.return)),a!==null&&i&4&&Js(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jt(t,e),Mt(e),i&512&&(st||a===null||pn(a,a.return)),e.flags&32){l=e.stateNode;try{Ya(l,"")}catch(fe){Be(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Js(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Ps=!0);break;case 6:if(jt(t,e),Mt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){Be(e,e.return,fe)}}break;case 3:if(Gr=null,l=rn,rn=Br(t.containerInfo),jt(t,e),rn=l,Mt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(fe){Be(e,e.return,fe)}Ps&&(Ps=!1,up(e));break;case 4:i=rn,rn=Br(e.stateNode.containerInfo),jt(t,e),Mt(e),rn=i;break;case 12:jt(t,e),Mt(e);break;case 31:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tr(e,i)));break;case 13:jt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Er=zt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tr(e,i)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,N=_n,V=st;if(_n=N||l,st=V||x,jt(t,e),st=V,_n=N,Mt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||_n||st||Ea(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(r=x.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=x.stateNode;var F=x.memoizedProps.style,L=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(fe){Be(x,x.return,fe)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(fe){Be(x,x.return,fe)}}}else if(t.tag===18){if(a===null){x=t;try{var q=x.stateNode;l?Pp(q,!0):Pp(x.stateNode,!1)}catch(fe){Be(x,x.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Tr(e,a))));break;case 19:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tr(e,i)));break;case 30:break;case 21:break;default:jt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(ep(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,r=Ws(e);Or(e,r,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ya(s,""),a.flags&=-33);var h=Ws(e);Or(e,h,s);break;case 3:case 4:var x=a.stateNode.containerInfo,N=Ws(e);Is(e,N,x);break;default:throw Error(u(161))}}catch(V){Be(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function up(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;up(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ap(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Ea(t);break;case 1:pn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Pd(t,t.return,a),Ea(t);break;case 27:vl(t.stateNode);case 26:case 5:pn(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Cn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Cn(l,r,a),sl(4,r);break;case 1:if(Cn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){Be(i,i.return,N)}if(i=r,l=i.updateQueue,l!==null){var h=i.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Bf(x[l],h)}catch(N){Be(i,i.return,N)}}a&&s&64&&Id(r),ul(r,r.return);break;case 27:tp(r);case 26:case 5:Cn(l,r,a),a&&i===null&&s&4&&Fd(r),ul(r,r.return);break;case 12:Cn(l,r,a);break;case 31:Cn(l,r,a),a&&s&4&&rp(l,r);break;case 13:Cn(l,r,a),a&&s&4&&op(l,r);break;case 22:r.memoizedState===null&&Cn(l,r,a),ul(r,r.return);break;case 30:break;default:Cn(l,r,a)}t=t.sibling}}function Fs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ji(a))}function eu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function on(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cp(e,t,a,i),t=t.sibling}function cp(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,a,i),l&2048&&sl(9,t);break;case 1:on(e,t,a,i);break;case 3:on(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){on(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,h=r.onPostCommit;typeof h=="function"&&h(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Be(t,t.return,x)}}else on(e,t,a,i);break;case 31:on(e,t,a,i);break;case 13:on(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?on(e,t,a,i):cl(e,t):r._visibility&2?on(e,t,a,i):(r._visibility|=2,ui(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Fs(s,t);break;case 24:on(e,t,a,i),l&2048&&eu(t.alternate,t);break;default:on(e,t,a,i)}}function ui(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,h=a,x=i,N=s.flags;switch(s.tag){case 0:case 11:case 15:ui(r,s,h,x,l),sl(8,s);break;case 23:break;case 22:var V=s.stateNode;s.memoizedState!==null?V._visibility&2?ui(r,s,h,x,l):cl(r,s):(V._visibility|=2,ui(r,s,h,x,l)),l&&N&2048&&Fs(s.alternate,s);break;case 24:ui(r,s,h,x,l),l&&N&2048&&eu(s.alternate,s);break;default:ui(r,s,h,x,l)}t=t.sibling}}function cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:cl(a,i),l&2048&&Fs(i.alternate,i);break;case 24:cl(a,i),l&2048&&eu(i.alternate,i);break;default:cl(a,i)}t=t.sibling}}var fl=8192;function ci(e,t,a){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)fp(e,t,a),e=e.sibling}function fp(e,t,a){switch(e.tag){case 26:ci(e,t,a),e.flags&fl&&e.memoizedState!==null&&m0(a,rn,e.memoizedState,e.memoizedProps);break;case 5:ci(e,t,a);break;case 3:case 4:var i=rn;rn=Br(e.stateNode.containerInfo),ci(e,t,a),rn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fl,fl=16777216,ci(e,t,a),fl=i):ci(e,t,a));break;default:ci(e,t,a)}}function dp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];gt=i,hp(i,e)}dp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pp(e),e=e.sibling}function pp(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ar(e)):dl(e);break;default:dl(e)}}function Ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];gt=i,hp(i,e)}dp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),Ar(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ar(t));break;default:Ar(t)}e=e.sibling}}function hp(e,t){for(;gt!==null;){var a=gt;switch(a.tag){case 0:case 11:case 15:Jn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,gt=i;else e:for(a=e;gt!==null;){i=gt;var l=i.sibling,r=i.return;if(ip(i),i===a){gt=null;break e}if(l!==null){l.return=r,gt=l;break e}gt=r}}}var My={getCacheForType:function(e){var t=xt(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xt(lt).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ve=null,je=null,Ce=0,Le=0,Bt=null,Wn=!1,fi=!1,tu=!1,kn=0,tt=0,In=0,_a=0,nu=0,qt=0,di=0,pl=null,Ct=null,au=!1,Er=0,gp=0,_r=1/0,jr=null,Pn=null,ft=0,Fn=null,pi=null,Dn=0,iu=0,lu=null,mp=null,hl=0,ru=null;function Gt(){return(Ne&2)!==0&&Ce!==0?Ce&-Ce:E.T!==null?du():Mc()}function yp(){if(qt===0)if((Ce&536870912)===0||De){var e=Ul;Ul<<=1,(Ul&3932160)===0&&(Ul=262144),qt=e}else qt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),qt}function kt(e,t,a){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(hi(e,0),ea(e,Ce,qt,!1)),Ri(e,a),((Ne&2)===0||e!==Ve)&&(e===Ve&&((Ne&2)===0&&(_a|=a),tt===4&&ea(e,Ce,qt,!1)),hn(e))}function vp(e,t,a){if((Ne&6)!==0)throw Error(u(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Di(e,t),l=i?Ry(e,t):su(e,t,!0),r=i;do{if(l===0){fi&&!i&&ea(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ky(a)){l=su(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var h=e;l=pl;var x=h.current.memoizedState.isDehydrated;if(x&&(hi(h,s).flags|=256),s=su(h,s,!1),s!==2){if(tu&&!x){h.errorRecoveryDisabledLanes|=r,_a|=r,l=4;break e}r=Ct,Ct=l,r!==null&&(Ct===null?Ct=r:Ct.push.apply(Ct,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){hi(e,0),ea(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,qt,!Wn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Er+300-zt(),10<l)){if(ea(i,t,qt,!Wn),Bl(i,0,!0)!==0)break e;Dn=t,i.timeoutHandle=Jp(bp.bind(null,i,a,Ct,jr,au,t,qt,_a,di,Wn,r,"Throttled",-0,0),l);break e}bp(i,a,Ct,jr,au,t,qt,_a,di,Wn,r,null,-0,0)}}break}while(!0);hn(e)}function bp(e,t,a,i,l,r,s,h,x,N,V,F,L,q){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},fp(t,r,F);var fe=(r&62914560)===r?Er-zt():(r&4194048)===r?gp-zt():0;if(fe=y0(F,fe),fe!==null){Dn=r,e.cancelPendingCommit=fe(Ap.bind(null,e,t,r,a,i,l,s,h,x,V,F,null,L,q)),ea(e,r,s,!N);return}}Ap(e,t,r,a,i,l,s,h,x)}function ky(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Ht(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,a,i){t&=~nu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Rt(l),s=1<<r;i[r]=-1,l&=~s}a!==0&&Ec(e,a,t)}function Mr(){return(Ne&6)===0?(gl(0),!1):!0}function ou(){if(je!==null){if(Le===0)var e=je.return;else e=je,$n=Sa=null,$s(e),ii=null,Ii=0,e=je;for(;e!==null;)Wd(e.alternate,e),e=e.return;je=null}}function hi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Fy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Dn=0,ou(),Ve=e,je=a=xn(e.current,null),Ce=t,Le=0,Bt=null,Wn=!1,fi=Di(e,t),tu=!1,di=qt=nu=_a=In=tt=0,Ct=pl=null,au=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Rt(i),r=1<<l;t|=e[l],i&=~r}return kn=t,Pl(),a}function Sp(e,t){$e=null,E.H=ll,t===ai||t===rr?(t=Hf(),Le=3):t===fs?(t=Hf(),Le=4):Le=t===Ls?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,je===null&&(tt=1,Sr(e,Zt(t,e.current)))}function xp(){var e=Ut.current;return e===null?!0:(Ce&4194048)===Ce?It===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===It:!1}function wp(){var e=E.H;return E.H=ll,e===null?ll:e}function $p(){var e=E.A;return E.A=My,e}function Cr(){tt=4,Wn||(Ce&4194048)!==Ce&&Ut.current!==null||(fi=!0),(In&134217727)===0&&(_a&134217727)===0||Ve===null||ea(Ve,Ce,qt,!1)}function su(e,t,a){var i=Ne;Ne|=2;var l=wp(),r=$p();(Ve!==e||Ce!==t)&&(jr=null,hi(e,t)),t=!1;var s=tt;e:do try{if(Le!==0&&je!==null){var h=je,x=Bt;switch(Le){case 8:ou(),s=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var N=Le;if(Le=0,Bt=null,gi(e,h,x,N),a&&fi){s=0;break e}break;default:N=Le,Le=0,Bt=null,gi(e,h,x,N)}}Dy(),s=tt;break}catch(V){Sp(e,V)}while(!0);return t&&e.shellSuspendCounter++,$n=Sa=null,Ne=i,E.H=l,E.A=r,je===null&&(Ve=null,Ce=0,Pl()),s}function Dy(){for(;je!==null;)zp(je)}function Ry(e,t){var a=Ne;Ne|=2;var i=wp(),l=$p();Ve!==e||Ce!==t?(jr=null,_r=zt()+500,hi(e,t)):fi=Di(e,t);e:do try{if(Le!==0&&je!==null){t=je;var r=Bt;t:switch(Le){case 1:Le=0,Bt=null,gi(e,t,r,1);break;case 2:case 9:if(Df(r)){Le=0,Bt=null,Op(t);break}t=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),hn(e)},r.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Df(r)?(Le=0,Bt=null,Op(t)):(Le=0,Bt=null,gi(e,t,r,7));break;case 5:var s=null;switch(je.tag){case 26:s=je.memoizedState;case 5:case 27:var h=je;if(s?ch(s):h.stateNode.complete){Le=0,Bt=null;var x=h.sibling;if(x!==null)je=x;else{var N=h.return;N!==null?(je=N,kr(N)):je=null}break t}}Le=0,Bt=null,gi(e,t,r,5);break;case 6:Le=0,Bt=null,gi(e,t,r,6);break;case 8:ou(),tt=6;break e;default:throw Error(u(462))}}Hy();break}catch(V){Sp(e,V)}while(!0);return $n=Sa=null,E.H=i,E.A=l,Ne=a,je!==null?0:(Ve=null,Ce=0,Pl(),tt)}function Hy(){for(;je!==null&&!yn();)zp(je)}function zp(e){var t=Kd(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?kr(e):je=t}function Op(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gd(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Gd(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:$s(t);default:Wd(a,t),t=je=$f(t,kn),t=Kd(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?kr(e):je=t}function gi(e,t,a,i){$n=Sa=null,$s(t),ii=null,Ii=0;var l=t.return;try{if(zy(e,l,t,a,Ce)){tt=1,Sr(e,Zt(a,e.current)),je=null;return}}catch(r){if(l!==null)throw je=l,r;tt=1,Sr(e,Zt(a,e.current)),je=null;return}t.flags&32768?(De||i===1?e=!0:fi||(Ce&536870912)!==0?e=!1:(Wn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Tp(t,e)):kr(t)}function kr(e){var t=e;do{if((t.flags&32768)!==0){Tp(t,Wn);return}e=t.return;var a=Ay(t.alternate,t,kn);if(a!==null){je=a;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);tt===0&&(tt=5)}function Tp(e,t){do{var a=Ey(e.alternate,e);if(a!==null){a.flags&=32767,je=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=a}while(e!==null);tt=6,je=null}function Ap(e,t,a,i,l,r,s,h,x){e.cancelPendingCommit=null;do Dr();while(ft!==0);if((Ne&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Wo,gm(e,a,r,s,h,x),e===Ve&&(je=Ve=null,Ce=0),pi=t,Fn=e,Dn=a,iu=r,lu=l,mp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,By(cn,function(){return Cp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,l=c.p,c.p=2,s=Ne,Ne|=4;try{_y(e,t,a)}finally{Ne=s,c.p=l,E.T=i}}ft=1,Ep(),_p(),jp()}}function Ep(){if(ft===1){ft=0;var e=Fn,t=pi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var i=c.p;c.p=2;var l=Ne;Ne|=4;try{sp(t,e);var r=Su,s=hf(e.containerInfo),h=r.focusedElem,x=r.selectionRange;if(s!==h&&h&&h.ownerDocument&&pf(h.ownerDocument.documentElement,h)){if(x!==null&&Vo(h)){var N=x.start,V=x.end;if(V===void 0&&(V=N),"selectionStart"in h)h.selectionStart=N,h.selectionEnd=Math.min(V,h.value.length);else{var F=h.ownerDocument||document,L=F&&F.defaultView||window;if(L.getSelection){var q=L.getSelection(),fe=h.textContent.length,ye=Math.min(x.start,fe),Xe=x.end===void 0?ye:Math.min(x.end,fe);!q.extend&&ye>Xe&&(s=Xe,Xe=ye,ye=s);var M=df(h,ye),A=df(h,Xe);if(M&&A&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==A.node||q.focusOffset!==A.offset)){var H=F.createRange();H.setStart(M.node,M.offset),q.removeAllRanges(),ye>Xe?(q.addRange(H),q.extend(A.node,A.offset)):(H.setEnd(A.node,A.offset),q.addRange(H))}}}}for(F=[],q=h;q=q.parentNode;)q.nodeType===1&&F.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var I=F[h];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Qr=!!bu,Su=bu=null}finally{Ne=l,c.p=i,E.T=a}}e.current=t,ft=2}}function _p(){if(ft===2){ft=0;var e=Fn,t=pi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var i=c.p;c.p=2;var l=Ne;Ne|=4;try{ap(e,t.alternate,t)}finally{Ne=l,c.p=i,E.T=a}}ft=3}}function jp(){if(ft===4||ft===3){ft=0,Ha();var e=Fn,t=pi,a=Dn,i=mp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,pi=Fn=null,Mp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pn=null),To(a),t=t.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=E.T,l=c.p,c.p=2,E.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var h=i[s];r(h.value,{componentStack:h.stack})}}finally{E.T=t,c.p=l}}(Dn&3)!==0&&Dr(),hn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ru?hl++:(hl=0,ru=e):hl=0,gl(0)}}function Mp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Dr(){return Ep(),_p(),jp(),Cp()}function Cp(){if(ft!==5)return!1;var e=Fn,t=iu;iu=0;var a=To(Dn),i=E.T,l=c.p;try{c.p=32>a?32:a,E.T=null,a=lu,lu=null;var r=Fn,s=Dn;if(ft=0,pi=Fn=null,Dn=0,(Ne&6)!==0)throw Error(u(331));var h=Ne;if(Ne|=4,pp(r.current),cp(r,r.current,s,a),Ne=h,gl(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(ki,r)}catch{}return!0}finally{c.p=l,E.T=i,Mp(e,t)}}function kp(e,t,a){t=Zt(a,t),t=Us(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(Ri(e,2),hn(e))}function Be(e,t,a){if(e.tag===3)kp(e,e,a);else for(;t!==null;){if(t.tag===3){kp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){e=Zt(a,e),a=Dd(2),i=Qn(t,a,2),i!==null&&(Rd(a,i,t,e),Ri(i,2),hn(i));break}}t=t.return}}function uu(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Cy;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(tu=!0,l.add(a),e=Ny.bind(null,e,t,a),t.then(e,e))}function Ny(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Ce&a)===a&&(tt===4||tt===3&&(Ce&62914560)===Ce&&300>zt()-Er?(Ne&2)===0&&hi(e,0):nu|=a,di===Ce&&(di=0)),hn(e)}function Dp(e,t){t===0&&(t=Ac()),e=ya(e,t),e!==null&&(Ri(e,t),hn(e))}function Uy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Dp(e,a)}function Ly(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),Dp(e,a)}function By(e,t){return nt(e,t)}var Rr=null,mi=null,cu=!1,Hr=!1,fu=!1,ta=0;function hn(e){e!==mi&&e.next===null&&(mi===null?Rr=mi=e:mi=mi.next=e),Hr=!0,cu||(cu=!0,Gy())}function gl(e,t){if(!fu&&Hr){fu=!0;do for(var a=!1,i=Rr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var s=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-Rt(42|e)+1)-1,r&=l&~(s&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Up(i,r))}else r=Ce,r=Bl(i,i===Ve?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Di(i,r)||(a=!0,Up(i,r));i=i.next}while(a);fu=!1}}function qy(){Rp()}function Rp(){Hr=cu=!1;var e=0;ta!==0&&Py()&&(e=ta);for(var t=zt(),a=null,i=Rr;i!==null;){var l=i.next,r=Hp(i,t);r===0?(i.next=null,a===null?Rr=l:a.next=l,l===null&&(mi=a)):(a=i,(e!==0||(r&3)!==0)&&(Hr=!0)),i=l}ft!==0&&ft!==5||gl(e),ta!==0&&(ta=0)}function Hp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rt(r),h=1<<s,x=l[s];x===-1?((h&a)===0||(h&i)!==0)&&(l[s]=hm(h,t)):x<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ve,a=Ce,a=Bl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Di(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&vt(i),To(a)){case 2:case 8:a=an;break;case 32:a=cn;break;case 268435456:a=Tc;break;default:a=cn}return i=Np.bind(null,e),a=nt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&vt(i),e.callbackPriority=2,e.callbackNode=null,2}function Np(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dr()&&e.callbackNode!==a)return null;var i=Ce;return i=Bl(e,e===Ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(vp(e,i,t),Hp(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Np.bind(null,e):null)}function Up(e,t){if(Dr())return null;vp(e,t,!0)}function Gy(){e0(function(){(Ne&6)!==0?nt(Hl,qy):Rp()})}function du(){if(ta===0){var e=ti;e===0&&(e=Nl,Nl<<=1,(Nl&261888)===0&&(Nl=256)),ta=e}return ta}function Lp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xl(""+e)}function Bp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Yy(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Lp((l[At]||null).action),s=i.submitter;s&&(t=(t=s[At]||null)?Lp(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var h=new Kl("action","action",null,i,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var x=s?Bp(l,s):new FormData(l);Cs(a,{pending:!0,data:x,method:l.method,action:r},null,x)}}else typeof r=="function"&&(h.preventDefault(),x=s?Bp(l,s):new FormData(l),Cs(a,{pending:!0,data:x,method:l.method,action:r},r,x))},currentTarget:l}]})}}for(var pu=0;pu<Jo.length;pu++){var hu=Jo[pu],Xy=hu.toLowerCase(),Vy=hu[0].toUpperCase()+hu.slice(1);ln(Xy,"on"+Vy)}ln(yf,"onAnimationEnd"),ln(vf,"onAnimationIteration"),ln(bf,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(oy,"onTransitionRun"),ln(sy,"onTransitionStart"),ln(uy,"onTransitionCancel"),ln(Sf,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function qp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var h=i[s],x=h.instance,N=h.currentTarget;if(h=h.listener,x!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(V){Il(V)}l.currentTarget=null,r=x}else for(s=0;s<i.length;s++){if(h=i[s],x=h.instance,N=h.currentTarget,h=h.listener,x!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(V){Il(V)}l.currentTarget=null,r=x}}}}function Me(e,t){var a=t[Ao];a===void 0&&(a=t[Ao]=new Set);var i=e+"__bubble";a.has(i)||(Gp(t,e,2,!1),a.add(i))}function gu(e,t,a){var i=0;t&&(i|=4),Gp(a,e,i,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function mu(e){if(!e[Nr]){e[Nr]=!0,Dc.forEach(function(a){a!=="selectionchange"&&(Qy.has(a)||gu(a,!1,e),gu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,gu("selectionchange",!1,t))}}function Gp(e,t,a,i){switch(yh(t)){case 2:var l=S0;break;case 8:l=x0;break;default:l=Mu}a=l.bind(null,t,a,e),l=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function yu(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var h=i.stateNode.containerInfo;if(h===l)break;if(s===4)for(s=i.return;s!==null;){var x=s.tag;if((x===3||x===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;h!==null;){if(s=Ua(h),s===null)return;if(x=s.tag,x===5||x===6||x===26||x===27){i=r=s;continue e}h=h.parentNode}}i=i.return}Qc(function(){var N=r,V=Do(a),F=[];e:{var L=xf.get(e);if(L!==void 0){var q=Kl,fe=e;switch(e){case"keypress":if(Ql(a)===0)break e;case"keydown":case"keyup":q=Lm;break;case"focusin":fe="focus",q=Bo;break;case"focusout":fe="blur",q=Bo;break;case"beforeblur":case"afterblur":q=Bo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Gm;break;case yf:case vf:case bf:q=jm;break;case Sf:q=Xm;break;case"scroll":case"scrollend":q=Om;break;case"wheel":q=Qm;break;case"copy":case"cut":case"paste":q=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ic;break;case"toggle":case"beforetoggle":q=Km}var ye=(t&4)!==0,Xe=!ye&&(e==="scroll"||e==="scrollend"),M=ye?L!==null?L+"Capture":null:L;ye=[];for(var A=N,H;A!==null;){var I=A;if(H=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||H===null||M===null||(I=Ui(A,M),I!=null&&ye.push(yl(A,I,H))),Xe)break;A=A.return}0<ye.length&&(L=new q(L,fe,null,a,V),F.push({event:L,listeners:ye}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",L&&a!==ko&&(fe=a.relatedTarget||a.fromElement)&&(Ua(fe)||fe[Na]))break e;if((q||L)&&(L=V.window===V?V:(L=V.ownerDocument)?L.defaultView||L.parentWindow:window,q?(fe=a.relatedTarget||a.toElement,q=N,fe=fe?Ua(fe):null,fe!==null&&(Xe=y(fe),ye=fe.tag,fe!==Xe||ye!==5&&ye!==27&&ye!==6)&&(fe=null)):(q=null,fe=N),q!==fe)){if(ye=Jc,I="onMouseLeave",M="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Ic,I="onPointerLeave",M="onPointerEnter",A="pointer"),Xe=q==null?L:Ni(q),H=fe==null?L:Ni(fe),L=new ye(I,A+"leave",q,a,V),L.target=Xe,L.relatedTarget=H,I=null,Ua(V)===N&&(ye=new ye(M,A+"enter",fe,a,V),ye.target=H,ye.relatedTarget=Xe,I=ye),Xe=I,q&&fe)t:{for(ye=Zy,M=q,A=fe,H=0,I=M;I;I=ye(I))H++;I=0;for(var me=A;me;me=ye(me))I++;for(;0<H-I;)M=ye(M),H--;for(;0<I-H;)A=ye(A),I--;for(;H--;){if(M===A||A!==null&&M===A.alternate){ye=M;break t}M=ye(M),A=ye(A)}ye=null}else ye=null;q!==null&&Yp(F,L,q,ye,!1),fe!==null&&Xe!==null&&Yp(F,Xe,fe,ye,!0)}}e:{if(L=N?Ni(N):window,q=L.nodeName&&L.nodeName.toLowerCase(),q==="select"||q==="input"&&L.type==="file")var Re=rf;else if(af(L))if(of)Re=iy;else{Re=ny;var pe=ty}else q=L.nodeName,!q||q.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?N&&Co(N.elementType)&&(Re=rf):Re=ay;if(Re&&(Re=Re(e,N))){lf(F,Re,a,V);break e}pe&&pe(e,L,N),e==="focusout"&&N&&L.type==="number"&&N.memoizedProps.value!=null&&Mo(L,"number",L.value)}switch(pe=N?Ni(N):window,e){case"focusin":(af(pe)||pe.contentEditable==="true")&&(Za=pe,Qo=N,Qi=null);break;case"focusout":Qi=Qo=Za=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,gf(F,a,V);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":gf(F,a,V)}var Oe;if(Go)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Qa?tf(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(Pc&&a.locale!=="ko"&&(Qa||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Qa&&(Oe=Zc()):(Ln=V,No="value"in Ln?Ln.value:Ln.textContent,Qa=!0)),pe=Ur(N,ke),0<pe.length&&(ke=new Wc(ke,e,null,a,V),F.push({event:ke,listeners:pe}),Oe?ke.data=Oe:(Oe=nf(a),Oe!==null&&(ke.data=Oe)))),(Oe=Wm?Im(e,a):Pm(e,a))&&(ke=Ur(N,"onBeforeInput"),0<ke.length&&(pe=new Wc("onBeforeInput","beforeinput",null,a,V),F.push({event:pe,listeners:ke}),pe.data=Oe)),Yy(F,e,N,a,V)}qp(F,t)})}function yl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ur(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ui(e,a),l!=null&&i.unshift(yl(e,l,r)),l=Ui(e,t),l!=null&&i.push(yl(e,l,r))),e.tag===3)return i;e=e.return}return[]}function Zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yp(e,t,a,i,l){for(var r=t._reactName,s=[];a!==null&&a!==i;){var h=a,x=h.alternate,N=h.stateNode;if(h=h.tag,x!==null&&x===i)break;h!==5&&h!==26&&h!==27||N===null||(x=N,l?(N=Ui(a,r),N!=null&&s.unshift(yl(a,N,x))):l||(N=Ui(a,r),N!=null&&s.push(yl(a,N,x)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Ky=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Jy,"")}function Vp(e,t){return t=Xp(t),Xp(e)===t}function Ye(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ya(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ya(e,""+i);break;case"className":Gl(e,"class",i);break;case"tabIndex":Gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,i);break;case"style":Xc(e,i,r);break;case"data":if(t!=="object"){Gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Xl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ye(e,t,"name",l.name,l,null),Ye(e,t,"formEncType",l.formEncType,l,null),Ye(e,t,"formMethod",l.formMethod,l,null),Ye(e,t,"formTarget",l.formTarget,l,null)):(Ye(e,t,"encType",l.encType,l,null),Ye(e,t,"method",l.method,l,null),Ye(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Xl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Xl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ql(e,"popover",i);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$m.get(a)||a,ql(e,a,i))}}function vu(e,t,a,i,l,r){switch(a){case"style":Xc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ya(e,i):(typeof i=="number"||typeof i=="bigint")&&Ya(e,""+i);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[At]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ql(e,a,i)}}}function $t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ye(e,t,r,s,a,null)}}l&&Ye(e,t,"srcSet",a.srcSet,a,null),i&&Ye(e,t,"src",a.src,a,null);return;case"input":Me("invalid",e);var h=r=s=l=null,x=null,N=null;for(i in a)if(a.hasOwnProperty(i)){var V=a[i];if(V!=null)switch(i){case"name":l=V;break;case"type":s=V;break;case"checked":x=V;break;case"defaultChecked":N=V;break;case"value":r=V;break;case"defaultValue":h=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,t));break;default:Ye(e,t,i,V,a,null)}}Bc(e,r,h,x,N,s,l,!1);return;case"select":Me("invalid",e),i=s=r=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":s=h;break;case"multiple":i=h;default:Ye(e,t,l,h,a,null)}t=r,a=s,e.multiple=!!i,t!=null?Ga(e,!!i,t,!1):a!=null&&Ga(e,!!i,a,!0);return;case"textarea":Me("invalid",e),r=l=i=null;for(s in a)if(a.hasOwnProperty(s)&&(h=a[s],h!=null))switch(s){case"value":i=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Ye(e,t,s,h,a,null)}Gc(e,i,l,r);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(i=a[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ye(e,t,x,i,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(i=0;i<ml.length;i++)Me(ml[i],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ye(e,t,N,i,a,null)}return;default:if(Co(t)){for(V in a)a.hasOwnProperty(V)&&(i=a[V],i!==void 0&&vu(e,t,V,i,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(i=a[h],i!=null&&Ye(e,t,h,i,a,null))}function Wy(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,h=null,x=null,N=null,V=null;for(q in a){var F=a[q];if(a.hasOwnProperty(q)&&F!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":x=F;default:i.hasOwnProperty(q)||Ye(e,t,q,null,i,F)}}for(var L in i){var q=i[L];if(F=a[L],i.hasOwnProperty(L)&&(q!=null||F!=null))switch(L){case"type":r=q;break;case"name":l=q;break;case"checked":N=q;break;case"defaultChecked":V=q;break;case"value":s=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:q!==F&&Ye(e,t,L,q,i,F)}}jo(e,s,h,x,N,V,r,l);return;case"select":q=s=h=L=null;for(r in a)if(x=a[r],a.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":q=x;default:i.hasOwnProperty(r)||Ye(e,t,r,null,i,x)}for(l in i)if(r=i[l],x=a[l],i.hasOwnProperty(l)&&(r!=null||x!=null))switch(l){case"value":L=r;break;case"defaultValue":h=r;break;case"multiple":s=r;default:r!==x&&Ye(e,t,l,r,i,x)}t=h,a=s,i=q,L!=null?Ga(e,!!a,L,!1):!!i!=!!a&&(t!=null?Ga(e,!!a,t,!0):Ga(e,!!a,a?[]:"",!1));return;case"textarea":q=L=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ye(e,t,h,null,i,l)}for(s in i)if(l=i[s],r=a[s],i.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":L=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&Ye(e,t,s,l,i,r)}qc(e,L,q);return;case"option":for(var fe in a)if(L=a[fe],a.hasOwnProperty(fe)&&L!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ye(e,t,fe,null,i,L)}for(x in i)if(L=i[x],q=a[x],i.hasOwnProperty(x)&&L!==q&&(L!=null||q!=null))switch(x){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ye(e,t,x,L,i,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)L=a[ye],a.hasOwnProperty(ye)&&L!=null&&!i.hasOwnProperty(ye)&&Ye(e,t,ye,null,i,L);for(N in i)if(L=i[N],q=a[N],i.hasOwnProperty(N)&&L!==q&&(L!=null||q!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ye(e,t,N,L,i,q)}return;default:if(Co(t)){for(var Xe in a)L=a[Xe],a.hasOwnProperty(Xe)&&L!==void 0&&!i.hasOwnProperty(Xe)&&vu(e,t,Xe,void 0,i,L);for(V in i)L=i[V],q=a[V],!i.hasOwnProperty(V)||L===q||L===void 0&&q===void 0||vu(e,t,V,L,i,q);return}}for(var M in a)L=a[M],a.hasOwnProperty(M)&&L!=null&&!i.hasOwnProperty(M)&&Ye(e,t,M,null,i,L);for(F in i)L=i[F],q=a[F],!i.hasOwnProperty(F)||L===q||L==null&&q==null||Ye(e,t,F,L,i,q)}function Qp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,s=l.initiatorType,h=l.duration;if(r&&h&&Qp(s)){for(s=0,h=l.responseEnd,i+=1;i<a.length;i++){var x=a[i],N=x.startTime;if(N>h)break;var V=x.transferSize,F=x.initiatorType;V&&Qp(F)&&(x=x.responseEnd,s+=V*(x<h?1:(h-N)/(x-N)))}if(--i,t+=8*(r+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bu=null,Su=null;function Lr(e){return e.nodeType===9?e:e.ownerDocument}function Zp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function Py(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var Jp=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(e){return Wp.resolve(null).then(e).catch(t0)}:Jp;function t0(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function Ip(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Si(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")vl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vl(a);for(var r=a.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[Hi]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&vl(e.ownerDocument.body);a=l}while(a);Si(t)}function Pp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function $u(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$u(a),Eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function n0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Hi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function a0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function Fp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function zu(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function i0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Tu=null;function eh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nh(e,t,a){switch(t=Lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eo(e)}var Ft=new Map,ah=new Set;function Br(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=c.d;c.d={f:l0,r:r0,D:o0,C:s0,L:u0,m:c0,X:d0,S:f0,M:p0};function l0(){var e=Rn.f(),t=Mr();return e||t}function r0(e){var t=La(e);t!==null&&t.tag===5&&t.type==="form"?Sd(t):Rn.r(e)}var yi=typeof document>"u"?null:document;function ih(e,t,a){var i=yi;if(i&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),ah.has(l)||(ah.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),$t(t,"link",e),ht(t),i.head.appendChild(t)))}}function o0(e){Rn.D(e),ih("dns-prefetch",e,null)}function s0(e,t){Rn.C(e,t),ih("preconnect",e,t)}function u0(e,t,a){Rn.L(e,t,a);var i=yi;if(i&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var r=l;switch(t){case"style":r=vi(e);break;case"script":r=bi(e)}Ft.has(r)||(e=Y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ft.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(bl(r))||t==="script"&&i.querySelector(Sl(r))||(t=i.createElement("link"),$t(t,"link",e),ht(t),i.head.appendChild(t)))}}function c0(e,t){Rn.m(e,t);var a=yi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(i)+'"][href="'+Vt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=bi(e)}if(!Ft.has(r)&&(e=Y({rel:"modulepreload",href:e},t),Ft.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(r)))return}i=a.createElement("link"),$t(i,"link",e),ht(i),a.head.appendChild(i)}}}function f0(e,t,a){Rn.S(e,t,a);var i=yi;if(i&&e){var l=Ba(i).hoistableStyles,r=vi(e);t=t||"default";var s=l.get(r);if(!s){var h={loading:0,preload:null};if(s=i.querySelector(bl(r)))h.loading=5;else{e=Y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ft.get(r))&&Au(e,a);var x=s=i.createElement("link");ht(x),$t(x,"link",e),x._p=new Promise(function(N,V){x.onload=N,x.onerror=V}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,qr(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:h},l.set(r,s)}}}function d0(e,t){Rn.X(e,t);var a=yi;if(a&&e){var i=Ba(a).hoistableScripts,l=bi(e),r=i.get(l);r||(r=a.querySelector(Sl(l)),r||(e=Y({src:e,async:!0},t),(t=Ft.get(l))&&Eu(e,t),r=a.createElement("script"),ht(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function p0(e,t){Rn.M(e,t);var a=yi;if(a&&e){var i=Ba(a).hoistableScripts,l=bi(e),r=i.get(l);r||(r=a.querySelector(Sl(l)),r||(e=Y({src:e,async:!0,type:"module"},t),(t=Ft.get(l))&&Eu(e,t),r=a.createElement("script"),ht(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function lh(e,t,a,i){var l=(l=K.current)?Br(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vi(a.href),a=Ba(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vi(a.href);var r=Ba(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(bl(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ft.set(e,a),r||h0(l,e,a,s.state))),t&&i===null)throw Error(u(528,""));return s}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bi(a),a=Ba(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function vi(e){return'href="'+Vt(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function rh(e){return Y({},e,{"data-precedence":e.precedence,precedence:null})}function h0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$t(t,"link",a),ht(t),e.head.appendChild(t))}function bi(e){return'[src="'+Vt(e)+'"]'}function Sl(e){return"script[async]"+e}function oh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(i)return t.instance=i,ht(i),i;var l=Y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ht(i),$t(i,"style",l),qr(i,a.precedence,e),t.instance=i;case"stylesheet":l=vi(a.href);var r=e.querySelector(bl(l));if(r)return t.state.loading|=4,t.instance=r,ht(r),r;i=rh(a),(l=Ft.get(l))&&Au(i,l),r=(e.ownerDocument||e).createElement("link"),ht(r);var s=r;return s._p=new Promise(function(h,x){s.onload=h,s.onerror=x}),$t(r,"link",i),t.state.loading|=4,qr(r,a.precedence,e),t.instance=r;case"script":return r=bi(a.src),(l=e.querySelector(Sl(r)))?(t.instance=l,ht(l),l):(i=a,(l=Ft.get(r))&&(i=Y({},a),Eu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),ht(l),$t(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qr(i,a.precedence,e));return t.instance}function qr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,s=0;s<i.length;s++){var h=i[s];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gr=null;function sh(e,t,a){if(Gr===null){var i=new Map,l=Gr=new Map;l.set(a,i)}else l=Gr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Hi]||r[bt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var h=i.get(s);h?h.push(r):i.set(s,[r])}}return i}function uh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function g0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ch(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function m0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vi(i.href),r=t.querySelector(bl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ht(r);return}r=t.ownerDocument||t,i=rh(i),(l=Ft.get(l))&&Au(i,l),r=r.createElement("link"),ht(r);var s=r;s._p=new Promise(function(h,x){s.onload=h,s.onerror=x}),$t(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var _u=0;function y0(e,t){return e.stylesheets&&e.count===0&&Vr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Vr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&_u===0&&(_u=62500*Iy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>_u?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Yr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Vr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(v0,e),Xr=null,Yr.call(e))}function v0(e,t){if(!(t.state.loading&4)){var a=Xr.get(e);if(a)var i=a.get(null);else{a=new Map,Xr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),i=s)}i&&a.set(null,i)}l=t.instance,s=l.getAttribute("data-precedence"),r=a.get(s)||i,r===i&&a.set(null,l),a.set(s,l),this.count++,i=Yr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var xl={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function b0(e,t,a,i,l,r,s,h,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function fh(e,t,a,i,l,r,s,h,x,N,V,F){return e=new b0(e,t,a,s,x,N,V,F,h),t=1,r===!0&&(t|=24),r=Nt(3,null,null,t),e.current=r,r.stateNode=e,t=ss(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},ds(r),e}function dh(e){return e?(e=Wa,e):Wa}function ph(e,t,a,i,l,r){l=dh(l),i.context===null?i.context=l:i.pendingContext=l,i=Vn(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Qn(e,i,t),a!==null&&(kt(a,e,t),Fi(a,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ju(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&kt(t,e,67108864),ju(e,67108864)}}function mh(e){if(e.tag===13||e.tag===31){var t=Gt();t=Oo(t);var a=ya(e,t);a!==null&&kt(a,e,t),ju(e,t)}}var Qr=!0;function S0(e,t,a,i){var l=E.T;E.T=null;var r=c.p;try{c.p=2,Mu(e,t,a,i)}finally{c.p=r,E.T=l}}function x0(e,t,a,i){var l=E.T;E.T=null;var r=c.p;try{c.p=8,Mu(e,t,a,i)}finally{c.p=r,E.T=l}}function Mu(e,t,a,i){if(Qr){var l=Cu(i);if(l===null)yu(e,t,i,Zr,a),vh(e,i);else if($0(l,e,t,a,i))i.stopPropagation();else if(vh(e,i),t&4&&-1<w0.indexOf(e)){for(;l!==null;){var r=La(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=da(r.pendingLanes);if(s!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var x=1<<31-Rt(s);h.entanglements[1]|=x,s&=~x}hn(r),(Ne&6)===0&&(_r=zt()+500,gl(0))}}break;case 31:case 13:h=ya(r,2),h!==null&&kt(h,r,2),Mr(),ju(r,2)}if(r=Cu(i),r===null&&yu(e,t,i,Zr,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else yu(e,t,i,null,a)}}function Cu(e){return e=Do(e),ku(e)}var Zr=null;function ku(e){if(Zr=null,e=Ua(e),e!==null){var t=y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=C(t),e!==null)return e;e=null}else if(a===31){if(e=Q(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function yh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fa()){case Hl:return 2;case an:return 8;case cn:case sm:return 32;case Tc:return 268435456;default:return 32}default:return 32}}var Du=!1,aa=null,ia=null,la=null,wl=new Map,$l=new Map,ra=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vh(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(t.pointerId)}}function zl(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=La(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function $0(e,t,a,i,l){switch(t){case"focusin":return aa=zl(aa,e,t,a,i,l),!0;case"dragenter":return ia=zl(ia,e,t,a,i,l),!0;case"mouseover":return la=zl(la,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return wl.set(r,zl(wl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,$l.set(r,zl($l.get(r)||null,e,t,a,i,l)),!0}return!1}function bh(e){var t=Ua(e.target);if(t!==null){var a=y(t);if(a!==null){if(t=a.tag,t===13){if(t=C(a),t!==null){e.blockedOn=t,Cc(e.priority,function(){mh(a)});return}}else if(t===31){if(t=Q(a),t!==null){e.blockedOn=t,Cc(e.priority,function(){mh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Cu(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ko=i,a.target.dispatchEvent(i),ko=null}else return t=La(a),t!==null&&gh(t),e.blockedOn=a,!1;t.shift()}return!0}function Sh(e,t,a){Kr(e)&&a.delete(t)}function z0(){Du=!1,aa!==null&&Kr(aa)&&(aa=null),ia!==null&&Kr(ia)&&(ia=null),la!==null&&Kr(la)&&(la=null),wl.forEach(Sh),$l.forEach(Sh)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,z0)))}var Wr=null;function xh(e){Wr!==e&&(Wr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(ku(i||a)===null)continue;break}var r=La(a);r!==null&&(e.splice(t,3),t-=3,Cs(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Si(e){function t(x){return Jr(x,e)}aa!==null&&Jr(aa,e),ia!==null&&Jr(ia,e),la!==null&&Jr(la,e),wl.forEach(t),$l.forEach(t);for(var a=0;a<ra.length;a++){var i=ra[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)bh(a),a.blockedOn===null&&ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],s=l[At]||null;if(typeof r=="function")s||xh(a);else if(s){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[At]||null)h=s.formAction;else if(ku(l)!==null)continue}else h=s.action;typeof h=="function"?a[i+1]=h:(a.splice(i,3),i-=3),xh(a)}}}function wh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ru(e){this._internalRoot=e}Ir.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,i=Gt();ph(a,i,e,t,null,null)},Ir.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),Mr(),t[Na]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ra.length&&t!==0&&t<ra[a].priority;a++);ra.splice(a,0,e),a===0&&bh(e)}};var $h=o.version;if($h!=="19.2.3")throw Error(u(527,$h,"19.2.3"));c.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=$(t),e=e!==null?X(e):null,e=e===null?null:e.stateNode,e};var O0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ki=Pr.inject(O0),Dt=Pr}catch{}}return Tl.createRoot=function(e,t){if(!g(e))throw Error(u(299));var a=!1,i="",l=jd,r=Md,s=Cd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=fh(e,1,!1,null,null,a,i,null,l,r,s,wh),e[Na]=t.current,mu(e),new Ru(t)},Tl.hydrateRoot=function(e,t,a){if(!g(e))throw Error(u(299));var i=!1,l="",r=jd,s=Md,h=Cd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=fh(e,1,!0,t,a??null,i,l,x,r,s,h,wh),t.context=dh(null),a=t.current,i=Gt(),i=Oo(i),l=Vn(i),l.callback=null,Qn(a,l,i),a=i,t.current.lanes=a,Ri(t,a),hn(t),e[Na]=t.current,mu(e),new Ir(t)},Tl.version="19.2.3",Tl}var kh;function H0(){if(kh)return Uu.exports;kh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Uu.exports=R0(),Uu.exports}var N0=H0();const U0=mc(N0);var yt=function(){return yt=Object.assign||function(o){for(var f,u=1,g=arguments.length;u<g;u++){f=arguments[u];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(o[y]=f[y])}return o},yt.apply(this,arguments)};function Oi(n,o,f){if(f||arguments.length===2)for(var u=0,g=o.length,y;u<g;u++)(y||!(u in o))&&(y||(y=Array.prototype.slice.call(o,0,u)),y[u]=o[u]);return n.concat(y||Array.prototype.slice.call(o))}var Ke="-ms-",Ml="-moz-",Ue="-webkit-",vg="comm",mo="rule",yc="decl",L0="@import",B0="@namespace",bg="@keyframes",q0="@layer",Sg=Math.abs,vc=String.fromCharCode,rc=Object.assign;function G0(n,o){return dt(n,0)^45?(((o<<2^dt(n,0))<<2^dt(n,1))<<2^dt(n,2))<<2^dt(n,3):0}function xg(n){return n.trim()}function Hn(n,o){return(n=o.exec(n))?n[0]:n}function Te(n,o,f){return n.replace(o,f)}function to(n,o,f){return n.indexOf(o,f)}function dt(n,o){return n.charCodeAt(o)|0}function Ca(n,o,f){return n.slice(o,f)}function sn(n){return n.length}function wg(n){return n.length}function jl(n,o){return o.push(n),n}function Y0(n,o){return n.map(o).join("")}function Dh(n,o){return n.filter(function(f){return!Hn(f,o)})}var yo=1,Ti=1,$g=0,tn=0,ut=0,ji="";function vo(n,o,f,u,g,y,C,Q){return{value:n,root:o,parent:f,type:u,props:g,children:y,line:yo,column:Ti,length:C,return:"",siblings:Q}}function sa(n,o){return rc(vo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function xi(n){for(;n.root;)n=sa(n.root,{children:[n]});jl(n,n.siblings)}function X0(){return ut}function V0(){return ut=tn>0?dt(ji,--tn):0,Ti--,ut===10&&(Ti=1,yo--),ut}function un(){return ut=tn<$g?dt(ji,tn++):0,Ti++,ut===10&&(Ti=1,yo++),ut}function ua(){return dt(ji,tn)}function no(){return tn}function bo(n,o){return Ca(ji,n,o)}function Cl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q0(n){return yo=Ti=1,$g=sn(ji=n),tn=0,[]}function Z0(n){return ji="",n}function Gu(n){return xg(bo(tn-1,oc(n===91?n+2:n===40?n+1:n)))}function K0(n){for(;(ut=ua())&&ut<33;)un();return Cl(n)>2||Cl(ut)>3?"":" "}function J0(n,o){for(;--o&&un()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return bo(n,no()+(o<6&&ua()==32&&un()==32))}function oc(n){for(;un();)switch(ut){case n:return tn;case 34:case 39:n!==34&&n!==39&&oc(ut);break;case 40:n===41&&oc(n);break;case 92:un();break}return tn}function W0(n,o){for(;un()&&n+ut!==57;)if(n+ut===84&&ua()===47)break;return"/*"+bo(o,tn-1)+"*"+vc(n===47?n:un())}function I0(n){for(;!Cl(ua());)un();return bo(n,tn)}function P0(n){return Z0(ao("",null,null,null,[""],n=Q0(n),0,[0],n))}function ao(n,o,f,u,g,y,C,Q,G){for(var $=0,X=0,Y=C,ne=0,ue=0,le=0,P=1,ve=1,oe=1,he=0,ae="",se=g,z=y,O=u,S=ae;ve;)switch(le=he,he=un()){case 40:if(le!=108&&dt(S,Y-1)==58){to(S+=Te(Gu(he),"&","&\f"),"&\f",Sg($?Q[$-1]:0))!=-1&&(oe=-1);break}case 34:case 39:case 91:S+=Gu(he);break;case 9:case 10:case 13:case 32:S+=K0(le);break;case 92:S+=J0(no()-1,7);continue;case 47:switch(ua()){case 42:case 47:jl(F0(W0(un(),no()),o,f,G),G),(Cl(le||1)==5||Cl(ua()||1)==5)&&sn(S)&&Ca(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*P:Q[$++]=sn(S)*oe;case 125*P:case 59:case 0:switch(he){case 0:case 125:ve=0;case 59+X:oe==-1&&(S=Te(S,/\f/g,"")),ue>0&&(sn(S)-Y||P===0&&le===47)&&jl(ue>32?Hh(S+";",u,f,Y-1,G):Hh(Te(S," ","")+";",u,f,Y-2,G),G);break;case 59:S+=";";default:if(jl(O=Rh(S,o,f,$,X,g,Q,ae,se=[],z=[],Y,y),y),he===123)if(X===0)ao(S,o,O,O,se,y,Y,Q,z);else{switch(ne){case 99:if(dt(S,3)===110)break;case 108:if(dt(S,2)===97)break;default:X=0;case 100:case 109:case 115:}X?ao(n,O,O,u&&jl(Rh(n,O,O,0,0,g,Q,ae,g,se=[],Y,z),z),g,z,Y,Q,u?se:z):ao(S,O,O,O,[""],z,0,Q,z)}}$=X=ue=0,P=oe=1,ae=S="",Y=C;break;case 58:Y=1+sn(S),ue=le;default:if(P<1){if(he==123)--P;else if(he==125&&P++==0&&V0()==125)continue}switch(S+=vc(he),he*P){case 38:oe=X>0?1:(S+="\f",-1);break;case 44:Q[$++]=(sn(S)-1)*oe,oe=1;break;case 64:ua()===45&&(S+=Gu(un())),ne=ua(),X=Y=sn(ae=S+=I0(no())),he++;break;case 45:le===45&&sn(S)==2&&(P=0)}}return y}function Rh(n,o,f,u,g,y,C,Q,G,$,X,Y){for(var ne=g-1,ue=g===0?y:[""],le=wg(ue),P=0,ve=0,oe=0;P<u;++P)for(var he=0,ae=Ca(n,ne+1,ne=Sg(ve=C[P])),se=n;he<le;++he)(se=xg(ve>0?ue[he]+" "+ae:Te(ae,/&\f/g,ue[he])))&&(G[oe++]=se);return vo(n,o,f,g===0?mo:Q,G,$,X,Y)}function F0(n,o,f,u){return vo(n,o,f,vg,vc(X0()),Ca(n,2,-2),0,u)}function Hh(n,o,f,u,g){return vo(n,o,f,yc,Ca(n,0,u),Ca(n,u+1,-1),u,g)}function zg(n,o,f){switch(G0(n,o)){case 5103:return Ue+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ue+n+n;case 4855:return Ue+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ml+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+n+Ml+n+Ke+n+n;case 5936:switch(dt(n,o+11)){case 114:return Ue+n+Ke+Te(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ue+n+Ke+Te(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ue+n+Ke+Te(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ue+n+Ke+n+n;case 6165:return Ue+n+Ke+"flex-"+n+n;case 5187:return Ue+n+Te(n,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Ke+"flex-$1$2")+n;case 5443:return Ue+n+Ke+"flex-item-"+Te(n,/flex-|-self/g,"")+(Hn(n,/flex-|baseline/)?"":Ke+"grid-row-"+Te(n,/flex-|-self/g,""))+n;case 4675:return Ue+n+Ke+"flex-line-pack"+Te(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ue+n+Ke+Te(n,"shrink","negative")+n;case 5292:return Ue+n+Ke+Te(n,"basis","preferred-size")+n;case 6060:return Ue+"box-"+Te(n,"-grow","")+Ue+n+Ke+Te(n,"grow","positive")+n;case 4554:return Ue+Te(n,/([^-])(transform)/g,"$1"+Ue+"$2")+n;case 6187:return Te(Te(Te(n,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),n,"")+n;case 5495:case 3959:return Te(n,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Te(Te(n,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Ke+"flex-pack:$3"),/space-between/,"justify")+Ue+n+n;case 4200:if(!Hn(n,/flex-|baseline/))return Ke+"grid-column-align"+Ca(n,o)+n;break;case 2592:case 3360:return Ke+Te(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(u,g){return o=g,Hn(u.props,/grid-\w+-end/)})?~to(n+(f=f[o].value),"span",0)?n:Ke+Te(n,"-start","")+n+Ke+"grid-row-span:"+(~to(f,"span",0)?Hn(f,/\d+/):+Hn(f,/\d+/)-+Hn(n,/\d+/))+";":Ke+Te(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(u){return Hn(u.props,/grid-\w+-start/)})?n:Ke+Te(Te(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Te(n,/(.+)-inline(.+)/,Ue+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(n)-1-o>6)switch(dt(n,o+1)){case 109:if(dt(n,o+4)!==45)break;case 102:return Te(n,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+Ml+(dt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~to(n,"stretch",0)?zg(Te(n,"stretch","fill-available"),o,f)+n:n}break;case 5152:case 5920:return Te(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,g,y,C,Q,G,$){return Ke+g+":"+y+$+(C?Ke+g+"-span:"+(Q?G:+G-+y)+$:"")+n});case 4949:if(dt(n,o+6)===121)return Te(n,":",":"+Ue)+n;break;case 6444:switch(dt(n,dt(n,14)===45?18:11)){case 120:return Te(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(dt(n,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Ke+"$2box$3")+n;case 100:return Te(n,":",":"+Ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Te(n,"scroll-","scroll-snap-")+n}return n}function ro(n,o){for(var f="",u=0;u<n.length;u++)f+=o(n[u],u,n,o)||"";return f}function ev(n,o,f,u){switch(n.type){case q0:if(n.children.length)break;case L0:case B0:case yc:return n.return=n.return||n.value;case vg:return"";case bg:return n.return=n.value+"{"+ro(n.children,u)+"}";case mo:if(!sn(n.value=n.props.join(",")))return""}return sn(f=ro(n.children,u))?n.return=n.value+"{"+f+"}":""}function tv(n){var o=wg(n);return function(f,u,g,y){for(var C="",Q=0;Q<o;Q++)C+=n[Q](f,u,g,y)||"";return C}}function nv(n){return function(o){o.root||(o=o.return)&&n(o)}}function av(n,o,f,u){if(n.length>-1&&!n.return)switch(n.type){case yc:n.return=zg(n.value,n.length,f);return;case bg:return ro([sa(n,{value:Te(n.value,"@","@"+Ue)})],u);case mo:if(n.length)return Y0(f=n.props,function(g){switch(Hn(g,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xi(sa(n,{props:[Te(g,/:(read-\w+)/,":"+Ml+"$1")]})),xi(sa(n,{props:[g]})),rc(n,{props:Dh(f,u)});break;case"::placeholder":xi(sa(n,{props:[Te(g,/:(plac\w+)/,":"+Ue+"input-$1")]})),xi(sa(n,{props:[Te(g,/:(plac\w+)/,":"+Ml+"$1")]})),xi(sa(n,{props:[Te(g,/:(plac\w+)/,Ke+"input-$1")]})),xi(sa(n,{props:[g]})),rc(n,{props:Dh(f,u)});break}return""})}}var iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Ai=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",Og="active",Tg="data-styled-version",So="6.3.8",bc=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",gn=pt.createContext===void 0,lv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),rv={},xo=Object.freeze([]),Ei=Object.freeze({});function Ag(n,o,f){return f===void 0&&(f=Ei),n.theme!==f.theme&&n.theme||o||f.theme}var Eg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ov=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sv=/(^-|-$)/g;function Nh(n){return n.replace(ov,"-").replace(sv,"")}var uv=/(a)(d)/gi,Uh=function(n){return String.fromCharCode(n+(n>25?39:97))};function sc(n){var o,f="";for(o=Math.abs(n);o>52;o=o/52|0)f=Uh(o%52)+f;return(Uh(o%52)+f).replace(uv,"$1-$2")}var Yu,wi=function(n,o){for(var f=o.length;f;)n=33*n^o.charCodeAt(--f);return n},_g=function(n){return wi(5381,n)};function Sc(n){return sc(_g(n)>>>0)}function cv(n){return n.displayName||n.name||"Component"}function Xu(n){return typeof n=="string"&&!0}var jg=typeof Symbol=="function"&&Symbol.for,Mg=jg?Symbol.for("react.memo"):60115,fv=jg?Symbol.for("react.forward_ref"):60112,dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hv=((Yu={})[fv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yu[Mg]=Cg,Yu);function Lh(n){return("type"in(o=n)&&o.type.$$typeof)===Mg?Cg:"$$typeof"in n?hv[n.$$typeof]:dv;var o}var gv=Object.defineProperty,mv=Object.getOwnPropertyNames,Bh=Object.getOwnPropertySymbols,yv=Object.getOwnPropertyDescriptor,vv=Object.getPrototypeOf,qh=Object.prototype;function kg(n,o,f){if(typeof o!="string"){if(qh){var u=vv(o);u&&u!==qh&&kg(n,u,f)}var g=mv(o);Bh&&(g=g.concat(Bh(o)));for(var y=Lh(n),C=Lh(o),Q=0;Q<g.length;++Q){var G=g[Q];if(!(G in pv||f&&f[G]||C&&G in C||y&&G in y)){var $=yv(o,G);try{gv(n,G,$)}catch{}}}}return n}function ka(n){return typeof n=="function"}function xc(n){return typeof n=="object"&&"styledComponentId"in n}function Ma(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function so(n,o){if(n.length===0)return"";for(var f=n[0],u=1;u<n.length;u++)f+=n[u];return f}function kl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function uc(n,o,f){if(f===void 0&&(f=!1),!f&&!kl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=uc(n[u],o[u]);else if(kl(o))for(var u in o)n[u]=uc(n[u],o[u]);return n}function wc(n,o){Object.defineProperty(n,"toString",{value:o})}function Da(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var bv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var f=0,u=0;u<o;u++)f+=this.groupSizes[u];return f},n.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var u=this.groupSizes,g=u.length,y=g;o>=y;)if((y<<=1)<0)throw Da(16,"".concat(o));this.groupSizes=new Uint32Array(y),this.groupSizes.set(u),this.length=y;for(var C=g;C<y;C++)this.groupSizes[C]=0}for(var Q=this.indexOfGroup(o+1),G=(C=0,f.length);C<G;C++)this.tag.insertRule(Q,f[C])&&(this.groupSizes[o]++,Q++)},n.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],u=this.indexOfGroup(o),g=u+f;this.groupSizes[o]=0;for(var y=u;y<g;y++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var u=this.groupSizes[o],g=this.indexOfGroup(o),y=g+u,C=g;C<y;C++)f+="".concat(this.tag.getRule(C)).concat(bc);return f},n})(),io=new Map,uo=new Map,lo=1,$i=function(n){if(io.has(n))return io.get(n);for(;uo.has(lo);)lo++;var o=lo++;return io.set(n,o),uo.set(o,n),o},Sv=function(n,o){lo=o+1,io.set(n,o),uo.set(o,n)},xv="style[".concat(Ai,"][").concat(Tg,'="').concat(So,'"]'),wv=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$v=function(n,o,f){for(var u,g=f.split(","),y=0,C=g.length;y<C;y++)(u=g[y])&&n.registerName(o,u)},zv=function(n,o){for(var f,u=((f=o.textContent)!==null&&f!==void 0?f:"").split(bc),g=[],y=0,C=u.length;y<C;y++){var Q=u[y].trim();if(Q){var G=Q.match(wv);if(G){var $=0|parseInt(G[1],10),X=G[2];$!==0&&(Sv(X,$),$v(n,X,G[3]),n.getTag().insertRules($,g)),g.length=0}else g.push(Q)}}},Gh=function(n){for(var o=document.querySelectorAll(xv),f=0,u=o.length;f<u;f++){var g=o[f];g&&g.getAttribute(Ai)!==Og&&(zv(n,g),g.parentNode&&g.parentNode.removeChild(g))}};function Ov(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dg=function(n){var o=document.head,f=n||o,u=document.createElement("style"),g=(function(Q){var G=Array.from(Q.querySelectorAll("style[".concat(Ai,"]")));return G[G.length-1]})(f),y=g!==void 0?g.nextSibling:null;u.setAttribute(Ai,Og),u.setAttribute(Tg,So);var C=Ov();return C&&u.setAttribute("nonce",C),f.insertBefore(u,y),u},Tv=(function(){function n(o){this.element=Dg(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var u=document.styleSheets,g=0,y=u.length;g<y;g++){var C=u[g];if(C.ownerNode===f)return C}throw Da(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},n})(),Av=(function(){function n(o){this.element=Dg(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var u=document.createTextNode(f);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Ev=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Yh=oo,_v={isServer:!oo,useCSSOMInjection:!lv},co=(function(){function n(o,f,u){o===void 0&&(o=Ei),f===void 0&&(f={});var g=this;this.options=yt(yt({},_v),o),this.gs=f,this.names=new Map(u),this.server=!!o.isServer,!this.server&&oo&&Yh&&(Yh=!1,Gh(this)),wc(this,function(){return(function(y){for(var C=y.getTag(),Q=C.length,G="",$=function(Y){var ne=(function(oe){return uo.get(oe)})(Y);if(ne===void 0)return"continue";var ue=y.names.get(ne),le=C.getGroup(Y);if(ue===void 0||!ue.size||le.length===0)return"continue";var P="".concat(Ai,".g").concat(Y,'[id="').concat(ne,'"]'),ve="";ue!==void 0&&ue.forEach(function(oe){oe.length>0&&(ve+="".concat(oe,","))}),G+="".concat(le).concat(P,'{content:"').concat(ve,'"}').concat(bc)},X=0;X<Q;X++)$(X);return G})(g)})}return n.registerId=function(o){return $i(o)},n.prototype.rehydrate=function(){!this.server&&oo&&Gh(this)},n.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new n(yt(yt({},this.options),o),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var u=f.useCSSOMInjection,g=f.target;return f.isServer?new Ev(g):u?new Tv(g):new Av(g)})(this.options),new bv(o)));var o},n.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},n.prototype.registerName=function(o,f){if($i(o),this.names.has(o))this.names.get(o).add(f);else{var u=new Set;u.add(f),this.names.set(o,u)}},n.prototype.insertRules=function(o,f,u){this.registerName(o,f),this.getTag().insertRules($i(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup($i(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),jv=/&/g,zi=47;function Xh(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,f=0,u=0,g=!1,y=0;y<o;y++){var C=n.charCodeAt(y);if(u!==0||g||C!==zi||n.charCodeAt(y+1)!==42)if(g)C===42&&n.charCodeAt(y+1)===zi&&(g=!1,y++);else if(C!==34&&C!==39||y!==0&&n.charCodeAt(y-1)===92){if(u===0){if(C===123)f++;else if(C===125&&--f<0)return!0}}else u===0?u=C:u===C&&(u=0);else g=!0,y++}return f!==0||u!==0}function Rg(n,o){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Rg(f.children,o)),f})}function Mv(n){var o,f,u,g=Ei,y=g.options,C=y===void 0?Ei:y,Q=g.plugins,G=Q===void 0?xo:Q,$=function(ne,ue,le){return le.startsWith(f)&&le.endsWith(f)&&le.replaceAll(f,"").length>0?".".concat(o):ne},X=G.slice();X.push(function(ne){ne.type===mo&&ne.value.includes("&")&&(ne.props[0]=ne.props[0].replace(jv,f).replace(u,$))}),C.prefix&&X.push(av),X.push(ev);var Y=function(ne,ue,le,P){ue===void 0&&(ue=""),le===void 0&&(le=""),P===void 0&&(P="&"),o=P,f=ue,u=new RegExp("\\".concat(f,"\\b"),"g");var ve=(function(ae){if(!Xh(ae))return ae;for(var se=ae.length,z="",O=0,S=0,k=0,_=!1,v=0;v<se;v++){var B=ae.charCodeAt(v);if(k!==0||_||B!==zi||ae.charCodeAt(v+1)!==42)if(_)B===42&&ae.charCodeAt(v+1)===zi&&(_=!1,v++);else if(B!==34&&B!==39||v!==0&&ae.charCodeAt(v-1)===92){if(k===0)if(B===123)S++;else if(B===125){if(--S<0){for(var Z=v+1;Z<se;){var R=ae.charCodeAt(Z);if(R===59||R===10)break;Z++}Z<se&&ae.charCodeAt(Z)===59&&Z++,S=0,v=Z-1,O=Z;continue}S===0&&(z+=ae.substring(O,v+1),O=v+1)}else B===59&&S===0&&(z+=ae.substring(O,v+1),O=v+1)}else k===0?k=B:k===B&&(k=0);else _=!0,v++}if(O<se){var J=ae.substring(O);Xh(J)||(z+=J)}return z})((function(ae){if(ae.indexOf("//")===-1)return ae;for(var se=ae.length,z=[],O=0,S=0,k=0,_=0;S<se;){var v=ae.charCodeAt(S);if(v!==34&&v!==39||S!==0&&ae.charCodeAt(S-1)===92)if(k===0)if(v===40&&S>=3&&(32|ae.charCodeAt(S-1))==108&&(32|ae.charCodeAt(S-2))==114&&(32|ae.charCodeAt(S-3))==117)_=1,S++;else if(_>0)v===41?_--:v===40&&_++,S++;else if(v===zi&&S+1<se&&ae.charCodeAt(S+1)===zi){for(S>O&&z.push(ae.substring(O,S));S<se&&ae.charCodeAt(S)!==10;)S++;O=S}else S++;else S++;else k===0?k=v:k===v&&(k=0),S++}return O===0?ae:(O<se&&z.push(ae.substring(O)),z.join(""))})(ne)),oe=P0(le||ue?"".concat(le," ").concat(ue," { ").concat(ve," }"):ve);C.namespace&&(oe=Rg(oe,C.namespace));var he=[];return ro(oe,tv(X.concat(nv(function(ae){return he.push(ae)})))),he};return Y.hash=G.length?G.reduce(function(ne,ue){return ue.name||Da(15),wi(ne,ue.name)},5381).toString():"",Y}var Cv=new co,cc=Mv(),fc={shouldForwardProp:void 0,styleSheet:Cv,stylis:cc},Hg=gn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(fc)}}:pt.createContext(fc);Hg.Consumer;gn||pt.createContext(void 0);function dc(){return gn?fc:pt.useContext(Hg)}var Ng=(function(){function n(o,f){var u=this;this.inject=function(g,y){y===void 0&&(y=cc);var C=u.name+y.hash;g.hasNameForId(u.id,C)||g.insertRules(u.id,C,y(u.rules,C,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,wc(this,function(){throw Da(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=cc),this.name+o.hash},n})();function kv(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in iv||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var Dv=function(n){return n>="A"&&n<="Z"};function Vh(n){for(var o="",f=0;f<n.length;f++){var u=n[f];if(f===1&&u==="-"&&n[0]==="-")return n;Dv(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var Ug=function(n){return n==null||n===!1||n===""},Lg=function(n){var o=[];for(var f in n){var u=n[f];n.hasOwnProperty(f)&&!Ug(u)&&(Array.isArray(u)&&u.isCss||ka(u)?o.push("".concat(Vh(f),":"),u,";"):kl(u)?o.push.apply(o,Oi(Oi(["".concat(f," {")],Lg(u),!1),["}"],!1)):o.push("".concat(Vh(f),": ").concat(kv(f,u),";")))}return o};function ca(n,o,f,u){if(Ug(n))return[];if(xc(n))return[".".concat(n.styledComponentId)];if(ka(n)){if(!ka(y=n)||y.prototype&&y.prototype.isReactComponent||!o)return[n];var g=n(o);return ca(g,o,f,u)}var y;return n instanceof Ng?f?(n.inject(f,u),[n.getName(u)]):[n]:kl(n)?Lg(n):Array.isArray(n)?Array.prototype.concat.apply(xo,n.map(function(C){return ca(C,o,f,u)})):[n.toString()]}function Bg(n){for(var o=0;o<n.length;o+=1){var f=n[o];if(ka(f)&&!xc(f))return!1}return!0}var Rv=_g(So),Hv=(function(){function n(o,f,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Bg(o),this.componentId=f,this.baseHash=wi(Rv,f),this.baseStyle=u,co.registerId(f)}return n.prototype.generateAndInjectStyles=function(o,f,u){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))g=Ma(g,this.staticRulesId);else{var y=so(ca(this.rules,o,f,u)),C=sc(wi(this.baseHash,y)>>>0);if(!f.hasNameForId(this.componentId,C)){var Q=u(y,".".concat(C),void 0,this.componentId);f.insertRules(this.componentId,C,Q)}g=Ma(g,C),this.staticRulesId=C}else{for(var G=wi(this.baseHash,u.hash),$="",X=0;X<this.rules.length;X++){var Y=this.rules[X];if(typeof Y=="string")$+=Y;else if(Y){var ne=so(ca(Y,o,f,u));G=wi(G,ne+X),$+=ne}}if($){var ue=sc(G>>>0);if(!f.hasNameForId(this.componentId,ue)){var le=u($,".".concat(ue),void 0,this.componentId);f.insertRules(this.componentId,ue,le)}g=Ma(g,ue)}}return{className:g,css:typeof window>"u"?f.getTag().getGroup($i(this.componentId)):""}},n})(),Dl=gn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:pt.createContext(void 0);Dl.Consumer;function Nv(n){if(gn)return n.children;var o=pt.useContext(Dl),f=pt.useMemo(function(){return(function(u,g){if(!u)throw Da(14);if(ka(u)){var y=u(g);return y}if(Array.isArray(u)||typeof u!="object")throw Da(8);return g?yt(yt({},g),u):u})(n.theme,o)},[n.theme,o]);return n.children?pt.createElement(Dl.Provider,{value:f},n.children):null}var Vu={};function Uv(n,o,f){var u=xc(n),g=n,y=!Xu(n),C=o.attrs,Q=C===void 0?xo:C,G=o.componentId,$=G===void 0?(function(se,z){var O=typeof se!="string"?"sc":Nh(se);Vu[O]=(Vu[O]||0)+1;var S="".concat(O,"-").concat(Sc(So+O+Vu[O]));return z?"".concat(z,"-").concat(S):S})(o.displayName,o.parentComponentId):G,X=o.displayName,Y=X===void 0?(function(se){return Xu(se)?"styled.".concat(se):"Styled(".concat(cv(se),")")})(n):X,ne=o.displayName&&o.componentId?"".concat(Nh(o.displayName),"-").concat(o.componentId):o.componentId||$,ue=u&&g.attrs?g.attrs.concat(Q).filter(Boolean):Q,le=o.shouldForwardProp;if(u&&g.shouldForwardProp){var P=g.shouldForwardProp;if(o.shouldForwardProp){var ve=o.shouldForwardProp;le=function(se,z){return P(se,z)&&ve(se,z)}}else le=P}var oe=new Hv(f,ne,u?g.componentStyle:void 0);function he(se,z){return(function(O,S,k){var _=O.attrs,v=O.componentStyle,B=O.defaultProps,Z=O.foldedComponentIds,R=O.styledComponentId,J=O.target,ee=gn?void 0:pt.useContext(Dl),E=dc(),c=O.shouldForwardProp||E.shouldForwardProp,ie=Ag(S,ee,B)||Ei,T=(function(ge,de,Se){for(var Ae,we=yt(yt({},de),{className:void 0,theme:Se}),Ee=0;Ee<ge.length;Ee+=1){var be=ka(Ae=ge[Ee])?Ae(we):Ae;for(var ze in be)ze==="className"?we.className=Ma(we.className,be[ze]):ze==="style"?we.style=yt(yt({},we.style),be[ze]):we[ze]=be[ze]}return"className"in de&&typeof de.className=="string"&&(we.className=Ma(we.className,de.className)),we})(_,S,ie),d=T.as||J,p={};for(var b in T)T[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&T.theme===ie||(b==="forwardedAs"?p.as=T.forwardedAs:c&&!c(b,d)||(p[b]=T[b]));var U=(function(ge,de){var Se=dc(),Ae=ge.generateAndInjectStyles(de,Se.styleSheet,Se.stylis);return Ae})(v,T),D=U.className,W=U.css,K=Ma(Z,R);D&&(K+=" "+D),T.className&&(K+=" "+T.className),p[Xu(d)&&!Eg.has(d)?"class":"className"]=K,k&&(p.ref=k);var te=qe.createElement(d,p);return gn&&W?pt.createElement(pt.Fragment,null,pt.createElement("style",{precedence:"styled-components",href:"sc-".concat(R,"-").concat(D),children:W}),te):te})(ae,se,z)}he.displayName=Y;var ae=pt.forwardRef(he);return ae.attrs=ue,ae.componentStyle=oe,ae.displayName=Y,ae.shouldForwardProp=le,ae.foldedComponentIds=u?Ma(g.foldedComponentIds,g.styledComponentId):"",ae.styledComponentId=ne,ae.target=u?g.target:n,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(se){this._foldedDefaultProps=u?(function(z){for(var O=[],S=1;S<arguments.length;S++)O[S-1]=arguments[S];for(var k=0,_=O;k<_.length;k++)uc(z,_[k],!0);return z})({},g.defaultProps,se):se}}),wc(ae,function(){return".".concat(ae.styledComponentId)}),y&&kg(ae,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Qh(n,o){for(var f=[n[0]],u=0,g=o.length;u<g;u+=1)f.push(o[u],n[u+1]);return f}var Zh=function(n){return Object.assign(n,{isCss:!0})};function $c(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(ka(n)||kl(n))return Zh(ca(Qh(xo,Oi([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?ca(u):Zh(ca(Qh(u,o)))}function pc(n,o,f){if(f===void 0&&(f=Ei),!o)throw Da(1,o);var u=function(g){for(var y=[],C=1;C<arguments.length;C++)y[C-1]=arguments[C];return n(o,f,$c.apply(void 0,Oi([g],y,!1)))};return u.attrs=function(g){return pc(n,o,yt(yt({},f),{attrs:Array.prototype.concat(f.attrs,g).filter(Boolean)}))},u.withConfig=function(g){return pc(n,o,yt(yt({},f),g))},u}var qg=function(n){return pc(Uv,n)},w=qg;Eg.forEach(function(n){w[n]=qg(n)});var Lv=(function(){function n(o,f){this.rules=o,this.componentId=f,this.isStatic=Bg(o),co.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,f,u,g){var y=g(so(ca(this.rules,f,u,g)),""),C=this.componentId+o;u.insertRules(C,C,y)},n.prototype.removeStyles=function(o,f){f.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,f,u,g){o>2&&co.registerId(this.componentId+o);var y=this.componentId+o;this.isStatic?u.hasNameForId(y,y)||this.createStyles(o,f,u,g):(this.removeStyles(o,u),this.createStyles(o,f,u,g))},n})();function Bv(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var u=$c.apply(void 0,Oi([n],o,!1)),g="sc-global-".concat(Sc(JSON.stringify(u))),y=new Lv(u,g),C=new WeakMap,Q=function(G){var $=dc(),X=gn?void 0:pt.useContext(Dl),Y=C.get($.styleSheet);if(Y===void 0&&(Y=$.styleSheet.allocateGSInstance(g),C.set($.styleSheet,Y)),(typeof window>"u"||!$.styleSheet.server)&&(function(ve,oe,he,ae,se){if(y.isStatic)y.renderStyles(ve,rv,he,se);else{var z=yt(yt({},oe),{theme:Ag(oe,ae,Q.defaultProps)});y.renderStyles(ve,z,he,se)}})(Y,G,$.styleSheet,X,$.stylis),!gn){var ne=pt.useRef(!0);pt.useLayoutEffect(function(){return ne.current=!1,function(){ne.current=!0,queueMicrotask(function(){ne.current&&(y.removeStyles(Y,$.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(g,'"]')).forEach(function(ve){return ve.remove()}))})}},[Y,$.styleSheet])}if(gn){var ue=g+Y,le=typeof window>"u"?$.styleSheet.getTag().getGroup($i(ue)):"";if(le){var P="".concat(g,"-").concat(Y);return pt.createElement("style",{key:P,"data-styled-global":g,precedence:"styled-components",href:P,children:le})}}return null};return pt.memo(Q)}function Mi(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var u=so($c.apply(void 0,Oi([n],o,!1))),g=Sc(u);return new Ng(g,u)}var en=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(en||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gv=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,f,u)=>u?u.toUpperCase():f.toLowerCase()),Kh=n=>{const o=Gv(n);return o.charAt(0).toUpperCase()+o.slice(1)},Gg=(...n)=>n.filter((o,f,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===f).join(" ").trim(),Yv=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=qe.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:g="",children:y,iconNode:C,...Q},G)=>qe.createElement("svg",{ref:G,...Xv,width:o,height:o,stroke:n,strokeWidth:u?Number(f)*24/Number(o):f,className:Gg("lucide",g),...!y&&!Yv(Q)&&{"aria-hidden":"true"},...Q},[...C.map(([$,X])=>qe.createElement($,X)),...Array.isArray(y)?y:[y]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(n,o)=>{const f=qe.forwardRef(({className:u,...g},y)=>qe.createElement(Vv,{ref:y,iconNode:o,className:Gg(`lucide-${qv(Kh(n))}`,`lucide-${n}`,u),...g}));return f.displayName=Kh(n),f};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Zv=ct("arrow-down",Qv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ra=ct("arrow-left",Kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zc=ct("arrow-right",Jv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Iv=ct("arrow-up-right",Wv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Fv=ct("check",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],tb=ct("dribbble",eb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ab=ct("external-link",nb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],lb=ct("figma",ib);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Jh=ct("file-text",rb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],sb=ct("funnel",ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],cb=ct("gamepad-2",ub);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],db=ct("image",fb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],hb=ct("linkedin",pb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mb=ct("mail",gb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],vb=ct("menu",yb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Sb=ct("pen-tool",bb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wb=ct("star",xb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],zb=ct("tag",$b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Tb=ct("twitter",Ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yg=ct("x",Ab),Eb={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},17:{title:"App Store Screenshots",description:"",technologies:["App Store","Маркетинг","Візуальний дизайн"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"About Me",heading1:"Designing",heading2:"Through Craft.",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Emotion",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaca:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaca",eyebrow:"UI/UX Design",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},marketingVideo:{backToPortfolio:"Back to Portfolio",headerTag:"Motion Design",eyebrow:"Motion Design",title:"Marketing Videos",lead:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",featuredTitle:"Featured Videos",allVideosTitle:"All Videos"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",18:{title:"Onboarding for Beauty Shop",description:"Вишуканий онбординг для застосунку б’юті-магазину з фокусом на персоналізації та плавному першому досвіді.",technologies:["Figma","UI/UX","Онбординг"]},brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaca: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"Про мене",heading1:"Дизайн",heading2:"Через майстерність.",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Емоцій",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaca:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaca",eyebrow:"UI/UX дизайн",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},marketingVideo:{backToPortfolio:"Назад до портфоліо",headerTag:"Моушн-дизайн",eyebrow:"Моушн-дизайн",title:"Маркетингові відео",lead:"Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.",featuredTitle:"Вибрані відео",allVideosTitle:"Усі відео"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},Xg=qe.createContext(void 0),_b=({children:n})=>{const[o,f]=qe.useState("en"),u={lang:o,setLang:f,t:Eb[o]};return m.jsx(Xg.Provider,{value:u,children:n})},nn=()=>{const n=qe.useContext(Xg);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},Qu=(n,o)=>{const u={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign"}[n];return u?o.work.categories[u]:n},jb=(n,o)=>{const u={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return u?o.about.skills[u]:n},j={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",navWidth:"95%",navMaxWidth:"1024px",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",carouselCaptionOffsetLg:"18px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blurMenu:"20px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite95:"rgba(255, 255, 255, 0.95)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite98:"rgba(255, 255, 255, 0.98)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55,carouselCaptionOpacity:.6},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9,scaleCaptionDown:.92},zIndex:{background:0,foreground:1,stickyHeader:20,mobileMenu:40,nav:50,modal:100,closeButton:2,progress:100},navigation:{scrollThreshold:20},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},Mb=w.nav`
  position: fixed;
  top: ${({theme:n})=>n.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${j.zIndex.nav};
  width: ${j.layout.navWidth};
  max-width: ${j.layout.navMaxWidth};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  padding: ${({theme:n,$scrolled:o})=>o?`${n.spacing[3]} ${n.spacing[8]}`:`${n.spacing[6]} ${n.spacing[8]}`};
  background: ${({$scrolled:n})=>n?j.effects.glassWhite70:"transparent"};
  backdrop-filter: ${({$scrolled:n})=>n?`blur(${j.effects.blurStrong})`:"none"};
  box-shadow: ${({theme:n,$scrolled:o})=>o?n.shadows.lg:"none"};
  border: ${({$scrolled:n})=>n?`${j.sizing.hairline} solid ${j.effects.glassWhite20}`:"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,Cb=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Vg=w.button`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[1]};
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.02em;
  color: ${({theme:n})=>n.colors.slate[900]};
`,kb=w.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${Vg}:hover & {
    transform: rotate(12deg);
  }
`,Db=w.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,Rb=w.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,Hb=w.button`
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[500]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,Nb=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,Ub=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,Lb=w.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({theme:n})=>n.shadows.md};

  &:hover {
    background: ${({theme:n})=>n.colors.brand.purple};
    transform: translateY(${j.motion.hoverLiftSm}) scale(${j.motion.scaleHover});
  }

  &:active {
    transform: scale(0.98);
  }
`,Bb=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[2]};
  border: none;
  background: transparent;
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: none;
  }
`,qb=w.div`
  position: fixed;
  inset: 0;
  z-index: ${j.zIndex.mobileMenu};
  padding: ${({theme:n})=>n.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:n})=>n.spacing[8]};
  background: ${j.effects.glassWhite95};
  backdrop-filter: blur(${j.effects.blurMenu});
  opacity: ${({$open:n})=>n?1:0};
  pointer-events: ${({$open:n})=>n?"auto":"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: none;
  }
`,Gb=w.button`
  border: none;
  background: transparent;
  text-align: left;
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,Yb=w.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,Xb=w.button`
  border: none;
  background: transparent;
  text-align: left;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[400]};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  cursor: pointer;
`,Vb=w.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,Qb=({onNavigate:n})=>{const{t:o}=nn(),[f,u]=qe.useState(!1),[g,y]=qe.useState(!1);qe.useEffect(()=>{const X=()=>{u(window.scrollY>j.navigation.scrollThreshold)};return window.addEventListener("scroll",X),()=>window.removeEventListener("scroll",X)},[]);const C=X=>{if(n){n(X),y(!1);return}const Y=document.getElementById(X);Y&&(Y.scrollIntoView({behavior:"smooth"}),y(!1))},Q=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},G=()=>{alert(o.nav.cvAlert)},$=[{label:o.nav.work,id:en.WORK},{label:o.nav.about,id:en.ABOUT}];return m.jsxs(m.Fragment,{children:[m.jsx(Mb,{$scrolled:f,children:m.jsxs(Cb,{children:[m.jsxs(Vg,{onClick:()=>C(en.HERO),children:[m.jsx(kb,{children:"A."}),m.jsx(Db,{children:o.nav.brandText})]}),m.jsxs(Rb,{children:[$.map(X=>m.jsx(Hb,{onClick:()=>C(X.id),children:X.label},X.id)),m.jsxs(Nb,{children:[m.jsxs(Ub,{onClick:G,children:[m.jsx(Jh,{size:16}),o.nav.cv]}),m.jsx(Lb,{onClick:Q,children:o.nav.hireMe})]})]}),m.jsx(Bb,{onClick:()=>y(!g),children:g?m.jsx(Yg,{size:24}):m.jsx(vb,{size:24})})]})}),m.jsxs(qb,{$open:g,children:[$.map(X=>m.jsx(Gb,{onClick:()=>C(X.id),children:X.label},X.id)),m.jsxs(Yb,{children:[m.jsxs(Xb,{onClick:G,children:[m.jsx(Jh,{size:24}),o.nav.cv]}),m.jsx(Vb,{onClick:Q,children:o.nav.hireMe})]})]})]})},Zb={light:"light",regular:"regular",medium:"medium",bold:"bold"},Kb={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},Jb=w.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[Kb[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[Zb[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Oc=({as:n="span",element:o,message:f,size:u="md",weight:g="regular",color:y="secondary",...C})=>{const{t:Q}=nn(),G=o??n;return m.jsx(Jb,{as:G,$size:u,$weight:g,$color:y,...C,children:f(Q)})},Wb=Mi`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${j.motion.floatOffset}); }
`,Ib=Mi`
  0% { opacity: 0; transform: translateY(${j.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,Pb=w.section`
  position: relative;
  min-height: ${j.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,Fb=w.div`
  position: relative;
  z-index: 1;
  max-width: ${j.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${Ib} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,hc=w.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${Wb} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,Wh=w(hc)`
  animation-delay: 3s;
`,e1=w.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${j.effects.glassWhite50};
  backdrop-filter: blur(${j.effects.blurSoft});
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[200]};
  border-radius: ${({theme:n})=>n.radii.full};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
`,t1=w.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,n1=w.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,a1=w.h1`
  margin: 0 0 ${({theme:n})=>n.spacing[8]} 0;
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    font-size: ${({theme:n})=>n.typography.sizes["7xl"]};
  }
`,i1=w.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,l1=w(Oc)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${j.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,r1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,Qg=w.button`
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii.full};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({theme:n})=>n.colors.brand.purple};
    transform: translateY(${j.motion.hoverLiftSm});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,o1=w(Zv)`
  transition: transform 0.2s ease;

  ${Qg}:hover & {
    transform: translateY(${j.motion.arrowDrop});
  }
`,s1=()=>{const{t:n}=nn();return m.jsx(Pb,{id:en.HERO,children:m.jsxs(Fb,{children:[m.jsx(hc,{style:{left:j.sizing.heroFloatLeftOffset,top:0},children:m.jsx(lb,{color:"#7c3aed",size:32})}),m.jsx(Wh,{style:{right:j.sizing.heroFloatRightOffset,top:j.sizing.heroFloatRightTop},children:m.jsx(Sb,{color:"#3b82f6",size:32})}),m.jsx(Wh,{style:{left:j.sizing.heroFloatLeftAlt,bottom:0},children:m.jsx(db,{color:"#ec4899",size:32})}),m.jsx(hc,{style:{right:0,bottom:j.sizing.heroFloatRightBottom},children:m.jsx(cb,{color:"#10b981",size:32})}),m.jsxs(e1,{children:[m.jsx(t1,{}),m.jsx(n1,{children:n.hero.available})]}),m.jsxs(a1,{children:[n.hero.heading1," ",m.jsx("br",{}),m.jsx(i1,{children:n.hero.heading2})]}),m.jsx(l1,{element:"p",message:o=>o.hero.lead}),m.jsx(r1,{children:m.jsxs(Qg,{onClick:()=>{var o;return(o=document.getElementById(en.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,m.jsx(o1,{size:18})]})})]})})},ce="/assets",u1=`${ce}/images/brand/app-icons-splash-screens/full-composition.png`,c1=`${ce}/video/uiux/smart-house-app.mp4`,f1=`${ce}/images/brand/Namelaca icons and illustration/Full_Composition_Namelaca.png`,d1=`${ce}/video/uiux/Onboarding for Beauty shop.mp4`,p1=`${ce}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,h1=`${ce}/video/Marketing video/App Store.mp4`,g1=[`${ce}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${ce}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 1.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 2.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 3.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 4.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 5.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 7.jpg`,`${ce}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 9.png`],fo="Anna Serhiienko",m1="Graphic Designer",y1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",v1=["Brand design","UI/UX design","Marketing and advertising"],Zg=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],po=[{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:u1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:16,title:"Smart House App",category:"UI/UX design",mediaUrl:c1,mediaType:"video",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",link:"https://dribbble.com/shots/11804880-Smart-house-App",technologies:["Figma","UI Animation","IoT Design"]},{id:18,title:"Onboarding for Beauty Shop",category:"UI/UX design",mediaUrl:d1,mediaType:"video",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",link:"https://dribbble.com/shots/11284581-Onboarding-for-Beauty-shop",technologies:["Figma","UI/UX","Onboarding"]},{id:20,title:"Namelaca Icons & Illustration",category:"UI/UX design",mediaUrl:f1,mediaType:"image",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",link:"#namelaca",technologies:["Illustration","Icon Design","UI Assets"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:p1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${ce}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:g1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]},{id:22,title:"Marketing Videos",category:"Marketing and advertising",mediaUrl:h1,mediaType:"video",description:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",link:"#marketing-video",technologies:["Motion Design","After Effects","Marketing"]}],b1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${fo}${m1}${y1}${Zg.join(", ")}${po.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const Kg=Mi`
  0% { opacity: 0; transform: translateY(${j.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,S1=Mi`
  from { opacity: 0; }
  to { opacity: 1; }
`,x1=w.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${j.effects.sectionWash};
`,w1=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,$1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,z1=w.div`
  max-width: ${j.layout.workHeadingMaxWidth};
`,O1=w.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,T1=w.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,A1=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,E1=w.button`
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${j.sizing.hairline} solid ${({theme:n,$active:o})=>o?"transparent":n.colors.slate[100]};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.white};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.md:"none"};
  transform: ${({$active:n})=>n?"scale(1.05)":"scale(1)"};

  &:hover {
    border-color: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.brand.purple};
  }
`,_1=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Ci=w.div`
  cursor: pointer;
  animation: ${Kg} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,j1=w.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[200]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Ci}:hover & {
    transform: translateY(${j.motion.hoverLiftLg});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,M1=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transform: scale(1.1);
  transition: transform 0.7s ease, filter 0.7s ease;

  ${Ci}:hover & {
    filter: grayscale(0);
    transform: scale(1);
  }
`,C1=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transform: scale(1.1);
  transition: transform 0.7s ease, filter 0.7s ease;

  ${Ci}:hover & {
    filter: grayscale(0);
    transform: scale(1);
  }
`,k1=w.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:n})=>n.spacing[10]};
  background: ${j.effects.cardOverlayGradient};
  opacity: 0;
  transition: opacity 0.5s ease;

  ${Ci}:hover & {
    opacity: 1;
  }
`,D1=w.span`
  color: ${j.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,R1=w.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,H1=w.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.slate[900]};
  transform: scale(0);
  transition: transform 0.5s ease 0.1s;

  ${Ci}:hover & {
    transform: scale(1);
  }
`,N1=w.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${j.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,U1=w.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,L1=w.div`
  position: fixed;
  inset: 0;
  z-index: ${j.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${S1} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,B1=w.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.overlayDark95};
  backdrop-filter: blur(${j.effects.blurStrong});
`,q1=w.div`
  position: relative;
  width: 100%;
  max-width: ${j.layout.workModalMaxWidth};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${j.layout.workModalMaxHeight};
  animation: ${Kg} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,G1=w.button`
  position: absolute;
  top: ${({theme:n})=>n.spacing[6]};
  right: ${({theme:n})=>n.spacing[6]};
  z-index: ${j.zIndex.closeButton};
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  background: ${j.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${j.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${j.effects.glassWhite20};
  }
`,Y1=w.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${j.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,X1=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,V1=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Q1=w.div`
  width: 100%;
  height: 100%;
  padding: ${({theme:n})=>n.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  overflow-y: auto;
`,Z1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,K1=w.h4`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,J1=w.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${j.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,W1=w.div`
  flex: 0 0 auto;
  width: 220px;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[50]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,I1=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`,P1=w.div`
  width: 100%;
  padding: ${({theme:n})=>n.spacing[8]};
  display: flex;
  flex-direction: column;
  background: ${({theme:n})=>n.colors.white};
  overflow-y: auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 40%;
    padding: ${({theme:n})=>n.spacing[12]};
  }
`,F1=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,eS=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,tS=w.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,nS=w.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,aS=w.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,iS=w.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,lS=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,rS=w.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,oS=w.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,sS=w.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-decoration: none;
  box-shadow: ${({theme:n})=>n.shadows.md};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({theme:n})=>n.colors.brand.purple};
    transform: translateY(${j.motion.hoverLiftSm});
  }
`,uS=()=>{const{t:n}=nn(),[o,f]=qe.useState("All"),[u,g]=qe.useState(null),y=$=>$.includes(" ")?encodeURI($):$,C=$=>{const X=[],Y=new Map;return $.forEach(ne=>{const oe=decodeURIComponent(ne.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";Y.has(oe)?X[Y.get(oe)].items.push(ne):(Y.set(oe,X.length),X.push({name:oe,items:[ne]}))}),X};qe.useEffect(()=>{if(!u)return;const $=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=$}},[u]);const Q=["All",...v1],G=qe.useMemo(()=>o==="All"?po:po.filter($=>$.category===o),[o]);return m.jsxs(x1,{id:en.WORK,children:[m.jsxs(w1,{children:[m.jsxs($1,{children:[m.jsxs(z1,{children:[m.jsx(O1,{children:n.work.title}),m.jsx(T1,{children:n.work.subtitle})]}),m.jsx(A1,{children:Q.map($=>m.jsx(E1,{$active:o===$,onClick:()=>f($),children:$==="All"?n.work.all:Qu($,n)},$))})]}),m.jsx(_1,{children:G.map(($,X)=>{const Y=n.projects[$.id],ne=(Y==null?void 0:Y.title)??$.title;return m.jsx(Ci,{style:{animationDelay:`${X*.1}s`},onClick:()=>g($),children:m.jsxs(j1,{children:[$.mediaType==="video"?m.jsx(C1,{src:y($.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):m.jsx(M1,{src:y($.mediaUrl),alt:ne}),m.jsxs(k1,{children:[m.jsx(D1,{children:Qu($.category,n)}),m.jsx(R1,{children:ne}),m.jsx(H1,{children:m.jsx(Iv,{size:24})})]})]})},$.id)})}),G.length===0&&m.jsxs(N1,{children:[m.jsx(sb,{color:"#e2e8f0",size:48}),m.jsx(U1,{children:n.work.emptyState})]})]}),u&&(()=>{var ue;const $=n.projects[u.id],X=($==null?void 0:$.title)??u.title,Y=($==null?void 0:$.description)??u.description,ne=($==null?void 0:$.technologies)??u.technologies;return m.jsxs(L1,{children:[m.jsx(B1,{onClick:()=>g(null)}),m.jsxs(q1,{children:[m.jsx(G1,{onClick:()=>g(null),"aria-label":n.work.close,children:m.jsx(Yg,{size:24})}),m.jsx(Y1,{children:(ue=u.gallery)!=null&&ue.length?m.jsx(Q1,{children:C(u.gallery).map(le=>m.jsxs(Z1,{children:[m.jsx(K1,{children:le.name}),m.jsx(J1,{children:le.items.map((P,ve)=>m.jsx(W1,{children:m.jsx(I1,{src:y(P),alt:`${X} ${le.name} ${ve+1}`,loading:"lazy"})},`${le.name}-${ve}`))})]},le.name))}):u.mediaType==="video"?m.jsx(V1,{src:y(u.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):m.jsx(X1,{src:y(u.mediaUrl),alt:X})}),m.jsxs(P1,{children:[m.jsxs(F1,{children:[m.jsx(zb,{size:14}),m.jsx(eS,{children:Qu(u.category,n)})]}),m.jsx(tS,{children:X}),m.jsx(nS,{children:Y}),m.jsxs(aS,{children:[m.jsx(iS,{children:n.work.technologies}),m.jsx(lS,{children:ne.map((le,P)=>m.jsx(rS,{children:le},P))})]}),m.jsx(oS,{children:m.jsxs(sS,{href:u.link,children:[n.work.viewProject,m.jsx(ab,{size:18})]})})]})]})]})})()]})},cS=Mi`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${j.motion.floatOffset}); }
`,fS=w.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,dS=w.div`
  position: absolute;
  top: ${({theme:n})=>n.spacing[10]};
  right: ${j.layout.aboutWatermarkOffsetX};
  font-size: ${j.layout.aboutWatermarkFontSize};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`,pS=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,hS=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,gS=w.div`
  position: relative;
`,mS=w.div`
  position: relative;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: ${({theme:n})=>n.shadows.card};
  border: ${({theme:n})=>n.spacing[2]} solid ${({theme:n})=>n.colors.white};

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div[data-overlay] {
    opacity: 1;
  }
`,yS=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,vS=w.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,bS=w.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${cS} 6s ease-in-out infinite;
  max-width: ${j.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,SS=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,xS=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,wS=w.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,$S=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,zS=w(Oc)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,OS=w.div`
  display: flex;
  flex-direction: column;
`,TS=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,AS=w.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,ES=w.span`
  font-style: italic;
`,_S=w(Oc)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,jS=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,MS=w.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,CS=w.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${j.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,kS=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,DS=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,Jg=w.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,Wg=w(Fv)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,Ig=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,RS=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${Jg} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${Wg} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${Ig} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,HS=()=>{const{t:n}=nn();return m.jsxs(fS,{id:en.ABOUT,children:[m.jsx(dS,{children:n.about.watermark}),m.jsx(pS,{children:m.jsxs(hS,{children:[m.jsxs(gS,{children:[m.jsxs(mS,{children:[m.jsx(yS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),m.jsx(vS,{"data-overlay":!0})]}),m.jsxs(bS,{children:[m.jsxs(SS,{children:[m.jsx(wb,{color:"#6366f1",fill:"#6366f1",size:16}),m.jsx(xS,{children:n.about.experience})]}),m.jsxs(wS,{children:["5+ ",m.jsx($S,{children:n.about.years})]}),m.jsx(zS,{element:"p",message:f=>f.about.experienceText})]})]}),m.jsxs(OS,{children:[m.jsx(TS,{children:n.about.discovery}),m.jsxs(AS,{children:[n.about.heading1," ",m.jsx(ES,{children:n.about.emphasis})," ",m.jsx("br",{})," ",n.about.heading2]}),m.jsx(_S,{element:"p",message:f=>f.about.bio}),m.jsx(jS,{children:m.jsxs("div",{children:[m.jsxs(MS,{children:[m.jsx(CS,{}),n.about.proficiencies]}),m.jsx(kS,{children:Zg.map((f,u)=>m.jsx(DS,{children:m.jsxs(RS,{children:[m.jsx(Jg,{children:m.jsx(Wg,{size:12})}),m.jsx(Ig,{children:jb(f,n)})]})},u))})]})})]})]})})]})},NS=w.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,US=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,LS=w.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,BS=w.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,qS=w.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,GS=w.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,YS=w.a`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[50]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.slate[500]};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({theme:n})=>n.colors.white};
    background: ${({theme:n})=>n.colors.slate[900]};
    transform: translateY(${j.motion.hoverLiftMd});
  }
`,XS=()=>{const{t:n}=nn(),o=f=>{switch(f){case"Twitter":return m.jsx(Tb,{size:20});case"Linkedin":return m.jsx(hb,{size:20});case"Dribbble":return m.jsx(tb,{size:20});case"Mail":return m.jsx(mb,{size:20});default:return null}};return m.jsx(NS,{children:m.jsxs(US,{children:[m.jsxs(LS,{children:[m.jsx(BS,{children:fo}),m.jsxs(qS,{children:["© ",new Date().getFullYear()," ",fo,". ",n.footer.rights]})]}),m.jsx(GS,{children:b1.map(f=>m.jsx(YS,{href:f.url,target:"_blank",rel:"noopener noreferrer","aria-label":f.name,children:o(f.icon)},f.name))})]})})};var Pe=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELACA="namelaca",n.MINDZY="mindzy",n.MARKETING_VIDEO="marketing-video",n))(Pe||{}),Zu={},Ku={},Al={},Ju={},Ih;function VS(){return Ih||(Ih=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(Ju)),Ju}var Wu,Ph;function QS(){if(Ph)return Wu;Ph=1;var n="Expected a function",o=NaN,f="[object Symbol]",u=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,C=/^0o[0-7]+$/i,Q=parseInt,G=typeof Fr=="object"&&Fr&&Fr.Object===Object&&Fr,$=typeof self=="object"&&self&&self.Object===Object&&self,X=G||$||Function("return this")(),Y=Object.prototype,ne=Y.toString,ue=Math.max,le=Math.min,P=function(){return X.Date.now()};function ve(z,O,S){var k,_,v,B,Z,R,J=0,ee=!1,E=!1,c=!0;if(typeof z!="function")throw new TypeError(n);O=se(O)||0,oe(S)&&(ee=!!S.leading,E="maxWait"in S,v=E?ue(se(S.maxWait)||0,O):v,c="trailing"in S?!!S.trailing:c);function ie(te){var ge=k,de=_;return k=_=void 0,J=te,B=z.apply(de,ge),B}function T(te){return J=te,Z=setTimeout(b,O),ee?ie(te):B}function d(te){var ge=te-R,de=te-J,Se=O-ge;return E?le(Se,v-de):Se}function p(te){var ge=te-R,de=te-J;return R===void 0||ge>=O||ge<0||E&&de>=v}function b(){var te=P();if(p(te))return U(te);Z=setTimeout(b,d(te))}function U(te){return Z=void 0,c&&k?ie(te):(k=_=void 0,B)}function D(){Z!==void 0&&clearTimeout(Z),J=0,k=R=_=Z=void 0}function W(){return Z===void 0?B:U(P())}function K(){var te=P(),ge=p(te);if(k=arguments,_=this,R=te,ge){if(Z===void 0)return T(R);if(E)return Z=setTimeout(b,O),ie(R)}return Z===void 0&&(Z=setTimeout(b,O)),B}return K.cancel=D,K.flush=W,K}function oe(z){var O=typeof z;return!!z&&(O=="object"||O=="function")}function he(z){return!!z&&typeof z=="object"}function ae(z){return typeof z=="symbol"||he(z)&&ne.call(z)==f}function se(z){if(typeof z=="number")return z;if(ae(z))return o;if(oe(z)){var O=typeof z.valueOf=="function"?z.valueOf():z;z=oe(O)?O+"":O}if(typeof z!="string")return z===0?z:+z;z=z.replace(u,"");var S=y.test(z);return S||C.test(z)?Q(z.slice(2),S?2:8):g.test(z)?o:+z}return Wu=ve,Wu}var Iu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Fh;function wo(){return Fh||(Fh=1,(function(n){(function(){var o={}.hasOwnProperty;function f(){for(var y="",C=0;C<arguments.length;C++){var Q=arguments[C];Q&&(y=g(y,u(Q)))}return y}function u(y){if(typeof y=="string"||typeof y=="number")return y;if(typeof y!="object")return"";if(Array.isArray(y))return f.apply(null,y);if(y.toString!==Object.prototype.toString&&!y.toString.toString().includes("[native code]"))return y.toString();var C="";for(var Q in y)o.call(y,Q)&&y[Q]&&(C=g(C,Q));return C}function g(y,C){return C?y?y+" "+C:y+C:y}n.exports?(f.default=f,n.exports=f):window.classNames=f})()})(Iu)),Iu.exports}var re={},Pu={},eg;function Pg(){return eg||(eg=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(mn());function f(g){return g&&g.__esModule?g:{default:g}}var u={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(y){return o.default.createElement("ul",{style:{display:"block"}},y)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(y){return o.default.createElement("button",null,y+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=u})(Pu)),Pu}var tg;function Rl(){if(tg)return re;tg=1,Object.defineProperty(re,"__esModule",{value:!0}),re.checkSpecKeys=re.checkNavigable=re.changeSlide=re.canUseDOM=re.canGoNext=void 0,re.clamp=$,re.extractObject=void 0,re.filterSettings=ie,re.validSettings=re.swipeStart=re.swipeMove=re.swipeEnd=re.slidesOnRight=re.slidesOnLeft=re.slideHandler=re.siblingDirection=re.safePreventDefault=re.lazyStartIndex=re.lazySlidesOnRight=re.lazySlidesOnLeft=re.lazyEndIndex=re.keyHandler=re.initializedState=re.getWidth=re.getTrackLeft=re.getTrackCSS=re.getTrackAnimateCSS=re.getTotalSlides=re.getSwipeDirection=re.getSlideCount=re.getRequiredLazySlides=re.getPreClones=re.getPostClones=re.getOnDemandLazySlides=re.getNavigableIndexes=re.getHeight=void 0;var n=f(mn()),o=f(Pg());function f(T){return T&&T.__esModule?T:{default:T}}function u(T){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},u(T)}function g(T,d){var p=Object.keys(T);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(T);d&&(b=b.filter(function(U){return Object.getOwnPropertyDescriptor(T,U).enumerable})),p.push.apply(p,b)}return p}function y(T){for(var d=1;d<arguments.length;d++){var p=arguments[d]!=null?arguments[d]:{};d%2?g(Object(p),!0).forEach(function(b){C(T,b,p[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(p)):g(Object(p)).forEach(function(b){Object.defineProperty(T,b,Object.getOwnPropertyDescriptor(p,b))})}return T}function C(T,d,p){return(d=Q(d))in T?Object.defineProperty(T,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[d]=p,T}function Q(T){var d=G(T,"string");return u(d)=="symbol"?d:d+""}function G(T,d){if(u(T)!="object"||!T)return T;var p=T[Symbol.toPrimitive];if(p!==void 0){var b=p.call(T,d);if(u(b)!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(T)}function $(T,d,p){return Math.max(d,Math.min(T,p))}var X=re.safePreventDefault=function(d){var p=["onTouchStart","onTouchMove","onWheel"];p.includes(d._reactName)||d.preventDefault()},Y=re.getOnDemandLazySlides=function(d){for(var p=[],b=ne(d),U=ue(d),D=b;D<U;D++)d.lazyLoadedList.indexOf(D)<0&&p.push(D);return p};re.getRequiredLazySlides=function(d){for(var p=[],b=ne(d),U=ue(d),D=b;D<U;D++)p.push(D);return p};var ne=re.lazyStartIndex=function(d){return d.currentSlide-le(d)},ue=re.lazyEndIndex=function(d){return d.currentSlide+P(d)},le=re.lazySlidesOnLeft=function(d){return d.centerMode?Math.floor(d.slidesToShow/2)+(parseInt(d.centerPadding)>0?1:0):0},P=re.lazySlidesOnRight=function(d){return d.centerMode?Math.floor((d.slidesToShow-1)/2)+1+(parseInt(d.centerPadding)>0?1:0):d.slidesToShow},ve=re.getWidth=function(d){return d&&d.offsetWidth||0},oe=re.getHeight=function(d){return d&&d.offsetHeight||0},he=re.getSwipeDirection=function(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b,U,D,W;return b=d.startX-d.curX,U=d.startY-d.curY,D=Math.atan2(U,b),W=Math.round(D*180/Math.PI),W<0&&(W=360-Math.abs(W)),W<=45&&W>=0||W<=360&&W>=315?"left":W>=135&&W<=225?"right":p===!0?W>=35&&W<=135?"up":"down":"vertical"},ae=re.canGoNext=function(d){var p=!0;return d.infinite||(d.centerMode&&d.currentSlide>=d.slideCount-1||d.slideCount<=d.slidesToShow||d.currentSlide>=d.slideCount-d.slidesToShow)&&(p=!1),p};re.extractObject=function(d,p){var b={};return p.forEach(function(U){return b[U]=d[U]}),b},re.initializedState=function(d){var p=n.default.Children.count(d.children),b=d.listRef,U=Math.ceil(ve(b)),D=d.trackRef&&d.trackRef.node,W=Math.ceil(ve(D)),K;if(d.vertical)K=U;else{var te=d.centerMode&&parseInt(d.centerPadding)*2;typeof d.centerPadding=="string"&&d.centerPadding.slice(-1)==="%"&&(te*=U/100),K=Math.ceil((U-te)/d.slidesToShow)}var ge=b&&oe(b.querySelector('[data-index="0"]')),de=ge*d.slidesToShow,Se=d.currentSlide===void 0?d.initialSlide:d.currentSlide;d.rtl&&d.currentSlide===void 0&&(Se=p-1-d.initialSlide);var Ae=d.lazyLoadedList||[],we=Y(y(y({},d),{},{currentSlide:Se,lazyLoadedList:Ae}));Ae=Ae.concat(we);var Ee={slideCount:p,slideWidth:K,listWidth:U,trackWidth:W,currentSlide:Se,slideHeight:ge,listHeight:de,lazyLoadedList:Ae};return d.autoplaying===null&&d.autoplay&&(Ee.autoplaying="playing"),Ee},re.slideHandler=function(d){var p=d.waitForAnimate,b=d.animating,U=d.fade,D=d.infinite,W=d.index,K=d.slideCount,te=d.lazyLoad,ge=d.currentSlide,de=d.centerMode,Se=d.slidesToScroll,Ae=d.slidesToShow,we=d.useCSS,Ee=d.lazyLoadedList;if(p&&b)return{};var be=W,ze,We,_e,Ie={},Fe={},nt=D?W:$(W,0,K-1);if(U){if(!D&&(W<0||W>=K))return{};W<0?be=W+K:W>=K&&(be=W-K),te&&Ee.indexOf(be)<0&&(Ee=Ee.concat(be)),Ie={animating:!0,currentSlide:be,lazyLoadedList:Ee,targetSlide:be},Fe={animating:!1,targetSlide:be}}else ze=be,be<0?(ze=be+K,D?K%Se!==0&&(ze=K-K%Se):ze=0):!ae(d)&&be>ge?be=ze=ge:de&&be>=K?(be=D?K:K-1,ze=D?0:K-1):be>=K&&(ze=be-K,D?K%Se!==0&&(ze=0):ze=K-Ae),!D&&be+Ae>=K&&(ze=K-Ae),We=v(y(y({},d),{},{slideIndex:be})),_e=v(y(y({},d),{},{slideIndex:ze})),D||(We===_e&&(be=ze),We=_e),te&&(Ee=Ee.concat(Y(y(y({},d),{},{currentSlide:be})))),we?(Ie={animating:!0,currentSlide:ze,trackStyle:_(y(y({},d),{},{left:We})),lazyLoadedList:Ee,targetSlide:nt},Fe={animating:!1,currentSlide:ze,trackStyle:k(y(y({},d),{},{left:_e})),swipeLeft:null,targetSlide:nt}):Ie={currentSlide:ze,trackStyle:k(y(y({},d),{},{left:_e})),lazyLoadedList:Ee,targetSlide:nt};return{state:Ie,nextState:Fe}},re.changeSlide=function(d,p){var b,U,D,W,K,te=d.slidesToScroll,ge=d.slidesToShow,de=d.slideCount,Se=d.currentSlide,Ae=d.targetSlide,we=d.lazyLoad,Ee=d.infinite;if(W=de%te!==0,b=W?0:(de-Se)%te,p.message==="previous")D=b===0?te:ge-b,K=Se-D,we&&!Ee&&(U=Se-D,K=U===-1?de-1:U),Ee||(K=Ae-te);else if(p.message==="next")D=b===0?te:b,K=Se+D,we&&!Ee&&(K=(Se+te)%de+b),Ee||(K=Ae+te);else if(p.message==="dots")K=p.index*p.slidesToScroll;else if(p.message==="children"){if(K=p.index,Ee){var be=J(y(y({},d),{},{targetSlide:K}));K>p.currentSlide&&be==="left"?K=K-de:K<p.currentSlide&&be==="right"&&(K=K+de)}}else p.message==="index"&&(K=Number(p.index));return K},re.keyHandler=function(d,p,b){return d.target.tagName.match("TEXTAREA|INPUT|SELECT")||!p?"":d.keyCode===37?b?"next":"previous":d.keyCode===39?b?"previous":"next":""},re.swipeStart=function(d,p,b){return d.target.tagName==="IMG"&&X(d),!p||!b&&d.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:d.touches?d.touches[0].pageX:d.clientX,startY:d.touches?d.touches[0].pageY:d.clientY,curX:d.touches?d.touches[0].pageX:d.clientX,curY:d.touches?d.touches[0].pageY:d.clientY}}},re.swipeMove=function(d,p){var b=p.scrolling,U=p.animating,D=p.vertical,W=p.swipeToSlide,K=p.verticalSwiping,te=p.rtl,ge=p.currentSlide,de=p.edgeFriction,Se=p.edgeDragged,Ae=p.onEdge,we=p.swiped,Ee=p.swiping,be=p.slideCount,ze=p.slidesToScroll,We=p.infinite,_e=p.touchObject,Ie=p.swipeEvent,Fe=p.listHeight,nt=p.listWidth;if(!b){if(U)return X(d);D&&W&&K&&X(d);var vt,yn={},Ha=v(p);_e.curX=d.touches?d.touches[0].pageX:d.clientX,_e.curY=d.touches?d.touches[0].pageY:d.clientY,_e.swipeLength=Math.round(Math.sqrt(Math.pow(_e.curX-_e.startX,2)));var zt=Math.round(Math.sqrt(Math.pow(_e.curY-_e.startY,2)));if(!K&&!Ee&&zt>10)return{scrolling:!0};K&&(_e.swipeLength=zt);var fa=(te?-1:1)*(_e.curX>_e.startX?1:-1);K&&(fa=_e.curY>_e.startY?1:-1);var Hl=Math.ceil(be/ze),an=he(p.touchObject,K),cn=_e.swipeLength;return We||(ge===0&&(an==="right"||an==="down")||ge+1>=Hl&&(an==="left"||an==="up")||!ae(p)&&(an==="left"||an==="up"))&&(cn=_e.swipeLength*de,Se===!1&&Ae&&(Ae(an),yn.edgeDragged=!0)),!we&&Ie&&(Ie(an),yn.swiped=!0),D?vt=Ha+cn*(Fe/nt)*fa:te?vt=Ha-cn*fa:vt=Ha+cn*fa,K&&(vt=Ha+cn*fa),yn=y(y({},yn),{},{touchObject:_e,swipeLeft:vt,trackStyle:k(y(y({},p),{},{left:vt}))}),Math.abs(_e.curX-_e.startX)<Math.abs(_e.curY-_e.startY)*.8||_e.swipeLength>10&&(yn.swiping=!0,X(d)),yn}},re.swipeEnd=function(d,p){var b=p.dragging,U=p.swipe,D=p.touchObject,W=p.listWidth,K=p.touchThreshold,te=p.verticalSwiping,ge=p.listHeight,de=p.swipeToSlide,Se=p.scrolling,Ae=p.onSwipe,we=p.targetSlide,Ee=p.currentSlide,be=p.infinite;if(!b)return U&&X(d),{};var ze=te?ge/K:W/K,We=he(D,te),_e={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!D.swipeLength)return _e;if(D.swipeLength>ze){X(d),Ae&&Ae(We);var Ie,Fe,nt=be?Ee:we;switch(We){case"left":case"up":Fe=nt+O(p),Ie=de?z(p,Fe):Fe,_e.currentDirection=0;break;case"right":case"down":Fe=nt-O(p),Ie=de?z(p,Fe):Fe,_e.currentDirection=1;break;default:Ie=nt}_e.triggerSlideHandler=Ie}else{var vt=v(p);_e.trackStyle=_(y(y({},p),{},{left:vt}))}return _e};var se=re.getNavigableIndexes=function(d){for(var p=d.infinite?d.slideCount*2:d.slideCount,b=d.infinite?d.slidesToShow*-1:0,U=d.infinite?d.slidesToShow*-1:0,D=[];b<p;)D.push(b),b=U+d.slidesToScroll,U+=Math.min(d.slidesToScroll,d.slidesToShow);return D},z=re.checkNavigable=function(d,p){var b=se(d),U=0;if(p>b[b.length-1])p=b[b.length-1];else for(var D in b){if(p<b[D]){p=U;break}U=b[D]}return p},O=re.getSlideCount=function(d){var p=d.centerMode?d.slideWidth*Math.floor(d.slidesToShow/2):0;if(d.swipeToSlide){var b,U=d.listRef,D=U.querySelectorAll&&U.querySelectorAll(".slick-slide")||[];if(Array.from(D).every(function(te){if(d.vertical){if(te.offsetTop+oe(te)/2>d.swipeLeft*-1)return b=te,!1}else if(te.offsetLeft-p+ve(te)/2>d.swipeLeft*-1)return b=te,!1;return!0}),!b)return 0;var W=d.rtl===!0?d.slideCount-d.currentSlide:d.currentSlide,K=Math.abs(b.dataset.index-W)||1;return K}else return d.slidesToScroll},S=re.checkSpecKeys=function(d,p){return p.reduce(function(b,U){return b&&d.hasOwnProperty(U)},!0)?null:console.error("Keys Missing:",d)},k=re.getTrackCSS=function(d){S(d,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var p,b;if(!d.vertical)p=R(d)*d.slideWidth;else{var U=d.unslick?d.slideCount:d.slideCount+2*d.slidesToShow;b=U*d.slideHeight}var D={opacity:1,transition:"",WebkitTransition:""};if(d.useTransform){var W=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",K=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",te=d.vertical?"translateY("+d.left+"px)":"translateX("+d.left+"px)";D=y(y({},D),{},{WebkitTransform:W,transform:K,msTransform:te})}else d.vertical?D.top=d.left:D.left=d.left;return d.fade&&(D={opacity:1}),p&&(D.width=p),b&&(D.height=b),window&&!window.addEventListener&&window.attachEvent&&(d.vertical?D.marginTop=d.left+"px":D.marginLeft=d.left+"px"),D},_=re.getTrackAnimateCSS=function(d){S(d,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var p=k(d);return d.useTransform?(p.WebkitTransition="-webkit-transform "+d.speed+"ms "+d.cssEase,p.transition="transform "+d.speed+"ms "+d.cssEase):d.vertical?p.transition="top "+d.speed+"ms "+d.cssEase:p.transition="left "+d.speed+"ms "+d.cssEase,p},v=re.getTrackLeft=function(d){if(d.unslick)return 0;S(d,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var p=d.slideIndex,b=d.trackRef,U=d.infinite,D=d.centerMode,W=d.slideCount,K=d.slidesToShow,te=d.slidesToScroll,ge=d.slideWidth,de=d.listWidth,Se=d.variableWidth,Ae=d.slideHeight,we=d.fade,Ee=d.vertical,be=0,ze,We,_e=0;if(we||d.slideCount===1)return 0;var Ie=0;if(U?(Ie=-B(d),W%te!==0&&p+te>W&&(Ie=-(p>W?K-(p-W):W%te)),D&&(Ie+=parseInt(K/2))):(W%te!==0&&p+te>W&&(Ie=K-W%te),D&&(Ie=parseInt(K/2))),be=Ie*ge,_e=Ie*Ae,Ee?ze=p*Ae*-1+_e:ze=p*ge*-1+be,Se===!0){var Fe,nt=b&&b.node;if(Fe=p+B(d),We=nt&&nt.childNodes[Fe],ze=We?We.offsetLeft*-1:0,D===!0){Fe=U?p+B(d):p,We=nt&&nt.children[Fe],ze=0;for(var vt=0;vt<Fe;vt++)ze-=nt&&nt.children[vt]&&nt.children[vt].offsetWidth;ze-=parseInt(d.centerPadding),ze+=We&&(de-We.offsetWidth)/2}}return ze},B=re.getPreClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},Z=re.getPostClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},R=re.getTotalSlides=function(d){return d.slideCount===1?1:B(d)+d.slideCount+Z(d)},J=re.siblingDirection=function(d){return d.targetSlide>d.currentSlide?d.targetSlide>d.currentSlide+ee(d)?"left":"right":d.targetSlide<d.currentSlide-E(d)?"right":"left"},ee=re.slidesOnRight=function(d){var p=d.slidesToShow,b=d.centerMode,U=d.rtl,D=d.centerPadding;if(b){var W=(p-1)/2+1;return parseInt(D)>0&&(W+=1),U&&p%2===0&&(W+=1),W}return U?0:p-1},E=re.slidesOnLeft=function(d){var p=d.slidesToShow,b=d.centerMode,U=d.rtl,D=d.centerPadding;if(b){var W=(p-1)/2+1;return parseInt(D)>0&&(W+=1),!U&&p%2===0&&(W+=1),W}return U?p-1:0};re.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var c=re.validSettings=Object.keys(o.default);function ie(T){return c.reduce(function(d,p){return T.hasOwnProperty(p)&&(d[p]=T[p]),d},{})}return re}var El={},ng;function ZS(){if(ng)return El;ng=1,Object.defineProperty(El,"__esModule",{value:!0}),El.Track=void 0;var n=u(mn()),o=u(wo()),f=Rl();function u(_){return _&&_.__esModule?_:{default:_}}function g(_){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},g(_)}function y(){return y=Object.assign?Object.assign.bind():function(_){for(var v=1;v<arguments.length;v++){var B=arguments[v];for(var Z in B)({}).hasOwnProperty.call(B,Z)&&(_[Z]=B[Z])}return _},y.apply(null,arguments)}function C(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function Q(_,v){for(var B=0;B<v.length;B++){var Z=v[B];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(_,ae(Z.key),Z)}}function G(_,v,B){return v&&Q(_.prototype,v),Object.defineProperty(_,"prototype",{writable:!1}),_}function $(_,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(v&&v.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),v&&X(_,v)}function X(_,v){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(B,Z){return B.__proto__=Z,B},X(_,v)}function Y(_){var v=le();return function(){var B,Z=P(_);if(v){var R=P(this).constructor;B=Reflect.construct(Z,arguments,R)}else B=Z.apply(this,arguments);return ne(this,B)}}function ne(_,v){if(v&&(g(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(_)}function ue(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function le(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!_})()}function P(_){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},P(_)}function ve(_,v){var B=Object.keys(_);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(_);v&&(Z=Z.filter(function(R){return Object.getOwnPropertyDescriptor(_,R).enumerable})),B.push.apply(B,Z)}return B}function oe(_){for(var v=1;v<arguments.length;v++){var B=arguments[v]!=null?arguments[v]:{};v%2?ve(Object(B),!0).forEach(function(Z){he(_,Z,B[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(B)):ve(Object(B)).forEach(function(Z){Object.defineProperty(_,Z,Object.getOwnPropertyDescriptor(B,Z))})}return _}function he(_,v,B){return(v=ae(v))in _?Object.defineProperty(_,v,{value:B,enumerable:!0,configurable:!0,writable:!0}):_[v]=B,_}function ae(_){var v=se(_,"string");return g(v)=="symbol"?v:v+""}function se(_,v){if(g(_)!="object"||!_)return _;var B=_[Symbol.toPrimitive];if(B!==void 0){var Z=B.call(_,v);if(g(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(_)}var z=function(v){var B,Z,R,J,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,R=ee<0||ee>=v.slideCount,v.centerMode?(J=Math.floor(v.slidesToShow/2),Z=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-J-1&&ee<=v.currentSlide+J&&(B=!0)):B=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var E;v.targetSlide<0?E=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?E=v.targetSlide-v.slideCount:E=v.targetSlide;var c=ee===E;return{"slick-slide":!0,"slick-active":B,"slick-center":Z,"slick-cloned":R,"slick-current":c}},O=function(v){var B={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(B.width=v.slideWidth),v.fade&&(B.position="relative",v.vertical?B.top=-v.index*parseInt(v.slideHeight):B.left=-v.index*parseInt(v.slideWidth),B.opacity=v.currentSlide===v.index?1:0,B.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(B.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),B},S=function(v,B){return v.key||B},k=function(v){var B,Z=[],R=[],J=[],ee=n.default.Children.count(v.children),E=(0,f.lazyStartIndex)(v),c=(0,f.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ie,T){var d,p={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?d=ie:d=n.default.createElement("div",null);var b=O(oe(oe({},v),{},{index:T})),U=d.props.className||"",D=z(oe(oe({},v),{},{index:T}));if(Z.push(n.default.cloneElement(d,{key:"original"+S(d,T),"data-index":T,className:(0,o.default)(D,U),tabIndex:"-1","aria-hidden":!D["slick-active"],style:oe(oe({outline:"none"},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var W=ee-T;W<=(0,f.getPreClones)(v)&&(B=-W,B>=E&&(d=ie),D=z(oe(oe({},v),{},{index:B})),R.push(n.default.cloneElement(d,{key:"precloned"+S(d,B),"data-index":B,tabIndex:"-1",className:(0,o.default)(D,U),"aria-hidden":!D["slick-active"],style:oe(oe({},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}}))),T<(0,f.getPostClones)(v)&&(B=ee+T,B<c&&(d=ie),D=z(oe(oe({},v),{},{index:B})),J.push(n.default.cloneElement(d,{key:"postcloned"+S(d,B),"data-index":B,tabIndex:"-1",className:(0,o.default)(D,U),"aria-hidden":!D["slick-active"],style:oe(oe({},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})))}}),v.rtl?R.concat(Z,J).reverse():R.concat(Z,J)};return El.Track=(function(_){$(B,_);var v=Y(B);function B(){var Z;C(this,B);for(var R=arguments.length,J=new Array(R),ee=0;ee<R;ee++)J[ee]=arguments[ee];return Z=v.call.apply(v,[this].concat(J)),he(ue(Z),"node",null),he(ue(Z),"handleRef",function(E){Z.node=E}),Z}return G(B,[{key:"render",value:function(){var R=k(this.props),J=this.props,ee=J.onMouseEnter,E=J.onMouseOver,c=J.onMouseLeave,ie={onMouseEnter:ee,onMouseOver:E,onMouseLeave:c};return n.default.createElement("div",y({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ie),R)}}]),B})(n.default.PureComponent),El}var _l={},ag;function KS(){if(ag)return _l;ag=1;function n(z){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},n(z)}Object.defineProperty(_l,"__esModule",{value:!0}),_l.Dots=void 0;var o=g(mn()),f=g(wo()),u=Rl();function g(z){return z&&z.__esModule?z:{default:z}}function y(z,O){var S=Object.keys(z);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(z);O&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(z,_).enumerable})),S.push.apply(S,k)}return S}function C(z){for(var O=1;O<arguments.length;O++){var S=arguments[O]!=null?arguments[O]:{};O%2?y(Object(S),!0).forEach(function(k){Q(z,k,S[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(S)):y(Object(S)).forEach(function(k){Object.defineProperty(z,k,Object.getOwnPropertyDescriptor(S,k))})}return z}function Q(z,O,S){return(O=Y(O))in z?Object.defineProperty(z,O,{value:S,enumerable:!0,configurable:!0,writable:!0}):z[O]=S,z}function G(z,O){if(!(z instanceof O))throw new TypeError("Cannot call a class as a function")}function $(z,O){for(var S=0;S<O.length;S++){var k=O[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(z,Y(k.key),k)}}function X(z,O,S){return O&&$(z.prototype,O),Object.defineProperty(z,"prototype",{writable:!1}),z}function Y(z){var O=ne(z,"string");return n(O)=="symbol"?O:O+""}function ne(z,O){if(n(z)!="object"||!z)return z;var S=z[Symbol.toPrimitive];if(S!==void 0){var k=S.call(z,O);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(z)}function ue(z,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(O&&O.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),O&&le(z,O)}function le(z,O){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,k){return S.__proto__=k,S},le(z,O)}function P(z){var O=he();return function(){var S,k=ae(z);if(O){var _=ae(this).constructor;S=Reflect.construct(k,arguments,_)}else S=k.apply(this,arguments);return ve(this,S)}}function ve(z,O){if(O&&(n(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oe(z)}function oe(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function he(){try{var z=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(he=function(){return!!z})()}function ae(z){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},ae(z)}var se=function(O){var S;return O.infinite?S=Math.ceil(O.slideCount/O.slidesToScroll):S=Math.ceil((O.slideCount-O.slidesToShow)/O.slidesToScroll)+1,S};return _l.Dots=(function(z){ue(S,z);var O=P(S);function S(){return G(this,S),O.apply(this,arguments)}return X(S,[{key:"clickHandler",value:function(_,v){v.preventDefault(),this.props.clickHandler(_)}},{key:"render",value:function(){for(var _=this.props,v=_.onMouseEnter,B=_.onMouseOver,Z=_.onMouseLeave,R=_.infinite,J=_.slidesToScroll,ee=_.slidesToShow,E=_.slideCount,c=_.currentSlide,ie=se({slideCount:E,slidesToScroll:J,slidesToShow:ee,infinite:R}),T={onMouseEnter:v,onMouseOver:B,onMouseLeave:Z},d=[],p=0;p<ie;p++){var b=(p+1)*J-1,U=R?b:(0,u.clamp)(b,0,E-1),D=U-(J-1),W=R?D:(0,u.clamp)(D,0,E-1),K=(0,f.default)({"slick-active":R?c>=W&&c<=U:c===W}),te={message:"dots",index:p,slidesToScroll:J,currentSlide:c},ge=this.clickHandler.bind(this,te);d=d.concat(o.default.createElement("li",{key:p,className:K},o.default.cloneElement(this.props.customPaging(p),{onClick:ge})))}return o.default.cloneElement(this.props.appendDots(d),C({className:this.props.dotsClass},T))}}]),S})(o.default.PureComponent),_l}var ja={},ig;function JS(){if(ig)return ja;ig=1;function n(z){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},n(z)}Object.defineProperty(ja,"__esModule",{value:!0}),ja.PrevArrow=ja.NextArrow=void 0;var o=g(mn()),f=g(wo()),u=Rl();function g(z){return z&&z.__esModule?z:{default:z}}function y(){return y=Object.assign?Object.assign.bind():function(z){for(var O=1;O<arguments.length;O++){var S=arguments[O];for(var k in S)({}).hasOwnProperty.call(S,k)&&(z[k]=S[k])}return z},y.apply(null,arguments)}function C(z,O){var S=Object.keys(z);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(z);O&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(z,_).enumerable})),S.push.apply(S,k)}return S}function Q(z){for(var O=1;O<arguments.length;O++){var S=arguments[O]!=null?arguments[O]:{};O%2?C(Object(S),!0).forEach(function(k){G(z,k,S[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(S)):C(Object(S)).forEach(function(k){Object.defineProperty(z,k,Object.getOwnPropertyDescriptor(S,k))})}return z}function G(z,O,S){return(O=ne(O))in z?Object.defineProperty(z,O,{value:S,enumerable:!0,configurable:!0,writable:!0}):z[O]=S,z}function $(z,O){if(!(z instanceof O))throw new TypeError("Cannot call a class as a function")}function X(z,O){for(var S=0;S<O.length;S++){var k=O[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(z,ne(k.key),k)}}function Y(z,O,S){return O&&X(z.prototype,O),Object.defineProperty(z,"prototype",{writable:!1}),z}function ne(z){var O=ue(z,"string");return n(O)=="symbol"?O:O+""}function ue(z,O){if(n(z)!="object"||!z)return z;var S=z[Symbol.toPrimitive];if(S!==void 0){var k=S.call(z,O);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(z)}function le(z,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(O&&O.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),O&&P(z,O)}function P(z,O){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,k){return S.__proto__=k,S},P(z,O)}function ve(z){var O=ae();return function(){var S,k=se(z);if(O){var _=se(this).constructor;S=Reflect.construct(k,arguments,_)}else S=k.apply(this,arguments);return oe(this,S)}}function oe(z,O){if(O&&(n(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return he(z)}function he(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function ae(){try{var z=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!z})()}function se(z){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},se(z)}return ja.PrevArrow=(function(z){le(S,z);var O=ve(S);function S(){return $(this,S),O.apply(this,arguments)}return Y(S,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(_["slick-disabled"]=!0,v=null);var B={key:"0","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.prevArrow?R=o.default.cloneElement(this.props.prevArrow,Q(Q({},B),Z)):R=o.default.createElement("button",y({key:"0",type:"button"},B)," ","Previous"),R}}]),S})(o.default.PureComponent),ja.NextArrow=(function(z){le(S,z);var O=ve(S);function S(){return $(this,S),O.apply(this,arguments)}return Y(S,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,u.canGoNext)(this.props)||(_["slick-disabled"]=!0,v=null);var B={key:"1","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.nextArrow?R=o.default.cloneElement(this.props.nextArrow,Q(Q({},B),Z)):R=o.default.createElement("button",y({key:"1",type:"button"},B)," ","Next"),R}}]),S})(o.default.PureComponent),ja}var Fg=(function(){if(typeof Map<"u")return Map;function n(o,f){var u=-1;return o.some(function(g,y){return g[0]===f?(u=y,!0):!1}),u}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(f){var u=n(this.__entries__,f),g=this.__entries__[u];return g&&g[1]},o.prototype.set=function(f,u){var g=n(this.__entries__,f);~g?this.__entries__[g][1]=u:this.__entries__.push([f,u])},o.prototype.delete=function(f){var u=this.__entries__,g=n(u,f);~g&&u.splice(g,1)},o.prototype.has=function(f){return!!~n(this.__entries__,f)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(f,u){u===void 0&&(u=null);for(var g=0,y=this.__entries__;g<y.length;g++){var C=y[g];f.call(u,C[1],C[0])}},o})()})(),gc=typeof window<"u"&&typeof document<"u"&&window.document===document,ho=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),WS=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ho):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),IS=2;function PS(n,o){var f=!1,u=!1,g=0;function y(){f&&(f=!1,n()),u&&Q()}function C(){WS(y)}function Q(){var G=Date.now();if(f){if(G-g<IS)return;u=!0}else f=!0,u=!1,setTimeout(C,o);g=G}return Q}var FS=20,ex=["top","right","bottom","left","width","height","size","weight"],tx=typeof MutationObserver<"u",nx=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=PS(this.refresh.bind(this),FS)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var f=this.observers_,u=f.indexOf(o);~u&&f.splice(u,1),!f.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(f){return f.gatherActive(),f.hasActive()});return o.forEach(function(f){return f.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!gc||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),tx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!gc||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var f=o.propertyName,u=f===void 0?"":f,g=ex.some(function(y){return!!~u.indexOf(y)});g&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),em=(function(n,o){for(var f=0,u=Object.keys(o);f<u.length;f++){var g=u[f];Object.defineProperty(n,g,{value:o[g],enumerable:!1,writable:!1,configurable:!0})}return n}),_i=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||ho}),tm=$o(0,0,0,0);function go(n){return parseFloat(n)||0}function lg(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return o.reduce(function(u,g){var y=n["border-"+g+"-width"];return u+go(y)},0)}function ax(n){for(var o=["top","right","bottom","left"],f={},u=0,g=o;u<g.length;u++){var y=g[u],C=n["padding-"+y];f[y]=go(C)}return f}function ix(n){var o=n.getBBox();return $o(0,0,o.width,o.height)}function lx(n){var o=n.clientWidth,f=n.clientHeight;if(!o&&!f)return tm;var u=_i(n).getComputedStyle(n),g=ax(u),y=g.left+g.right,C=g.top+g.bottom,Q=go(u.width),G=go(u.height);if(u.boxSizing==="border-box"&&(Math.round(Q+y)!==o&&(Q-=lg(u,"left","right")+y),Math.round(G+C)!==f&&(G-=lg(u,"top","bottom")+C)),!ox(n)){var $=Math.round(Q+y)-o,X=Math.round(G+C)-f;Math.abs($)!==1&&(Q-=$),Math.abs(X)!==1&&(G-=X)}return $o(g.left,g.top,Q,G)}var rx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof _i(n).SVGGraphicsElement}:function(n){return n instanceof _i(n).SVGElement&&typeof n.getBBox=="function"}})();function ox(n){return n===_i(n).document.documentElement}function sx(n){return gc?rx(n)?ix(n):lx(n):tm}function ux(n){var o=n.x,f=n.y,u=n.width,g=n.height,y=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,C=Object.create(y.prototype);return em(C,{x:o,y:f,width:u,height:g,top:f,right:o+u,bottom:g+f,left:o}),C}function $o(n,o,f,u){return{x:n,y:o,width:f,height:u}}var cx=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=$o(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=sx(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),fx=(function(){function n(o,f){var u=ux(f);em(this,{target:o,contentRect:u})}return n})(),dx=(function(){function n(o,f,u){if(this.activeObservations_=[],this.observations_=new Fg,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=f,this.callbackCtx_=u}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof _i(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)||(f.set(o,new cx(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof _i(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)&&(f.delete(o),f.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(f){f.isActive()&&o.activeObservations_.push(f)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,f=this.activeObservations_.map(function(u){return new fx(u.target,u.broadcastRect())});this.callback_.call(o,f,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),nm=typeof WeakMap<"u"?new WeakMap:new Fg,am=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var f=nx.getInstance(),u=new dx(o,f,this);nm.set(this,u)}return n})();["observe","unobserve","disconnect"].forEach(function(n){am.prototype[n]=function(){var o;return(o=nm.get(this))[n].apply(o,arguments)}});var px=(function(){return typeof ho.ResizeObserver<"u"?ho.ResizeObserver:am})();const hx=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),gx=A0(hx);var rg;function mx(){if(rg)return Al;rg=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.InnerSlider=void 0;var n=$(mn()),o=$(VS()),f=$(QS()),u=$(wo()),g=Rl(),y=ZS(),C=KS(),Q=JS(),G=$(gx);function $(R){return R&&R.__esModule?R:{default:R}}function X(R){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(J){return typeof J}:function(J){return J&&typeof Symbol=="function"&&J.constructor===Symbol&&J!==Symbol.prototype?"symbol":typeof J},X(R)}function Y(){return Y=Object.assign?Object.assign.bind():function(R){for(var J=1;J<arguments.length;J++){var ee=arguments[J];for(var E in ee)({}).hasOwnProperty.call(ee,E)&&(R[E]=ee[E])}return R},Y.apply(null,arguments)}function ne(R,J){if(R==null)return{};var ee,E,c=ue(R,J);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(E=0;E<ie.length;E++)ee=ie[E],J.includes(ee)||{}.propertyIsEnumerable.call(R,ee)&&(c[ee]=R[ee])}return c}function ue(R,J){if(R==null)return{};var ee={};for(var E in R)if({}.hasOwnProperty.call(R,E)){if(J.includes(E))continue;ee[E]=R[E]}return ee}function le(R,J){var ee=Object.keys(R);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(R);J&&(E=E.filter(function(c){return Object.getOwnPropertyDescriptor(R,c).enumerable})),ee.push.apply(ee,E)}return ee}function P(R){for(var J=1;J<arguments.length;J++){var ee=arguments[J]!=null?arguments[J]:{};J%2?le(Object(ee),!0).forEach(function(E){v(R,E,ee[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(ee)):le(Object(ee)).forEach(function(E){Object.defineProperty(R,E,Object.getOwnPropertyDescriptor(ee,E))})}return R}function ve(R,J){if(!(R instanceof J))throw new TypeError("Cannot call a class as a function")}function oe(R,J){for(var ee=0;ee<J.length;ee++){var E=J[ee];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(R,B(E.key),E)}}function he(R,J,ee){return J&&oe(R.prototype,J),Object.defineProperty(R,"prototype",{writable:!1}),R}function ae(R,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(J&&J.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),J&&se(R,J)}function se(R,J){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,E){return ee.__proto__=E,ee},se(R,J)}function z(R){var J=k();return function(){var ee,E=_(R);if(J){var c=_(this).constructor;ee=Reflect.construct(E,arguments,c)}else ee=E.apply(this,arguments);return O(this,ee)}}function O(R,J){if(J&&(X(J)=="object"||typeof J=="function"))return J;if(J!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(R)}function S(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function k(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!R})()}function _(R){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(J){return J.__proto__||Object.getPrototypeOf(J)},_(R)}function v(R,J,ee){return(J=B(J))in R?Object.defineProperty(R,J,{value:ee,enumerable:!0,configurable:!0,writable:!0}):R[J]=ee,R}function B(R){var J=Z(R,"string");return X(J)=="symbol"?J:J+""}function Z(R,J){if(X(R)!="object"||!R)return R;var ee=R[Symbol.toPrimitive];if(ee!==void 0){var E=ee.call(R,J);if(X(E)!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return(J==="string"?String:Number)(R)}return Al.InnerSlider=(function(R){ae(ee,R);var J=z(ee);function ee(E){var c;ve(this,ee),c=J.call(this,E),v(S(c),"listRefHandler",function(T){return c.list=T}),v(S(c),"trackRefHandler",function(T){return c.track=T}),v(S(c),"adaptHeight",function(){if(c.props.adaptiveHeight&&c.list){var T=c.list.querySelector('[data-index="'.concat(c.state.currentSlide,'"]'));c.list.style.height=(0,g.getHeight)(T)+"px"}}),v(S(c),"componentDidMount",function(){if(c.props.onInit&&c.props.onInit(),c.props.lazyLoad){var T=(0,g.getOnDemandLazySlides)(P(P({},c.props),c.state));T.length>0&&(c.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(T)}}),c.props.onLazyLoad&&c.props.onLazyLoad(T))}var d=P({listRef:c.list,trackRef:c.track},c.props);c.updateState(d,!0,function(){c.adaptHeight(),c.props.autoplay&&c.autoPlay("update")}),c.props.lazyLoad==="progressive"&&(c.lazyLoadTimer=setInterval(c.progressiveLazyLoad,1e3)),c.ro=new G.default(function(){c.state.animating?(c.onWindowResized(!1),c.callbackTimers.push(setTimeout(function(){return c.onWindowResized()},c.props.speed))):c.onWindowResized()}),c.ro.observe(c.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(p){p.onfocus=c.props.pauseOnFocus?c.onSlideFocus:null,p.onblur=c.props.pauseOnFocus?c.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",c.onWindowResized):window.attachEvent("onresize",c.onWindowResized)}),v(S(c),"componentWillUnmount",function(){c.animationEndCallback&&clearTimeout(c.animationEndCallback),c.lazyLoadTimer&&clearInterval(c.lazyLoadTimer),c.callbackTimers.length&&(c.callbackTimers.forEach(function(T){return clearTimeout(T)}),c.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",c.onWindowResized):window.detachEvent("onresize",c.onWindowResized),c.autoplayTimer&&clearInterval(c.autoplayTimer),c.ro.disconnect()}),v(S(c),"componentDidUpdate",function(T){if(c.checkImagesLoad(),c.props.onReInit&&c.props.onReInit(),c.props.lazyLoad){var d=(0,g.getOnDemandLazySlides)(P(P({},c.props),c.state));d.length>0&&(c.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(d)}}),c.props.onLazyLoad&&c.props.onLazyLoad(d))}c.adaptHeight();var p=P(P({listRef:c.list,trackRef:c.track},c.props),c.state),b=c.didPropsChange(T);b&&c.updateState(p,b,function(){c.state.currentSlide>=n.default.Children.count(c.props.children)&&c.changeSlide({message:"index",index:n.default.Children.count(c.props.children)-c.props.slidesToShow,currentSlide:c.state.currentSlide}),c.props.autoplay?c.autoPlay("update"):c.pause("paused")})}),v(S(c),"onWindowResized",function(T){c.debouncedResize&&c.debouncedResize.cancel(),c.debouncedResize=(0,f.default)(function(){return c.resizeWindow(T)},50),c.debouncedResize()}),v(S(c),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,d=!!(c.track&&c.track.node);if(d){var p=P(P({listRef:c.list,trackRef:c.track},c.props),c.state);c.updateState(p,T,function(){c.props.autoplay?c.autoPlay("update"):c.pause("paused")}),c.setState({animating:!1}),clearTimeout(c.animationEndCallback),delete c.animationEndCallback}}),v(S(c),"updateState",function(T,d,p){var b=(0,g.initializedState)(T);T=P(P(P({},T),b),{},{slideIndex:b.currentSlide});var U=(0,g.getTrackLeft)(T);T=P(P({},T),{},{left:U});var D=(0,g.getTrackCSS)(T);(d||n.default.Children.count(c.props.children)!==n.default.Children.count(T.children))&&(b.trackStyle=D),c.setState(b,p)}),v(S(c),"ssrInit",function(){if(c.props.variableWidth){var T=0,d=0,p=[],b=(0,g.getPreClones)(P(P(P({},c.props),c.state),{},{slideCount:c.props.children.length})),U=(0,g.getPostClones)(P(P(P({},c.props),c.state),{},{slideCount:c.props.children.length}));c.props.children.forEach(function(We){p.push(We.props.style.width),T+=We.props.style.width});for(var D=0;D<b;D++)d+=p[p.length-1-D],T+=p[p.length-1-D];for(var W=0;W<U;W++)T+=p[W];for(var K=0;K<c.state.currentSlide;K++)d+=p[K];var te={width:T+"px",left:-d+"px"};if(c.props.centerMode){var ge="".concat(p[c.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(ge,") / 2 ) ")}return{trackStyle:te}}var de=n.default.Children.count(c.props.children),Se=P(P(P({},c.props),c.state),{},{slideCount:de}),Ae=(0,g.getPreClones)(Se)+(0,g.getPostClones)(Se)+de,we=100/c.props.slidesToShow*Ae,Ee=100/Ae,be=-Ee*((0,g.getPreClones)(Se)+c.state.currentSlide)*we/100;c.props.centerMode&&(be+=(100-Ee*we/100)/2);var ze={width:we+"%",left:be+"%"};return{slideWidth:Ee+"%",trackStyle:ze}}),v(S(c),"checkImagesLoad",function(){var T=c.list&&c.list.querySelectorAll&&c.list.querySelectorAll(".slick-slide img")||[],d=T.length,p=0;Array.prototype.forEach.call(T,function(b){var U=function(){return++p&&p>=d&&c.onWindowResized()};if(!b.onclick)b.onclick=function(){return b.parentNode.focus()};else{var D=b.onclick;b.onclick=function(W){D(W),b.parentNode.focus()}}b.onload||(c.props.lazyLoad?b.onload=function(){c.adaptHeight(),c.callbackTimers.push(setTimeout(c.onWindowResized,c.props.speed))}:(b.onload=U,b.onerror=function(){U(),c.props.onLazyLoadError&&c.props.onLazyLoadError()}))})}),v(S(c),"progressiveLazyLoad",function(){for(var T=[],d=P(P({},c.props),c.state),p=c.state.currentSlide;p<c.state.slideCount+(0,g.getPostClones)(d);p++)if(c.state.lazyLoadedList.indexOf(p)<0){T.push(p);break}for(var b=c.state.currentSlide-1;b>=-(0,g.getPreClones)(d);b--)if(c.state.lazyLoadedList.indexOf(b)<0){T.push(b);break}T.length>0?(c.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(T)}}),c.props.onLazyLoad&&c.props.onLazyLoad(T)):c.lazyLoadTimer&&(clearInterval(c.lazyLoadTimer),delete c.lazyLoadTimer)}),v(S(c),"slideHandler",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=c.props,b=p.asNavFor,U=p.beforeChange,D=p.onLazyLoad,W=p.speed,K=p.afterChange,te=c.state.currentSlide,ge=(0,g.slideHandler)(P(P(P({index:T},c.props),c.state),{},{trackRef:c.track,useCSS:c.props.useCSS&&!d})),de=ge.state,Se=ge.nextState;if(de){U&&U(te,de.currentSlide);var Ae=de.lazyLoadedList.filter(function(we){return c.state.lazyLoadedList.indexOf(we)<0});D&&Ae.length>0&&D(Ae),!c.props.waitForAnimate&&c.animationEndCallback&&(clearTimeout(c.animationEndCallback),K&&K(te),delete c.animationEndCallback),c.setState(de,function(){b&&c.asNavForIndex!==T&&(c.asNavForIndex=T,b.innerSlider.slideHandler(T)),Se&&(c.animationEndCallback=setTimeout(function(){var we=Se.animating,Ee=ne(Se,["animating"]);c.setState(Ee,function(){c.callbackTimers.push(setTimeout(function(){return c.setState({animating:we})},10)),K&&K(de.currentSlide),delete c.animationEndCallback})},W))})}}),v(S(c),"changeSlide",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=P(P({},c.props),c.state),b=(0,g.changeSlide)(p,T);if(!(b!==0&&!b)&&(d===!0?c.slideHandler(b,d):c.slideHandler(b),c.props.autoplay&&c.autoPlay("update"),c.props.focusOnSelect)){var U=c.list.querySelectorAll(".slick-current");U[0]&&U[0].focus()}}),v(S(c),"clickHandler",function(T){c.clickable===!1&&(T.stopPropagation(),T.preventDefault()),c.clickable=!0}),v(S(c),"keyHandler",function(T){var d=(0,g.keyHandler)(T,c.props.accessibility,c.props.rtl);d!==""&&c.changeSlide({message:d})}),v(S(c),"selectHandler",function(T){c.changeSlide(T)}),v(S(c),"disableBodyScroll",function(){var T=function(p){p=p||window.event,p.preventDefault&&p.preventDefault(),p.returnValue=!1};window.ontouchmove=T}),v(S(c),"enableBodyScroll",function(){window.ontouchmove=null}),v(S(c),"swipeStart",function(T){c.props.verticalSwiping&&c.disableBodyScroll();var d=(0,g.swipeStart)(T,c.props.swipe,c.props.draggable);d!==""&&c.setState(d)}),v(S(c),"swipeMove",function(T){var d=(0,g.swipeMove)(T,P(P(P({},c.props),c.state),{},{trackRef:c.track,listRef:c.list,slideIndex:c.state.currentSlide}));d&&(d.swiping&&(c.clickable=!1),c.setState(d))}),v(S(c),"swipeEnd",function(T){var d=(0,g.swipeEnd)(T,P(P(P({},c.props),c.state),{},{trackRef:c.track,listRef:c.list,slideIndex:c.state.currentSlide}));if(d){var p=d.triggerSlideHandler;delete d.triggerSlideHandler,c.setState(d),p!==void 0&&(c.slideHandler(p),c.props.verticalSwiping&&c.enableBodyScroll())}}),v(S(c),"touchEnd",function(T){c.swipeEnd(T),c.clickable=!0}),v(S(c),"slickPrev",function(){c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"previous"})},0))}),v(S(c),"slickNext",function(){c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"next"})},0))}),v(S(c),"slickGoTo",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"index",index:T,currentSlide:c.state.currentSlide},d)},0))}),v(S(c),"play",function(){var T;if(c.props.rtl)T=c.state.currentSlide-c.props.slidesToScroll;else if((0,g.canGoNext)(P(P({},c.props),c.state)))T=c.state.currentSlide+c.props.slidesToScroll;else return!1;c.slideHandler(T)}),v(S(c),"autoPlay",function(T){c.autoplayTimer&&clearInterval(c.autoplayTimer);var d=c.state.autoplaying;if(T==="update"){if(d==="hovered"||d==="focused"||d==="paused")return}else if(T==="leave"){if(d==="paused"||d==="focused")return}else if(T==="blur"&&(d==="paused"||d==="hovered"))return;c.autoplayTimer=setInterval(c.play,c.props.autoplaySpeed+50),c.setState({autoplaying:"playing"})}),v(S(c),"pause",function(T){c.autoplayTimer&&(clearInterval(c.autoplayTimer),c.autoplayTimer=null);var d=c.state.autoplaying;T==="paused"?c.setState({autoplaying:"paused"}):T==="focused"?(d==="hovered"||d==="playing")&&c.setState({autoplaying:"focused"}):d==="playing"&&c.setState({autoplaying:"hovered"})}),v(S(c),"onDotsOver",function(){return c.props.autoplay&&c.pause("hovered")}),v(S(c),"onDotsLeave",function(){return c.props.autoplay&&c.state.autoplaying==="hovered"&&c.autoPlay("leave")}),v(S(c),"onTrackOver",function(){return c.props.autoplay&&c.pause("hovered")}),v(S(c),"onTrackLeave",function(){return c.props.autoplay&&c.state.autoplaying==="hovered"&&c.autoPlay("leave")}),v(S(c),"onSlideFocus",function(){return c.props.autoplay&&c.pause("focused")}),v(S(c),"onSlideBlur",function(){return c.props.autoplay&&c.state.autoplaying==="focused"&&c.autoPlay("blur")}),v(S(c),"render",function(){var T=(0,u.default)("slick-slider",c.props.className,{"slick-vertical":c.props.vertical,"slick-initialized":!0}),d=P(P({},c.props),c.state),p=(0,g.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),b=c.props.pauseOnHover;p=P(P({},p),{},{onMouseEnter:b?c.onTrackOver:null,onMouseLeave:b?c.onTrackLeave:null,onMouseOver:b?c.onTrackOver:null,focusOnSelect:c.props.focusOnSelect&&c.clickable?c.selectHandler:null});var U;if(c.props.dots===!0&&c.state.slideCount>=c.props.slidesToShow){var D=(0,g.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),W=c.props.pauseOnDotsHover;D=P(P({},D),{},{clickHandler:c.changeSlide,onMouseEnter:W?c.onDotsLeave:null,onMouseOver:W?c.onDotsOver:null,onMouseLeave:W?c.onDotsLeave:null}),U=n.default.createElement(C.Dots,D)}var K,te,ge=(0,g.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);ge.clickHandler=c.changeSlide,c.props.arrows&&(K=n.default.createElement(Q.PrevArrow,ge),te=n.default.createElement(Q.NextArrow,ge));var de=null;c.props.vertical&&(de={height:c.state.listHeight});var Se=null;c.props.vertical===!1?c.props.centerMode===!0&&(Se={padding:"0px "+c.props.centerPadding}):c.props.centerMode===!0&&(Se={padding:c.props.centerPadding+" 0px"});var Ae=P(P({},de),Se),we=c.props.touchMove,Ee={className:"slick-list",style:Ae,onClick:c.clickHandler,onMouseDown:we?c.swipeStart:null,onMouseMove:c.state.dragging&&we?c.swipeMove:null,onMouseUp:we?c.swipeEnd:null,onMouseLeave:c.state.dragging&&we?c.swipeEnd:null,onTouchStart:we?c.swipeStart:null,onTouchMove:c.state.dragging&&we?c.swipeMove:null,onTouchEnd:we?c.touchEnd:null,onTouchCancel:c.state.dragging&&we?c.swipeEnd:null,onKeyDown:c.props.accessibility?c.keyHandler:null},be={className:T,dir:"ltr",style:c.props.style};return c.props.unslick&&(Ee={className:"slick-list"},be={className:T,style:c.props.style}),n.default.createElement("div",be,c.props.unslick?"":K,n.default.createElement("div",Y({ref:c.listRefHandler},Ee),n.default.createElement(y.Track,Y({ref:c.trackRefHandler},p),c.props.children)),c.props.unslick?"":te,c.props.unslick?"":U)}),c.list=null,c.track=null,c.state=P(P({},o.default),{},{currentSlide:c.props.initialSlide,targetSlide:c.props.initialSlide?c.props.initialSlide:0,slideCount:n.default.Children.count(c.props.children)}),c.callbackTimers=[],c.clickable=!0,c.debouncedResize=null;var ie=c.ssrInit();return c.state=P(P({},c.state),ie),c}return he(ee,[{key:"didPropsChange",value:function(c){for(var ie=!1,T=0,d=Object.keys(this.props);T<d.length;T++){var p=d[T];if(!c.hasOwnProperty(p)){ie=!0;break}if(!(X(c[p])==="object"||typeof c[p]=="function"||isNaN(c[p]))&&c[p]!==this.props[p]){ie=!0;break}}return ie||n.default.Children.count(this.props.children)!==n.default.Children.count(c.children)}}]),ee})(n.default.Component),Al}var Fu,og;function yx(){if(og)return Fu;og=1;var n=function(o){return o.replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase()}).toLowerCase()};return Fu=n,Fu}var ec,sg;function vx(){if(sg)return ec;sg=1;var n=yx(),o=function(g){var y=/[height|width]$/;return y.test(g)},f=function(g){var y="",C=Object.keys(g);return C.forEach(function(Q,G){var $=g[Q];Q=n(Q),o(Q)&&typeof $=="number"&&($=$+"px"),$===!0?y+=Q:$===!1?y+="not "+Q:y+="("+Q+": "+$+")",G<C.length-1&&(y+=" and ")}),y},u=function(g){var y="";return typeof g=="string"?g:g instanceof Array?(g.forEach(function(C,Q){y+=f(C),Q<g.length-1&&(y+=", ")}),y):f(g)};return ec=u,ec}var ug;function bx(){return ug||(ug=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=C(mn()),f=mx(),u=C(vx()),g=C(Pg()),y=Rl();function C(k){return k&&k.__esModule?k:{default:k}}function Q(k){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},Q(k)}function G(){return G=Object.assign?Object.assign.bind():function(k){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var B in v)({}).hasOwnProperty.call(v,B)&&(k[B]=v[B])}return k},G.apply(null,arguments)}function $(k,_){var v=Object.keys(k);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(k);_&&(B=B.filter(function(Z){return Object.getOwnPropertyDescriptor(k,Z).enumerable})),v.push.apply(v,B)}return v}function X(k){for(var _=1;_<arguments.length;_++){var v=arguments[_]!=null?arguments[_]:{};_%2?$(Object(v),!0).forEach(function(B){z(k,B,v[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(v)):$(Object(v)).forEach(function(B){Object.defineProperty(k,B,Object.getOwnPropertyDescriptor(v,B))})}return k}function Y(k,_){if(!(k instanceof _))throw new TypeError("Cannot call a class as a function")}function ne(k,_){for(var v=0;v<_.length;v++){var B=_[v];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(k,O(B.key),B)}}function ue(k,_,v){return _&&ne(k.prototype,_),Object.defineProperty(k,"prototype",{writable:!1}),k}function le(k,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(_&&_.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),_&&P(k,_)}function P(k,_){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,B){return v.__proto__=B,v},P(k,_)}function ve(k){var _=ae();return function(){var v,B=se(k);if(_){var Z=se(this).constructor;v=Reflect.construct(B,arguments,Z)}else v=B.apply(this,arguments);return oe(this,v)}}function oe(k,_){if(_&&(Q(_)=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return he(k)}function he(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function ae(){try{var k=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!k})()}function se(k){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},se(k)}function z(k,_,v){return(_=O(_))in k?Object.defineProperty(k,_,{value:v,enumerable:!0,configurable:!0,writable:!0}):k[_]=v,k}function O(k){var _=S(k,"string");return Q(_)=="symbol"?_:_+""}function S(k,_){if(Q(k)!="object"||!k)return k;var v=k[Symbol.toPrimitive];if(v!==void 0){var B=v.call(k,_);if(Q(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(k)}n.default=(function(k){le(v,k);var _=ve(v);function v(B){var Z;return Y(this,v),Z=_.call(this,B),z(he(Z),"innerSliderRefHandler",function(R){return Z.innerSlider=R}),z(he(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),z(he(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),z(he(Z),"slickGoTo",function(R){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(R,J)}),z(he(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),z(he(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return ue(v,[{key:"media",value:function(Z,R){var J=window.matchMedia(Z),ee=function(c){var ie=c.matches;ie&&R()};J.addListener(ee),this._responsiveMediaHandlers.push({mql:J,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var R=this.props.responsive.map(function(ee){return ee.breakpoint});R.sort(function(ee,E){return ee-E}),R.forEach(function(ee,E){var c;E===0?c=(0,u.default)({minWidth:0,maxWidth:ee}):c=(0,u.default)({minWidth:R[E-1]+1,maxWidth:ee}),(0,y.canUseDOM)()&&Z.media(c,function(){Z.setState({breakpoint:ee})})});var J=(0,u.default)({minWidth:R.slice(-1)[0]});(0,y.canUseDOM)()&&this.media(J,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,R,J;this.state.breakpoint?(J=this.props.responsive.filter(function(D){return D.breakpoint===Z.state.breakpoint}),R=J[0].settings==="unslick"?"unslick":X(X(X({},g.default),this.props),J[0].settings)):R=X(X({},g.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(D){return typeof D=="string"?!!D.trim():!!D}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var E=[],c=null,ie=0;ie<ee.length;ie+=R.rows*R.slidesPerRow){for(var T=[],d=ie;d<ie+R.rows*R.slidesPerRow;d+=R.slidesPerRow){for(var p=[],b=d;b<d+R.slidesPerRow&&(R.variableWidth&&ee[b].props.style&&(c=ee[b].props.style.width),!(b>=ee.length));b+=1)p.push(o.default.cloneElement(ee[b],{key:100*ie+10*d+b,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ie+d},p))}R.variableWidth?E.push(o.default.createElement("div",{key:ie,style:{width:c}},T)):E.push(o.default.createElement("div",{key:ie},T))}if(R==="unslick"){var U="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:U},ee)}else E.length<=R.slidesToShow&&(R.unslick=!0);return o.default.createElement(f.InnerSlider,G({style:this.props.style,ref:this.innerSliderRefHandler},(0,y.filterSettings)(R)),E)}}]),v})(o.default.Component)})(Ku)),Ku}var cg;function Sx(){return cg||(cg=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(bx());function f(u){return u&&u.__esModule?u:{default:u}}n.default=o.default})(Zu)),Zu}var xx=Sx();const im=mc(xx),mt="/assets",wx=w.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,eo=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,$x=w.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,zx=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ox=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,Tx=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Ax=w.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Ex=w.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,_x=w.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,jx=w.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Mx=w.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,tc=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,nc=w.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${j.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,ac=w.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Cx=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,kx=w.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${j.motion.iconLift}) scale(${j.motion.scaleHover});
  }
`,Dx=w.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,Rx=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,Hx=w.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,Nx=w.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${j.effects.carouselBackground};
  overflow: hidden;
`,Ux=w.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.carouselBackdrop};
`,Lx=w.div`
  position: relative;
  width: ${j.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${j.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,Bx=w(im)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${j.sizing.carouselSlidePadding};
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    z-index: 5;
    top: 50%;
    width: ${({theme:n})=>n.spacing[8]};
    height: ${({theme:n})=>n.spacing[8]};
  }

  .slick-prev {
    left: ${({theme:n})=>n.spacing[4]};
  }

  .slick-next {
    right: ${({theme:n})=>n.spacing[4]};
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  .slick-slide .carousel-card {
    opacity: ${j.effects.carouselCardOpacity};
    transform: scale(${j.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${j.motion.scaleActive});
    filter: ${j.effects.carouselDropShadow};
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: ${j.effects.carouselCaptionOpacity};
    transform: scale(${j.motion.scaleCaptionDown});
    margin-top: ${j.sizing.carouselCaptionOffsetSm};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
  }

  .slick-center .carousel-caption {
    margin-top: ${j.sizing.carouselCaptionOffsetLg};
    opacity: 1;
    transform: scale(${j.motion.scaleActive});
    color: ${j.effects.overlayWhite98};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 0;

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      padding: ${j.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${j.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,qx=w.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${j.effects.carouselCardShadow};
`,Gx=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Yx=w.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${j.effects.carouselCaptionMuted};
`,Xx=w.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${j.sizing.hairline} solid ${j.effects.glassWhite20};
  background: ${j.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${j.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${j.effects.glassWhite20};
  }
`,fg=({className:n,style:o,onClick:f,direction:u,ariaLabel:g})=>m.jsx(Xx,{className:n,style:o,onClick:f,"aria-label":g,children:u==="next"?m.jsx(zc,{size:18}):m.jsx(Ra,{size:18})}),Vx=w.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,Qx=w.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${j.effects.compositionGradient};
  padding: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.card};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[12]};
  }
`,Zx=w.img`
  width: 100%;
  height: auto;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,Kx=w.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Jx=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Wx=w.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Ix=w.button`
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,Px=[`${mt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${mt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${mt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${mt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${mt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${mt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${mt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${mt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${mt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],Fx=[`${mt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${mt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],e2=({onBack:n})=>{const{t:o}=nn(),f=()=>{if(n){n();return}window.location.hash="#work"},u=qe.useMemo(()=>new Date().getFullYear(),[]),g=qe.useMemo(()=>({centerMode:!0,centerPadding:j.carousel.centerPaddingLg,infinite:!0,slidesToShow:j.carousel.slidesToShowLg,speed:j.carousel.speed,autoplay:!0,autoplaySpeed:j.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:m.jsx(fg,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:m.jsx(fg,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:j.carousel.breakpointLg,settings:{slidesToShow:j.carousel.slidesToShowMd,centerPadding:j.carousel.centerPaddingMd}},{breakpoint:j.carousel.breakpointSm,settings:{slidesToShow:j.carousel.slidesToShowSm,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:j.carousel.breakpointXs,settings:{slidesToShow:j.carousel.slidesToShowSm,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return m.jsxs(wx,{children:[m.jsx($x,{children:m.jsxs(zx,{children:[m.jsxs(Ox,{onClick:f,"aria-label":o.appIcons.backToPortfolioAria,children:[m.jsx(Ra,{size:18}),o.appIcons.backToPortfolio]}),m.jsx(Tx,{children:o.work.categories.brandDesign})]})}),m.jsx(Ax,{children:m.jsxs(eo,{children:[m.jsx(Ex,{children:o.appIcons.eyebrow}),m.jsxs(_x,{children:[o.appIcons.titlePrimary," ",m.jsx("em",{children:o.appIcons.titleEmphasis})]}),m.jsx(jx,{children:o.appIcons.lead})]})}),m.jsx(Mx,{children:m.jsxs(eo,{children:[m.jsxs(tc,{children:[m.jsx(nc,{}),m.jsx(ac,{children:o.appIcons.appIconsTitle})]}),m.jsx(Cx,{children:Px.map((y,C)=>m.jsxs(kx,{children:[m.jsx(Dx,{children:m.jsx(Rx,{src:y,alt:o.appIcons.iconLabels[C]})}),m.jsx(Hx,{children:o.appIcons.iconLabels[C]})]},y))})]})}),m.jsxs(Nx,{children:[m.jsx(Ux,{}),m.jsx(eo,{style:{position:"relative",zIndex:1},children:m.jsxs(tc,{children:[m.jsx(nc,{$light:!0}),m.jsx(ac,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),m.jsx(Lx,{children:m.jsx(Bx,{...g,children:Fx.map((y,C)=>m.jsxs("div",{children:[m.jsx(qx,{className:"carousel-card",children:m.jsx(Gx,{src:y,alt:o.appIcons.splashLabels[C],loading:"lazy"})}),m.jsx(Yx,{className:"carousel-caption",children:o.appIcons.splashLabels[C]})]},y))})})]}),m.jsx(Vx,{children:m.jsxs(eo,{children:[m.jsxs(tc,{children:[m.jsx(nc,{}),m.jsx(ac,{children:o.appIcons.fullCompositionTitle})]}),m.jsx(Qx,{children:m.jsx(Zx,{src:`${mt}/images/brand/app-icons-splash-screens/full-composition.png`,alt:o.appIcons.fullCompositionAlt})})]})}),m.jsx(Kx,{children:m.jsxs(Jx,{children:[m.jsxs(Wx,{children:["© ",u," ",fo,". ",o.appIcons.footerRights]}),m.jsxs(Ix,{onClick:f,children:[o.appIcons.viewMoreProjects,m.jsx(zc,{size:16})]})]})})]})},t2=w.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,n2=w.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,a2=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,i2=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,l2=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,r2=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,o2=w.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,s2=w.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,u2=w.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,c2=w.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,f2=w.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,d2=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,p2=w.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,h2=w.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${j.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,g2=w.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,m2=w.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,y2=n=>n.includes(" ")?encodeURI(n):n,v2=({onBack:n})=>{const{t:o}=nn(),f=po.find(g=>g.id===17),u=qe.useMemo(()=>{const g=(f==null?void 0:f.gallery)??[],y=[],C=new Map;return g.forEach(Q=>{const ne=decodeURIComponent(Q.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";C.has(ne)?y[C.get(ne)].items.push(Q):(C.set(ne,y.length),y.push({name:ne,items:[Q]}))}),y},[f==null?void 0:f.gallery]);return m.jsxs(t2,{children:[m.jsx(n2,{children:m.jsxs(a2,{children:[m.jsxs(i2,{onClick:n,children:[m.jsx(Ra,{size:18}),o.appStoreScreenshots.backToPortfolio]}),m.jsx(l2,{children:o.appStoreScreenshots.headerTag})]})}),m.jsxs(o2,{children:[m.jsx(s2,{children:o.appStoreScreenshots.eyebrow}),m.jsx(u2,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&m.jsx(c2,{children:o.appStoreScreenshots.lead})]}),m.jsx(f2,{children:m.jsx(r2,{children:u.map(g=>m.jsxs(d2,{children:[m.jsx(p2,{children:g.name}),m.jsx(h2,{children:g.items.map((y,C)=>m.jsx(g2,{children:m.jsx(m2,{src:y2(y),alt:`${g.name} ${C+1}`,loading:"lazy"})},`${g.name}-${C}`))})]},g.name))})})]})},b2=w.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,S2=w.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,x2=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w2=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,$2=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,z2=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,O2=w.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,T2=w.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,A2=w.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,E2=w.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,_2=w.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,j2=w.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,M2=n=>n.includes(" ")?encodeURI(n):n,C2=({onBack:n})=>{const{t:o}=nn();return m.jsxs(b2,{children:[m.jsx(S2,{children:m.jsxs(x2,{children:[m.jsxs(w2,{onClick:n,children:[m.jsx(Ra,{size:18}),o.namelaca.backToPortfolio]}),m.jsx($2,{children:o.namelaca.headerTag})]})}),m.jsxs(O2,{children:[m.jsx(T2,{children:o.namelaca.eyebrow}),m.jsx(A2,{children:o.namelaca.title})]}),m.jsx(E2,{children:m.jsx(z2,{children:m.jsx(_2,{children:m.jsx(j2,{src:M2("/assets/images/brand/Namelaca icons and illustration/Namelaca.png"),alt:o.namelaca.title})})})})]})},lm="/assets",k2=`${lm}/video/Mindzy – Brain Training`,D2=`${lm}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,R2=w.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,dg=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,H2=w.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,N2=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,U2=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,L2=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,B2=w.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${({$coverUrl:n})=>n});
    background-size: cover;
    background-position: center;
    opacity: 0.35;
  }
`,q2=w.div`
  position: relative;
  z-index: ${j.zIndex.foreground};
`,G2=w.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Y2=w.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,X2=w.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,V2=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,Q2=w.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${j.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,Z2=w.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,K2=w.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${j.effects.carouselBackground};
  overflow: hidden;
`,J2=w.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.carouselBackdrop};
`,W2=w.div`
  position: relative;
  width: ${j.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${j.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,I2=w(im)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${j.sizing.carouselSlidePadding};
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    z-index: 5;
    top: 50%;
    width: ${({theme:n})=>n.spacing[8]};
    height: ${({theme:n})=>n.spacing[8]};
  }

  .slick-prev {
    left: ${({theme:n})=>n.spacing[4]};
  }

  .slick-next {
    right: ${({theme:n})=>n.spacing[4]};
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  .slick-slide .carousel-card {
    opacity: ${j.effects.carouselCardOpacity};
    transform: scale(${j.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${j.motion.scaleActive});
    filter: ${j.effects.carouselDropShadow};
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: ${j.effects.carouselCaptionOpacity};
    transform: scale(${j.motion.scaleCaptionDown});
    margin-top: ${j.sizing.carouselCaptionOffsetSm};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
  }

  .slick-center .carousel-caption {
    margin-top: ${j.sizing.carouselCaptionOffsetLg};
    opacity: 1;
    transform: scale(${j.motion.scaleActive});
    color: ${j.effects.overlayWhite98};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 0;

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      padding: ${j.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${j.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,P2=w.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
`,F2=w.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0);
`,ew=w.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${j.effects.carouselCaptionMuted};
`,tw=w.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${j.sizing.hairline} solid ${j.effects.glassWhite20};
  background: ${j.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${j.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${j.effects.glassWhite20};
  }
`,pg=({className:n,style:o,onClick:f,direction:u,ariaLabel:g})=>m.jsx(tw,{className:n,style:o,onClick:f,"aria-label":g,children:u==="next"?m.jsx(zc,{size:18}):m.jsx(Ra,{size:18})}),hg=n=>n.includes(" ")?encodeURI(n):n,nw=["Air Traffic.MP4","Catch the bug.MP4","Color count.MP4","Linking Pairs.MP4","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],aw=({onBack:n})=>{const{t:o}=nn(),f=()=>{if(n){n();return}window.location.hash="#work"},u=qe.useMemo(()=>nw.map(y=>`${k2}/${y}`),[]),g=qe.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:j.carousel.speed,autoplay:!0,autoplaySpeed:j.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:m.jsx(pg,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:m.jsx(pg,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:j.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:j.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:j.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return m.jsxs(R2,{children:[m.jsx(H2,{children:m.jsxs(N2,{children:[m.jsxs(U2,{onClick:f,children:[m.jsx(Ra,{size:18}),o.mindzy.backToPortfolio]}),m.jsx(L2,{children:o.work.categories.uiuxDesign})]})}),m.jsx(B2,{$coverUrl:hg(D2),children:m.jsx(dg,{children:m.jsxs(q2,{children:[m.jsx(G2,{children:o.mindzy.eyebrow}),m.jsx(Y2,{children:o.mindzy.title}),o.mindzy.lead&&m.jsx(X2,{children:o.mindzy.lead})]})})}),m.jsxs(K2,{children:[m.jsx(J2,{}),m.jsx(dg,{children:m.jsxs(V2,{children:[m.jsx(Q2,{}),m.jsx(Z2,{children:o.mindzy.videoTitle})]})}),m.jsx(W2,{children:m.jsx(I2,{...g,children:u.map(y=>{var C;return m.jsxs("div",{children:[m.jsx(P2,{className:"carousel-card",children:m.jsx(F2,{src:hg(y),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})}),m.jsx(ew,{className:"carousel-caption",children:(C=y.split("/").pop())==null?void 0:C.replace(".MP4","")})]},y)})})})]})]})},rm="/assets",gg=`${rm}/video/Marketing video`,iw=`${rm}/images/brand/Full_Composition_Marketing_video.png`,lw=w.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,rw=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: 0 ${({theme:n})=>n.spacing[6]};
`,ow=w.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,sw=w.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,uw=w.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brand.purple};
  }
`,cw=w.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,fw=w.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--hero-cover-url);
    background-size: cover;
    background-position: center;
    opacity: 0.35;
  }
`,dw=w.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`,pw=w.div`
  position: relative;
  z-index: 1;
`,hw=w.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,gw=w.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,mw=w.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,yw=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  margin-top: ${({theme:n})=>n.spacing[12]};
`,vw=w.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${j.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,bw=w.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,Sw=w.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,xw=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ww=w.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[100]};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`,$w=w.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[100]};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`,mg=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;w.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`;w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto ${({theme:n})=>n.spacing[12]};
  }
`;w.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: linear-gradient(135deg, ${({theme:n})=>n.colors.brand.purple}20, ${({theme:n})=>n.colors.brand.blue}20);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
`;w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ic=n=>encodeURI(n),zw=["1080x1920.mp4","App Store.mp4","Concept_2_1080x1920.mp4","video5_1080x1920.mp4","Video_1080x1920_android.mp4","valentine_stickers.mp4"],Ow=["Comp 1.mp4","Concept 1 17-09_1.mp4","main video_2.mp4","video.mp4","Google play.mp4","Video (1).mp4"],Tw=({onBack:n})=>{const{t:o}=nn(),f=()=>{if(n){n();return}window.location.hash="#work"};return m.jsxs(lw,{children:[m.jsx(ow,{children:m.jsxs(sw,{children:[m.jsxs(uw,{onClick:f,children:[m.jsx(Ra,{size:18}),o.marketingVideo.backToPortfolio]}),m.jsx(cw,{children:o.marketingVideo.headerTag})]})}),m.jsxs(fw,{style:{"--hero-cover-url":`url(${ic(iw)})`},children:[m.jsx(dw,{}),m.jsxs(pw,{children:[m.jsx(hw,{children:o.marketingVideo.eyebrow}),m.jsx(gw,{children:o.marketingVideo.title}),m.jsx(mw,{children:o.marketingVideo.lead})]})]}),m.jsxs(rw,{children:[m.jsxs(yw,{children:[m.jsx(vw,{}),m.jsx(bw,{children:o.marketingVideo.allVideosTitle})]}),m.jsx(Sw,{children:zw.map(u=>m.jsx($w,{children:m.jsx(mg,{src:ic(`${gg}/${u}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},u))}),m.jsx(xw,{children:Ow.map(u=>m.jsx(ww,{children:m.jsx(mg,{src:ic(`${gg}/${u}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},u))})]})]})},Aw=w.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${j.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${j.zIndex.progress};
  transition: width 0.1s ease;
`,Ew=()=>{const[n,o]=qe.useState(0);return qe.useEffect(()=>{const f=()=>{const u=document.body.scrollTop||document.documentElement.scrollTop,g=document.documentElement.scrollHeight-document.documentElement.clientHeight,y=g>0?u/g*100:0;o(y)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),m.jsx(Aw,{$width:n})},_w=Mi`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,jw=w.div`
  min-height: ${j.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,Mw=w.div`
  position: fixed;
  inset: 0;
  z-index: ${j.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,lc=w.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${j.effects.blurBlob});
  opacity: ${j.effects.blobOpacity};
  animation: ${_w} 3s ease-in-out infinite;

  ${({$position:n})=>n==="top-left"&&`
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${j.effects.blobBlue};
    `}

  ${({$position:n})=>n==="top-right"&&`
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${j.effects.blobPurple};
      animation: none;
    `}

  ${({$position:n})=>n==="bottom-left"&&`
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${j.effects.blobPink};
      animation: none;
    `}
`,Cw=w.div`
  position: relative;
  z-index: ${j.zIndex.foreground};
`,kw=w.div`
  position: fixed;
  right: ${({theme:n})=>n.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${j.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[1]};
  padding: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${j.effects.glassWhite80};
  backdrop-filter: blur(${j.effects.blurGlass});
  box-shadow: ${({theme:n})=>n.shadows.md};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,yg=w.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:"transparent"};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.sm:"none"};

  &:hover {
    color: ${({theme:n})=>n.colors.slate[900]};
    background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.slate[100]};
  }
`,Dw=()=>{const{lang:n,setLang:o,t:f}=nn();return m.jsxs(kw,{children:[m.jsx(yg,{$active:n==="en",onClick:()=>o("en"),title:f.languageSwitch.enTitle,children:f.languageSwitch.enShort}),m.jsx(yg,{$active:n==="uk",onClick:()=>o("uk"),title:f.languageSwitch.ukTitle,children:f.languageSwitch.ukShort})]})};function Rw(){const[n,o]=qe.useState(Pe.PORTFOLIO),[f,u]=qe.useState(en.HERO),g="app-icons",y="app-store-screenshots",C="namelaca",Q="mindzy",G="marketing-video";qe.useEffect(()=>{const Y=()=>{if(!window.location.hash)return;const ne=window.location.hash.replace("#","");if(ne===g){o(Pe.APP_ICONS);return}if(ne===y){o(Pe.APP_STORE_SCREENSHOTS);return}if(ne===C){o(Pe.NAMELACA);return}if(ne===Q){o(Pe.MINDZY);return}if(ne===G){o(Pe.MARKETING_VIDEO);return}const ue=ne,le=document.getElementById(ue);le&&(o(Pe.PORTFOLIO),u(ue),le.scrollIntoView({behavior:"smooth",block:"start"}))};return Y(),window.addEventListener("hashchange",Y),()=>window.removeEventListener("hashchange",Y)},[]),qe.useEffect(()=>{if(n!==Pe.PORTFOLIO)return;const Y=document.getElementById(f);Y&&Y.scrollIntoView({behavior:"smooth",block:"start"})},[n,f]),qe.useEffect(()=>{(n===Pe.APP_ICONS||n===Pe.APP_STORE_SCREENSHOTS||n===Pe.NAMELACA||n===Pe.MINDZY||n===Pe.MARKETING_VIDEO)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const $=Y=>{o(Pe.PORTFOLIO),u(Y),window.history.pushState(null,"",`#${Y}`);const ne=document.getElementById(Y);ne&&ne.scrollIntoView({behavior:"smooth",block:"start"})},X=()=>{o(Pe.PORTFOLIO),u(en.WORK),window.history.pushState(null,"",`#${en.WORK}`);const Y=document.getElementById(en.WORK);Y&&Y.scrollIntoView({behavior:"smooth",block:"start"})};return m.jsxs(jw,{children:[m.jsxs(Mw,{children:[m.jsx(lc,{$position:"top-left"}),m.jsx(lc,{$position:"top-right"}),m.jsx(lc,{$position:"bottom-left"})]}),m.jsxs(Cw,{children:[m.jsx(Ew,{}),n===Pe.PORTFOLIO&&m.jsxs(m.Fragment,{children:[m.jsx(Dw,{}),m.jsx(Qb,{onNavigate:$})]}),n===Pe.PORTFOLIO?m.jsxs(m.Fragment,{children:[m.jsxs("main",{children:[m.jsx(s1,{}),m.jsx(uS,{}),m.jsx(HS,{})]}),m.jsx(XS,{})]}):n===Pe.APP_ICONS?m.jsx(e2,{onBack:X}):n===Pe.APP_STORE_SCREENSHOTS?m.jsx(v2,{onBack:X}):n===Pe.NAMELACA?m.jsx(C2,{onBack:X}):n===Pe.MINDZY?m.jsx(aw,{onBack:X}):n===Pe.MARKETING_VIDEO?m.jsx(Tw,{onBack:X}):null]})]})}function Hw(){return m.jsx(_b,{children:m.jsx(Rw,{})})}const Nw=Bv`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: ${j.layout.fullViewportHeight};
    font-family: ${({theme:n})=>n.typography.fonts.sans};
    color: ${({theme:n})=>n.colors.slate[900]};
    background: ${({theme:n})=>n.colors.white};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n})=>n.colors.white};
  }

  ::-webkit-scrollbar {
    width: ${j.sizing.scrollbarWidth};
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:n})=>n.colors.slate[50]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[300]};
    border-radius: ${({theme:n})=>n.radii.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:n})=>n.colors.brand.purple};
  }
`,Uw={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},Lw={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},Bw={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},qw={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},Gw={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},Yw={container:"1280px"},Xw={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},Vw={colors:Uw,spacing:Lw,radii:Bw,shadows:qw,typography:Gw,layout:Yw,breakpoints:Xw},om=document.getElementById("root");if(!om)throw new Error("Could not find root element to mount to");const Qw=U0.createRoot(om);Qw.render(m.jsx(pt.StrictMode,{children:m.jsxs(Nv,{theme:Vw,children:[m.jsx(Nw,{}),m.jsx(Hw,{})]})}));
