(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const M of b.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function u(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(m){if(m.ep)return;m.ep=!0;const b=u(m);fetch(m.href,b)}})();var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function rv(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var u=function s(){return this instanceof s?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};u.prototype=o.prototype}else u={};return Object.defineProperty(u,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var m=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(u,s,m.get?m:{enumerable:!0,get:function(){return n[s]}})}),u}var Pc={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function ov(){if(Ug)return Dl;Ug=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(s,m,b){var M=null;if(b!==void 0&&(M=""+b),m.key!==void 0&&(M=""+m.key),"key"in m){b={};for(var G in m)G!=="key"&&(b[G]=m[G])}else b=m;return m=b.ref,{$$typeof:n,type:s,key:M,ref:m!==void 0?m:null,props:b}}return Dl.Fragment=o,Dl.jsx=u,Dl.jsxs=u,Dl}var Bg;function sv(){return Bg||(Bg=1,Pc.exports=ov()),Pc.exports}var d=sv(),Wc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function cv(){if(Gg)return xe;Gg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),M=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),le=Symbol.iterator;function re(g){return g===null||typeof g!="object"?null:(g=le&&g[le]||g["@@iterator"],typeof g=="function"?g:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,de={};function ue(g,S,U){this.props=g,this.context=S,this.refs=de,this.updater=U||ne}ue.prototype.isReactComponent={},ue.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},ue.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ge(){}ge.prototype=ue.prototype;function ae(g,S,U){this.props=g,this.context=S,this.refs=de,this.updater=U||ne}var se=ae.prototype=new ge;se.constructor=ae,V(se,ue.prototype),se.isPureReactComponent=!0;var w=Array.isArray;function z(){}var x={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function O(g,S,U){var H=U.ref;return{$$typeof:n,type:g,key:S,ref:H!==void 0?H:null,props:U}}function v(g,S){return O(g.type,S,g.props)}function q(g){return typeof g=="object"&&g!==null&&g.$$typeof===n}function Z(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(U){return S[U]})}var R=/\/+/g;function P(g,S){return typeof g=="object"&&g!==null&&g.key!=null?Z(""+g.key):S.toString(36)}function ee(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(z,z):(g.status="pending",g.then(function(S){g.status==="pending"&&(g.status="fulfilled",g.value=S)},function(S){g.status==="pending"&&(g.status="rejected",g.reason=S)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function j(g,S,U,H,I){var K=typeof g;(K==="undefined"||K==="boolean")&&(g=null);var te=!1;if(g===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(g.$$typeof){case n:case o:te=!0;break;case X:return te=g._init,j(te(g._payload),S,U,H,I)}}if(te)return I=I(g),te=H===""?"."+P(g,0):H,w(I)?(U="",te!=null&&(U=te.replace(R,"$&/")+"/"),j(I,S,U,"",function(Se){return Se})):I!=null&&(q(I)&&(I=v(I,U+(I.key==null||g&&g.key===I.key?"":(""+I.key).replace(R,"$&/")+"/")+te)),S.push(I)),1;te=0;var me=H===""?".":H+":";if(w(g))for(var pe=0;pe<g.length;pe++)H=g[pe],K=me+P(H,pe),te+=j(H,S,U,K,I);else if(pe=re(g),typeof pe=="function")for(g=pe.call(g),pe=0;!(H=g.next()).done;)H=H.value,K=me+P(H,pe++),te+=j(H,S,U,K,I);else if(K==="object"){if(typeof g.then=="function")return j(ee(g),S,U,H,I);throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return te}function f(g,S,U){if(g==null)return g;var H=[],I=0;return j(g,H,"","",function(K){return S.call(U,K,I++)}),H}function ie(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(U){(g._status===0||g._status===-1)&&(g._status=1,g._result=U)},function(U){(g._status===0||g._status===-1)&&(g._status=2,g._result=U)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var T=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},p={map:f,forEach:function(g,S,U){f(g,function(){S.apply(this,arguments)},U)},count:function(g){var S=0;return f(g,function(){S++}),S},toArray:function(g){return f(g,function(S){return S})||[]},only:function(g){if(!q(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return xe.Activity=W,xe.Children=p,xe.Component=ue,xe.Fragment=u,xe.Profiler=m,xe.PureComponent=ae,xe.StrictMode=s,xe.Suspense=k,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,xe.__COMPILER_RUNTIME={__proto__:null,c:function(g){return x.H.useMemoCache(g)}},xe.cache=function(g){return function(){return g.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(g,S,U){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=V({},g.props),I=g.key;if(S!=null)for(K in S.key!==void 0&&(I=""+S.key),S)!D.call(S,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&S.ref===void 0||(H[K]=S[K]);var K=arguments.length-2;if(K===1)H.children=U;else if(1<K){for(var te=Array(K),me=0;me<K;me++)te[me]=arguments[me+2];H.children=te}return O(g.type,I,H)},xe.createContext=function(g){return g={$$typeof:M,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},xe.createElement=function(g,S,U){var H,I={},K=null;if(S!=null)for(H in S.key!==void 0&&(K=""+S.key),S)D.call(S,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(I[H]=S[H]);var te=arguments.length-2;if(te===1)I.children=U;else if(1<te){for(var me=Array(te),pe=0;pe<te;pe++)me[pe]=arguments[pe+2];I.children=me}if(g&&g.defaultProps)for(H in te=g.defaultProps,te)I[H]===void 0&&(I[H]=te[H]);return O(g,K,I)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(g){return{$$typeof:G,render:g}},xe.isValidElement=q,xe.lazy=function(g){return{$$typeof:X,_payload:{_status:-1,_result:g},_init:ie}},xe.memo=function(g,S){return{$$typeof:A,type:g,compare:S===void 0?null:S}},xe.startTransition=function(g){var S=x.T,U={};x.T=U;try{var H=g(),I=x.S;I!==null&&I(U,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(z,T)}catch(K){T(K)}finally{S!==null&&U.types!==null&&(S.types=U.types),x.T=S}},xe.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},xe.use=function(g){return x.H.use(g)},xe.useActionState=function(g,S,U){return x.H.useActionState(g,S,U)},xe.useCallback=function(g,S){return x.H.useCallback(g,S)},xe.useContext=function(g){return x.H.useContext(g)},xe.useDebugValue=function(){},xe.useDeferredValue=function(g,S){return x.H.useDeferredValue(g,S)},xe.useEffect=function(g,S){return x.H.useEffect(g,S)},xe.useEffectEvent=function(g){return x.H.useEffectEvent(g)},xe.useId=function(){return x.H.useId()},xe.useImperativeHandle=function(g,S,U){return x.H.useImperativeHandle(g,S,U)},xe.useInsertionEffect=function(g,S){return x.H.useInsertionEffect(g,S)},xe.useLayoutEffect=function(g,S){return x.H.useLayoutEffect(g,S)},xe.useMemo=function(g,S){return x.H.useMemo(g,S)},xe.useOptimistic=function(g,S){return x.H.useOptimistic(g,S)},xe.useReducer=function(g,S,U){return x.H.useReducer(g,S,U)},xe.useRef=function(g){return x.H.useRef(g)},xe.useState=function(g){return x.H.useState(g)},xe.useSyncExternalStore=function(g,S,U){return x.H.useSyncExternalStore(g,S,U)},xe.useTransition=function(){return x.H.useTransition()},xe.version="19.2.3",xe}var qg;function zn(){return qg||(qg=1,Wc.exports=cv()),Wc.exports}var je=zn();const yt=_u(je);var Ic={exports:{}},Hl={},Jc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function uv(){return Yg||(Yg=1,(function(n){function o(j,f){var ie=j.length;j.push(f);e:for(;0<ie;){var T=ie-1>>>1,p=j[T];if(0<m(p,f))j[T]=f,j[ie]=p,ie=T;else break e}}function u(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var f=j[0],ie=j.pop();if(ie!==f){j[0]=ie;e:for(var T=0,p=j.length,g=p>>>1;T<g;){var S=2*(T+1)-1,U=j[S],H=S+1,I=j[H];if(0>m(U,ie))H<p&&0>m(I,U)?(j[T]=I,j[H]=ie,T=H):(j[T]=U,j[S]=ie,T=S);else if(H<p&&0>m(I,ie))j[T]=I,j[H]=ie,T=H;else break e}}return f}function m(j,f){var ie=j.sortIndex-f.sortIndex;return ie!==0?ie:j.id-f.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;n.unstable_now=function(){return b.now()}}else{var M=Date,G=M.now();n.unstable_now=function(){return M.now()-G}}var k=[],A=[],X=1,W=null,le=3,re=!1,ne=!1,V=!1,de=!1,ue=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function se(j){for(var f=u(A);f!==null;){if(f.callback===null)s(A);else if(f.startTime<=j)s(A),f.sortIndex=f.expirationTime,o(k,f);else break;f=u(A)}}function w(j){if(V=!1,se(j),!ne)if(u(k)!==null)ne=!0,z||(z=!0,Z());else{var f=u(A);f!==null&&ee(w,f.startTime-j)}}var z=!1,x=-1,D=5,O=-1;function v(){return de?!0:!(n.unstable_now()-O<D)}function q(){if(de=!1,z){var j=n.unstable_now();O=j;var f=!0;try{e:{ne=!1,V&&(V=!1,ge(x),x=-1),re=!0;var ie=le;try{t:{for(se(j),W=u(k);W!==null&&!(W.expirationTime>j&&v());){var T=W.callback;if(typeof T=="function"){W.callback=null,le=W.priorityLevel;var p=T(W.expirationTime<=j);if(j=n.unstable_now(),typeof p=="function"){W.callback=p,se(j),f=!0;break t}W===u(k)&&s(k),se(j)}else s(k);W=u(k)}if(W!==null)f=!0;else{var g=u(A);g!==null&&ee(w,g.startTime-j),f=!1}}break e}finally{W=null,le=ie,re=!1}f=void 0}}finally{f?Z():z=!1}}}var Z;if(typeof ae=="function")Z=function(){ae(q)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,P=R.port2;R.port1.onmessage=q,Z=function(){P.postMessage(null)}}else Z=function(){ue(q,0)};function ee(j,f){x=ue(function(){j(n.unstable_now())},f)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return le},n.unstable_next=function(j){switch(le){case 1:case 2:case 3:var f=3;break;default:f=le}var ie=le;le=f;try{return j()}finally{le=ie}},n.unstable_requestPaint=function(){de=!0},n.unstable_runWithPriority=function(j,f){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ie=le;le=j;try{return f()}finally{le=ie}},n.unstable_scheduleCallback=function(j,f,ie){var T=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?T+ie:T):ie=T,j){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=ie+p,j={id:X++,callback:f,priorityLevel:j,startTime:ie,expirationTime:p,sortIndex:-1},ie>T?(j.sortIndex=ie,o(A,j),u(k)===null&&j===u(A)&&(V?(ge(x),x=-1):V=!0,ee(w,ie-T))):(j.sortIndex=p,o(k,j),ne||re||(ne=!0,z||(z=!0,Z()))),j},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(j){var f=le;return function(){var ie=le;le=f;try{return j.apply(this,arguments)}finally{le=ie}}}})(Fc)),Fc}var Vg;function fv(){return Vg||(Vg=1,Jc.exports=uv()),Jc.exports}var eu={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function dv(){if(Xg)return At;Xg=1;var n=zn();function o(k){var A="https://react.dev/errors/"+k;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var X=2;X<arguments.length;X++)A+="&args[]="+encodeURIComponent(arguments[X])}return"Minified React error #"+k+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(k,A,X){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:W==null?null:""+W,children:k,containerInfo:A,implementation:X}}var M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(k,A){if(k==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,At.createPortal=function(k,A){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(o(299));return b(k,A,null,X)},At.flushSync=function(k){var A=M.T,X=s.p;try{if(M.T=null,s.p=2,k)return k()}finally{M.T=A,s.p=X,s.d.f()}},At.preconnect=function(k,A){typeof k=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,s.d.C(k,A))},At.prefetchDNS=function(k){typeof k=="string"&&s.d.D(k)},At.preinit=function(k,A){if(typeof k=="string"&&A&&typeof A.as=="string"){var X=A.as,W=G(X,A.crossOrigin),le=typeof A.integrity=="string"?A.integrity:void 0,re=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;X==="style"?s.d.S(k,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:W,integrity:le,fetchPriority:re}):X==="script"&&s.d.X(k,{crossOrigin:W,integrity:le,fetchPriority:re,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},At.preinitModule=function(k,A){if(typeof k=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var X=G(A.as,A.crossOrigin);s.d.M(k,{crossOrigin:X,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&s.d.M(k)},At.preload=function(k,A){if(typeof k=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var X=A.as,W=G(X,A.crossOrigin);s.d.L(k,X,{crossOrigin:W,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},At.preloadModule=function(k,A){if(typeof k=="string")if(A){var X=G(A.as,A.crossOrigin);s.d.m(k,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:X,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else s.d.m(k)},At.requestFormReset=function(k){s.d.r(k)},At.unstable_batchedUpdates=function(k,A){return k(A)},At.useFormState=function(k,A,X){return M.H.useFormState(k,A,X)},At.useFormStatus=function(){return M.H.useHostTransitionStatus()},At.version="19.2.3",At}var Qg;function pv(){if(Qg)return eu.exports;Qg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),eu.exports=dv(),eu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function gv(){if(Zg)return Hl;Zg=1;var n=fv(),o=zn(),u=pv();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(b(e)!==e)throw Error(s(188))}function A(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return k(l),e;if(r===i)return k(l),t;r=r.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=r;else{for(var c=!1,h=l.child;h;){if(h===a){c=!0,a=l,i=r;break}if(h===i){c=!0,i=l,a=r;break}h=h.sibling}if(!c){for(h=r.child;h;){if(h===a){c=!0,a=r,i=l;break}if(h===i){c=!0,i=r,a=l;break}h=h.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function X(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=X(e),t!==null)return t;e=e.sibling}return null}var W=Object.assign,le=Symbol.for("react.element"),re=Symbol.for("react.transitional.element"),ne=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ge=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case ue:return"Profiler";case de:return"StrictMode";case w:return"Suspense";case z:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ne:return"Portal";case ae:return e.displayName||"Context";case ge:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return t=e.displayName||null,t!==null?t:P(e.type)||"Memo";case D:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var ee=Array.isArray,j=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,f=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},T=[],p=-1;function g(e){return{current:e}}function S(e){0>p||(e.current=T[p],T[p]=null,p--)}function U(e,t){p++,T[p]=e.current,e.current=t}var H=g(null),I=g(null),K=g(null),te=g(null);function me(e,t){switch(U(K,t),U(I,e),U(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sg(t),e=cg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(H),U(H,e)}function pe(){S(H),S(I),S(K)}function Se(e){e.memoizedState!==null&&U(te,e);var t=H.current,a=cg(t,e.type);t!==a&&(U(I,e),U(H,a))}function Oe(e){I.current===e&&(S(H),S(I)),te.current===e&&(S(te),_l._currentValue=ie)}var $e,Ae;function be(e){if($e===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$e=t&&t[1]||"",Ae=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+Ae}var ze=!1;function Fe(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(Y){var B=Y}Reflect.construct(e,[],F)}else{try{F.call()}catch(Y){B=Y}e.call(F.prototype)}}else{try{throw Error()}catch(Y){B=Y}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),c=r[0],h=r[1];if(c&&h){var $=c.split(`
`),N=h.split(`
`);for(l=i=0;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(i===$.length||l===N.length)for(i=$.length-1,l=N.length-1;1<=i&&0<=l&&$[i]!==N[l];)l--;for(;1<=i&&0<=l;i--,l--)if($[i]!==N[l]){if(i!==1||l!==1)do if(i--,l--,0>l||$[i]!==N[l]){var Q=`
`+$[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Fe(e.type,!1);case 11:return Fe(e.type.render,!1);case 1:return Fe(e.type,!0);case 31:return be("Activity");default:return""}}function et(e){try{var t="",a=null;do t+=_e(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var nt=Object.prototype.hasOwnProperty,lt=n.unstable_scheduleCallback,xt=n.unstable_cancelCallback,En=n.unstable_shouldYield,Va=n.unstable_requestPaint,Ot=n.unstable_now,Sa=n.unstable_getCurrentPriorityLevel,Kl=n.unstable_ImmediatePriority,sn=n.unstable_UserBlockingPriority,yn=n.unstable_NormalPriority,Gm=n.unstable_LowPriority,Gu=n.unstable_IdlePriority,qm=n.log,Ym=n.unstable_setDisableYieldValue,qi=null,Ut=null;function Qn(e){if(typeof qm=="function"&&Ym(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(qi,e)}catch{}}var Bt=Math.clz32?Math.clz32:Qm,Vm=Math.log,Xm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Vm(e)/Xm|0)|0}var Pl=256,Wl=262144,Il=4194304;function xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?l=xa(i):(c&=h,c!==0?l=xa(c):a||(a=h&~e,a!==0&&(l=xa(a))))):(h=i&~r,h!==0?l=xa(h):c!==0?l=xa(c):a||(a=i&~e,a!==0&&(l=xa(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Yi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function Lo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Vi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Km(e,t,a,i,l,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,$=e.expirationTimes,N=e.hiddenUpdates;for(a=c&~a;0<a;){var Q=31-Bt(a),F=1<<Q;h[Q]=0,$[Q]=-1;var B=N[Q];if(B!==null)for(N[Q]=null,Q=0;Q<B.length;Q++){var Y=B[Q];Y!==null&&(Y.lane&=-536870913)}a&=~F}i!==0&&Yu(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Vu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Bt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function Xu(e,t){var a=t&-t;return a=(a&42)!==0?1:No(a),(a&(e.suspendedLanes|t))!==0?0:a}function No(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Uo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qu(){var e=f.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function Zu(e,t){var a=f.p;try{return f.p=e,t()}finally{f.p=a}}var Zn=Math.random().toString(36).slice(2),$t="__reactFiber$"+Zn,Ct="__reactProps$"+Zn,Xa="__reactContainer$"+Zn,Bo="__reactEvents$"+Zn,Pm="__reactListeners$"+Zn,Wm="__reactHandles$"+Zn,Ku="__reactResources$"+Zn,Xi="__reactMarker$"+Zn;function Go(e){delete e[$t],delete e[Ct],delete e[Bo],delete e[Pm],delete e[Wm]}function Qa(e){var t=e[$t];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[$t]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=mg(e);e!==null;){if(a=e[$t])return a;e=mg(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[$t]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ka(e){var t=e[Ku];return t||(t=e[Ku]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Xi]=!0}var Pu=new Set,Wu={};function $a(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(Wu[e]=t,e=0;e<t.length;e++)Pu.add(t[e])}var Im=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iu={},Ju={};function Jm(e){return nt.call(Ju,e)?!0:nt.call(Iu,e)?!1:Im.test(e)?Ju[e]=!0:(Iu[e]=!0,!1)}function Fl(e,t,a){if(Jm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function er(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function jn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){if(!e._valueTracker){var t=Fu(e)?"checked":"value";e._valueTracker=Fm(e,t,""+e[t])}}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Fu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ey=/[\n"\\]/g;function Wt(e){return e.replace(ey,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yo(e,t,a,i,l,r,c,h){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Vo(e,c,Pt(t)):a!=null?Vo(e,c,Pt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Pt(h):e.removeAttribute("name")}function tf(e,t,a,i,l,r,c,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){qo(e);return}a=a!=null?""+Pt(a):"",t=t!=null?""+Pt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),qo(e)}function Vo(e,t,a){t==="number"&&tr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Pt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function nf(e,t,a){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Pt(a):""}function af(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(ee(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Pt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),qo(e)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lf(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||ty.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function rf(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&lf(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&lf(e,r,t[r])}function Xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nr(e){return ay.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function On(){}var Qo=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function of(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[Ct]||null;if(!l)throw Error(s(90));Yo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&ef(i)}break e;case"textarea":nf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var Ko=!1;function sf(e,t,a){if(Ko)return e(t,a);Ko=!0;try{var i=e(t);return i}finally{if(Ko=!1,(Ja!==null||Fa!==null)&&(Yr(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,of(t),e)))for(t=0;t<e.length;t++)of(e[t])}}function Zi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Ct]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(An)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Po=!1}var Kn=null,Wo=null,ar=null;function cf(){if(ar)return ar;var e,t=Wo,a=t.length,i,l="value"in Kn?Kn.value:Kn.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(i=1;i<=c&&t[a-i]===l[r-i];i++);return ar=l.slice(e,1<i?1-i:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lr(){return!0}function uf(){return!1}function Mt(e){function t(a,i,l,r,c){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lr:uf,this.isPropagationStopped=uf,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=Mt(wa),Pi=W({},wa,{view:0,detail:0}),iy=Mt(Pi),Io,Jo,Wi,or=W({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(Io=e.screenX-Wi.screenX,Jo=e.screenY-Wi.screenY):Jo=Io=0,Wi=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),ff=Mt(or),ly=W({},or,{dataTransfer:0}),ry=Mt(ly),oy=W({},Pi,{relatedTarget:0}),Fo=Mt(oy),sy=W({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Mt(sy),uy=W({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fy=Mt(uy),dy=W({},wa,{data:0}),df=Mt(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hy[e])?!!t[e]:!1}function es(){return my}var yy=W({},Pi,{key:function(e){if(e.key){var t=py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=Mt(yy),by=W({},or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=Mt(by),Sy=W({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),xy=Mt(Sy),$y=W({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=Mt($y),zy=W({},or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=Mt(zy),Ey=W({},wa,{newState:0,oldState:0}),jy=Mt(Ey),Oy=[9,13,27,32],ts=An&&"CompositionEvent"in window,Ii=null;An&&"documentMode"in document&&(Ii=document.documentMode);var Ay=An&&"TextEvent"in window&&!Ii,gf=An&&(!ts||Ii&&8<Ii&&11>=Ii),hf=" ",mf=!1;function yf(e,t){switch(e){case"keyup":return Oy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ei=!1;function _y(e,t){switch(e){case"compositionend":return vf(t);case"keypress":return t.which!==32?null:(mf=!0,hf);case"textInput":return e=t.data,e===hf&&mf?null:e;default:return null}}function ky(e,t){if(ei)return e==="compositionend"||!ts&&yf(e,t)?(e=cf(),ar=Wo=Kn=null,ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cy[e.type]:t==="textarea"}function Sf(e,t,a,i){Ja?Fa?Fa.push(i):Fa=[i]:Ja=i,t=Wr(t,"onChange"),0<t.length&&(a=new rr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Ji=null,Fi=null;function My(e){ng(e,0)}function sr(e){var t=Qi(e);if(ef(t))return e}function xf(e,t){if(e==="change")return t}var $f=!1;if(An){var ns;if(An){var as="oninput"in document;if(!as){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),as=typeof wf.oninput=="function"}ns=as}else ns=!1;$f=ns&&(!document.documentMode||9<document.documentMode)}function zf(){Ji&&(Ji.detachEvent("onpropertychange",Tf),Fi=Ji=null)}function Tf(e){if(e.propertyName==="value"&&sr(Fi)){var t=[];Sf(t,Fi,e,Zo(e)),sf(My,t)}}function Dy(e,t,a){e==="focusin"?(zf(),Ji=t,Fi=a,Ji.attachEvent("onpropertychange",Tf)):e==="focusout"&&zf()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Fi)}function Ry(e,t){if(e==="click")return sr(t)}function Ly(e,t){if(e==="input"||e==="change")return sr(t)}function Ny(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:Ny;function el(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!nt.call(t,l)||!Gt(e[l],t[l]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,t){var a=Ef(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ef(a)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=tr(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uy=An&&"documentMode"in document&&11>=document.documentMode,ti=null,ls=null,tl=null,rs=!1;function _f(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rs||ti==null||ti!==tr(i)||(i=ti,"selectionStart"in i&&is(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),tl&&el(tl,i)||(tl=i,i=Wr(ls,"onSelect"),0<i.length&&(t=new rr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ti)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ni={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},os={},kf={};An&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Ta(e){if(os[e])return os[e];if(!ni[e])return e;var t=ni[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in kf)return os[e]=t[a];return e}var Cf=Ta("animationend"),Mf=Ta("animationiteration"),Df=Ta("animationstart"),By=Ta("transitionrun"),Gy=Ta("transitionstart"),qy=Ta("transitioncancel"),Hf=Ta("transitionend"),Rf=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function cn(e,t){Rf.set(e,t),$a(t,[e])}var cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],ai=0,cs=0;function ur(){for(var e=ai,t=cs=ai=0;t<e;){var a=It[t];It[t++]=null;var i=It[t];It[t++]=null;var l=It[t];It[t++]=null;var r=It[t];if(It[t++]=null,i!==null&&l!==null){var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}r!==0&&Lf(a,l,r)}}function fr(e,t,a,i){It[ai++]=e,It[ai++]=t,It[ai++]=a,It[ai++]=i,cs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function us(e,t,a,i){return fr(e,t,a,i),dr(e)}function Ea(e,t){return fr(e,null,null,t),dr(e)}function Lf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Bt(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function dr(e){if(50<wl)throw wl=0,bc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function Yy(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,a,i){return new Yy(e,t,a,i)}function fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var a=e.alternate;return a===null?(a=qt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Nf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pr(e,t,a,i,l,r){var c=0;if(i=e,typeof e=="function")fs(e)&&(c=1);else if(typeof e=="string")c=K0(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case O:return e=qt(31,a,t,l),e.elementType=O,e.lanes=r,e;case V:return ja(a.children,l,r,t);case de:c=8,l|=24;break;case ue:return e=qt(12,a,t,l|2),e.elementType=ue,e.lanes=r,e;case w:return e=qt(13,a,t,l),e.elementType=w,e.lanes=r,e;case z:return e=qt(19,a,t,l),e.elementType=z,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:c=10;break e;case ge:c=9;break e;case se:c=11;break e;case x:c=14;break e;case D:c=16,i=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=qt(c,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function ja(e,t,a,i){return e=qt(7,e,i,t),e.lanes=a,e}function ds(e,t,a){return e=qt(6,e,null,t),e.lanes=a,e}function Uf(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function ps(e,t,a){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bf=new WeakMap;function Jt(e,t){if(typeof e=="object"&&e!==null){var a=Bf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:et(t)},Bf.set(e,t),t)}return{value:e,source:t,stack:et(t)}}var li=[],ri=0,gr=null,nl=0,Ft=[],en=0,Pn=null,vn=1,bn="";function kn(e,t){li[ri++]=nl,li[ri++]=gr,gr=e,nl=t}function Gf(e,t,a){Ft[en++]=vn,Ft[en++]=bn,Ft[en++]=Pn,Pn=e;var i=vn;e=bn;var l=32-Bt(i)-1;i&=~(1<<l),a+=1;var r=32-Bt(t)+l;if(30<r){var c=l-l%5;r=(i&(1<<c)-1).toString(32),i>>=c,l-=c,vn=1<<32-Bt(t)+l|a<<l|i,bn=r+e}else vn=1<<r|a<<l|i,bn=e}function gs(e){e.return!==null&&(kn(e,1),Gf(e,1,0))}function hs(e){for(;e===gr;)gr=li[--ri],li[ri]=null,nl=li[--ri],li[ri]=null;for(;e===Pn;)Pn=Ft[--en],Ft[en]=null,bn=Ft[--en],Ft[en]=null,vn=Ft[--en],Ft[en]=null}function qf(e,t){Ft[en++]=vn,Ft[en++]=bn,Ft[en++]=Pn,vn=t.id,bn=t.overflow,Pn=e}var wt=null,Pe=null,He=!1,Wn=null,tn=!1,ms=Error(s(519));function In(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(Jt(t,e)),ms}function Yf(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[$t]=e,t[Ct]=i,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<Tl.length;a++)Ce(Tl[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),tf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),af(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||rg(t.textContent,a)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=On),t=!0):t=!1,t||In(e,!0)}function Vf(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 31:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:wt=wt.return}}function oi(e){if(e!==wt)return!1;if(!He)return Vf(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Dc(e.type,e.memoizedProps)),a=!a),a&&Pe&&In(e),Vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Pe=hg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Pe=hg(e)}else t===27?(t=Pe,fa(e.type)?(e=Uc,Uc=null,Pe=e):Pe=t):Pe=wt?an(e.stateNode.nextSibling):null;return!0}function Oa(){Pe=wt=null,He=!1}function ys(){var e=Wn;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Wn=null),e}function al(e){Wn===null?Wn=[e]:Wn.push(e)}var vs=g(null),Aa=null,Cn=null;function Jn(e,t,a){U(vs,t._currentValue),t._currentValue=a}function Mn(e){e._currentValue=vs.current,S(vs)}function bs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Ss(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var $=0;$<t.length;$++)if(h.context===t[$]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),bs(r.return,a,e),i||(c=null);break e}r=h.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),bs(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function si(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var h=l.type;Gt(l.pendingProps.value,c.value)||(e!==null?e.push(h):e=[h])}}else if(l===te.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}l=l.return}e!==null&&Ss(t,e,a,i),t.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!Gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Aa=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zt(e){return Xf(Aa,e)}function mr(e,t){return Aa===null&&_a(e),Xf(e,t)}function Xf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Cn===null){if(e===null)throw Error(s(308));Cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Cn=Cn.next=t;return a}var Vy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xy=n.unstable_scheduleCallback,Qy=n.unstable_NormalPriority,ct={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xs(){return{controller:new Vy,data:new Map,refCount:0}}function il(e){e.refCount--,e.refCount===0&&Xy(Qy,function(){e.controller.abort()})}var ll=null,$s=0,ci=0,ui=null;function Zy(e,t){if(ll===null){var a=ll=[];$s=0,ci=Tc(),ui={status:"pending",value:void 0,then:function(i){a.push(i)}}}return $s++,t.then(Qf,Qf),t}function Qf(){if(--$s===0&&ll!==null){ui!==null&&(ui.status="fulfilled");var e=ll;ll=null,ci=0,ui=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ky(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Zf=j.S;j.S=function(e,t){_p=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zy(e,t),Zf!==null&&Zf(e,t)};var ka=g(null);function ws(){var e=ka.current;return e!==null?e:Ke.pooledCache}function yr(e,t){t===null?U(ka,ka.current):U(ka,t.pool)}function Kf(){var e=ws();return e===null?null:{parent:ct._currentValue,pool:e}}var fi=Error(s(460)),zs=Error(s(474)),vr=Error(s(542)),br={then:function(){}};function Pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(On,On),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e;default:if(typeof t.status=="string")t.then(On,On);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e}throw Ma=t,fi}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ma=a,fi):a}}var Ma=null;function If(){if(Ma===null)throw Error(s(459));var e=Ma;return Ma=null,e}function Jf(e){if(e===fi||e===vr)throw Error(s(483))}var di=null,rl=0;function Sr(e){var t=rl;return rl+=1,di===null&&(di=[]),Wf(di,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xr(e,t){throw t.$$typeof===le?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ff(e){function t(C,E){if(e){var L=C.deletions;L===null?(C.deletions=[E],C.flags|=16):L.push(E)}}function a(C,E){if(!e)return null;for(;E!==null;)t(C,E),E=E.sibling;return null}function i(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function l(C,E){return C=_n(C,E),C.index=0,C.sibling=null,C}function r(C,E,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<E?(C.flags|=67108866,E):L):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function h(C,E,L,J){return E===null||E.tag!==6?(E=ds(L,C.mode,J),E.return=C,E):(E=l(E,L),E.return=C,E)}function $(C,E,L,J){var ye=L.type;return ye===V?Q(C,E,L.props.children,J,L.key):E!==null&&(E.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Ca(ye)===E.type)?(E=l(E,L.props),ol(E,L),E.return=C,E):(E=pr(L.type,L.key,L.props,null,C.mode,J),ol(E,L),E.return=C,E)}function N(C,E,L,J){return E===null||E.tag!==4||E.stateNode.containerInfo!==L.containerInfo||E.stateNode.implementation!==L.implementation?(E=ps(L,C.mode,J),E.return=C,E):(E=l(E,L.children||[]),E.return=C,E)}function Q(C,E,L,J,ye){return E===null||E.tag!==7?(E=ja(L,C.mode,J,ye),E.return=C,E):(E=l(E,L),E.return=C,E)}function F(C,E,L){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ds(""+E,C.mode,L),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return L=pr(E.type,E.key,E.props,null,C.mode,L),ol(L,E),L.return=C,L;case ne:return E=ps(E,C.mode,L),E.return=C,E;case D:return E=Ca(E),F(C,E,L)}if(ee(E)||Z(E))return E=ja(E,C.mode,L,null),E.return=C,E;if(typeof E.then=="function")return F(C,Sr(E),L);if(E.$$typeof===ae)return F(C,mr(C,E),L);xr(C,E)}return null}function B(C,E,L,J){var ye=E!==null?E.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ye!==null?null:h(C,E,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case re:return L.key===ye?$(C,E,L,J):null;case ne:return L.key===ye?N(C,E,L,J):null;case D:return L=Ca(L),B(C,E,L,J)}if(ee(L)||Z(L))return ye!==null?null:Q(C,E,L,J,null);if(typeof L.then=="function")return B(C,E,Sr(L),J);if(L.$$typeof===ae)return B(C,E,mr(C,L),J);xr(C,L)}return null}function Y(C,E,L,J,ye){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return C=C.get(L)||null,h(E,C,""+J,ye);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case re:return C=C.get(J.key===null?L:J.key)||null,$(E,C,J,ye);case ne:return C=C.get(J.key===null?L:J.key)||null,N(E,C,J,ye);case D:return J=Ca(J),Y(C,E,L,J,ye)}if(ee(J)||Z(J))return C=C.get(L)||null,Q(E,C,J,ye,null);if(typeof J.then=="function")return Y(C,E,L,Sr(J),ye);if(J.$$typeof===ae)return Y(C,E,L,mr(E,J),ye);xr(E,J)}return null}function fe(C,E,L,J){for(var ye=null,Le=null,he=E,Te=E=0,De=null;he!==null&&Te<L.length;Te++){he.index>Te?(De=he,he=null):De=he.sibling;var Ne=B(C,he,L[Te],J);if(Ne===null){he===null&&(he=De);break}e&&he&&Ne.alternate===null&&t(C,he),E=r(Ne,E,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne,he=De}if(Te===L.length)return a(C,he),He&&kn(C,Te),ye;if(he===null){for(;Te<L.length;Te++)he=F(C,L[Te],J),he!==null&&(E=r(he,E,Te),Le===null?ye=he:Le.sibling=he,Le=he);return He&&kn(C,Te),ye}for(he=i(he);Te<L.length;Te++)De=Y(he,C,Te,L[Te],J),De!==null&&(e&&De.alternate!==null&&he.delete(De.key===null?Te:De.key),E=r(De,E,Te),Le===null?ye=De:Le.sibling=De,Le=De);return e&&he.forEach(function(ma){return t(C,ma)}),He&&kn(C,Te),ye}function ve(C,E,L,J){if(L==null)throw Error(s(151));for(var ye=null,Le=null,he=E,Te=E=0,De=null,Ne=L.next();he!==null&&!Ne.done;Te++,Ne=L.next()){he.index>Te?(De=he,he=null):De=he.sibling;var ma=B(C,he,Ne.value,J);if(ma===null){he===null&&(he=De);break}e&&he&&ma.alternate===null&&t(C,he),E=r(ma,E,Te),Le===null?ye=ma:Le.sibling=ma,Le=ma,he=De}if(Ne.done)return a(C,he),He&&kn(C,Te),ye;if(he===null){for(;!Ne.done;Te++,Ne=L.next())Ne=F(C,Ne.value,J),Ne!==null&&(E=r(Ne,E,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return He&&kn(C,Te),ye}for(he=i(he);!Ne.done;Te++,Ne=L.next())Ne=Y(he,C,Te,Ne.value,J),Ne!==null&&(e&&Ne.alternate!==null&&he.delete(Ne.key===null?Te:Ne.key),E=r(Ne,E,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return e&&he.forEach(function(lv){return t(C,lv)}),He&&kn(C,Te),ye}function Ze(C,E,L,J){if(typeof L=="object"&&L!==null&&L.type===V&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case re:e:{for(var ye=L.key;E!==null;){if(E.key===ye){if(ye=L.type,ye===V){if(E.tag===7){a(C,E.sibling),J=l(E,L.props.children),J.return=C,C=J;break e}}else if(E.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Ca(ye)===E.type){a(C,E.sibling),J=l(E,L.props),ol(J,L),J.return=C,C=J;break e}a(C,E);break}else t(C,E);E=E.sibling}L.type===V?(J=ja(L.props.children,C.mode,J,L.key),J.return=C,C=J):(J=pr(L.type,L.key,L.props,null,C.mode,J),ol(J,L),J.return=C,C=J)}return c(C);case ne:e:{for(ye=L.key;E!==null;){if(E.key===ye)if(E.tag===4&&E.stateNode.containerInfo===L.containerInfo&&E.stateNode.implementation===L.implementation){a(C,E.sibling),J=l(E,L.children||[]),J.return=C,C=J;break e}else{a(C,E);break}else t(C,E);E=E.sibling}J=ps(L,C.mode,J),J.return=C,C=J}return c(C);case D:return L=Ca(L),Ze(C,E,L,J)}if(ee(L))return fe(C,E,L,J);if(Z(L)){if(ye=Z(L),typeof ye!="function")throw Error(s(150));return L=ye.call(L),ve(C,E,L,J)}if(typeof L.then=="function")return Ze(C,E,Sr(L),J);if(L.$$typeof===ae)return Ze(C,E,mr(C,L),J);xr(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,E!==null&&E.tag===6?(a(C,E.sibling),J=l(E,L),J.return=C,C=J):(a(C,E),J=ds(L,C.mode,J),J.return=C,C=J),c(C)):a(C,E)}return function(C,E,L,J){try{rl=0;var ye=Ze(C,E,L,J);return di=null,ye}catch(he){if(he===fi||he===vr)throw he;var Le=qt(29,he,null,C.mode);return Le.lanes=J,Le.return=C,Le}finally{}}}var Da=Ff(!0),ed=Ff(!1),Fn=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ta(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=dr(e),Lf(e,null,a),t}return fr(e,i,t,a),dr(e)}function sl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Vu(e,a)}}function js(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Os=!1;function cl(){if(Os){var e=ui;if(e!==null)throw e}}function ul(e,t,a,i){Os=!1;var l=e.updateQueue;Fn=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var $=h,N=$.next;$.next=null,c===null?r=N:c.next=N,c=$;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==c&&(h===null?Q.firstBaseUpdate=N:h.next=N,Q.lastBaseUpdate=$))}if(r!==null){var F=l.baseState;c=0,Q=N=$=null,h=r;do{var B=h.lane&-536870913,Y=B!==h.lane;if(Y?(Me&B)===B:(i&B)===B){B!==0&&B===ci&&(Os=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var fe=e,ve=h;B=t;var Ze=a;switch(ve.tag){case 1:if(fe=ve.payload,typeof fe=="function"){F=fe.call(Ze,F,B);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ve.payload,B=typeof fe=="function"?fe.call(Ze,F,B):fe,B==null)break e;F=W({},F,B);break e;case 2:Fn=!0}}B=h.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(N=Q=Y,$=F):Q=Q.next=Y,c|=B;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;Y=h,h=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);Q===null&&($=F),l.baseState=$,l.firstBaseUpdate=N,l.lastBaseUpdate=Q,r===null&&(l.shared.lanes=0),ra|=c,e.lanes=c,e.memoizedState=F}}function td(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function nd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)td(a[e],t)}var pi=g(null),$r=g(0);function ad(e,t){e=qn,U($r,e),U(pi,t),qn=e|t.baseLanes}function As(){U($r,qn),U(pi,pi.current)}function _s(){qn=$r.current,S(pi),S($r)}var Yt=g(null),nn=null;function na(e){var t=e.alternate;U(rt,rt.current&1),U(Yt,e),nn===null&&(t===null||pi.current!==null||t.memoizedState!==null)&&(nn=e)}function ks(e){U(rt,rt.current),U(Yt,e),nn===null&&(nn=e)}function id(e){e.tag===22?(U(rt,rt.current),U(Yt,e),nn===null&&(nn=e)):aa()}function aa(){U(rt,rt.current),U(Yt,Yt.current)}function Vt(e){S(Yt),nn===e&&(nn=null),S(rt)}var rt=g(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lc(a)||Nc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dn=0,we=null,Xe=null,ut=null,zr=!1,gi=!1,Ha=!1,Tr=0,fl=0,hi=null,Py=0;function at(){throw Error(s(321))}function Cs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Gt(e[a],t[a]))return!1;return!0}function Ms(e,t,a,i,l,r){return Dn=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Gd:Ks,Ha=!1,r=a(i,l),Ha=!1,gi&&(r=rd(t,a,i,l)),ld(e),r}function ld(e){j.H=gl;var t=Xe!==null&&Xe.next!==null;if(Dn=0,ut=Xe=we=null,zr=!1,fl=0,hi=null,t)throw Error(s(300));e===null||ft||(e=e.dependencies,e!==null&&hr(e)&&(ft=!0))}function rd(e,t,a,i){we=e;var l=0;do{if(gi&&(hi=null),fl=0,gi=!1,25<=l)throw Error(s(301));if(l+=1,ut=Xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=qd,r=t(a,i)}while(gi);return r}function Wy(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?dl(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(we.flags|=1024),t}function Ds(){var e=Tr!==0;return Tr=0,e}function Hs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Rs(e){if(zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zr=!1}Dn=0,ut=Xe=we=null,gi=!1,fl=Tr=0,hi=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?we.memoizedState=ut=e:ut=ut.next=e,ut}function ot(){if(Xe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=ut===null?we.memoizedState:ut.next;if(t!==null)ut=t,Xe=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},ut===null?we.memoizedState=ut=e:ut=ut.next=e}return ut}function Er(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(e){var t=fl;return fl+=1,hi===null&&(hi=[]),e=Wf(hi,e,t),t=we,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Gd:Ks),e}function jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dl(e);if(e.$$typeof===ae)return zt(e)}throw Error(s(438,String(e)))}function Ls(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=we.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Er(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function Hn(e,t){return typeof t=="function"?t(e):t}function Or(e){var t=ot();return Ns(t,Xe,e)}function Ns(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=c=null,$=null,N=t,Q=!1;do{var F=N.lane&-536870913;if(F!==N.lane?(Me&F)===F:(Dn&F)===F){var B=N.revertLane;if(B===0)$!==null&&($=$.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),F===ci&&(Q=!0);else if((Dn&B)===B){N=N.next,B===ci&&(Q=!0);continue}else F={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},$===null?(h=$=F,c=r):$=$.next=F,we.lanes|=B,ra|=B;F=N.action,Ha&&a(r,F),r=N.hasEagerState?N.eagerState:a(r,F)}else B={lane:F,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},$===null?(h=$=B,c=r):$=$.next=B,we.lanes|=F,ra|=F;N=N.next}while(N!==null&&N!==t);if($===null?c=r:$.next=h,!Gt(r,e.memoizedState)&&(ft=!0,Q&&(a=ui,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=$,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Us(e){var t=ot(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);Gt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function od(e,t,a){var i=we,l=ot(),r=He;if(r){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Gt((Xe||l).memoizedState,a);if(c&&(l.memoizedState=a,ft=!0),l=l.queue,qs(ud.bind(null,i,l,e),[e]),l.getSnapshot!==t||c||ut!==null&&ut.memoizedState.tag&1){if(i.flags|=2048,mi(9,{destroy:void 0},cd.bind(null,i,l,a,t),null),Ke===null)throw Error(s(349));r||(Dn&127)!==0||sd(i,t,a)}return a}function sd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=Er(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function cd(e,t,a,i){t.value=a,t.getSnapshot=i,fd(t)&&dd(e)}function ud(e,t,a){return a(function(){fd(t)&&dd(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Gt(e,a)}catch{return!0}}function dd(e){var t=Ea(e,2);t!==null&&Nt(t,e,2)}function Bs(e){var t=kt();if(typeof e=="function"){var a=e;if(e=a(),Ha){Qn(!0);try{a()}finally{Qn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t}function pd(e,t,a,i){return e.baseState=a,Ns(e,Xe,typeof i=="function"?i:Hn)}function Iy(e,t,a,i,l){if(kr(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};j.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,gd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function gd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=j.T,c={};j.T=c;try{var h=a(l,i),$=j.S;$!==null&&$(c,h),hd(e,t,h)}catch(N){Gs(e,t,N)}finally{r!==null&&c.types!==null&&(r.types=c.types),j.T=r}}else try{r=a(l,i),hd(e,t,r)}catch(N){Gs(e,t,N)}}function hd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){md(e,t,i)},function(i){return Gs(e,t,i)}):md(e,t,a)}function md(e,t,a){t.status="fulfilled",t.value=a,yd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gd(e,a)))}function Gs(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,yd(t),t=t.next;while(t!==i)}e.action=null}function yd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vd(e,t){return t}function bd(e,t){if(He){var a=Ke.formState;if(a!==null){e:{var i=we;if(He){if(Pe){t:{for(var l=Pe,r=tn;l.nodeType!==8;){if(!r){l=null;break t}if(l=an(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Pe=an(l.nextSibling),i=l.data==="F!";break e}}In(i)}i=!1}i&&(t=a[0])}}return a=kt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vd,lastRenderedState:t},a.queue=i,a=Nd.bind(null,we,i),i.dispatch=a,i=Bs(!1),r=Zs.bind(null,we,!1,i.queue),i=kt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=Iy.bind(null,we,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function Sd(e){var t=ot();return xd(t,Xe,e)}function xd(e,t,a){if(t=Ns(e,t,vd)[0],e=Or(Hn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=dl(t)}catch(c){throw c===fi?vr:c}else i=t;t=ot();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(we.flags|=2048,mi(9,{destroy:void 0},Jy.bind(null,l,a),null)),[i,r,e]}function Jy(e,t){e.action=t}function $d(e){var t=ot(),a=Xe;if(a!==null)return xd(t,a,e);ot(),t=t.memoizedState,a=ot();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function mi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=we.updateQueue,t===null&&(t=Er(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function wd(){return ot().memoizedState}function Ar(e,t,a,i){var l=kt();we.flags|=e,l.memoizedState=mi(1|t,{destroy:void 0},a,i===void 0?null:i)}function _r(e,t,a,i){var l=ot();i=i===void 0?null:i;var r=l.memoizedState.inst;Xe!==null&&i!==null&&Cs(i,Xe.memoizedState.deps)?l.memoizedState=mi(t,r,a,i):(we.flags|=e,l.memoizedState=mi(1|t,r,a,i))}function zd(e,t){Ar(8390656,8,e,t)}function qs(e,t){_r(2048,8,e,t)}function Fy(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=Er(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Td(e){var t=ot().memoizedState;return Fy({ref:t,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ed(e,t){return _r(4,2,e,t)}function jd(e,t){return _r(4,4,e,t)}function Od(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,a){a=a!=null?a.concat([e]):null,_r(4,4,Od.bind(null,t,e),a)}function Ys(){}function _d(e,t){var a=ot();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Cs(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function kd(e,t){var a=ot();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Cs(t,i[1]))return i[0];if(i=e(),Ha){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[i,t],i}function Vs(e,t,a){return a===void 0||(Dn&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Cp(),we.lanes|=e,ra|=e,a)}function Cd(e,t,a,i){return Gt(a,t)?a:pi.current!==null?(e=Vs(e,a,i),Gt(e,t)||(ft=!0),e):(Dn&42)===0||(Dn&1073741824)!==0&&(Me&261930)===0?(ft=!0,e.memoizedState=a):(e=Cp(),we.lanes|=e,ra|=e,t)}function Md(e,t,a,i,l){var r=f.p;f.p=r!==0&&8>r?r:8;var c=j.T,h={};j.T=h,Zs(e,!1,t,a);try{var $=l(),N=j.S;if(N!==null&&N(h,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var Q=Ky($,i);pl(e,t,Q,Zt(e))}else pl(e,t,i,Zt(e))}catch(F){pl(e,t,{then:function(){},status:"rejected",reason:F},Zt())}finally{f.p=r,c!==null&&h.types!==null&&(c.types=h.types),j.T=c}}function e0(){}function Xs(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=Dd(e).queue;Md(e,l,t,ie,a===null?e0:function(){return Hd(e),a(i)})}function Dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:ie},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hd(e){var t=Dd(e);t.next===null&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},Zt())}function Qs(){return zt(_l)}function Rd(){return ot().memoizedState}function Ld(){return ot().memoizedState}function t0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Zt();e=ea(a);var i=ta(t,e,a);i!==null&&(Nt(i,t,a),sl(i,t,a)),t={cache:xs()},e.payload=t;return}t=t.return}}function n0(e,t,a){var i=Zt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kr(e)?Ud(t,a):(a=us(e,t,a,i),a!==null&&(Nt(a,e,i),Bd(a,t,i)))}function Nd(e,t,a){var i=Zt();pl(e,t,a,i)}function pl(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kr(e))Ud(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,h=r(c,a);if(l.hasEagerState=!0,l.eagerState=h,Gt(h,c))return fr(e,t,l,0),Ke===null&&ur(),!1}catch{}finally{}if(a=us(e,t,l,i),a!==null)return Nt(a,e,i),Bd(a,t,i),!0}return!1}function Zs(e,t,a,i){if(i={lane:2,revertLane:Tc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},kr(e)){if(t)throw Error(s(479))}else t=us(e,a,i,2),t!==null&&Nt(t,e,2)}function kr(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ud(e,t){gi=zr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Bd(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Vu(e,a)}}var gl={readContext:zt,use:jr,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at};gl.useEffectEvent=at;var Gd={readContext:zt,use:jr,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:zd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ar(4194308,4,Od.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){Ar(4,2,e,t)},useMemo:function(e,t){var a=kt();t=t===void 0?null:t;var i=e();if(Ha){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=kt();if(a!==void 0){var l=a(t);if(Ha){Qn(!0);try{a(t)}finally{Qn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=n0.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Bs(e);var t=e.queue,a=Nd.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ys,useDeferredValue:function(e,t){var a=kt();return Vs(a,e,t)},useTransition:function(){var e=Bs(!1);return e=Md.bind(null,we,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=we,l=kt();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ke===null)throw Error(s(349));(Me&127)!==0||sd(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,zd(ud.bind(null,i,r,e),[e]),i.flags|=2048,mi(9,{destroy:void 0},cd.bind(null,i,r,a,t),null),a},useId:function(){var e=kt(),t=Ke.identifierPrefix;if(He){var a=bn,i=vn;a=(i&~(1<<32-Bt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Tr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Py++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:bd,useActionState:bd,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zs.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ls,useCacheRefresh:function(){return kt().memoizedState=t0.bind(null,we)},useEffectEvent:function(e){var t=kt(),a={impl:e};return t.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ks={readContext:zt,use:jr,useCallback:_d,useContext:zt,useEffect:qs,useImperativeHandle:Ad,useInsertionEffect:Ed,useLayoutEffect:jd,useMemo:kd,useReducer:Or,useRef:wd,useState:function(){return Or(Hn)},useDebugValue:Ys,useDeferredValue:function(e,t){var a=ot();return Cd(a,Xe.memoizedState,e,t)},useTransition:function(){var e=Or(Hn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:dl(e),t]},useSyncExternalStore:od,useId:Rd,useHostTransitionStatus:Qs,useFormState:Sd,useActionState:Sd,useOptimistic:function(e,t){var a=ot();return pd(a,Xe,e,t)},useMemoCache:Ls,useCacheRefresh:Ld};Ks.useEffectEvent=Td;var qd={readContext:zt,use:jr,useCallback:_d,useContext:zt,useEffect:qs,useImperativeHandle:Ad,useInsertionEffect:Ed,useLayoutEffect:jd,useMemo:kd,useReducer:Us,useRef:wd,useState:function(){return Us(Hn)},useDebugValue:Ys,useDeferredValue:function(e,t){var a=ot();return Xe===null?Vs(a,e,t):Cd(a,Xe.memoizedState,e,t)},useTransition:function(){var e=Us(Hn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:dl(e),t]},useSyncExternalStore:od,useId:Rd,useHostTransitionStatus:Qs,useFormState:$d,useActionState:$d,useOptimistic:function(e,t){var a=ot();return Xe!==null?pd(a,Xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ls,useCacheRefresh:Ld};qd.useEffectEvent=Td;function Ps(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:W({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ws={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Zt(),l=ea(i);l.payload=t,a!=null&&(l.callback=a),t=ta(e,l,i),t!==null&&(Nt(t,e,i),sl(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Zt(),l=ea(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ta(e,l,i),t!==null&&(Nt(t,e,i),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Zt(),i=ea(a);i.tag=2,t!=null&&(i.callback=t),t=ta(e,i,a),t!==null&&(Nt(t,e,a),sl(t,e,a))}};function Yd(e,t,a,i,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,c):t.prototype&&t.prototype.isPureReactComponent?!el(a,i)||!el(l,r):!0}function Vd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=W({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Xd(e){cr(e)}function Qd(e){console.error(e)}function Zd(e){cr(e)}function Cr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Kd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Is(e,t,a){return a=ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Cr(e,t)},a}function Pd(e){return e=ea(e),e.tag=3,e}function Wd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){Kd(t,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Kd(t,a,i),typeof l!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function a0(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&si(t,a,l,!0),a=Yt.current,a!==null){switch(a.tag){case 31:case 13:return nn===null?Vr():a.alternate===null&&it===0&&(it=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===br?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),$c(e,i,l)),!1;case 22:return a.flags|=65536,i===br?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),$c(e,i,l)),!1}throw Error(s(435,a.tag))}return $c(e,i,l),Vr(),!1}if(He)return t=Yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==ms&&(e=Error(s(422),{cause:i}),al(Jt(e,a)))):(i!==ms&&(t=Error(s(423),{cause:i}),al(Jt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Jt(i,a),l=Is(e.stateNode,i,l),js(e,l),it!==4&&(it=2)),!1;var r=Error(s(520),{cause:i});if(r=Jt(r,a),$l===null?$l=[r]:$l.push(r),it!==4&&(it=2),t===null)return!0;i=Jt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Is(a.stateNode,i,e),js(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(oa===null||!oa.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Pd(l),Wd(l,e,a,i),js(a,l),!1}a=a.return}while(a!==null);return!1}var Js=Error(s(461)),ft=!1;function Tt(e,t,a,i){t.child=e===null?ed(t,null,a,i):Da(t,e.child,a,i)}function Id(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var c={};for(var h in i)h!=="ref"&&(c[h]=i[h])}else c=i;return _a(t),i=Ms(e,t,a,c,r,l),h=Ds(),e!==null&&!ft?(Hs(e,t,l),Rn(e,t,l)):(He&&h&&gs(t),t.flags|=1,Tt(e,t,i,l),t.child)}function Jd(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!fs(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Fd(e,t,r,i,l)):(e=pr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!rc(e,l)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:el,a(c,i)&&e.ref===t.ref)return Rn(e,t,l)}return t.flags|=1,e=_n(r,i),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(el(r,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=r,rc(e,l))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Rn(e,t,l)}return Fs(e,t,a,i,l)}function ep(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return tp(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yr(t,r!==null?r.cachePool:null),r!==null?ad(t,r):As(),id(t);else return i=t.lanes=536870912,tp(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(yr(t,r.cachePool),ad(t,r),aa(),t.memoizedState=null):(e!==null&&yr(t,null),As(),aa());return Tt(e,t,l,a),t.child}function hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tp(e,t,a,i,l){var r=ws();return r=r===null?null:{parent:ct._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&yr(t,null),As(),id(t),e!==null&&si(e,t,i,!0),t.childLanes=l,null}function Mr(e,t){return t=Hr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function np(e,t,a){return Da(t,e.child,null,a),e=Mr(t,t.pendingProps),e.flags|=2,Vt(t),t.memoizedState=null,e}function i0(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(i.mode==="hidden")return e=Mr(t,i),t.lanes=536870912,hl(null,e);if(ks(t),(e=Pe)?(e=gg(e,tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:vn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},a=Uf(e),a.return=t,t.child=a,wt=t,Pe=null)):e=null,e===null)throw In(t);return t.lanes=536870912,null}return Mr(t,i)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(ks(t),l)if(t.flags&256)t.flags&=-257,t=np(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ft||si(e,t,a,!1),l=(a&e.childLanes)!==0,ft||l){if(i=Ke,i!==null&&(c=Xu(i,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,Ea(e,c),Nt(i,e,c),Js;Vr(),t=np(e,t,a)}else e=r.treeContext,Pe=an(c.nextSibling),wt=t,He=!0,Wn=null,tn=!1,e!==null&&qf(t,e),t=Mr(t,i),t.flags|=4096;return t}return e=_n(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Fs(e,t,a,i,l){return _a(t),a=Ms(e,t,a,i,void 0,l),i=Ds(),e!==null&&!ft?(Hs(e,t,l),Rn(e,t,l)):(He&&i&&gs(t),t.flags|=1,Tt(e,t,a,l),t.child)}function ap(e,t,a,i,l,r){return _a(t),t.updateQueue=null,a=rd(t,i,a,l),ld(e),i=Ds(),e!==null&&!ft?(Hs(e,t,r),Rn(e,t,r)):(He&&i&&gs(t),t.flags|=1,Tt(e,t,a,r),t.child)}function ip(e,t,a,i,l){if(_a(t),t.stateNode===null){var r=ii,c=a.contextType;typeof c=="object"&&c!==null&&(r=zt(c)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ws,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Ts(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?zt(c):ii,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ps(t,a,c,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Ws.enqueueReplaceState(r,r.state,null),ul(t,i,r,l),cl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,$=Ra(a,h);r.props=$;var N=r.context,Q=a.contextType;c=ii,typeof Q=="object"&&Q!==null&&(c=zt(Q));var F=a.getDerivedStateFromProps;Q=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||N!==c)&&Vd(t,r,i,c),Fn=!1;var B=t.memoizedState;r.state=B,ul(t,i,r,l),cl(),N=t.memoizedState,h||B!==N||Fn?(typeof F=="function"&&(Ps(t,a,F,i),N=t.memoizedState),($=Fn||Yd(t,a,$,i,B,N,c))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),r.props=i,r.state=N,r.context=c,i=$):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Es(e,t),c=t.memoizedProps,Q=Ra(a,c),r.props=Q,F=t.pendingProps,B=r.context,N=a.contextType,$=ii,typeof N=="object"&&N!==null&&($=zt(N)),h=a.getDerivedStateFromProps,(N=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==F||B!==$)&&Vd(t,r,i,$),Fn=!1,B=t.memoizedState,r.state=B,ul(t,i,r,l),cl();var Y=t.memoizedState;c!==F||B!==Y||Fn||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof h=="function"&&(Ps(t,a,h,i),Y=t.memoizedState),(Q=Fn||Yd(t,a,Q,i,B,Y,$)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(N||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,Y,$),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,Y,$)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),r.props=i,r.state=Y,r.context=$,i=Q):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Dr(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Da(t,e.child,null,l),t.child=Da(t,null,a,l)):Tt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=Rn(e,t,l),e}function lp(e,t,a,i){return Oa(),t.flags|=256,Tt(e,t,a,i),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:Kf()}}function nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Qt),e}function rp(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(rt.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(l?na(t):aa(),(e=Pe)?(e=gg(e,tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:vn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},a=Uf(e),a.return=t,t.child=a,wt=t,Pe=null)):e=null,e===null)throw In(t);return Nc(e)?t.lanes=32:t.lanes=536870912,null}var h=i.children;return i=i.fallback,l?(aa(),l=t.mode,h=Hr({mode:"hidden",children:h},l),i=ja(i,l,a,null),h.return=t,i.return=t,h.sibling=i,t.child=h,i=t.child,i.memoizedState=tc(a),i.childLanes=nc(e,c,a),t.memoizedState=ec,hl(null,i)):(na(t),ac(t,h))}var $=e.memoizedState;if($!==null&&(h=$.dehydrated,h!==null)){if(r)t.flags&256?(na(t),t.flags&=-257,t=ic(e,t,a)):t.memoizedState!==null?(aa(),t.child=e.child,t.flags|=128,t=null):(aa(),h=i.fallback,l=t.mode,i=Hr({mode:"visible",children:i.children},l),h=ja(h,l,a,null),h.flags|=2,i.return=t,h.return=t,i.sibling=h,t.child=i,Da(t,e.child,null,a),i=t.child,i.memoizedState=tc(a),i.childLanes=nc(e,c,a),t.memoizedState=ec,t=hl(null,i));else if(na(t),Nc(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var N=c.dgst;c=N,i=Error(s(419)),i.stack="",i.digest=c,al({value:i,source:null,stack:null}),t=ic(e,t,a)}else if(ft||si(e,t,a,!1),c=(a&e.childLanes)!==0,ft||c){if(c=Ke,c!==null&&(i=Xu(c,a),i!==0&&i!==$.retryLane))throw $.retryLane=i,Ea(e,i),Nt(c,e,i),Js;Lc(h)||Vr(),t=ic(e,t,a)}else Lc(h)?(t.flags|=192,t.child=e.child,t=null):(e=$.treeContext,Pe=an(h.nextSibling),wt=t,He=!0,Wn=null,tn=!1,e!==null&&qf(t,e),t=ac(t,i.children),t.flags|=4096);return t}return l?(aa(),h=i.fallback,l=t.mode,$=e.child,N=$.sibling,i=_n($,{mode:"hidden",children:i.children}),i.subtreeFlags=$.subtreeFlags&65011712,N!==null?h=_n(N,h):(h=ja(h,l,a,null),h.flags|=2),h.return=t,i.return=t,i.sibling=h,t.child=i,hl(null,i),i=t.child,h=e.child.memoizedState,h===null?h=tc(a):(l=h.cachePool,l!==null?($=ct._currentValue,l=l.parent!==$?{parent:$,pool:$}:l):l=Kf(),h={baseLanes:h.baseLanes|a,cachePool:l}),i.memoizedState=h,i.childLanes=nc(e,c,a),t.memoizedState=ec,hl(e.child,i)):(na(t),a=e.child,e=a.sibling,a=_n(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function ac(e,t){return t=Hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hr(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function ic(e,t,a){return Da(t,e.child,null,a),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bs(e.return,t,a)}function lc(e,t,a,i,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=l,c.treeForkCount=r)}function sp(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var c=rt.current,h=(c&2)!==0;if(h?(c=c&1|2,t.flags|=128):c&=1,U(rt,c),Tt(e,t,i,a),i=He?nl:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,a,t);else if(e.tag===19)op(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&wr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),lc(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}lc(t,!0,a,null,r,i);break;case"together":lc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ra|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(si(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=_n(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_n(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function l0(e,t,a){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Jn(t,ct,e.memoizedState.cache),Oa();break;case 27:case 5:Se(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ks(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rp(e,t,a):(na(t),e=Rn(e,t,a),e!==null?e.sibling:null);na(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(si(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return sp(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(rt,rt.current),i)break;return null;case 22:return t.lanes=0,ep(e,t,a,t.pendingProps);case 24:Jn(t,ct,e.memoizedState.cache)}return Rn(e,t,a)}function cp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!rc(e,a)&&(t.flags&128)===0)return ft=!1,l0(e,t,a);ft=(e.flags&131072)!==0}else ft=!1,He&&(t.flags&1048576)!==0&&Gf(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e=="function")fs(e)?(i=Ra(e,i),t.tag=1,t=ip(null,t,e,i,a)):(t.tag=0,t=Fs(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===se){t.tag=11,t=Id(null,t,e,i,a);break e}else if(l===x){t.tag=14,t=Jd(null,t,e,i,a);break e}}throw t=P(e)||e,Error(s(306,t,""))}}return t;case 0:return Fs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Ra(i,t.pendingProps),ip(e,t,i,l,a);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,Es(e,t),ul(t,i,null,a);var c=t.memoizedState;if(i=c.cache,Jn(t,ct,i),i!==r.cache&&Ss(t,[ct],a,!0),cl(),i=c.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=lp(e,t,i,a);break e}else if(i!==l){l=Jt(Error(s(424)),t),al(l),t=lp(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Pe=an(e.firstChild),wt=t,He=!0,Wn=null,tn=!0,a=ed(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oa(),i===l){t=Rn(e,t,a);break e}Tt(e,t,i,a)}t=t.child}return t;case 26:return Dr(e,t),e===null?(a=Sg(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(a=t.type,e=t.pendingProps,i=Ir(K.current).createElement(a),i[$t]=t,i[Ct]=e,Et(i,a,e),vt(i),t.stateNode=i):t.memoizedState=Sg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&He&&(i=t.stateNode=yg(t.type,t.pendingProps,K.current),wt=t,tn=!0,l=Pe,fa(t.type)?(Uc=l,Pe=an(i.firstChild)):Pe=l),Tt(e,t,t.pendingProps.children,a),Dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((l=i=Pe)&&(i=H0(i,t.type,t.pendingProps,tn),i!==null?(t.stateNode=i,wt=t,Pe=an(i.firstChild),tn=!1,l=!0):l=!1),l||In(t)),Se(t),l=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,i=r.children,Dc(l,r)?i=null:c!==null&&Dc(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=Ms(e,t,Wy,null,null,a),_l._currentValue=l),Dr(e,t),Tt(e,t,i,a),t.child;case 6:return e===null&&He&&((e=a=Pe)&&(a=R0(a,t.pendingProps,tn),a!==null?(t.stateNode=a,wt=t,Pe=null,e=!0):e=!1),e||In(t)),null;case 13:return rp(e,t,a);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Da(t,null,i,a):Tt(e,t,i,a),t.child;case 11:return Id(e,t,t.type,t.pendingProps,a);case 7:return Tt(e,t,t.pendingProps,a),t.child;case 8:return Tt(e,t,t.pendingProps.children,a),t.child;case 12:return Tt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Jn(t,t.type,i.value),Tt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,_a(t),l=zt(l),i=i(l),t.flags|=1,Tt(e,t,i,a),t.child;case 14:return Jd(e,t,t.type,t.pendingProps,a);case 15:return Fd(e,t,t.type,t.pendingProps,a);case 19:return sp(e,t,a);case 31:return i0(e,t,a);case 22:return ep(e,t,a,t.pendingProps);case 24:return _a(t),i=zt(ct),e===null?(l=ws(),l===null&&(l=Ke,r=xs(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},Ts(t),Jn(t,ct,l)):((e.lanes&a)!==0&&(Es(e,t),ul(t,null,null,a),cl()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Jn(t,ct,i)):(i=r.cache,Jn(t,ct,i),i!==l.cache&&Ss(t,[ct],a,!0))),Tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ln(e){e.flags|=4}function oc(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Rp())e.flags|=8192;else throw Ma=br,zs}else e.flags&=-16777217}function up(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tg(t))if(Rp())e.flags|=8192;else throw Ma=br,zs}function Rr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qu():536870912,e.lanes|=t,Si|=t)}function ml(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function r0(e,t,a){var i=t.pendingProps;switch(hs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Mn(ct),pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(oi(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ys())),We(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Ln(t),r!==null?(We(t),up(t,r)):(We(t),oc(t,l,null,i,a))):r?r!==e.memoizedState?(Ln(t),We(t),up(t,r)):(We(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ln(t),We(t),oc(t,l,e,i,a)),null;case 27:if(Oe(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return We(t),null}e=H.current,oi(t)?Yf(t):(e=yg(l,i,a),t.stateNode=e,Ln(t))}return We(t),null;case 5:if(Oe(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return We(t),null}if(r=H.current,oi(t))Yf(t);else{var c=Ir(K.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?c.createElement(l,{is:i.is}):c.createElement(l)}}r[$t]=t,r[Ct]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch(Et(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ln(t)}}return We(t),oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ln(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=K.current,oi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=wt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[$t]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||rg(e.nodeValue,a)),e||In(t,!0)}else e=Ir(e).createTextNode(i),e[$t]=t,t.stateNode=e}return We(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=oi(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$t]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),e=!1}else a=ys(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Vt(t),t):(Vt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return We(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=oi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[$t]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),l=!1}else l=ys(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Vt(t),t):(Vt(t),null)}return Vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Rr(t,t.updateQueue),We(t),null);case 4:return pe(),e===null&&Ac(t.stateNode.containerInfo),We(t),null;case 10:return Mn(t.type),We(t),null;case 19:if(S(rt),i=t.memoizedState,i===null)return We(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)ml(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=wr(e),r!==null){for(t.flags|=128,ml(i,!1),e=r.updateQueue,t.updateQueue=e,Rr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Nf(a,e),a=a.sibling;return U(rt,rt.current&1|2),He&&kn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ot()>Gr&&(t.flags|=128,l=!0,ml(i,!1),t.lanes=4194304)}else{if(!l)if(e=wr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Rr(t,e),ml(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!He)return We(t),null}else 2*Ot()-i.renderingStartTime>Gr&&a!==536870912&&(t.flags|=128,l=!0,ml(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ot(),e.sibling=null,a=rt.current,U(rt,l?a&1|2:a&1),He&&kn(t,i.treeForkCount),e):(We(t),null);case 22:case 23:return Vt(t),_s(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),a=t.updateQueue,a!==null&&Rr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&S(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Mn(ct),We(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function o0(e,t){switch(hs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(ct),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 31:if(t.memoizedState!==null){if(Vt(t),t.alternate===null)throw Error(s(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(rt),null;case 4:return pe(),null;case 10:return Mn(t.type),null;case 22:case 23:return Vt(t),_s(),e!==null&&S(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Mn(ct),null;case 25:return null;default:return null}}function fp(e,t){switch(hs(t),t.tag){case 3:Mn(ct),pe();break;case 26:case 27:case 5:Oe(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&Vt(t);break;case 13:Vt(t);break;case 19:S(rt);break;case 10:Mn(t.type);break;case 22:case 23:Vt(t),_s(),e!==null&&S(ka);break;case 24:Mn(ct)}}function yl(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,c=a.inst;i=r(),c.destroy=i}a=a.next}while(a!==l)}}catch(h){Ve(t,t.return,h)}}function ia(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var c=i.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,l=t;var $=a,N=h;try{N()}catch(Q){Ve(l,$,Q)}}}i=i.next}while(i!==r)}}catch(Q){Ve(t,t.return,Q)}}function dp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{nd(t,a)}catch(i){Ve(e,e.return,i)}}}function pp(e,t,a){a.props=Ra(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ve(e,t,i)}}function vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Ve(e,t,l)}}function Sn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ve(e,t,l)}else a.current=null}function gp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Ve(e,e.return,l)}}function sc(e,t,a){try{var i=e.stateNode;A0(i,e.type,a,t),i[Ct]=t}catch(l){Ve(e,e.return,l)}}function hp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fa(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=On));else if(i!==4&&(i===27&&fa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(uc(e,t,a),e=e.sibling;e!==null;)uc(e,t,a),e=e.sibling}function Lr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Lr(e,t,a),e=e.sibling;e!==null;)Lr(e,t,a),e=e.sibling}function mp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Et(t,i,a),t[$t]=e,t[Ct]=a}catch(r){Ve(e,e.return,r)}}var Nn=!1,dt=!1,fc=!1,yp=typeof WeakSet=="function"?WeakSet:Set,bt=null;function s0(e,t){if(e=e.containerInfo,Cc=io,e=Af(e),is(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,h=-1,$=-1,N=0,Q=0,F=e,B=null;t:for(;;){for(var Y;F!==a||l!==0&&F.nodeType!==3||(h=c+l),F!==r||i!==0&&F.nodeType!==3||($=c+i),F.nodeType===3&&(c+=F.nodeValue.length),(Y=F.firstChild)!==null;)B=F,F=Y;for(;;){if(F===e)break t;if(B===a&&++N===l&&(h=c),B===r&&++Q===i&&($=c),(Y=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=Y}a=h===-1||$===-1?null:{start:h,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:e,selectionRange:a},io=!1,bt=t;bt!==null;)if(t=bt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,bt=e;else for(;bt!==null;){switch(t=bt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=Ra(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ve){Ve(a,a.return,ve)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,bt=e;break}bt=t.return}}function vp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Bn(e,a),i&4&&yl(5,a);break;case 1:if(Bn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Ve(a,a.return,c)}else{var l=Ra(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ve(a,a.return,c)}}i&64&&dp(a),i&512&&vl(a,a.return);break;case 3:if(Bn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{nd(e,t)}catch(c){Ve(a,a.return,c)}}break;case 27:t===null&&i&4&&mp(a);case 26:case 5:Bn(e,a),t===null&&i&4&&gp(a),i&512&&vl(a,a.return);break;case 12:Bn(e,a);break;case 31:Bn(e,a),i&4&&xp(e,a);break;case 13:Bn(e,a),i&4&&$p(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=y0.bind(null,a),L0(e,a))));break;case 22:if(i=a.memoizedState!==null||Nn,!i){t=t!==null&&t.memoizedState!==null||dt,l=Nn;var r=dt;Nn=i,(dt=t)&&!r?Gn(e,a,(a.subtreeFlags&8772)!==0):Bn(e,a),Nn=l,dt=r}break;case 30:break;default:Bn(e,a)}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Dt=!1;function Un(e,t,a){for(a=a.child;a!==null;)Sp(e,t,a),a=a.sibling}function Sp(e,t,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 26:dt||Sn(a,t),Un(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||Sn(a,t);var i=Je,l=Dt;fa(a.type)&&(Je=a.stateNode,Dt=!1),Un(e,t,a),jl(a.stateNode),Je=i,Dt=l;break;case 5:dt||Sn(a,t);case 6:if(i=Je,l=Dt,Je=null,Un(e,t,a),Je=i,Dt=l,Je!==null)if(Dt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){Ve(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){Ve(a,t,r)}break;case 18:Je!==null&&(Dt?(e=Je,dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Oi(e)):dg(Je,a.stateNode));break;case 4:i=Je,l=Dt,Je=a.stateNode.containerInfo,Dt=!0,Un(e,t,a),Je=i,Dt=l;break;case 0:case 11:case 14:case 15:ia(2,a,t),dt||ia(4,a,t),Un(e,t,a);break;case 1:dt||(Sn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&pp(a,t,i)),Un(e,t,a);break;case 21:Un(e,t,a);break;case 22:dt=(i=dt)||a.memoizedState!==null,Un(e,t,a),dt=i;break;default:Un(e,t,a)}}function xp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oi(e)}catch(a){Ve(t,t.return,a)}}}function $p(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oi(e)}catch(a){Ve(t,t.return,a)}}function c0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yp),t;default:throw Error(s(435,e.tag))}}function Nr(e,t){var a=c0(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=v0.bind(null,e,i);i.then(l,l)}})}function Ht(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 27:if(fa(h.type)){Je=h.stateNode,Dt=!1;break e}break;case 5:Je=h.stateNode,Dt=!1;break e;case 3:case 4:Je=h.stateNode.containerInfo,Dt=!0;break e}h=h.return}if(Je===null)throw Error(s(160));Sp(r,c,l),Je=null,Dt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}var un=null;function wp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),Rt(e),i&4&&(ia(3,e,e.return),yl(3,e),ia(5,e,e.return));break;case 1:Ht(t,e),Rt(e),i&512&&(dt||a===null||Sn(a,a.return)),i&64&&Nn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=un;if(Ht(t,e),Rt(e),i&512&&(dt||a===null||Sn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Xi]||r[$t]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),Et(r,i,a),r[$t]=e,vt(r),i=r;break e;case"link":var c=wg("link","href",l).get(i+(a.href||""));if(c){for(var h=0;h<c.length;h++)if(r=c[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(h,1);break t}}r=l.createElement(i),Et(r,i,a),l.head.appendChild(r);break;case"meta":if(c=wg("meta","content",l).get(i+(a.content||""))){for(h=0;h<c.length;h++)if(r=c[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(h,1);break t}}r=l.createElement(i),Et(r,i,a),l.head.appendChild(r);break;default:throw Error(s(468,i))}r[$t]=e,vt(r),i=r}e.stateNode=i}else zg(l,e.type,e.stateNode);else e.stateNode=$g(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?zg(l,e.type,e.stateNode):$g(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&sc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ht(t,e),Rt(e),i&512&&(dt||a===null||Sn(a,a.return)),a!==null&&i&4&&sc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ht(t,e),Rt(e),i&512&&(dt||a===null||Sn(a,a.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(fe){Ve(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,sc(e,l,a!==null?a.memoizedProps:l)),i&1024&&(fc=!0);break;case 6:if(Ht(t,e),Rt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){Ve(e,e.return,fe)}}break;case 3:if(eo=null,l=un,un=Jr(t.containerInfo),Ht(t,e),un=l,Rt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(fe){Ve(e,e.return,fe)}fc&&(fc=!1,zp(e));break;case 4:i=un,un=Jr(e.stateNode.containerInfo),Ht(t,e),Rt(e),un=i;break;case 12:Ht(t,e),Rt(e);break;case 31:Ht(t,e),Rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 13:Ht(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Br=Ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 22:l=e.memoizedState!==null;var $=a!==null&&a.memoizedState!==null,N=Nn,Q=dt;if(Nn=N||l,dt=Q||$,Ht(t,e),dt=Q,Nn=N,Rt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||$||Nn||dt||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){$=a=t;try{if(r=$.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=$.stateNode;var F=$.memoizedProps.style,B=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(fe){Ve($,$.return,fe)}}}else if(t.tag===6){if(a===null){$=t;try{$.stateNode.nodeValue=l?"":$.memoizedProps}catch(fe){Ve($,$.return,fe)}}}else if(t.tag===18){if(a===null){$=t;try{var Y=$.stateNode;l?pg(Y,!0):pg($.stateNode,!1)}catch(fe){Ve($,$.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Nr(e,a))));break;case 19:Ht(t,e),Rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 30:break;case 21:break;default:Ht(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(hp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,r=cc(e);Lr(e,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(Ia(c,""),a.flags&=-33);var h=cc(e);Lr(e,h,c);break;case 3:case 4:var $=a.stateNode.containerInfo,N=cc(e);uc(e,N,$);break;default:throw Error(s(161))}}catch(Q){Ve(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vp(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ia(4,t,t.return),La(t);break;case 1:Sn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&pp(t,t.return,a),La(t);break;case 27:jl(t.stateNode);case 26:case 5:Sn(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function Gn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:Gn(l,r,a),yl(4,r);break;case 1:if(Gn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){Ve(i,i.return,N)}if(i=r,l=i.updateQueue,l!==null){var h=i.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)td($[l],h)}catch(N){Ve(i,i.return,N)}}a&&c&64&&dp(r),vl(r,r.return);break;case 27:mp(r);case 26:case 5:Gn(l,r,a),a&&i===null&&c&4&&gp(r),vl(r,r.return);break;case 12:Gn(l,r,a);break;case 31:Gn(l,r,a),a&&c&4&&xp(l,r);break;case 13:Gn(l,r,a),a&&c&4&&$p(l,r);break;case 22:r.memoizedState===null&&Gn(l,r,a),vl(r,r.return);break;case 30:break;default:Gn(l,r,a)}t=t.sibling}}function dc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&il(a))}function pc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&il(e))}function fn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tp(e,t,a,i),t=t.sibling}function Tp(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,a,i),l&2048&&yl(9,t);break;case 1:fn(e,t,a,i);break;case 3:fn(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&il(e)));break;case 12:if(l&2048){fn(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,h=r.onPostCommit;typeof h=="function"&&h(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch($){Ve(t,t.return,$)}}else fn(e,t,a,i);break;case 31:fn(e,t,a,i);break;case 13:fn(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?fn(e,t,a,i):bl(e,t):r._visibility&2?fn(e,t,a,i):(r._visibility|=2,yi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&dc(c,t);break;case 24:fn(e,t,a,i),l&2048&&pc(t.alternate,t);break;default:fn(e,t,a,i)}}function yi(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,h=a,$=i,N=c.flags;switch(c.tag){case 0:case 11:case 15:yi(r,c,h,$,l),yl(8,c);break;case 23:break;case 22:var Q=c.stateNode;c.memoizedState!==null?Q._visibility&2?yi(r,c,h,$,l):bl(r,c):(Q._visibility|=2,yi(r,c,h,$,l)),l&&N&2048&&dc(c.alternate,c);break;case 24:yi(r,c,h,$,l),l&&N&2048&&pc(c.alternate,c);break;default:yi(r,c,h,$,l)}t=t.sibling}}function bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:bl(a,i),l&2048&&dc(i.alternate,i);break;case 24:bl(a,i),l&2048&&pc(i.alternate,i);break;default:bl(a,i)}t=t.sibling}}var Sl=8192;function vi(e,t,a){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)Ep(e,t,a),e=e.sibling}function Ep(e,t,a){switch(e.tag){case 26:vi(e,t,a),e.flags&Sl&&e.memoizedState!==null&&P0(a,un,e.memoizedState,e.memoizedProps);break;case 5:vi(e,t,a);break;case 3:case 4:var i=un;un=Jr(e.stateNode.containerInfo),vi(e,t,a),un=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,vi(e,t,a),Sl=i):vi(e,t,a));break;default:vi(e,t,a)}}function jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];bt=i,Ap(i,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Op(e),e=e.sibling}function Op(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&ia(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ur(e)):xl(e);break;default:xl(e)}}function Ur(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];bt=i,Ap(i,e)}jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ia(8,t,t.return),Ur(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ur(t));break;default:Ur(t)}e=e.sibling}}function Ap(e,t){for(;bt!==null;){var a=bt;switch(a.tag){case 0:case 11:case 15:ia(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:il(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,bt=i;else e:for(a=e;bt!==null;){i=bt;var l=i.sibling,r=i.return;if(bp(i),i===a){bt=null;break e}if(l!==null){l.return=r,bt=l;break e}bt=r}}}var u0={getCacheForType:function(e){var t=zt(ct),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return zt(ct).controller.signal}},f0=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ke=null,ke=null,Me=0,Ye=0,Xt=null,la=!1,bi=!1,gc=!1,qn=0,it=0,ra=0,Na=0,hc=0,Qt=0,Si=0,$l=null,Lt=null,mc=!1,Br=0,_p=0,Gr=1/0,qr=null,oa=null,ht=0,sa=null,xi=null,Yn=0,yc=0,vc=null,kp=null,wl=0,bc=null;function Zt(){return(Ue&2)!==0&&Me!==0?Me&-Me:j.T!==null?Tc():Qu()}function Cp(){if(Qt===0)if((Me&536870912)===0||He){var e=Wl;Wl<<=1,(Wl&3932160)===0&&(Wl=262144),Qt=e}else Qt=536870912;return e=Yt.current,e!==null&&(e.flags|=32),Qt}function Nt(e,t,a){(e===Ke&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&($i(e,0),ca(e,Me,Qt,!1)),Vi(e,a),((Ue&2)===0||e!==Ke)&&(e===Ke&&((Ue&2)===0&&(Na|=a),it===4&&ca(e,Me,Qt,!1)),xn(e))}function Mp(e,t,a){if((Ue&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yi(e,t),l=i?g0(e,t):xc(e,t,!0),r=i;do{if(l===0){bi&&!i&&ca(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!d0(a)){l=xc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var h=e;l=$l;var $=h.current.memoizedState.isDehydrated;if($&&($i(h,c).flags|=256),c=xc(h,c,!1),c!==2){if(gc&&!$){h.errorRecoveryDisabledLanes|=r,Na|=r,l=4;break e}r=Lt,Lt=l,r!==null&&(Lt===null?Lt=r:Lt.push.apply(Lt,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){$i(e,0),ca(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ca(i,t,Qt,!la);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Br+300-Ot(),10<l)){if(ca(i,t,Qt,!la),Jl(i,0,!0)!==0)break e;Yn=t,i.timeoutHandle=ug(Dp.bind(null,i,a,Lt,qr,mc,t,Qt,Na,Si,la,r,"Throttled",-0,0),l);break e}Dp(i,a,Lt,qr,mc,t,Qt,Na,Si,la,r,null,-0,0)}}break}while(!0);xn(e)}function Dp(e,t,a,i,l,r,c,h,$,N,Q,F,B,Y){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},Ep(t,r,F);var fe=(r&62914560)===r?Br-Ot():(r&4194048)===r?_p-Ot():0;if(fe=W0(F,fe),fe!==null){Yn=r,e.cancelPendingCommit=fe(qp.bind(null,e,t,r,a,i,l,c,h,$,Q,F,null,B,Y)),ca(e,r,c,!N);return}}qp(e,t,r,a,i,l,c,h,$)}function d0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Gt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,a,i){t&=~hc,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Bt(l),c=1<<r;i[r]=-1,l&=~c}a!==0&&Yu(e,a,t)}function Yr(){return(Ue&6)===0?(zl(0),!1):!0}function Sc(){if(ke!==null){if(Ye===0)var e=ke.return;else e=ke,Cn=Aa=null,Rs(e),di=null,rl=0,e=ke;for(;e!==null;)fp(e.alternate,e),e=e.return;ke=null}}function $i(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,C0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yn=0,Sc(),Ke=e,ke=a=_n(e.current,null),Me=t,Ye=0,Xt=null,la=!1,bi=Yi(e,t),gc=!1,Si=Qt=hc=Na=ra=it=0,Lt=$l=null,mc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Bt(i),r=1<<l;t|=e[l],i&=~r}return qn=t,ur(),a}function Hp(e,t){we=null,j.H=gl,t===fi||t===vr?(t=If(),Ye=3):t===zs?(t=If(),Ye=4):Ye=t===Js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,ke===null&&(it=1,Cr(e,Jt(t,e.current)))}function Rp(){var e=Yt.current;return e===null?!0:(Me&4194048)===Me?nn===null:(Me&62914560)===Me||(Me&536870912)!==0?e===nn:!1}function Lp(){var e=j.H;return j.H=gl,e===null?gl:e}function Np(){var e=j.A;return j.A=u0,e}function Vr(){it=4,la||(Me&4194048)!==Me&&Yt.current!==null||(bi=!0),(ra&134217727)===0&&(Na&134217727)===0||Ke===null||ca(Ke,Me,Qt,!1)}function xc(e,t,a){var i=Ue;Ue|=2;var l=Lp(),r=Np();(Ke!==e||Me!==t)&&(qr=null,$i(e,t)),t=!1;var c=it;e:do try{if(Ye!==0&&ke!==null){var h=ke,$=Xt;switch(Ye){case 8:Sc(),c=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(t=!0);var N=Ye;if(Ye=0,Xt=null,wi(e,h,$,N),a&&bi){c=0;break e}break;default:N=Ye,Ye=0,Xt=null,wi(e,h,$,N)}}p0(),c=it;break}catch(Q){Hp(e,Q)}while(!0);return t&&e.shellSuspendCounter++,Cn=Aa=null,Ue=i,j.H=l,j.A=r,ke===null&&(Ke=null,Me=0,ur()),c}function p0(){for(;ke!==null;)Up(ke)}function g0(e,t){var a=Ue;Ue|=2;var i=Lp(),l=Np();Ke!==e||Me!==t?(qr=null,Gr=Ot()+500,$i(e,t)):bi=Yi(e,t);e:do try{if(Ye!==0&&ke!==null){t=ke;var r=Xt;t:switch(Ye){case 1:Ye=0,Xt=null,wi(e,t,r,1);break;case 2:case 9:if(Pf(r)){Ye=0,Xt=null,Bp(t);break}t=function(){Ye!==2&&Ye!==9||Ke!==e||(Ye=7),xn(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Pf(r)?(Ye=0,Xt=null,Bp(t)):(Ye=0,Xt=null,wi(e,t,r,7));break;case 5:var c=null;switch(ke.tag){case 26:c=ke.memoizedState;case 5:case 27:var h=ke;if(c?Tg(c):h.stateNode.complete){Ye=0,Xt=null;var $=h.sibling;if($!==null)ke=$;else{var N=h.return;N!==null?(ke=N,Xr(N)):ke=null}break t}}Ye=0,Xt=null,wi(e,t,r,5);break;case 6:Ye=0,Xt=null,wi(e,t,r,6);break;case 8:Sc(),it=6;break e;default:throw Error(s(462))}}h0();break}catch(Q){Hp(e,Q)}while(!0);return Cn=Aa=null,j.H=i,j.A=l,Ue=a,ke!==null?0:(Ke=null,Me=0,ur(),it)}function h0(){for(;ke!==null&&!En();)Up(ke)}function Up(e){var t=cp(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?Xr(e):ke=t}function Bp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ap(a,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=ap(a,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Rs(t);default:fp(a,t),t=ke=Nf(t,qn),t=cp(a,t,qn)}e.memoizedProps=e.pendingProps,t===null?Xr(e):ke=t}function wi(e,t,a,i){Cn=Aa=null,Rs(t),di=null,rl=0;var l=t.return;try{if(a0(e,l,t,a,Me)){it=1,Cr(e,Jt(a,e.current)),ke=null;return}}catch(r){if(l!==null)throw ke=l,r;it=1,Cr(e,Jt(a,e.current)),ke=null;return}t.flags&32768?(He||i===1?e=!0:bi||(Me&536870912)!==0?e=!1:(la=e=!0,(i===2||i===9||i===3||i===6)&&(i=Yt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Gp(t,e)):Xr(t)}function Xr(e){var t=e;do{if((t.flags&32768)!==0){Gp(t,la);return}e=t.return;var a=r0(t.alternate,t,qn);if(a!==null){ke=a;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);it===0&&(it=5)}function Gp(e,t){do{var a=o0(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);it=6,ke=null}function qp(e,t,a,i,l,r,c,h,$){e.cancelPendingCommit=null;do Qr();while(ht!==0);if((Ue&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=cs,Km(e,a,r,c,h,$),e===Ke&&(ke=Ke=null,Me=0),xi=t,sa=e,Yn=a,yc=r,vc=l,kp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,b0(yn,function(){return Zp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,l=f.p,f.p=2,c=Ue,Ue|=4;try{s0(e,t,a)}finally{Ue=c,f.p=l,j.T=i}}ht=1,Yp(),Vp(),Xp()}}function Yp(){if(ht===1){ht=0;var e=sa,t=xi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var i=f.p;f.p=2;var l=Ue;Ue|=4;try{wp(t,e);var r=Mc,c=Af(e.containerInfo),h=r.focusedElem,$=r.selectionRange;if(c!==h&&h&&h.ownerDocument&&Of(h.ownerDocument.documentElement,h)){if($!==null&&is(h)){var N=$.start,Q=$.end;if(Q===void 0&&(Q=N),"selectionStart"in h)h.selectionStart=N,h.selectionEnd=Math.min(Q,h.value.length);else{var F=h.ownerDocument||document,B=F&&F.defaultView||window;if(B.getSelection){var Y=B.getSelection(),fe=h.textContent.length,ve=Math.min($.start,fe),Ze=$.end===void 0?ve:Math.min($.end,fe);!Y.extend&&ve>Ze&&(c=Ze,Ze=ve,ve=c);var C=jf(h,ve),E=jf(h,Ze);if(C&&E&&(Y.rangeCount!==1||Y.anchorNode!==C.node||Y.anchorOffset!==C.offset||Y.focusNode!==E.node||Y.focusOffset!==E.offset)){var L=F.createRange();L.setStart(C.node,C.offset),Y.removeAllRanges(),ve>Ze?(Y.addRange(L),Y.extend(E.node,E.offset)):(L.setEnd(E.node,E.offset),Y.addRange(L))}}}}for(F=[],Y=h;Y=Y.parentNode;)Y.nodeType===1&&F.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var J=F[h];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}io=!!Cc,Mc=Cc=null}finally{Ue=l,f.p=i,j.T=a}}e.current=t,ht=2}}function Vp(){if(ht===2){ht=0;var e=sa,t=xi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var i=f.p;f.p=2;var l=Ue;Ue|=4;try{vp(e,t.alternate,t)}finally{Ue=l,f.p=i,j.T=a}}ht=3}}function Xp(){if(ht===4||ht===3){ht=0,Va();var e=sa,t=xi,a=Yn,i=kp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,xi=sa=null,Qp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(oa=null),Uo(a),t=t.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(qi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=j.T,l=f.p,f.p=2,j.T=null;try{for(var r=e.onRecoverableError,c=0;c<i.length;c++){var h=i[c];r(h.value,{componentStack:h.stack})}}finally{j.T=t,f.p=l}}(Yn&3)!==0&&Qr(),xn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===bc?wl++:(wl=0,bc=e):wl=0,zl(0)}}function Qp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,il(t)))}function Qr(){return Yp(),Vp(),Xp(),Zp()}function Zp(){if(ht!==5)return!1;var e=sa,t=yc;yc=0;var a=Uo(Yn),i=j.T,l=f.p;try{f.p=32>a?32:a,j.T=null,a=vc,vc=null;var r=sa,c=Yn;if(ht=0,xi=sa=null,Yn=0,(Ue&6)!==0)throw Error(s(331));var h=Ue;if(Ue|=4,Op(r.current),Tp(r,r.current,c,a),Ue=h,zl(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(qi,r)}catch{}return!0}finally{f.p=l,j.T=i,Qp(e,t)}}function Kp(e,t,a){t=Jt(a,t),t=Is(e.stateNode,t,2),e=ta(e,t,2),e!==null&&(Vi(e,2),xn(e))}function Ve(e,t,a){if(e.tag===3)Kp(e,e,a);else for(;t!==null;){if(t.tag===3){Kp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))){e=Jt(a,e),a=Pd(2),i=ta(t,a,2),i!==null&&(Wd(a,i,t,e),Vi(i,2),xn(i));break}}t=t.return}}function $c(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new f0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(gc=!0,l.add(a),e=m0.bind(null,e,t,a),t.then(e,e))}function m0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(Me&a)===a&&(it===4||it===3&&(Me&62914560)===Me&&300>Ot()-Br?(Ue&2)===0&&$i(e,0):hc|=a,Si===Me&&(Si=0)),xn(e)}function Pp(e,t){t===0&&(t=qu()),e=Ea(e,t),e!==null&&(Vi(e,t),xn(e))}function y0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Pp(e,a)}function v0(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Pp(e,a)}function b0(e,t){return lt(e,t)}var Zr=null,zi=null,wc=!1,Kr=!1,zc=!1,ua=0;function xn(e){e!==zi&&e.next===null&&(zi===null?Zr=zi=e:zi=zi.next=e),Kr=!0,wc||(wc=!0,x0())}function zl(e,t){if(!zc&&Kr){zc=!0;do for(var a=!1,i=Zr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var c=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-Bt(42|e)+1)-1,r&=l&~(c&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Fp(i,r))}else r=Me,r=Jl(i,i===Ke?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Yi(i,r)||(a=!0,Fp(i,r));i=i.next}while(a);zc=!1}}function S0(){Wp()}function Wp(){Kr=wc=!1;var e=0;ua!==0&&k0()&&(e=ua);for(var t=Ot(),a=null,i=Zr;i!==null;){var l=i.next,r=Ip(i,t);r===0?(i.next=null,a===null?Zr=l:a.next=l,l===null&&(zi=a)):(a=i,(e!==0||(r&3)!==0)&&(Kr=!0)),i=l}ht!==0&&ht!==5||zl(e),ua!==0&&(ua=0)}function Ip(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-Bt(r),h=1<<c,$=l[c];$===-1?((h&a)===0||(h&i)!==0)&&(l[c]=Zm(h,t)):$<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ke,a=Me,a=Jl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&xt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&xt(i),Uo(a)){case 2:case 8:a=sn;break;case 32:a=yn;break;case 268435456:a=Gu;break;default:a=yn}return i=Jp.bind(null,e),a=lt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&xt(i),e.callbackPriority=2,e.callbackNode=null,2}function Jp(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qr()&&e.callbackNode!==a)return null;var i=Me;return i=Jl(e,e===Ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Mp(e,i,t),Ip(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?Jp.bind(null,e):null)}function Fp(e,t){if(Qr())return null;Mp(e,t,!0)}function x0(){M0(function(){(Ue&6)!==0?lt(Kl,S0):Wp()})}function Tc(){if(ua===0){var e=ci;e===0&&(e=Pl,Pl<<=1,(Pl&261888)===0&&(Pl=256)),ua=e}return ua}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nr(""+e)}function tg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function $0(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=eg((l[Ct]||null).action),c=i.submitter;c&&(t=(t=c[Ct]||null)?eg(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var h=new rr("action","action",null,i,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ua!==0){var $=c?tg(l,c):new FormData(l);Xs(a,{pending:!0,data:$,method:l.method,action:r},null,$)}}else typeof r=="function"&&(h.preventDefault(),$=c?tg(l,c):new FormData(l),Xs(a,{pending:!0,data:$,method:l.method,action:r},r,$))},currentTarget:l}]})}}for(var Ec=0;Ec<ss.length;Ec++){var jc=ss[Ec],w0=jc.toLowerCase(),z0=jc[0].toUpperCase()+jc.slice(1);cn(w0,"on"+z0)}cn(Cf,"onAnimationEnd"),cn(Mf,"onAnimationIteration"),cn(Df,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(By,"onTransitionRun"),cn(Gy,"onTransitionStart"),cn(qy,"onTransitionCancel"),cn(Hf,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function ng(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var c=i.length-1;0<=c;c--){var h=i[c],$=h.instance,N=h.currentTarget;if(h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(Q){cr(Q)}l.currentTarget=null,r=$}else for(c=0;c<i.length;c++){if(h=i[c],$=h.instance,N=h.currentTarget,h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(Q){cr(Q)}l.currentTarget=null,r=$}}}}function Ce(e,t){var a=t[Bo];a===void 0&&(a=t[Bo]=new Set);var i=e+"__bubble";a.has(i)||(ag(t,e,2,!1),a.add(i))}function Oc(e,t,a){var i=0;t&&(i|=4),ag(a,e,i,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Pr]){e[Pr]=!0,Pu.forEach(function(a){a!=="selectionchange"&&(T0.has(a)||Oc(a,!1,e),Oc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Oc("selectionchange",!1,t))}}function ag(e,t,a,i){switch(Cg(t)){case 2:var l=F0;break;case 8:l=ev;break;default:l=Vc}a=l.bind(null,t,a,e),l=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function _c(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var h=i.stateNode.containerInfo;if(h===l)break;if(c===4)for(c=i.return;c!==null;){var $=c.tag;if(($===3||$===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;h!==null;){if(c=Qa(h),c===null)return;if($=c.tag,$===5||$===6||$===26||$===27){i=r=c;continue e}h=h.parentNode}}i=i.return}sf(function(){var N=r,Q=Zo(a),F=[];e:{var B=Rf.get(e);if(B!==void 0){var Y=rr,fe=e;switch(e){case"keypress":if(ir(a)===0)break e;case"keydown":case"keyup":Y=vy;break;case"focusin":fe="focus",Y=Fo;break;case"focusout":fe="blur",Y=Fo;break;case"beforeblur":case"afterblur":Y=Fo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=xy;break;case Cf:case Mf:case Df:Y=cy;break;case Hf:Y=wy;break;case"scroll":case"scrollend":Y=iy;break;case"wheel":Y=Ty;break;case"copy":case"cut":case"paste":Y=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=pf;break;case"toggle":case"beforetoggle":Y=jy}var ve=(t&4)!==0,Ze=!ve&&(e==="scroll"||e==="scrollend"),C=ve?B!==null?B+"Capture":null:B;ve=[];for(var E=N,L;E!==null;){var J=E;if(L=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||L===null||C===null||(J=Zi(E,C),J!=null&&ve.push(El(E,J,L))),Ze)break;E=E.return}0<ve.length&&(B=new Y(B,fe,null,a,Q),F.push({event:B,listeners:ve}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&a!==Qo&&(fe=a.relatedTarget||a.fromElement)&&(Qa(fe)||fe[Xa]))break e;if((Y||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(fe=a.relatedTarget||a.toElement,Y=N,fe=fe?Qa(fe):null,fe!==null&&(Ze=b(fe),ve=fe.tag,fe!==Ze||ve!==5&&ve!==27&&ve!==6)&&(fe=null)):(Y=null,fe=N),Y!==fe)){if(ve=ff,J="onMouseLeave",C="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ve=pf,J="onPointerLeave",C="onPointerEnter",E="pointer"),Ze=Y==null?B:Qi(Y),L=fe==null?B:Qi(fe),B=new ve(J,E+"leave",Y,a,Q),B.target=Ze,B.relatedTarget=L,J=null,Qa(Q)===N&&(ve=new ve(C,E+"enter",fe,a,Q),ve.target=L,ve.relatedTarget=Ze,J=ve),Ze=J,Y&&fe)t:{for(ve=E0,C=Y,E=fe,L=0,J=C;J;J=ve(J))L++;J=0;for(var ye=E;ye;ye=ve(ye))J++;for(;0<L-J;)C=ve(C),L--;for(;0<J-L;)E=ve(E),J--;for(;L--;){if(C===E||E!==null&&C===E.alternate){ve=C;break t}C=ve(C),E=ve(E)}ve=null}else ve=null;Y!==null&&ig(F,B,Y,ve,!1),fe!==null&&Ze!==null&&ig(F,Ze,fe,ve,!0)}}e:{if(B=N?Qi(N):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var Le=xf;else if(bf(B))if($f)Le=Ly;else{Le=Hy;var he=Dy}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?N&&Xo(N.elementType)&&(Le=xf):Le=Ry;if(Le&&(Le=Le(e,N))){Sf(F,Le,a,Q);break e}he&&he(e,B,N),e==="focusout"&&N&&B.type==="number"&&N.memoizedProps.value!=null&&Vo(B,"number",B.value)}switch(he=N?Qi(N):window,e){case"focusin":(bf(he)||he.contentEditable==="true")&&(ti=he,ls=N,tl=null);break;case"focusout":tl=ls=ti=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,_f(F,a,Q);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":_f(F,a,Q)}var Te;if(ts)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else ei?yf(e,a)&&(De="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(gf&&a.locale!=="ko"&&(ei||De!=="onCompositionStart"?De==="onCompositionEnd"&&ei&&(Te=cf()):(Kn=Q,Wo="value"in Kn?Kn.value:Kn.textContent,ei=!0)),he=Wr(N,De),0<he.length&&(De=new df(De,e,null,a,Q),F.push({event:De,listeners:he}),Te?De.data=Te:(Te=vf(a),Te!==null&&(De.data=Te)))),(Te=Ay?_y(e,a):ky(e,a))&&(De=Wr(N,"onBeforeInput"),0<De.length&&(he=new df("onBeforeInput","beforeinput",null,a,Q),F.push({event:he,listeners:De}),he.data=Te)),$0(F,e,N,a,Q)}ng(F,t)})}function El(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wr(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Zi(e,a),l!=null&&i.unshift(El(e,l,r)),l=Zi(e,t),l!=null&&i.push(El(e,l,r))),e.tag===3)return i;e=e.return}return[]}function E0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,t,a,i,l){for(var r=t._reactName,c=[];a!==null&&a!==i;){var h=a,$=h.alternate,N=h.stateNode;if(h=h.tag,$!==null&&$===i)break;h!==5&&h!==26&&h!==27||N===null||($=N,l?(N=Zi(a,r),N!=null&&c.unshift(El(a,N,$))):l||(N=Zi(a,r),N!=null&&c.push(El(a,N,$)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var j0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(O0,"")}function rg(e,t){return t=lg(t),lg(e)===t}function Qe(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ia(e,""+i);break;case"className":er(e,"class",i);break;case"tabIndex":er(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":er(e,a,i);break;case"style":rf(e,i,r);break;case"data":if(t!=="object"){er(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=nr(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Qe(e,t,"name",l.name,l,null),Qe(e,t,"formEncType",l.formEncType,l,null),Qe(e,t,"formMethod",l.formMethod,l,null),Qe(e,t,"formTarget",l.formTarget,l,null)):(Qe(e,t,"encType",l.encType,l,null),Qe(e,t,"method",l.method,l,null),Qe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=nr(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=On);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=nr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Fl(e,"popover",i);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ny.get(a)||a,Fl(e,a,i))}}function kc(e,t,a,i,l,r){switch(a){case"style":rf(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&Ia(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=On);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[Ct]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Fl(e,a,i)}}}function Et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Qe(e,t,r,c,a,null)}}l&&Qe(e,t,"srcSet",a.srcSet,a,null),i&&Qe(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var h=r=c=l=null,$=null,N=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":l=Q;break;case"type":c=Q;break;case"checked":$=Q;break;case"defaultChecked":N=Q;break;case"value":r=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,t));break;default:Qe(e,t,i,Q,a,null)}}tf(e,r,h,$,N,c,l,!1);return;case"select":Ce("invalid",e),i=c=r=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":c=h;break;case"multiple":i=h;default:Qe(e,t,l,h,a,null)}t=r,a=c,e.multiple=!!i,t!=null?Wa(e,!!i,t,!1):a!=null&&Wa(e,!!i,a,!0);return;case"textarea":Ce("invalid",e),r=l=i=null;for(c in a)if(a.hasOwnProperty(c)&&(h=a[c],h!=null))switch(c){case"value":i=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Qe(e,t,c,h,a,null)}af(e,i,l,r);return;case"option":for($ in a)if(a.hasOwnProperty($)&&(i=a[$],i!=null))switch($){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Qe(e,t,$,i,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<Tl.length;i++)Ce(Tl[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Qe(e,t,N,i,a,null)}return;default:if(Xo(t)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&kc(e,t,Q,i,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(i=a[h],i!=null&&Qe(e,t,h,i,a,null))}function A0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,h=null,$=null,N=null,Q=null;for(Y in a){var F=a[Y];if(a.hasOwnProperty(Y)&&F!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":$=F;default:i.hasOwnProperty(Y)||Qe(e,t,Y,null,i,F)}}for(var B in i){var Y=i[B];if(F=a[B],i.hasOwnProperty(B)&&(Y!=null||F!=null))switch(B){case"type":r=Y;break;case"name":l=Y;break;case"checked":N=Y;break;case"defaultChecked":Q=Y;break;case"value":c=Y;break;case"defaultValue":h=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==F&&Qe(e,t,B,Y,i,F)}}Yo(e,c,h,$,N,Q,r,l);return;case"select":Y=c=h=B=null;for(r in a)if($=a[r],a.hasOwnProperty(r)&&$!=null)switch(r){case"value":break;case"multiple":Y=$;default:i.hasOwnProperty(r)||Qe(e,t,r,null,i,$)}for(l in i)if(r=i[l],$=a[l],i.hasOwnProperty(l)&&(r!=null||$!=null))switch(l){case"value":B=r;break;case"defaultValue":h=r;break;case"multiple":c=r;default:r!==$&&Qe(e,t,l,r,i,$)}t=h,a=c,i=Y,B!=null?Wa(e,!!a,B,!1):!!i!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":Y=B=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Qe(e,t,h,null,i,l)}for(c in i)if(l=i[c],r=a[c],i.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":B=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Qe(e,t,c,l,i,r)}nf(e,B,Y);return;case"option":for(var fe in a)if(B=a[fe],a.hasOwnProperty(fe)&&B!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Qe(e,t,fe,null,i,B)}for($ in i)if(B=i[$],Y=a[$],i.hasOwnProperty($)&&B!==Y&&(B!=null||Y!=null))switch($){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Qe(e,t,$,B,i,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)B=a[ve],a.hasOwnProperty(ve)&&B!=null&&!i.hasOwnProperty(ve)&&Qe(e,t,ve,null,i,B);for(N in i)if(B=i[N],Y=a[N],i.hasOwnProperty(N)&&B!==Y&&(B!=null||Y!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Qe(e,t,N,B,i,Y)}return;default:if(Xo(t)){for(var Ze in a)B=a[Ze],a.hasOwnProperty(Ze)&&B!==void 0&&!i.hasOwnProperty(Ze)&&kc(e,t,Ze,void 0,i,B);for(Q in i)B=i[Q],Y=a[Q],!i.hasOwnProperty(Q)||B===Y||B===void 0&&Y===void 0||kc(e,t,Q,B,i,Y);return}}for(var C in a)B=a[C],a.hasOwnProperty(C)&&B!=null&&!i.hasOwnProperty(C)&&Qe(e,t,C,null,i,B);for(F in i)B=i[F],Y=a[F],!i.hasOwnProperty(F)||B===Y||B==null&&Y==null||Qe(e,t,F,B,i,Y)}function og(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,c=l.initiatorType,h=l.duration;if(r&&h&&og(c)){for(c=0,h=l.responseEnd,i+=1;i<a.length;i++){var $=a[i],N=$.startTime;if(N>h)break;var Q=$.transferSize,F=$.initiatorType;Q&&og(F)&&($=$.responseEnd,c+=Q*($<h?1:(h-N)/($-N)))}if(--i,t+=8*(r+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cc=null,Mc=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Dc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function k0(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(D0)}:ug;function D0(e){setTimeout(function(){throw e})}function fa(e){return e==="head"}function dg(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Oi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")jl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,jl(a);for(var r=a.firstChild;r;){var c=r.nextSibling,h=r.nodeName;r[Xi]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&jl(e.ownerDocument.body);a=l}while(a);Oi(t)}function pg(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Rc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rc(a),Go(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function H0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Xi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function R0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=an(e.nextSibling),e===null))return null;return e}function gg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=an(e.nextSibling),e===null))return null;return e}function Lc(e){return e.data==="$?"||e.data==="$~"}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function L0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uc=null;function hg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return an(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function yg(e,t,a){switch(t=Ir(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function jl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Go(e)}var ln=new Map,vg=new Set;function Jr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vn=f.d;f.d={f:N0,r:U0,D:B0,C:G0,L:q0,m:Y0,X:X0,S:V0,M:Q0};function N0(){var e=Vn.f(),t=Yr();return e||t}function U0(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?Hd(t):Vn.r(e)}var Ti=typeof document>"u"?null:document;function bg(e,t,a){var i=Ti;if(i&&typeof t=="string"&&t){var l=Wt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),vg.has(l)||(vg.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Et(t,"link",e),vt(t),i.head.appendChild(t)))}}function B0(e){Vn.D(e),bg("dns-prefetch",e,null)}function G0(e,t){Vn.C(e,t),bg("preconnect",e,t)}function q0(e,t,a){Vn.L(e,t,a);var i=Ti;if(i&&e&&t){var l='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Wt(a.imageSizes)+'"]')):l+='[href="'+Wt(e)+'"]';var r=l;switch(t){case"style":r=Ei(e);break;case"script":r=ji(e)}ln.has(r)||(e=W({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ln.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Ol(r))||t==="script"&&i.querySelector(Al(r))||(t=i.createElement("link"),Et(t,"link",e),vt(t),i.head.appendChild(t)))}}function Y0(e,t){Vn.m(e,t);var a=Ti;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Wt(i)+'"][href="'+Wt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ji(e)}if(!ln.has(r)&&(e=W({rel:"modulepreload",href:e},t),ln.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(r)))return}i=a.createElement("link"),Et(i,"link",e),vt(i),a.head.appendChild(i)}}}function V0(e,t,a){Vn.S(e,t,a);var i=Ti;if(i&&e){var l=Ka(i).hoistableStyles,r=Ei(e);t=t||"default";var c=l.get(r);if(!c){var h={loading:0,preload:null};if(c=i.querySelector(Ol(r)))h.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ln.get(r))&&Bc(e,a);var $=c=i.createElement("link");vt($),Et($,"link",e),$._p=new Promise(function(N,Q){$.onload=N,$.onerror=Q}),$.addEventListener("load",function(){h.loading|=1}),$.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Fr(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:h},l.set(r,c)}}}function X0(e,t){Vn.X(e,t);var a=Ti;if(a&&e){var i=Ka(a).hoistableScripts,l=ji(e),r=i.get(l);r||(r=a.querySelector(Al(l)),r||(e=W({src:e,async:!0},t),(t=ln.get(l))&&Gc(e,t),r=a.createElement("script"),vt(r),Et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Q0(e,t){Vn.M(e,t);var a=Ti;if(a&&e){var i=Ka(a).hoistableScripts,l=ji(e),r=i.get(l);r||(r=a.querySelector(Al(l)),r||(e=W({src:e,async:!0,type:"module"},t),(t=ln.get(l))&&Gc(e,t),r=a.createElement("script"),vt(r),Et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Sg(e,t,a,i){var l=(l=K.current)?Jr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ei(a.href),a=Ka(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ei(a.href);var r=Ka(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(Ol(e)))&&!r._p&&(c.instance=r,c.state.loading=5),ln.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(e,a),r||Z0(l,e,a,c.state))),t&&i===null)throw Error(s(528,""));return c}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ji(a),a=Ka(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ei(e){return'href="'+Wt(e)+'"'}function Ol(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function Z0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Et(t,"link",a),vt(t),e.head.appendChild(t))}function ji(e){return'[src="'+Wt(e)+'"]'}function Al(e){return"script[async]"+e}function $g(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(i)return t.instance=i,vt(i),i;var l=W({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),Et(i,"style",l),Fr(i,a.precedence,e),t.instance=i;case"stylesheet":l=Ei(a.href);var r=e.querySelector(Ol(l));if(r)return t.state.loading|=4,t.instance=r,vt(r),r;i=xg(a),(l=ln.get(l))&&Bc(i,l),r=(e.ownerDocument||e).createElement("link"),vt(r);var c=r;return c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),Et(r,"link",i),t.state.loading|=4,Fr(r,a.precedence,e),t.instance=r;case"script":return r=ji(a.src),(l=e.querySelector(Al(r)))?(t.instance=l,vt(l),l):(i=a,(l=ln.get(r))&&(i=W({},a),Gc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Et(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Fr(i,a.precedence,e));return t.instance}function Fr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,c=0;c<i.length;c++){var h=i[c];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eo=null;function wg(e,t,a){if(eo===null){var i=new Map,l=eo=new Map;l.set(a,i)}else l=eo,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Xi]||r[$t]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var h=i.get(c);h?h.push(r):i.set(c,[r])}}return i}function zg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function K0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ei(i.href),r=t.querySelector(Ol(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=to.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,vt(r);return}r=t.ownerDocument||t,i=xg(i),(l=ln.get(l))&&Bc(i,l),r=r.createElement("link"),vt(r);var c=r;c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),Et(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=to.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qc=0;function W0(e,t){return e.stylesheets&&e.count===0&&ao(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qc===0&&(qc=62500*_0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function to(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ao(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var no=null;function ao(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,no=new Map,t.forEach(I0,e),no=null,to.call(e))}function I0(e,t){if(!(t.state.loading&4)){var a=no.get(e);if(a)var i=a.get(null);else{a=new Map,no.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}l=t.instance,c=l.getAttribute("data-precedence"),r=a.get(c)||i,r===i&&a.set(null,l),a.set(c,l),this.count++,i=to.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var _l={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function J0(e,t,a,i,l,r,c,h,$){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.hiddenUpdates=Lo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=$,this.incompleteTransitions=new Map}function Eg(e,t,a,i,l,r,c,h,$,N,Q,F){return e=new J0(e,t,a,c,$,N,Q,F,h),t=1,r===!0&&(t|=24),r=qt(3,null,null,t),e.current=r,r.stateNode=e,t=xs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},Ts(r),e}function jg(e){return e?(e=ii,e):ii}function Og(e,t,a,i,l,r){l=jg(l),i.context===null?i.context=l:i.pendingContext=l,i=ea(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=ta(e,i,t),a!==null&&(Nt(a,e,t),sl(a,e,t))}function Ag(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Yc(e,t){Ag(e,t),(e=e.alternate)&&Ag(e,t)}function _g(e){if(e.tag===13||e.tag===31){var t=Ea(e,67108864);t!==null&&Nt(t,e,67108864),Yc(e,67108864)}}function kg(e){if(e.tag===13||e.tag===31){var t=Zt();t=No(t);var a=Ea(e,t);a!==null&&Nt(a,e,t),Yc(e,t)}}var io=!0;function F0(e,t,a,i){var l=j.T;j.T=null;var r=f.p;try{f.p=2,Vc(e,t,a,i)}finally{f.p=r,j.T=l}}function ev(e,t,a,i){var l=j.T;j.T=null;var r=f.p;try{f.p=8,Vc(e,t,a,i)}finally{f.p=r,j.T=l}}function Vc(e,t,a,i){if(io){var l=Xc(i);if(l===null)_c(e,t,i,lo,a),Mg(e,i);else if(nv(l,e,t,a,i))i.stopPropagation();else if(Mg(e,i),t&4&&-1<tv.indexOf(e)){for(;l!==null;){var r=Za(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=xa(r.pendingLanes);if(c!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var $=1<<31-Bt(c);h.entanglements[1]|=$,c&=~$}xn(r),(Ue&6)===0&&(Gr=Ot()+500,zl(0))}}break;case 31:case 13:h=Ea(r,2),h!==null&&Nt(h,r,2),Yr(),Yc(r,2)}if(r=Xc(i),r===null&&_c(e,t,i,lo,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else _c(e,t,i,null,a)}}function Xc(e){return e=Zo(e),Qc(e)}var lo=null;function Qc(e){if(lo=null,e=Qa(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=M(t),e!==null)return e;e=null}else if(a===31){if(e=G(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lo=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sa()){case Kl:return 2;case sn:return 8;case yn:case Gm:return 32;case Gu:return 268435456;default:return 32}default:return 32}}var Zc=!1,da=null,pa=null,ga=null,kl=new Map,Cl=new Map,ha=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(t.pointerId)}}function Ml(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Za(t),t!==null&&_g(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nv(e,t,a,i,l){switch(t){case"focusin":return da=Ml(da,e,t,a,i,l),!0;case"dragenter":return pa=Ml(pa,e,t,a,i,l),!0;case"mouseover":return ga=Ml(ga,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return kl.set(r,Ml(kl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,Cl.set(r,Ml(Cl.get(r)||null,e,t,a,i,l)),!0}return!1}function Dg(e){var t=Qa(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=M(a),t!==null){e.blockedOn=t,Zu(e.priority,function(){kg(a)});return}}else if(t===31){if(t=G(a),t!==null){e.blockedOn=t,Zu(e.priority,function(){kg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Qo=i,a.target.dispatchEvent(i),Qo=null}else return t=Za(a),t!==null&&_g(t),e.blockedOn=a,!1;t.shift()}return!0}function Hg(e,t,a){ro(e)&&a.delete(t)}function av(){Zc=!1,da!==null&&ro(da)&&(da=null),pa!==null&&ro(pa)&&(pa=null),ga!==null&&ro(ga)&&(ga=null),kl.forEach(Hg),Cl.forEach(Hg)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,Zc||(Zc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,av)))}var so=null;function Rg(e){so!==e&&(so=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){so===e&&(so=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Qc(i||a)===null)continue;break}var r=Za(a);r!==null&&(e.splice(t,3),t-=3,Xs(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Oi(e){function t($){return oo($,e)}da!==null&&oo(da,e),pa!==null&&oo(pa,e),ga!==null&&oo(ga,e),kl.forEach(t),Cl.forEach(t);for(var a=0;a<ha.length;a++){var i=ha[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ha.length&&(a=ha[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],c=l[Ct]||null;if(typeof r=="function")c||Rg(a);else if(c){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[Ct]||null)h=c.formAction;else if(Qc(l)!==null)continue}else h=c.action;typeof h=="function"?a[i+1]=h:(a.splice(i,3),i-=3),Rg(a)}}}function Lg(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Kc(e){this._internalRoot=e}co.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Zt();Og(a,i,e,t,null,null)},co.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Og(e.current,2,null,e,null,null),Yr(),t[Xa]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ha.length&&t!==0&&t<ha[a].priority;a++);ha.splice(a,0,e),a===0&&Dg(e)}};var Ng=o.version;if(Ng!=="19.2.3")throw Error(s(527,Ng,"19.2.3"));f.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=A(t),e=e!==null?X(e):null,e=e===null?null:e.stateNode,e};var iv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{qi=uo.inject(iv),Ut=uo}catch{}}return Hl.createRoot=function(e,t){if(!m(e))throw Error(s(299));var a=!1,i="",l=Xd,r=Qd,c=Zd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Eg(e,1,!1,null,null,a,i,null,l,r,c,Lg),e[Xa]=t.current,Ac(e),new Kc(t)},Hl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(s(299));var i=!1,l="",r=Xd,c=Qd,h=Zd,$=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&($=a.formState)),t=Eg(e,1,!0,t,a??null,i,l,$,r,c,h,Lg),t.context=jg(null),a=t.current,i=Zt(),i=No(i),l=ea(i),l.callback=null,ta(a,l,i),a=i,t.current.lanes=a,Vi(t,a),xn(t),e[Xa]=t.current,Ac(e),new co(t)},Hl.version="19.2.3",Hl}var Kg;function hv(){if(Kg)return Ic.exports;Kg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Ic.exports=gv(),Ic.exports}var mv=hv();const yv=_u(mv);var St=function(){return St=Object.assign||function(o){for(var u,s=1,m=arguments.length;s<m;s++){u=arguments[s];for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&(o[b]=u[b])}return o},St.apply(this,arguments)};function Hi(n,o,u){if(u||arguments.length===2)for(var s=0,m=o.length,b;s<m;s++)(b||!(s in o))&&(b||(b=Array.prototype.slice.call(o,0,s)),b[s]=o[s]);return n.concat(b||Array.prototype.slice.call(o))}var Ie="-ms-",Gl="-moz-",Be="-webkit-",Ph="comm",Ao="rule",ku="decl",vv="@import",bv="@namespace",Wh="@keyframes",Sv="@layer",Ih=Math.abs,Cu=String.fromCharCode,Su=Object.assign;function xv(n,o){return mt(n,0)^45?(((o<<2^mt(n,0))<<2^mt(n,1))<<2^mt(n,2))<<2^mt(n,3):0}function Jh(n){return n.trim()}function Xn(n,o){return(n=o.exec(n))?n[0]:n}function Ee(n,o,u){return n.replace(o,u)}function go(n,o,u){return n.indexOf(o,u)}function mt(n,o){return n.charCodeAt(o)|0}function Ga(n,o,u){return n.slice(o,u)}function gn(n){return n.length}function Fh(n){return n.length}function Ul(n,o){return o.push(n),n}function $v(n,o){return n.map(o).join("")}function Pg(n,o){return n.filter(function(u){return!Xn(u,o)})}var _o=1,Ri=1,em=0,on=0,pt=0,Gi="";function ko(n,o,u,s,m,b,M,G){return{value:n,root:o,parent:u,type:s,props:m,children:b,line:_o,column:Ri,length:M,return:"",siblings:G}}function ya(n,o){return Su(ko("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function Ai(n){for(;n.root;)n=ya(n.root,{children:[n]});Ul(n,n.siblings)}function wv(){return pt}function zv(){return pt=on>0?mt(Gi,--on):0,Ri--,pt===10&&(Ri=1,_o--),pt}function hn(){return pt=on<em?mt(Gi,on++):0,Ri++,pt===10&&(Ri=1,_o++),pt}function va(){return mt(Gi,on)}function ho(){return on}function Co(n,o){return Ga(Gi,n,o)}function ql(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tv(n){return _o=Ri=1,em=gn(Gi=n),on=0,[]}function Ev(n){return Gi="",n}function tu(n){return Jh(Co(on-1,xu(n===91?n+2:n===40?n+1:n)))}function jv(n){for(;(pt=va())&&pt<33;)hn();return ql(n)>2||ql(pt)>3?"":" "}function Ov(n,o){for(;--o&&hn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return Co(n,ho()+(o<6&&va()==32&&hn()==32))}function xu(n){for(;hn();)switch(pt){case n:return on;case 34:case 39:n!==34&&n!==39&&xu(pt);break;case 40:n===41&&xu(n);break;case 92:hn();break}return on}function Av(n,o){for(;hn()&&n+pt!==57;)if(n+pt===84&&va()===47)break;return"/*"+Co(o,on-1)+"*"+Cu(n===47?n:hn())}function _v(n){for(;!ql(va());)hn();return Co(n,on)}function kv(n){return Ev(mo("",null,null,null,[""],n=Tv(n),0,[0],n))}function mo(n,o,u,s,m,b,M,G,k){for(var A=0,X=0,W=M,le=0,re=0,ne=0,V=1,de=1,ue=1,ge=0,ae="",se=m,w=b,z=s,x=ae;de;)switch(ne=ge,ge=hn()){case 40:if(ne!=108&&mt(x,W-1)==58){go(x+=Ee(tu(ge),"&","&\f"),"&\f",Ih(A?G[A-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:x+=tu(ge);break;case 9:case 10:case 13:case 32:x+=jv(ne);break;case 92:x+=Ov(ho()-1,7);continue;case 47:switch(va()){case 42:case 47:Ul(Cv(Av(hn(),ho()),o,u,k),k),(ql(ne||1)==5||ql(va()||1)==5)&&gn(x)&&Ga(x,-1,void 0)!==" "&&(x+=" ");break;default:x+="/"}break;case 123*V:G[A++]=gn(x)*ue;case 125*V:case 59:case 0:switch(ge){case 0:case 125:de=0;case 59+X:ue==-1&&(x=Ee(x,/\f/g,"")),re>0&&(gn(x)-W||V===0&&ne===47)&&Ul(re>32?Ig(x+";",s,u,W-1,k):Ig(Ee(x," ","")+";",s,u,W-2,k),k);break;case 59:x+=";";default:if(Ul(z=Wg(x,o,u,A,X,m,G,ae,se=[],w=[],W,b),b),ge===123)if(X===0)mo(x,o,z,z,se,b,W,G,w);else{switch(le){case 99:if(mt(x,3)===110)break;case 108:if(mt(x,2)===97)break;default:X=0;case 100:case 109:case 115:}X?mo(n,z,z,s&&Ul(Wg(n,z,z,0,0,m,G,ae,m,se=[],W,w),w),m,w,W,G,s?se:w):mo(x,z,z,z,[""],w,0,G,w)}}A=X=re=0,V=ue=1,ae=x="",W=M;break;case 58:W=1+gn(x),re=ne;default:if(V<1){if(ge==123)--V;else if(ge==125&&V++==0&&zv()==125)continue}switch(x+=Cu(ge),ge*V){case 38:ue=X>0?1:(x+="\f",-1);break;case 44:G[A++]=(gn(x)-1)*ue,ue=1;break;case 64:va()===45&&(x+=tu(hn())),le=va(),X=W=gn(ae=x+=_v(ho())),ge++;break;case 45:ne===45&&gn(x)==2&&(V=0)}}return b}function Wg(n,o,u,s,m,b,M,G,k,A,X,W){for(var le=m-1,re=m===0?b:[""],ne=Fh(re),V=0,de=0,ue=0;V<s;++V)for(var ge=0,ae=Ga(n,le+1,le=Ih(de=M[V])),se=n;ge<ne;++ge)(se=Jh(de>0?re[ge]+" "+ae:Ee(ae,/&\f/g,re[ge])))&&(k[ue++]=se);return ko(n,o,u,m===0?Ao:G,k,A,X,W)}function Cv(n,o,u,s){return ko(n,o,u,Ph,Cu(wv()),Ga(n,2,-2),0,s)}function Ig(n,o,u,s,m){return ko(n,o,u,ku,Ga(n,0,s),Ga(n,s+1,-1),s,m)}function tm(n,o,u){switch(xv(n,o)){case 5103:return Be+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Be+n+n;case 4855:return Be+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Gl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+n+Gl+n+Ie+n+n;case 5936:switch(mt(n,o+11)){case 114:return Be+n+Ie+Ee(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Be+n+Ie+Ee(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Be+n+Ie+Ee(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Be+n+Ie+n+n;case 6165:return Be+n+Ie+"flex-"+n+n;case 5187:return Be+n+Ee(n,/(\w+).+(:[^]+)/,Be+"box-$1$2"+Ie+"flex-$1$2")+n;case 5443:return Be+n+Ie+"flex-item-"+Ee(n,/flex-|-self/g,"")+(Xn(n,/flex-|baseline/)?"":Ie+"grid-row-"+Ee(n,/flex-|-self/g,""))+n;case 4675:return Be+n+Ie+"flex-line-pack"+Ee(n,/align-content|flex-|-self/g,"")+n;case 5548:return Be+n+Ie+Ee(n,"shrink","negative")+n;case 5292:return Be+n+Ie+Ee(n,"basis","preferred-size")+n;case 6060:return Be+"box-"+Ee(n,"-grow","")+Be+n+Ie+Ee(n,"grow","positive")+n;case 4554:return Be+Ee(n,/([^-])(transform)/g,"$1"+Be+"$2")+n;case 6187:return Ee(Ee(Ee(n,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),n,"")+n;case 5495:case 3959:return Ee(n,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return Ee(Ee(n,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+Ie+"flex-pack:$3"),/space-between/,"justify")+Be+n+n;case 4200:if(!Xn(n,/flex-|baseline/))return Ie+"grid-column-align"+Ga(n,o)+n;break;case 2592:case 3360:return Ie+Ee(n,"template-","")+n;case 4384:case 3616:return u&&u.some(function(s,m){return o=m,Xn(s.props,/grid-\w+-end/)})?~go(n+(u=u[o].value),"span",0)?n:Ie+Ee(n,"-start","")+n+Ie+"grid-row-span:"+(~go(u,"span",0)?Xn(u,/\d+/):+Xn(u,/\d+/)-+Xn(n,/\d+/))+";":Ie+Ee(n,"-start","")+n;case 4896:case 4128:return u&&u.some(function(s){return Xn(s.props,/grid-\w+-start/)})?n:Ie+Ee(Ee(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ee(n,/(.+)-inline(.+)/,Be+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(n)-1-o>6)switch(mt(n,o+1)){case 109:if(mt(n,o+4)!==45)break;case 102:return Ee(n,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+Gl+(mt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~go(n,"stretch",0)?tm(Ee(n,"stretch","fill-available"),o,u)+n:n}break;case 5152:case 5920:return Ee(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,m,b,M,G,k,A){return Ie+m+":"+b+A+(M?Ie+m+"-span:"+(G?k:+k-+b)+A:"")+n});case 4949:if(mt(n,o+6)===121)return Ee(n,":",":"+Be)+n;break;case 6444:switch(mt(n,mt(n,14)===45?18:11)){case 120:return Ee(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(mt(n,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+Ie+"$2box$3")+n;case 100:return Ee(n,":",":"+Ie)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(n,"scroll-","scroll-snap-")+n}return n}function So(n,o){for(var u="",s=0;s<n.length;s++)u+=o(n[s],s,n,o)||"";return u}function Mv(n,o,u,s){switch(n.type){case Sv:if(n.children.length)break;case vv:case bv:case ku:return n.return=n.return||n.value;case Ph:return"";case Wh:return n.return=n.value+"{"+So(n.children,s)+"}";case Ao:if(!gn(n.value=n.props.join(",")))return""}return gn(u=So(n.children,s))?n.return=n.value+"{"+u+"}":""}function Dv(n){var o=Fh(n);return function(u,s,m,b){for(var M="",G=0;G<o;G++)M+=n[G](u,s,m,b)||"";return M}}function Hv(n){return function(o){o.root||(o=o.return)&&n(o)}}function Rv(n,o,u,s){if(n.length>-1&&!n.return)switch(n.type){case ku:n.return=tm(n.value,n.length,u);return;case Wh:return So([ya(n,{value:Ee(n.value,"@","@"+Be)})],s);case Ao:if(n.length)return $v(u=n.props,function(m){switch(Xn(m,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(ya(n,{props:[Ee(m,/:(read-\w+)/,":"+Gl+"$1")]})),Ai(ya(n,{props:[m]})),Su(n,{props:Pg(u,s)});break;case"::placeholder":Ai(ya(n,{props:[Ee(m,/:(plac\w+)/,":"+Be+"input-$1")]})),Ai(ya(n,{props:[Ee(m,/:(plac\w+)/,":"+Gl+"$1")]})),Ai(ya(n,{props:[Ee(m,/:(plac\w+)/,Ie+"input-$1")]})),Ai(ya(n,{props:[m]})),Su(n,{props:Pg(u,s)});break}return""})}}var Lv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},Li=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",nm="active",am="data-styled-version",Mo="6.3.8",Mu=`/*!sc*/
`,xo=typeof window<"u"&&typeof document<"u",wn=yt.createContext===void 0,Nv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),Uv={},Do=Object.freeze([]),Ni=Object.freeze({});function im(n,o,u){return u===void 0&&(u=Ni),n.theme!==u.theme&&n.theme||o||u.theme}var lm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gv=/(^-|-$)/g;function Jg(n){return n.replace(Bv,"-").replace(Gv,"")}var qv=/(a)(d)/gi,Fg=function(n){return String.fromCharCode(n+(n>25?39:97))};function $u(n){var o,u="";for(o=Math.abs(n);o>52;o=o/52|0)u=Fg(o%52)+u;return(Fg(o%52)+u).replace(qv,"$1-$2")}var nu,Ci=function(n,o){for(var u=o.length;u;)n=33*n^o.charCodeAt(--u);return n},rm=function(n){return Ci(5381,n)};function Du(n){return $u(rm(n)>>>0)}function Yv(n){return n.displayName||n.name||"Component"}function au(n){return typeof n=="string"&&!0}var om=typeof Symbol=="function"&&Symbol.for,sm=om?Symbol.for("react.memo"):60115,Vv=om?Symbol.for("react.forward_ref"):60112,Xv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zv=((nu={})[Vv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nu[sm]=cm,nu);function eh(n){return("type"in(o=n)&&o.type.$$typeof)===sm?cm:"$$typeof"in n?Zv[n.$$typeof]:Xv;var o}var Kv=Object.defineProperty,Pv=Object.getOwnPropertyNames,th=Object.getOwnPropertySymbols,Wv=Object.getOwnPropertyDescriptor,Iv=Object.getPrototypeOf,nh=Object.prototype;function um(n,o,u){if(typeof o!="string"){if(nh){var s=Iv(o);s&&s!==nh&&um(n,s,u)}var m=Pv(o);th&&(m=m.concat(th(o)));for(var b=eh(n),M=eh(o),G=0;G<m.length;++G){var k=m[G];if(!(k in Qv||u&&u[k]||M&&k in M||b&&k in b)){var A=Wv(o,k);try{Kv(n,k,A)}catch{}}}}return n}function qa(n){return typeof n=="function"}function Hu(n){return typeof n=="object"&&"styledComponentId"in n}function Ba(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function $o(n,o){if(n.length===0)return"";for(var u=n[0],s=1;s<n.length;s++)u+=n[s];return u}function Yl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function wu(n,o,u){if(u===void 0&&(u=!1),!u&&!Yl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=wu(n[s],o[s]);else if(Yl(o))for(var s in o)n[s]=wu(n[s],o[s]);return n}function Ru(n,o){Object.defineProperty(n,"toString",{value:o})}function Ya(n){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Jv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var u=0,s=0;s<o;s++)u+=this.groupSizes[s];return u},n.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var s=this.groupSizes,m=s.length,b=m;o>=b;)if((b<<=1)<0)throw Ya(16,"".concat(o));this.groupSizes=new Uint32Array(b),this.groupSizes.set(s),this.length=b;for(var M=m;M<b;M++)this.groupSizes[M]=0}for(var G=this.indexOfGroup(o+1),k=(M=0,u.length);M<k;M++)this.tag.insertRule(G,u[M])&&(this.groupSizes[o]++,G++)},n.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],s=this.indexOfGroup(o),m=s+u;this.groupSizes[o]=0;for(var b=s;b<m;b++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var s=this.groupSizes[o],m=this.indexOfGroup(o),b=m+s,M=m;M<b;M++)u+="".concat(this.tag.getRule(M)).concat(Mu);return u},n})(),yo=new Map,wo=new Map,vo=1,Mi=function(n){if(yo.has(n))return yo.get(n);for(;wo.has(vo);)vo++;var o=vo++;return yo.set(n,o),wo.set(o,n),o},Fv=function(n,o){vo=o+1,yo.set(n,o),wo.set(o,n)},eb="style[".concat(Li,"][").concat(am,'="').concat(Mo,'"]'),tb=new RegExp("^".concat(Li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nb=function(n,o,u){for(var s,m=u.split(","),b=0,M=m.length;b<M;b++)(s=m[b])&&n.registerName(o,s)},ab=function(n,o){for(var u,s=((u=o.textContent)!==null&&u!==void 0?u:"").split(Mu),m=[],b=0,M=s.length;b<M;b++){var G=s[b].trim();if(G){var k=G.match(tb);if(k){var A=0|parseInt(k[1],10),X=k[2];A!==0&&(Fv(X,A),nb(n,X,k[3]),n.getTag().insertRules(A,m)),m.length=0}else m.push(G)}}},ah=function(n){for(var o=document.querySelectorAll(eb),u=0,s=o.length;u<s;u++){var m=o[u];m&&m.getAttribute(Li)!==nm&&(ab(n,m),m.parentNode&&m.parentNode.removeChild(m))}};function ib(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fm=function(n){var o=document.head,u=n||o,s=document.createElement("style"),m=(function(G){var k=Array.from(G.querySelectorAll("style[".concat(Li,"]")));return k[k.length-1]})(u),b=m!==void 0?m.nextSibling:null;s.setAttribute(Li,nm),s.setAttribute(am,Mo);var M=ib();return M&&s.setAttribute("nonce",M),u.insertBefore(s,b),s},lb=(function(){function n(o){this.element=fm(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var s=document.styleSheets,m=0,b=s.length;m<b;m++){var M=s[m];if(M.ownerNode===u)return M}throw Ya(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},n})(),rb=(function(){function n(o){this.element=fm(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var s=document.createTextNode(u);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),ob=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),ih=xo,sb={isServer:!xo,useCSSOMInjection:!Nv},zo=(function(){function n(o,u,s){o===void 0&&(o=Ni),u===void 0&&(u={});var m=this;this.options=St(St({},sb),o),this.gs=u,this.names=new Map(s),this.server=!!o.isServer,!this.server&&xo&&ih&&(ih=!1,ah(this)),Ru(this,function(){return(function(b){for(var M=b.getTag(),G=M.length,k="",A=function(W){var le=(function(ue){return wo.get(ue)})(W);if(le===void 0)return"continue";var re=b.names.get(le),ne=M.getGroup(W);if(re===void 0||!re.size||ne.length===0)return"continue";var V="".concat(Li,".g").concat(W,'[id="').concat(le,'"]'),de="";re!==void 0&&re.forEach(function(ue){ue.length>0&&(de+="".concat(ue,","))}),k+="".concat(ne).concat(V,'{content:"').concat(de,'"}').concat(Mu)},X=0;X<G;X++)A(X);return k})(m)})}return n.registerId=function(o){return Mi(o)},n.prototype.rehydrate=function(){!this.server&&xo&&ah(this)},n.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new n(St(St({},this.options),o),this.gs,u&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var s=u.useCSSOMInjection,m=u.target;return u.isServer?new ob(m):s?new lb(m):new rb(m)})(this.options),new Jv(o)));var o},n.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},n.prototype.registerName=function(o,u){if(Mi(o),this.names.has(o))this.names.get(o).add(u);else{var s=new Set;s.add(u),this.names.set(o,s)}},n.prototype.insertRules=function(o,u,s){this.registerName(o,u),this.getTag().insertRules(Mi(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Mi(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),cb=/&/g,Di=47;function lh(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,u=0,s=0,m=!1,b=0;b<o;b++){var M=n.charCodeAt(b);if(s!==0||m||M!==Di||n.charCodeAt(b+1)!==42)if(m)M===42&&n.charCodeAt(b+1)===Di&&(m=!1,b++);else if(M!==34&&M!==39||b!==0&&n.charCodeAt(b-1)===92){if(s===0){if(M===123)u++;else if(M===125&&--u<0)return!0}}else s===0?s=M:s===M&&(s=0);else m=!0,b++}return u!==0||s!==0}function dm(n,o){return n.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=dm(u.children,o)),u})}function ub(n){var o,u,s,m=Ni,b=m.options,M=b===void 0?Ni:b,G=m.plugins,k=G===void 0?Do:G,A=function(le,re,ne){return ne.startsWith(u)&&ne.endsWith(u)&&ne.replaceAll(u,"").length>0?".".concat(o):le},X=k.slice();X.push(function(le){le.type===Ao&&le.value.includes("&")&&(le.props[0]=le.props[0].replace(cb,u).replace(s,A))}),M.prefix&&X.push(Rv),X.push(Mv);var W=function(le,re,ne,V){re===void 0&&(re=""),ne===void 0&&(ne=""),V===void 0&&(V="&"),o=V,u=re,s=new RegExp("\\".concat(u,"\\b"),"g");var de=(function(ae){if(!lh(ae))return ae;for(var se=ae.length,w="",z=0,x=0,D=0,O=!1,v=0;v<se;v++){var q=ae.charCodeAt(v);if(D!==0||O||q!==Di||ae.charCodeAt(v+1)!==42)if(O)q===42&&ae.charCodeAt(v+1)===Di&&(O=!1,v++);else if(q!==34&&q!==39||v!==0&&ae.charCodeAt(v-1)===92){if(D===0)if(q===123)x++;else if(q===125){if(--x<0){for(var Z=v+1;Z<se;){var R=ae.charCodeAt(Z);if(R===59||R===10)break;Z++}Z<se&&ae.charCodeAt(Z)===59&&Z++,x=0,v=Z-1,z=Z;continue}x===0&&(w+=ae.substring(z,v+1),z=v+1)}else q===59&&x===0&&(w+=ae.substring(z,v+1),z=v+1)}else D===0?D=q:D===q&&(D=0);else O=!0,v++}if(z<se){var P=ae.substring(z);lh(P)||(w+=P)}return w})((function(ae){if(ae.indexOf("//")===-1)return ae;for(var se=ae.length,w=[],z=0,x=0,D=0,O=0;x<se;){var v=ae.charCodeAt(x);if(v!==34&&v!==39||x!==0&&ae.charCodeAt(x-1)===92)if(D===0)if(v===40&&x>=3&&(32|ae.charCodeAt(x-1))==108&&(32|ae.charCodeAt(x-2))==114&&(32|ae.charCodeAt(x-3))==117)O=1,x++;else if(O>0)v===41?O--:v===40&&O++,x++;else if(v===Di&&x+1<se&&ae.charCodeAt(x+1)===Di){for(x>z&&w.push(ae.substring(z,x));x<se&&ae.charCodeAt(x)!==10;)x++;z=x}else x++;else x++;else D===0?D=v:D===v&&(D=0),x++}return z===0?ae:(z<se&&w.push(ae.substring(z)),w.join(""))})(le)),ue=kv(ne||re?"".concat(ne," ").concat(re," { ").concat(de," }"):de);M.namespace&&(ue=dm(ue,M.namespace));var ge=[];return So(ue,Dv(X.concat(Hv(function(ae){return ge.push(ae)})))),ge};return W.hash=k.length?k.reduce(function(le,re){return re.name||Ya(15),Ci(le,re.name)},5381).toString():"",W}var fb=new zo,zu=ub(),Tu={shouldForwardProp:void 0,styleSheet:fb,stylis:zu},pm=wn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Tu)}}:yt.createContext(Tu);pm.Consumer;wn||yt.createContext(void 0);function Eu(){return wn?Tu:yt.useContext(pm)}var gm=(function(){function n(o,u){var s=this;this.inject=function(m,b){b===void 0&&(b=zu);var M=s.name+b.hash;m.hasNameForId(s.id,M)||m.insertRules(s.id,M,b(s.rules,M,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Ru(this,function(){throw Ya(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=zu),this.name+o.hash},n})();function db(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Lv||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var pb=function(n){return n>="A"&&n<="Z"};function rh(n){for(var o="",u=0;u<n.length;u++){var s=n[u];if(u===1&&s==="-"&&n[0]==="-")return n;pb(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var hm=function(n){return n==null||n===!1||n===""},mm=function(n){var o=[];for(var u in n){var s=n[u];n.hasOwnProperty(u)&&!hm(s)&&(Array.isArray(s)&&s.isCss||qa(s)?o.push("".concat(rh(u),":"),s,";"):Yl(s)?o.push.apply(o,Hi(Hi(["".concat(u," {")],mm(s),!1),["}"],!1)):o.push("".concat(rh(u),": ").concat(db(u,s),";")))}return o};function ba(n,o,u,s){if(hm(n))return[];if(Hu(n))return[".".concat(n.styledComponentId)];if(qa(n)){if(!qa(b=n)||b.prototype&&b.prototype.isReactComponent||!o)return[n];var m=n(o);return ba(m,o,u,s)}var b;return n instanceof gm?u?(n.inject(u,s),[n.getName(s)]):[n]:Yl(n)?mm(n):Array.isArray(n)?Array.prototype.concat.apply(Do,n.map(function(M){return ba(M,o,u,s)})):[n.toString()]}function ym(n){for(var o=0;o<n.length;o+=1){var u=n[o];if(qa(u)&&!Hu(u))return!1}return!0}var gb=rm(Mo),hb=(function(){function n(o,u,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&ym(o),this.componentId=u,this.baseHash=Ci(gb,u),this.baseStyle=s,zo.registerId(u)}return n.prototype.generateAndInjectStyles=function(o,u,s){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,s).className:"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))m=Ba(m,this.staticRulesId);else{var b=$o(ba(this.rules,o,u,s)),M=$u(Ci(this.baseHash,b)>>>0);if(!u.hasNameForId(this.componentId,M)){var G=s(b,".".concat(M),void 0,this.componentId);u.insertRules(this.componentId,M,G)}m=Ba(m,M),this.staticRulesId=M}else{for(var k=Ci(this.baseHash,s.hash),A="",X=0;X<this.rules.length;X++){var W=this.rules[X];if(typeof W=="string")A+=W;else if(W){var le=$o(ba(W,o,u,s));k=Ci(k,le+X),A+=le}}if(A){var re=$u(k>>>0);if(!u.hasNameForId(this.componentId,re)){var ne=s(A,".".concat(re),void 0,this.componentId);u.insertRules(this.componentId,re,ne)}m=Ba(m,re)}}return{className:m,css:typeof window>"u"?u.getTag().getGroup(Mi(this.componentId)):""}},n})(),Vl=wn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:yt.createContext(void 0);Vl.Consumer;function mb(n){if(wn)return n.children;var o=yt.useContext(Vl),u=yt.useMemo(function(){return(function(s,m){if(!s)throw Ya(14);if(qa(s)){var b=s(m);return b}if(Array.isArray(s)||typeof s!="object")throw Ya(8);return m?St(St({},m),s):s})(n.theme,o)},[n.theme,o]);return n.children?yt.createElement(Vl.Provider,{value:u},n.children):null}var iu={};function yb(n,o,u){var s=Hu(n),m=n,b=!au(n),M=o.attrs,G=M===void 0?Do:M,k=o.componentId,A=k===void 0?(function(se,w){var z=typeof se!="string"?"sc":Jg(se);iu[z]=(iu[z]||0)+1;var x="".concat(z,"-").concat(Du(Mo+z+iu[z]));return w?"".concat(w,"-").concat(x):x})(o.displayName,o.parentComponentId):k,X=o.displayName,W=X===void 0?(function(se){return au(se)?"styled.".concat(se):"Styled(".concat(Yv(se),")")})(n):X,le=o.displayName&&o.componentId?"".concat(Jg(o.displayName),"-").concat(o.componentId):o.componentId||A,re=s&&m.attrs?m.attrs.concat(G).filter(Boolean):G,ne=o.shouldForwardProp;if(s&&m.shouldForwardProp){var V=m.shouldForwardProp;if(o.shouldForwardProp){var de=o.shouldForwardProp;ne=function(se,w){return V(se,w)&&de(se,w)}}else ne=V}var ue=new hb(u,le,s?m.componentStyle:void 0);function ge(se,w){return(function(z,x,D){var O=z.attrs,v=z.componentStyle,q=z.defaultProps,Z=z.foldedComponentIds,R=z.styledComponentId,P=z.target,ee=wn?void 0:yt.useContext(Vl),j=Eu(),f=z.shouldForwardProp||j.shouldForwardProp,ie=im(x,ee,q)||Ni,T=(function(me,pe,Se){for(var Oe,$e=St(St({},pe),{className:void 0,theme:Se}),Ae=0;Ae<me.length;Ae+=1){var be=qa(Oe=me[Ae])?Oe($e):Oe;for(var ze in be)ze==="className"?$e.className=Ba($e.className,be[ze]):ze==="style"?$e.style=St(St({},$e.style),be[ze]):$e[ze]=be[ze]}return"className"in pe&&typeof pe.className=="string"&&($e.className=Ba($e.className,pe.className)),$e})(O,x,ie),p=T.as||P,g={};for(var S in T)T[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&T.theme===ie||(S==="forwardedAs"?g.as=T.forwardedAs:f&&!f(S,p)||(g[S]=T[S]));var U=(function(me,pe){var Se=Eu(),Oe=me.generateAndInjectStyles(pe,Se.styleSheet,Se.stylis);return Oe})(v,T),H=U.className,I=U.css,K=Ba(Z,R);H&&(K+=" "+H),T.className&&(K+=" "+T.className),g[au(p)&&!lm.has(p)?"class":"className"]=K,D&&(g.ref=D);var te=je.createElement(p,g);return wn&&I?yt.createElement(yt.Fragment,null,yt.createElement("style",{precedence:"styled-components",href:"sc-".concat(R,"-").concat(H),children:I}),te):te})(ae,se,w)}ge.displayName=W;var ae=yt.forwardRef(ge);return ae.attrs=re,ae.componentStyle=ue,ae.displayName=W,ae.shouldForwardProp=ne,ae.foldedComponentIds=s?Ba(m.foldedComponentIds,m.styledComponentId):"",ae.styledComponentId=le,ae.target=s?m.target:n,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(se){this._foldedDefaultProps=s?(function(w){for(var z=[],x=1;x<arguments.length;x++)z[x-1]=arguments[x];for(var D=0,O=z;D<O.length;D++)wu(w,O[D],!0);return w})({},m.defaultProps,se):se}}),Ru(ae,function(){return".".concat(ae.styledComponentId)}),b&&um(ae,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function oh(n,o){for(var u=[n[0]],s=0,m=o.length;s<m;s+=1)u.push(o[s],n[s+1]);return u}var sh=function(n){return Object.assign(n,{isCss:!0})};function Ui(n){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(qa(n)||Yl(n))return sh(ba(oh(Do,Hi([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?ba(s):sh(ba(oh(s,o)))}function ju(n,o,u){if(u===void 0&&(u=Ni),!o)throw Ya(1,o);var s=function(m){for(var b=[],M=1;M<arguments.length;M++)b[M-1]=arguments[M];return n(o,u,Ui.apply(void 0,Hi([m],b,!1)))};return s.attrs=function(m){return ju(n,o,St(St({},u),{attrs:Array.prototype.concat(u.attrs,m).filter(Boolean)}))},s.withConfig=function(m){return ju(n,o,St(St({},u),m))},s}var vm=function(n){return ju(yb,n)},y=vm;lm.forEach(function(n){y[n]=vm(n)});var vb=(function(){function n(o,u){this.rules=o,this.componentId=u,this.isStatic=ym(o),zo.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,u,s,m){var b=m($o(ba(this.rules,u,s,m)),""),M=this.componentId+o;s.insertRules(M,M,b)},n.prototype.removeStyles=function(o,u){u.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,u,s,m){o>2&&zo.registerId(this.componentId+o);var b=this.componentId+o;this.isStatic?s.hasNameForId(b,b)||this.createStyles(o,u,s,m):(this.removeStyles(o,s),this.createStyles(o,u,s,m))},n})();function bb(n){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var s=Ui.apply(void 0,Hi([n],o,!1)),m="sc-global-".concat(Du(JSON.stringify(s))),b=new vb(s,m),M=new WeakMap,G=function(k){var A=Eu(),X=wn?void 0:yt.useContext(Vl),W=M.get(A.styleSheet);if(W===void 0&&(W=A.styleSheet.allocateGSInstance(m),M.set(A.styleSheet,W)),(typeof window>"u"||!A.styleSheet.server)&&(function(de,ue,ge,ae,se){if(b.isStatic)b.renderStyles(de,Uv,ge,se);else{var w=St(St({},ue),{theme:im(ue,ae,G.defaultProps)});b.renderStyles(de,w,ge,se)}})(W,k,A.styleSheet,X,A.stylis),!wn){var le=yt.useRef(!0);yt.useLayoutEffect(function(){return le.current=!1,function(){le.current=!0,queueMicrotask(function(){le.current&&(b.removeStyles(W,A.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(m,'"]')).forEach(function(de){return de.remove()}))})}},[W,A.styleSheet])}if(wn){var re=m+W,ne=typeof window>"u"?A.styleSheet.getTag().getGroup(Mi(re)):"";if(ne){var V="".concat(m,"-").concat(W);return yt.createElement("style",{key:V,"data-styled-global":m,precedence:"styled-components",href:V,children:ne})}}return null};return yt.memo(G)}function Tn(n){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var s=$o(Ui.apply(void 0,Hi([n],o,!1))),m=Du(s);return new gm(m,s)}var rn=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(rn||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xb=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,s)=>s?s.toUpperCase():u.toLowerCase()),ch=n=>{const o=xb(n);return o.charAt(0).toUpperCase()+o.slice(1)},bm=(...n)=>n.filter((o,u,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===u).join(" ").trim(),$b=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=je.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:s,className:m="",children:b,iconNode:M,...G},k)=>je.createElement("svg",{ref:k,...wb,width:o,height:o,stroke:n,strokeWidth:s?Number(u)*24/Number(o):u,className:bm("lucide",m),...!b&&!$b(G)&&{"aria-hidden":"true"},...G},[...M.map(([A,X])=>je.createElement(A,X)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(n,o)=>{const u=je.forwardRef(({className:s,...m},b)=>je.createElement(zb,{ref:b,iconNode:o,className:bm(`lucide-${Sb(ch(n))}`,`lucide-${n}`,s),...m}));return u.displayName=ch(n),u};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Eb=gt("arrow-down",Tb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],mn=gt("arrow-left",jb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Lu=gt("arrow-right",Ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_b=gt("arrow-up-right",Ab);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cb=gt("check",kb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Db=gt("dribbble",Mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Rb=gt("external-link",Hb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],Nb=gt("figma",Lb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],uh=gt("file-text",Ub);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Gb=gt("funnel",Bb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Yb=gt("gamepad-2",qb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Xb=gt("image",Vb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Zb=gt("linkedin",Qb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Pb=gt("mail",Kb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Sm=gt("menu",Wb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Jb=gt("pen-tool",Ib);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],e1=gt("star",Fb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],n1=gt("tag",t1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],i1=gt("twitter",a1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nu=gt("x",l1),r1={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design",games:"Games",landing:"Landing"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",technologies:["Web Design","Landing Page","Visual Design"]}},about:{discovery:"About Me",heading1:"About",heading2:"",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Me",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaka:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaka",eyebrow:"UI/UX Design",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},marketingVideo:{backToPortfolio:"Back to Portfolio",headerTag:"Motion Design",eyebrow:"Motion Design",title:"Marketing Videos",lead:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",featuredTitle:"Featured Videos",allVideosTitle:"All Videos"},elementalQuest:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Elemental Quest",lead:"Game map design and visual assets for an adventure puzzle game.",logoAlt:"Elemental Quest Logo",mapAlt:"Elemental Quest Game Map"},combatPlanes:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Combat Planes",lead:"Character design, plane skins, and game maps for an aerial combat mobile game.",logoAlt:"Combat Planes Logo",galleryAlt:"Combat Planes Game Art"},fattyFish:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Fatty Fish",lead:"Character design, game objects, and visual assets for a fun aquatic mobile game.",logoAlt:"Fatty Fish Logo",galleryAlt:"Fatty Fish Game Art"},landingHpVsVader:{backToPortfolio:"Back to Portfolio",navHome:"Home",navGame:"Character",navContact:"Contact Us",playNow:"Play now!",enterThe:"ENTER THE",gameWorld:"GAME",characters:"Characters",harryTitle:"Harry Potter",harryDesc:"The Boy Who Lived, master of the Elder Wand, and the only wizard to defeat Voldemort. Courageous, loyal, and always ready to stand up for his friends.",harryWeapon:"His main weapon is the legendary Elder Wand.",vaderTitle:"Darth Vader",vaderDesc:"Once a Jedi Knight, now the Dark Lord of the Sith. Wields the power of the Force and a red lightsaber. Feared across the galaxy.",vaderWeapon:"His weapon is the iconic red lightsaber.",footerTitle:"GAME",footerSubtitle:"Enter the game world",features:"Features",coreFeatures:"Core features",proExperience:"Pro experience",integrations:"Integrations",learnMore:"Learn more",blog:"Blog",caseStudies:"Case studies",customerStories:"Customer stories",bestPractices:"Best practices",support:"Support",contact:"Contact",supportLink:"Support",legal:"Legal"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн",games:"Ігри",landing:"Лендінг"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaka: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"Кінематографічний лендінг для фентезійної кросовер-гри: Гаррі Поттер проти Дарта Вейдера.",technologies:["Веб-дизайн","Лендінг","Візуальний дизайн"]}},about:{discovery:"Про мене",heading1:"Про",heading2:"",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Мене",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaka:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaka",eyebrow:"UI/UX дизайн",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},marketingVideo:{backToPortfolio:"Назад до портфоліо",headerTag:"Моушн-дизайн",eyebrow:"Моушн-дизайн",title:"Маркетингові відео",lead:"Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.",featuredTitle:"Вибрані відео",allVideosTitle:"Усі відео"},elementalQuest:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Elemental Quest",lead:"Дизайн ігрової карти та візуальні ресурси для пригодницької гри-головоломки.",logoAlt:"Логотип Elemental Quest",mapAlt:"Ігрова карта Elemental Quest"},combatPlanes:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Combat Planes",lead:"Дизайн персонажів, скіни літаків та ігрові карти для мобільної гри з повітряними боями.",logoAlt:"Логотип Combat Planes",galleryAlt:"Ігрове мистецтво Combat Planes"},fattyFish:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Fatty Fish",lead:"Дизайн персонажів, ігрові об'єкти та візуальні ресурси для веселої водної мобільної гри.",logoAlt:"Логотип Fatty Fish",galleryAlt:"Ігрове мистецтво Fatty Fish"},landingHpVsVader:{backToPortfolio:"Назад до портфоліо",navHome:"Головна",navGame:"Гра",navContact:"Контакти",playNow:"Грати зараз!",enterThe:"УВІЙДИ У",gameWorld:"ІГРОВИЙ",characters:"Персонажі",harryTitle:"Гаррі Поттер",harryDesc:"Хлопчик, що вижив, володар Бузинової палички, єдиний, хто переміг Волдеморта. Відважний, вірний, завжди готовий захистити друзів.",harryWeapon:"Його головна зброя — легендарна Бузинова паличка.",vaderTitle:"Дарт Вейдер",vaderDesc:"Колись лицар-джедай, тепер Лорд ситхів. Володіє силою та червоним світловим мечем. Його боять у всій галактиці.",vaderWeapon:"Його зброя — культовий червоний світловий меч.",footerTitle:"ГРА",footerSubtitle:"Увійди у ігровий світ",features:"Можливості",coreFeatures:"Основні функції",proExperience:"Про досвід",integrations:"Інтеграції",learnMore:"Дізнатися більше",blog:"Блог",caseStudies:"Кейси",customerStories:"Історії клієнтів",bestPractices:"Найкращі практики",support:"Підтримка",contact:"Контакти",supportLink:"Підтримка",legal:"Правова інформація"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},xm=je.createContext(void 0),o1=({children:n})=>{const[o,u]=je.useState("en"),s={lang:o,setLang:u,t:r1[o]};return d.jsx(xm.Provider,{value:s,children:n})},_t=()=>{const n=je.useContext(xm);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},lu=(n,o)=>{const s={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign",Games:"games",Landing:"landing"}[n];return s?o.work.categories[s]:n},s1=(n,o)=>{const s={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return s?o.about.skills[s]:n},c1=y.nav`
  position: fixed;
  top: ${({theme:n})=>n.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 95%;
  max-width: 1024px;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  padding: ${({theme:n,$scrolled:o})=>o?`${n.spacing[3]} ${n.spacing[8]}`:`${n.spacing[6]} ${n.spacing[8]}`};
  background: ${({$scrolled:n})=>n?"rgba(255, 255, 255, 0.7)":"transparent"};
  backdrop-filter: ${({$scrolled:n})=>n?"blur(18px)":"none"};
  box-shadow: ${({theme:n,$scrolled:o})=>o?n.shadows.lg:"none"};
  border: ${({$scrolled:n})=>n?"1px solid rgba(255, 255, 255, 0.2)":"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,u1=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$m=y.button`
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
`,f1=y.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${$m}:hover & {
    transform: rotate(12deg);
  }
`,d1=y.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,p1=y.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,g1=y.button`
  border: none;
  background: transparent;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[500]};
  cursor: pointer;
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  box-shadow: none;
  text-decoration: none;

  &:hover, &:focus {
    color: #ff2222;
    box-shadow: 0 0 8px 2px #ff2222cc, 0 0 0 4px #ff222288;
    filter: blur(0.5px);
    border-radius: 8px;
    outline: none;
  }
`,h1=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,m1=y.button`
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
`,y1=y.button`
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
    transform: translateY(-1px) scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`,v1=y.button`
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
`,b1=y.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  padding: ${({theme:n})=>n.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:n})=>n.spacing[8]};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  opacity: ${({$open:n})=>n?1:0};
  pointer-events: ${({$open:n})=>n?"auto":"none"};
  transition: all 0.5s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: none;
  }
`,S1=y.button`
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
`,x1=y.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: 1px solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,$1=y.button`
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
`,w1=y.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,z1=({onNavigate:n})=>{const{t:o}=_t(),[u,s]=je.useState(!1),[m,b]=je.useState(!1);je.useEffect(()=>{const X=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",X),()=>window.removeEventListener("scroll",X)},[]);const M=X=>{if(n){n(X),b(!1);return}const W=document.getElementById(X);W&&(W.scrollIntoView({behavior:"smooth"}),b(!1))},G=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},k=()=>{alert(o.nav.cvAlert)},A=[{label:o.nav.work,id:rn.WORK},{label:o.nav.about,id:rn.ABOUT}];return d.jsxs(d.Fragment,{children:[d.jsx(c1,{$scrolled:u,children:d.jsxs(u1,{children:[d.jsxs($m,{onClick:()=>M(rn.HERO),children:[d.jsx(f1,{children:"A."}),d.jsx(d1,{children:o.nav.brandText})]}),d.jsxs(p1,{children:[A.map(X=>d.jsx(g1,{onClick:()=>M(X.id),children:X.label},X.id)),d.jsxs(h1,{children:[d.jsxs(m1,{onClick:k,children:[d.jsx(uh,{size:16}),o.nav.cv]}),d.jsx(y1,{onClick:G,children:o.nav.hireMe})]})]}),d.jsx(v1,{onClick:()=>b(!m),children:m?d.jsx(Nu,{size:24}):d.jsx(Sm,{size:24})})]})}),d.jsxs(b1,{$open:m,children:[A.map(X=>d.jsx(S1,{onClick:()=>M(X.id),children:X.label},X.id)),d.jsxs(x1,{children:[d.jsxs($1,{onClick:k,children:[d.jsx(uh,{size:24}),o.nav.cv]}),d.jsx(w1,{onClick:G,children:o.nav.hireMe})]})]})]})},T1={light:"light",regular:"regular",medium:"medium",bold:"bold"},E1={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},j1=y.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[E1[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[T1[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Uu=({as:n="span",element:o,message:u,size:s="md",weight:m="regular",color:b="secondary",...M})=>{const{t:G}=_t(),k=o??n;return d.jsx(j1,{as:k,$size:s,$weight:m,$color:b,...M,children:u(G)})},_={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9},zIndex:{background:0,foreground:1,stickyHeader:20,nav:50,modal:100,closeButton:2,progress:100},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},O1=Tn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${_.motion.floatOffset}); }
`,A1=Tn`
  0% { opacity: 0; transform: translateY(${_.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,_1=y.section`
  position: relative;
  min-height: ${_.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,k1=y.div`
  position: relative;
  z-index: 1;
  max-width: ${_.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${A1} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,Ou=y.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${O1} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,fh=y(Ou)`
  animation-delay: 3s;
`,C1=y.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${_.effects.glassWhite50};
  backdrop-filter: blur(${_.effects.blurSoft});
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[200]};
  border-radius: ${({theme:n})=>n.radii.full};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
`,M1=y.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,D1=y.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,H1=y.h1`
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
`,R1=y.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,L1=y(Uu)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${_.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,N1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,wm=y.button`
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
    transform: translateY(${_.motion.hoverLiftSm});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,U1=y(Eb)`
  transition: transform 0.2s ease;

  ${wm}:hover & {
    transform: translateY(${_.motion.arrowDrop});
  }
`,B1=()=>{const{t:n}=_t();return d.jsx(_1,{id:rn.HERO,children:d.jsxs(k1,{children:[d.jsx(Ou,{style:{left:_.sizing.heroFloatLeftOffset,top:0},children:d.jsx(Nb,{color:"#7c3aed",size:32})}),d.jsx(fh,{style:{right:_.sizing.heroFloatRightOffset,top:_.sizing.heroFloatRightTop},children:d.jsx(Jb,{color:"#3b82f6",size:32})}),d.jsx(fh,{style:{left:_.sizing.heroFloatLeftAlt,bottom:0},children:d.jsx(Xb,{color:"#ec4899",size:32})}),d.jsx(Ou,{style:{right:0,bottom:_.sizing.heroFloatRightBottom},children:d.jsx(Yb,{color:"#10b981",size:32})}),d.jsxs(C1,{children:[d.jsx(M1,{}),d.jsx(D1,{children:n.hero.available})]}),d.jsxs(H1,{children:[n.hero.heading1," ",d.jsx("br",{}),d.jsx(R1,{children:n.hero.heading2})]}),d.jsx(L1,{element:"p",message:o=>o.hero.lead}),d.jsx(N1,{children:d.jsxs(wm,{onClick:()=>{var o;return(o=document.getElementById(rn.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,d.jsx(U1,{size:18})]})})]})})},ce="/assets",G1=`${ce}/images/brand/app-icons-splash-screens/full-composition.png`,q1=`${ce}/images/brand/Namelaka icons and illustration/Full_Composition_Namelaka.png`,Y1=`${ce}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,V1=`${ce}/images/brand/Full_Composition_Marketing_video.png`,X1=`${ce}/images/brand/Elemental Quest game/Full_Composition_Elemental Quest game map.png`,Q1=`${ce}/images/brand/Combat Planes/Full_Composition_logo_Combat Planes.png`,Z1=`${ce}/images/brand/Fatty Fish/Character.png`,K1=`${ce}/images/brand/Lending Harry Potter vs Darth_Vader/Harry_Potter_part_1.png`,P1=[`${ce}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${ce}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${ce}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${ce}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${ce}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${ce}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 1.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 2.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 3.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 4.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 5.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 6.jpg`,`${ce}/images/brand/App Store Screenshots/Selara 7.jpg`,`${ce}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${ce}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${ce}/images/brand/App Store Screenshots/Star Cleaning 9.png`],To="Anna Serhiienko",W1="Graphic Designer",I1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",J1=["Brand design","UI/UX design","Marketing and advertising","Games","Landing"],zm=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],Eo=[{id:20,title:"Namelaka Icons & Illustration",category:"UI/UX design",mediaUrl:q1,mediaType:"image",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",link:"#namelaka",technologies:["Illustration","Icon Design","UI Assets"]},{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:G1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:Y1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${ce}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:P1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]},{id:22,title:"Marketing Videos",category:"Marketing and advertising",mediaUrl:V1,mediaType:"image",description:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",link:"#marketing-video",technologies:["Motion Design","After Effects","Marketing"]},{id:23,title:"Elemental Quest",category:"Games",mediaUrl:X1,mediaType:"image",description:"Game map design and visual assets for an adventure puzzle game featuring magical elements.",link:"#elemental-quest",technologies:["Game Art","Illustration","Visual Design"]},{id:24,title:"Combat Planes",category:"Games",mediaUrl:Q1,mediaType:"image",description:"Character design, plane skins, and game maps for an aerial combat mobile game.",link:"#combat-planes",technologies:["Game Art","Character Design","Visual Design"]},{id:25,title:"Fatty Fish",category:"Games",mediaUrl:Z1,mediaType:"image",description:"Character design, game objects, and visual assets for a fun aquatic mobile game.",link:"#fatty-fish",technologies:["Game Art","Character Design","Visual Design"]},{id:26,title:"Harry Potter vs Darth Vader",category:"Landing",mediaUrl:K1,mediaType:"image",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",link:"#landing-hp-vs-vader",technologies:["Web Design","Landing Page","Visual Design"]}],F1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${To}${W1}${I1}${zm.join(", ")}${Eo.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const Tm=Tn`
  0% { opacity: 0; transform: translateY(${_.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,eS=Tn`
  from { opacity: 0; }
  to { opacity: 1; }
`,tS=y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${_.effects.sectionWash};
`,nS=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,aS=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,iS=y.div`
  max-width: ${_.layout.workHeadingMaxWidth};
`,lS=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,rS=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,oS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,sS=y.button`
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${_.sizing.hairline} solid ${({theme:n,$active:o})=>o?"transparent":n.colors.slate[100]};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.white};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.md:"none"};
  transform: ${({$active:n})=>n?"scale(1.05)":"scale(1)"};

  &:hover {
    border-color: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.brand.purple};
  }
`,cS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Ql=y.div`
  cursor: pointer;
  animation: ${Tm} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,uS=y.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[200]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Ql}:hover & {
    transform: translateY(${_.motion.hoverLiftLg});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,fS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ql}:hover & {
    transform: scale(1);
  }
`,dS=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ql}:hover & {
    transform: scale(1);
  }
`,pS=y.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:n})=>n.spacing[10]};
  background: ${_.effects.cardOverlayGradient};
  opacity: 1;
  transition: opacity 0.5s ease;
`,gS=y.span`
  color: ${_.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,hS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,mS=y.div`
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

  ${Ql}:hover & {
    transform: scale(1);
  }
`,yS=y.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${_.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,vS=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,bS=y.div`
  position: fixed;
  inset: 0;
  z-index: ${_.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${eS} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,SS=y.div`
  position: absolute;
  inset: 0;
  background: ${_.effects.overlayDark95};
  backdrop-filter: blur(${_.effects.blurStrong});
`,xS=y.div`
  position: relative;
  width: 100%;
  max-width: ${_.layout.workModalMaxWidth};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${_.layout.workModalMaxHeight};
  animation: ${Tm} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,$S=y.button`
  position: absolute;
  top: ${({theme:n})=>n.spacing[6]};
  right: ${({theme:n})=>n.spacing[6]};
  z-index: ${_.zIndex.closeButton};
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  background: ${_.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${_.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${_.effects.glassWhite20};
  }
`,wS=y.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${_.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,zS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,TS=y.video`
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
    height: ${_.sizing.scrollbarWidth};
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
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`;y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`;const ES=y.div`
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
`,jS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,OS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,AS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,_S=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,kS=y.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,CS=y.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,MS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,DS=y.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,HS=y.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,RS=y.a`
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
    transform: translateY(${_.motion.hoverLiftSm});
  }
`,LS=()=>{const{t:n}=_t(),[o,u]=je.useState("All"),[s,m]=je.useState(null),b=k=>k.includes(" ")?encodeURI(k):k;je.useEffect(()=>{if(!s)return;const k=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=k}},[s]);const M=["All",...J1],G=je.useMemo(()=>o==="All"?Eo:Eo.filter(k=>k.category===o),[o]);return d.jsxs(tS,{id:rn.WORK,children:[d.jsxs(nS,{children:[d.jsxs(aS,{children:[d.jsxs(iS,{children:[d.jsx(lS,{children:n.work.title}),d.jsx(rS,{children:n.work.subtitle})]}),d.jsx(oS,{children:M.map(k=>d.jsx(sS,{$active:o===k,onClick:()=>u(k),children:k==="All"?n.work.all:lu(k,n)},k))})]}),d.jsx(cS,{children:G.map((k,A)=>{const X=n.projects[k.id],W=(X==null?void 0:X.title)??k.title;return d.jsx(Ql,{style:{animationDelay:`${A*.1}s`},onClick:()=>m(k),children:d.jsxs(uS,{children:[k.mediaType==="video"?d.jsx(dS,{src:b(k.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):d.jsx(fS,{src:b(k.mediaUrl),alt:W}),d.jsxs(pS,{children:[d.jsx(gS,{children:lu(k.category,n)}),d.jsx(hS,{children:W}),d.jsx(mS,{children:d.jsx(_b,{size:24})})]})]})},k.id)})}),G.length===0&&d.jsxs(yS,{children:[d.jsx(Gb,{color:"#e2e8f0",size:48}),d.jsx(vS,{children:n.work.emptyState})]})]}),s&&(()=>{const k=n.projects[s.id],A=(k==null?void 0:k.title)??s.title,X=(k==null?void 0:k.description)??s.description,W=(k==null?void 0:k.technologies)??s.technologies;return d.jsxs(bS,{children:[d.jsx(SS,{onClick:()=>m(null)}),d.jsxs(xS,{children:[d.jsx($S,{onClick:()=>m(null),"aria-label":n.work.close,children:d.jsx(Nu,{size:24})}),d.jsx(wS,{children:s.mediaType==="video"?d.jsx(TS,{src:b(s.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):d.jsx(zS,{src:b(s.mediaUrl),alt:A})}),d.jsxs(ES,{children:[d.jsxs(jS,{children:[d.jsx(n1,{size:14}),d.jsx(OS,{children:lu(s.category,n)})]}),d.jsx(AS,{children:A}),d.jsx(_S,{children:X}),d.jsxs(kS,{children:[d.jsx(CS,{children:n.work.technologies}),d.jsx(MS,{children:W.map((le,re)=>d.jsx(DS,{children:le},re))})]}),d.jsx(HS,{children:d.jsxs(RS,{href:s.link,children:[n.work.viewProject,d.jsx(Rb,{size:18})]})})]})]})]})})()]})},NS=Tn`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${_.motion.floatOffset}); }
`,US=y.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,BS=y.div`
  position: absolute;
  top: ${({theme:n})=>n.spacing[10]};
  right: ${_.layout.aboutWatermarkOffsetX};
  font-size: ${_.layout.aboutWatermarkFontSize};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`,GS=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,qS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,YS=y.div`
  position: relative;
`,VS=y.div`
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
`,XS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,QS=y.div`
  position: absolute;
  inset: 0;
  background: ${_.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,ZS=y.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${NS} 6s ease-in-out infinite;
  max-width: ${_.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,KS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,PS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,WS=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,IS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,JS=y(Uu)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,FS=y.div`
  display: flex;
  flex-direction: column;
`;y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`;const ex=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,tx=y.span`
  font-style: italic;
`,nx=y(Uu)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,ax=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,ix=y.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,lx=y.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${_.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,rx=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ox=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,Em=y.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,jm=y(Cb)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,Om=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,sx=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${Em} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${jm} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${Om} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,cx=()=>{const{t:n}=_t();return d.jsxs(US,{id:rn.ABOUT,children:[d.jsx(BS,{children:n.about.watermark}),d.jsx(GS,{children:d.jsxs(qS,{children:[d.jsxs(YS,{children:[d.jsxs(VS,{children:[d.jsx(XS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),d.jsx(QS,{"data-overlay":!0})]}),d.jsxs(ZS,{children:[d.jsxs(KS,{children:[d.jsx(e1,{color:"#6366f1",fill:"#6366f1",size:16}),d.jsx(PS,{children:n.about.experience})]}),d.jsxs(WS,{children:["5+ ",d.jsx(IS,{children:n.about.years})]}),d.jsx(JS,{element:"p",message:u=>u.about.experienceText})]})]}),d.jsxs(FS,{children:[d.jsxs(ex,{children:[n.about.heading1," ",d.jsx(tx,{children:n.about.emphasis})," ",d.jsx("br",{})," ",n.about.heading2]}),d.jsx(nx,{element:"p",message:u=>u.about.bio}),d.jsx(ax,{children:d.jsxs("div",{children:[d.jsxs(ix,{children:[d.jsx(lx,{}),n.about.proficiencies]}),d.jsx(rx,{children:zm.map((u,s)=>d.jsx(ox,{children:d.jsxs(sx,{children:[d.jsx(Em,{children:d.jsx(jm,{size:12})}),d.jsx(Om,{children:s1(u,n)})]})},s))})]})})]})]})})]})},ux=y.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,fx=y.div`
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
`,dx=y.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,px=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,gx=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,hx=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,mx=y.a`
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
    transform: translateY(${_.motion.hoverLiftMd});
  }
`,yx=()=>{const{t:n}=_t(),o=u=>{switch(u){case"Twitter":return d.jsx(i1,{size:20});case"Linkedin":return d.jsx(Zb,{size:20});case"Dribbble":return d.jsx(Db,{size:20});case"Mail":return d.jsx(Pb,{size:20});default:return null}};return d.jsx(ux,{children:d.jsxs(fx,{children:[d.jsxs(dx,{children:[d.jsx(px,{children:To}),d.jsxs(gx,{children:["© ",new Date().getFullYear()," ",To,". ",n.footer.rights]})]}),d.jsx(hx,{children:F1.map(u=>d.jsx(mx,{href:u.url,target:"_blank",rel:"noopener noreferrer","aria-label":u.name,children:o(u.icon)},u.name))})]})})};var Re=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELAKA="namelaka",n.MINDZY="mindzy",n.MARKETING_VIDEO="marketing-video",n.ELEMENTAL_QUEST="elemental-quest",n.COMBAT_PLANES="combat-planes",n.FATTY_FISH="fatty-fish",n.LANDING_HP_VS_VADER="landing-hp-vs-vader",n))(Re||{}),ru={},ou={},Rl={},su={},dh;function vx(){return dh||(dh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(su)),su}var cu,ph;function bx(){if(ph)return cu;ph=1;var n="Expected a function",o=NaN,u="[object Symbol]",s=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,M=/^0o[0-7]+$/i,G=parseInt,k=typeof fo=="object"&&fo&&fo.Object===Object&&fo,A=typeof self=="object"&&self&&self.Object===Object&&self,X=k||A||Function("return this")(),W=Object.prototype,le=W.toString,re=Math.max,ne=Math.min,V=function(){return X.Date.now()};function de(w,z,x){var D,O,v,q,Z,R,P=0,ee=!1,j=!1,f=!0;if(typeof w!="function")throw new TypeError(n);z=se(z)||0,ue(x)&&(ee=!!x.leading,j="maxWait"in x,v=j?re(se(x.maxWait)||0,z):v,f="trailing"in x?!!x.trailing:f);function ie(te){var me=D,pe=O;return D=O=void 0,P=te,q=w.apply(pe,me),q}function T(te){return P=te,Z=setTimeout(S,z),ee?ie(te):q}function p(te){var me=te-R,pe=te-P,Se=z-me;return j?ne(Se,v-pe):Se}function g(te){var me=te-R,pe=te-P;return R===void 0||me>=z||me<0||j&&pe>=v}function S(){var te=V();if(g(te))return U(te);Z=setTimeout(S,p(te))}function U(te){return Z=void 0,f&&D?ie(te):(D=O=void 0,q)}function H(){Z!==void 0&&clearTimeout(Z),P=0,D=R=O=Z=void 0}function I(){return Z===void 0?q:U(V())}function K(){var te=V(),me=g(te);if(D=arguments,O=this,R=te,me){if(Z===void 0)return T(R);if(j)return Z=setTimeout(S,z),ie(R)}return Z===void 0&&(Z=setTimeout(S,z)),q}return K.cancel=H,K.flush=I,K}function ue(w){var z=typeof w;return!!w&&(z=="object"||z=="function")}function ge(w){return!!w&&typeof w=="object"}function ae(w){return typeof w=="symbol"||ge(w)&&le.call(w)==u}function se(w){if(typeof w=="number")return w;if(ae(w))return o;if(ue(w)){var z=typeof w.valueOf=="function"?w.valueOf():w;w=ue(z)?z+"":z}if(typeof w!="string")return w===0?w:+w;w=w.replace(s,"");var x=b.test(w);return x||M.test(w)?G(w.slice(2),x?2:8):m.test(w)?o:+w}return cu=de,cu}var uu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gh;function Ho(){return gh||(gh=1,(function(n){(function(){var o={}.hasOwnProperty;function u(){for(var b="",M=0;M<arguments.length;M++){var G=arguments[M];G&&(b=m(b,s(G)))}return b}function s(b){if(typeof b=="string"||typeof b=="number")return b;if(typeof b!="object")return"";if(Array.isArray(b))return u.apply(null,b);if(b.toString!==Object.prototype.toString&&!b.toString.toString().includes("[native code]"))return b.toString();var M="";for(var G in b)o.call(b,G)&&b[G]&&(M=m(M,G));return M}function m(b,M){return M?b?b+" "+M:b+M:b}n.exports?(u.default=u,n.exports=u):window.classNames=u})()})(uu)),uu.exports}var oe={},fu={},hh;function Am(){return hh||(hh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(zn());function u(m){return m&&m.__esModule?m:{default:m}}var s={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(b){return o.default.createElement("ul",{style:{display:"block"}},b)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(b){return o.default.createElement("button",null,b+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=s})(fu)),fu}var mh;function Zl(){if(mh)return oe;mh=1,Object.defineProperty(oe,"__esModule",{value:!0}),oe.checkSpecKeys=oe.checkNavigable=oe.changeSlide=oe.canUseDOM=oe.canGoNext=void 0,oe.clamp=A,oe.extractObject=void 0,oe.filterSettings=ie,oe.validSettings=oe.swipeStart=oe.swipeMove=oe.swipeEnd=oe.slidesOnRight=oe.slidesOnLeft=oe.slideHandler=oe.siblingDirection=oe.safePreventDefault=oe.lazyStartIndex=oe.lazySlidesOnRight=oe.lazySlidesOnLeft=oe.lazyEndIndex=oe.keyHandler=oe.initializedState=oe.getWidth=oe.getTrackLeft=oe.getTrackCSS=oe.getTrackAnimateCSS=oe.getTotalSlides=oe.getSwipeDirection=oe.getSlideCount=oe.getRequiredLazySlides=oe.getPreClones=oe.getPostClones=oe.getOnDemandLazySlides=oe.getNavigableIndexes=oe.getHeight=void 0;var n=u(zn()),o=u(Am());function u(T){return T&&T.__esModule?T:{default:T}}function s(T){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s(T)}function m(T,p){var g=Object.keys(T);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(T);p&&(S=S.filter(function(U){return Object.getOwnPropertyDescriptor(T,U).enumerable})),g.push.apply(g,S)}return g}function b(T){for(var p=1;p<arguments.length;p++){var g=arguments[p]!=null?arguments[p]:{};p%2?m(Object(g),!0).forEach(function(S){M(T,S,g[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(g)):m(Object(g)).forEach(function(S){Object.defineProperty(T,S,Object.getOwnPropertyDescriptor(g,S))})}return T}function M(T,p,g){return(p=G(p))in T?Object.defineProperty(T,p,{value:g,enumerable:!0,configurable:!0,writable:!0}):T[p]=g,T}function G(T){var p=k(T,"string");return s(p)=="symbol"?p:p+""}function k(T,p){if(s(T)!="object"||!T)return T;var g=T[Symbol.toPrimitive];if(g!==void 0){var S=g.call(T,p);if(s(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(T)}function A(T,p,g){return Math.max(p,Math.min(T,g))}var X=oe.safePreventDefault=function(p){var g=["onTouchStart","onTouchMove","onWheel"];g.includes(p._reactName)||p.preventDefault()},W=oe.getOnDemandLazySlides=function(p){for(var g=[],S=le(p),U=re(p),H=S;H<U;H++)p.lazyLoadedList.indexOf(H)<0&&g.push(H);return g};oe.getRequiredLazySlides=function(p){for(var g=[],S=le(p),U=re(p),H=S;H<U;H++)g.push(H);return g};var le=oe.lazyStartIndex=function(p){return p.currentSlide-ne(p)},re=oe.lazyEndIndex=function(p){return p.currentSlide+V(p)},ne=oe.lazySlidesOnLeft=function(p){return p.centerMode?Math.floor(p.slidesToShow/2)+(parseInt(p.centerPadding)>0?1:0):0},V=oe.lazySlidesOnRight=function(p){return p.centerMode?Math.floor((p.slidesToShow-1)/2)+1+(parseInt(p.centerPadding)>0?1:0):p.slidesToShow},de=oe.getWidth=function(p){return p&&p.offsetWidth||0},ue=oe.getHeight=function(p){return p&&p.offsetHeight||0},ge=oe.getSwipeDirection=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S,U,H,I;return S=p.startX-p.curX,U=p.startY-p.curY,H=Math.atan2(U,S),I=Math.round(H*180/Math.PI),I<0&&(I=360-Math.abs(I)),I<=45&&I>=0||I<=360&&I>=315?"left":I>=135&&I<=225?"right":g===!0?I>=35&&I<=135?"up":"down":"vertical"},ae=oe.canGoNext=function(p){var g=!0;return p.infinite||(p.centerMode&&p.currentSlide>=p.slideCount-1||p.slideCount<=p.slidesToShow||p.currentSlide>=p.slideCount-p.slidesToShow)&&(g=!1),g};oe.extractObject=function(p,g){var S={};return g.forEach(function(U){return S[U]=p[U]}),S},oe.initializedState=function(p){var g=n.default.Children.count(p.children),S=p.listRef,U=Math.ceil(de(S)),H=p.trackRef&&p.trackRef.node,I=Math.ceil(de(H)),K;if(p.vertical)K=U;else{var te=p.centerMode&&parseInt(p.centerPadding)*2;typeof p.centerPadding=="string"&&p.centerPadding.slice(-1)==="%"&&(te*=U/100),K=Math.ceil((U-te)/p.slidesToShow)}var me=S&&ue(S.querySelector('[data-index="0"]')),pe=me*p.slidesToShow,Se=p.currentSlide===void 0?p.initialSlide:p.currentSlide;p.rtl&&p.currentSlide===void 0&&(Se=g-1-p.initialSlide);var Oe=p.lazyLoadedList||[],$e=W(b(b({},p),{},{currentSlide:Se,lazyLoadedList:Oe}));Oe=Oe.concat($e);var Ae={slideCount:g,slideWidth:K,listWidth:U,trackWidth:I,currentSlide:Se,slideHeight:me,listHeight:pe,lazyLoadedList:Oe};return p.autoplaying===null&&p.autoplay&&(Ae.autoplaying="playing"),Ae},oe.slideHandler=function(p){var g=p.waitForAnimate,S=p.animating,U=p.fade,H=p.infinite,I=p.index,K=p.slideCount,te=p.lazyLoad,me=p.currentSlide,pe=p.centerMode,Se=p.slidesToScroll,Oe=p.slidesToShow,$e=p.useCSS,Ae=p.lazyLoadedList;if(g&&S)return{};var be=I,ze,Fe,_e,et={},nt={},lt=H?I:A(I,0,K-1);if(U){if(!H&&(I<0||I>=K))return{};I<0?be=I+K:I>=K&&(be=I-K),te&&Ae.indexOf(be)<0&&(Ae=Ae.concat(be)),et={animating:!0,currentSlide:be,lazyLoadedList:Ae,targetSlide:be},nt={animating:!1,targetSlide:be}}else ze=be,be<0?(ze=be+K,H?K%Se!==0&&(ze=K-K%Se):ze=0):!ae(p)&&be>me?be=ze=me:pe&&be>=K?(be=H?K:K-1,ze=H?0:K-1):be>=K&&(ze=be-K,H?K%Se!==0&&(ze=0):ze=K-Oe),!H&&be+Oe>=K&&(ze=K-Oe),Fe=v(b(b({},p),{},{slideIndex:be})),_e=v(b(b({},p),{},{slideIndex:ze})),H||(Fe===_e&&(be=ze),Fe=_e),te&&(Ae=Ae.concat(W(b(b({},p),{},{currentSlide:be})))),$e?(et={animating:!0,currentSlide:ze,trackStyle:O(b(b({},p),{},{left:Fe})),lazyLoadedList:Ae,targetSlide:lt},nt={animating:!1,currentSlide:ze,trackStyle:D(b(b({},p),{},{left:_e})),swipeLeft:null,targetSlide:lt}):et={currentSlide:ze,trackStyle:D(b(b({},p),{},{left:_e})),lazyLoadedList:Ae,targetSlide:lt};return{state:et,nextState:nt}},oe.changeSlide=function(p,g){var S,U,H,I,K,te=p.slidesToScroll,me=p.slidesToShow,pe=p.slideCount,Se=p.currentSlide,Oe=p.targetSlide,$e=p.lazyLoad,Ae=p.infinite;if(I=pe%te!==0,S=I?0:(pe-Se)%te,g.message==="previous")H=S===0?te:me-S,K=Se-H,$e&&!Ae&&(U=Se-H,K=U===-1?pe-1:U),Ae||(K=Oe-te);else if(g.message==="next")H=S===0?te:S,K=Se+H,$e&&!Ae&&(K=(Se+te)%pe+S),Ae||(K=Oe+te);else if(g.message==="dots")K=g.index*g.slidesToScroll;else if(g.message==="children"){if(K=g.index,Ae){var be=P(b(b({},p),{},{targetSlide:K}));K>g.currentSlide&&be==="left"?K=K-pe:K<g.currentSlide&&be==="right"&&(K=K+pe)}}else g.message==="index"&&(K=Number(g.index));return K},oe.keyHandler=function(p,g,S){return p.target.tagName.match("TEXTAREA|INPUT|SELECT")||!g?"":p.keyCode===37?S?"next":"previous":p.keyCode===39?S?"previous":"next":""},oe.swipeStart=function(p,g,S){return p.target.tagName==="IMG"&&X(p),!g||!S&&p.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:p.touches?p.touches[0].pageX:p.clientX,startY:p.touches?p.touches[0].pageY:p.clientY,curX:p.touches?p.touches[0].pageX:p.clientX,curY:p.touches?p.touches[0].pageY:p.clientY}}},oe.swipeMove=function(p,g){var S=g.scrolling,U=g.animating,H=g.vertical,I=g.swipeToSlide,K=g.verticalSwiping,te=g.rtl,me=g.currentSlide,pe=g.edgeFriction,Se=g.edgeDragged,Oe=g.onEdge,$e=g.swiped,Ae=g.swiping,be=g.slideCount,ze=g.slidesToScroll,Fe=g.infinite,_e=g.touchObject,et=g.swipeEvent,nt=g.listHeight,lt=g.listWidth;if(!S){if(U)return X(p);H&&I&&K&&X(p);var xt,En={},Va=v(g);_e.curX=p.touches?p.touches[0].pageX:p.clientX,_e.curY=p.touches?p.touches[0].pageY:p.clientY,_e.swipeLength=Math.round(Math.sqrt(Math.pow(_e.curX-_e.startX,2)));var Ot=Math.round(Math.sqrt(Math.pow(_e.curY-_e.startY,2)));if(!K&&!Ae&&Ot>10)return{scrolling:!0};K&&(_e.swipeLength=Ot);var Sa=(te?-1:1)*(_e.curX>_e.startX?1:-1);K&&(Sa=_e.curY>_e.startY?1:-1);var Kl=Math.ceil(be/ze),sn=ge(g.touchObject,K),yn=_e.swipeLength;return Fe||(me===0&&(sn==="right"||sn==="down")||me+1>=Kl&&(sn==="left"||sn==="up")||!ae(g)&&(sn==="left"||sn==="up"))&&(yn=_e.swipeLength*pe,Se===!1&&Oe&&(Oe(sn),En.edgeDragged=!0)),!$e&&et&&(et(sn),En.swiped=!0),H?xt=Va+yn*(nt/lt)*Sa:te?xt=Va-yn*Sa:xt=Va+yn*Sa,K&&(xt=Va+yn*Sa),En=b(b({},En),{},{touchObject:_e,swipeLeft:xt,trackStyle:D(b(b({},g),{},{left:xt}))}),Math.abs(_e.curX-_e.startX)<Math.abs(_e.curY-_e.startY)*.8||_e.swipeLength>10&&(En.swiping=!0,X(p)),En}},oe.swipeEnd=function(p,g){var S=g.dragging,U=g.swipe,H=g.touchObject,I=g.listWidth,K=g.touchThreshold,te=g.verticalSwiping,me=g.listHeight,pe=g.swipeToSlide,Se=g.scrolling,Oe=g.onSwipe,$e=g.targetSlide,Ae=g.currentSlide,be=g.infinite;if(!S)return U&&X(p),{};var ze=te?me/K:I/K,Fe=ge(H,te),_e={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!H.swipeLength)return _e;if(H.swipeLength>ze){X(p),Oe&&Oe(Fe);var et,nt,lt=be?Ae:$e;switch(Fe){case"left":case"up":nt=lt+z(g),et=pe?w(g,nt):nt,_e.currentDirection=0;break;case"right":case"down":nt=lt-z(g),et=pe?w(g,nt):nt,_e.currentDirection=1;break;default:et=lt}_e.triggerSlideHandler=et}else{var xt=v(g);_e.trackStyle=O(b(b({},g),{},{left:xt}))}return _e};var se=oe.getNavigableIndexes=function(p){for(var g=p.infinite?p.slideCount*2:p.slideCount,S=p.infinite?p.slidesToShow*-1:0,U=p.infinite?p.slidesToShow*-1:0,H=[];S<g;)H.push(S),S=U+p.slidesToScroll,U+=Math.min(p.slidesToScroll,p.slidesToShow);return H},w=oe.checkNavigable=function(p,g){var S=se(p),U=0;if(g>S[S.length-1])g=S[S.length-1];else for(var H in S){if(g<S[H]){g=U;break}U=S[H]}return g},z=oe.getSlideCount=function(p){var g=p.centerMode?p.slideWidth*Math.floor(p.slidesToShow/2):0;if(p.swipeToSlide){var S,U=p.listRef,H=U.querySelectorAll&&U.querySelectorAll(".slick-slide")||[];if(Array.from(H).every(function(te){if(p.vertical){if(te.offsetTop+ue(te)/2>p.swipeLeft*-1)return S=te,!1}else if(te.offsetLeft-g+de(te)/2>p.swipeLeft*-1)return S=te,!1;return!0}),!S)return 0;var I=p.rtl===!0?p.slideCount-p.currentSlide:p.currentSlide,K=Math.abs(S.dataset.index-I)||1;return K}else return p.slidesToScroll},x=oe.checkSpecKeys=function(p,g){return g.reduce(function(S,U){return S&&p.hasOwnProperty(U)},!0)?null:console.error("Keys Missing:",p)},D=oe.getTrackCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var g,S;if(!p.vertical)g=R(p)*p.slideWidth;else{var U=p.unslick?p.slideCount:p.slideCount+2*p.slidesToShow;S=U*p.slideHeight}var H={opacity:1,transition:"",WebkitTransition:""};if(p.useTransform){var I=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",K=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",te=p.vertical?"translateY("+p.left+"px)":"translateX("+p.left+"px)";H=b(b({},H),{},{WebkitTransform:I,transform:K,msTransform:te})}else p.vertical?H.top=p.left:H.left=p.left;return p.fade&&(H={opacity:1}),g&&(H.width=g),S&&(H.height=S),window&&!window.addEventListener&&window.attachEvent&&(p.vertical?H.marginTop=p.left+"px":H.marginLeft=p.left+"px"),H},O=oe.getTrackAnimateCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var g=D(p);return p.useTransform?(g.WebkitTransition="-webkit-transform "+p.speed+"ms "+p.cssEase,g.transition="transform "+p.speed+"ms "+p.cssEase):p.vertical?g.transition="top "+p.speed+"ms "+p.cssEase:g.transition="left "+p.speed+"ms "+p.cssEase,g},v=oe.getTrackLeft=function(p){if(p.unslick)return 0;x(p,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var g=p.slideIndex,S=p.trackRef,U=p.infinite,H=p.centerMode,I=p.slideCount,K=p.slidesToShow,te=p.slidesToScroll,me=p.slideWidth,pe=p.listWidth,Se=p.variableWidth,Oe=p.slideHeight,$e=p.fade,Ae=p.vertical,be=0,ze,Fe,_e=0;if($e||p.slideCount===1)return 0;var et=0;if(U?(et=-q(p),I%te!==0&&g+te>I&&(et=-(g>I?K-(g-I):I%te)),H&&(et+=parseInt(K/2))):(I%te!==0&&g+te>I&&(et=K-I%te),H&&(et=parseInt(K/2))),be=et*me,_e=et*Oe,Ae?ze=g*Oe*-1+_e:ze=g*me*-1+be,Se===!0){var nt,lt=S&&S.node;if(nt=g+q(p),Fe=lt&&lt.childNodes[nt],ze=Fe?Fe.offsetLeft*-1:0,H===!0){nt=U?g+q(p):g,Fe=lt&&lt.children[nt],ze=0;for(var xt=0;xt<nt;xt++)ze-=lt&&lt.children[xt]&&lt.children[xt].offsetWidth;ze-=parseInt(p.centerPadding),ze+=Fe&&(pe-Fe.offsetWidth)/2}}return ze},q=oe.getPreClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},Z=oe.getPostClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},R=oe.getTotalSlides=function(p){return p.slideCount===1?1:q(p)+p.slideCount+Z(p)},P=oe.siblingDirection=function(p){return p.targetSlide>p.currentSlide?p.targetSlide>p.currentSlide+ee(p)?"left":"right":p.targetSlide<p.currentSlide-j(p)?"right":"left"},ee=oe.slidesOnRight=function(p){var g=p.slidesToShow,S=p.centerMode,U=p.rtl,H=p.centerPadding;if(S){var I=(g-1)/2+1;return parseInt(H)>0&&(I+=1),U&&g%2===0&&(I+=1),I}return U?0:g-1},j=oe.slidesOnLeft=function(p){var g=p.slidesToShow,S=p.centerMode,U=p.rtl,H=p.centerPadding;if(S){var I=(g-1)/2+1;return parseInt(H)>0&&(I+=1),!U&&g%2===0&&(I+=1),I}return U?g-1:0};oe.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var f=oe.validSettings=Object.keys(o.default);function ie(T){return f.reduce(function(p,g){return T.hasOwnProperty(g)&&(p[g]=T[g]),p},{})}return oe}var Ll={},yh;function Sx(){if(yh)return Ll;yh=1,Object.defineProperty(Ll,"__esModule",{value:!0}),Ll.Track=void 0;var n=s(zn()),o=s(Ho()),u=Zl();function s(O){return O&&O.__esModule?O:{default:O}}function m(O){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},m(O)}function b(){return b=Object.assign?Object.assign.bind():function(O){for(var v=1;v<arguments.length;v++){var q=arguments[v];for(var Z in q)({}).hasOwnProperty.call(q,Z)&&(O[Z]=q[Z])}return O},b.apply(null,arguments)}function M(O,v){if(!(O instanceof v))throw new TypeError("Cannot call a class as a function")}function G(O,v){for(var q=0;q<v.length;q++){var Z=v[q];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(O,ae(Z.key),Z)}}function k(O,v,q){return v&&G(O.prototype,v),Object.defineProperty(O,"prototype",{writable:!1}),O}function A(O,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(v&&v.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),v&&X(O,v)}function X(O,v){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(q,Z){return q.__proto__=Z,q},X(O,v)}function W(O){var v=ne();return function(){var q,Z=V(O);if(v){var R=V(this).constructor;q=Reflect.construct(Z,arguments,R)}else q=Z.apply(this,arguments);return le(this,q)}}function le(O,v){if(v&&(m(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return re(O)}function re(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function ne(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!O})()}function V(O){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},V(O)}function de(O,v){var q=Object.keys(O);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(O);v&&(Z=Z.filter(function(R){return Object.getOwnPropertyDescriptor(O,R).enumerable})),q.push.apply(q,Z)}return q}function ue(O){for(var v=1;v<arguments.length;v++){var q=arguments[v]!=null?arguments[v]:{};v%2?de(Object(q),!0).forEach(function(Z){ge(O,Z,q[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(q)):de(Object(q)).forEach(function(Z){Object.defineProperty(O,Z,Object.getOwnPropertyDescriptor(q,Z))})}return O}function ge(O,v,q){return(v=ae(v))in O?Object.defineProperty(O,v,{value:q,enumerable:!0,configurable:!0,writable:!0}):O[v]=q,O}function ae(O){var v=se(O,"string");return m(v)=="symbol"?v:v+""}function se(O,v){if(m(O)!="object"||!O)return O;var q=O[Symbol.toPrimitive];if(q!==void 0){var Z=q.call(O,v);if(m(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(O)}var w=function(v){var q,Z,R,P,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,R=ee<0||ee>=v.slideCount,v.centerMode?(P=Math.floor(v.slidesToShow/2),Z=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-P-1&&ee<=v.currentSlide+P&&(q=!0)):q=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var j;v.targetSlide<0?j=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?j=v.targetSlide-v.slideCount:j=v.targetSlide;var f=ee===j;return{"slick-slide":!0,"slick-active":q,"slick-center":Z,"slick-cloned":R,"slick-current":f}},z=function(v){var q={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(q.width=v.slideWidth),v.fade&&(q.position="relative",v.vertical?q.top=-v.index*parseInt(v.slideHeight):q.left=-v.index*parseInt(v.slideWidth),q.opacity=v.currentSlide===v.index?1:0,q.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(q.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),q},x=function(v,q){return v.key||q},D=function(v){var q,Z=[],R=[],P=[],ee=n.default.Children.count(v.children),j=(0,u.lazyStartIndex)(v),f=(0,u.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ie,T){var p,g={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?p=ie:p=n.default.createElement("div",null);var S=z(ue(ue({},v),{},{index:T})),U=p.props.className||"",H=w(ue(ue({},v),{},{index:T}));if(Z.push(n.default.cloneElement(p,{key:"original"+x(p,T),"data-index":T,className:(0,o.default)(H,U),tabIndex:"-1","aria-hidden":!H["slick-active"],style:ue(ue({outline:"none"},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var I=ee-T;I<=(0,u.getPreClones)(v)&&(q=-I,q>=j&&(p=ie),H=w(ue(ue({},v),{},{index:q})),R.push(n.default.cloneElement(p,{key:"precloned"+x(p,q),"data-index":q,tabIndex:"-1",className:(0,o.default)(H,U),"aria-hidden":!H["slick-active"],style:ue(ue({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}}))),T<(0,u.getPostClones)(v)&&(q=ee+T,q<f&&(p=ie),H=w(ue(ue({},v),{},{index:q})),P.push(n.default.cloneElement(p,{key:"postcloned"+x(p,q),"data-index":q,tabIndex:"-1",className:(0,o.default)(H,U),"aria-hidden":!H["slick-active"],style:ue(ue({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})))}}),v.rtl?R.concat(Z,P).reverse():R.concat(Z,P)};return Ll.Track=(function(O){A(q,O);var v=W(q);function q(){var Z;M(this,q);for(var R=arguments.length,P=new Array(R),ee=0;ee<R;ee++)P[ee]=arguments[ee];return Z=v.call.apply(v,[this].concat(P)),ge(re(Z),"node",null),ge(re(Z),"handleRef",function(j){Z.node=j}),Z}return k(q,[{key:"render",value:function(){var R=D(this.props),P=this.props,ee=P.onMouseEnter,j=P.onMouseOver,f=P.onMouseLeave,ie={onMouseEnter:ee,onMouseOver:j,onMouseLeave:f};return n.default.createElement("div",b({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ie),R)}}]),q})(n.default.PureComponent),Ll}var Nl={},vh;function xx(){if(vh)return Nl;vh=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.Dots=void 0;var o=m(zn()),u=m(Ho()),s=Zl();function m(w){return w&&w.__esModule?w:{default:w}}function b(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(O){return Object.getOwnPropertyDescriptor(w,O).enumerable})),x.push.apply(x,D)}return x}function M(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?b(Object(x),!0).forEach(function(D){G(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):b(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function G(w,z,x){return(z=W(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function k(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function A(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,W(D.key),D)}}function X(w,z,x){return z&&A(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function W(w){var z=le(w,"string");return n(z)=="symbol"?z:z+""}function le(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function re(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&ne(w,z)}function ne(w,z){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},ne(w,z)}function V(w){var z=ge();return function(){var x,D=ae(w);if(z){var O=ae(this).constructor;x=Reflect.construct(D,arguments,O)}else x=D.apply(this,arguments);return de(this,x)}}function de(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(w)}function ue(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ge(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ge=function(){return!!w})()}function ae(w){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},ae(w)}var se=function(z){var x;return z.infinite?x=Math.ceil(z.slideCount/z.slidesToScroll):x=Math.ceil((z.slideCount-z.slidesToShow)/z.slidesToScroll)+1,x};return Nl.Dots=(function(w){re(x,w);var z=V(x);function x(){return k(this,x),z.apply(this,arguments)}return X(x,[{key:"clickHandler",value:function(O,v){v.preventDefault(),this.props.clickHandler(O)}},{key:"render",value:function(){for(var O=this.props,v=O.onMouseEnter,q=O.onMouseOver,Z=O.onMouseLeave,R=O.infinite,P=O.slidesToScroll,ee=O.slidesToShow,j=O.slideCount,f=O.currentSlide,ie=se({slideCount:j,slidesToScroll:P,slidesToShow:ee,infinite:R}),T={onMouseEnter:v,onMouseOver:q,onMouseLeave:Z},p=[],g=0;g<ie;g++){var S=(g+1)*P-1,U=R?S:(0,s.clamp)(S,0,j-1),H=U-(P-1),I=R?H:(0,s.clamp)(H,0,j-1),K=(0,u.default)({"slick-active":R?f>=I&&f<=U:f===I}),te={message:"dots",index:g,slidesToScroll:P,currentSlide:f},me=this.clickHandler.bind(this,te);p=p.concat(o.default.createElement("li",{key:g,className:K},o.default.cloneElement(this.props.customPaging(g),{onClick:me})))}return o.default.cloneElement(this.props.appendDots(p),M({className:this.props.dotsClass},T))}}]),x})(o.default.PureComponent),Nl}var Ua={},bh;function $x(){if(bh)return Ua;bh=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.PrevArrow=Ua.NextArrow=void 0;var o=m(zn()),u=m(Ho()),s=Zl();function m(w){return w&&w.__esModule?w:{default:w}}function b(){return b=Object.assign?Object.assign.bind():function(w){for(var z=1;z<arguments.length;z++){var x=arguments[z];for(var D in x)({}).hasOwnProperty.call(x,D)&&(w[D]=x[D])}return w},b.apply(null,arguments)}function M(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(O){return Object.getOwnPropertyDescriptor(w,O).enumerable})),x.push.apply(x,D)}return x}function G(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?M(Object(x),!0).forEach(function(D){k(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):M(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function k(w,z,x){return(z=le(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function A(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function X(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,le(D.key),D)}}function W(w,z,x){return z&&X(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function le(w){var z=re(w,"string");return n(z)=="symbol"?z:z+""}function re(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function ne(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&V(w,z)}function V(w,z){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},V(w,z)}function de(w){var z=ae();return function(){var x,D=se(w);if(z){var O=se(this).constructor;x=Reflect.construct(D,arguments,O)}else x=D.apply(this,arguments);return ue(this,x)}}function ue(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ge(w)}function ge(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ae(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!w})()}function se(w){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},se(w)}return Ua.PrevArrow=(function(w){ne(x,w);var z=de(x);function x(){return A(this,x),z.apply(this,arguments)}return W(x,[{key:"clickHandler",value:function(O,v){v&&v.preventDefault(),this.props.clickHandler(O,v)}},{key:"render",value:function(){var O={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(O["slick-disabled"]=!0,v=null);var q={key:"0","data-role":"none",className:(0,u.default)(O),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.prevArrow?R=o.default.cloneElement(this.props.prevArrow,G(G({},q),Z)):R=o.default.createElement("button",b({key:"0",type:"button"},q)," ","Previous"),R}}]),x})(o.default.PureComponent),Ua.NextArrow=(function(w){ne(x,w);var z=de(x);function x(){return A(this,x),z.apply(this,arguments)}return W(x,[{key:"clickHandler",value:function(O,v){v&&v.preventDefault(),this.props.clickHandler(O,v)}},{key:"render",value:function(){var O={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(O["slick-disabled"]=!0,v=null);var q={key:"1","data-role":"none",className:(0,u.default)(O),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.nextArrow?R=o.default.cloneElement(this.props.nextArrow,G(G({},q),Z)):R=o.default.createElement("button",b({key:"1",type:"button"},q)," ","Next"),R}}]),x})(o.default.PureComponent),Ua}var _m=(function(){if(typeof Map<"u")return Map;function n(o,u){var s=-1;return o.some(function(m,b){return m[0]===u?(s=b,!0):!1}),s}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(u){var s=n(this.__entries__,u),m=this.__entries__[s];return m&&m[1]},o.prototype.set=function(u,s){var m=n(this.__entries__,u);~m?this.__entries__[m][1]=s:this.__entries__.push([u,s])},o.prototype.delete=function(u){var s=this.__entries__,m=n(s,u);~m&&s.splice(m,1)},o.prototype.has=function(u){return!!~n(this.__entries__,u)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(u,s){s===void 0&&(s=null);for(var m=0,b=this.__entries__;m<b.length;m++){var M=b[m];u.call(s,M[1],M[0])}},o})()})(),Au=typeof window<"u"&&typeof document<"u"&&window.document===document,jo=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),wx=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(jo):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),zx=2;function Tx(n,o){var u=!1,s=!1,m=0;function b(){u&&(u=!1,n()),s&&G()}function M(){wx(b)}function G(){var k=Date.now();if(u){if(k-m<zx)return;s=!0}else u=!0,s=!1,setTimeout(M,o);m=k}return G}var Ex=20,jx=["top","right","bottom","left","width","height","size","weight"],Ox=typeof MutationObserver<"u",Ax=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Tx(this.refresh.bind(this),Ex)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var u=this.observers_,s=u.indexOf(o);~s&&u.splice(s,1),!u.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(u){return u.gatherActive(),u.hasActive()});return o.forEach(function(u){return u.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!Au||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ox?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!Au||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var u=o.propertyName,s=u===void 0?"":u,m=jx.some(function(b){return!!~s.indexOf(b)});m&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),km=(function(n,o){for(var u=0,s=Object.keys(o);u<s.length;u++){var m=s[u];Object.defineProperty(n,m,{value:o[m],enumerable:!1,writable:!1,configurable:!0})}return n}),Bi=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||jo}),Cm=Ro(0,0,0,0);function Oo(n){return parseFloat(n)||0}function Sh(n){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return o.reduce(function(s,m){var b=n["border-"+m+"-width"];return s+Oo(b)},0)}function _x(n){for(var o=["top","right","bottom","left"],u={},s=0,m=o;s<m.length;s++){var b=m[s],M=n["padding-"+b];u[b]=Oo(M)}return u}function kx(n){var o=n.getBBox();return Ro(0,0,o.width,o.height)}function Cx(n){var o=n.clientWidth,u=n.clientHeight;if(!o&&!u)return Cm;var s=Bi(n).getComputedStyle(n),m=_x(s),b=m.left+m.right,M=m.top+m.bottom,G=Oo(s.width),k=Oo(s.height);if(s.boxSizing==="border-box"&&(Math.round(G+b)!==o&&(G-=Sh(s,"left","right")+b),Math.round(k+M)!==u&&(k-=Sh(s,"top","bottom")+M)),!Dx(n)){var A=Math.round(G+b)-o,X=Math.round(k+M)-u;Math.abs(A)!==1&&(G-=A),Math.abs(X)!==1&&(k-=X)}return Ro(m.left,m.top,G,k)}var Mx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Bi(n).SVGGraphicsElement}:function(n){return n instanceof Bi(n).SVGElement&&typeof n.getBBox=="function"}})();function Dx(n){return n===Bi(n).document.documentElement}function Hx(n){return Au?Mx(n)?kx(n):Cx(n):Cm}function Rx(n){var o=n.x,u=n.y,s=n.width,m=n.height,b=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,M=Object.create(b.prototype);return km(M,{x:o,y:u,width:s,height:m,top:u,right:o+s,bottom:m+u,left:o}),M}function Ro(n,o,u,s){return{x:n,y:o,width:u,height:s}}var Lx=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ro(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=Hx(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),Nx=(function(){function n(o,u){var s=Rx(u);km(this,{target:o,contentRect:s})}return n})(),Ux=(function(){function n(o,u,s){if(this.activeObservations_=[],this.observations_=new _m,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=u,this.callbackCtx_=s}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Bi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var u=this.observations_;u.has(o)||(u.set(o,new Lx(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Bi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var u=this.observations_;u.has(o)&&(u.delete(o),u.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(u){u.isActive()&&o.activeObservations_.push(u)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,u=this.activeObservations_.map(function(s){return new Nx(s.target,s.broadcastRect())});this.callback_.call(o,u,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),Mm=typeof WeakMap<"u"?new WeakMap:new _m,Dm=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var u=Ax.getInstance(),s=new Ux(o,u,this);Mm.set(this,s)}return n})();["observe","unobserve","disconnect"].forEach(function(n){Dm.prototype[n]=function(){var o;return(o=Mm.get(this))[n].apply(o,arguments)}});var Bx=(function(){return typeof jo.ResizeObserver<"u"?jo.ResizeObserver:Dm})();const Gx=Object.freeze(Object.defineProperty({__proto__:null,default:Bx},Symbol.toStringTag,{value:"Module"})),qx=rv(Gx);var xh;function Yx(){if(xh)return Rl;xh=1,Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.InnerSlider=void 0;var n=A(zn()),o=A(vx()),u=A(bx()),s=A(Ho()),m=Zl(),b=Sx(),M=xx(),G=$x(),k=A(qx);function A(R){return R&&R.__esModule?R:{default:R}}function X(R){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},X(R)}function W(){return W=Object.assign?Object.assign.bind():function(R){for(var P=1;P<arguments.length;P++){var ee=arguments[P];for(var j in ee)({}).hasOwnProperty.call(ee,j)&&(R[j]=ee[j])}return R},W.apply(null,arguments)}function le(R,P){if(R==null)return{};var ee,j,f=re(R,P);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(j=0;j<ie.length;j++)ee=ie[j],P.includes(ee)||{}.propertyIsEnumerable.call(R,ee)&&(f[ee]=R[ee])}return f}function re(R,P){if(R==null)return{};var ee={};for(var j in R)if({}.hasOwnProperty.call(R,j)){if(P.includes(j))continue;ee[j]=R[j]}return ee}function ne(R,P){var ee=Object.keys(R);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(R);P&&(j=j.filter(function(f){return Object.getOwnPropertyDescriptor(R,f).enumerable})),ee.push.apply(ee,j)}return ee}function V(R){for(var P=1;P<arguments.length;P++){var ee=arguments[P]!=null?arguments[P]:{};P%2?ne(Object(ee),!0).forEach(function(j){v(R,j,ee[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(ee)):ne(Object(ee)).forEach(function(j){Object.defineProperty(R,j,Object.getOwnPropertyDescriptor(ee,j))})}return R}function de(R,P){if(!(R instanceof P))throw new TypeError("Cannot call a class as a function")}function ue(R,P){for(var ee=0;ee<P.length;ee++){var j=P[ee];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(R,q(j.key),j)}}function ge(R,P,ee){return P&&ue(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),R}function ae(R,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(P&&P.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),P&&se(R,P)}function se(R,P){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,j){return ee.__proto__=j,ee},se(R,P)}function w(R){var P=D();return function(){var ee,j=O(R);if(P){var f=O(this).constructor;ee=Reflect.construct(j,arguments,f)}else ee=j.apply(this,arguments);return z(this,ee)}}function z(R,P){if(P&&(X(P)=="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(R)}function x(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function D(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!R})()}function O(R){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},O(R)}function v(R,P,ee){return(P=q(P))in R?Object.defineProperty(R,P,{value:ee,enumerable:!0,configurable:!0,writable:!0}):R[P]=ee,R}function q(R){var P=Z(R,"string");return X(P)=="symbol"?P:P+""}function Z(R,P){if(X(R)!="object"||!R)return R;var ee=R[Symbol.toPrimitive];if(ee!==void 0){var j=ee.call(R,P);if(X(j)!="object")return j;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(R)}return Rl.InnerSlider=(function(R){ae(ee,R);var P=w(ee);function ee(j){var f;de(this,ee),f=P.call(this,j),v(x(f),"listRefHandler",function(T){return f.list=T}),v(x(f),"trackRefHandler",function(T){return f.track=T}),v(x(f),"adaptHeight",function(){if(f.props.adaptiveHeight&&f.list){var T=f.list.querySelector('[data-index="'.concat(f.state.currentSlide,'"]'));f.list.style.height=(0,m.getHeight)(T)+"px"}}),v(x(f),"componentDidMount",function(){if(f.props.onInit&&f.props.onInit(),f.props.lazyLoad){var T=(0,m.getOnDemandLazySlides)(V(V({},f.props),f.state));T.length>0&&(f.setState(function(g){return{lazyLoadedList:g.lazyLoadedList.concat(T)}}),f.props.onLazyLoad&&f.props.onLazyLoad(T))}var p=V({listRef:f.list,trackRef:f.track},f.props);f.updateState(p,!0,function(){f.adaptHeight(),f.props.autoplay&&f.autoPlay("update")}),f.props.lazyLoad==="progressive"&&(f.lazyLoadTimer=setInterval(f.progressiveLazyLoad,1e3)),f.ro=new k.default(function(){f.state.animating?(f.onWindowResized(!1),f.callbackTimers.push(setTimeout(function(){return f.onWindowResized()},f.props.speed))):f.onWindowResized()}),f.ro.observe(f.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(g){g.onfocus=f.props.pauseOnFocus?f.onSlideFocus:null,g.onblur=f.props.pauseOnFocus?f.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",f.onWindowResized):window.attachEvent("onresize",f.onWindowResized)}),v(x(f),"componentWillUnmount",function(){f.animationEndCallback&&clearTimeout(f.animationEndCallback),f.lazyLoadTimer&&clearInterval(f.lazyLoadTimer),f.callbackTimers.length&&(f.callbackTimers.forEach(function(T){return clearTimeout(T)}),f.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",f.onWindowResized):window.detachEvent("onresize",f.onWindowResized),f.autoplayTimer&&clearInterval(f.autoplayTimer),f.ro.disconnect()}),v(x(f),"componentDidUpdate",function(T){if(f.checkImagesLoad(),f.props.onReInit&&f.props.onReInit(),f.props.lazyLoad){var p=(0,m.getOnDemandLazySlides)(V(V({},f.props),f.state));p.length>0&&(f.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(p)}}),f.props.onLazyLoad&&f.props.onLazyLoad(p))}f.adaptHeight();var g=V(V({listRef:f.list,trackRef:f.track},f.props),f.state),S=f.didPropsChange(T);S&&f.updateState(g,S,function(){f.state.currentSlide>=n.default.Children.count(f.props.children)&&f.changeSlide({message:"index",index:n.default.Children.count(f.props.children)-f.props.slidesToShow,currentSlide:f.state.currentSlide}),f.props.autoplay?f.autoPlay("update"):f.pause("paused")})}),v(x(f),"onWindowResized",function(T){f.debouncedResize&&f.debouncedResize.cancel(),f.debouncedResize=(0,u.default)(function(){return f.resizeWindow(T)},50),f.debouncedResize()}),v(x(f),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,p=!!(f.track&&f.track.node);if(p){var g=V(V({listRef:f.list,trackRef:f.track},f.props),f.state);f.updateState(g,T,function(){f.props.autoplay?f.autoPlay("update"):f.pause("paused")}),f.setState({animating:!1}),clearTimeout(f.animationEndCallback),delete f.animationEndCallback}}),v(x(f),"updateState",function(T,p,g){var S=(0,m.initializedState)(T);T=V(V(V({},T),S),{},{slideIndex:S.currentSlide});var U=(0,m.getTrackLeft)(T);T=V(V({},T),{},{left:U});var H=(0,m.getTrackCSS)(T);(p||n.default.Children.count(f.props.children)!==n.default.Children.count(T.children))&&(S.trackStyle=H),f.setState(S,g)}),v(x(f),"ssrInit",function(){if(f.props.variableWidth){var T=0,p=0,g=[],S=(0,m.getPreClones)(V(V(V({},f.props),f.state),{},{slideCount:f.props.children.length})),U=(0,m.getPostClones)(V(V(V({},f.props),f.state),{},{slideCount:f.props.children.length}));f.props.children.forEach(function(Fe){g.push(Fe.props.style.width),T+=Fe.props.style.width});for(var H=0;H<S;H++)p+=g[g.length-1-H],T+=g[g.length-1-H];for(var I=0;I<U;I++)T+=g[I];for(var K=0;K<f.state.currentSlide;K++)p+=g[K];var te={width:T+"px",left:-p+"px"};if(f.props.centerMode){var me="".concat(g[f.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(me,") / 2 ) ")}return{trackStyle:te}}var pe=n.default.Children.count(f.props.children),Se=V(V(V({},f.props),f.state),{},{slideCount:pe}),Oe=(0,m.getPreClones)(Se)+(0,m.getPostClones)(Se)+pe,$e=100/f.props.slidesToShow*Oe,Ae=100/Oe,be=-Ae*((0,m.getPreClones)(Se)+f.state.currentSlide)*$e/100;f.props.centerMode&&(be+=(100-Ae*$e/100)/2);var ze={width:$e+"%",left:be+"%"};return{slideWidth:Ae+"%",trackStyle:ze}}),v(x(f),"checkImagesLoad",function(){var T=f.list&&f.list.querySelectorAll&&f.list.querySelectorAll(".slick-slide img")||[],p=T.length,g=0;Array.prototype.forEach.call(T,function(S){var U=function(){return++g&&g>=p&&f.onWindowResized()};if(!S.onclick)S.onclick=function(){return S.parentNode.focus()};else{var H=S.onclick;S.onclick=function(I){H(I),S.parentNode.focus()}}S.onload||(f.props.lazyLoad?S.onload=function(){f.adaptHeight(),f.callbackTimers.push(setTimeout(f.onWindowResized,f.props.speed))}:(S.onload=U,S.onerror=function(){U(),f.props.onLazyLoadError&&f.props.onLazyLoadError()}))})}),v(x(f),"progressiveLazyLoad",function(){for(var T=[],p=V(V({},f.props),f.state),g=f.state.currentSlide;g<f.state.slideCount+(0,m.getPostClones)(p);g++)if(f.state.lazyLoadedList.indexOf(g)<0){T.push(g);break}for(var S=f.state.currentSlide-1;S>=-(0,m.getPreClones)(p);S--)if(f.state.lazyLoadedList.indexOf(S)<0){T.push(S);break}T.length>0?(f.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(T)}}),f.props.onLazyLoad&&f.props.onLazyLoad(T)):f.lazyLoadTimer&&(clearInterval(f.lazyLoadTimer),delete f.lazyLoadTimer)}),v(x(f),"slideHandler",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=f.props,S=g.asNavFor,U=g.beforeChange,H=g.onLazyLoad,I=g.speed,K=g.afterChange,te=f.state.currentSlide,me=(0,m.slideHandler)(V(V(V({index:T},f.props),f.state),{},{trackRef:f.track,useCSS:f.props.useCSS&&!p})),pe=me.state,Se=me.nextState;if(pe){U&&U(te,pe.currentSlide);var Oe=pe.lazyLoadedList.filter(function($e){return f.state.lazyLoadedList.indexOf($e)<0});H&&Oe.length>0&&H(Oe),!f.props.waitForAnimate&&f.animationEndCallback&&(clearTimeout(f.animationEndCallback),K&&K(te),delete f.animationEndCallback),f.setState(pe,function(){S&&f.asNavForIndex!==T&&(f.asNavForIndex=T,S.innerSlider.slideHandler(T)),Se&&(f.animationEndCallback=setTimeout(function(){var $e=Se.animating,Ae=le(Se,["animating"]);f.setState(Ae,function(){f.callbackTimers.push(setTimeout(function(){return f.setState({animating:$e})},10)),K&&K(pe.currentSlide),delete f.animationEndCallback})},I))})}}),v(x(f),"changeSlide",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=V(V({},f.props),f.state),S=(0,m.changeSlide)(g,T);if(!(S!==0&&!S)&&(p===!0?f.slideHandler(S,p):f.slideHandler(S),f.props.autoplay&&f.autoPlay("update"),f.props.focusOnSelect)){var U=f.list.querySelectorAll(".slick-current");U[0]&&U[0].focus()}}),v(x(f),"clickHandler",function(T){f.clickable===!1&&(T.stopPropagation(),T.preventDefault()),f.clickable=!0}),v(x(f),"keyHandler",function(T){var p=(0,m.keyHandler)(T,f.props.accessibility,f.props.rtl);p!==""&&f.changeSlide({message:p})}),v(x(f),"selectHandler",function(T){f.changeSlide(T)}),v(x(f),"disableBodyScroll",function(){var T=function(g){g=g||window.event,g.preventDefault&&g.preventDefault(),g.returnValue=!1};window.ontouchmove=T}),v(x(f),"enableBodyScroll",function(){window.ontouchmove=null}),v(x(f),"swipeStart",function(T){f.props.verticalSwiping&&f.disableBodyScroll();var p=(0,m.swipeStart)(T,f.props.swipe,f.props.draggable);p!==""&&f.setState(p)}),v(x(f),"swipeMove",function(T){var p=(0,m.swipeMove)(T,V(V(V({},f.props),f.state),{},{trackRef:f.track,listRef:f.list,slideIndex:f.state.currentSlide}));p&&(p.swiping&&(f.clickable=!1),f.setState(p))}),v(x(f),"swipeEnd",function(T){var p=(0,m.swipeEnd)(T,V(V(V({},f.props),f.state),{},{trackRef:f.track,listRef:f.list,slideIndex:f.state.currentSlide}));if(p){var g=p.triggerSlideHandler;delete p.triggerSlideHandler,f.setState(p),g!==void 0&&(f.slideHandler(g),f.props.verticalSwiping&&f.enableBodyScroll())}}),v(x(f),"touchEnd",function(T){f.swipeEnd(T),f.clickable=!0}),v(x(f),"slickPrev",function(){f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:"previous"})},0))}),v(x(f),"slickNext",function(){f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:"next"})},0))}),v(x(f),"slickGoTo",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";f.callbackTimers.push(setTimeout(function(){return f.changeSlide({message:"index",index:T,currentSlide:f.state.currentSlide},p)},0))}),v(x(f),"play",function(){var T;if(f.props.rtl)T=f.state.currentSlide-f.props.slidesToScroll;else if((0,m.canGoNext)(V(V({},f.props),f.state)))T=f.state.currentSlide+f.props.slidesToScroll;else return!1;f.slideHandler(T)}),v(x(f),"autoPlay",function(T){f.autoplayTimer&&clearInterval(f.autoplayTimer);var p=f.state.autoplaying;if(T==="update"){if(p==="hovered"||p==="focused"||p==="paused")return}else if(T==="leave"){if(p==="paused"||p==="focused")return}else if(T==="blur"&&(p==="paused"||p==="hovered"))return;f.autoplayTimer=setInterval(f.play,f.props.autoplaySpeed+50),f.setState({autoplaying:"playing"})}),v(x(f),"pause",function(T){f.autoplayTimer&&(clearInterval(f.autoplayTimer),f.autoplayTimer=null);var p=f.state.autoplaying;T==="paused"?f.setState({autoplaying:"paused"}):T==="focused"?(p==="hovered"||p==="playing")&&f.setState({autoplaying:"focused"}):p==="playing"&&f.setState({autoplaying:"hovered"})}),v(x(f),"onDotsOver",function(){return f.props.autoplay&&f.pause("hovered")}),v(x(f),"onDotsLeave",function(){return f.props.autoplay&&f.state.autoplaying==="hovered"&&f.autoPlay("leave")}),v(x(f),"onTrackOver",function(){return f.props.autoplay&&f.pause("hovered")}),v(x(f),"onTrackLeave",function(){return f.props.autoplay&&f.state.autoplaying==="hovered"&&f.autoPlay("leave")}),v(x(f),"onSlideFocus",function(){return f.props.autoplay&&f.pause("focused")}),v(x(f),"onSlideBlur",function(){return f.props.autoplay&&f.state.autoplaying==="focused"&&f.autoPlay("blur")}),v(x(f),"render",function(){var T=(0,s.default)("slick-slider",f.props.className,{"slick-vertical":f.props.vertical,"slick-initialized":!0}),p=V(V({},f.props),f.state),g=(0,m.extractObject)(p,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),S=f.props.pauseOnHover;g=V(V({},g),{},{onMouseEnter:S?f.onTrackOver:null,onMouseLeave:S?f.onTrackLeave:null,onMouseOver:S?f.onTrackOver:null,focusOnSelect:f.props.focusOnSelect&&f.clickable?f.selectHandler:null});var U;if(f.props.dots===!0&&f.state.slideCount>=f.props.slidesToShow){var H=(0,m.extractObject)(p,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),I=f.props.pauseOnDotsHover;H=V(V({},H),{},{clickHandler:f.changeSlide,onMouseEnter:I?f.onDotsLeave:null,onMouseOver:I?f.onDotsOver:null,onMouseLeave:I?f.onDotsLeave:null}),U=n.default.createElement(M.Dots,H)}var K,te,me=(0,m.extractObject)(p,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);me.clickHandler=f.changeSlide,f.props.arrows&&(K=n.default.createElement(G.PrevArrow,me),te=n.default.createElement(G.NextArrow,me));var pe=null;f.props.vertical&&(pe={height:f.state.listHeight});var Se=null;f.props.vertical===!1?f.props.centerMode===!0&&(Se={padding:"0px "+f.props.centerPadding}):f.props.centerMode===!0&&(Se={padding:f.props.centerPadding+" 0px"});var Oe=V(V({},pe),Se),$e=f.props.touchMove,Ae={className:"slick-list",style:Oe,onClick:f.clickHandler,onMouseDown:$e?f.swipeStart:null,onMouseMove:f.state.dragging&&$e?f.swipeMove:null,onMouseUp:$e?f.swipeEnd:null,onMouseLeave:f.state.dragging&&$e?f.swipeEnd:null,onTouchStart:$e?f.swipeStart:null,onTouchMove:f.state.dragging&&$e?f.swipeMove:null,onTouchEnd:$e?f.touchEnd:null,onTouchCancel:f.state.dragging&&$e?f.swipeEnd:null,onKeyDown:f.props.accessibility?f.keyHandler:null},be={className:T,dir:"ltr",style:f.props.style};return f.props.unslick&&(Ae={className:"slick-list"},be={className:T,style:f.props.style}),n.default.createElement("div",be,f.props.unslick?"":K,n.default.createElement("div",W({ref:f.listRefHandler},Ae),n.default.createElement(b.Track,W({ref:f.trackRefHandler},g),f.props.children)),f.props.unslick?"":te,f.props.unslick?"":U)}),f.list=null,f.track=null,f.state=V(V({},o.default),{},{currentSlide:f.props.initialSlide,targetSlide:f.props.initialSlide?f.props.initialSlide:0,slideCount:n.default.Children.count(f.props.children)}),f.callbackTimers=[],f.clickable=!0,f.debouncedResize=null;var ie=f.ssrInit();return f.state=V(V({},f.state),ie),f}return ge(ee,[{key:"didPropsChange",value:function(f){for(var ie=!1,T=0,p=Object.keys(this.props);T<p.length;T++){var g=p[T];if(!f.hasOwnProperty(g)){ie=!0;break}if(!(X(f[g])==="object"||typeof f[g]=="function"||isNaN(f[g]))&&f[g]!==this.props[g]){ie=!0;break}}return ie||n.default.Children.count(this.props.children)!==n.default.Children.count(f.children)}}]),ee})(n.default.Component),Rl}var du,$h;function Vx(){if($h)return du;$h=1;var n=function(o){return o.replace(/[A-Z]/g,function(u){return"-"+u.toLowerCase()}).toLowerCase()};return du=n,du}var pu,wh;function Xx(){if(wh)return pu;wh=1;var n=Vx(),o=function(m){var b=/[height|width]$/;return b.test(m)},u=function(m){var b="",M=Object.keys(m);return M.forEach(function(G,k){var A=m[G];G=n(G),o(G)&&typeof A=="number"&&(A=A+"px"),A===!0?b+=G:A===!1?b+="not "+G:b+="("+G+": "+A+")",k<M.length-1&&(b+=" and ")}),b},s=function(m){var b="";return typeof m=="string"?m:m instanceof Array?(m.forEach(function(M,G){b+=u(M),G<m.length-1&&(b+=", ")}),b):u(m)};return pu=s,pu}var zh;function Qx(){return zh||(zh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=M(zn()),u=Yx(),s=M(Xx()),m=M(Am()),b=Zl();function M(D){return D&&D.__esModule?D:{default:D}}function G(D){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},G(D)}function k(){return k=Object.assign?Object.assign.bind():function(D){for(var O=1;O<arguments.length;O++){var v=arguments[O];for(var q in v)({}).hasOwnProperty.call(v,q)&&(D[q]=v[q])}return D},k.apply(null,arguments)}function A(D,O){var v=Object.keys(D);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(D);O&&(q=q.filter(function(Z){return Object.getOwnPropertyDescriptor(D,Z).enumerable})),v.push.apply(v,q)}return v}function X(D){for(var O=1;O<arguments.length;O++){var v=arguments[O]!=null?arguments[O]:{};O%2?A(Object(v),!0).forEach(function(q){w(D,q,v[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(v)):A(Object(v)).forEach(function(q){Object.defineProperty(D,q,Object.getOwnPropertyDescriptor(v,q))})}return D}function W(D,O){if(!(D instanceof O))throw new TypeError("Cannot call a class as a function")}function le(D,O){for(var v=0;v<O.length;v++){var q=O[v];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(D,z(q.key),q)}}function re(D,O,v){return O&&le(D.prototype,O),Object.defineProperty(D,"prototype",{writable:!1}),D}function ne(D,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(O&&O.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),O&&V(D,O)}function V(D,O){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,q){return v.__proto__=q,v},V(D,O)}function de(D){var O=ae();return function(){var v,q=se(D);if(O){var Z=se(this).constructor;v=Reflect.construct(q,arguments,Z)}else v=q.apply(this,arguments);return ue(this,v)}}function ue(D,O){if(O&&(G(O)=="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ge(D)}function ge(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function ae(){try{var D=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!D})()}function se(D){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},se(D)}function w(D,O,v){return(O=z(O))in D?Object.defineProperty(D,O,{value:v,enumerable:!0,configurable:!0,writable:!0}):D[O]=v,D}function z(D){var O=x(D,"string");return G(O)=="symbol"?O:O+""}function x(D,O){if(G(D)!="object"||!D)return D;var v=D[Symbol.toPrimitive];if(v!==void 0){var q=v.call(D,O);if(G(q)!="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(D)}n.default=(function(D){ne(v,D);var O=de(v);function v(q){var Z;return W(this,v),Z=O.call(this,q),w(ge(Z),"innerSliderRefHandler",function(R){return Z.innerSlider=R}),w(ge(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),w(ge(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),w(ge(Z),"slickGoTo",function(R){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(R,P)}),w(ge(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),w(ge(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return re(v,[{key:"media",value:function(Z,R){var P=window.matchMedia(Z),ee=function(f){var ie=f.matches;ie&&R()};P.addListener(ee),this._responsiveMediaHandlers.push({mql:P,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var R=this.props.responsive.map(function(ee){return ee.breakpoint});R.sort(function(ee,j){return ee-j}),R.forEach(function(ee,j){var f;j===0?f=(0,s.default)({minWidth:0,maxWidth:ee}):f=(0,s.default)({minWidth:R[j-1]+1,maxWidth:ee}),(0,b.canUseDOM)()&&Z.media(f,function(){Z.setState({breakpoint:ee})})});var P=(0,s.default)({minWidth:R.slice(-1)[0]});(0,b.canUseDOM)()&&this.media(P,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,R,P;this.state.breakpoint?(P=this.props.responsive.filter(function(H){return H.breakpoint===Z.state.breakpoint}),R=P[0].settings==="unslick"?"unslick":X(X(X({},m.default),this.props),P[0].settings)):R=X(X({},m.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(H){return typeof H=="string"?!!H.trim():!!H}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var j=[],f=null,ie=0;ie<ee.length;ie+=R.rows*R.slidesPerRow){for(var T=[],p=ie;p<ie+R.rows*R.slidesPerRow;p+=R.slidesPerRow){for(var g=[],S=p;S<p+R.slidesPerRow&&(R.variableWidth&&ee[S].props.style&&(f=ee[S].props.style.width),!(S>=ee.length));S+=1)g.push(o.default.cloneElement(ee[S],{key:100*ie+10*p+S,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ie+p},g))}R.variableWidth?j.push(o.default.createElement("div",{key:ie,style:{width:f}},T)):j.push(o.default.createElement("div",{key:ie},T))}if(R==="unslick"){var U="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:U},ee)}else j.length<=R.slidesToShow&&(R.unslick=!0);return o.default.createElement(u.InnerSlider,k({style:this.props.style,ref:this.innerSliderRefHandler},(0,b.filterSettings)(R)),j)}}]),v})(o.default.Component)})(ou)),ou}var Th;function Zx(){return Th||(Th=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(Qx());function u(s){return s&&s.__esModule?s:{default:s}}n.default=o.default})(ru)),ru}var Kx=Zx();const Bu=_u(Kx),jt="/assets",Px=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${_.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,gu=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,Wx=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,Ix=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Jx=y.button`
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
`,Fx=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,e$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,t$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,n$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,a$=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,i$=y.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,Eh=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,jh=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${_.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Oh=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,l$=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,r$=y.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${_.motion.iconLift}) scale(${_.motion.scaleHover});
  }
`,o$=y.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,s$=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,c$=y.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,u$=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${_.effects.carouselBackground};
  overflow: hidden;
`,f$=y.div`
  position: absolute;
  inset: 0;
  background: ${_.effects.carouselBackdrop};
`,d$=y.div`
  position: relative;
  width: ${_.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${_.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,p$=y(Bu)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${_.sizing.carouselSlidePadding};
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
    opacity: ${_.effects.carouselCardOpacity};
    transform: scale(${_.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${_.motion.scaleActive});
    filter: ${_.effects.carouselDropShadow};
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
      padding: ${_.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${_.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,g$=y.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${_.effects.carouselCardShadow};
  cursor: pointer;
`,h$=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,m$=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${_.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,y$=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${_.sizing.hairline} solid ${_.effects.glassWhite20};
  background: ${_.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${_.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${_.effects.glassWhite20};
  }
`,Ah=({className:n,style:o,onClick:u,direction:s,ariaLabel:m})=>d.jsx(y$,{className:n,style:o,onClick:u,"aria-label":m,children:s==="next"?d.jsx(Lu,{size:18}):d.jsx(mn,{size:18})});y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`;y.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${_.effects.compositionGradient};
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
`;const v$=y.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,b$=y.div`
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
`,S$=y.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,x$=y.button`
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
`,$$=[`${jt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${jt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${jt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${jt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${jt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${jt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${jt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${jt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${jt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],w$=[`${jt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${jt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],z$=({onBack:n})=>{const{t:o}=_t(),u=je.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=G=>{u.current&&u.current.slickGoTo(G)},b=je.useMemo(()=>new Date().getFullYear(),[]),M=je.useMemo(()=>({centerMode:!0,centerPadding:_.carousel.centerPaddingLg,infinite:!0,slidesToShow:_.carousel.slidesToShowLg,speed:_.carousel.speed,autoplay:!0,autoplaySpeed:_.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(Ah,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(Ah,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:_.carousel.breakpointLg,settings:{slidesToShow:_.carousel.slidesToShowMd,centerPadding:_.carousel.centerPaddingMd}},{breakpoint:_.carousel.breakpointSm,settings:{slidesToShow:_.carousel.slidesToShowSm,slidesToScroll:_.carousel.slidesToScrollSm,centerPadding:_.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:_.carousel.breakpointXs,settings:{slidesToShow:_.carousel.slidesToShowSm,slidesToScroll:_.carousel.slidesToScrollSm,centerPadding:_.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(Px,{children:[d.jsx(Wx,{children:d.jsxs(Ix,{children:[d.jsxs(Jx,{onClick:s,"aria-label":o.appIcons.backToPortfolioAria,children:[d.jsx(mn,{size:18}),o.appIcons.backToPortfolio]}),d.jsx(Fx,{children:o.work.categories.brandDesign})]})}),d.jsx(e$,{children:d.jsxs(gu,{children:[d.jsx(t$,{children:o.appIcons.eyebrow}),d.jsxs(n$,{children:[o.appIcons.titlePrimary," ",d.jsx("em",{children:o.appIcons.titleEmphasis})]}),d.jsx(a$,{children:o.appIcons.lead})]})}),d.jsx(i$,{children:d.jsxs(gu,{children:[d.jsxs(Eh,{children:[d.jsx(jh,{}),d.jsx(Oh,{children:o.appIcons.appIconsTitle})]}),d.jsx(l$,{children:$$.map((G,k)=>d.jsxs(r$,{children:[d.jsx(o$,{children:d.jsx(s$,{src:G,alt:o.appIcons.iconLabels[k]})}),d.jsx(c$,{children:o.appIcons.iconLabels[k]})]},G))})]})}),d.jsxs(u$,{children:[d.jsx(f$,{}),d.jsx(gu,{style:{position:"relative",zIndex:1},children:d.jsxs(Eh,{children:[d.jsx(jh,{$light:!0}),d.jsx(Oh,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),d.jsx(d$,{children:d.jsx(p$,{ref:u,...M,children:w$.map((G,k)=>d.jsxs("div",{onClick:()=>m(k),children:[d.jsx(g$,{className:"carousel-card",children:d.jsx(h$,{src:G,alt:o.appIcons.splashLabels[k],loading:"lazy"})}),d.jsx(m$,{className:"carousel-caption",children:o.appIcons.splashLabels[k]})]},G))})})]}),d.jsx(v$,{children:d.jsxs(b$,{children:[d.jsxs(S$,{children:["© ",b," ",To,". ",o.appIcons.footerRights]}),d.jsxs(x$,{onClick:s,children:[o.appIcons.viewMoreProjects,d.jsx(Lu,{size:16})]})]})})]})},T$=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${_.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,E$=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,j$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,O$=y.button`
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
`,A$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,_$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,k$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,C$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,M$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,D$=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,H$=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,R$=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,L$=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,N$=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${_.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,U$=y.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,B$=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,G$=n=>n.includes(" ")?encodeURI(n):n,q$=({onBack:n})=>{const{t:o}=_t(),u=Eo.find(m=>m.id===17),s=je.useMemo(()=>{const m=(u==null?void 0:u.gallery)??[],b=[],M=new Map;return m.forEach(G=>{const le=decodeURIComponent(G.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";M.has(le)?b[M.get(le)].items.push(G):(M.set(le,b.length),b.push({name:le,items:[G]}))}),b},[u==null?void 0:u.gallery]);return d.jsxs(T$,{children:[d.jsx(E$,{children:d.jsxs(j$,{children:[d.jsxs(O$,{onClick:n,children:[d.jsx(mn,{size:18}),o.appStoreScreenshots.backToPortfolio]}),d.jsx(A$,{children:o.appStoreScreenshots.headerTag})]})}),d.jsxs(k$,{children:[d.jsx(C$,{children:o.appStoreScreenshots.eyebrow}),d.jsx(M$,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&d.jsx(D$,{children:o.appStoreScreenshots.lead})]}),d.jsx(H$,{children:d.jsx(_$,{children:s.map(m=>d.jsxs(R$,{children:[d.jsx(L$,{children:m.name}),d.jsx(N$,{children:m.items.map((b,M)=>d.jsx(U$,{children:d.jsx(B$,{src:G$(b),alt:`${m.name} ${M+1}`,loading:"lazy"})},`${m.name}-${M}`))})]},m.name))})})]})},Y$=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,V$=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,X$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Q$=y.button`
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
`,Z$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,K$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,P$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,W$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,I$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,J$=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,F$=y.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,e2=y.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,t2=n=>n.includes(" ")?encodeURI(n):n,n2=({onBack:n})=>{const{t:o}=_t();return d.jsxs(Y$,{children:[d.jsx(V$,{children:d.jsxs(X$,{children:[d.jsxs(Q$,{onClick:n,children:[d.jsx(mn,{size:18}),o.namelaka.backToPortfolio]}),d.jsx(Z$,{children:o.namelaka.headerTag})]})}),d.jsxs(P$,{children:[d.jsx(W$,{children:o.namelaka.eyebrow}),d.jsx(I$,{children:o.namelaka.title})]}),d.jsx(J$,{children:d.jsx(K$,{children:d.jsx(F$,{children:d.jsx(e2,{src:t2("/assets/images/brand/Namelaka icons and illustration/Namelaka.png"),alt:o.namelaka.title})})})})]})},Hm="/assets",a2=`${Hm}/video/Mindzy – Brain Training`,i2=`${Hm}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,l2=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${_.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,_h=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,r2=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,o2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,s2=y.button`
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
`,c2=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,u2=y.section`
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
`,f2=y.div`
  position: relative;
  z-index: ${_.zIndex.foreground};
`,d2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,p2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,g2=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,h2=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,m2=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${_.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,y2=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,v2=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${_.effects.carouselBackground};
  overflow: hidden;
`,b2=y.div`
  position: absolute;
  inset: 0;
  background: ${_.effects.carouselBackdrop};
`,S2=y.div`
  position: relative;
  width: ${_.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${_.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,x2=y(Bu)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${_.sizing.carouselSlidePadding};
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
    opacity: ${_.effects.carouselCardOpacity};
    transform: scale(${_.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${_.motion.scaleActive});
    filter: ${_.effects.carouselDropShadow};
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
      padding: ${_.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${_.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,$2=y.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
  cursor: pointer;
`,w2=y.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0 round 16px);
`,z2=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${_.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,T2=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${_.sizing.hairline} solid ${_.effects.glassWhite20};
  background: ${_.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${_.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${_.effects.glassWhite20};
  }
`,kh=({className:n,style:o,onClick:u,direction:s,ariaLabel:m})=>d.jsx(T2,{className:n,style:o,onClick:u,"aria-label":m,children:s==="next"?d.jsx(Lu,{size:18}):d.jsx(mn,{size:18})}),Ch=n=>n.includes(" ")?encodeURI(n):n,E2=["Catch the bug.MP4","Color count.MP4","Linking Pairs.mov","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],j2=({onBack:n})=>{const{t:o}=_t(),u=je.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=G=>{u.current&&u.current.slickGoTo(G)},b=je.useMemo(()=>E2.map(G=>`${a2}/${G}`),[]),M=je.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:_.carousel.speed,autoplay:!0,autoplaySpeed:_.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(kh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(kh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:_.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:_.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:_.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:_.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:_.carousel.slidesToScrollSm,centerPadding:_.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(l2,{children:[d.jsx(r2,{children:d.jsxs(o2,{children:[d.jsxs(s2,{onClick:s,children:[d.jsx(mn,{size:18}),o.mindzy.backToPortfolio]}),d.jsx(c2,{children:o.work.categories.uiuxDesign})]})}),d.jsx(u2,{$coverUrl:Ch(i2),children:d.jsx(_h,{children:d.jsxs(f2,{children:[d.jsx(d2,{children:o.mindzy.eyebrow}),d.jsx(p2,{children:o.mindzy.title}),o.mindzy.lead&&d.jsx(g2,{children:o.mindzy.lead})]})})}),d.jsxs(v2,{children:[d.jsx(b2,{}),d.jsx(_h,{children:d.jsxs(h2,{children:[d.jsx(m2,{}),d.jsx(y2,{children:o.mindzy.videoTitle})]})}),d.jsx(S2,{children:d.jsx(x2,{ref:u,...M,children:b.map((G,k)=>{var A;return d.jsxs("div",{onClick:()=>m(k),children:[d.jsx($2,{className:"carousel-card",children:d.jsx(w2,{src:Ch(G),muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"metadata"})}),d.jsx(z2,{className:"carousel-caption",children:(A=G.split("/").pop())==null?void 0:A.replace(/\.(MP4|mov)$/i,"")})]},G)})})})]})]})},Rm="/assets",Mh=`${Rm}/video/Marketing video`,O2=`${Rm}/images/brand/Full_Composition_Marketing_video.png`,A2=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${_.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,_2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: 0 ${({theme:n})=>n.spacing[6]};
`,k2=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,C2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,M2=y.button`
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
`,D2=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,H2=y.section`
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
`,R2=y.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`,L2=y.div`
  position: relative;
  z-index: 1;
`,N2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,U2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,B2=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,G2=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  margin-top: ${({theme:n})=>n.spacing[12]};
`,q2=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${_.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,Y2=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,V2=y.div`
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
`,X2=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Q2=y.div`
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
`,Z2=y.div`
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
`,Dh=y.video`
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
`;const hu=n=>encodeURI(n),K2=["1080x1920.mp4","App Store.mp4","Concept_2_1080x1920.mp4","video5_1080x1920.mp4","Video_1080x1920_android.mp4","valentine_stickers.mp4"],P2=["Comp 1.mp4","Concept 1 17-09_1.mp4","main video_2.mp4","video.mp4","Google play.mp4","Video (1).mp4"],W2=({onBack:n})=>{const{t:o}=_t(),u=()=>{if(n){n();return}window.location.hash="#work"};return d.jsxs(A2,{children:[d.jsx(k2,{children:d.jsxs(C2,{children:[d.jsxs(M2,{onClick:u,children:[d.jsx(mn,{size:18}),o.marketingVideo.backToPortfolio]}),d.jsx(D2,{children:o.marketingVideo.headerTag})]})}),d.jsxs(H2,{style:{"--hero-cover-url":`url(${hu(O2)})`},children:[d.jsx(R2,{}),d.jsxs(L2,{children:[d.jsx(N2,{children:o.marketingVideo.eyebrow}),d.jsx(U2,{children:o.marketingVideo.title}),d.jsx(B2,{children:o.marketingVideo.lead})]})]}),d.jsxs(_2,{children:[d.jsxs(G2,{children:[d.jsx(q2,{}),d.jsx(Y2,{children:o.marketingVideo.allVideosTitle})]}),d.jsx(V2,{children:K2.map(s=>d.jsx(Z2,{children:d.jsx(Dh,{src:hu(`${Mh}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))}),d.jsx(X2,{children:P2.map(s=>d.jsx(Q2,{children:d.jsx(Dh,{src:hu(`${Mh}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))})]})]})},I2="/assets",Bl=`${I2}/images/brand/Elemental Quest game`,J2=`${Bl}/logo Elemental Quest png.png`,F2=[`${Bl}/Map_1.png`,`${Bl}/Map_2.png`,`${Bl}/Map_3.png`,`${Bl}/Map_4.png`],ew=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,tw=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: ${_.effects.glassWhite70};
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid ${_.effects.overlayWhite40};
`,nw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,aw=y.button`
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
`,iw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,lw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,rw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,ow=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,sw=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,cw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,uw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,fw=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,dw=y.div`
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
`,pw=y.div`
  overflow: hidden;
`,gw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,Hh=n=>n.includes(" ")?encodeURI(n):n,hw=({onBack:n})=>{const{t:o}=_t();return d.jsxs(ew,{children:[d.jsx(tw,{children:d.jsxs(nw,{children:[d.jsxs(aw,{onClick:n,children:[d.jsx(mn,{size:18}),o.elementalQuest.backToPortfolio]}),d.jsx(iw,{children:o.elementalQuest.headerTag})]})}),d.jsxs(lw,{children:[d.jsx(rw,{children:o.elementalQuest.eyebrow}),d.jsx(ow,{children:o.elementalQuest.title}),d.jsx(sw,{children:o.elementalQuest.lead})]}),d.jsxs(cw,{children:[d.jsx(uw,{children:d.jsx(fw,{src:Hh(J2),alt:o.elementalQuest.logoAlt})}),d.jsx(dw,{children:F2.map((u,s)=>d.jsx(pw,{children:d.jsx(gw,{src:Hh(u),alt:`${o.elementalQuest.mapAlt} ${s+1}`})},s))})]})]})},mw="/assets",bo=`${mw}/images/brand/Combat Planes`,yw=`${bo}/logo_Combat Planes.png`,vw=[`${bo}/Maps.png`,`${bo}/Planes skins.png`,`${bo}/Characters.png`],bw=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: #2C307A;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Sw=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: rgba(44, 48, 122, 0.85);
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,xw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,$w=y.button`
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
`,ww=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,zw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Tw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Ew=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,jw=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,Ow=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,Aw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,_w=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,kw=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,Cw=y.div`
  overflow: hidden;
`,Mw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,Rh=n=>n.includes(" ")?encodeURI(n):n,Dw=({onBack:n})=>{const{t:o}=_t();return d.jsxs(bw,{children:[d.jsx(Sw,{children:d.jsxs(xw,{children:[d.jsxs($w,{onClick:n,children:[d.jsx(mn,{size:18}),o.combatPlanes.backToPortfolio]}),d.jsx(ww,{children:o.combatPlanes.headerTag})]})}),d.jsxs(zw,{children:[d.jsx(Tw,{children:o.combatPlanes.eyebrow}),d.jsx(Ew,{children:o.combatPlanes.title}),d.jsx(jw,{children:o.combatPlanes.lead})]}),d.jsxs(Ow,{children:[d.jsx(Aw,{children:d.jsx(_w,{src:Rh(yw),alt:o.combatPlanes.logoAlt})}),d.jsx(kw,{children:vw.map((u,s)=>d.jsx(Cw,{children:d.jsx(Mw,{src:Rh(u),alt:`${o.combatPlanes.galleryAlt} ${s+1}`})},s))})]})]})},Lm="/assets",Xl=`${Lm}/images/brand/Fatty Fish`,Hw=`${Xl}/Logo Fatty Fish.png`,Rw=`${Lm}/video/Fatty Fish/Fatty Fish video.mp4`,Lw=[`${Xl}/Character.png`,`${Xl}/Objects.png`],Nw=[`${Xl}/IMG_1.png`,`${Xl}/IMG_2.png`],Uw=y.section`
  min-height: ${_.layout.fullViewportHeight};
  background: #4F22D1;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Bw=y.header`
  position: sticky;
  top: 0;
  z-index: ${_.zIndex.stickyHeader};
  background: rgba(79, 34, 209, 0.85);
  backdrop-filter: blur(${_.effects.blurStrong});
  border-bottom: ${_.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,Gw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,qw=y.button`
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
`,Yw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,Vw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Xw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Qw=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Zw=y.p`
  max-width: ${_.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,Kw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,Pw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,Ww=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,Iw=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,Jw=y.div`
  overflow: hidden;
`,Fw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,e5=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[6]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`,t5=y.img`
  width: 100%;
  height: auto;
  display: block;
`,n5=y.div`
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[8]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    max-width: 80%;
  }
`,a5=y.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,po=n=>n.includes(" ")?encodeURI(n):n,i5=({onBack:n})=>{const{t:o}=_t();return d.jsxs(Uw,{children:[d.jsx(Bw,{children:d.jsxs(Gw,{children:[d.jsxs(qw,{onClick:n,children:[d.jsx(mn,{size:18}),o.fattyFish.backToPortfolio]}),d.jsx(Yw,{children:o.fattyFish.headerTag})]})}),d.jsxs(Vw,{children:[d.jsx(Xw,{children:o.fattyFish.eyebrow}),d.jsx(Qw,{children:o.fattyFish.title}),d.jsx(Zw,{children:o.fattyFish.lead})]}),d.jsxs(Kw,{children:[d.jsx(Pw,{children:d.jsx(Ww,{src:po(Hw),alt:o.fattyFish.logoAlt})}),d.jsx(Iw,{children:Lw.map((u,s)=>d.jsx(Jw,{children:d.jsx(Fw,{src:po(u),alt:`${o.fattyFish.galleryAlt} ${s+1}`})},s))}),d.jsx(e5,{children:Nw.map((u,s)=>d.jsx(t5,{src:po(u),alt:`${o.fattyFish.galleryAlt} screenshot ${s+1}`},s))}),d.jsx(n5,{children:d.jsx(a5,{src:po(Rw),autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]})]})},l5=y.div`
  padding: 28px 0 56px;
  display: flex;
  justify-content: center;
`,r5=y.img`
  display: block;
  width: 100%;
  max-width: 480px;
  height: auto;
`,o5=y.div`
  max-width: 480px;
  width: 100%;
  box-sizing: border-box;
`,s5=y.div`
  width: 100%;
  padding: 0 20px;

  .slick-list {
    padding: 0;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
    padding: 0 35px;
    box-sizing: border-box;
  }

  .slick-dots {
    margin-top: 18px;
  }
`,c5=()=>{const n={infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",adaptiveHeight:!0,responsive:[{breakpoint:900,settings:{slidesToShow:1,centerPadding:"0px"}},{breakpoint:640,settings:{slidesToShow:1,centerPadding:"0px"}}],autoplay:!0,autoplaySpeed:3500,arrows:!1},o="/assets/images/brand/Lending Harry Potter vs Darth_Vader",u=[`${o}/Screen_1.png`,`${o}/Screen_2.png`,`${o}/Screen_3.png`];return d.jsx(l5,{"aria-label":"Harry Potter vs Vader carousel",children:d.jsx(s5,{children:d.jsx(Bu,{...n,children:u.map((s,m)=>d.jsx("div",{children:d.jsx(o5,{children:d.jsx(r5,{src:s,alt:`Slide ${m+1}`})})},m))})})})},st={bg:"#1a2238",red:"#7a1a1a",redHover:"#9a2222",white:"#fff"},qe={sm:480,md:768,lg:900,xl:1024},tt={navHeight:72,navHeightMobile:60,navPaddingX:48,navPaddingXTablet:16,navPaddingXMobile:8,heroMinHeight:640,sectionPaddingY:80,sectionPaddingYMobile:60,sectionPaddingX:48,sectionPaddingXMobile:24,footerPaddingX:48,footerPaddingXMobile:20,footerCharHeight:320,footerCharHeightMobile:200,drawerMaxWidth:320,drawerWidthVw:80},Lh={contentBottomPadding:88,contentBottomPaddingMobile:56},ki={count:12,minSize:2,maxSize:5,minDuration:8,maxDuration:14,bottomOffset:-10},dn="/assets/images/brand/Lending Harry Potter vs Darth_Vader",u5="1",pn={backHogwarts:`${dn}/Back_Hogwarts.png?v=${u5}`,backPlane:`${dn}/Back_plane.png`,vaderFull:`${dn}/Darth_Vader_full height.png`,vaderPart2:`${dn}/Darth_Vader_part_2.png`,potterFull:`${dn}/Harry_Potter_full_height.png`,potterPart2:`${dn}/Harry_Potter_part_2.png`,heroVideo:`${dn}/Video Hero.mp4`,wand:`${dn}/Harry Potter's wand.png`,wandLight:`${dn}/Harry Potter's wand_light.png`,saber:`${dn}/Darth_Vader's_lightsaber.png`,saberLight:`${dn}/Darth_Vader's_lightsaber_light.png`},Ge=n=>`@media (max-width: ${n}px)`,f5=Tn`
  from { opacity: 0; transform: translateY(50px) }
  to   { opacity: 1; transform: translateY(0) }
`,Nm=Tn`
  from { opacity: 0 }
  to   { opacity: 1 }
`,d5=Tn`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-12px) }
`,p5=Tn`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0 }
  10%  { opacity: 1 }
  90%  { opacity: 1 }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0 }
`,Nh=({threshold:n=.2,rootMargin:o="0px",once:u=!0}={})=>{const s=je.useRef(null),[m,b]=je.useState(!1);return je.useEffect(()=>{const M=s.current;if(!M)return;const G=new IntersectionObserver(([k])=>{k.isIntersecting&&(b(!0),u&&G.disconnect())},{threshold:n,rootMargin:o});return G.observe(M),()=>G.disconnect()},[n,o,u]),{ref:s,visible:m}},g5=(n,o)=>{const u=document.getElementById(n);if(!u)return;const s=u.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:s,behavior:"smooth"})},h5=y.div`
  min-height: ${_.layout.fullViewportHeight};
  background: ${st.bg};
  color: ${st.white};
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`,m5=y.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.55);
    color: ${st.white};
  }
`,y5=y.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${tt.navHeight}px;
  padding: 0 ${tt.navPaddingX}px;
  background: rgba(26, 34, 56, 0.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  ${Ge(qe.lg)} {
    padding: 0 ${tt.navPaddingXTablet}px;
  }
  ${Ge(qe.md)} {
    height: ${tt.navHeightMobile}px;
    padding: 0 ${tt.navPaddingXMobile}px;
  }
`;y.img`
  height: 28px;
  width: auto;
  opacity: 1;
  ${Ge(qe.md)} {
    margin: 12px 0;
    display: block;
  }
`;const v5=y.div`
  display: flex;
  gap: 36px;

  ${Ge(qe.lg)} {
    gap: 18px;
  }
  ${Ge(qe.md)} {
    display: none;
  }
`,_i=y.button`
  font-family: 'Gideon Roman', serif;
  font-size: 16px;
  cursor: pointer;
  color: ${n=>n.$active?st.white:"rgba(255,255,255,.6)"};
  background: none;
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: color 0.2s, box-shadow 0.2s;

  &:hover,
  &:focus-visible {
    color: #ff2222;
    outline: none;
  }
`,Uh=y.button`
  padding: 12px 28px;
  border: none;
  border-radius: 999px;
  background: ${st.red};
  color: ${st.white};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${st.redHover};
    box-shadow: 0 4px 28px rgba(120, 20, 20, 0.5);
  }

  ${Ge(qe.md)} {
    display: none;
  }
`,b5=y.button`
  display: none;
  background: none;
  border: none;
  color: ${st.white};
  padding: 8px;
  cursor: pointer;
  z-index: 300;

  ${Ge(qe.md)} {
    display: block;
  }
`,S5=y.div`
  display: none;

  ${Ge(qe.md)} {
    display: ${n=>n.$open?"block":"none"};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 299;
    animation: ${Nm} 0.2s;
  }
`,x5=y.aside`
  display: none;

  ${Ge(qe.md)} {
    display: ${n=>n.$open?"flex":"none"};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: ${tt.drawerWidthVw}vw;
    max-width: ${tt.drawerMaxWidth}px;
    height: 100vh;
    background: rgba(26, 34, 56, 0.98);
    box-shadow: -2px 0 24px 0 rgba(0, 0, 0, 0.18);
    z-index: 300;
    padding: 32px 24px 24px;
    animation: ${Nm} 0.2s;
  }
`,$5=y.button`
  background: none;
  border: none;
  color: ${st.white};
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`,w5=y.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: ${tt.heroMinHeight}px;
  overflow: hidden;
  margin-top: ${tt.navHeight}px;

  ${Ge(qe.md)} {
    margin-top: ${tt.navHeightMobile}px;
  }
`,z5=y.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`,T5=y.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    ${st.bg} 0%,
    rgba(26, 34, 56, 0.6) 30%,
    rgba(26, 34, 56, 0.15) 60%,
    rgba(26, 34, 56, 0.05) 100%
  );
`,E5=y.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: 0 ${tt.navPaddingX}px ${Lh.contentBottomPadding}px;
  animation: ${f5} 1s ease-out 0.6s both;

  ${Ge(qe.md)} {
    padding: 0 24px ${Lh.contentBottomPaddingMobile}px;
  }
`,j5=y.div`
  font-family: 'Katibeh', cursive;
  font-size: 64px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: -10px;

  ${Ge(qe.md)} {
    font-size: 40px;
    margin-bottom: -6px;
  }
`,O5=y.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`,A5=y.h1`
  font-family: 'Katibeh', cursive;
  font-size: 164px;
  font-weight: 400;
  line-height: 0.9;
  color: ${st.white};
  margin: 0;

  ${Ge(qe.xl)} {
    font-size: 120px;
  }
  ${Ge(qe.md)} {
    font-size: 80px;
  }
  ${Ge(qe.sm)} {
    font-size: 56px;
  }
`,_5=y.span`
  font-family: 'Katibeh', cursive;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.8);

  ${Ge(qe.md)} {
    font-size: 40px;
  }
`,k5=y.div`
  display: flex;
  gap: 16px;
  margin-top: -40px;

  ${Ge(qe.md)} {
    margin-top: -20px;
  }
  ${Ge(qe.sm)} {
    margin-top: -12px;
  }
`,Um=Ui`
  padding: 14px 38px;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  ${Ge(qe.sm)} {
    padding: 12px 28px;
    font-size: 14px;
  }
`,C5=y.button`
  ${Um};
  border: none;
  background: ${st.red};
  color: ${st.white};
  font-weight: 600;

  &:hover {
    background: ${st.redHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(120, 20, 20, 0.5);
  }
`,M5=y.button`
  ${Um};
  background: rgba(255, 255, 255, 0.04);
  color: ${st.white};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`,Bh=y.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: ${tt.sectionPaddingY}px ${tt.sectionPaddingX}px;
  overflow: hidden;
  flex-direction: ${n=>n.$reverse?"row-reverse":"row"};
  background: ${st.bg};
  ${n=>n.$pullUp?"margin-top: -100px;":""}

  ${Ge(qe.lg)} {
    flex-direction: column;
    padding: ${tt.sectionPaddingYMobile}px ${tt.sectionPaddingXMobile}px;
    min-height: auto;
    margin-top: 0;
  }
`,Gh=y.img`
  position: absolute;
  ${n=>n.$side==="left"?"left: 0;":"right: 0;"}
  ${n=>n.$side==="left"?"top: 0;":"bottom: 0;"}
  width: ${n=>n.$w??"100%"};
  height: 100%;
  object-fit: ${n=>n.$fit??"contain"};
  object-position: ${n=>n.$side==="left"?"left top":"right bottom"};
  z-index: 0;
  opacity: 0.48;
  pointer-events: none;
`,qh=y.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;

  opacity: ${n=>n.$visible?1:0};
  transform: translateY(${n=>n.$visible?"0":"50px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  position: relative;

  img {
    max-height: 85vh;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4));
    animation: ${d5} 5s ease-in-out infinite;
    transition: filter 0.3s, transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px ${n=>n.$highlight??"#fff"})
      drop-shadow(0 0 24px ${n=>n.$highlight??"#fff"});
  }

  ${Ge(qe.lg)} {
    flex: none;
    margin-bottom: 32px;
    img {
      max-height: 50vh;
    }
  }
`,Yh=y.div`
  flex: 1;
  z-index: 1;
  padding: 0 48px;

  opacity: ${n=>n.$visible?1:0};
  transform: translateX(${n=>n.$visible?"0":"40px"});
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;

  ${Ge(qe.lg)} {
    padding: 0;
    text-align: center;
    transform: translateY(${n=>n.$visible?"0":"30px"});
  }
`,Vh=y.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 36px;
  font-weight: 400;
  margin: 0 0 20px;
  color: ${st.white};
`,Xh=y.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  max-width: 480px;

  ${Ge(qe.lg)} {
    margin: 0 auto;
  }
`,D5=y.div`
  display: block;
  text-align: center;
  margin: 0 auto 32px;
  position: relative;
  width: 100%;
`,H5=y.img`
  display: block;
  margin: 0 0 40px 0;
  width: 320px;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: filter 0.4s, box-shadow 0.4s;

  ${Ge(qe.lg)} {
    width: 180px;
    margin-bottom: 24px;
  }
  ${Ge(qe.md)} {
    display: none !important;
  }
`,R5=y.div`
  position: relative;
  display: block;
  width: 260px;
  margin: 0 0 12px auto;
  transform: translateX(-35%) translateY(-5%);
  cursor: pointer;

  ${Ge(qe.md)} {
    display: none !important;
  }
`,Qh=y.img`
  width: 100%;
  display: block;
  transition: opacity 0.35s ease;
  opacity: ${n=>n.$visible?1:0};
  ${n=>n.$visible?Ui`
          position: relative;
        `:Ui`
          position: absolute;
          inset: 0;
        `}
`,Zh=y.div`
  position: absolute;
  left: ${n=>n.$xPct}%;
  bottom: ${ki.bottomOffset}px;
  width: ${n=>n.$size}px;
  height: ${n=>n.$size}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  animation: ${p5} ${n=>n.$duration}s linear infinite;
  animation-delay: ${n=>n.$delay}s;
`,L5=y.footer`
  position: relative;
  background: ${st.bg};
  padding: 0 ${tt.footerPaddingX}px 36px;
  overflow: hidden;

  ${Ge(qe.md)} {
    padding: 0 ${tt.footerPaddingXMobile}px 28px;
  }
`,N5=y.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 48px;
`,U5=y.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;

  ${Ge(640)} {
    gap: 28px;
  }
`,B5=y.div`
  max-width: 200px;
  flex-shrink: 0;
`,G5=y.h3`
  font-family: 'Gideon Roman', serif;
  font-size: 36px;
  font-weight: 400;
  color: ${st.white};
  margin: 0 0 4px;
  letter-spacing: 3px;
`,q5=y.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 20px;
`,Y5=y.div`
  display: flex;
  gap: 12px;
`,mu=y.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: ${st.white};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`,yu=y.div`
  min-width: 120px;
`,vu=y.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${st.white};
  margin: 0 0 16px;
`,$n=y.a`
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  margin-bottom: 12px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`,V5=y.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${tt.footerCharHeight}px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom left;
  }

  ${Ge(qe.md)} {
    height: ${tt.footerCharHeightMobile}px;
  }
`,X5=y.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: ${tt.footerCharHeight}px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom right;
  }

  ${Ge(qe.md)} {
    height: ${tt.footerCharHeightMobile}px;
  }
`,Q5=y.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);

  ${Ge(640)} {
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
`,Z5=({onBack:n})=>{const{t:o}=_t(),u=o.landingHpVsVader,[s,m]=je.useState(!1),[b,M]=je.useState(!1),[G,k]=je.useState(!1),A=Nh({threshold:.15,once:!0}),X=Nh({threshold:.15,once:!0}),W=je.useMemo(()=>window.innerWidth<=qe.md?tt.navHeightMobile:tt.navHeight,[]),le=je.useMemo(()=>{const ne=(V,de)=>V+Math.random()*(de-V);return Array.from({length:ki.count},(V,de)=>({key:`p-${de}`,xPct:ne(0,100),delay:ne(0,8),size:ne(ki.minSize,ki.maxSize),duration:ne(ki.minDuration,ki.maxDuration)}))},[]);je.useEffect(()=>{if(!s)return;const ne=V=>{V.key==="Escape"&&m(!1)};return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[s]);const re=ne=>{m(!1),g5(ne,W)};return d.jsxs(h5,{children:[d.jsxs(y5,{children:[d.jsxs(m5,{onClick:n,children:[d.jsx(mn,{size:16}),u.backToPortfolio]}),d.jsxs(v5,{children:[d.jsx(_i,{$active:!0,onClick:()=>re("home"),children:u.navHome}),d.jsx(_i,{onClick:()=>re("harry"),children:u.navGame}),d.jsx(_i,{onClick:()=>re("contact"),children:u.navContact})]}),d.jsx(Uh,{onClick:()=>re("harry"),children:u.playNow}),d.jsx(b5,{"aria-label":"Open menu",onClick:()=>m(!0),children:d.jsx(Sm,{size:28})}),d.jsx(S5,{$open:s,onClick:()=>m(!1)}),d.jsxs(x5,{$open:s,"aria-label":"Mobile menu",children:[d.jsx($5,{"aria-label":"Close menu",onClick:()=>m(!1),children:d.jsx(Nu,{size:28})}),d.jsx(_i,{style:{margin:"32px 0 0",fontSize:20},$active:!0,onClick:()=>re("home"),children:u.navHome}),d.jsx(_i,{style:{margin:"18px 0 0",fontSize:20},onClick:()=>re("harry"),children:u.navGame}),d.jsx(_i,{style:{margin:"18px 0 0",fontSize:20},onClick:()=>re("contact"),children:u.navContact}),d.jsx(Uh,{style:{display:"block",margin:"32px 0 0",width:"100%"},onClick:()=>re("harry"),children:u.playNow})]})]}),d.jsxs(w5,{id:"home",children:[d.jsx(z5,{src:pn.heroVideo,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),d.jsx(T5,{}),d.jsxs(E5,{children:[d.jsx(j5,{children:u.enterThe}),d.jsxs(O5,{children:[d.jsx(A5,{children:u.gameWorld}),d.jsx(_5,{children:"WORLD"})]}),d.jsxs(k5,{children:[d.jsx(C5,{onClick:()=>re("harry"),children:u.playNow}),d.jsx(M5,{onClick:()=>re("vader"),children:u.characters})]})]})]}),d.jsxs(Bh,{id:"harry",ref:A.ref,children:[d.jsx(Gh,{src:pn.backHogwarts,alt:"Hogwarts Castle",$side:"right",$fit:"contain"}),le.map(ne=>d.jsx(Zh,{$xPct:ne.xPct,$delay:ne.delay,$size:ne.size,$duration:ne.duration},`harry-${ne.key}`)),d.jsxs(Yh,{$visible:A.visible,children:[d.jsx(D5,{children:d.jsx(H5,{src:b?pn.wandLight:pn.wand,alt:"Harry Potter's wand",onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1)})}),d.jsx(Vh,{children:u.harryTitle}),d.jsxs(Xh,{children:[u.harryDesc," ",u.harryWeapon??""]})]}),d.jsx(qh,{$visible:A.visible,$highlight:"#f5c542",children:d.jsx("img",{src:pn.potterFull,alt:"Harry Potter"})})]}),d.jsxs(Bh,{id:"vader",$reverse:!0,$pullUp:!0,ref:X.ref,children:[d.jsx(Gh,{src:pn.backPlane,alt:"Plane Background",$side:"left",$fit:"cover",$w:"65%"}),le.map(ne=>d.jsx(Zh,{$xPct:ne.xPct,$delay:ne.delay,$size:ne.size,$duration:ne.duration},`vader-${ne.key}`)),d.jsxs(Yh,{$visible:X.visible,children:[d.jsxs(R5,{onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[d.jsx(Qh,{src:pn.saber,alt:"Darth Vader lightsaber",$visible:!G}),d.jsx(Qh,{src:pn.saberLight,alt:"Darth Vader lightsaber (light)",$visible:G})]}),d.jsx(Vh,{style:{marginLeft:32},children:u.vaderTitle}),d.jsxs(Xh,{style:{marginLeft:32},children:[u.vaderDesc," ",u.vaderWeapon??""]})]}),d.jsx(qh,{$visible:X.visible,$highlight:"#ff2020",children:d.jsx("img",{src:pn.vaderFull,alt:"Darth Vader"})})]}),d.jsx(c5,{}),d.jsxs(L5,{id:"contact",children:[d.jsx(N5,{}),d.jsx(V5,{children:d.jsx("img",{src:pn.potterPart2,alt:""})}),d.jsx(X5,{children:d.jsx("img",{src:pn.vaderPart2,alt:""})}),d.jsxs(U5,{children:[d.jsxs(B5,{children:[d.jsx(G5,{children:u.footerTitle}),d.jsx(q5,{children:u.footerSubtitle}),d.jsxs(Y5,{children:[d.jsx(mu,{href:"#","aria-label":"Instagram",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5"})]})}),d.jsx(mu,{href:"#","aria-label":"LinkedIn",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),d.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),d.jsx(mu,{href:"#","aria-label":"X",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),d.jsxs(yu,{children:[d.jsx(vu,{children:u.features}),d.jsx($n,{href:"#",children:u.coreFeatures}),d.jsx($n,{href:"#",children:u.proExperience}),d.jsx($n,{href:"#",children:u.integrations})]}),d.jsxs(yu,{children:[d.jsx(vu,{children:u.learnMore}),d.jsx($n,{href:"#",children:u.blog}),d.jsx($n,{href:"#",children:u.caseStudies}),d.jsx($n,{href:"#",children:u.customerStories}),d.jsx($n,{href:"#",children:u.bestPractices})]}),d.jsxs(yu,{children:[d.jsx(vu,{children:u.support}),d.jsx($n,{href:"#",children:u.contact}),d.jsx($n,{href:"#",children:u.supportLink}),d.jsx($n,{href:"#",children:u.legal})]})]}),d.jsxs(Q5,{children:[d.jsx("span",{children:"© 2026 Game World. All rights reserved."}),d.jsx("span",{children:"Privacy Policy · Terms of Service"})]})]})]})},K5=y.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${_.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${_.zIndex.progress};
  transition: width 0.1s ease;
`,P5=()=>{const[n,o]=je.useState(0);return je.useEffect(()=>{const u=()=>{const s=document.body.scrollTop||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=m>0?s/m*100:0;o(b)};return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),d.jsx(K5,{$width:n})},W5=Tn`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,I5=y.div`
  min-height: ${_.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,J5=y.div`
  position: fixed;
  inset: 0;
  z-index: ${_.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,bu=y.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${_.effects.blurBlob});
  opacity: ${_.effects.blobOpacity};
  animation: ${W5} 3s ease-in-out infinite;

  ${({$position:n})=>n==="top-left"&&`
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${_.effects.blobBlue};
    `}

  ${({$position:n})=>n==="top-right"&&`
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${_.effects.blobPurple};
      animation: none;
    `}

  ${({$position:n})=>n==="bottom-left"&&`
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${_.effects.blobPink};
      animation: none;
    `}
`,F5=y.div`
  position: relative;
  z-index: ${_.zIndex.foreground};
`,ez=y.div`
  position: fixed;
  right: ${({theme:n})=>n.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${_.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[1]};
  padding: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${_.effects.glassWhite80};
  backdrop-filter: blur(${_.effects.blurGlass});
  box-shadow: ${({theme:n})=>n.shadows.md};
  border: ${_.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Kh=y.button`
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
`,tz=()=>{const{lang:n,setLang:o,t:u}=_t();return d.jsxs(ez,{children:[d.jsx(Kh,{$active:n==="en",onClick:()=>o("en"),title:u.languageSwitch.enTitle,children:u.languageSwitch.enShort}),d.jsx(Kh,{$active:n==="uk",onClick:()=>o("uk"),title:u.languageSwitch.ukTitle,children:u.languageSwitch.ukShort})]})};function nz(){const[n,o]=je.useState(Re.PORTFOLIO),[u,s]=je.useState(rn.HERO),m="app-icons",b="app-store-screenshots",M="namelaka",G="mindzy",k="marketing-video",A="elemental-quest",X="combat-planes",W="fatty-fish",le="landing-hp-vs-vader";je.useEffect(()=>{const V=()=>{if(!window.location.hash)return;const de=window.location.hash.replace("#","");if(de===m){o(Re.APP_ICONS);return}if(de===b){o(Re.APP_STORE_SCREENSHOTS);return}if(de===M){o(Re.NAMELAKA);return}if(de===G){o(Re.MINDZY);return}if(de===k){o(Re.MARKETING_VIDEO);return}if(de===A){o(Re.ELEMENTAL_QUEST);return}if(de===X){o(Re.COMBAT_PLANES);return}if(de===W){o(Re.FATTY_FISH);return}if(de===le){o(Re.LANDING_HP_VS_VADER);return}const ue=de,ge=document.getElementById(ue);ge&&(o(Re.PORTFOLIO),s(ue),ge.scrollIntoView({behavior:"smooth",block:"start"}))};return V(),window.addEventListener("hashchange",V),()=>window.removeEventListener("hashchange",V)},[]),je.useEffect(()=>{if(n!==Re.PORTFOLIO)return;const V=document.getElementById(u);V&&V.scrollIntoView({behavior:"smooth",block:"start"})},[n,u]),je.useEffect(()=>{(n===Re.APP_ICONS||n===Re.APP_STORE_SCREENSHOTS||n===Re.NAMELAKA||n===Re.MINDZY||n===Re.MARKETING_VIDEO||n===Re.ELEMENTAL_QUEST||n===Re.COMBAT_PLANES||n===Re.FATTY_FISH||n===Re.LANDING_HP_VS_VADER)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const re=V=>{o(Re.PORTFOLIO),s(V),window.history.pushState(null,"",`#${V}`);const de=document.getElementById(V);de&&de.scrollIntoView({behavior:"smooth",block:"start"})},ne=()=>{o(Re.PORTFOLIO),s(rn.WORK),window.history.pushState(null,"",`#${rn.WORK}`);const V=document.getElementById(rn.WORK);V&&V.scrollIntoView({behavior:"smooth",block:"start"})};return d.jsxs(I5,{children:[d.jsxs(J5,{children:[d.jsx(bu,{$position:"top-left"}),d.jsx(bu,{$position:"top-right"}),d.jsx(bu,{$position:"bottom-left"})]}),d.jsxs(F5,{children:[d.jsx(P5,{}),n===Re.PORTFOLIO&&d.jsxs(d.Fragment,{children:[d.jsx(tz,{}),d.jsx(z1,{onNavigate:re})]}),n===Re.PORTFOLIO?d.jsxs(d.Fragment,{children:[d.jsxs("main",{children:[d.jsx(B1,{}),d.jsx(LS,{}),d.jsx(cx,{})]}),d.jsx(yx,{})]}):n===Re.APP_ICONS?d.jsx(z$,{onBack:ne}):n===Re.APP_STORE_SCREENSHOTS?d.jsx(q$,{onBack:ne}):n===Re.NAMELAKA?d.jsx(n2,{onBack:ne}):n===Re.MINDZY?d.jsx(j2,{onBack:ne}):n===Re.MARKETING_VIDEO?d.jsx(W2,{onBack:ne}):n===Re.ELEMENTAL_QUEST?d.jsx(hw,{onBack:ne}):n===Re.COMBAT_PLANES?d.jsx(Dw,{onBack:ne}):n===Re.FATTY_FISH?d.jsx(i5,{onBack:ne}):n===Re.LANDING_HP_VS_VADER?d.jsx(Z5,{onBack:ne}):null]})]})}function az(){return d.jsx(o1,{children:d.jsx(nz,{})})}const iz=bb`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: ${_.layout.fullViewportHeight};
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
    width: ${_.sizing.scrollbarWidth};
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
`,lz={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},rz={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},oz={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},sz={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},cz={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},uz={container:"1280px"},fz={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},dz={colors:lz,spacing:rz,radii:oz,shadows:sz,typography:cz,layout:uz,breakpoints:fz},Bm=document.getElementById("root");if(!Bm)throw new Error("Could not find root element to mount to");const pz=yv.createRoot(Bm);pz.render(d.jsx(yt.StrictMode,{children:d.jsxs(mb,{theme:dz,children:[d.jsx(iz,{}),d.jsx(az,{})]})}));
