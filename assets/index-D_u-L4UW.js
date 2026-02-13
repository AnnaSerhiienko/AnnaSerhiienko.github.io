(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))s(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const M of b.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function f(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(y){if(y.ep)return;y.ep=!0;const b=f(y);fetch(y.href,b)}})();var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function F0(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var f=function s(){return this instanceof s?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};f.prototype=o.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var y=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(f,s,y.get?y:{enumerable:!0,get:function(){return n[s]}})}),f}var Yc={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function ev(){if(Dg)return El;Dg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,y,b){var M=null;if(b!==void 0&&(M=""+b),y.key!==void 0&&(M=""+y.key),"key"in y){b={};for(var Y in y)Y!=="key"&&(b[Y]=y[Y])}else b=y;return y=b.ref,{$$typeof:n,type:s,key:M,ref:y!==void 0?y:null,props:b}}return El.Fragment=o,El.jsx=f,El.jsxs=f,El}var Hg;function tv(){return Hg||(Hg=1,Yc.exports=ev()),Yc.exports}var d=tv(),Vc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function nv(){if(Rg)return xe;Rg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),M=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),le=Symbol.iterator;function ce(g){return g===null||typeof g!="object"?null:(g=le&&g[le]||g["@@iterator"],typeof g=="function"?g:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,he={};function ue(g,S,B){this.props=g,this.context=S,this.refs=he,this.updater=B||ae}ue.prototype.isReactComponent={},ue.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},ue.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function pe(){}pe.prototype=ue.prototype;function ne(g,S,B){this.props=g,this.context=S,this.refs=he,this.updater=B||ae}var oe=ne.prototype=new pe;oe.constructor=ne,X(oe,ue.prototype),oe.isPureReactComponent=!0;var w=Array.isArray;function z(){}var x={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function _(g,S,B){var H=B.ref;return{$$typeof:n,type:g,key:S,ref:H!==void 0?H:null,props:B}}function v(g,S){return _(g.type,S,g.props)}function q(g){return typeof g=="object"&&g!==null&&g.$$typeof===n}function Z(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(B){return S[B]})}var R=/\/+/g;function P(g,S){return typeof g=="object"&&g!==null&&g.key!=null?Z(""+g.key):S.toString(36)}function ee(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(z,z):(g.status="pending",g.then(function(S){g.status==="pending"&&(g.status="fulfilled",g.value=S)},function(S){g.status==="pending"&&(g.status="rejected",g.reason=S)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function E(g,S,B,H,J){var K=typeof g;(K==="undefined"||K==="boolean")&&(g=null);var te=!1;if(g===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(g.$$typeof){case n:case o:te=!0;break;case N:return te=g._init,E(te(g._payload),S,B,H,J)}}if(te)return J=J(g),te=H===""?"."+P(g,0):H,w(J)?(B="",te!=null&&(B=te.replace(R,"$&/")+"/"),E(J,S,B,"",function(Se){return Se})):J!=null&&(q(J)&&(J=v(J,B+(J.key==null||g&&g.key===J.key?"":(""+J.key).replace(R,"$&/")+"/")+te)),S.push(J)),1;te=0;var me=H===""?".":H+":";if(w(g))for(var de=0;de<g.length;de++)H=g[de],K=me+P(H,de),te+=E(H,S,B,K,J);else if(de=ce(g),typeof de=="function")for(g=de.call(g),de=0;!(H=g.next()).done;)H=H.value,K=me+P(H,de++),te+=E(H,S,B,K,J);else if(K==="object"){if(typeof g.then=="function")return E(ee(g),S,B,H,J);throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return te}function u(g,S,B){if(g==null)return g;var H=[],J=0;return E(g,H,"","",function(K){return S.call(B,K,J++)}),H}function ie(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(B){(g._status===0||g._status===-1)&&(g._status=1,g._result=B)},function(B){(g._status===0||g._status===-1)&&(g._status=2,g._result=B)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var T=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},p={map:u,forEach:function(g,S,B){u(g,function(){S.apply(this,arguments)},B)},count:function(g){var S=0;return u(g,function(){S++}),S},toArray:function(g){return u(g,function(S){return S})||[]},only:function(g){if(!q(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return xe.Activity=W,xe.Children=p,xe.Component=ue,xe.Fragment=f,xe.Profiler=y,xe.PureComponent=ne,xe.StrictMode=s,xe.Suspense=k,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,xe.__COMPILER_RUNTIME={__proto__:null,c:function(g){return x.H.useMemoCache(g)}},xe.cache=function(g){return function(){return g.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(g,S,B){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=X({},g.props),J=g.key;if(S!=null)for(K in S.key!==void 0&&(J=""+S.key),S)!D.call(S,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&S.ref===void 0||(H[K]=S[K]);var K=arguments.length-2;if(K===1)H.children=B;else if(1<K){for(var te=Array(K),me=0;me<K;me++)te[me]=arguments[me+2];H.children=te}return _(g.type,J,H)},xe.createContext=function(g){return g={$$typeof:M,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},xe.createElement=function(g,S,B){var H,J={},K=null;if(S!=null)for(H in S.key!==void 0&&(K=""+S.key),S)D.call(S,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(J[H]=S[H]);var te=arguments.length-2;if(te===1)J.children=B;else if(1<te){for(var me=Array(te),de=0;de<te;de++)me[de]=arguments[de+2];J.children=me}if(g&&g.defaultProps)for(H in te=g.defaultProps,te)J[H]===void 0&&(J[H]=te[H]);return _(g,K,J)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(g){return{$$typeof:Y,render:g}},xe.isValidElement=q,xe.lazy=function(g){return{$$typeof:N,_payload:{_status:-1,_result:g},_init:ie}},xe.memo=function(g,S){return{$$typeof:A,type:g,compare:S===void 0?null:S}},xe.startTransition=function(g){var S=x.T,B={};x.T=B;try{var H=g(),J=x.S;J!==null&&J(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(z,T)}catch(K){T(K)}finally{S!==null&&B.types!==null&&(S.types=B.types),x.T=S}},xe.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},xe.use=function(g){return x.H.use(g)},xe.useActionState=function(g,S,B){return x.H.useActionState(g,S,B)},xe.useCallback=function(g,S){return x.H.useCallback(g,S)},xe.useContext=function(g){return x.H.useContext(g)},xe.useDebugValue=function(){},xe.useDeferredValue=function(g,S){return x.H.useDeferredValue(g,S)},xe.useEffect=function(g,S){return x.H.useEffect(g,S)},xe.useEffectEvent=function(g){return x.H.useEffectEvent(g)},xe.useId=function(){return x.H.useId()},xe.useImperativeHandle=function(g,S,B){return x.H.useImperativeHandle(g,S,B)},xe.useInsertionEffect=function(g,S){return x.H.useInsertionEffect(g,S)},xe.useLayoutEffect=function(g,S){return x.H.useLayoutEffect(g,S)},xe.useMemo=function(g,S){return x.H.useMemo(g,S)},xe.useOptimistic=function(g,S){return x.H.useOptimistic(g,S)},xe.useReducer=function(g,S,B){return x.H.useReducer(g,S,B)},xe.useRef=function(g){return x.H.useRef(g)},xe.useState=function(g){return x.H.useState(g)},xe.useSyncExternalStore=function(g,S,B){return x.H.useSyncExternalStore(g,S,B)},xe.useTransition=function(){return x.H.useTransition()},xe.version="19.2.3",xe}var Lg;function bn(){return Lg||(Lg=1,Vc.exports=nv()),Vc.exports}var Oe=bn();const pt=zu(Oe);var Xc={exports:{}},_l={},Qc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function av(){return Ng||(Ng=1,(function(n){function o(E,u){var ie=E.length;E.push(u);e:for(;0<ie;){var T=ie-1>>>1,p=E[T];if(0<y(p,u))E[T]=u,E[ie]=p,ie=T;else break e}}function f(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var u=E[0],ie=E.pop();if(ie!==u){E[0]=ie;e:for(var T=0,p=E.length,g=p>>>1;T<g;){var S=2*(T+1)-1,B=E[S],H=S+1,J=E[H];if(0>y(B,ie))H<p&&0>y(J,B)?(E[T]=J,E[H]=ie,T=H):(E[T]=B,E[S]=ie,T=S);else if(H<p&&0>y(J,ie))E[T]=J,E[H]=ie,T=H;else break e}}return u}function y(E,u){var ie=E.sortIndex-u.sortIndex;return ie!==0?ie:E.id-u.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;n.unstable_now=function(){return b.now()}}else{var M=Date,Y=M.now();n.unstable_now=function(){return M.now()-Y}}var k=[],A=[],N=1,W=null,le=3,ce=!1,ae=!1,X=!1,he=!1,ue=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function oe(E){for(var u=f(A);u!==null;){if(u.callback===null)s(A);else if(u.startTime<=E)s(A),u.sortIndex=u.expirationTime,o(k,u);else break;u=f(A)}}function w(E){if(X=!1,oe(E),!ae)if(f(k)!==null)ae=!0,z||(z=!0,Z());else{var u=f(A);u!==null&&ee(w,u.startTime-E)}}var z=!1,x=-1,D=5,_=-1;function v(){return he?!0:!(n.unstable_now()-_<D)}function q(){if(he=!1,z){var E=n.unstable_now();_=E;var u=!0;try{e:{ae=!1,X&&(X=!1,pe(x),x=-1),ce=!0;var ie=le;try{t:{for(oe(E),W=f(k);W!==null&&!(W.expirationTime>E&&v());){var T=W.callback;if(typeof T=="function"){W.callback=null,le=W.priorityLevel;var p=T(W.expirationTime<=E);if(E=n.unstable_now(),typeof p=="function"){W.callback=p,oe(E),u=!0;break t}W===f(k)&&s(k),oe(E)}else s(k);W=f(k)}if(W!==null)u=!0;else{var g=f(A);g!==null&&ee(w,g.startTime-E),u=!1}}break e}finally{W=null,le=ie,ce=!1}u=void 0}}finally{u?Z():z=!1}}}var Z;if(typeof ne=="function")Z=function(){ne(q)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,P=R.port2;R.port1.onmessage=q,Z=function(){P.postMessage(null)}}else Z=function(){ue(q,0)};function ee(E,u){x=ue(function(){E(n.unstable_now())},u)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(E){E.callback=null},n.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<E?Math.floor(1e3/E):5},n.unstable_getCurrentPriorityLevel=function(){return le},n.unstable_next=function(E){switch(le){case 1:case 2:case 3:var u=3;break;default:u=le}var ie=le;le=u;try{return E()}finally{le=ie}},n.unstable_requestPaint=function(){he=!0},n.unstable_runWithPriority=function(E,u){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var ie=le;le=E;try{return u()}finally{le=ie}},n.unstable_scheduleCallback=function(E,u,ie){var T=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?T+ie:T):ie=T,E){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=ie+p,E={id:N++,callback:u,priorityLevel:E,startTime:ie,expirationTime:p,sortIndex:-1},ie>T?(E.sortIndex=ie,o(A,E),f(k)===null&&E===f(A)&&(X?(pe(x),x=-1):X=!0,ee(w,ie-T))):(E.sortIndex=p,o(k,E),ae||ce||(ae=!0,z||(z=!0,Z()))),E},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(E){var u=le;return function(){var ie=le;le=u;try{return E.apply(this,arguments)}finally{le=ie}}}})(Zc)),Zc}var Ug;function iv(){return Ug||(Ug=1,Qc.exports=av()),Qc.exports}var Kc={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function lv(){if(Bg)return Tt;Bg=1;var n=bn();function o(k){var A="https://react.dev/errors/"+k;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)A+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+k+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},y=Symbol.for("react.portal");function b(k,A,N){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:W==null?null:""+W,children:k,containerInfo:A,implementation:N}}var M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(k,A){if(k==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tt.createPortal=function(k,A){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(o(299));return b(k,A,null,N)},Tt.flushSync=function(k){var A=M.T,N=s.p;try{if(M.T=null,s.p=2,k)return k()}finally{M.T=A,s.p=N,s.d.f()}},Tt.preconnect=function(k,A){typeof k=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,s.d.C(k,A))},Tt.prefetchDNS=function(k){typeof k=="string"&&s.d.D(k)},Tt.preinit=function(k,A){if(typeof k=="string"&&A&&typeof A.as=="string"){var N=A.as,W=Y(N,A.crossOrigin),le=typeof A.integrity=="string"?A.integrity:void 0,ce=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;N==="style"?s.d.S(k,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:W,integrity:le,fetchPriority:ce}):N==="script"&&s.d.X(k,{crossOrigin:W,integrity:le,fetchPriority:ce,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Tt.preinitModule=function(k,A){if(typeof k=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var N=Y(A.as,A.crossOrigin);s.d.M(k,{crossOrigin:N,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&s.d.M(k)},Tt.preload=function(k,A){if(typeof k=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var N=A.as,W=Y(N,A.crossOrigin);s.d.L(k,N,{crossOrigin:W,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Tt.preloadModule=function(k,A){if(typeof k=="string")if(A){var N=Y(A.as,A.crossOrigin);s.d.m(k,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:N,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else s.d.m(k)},Tt.requestFormReset=function(k){s.d.r(k)},Tt.unstable_batchedUpdates=function(k,A){return k(A)},Tt.useFormState=function(k,A,N){return M.H.useFormState(k,A,N)},Tt.useFormStatus=function(){return M.H.useHostTransitionStatus()},Tt.version="19.2.3",Tt}var Gg;function rv(){if(Gg)return Kc.exports;Gg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Kc.exports=lv(),Kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function ov(){if(qg)return _l;qg=1;var n=iv(),o=bn(),f=rv();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(b(e)!==e)throw Error(s(188))}function A(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return k(l),e;if(r===i)return k(l),t;r=r.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=r;else{for(var c=!1,h=l.child;h;){if(h===a){c=!0,a=l,i=r;break}if(h===i){c=!0,i=l,a=r;break}h=h.sibling}if(!c){for(h=r.child;h;){if(h===a){c=!0,a=r,i=l;break}if(h===i){c=!0,i=r,a=l;break}h=h.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var W=Object.assign,le=Symbol.for("react.element"),ce=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ue:return"Profiler";case he:return"StrictMode";case w:return"Suspense";case z:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case ne:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return t=e.displayName||null,t!==null?t:P(e.type)||"Memo";case D:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var ee=Array.isArray,E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,u=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},T=[],p=-1;function g(e){return{current:e}}function S(e){0>p||(e.current=T[p],T[p]=null,p--)}function B(e,t){p++,T[p]=e.current,e.current=t}var H=g(null),J=g(null),K=g(null),te=g(null);function me(e,t){switch(B(K,t),B(J,e),B(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ag(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ag(t),e=ig(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(H),B(H,e)}function de(){S(H),S(J),S(K)}function Se(e){e.memoizedState!==null&&B(te,e);var t=H.current,a=ig(t,e.type);t!==a&&(B(J,e),B(H,a))}function Ee(e){J.current===e&&(S(H),S(J)),te.current===e&&(S(te),wl._currentValue=ie)}var $e,_e;function be(e){if($e===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$e=t&&t[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+_e}var ze=!1;function Je(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(V){var G=V}Reflect.construct(e,[],F)}else{try{F.call()}catch(V){G=V}e.call(F.prototype)}}else{try{throw Error()}catch(V){G=V}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(V){if(V&&G&&typeof V.stack=="string")return[V.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),c=r[0],h=r[1];if(c&&h){var $=c.split(`
`),U=h.split(`
`);for(l=i=0;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;for(;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;if(i===$.length||l===U.length)for(i=$.length-1,l=U.length-1;1<=i&&0<=l&&$[i]!==U[l];)l--;for(;1<=i&&0<=l;i--,l--)if($[i]!==U[l]){if(i!==1||l!==1)do if(i--,l--,0>l||$[i]!==U[l]){var Q=`
`+$[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return be("Activity");default:return""}}function Ie(e){try{var t="",a=null;do t+=Ae(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fe=Object.prototype.hasOwnProperty,nt=n.unstable_scheduleCallback,yt=n.unstable_cancelCallback,Sn=n.unstable_shouldYield,Ua=n.unstable_requestPaint,zt=n.unstable_now,ha=n.unstable_getCurrentPriorityLevel,Gl=n.unstable_ImmediatePriority,ln=n.unstable_UserBlockingPriority,dn=n.unstable_NormalPriority,Dm=n.unstable_LowPriority,Ru=n.unstable_IdlePriority,Hm=n.log,Rm=n.unstable_setDisableYieldValue,Hi=null,Ht=null;function Gn(e){if(typeof Hm=="function"&&Rm(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Hi,e)}catch{}}var Rt=Math.clz32?Math.clz32:Um,Lm=Math.log,Nm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Lm(e)/Nm|0)|0}var ql=256,Yl=262144,Vl=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?l=ma(i):(c&=h,c!==0?l=ma(c):a||(a=h&~e,a!==0&&(l=ma(a))))):(h=i&~r,h!==0?l=ma(h):c!==0?l=ma(c):a||(a=i&~e,a!==0&&(l=ma(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Ri(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lu(){var e=Vl;return Vl<<=1,(Vl&62914560)===0&&(Vl=4194304),e}function ko(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gm(e,t,a,i,l,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,$=e.expirationTimes,U=e.hiddenUpdates;for(a=c&~a;0<a;){var Q=31-Rt(a),F=1<<Q;h[Q]=0,$[Q]=-1;var G=U[Q];if(G!==null)for(U[Q]=null,Q=0;Q<G.length;Q++){var V=G[Q];V!==null&&(V.lane&=-536870913)}a&=~F}i!==0&&Nu(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Nu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Uu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Rt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function Bu(e,t){var a=t&-t;return a=(a&42)!==0?1:Co(a),(a&(e.suspendedLanes|t))!==0?0:a}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gu(){var e=u.p;return e!==0?e:(e=window.event,e===void 0?32:Eg(e.type))}function qu(e,t){var a=u.p;try{return u.p=e,t()}finally{u.p=a}}var qn=Math.random().toString(36).slice(2),vt="__reactFiber$"+qn,_t="__reactProps$"+qn,Ba="__reactContainer$"+qn,Do="__reactEvents$"+qn,qm="__reactListeners$"+qn,Ym="__reactHandles$"+qn,Yu="__reactResources$"+qn,Ni="__reactMarker$"+qn;function Ho(e){delete e[vt],delete e[_t],delete e[Do],delete e[qm],delete e[Ym]}function Ga(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ba]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=fg(e);e!==null;){if(a=e[vt])return a;e=fg(e)}return t}e=a,a=e.parentNode}return null}function qa(e){if(e=e[vt]||e[Ba]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ui(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ya(e){var t=e[Yu];return t||(t=e[Yu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[Ni]=!0}var Vu=new Set,Xu={};function ya(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Xu[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var Vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qu={},Zu={};function Xm(e){return Fe.call(Zu,e)?!0:Fe.call(Qu,e)?!1:Vm.test(e)?Zu[e]=!0:(Qu[e]=!0,!1)}function Ql(e,t,a){if(Xm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){if(!e._valueTracker){var t=Ku(e)?"checked":"value";e._valueTracker=Qm(e,t,""+e[t])}}function Wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Ku(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zm=/[\n"\\]/g;function Zt(e){return e.replace(Zm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lo(e,t,a,i,l,r,c,h){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?No(e,c,Qt(t)):a!=null?No(e,c,Qt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Qt(h):e.removeAttribute("name")}function Pu(e,t,a,i,l,r,c,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ro(e);return}a=a!=null?""+Qt(a):"",t=t!=null?""+Qt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ro(e)}function No(e,t,a){t==="number"&&Kl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Qt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ju(e,t,a){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Qt(a):""}function Iu(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(ee(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Qt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ro(e)}function Qa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Km=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Km.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ef(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Fu(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Fu(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return Pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $n(){}var Bo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function tf(e){var t=qa(e);if(t&&(e=t.stateNode)){var a=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[_t]||null;if(!l)throw Error(s(90));Lo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Wu(i)}break e;case"textarea":Ju(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xa(e,!!a.multiple,t,!1)}}}var qo=!1;function nf(e,t,a){if(qo)return e(t,a);qo=!0;try{var i=e(t);return i}finally{if(qo=!1,(Za!==null||Ka!==null)&&(Rr(),Za&&(t=Za,e=Ka,Ka=Za=null,tf(t),e)))for(t=0;t<e.length;t++)tf(e[t])}}function Bi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[_t]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(wn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Yo=!1}var Yn=null,Vo=null,Pl=null;function af(){if(Pl)return Pl;var e,t=Vo,a=t.length,i,l="value"in Yn?Yn.value:Yn.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(i=1;i<=c&&t[a-i]===l[r-i];i++);return Pl=l.slice(e,1<i?1-i:void 0)}function Jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function lf(){return!1}function At(e){function t(a,i,l,r,c){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Il:lf,this.isPropagationStopped=lf,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=At(va),qi=W({},va,{view:0,detail:0}),Jm=At(qi),Xo,Qo,Yi,er=W({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(Xo=e.screenX-Yi.screenX,Qo=e.screenY-Yi.screenY):Qo=Xo=0,Yi=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),rf=At(er),Im=W({},er,{dataTransfer:0}),Fm=At(Im),ey=W({},qi,{relatedTarget:0}),Zo=At(ey),ty=W({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=At(ty),ay=W({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iy=At(ay),ly=W({},va,{data:0}),of=At(ly),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function Ko(){return cy}var uy=W({},qi,{key:function(e){if(e.key){var t=ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fy=At(uy),dy=W({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=At(dy),py=W({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),gy=At(py),hy=W({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=At(hy),yy=W({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=At(yy),by=W({},va,{newState:0,oldState:0}),Sy=At(by),xy=[9,13,27,32],Wo=wn&&"CompositionEvent"in window,Vi=null;wn&&"documentMode"in document&&(Vi=document.documentMode);var $y=wn&&"TextEvent"in window&&!Vi,cf=wn&&(!Wo||Vi&&8<Vi&&11>=Vi),uf=" ",ff=!1;function df(e,t){switch(e){case"keyup":return xy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function wy(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(ff=!0,uf);case"textInput":return e=t.data,e===uf&&ff?null:e;default:return null}}function zy(e,t){if(Wa)return e==="compositionend"||!Wo&&df(e,t)?(e=af(),Pl=Vo=Yn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ty[e.type]:t==="textarea"}function hf(e,t,a,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=Yr(t,"onChange"),0<t.length&&(a=new Fl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Xi=null,Qi=null;function jy(e){Jp(e,0)}function tr(e){var t=Ui(e);if(Wu(t))return e}function mf(e,t){if(e==="change")return t}var yf=!1;if(wn){var Po;if(wn){var Jo="oninput"in document;if(!Jo){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Jo=typeof vf.oninput=="function"}Po=Jo}else Po=!1;yf=Po&&(!document.documentMode||9<document.documentMode)}function bf(){Xi&&(Xi.detachEvent("onpropertychange",Sf),Qi=Xi=null)}function Sf(e){if(e.propertyName==="value"&&tr(Qi)){var t=[];hf(t,Qi,e,Go(e)),nf(jy,t)}}function Ey(e,t,a){e==="focusin"?(bf(),Xi=t,Qi=a,Xi.attachEvent("onpropertychange",Sf)):e==="focusout"&&bf()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(Qi)}function Ay(e,t){if(e==="click")return tr(t)}function Oy(e,t){if(e==="input"||e==="change")return tr(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:ky;function Zi(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Fe.call(t,l)||!Lt(e[l],t[l]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,t){var a=xf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kl(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cy=wn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Fo=null,Ki=null,es=!1;function Tf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;es||Pa==null||Pa!==Kl(i)||(i=Pa,"selectionStart"in i&&Io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Zi(Ki,i)||(Ki=i,i=Yr(Fo,"onSelect"),0<i.length&&(t=new Fl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Pa)))}function ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ja={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},ts={},jf={};wn&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Sa(e){if(ts[e])return ts[e];if(!Ja[e])return e;var t=Ja[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in jf)return ts[e]=t[a];return e}var Ef=Sa("animationend"),_f=Sa("animationiteration"),Af=Sa("animationstart"),My=Sa("transitionrun"),Dy=Sa("transitionstart"),Hy=Sa("transitioncancel"),Of=Sa("transitionend"),kf=new Map,ns="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ns.push("scrollEnd");function rn(e,t){kf.set(e,t),ya(t,[e])}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kt=[],Ia=0,as=0;function ar(){for(var e=Ia,t=as=Ia=0;t<e;){var a=Kt[t];Kt[t++]=null;var i=Kt[t];Kt[t++]=null;var l=Kt[t];Kt[t++]=null;var r=Kt[t];if(Kt[t++]=null,i!==null&&l!==null){var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}r!==0&&Cf(a,l,r)}}function ir(e,t,a,i){Kt[Ia++]=e,Kt[Ia++]=t,Kt[Ia++]=a,Kt[Ia++]=i,as|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function is(e,t,a,i){return ir(e,t,a,i),lr(e)}function xa(e,t){return ir(e,null,null,t),lr(e)}function Cf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Rt(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function lr(e){if(50<ml)throw ml=0,pc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function Ry(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,i){return new Ry(e,t,a,i)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rr(e,t,a,i,l,r){var c=0;if(i=e,typeof e=="function")ls(e)&&(c=1);else if(typeof e=="string")c=G0(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=Nt(31,a,t,l),e.elementType=_,e.lanes=r,e;case X:return $a(a.children,l,r,t);case he:c=8,l|=24;break;case ue:return e=Nt(12,a,t,l|2),e.elementType=ue,e.lanes=r,e;case w:return e=Nt(13,a,t,l),e.elementType=w,e.lanes=r,e;case z:return e=Nt(19,a,t,l),e.elementType=z,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:c=10;break e;case pe:c=9;break e;case oe:c=11;break e;case x:c=14;break e;case D:c=16,i=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Nt(c,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function $a(e,t,a,i){return e=Nt(7,e,i,t),e.lanes=a,e}function rs(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function Df(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function os(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hf=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var a=Hf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ie(t)},Hf.set(e,t),t)}return{value:e,source:t,stack:Ie(t)}}var ei=[],ti=0,or=null,Wi=0,Pt=[],Jt=0,Vn=null,pn=1,gn="";function Tn(e,t){ei[ti++]=Wi,ei[ti++]=or,or=e,Wi=t}function Rf(e,t,a){Pt[Jt++]=pn,Pt[Jt++]=gn,Pt[Jt++]=Vn,Vn=e;var i=pn;e=gn;var l=32-Rt(i)-1;i&=~(1<<l),a+=1;var r=32-Rt(t)+l;if(30<r){var c=l-l%5;r=(i&(1<<c)-1).toString(32),i>>=c,l-=c,pn=1<<32-Rt(t)+l|a<<l|i,gn=r+e}else pn=1<<r|a<<l|i,gn=e}function ss(e){e.return!==null&&(Tn(e,1),Rf(e,1,0))}function cs(e){for(;e===or;)or=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null;for(;e===Vn;)Vn=Pt[--Jt],Pt[Jt]=null,gn=Pt[--Jt],Pt[Jt]=null,pn=Pt[--Jt],Pt[Jt]=null}function Lf(e,t){Pt[Jt++]=pn,Pt[Jt++]=gn,Pt[Jt++]=Vn,pn=t.id,gn=t.overflow,Vn=e}var bt=null,Ze=null,He=!1,Xn=null,It=!1,us=Error(s(519));function Qn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pi(Wt(t,e)),us}function Nf(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[vt]=e,t[_t]=i,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<vl.length;a++)Ce(vl[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Pu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Iu(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||tg(t.textContent,a)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=$n),t=!0):t=!1,t||Qn(e,!0)}function Uf(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:bt=bt.return}}function ni(e){if(e!==bt)return!1;if(!He)return Uf(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_c(e.type,e.memoizedProps)),a=!a),a&&Ze&&Qn(e),Uf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=ug(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=ug(e)}else t===27?(t=Ze,ra(e.type)?(e=Mc,Mc=null,Ze=e):Ze=t):Ze=bt?en(e.stateNode.nextSibling):null;return!0}function wa(){Ze=bt=null,He=!1}function fs(){var e=Xn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Xn=null),e}function Pi(e){Xn===null?Xn=[e]:Xn.push(e)}var ds=g(null),za=null,jn=null;function Zn(e,t,a){B(ds,t._currentValue),t._currentValue=a}function En(e){e._currentValue=ds.current,S(ds)}function ps(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function gs(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var $=0;$<t.length;$++)if(h.context===t[$]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),ps(r.return,a,e),i||(c=null);break e}r=h.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),ps(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function ai(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var h=l.type;Lt(l.pendingProps.value,c.value)||(e!==null?e.push(h):e=[h])}}else if(l===te.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}l=l.return}e!==null&&gs(t,e,a,i),t.flags|=262144}function sr(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){za=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Bf(za,e)}function cr(e,t){return za===null&&Ta(e),Bf(e,t)}function Bf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},jn===null){if(e===null)throw Error(s(308));jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jn=jn.next=t;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ny=n.unstable_scheduleCallback,Uy=n.unstable_NormalPriority,lt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hs(){return{controller:new Ly,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&Ny(Uy,function(){e.controller.abort()})}var Ii=null,ms=0,ii=0,li=null;function By(e,t){if(Ii===null){var a=Ii=[];ms=0,ii=bc(),li={status:"pending",value:void 0,then:function(i){a.push(i)}}}return ms++,t.then(Gf,Gf),t}function Gf(){if(--ms===0&&Ii!==null){li!==null&&(li.status="fulfilled");var e=Ii;Ii=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gy(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var qf=E.S;E.S=function(e,t){Tp=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&By(e,t),qf!==null&&qf(e,t)};var ja=g(null);function ys(){var e=ja.current;return e!==null?e:Qe.pooledCache}function ur(e,t){t===null?B(ja,ja.current):B(ja,t.pool)}function Yf(){var e=ys();return e===null?null:{parent:lt._currentValue,pool:e}}var ri=Error(s(460)),vs=Error(s(474)),fr=Error(s(542)),dr={then:function(){}};function Vf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($n,$n),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e;default:if(typeof t.status=="string")t.then($n,$n);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e}throw _a=t,ri}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,ri):a}}var _a=null;function Qf(){if(_a===null)throw Error(s(459));var e=_a;return _a=null,e}function Zf(e){if(e===ri||e===fr)throw Error(s(483))}var oi=null,Fi=0;function pr(e){var t=Fi;return Fi+=1,oi===null&&(oi=[]),Xf(oi,e,t)}function el(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gr(e,t){throw t.$$typeof===le?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kf(e){function t(C,j){if(e){var L=C.deletions;L===null?(C.deletions=[j],C.flags|=16):L.push(j)}}function a(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function i(C){for(var j=new Map;C!==null;)C.key!==null?j.set(C.key,C):j.set(C.index,C),C=C.sibling;return j}function l(C,j){return C=zn(C,j),C.index=0,C.sibling=null,C}function r(C,j,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<j?(C.flags|=67108866,j):L):(C.flags|=67108866,j)):(C.flags|=1048576,j)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function h(C,j,L,I){return j===null||j.tag!==6?(j=rs(L,C.mode,I),j.return=C,j):(j=l(j,L),j.return=C,j)}function $(C,j,L,I){var ye=L.type;return ye===X?Q(C,j,L.props.children,I,L.key):j!==null&&(j.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Ea(ye)===j.type)?(j=l(j,L.props),el(j,L),j.return=C,j):(j=rr(L.type,L.key,L.props,null,C.mode,I),el(j,L),j.return=C,j)}function U(C,j,L,I){return j===null||j.tag!==4||j.stateNode.containerInfo!==L.containerInfo||j.stateNode.implementation!==L.implementation?(j=os(L,C.mode,I),j.return=C,j):(j=l(j,L.children||[]),j.return=C,j)}function Q(C,j,L,I,ye){return j===null||j.tag!==7?(j=$a(L,C.mode,I,ye),j.return=C,j):(j=l(j,L),j.return=C,j)}function F(C,j,L){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=rs(""+j,C.mode,L),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ce:return L=rr(j.type,j.key,j.props,null,C.mode,L),el(L,j),L.return=C,L;case ae:return j=os(j,C.mode,L),j.return=C,j;case D:return j=Ea(j),F(C,j,L)}if(ee(j)||Z(j))return j=$a(j,C.mode,L,null),j.return=C,j;if(typeof j.then=="function")return F(C,pr(j),L);if(j.$$typeof===ne)return F(C,cr(C,j),L);gr(C,j)}return null}function G(C,j,L,I){var ye=j!==null?j.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ye!==null?null:h(C,j,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ce:return L.key===ye?$(C,j,L,I):null;case ae:return L.key===ye?U(C,j,L,I):null;case D:return L=Ea(L),G(C,j,L,I)}if(ee(L)||Z(L))return ye!==null?null:Q(C,j,L,I,null);if(typeof L.then=="function")return G(C,j,pr(L),I);if(L.$$typeof===ne)return G(C,j,cr(C,L),I);gr(C,L)}return null}function V(C,j,L,I,ye){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(L)||null,h(j,C,""+I,ye);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ce:return C=C.get(I.key===null?L:I.key)||null,$(j,C,I,ye);case ae:return C=C.get(I.key===null?L:I.key)||null,U(j,C,I,ye);case D:return I=Ea(I),V(C,j,L,I,ye)}if(ee(I)||Z(I))return C=C.get(L)||null,Q(j,C,I,ye,null);if(typeof I.then=="function")return V(C,j,L,pr(I),ye);if(I.$$typeof===ne)return V(C,j,L,cr(j,I),ye);gr(j,I)}return null}function fe(C,j,L,I){for(var ye=null,Le=null,ge=j,Te=j=0,De=null;ge!==null&&Te<L.length;Te++){ge.index>Te?(De=ge,ge=null):De=ge.sibling;var Ne=G(C,ge,L[Te],I);if(Ne===null){ge===null&&(ge=De);break}e&&ge&&Ne.alternate===null&&t(C,ge),j=r(Ne,j,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne,ge=De}if(Te===L.length)return a(C,ge),He&&Tn(C,Te),ye;if(ge===null){for(;Te<L.length;Te++)ge=F(C,L[Te],I),ge!==null&&(j=r(ge,j,Te),Le===null?ye=ge:Le.sibling=ge,Le=ge);return He&&Tn(C,Te),ye}for(ge=i(ge);Te<L.length;Te++)De=V(ge,C,Te,L[Te],I),De!==null&&(e&&De.alternate!==null&&ge.delete(De.key===null?Te:De.key),j=r(De,j,Te),Le===null?ye=De:Le.sibling=De,Le=De);return e&&ge.forEach(function(fa){return t(C,fa)}),He&&Tn(C,Te),ye}function ve(C,j,L,I){if(L==null)throw Error(s(151));for(var ye=null,Le=null,ge=j,Te=j=0,De=null,Ne=L.next();ge!==null&&!Ne.done;Te++,Ne=L.next()){ge.index>Te?(De=ge,ge=null):De=ge.sibling;var fa=G(C,ge,Ne.value,I);if(fa===null){ge===null&&(ge=De);break}e&&ge&&fa.alternate===null&&t(C,ge),j=r(fa,j,Te),Le===null?ye=fa:Le.sibling=fa,Le=fa,ge=De}if(Ne.done)return a(C,ge),He&&Tn(C,Te),ye;if(ge===null){for(;!Ne.done;Te++,Ne=L.next())Ne=F(C,Ne.value,I),Ne!==null&&(j=r(Ne,j,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return He&&Tn(C,Te),ye}for(ge=i(ge);!Ne.done;Te++,Ne=L.next())Ne=V(ge,C,Te,Ne.value,I),Ne!==null&&(e&&Ne.alternate!==null&&ge.delete(Ne.key===null?Te:Ne.key),j=r(Ne,j,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return e&&ge.forEach(function(I0){return t(C,I0)}),He&&Tn(C,Te),ye}function Xe(C,j,L,I){if(typeof L=="object"&&L!==null&&L.type===X&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case ce:e:{for(var ye=L.key;j!==null;){if(j.key===ye){if(ye=L.type,ye===X){if(j.tag===7){a(C,j.sibling),I=l(j,L.props.children),I.return=C,C=I;break e}}else if(j.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Ea(ye)===j.type){a(C,j.sibling),I=l(j,L.props),el(I,L),I.return=C,C=I;break e}a(C,j);break}else t(C,j);j=j.sibling}L.type===X?(I=$a(L.props.children,C.mode,I,L.key),I.return=C,C=I):(I=rr(L.type,L.key,L.props,null,C.mode,I),el(I,L),I.return=C,C=I)}return c(C);case ae:e:{for(ye=L.key;j!==null;){if(j.key===ye)if(j.tag===4&&j.stateNode.containerInfo===L.containerInfo&&j.stateNode.implementation===L.implementation){a(C,j.sibling),I=l(j,L.children||[]),I.return=C,C=I;break e}else{a(C,j);break}else t(C,j);j=j.sibling}I=os(L,C.mode,I),I.return=C,C=I}return c(C);case D:return L=Ea(L),Xe(C,j,L,I)}if(ee(L))return fe(C,j,L,I);if(Z(L)){if(ye=Z(L),typeof ye!="function")throw Error(s(150));return L=ye.call(L),ve(C,j,L,I)}if(typeof L.then=="function")return Xe(C,j,pr(L),I);if(L.$$typeof===ne)return Xe(C,j,cr(C,L),I);gr(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,j!==null&&j.tag===6?(a(C,j.sibling),I=l(j,L),I.return=C,C=I):(a(C,j),I=rs(L,C.mode,I),I.return=C,C=I),c(C)):a(C,j)}return function(C,j,L,I){try{Fi=0;var ye=Xe(C,j,L,I);return oi=null,ye}catch(ge){if(ge===ri||ge===fr)throw ge;var Le=Nt(29,ge,null,C.mode);return Le.lanes=I,Le.return=C,Le}finally{}}}var Aa=Kf(!0),Wf=Kf(!1),Kn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=lr(e),Cf(e,null,a),t}return ir(e,i,t,a),lr(e)}function tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Uu(e,a)}}function xs(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var $s=!1;function nl(){if($s){var e=li;if(e!==null)throw e}}function al(e,t,a,i){$s=!1;var l=e.updateQueue;Kn=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var $=h,U=$.next;$.next=null,c===null?r=U:c.next=U,c=$;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==c&&(h===null?Q.firstBaseUpdate=U:h.next=U,Q.lastBaseUpdate=$))}if(r!==null){var F=l.baseState;c=0,Q=U=$=null,h=r;do{var G=h.lane&-536870913,V=G!==h.lane;if(V?(Me&G)===G:(i&G)===G){G!==0&&G===ii&&($s=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var fe=e,ve=h;G=t;var Xe=a;switch(ve.tag){case 1:if(fe=ve.payload,typeof fe=="function"){F=fe.call(Xe,F,G);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ve.payload,G=typeof fe=="function"?fe.call(Xe,F,G):fe,G==null)break e;F=W({},F,G);break e;case 2:Kn=!0}}G=h.callback,G!==null&&(e.flags|=64,V&&(e.flags|=8192),V=l.callbacks,V===null?l.callbacks=[G]:V.push(G))}else V={lane:G,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(U=Q=V,$=F):Q=Q.next=V,c|=G;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;V=h,h=V.next,V.next=null,l.lastBaseUpdate=V,l.shared.pending=null}}while(!0);Q===null&&($=F),l.baseState=$,l.firstBaseUpdate=U,l.lastBaseUpdate=Q,r===null&&(l.shared.lanes=0),ta|=c,e.lanes=c,e.memoizedState=F}}function Pf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Jf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pf(a[e],t)}var si=g(null),hr=g(0);function If(e,t){e=Rn,B(hr,e),B(si,t),Rn=e|t.baseLanes}function ws(){B(hr,Rn),B(si,si.current)}function zs(){Rn=hr.current,S(si),S(hr)}var Ut=g(null),Ft=null;function Jn(e){var t=e.alternate;B(at,at.current&1),B(Ut,e),Ft===null&&(t===null||si.current!==null||t.memoizedState!==null)&&(Ft=e)}function Ts(e){B(at,at.current),B(Ut,e),Ft===null&&(Ft=e)}function Ff(e){e.tag===22?(B(at,at.current),B(Ut,e),Ft===null&&(Ft=e)):In()}function In(){B(at,at.current),B(Ut,Ut.current)}function Bt(e){S(Ut),Ft===e&&(Ft=null),S(at)}var at=g(0);function mr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kc(a)||Cc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _n=0,we=null,Ye=null,rt=null,yr=!1,ci=!1,Oa=!1,vr=0,il=0,ui=null,qy=0;function et(){throw Error(s(321))}function js(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Lt(e[a],t[a]))return!1;return!0}function Es(e,t,a,i,l,r){return _n=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Rd:qs,Oa=!1,r=a(i,l),Oa=!1,ci&&(r=td(t,a,i,l)),ed(e),r}function ed(e){E.H=ol;var t=Ye!==null&&Ye.next!==null;if(_n=0,rt=Ye=we=null,yr=!1,il=0,ui=null,t)throw Error(s(300));e===null||ot||(e=e.dependencies,e!==null&&sr(e)&&(ot=!0))}function td(e,t,a,i){we=e;var l=0;do{if(ci&&(ui=null),il=0,ci=!1,25<=l)throw Error(s(301));if(l+=1,rt=Ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=Ld,r=t(a,i)}while(ci);return r}function Yy(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?ll(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(we.flags|=1024),t}function _s(){var e=vr!==0;return vr=0,e}function As(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Os(e){if(yr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yr=!1}_n=0,rt=Ye=we=null,ci=!1,il=vr=0,ui=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?we.memoizedState=rt=e:rt=rt.next=e,rt}function it(){if(Ye===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=rt===null?we.memoizedState:rt.next;if(t!==null)rt=t,Ye=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?we.memoizedState=rt=e:rt=rt.next=e}return rt}function br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var t=il;return il+=1,ui===null&&(ui=[]),e=Xf(ui,e,t),t=we,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Rd:qs),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===ne)return St(e)}throw Error(s(438,String(e)))}function ks(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=we.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=br(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function An(e,t){return typeof t=="function"?t(e):t}function xr(e){var t=it();return Cs(t,Ye,e)}function Cs(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=c=null,$=null,U=t,Q=!1;do{var F=U.lane&-536870913;if(F!==U.lane?(Me&F)===F:(_n&F)===F){var G=U.revertLane;if(G===0)$!==null&&($=$.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),F===ii&&(Q=!0);else if((_n&G)===G){U=U.next,G===ii&&(Q=!0);continue}else F={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},$===null?(h=$=F,c=r):$=$.next=F,we.lanes|=G,ta|=G;F=U.action,Oa&&a(r,F),r=U.hasEagerState?U.eagerState:a(r,F)}else G={lane:F,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},$===null?(h=$=G,c=r):$=$.next=G,we.lanes|=F,ta|=F;U=U.next}while(U!==null&&U!==t);if($===null?c=r:$.next=h,!Lt(r,e.memoizedState)&&(ot=!0,Q&&(a=li,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=$,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ms(e){var t=it(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);Lt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function nd(e,t,a){var i=we,l=it(),r=He;if(r){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Lt((Ye||l).memoizedState,a);if(c&&(l.memoizedState=a,ot=!0),l=l.queue,Rs(ld.bind(null,i,l,e),[e]),l.getSnapshot!==t||c||rt!==null&&rt.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},id.bind(null,i,l,a,t),null),Qe===null)throw Error(s(349));r||(_n&127)!==0||ad(i,t,a)}return a}function ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=br(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function id(e,t,a,i){t.value=a,t.getSnapshot=i,rd(t)&&od(e)}function ld(e,t,a){return a(function(){rd(t)&&od(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Lt(e,a)}catch{return!0}}function od(e){var t=xa(e,2);t!==null&&Dt(t,e,2)}function Ds(e){var t=Et();if(typeof e=="function"){var a=e;if(e=a(),Oa){Gn(!0);try{a()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function sd(e,t,a,i){return e.baseState=a,Cs(e,Ye,typeof i=="function"?i:An)}function Vy(e,t,a,i,l){if(zr(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};E.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,cd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function cd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=E.T,c={};E.T=c;try{var h=a(l,i),$=E.S;$!==null&&$(c,h),ud(e,t,h)}catch(U){Hs(e,t,U)}finally{r!==null&&c.types!==null&&(r.types=c.types),E.T=r}}else try{r=a(l,i),ud(e,t,r)}catch(U){Hs(e,t,U)}}function ud(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){fd(e,t,i)},function(i){return Hs(e,t,i)}):fd(e,t,a)}function fd(e,t,a){t.status="fulfilled",t.value=a,dd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cd(e,a)))}function Hs(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,dd(t),t=t.next;while(t!==i)}e.action=null}function dd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pd(e,t){return t}function gd(e,t){if(He){var a=Qe.formState;if(a!==null){e:{var i=we;if(He){if(Ze){t:{for(var l=Ze,r=It;l.nodeType!==8;){if(!r){l=null;break t}if(l=en(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ze=en(l.nextSibling),i=l.data==="F!";break e}}Qn(i)}i=!1}i&&(t=a[0])}}return a=Et(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pd,lastRenderedState:t},a.queue=i,a=Md.bind(null,we,i),i.dispatch=a,i=Ds(!1),r=Gs.bind(null,we,!1,i.queue),i=Et(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=Vy.bind(null,we,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function hd(e){var t=it();return md(t,Ye,e)}function md(e,t,a){if(t=Cs(e,t,pd)[0],e=xr(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ll(t)}catch(c){throw c===ri?fr:c}else i=t;t=it();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(we.flags|=2048,fi(9,{destroy:void 0},Xy.bind(null,l,a),null)),[i,r,e]}function Xy(e,t){e.action=t}function yd(e){var t=it(),a=Ye;if(a!==null)return md(t,a,e);it(),t=t.memoizedState,a=it();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function fi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=we.updateQueue,t===null&&(t=br(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function vd(){return it().memoizedState}function $r(e,t,a,i){var l=Et();we.flags|=e,l.memoizedState=fi(1|t,{destroy:void 0},a,i===void 0?null:i)}function wr(e,t,a,i){var l=it();i=i===void 0?null:i;var r=l.memoizedState.inst;Ye!==null&&i!==null&&js(i,Ye.memoizedState.deps)?l.memoizedState=fi(t,r,a,i):(we.flags|=e,l.memoizedState=fi(1|t,r,a,i))}function bd(e,t){$r(8390656,8,e,t)}function Rs(e,t){wr(2048,8,e,t)}function Qy(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=br(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Sd(e){var t=it().memoizedState;return Qy({ref:t,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function xd(e,t){return wr(4,2,e,t)}function $d(e,t){return wr(4,4,e,t)}function wd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zd(e,t,a){a=a!=null?a.concat([e]):null,wr(4,4,wd.bind(null,t,e),a)}function Ls(){}function Td(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&js(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function jd(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&js(t,i[1]))return i[0];if(i=e(),Oa){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[i,t],i}function Ns(e,t,a){return a===void 0||(_n&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ep(),we.lanes|=e,ta|=e,a)}function Ed(e,t,a,i){return Lt(a,t)?a:si.current!==null?(e=Ns(e,a,i),Lt(e,t)||(ot=!0),e):(_n&42)===0||(_n&1073741824)!==0&&(Me&261930)===0?(ot=!0,e.memoizedState=a):(e=Ep(),we.lanes|=e,ta|=e,t)}function _d(e,t,a,i,l){var r=u.p;u.p=r!==0&&8>r?r:8;var c=E.T,h={};E.T=h,Gs(e,!1,t,a);try{var $=l(),U=E.S;if(U!==null&&U(h,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var Q=Gy($,i);rl(e,t,Q,Yt(e))}else rl(e,t,i,Yt(e))}catch(F){rl(e,t,{then:function(){},status:"rejected",reason:F},Yt())}finally{u.p=r,c!==null&&h.types!==null&&(c.types=h.types),E.T=c}}function Zy(){}function Us(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=Ad(e).queue;_d(e,l,t,ie,a===null?Zy:function(){return Od(e),a(i)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ie},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Od(e){var t=Ad(e);t.next===null&&(t=e.alternate.memoizedState),rl(e,t.next.queue,{},Yt())}function Bs(){return St(wl)}function kd(){return it().memoizedState}function Cd(){return it().memoizedState}function Ky(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Yt();e=Wn(a);var i=Pn(t,e,a);i!==null&&(Dt(i,t,a),tl(i,t,a)),t={cache:hs()},e.payload=t;return}t=t.return}}function Wy(e,t,a){var i=Yt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zr(e)?Dd(t,a):(a=is(e,t,a,i),a!==null&&(Dt(a,e,i),Hd(a,t,i)))}function Md(e,t,a){var i=Yt();rl(e,t,a,i)}function rl(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zr(e))Dd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,h=r(c,a);if(l.hasEagerState=!0,l.eagerState=h,Lt(h,c))return ir(e,t,l,0),Qe===null&&ar(),!1}catch{}finally{}if(a=is(e,t,l,i),a!==null)return Dt(a,e,i),Hd(a,t,i),!0}return!1}function Gs(e,t,a,i){if(i={lane:2,revertLane:bc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},zr(e)){if(t)throw Error(s(479))}else t=is(e,a,i,2),t!==null&&Dt(t,e,2)}function zr(e){var t=e.alternate;return e===we||t!==null&&t===we}function Dd(e,t){ci=yr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hd(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Uu(e,a)}}var ol={readContext:St,use:Sr,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};ol.useEffectEvent=et;var Rd={readContext:St,use:Sr,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:bd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,$r(4194308,4,wd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var a=Et();t=t===void 0?null:t;var i=e();if(Oa){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Et();if(a!==void 0){var l=a(t);if(Oa){Gn(!0);try{a(t)}finally{Gn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Wy.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Ds(e);var t=e.queue,a=Md.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ls,useDeferredValue:function(e,t){var a=Et();return Ns(a,e,t)},useTransition:function(){var e=Ds(!1);return e=_d.bind(null,we,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=we,l=Et();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Qe===null)throw Error(s(349));(Me&127)!==0||ad(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,bd(ld.bind(null,i,r,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},id.bind(null,i,r,a,t),null),a},useId:function(){var e=Et(),t=Qe.identifierPrefix;if(He){var a=gn,i=pn;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qy++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:gd,useActionState:gd,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gs.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:ks,useCacheRefresh:function(){return Et().memoizedState=Ky.bind(null,we)},useEffectEvent:function(e){var t=Et(),a={impl:e};return t.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},qs={readContext:St,use:Sr,useCallback:Td,useContext:St,useEffect:Rs,useImperativeHandle:zd,useInsertionEffect:xd,useLayoutEffect:$d,useMemo:jd,useReducer:xr,useRef:vd,useState:function(){return xr(An)},useDebugValue:Ls,useDeferredValue:function(e,t){var a=it();return Ed(a,Ye.memoizedState,e,t)},useTransition:function(){var e=xr(An)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:nd,useId:kd,useHostTransitionStatus:Bs,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=it();return sd(a,Ye,e,t)},useMemoCache:ks,useCacheRefresh:Cd};qs.useEffectEvent=Sd;var Ld={readContext:St,use:Sr,useCallback:Td,useContext:St,useEffect:Rs,useImperativeHandle:zd,useInsertionEffect:xd,useLayoutEffect:$d,useMemo:jd,useReducer:Ms,useRef:vd,useState:function(){return Ms(An)},useDebugValue:Ls,useDeferredValue:function(e,t){var a=it();return Ye===null?Ns(a,e,t):Ed(a,Ye.memoizedState,e,t)},useTransition:function(){var e=Ms(An)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:nd,useId:kd,useHostTransitionStatus:Bs,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var a=it();return Ye!==null?sd(a,Ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ks,useCacheRefresh:Cd};Ld.useEffectEvent=Sd;function Ys(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:W({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Wn(i);l.payload=t,a!=null&&(l.callback=a),t=Pn(e,l,i),t!==null&&(Dt(t,e,i),tl(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Wn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Pn(e,l,i),t!==null&&(Dt(t,e,i),tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Yt(),i=Wn(a);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,a),t!==null&&(Dt(t,e,a),tl(t,e,a))}};function Nd(e,t,a,i,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,c):t.prototype&&t.prototype.isPureReactComponent?!Zi(a,i)||!Zi(l,r):!0}function Ud(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function ka(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=W({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Bd(e){nr(e)}function Gd(e){console.error(e)}function qd(e){nr(e)}function Tr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Yd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xs(e,t,a){return a=Wn(a),a.tag=3,a.payload={element:null},a.callback=function(){Tr(e,t)},a}function Vd(e){return e=Wn(e),e.tag=3,e}function Xd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){Yd(t,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Yd(t,a,i),typeof l!="function"&&(na===null?na=new Set([this]):na.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function Py(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ai(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 31:case 13:return Ft===null?Lr():a.alternate===null&&tt===0&&(tt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),mc(e,i,l)),!1;case 22:return a.flags|=65536,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),mc(e,i,l)),!1}throw Error(s(435,a.tag))}return mc(e,i,l),Lr(),!1}if(He)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==us&&(e=Error(s(422),{cause:i}),Pi(Wt(e,a)))):(i!==us&&(t=Error(s(423),{cause:i}),Pi(Wt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Wt(i,a),l=Xs(e.stateNode,i,l),xs(e,l),tt!==4&&(tt=2)),!1;var r=Error(s(520),{cause:i});if(r=Wt(r,a),hl===null?hl=[r]:hl.push(r),tt!==4&&(tt=2),t===null)return!0;i=Wt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Xs(a.stateNode,i,e),xs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(na===null||!na.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Vd(l),Xd(l,e,a,i),xs(a,l),!1}a=a.return}while(a!==null);return!1}var Qs=Error(s(461)),ot=!1;function xt(e,t,a,i){t.child=e===null?Wf(t,null,a,i):Aa(t,e.child,a,i)}function Qd(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var c={};for(var h in i)h!=="ref"&&(c[h]=i[h])}else c=i;return Ta(t),i=Es(e,t,a,c,r,l),h=_s(),e!==null&&!ot?(As(e,t,l),On(e,t,l)):(He&&h&&ss(t),t.flags|=1,xt(e,t,i,l),t.child)}function Zd(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!ls(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Kd(e,t,r,i,l)):(e=rr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ec(e,l)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:Zi,a(c,i)&&e.ref===t.ref)return On(e,t,l)}return t.flags|=1,e=zn(r,i),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(Zi(r,i)&&e.ref===t.ref)if(ot=!1,t.pendingProps=i=r,ec(e,l))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,On(e,t,l)}return Zs(e,t,a,i,l)}function Wd(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return Pd(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,r!==null?r.cachePool:null),r!==null?If(t,r):ws(),Ff(t);else return i=t.lanes=536870912,Pd(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(ur(t,r.cachePool),If(t,r),In(),t.memoizedState=null):(e!==null&&ur(t,null),ws(),In());return xt(e,t,l,a),t.child}function sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pd(e,t,a,i,l){var r=ys();return r=r===null?null:{parent:lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&ur(t,null),ws(),Ff(t),e!==null&&ai(e,t,i,!0),t.childLanes=l,null}function jr(e,t){return t=_r({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jd(e,t,a){return Aa(t,e.child,null,a),e=jr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Jy(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(i.mode==="hidden")return e=jr(t,i),t.lanes=536870912,sl(null,e);if(Ts(t),(e=Ze)?(e=cg(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},a=Df(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Qn(t);return t.lanes=536870912,null}return jr(t,i)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Ts(t),l)if(t.flags&256)t.flags&=-257,t=Jd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ot||ai(e,t,a,!1),l=(a&e.childLanes)!==0,ot||l){if(i=Qe,i!==null&&(c=Bu(i,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,xa(e,c),Dt(i,e,c),Qs;Lr(),t=Jd(e,t,a)}else e=r.treeContext,Ze=en(c.nextSibling),bt=t,He=!0,Xn=null,It=!1,e!==null&&Lf(t,e),t=jr(t,i),t.flags|=4096;return t}return e=zn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Er(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zs(e,t,a,i,l){return Ta(t),a=Es(e,t,a,i,void 0,l),i=_s(),e!==null&&!ot?(As(e,t,l),On(e,t,l)):(He&&i&&ss(t),t.flags|=1,xt(e,t,a,l),t.child)}function Id(e,t,a,i,l,r){return Ta(t),t.updateQueue=null,a=td(t,i,a,l),ed(e),i=_s(),e!==null&&!ot?(As(e,t,r),On(e,t,r)):(He&&i&&ss(t),t.flags|=1,xt(e,t,a,r),t.child)}function Fd(e,t,a,i,l){if(Ta(t),t.stateNode===null){var r=Fa,c=a.contextType;typeof c=="object"&&c!==null&&(r=St(c)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},bs(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?St(c):Fa,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ys(t,a,c,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Vs.enqueueReplaceState(r,r.state,null),al(t,i,r,l),nl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,$=ka(a,h);r.props=$;var U=r.context,Q=a.contextType;c=Fa,typeof Q=="object"&&Q!==null&&(c=St(Q));var F=a.getDerivedStateFromProps;Q=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||U!==c)&&Ud(t,r,i,c),Kn=!1;var G=t.memoizedState;r.state=G,al(t,i,r,l),nl(),U=t.memoizedState,h||G!==U||Kn?(typeof F=="function"&&(Ys(t,a,F,i),U=t.memoizedState),($=Kn||Nd(t,a,$,i,G,U,c))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),r.props=i,r.state=U,r.context=c,i=$):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Ss(e,t),c=t.memoizedProps,Q=ka(a,c),r.props=Q,F=t.pendingProps,G=r.context,U=a.contextType,$=Fa,typeof U=="object"&&U!==null&&($=St(U)),h=a.getDerivedStateFromProps,(U=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==F||G!==$)&&Ud(t,r,i,$),Kn=!1,G=t.memoizedState,r.state=G,al(t,i,r,l),nl();var V=t.memoizedState;c!==F||G!==V||Kn||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof h=="function"&&(Ys(t,a,h,i),V=t.memoizedState),(Q=Kn||Nd(t,a,Q,i,G,V,$)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(U||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,V,$),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,V,$)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=V),r.props=i,r.state=V,r.context=$,i=Q):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Er(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Aa(t,e.child,null,l),t.child=Aa(t,null,a,l)):xt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=On(e,t,l),e}function ep(e,t,a,i){return wa(),t.flags|=256,xt(e,t,a,i),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ws(e){return{baseLanes:e,cachePool:Yf()}}function Ps(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function tp(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(l?Jn(t):In(),(e=Ze)?(e=cg(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},a=Df(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Qn(t);return Cc(e)?t.lanes=32:t.lanes=536870912,null}var h=i.children;return i=i.fallback,l?(In(),l=t.mode,h=_r({mode:"hidden",children:h},l),i=$a(i,l,a,null),h.return=t,i.return=t,h.sibling=i,t.child=h,i=t.child,i.memoizedState=Ws(a),i.childLanes=Ps(e,c,a),t.memoizedState=Ks,sl(null,i)):(Jn(t),Js(t,h))}var $=e.memoizedState;if($!==null&&(h=$.dehydrated,h!==null)){if(r)t.flags&256?(Jn(t),t.flags&=-257,t=Is(e,t,a)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),h=i.fallback,l=t.mode,i=_r({mode:"visible",children:i.children},l),h=$a(h,l,a,null),h.flags|=2,i.return=t,h.return=t,i.sibling=h,t.child=i,Aa(t,e.child,null,a),i=t.child,i.memoizedState=Ws(a),i.childLanes=Ps(e,c,a),t.memoizedState=Ks,t=sl(null,i));else if(Jn(t),Cc(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;c=U,i=Error(s(419)),i.stack="",i.digest=c,Pi({value:i,source:null,stack:null}),t=Is(e,t,a)}else if(ot||ai(e,t,a,!1),c=(a&e.childLanes)!==0,ot||c){if(c=Qe,c!==null&&(i=Bu(c,a),i!==0&&i!==$.retryLane))throw $.retryLane=i,xa(e,i),Dt(c,e,i),Qs;kc(h)||Lr(),t=Is(e,t,a)}else kc(h)?(t.flags|=192,t.child=e.child,t=null):(e=$.treeContext,Ze=en(h.nextSibling),bt=t,He=!0,Xn=null,It=!1,e!==null&&Lf(t,e),t=Js(t,i.children),t.flags|=4096);return t}return l?(In(),h=i.fallback,l=t.mode,$=e.child,U=$.sibling,i=zn($,{mode:"hidden",children:i.children}),i.subtreeFlags=$.subtreeFlags&65011712,U!==null?h=zn(U,h):(h=$a(h,l,a,null),h.flags|=2),h.return=t,i.return=t,i.sibling=h,t.child=i,sl(null,i),i=t.child,h=e.child.memoizedState,h===null?h=Ws(a):(l=h.cachePool,l!==null?($=lt._currentValue,l=l.parent!==$?{parent:$,pool:$}:l):l=Yf(),h={baseLanes:h.baseLanes|a,cachePool:l}),i.memoizedState=h,i.childLanes=Ps(e,c,a),t.memoizedState=Ks,sl(e.child,i)):(Jn(t),a=e.child,e=a.sibling,a=zn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Js(e,t){return t=_r({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _r(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Is(e,t,a){return Aa(t,e.child,null,a),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function np(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ps(e.return,t,a)}function Fs(e,t,a,i,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=l,c.treeForkCount=r)}function ap(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var c=at.current,h=(c&2)!==0;if(h?(c=c&1|2,t.flags|=128):c&=1,B(at,c),xt(e,t,i,a),i=He?Wi:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&np(e,a,t);else if(e.tag===19)np(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&mr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Fs(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&mr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Fs(t,!0,a,null,r,i);break;case"together":Fs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function On(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ai(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=zn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function Iy(e,t,a){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Zn(t,lt,e.memoizedState.cache),wa();break;case 27:case 5:Se(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ts(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?tp(e,t,a):(Jn(t),e=On(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ai(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return ap(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(at,at.current),i)break;return null;case 22:return t.lanes=0,Wd(e,t,a,t.pendingProps);case 24:Zn(t,lt,e.memoizedState.cache)}return On(e,t,a)}function ip(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!ec(e,a)&&(t.flags&128)===0)return ot=!1,Iy(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,He&&(t.flags&1048576)!==0&&Rf(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")ls(e)?(i=ka(e,i),t.tag=1,t=Fd(null,t,e,i,a)):(t.tag=0,t=Zs(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===oe){t.tag=11,t=Qd(null,t,e,i,a);break e}else if(l===x){t.tag=14,t=Zd(null,t,e,i,a);break e}}throw t=P(e)||e,Error(s(306,t,""))}}return t;case 0:return Zs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=ka(i,t.pendingProps),Fd(e,t,i,l,a);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,Ss(e,t),al(t,i,null,a);var c=t.memoizedState;if(i=c.cache,Zn(t,lt,i),i!==r.cache&&gs(t,[lt],a,!0),nl(),i=c.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ep(e,t,i,a);break e}else if(i!==l){l=Wt(Error(s(424)),t),Pi(l),t=ep(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=en(e.firstChild),bt=t,He=!0,Xn=null,It=!0,a=Wf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),i===l){t=On(e,t,a);break e}xt(e,t,i,a)}t=t.child}return t;case 26:return Er(e,t),e===null?(a=hg(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(a=t.type,e=t.pendingProps,i=Vr(K.current).createElement(a),i[vt]=t,i[_t]=e,$t(i,a,e),gt(i),t.stateNode=i):t.memoizedState=hg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&He&&(i=t.stateNode=dg(t.type,t.pendingProps,K.current),bt=t,It=!0,l=Ze,ra(t.type)?(Mc=l,Ze=en(i.firstChild)):Ze=l),xt(e,t,t.pendingProps.children,a),Er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((l=i=Ze)&&(i=_0(i,t.type,t.pendingProps,It),i!==null?(t.stateNode=i,bt=t,Ze=en(i.firstChild),It=!1,l=!0):l=!1),l||Qn(t)),Se(t),l=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,i=r.children,_c(l,r)?i=null:c!==null&&_c(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=Es(e,t,Yy,null,null,a),wl._currentValue=l),Er(e,t),xt(e,t,i,a),t.child;case 6:return e===null&&He&&((e=a=Ze)&&(a=A0(a,t.pendingProps,It),a!==null?(t.stateNode=a,bt=t,Ze=null,e=!0):e=!1),e||Qn(t)),null;case 13:return tp(e,t,a);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Aa(t,null,i,a):xt(e,t,i,a),t.child;case 11:return Qd(e,t,t.type,t.pendingProps,a);case 7:return xt(e,t,t.pendingProps,a),t.child;case 8:return xt(e,t,t.pendingProps.children,a),t.child;case 12:return xt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Zn(t,t.type,i.value),xt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ta(t),l=St(l),i=i(l),t.flags|=1,xt(e,t,i,a),t.child;case 14:return Zd(e,t,t.type,t.pendingProps,a);case 15:return Kd(e,t,t.type,t.pendingProps,a);case 19:return ap(e,t,a);case 31:return Jy(e,t,a);case 22:return Wd(e,t,a,t.pendingProps);case 24:return Ta(t),i=St(lt),e===null?(l=ys(),l===null&&(l=Qe,r=hs(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},bs(t),Zn(t,lt,l)):((e.lanes&a)!==0&&(Ss(e,t),al(t,null,null,a),nl()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Zn(t,lt,i)):(i=r.cache,Zn(t,lt,i),i!==l.cache&&gs(t,[lt],a,!0))),xt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function kn(e){e.flags|=4}function tc(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(kp())e.flags|=8192;else throw _a=dr,vs}else e.flags&=-16777217}function lp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sg(t))if(kp())e.flags|=8192;else throw _a=dr,vs}function Ar(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lu():536870912,e.lanes|=t,hi|=t)}function cl(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Fy(e,t,a){var i=t.pendingProps;switch(cs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),En(lt),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ni(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fs())),Ke(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(kn(t),r!==null?(Ke(t),lp(t,r)):(Ke(t),tc(t,l,null,i,a))):r?r!==e.memoizedState?(kn(t),Ke(t),lp(t,r)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&kn(t),Ke(t),tc(t,l,e,i,a)),null;case 27:if(Ee(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}e=H.current,ni(t)?Nf(t):(e=dg(l,i,a),t.stateNode=e,kn(t))}return Ke(t),null;case 5:if(Ee(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(r=H.current,ni(t))Nf(t);else{var c=Vr(K.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?c.createElement(l,{is:i.is}):c.createElement(l)}}r[vt]=t,r[_t]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch($t(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&kn(t)}}return Ke(t),tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=K.current,ni(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=bt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||tg(e.nodeValue,a)),e||Qn(t,!0)}else e=Vr(e).createTextNode(i),e[vt]=t,t.stateNode=e}return Ke(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[vt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else a=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[vt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else l=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ar(t,t.updateQueue),Ke(t),null);case 4:return de(),e===null&&wc(t.stateNode.containerInfo),Ke(t),null;case 10:return En(t.type),Ke(t),null;case 19:if(S(at),i=t.memoizedState,i===null)return Ke(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)cl(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=mr(e),r!==null){for(t.flags|=128,cl(i,!1),e=r.updateQueue,t.updateQueue=e,Ar(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Mf(a,e),a=a.sibling;return B(at,at.current&1|2),He&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zt()>Dr&&(t.flags|=128,l=!0,cl(i,!1),t.lanes=4194304)}else{if(!l)if(e=mr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ar(t,e),cl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!He)return Ke(t),null}else 2*zt()-i.renderingStartTime>Dr&&a!==536870912&&(t.flags|=128,l=!0,cl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zt(),e.sibling=null,a=at.current,B(at,l?a&1|2:a&1),He&&Tn(t,i.treeForkCount),e):(Ke(t),null);case 22:case 23:return Bt(t),zs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),a=t.updateQueue,a!==null&&Ar(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&S(ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(lt),Ke(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function e0(e,t){switch(cs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(lt),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ee(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(at),null;case 4:return de(),null;case 10:return En(t.type),null;case 22:case 23:return Bt(t),zs(),e!==null&&S(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(lt),null;case 25:return null;default:return null}}function rp(e,t){switch(cs(t),t.tag){case 3:En(lt),de();break;case 26:case 27:case 5:Ee(t);break;case 4:de();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:S(at);break;case 10:En(t.type);break;case 22:case 23:Bt(t),zs(),e!==null&&S(ja);break;case 24:En(lt)}}function ul(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,c=a.inst;i=r(),c.destroy=i}a=a.next}while(a!==l)}}catch(h){qe(t,t.return,h)}}function Fn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var c=i.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,l=t;var $=a,U=h;try{U()}catch(Q){qe(l,$,Q)}}}i=i.next}while(i!==r)}}catch(Q){qe(t,t.return,Q)}}function op(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Jf(t,a)}catch(i){qe(e,e.return,i)}}}function sp(e,t,a){a.props=ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){qe(e,t,i)}}function fl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){qe(e,t,l)}}function hn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(e,t,l)}else a.current=null}function cp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){qe(e,e.return,l)}}function nc(e,t,a){try{var i=e.stateNode;$0(i,e.type,a,t),i[_t]=t}catch(l){qe(e,e.return,l)}}function up(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$n));else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,a),e=e.sibling;e!==null;)ic(e,t,a),e=e.sibling}function Or(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Or(e,t,a),e=e.sibling;e!==null;)Or(e,t,a),e=e.sibling}function fp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$t(t,i,a),t[vt]=e,t[_t]=a}catch(r){qe(e,e.return,r)}}var Cn=!1,st=!1,lc=!1,dp=typeof WeakSet=="function"?WeakSet:Set,ht=null;function t0(e,t){if(e=e.containerInfo,jc=Jr,e=zf(e),Io(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,h=-1,$=-1,U=0,Q=0,F=e,G=null;t:for(;;){for(var V;F!==a||l!==0&&F.nodeType!==3||(h=c+l),F!==r||i!==0&&F.nodeType!==3||($=c+i),F.nodeType===3&&(c+=F.nodeValue.length),(V=F.firstChild)!==null;)G=F,F=V;for(;;){if(F===e)break t;if(G===a&&++U===l&&(h=c),G===r&&++Q===i&&($=c),(V=F.nextSibling)!==null)break;F=G,G=F.parentNode}F=V}a=h===-1||$===-1?null:{start:h,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:e,selectionRange:a},Jr=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=ka(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ve){qe(a,a.return,ve)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Oc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function pp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Dn(e,a),i&4&&ul(5,a);break;case 1:if(Dn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){qe(a,a.return,c)}else{var l=ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){qe(a,a.return,c)}}i&64&&op(a),i&512&&fl(a,a.return);break;case 3:if(Dn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Jf(e,t)}catch(c){qe(a,a.return,c)}}break;case 27:t===null&&i&4&&fp(a);case 26:case 5:Dn(e,a),t===null&&i&4&&cp(a),i&512&&fl(a,a.return);break;case 12:Dn(e,a);break;case 31:Dn(e,a),i&4&&mp(e,a);break;case 13:Dn(e,a),i&4&&yp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=u0.bind(null,a),O0(e,a))));break;case 22:if(i=a.memoizedState!==null||Cn,!i){t=t!==null&&t.memoizedState!==null||st,l=Cn;var r=st;Cn=i,(st=t)&&!r?Hn(e,a,(a.subtreeFlags&8772)!==0):Dn(e,a),Cn=l,st=r}break;case 30:break;default:Dn(e,a)}}function gp(e){var t=e.alternate;t!==null&&(e.alternate=null,gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ho(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Ot=!1;function Mn(e,t,a){for(a=a.child;a!==null;)hp(e,t,a),a=a.sibling}function hp(e,t,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 26:st||hn(a,t),Mn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||hn(a,t);var i=Pe,l=Ot;ra(a.type)&&(Pe=a.stateNode,Ot=!1),Mn(e,t,a),Sl(a.stateNode),Pe=i,Ot=l;break;case 5:st||hn(a,t);case 6:if(i=Pe,l=Ot,Pe=null,Mn(e,t,a),Pe=i,Ot=l,Pe!==null)if(Ot)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(r){qe(a,t,r)}else try{Pe.removeChild(a.stateNode)}catch(r){qe(a,t,r)}break;case 18:Pe!==null&&(Ot?(e=Pe,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wi(e)):og(Pe,a.stateNode));break;case 4:i=Pe,l=Ot,Pe=a.stateNode.containerInfo,Ot=!0,Mn(e,t,a),Pe=i,Ot=l;break;case 0:case 11:case 14:case 15:Fn(2,a,t),st||Fn(4,a,t),Mn(e,t,a);break;case 1:st||(hn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&sp(a,t,i)),Mn(e,t,a);break;case 21:Mn(e,t,a);break;case 22:st=(i=st)||a.memoizedState!==null,Mn(e,t,a),st=i;break;default:Mn(e,t,a)}}function mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(a){qe(t,t.return,a)}}}function yp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(a){qe(t,t.return,a)}}function n0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dp),t;default:throw Error(s(435,e.tag))}}function kr(e,t){var a=n0(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=f0.bind(null,e,i);i.then(l,l)}})}function kt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 27:if(ra(h.type)){Pe=h.stateNode,Ot=!1;break e}break;case 5:Pe=h.stateNode,Ot=!1;break e;case 3:case 4:Pe=h.stateNode.containerInfo,Ot=!0;break e}h=h.return}if(Pe===null)throw Error(s(160));hp(r,c,l),Pe=null,Ot=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}var on=null;function vp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Ct(e),i&4&&(Fn(3,e,e.return),ul(3,e),Fn(5,e,e.return));break;case 1:kt(t,e),Ct(e),i&512&&(st||a===null||hn(a,a.return)),i&64&&Cn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=on;if(kt(t,e),Ct(e),i&512&&(st||a===null||hn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ni]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),$t(r,i,a),r[vt]=e,gt(r),i=r;break e;case"link":var c=vg("link","href",l).get(i+(a.href||""));if(c){for(var h=0;h<c.length;h++)if(r=c[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;case"meta":if(c=vg("meta","content",l).get(i+(a.content||""))){for(h=0;h<c.length;h++)if(r=c[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;default:throw Error(s(468,i))}r[vt]=e,gt(r),i=r}e.stateNode=i}else bg(l,e.type,e.stateNode);else e.stateNode=yg(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?bg(l,e.type,e.stateNode):yg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&nc(e,e.memoizedProps,a.memoizedProps)}break;case 27:kt(t,e),Ct(e),i&512&&(st||a===null||hn(a,a.return)),a!==null&&i&4&&nc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kt(t,e),Ct(e),i&512&&(st||a===null||hn(a,a.return)),e.flags&32){l=e.stateNode;try{Qa(l,"")}catch(fe){qe(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,nc(e,l,a!==null?a.memoizedProps:l)),i&1024&&(lc=!0);break;case 6:if(kt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){qe(e,e.return,fe)}}break;case 3:if(Zr=null,l=on,on=Xr(t.containerInfo),kt(t,e),on=l,Ct(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(fe){qe(e,e.return,fe)}lc&&(lc=!1,bp(e));break;case 4:i=on,on=Xr(e.stateNode.containerInfo),kt(t,e),Ct(e),on=i;break;case 12:kt(t,e),Ct(e);break;case 31:kt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 13:kt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mr=zt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 22:l=e.memoizedState!==null;var $=a!==null&&a.memoizedState!==null,U=Cn,Q=st;if(Cn=U||l,st=Q||$,kt(t,e),st=Q,Cn=U,Ct(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||$||Cn||st||Ca(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){$=a=t;try{if(r=$.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=$.stateNode;var F=$.memoizedProps.style,G=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(fe){qe($,$.return,fe)}}}else if(t.tag===6){if(a===null){$=t;try{$.stateNode.nodeValue=l?"":$.memoizedProps}catch(fe){qe($,$.return,fe)}}}else if(t.tag===18){if(a===null){$=t;try{var V=$.stateNode;l?sg(V,!0):sg($.stateNode,!1)}catch(fe){qe($,$.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,kr(e,a))));break;case 19:kt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 30:break;case 21:break;default:kt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(up(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,r=ac(e);Or(e,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(Qa(c,""),a.flags&=-33);var h=ac(e);Or(e,h,c);break;case 3:case 4:var $=a.stateNode.containerInfo,U=ac(e);ic(e,U,$);break;default:throw Error(s(161))}}catch(Q){qe(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pp(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),Ca(t);break;case 1:hn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sp(t,t.return,a),Ca(t);break;case 27:Sl(t.stateNode);case 26:case 5:hn(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function Hn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:Hn(l,r,a),ul(4,r);break;case 1:if(Hn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(U){qe(i,i.return,U)}if(i=r,l=i.updateQueue,l!==null){var h=i.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)Pf($[l],h)}catch(U){qe(i,i.return,U)}}a&&c&64&&op(r),fl(r,r.return);break;case 27:fp(r);case 26:case 5:Hn(l,r,a),a&&i===null&&c&4&&cp(r),fl(r,r.return);break;case 12:Hn(l,r,a);break;case 31:Hn(l,r,a),a&&c&4&&mp(l,r);break;case 13:Hn(l,r,a),a&&c&4&&yp(l,r);break;case 22:r.memoizedState===null&&Hn(l,r,a),fl(r,r.return);break;case 30:break;default:Hn(l,r,a)}t=t.sibling}}function rc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ji(a))}function oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function sn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sp(e,t,a,i),t=t.sibling}function Sp(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,a,i),l&2048&&ul(9,t);break;case 1:sn(e,t,a,i);break;case 3:sn(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){sn(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,h=r.onPostCommit;typeof h=="function"&&h(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch($){qe(t,t.return,$)}}else sn(e,t,a,i);break;case 31:sn(e,t,a,i);break;case 13:sn(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?sn(e,t,a,i):dl(e,t):r._visibility&2?sn(e,t,a,i):(r._visibility|=2,di(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&rc(c,t);break;case 24:sn(e,t,a,i),l&2048&&oc(t.alternate,t);break;default:sn(e,t,a,i)}}function di(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,h=a,$=i,U=c.flags;switch(c.tag){case 0:case 11:case 15:di(r,c,h,$,l),ul(8,c);break;case 23:break;case 22:var Q=c.stateNode;c.memoizedState!==null?Q._visibility&2?di(r,c,h,$,l):dl(r,c):(Q._visibility|=2,di(r,c,h,$,l)),l&&U&2048&&rc(c.alternate,c);break;case 24:di(r,c,h,$,l),l&&U&2048&&oc(c.alternate,c);break;default:di(r,c,h,$,l)}t=t.sibling}}function dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:dl(a,i),l&2048&&rc(i.alternate,i);break;case 24:dl(a,i),l&2048&&oc(i.alternate,i);break;default:dl(a,i)}t=t.sibling}}var pl=8192;function pi(e,t,a){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)xp(e,t,a),e=e.sibling}function xp(e,t,a){switch(e.tag){case 26:pi(e,t,a),e.flags&pl&&e.memoizedState!==null&&q0(a,on,e.memoizedState,e.memoizedProps);break;case 5:pi(e,t,a);break;case 3:case 4:var i=on;on=Xr(e.stateNode.containerInfo),pi(e,t,a),on=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pl,pl=16777216,pi(e,t,a),pl=i):pi(e,t,a));break;default:pi(e,t,a)}}function $p(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,zp(i,e)}$p(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cr(e)):gl(e);break;default:gl(e)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,zp(i,e)}$p(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),Cr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Cr(t));break;default:Cr(t)}e=e.sibling}}function zp(e,t){for(;ht!==null;){var a=ht;switch(a.tag){case 0:case 11:case 15:Fn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ht=i;else e:for(a=e;ht!==null;){i=ht;var l=i.sibling,r=i.return;if(gp(i),i===a){ht=null;break e}if(l!==null){l.return=r,ht=l;break e}ht=r}}}var a0={getCacheForType:function(e){var t=St(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(lt).controller.signal}},i0=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Qe=null,ke=null,Me=0,Ge=0,Gt=null,ea=!1,gi=!1,sc=!1,Rn=0,tt=0,ta=0,Ma=0,cc=0,qt=0,hi=0,hl=null,Mt=null,uc=!1,Mr=0,Tp=0,Dr=1/0,Hr=null,na=null,ft=0,aa=null,mi=null,Ln=0,fc=0,dc=null,jp=null,ml=0,pc=null;function Yt(){return(Ue&2)!==0&&Me!==0?Me&-Me:E.T!==null?bc():Gu()}function Ep(){if(qt===0)if((Me&536870912)===0||He){var e=Yl;Yl<<=1,(Yl&3932160)===0&&(Yl=262144),qt=e}else qt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),qt}function Dt(e,t,a){(e===Qe&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(yi(e,0),ia(e,Me,qt,!1)),Li(e,a),((Ue&2)===0||e!==Qe)&&(e===Qe&&((Ue&2)===0&&(Ma|=a),tt===4&&ia(e,Me,qt,!1)),mn(e))}function _p(e,t,a){if((Ue&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ri(e,t),l=i?o0(e,t):hc(e,t,!0),r=i;do{if(l===0){gi&&!i&&ia(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!l0(a)){l=hc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var h=e;l=hl;var $=h.current.memoizedState.isDehydrated;if($&&(yi(h,c).flags|=256),c=hc(h,c,!1),c!==2){if(sc&&!$){h.errorRecoveryDisabledLanes|=r,Ma|=r,l=4;break e}r=Mt,Mt=l,r!==null&&(Mt===null?Mt=r:Mt.push.apply(Mt,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){yi(e,0),ia(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ia(i,t,qt,!ea);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Mr+300-zt(),10<l)){if(ia(i,t,qt,!ea),Xl(i,0,!0)!==0)break e;Ln=t,i.timeoutHandle=lg(Ap.bind(null,i,a,Mt,Hr,uc,t,qt,Ma,hi,ea,r,"Throttled",-0,0),l);break e}Ap(i,a,Mt,Hr,uc,t,qt,Ma,hi,ea,r,null,-0,0)}}break}while(!0);mn(e)}function Ap(e,t,a,i,l,r,c,h,$,U,Q,F,G,V){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$n},xp(t,r,F);var fe=(r&62914560)===r?Mr-zt():(r&4194048)===r?Tp-zt():0;if(fe=Y0(F,fe),fe!==null){Ln=r,e.cancelPendingCommit=fe(Lp.bind(null,e,t,r,a,i,l,c,h,$,Q,F,null,G,V)),ia(e,r,c,!U);return}}Lp(e,t,r,a,i,l,c,h,$)}function l0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Lt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,a,i){t&=~cc,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Rt(l),c=1<<r;i[r]=-1,l&=~c}a!==0&&Nu(e,a,t)}function Rr(){return(Ue&6)===0?(yl(0),!1):!0}function gc(){if(ke!==null){if(Ge===0)var e=ke.return;else e=ke,jn=za=null,Os(e),oi=null,Fi=0,e=ke;for(;e!==null;)rp(e.alternate,e),e=e.return;ke=null}}function yi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,T0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ln=0,gc(),Qe=e,ke=a=zn(e.current,null),Me=t,Ge=0,Gt=null,ea=!1,gi=Ri(e,t),sc=!1,hi=qt=cc=Ma=ta=tt=0,Mt=hl=null,uc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Rt(i),r=1<<l;t|=e[l],i&=~r}return Rn=t,ar(),a}function Op(e,t){we=null,E.H=ol,t===ri||t===fr?(t=Qf(),Ge=3):t===vs?(t=Qf(),Ge=4):Ge=t===Qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,ke===null&&(tt=1,Tr(e,Wt(t,e.current)))}function kp(){var e=Ut.current;return e===null?!0:(Me&4194048)===Me?Ft===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Ft:!1}function Cp(){var e=E.H;return E.H=ol,e===null?ol:e}function Mp(){var e=E.A;return E.A=a0,e}function Lr(){tt=4,ea||(Me&4194048)!==Me&&Ut.current!==null||(gi=!0),(ta&134217727)===0&&(Ma&134217727)===0||Qe===null||ia(Qe,Me,qt,!1)}function hc(e,t,a){var i=Ue;Ue|=2;var l=Cp(),r=Mp();(Qe!==e||Me!==t)&&(Hr=null,yi(e,t)),t=!1;var c=tt;e:do try{if(Ge!==0&&ke!==null){var h=ke,$=Gt;switch(Ge){case 8:gc(),c=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var U=Ge;if(Ge=0,Gt=null,vi(e,h,$,U),a&&gi){c=0;break e}break;default:U=Ge,Ge=0,Gt=null,vi(e,h,$,U)}}r0(),c=tt;break}catch(Q){Op(e,Q)}while(!0);return t&&e.shellSuspendCounter++,jn=za=null,Ue=i,E.H=l,E.A=r,ke===null&&(Qe=null,Me=0,ar()),c}function r0(){for(;ke!==null;)Dp(ke)}function o0(e,t){var a=Ue;Ue|=2;var i=Cp(),l=Mp();Qe!==e||Me!==t?(Hr=null,Dr=zt()+500,yi(e,t)):gi=Ri(e,t);e:do try{if(Ge!==0&&ke!==null){t=ke;var r=Gt;t:switch(Ge){case 1:Ge=0,Gt=null,vi(e,t,r,1);break;case 2:case 9:if(Vf(r)){Ge=0,Gt=null,Hp(t);break}t=function(){Ge!==2&&Ge!==9||Qe!==e||(Ge=7),mn(e)},r.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Vf(r)?(Ge=0,Gt=null,Hp(t)):(Ge=0,Gt=null,vi(e,t,r,7));break;case 5:var c=null;switch(ke.tag){case 26:c=ke.memoizedState;case 5:case 27:var h=ke;if(c?Sg(c):h.stateNode.complete){Ge=0,Gt=null;var $=h.sibling;if($!==null)ke=$;else{var U=h.return;U!==null?(ke=U,Nr(U)):ke=null}break t}}Ge=0,Gt=null,vi(e,t,r,5);break;case 6:Ge=0,Gt=null,vi(e,t,r,6);break;case 8:gc(),tt=6;break e;default:throw Error(s(462))}}s0();break}catch(Q){Op(e,Q)}while(!0);return jn=za=null,E.H=i,E.A=l,Ue=a,ke!==null?0:(Qe=null,Me=0,ar(),tt)}function s0(){for(;ke!==null&&!Sn();)Dp(ke)}function Dp(e){var t=ip(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?Nr(e):ke=t}function Hp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Id(a,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Id(a,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Os(t);default:rp(a,t),t=ke=Mf(t,Rn),t=ip(a,t,Rn)}e.memoizedProps=e.pendingProps,t===null?Nr(e):ke=t}function vi(e,t,a,i){jn=za=null,Os(t),oi=null,Fi=0;var l=t.return;try{if(Py(e,l,t,a,Me)){tt=1,Tr(e,Wt(a,e.current)),ke=null;return}}catch(r){if(l!==null)throw ke=l,r;tt=1,Tr(e,Wt(a,e.current)),ke=null;return}t.flags&32768?(He||i===1?e=!0:gi||(Me&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Rp(t,e)):Nr(t)}function Nr(e){var t=e;do{if((t.flags&32768)!==0){Rp(t,ea);return}e=t.return;var a=Fy(t.alternate,t,Rn);if(a!==null){ke=a;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);tt===0&&(tt=5)}function Rp(e,t){do{var a=e0(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);tt=6,ke=null}function Lp(e,t,a,i,l,r,c,h,$){e.cancelPendingCommit=null;do Ur();while(ft!==0);if((Ue&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=as,Gm(e,a,r,c,h,$),e===Qe&&(ke=Qe=null,Me=0),mi=t,aa=e,Ln=a,fc=r,dc=l,jp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d0(dn,function(){return qp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,l=u.p,u.p=2,c=Ue,Ue|=4;try{t0(e,t,a)}finally{Ue=c,u.p=l,E.T=i}}ft=1,Np(),Up(),Bp()}}function Np(){if(ft===1){ft=0;var e=aa,t=mi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var i=u.p;u.p=2;var l=Ue;Ue|=4;try{vp(t,e);var r=Ec,c=zf(e.containerInfo),h=r.focusedElem,$=r.selectionRange;if(c!==h&&h&&h.ownerDocument&&wf(h.ownerDocument.documentElement,h)){if($!==null&&Io(h)){var U=$.start,Q=$.end;if(Q===void 0&&(Q=U),"selectionStart"in h)h.selectionStart=U,h.selectionEnd=Math.min(Q,h.value.length);else{var F=h.ownerDocument||document,G=F&&F.defaultView||window;if(G.getSelection){var V=G.getSelection(),fe=h.textContent.length,ve=Math.min($.start,fe),Xe=$.end===void 0?ve:Math.min($.end,fe);!V.extend&&ve>Xe&&(c=Xe,Xe=ve,ve=c);var C=$f(h,ve),j=$f(h,Xe);if(C&&j&&(V.rangeCount!==1||V.anchorNode!==C.node||V.anchorOffset!==C.offset||V.focusNode!==j.node||V.focusOffset!==j.offset)){var L=F.createRange();L.setStart(C.node,C.offset),V.removeAllRanges(),ve>Xe?(V.addRange(L),V.extend(j.node,j.offset)):(L.setEnd(j.node,j.offset),V.addRange(L))}}}}for(F=[],V=h;V=V.parentNode;)V.nodeType===1&&F.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var I=F[h];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Jr=!!jc,Ec=jc=null}finally{Ue=l,u.p=i,E.T=a}}e.current=t,ft=2}}function Up(){if(ft===2){ft=0;var e=aa,t=mi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var i=u.p;u.p=2;var l=Ue;Ue|=4;try{pp(e,t.alternate,t)}finally{Ue=l,u.p=i,E.T=a}}ft=3}}function Bp(){if(ft===4||ft===3){ft=0,Ua();var e=aa,t=mi,a=Ln,i=jp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,mi=aa=null,Gp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(na=null),Mo(a),t=t.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=E.T,l=u.p,u.p=2,E.T=null;try{for(var r=e.onRecoverableError,c=0;c<i.length;c++){var h=i[c];r(h.value,{componentStack:h.stack})}}finally{E.T=t,u.p=l}}(Ln&3)!==0&&Ur(),mn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===pc?ml++:(ml=0,pc=e):ml=0,yl(0)}}function Gp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Ur(){return Np(),Up(),Bp(),qp()}function qp(){if(ft!==5)return!1;var e=aa,t=fc;fc=0;var a=Mo(Ln),i=E.T,l=u.p;try{u.p=32>a?32:a,E.T=null,a=dc,dc=null;var r=aa,c=Ln;if(ft=0,mi=aa=null,Ln=0,(Ue&6)!==0)throw Error(s(331));var h=Ue;if(Ue|=4,wp(r.current),Sp(r,r.current,c,a),Ue=h,yl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Hi,r)}catch{}return!0}finally{u.p=l,E.T=i,Gp(e,t)}}function Yp(e,t,a){t=Wt(a,t),t=Xs(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Li(e,2),mn(e))}function qe(e,t,a){if(e.tag===3)Yp(e,e,a);else for(;t!==null;){if(t.tag===3){Yp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=Wt(a,e),a=Vd(2),i=Pn(t,a,2),i!==null&&(Xd(a,i,t,e),Li(i,2),mn(i));break}}t=t.return}}function mc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new i0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(sc=!0,l.add(a),e=c0.bind(null,e,t,a),t.then(e,e))}function c0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Me&a)===a&&(tt===4||tt===3&&(Me&62914560)===Me&&300>zt()-Mr?(Ue&2)===0&&yi(e,0):cc|=a,hi===Me&&(hi=0)),mn(e)}function Vp(e,t){t===0&&(t=Lu()),e=xa(e,t),e!==null&&(Li(e,t),mn(e))}function u0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vp(e,a)}function f0(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Vp(e,a)}function d0(e,t){return nt(e,t)}var Br=null,bi=null,yc=!1,Gr=!1,vc=!1,la=0;function mn(e){e!==bi&&e.next===null&&(bi===null?Br=bi=e:bi=bi.next=e),Gr=!0,yc||(yc=!0,g0())}function yl(e,t){if(!vc&&Gr){vc=!0;do for(var a=!1,i=Br;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var c=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-Rt(42|e)+1)-1,r&=l&~(c&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Kp(i,r))}else r=Me,r=Xl(i,i===Qe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ri(i,r)||(a=!0,Kp(i,r));i=i.next}while(a);vc=!1}}function p0(){Xp()}function Xp(){Gr=yc=!1;var e=0;la!==0&&z0()&&(e=la);for(var t=zt(),a=null,i=Br;i!==null;){var l=i.next,r=Qp(i,t);r===0?(i.next=null,a===null?Br=l:a.next=l,l===null&&(bi=a)):(a=i,(e!==0||(r&3)!==0)&&(Gr=!0)),i=l}ft!==0&&ft!==5||yl(e),la!==0&&(la=0)}function Qp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-Rt(r),h=1<<c,$=l[c];$===-1?((h&a)===0||(h&i)!==0)&&(l[c]=Bm(h,t)):$<=t&&(e.expiredLanes|=h),r&=~h}if(t=Qe,a=Me,a=Xl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ri(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&yt(i),Mo(a)){case 2:case 8:a=ln;break;case 32:a=dn;break;case 268435456:a=Ru;break;default:a=dn}return i=Zp.bind(null,e),a=nt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&yt(i),e.callbackPriority=2,e.callbackNode=null,2}function Zp(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ur()&&e.callbackNode!==a)return null;var i=Me;return i=Xl(e,e===Qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(_p(e,i,t),Qp(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Zp.bind(null,e):null)}function Kp(e,t){if(Ur())return null;_p(e,t,!0)}function g0(){j0(function(){(Ue&6)!==0?nt(Gl,p0):Xp()})}function bc(){if(la===0){var e=ii;e===0&&(e=ql,ql<<=1,(ql&261888)===0&&(ql=256)),la=e}return la}function Wp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function Pp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function h0(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Wp((l[_t]||null).action),c=i.submitter;c&&(t=(t=c[_t]||null)?Wp(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var h=new Fl("action","action",null,i,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var $=c?Pp(l,c):new FormData(l);Us(a,{pending:!0,data:$,method:l.method,action:r},null,$)}}else typeof r=="function"&&(h.preventDefault(),$=c?Pp(l,c):new FormData(l),Us(a,{pending:!0,data:$,method:l.method,action:r},r,$))},currentTarget:l}]})}}for(var Sc=0;Sc<ns.length;Sc++){var xc=ns[Sc],m0=xc.toLowerCase(),y0=xc[0].toUpperCase()+xc.slice(1);rn(m0,"on"+y0)}rn(Ef,"onAnimationEnd"),rn(_f,"onAnimationIteration"),rn(Af,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(My,"onTransitionRun"),rn(Dy,"onTransitionStart"),rn(Hy,"onTransitionCancel"),rn(Of,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function Jp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var c=i.length-1;0<=c;c--){var h=i[c],$=h.instance,U=h.currentTarget;if(h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=U;try{r(l)}catch(Q){nr(Q)}l.currentTarget=null,r=$}else for(c=0;c<i.length;c++){if(h=i[c],$=h.instance,U=h.currentTarget,h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=U;try{r(l)}catch(Q){nr(Q)}l.currentTarget=null,r=$}}}}function Ce(e,t){var a=t[Do];a===void 0&&(a=t[Do]=new Set);var i=e+"__bubble";a.has(i)||(Ip(t,e,2,!1),a.add(i))}function $c(e,t,a){var i=0;t&&(i|=4),Ip(a,e,i,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[qr]){e[qr]=!0,Vu.forEach(function(a){a!=="selectionchange"&&(v0.has(a)||$c(a,!1,e),$c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,$c("selectionchange",!1,t))}}function Ip(e,t,a,i){switch(Eg(t)){case 2:var l=Q0;break;case 8:l=Z0;break;default:l=Nc}a=l.bind(null,t,a,e),l=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function zc(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var h=i.stateNode.containerInfo;if(h===l)break;if(c===4)for(c=i.return;c!==null;){var $=c.tag;if(($===3||$===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;h!==null;){if(c=Ga(h),c===null)return;if($=c.tag,$===5||$===6||$===26||$===27){i=r=c;continue e}h=h.parentNode}}i=i.return}nf(function(){var U=r,Q=Go(a),F=[];e:{var G=kf.get(e);if(G!==void 0){var V=Fl,fe=e;switch(e){case"keypress":if(Jl(a)===0)break e;case"keydown":case"keyup":V=fy;break;case"focusin":fe="focus",V=Zo;break;case"focusout":fe="blur",V=Zo;break;case"beforeblur":case"afterblur":V=Zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=gy;break;case Ef:case _f:case Af:V=ny;break;case Of:V=my;break;case"scroll":case"scrollend":V=Jm;break;case"wheel":V=vy;break;case"copy":case"cut":case"paste":V=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=sf;break;case"toggle":case"beforetoggle":V=Sy}var ve=(t&4)!==0,Xe=!ve&&(e==="scroll"||e==="scrollend"),C=ve?G!==null?G+"Capture":null:G;ve=[];for(var j=U,L;j!==null;){var I=j;if(L=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||L===null||C===null||(I=Bi(j,C),I!=null&&ve.push(bl(j,I,L))),Xe)break;j=j.return}0<ve.length&&(G=new V(G,fe,null,a,Q),F.push({event:G,listeners:ve}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",G&&a!==Bo&&(fe=a.relatedTarget||a.fromElement)&&(Ga(fe)||fe[Ba]))break e;if((V||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,V?(fe=a.relatedTarget||a.toElement,V=U,fe=fe?Ga(fe):null,fe!==null&&(Xe=b(fe),ve=fe.tag,fe!==Xe||ve!==5&&ve!==27&&ve!==6)&&(fe=null)):(V=null,fe=U),V!==fe)){if(ve=rf,I="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ve=sf,I="onPointerLeave",C="onPointerEnter",j="pointer"),Xe=V==null?G:Ui(V),L=fe==null?G:Ui(fe),G=new ve(I,j+"leave",V,a,Q),G.target=Xe,G.relatedTarget=L,I=null,Ga(Q)===U&&(ve=new ve(C,j+"enter",fe,a,Q),ve.target=L,ve.relatedTarget=Xe,I=ve),Xe=I,V&&fe)t:{for(ve=b0,C=V,j=fe,L=0,I=C;I;I=ve(I))L++;I=0;for(var ye=j;ye;ye=ve(ye))I++;for(;0<L-I;)C=ve(C),L--;for(;0<I-L;)j=ve(j),I--;for(;L--;){if(C===j||j!==null&&C===j.alternate){ve=C;break t}C=ve(C),j=ve(j)}ve=null}else ve=null;V!==null&&Fp(F,G,V,ve,!1),fe!==null&&Xe!==null&&Fp(F,Xe,fe,ve,!0)}}e:{if(G=U?Ui(U):window,V=G.nodeName&&G.nodeName.toLowerCase(),V==="select"||V==="input"&&G.type==="file")var Le=mf;else if(gf(G))if(yf)Le=Oy;else{Le=_y;var ge=Ey}else V=G.nodeName,!V||V.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&Uo(U.elementType)&&(Le=mf):Le=Ay;if(Le&&(Le=Le(e,U))){hf(F,Le,a,Q);break e}ge&&ge(e,G,U),e==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&No(G,"number",G.value)}switch(ge=U?Ui(U):window,e){case"focusin":(gf(ge)||ge.contentEditable==="true")&&(Pa=ge,Fo=U,Ki=null);break;case"focusout":Ki=Fo=Pa=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,Tf(F,a,Q);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Tf(F,a,Q)}var Te;if(Wo)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Wa?df(e,a)&&(De="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(cf&&a.locale!=="ko"&&(Wa||De!=="onCompositionStart"?De==="onCompositionEnd"&&Wa&&(Te=af()):(Yn=Q,Vo="value"in Yn?Yn.value:Yn.textContent,Wa=!0)),ge=Yr(U,De),0<ge.length&&(De=new of(De,e,null,a,Q),F.push({event:De,listeners:ge}),Te?De.data=Te:(Te=pf(a),Te!==null&&(De.data=Te)))),(Te=$y?wy(e,a):zy(e,a))&&(De=Yr(U,"onBeforeInput"),0<De.length&&(ge=new of("onBeforeInput","beforeinput",null,a,Q),F.push({event:ge,listeners:De}),ge.data=Te)),h0(F,e,U,a,Q)}Jp(F,t)})}function bl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yr(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Bi(e,a),l!=null&&i.unshift(bl(e,l,r)),l=Bi(e,t),l!=null&&i.push(bl(e,l,r))),e.tag===3)return i;e=e.return}return[]}function b0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fp(e,t,a,i,l){for(var r=t._reactName,c=[];a!==null&&a!==i;){var h=a,$=h.alternate,U=h.stateNode;if(h=h.tag,$!==null&&$===i)break;h!==5&&h!==26&&h!==27||U===null||($=U,l?(U=Bi(a,r),U!=null&&c.unshift(bl(a,U,$))):l||(U=Bi(a,r),U!=null&&c.push(bl(a,U,$)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var S0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(x0,"")}function tg(e,t){return t=eg(t),eg(e)===t}function Ve(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":Zl(e,"class",i);break;case"tabIndex":Zl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,a,i);break;case"style":ef(e,i,r);break;case"data":if(t!=="object"){Zl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",l.name,l,null),Ve(e,t,"formEncType",l.formEncType,l,null),Ve(e,t,"formMethod",l.formMethod,l,null),Ve(e,t,"formTarget",l.formTarget,l,null)):(Ve(e,t,"encType",l.encType,l,null),Ve(e,t,"method",l.method,l,null),Ve(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=$n);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Wl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ql(e,"popover",i);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wm.get(a)||a,Ql(e,a,i))}}function Tc(e,t,a,i,l,r){switch(a){case"style":ef(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=$n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[_t]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Ql(e,a,i)}}}function $t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,r,c,a,null)}}l&&Ve(e,t,"srcSet",a.srcSet,a,null),i&&Ve(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var h=r=c=l=null,$=null,U=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":l=Q;break;case"type":c=Q;break;case"checked":$=Q;break;case"defaultChecked":U=Q;break;case"value":r=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,t));break;default:Ve(e,t,i,Q,a,null)}}Pu(e,r,h,$,U,c,l,!1);return;case"select":Ce("invalid",e),i=c=r=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":c=h;break;case"multiple":i=h;default:Ve(e,t,l,h,a,null)}t=r,a=c,e.multiple=!!i,t!=null?Xa(e,!!i,t,!1):a!=null&&Xa(e,!!i,a,!0);return;case"textarea":Ce("invalid",e),r=l=i=null;for(c in a)if(a.hasOwnProperty(c)&&(h=a[c],h!=null))switch(c){case"value":i=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Ve(e,t,c,h,a,null)}Iu(e,i,l,r);return;case"option":for($ in a)if(a.hasOwnProperty($)&&(i=a[$],i!=null))switch($){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ve(e,t,$,i,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<vl.length;i++)Ce(vl[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(i=a[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,U,i,a,null)}return;default:if(Uo(t)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&Tc(e,t,Q,i,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(i=a[h],i!=null&&Ve(e,t,h,i,a,null))}function $0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,h=null,$=null,U=null,Q=null;for(V in a){var F=a[V];if(a.hasOwnProperty(V)&&F!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":$=F;default:i.hasOwnProperty(V)||Ve(e,t,V,null,i,F)}}for(var G in i){var V=i[G];if(F=a[G],i.hasOwnProperty(G)&&(V!=null||F!=null))switch(G){case"type":r=V;break;case"name":l=V;break;case"checked":U=V;break;case"defaultChecked":Q=V;break;case"value":c=V;break;case"defaultValue":h=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,t));break;default:V!==F&&Ve(e,t,G,V,i,F)}}Lo(e,c,h,$,U,Q,r,l);return;case"select":V=c=h=G=null;for(r in a)if($=a[r],a.hasOwnProperty(r)&&$!=null)switch(r){case"value":break;case"multiple":V=$;default:i.hasOwnProperty(r)||Ve(e,t,r,null,i,$)}for(l in i)if(r=i[l],$=a[l],i.hasOwnProperty(l)&&(r!=null||$!=null))switch(l){case"value":G=r;break;case"defaultValue":h=r;break;case"multiple":c=r;default:r!==$&&Ve(e,t,l,r,i,$)}t=h,a=c,i=V,G!=null?Xa(e,!!a,G,!1):!!i!=!!a&&(t!=null?Xa(e,!!a,t,!0):Xa(e,!!a,a?[]:"",!1));return;case"textarea":V=G=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ve(e,t,h,null,i,l)}for(c in i)if(l=i[c],r=a[c],i.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":G=l;break;case"defaultValue":V=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Ve(e,t,c,l,i,r)}Ju(e,G,V);return;case"option":for(var fe in a)if(G=a[fe],a.hasOwnProperty(fe)&&G!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ve(e,t,fe,null,i,G)}for($ in i)if(G=i[$],V=a[$],i.hasOwnProperty($)&&G!==V&&(G!=null||V!=null))switch($){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Ve(e,t,$,G,i,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)G=a[ve],a.hasOwnProperty(ve)&&G!=null&&!i.hasOwnProperty(ve)&&Ve(e,t,ve,null,i,G);for(U in i)if(G=i[U],V=a[U],i.hasOwnProperty(U)&&G!==V&&(G!=null||V!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,t));break;default:Ve(e,t,U,G,i,V)}return;default:if(Uo(t)){for(var Xe in a)G=a[Xe],a.hasOwnProperty(Xe)&&G!==void 0&&!i.hasOwnProperty(Xe)&&Tc(e,t,Xe,void 0,i,G);for(Q in i)G=i[Q],V=a[Q],!i.hasOwnProperty(Q)||G===V||G===void 0&&V===void 0||Tc(e,t,Q,G,i,V);return}}for(var C in a)G=a[C],a.hasOwnProperty(C)&&G!=null&&!i.hasOwnProperty(C)&&Ve(e,t,C,null,i,G);for(F in i)G=i[F],V=a[F],!i.hasOwnProperty(F)||G===V||G==null&&V==null||Ve(e,t,F,G,i,V)}function ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function w0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,c=l.initiatorType,h=l.duration;if(r&&h&&ng(c)){for(c=0,h=l.responseEnd,i+=1;i<a.length;i++){var $=a[i],U=$.startTime;if(U>h)break;var Q=$.transferSize,F=$.initiatorType;Q&&ng(F)&&($=$.responseEnd,c+=Q*($<h?1:(h-U)/($-U)))}if(--i,t+=8*(r+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jc=null,Ec=null;function Vr(e){return e.nodeType===9?e:e.ownerDocument}function ag(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ig(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function z0(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch(E0)}:lg;function E0(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function og(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),wi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sl(a);for(var r=a.firstChild;r;){var c=r.nextSibling,h=r.nodeName;r[Ni]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Sl(e.ownerDocument.body);a=l}while(a);wi(t)}function sg(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oc(a),Ho(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ni])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function A0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=en(e.nextSibling),e===null))return null;return e}function cg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=en(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function ug(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return en(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function fg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function dg(e,t,a){switch(t=Vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ho(e)}var tn=new Map,pg=new Set;function Xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=u.d;u.d={f:k0,r:C0,D:M0,C:D0,L:H0,m:R0,X:N0,S:L0,M:U0};function k0(){var e=Nn.f(),t=Rr();return e||t}function C0(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?Od(t):Nn.r(e)}var Si=typeof document>"u"?null:document;function gg(e,t,a){var i=Si;if(i&&typeof t=="string"&&t){var l=Zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),pg.has(l)||(pg.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function M0(e){Nn.D(e),gg("dns-prefetch",e,null)}function D0(e,t){Nn.C(e,t),gg("preconnect",e,t)}function H0(e,t,a){Nn.L(e,t,a);var i=Si;if(i&&e&&t){var l='link[rel="preload"][as="'+Zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Zt(a.imageSizes)+'"]')):l+='[href="'+Zt(e)+'"]';var r=l;switch(t){case"style":r=xi(e);break;case"script":r=$i(e)}tn.has(r)||(e=W({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),tn.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(xl(r))||t==="script"&&i.querySelector($l(r))||(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function R0(e,t){Nn.m(e,t);var a=Si;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Zt(i)+'"][href="'+Zt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$i(e)}if(!tn.has(r)&&(e=W({rel:"modulepreload",href:e},t),tn.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(r)))return}i=a.createElement("link"),$t(i,"link",e),gt(i),a.head.appendChild(i)}}}function L0(e,t,a){Nn.S(e,t,a);var i=Si;if(i&&e){var l=Ya(i).hoistableStyles,r=xi(e);t=t||"default";var c=l.get(r);if(!c){var h={loading:0,preload:null};if(c=i.querySelector(xl(r)))h.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":t},a),(a=tn.get(r))&&Dc(e,a);var $=c=i.createElement("link");gt($),$t($,"link",e),$._p=new Promise(function(U,Q){$.onload=U,$.onerror=Q}),$.addEventListener("load",function(){h.loading|=1}),$.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Qr(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:h},l.set(r,c)}}}function N0(e,t){Nn.X(e,t);var a=Si;if(a&&e){var i=Ya(a).hoistableScripts,l=$i(e),r=i.get(l);r||(r=a.querySelector($l(l)),r||(e=W({src:e,async:!0},t),(t=tn.get(l))&&Hc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function U0(e,t){Nn.M(e,t);var a=Si;if(a&&e){var i=Ya(a).hoistableScripts,l=$i(e),r=i.get(l);r||(r=a.querySelector($l(l)),r||(e=W({src:e,async:!0,type:"module"},t),(t=tn.get(l))&&Hc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function hg(e,t,a,i){var l=(l=K.current)?Xr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xi(a.href),a=Ya(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xi(a.href);var r=Ya(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(xl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),tn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},tn.set(e,a),r||B0(l,e,a,c.state))),t&&i===null)throw Error(s(528,""));return c}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$i(a),a=Ya(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xi(e){return'href="'+Zt(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function mg(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function B0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$t(t,"link",a),gt(t),e.head.appendChild(t))}function $i(e){return'[src="'+Zt(e)+'"]'}function $l(e){return"script[async]"+e}function yg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(i)return t.instance=i,gt(i),i;var l=W({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gt(i),$t(i,"style",l),Qr(i,a.precedence,e),t.instance=i;case"stylesheet":l=xi(a.href);var r=e.querySelector(xl(l));if(r)return t.state.loading|=4,t.instance=r,gt(r),r;i=mg(a),(l=tn.get(l))&&Dc(i,l),r=(e.ownerDocument||e).createElement("link"),gt(r);var c=r;return c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),$t(r,"link",i),t.state.loading|=4,Qr(r,a.precedence,e),t.instance=r;case"script":return r=$i(a.src),(l=e.querySelector($l(r)))?(t.instance=l,gt(l),l):(i=a,(l=tn.get(r))&&(i=W({},a),Hc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),gt(l),$t(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Qr(i,a.precedence,e));return t.instance}function Qr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,c=0;c<i.length;c++){var h=i[c];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zr=null;function vg(e,t,a){if(Zr===null){var i=new Map,l=Zr=new Map;l.set(a,i)}else l=Zr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Ni]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var h=i.get(c);h?h.push(r):i.set(c,[r])}}return i}function bg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function G0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=xi(i.href),r=t.querySelector(xl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,gt(r);return}r=t.ownerDocument||t,i=mg(i),(l=tn.get(l))&&Dc(i,l),r=r.createElement("link"),gt(r);var c=r;c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),$t(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Rc=0;function Y0(e,t){return e.stylesheets&&e.count===0&&Pr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*w0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function Pr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(V0,e),Wr=null,Kr.call(e))}function V0(e,t){if(!(t.state.loading&4)){var a=Wr.get(e);if(a)var i=a.get(null);else{a=new Map,Wr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}l=t.instance,c=l.getAttribute("data-precedence"),r=a.get(c)||i,r===i&&a.set(null,l),a.set(c,l),this.count++,i=Kr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var wl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function X0(e,t,a,i,l,r,c,h,$){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.hiddenUpdates=ko(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=$,this.incompleteTransitions=new Map}function xg(e,t,a,i,l,r,c,h,$,U,Q,F){return e=new X0(e,t,a,c,$,U,Q,F,h),t=1,r===!0&&(t|=24),r=Nt(3,null,null,t),e.current=r,r.stateNode=e,t=hs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},bs(r),e}function $g(e){return e?(e=Fa,e):Fa}function wg(e,t,a,i,l,r){l=$g(l),i.context===null?i.context=l:i.pendingContext=l,i=Wn(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Pn(e,i,t),a!==null&&(Dt(a,e,t),tl(a,e,t))}function zg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lc(e,t){zg(e,t),(e=e.alternate)&&zg(e,t)}function Tg(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Dt(t,e,67108864),Lc(e,67108864)}}function jg(e){if(e.tag===13||e.tag===31){var t=Yt();t=Co(t);var a=xa(e,t);a!==null&&Dt(a,e,t),Lc(e,t)}}var Jr=!0;function Q0(e,t,a,i){var l=E.T;E.T=null;var r=u.p;try{u.p=2,Nc(e,t,a,i)}finally{u.p=r,E.T=l}}function Z0(e,t,a,i){var l=E.T;E.T=null;var r=u.p;try{u.p=8,Nc(e,t,a,i)}finally{u.p=r,E.T=l}}function Nc(e,t,a,i){if(Jr){var l=Uc(i);if(l===null)zc(e,t,i,Ir,a),_g(e,i);else if(W0(l,e,t,a,i))i.stopPropagation();else if(_g(e,i),t&4&&-1<K0.indexOf(e)){for(;l!==null;){var r=qa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=ma(r.pendingLanes);if(c!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var $=1<<31-Rt(c);h.entanglements[1]|=$,c&=~$}mn(r),(Ue&6)===0&&(Dr=zt()+500,yl(0))}}break;case 31:case 13:h=xa(r,2),h!==null&&Dt(h,r,2),Rr(),Lc(r,2)}if(r=Uc(i),r===null&&zc(e,t,i,Ir,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else zc(e,t,i,null,a)}}function Uc(e){return e=Go(e),Bc(e)}var Ir=null;function Bc(e){if(Ir=null,e=Ga(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=M(t),e!==null)return e;e=null}else if(a===31){if(e=Y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ir=e,null}function Eg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ha()){case Gl:return 2;case ln:return 8;case dn:case Dm:return 32;case Ru:return 268435456;default:return 32}default:return 32}}var Gc=!1,oa=null,sa=null,ca=null,zl=new Map,Tl=new Map,ua=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(t.pointerId)}}function jl(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=qa(t),t!==null&&Tg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function W0(e,t,a,i,l){switch(t){case"focusin":return oa=jl(oa,e,t,a,i,l),!0;case"dragenter":return sa=jl(sa,e,t,a,i,l),!0;case"mouseover":return ca=jl(ca,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return zl.set(r,jl(zl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,Tl.set(r,jl(Tl.get(r)||null,e,t,a,i,l)),!0}return!1}function Ag(e){var t=Ga(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=M(a),t!==null){e.blockedOn=t,qu(e.priority,function(){jg(a)});return}}else if(t===31){if(t=Y(a),t!==null){e.blockedOn=t,qu(e.priority,function(){jg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Uc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Bo=i,a.target.dispatchEvent(i),Bo=null}else return t=qa(a),t!==null&&Tg(t),e.blockedOn=a,!1;t.shift()}return!0}function Og(e,t,a){Fr(e)&&a.delete(t)}function P0(){Gc=!1,oa!==null&&Fr(oa)&&(oa=null),sa!==null&&Fr(sa)&&(sa=null),ca!==null&&Fr(ca)&&(ca=null),zl.forEach(Og),Tl.forEach(Og)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,P0)))}var to=null;function kg(e){to!==e&&(to=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){to===e&&(to=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Bc(i||a)===null)continue;break}var r=qa(a);r!==null&&(e.splice(t,3),t-=3,Us(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function wi(e){function t($){return eo($,e)}oa!==null&&eo(oa,e),sa!==null&&eo(sa,e),ca!==null&&eo(ca,e),zl.forEach(t),Tl.forEach(t);for(var a=0;a<ua.length;a++){var i=ua[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(a=ua[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],c=l[_t]||null;if(typeof r=="function")c||kg(a);else if(c){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[_t]||null)h=c.formAction;else if(Bc(l)!==null)continue}else h=c.action;typeof h=="function"?a[i+1]=h:(a.splice(i,3),i-=3),kg(a)}}}function Cg(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function qc(e){this._internalRoot=e}no.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Yt();wg(a,i,e,t,null,null)},no.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wg(e.current,2,null,e,null,null),Rr(),t[Ba]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ua.length&&t!==0&&t<ua[a].priority;a++);ua.splice(a,0,e),a===0&&Ag(e)}};var Mg=o.version;if(Mg!=="19.2.3")throw Error(s(527,Mg,"19.2.3"));u.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=A(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var J0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Hi=ao.inject(J0),Ht=ao}catch{}}return _l.createRoot=function(e,t){if(!y(e))throw Error(s(299));var a=!1,i="",l=Bd,r=Gd,c=qd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=xg(e,1,!1,null,null,a,i,null,l,r,c,Cg),e[Ba]=t.current,wc(e),new qc(t)},_l.hydrateRoot=function(e,t,a){if(!y(e))throw Error(s(299));var i=!1,l="",r=Bd,c=Gd,h=qd,$=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&($=a.formState)),t=xg(e,1,!0,t,a??null,i,l,$,r,c,h,Cg),t.context=$g(null),a=t.current,i=Yt(),i=Co(i),l=Wn(i),l.callback=null,Pn(a,l,i),a=i,t.current.lanes=a,Li(t,a),mn(t),e[Ba]=t.current,wc(e),new no(t)},_l.version="19.2.3",_l}var Yg;function sv(){if(Yg)return Xc.exports;Yg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Xc.exports=ov(),Xc.exports}var cv=sv();const uv=zu(cv);var mt=function(){return mt=Object.assign||function(o){for(var f,s=1,y=arguments.length;s<y;s++){f=arguments[s];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(o[b]=f[b])}return o},mt.apply(this,arguments)};function Ai(n,o,f){if(f||arguments.length===2)for(var s=0,y=o.length,b;s<y;s++)(b||!(s in o))&&(b||(b=Array.prototype.slice.call(o,0,s)),b[s]=o[s]);return n.concat(b||Array.prototype.slice.call(o))}var We="-ms-",Dl="-moz-",Be="-webkit-",Gh="comm",$o="rule",Tu="decl",fv="@import",dv="@namespace",qh="@keyframes",pv="@layer",Yh=Math.abs,ju=String.fromCharCode,gu=Object.assign;function gv(n,o){return dt(n,0)^45?(((o<<2^dt(n,0))<<2^dt(n,1))<<2^dt(n,2))<<2^dt(n,3):0}function Vh(n){return n.trim()}function Un(n,o){return(n=o.exec(n))?n[0]:n}function je(n,o,f){return n.replace(o,f)}function ro(n,o,f){return n.indexOf(o,f)}function dt(n,o){return n.charCodeAt(o)|0}function Ra(n,o,f){return n.slice(o,f)}function cn(n){return n.length}function Xh(n){return n.length}function Cl(n,o){return o.push(n),n}function hv(n,o){return n.map(o).join("")}function Vg(n,o){return n.filter(function(f){return!Un(f,o)})}var wo=1,Oi=1,Qh=0,an=0,ct=0,Di="";function zo(n,o,f,s,y,b,M,Y){return{value:n,root:o,parent:f,type:s,props:y,children:b,line:wo,column:Oi,length:M,return:"",siblings:Y}}function da(n,o){return gu(zo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function zi(n){for(;n.root;)n=da(n.root,{children:[n]});Cl(n,n.siblings)}function mv(){return ct}function yv(){return ct=an>0?dt(Di,--an):0,Oi--,ct===10&&(Oi=1,wo--),ct}function un(){return ct=an<Qh?dt(Di,an++):0,Oi++,ct===10&&(Oi=1,wo++),ct}function pa(){return dt(Di,an)}function oo(){return an}function To(n,o){return Ra(Di,n,o)}function Hl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vv(n){return wo=Oi=1,Qh=cn(Di=n),an=0,[]}function bv(n){return Di="",n}function Wc(n){return Vh(To(an-1,hu(n===91?n+2:n===40?n+1:n)))}function Sv(n){for(;(ct=pa())&&ct<33;)un();return Hl(n)>2||Hl(ct)>3?"":" "}function xv(n,o){for(;--o&&un()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return To(n,oo()+(o<6&&pa()==32&&un()==32))}function hu(n){for(;un();)switch(ct){case n:return an;case 34:case 39:n!==34&&n!==39&&hu(ct);break;case 40:n===41&&hu(n);break;case 92:un();break}return an}function $v(n,o){for(;un()&&n+ct!==57;)if(n+ct===84&&pa()===47)break;return"/*"+To(o,an-1)+"*"+ju(n===47?n:un())}function wv(n){for(;!Hl(pa());)un();return To(n,an)}function zv(n){return bv(so("",null,null,null,[""],n=vv(n),0,[0],n))}function so(n,o,f,s,y,b,M,Y,k){for(var A=0,N=0,W=M,le=0,ce=0,ae=0,X=1,he=1,ue=1,pe=0,ne="",oe=y,w=b,z=s,x=ne;he;)switch(ae=pe,pe=un()){case 40:if(ae!=108&&dt(x,W-1)==58){ro(x+=je(Wc(pe),"&","&\f"),"&\f",Yh(A?Y[A-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:x+=Wc(pe);break;case 9:case 10:case 13:case 32:x+=Sv(ae);break;case 92:x+=xv(oo()-1,7);continue;case 47:switch(pa()){case 42:case 47:Cl(Tv($v(un(),oo()),o,f,k),k),(Hl(ae||1)==5||Hl(pa()||1)==5)&&cn(x)&&Ra(x,-1,void 0)!==" "&&(x+=" ");break;default:x+="/"}break;case 123*X:Y[A++]=cn(x)*ue;case 125*X:case 59:case 0:switch(pe){case 0:case 125:he=0;case 59+N:ue==-1&&(x=je(x,/\f/g,"")),ce>0&&(cn(x)-W||X===0&&ae===47)&&Cl(ce>32?Qg(x+";",s,f,W-1,k):Qg(je(x," ","")+";",s,f,W-2,k),k);break;case 59:x+=";";default:if(Cl(z=Xg(x,o,f,A,N,y,Y,ne,oe=[],w=[],W,b),b),pe===123)if(N===0)so(x,o,z,z,oe,b,W,Y,w);else{switch(le){case 99:if(dt(x,3)===110)break;case 108:if(dt(x,2)===97)break;default:N=0;case 100:case 109:case 115:}N?so(n,z,z,s&&Cl(Xg(n,z,z,0,0,y,Y,ne,y,oe=[],W,w),w),y,w,W,Y,s?oe:w):so(x,z,z,z,[""],w,0,Y,w)}}A=N=ce=0,X=ue=1,ne=x="",W=M;break;case 58:W=1+cn(x),ce=ae;default:if(X<1){if(pe==123)--X;else if(pe==125&&X++==0&&yv()==125)continue}switch(x+=ju(pe),pe*X){case 38:ue=N>0?1:(x+="\f",-1);break;case 44:Y[A++]=(cn(x)-1)*ue,ue=1;break;case 64:pa()===45&&(x+=Wc(un())),le=pa(),N=W=cn(ne=x+=wv(oo())),pe++;break;case 45:ae===45&&cn(x)==2&&(X=0)}}return b}function Xg(n,o,f,s,y,b,M,Y,k,A,N,W){for(var le=y-1,ce=y===0?b:[""],ae=Xh(ce),X=0,he=0,ue=0;X<s;++X)for(var pe=0,ne=Ra(n,le+1,le=Yh(he=M[X])),oe=n;pe<ae;++pe)(oe=Vh(he>0?ce[pe]+" "+ne:je(ne,/&\f/g,ce[pe])))&&(k[ue++]=oe);return zo(n,o,f,y===0?$o:Y,k,A,N,W)}function Tv(n,o,f,s){return zo(n,o,f,Gh,ju(mv()),Ra(n,2,-2),0,s)}function Qg(n,o,f,s,y){return zo(n,o,f,Tu,Ra(n,0,s),Ra(n,s+1,-1),s,y)}function Zh(n,o,f){switch(gv(n,o)){case 5103:return Be+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Be+n+n;case 4855:return Be+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Dl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+n+Dl+n+We+n+n;case 5936:switch(dt(n,o+11)){case 114:return Be+n+We+je(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Be+n+We+je(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Be+n+We+je(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Be+n+We+n+n;case 6165:return Be+n+We+"flex-"+n+n;case 5187:return Be+n+je(n,/(\w+).+(:[^]+)/,Be+"box-$1$2"+We+"flex-$1$2")+n;case 5443:return Be+n+We+"flex-item-"+je(n,/flex-|-self/g,"")+(Un(n,/flex-|baseline/)?"":We+"grid-row-"+je(n,/flex-|-self/g,""))+n;case 4675:return Be+n+We+"flex-line-pack"+je(n,/align-content|flex-|-self/g,"")+n;case 5548:return Be+n+We+je(n,"shrink","negative")+n;case 5292:return Be+n+We+je(n,"basis","preferred-size")+n;case 6060:return Be+"box-"+je(n,"-grow","")+Be+n+We+je(n,"grow","positive")+n;case 4554:return Be+je(n,/([^-])(transform)/g,"$1"+Be+"$2")+n;case 6187:return je(je(je(n,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),n,"")+n;case 5495:case 3959:return je(n,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return je(je(n,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+We+"flex-pack:$3"),/space-between/,"justify")+Be+n+n;case 4200:if(!Un(n,/flex-|baseline/))return We+"grid-column-align"+Ra(n,o)+n;break;case 2592:case 3360:return We+je(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(s,y){return o=y,Un(s.props,/grid-\w+-end/)})?~ro(n+(f=f[o].value),"span",0)?n:We+je(n,"-start","")+n+We+"grid-row-span:"+(~ro(f,"span",0)?Un(f,/\d+/):+Un(f,/\d+/)-+Un(n,/\d+/))+";":We+je(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(s){return Un(s.props,/grid-\w+-start/)})?n:We+je(je(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return je(n,/(.+)-inline(.+)/,Be+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(n)-1-o>6)switch(dt(n,o+1)){case 109:if(dt(n,o+4)!==45)break;case 102:return je(n,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+Dl+(dt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~ro(n,"stretch",0)?Zh(je(n,"stretch","fill-available"),o,f)+n:n}break;case 5152:case 5920:return je(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,y,b,M,Y,k,A){return We+y+":"+b+A+(M?We+y+"-span:"+(Y?k:+k-+b)+A:"")+n});case 4949:if(dt(n,o+6)===121)return je(n,":",":"+Be)+n;break;case 6444:switch(dt(n,dt(n,14)===45?18:11)){case 120:return je(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(dt(n,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+We+"$2box$3")+n;case 100:return je(n,":",":"+We)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(n,"scroll-","scroll-snap-")+n}return n}function po(n,o){for(var f="",s=0;s<n.length;s++)f+=o(n[s],s,n,o)||"";return f}function jv(n,o,f,s){switch(n.type){case pv:if(n.children.length)break;case fv:case dv:case Tu:return n.return=n.return||n.value;case Gh:return"";case qh:return n.return=n.value+"{"+po(n.children,s)+"}";case $o:if(!cn(n.value=n.props.join(",")))return""}return cn(f=po(n.children,s))?n.return=n.value+"{"+f+"}":""}function Ev(n){var o=Xh(n);return function(f,s,y,b){for(var M="",Y=0;Y<o;Y++)M+=n[Y](f,s,y,b)||"";return M}}function _v(n){return function(o){o.root||(o=o.return)&&n(o)}}function Av(n,o,f,s){if(n.length>-1&&!n.return)switch(n.type){case Tu:n.return=Zh(n.value,n.length,f);return;case qh:return po([da(n,{value:je(n.value,"@","@"+Be)})],s);case $o:if(n.length)return hv(f=n.props,function(y){switch(Un(y,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zi(da(n,{props:[je(y,/:(read-\w+)/,":"+Dl+"$1")]})),zi(da(n,{props:[y]})),gu(n,{props:Vg(f,s)});break;case"::placeholder":zi(da(n,{props:[je(y,/:(plac\w+)/,":"+Be+"input-$1")]})),zi(da(n,{props:[je(y,/:(plac\w+)/,":"+Dl+"$1")]})),zi(da(n,{props:[je(y,/:(plac\w+)/,We+"input-$1")]})),zi(da(n,{props:[y]})),gu(n,{props:Vg(f,s)});break}return""})}}var Ov={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},ki=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",Kh="active",Wh="data-styled-version",jo="6.3.8",Eu=`/*!sc*/
`,go=typeof window<"u"&&typeof document<"u",vn=pt.createContext===void 0,kv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),Cv={},Eo=Object.freeze([]),Ci=Object.freeze({});function Ph(n,o,f){return f===void 0&&(f=Ci),n.theme!==f.theme&&n.theme||o||f.theme}var Jh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Mv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dv=/(^-|-$)/g;function Zg(n){return n.replace(Mv,"-").replace(Dv,"")}var Hv=/(a)(d)/gi,Kg=function(n){return String.fromCharCode(n+(n>25?39:97))};function mu(n){var o,f="";for(o=Math.abs(n);o>52;o=o/52|0)f=Kg(o%52)+f;return(Kg(o%52)+f).replace(Hv,"$1-$2")}var Pc,ji=function(n,o){for(var f=o.length;f;)n=33*n^o.charCodeAt(--f);return n},Ih=function(n){return ji(5381,n)};function _u(n){return mu(Ih(n)>>>0)}function Rv(n){return n.displayName||n.name||"Component"}function Jc(n){return typeof n=="string"&&!0}var Fh=typeof Symbol=="function"&&Symbol.for,em=Fh?Symbol.for("react.memo"):60115,Lv=Fh?Symbol.for("react.forward_ref"):60112,Nv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((Pc={})[Lv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pc[em]=tm,Pc);function Wg(n){return("type"in(o=n)&&o.type.$$typeof)===em?tm:"$$typeof"in n?Bv[n.$$typeof]:Nv;var o}var Gv=Object.defineProperty,qv=Object.getOwnPropertyNames,Pg=Object.getOwnPropertySymbols,Yv=Object.getOwnPropertyDescriptor,Vv=Object.getPrototypeOf,Jg=Object.prototype;function nm(n,o,f){if(typeof o!="string"){if(Jg){var s=Vv(o);s&&s!==Jg&&nm(n,s,f)}var y=qv(o);Pg&&(y=y.concat(Pg(o)));for(var b=Wg(n),M=Wg(o),Y=0;Y<y.length;++Y){var k=y[Y];if(!(k in Uv||f&&f[k]||M&&k in M||b&&k in b)){var A=Yv(o,k);try{Gv(n,k,A)}catch{}}}}return n}function La(n){return typeof n=="function"}function Au(n){return typeof n=="object"&&"styledComponentId"in n}function Ha(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function ho(n,o){if(n.length===0)return"";for(var f=n[0],s=1;s<n.length;s++)f+=n[s];return f}function Rl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function yu(n,o,f){if(f===void 0&&(f=!1),!f&&!Rl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=yu(n[s],o[s]);else if(Rl(o))for(var s in o)n[s]=yu(n[s],o[s]);return n}function Ou(n,o){Object.defineProperty(n,"toString",{value:o})}function Na(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Xv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},n.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,y=s.length,b=y;o>=b;)if((b<<=1)<0)throw Na(16,"".concat(o));this.groupSizes=new Uint32Array(b),this.groupSizes.set(s),this.length=b;for(var M=y;M<b;M++)this.groupSizes[M]=0}for(var Y=this.indexOfGroup(o+1),k=(M=0,f.length);M<k;M++)this.tag.insertRule(Y,f[M])&&(this.groupSizes[o]++,Y++)},n.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),y=s+f;this.groupSizes[o]=0;for(var b=s;b<y;b++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],y=this.indexOfGroup(o),b=y+s,M=y;M<b;M++)f+="".concat(this.tag.getRule(M)).concat(Eu);return f},n})(),co=new Map,mo=new Map,uo=1,Ei=function(n){if(co.has(n))return co.get(n);for(;mo.has(uo);)uo++;var o=uo++;return co.set(n,o),mo.set(o,n),o},Qv=function(n,o){uo=o+1,co.set(n,o),mo.set(o,n)},Zv="style[".concat(ki,"][").concat(Wh,'="').concat(jo,'"]'),Kv=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wv=function(n,o,f){for(var s,y=f.split(","),b=0,M=y.length;b<M;b++)(s=y[b])&&n.registerName(o,s)},Pv=function(n,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(Eu),y=[],b=0,M=s.length;b<M;b++){var Y=s[b].trim();if(Y){var k=Y.match(Kv);if(k){var A=0|parseInt(k[1],10),N=k[2];A!==0&&(Qv(N,A),Wv(n,N,k[3]),n.getTag().insertRules(A,y)),y.length=0}else y.push(Y)}}},Ig=function(n){for(var o=document.querySelectorAll(Zv),f=0,s=o.length;f<s;f++){var y=o[f];y&&y.getAttribute(ki)!==Kh&&(Pv(n,y),y.parentNode&&y.parentNode.removeChild(y))}};function Jv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var am=function(n){var o=document.head,f=n||o,s=document.createElement("style"),y=(function(Y){var k=Array.from(Y.querySelectorAll("style[".concat(ki,"]")));return k[k.length-1]})(f),b=y!==void 0?y.nextSibling:null;s.setAttribute(ki,Kh),s.setAttribute(Wh,jo);var M=Jv();return M&&s.setAttribute("nonce",M),f.insertBefore(s,b),s},Iv=(function(){function n(o){this.element=am(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,y=0,b=s.length;y<b;y++){var M=s[y];if(M.ownerNode===f)return M}throw Na(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},n})(),Fv=(function(){function n(o){this.element=am(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),eb=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Fg=go,tb={isServer:!go,useCSSOMInjection:!kv},yo=(function(){function n(o,f,s){o===void 0&&(o=Ci),f===void 0&&(f={});var y=this;this.options=mt(mt({},tb),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&go&&Fg&&(Fg=!1,Ig(this)),Ou(this,function(){return(function(b){for(var M=b.getTag(),Y=M.length,k="",A=function(W){var le=(function(ue){return mo.get(ue)})(W);if(le===void 0)return"continue";var ce=b.names.get(le),ae=M.getGroup(W);if(ce===void 0||!ce.size||ae.length===0)return"continue";var X="".concat(ki,".g").concat(W,'[id="').concat(le,'"]'),he="";ce!==void 0&&ce.forEach(function(ue){ue.length>0&&(he+="".concat(ue,","))}),k+="".concat(ae).concat(X,'{content:"').concat(he,'"}').concat(Eu)},N=0;N<Y;N++)A(N);return k})(y)})}return n.registerId=function(o){return Ei(o)},n.prototype.rehydrate=function(){!this.server&&go&&Ig(this)},n.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new n(mt(mt({},this.options),o),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var s=f.useCSSOMInjection,y=f.target;return f.isServer?new eb(y):s?new Iv(y):new Fv(y)})(this.options),new Xv(o)));var o},n.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},n.prototype.registerName=function(o,f){if(Ei(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},n.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(Ei(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Ei(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),nb=/&/g,_i=47;function eh(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,f=0,s=0,y=!1,b=0;b<o;b++){var M=n.charCodeAt(b);if(s!==0||y||M!==_i||n.charCodeAt(b+1)!==42)if(y)M===42&&n.charCodeAt(b+1)===_i&&(y=!1,b++);else if(M!==34&&M!==39||b!==0&&n.charCodeAt(b-1)===92){if(s===0){if(M===123)f++;else if(M===125&&--f<0)return!0}}else s===0?s=M:s===M&&(s=0);else y=!0,b++}return f!==0||s!==0}function im(n,o){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=im(f.children,o)),f})}function ab(n){var o,f,s,y=Ci,b=y.options,M=b===void 0?Ci:b,Y=y.plugins,k=Y===void 0?Eo:Y,A=function(le,ce,ae){return ae.startsWith(f)&&ae.endsWith(f)&&ae.replaceAll(f,"").length>0?".".concat(o):le},N=k.slice();N.push(function(le){le.type===$o&&le.value.includes("&")&&(le.props[0]=le.props[0].replace(nb,f).replace(s,A))}),M.prefix&&N.push(Av),N.push(jv);var W=function(le,ce,ae,X){ce===void 0&&(ce=""),ae===void 0&&(ae=""),X===void 0&&(X="&"),o=X,f=ce,s=new RegExp("\\".concat(f,"\\b"),"g");var he=(function(ne){if(!eh(ne))return ne;for(var oe=ne.length,w="",z=0,x=0,D=0,_=!1,v=0;v<oe;v++){var q=ne.charCodeAt(v);if(D!==0||_||q!==_i||ne.charCodeAt(v+1)!==42)if(_)q===42&&ne.charCodeAt(v+1)===_i&&(_=!1,v++);else if(q!==34&&q!==39||v!==0&&ne.charCodeAt(v-1)===92){if(D===0)if(q===123)x++;else if(q===125){if(--x<0){for(var Z=v+1;Z<oe;){var R=ne.charCodeAt(Z);if(R===59||R===10)break;Z++}Z<oe&&ne.charCodeAt(Z)===59&&Z++,x=0,v=Z-1,z=Z;continue}x===0&&(w+=ne.substring(z,v+1),z=v+1)}else q===59&&x===0&&(w+=ne.substring(z,v+1),z=v+1)}else D===0?D=q:D===q&&(D=0);else _=!0,v++}if(z<oe){var P=ne.substring(z);eh(P)||(w+=P)}return w})((function(ne){if(ne.indexOf("//")===-1)return ne;for(var oe=ne.length,w=[],z=0,x=0,D=0,_=0;x<oe;){var v=ne.charCodeAt(x);if(v!==34&&v!==39||x!==0&&ne.charCodeAt(x-1)===92)if(D===0)if(v===40&&x>=3&&(32|ne.charCodeAt(x-1))==108&&(32|ne.charCodeAt(x-2))==114&&(32|ne.charCodeAt(x-3))==117)_=1,x++;else if(_>0)v===41?_--:v===40&&_++,x++;else if(v===_i&&x+1<oe&&ne.charCodeAt(x+1)===_i){for(x>z&&w.push(ne.substring(z,x));x<oe&&ne.charCodeAt(x)!==10;)x++;z=x}else x++;else x++;else D===0?D=v:D===v&&(D=0),x++}return z===0?ne:(z<oe&&w.push(ne.substring(z)),w.join(""))})(le)),ue=zv(ae||ce?"".concat(ae," ").concat(ce," { ").concat(he," }"):he);M.namespace&&(ue=im(ue,M.namespace));var pe=[];return po(ue,Ev(N.concat(_v(function(ne){return pe.push(ne)})))),pe};return W.hash=k.length?k.reduce(function(le,ce){return ce.name||Na(15),ji(le,ce.name)},5381).toString():"",W}var ib=new yo,vu=ab(),bu={shouldForwardProp:void 0,styleSheet:ib,stylis:vu},lm=vn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(bu)}}:pt.createContext(bu);lm.Consumer;vn||pt.createContext(void 0);function Su(){return vn?bu:pt.useContext(lm)}var rm=(function(){function n(o,f){var s=this;this.inject=function(y,b){b===void 0&&(b=vu);var M=s.name+b.hash;y.hasNameForId(s.id,M)||y.insertRules(s.id,M,b(s.rules,M,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,Ou(this,function(){throw Na(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=vu),this.name+o.hash},n})();function lb(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Ov||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var rb=function(n){return n>="A"&&n<="Z"};function th(n){for(var o="",f=0;f<n.length;f++){var s=n[f];if(f===1&&s==="-"&&n[0]==="-")return n;rb(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var om=function(n){return n==null||n===!1||n===""},sm=function(n){var o=[];for(var f in n){var s=n[f];n.hasOwnProperty(f)&&!om(s)&&(Array.isArray(s)&&s.isCss||La(s)?o.push("".concat(th(f),":"),s,";"):Rl(s)?o.push.apply(o,Ai(Ai(["".concat(f," {")],sm(s),!1),["}"],!1)):o.push("".concat(th(f),": ").concat(lb(f,s),";")))}return o};function ga(n,o,f,s){if(om(n))return[];if(Au(n))return[".".concat(n.styledComponentId)];if(La(n)){if(!La(b=n)||b.prototype&&b.prototype.isReactComponent||!o)return[n];var y=n(o);return ga(y,o,f,s)}var b;return n instanceof rm?f?(n.inject(f,s),[n.getName(s)]):[n]:Rl(n)?sm(n):Array.isArray(n)?Array.prototype.concat.apply(Eo,n.map(function(M){return ga(M,o,f,s)})):[n.toString()]}function cm(n){for(var o=0;o<n.length;o+=1){var f=n[o];if(La(f)&&!Au(f))return!1}return!0}var ob=Ih(jo),sb=(function(){function n(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&cm(o),this.componentId=f,this.baseHash=ji(ob,f),this.baseStyle=s,yo.registerId(f)}return n.prototype.generateAndInjectStyles=function(o,f,s){var y=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s).className:"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))y=Ha(y,this.staticRulesId);else{var b=ho(ga(this.rules,o,f,s)),M=mu(ji(this.baseHash,b)>>>0);if(!f.hasNameForId(this.componentId,M)){var Y=s(b,".".concat(M),void 0,this.componentId);f.insertRules(this.componentId,M,Y)}y=Ha(y,M),this.staticRulesId=M}else{for(var k=ji(this.baseHash,s.hash),A="",N=0;N<this.rules.length;N++){var W=this.rules[N];if(typeof W=="string")A+=W;else if(W){var le=ho(ga(W,o,f,s));k=ji(k,le+N),A+=le}}if(A){var ce=mu(k>>>0);if(!f.hasNameForId(this.componentId,ce)){var ae=s(A,".".concat(ce),void 0,this.componentId);f.insertRules(this.componentId,ce,ae)}y=Ha(y,ce)}}return{className:y,css:typeof window>"u"?f.getTag().getGroup(Ei(this.componentId)):""}},n})(),Ll=vn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:pt.createContext(void 0);Ll.Consumer;function cb(n){if(vn)return n.children;var o=pt.useContext(Ll),f=pt.useMemo(function(){return(function(s,y){if(!s)throw Na(14);if(La(s)){var b=s(y);return b}if(Array.isArray(s)||typeof s!="object")throw Na(8);return y?mt(mt({},y),s):s})(n.theme,o)},[n.theme,o]);return n.children?pt.createElement(Ll.Provider,{value:f},n.children):null}var Ic={};function ub(n,o,f){var s=Au(n),y=n,b=!Jc(n),M=o.attrs,Y=M===void 0?Eo:M,k=o.componentId,A=k===void 0?(function(oe,w){var z=typeof oe!="string"?"sc":Zg(oe);Ic[z]=(Ic[z]||0)+1;var x="".concat(z,"-").concat(_u(jo+z+Ic[z]));return w?"".concat(w,"-").concat(x):x})(o.displayName,o.parentComponentId):k,N=o.displayName,W=N===void 0?(function(oe){return Jc(oe)?"styled.".concat(oe):"Styled(".concat(Rv(oe),")")})(n):N,le=o.displayName&&o.componentId?"".concat(Zg(o.displayName),"-").concat(o.componentId):o.componentId||A,ce=s&&y.attrs?y.attrs.concat(Y).filter(Boolean):Y,ae=o.shouldForwardProp;if(s&&y.shouldForwardProp){var X=y.shouldForwardProp;if(o.shouldForwardProp){var he=o.shouldForwardProp;ae=function(oe,w){return X(oe,w)&&he(oe,w)}}else ae=X}var ue=new sb(f,le,s?y.componentStyle:void 0);function pe(oe,w){return(function(z,x,D){var _=z.attrs,v=z.componentStyle,q=z.defaultProps,Z=z.foldedComponentIds,R=z.styledComponentId,P=z.target,ee=vn?void 0:pt.useContext(Ll),E=Su(),u=z.shouldForwardProp||E.shouldForwardProp,ie=Ph(x,ee,q)||Ci,T=(function(me,de,Se){for(var Ee,$e=mt(mt({},de),{className:void 0,theme:Se}),_e=0;_e<me.length;_e+=1){var be=La(Ee=me[_e])?Ee($e):Ee;for(var ze in be)ze==="className"?$e.className=Ha($e.className,be[ze]):ze==="style"?$e.style=mt(mt({},$e.style),be[ze]):$e[ze]=be[ze]}return"className"in de&&typeof de.className=="string"&&($e.className=Ha($e.className,de.className)),$e})(_,x,ie),p=T.as||P,g={};for(var S in T)T[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&T.theme===ie||(S==="forwardedAs"?g.as=T.forwardedAs:u&&!u(S,p)||(g[S]=T[S]));var B=(function(me,de){var Se=Su(),Ee=me.generateAndInjectStyles(de,Se.styleSheet,Se.stylis);return Ee})(v,T),H=B.className,J=B.css,K=Ha(Z,R);H&&(K+=" "+H),T.className&&(K+=" "+T.className),g[Jc(p)&&!Jh.has(p)?"class":"className"]=K,D&&(g.ref=D);var te=Oe.createElement(p,g);return vn&&J?pt.createElement(pt.Fragment,null,pt.createElement("style",{precedence:"styled-components",href:"sc-".concat(R,"-").concat(H),children:J}),te):te})(ne,oe,w)}pe.displayName=W;var ne=pt.forwardRef(pe);return ne.attrs=ce,ne.componentStyle=ue,ne.displayName=W,ne.shouldForwardProp=ae,ne.foldedComponentIds=s?Ha(y.foldedComponentIds,y.styledComponentId):"",ne.styledComponentId=le,ne.target=s?y.target:n,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=s?(function(w){for(var z=[],x=1;x<arguments.length;x++)z[x-1]=arguments[x];for(var D=0,_=z;D<_.length;D++)yu(w,_[D],!0);return w})({},y.defaultProps,oe):oe}}),Ou(ne,function(){return".".concat(ne.styledComponentId)}),b&&nm(ne,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function nh(n,o){for(var f=[n[0]],s=0,y=o.length;s<y;s+=1)f.push(o[s],n[s+1]);return f}var ah=function(n){return Object.assign(n,{isCss:!0})};function ku(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(La(n)||Rl(n))return ah(ga(nh(Eo,Ai([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?ga(s):ah(ga(nh(s,o)))}function xu(n,o,f){if(f===void 0&&(f=Ci),!o)throw Na(1,o);var s=function(y){for(var b=[],M=1;M<arguments.length;M++)b[M-1]=arguments[M];return n(o,f,ku.apply(void 0,Ai([y],b,!1)))};return s.attrs=function(y){return xu(n,o,mt(mt({},f),{attrs:Array.prototype.concat(f.attrs,y).filter(Boolean)}))},s.withConfig=function(y){return xu(n,o,mt(mt({},f),y))},s}var um=function(n){return xu(ub,n)},m=um;Jh.forEach(function(n){m[n]=um(n)});var fb=(function(){function n(o,f){this.rules=o,this.componentId=f,this.isStatic=cm(o),yo.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,f,s,y){var b=y(ho(ga(this.rules,f,s,y)),""),M=this.componentId+o;s.insertRules(M,M,b)},n.prototype.removeStyles=function(o,f){f.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,f,s,y){o>2&&yo.registerId(this.componentId+o);var b=this.componentId+o;this.isStatic?s.hasNameForId(b,b)||this.createStyles(o,f,s,y):(this.removeStyles(o,s),this.createStyles(o,f,s,y))},n})();function db(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=ku.apply(void 0,Ai([n],o,!1)),y="sc-global-".concat(_u(JSON.stringify(s))),b=new fb(s,y),M=new WeakMap,Y=function(k){var A=Su(),N=vn?void 0:pt.useContext(Ll),W=M.get(A.styleSheet);if(W===void 0&&(W=A.styleSheet.allocateGSInstance(y),M.set(A.styleSheet,W)),(typeof window>"u"||!A.styleSheet.server)&&(function(he,ue,pe,ne,oe){if(b.isStatic)b.renderStyles(he,Cv,pe,oe);else{var w=mt(mt({},ue),{theme:Ph(ue,ne,Y.defaultProps)});b.renderStyles(he,w,pe,oe)}})(W,k,A.styleSheet,N,A.stylis),!vn){var le=pt.useRef(!0);pt.useLayoutEffect(function(){return le.current=!1,function(){le.current=!0,queueMicrotask(function(){le.current&&(b.removeStyles(W,A.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(y,'"]')).forEach(function(he){return he.remove()}))})}},[W,A.styleSheet])}if(vn){var ce=y+W,ae=typeof window>"u"?A.styleSheet.getTag().getGroup(Ei(ce)):"";if(ae){var X="".concat(y,"-").concat(W);return pt.createElement("style",{key:X,"data-styled-global":y,precedence:"styled-components",href:X,children:ae})}}return null};return pt.memo(Y)}function Xt(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=ho(ku.apply(void 0,Ai([n],o,!1))),y=_u(s);return new rm(y,s)}var nn=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(nn||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gb=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,f,s)=>s?s.toUpperCase():f.toLowerCase()),ih=n=>{const o=gb(n);return o.charAt(0).toUpperCase()+o.slice(1)},fm=(...n)=>n.filter((o,f,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===f).join(" ").trim(),hb=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=Oe.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:f=2,absoluteStrokeWidth:s,className:y="",children:b,iconNode:M,...Y},k)=>Oe.createElement("svg",{ref:k,...mb,width:o,height:o,stroke:n,strokeWidth:s?Number(f)*24/Number(o):f,className:fm("lucide",y),...!b&&!hb(Y)&&{"aria-hidden":"true"},...Y},[...M.map(([A,N])=>Oe.createElement(A,N)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(n,o)=>{const f=Oe.forwardRef(({className:s,...y},b)=>Oe.createElement(yb,{ref:b,iconNode:o,className:fm(`lucide-${pb(ih(n))}`,`lucide-${n}`,s),...y}));return f.displayName=ih(n),f};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],bb=ut("arrow-down",vb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fn=ut("arrow-left",Sb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Cu=ut("arrow-right",xb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],wb=ut("arrow-up-right",$b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Tb=ut("check",zb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Eb=ut("dribbble",jb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ab=ut("external-link",_b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],kb=ut("figma",Ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lh=ut("file-text",Cb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Db=ut("funnel",Mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Rb=ut("gamepad-2",Hb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Nb=ut("image",Lb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Bb=ut("linkedin",Ub);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qb=ut("mail",Gb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],dm=ut("menu",Yb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Xb=ut("pen-tool",Vb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Zb=ut("star",Qb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Wb=ut("tag",Kb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Jb=ut("twitter",Pb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mu=ut("x",Ib),Fb={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design",games:"Games",landing:"Landing"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",technologies:["Web Design","Landing Page","Visual Design"]}},about:{discovery:"About Me",heading1:"About",heading2:"",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Me",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaka:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaka",eyebrow:"UI/UX Design",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},marketingVideo:{backToPortfolio:"Back to Portfolio",headerTag:"Motion Design",eyebrow:"Motion Design",title:"Marketing Videos",lead:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",featuredTitle:"Featured Videos",allVideosTitle:"All Videos"},elementalQuest:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Elemental Quest",lead:"Game map design and visual assets for an adventure puzzle game.",logoAlt:"Elemental Quest Logo",mapAlt:"Elemental Quest Game Map"},combatPlanes:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Combat Planes",lead:"Character design, plane skins, and game maps for an aerial combat mobile game.",logoAlt:"Combat Planes Logo",galleryAlt:"Combat Planes Game Art"},fattyFish:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Fatty Fish",lead:"Character design, game objects, and visual assets for a fun aquatic mobile game.",logoAlt:"Fatty Fish Logo",galleryAlt:"Fatty Fish Game Art"},landingHpVsVader:{backToPortfolio:"Back to Portfolio",navHome:"Home",navGame:"Character",navContact:"Contact Us",playNow:"Play now!",enterThe:"ENTER THE",gameWorld:"GAME",characters:"Characters",harryTitle:"Harry Potter",harryDesc:"The Boy Who Lived, master of the Elder Wand, and the only wizard to defeat Voldemort. Courageous, loyal, and always ready to stand up for his friends.",harryWeapon:"His main weapon is the legendary Elder Wand.",vaderTitle:"Darth Vader",vaderDesc:"Once a Jedi Knight, now the Dark Lord of the Sith. Wields the power of the Force and a red lightsaber. Feared across the galaxy.",vaderWeapon:"His weapon is the iconic red lightsaber.",footerTitle:"GAME",footerSubtitle:"Enter the game world",features:"Features",coreFeatures:"Core features",proExperience:"Pro experience",integrations:"Integrations",learnMore:"Learn more",blog:"Blog",caseStudies:"Case studies",customerStories:"Customer stories",bestPractices:"Best practices",support:"Support",contact:"Contact",supportLink:"Support",legal:"Legal"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн",games:"Ігри",landing:"Лендінг"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaka: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"Кінематографічний лендінг для фентезійної кросовер-гри: Гаррі Поттер проти Дарта Вейдера.",technologies:["Веб-дизайн","Лендінг","Візуальний дизайн"]}},about:{discovery:"Про мене",heading1:"Про",heading2:"",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Мене",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaka:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaka",eyebrow:"UI/UX дизайн",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},marketingVideo:{backToPortfolio:"Назад до портфоліо",headerTag:"Моушн-дизайн",eyebrow:"Моушн-дизайн",title:"Маркетингові відео",lead:"Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.",featuredTitle:"Вибрані відео",allVideosTitle:"Усі відео"},elementalQuest:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Elemental Quest",lead:"Дизайн ігрової карти та візуальні ресурси для пригодницької гри-головоломки.",logoAlt:"Логотип Elemental Quest",mapAlt:"Ігрова карта Elemental Quest"},combatPlanes:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Combat Planes",lead:"Дизайн персонажів, скіни літаків та ігрові карти для мобільної гри з повітряними боями.",logoAlt:"Логотип Combat Planes",galleryAlt:"Ігрове мистецтво Combat Planes"},fattyFish:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Fatty Fish",lead:"Дизайн персонажів, ігрові об'єкти та візуальні ресурси для веселої водної мобільної гри.",logoAlt:"Логотип Fatty Fish",galleryAlt:"Ігрове мистецтво Fatty Fish"},landingHpVsVader:{backToPortfolio:"Назад до портфоліо",navHome:"Головна",navGame:"Гра",navContact:"Контакти",playNow:"Грати зараз!",enterThe:"УВІЙДИ У",gameWorld:"ІГРОВИЙ",characters:"Персонажі",harryTitle:"Гаррі Поттер",harryDesc:"Хлопчик, що вижив, володар Бузинової палички, єдиний, хто переміг Волдеморта. Відважний, вірний, завжди готовий захистити друзів.",harryWeapon:"Його головна зброя — легендарна Бузинова паличка.",vaderTitle:"Дарт Вейдер",vaderDesc:"Колись лицар-джедай, тепер Лорд ситхів. Володіє силою та червоним світловим мечем. Його боять у всій галактиці.",vaderWeapon:"Його зброя — культовий червоний світловий меч.",footerTitle:"ГРА",footerSubtitle:"Увійди у ігровий світ",features:"Можливості",coreFeatures:"Основні функції",proExperience:"Про досвід",integrations:"Інтеграції",learnMore:"Дізнатися більше",blog:"Блог",caseStudies:"Кейси",customerStories:"Історії клієнтів",bestPractices:"Найкращі практики",support:"Підтримка",contact:"Контакти",supportLink:"Підтримка",legal:"Правова інформація"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},pm=Oe.createContext(void 0),e1=({children:n})=>{const[o,f]=Oe.useState("en"),s={lang:o,setLang:f,t:Fb[o]};return d.jsx(pm.Provider,{value:s,children:n})},jt=()=>{const n=Oe.useContext(pm);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},Fc=(n,o)=>{const s={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign",Games:"games",Landing:"landing"}[n];return s?o.work.categories[s]:n},t1=(n,o)=>{const s={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return s?o.about.skills[s]:n},n1=m.nav`
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
`,a1=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gm=m.button`
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
`,i1=m.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${gm}:hover & {
    transform: rotate(12deg);
  }
`,l1=m.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,r1=m.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,o1=m.button`
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
`,s1=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,c1=m.button`
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
`,u1=m.button`
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
`,f1=m.button`
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
`,d1=m.div`
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
`,p1=m.button`
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
`,g1=m.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: 1px solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,h1=m.button`
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
`,m1=m.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,y1=({onNavigate:n})=>{const{t:o}=jt(),[f,s]=Oe.useState(!1),[y,b]=Oe.useState(!1);Oe.useEffect(()=>{const N=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]);const M=N=>{if(n){n(N),b(!1);return}const W=document.getElementById(N);W&&(W.scrollIntoView({behavior:"smooth"}),b(!1))},Y=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},k=()=>{alert(o.nav.cvAlert)},A=[{label:o.nav.work,id:nn.WORK},{label:o.nav.about,id:nn.ABOUT}];return d.jsxs(d.Fragment,{children:[d.jsx(n1,{$scrolled:f,children:d.jsxs(a1,{children:[d.jsxs(gm,{onClick:()=>M(nn.HERO),children:[d.jsx(i1,{children:"A."}),d.jsx(l1,{children:o.nav.brandText})]}),d.jsxs(r1,{children:[A.map(N=>d.jsx(o1,{onClick:()=>M(N.id),children:N.label},N.id)),d.jsxs(s1,{children:[d.jsxs(c1,{onClick:k,children:[d.jsx(lh,{size:16}),o.nav.cv]}),d.jsx(u1,{onClick:Y,children:o.nav.hireMe})]})]}),d.jsx(f1,{onClick:()=>b(!y),children:y?d.jsx(Mu,{size:24}):d.jsx(dm,{size:24})})]})}),d.jsxs(d1,{$open:y,children:[A.map(N=>d.jsx(p1,{onClick:()=>M(N.id),children:N.label},N.id)),d.jsxs(g1,{children:[d.jsxs(h1,{onClick:k,children:[d.jsx(lh,{size:24}),o.nav.cv]}),d.jsx(m1,{onClick:Y,children:o.nav.hireMe})]})]})]})},v1={light:"light",regular:"regular",medium:"medium",bold:"bold"},b1={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},S1=m.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[b1[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[v1[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Du=({as:n="span",element:o,message:f,size:s="md",weight:y="regular",color:b="secondary",...M})=>{const{t:Y}=jt(),k=o??n;return d.jsx(S1,{as:k,$size:s,$weight:y,$color:b,...M,children:f(Y)})},O={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9},zIndex:{background:0,foreground:1,stickyHeader:20,nav:50,modal:100,closeButton:2,progress:100},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},x1=Xt`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${O.motion.floatOffset}); }
`,$1=Xt`
  0% { opacity: 0; transform: translateY(${O.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,w1=m.section`
  position: relative;
  min-height: ${O.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,z1=m.div`
  position: relative;
  z-index: 1;
  max-width: ${O.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${$1} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,$u=m.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${x1} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,rh=m($u)`
  animation-delay: 3s;
`,T1=m.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${O.effects.glassWhite50};
  backdrop-filter: blur(${O.effects.blurSoft});
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[200]};
  border-radius: ${({theme:n})=>n.radii.full};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
`,j1=m.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,E1=m.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,_1=m.h1`
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
`,A1=m.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,O1=m(Du)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${O.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,k1=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,hm=m.button`
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
    transform: translateY(${O.motion.hoverLiftSm});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,C1=m(bb)`
  transition: transform 0.2s ease;

  ${hm}:hover & {
    transform: translateY(${O.motion.arrowDrop});
  }
`,M1=()=>{const{t:n}=jt();return d.jsx(w1,{id:nn.HERO,children:d.jsxs(z1,{children:[d.jsx($u,{style:{left:O.sizing.heroFloatLeftOffset,top:0},children:d.jsx(kb,{color:"#7c3aed",size:32})}),d.jsx(rh,{style:{right:O.sizing.heroFloatRightOffset,top:O.sizing.heroFloatRightTop},children:d.jsx(Xb,{color:"#3b82f6",size:32})}),d.jsx(rh,{style:{left:O.sizing.heroFloatLeftAlt,bottom:0},children:d.jsx(Nb,{color:"#ec4899",size:32})}),d.jsx($u,{style:{right:0,bottom:O.sizing.heroFloatRightBottom},children:d.jsx(Rb,{color:"#10b981",size:32})}),d.jsxs(T1,{children:[d.jsx(j1,{}),d.jsx(E1,{children:n.hero.available})]}),d.jsxs(_1,{children:[n.hero.heading1," ",d.jsx("br",{}),d.jsx(A1,{children:n.hero.heading2})]}),d.jsx(O1,{element:"p",message:o=>o.hero.lead}),d.jsx(k1,{children:d.jsxs(hm,{onClick:()=>{var o;return(o=document.getElementById(nn.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,d.jsx(C1,{size:18})]})})]})})},se="/assets",D1=`${se}/images/brand/app-icons-splash-screens/full-composition.png`,H1=`${se}/images/brand/Namelaka icons and illustration/Full_Composition_Namelaka.png`,R1=`${se}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,L1=`${se}/images/brand/Full_Composition_Marketing_video.png`,N1=`${se}/images/brand/Elemental Quest game/Full_Composition_Elemental Quest game map.png`,U1=`${se}/images/brand/Combat Planes/Full_Composition_logo_Combat Planes.png`,B1=`${se}/images/brand/Fatty Fish/Character.png`,G1=`${se}/images/brand/Lending Harry Potter vs Darth_Vader/Harry_Potter_part_1.png`,q1=[`${se}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${se}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 1.jpg`,`${se}/images/brand/App Store Screenshots/Selara 2.jpg`,`${se}/images/brand/App Store Screenshots/Selara 3.jpg`,`${se}/images/brand/App Store Screenshots/Selara 4.jpg`,`${se}/images/brand/App Store Screenshots/Selara 5.jpg`,`${se}/images/brand/App Store Screenshots/Selara 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 7.jpg`,`${se}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 9.png`],vo="Anna Serhiienko",Y1="Graphic Designer",V1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",X1=["Brand design","UI/UX design","Marketing and advertising","Games","Landing"],mm=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],bo=[{id:20,title:"Namelaka Icons & Illustration",category:"UI/UX design",mediaUrl:H1,mediaType:"image",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",link:"#namelaka",technologies:["Illustration","Icon Design","UI Assets"]},{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:D1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:R1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${se}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:q1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]},{id:22,title:"Marketing Videos",category:"Marketing and advertising",mediaUrl:L1,mediaType:"image",description:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",link:"#marketing-video",technologies:["Motion Design","After Effects","Marketing"]},{id:23,title:"Elemental Quest",category:"Games",mediaUrl:N1,mediaType:"image",description:"Game map design and visual assets for an adventure puzzle game featuring magical elements.",link:"#elemental-quest",technologies:["Game Art","Illustration","Visual Design"]},{id:24,title:"Combat Planes",category:"Games",mediaUrl:U1,mediaType:"image",description:"Character design, plane skins, and game maps for an aerial combat mobile game.",link:"#combat-planes",technologies:["Game Art","Character Design","Visual Design"]},{id:25,title:"Fatty Fish",category:"Games",mediaUrl:B1,mediaType:"image",description:"Character design, game objects, and visual assets for a fun aquatic mobile game.",link:"#fatty-fish",technologies:["Game Art","Character Design","Visual Design"]},{id:26,title:"Harry Potter vs Darth Vader",category:"Landing",mediaUrl:G1,mediaType:"image",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",link:"#landing-hp-vs-vader",technologies:["Web Design","Landing Page","Visual Design"]}],Q1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${vo}${Y1}${V1}${mm.join(", ")}${bo.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const ym=Xt`
  0% { opacity: 0; transform: translateY(${O.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,Z1=Xt`
  from { opacity: 0; }
  to { opacity: 1; }
`,K1=m.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${O.effects.sectionWash};
`,W1=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,P1=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,J1=m.div`
  max-width: ${O.layout.workHeadingMaxWidth};
`,I1=m.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,F1=m.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,eS=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,tS=m.button`
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${O.sizing.hairline} solid ${({theme:n,$active:o})=>o?"transparent":n.colors.slate[100]};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.white};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.md:"none"};
  transform: ${({$active:n})=>n?"scale(1.05)":"scale(1)"};

  &:hover {
    border-color: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.brand.purple};
  }
`,nS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Ul=m.div`
  cursor: pointer;
  animation: ${ym} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,aS=m.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[200]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Ul}:hover & {
    transform: translateY(${O.motion.hoverLiftLg});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,iS=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ul}:hover & {
    transform: scale(1);
  }
`,lS=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ul}:hover & {
    transform: scale(1);
  }
`,rS=m.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:n})=>n.spacing[10]};
  background: ${O.effects.cardOverlayGradient};
  opacity: 1;
  transition: opacity 0.5s ease;
`,oS=m.span`
  color: ${O.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,sS=m.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,cS=m.div`
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

  ${Ul}:hover & {
    transform: scale(1);
  }
`,uS=m.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${O.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,fS=m.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,dS=m.div`
  position: fixed;
  inset: 0;
  z-index: ${O.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${Z1} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,pS=m.div`
  position: absolute;
  inset: 0;
  background: ${O.effects.overlayDark95};
  backdrop-filter: blur(${O.effects.blurStrong});
`,gS=m.div`
  position: relative;
  width: 100%;
  max-width: ${O.layout.workModalMaxWidth};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${O.layout.workModalMaxHeight};
  animation: ${ym} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,hS=m.button`
  position: absolute;
  top: ${({theme:n})=>n.spacing[6]};
  right: ${({theme:n})=>n.spacing[6]};
  z-index: ${O.zIndex.closeButton};
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  background: ${O.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${O.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${O.effects.glassWhite20};
  }
`,mS=m.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${O.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,yS=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,vS=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;m.div`
  width: 100%;
  height: 100%;
  padding: ${({theme:n})=>n.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  overflow-y: auto;
`;m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`;m.h4`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`;m.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${O.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`;m.div`
  flex: 0 0 auto;
  width: 220px;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[50]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`;m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`;const bS=m.div`
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
`,SS=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,xS=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,$S=m.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,wS=m.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,zS=m.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,TS=m.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,jS=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,ES=m.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,_S=m.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,AS=m.a`
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
    transform: translateY(${O.motion.hoverLiftSm});
  }
`,OS=()=>{const{t:n}=jt(),[o,f]=Oe.useState("All"),[s,y]=Oe.useState(null),b=k=>k.includes(" ")?encodeURI(k):k;Oe.useEffect(()=>{if(!s)return;const k=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=k}},[s]);const M=["All",...X1],Y=Oe.useMemo(()=>o==="All"?bo:bo.filter(k=>k.category===o),[o]);return d.jsxs(K1,{id:nn.WORK,children:[d.jsxs(W1,{children:[d.jsxs(P1,{children:[d.jsxs(J1,{children:[d.jsx(I1,{children:n.work.title}),d.jsx(F1,{children:n.work.subtitle})]}),d.jsx(eS,{children:M.map(k=>d.jsx(tS,{$active:o===k,onClick:()=>f(k),children:k==="All"?n.work.all:Fc(k,n)},k))})]}),d.jsx(nS,{children:Y.map((k,A)=>{const N=n.projects[k.id],W=(N==null?void 0:N.title)??k.title;return d.jsx(Ul,{style:{animationDelay:`${A*.1}s`},onClick:()=>y(k),children:d.jsxs(aS,{children:[k.mediaType==="video"?d.jsx(lS,{src:b(k.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):d.jsx(iS,{src:b(k.mediaUrl),alt:W}),d.jsxs(rS,{children:[d.jsx(oS,{children:Fc(k.category,n)}),d.jsx(sS,{children:W}),d.jsx(cS,{children:d.jsx(wb,{size:24})})]})]})},k.id)})}),Y.length===0&&d.jsxs(uS,{children:[d.jsx(Db,{color:"#e2e8f0",size:48}),d.jsx(fS,{children:n.work.emptyState})]})]}),s&&(()=>{const k=n.projects[s.id],A=(k==null?void 0:k.title)??s.title,N=(k==null?void 0:k.description)??s.description,W=(k==null?void 0:k.technologies)??s.technologies;return d.jsxs(dS,{children:[d.jsx(pS,{onClick:()=>y(null)}),d.jsxs(gS,{children:[d.jsx(hS,{onClick:()=>y(null),"aria-label":n.work.close,children:d.jsx(Mu,{size:24})}),d.jsx(mS,{children:s.mediaType==="video"?d.jsx(vS,{src:b(s.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):d.jsx(yS,{src:b(s.mediaUrl),alt:A})}),d.jsxs(bS,{children:[d.jsxs(SS,{children:[d.jsx(Wb,{size:14}),d.jsx(xS,{children:Fc(s.category,n)})]}),d.jsx($S,{children:A}),d.jsx(wS,{children:N}),d.jsxs(zS,{children:[d.jsx(TS,{children:n.work.technologies}),d.jsx(jS,{children:W.map((le,ce)=>d.jsx(ES,{children:le},ce))})]}),d.jsx(_S,{children:d.jsxs(AS,{href:s.link,children:[n.work.viewProject,d.jsx(Ab,{size:18})]})})]})]})]})})()]})},kS=Xt`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${O.motion.floatOffset}); }
`,CS=m.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,MS=m.div`
  position: absolute;
  top: ${({theme:n})=>n.spacing[10]};
  right: ${O.layout.aboutWatermarkOffsetX};
  font-size: ${O.layout.aboutWatermarkFontSize};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`,DS=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,HS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,RS=m.div`
  position: relative;
`,LS=m.div`
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
`,NS=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,US=m.div`
  position: absolute;
  inset: 0;
  background: ${O.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,BS=m.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${kS} 6s ease-in-out infinite;
  max-width: ${O.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,GS=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,qS=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,YS=m.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,VS=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,XS=m(Du)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,QS=m.div`
  display: flex;
  flex-direction: column;
`;m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`;const ZS=m.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,KS=m.span`
  font-style: italic;
`,WS=m(Du)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,PS=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,JS=m.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,IS=m.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${O.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,FS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ex=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,vm=m.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,bm=m(Tb)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,Sm=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,tx=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${vm} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${bm} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${Sm} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,nx=()=>{const{t:n}=jt();return d.jsxs(CS,{id:nn.ABOUT,children:[d.jsx(MS,{children:n.about.watermark}),d.jsx(DS,{children:d.jsxs(HS,{children:[d.jsxs(RS,{children:[d.jsxs(LS,{children:[d.jsx(NS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),d.jsx(US,{"data-overlay":!0})]}),d.jsxs(BS,{children:[d.jsxs(GS,{children:[d.jsx(Zb,{color:"#6366f1",fill:"#6366f1",size:16}),d.jsx(qS,{children:n.about.experience})]}),d.jsxs(YS,{children:["5+ ",d.jsx(VS,{children:n.about.years})]}),d.jsx(XS,{element:"p",message:f=>f.about.experienceText})]})]}),d.jsxs(QS,{children:[d.jsxs(ZS,{children:[n.about.heading1," ",d.jsx(KS,{children:n.about.emphasis})," ",d.jsx("br",{})," ",n.about.heading2]}),d.jsx(WS,{element:"p",message:f=>f.about.bio}),d.jsx(PS,{children:d.jsxs("div",{children:[d.jsxs(JS,{children:[d.jsx(IS,{}),n.about.proficiencies]}),d.jsx(FS,{children:mm.map((f,s)=>d.jsx(ex,{children:d.jsxs(tx,{children:[d.jsx(vm,{children:d.jsx(bm,{size:12})}),d.jsx(Sm,{children:t1(f,n)})]})},s))})]})})]})]})})]})},ax=m.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,ix=m.div`
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
`,lx=m.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,rx=m.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,ox=m.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,sx=m.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,cx=m.a`
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
    transform: translateY(${O.motion.hoverLiftMd});
  }
`,ux=()=>{const{t:n}=jt(),o=f=>{switch(f){case"Twitter":return d.jsx(Jb,{size:20});case"Linkedin":return d.jsx(Bb,{size:20});case"Dribbble":return d.jsx(Eb,{size:20});case"Mail":return d.jsx(qb,{size:20});default:return null}};return d.jsx(ax,{children:d.jsxs(ix,{children:[d.jsxs(lx,{children:[d.jsx(rx,{children:vo}),d.jsxs(ox,{children:["© ",new Date().getFullYear()," ",vo,". ",n.footer.rights]})]}),d.jsx(sx,{children:Q1.map(f=>d.jsx(cx,{href:f.url,target:"_blank",rel:"noopener noreferrer","aria-label":f.name,children:o(f.icon)},f.name))})]})})};var Re=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELAKA="namelaka",n.MINDZY="mindzy",n.MARKETING_VIDEO="marketing-video",n.ELEMENTAL_QUEST="elemental-quest",n.COMBAT_PLANES="combat-planes",n.FATTY_FISH="fatty-fish",n.LANDING_HP_VS_VADER="landing-hp-vs-vader",n))(Re||{}),eu={},tu={},Al={},nu={},oh;function fx(){return oh||(oh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(nu)),nu}var au,sh;function dx(){if(sh)return au;sh=1;var n="Expected a function",o=NaN,f="[object Symbol]",s=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,M=/^0o[0-7]+$/i,Y=parseInt,k=typeof io=="object"&&io&&io.Object===Object&&io,A=typeof self=="object"&&self&&self.Object===Object&&self,N=k||A||Function("return this")(),W=Object.prototype,le=W.toString,ce=Math.max,ae=Math.min,X=function(){return N.Date.now()};function he(w,z,x){var D,_,v,q,Z,R,P=0,ee=!1,E=!1,u=!0;if(typeof w!="function")throw new TypeError(n);z=oe(z)||0,ue(x)&&(ee=!!x.leading,E="maxWait"in x,v=E?ce(oe(x.maxWait)||0,z):v,u="trailing"in x?!!x.trailing:u);function ie(te){var me=D,de=_;return D=_=void 0,P=te,q=w.apply(de,me),q}function T(te){return P=te,Z=setTimeout(S,z),ee?ie(te):q}function p(te){var me=te-R,de=te-P,Se=z-me;return E?ae(Se,v-de):Se}function g(te){var me=te-R,de=te-P;return R===void 0||me>=z||me<0||E&&de>=v}function S(){var te=X();if(g(te))return B(te);Z=setTimeout(S,p(te))}function B(te){return Z=void 0,u&&D?ie(te):(D=_=void 0,q)}function H(){Z!==void 0&&clearTimeout(Z),P=0,D=R=_=Z=void 0}function J(){return Z===void 0?q:B(X())}function K(){var te=X(),me=g(te);if(D=arguments,_=this,R=te,me){if(Z===void 0)return T(R);if(E)return Z=setTimeout(S,z),ie(R)}return Z===void 0&&(Z=setTimeout(S,z)),q}return K.cancel=H,K.flush=J,K}function ue(w){var z=typeof w;return!!w&&(z=="object"||z=="function")}function pe(w){return!!w&&typeof w=="object"}function ne(w){return typeof w=="symbol"||pe(w)&&le.call(w)==f}function oe(w){if(typeof w=="number")return w;if(ne(w))return o;if(ue(w)){var z=typeof w.valueOf=="function"?w.valueOf():w;w=ue(z)?z+"":z}if(typeof w!="string")return w===0?w:+w;w=w.replace(s,"");var x=b.test(w);return x||M.test(w)?Y(w.slice(2),x?2:8):y.test(w)?o:+w}return au=he,au}var iu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ch;function _o(){return ch||(ch=1,(function(n){(function(){var o={}.hasOwnProperty;function f(){for(var b="",M=0;M<arguments.length;M++){var Y=arguments[M];Y&&(b=y(b,s(Y)))}return b}function s(b){if(typeof b=="string"||typeof b=="number")return b;if(typeof b!="object")return"";if(Array.isArray(b))return f.apply(null,b);if(b.toString!==Object.prototype.toString&&!b.toString.toString().includes("[native code]"))return b.toString();var M="";for(var Y in b)o.call(b,Y)&&b[Y]&&(M=y(M,Y));return M}function y(b,M){return M?b?b+" "+M:b+M:b}n.exports?(f.default=f,n.exports=f):window.classNames=f})()})(iu)),iu.exports}var re={},lu={},uh;function xm(){return uh||(uh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(bn());function f(y){return y&&y.__esModule?y:{default:y}}var s={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(b){return o.default.createElement("ul",{style:{display:"block"}},b)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(b){return o.default.createElement("button",null,b+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=s})(lu)),lu}var fh;function Bl(){if(fh)return re;fh=1,Object.defineProperty(re,"__esModule",{value:!0}),re.checkSpecKeys=re.checkNavigable=re.changeSlide=re.canUseDOM=re.canGoNext=void 0,re.clamp=A,re.extractObject=void 0,re.filterSettings=ie,re.validSettings=re.swipeStart=re.swipeMove=re.swipeEnd=re.slidesOnRight=re.slidesOnLeft=re.slideHandler=re.siblingDirection=re.safePreventDefault=re.lazyStartIndex=re.lazySlidesOnRight=re.lazySlidesOnLeft=re.lazyEndIndex=re.keyHandler=re.initializedState=re.getWidth=re.getTrackLeft=re.getTrackCSS=re.getTrackAnimateCSS=re.getTotalSlides=re.getSwipeDirection=re.getSlideCount=re.getRequiredLazySlides=re.getPreClones=re.getPostClones=re.getOnDemandLazySlides=re.getNavigableIndexes=re.getHeight=void 0;var n=f(bn()),o=f(xm());function f(T){return T&&T.__esModule?T:{default:T}}function s(T){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s(T)}function y(T,p){var g=Object.keys(T);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(T);p&&(S=S.filter(function(B){return Object.getOwnPropertyDescriptor(T,B).enumerable})),g.push.apply(g,S)}return g}function b(T){for(var p=1;p<arguments.length;p++){var g=arguments[p]!=null?arguments[p]:{};p%2?y(Object(g),!0).forEach(function(S){M(T,S,g[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(g)):y(Object(g)).forEach(function(S){Object.defineProperty(T,S,Object.getOwnPropertyDescriptor(g,S))})}return T}function M(T,p,g){return(p=Y(p))in T?Object.defineProperty(T,p,{value:g,enumerable:!0,configurable:!0,writable:!0}):T[p]=g,T}function Y(T){var p=k(T,"string");return s(p)=="symbol"?p:p+""}function k(T,p){if(s(T)!="object"||!T)return T;var g=T[Symbol.toPrimitive];if(g!==void 0){var S=g.call(T,p);if(s(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(T)}function A(T,p,g){return Math.max(p,Math.min(T,g))}var N=re.safePreventDefault=function(p){var g=["onTouchStart","onTouchMove","onWheel"];g.includes(p._reactName)||p.preventDefault()},W=re.getOnDemandLazySlides=function(p){for(var g=[],S=le(p),B=ce(p),H=S;H<B;H++)p.lazyLoadedList.indexOf(H)<0&&g.push(H);return g};re.getRequiredLazySlides=function(p){for(var g=[],S=le(p),B=ce(p),H=S;H<B;H++)g.push(H);return g};var le=re.lazyStartIndex=function(p){return p.currentSlide-ae(p)},ce=re.lazyEndIndex=function(p){return p.currentSlide+X(p)},ae=re.lazySlidesOnLeft=function(p){return p.centerMode?Math.floor(p.slidesToShow/2)+(parseInt(p.centerPadding)>0?1:0):0},X=re.lazySlidesOnRight=function(p){return p.centerMode?Math.floor((p.slidesToShow-1)/2)+1+(parseInt(p.centerPadding)>0?1:0):p.slidesToShow},he=re.getWidth=function(p){return p&&p.offsetWidth||0},ue=re.getHeight=function(p){return p&&p.offsetHeight||0},pe=re.getSwipeDirection=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S,B,H,J;return S=p.startX-p.curX,B=p.startY-p.curY,H=Math.atan2(B,S),J=Math.round(H*180/Math.PI),J<0&&(J=360-Math.abs(J)),J<=45&&J>=0||J<=360&&J>=315?"left":J>=135&&J<=225?"right":g===!0?J>=35&&J<=135?"up":"down":"vertical"},ne=re.canGoNext=function(p){var g=!0;return p.infinite||(p.centerMode&&p.currentSlide>=p.slideCount-1||p.slideCount<=p.slidesToShow||p.currentSlide>=p.slideCount-p.slidesToShow)&&(g=!1),g};re.extractObject=function(p,g){var S={};return g.forEach(function(B){return S[B]=p[B]}),S},re.initializedState=function(p){var g=n.default.Children.count(p.children),S=p.listRef,B=Math.ceil(he(S)),H=p.trackRef&&p.trackRef.node,J=Math.ceil(he(H)),K;if(p.vertical)K=B;else{var te=p.centerMode&&parseInt(p.centerPadding)*2;typeof p.centerPadding=="string"&&p.centerPadding.slice(-1)==="%"&&(te*=B/100),K=Math.ceil((B-te)/p.slidesToShow)}var me=S&&ue(S.querySelector('[data-index="0"]')),de=me*p.slidesToShow,Se=p.currentSlide===void 0?p.initialSlide:p.currentSlide;p.rtl&&p.currentSlide===void 0&&(Se=g-1-p.initialSlide);var Ee=p.lazyLoadedList||[],$e=W(b(b({},p),{},{currentSlide:Se,lazyLoadedList:Ee}));Ee=Ee.concat($e);var _e={slideCount:g,slideWidth:K,listWidth:B,trackWidth:J,currentSlide:Se,slideHeight:me,listHeight:de,lazyLoadedList:Ee};return p.autoplaying===null&&p.autoplay&&(_e.autoplaying="playing"),_e},re.slideHandler=function(p){var g=p.waitForAnimate,S=p.animating,B=p.fade,H=p.infinite,J=p.index,K=p.slideCount,te=p.lazyLoad,me=p.currentSlide,de=p.centerMode,Se=p.slidesToScroll,Ee=p.slidesToShow,$e=p.useCSS,_e=p.lazyLoadedList;if(g&&S)return{};var be=J,ze,Je,Ae,Ie={},Fe={},nt=H?J:A(J,0,K-1);if(B){if(!H&&(J<0||J>=K))return{};J<0?be=J+K:J>=K&&(be=J-K),te&&_e.indexOf(be)<0&&(_e=_e.concat(be)),Ie={animating:!0,currentSlide:be,lazyLoadedList:_e,targetSlide:be},Fe={animating:!1,targetSlide:be}}else ze=be,be<0?(ze=be+K,H?K%Se!==0&&(ze=K-K%Se):ze=0):!ne(p)&&be>me?be=ze=me:de&&be>=K?(be=H?K:K-1,ze=H?0:K-1):be>=K&&(ze=be-K,H?K%Se!==0&&(ze=0):ze=K-Ee),!H&&be+Ee>=K&&(ze=K-Ee),Je=v(b(b({},p),{},{slideIndex:be})),Ae=v(b(b({},p),{},{slideIndex:ze})),H||(Je===Ae&&(be=ze),Je=Ae),te&&(_e=_e.concat(W(b(b({},p),{},{currentSlide:be})))),$e?(Ie={animating:!0,currentSlide:ze,trackStyle:_(b(b({},p),{},{left:Je})),lazyLoadedList:_e,targetSlide:nt},Fe={animating:!1,currentSlide:ze,trackStyle:D(b(b({},p),{},{left:Ae})),swipeLeft:null,targetSlide:nt}):Ie={currentSlide:ze,trackStyle:D(b(b({},p),{},{left:Ae})),lazyLoadedList:_e,targetSlide:nt};return{state:Ie,nextState:Fe}},re.changeSlide=function(p,g){var S,B,H,J,K,te=p.slidesToScroll,me=p.slidesToShow,de=p.slideCount,Se=p.currentSlide,Ee=p.targetSlide,$e=p.lazyLoad,_e=p.infinite;if(J=de%te!==0,S=J?0:(de-Se)%te,g.message==="previous")H=S===0?te:me-S,K=Se-H,$e&&!_e&&(B=Se-H,K=B===-1?de-1:B),_e||(K=Ee-te);else if(g.message==="next")H=S===0?te:S,K=Se+H,$e&&!_e&&(K=(Se+te)%de+S),_e||(K=Ee+te);else if(g.message==="dots")K=g.index*g.slidesToScroll;else if(g.message==="children"){if(K=g.index,_e){var be=P(b(b({},p),{},{targetSlide:K}));K>g.currentSlide&&be==="left"?K=K-de:K<g.currentSlide&&be==="right"&&(K=K+de)}}else g.message==="index"&&(K=Number(g.index));return K},re.keyHandler=function(p,g,S){return p.target.tagName.match("TEXTAREA|INPUT|SELECT")||!g?"":p.keyCode===37?S?"next":"previous":p.keyCode===39?S?"previous":"next":""},re.swipeStart=function(p,g,S){return p.target.tagName==="IMG"&&N(p),!g||!S&&p.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:p.touches?p.touches[0].pageX:p.clientX,startY:p.touches?p.touches[0].pageY:p.clientY,curX:p.touches?p.touches[0].pageX:p.clientX,curY:p.touches?p.touches[0].pageY:p.clientY}}},re.swipeMove=function(p,g){var S=g.scrolling,B=g.animating,H=g.vertical,J=g.swipeToSlide,K=g.verticalSwiping,te=g.rtl,me=g.currentSlide,de=g.edgeFriction,Se=g.edgeDragged,Ee=g.onEdge,$e=g.swiped,_e=g.swiping,be=g.slideCount,ze=g.slidesToScroll,Je=g.infinite,Ae=g.touchObject,Ie=g.swipeEvent,Fe=g.listHeight,nt=g.listWidth;if(!S){if(B)return N(p);H&&J&&K&&N(p);var yt,Sn={},Ua=v(g);Ae.curX=p.touches?p.touches[0].pageX:p.clientX,Ae.curY=p.touches?p.touches[0].pageY:p.clientY,Ae.swipeLength=Math.round(Math.sqrt(Math.pow(Ae.curX-Ae.startX,2)));var zt=Math.round(Math.sqrt(Math.pow(Ae.curY-Ae.startY,2)));if(!K&&!_e&&zt>10)return{scrolling:!0};K&&(Ae.swipeLength=zt);var ha=(te?-1:1)*(Ae.curX>Ae.startX?1:-1);K&&(ha=Ae.curY>Ae.startY?1:-1);var Gl=Math.ceil(be/ze),ln=pe(g.touchObject,K),dn=Ae.swipeLength;return Je||(me===0&&(ln==="right"||ln==="down")||me+1>=Gl&&(ln==="left"||ln==="up")||!ne(g)&&(ln==="left"||ln==="up"))&&(dn=Ae.swipeLength*de,Se===!1&&Ee&&(Ee(ln),Sn.edgeDragged=!0)),!$e&&Ie&&(Ie(ln),Sn.swiped=!0),H?yt=Ua+dn*(Fe/nt)*ha:te?yt=Ua-dn*ha:yt=Ua+dn*ha,K&&(yt=Ua+dn*ha),Sn=b(b({},Sn),{},{touchObject:Ae,swipeLeft:yt,trackStyle:D(b(b({},g),{},{left:yt}))}),Math.abs(Ae.curX-Ae.startX)<Math.abs(Ae.curY-Ae.startY)*.8||Ae.swipeLength>10&&(Sn.swiping=!0,N(p)),Sn}},re.swipeEnd=function(p,g){var S=g.dragging,B=g.swipe,H=g.touchObject,J=g.listWidth,K=g.touchThreshold,te=g.verticalSwiping,me=g.listHeight,de=g.swipeToSlide,Se=g.scrolling,Ee=g.onSwipe,$e=g.targetSlide,_e=g.currentSlide,be=g.infinite;if(!S)return B&&N(p),{};var ze=te?me/K:J/K,Je=pe(H,te),Ae={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!H.swipeLength)return Ae;if(H.swipeLength>ze){N(p),Ee&&Ee(Je);var Ie,Fe,nt=be?_e:$e;switch(Je){case"left":case"up":Fe=nt+z(g),Ie=de?w(g,Fe):Fe,Ae.currentDirection=0;break;case"right":case"down":Fe=nt-z(g),Ie=de?w(g,Fe):Fe,Ae.currentDirection=1;break;default:Ie=nt}Ae.triggerSlideHandler=Ie}else{var yt=v(g);Ae.trackStyle=_(b(b({},g),{},{left:yt}))}return Ae};var oe=re.getNavigableIndexes=function(p){for(var g=p.infinite?p.slideCount*2:p.slideCount,S=p.infinite?p.slidesToShow*-1:0,B=p.infinite?p.slidesToShow*-1:0,H=[];S<g;)H.push(S),S=B+p.slidesToScroll,B+=Math.min(p.slidesToScroll,p.slidesToShow);return H},w=re.checkNavigable=function(p,g){var S=oe(p),B=0;if(g>S[S.length-1])g=S[S.length-1];else for(var H in S){if(g<S[H]){g=B;break}B=S[H]}return g},z=re.getSlideCount=function(p){var g=p.centerMode?p.slideWidth*Math.floor(p.slidesToShow/2):0;if(p.swipeToSlide){var S,B=p.listRef,H=B.querySelectorAll&&B.querySelectorAll(".slick-slide")||[];if(Array.from(H).every(function(te){if(p.vertical){if(te.offsetTop+ue(te)/2>p.swipeLeft*-1)return S=te,!1}else if(te.offsetLeft-g+he(te)/2>p.swipeLeft*-1)return S=te,!1;return!0}),!S)return 0;var J=p.rtl===!0?p.slideCount-p.currentSlide:p.currentSlide,K=Math.abs(S.dataset.index-J)||1;return K}else return p.slidesToScroll},x=re.checkSpecKeys=function(p,g){return g.reduce(function(S,B){return S&&p.hasOwnProperty(B)},!0)?null:console.error("Keys Missing:",p)},D=re.getTrackCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var g,S;if(!p.vertical)g=R(p)*p.slideWidth;else{var B=p.unslick?p.slideCount:p.slideCount+2*p.slidesToShow;S=B*p.slideHeight}var H={opacity:1,transition:"",WebkitTransition:""};if(p.useTransform){var J=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",K=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",te=p.vertical?"translateY("+p.left+"px)":"translateX("+p.left+"px)";H=b(b({},H),{},{WebkitTransform:J,transform:K,msTransform:te})}else p.vertical?H.top=p.left:H.left=p.left;return p.fade&&(H={opacity:1}),g&&(H.width=g),S&&(H.height=S),window&&!window.addEventListener&&window.attachEvent&&(p.vertical?H.marginTop=p.left+"px":H.marginLeft=p.left+"px"),H},_=re.getTrackAnimateCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var g=D(p);return p.useTransform?(g.WebkitTransition="-webkit-transform "+p.speed+"ms "+p.cssEase,g.transition="transform "+p.speed+"ms "+p.cssEase):p.vertical?g.transition="top "+p.speed+"ms "+p.cssEase:g.transition="left "+p.speed+"ms "+p.cssEase,g},v=re.getTrackLeft=function(p){if(p.unslick)return 0;x(p,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var g=p.slideIndex,S=p.trackRef,B=p.infinite,H=p.centerMode,J=p.slideCount,K=p.slidesToShow,te=p.slidesToScroll,me=p.slideWidth,de=p.listWidth,Se=p.variableWidth,Ee=p.slideHeight,$e=p.fade,_e=p.vertical,be=0,ze,Je,Ae=0;if($e||p.slideCount===1)return 0;var Ie=0;if(B?(Ie=-q(p),J%te!==0&&g+te>J&&(Ie=-(g>J?K-(g-J):J%te)),H&&(Ie+=parseInt(K/2))):(J%te!==0&&g+te>J&&(Ie=K-J%te),H&&(Ie=parseInt(K/2))),be=Ie*me,Ae=Ie*Ee,_e?ze=g*Ee*-1+Ae:ze=g*me*-1+be,Se===!0){var Fe,nt=S&&S.node;if(Fe=g+q(p),Je=nt&&nt.childNodes[Fe],ze=Je?Je.offsetLeft*-1:0,H===!0){Fe=B?g+q(p):g,Je=nt&&nt.children[Fe],ze=0;for(var yt=0;yt<Fe;yt++)ze-=nt&&nt.children[yt]&&nt.children[yt].offsetWidth;ze-=parseInt(p.centerPadding),ze+=Je&&(de-Je.offsetWidth)/2}}return ze},q=re.getPreClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},Z=re.getPostClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},R=re.getTotalSlides=function(p){return p.slideCount===1?1:q(p)+p.slideCount+Z(p)},P=re.siblingDirection=function(p){return p.targetSlide>p.currentSlide?p.targetSlide>p.currentSlide+ee(p)?"left":"right":p.targetSlide<p.currentSlide-E(p)?"right":"left"},ee=re.slidesOnRight=function(p){var g=p.slidesToShow,S=p.centerMode,B=p.rtl,H=p.centerPadding;if(S){var J=(g-1)/2+1;return parseInt(H)>0&&(J+=1),B&&g%2===0&&(J+=1),J}return B?0:g-1},E=re.slidesOnLeft=function(p){var g=p.slidesToShow,S=p.centerMode,B=p.rtl,H=p.centerPadding;if(S){var J=(g-1)/2+1;return parseInt(H)>0&&(J+=1),!B&&g%2===0&&(J+=1),J}return B?g-1:0};re.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var u=re.validSettings=Object.keys(o.default);function ie(T){return u.reduce(function(p,g){return T.hasOwnProperty(g)&&(p[g]=T[g]),p},{})}return re}var Ol={},dh;function px(){if(dh)return Ol;dh=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.Track=void 0;var n=s(bn()),o=s(_o()),f=Bl();function s(_){return _&&_.__esModule?_:{default:_}}function y(_){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},y(_)}function b(){return b=Object.assign?Object.assign.bind():function(_){for(var v=1;v<arguments.length;v++){var q=arguments[v];for(var Z in q)({}).hasOwnProperty.call(q,Z)&&(_[Z]=q[Z])}return _},b.apply(null,arguments)}function M(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function Y(_,v){for(var q=0;q<v.length;q++){var Z=v[q];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(_,ne(Z.key),Z)}}function k(_,v,q){return v&&Y(_.prototype,v),Object.defineProperty(_,"prototype",{writable:!1}),_}function A(_,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(v&&v.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),v&&N(_,v)}function N(_,v){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(q,Z){return q.__proto__=Z,q},N(_,v)}function W(_){var v=ae();return function(){var q,Z=X(_);if(v){var R=X(this).constructor;q=Reflect.construct(Z,arguments,R)}else q=Z.apply(this,arguments);return le(this,q)}}function le(_,v){if(v&&(y(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(_)}function ce(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function ae(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!_})()}function X(_){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},X(_)}function he(_,v){var q=Object.keys(_);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(_);v&&(Z=Z.filter(function(R){return Object.getOwnPropertyDescriptor(_,R).enumerable})),q.push.apply(q,Z)}return q}function ue(_){for(var v=1;v<arguments.length;v++){var q=arguments[v]!=null?arguments[v]:{};v%2?he(Object(q),!0).forEach(function(Z){pe(_,Z,q[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(q)):he(Object(q)).forEach(function(Z){Object.defineProperty(_,Z,Object.getOwnPropertyDescriptor(q,Z))})}return _}function pe(_,v,q){return(v=ne(v))in _?Object.defineProperty(_,v,{value:q,enumerable:!0,configurable:!0,writable:!0}):_[v]=q,_}function ne(_){var v=oe(_,"string");return y(v)=="symbol"?v:v+""}function oe(_,v){if(y(_)!="object"||!_)return _;var q=_[Symbol.toPrimitive];if(q!==void 0){var Z=q.call(_,v);if(y(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(_)}var w=function(v){var q,Z,R,P,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,R=ee<0||ee>=v.slideCount,v.centerMode?(P=Math.floor(v.slidesToShow/2),Z=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-P-1&&ee<=v.currentSlide+P&&(q=!0)):q=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var E;v.targetSlide<0?E=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?E=v.targetSlide-v.slideCount:E=v.targetSlide;var u=ee===E;return{"slick-slide":!0,"slick-active":q,"slick-center":Z,"slick-cloned":R,"slick-current":u}},z=function(v){var q={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(q.width=v.slideWidth),v.fade&&(q.position="relative",v.vertical?q.top=-v.index*parseInt(v.slideHeight):q.left=-v.index*parseInt(v.slideWidth),q.opacity=v.currentSlide===v.index?1:0,q.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(q.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),q},x=function(v,q){return v.key||q},D=function(v){var q,Z=[],R=[],P=[],ee=n.default.Children.count(v.children),E=(0,f.lazyStartIndex)(v),u=(0,f.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ie,T){var p,g={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?p=ie:p=n.default.createElement("div",null);var S=z(ue(ue({},v),{},{index:T})),B=p.props.className||"",H=w(ue(ue({},v),{},{index:T}));if(Z.push(n.default.cloneElement(p,{key:"original"+x(p,T),"data-index":T,className:(0,o.default)(H,B),tabIndex:"-1","aria-hidden":!H["slick-active"],style:ue(ue({outline:"none"},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var J=ee-T;J<=(0,f.getPreClones)(v)&&(q=-J,q>=E&&(p=ie),H=w(ue(ue({},v),{},{index:q})),R.push(n.default.cloneElement(p,{key:"precloned"+x(p,q),"data-index":q,tabIndex:"-1",className:(0,o.default)(H,B),"aria-hidden":!H["slick-active"],style:ue(ue({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}}))),T<(0,f.getPostClones)(v)&&(q=ee+T,q<u&&(p=ie),H=w(ue(ue({},v),{},{index:q})),P.push(n.default.cloneElement(p,{key:"postcloned"+x(p,q),"data-index":q,tabIndex:"-1",className:(0,o.default)(H,B),"aria-hidden":!H["slick-active"],style:ue(ue({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})))}}),v.rtl?R.concat(Z,P).reverse():R.concat(Z,P)};return Ol.Track=(function(_){A(q,_);var v=W(q);function q(){var Z;M(this,q);for(var R=arguments.length,P=new Array(R),ee=0;ee<R;ee++)P[ee]=arguments[ee];return Z=v.call.apply(v,[this].concat(P)),pe(ce(Z),"node",null),pe(ce(Z),"handleRef",function(E){Z.node=E}),Z}return k(q,[{key:"render",value:function(){var R=D(this.props),P=this.props,ee=P.onMouseEnter,E=P.onMouseOver,u=P.onMouseLeave,ie={onMouseEnter:ee,onMouseOver:E,onMouseLeave:u};return n.default.createElement("div",b({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ie),R)}}]),q})(n.default.PureComponent),Ol}var kl={},ph;function gx(){if(ph)return kl;ph=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(kl,"__esModule",{value:!0}),kl.Dots=void 0;var o=y(bn()),f=y(_o()),s=Bl();function y(w){return w&&w.__esModule?w:{default:w}}function b(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,D)}return x}function M(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?b(Object(x),!0).forEach(function(D){Y(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):b(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function Y(w,z,x){return(z=W(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function k(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function A(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,W(D.key),D)}}function N(w,z,x){return z&&A(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function W(w){var z=le(w,"string");return n(z)=="symbol"?z:z+""}function le(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function ce(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&ae(w,z)}function ae(w,z){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},ae(w,z)}function X(w){var z=pe();return function(){var x,D=ne(w);if(z){var _=ne(this).constructor;x=Reflect.construct(D,arguments,_)}else x=D.apply(this,arguments);return he(this,x)}}function he(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(w)}function ue(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function pe(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pe=function(){return!!w})()}function ne(w){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},ne(w)}var oe=function(z){var x;return z.infinite?x=Math.ceil(z.slideCount/z.slidesToScroll):x=Math.ceil((z.slideCount-z.slidesToShow)/z.slidesToScroll)+1,x};return kl.Dots=(function(w){ce(x,w);var z=X(x);function x(){return k(this,x),z.apply(this,arguments)}return N(x,[{key:"clickHandler",value:function(_,v){v.preventDefault(),this.props.clickHandler(_)}},{key:"render",value:function(){for(var _=this.props,v=_.onMouseEnter,q=_.onMouseOver,Z=_.onMouseLeave,R=_.infinite,P=_.slidesToScroll,ee=_.slidesToShow,E=_.slideCount,u=_.currentSlide,ie=oe({slideCount:E,slidesToScroll:P,slidesToShow:ee,infinite:R}),T={onMouseEnter:v,onMouseOver:q,onMouseLeave:Z},p=[],g=0;g<ie;g++){var S=(g+1)*P-1,B=R?S:(0,s.clamp)(S,0,E-1),H=B-(P-1),J=R?H:(0,s.clamp)(H,0,E-1),K=(0,f.default)({"slick-active":R?u>=J&&u<=B:u===J}),te={message:"dots",index:g,slidesToScroll:P,currentSlide:u},me=this.clickHandler.bind(this,te);p=p.concat(o.default.createElement("li",{key:g,className:K},o.default.cloneElement(this.props.customPaging(g),{onClick:me})))}return o.default.cloneElement(this.props.appendDots(p),M({className:this.props.dotsClass},T))}}]),x})(o.default.PureComponent),kl}var Da={},gh;function hx(){if(gh)return Da;gh=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(Da,"__esModule",{value:!0}),Da.PrevArrow=Da.NextArrow=void 0;var o=y(bn()),f=y(_o()),s=Bl();function y(w){return w&&w.__esModule?w:{default:w}}function b(){return b=Object.assign?Object.assign.bind():function(w){for(var z=1;z<arguments.length;z++){var x=arguments[z];for(var D in x)({}).hasOwnProperty.call(x,D)&&(w[D]=x[D])}return w},b.apply(null,arguments)}function M(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,D)}return x}function Y(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?M(Object(x),!0).forEach(function(D){k(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):M(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function k(w,z,x){return(z=le(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function A(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function N(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,le(D.key),D)}}function W(w,z,x){return z&&N(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function le(w){var z=ce(w,"string");return n(z)=="symbol"?z:z+""}function ce(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function ae(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&X(w,z)}function X(w,z){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},X(w,z)}function he(w){var z=ne();return function(){var x,D=oe(w);if(z){var _=oe(this).constructor;x=Reflect.construct(D,arguments,_)}else x=D.apply(this,arguments);return ue(this,x)}}function ue(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pe(w)}function pe(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ne(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!w})()}function oe(w){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},oe(w)}return Da.PrevArrow=(function(w){ae(x,w);var z=he(x);function x(){return A(this,x),z.apply(this,arguments)}return W(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(_["slick-disabled"]=!0,v=null);var q={key:"0","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.prevArrow?R=o.default.cloneElement(this.props.prevArrow,Y(Y({},q),Z)):R=o.default.createElement("button",b({key:"0",type:"button"},q)," ","Previous"),R}}]),x})(o.default.PureComponent),Da.NextArrow=(function(w){ae(x,w);var z=he(x);function x(){return A(this,x),z.apply(this,arguments)}return W(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(_["slick-disabled"]=!0,v=null);var q={key:"1","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.nextArrow?R=o.default.cloneElement(this.props.nextArrow,Y(Y({},q),Z)):R=o.default.createElement("button",b({key:"1",type:"button"},q)," ","Next"),R}}]),x})(o.default.PureComponent),Da}var $m=(function(){if(typeof Map<"u")return Map;function n(o,f){var s=-1;return o.some(function(y,b){return y[0]===f?(s=b,!0):!1}),s}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(f){var s=n(this.__entries__,f),y=this.__entries__[s];return y&&y[1]},o.prototype.set=function(f,s){var y=n(this.__entries__,f);~y?this.__entries__[y][1]=s:this.__entries__.push([f,s])},o.prototype.delete=function(f){var s=this.__entries__,y=n(s,f);~y&&s.splice(y,1)},o.prototype.has=function(f){return!!~n(this.__entries__,f)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(f,s){s===void 0&&(s=null);for(var y=0,b=this.__entries__;y<b.length;y++){var M=b[y];f.call(s,M[1],M[0])}},o})()})(),wu=typeof window<"u"&&typeof document<"u"&&window.document===document,So=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),mx=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(So):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),yx=2;function vx(n,o){var f=!1,s=!1,y=0;function b(){f&&(f=!1,n()),s&&Y()}function M(){mx(b)}function Y(){var k=Date.now();if(f){if(k-y<yx)return;s=!0}else f=!0,s=!1,setTimeout(M,o);y=k}return Y}var bx=20,Sx=["top","right","bottom","left","width","height","size","weight"],xx=typeof MutationObserver<"u",$x=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=vx(this.refresh.bind(this),bx)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var f=this.observers_,s=f.indexOf(o);~s&&f.splice(s,1),!f.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(f){return f.gatherActive(),f.hasActive()});return o.forEach(function(f){return f.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!wu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),xx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!wu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var f=o.propertyName,s=f===void 0?"":f,y=Sx.some(function(b){return!!~s.indexOf(b)});y&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),wm=(function(n,o){for(var f=0,s=Object.keys(o);f<s.length;f++){var y=s[f];Object.defineProperty(n,y,{value:o[y],enumerable:!1,writable:!1,configurable:!0})}return n}),Mi=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||So}),zm=Ao(0,0,0,0);function xo(n){return parseFloat(n)||0}function hh(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return o.reduce(function(s,y){var b=n["border-"+y+"-width"];return s+xo(b)},0)}function wx(n){for(var o=["top","right","bottom","left"],f={},s=0,y=o;s<y.length;s++){var b=y[s],M=n["padding-"+b];f[b]=xo(M)}return f}function zx(n){var o=n.getBBox();return Ao(0,0,o.width,o.height)}function Tx(n){var o=n.clientWidth,f=n.clientHeight;if(!o&&!f)return zm;var s=Mi(n).getComputedStyle(n),y=wx(s),b=y.left+y.right,M=y.top+y.bottom,Y=xo(s.width),k=xo(s.height);if(s.boxSizing==="border-box"&&(Math.round(Y+b)!==o&&(Y-=hh(s,"left","right")+b),Math.round(k+M)!==f&&(k-=hh(s,"top","bottom")+M)),!Ex(n)){var A=Math.round(Y+b)-o,N=Math.round(k+M)-f;Math.abs(A)!==1&&(Y-=A),Math.abs(N)!==1&&(k-=N)}return Ao(y.left,y.top,Y,k)}var jx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Mi(n).SVGGraphicsElement}:function(n){return n instanceof Mi(n).SVGElement&&typeof n.getBBox=="function"}})();function Ex(n){return n===Mi(n).document.documentElement}function _x(n){return wu?jx(n)?zx(n):Tx(n):zm}function Ax(n){var o=n.x,f=n.y,s=n.width,y=n.height,b=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,M=Object.create(b.prototype);return wm(M,{x:o,y:f,width:s,height:y,top:f,right:o+s,bottom:y+f,left:o}),M}function Ao(n,o,f,s){return{x:n,y:o,width:f,height:s}}var Ox=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ao(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=_x(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),kx=(function(){function n(o,f){var s=Ax(f);wm(this,{target:o,contentRect:s})}return n})(),Cx=(function(){function n(o,f,s){if(this.activeObservations_=[],this.observations_=new $m,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=f,this.callbackCtx_=s}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Mi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)||(f.set(o,new Ox(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Mi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)&&(f.delete(o),f.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(f){f.isActive()&&o.activeObservations_.push(f)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,f=this.activeObservations_.map(function(s){return new kx(s.target,s.broadcastRect())});this.callback_.call(o,f,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),Tm=typeof WeakMap<"u"?new WeakMap:new $m,jm=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var f=$x.getInstance(),s=new Cx(o,f,this);Tm.set(this,s)}return n})();["observe","unobserve","disconnect"].forEach(function(n){jm.prototype[n]=function(){var o;return(o=Tm.get(this))[n].apply(o,arguments)}});var Mx=(function(){return typeof So.ResizeObserver<"u"?So.ResizeObserver:jm})();const Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Mx},Symbol.toStringTag,{value:"Module"})),Hx=F0(Dx);var mh;function Rx(){if(mh)return Al;mh=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.InnerSlider=void 0;var n=A(bn()),o=A(fx()),f=A(dx()),s=A(_o()),y=Bl(),b=px(),M=gx(),Y=hx(),k=A(Hx);function A(R){return R&&R.__esModule?R:{default:R}}function N(R){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},N(R)}function W(){return W=Object.assign?Object.assign.bind():function(R){for(var P=1;P<arguments.length;P++){var ee=arguments[P];for(var E in ee)({}).hasOwnProperty.call(ee,E)&&(R[E]=ee[E])}return R},W.apply(null,arguments)}function le(R,P){if(R==null)return{};var ee,E,u=ce(R,P);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(E=0;E<ie.length;E++)ee=ie[E],P.includes(ee)||{}.propertyIsEnumerable.call(R,ee)&&(u[ee]=R[ee])}return u}function ce(R,P){if(R==null)return{};var ee={};for(var E in R)if({}.hasOwnProperty.call(R,E)){if(P.includes(E))continue;ee[E]=R[E]}return ee}function ae(R,P){var ee=Object.keys(R);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(R);P&&(E=E.filter(function(u){return Object.getOwnPropertyDescriptor(R,u).enumerable})),ee.push.apply(ee,E)}return ee}function X(R){for(var P=1;P<arguments.length;P++){var ee=arguments[P]!=null?arguments[P]:{};P%2?ae(Object(ee),!0).forEach(function(E){v(R,E,ee[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(ee)):ae(Object(ee)).forEach(function(E){Object.defineProperty(R,E,Object.getOwnPropertyDescriptor(ee,E))})}return R}function he(R,P){if(!(R instanceof P))throw new TypeError("Cannot call a class as a function")}function ue(R,P){for(var ee=0;ee<P.length;ee++){var E=P[ee];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(R,q(E.key),E)}}function pe(R,P,ee){return P&&ue(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),R}function ne(R,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(P&&P.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),P&&oe(R,P)}function oe(R,P){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,E){return ee.__proto__=E,ee},oe(R,P)}function w(R){var P=D();return function(){var ee,E=_(R);if(P){var u=_(this).constructor;ee=Reflect.construct(E,arguments,u)}else ee=E.apply(this,arguments);return z(this,ee)}}function z(R,P){if(P&&(N(P)=="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(R)}function x(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function D(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!R})()}function _(R){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},_(R)}function v(R,P,ee){return(P=q(P))in R?Object.defineProperty(R,P,{value:ee,enumerable:!0,configurable:!0,writable:!0}):R[P]=ee,R}function q(R){var P=Z(R,"string");return N(P)=="symbol"?P:P+""}function Z(R,P){if(N(R)!="object"||!R)return R;var ee=R[Symbol.toPrimitive];if(ee!==void 0){var E=ee.call(R,P);if(N(E)!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(R)}return Al.InnerSlider=(function(R){ne(ee,R);var P=w(ee);function ee(E){var u;he(this,ee),u=P.call(this,E),v(x(u),"listRefHandler",function(T){return u.list=T}),v(x(u),"trackRefHandler",function(T){return u.track=T}),v(x(u),"adaptHeight",function(){if(u.props.adaptiveHeight&&u.list){var T=u.list.querySelector('[data-index="'.concat(u.state.currentSlide,'"]'));u.list.style.height=(0,y.getHeight)(T)+"px"}}),v(x(u),"componentDidMount",function(){if(u.props.onInit&&u.props.onInit(),u.props.lazyLoad){var T=(0,y.getOnDemandLazySlides)(X(X({},u.props),u.state));T.length>0&&(u.setState(function(g){return{lazyLoadedList:g.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T))}var p=X({listRef:u.list,trackRef:u.track},u.props);u.updateState(p,!0,function(){u.adaptHeight(),u.props.autoplay&&u.autoPlay("update")}),u.props.lazyLoad==="progressive"&&(u.lazyLoadTimer=setInterval(u.progressiveLazyLoad,1e3)),u.ro=new k.default(function(){u.state.animating?(u.onWindowResized(!1),u.callbackTimers.push(setTimeout(function(){return u.onWindowResized()},u.props.speed))):u.onWindowResized()}),u.ro.observe(u.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(g){g.onfocus=u.props.pauseOnFocus?u.onSlideFocus:null,g.onblur=u.props.pauseOnFocus?u.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",u.onWindowResized):window.attachEvent("onresize",u.onWindowResized)}),v(x(u),"componentWillUnmount",function(){u.animationEndCallback&&clearTimeout(u.animationEndCallback),u.lazyLoadTimer&&clearInterval(u.lazyLoadTimer),u.callbackTimers.length&&(u.callbackTimers.forEach(function(T){return clearTimeout(T)}),u.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",u.onWindowResized):window.detachEvent("onresize",u.onWindowResized),u.autoplayTimer&&clearInterval(u.autoplayTimer),u.ro.disconnect()}),v(x(u),"componentDidUpdate",function(T){if(u.checkImagesLoad(),u.props.onReInit&&u.props.onReInit(),u.props.lazyLoad){var p=(0,y.getOnDemandLazySlides)(X(X({},u.props),u.state));p.length>0&&(u.setState(function(B){return{lazyLoadedList:B.lazyLoadedList.concat(p)}}),u.props.onLazyLoad&&u.props.onLazyLoad(p))}u.adaptHeight();var g=X(X({listRef:u.list,trackRef:u.track},u.props),u.state),S=u.didPropsChange(T);S&&u.updateState(g,S,function(){u.state.currentSlide>=n.default.Children.count(u.props.children)&&u.changeSlide({message:"index",index:n.default.Children.count(u.props.children)-u.props.slidesToShow,currentSlide:u.state.currentSlide}),u.props.autoplay?u.autoPlay("update"):u.pause("paused")})}),v(x(u),"onWindowResized",function(T){u.debouncedResize&&u.debouncedResize.cancel(),u.debouncedResize=(0,f.default)(function(){return u.resizeWindow(T)},50),u.debouncedResize()}),v(x(u),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,p=!!(u.track&&u.track.node);if(p){var g=X(X({listRef:u.list,trackRef:u.track},u.props),u.state);u.updateState(g,T,function(){u.props.autoplay?u.autoPlay("update"):u.pause("paused")}),u.setState({animating:!1}),clearTimeout(u.animationEndCallback),delete u.animationEndCallback}}),v(x(u),"updateState",function(T,p,g){var S=(0,y.initializedState)(T);T=X(X(X({},T),S),{},{slideIndex:S.currentSlide});var B=(0,y.getTrackLeft)(T);T=X(X({},T),{},{left:B});var H=(0,y.getTrackCSS)(T);(p||n.default.Children.count(u.props.children)!==n.default.Children.count(T.children))&&(S.trackStyle=H),u.setState(S,g)}),v(x(u),"ssrInit",function(){if(u.props.variableWidth){var T=0,p=0,g=[],S=(0,y.getPreClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length})),B=(0,y.getPostClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length}));u.props.children.forEach(function(Je){g.push(Je.props.style.width),T+=Je.props.style.width});for(var H=0;H<S;H++)p+=g[g.length-1-H],T+=g[g.length-1-H];for(var J=0;J<B;J++)T+=g[J];for(var K=0;K<u.state.currentSlide;K++)p+=g[K];var te={width:T+"px",left:-p+"px"};if(u.props.centerMode){var me="".concat(g[u.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(me,") / 2 ) ")}return{trackStyle:te}}var de=n.default.Children.count(u.props.children),Se=X(X(X({},u.props),u.state),{},{slideCount:de}),Ee=(0,y.getPreClones)(Se)+(0,y.getPostClones)(Se)+de,$e=100/u.props.slidesToShow*Ee,_e=100/Ee,be=-_e*((0,y.getPreClones)(Se)+u.state.currentSlide)*$e/100;u.props.centerMode&&(be+=(100-_e*$e/100)/2);var ze={width:$e+"%",left:be+"%"};return{slideWidth:_e+"%",trackStyle:ze}}),v(x(u),"checkImagesLoad",function(){var T=u.list&&u.list.querySelectorAll&&u.list.querySelectorAll(".slick-slide img")||[],p=T.length,g=0;Array.prototype.forEach.call(T,function(S){var B=function(){return++g&&g>=p&&u.onWindowResized()};if(!S.onclick)S.onclick=function(){return S.parentNode.focus()};else{var H=S.onclick;S.onclick=function(J){H(J),S.parentNode.focus()}}S.onload||(u.props.lazyLoad?S.onload=function(){u.adaptHeight(),u.callbackTimers.push(setTimeout(u.onWindowResized,u.props.speed))}:(S.onload=B,S.onerror=function(){B(),u.props.onLazyLoadError&&u.props.onLazyLoadError()}))})}),v(x(u),"progressiveLazyLoad",function(){for(var T=[],p=X(X({},u.props),u.state),g=u.state.currentSlide;g<u.state.slideCount+(0,y.getPostClones)(p);g++)if(u.state.lazyLoadedList.indexOf(g)<0){T.push(g);break}for(var S=u.state.currentSlide-1;S>=-(0,y.getPreClones)(p);S--)if(u.state.lazyLoadedList.indexOf(S)<0){T.push(S);break}T.length>0?(u.setState(function(B){return{lazyLoadedList:B.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T)):u.lazyLoadTimer&&(clearInterval(u.lazyLoadTimer),delete u.lazyLoadTimer)}),v(x(u),"slideHandler",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=u.props,S=g.asNavFor,B=g.beforeChange,H=g.onLazyLoad,J=g.speed,K=g.afterChange,te=u.state.currentSlide,me=(0,y.slideHandler)(X(X(X({index:T},u.props),u.state),{},{trackRef:u.track,useCSS:u.props.useCSS&&!p})),de=me.state,Se=me.nextState;if(de){B&&B(te,de.currentSlide);var Ee=de.lazyLoadedList.filter(function($e){return u.state.lazyLoadedList.indexOf($e)<0});H&&Ee.length>0&&H(Ee),!u.props.waitForAnimate&&u.animationEndCallback&&(clearTimeout(u.animationEndCallback),K&&K(te),delete u.animationEndCallback),u.setState(de,function(){S&&u.asNavForIndex!==T&&(u.asNavForIndex=T,S.innerSlider.slideHandler(T)),Se&&(u.animationEndCallback=setTimeout(function(){var $e=Se.animating,_e=le(Se,["animating"]);u.setState(_e,function(){u.callbackTimers.push(setTimeout(function(){return u.setState({animating:$e})},10)),K&&K(de.currentSlide),delete u.animationEndCallback})},J))})}}),v(x(u),"changeSlide",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=X(X({},u.props),u.state),S=(0,y.changeSlide)(g,T);if(!(S!==0&&!S)&&(p===!0?u.slideHandler(S,p):u.slideHandler(S),u.props.autoplay&&u.autoPlay("update"),u.props.focusOnSelect)){var B=u.list.querySelectorAll(".slick-current");B[0]&&B[0].focus()}}),v(x(u),"clickHandler",function(T){u.clickable===!1&&(T.stopPropagation(),T.preventDefault()),u.clickable=!0}),v(x(u),"keyHandler",function(T){var p=(0,y.keyHandler)(T,u.props.accessibility,u.props.rtl);p!==""&&u.changeSlide({message:p})}),v(x(u),"selectHandler",function(T){u.changeSlide(T)}),v(x(u),"disableBodyScroll",function(){var T=function(g){g=g||window.event,g.preventDefault&&g.preventDefault(),g.returnValue=!1};window.ontouchmove=T}),v(x(u),"enableBodyScroll",function(){window.ontouchmove=null}),v(x(u),"swipeStart",function(T){u.props.verticalSwiping&&u.disableBodyScroll();var p=(0,y.swipeStart)(T,u.props.swipe,u.props.draggable);p!==""&&u.setState(p)}),v(x(u),"swipeMove",function(T){var p=(0,y.swipeMove)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));p&&(p.swiping&&(u.clickable=!1),u.setState(p))}),v(x(u),"swipeEnd",function(T){var p=(0,y.swipeEnd)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));if(p){var g=p.triggerSlideHandler;delete p.triggerSlideHandler,u.setState(p),g!==void 0&&(u.slideHandler(g),u.props.verticalSwiping&&u.enableBodyScroll())}}),v(x(u),"touchEnd",function(T){u.swipeEnd(T),u.clickable=!0}),v(x(u),"slickPrev",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"previous"})},0))}),v(x(u),"slickNext",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"next"})},0))}),v(x(u),"slickGoTo",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"index",index:T,currentSlide:u.state.currentSlide},p)},0))}),v(x(u),"play",function(){var T;if(u.props.rtl)T=u.state.currentSlide-u.props.slidesToScroll;else if((0,y.canGoNext)(X(X({},u.props),u.state)))T=u.state.currentSlide+u.props.slidesToScroll;else return!1;u.slideHandler(T)}),v(x(u),"autoPlay",function(T){u.autoplayTimer&&clearInterval(u.autoplayTimer);var p=u.state.autoplaying;if(T==="update"){if(p==="hovered"||p==="focused"||p==="paused")return}else if(T==="leave"){if(p==="paused"||p==="focused")return}else if(T==="blur"&&(p==="paused"||p==="hovered"))return;u.autoplayTimer=setInterval(u.play,u.props.autoplaySpeed+50),u.setState({autoplaying:"playing"})}),v(x(u),"pause",function(T){u.autoplayTimer&&(clearInterval(u.autoplayTimer),u.autoplayTimer=null);var p=u.state.autoplaying;T==="paused"?u.setState({autoplaying:"paused"}):T==="focused"?(p==="hovered"||p==="playing")&&u.setState({autoplaying:"focused"}):p==="playing"&&u.setState({autoplaying:"hovered"})}),v(x(u),"onDotsOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onDotsLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onTrackOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onTrackLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onSlideFocus",function(){return u.props.autoplay&&u.pause("focused")}),v(x(u),"onSlideBlur",function(){return u.props.autoplay&&u.state.autoplaying==="focused"&&u.autoPlay("blur")}),v(x(u),"render",function(){var T=(0,s.default)("slick-slider",u.props.className,{"slick-vertical":u.props.vertical,"slick-initialized":!0}),p=X(X({},u.props),u.state),g=(0,y.extractObject)(p,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),S=u.props.pauseOnHover;g=X(X({},g),{},{onMouseEnter:S?u.onTrackOver:null,onMouseLeave:S?u.onTrackLeave:null,onMouseOver:S?u.onTrackOver:null,focusOnSelect:u.props.focusOnSelect&&u.clickable?u.selectHandler:null});var B;if(u.props.dots===!0&&u.state.slideCount>=u.props.slidesToShow){var H=(0,y.extractObject)(p,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),J=u.props.pauseOnDotsHover;H=X(X({},H),{},{clickHandler:u.changeSlide,onMouseEnter:J?u.onDotsLeave:null,onMouseOver:J?u.onDotsOver:null,onMouseLeave:J?u.onDotsLeave:null}),B=n.default.createElement(M.Dots,H)}var K,te,me=(0,y.extractObject)(p,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);me.clickHandler=u.changeSlide,u.props.arrows&&(K=n.default.createElement(Y.PrevArrow,me),te=n.default.createElement(Y.NextArrow,me));var de=null;u.props.vertical&&(de={height:u.state.listHeight});var Se=null;u.props.vertical===!1?u.props.centerMode===!0&&(Se={padding:"0px "+u.props.centerPadding}):u.props.centerMode===!0&&(Se={padding:u.props.centerPadding+" 0px"});var Ee=X(X({},de),Se),$e=u.props.touchMove,_e={className:"slick-list",style:Ee,onClick:u.clickHandler,onMouseDown:$e?u.swipeStart:null,onMouseMove:u.state.dragging&&$e?u.swipeMove:null,onMouseUp:$e?u.swipeEnd:null,onMouseLeave:u.state.dragging&&$e?u.swipeEnd:null,onTouchStart:$e?u.swipeStart:null,onTouchMove:u.state.dragging&&$e?u.swipeMove:null,onTouchEnd:$e?u.touchEnd:null,onTouchCancel:u.state.dragging&&$e?u.swipeEnd:null,onKeyDown:u.props.accessibility?u.keyHandler:null},be={className:T,dir:"ltr",style:u.props.style};return u.props.unslick&&(_e={className:"slick-list"},be={className:T,style:u.props.style}),n.default.createElement("div",be,u.props.unslick?"":K,n.default.createElement("div",W({ref:u.listRefHandler},_e),n.default.createElement(b.Track,W({ref:u.trackRefHandler},g),u.props.children)),u.props.unslick?"":te,u.props.unslick?"":B)}),u.list=null,u.track=null,u.state=X(X({},o.default),{},{currentSlide:u.props.initialSlide,targetSlide:u.props.initialSlide?u.props.initialSlide:0,slideCount:n.default.Children.count(u.props.children)}),u.callbackTimers=[],u.clickable=!0,u.debouncedResize=null;var ie=u.ssrInit();return u.state=X(X({},u.state),ie),u}return pe(ee,[{key:"didPropsChange",value:function(u){for(var ie=!1,T=0,p=Object.keys(this.props);T<p.length;T++){var g=p[T];if(!u.hasOwnProperty(g)){ie=!0;break}if(!(N(u[g])==="object"||typeof u[g]=="function"||isNaN(u[g]))&&u[g]!==this.props[g]){ie=!0;break}}return ie||n.default.Children.count(this.props.children)!==n.default.Children.count(u.children)}}]),ee})(n.default.Component),Al}var ru,yh;function Lx(){if(yh)return ru;yh=1;var n=function(o){return o.replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase()}).toLowerCase()};return ru=n,ru}var ou,vh;function Nx(){if(vh)return ou;vh=1;var n=Lx(),o=function(y){var b=/[height|width]$/;return b.test(y)},f=function(y){var b="",M=Object.keys(y);return M.forEach(function(Y,k){var A=y[Y];Y=n(Y),o(Y)&&typeof A=="number"&&(A=A+"px"),A===!0?b+=Y:A===!1?b+="not "+Y:b+="("+Y+": "+A+")",k<M.length-1&&(b+=" and ")}),b},s=function(y){var b="";return typeof y=="string"?y:y instanceof Array?(y.forEach(function(M,Y){b+=f(M),Y<y.length-1&&(b+=", ")}),b):f(y)};return ou=s,ou}var bh;function Ux(){return bh||(bh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=M(bn()),f=Rx(),s=M(Nx()),y=M(xm()),b=Bl();function M(D){return D&&D.__esModule?D:{default:D}}function Y(D){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},Y(D)}function k(){return k=Object.assign?Object.assign.bind():function(D){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var q in v)({}).hasOwnProperty.call(v,q)&&(D[q]=v[q])}return D},k.apply(null,arguments)}function A(D,_){var v=Object.keys(D);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(D);_&&(q=q.filter(function(Z){return Object.getOwnPropertyDescriptor(D,Z).enumerable})),v.push.apply(v,q)}return v}function N(D){for(var _=1;_<arguments.length;_++){var v=arguments[_]!=null?arguments[_]:{};_%2?A(Object(v),!0).forEach(function(q){w(D,q,v[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(v)):A(Object(v)).forEach(function(q){Object.defineProperty(D,q,Object.getOwnPropertyDescriptor(v,q))})}return D}function W(D,_){if(!(D instanceof _))throw new TypeError("Cannot call a class as a function")}function le(D,_){for(var v=0;v<_.length;v++){var q=_[v];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(D,z(q.key),q)}}function ce(D,_,v){return _&&le(D.prototype,_),Object.defineProperty(D,"prototype",{writable:!1}),D}function ae(D,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(_&&_.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),_&&X(D,_)}function X(D,_){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,q){return v.__proto__=q,v},X(D,_)}function he(D){var _=ne();return function(){var v,q=oe(D);if(_){var Z=oe(this).constructor;v=Reflect.construct(q,arguments,Z)}else v=q.apply(this,arguments);return ue(this,v)}}function ue(D,_){if(_&&(Y(_)=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pe(D)}function pe(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function ne(){try{var D=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!D})()}function oe(D){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},oe(D)}function w(D,_,v){return(_=z(_))in D?Object.defineProperty(D,_,{value:v,enumerable:!0,configurable:!0,writable:!0}):D[_]=v,D}function z(D){var _=x(D,"string");return Y(_)=="symbol"?_:_+""}function x(D,_){if(Y(D)!="object"||!D)return D;var v=D[Symbol.toPrimitive];if(v!==void 0){var q=v.call(D,_);if(Y(q)!="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(D)}n.default=(function(D){ae(v,D);var _=he(v);function v(q){var Z;return W(this,v),Z=_.call(this,q),w(pe(Z),"innerSliderRefHandler",function(R){return Z.innerSlider=R}),w(pe(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),w(pe(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),w(pe(Z),"slickGoTo",function(R){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(R,P)}),w(pe(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),w(pe(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return ce(v,[{key:"media",value:function(Z,R){var P=window.matchMedia(Z),ee=function(u){var ie=u.matches;ie&&R()};P.addListener(ee),this._responsiveMediaHandlers.push({mql:P,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var R=this.props.responsive.map(function(ee){return ee.breakpoint});R.sort(function(ee,E){return ee-E}),R.forEach(function(ee,E){var u;E===0?u=(0,s.default)({minWidth:0,maxWidth:ee}):u=(0,s.default)({minWidth:R[E-1]+1,maxWidth:ee}),(0,b.canUseDOM)()&&Z.media(u,function(){Z.setState({breakpoint:ee})})});var P=(0,s.default)({minWidth:R.slice(-1)[0]});(0,b.canUseDOM)()&&this.media(P,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,R,P;this.state.breakpoint?(P=this.props.responsive.filter(function(H){return H.breakpoint===Z.state.breakpoint}),R=P[0].settings==="unslick"?"unslick":N(N(N({},y.default),this.props),P[0].settings)):R=N(N({},y.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(H){return typeof H=="string"?!!H.trim():!!H}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var E=[],u=null,ie=0;ie<ee.length;ie+=R.rows*R.slidesPerRow){for(var T=[],p=ie;p<ie+R.rows*R.slidesPerRow;p+=R.slidesPerRow){for(var g=[],S=p;S<p+R.slidesPerRow&&(R.variableWidth&&ee[S].props.style&&(u=ee[S].props.style.width),!(S>=ee.length));S+=1)g.push(o.default.cloneElement(ee[S],{key:100*ie+10*p+S,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ie+p},g))}R.variableWidth?E.push(o.default.createElement("div",{key:ie,style:{width:u}},T)):E.push(o.default.createElement("div",{key:ie},T))}if(R==="unslick"){var B="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:B},ee)}else E.length<=R.slidesToShow&&(R.unslick=!0);return o.default.createElement(f.InnerSlider,k({style:this.props.style,ref:this.innerSliderRefHandler},(0,b.filterSettings)(R)),E)}}]),v})(o.default.Component)})(tu)),tu}var Sh;function Bx(){return Sh||(Sh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(Ux());function f(s){return s&&s.__esModule?s:{default:s}}n.default=o.default})(eu)),eu}var Gx=Bx();const Hu=zu(Gx),wt="/assets",qx=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${O.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,su=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,Yx=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,Vx=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Xx=m.button`
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
`,Qx=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Zx=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Kx=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Wx=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Px=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Jx=m.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,xh=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,$h=m.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${O.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,wh=m.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Ix=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Fx=m.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${O.motion.iconLift}) scale(${O.motion.scaleHover});
  }
`,e2=m.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,t2=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,n2=m.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,a2=m.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${O.effects.carouselBackground};
  overflow: hidden;
`,i2=m.div`
  position: absolute;
  inset: 0;
  background: ${O.effects.carouselBackdrop};
`,l2=m.div`
  position: relative;
  width: ${O.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${O.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,r2=m(Hu)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${O.sizing.carouselSlidePadding};
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
    opacity: ${O.effects.carouselCardOpacity};
    transform: scale(${O.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${O.motion.scaleActive});
    filter: ${O.effects.carouselDropShadow};
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
      padding: ${O.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${O.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,o2=m.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${O.effects.carouselCardShadow};
  cursor: pointer;
`,s2=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,c2=m.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${O.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,u2=m.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${O.sizing.hairline} solid ${O.effects.glassWhite20};
  background: ${O.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${O.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${O.effects.glassWhite20};
  }
`,zh=({className:n,style:o,onClick:f,direction:s,ariaLabel:y})=>d.jsx(u2,{className:n,style:o,onClick:f,"aria-label":y,children:s==="next"?d.jsx(Cu,{size:18}):d.jsx(fn,{size:18})});m.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`;m.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${O.effects.compositionGradient};
  padding: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.card};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[12]};
  }
`;m.img`
  width: 100%;
  height: auto;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`;const f2=m.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,d2=m.div`
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
`,p2=m.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,g2=m.button`
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
`,h2=[`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${wt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${wt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${wt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${wt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],m2=[`${wt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],y2=({onBack:n})=>{const{t:o}=jt(),f=Oe.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},y=Y=>{f.current&&f.current.slickGoTo(Y)},b=Oe.useMemo(()=>new Date().getFullYear(),[]),M=Oe.useMemo(()=>({centerMode:!0,centerPadding:O.carousel.centerPaddingLg,infinite:!0,slidesToShow:O.carousel.slidesToShowLg,speed:O.carousel.speed,autoplay:!0,autoplaySpeed:O.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(zh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(zh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:O.carousel.breakpointLg,settings:{slidesToShow:O.carousel.slidesToShowMd,centerPadding:O.carousel.centerPaddingMd}},{breakpoint:O.carousel.breakpointSm,settings:{slidesToShow:O.carousel.slidesToShowSm,slidesToScroll:O.carousel.slidesToScrollSm,centerPadding:O.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:O.carousel.breakpointXs,settings:{slidesToShow:O.carousel.slidesToShowSm,slidesToScroll:O.carousel.slidesToScrollSm,centerPadding:O.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(qx,{children:[d.jsx(Yx,{children:d.jsxs(Vx,{children:[d.jsxs(Xx,{onClick:s,"aria-label":o.appIcons.backToPortfolioAria,children:[d.jsx(fn,{size:18}),o.appIcons.backToPortfolio]}),d.jsx(Qx,{children:o.work.categories.brandDesign})]})}),d.jsx(Zx,{children:d.jsxs(su,{children:[d.jsx(Kx,{children:o.appIcons.eyebrow}),d.jsxs(Wx,{children:[o.appIcons.titlePrimary," ",d.jsx("em",{children:o.appIcons.titleEmphasis})]}),d.jsx(Px,{children:o.appIcons.lead})]})}),d.jsx(Jx,{children:d.jsxs(su,{children:[d.jsxs(xh,{children:[d.jsx($h,{}),d.jsx(wh,{children:o.appIcons.appIconsTitle})]}),d.jsx(Ix,{children:h2.map((Y,k)=>d.jsxs(Fx,{children:[d.jsx(e2,{children:d.jsx(t2,{src:Y,alt:o.appIcons.iconLabels[k]})}),d.jsx(n2,{children:o.appIcons.iconLabels[k]})]},Y))})]})}),d.jsxs(a2,{children:[d.jsx(i2,{}),d.jsx(su,{style:{position:"relative",zIndex:1},children:d.jsxs(xh,{children:[d.jsx($h,{$light:!0}),d.jsx(wh,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),d.jsx(l2,{children:d.jsx(r2,{ref:f,...M,children:m2.map((Y,k)=>d.jsxs("div",{onClick:()=>y(k),children:[d.jsx(o2,{className:"carousel-card",children:d.jsx(s2,{src:Y,alt:o.appIcons.splashLabels[k],loading:"lazy"})}),d.jsx(c2,{className:"carousel-caption",children:o.appIcons.splashLabels[k]})]},Y))})})]}),d.jsx(f2,{children:d.jsxs(d2,{children:[d.jsxs(p2,{children:["© ",b," ",vo,". ",o.appIcons.footerRights]}),d.jsxs(g2,{onClick:s,children:[o.appIcons.viewMoreProjects,d.jsx(Cu,{size:16})]})]})})]})},v2=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${O.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,b2=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,S2=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x2=m.button`
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
`,$2=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,w2=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,z2=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,T2=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,j2=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,E2=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,_2=m.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,A2=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,O2=m.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,k2=m.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${O.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,C2=m.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,M2=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,D2=n=>n.includes(" ")?encodeURI(n):n,H2=({onBack:n})=>{const{t:o}=jt(),f=bo.find(y=>y.id===17),s=Oe.useMemo(()=>{const y=(f==null?void 0:f.gallery)??[],b=[],M=new Map;return y.forEach(Y=>{const le=decodeURIComponent(Y.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";M.has(le)?b[M.get(le)].items.push(Y):(M.set(le,b.length),b.push({name:le,items:[Y]}))}),b},[f==null?void 0:f.gallery]);return d.jsxs(v2,{children:[d.jsx(b2,{children:d.jsxs(S2,{children:[d.jsxs(x2,{onClick:n,children:[d.jsx(fn,{size:18}),o.appStoreScreenshots.backToPortfolio]}),d.jsx($2,{children:o.appStoreScreenshots.headerTag})]})}),d.jsxs(z2,{children:[d.jsx(T2,{children:o.appStoreScreenshots.eyebrow}),d.jsx(j2,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&d.jsx(E2,{children:o.appStoreScreenshots.lead})]}),d.jsx(_2,{children:d.jsx(w2,{children:s.map(y=>d.jsxs(A2,{children:[d.jsx(O2,{children:y.name}),d.jsx(k2,{children:y.items.map((b,M)=>d.jsx(C2,{children:d.jsx(M2,{src:D2(b),alt:`${y.name} ${M+1}`,loading:"lazy"})},`${y.name}-${M}`))})]},y.name))})})]})},R2=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,L2=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,N2=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,U2=m.button`
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
`,B2=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,G2=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,q2=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Y2=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,V2=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,X2=m.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,Q2=m.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,Z2=m.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,K2=n=>n.includes(" ")?encodeURI(n):n,W2=({onBack:n})=>{const{t:o}=jt();return d.jsxs(R2,{children:[d.jsx(L2,{children:d.jsxs(N2,{children:[d.jsxs(U2,{onClick:n,children:[d.jsx(fn,{size:18}),o.namelaka.backToPortfolio]}),d.jsx(B2,{children:o.namelaka.headerTag})]})}),d.jsxs(q2,{children:[d.jsx(Y2,{children:o.namelaka.eyebrow}),d.jsx(V2,{children:o.namelaka.title})]}),d.jsx(X2,{children:d.jsx(G2,{children:d.jsx(Q2,{children:d.jsx(Z2,{src:K2("/assets/images/brand/Namelaka icons and illustration/Namelaka.png"),alt:o.namelaka.title})})})})]})},Em="/assets",P2=`${Em}/video/Mindzy – Brain Training`,J2=`${Em}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,I2=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${O.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Th=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,F2=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,e$=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,t$=m.button`
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
`,n$=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,a$=m.section`
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
`,i$=m.div`
  position: relative;
  z-index: ${O.zIndex.foreground};
`,l$=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,r$=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,o$=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,s$=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,c$=m.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${O.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,u$=m.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,f$=m.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${O.effects.carouselBackground};
  overflow: hidden;
`,d$=m.div`
  position: absolute;
  inset: 0;
  background: ${O.effects.carouselBackdrop};
`,p$=m.div`
  position: relative;
  width: ${O.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${O.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,g$=m(Hu)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${O.sizing.carouselSlidePadding};
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
    opacity: ${O.effects.carouselCardOpacity};
    transform: scale(${O.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${O.motion.scaleActive});
    filter: ${O.effects.carouselDropShadow};
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
      padding: ${O.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${O.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,h$=m.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
  cursor: pointer;
`,m$=m.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0 round 16px);
`,y$=m.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${O.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,v$=m.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${O.sizing.hairline} solid ${O.effects.glassWhite20};
  background: ${O.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${O.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${O.effects.glassWhite20};
  }
`,jh=({className:n,style:o,onClick:f,direction:s,ariaLabel:y})=>d.jsx(v$,{className:n,style:o,onClick:f,"aria-label":y,children:s==="next"?d.jsx(Cu,{size:18}):d.jsx(fn,{size:18})}),Eh=n=>n.includes(" ")?encodeURI(n):n,b$=["Catch the bug.MP4","Color count.MP4","Linking Pairs.mov","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],S$=({onBack:n})=>{const{t:o}=jt(),f=Oe.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},y=Y=>{f.current&&f.current.slickGoTo(Y)},b=Oe.useMemo(()=>b$.map(Y=>`${P2}/${Y}`),[]),M=Oe.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:O.carousel.speed,autoplay:!0,autoplaySpeed:O.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(jh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(jh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:O.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:O.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:O.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:O.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:O.carousel.slidesToScrollSm,centerPadding:O.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(I2,{children:[d.jsx(F2,{children:d.jsxs(e$,{children:[d.jsxs(t$,{onClick:s,children:[d.jsx(fn,{size:18}),o.mindzy.backToPortfolio]}),d.jsx(n$,{children:o.work.categories.uiuxDesign})]})}),d.jsx(a$,{$coverUrl:Eh(J2),children:d.jsx(Th,{children:d.jsxs(i$,{children:[d.jsx(l$,{children:o.mindzy.eyebrow}),d.jsx(r$,{children:o.mindzy.title}),o.mindzy.lead&&d.jsx(o$,{children:o.mindzy.lead})]})})}),d.jsxs(f$,{children:[d.jsx(d$,{}),d.jsx(Th,{children:d.jsxs(s$,{children:[d.jsx(c$,{}),d.jsx(u$,{children:o.mindzy.videoTitle})]})}),d.jsx(p$,{children:d.jsx(g$,{ref:f,...M,children:b.map((Y,k)=>{var A;return d.jsxs("div",{onClick:()=>y(k),children:[d.jsx(h$,{className:"carousel-card",children:d.jsx(m$,{src:Eh(Y),muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"metadata"})}),d.jsx(y$,{className:"carousel-caption",children:(A=Y.split("/").pop())==null?void 0:A.replace(/\.(MP4|mov)$/i,"")})]},Y)})})})]})]})},_m="/assets",_h=`${_m}/video/Marketing video`,x$=`${_m}/images/brand/Full_Composition_Marketing_video.png`,$$=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${O.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,w$=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: 0 ${({theme:n})=>n.spacing[6]};
`,z$=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,T$=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,j$=m.button`
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
`,E$=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,_$=m.section`
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
`,A$=m.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`,O$=m.div`
  position: relative;
  z-index: 1;
`,k$=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,C$=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,M$=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,D$=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  margin-top: ${({theme:n})=>n.spacing[12]};
`,H$=m.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${O.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,R$=m.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,L$=m.div`
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
`,N$=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,U$=m.div`
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
`,B$=m.div`
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
`,Ah=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;m.p`
  margin-top: ${({theme:n})=>n.spacing[3]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`;m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto ${({theme:n})=>n.spacing[12]};
  }
`;m.div`
  position: relative;
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  overflow: hidden;
  background: linear-gradient(135deg, ${({theme:n})=>n.colors.brand.purple}20, ${({theme:n})=>n.colors.brand.blue}20);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
`;m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const cu=n=>encodeURI(n),G$=["1080x1920.mp4","App Store.mp4","Concept_2_1080x1920.mp4","video5_1080x1920.mp4","Video_1080x1920_android.mp4","valentine_stickers.mp4"],q$=["Comp 1.mp4","Concept 1 17-09_1.mp4","main video_2.mp4","video.mp4","Google play.mp4","Video (1).mp4"],Y$=({onBack:n})=>{const{t:o}=jt(),f=()=>{if(n){n();return}window.location.hash="#work"};return d.jsxs($$,{children:[d.jsx(z$,{children:d.jsxs(T$,{children:[d.jsxs(j$,{onClick:f,children:[d.jsx(fn,{size:18}),o.marketingVideo.backToPortfolio]}),d.jsx(E$,{children:o.marketingVideo.headerTag})]})}),d.jsxs(_$,{style:{"--hero-cover-url":`url(${cu(x$)})`},children:[d.jsx(A$,{}),d.jsxs(O$,{children:[d.jsx(k$,{children:o.marketingVideo.eyebrow}),d.jsx(C$,{children:o.marketingVideo.title}),d.jsx(M$,{children:o.marketingVideo.lead})]})]}),d.jsxs(w$,{children:[d.jsxs(D$,{children:[d.jsx(H$,{}),d.jsx(R$,{children:o.marketingVideo.allVideosTitle})]}),d.jsx(L$,{children:G$.map(s=>d.jsx(B$,{children:d.jsx(Ah,{src:cu(`${_h}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))}),d.jsx(N$,{children:q$.map(s=>d.jsx(U$,{children:d.jsx(Ah,{src:cu(`${_h}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))})]})]})},V$="/assets",Ml=`${V$}/images/brand/Elemental Quest game`,X$=`${Ml}/logo Elemental Quest png.png`,Q$=[`${Ml}/Map_1.png`,`${Ml}/Map_2.png`,`${Ml}/Map_3.png`,`${Ml}/Map_4.png`],Z$=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,K$=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: ${O.effects.glassWhite70};
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid ${O.effects.overlayWhite40};
`,W$=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,P$=m.button`
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
`,J$=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,I$=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,F$=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,ew=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,tw=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,nw=m.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,aw=m.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,iw=m.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,lw=m.div`
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
`,rw=m.div`
  overflow: hidden;
`,ow=m.img`
  width: 100%;
  height: auto;
  display: block;
`,Oh=n=>n.includes(" ")?encodeURI(n):n,sw=({onBack:n})=>{const{t:o}=jt();return d.jsxs(Z$,{children:[d.jsx(K$,{children:d.jsxs(W$,{children:[d.jsxs(P$,{onClick:n,children:[d.jsx(fn,{size:18}),o.elementalQuest.backToPortfolio]}),d.jsx(J$,{children:o.elementalQuest.headerTag})]})}),d.jsxs(I$,{children:[d.jsx(F$,{children:o.elementalQuest.eyebrow}),d.jsx(ew,{children:o.elementalQuest.title}),d.jsx(tw,{children:o.elementalQuest.lead})]}),d.jsxs(nw,{children:[d.jsx(aw,{children:d.jsx(iw,{src:Oh(X$),alt:o.elementalQuest.logoAlt})}),d.jsx(lw,{children:Q$.map((f,s)=>d.jsx(rw,{children:d.jsx(ow,{src:Oh(f),alt:`${o.elementalQuest.mapAlt} ${s+1}`})},s))})]})]})},cw="/assets",fo=`${cw}/images/brand/Combat Planes`,uw=`${fo}/logo_Combat Planes.png`,fw=[`${fo}/Maps.png`,`${fo}/Planes skins.png`,`${fo}/Characters.png`],dw=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: #2C307A;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,pw=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: rgba(44, 48, 122, 0.85);
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,gw=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,hw=m.button`
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
`,mw=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,yw=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,vw=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,bw=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Sw=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,xw=m.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,$w=m.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,ww=m.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,zw=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,Tw=m.div`
  overflow: hidden;
`,jw=m.img`
  width: 100%;
  height: auto;
  display: block;
`,kh=n=>n.includes(" ")?encodeURI(n):n,Ew=({onBack:n})=>{const{t:o}=jt();return d.jsxs(dw,{children:[d.jsx(pw,{children:d.jsxs(gw,{children:[d.jsxs(hw,{onClick:n,children:[d.jsx(fn,{size:18}),o.combatPlanes.backToPortfolio]}),d.jsx(mw,{children:o.combatPlanes.headerTag})]})}),d.jsxs(yw,{children:[d.jsx(vw,{children:o.combatPlanes.eyebrow}),d.jsx(bw,{children:o.combatPlanes.title}),d.jsx(Sw,{children:o.combatPlanes.lead})]}),d.jsxs(xw,{children:[d.jsx($w,{children:d.jsx(ww,{src:kh(uw),alt:o.combatPlanes.logoAlt})}),d.jsx(zw,{children:fw.map((f,s)=>d.jsx(Tw,{children:d.jsx(jw,{src:kh(f),alt:`${o.combatPlanes.galleryAlt} ${s+1}`})},s))})]})]})},Am="/assets",Nl=`${Am}/images/brand/Fatty Fish`,_w=`${Nl}/Logo Fatty Fish.png`,Aw=`${Am}/video/Fatty Fish/Fatty Fish video.mp4`,Ow=[`${Nl}/Character.png`,`${Nl}/Objects.png`],kw=[`${Nl}/IMG_1.png`,`${Nl}/IMG_2.png`],Cw=m.section`
  min-height: ${O.layout.fullViewportHeight};
  background: #4F22D1;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Mw=m.header`
  position: sticky;
  top: 0;
  z-index: ${O.zIndex.stickyHeader};
  background: rgba(79, 34, 209, 0.85);
  backdrop-filter: blur(${O.effects.blurStrong});
  border-bottom: ${O.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,Dw=m.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Hw=m.button`
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
`,Rw=m.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,Lw=m.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Nw=m.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Uw=m.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Bw=m.p`
  max-width: ${O.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,Gw=m.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,qw=m.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,Yw=m.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,Vw=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,Xw=m.div`
  overflow: hidden;
`,Qw=m.img`
  width: 100%;
  height: auto;
  display: block;
`,Zw=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[6]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`,Kw=m.img`
  width: 100%;
  height: auto;
  display: block;
`,Ww=m.div`
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[8]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    max-width: 80%;
  }
`,Pw=m.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,lo=n=>n.includes(" ")?encodeURI(n):n,Jw=({onBack:n})=>{const{t:o}=jt();return d.jsxs(Cw,{children:[d.jsx(Mw,{children:d.jsxs(Dw,{children:[d.jsxs(Hw,{onClick:n,children:[d.jsx(fn,{size:18}),o.fattyFish.backToPortfolio]}),d.jsx(Rw,{children:o.fattyFish.headerTag})]})}),d.jsxs(Lw,{children:[d.jsx(Nw,{children:o.fattyFish.eyebrow}),d.jsx(Uw,{children:o.fattyFish.title}),d.jsx(Bw,{children:o.fattyFish.lead})]}),d.jsxs(Gw,{children:[d.jsx(qw,{children:d.jsx(Yw,{src:lo(_w),alt:o.fattyFish.logoAlt})}),d.jsx(Vw,{children:Ow.map((f,s)=>d.jsx(Xw,{children:d.jsx(Qw,{src:lo(f),alt:`${o.fattyFish.galleryAlt} ${s+1}`})},s))}),d.jsx(Zw,{children:kw.map((f,s)=>d.jsx(Kw,{src:lo(f),alt:`${o.fattyFish.galleryAlt} screenshot ${s+1}`},s))}),d.jsx(Ww,{children:d.jsx(Pw,{src:lo(Aw),autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]})]})},Iw=m.div`
  padding: 28px 0 56px;
  display: flex;
  justify-content: center;
`,Fw=m.img`
  display: block;
  width: 100%;
  max-width: 480px;
  height: auto;
`,e5=m.div`
  max-width: 480px;
  width: 100%;
  box-sizing: border-box;
`,t5=m.div`
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
`,n5=()=>{const n={infinite:!0,speed:600,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"0px",adaptiveHeight:!0,responsive:[{breakpoint:900,settings:{slidesToShow:1,centerPadding:"0px"}},{breakpoint:640,settings:{slidesToShow:1,centerPadding:"0px"}}],autoplay:!0,autoplaySpeed:3500,arrows:!1},o="/assets/images/brand/Lending Harry Potter vs Darth_Vader",f=[`${o}/Screen_1.png`,`${o}/Screen_2.png`,`${o}/Screen_3.png`];return d.jsx(Iw,{"aria-label":"Harry Potter vs Vader carousel",children:d.jsx(t5,{children:d.jsx(Hu,{...n,children:f.map((s,y)=>d.jsx("div",{children:d.jsx(e5,{children:d.jsx(Fw,{src:s,alt:`Slide ${y+1}`})})},y))})})})},Bn="/assets/images/brand/Lending Harry Potter vs Darth_Vader",Om=`${Bn}/Back_Hogwarts.png?v=${new Date().getTime()}`,km=`${Bn}/Back_plane.png`,a5=`${Bn}/Darth_Vader_full height.png`,i5=`${Bn}/Darth_Vader_part_2.png`,l5=`${Bn}/Harry_Potter_full_height.png`,r5=`${Bn}/Harry_Potter_part_2.png`,o5=`${Bn}/Video Hero.mp4`,s5=`${Bn}/Harry Potter's wand.png`,c5=`${Bn}/Harry Potter's wand_light.png`,u5=Xt`
  from { opacity: 0; transform: translateY(50px) }
  to   { opacity: 1; transform: translateY(0) }
`,Cm=Xt`
  from { opacity: 0 }
  to   { opacity: 1 }
`;Xt`
  from { opacity: 0; transform: translateX(-80px) }
  to   { opacity: 1; transform: translateX(0) }
`;Xt`
  from { opacity: 0; transform: translateX(80px) }
  to   { opacity: 1; transform: translateX(0) }
`;const f5=Xt`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-12px) }
`,d5=Xt`
  0%, 100% { opacity: 0.5; filter: blur(4px) }
  50%      { opacity: 1;   filter: blur(8px) }
`,p5=Xt`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0 }
  10%  { opacity: 1 }
  90%  { opacity: 1 }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0 }
`,Oo="#1a2238",g5=m.div`
  min-height: ${O.layout.fullViewportHeight};
  background: ${Oo};
  color: #fff;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`,h5=m.button`
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.35); backdrop-filter: blur(14px);
  padding: 10px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,.7); cursor: pointer;
  transition: all .3s;
  &:hover { background: rgba(0,0,0,.55); color: #fff }
`,m5=m.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px; height: 72px;
  background: rgba(26,34,56,.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,.08);
  @media(max-width: 900px) {
    padding: 0 16px;
  }
  @media(max-width: 768px) {
    padding: 0 8px;
  }
`;m.img`
  height: 28px; width: auto; opacity: 1;
  @media(max-width: 768px) {
    margin: 12px 0 12px 0;
    display: block;
  }
`;const y5=m.div`
  display: flex; gap: 36px;
  @media(max-width: 900px) {
    gap: 18px;
  }
  @media(max-width: 768px) {
    display: none;
  }
`,Ti=m.span`
  font-family: 'Gideon Roman', serif;
  font-size: 16px; cursor: pointer;
  color: ${n=>n.$active?"#fff":"rgba(255,255,255,.6)"};
  text-decoration: none;
  position: relative;
  border-radius: 8px;
  transition: color .2s, box-shadow .2s;
  outline: none;
  &:hover, &:focus {
    color: #ff2222;
    outline: none;
  }
`,Ch=m.button`
  padding: 12px 28px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; box-shadow: 0 4px 28px rgba(120,20,20,.5) }
  @media(max-width: 768px) {
    display: none;
  }
`,v5=m.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  z-index: 300;
  @media(max-width: 768px) {
    display: block;
  }
`,b5=m.div`
  display: none;
  @media(max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 299;
    animation: ${Cm} 0.2s;
  }
`,S5=m.div`
  display: none;
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; right: 0;
    width: 80vw; max-width: 320px; height: 100vh;
    background: rgba(26,34,56,0.98);
    box-shadow: -2px 0 24px 0 rgba(0,0,0,0.18);
    z-index: 300;
    padding: 32px 24px 24px 24px;
    animation: ${Cm} 0.2s;
  }
`,x5=m.button`
  background: none;
  border: none;
  color: #fff;
  position: absolute;
  top: 18px; right: 18px;
  font-size: 28px;
  cursor: pointer;
`,$5=m.section`
  position: relative; width: 100%; height: 100vh;
  min-height: 640px; overflow: hidden;
  margin-top: 72px;
  @media(max-width:768px){ margin-top: 60px }
`,w5=m.video`
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover; z-index: 0;
`,z5=m.div`
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(
    to top,
    ${Oo} 0%,
    rgba(26,34,56,.6) 30%,
    rgba(26,34,56,.15) 60%,
    rgba(26,34,56,.05) 100%
  );
`;m.div`
    display: none;
`;const T5=m.div`
  position: absolute; bottom: 0; left: 0; z-index: 3;
  padding: 0 48px 88px;
  animation: ${u5} 1s ease-out .6s both;
  @media(max-width:768px){ padding: 0 24px 56px }
`,j5=m.div`
  font-family: 'Katibeh', cursive; font-size: 64px;
  line-height: 1; color: rgba(255,255,255,.9); margin-bottom: -10px;
  @media(max-width:768px){ font-size: 40px; margin-bottom: -6px }
`,E5=m.div`
  display: flex; align-items: baseline; gap: 14px;
`,_5=m.h1`
  font-family: 'Katibeh', cursive; font-size: 164px;
  font-weight: 400; line-height: .9; color: #fff; margin: 0;
  @media(max-width:1024px){ font-size: 120px }
  @media(max-width:768px) { font-size: 80px  }
  @media(max-width:480px) { font-size: 56px  }
`,A5=m.span`
  font-family: 'Katibeh', cursive; font-size: 64px;
  color: rgba(255,255,255,.8);
  @media(max-width:768px){ font-size: 40px }
`,O5=m.div`
  display: flex; gap: 16px;
  /* lift buttons up toward the heading without moving the heading itself */
  margin-top: -40px;
  @media(max-width:768px){ margin-top: -20px }
  @media(max-width:480px){ margin-top: -12px }
`,k5=m.button`
  padding: 14px 38px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(120,20,20,.5) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`,C5=m.button`
  padding: 14px 38px;
  border: 1px solid rgba(255,255,255,.22); border-radius: 999px;
  background: rgba(255,255,255,.04); color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500;
  cursor: pointer; transition: all .3s;
  &:hover { background: rgba(255,255,255,.1);
    border-color: rgba(255,255,255,.4) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`,Mh=m.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 80px 48px;
  overflow: hidden;
  flex-direction: ${n=>n.$reverse?"row-reverse":"row"};
  background: ${Oo};
  @media(max-width:900px){
    flex-direction: column; padding: 60px 24px; min-height: auto;
  }
  &.harry-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: url(${Om}) left center / contain no-repeat;
    opacity: 0.32;
    pointer-events: none;
  }
  &.vader-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: url(${km}) right center / contain no-repeat;
    opacity: 0.18;
    pointer-events: none;
  }
`;m.div`
  position: absolute;
  ${n=>n.$side}: 0; top: 0;
  width: 55%; height: 100%;
  opacity: .12; pointer-events: none;
  background: url(${n=>n.$src}) center / cover no-repeat;
  mask-image: linear-gradient(to ${n=>n.$side==="left"?"right":"left"}, black 30%, transparent);
  -webkit-mask-image: linear-gradient(to ${n=>n.$side==="left"?"right":"left"}, black 30%, transparent);
`;const Dh=m.div`
  flex: 0 0 45%; display: flex;
  justify-content: center; align-items: flex-end;
  z-index: 2;
  opacity: ${n=>n.$visible?1:0};
  transform: translateY(${n=>n.$visible?0:"50px"});
  transition: opacity .8s ease-out, transform .8s ease-out;
  position: relative;
  img {
    max-height: 85vh; width: auto; max-width: 100%;
    object-fit: contain;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,.4));
    animation: ${f5} 5s ease-in-out infinite;
    transition: filter .3s, transform .3s;
  }
  &:hover img {
    transform: scale(1.05);
    filter:
      drop-shadow(0 0 0 ${n=>n.$highlight||"#fff"})
      drop-shadow(0 0 12px ${n=>n.$highlight||"#fff"})
      drop-shadow(0 0 24px ${n=>n.$highlight||"#fff"});
  }
  .candles {
    position: absolute;
    left: 10%; bottom: 12%;
    display: flex; gap: 12px;
    z-index: 2;
  }
  @media(max-width:900px){
    flex: none; margin-bottom: 32px;
    img { max-height: 50vh }
  }
`,Hh=m.div`
  flex: 1; z-index: 1;
  padding: 0 48px;
  opacity: ${n=>n.$visible?1:0};
  transform: translateX(${n=>n.$visible?0:"40px"});
  transition: opacity .8s ease-out .2s, transform .8s ease-out .2s;
  @media(max-width:900px){ padding: 0; text-align: center;
    transform: translateX(0) translateY(${n=>n.$visible?0:"30px"}) }
`,Rh=m.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400; margin: 0 0 20px;
  color: #fff;
`,M5=m.img`
  display: block;
  margin: 0 0 40px 0; /* move left by removing auto left margin */
  width: 320px;
  max-width: 100%;
  height: auto;
  transition: filter 0.4s, box-shadow 0.4s;
  cursor: pointer;
  @media(max-width:900px){ width: 180px; margin-bottom: 24px; }
  @media(max-width:768px){ display: none !important; }
`,D5=m.div`
  display: block;
  text-align: center;
  margin: 0 auto 32px auto;
  position: relative;
  width: 100%;
`,Lh=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px; line-height: 1.8;
  color: rgba(255,255,255,.6); max-width: 480px;
  @media(max-width:900px){ margin: 0 auto }
`;m.div`
  width: 60px; height: 3px; border-radius: 2px;
  margin-bottom: 24px;
  background: ${n=>n.$color};
  box-shadow: 0 0 12px ${n=>n.$color}, 0 0 24px ${n=>n.$color}44;
  animation: ${d5} 3s ease-in-out infinite;
  @media(max-width:900px){ margin: 0 auto 24px }
`;const Nh=m.div`
  position: absolute;
  left: ${n=>n.$x}%;
  bottom: -10px;
  width: ${n=>n.$size}px; height: ${n=>n.$size}px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  animation: ${p5} ${()=>8+Math.random()*6}s linear infinite;
  animation-delay: ${n=>n.$delay}s;
`,H5=m.footer`
  position: relative; background: ${Oo};
  padding: 0 48px 36px; overflow: hidden;
  @media(max-width:768px){ padding: 0 20px 28px }
`,R5=m.div`
  width: 100%; height: 1px;
  background: rgba(255,255,255,.12);
  margin-bottom: 48px;
`,L5=m.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  flex-wrap: wrap; gap: 40px;
  max-width: 1100px; margin: 0 auto;
  @media(max-width:640px){ gap: 28px }
`,N5=m.div`
  max-width: 200px; flex-shrink: 0;
`,U5=m.h3`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400;
  color: #fff; margin: 0 0 4px;
  letter-spacing: 3px;
`,B5=m.p`
  font-size: 14px; color: rgba(255,255,255,.35);
  margin: 0 0 20px;
`,G5=m.div`
  display: flex; gap: 12px;
`,uu=m.a`
  width: 34px; height: 34px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.18);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.5); transition: all .2s;
  text-decoration: none;
  &:hover { border-color: rgba(255,255,255,.4); color: #fff }
  svg { width: 15px; height: 15px }
`,fu=m.div`
  min-width: 120px;
`,du=m.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px; font-weight: 600;
  color: #fff; margin: 0 0 16px;
`,yn=m.a`
  display: block; font-size: 14px;
  color: rgba(255,255,255,.4); text-decoration: none;
  margin-bottom: 12px; cursor: pointer;
  transition: color .2s;
  &:hover { color: rgba(255,255,255,.8) }
`,q5=m.div`
  position: absolute; left: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom left }
  @media(max-width:768px){ height: 200px }
`,Y5=m.div`
  position: absolute; right: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom right }
  @media(max-width:768px){ height: 200px }
`,V5=m.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  max-width: 1100px; margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.06);
  font-size: 12px; color: rgba(255,255,255,.2);
  @media(max-width:640px){ flex-direction: column; gap: 6px; text-align: center }
`,Uh=(n=.2)=>{const o=Oe.useRef(null),[f,s]=Oe.useState(!1);return Oe.useEffect(()=>{const y=new IntersectionObserver(([b])=>{b.isIntersecting&&s(!0)},{threshold:n});return o.current&&y.observe(o.current),()=>y.disconnect()},[n]),{ref:o,visible:f}},X5=({onBack:n})=>{const[o,f]=Oe.useState(null),[s,y]=Oe.useState(!1),[b,M]=Oe.useState(!1),[Y,k]=Oe.useState(!1),{t:A}=jt(),N=A.landingHpVsVader,W=Uh(.15),le=Uh(.15),ce=Array.from({length:12},(ae,X)=>({x:Math.random()*100,delay:Math.random()*8,size:2+Math.random()*3,key:X}));return d.jsxs(g5,{children:[d.jsxs(m5,{children:[d.jsxs(h5,{onClick:n,children:[d.jsx(fn,{size:16}),N.backToPortfolio]}),d.jsxs(y5,{children:[d.jsx(Ti,{$active:!0,children:N.navHome}),d.jsx(Ti,{children:N.navGame}),d.jsx(Ti,{children:N.navContact})]}),d.jsx(Ch,{children:N.playNow}),d.jsx(v5,{"aria-label":"Open menu",onClick:()=>k(!0),children:d.jsx(dm,{size:28})}),Y&&d.jsxs(d.Fragment,{children:[d.jsx(b5,{onClick:()=>k(!1)}),d.jsxs(S5,{children:[d.jsx(x5,{"aria-label":"Close menu",onClick:()=>k(!1),children:d.jsx(Mu,{size:28})}),d.jsx(Ti,{style:{margin:"32px 0 0 0",fontSize:20},$active:!0,children:N.navHome}),d.jsx(Ti,{style:{margin:"18px 0 0 0",fontSize:20},children:N.navGame}),d.jsx(Ti,{style:{margin:"18px 0 0 0",fontSize:20},children:N.navContact}),d.jsx(Ch,{style:{display:"block",margin:"32px 0 0 0",width:"100%"},children:N.playNow})]})]})]}),d.jsxs($5,{children:[d.jsx(w5,{src:o5,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),d.jsx(z5,{}),d.jsxs(T5,{children:[d.jsx(j5,{children:N.enterThe}),d.jsxs(E5,{children:[d.jsx(_5,{children:N.gameWorld}),d.jsx(A5,{children:"WORLD"})]}),d.jsxs(O5,{children:[d.jsx(k5,{onClick:()=>f("harry"),children:N.playNow}),d.jsx(C5,{onClick:()=>f("vader"),children:N.characters})]})]})]}),d.jsxs(Mh,{ref:W.ref,style:{position:"relative",overflow:"visible"},children:[d.jsx("img",{src:Om,alt:"Hogwarts Castle",style:{position:"absolute",right:0,bottom:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"right bottom",zIndex:1,opacity:.48,pointerEvents:"none"}}),ce.map(ae=>d.jsx(Nh,{$x:ae.x,$delay:ae.delay,$size:ae.size},ae.key)),d.jsxs(Hh,{$visible:W.visible,children:[d.jsx(D5,{children:d.jsx(M5,{src:s?c5:s5,alt:"Harry Potter's wand",onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{transition:"filter 0.4s, box-shadow 0.4s"}})}),d.jsx(Rh,{children:N.harryTitle}),d.jsxs(Lh,{children:[N.harryDesc," ",N.harryWeapon??""]})]}),d.jsx(Dh,{$visible:W.visible,$highlight:"#f5c542",children:d.jsx("img",{src:l5,alt:"Harry Potter"})})]}),d.jsxs(Mh,{$reverse:!0,ref:le.ref,style:{position:"relative",overflow:"visible",marginTop:"-100px"},children:[d.jsx("img",{src:km,alt:"Plane Background",style:{position:"absolute",left:0,top:0,width:"65%",height:"100%",objectFit:"cover",zIndex:0,opacity:.48,pointerEvents:"none"}}),ce.map(ae=>d.jsx(Nh,{$x:ae.x,$delay:ae.delay,$size:ae.size},`v${ae.key}`)),d.jsxs(Hh,{$visible:le.visible,children:[d.jsxs("div",{className:"vader-lightsaber",onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),style:{position:"relative",display:"block",margin:"0 0 12px auto",width:260,transform:"translateX(-35%) translateY(-5%)",cursor:"pointer"},children:[d.jsx("img",{src:"/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber.png",alt:"Darth Vader lightsaber",style:{width:"100%",display:"block",transition:"opacity .35s ease",opacity:b?0:1},className:"vader-lightsaber-img"}),d.jsx("img",{src:"/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber_light.png",alt:"Darth Vader lightsaber (light)",style:{position:"absolute",top:0,left:0,width:"100%",transition:"opacity .35s ease",opacity:b?1:0},className:"vader-lightsaber-img"})]}),d.jsx(Rh,{style:{marginLeft:32,marginBottom:20,display:"block"},children:N.vaderTitle}),d.jsxs(Lh,{style:{marginLeft:32},children:[N.vaderDesc," ",N.vaderWeapon??""]})]}),d.jsx(Dh,{$visible:le.visible,$highlight:"#ff2020",children:d.jsx("img",{src:a5,alt:"Darth Vader"})})]}),d.jsx("style",{children:`
        @media (max-width: 768px) {
          .vader-lightsaber, .vader-lightsaber-img { display: none !important; }
        }
      `}),d.jsx(n5,{}),d.jsxs(H5,{children:[d.jsx(R5,{}),d.jsx(q5,{children:d.jsx("img",{src:r5,alt:""})}),d.jsx(Y5,{children:d.jsx("img",{src:i5,alt:""})}),d.jsxs(L5,{children:[d.jsxs(N5,{children:[d.jsx(U5,{children:N.footerTitle}),d.jsx(B5,{children:N.footerSubtitle}),d.jsxs(G5,{children:[d.jsx(uu,{href:"#","aria-label":"Instagram",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5"})]})}),d.jsx(uu,{href:"#","aria-label":"LinkedIn",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),d.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),d.jsx(uu,{href:"#","aria-label":"X",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),d.jsxs(fu,{children:[d.jsx(du,{children:N.features}),d.jsx(yn,{href:"#",children:N.coreFeatures}),d.jsx(yn,{href:"#",children:N.proExperience}),d.jsx(yn,{href:"#",children:N.integrations})]}),d.jsxs(fu,{children:[d.jsx(du,{children:N.learnMore}),d.jsx(yn,{href:"#",children:N.blog}),d.jsx(yn,{href:"#",children:N.caseStudies}),d.jsx(yn,{href:"#",children:N.customerStories}),d.jsx(yn,{href:"#",children:N.bestPractices})]}),d.jsxs(fu,{children:[d.jsx(du,{children:N.support}),d.jsx(yn,{href:"#",children:N.contact}),d.jsx(yn,{href:"#",children:N.supportLink}),d.jsx(yn,{href:"#",children:N.legal})]})]}),d.jsxs(V5,{children:[d.jsx("span",{children:"© 2026 Game World. All rights reserved."}),d.jsx("span",{children:"Privacy Policy · Terms of Service"})]})]})]})},Q5=m.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${O.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${O.zIndex.progress};
  transition: width 0.1s ease;
`,Z5=()=>{const[n,o]=Oe.useState(0);return Oe.useEffect(()=>{const f=()=>{const s=document.body.scrollTop||document.documentElement.scrollTop,y=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=y>0?s/y*100:0;o(b)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),d.jsx(Q5,{$width:n})},K5=Xt`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,W5=m.div`
  min-height: ${O.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,P5=m.div`
  position: fixed;
  inset: 0;
  z-index: ${O.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,pu=m.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${O.effects.blurBlob});
  opacity: ${O.effects.blobOpacity};
  animation: ${K5} 3s ease-in-out infinite;

  ${({$position:n})=>n==="top-left"&&`
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${O.effects.blobBlue};
    `}

  ${({$position:n})=>n==="top-right"&&`
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${O.effects.blobPurple};
      animation: none;
    `}

  ${({$position:n})=>n==="bottom-left"&&`
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${O.effects.blobPink};
      animation: none;
    `}
`,J5=m.div`
  position: relative;
  z-index: ${O.zIndex.foreground};
`,I5=m.div`
  position: fixed;
  right: ${({theme:n})=>n.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${O.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[1]};
  padding: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${O.effects.glassWhite80};
  backdrop-filter: blur(${O.effects.blurGlass});
  box-shadow: ${({theme:n})=>n.shadows.md};
  border: ${O.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Bh=m.button`
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
`,F5=()=>{const{lang:n,setLang:o,t:f}=jt();return d.jsxs(I5,{children:[d.jsx(Bh,{$active:n==="en",onClick:()=>o("en"),title:f.languageSwitch.enTitle,children:f.languageSwitch.enShort}),d.jsx(Bh,{$active:n==="uk",onClick:()=>o("uk"),title:f.languageSwitch.ukTitle,children:f.languageSwitch.ukShort})]})};function ez(){const[n,o]=Oe.useState(Re.PORTFOLIO),[f,s]=Oe.useState(nn.HERO),y="app-icons",b="app-store-screenshots",M="namelaka",Y="mindzy",k="marketing-video",A="elemental-quest",N="combat-planes",W="fatty-fish",le="landing-hp-vs-vader";Oe.useEffect(()=>{const X=()=>{if(!window.location.hash)return;const he=window.location.hash.replace("#","");if(he===y){o(Re.APP_ICONS);return}if(he===b){o(Re.APP_STORE_SCREENSHOTS);return}if(he===M){o(Re.NAMELAKA);return}if(he===Y){o(Re.MINDZY);return}if(he===k){o(Re.MARKETING_VIDEO);return}if(he===A){o(Re.ELEMENTAL_QUEST);return}if(he===N){o(Re.COMBAT_PLANES);return}if(he===W){o(Re.FATTY_FISH);return}if(he===le){o(Re.LANDING_HP_VS_VADER);return}const ue=he,pe=document.getElementById(ue);pe&&(o(Re.PORTFOLIO),s(ue),pe.scrollIntoView({behavior:"smooth",block:"start"}))};return X(),window.addEventListener("hashchange",X),()=>window.removeEventListener("hashchange",X)},[]),Oe.useEffect(()=>{if(n!==Re.PORTFOLIO)return;const X=document.getElementById(f);X&&X.scrollIntoView({behavior:"smooth",block:"start"})},[n,f]),Oe.useEffect(()=>{(n===Re.APP_ICONS||n===Re.APP_STORE_SCREENSHOTS||n===Re.NAMELAKA||n===Re.MINDZY||n===Re.MARKETING_VIDEO||n===Re.ELEMENTAL_QUEST||n===Re.COMBAT_PLANES||n===Re.FATTY_FISH||n===Re.LANDING_HP_VS_VADER)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const ce=X=>{o(Re.PORTFOLIO),s(X),window.history.pushState(null,"",`#${X}`);const he=document.getElementById(X);he&&he.scrollIntoView({behavior:"smooth",block:"start"})},ae=()=>{o(Re.PORTFOLIO),s(nn.WORK),window.history.pushState(null,"",`#${nn.WORK}`);const X=document.getElementById(nn.WORK);X&&X.scrollIntoView({behavior:"smooth",block:"start"})};return d.jsxs(W5,{children:[d.jsxs(P5,{children:[d.jsx(pu,{$position:"top-left"}),d.jsx(pu,{$position:"top-right"}),d.jsx(pu,{$position:"bottom-left"})]}),d.jsxs(J5,{children:[d.jsx(Z5,{}),n===Re.PORTFOLIO&&d.jsxs(d.Fragment,{children:[d.jsx(F5,{}),d.jsx(y1,{onNavigate:ce})]}),n===Re.PORTFOLIO?d.jsxs(d.Fragment,{children:[d.jsxs("main",{children:[d.jsx(M1,{}),d.jsx(OS,{}),d.jsx(nx,{})]}),d.jsx(ux,{})]}):n===Re.APP_ICONS?d.jsx(y2,{onBack:ae}):n===Re.APP_STORE_SCREENSHOTS?d.jsx(H2,{onBack:ae}):n===Re.NAMELAKA?d.jsx(W2,{onBack:ae}):n===Re.MINDZY?d.jsx(S$,{onBack:ae}):n===Re.MARKETING_VIDEO?d.jsx(Y$,{onBack:ae}):n===Re.ELEMENTAL_QUEST?d.jsx(sw,{onBack:ae}):n===Re.COMBAT_PLANES?d.jsx(Ew,{onBack:ae}):n===Re.FATTY_FISH?d.jsx(Jw,{onBack:ae}):n===Re.LANDING_HP_VS_VADER?d.jsx(X5,{onBack:ae}):null]})]})}function tz(){return d.jsx(e1,{children:d.jsx(ez,{})})}const nz=db`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: ${O.layout.fullViewportHeight};
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
    width: ${O.sizing.scrollbarWidth};
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
`,az={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},iz={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},lz={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},rz={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},oz={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},sz={container:"1280px"},cz={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},uz={colors:az,spacing:iz,radii:lz,shadows:rz,typography:oz,layout:sz,breakpoints:cz},Mm=document.getElementById("root");if(!Mm)throw new Error("Could not find root element to mount to");const fz=uv.createRoot(Mm);fz.render(d.jsx(pt.StrictMode,{children:d.jsxs(cb,{theme:uz,children:[d.jsx(nz,{}),d.jsx(tz,{})]})}));
