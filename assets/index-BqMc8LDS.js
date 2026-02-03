(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const C of m.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&u(C)}).observe(document,{childList:!0,subtree:!0});function f(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerPolicy&&(m.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?m.credentials="include":g.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(g){if(g.ep)return;g.ep=!0;const m=f(g);fetch(g.href,m)}})();var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function z0(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var f=function u(){return this instanceof u?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};f.prototype=o.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(n).forEach(function(u){var g=Object.getOwnPropertyDescriptor(n,u);Object.defineProperty(f,u,g.get?g:{enumerable:!0,get:function(){return n[u]}})}),f}var Nu={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function O0(){if(zh)return Tl;zh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(u,g,m){var C=null;if(m!==void 0&&(C=""+m),g.key!==void 0&&(C=""+g.key),"key"in g){m={};for(var V in g)V!=="key"&&(m[V]=g[V])}else m=g;return g=m.ref,{$$typeof:n,type:u,key:C,ref:g!==void 0?g:null,props:m}}return Tl.Fragment=o,Tl.jsx=f,Tl.jsxs=f,Tl}var Oh;function T0(){return Oh||(Oh=1,Nu.exports=O0()),Nu.exports}var y=T0(),Hu={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function $0(){if(Th)return xe;Th=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),C=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),ae=Symbol.iterator;function ue(p){return p===null||typeof p!="object"?null:(p=ae&&p[ae]||p["@@iterator"],typeof p=="function"?p:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,ve={};function oe(p,b,U){this.props=p,this.context=b,this.refs=ve,this.updater=U||le}oe.prototype.isReactComponent={},oe.prototype.setState=function(p,b){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,b,"setState")},oe.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function he(){}he.prototype=oe.prototype;function ne(p,b,U){this.props=p,this.context=b,this.refs=ve,this.updater=U||le}var se=ne.prototype=new he;se.constructor=ne,P(se,oe.prototype),se.isPureReactComponent=!0;var z=Array.isArray;function O(){}var S={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function _(p,b,U){var D=U.ref;return{$$typeof:n,type:p,key:b,ref:D!==void 0?D:null,props:U}}function v(p,b){return _(p.type,b,p.props)}function B(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Z(p){var b={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return b[U]})}var R=/\/+/g;function J(p,b){return typeof p=="object"&&p!==null&&p.key!=null?Z(""+p.key):b.toString(36)}function ee(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(O,O):(p.status="pending",p.then(function(b){p.status==="pending"&&(p.status="fulfilled",p.value=b)},function(b){p.status==="pending"&&(p.status="rejected",p.reason=b)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function A(p,b,U,D,W){var K=typeof p;(K==="undefined"||K==="boolean")&&(p=null);var te=!1;if(p===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(p.$$typeof){case n:case o:te=!0;break;case q:return te=p._init,A(te(p._payload),b,U,D,W)}}if(te)return W=W(p),te=D===""?"."+J(p,0):D,z(W)?(U="",te!=null&&(U=te.replace(R,"$&/")+"/"),A(W,b,U,"",function(Se){return Se})):W!=null&&(B(W)&&(W=v(W,U+(W.key==null||p&&p.key===W.key?"":(""+W.key).replace(R,"$&/")+"/")+te)),b.push(W)),1;te=0;var ge=D===""?".":D+":";if(z(p))for(var de=0;de<p.length;de++)D=p[de],K=ge+J(D,de),te+=A(D,b,U,K,W);else if(de=ue(p),typeof de=="function")for(p=de.call(p),de=0;!(D=p.next()).done;)D=D.value,K=ge+J(D,de++),te+=A(D,b,U,K,W);else if(K==="object"){if(typeof p.then=="function")return A(ee(p),b,U,D,W);throw b=String(p),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return te}function c(p,b,U){if(p==null)return p;var D=[],W=0;return A(p,D,"","",function(K){return b.call(U,K,W++)}),D}function ie(p){if(p._status===-1){var b=p._result;b=b(),b.then(function(U){(p._status===0||p._status===-1)&&(p._status=1,p._result=U)},function(U){(p._status===0||p._status===-1)&&(p._status=2,p._result=U)}),p._status===-1&&(p._status=0,p._result=b)}if(p._status===1)return p._result.default;throw p._result}var T=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},d={map:c,forEach:function(p,b,U){c(p,function(){b.apply(this,arguments)},U)},count:function(p){var b=0;return c(p,function(){b++}),b},toArray:function(p){return c(p,function(b){return b})||[]},only:function(p){if(!B(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return xe.Activity=X,xe.Children=d,xe.Component=oe,xe.Fragment=f,xe.Profiler=g,xe.PureComponent=ne,xe.StrictMode=u,xe.Suspense=Y,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,xe.__COMPILER_RUNTIME={__proto__:null,c:function(p){return S.H.useMemoCache(p)}},xe.cache=function(p){return function(){return p.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(p,b,U){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var D=P({},p.props),W=p.key;if(b!=null)for(K in b.key!==void 0&&(W=""+b.key),b)!k.call(b,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&b.ref===void 0||(D[K]=b[K]);var K=arguments.length-2;if(K===1)D.children=U;else if(1<K){for(var te=Array(K),ge=0;ge<K;ge++)te[ge]=arguments[ge+2];D.children=te}return _(p.type,W,D)},xe.createContext=function(p){return p={$$typeof:C,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:m,_context:p},p},xe.createElement=function(p,b,U){var D,W={},K=null;if(b!=null)for(D in b.key!==void 0&&(K=""+b.key),b)k.call(b,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(W[D]=b[D]);var te=arguments.length-2;if(te===1)W.children=U;else if(1<te){for(var ge=Array(te),de=0;de<te;de++)ge[de]=arguments[de+2];W.children=ge}if(p&&p.defaultProps)for(D in te=p.defaultProps,te)W[D]===void 0&&(W[D]=te[D]);return _(p,K,W)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(p){return{$$typeof:V,render:p}},xe.isValidElement=B,xe.lazy=function(p){return{$$typeof:q,_payload:{_status:-1,_result:p},_init:ie}},xe.memo=function(p,b){return{$$typeof:w,type:p,compare:b===void 0?null:b}},xe.startTransition=function(p){var b=S.T,U={};S.T=U;try{var D=p(),W=S.S;W!==null&&W(U,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(O,T)}catch(K){T(K)}finally{b!==null&&U.types!==null&&(b.types=U.types),S.T=b}},xe.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},xe.use=function(p){return S.H.use(p)},xe.useActionState=function(p,b,U){return S.H.useActionState(p,b,U)},xe.useCallback=function(p,b){return S.H.useCallback(p,b)},xe.useContext=function(p){return S.H.useContext(p)},xe.useDebugValue=function(){},xe.useDeferredValue=function(p,b){return S.H.useDeferredValue(p,b)},xe.useEffect=function(p,b){return S.H.useEffect(p,b)},xe.useEffectEvent=function(p){return S.H.useEffectEvent(p)},xe.useId=function(){return S.H.useId()},xe.useImperativeHandle=function(p,b,U){return S.H.useImperativeHandle(p,b,U)},xe.useInsertionEffect=function(p,b){return S.H.useInsertionEffect(p,b)},xe.useLayoutEffect=function(p,b){return S.H.useLayoutEffect(p,b)},xe.useMemo=function(p,b){return S.H.useMemo(p,b)},xe.useOptimistic=function(p,b){return S.H.useOptimistic(p,b)},xe.useReducer=function(p,b,U){return S.H.useReducer(p,b,U)},xe.useRef=function(p){return S.H.useRef(p)},xe.useState=function(p){return S.H.useState(p)},xe.useSyncExternalStore=function(p,b,U){return S.H.useSyncExternalStore(p,b,U)},xe.useTransition=function(){return S.H.useTransition()},xe.version="19.2.3",xe}var $h;function yn(){return $h||($h=1,Hu.exports=$0()),Hu.exports}var qe=yn();const pt=gc(qe);var Uu={exports:{}},$l={},Lu={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function A0(){return Ah||(Ah=1,(function(n){function o(A,c){var ie=A.length;A.push(c);e:for(;0<ie;){var T=ie-1>>>1,d=A[T];if(0<g(d,c))A[T]=c,A[ie]=d,ie=T;else break e}}function f(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var c=A[0],ie=A.pop();if(ie!==c){A[0]=ie;e:for(var T=0,d=A.length,p=d>>>1;T<p;){var b=2*(T+1)-1,U=A[b],D=b+1,W=A[D];if(0>g(U,ie))D<d&&0>g(W,U)?(A[T]=W,A[D]=ie,T=D):(A[T]=U,A[b]=ie,T=b);else if(D<d&&0>g(W,ie))A[T]=W,A[D]=ie,T=D;else break e}}return c}function g(A,c){var ie=A.sortIndex-c.sortIndex;return ie!==0?ie:A.id-c.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var C=Date,V=C.now();n.unstable_now=function(){return C.now()-V}}var Y=[],w=[],q=1,X=null,ae=3,ue=!1,le=!1,P=!1,ve=!1,oe=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function se(A){for(var c=f(w);c!==null;){if(c.callback===null)u(w);else if(c.startTime<=A)u(w),c.sortIndex=c.expirationTime,o(Y,c);else break;c=f(w)}}function z(A){if(P=!1,se(A),!le)if(f(Y)!==null)le=!0,O||(O=!0,Z());else{var c=f(w);c!==null&&ee(z,c.startTime-A)}}var O=!1,S=-1,k=5,_=-1;function v(){return ve?!0:!(n.unstable_now()-_<k)}function B(){if(ve=!1,O){var A=n.unstable_now();_=A;var c=!0;try{e:{le=!1,P&&(P=!1,he(S),S=-1),ue=!0;var ie=ae;try{t:{for(se(A),X=f(Y);X!==null&&!(X.expirationTime>A&&v());){var T=X.callback;if(typeof T=="function"){X.callback=null,ae=X.priorityLevel;var d=T(X.expirationTime<=A);if(A=n.unstable_now(),typeof d=="function"){X.callback=d,se(A),c=!0;break t}X===f(Y)&&u(Y),se(A)}else u(Y);X=f(Y)}if(X!==null)c=!0;else{var p=f(w);p!==null&&ee(z,p.startTime-A),c=!1}}break e}finally{X=null,ae=ie,ue=!1}c=void 0}}finally{c?Z():O=!1}}}var Z;if(typeof ne=="function")Z=function(){ne(B)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,J=R.port2;R.port1.onmessage=B,Z=function(){J.postMessage(null)}}else Z=function(){oe(B,0)};function ee(A,c){S=oe(function(){A(n.unstable_now())},c)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return ae},n.unstable_next=function(A){switch(ae){case 1:case 2:case 3:var c=3;break;default:c=ae}var ie=ae;ae=c;try{return A()}finally{ae=ie}},n.unstable_requestPaint=function(){ve=!0},n.unstable_runWithPriority=function(A,c){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var ie=ae;ae=A;try{return c()}finally{ae=ie}},n.unstable_scheduleCallback=function(A,c,ie){var T=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?T+ie:T):ie=T,A){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=ie+d,A={id:q++,callback:c,priorityLevel:A,startTime:ie,expirationTime:d,sortIndex:-1},ie>T?(A.sortIndex=ie,o(w,A),f(Y)===null&&A===f(w)&&(P?(he(S),S=-1):P=!0,ee(z,ie-T))):(A.sortIndex=d,o(Y,A),le||ue||(le=!0,O||(O=!0,Z()))),A},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(A){var c=ae;return function(){var ie=ae;ae=c;try{return A.apply(this,arguments)}finally{ae=ie}}}})(Bu)),Bu}var Eh;function E0(){return Eh||(Eh=1,Lu.exports=A0()),Lu.exports}var qu={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function _0(){if(_h)return Tt;_h=1;var n=yn();function o(Y){var w="https://react.dev/errors/"+Y;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)w+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+Y+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},g=Symbol.for("react.portal");function m(Y,w,q){var X=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:X==null?null:""+X,children:Y,containerInfo:w,implementation:q}}var C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(Y,w){if(Y==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Tt.createPortal=function(Y,w){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(o(299));return m(Y,w,null,q)},Tt.flushSync=function(Y){var w=C.T,q=u.p;try{if(C.T=null,u.p=2,Y)return Y()}finally{C.T=w,u.p=q,u.d.f()}},Tt.preconnect=function(Y,w){typeof Y=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,u.d.C(Y,w))},Tt.prefetchDNS=function(Y){typeof Y=="string"&&u.d.D(Y)},Tt.preinit=function(Y,w){if(typeof Y=="string"&&w&&typeof w.as=="string"){var q=w.as,X=V(q,w.crossOrigin),ae=typeof w.integrity=="string"?w.integrity:void 0,ue=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;q==="style"?u.d.S(Y,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:X,integrity:ae,fetchPriority:ue}):q==="script"&&u.d.X(Y,{crossOrigin:X,integrity:ae,fetchPriority:ue,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Tt.preinitModule=function(Y,w){if(typeof Y=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var q=V(w.as,w.crossOrigin);u.d.M(Y,{crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&u.d.M(Y)},Tt.preload=function(Y,w){if(typeof Y=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var q=w.as,X=V(q,w.crossOrigin);u.d.L(Y,q,{crossOrigin:X,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Tt.preloadModule=function(Y,w){if(typeof Y=="string")if(w){var q=V(w.as,w.crossOrigin);u.d.m(Y,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else u.d.m(Y)},Tt.requestFormReset=function(Y){u.d.r(Y)},Tt.unstable_batchedUpdates=function(Y,w){return Y(w)},Tt.useFormState=function(Y,w,q){return C.H.useFormState(Y,w,q)},Tt.useFormStatus=function(){return C.H.useHostTransitionStatus()},Tt.version="19.2.3",Tt}var jh;function j0(){if(jh)return qu.exports;jh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),qu.exports=_0(),qu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function M0(){if(Mh)return $l;Mh=1;var n=E0(),o=yn(),f=j0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function C(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(m(e)!==e)throw Error(u(188))}function w(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return Y(l),e;if(r===i)return Y(l),t;r=r.sibling}throw Error(u(188))}if(a.return!==i.return)a=l,i=r;else{for(var s=!1,h=l.child;h;){if(h===a){s=!0,a=l,i=r;break}if(h===i){s=!0,i=l,a=r;break}h=h.sibling}if(!s){for(h=r.child;h;){if(h===a){s=!0,a=r,i=l;break}if(h===i){s=!0,i=r,a=l;break}h=h.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var X=Object.assign,ae=Symbol.for("react.element"),ue=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),he=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case oe:return"Profiler";case ve:return"StrictMode";case z:return"Suspense";case O:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case ne:return e.displayName||"Context";case he:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var ee=Array.isArray,A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,c=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},T=[],d=-1;function p(e){return{current:e}}function b(e){0>d||(e.current=T[d],T[d]=null,d--)}function U(e,t){d++,T[d]=e.current,e.current=t}var D=p(null),W=p(null),K=p(null),te=p(null);function ge(e,t){switch(U(K,t),U(W,e),U(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vp(t),e=Zp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(D),U(D,e)}function de(){b(D),b(W),b(K)}function Se(e){e.memoizedState!==null&&U(te,e);var t=D.current,a=Zp(t,e.type);t!==a&&(U(W,e),U(D,a))}function Ae(e){W.current===e&&(b(D),b(W)),te.current===e&&(b(te),xl._currentValue=ie)}var we,Ee;function be(e){if(we===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Ee}var Oe=!1;function We(e,t){if(!e||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(G){var L=G}Reflect.construct(e,[],F)}else{try{F.call()}catch(G){L=G}e.call(F.prototype)}}else{try{throw Error()}catch(G){L=G}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(G){if(G&&L&&typeof G.stack=="string")return[G.stack,L.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],h=r[1];if(s&&h){var x=s.split(`
`),H=h.split(`
`);for(l=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;if(i===x.length||l===H.length)for(i=x.length-1,l=H.length-1;1<=i&&0<=l&&x[i]!==H[l];)l--;for(;1<=i&&0<=l;i--,l--)if(x[i]!==H[l]){if(i!==1||l!==1)do if(i--,l--,0>l||x[i]!==H[l]){var Q=`
`+x[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=l);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return We(e.type,!1);case 11:return We(e.type.render,!1);case 1:return We(e.type,!0);case 31:return be("Activity");default:return""}}function Ie(e){try{var t="",a=null;do t+=_e(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pe=Object.prototype.hasOwnProperty,tt=n.unstable_scheduleCallback,vt=n.unstable_cancelCallback,mn=n.unstable_shouldYield,Ra=n.unstable_requestPaint,Ot=n.unstable_now,fa=n.unstable_getCurrentPriorityLevel,Nl=n.unstable_ImmediatePriority,nn=n.unstable_UserBlockingPriority,cn=n.unstable_NormalPriority,iy=n.unstable_LowPriority,Tc=n.unstable_IdlePriority,ly=n.log,ry=n.unstable_setDisableYieldValue,ki=null,Dt=null;function Hn(e){if(typeof ly=="function"&&ry(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(ki,e)}catch{}}var Rt=Math.clz32?Math.clz32:uy,oy=Math.log,sy=Math.LN2;function uy(e){return e>>>=0,e===0?32:31-(oy(e)/sy|0)|0}var Hl=256,Ul=262144,Ll=4194304;function da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?l=da(i):(s&=h,s!==0?l=da(s):a||(a=h&~e,a!==0&&(l=da(a))))):(h=i&~r,h!==0?l=da(h):s!==0?l=da(s):a||(a=i&~e,a!==0&&(l=da(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Di(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $c(){var e=Ll;return Ll<<=1,(Ll&62914560)===0&&(Ll=4194304),e}function Oo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ri(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fy(e,t,a,i,l,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,H=e.hiddenUpdates;for(a=s&~a;0<a;){var Q=31-Rt(a),F=1<<Q;h[Q]=0,x[Q]=-1;var L=H[Q];if(L!==null)for(H[Q]=null,Q=0;Q<L.length;Q++){var G=L[Q];G!==null&&(G.lane&=-536870913)}a&=~F}i!==0&&Ac(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Ac(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Ec(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Rt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function _c(e,t){var a=t&-t;return a=(a&42)!==0?1:To(a),(a&(e.suspendedLanes|t))!==0?0:a}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=c.p;return e!==0?e:(e=window.event,e===void 0?32:yh(e.type))}function Mc(e,t){var a=c.p;try{return c.p=e,t()}finally{c.p=a}}var Un=Math.random().toString(36).slice(2),bt="__reactFiber$"+Un,At="__reactProps$"+Un,Na="__reactContainer$"+Un,Ao="__reactEvents$"+Un,dy="__reactListeners$"+Un,py="__reactHandles$"+Un,Cc="__reactResources$"+Un,Ni="__reactMarker$"+Un;function Eo(e){delete e[bt],delete e[At],delete e[Ao],delete e[dy],delete e[py]}function Ha(e){var t=e[bt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Na]||a[bt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=eh(e);e!==null;){if(a=e[bt])return a;e=eh(e)}return t}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[bt]||e[Na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function La(e){var t=e[Cc];return t||(t=e[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[Ni]=!0}var kc=new Set,Dc={};function pa(e,t){Ba(e,t),Ba(e+"Capture",t)}function Ba(e,t){for(Dc[e]=t,e=0;e<t.length;e++)kc.add(t[e])}var hy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Nc={};function gy(e){return Pe.call(Nc,e)?!0:Pe.call(Rc,e)?!1:hy.test(e)?Nc[e]=!0:(Rc[e]=!0,!1)}function ql(e,t,a){if(gy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function vn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yy(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _o(e){if(!e._valueTracker){var t=Hc(e)?"checked":"value";e._valueTracker=yy(e,t,""+e[t])}}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Hc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var my=/[\n"\\]/g;function Qt(e){return e.replace(my,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,a,i,l,r,s,h){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Mo(e,s,Xt(t)):a!=null?Mo(e,s,Xt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Xt(h):e.removeAttribute("name")}function Lc(e,t,a,i,l,r,s,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){_o(e);return}a=a!=null?""+Xt(a):"",t=t!=null?""+Xt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),_o(e)}function Mo(e,t,a){t==="number"&&Yl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Bc(e,t,a){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Xt(a):""}function qc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(u(92));if(ee(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Xt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),_o(e)}function Ga(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||vy.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Gc(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Gc(e,r,t[r])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(e){return Sy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var ko=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,Xa=null;function Xc(e){var t=Ua(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[At]||null;if(!l)throw Error(u(90));jo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Uc(i)}break e;case"textarea":Bc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&qa(e,!!a.multiple,t,!1)}}}var Ro=!1;function Qc(e,t,a){if(Ro)return e(t,a);Ro=!0;try{var i=e(t);return i}finally{if(Ro=!1,(Ya!==null||Xa!==null)&&(Mr(),Ya&&(t=Ya,e=Xa,Xa=Ya=null,Xc(t),e)))for(t=0;t<e.length;t++)Xc(e[t])}}function Ui(e,t){var a=e.stateNode;if(a===null)return null;var i=a[At]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if(Sn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){No=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{No=!1}var Ln=null,Ho=null,Ql=null;function Vc(){if(Ql)return Ql;var e,t=Ho,a=t.length,i,l="value"in Ln?Ln.value:Ln.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(i=1;i<=s&&t[a-i]===l[r-i];i++);return Ql=l.slice(e,1<i?1-i:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Zc(){return!1}function Et(e){function t(a,i,l,r,s){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zl:Zc,this.isPropagationStopped=Zc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Et(ha),Bi=X({},ha,{view:0,detail:0}),xy=Et(Bi),Uo,Lo,qi,Jl=X({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Uo=e.screenX-qi.screenX,Lo=e.screenY-qi.screenY):Lo=Uo=0,qi=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),Kc=Et(Jl),wy=X({},Jl,{dataTransfer:0}),zy=Et(wy),Oy=X({},Bi,{relatedTarget:0}),Bo=Et(Oy),Ty=X({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Et(Ty),Ay=X({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ey=Et(Ay),_y=X({},ha,{data:0}),Jc=Et(_y),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cy[e])?!!t[e]:!1}function qo(){return ky}var Dy=X({},Bi,{key:function(e){if(e.key){var t=jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ry=Et(Dy),Ny=X({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=Et(Ny),Hy=X({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Uy=Et(Hy),Ly=X({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),By=Et(Ly),qy=X({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Et(qy),Yy=X({},ha,{newState:0,oldState:0}),Xy=Et(Yy),Qy=[9,13,27,32],Go=Sn&&"CompositionEvent"in window,Gi=null;Sn&&"documentMode"in document&&(Gi=document.documentMode);var Vy=Sn&&"TextEvent"in window&&!Gi,Ic=Sn&&(!Go||Gi&&8<Gi&&11>=Gi),Pc=" ",Fc=!1;function ef(e,t){switch(e){case"keyup":return Qy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qa=!1;function Zy(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Fc=!0,Pc);case"textInput":return e=t.data,e===Pc&&Fc?null:e;default:return null}}function Ky(e,t){if(Qa)return e==="compositionend"||!Go&&ef(e,t)?(e=Vc(),Ql=Ho=Ln=null,Qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ic&&t.locale!=="ko"?null:t.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jy[e.type]:t==="textarea"}function af(e,t,a,i){Ya?Xa?Xa.push(i):Xa=[i]:Ya=i,t=Ur(t,"onChange"),0<t.length&&(a=new Kl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Yi=null,Xi=null;function Wy(e){Bp(e,0)}function Wl(e){var t=Hi(e);if(Uc(t))return e}function lf(e,t){if(e==="change")return t}var rf=!1;if(Sn){var Yo;if(Sn){var Xo="oninput"in document;if(!Xo){var of=document.createElement("div");of.setAttribute("oninput","return;"),Xo=typeof of.oninput=="function"}Yo=Xo}else Yo=!1;rf=Yo&&(!document.documentMode||9<document.documentMode)}function sf(){Yi&&(Yi.detachEvent("onpropertychange",uf),Xi=Yi=null)}function uf(e){if(e.propertyName==="value"&&Wl(Xi)){var t=[];af(t,Xi,e,Do(e)),Qc(Wy,t)}}function Iy(e,t,a){e==="focusin"?(sf(),Yi=t,Xi=a,Yi.attachEvent("onpropertychange",uf)):e==="focusout"&&sf()}function Py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Xi)}function Fy(e,t){if(e==="click")return Wl(t)}function em(e,t){if(e==="input"||e==="change")return Wl(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:tm;function Qi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Pe.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var a=cf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cf(a)}}function df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yl(e.document)}return t}function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nm=Sn&&"documentMode"in document&&11>=document.documentMode,Va=null,Vo=null,Vi=null,Zo=!1;function hf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zo||Va==null||Va!==Yl(i)||(i=Va,"selectionStart"in i&&Qo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vi&&Qi(Vi,i)||(Vi=i,i=Ur(Vo,"onSelect"),0<i.length&&(t=new Kl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Va)))}function ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Za={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},Ko={},gf={};Sn&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function ya(e){if(Ko[e])return Ko[e];if(!Za[e])return e;var t=Za[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gf)return Ko[e]=t[a];return e}var yf=ya("animationend"),mf=ya("animationiteration"),vf=ya("animationstart"),am=ya("transitionrun"),im=ya("transitionstart"),lm=ya("transitioncancel"),bf=ya("transitionend"),Sf=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function an(e,t){Sf.set(e,t),pa(t,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Ka=0,Wo=0;function Pl(){for(var e=Ka,t=Wo=Ka=0;t<e;){var a=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var r=Vt[t];if(Vt[t++]=null,i!==null&&l!==null){var s=i.pending;s===null?l.next=l:(l.next=s.next,s.next=l),i.pending=l}r!==0&&xf(a,l,r)}}function Fl(e,t,a,i){Vt[Ka++]=e,Vt[Ka++]=t,Vt[Ka++]=a,Vt[Ka++]=i,Wo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Io(e,t,a,i){return Fl(e,t,a,i),er(e)}function ma(e,t){return Fl(e,null,null,t),er(e)}function xf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Rt(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function er(e){if(50<hl)throw hl=0,ru=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ja={};function rm(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,a,i){return new rm(e,t,a,i)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var a=e.alternate;return a===null?(a=Ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,a,i,l,r){var s=0;if(i=e,typeof e=="function")Po(e)&&(s=1);else if(typeof e=="string")s=f0(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=Ht(31,a,t,l),e.elementType=_,e.lanes=r,e;case P:return va(a.children,l,r,t);case ve:s=8,l|=24;break;case oe:return e=Ht(12,a,t,l|2),e.elementType=oe,e.lanes=r,e;case z:return e=Ht(13,a,t,l),e.elementType=z,e.lanes=r,e;case O:return e=Ht(19,a,t,l),e.elementType=O,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:s=10;break e;case he:s=9;break e;case se:s=11;break e;case S:s=14;break e;case k:s=16,i=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Ht(s,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function va(e,t,a,i){return e=Ht(7,e,i,t),e.lanes=a,e}function Fo(e,t,a){return e=Ht(6,e,null,t),e.lanes=a,e}function zf(e){var t=Ht(18,null,null,0);return t.stateNode=e,t}function es(e,t,a){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Of=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var a=Of.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ie(t)},Of.set(e,t),t)}return{value:e,source:t,stack:Ie(t)}}var Wa=[],Ia=0,nr=null,Zi=0,Kt=[],Jt=0,Bn=null,fn=1,dn="";function wn(e,t){Wa[Ia++]=Zi,Wa[Ia++]=nr,nr=e,Zi=t}function Tf(e,t,a){Kt[Jt++]=fn,Kt[Jt++]=dn,Kt[Jt++]=Bn,Bn=e;var i=fn;e=dn;var l=32-Rt(i)-1;i&=~(1<<l),a+=1;var r=32-Rt(t)+l;if(30<r){var s=l-l%5;r=(i&(1<<s)-1).toString(32),i>>=s,l-=s,fn=1<<32-Rt(t)+l|a<<l|i,dn=r+e}else fn=1<<r|a<<l|i,dn=e}function ts(e){e.return!==null&&(wn(e,1),Tf(e,1,0))}function ns(e){for(;e===nr;)nr=Wa[--Ia],Wa[Ia]=null,Zi=Wa[--Ia],Wa[Ia]=null;for(;e===Bn;)Bn=Kt[--Jt],Kt[Jt]=null,dn=Kt[--Jt],Kt[Jt]=null,fn=Kt[--Jt],Kt[Jt]=null}function $f(e,t){Kt[Jt++]=fn,Kt[Jt++]=dn,Kt[Jt++]=Bn,fn=t.id,dn=t.overflow,Bn=e}var St=null,Ve=null,De=!1,qn=null,Wt=!1,as=Error(u(519));function Gn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(Zt(t,e)),as}function Af(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[bt]=e,t[At]=i,a){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(a=0;a<yl.length;a++)Me(yl[a],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Lc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),qc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Xp(t.textContent,a)?(i.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),i.onScroll!=null&&Me("scroll",t),i.onScrollEnd!=null&&Me("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Gn(e,!0)}function Ef(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:St=St.return}}function Pa(e){if(e!==St)return!1;if(!De)return Ef(e),De=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xu(e.type,e.memoizedProps)),a=!a),a&&Ve&&Gn(e),Ef(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ve=Fp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ve=Fp(e)}else t===27?(t=Ve,na(e.type)?(e=$u,$u=null,Ve=e):Ve=t):Ve=St?Pt(e.stateNode.nextSibling):null;return!0}function ba(){Ve=St=null,De=!1}function is(){var e=qn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),qn=null),e}function Ki(e){qn===null?qn=[e]:qn.push(e)}var ls=p(null),Sa=null,zn=null;function Yn(e,t,a){U(ls,t._currentValue),t._currentValue=a}function On(e){e._currentValue=ls.current,b(ls)}function rs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function os(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var x=0;x<t.length;x++)if(h.context===t[x]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),rs(r.return,a,e),i||(s=null);break e}r=h.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),rs(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Fa(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var h=l.type;Nt(l.pendingProps.value,s.value)||(e!==null?e.push(h):e=[h])}}else if(l===te.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(xl):e=[xl])}l=l.return}e!==null&&os(t,e,a,i),t.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){Sa=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return _f(Sa,e)}function ir(e,t){return Sa===null&&xa(e),_f(e,t)}function _f(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},zn===null){if(e===null)throw Error(u(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return a}var om=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},sm=n.unstable_scheduleCallback,um=n.unstable_NormalPriority,it={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ss(){return{controller:new om,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&sm(um,function(){e.controller.abort()})}var Wi=null,us=0,ei=0,ti=null;function cm(e,t){if(Wi===null){var a=Wi=[];us=0,ei=du(),ti={status:"pending",value:void 0,then:function(i){a.push(i)}}}return us++,t.then(jf,jf),t}function jf(){if(--us===0&&Wi!==null){ti!==null&&(ti.status="fulfilled");var e=Wi;Wi=null,ei=0,ti=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fm(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Mf=A.S;A.S=function(e,t){hp=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cm(e,t),Mf!==null&&Mf(e,t)};var wa=p(null);function cs(){var e=wa.current;return e!==null?e:Qe.pooledCache}function lr(e,t){t===null?U(wa,wa.current):U(wa,t.pool)}function Cf(){var e=cs();return e===null?null:{parent:it._currentValue,pool:e}}var ni=Error(u(460)),fs=Error(u(474)),rr=Error(u(542)),or={then:function(){}};function kf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Df(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(bn,bn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e}throw Oa=t,ni}}function za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Oa=a,ni):a}}var Oa=null;function Rf(){if(Oa===null)throw Error(u(459));var e=Oa;return Oa=null,e}function Nf(e){if(e===ni||e===rr)throw Error(u(483))}var ai=null,Ii=0;function sr(e){var t=Ii;return Ii+=1,ai===null&&(ai=[]),Df(ai,e,t)}function Pi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===ae?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){function t(M,$){if(e){var N=M.deletions;N===null?(M.deletions=[$],M.flags|=16):N.push($)}}function a(M,$){if(!e)return null;for(;$!==null;)t(M,$),$=$.sibling;return null}function i(M){for(var $=new Map;M!==null;)M.key!==null?$.set(M.key,M):$.set(M.index,M),M=M.sibling;return $}function l(M,$){return M=xn(M,$),M.index=0,M.sibling=null,M}function r(M,$,N){return M.index=N,e?(N=M.alternate,N!==null?(N=N.index,N<$?(M.flags|=67108866,$):N):(M.flags|=67108866,$)):(M.flags|=1048576,$)}function s(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function h(M,$,N,I){return $===null||$.tag!==6?($=Fo(N,M.mode,I),$.return=M,$):($=l($,N),$.return=M,$)}function x(M,$,N,I){var ye=N.type;return ye===P?Q(M,$,N.props.children,I,N.key):$!==null&&($.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===k&&za(ye)===$.type)?($=l($,N.props),Pi($,N),$.return=M,$):($=tr(N.type,N.key,N.props,null,M.mode,I),Pi($,N),$.return=M,$)}function H(M,$,N,I){return $===null||$.tag!==4||$.stateNode.containerInfo!==N.containerInfo||$.stateNode.implementation!==N.implementation?($=es(N,M.mode,I),$.return=M,$):($=l($,N.children||[]),$.return=M,$)}function Q(M,$,N,I,ye){return $===null||$.tag!==7?($=va(N,M.mode,I,ye),$.return=M,$):($=l($,N),$.return=M,$)}function F(M,$,N){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Fo(""+$,M.mode,N),$.return=M,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case ue:return N=tr($.type,$.key,$.props,null,M.mode,N),Pi(N,$),N.return=M,N;case le:return $=es($,M.mode,N),$.return=M,$;case k:return $=za($),F(M,$,N)}if(ee($)||Z($))return $=va($,M.mode,N,null),$.return=M,$;if(typeof $.then=="function")return F(M,sr($),N);if($.$$typeof===ne)return F(M,ir(M,$),N);ur(M,$)}return null}function L(M,$,N,I){var ye=$!==null?$.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ye!==null?null:h(M,$,""+N,I);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:return N.key===ye?x(M,$,N,I):null;case le:return N.key===ye?H(M,$,N,I):null;case k:return N=za(N),L(M,$,N,I)}if(ee(N)||Z(N))return ye!==null?null:Q(M,$,N,I,null);if(typeof N.then=="function")return L(M,$,sr(N),I);if(N.$$typeof===ne)return L(M,$,ir(M,N),I);ur(M,N)}return null}function G(M,$,N,I,ye){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return M=M.get(N)||null,h($,M,""+I,ye);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ue:return M=M.get(I.key===null?N:I.key)||null,x($,M,I,ye);case le:return M=M.get(I.key===null?N:I.key)||null,H($,M,I,ye);case k:return I=za(I),G(M,$,N,I,ye)}if(ee(I)||Z(I))return M=M.get(N)||null,Q($,M,I,ye,null);if(typeof I.then=="function")return G(M,$,N,sr(I),ye);if(I.$$typeof===ne)return G(M,$,N,ir($,I),ye);ur($,I)}return null}function fe(M,$,N,I){for(var ye=null,Re=null,pe=$,Te=$=0,ke=null;pe!==null&&Te<N.length;Te++){pe.index>Te?(ke=pe,pe=null):ke=pe.sibling;var Ne=L(M,pe,N[Te],I);if(Ne===null){pe===null&&(pe=ke);break}e&&pe&&Ne.alternate===null&&t(M,pe),$=r(Ne,$,Te),Re===null?ye=Ne:Re.sibling=Ne,Re=Ne,pe=ke}if(Te===N.length)return a(M,pe),De&&wn(M,Te),ye;if(pe===null){for(;Te<N.length;Te++)pe=F(M,N[Te],I),pe!==null&&($=r(pe,$,Te),Re===null?ye=pe:Re.sibling=pe,Re=pe);return De&&wn(M,Te),ye}for(pe=i(pe);Te<N.length;Te++)ke=G(pe,M,Te,N[Te],I),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?Te:ke.key),$=r(ke,$,Te),Re===null?ye=ke:Re.sibling=ke,Re=ke);return e&&pe.forEach(function(oa){return t(M,oa)}),De&&wn(M,Te),ye}function me(M,$,N,I){if(N==null)throw Error(u(151));for(var ye=null,Re=null,pe=$,Te=$=0,ke=null,Ne=N.next();pe!==null&&!Ne.done;Te++,Ne=N.next()){pe.index>Te?(ke=pe,pe=null):ke=pe.sibling;var oa=L(M,pe,Ne.value,I);if(oa===null){pe===null&&(pe=ke);break}e&&pe&&oa.alternate===null&&t(M,pe),$=r(oa,$,Te),Re===null?ye=oa:Re.sibling=oa,Re=oa,pe=ke}if(Ne.done)return a(M,pe),De&&wn(M,Te),ye;if(pe===null){for(;!Ne.done;Te++,Ne=N.next())Ne=F(M,Ne.value,I),Ne!==null&&($=r(Ne,$,Te),Re===null?ye=Ne:Re.sibling=Ne,Re=Ne);return De&&wn(M,Te),ye}for(pe=i(pe);!Ne.done;Te++,Ne=N.next())Ne=G(pe,M,Te,Ne.value,I),Ne!==null&&(e&&Ne.alternate!==null&&pe.delete(Ne.key===null?Te:Ne.key),$=r(Ne,$,Te),Re===null?ye=Ne:Re.sibling=Ne,Re=Ne);return e&&pe.forEach(function(w0){return t(M,w0)}),De&&wn(M,Te),ye}function Xe(M,$,N,I){if(typeof N=="object"&&N!==null&&N.type===P&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:e:{for(var ye=N.key;$!==null;){if($.key===ye){if(ye=N.type,ye===P){if($.tag===7){a(M,$.sibling),I=l($,N.props.children),I.return=M,M=I;break e}}else if($.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===k&&za(ye)===$.type){a(M,$.sibling),I=l($,N.props),Pi(I,N),I.return=M,M=I;break e}a(M,$);break}else t(M,$);$=$.sibling}N.type===P?(I=va(N.props.children,M.mode,I,N.key),I.return=M,M=I):(I=tr(N.type,N.key,N.props,null,M.mode,I),Pi(I,N),I.return=M,M=I)}return s(M);case le:e:{for(ye=N.key;$!==null;){if($.key===ye)if($.tag===4&&$.stateNode.containerInfo===N.containerInfo&&$.stateNode.implementation===N.implementation){a(M,$.sibling),I=l($,N.children||[]),I.return=M,M=I;break e}else{a(M,$);break}else t(M,$);$=$.sibling}I=es(N,M.mode,I),I.return=M,M=I}return s(M);case k:return N=za(N),Xe(M,$,N,I)}if(ee(N))return fe(M,$,N,I);if(Z(N)){if(ye=Z(N),typeof ye!="function")throw Error(u(150));return N=ye.call(N),me(M,$,N,I)}if(typeof N.then=="function")return Xe(M,$,sr(N),I);if(N.$$typeof===ne)return Xe(M,$,ir(M,N),I);ur(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,$!==null&&$.tag===6?(a(M,$.sibling),I=l($,N),I.return=M,M=I):(a(M,$),I=Fo(N,M.mode,I),I.return=M,M=I),s(M)):a(M,$)}return function(M,$,N,I){try{Ii=0;var ye=Xe(M,$,N,I);return ai=null,ye}catch(pe){if(pe===ni||pe===rr)throw pe;var Re=Ht(29,pe,null,M.mode);return Re.lanes=I,Re.return=M,Re}finally{}}}var Ta=Hf(!0),Uf=Hf(!1),Xn=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(He&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=er(e),xf(e,null,a),t}return Fl(e,i,t,a),er(e)}function Fi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ec(e,a)}}function hs(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var gs=!1;function el(){if(gs){var e=ti;if(e!==null)throw e}}function tl(e,t,a,i){gs=!1;var l=e.updateQueue;Xn=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var x=h,H=x.next;x.next=null,s===null?r=H:s.next=H,s=x;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==s&&(h===null?Q.firstBaseUpdate=H:h.next=H,Q.lastBaseUpdate=x))}if(r!==null){var F=l.baseState;s=0,Q=H=x=null,h=r;do{var L=h.lane&-536870913,G=L!==h.lane;if(G?(Ce&L)===L:(i&L)===L){L!==0&&L===ei&&(gs=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var fe=e,me=h;L=t;var Xe=a;switch(me.tag){case 1:if(fe=me.payload,typeof fe=="function"){F=fe.call(Xe,F,L);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=me.payload,L=typeof fe=="function"?fe.call(Xe,F,L):fe,L==null)break e;F=X({},F,L);break e;case 2:Xn=!0}}L=h.callback,L!==null&&(e.flags|=64,G&&(e.flags|=8192),G=l.callbacks,G===null?l.callbacks=[L]:G.push(L))}else G={lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(H=Q=G,x=F):Q=Q.next=G,s|=L;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;G=h,h=G.next,G.next=null,l.lastBaseUpdate=G,l.shared.pending=null}}while(!0);Q===null&&(x=F),l.baseState=x,l.firstBaseUpdate=H,l.lastBaseUpdate=Q,r===null&&(l.shared.lanes=0),In|=s,e.lanes=s,e.memoizedState=F}}function Lf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Bf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lf(a[e],t)}var ii=p(null),cr=p(0);function qf(e,t){e=kn,U(cr,e),U(ii,t),kn=e|t.baseLanes}function ys(){U(cr,kn),U(ii,ii.current)}function ms(){kn=cr.current,b(ii),b(cr)}var Ut=p(null),It=null;function Zn(e){var t=e.alternate;U(nt,nt.current&1),U(Ut,e),It===null&&(t===null||ii.current!==null||t.memoizedState!==null)&&(It=e)}function vs(e){U(nt,nt.current),U(Ut,e),It===null&&(It=e)}function Gf(e){e.tag===22?(U(nt,nt.current),U(Ut,e),It===null&&(It=e)):Kn()}function Kn(){U(nt,nt.current),U(Ut,Ut.current)}function Lt(e){b(Ut),It===e&&(It=null),b(nt)}var nt=p(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ou(a)||Tu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tn=0,ze=null,Ge=null,lt=null,dr=!1,li=!1,$a=!1,pr=0,nl=0,ri=null,dm=0;function Fe(){throw Error(u(321))}function bs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Nt(e[a],t[a]))return!1;return!0}function Ss(e,t,a,i,l,r){return Tn=r,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Td:Rs,$a=!1,r=a(i,l),$a=!1,li&&(r=Xf(t,a,i,l)),Yf(e),r}function Yf(e){A.H=ll;var t=Ge!==null&&Ge.next!==null;if(Tn=0,lt=Ge=ze=null,dr=!1,nl=0,ri=null,t)throw Error(u(300));e===null||rt||(e=e.dependencies,e!==null&&ar(e)&&(rt=!0))}function Xf(e,t,a,i){ze=e;var l=0;do{if(li&&(ri=null),nl=0,li=!1,25<=l)throw Error(u(301));if(l+=1,lt=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}A.H=$d,r=t(a,i)}while(li);return r}function pm(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ze.flags|=1024),t}function xs(){var e=pr!==0;return pr=0,e}function ws(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zs(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}Tn=0,lt=Ge=ze=null,li=!1,nl=pr=0,ri=null}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?ze.memoizedState=lt=e:lt=lt.next=e,lt}function at(){if(Ge===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=lt===null?ze.memoizedState:lt.next;if(t!==null)lt=t,Ge=e;else{if(e===null)throw ze.alternate===null?Error(u(467)):Error(u(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},lt===null?ze.memoizedState=lt=e:lt=lt.next=e}return lt}function hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=nl;return nl+=1,ri===null&&(ri=[]),e=Df(ri,e,t),t=ze,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Td:Rs),e}function gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===ne)return xt(e)}throw Error(u(438,String(e)))}function Os(e){var t=null,a=ze.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ze.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hr(),ze.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function $n(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=at();return Ts(t,Ge,e)}function Ts(e,t,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=s=null,x=null,H=t,Q=!1;do{var F=H.lane&-536870913;if(F!==H.lane?(Ce&F)===F:(Tn&F)===F){var L=H.revertLane;if(L===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),F===ei&&(Q=!0);else if((Tn&L)===L){H=H.next,L===ei&&(Q=!0);continue}else F={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},x===null?(h=x=F,s=r):x=x.next=F,ze.lanes|=L,In|=L;F=H.action,$a&&a(r,F),r=H.hasEagerState?H.eagerState:a(r,F)}else L={lane:F,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},x===null?(h=x=L,s=r):x=x.next=L,ze.lanes|=F,In|=F;H=H.next}while(H!==null&&H!==t);if(x===null?s=r:x.next=h,!Nt(r,e.memoizedState)&&(rt=!0,Q&&(a=ti,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=x,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function $s(e){var t=at(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);Nt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function Qf(e,t,a){var i=ze,l=at(),r=De;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!Nt((Ge||l).memoizedState,a);if(s&&(l.memoizedState=a,rt=!0),l=l.queue,_s(Kf.bind(null,i,l,e),[e]),l.getSnapshot!==t||s||lt!==null&&lt.memoizedState.tag&1){if(i.flags|=2048,oi(9,{destroy:void 0},Zf.bind(null,i,l,a,t),null),Qe===null)throw Error(u(349));r||(Tn&127)!==0||Vf(i,t,a)}return a}function Vf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ze.updateQueue,t===null?(t=hr(),ze.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zf(e,t,a,i){t.value=a,t.getSnapshot=i,Jf(t)&&Wf(e)}function Kf(e,t,a){return a(function(){Jf(t)&&Wf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Nt(e,a)}catch{return!0}}function Wf(e){var t=ma(e,2);t!==null&&kt(t,e,2)}function As(e){var t=$t();if(typeof e=="function"){var a=e;if(e=a(),$a){Hn(!0);try{a()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t}function If(e,t,a,i){return e.baseState=a,Ts(e,Ge,typeof i=="function"?i:$n)}function hm(e,t,a,i,l){if(br(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};A.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,Pf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Pf(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=A.T,s={};A.T=s;try{var h=a(l,i),x=A.S;x!==null&&x(s,h),Ff(e,t,h)}catch(H){Es(e,t,H)}finally{r!==null&&s.types!==null&&(r.types=s.types),A.T=r}}else try{r=a(l,i),Ff(e,t,r)}catch(H){Es(e,t,H)}}function Ff(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){ed(e,t,i)},function(i){return Es(e,t,i)}):ed(e,t,a)}function ed(e,t,a){t.status="fulfilled",t.value=a,td(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Pf(e,a)))}function Es(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,td(t),t=t.next;while(t!==i)}e.action=null}function td(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nd(e,t){return t}function ad(e,t){if(De){var a=Qe.formState;if(a!==null){e:{var i=ze;if(De){if(Ve){t:{for(var l=Ve,r=Wt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ve=Pt(l.nextSibling),i=l.data==="F!";break e}}Gn(i)}i=!1}i&&(t=a[0])}}return a=$t(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:t},a.queue=i,a=wd.bind(null,ze,i),i.dispatch=a,i=As(!1),r=Ds.bind(null,ze,!1,i.queue),i=$t(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=hm.bind(null,ze,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function id(e){var t=at();return ld(t,Ge,e)}function ld(e,t,a){if(t=Ts(e,t,nd)[0],e=yr($n)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=al(t)}catch(s){throw s===ni?rr:s}else i=t;t=at();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(ze.flags|=2048,oi(9,{destroy:void 0},gm.bind(null,l,a),null)),[i,r,e]}function gm(e,t){e.action=t}function rd(e){var t=at(),a=Ge;if(a!==null)return ld(t,a,e);at(),t=t.memoizedState,a=at();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function oi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ze.updateQueue,t===null&&(t=hr(),ze.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function od(){return at().memoizedState}function mr(e,t,a,i){var l=$t();ze.flags|=e,l.memoizedState=oi(1|t,{destroy:void 0},a,i===void 0?null:i)}function vr(e,t,a,i){var l=at();i=i===void 0?null:i;var r=l.memoizedState.inst;Ge!==null&&i!==null&&bs(i,Ge.memoizedState.deps)?l.memoizedState=oi(t,r,a,i):(ze.flags|=e,l.memoizedState=oi(1|t,r,a,i))}function sd(e,t){mr(8390656,8,e,t)}function _s(e,t){vr(2048,8,e,t)}function ym(e){ze.flags|=4;var t=ze.updateQueue;if(t===null)t=hr(),ze.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ud(e){var t=at().memoizedState;return ym({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function cd(e,t){return vr(4,2,e,t)}function fd(e,t){return vr(4,4,e,t)}function dd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,a){a=a!=null?a.concat([e]):null,vr(4,4,dd.bind(null,t,e),a)}function js(){}function hd(e,t){var a=at();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&bs(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function gd(e,t){var a=at();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&bs(t,i[1]))return i[0];if(i=e(),$a){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[i,t],i}function Ms(e,t,a){return a===void 0||(Tn&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=yp(),ze.lanes|=e,In|=e,a)}function yd(e,t,a,i){return Nt(a,t)?a:ii.current!==null?(e=Ms(e,a,i),Nt(e,t)||(rt=!0),e):(Tn&42)===0||(Tn&1073741824)!==0&&(Ce&261930)===0?(rt=!0,e.memoizedState=a):(e=yp(),ze.lanes|=e,In|=e,t)}function md(e,t,a,i,l){var r=c.p;c.p=r!==0&&8>r?r:8;var s=A.T,h={};A.T=h,Ds(e,!1,t,a);try{var x=l(),H=A.S;if(H!==null&&H(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var Q=fm(x,i);il(e,t,Q,Gt(e))}else il(e,t,i,Gt(e))}catch(F){il(e,t,{then:function(){},status:"rejected",reason:F},Gt())}finally{c.p=r,s!==null&&h.types!==null&&(s.types=h.types),A.T=s}}function mm(){}function Cs(e,t,a,i){if(e.tag!==5)throw Error(u(476));var l=vd(e).queue;md(e,l,t,ie,a===null?mm:function(){return bd(e),a(i)})}function vd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:ie},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bd(e){var t=vd(e);t.next===null&&(t=e.alternate.memoizedState),il(e,t.next.queue,{},Gt())}function ks(){return xt(xl)}function Sd(){return at().memoizedState}function xd(){return at().memoizedState}function vm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gt();e=Qn(a);var i=Vn(t,e,a);i!==null&&(kt(i,t,a),Fi(i,t,a)),t={cache:ss()},e.payload=t;return}t=t.return}}function bm(e,t,a){var i=Gt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},br(e)?zd(t,a):(a=Io(e,t,a,i),a!==null&&(kt(a,e,i),Od(a,t,i)))}function wd(e,t,a){var i=Gt();il(e,t,a,i)}function il(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(br(e))zd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,h=r(s,a);if(l.hasEagerState=!0,l.eagerState=h,Nt(h,s))return Fl(e,t,l,0),Qe===null&&Pl(),!1}catch{}finally{}if(a=Io(e,t,l,i),a!==null)return kt(a,e,i),Od(a,t,i),!0}return!1}function Ds(e,t,a,i){if(i={lane:2,revertLane:du(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},br(e)){if(t)throw Error(u(479))}else t=Io(e,a,i,2),t!==null&&kt(t,e,2)}function br(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function zd(e,t){li=dr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Od(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Ec(e,a)}}var ll={readContext:xt,use:gr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};ll.useEffectEvent=Fe;var Td={readContext:xt,use:gr,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:sd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mr(4194308,4,dd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mr(4194308,4,e,t)},useInsertionEffect:function(e,t){mr(4,2,e,t)},useMemo:function(e,t){var a=$t();t=t===void 0?null:t;var i=e();if($a){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=$t();if(a!==void 0){var l=a(t);if($a){Hn(!0);try{a(t)}finally{Hn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=bm.bind(null,ze,e),[i.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:function(e){e=As(e);var t=e.queue,a=wd.bind(null,ze,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:js,useDeferredValue:function(e,t){var a=$t();return Ms(a,e,t)},useTransition:function(){var e=As(!1);return e=md.bind(null,ze,e.queue,!0,!1),$t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ze,l=$t();if(De){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Qe===null)throw Error(u(349));(Ce&127)!==0||Vf(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,sd(Kf.bind(null,i,r,e),[e]),i.flags|=2048,oi(9,{destroy:void 0},Zf.bind(null,i,r,a,t),null),a},useId:function(){var e=$t(),t=Qe.identifierPrefix;if(De){var a=dn,i=fn;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=dm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ad,useActionState:ad,useOptimistic:function(e){var t=$t();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ds.bind(null,ze,!0,a),a.dispatch=t,[e,t]},useMemoCache:Os,useCacheRefresh:function(){return $t().memoizedState=vm.bind(null,ze)},useEffectEvent:function(e){var t=$t(),a={impl:e};return t.memoizedState=a,function(){if((He&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Rs={readContext:xt,use:gr,useCallback:hd,useContext:xt,useEffect:_s,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:gd,useReducer:yr,useRef:od,useState:function(){return yr($n)},useDebugValue:js,useDeferredValue:function(e,t){var a=at();return yd(a,Ge.memoizedState,e,t)},useTransition:function(){var e=yr($n)[0],t=at().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Qf,useId:Sd,useHostTransitionStatus:ks,useFormState:id,useActionState:id,useOptimistic:function(e,t){var a=at();return If(a,Ge,e,t)},useMemoCache:Os,useCacheRefresh:xd};Rs.useEffectEvent=ud;var $d={readContext:xt,use:gr,useCallback:hd,useContext:xt,useEffect:_s,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:gd,useReducer:$s,useRef:od,useState:function(){return $s($n)},useDebugValue:js,useDeferredValue:function(e,t){var a=at();return Ge===null?Ms(a,e,t):yd(a,Ge.memoizedState,e,t)},useTransition:function(){var e=$s($n)[0],t=at().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Qf,useId:Sd,useHostTransitionStatus:ks,useFormState:rd,useActionState:rd,useOptimistic:function(e,t){var a=at();return Ge!==null?If(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Os,useCacheRefresh:xd};$d.useEffectEvent=ud;function Ns(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:X({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hs={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Gt(),l=Qn(i);l.payload=t,a!=null&&(l.callback=a),t=Vn(e,l,i),t!==null&&(kt(t,e,i),Fi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Gt(),l=Qn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Vn(e,l,i),t!==null&&(kt(t,e,i),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gt(),i=Qn(a);i.tag=2,t!=null&&(i.callback=t),t=Vn(e,i,a),t!==null&&(kt(t,e,a),Fi(t,e,a))}};function Ad(e,t,a,i,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!Qi(a,i)||!Qi(l,r):!0}function Ed(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=X({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function _d(e){Il(e)}function jd(e){console.error(e)}function Md(e){Il(e)}function Sr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Cd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Us(e,t,a){return a=Qn(a),a.tag=3,a.payload={element:null},a.callback=function(){Sr(e,t)},a}function kd(e){return e=Qn(e),e.tag=3,e}function Dd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){Cd(t,a,i)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Cd(t,a,i),typeof l!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function Sm(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Fa(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 31:case 13:return It===null?Cr():a.alternate===null&&et===0&&(et=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===or?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),uu(e,i,l)),!1;case 22:return a.flags|=65536,i===or?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),uu(e,i,l)),!1}throw Error(u(435,a.tag))}return uu(e,i,l),Cr(),!1}if(De)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==as&&(e=Error(u(422),{cause:i}),Ki(Zt(e,a)))):(i!==as&&(t=Error(u(423),{cause:i}),Ki(Zt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Zt(i,a),l=Us(e.stateNode,i,l),hs(e,l),et!==4&&(et=2)),!1;var r=Error(u(520),{cause:i});if(r=Zt(r,a),pl===null?pl=[r]:pl.push(r),et!==4&&(et=2),t===null)return!0;i=Zt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Us(a.stateNode,i,e),hs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=kd(l),Dd(l,e,a,i),hs(a,l),!1}a=a.return}while(a!==null);return!1}var Ls=Error(u(461)),rt=!1;function wt(e,t,a,i){t.child=e===null?Uf(t,null,a,i):Ta(t,e.child,a,i)}function Rd(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var s={};for(var h in i)h!=="ref"&&(s[h]=i[h])}else s=i;return xa(t),i=Ss(e,t,a,s,r,l),h=xs(),e!==null&&!rt?(ws(e,t,l),An(e,t,l)):(De&&h&&ts(t),t.flags|=1,wt(e,t,i,l),t.child)}function Nd(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!Po(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Hd(e,t,r,i,l)):(e=tr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Zs(e,l)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Qi,a(s,i)&&e.ref===t.ref)return An(e,t,l)}return t.flags|=1,e=xn(r,i),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(Qi(r,i)&&e.ref===t.ref)if(rt=!1,t.pendingProps=i=r,Zs(e,l))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,An(e,t,l)}return Bs(e,t,a,i,l)}function Ud(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return Ld(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,r!==null?r.cachePool:null),r!==null?qf(t,r):ys(),Gf(t);else return i=t.lanes=536870912,Ld(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(lr(t,r.cachePool),qf(t,r),Kn(),t.memoizedState=null):(e!==null&&lr(t,null),ys(),Kn());return wt(e,t,l,a),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ld(e,t,a,i,l){var r=cs();return r=r===null?null:{parent:it._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&lr(t,null),ys(),Gf(t),e!==null&&Fa(e,t,i,!0),t.childLanes=l,null}function xr(e,t){return t=zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Bd(e,t,a){return Ta(t,e.child,null,a),e=xr(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function xm(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(De){if(i.mode==="hidden")return e=xr(t,i),t.lanes=536870912,rl(null,e);if(vs(t),(e=Ve)?(e=Pp(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,St=t,Ve=null)):e=null,e===null)throw Gn(t);return t.lanes=536870912,null}return xr(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(vs(t),l)if(t.flags&256)t.flags&=-257,t=Bd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(rt||Fa(e,t,a,!1),l=(a&e.childLanes)!==0,rt||l){if(i=Qe,i!==null&&(s=_c(i,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,ma(e,s),kt(i,e,s),Ls;Cr(),t=Bd(e,t,a)}else e=r.treeContext,Ve=Pt(s.nextSibling),St=t,De=!0,qn=null,Wt=!1,e!==null&&$f(t,e),t=xr(t,i),t.flags|=4096;return t}return e=xn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Bs(e,t,a,i,l){return xa(t),a=Ss(e,t,a,i,void 0,l),i=xs(),e!==null&&!rt?(ws(e,t,l),An(e,t,l)):(De&&i&&ts(t),t.flags|=1,wt(e,t,a,l),t.child)}function qd(e,t,a,i,l,r){return xa(t),t.updateQueue=null,a=Xf(t,i,a,l),Yf(e),i=xs(),e!==null&&!rt?(ws(e,t,r),An(e,t,r)):(De&&i&&ts(t),t.flags|=1,wt(e,t,a,r),t.child)}function Gd(e,t,a,i,l){if(xa(t),t.stateNode===null){var r=Ja,s=a.contextType;typeof s=="object"&&s!==null&&(r=xt(s)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},ds(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?xt(s):Ja,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ns(t,a,s,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Hs.enqueueReplaceState(r,r.state,null),tl(t,i,r,l),el(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,x=Aa(a,h);r.props=x;var H=r.context,Q=a.contextType;s=Ja,typeof Q=="object"&&Q!==null&&(s=xt(Q));var F=a.getDerivedStateFromProps;Q=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||H!==s)&&Ed(t,r,i,s),Xn=!1;var L=t.memoizedState;r.state=L,tl(t,i,r,l),el(),H=t.memoizedState,h||L!==H||Xn?(typeof F=="function"&&(Ns(t,a,F,i),H=t.memoizedState),(x=Xn||Ad(t,a,x,i,L,H,s))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=H),r.props=i,r.state=H,r.context=s,i=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,ps(e,t),s=t.memoizedProps,Q=Aa(a,s),r.props=Q,F=t.pendingProps,L=r.context,H=a.contextType,x=Ja,typeof H=="object"&&H!==null&&(x=xt(H)),h=a.getDerivedStateFromProps,(H=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==F||L!==x)&&Ed(t,r,i,x),Xn=!1,L=t.memoizedState,r.state=L,tl(t,i,r,l),el();var G=t.memoizedState;s!==F||L!==G||Xn||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof h=="function"&&(Ns(t,a,h,i),G=t.memoizedState),(Q=Xn||Ad(t,a,Q,i,L,G,x)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(H||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,G,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,G,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=G),r.props=i,r.state=G,r.context=x,i=Q):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,wr(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Ta(t,e.child,null,l),t.child=Ta(t,null,a,l)):wt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=An(e,t,l),e}function Yd(e,t,a,i){return ba(),t.flags|=256,wt(e,t,a,i),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gs(e){return{baseLanes:e,cachePool:Cf()}}function Ys(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function Xd(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(l?Zn(t):Kn(),(e=Ve)?(e=Pp(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=zf(e),a.return=t,t.child=a,St=t,Ve=null)):e=null,e===null)throw Gn(t);return Tu(e)?t.lanes=32:t.lanes=536870912,null}var h=i.children;return i=i.fallback,l?(Kn(),l=t.mode,h=zr({mode:"hidden",children:h},l),i=va(i,l,a,null),h.return=t,i.return=t,h.sibling=i,t.child=h,i=t.child,i.memoizedState=Gs(a),i.childLanes=Ys(e,s,a),t.memoizedState=qs,rl(null,i)):(Zn(t),Xs(t,h))}var x=e.memoizedState;if(x!==null&&(h=x.dehydrated,h!==null)){if(r)t.flags&256?(Zn(t),t.flags&=-257,t=Qs(e,t,a)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),h=i.fallback,l=t.mode,i=zr({mode:"visible",children:i.children},l),h=va(h,l,a,null),h.flags|=2,i.return=t,h.return=t,i.sibling=h,t.child=i,Ta(t,e.child,null,a),i=t.child,i.memoizedState=Gs(a),i.childLanes=Ys(e,s,a),t.memoizedState=qs,t=rl(null,i));else if(Zn(t),Tu(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var H=s.dgst;s=H,i=Error(u(419)),i.stack="",i.digest=s,Ki({value:i,source:null,stack:null}),t=Qs(e,t,a)}else if(rt||Fa(e,t,a,!1),s=(a&e.childLanes)!==0,rt||s){if(s=Qe,s!==null&&(i=_c(s,a),i!==0&&i!==x.retryLane))throw x.retryLane=i,ma(e,i),kt(s,e,i),Ls;Ou(h)||Cr(),t=Qs(e,t,a)}else Ou(h)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ve=Pt(h.nextSibling),St=t,De=!0,qn=null,Wt=!1,e!==null&&$f(t,e),t=Xs(t,i.children),t.flags|=4096);return t}return l?(Kn(),h=i.fallback,l=t.mode,x=e.child,H=x.sibling,i=xn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,H!==null?h=xn(H,h):(h=va(h,l,a,null),h.flags|=2),h.return=t,i.return=t,i.sibling=h,t.child=i,rl(null,i),i=t.child,h=e.child.memoizedState,h===null?h=Gs(a):(l=h.cachePool,l!==null?(x=it._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Cf(),h={baseLanes:h.baseLanes|a,cachePool:l}),i.memoizedState=h,i.childLanes=Ys(e,s,a),t.memoizedState=qs,rl(e.child,i)):(Zn(t),a=e.child,e=a.sibling,a=xn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Xs(e,t){return t=zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zr(e,t){return e=Ht(22,e,null,t),e.lanes=0,e}function Qs(e,t,a){return Ta(t,e.child,null,a),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),rs(e.return,t,a)}function Vs(e,t,a,i,l,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l,s.treeForkCount=r)}function Vd(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var s=nt.current,h=(s&2)!==0;if(h?(s=s&1|2,t.flags|=128):s&=1,U(nt,s),wt(e,t,i,a),i=De?Zi:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,a,t);else if(e.tag===19)Qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&fr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Vs(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Vs(t,!0,a,null,r,i);break;case"together":Vs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function An(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Fa(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=xn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function wm(e,t,a){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Yn(t,it,e.memoizedState.cache),ba();break;case 27:case 5:Se(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Zn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Xd(e,t,a):(Zn(t),e=An(e,t,a),e!==null?e.sibling:null);Zn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Fa(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Vd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(nt,nt.current),i)break;return null;case 22:return t.lanes=0,Ud(e,t,a,t.pendingProps);case 24:Yn(t,it,e.memoizedState.cache)}return An(e,t,a)}function Zd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!Zs(e,a)&&(t.flags&128)===0)return rt=!1,wm(e,t,a);rt=(e.flags&131072)!==0}else rt=!1,De&&(t.flags&1048576)!==0&&Tf(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")Po(e)?(i=Aa(e,i),t.tag=1,t=Gd(null,t,e,i,a)):(t.tag=0,t=Bs(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===se){t.tag=11,t=Rd(null,t,e,i,a);break e}else if(l===S){t.tag=14,t=Nd(null,t,e,i,a);break e}}throw t=J(e)||e,Error(u(306,t,""))}}return t;case 0:return Bs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Aa(i,t.pendingProps),Gd(e,t,i,l,a);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,ps(e,t),tl(t,i,null,a);var s=t.memoizedState;if(i=s.cache,Yn(t,it,i),i!==r.cache&&os(t,[it],a,!0),el(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Yd(e,t,i,a);break e}else if(i!==l){l=Zt(Error(u(424)),t),Ki(l),t=Yd(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Pt(e.firstChild),St=t,De=!0,qn=null,Wt=!0,a=Uf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ba(),i===l){t=An(e,t,a);break e}wt(e,t,i,a)}t=t.child}return t;case 26:return wr(e,t),e===null?(a=ih(t.type,null,t.pendingProps,null))?t.memoizedState=a:De||(a=t.type,e=t.pendingProps,i=Lr(K.current).createElement(a),i[bt]=t,i[At]=e,zt(i,a,e),ht(i),t.stateNode=i):t.memoizedState=ih(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&De&&(i=t.stateNode=th(t.type,t.pendingProps,K.current),St=t,Wt=!0,l=Ve,na(t.type)?($u=l,Ve=Pt(i.firstChild)):Ve=l),wt(e,t,t.pendingProps.children,a),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((l=i=Ve)&&(i=Pm(i,t.type,t.pendingProps,Wt),i!==null?(t.stateNode=i,St=t,Ve=Pt(i.firstChild),Wt=!1,l=!0):l=!1),l||Gn(t)),Se(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,xu(l,r)?i=null:s!==null&&xu(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Ss(e,t,pm,null,null,a),xl._currentValue=l),wr(e,t),wt(e,t,i,a),t.child;case 6:return e===null&&De&&((e=a=Ve)&&(a=Fm(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,St=t,Ve=null,e=!0):e=!1),e||Gn(t)),null;case 13:return Xd(e,t,a);case 4:return ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ta(t,null,i,a):wt(e,t,i,a),t.child;case 11:return Rd(e,t,t.type,t.pendingProps,a);case 7:return wt(e,t,t.pendingProps,a),t.child;case 8:return wt(e,t,t.pendingProps.children,a),t.child;case 12:return wt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Yn(t,t.type,i.value),wt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,xa(t),l=xt(l),i=i(l),t.flags|=1,wt(e,t,i,a),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,a);case 15:return Hd(e,t,t.type,t.pendingProps,a);case 19:return Vd(e,t,a);case 31:return xm(e,t,a);case 22:return Ud(e,t,a,t.pendingProps);case 24:return xa(t),i=xt(it),e===null?(l=cs(),l===null&&(l=Qe,r=ss(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},ds(t),Yn(t,it,l)):((e.lanes&a)!==0&&(ps(e,t),tl(t,null,null,a),el()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Yn(t,it,i)):(i=r.cache,Yn(t,it,i),i!==l.cache&&os(t,[it],a,!0))),wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function En(e){e.flags|=4}function Ks(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Sp())e.flags|=8192;else throw Oa=or,fs}else e.flags&=-16777217}function Kd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!uh(t))if(Sp())e.flags|=8192;else throw Oa=or,fs}function Or(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$c():536870912,e.lanes|=t,fi|=t)}function ol(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function zm(e,t,a){var i=t.pendingProps;switch(ns(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),On(it),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,is())),Ze(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(En(t),r!==null?(Ze(t),Kd(t,r)):(Ze(t),Ks(t,l,null,i,a))):r?r!==e.memoizedState?(En(t),Ze(t),Kd(t,r)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&En(t),Ze(t),Ks(t,l,e,i,a)),null;case 27:if(Ae(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}e=D.current,Pa(t)?Af(t):(e=th(l,i,a),t.stateNode=e,En(t))}return Ze(t),null;case 5:if(Ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}if(r=D.current,Pa(t))Af(t);else{var s=Lr(K.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(l,{is:i.is}):s.createElement(l)}}r[bt]=t,r[At]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;e:switch(zt(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&En(t)}}return Ze(t),Ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=K.current,Pa(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=St,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[bt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Xp(e.nodeValue,a)),e||Gn(t,!0)}else e=Lr(e).createTextNode(i),e[bt]=t,t.stateNode=e}return Ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Pa(t),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[bt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else a=is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[bt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),l=!1}else l=is(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Or(t,t.updateQueue),Ze(t),null);case 4:return de(),e===null&&yu(t.stateNode.containerInfo),Ze(t),null;case 10:return On(t.type),Ze(t),null;case 19:if(b(nt),i=t.memoizedState,i===null)return Ze(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)ol(i,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fr(e),r!==null){for(t.flags|=128,ol(i,!1),e=r.updateQueue,t.updateQueue=e,Or(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wf(a,e),a=a.sibling;return U(nt,nt.current&1|2),De&&wn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ot()>_r&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304)}else{if(!l)if(e=fr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Or(t,e),ol(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!De)return Ze(t),null}else 2*Ot()-i.renderingStartTime>_r&&a!==536870912&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ot(),e.sibling=null,a=nt.current,U(nt,l?a&1|2:a&1),De&&wn(t,i.treeForkCount),e):(Ze(t),null);case 22:case 23:return Lt(t),ms(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),a=t.updateQueue,a!==null&&Or(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&b(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),On(it),Ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Om(e,t){switch(ns(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(it),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(nt),null;case 4:return de(),null;case 10:return On(t.type),null;case 22:case 23:return Lt(t),ms(),e!==null&&b(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return On(it),null;case 25:return null;default:return null}}function Jd(e,t){switch(ns(t),t.tag){case 3:On(it),de();break;case 26:case 27:case 5:Ae(t);break;case 4:de();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:b(nt);break;case 10:On(t.type);break;case 22:case 23:Lt(t),ms(),e!==null&&b(wa);break;case 24:On(it)}}function sl(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,s=a.inst;i=r(),s.destroy=i}a=a.next}while(a!==l)}}catch(h){Be(t,t.return,h)}}function Jn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var s=i.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,l=t;var x=a,H=h;try{H()}catch(Q){Be(l,x,Q)}}}i=i.next}while(i!==r)}}catch(Q){Be(t,t.return,Q)}}function Wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Bf(t,a)}catch(i){Be(e,e.return,i)}}}function Id(e,t,a){a.props=Aa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Be(e,t,i)}}function ul(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Be(e,t,l)}}function pn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Be(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Be(e,t,l)}else a.current=null}function Pd(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Be(e,e.return,l)}}function Js(e,t,a){try{var i=e.stateNode;Vm(i,e.type,a,t),i[At]=t}catch(l){Be(e,e.return,l)}}function Fd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Is(e,t,a),e=e.sibling;e!==null;)Is(e,t,a),e=e.sibling}function Tr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tr(e,t,a),e=e.sibling;e!==null;)Tr(e,t,a),e=e.sibling}function ep(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);zt(t,i,a),t[bt]=e,t[At]=a}catch(r){Be(e,e.return,r)}}var _n=!1,ot=!1,Ps=!1,tp=typeof WeakSet=="function"?WeakSet:Set,gt=null;function Tm(e,t){if(e=e.containerInfo,bu=Vr,e=pf(e),Qo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,h=-1,x=-1,H=0,Q=0,F=e,L=null;t:for(;;){for(var G;F!==a||l!==0&&F.nodeType!==3||(h=s+l),F!==r||i!==0&&F.nodeType!==3||(x=s+i),F.nodeType===3&&(s+=F.nodeValue.length),(G=F.firstChild)!==null;)L=F,F=G;for(;;){if(F===e)break t;if(L===a&&++H===l&&(h=s),L===r&&++Q===i&&(x=s),(G=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=G}a=h===-1||x===-1?null:{start:h,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Su={focusedElem:e,selectionRange:a},Vr=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=Aa(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(me){Be(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function np(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Mn(e,a),i&4&&sl(5,a);break;case 1:if(Mn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Be(a,a.return,s)}else{var l=Aa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Be(a,a.return,s)}}i&64&&Wd(a),i&512&&ul(a,a.return);break;case 3:if(Mn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bf(e,t)}catch(s){Be(a,a.return,s)}}break;case 27:t===null&&i&4&&ep(a);case 26:case 5:Mn(e,a),t===null&&i&4&&Pd(a),i&512&&ul(a,a.return);break;case 12:Mn(e,a);break;case 31:Mn(e,a),i&4&&lp(e,a);break;case 13:Mn(e,a),i&4&&rp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dm.bind(null,a),e0(e,a))));break;case 22:if(i=a.memoizedState!==null||_n,!i){t=t!==null&&t.memoizedState!==null||ot,l=_n;var r=ot;_n=i,(ot=t)&&!r?Cn(e,a,(a.subtreeFlags&8772)!==0):Mn(e,a),_n=l,ot=r}break;case 30:break;default:Mn(e,a)}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,_t=!1;function jn(e,t,a){for(a=a.child;a!==null;)ip(e,t,a),a=a.sibling}function ip(e,t,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(ki,a)}catch{}switch(a.tag){case 26:ot||pn(a,t),jn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ot||pn(a,t);var i=Je,l=_t;na(a.type)&&(Je=a.stateNode,_t=!1),jn(e,t,a),vl(a.stateNode),Je=i,_t=l;break;case 5:ot||pn(a,t);case 6:if(i=Je,l=_t,Je=null,jn(e,t,a),Je=i,_t=l,Je!==null)if(_t)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){Be(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){Be(a,t,r)}break;case 18:Je!==null&&(_t?(e=Je,Wp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bi(e)):Wp(Je,a.stateNode));break;case 4:i=Je,l=_t,Je=a.stateNode.containerInfo,_t=!0,jn(e,t,a),Je=i,_t=l;break;case 0:case 11:case 14:case 15:Jn(2,a,t),ot||Jn(4,a,t),jn(e,t,a);break;case 1:ot||(pn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Id(a,t,i)),jn(e,t,a);break;case 21:jn(e,t,a);break;case 22:ot=(i=ot)||a.memoizedState!==null,jn(e,t,a),ot=i;break;default:jn(e,t,a)}}function lp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bi(e)}catch(a){Be(t,t.return,a)}}}function rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bi(e)}catch(a){Be(t,t.return,a)}}function $m(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tp),t;default:throw Error(u(435,e.tag))}}function $r(e,t){var a=$m(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=Rm.bind(null,e,i);i.then(l,l)}})}function jt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,s=t,h=s;e:for(;h!==null;){switch(h.tag){case 27:if(na(h.type)){Je=h.stateNode,_t=!1;break e}break;case 5:Je=h.stateNode,_t=!1;break e;case 3:case 4:Je=h.stateNode.containerInfo,_t=!0;break e}h=h.return}if(Je===null)throw Error(u(160));ip(r,s,l),Je=null,_t=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)op(t,e),t=t.sibling}var ln=null;function op(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Mt(e),i&4&&(Jn(3,e,e.return),sl(3,e),Jn(5,e,e.return));break;case 1:jt(t,e),Mt(e),i&512&&(ot||a===null||pn(a,a.return)),i&64&&_n&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=ln;if(jt(t,e),Mt(e),i&512&&(ot||a===null||pn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ni]||r[bt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),zt(r,i,a),r[bt]=e,ht(r),i=r;break e;case"link":var s=oh("link","href",l).get(i+(a.href||""));if(s){for(var h=0;h<s.length;h++)if(r=s[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(h,1);break t}}r=l.createElement(i),zt(r,i,a),l.head.appendChild(r);break;case"meta":if(s=oh("meta","content",l).get(i+(a.content||""))){for(h=0;h<s.length;h++)if(r=s[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(h,1);break t}}r=l.createElement(i),zt(r,i,a),l.head.appendChild(r);break;default:throw Error(u(468,i))}r[bt]=e,ht(r),i=r}e.stateNode=i}else sh(l,e.type,e.stateNode);else e.stateNode=rh(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?sh(l,e.type,e.stateNode):rh(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Js(e,e.memoizedProps,a.memoizedProps)}break;case 27:jt(t,e),Mt(e),i&512&&(ot||a===null||pn(a,a.return)),a!==null&&i&4&&Js(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jt(t,e),Mt(e),i&512&&(ot||a===null||pn(a,a.return)),e.flags&32){l=e.stateNode;try{Ga(l,"")}catch(fe){Be(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Js(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Ps=!0);break;case 6:if(jt(t,e),Mt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){Be(e,e.return,fe)}}break;case 3:if(Gr=null,l=ln,ln=Br(t.containerInfo),jt(t,e),ln=l,Mt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(fe){Be(e,e.return,fe)}Ps&&(Ps=!1,sp(e));break;case 4:i=ln,ln=Br(e.stateNode.containerInfo),jt(t,e),Mt(e),ln=i;break;case 12:jt(t,e),Mt(e);break;case 31:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$r(e,i)));break;case 13:jt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Er=Ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$r(e,i)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,H=_n,Q=ot;if(_n=H||l,ot=Q||x,jt(t,e),ot=Q,_n=H,Mt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||_n||ot||Ea(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(r=x.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=x.stateNode;var F=x.memoizedProps.style,L=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(fe){Be(x,x.return,fe)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(fe){Be(x,x.return,fe)}}}else if(t.tag===18){if(a===null){x=t;try{var G=x.stateNode;l?Ip(G,!0):Ip(x.stateNode,!1)}catch(fe){Be(x,x.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,$r(e,a))));break;case 19:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$r(e,i)));break;case 30:break;case 21:break;default:jt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Fd(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,r=Ws(e);Tr(e,r,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ga(s,""),a.flags&=-33);var h=Ws(e);Tr(e,h,s);break;case 3:case 4:var x=a.stateNode.containerInfo,H=Ws(e);Is(e,H,x);break;default:throw Error(u(161))}}catch(Q){Be(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)np(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Ea(t);break;case 1:pn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Id(t,t.return,a),Ea(t);break;case 27:vl(t.stateNode);case 26:case 5:pn(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Cn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Cn(l,r,a),sl(4,r);break;case 1:if(Cn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(H){Be(i,i.return,H)}if(i=r,l=i.updateQueue,l!==null){var h=i.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Lf(x[l],h)}catch(H){Be(i,i.return,H)}}a&&s&64&&Wd(r),ul(r,r.return);break;case 27:ep(r);case 26:case 5:Cn(l,r,a),a&&i===null&&s&4&&Pd(r),ul(r,r.return);break;case 12:Cn(l,r,a);break;case 31:Cn(l,r,a),a&&s&4&&lp(l,r);break;case 13:Cn(l,r,a),a&&s&4&&rp(l,r);break;case 22:r.memoizedState===null&&Cn(l,r,a),ul(r,r.return);break;case 30:break;default:Cn(l,r,a)}t=t.sibling}}function Fs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ji(a))}function eu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function rn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)up(e,t,a,i),t=t.sibling}function up(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,a,i),l&2048&&sl(9,t);break;case 1:rn(e,t,a,i);break;case 3:rn(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){rn(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,h=r.onPostCommit;typeof h=="function"&&h(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Be(t,t.return,x)}}else rn(e,t,a,i);break;case 31:rn(e,t,a,i);break;case 13:rn(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?rn(e,t,a,i):cl(e,t):r._visibility&2?rn(e,t,a,i):(r._visibility|=2,si(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Fs(s,t);break;case 24:rn(e,t,a,i),l&2048&&eu(t.alternate,t);break;default:rn(e,t,a,i)}}function si(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,h=a,x=i,H=s.flags;switch(s.tag){case 0:case 11:case 15:si(r,s,h,x,l),sl(8,s);break;case 23:break;case 22:var Q=s.stateNode;s.memoizedState!==null?Q._visibility&2?si(r,s,h,x,l):cl(r,s):(Q._visibility|=2,si(r,s,h,x,l)),l&&H&2048&&Fs(s.alternate,s);break;case 24:si(r,s,h,x,l),l&&H&2048&&eu(s.alternate,s);break;default:si(r,s,h,x,l)}t=t.sibling}}function cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:cl(a,i),l&2048&&Fs(i.alternate,i);break;case 24:cl(a,i),l&2048&&eu(i.alternate,i);break;default:cl(a,i)}t=t.sibling}}var fl=8192;function ui(e,t,a){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)cp(e,t,a),e=e.sibling}function cp(e,t,a){switch(e.tag){case 26:ui(e,t,a),e.flags&fl&&e.memoizedState!==null&&d0(a,ln,e.memoizedState,e.memoizedProps);break;case 5:ui(e,t,a);break;case 3:case 4:var i=ln;ln=Br(e.stateNode.containerInfo),ui(e,t,a),ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fl,fl=16777216,ui(e,t,a),fl=i):ui(e,t,a));break;default:ui(e,t,a)}}function fp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];gt=i,pp(i,e)}fp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dp(e),e=e.sibling}function dp(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ar(e)):dl(e);break;default:dl(e)}}function Ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];gt=i,pp(i,e)}fp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),Ar(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ar(t));break;default:Ar(t)}e=e.sibling}}function pp(e,t){for(;gt!==null;){var a=gt;switch(a.tag){case 0:case 11:case 15:Jn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,gt=i;else e:for(a=e;gt!==null;){i=gt;var l=i.sibling,r=i.return;if(ap(i),i===a){gt=null;break e}if(l!==null){l.return=r,gt=l;break e}gt=r}}}var Am={getCacheForType:function(e){var t=xt(it),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xt(it).controller.signal}},Em=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,je=null,Ce=0,Le=0,Bt=null,Wn=!1,ci=!1,tu=!1,kn=0,et=0,In=0,_a=0,nu=0,qt=0,fi=0,pl=null,Ct=null,au=!1,Er=0,hp=0,_r=1/0,jr=null,Pn=null,ct=0,Fn=null,di=null,Dn=0,iu=0,lu=null,gp=null,hl=0,ru=null;function Gt(){return(He&2)!==0&&Ce!==0?Ce&-Ce:A.T!==null?du():jc()}function yp(){if(qt===0)if((Ce&536870912)===0||De){var e=Ul;Ul<<=1,(Ul&3932160)===0&&(Ul=262144),qt=e}else qt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),qt}function kt(e,t,a){(e===Qe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(pi(e,0),ea(e,Ce,qt,!1)),Ri(e,a),((He&2)===0||e!==Qe)&&(e===Qe&&((He&2)===0&&(_a|=a),et===4&&ea(e,Ce,qt,!1)),hn(e))}function mp(e,t,a){if((He&6)!==0)throw Error(u(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Di(e,t),l=i?Mm(e,t):su(e,t,!0),r=i;do{if(l===0){ci&&!i&&ea(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!_m(a)){l=su(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var h=e;l=pl;var x=h.current.memoizedState.isDehydrated;if(x&&(pi(h,s).flags|=256),s=su(h,s,!1),s!==2){if(tu&&!x){h.errorRecoveryDisabledLanes|=r,_a|=r,l=4;break e}r=Ct,Ct=l,r!==null&&(Ct===null?Ct=r:Ct.push.apply(Ct,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){pi(e,0),ea(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,qt,!Wn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Er+300-Ot(),10<l)){if(ea(i,t,qt,!Wn),Bl(i,0,!0)!==0)break e;Dn=t,i.timeoutHandle=Kp(vp.bind(null,i,a,Ct,jr,au,t,qt,_a,fi,Wn,r,"Throttled",-0,0),l);break e}vp(i,a,Ct,jr,au,t,qt,_a,fi,Wn,r,null,-0,0)}}break}while(!0);hn(e)}function vp(e,t,a,i,l,r,s,h,x,H,Q,F,L,G){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},cp(t,r,F);var fe=(r&62914560)===r?Er-Ot():(r&4194048)===r?hp-Ot():0;if(fe=p0(F,fe),fe!==null){Dn=r,e.cancelPendingCommit=fe($p.bind(null,e,t,r,a,i,l,s,h,x,Q,F,null,L,G)),ea(e,r,s,!H);return}}$p(e,t,r,a,i,l,s,h,x)}function _m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Nt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,a,i){t&=~nu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Rt(l),s=1<<r;i[r]=-1,l&=~s}a!==0&&Ac(e,a,t)}function Mr(){return(He&6)===0?(gl(0),!1):!0}function ou(){if(je!==null){if(Le===0)var e=je.return;else e=je,zn=Sa=null,zs(e),ai=null,Ii=0,e=je;for(;e!==null;)Jd(e.alternate,e),e=e.return;je=null}}function pi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Jm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Dn=0,ou(),Qe=e,je=a=xn(e.current,null),Ce=t,Le=0,Bt=null,Wn=!1,ci=Di(e,t),tu=!1,fi=qt=nu=_a=In=et=0,Ct=pl=null,au=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Rt(i),r=1<<l;t|=e[l],i&=~r}return kn=t,Pl(),a}function bp(e,t){ze=null,A.H=ll,t===ni||t===rr?(t=Rf(),Le=3):t===fs?(t=Rf(),Le=4):Le=t===Ls?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,je===null&&(et=1,Sr(e,Zt(t,e.current)))}function Sp(){var e=Ut.current;return e===null?!0:(Ce&4194048)===Ce?It===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===It:!1}function xp(){var e=A.H;return A.H=ll,e===null?ll:e}function wp(){var e=A.A;return A.A=Am,e}function Cr(){et=4,Wn||(Ce&4194048)!==Ce&&Ut.current!==null||(ci=!0),(In&134217727)===0&&(_a&134217727)===0||Qe===null||ea(Qe,Ce,qt,!1)}function su(e,t,a){var i=He;He|=2;var l=xp(),r=wp();(Qe!==e||Ce!==t)&&(jr=null,pi(e,t)),t=!1;var s=et;e:do try{if(Le!==0&&je!==null){var h=je,x=Bt;switch(Le){case 8:ou(),s=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var H=Le;if(Le=0,Bt=null,hi(e,h,x,H),a&&ci){s=0;break e}break;default:H=Le,Le=0,Bt=null,hi(e,h,x,H)}}jm(),s=et;break}catch(Q){bp(e,Q)}while(!0);return t&&e.shellSuspendCounter++,zn=Sa=null,He=i,A.H=l,A.A=r,je===null&&(Qe=null,Ce=0,Pl()),s}function jm(){for(;je!==null;)zp(je)}function Mm(e,t){var a=He;He|=2;var i=xp(),l=wp();Qe!==e||Ce!==t?(jr=null,_r=Ot()+500,pi(e,t)):ci=Di(e,t);e:do try{if(Le!==0&&je!==null){t=je;var r=Bt;t:switch(Le){case 1:Le=0,Bt=null,hi(e,t,r,1);break;case 2:case 9:if(kf(r)){Le=0,Bt=null,Op(t);break}t=function(){Le!==2&&Le!==9||Qe!==e||(Le=7),hn(e)},r.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:kf(r)?(Le=0,Bt=null,Op(t)):(Le=0,Bt=null,hi(e,t,r,7));break;case 5:var s=null;switch(je.tag){case 26:s=je.memoizedState;case 5:case 27:var h=je;if(s?uh(s):h.stateNode.complete){Le=0,Bt=null;var x=h.sibling;if(x!==null)je=x;else{var H=h.return;H!==null?(je=H,kr(H)):je=null}break t}}Le=0,Bt=null,hi(e,t,r,5);break;case 6:Le=0,Bt=null,hi(e,t,r,6);break;case 8:ou(),et=6;break e;default:throw Error(u(462))}}Cm();break}catch(Q){bp(e,Q)}while(!0);return zn=Sa=null,A.H=i,A.A=l,He=a,je!==null?0:(Qe=null,Ce=0,Pl(),et)}function Cm(){for(;je!==null&&!mn();)zp(je)}function zp(e){var t=Zd(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?kr(e):je=t}function Op(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qd(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=qd(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:zs(t);default:Jd(a,t),t=je=wf(t,kn),t=Zd(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?kr(e):je=t}function hi(e,t,a,i){zn=Sa=null,zs(t),ai=null,Ii=0;var l=t.return;try{if(Sm(e,l,t,a,Ce)){et=1,Sr(e,Zt(a,e.current)),je=null;return}}catch(r){if(l!==null)throw je=l,r;et=1,Sr(e,Zt(a,e.current)),je=null;return}t.flags&32768?(De||i===1?e=!0:ci||(Ce&536870912)!==0?e=!1:(Wn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Tp(t,e)):kr(t)}function kr(e){var t=e;do{if((t.flags&32768)!==0){Tp(t,Wn);return}e=t.return;var a=zm(t.alternate,t,kn);if(a!==null){je=a;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);et===0&&(et=5)}function Tp(e,t){do{var a=Om(e.alternate,e);if(a!==null){a.flags&=32767,je=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=a}while(e!==null);et=6,je=null}function $p(e,t,a,i,l,r,s,h,x){e.cancelPendingCommit=null;do Dr();while(ct!==0);if((He&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Wo,fy(e,a,r,s,h,x),e===Qe&&(je=Qe=null,Ce=0),di=t,Fn=e,Dn=a,iu=r,lu=l,gp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nm(cn,function(){return Mp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,l=c.p,c.p=2,s=He,He|=4;try{Tm(e,t,a)}finally{He=s,c.p=l,A.T=i}}ct=1,Ap(),Ep(),_p()}}function Ap(){if(ct===1){ct=0;var e=Fn,t=di,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var i=c.p;c.p=2;var l=He;He|=4;try{op(t,e);var r=Su,s=pf(e.containerInfo),h=r.focusedElem,x=r.selectionRange;if(s!==h&&h&&h.ownerDocument&&df(h.ownerDocument.documentElement,h)){if(x!==null&&Qo(h)){var H=x.start,Q=x.end;if(Q===void 0&&(Q=H),"selectionStart"in h)h.selectionStart=H,h.selectionEnd=Math.min(Q,h.value.length);else{var F=h.ownerDocument||document,L=F&&F.defaultView||window;if(L.getSelection){var G=L.getSelection(),fe=h.textContent.length,me=Math.min(x.start,fe),Xe=x.end===void 0?me:Math.min(x.end,fe);!G.extend&&me>Xe&&(s=Xe,Xe=me,me=s);var M=ff(h,me),$=ff(h,Xe);if(M&&$&&(G.rangeCount!==1||G.anchorNode!==M.node||G.anchorOffset!==M.offset||G.focusNode!==$.node||G.focusOffset!==$.offset)){var N=F.createRange();N.setStart(M.node,M.offset),G.removeAllRanges(),me>Xe?(G.addRange(N),G.extend($.node,$.offset)):(N.setEnd($.node,$.offset),G.addRange(N))}}}}for(F=[],G=h;G=G.parentNode;)G.nodeType===1&&F.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var I=F[h];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Vr=!!bu,Su=bu=null}finally{He=l,c.p=i,A.T=a}}e.current=t,ct=2}}function Ep(){if(ct===2){ct=0;var e=Fn,t=di,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var i=c.p;c.p=2;var l=He;He|=4;try{np(e,t.alternate,t)}finally{He=l,c.p=i,A.T=a}}ct=3}}function _p(){if(ct===4||ct===3){ct=0,Ra();var e=Fn,t=di,a=Dn,i=gp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,di=Fn=null,jp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pn=null),$o(a),t=t.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=A.T,l=c.p,c.p=2,A.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var h=i[s];r(h.value,{componentStack:h.stack})}}finally{A.T=t,c.p=l}}(Dn&3)!==0&&Dr(),hn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ru?hl++:(hl=0,ru=e):hl=0,gl(0)}}function jp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Dr(){return Ap(),Ep(),_p(),Mp()}function Mp(){if(ct!==5)return!1;var e=Fn,t=iu;iu=0;var a=$o(Dn),i=A.T,l=c.p;try{c.p=32>a?32:a,A.T=null,a=lu,lu=null;var r=Fn,s=Dn;if(ct=0,di=Fn=null,Dn=0,(He&6)!==0)throw Error(u(331));var h=He;if(He|=4,dp(r.current),up(r,r.current,s,a),He=h,gl(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(ki,r)}catch{}return!0}finally{c.p=l,A.T=i,jp(e,t)}}function Cp(e,t,a){t=Zt(a,t),t=Us(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(Ri(e,2),hn(e))}function Be(e,t,a){if(e.tag===3)Cp(e,e,a);else for(;t!==null;){if(t.tag===3){Cp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){e=Zt(a,e),a=kd(2),i=Vn(t,a,2),i!==null&&(Dd(a,i,t,e),Ri(i,2),hn(i));break}}t=t.return}}function uu(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Em;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(tu=!0,l.add(a),e=km.bind(null,e,t,a),t.then(e,e))}function km(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Ce&a)===a&&(et===4||et===3&&(Ce&62914560)===Ce&&300>Ot()-Er?(He&2)===0&&pi(e,0):nu|=a,fi===Ce&&(fi=0)),hn(e)}function kp(e,t){t===0&&(t=$c()),e=ma(e,t),e!==null&&(Ri(e,t),hn(e))}function Dm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),kp(e,a)}function Rm(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),kp(e,a)}function Nm(e,t){return tt(e,t)}var Rr=null,gi=null,cu=!1,Nr=!1,fu=!1,ta=0;function hn(e){e!==gi&&e.next===null&&(gi===null?Rr=gi=e:gi=gi.next=e),Nr=!0,cu||(cu=!0,Um())}function gl(e,t){if(!fu&&Nr){fu=!0;do for(var a=!1,i=Rr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var s=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-Rt(42|e)+1)-1,r&=l&~(s&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Hp(i,r))}else r=Ce,r=Bl(i,i===Qe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Di(i,r)||(a=!0,Hp(i,r));i=i.next}while(a);fu=!1}}function Hm(){Dp()}function Dp(){Nr=cu=!1;var e=0;ta!==0&&Km()&&(e=ta);for(var t=Ot(),a=null,i=Rr;i!==null;){var l=i.next,r=Rp(i,t);r===0?(i.next=null,a===null?Rr=l:a.next=l,l===null&&(gi=a)):(a=i,(e!==0||(r&3)!==0)&&(Nr=!0)),i=l}ct!==0&&ct!==5||gl(e),ta!==0&&(ta=0)}function Rp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rt(r),h=1<<s,x=l[s];x===-1?((h&a)===0||(h&i)!==0)&&(l[s]=cy(h,t)):x<=t&&(e.expiredLanes|=h),r&=~h}if(t=Qe,a=Ce,a=Bl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Di(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&vt(i),$o(a)){case 2:case 8:a=nn;break;case 32:a=cn;break;case 268435456:a=Tc;break;default:a=cn}return i=Np.bind(null,e),a=tt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&vt(i),e.callbackPriority=2,e.callbackNode=null,2}function Np(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dr()&&e.callbackNode!==a)return null;var i=Ce;return i=Bl(e,e===Qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mp(e,i,t),Rp(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?Np.bind(null,e):null)}function Hp(e,t){if(Dr())return null;mp(e,t,!0)}function Um(){Wm(function(){(He&6)!==0?tt(Nl,Hm):Dp()})}function du(){if(ta===0){var e=ei;e===0&&(e=Hl,Hl<<=1,(Hl&261888)===0&&(Hl=256)),ta=e}return ta}function Up(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xl(""+e)}function Lp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Lm(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Up((l[At]||null).action),s=i.submitter;s&&(t=(t=s[At]||null)?Up(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var h=new Kl("action","action",null,i,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var x=s?Lp(l,s):new FormData(l);Cs(a,{pending:!0,data:x,method:l.method,action:r},null,x)}}else typeof r=="function"&&(h.preventDefault(),x=s?Lp(l,s):new FormData(l),Cs(a,{pending:!0,data:x,method:l.method,action:r},r,x))},currentTarget:l}]})}}for(var pu=0;pu<Jo.length;pu++){var hu=Jo[pu],Bm=hu.toLowerCase(),qm=hu[0].toUpperCase()+hu.slice(1);an(Bm,"on"+qm)}an(yf,"onAnimationEnd"),an(mf,"onAnimationIteration"),an(vf,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(am,"onTransitionRun"),an(im,"onTransitionStart"),an(lm,"onTransitionCancel"),an(bf,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function Bp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var h=i[s],x=h.instance,H=h.currentTarget;if(h=h.listener,x!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=H;try{r(l)}catch(Q){Il(Q)}l.currentTarget=null,r=x}else for(s=0;s<i.length;s++){if(h=i[s],x=h.instance,H=h.currentTarget,h=h.listener,x!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=H;try{r(l)}catch(Q){Il(Q)}l.currentTarget=null,r=x}}}}function Me(e,t){var a=t[Ao];a===void 0&&(a=t[Ao]=new Set);var i=e+"__bubble";a.has(i)||(qp(t,e,2,!1),a.add(i))}function gu(e,t,a){var i=0;t&&(i|=4),qp(a,e,i,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[Hr]){e[Hr]=!0,kc.forEach(function(a){a!=="selectionchange"&&(Gm.has(a)||gu(a,!1,e),gu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,gu("selectionchange",!1,t))}}function qp(e,t,a,i){switch(yh(t)){case 2:var l=y0;break;case 8:l=m0;break;default:l=Mu}a=l.bind(null,t,a,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function mu(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var h=i.stateNode.containerInfo;if(h===l)break;if(s===4)for(s=i.return;s!==null;){var x=s.tag;if((x===3||x===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;h!==null;){if(s=Ha(h),s===null)return;if(x=s.tag,x===5||x===6||x===26||x===27){i=r=s;continue e}h=h.parentNode}}i=i.return}Qc(function(){var H=r,Q=Do(a),F=[];e:{var L=Sf.get(e);if(L!==void 0){var G=Kl,fe=e;switch(e){case"keypress":if(Vl(a)===0)break e;case"keydown":case"keyup":G=Ry;break;case"focusin":fe="focus",G=Bo;break;case"focusout":fe="blur",G=Bo;break;case"beforeblur":case"afterblur":G=Bo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Uy;break;case yf:case mf:case vf:G=$y;break;case bf:G=By;break;case"scroll":case"scrollend":G=xy;break;case"wheel":G=Gy;break;case"copy":case"cut":case"paste":G=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Wc;break;case"toggle":case"beforetoggle":G=Xy}var me=(t&4)!==0,Xe=!me&&(e==="scroll"||e==="scrollend"),M=me?L!==null?L+"Capture":null:L;me=[];for(var $=H,N;$!==null;){var I=$;if(N=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||N===null||M===null||(I=Ui($,M),I!=null&&me.push(ml($,I,N))),Xe)break;$=$.return}0<me.length&&(L=new G(L,fe,null,a,Q),F.push({event:L,listeners:me}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",L&&a!==ko&&(fe=a.relatedTarget||a.fromElement)&&(Ha(fe)||fe[Na]))break e;if((G||L)&&(L=Q.window===Q?Q:(L=Q.ownerDocument)?L.defaultView||L.parentWindow:window,G?(fe=a.relatedTarget||a.toElement,G=H,fe=fe?Ha(fe):null,fe!==null&&(Xe=m(fe),me=fe.tag,fe!==Xe||me!==5&&me!==27&&me!==6)&&(fe=null)):(G=null,fe=H),G!==fe)){if(me=Kc,I="onMouseLeave",M="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(me=Wc,I="onPointerLeave",M="onPointerEnter",$="pointer"),Xe=G==null?L:Hi(G),N=fe==null?L:Hi(fe),L=new me(I,$+"leave",G,a,Q),L.target=Xe,L.relatedTarget=N,I=null,Ha(Q)===H&&(me=new me(M,$+"enter",fe,a,Q),me.target=N,me.relatedTarget=Xe,I=me),Xe=I,G&&fe)t:{for(me=Ym,M=G,$=fe,N=0,I=M;I;I=me(I))N++;I=0;for(var ye=$;ye;ye=me(ye))I++;for(;0<N-I;)M=me(M),N--;for(;0<I-N;)$=me($),I--;for(;N--;){if(M===$||$!==null&&M===$.alternate){me=M;break t}M=me(M),$=me($)}me=null}else me=null;G!==null&&Gp(F,L,G,me,!1),fe!==null&&Xe!==null&&Gp(F,Xe,fe,me,!0)}}e:{if(L=H?Hi(H):window,G=L.nodeName&&L.nodeName.toLowerCase(),G==="select"||G==="input"&&L.type==="file")var Re=lf;else if(nf(L))if(rf)Re=em;else{Re=Py;var pe=Iy}else G=L.nodeName,!G||G.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?H&&Co(H.elementType)&&(Re=lf):Re=Fy;if(Re&&(Re=Re(e,H))){af(F,Re,a,Q);break e}pe&&pe(e,L,H),e==="focusout"&&H&&L.type==="number"&&H.memoizedProps.value!=null&&Mo(L,"number",L.value)}switch(pe=H?Hi(H):window,e){case"focusin":(nf(pe)||pe.contentEditable==="true")&&(Va=pe,Vo=H,Vi=null);break;case"focusout":Vi=Vo=Va=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,hf(F,a,Q);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":hf(F,a,Q)}var Te;if(Go)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Qa?ef(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(Ic&&a.locale!=="ko"&&(Qa||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Qa&&(Te=Vc()):(Ln=Q,Ho="value"in Ln?Ln.value:Ln.textContent,Qa=!0)),pe=Ur(H,ke),0<pe.length&&(ke=new Jc(ke,e,null,a,Q),F.push({event:ke,listeners:pe}),Te?ke.data=Te:(Te=tf(a),Te!==null&&(ke.data=Te)))),(Te=Vy?Zy(e,a):Ky(e,a))&&(ke=Ur(H,"onBeforeInput"),0<ke.length&&(pe=new Jc("onBeforeInput","beforeinput",null,a,Q),F.push({event:pe,listeners:ke}),pe.data=Te)),Lm(F,e,H,a,Q)}Bp(F,t)})}function ml(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ur(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ui(e,a),l!=null&&i.unshift(ml(e,l,r)),l=Ui(e,t),l!=null&&i.push(ml(e,l,r))),e.tag===3)return i;e=e.return}return[]}function Ym(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gp(e,t,a,i,l){for(var r=t._reactName,s=[];a!==null&&a!==i;){var h=a,x=h.alternate,H=h.stateNode;if(h=h.tag,x!==null&&x===i)break;h!==5&&h!==26&&h!==27||H===null||(x=H,l?(H=Ui(a,r),H!=null&&s.unshift(ml(a,H,x))):l||(H=Ui(a,r),H!=null&&s.push(ml(a,H,x)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Xm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function Yp(e){return(typeof e=="string"?e:""+e).replace(Xm,`
`).replace(Qm,"")}function Xp(e,t){return t=Yp(t),Yp(e)===t}function Ye(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ga(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ga(e,""+i);break;case"className":Gl(e,"class",i);break;case"tabIndex":Gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,i);break;case"style":Yc(e,i,r);break;case"data":if(t!=="object"){Gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Xl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ye(e,t,"name",l.name,l,null),Ye(e,t,"formEncType",l.formEncType,l,null),Ye(e,t,"formMethod",l.formMethod,l,null),Ye(e,t,"formTarget",l.formTarget,l,null)):(Ye(e,t,"encType",l.encType,l,null),Ye(e,t,"method",l.method,l,null),Ye(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Xl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Xl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ql(e,"popover",i);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=by.get(a)||a,ql(e,a,i))}}function vu(e,t,a,i,l,r){switch(a){case"style":Yc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ga(e,i):(typeof i=="number"||typeof i=="bigint")&&Ga(e,""+i);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[At]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ql(e,a,i)}}}function zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ye(e,t,r,s,a,null)}}l&&Ye(e,t,"srcSet",a.srcSet,a,null),i&&Ye(e,t,"src",a.src,a,null);return;case"input":Me("invalid",e);var h=r=s=l=null,x=null,H=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":l=Q;break;case"type":s=Q;break;case"checked":x=Q;break;case"defaultChecked":H=Q;break;case"value":r=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,t));break;default:Ye(e,t,i,Q,a,null)}}Lc(e,r,h,x,H,s,l,!1);return;case"select":Me("invalid",e),i=s=r=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":s=h;break;case"multiple":i=h;default:Ye(e,t,l,h,a,null)}t=r,a=s,e.multiple=!!i,t!=null?qa(e,!!i,t,!1):a!=null&&qa(e,!!i,a,!0);return;case"textarea":Me("invalid",e),r=l=i=null;for(s in a)if(a.hasOwnProperty(s)&&(h=a[s],h!=null))switch(s){case"value":i=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Ye(e,t,s,h,a,null)}qc(e,i,l,r);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(i=a[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ye(e,t,x,i,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(i=0;i<yl.length;i++)Me(yl[i],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in a)if(a.hasOwnProperty(H)&&(i=a[H],i!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ye(e,t,H,i,a,null)}return;default:if(Co(t)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&vu(e,t,Q,i,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(i=a[h],i!=null&&Ye(e,t,h,i,a,null))}function Vm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,h=null,x=null,H=null,Q=null;for(G in a){var F=a[G];if(a.hasOwnProperty(G)&&F!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":x=F;default:i.hasOwnProperty(G)||Ye(e,t,G,null,i,F)}}for(var L in i){var G=i[L];if(F=a[L],i.hasOwnProperty(L)&&(G!=null||F!=null))switch(L){case"type":r=G;break;case"name":l=G;break;case"checked":H=G;break;case"defaultChecked":Q=G;break;case"value":s=G;break;case"defaultValue":h=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:G!==F&&Ye(e,t,L,G,i,F)}}jo(e,s,h,x,H,Q,r,l);return;case"select":G=s=h=L=null;for(r in a)if(x=a[r],a.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":G=x;default:i.hasOwnProperty(r)||Ye(e,t,r,null,i,x)}for(l in i)if(r=i[l],x=a[l],i.hasOwnProperty(l)&&(r!=null||x!=null))switch(l){case"value":L=r;break;case"defaultValue":h=r;break;case"multiple":s=r;default:r!==x&&Ye(e,t,l,r,i,x)}t=h,a=s,i=G,L!=null?qa(e,!!a,L,!1):!!i!=!!a&&(t!=null?qa(e,!!a,t,!0):qa(e,!!a,a?[]:"",!1));return;case"textarea":G=L=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ye(e,t,h,null,i,l)}for(s in i)if(l=i[s],r=a[s],i.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":L=l;break;case"defaultValue":G=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&Ye(e,t,s,l,i,r)}Bc(e,L,G);return;case"option":for(var fe in a)if(L=a[fe],a.hasOwnProperty(fe)&&L!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ye(e,t,fe,null,i,L)}for(x in i)if(L=i[x],G=a[x],i.hasOwnProperty(x)&&L!==G&&(L!=null||G!=null))switch(x){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ye(e,t,x,L,i,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)L=a[me],a.hasOwnProperty(me)&&L!=null&&!i.hasOwnProperty(me)&&Ye(e,t,me,null,i,L);for(H in i)if(L=i[H],G=a[H],i.hasOwnProperty(H)&&L!==G&&(L!=null||G!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ye(e,t,H,L,i,G)}return;default:if(Co(t)){for(var Xe in a)L=a[Xe],a.hasOwnProperty(Xe)&&L!==void 0&&!i.hasOwnProperty(Xe)&&vu(e,t,Xe,void 0,i,L);for(Q in i)L=i[Q],G=a[Q],!i.hasOwnProperty(Q)||L===G||L===void 0&&G===void 0||vu(e,t,Q,L,i,G);return}}for(var M in a)L=a[M],a.hasOwnProperty(M)&&L!=null&&!i.hasOwnProperty(M)&&Ye(e,t,M,null,i,L);for(F in i)L=i[F],G=a[F],!i.hasOwnProperty(F)||L===G||L==null&&G==null||Ye(e,t,F,L,i,G)}function Qp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,s=l.initiatorType,h=l.duration;if(r&&h&&Qp(s)){for(s=0,h=l.responseEnd,i+=1;i<a.length;i++){var x=a[i],H=x.startTime;if(H>h)break;var Q=x.transferSize,F=x.initiatorType;Q&&Qp(F)&&(x=x.responseEnd,s+=Q*(x<h?1:(h-H)/(x-H)))}if(--i,t+=8*(r+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bu=null,Su=null;function Lr(e){return e.nodeType===9?e:e.ownerDocument}function Vp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function Km(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var Kp=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(e){return Jp.resolve(null).then(e).catch(Im)}:Kp;function Im(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function Wp(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),bi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")vl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vl(a);for(var r=a.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[Ni]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&vl(e.ownerDocument.body);a=l}while(a);bi(t)}function Ip(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function zu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zu(a),Eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Pm(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ni])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Fm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function Pp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Ou(e){return e.data==="$?"||e.data==="$~"}function Tu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function e0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $u=null;function Fp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function th(e,t,a){switch(t=Lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eo(e)}var Ft=new Map,nh=new Set;function Br(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=c.d;c.d={f:t0,r:n0,D:a0,C:i0,L:l0,m:r0,X:s0,S:o0,M:u0};function t0(){var e=Rn.f(),t=Mr();return e||t}function n0(e){var t=Ua(e);t!==null&&t.tag===5&&t.type==="form"?bd(t):Rn.r(e)}var yi=typeof document>"u"?null:document;function ah(e,t,a){var i=yi;if(i&&typeof t=="string"&&t){var l=Qt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),nh.has(l)||(nh.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),zt(t,"link",e),ht(t),i.head.appendChild(t)))}}function a0(e){Rn.D(e),ah("dns-prefetch",e,null)}function i0(e,t){Rn.C(e,t),ah("preconnect",e,t)}function l0(e,t,a){Rn.L(e,t,a);var i=yi;if(i&&e&&t){var l='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Qt(a.imageSizes)+'"]')):l+='[href="'+Qt(e)+'"]';var r=l;switch(t){case"style":r=mi(e);break;case"script":r=vi(e)}Ft.has(r)||(e=X({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ft.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(bl(r))||t==="script"&&i.querySelector(Sl(r))||(t=i.createElement("link"),zt(t,"link",e),ht(t),i.head.appendChild(t)))}}function r0(e,t){Rn.m(e,t);var a=yi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Qt(i)+'"][href="'+Qt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=vi(e)}if(!Ft.has(r)&&(e=X({rel:"modulepreload",href:e},t),Ft.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(r)))return}i=a.createElement("link"),zt(i,"link",e),ht(i),a.head.appendChild(i)}}}function o0(e,t,a){Rn.S(e,t,a);var i=yi;if(i&&e){var l=La(i).hoistableStyles,r=mi(e);t=t||"default";var s=l.get(r);if(!s){var h={loading:0,preload:null};if(s=i.querySelector(bl(r)))h.loading=5;else{e=X({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ft.get(r))&&Au(e,a);var x=s=i.createElement("link");ht(x),zt(x,"link",e),x._p=new Promise(function(H,Q){x.onload=H,x.onerror=Q}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,qr(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:h},l.set(r,s)}}}function s0(e,t){Rn.X(e,t);var a=yi;if(a&&e){var i=La(a).hoistableScripts,l=vi(e),r=i.get(l);r||(r=a.querySelector(Sl(l)),r||(e=X({src:e,async:!0},t),(t=Ft.get(l))&&Eu(e,t),r=a.createElement("script"),ht(r),zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function u0(e,t){Rn.M(e,t);var a=yi;if(a&&e){var i=La(a).hoistableScripts,l=vi(e),r=i.get(l);r||(r=a.querySelector(Sl(l)),r||(e=X({src:e,async:!0,type:"module"},t),(t=Ft.get(l))&&Eu(e,t),r=a.createElement("script"),ht(r),zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function ih(e,t,a,i){var l=(l=K.current)?Br(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mi(a.href),a=La(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mi(a.href);var r=La(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(bl(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Ft.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ft.set(e,a),r||c0(l,e,a,s.state))),t&&i===null)throw Error(u(528,""));return s}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vi(a),a=La(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mi(e){return'href="'+Qt(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function lh(e){return X({},e,{"data-precedence":e.precedence,precedence:null})}function c0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),zt(t,"link",a),ht(t),e.head.appendChild(t))}function vi(e){return'[src="'+Qt(e)+'"]'}function Sl(e){return"script[async]"+e}function rh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qt(a.href)+'"]');if(i)return t.instance=i,ht(i),i;var l=X({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ht(i),zt(i,"style",l),qr(i,a.precedence,e),t.instance=i;case"stylesheet":l=mi(a.href);var r=e.querySelector(bl(l));if(r)return t.state.loading|=4,t.instance=r,ht(r),r;i=lh(a),(l=Ft.get(l))&&Au(i,l),r=(e.ownerDocument||e).createElement("link"),ht(r);var s=r;return s._p=new Promise(function(h,x){s.onload=h,s.onerror=x}),zt(r,"link",i),t.state.loading|=4,qr(r,a.precedence,e),t.instance=r;case"script":return r=vi(a.src),(l=e.querySelector(Sl(r)))?(t.instance=l,ht(l),l):(i=a,(l=Ft.get(r))&&(i=X({},a),Eu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),ht(l),zt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qr(i,a.precedence,e));return t.instance}function qr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,s=0;s<i.length;s++){var h=i[s];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gr=null;function oh(e,t,a){if(Gr===null){var i=new Map,l=Gr=new Map;l.set(a,i)}else l=Gr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Ni]||r[bt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var h=i.get(s);h?h.push(r):i.set(s,[r])}}return i}function sh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function f0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function d0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=mi(i.href),r=t.querySelector(bl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ht(r);return}r=t.ownerDocument||t,i=lh(i),(l=Ft.get(l))&&Au(i,l),r=r.createElement("link"),ht(r);var s=r;s._p=new Promise(function(h,x){s.onload=h,s.onerror=x}),zt(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var _u=0;function p0(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&_u===0&&(_u=62500*Zm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>_u?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Yr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(h0,e),Xr=null,Yr.call(e))}function h0(e,t){if(!(t.state.loading&4)){var a=Xr.get(e);if(a)var i=a.get(null);else{a=new Map,Xr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),i=s)}i&&a.set(null,i)}l=t.instance,s=l.getAttribute("data-precedence"),r=a.get(s)||i,r===i&&a.set(null,l),a.set(s,l),this.count++,i=Yr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var xl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function g0(e,t,a,i,l,r,s,h,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.hiddenUpdates=Oo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function ch(e,t,a,i,l,r,s,h,x,H,Q,F){return e=new g0(e,t,a,s,x,H,Q,F,h),t=1,r===!0&&(t|=24),r=Ht(3,null,null,t),e.current=r,r.stateNode=e,t=ss(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},ds(r),e}function fh(e){return e?(e=Ja,e):Ja}function dh(e,t,a,i,l,r){l=fh(l),i.context===null?i.context=l:i.pendingContext=l,i=Qn(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Vn(e,i,t),a!==null&&(kt(a,e,t),Fi(a,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ju(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function hh(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&kt(t,e,67108864),ju(e,67108864)}}function gh(e){if(e.tag===13||e.tag===31){var t=Gt();t=To(t);var a=ma(e,t);a!==null&&kt(a,e,t),ju(e,t)}}var Vr=!0;function y0(e,t,a,i){var l=A.T;A.T=null;var r=c.p;try{c.p=2,Mu(e,t,a,i)}finally{c.p=r,A.T=l}}function m0(e,t,a,i){var l=A.T;A.T=null;var r=c.p;try{c.p=8,Mu(e,t,a,i)}finally{c.p=r,A.T=l}}function Mu(e,t,a,i){if(Vr){var l=Cu(i);if(l===null)mu(e,t,i,Zr,a),mh(e,i);else if(b0(l,e,t,a,i))i.stopPropagation();else if(mh(e,i),t&4&&-1<v0.indexOf(e)){for(;l!==null;){var r=Ua(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=da(r.pendingLanes);if(s!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var x=1<<31-Rt(s);h.entanglements[1]|=x,s&=~x}hn(r),(He&6)===0&&(_r=Ot()+500,gl(0))}}break;case 31:case 13:h=ma(r,2),h!==null&&kt(h,r,2),Mr(),ju(r,2)}if(r=Cu(i),r===null&&mu(e,t,i,Zr,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else mu(e,t,i,null,a)}}function Cu(e){return e=Do(e),ku(e)}var Zr=null;function ku(e){if(Zr=null,e=Ha(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=C(t),e!==null)return e;e=null}else if(a===31){if(e=V(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function yh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fa()){case Nl:return 2;case nn:return 8;case cn:case iy:return 32;case Tc:return 268435456;default:return 32}default:return 32}}var Du=!1,aa=null,ia=null,la=null,wl=new Map,zl=new Map,ra=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mh(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(t.pointerId)}}function Ol(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Ua(t),t!==null&&hh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function b0(e,t,a,i,l){switch(t){case"focusin":return aa=Ol(aa,e,t,a,i,l),!0;case"dragenter":return ia=Ol(ia,e,t,a,i,l),!0;case"mouseover":return la=Ol(la,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return wl.set(r,Ol(wl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,zl.set(r,Ol(zl.get(r)||null,e,t,a,i,l)),!0}return!1}function vh(e){var t=Ha(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=C(a),t!==null){e.blockedOn=t,Mc(e.priority,function(){gh(a)});return}}else if(t===31){if(t=V(a),t!==null){e.blockedOn=t,Mc(e.priority,function(){gh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Cu(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ko=i,a.target.dispatchEvent(i),ko=null}else return t=Ua(a),t!==null&&hh(t),e.blockedOn=a,!1;t.shift()}return!0}function bh(e,t,a){Kr(e)&&a.delete(t)}function S0(){Du=!1,aa!==null&&Kr(aa)&&(aa=null),ia!==null&&Kr(ia)&&(ia=null),la!==null&&Kr(la)&&(la=null),wl.forEach(bh),zl.forEach(bh)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,S0)))}var Wr=null;function Sh(e){Wr!==e&&(Wr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(ku(i||a)===null)continue;break}var r=Ua(a);r!==null&&(e.splice(t,3),t-=3,Cs(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function bi(e){function t(x){return Jr(x,e)}aa!==null&&Jr(aa,e),ia!==null&&Jr(ia,e),la!==null&&Jr(la,e),wl.forEach(t),zl.forEach(t);for(var a=0;a<ra.length;a++){var i=ra[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)vh(a),a.blockedOn===null&&ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],s=l[At]||null;if(typeof r=="function")s||Sh(a);else if(s){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[At]||null)h=s.formAction;else if(ku(l)!==null)continue}else h=s.action;typeof h=="function"?a[i+1]=h:(a.splice(i,3),i-=3),Sh(a)}}}function xh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ru(e){this._internalRoot=e}Ir.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,i=Gt();dh(a,i,e,t,null,null)},Ir.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Mr(),t[Na]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ra.length&&t!==0&&t<ra[a].priority;a++);ra.splice(a,0,e),a===0&&vh(e)}};var wh=o.version;if(wh!=="19.2.3")throw Error(u(527,wh,"19.2.3"));c.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=w(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var x0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ki=Pr.inject(x0),Dt=Pr}catch{}}return $l.createRoot=function(e,t){if(!g(e))throw Error(u(299));var a=!1,i="",l=_d,r=jd,s=Md;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ch(e,1,!1,null,null,a,i,null,l,r,s,xh),e[Na]=t.current,yu(e),new Ru(t)},$l.hydrateRoot=function(e,t,a){if(!g(e))throw Error(u(299));var i=!1,l="",r=_d,s=jd,h=Md,x=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=ch(e,1,!0,t,a??null,i,l,x,r,s,h,xh),t.context=fh(null),a=t.current,i=Gt(),i=To(i),l=Qn(i),l.callback=null,Vn(a,l,i),a=i,t.current.lanes=a,Ri(t,a),hn(t),e[Na]=t.current,yu(e),new Ir(t)},$l.version="19.2.3",$l}var Ch;function C0(){if(Ch)return Uu.exports;Ch=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Uu.exports=M0(),Uu.exports}var k0=C0();const D0=gc(k0);var mt=function(){return mt=Object.assign||function(o){for(var f,u=1,g=arguments.length;u<g;u++){f=arguments[u];for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(o[m]=f[m])}return o},mt.apply(this,arguments)};function Oi(n,o,f){if(f||arguments.length===2)for(var u=0,g=o.length,m;u<g;u++)(m||!(u in o))&&(m||(m=Array.prototype.slice.call(o,0,u)),m[u]=o[u]);return n.concat(m||Array.prototype.slice.call(o))}var Ke="-ms-",Ml="-moz-",Ue="-webkit-",gg="comm",yo="rule",yc="decl",R0="@import",N0="@namespace",yg="@keyframes",H0="@layer",mg=Math.abs,mc=String.fromCharCode,lc=Object.assign;function U0(n,o){return dt(n,0)^45?(((o<<2^dt(n,0))<<2^dt(n,1))<<2^dt(n,2))<<2^dt(n,3):0}function vg(n){return n.trim()}function Nn(n,o){return(n=o.exec(n))?n[0]:n}function $e(n,o,f){return n.replace(o,f)}function to(n,o,f){return n.indexOf(o,f)}function dt(n,o){return n.charCodeAt(o)|0}function Ca(n,o,f){return n.slice(o,f)}function on(n){return n.length}function bg(n){return n.length}function jl(n,o){return o.push(n),n}function L0(n,o){return n.map(o).join("")}function kh(n,o){return n.filter(function(f){return!Nn(f,o)})}var mo=1,Ti=1,Sg=0,tn=0,st=0,_i="";function vo(n,o,f,u,g,m,C,V){return{value:n,root:o,parent:f,type:u,props:g,children:m,line:mo,column:Ti,length:C,return:"",siblings:V}}function sa(n,o){return lc(vo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function Si(n){for(;n.root;)n=sa(n.root,{children:[n]});jl(n,n.siblings)}function B0(){return st}function q0(){return st=tn>0?dt(_i,--tn):0,Ti--,st===10&&(Ti=1,mo--),st}function sn(){return st=tn<Sg?dt(_i,tn++):0,Ti++,st===10&&(Ti=1,mo++),st}function ua(){return dt(_i,tn)}function no(){return tn}function bo(n,o){return Ca(_i,n,o)}function Cl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G0(n){return mo=Ti=1,Sg=on(_i=n),tn=0,[]}function Y0(n){return _i="",n}function Gu(n){return vg(bo(tn-1,rc(n===91?n+2:n===40?n+1:n)))}function X0(n){for(;(st=ua())&&st<33;)sn();return Cl(n)>2||Cl(st)>3?"":" "}function Q0(n,o){for(;--o&&sn()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return bo(n,no()+(o<6&&ua()==32&&sn()==32))}function rc(n){for(;sn();)switch(st){case n:return tn;case 34:case 39:n!==34&&n!==39&&rc(st);break;case 40:n===41&&rc(n);break;case 92:sn();break}return tn}function V0(n,o){for(;sn()&&n+st!==57;)if(n+st===84&&ua()===47)break;return"/*"+bo(o,tn-1)+"*"+mc(n===47?n:sn())}function Z0(n){for(;!Cl(ua());)sn();return bo(n,tn)}function K0(n){return Y0(ao("",null,null,null,[""],n=G0(n),0,[0],n))}function ao(n,o,f,u,g,m,C,V,Y){for(var w=0,q=0,X=C,ae=0,ue=0,le=0,P=1,ve=1,oe=1,he=0,ne="",se=g,z=m,O=u,S=ne;ve;)switch(le=he,he=sn()){case 40:if(le!=108&&dt(S,X-1)==58){to(S+=$e(Gu(he),"&","&\f"),"&\f",mg(w?V[w-1]:0))!=-1&&(oe=-1);break}case 34:case 39:case 91:S+=Gu(he);break;case 9:case 10:case 13:case 32:S+=X0(le);break;case 92:S+=Q0(no()-1,7);continue;case 47:switch(ua()){case 42:case 47:jl(J0(V0(sn(),no()),o,f,Y),Y),(Cl(le||1)==5||Cl(ua()||1)==5)&&on(S)&&Ca(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*P:V[w++]=on(S)*oe;case 125*P:case 59:case 0:switch(he){case 0:case 125:ve=0;case 59+q:oe==-1&&(S=$e(S,/\f/g,"")),ue>0&&(on(S)-X||P===0&&le===47)&&jl(ue>32?Rh(S+";",u,f,X-1,Y):Rh($e(S," ","")+";",u,f,X-2,Y),Y);break;case 59:S+=";";default:if(jl(O=Dh(S,o,f,w,q,g,V,ne,se=[],z=[],X,m),m),he===123)if(q===0)ao(S,o,O,O,se,m,X,V,z);else{switch(ae){case 99:if(dt(S,3)===110)break;case 108:if(dt(S,2)===97)break;default:q=0;case 100:case 109:case 115:}q?ao(n,O,O,u&&jl(Dh(n,O,O,0,0,g,V,ne,g,se=[],X,z),z),g,z,X,V,u?se:z):ao(S,O,O,O,[""],z,0,V,z)}}w=q=ue=0,P=oe=1,ne=S="",X=C;break;case 58:X=1+on(S),ue=le;default:if(P<1){if(he==123)--P;else if(he==125&&P++==0&&q0()==125)continue}switch(S+=mc(he),he*P){case 38:oe=q>0?1:(S+="\f",-1);break;case 44:V[w++]=(on(S)-1)*oe,oe=1;break;case 64:ua()===45&&(S+=Gu(sn())),ae=ua(),q=X=on(ne=S+=Z0(no())),he++;break;case 45:le===45&&on(S)==2&&(P=0)}}return m}function Dh(n,o,f,u,g,m,C,V,Y,w,q,X){for(var ae=g-1,ue=g===0?m:[""],le=bg(ue),P=0,ve=0,oe=0;P<u;++P)for(var he=0,ne=Ca(n,ae+1,ae=mg(ve=C[P])),se=n;he<le;++he)(se=vg(ve>0?ue[he]+" "+ne:$e(ne,/&\f/g,ue[he])))&&(Y[oe++]=se);return vo(n,o,f,g===0?yo:V,Y,w,q,X)}function J0(n,o,f,u){return vo(n,o,f,gg,mc(B0()),Ca(n,2,-2),0,u)}function Rh(n,o,f,u,g){return vo(n,o,f,yc,Ca(n,0,u),Ca(n,u+1,-1),u,g)}function xg(n,o,f){switch(U0(n,o)){case 5103:return Ue+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ue+n+n;case 4855:return Ue+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ml+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+n+Ml+n+Ke+n+n;case 5936:switch(dt(n,o+11)){case 114:return Ue+n+Ke+$e(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ue+n+Ke+$e(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ue+n+Ke+$e(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ue+n+Ke+n+n;case 6165:return Ue+n+Ke+"flex-"+n+n;case 5187:return Ue+n+$e(n,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Ke+"flex-$1$2")+n;case 5443:return Ue+n+Ke+"flex-item-"+$e(n,/flex-|-self/g,"")+(Nn(n,/flex-|baseline/)?"":Ke+"grid-row-"+$e(n,/flex-|-self/g,""))+n;case 4675:return Ue+n+Ke+"flex-line-pack"+$e(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ue+n+Ke+$e(n,"shrink","negative")+n;case 5292:return Ue+n+Ke+$e(n,"basis","preferred-size")+n;case 6060:return Ue+"box-"+$e(n,"-grow","")+Ue+n+Ke+$e(n,"grow","positive")+n;case 4554:return Ue+$e(n,/([^-])(transform)/g,"$1"+Ue+"$2")+n;case 6187:return $e($e($e(n,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),n,"")+n;case 5495:case 3959:return $e(n,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return $e($e(n,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Ke+"flex-pack:$3"),/space-between/,"justify")+Ue+n+n;case 4200:if(!Nn(n,/flex-|baseline/))return Ke+"grid-column-align"+Ca(n,o)+n;break;case 2592:case 3360:return Ke+$e(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(u,g){return o=g,Nn(u.props,/grid-\w+-end/)})?~to(n+(f=f[o].value),"span",0)?n:Ke+$e(n,"-start","")+n+Ke+"grid-row-span:"+(~to(f,"span",0)?Nn(f,/\d+/):+Nn(f,/\d+/)-+Nn(n,/\d+/))+";":Ke+$e(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(u){return Nn(u.props,/grid-\w+-start/)})?n:Ke+$e($e(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return $e(n,/(.+)-inline(.+)/,Ue+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(n)-1-o>6)switch(dt(n,o+1)){case 109:if(dt(n,o+4)!==45)break;case 102:return $e(n,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+Ml+(dt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~to(n,"stretch",0)?xg($e(n,"stretch","fill-available"),o,f)+n:n}break;case 5152:case 5920:return $e(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,g,m,C,V,Y,w){return Ke+g+":"+m+w+(C?Ke+g+"-span:"+(V?Y:+Y-+m)+w:"")+n});case 4949:if(dt(n,o+6)===121)return $e(n,":",":"+Ue)+n;break;case 6444:switch(dt(n,dt(n,14)===45?18:11)){case 120:return $e(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(dt(n,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Ke+"$2box$3")+n;case 100:return $e(n,":",":"+Ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(n,"scroll-","scroll-snap-")+n}return n}function ro(n,o){for(var f="",u=0;u<n.length;u++)f+=o(n[u],u,n,o)||"";return f}function W0(n,o,f,u){switch(n.type){case H0:if(n.children.length)break;case R0:case N0:case yc:return n.return=n.return||n.value;case gg:return"";case yg:return n.return=n.value+"{"+ro(n.children,u)+"}";case yo:if(!on(n.value=n.props.join(",")))return""}return on(f=ro(n.children,u))?n.return=n.value+"{"+f+"}":""}function I0(n){var o=bg(n);return function(f,u,g,m){for(var C="",V=0;V<o;V++)C+=n[V](f,u,g,m)||"";return C}}function P0(n){return function(o){o.root||(o=o.return)&&n(o)}}function F0(n,o,f,u){if(n.length>-1&&!n.return)switch(n.type){case yc:n.return=xg(n.value,n.length,f);return;case yg:return ro([sa(n,{value:$e(n.value,"@","@"+Ue)})],u);case yo:if(n.length)return L0(f=n.props,function(g){switch(Nn(g,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Si(sa(n,{props:[$e(g,/:(read-\w+)/,":"+Ml+"$1")]})),Si(sa(n,{props:[g]})),lc(n,{props:kh(f,u)});break;case"::placeholder":Si(sa(n,{props:[$e(g,/:(plac\w+)/,":"+Ue+"input-$1")]})),Si(sa(n,{props:[$e(g,/:(plac\w+)/,":"+Ml+"$1")]})),Si(sa(n,{props:[$e(g,/:(plac\w+)/,Ke+"input-$1")]})),Si(sa(n,{props:[g]})),lc(n,{props:kh(f,u)});break}return""})}}var ev={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},$i=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",wg="active",zg="data-styled-version",So="6.3.8",vc=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",gn=pt.createContext===void 0,tv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),nv={},xo=Object.freeze([]),Ai=Object.freeze({});function Og(n,o,f){return f===void 0&&(f=Ai),n.theme!==f.theme&&n.theme||o||f.theme}var Tg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),av=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iv=/(^-|-$)/g;function Nh(n){return n.replace(av,"-").replace(iv,"")}var lv=/(a)(d)/gi,Hh=function(n){return String.fromCharCode(n+(n>25?39:97))};function oc(n){var o,f="";for(o=Math.abs(n);o>52;o=o/52|0)f=Hh(o%52)+f;return(Hh(o%52)+f).replace(lv,"$1-$2")}var Yu,xi=function(n,o){for(var f=o.length;f;)n=33*n^o.charCodeAt(--f);return n},$g=function(n){return xi(5381,n)};function bc(n){return oc($g(n)>>>0)}function rv(n){return n.displayName||n.name||"Component"}function Xu(n){return typeof n=="string"&&!0}var Ag=typeof Symbol=="function"&&Symbol.for,Eg=Ag?Symbol.for("react.memo"):60115,ov=Ag?Symbol.for("react.forward_ref"):60112,sv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cv=((Yu={})[ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yu[Eg]=_g,Yu);function Uh(n){return("type"in(o=n)&&o.type.$$typeof)===Eg?_g:"$$typeof"in n?cv[n.$$typeof]:sv;var o}var fv=Object.defineProperty,dv=Object.getOwnPropertyNames,Lh=Object.getOwnPropertySymbols,pv=Object.getOwnPropertyDescriptor,hv=Object.getPrototypeOf,Bh=Object.prototype;function jg(n,o,f){if(typeof o!="string"){if(Bh){var u=hv(o);u&&u!==Bh&&jg(n,u,f)}var g=dv(o);Lh&&(g=g.concat(Lh(o)));for(var m=Uh(n),C=Uh(o),V=0;V<g.length;++V){var Y=g[V];if(!(Y in uv||f&&f[Y]||C&&Y in C||m&&Y in m)){var w=pv(o,Y);try{fv(n,Y,w)}catch{}}}}return n}function ka(n){return typeof n=="function"}function Sc(n){return typeof n=="object"&&"styledComponentId"in n}function Ma(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function so(n,o){if(n.length===0)return"";for(var f=n[0],u=1;u<n.length;u++)f+=n[u];return f}function kl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function sc(n,o,f){if(f===void 0&&(f=!1),!f&&!kl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=sc(n[u],o[u]);else if(kl(o))for(var u in o)n[u]=sc(n[u],o[u]);return n}function xc(n,o){Object.defineProperty(n,"toString",{value:o})}function Da(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var gv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var f=0,u=0;u<o;u++)f+=this.groupSizes[u];return f},n.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var u=this.groupSizes,g=u.length,m=g;o>=m;)if((m<<=1)<0)throw Da(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(u),this.length=m;for(var C=g;C<m;C++)this.groupSizes[C]=0}for(var V=this.indexOfGroup(o+1),Y=(C=0,f.length);C<Y;C++)this.tag.insertRule(V,f[C])&&(this.groupSizes[o]++,V++)},n.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],u=this.indexOfGroup(o),g=u+f;this.groupSizes[o]=0;for(var m=u;m<g;m++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var u=this.groupSizes[o],g=this.indexOfGroup(o),m=g+u,C=g;C<m;C++)f+="".concat(this.tag.getRule(C)).concat(vc);return f},n})(),io=new Map,uo=new Map,lo=1,wi=function(n){if(io.has(n))return io.get(n);for(;uo.has(lo);)lo++;var o=lo++;return io.set(n,o),uo.set(o,n),o},yv=function(n,o){lo=o+1,io.set(n,o),uo.set(o,n)},mv="style[".concat($i,"][").concat(zg,'="').concat(So,'"]'),vv=new RegExp("^".concat($i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bv=function(n,o,f){for(var u,g=f.split(","),m=0,C=g.length;m<C;m++)(u=g[m])&&n.registerName(o,u)},Sv=function(n,o){for(var f,u=((f=o.textContent)!==null&&f!==void 0?f:"").split(vc),g=[],m=0,C=u.length;m<C;m++){var V=u[m].trim();if(V){var Y=V.match(vv);if(Y){var w=0|parseInt(Y[1],10),q=Y[2];w!==0&&(yv(q,w),bv(n,q,Y[3]),n.getTag().insertRules(w,g)),g.length=0}else g.push(V)}}},qh=function(n){for(var o=document.querySelectorAll(mv),f=0,u=o.length;f<u;f++){var g=o[f];g&&g.getAttribute($i)!==wg&&(Sv(n,g),g.parentNode&&g.parentNode.removeChild(g))}};function xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mg=function(n){var o=document.head,f=n||o,u=document.createElement("style"),g=(function(V){var Y=Array.from(V.querySelectorAll("style[".concat($i,"]")));return Y[Y.length-1]})(f),m=g!==void 0?g.nextSibling:null;u.setAttribute($i,wg),u.setAttribute(zg,So);var C=xv();return C&&u.setAttribute("nonce",C),f.insertBefore(u,m),u},wv=(function(){function n(o){this.element=Mg(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var u=document.styleSheets,g=0,m=u.length;g<m;g++){var C=u[g];if(C.ownerNode===f)return C}throw Da(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},n})(),zv=(function(){function n(o){this.element=Mg(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var u=document.createTextNode(f);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Ov=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Gh=oo,Tv={isServer:!oo,useCSSOMInjection:!tv},co=(function(){function n(o,f,u){o===void 0&&(o=Ai),f===void 0&&(f={});var g=this;this.options=mt(mt({},Tv),o),this.gs=f,this.names=new Map(u),this.server=!!o.isServer,!this.server&&oo&&Gh&&(Gh=!1,qh(this)),xc(this,function(){return(function(m){for(var C=m.getTag(),V=C.length,Y="",w=function(X){var ae=(function(oe){return uo.get(oe)})(X);if(ae===void 0)return"continue";var ue=m.names.get(ae),le=C.getGroup(X);if(ue===void 0||!ue.size||le.length===0)return"continue";var P="".concat($i,".g").concat(X,'[id="').concat(ae,'"]'),ve="";ue!==void 0&&ue.forEach(function(oe){oe.length>0&&(ve+="".concat(oe,","))}),Y+="".concat(le).concat(P,'{content:"').concat(ve,'"}').concat(vc)},q=0;q<V;q++)w(q);return Y})(g)})}return n.registerId=function(o){return wi(o)},n.prototype.rehydrate=function(){!this.server&&oo&&qh(this)},n.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new n(mt(mt({},this.options),o),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var u=f.useCSSOMInjection,g=f.target;return f.isServer?new Ov(g):u?new wv(g):new zv(g)})(this.options),new gv(o)));var o},n.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},n.prototype.registerName=function(o,f){if(wi(o),this.names.has(o))this.names.get(o).add(f);else{var u=new Set;u.add(f),this.names.set(o,u)}},n.prototype.insertRules=function(o,f,u){this.registerName(o,f),this.getTag().insertRules(wi(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(wi(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),$v=/&/g,zi=47;function Yh(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,f=0,u=0,g=!1,m=0;m<o;m++){var C=n.charCodeAt(m);if(u!==0||g||C!==zi||n.charCodeAt(m+1)!==42)if(g)C===42&&n.charCodeAt(m+1)===zi&&(g=!1,m++);else if(C!==34&&C!==39||m!==0&&n.charCodeAt(m-1)===92){if(u===0){if(C===123)f++;else if(C===125&&--f<0)return!0}}else u===0?u=C:u===C&&(u=0);else g=!0,m++}return f!==0||u!==0}function Cg(n,o){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Cg(f.children,o)),f})}function Av(n){var o,f,u,g=Ai,m=g.options,C=m===void 0?Ai:m,V=g.plugins,Y=V===void 0?xo:V,w=function(ae,ue,le){return le.startsWith(f)&&le.endsWith(f)&&le.replaceAll(f,"").length>0?".".concat(o):ae},q=Y.slice();q.push(function(ae){ae.type===yo&&ae.value.includes("&")&&(ae.props[0]=ae.props[0].replace($v,f).replace(u,w))}),C.prefix&&q.push(F0),q.push(W0);var X=function(ae,ue,le,P){ue===void 0&&(ue=""),le===void 0&&(le=""),P===void 0&&(P="&"),o=P,f=ue,u=new RegExp("\\".concat(f,"\\b"),"g");var ve=(function(ne){if(!Yh(ne))return ne;for(var se=ne.length,z="",O=0,S=0,k=0,_=!1,v=0;v<se;v++){var B=ne.charCodeAt(v);if(k!==0||_||B!==zi||ne.charCodeAt(v+1)!==42)if(_)B===42&&ne.charCodeAt(v+1)===zi&&(_=!1,v++);else if(B!==34&&B!==39||v!==0&&ne.charCodeAt(v-1)===92){if(k===0)if(B===123)S++;else if(B===125){if(--S<0){for(var Z=v+1;Z<se;){var R=ne.charCodeAt(Z);if(R===59||R===10)break;Z++}Z<se&&ne.charCodeAt(Z)===59&&Z++,S=0,v=Z-1,O=Z;continue}S===0&&(z+=ne.substring(O,v+1),O=v+1)}else B===59&&S===0&&(z+=ne.substring(O,v+1),O=v+1)}else k===0?k=B:k===B&&(k=0);else _=!0,v++}if(O<se){var J=ne.substring(O);Yh(J)||(z+=J)}return z})((function(ne){if(ne.indexOf("//")===-1)return ne;for(var se=ne.length,z=[],O=0,S=0,k=0,_=0;S<se;){var v=ne.charCodeAt(S);if(v!==34&&v!==39||S!==0&&ne.charCodeAt(S-1)===92)if(k===0)if(v===40&&S>=3&&(32|ne.charCodeAt(S-1))==108&&(32|ne.charCodeAt(S-2))==114&&(32|ne.charCodeAt(S-3))==117)_=1,S++;else if(_>0)v===41?_--:v===40&&_++,S++;else if(v===zi&&S+1<se&&ne.charCodeAt(S+1)===zi){for(S>O&&z.push(ne.substring(O,S));S<se&&ne.charCodeAt(S)!==10;)S++;O=S}else S++;else S++;else k===0?k=v:k===v&&(k=0),S++}return O===0?ne:(O<se&&z.push(ne.substring(O)),z.join(""))})(ae)),oe=K0(le||ue?"".concat(le," ").concat(ue," { ").concat(ve," }"):ve);C.namespace&&(oe=Cg(oe,C.namespace));var he=[];return ro(oe,I0(q.concat(P0(function(ne){return he.push(ne)})))),he};return X.hash=Y.length?Y.reduce(function(ae,ue){return ue.name||Da(15),xi(ae,ue.name)},5381).toString():"",X}var Ev=new co,uc=Av(),cc={shouldForwardProp:void 0,styleSheet:Ev,stylis:uc},kg=gn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(cc)}}:pt.createContext(cc);kg.Consumer;gn||pt.createContext(void 0);function fc(){return gn?cc:pt.useContext(kg)}var Dg=(function(){function n(o,f){var u=this;this.inject=function(g,m){m===void 0&&(m=uc);var C=u.name+m.hash;g.hasNameForId(u.id,C)||g.insertRules(u.id,C,m(u.rules,C,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,xc(this,function(){throw Da(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=uc),this.name+o.hash},n})();function _v(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in ev||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var jv=function(n){return n>="A"&&n<="Z"};function Xh(n){for(var o="",f=0;f<n.length;f++){var u=n[f];if(f===1&&u==="-"&&n[0]==="-")return n;jv(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var Rg=function(n){return n==null||n===!1||n===""},Ng=function(n){var o=[];for(var f in n){var u=n[f];n.hasOwnProperty(f)&&!Rg(u)&&(Array.isArray(u)&&u.isCss||ka(u)?o.push("".concat(Xh(f),":"),u,";"):kl(u)?o.push.apply(o,Oi(Oi(["".concat(f," {")],Ng(u),!1),["}"],!1)):o.push("".concat(Xh(f),": ").concat(_v(f,u),";")))}return o};function ca(n,o,f,u){if(Rg(n))return[];if(Sc(n))return[".".concat(n.styledComponentId)];if(ka(n)){if(!ka(m=n)||m.prototype&&m.prototype.isReactComponent||!o)return[n];var g=n(o);return ca(g,o,f,u)}var m;return n instanceof Dg?f?(n.inject(f,u),[n.getName(u)]):[n]:kl(n)?Ng(n):Array.isArray(n)?Array.prototype.concat.apply(xo,n.map(function(C){return ca(C,o,f,u)})):[n.toString()]}function Hg(n){for(var o=0;o<n.length;o+=1){var f=n[o];if(ka(f)&&!Sc(f))return!1}return!0}var Mv=$g(So),Cv=(function(){function n(o,f,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Hg(o),this.componentId=f,this.baseHash=xi(Mv,f),this.baseStyle=u,co.registerId(f)}return n.prototype.generateAndInjectStyles=function(o,f,u){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))g=Ma(g,this.staticRulesId);else{var m=so(ca(this.rules,o,f,u)),C=oc(xi(this.baseHash,m)>>>0);if(!f.hasNameForId(this.componentId,C)){var V=u(m,".".concat(C),void 0,this.componentId);f.insertRules(this.componentId,C,V)}g=Ma(g,C),this.staticRulesId=C}else{for(var Y=xi(this.baseHash,u.hash),w="",q=0;q<this.rules.length;q++){var X=this.rules[q];if(typeof X=="string")w+=X;else if(X){var ae=so(ca(X,o,f,u));Y=xi(Y,ae+q),w+=ae}}if(w){var ue=oc(Y>>>0);if(!f.hasNameForId(this.componentId,ue)){var le=u(w,".".concat(ue),void 0,this.componentId);f.insertRules(this.componentId,ue,le)}g=Ma(g,ue)}}return{className:g,css:typeof window>"u"?f.getTag().getGroup(wi(this.componentId)):""}},n})(),Dl=gn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:pt.createContext(void 0);Dl.Consumer;function kv(n){if(gn)return n.children;var o=pt.useContext(Dl),f=pt.useMemo(function(){return(function(u,g){if(!u)throw Da(14);if(ka(u)){var m=u(g);return m}if(Array.isArray(u)||typeof u!="object")throw Da(8);return g?mt(mt({},g),u):u})(n.theme,o)},[n.theme,o]);return n.children?pt.createElement(Dl.Provider,{value:f},n.children):null}var Qu={};function Dv(n,o,f){var u=Sc(n),g=n,m=!Xu(n),C=o.attrs,V=C===void 0?xo:C,Y=o.componentId,w=Y===void 0?(function(se,z){var O=typeof se!="string"?"sc":Nh(se);Qu[O]=(Qu[O]||0)+1;var S="".concat(O,"-").concat(bc(So+O+Qu[O]));return z?"".concat(z,"-").concat(S):S})(o.displayName,o.parentComponentId):Y,q=o.displayName,X=q===void 0?(function(se){return Xu(se)?"styled.".concat(se):"Styled(".concat(rv(se),")")})(n):q,ae=o.displayName&&o.componentId?"".concat(Nh(o.displayName),"-").concat(o.componentId):o.componentId||w,ue=u&&g.attrs?g.attrs.concat(V).filter(Boolean):V,le=o.shouldForwardProp;if(u&&g.shouldForwardProp){var P=g.shouldForwardProp;if(o.shouldForwardProp){var ve=o.shouldForwardProp;le=function(se,z){return P(se,z)&&ve(se,z)}}else le=P}var oe=new Cv(f,ae,u?g.componentStyle:void 0);function he(se,z){return(function(O,S,k){var _=O.attrs,v=O.componentStyle,B=O.defaultProps,Z=O.foldedComponentIds,R=O.styledComponentId,J=O.target,ee=gn?void 0:pt.useContext(Dl),A=fc(),c=O.shouldForwardProp||A.shouldForwardProp,ie=Og(S,ee,B)||Ai,T=(function(ge,de,Se){for(var Ae,we=mt(mt({},de),{className:void 0,theme:Se}),Ee=0;Ee<ge.length;Ee+=1){var be=ka(Ae=ge[Ee])?Ae(we):Ae;for(var Oe in be)Oe==="className"?we.className=Ma(we.className,be[Oe]):Oe==="style"?we.style=mt(mt({},we.style),be[Oe]):we[Oe]=be[Oe]}return"className"in de&&typeof de.className=="string"&&(we.className=Ma(we.className,de.className)),we})(_,S,ie),d=T.as||J,p={};for(var b in T)T[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&T.theme===ie||(b==="forwardedAs"?p.as=T.forwardedAs:c&&!c(b,d)||(p[b]=T[b]));var U=(function(ge,de){var Se=fc(),Ae=ge.generateAndInjectStyles(de,Se.styleSheet,Se.stylis);return Ae})(v,T),D=U.className,W=U.css,K=Ma(Z,R);D&&(K+=" "+D),T.className&&(K+=" "+T.className),p[Xu(d)&&!Tg.has(d)?"class":"className"]=K,k&&(p.ref=k);var te=qe.createElement(d,p);return gn&&W?pt.createElement(pt.Fragment,null,pt.createElement("style",{precedence:"styled-components",href:"sc-".concat(R,"-").concat(D),children:W}),te):te})(ne,se,z)}he.displayName=X;var ne=pt.forwardRef(he);return ne.attrs=ue,ne.componentStyle=oe,ne.displayName=X,ne.shouldForwardProp=le,ne.foldedComponentIds=u?Ma(g.foldedComponentIds,g.styledComponentId):"",ne.styledComponentId=ae,ne.target=u?g.target:n,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(se){this._foldedDefaultProps=u?(function(z){for(var O=[],S=1;S<arguments.length;S++)O[S-1]=arguments[S];for(var k=0,_=O;k<_.length;k++)sc(z,_[k],!0);return z})({},g.defaultProps,se):se}}),xc(ne,function(){return".".concat(ne.styledComponentId)}),m&&jg(ne,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Qh(n,o){for(var f=[n[0]],u=0,g=o.length;u<g;u+=1)f.push(o[u],n[u+1]);return f}var Vh=function(n){return Object.assign(n,{isCss:!0})};function wc(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(ka(n)||kl(n))return Vh(ca(Qh(xo,Oi([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?ca(u):Vh(ca(Qh(u,o)))}function dc(n,o,f){if(f===void 0&&(f=Ai),!o)throw Da(1,o);var u=function(g){for(var m=[],C=1;C<arguments.length;C++)m[C-1]=arguments[C];return n(o,f,wc.apply(void 0,Oi([g],m,!1)))};return u.attrs=function(g){return dc(n,o,mt(mt({},f),{attrs:Array.prototype.concat(f.attrs,g).filter(Boolean)}))},u.withConfig=function(g){return dc(n,o,mt(mt({},f),g))},u}var Ug=function(n){return dc(Dv,n)},E=Ug;Tg.forEach(function(n){E[n]=Ug(n)});var Rv=(function(){function n(o,f){this.rules=o,this.componentId=f,this.isStatic=Hg(o),co.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,f,u,g){var m=g(so(ca(this.rules,f,u,g)),""),C=this.componentId+o;u.insertRules(C,C,m)},n.prototype.removeStyles=function(o,f){f.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,f,u,g){o>2&&co.registerId(this.componentId+o);var m=this.componentId+o;this.isStatic?u.hasNameForId(m,m)||this.createStyles(o,f,u,g):(this.removeStyles(o,u),this.createStyles(o,f,u,g))},n})();function Nv(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var u=wc.apply(void 0,Oi([n],o,!1)),g="sc-global-".concat(bc(JSON.stringify(u))),m=new Rv(u,g),C=new WeakMap,V=function(Y){var w=fc(),q=gn?void 0:pt.useContext(Dl),X=C.get(w.styleSheet);if(X===void 0&&(X=w.styleSheet.allocateGSInstance(g),C.set(w.styleSheet,X)),(typeof window>"u"||!w.styleSheet.server)&&(function(ve,oe,he,ne,se){if(m.isStatic)m.renderStyles(ve,nv,he,se);else{var z=mt(mt({},oe),{theme:Og(oe,ne,V.defaultProps)});m.renderStyles(ve,z,he,se)}})(X,Y,w.styleSheet,q,w.stylis),!gn){var ae=pt.useRef(!0);pt.useLayoutEffect(function(){return ae.current=!1,function(){ae.current=!0,queueMicrotask(function(){ae.current&&(m.removeStyles(X,w.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(g,'"]')).forEach(function(ve){return ve.remove()}))})}},[X,w.styleSheet])}if(gn){var ue=g+X,le=typeof window>"u"?w.styleSheet.getTag().getGroup(wi(ue)):"";if(le){var P="".concat(g,"-").concat(X);return pt.createElement("style",{key:P,"data-styled-global":g,precedence:"styled-components",href:P,children:le})}}return null};return pt.memo(V)}function ji(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var u=so(wc.apply(void 0,Oi([n],o,!1))),g=bc(u);return new Dg(g,u)}var en=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(en||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uv=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,f,u)=>u?u.toUpperCase():f.toLowerCase()),Zh=n=>{const o=Uv(n);return o.charAt(0).toUpperCase()+o.slice(1)},Lg=(...n)=>n.filter((o,f,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===f).join(" ").trim(),Lv=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=qe.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:g="",children:m,iconNode:C,...V},Y)=>qe.createElement("svg",{ref:Y,...Bv,width:o,height:o,stroke:n,strokeWidth:u?Number(f)*24/Number(o):f,className:Lg("lucide",g),...!m&&!Lv(V)&&{"aria-hidden":"true"},...V},[...C.map(([w,q])=>qe.createElement(w,q)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(n,o)=>{const f=qe.forwardRef(({className:u,...g},m)=>qe.createElement(qv,{ref:m,iconNode:o,className:Lg(`lucide-${Hv(Zh(n))}`,`lucide-${n}`,u),...g}));return f.displayName=Zh(n),f};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Yv=ut("arrow-down",Gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Mi=ut("arrow-left",Xv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zc=ut("arrow-right",Qv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Zv=ut("arrow-up-right",Vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jv=ut("check",Kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Iv=ut("dribbble",Wv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Fv=ut("external-link",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],tb=ut("figma",eb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kh=ut("file-text",nb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ib=ut("funnel",ab);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],rb=ut("gamepad-2",lb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],sb=ut("image",ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],cb=ut("linkedin",ub);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],db=ut("mail",fb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],hb=ut("menu",pb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],yb=ut("pen-tool",gb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],vb=ut("star",mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Sb=ut("tag",bb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],wb=ut("twitter",xb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bg=ut("x",zb),Ob={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},17:{title:"App Store Screenshots",description:"",technologies:["App Store","Маркетинг","Візуальний дизайн"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"About Me",heading1:"Designing",heading2:"Through Craft.",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Emotion",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaca:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaca",eyebrow:"UI/UX Design",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",18:{title:"Onboarding for Beauty Shop",description:"Вишуканий онбординг для застосунку б’юті-магазину з фокусом на персоналізації та плавному першому досвіді.",technologies:["Figma","UI/UX","Онбординг"]},brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaca: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"Про мене",heading1:"Дизайн",heading2:"Через майстерність.",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Емоцій",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaca:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaca",eyebrow:"UI/UX дизайн",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},qg=qe.createContext(void 0),Tb=({children:n})=>{const[o,f]=qe.useState("en"),u={lang:o,setLang:f,t:Ob[o]};return y.jsx(qg.Provider,{value:u,children:n})},un=()=>{const n=qe.useContext(qg);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},Vu=(n,o)=>{const u={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign"}[n];return u?o.work.categories[u]:n},$b=(n,o)=>{const u={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return u?o.about.skills[u]:n},j={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",navWidth:"95%",navMaxWidth:"1024px",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",carouselCaptionOffsetLg:"18px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blurMenu:"20px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite95:"rgba(255, 255, 255, 0.95)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite98:"rgba(255, 255, 255, 0.98)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55,carouselCaptionOpacity:.6},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9,scaleCaptionDown:.92},zIndex:{background:0,foreground:1,stickyHeader:20,mobileMenu:40,nav:50,modal:100,closeButton:2,progress:100},navigation:{scrollThreshold:20},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},Ab=E.nav`
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
`,Eb=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Gg=E.button`
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
`,_b=E.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${Gg}:hover & {
    transform: rotate(12deg);
  }
`,jb=E.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,Mb=E.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,Cb=E.button`
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
`,kb=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,Db=E.button`
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
`,Rb=E.button`
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
`,Nb=E.button`
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
`,Hb=E.div`
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
`,Ub=E.button`
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
`,Lb=E.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,Bb=E.button`
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
`,qb=E.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,Gb=({onNavigate:n})=>{const{t:o}=un(),[f,u]=qe.useState(!1),[g,m]=qe.useState(!1);qe.useEffect(()=>{const q=()=>{u(window.scrollY>j.navigation.scrollThreshold)};return window.addEventListener("scroll",q),()=>window.removeEventListener("scroll",q)},[]);const C=q=>{if(n){n(q),m(!1);return}const X=document.getElementById(q);X&&(X.scrollIntoView({behavior:"smooth"}),m(!1))},V=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},Y=()=>{alert(o.nav.cvAlert)},w=[{label:o.nav.work,id:en.WORK},{label:o.nav.about,id:en.ABOUT}];return y.jsxs(y.Fragment,{children:[y.jsx(Ab,{$scrolled:f,children:y.jsxs(Eb,{children:[y.jsxs(Gg,{onClick:()=>C(en.HERO),children:[y.jsx(_b,{children:"A."}),y.jsx(jb,{children:o.nav.brandText})]}),y.jsxs(Mb,{children:[w.map(q=>y.jsx(Cb,{onClick:()=>C(q.id),children:q.label},q.id)),y.jsxs(kb,{children:[y.jsxs(Db,{onClick:Y,children:[y.jsx(Kh,{size:16}),o.nav.cv]}),y.jsx(Rb,{onClick:V,children:o.nav.hireMe})]})]}),y.jsx(Nb,{onClick:()=>m(!g),children:g?y.jsx(Bg,{size:24}):y.jsx(hb,{size:24})})]})}),y.jsxs(Hb,{$open:g,children:[w.map(q=>y.jsx(Ub,{onClick:()=>C(q.id),children:q.label},q.id)),y.jsxs(Lb,{children:[y.jsxs(Bb,{onClick:Y,children:[y.jsx(Kh,{size:24}),o.nav.cv]}),y.jsx(qb,{onClick:V,children:o.nav.hireMe})]})]})]})},Yb={light:"light",regular:"regular",medium:"medium",bold:"bold"},Xb={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},Qb=E.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[Xb[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[Yb[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Oc=({as:n="span",element:o,message:f,size:u="md",weight:g="regular",color:m="secondary",...C})=>{const{t:V}=un(),Y=o??n;return y.jsx(Qb,{as:Y,$size:u,$weight:g,$color:m,...C,children:f(V)})},Vb=ji`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${j.motion.floatOffset}); }
`,Zb=ji`
  0% { opacity: 0; transform: translateY(${j.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,Kb=E.section`
  position: relative;
  min-height: ${j.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,Jb=E.div`
  position: relative;
  z-index: 1;
  max-width: ${j.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${Zb} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,pc=E.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${Vb} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,Jh=E(pc)`
  animation-delay: 3s;
`,Wb=E.div`
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
`,Ib=E.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,Pb=E.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,Fb=E.h1`
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
`,e1=E.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,t1=E(Oc)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${j.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,n1=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,Yg=E.button`
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
`,a1=E(Yv)`
  transition: transform 0.2s ease;

  ${Yg}:hover & {
    transform: translateY(${j.motion.arrowDrop});
  }
`,i1=()=>{const{t:n}=un();return y.jsx(Kb,{id:en.HERO,children:y.jsxs(Jb,{children:[y.jsx(pc,{style:{left:j.sizing.heroFloatLeftOffset,top:0},children:y.jsx(tb,{color:"#7c3aed",size:32})}),y.jsx(Jh,{style:{right:j.sizing.heroFloatRightOffset,top:j.sizing.heroFloatRightTop},children:y.jsx(yb,{color:"#3b82f6",size:32})}),y.jsx(Jh,{style:{left:j.sizing.heroFloatLeftAlt,bottom:0},children:y.jsx(sb,{color:"#ec4899",size:32})}),y.jsx(pc,{style:{right:0,bottom:j.sizing.heroFloatRightBottom},children:y.jsx(rb,{color:"#10b981",size:32})}),y.jsxs(Wb,{children:[y.jsx(Ib,{}),y.jsx(Pb,{children:n.hero.available})]}),y.jsxs(Fb,{children:[n.hero.heading1," ",y.jsx("br",{}),y.jsx(e1,{children:n.hero.heading2})]}),y.jsx(t1,{element:"p",message:o=>o.hero.lead}),y.jsx(n1,{children:y.jsxs(Yg,{onClick:()=>{var o;return(o=document.getElementById(en.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,y.jsx(a1,{size:18})]})})]})})},ce="/assets",l1=`${ce}/images/brand/app-icons-splash-screens/full-composition.png`,r1=`${ce}/video/uiux/smart-house-app.mp4`,o1=`${ce}/images/brand/Namelaca icons and illustration/Full_Composition_Namelaca.png`,s1=`${ce}/video/uiux/Onboarding for Beauty shop.mp4`,u1=`${ce}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,c1=[`${ce}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${ce}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 1.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 2.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 3.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 4.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 5.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 7.jpg`,`${ce}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 9.png`],fo="Anna Serhiienko",f1="Graphic Designer",d1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",p1=["Brand design","UI/UX design","Marketing and advertising"],Xg=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],po=[{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:l1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:16,title:"Smart House App",category:"UI/UX design",mediaUrl:r1,mediaType:"video",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",link:"https://dribbble.com/shots/11804880-Smart-house-App",technologies:["Figma","UI Animation","IoT Design"]},{id:18,title:"Onboarding for Beauty Shop",category:"UI/UX design",mediaUrl:s1,mediaType:"video",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",link:"https://dribbble.com/shots/11284581-Onboarding-for-Beauty-shop",technologies:["Figma","UI/UX","Onboarding"]},{id:20,title:"Namelaca Icons & Illustration",category:"UI/UX design",mediaUrl:o1,mediaType:"image",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",link:"#namelaca",technologies:["Illustration","Icon Design","UI Assets"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:u1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${ce}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:c1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]}],h1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${fo}${f1}${d1}${Xg.join(", ")}${po.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const Qg=ji`
  0% { opacity: 0; transform: translateY(${j.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,g1=ji`
  from { opacity: 0; }
  to { opacity: 1; }
`,y1=E.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${j.effects.sectionWash};
`,m1=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,v1=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,b1=E.div`
  max-width: ${j.layout.workHeadingMaxWidth};
`,S1=E.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,x1=E.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,w1=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,z1=E.button`
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
`,O1=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Ci=E.div`
  cursor: pointer;
  animation: ${Qg} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,T1=E.div`
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
`,$1=E.img`
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
`,A1=E.video`
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
`,E1=E.div`
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
`,_1=E.span`
  color: ${j.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,j1=E.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,M1=E.div`
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
`,C1=E.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${j.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,k1=E.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,D1=E.div`
  position: fixed;
  inset: 0;
  z-index: ${j.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${g1} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,R1=E.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.overlayDark95};
  backdrop-filter: blur(${j.effects.blurStrong});
`,N1=E.div`
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
  animation: ${Qg} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,H1=E.button`
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
`,U1=E.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${j.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,L1=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,B1=E.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,q1=E.div`
  width: 100%;
  height: 100%;
  padding: ${({theme:n})=>n.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  overflow-y: auto;
`,G1=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,Y1=E.h4`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,X1=E.div`
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
`,Q1=E.div`
  flex: 0 0 auto;
  width: 220px;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[50]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,V1=E.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`,Z1=E.div`
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
`,K1=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,J1=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,W1=E.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,I1=E.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,P1=E.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,F1=E.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,eS=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,tS=E.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,nS=E.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,aS=E.a`
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
`,iS=()=>{const{t:n}=un(),[o,f]=qe.useState("All"),[u,g]=qe.useState(null),m=w=>w.includes(" ")?encodeURI(w):w,C=w=>{const q=[],X=new Map;return w.forEach(ae=>{const oe=decodeURIComponent(ae.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";X.has(oe)?q[X.get(oe)].items.push(ae):(X.set(oe,q.length),q.push({name:oe,items:[ae]}))}),q};qe.useEffect(()=>{if(!u)return;const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=w}},[u]);const V=["All",...p1],Y=qe.useMemo(()=>o==="All"?po:po.filter(w=>w.category===o),[o]);return y.jsxs(y1,{id:en.WORK,children:[y.jsxs(m1,{children:[y.jsxs(v1,{children:[y.jsxs(b1,{children:[y.jsx(S1,{children:n.work.title}),y.jsx(x1,{children:n.work.subtitle})]}),y.jsx(w1,{children:V.map(w=>y.jsx(z1,{$active:o===w,onClick:()=>f(w),children:w==="All"?n.work.all:Vu(w,n)},w))})]}),y.jsx(O1,{children:Y.map((w,q)=>{const X=n.projects[w.id],ae=(X==null?void 0:X.title)??w.title;return y.jsx(Ci,{style:{animationDelay:`${q*.1}s`},onClick:()=>g(w),children:y.jsxs(T1,{children:[w.mediaType==="video"?y.jsx(A1,{src:m(w.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):y.jsx($1,{src:m(w.mediaUrl),alt:ae}),y.jsxs(E1,{children:[y.jsx(_1,{children:Vu(w.category,n)}),y.jsx(j1,{children:ae}),y.jsx(M1,{children:y.jsx(Zv,{size:24})})]})]})},w.id)})}),Y.length===0&&y.jsxs(C1,{children:[y.jsx(ib,{color:"#e2e8f0",size:48}),y.jsx(k1,{children:n.work.emptyState})]})]}),u&&(()=>{var ue;const w=n.projects[u.id],q=(w==null?void 0:w.title)??u.title,X=(w==null?void 0:w.description)??u.description,ae=(w==null?void 0:w.technologies)??u.technologies;return y.jsxs(D1,{children:[y.jsx(R1,{onClick:()=>g(null)}),y.jsxs(N1,{children:[y.jsx(H1,{onClick:()=>g(null),"aria-label":n.work.close,children:y.jsx(Bg,{size:24})}),y.jsx(U1,{children:(ue=u.gallery)!=null&&ue.length?y.jsx(q1,{children:C(u.gallery).map(le=>y.jsxs(G1,{children:[y.jsx(Y1,{children:le.name}),y.jsx(X1,{children:le.items.map((P,ve)=>y.jsx(Q1,{children:y.jsx(V1,{src:m(P),alt:`${q} ${le.name} ${ve+1}`,loading:"lazy"})},`${le.name}-${ve}`))})]},le.name))}):u.mediaType==="video"?y.jsx(B1,{src:m(u.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):y.jsx(L1,{src:m(u.mediaUrl),alt:q})}),y.jsxs(Z1,{children:[y.jsxs(K1,{children:[y.jsx(Sb,{size:14}),y.jsx(J1,{children:Vu(u.category,n)})]}),y.jsx(W1,{children:q}),y.jsx(I1,{children:X}),y.jsxs(P1,{children:[y.jsx(F1,{children:n.work.technologies}),y.jsx(eS,{children:ae.map((le,P)=>y.jsx(tS,{children:le},P))})]}),y.jsx(nS,{children:y.jsxs(aS,{href:u.link,children:[n.work.viewProject,y.jsx(Fv,{size:18})]})})]})]})]})})()]})},lS=ji`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${j.motion.floatOffset}); }
`,rS=E.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,oS=E.div`
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
`,sS=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,uS=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,cS=E.div`
  position: relative;
`,fS=E.div`
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
`,dS=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,pS=E.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,hS=E.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${lS} 6s ease-in-out infinite;
  max-width: ${j.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,gS=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,yS=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,mS=E.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,vS=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,bS=E(Oc)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,SS=E.div`
  display: flex;
  flex-direction: column;
`,xS=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,wS=E.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,zS=E.span`
  font-style: italic;
`,OS=E(Oc)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,TS=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,$S=E.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,AS=E.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${j.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,ES=E.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,_S=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,Vg=E.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,Zg=E(Jv)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,Kg=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,jS=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${Vg} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${Zg} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${Kg} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,MS=()=>{const{t:n}=un();return y.jsxs(rS,{id:en.ABOUT,children:[y.jsx(oS,{children:n.about.watermark}),y.jsx(sS,{children:y.jsxs(uS,{children:[y.jsxs(cS,{children:[y.jsxs(fS,{children:[y.jsx(dS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),y.jsx(pS,{"data-overlay":!0})]}),y.jsxs(hS,{children:[y.jsxs(gS,{children:[y.jsx(vb,{color:"#6366f1",fill:"#6366f1",size:16}),y.jsx(yS,{children:n.about.experience})]}),y.jsxs(mS,{children:["5+ ",y.jsx(vS,{children:n.about.years})]}),y.jsx(bS,{element:"p",message:f=>f.about.experienceText})]})]}),y.jsxs(SS,{children:[y.jsx(xS,{children:n.about.discovery}),y.jsxs(wS,{children:[n.about.heading1," ",y.jsx(zS,{children:n.about.emphasis})," ",y.jsx("br",{})," ",n.about.heading2]}),y.jsx(OS,{element:"p",message:f=>f.about.bio}),y.jsx(TS,{children:y.jsxs("div",{children:[y.jsxs($S,{children:[y.jsx(AS,{}),n.about.proficiencies]}),y.jsx(ES,{children:Xg.map((f,u)=>y.jsx(_S,{children:y.jsxs(jS,{children:[y.jsx(Vg,{children:y.jsx(Zg,{size:12})}),y.jsx(Kg,{children:$b(f,n)})]})},u))})]})})]})]})})]})},CS=E.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,kS=E.div`
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
`,DS=E.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,RS=E.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,NS=E.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,HS=E.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,US=E.a`
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
`,LS=()=>{const{t:n}=un(),o=f=>{switch(f){case"Twitter":return y.jsx(wb,{size:20});case"Linkedin":return y.jsx(cb,{size:20});case"Dribbble":return y.jsx(Iv,{size:20});case"Mail":return y.jsx(db,{size:20});default:return null}};return y.jsx(CS,{children:y.jsxs(kS,{children:[y.jsxs(DS,{children:[y.jsx(RS,{children:fo}),y.jsxs(NS,{children:["© ",new Date().getFullYear()," ",fo,". ",n.footer.rights]})]}),y.jsx(HS,{children:h1.map(f=>y.jsx(US,{href:f.url,target:"_blank",rel:"noopener noreferrer","aria-label":f.name,children:o(f.icon)},f.name))})]})})};var ft=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELACA="namelaca",n.MINDZY="mindzy",n))(ft||{}),Zu={},Ku={},Al={},Ju={},Wh;function BS(){return Wh||(Wh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(Ju)),Ju}var Wu,Ih;function qS(){if(Ih)return Wu;Ih=1;var n="Expected a function",o=NaN,f="[object Symbol]",u=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,C=/^0o[0-7]+$/i,V=parseInt,Y=typeof Fr=="object"&&Fr&&Fr.Object===Object&&Fr,w=typeof self=="object"&&self&&self.Object===Object&&self,q=Y||w||Function("return this")(),X=Object.prototype,ae=X.toString,ue=Math.max,le=Math.min,P=function(){return q.Date.now()};function ve(z,O,S){var k,_,v,B,Z,R,J=0,ee=!1,A=!1,c=!0;if(typeof z!="function")throw new TypeError(n);O=se(O)||0,oe(S)&&(ee=!!S.leading,A="maxWait"in S,v=A?ue(se(S.maxWait)||0,O):v,c="trailing"in S?!!S.trailing:c);function ie(te){var ge=k,de=_;return k=_=void 0,J=te,B=z.apply(de,ge),B}function T(te){return J=te,Z=setTimeout(b,O),ee?ie(te):B}function d(te){var ge=te-R,de=te-J,Se=O-ge;return A?le(Se,v-de):Se}function p(te){var ge=te-R,de=te-J;return R===void 0||ge>=O||ge<0||A&&de>=v}function b(){var te=P();if(p(te))return U(te);Z=setTimeout(b,d(te))}function U(te){return Z=void 0,c&&k?ie(te):(k=_=void 0,B)}function D(){Z!==void 0&&clearTimeout(Z),J=0,k=R=_=Z=void 0}function W(){return Z===void 0?B:U(P())}function K(){var te=P(),ge=p(te);if(k=arguments,_=this,R=te,ge){if(Z===void 0)return T(R);if(A)return Z=setTimeout(b,O),ie(R)}return Z===void 0&&(Z=setTimeout(b,O)),B}return K.cancel=D,K.flush=W,K}function oe(z){var O=typeof z;return!!z&&(O=="object"||O=="function")}function he(z){return!!z&&typeof z=="object"}function ne(z){return typeof z=="symbol"||he(z)&&ae.call(z)==f}function se(z){if(typeof z=="number")return z;if(ne(z))return o;if(oe(z)){var O=typeof z.valueOf=="function"?z.valueOf():z;z=oe(O)?O+"":O}if(typeof z!="string")return z===0?z:+z;z=z.replace(u,"");var S=m.test(z);return S||C.test(z)?V(z.slice(2),S?2:8):g.test(z)?o:+z}return Wu=ve,Wu}var Iu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ph;function wo(){return Ph||(Ph=1,(function(n){(function(){var o={}.hasOwnProperty;function f(){for(var m="",C=0;C<arguments.length;C++){var V=arguments[C];V&&(m=g(m,u(V)))}return m}function u(m){if(typeof m=="string"||typeof m=="number")return m;if(typeof m!="object")return"";if(Array.isArray(m))return f.apply(null,m);if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]"))return m.toString();var C="";for(var V in m)o.call(m,V)&&m[V]&&(C=g(C,V));return C}function g(m,C){return C?m?m+" "+C:m+C:m}n.exports?(f.default=f,n.exports=f):window.classNames=f})()})(Iu)),Iu.exports}var re={},Pu={},Fh;function Jg(){return Fh||(Fh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(yn());function f(g){return g&&g.__esModule?g:{default:g}}var u={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(m){return o.default.createElement("ul",{style:{display:"block"}},m)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(m){return o.default.createElement("button",null,m+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=u})(Pu)),Pu}var eg;function Rl(){if(eg)return re;eg=1,Object.defineProperty(re,"__esModule",{value:!0}),re.checkSpecKeys=re.checkNavigable=re.changeSlide=re.canUseDOM=re.canGoNext=void 0,re.clamp=w,re.extractObject=void 0,re.filterSettings=ie,re.validSettings=re.swipeStart=re.swipeMove=re.swipeEnd=re.slidesOnRight=re.slidesOnLeft=re.slideHandler=re.siblingDirection=re.safePreventDefault=re.lazyStartIndex=re.lazySlidesOnRight=re.lazySlidesOnLeft=re.lazyEndIndex=re.keyHandler=re.initializedState=re.getWidth=re.getTrackLeft=re.getTrackCSS=re.getTrackAnimateCSS=re.getTotalSlides=re.getSwipeDirection=re.getSlideCount=re.getRequiredLazySlides=re.getPreClones=re.getPostClones=re.getOnDemandLazySlides=re.getNavigableIndexes=re.getHeight=void 0;var n=f(yn()),o=f(Jg());function f(T){return T&&T.__esModule?T:{default:T}}function u(T){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},u(T)}function g(T,d){var p=Object.keys(T);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(T);d&&(b=b.filter(function(U){return Object.getOwnPropertyDescriptor(T,U).enumerable})),p.push.apply(p,b)}return p}function m(T){for(var d=1;d<arguments.length;d++){var p=arguments[d]!=null?arguments[d]:{};d%2?g(Object(p),!0).forEach(function(b){C(T,b,p[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(p)):g(Object(p)).forEach(function(b){Object.defineProperty(T,b,Object.getOwnPropertyDescriptor(p,b))})}return T}function C(T,d,p){return(d=V(d))in T?Object.defineProperty(T,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[d]=p,T}function V(T){var d=Y(T,"string");return u(d)=="symbol"?d:d+""}function Y(T,d){if(u(T)!="object"||!T)return T;var p=T[Symbol.toPrimitive];if(p!==void 0){var b=p.call(T,d);if(u(b)!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(T)}function w(T,d,p){return Math.max(d,Math.min(T,p))}var q=re.safePreventDefault=function(d){var p=["onTouchStart","onTouchMove","onWheel"];p.includes(d._reactName)||d.preventDefault()},X=re.getOnDemandLazySlides=function(d){for(var p=[],b=ae(d),U=ue(d),D=b;D<U;D++)d.lazyLoadedList.indexOf(D)<0&&p.push(D);return p};re.getRequiredLazySlides=function(d){for(var p=[],b=ae(d),U=ue(d),D=b;D<U;D++)p.push(D);return p};var ae=re.lazyStartIndex=function(d){return d.currentSlide-le(d)},ue=re.lazyEndIndex=function(d){return d.currentSlide+P(d)},le=re.lazySlidesOnLeft=function(d){return d.centerMode?Math.floor(d.slidesToShow/2)+(parseInt(d.centerPadding)>0?1:0):0},P=re.lazySlidesOnRight=function(d){return d.centerMode?Math.floor((d.slidesToShow-1)/2)+1+(parseInt(d.centerPadding)>0?1:0):d.slidesToShow},ve=re.getWidth=function(d){return d&&d.offsetWidth||0},oe=re.getHeight=function(d){return d&&d.offsetHeight||0},he=re.getSwipeDirection=function(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b,U,D,W;return b=d.startX-d.curX,U=d.startY-d.curY,D=Math.atan2(U,b),W=Math.round(D*180/Math.PI),W<0&&(W=360-Math.abs(W)),W<=45&&W>=0||W<=360&&W>=315?"left":W>=135&&W<=225?"right":p===!0?W>=35&&W<=135?"up":"down":"vertical"},ne=re.canGoNext=function(d){var p=!0;return d.infinite||(d.centerMode&&d.currentSlide>=d.slideCount-1||d.slideCount<=d.slidesToShow||d.currentSlide>=d.slideCount-d.slidesToShow)&&(p=!1),p};re.extractObject=function(d,p){var b={};return p.forEach(function(U){return b[U]=d[U]}),b},re.initializedState=function(d){var p=n.default.Children.count(d.children),b=d.listRef,U=Math.ceil(ve(b)),D=d.trackRef&&d.trackRef.node,W=Math.ceil(ve(D)),K;if(d.vertical)K=U;else{var te=d.centerMode&&parseInt(d.centerPadding)*2;typeof d.centerPadding=="string"&&d.centerPadding.slice(-1)==="%"&&(te*=U/100),K=Math.ceil((U-te)/d.slidesToShow)}var ge=b&&oe(b.querySelector('[data-index="0"]')),de=ge*d.slidesToShow,Se=d.currentSlide===void 0?d.initialSlide:d.currentSlide;d.rtl&&d.currentSlide===void 0&&(Se=p-1-d.initialSlide);var Ae=d.lazyLoadedList||[],we=X(m(m({},d),{},{currentSlide:Se,lazyLoadedList:Ae}));Ae=Ae.concat(we);var Ee={slideCount:p,slideWidth:K,listWidth:U,trackWidth:W,currentSlide:Se,slideHeight:ge,listHeight:de,lazyLoadedList:Ae};return d.autoplaying===null&&d.autoplay&&(Ee.autoplaying="playing"),Ee},re.slideHandler=function(d){var p=d.waitForAnimate,b=d.animating,U=d.fade,D=d.infinite,W=d.index,K=d.slideCount,te=d.lazyLoad,ge=d.currentSlide,de=d.centerMode,Se=d.slidesToScroll,Ae=d.slidesToShow,we=d.useCSS,Ee=d.lazyLoadedList;if(p&&b)return{};var be=W,Oe,We,_e,Ie={},Pe={},tt=D?W:w(W,0,K-1);if(U){if(!D&&(W<0||W>=K))return{};W<0?be=W+K:W>=K&&(be=W-K),te&&Ee.indexOf(be)<0&&(Ee=Ee.concat(be)),Ie={animating:!0,currentSlide:be,lazyLoadedList:Ee,targetSlide:be},Pe={animating:!1,targetSlide:be}}else Oe=be,be<0?(Oe=be+K,D?K%Se!==0&&(Oe=K-K%Se):Oe=0):!ne(d)&&be>ge?be=Oe=ge:de&&be>=K?(be=D?K:K-1,Oe=D?0:K-1):be>=K&&(Oe=be-K,D?K%Se!==0&&(Oe=0):Oe=K-Ae),!D&&be+Ae>=K&&(Oe=K-Ae),We=v(m(m({},d),{},{slideIndex:be})),_e=v(m(m({},d),{},{slideIndex:Oe})),D||(We===_e&&(be=Oe),We=_e),te&&(Ee=Ee.concat(X(m(m({},d),{},{currentSlide:be})))),we?(Ie={animating:!0,currentSlide:Oe,trackStyle:_(m(m({},d),{},{left:We})),lazyLoadedList:Ee,targetSlide:tt},Pe={animating:!1,currentSlide:Oe,trackStyle:k(m(m({},d),{},{left:_e})),swipeLeft:null,targetSlide:tt}):Ie={currentSlide:Oe,trackStyle:k(m(m({},d),{},{left:_e})),lazyLoadedList:Ee,targetSlide:tt};return{state:Ie,nextState:Pe}},re.changeSlide=function(d,p){var b,U,D,W,K,te=d.slidesToScroll,ge=d.slidesToShow,de=d.slideCount,Se=d.currentSlide,Ae=d.targetSlide,we=d.lazyLoad,Ee=d.infinite;if(W=de%te!==0,b=W?0:(de-Se)%te,p.message==="previous")D=b===0?te:ge-b,K=Se-D,we&&!Ee&&(U=Se-D,K=U===-1?de-1:U),Ee||(K=Ae-te);else if(p.message==="next")D=b===0?te:b,K=Se+D,we&&!Ee&&(K=(Se+te)%de+b),Ee||(K=Ae+te);else if(p.message==="dots")K=p.index*p.slidesToScroll;else if(p.message==="children"){if(K=p.index,Ee){var be=J(m(m({},d),{},{targetSlide:K}));K>p.currentSlide&&be==="left"?K=K-de:K<p.currentSlide&&be==="right"&&(K=K+de)}}else p.message==="index"&&(K=Number(p.index));return K},re.keyHandler=function(d,p,b){return d.target.tagName.match("TEXTAREA|INPUT|SELECT")||!p?"":d.keyCode===37?b?"next":"previous":d.keyCode===39?b?"previous":"next":""},re.swipeStart=function(d,p,b){return d.target.tagName==="IMG"&&q(d),!p||!b&&d.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:d.touches?d.touches[0].pageX:d.clientX,startY:d.touches?d.touches[0].pageY:d.clientY,curX:d.touches?d.touches[0].pageX:d.clientX,curY:d.touches?d.touches[0].pageY:d.clientY}}},re.swipeMove=function(d,p){var b=p.scrolling,U=p.animating,D=p.vertical,W=p.swipeToSlide,K=p.verticalSwiping,te=p.rtl,ge=p.currentSlide,de=p.edgeFriction,Se=p.edgeDragged,Ae=p.onEdge,we=p.swiped,Ee=p.swiping,be=p.slideCount,Oe=p.slidesToScroll,We=p.infinite,_e=p.touchObject,Ie=p.swipeEvent,Pe=p.listHeight,tt=p.listWidth;if(!b){if(U)return q(d);D&&W&&K&&q(d);var vt,mn={},Ra=v(p);_e.curX=d.touches?d.touches[0].pageX:d.clientX,_e.curY=d.touches?d.touches[0].pageY:d.clientY,_e.swipeLength=Math.round(Math.sqrt(Math.pow(_e.curX-_e.startX,2)));var Ot=Math.round(Math.sqrt(Math.pow(_e.curY-_e.startY,2)));if(!K&&!Ee&&Ot>10)return{scrolling:!0};K&&(_e.swipeLength=Ot);var fa=(te?-1:1)*(_e.curX>_e.startX?1:-1);K&&(fa=_e.curY>_e.startY?1:-1);var Nl=Math.ceil(be/Oe),nn=he(p.touchObject,K),cn=_e.swipeLength;return We||(ge===0&&(nn==="right"||nn==="down")||ge+1>=Nl&&(nn==="left"||nn==="up")||!ne(p)&&(nn==="left"||nn==="up"))&&(cn=_e.swipeLength*de,Se===!1&&Ae&&(Ae(nn),mn.edgeDragged=!0)),!we&&Ie&&(Ie(nn),mn.swiped=!0),D?vt=Ra+cn*(Pe/tt)*fa:te?vt=Ra-cn*fa:vt=Ra+cn*fa,K&&(vt=Ra+cn*fa),mn=m(m({},mn),{},{touchObject:_e,swipeLeft:vt,trackStyle:k(m(m({},p),{},{left:vt}))}),Math.abs(_e.curX-_e.startX)<Math.abs(_e.curY-_e.startY)*.8||_e.swipeLength>10&&(mn.swiping=!0,q(d)),mn}},re.swipeEnd=function(d,p){var b=p.dragging,U=p.swipe,D=p.touchObject,W=p.listWidth,K=p.touchThreshold,te=p.verticalSwiping,ge=p.listHeight,de=p.swipeToSlide,Se=p.scrolling,Ae=p.onSwipe,we=p.targetSlide,Ee=p.currentSlide,be=p.infinite;if(!b)return U&&q(d),{};var Oe=te?ge/K:W/K,We=he(D,te),_e={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!D.swipeLength)return _e;if(D.swipeLength>Oe){q(d),Ae&&Ae(We);var Ie,Pe,tt=be?Ee:we;switch(We){case"left":case"up":Pe=tt+O(p),Ie=de?z(p,Pe):Pe,_e.currentDirection=0;break;case"right":case"down":Pe=tt-O(p),Ie=de?z(p,Pe):Pe,_e.currentDirection=1;break;default:Ie=tt}_e.triggerSlideHandler=Ie}else{var vt=v(p);_e.trackStyle=_(m(m({},p),{},{left:vt}))}return _e};var se=re.getNavigableIndexes=function(d){for(var p=d.infinite?d.slideCount*2:d.slideCount,b=d.infinite?d.slidesToShow*-1:0,U=d.infinite?d.slidesToShow*-1:0,D=[];b<p;)D.push(b),b=U+d.slidesToScroll,U+=Math.min(d.slidesToScroll,d.slidesToShow);return D},z=re.checkNavigable=function(d,p){var b=se(d),U=0;if(p>b[b.length-1])p=b[b.length-1];else for(var D in b){if(p<b[D]){p=U;break}U=b[D]}return p},O=re.getSlideCount=function(d){var p=d.centerMode?d.slideWidth*Math.floor(d.slidesToShow/2):0;if(d.swipeToSlide){var b,U=d.listRef,D=U.querySelectorAll&&U.querySelectorAll(".slick-slide")||[];if(Array.from(D).every(function(te){if(d.vertical){if(te.offsetTop+oe(te)/2>d.swipeLeft*-1)return b=te,!1}else if(te.offsetLeft-p+ve(te)/2>d.swipeLeft*-1)return b=te,!1;return!0}),!b)return 0;var W=d.rtl===!0?d.slideCount-d.currentSlide:d.currentSlide,K=Math.abs(b.dataset.index-W)||1;return K}else return d.slidesToScroll},S=re.checkSpecKeys=function(d,p){return p.reduce(function(b,U){return b&&d.hasOwnProperty(U)},!0)?null:console.error("Keys Missing:",d)},k=re.getTrackCSS=function(d){S(d,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var p,b;if(!d.vertical)p=R(d)*d.slideWidth;else{var U=d.unslick?d.slideCount:d.slideCount+2*d.slidesToShow;b=U*d.slideHeight}var D={opacity:1,transition:"",WebkitTransition:""};if(d.useTransform){var W=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",K=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",te=d.vertical?"translateY("+d.left+"px)":"translateX("+d.left+"px)";D=m(m({},D),{},{WebkitTransform:W,transform:K,msTransform:te})}else d.vertical?D.top=d.left:D.left=d.left;return d.fade&&(D={opacity:1}),p&&(D.width=p),b&&(D.height=b),window&&!window.addEventListener&&window.attachEvent&&(d.vertical?D.marginTop=d.left+"px":D.marginLeft=d.left+"px"),D},_=re.getTrackAnimateCSS=function(d){S(d,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var p=k(d);return d.useTransform?(p.WebkitTransition="-webkit-transform "+d.speed+"ms "+d.cssEase,p.transition="transform "+d.speed+"ms "+d.cssEase):d.vertical?p.transition="top "+d.speed+"ms "+d.cssEase:p.transition="left "+d.speed+"ms "+d.cssEase,p},v=re.getTrackLeft=function(d){if(d.unslick)return 0;S(d,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var p=d.slideIndex,b=d.trackRef,U=d.infinite,D=d.centerMode,W=d.slideCount,K=d.slidesToShow,te=d.slidesToScroll,ge=d.slideWidth,de=d.listWidth,Se=d.variableWidth,Ae=d.slideHeight,we=d.fade,Ee=d.vertical,be=0,Oe,We,_e=0;if(we||d.slideCount===1)return 0;var Ie=0;if(U?(Ie=-B(d),W%te!==0&&p+te>W&&(Ie=-(p>W?K-(p-W):W%te)),D&&(Ie+=parseInt(K/2))):(W%te!==0&&p+te>W&&(Ie=K-W%te),D&&(Ie=parseInt(K/2))),be=Ie*ge,_e=Ie*Ae,Ee?Oe=p*Ae*-1+_e:Oe=p*ge*-1+be,Se===!0){var Pe,tt=b&&b.node;if(Pe=p+B(d),We=tt&&tt.childNodes[Pe],Oe=We?We.offsetLeft*-1:0,D===!0){Pe=U?p+B(d):p,We=tt&&tt.children[Pe],Oe=0;for(var vt=0;vt<Pe;vt++)Oe-=tt&&tt.children[vt]&&tt.children[vt].offsetWidth;Oe-=parseInt(d.centerPadding),Oe+=We&&(de-We.offsetWidth)/2}}return Oe},B=re.getPreClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},Z=re.getPostClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},R=re.getTotalSlides=function(d){return d.slideCount===1?1:B(d)+d.slideCount+Z(d)},J=re.siblingDirection=function(d){return d.targetSlide>d.currentSlide?d.targetSlide>d.currentSlide+ee(d)?"left":"right":d.targetSlide<d.currentSlide-A(d)?"right":"left"},ee=re.slidesOnRight=function(d){var p=d.slidesToShow,b=d.centerMode,U=d.rtl,D=d.centerPadding;if(b){var W=(p-1)/2+1;return parseInt(D)>0&&(W+=1),U&&p%2===0&&(W+=1),W}return U?0:p-1},A=re.slidesOnLeft=function(d){var p=d.slidesToShow,b=d.centerMode,U=d.rtl,D=d.centerPadding;if(b){var W=(p-1)/2+1;return parseInt(D)>0&&(W+=1),!U&&p%2===0&&(W+=1),W}return U?p-1:0};re.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var c=re.validSettings=Object.keys(o.default);function ie(T){return c.reduce(function(d,p){return T.hasOwnProperty(p)&&(d[p]=T[p]),d},{})}return re}var El={},tg;function GS(){if(tg)return El;tg=1,Object.defineProperty(El,"__esModule",{value:!0}),El.Track=void 0;var n=u(yn()),o=u(wo()),f=Rl();function u(_){return _&&_.__esModule?_:{default:_}}function g(_){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},g(_)}function m(){return m=Object.assign?Object.assign.bind():function(_){for(var v=1;v<arguments.length;v++){var B=arguments[v];for(var Z in B)({}).hasOwnProperty.call(B,Z)&&(_[Z]=B[Z])}return _},m.apply(null,arguments)}function C(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function V(_,v){for(var B=0;B<v.length;B++){var Z=v[B];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(_,ne(Z.key),Z)}}function Y(_,v,B){return v&&V(_.prototype,v),Object.defineProperty(_,"prototype",{writable:!1}),_}function w(_,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(v&&v.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),v&&q(_,v)}function q(_,v){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(B,Z){return B.__proto__=Z,B},q(_,v)}function X(_){var v=le();return function(){var B,Z=P(_);if(v){var R=P(this).constructor;B=Reflect.construct(Z,arguments,R)}else B=Z.apply(this,arguments);return ae(this,B)}}function ae(_,v){if(v&&(g(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(_)}function ue(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function le(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!_})()}function P(_){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},P(_)}function ve(_,v){var B=Object.keys(_);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(_);v&&(Z=Z.filter(function(R){return Object.getOwnPropertyDescriptor(_,R).enumerable})),B.push.apply(B,Z)}return B}function oe(_){for(var v=1;v<arguments.length;v++){var B=arguments[v]!=null?arguments[v]:{};v%2?ve(Object(B),!0).forEach(function(Z){he(_,Z,B[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(B)):ve(Object(B)).forEach(function(Z){Object.defineProperty(_,Z,Object.getOwnPropertyDescriptor(B,Z))})}return _}function he(_,v,B){return(v=ne(v))in _?Object.defineProperty(_,v,{value:B,enumerable:!0,configurable:!0,writable:!0}):_[v]=B,_}function ne(_){var v=se(_,"string");return g(v)=="symbol"?v:v+""}function se(_,v){if(g(_)!="object"||!_)return _;var B=_[Symbol.toPrimitive];if(B!==void 0){var Z=B.call(_,v);if(g(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(_)}var z=function(v){var B,Z,R,J,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,R=ee<0||ee>=v.slideCount,v.centerMode?(J=Math.floor(v.slidesToShow/2),Z=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-J-1&&ee<=v.currentSlide+J&&(B=!0)):B=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var A;v.targetSlide<0?A=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?A=v.targetSlide-v.slideCount:A=v.targetSlide;var c=ee===A;return{"slick-slide":!0,"slick-active":B,"slick-center":Z,"slick-cloned":R,"slick-current":c}},O=function(v){var B={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(B.width=v.slideWidth),v.fade&&(B.position="relative",v.vertical?B.top=-v.index*parseInt(v.slideHeight):B.left=-v.index*parseInt(v.slideWidth),B.opacity=v.currentSlide===v.index?1:0,B.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(B.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),B},S=function(v,B){return v.key||B},k=function(v){var B,Z=[],R=[],J=[],ee=n.default.Children.count(v.children),A=(0,f.lazyStartIndex)(v),c=(0,f.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ie,T){var d,p={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?d=ie:d=n.default.createElement("div",null);var b=O(oe(oe({},v),{},{index:T})),U=d.props.className||"",D=z(oe(oe({},v),{},{index:T}));if(Z.push(n.default.cloneElement(d,{key:"original"+S(d,T),"data-index":T,className:(0,o.default)(D,U),tabIndex:"-1","aria-hidden":!D["slick-active"],style:oe(oe({outline:"none"},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var W=ee-T;W<=(0,f.getPreClones)(v)&&(B=-W,B>=A&&(d=ie),D=z(oe(oe({},v),{},{index:B})),R.push(n.default.cloneElement(d,{key:"precloned"+S(d,B),"data-index":B,tabIndex:"-1",className:(0,o.default)(D,U),"aria-hidden":!D["slick-active"],style:oe(oe({},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}}))),T<(0,f.getPostClones)(v)&&(B=ee+T,B<c&&(d=ie),D=z(oe(oe({},v),{},{index:B})),J.push(n.default.cloneElement(d,{key:"postcloned"+S(d,B),"data-index":B,tabIndex:"-1",className:(0,o.default)(D,U),"aria-hidden":!D["slick-active"],style:oe(oe({},d.props.style||{}),b),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})))}}),v.rtl?R.concat(Z,J).reverse():R.concat(Z,J)};return El.Track=(function(_){w(B,_);var v=X(B);function B(){var Z;C(this,B);for(var R=arguments.length,J=new Array(R),ee=0;ee<R;ee++)J[ee]=arguments[ee];return Z=v.call.apply(v,[this].concat(J)),he(ue(Z),"node",null),he(ue(Z),"handleRef",function(A){Z.node=A}),Z}return Y(B,[{key:"render",value:function(){var R=k(this.props),J=this.props,ee=J.onMouseEnter,A=J.onMouseOver,c=J.onMouseLeave,ie={onMouseEnter:ee,onMouseOver:A,onMouseLeave:c};return n.default.createElement("div",m({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ie),R)}}]),B})(n.default.PureComponent),El}var _l={},ng;function YS(){if(ng)return _l;ng=1;function n(z){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},n(z)}Object.defineProperty(_l,"__esModule",{value:!0}),_l.Dots=void 0;var o=g(yn()),f=g(wo()),u=Rl();function g(z){return z&&z.__esModule?z:{default:z}}function m(z,O){var S=Object.keys(z);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(z);O&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(z,_).enumerable})),S.push.apply(S,k)}return S}function C(z){for(var O=1;O<arguments.length;O++){var S=arguments[O]!=null?arguments[O]:{};O%2?m(Object(S),!0).forEach(function(k){V(z,k,S[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(S)):m(Object(S)).forEach(function(k){Object.defineProperty(z,k,Object.getOwnPropertyDescriptor(S,k))})}return z}function V(z,O,S){return(O=X(O))in z?Object.defineProperty(z,O,{value:S,enumerable:!0,configurable:!0,writable:!0}):z[O]=S,z}function Y(z,O){if(!(z instanceof O))throw new TypeError("Cannot call a class as a function")}function w(z,O){for(var S=0;S<O.length;S++){var k=O[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(z,X(k.key),k)}}function q(z,O,S){return O&&w(z.prototype,O),Object.defineProperty(z,"prototype",{writable:!1}),z}function X(z){var O=ae(z,"string");return n(O)=="symbol"?O:O+""}function ae(z,O){if(n(z)!="object"||!z)return z;var S=z[Symbol.toPrimitive];if(S!==void 0){var k=S.call(z,O);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(z)}function ue(z,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(O&&O.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),O&&le(z,O)}function le(z,O){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,k){return S.__proto__=k,S},le(z,O)}function P(z){var O=he();return function(){var S,k=ne(z);if(O){var _=ne(this).constructor;S=Reflect.construct(k,arguments,_)}else S=k.apply(this,arguments);return ve(this,S)}}function ve(z,O){if(O&&(n(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oe(z)}function oe(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function he(){try{var z=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(he=function(){return!!z})()}function ne(z){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},ne(z)}var se=function(O){var S;return O.infinite?S=Math.ceil(O.slideCount/O.slidesToScroll):S=Math.ceil((O.slideCount-O.slidesToShow)/O.slidesToScroll)+1,S};return _l.Dots=(function(z){ue(S,z);var O=P(S);function S(){return Y(this,S),O.apply(this,arguments)}return q(S,[{key:"clickHandler",value:function(_,v){v.preventDefault(),this.props.clickHandler(_)}},{key:"render",value:function(){for(var _=this.props,v=_.onMouseEnter,B=_.onMouseOver,Z=_.onMouseLeave,R=_.infinite,J=_.slidesToScroll,ee=_.slidesToShow,A=_.slideCount,c=_.currentSlide,ie=se({slideCount:A,slidesToScroll:J,slidesToShow:ee,infinite:R}),T={onMouseEnter:v,onMouseOver:B,onMouseLeave:Z},d=[],p=0;p<ie;p++){var b=(p+1)*J-1,U=R?b:(0,u.clamp)(b,0,A-1),D=U-(J-1),W=R?D:(0,u.clamp)(D,0,A-1),K=(0,f.default)({"slick-active":R?c>=W&&c<=U:c===W}),te={message:"dots",index:p,slidesToScroll:J,currentSlide:c},ge=this.clickHandler.bind(this,te);d=d.concat(o.default.createElement("li",{key:p,className:K},o.default.cloneElement(this.props.customPaging(p),{onClick:ge})))}return o.default.cloneElement(this.props.appendDots(d),C({className:this.props.dotsClass},T))}}]),S})(o.default.PureComponent),_l}var ja={},ag;function XS(){if(ag)return ja;ag=1;function n(z){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},n(z)}Object.defineProperty(ja,"__esModule",{value:!0}),ja.PrevArrow=ja.NextArrow=void 0;var o=g(yn()),f=g(wo()),u=Rl();function g(z){return z&&z.__esModule?z:{default:z}}function m(){return m=Object.assign?Object.assign.bind():function(z){for(var O=1;O<arguments.length;O++){var S=arguments[O];for(var k in S)({}).hasOwnProperty.call(S,k)&&(z[k]=S[k])}return z},m.apply(null,arguments)}function C(z,O){var S=Object.keys(z);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(z);O&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(z,_).enumerable})),S.push.apply(S,k)}return S}function V(z){for(var O=1;O<arguments.length;O++){var S=arguments[O]!=null?arguments[O]:{};O%2?C(Object(S),!0).forEach(function(k){Y(z,k,S[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(S)):C(Object(S)).forEach(function(k){Object.defineProperty(z,k,Object.getOwnPropertyDescriptor(S,k))})}return z}function Y(z,O,S){return(O=ae(O))in z?Object.defineProperty(z,O,{value:S,enumerable:!0,configurable:!0,writable:!0}):z[O]=S,z}function w(z,O){if(!(z instanceof O))throw new TypeError("Cannot call a class as a function")}function q(z,O){for(var S=0;S<O.length;S++){var k=O[S];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(z,ae(k.key),k)}}function X(z,O,S){return O&&q(z.prototype,O),Object.defineProperty(z,"prototype",{writable:!1}),z}function ae(z){var O=ue(z,"string");return n(O)=="symbol"?O:O+""}function ue(z,O){if(n(z)!="object"||!z)return z;var S=z[Symbol.toPrimitive];if(S!==void 0){var k=S.call(z,O);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(z)}function le(z,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(O&&O.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),O&&P(z,O)}function P(z,O){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,k){return S.__proto__=k,S},P(z,O)}function ve(z){var O=ne();return function(){var S,k=se(z);if(O){var _=se(this).constructor;S=Reflect.construct(k,arguments,_)}else S=k.apply(this,arguments);return oe(this,S)}}function oe(z,O){if(O&&(n(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return he(z)}function he(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function ne(){try{var z=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!z})()}function se(z){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},se(z)}return ja.PrevArrow=(function(z){le(S,z);var O=ve(S);function S(){return w(this,S),O.apply(this,arguments)}return X(S,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(_["slick-disabled"]=!0,v=null);var B={key:"0","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.prevArrow?R=o.default.cloneElement(this.props.prevArrow,V(V({},B),Z)):R=o.default.createElement("button",m({key:"0",type:"button"},B)," ","Previous"),R}}]),S})(o.default.PureComponent),ja.NextArrow=(function(z){le(S,z);var O=ve(S);function S(){return w(this,S),O.apply(this,arguments)}return X(S,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,u.canGoNext)(this.props)||(_["slick-disabled"]=!0,v=null);var B={key:"1","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.nextArrow?R=o.default.cloneElement(this.props.nextArrow,V(V({},B),Z)):R=o.default.createElement("button",m({key:"1",type:"button"},B)," ","Next"),R}}]),S})(o.default.PureComponent),ja}var Wg=(function(){if(typeof Map<"u")return Map;function n(o,f){var u=-1;return o.some(function(g,m){return g[0]===f?(u=m,!0):!1}),u}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(f){var u=n(this.__entries__,f),g=this.__entries__[u];return g&&g[1]},o.prototype.set=function(f,u){var g=n(this.__entries__,f);~g?this.__entries__[g][1]=u:this.__entries__.push([f,u])},o.prototype.delete=function(f){var u=this.__entries__,g=n(u,f);~g&&u.splice(g,1)},o.prototype.has=function(f){return!!~n(this.__entries__,f)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(f,u){u===void 0&&(u=null);for(var g=0,m=this.__entries__;g<m.length;g++){var C=m[g];f.call(u,C[1],C[0])}},o})()})(),hc=typeof window<"u"&&typeof document<"u"&&window.document===document,ho=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),QS=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ho):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),VS=2;function ZS(n,o){var f=!1,u=!1,g=0;function m(){f&&(f=!1,n()),u&&V()}function C(){QS(m)}function V(){var Y=Date.now();if(f){if(Y-g<VS)return;u=!0}else f=!0,u=!1,setTimeout(C,o);g=Y}return V}var KS=20,JS=["top","right","bottom","left","width","height","size","weight"],WS=typeof MutationObserver<"u",IS=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ZS(this.refresh.bind(this),KS)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var f=this.observers_,u=f.indexOf(o);~u&&f.splice(u,1),!f.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(f){return f.gatherActive(),f.hasActive()});return o.forEach(function(f){return f.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!hc||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),WS?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!hc||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var f=o.propertyName,u=f===void 0?"":f,g=JS.some(function(m){return!!~u.indexOf(m)});g&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),Ig=(function(n,o){for(var f=0,u=Object.keys(o);f<u.length;f++){var g=u[f];Object.defineProperty(n,g,{value:o[g],enumerable:!1,writable:!1,configurable:!0})}return n}),Ei=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||ho}),Pg=zo(0,0,0,0);function go(n){return parseFloat(n)||0}function ig(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return o.reduce(function(u,g){var m=n["border-"+g+"-width"];return u+go(m)},0)}function PS(n){for(var o=["top","right","bottom","left"],f={},u=0,g=o;u<g.length;u++){var m=g[u],C=n["padding-"+m];f[m]=go(C)}return f}function FS(n){var o=n.getBBox();return zo(0,0,o.width,o.height)}function ex(n){var o=n.clientWidth,f=n.clientHeight;if(!o&&!f)return Pg;var u=Ei(n).getComputedStyle(n),g=PS(u),m=g.left+g.right,C=g.top+g.bottom,V=go(u.width),Y=go(u.height);if(u.boxSizing==="border-box"&&(Math.round(V+m)!==o&&(V-=ig(u,"left","right")+m),Math.round(Y+C)!==f&&(Y-=ig(u,"top","bottom")+C)),!nx(n)){var w=Math.round(V+m)-o,q=Math.round(Y+C)-f;Math.abs(w)!==1&&(V-=w),Math.abs(q)!==1&&(Y-=q)}return zo(g.left,g.top,V,Y)}var tx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Ei(n).SVGGraphicsElement}:function(n){return n instanceof Ei(n).SVGElement&&typeof n.getBBox=="function"}})();function nx(n){return n===Ei(n).document.documentElement}function ax(n){return hc?tx(n)?FS(n):ex(n):Pg}function ix(n){var o=n.x,f=n.y,u=n.width,g=n.height,m=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,C=Object.create(m.prototype);return Ig(C,{x:o,y:f,width:u,height:g,top:f,right:o+u,bottom:g+f,left:o}),C}function zo(n,o,f,u){return{x:n,y:o,width:f,height:u}}var lx=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=zo(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=ax(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),rx=(function(){function n(o,f){var u=ix(f);Ig(this,{target:o,contentRect:u})}return n})(),ox=(function(){function n(o,f,u){if(this.activeObservations_=[],this.observations_=new Wg,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=f,this.callbackCtx_=u}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Ei(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)||(f.set(o,new lx(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Ei(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)&&(f.delete(o),f.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(f){f.isActive()&&o.activeObservations_.push(f)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,f=this.activeObservations_.map(function(u){return new rx(u.target,u.broadcastRect())});this.callback_.call(o,f,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),Fg=typeof WeakMap<"u"?new WeakMap:new Wg,ey=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var f=IS.getInstance(),u=new ox(o,f,this);Fg.set(this,u)}return n})();["observe","unobserve","disconnect"].forEach(function(n){ey.prototype[n]=function(){var o;return(o=Fg.get(this))[n].apply(o,arguments)}});var sx=(function(){return typeof ho.ResizeObserver<"u"?ho.ResizeObserver:ey})();const ux=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),cx=z0(ux);var lg;function fx(){if(lg)return Al;lg=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.InnerSlider=void 0;var n=w(yn()),o=w(BS()),f=w(qS()),u=w(wo()),g=Rl(),m=GS(),C=YS(),V=XS(),Y=w(cx);function w(R){return R&&R.__esModule?R:{default:R}}function q(R){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(J){return typeof J}:function(J){return J&&typeof Symbol=="function"&&J.constructor===Symbol&&J!==Symbol.prototype?"symbol":typeof J},q(R)}function X(){return X=Object.assign?Object.assign.bind():function(R){for(var J=1;J<arguments.length;J++){var ee=arguments[J];for(var A in ee)({}).hasOwnProperty.call(ee,A)&&(R[A]=ee[A])}return R},X.apply(null,arguments)}function ae(R,J){if(R==null)return{};var ee,A,c=ue(R,J);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(A=0;A<ie.length;A++)ee=ie[A],J.includes(ee)||{}.propertyIsEnumerable.call(R,ee)&&(c[ee]=R[ee])}return c}function ue(R,J){if(R==null)return{};var ee={};for(var A in R)if({}.hasOwnProperty.call(R,A)){if(J.includes(A))continue;ee[A]=R[A]}return ee}function le(R,J){var ee=Object.keys(R);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(R);J&&(A=A.filter(function(c){return Object.getOwnPropertyDescriptor(R,c).enumerable})),ee.push.apply(ee,A)}return ee}function P(R){for(var J=1;J<arguments.length;J++){var ee=arguments[J]!=null?arguments[J]:{};J%2?le(Object(ee),!0).forEach(function(A){v(R,A,ee[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(ee)):le(Object(ee)).forEach(function(A){Object.defineProperty(R,A,Object.getOwnPropertyDescriptor(ee,A))})}return R}function ve(R,J){if(!(R instanceof J))throw new TypeError("Cannot call a class as a function")}function oe(R,J){for(var ee=0;ee<J.length;ee++){var A=J[ee];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(R,B(A.key),A)}}function he(R,J,ee){return J&&oe(R.prototype,J),Object.defineProperty(R,"prototype",{writable:!1}),R}function ne(R,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(J&&J.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),J&&se(R,J)}function se(R,J){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,A){return ee.__proto__=A,ee},se(R,J)}function z(R){var J=k();return function(){var ee,A=_(R);if(J){var c=_(this).constructor;ee=Reflect.construct(A,arguments,c)}else ee=A.apply(this,arguments);return O(this,ee)}}function O(R,J){if(J&&(q(J)=="object"||typeof J=="function"))return J;if(J!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(R)}function S(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function k(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!R})()}function _(R){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(J){return J.__proto__||Object.getPrototypeOf(J)},_(R)}function v(R,J,ee){return(J=B(J))in R?Object.defineProperty(R,J,{value:ee,enumerable:!0,configurable:!0,writable:!0}):R[J]=ee,R}function B(R){var J=Z(R,"string");return q(J)=="symbol"?J:J+""}function Z(R,J){if(q(R)!="object"||!R)return R;var ee=R[Symbol.toPrimitive];if(ee!==void 0){var A=ee.call(R,J);if(q(A)!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(J==="string"?String:Number)(R)}return Al.InnerSlider=(function(R){ne(ee,R);var J=z(ee);function ee(A){var c;ve(this,ee),c=J.call(this,A),v(S(c),"listRefHandler",function(T){return c.list=T}),v(S(c),"trackRefHandler",function(T){return c.track=T}),v(S(c),"adaptHeight",function(){if(c.props.adaptiveHeight&&c.list){var T=c.list.querySelector('[data-index="'.concat(c.state.currentSlide,'"]'));c.list.style.height=(0,g.getHeight)(T)+"px"}}),v(S(c),"componentDidMount",function(){if(c.props.onInit&&c.props.onInit(),c.props.lazyLoad){var T=(0,g.getOnDemandLazySlides)(P(P({},c.props),c.state));T.length>0&&(c.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(T)}}),c.props.onLazyLoad&&c.props.onLazyLoad(T))}var d=P({listRef:c.list,trackRef:c.track},c.props);c.updateState(d,!0,function(){c.adaptHeight(),c.props.autoplay&&c.autoPlay("update")}),c.props.lazyLoad==="progressive"&&(c.lazyLoadTimer=setInterval(c.progressiveLazyLoad,1e3)),c.ro=new Y.default(function(){c.state.animating?(c.onWindowResized(!1),c.callbackTimers.push(setTimeout(function(){return c.onWindowResized()},c.props.speed))):c.onWindowResized()}),c.ro.observe(c.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(p){p.onfocus=c.props.pauseOnFocus?c.onSlideFocus:null,p.onblur=c.props.pauseOnFocus?c.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",c.onWindowResized):window.attachEvent("onresize",c.onWindowResized)}),v(S(c),"componentWillUnmount",function(){c.animationEndCallback&&clearTimeout(c.animationEndCallback),c.lazyLoadTimer&&clearInterval(c.lazyLoadTimer),c.callbackTimers.length&&(c.callbackTimers.forEach(function(T){return clearTimeout(T)}),c.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",c.onWindowResized):window.detachEvent("onresize",c.onWindowResized),c.autoplayTimer&&clearInterval(c.autoplayTimer),c.ro.disconnect()}),v(S(c),"componentDidUpdate",function(T){if(c.checkImagesLoad(),c.props.onReInit&&c.props.onReInit(),c.props.lazyLoad){var d=(0,g.getOnDemandLazySlides)(P(P({},c.props),c.state));d.length>0&&(c.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(d)}}),c.props.onLazyLoad&&c.props.onLazyLoad(d))}c.adaptHeight();var p=P(P({listRef:c.list,trackRef:c.track},c.props),c.state),b=c.didPropsChange(T);b&&c.updateState(p,b,function(){c.state.currentSlide>=n.default.Children.count(c.props.children)&&c.changeSlide({message:"index",index:n.default.Children.count(c.props.children)-c.props.slidesToShow,currentSlide:c.state.currentSlide}),c.props.autoplay?c.autoPlay("update"):c.pause("paused")})}),v(S(c),"onWindowResized",function(T){c.debouncedResize&&c.debouncedResize.cancel(),c.debouncedResize=(0,f.default)(function(){return c.resizeWindow(T)},50),c.debouncedResize()}),v(S(c),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,d=!!(c.track&&c.track.node);if(d){var p=P(P({listRef:c.list,trackRef:c.track},c.props),c.state);c.updateState(p,T,function(){c.props.autoplay?c.autoPlay("update"):c.pause("paused")}),c.setState({animating:!1}),clearTimeout(c.animationEndCallback),delete c.animationEndCallback}}),v(S(c),"updateState",function(T,d,p){var b=(0,g.initializedState)(T);T=P(P(P({},T),b),{},{slideIndex:b.currentSlide});var U=(0,g.getTrackLeft)(T);T=P(P({},T),{},{left:U});var D=(0,g.getTrackCSS)(T);(d||n.default.Children.count(c.props.children)!==n.default.Children.count(T.children))&&(b.trackStyle=D),c.setState(b,p)}),v(S(c),"ssrInit",function(){if(c.props.variableWidth){var T=0,d=0,p=[],b=(0,g.getPreClones)(P(P(P({},c.props),c.state),{},{slideCount:c.props.children.length})),U=(0,g.getPostClones)(P(P(P({},c.props),c.state),{},{slideCount:c.props.children.length}));c.props.children.forEach(function(We){p.push(We.props.style.width),T+=We.props.style.width});for(var D=0;D<b;D++)d+=p[p.length-1-D],T+=p[p.length-1-D];for(var W=0;W<U;W++)T+=p[W];for(var K=0;K<c.state.currentSlide;K++)d+=p[K];var te={width:T+"px",left:-d+"px"};if(c.props.centerMode){var ge="".concat(p[c.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(ge,") / 2 ) ")}return{trackStyle:te}}var de=n.default.Children.count(c.props.children),Se=P(P(P({},c.props),c.state),{},{slideCount:de}),Ae=(0,g.getPreClones)(Se)+(0,g.getPostClones)(Se)+de,we=100/c.props.slidesToShow*Ae,Ee=100/Ae,be=-Ee*((0,g.getPreClones)(Se)+c.state.currentSlide)*we/100;c.props.centerMode&&(be+=(100-Ee*we/100)/2);var Oe={width:we+"%",left:be+"%"};return{slideWidth:Ee+"%",trackStyle:Oe}}),v(S(c),"checkImagesLoad",function(){var T=c.list&&c.list.querySelectorAll&&c.list.querySelectorAll(".slick-slide img")||[],d=T.length,p=0;Array.prototype.forEach.call(T,function(b){var U=function(){return++p&&p>=d&&c.onWindowResized()};if(!b.onclick)b.onclick=function(){return b.parentNode.focus()};else{var D=b.onclick;b.onclick=function(W){D(W),b.parentNode.focus()}}b.onload||(c.props.lazyLoad?b.onload=function(){c.adaptHeight(),c.callbackTimers.push(setTimeout(c.onWindowResized,c.props.speed))}:(b.onload=U,b.onerror=function(){U(),c.props.onLazyLoadError&&c.props.onLazyLoadError()}))})}),v(S(c),"progressiveLazyLoad",function(){for(var T=[],d=P(P({},c.props),c.state),p=c.state.currentSlide;p<c.state.slideCount+(0,g.getPostClones)(d);p++)if(c.state.lazyLoadedList.indexOf(p)<0){T.push(p);break}for(var b=c.state.currentSlide-1;b>=-(0,g.getPreClones)(d);b--)if(c.state.lazyLoadedList.indexOf(b)<0){T.push(b);break}T.length>0?(c.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(T)}}),c.props.onLazyLoad&&c.props.onLazyLoad(T)):c.lazyLoadTimer&&(clearInterval(c.lazyLoadTimer),delete c.lazyLoadTimer)}),v(S(c),"slideHandler",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=c.props,b=p.asNavFor,U=p.beforeChange,D=p.onLazyLoad,W=p.speed,K=p.afterChange,te=c.state.currentSlide,ge=(0,g.slideHandler)(P(P(P({index:T},c.props),c.state),{},{trackRef:c.track,useCSS:c.props.useCSS&&!d})),de=ge.state,Se=ge.nextState;if(de){U&&U(te,de.currentSlide);var Ae=de.lazyLoadedList.filter(function(we){return c.state.lazyLoadedList.indexOf(we)<0});D&&Ae.length>0&&D(Ae),!c.props.waitForAnimate&&c.animationEndCallback&&(clearTimeout(c.animationEndCallback),K&&K(te),delete c.animationEndCallback),c.setState(de,function(){b&&c.asNavForIndex!==T&&(c.asNavForIndex=T,b.innerSlider.slideHandler(T)),Se&&(c.animationEndCallback=setTimeout(function(){var we=Se.animating,Ee=ae(Se,["animating"]);c.setState(Ee,function(){c.callbackTimers.push(setTimeout(function(){return c.setState({animating:we})},10)),K&&K(de.currentSlide),delete c.animationEndCallback})},W))})}}),v(S(c),"changeSlide",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=P(P({},c.props),c.state),b=(0,g.changeSlide)(p,T);if(!(b!==0&&!b)&&(d===!0?c.slideHandler(b,d):c.slideHandler(b),c.props.autoplay&&c.autoPlay("update"),c.props.focusOnSelect)){var U=c.list.querySelectorAll(".slick-current");U[0]&&U[0].focus()}}),v(S(c),"clickHandler",function(T){c.clickable===!1&&(T.stopPropagation(),T.preventDefault()),c.clickable=!0}),v(S(c),"keyHandler",function(T){var d=(0,g.keyHandler)(T,c.props.accessibility,c.props.rtl);d!==""&&c.changeSlide({message:d})}),v(S(c),"selectHandler",function(T){c.changeSlide(T)}),v(S(c),"disableBodyScroll",function(){var T=function(p){p=p||window.event,p.preventDefault&&p.preventDefault(),p.returnValue=!1};window.ontouchmove=T}),v(S(c),"enableBodyScroll",function(){window.ontouchmove=null}),v(S(c),"swipeStart",function(T){c.props.verticalSwiping&&c.disableBodyScroll();var d=(0,g.swipeStart)(T,c.props.swipe,c.props.draggable);d!==""&&c.setState(d)}),v(S(c),"swipeMove",function(T){var d=(0,g.swipeMove)(T,P(P(P({},c.props),c.state),{},{trackRef:c.track,listRef:c.list,slideIndex:c.state.currentSlide}));d&&(d.swiping&&(c.clickable=!1),c.setState(d))}),v(S(c),"swipeEnd",function(T){var d=(0,g.swipeEnd)(T,P(P(P({},c.props),c.state),{},{trackRef:c.track,listRef:c.list,slideIndex:c.state.currentSlide}));if(d){var p=d.triggerSlideHandler;delete d.triggerSlideHandler,c.setState(d),p!==void 0&&(c.slideHandler(p),c.props.verticalSwiping&&c.enableBodyScroll())}}),v(S(c),"touchEnd",function(T){c.swipeEnd(T),c.clickable=!0}),v(S(c),"slickPrev",function(){c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"previous"})},0))}),v(S(c),"slickNext",function(){c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"next"})},0))}),v(S(c),"slickGoTo",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";c.callbackTimers.push(setTimeout(function(){return c.changeSlide({message:"index",index:T,currentSlide:c.state.currentSlide},d)},0))}),v(S(c),"play",function(){var T;if(c.props.rtl)T=c.state.currentSlide-c.props.slidesToScroll;else if((0,g.canGoNext)(P(P({},c.props),c.state)))T=c.state.currentSlide+c.props.slidesToScroll;else return!1;c.slideHandler(T)}),v(S(c),"autoPlay",function(T){c.autoplayTimer&&clearInterval(c.autoplayTimer);var d=c.state.autoplaying;if(T==="update"){if(d==="hovered"||d==="focused"||d==="paused")return}else if(T==="leave"){if(d==="paused"||d==="focused")return}else if(T==="blur"&&(d==="paused"||d==="hovered"))return;c.autoplayTimer=setInterval(c.play,c.props.autoplaySpeed+50),c.setState({autoplaying:"playing"})}),v(S(c),"pause",function(T){c.autoplayTimer&&(clearInterval(c.autoplayTimer),c.autoplayTimer=null);var d=c.state.autoplaying;T==="paused"?c.setState({autoplaying:"paused"}):T==="focused"?(d==="hovered"||d==="playing")&&c.setState({autoplaying:"focused"}):d==="playing"&&c.setState({autoplaying:"hovered"})}),v(S(c),"onDotsOver",function(){return c.props.autoplay&&c.pause("hovered")}),v(S(c),"onDotsLeave",function(){return c.props.autoplay&&c.state.autoplaying==="hovered"&&c.autoPlay("leave")}),v(S(c),"onTrackOver",function(){return c.props.autoplay&&c.pause("hovered")}),v(S(c),"onTrackLeave",function(){return c.props.autoplay&&c.state.autoplaying==="hovered"&&c.autoPlay("leave")}),v(S(c),"onSlideFocus",function(){return c.props.autoplay&&c.pause("focused")}),v(S(c),"onSlideBlur",function(){return c.props.autoplay&&c.state.autoplaying==="focused"&&c.autoPlay("blur")}),v(S(c),"render",function(){var T=(0,u.default)("slick-slider",c.props.className,{"slick-vertical":c.props.vertical,"slick-initialized":!0}),d=P(P({},c.props),c.state),p=(0,g.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),b=c.props.pauseOnHover;p=P(P({},p),{},{onMouseEnter:b?c.onTrackOver:null,onMouseLeave:b?c.onTrackLeave:null,onMouseOver:b?c.onTrackOver:null,focusOnSelect:c.props.focusOnSelect&&c.clickable?c.selectHandler:null});var U;if(c.props.dots===!0&&c.state.slideCount>=c.props.slidesToShow){var D=(0,g.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),W=c.props.pauseOnDotsHover;D=P(P({},D),{},{clickHandler:c.changeSlide,onMouseEnter:W?c.onDotsLeave:null,onMouseOver:W?c.onDotsOver:null,onMouseLeave:W?c.onDotsLeave:null}),U=n.default.createElement(C.Dots,D)}var K,te,ge=(0,g.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);ge.clickHandler=c.changeSlide,c.props.arrows&&(K=n.default.createElement(V.PrevArrow,ge),te=n.default.createElement(V.NextArrow,ge));var de=null;c.props.vertical&&(de={height:c.state.listHeight});var Se=null;c.props.vertical===!1?c.props.centerMode===!0&&(Se={padding:"0px "+c.props.centerPadding}):c.props.centerMode===!0&&(Se={padding:c.props.centerPadding+" 0px"});var Ae=P(P({},de),Se),we=c.props.touchMove,Ee={className:"slick-list",style:Ae,onClick:c.clickHandler,onMouseDown:we?c.swipeStart:null,onMouseMove:c.state.dragging&&we?c.swipeMove:null,onMouseUp:we?c.swipeEnd:null,onMouseLeave:c.state.dragging&&we?c.swipeEnd:null,onTouchStart:we?c.swipeStart:null,onTouchMove:c.state.dragging&&we?c.swipeMove:null,onTouchEnd:we?c.touchEnd:null,onTouchCancel:c.state.dragging&&we?c.swipeEnd:null,onKeyDown:c.props.accessibility?c.keyHandler:null},be={className:T,dir:"ltr",style:c.props.style};return c.props.unslick&&(Ee={className:"slick-list"},be={className:T,style:c.props.style}),n.default.createElement("div",be,c.props.unslick?"":K,n.default.createElement("div",X({ref:c.listRefHandler},Ee),n.default.createElement(m.Track,X({ref:c.trackRefHandler},p),c.props.children)),c.props.unslick?"":te,c.props.unslick?"":U)}),c.list=null,c.track=null,c.state=P(P({},o.default),{},{currentSlide:c.props.initialSlide,targetSlide:c.props.initialSlide?c.props.initialSlide:0,slideCount:n.default.Children.count(c.props.children)}),c.callbackTimers=[],c.clickable=!0,c.debouncedResize=null;var ie=c.ssrInit();return c.state=P(P({},c.state),ie),c}return he(ee,[{key:"didPropsChange",value:function(c){for(var ie=!1,T=0,d=Object.keys(this.props);T<d.length;T++){var p=d[T];if(!c.hasOwnProperty(p)){ie=!0;break}if(!(q(c[p])==="object"||typeof c[p]=="function"||isNaN(c[p]))&&c[p]!==this.props[p]){ie=!0;break}}return ie||n.default.Children.count(this.props.children)!==n.default.Children.count(c.children)}}]),ee})(n.default.Component),Al}var Fu,rg;function dx(){if(rg)return Fu;rg=1;var n=function(o){return o.replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase()}).toLowerCase()};return Fu=n,Fu}var ec,og;function px(){if(og)return ec;og=1;var n=dx(),o=function(g){var m=/[height|width]$/;return m.test(g)},f=function(g){var m="",C=Object.keys(g);return C.forEach(function(V,Y){var w=g[V];V=n(V),o(V)&&typeof w=="number"&&(w=w+"px"),w===!0?m+=V:w===!1?m+="not "+V:m+="("+V+": "+w+")",Y<C.length-1&&(m+=" and ")}),m},u=function(g){var m="";return typeof g=="string"?g:g instanceof Array?(g.forEach(function(C,V){m+=f(C),V<g.length-1&&(m+=", ")}),m):f(g)};return ec=u,ec}var sg;function hx(){return sg||(sg=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=C(yn()),f=fx(),u=C(px()),g=C(Jg()),m=Rl();function C(k){return k&&k.__esModule?k:{default:k}}function V(k){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},V(k)}function Y(){return Y=Object.assign?Object.assign.bind():function(k){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var B in v)({}).hasOwnProperty.call(v,B)&&(k[B]=v[B])}return k},Y.apply(null,arguments)}function w(k,_){var v=Object.keys(k);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(k);_&&(B=B.filter(function(Z){return Object.getOwnPropertyDescriptor(k,Z).enumerable})),v.push.apply(v,B)}return v}function q(k){for(var _=1;_<arguments.length;_++){var v=arguments[_]!=null?arguments[_]:{};_%2?w(Object(v),!0).forEach(function(B){z(k,B,v[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(v)):w(Object(v)).forEach(function(B){Object.defineProperty(k,B,Object.getOwnPropertyDescriptor(v,B))})}return k}function X(k,_){if(!(k instanceof _))throw new TypeError("Cannot call a class as a function")}function ae(k,_){for(var v=0;v<_.length;v++){var B=_[v];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(k,O(B.key),B)}}function ue(k,_,v){return _&&ae(k.prototype,_),Object.defineProperty(k,"prototype",{writable:!1}),k}function le(k,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(_&&_.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),_&&P(k,_)}function P(k,_){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,B){return v.__proto__=B,v},P(k,_)}function ve(k){var _=ne();return function(){var v,B=se(k);if(_){var Z=se(this).constructor;v=Reflect.construct(B,arguments,Z)}else v=B.apply(this,arguments);return oe(this,v)}}function oe(k,_){if(_&&(V(_)=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return he(k)}function he(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function ne(){try{var k=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!k})()}function se(k){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},se(k)}function z(k,_,v){return(_=O(_))in k?Object.defineProperty(k,_,{value:v,enumerable:!0,configurable:!0,writable:!0}):k[_]=v,k}function O(k){var _=S(k,"string");return V(_)=="symbol"?_:_+""}function S(k,_){if(V(k)!="object"||!k)return k;var v=k[Symbol.toPrimitive];if(v!==void 0){var B=v.call(k,_);if(V(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(k)}n.default=(function(k){le(v,k);var _=ve(v);function v(B){var Z;return X(this,v),Z=_.call(this,B),z(he(Z),"innerSliderRefHandler",function(R){return Z.innerSlider=R}),z(he(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),z(he(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),z(he(Z),"slickGoTo",function(R){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(R,J)}),z(he(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),z(he(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return ue(v,[{key:"media",value:function(Z,R){var J=window.matchMedia(Z),ee=function(c){var ie=c.matches;ie&&R()};J.addListener(ee),this._responsiveMediaHandlers.push({mql:J,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var R=this.props.responsive.map(function(ee){return ee.breakpoint});R.sort(function(ee,A){return ee-A}),R.forEach(function(ee,A){var c;A===0?c=(0,u.default)({minWidth:0,maxWidth:ee}):c=(0,u.default)({minWidth:R[A-1]+1,maxWidth:ee}),(0,m.canUseDOM)()&&Z.media(c,function(){Z.setState({breakpoint:ee})})});var J=(0,u.default)({minWidth:R.slice(-1)[0]});(0,m.canUseDOM)()&&this.media(J,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,R,J;this.state.breakpoint?(J=this.props.responsive.filter(function(D){return D.breakpoint===Z.state.breakpoint}),R=J[0].settings==="unslick"?"unslick":q(q(q({},g.default),this.props),J[0].settings)):R=q(q({},g.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(D){return typeof D=="string"?!!D.trim():!!D}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var A=[],c=null,ie=0;ie<ee.length;ie+=R.rows*R.slidesPerRow){for(var T=[],d=ie;d<ie+R.rows*R.slidesPerRow;d+=R.slidesPerRow){for(var p=[],b=d;b<d+R.slidesPerRow&&(R.variableWidth&&ee[b].props.style&&(c=ee[b].props.style.width),!(b>=ee.length));b+=1)p.push(o.default.cloneElement(ee[b],{key:100*ie+10*d+b,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ie+d},p))}R.variableWidth?A.push(o.default.createElement("div",{key:ie,style:{width:c}},T)):A.push(o.default.createElement("div",{key:ie},T))}if(R==="unslick"){var U="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:U},ee)}else A.length<=R.slidesToShow&&(R.unslick=!0);return o.default.createElement(f.InnerSlider,Y({style:this.props.style,ref:this.innerSliderRefHandler},(0,m.filterSettings)(R)),A)}}]),v})(o.default.Component)})(Ku)),Ku}var ug;function gx(){return ug||(ug=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(hx());function f(u){return u&&u.__esModule?u:{default:u}}n.default=o.default})(Zu)),Zu}var yx=gx();const ty=gc(yx),yt="/assets",mx=E.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,eo=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,vx=E.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,bx=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sx=E.button`
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
`,xx=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,wx=E.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,zx=E.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Ox=E.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Tx=E.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,$x=E.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,tc=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,nc=E.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${j.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,ac=E.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Ax=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ex=E.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${j.motion.iconLift}) scale(${j.motion.scaleHover});
  }
`,_x=E.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,jx=E.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,Mx=E.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,Cx=E.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${j.effects.carouselBackground};
  overflow: hidden;
`,kx=E.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.carouselBackdrop};
`,Dx=E.div`
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
`,Rx=E(ty)`
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
`,Nx=E.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${j.effects.carouselCardShadow};
`,Hx=E.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Ux=E.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${j.effects.carouselCaptionMuted};
`,Lx=E.button`
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
`,cg=({className:n,style:o,onClick:f,direction:u,ariaLabel:g})=>y.jsx(Lx,{className:n,style:o,onClick:f,"aria-label":g,children:u==="next"?y.jsx(zc,{size:18}):y.jsx(Mi,{size:18})}),Bx=E.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,qx=E.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${j.effects.compositionGradient};
  padding: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.card};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[12]};
  }
`,Gx=E.img`
  width: 100%;
  height: auto;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,Yx=E.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Xx=E.div`
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
`,Qx=E.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Vx=E.button`
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
`,Zx=[`${yt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${yt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${yt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${yt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${yt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${yt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${yt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${yt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${yt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],Kx=[`${yt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${yt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],Jx=({onBack:n})=>{const{t:o}=un(),f=()=>{if(n){n();return}window.location.hash="#work"},u=qe.useMemo(()=>new Date().getFullYear(),[]),g=qe.useMemo(()=>({centerMode:!0,centerPadding:j.carousel.centerPaddingLg,infinite:!0,slidesToShow:j.carousel.slidesToShowLg,speed:j.carousel.speed,autoplay:!0,autoplaySpeed:j.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:y.jsx(cg,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:y.jsx(cg,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:j.carousel.breakpointLg,settings:{slidesToShow:j.carousel.slidesToShowMd,centerPadding:j.carousel.centerPaddingMd}},{breakpoint:j.carousel.breakpointSm,settings:{slidesToShow:j.carousel.slidesToShowSm,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:j.carousel.breakpointXs,settings:{slidesToShow:j.carousel.slidesToShowSm,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return y.jsxs(mx,{children:[y.jsx(vx,{children:y.jsxs(bx,{children:[y.jsxs(Sx,{onClick:f,"aria-label":o.appIcons.backToPortfolioAria,children:[y.jsx(Mi,{size:18}),o.appIcons.backToPortfolio]}),y.jsx(xx,{children:o.work.categories.brandDesign})]})}),y.jsx(wx,{children:y.jsxs(eo,{children:[y.jsx(zx,{children:o.appIcons.eyebrow}),y.jsxs(Ox,{children:[o.appIcons.titlePrimary," ",y.jsx("em",{children:o.appIcons.titleEmphasis})]}),y.jsx(Tx,{children:o.appIcons.lead})]})}),y.jsx($x,{children:y.jsxs(eo,{children:[y.jsxs(tc,{children:[y.jsx(nc,{}),y.jsx(ac,{children:o.appIcons.appIconsTitle})]}),y.jsx(Ax,{children:Zx.map((m,C)=>y.jsxs(Ex,{children:[y.jsx(_x,{children:y.jsx(jx,{src:m,alt:o.appIcons.iconLabels[C]})}),y.jsx(Mx,{children:o.appIcons.iconLabels[C]})]},m))})]})}),y.jsxs(Cx,{children:[y.jsx(kx,{}),y.jsx(eo,{style:{position:"relative",zIndex:1},children:y.jsxs(tc,{children:[y.jsx(nc,{$light:!0}),y.jsx(ac,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),y.jsx(Dx,{children:y.jsx(Rx,{...g,children:Kx.map((m,C)=>y.jsxs("div",{children:[y.jsx(Nx,{className:"carousel-card",children:y.jsx(Hx,{src:m,alt:o.appIcons.splashLabels[C],loading:"lazy"})}),y.jsx(Ux,{className:"carousel-caption",children:o.appIcons.splashLabels[C]})]},m))})})]}),y.jsx(Bx,{children:y.jsxs(eo,{children:[y.jsxs(tc,{children:[y.jsx(nc,{}),y.jsx(ac,{children:o.appIcons.fullCompositionTitle})]}),y.jsx(qx,{children:y.jsx(Gx,{src:`${yt}/images/brand/app-icons-splash-screens/full-composition.png`,alt:o.appIcons.fullCompositionAlt})})]})}),y.jsx(Yx,{children:y.jsxs(Xx,{children:[y.jsxs(Qx,{children:["© ",u," ",fo,". ",o.appIcons.footerRights]}),y.jsxs(Vx,{onClick:f,children:[o.appIcons.viewMoreProjects,y.jsx(zc,{size:16})]})]})})]})},Wx=E.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Ix=E.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,Px=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Fx=E.button`
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
`,e2=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,t2=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,n2=E.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,a2=E.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,i2=E.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,l2=E.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,r2=E.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,o2=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,s2=E.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,u2=E.div`
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
`,c2=E.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,f2=E.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,d2=n=>n.includes(" ")?encodeURI(n):n,p2=({onBack:n})=>{const{t:o}=un(),f=po.find(g=>g.id===17),u=qe.useMemo(()=>{const g=(f==null?void 0:f.gallery)??[],m=[],C=new Map;return g.forEach(V=>{const ae=decodeURIComponent(V.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";C.has(ae)?m[C.get(ae)].items.push(V):(C.set(ae,m.length),m.push({name:ae,items:[V]}))}),m},[f==null?void 0:f.gallery]);return y.jsxs(Wx,{children:[y.jsx(Ix,{children:y.jsxs(Px,{children:[y.jsxs(Fx,{onClick:n,children:[y.jsx(Mi,{size:18}),o.appStoreScreenshots.backToPortfolio]}),y.jsx(e2,{children:o.appStoreScreenshots.headerTag})]})}),y.jsxs(n2,{children:[y.jsx(a2,{children:o.appStoreScreenshots.eyebrow}),y.jsx(i2,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&y.jsx(l2,{children:o.appStoreScreenshots.lead})]}),y.jsx(r2,{children:y.jsx(t2,{children:u.map(g=>y.jsxs(o2,{children:[y.jsx(s2,{children:g.name}),y.jsx(u2,{children:g.items.map((m,C)=>y.jsx(c2,{children:y.jsx(f2,{src:d2(m),alt:`${g.name} ${C+1}`,loading:"lazy"})},`${g.name}-${C}`))})]},g.name))})})]})},h2=E.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,g2=E.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,y2=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m2=E.button`
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
`,v2=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,b2=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,S2=E.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,x2=E.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,w2=E.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,z2=E.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,O2=E.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${j.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,T2=E.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,$2=n=>n.includes(" ")?encodeURI(n):n,A2=({onBack:n})=>{const{t:o}=un();return y.jsxs(h2,{children:[y.jsx(g2,{children:y.jsxs(y2,{children:[y.jsxs(m2,{onClick:n,children:[y.jsx(Mi,{size:18}),o.namelaca.backToPortfolio]}),y.jsx(v2,{children:o.namelaca.headerTag})]})}),y.jsxs(S2,{children:[y.jsx(x2,{children:o.namelaca.eyebrow}),y.jsx(w2,{children:o.namelaca.title})]}),y.jsx(z2,{children:y.jsx(b2,{children:y.jsx(O2,{children:y.jsx(T2,{src:$2("/assets/images/brand/Namelaca icons and illustration/Namelaca.png"),alt:o.namelaca.title})})})})]})},ny="/assets",E2=`${ny}/video/Mindzy – Brain Training`,_2=`${ny}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,j2=E.section`
  min-height: ${j.layout.fullViewportHeight};
  background: ${j.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,fg=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,M2=E.header`
  position: sticky;
  top: 0;
  z-index: ${j.zIndex.stickyHeader};
  background: ${j.effects.glassWhite70};
  backdrop-filter: blur(${j.effects.blurStrong});
  border-bottom: ${j.sizing.hairline} solid ${j.effects.overlayWhite40};
`,C2=E.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,k2=E.button`
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
`,D2=E.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,R2=E.section`
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
`,N2=E.div`
  position: relative;
  z-index: ${j.zIndex.foreground};
`,H2=E.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,U2=E.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,L2=E.p`
  max-width: ${j.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,B2=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,q2=E.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${j.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,G2=E.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,Y2=E.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${j.effects.carouselBackground};
  overflow: hidden;
`,X2=E.div`
  position: absolute;
  inset: 0;
  background: ${j.effects.carouselBackdrop};
`,Q2=E.div`
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
`,V2=E(ty)`
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
`,Z2=E.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
`,K2=E.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0);
`,J2=E.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${j.effects.carouselCaptionMuted};
`,W2=E.button`
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
`,dg=({className:n,style:o,onClick:f,direction:u,ariaLabel:g})=>y.jsx(W2,{className:n,style:o,onClick:f,"aria-label":g,children:u==="next"?y.jsx(zc,{size:18}):y.jsx(Mi,{size:18})}),pg=n=>n.includes(" ")?encodeURI(n):n,I2=["Air Traffic.MP4","Catch the bug.MP4","Color count.MP4","Linking Pairs.MP4","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],P2=({onBack:n})=>{const{t:o}=un(),f=()=>{if(n){n();return}window.location.hash="#work"},u=qe.useMemo(()=>I2.map(m=>`${E2}/${m}`),[]),g=qe.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:j.carousel.speed,autoplay:!0,autoplaySpeed:j.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:y.jsx(dg,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:y.jsx(dg,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:j.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:j.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:j.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:j.carousel.slidesToScrollSm,centerPadding:j.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return y.jsxs(j2,{children:[y.jsx(M2,{children:y.jsxs(C2,{children:[y.jsxs(k2,{onClick:f,children:[y.jsx(Mi,{size:18}),o.mindzy.backToPortfolio]}),y.jsx(D2,{children:o.work.categories.uiuxDesign})]})}),y.jsx(R2,{$coverUrl:pg(_2),children:y.jsx(fg,{children:y.jsxs(N2,{children:[y.jsx(H2,{children:o.mindzy.eyebrow}),y.jsx(U2,{children:o.mindzy.title}),o.mindzy.lead&&y.jsx(L2,{children:o.mindzy.lead})]})})}),y.jsxs(Y2,{children:[y.jsx(X2,{}),y.jsx(fg,{children:y.jsxs(B2,{children:[y.jsx(q2,{}),y.jsx(G2,{children:o.mindzy.videoTitle})]})}),y.jsx(Q2,{children:y.jsx(V2,{...g,children:u.map(m=>{var C;return y.jsxs("div",{children:[y.jsx(Z2,{className:"carousel-card",children:y.jsx(K2,{src:pg(m),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})}),y.jsx(J2,{className:"carousel-caption",children:(C=m.split("/").pop())==null?void 0:C.replace(".MP4","")})]},m)})})})]})]})},F2=E.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${j.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${j.zIndex.progress};
  transition: width 0.1s ease;
`,ew=()=>{const[n,o]=qe.useState(0);return qe.useEffect(()=>{const f=()=>{const u=document.body.scrollTop||document.documentElement.scrollTop,g=document.documentElement.scrollHeight-document.documentElement.clientHeight,m=g>0?u/g*100:0;o(m)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),y.jsx(F2,{$width:n})},tw=ji`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,nw=E.div`
  min-height: ${j.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,aw=E.div`
  position: fixed;
  inset: 0;
  z-index: ${j.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,ic=E.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${j.effects.blurBlob});
  opacity: ${j.effects.blobOpacity};
  animation: ${tw} 3s ease-in-out infinite;

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
`,iw=E.div`
  position: relative;
  z-index: ${j.zIndex.foreground};
`,lw=E.div`
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
`,hg=E.button`
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
`,rw=()=>{const{lang:n,setLang:o,t:f}=un();return y.jsxs(lw,{children:[y.jsx(hg,{$active:n==="en",onClick:()=>o("en"),title:f.languageSwitch.enTitle,children:f.languageSwitch.enShort}),y.jsx(hg,{$active:n==="uk",onClick:()=>o("uk"),title:f.languageSwitch.ukTitle,children:f.languageSwitch.ukShort})]})};function ow(){const[n,o]=qe.useState(ft.PORTFOLIO),[f,u]=qe.useState(en.HERO),g="app-icons",m="app-store-screenshots",C="namelaca",V="mindzy";qe.useEffect(()=>{const q=()=>{if(!window.location.hash)return;const X=window.location.hash.replace("#","");if(X===g){o(ft.APP_ICONS);return}if(X===m){o(ft.APP_STORE_SCREENSHOTS);return}if(X===C){o(ft.NAMELACA);return}if(X===V){o(ft.MINDZY);return}const ae=X,ue=document.getElementById(ae);ue&&(o(ft.PORTFOLIO),u(ae),ue.scrollIntoView({behavior:"smooth",block:"start"}))};return q(),window.addEventListener("hashchange",q),()=>window.removeEventListener("hashchange",q)},[]),qe.useEffect(()=>{if(n!==ft.PORTFOLIO)return;const q=document.getElementById(f);q&&q.scrollIntoView({behavior:"smooth",block:"start"})},[n,f]),qe.useEffect(()=>{(n===ft.APP_ICONS||n===ft.APP_STORE_SCREENSHOTS||n===ft.NAMELACA||n===ft.MINDZY)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const Y=q=>{o(ft.PORTFOLIO),u(q),window.history.pushState(null,"",`#${q}`);const X=document.getElementById(q);X&&X.scrollIntoView({behavior:"smooth",block:"start"})},w=()=>{o(ft.PORTFOLIO),u(en.WORK),window.history.pushState(null,"",`#${en.WORK}`);const q=document.getElementById(en.WORK);q&&q.scrollIntoView({behavior:"smooth",block:"start"})};return y.jsxs(nw,{children:[y.jsxs(aw,{children:[y.jsx(ic,{$position:"top-left"}),y.jsx(ic,{$position:"top-right"}),y.jsx(ic,{$position:"bottom-left"})]}),y.jsxs(iw,{children:[y.jsx(ew,{}),n===ft.PORTFOLIO&&y.jsxs(y.Fragment,{children:[y.jsx(rw,{}),y.jsx(Gb,{onNavigate:Y})]}),n===ft.PORTFOLIO?y.jsxs(y.Fragment,{children:[y.jsxs("main",{children:[y.jsx(i1,{}),y.jsx(iS,{}),y.jsx(MS,{})]}),y.jsx(LS,{})]}):n===ft.APP_ICONS?y.jsx(Jx,{onBack:w}):n===ft.APP_STORE_SCREENSHOTS?y.jsx(p2,{onBack:w}):n===ft.NAMELACA?y.jsx(A2,{onBack:w}):y.jsx(P2,{onBack:w})]})]})}function sw(){return y.jsx(Tb,{children:y.jsx(ow,{})})}const uw=Nv`
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
`,cw={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},fw={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},dw={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},pw={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},hw={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},gw={container:"1280px"},yw={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},mw={colors:cw,spacing:fw,radii:dw,shadows:pw,typography:hw,layout:gw,breakpoints:yw},ay=document.getElementById("root");if(!ay)throw new Error("Could not find root element to mount to");const vw=D0.createRoot(ay);vw.render(y.jsx(pt.StrictMode,{children:y.jsxs(kv,{theme:mw,children:[y.jsx(uw,{}),y.jsx(sw,{})]})}));
