(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const D of b.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&s(D)}).observe(document,{childList:!0,subtree:!0});function f(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(m){if(m.ep)return;m.ep=!0;const b=f(m);fetch(m.href,b)}})();var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function D0(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var f=function s(){return this instanceof s?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};f.prototype=o.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var m=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(f,s,m.get?m:{enumerable:!0,get:function(){return n[s]}})}),f}var Uc={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function R0(){if(Tg)return zl;Tg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,m,b){var D=null;if(b!==void 0&&(D=""+b),m.key!==void 0&&(D=""+m.key),"key"in m){b={};for(var q in m)q!=="key"&&(b[q]=m[q])}else b=m;return m=b.ref,{$$typeof:n,type:s,key:D,ref:m!==void 0?m:null,props:b}}return zl.Fragment=o,zl.jsx=f,zl.jsxs=f,zl}var Og;function H0(){return Og||(Og=1,Uc.exports=R0()),Uc.exports}var h=H0(),Bc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function N0(){if(Ag)return xe;Ag=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),D=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),ie=Symbol.iterator;function re(p){return p===null||typeof p!="object"?null:(p=ie&&p[ie]||p["@@iterator"],typeof p=="function"?p:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,ve={};function ue(p,S,U){this.props=p,this.context=S,this.refs=ve,this.updater=U||le}ue.prototype.isReactComponent={},ue.prototype.setState=function(p,S){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,S,"setState")},ue.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function ge(){}ge.prototype=ue.prototype;function ne(p,S,U){this.props=p,this.context=S,this.refs=ve,this.updater=U||le}var ce=ne.prototype=new ge;ce.constructor=ne,X(ce,ue.prototype),ce.isPureReactComponent=!0;var w=Array.isArray;function z(){}var x={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function _(p,S,U){var R=U.ref;return{$$typeof:n,type:p,key:S,ref:R!==void 0?R:null,props:U}}function v(p,S){return _(p.type,S,p.props)}function G(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function V(p){var S={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return S[U]})}var H=/\/+/g;function J(p,S){return typeof p=="object"&&p!==null&&p.key!=null?V(""+p.key):S.toString(36)}function ee(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(z,z):(p.status="pending",p.then(function(S){p.status==="pending"&&(p.status="fulfilled",p.value=S)},function(S){p.status==="pending"&&(p.status="rejected",p.reason=S)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function A(p,S,U,R,W){var K=typeof p;(K==="undefined"||K==="boolean")&&(p=null);var te=!1;if(p===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(p.$$typeof){case n:case o:te=!0;break;case Z:return te=p._init,A(te(p._payload),S,U,R,W)}}if(te)return W=W(p),te=R===""?"."+J(p,0):R,w(W)?(U="",te!=null&&(U=te.replace(H,"$&/")+"/"),A(W,S,U,"",function(Se){return Se})):W!=null&&(G(W)&&(W=v(W,U+(W.key==null||p&&p.key===W.key?"":(""+W.key).replace(H,"$&/")+"/")+te)),S.push(W)),1;te=0;var he=R===""?".":R+":";if(w(p))for(var de=0;de<p.length;de++)R=p[de],K=he+J(R,de),te+=A(R,S,U,K,W);else if(de=re(p),typeof de=="function")for(p=de.call(p),de=0;!(R=p.next()).done;)R=R.value,K=he+J(R,de++),te+=A(R,S,U,K,W);else if(K==="object"){if(typeof p.then=="function")return A(ee(p),S,U,R,W);throw S=String(p),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return te}function u(p,S,U){if(p==null)return p;var R=[],W=0;return A(p,R,"","",function(K){return S.call(U,K,W++)}),R}function ae(p){if(p._status===-1){var S=p._result;S=S(),S.then(function(U){(p._status===0||p._status===-1)&&(p._status=1,p._result=U)},function(U){(p._status===0||p._status===-1)&&(p._status=2,p._result=U)}),p._status===-1&&(p._status=0,p._result=S)}if(p._status===1)return p._result.default;throw p._result}var T=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},d={map:u,forEach:function(p,S,U){u(p,function(){S.apply(this,arguments)},U)},count:function(p){var S=0;return u(p,function(){S++}),S},toArray:function(p){return u(p,function(S){return S})||[]},only:function(p){if(!G(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return xe.Activity=P,xe.Children=d,xe.Component=ue,xe.Fragment=f,xe.Profiler=m,xe.PureComponent=ne,xe.StrictMode=s,xe.Suspense=C,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,xe.__COMPILER_RUNTIME={__proto__:null,c:function(p){return x.H.useMemoCache(p)}},xe.cache=function(p){return function(){return p.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(p,S,U){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var R=X({},p.props),W=p.key;if(S!=null)for(K in S.key!==void 0&&(W=""+S.key),S)!k.call(S,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&S.ref===void 0||(R[K]=S[K]);var K=arguments.length-2;if(K===1)R.children=U;else if(1<K){for(var te=Array(K),he=0;he<K;he++)te[he]=arguments[he+2];R.children=te}return _(p.type,W,R)},xe.createContext=function(p){return p={$$typeof:D,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:b,_context:p},p},xe.createElement=function(p,S,U){var R,W={},K=null;if(S!=null)for(R in S.key!==void 0&&(K=""+S.key),S)k.call(S,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(W[R]=S[R]);var te=arguments.length-2;if(te===1)W.children=U;else if(1<te){for(var he=Array(te),de=0;de<te;de++)he[de]=arguments[de+2];W.children=he}if(p&&p.defaultProps)for(R in te=p.defaultProps,te)W[R]===void 0&&(W[R]=te[R]);return _(p,K,W)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(p){return{$$typeof:q,render:p}},xe.isValidElement=G,xe.lazy=function(p){return{$$typeof:Z,_payload:{_status:-1,_result:p},_init:ae}},xe.memo=function(p,S){return{$$typeof:j,type:p,compare:S===void 0?null:S}},xe.startTransition=function(p){var S=x.T,U={};x.T=U;try{var R=p(),W=x.S;W!==null&&W(U,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(z,T)}catch(K){T(K)}finally{S!==null&&U.types!==null&&(S.types=U.types),x.T=S}},xe.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},xe.use=function(p){return x.H.use(p)},xe.useActionState=function(p,S,U){return x.H.useActionState(p,S,U)},xe.useCallback=function(p,S){return x.H.useCallback(p,S)},xe.useContext=function(p){return x.H.useContext(p)},xe.useDebugValue=function(){},xe.useDeferredValue=function(p,S){return x.H.useDeferredValue(p,S)},xe.useEffect=function(p,S){return x.H.useEffect(p,S)},xe.useEffectEvent=function(p){return x.H.useEffectEvent(p)},xe.useId=function(){return x.H.useId()},xe.useImperativeHandle=function(p,S,U){return x.H.useImperativeHandle(p,S,U)},xe.useInsertionEffect=function(p,S){return x.H.useInsertionEffect(p,S)},xe.useLayoutEffect=function(p,S){return x.H.useLayoutEffect(p,S)},xe.useMemo=function(p,S){return x.H.useMemo(p,S)},xe.useOptimistic=function(p,S){return x.H.useOptimistic(p,S)},xe.useReducer=function(p,S,U){return x.H.useReducer(p,S,U)},xe.useRef=function(p){return x.H.useRef(p)},xe.useState=function(p){return x.H.useState(p)},xe.useSyncExternalStore=function(p,S,U){return x.H.useSyncExternalStore(p,S,U)},xe.useTransition=function(){return x.H.useTransition()},xe.version="19.2.3",xe}var Eg;function mn(){return Eg||(Eg=1,Bc.exports=N0()),Bc.exports}var Be=mn();const pt=yu(Be);var Gc={exports:{}},Tl={},qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function L0(){return _g||(_g=1,(function(n){function o(A,u){var ae=A.length;A.push(u);e:for(;0<ae;){var T=ae-1>>>1,d=A[T];if(0<m(d,u))A[T]=u,A[ae]=d,ae=T;else break e}}function f(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var u=A[0],ae=A.pop();if(ae!==u){A[0]=ae;e:for(var T=0,d=A.length,p=d>>>1;T<p;){var S=2*(T+1)-1,U=A[S],R=S+1,W=A[R];if(0>m(U,ae))R<d&&0>m(W,U)?(A[T]=W,A[R]=ae,T=R):(A[T]=U,A[S]=ae,T=S);else if(R<d&&0>m(W,ae))A[T]=W,A[R]=ae,T=R;else break e}}return u}function m(A,u){var ae=A.sortIndex-u.sortIndex;return ae!==0?ae:A.id-u.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;n.unstable_now=function(){return b.now()}}else{var D=Date,q=D.now();n.unstable_now=function(){return D.now()-q}}var C=[],j=[],Z=1,P=null,ie=3,re=!1,le=!1,X=!1,ve=!1,ue=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function ce(A){for(var u=f(j);u!==null;){if(u.callback===null)s(j);else if(u.startTime<=A)s(j),u.sortIndex=u.expirationTime,o(C,u);else break;u=f(j)}}function w(A){if(X=!1,ce(A),!le)if(f(C)!==null)le=!0,z||(z=!0,V());else{var u=f(j);u!==null&&ee(w,u.startTime-A)}}var z=!1,x=-1,k=5,_=-1;function v(){return ve?!0:!(n.unstable_now()-_<k)}function G(){if(ve=!1,z){var A=n.unstable_now();_=A;var u=!0;try{e:{le=!1,X&&(X=!1,ge(x),x=-1),re=!0;var ae=ie;try{t:{for(ce(A),P=f(C);P!==null&&!(P.expirationTime>A&&v());){var T=P.callback;if(typeof T=="function"){P.callback=null,ie=P.priorityLevel;var d=T(P.expirationTime<=A);if(A=n.unstable_now(),typeof d=="function"){P.callback=d,ce(A),u=!0;break t}P===f(C)&&s(C),ce(A)}else s(C);P=f(C)}if(P!==null)u=!0;else{var p=f(j);p!==null&&ee(w,p.startTime-A),u=!1}}break e}finally{P=null,ie=ae,re=!1}u=void 0}}finally{u?V():z=!1}}}var V;if(typeof ne=="function")V=function(){ne(G)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=G,V=function(){J.postMessage(null)}}else V=function(){ue(G,0)};function ee(A,u){x=ue(function(){A(n.unstable_now())},u)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return ie},n.unstable_next=function(A){switch(ie){case 1:case 2:case 3:var u=3;break;default:u=ie}var ae=ie;ie=u;try{return A()}finally{ie=ae}},n.unstable_requestPaint=function(){ve=!0},n.unstable_runWithPriority=function(A,u){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var ae=ie;ie=A;try{return u()}finally{ie=ae}},n.unstable_scheduleCallback=function(A,u,ae){var T=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?T+ae:T):ae=T,A){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=ae+d,A={id:Z++,callback:u,priorityLevel:A,startTime:ae,expirationTime:d,sortIndex:-1},ae>T?(A.sortIndex=ae,o(j,A),f(C)===null&&A===f(j)&&(X?(ge(x),x=-1):X=!0,ee(w,ae-T))):(A.sortIndex=d,o(C,A),le||re||(le=!0,z||(z=!0,V()))),A},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(A){var u=ie;return function(){var ae=ie;ie=u;try{return A.apply(this,arguments)}finally{ie=ae}}}})(Yc)),Yc}var jg;function U0(){return jg||(jg=1,qc.exports=L0()),qc.exports}var Xc={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function B0(){if(Mg)return Tt;Mg=1;var n=mn();function o(C){var j="https://react.dev/errors/"+C;if(1<arguments.length){j+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)j+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+C+"; visit "+j+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(C,j,Z){var P=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:P==null?null:""+P,children:C,containerInfo:j,implementation:Z}}var D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(C,j){if(C==="font")return"";if(typeof j=="string")return j==="use-credentials"?j:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tt.createPortal=function(C,j){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j||j.nodeType!==1&&j.nodeType!==9&&j.nodeType!==11)throw Error(o(299));return b(C,j,null,Z)},Tt.flushSync=function(C){var j=D.T,Z=s.p;try{if(D.T=null,s.p=2,C)return C()}finally{D.T=j,s.p=Z,s.d.f()}},Tt.preconnect=function(C,j){typeof C=="string"&&(j?(j=j.crossOrigin,j=typeof j=="string"?j==="use-credentials"?j:"":void 0):j=null,s.d.C(C,j))},Tt.prefetchDNS=function(C){typeof C=="string"&&s.d.D(C)},Tt.preinit=function(C,j){if(typeof C=="string"&&j&&typeof j.as=="string"){var Z=j.as,P=q(Z,j.crossOrigin),ie=typeof j.integrity=="string"?j.integrity:void 0,re=typeof j.fetchPriority=="string"?j.fetchPriority:void 0;Z==="style"?s.d.S(C,typeof j.precedence=="string"?j.precedence:void 0,{crossOrigin:P,integrity:ie,fetchPriority:re}):Z==="script"&&s.d.X(C,{crossOrigin:P,integrity:ie,fetchPriority:re,nonce:typeof j.nonce=="string"?j.nonce:void 0})}},Tt.preinitModule=function(C,j){if(typeof C=="string")if(typeof j=="object"&&j!==null){if(j.as==null||j.as==="script"){var Z=q(j.as,j.crossOrigin);s.d.M(C,{crossOrigin:Z,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0})}}else j==null&&s.d.M(C)},Tt.preload=function(C,j){if(typeof C=="string"&&typeof j=="object"&&j!==null&&typeof j.as=="string"){var Z=j.as,P=q(Z,j.crossOrigin);s.d.L(C,Z,{crossOrigin:P,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0,type:typeof j.type=="string"?j.type:void 0,fetchPriority:typeof j.fetchPriority=="string"?j.fetchPriority:void 0,referrerPolicy:typeof j.referrerPolicy=="string"?j.referrerPolicy:void 0,imageSrcSet:typeof j.imageSrcSet=="string"?j.imageSrcSet:void 0,imageSizes:typeof j.imageSizes=="string"?j.imageSizes:void 0,media:typeof j.media=="string"?j.media:void 0})}},Tt.preloadModule=function(C,j){if(typeof C=="string")if(j){var Z=q(j.as,j.crossOrigin);s.d.m(C,{as:typeof j.as=="string"&&j.as!=="script"?j.as:void 0,crossOrigin:Z,integrity:typeof j.integrity=="string"?j.integrity:void 0})}else s.d.m(C)},Tt.requestFormReset=function(C){s.d.r(C)},Tt.unstable_batchedUpdates=function(C,j){return C(j)},Tt.useFormState=function(C,j,Z){return D.H.useFormState(C,j,Z)},Tt.useFormStatus=function(){return D.H.useHostTransitionStatus()},Tt.version="19.2.3",Tt}var Cg;function G0(){if(Cg)return Xc.exports;Cg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Xc.exports=B0(),Xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function q0(){if(kg)return Tl;kg=1;var n=U0(),o=mn(),f=G0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function D(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(b(e)!==e)throw Error(s(188))}function j(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return C(l),e;if(r===i)return C(l),t;r=r.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=r;else{for(var c=!1,g=l.child;g;){if(g===a){c=!0,a=l,i=r;break}if(g===i){c=!0,i=l,a=r;break}g=g.sibling}if(!c){for(g=r.child;g;){if(g===a){c=!0,a=r,i=l;break}if(g===i){c=!0,i=r,a=l;break}g=g.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function Z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Z(e),t!==null)return t;e=e.sibling}return null}var P=Object.assign,ie=Symbol.for("react.element"),re=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ge=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var H=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===H?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ue:return"Profiler";case ve:return"StrictMode";case w:return"Suspense";case z:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case ne:return e.displayName||"Context";case ge:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var ee=Array.isArray,A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,u=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},T=[],d=-1;function p(e){return{current:e}}function S(e){0>d||(e.current=T[d],T[d]=null,d--)}function U(e,t){d++,T[d]=e.current,e.current=t}var R=p(null),W=p(null),K=p(null),te=p(null);function he(e,t){switch(U(K,t),U(W,e),U(R,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kp(t),e=Jp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(R),U(R,e)}function de(){S(R),S(W),S(K)}function Se(e){e.memoizedState!==null&&U(te,e);var t=R.current,a=Jp(t,e.type);t!==a&&(U(W,e),U(R,a))}function Ae(e){W.current===e&&(S(R),S(W)),te.current===e&&(S(te),Sl._currentValue=ae)}var $e,Ee;function be(e){if($e===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$e=t&&t[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+Ee}var ze=!1;function Ie(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(Y){var B=Y}Reflect.construct(e,[],F)}else{try{F.call()}catch(Y){B=Y}e.call(F.prototype)}}else{try{throw Error()}catch(Y){B=Y}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),c=r[0],g=r[1];if(c&&g){var $=c.split(`
`),L=g.split(`
`);for(l=i=0;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;for(;l<L.length&&!L[l].includes("DetermineComponentFrameRoot");)l++;if(i===$.length||l===L.length)for(i=$.length-1,l=L.length-1;1<=i&&0<=l&&$[i]!==L[l];)l--;for(;1<=i&&0<=l;i--,l--)if($[i]!==L[l]){if(i!==1||l!==1)do if(i--,l--,0>l||$[i]!==L[l]){var Q=`
`+$[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return be("Activity");default:return""}}function Pe(e){try{var t="",a=null;do t+=_e(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fe=Object.prototype.hasOwnProperty,nt=n.unstable_scheduleCallback,yt=n.unstable_cancelCallback,vn=n.unstable_shouldYield,Ha=n.unstable_requestPaint,zt=n.unstable_now,da=n.unstable_getCurrentPriorityLevel,Ll=n.unstable_ImmediatePriority,an=n.unstable_UserBlockingPriority,un=n.unstable_NormalPriority,hm=n.unstable_LowPriority,Au=n.unstable_IdlePriority,mm=n.log,ym=n.unstable_setDisableYieldValue,Ci=null,Rt=null;function Ln(e){if(typeof mm=="function"&&ym(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ci,e)}catch{}}var Ht=Math.clz32?Math.clz32:Sm,vm=Math.log,bm=Math.LN2;function Sm(e){return e>>>=0,e===0?32:31-(vm(e)/bm|0)|0}var Ul=256,Bl=262144,Gl=4194304;function pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~r,i!==0?l=pa(i):(c&=g,c!==0?l=pa(c):a||(a=g&~e,a!==0&&(l=pa(a))))):(g=i&~r,g!==0?l=pa(g):c!==0?l=pa(c):a||(a=i&~e,a!==0&&(l=pa(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function ki(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(){var e=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),e}function Ao(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Di(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $m(e,t,a,i,l,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,$=e.expirationTimes,L=e.hiddenUpdates;for(a=c&~a;0<a;){var Q=31-Ht(a),F=1<<Q;g[Q]=0,$[Q]=-1;var B=L[Q];if(B!==null)for(L[Q]=null,Q=0;Q<B.length;Q++){var Y=B[Q];Y!==null&&(Y.lane&=-536870913)}a&=~F}i!==0&&_u(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function _u(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ju(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Ht(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function Mu(e,t){var a=t&-t;return a=(a&42)!==0?1:Eo(a),(a&(e.suspendedLanes|t))!==0?0:a}function Eo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cu(){var e=u.p;return e!==0?e:(e=window.event,e===void 0?32:vg(e.type))}function ku(e,t){var a=u.p;try{return u.p=e,t()}finally{u.p=a}}var Un=Math.random().toString(36).slice(2),vt="__reactFiber$"+Un,Et="__reactProps$"+Un,Na="__reactContainer$"+Un,jo="__reactEvents$"+Un,wm="__reactListeners$"+Un,zm="__reactHandles$"+Un,Du="__reactResources$"+Un,Ri="__reactMarker$"+Un;function Mo(e){delete e[vt],delete e[Et],delete e[jo],delete e[wm],delete e[zm]}function La(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Na]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ng(e);e!==null;){if(a=e[vt])return a;e=ng(e)}return t}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[vt]||e[Na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ba(e){var t=e[Du];return t||(t=e[Du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[Ri]=!0}var Ru=new Set,Hu={};function ga(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(Hu[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var Tm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nu={},Lu={};function Om(e){return Fe.call(Lu,e)?!0:Fe.call(Nu,e)?!1:Tm.test(e)?Lu[e]=!0:(Nu[e]=!0,!1)}function Yl(e,t,a){if(Om(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function bn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){if(!e._valueTracker){var t=Uu(e)?"checked":"value";e._valueTracker=Am(e,t,""+e[t])}}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Uu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Em=/[\n"\\]/g;function Vt(e){return e.replace(Em,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ko(e,t,a,i,l,r,c,g){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Do(e,c,Qt(t)):a!=null?Do(e,c,Qt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Qt(g):e.removeAttribute("name")}function Gu(e,t,a,i,l,r,c,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Co(e);return}a=a!=null?""+Qt(a):"",t=t!=null?""+Qt(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Co(e)}function Do(e,t,a){t==="number"&&Ql(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Qt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qu(e,t,a){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Qt(a):""}function Yu(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(ee(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Qt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Co(e)}function Ya(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||_m.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Qu(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Xu(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Xu(e,r,t[r])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sn(){}var Ho=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Qa=null;function Vu(e){var t=Ua(e);if(t&&(e=t.stateNode)){var a=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(ko(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[Et]||null;if(!l)throw Error(s(90));ko(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Bu(i)}break e;case"textarea":qu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&qa(e,!!a.multiple,t,!1)}}}var Lo=!1;function Zu(e,t,a){if(Lo)return e(t,a);Lo=!0;try{var i=e(t);return i}finally{if(Lo=!1,(Xa!==null||Qa!==null)&&(kr(),Xa&&(t=Xa,e=Qa,Qa=Xa=null,Vu(t),e)))for(t=0;t<e.length;t++)Vu(e[t])}}function Ni(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Et]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uo=!1;if(xn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Uo=!1}var Bn=null,Bo=null,Zl=null;function Ku(){if(Zl)return Zl;var e,t=Bo,a=t.length,i,l="value"in Bn?Bn.value:Bn.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(i=1;i<=c&&t[a-i]===l[r-i];i++);return Zl=l.slice(e,1<i?1-i:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jl(){return!0}function Ju(){return!1}function _t(e){function t(a,i,l,r,c){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Jl:Ju,this.isPropagationStopped=Ju,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=_t(ha),Ui=P({},ha,{view:0,detail:0}),Cm=_t(Ui),Go,qo,Bi,Il=P({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bi&&(Bi&&e.type==="mousemove"?(Go=e.screenX-Bi.screenX,qo=e.screenY-Bi.screenY):qo=Go=0,Bi=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),Wu=_t(Il),km=P({},Il,{dataTransfer:0}),Dm=_t(km),Rm=P({},Ui,{relatedTarget:0}),Yo=_t(Rm),Hm=P({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=_t(Hm),Lm=P({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Um=_t(Lm),Bm=P({},ha,{data:0}),Iu=_t(Bm),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function Xo(){return Xm}var Qm=P({},Ui,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=_t(Qm),Zm=P({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=_t(Zm),Km=P({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Jm=_t(Km),Wm=P({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=_t(Wm),Pm=P({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=_t(Pm),ey=P({},ha,{newState:0,oldState:0}),ty=_t(ey),ny=[9,13,27,32],Qo=xn&&"CompositionEvent"in window,Gi=null;xn&&"documentMode"in document&&(Gi=document.documentMode);var ay=xn&&"TextEvent"in window&&!Gi,Fu=xn&&(!Qo||Gi&&8<Gi&&11>=Gi),ef=" ",tf=!1;function nf(e,t){switch(e){case"keyup":return ny.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Va=!1;function iy(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(tf=!0,ef);case"textInput":return e=t.data,e===ef&&tf?null:e;default:return null}}function ly(e,t){if(Va)return e==="compositionend"||!Qo&&nf(e,t)?(e=Ku(),Zl=Bo=Bn=null,Va=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ry[e.type]:t==="textarea"}function rf(e,t,a,i){Xa?Qa?Qa.push(i):Qa=[i]:Xa=i,t=Br(t,"onChange"),0<t.length&&(a=new Wl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var qi=null,Yi=null;function oy(e){qp(e,0)}function Pl(e){var t=Hi(e);if(Bu(t))return e}function of(e,t){if(e==="change")return t}var sf=!1;if(xn){var Vo;if(xn){var Zo="oninput"in document;if(!Zo){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),Zo=typeof cf.oninput=="function"}Vo=Zo}else Vo=!1;sf=Vo&&(!document.documentMode||9<document.documentMode)}function uf(){qi&&(qi.detachEvent("onpropertychange",ff),Yi=qi=null)}function ff(e){if(e.propertyName==="value"&&Pl(Yi)){var t=[];rf(t,Yi,e,No(e)),Zu(oy,t)}}function sy(e,t,a){e==="focusin"?(uf(),qi=t,Yi=a,qi.attachEvent("onpropertychange",ff)):e==="focusout"&&uf()}function cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Yi)}function uy(e,t){if(e==="click")return Pl(t)}function fy(e,t){if(e==="input"||e==="change")return Pl(t)}function dy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:dy;function Xi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Fe.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,t){var a=df(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=df(a)}}function gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ql(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ql(e.document)}return t}function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var py=xn&&"documentMode"in document&&11>=document.documentMode,Za=null,Jo=null,Qi=null,Wo=!1;function mf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wo||Za==null||Za!==Ql(i)||(i=Za,"selectionStart"in i&&Ko(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qi&&Xi(Qi,i)||(Qi=i,i=Br(Jo,"onSelect"),0<i.length&&(t=new Wl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Za)))}function ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ka={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},Io={},yf={};xn&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function ya(e){if(Io[e])return Io[e];if(!Ka[e])return e;var t=Ka[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in yf)return Io[e]=t[a];return e}var vf=ya("animationend"),bf=ya("animationiteration"),Sf=ya("animationstart"),gy=ya("transitionrun"),hy=ya("transitionstart"),my=ya("transitioncancel"),xf=ya("transitionend"),$f=new Map,Po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Po.push("scrollEnd");function ln(e,t){$f.set(e,t),ga(t,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],Ja=0,Fo=0;function er(){for(var e=Ja,t=Fo=Ja=0;t<e;){var a=Zt[t];Zt[t++]=null;var i=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var r=Zt[t];if(Zt[t++]=null,i!==null&&l!==null){var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}r!==0&&wf(a,l,r)}}function tr(e,t,a,i){Zt[Ja++]=e,Zt[Ja++]=t,Zt[Ja++]=a,Zt[Ja++]=i,Fo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function es(e,t,a,i){return tr(e,t,a,i),nr(e)}function va(e,t){return tr(e,null,null,t),nr(e)}function wf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Ht(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function nr(e){if(50<pl)throw pl=0,cc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wa={};function yy(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,a,i){return new yy(e,t,a,i)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $n(e,t){var a=e.alternate;return a===null?(a=Lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ar(e,t,a,i,l,r){var c=0;if(i=e,typeof e=="function")ts(e)&&(c=1);else if(typeof e=="string")c=$0(e,a,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=Lt(31,a,t,l),e.elementType=_,e.lanes=r,e;case X:return ba(a.children,l,r,t);case ve:c=8,l|=24;break;case ue:return e=Lt(12,a,t,l|2),e.elementType=ue,e.lanes=r,e;case w:return e=Lt(13,a,t,l),e.elementType=w,e.lanes=r,e;case z:return e=Lt(19,a,t,l),e.elementType=z,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:c=10;break e;case ge:c=9;break e;case ce:c=11;break e;case x:c=14;break e;case k:c=16,i=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Lt(c,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function ba(e,t,a,i){return e=Lt(7,e,i,t),e.lanes=a,e}function ns(e,t,a){return e=Lt(6,e,null,t),e.lanes=a,e}function Tf(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function as(e,t,a){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Of=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var a=Of.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pe(t)},Of.set(e,t),t)}return{value:e,source:t,stack:Pe(t)}}var Ia=[],Pa=0,ir=null,Vi=0,Jt=[],Wt=0,Gn=null,fn=1,dn="";function wn(e,t){Ia[Pa++]=Vi,Ia[Pa++]=ir,ir=e,Vi=t}function Af(e,t,a){Jt[Wt++]=fn,Jt[Wt++]=dn,Jt[Wt++]=Gn,Gn=e;var i=fn;e=dn;var l=32-Ht(i)-1;i&=~(1<<l),a+=1;var r=32-Ht(t)+l;if(30<r){var c=l-l%5;r=(i&(1<<c)-1).toString(32),i>>=c,l-=c,fn=1<<32-Ht(t)+l|a<<l|i,dn=r+e}else fn=1<<r|a<<l|i,dn=e}function is(e){e.return!==null&&(wn(e,1),Af(e,1,0))}function ls(e){for(;e===ir;)ir=Ia[--Pa],Ia[Pa]=null,Vi=Ia[--Pa],Ia[Pa]=null;for(;e===Gn;)Gn=Jt[--Wt],Jt[Wt]=null,dn=Jt[--Wt],Jt[Wt]=null,fn=Jt[--Wt],Jt[Wt]=null}function Ef(e,t){Jt[Wt++]=fn,Jt[Wt++]=dn,Jt[Wt++]=Gn,fn=t.id,dn=t.overflow,Gn=e}var bt=null,Ze=null,De=!1,qn=null,It=!1,rs=Error(s(519));function Yn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(Kt(t,e)),rs}function _f(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[vt]=e,t[Et]=i,a){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(a=0;a<hl.length;a++)Me(hl[a],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Gu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Yu(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Vp(t.textContent,a)?(i.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),i.onScroll!=null&&Me("scroll",t),i.onScrollEnd!=null&&Me("scrollend",t),i.onClick!=null&&(t.onclick=Sn),t=!0):t=!1,t||Yn(e,!0)}function jf(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:bt=bt.return}}function Fa(e){if(e!==bt)return!1;if(!De)return jf(e),De=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zc(e.type,e.memoizedProps)),a=!a),a&&Ze&&Yn(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=tg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=tg(e)}else t===27?(t=Ze,aa(e.type)?(e=_c,_c=null,Ze=e):Ze=t):Ze=bt?Ft(e.stateNode.nextSibling):null;return!0}function Sa(){Ze=bt=null,De=!1}function os(){var e=qn;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),qn=null),e}function Zi(e){qn===null?qn=[e]:qn.push(e)}var ss=p(null),xa=null,zn=null;function Xn(e,t,a){U(ss,t._currentValue),t._currentValue=a}function Tn(e){e._currentValue=ss.current,S(ss)}function cs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function us(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=l;for(var $=0;$<t.length;$++)if(g.context===t[$]){r.lanes|=a,g=r.alternate,g!==null&&(g.lanes|=a),cs(r.return,a,e),i||(c=null);break e}r=g.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),cs(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function ei(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var g=l.type;Nt(l.pendingProps.value,c.value)||(e!==null?e.push(g):e=[g])}}else if(l===te.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Sl):e=[Sl])}l=l.return}e!==null&&us(t,e,a,i),t.flags|=262144}function lr(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){xa=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Mf(xa,e)}function rr(e,t){return xa===null&&$a(e),Mf(e,t)}function Mf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},zn===null){if(e===null)throw Error(s(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return a}var vy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},by=n.unstable_scheduleCallback,Sy=n.unstable_NormalPriority,lt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fs(){return{controller:new vy,data:new Map,refCount:0}}function Ki(e){e.refCount--,e.refCount===0&&by(Sy,function(){e.controller.abort()})}var Ji=null,ds=0,ti=0,ni=null;function xy(e,t){if(Ji===null){var a=Ji=[];ds=0,ti=hc(),ni={status:"pending",value:void 0,then:function(i){a.push(i)}}}return ds++,t.then(Cf,Cf),t}function Cf(){if(--ds===0&&Ji!==null){ni!==null&&(ni.status="fulfilled");var e=Ji;Ji=null,ti=0,ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $y(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var kf=A.S;A.S=function(e,t){mp=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xy(e,t),kf!==null&&kf(e,t)};var wa=p(null);function ps(){var e=wa.current;return e!==null?e:Ve.pooledCache}function or(e,t){t===null?U(wa,wa.current):U(wa,t.pool)}function Df(){var e=ps();return e===null?null:{parent:lt._currentValue,pool:e}}var ai=Error(s(460)),gs=Error(s(474)),sr=Error(s(542)),cr={then:function(){}};function Rf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Sn,Sn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e;default:if(typeof t.status=="string")t.then(Sn,Sn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lf(e),e}throw Ta=t,ai}}function za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ta=a,ai):a}}var Ta=null;function Nf(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Lf(e){if(e===ai||e===sr)throw Error(s(483))}var ii=null,Wi=0;function ur(e){var t=Wi;return Wi+=1,ii===null&&(ii=[]),Hf(ii,e,t)}function Ii(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fr(e,t){throw t.$$typeof===ie?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uf(e){function t(M,O){if(e){var N=M.deletions;N===null?(M.deletions=[O],M.flags|=16):N.push(O)}}function a(M,O){if(!e)return null;for(;O!==null;)t(M,O),O=O.sibling;return null}function i(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function l(M,O){return M=$n(M,O),M.index=0,M.sibling=null,M}function r(M,O,N){return M.index=N,e?(N=M.alternate,N!==null?(N=N.index,N<O?(M.flags|=67108866,O):N):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function c(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function g(M,O,N,I){return O===null||O.tag!==6?(O=ns(N,M.mode,I),O.return=M,O):(O=l(O,N),O.return=M,O)}function $(M,O,N,I){var me=N.type;return me===X?Q(M,O,N.props.children,I,N.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===k&&za(me)===O.type)?(O=l(O,N.props),Ii(O,N),O.return=M,O):(O=ar(N.type,N.key,N.props,null,M.mode,I),Ii(O,N),O.return=M,O)}function L(M,O,N,I){return O===null||O.tag!==4||O.stateNode.containerInfo!==N.containerInfo||O.stateNode.implementation!==N.implementation?(O=as(N,M.mode,I),O.return=M,O):(O=l(O,N.children||[]),O.return=M,O)}function Q(M,O,N,I,me){return O===null||O.tag!==7?(O=ba(N,M.mode,I,me),O.return=M,O):(O=l(O,N),O.return=M,O)}function F(M,O,N){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ns(""+O,M.mode,N),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case re:return N=ar(O.type,O.key,O.props,null,M.mode,N),Ii(N,O),N.return=M,N;case le:return O=as(O,M.mode,N),O.return=M,O;case k:return O=za(O),F(M,O,N)}if(ee(O)||V(O))return O=ba(O,M.mode,N,null),O.return=M,O;if(typeof O.then=="function")return F(M,ur(O),N);if(O.$$typeof===ne)return F(M,rr(M,O),N);fr(M,O)}return null}function B(M,O,N,I){var me=O!==null?O.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return me!==null?null:g(M,O,""+N,I);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case re:return N.key===me?$(M,O,N,I):null;case le:return N.key===me?L(M,O,N,I):null;case k:return N=za(N),B(M,O,N,I)}if(ee(N)||V(N))return me!==null?null:Q(M,O,N,I,null);if(typeof N.then=="function")return B(M,O,ur(N),I);if(N.$$typeof===ne)return B(M,O,rr(M,N),I);fr(M,N)}return null}function Y(M,O,N,I,me){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return M=M.get(N)||null,g(O,M,""+I,me);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case re:return M=M.get(I.key===null?N:I.key)||null,$(O,M,I,me);case le:return M=M.get(I.key===null?N:I.key)||null,L(O,M,I,me);case k:return I=za(I),Y(M,O,N,I,me)}if(ee(I)||V(I))return M=M.get(N)||null,Q(O,M,I,me,null);if(typeof I.then=="function")return Y(M,O,N,ur(I),me);if(I.$$typeof===ne)return Y(M,O,N,rr(O,I),me);fr(O,I)}return null}function fe(M,O,N,I){for(var me=null,Re=null,pe=O,Te=O=0,ke=null;pe!==null&&Te<N.length;Te++){pe.index>Te?(ke=pe,pe=null):ke=pe.sibling;var He=B(M,pe,N[Te],I);if(He===null){pe===null&&(pe=ke);break}e&&pe&&He.alternate===null&&t(M,pe),O=r(He,O,Te),Re===null?me=He:Re.sibling=He,Re=He,pe=ke}if(Te===N.length)return a(M,pe),De&&wn(M,Te),me;if(pe===null){for(;Te<N.length;Te++)pe=F(M,N[Te],I),pe!==null&&(O=r(pe,O,Te),Re===null?me=pe:Re.sibling=pe,Re=pe);return De&&wn(M,Te),me}for(pe=i(pe);Te<N.length;Te++)ke=Y(pe,M,Te,N[Te],I),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?Te:ke.key),O=r(ke,O,Te),Re===null?me=ke:Re.sibling=ke,Re=ke);return e&&pe.forEach(function(sa){return t(M,sa)}),De&&wn(M,Te),me}function ye(M,O,N,I){if(N==null)throw Error(s(151));for(var me=null,Re=null,pe=O,Te=O=0,ke=null,He=N.next();pe!==null&&!He.done;Te++,He=N.next()){pe.index>Te?(ke=pe,pe=null):ke=pe.sibling;var sa=B(M,pe,He.value,I);if(sa===null){pe===null&&(pe=ke);break}e&&pe&&sa.alternate===null&&t(M,pe),O=r(sa,O,Te),Re===null?me=sa:Re.sibling=sa,Re=sa,pe=ke}if(He.done)return a(M,pe),De&&wn(M,Te),me;if(pe===null){for(;!He.done;Te++,He=N.next())He=F(M,He.value,I),He!==null&&(O=r(He,O,Te),Re===null?me=He:Re.sibling=He,Re=He);return De&&wn(M,Te),me}for(pe=i(pe);!He.done;Te++,He=N.next())He=Y(pe,M,Te,He.value,I),He!==null&&(e&&He.alternate!==null&&pe.delete(He.key===null?Te:He.key),O=r(He,O,Te),Re===null?me=He:Re.sibling=He,Re=He);return e&&pe.forEach(function(k0){return t(M,k0)}),De&&wn(M,Te),me}function Qe(M,O,N,I){if(typeof N=="object"&&N!==null&&N.type===X&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case re:e:{for(var me=N.key;O!==null;){if(O.key===me){if(me=N.type,me===X){if(O.tag===7){a(M,O.sibling),I=l(O,N.props.children),I.return=M,M=I;break e}}else if(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===k&&za(me)===O.type){a(M,O.sibling),I=l(O,N.props),Ii(I,N),I.return=M,M=I;break e}a(M,O);break}else t(M,O);O=O.sibling}N.type===X?(I=ba(N.props.children,M.mode,I,N.key),I.return=M,M=I):(I=ar(N.type,N.key,N.props,null,M.mode,I),Ii(I,N),I.return=M,M=I)}return c(M);case le:e:{for(me=N.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===N.containerInfo&&O.stateNode.implementation===N.implementation){a(M,O.sibling),I=l(O,N.children||[]),I.return=M,M=I;break e}else{a(M,O);break}else t(M,O);O=O.sibling}I=as(N,M.mode,I),I.return=M,M=I}return c(M);case k:return N=za(N),Qe(M,O,N,I)}if(ee(N))return fe(M,O,N,I);if(V(N)){if(me=V(N),typeof me!="function")throw Error(s(150));return N=me.call(N),ye(M,O,N,I)}if(typeof N.then=="function")return Qe(M,O,ur(N),I);if(N.$$typeof===ne)return Qe(M,O,rr(M,N),I);fr(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,O!==null&&O.tag===6?(a(M,O.sibling),I=l(O,N),I.return=M,M=I):(a(M,O),I=ns(N,M.mode,I),I.return=M,M=I),c(M)):a(M,O)}return function(M,O,N,I){try{Wi=0;var me=Qe(M,O,N,I);return ii=null,me}catch(pe){if(pe===ai||pe===sr)throw pe;var Re=Lt(29,pe,null,M.mode);return Re.lanes=I,Re.return=M,Re}finally{}}}var Oa=Uf(!0),Bf=Uf(!1),Qn=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=nr(e),wf(e,null,a),t}return tr(e,i,t,a),nr(e)}function Pi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ju(e,a)}}function ys(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var vs=!1;function Fi(){if(vs){var e=ni;if(e!==null)throw e}}function el(e,t,a,i){vs=!1;var l=e.updateQueue;Qn=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var $=g,L=$.next;$.next=null,c===null?r=L:c.next=L,c=$;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,g=Q.lastBaseUpdate,g!==c&&(g===null?Q.firstBaseUpdate=L:g.next=L,Q.lastBaseUpdate=$))}if(r!==null){var F=l.baseState;c=0,Q=L=$=null,g=r;do{var B=g.lane&-536870913,Y=B!==g.lane;if(Y?(Ce&B)===B:(i&B)===B){B!==0&&B===ti&&(vs=!0),Q!==null&&(Q=Q.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var fe=e,ye=g;B=t;var Qe=a;switch(ye.tag){case 1:if(fe=ye.payload,typeof fe=="function"){F=fe.call(Qe,F,B);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ye.payload,B=typeof fe=="function"?fe.call(Qe,F,B):fe,B==null)break e;F=P({},F,B);break e;case 2:Qn=!0}}B=g.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Q===null?(L=Q=Y,$=F):Q=Q.next=Y,c|=B;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;Y=g,g=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);Q===null&&($=F),l.baseState=$,l.firstBaseUpdate=L,l.lastBaseUpdate=Q,r===null&&(l.shared.lanes=0),Pn|=c,e.lanes=c,e.memoizedState=F}}function Gf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function qf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gf(a[e],t)}var li=p(null),dr=p(0);function Yf(e,t){e=Dn,U(dr,e),U(li,t),Dn=e|t.baseLanes}function bs(){U(dr,Dn),U(li,li.current)}function Ss(){Dn=dr.current,S(li),S(dr)}var Ut=p(null),Pt=null;function Kn(e){var t=e.alternate;U(at,at.current&1),U(Ut,e),Pt===null&&(t===null||li.current!==null||t.memoizedState!==null)&&(Pt=e)}function xs(e){U(at,at.current),U(Ut,e),Pt===null&&(Pt=e)}function Xf(e){e.tag===22?(U(at,at.current),U(Ut,e),Pt===null&&(Pt=e)):Jn()}function Jn(){U(at,at.current),U(Ut,Ut.current)}function Bt(e){S(Ut),Pt===e&&(Pt=null),S(at)}var at=p(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ac(a)||Ec(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,we=null,Ye=null,rt=null,gr=!1,ri=!1,Aa=!1,hr=0,tl=0,oi=null,wy=0;function et(){throw Error(s(321))}function $s(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Nt(e[a],t[a]))return!1;return!0}function ws(e,t,a,i,l,r){return On=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Ad:Ls,Aa=!1,r=a(i,l),Aa=!1,ri&&(r=Vf(t,a,i,l)),Qf(e),r}function Qf(e){A.H=il;var t=Ye!==null&&Ye.next!==null;if(On=0,rt=Ye=we=null,gr=!1,tl=0,oi=null,t)throw Error(s(300));e===null||ot||(e=e.dependencies,e!==null&&lr(e)&&(ot=!0))}function Vf(e,t,a,i){we=e;var l=0;do{if(ri&&(oi=null),tl=0,ri=!1,25<=l)throw Error(s(301));if(l+=1,rt=Ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}A.H=Ed,r=t(a,i)}while(ri);return r}function zy(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?nl(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(we.flags|=1024),t}function zs(){var e=hr!==0;return hr=0,e}function Ts(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Os(e){if(gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gr=!1}On=0,rt=Ye=we=null,ri=!1,tl=hr=0,oi=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?we.memoizedState=rt=e:rt=rt.next=e,rt}function it(){if(Ye===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=rt===null?we.memoizedState:rt.next;if(t!==null)rt=t,Ye=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?we.memoizedState=rt=e:rt=rt.next=e}return rt}function mr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var t=tl;return tl+=1,oi===null&&(oi=[]),e=Hf(oi,e,t),t=we,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Ad:Ls),e}function yr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===ne)return St(e)}throw Error(s(438,String(e)))}function As(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=we.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=mr(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function An(e,t){return typeof t=="function"?t(e):t}function vr(e){var t=it();return Es(t,Ye,e)}function Es(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var g=c=null,$=null,L=t,Q=!1;do{var F=L.lane&-536870913;if(F!==L.lane?(Ce&F)===F:(On&F)===F){var B=L.revertLane;if(B===0)$!==null&&($=$.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),F===ti&&(Q=!0);else if((On&B)===B){L=L.next,B===ti&&(Q=!0);continue}else F={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},$===null?(g=$=F,c=r):$=$.next=F,we.lanes|=B,Pn|=B;F=L.action,Aa&&a(r,F),r=L.hasEagerState?L.eagerState:a(r,F)}else B={lane:F,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},$===null?(g=$=B,c=r):$=$.next=B,we.lanes|=F,Pn|=F;L=L.next}while(L!==null&&L!==t);if($===null?c=r:$.next=g,!Nt(r,e.memoizedState)&&(ot=!0,Q&&(a=ni,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=$,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _s(e){var t=it(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);Nt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function Zf(e,t,a){var i=we,l=it(),r=De;if(r){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Nt((Ye||l).memoizedState,a);if(c&&(l.memoizedState=a,ot=!0),l=l.queue,Cs(Wf.bind(null,i,l,e),[e]),l.getSnapshot!==t||c||rt!==null&&rt.memoizedState.tag&1){if(i.flags|=2048,si(9,{destroy:void 0},Jf.bind(null,i,l,a,t),null),Ve===null)throw Error(s(349));r||(On&127)!==0||Kf(i,t,a)}return a}function Kf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=mr(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Jf(e,t,a,i){t.value=a,t.getSnapshot=i,If(t)&&Pf(e)}function Wf(e,t,a){return a(function(){If(t)&&Pf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Nt(e,a)}catch{return!0}}function Pf(e){var t=va(e,2);t!==null&&Dt(t,e,2)}function js(e){var t=Ot();if(typeof e=="function"){var a=e;if(e=a(),Aa){Ln(!0);try{a()}finally{Ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function Ff(e,t,a,i){return e.baseState=a,Es(e,Ye,typeof i=="function"?i:An)}function Ty(e,t,a,i,l){if(xr(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};A.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,ed(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ed(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=A.T,c={};A.T=c;try{var g=a(l,i),$=A.S;$!==null&&$(c,g),td(e,t,g)}catch(L){Ms(e,t,L)}finally{r!==null&&c.types!==null&&(r.types=c.types),A.T=r}}else try{r=a(l,i),td(e,t,r)}catch(L){Ms(e,t,L)}}function td(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){nd(e,t,i)},function(i){return Ms(e,t,i)}):nd(e,t,a)}function nd(e,t,a){t.status="fulfilled",t.value=a,ad(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ed(e,a)))}function Ms(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,ad(t),t=t.next;while(t!==i)}e.action=null}function ad(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function id(e,t){return t}function ld(e,t){if(De){var a=Ve.formState;if(a!==null){e:{var i=we;if(De){if(Ze){t:{for(var l=Ze,r=It;l.nodeType!==8;){if(!r){l=null;break t}if(l=Ft(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ze=Ft(l.nextSibling),i=l.data==="F!";break e}}Yn(i)}i=!1}i&&(t=a[0])}}return a=Ot(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:id,lastRenderedState:t},a.queue=i,a=zd.bind(null,we,i),i.dispatch=a,i=js(!1),r=Ns.bind(null,we,!1,i.queue),i=Ot(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=Ty.bind(null,we,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function rd(e){var t=it();return od(t,Ye,e)}function od(e,t,a){if(t=Es(e,t,id)[0],e=vr(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=nl(t)}catch(c){throw c===ai?sr:c}else i=t;t=it();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(we.flags|=2048,si(9,{destroy:void 0},Oy.bind(null,l,a),null)),[i,r,e]}function Oy(e,t){e.action=t}function sd(e){var t=it(),a=Ye;if(a!==null)return od(t,a,e);it(),t=t.memoizedState,a=it();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function si(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=we.updateQueue,t===null&&(t=mr(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function cd(){return it().memoizedState}function br(e,t,a,i){var l=Ot();we.flags|=e,l.memoizedState=si(1|t,{destroy:void 0},a,i===void 0?null:i)}function Sr(e,t,a,i){var l=it();i=i===void 0?null:i;var r=l.memoizedState.inst;Ye!==null&&i!==null&&$s(i,Ye.memoizedState.deps)?l.memoizedState=si(t,r,a,i):(we.flags|=e,l.memoizedState=si(1|t,r,a,i))}function ud(e,t){br(8390656,8,e,t)}function Cs(e,t){Sr(2048,8,e,t)}function Ay(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=mr(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function fd(e){var t=it().memoizedState;return Ay({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function dd(e,t){return Sr(4,2,e,t)}function pd(e,t){return Sr(4,4,e,t)}function gd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,a){a=a!=null?a.concat([e]):null,Sr(4,4,gd.bind(null,t,e),a)}function ks(){}function md(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&$s(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function yd(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&$s(t,i[1]))return i[0];if(i=e(),Aa){Ln(!0);try{e()}finally{Ln(!1)}}return a.memoizedState=[i,t],i}function Ds(e,t,a){return a===void 0||(On&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=vp(),we.lanes|=e,Pn|=e,a)}function vd(e,t,a,i){return Nt(a,t)?a:li.current!==null?(e=Ds(e,a,i),Nt(e,t)||(ot=!0),e):(On&42)===0||(On&1073741824)!==0&&(Ce&261930)===0?(ot=!0,e.memoizedState=a):(e=vp(),we.lanes|=e,Pn|=e,t)}function bd(e,t,a,i,l){var r=u.p;u.p=r!==0&&8>r?r:8;var c=A.T,g={};A.T=g,Ns(e,!1,t,a);try{var $=l(),L=A.S;if(L!==null&&L(g,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var Q=$y($,i);al(e,t,Q,Yt(e))}else al(e,t,i,Yt(e))}catch(F){al(e,t,{then:function(){},status:"rejected",reason:F},Yt())}finally{u.p=r,c!==null&&g.types!==null&&(c.types=g.types),A.T=c}}function Ey(){}function Rs(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=Sd(e).queue;bd(e,l,t,ae,a===null?Ey:function(){return xd(e),a(i)})}function Sd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ae},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xd(e){var t=Sd(e);t.next===null&&(t=e.alternate.memoizedState),al(e,t.next.queue,{},Yt())}function Hs(){return St(Sl)}function $d(){return it().memoizedState}function wd(){return it().memoizedState}function _y(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Yt();e=Vn(a);var i=Zn(t,e,a);i!==null&&(Dt(i,t,a),Pi(i,t,a)),t={cache:fs()},e.payload=t;return}t=t.return}}function jy(e,t,a){var i=Yt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)?Td(t,a):(a=es(e,t,a,i),a!==null&&(Dt(a,e,i),Od(a,t,i)))}function zd(e,t,a){var i=Yt();al(e,t,a,i)}function al(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xr(e))Td(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,g=r(c,a);if(l.hasEagerState=!0,l.eagerState=g,Nt(g,c))return tr(e,t,l,0),Ve===null&&er(),!1}catch{}finally{}if(a=es(e,t,l,i),a!==null)return Dt(a,e,i),Od(a,t,i),!0}return!1}function Ns(e,t,a,i){if(i={lane:2,revertLane:hc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(s(479))}else t=es(e,a,i,2),t!==null&&Dt(t,e,2)}function xr(e){var t=e.alternate;return e===we||t!==null&&t===we}function Td(e,t){ri=gr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Od(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ju(e,a)}}var il={readContext:St,use:yr,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};il.useEffectEvent=et;var Ad={readContext:St,use:yr,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:ud,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,br(4194308,4,gd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){br(4,2,e,t)},useMemo:function(e,t){var a=Ot();t=t===void 0?null:t;var i=e();if(Aa){Ln(!0);try{e()}finally{Ln(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Ot();if(a!==void 0){var l=a(t);if(Aa){Ln(!0);try{a(t)}finally{Ln(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=jy.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=js(e);var t=e.queue,a=zd.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ks,useDeferredValue:function(e,t){var a=Ot();return Ds(a,e,t)},useTransition:function(){var e=js(!1);return e=bd.bind(null,we,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=we,l=Ot();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ve===null)throw Error(s(349));(Ce&127)!==0||Kf(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,ud(Wf.bind(null,i,r,e),[e]),i.flags|=2048,si(9,{destroy:void 0},Jf.bind(null,i,r,a,t),null),a},useId:function(){var e=Ot(),t=Ve.identifierPrefix;if(De){var a=dn,i=fn;a=(i&~(1<<32-Ht(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wy++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hs,useFormState:ld,useActionState:ld,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ns.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:As,useCacheRefresh:function(){return Ot().memoizedState=_y.bind(null,we)},useEffectEvent:function(e){var t=Ot(),a={impl:e};return t.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ls={readContext:St,use:yr,useCallback:md,useContext:St,useEffect:Cs,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:yd,useReducer:vr,useRef:cd,useState:function(){return vr(An)},useDebugValue:ks,useDeferredValue:function(e,t){var a=it();return vd(a,Ye.memoizedState,e,t)},useTransition:function(){var e=vr(An)[0],t=it().memoizedState;return[typeof e=="boolean"?e:nl(e),t]},useSyncExternalStore:Zf,useId:$d,useHostTransitionStatus:Hs,useFormState:rd,useActionState:rd,useOptimistic:function(e,t){var a=it();return Ff(a,Ye,e,t)},useMemoCache:As,useCacheRefresh:wd};Ls.useEffectEvent=fd;var Ed={readContext:St,use:yr,useCallback:md,useContext:St,useEffect:Cs,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:yd,useReducer:_s,useRef:cd,useState:function(){return _s(An)},useDebugValue:ks,useDeferredValue:function(e,t){var a=it();return Ye===null?Ds(a,e,t):vd(a,Ye.memoizedState,e,t)},useTransition:function(){var e=_s(An)[0],t=it().memoizedState;return[typeof e=="boolean"?e:nl(e),t]},useSyncExternalStore:Zf,useId:$d,useHostTransitionStatus:Hs,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var a=it();return Ye!==null?Ff(a,Ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:As,useCacheRefresh:wd};Ed.useEffectEvent=fd;function Us(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:P({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bs={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Vn(i);l.payload=t,a!=null&&(l.callback=a),t=Zn(e,l,i),t!==null&&(Dt(t,e,i),Pi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Vn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Zn(e,l,i),t!==null&&(Dt(t,e,i),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Yt(),i=Vn(a);i.tag=2,t!=null&&(i.callback=t),t=Zn(e,i,a),t!==null&&(Dt(t,e,a),Pi(t,e,a))}};function _d(e,t,a,i,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,c):t.prototype&&t.prototype.isPureReactComponent?!Xi(a,i)||!Xi(l,r):!0}function jd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Md(e){Fl(e)}function Cd(e){console.error(e)}function kd(e){Fl(e)}function $r(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Dd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Gs(e,t,a){return a=Vn(a),a.tag=3,a.payload={element:null},a.callback=function(){$r(e,t)},a}function Rd(e){return e=Vn(e),e.tag=3,e}function Hd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){Dd(t,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Dd(t,a,i),typeof l!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function My(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ei(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 31:case 13:return Pt===null?Dr():a.alternate===null&&tt===0&&(tt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),dc(e,i,l)),!1;case 22:return a.flags|=65536,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),dc(e,i,l)),!1}throw Error(s(435,a.tag))}return dc(e,i,l),Dr(),!1}if(De)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==rs&&(e=Error(s(422),{cause:i}),Zi(Kt(e,a)))):(i!==rs&&(t=Error(s(423),{cause:i}),Zi(Kt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Kt(i,a),l=Gs(e.stateNode,i,l),ys(e,l),tt!==4&&(tt=2)),!1;var r=Error(s(520),{cause:i});if(r=Kt(r,a),dl===null?dl=[r]:dl.push(r),tt!==4&&(tt=2),t===null)return!0;i=Kt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Gs(a.stateNode,i,e),ys(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Rd(l),Hd(l,e,a,i),ys(a,l),!1}a=a.return}while(a!==null);return!1}var qs=Error(s(461)),ot=!1;function xt(e,t,a,i){t.child=e===null?Bf(t,null,a,i):Oa(t,e.child,a,i)}function Nd(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var c={};for(var g in i)g!=="ref"&&(c[g]=i[g])}else c=i;return $a(t),i=ws(e,t,a,c,r,l),g=zs(),e!==null&&!ot?(Ts(e,t,l),En(e,t,l)):(De&&g&&is(t),t.flags|=1,xt(e,t,i,l),t.child)}function Ld(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!ts(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Ud(e,t,r,i,l)):(e=ar(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ws(e,l)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:Xi,a(c,i)&&e.ref===t.ref)return En(e,t,l)}return t.flags|=1,e=$n(r,i),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(Xi(r,i)&&e.ref===t.ref)if(ot=!1,t.pendingProps=i=r,Ws(e,l))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,En(e,t,l)}return Ys(e,t,a,i,l)}function Bd(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return Gd(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&or(t,r!==null?r.cachePool:null),r!==null?Yf(t,r):bs(),Xf(t);else return i=t.lanes=536870912,Gd(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(or(t,r.cachePool),Yf(t,r),Jn(),t.memoizedState=null):(e!==null&&or(t,null),bs(),Jn());return xt(e,t,l,a),t.child}function ll(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gd(e,t,a,i,l){var r=ps();return r=r===null?null:{parent:lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&or(t,null),bs(),Xf(t),e!==null&&ei(e,t,i,!0),t.childLanes=l,null}function wr(e,t){return t=Tr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qd(e,t,a){return Oa(t,e.child,null,a),e=wr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Cy(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(De){if(i.mode==="hidden")return e=wr(t,i),t.lanes=536870912,ll(null,e);if(xs(t),(e=Ze)?(e=eg(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=Tf(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Yn(t);return t.lanes=536870912,null}return wr(t,i)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(xs(t),l)if(t.flags&256)t.flags&=-257,t=qd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ot||ei(e,t,a,!1),l=(a&e.childLanes)!==0,ot||l){if(i=Ve,i!==null&&(c=Mu(i,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,va(e,c),Dt(i,e,c),qs;Dr(),t=qd(e,t,a)}else e=r.treeContext,Ze=Ft(c.nextSibling),bt=t,De=!0,qn=null,It=!1,e!==null&&Ef(t,e),t=wr(t,i),t.flags|=4096;return t}return e=$n(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ys(e,t,a,i,l){return $a(t),a=ws(e,t,a,i,void 0,l),i=zs(),e!==null&&!ot?(Ts(e,t,l),En(e,t,l)):(De&&i&&is(t),t.flags|=1,xt(e,t,a,l),t.child)}function Yd(e,t,a,i,l,r){return $a(t),t.updateQueue=null,a=Vf(t,i,a,l),Qf(e),i=zs(),e!==null&&!ot?(Ts(e,t,r),En(e,t,r)):(De&&i&&is(t),t.flags|=1,xt(e,t,a,r),t.child)}function Xd(e,t,a,i,l){if($a(t),t.stateNode===null){var r=Wa,c=a.contextType;typeof c=="object"&&c!==null&&(r=St(c)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},hs(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?St(c):Wa,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Us(t,a,c,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Bs.enqueueReplaceState(r,r.state,null),el(t,i,r,l),Fi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var g=t.memoizedProps,$=Ea(a,g);r.props=$;var L=r.context,Q=a.contextType;c=Wa,typeof Q=="object"&&Q!==null&&(c=St(Q));var F=a.getDerivedStateFromProps;Q=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||L!==c)&&jd(t,r,i,c),Qn=!1;var B=t.memoizedState;r.state=B,el(t,i,r,l),Fi(),L=t.memoizedState,g||B!==L||Qn?(typeof F=="function"&&(Us(t,a,F,i),L=t.memoizedState),($=Qn||_d(t,a,$,i,B,L,c))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),r.props=i,r.state=L,r.context=c,i=$):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,ms(e,t),c=t.memoizedProps,Q=Ea(a,c),r.props=Q,F=t.pendingProps,B=r.context,L=a.contextType,$=Wa,typeof L=="object"&&L!==null&&($=St(L)),g=a.getDerivedStateFromProps,(L=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==F||B!==$)&&jd(t,r,i,$),Qn=!1,B=t.memoizedState,r.state=B,el(t,i,r,l),Fi();var Y=t.memoizedState;c!==F||B!==Y||Qn||e!==null&&e.dependencies!==null&&lr(e.dependencies)?(typeof g=="function"&&(Us(t,a,g,i),Y=t.memoizedState),(Q=Qn||_d(t,a,Q,i,B,Y,$)||e!==null&&e.dependencies!==null&&lr(e.dependencies))?(L||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,Y,$),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,Y,$)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),r.props=i,r.state=Y,r.context=$,i=Q):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,zr(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,l),t.child=Oa(t,null,a,l)):xt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=En(e,t,l),e}function Qd(e,t,a,i){return Sa(),t.flags|=256,xt(e,t,a,i),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:Df()}}function Vs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function Vd(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(l?Kn(t):Jn(),(e=Ze)?(e=eg(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:fn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},a=Tf(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Yn(t);return Ec(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,l?(Jn(),l=t.mode,g=Tr({mode:"hidden",children:g},l),i=ba(i,l,a,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Qs(a),i.childLanes=Vs(e,c,a),t.memoizedState=Xs,ll(null,i)):(Kn(t),Zs(t,g))}var $=e.memoizedState;if($!==null&&(g=$.dehydrated,g!==null)){if(r)t.flags&256?(Kn(t),t.flags&=-257,t=Ks(e,t,a)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),g=i.fallback,l=t.mode,i=Tr({mode:"visible",children:i.children},l),g=ba(g,l,a,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Oa(t,e.child,null,a),i=t.child,i.memoizedState=Qs(a),i.childLanes=Vs(e,c,a),t.memoizedState=Xs,t=ll(null,i));else if(Kn(t),Ec(g)){if(c=g.nextSibling&&g.nextSibling.dataset,c)var L=c.dgst;c=L,i=Error(s(419)),i.stack="",i.digest=c,Zi({value:i,source:null,stack:null}),t=Ks(e,t,a)}else if(ot||ei(e,t,a,!1),c=(a&e.childLanes)!==0,ot||c){if(c=Ve,c!==null&&(i=Mu(c,a),i!==0&&i!==$.retryLane))throw $.retryLane=i,va(e,i),Dt(c,e,i),qs;Ac(g)||Dr(),t=Ks(e,t,a)}else Ac(g)?(t.flags|=192,t.child=e.child,t=null):(e=$.treeContext,Ze=Ft(g.nextSibling),bt=t,De=!0,qn=null,It=!1,e!==null&&Ef(t,e),t=Zs(t,i.children),t.flags|=4096);return t}return l?(Jn(),g=i.fallback,l=t.mode,$=e.child,L=$.sibling,i=$n($,{mode:"hidden",children:i.children}),i.subtreeFlags=$.subtreeFlags&65011712,L!==null?g=$n(L,g):(g=ba(g,l,a,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,ll(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Qs(a):(l=g.cachePool,l!==null?($=lt._currentValue,l=l.parent!==$?{parent:$,pool:$}:l):l=Df(),g={baseLanes:g.baseLanes|a,cachePool:l}),i.memoizedState=g,i.childLanes=Vs(e,c,a),t.memoizedState=Xs,ll(e.child,i)):(Kn(t),a=e.child,e=a.sibling,a=$n(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Zs(e,t){return t=Tr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Tr(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function Ks(e,t,a){return Oa(t,e.child,null,a),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),cs(e.return,t,a)}function Js(e,t,a,i,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=l,c.treeForkCount=r)}function Kd(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var c=at.current,g=(c&2)!==0;if(g?(c=c&1|2,t.flags|=128):c&=1,U(at,c),xt(e,t,i,a),i=De?Vi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,a,t);else if(e.tag===19)Zd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&pr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Js(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Js(t,!0,a,null,r,i);break;case"together":Js(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function En(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ei(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=$n(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=$n(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ws(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lr(e)))}function ky(e,t,a){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Xn(t,lt,e.memoizedState.cache),Sa();break;case 27:case 5:Se(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Kn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vd(e,t,a):(Kn(t),e=En(e,t,a),e!==null?e.sibling:null);Kn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ei(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Kd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(at,at.current),i)break;return null;case 22:return t.lanes=0,Bd(e,t,a,t.pendingProps);case 24:Xn(t,lt,e.memoizedState.cache)}return En(e,t,a)}function Jd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!Ws(e,a)&&(t.flags&128)===0)return ot=!1,ky(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,De&&(t.flags&1048576)!==0&&Af(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")ts(e)?(i=Ea(e,i),t.tag=1,t=Xd(null,t,e,i,a)):(t.tag=0,t=Ys(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===ce){t.tag=11,t=Nd(null,t,e,i,a);break e}else if(l===x){t.tag=14,t=Ld(null,t,e,i,a);break e}}throw t=J(e)||e,Error(s(306,t,""))}}return t;case 0:return Ys(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Ea(i,t.pendingProps),Xd(e,t,i,l,a);case 3:e:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,ms(e,t),el(t,i,null,a);var c=t.memoizedState;if(i=c.cache,Xn(t,lt,i),i!==r.cache&&us(t,[lt],a,!0),Fi(),i=c.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Qd(e,t,i,a);break e}else if(i!==l){l=Kt(Error(s(424)),t),Zi(l),t=Qd(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Ft(e.firstChild),bt=t,De=!0,qn=null,It=!0,a=Bf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Sa(),i===l){t=En(e,t,a);break e}xt(e,t,i,a)}t=t.child}return t;case 26:return zr(e,t),e===null?(a=rg(t.type,null,t.pendingProps,null))?t.memoizedState=a:De||(a=t.type,e=t.pendingProps,i=Gr(K.current).createElement(a),i[vt]=t,i[Et]=e,$t(i,a,e),gt(i),t.stateNode=i):t.memoizedState=rg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&De&&(i=t.stateNode=ag(t.type,t.pendingProps,K.current),bt=t,It=!0,l=Ze,aa(t.type)?(_c=l,Ze=Ft(i.firstChild)):Ze=l),xt(e,t,t.pendingProps.children,a),zr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((l=i=Ze)&&(i=c0(i,t.type,t.pendingProps,It),i!==null?(t.stateNode=i,bt=t,Ze=Ft(i.firstChild),It=!1,l=!0):l=!1),l||Yn(t)),Se(t),l=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,i=r.children,zc(l,r)?i=null:c!==null&&zc(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=ws(e,t,zy,null,null,a),Sl._currentValue=l),zr(e,t),xt(e,t,i,a),t.child;case 6:return e===null&&De&&((e=a=Ze)&&(a=u0(a,t.pendingProps,It),a!==null?(t.stateNode=a,bt=t,Ze=null,e=!0):e=!1),e||Yn(t)),null;case 13:return Vd(e,t,a);case 4:return he(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,a):xt(e,t,i,a),t.child;case 11:return Nd(e,t,t.type,t.pendingProps,a);case 7:return xt(e,t,t.pendingProps,a),t.child;case 8:return xt(e,t,t.pendingProps.children,a),t.child;case 12:return xt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Xn(t,t.type,i.value),xt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,$a(t),l=St(l),i=i(l),t.flags|=1,xt(e,t,i,a),t.child;case 14:return Ld(e,t,t.type,t.pendingProps,a);case 15:return Ud(e,t,t.type,t.pendingProps,a);case 19:return Kd(e,t,a);case 31:return Cy(e,t,a);case 22:return Bd(e,t,a,t.pendingProps);case 24:return $a(t),i=St(lt),e===null?(l=ps(),l===null&&(l=Ve,r=fs(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},hs(t),Xn(t,lt,l)):((e.lanes&a)!==0&&(ms(e,t),el(t,null,null,a),Fi()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Xn(t,lt,i)):(i=r.cache,Xn(t,lt,i),i!==l.cache&&us(t,[lt],a,!0))),xt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function _n(e){e.flags|=4}function Is(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if($p())e.flags|=8192;else throw Ta=cr,gs}else e.flags&=-16777217}function Wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fg(t))if($p())e.flags|=8192;else throw Ta=cr,gs}function Or(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Eu():536870912,e.lanes|=t,di|=t)}function rl(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Dy(e,t,a){var i=t.pendingProps;switch(ls(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Tn(lt),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,os())),Ke(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(_n(t),r!==null?(Ke(t),Wd(t,r)):(Ke(t),Is(t,l,null,i,a))):r?r!==e.memoizedState?(_n(t),Ke(t),Wd(t,r)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_n(t),Ke(t),Is(t,l,e,i,a)),null;case 27:if(Ae(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_n(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}e=R.current,Fa(t)?_f(t):(e=ag(l,i,a),t.stateNode=e,_n(t))}return Ke(t),null;case 5:if(Ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_n(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(r=R.current,Fa(t))_f(t);else{var c=Gr(K.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?c.createElement(l,{is:i.is}):c.createElement(l)}}r[vt]=t,r[Et]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch($t(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&_n(t)}}return Ke(t),Is(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_n(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=K.current,Fa(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=bt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Vp(e.nodeValue,a)),e||Yn(t,!0)}else e=Gr(e).createTextNode(i),e[vt]=t,t.stateNode=e}return Ke(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fa(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[vt]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else a=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Fa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[vt]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else l=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Or(t,t.updateQueue),Ke(t),null);case 4:return de(),e===null&&bc(t.stateNode.containerInfo),Ke(t),null;case 10:return Tn(t.type),Ke(t),null;case 19:if(S(at),i=t.memoizedState,i===null)return Ke(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)rl(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=pr(e),r!==null){for(t.flags|=128,rl(i,!1),e=r.updateQueue,t.updateQueue=e,Or(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)zf(a,e),a=a.sibling;return U(at,at.current&1|2),De&&wn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zt()>Mr&&(t.flags|=128,l=!0,rl(i,!1),t.lanes=4194304)}else{if(!l)if(e=pr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Or(t,e),rl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!De)return Ke(t),null}else 2*zt()-i.renderingStartTime>Mr&&a!==536870912&&(t.flags|=128,l=!0,rl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zt(),e.sibling=null,a=at.current,U(at,l?a&1|2:a&1),De&&wn(t,i.treeForkCount),e):(Ke(t),null);case 22:case 23:return Bt(t),Ss(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),a=t.updateQueue,a!==null&&Or(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&S(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Tn(lt),Ke(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Ry(e,t){switch(ls(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(lt),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(at),null;case 4:return de(),null;case 10:return Tn(t.type),null;case 22:case 23:return Bt(t),Ss(),e!==null&&S(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(lt),null;case 25:return null;default:return null}}function Id(e,t){switch(ls(t),t.tag){case 3:Tn(lt),de();break;case 26:case 27:case 5:Ae(t);break;case 4:de();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:S(at);break;case 10:Tn(t.type);break;case 22:case 23:Bt(t),Ss(),e!==null&&S(wa);break;case 24:Tn(lt)}}function ol(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,c=a.inst;i=r(),c.destroy=i}a=a.next}while(a!==l)}}catch(g){qe(t,t.return,g)}}function Wn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var c=i.inst,g=c.destroy;if(g!==void 0){c.destroy=void 0,l=t;var $=a,L=g;try{L()}catch(Q){qe(l,$,Q)}}}i=i.next}while(i!==r)}}catch(Q){qe(t,t.return,Q)}}function Pd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qf(t,a)}catch(i){qe(e,e.return,i)}}}function Fd(e,t,a){a.props=Ea(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){qe(e,t,i)}}function sl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){qe(e,t,l)}}function pn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(e,t,l)}else a.current=null}function ep(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){qe(e,e.return,l)}}function Ps(e,t,a){try{var i=e.stateNode;a0(i,e.type,a,t),i[Et]=t}catch(l){qe(e,e.return,l)}}function tp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function Fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sn));else if(i!==4&&(i===27&&aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ec(e,t,a),e=e.sibling;e!==null;)ec(e,t,a),e=e.sibling}function Ar(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ar(e,t,a),e=e.sibling;e!==null;)Ar(e,t,a),e=e.sibling}function np(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$t(t,i,a),t[vt]=e,t[Et]=a}catch(r){qe(e,e.return,r)}}var jn=!1,st=!1,tc=!1,ap=typeof WeakSet=="function"?WeakSet:Set,ht=null;function Hy(e,t){if(e=e.containerInfo,$c=Kr,e=hf(e),Ko(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,g=-1,$=-1,L=0,Q=0,F=e,B=null;t:for(;;){for(var Y;F!==a||l!==0&&F.nodeType!==3||(g=c+l),F!==r||i!==0&&F.nodeType!==3||($=c+i),F.nodeType===3&&(c+=F.nodeValue.length),(Y=F.firstChild)!==null;)B=F,F=Y;for(;;){if(F===e)break t;if(B===a&&++L===l&&(g=c),B===r&&++Q===i&&($=c),(Y=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=Y}a=g===-1||$===-1?null:{start:g,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:e,selectionRange:a},Kr=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=Ea(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ye){qe(a,a.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Oc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function ip(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Cn(e,a),i&4&&ol(5,a);break;case 1:if(Cn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){qe(a,a.return,c)}else{var l=Ea(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){qe(a,a.return,c)}}i&64&&Pd(a),i&512&&sl(a,a.return);break;case 3:if(Cn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{qf(e,t)}catch(c){qe(a,a.return,c)}}break;case 27:t===null&&i&4&&np(a);case 26:case 5:Cn(e,a),t===null&&i&4&&ep(a),i&512&&sl(a,a.return);break;case 12:Cn(e,a);break;case 31:Cn(e,a),i&4&&op(e,a);break;case 13:Cn(e,a),i&4&&sp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qy.bind(null,a),f0(e,a))));break;case 22:if(i=a.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||st,l=jn;var r=st;jn=i,(st=t)&&!r?kn(e,a,(a.subtreeFlags&8772)!==0):Cn(e,a),jn=l,st=r}break;case 30:break;default:Cn(e,a)}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,jt=!1;function Mn(e,t,a){for(a=a.child;a!==null;)rp(e,t,a),a=a.sibling}function rp(e,t,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ci,a)}catch{}switch(a.tag){case 26:st||pn(a,t),Mn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||pn(a,t);var i=We,l=jt;aa(a.type)&&(We=a.stateNode,jt=!1),Mn(e,t,a),yl(a.stateNode),We=i,jt=l;break;case 5:st||pn(a,t);case 6:if(i=We,l=jt,We=null,Mn(e,t,a),We=i,jt=l,We!==null)if(jt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(r){qe(a,t,r)}else try{We.removeChild(a.stateNode)}catch(r){qe(a,t,r)}break;case 18:We!==null&&(jt?(e=We,Pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Si(e)):Pp(We,a.stateNode));break;case 4:i=We,l=jt,We=a.stateNode.containerInfo,jt=!0,Mn(e,t,a),We=i,jt=l;break;case 0:case 11:case 14:case 15:Wn(2,a,t),st||Wn(4,a,t),Mn(e,t,a);break;case 1:st||(pn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Fd(a,t,i)),Mn(e,t,a);break;case 21:Mn(e,t,a);break;case 22:st=(i=st)||a.memoizedState!==null,Mn(e,t,a),st=i;break;default:Mn(e,t,a)}}function op(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Si(e)}catch(a){qe(t,t.return,a)}}}function sp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Si(e)}catch(a){qe(t,t.return,a)}}function Ny(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ap),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ap),t;default:throw Error(s(435,e.tag))}}function Er(e,t){var a=Ny(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=Vy.bind(null,e,i);i.then(l,l)}})}function Mt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,c=t,g=c;e:for(;g!==null;){switch(g.tag){case 27:if(aa(g.type)){We=g.stateNode,jt=!1;break e}break;case 5:We=g.stateNode,jt=!1;break e;case 3:case 4:We=g.stateNode.containerInfo,jt=!0;break e}g=g.return}if(We===null)throw Error(s(160));rp(r,c,l),We=null,jt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}var rn=null;function cp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(t,e),Ct(e),i&4&&(Wn(3,e,e.return),ol(3,e),Wn(5,e,e.return));break;case 1:Mt(t,e),Ct(e),i&512&&(st||a===null||pn(a,a.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=rn;if(Mt(t,e),Ct(e),i&512&&(st||a===null||pn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ri]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),$t(r,i,a),r[vt]=e,gt(r),i=r;break e;case"link":var c=cg("link","href",l).get(i+(a.href||""));if(c){for(var g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;case"meta":if(c=cg("meta","content",l).get(i+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;default:throw Error(s(468,i))}r[vt]=e,gt(r),i=r}e.stateNode=i}else ug(l,e.type,e.stateNode);else e.stateNode=sg(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?ug(l,e.type,e.stateNode):sg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ps(e,e.memoizedProps,a.memoizedProps)}break;case 27:Mt(t,e),Ct(e),i&512&&(st||a===null||pn(a,a.return)),a!==null&&i&4&&Ps(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Mt(t,e),Ct(e),i&512&&(st||a===null||pn(a,a.return)),e.flags&32){l=e.stateNode;try{Ya(l,"")}catch(fe){qe(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Ps(e,l,a!==null?a.memoizedProps:l)),i&1024&&(tc=!0);break;case 6:if(Mt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){qe(e,e.return,fe)}}break;case 3:if(Xr=null,l=rn,rn=qr(t.containerInfo),Mt(t,e),rn=l,Ct(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(fe){qe(e,e.return,fe)}tc&&(tc=!1,up(e));break;case 4:i=rn,rn=qr(e.stateNode.containerInfo),Mt(t,e),Ct(e),rn=i;break;case 12:Mt(t,e),Ct(e);break;case 31:Mt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 13:Mt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jr=zt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 22:l=e.memoizedState!==null;var $=a!==null&&a.memoizedState!==null,L=jn,Q=st;if(jn=L||l,st=Q||$,Mt(t,e),st=Q,jn=L,Ct(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||$||jn||st||_a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){$=a=t;try{if(r=$.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=$.stateNode;var F=$.memoizedProps.style,B=F!=null&&F.hasOwnProperty("display")?F.display:null;g.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(fe){qe($,$.return,fe)}}}else if(t.tag===6){if(a===null){$=t;try{$.stateNode.nodeValue=l?"":$.memoizedProps}catch(fe){qe($,$.return,fe)}}}else if(t.tag===18){if(a===null){$=t;try{var Y=$.stateNode;l?Fp(Y,!0):Fp($.stateNode,!1)}catch(fe){qe($,$.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Er(e,a))));break;case 19:Mt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Er(e,i)));break;case 30:break;case 21:break;default:Mt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(tp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,r=Fs(e);Ar(e,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(Ya(c,""),a.flags&=-33);var g=Fs(e);Ar(e,g,c);break;case 3:case 4:var $=a.stateNode.containerInfo,L=Fs(e);ec(e,L,$);break;default:throw Error(s(161))}}catch(Q){qe(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function up(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;up(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ip(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),_a(t);break;case 1:pn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fd(t,t.return,a),_a(t);break;case 27:yl(t.stateNode);case 26:case 5:pn(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function kn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:kn(l,r,a),ol(4,r);break;case 1:if(kn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(L){qe(i,i.return,L)}if(i=r,l=i.updateQueue,l!==null){var g=i.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)Gf($[l],g)}catch(L){qe(i,i.return,L)}}a&&c&64&&Pd(r),sl(r,r.return);break;case 27:np(r);case 26:case 5:kn(l,r,a),a&&i===null&&c&4&&ep(r),sl(r,r.return);break;case 12:kn(l,r,a);break;case 31:kn(l,r,a),a&&c&4&&op(l,r);break;case 13:kn(l,r,a),a&&c&4&&sp(l,r);break;case 22:r.memoizedState===null&&kn(l,r,a),sl(r,r.return);break;case 30:break;default:kn(l,r,a)}t=t.sibling}}function nc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ki(a))}function ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ki(e))}function on(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fp(e,t,a,i),t=t.sibling}function fp(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,a,i),l&2048&&ol(9,t);break;case 1:on(e,t,a,i);break;case 3:on(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ki(e)));break;case 12:if(l&2048){on(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,g=r.onPostCommit;typeof g=="function"&&g(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch($){qe(t,t.return,$)}}else on(e,t,a,i);break;case 31:on(e,t,a,i);break;case 13:on(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?on(e,t,a,i):cl(e,t):r._visibility&2?on(e,t,a,i):(r._visibility|=2,ci(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&nc(c,t);break;case 24:on(e,t,a,i),l&2048&&ac(t.alternate,t);break;default:on(e,t,a,i)}}function ci(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,g=a,$=i,L=c.flags;switch(c.tag){case 0:case 11:case 15:ci(r,c,g,$,l),ol(8,c);break;case 23:break;case 22:var Q=c.stateNode;c.memoizedState!==null?Q._visibility&2?ci(r,c,g,$,l):cl(r,c):(Q._visibility|=2,ci(r,c,g,$,l)),l&&L&2048&&nc(c.alternate,c);break;case 24:ci(r,c,g,$,l),l&&L&2048&&ac(c.alternate,c);break;default:ci(r,c,g,$,l)}t=t.sibling}}function cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:cl(a,i),l&2048&&nc(i.alternate,i);break;case 24:cl(a,i),l&2048&&ac(i.alternate,i);break;default:cl(a,i)}t=t.sibling}}var ul=8192;function ui(e,t,a){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)dp(e,t,a),e=e.sibling}function dp(e,t,a){switch(e.tag){case 26:ui(e,t,a),e.flags&ul&&e.memoizedState!==null&&w0(a,rn,e.memoizedState,e.memoizedProps);break;case 5:ui(e,t,a);break;case 3:case 4:var i=rn;rn=qr(e.stateNode.containerInfo),ui(e,t,a),rn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ul,ul=16777216,ui(e,t,a),ul=i):ui(e,t,a));break;default:ui(e,t,a)}}function pp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,hp(i,e)}pp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gp(e),e=e.sibling}function gp(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_r(e)):fl(e);break;default:fl(e)}}function _r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,hp(i,e)}pp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),_r(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_r(t));break;default:_r(t)}e=e.sibling}}function hp(e,t){for(;ht!==null;){var a=ht;switch(a.tag){case 0:case 11:case 15:Wn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ki(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ht=i;else e:for(a=e;ht!==null;){i=ht;var l=i.sibling,r=i.return;if(lp(i),i===a){ht=null;break e}if(l!==null){l.return=r,ht=l;break e}ht=r}}}var Ly={getCacheForType:function(e){var t=St(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(lt).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ve=null,je=null,Ce=0,Ge=0,Gt=null,In=!1,fi=!1,ic=!1,Dn=0,tt=0,Pn=0,ja=0,lc=0,qt=0,di=0,dl=null,kt=null,rc=!1,jr=0,mp=0,Mr=1/0,Cr=null,Fn=null,ft=0,ea=null,pi=null,Rn=0,oc=0,sc=null,yp=null,pl=0,cc=null;function Yt(){return(Le&2)!==0&&Ce!==0?Ce&-Ce:A.T!==null?hc():Cu()}function vp(){if(qt===0)if((Ce&536870912)===0||De){var e=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),qt=e}else qt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),qt}function Dt(e,t,a){(e===Ve&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(gi(e,0),ta(e,Ce,qt,!1)),Di(e,a),((Le&2)===0||e!==Ve)&&(e===Ve&&((Le&2)===0&&(ja|=a),tt===4&&ta(e,Ce,qt,!1)),gn(e))}function bp(e,t,a){if((Le&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ki(e,t),l=i?qy(e,t):fc(e,t,!0),r=i;do{if(l===0){fi&&!i&&ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!By(a)){l=fc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var g=e;l=dl;var $=g.current.memoizedState.isDehydrated;if($&&(gi(g,c).flags|=256),c=fc(g,c,!1),c!==2){if(ic&&!$){g.errorRecoveryDisabledLanes|=r,ja|=r,l=4;break e}r=kt,kt=l,r!==null&&(kt===null?kt=r:kt.push.apply(kt,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){gi(e,0),ta(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ta(i,t,qt,!In);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=jr+300-zt(),10<l)){if(ta(i,t,qt,!In),ql(i,0,!0)!==0)break e;Rn=t,i.timeoutHandle=Wp(Sp.bind(null,i,a,kt,Cr,rc,t,qt,ja,di,In,r,"Throttled",-0,0),l);break e}Sp(i,a,kt,Cr,rc,t,qt,ja,di,In,r,null,-0,0)}}break}while(!0);gn(e)}function Sp(e,t,a,i,l,r,c,g,$,L,Q,F,B,Y){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},dp(t,r,F);var fe=(r&62914560)===r?jr-zt():(r&4194048)===r?mp-zt():0;if(fe=z0(F,fe),fe!==null){Rn=r,e.cancelPendingCommit=fe(Ep.bind(null,e,t,r,a,i,l,c,g,$,Q,F,null,B,Y)),ta(e,r,c,!L);return}}Ep(e,t,r,a,i,l,c,g,$)}function By(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Nt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,a,i){t&=~lc,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Ht(l),c=1<<r;i[r]=-1,l&=~c}a!==0&&_u(e,a,t)}function kr(){return(Le&6)===0?(gl(0),!1):!0}function uc(){if(je!==null){if(Ge===0)var e=je.return;else e=je,zn=xa=null,Os(e),ii=null,Wi=0,e=je;for(;e!==null;)Id(e.alternate,e),e=e.return;je=null}}function gi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,r0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rn=0,uc(),Ve=e,je=a=$n(e.current,null),Ce=t,Ge=0,Gt=null,In=!1,fi=ki(e,t),ic=!1,di=qt=lc=ja=Pn=tt=0,kt=dl=null,rc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Ht(i),r=1<<l;t|=e[l],i&=~r}return Dn=t,er(),a}function xp(e,t){we=null,A.H=il,t===ai||t===sr?(t=Nf(),Ge=3):t===gs?(t=Nf(),Ge=4):Ge=t===qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,je===null&&(tt=1,$r(e,Kt(t,e.current)))}function $p(){var e=Ut.current;return e===null?!0:(Ce&4194048)===Ce?Pt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Pt:!1}function wp(){var e=A.H;return A.H=il,e===null?il:e}function zp(){var e=A.A;return A.A=Ly,e}function Dr(){tt=4,In||(Ce&4194048)!==Ce&&Ut.current!==null||(fi=!0),(Pn&134217727)===0&&(ja&134217727)===0||Ve===null||ta(Ve,Ce,qt,!1)}function fc(e,t,a){var i=Le;Le|=2;var l=wp(),r=zp();(Ve!==e||Ce!==t)&&(Cr=null,gi(e,t)),t=!1;var c=tt;e:do try{if(Ge!==0&&je!==null){var g=je,$=Gt;switch(Ge){case 8:uc(),c=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var L=Ge;if(Ge=0,Gt=null,hi(e,g,$,L),a&&fi){c=0;break e}break;default:L=Ge,Ge=0,Gt=null,hi(e,g,$,L)}}Gy(),c=tt;break}catch(Q){xp(e,Q)}while(!0);return t&&e.shellSuspendCounter++,zn=xa=null,Le=i,A.H=l,A.A=r,je===null&&(Ve=null,Ce=0,er()),c}function Gy(){for(;je!==null;)Tp(je)}function qy(e,t){var a=Le;Le|=2;var i=wp(),l=zp();Ve!==e||Ce!==t?(Cr=null,Mr=zt()+500,gi(e,t)):fi=ki(e,t);e:do try{if(Ge!==0&&je!==null){t=je;var r=Gt;t:switch(Ge){case 1:Ge=0,Gt=null,hi(e,t,r,1);break;case 2:case 9:if(Rf(r)){Ge=0,Gt=null,Op(t);break}t=function(){Ge!==2&&Ge!==9||Ve!==e||(Ge=7),gn(e)},r.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Rf(r)?(Ge=0,Gt=null,Op(t)):(Ge=0,Gt=null,hi(e,t,r,7));break;case 5:var c=null;switch(je.tag){case 26:c=je.memoizedState;case 5:case 27:var g=je;if(c?fg(c):g.stateNode.complete){Ge=0,Gt=null;var $=g.sibling;if($!==null)je=$;else{var L=g.return;L!==null?(je=L,Rr(L)):je=null}break t}}Ge=0,Gt=null,hi(e,t,r,5);break;case 6:Ge=0,Gt=null,hi(e,t,r,6);break;case 8:uc(),tt=6;break e;default:throw Error(s(462))}}Yy();break}catch(Q){xp(e,Q)}while(!0);return zn=xa=null,A.H=i,A.A=l,Le=a,je!==null?0:(Ve=null,Ce=0,er(),tt)}function Yy(){for(;je!==null&&!vn();)Tp(je)}function Tp(e){var t=Jd(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Rr(e):je=t}function Op(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Yd(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Yd(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:Os(t);default:Id(a,t),t=je=zf(t,Dn),t=Jd(a,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Rr(e):je=t}function hi(e,t,a,i){zn=xa=null,Os(t),ii=null,Wi=0;var l=t.return;try{if(My(e,l,t,a,Ce)){tt=1,$r(e,Kt(a,e.current)),je=null;return}}catch(r){if(l!==null)throw je=l,r;tt=1,$r(e,Kt(a,e.current)),je=null;return}t.flags&32768?(De||i===1?e=!0:fi||(Ce&536870912)!==0?e=!1:(In=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ap(t,e)):Rr(t)}function Rr(e){var t=e;do{if((t.flags&32768)!==0){Ap(t,In);return}e=t.return;var a=Dy(t.alternate,t,Dn);if(a!==null){je=a;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);tt===0&&(tt=5)}function Ap(e,t){do{var a=Ry(e.alternate,e);if(a!==null){a.flags&=32767,je=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=a}while(e!==null);tt=6,je=null}function Ep(e,t,a,i,l,r,c,g,$){e.cancelPendingCommit=null;do Hr();while(ft!==0);if((Le&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=Fo,$m(e,a,r,c,g,$),e===Ve&&(je=Ve=null,Ce=0),pi=t,ea=e,Rn=a,oc=r,sc=l,yp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zy(un,function(){return kp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,l=u.p,u.p=2,c=Le,Le|=4;try{Hy(e,t,a)}finally{Le=c,u.p=l,A.T=i}}ft=1,_p(),jp(),Mp()}}function _p(){if(ft===1){ft=0;var e=ea,t=pi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var i=u.p;u.p=2;var l=Le;Le|=4;try{cp(t,e);var r=wc,c=hf(e.containerInfo),g=r.focusedElem,$=r.selectionRange;if(c!==g&&g&&g.ownerDocument&&gf(g.ownerDocument.documentElement,g)){if($!==null&&Ko(g)){var L=$.start,Q=$.end;if(Q===void 0&&(Q=L),"selectionStart"in g)g.selectionStart=L,g.selectionEnd=Math.min(Q,g.value.length);else{var F=g.ownerDocument||document,B=F&&F.defaultView||window;if(B.getSelection){var Y=B.getSelection(),fe=g.textContent.length,ye=Math.min($.start,fe),Qe=$.end===void 0?ye:Math.min($.end,fe);!Y.extend&&ye>Qe&&(c=Qe,Qe=ye,ye=c);var M=pf(g,ye),O=pf(g,Qe);if(M&&O&&(Y.rangeCount!==1||Y.anchorNode!==M.node||Y.anchorOffset!==M.offset||Y.focusNode!==O.node||Y.focusOffset!==O.offset)){var N=F.createRange();N.setStart(M.node,M.offset),Y.removeAllRanges(),ye>Qe?(Y.addRange(N),Y.extend(O.node,O.offset)):(N.setEnd(O.node,O.offset),Y.addRange(N))}}}}for(F=[],Y=g;Y=Y.parentNode;)Y.nodeType===1&&F.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<F.length;g++){var I=F[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Kr=!!$c,wc=$c=null}finally{Le=l,u.p=i,A.T=a}}e.current=t,ft=2}}function jp(){if(ft===2){ft=0;var e=ea,t=pi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var i=u.p;u.p=2;var l=Le;Le|=4;try{ip(e,t.alternate,t)}finally{Le=l,u.p=i,A.T=a}}ft=3}}function Mp(){if(ft===4||ft===3){ft=0,Ha();var e=ea,t=pi,a=Rn,i=yp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,pi=ea=null,Cp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Fn=null),_o(a),t=t.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ci,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=A.T,l=u.p,u.p=2,A.T=null;try{for(var r=e.onRecoverableError,c=0;c<i.length;c++){var g=i[c];r(g.value,{componentStack:g.stack})}}finally{A.T=t,u.p=l}}(Rn&3)!==0&&Hr(),gn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===cc?pl++:(pl=0,cc=e):pl=0,gl(0)}}function Cp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ki(t)))}function Hr(){return _p(),jp(),Mp(),kp()}function kp(){if(ft!==5)return!1;var e=ea,t=oc;oc=0;var a=_o(Rn),i=A.T,l=u.p;try{u.p=32>a?32:a,A.T=null,a=sc,sc=null;var r=ea,c=Rn;if(ft=0,pi=ea=null,Rn=0,(Le&6)!==0)throw Error(s(331));var g=Le;if(Le|=4,gp(r.current),fp(r,r.current,c,a),Le=g,gl(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ci,r)}catch{}return!0}finally{u.p=l,A.T=i,Cp(e,t)}}function Dp(e,t,a){t=Kt(a,t),t=Gs(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Di(e,2),gn(e))}function qe(e,t,a){if(e.tag===3)Dp(e,e,a);else for(;t!==null;){if(t.tag===3){Dp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fn===null||!Fn.has(i))){e=Kt(a,e),a=Rd(2),i=Zn(t,a,2),i!==null&&(Hd(a,i,t,e),Di(i,2),gn(i));break}}t=t.return}}function dc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Uy;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(ic=!0,l.add(a),e=Xy.bind(null,e,t,a),t.then(e,e))}function Xy(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Ce&a)===a&&(tt===4||tt===3&&(Ce&62914560)===Ce&&300>zt()-jr?(Le&2)===0&&gi(e,0):lc|=a,di===Ce&&(di=0)),gn(e)}function Rp(e,t){t===0&&(t=Eu()),e=va(e,t),e!==null&&(Di(e,t),gn(e))}function Qy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rp(e,a)}function Vy(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Rp(e,a)}function Zy(e,t){return nt(e,t)}var Nr=null,mi=null,pc=!1,Lr=!1,gc=!1,na=0;function gn(e){e!==mi&&e.next===null&&(mi===null?Nr=mi=e:mi=mi.next=e),Lr=!0,pc||(pc=!0,Jy())}function gl(e,t){if(!gc&&Lr){gc=!0;do for(var a=!1,i=Nr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var c=i.suspendedLanes,g=i.pingedLanes;r=(1<<31-Ht(42|e)+1)-1,r&=l&~(c&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Up(i,r))}else r=Ce,r=ql(i,i===Ve?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||ki(i,r)||(a=!0,Up(i,r));i=i.next}while(a);gc=!1}}function Ky(){Hp()}function Hp(){Lr=pc=!1;var e=0;na!==0&&l0()&&(e=na);for(var t=zt(),a=null,i=Nr;i!==null;){var l=i.next,r=Np(i,t);r===0?(i.next=null,a===null?Nr=l:a.next=l,l===null&&(mi=a)):(a=i,(e!==0||(r&3)!==0)&&(Lr=!0)),i=l}ft!==0&&ft!==5||gl(e),na!==0&&(na=0)}function Np(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-Ht(r),g=1<<c,$=l[c];$===-1?((g&a)===0||(g&i)!==0)&&(l[c]=xm(g,t)):$<=t&&(e.expiredLanes|=g),r&=~g}if(t=Ve,a=Ce,a=ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ki(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&yt(i),_o(a)){case 2:case 8:a=an;break;case 32:a=un;break;case 268435456:a=Au;break;default:a=un}return i=Lp.bind(null,e),a=nt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&yt(i),e.callbackPriority=2,e.callbackNode=null,2}function Lp(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hr()&&e.callbackNode!==a)return null;var i=Ce;return i=ql(e,e===Ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(bp(e,i,t),Np(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Lp.bind(null,e):null)}function Up(e,t){if(Hr())return null;bp(e,t,!0)}function Jy(){o0(function(){(Le&6)!==0?nt(Ll,Ky):Hp()})}function hc(){if(na===0){var e=ti;e===0&&(e=Ul,Ul<<=1,(Ul&261888)===0&&(Ul=256)),na=e}return na}function Bp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function Gp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wy(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Bp((l[Et]||null).action),c=i.submitter;c&&(t=(t=c[Et]||null)?Bp(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var g=new Wl("action","action",null,i,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(na!==0){var $=c?Gp(l,c):new FormData(l);Rs(a,{pending:!0,data:$,method:l.method,action:r},null,$)}}else typeof r=="function"&&(g.preventDefault(),$=c?Gp(l,c):new FormData(l),Rs(a,{pending:!0,data:$,method:l.method,action:r},r,$))},currentTarget:l}]})}}for(var mc=0;mc<Po.length;mc++){var yc=Po[mc],Iy=yc.toLowerCase(),Py=yc[0].toUpperCase()+yc.slice(1);ln(Iy,"on"+Py)}ln(vf,"onAnimationEnd"),ln(bf,"onAnimationIteration"),ln(Sf,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(gy,"onTransitionRun"),ln(hy,"onTransitionStart"),ln(my,"onTransitionCancel"),ln(xf,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function qp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var c=i.length-1;0<=c;c--){var g=i[c],$=g.instance,L=g.currentTarget;if(g=g.listener,$!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=L;try{r(l)}catch(Q){Fl(Q)}l.currentTarget=null,r=$}else for(c=0;c<i.length;c++){if(g=i[c],$=g.instance,L=g.currentTarget,g=g.listener,$!==r&&l.isPropagationStopped())break e;r=g,l.currentTarget=L;try{r(l)}catch(Q){Fl(Q)}l.currentTarget=null,r=$}}}}function Me(e,t){var a=t[jo];a===void 0&&(a=t[jo]=new Set);var i=e+"__bubble";a.has(i)||(Yp(t,e,2,!1),a.add(i))}function vc(e,t,a){var i=0;t&&(i|=4),Yp(a,e,i,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Ur]){e[Ur]=!0,Ru.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||vc(a,!1,e),vc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,vc("selectionchange",!1,t))}}function Yp(e,t,a,i){switch(vg(t)){case 2:var l=A0;break;case 8:l=E0;break;default:l=Dc}a=l.bind(null,t,a,e),l=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Sc(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var g=i.stateNode.containerInfo;if(g===l)break;if(c===4)for(c=i.return;c!==null;){var $=c.tag;if(($===3||$===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;g!==null;){if(c=La(g),c===null)return;if($=c.tag,$===5||$===6||$===26||$===27){i=r=c;continue e}g=g.parentNode}}i=i.return}Zu(function(){var L=r,Q=No(a),F=[];e:{var B=$f.get(e);if(B!==void 0){var Y=Wl,fe=e;switch(e){case"keypress":if(Kl(a)===0)break e;case"keydown":case"keyup":Y=Vm;break;case"focusin":fe="focus",Y=Yo;break;case"focusout":fe="blur",Y=Yo;break;case"beforeblur":case"afterblur":Y=Yo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Jm;break;case vf:case bf:case Sf:Y=Nm;break;case xf:Y=Im;break;case"scroll":case"scrollend":Y=Cm;break;case"wheel":Y=Fm;break;case"copy":case"cut":case"paste":Y=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Pu;break;case"toggle":case"beforetoggle":Y=ty}var ye=(t&4)!==0,Qe=!ye&&(e==="scroll"||e==="scrollend"),M=ye?B!==null?B+"Capture":null:B;ye=[];for(var O=L,N;O!==null;){var I=O;if(N=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||N===null||M===null||(I=Ni(O,M),I!=null&&ye.push(ml(O,I,N))),Qe)break;O=O.return}0<ye.length&&(B=new Y(B,fe,null,a,Q),F.push({event:B,listeners:ye}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&a!==Ho&&(fe=a.relatedTarget||a.fromElement)&&(La(fe)||fe[Na]))break e;if((Y||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(fe=a.relatedTarget||a.toElement,Y=L,fe=fe?La(fe):null,fe!==null&&(Qe=b(fe),ye=fe.tag,fe!==Qe||ye!==5&&ye!==27&&ye!==6)&&(fe=null)):(Y=null,fe=L),Y!==fe)){if(ye=Wu,I="onMouseLeave",M="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Pu,I="onPointerLeave",M="onPointerEnter",O="pointer"),Qe=Y==null?B:Hi(Y),N=fe==null?B:Hi(fe),B=new ye(I,O+"leave",Y,a,Q),B.target=Qe,B.relatedTarget=N,I=null,La(Q)===L&&(ye=new ye(M,O+"enter",fe,a,Q),ye.target=N,ye.relatedTarget=Qe,I=ye),Qe=I,Y&&fe)t:{for(ye=e0,M=Y,O=fe,N=0,I=M;I;I=ye(I))N++;I=0;for(var me=O;me;me=ye(me))I++;for(;0<N-I;)M=ye(M),N--;for(;0<I-N;)O=ye(O),I--;for(;N--;){if(M===O||O!==null&&M===O.alternate){ye=M;break t}M=ye(M),O=ye(O)}ye=null}else ye=null;Y!==null&&Xp(F,B,Y,ye,!1),fe!==null&&Qe!==null&&Xp(F,Qe,fe,ye,!0)}}e:{if(B=L?Hi(L):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var Re=of;else if(lf(B))if(sf)Re=fy;else{Re=cy;var pe=sy}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Ro(L.elementType)&&(Re=of):Re=uy;if(Re&&(Re=Re(e,L))){rf(F,Re,a,Q);break e}pe&&pe(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&Do(B,"number",B.value)}switch(pe=L?Hi(L):window,e){case"focusin":(lf(pe)||pe.contentEditable==="true")&&(Za=pe,Jo=L,Qi=null);break;case"focusout":Qi=Jo=Za=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,mf(F,a,Q);break;case"selectionchange":if(py)break;case"keydown":case"keyup":mf(F,a,Q)}var Te;if(Qo)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Va?nf(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(Fu&&a.locale!=="ko"&&(Va||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Va&&(Te=Ku()):(Bn=Q,Bo="value"in Bn?Bn.value:Bn.textContent,Va=!0)),pe=Br(L,ke),0<pe.length&&(ke=new Iu(ke,e,null,a,Q),F.push({event:ke,listeners:pe}),Te?ke.data=Te:(Te=af(a),Te!==null&&(ke.data=Te)))),(Te=ay?iy(e,a):ly(e,a))&&(ke=Br(L,"onBeforeInput"),0<ke.length&&(pe=new Iu("onBeforeInput","beforeinput",null,a,Q),F.push({event:pe,listeners:ke}),pe.data=Te)),Wy(F,e,L,a,Q)}qp(F,t)})}function ml(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Br(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ni(e,a),l!=null&&i.unshift(ml(e,l,r)),l=Ni(e,t),l!=null&&i.push(ml(e,l,r))),e.tag===3)return i;e=e.return}return[]}function e0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xp(e,t,a,i,l){for(var r=t._reactName,c=[];a!==null&&a!==i;){var g=a,$=g.alternate,L=g.stateNode;if(g=g.tag,$!==null&&$===i)break;g!==5&&g!==26&&g!==27||L===null||($=L,l?(L=Ni(a,r),L!=null&&c.unshift(ml(a,L,$))):l||(L=Ni(a,r),L!=null&&c.push(ml(a,L,$)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(n0,"")}function Vp(e,t){return t=Qp(t),Qp(e)===t}function Xe(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ya(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ya(e,""+i);break;case"className":Xl(e,"class",i);break;case"tabIndex":Xl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Xl(e,a,i);break;case"style":Qu(e,i,r);break;case"data":if(t!=="object"){Xl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Vl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Xe(e,t,"name",l.name,l,null),Xe(e,t,"formEncType",l.formEncType,l,null),Xe(e,t,"formMethod",l.formMethod,l,null),Xe(e,t,"formTarget",l.formTarget,l,null)):(Xe(e,t,"encType",l.encType,l,null),Xe(e,t,"method",l.method,l,null),Xe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Vl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Sn);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Vl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Yl(e,"popover",i);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jm.get(a)||a,Yl(e,a,i))}}function xc(e,t,a,i,l,r){switch(a){case"style":Qu(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ya(e,i):(typeof i=="number"||typeof i=="bigint")&&Ya(e,""+i);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[Et]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Yl(e,a,i)}}}function $t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,r,c,a,null)}}l&&Xe(e,t,"srcSet",a.srcSet,a,null),i&&Xe(e,t,"src",a.src,a,null);return;case"input":Me("invalid",e);var g=r=c=l=null,$=null,L=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":l=Q;break;case"type":c=Q;break;case"checked":$=Q;break;case"defaultChecked":L=Q;break;case"value":r=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,t));break;default:Xe(e,t,i,Q,a,null)}}Gu(e,r,g,$,L,c,l,!1);return;case"select":Me("invalid",e),i=c=r=null;for(l in a)if(a.hasOwnProperty(l)&&(g=a[l],g!=null))switch(l){case"value":r=g;break;case"defaultValue":c=g;break;case"multiple":i=g;default:Xe(e,t,l,g,a,null)}t=r,a=c,e.multiple=!!i,t!=null?qa(e,!!i,t,!1):a!=null&&qa(e,!!i,a,!0);return;case"textarea":Me("invalid",e),r=l=i=null;for(c in a)if(a.hasOwnProperty(c)&&(g=a[c],g!=null))switch(c){case"value":i=g;break;case"defaultValue":l=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(91));break;default:Xe(e,t,c,g,a,null)}Yu(e,i,l,r);return;case"option":for($ in a)if(a.hasOwnProperty($)&&(i=a[$],i!=null))switch($){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Xe(e,t,$,i,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(i=0;i<hl.length;i++)Me(hl[i],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(i=a[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,L,i,a,null)}return;default:if(Ro(t)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&xc(e,t,Q,i,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(i=a[g],i!=null&&Xe(e,t,g,i,a,null))}function a0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,g=null,$=null,L=null,Q=null;for(Y in a){var F=a[Y];if(a.hasOwnProperty(Y)&&F!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":$=F;default:i.hasOwnProperty(Y)||Xe(e,t,Y,null,i,F)}}for(var B in i){var Y=i[B];if(F=a[B],i.hasOwnProperty(B)&&(Y!=null||F!=null))switch(B){case"type":r=Y;break;case"name":l=Y;break;case"checked":L=Y;break;case"defaultChecked":Q=Y;break;case"value":c=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==F&&Xe(e,t,B,Y,i,F)}}ko(e,c,g,$,L,Q,r,l);return;case"select":Y=c=g=B=null;for(r in a)if($=a[r],a.hasOwnProperty(r)&&$!=null)switch(r){case"value":break;case"multiple":Y=$;default:i.hasOwnProperty(r)||Xe(e,t,r,null,i,$)}for(l in i)if(r=i[l],$=a[l],i.hasOwnProperty(l)&&(r!=null||$!=null))switch(l){case"value":B=r;break;case"defaultValue":g=r;break;case"multiple":c=r;default:r!==$&&Xe(e,t,l,r,i,$)}t=g,a=c,i=Y,B!=null?qa(e,!!a,B,!1):!!i!=!!a&&(t!=null?qa(e,!!a,t,!0):qa(e,!!a,a?[]:"",!1));return;case"textarea":Y=B=null;for(g in a)if(l=a[g],a.hasOwnProperty(g)&&l!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Xe(e,t,g,null,i,l)}for(c in i)if(l=i[c],r=a[c],i.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":B=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Xe(e,t,c,l,i,r)}qu(e,B,Y);return;case"option":for(var fe in a)if(B=a[fe],a.hasOwnProperty(fe)&&B!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Xe(e,t,fe,null,i,B)}for($ in i)if(B=i[$],Y=a[$],i.hasOwnProperty($)&&B!==Y&&(B!=null||Y!=null))switch($){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Xe(e,t,$,B,i,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)B=a[ye],a.hasOwnProperty(ye)&&B!=null&&!i.hasOwnProperty(ye)&&Xe(e,t,ye,null,i,B);for(L in i)if(B=i[L],Y=a[L],i.hasOwnProperty(L)&&B!==Y&&(B!=null||Y!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Xe(e,t,L,B,i,Y)}return;default:if(Ro(t)){for(var Qe in a)B=a[Qe],a.hasOwnProperty(Qe)&&B!==void 0&&!i.hasOwnProperty(Qe)&&xc(e,t,Qe,void 0,i,B);for(Q in i)B=i[Q],Y=a[Q],!i.hasOwnProperty(Q)||B===Y||B===void 0&&Y===void 0||xc(e,t,Q,B,i,Y);return}}for(var M in a)B=a[M],a.hasOwnProperty(M)&&B!=null&&!i.hasOwnProperty(M)&&Xe(e,t,M,null,i,B);for(F in i)B=i[F],Y=a[F],!i.hasOwnProperty(F)||B===Y||B==null&&Y==null||Xe(e,t,F,B,i,Y)}function Zp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function i0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,c=l.initiatorType,g=l.duration;if(r&&g&&Zp(c)){for(c=0,g=l.responseEnd,i+=1;i<a.length;i++){var $=a[i],L=$.startTime;if(L>g)break;var Q=$.transferSize,F=$.initiatorType;Q&&Zp(F)&&($=$.responseEnd,c+=Q*($<g?1:(g-L)/($-L)))}if(--i,t+=8*(r+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $c=null,wc=null;function Gr(e){return e.nodeType===9?e:e.ownerDocument}function Kp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tc=null;function l0(){var e=window.event;return e&&e.type==="popstate"?e===Tc?!1:(Tc=e,!0):(Tc=null,!1)}var Wp=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(e){return Ip.resolve(null).then(e).catch(s0)}:Wp;function s0(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function Pp(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Si(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")yl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yl(a);for(var r=a.firstChild;r;){var c=r.nextSibling,g=r.nodeName;r[Ri]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&yl(e.ownerDocument.body);a=l}while(a);Si(t)}function Fp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oc(a),Mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function c0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ri])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function u0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ft(e.nextSibling),e===null))return null;return e}function eg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function Ac(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _c=null;function tg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ft(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ng(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ag(e,t,a){switch(t=Gr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mo(e)}var en=new Map,ig=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hn=u.d;u.d={f:d0,r:p0,D:g0,C:h0,L:m0,m:y0,X:b0,S:v0,M:S0};function d0(){var e=Hn.f(),t=kr();return e||t}function p0(e){var t=Ua(e);t!==null&&t.tag===5&&t.type==="form"?xd(t):Hn.r(e)}var yi=typeof document>"u"?null:document;function lg(e,t,a){var i=yi;if(i&&typeof t=="string"&&t){var l=Vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),ig.has(l)||(ig.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function g0(e){Hn.D(e),lg("dns-prefetch",e,null)}function h0(e,t){Hn.C(e,t),lg("preconnect",e,t)}function m0(e,t,a){Hn.L(e,t,a);var i=yi;if(i&&e&&t){var l='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Vt(a.imageSizes)+'"]')):l+='[href="'+Vt(e)+'"]';var r=l;switch(t){case"style":r=vi(e);break;case"script":r=bi(e)}en.has(r)||(e=P({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),en.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(vl(r))||t==="script"&&i.querySelector(bl(r))||(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function y0(e,t){Hn.m(e,t);var a=yi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Vt(i)+'"][href="'+Vt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=bi(e)}if(!en.has(r)&&(e=P({rel:"modulepreload",href:e},t),en.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(r)))return}i=a.createElement("link"),$t(i,"link",e),gt(i),a.head.appendChild(i)}}}function v0(e,t,a){Hn.S(e,t,a);var i=yi;if(i&&e){var l=Ba(i).hoistableStyles,r=vi(e);t=t||"default";var c=l.get(r);if(!c){var g={loading:0,preload:null};if(c=i.querySelector(vl(r)))g.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":t},a),(a=en.get(r))&&jc(e,a);var $=c=i.createElement("link");gt($),$t($,"link",e),$._p=new Promise(function(L,Q){$.onload=L,$.onerror=Q}),$.addEventListener("load",function(){g.loading|=1}),$.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Yr(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:g},l.set(r,c)}}}function b0(e,t){Hn.X(e,t);var a=yi;if(a&&e){var i=Ba(a).hoistableScripts,l=bi(e),r=i.get(l);r||(r=a.querySelector(bl(l)),r||(e=P({src:e,async:!0},t),(t=en.get(l))&&Mc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function S0(e,t){Hn.M(e,t);var a=yi;if(a&&e){var i=Ba(a).hoistableScripts,l=bi(e),r=i.get(l);r||(r=a.querySelector(bl(l)),r||(e=P({src:e,async:!0,type:"module"},t),(t=en.get(l))&&Mc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function rg(e,t,a,i){var l=(l=K.current)?qr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=vi(a.href),a=Ba(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vi(a.href);var r=Ba(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(vl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),en.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},en.set(e,a),r||x0(l,e,a,c.state))),t&&i===null)throw Error(s(528,""));return c}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bi(a),a=Ba(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vi(e){return'href="'+Vt(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function og(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function x0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$t(t,"link",a),gt(t),e.head.appendChild(t))}function bi(e){return'[src="'+Vt(e)+'"]'}function bl(e){return"script[async]"+e}function sg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(i)return t.instance=i,gt(i),i;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gt(i),$t(i,"style",l),Yr(i,a.precedence,e),t.instance=i;case"stylesheet":l=vi(a.href);var r=e.querySelector(vl(l));if(r)return t.state.loading|=4,t.instance=r,gt(r),r;i=og(a),(l=en.get(l))&&jc(i,l),r=(e.ownerDocument||e).createElement("link"),gt(r);var c=r;return c._p=new Promise(function(g,$){c.onload=g,c.onerror=$}),$t(r,"link",i),t.state.loading|=4,Yr(r,a.precedence,e),t.instance=r;case"script":return r=bi(a.src),(l=e.querySelector(bl(r)))?(t.instance=l,gt(l),l):(i=a,(l=en.get(r))&&(i=P({},a),Mc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),gt(l),$t(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Yr(i,a.precedence,e));return t.instance}function Yr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,c=0;c<i.length;c++){var g=i[c];if(g.dataset.precedence===t)r=g;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xr=null;function cg(e,t,a){if(Xr===null){var i=new Map,l=Xr=new Map;l.set(a,i)}else l=Xr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Ri]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var g=i.get(c);g?g.push(r):i.set(c,[r])}}return i}function ug(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function $0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function w0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=vi(i.href),r=t.querySelector(vl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,gt(r);return}r=t.ownerDocument||t,i=og(i),(l=en.get(l))&&jc(i,l),r=r.createElement("link"),gt(r);var c=r;c._p=new Promise(function(g,$){c.onload=g,c.onerror=$}),$t(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Qr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Cc=0;function z0(e,t){return e.stylesheets&&e.count===0&&Zr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Zr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*i0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Qr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Zr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(T0,e),Vr=null,Qr.call(e))}function T0(e,t){if(!(t.state.loading&4)){var a=Vr.get(e);if(a)var i=a.get(null);else{a=new Map,Vr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}l=t.instance,c=l.getAttribute("data-precedence"),r=a.get(c)||i,r===i&&a.set(null,l),a.set(c,l),this.count++,i=Qr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Sl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function O0(e,t,a,i,l,r,c,g,$){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ao(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.hiddenUpdates=Ao(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=$,this.incompleteTransitions=new Map}function dg(e,t,a,i,l,r,c,g,$,L,Q,F){return e=new O0(e,t,a,c,$,L,Q,F,g),t=1,r===!0&&(t|=24),r=Lt(3,null,null,t),e.current=r,r.stateNode=e,t=fs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},hs(r),e}function pg(e){return e?(e=Wa,e):Wa}function gg(e,t,a,i,l,r){l=pg(l),i.context===null?i.context=l:i.pendingContext=l,i=Vn(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Zn(e,i,t),a!==null&&(Dt(a,e,t),Pi(a,e,t))}function hg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function kc(e,t){hg(e,t),(e=e.alternate)&&hg(e,t)}function mg(e){if(e.tag===13||e.tag===31){var t=va(e,67108864);t!==null&&Dt(t,e,67108864),kc(e,67108864)}}function yg(e){if(e.tag===13||e.tag===31){var t=Yt();t=Eo(t);var a=va(e,t);a!==null&&Dt(a,e,t),kc(e,t)}}var Kr=!0;function A0(e,t,a,i){var l=A.T;A.T=null;var r=u.p;try{u.p=2,Dc(e,t,a,i)}finally{u.p=r,A.T=l}}function E0(e,t,a,i){var l=A.T;A.T=null;var r=u.p;try{u.p=8,Dc(e,t,a,i)}finally{u.p=r,A.T=l}}function Dc(e,t,a,i){if(Kr){var l=Rc(i);if(l===null)Sc(e,t,i,Jr,a),bg(e,i);else if(j0(l,e,t,a,i))i.stopPropagation();else if(bg(e,i),t&4&&-1<_0.indexOf(e)){for(;l!==null;){var r=Ua(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=pa(r.pendingLanes);if(c!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;c;){var $=1<<31-Ht(c);g.entanglements[1]|=$,c&=~$}gn(r),(Le&6)===0&&(Mr=zt()+500,gl(0))}}break;case 31:case 13:g=va(r,2),g!==null&&Dt(g,r,2),kr(),kc(r,2)}if(r=Rc(i),r===null&&Sc(e,t,i,Jr,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else Sc(e,t,i,null,a)}}function Rc(e){return e=No(e),Hc(e)}var Jr=null;function Hc(e){if(Jr=null,e=La(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=D(t),e!==null)return e;e=null}else if(a===31){if(e=q(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(da()){case Ll:return 2;case an:return 8;case un:case hm:return 32;case Au:return 268435456;default:return 32}default:return 32}}var Nc=!1,ia=null,la=null,ra=null,xl=new Map,$l=new Map,oa=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(t.pointerId)}}function wl(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Ua(t),t!==null&&mg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function j0(e,t,a,i,l){switch(t){case"focusin":return ia=wl(ia,e,t,a,i,l),!0;case"dragenter":return la=wl(la,e,t,a,i,l),!0;case"mouseover":return ra=wl(ra,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return xl.set(r,wl(xl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,$l.set(r,wl($l.get(r)||null,e,t,a,i,l)),!0}return!1}function Sg(e){var t=La(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=D(a),t!==null){e.blockedOn=t,ku(e.priority,function(){yg(a)});return}}else if(t===31){if(t=q(a),t!==null){e.blockedOn=t,ku(e.priority,function(){yg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Ho=i,a.target.dispatchEvent(i),Ho=null}else return t=Ua(a),t!==null&&mg(t),e.blockedOn=a,!1;t.shift()}return!0}function xg(e,t,a){Wr(e)&&a.delete(t)}function M0(){Nc=!1,ia!==null&&Wr(ia)&&(ia=null),la!==null&&Wr(la)&&(la=null),ra!==null&&Wr(ra)&&(ra=null),xl.forEach(xg),$l.forEach(xg)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Nc||(Nc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,M0)))}var Pr=null;function $g(e){Pr!==e&&(Pr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Pr===e&&(Pr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Hc(i||a)===null)continue;break}var r=Ua(a);r!==null&&(e.splice(t,3),t-=3,Rs(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Si(e){function t($){return Ir($,e)}ia!==null&&Ir(ia,e),la!==null&&Ir(la,e),ra!==null&&Ir(ra,e),xl.forEach(t),$l.forEach(t);for(var a=0;a<oa.length;a++){var i=oa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(a=oa[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],c=l[Et]||null;if(typeof r=="function")c||$g(a);else if(c){var g=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[Et]||null)g=c.formAction;else if(Hc(l)!==null)continue}else g=c.action;typeof g=="function"?a[i+1]=g:(a.splice(i,3),i-=3),$g(a)}}}function wg(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Lc(e){this._internalRoot=e}Fr.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Yt();gg(a,i,e,t,null,null)},Fr.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gg(e.current,2,null,e,null,null),kr(),t[Na]=null}};function Fr(e){this._internalRoot=e}Fr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<oa.length&&t!==0&&t<oa[a].priority;a++);oa.splice(a,0,e),a===0&&Sg(e)}};var zg=o.version;if(zg!=="19.2.3")throw Error(s(527,zg,"19.2.3"));u.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=j(t),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var C0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{Ci=eo.inject(C0),Rt=eo}catch{}}return Tl.createRoot=function(e,t){if(!m(e))throw Error(s(299));var a=!1,i="",l=Md,r=Cd,c=kd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=dg(e,1,!1,null,null,a,i,null,l,r,c,wg),e[Na]=t.current,bc(e),new Lc(t)},Tl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(s(299));var i=!1,l="",r=Md,c=Cd,g=kd,$=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&($=a.formState)),t=dg(e,1,!0,t,a??null,i,l,$,r,c,g,wg),t.context=pg(null),a=t.current,i=Yt(),i=Eo(i),l=Vn(i),l.callback=null,Zn(a,l,i),a=i,t.current.lanes=a,Di(t,a),gn(t),e[Na]=t.current,bc(e),new Fr(t)},Tl.version="19.2.3",Tl}var Dg;function Y0(){if(Dg)return Gc.exports;Dg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Gc.exports=q0(),Gc.exports}var X0=Y0();const Q0=yu(X0);var mt=function(){return mt=Object.assign||function(o){for(var f,s=1,m=arguments.length;s<m;s++){f=arguments[s];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(o[b]=f[b])}return o},mt.apply(this,arguments)};function Ti(n,o,f){if(f||arguments.length===2)for(var s=0,m=o.length,b;s<m;s++)(b||!(s in o))&&(b||(b=Array.prototype.slice.call(o,0,s)),b[s]=o[s]);return n.concat(b||Array.prototype.slice.call(o))}var Je="-ms-",Ml="-moz-",Ue="-webkit-",zh="comm",bo="rule",vu="decl",V0="@import",Z0="@namespace",Th="@keyframes",K0="@layer",Oh=Math.abs,bu=String.fromCharCode,ou=Object.assign;function J0(n,o){return dt(n,0)^45?(((o<<2^dt(n,0))<<2^dt(n,1))<<2^dt(n,2))<<2^dt(n,3):0}function Ah(n){return n.trim()}function Nn(n,o){return(n=o.exec(n))?n[0]:n}function Oe(n,o,f){return n.replace(o,f)}function ao(n,o,f){return n.indexOf(o,f)}function dt(n,o){return n.charCodeAt(o)|0}function ka(n,o,f){return n.slice(o,f)}function sn(n){return n.length}function Eh(n){return n.length}function _l(n,o){return o.push(n),n}function W0(n,o){return n.map(o).join("")}function Rg(n,o){return n.filter(function(f){return!Nn(f,o)})}var So=1,Oi=1,_h=0,nn=0,ct=0,ji="";function xo(n,o,f,s,m,b,D,q){return{value:n,root:o,parent:f,type:s,props:m,children:b,line:So,column:Oi,length:D,return:"",siblings:q}}function ca(n,o){return ou(xo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function xi(n){for(;n.root;)n=ca(n.root,{children:[n]});_l(n,n.siblings)}function I0(){return ct}function P0(){return ct=nn>0?dt(ji,--nn):0,Oi--,ct===10&&(Oi=1,So--),ct}function cn(){return ct=nn<_h?dt(ji,nn++):0,Oi++,ct===10&&(Oi=1,So++),ct}function ua(){return dt(ji,nn)}function io(){return nn}function $o(n,o){return ka(ji,n,o)}function Cl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F0(n){return So=Oi=1,_h=sn(ji=n),nn=0,[]}function ev(n){return ji="",n}function Qc(n){return Ah($o(nn-1,su(n===91?n+2:n===40?n+1:n)))}function tv(n){for(;(ct=ua())&&ct<33;)cn();return Cl(n)>2||Cl(ct)>3?"":" "}function nv(n,o){for(;--o&&cn()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return $o(n,io()+(o<6&&ua()==32&&cn()==32))}function su(n){for(;cn();)switch(ct){case n:return nn;case 34:case 39:n!==34&&n!==39&&su(ct);break;case 40:n===41&&su(n);break;case 92:cn();break}return nn}function av(n,o){for(;cn()&&n+ct!==57;)if(n+ct===84&&ua()===47)break;return"/*"+$o(o,nn-1)+"*"+bu(n===47?n:cn())}function iv(n){for(;!Cl(ua());)cn();return $o(n,nn)}function lv(n){return ev(lo("",null,null,null,[""],n=F0(n),0,[0],n))}function lo(n,o,f,s,m,b,D,q,C){for(var j=0,Z=0,P=D,ie=0,re=0,le=0,X=1,ve=1,ue=1,ge=0,ne="",ce=m,w=b,z=s,x=ne;ve;)switch(le=ge,ge=cn()){case 40:if(le!=108&&dt(x,P-1)==58){ao(x+=Oe(Qc(ge),"&","&\f"),"&\f",Oh(j?q[j-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:x+=Qc(ge);break;case 9:case 10:case 13:case 32:x+=tv(le);break;case 92:x+=nv(io()-1,7);continue;case 47:switch(ua()){case 42:case 47:_l(rv(av(cn(),io()),o,f,C),C),(Cl(le||1)==5||Cl(ua()||1)==5)&&sn(x)&&ka(x,-1,void 0)!==" "&&(x+=" ");break;default:x+="/"}break;case 123*X:q[j++]=sn(x)*ue;case 125*X:case 59:case 0:switch(ge){case 0:case 125:ve=0;case 59+Z:ue==-1&&(x=Oe(x,/\f/g,"")),re>0&&(sn(x)-P||X===0&&le===47)&&_l(re>32?Ng(x+";",s,f,P-1,C):Ng(Oe(x," ","")+";",s,f,P-2,C),C);break;case 59:x+=";";default:if(_l(z=Hg(x,o,f,j,Z,m,q,ne,ce=[],w=[],P,b),b),ge===123)if(Z===0)lo(x,o,z,z,ce,b,P,q,w);else{switch(ie){case 99:if(dt(x,3)===110)break;case 108:if(dt(x,2)===97)break;default:Z=0;case 100:case 109:case 115:}Z?lo(n,z,z,s&&_l(Hg(n,z,z,0,0,m,q,ne,m,ce=[],P,w),w),m,w,P,q,s?ce:w):lo(x,z,z,z,[""],w,0,q,w)}}j=Z=re=0,X=ue=1,ne=x="",P=D;break;case 58:P=1+sn(x),re=le;default:if(X<1){if(ge==123)--X;else if(ge==125&&X++==0&&P0()==125)continue}switch(x+=bu(ge),ge*X){case 38:ue=Z>0?1:(x+="\f",-1);break;case 44:q[j++]=(sn(x)-1)*ue,ue=1;break;case 64:ua()===45&&(x+=Qc(cn())),ie=ua(),Z=P=sn(ne=x+=iv(io())),ge++;break;case 45:le===45&&sn(x)==2&&(X=0)}}return b}function Hg(n,o,f,s,m,b,D,q,C,j,Z,P){for(var ie=m-1,re=m===0?b:[""],le=Eh(re),X=0,ve=0,ue=0;X<s;++X)for(var ge=0,ne=ka(n,ie+1,ie=Oh(ve=D[X])),ce=n;ge<le;++ge)(ce=Ah(ve>0?re[ge]+" "+ne:Oe(ne,/&\f/g,re[ge])))&&(C[ue++]=ce);return xo(n,o,f,m===0?bo:q,C,j,Z,P)}function rv(n,o,f,s){return xo(n,o,f,zh,bu(I0()),ka(n,2,-2),0,s)}function Ng(n,o,f,s,m){return xo(n,o,f,vu,ka(n,0,s),ka(n,s+1,-1),s,m)}function jh(n,o,f){switch(J0(n,o)){case 5103:return Ue+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ue+n+n;case 4855:return Ue+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ml+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+n+Ml+n+Je+n+n;case 5936:switch(dt(n,o+11)){case 114:return Ue+n+Je+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ue+n+Je+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ue+n+Je+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ue+n+Je+n+n;case 6165:return Ue+n+Je+"flex-"+n+n;case 5187:return Ue+n+Oe(n,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Je+"flex-$1$2")+n;case 5443:return Ue+n+Je+"flex-item-"+Oe(n,/flex-|-self/g,"")+(Nn(n,/flex-|baseline/)?"":Je+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return Ue+n+Je+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ue+n+Je+Oe(n,"shrink","negative")+n;case 5292:return Ue+n+Je+Oe(n,"basis","preferred-size")+n;case 6060:return Ue+"box-"+Oe(n,"-grow","")+Ue+n+Je+Oe(n,"grow","positive")+n;case 4554:return Ue+Oe(n,/([^-])(transform)/g,"$1"+Ue+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Je+"flex-pack:$3"),/space-between/,"justify")+Ue+n+n;case 4200:if(!Nn(n,/flex-|baseline/))return Je+"grid-column-align"+ka(n,o)+n;break;case 2592:case 3360:return Je+Oe(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(s,m){return o=m,Nn(s.props,/grid-\w+-end/)})?~ao(n+(f=f[o].value),"span",0)?n:Je+Oe(n,"-start","")+n+Je+"grid-row-span:"+(~ao(f,"span",0)?Nn(f,/\d+/):+Nn(f,/\d+/)-+Nn(n,/\d+/))+";":Je+Oe(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(s){return Nn(s.props,/grid-\w+-start/)})?n:Je+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,Ue+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(n)-1-o>6)switch(dt(n,o+1)){case 109:if(dt(n,o+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+Ml+(dt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~ao(n,"stretch",0)?jh(Oe(n,"stretch","fill-available"),o,f)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,m,b,D,q,C,j){return Je+m+":"+b+j+(D?Je+m+"-span:"+(q?C:+C-+b)+j:"")+n});case 4949:if(dt(n,o+6)===121)return Oe(n,":",":"+Ue)+n;break;case 6444:switch(dt(n,dt(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(dt(n,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Je+"$2box$3")+n;case 100:return Oe(n,":",":"+Je)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function co(n,o){for(var f="",s=0;s<n.length;s++)f+=o(n[s],s,n,o)||"";return f}function ov(n,o,f,s){switch(n.type){case K0:if(n.children.length)break;case V0:case Z0:case vu:return n.return=n.return||n.value;case zh:return"";case Th:return n.return=n.value+"{"+co(n.children,s)+"}";case bo:if(!sn(n.value=n.props.join(",")))return""}return sn(f=co(n.children,s))?n.return=n.value+"{"+f+"}":""}function sv(n){var o=Eh(n);return function(f,s,m,b){for(var D="",q=0;q<o;q++)D+=n[q](f,s,m,b)||"";return D}}function cv(n){return function(o){o.root||(o=o.return)&&n(o)}}function uv(n,o,f,s){if(n.length>-1&&!n.return)switch(n.type){case vu:n.return=jh(n.value,n.length,f);return;case Th:return co([ca(n,{value:Oe(n.value,"@","@"+Ue)})],s);case bo:if(n.length)return W0(f=n.props,function(m){switch(Nn(m,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xi(ca(n,{props:[Oe(m,/:(read-\w+)/,":"+Ml+"$1")]})),xi(ca(n,{props:[m]})),ou(n,{props:Rg(f,s)});break;case"::placeholder":xi(ca(n,{props:[Oe(m,/:(plac\w+)/,":"+Ue+"input-$1")]})),xi(ca(n,{props:[Oe(m,/:(plac\w+)/,":"+Ml+"$1")]})),xi(ca(n,{props:[Oe(m,/:(plac\w+)/,Je+"input-$1")]})),xi(ca(n,{props:[m]})),ou(n,{props:Rg(f,s)});break}return""})}}var fv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},Ai=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",Mh="active",Ch="data-styled-version",wo="6.3.8",Su=`/*!sc*/
`,uo=typeof window<"u"&&typeof document<"u",hn=pt.createContext===void 0,dv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),pv={},zo=Object.freeze([]),Ei=Object.freeze({});function kh(n,o,f){return f===void 0&&(f=Ei),n.theme!==f.theme&&n.theme||o||f.theme}var Dh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),gv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hv=/(^-|-$)/g;function Lg(n){return n.replace(gv,"-").replace(hv,"")}var mv=/(a)(d)/gi,Ug=function(n){return String.fromCharCode(n+(n>25?39:97))};function cu(n){var o,f="";for(o=Math.abs(n);o>52;o=o/52|0)f=Ug(o%52)+f;return(Ug(o%52)+f).replace(mv,"$1-$2")}var Vc,$i=function(n,o){for(var f=o.length;f;)n=33*n^o.charCodeAt(--f);return n},Rh=function(n){return $i(5381,n)};function xu(n){return cu(Rh(n)>>>0)}function yv(n){return n.displayName||n.name||"Component"}function Zc(n){return typeof n=="string"&&!0}var Hh=typeof Symbol=="function"&&Symbol.for,Nh=Hh?Symbol.for("react.memo"):60115,vv=Hh?Symbol.for("react.forward_ref"):60112,bv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xv=((Vc={})[vv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[Nh]=Lh,Vc);function Bg(n){return("type"in(o=n)&&o.type.$$typeof)===Nh?Lh:"$$typeof"in n?xv[n.$$typeof]:bv;var o}var $v=Object.defineProperty,wv=Object.getOwnPropertyNames,Gg=Object.getOwnPropertySymbols,zv=Object.getOwnPropertyDescriptor,Tv=Object.getPrototypeOf,qg=Object.prototype;function Uh(n,o,f){if(typeof o!="string"){if(qg){var s=Tv(o);s&&s!==qg&&Uh(n,s,f)}var m=wv(o);Gg&&(m=m.concat(Gg(o)));for(var b=Bg(n),D=Bg(o),q=0;q<m.length;++q){var C=m[q];if(!(C in Sv||f&&f[C]||D&&C in D||b&&C in b)){var j=zv(o,C);try{$v(n,C,j)}catch{}}}}return n}function Da(n){return typeof n=="function"}function $u(n){return typeof n=="object"&&"styledComponentId"in n}function Ca(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function fo(n,o){if(n.length===0)return"";for(var f=n[0],s=1;s<n.length;s++)f+=n[s];return f}function kl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function uu(n,o,f){if(f===void 0&&(f=!1),!f&&!kl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=uu(n[s],o[s]);else if(kl(o))for(var s in o)n[s]=uu(n[s],o[s]);return n}function wu(n,o){Object.defineProperty(n,"toString",{value:o})}function Ra(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Ov=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},n.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,m=s.length,b=m;o>=b;)if((b<<=1)<0)throw Ra(16,"".concat(o));this.groupSizes=new Uint32Array(b),this.groupSizes.set(s),this.length=b;for(var D=m;D<b;D++)this.groupSizes[D]=0}for(var q=this.indexOfGroup(o+1),C=(D=0,f.length);D<C;D++)this.tag.insertRule(q,f[D])&&(this.groupSizes[o]++,q++)},n.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),m=s+f;this.groupSizes[o]=0;for(var b=s;b<m;b++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],m=this.indexOfGroup(o),b=m+s,D=m;D<b;D++)f+="".concat(this.tag.getRule(D)).concat(Su);return f},n})(),ro=new Map,po=new Map,oo=1,wi=function(n){if(ro.has(n))return ro.get(n);for(;po.has(oo);)oo++;var o=oo++;return ro.set(n,o),po.set(o,n),o},Av=function(n,o){oo=o+1,ro.set(n,o),po.set(o,n)},Ev="style[".concat(Ai,"][").concat(Ch,'="').concat(wo,'"]'),_v=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jv=function(n,o,f){for(var s,m=f.split(","),b=0,D=m.length;b<D;b++)(s=m[b])&&n.registerName(o,s)},Mv=function(n,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(Su),m=[],b=0,D=s.length;b<D;b++){var q=s[b].trim();if(q){var C=q.match(_v);if(C){var j=0|parseInt(C[1],10),Z=C[2];j!==0&&(Av(Z,j),jv(n,Z,C[3]),n.getTag().insertRules(j,m)),m.length=0}else m.push(q)}}},Yg=function(n){for(var o=document.querySelectorAll(Ev),f=0,s=o.length;f<s;f++){var m=o[f];m&&m.getAttribute(Ai)!==Mh&&(Mv(n,m),m.parentNode&&m.parentNode.removeChild(m))}};function Cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bh=function(n){var o=document.head,f=n||o,s=document.createElement("style"),m=(function(q){var C=Array.from(q.querySelectorAll("style[".concat(Ai,"]")));return C[C.length-1]})(f),b=m!==void 0?m.nextSibling:null;s.setAttribute(Ai,Mh),s.setAttribute(Ch,wo);var D=Cv();return D&&s.setAttribute("nonce",D),f.insertBefore(s,b),s},kv=(function(){function n(o){this.element=Bh(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,m=0,b=s.length;m<b;m++){var D=s[m];if(D.ownerNode===f)return D}throw Ra(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},n})(),Dv=(function(){function n(o){this.element=Bh(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Rv=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Xg=uo,Hv={isServer:!uo,useCSSOMInjection:!dv},go=(function(){function n(o,f,s){o===void 0&&(o=Ei),f===void 0&&(f={});var m=this;this.options=mt(mt({},Hv),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&uo&&Xg&&(Xg=!1,Yg(this)),wu(this,function(){return(function(b){for(var D=b.getTag(),q=D.length,C="",j=function(P){var ie=(function(ue){return po.get(ue)})(P);if(ie===void 0)return"continue";var re=b.names.get(ie),le=D.getGroup(P);if(re===void 0||!re.size||le.length===0)return"continue";var X="".concat(Ai,".g").concat(P,'[id="').concat(ie,'"]'),ve="";re!==void 0&&re.forEach(function(ue){ue.length>0&&(ve+="".concat(ue,","))}),C+="".concat(le).concat(X,'{content:"').concat(ve,'"}').concat(Su)},Z=0;Z<q;Z++)j(Z);return C})(m)})}return n.registerId=function(o){return wi(o)},n.prototype.rehydrate=function(){!this.server&&uo&&Yg(this)},n.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new n(mt(mt({},this.options),o),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var s=f.useCSSOMInjection,m=f.target;return f.isServer?new Rv(m):s?new kv(m):new Dv(m)})(this.options),new Ov(o)));var o},n.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},n.prototype.registerName=function(o,f){if(wi(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},n.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(wi(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(wi(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Nv=/&/g,zi=47;function Qg(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,f=0,s=0,m=!1,b=0;b<o;b++){var D=n.charCodeAt(b);if(s!==0||m||D!==zi||n.charCodeAt(b+1)!==42)if(m)D===42&&n.charCodeAt(b+1)===zi&&(m=!1,b++);else if(D!==34&&D!==39||b!==0&&n.charCodeAt(b-1)===92){if(s===0){if(D===123)f++;else if(D===125&&--f<0)return!0}}else s===0?s=D:s===D&&(s=0);else m=!0,b++}return f!==0||s!==0}function Gh(n,o){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Gh(f.children,o)),f})}function Lv(n){var o,f,s,m=Ei,b=m.options,D=b===void 0?Ei:b,q=m.plugins,C=q===void 0?zo:q,j=function(ie,re,le){return le.startsWith(f)&&le.endsWith(f)&&le.replaceAll(f,"").length>0?".".concat(o):ie},Z=C.slice();Z.push(function(ie){ie.type===bo&&ie.value.includes("&")&&(ie.props[0]=ie.props[0].replace(Nv,f).replace(s,j))}),D.prefix&&Z.push(uv),Z.push(ov);var P=function(ie,re,le,X){re===void 0&&(re=""),le===void 0&&(le=""),X===void 0&&(X="&"),o=X,f=re,s=new RegExp("\\".concat(f,"\\b"),"g");var ve=(function(ne){if(!Qg(ne))return ne;for(var ce=ne.length,w="",z=0,x=0,k=0,_=!1,v=0;v<ce;v++){var G=ne.charCodeAt(v);if(k!==0||_||G!==zi||ne.charCodeAt(v+1)!==42)if(_)G===42&&ne.charCodeAt(v+1)===zi&&(_=!1,v++);else if(G!==34&&G!==39||v!==0&&ne.charCodeAt(v-1)===92){if(k===0)if(G===123)x++;else if(G===125){if(--x<0){for(var V=v+1;V<ce;){var H=ne.charCodeAt(V);if(H===59||H===10)break;V++}V<ce&&ne.charCodeAt(V)===59&&V++,x=0,v=V-1,z=V;continue}x===0&&(w+=ne.substring(z,v+1),z=v+1)}else G===59&&x===0&&(w+=ne.substring(z,v+1),z=v+1)}else k===0?k=G:k===G&&(k=0);else _=!0,v++}if(z<ce){var J=ne.substring(z);Qg(J)||(w+=J)}return w})((function(ne){if(ne.indexOf("//")===-1)return ne;for(var ce=ne.length,w=[],z=0,x=0,k=0,_=0;x<ce;){var v=ne.charCodeAt(x);if(v!==34&&v!==39||x!==0&&ne.charCodeAt(x-1)===92)if(k===0)if(v===40&&x>=3&&(32|ne.charCodeAt(x-1))==108&&(32|ne.charCodeAt(x-2))==114&&(32|ne.charCodeAt(x-3))==117)_=1,x++;else if(_>0)v===41?_--:v===40&&_++,x++;else if(v===zi&&x+1<ce&&ne.charCodeAt(x+1)===zi){for(x>z&&w.push(ne.substring(z,x));x<ce&&ne.charCodeAt(x)!==10;)x++;z=x}else x++;else x++;else k===0?k=v:k===v&&(k=0),x++}return z===0?ne:(z<ce&&w.push(ne.substring(z)),w.join(""))})(ie)),ue=lv(le||re?"".concat(le," ").concat(re," { ").concat(ve," }"):ve);D.namespace&&(ue=Gh(ue,D.namespace));var ge=[];return co(ue,sv(Z.concat(cv(function(ne){return ge.push(ne)})))),ge};return P.hash=C.length?C.reduce(function(ie,re){return re.name||Ra(15),$i(ie,re.name)},5381).toString():"",P}var Uv=new go,fu=Lv(),du={shouldForwardProp:void 0,styleSheet:Uv,stylis:fu},qh=hn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(du)}}:pt.createContext(du);qh.Consumer;hn||pt.createContext(void 0);function pu(){return hn?du:pt.useContext(qh)}var Yh=(function(){function n(o,f){var s=this;this.inject=function(m,b){b===void 0&&(b=fu);var D=s.name+b.hash;m.hasNameForId(s.id,D)||m.insertRules(s.id,D,b(s.rules,D,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,wu(this,function(){throw Ra(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=fu),this.name+o.hash},n})();function Bv(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in fv||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var Gv=function(n){return n>="A"&&n<="Z"};function Vg(n){for(var o="",f=0;f<n.length;f++){var s=n[f];if(f===1&&s==="-"&&n[0]==="-")return n;Gv(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var Xh=function(n){return n==null||n===!1||n===""},Qh=function(n){var o=[];for(var f in n){var s=n[f];n.hasOwnProperty(f)&&!Xh(s)&&(Array.isArray(s)&&s.isCss||Da(s)?o.push("".concat(Vg(f),":"),s,";"):kl(s)?o.push.apply(o,Ti(Ti(["".concat(f," {")],Qh(s),!1),["}"],!1)):o.push("".concat(Vg(f),": ").concat(Bv(f,s),";")))}return o};function fa(n,o,f,s){if(Xh(n))return[];if($u(n))return[".".concat(n.styledComponentId)];if(Da(n)){if(!Da(b=n)||b.prototype&&b.prototype.isReactComponent||!o)return[n];var m=n(o);return fa(m,o,f,s)}var b;return n instanceof Yh?f?(n.inject(f,s),[n.getName(s)]):[n]:kl(n)?Qh(n):Array.isArray(n)?Array.prototype.concat.apply(zo,n.map(function(D){return fa(D,o,f,s)})):[n.toString()]}function Vh(n){for(var o=0;o<n.length;o+=1){var f=n[o];if(Da(f)&&!$u(f))return!1}return!0}var qv=Rh(wo),Yv=(function(){function n(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Vh(o),this.componentId=f,this.baseHash=$i(qv,f),this.baseStyle=s,go.registerId(f)}return n.prototype.generateAndInjectStyles=function(o,f,s){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s).className:"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))m=Ca(m,this.staticRulesId);else{var b=fo(fa(this.rules,o,f,s)),D=cu($i(this.baseHash,b)>>>0);if(!f.hasNameForId(this.componentId,D)){var q=s(b,".".concat(D),void 0,this.componentId);f.insertRules(this.componentId,D,q)}m=Ca(m,D),this.staticRulesId=D}else{for(var C=$i(this.baseHash,s.hash),j="",Z=0;Z<this.rules.length;Z++){var P=this.rules[Z];if(typeof P=="string")j+=P;else if(P){var ie=fo(fa(P,o,f,s));C=$i(C,ie+Z),j+=ie}}if(j){var re=cu(C>>>0);if(!f.hasNameForId(this.componentId,re)){var le=s(j,".".concat(re),void 0,this.componentId);f.insertRules(this.componentId,re,le)}m=Ca(m,re)}}return{className:m,css:typeof window>"u"?f.getTag().getGroup(wi(this.componentId)):""}},n})(),Dl=hn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:pt.createContext(void 0);Dl.Consumer;function Xv(n){if(hn)return n.children;var o=pt.useContext(Dl),f=pt.useMemo(function(){return(function(s,m){if(!s)throw Ra(14);if(Da(s)){var b=s(m);return b}if(Array.isArray(s)||typeof s!="object")throw Ra(8);return m?mt(mt({},m),s):s})(n.theme,o)},[n.theme,o]);return n.children?pt.createElement(Dl.Provider,{value:f},n.children):null}var Kc={};function Qv(n,o,f){var s=$u(n),m=n,b=!Zc(n),D=o.attrs,q=D===void 0?zo:D,C=o.componentId,j=C===void 0?(function(ce,w){var z=typeof ce!="string"?"sc":Lg(ce);Kc[z]=(Kc[z]||0)+1;var x="".concat(z,"-").concat(xu(wo+z+Kc[z]));return w?"".concat(w,"-").concat(x):x})(o.displayName,o.parentComponentId):C,Z=o.displayName,P=Z===void 0?(function(ce){return Zc(ce)?"styled.".concat(ce):"Styled(".concat(yv(ce),")")})(n):Z,ie=o.displayName&&o.componentId?"".concat(Lg(o.displayName),"-").concat(o.componentId):o.componentId||j,re=s&&m.attrs?m.attrs.concat(q).filter(Boolean):q,le=o.shouldForwardProp;if(s&&m.shouldForwardProp){var X=m.shouldForwardProp;if(o.shouldForwardProp){var ve=o.shouldForwardProp;le=function(ce,w){return X(ce,w)&&ve(ce,w)}}else le=X}var ue=new Yv(f,ie,s?m.componentStyle:void 0);function ge(ce,w){return(function(z,x,k){var _=z.attrs,v=z.componentStyle,G=z.defaultProps,V=z.foldedComponentIds,H=z.styledComponentId,J=z.target,ee=hn?void 0:pt.useContext(Dl),A=pu(),u=z.shouldForwardProp||A.shouldForwardProp,ae=kh(x,ee,G)||Ei,T=(function(he,de,Se){for(var Ae,$e=mt(mt({},de),{className:void 0,theme:Se}),Ee=0;Ee<he.length;Ee+=1){var be=Da(Ae=he[Ee])?Ae($e):Ae;for(var ze in be)ze==="className"?$e.className=Ca($e.className,be[ze]):ze==="style"?$e.style=mt(mt({},$e.style),be[ze]):$e[ze]=be[ze]}return"className"in de&&typeof de.className=="string"&&($e.className=Ca($e.className,de.className)),$e})(_,x,ae),d=T.as||J,p={};for(var S in T)T[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&T.theme===ae||(S==="forwardedAs"?p.as=T.forwardedAs:u&&!u(S,d)||(p[S]=T[S]));var U=(function(he,de){var Se=pu(),Ae=he.generateAndInjectStyles(de,Se.styleSheet,Se.stylis);return Ae})(v,T),R=U.className,W=U.css,K=Ca(V,H);R&&(K+=" "+R),T.className&&(K+=" "+T.className),p[Zc(d)&&!Dh.has(d)?"class":"className"]=K,k&&(p.ref=k);var te=Be.createElement(d,p);return hn&&W?pt.createElement(pt.Fragment,null,pt.createElement("style",{precedence:"styled-components",href:"sc-".concat(H,"-").concat(R),children:W}),te):te})(ne,ce,w)}ge.displayName=P;var ne=pt.forwardRef(ge);return ne.attrs=re,ne.componentStyle=ue,ne.displayName=P,ne.shouldForwardProp=le,ne.foldedComponentIds=s?Ca(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=ie,ne.target=s?m.target:n,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ce){this._foldedDefaultProps=s?(function(w){for(var z=[],x=1;x<arguments.length;x++)z[x-1]=arguments[x];for(var k=0,_=z;k<_.length;k++)uu(w,_[k],!0);return w})({},m.defaultProps,ce):ce}}),wu(ne,function(){return".".concat(ne.styledComponentId)}),b&&Uh(ne,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Zg(n,o){for(var f=[n[0]],s=0,m=o.length;s<m;s+=1)f.push(o[s],n[s+1]);return f}var Kg=function(n){return Object.assign(n,{isCss:!0})};function zu(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(Da(n)||kl(n))return Kg(fa(Zg(zo,Ti([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?fa(s):Kg(fa(Zg(s,o)))}function gu(n,o,f){if(f===void 0&&(f=Ei),!o)throw Ra(1,o);var s=function(m){for(var b=[],D=1;D<arguments.length;D++)b[D-1]=arguments[D];return n(o,f,zu.apply(void 0,Ti([m],b,!1)))};return s.attrs=function(m){return gu(n,o,mt(mt({},f),{attrs:Array.prototype.concat(f.attrs,m).filter(Boolean)}))},s.withConfig=function(m){return gu(n,o,mt(mt({},f),m))},s}var Zh=function(n){return gu(Qv,n)},y=Zh;Dh.forEach(function(n){y[n]=Zh(n)});var Vv=(function(){function n(o,f){this.rules=o,this.componentId=f,this.isStatic=Vh(o),go.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,f,s,m){var b=m(fo(fa(this.rules,f,s,m)),""),D=this.componentId+o;s.insertRules(D,D,b)},n.prototype.removeStyles=function(o,f){f.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,f,s,m){o>2&&go.registerId(this.componentId+o);var b=this.componentId+o;this.isStatic?s.hasNameForId(b,b)||this.createStyles(o,f,s,m):(this.removeStyles(o,s),this.createStyles(o,f,s,m))},n})();function Zv(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=zu.apply(void 0,Ti([n],o,!1)),m="sc-global-".concat(xu(JSON.stringify(s))),b=new Vv(s,m),D=new WeakMap,q=function(C){var j=pu(),Z=hn?void 0:pt.useContext(Dl),P=D.get(j.styleSheet);if(P===void 0&&(P=j.styleSheet.allocateGSInstance(m),D.set(j.styleSheet,P)),(typeof window>"u"||!j.styleSheet.server)&&(function(ve,ue,ge,ne,ce){if(b.isStatic)b.renderStyles(ve,pv,ge,ce);else{var w=mt(mt({},ue),{theme:kh(ue,ne,q.defaultProps)});b.renderStyles(ve,w,ge,ce)}})(P,C,j.styleSheet,Z,j.stylis),!hn){var ie=pt.useRef(!0);pt.useLayoutEffect(function(){return ie.current=!1,function(){ie.current=!0,queueMicrotask(function(){ie.current&&(b.removeStyles(P,j.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(m,'"]')).forEach(function(ve){return ve.remove()}))})}},[P,j.styleSheet])}if(hn){var re=m+P,le=typeof window>"u"?j.styleSheet.getTag().getGroup(wi(re)):"";if(le){var X="".concat(m,"-").concat(P);return pt.createElement("style",{key:X,"data-styled-global":m,precedence:"styled-components",href:X,children:le})}}return null};return pt.memo(q)}function Mi(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=fo(zu.apply(void 0,Ti([n],o,!1))),m=xu(s);return new Yh(m,s)}var tn=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(tn||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jv=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,f,s)=>s?s.toUpperCase():f.toLowerCase()),Jg=n=>{const o=Jv(n);return o.charAt(0).toUpperCase()+o.slice(1)},Kh=(...n)=>n.filter((o,f,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===f).join(" ").trim(),Wv=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=Be.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:f=2,absoluteStrokeWidth:s,className:m="",children:b,iconNode:D,...q},C)=>Be.createElement("svg",{ref:C,...Iv,width:o,height:o,stroke:n,strokeWidth:s?Number(f)*24/Number(o):f,className:Kh("lucide",m),...!b&&!Wv(q)&&{"aria-hidden":"true"},...q},[...D.map(([j,Z])=>Be.createElement(j,Z)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(n,o)=>{const f=Be.forwardRef(({className:s,...m},b)=>Be.createElement(Pv,{ref:b,iconNode:o,className:Kh(`lucide-${Kv(Jg(n))}`,`lucide-${n}`,s),...m}));return f.displayName=Jg(n),f};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],eb=ut("arrow-down",Fv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],yn=ut("arrow-left",tb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Tu=ut("arrow-right",nb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ib=ut("arrow-up-right",ab);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],rb=ut("check",lb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],sb=ut("dribbble",ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ub=ut("external-link",cb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],db=ut("figma",fb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Wg=ut("file-text",pb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],hb=ut("funnel",gb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],yb=ut("gamepad-2",mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],bb=ut("image",vb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],xb=ut("linkedin",Sb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wb=ut("mail",$b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Tb=ut("menu",zb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Ab=ut("pen-tool",Ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_b=ut("star",Eb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Mb=ut("tag",jb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],kb=ut("twitter",Cb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jh=ut("x",Db),Rb={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design",games:"Games"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},17:{title:"App Store Screenshots",description:"",technologies:["App Store","Маркетинг","Візуальний дизайн"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"About Me",heading1:"About",heading2:"",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Me",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaca:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaca",eyebrow:"UI/UX Design",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},marketingVideo:{backToPortfolio:"Back to Portfolio",headerTag:"Motion Design",eyebrow:"Motion Design",title:"Marketing Videos",lead:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",featuredTitle:"Featured Videos",allVideosTitle:"All Videos"},elementalQuest:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Elemental Quest",lead:"Game map design and visual assets for an adventure puzzle game.",logoAlt:"Elemental Quest Logo",mapAlt:"Elemental Quest Game Map"},combatPlanes:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Combat Planes",lead:"Character design, plane skins, and game maps for an aerial combat mobile game.",logoAlt:"Combat Planes Logo",galleryAlt:"Combat Planes Game Art"},fattyFish:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Fatty Fish",lead:"Character design, game objects, and visual assets for a fun aquatic mobile game.",logoAlt:"Fatty Fish Logo",galleryAlt:"Fatty Fish Game Art"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",18:{title:"Onboarding for Beauty Shop",description:"Вишуканий онбординг для застосунку б’юті-магазину з фокусом на персоналізації та плавному першому досвіді.",technologies:["Figma","UI/UX","Онбординг"]},brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн",games:"Ігри"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaca Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaca: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]}},about:{discovery:"Про мене",heading1:"Про",heading2:"",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Мене",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaca:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaca",eyebrow:"UI/UX дизайн",title:"Namelaca Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},marketingVideo:{backToPortfolio:"Назад до портфоліо",headerTag:"Моушн-дизайн",eyebrow:"Моушн-дизайн",title:"Маркетингові відео",lead:"Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.",featuredTitle:"Вибрані відео",allVideosTitle:"Усі відео"},elementalQuest:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Elemental Quest",lead:"Дизайн ігрової карти та візуальні ресурси для пригодницької гри-головоломки.",logoAlt:"Логотип Elemental Quest",mapAlt:"Ігрова карта Elemental Quest"},combatPlanes:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Combat Planes",lead:"Дизайн персонажів, скіни літаків та ігрові карти для мобільної гри з повітряними боями.",logoAlt:"Логотип Combat Planes",galleryAlt:"Ігрове мистецтво Combat Planes"},fattyFish:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Fatty Fish",lead:"Дизайн персонажів, ігрові об'єкти та візуальні ресурси для веселої водної мобільної гри.",logoAlt:"Логотип Fatty Fish",galleryAlt:"Ігрове мистецтво Fatty Fish"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},Wh=Be.createContext(void 0),Hb=({children:n})=>{const[o,f]=Be.useState("en"),s={lang:o,setLang:f,t:Rb[o]};return h.jsx(Wh.Provider,{value:s,children:n})},At=()=>{const n=Be.useContext(Wh);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},Jc=(n,o)=>{const s={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign",Games:"games"}[n];return s?o.work.categories[s]:n},Nb=(n,o)=>{const s={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return s?o.about.skills[s]:n},E={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",navWidth:"95%",navMaxWidth:"1024px",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blurMenu:"20px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite95:"rgba(255, 255, 255, 0.95)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9},zIndex:{background:0,foreground:1,stickyHeader:20,mobileMenu:40,nav:50,modal:100,closeButton:2,progress:100},navigation:{scrollThreshold:20},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},Lb=y.nav`
  position: fixed;
  top: ${({theme:n})=>n.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${E.zIndex.nav};
  width: ${E.layout.navWidth};
  max-width: ${E.layout.navMaxWidth};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  padding: ${({theme:n,$scrolled:o})=>o?`${n.spacing[3]} ${n.spacing[8]}`:`${n.spacing[6]} ${n.spacing[8]}`};
  background: ${({$scrolled:n})=>n?E.effects.glassWhite70:"transparent"};
  backdrop-filter: ${({$scrolled:n})=>n?`blur(${E.effects.blurStrong})`:"none"};
  box-shadow: ${({theme:n,$scrolled:o})=>o?n.shadows.lg:"none"};
  border: ${({$scrolled:n})=>n?`${E.sizing.hairline} solid ${E.effects.glassWhite20}`:"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,Ub=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ih=y.button`
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
`,Bb=y.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${Ih}:hover & {
    transform: rotate(12deg);
  }
`,Gb=y.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,qb=y.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,Yb=y.button`
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
`,Xb=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,Qb=y.button`
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
`,Vb=y.button`
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
    transform: translateY(${E.motion.hoverLiftSm}) scale(${E.motion.scaleHover});
  }

  &:active {
    transform: scale(0.98);
  }
`,Zb=y.button`
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
`,Kb=y.div`
  position: fixed;
  inset: 0;
  z-index: ${E.zIndex.mobileMenu};
  padding: ${({theme:n})=>n.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:n})=>n.spacing[8]};
  background: ${E.effects.glassWhite95};
  backdrop-filter: blur(${E.effects.blurMenu});
  opacity: ${({$open:n})=>n?1:0};
  pointer-events: ${({$open:n})=>n?"auto":"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: none;
  }
`,Jb=y.button`
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
`,Wb=y.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,Ib=y.button`
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
`,Pb=y.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,Fb=({onNavigate:n})=>{const{t:o}=At(),[f,s]=Be.useState(!1),[m,b]=Be.useState(!1);Be.useEffect(()=>{const Z=()=>{s(window.scrollY>E.navigation.scrollThreshold)};return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]);const D=Z=>{if(n){n(Z),b(!1);return}const P=document.getElementById(Z);P&&(P.scrollIntoView({behavior:"smooth"}),b(!1))},q=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},C=()=>{alert(o.nav.cvAlert)},j=[{label:o.nav.work,id:tn.WORK},{label:o.nav.about,id:tn.ABOUT}];return h.jsxs(h.Fragment,{children:[h.jsx(Lb,{$scrolled:f,children:h.jsxs(Ub,{children:[h.jsxs(Ih,{onClick:()=>D(tn.HERO),children:[h.jsx(Bb,{children:"A."}),h.jsx(Gb,{children:o.nav.brandText})]}),h.jsxs(qb,{children:[j.map(Z=>h.jsx(Yb,{onClick:()=>D(Z.id),children:Z.label},Z.id)),h.jsxs(Xb,{children:[h.jsxs(Qb,{onClick:C,children:[h.jsx(Wg,{size:16}),o.nav.cv]}),h.jsx(Vb,{onClick:q,children:o.nav.hireMe})]})]}),h.jsx(Zb,{onClick:()=>b(!m),children:m?h.jsx(Jh,{size:24}):h.jsx(Tb,{size:24})})]})}),h.jsxs(Kb,{$open:m,children:[j.map(Z=>h.jsx(Jb,{onClick:()=>D(Z.id),children:Z.label},Z.id)),h.jsxs(Wb,{children:[h.jsxs(Ib,{onClick:C,children:[h.jsx(Wg,{size:24}),o.nav.cv]}),h.jsx(Pb,{onClick:q,children:o.nav.hireMe})]})]})]})},e1={light:"light",regular:"regular",medium:"medium",bold:"bold"},t1={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},n1=y.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[t1[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[e1[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Ou=({as:n="span",element:o,message:f,size:s="md",weight:m="regular",color:b="secondary",...D})=>{const{t:q}=At(),C=o??n;return h.jsx(n1,{as:C,$size:s,$weight:m,$color:b,...D,children:f(q)})},a1=Mi`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${E.motion.floatOffset}); }
`,i1=Mi`
  0% { opacity: 0; transform: translateY(${E.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,l1=y.section`
  position: relative;
  min-height: ${E.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,r1=y.div`
  position: relative;
  z-index: 1;
  max-width: ${E.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${i1} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,hu=y.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${a1} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,Ig=y(hu)`
  animation-delay: 3s;
`,o1=y.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${E.effects.glassWhite50};
  backdrop-filter: blur(${E.effects.blurSoft});
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[200]};
  border-radius: ${({theme:n})=>n.radii.full};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
`,s1=y.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,c1=y.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,u1=y.h1`
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
`,f1=y.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,d1=y(Ou)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${E.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,p1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,Ph=y.button`
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
    transform: translateY(${E.motion.hoverLiftSm});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,g1=y(eb)`
  transition: transform 0.2s ease;

  ${Ph}:hover & {
    transform: translateY(${E.motion.arrowDrop});
  }
`,h1=()=>{const{t:n}=At();return h.jsx(l1,{id:tn.HERO,children:h.jsxs(r1,{children:[h.jsx(hu,{style:{left:E.sizing.heroFloatLeftOffset,top:0},children:h.jsx(db,{color:"#7c3aed",size:32})}),h.jsx(Ig,{style:{right:E.sizing.heroFloatRightOffset,top:E.sizing.heroFloatRightTop},children:h.jsx(Ab,{color:"#3b82f6",size:32})}),h.jsx(Ig,{style:{left:E.sizing.heroFloatLeftAlt,bottom:0},children:h.jsx(bb,{color:"#ec4899",size:32})}),h.jsx(hu,{style:{right:0,bottom:E.sizing.heroFloatRightBottom},children:h.jsx(yb,{color:"#10b981",size:32})}),h.jsxs(o1,{children:[h.jsx(s1,{}),h.jsx(c1,{children:n.hero.available})]}),h.jsxs(u1,{children:[n.hero.heading1," ",h.jsx("br",{}),h.jsx(f1,{children:n.hero.heading2})]}),h.jsx(d1,{element:"p",message:o=>o.hero.lead}),h.jsx(p1,{children:h.jsxs(Ph,{onClick:()=>{var o;return(o=document.getElementById(tn.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,h.jsx(g1,{size:18})]})})]})})},se="/assets",m1=`${se}/images/brand/app-icons-splash-screens/full-composition.png`,y1=`${se}/video/uiux/smart-house-app.mp4`,v1=`${se}/images/brand/Namelaca icons and illustration/Full_Composition_Namelaca.png`,b1=`${se}/video/uiux/Onboarding for Beauty shop.mp4`,S1=`${se}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,x1=`${se}/images/brand/Full_Composition_Marketing_video.png`,$1=`${se}/images/brand/Elemental Quest game/Full_Composition_Elemental Quest game map.png`,w1=`${se}/images/brand/Combat Planes/Full_Composition_logo_Combat Planes.png`,z1=`${se}/images/brand/Fatty Fish/Character.png`,T1=[`${se}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${se}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 1.jpg`,`${se}/images/brand/App Store Screenshots/Selara 2.jpg`,`${se}/images/brand/App Store Screenshots/Selara 3.jpg`,`${se}/images/brand/App Store Screenshots/Selara 4.jpg`,`${se}/images/brand/App Store Screenshots/Selara 5.jpg`,`${se}/images/brand/App Store Screenshots/Selara 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 7.jpg`,`${se}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 9.png`],ho="Anna Serhiienko",O1="Graphic Designer",A1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",E1=["Brand design","UI/UX design","Marketing and advertising","Games"],Fh=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],mo=[{id:20,title:"Namelaca Icons & Illustration",category:"UI/UX design",mediaUrl:v1,mediaType:"image",description:"Iconography and illustration set for Namelaca, covering UI states, empty screens, and branded visuals.",link:"#namelaca",technologies:["Illustration","Icon Design","UI Assets"]},{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:m1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:16,title:"Smart House App",category:"UI/UX design",mediaUrl:y1,mediaType:"video",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",link:"https://dribbble.com/shots/11804880-Smart-house-App",technologies:["Figma","UI Animation","IoT Design"]},{id:18,title:"Onboarding for Beauty Shop",category:"UI/UX design",mediaUrl:b1,mediaType:"video",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",link:"https://dribbble.com/shots/11284581-Onboarding-for-Beauty-shop",technologies:["Figma","UI/UX","Onboarding"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:S1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${se}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:T1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]},{id:22,title:"Marketing Videos",category:"Marketing and advertising",mediaUrl:x1,mediaType:"image",description:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",link:"#marketing-video",technologies:["Motion Design","After Effects","Marketing"]},{id:23,title:"Elemental Quest",category:"Games",mediaUrl:$1,mediaType:"image",description:"Game map design and visual assets for an adventure puzzle game featuring magical elements.",link:"#elemental-quest",technologies:["Game Art","Illustration","Visual Design"]},{id:24,title:"Combat Planes",category:"Games",mediaUrl:w1,mediaType:"image",description:"Character design, plane skins, and game maps for an aerial combat mobile game.",link:"#combat-planes",technologies:["Game Art","Character Design","Visual Design"]},{id:25,title:"Fatty Fish",category:"Games",mediaUrl:z1,mediaType:"image",description:"Character design, game objects, and visual assets for a fun aquatic mobile game.",link:"#fatty-fish",technologies:["Game Art","Character Design","Visual Design"]}],_1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${ho}${O1}${A1}${Fh.join(", ")}${mo.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const em=Mi`
  0% { opacity: 0; transform: translateY(${E.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,j1=Mi`
  from { opacity: 0; }
  to { opacity: 1; }
`,M1=y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${E.effects.sectionWash};
`,C1=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,k1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,D1=y.div`
  max-width: ${E.layout.workHeadingMaxWidth};
`,R1=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,H1=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,N1=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,L1=y.button`
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${E.sizing.hairline} solid ${({theme:n,$active:o})=>o?"transparent":n.colors.slate[100]};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.white};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.md:"none"};
  transform: ${({$active:n})=>n?"scale(1.05)":"scale(1)"};

  &:hover {
    border-color: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.brand.purple};
  }
`,U1=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Hl=y.div`
  cursor: pointer;
  animation: ${em} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,B1=y.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[200]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Hl}:hover & {
    transform: translateY(${E.motion.hoverLiftLg});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,G1=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Hl}:hover & {
    transform: scale(1);
  }
`,q1=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Hl}:hover & {
    transform: scale(1);
  }
`,Y1=y.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:n})=>n.spacing[10]};
  background: ${E.effects.cardOverlayGradient};
  opacity: 1;
  transition: opacity 0.5s ease;
`,X1=y.span`
  color: ${E.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,Q1=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,V1=y.div`
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

  ${Hl}:hover & {
    transform: scale(1);
  }
`,Z1=y.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${E.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,K1=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,J1=y.div`
  position: fixed;
  inset: 0;
  z-index: ${E.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${j1} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,W1=y.div`
  position: absolute;
  inset: 0;
  background: ${E.effects.overlayDark95};
  backdrop-filter: blur(${E.effects.blurStrong});
`,I1=y.div`
  position: relative;
  width: 100%;
  max-width: ${E.layout.workModalMaxWidth};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${E.layout.workModalMaxHeight};
  animation: ${em} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,P1=y.button`
  position: absolute;
  top: ${({theme:n})=>n.spacing[6]};
  right: ${({theme:n})=>n.spacing[6]};
  z-index: ${E.zIndex.closeButton};
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  background: ${E.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${E.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${E.effects.glassWhite20};
  }
`,F1=y.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${E.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,eS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,tS=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;y.div`
  width: 100%;
  height: 100%;
  padding: ${({theme:n})=>n.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  overflow-y: auto;
`;y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`;y.h4`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`;y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${E.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`;y.div`
  flex: 0 0 auto;
  width: 220px;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[50]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`;y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`;const nS=y.div`
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
`,aS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,iS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,lS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,rS=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,oS=y.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,sS=y.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,cS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,uS=y.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,fS=y.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,dS=y.a`
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
    transform: translateY(${E.motion.hoverLiftSm});
  }
`,pS=()=>{const{t:n}=At(),[o,f]=Be.useState("All"),[s,m]=Be.useState(null),b=C=>C.includes(" ")?encodeURI(C):C;Be.useEffect(()=>{if(!s)return;const C=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=C}},[s]);const D=["All",...E1],q=Be.useMemo(()=>o==="All"?mo:mo.filter(C=>C.category===o),[o]);return h.jsxs(M1,{id:tn.WORK,children:[h.jsxs(C1,{children:[h.jsxs(k1,{children:[h.jsxs(D1,{children:[h.jsx(R1,{children:n.work.title}),h.jsx(H1,{children:n.work.subtitle})]}),h.jsx(N1,{children:D.map(C=>h.jsx(L1,{$active:o===C,onClick:()=>f(C),children:C==="All"?n.work.all:Jc(C,n)},C))})]}),h.jsx(U1,{children:q.map((C,j)=>{const Z=n.projects[C.id],P=(Z==null?void 0:Z.title)??C.title;return h.jsx(Hl,{style:{animationDelay:`${j*.1}s`},onClick:()=>m(C),children:h.jsxs(B1,{children:[C.mediaType==="video"?h.jsx(q1,{src:b(C.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):h.jsx(G1,{src:b(C.mediaUrl),alt:P}),h.jsxs(Y1,{children:[h.jsx(X1,{children:Jc(C.category,n)}),h.jsx(Q1,{children:P}),h.jsx(V1,{children:h.jsx(ib,{size:24})})]})]})},C.id)})}),q.length===0&&h.jsxs(Z1,{children:[h.jsx(hb,{color:"#e2e8f0",size:48}),h.jsx(K1,{children:n.work.emptyState})]})]}),s&&(()=>{const C=n.projects[s.id],j=(C==null?void 0:C.title)??s.title,Z=(C==null?void 0:C.description)??s.description,P=(C==null?void 0:C.technologies)??s.technologies;return h.jsxs(J1,{children:[h.jsx(W1,{onClick:()=>m(null)}),h.jsxs(I1,{children:[h.jsx(P1,{onClick:()=>m(null),"aria-label":n.work.close,children:h.jsx(Jh,{size:24})}),h.jsx(F1,{children:s.mediaType==="video"?h.jsx(tS,{src:b(s.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):h.jsx(eS,{src:b(s.mediaUrl),alt:j})}),h.jsxs(nS,{children:[h.jsxs(aS,{children:[h.jsx(Mb,{size:14}),h.jsx(iS,{children:Jc(s.category,n)})]}),h.jsx(lS,{children:j}),h.jsx(rS,{children:Z}),h.jsxs(oS,{children:[h.jsx(sS,{children:n.work.technologies}),h.jsx(cS,{children:P.map((ie,re)=>h.jsx(uS,{children:ie},re))})]}),h.jsx(fS,{children:h.jsxs(dS,{href:s.link,children:[n.work.viewProject,h.jsx(ub,{size:18})]})})]})]})]})})()]})},gS=Mi`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${E.motion.floatOffset}); }
`,hS=y.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,mS=y.div`
  position: absolute;
  top: ${({theme:n})=>n.spacing[10]};
  right: ${E.layout.aboutWatermarkOffsetX};
  font-size: ${E.layout.aboutWatermarkFontSize};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`,yS=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,vS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,bS=y.div`
  position: relative;
`,SS=y.div`
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
`,xS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,$S=y.div`
  position: absolute;
  inset: 0;
  background: ${E.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,wS=y.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${gS} 6s ease-in-out infinite;
  max-width: ${E.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,zS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,TS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,OS=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,AS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,ES=y(Ou)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,_S=y.div`
  display: flex;
  flex-direction: column;
`;y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`;const jS=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,MS=y.span`
  font-style: italic;
`,CS=y(Ou)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,kS=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,DS=y.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,RS=y.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${E.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,HS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,NS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,tm=y.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,nm=y(rb)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,am=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,LS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${tm} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${nm} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${am} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,US=()=>{const{t:n}=At();return h.jsxs(hS,{id:tn.ABOUT,children:[h.jsx(mS,{children:n.about.watermark}),h.jsx(yS,{children:h.jsxs(vS,{children:[h.jsxs(bS,{children:[h.jsxs(SS,{children:[h.jsx(xS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),h.jsx($S,{"data-overlay":!0})]}),h.jsxs(wS,{children:[h.jsxs(zS,{children:[h.jsx(_b,{color:"#6366f1",fill:"#6366f1",size:16}),h.jsx(TS,{children:n.about.experience})]}),h.jsxs(OS,{children:["5+ ",h.jsx(AS,{children:n.about.years})]}),h.jsx(ES,{element:"p",message:f=>f.about.experienceText})]})]}),h.jsxs(_S,{children:[h.jsxs(jS,{children:[n.about.heading1," ",h.jsx(MS,{children:n.about.emphasis})," ",h.jsx("br",{})," ",n.about.heading2]}),h.jsx(CS,{element:"p",message:f=>f.about.bio}),h.jsx(kS,{children:h.jsxs("div",{children:[h.jsxs(DS,{children:[h.jsx(RS,{}),n.about.proficiencies]}),h.jsx(HS,{children:Fh.map((f,s)=>h.jsx(NS,{children:h.jsxs(LS,{children:[h.jsx(tm,{children:h.jsx(nm,{size:12})}),h.jsx(am,{children:Nb(f,n)})]})},s))})]})})]})]})})]})},BS=y.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,GS=y.div`
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
`,qS=y.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,YS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,XS=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,QS=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,VS=y.a`
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
    transform: translateY(${E.motion.hoverLiftMd});
  }
`,ZS=()=>{const{t:n}=At(),o=f=>{switch(f){case"Twitter":return h.jsx(kb,{size:20});case"Linkedin":return h.jsx(xb,{size:20});case"Dribbble":return h.jsx(sb,{size:20});case"Mail":return h.jsx(wb,{size:20});default:return null}};return h.jsx(BS,{children:h.jsxs(GS,{children:[h.jsxs(qS,{children:[h.jsx(YS,{children:ho}),h.jsxs(XS,{children:["© ",new Date().getFullYear()," ",ho,". ",n.footer.rights]})]}),h.jsx(QS,{children:_1.map(f=>h.jsx(VS,{href:f.url,target:"_blank",rel:"noopener noreferrer","aria-label":f.name,children:o(f.icon)},f.name))})]})})};var Ne=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELACA="namelaca",n.MINDZY="mindzy",n.MARKETING_VIDEO="marketing-video",n.ELEMENTAL_QUEST="elemental-quest",n.COMBAT_PLANES="combat-planes",n.FATTY_FISH="fatty-fish",n))(Ne||{}),Wc={},Ic={},Ol={},Pc={},Pg;function KS(){return Pg||(Pg=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(Pc)),Pc}var Fc,Fg;function JS(){if(Fg)return Fc;Fg=1;var n="Expected a function",o=NaN,f="[object Symbol]",s=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,D=/^0o[0-7]+$/i,q=parseInt,C=typeof to=="object"&&to&&to.Object===Object&&to,j=typeof self=="object"&&self&&self.Object===Object&&self,Z=C||j||Function("return this")(),P=Object.prototype,ie=P.toString,re=Math.max,le=Math.min,X=function(){return Z.Date.now()};function ve(w,z,x){var k,_,v,G,V,H,J=0,ee=!1,A=!1,u=!0;if(typeof w!="function")throw new TypeError(n);z=ce(z)||0,ue(x)&&(ee=!!x.leading,A="maxWait"in x,v=A?re(ce(x.maxWait)||0,z):v,u="trailing"in x?!!x.trailing:u);function ae(te){var he=k,de=_;return k=_=void 0,J=te,G=w.apply(de,he),G}function T(te){return J=te,V=setTimeout(S,z),ee?ae(te):G}function d(te){var he=te-H,de=te-J,Se=z-he;return A?le(Se,v-de):Se}function p(te){var he=te-H,de=te-J;return H===void 0||he>=z||he<0||A&&de>=v}function S(){var te=X();if(p(te))return U(te);V=setTimeout(S,d(te))}function U(te){return V=void 0,u&&k?ae(te):(k=_=void 0,G)}function R(){V!==void 0&&clearTimeout(V),J=0,k=H=_=V=void 0}function W(){return V===void 0?G:U(X())}function K(){var te=X(),he=p(te);if(k=arguments,_=this,H=te,he){if(V===void 0)return T(H);if(A)return V=setTimeout(S,z),ae(H)}return V===void 0&&(V=setTimeout(S,z)),G}return K.cancel=R,K.flush=W,K}function ue(w){var z=typeof w;return!!w&&(z=="object"||z=="function")}function ge(w){return!!w&&typeof w=="object"}function ne(w){return typeof w=="symbol"||ge(w)&&ie.call(w)==f}function ce(w){if(typeof w=="number")return w;if(ne(w))return o;if(ue(w)){var z=typeof w.valueOf=="function"?w.valueOf():w;w=ue(z)?z+"":z}if(typeof w!="string")return w===0?w:+w;w=w.replace(s,"");var x=b.test(w);return x||D.test(w)?q(w.slice(2),x?2:8):m.test(w)?o:+w}return Fc=ve,Fc}var eu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eh;function To(){return eh||(eh=1,(function(n){(function(){var o={}.hasOwnProperty;function f(){for(var b="",D=0;D<arguments.length;D++){var q=arguments[D];q&&(b=m(b,s(q)))}return b}function s(b){if(typeof b=="string"||typeof b=="number")return b;if(typeof b!="object")return"";if(Array.isArray(b))return f.apply(null,b);if(b.toString!==Object.prototype.toString&&!b.toString.toString().includes("[native code]"))return b.toString();var D="";for(var q in b)o.call(b,q)&&b[q]&&(D=m(D,q));return D}function m(b,D){return D?b?b+" "+D:b+D:b}n.exports?(f.default=f,n.exports=f):window.classNames=f})()})(eu)),eu.exports}var oe={},tu={},th;function im(){return th||(th=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(mn());function f(m){return m&&m.__esModule?m:{default:m}}var s={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(b){return o.default.createElement("ul",{style:{display:"block"}},b)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(b){return o.default.createElement("button",null,b+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=s})(tu)),tu}var nh;function Nl(){if(nh)return oe;nh=1,Object.defineProperty(oe,"__esModule",{value:!0}),oe.checkSpecKeys=oe.checkNavigable=oe.changeSlide=oe.canUseDOM=oe.canGoNext=void 0,oe.clamp=j,oe.extractObject=void 0,oe.filterSettings=ae,oe.validSettings=oe.swipeStart=oe.swipeMove=oe.swipeEnd=oe.slidesOnRight=oe.slidesOnLeft=oe.slideHandler=oe.siblingDirection=oe.safePreventDefault=oe.lazyStartIndex=oe.lazySlidesOnRight=oe.lazySlidesOnLeft=oe.lazyEndIndex=oe.keyHandler=oe.initializedState=oe.getWidth=oe.getTrackLeft=oe.getTrackCSS=oe.getTrackAnimateCSS=oe.getTotalSlides=oe.getSwipeDirection=oe.getSlideCount=oe.getRequiredLazySlides=oe.getPreClones=oe.getPostClones=oe.getOnDemandLazySlides=oe.getNavigableIndexes=oe.getHeight=void 0;var n=f(mn()),o=f(im());function f(T){return T&&T.__esModule?T:{default:T}}function s(T){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s(T)}function m(T,d){var p=Object.keys(T);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(T);d&&(S=S.filter(function(U){return Object.getOwnPropertyDescriptor(T,U).enumerable})),p.push.apply(p,S)}return p}function b(T){for(var d=1;d<arguments.length;d++){var p=arguments[d]!=null?arguments[d]:{};d%2?m(Object(p),!0).forEach(function(S){D(T,S,p[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(p)):m(Object(p)).forEach(function(S){Object.defineProperty(T,S,Object.getOwnPropertyDescriptor(p,S))})}return T}function D(T,d,p){return(d=q(d))in T?Object.defineProperty(T,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[d]=p,T}function q(T){var d=C(T,"string");return s(d)=="symbol"?d:d+""}function C(T,d){if(s(T)!="object"||!T)return T;var p=T[Symbol.toPrimitive];if(p!==void 0){var S=p.call(T,d);if(s(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(T)}function j(T,d,p){return Math.max(d,Math.min(T,p))}var Z=oe.safePreventDefault=function(d){var p=["onTouchStart","onTouchMove","onWheel"];p.includes(d._reactName)||d.preventDefault()},P=oe.getOnDemandLazySlides=function(d){for(var p=[],S=ie(d),U=re(d),R=S;R<U;R++)d.lazyLoadedList.indexOf(R)<0&&p.push(R);return p};oe.getRequiredLazySlides=function(d){for(var p=[],S=ie(d),U=re(d),R=S;R<U;R++)p.push(R);return p};var ie=oe.lazyStartIndex=function(d){return d.currentSlide-le(d)},re=oe.lazyEndIndex=function(d){return d.currentSlide+X(d)},le=oe.lazySlidesOnLeft=function(d){return d.centerMode?Math.floor(d.slidesToShow/2)+(parseInt(d.centerPadding)>0?1:0):0},X=oe.lazySlidesOnRight=function(d){return d.centerMode?Math.floor((d.slidesToShow-1)/2)+1+(parseInt(d.centerPadding)>0?1:0):d.slidesToShow},ve=oe.getWidth=function(d){return d&&d.offsetWidth||0},ue=oe.getHeight=function(d){return d&&d.offsetHeight||0},ge=oe.getSwipeDirection=function(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S,U,R,W;return S=d.startX-d.curX,U=d.startY-d.curY,R=Math.atan2(U,S),W=Math.round(R*180/Math.PI),W<0&&(W=360-Math.abs(W)),W<=45&&W>=0||W<=360&&W>=315?"left":W>=135&&W<=225?"right":p===!0?W>=35&&W<=135?"up":"down":"vertical"},ne=oe.canGoNext=function(d){var p=!0;return d.infinite||(d.centerMode&&d.currentSlide>=d.slideCount-1||d.slideCount<=d.slidesToShow||d.currentSlide>=d.slideCount-d.slidesToShow)&&(p=!1),p};oe.extractObject=function(d,p){var S={};return p.forEach(function(U){return S[U]=d[U]}),S},oe.initializedState=function(d){var p=n.default.Children.count(d.children),S=d.listRef,U=Math.ceil(ve(S)),R=d.trackRef&&d.trackRef.node,W=Math.ceil(ve(R)),K;if(d.vertical)K=U;else{var te=d.centerMode&&parseInt(d.centerPadding)*2;typeof d.centerPadding=="string"&&d.centerPadding.slice(-1)==="%"&&(te*=U/100),K=Math.ceil((U-te)/d.slidesToShow)}var he=S&&ue(S.querySelector('[data-index="0"]')),de=he*d.slidesToShow,Se=d.currentSlide===void 0?d.initialSlide:d.currentSlide;d.rtl&&d.currentSlide===void 0&&(Se=p-1-d.initialSlide);var Ae=d.lazyLoadedList||[],$e=P(b(b({},d),{},{currentSlide:Se,lazyLoadedList:Ae}));Ae=Ae.concat($e);var Ee={slideCount:p,slideWidth:K,listWidth:U,trackWidth:W,currentSlide:Se,slideHeight:he,listHeight:de,lazyLoadedList:Ae};return d.autoplaying===null&&d.autoplay&&(Ee.autoplaying="playing"),Ee},oe.slideHandler=function(d){var p=d.waitForAnimate,S=d.animating,U=d.fade,R=d.infinite,W=d.index,K=d.slideCount,te=d.lazyLoad,he=d.currentSlide,de=d.centerMode,Se=d.slidesToScroll,Ae=d.slidesToShow,$e=d.useCSS,Ee=d.lazyLoadedList;if(p&&S)return{};var be=W,ze,Ie,_e,Pe={},Fe={},nt=R?W:j(W,0,K-1);if(U){if(!R&&(W<0||W>=K))return{};W<0?be=W+K:W>=K&&(be=W-K),te&&Ee.indexOf(be)<0&&(Ee=Ee.concat(be)),Pe={animating:!0,currentSlide:be,lazyLoadedList:Ee,targetSlide:be},Fe={animating:!1,targetSlide:be}}else ze=be,be<0?(ze=be+K,R?K%Se!==0&&(ze=K-K%Se):ze=0):!ne(d)&&be>he?be=ze=he:de&&be>=K?(be=R?K:K-1,ze=R?0:K-1):be>=K&&(ze=be-K,R?K%Se!==0&&(ze=0):ze=K-Ae),!R&&be+Ae>=K&&(ze=K-Ae),Ie=v(b(b({},d),{},{slideIndex:be})),_e=v(b(b({},d),{},{slideIndex:ze})),R||(Ie===_e&&(be=ze),Ie=_e),te&&(Ee=Ee.concat(P(b(b({},d),{},{currentSlide:be})))),$e?(Pe={animating:!0,currentSlide:ze,trackStyle:_(b(b({},d),{},{left:Ie})),lazyLoadedList:Ee,targetSlide:nt},Fe={animating:!1,currentSlide:ze,trackStyle:k(b(b({},d),{},{left:_e})),swipeLeft:null,targetSlide:nt}):Pe={currentSlide:ze,trackStyle:k(b(b({},d),{},{left:_e})),lazyLoadedList:Ee,targetSlide:nt};return{state:Pe,nextState:Fe}},oe.changeSlide=function(d,p){var S,U,R,W,K,te=d.slidesToScroll,he=d.slidesToShow,de=d.slideCount,Se=d.currentSlide,Ae=d.targetSlide,$e=d.lazyLoad,Ee=d.infinite;if(W=de%te!==0,S=W?0:(de-Se)%te,p.message==="previous")R=S===0?te:he-S,K=Se-R,$e&&!Ee&&(U=Se-R,K=U===-1?de-1:U),Ee||(K=Ae-te);else if(p.message==="next")R=S===0?te:S,K=Se+R,$e&&!Ee&&(K=(Se+te)%de+S),Ee||(K=Ae+te);else if(p.message==="dots")K=p.index*p.slidesToScroll;else if(p.message==="children"){if(K=p.index,Ee){var be=J(b(b({},d),{},{targetSlide:K}));K>p.currentSlide&&be==="left"?K=K-de:K<p.currentSlide&&be==="right"&&(K=K+de)}}else p.message==="index"&&(K=Number(p.index));return K},oe.keyHandler=function(d,p,S){return d.target.tagName.match("TEXTAREA|INPUT|SELECT")||!p?"":d.keyCode===37?S?"next":"previous":d.keyCode===39?S?"previous":"next":""},oe.swipeStart=function(d,p,S){return d.target.tagName==="IMG"&&Z(d),!p||!S&&d.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:d.touches?d.touches[0].pageX:d.clientX,startY:d.touches?d.touches[0].pageY:d.clientY,curX:d.touches?d.touches[0].pageX:d.clientX,curY:d.touches?d.touches[0].pageY:d.clientY}}},oe.swipeMove=function(d,p){var S=p.scrolling,U=p.animating,R=p.vertical,W=p.swipeToSlide,K=p.verticalSwiping,te=p.rtl,he=p.currentSlide,de=p.edgeFriction,Se=p.edgeDragged,Ae=p.onEdge,$e=p.swiped,Ee=p.swiping,be=p.slideCount,ze=p.slidesToScroll,Ie=p.infinite,_e=p.touchObject,Pe=p.swipeEvent,Fe=p.listHeight,nt=p.listWidth;if(!S){if(U)return Z(d);R&&W&&K&&Z(d);var yt,vn={},Ha=v(p);_e.curX=d.touches?d.touches[0].pageX:d.clientX,_e.curY=d.touches?d.touches[0].pageY:d.clientY,_e.swipeLength=Math.round(Math.sqrt(Math.pow(_e.curX-_e.startX,2)));var zt=Math.round(Math.sqrt(Math.pow(_e.curY-_e.startY,2)));if(!K&&!Ee&&zt>10)return{scrolling:!0};K&&(_e.swipeLength=zt);var da=(te?-1:1)*(_e.curX>_e.startX?1:-1);K&&(da=_e.curY>_e.startY?1:-1);var Ll=Math.ceil(be/ze),an=ge(p.touchObject,K),un=_e.swipeLength;return Ie||(he===0&&(an==="right"||an==="down")||he+1>=Ll&&(an==="left"||an==="up")||!ne(p)&&(an==="left"||an==="up"))&&(un=_e.swipeLength*de,Se===!1&&Ae&&(Ae(an),vn.edgeDragged=!0)),!$e&&Pe&&(Pe(an),vn.swiped=!0),R?yt=Ha+un*(Fe/nt)*da:te?yt=Ha-un*da:yt=Ha+un*da,K&&(yt=Ha+un*da),vn=b(b({},vn),{},{touchObject:_e,swipeLeft:yt,trackStyle:k(b(b({},p),{},{left:yt}))}),Math.abs(_e.curX-_e.startX)<Math.abs(_e.curY-_e.startY)*.8||_e.swipeLength>10&&(vn.swiping=!0,Z(d)),vn}},oe.swipeEnd=function(d,p){var S=p.dragging,U=p.swipe,R=p.touchObject,W=p.listWidth,K=p.touchThreshold,te=p.verticalSwiping,he=p.listHeight,de=p.swipeToSlide,Se=p.scrolling,Ae=p.onSwipe,$e=p.targetSlide,Ee=p.currentSlide,be=p.infinite;if(!S)return U&&Z(d),{};var ze=te?he/K:W/K,Ie=ge(R,te),_e={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!R.swipeLength)return _e;if(R.swipeLength>ze){Z(d),Ae&&Ae(Ie);var Pe,Fe,nt=be?Ee:$e;switch(Ie){case"left":case"up":Fe=nt+z(p),Pe=de?w(p,Fe):Fe,_e.currentDirection=0;break;case"right":case"down":Fe=nt-z(p),Pe=de?w(p,Fe):Fe,_e.currentDirection=1;break;default:Pe=nt}_e.triggerSlideHandler=Pe}else{var yt=v(p);_e.trackStyle=_(b(b({},p),{},{left:yt}))}return _e};var ce=oe.getNavigableIndexes=function(d){for(var p=d.infinite?d.slideCount*2:d.slideCount,S=d.infinite?d.slidesToShow*-1:0,U=d.infinite?d.slidesToShow*-1:0,R=[];S<p;)R.push(S),S=U+d.slidesToScroll,U+=Math.min(d.slidesToScroll,d.slidesToShow);return R},w=oe.checkNavigable=function(d,p){var S=ce(d),U=0;if(p>S[S.length-1])p=S[S.length-1];else for(var R in S){if(p<S[R]){p=U;break}U=S[R]}return p},z=oe.getSlideCount=function(d){var p=d.centerMode?d.slideWidth*Math.floor(d.slidesToShow/2):0;if(d.swipeToSlide){var S,U=d.listRef,R=U.querySelectorAll&&U.querySelectorAll(".slick-slide")||[];if(Array.from(R).every(function(te){if(d.vertical){if(te.offsetTop+ue(te)/2>d.swipeLeft*-1)return S=te,!1}else if(te.offsetLeft-p+ve(te)/2>d.swipeLeft*-1)return S=te,!1;return!0}),!S)return 0;var W=d.rtl===!0?d.slideCount-d.currentSlide:d.currentSlide,K=Math.abs(S.dataset.index-W)||1;return K}else return d.slidesToScroll},x=oe.checkSpecKeys=function(d,p){return p.reduce(function(S,U){return S&&d.hasOwnProperty(U)},!0)?null:console.error("Keys Missing:",d)},k=oe.getTrackCSS=function(d){x(d,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var p,S;if(!d.vertical)p=H(d)*d.slideWidth;else{var U=d.unslick?d.slideCount:d.slideCount+2*d.slidesToShow;S=U*d.slideHeight}var R={opacity:1,transition:"",WebkitTransition:""};if(d.useTransform){var W=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",K=d.vertical?"translate3d(0px, "+d.left+"px, 0px)":"translate3d("+d.left+"px, 0px, 0px)",te=d.vertical?"translateY("+d.left+"px)":"translateX("+d.left+"px)";R=b(b({},R),{},{WebkitTransform:W,transform:K,msTransform:te})}else d.vertical?R.top=d.left:R.left=d.left;return d.fade&&(R={opacity:1}),p&&(R.width=p),S&&(R.height=S),window&&!window.addEventListener&&window.attachEvent&&(d.vertical?R.marginTop=d.left+"px":R.marginLeft=d.left+"px"),R},_=oe.getTrackAnimateCSS=function(d){x(d,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var p=k(d);return d.useTransform?(p.WebkitTransition="-webkit-transform "+d.speed+"ms "+d.cssEase,p.transition="transform "+d.speed+"ms "+d.cssEase):d.vertical?p.transition="top "+d.speed+"ms "+d.cssEase:p.transition="left "+d.speed+"ms "+d.cssEase,p},v=oe.getTrackLeft=function(d){if(d.unslick)return 0;x(d,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var p=d.slideIndex,S=d.trackRef,U=d.infinite,R=d.centerMode,W=d.slideCount,K=d.slidesToShow,te=d.slidesToScroll,he=d.slideWidth,de=d.listWidth,Se=d.variableWidth,Ae=d.slideHeight,$e=d.fade,Ee=d.vertical,be=0,ze,Ie,_e=0;if($e||d.slideCount===1)return 0;var Pe=0;if(U?(Pe=-G(d),W%te!==0&&p+te>W&&(Pe=-(p>W?K-(p-W):W%te)),R&&(Pe+=parseInt(K/2))):(W%te!==0&&p+te>W&&(Pe=K-W%te),R&&(Pe=parseInt(K/2))),be=Pe*he,_e=Pe*Ae,Ee?ze=p*Ae*-1+_e:ze=p*he*-1+be,Se===!0){var Fe,nt=S&&S.node;if(Fe=p+G(d),Ie=nt&&nt.childNodes[Fe],ze=Ie?Ie.offsetLeft*-1:0,R===!0){Fe=U?p+G(d):p,Ie=nt&&nt.children[Fe],ze=0;for(var yt=0;yt<Fe;yt++)ze-=nt&&nt.children[yt]&&nt.children[yt].offsetWidth;ze-=parseInt(d.centerPadding),ze+=Ie&&(de-Ie.offsetWidth)/2}}return ze},G=oe.getPreClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},V=oe.getPostClones=function(d){return d.unslick||!d.infinite?0:d.variableWidth?d.slideCount:d.slidesToShow+(d.centerMode?1:0)},H=oe.getTotalSlides=function(d){return d.slideCount===1?1:G(d)+d.slideCount+V(d)},J=oe.siblingDirection=function(d){return d.targetSlide>d.currentSlide?d.targetSlide>d.currentSlide+ee(d)?"left":"right":d.targetSlide<d.currentSlide-A(d)?"right":"left"},ee=oe.slidesOnRight=function(d){var p=d.slidesToShow,S=d.centerMode,U=d.rtl,R=d.centerPadding;if(S){var W=(p-1)/2+1;return parseInt(R)>0&&(W+=1),U&&p%2===0&&(W+=1),W}return U?0:p-1},A=oe.slidesOnLeft=function(d){var p=d.slidesToShow,S=d.centerMode,U=d.rtl,R=d.centerPadding;if(S){var W=(p-1)/2+1;return parseInt(R)>0&&(W+=1),!U&&p%2===0&&(W+=1),W}return U?p-1:0};oe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var u=oe.validSettings=Object.keys(o.default);function ae(T){return u.reduce(function(d,p){return T.hasOwnProperty(p)&&(d[p]=T[p]),d},{})}return oe}var Al={},ah;function WS(){if(ah)return Al;ah=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.Track=void 0;var n=s(mn()),o=s(To()),f=Nl();function s(_){return _&&_.__esModule?_:{default:_}}function m(_){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},m(_)}function b(){return b=Object.assign?Object.assign.bind():function(_){for(var v=1;v<arguments.length;v++){var G=arguments[v];for(var V in G)({}).hasOwnProperty.call(G,V)&&(_[V]=G[V])}return _},b.apply(null,arguments)}function D(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function q(_,v){for(var G=0;G<v.length;G++){var V=v[G];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(_,ne(V.key),V)}}function C(_,v,G){return v&&q(_.prototype,v),Object.defineProperty(_,"prototype",{writable:!1}),_}function j(_,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(v&&v.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),v&&Z(_,v)}function Z(_,v){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(G,V){return G.__proto__=V,G},Z(_,v)}function P(_){var v=le();return function(){var G,V=X(_);if(v){var H=X(this).constructor;G=Reflect.construct(V,arguments,H)}else G=V.apply(this,arguments);return ie(this,G)}}function ie(_,v){if(v&&(m(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return re(_)}function re(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function le(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!_})()}function X(_){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},X(_)}function ve(_,v){var G=Object.keys(_);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(_);v&&(V=V.filter(function(H){return Object.getOwnPropertyDescriptor(_,H).enumerable})),G.push.apply(G,V)}return G}function ue(_){for(var v=1;v<arguments.length;v++){var G=arguments[v]!=null?arguments[v]:{};v%2?ve(Object(G),!0).forEach(function(V){ge(_,V,G[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(G)):ve(Object(G)).forEach(function(V){Object.defineProperty(_,V,Object.getOwnPropertyDescriptor(G,V))})}return _}function ge(_,v,G){return(v=ne(v))in _?Object.defineProperty(_,v,{value:G,enumerable:!0,configurable:!0,writable:!0}):_[v]=G,_}function ne(_){var v=ce(_,"string");return m(v)=="symbol"?v:v+""}function ce(_,v){if(m(_)!="object"||!_)return _;var G=_[Symbol.toPrimitive];if(G!==void 0){var V=G.call(_,v);if(m(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(_)}var w=function(v){var G,V,H,J,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,H=ee<0||ee>=v.slideCount,v.centerMode?(J=Math.floor(v.slidesToShow/2),V=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-J-1&&ee<=v.currentSlide+J&&(G=!0)):G=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var A;v.targetSlide<0?A=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?A=v.targetSlide-v.slideCount:A=v.targetSlide;var u=ee===A;return{"slick-slide":!0,"slick-active":G,"slick-center":V,"slick-cloned":H,"slick-current":u}},z=function(v){var G={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(G.width=v.slideWidth),v.fade&&(G.position="relative",v.vertical?G.top=-v.index*parseInt(v.slideHeight):G.left=-v.index*parseInt(v.slideWidth),G.opacity=v.currentSlide===v.index?1:0,G.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(G.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),G},x=function(v,G){return v.key||G},k=function(v){var G,V=[],H=[],J=[],ee=n.default.Children.count(v.children),A=(0,f.lazyStartIndex)(v),u=(0,f.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ae,T){var d,p={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?d=ae:d=n.default.createElement("div",null);var S=z(ue(ue({},v),{},{index:T})),U=d.props.className||"",R=w(ue(ue({},v),{},{index:T}));if(V.push(n.default.cloneElement(d,{key:"original"+x(d,T),"data-index":T,className:(0,o.default)(R,U),tabIndex:"-1","aria-hidden":!R["slick-active"],style:ue(ue({outline:"none"},d.props.style||{}),S),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var W=ee-T;W<=(0,f.getPreClones)(v)&&(G=-W,G>=A&&(d=ae),R=w(ue(ue({},v),{},{index:G})),H.push(n.default.cloneElement(d,{key:"precloned"+x(d,G),"data-index":G,tabIndex:"-1",className:(0,o.default)(R,U),"aria-hidden":!R["slick-active"],style:ue(ue({},d.props.style||{}),S),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}}))),T<(0,f.getPostClones)(v)&&(G=ee+T,G<u&&(d=ae),R=w(ue(ue({},v),{},{index:G})),J.push(n.default.cloneElement(d,{key:"postcloned"+x(d,G),"data-index":G,tabIndex:"-1",className:(0,o.default)(R,U),"aria-hidden":!R["slick-active"],style:ue(ue({},d.props.style||{}),S),onClick:function(te){d.props&&d.props.onClick&&d.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(p)}})))}}),v.rtl?H.concat(V,J).reverse():H.concat(V,J)};return Al.Track=(function(_){j(G,_);var v=P(G);function G(){var V;D(this,G);for(var H=arguments.length,J=new Array(H),ee=0;ee<H;ee++)J[ee]=arguments[ee];return V=v.call.apply(v,[this].concat(J)),ge(re(V),"node",null),ge(re(V),"handleRef",function(A){V.node=A}),V}return C(G,[{key:"render",value:function(){var H=k(this.props),J=this.props,ee=J.onMouseEnter,A=J.onMouseOver,u=J.onMouseLeave,ae={onMouseEnter:ee,onMouseOver:A,onMouseLeave:u};return n.default.createElement("div",b({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ae),H)}}]),G})(n.default.PureComponent),Al}var El={},ih;function IS(){if(ih)return El;ih=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(El,"__esModule",{value:!0}),El.Dots=void 0;var o=m(mn()),f=m(To()),s=Nl();function m(w){return w&&w.__esModule?w:{default:w}}function b(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(w);z&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,k)}return x}function D(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?b(Object(x),!0).forEach(function(k){q(w,k,x[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):b(Object(x)).forEach(function(k){Object.defineProperty(w,k,Object.getOwnPropertyDescriptor(x,k))})}return w}function q(w,z,x){return(z=P(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function C(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function j(w,z){for(var x=0;x<z.length;x++){var k=z[x];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,P(k.key),k)}}function Z(w,z,x){return z&&j(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function P(w){var z=ie(w,"string");return n(z)=="symbol"?z:z+""}function ie(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var k=x.call(w,z);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function re(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&le(w,z)}function le(w,z){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,k){return x.__proto__=k,x},le(w,z)}function X(w){var z=ge();return function(){var x,k=ne(w);if(z){var _=ne(this).constructor;x=Reflect.construct(k,arguments,_)}else x=k.apply(this,arguments);return ve(this,x)}}function ve(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(w)}function ue(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ge(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ge=function(){return!!w})()}function ne(w){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},ne(w)}var ce=function(z){var x;return z.infinite?x=Math.ceil(z.slideCount/z.slidesToScroll):x=Math.ceil((z.slideCount-z.slidesToShow)/z.slidesToScroll)+1,x};return El.Dots=(function(w){re(x,w);var z=X(x);function x(){return C(this,x),z.apply(this,arguments)}return Z(x,[{key:"clickHandler",value:function(_,v){v.preventDefault(),this.props.clickHandler(_)}},{key:"render",value:function(){for(var _=this.props,v=_.onMouseEnter,G=_.onMouseOver,V=_.onMouseLeave,H=_.infinite,J=_.slidesToScroll,ee=_.slidesToShow,A=_.slideCount,u=_.currentSlide,ae=ce({slideCount:A,slidesToScroll:J,slidesToShow:ee,infinite:H}),T={onMouseEnter:v,onMouseOver:G,onMouseLeave:V},d=[],p=0;p<ae;p++){var S=(p+1)*J-1,U=H?S:(0,s.clamp)(S,0,A-1),R=U-(J-1),W=H?R:(0,s.clamp)(R,0,A-1),K=(0,f.default)({"slick-active":H?u>=W&&u<=U:u===W}),te={message:"dots",index:p,slidesToScroll:J,currentSlide:u},he=this.clickHandler.bind(this,te);d=d.concat(o.default.createElement("li",{key:p,className:K},o.default.cloneElement(this.props.customPaging(p),{onClick:he})))}return o.default.cloneElement(this.props.appendDots(d),D({className:this.props.dotsClass},T))}}]),x})(o.default.PureComponent),El}var Ma={},lh;function PS(){if(lh)return Ma;lh=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.PrevArrow=Ma.NextArrow=void 0;var o=m(mn()),f=m(To()),s=Nl();function m(w){return w&&w.__esModule?w:{default:w}}function b(){return b=Object.assign?Object.assign.bind():function(w){for(var z=1;z<arguments.length;z++){var x=arguments[z];for(var k in x)({}).hasOwnProperty.call(x,k)&&(w[k]=x[k])}return w},b.apply(null,arguments)}function D(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(w);z&&(k=k.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,k)}return x}function q(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?D(Object(x),!0).forEach(function(k){C(w,k,x[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):D(Object(x)).forEach(function(k){Object.defineProperty(w,k,Object.getOwnPropertyDescriptor(x,k))})}return w}function C(w,z,x){return(z=ie(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function j(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function Z(w,z){for(var x=0;x<z.length;x++){var k=z[x];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,ie(k.key),k)}}function P(w,z,x){return z&&Z(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function ie(w){var z=re(w,"string");return n(z)=="symbol"?z:z+""}function re(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var k=x.call(w,z);if(n(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function le(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&X(w,z)}function X(w,z){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,k){return x.__proto__=k,x},X(w,z)}function ve(w){var z=ne();return function(){var x,k=ce(w);if(z){var _=ce(this).constructor;x=Reflect.construct(k,arguments,_)}else x=k.apply(this,arguments);return ue(this,x)}}function ue(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ge(w)}function ge(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ne(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!w})()}function ce(w){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},ce(w)}return Ma.PrevArrow=(function(w){le(x,w);var z=ve(x);function x(){return j(this,x),z.apply(this,arguments)}return P(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(_["slick-disabled"]=!0,v=null);var G={key:"0","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},V={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},H;return this.props.prevArrow?H=o.default.cloneElement(this.props.prevArrow,q(q({},G),V)):H=o.default.createElement("button",b({key:"0",type:"button"},G)," ","Previous"),H}}]),x})(o.default.PureComponent),Ma.NextArrow=(function(w){le(x,w);var z=ve(x);function x(){return j(this,x),z.apply(this,arguments)}return P(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(_["slick-disabled"]=!0,v=null);var G={key:"1","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},V={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},H;return this.props.nextArrow?H=o.default.cloneElement(this.props.nextArrow,q(q({},G),V)):H=o.default.createElement("button",b({key:"1",type:"button"},G)," ","Next"),H}}]),x})(o.default.PureComponent),Ma}var lm=(function(){if(typeof Map<"u")return Map;function n(o,f){var s=-1;return o.some(function(m,b){return m[0]===f?(s=b,!0):!1}),s}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(f){var s=n(this.__entries__,f),m=this.__entries__[s];return m&&m[1]},o.prototype.set=function(f,s){var m=n(this.__entries__,f);~m?this.__entries__[m][1]=s:this.__entries__.push([f,s])},o.prototype.delete=function(f){var s=this.__entries__,m=n(s,f);~m&&s.splice(m,1)},o.prototype.has=function(f){return!!~n(this.__entries__,f)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(f,s){s===void 0&&(s=null);for(var m=0,b=this.__entries__;m<b.length;m++){var D=b[m];f.call(s,D[1],D[0])}},o})()})(),mu=typeof window<"u"&&typeof document<"u"&&window.document===document,yo=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),FS=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(yo):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),ex=2;function tx(n,o){var f=!1,s=!1,m=0;function b(){f&&(f=!1,n()),s&&q()}function D(){FS(b)}function q(){var C=Date.now();if(f){if(C-m<ex)return;s=!0}else f=!0,s=!1,setTimeout(D,o);m=C}return q}var nx=20,ax=["top","right","bottom","left","width","height","size","weight"],ix=typeof MutationObserver<"u",lx=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=tx(this.refresh.bind(this),nx)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var f=this.observers_,s=f.indexOf(o);~s&&f.splice(s,1),!f.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(f){return f.gatherActive(),f.hasActive()});return o.forEach(function(f){return f.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!mu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ix?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!mu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var f=o.propertyName,s=f===void 0?"":f,m=ax.some(function(b){return!!~s.indexOf(b)});m&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),rm=(function(n,o){for(var f=0,s=Object.keys(o);f<s.length;f++){var m=s[f];Object.defineProperty(n,m,{value:o[m],enumerable:!1,writable:!1,configurable:!0})}return n}),_i=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||yo}),om=Oo(0,0,0,0);function vo(n){return parseFloat(n)||0}function rh(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return o.reduce(function(s,m){var b=n["border-"+m+"-width"];return s+vo(b)},0)}function rx(n){for(var o=["top","right","bottom","left"],f={},s=0,m=o;s<m.length;s++){var b=m[s],D=n["padding-"+b];f[b]=vo(D)}return f}function ox(n){var o=n.getBBox();return Oo(0,0,o.width,o.height)}function sx(n){var o=n.clientWidth,f=n.clientHeight;if(!o&&!f)return om;var s=_i(n).getComputedStyle(n),m=rx(s),b=m.left+m.right,D=m.top+m.bottom,q=vo(s.width),C=vo(s.height);if(s.boxSizing==="border-box"&&(Math.round(q+b)!==o&&(q-=rh(s,"left","right")+b),Math.round(C+D)!==f&&(C-=rh(s,"top","bottom")+D)),!ux(n)){var j=Math.round(q+b)-o,Z=Math.round(C+D)-f;Math.abs(j)!==1&&(q-=j),Math.abs(Z)!==1&&(C-=Z)}return Oo(m.left,m.top,q,C)}var cx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof _i(n).SVGGraphicsElement}:function(n){return n instanceof _i(n).SVGElement&&typeof n.getBBox=="function"}})();function ux(n){return n===_i(n).document.documentElement}function fx(n){return mu?cx(n)?ox(n):sx(n):om}function dx(n){var o=n.x,f=n.y,s=n.width,m=n.height,b=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,D=Object.create(b.prototype);return rm(D,{x:o,y:f,width:s,height:m,top:f,right:o+s,bottom:m+f,left:o}),D}function Oo(n,o,f,s){return{x:n,y:o,width:f,height:s}}var px=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Oo(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=fx(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),gx=(function(){function n(o,f){var s=dx(f);rm(this,{target:o,contentRect:s})}return n})(),hx=(function(){function n(o,f,s){if(this.activeObservations_=[],this.observations_=new lm,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=f,this.callbackCtx_=s}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof _i(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)||(f.set(o,new px(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof _i(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)&&(f.delete(o),f.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(f){f.isActive()&&o.activeObservations_.push(f)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,f=this.activeObservations_.map(function(s){return new gx(s.target,s.broadcastRect())});this.callback_.call(o,f,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),sm=typeof WeakMap<"u"?new WeakMap:new lm,cm=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var f=lx.getInstance(),s=new hx(o,f,this);sm.set(this,s)}return n})();["observe","unobserve","disconnect"].forEach(function(n){cm.prototype[n]=function(){var o;return(o=sm.get(this))[n].apply(o,arguments)}});var mx=(function(){return typeof yo.ResizeObserver<"u"?yo.ResizeObserver:cm})();const yx=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),vx=D0(yx);var oh;function bx(){if(oh)return Ol;oh=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.InnerSlider=void 0;var n=j(mn()),o=j(KS()),f=j(JS()),s=j(To()),m=Nl(),b=WS(),D=IS(),q=PS(),C=j(vx);function j(H){return H&&H.__esModule?H:{default:H}}function Z(H){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(J){return typeof J}:function(J){return J&&typeof Symbol=="function"&&J.constructor===Symbol&&J!==Symbol.prototype?"symbol":typeof J},Z(H)}function P(){return P=Object.assign?Object.assign.bind():function(H){for(var J=1;J<arguments.length;J++){var ee=arguments[J];for(var A in ee)({}).hasOwnProperty.call(ee,A)&&(H[A]=ee[A])}return H},P.apply(null,arguments)}function ie(H,J){if(H==null)return{};var ee,A,u=re(H,J);if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(H);for(A=0;A<ae.length;A++)ee=ae[A],J.includes(ee)||{}.propertyIsEnumerable.call(H,ee)&&(u[ee]=H[ee])}return u}function re(H,J){if(H==null)return{};var ee={};for(var A in H)if({}.hasOwnProperty.call(H,A)){if(J.includes(A))continue;ee[A]=H[A]}return ee}function le(H,J){var ee=Object.keys(H);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(H);J&&(A=A.filter(function(u){return Object.getOwnPropertyDescriptor(H,u).enumerable})),ee.push.apply(ee,A)}return ee}function X(H){for(var J=1;J<arguments.length;J++){var ee=arguments[J]!=null?arguments[J]:{};J%2?le(Object(ee),!0).forEach(function(A){v(H,A,ee[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(ee)):le(Object(ee)).forEach(function(A){Object.defineProperty(H,A,Object.getOwnPropertyDescriptor(ee,A))})}return H}function ve(H,J){if(!(H instanceof J))throw new TypeError("Cannot call a class as a function")}function ue(H,J){for(var ee=0;ee<J.length;ee++){var A=J[ee];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(H,G(A.key),A)}}function ge(H,J,ee){return J&&ue(H.prototype,J),Object.defineProperty(H,"prototype",{writable:!1}),H}function ne(H,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function");H.prototype=Object.create(J&&J.prototype,{constructor:{value:H,writable:!0,configurable:!0}}),Object.defineProperty(H,"prototype",{writable:!1}),J&&ce(H,J)}function ce(H,J){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,A){return ee.__proto__=A,ee},ce(H,J)}function w(H){var J=k();return function(){var ee,A=_(H);if(J){var u=_(this).constructor;ee=Reflect.construct(A,arguments,u)}else ee=A.apply(this,arguments);return z(this,ee)}}function z(H,J){if(J&&(Z(J)=="object"||typeof J=="function"))return J;if(J!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(H)}function x(H){if(H===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return H}function k(){try{var H=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!H})()}function _(H){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(J){return J.__proto__||Object.getPrototypeOf(J)},_(H)}function v(H,J,ee){return(J=G(J))in H?Object.defineProperty(H,J,{value:ee,enumerable:!0,configurable:!0,writable:!0}):H[J]=ee,H}function G(H){var J=V(H,"string");return Z(J)=="symbol"?J:J+""}function V(H,J){if(Z(H)!="object"||!H)return H;var ee=H[Symbol.toPrimitive];if(ee!==void 0){var A=ee.call(H,J);if(Z(A)!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(J==="string"?String:Number)(H)}return Ol.InnerSlider=(function(H){ne(ee,H);var J=w(ee);function ee(A){var u;ve(this,ee),u=J.call(this,A),v(x(u),"listRefHandler",function(T){return u.list=T}),v(x(u),"trackRefHandler",function(T){return u.track=T}),v(x(u),"adaptHeight",function(){if(u.props.adaptiveHeight&&u.list){var T=u.list.querySelector('[data-index="'.concat(u.state.currentSlide,'"]'));u.list.style.height=(0,m.getHeight)(T)+"px"}}),v(x(u),"componentDidMount",function(){if(u.props.onInit&&u.props.onInit(),u.props.lazyLoad){var T=(0,m.getOnDemandLazySlides)(X(X({},u.props),u.state));T.length>0&&(u.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T))}var d=X({listRef:u.list,trackRef:u.track},u.props);u.updateState(d,!0,function(){u.adaptHeight(),u.props.autoplay&&u.autoPlay("update")}),u.props.lazyLoad==="progressive"&&(u.lazyLoadTimer=setInterval(u.progressiveLazyLoad,1e3)),u.ro=new C.default(function(){u.state.animating?(u.onWindowResized(!1),u.callbackTimers.push(setTimeout(function(){return u.onWindowResized()},u.props.speed))):u.onWindowResized()}),u.ro.observe(u.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(p){p.onfocus=u.props.pauseOnFocus?u.onSlideFocus:null,p.onblur=u.props.pauseOnFocus?u.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",u.onWindowResized):window.attachEvent("onresize",u.onWindowResized)}),v(x(u),"componentWillUnmount",function(){u.animationEndCallback&&clearTimeout(u.animationEndCallback),u.lazyLoadTimer&&clearInterval(u.lazyLoadTimer),u.callbackTimers.length&&(u.callbackTimers.forEach(function(T){return clearTimeout(T)}),u.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",u.onWindowResized):window.detachEvent("onresize",u.onWindowResized),u.autoplayTimer&&clearInterval(u.autoplayTimer),u.ro.disconnect()}),v(x(u),"componentDidUpdate",function(T){if(u.checkImagesLoad(),u.props.onReInit&&u.props.onReInit(),u.props.lazyLoad){var d=(0,m.getOnDemandLazySlides)(X(X({},u.props),u.state));d.length>0&&(u.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(d)}}),u.props.onLazyLoad&&u.props.onLazyLoad(d))}u.adaptHeight();var p=X(X({listRef:u.list,trackRef:u.track},u.props),u.state),S=u.didPropsChange(T);S&&u.updateState(p,S,function(){u.state.currentSlide>=n.default.Children.count(u.props.children)&&u.changeSlide({message:"index",index:n.default.Children.count(u.props.children)-u.props.slidesToShow,currentSlide:u.state.currentSlide}),u.props.autoplay?u.autoPlay("update"):u.pause("paused")})}),v(x(u),"onWindowResized",function(T){u.debouncedResize&&u.debouncedResize.cancel(),u.debouncedResize=(0,f.default)(function(){return u.resizeWindow(T)},50),u.debouncedResize()}),v(x(u),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,d=!!(u.track&&u.track.node);if(d){var p=X(X({listRef:u.list,trackRef:u.track},u.props),u.state);u.updateState(p,T,function(){u.props.autoplay?u.autoPlay("update"):u.pause("paused")}),u.setState({animating:!1}),clearTimeout(u.animationEndCallback),delete u.animationEndCallback}}),v(x(u),"updateState",function(T,d,p){var S=(0,m.initializedState)(T);T=X(X(X({},T),S),{},{slideIndex:S.currentSlide});var U=(0,m.getTrackLeft)(T);T=X(X({},T),{},{left:U});var R=(0,m.getTrackCSS)(T);(d||n.default.Children.count(u.props.children)!==n.default.Children.count(T.children))&&(S.trackStyle=R),u.setState(S,p)}),v(x(u),"ssrInit",function(){if(u.props.variableWidth){var T=0,d=0,p=[],S=(0,m.getPreClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length})),U=(0,m.getPostClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length}));u.props.children.forEach(function(Ie){p.push(Ie.props.style.width),T+=Ie.props.style.width});for(var R=0;R<S;R++)d+=p[p.length-1-R],T+=p[p.length-1-R];for(var W=0;W<U;W++)T+=p[W];for(var K=0;K<u.state.currentSlide;K++)d+=p[K];var te={width:T+"px",left:-d+"px"};if(u.props.centerMode){var he="".concat(p[u.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(he,") / 2 ) ")}return{trackStyle:te}}var de=n.default.Children.count(u.props.children),Se=X(X(X({},u.props),u.state),{},{slideCount:de}),Ae=(0,m.getPreClones)(Se)+(0,m.getPostClones)(Se)+de,$e=100/u.props.slidesToShow*Ae,Ee=100/Ae,be=-Ee*((0,m.getPreClones)(Se)+u.state.currentSlide)*$e/100;u.props.centerMode&&(be+=(100-Ee*$e/100)/2);var ze={width:$e+"%",left:be+"%"};return{slideWidth:Ee+"%",trackStyle:ze}}),v(x(u),"checkImagesLoad",function(){var T=u.list&&u.list.querySelectorAll&&u.list.querySelectorAll(".slick-slide img")||[],d=T.length,p=0;Array.prototype.forEach.call(T,function(S){var U=function(){return++p&&p>=d&&u.onWindowResized()};if(!S.onclick)S.onclick=function(){return S.parentNode.focus()};else{var R=S.onclick;S.onclick=function(W){R(W),S.parentNode.focus()}}S.onload||(u.props.lazyLoad?S.onload=function(){u.adaptHeight(),u.callbackTimers.push(setTimeout(u.onWindowResized,u.props.speed))}:(S.onload=U,S.onerror=function(){U(),u.props.onLazyLoadError&&u.props.onLazyLoadError()}))})}),v(x(u),"progressiveLazyLoad",function(){for(var T=[],d=X(X({},u.props),u.state),p=u.state.currentSlide;p<u.state.slideCount+(0,m.getPostClones)(d);p++)if(u.state.lazyLoadedList.indexOf(p)<0){T.push(p);break}for(var S=u.state.currentSlide-1;S>=-(0,m.getPreClones)(d);S--)if(u.state.lazyLoadedList.indexOf(S)<0){T.push(S);break}T.length>0?(u.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T)):u.lazyLoadTimer&&(clearInterval(u.lazyLoadTimer),delete u.lazyLoadTimer)}),v(x(u),"slideHandler",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=u.props,S=p.asNavFor,U=p.beforeChange,R=p.onLazyLoad,W=p.speed,K=p.afterChange,te=u.state.currentSlide,he=(0,m.slideHandler)(X(X(X({index:T},u.props),u.state),{},{trackRef:u.track,useCSS:u.props.useCSS&&!d})),de=he.state,Se=he.nextState;if(de){U&&U(te,de.currentSlide);var Ae=de.lazyLoadedList.filter(function($e){return u.state.lazyLoadedList.indexOf($e)<0});R&&Ae.length>0&&R(Ae),!u.props.waitForAnimate&&u.animationEndCallback&&(clearTimeout(u.animationEndCallback),K&&K(te),delete u.animationEndCallback),u.setState(de,function(){S&&u.asNavForIndex!==T&&(u.asNavForIndex=T,S.innerSlider.slideHandler(T)),Se&&(u.animationEndCallback=setTimeout(function(){var $e=Se.animating,Ee=ie(Se,["animating"]);u.setState(Ee,function(){u.callbackTimers.push(setTimeout(function(){return u.setState({animating:$e})},10)),K&&K(de.currentSlide),delete u.animationEndCallback})},W))})}}),v(x(u),"changeSlide",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=X(X({},u.props),u.state),S=(0,m.changeSlide)(p,T);if(!(S!==0&&!S)&&(d===!0?u.slideHandler(S,d):u.slideHandler(S),u.props.autoplay&&u.autoPlay("update"),u.props.focusOnSelect)){var U=u.list.querySelectorAll(".slick-current");U[0]&&U[0].focus()}}),v(x(u),"clickHandler",function(T){u.clickable===!1&&(T.stopPropagation(),T.preventDefault()),u.clickable=!0}),v(x(u),"keyHandler",function(T){var d=(0,m.keyHandler)(T,u.props.accessibility,u.props.rtl);d!==""&&u.changeSlide({message:d})}),v(x(u),"selectHandler",function(T){u.changeSlide(T)}),v(x(u),"disableBodyScroll",function(){var T=function(p){p=p||window.event,p.preventDefault&&p.preventDefault(),p.returnValue=!1};window.ontouchmove=T}),v(x(u),"enableBodyScroll",function(){window.ontouchmove=null}),v(x(u),"swipeStart",function(T){u.props.verticalSwiping&&u.disableBodyScroll();var d=(0,m.swipeStart)(T,u.props.swipe,u.props.draggable);d!==""&&u.setState(d)}),v(x(u),"swipeMove",function(T){var d=(0,m.swipeMove)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));d&&(d.swiping&&(u.clickable=!1),u.setState(d))}),v(x(u),"swipeEnd",function(T){var d=(0,m.swipeEnd)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));if(d){var p=d.triggerSlideHandler;delete d.triggerSlideHandler,u.setState(d),p!==void 0&&(u.slideHandler(p),u.props.verticalSwiping&&u.enableBodyScroll())}}),v(x(u),"touchEnd",function(T){u.swipeEnd(T),u.clickable=!0}),v(x(u),"slickPrev",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"previous"})},0))}),v(x(u),"slickNext",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"next"})},0))}),v(x(u),"slickGoTo",function(T){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"index",index:T,currentSlide:u.state.currentSlide},d)},0))}),v(x(u),"play",function(){var T;if(u.props.rtl)T=u.state.currentSlide-u.props.slidesToScroll;else if((0,m.canGoNext)(X(X({},u.props),u.state)))T=u.state.currentSlide+u.props.slidesToScroll;else return!1;u.slideHandler(T)}),v(x(u),"autoPlay",function(T){u.autoplayTimer&&clearInterval(u.autoplayTimer);var d=u.state.autoplaying;if(T==="update"){if(d==="hovered"||d==="focused"||d==="paused")return}else if(T==="leave"){if(d==="paused"||d==="focused")return}else if(T==="blur"&&(d==="paused"||d==="hovered"))return;u.autoplayTimer=setInterval(u.play,u.props.autoplaySpeed+50),u.setState({autoplaying:"playing"})}),v(x(u),"pause",function(T){u.autoplayTimer&&(clearInterval(u.autoplayTimer),u.autoplayTimer=null);var d=u.state.autoplaying;T==="paused"?u.setState({autoplaying:"paused"}):T==="focused"?(d==="hovered"||d==="playing")&&u.setState({autoplaying:"focused"}):d==="playing"&&u.setState({autoplaying:"hovered"})}),v(x(u),"onDotsOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onDotsLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onTrackOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onTrackLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onSlideFocus",function(){return u.props.autoplay&&u.pause("focused")}),v(x(u),"onSlideBlur",function(){return u.props.autoplay&&u.state.autoplaying==="focused"&&u.autoPlay("blur")}),v(x(u),"render",function(){var T=(0,s.default)("slick-slider",u.props.className,{"slick-vertical":u.props.vertical,"slick-initialized":!0}),d=X(X({},u.props),u.state),p=(0,m.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),S=u.props.pauseOnHover;p=X(X({},p),{},{onMouseEnter:S?u.onTrackOver:null,onMouseLeave:S?u.onTrackLeave:null,onMouseOver:S?u.onTrackOver:null,focusOnSelect:u.props.focusOnSelect&&u.clickable?u.selectHandler:null});var U;if(u.props.dots===!0&&u.state.slideCount>=u.props.slidesToShow){var R=(0,m.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),W=u.props.pauseOnDotsHover;R=X(X({},R),{},{clickHandler:u.changeSlide,onMouseEnter:W?u.onDotsLeave:null,onMouseOver:W?u.onDotsOver:null,onMouseLeave:W?u.onDotsLeave:null}),U=n.default.createElement(D.Dots,R)}var K,te,he=(0,m.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);he.clickHandler=u.changeSlide,u.props.arrows&&(K=n.default.createElement(q.PrevArrow,he),te=n.default.createElement(q.NextArrow,he));var de=null;u.props.vertical&&(de={height:u.state.listHeight});var Se=null;u.props.vertical===!1?u.props.centerMode===!0&&(Se={padding:"0px "+u.props.centerPadding}):u.props.centerMode===!0&&(Se={padding:u.props.centerPadding+" 0px"});var Ae=X(X({},de),Se),$e=u.props.touchMove,Ee={className:"slick-list",style:Ae,onClick:u.clickHandler,onMouseDown:$e?u.swipeStart:null,onMouseMove:u.state.dragging&&$e?u.swipeMove:null,onMouseUp:$e?u.swipeEnd:null,onMouseLeave:u.state.dragging&&$e?u.swipeEnd:null,onTouchStart:$e?u.swipeStart:null,onTouchMove:u.state.dragging&&$e?u.swipeMove:null,onTouchEnd:$e?u.touchEnd:null,onTouchCancel:u.state.dragging&&$e?u.swipeEnd:null,onKeyDown:u.props.accessibility?u.keyHandler:null},be={className:T,dir:"ltr",style:u.props.style};return u.props.unslick&&(Ee={className:"slick-list"},be={className:T,style:u.props.style}),n.default.createElement("div",be,u.props.unslick?"":K,n.default.createElement("div",P({ref:u.listRefHandler},Ee),n.default.createElement(b.Track,P({ref:u.trackRefHandler},p),u.props.children)),u.props.unslick?"":te,u.props.unslick?"":U)}),u.list=null,u.track=null,u.state=X(X({},o.default),{},{currentSlide:u.props.initialSlide,targetSlide:u.props.initialSlide?u.props.initialSlide:0,slideCount:n.default.Children.count(u.props.children)}),u.callbackTimers=[],u.clickable=!0,u.debouncedResize=null;var ae=u.ssrInit();return u.state=X(X({},u.state),ae),u}return ge(ee,[{key:"didPropsChange",value:function(u){for(var ae=!1,T=0,d=Object.keys(this.props);T<d.length;T++){var p=d[T];if(!u.hasOwnProperty(p)){ae=!0;break}if(!(Z(u[p])==="object"||typeof u[p]=="function"||isNaN(u[p]))&&u[p]!==this.props[p]){ae=!0;break}}return ae||n.default.Children.count(this.props.children)!==n.default.Children.count(u.children)}}]),ee})(n.default.Component),Ol}var nu,sh;function Sx(){if(sh)return nu;sh=1;var n=function(o){return o.replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase()}).toLowerCase()};return nu=n,nu}var au,ch;function xx(){if(ch)return au;ch=1;var n=Sx(),o=function(m){var b=/[height|width]$/;return b.test(m)},f=function(m){var b="",D=Object.keys(m);return D.forEach(function(q,C){var j=m[q];q=n(q),o(q)&&typeof j=="number"&&(j=j+"px"),j===!0?b+=q:j===!1?b+="not "+q:b+="("+q+": "+j+")",C<D.length-1&&(b+=" and ")}),b},s=function(m){var b="";return typeof m=="string"?m:m instanceof Array?(m.forEach(function(D,q){b+=f(D),q<m.length-1&&(b+=", ")}),b):f(m)};return au=s,au}var uh;function $x(){return uh||(uh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=D(mn()),f=bx(),s=D(xx()),m=D(im()),b=Nl();function D(k){return k&&k.__esModule?k:{default:k}}function q(k){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},q(k)}function C(){return C=Object.assign?Object.assign.bind():function(k){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var G in v)({}).hasOwnProperty.call(v,G)&&(k[G]=v[G])}return k},C.apply(null,arguments)}function j(k,_){var v=Object.keys(k);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(k);_&&(G=G.filter(function(V){return Object.getOwnPropertyDescriptor(k,V).enumerable})),v.push.apply(v,G)}return v}function Z(k){for(var _=1;_<arguments.length;_++){var v=arguments[_]!=null?arguments[_]:{};_%2?j(Object(v),!0).forEach(function(G){w(k,G,v[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(v)):j(Object(v)).forEach(function(G){Object.defineProperty(k,G,Object.getOwnPropertyDescriptor(v,G))})}return k}function P(k,_){if(!(k instanceof _))throw new TypeError("Cannot call a class as a function")}function ie(k,_){for(var v=0;v<_.length;v++){var G=_[v];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(k,z(G.key),G)}}function re(k,_,v){return _&&ie(k.prototype,_),Object.defineProperty(k,"prototype",{writable:!1}),k}function le(k,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(_&&_.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),_&&X(k,_)}function X(k,_){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,G){return v.__proto__=G,v},X(k,_)}function ve(k){var _=ne();return function(){var v,G=ce(k);if(_){var V=ce(this).constructor;v=Reflect.construct(G,arguments,V)}else v=G.apply(this,arguments);return ue(this,v)}}function ue(k,_){if(_&&(q(_)=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ge(k)}function ge(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function ne(){try{var k=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!k})()}function ce(k){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},ce(k)}function w(k,_,v){return(_=z(_))in k?Object.defineProperty(k,_,{value:v,enumerable:!0,configurable:!0,writable:!0}):k[_]=v,k}function z(k){var _=x(k,"string");return q(_)=="symbol"?_:_+""}function x(k,_){if(q(k)!="object"||!k)return k;var v=k[Symbol.toPrimitive];if(v!==void 0){var G=v.call(k,_);if(q(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(k)}n.default=(function(k){le(v,k);var _=ve(v);function v(G){var V;return P(this,v),V=_.call(this,G),w(ge(V),"innerSliderRefHandler",function(H){return V.innerSlider=H}),w(ge(V),"slickPrev",function(){return V.innerSlider.slickPrev()}),w(ge(V),"slickNext",function(){return V.innerSlider.slickNext()}),w(ge(V),"slickGoTo",function(H){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return V.innerSlider.slickGoTo(H,J)}),w(ge(V),"slickPause",function(){return V.innerSlider.pause("paused")}),w(ge(V),"slickPlay",function(){return V.innerSlider.autoPlay("play")}),V.state={breakpoint:null},V._responsiveMediaHandlers=[],V}return re(v,[{key:"media",value:function(V,H){var J=window.matchMedia(V),ee=function(u){var ae=u.matches;ae&&H()};J.addListener(ee),this._responsiveMediaHandlers.push({mql:J,query:V,listener:ee})}},{key:"componentDidMount",value:function(){var V=this;if(this.props.responsive){var H=this.props.responsive.map(function(ee){return ee.breakpoint});H.sort(function(ee,A){return ee-A}),H.forEach(function(ee,A){var u;A===0?u=(0,s.default)({minWidth:0,maxWidth:ee}):u=(0,s.default)({minWidth:H[A-1]+1,maxWidth:ee}),(0,b.canUseDOM)()&&V.media(u,function(){V.setState({breakpoint:ee})})});var J=(0,s.default)({minWidth:H.slice(-1)[0]});(0,b.canUseDOM)()&&this.media(J,function(){V.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(V){V.mql.removeListener(V.listener)})}},{key:"render",value:function(){var V=this,H,J;this.state.breakpoint?(J=this.props.responsive.filter(function(R){return R.breakpoint===V.state.breakpoint}),H=J[0].settings==="unslick"?"unslick":Z(Z(Z({},m.default),this.props),J[0].settings)):H=Z(Z({},m.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(R){return typeof R=="string"?!!R.trim():!!R}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var A=[],u=null,ae=0;ae<ee.length;ae+=H.rows*H.slidesPerRow){for(var T=[],d=ae;d<ae+H.rows*H.slidesPerRow;d+=H.slidesPerRow){for(var p=[],S=d;S<d+H.slidesPerRow&&(H.variableWidth&&ee[S].props.style&&(u=ee[S].props.style.width),!(S>=ee.length));S+=1)p.push(o.default.cloneElement(ee[S],{key:100*ae+10*d+S,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ae+d},p))}H.variableWidth?A.push(o.default.createElement("div",{key:ae,style:{width:u}},T)):A.push(o.default.createElement("div",{key:ae},T))}if(H==="unslick"){var U="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:U},ee)}else A.length<=H.slidesToShow&&(H.unslick=!0);return o.default.createElement(f.InnerSlider,C({style:this.props.style,ref:this.innerSliderRefHandler},(0,b.filterSettings)(H)),A)}}]),v})(o.default.Component)})(Ic)),Ic}var fh;function wx(){return fh||(fh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f($x());function f(s){return s&&s.__esModule?s:{default:s}}n.default=o.default})(Wc)),Wc}var zx=wx();const um=yu(zx),wt="/assets",Tx=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${E.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,iu=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,Ox=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,Ax=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ex=y.button`
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
`,_x=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,jx=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Mx=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Cx=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,kx=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Dx=y.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,dh=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,ph=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${E.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,gh=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Rx=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Hx=y.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${E.motion.iconLift}) scale(${E.motion.scaleHover});
  }
`,Nx=y.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,Lx=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,Ux=y.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,Bx=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${E.effects.carouselBackground};
  overflow: hidden;
`,Gx=y.div`
  position: absolute;
  inset: 0;
  background: ${E.effects.carouselBackdrop};
`,qx=y.div`
  position: relative;
  width: ${E.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${E.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,Yx=y(um)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${E.sizing.carouselSlidePadding};
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
    opacity: ${E.effects.carouselCardOpacity};
    transform: scale(${E.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${E.motion.scaleActive});
    filter: ${E.effects.carouselDropShadow};
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: 0.4;
    transform: scale(0.9);
    margin-top: ${({theme:n})=>n.spacing[4]};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease;
  }

  .slick-center .carousel-caption {
    opacity: 1;
    transform: scale(1);
    color: ${({theme:n})=>n.colors.white};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 0;

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      padding: ${E.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${E.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,Xx=y.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${E.effects.carouselCardShadow};
  cursor: pointer;
`,Qx=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Vx=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${E.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,Zx=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${E.sizing.hairline} solid ${E.effects.glassWhite20};
  background: ${E.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${E.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${E.effects.glassWhite20};
  }
`,hh=({className:n,style:o,onClick:f,direction:s,ariaLabel:m})=>h.jsx(Zx,{className:n,style:o,onClick:f,"aria-label":m,children:s==="next"?h.jsx(Tu,{size:18}):h.jsx(yn,{size:18})});y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`;y.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${E.effects.compositionGradient};
  padding: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.card};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[12]};
  }
`;y.img`
  width: 100%;
  height: auto;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`;const Kx=y.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Jx=y.div`
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
`,Wx=y.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Ix=y.button`
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
`,Px=[`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${wt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${wt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${wt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${wt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],Fx=[`${wt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],e$=({onBack:n})=>{const{t:o}=At(),f=Be.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=q=>{f.current&&f.current.slickGoTo(q)},b=Be.useMemo(()=>new Date().getFullYear(),[]),D=Be.useMemo(()=>({centerMode:!0,centerPadding:E.carousel.centerPaddingLg,infinite:!0,slidesToShow:E.carousel.slidesToShowLg,speed:E.carousel.speed,autoplay:!0,autoplaySpeed:E.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:h.jsx(hh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:h.jsx(hh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:E.carousel.breakpointLg,settings:{slidesToShow:E.carousel.slidesToShowMd,centerPadding:E.carousel.centerPaddingMd}},{breakpoint:E.carousel.breakpointSm,settings:{slidesToShow:E.carousel.slidesToShowSm,slidesToScroll:E.carousel.slidesToScrollSm,centerPadding:E.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:E.carousel.breakpointXs,settings:{slidesToShow:E.carousel.slidesToShowSm,slidesToScroll:E.carousel.slidesToScrollSm,centerPadding:E.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return h.jsxs(Tx,{children:[h.jsx(Ox,{children:h.jsxs(Ax,{children:[h.jsxs(Ex,{onClick:s,"aria-label":o.appIcons.backToPortfolioAria,children:[h.jsx(yn,{size:18}),o.appIcons.backToPortfolio]}),h.jsx(_x,{children:o.work.categories.brandDesign})]})}),h.jsx(jx,{children:h.jsxs(iu,{children:[h.jsx(Mx,{children:o.appIcons.eyebrow}),h.jsxs(Cx,{children:[o.appIcons.titlePrimary," ",h.jsx("em",{children:o.appIcons.titleEmphasis})]}),h.jsx(kx,{children:o.appIcons.lead})]})}),h.jsx(Dx,{children:h.jsxs(iu,{children:[h.jsxs(dh,{children:[h.jsx(ph,{}),h.jsx(gh,{children:o.appIcons.appIconsTitle})]}),h.jsx(Rx,{children:Px.map((q,C)=>h.jsxs(Hx,{children:[h.jsx(Nx,{children:h.jsx(Lx,{src:q,alt:o.appIcons.iconLabels[C]})}),h.jsx(Ux,{children:o.appIcons.iconLabels[C]})]},q))})]})}),h.jsxs(Bx,{children:[h.jsx(Gx,{}),h.jsx(iu,{style:{position:"relative",zIndex:1},children:h.jsxs(dh,{children:[h.jsx(ph,{$light:!0}),h.jsx(gh,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),h.jsx(qx,{children:h.jsx(Yx,{ref:f,...D,children:Fx.map((q,C)=>h.jsxs("div",{onClick:()=>m(C),children:[h.jsx(Xx,{className:"carousel-card",children:h.jsx(Qx,{src:q,alt:o.appIcons.splashLabels[C],loading:"lazy"})}),h.jsx(Vx,{className:"carousel-caption",children:o.appIcons.splashLabels[C]})]},q))})})]}),h.jsx(Kx,{children:h.jsxs(Jx,{children:[h.jsxs(Wx,{children:["© ",b," ",ho,". ",o.appIcons.footerRights]}),h.jsxs(Ix,{onClick:s,children:[o.appIcons.viewMoreProjects,h.jsx(Tu,{size:16})]})]})})]})},t$=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${E.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,n$=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,a$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,i$=y.button`
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
`,l$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,r$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,o$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,s$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,c$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,u$=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,f$=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,d$=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,p$=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,g$=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${E.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,h$=y.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,m$=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,y$=n=>n.includes(" ")?encodeURI(n):n,v$=({onBack:n})=>{const{t:o}=At(),f=mo.find(m=>m.id===17),s=Be.useMemo(()=>{const m=(f==null?void 0:f.gallery)??[],b=[],D=new Map;return m.forEach(q=>{const ie=decodeURIComponent(q.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";D.has(ie)?b[D.get(ie)].items.push(q):(D.set(ie,b.length),b.push({name:ie,items:[q]}))}),b},[f==null?void 0:f.gallery]);return h.jsxs(t$,{children:[h.jsx(n$,{children:h.jsxs(a$,{children:[h.jsxs(i$,{onClick:n,children:[h.jsx(yn,{size:18}),o.appStoreScreenshots.backToPortfolio]}),h.jsx(l$,{children:o.appStoreScreenshots.headerTag})]})}),h.jsxs(o$,{children:[h.jsx(s$,{children:o.appStoreScreenshots.eyebrow}),h.jsx(c$,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&h.jsx(u$,{children:o.appStoreScreenshots.lead})]}),h.jsx(f$,{children:h.jsx(r$,{children:s.map(m=>h.jsxs(d$,{children:[h.jsx(p$,{children:m.name}),h.jsx(g$,{children:m.items.map((b,D)=>h.jsx(h$,{children:h.jsx(m$,{src:y$(b),alt:`${m.name} ${D+1}`,loading:"lazy"})},`${m.name}-${D}`))})]},m.name))})})]})},b$=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,S$=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,x$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,$$=y.button`
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
`,w$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,z$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,T$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,O$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,A$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,E$=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,_$=y.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,j$=y.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,M$=n=>n.includes(" ")?encodeURI(n):n,C$=({onBack:n})=>{const{t:o}=At();return h.jsxs(b$,{children:[h.jsx(S$,{children:h.jsxs(x$,{children:[h.jsxs($$,{onClick:n,children:[h.jsx(yn,{size:18}),o.namelaca.backToPortfolio]}),h.jsx(w$,{children:o.namelaca.headerTag})]})}),h.jsxs(T$,{children:[h.jsx(O$,{children:o.namelaca.eyebrow}),h.jsx(A$,{children:o.namelaca.title})]}),h.jsx(E$,{children:h.jsx(z$,{children:h.jsx(_$,{children:h.jsx(j$,{src:M$("/assets/images/brand/Namelaca icons and illustration/Namelaca.png"),alt:o.namelaca.title})})})})]})},fm="/assets",k$=`${fm}/video/Mindzy – Brain Training`,D$=`${fm}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,R$=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${E.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,mh=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,H$=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,N$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,L$=y.button`
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
`,U$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,B$=y.section`
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
`,G$=y.div`
  position: relative;
  z-index: ${E.zIndex.foreground};
`,q$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Y$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,X$=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Q$=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,V$=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${E.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,Z$=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,K$=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${E.effects.carouselBackground};
  overflow: hidden;
`,J$=y.div`
  position: absolute;
  inset: 0;
  background: ${E.effects.carouselBackdrop};
`,W$=y.div`
  position: relative;
  width: ${E.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${E.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,I$=y(um)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${E.sizing.carouselSlidePadding};
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
    opacity: ${E.effects.carouselCardOpacity};
    transform: scale(${E.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${E.motion.scaleActive});
    filter: ${E.effects.carouselDropShadow};
    pointer-events: auto;
  }

  .slick-slide .carousel-caption {
    opacity: 0.4;
    transform: scale(0.9);
    margin-top: ${({theme:n})=>n.spacing[4]};
    transition: transform 0.4s ease, color 0.4s ease, opacity 0.4s ease;
  }

  .slick-center .carousel-caption {
    opacity: 1;
    transform: scale(1);
    color: ${({theme:n})=>n.colors.white};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    padding: 0;

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      padding: ${E.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${E.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,P$=y.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
  cursor: pointer;
`,F$=y.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0 round 16px);
`,ew=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${E.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,tw=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${E.sizing.hairline} solid ${E.effects.glassWhite20};
  background: ${E.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${E.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${E.effects.glassWhite20};
  }
`,yh=({className:n,style:o,onClick:f,direction:s,ariaLabel:m})=>h.jsx(tw,{className:n,style:o,onClick:f,"aria-label":m,children:s==="next"?h.jsx(Tu,{size:18}):h.jsx(yn,{size:18})}),vh=n=>n.includes(" ")?encodeURI(n):n,nw=["Catch the bug.MP4","Color count.MP4","Linking Pairs.mov","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],aw=({onBack:n})=>{const{t:o}=At(),f=Be.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=q=>{f.current&&f.current.slickGoTo(q)},b=Be.useMemo(()=>nw.map(q=>`${k$}/${q}`),[]),D=Be.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:E.carousel.speed,autoplay:!0,autoplaySpeed:E.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:h.jsx(yh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:h.jsx(yh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:E.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:E.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:E.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:E.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:E.carousel.slidesToScrollSm,centerPadding:E.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return h.jsxs(R$,{children:[h.jsx(H$,{children:h.jsxs(N$,{children:[h.jsxs(L$,{onClick:s,children:[h.jsx(yn,{size:18}),o.mindzy.backToPortfolio]}),h.jsx(U$,{children:o.work.categories.uiuxDesign})]})}),h.jsx(B$,{$coverUrl:vh(D$),children:h.jsx(mh,{children:h.jsxs(G$,{children:[h.jsx(q$,{children:o.mindzy.eyebrow}),h.jsx(Y$,{children:o.mindzy.title}),o.mindzy.lead&&h.jsx(X$,{children:o.mindzy.lead})]})})}),h.jsxs(K$,{children:[h.jsx(J$,{}),h.jsx(mh,{children:h.jsxs(Q$,{children:[h.jsx(V$,{}),h.jsx(Z$,{children:o.mindzy.videoTitle})]})}),h.jsx(W$,{children:h.jsx(I$,{ref:f,...D,children:b.map((q,C)=>{var j;return h.jsxs("div",{onClick:()=>m(C),children:[h.jsx(P$,{className:"carousel-card",children:h.jsx(F$,{src:vh(q),muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"metadata"})}),h.jsx(ew,{className:"carousel-caption",children:(j=q.split("/").pop())==null?void 0:j.replace(/\.(MP4|mov)$/i,"")})]},q)})})})]})]})},dm="/assets",bh=`${dm}/video/Marketing video`,iw=`${dm}/images/brand/Full_Composition_Marketing_video.png`,lw=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${E.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,rw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: 0 ${({theme:n})=>n.spacing[6]};
`,ow=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,sw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,cw=y.button`
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
`,uw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,fw=y.section`
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
`,dw=y.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`,pw=y.div`
  position: relative;
  z-index: 1;
`,gw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,hw=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,mw=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,yw=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  margin-top: ${({theme:n})=>n.spacing[12]};
`,vw=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${E.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,bw=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,Sw=y.div`
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
`,xw=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,$w=y.div`
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
`,ww=y.div`
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
`,Sh=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;y.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`;y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto ${({theme:n})=>n.spacing[12]};
  }
`;y.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: linear-gradient(135deg, ${({theme:n})=>n.colors.brand.purple}20, ${({theme:n})=>n.colors.brand.blue}20);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
`;y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const lu=n=>encodeURI(n),zw=["1080x1920.mp4","App Store.mp4","Concept_2_1080x1920.mp4","video5_1080x1920.mp4","Video_1080x1920_android.mp4","valentine_stickers.mp4"],Tw=["Comp 1.mp4","Concept 1 17-09_1.mp4","main video_2.mp4","video.mp4","Google play.mp4","Video (1).mp4"],Ow=({onBack:n})=>{const{t:o}=At(),f=()=>{if(n){n();return}window.location.hash="#work"};return h.jsxs(lw,{children:[h.jsx(ow,{children:h.jsxs(sw,{children:[h.jsxs(cw,{onClick:f,children:[h.jsx(yn,{size:18}),o.marketingVideo.backToPortfolio]}),h.jsx(uw,{children:o.marketingVideo.headerTag})]})}),h.jsxs(fw,{style:{"--hero-cover-url":`url(${lu(iw)})`},children:[h.jsx(dw,{}),h.jsxs(pw,{children:[h.jsx(gw,{children:o.marketingVideo.eyebrow}),h.jsx(hw,{children:o.marketingVideo.title}),h.jsx(mw,{children:o.marketingVideo.lead})]})]}),h.jsxs(rw,{children:[h.jsxs(yw,{children:[h.jsx(vw,{}),h.jsx(bw,{children:o.marketingVideo.allVideosTitle})]}),h.jsx(Sw,{children:zw.map(s=>h.jsx(ww,{children:h.jsx(Sh,{src:lu(`${bh}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))}),h.jsx(xw,{children:Tw.map(s=>h.jsx($w,{children:h.jsx(Sh,{src:lu(`${bh}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))})]})]})},Aw="/assets",jl=`${Aw}/images/brand/Elemental Quest game`,Ew=`${jl}/logo Elemental Quest png.png`,_w=[`${jl}/Map_1.png`,`${jl}/Map_2.png`,`${jl}/Map_3.png`,`${jl}/Map_4.png`],jw=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Mw=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: ${E.effects.glassWhite70};
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid ${E.effects.overlayWhite40};
`,Cw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,kw=y.button`
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
`,Dw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Rw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Hw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Nw=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Lw=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Uw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,Bw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,Gw=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,qw=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:n})=>n.spacing[2]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[4]};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Yw=y.div`
  overflow: hidden;
`,Xw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,xh=n=>n.includes(" ")?encodeURI(n):n,Qw=({onBack:n})=>{const{t:o}=At();return h.jsxs(jw,{children:[h.jsx(Mw,{children:h.jsxs(Cw,{children:[h.jsxs(kw,{onClick:n,children:[h.jsx(yn,{size:18}),o.elementalQuest.backToPortfolio]}),h.jsx(Dw,{children:o.elementalQuest.headerTag})]})}),h.jsxs(Rw,{children:[h.jsx(Hw,{children:o.elementalQuest.eyebrow}),h.jsx(Nw,{children:o.elementalQuest.title}),h.jsx(Lw,{children:o.elementalQuest.lead})]}),h.jsxs(Uw,{children:[h.jsx(Bw,{children:h.jsx(Gw,{src:xh(Ew),alt:o.elementalQuest.logoAlt})}),h.jsx(qw,{children:_w.map((f,s)=>h.jsx(Yw,{children:h.jsx(Xw,{src:xh(f),alt:`${o.elementalQuest.mapAlt} ${s+1}`})},s))})]})]})},Vw="/assets",so=`${Vw}/images/brand/Combat Planes`,Zw=`${so}/logo_Combat Planes.png`,Kw=[`${so}/Maps.png`,`${so}/Planes skins.png`,`${so}/Characters.png`],Jw=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: #2C307A;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Ww=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: rgba(44, 48, 122, 0.85);
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,Iw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Pw=y.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.white};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.slate[300]};
  }
`,Fw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,e2=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,t2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,n2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,a2=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,i2=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,l2=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,r2=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,o2=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,s2=y.div`
  overflow: hidden;
`,c2=y.img`
  width: 100%;
  height: auto;
  display: block;
`,$h=n=>n.includes(" ")?encodeURI(n):n,u2=({onBack:n})=>{const{t:o}=At();return h.jsxs(Jw,{children:[h.jsx(Ww,{children:h.jsxs(Iw,{children:[h.jsxs(Pw,{onClick:n,children:[h.jsx(yn,{size:18}),o.combatPlanes.backToPortfolio]}),h.jsx(Fw,{children:o.combatPlanes.headerTag})]})}),h.jsxs(e2,{children:[h.jsx(t2,{children:o.combatPlanes.eyebrow}),h.jsx(n2,{children:o.combatPlanes.title}),h.jsx(a2,{children:o.combatPlanes.lead})]}),h.jsxs(i2,{children:[h.jsx(l2,{children:h.jsx(r2,{src:$h(Zw),alt:o.combatPlanes.logoAlt})}),h.jsx(o2,{children:Kw.map((f,s)=>h.jsx(s2,{children:h.jsx(c2,{src:$h(f),alt:`${o.combatPlanes.galleryAlt} ${s+1}`})},s))})]})]})},pm="/assets",Rl=`${pm}/images/brand/Fatty Fish`,f2=`${Rl}/Logo Fatty Fish.png`,d2=`${pm}/video/Fatty Fish/Fatty Fish video.mp4`,p2=[`${Rl}/Character.png`,`${Rl}/Objects.png`],g2=[`${Rl}/IMG_1.png`,`${Rl}/IMG_2.png`],h2=y.section`
  min-height: ${E.layout.fullViewportHeight};
  background: #4F22D1;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,m2=y.header`
  position: sticky;
  top: 0;
  z-index: ${E.zIndex.stickyHeader};
  background: rgba(79, 34, 209, 0.85);
  backdrop-filter: blur(${E.effects.blurStrong});
  border-bottom: ${E.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,y2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v2=y.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.white};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.slate[300]};
  }
`,b2=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,S2=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,x2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,$2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,w2=y.p`
  max-width: ${E.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,z2=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,T2=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,O2=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,A2=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,E2=y.div`
  overflow: hidden;
`,_2=y.img`
  width: 100%;
  height: auto;
  display: block;
`,j2=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[6]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`,M2=y.img`
  width: 100%;
  height: auto;
  display: block;
`,C2=y.div`
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[8]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    max-width: 80%;
  }
`,k2=y.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,no=n=>n.includes(" ")?encodeURI(n):n,D2=({onBack:n})=>{const{t:o}=At();return h.jsxs(h2,{children:[h.jsx(m2,{children:h.jsxs(y2,{children:[h.jsxs(v2,{onClick:n,children:[h.jsx(yn,{size:18}),o.fattyFish.backToPortfolio]}),h.jsx(b2,{children:o.fattyFish.headerTag})]})}),h.jsxs(S2,{children:[h.jsx(x2,{children:o.fattyFish.eyebrow}),h.jsx($2,{children:o.fattyFish.title}),h.jsx(w2,{children:o.fattyFish.lead})]}),h.jsxs(z2,{children:[h.jsx(T2,{children:h.jsx(O2,{src:no(f2),alt:o.fattyFish.logoAlt})}),h.jsx(A2,{children:p2.map((f,s)=>h.jsx(E2,{children:h.jsx(_2,{src:no(f),alt:`${o.fattyFish.galleryAlt} ${s+1}`})},s))}),h.jsx(j2,{children:g2.map((f,s)=>h.jsx(M2,{src:no(f),alt:`${o.fattyFish.galleryAlt} screenshot ${s+1}`},s))}),h.jsx(C2,{children:h.jsx(k2,{src:no(d2),autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]})]})},R2=y.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${E.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${E.zIndex.progress};
  transition: width 0.1s ease;
`,H2=()=>{const[n,o]=Be.useState(0);return Be.useEffect(()=>{const f=()=>{const s=document.body.scrollTop||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=m>0?s/m*100:0;o(b)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),h.jsx(R2,{$width:n})},N2=Mi`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,L2=y.div`
  min-height: ${E.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,U2=y.div`
  position: fixed;
  inset: 0;
  z-index: ${E.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,ru=y.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${E.effects.blurBlob});
  opacity: ${E.effects.blobOpacity};
  animation: ${N2} 3s ease-in-out infinite;

  ${({$position:n})=>n==="top-left"&&`
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${E.effects.blobBlue};
    `}

  ${({$position:n})=>n==="top-right"&&`
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${E.effects.blobPurple};
      animation: none;
    `}

  ${({$position:n})=>n==="bottom-left"&&`
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${E.effects.blobPink};
      animation: none;
    `}
`,B2=y.div`
  position: relative;
  z-index: ${E.zIndex.foreground};
`,G2=y.div`
  position: fixed;
  right: ${({theme:n})=>n.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${E.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[1]};
  padding: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${E.effects.glassWhite80};
  backdrop-filter: blur(${E.effects.blurGlass});
  box-shadow: ${({theme:n})=>n.shadows.md};
  border: ${E.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,wh=y.button`
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
`,q2=()=>{const{lang:n,setLang:o,t:f}=At();return h.jsxs(G2,{children:[h.jsx(wh,{$active:n==="en",onClick:()=>o("en"),title:f.languageSwitch.enTitle,children:f.languageSwitch.enShort}),h.jsx(wh,{$active:n==="uk",onClick:()=>o("uk"),title:f.languageSwitch.ukTitle,children:f.languageSwitch.ukShort})]})};function Y2(){const[n,o]=Be.useState(Ne.PORTFOLIO),[f,s]=Be.useState(tn.HERO),m="app-icons",b="app-store-screenshots",D="namelaca",q="mindzy",C="marketing-video",j="elemental-quest",Z="combat-planes",P="fatty-fish";Be.useEffect(()=>{const le=()=>{if(!window.location.hash)return;const X=window.location.hash.replace("#","");if(X===m){o(Ne.APP_ICONS);return}if(X===b){o(Ne.APP_STORE_SCREENSHOTS);return}if(X===D){o(Ne.NAMELACA);return}if(X===q){o(Ne.MINDZY);return}if(X===C){o(Ne.MARKETING_VIDEO);return}if(X===j){o(Ne.ELEMENTAL_QUEST);return}if(X===Z){o(Ne.COMBAT_PLANES);return}if(X===P){o(Ne.FATTY_FISH);return}const ve=X,ue=document.getElementById(ve);ue&&(o(Ne.PORTFOLIO),s(ve),ue.scrollIntoView({behavior:"smooth",block:"start"}))};return le(),window.addEventListener("hashchange",le),()=>window.removeEventListener("hashchange",le)},[]),Be.useEffect(()=>{if(n!==Ne.PORTFOLIO)return;const le=document.getElementById(f);le&&le.scrollIntoView({behavior:"smooth",block:"start"})},[n,f]),Be.useEffect(()=>{(n===Ne.APP_ICONS||n===Ne.APP_STORE_SCREENSHOTS||n===Ne.NAMELACA||n===Ne.MINDZY||n===Ne.MARKETING_VIDEO||n===Ne.ELEMENTAL_QUEST||n===Ne.COMBAT_PLANES||n===Ne.FATTY_FISH)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const ie=le=>{o(Ne.PORTFOLIO),s(le),window.history.pushState(null,"",`#${le}`);const X=document.getElementById(le);X&&X.scrollIntoView({behavior:"smooth",block:"start"})},re=()=>{o(Ne.PORTFOLIO),s(tn.WORK),window.history.pushState(null,"",`#${tn.WORK}`);const le=document.getElementById(tn.WORK);le&&le.scrollIntoView({behavior:"smooth",block:"start"})};return h.jsxs(L2,{children:[h.jsxs(U2,{children:[h.jsx(ru,{$position:"top-left"}),h.jsx(ru,{$position:"top-right"}),h.jsx(ru,{$position:"bottom-left"})]}),h.jsxs(B2,{children:[h.jsx(H2,{}),n===Ne.PORTFOLIO&&h.jsxs(h.Fragment,{children:[h.jsx(q2,{}),h.jsx(Fb,{onNavigate:ie})]}),n===Ne.PORTFOLIO?h.jsxs(h.Fragment,{children:[h.jsxs("main",{children:[h.jsx(h1,{}),h.jsx(pS,{}),h.jsx(US,{})]}),h.jsx(ZS,{})]}):n===Ne.APP_ICONS?h.jsx(e$,{onBack:re}):n===Ne.APP_STORE_SCREENSHOTS?h.jsx(v$,{onBack:re}):n===Ne.NAMELACA?h.jsx(C$,{onBack:re}):n===Ne.MINDZY?h.jsx(aw,{onBack:re}):n===Ne.MARKETING_VIDEO?h.jsx(Ow,{onBack:re}):n===Ne.ELEMENTAL_QUEST?h.jsx(Qw,{onBack:re}):n===Ne.COMBAT_PLANES?h.jsx(u2,{onBack:re}):n===Ne.FATTY_FISH?h.jsx(D2,{onBack:re}):null]})]})}function X2(){return h.jsx(Hb,{children:h.jsx(Y2,{})})}const Q2=Zv`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: ${E.layout.fullViewportHeight};
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
    width: ${E.sizing.scrollbarWidth};
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
`,V2={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},Z2={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},K2={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},J2={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},W2={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},I2={container:"1280px"},P2={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},F2={colors:V2,spacing:Z2,radii:K2,shadows:J2,typography:W2,layout:I2,breakpoints:P2},gm=document.getElementById("root");if(!gm)throw new Error("Could not find root element to mount to");const ez=Q0.createRoot(gm);ez.render(h.jsx(pt.StrictMode,{children:h.jsxs(Xv,{theme:F2,children:[h.jsx(Q2,{}),h.jsx(X2,{})]})}));
