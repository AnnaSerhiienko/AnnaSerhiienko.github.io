(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))s(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const M of b.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function f(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(m){if(m.ep)return;m.ep=!0;const b=f(m);fetch(m.href,b)}})();var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function J0(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var o=n.default;if(typeof o=="function"){var f=function s(){return this instanceof s?Reflect.construct(o,arguments,this.constructor):o.apply(this,arguments)};f.prototype=o.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var m=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(f,s,m.get?m:{enumerable:!0,get:function(){return n[s]}})}),f}var Yc={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function I0(){if(Mg)return Al;Mg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(s,m,b){var M=null;if(b!==void 0&&(M=""+b),m.key!==void 0&&(M=""+m.key),"key"in m){b={};for(var q in m)q!=="key"&&(b[q]=m[q])}else b=m;return m=b.ref,{$$typeof:n,type:s,key:M,ref:m!==void 0?m:null,props:b}}return Al.Fragment=o,Al.jsx=f,Al.jsxs=f,Al}var Dg;function F0(){return Dg||(Dg=1,Yc.exports=I0()),Yc.exports}var d=F0(),Vc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function ev(){if(Hg)return xe;Hg=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),M=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),ne=Symbol.iterator;function ue(g){return g===null||typeof g!="object"?null:(g=ne&&g[ne]||g["@@iterator"],typeof g=="function"?g:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,he={};function ce(g,S,U){this.props=g,this.context=S,this.refs=he,this.updater=U||le}ce.prototype.isReactComponent={},ce.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},ce.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function pe(){}pe.prototype=ce.prototype;function ae(g,S,U){this.props=g,this.context=S,this.refs=he,this.updater=U||le}var oe=ae.prototype=new pe;oe.constructor=ae,X(oe,ce.prototype),oe.isPureReactComponent=!0;var w=Array.isArray;function z(){}var x={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function _(g,S,U){var H=U.ref;return{$$typeof:n,type:g,key:S,ref:H!==void 0?H:null,props:U}}function v(g,S){return _(g.type,S,g.props)}function G(g){return typeof g=="object"&&g!==null&&g.$$typeof===n}function Z(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(U){return S[U]})}var R=/\/+/g;function W(g,S){return typeof g=="object"&&g!==null&&g.key!=null?Z(""+g.key):S.toString(36)}function ee(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(z,z):(g.status="pending",g.then(function(S){g.status==="pending"&&(g.status="fulfilled",g.value=S)},function(S){g.status==="pending"&&(g.status="rejected",g.reason=S)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function j(g,S,U,H,J){var K=typeof g;(K==="undefined"||K==="boolean")&&(g=null);var te=!1;if(g===null)te=!0;else switch(K){case"bigint":case"string":case"number":te=!0;break;case"object":switch(g.$$typeof){case n:case o:te=!0;break;case V:return te=g._init,j(te(g._payload),S,U,H,J)}}if(te)return J=J(g),te=H===""?"."+W(g,0):H,w(J)?(U="",te!=null&&(U=te.replace(R,"$&/")+"/"),j(J,S,U,"",function(Se){return Se})):J!=null&&(G(J)&&(J=v(J,U+(J.key==null||g&&g.key===J.key?"":(""+J.key).replace(R,"$&/")+"/")+te)),S.push(J)),1;te=0;var me=H===""?".":H+":";if(w(g))for(var de=0;de<g.length;de++)H=g[de],K=me+W(H,de),te+=j(H,S,U,K,J);else if(de=ue(g),typeof de=="function")for(g=de.call(g),de=0;!(H=g.next()).done;)H=H.value,K=me+W(H,de++),te+=j(H,S,U,K,J);else if(K==="object"){if(typeof g.then=="function")return j(ee(g),S,U,H,J);throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return te}function u(g,S,U){if(g==null)return g;var H=[],J=0;return j(g,H,"","",function(K){return S.call(U,K,J++)}),H}function ie(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(U){(g._status===0||g._status===-1)&&(g._status=1,g._result=U)},function(U){(g._status===0||g._status===-1)&&(g._status=2,g._result=U)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var T=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},p={map:u,forEach:function(g,S,U){u(g,function(){S.apply(this,arguments)},U)},count:function(g){var S=0;return u(g,function(){S++}),S},toArray:function(g){return u(g,function(S){return S})||[]},only:function(g){if(!G(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return xe.Activity=P,xe.Children=p,xe.Component=ce,xe.Fragment=f,xe.Profiler=m,xe.PureComponent=ae,xe.StrictMode=s,xe.Suspense=E,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,xe.__COMPILER_RUNTIME={__proto__:null,c:function(g){return x.H.useMemoCache(g)}},xe.cache=function(g){return function(){return g.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(g,S,U){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=X({},g.props),J=g.key;if(S!=null)for(K in S.key!==void 0&&(J=""+S.key),S)!D.call(S,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&S.ref===void 0||(H[K]=S[K]);var K=arguments.length-2;if(K===1)H.children=U;else if(1<K){for(var te=Array(K),me=0;me<K;me++)te[me]=arguments[me+2];H.children=te}return _(g.type,J,H)},xe.createContext=function(g){return g={$$typeof:M,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},xe.createElement=function(g,S,U){var H,J={},K=null;if(S!=null)for(H in S.key!==void 0&&(K=""+S.key),S)D.call(S,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(J[H]=S[H]);var te=arguments.length-2;if(te===1)J.children=U;else if(1<te){for(var me=Array(te),de=0;de<te;de++)me[de]=arguments[de+2];J.children=me}if(g&&g.defaultProps)for(H in te=g.defaultProps,te)J[H]===void 0&&(J[H]=te[H]);return _(g,K,J)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(g){return{$$typeof:q,render:g}},xe.isValidElement=G,xe.lazy=function(g){return{$$typeof:V,_payload:{_status:-1,_result:g},_init:ie}},xe.memo=function(g,S){return{$$typeof:O,type:g,compare:S===void 0?null:S}},xe.startTransition=function(g){var S=x.T,U={};x.T=U;try{var H=g(),J=x.S;J!==null&&J(U,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(z,T)}catch(K){T(K)}finally{S!==null&&U.types!==null&&(S.types=U.types),x.T=S}},xe.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},xe.use=function(g){return x.H.use(g)},xe.useActionState=function(g,S,U){return x.H.useActionState(g,S,U)},xe.useCallback=function(g,S){return x.H.useCallback(g,S)},xe.useContext=function(g){return x.H.useContext(g)},xe.useDebugValue=function(){},xe.useDeferredValue=function(g,S){return x.H.useDeferredValue(g,S)},xe.useEffect=function(g,S){return x.H.useEffect(g,S)},xe.useEffectEvent=function(g){return x.H.useEffectEvent(g)},xe.useId=function(){return x.H.useId()},xe.useImperativeHandle=function(g,S,U){return x.H.useImperativeHandle(g,S,U)},xe.useInsertionEffect=function(g,S){return x.H.useInsertionEffect(g,S)},xe.useLayoutEffect=function(g,S){return x.H.useLayoutEffect(g,S)},xe.useMemo=function(g,S){return x.H.useMemo(g,S)},xe.useOptimistic=function(g,S){return x.H.useOptimistic(g,S)},xe.useReducer=function(g,S,U){return x.H.useReducer(g,S,U)},xe.useRef=function(g){return x.H.useRef(g)},xe.useState=function(g){return x.H.useState(g)},xe.useSyncExternalStore=function(g,S,U){return x.H.useSyncExternalStore(g,S,U)},xe.useTransition=function(){return x.H.useTransition()},xe.version="19.2.3",xe}var Rg;function Sn(){return Rg||(Rg=1,Vc.exports=ev()),Vc.exports}var Ce=Sn();const pt=Tu(Ce);var Xc={exports:{}},jl={},Qc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function tv(){return Lg||(Lg=1,(function(n){function o(j,u){var ie=j.length;j.push(u);e:for(;0<ie;){var T=ie-1>>>1,p=j[T];if(0<m(p,u))j[T]=u,j[ie]=p,ie=T;else break e}}function f(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var u=j[0],ie=j.pop();if(ie!==u){j[0]=ie;e:for(var T=0,p=j.length,g=p>>>1;T<g;){var S=2*(T+1)-1,U=j[S],H=S+1,J=j[H];if(0>m(U,ie))H<p&&0>m(J,U)?(j[T]=J,j[H]=ie,T=H):(j[T]=U,j[S]=ie,T=S);else if(H<p&&0>m(J,ie))j[T]=J,j[H]=ie,T=H;else break e}}return u}function m(j,u){var ie=j.sortIndex-u.sortIndex;return ie!==0?ie:j.id-u.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;n.unstable_now=function(){return b.now()}}else{var M=Date,q=M.now();n.unstable_now=function(){return M.now()-q}}var E=[],O=[],V=1,P=null,ne=3,ue=!1,le=!1,X=!1,he=!1,ce=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function oe(j){for(var u=f(O);u!==null;){if(u.callback===null)s(O);else if(u.startTime<=j)s(O),u.sortIndex=u.expirationTime,o(E,u);else break;u=f(O)}}function w(j){if(X=!1,oe(j),!le)if(f(E)!==null)le=!0,z||(z=!0,Z());else{var u=f(O);u!==null&&ee(w,u.startTime-j)}}var z=!1,x=-1,D=5,_=-1;function v(){return he?!0:!(n.unstable_now()-_<D)}function G(){if(he=!1,z){var j=n.unstable_now();_=j;var u=!0;try{e:{le=!1,X&&(X=!1,pe(x),x=-1),ue=!0;var ie=ne;try{t:{for(oe(j),P=f(E);P!==null&&!(P.expirationTime>j&&v());){var T=P.callback;if(typeof T=="function"){P.callback=null,ne=P.priorityLevel;var p=T(P.expirationTime<=j);if(j=n.unstable_now(),typeof p=="function"){P.callback=p,oe(j),u=!0;break t}P===f(E)&&s(E),oe(j)}else s(E);P=f(E)}if(P!==null)u=!0;else{var g=f(O);g!==null&&ee(w,g.startTime-j),u=!1}}break e}finally{P=null,ne=ie,ue=!1}u=void 0}}finally{u?Z():z=!1}}}var Z;if(typeof ae=="function")Z=function(){ae(G)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,W=R.port2;R.port1.onmessage=G,Z=function(){W.postMessage(null)}}else Z=function(){ce(G,0)};function ee(j,u){x=ce(function(){j(n.unstable_now())},u)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return ne},n.unstable_next=function(j){switch(ne){case 1:case 2:case 3:var u=3;break;default:u=ne}var ie=ne;ne=u;try{return j()}finally{ne=ie}},n.unstable_requestPaint=function(){he=!0},n.unstable_runWithPriority=function(j,u){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ie=ne;ne=j;try{return u()}finally{ne=ie}},n.unstable_scheduleCallback=function(j,u,ie){var T=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?T+ie:T):ie=T,j){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=ie+p,j={id:V++,callback:u,priorityLevel:j,startTime:ie,expirationTime:p,sortIndex:-1},ie>T?(j.sortIndex=ie,o(O,j),f(E)===null&&j===f(O)&&(X?(pe(x),x=-1):X=!0,ee(w,ie-T))):(j.sortIndex=p,o(E,j),le||ue||(le=!0,z||(z=!0,Z()))),j},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(j){var u=ne;return function(){var ie=ne;ne=u;try{return j.apply(this,arguments)}finally{ne=ie}}}})(Zc)),Zc}var Ng;function nv(){return Ng||(Ng=1,Qc.exports=tv()),Qc.exports}var Kc={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function av(){if(Ug)return Tt;Ug=1;var n=Sn();function o(E){var O="https://react.dev/errors/"+E;if(1<arguments.length){O+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)O+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+E+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(E,O,V){var P=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:P==null?null:""+P,children:E,containerInfo:O,implementation:V}}var M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(E,O){if(E==="font")return"";if(typeof O=="string")return O==="use-credentials"?O:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tt.createPortal=function(E,O){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O||O.nodeType!==1&&O.nodeType!==9&&O.nodeType!==11)throw Error(o(299));return b(E,O,null,V)},Tt.flushSync=function(E){var O=M.T,V=s.p;try{if(M.T=null,s.p=2,E)return E()}finally{M.T=O,s.p=V,s.d.f()}},Tt.preconnect=function(E,O){typeof E=="string"&&(O?(O=O.crossOrigin,O=typeof O=="string"?O==="use-credentials"?O:"":void 0):O=null,s.d.C(E,O))},Tt.prefetchDNS=function(E){typeof E=="string"&&s.d.D(E)},Tt.preinit=function(E,O){if(typeof E=="string"&&O&&typeof O.as=="string"){var V=O.as,P=q(V,O.crossOrigin),ne=typeof O.integrity=="string"?O.integrity:void 0,ue=typeof O.fetchPriority=="string"?O.fetchPriority:void 0;V==="style"?s.d.S(E,typeof O.precedence=="string"?O.precedence:void 0,{crossOrigin:P,integrity:ne,fetchPriority:ue}):V==="script"&&s.d.X(E,{crossOrigin:P,integrity:ne,fetchPriority:ue,nonce:typeof O.nonce=="string"?O.nonce:void 0})}},Tt.preinitModule=function(E,O){if(typeof E=="string")if(typeof O=="object"&&O!==null){if(O.as==null||O.as==="script"){var V=q(O.as,O.crossOrigin);s.d.M(E,{crossOrigin:V,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0})}}else O==null&&s.d.M(E)},Tt.preload=function(E,O){if(typeof E=="string"&&typeof O=="object"&&O!==null&&typeof O.as=="string"){var V=O.as,P=q(V,O.crossOrigin);s.d.L(E,V,{crossOrigin:P,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0,type:typeof O.type=="string"?O.type:void 0,fetchPriority:typeof O.fetchPriority=="string"?O.fetchPriority:void 0,referrerPolicy:typeof O.referrerPolicy=="string"?O.referrerPolicy:void 0,imageSrcSet:typeof O.imageSrcSet=="string"?O.imageSrcSet:void 0,imageSizes:typeof O.imageSizes=="string"?O.imageSizes:void 0,media:typeof O.media=="string"?O.media:void 0})}},Tt.preloadModule=function(E,O){if(typeof E=="string")if(O){var V=q(O.as,O.crossOrigin);s.d.m(E,{as:typeof O.as=="string"&&O.as!=="script"?O.as:void 0,crossOrigin:V,integrity:typeof O.integrity=="string"?O.integrity:void 0})}else s.d.m(E)},Tt.requestFormReset=function(E){s.d.r(E)},Tt.unstable_batchedUpdates=function(E,O){return E(O)},Tt.useFormState=function(E,O,V){return M.H.useFormState(E,O,V)},Tt.useFormStatus=function(){return M.H.useHostTransitionStatus()},Tt.version="19.2.3",Tt}var Bg;function iv(){if(Bg)return Kc.exports;Bg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Kc.exports=av(),Kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function lv(){if(Gg)return jl;Gg=1;var n=nv(),o=Sn(),f=iv();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(b(e)!==e)throw Error(s(188))}function O(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return E(l),e;if(r===i)return E(l),t;r=r.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=r;else{for(var c=!1,h=l.child;h;){if(h===a){c=!0,a=l,i=r;break}if(h===i){c=!0,i=l,a=r;break}h=h.sibling}if(!c){for(h=r.child;h;){if(h===a){c=!0,a=r,i=l;break}if(h===i){c=!0,i=r,a=l;break}h=h.sibling}if(!c)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var P=Object.assign,ne=Symbol.for("react.element"),ue=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ce:return"Profiler";case he:return"StrictMode";case w:return"Suspense";case z:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case ae:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case D:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var ee=Array.isArray,j=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,u=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},T=[],p=-1;function g(e){return{current:e}}function S(e){0>p||(e.current=T[p],T[p]=null,p--)}function U(e,t){p++,T[p]=e.current,e.current=t}var H=g(null),J=g(null),K=g(null),te=g(null);function me(e,t){switch(U(K,t),U(J,e),U(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(H),U(H,e)}function de(){S(H),S(J),S(K)}function Se(e){e.memoizedState!==null&&U(te,e);var t=H.current,a=ag(t,e.type);t!==a&&(U(J,e),U(H,a))}function Ae(e){J.current===e&&(S(H),S(J)),te.current===e&&(S(te),wl._currentValue=ie)}var $e,je;function be(e){if($e===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$e=t&&t[1]||"",je=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+je}var ze=!1;function Je(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(Y){var B=Y}Reflect.construct(e,[],F)}else{try{F.call()}catch(Y){B=Y}e.call(F.prototype)}}else{try{throw Error()}catch(Y){B=Y}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),c=r[0],h=r[1];if(c&&h){var $=c.split(`
`),N=h.split(`
`);for(l=i=0;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(i===$.length||l===N.length)for(i=$.length-1,l=N.length-1;1<=i&&0<=l&&$[i]!==N[l];)l--;for(;1<=i&&0<=l;i--,l--)if($[i]!==N[l]){if(i!==1||l!==1)do if(i--,l--,0>l||$[i]!==N[l]){var Q=`
`+$[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function _e(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return be("Activity");default:return""}}function Ie(e){try{var t="",a=null;do t+=_e(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fe=Object.prototype.hasOwnProperty,nt=n.unstable_scheduleCallback,yt=n.unstable_cancelCallback,xn=n.unstable_shouldYield,Ua=n.unstable_requestPaint,zt=n.unstable_now,ha=n.unstable_getCurrentPriorityLevel,Gl=n.unstable_ImmediatePriority,ln=n.unstable_UserBlockingPriority,pn=n.unstable_NormalPriority,Cm=n.unstable_LowPriority,Hu=n.unstable_IdlePriority,Mm=n.log,Dm=n.unstable_setDisableYieldValue,Hi=null,Ht=null;function Gn(e){if(typeof Mm=="function"&&Dm(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Hi,e)}catch{}}var Rt=Math.clz32?Math.clz32:Lm,Hm=Math.log,Rm=Math.LN2;function Lm(e){return e>>>=0,e===0?32:31-(Hm(e)/Rm|0)|0}var ql=256,Yl=262144,Vl=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~r,i!==0?l=ma(i):(c&=h,c!==0?l=ma(c):a||(a=h&~e,a!==0&&(l=ma(a))))):(h=i&~r,h!==0?l=ma(h):c!==0?l=ma(c):a||(a=i&~e,a!==0&&(l=ma(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Ri(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Nm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(){var e=Vl;return Vl<<=1,(Vl&62914560)===0&&(Vl=4194304),e}function ko(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Um(e,t,a,i,l,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,$=e.expirationTimes,N=e.hiddenUpdates;for(a=c&~a;0<a;){var Q=31-Rt(a),F=1<<Q;h[Q]=0,$[Q]=-1;var B=N[Q];if(B!==null)for(N[Q]=null,Q=0;Q<B.length;Q++){var Y=B[Q];Y!==null&&(Y.lane&=-536870913)}a&=~F}i!==0&&Lu(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Lu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Nu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Rt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function Uu(e,t){var a=t&-t;return a=(a&42)!==0?1:Co(a),(a&(e.suspendedLanes|t))!==0?0:a}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bu(){var e=u.p;return e!==0?e:(e=window.event,e===void 0?32:Eg(e.type))}function Gu(e,t){var a=u.p;try{return u.p=e,t()}finally{u.p=a}}var qn=Math.random().toString(36).slice(2),vt="__reactFiber$"+qn,jt="__reactProps$"+qn,Ba="__reactContainer$"+qn,Do="__reactEvents$"+qn,Bm="__reactListeners$"+qn,Gm="__reactHandles$"+qn,qu="__reactResources$"+qn,Ni="__reactMarker$"+qn;function Ho(e){delete e[vt],delete e[jt],delete e[Do],delete e[Bm],delete e[Gm]}function Ga(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ba]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ug(e);e!==null;){if(a=e[vt])return a;e=ug(e)}return t}e=a,a=e.parentNode}return null}function qa(e){if(e=e[vt]||e[Ba]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ui(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ya(e){var t=e[qu];return t||(t=e[qu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[Ni]=!0}var Yu=new Set,Vu={};function ya(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Vu[e]=t,e=0;e<t.length;e++)Yu.add(t[e])}var qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xu={},Qu={};function Ym(e){return Fe.call(Qu,e)?!0:Fe.call(Xu,e)?!1:qm.test(e)?Qu[e]=!0:(Xu[e]=!0,!1)}function Ql(e,t,a){if(Ym(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function $n(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){if(!e._valueTracker){var t=Zu(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Zu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xm=/[\n"\\]/g;function Zt(e){return e.replace(Xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lo(e,t,a,i,l,r,c,h){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?No(e,c,Qt(t)):a!=null?No(e,c,Qt(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Qt(h):e.removeAttribute("name")}function Wu(e,t,a,i,l,r,c,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ro(e);return}a=a!=null?""+Qt(a):"",t=t!=null?""+Qt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ro(e)}function No(e,t,a){t==="number"&&Kl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Qt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Pu(e,t,a){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Qt(a):""}function Ju(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(ee(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Qt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ro(e)}function Qa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Iu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fu(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Iu(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Iu(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return Km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wn(){}var Bo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ka=null;function ef(e){var t=qa(e);if(t&&(e=t.stateNode)){var a=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[jt]||null;if(!l)throw Error(s(90));Lo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Ku(i)}break e;case"textarea":Pu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xa(e,!!a.multiple,t,!1)}}}var qo=!1;function tf(e,t,a){if(qo)return e(t,a);qo=!0;try{var i=e(t);return i}finally{if(qo=!1,(Za!==null||Ka!==null)&&(Rr(),Za&&(t=Za,e=Ka,Ka=Za=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function Bi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[jt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(zn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Yo=!1}var Yn=null,Vo=null,Pl=null;function nf(){if(Pl)return Pl;var e,t=Vo,a=t.length,i,l="value"in Yn?Yn.value:Yn.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var c=a-e;for(i=1;i<=c&&t[a-i]===l[r-i];i++);return Pl=l.slice(e,1<i?1-i:void 0)}function Jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function af(){return!1}function _t(e){function t(a,i,l,r,c){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Il:af,this.isPropagationStopped=af,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=_t(va),qi=P({},va,{view:0,detail:0}),Wm=_t(qi),Xo,Qo,Yi,er=P({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yi&&(Yi&&e.type==="mousemove"?(Xo=e.screenX-Yi.screenX,Qo=e.screenY-Yi.screenY):Qo=Xo=0,Yi=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),lf=_t(er),Pm=P({},er,{dataTransfer:0}),Jm=_t(Pm),Im=P({},qi,{relatedTarget:0}),Zo=_t(Im),Fm=P({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=_t(Fm),ty=P({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ny=_t(ty),ay=P({},va,{data:0}),rf=_t(ay),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ry[e])?!!t[e]:!1}function Ko(){return oy}var sy=P({},qi,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cy=_t(sy),uy=P({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=_t(uy),fy=P({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),dy=_t(fy),py=P({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=_t(py),hy=P({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=_t(hy),yy=P({},va,{newState:0,oldState:0}),vy=_t(yy),by=[9,13,27,32],Wo=zn&&"CompositionEvent"in window,Vi=null;zn&&"documentMode"in document&&(Vi=document.documentMode);var Sy=zn&&"TextEvent"in window&&!Vi,sf=zn&&(!Wo||Vi&&8<Vi&&11>=Vi),cf=" ",uf=!1;function ff(e,t){switch(e){case"keyup":return by.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function xy(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(uf=!0,cf);case"textInput":return e=t.data,e===cf&&uf?null:e;default:return null}}function $y(e,t){if(Wa)return e==="compositionend"||!Wo&&ff(e,t)?(e=nf(),Pl=Vo=Yn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wy[e.type]:t==="textarea"}function gf(e,t,a,i){Za?Ka?Ka.push(i):Ka=[i]:Za=i,t=Yr(t,"onChange"),0<t.length&&(a=new Fl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Xi=null,Qi=null;function zy(e){Pp(e,0)}function tr(e){var t=Ui(e);if(Ku(t))return e}function hf(e,t){if(e==="change")return t}var mf=!1;if(zn){var Po;if(zn){var Jo="oninput"in document;if(!Jo){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Jo=typeof yf.oninput=="function"}Po=Jo}else Po=!1;mf=Po&&(!document.documentMode||9<document.documentMode)}function vf(){Xi&&(Xi.detachEvent("onpropertychange",bf),Qi=Xi=null)}function bf(e){if(e.propertyName==="value"&&tr(Qi)){var t=[];gf(t,Qi,e,Go(e)),tf(zy,t)}}function Ty(e,t,a){e==="focusin"?(vf(),Xi=t,Qi=a,Xi.attachEvent("onpropertychange",bf)):e==="focusout"&&vf()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(Qi)}function Ay(e,t){if(e==="click")return tr(t)}function jy(e,t){if(e==="input"||e==="change")return tr(t)}function _y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:_y;function Zi(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Fe.call(t,l)||!Lt(e[l],t[l]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,t){var a=Sf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sf(a)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kl(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oy=zn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Fo=null,Ki=null,es=!1;function zf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;es||Pa==null||Pa!==Kl(i)||(i=Pa,"selectionStart"in i&&Io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Zi(Ki,i)||(Ki=i,i=Yr(Fo,"onSelect"),0<i.length&&(t=new Fl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Pa)))}function ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ja={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},ts={},Tf={};zn&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Sa(e){if(ts[e])return ts[e];if(!Ja[e])return e;var t=Ja[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tf)return ts[e]=t[a];return e}var Ef=Sa("animationend"),Af=Sa("animationiteration"),jf=Sa("animationstart"),ky=Sa("transitionrun"),Cy=Sa("transitionstart"),My=Sa("transitioncancel"),_f=Sa("transitionend"),Of=new Map,ns="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ns.push("scrollEnd");function rn(e,t){Of.set(e,t),ya(t,[e])}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kt=[],Ia=0,as=0;function ar(){for(var e=Ia,t=as=Ia=0;t<e;){var a=Kt[t];Kt[t++]=null;var i=Kt[t];Kt[t++]=null;var l=Kt[t];Kt[t++]=null;var r=Kt[t];if(Kt[t++]=null,i!==null&&l!==null){var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}r!==0&&kf(a,l,r)}}function ir(e,t,a,i){Kt[Ia++]=e,Kt[Ia++]=t,Kt[Ia++]=a,Kt[Ia++]=i,as|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function is(e,t,a,i){return ir(e,t,a,i),lr(e)}function xa(e,t){return ir(e,null,null,t),lr(e)}function kf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Rt(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function lr(e){if(50<ml)throw ml=0,pc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function Dy(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,i){return new Dy(e,t,a,i)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rr(e,t,a,i,l,r){var c=0;if(i=e,typeof e=="function")ls(e)&&(c=1);else if(typeof e=="string")c=U0(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=Nt(31,a,t,l),e.elementType=_,e.lanes=r,e;case X:return $a(a.children,l,r,t);case he:c=8,l|=24;break;case ce:return e=Nt(12,a,t,l|2),e.elementType=ce,e.lanes=r,e;case w:return e=Nt(13,a,t,l),e.elementType=w,e.lanes=r,e;case z:return e=Nt(19,a,t,l),e.elementType=z,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:c=10;break e;case pe:c=9;break e;case oe:c=11;break e;case x:c=14;break e;case D:c=16,i=null;break e}c=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Nt(c,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function $a(e,t,a,i){return e=Nt(7,e,i,t),e.lanes=a,e}function rs(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function Mf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function os(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Df=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var a=Df.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ie(t)},Df.set(e,t),t)}return{value:e,source:t,stack:Ie(t)}}var ei=[],ti=0,or=null,Wi=0,Pt=[],Jt=0,Vn=null,gn=1,hn="";function En(e,t){ei[ti++]=Wi,ei[ti++]=or,or=e,Wi=t}function Hf(e,t,a){Pt[Jt++]=gn,Pt[Jt++]=hn,Pt[Jt++]=Vn,Vn=e;var i=gn;e=hn;var l=32-Rt(i)-1;i&=~(1<<l),a+=1;var r=32-Rt(t)+l;if(30<r){var c=l-l%5;r=(i&(1<<c)-1).toString(32),i>>=c,l-=c,gn=1<<32-Rt(t)+l|a<<l|i,hn=r+e}else gn=1<<r|a<<l|i,hn=e}function ss(e){e.return!==null&&(En(e,1),Hf(e,1,0))}function cs(e){for(;e===or;)or=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null;for(;e===Vn;)Vn=Pt[--Jt],Pt[Jt]=null,hn=Pt[--Jt],Pt[Jt]=null,gn=Pt[--Jt],Pt[Jt]=null}function Rf(e,t){Pt[Jt++]=gn,Pt[Jt++]=hn,Pt[Jt++]=Vn,gn=t.id,hn=t.overflow,Vn=e}var bt=null,Ze=null,He=!1,Xn=null,It=!1,us=Error(s(519));function Qn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pi(Wt(t,e)),us}function Lf(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[vt]=e,t[jt]=i,a){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(a=0;a<vl.length;a++)ke(vl[a],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),Wu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),Ju(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||eg(t.textContent,a)?(i.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),i.onScroll!=null&&ke("scroll",t),i.onScrollEnd!=null&&ke("scrollend",t),i.onClick!=null&&(t.onclick=wn),t=!0):t=!1,t||Qn(e,!0)}function Nf(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:bt=bt.return}}function ni(e){if(e!==bt)return!1;if(!He)return Nf(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jc(e.type,e.memoizedProps)),a=!a),a&&Ze&&Qn(e),Nf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=cg(e)}else t===27?(t=Ze,ra(e.type)?(e=Mc,Mc=null,Ze=e):Ze=t):Ze=bt?en(e.stateNode.nextSibling):null;return!0}function wa(){Ze=bt=null,He=!1}function fs(){var e=Xn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Xn=null),e}function Pi(e){Xn===null?Xn=[e]:Xn.push(e)}var ds=g(null),za=null,An=null;function Zn(e,t,a){U(ds,t._currentValue),t._currentValue=a}function jn(e){e._currentValue=ds.current,S(ds)}function ps(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function gs(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var $=0;$<t.length;$++)if(h.context===t[$]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),ps(r.return,a,e),i||(c=null);break e}r=h.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),ps(c,a,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function ai(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var h=l.type;Lt(l.pendingProps.value,c.value)||(e!==null?e.push(h):e=[h])}}else if(l===te.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}l=l.return}e!==null&&gs(t,e,a,i),t.flags|=262144}function sr(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){za=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Uf(za,e)}function cr(e,t){return za===null&&Ta(e),Uf(e,t)}function Uf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},An===null){if(e===null)throw Error(s(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return a}var Hy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ry=n.unstable_scheduleCallback,Ly=n.unstable_NormalPriority,lt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hs(){return{controller:new Hy,data:new Map,refCount:0}}function Ji(e){e.refCount--,e.refCount===0&&Ry(Ly,function(){e.controller.abort()})}var Ii=null,ms=0,ii=0,li=null;function Ny(e,t){if(Ii===null){var a=Ii=[];ms=0,ii=bc(),li={status:"pending",value:void 0,then:function(i){a.push(i)}}}return ms++,t.then(Bf,Bf),t}function Bf(){if(--ms===0&&Ii!==null){li!==null&&(li.status="fulfilled");var e=Ii;Ii=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uy(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Gf=j.S;j.S=function(e,t){zp=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ny(e,t),Gf!==null&&Gf(e,t)};var Ea=g(null);function ys(){var e=Ea.current;return e!==null?e:Qe.pooledCache}function ur(e,t){t===null?U(Ea,Ea.current):U(Ea,t.pool)}function qf(){var e=ys();return e===null?null:{parent:lt._currentValue,pool:e}}var ri=Error(s(460)),vs=Error(s(474)),fr=Error(s(542)),dr={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(wn,wn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e;default:if(typeof t.status=="string")t.then(wn,wn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e}throw ja=t,ri}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ja=a,ri):a}}var ja=null;function Xf(){if(ja===null)throw Error(s(459));var e=ja;return ja=null,e}function Qf(e){if(e===ri||e===fr)throw Error(s(483))}var oi=null,Fi=0;function pr(e){var t=Fi;return Fi+=1,oi===null&&(oi=[]),Vf(oi,e,t)}function el(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gr(e,t){throw t.$$typeof===ne?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zf(e){function t(C,A){if(e){var L=C.deletions;L===null?(C.deletions=[A],C.flags|=16):L.push(A)}}function a(C,A){if(!e)return null;for(;A!==null;)t(C,A),A=A.sibling;return null}function i(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function l(C,A){return C=Tn(C,A),C.index=0,C.sibling=null,C}function r(C,A,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<A?(C.flags|=67108866,A):L):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function h(C,A,L,I){return A===null||A.tag!==6?(A=rs(L,C.mode,I),A.return=C,A):(A=l(A,L),A.return=C,A)}function $(C,A,L,I){var ye=L.type;return ye===X?Q(C,A,L.props.children,I,L.key):A!==null&&(A.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Aa(ye)===A.type)?(A=l(A,L.props),el(A,L),A.return=C,A):(A=rr(L.type,L.key,L.props,null,C.mode,I),el(A,L),A.return=C,A)}function N(C,A,L,I){return A===null||A.tag!==4||A.stateNode.containerInfo!==L.containerInfo||A.stateNode.implementation!==L.implementation?(A=os(L,C.mode,I),A.return=C,A):(A=l(A,L.children||[]),A.return=C,A)}function Q(C,A,L,I,ye){return A===null||A.tag!==7?(A=$a(L,C.mode,I,ye),A.return=C,A):(A=l(A,L),A.return=C,A)}function F(C,A,L){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=rs(""+A,C.mode,L),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ue:return L=rr(A.type,A.key,A.props,null,C.mode,L),el(L,A),L.return=C,L;case le:return A=os(A,C.mode,L),A.return=C,A;case D:return A=Aa(A),F(C,A,L)}if(ee(A)||Z(A))return A=$a(A,C.mode,L,null),A.return=C,A;if(typeof A.then=="function")return F(C,pr(A),L);if(A.$$typeof===ae)return F(C,cr(C,A),L);gr(C,A)}return null}function B(C,A,L,I){var ye=A!==null?A.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ye!==null?null:h(C,A,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ue:return L.key===ye?$(C,A,L,I):null;case le:return L.key===ye?N(C,A,L,I):null;case D:return L=Aa(L),B(C,A,L,I)}if(ee(L)||Z(L))return ye!==null?null:Q(C,A,L,I,null);if(typeof L.then=="function")return B(C,A,pr(L),I);if(L.$$typeof===ae)return B(C,A,cr(C,L),I);gr(C,L)}return null}function Y(C,A,L,I,ye){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(L)||null,h(A,C,""+I,ye);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ue:return C=C.get(I.key===null?L:I.key)||null,$(A,C,I,ye);case le:return C=C.get(I.key===null?L:I.key)||null,N(A,C,I,ye);case D:return I=Aa(I),Y(C,A,L,I,ye)}if(ee(I)||Z(I))return C=C.get(L)||null,Q(A,C,I,ye,null);if(typeof I.then=="function")return Y(C,A,L,pr(I),ye);if(I.$$typeof===ae)return Y(C,A,L,cr(A,I),ye);gr(A,I)}return null}function fe(C,A,L,I){for(var ye=null,Le=null,ge=A,Te=A=0,De=null;ge!==null&&Te<L.length;Te++){ge.index>Te?(De=ge,ge=null):De=ge.sibling;var Ne=B(C,ge,L[Te],I);if(Ne===null){ge===null&&(ge=De);break}e&&ge&&Ne.alternate===null&&t(C,ge),A=r(Ne,A,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne,ge=De}if(Te===L.length)return a(C,ge),He&&En(C,Te),ye;if(ge===null){for(;Te<L.length;Te++)ge=F(C,L[Te],I),ge!==null&&(A=r(ge,A,Te),Le===null?ye=ge:Le.sibling=ge,Le=ge);return He&&En(C,Te),ye}for(ge=i(ge);Te<L.length;Te++)De=Y(ge,C,Te,L[Te],I),De!==null&&(e&&De.alternate!==null&&ge.delete(De.key===null?Te:De.key),A=r(De,A,Te),Le===null?ye=De:Le.sibling=De,Le=De);return e&&ge.forEach(function(fa){return t(C,fa)}),He&&En(C,Te),ye}function ve(C,A,L,I){if(L==null)throw Error(s(151));for(var ye=null,Le=null,ge=A,Te=A=0,De=null,Ne=L.next();ge!==null&&!Ne.done;Te++,Ne=L.next()){ge.index>Te?(De=ge,ge=null):De=ge.sibling;var fa=B(C,ge,Ne.value,I);if(fa===null){ge===null&&(ge=De);break}e&&ge&&fa.alternate===null&&t(C,ge),A=r(fa,A,Te),Le===null?ye=fa:Le.sibling=fa,Le=fa,ge=De}if(Ne.done)return a(C,ge),He&&En(C,Te),ye;if(ge===null){for(;!Ne.done;Te++,Ne=L.next())Ne=F(C,Ne.value,I),Ne!==null&&(A=r(Ne,A,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return He&&En(C,Te),ye}for(ge=i(ge);!Ne.done;Te++,Ne=L.next())Ne=Y(ge,C,Te,Ne.value,I),Ne!==null&&(e&&Ne.alternate!==null&&ge.delete(Ne.key===null?Te:Ne.key),A=r(Ne,A,Te),Le===null?ye=Ne:Le.sibling=Ne,Le=Ne);return e&&ge.forEach(function(P0){return t(C,P0)}),He&&En(C,Te),ye}function Xe(C,A,L,I){if(typeof L=="object"&&L!==null&&L.type===X&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case ue:e:{for(var ye=L.key;A!==null;){if(A.key===ye){if(ye=L.type,ye===X){if(A.tag===7){a(C,A.sibling),I=l(A,L.props.children),I.return=C,C=I;break e}}else if(A.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===D&&Aa(ye)===A.type){a(C,A.sibling),I=l(A,L.props),el(I,L),I.return=C,C=I;break e}a(C,A);break}else t(C,A);A=A.sibling}L.type===X?(I=$a(L.props.children,C.mode,I,L.key),I.return=C,C=I):(I=rr(L.type,L.key,L.props,null,C.mode,I),el(I,L),I.return=C,C=I)}return c(C);case le:e:{for(ye=L.key;A!==null;){if(A.key===ye)if(A.tag===4&&A.stateNode.containerInfo===L.containerInfo&&A.stateNode.implementation===L.implementation){a(C,A.sibling),I=l(A,L.children||[]),I.return=C,C=I;break e}else{a(C,A);break}else t(C,A);A=A.sibling}I=os(L,C.mode,I),I.return=C,C=I}return c(C);case D:return L=Aa(L),Xe(C,A,L,I)}if(ee(L))return fe(C,A,L,I);if(Z(L)){if(ye=Z(L),typeof ye!="function")throw Error(s(150));return L=ye.call(L),ve(C,A,L,I)}if(typeof L.then=="function")return Xe(C,A,pr(L),I);if(L.$$typeof===ae)return Xe(C,A,cr(C,L),I);gr(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,A!==null&&A.tag===6?(a(C,A.sibling),I=l(A,L),I.return=C,C=I):(a(C,A),I=rs(L,C.mode,I),I.return=C,C=I),c(C)):a(C,A)}return function(C,A,L,I){try{Fi=0;var ye=Xe(C,A,L,I);return oi=null,ye}catch(ge){if(ge===ri||ge===fr)throw ge;var Le=Nt(29,ge,null,C.mode);return Le.lanes=I,Le.return=C,Le}finally{}}}var _a=Zf(!0),Kf=Zf(!1),Kn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=lr(e),kf(e,null,a),t}return ir(e,i,t,a),lr(e)}function tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Nu(e,a)}}function xs(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var $s=!1;function nl(){if($s){var e=li;if(e!==null)throw e}}function al(e,t,a,i){$s=!1;var l=e.updateQueue;Kn=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var $=h,N=$.next;$.next=null,c===null?r=N:c.next=N,c=$;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==c&&(h===null?Q.firstBaseUpdate=N:h.next=N,Q.lastBaseUpdate=$))}if(r!==null){var F=l.baseState;c=0,Q=N=$=null,h=r;do{var B=h.lane&-536870913,Y=B!==h.lane;if(Y?(Me&B)===B:(i&B)===B){B!==0&&B===ii&&($s=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var fe=e,ve=h;B=t;var Xe=a;switch(ve.tag){case 1:if(fe=ve.payload,typeof fe=="function"){F=fe.call(Xe,F,B);break e}F=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ve.payload,B=typeof fe=="function"?fe.call(Xe,F,B):fe,B==null)break e;F=P({},F,B);break e;case 2:Kn=!0}}B=h.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(N=Q=Y,$=F):Q=Q.next=Y,c|=B;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;Y=h,h=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);Q===null&&($=F),l.baseState=$,l.firstBaseUpdate=N,l.lastBaseUpdate=Q,r===null&&(l.shared.lanes=0),ta|=c,e.lanes=c,e.memoizedState=F}}function Wf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Pf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wf(a[e],t)}var si=g(null),hr=g(0);function Jf(e,t){e=Ln,U(hr,e),U(si,t),Ln=e|t.baseLanes}function ws(){U(hr,Ln),U(si,si.current)}function zs(){Ln=hr.current,S(si),S(hr)}var Ut=g(null),Ft=null;function Jn(e){var t=e.alternate;U(at,at.current&1),U(Ut,e),Ft===null&&(t===null||si.current!==null||t.memoizedState!==null)&&(Ft=e)}function Ts(e){U(at,at.current),U(Ut,e),Ft===null&&(Ft=e)}function If(e){e.tag===22?(U(at,at.current),U(Ut,e),Ft===null&&(Ft=e)):In()}function In(){U(at,at.current),U(Ut,Ut.current)}function Bt(e){S(Ut),Ft===e&&(Ft=null),S(at)}var at=g(0);function mr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kc(a)||Cc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _n=0,we=null,Ye=null,rt=null,yr=!1,ci=!1,Oa=!1,vr=0,il=0,ui=null,By=0;function et(){throw Error(s(321))}function Es(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Lt(e[a],t[a]))return!1;return!0}function As(e,t,a,i,l,r){return _n=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Hd:qs,Oa=!1,r=a(i,l),Oa=!1,ci&&(r=ed(t,a,i,l)),Ff(e),r}function Ff(e){j.H=ol;var t=Ye!==null&&Ye.next!==null;if(_n=0,rt=Ye=we=null,yr=!1,il=0,ui=null,t)throw Error(s(300));e===null||ot||(e=e.dependencies,e!==null&&sr(e)&&(ot=!0))}function ed(e,t,a,i){we=e;var l=0;do{if(ci&&(ui=null),il=0,ci=!1,25<=l)throw Error(s(301));if(l+=1,rt=Ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=Rd,r=t(a,i)}while(ci);return r}function Gy(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ll(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(we.flags|=1024),t}function js(){var e=vr!==0;return vr=0,e}function _s(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Os(e){if(yr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yr=!1}_n=0,rt=Ye=we=null,ci=!1,il=vr=0,ui=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?we.memoizedState=rt=e:rt=rt.next=e,rt}function it(){if(Ye===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=rt===null?we.memoizedState:rt.next;if(t!==null)rt=t,Ye=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?we.memoizedState=rt=e:rt=rt.next=e}return rt}function br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var t=il;return il+=1,ui===null&&(ui=[]),e=Vf(ui,e,t),t=we,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Hd:qs),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===ae)return St(e)}throw Error(s(438,String(e)))}function ks(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=we.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=br(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=v;return t.index++,a}function On(e,t){return typeof t=="function"?t(e):t}function xr(e){var t=it();return Cs(t,Ye,e)}function Cs(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=c=null,$=null,N=t,Q=!1;do{var F=N.lane&-536870913;if(F!==N.lane?(Me&F)===F:(_n&F)===F){var B=N.revertLane;if(B===0)$!==null&&($=$.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),F===ii&&(Q=!0);else if((_n&B)===B){N=N.next,B===ii&&(Q=!0);continue}else F={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},$===null?(h=$=F,c=r):$=$.next=F,we.lanes|=B,ta|=B;F=N.action,Oa&&a(r,F),r=N.hasEagerState?N.eagerState:a(r,F)}else B={lane:F,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},$===null?(h=$=B,c=r):$=$.next=B,we.lanes|=F,ta|=F;N=N.next}while(N!==null&&N!==t);if($===null?c=r:$.next=h,!Lt(r,e.memoizedState)&&(ot=!0,Q&&(a=li,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=$,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ms(e){var t=it(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);Lt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function td(e,t,a){var i=we,l=it(),r=He;if(r){if(a===void 0)throw Error(s(407));a=a()}else a=t();var c=!Lt((Ye||l).memoizedState,a);if(c&&(l.memoizedState=a,ot=!0),l=l.queue,Rs(id.bind(null,i,l,e),[e]),l.getSnapshot!==t||c||rt!==null&&rt.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},ad.bind(null,i,l,a,t),null),Qe===null)throw Error(s(349));r||(_n&127)!==0||nd(i,t,a)}return a}function nd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=br(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ad(e,t,a,i){t.value=a,t.getSnapshot=i,ld(t)&&rd(e)}function id(e,t,a){return a(function(){ld(t)&&rd(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Lt(e,a)}catch{return!0}}function rd(e){var t=xa(e,2);t!==null&&Dt(t,e,2)}function Ds(e){var t=At();if(typeof e=="function"){var a=e;if(e=a(),Oa){Gn(!0);try{a()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function od(e,t,a,i){return e.baseState=a,Cs(e,Ye,typeof i=="function"?i:On)}function qy(e,t,a,i,l){if(zr(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};j.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,sd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function sd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=j.T,c={};j.T=c;try{var h=a(l,i),$=j.S;$!==null&&$(c,h),cd(e,t,h)}catch(N){Hs(e,t,N)}finally{r!==null&&c.types!==null&&(r.types=c.types),j.T=r}}else try{r=a(l,i),cd(e,t,r)}catch(N){Hs(e,t,N)}}function cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){ud(e,t,i)},function(i){return Hs(e,t,i)}):ud(e,t,a)}function ud(e,t,a){t.status="fulfilled",t.value=a,fd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,sd(e,a)))}function Hs(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,fd(t),t=t.next;while(t!==i)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function pd(e,t){if(He){var a=Qe.formState;if(a!==null){e:{var i=we;if(He){if(Ze){t:{for(var l=Ze,r=It;l.nodeType!==8;){if(!r){l=null;break t}if(l=en(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ze=en(l.nextSibling),i=l.data==="F!";break e}}Qn(i)}i=!1}i&&(t=a[0])}}return a=At(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=i,a=Cd.bind(null,we,i),i.dispatch=a,i=Ds(!1),r=Gs.bind(null,we,!1,i.queue),i=At(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=qy.bind(null,we,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function gd(e){var t=it();return hd(t,Ye,e)}function hd(e,t,a){if(t=Cs(e,t,dd)[0],e=xr(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ll(t)}catch(c){throw c===ri?fr:c}else i=t;t=it();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(we.flags|=2048,fi(9,{destroy:void 0},Yy.bind(null,l,a),null)),[i,r,e]}function Yy(e,t){e.action=t}function md(e){var t=it(),a=Ye;if(a!==null)return hd(t,a,e);it(),t=t.memoizedState,a=it();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function fi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=we.updateQueue,t===null&&(t=br(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function yd(){return it().memoizedState}function $r(e,t,a,i){var l=At();we.flags|=e,l.memoizedState=fi(1|t,{destroy:void 0},a,i===void 0?null:i)}function wr(e,t,a,i){var l=it();i=i===void 0?null:i;var r=l.memoizedState.inst;Ye!==null&&i!==null&&Es(i,Ye.memoizedState.deps)?l.memoizedState=fi(t,r,a,i):(we.flags|=e,l.memoizedState=fi(1|t,r,a,i))}function vd(e,t){$r(8390656,8,e,t)}function Rs(e,t){wr(2048,8,e,t)}function Vy(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=br(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function bd(e){var t=it().memoizedState;return Vy({ref:t,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Sd(e,t){return wr(4,2,e,t)}function xd(e,t){return wr(4,4,e,t)}function $d(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,a){a=a!=null?a.concat([e]):null,wr(4,4,$d.bind(null,t,e),a)}function Ls(){}function zd(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Es(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Td(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Es(t,i[1]))return i[0];if(i=e(),Oa){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[i,t],i}function Ns(e,t,a){return a===void 0||(_n&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ep(),we.lanes|=e,ta|=e,a)}function Ed(e,t,a,i){return Lt(a,t)?a:si.current!==null?(e=Ns(e,a,i),Lt(e,t)||(ot=!0),e):(_n&42)===0||(_n&1073741824)!==0&&(Me&261930)===0?(ot=!0,e.memoizedState=a):(e=Ep(),we.lanes|=e,ta|=e,t)}function Ad(e,t,a,i,l){var r=u.p;u.p=r!==0&&8>r?r:8;var c=j.T,h={};j.T=h,Gs(e,!1,t,a);try{var $=l(),N=j.S;if(N!==null&&N(h,$),$!==null&&typeof $=="object"&&typeof $.then=="function"){var Q=Uy($,i);rl(e,t,Q,Yt(e))}else rl(e,t,i,Yt(e))}catch(F){rl(e,t,{then:function(){},status:"rejected",reason:F},Yt())}finally{u.p=r,c!==null&&h.types!==null&&(c.types=h.types),j.T=c}}function Xy(){}function Us(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=jd(e).queue;Ad(e,l,t,ie,a===null?Xy:function(){return _d(e),a(i)})}function jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:ie},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _d(e){var t=jd(e);t.next===null&&(t=e.alternate.memoizedState),rl(e,t.next.queue,{},Yt())}function Bs(){return St(wl)}function Od(){return it().memoizedState}function kd(){return it().memoizedState}function Qy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Yt();e=Wn(a);var i=Pn(t,e,a);i!==null&&(Dt(i,t,a),tl(i,t,a)),t={cache:hs()},e.payload=t;return}t=t.return}}function Zy(e,t,a){var i=Yt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zr(e)?Md(t,a):(a=is(e,t,a,i),a!==null&&(Dt(a,e,i),Dd(a,t,i)))}function Cd(e,t,a){var i=Yt();rl(e,t,a,i)}function rl(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zr(e))Md(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,h=r(c,a);if(l.hasEagerState=!0,l.eagerState=h,Lt(h,c))return ir(e,t,l,0),Qe===null&&ar(),!1}catch{}finally{}if(a=is(e,t,l,i),a!==null)return Dt(a,e,i),Dd(a,t,i),!0}return!1}function Gs(e,t,a,i){if(i={lane:2,revertLane:bc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},zr(e)){if(t)throw Error(s(479))}else t=is(e,a,i,2),t!==null&&Dt(t,e,2)}function zr(e){var t=e.alternate;return e===we||t!==null&&t===we}function Md(e,t){ci=yr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dd(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Nu(e,a)}}var ol={readContext:St,use:Sr,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};ol.useEffectEvent=et;var Hd={readContext:St,use:Sr,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:vd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,$r(4194308,4,$d.bind(null,t,e),a)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var a=At();t=t===void 0?null:t;var i=e();if(Oa){Gn(!0);try{e()}finally{Gn(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=At();if(a!==void 0){var l=a(t);if(Oa){Gn(!0);try{a(t)}finally{Gn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Zy.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:function(e){e=Ds(e);var t=e.queue,a=Cd.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ls,useDeferredValue:function(e,t){var a=At();return Ns(a,e,t)},useTransition:function(){var e=Ds(!1);return e=Ad.bind(null,we,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=we,l=At();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Qe===null)throw Error(s(349));(Me&127)!==0||nd(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,vd(id.bind(null,i,r,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},ad.bind(null,i,r,a,t),null),a},useId:function(){var e=At(),t=Qe.identifierPrefix;if(He){var a=hn,i=gn;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=vr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=By++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bs,useFormState:pd,useActionState:pd,useOptimistic:function(e){var t=At();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gs.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:ks,useCacheRefresh:function(){return At().memoizedState=Qy.bind(null,we)},useEffectEvent:function(e){var t=At(),a={impl:e};return t.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},qs={readContext:St,use:Sr,useCallback:zd,useContext:St,useEffect:Rs,useImperativeHandle:wd,useInsertionEffect:Sd,useLayoutEffect:xd,useMemo:Td,useReducer:xr,useRef:yd,useState:function(){return xr(On)},useDebugValue:Ls,useDeferredValue:function(e,t){var a=it();return Ed(a,Ye.memoizedState,e,t)},useTransition:function(){var e=xr(On)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:Bs,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var a=it();return od(a,Ye,e,t)},useMemoCache:ks,useCacheRefresh:kd};qs.useEffectEvent=bd;var Rd={readContext:St,use:Sr,useCallback:zd,useContext:St,useEffect:Rs,useImperativeHandle:wd,useInsertionEffect:Sd,useLayoutEffect:xd,useMemo:Td,useReducer:Ms,useRef:yd,useState:function(){return Ms(On)},useDebugValue:Ls,useDeferredValue:function(e,t){var a=it();return Ye===null?Ns(a,e,t):Ed(a,Ye.memoizedState,e,t)},useTransition:function(){var e=Ms(On)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:Bs,useFormState:md,useActionState:md,useOptimistic:function(e,t){var a=it();return Ye!==null?od(a,Ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ks,useCacheRefresh:kd};Rd.useEffectEvent=bd;function Ys(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:P({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Wn(i);l.payload=t,a!=null&&(l.callback=a),t=Pn(e,l,i),t!==null&&(Dt(t,e,i),tl(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Yt(),l=Wn(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Pn(e,l,i),t!==null&&(Dt(t,e,i),tl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Yt(),i=Wn(a);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,a),t!==null&&(Dt(t,e,a),tl(t,e,a))}};function Ld(e,t,a,i,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,c):t.prototype&&t.prototype.isPureReactComponent?!Zi(a,i)||!Zi(l,r):!0}function Nd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function ka(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Ud(e){nr(e)}function Bd(e){console.error(e)}function Gd(e){nr(e)}function Tr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xs(e,t,a){return a=Wn(a),a.tag=3,a.payload={element:null},a.callback=function(){Tr(e,t)},a}function Yd(e){return e=Wn(e),e.tag=3,e}function Vd(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){qd(t,a,i)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){qd(t,a,i),typeof l!="function"&&(na===null?na=new Set([this]):na.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function Ky(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ai(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 31:case 13:return Ft===null?Lr():a.alternate===null&&tt===0&&(tt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),mc(e,i,l)),!1;case 22:return a.flags|=65536,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),mc(e,i,l)),!1}throw Error(s(435,a.tag))}return mc(e,i,l),Lr(),!1}if(He)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==us&&(e=Error(s(422),{cause:i}),Pi(Wt(e,a)))):(i!==us&&(t=Error(s(423),{cause:i}),Pi(Wt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Wt(i,a),l=Xs(e.stateNode,i,l),xs(e,l),tt!==4&&(tt=2)),!1;var r=Error(s(520),{cause:i});if(r=Wt(r,a),hl===null?hl=[r]:hl.push(r),tt!==4&&(tt=2),t===null)return!0;i=Wt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Xs(a.stateNode,i,e),xs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(na===null||!na.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Yd(l),Vd(l,e,a,i),xs(a,l),!1}a=a.return}while(a!==null);return!1}var Qs=Error(s(461)),ot=!1;function xt(e,t,a,i){t.child=e===null?Kf(t,null,a,i):_a(t,e.child,a,i)}function Xd(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var c={};for(var h in i)h!=="ref"&&(c[h]=i[h])}else c=i;return Ta(t),i=As(e,t,a,c,r,l),h=js(),e!==null&&!ot?(_s(e,t,l),kn(e,t,l)):(He&&h&&ss(t),t.flags|=1,xt(e,t,i,l),t.child)}function Qd(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!ls(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Zd(e,t,r,i,l)):(e=rr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ec(e,l)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:Zi,a(c,i)&&e.ref===t.ref)return kn(e,t,l)}return t.flags|=1,e=Tn(r,i),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(Zi(r,i)&&e.ref===t.ref)if(ot=!1,t.pendingProps=i=r,ec(e,l))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,kn(e,t,l)}return Zs(e,t,a,i,l)}function Kd(e,t,a,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return Wd(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,r!==null?r.cachePool:null),r!==null?Jf(t,r):ws(),If(t);else return i=t.lanes=536870912,Wd(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(ur(t,r.cachePool),Jf(t,r),In(),t.memoizedState=null):(e!==null&&ur(t,null),ws(),In());return xt(e,t,l,a),t.child}function sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wd(e,t,a,i,l){var r=ys();return r=r===null?null:{parent:lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&ur(t,null),ws(),If(t),e!==null&&ai(e,t,i,!0),t.childLanes=l,null}function Er(e,t){return t=jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pd(e,t,a){return _a(t,e.child,null,a),e=Er(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Wy(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(i.mode==="hidden")return e=Er(t,i),t.lanes=536870912,sl(null,e);if(Ts(t),(e=Ze)?(e=sg(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:gn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},a=Mf(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Qn(t);return t.lanes=536870912,null}return Er(t,i)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Ts(t),l)if(t.flags&256)t.flags&=-257,t=Pd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ot||ai(e,t,a,!1),l=(a&e.childLanes)!==0,ot||l){if(i=Qe,i!==null&&(c=Uu(i,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,xa(e,c),Dt(i,e,c),Qs;Lr(),t=Pd(e,t,a)}else e=r.treeContext,Ze=en(c.nextSibling),bt=t,He=!0,Xn=null,It=!1,e!==null&&Rf(t,e),t=Er(t,i),t.flags|=4096;return t}return e=Tn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zs(e,t,a,i,l){return Ta(t),a=As(e,t,a,i,void 0,l),i=js(),e!==null&&!ot?(_s(e,t,l),kn(e,t,l)):(He&&i&&ss(t),t.flags|=1,xt(e,t,a,l),t.child)}function Jd(e,t,a,i,l,r){return Ta(t),t.updateQueue=null,a=ed(t,i,a,l),Ff(e),i=js(),e!==null&&!ot?(_s(e,t,r),kn(e,t,r)):(He&&i&&ss(t),t.flags|=1,xt(e,t,a,r),t.child)}function Id(e,t,a,i,l){if(Ta(t),t.stateNode===null){var r=Fa,c=a.contextType;typeof c=="object"&&c!==null&&(r=St(c)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},bs(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?St(c):Fa,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ys(t,a,c,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Vs.enqueueReplaceState(r,r.state,null),al(t,i,r,l),nl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,$=ka(a,h);r.props=$;var N=r.context,Q=a.contextType;c=Fa,typeof Q=="object"&&Q!==null&&(c=St(Q));var F=a.getDerivedStateFromProps;Q=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||N!==c)&&Nd(t,r,i,c),Kn=!1;var B=t.memoizedState;r.state=B,al(t,i,r,l),nl(),N=t.memoizedState,h||B!==N||Kn?(typeof F=="function"&&(Ys(t,a,F,i),N=t.memoizedState),($=Kn||Ld(t,a,$,i,B,N,c))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),r.props=i,r.state=N,r.context=c,i=$):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Ss(e,t),c=t.memoizedProps,Q=ka(a,c),r.props=Q,F=t.pendingProps,B=r.context,N=a.contextType,$=Fa,typeof N=="object"&&N!==null&&($=St(N)),h=a.getDerivedStateFromProps,(N=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==F||B!==$)&&Nd(t,r,i,$),Kn=!1,B=t.memoizedState,r.state=B,al(t,i,r,l),nl();var Y=t.memoizedState;c!==F||B!==Y||Kn||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof h=="function"&&(Ys(t,a,h,i),Y=t.memoizedState),(Q=Kn||Ld(t,a,Q,i,B,Y,$)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(N||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,Y,$),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,Y,$)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),r.props=i,r.state=Y,r.context=$,i=Q):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Ar(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=_a(t,e.child,null,l),t.child=_a(t,null,a,l)):xt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=kn(e,t,l),e}function Fd(e,t,a,i){return wa(),t.flags|=256,xt(e,t,a,i),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ws(e){return{baseLanes:e,cachePool:qf()}}function Ps(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function ep(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(l?Jn(t):In(),(e=Ze)?(e=sg(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:gn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},a=Mf(e),a.return=t,t.child=a,bt=t,Ze=null)):e=null,e===null)throw Qn(t);return Cc(e)?t.lanes=32:t.lanes=536870912,null}var h=i.children;return i=i.fallback,l?(In(),l=t.mode,h=jr({mode:"hidden",children:h},l),i=$a(i,l,a,null),h.return=t,i.return=t,h.sibling=i,t.child=h,i=t.child,i.memoizedState=Ws(a),i.childLanes=Ps(e,c,a),t.memoizedState=Ks,sl(null,i)):(Jn(t),Js(t,h))}var $=e.memoizedState;if($!==null&&(h=$.dehydrated,h!==null)){if(r)t.flags&256?(Jn(t),t.flags&=-257,t=Is(e,t,a)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),h=i.fallback,l=t.mode,i=jr({mode:"visible",children:i.children},l),h=$a(h,l,a,null),h.flags|=2,i.return=t,h.return=t,i.sibling=h,t.child=i,_a(t,e.child,null,a),i=t.child,i.memoizedState=Ws(a),i.childLanes=Ps(e,c,a),t.memoizedState=Ks,t=sl(null,i));else if(Jn(t),Cc(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var N=c.dgst;c=N,i=Error(s(419)),i.stack="",i.digest=c,Pi({value:i,source:null,stack:null}),t=Is(e,t,a)}else if(ot||ai(e,t,a,!1),c=(a&e.childLanes)!==0,ot||c){if(c=Qe,c!==null&&(i=Uu(c,a),i!==0&&i!==$.retryLane))throw $.retryLane=i,xa(e,i),Dt(c,e,i),Qs;kc(h)||Lr(),t=Is(e,t,a)}else kc(h)?(t.flags|=192,t.child=e.child,t=null):(e=$.treeContext,Ze=en(h.nextSibling),bt=t,He=!0,Xn=null,It=!1,e!==null&&Rf(t,e),t=Js(t,i.children),t.flags|=4096);return t}return l?(In(),h=i.fallback,l=t.mode,$=e.child,N=$.sibling,i=Tn($,{mode:"hidden",children:i.children}),i.subtreeFlags=$.subtreeFlags&65011712,N!==null?h=Tn(N,h):(h=$a(h,l,a,null),h.flags|=2),h.return=t,i.return=t,i.sibling=h,t.child=i,sl(null,i),i=t.child,h=e.child.memoizedState,h===null?h=Ws(a):(l=h.cachePool,l!==null?($=lt._currentValue,l=l.parent!==$?{parent:$,pool:$}:l):l=qf(),h={baseLanes:h.baseLanes|a,cachePool:l}),i.memoizedState=h,i.childLanes=Ps(e,c,a),t.memoizedState=Ks,sl(e.child,i)):(Jn(t),a=e.child,e=a.sibling,a=Tn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Js(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Is(e,t,a){return _a(t,e.child,null,a),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tp(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ps(e.return,t,a)}function Fs(e,t,a,i,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=l,c.treeForkCount=r)}function np(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var c=at.current,h=(c&2)!==0;if(h?(c=c&1|2,t.flags|=128):c&=1,U(at,c),xt(e,t,i,a),i=He?Wi:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tp(e,a,t);else if(e.tag===19)tp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&mr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Fs(t,!1,l,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&mr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Fs(t,!0,a,null,r,i);break;case"together":Fs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function kn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ai(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Tn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Tn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function Py(e,t,a){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Zn(t,lt,e.memoizedState.cache),wa();break;case 27:case 5:Se(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ts(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ep(e,t,a):(Jn(t),e=kn(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ai(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return np(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(at,at.current),i)break;return null;case 22:return t.lanes=0,Kd(e,t,a,t.pendingProps);case 24:Zn(t,lt,e.memoizedState.cache)}return kn(e,t,a)}function ap(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!ec(e,a)&&(t.flags&128)===0)return ot=!1,Py(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,He&&(t.flags&1048576)!==0&&Hf(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")ls(e)?(i=ka(e,i),t.tag=1,t=Id(null,t,e,i,a)):(t.tag=0,t=Zs(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===oe){t.tag=11,t=Xd(null,t,e,i,a);break e}else if(l===x){t.tag=14,t=Qd(null,t,e,i,a);break e}}throw t=W(e)||e,Error(s(306,t,""))}}return t;case 0:return Zs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=ka(i,t.pendingProps),Id(e,t,i,l,a);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,Ss(e,t),al(t,i,null,a);var c=t.memoizedState;if(i=c.cache,Zn(t,lt,i),i!==r.cache&&gs(t,[lt],a,!0),nl(),i=c.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Fd(e,t,i,a);break e}else if(i!==l){l=Wt(Error(s(424)),t),Pi(l),t=Fd(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=en(e.firstChild),bt=t,He=!0,Xn=null,It=!0,a=Kf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),i===l){t=kn(e,t,a);break e}xt(e,t,i,a)}t=t.child}return t;case 26:return Ar(e,t),e===null?(a=gg(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(a=t.type,e=t.pendingProps,i=Vr(K.current).createElement(a),i[vt]=t,i[jt]=e,$t(i,a,e),gt(i),t.stateNode=i):t.memoizedState=gg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&He&&(i=t.stateNode=fg(t.type,t.pendingProps,K.current),bt=t,It=!0,l=Ze,ra(t.type)?(Mc=l,Ze=en(i.firstChild)):Ze=l),xt(e,t,t.pendingProps.children,a),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((l=i=Ze)&&(i=E0(i,t.type,t.pendingProps,It),i!==null?(t.stateNode=i,bt=t,Ze=en(i.firstChild),It=!1,l=!0):l=!1),l||Qn(t)),Se(t),l=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,i=r.children,jc(l,r)?i=null:c!==null&&jc(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=As(e,t,Gy,null,null,a),wl._currentValue=l),Ar(e,t),xt(e,t,i,a),t.child;case 6:return e===null&&He&&((e=a=Ze)&&(a=A0(a,t.pendingProps,It),a!==null?(t.stateNode=a,bt=t,Ze=null,e=!0):e=!1),e||Qn(t)),null;case 13:return ep(e,t,a);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_a(t,null,i,a):xt(e,t,i,a),t.child;case 11:return Xd(e,t,t.type,t.pendingProps,a);case 7:return xt(e,t,t.pendingProps,a),t.child;case 8:return xt(e,t,t.pendingProps.children,a),t.child;case 12:return xt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Zn(t,t.type,i.value),xt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ta(t),l=St(l),i=i(l),t.flags|=1,xt(e,t,i,a),t.child;case 14:return Qd(e,t,t.type,t.pendingProps,a);case 15:return Zd(e,t,t.type,t.pendingProps,a);case 19:return np(e,t,a);case 31:return Wy(e,t,a);case 22:return Kd(e,t,a,t.pendingProps);case 24:return Ta(t),i=St(lt),e===null?(l=ys(),l===null&&(l=Qe,r=hs(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},bs(t),Zn(t,lt,l)):((e.lanes&a)!==0&&(Ss(e,t),al(t,null,null,a),nl()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Zn(t,lt,i)):(i=r.cache,Zn(t,lt,i),i!==l.cache&&gs(t,[lt],a,!0))),xt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Cn(e){e.flags|=4}function tc(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Op())e.flags|=8192;else throw ja=dr,vs}else e.flags&=-16777217}function ip(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bg(t))if(Op())e.flags|=8192;else throw ja=dr,vs}function _r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ru():536870912,e.lanes|=t,hi|=t)}function cl(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Jy(e,t,a){var i=t.pendingProps;switch(cs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),jn(lt),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fs())),Ke(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Cn(t),r!==null?(Ke(t),ip(t,r)):(Ke(t),tc(t,l,null,i,a))):r?r!==e.memoizedState?(Cn(t),Ke(t),ip(t,r)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Cn(t),Ke(t),tc(t,l,e,i,a)),null;case 27:if(Ae(t),a=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}e=H.current,ni(t)?Lf(t):(e=fg(l,i,a),t.stateNode=e,Cn(t))}return Ke(t),null;case 5:if(Ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(r=H.current,ni(t))Lf(t);else{var c=Vr(K.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?c.createElement(l,{is:i.is}):c.createElement(l)}}r[vt]=t,r[jt]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch($t(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cn(t)}}return Ke(t),tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=K.current,ni(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=bt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||eg(e.nodeValue,a)),e||Qn(t,!0)}else e=Vr(e).createTextNode(i),e[vt]=t,t.stateNode=e}return Ke(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=ni(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[vt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else a=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ni(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[vt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else l=fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),_r(t,t.updateQueue),Ke(t),null);case 4:return de(),e===null&&wc(t.stateNode.containerInfo),Ke(t),null;case 10:return jn(t.type),Ke(t),null;case 19:if(S(at),i=t.memoizedState,i===null)return Ke(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)cl(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=mr(e),r!==null){for(t.flags|=128,cl(i,!1),e=r.updateQueue,t.updateQueue=e,_r(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cf(a,e),a=a.sibling;return U(at,at.current&1|2),He&&En(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zt()>Dr&&(t.flags|=128,l=!0,cl(i,!1),t.lanes=4194304)}else{if(!l)if(e=mr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,_r(t,e),cl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!He)return Ke(t),null}else 2*zt()-i.renderingStartTime>Dr&&a!==536870912&&(t.flags|=128,l=!0,cl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zt(),e.sibling=null,a=at.current,U(at,l?a&1|2:a&1),He&&En(t,i.treeForkCount),e):(Ke(t),null);case 22:case 23:return Bt(t),zs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),a=t.updateQueue,a!==null&&_r(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&S(Ea),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),jn(lt),Ke(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Iy(e,t){switch(cs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(lt),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(at),null;case 4:return de(),null;case 10:return jn(t.type),null;case 22:case 23:return Bt(t),zs(),e!==null&&S(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jn(lt),null;case 25:return null;default:return null}}function lp(e,t){switch(cs(t),t.tag){case 3:jn(lt),de();break;case 26:case 27:case 5:Ae(t);break;case 4:de();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:S(at);break;case 10:jn(t.type);break;case 22:case 23:Bt(t),zs(),e!==null&&S(Ea);break;case 24:jn(lt)}}function ul(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,c=a.inst;i=r(),c.destroy=i}a=a.next}while(a!==l)}}catch(h){qe(t,t.return,h)}}function Fn(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var c=i.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,l=t;var $=a,N=h;try{N()}catch(Q){qe(l,$,Q)}}}i=i.next}while(i!==r)}}catch(Q){qe(t,t.return,Q)}}function rp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Pf(t,a)}catch(i){qe(e,e.return,i)}}}function op(e,t,a){a.props=ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){qe(e,t,i)}}function fl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){qe(e,t,l)}}function mn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(e,t,l)}else a.current=null}function sp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){qe(e,e.return,l)}}function nc(e,t,a){try{var i=e.stateNode;S0(i,e.type,a,t),i[jt]=t}catch(l){qe(e,e.return,l)}}function cp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=wn));else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,a),e=e.sibling;e!==null;)ic(e,t,a),e=e.sibling}function Or(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Or(e,t,a),e=e.sibling;e!==null;)Or(e,t,a),e=e.sibling}function up(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$t(t,i,a),t[vt]=e,t[jt]=a}catch(r){qe(e,e.return,r)}}var Mn=!1,st=!1,lc=!1,fp=typeof WeakSet=="function"?WeakSet:Set,ht=null;function Fy(e,t){if(e=e.containerInfo,Ec=Jr,e=wf(e),Io(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,h=-1,$=-1,N=0,Q=0,F=e,B=null;t:for(;;){for(var Y;F!==a||l!==0&&F.nodeType!==3||(h=c+l),F!==r||i!==0&&F.nodeType!==3||($=c+i),F.nodeType===3&&(c+=F.nodeValue.length),(Y=F.firstChild)!==null;)B=F,F=Y;for(;;){if(F===e)break t;if(B===a&&++N===l&&(h=c),B===r&&++Q===i&&($=c),(Y=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=Y}a=h===-1||$===-1?null:{start:h,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},Jr=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var fe=ka(a.type,l);e=i.getSnapshotBeforeUpdate(fe,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ve){qe(a,a.return,ve)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Oc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function dp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Hn(e,a),i&4&&ul(5,a);break;case 1:if(Hn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){qe(a,a.return,c)}else{var l=ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){qe(a,a.return,c)}}i&64&&rp(a),i&512&&fl(a,a.return);break;case 3:if(Hn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Pf(e,t)}catch(c){qe(a,a.return,c)}}break;case 27:t===null&&i&4&&up(a);case 26:case 5:Hn(e,a),t===null&&i&4&&sp(a),i&512&&fl(a,a.return);break;case 12:Hn(e,a);break;case 31:Hn(e,a),i&4&&hp(e,a);break;case 13:Hn(e,a),i&4&&mp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=s0.bind(null,a),j0(e,a))));break;case 22:if(i=a.memoizedState!==null||Mn,!i){t=t!==null&&t.memoizedState!==null||st,l=Mn;var r=st;Mn=i,(st=t)&&!r?Rn(e,a,(a.subtreeFlags&8772)!==0):Hn(e,a),Mn=l,st=r}break;case 30:break;default:Hn(e,a)}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ho(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Ot=!1;function Dn(e,t,a){for(a=a.child;a!==null;)gp(e,t,a),a=a.sibling}function gp(e,t,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 26:st||mn(a,t),Dn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||mn(a,t);var i=Pe,l=Ot;ra(a.type)&&(Pe=a.stateNode,Ot=!1),Dn(e,t,a),Sl(a.stateNode),Pe=i,Ot=l;break;case 5:st||mn(a,t);case 6:if(i=Pe,l=Ot,Pe=null,Dn(e,t,a),Pe=i,Ot=l,Pe!==null)if(Ot)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(r){qe(a,t,r)}else try{Pe.removeChild(a.stateNode)}catch(r){qe(a,t,r)}break;case 18:Pe!==null&&(Ot?(e=Pe,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wi(e)):rg(Pe,a.stateNode));break;case 4:i=Pe,l=Ot,Pe=a.stateNode.containerInfo,Ot=!0,Dn(e,t,a),Pe=i,Ot=l;break;case 0:case 11:case 14:case 15:Fn(2,a,t),st||Fn(4,a,t),Dn(e,t,a);break;case 1:st||(mn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&op(a,t,i)),Dn(e,t,a);break;case 21:Dn(e,t,a);break;case 22:st=(i=st)||a.memoizedState!==null,Dn(e,t,a),st=i;break;default:Dn(e,t,a)}}function hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(a){qe(t,t.return,a)}}}function mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(a){qe(t,t.return,a)}}function e0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fp),t;default:throw Error(s(435,e.tag))}}function kr(e,t){var a=e0(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=c0.bind(null,e,i);i.then(l,l)}})}function kt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 27:if(ra(h.type)){Pe=h.stateNode,Ot=!1;break e}break;case 5:Pe=h.stateNode,Ot=!1;break e;case 3:case 4:Pe=h.stateNode.containerInfo,Ot=!0;break e}h=h.return}if(Pe===null)throw Error(s(160));gp(r,c,l),Pe=null,Ot=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}var on=null;function yp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Ct(e),i&4&&(Fn(3,e,e.return),ul(3,e),Fn(5,e,e.return));break;case 1:kt(t,e),Ct(e),i&512&&(st||a===null||mn(a,a.return)),i&64&&Mn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=on;if(kt(t,e),Ct(e),i&512&&(st||a===null||mn(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ni]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),$t(r,i,a),r[vt]=e,gt(r),i=r;break e;case"link":var c=yg("link","href",l).get(i+(a.href||""));if(c){for(var h=0;h<c.length;h++)if(r=c[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;case"meta":if(c=yg("meta","content",l).get(i+(a.content||""))){for(h=0;h<c.length;h++)if(r=c[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(h,1);break t}}r=l.createElement(i),$t(r,i,a),l.head.appendChild(r);break;default:throw Error(s(468,i))}r[vt]=e,gt(r),i=r}e.stateNode=i}else vg(l,e.type,e.stateNode);else e.stateNode=mg(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?vg(l,e.type,e.stateNode):mg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&nc(e,e.memoizedProps,a.memoizedProps)}break;case 27:kt(t,e),Ct(e),i&512&&(st||a===null||mn(a,a.return)),a!==null&&i&4&&nc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kt(t,e),Ct(e),i&512&&(st||a===null||mn(a,a.return)),e.flags&32){l=e.stateNode;try{Qa(l,"")}catch(fe){qe(e,e.return,fe)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,nc(e,l,a!==null?a.memoizedProps:l)),i&1024&&(lc=!0);break;case 6:if(kt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(fe){qe(e,e.return,fe)}}break;case 3:if(Zr=null,l=on,on=Xr(t.containerInfo),kt(t,e),on=l,Ct(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(fe){qe(e,e.return,fe)}lc&&(lc=!1,vp(e));break;case 4:i=on,on=Xr(e.stateNode.containerInfo),kt(t,e),Ct(e),on=i;break;case 12:kt(t,e),Ct(e);break;case 31:kt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 13:kt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mr=zt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 22:l=e.memoizedState!==null;var $=a!==null&&a.memoizedState!==null,N=Mn,Q=st;if(Mn=N||l,st=Q||$,kt(t,e),st=Q,Mn=N,Ct(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||$||Mn||st||Ca(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){$=a=t;try{if(r=$.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=$.stateNode;var F=$.memoizedProps.style,B=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(fe){qe($,$.return,fe)}}}else if(t.tag===6){if(a===null){$=t;try{$.stateNode.nodeValue=l?"":$.memoizedProps}catch(fe){qe($,$.return,fe)}}}else if(t.tag===18){if(a===null){$=t;try{var Y=$.stateNode;l?og(Y,!0):og($.stateNode,!1)}catch(fe){qe($,$.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,kr(e,a))));break;case 19:kt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kr(e,i)));break;case 30:break;case 21:break;default:kt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(cp(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,r=ac(e);Or(e,r,l);break;case 5:var c=a.stateNode;a.flags&32&&(Qa(c,""),a.flags&=-33);var h=ac(e);Or(e,h,c);break;case 3:case 4:var $=a.stateNode.containerInfo,N=ac(e);ic(e,N,$);break;default:throw Error(s(161))}}catch(Q){qe(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dp(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),Ca(t);break;case 1:mn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&op(t,t.return,a),Ca(t);break;case 27:Sl(t.stateNode);case 26:case 5:mn(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function Rn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:Rn(l,r,a),ul(4,r);break;case 1:if(Rn(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){qe(i,i.return,N)}if(i=r,l=i.updateQueue,l!==null){var h=i.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)Wf($[l],h)}catch(N){qe(i,i.return,N)}}a&&c&64&&rp(r),fl(r,r.return);break;case 27:up(r);case 26:case 5:Rn(l,r,a),a&&i===null&&c&4&&sp(r),fl(r,r.return);break;case 12:Rn(l,r,a);break;case 31:Rn(l,r,a),a&&c&4&&hp(l,r);break;case 13:Rn(l,r,a),a&&c&4&&mp(l,r);break;case 22:r.memoizedState===null&&Rn(l,r,a),fl(r,r.return);break;case 30:break;default:Rn(l,r,a)}t=t.sibling}}function rc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ji(a))}function oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e))}function sn(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bp(e,t,a,i),t=t.sibling}function bp(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,a,i),l&2048&&ul(9,t);break;case 1:sn(e,t,a,i);break;case 3:sn(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ji(e)));break;case 12:if(l&2048){sn(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,h=r.onPostCommit;typeof h=="function"&&h(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch($){qe(t,t.return,$)}}else sn(e,t,a,i);break;case 31:sn(e,t,a,i);break;case 13:sn(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?sn(e,t,a,i):dl(e,t):r._visibility&2?sn(e,t,a,i):(r._visibility|=2,di(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&rc(c,t);break;case 24:sn(e,t,a,i),l&2048&&oc(t.alternate,t);break;default:sn(e,t,a,i)}}function di(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,h=a,$=i,N=c.flags;switch(c.tag){case 0:case 11:case 15:di(r,c,h,$,l),ul(8,c);break;case 23:break;case 22:var Q=c.stateNode;c.memoizedState!==null?Q._visibility&2?di(r,c,h,$,l):dl(r,c):(Q._visibility|=2,di(r,c,h,$,l)),l&&N&2048&&rc(c.alternate,c);break;case 24:di(r,c,h,$,l),l&&N&2048&&oc(c.alternate,c);break;default:di(r,c,h,$,l)}t=t.sibling}}function dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:dl(a,i),l&2048&&rc(i.alternate,i);break;case 24:dl(a,i),l&2048&&oc(i.alternate,i);break;default:dl(a,i)}t=t.sibling}}var pl=8192;function pi(e,t,a){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)Sp(e,t,a),e=e.sibling}function Sp(e,t,a){switch(e.tag){case 26:pi(e,t,a),e.flags&pl&&e.memoizedState!==null&&B0(a,on,e.memoizedState,e.memoizedProps);break;case 5:pi(e,t,a);break;case 3:case 4:var i=on;on=Xr(e.stateNode.containerInfo),pi(e,t,a),on=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pl,pl=16777216,pi(e,t,a),pl=i):pi(e,t,a));break;default:pi(e,t,a)}}function xp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,wp(i,e)}xp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$p(e),e=e.sibling}function $p(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cr(e)):gl(e);break;default:gl(e)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ht=i,wp(i,e)}xp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),Cr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Cr(t));break;default:Cr(t)}e=e.sibling}}function wp(e,t){for(;ht!==null;){var a=ht;switch(a.tag){case 0:case 11:case 15:Fn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ht=i;else e:for(a=e;ht!==null;){i=ht;var l=i.sibling,r=i.return;if(pp(i),i===a){ht=null;break e}if(l!==null){l.return=r,ht=l;break e}ht=r}}}var t0={getCacheForType:function(e){var t=St(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(lt).controller.signal}},n0=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Qe=null,Oe=null,Me=0,Ge=0,Gt=null,ea=!1,gi=!1,sc=!1,Ln=0,tt=0,ta=0,Ma=0,cc=0,qt=0,hi=0,hl=null,Mt=null,uc=!1,Mr=0,zp=0,Dr=1/0,Hr=null,na=null,ft=0,aa=null,mi=null,Nn=0,fc=0,dc=null,Tp=null,ml=0,pc=null;function Yt(){return(Ue&2)!==0&&Me!==0?Me&-Me:j.T!==null?bc():Bu()}function Ep(){if(qt===0)if((Me&536870912)===0||He){var e=Yl;Yl<<=1,(Yl&3932160)===0&&(Yl=262144),qt=e}else qt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),qt}function Dt(e,t,a){(e===Qe&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(yi(e,0),ia(e,Me,qt,!1)),Li(e,a),((Ue&2)===0||e!==Qe)&&(e===Qe&&((Ue&2)===0&&(Ma|=a),tt===4&&ia(e,Me,qt,!1)),yn(e))}function Ap(e,t,a){if((Ue&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ri(e,t),l=i?l0(e,t):hc(e,t,!0),r=i;do{if(l===0){gi&&!i&&ia(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!a0(a)){l=hc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var h=e;l=hl;var $=h.current.memoizedState.isDehydrated;if($&&(yi(h,c).flags|=256),c=hc(h,c,!1),c!==2){if(sc&&!$){h.errorRecoveryDisabledLanes|=r,Ma|=r,l=4;break e}r=Mt,Mt=l,r!==null&&(Mt===null?Mt=r:Mt.push.apply(Mt,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){yi(e,0),ia(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ia(i,t,qt,!ea);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Mr+300-zt(),10<l)){if(ia(i,t,qt,!ea),Xl(i,0,!0)!==0)break e;Nn=t,i.timeoutHandle=ig(jp.bind(null,i,a,Mt,Hr,uc,t,qt,Ma,hi,ea,r,"Throttled",-0,0),l);break e}jp(i,a,Mt,Hr,uc,t,qt,Ma,hi,ea,r,null,-0,0)}}break}while(!0);yn(e)}function jp(e,t,a,i,l,r,c,h,$,N,Q,F,B,Y){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},Sp(t,r,F);var fe=(r&62914560)===r?Mr-zt():(r&4194048)===r?zp-zt():0;if(fe=G0(F,fe),fe!==null){Nn=r,e.cancelPendingCommit=fe(Rp.bind(null,e,t,r,a,i,l,c,h,$,Q,F,null,B,Y)),ia(e,r,c,!N);return}}Rp(e,t,r,a,i,l,c,h,$)}function a0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!Lt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,a,i){t&=~cc,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-Rt(l),c=1<<r;i[r]=-1,l&=~c}a!==0&&Lu(e,a,t)}function Rr(){return(Ue&6)===0?(yl(0),!1):!0}function gc(){if(Oe!==null){if(Ge===0)var e=Oe.return;else e=Oe,An=za=null,Os(e),oi=null,Fi=0,e=Oe;for(;e!==null;)lp(e.alternate,e),e=e.return;Oe=null}}function yi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,w0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nn=0,gc(),Qe=e,Oe=a=Tn(e.current,null),Me=t,Ge=0,Gt=null,ea=!1,gi=Ri(e,t),sc=!1,hi=qt=cc=Ma=ta=tt=0,Mt=hl=null,uc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Rt(i),r=1<<l;t|=e[l],i&=~r}return Ln=t,ar(),a}function _p(e,t){we=null,j.H=ol,t===ri||t===fr?(t=Xf(),Ge=3):t===vs?(t=Xf(),Ge=4):Ge=t===Qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Oe===null&&(tt=1,Tr(e,Wt(t,e.current)))}function Op(){var e=Ut.current;return e===null?!0:(Me&4194048)===Me?Ft===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Ft:!1}function kp(){var e=j.H;return j.H=ol,e===null?ol:e}function Cp(){var e=j.A;return j.A=t0,e}function Lr(){tt=4,ea||(Me&4194048)!==Me&&Ut.current!==null||(gi=!0),(ta&134217727)===0&&(Ma&134217727)===0||Qe===null||ia(Qe,Me,qt,!1)}function hc(e,t,a){var i=Ue;Ue|=2;var l=kp(),r=Cp();(Qe!==e||Me!==t)&&(Hr=null,yi(e,t)),t=!1;var c=tt;e:do try{if(Ge!==0&&Oe!==null){var h=Oe,$=Gt;switch(Ge){case 8:gc(),c=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var N=Ge;if(Ge=0,Gt=null,vi(e,h,$,N),a&&gi){c=0;break e}break;default:N=Ge,Ge=0,Gt=null,vi(e,h,$,N)}}i0(),c=tt;break}catch(Q){_p(e,Q)}while(!0);return t&&e.shellSuspendCounter++,An=za=null,Ue=i,j.H=l,j.A=r,Oe===null&&(Qe=null,Me=0,ar()),c}function i0(){for(;Oe!==null;)Mp(Oe)}function l0(e,t){var a=Ue;Ue|=2;var i=kp(),l=Cp();Qe!==e||Me!==t?(Hr=null,Dr=zt()+500,yi(e,t)):gi=Ri(e,t);e:do try{if(Ge!==0&&Oe!==null){t=Oe;var r=Gt;t:switch(Ge){case 1:Ge=0,Gt=null,vi(e,t,r,1);break;case 2:case 9:if(Yf(r)){Ge=0,Gt=null,Dp(t);break}t=function(){Ge!==2&&Ge!==9||Qe!==e||(Ge=7),yn(e)},r.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Yf(r)?(Ge=0,Gt=null,Dp(t)):(Ge=0,Gt=null,vi(e,t,r,7));break;case 5:var c=null;switch(Oe.tag){case 26:c=Oe.memoizedState;case 5:case 27:var h=Oe;if(c?bg(c):h.stateNode.complete){Ge=0,Gt=null;var $=h.sibling;if($!==null)Oe=$;else{var N=h.return;N!==null?(Oe=N,Nr(N)):Oe=null}break t}}Ge=0,Gt=null,vi(e,t,r,5);break;case 6:Ge=0,Gt=null,vi(e,t,r,6);break;case 8:gc(),tt=6;break e;default:throw Error(s(462))}}r0();break}catch(Q){_p(e,Q)}while(!0);return An=za=null,j.H=i,j.A=l,Ue=a,Oe!==null?0:(Qe=null,Me=0,ar(),tt)}function r0(){for(;Oe!==null&&!xn();)Mp(Oe)}function Mp(e){var t=ap(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,t===null?Nr(e):Oe=t}function Dp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Jd(a,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Jd(a,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Os(t);default:lp(a,t),t=Oe=Cf(t,Ln),t=ap(a,t,Ln)}e.memoizedProps=e.pendingProps,t===null?Nr(e):Oe=t}function vi(e,t,a,i){An=za=null,Os(t),oi=null,Fi=0;var l=t.return;try{if(Ky(e,l,t,a,Me)){tt=1,Tr(e,Wt(a,e.current)),Oe=null;return}}catch(r){if(l!==null)throw Oe=l,r;tt=1,Tr(e,Wt(a,e.current)),Oe=null;return}t.flags&32768?(He||i===1?e=!0:gi||(Me&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Hp(t,e)):Nr(t)}function Nr(e){var t=e;do{if((t.flags&32768)!==0){Hp(t,ea);return}e=t.return;var a=Jy(t.alternate,t,Ln);if(a!==null){Oe=a;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);tt===0&&(tt=5)}function Hp(e,t){do{var a=Iy(e.alternate,e);if(a!==null){a.flags&=32767,Oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Oe=e;return}Oe=e=a}while(e!==null);tt=6,Oe=null}function Rp(e,t,a,i,l,r,c,h,$){e.cancelPendingCommit=null;do Ur();while(ft!==0);if((Ue&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=as,Um(e,a,r,c,h,$),e===Qe&&(Oe=Qe=null,Me=0),mi=t,aa=e,Nn=a,fc=r,dc=l,Tp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u0(pn,function(){return Gp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,l=u.p,u.p=2,c=Ue,Ue|=4;try{Fy(e,t,a)}finally{Ue=c,u.p=l,j.T=i}}ft=1,Lp(),Np(),Up()}}function Lp(){if(ft===1){ft=0;var e=aa,t=mi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var i=u.p;u.p=2;var l=Ue;Ue|=4;try{yp(t,e);var r=Ac,c=wf(e.containerInfo),h=r.focusedElem,$=r.selectionRange;if(c!==h&&h&&h.ownerDocument&&$f(h.ownerDocument.documentElement,h)){if($!==null&&Io(h)){var N=$.start,Q=$.end;if(Q===void 0&&(Q=N),"selectionStart"in h)h.selectionStart=N,h.selectionEnd=Math.min(Q,h.value.length);else{var F=h.ownerDocument||document,B=F&&F.defaultView||window;if(B.getSelection){var Y=B.getSelection(),fe=h.textContent.length,ve=Math.min($.start,fe),Xe=$.end===void 0?ve:Math.min($.end,fe);!Y.extend&&ve>Xe&&(c=Xe,Xe=ve,ve=c);var C=xf(h,ve),A=xf(h,Xe);if(C&&A&&(Y.rangeCount!==1||Y.anchorNode!==C.node||Y.anchorOffset!==C.offset||Y.focusNode!==A.node||Y.focusOffset!==A.offset)){var L=F.createRange();L.setStart(C.node,C.offset),Y.removeAllRanges(),ve>Xe?(Y.addRange(L),Y.extend(A.node,A.offset)):(L.setEnd(A.node,A.offset),Y.addRange(L))}}}}for(F=[],Y=h;Y=Y.parentNode;)Y.nodeType===1&&F.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var I=F[h];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Jr=!!Ec,Ac=Ec=null}finally{Ue=l,u.p=i,j.T=a}}e.current=t,ft=2}}function Np(){if(ft===2){ft=0;var e=aa,t=mi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var i=u.p;u.p=2;var l=Ue;Ue|=4;try{dp(e,t.alternate,t)}finally{Ue=l,u.p=i,j.T=a}}ft=3}}function Up(){if(ft===4||ft===3){ft=0,Ua();var e=aa,t=mi,a=Nn,i=Tp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,mi=aa=null,Bp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(na=null),Mo(a),t=t.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=j.T,l=u.p,u.p=2,j.T=null;try{for(var r=e.onRecoverableError,c=0;c<i.length;c++){var h=i[c];r(h.value,{componentStack:h.stack})}}finally{j.T=t,u.p=l}}(Nn&3)!==0&&Ur(),yn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===pc?ml++:(ml=0,pc=e):ml=0,yl(0)}}function Bp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ji(t)))}function Ur(){return Lp(),Np(),Up(),Gp()}function Gp(){if(ft!==5)return!1;var e=aa,t=fc;fc=0;var a=Mo(Nn),i=j.T,l=u.p;try{u.p=32>a?32:a,j.T=null,a=dc,dc=null;var r=aa,c=Nn;if(ft=0,mi=aa=null,Nn=0,(Ue&6)!==0)throw Error(s(331));var h=Ue;if(Ue|=4,$p(r.current),bp(r,r.current,c,a),Ue=h,yl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Hi,r)}catch{}return!0}finally{u.p=l,j.T=i,Bp(e,t)}}function qp(e,t,a){t=Wt(a,t),t=Xs(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Li(e,2),yn(e))}function qe(e,t,a){if(e.tag===3)qp(e,e,a);else for(;t!==null;){if(t.tag===3){qp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){e=Wt(a,e),a=Yd(2),i=Pn(t,a,2),i!==null&&(Vd(a,i,t,e),Li(i,2),yn(i));break}}t=t.return}}function mc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new n0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(sc=!0,l.add(a),e=o0.bind(null,e,t,a),t.then(e,e))}function o0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Me&a)===a&&(tt===4||tt===3&&(Me&62914560)===Me&&300>zt()-Mr?(Ue&2)===0&&yi(e,0):cc|=a,hi===Me&&(hi=0)),yn(e)}function Yp(e,t){t===0&&(t=Ru()),e=xa(e,t),e!==null&&(Li(e,t),yn(e))}function s0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Yp(e,a)}function c0(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Yp(e,a)}function u0(e,t){return nt(e,t)}var Br=null,bi=null,yc=!1,Gr=!1,vc=!1,la=0;function yn(e){e!==bi&&e.next===null&&(bi===null?Br=bi=e:bi=bi.next=e),Gr=!0,yc||(yc=!0,d0())}function yl(e,t){if(!vc&&Gr){vc=!0;do for(var a=!1,i=Br;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var c=i.suspendedLanes,h=i.pingedLanes;r=(1<<31-Rt(42|e)+1)-1,r&=l&~(c&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Zp(i,r))}else r=Me,r=Xl(i,i===Qe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ri(i,r)||(a=!0,Zp(i,r));i=i.next}while(a);vc=!1}}function f0(){Vp()}function Vp(){Gr=yc=!1;var e=0;la!==0&&$0()&&(e=la);for(var t=zt(),a=null,i=Br;i!==null;){var l=i.next,r=Xp(i,t);r===0?(i.next=null,a===null?Br=l:a.next=l,l===null&&(bi=a)):(a=i,(e!==0||(r&3)!==0)&&(Gr=!0)),i=l}ft!==0&&ft!==5||yl(e),la!==0&&(la=0)}function Xp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-Rt(r),h=1<<c,$=l[c];$===-1?((h&a)===0||(h&i)!==0)&&(l[c]=Nm(h,t)):$<=t&&(e.expiredLanes|=h),r&=~h}if(t=Qe,a=Me,a=Xl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ri(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&yt(i),Mo(a)){case 2:case 8:a=ln;break;case 32:a=pn;break;case 268435456:a=Hu;break;default:a=pn}return i=Qp.bind(null,e),a=nt(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&yt(i),e.callbackPriority=2,e.callbackNode=null,2}function Qp(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ur()&&e.callbackNode!==a)return null;var i=Me;return i=Xl(e,e===Qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ap(e,i,t),Xp(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Qp.bind(null,e):null)}function Zp(e,t){if(Ur())return null;Ap(e,t,!0)}function d0(){z0(function(){(Ue&6)!==0?nt(Gl,f0):Vp()})}function bc(){if(la===0){var e=ii;e===0&&(e=ql,ql<<=1,(ql&261888)===0&&(ql=256)),la=e}return la}function Kp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(""+e)}function Wp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function p0(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Kp((l[jt]||null).action),c=i.submitter;c&&(t=(t=c[jt]||null)?Kp(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var h=new Fl("action","action",null,i,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var $=c?Wp(l,c):new FormData(l);Us(a,{pending:!0,data:$,method:l.method,action:r},null,$)}}else typeof r=="function"&&(h.preventDefault(),$=c?Wp(l,c):new FormData(l),Us(a,{pending:!0,data:$,method:l.method,action:r},r,$))},currentTarget:l}]})}}for(var Sc=0;Sc<ns.length;Sc++){var xc=ns[Sc],g0=xc.toLowerCase(),h0=xc[0].toUpperCase()+xc.slice(1);rn(g0,"on"+h0)}rn(Ef,"onAnimationEnd"),rn(Af,"onAnimationIteration"),rn(jf,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(ky,"onTransitionRun"),rn(Cy,"onTransitionStart"),rn(My,"onTransitionCancel"),rn(_f,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function Pp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var c=i.length-1;0<=c;c--){var h=i[c],$=h.instance,N=h.currentTarget;if(h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(Q){nr(Q)}l.currentTarget=null,r=$}else for(c=0;c<i.length;c++){if(h=i[c],$=h.instance,N=h.currentTarget,h=h.listener,$!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=N;try{r(l)}catch(Q){nr(Q)}l.currentTarget=null,r=$}}}}function ke(e,t){var a=t[Do];a===void 0&&(a=t[Do]=new Set);var i=e+"__bubble";a.has(i)||(Jp(t,e,2,!1),a.add(i))}function $c(e,t,a){var i=0;t&&(i|=4),Jp(a,e,i,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[qr]){e[qr]=!0,Yu.forEach(function(a){a!=="selectionchange"&&(m0.has(a)||$c(a,!1,e),$c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,$c("selectionchange",!1,t))}}function Jp(e,t,a,i){switch(Eg(t)){case 2:var l=V0;break;case 8:l=X0;break;default:l=Nc}a=l.bind(null,t,a,e),l=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function zc(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var h=i.stateNode.containerInfo;if(h===l)break;if(c===4)for(c=i.return;c!==null;){var $=c.tag;if(($===3||$===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;h!==null;){if(c=Ga(h),c===null)return;if($=c.tag,$===5||$===6||$===26||$===27){i=r=c;continue e}h=h.parentNode}}i=i.return}tf(function(){var N=r,Q=Go(a),F=[];e:{var B=Of.get(e);if(B!==void 0){var Y=Fl,fe=e;switch(e){case"keypress":if(Jl(a)===0)break e;case"keydown":case"keyup":Y=cy;break;case"focusin":fe="focus",Y=Zo;break;case"focusout":fe="blur",Y=Zo;break;case"beforeblur":case"afterblur":Y=Zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=dy;break;case Ef:case Af:case jf:Y=ey;break;case _f:Y=gy;break;case"scroll":case"scrollend":Y=Wm;break;case"wheel":Y=my;break;case"copy":case"cut":case"paste":Y=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=of;break;case"toggle":case"beforetoggle":Y=vy}var ve=(t&4)!==0,Xe=!ve&&(e==="scroll"||e==="scrollend"),C=ve?B!==null?B+"Capture":null:B;ve=[];for(var A=N,L;A!==null;){var I=A;if(L=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||L===null||C===null||(I=Bi(A,C),I!=null&&ve.push(bl(A,I,L))),Xe)break;A=A.return}0<ve.length&&(B=new Y(B,fe,null,a,Q),F.push({event:B,listeners:ve}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&a!==Bo&&(fe=a.relatedTarget||a.fromElement)&&(Ga(fe)||fe[Ba]))break e;if((Y||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(fe=a.relatedTarget||a.toElement,Y=N,fe=fe?Ga(fe):null,fe!==null&&(Xe=b(fe),ve=fe.tag,fe!==Xe||ve!==5&&ve!==27&&ve!==6)&&(fe=null)):(Y=null,fe=N),Y!==fe)){if(ve=lf,I="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ve=of,I="onPointerLeave",C="onPointerEnter",A="pointer"),Xe=Y==null?B:Ui(Y),L=fe==null?B:Ui(fe),B=new ve(I,A+"leave",Y,a,Q),B.target=Xe,B.relatedTarget=L,I=null,Ga(Q)===N&&(ve=new ve(C,A+"enter",fe,a,Q),ve.target=L,ve.relatedTarget=Xe,I=ve),Xe=I,Y&&fe)t:{for(ve=y0,C=Y,A=fe,L=0,I=C;I;I=ve(I))L++;I=0;for(var ye=A;ye;ye=ve(ye))I++;for(;0<L-I;)C=ve(C),L--;for(;0<I-L;)A=ve(A),I--;for(;L--;){if(C===A||A!==null&&C===A.alternate){ve=C;break t}C=ve(C),A=ve(A)}ve=null}else ve=null;Y!==null&&Ip(F,B,Y,ve,!1),fe!==null&&Xe!==null&&Ip(F,Xe,fe,ve,!0)}}e:{if(B=N?Ui(N):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var Le=hf;else if(pf(B))if(mf)Le=jy;else{Le=Ey;var ge=Ty}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?N&&Uo(N.elementType)&&(Le=hf):Le=Ay;if(Le&&(Le=Le(e,N))){gf(F,Le,a,Q);break e}ge&&ge(e,B,N),e==="focusout"&&N&&B.type==="number"&&N.memoizedProps.value!=null&&No(B,"number",B.value)}switch(ge=N?Ui(N):window,e){case"focusin":(pf(ge)||ge.contentEditable==="true")&&(Pa=ge,Fo=N,Ki=null);break;case"focusout":Ki=Fo=Pa=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,zf(F,a,Q);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":zf(F,a,Q)}var Te;if(Wo)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Wa?ff(e,a)&&(De="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(sf&&a.locale!=="ko"&&(Wa||De!=="onCompositionStart"?De==="onCompositionEnd"&&Wa&&(Te=nf()):(Yn=Q,Vo="value"in Yn?Yn.value:Yn.textContent,Wa=!0)),ge=Yr(N,De),0<ge.length&&(De=new rf(De,e,null,a,Q),F.push({event:De,listeners:ge}),Te?De.data=Te:(Te=df(a),Te!==null&&(De.data=Te)))),(Te=Sy?xy(e,a):$y(e,a))&&(De=Yr(N,"onBeforeInput"),0<De.length&&(ge=new rf("onBeforeInput","beforeinput",null,a,Q),F.push({event:ge,listeners:De}),ge.data=Te)),p0(F,e,N,a,Q)}Pp(F,t)})}function bl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yr(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Bi(e,a),l!=null&&i.unshift(bl(e,l,r)),l=Bi(e,t),l!=null&&i.push(bl(e,l,r))),e.tag===3)return i;e=e.return}return[]}function y0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,t,a,i,l){for(var r=t._reactName,c=[];a!==null&&a!==i;){var h=a,$=h.alternate,N=h.stateNode;if(h=h.tag,$!==null&&$===i)break;h!==5&&h!==26&&h!==27||N===null||($=N,l?(N=Bi(a,r),N!=null&&c.unshift(bl(a,N,$))):l||(N=Bi(a,r),N!=null&&c.push(bl(a,N,$)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var v0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function Fp(e){return(typeof e=="string"?e:""+e).replace(v0,`
`).replace(b0,"")}function eg(e,t){return t=Fp(t),Fp(e)===t}function Ve(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qa(e,""+i);break;case"className":Zl(e,"class",i);break;case"tabIndex":Zl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,a,i);break;case"style":Fu(e,i,r);break;case"data":if(t!=="object"){Zl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",l.name,l,null),Ve(e,t,"formEncType",l.formEncType,l,null),Ve(e,t,"formMethod",l.formMethod,l,null),Ve(e,t,"formTarget",l.formTarget,l,null)):(Ve(e,t,"encType",l.encType,l,null),Ve(e,t,"method",l.method,l,null),Ve(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=wn);break;case"onScroll":i!=null&&ke("scroll",e);break;case"onScrollEnd":i!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Wl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ke("beforetoggle",e),ke("toggle",e),Ql(e,"popover",i);break;case"xlinkActuate":$n(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$n(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$n(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$n(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$n(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$n(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$n(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zm.get(a)||a,Ql(e,a,i))}}function Tc(e,t,a,i,l,r){switch(a){case"style":Fu(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Qa(e,i):(typeof i=="number"||typeof i=="bigint")&&Qa(e,""+i);break;case"onScroll":i!=null&&ke("scroll",e);break;case"onScrollEnd":i!=null&&ke("scrollend",e);break;case"onClick":i!=null&&(e.onclick=wn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[jt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Ql(e,a,i)}}}function $t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,r,c,a,null)}}l&&Ve(e,t,"srcSet",a.srcSet,a,null),i&&Ve(e,t,"src",a.src,a,null);return;case"input":ke("invalid",e);var h=r=c=l=null,$=null,N=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":l=Q;break;case"type":c=Q;break;case"checked":$=Q;break;case"defaultChecked":N=Q;break;case"value":r=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,t));break;default:Ve(e,t,i,Q,a,null)}}Wu(e,r,h,$,N,c,l,!1);return;case"select":ke("invalid",e),i=c=r=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":c=h;break;case"multiple":i=h;default:Ve(e,t,l,h,a,null)}t=r,a=c,e.multiple=!!i,t!=null?Xa(e,!!i,t,!1):a!=null&&Xa(e,!!i,a,!0);return;case"textarea":ke("invalid",e),r=l=i=null;for(c in a)if(a.hasOwnProperty(c)&&(h=a[c],h!=null))switch(c){case"value":i=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Ve(e,t,c,h,a,null)}Ju(e,i,l,r);return;case"option":for($ in a)if(a.hasOwnProperty($)&&(i=a[$],i!=null))switch($){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ve(e,t,$,i,a,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(i=0;i<vl.length;i++)ke(vl[i],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ve(e,t,N,i,a,null)}return;default:if(Uo(t)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&Tc(e,t,Q,i,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(i=a[h],i!=null&&Ve(e,t,h,i,a,null))}function S0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,h=null,$=null,N=null,Q=null;for(Y in a){var F=a[Y];if(a.hasOwnProperty(Y)&&F!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":$=F;default:i.hasOwnProperty(Y)||Ve(e,t,Y,null,i,F)}}for(var B in i){var Y=i[B];if(F=a[B],i.hasOwnProperty(B)&&(Y!=null||F!=null))switch(B){case"type":r=Y;break;case"name":l=Y;break;case"checked":N=Y;break;case"defaultChecked":Q=Y;break;case"value":c=Y;break;case"defaultValue":h=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==F&&Ve(e,t,B,Y,i,F)}}Lo(e,c,h,$,N,Q,r,l);return;case"select":Y=c=h=B=null;for(r in a)if($=a[r],a.hasOwnProperty(r)&&$!=null)switch(r){case"value":break;case"multiple":Y=$;default:i.hasOwnProperty(r)||Ve(e,t,r,null,i,$)}for(l in i)if(r=i[l],$=a[l],i.hasOwnProperty(l)&&(r!=null||$!=null))switch(l){case"value":B=r;break;case"defaultValue":h=r;break;case"multiple":c=r;default:r!==$&&Ve(e,t,l,r,i,$)}t=h,a=c,i=Y,B!=null?Xa(e,!!a,B,!1):!!i!=!!a&&(t!=null?Xa(e,!!a,t,!0):Xa(e,!!a,a?[]:"",!1));return;case"textarea":Y=B=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ve(e,t,h,null,i,l)}for(c in i)if(l=i[c],r=a[c],i.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":B=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&Ve(e,t,c,l,i,r)}Pu(e,B,Y);return;case"option":for(var fe in a)if(B=a[fe],a.hasOwnProperty(fe)&&B!=null&&!i.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Ve(e,t,fe,null,i,B)}for($ in i)if(B=i[$],Y=a[$],i.hasOwnProperty($)&&B!==Y&&(B!=null||Y!=null))switch($){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ve(e,t,$,B,i,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)B=a[ve],a.hasOwnProperty(ve)&&B!=null&&!i.hasOwnProperty(ve)&&Ve(e,t,ve,null,i,B);for(N in i)if(B=i[N],Y=a[N],i.hasOwnProperty(N)&&B!==Y&&(B!=null||Y!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Ve(e,t,N,B,i,Y)}return;default:if(Uo(t)){for(var Xe in a)B=a[Xe],a.hasOwnProperty(Xe)&&B!==void 0&&!i.hasOwnProperty(Xe)&&Tc(e,t,Xe,void 0,i,B);for(Q in i)B=i[Q],Y=a[Q],!i.hasOwnProperty(Q)||B===Y||B===void 0&&Y===void 0||Tc(e,t,Q,B,i,Y);return}}for(var C in a)B=a[C],a.hasOwnProperty(C)&&B!=null&&!i.hasOwnProperty(C)&&Ve(e,t,C,null,i,B);for(F in i)B=i[F],Y=a[F],!i.hasOwnProperty(F)||B===Y||B==null&&Y==null||Ve(e,t,F,B,i,Y)}function tg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],r=l.transferSize,c=l.initiatorType,h=l.duration;if(r&&h&&tg(c)){for(c=0,h=l.responseEnd,i+=1;i<a.length;i++){var $=a[i],N=$.startTime;if(N>h)break;var Q=$.transferSize,F=$.initiatorType;Q&&tg(F)&&($=$.responseEnd,c+=Q*($<h?1:(h-N)/($-N)))}if(--i,t+=8*(r+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ec=null,Ac=null;function Vr(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _c=null;function $0(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,z0=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(e){return lg.resolve(null).then(e).catch(T0)}:ig;function T0(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function rg(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),wi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sl(a);for(var r=a.firstChild;r;){var c=r.nextSibling,h=r.nodeName;r[Ni]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Sl(e.ownerDocument.body);a=l}while(a);wi(t)}function og(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oc(a),Ho(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function E0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ni])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function A0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=en(e.nextSibling),e===null))return null;return e}function sg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=en(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return en(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function fg(e,t,a){switch(t=Vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ho(e)}var tn=new Map,dg=new Set;function Xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Un=u.d;u.d={f:_0,r:O0,D:k0,C:C0,L:M0,m:D0,X:R0,S:H0,M:L0};function _0(){var e=Un.f(),t=Rr();return e||t}function O0(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?_d(t):Un.r(e)}var Si=typeof document>"u"?null:document;function pg(e,t,a){var i=Si;if(i&&typeof t=="string"&&t){var l=Zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),dg.has(l)||(dg.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function k0(e){Un.D(e),pg("dns-prefetch",e,null)}function C0(e,t){Un.C(e,t),pg("preconnect",e,t)}function M0(e,t,a){Un.L(e,t,a);var i=Si;if(i&&e&&t){var l='link[rel="preload"][as="'+Zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Zt(a.imageSizes)+'"]')):l+='[href="'+Zt(e)+'"]';var r=l;switch(t){case"style":r=xi(e);break;case"script":r=$i(e)}tn.has(r)||(e=P({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),tn.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(xl(r))||t==="script"&&i.querySelector($l(r))||(t=i.createElement("link"),$t(t,"link",e),gt(t),i.head.appendChild(t)))}}function D0(e,t){Un.m(e,t);var a=Si;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Zt(i)+'"][href="'+Zt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=$i(e)}if(!tn.has(r)&&(e=P({rel:"modulepreload",href:e},t),tn.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(r)))return}i=a.createElement("link"),$t(i,"link",e),gt(i),a.head.appendChild(i)}}}function H0(e,t,a){Un.S(e,t,a);var i=Si;if(i&&e){var l=Ya(i).hoistableStyles,r=xi(e);t=t||"default";var c=l.get(r);if(!c){var h={loading:0,preload:null};if(c=i.querySelector(xl(r)))h.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":t},a),(a=tn.get(r))&&Dc(e,a);var $=c=i.createElement("link");gt($),$t($,"link",e),$._p=new Promise(function(N,Q){$.onload=N,$.onerror=Q}),$.addEventListener("load",function(){h.loading|=1}),$.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Qr(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:h},l.set(r,c)}}}function R0(e,t){Un.X(e,t);var a=Si;if(a&&e){var i=Ya(a).hoistableScripts,l=$i(e),r=i.get(l);r||(r=a.querySelector($l(l)),r||(e=P({src:e,async:!0},t),(t=tn.get(l))&&Hc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function L0(e,t){Un.M(e,t);var a=Si;if(a&&e){var i=Ya(a).hoistableScripts,l=$i(e),r=i.get(l);r||(r=a.querySelector($l(l)),r||(e=P({src:e,async:!0,type:"module"},t),(t=tn.get(l))&&Hc(e,t),r=a.createElement("script"),gt(r),$t(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function gg(e,t,a,i){var l=(l=K.current)?Xr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xi(a.href),a=Ya(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xi(a.href);var r=Ya(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(xl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),tn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},tn.set(e,a),r||N0(l,e,a,c.state))),t&&i===null)throw Error(s(528,""));return c}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$i(a),a=Ya(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xi(e){return'href="'+Zt(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function hg(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function N0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$t(t,"link",a),gt(t),e.head.appendChild(t))}function $i(e){return'[src="'+Zt(e)+'"]'}function $l(e){return"script[async]"+e}function mg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(i)return t.instance=i,gt(i),i;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),gt(i),$t(i,"style",l),Qr(i,a.precedence,e),t.instance=i;case"stylesheet":l=xi(a.href);var r=e.querySelector(xl(l));if(r)return t.state.loading|=4,t.instance=r,gt(r),r;i=hg(a),(l=tn.get(l))&&Dc(i,l),r=(e.ownerDocument||e).createElement("link"),gt(r);var c=r;return c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),$t(r,"link",i),t.state.loading|=4,Qr(r,a.precedence,e),t.instance=r;case"script":return r=$i(a.src),(l=e.querySelector($l(r)))?(t.instance=l,gt(l),l):(i=a,(l=tn.get(r))&&(i=P({},a),Hc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),gt(l),$t(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Qr(i,a.precedence,e));return t.instance}function Qr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,c=0;c<i.length;c++){var h=i[c];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zr=null;function yg(e,t,a){if(Zr===null){var i=new Map,l=Zr=new Map;l.set(a,i)}else l=Zr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Ni]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var h=i.get(c);h?h.push(r):i.set(c,[r])}}return i}function vg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function U0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=xi(i.href),r=t.querySelector(xl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,gt(r);return}r=t.ownerDocument||t,i=hg(i),(l=tn.get(l))&&Dc(i,l),r=r.createElement("link"),gt(r);var c=r;c._p=new Promise(function(h,$){c.onload=h,c.onerror=$}),$t(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Rc=0;function G0(e,t){return e.stylesheets&&e.count===0&&Pr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*x0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function Pr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(q0,e),Wr=null,Kr.call(e))}function q0(e,t){if(!(t.state.loading&4)){var a=Wr.get(e);if(a)var i=a.get(null);else{a=new Map,Wr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),i=c)}i&&a.set(null,i)}l=t.instance,c=l.getAttribute("data-precedence"),r=a.get(c)||i,r===i&&a.set(null,l),a.set(c,l),this.count++,i=Kr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var wl={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Y0(e,t,a,i,l,r,c,h,$){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.hiddenUpdates=ko(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=$,this.incompleteTransitions=new Map}function Sg(e,t,a,i,l,r,c,h,$,N,Q,F){return e=new Y0(e,t,a,c,$,N,Q,F,h),t=1,r===!0&&(t|=24),r=Nt(3,null,null,t),e.current=r,r.stateNode=e,t=hs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},bs(r),e}function xg(e){return e?(e=Fa,e):Fa}function $g(e,t,a,i,l,r){l=xg(l),i.context===null?i.context=l:i.pendingContext=l,i=Wn(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Pn(e,i,t),a!==null&&(Dt(a,e,t),tl(a,e,t))}function wg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lc(e,t){wg(e,t),(e=e.alternate)&&wg(e,t)}function zg(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Dt(t,e,67108864),Lc(e,67108864)}}function Tg(e){if(e.tag===13||e.tag===31){var t=Yt();t=Co(t);var a=xa(e,t);a!==null&&Dt(a,e,t),Lc(e,t)}}var Jr=!0;function V0(e,t,a,i){var l=j.T;j.T=null;var r=u.p;try{u.p=2,Nc(e,t,a,i)}finally{u.p=r,j.T=l}}function X0(e,t,a,i){var l=j.T;j.T=null;var r=u.p;try{u.p=8,Nc(e,t,a,i)}finally{u.p=r,j.T=l}}function Nc(e,t,a,i){if(Jr){var l=Uc(i);if(l===null)zc(e,t,i,Ir,a),Ag(e,i);else if(Z0(l,e,t,a,i))i.stopPropagation();else if(Ag(e,i),t&4&&-1<Q0.indexOf(e)){for(;l!==null;){var r=qa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=ma(r.pendingLanes);if(c!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var $=1<<31-Rt(c);h.entanglements[1]|=$,c&=~$}yn(r),(Ue&6)===0&&(Dr=zt()+500,yl(0))}}break;case 31:case 13:h=xa(r,2),h!==null&&Dt(h,r,2),Rr(),Lc(r,2)}if(r=Uc(i),r===null&&zc(e,t,i,Ir,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else zc(e,t,i,null,a)}}function Uc(e){return e=Go(e),Bc(e)}var Ir=null;function Bc(e){if(Ir=null,e=Ga(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=M(t),e!==null)return e;e=null}else if(a===31){if(e=q(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ir=e,null}function Eg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ha()){case Gl:return 2;case ln:return 8;case pn:case Cm:return 32;case Hu:return 268435456;default:return 32}default:return 32}}var Gc=!1,oa=null,sa=null,ca=null,zl=new Map,Tl=new Map,ua=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ag(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(t.pointerId)}}function El(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=qa(t),t!==null&&zg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Z0(e,t,a,i,l){switch(t){case"focusin":return oa=El(oa,e,t,a,i,l),!0;case"dragenter":return sa=El(sa,e,t,a,i,l),!0;case"mouseover":return ca=El(ca,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return zl.set(r,El(zl.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,Tl.set(r,El(Tl.get(r)||null,e,t,a,i,l)),!0}return!1}function jg(e){var t=Ga(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=M(a),t!==null){e.blockedOn=t,Gu(e.priority,function(){Tg(a)});return}}else if(t===31){if(t=q(a),t!==null){e.blockedOn=t,Gu(e.priority,function(){Tg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Uc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Bo=i,a.target.dispatchEvent(i),Bo=null}else return t=qa(a),t!==null&&zg(t),e.blockedOn=a,!1;t.shift()}return!0}function _g(e,t,a){Fr(e)&&a.delete(t)}function K0(){Gc=!1,oa!==null&&Fr(oa)&&(oa=null),sa!==null&&Fr(sa)&&(sa=null),ca!==null&&Fr(ca)&&(ca=null),zl.forEach(_g),Tl.forEach(_g)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,K0)))}var to=null;function Og(e){to!==e&&(to=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){to===e&&(to=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Bc(i||a)===null)continue;break}var r=qa(a);r!==null&&(e.splice(t,3),t-=3,Us(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function wi(e){function t($){return eo($,e)}oa!==null&&eo(oa,e),sa!==null&&eo(sa,e),ca!==null&&eo(ca,e),zl.forEach(t),Tl.forEach(t);for(var a=0;a<ua.length;a++){var i=ua[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(a=ua[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],c=l[jt]||null;if(typeof r=="function")c||Og(a);else if(c){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[jt]||null)h=c.formAction;else if(Bc(l)!==null)continue}else h=c.action;typeof h=="function"?a[i+1]=h:(a.splice(i,3),i-=3),Og(a)}}}function kg(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function qc(e){this._internalRoot=e}no.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Yt();$g(a,i,e,t,null,null)},no.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$g(e.current,2,null,e,null,null),Rr(),t[Ba]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ua.length&&t!==0&&t<ua[a].priority;a++);ua.splice(a,0,e),a===0&&jg(e)}};var Cg=o.version;if(Cg!=="19.2.3")throw Error(s(527,Cg,"19.2.3"));u.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=O(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var W0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Hi=ao.inject(W0),Ht=ao}catch{}}return jl.createRoot=function(e,t){if(!m(e))throw Error(s(299));var a=!1,i="",l=Ud,r=Bd,c=Gd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Sg(e,1,!1,null,null,a,i,null,l,r,c,kg),e[Ba]=t.current,wc(e),new qc(t)},jl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(s(299));var i=!1,l="",r=Ud,c=Bd,h=Gd,$=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&($=a.formState)),t=Sg(e,1,!0,t,a??null,i,l,$,r,c,h,kg),t.context=xg(null),a=t.current,i=Yt(),i=Co(i),l=Wn(i),l.callback=null,Pn(a,l,i),a=i,t.current.lanes=a,Li(t,a),yn(t),e[Ba]=t.current,wc(e),new no(t)},jl.version="19.2.3",jl}var qg;function rv(){if(qg)return Xc.exports;qg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Xc.exports=lv(),Xc.exports}var ov=rv();const sv=Tu(ov);var mt=function(){return mt=Object.assign||function(o){for(var f,s=1,m=arguments.length;s<m;s++){f=arguments[s];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(o[b]=f[b])}return o},mt.apply(this,arguments)};function _i(n,o,f){if(f||arguments.length===2)for(var s=0,m=o.length,b;s<m;s++)(b||!(s in o))&&(b||(b=Array.prototype.slice.call(o,0,s)),b[s]=o[s]);return n.concat(b||Array.prototype.slice.call(o))}var We="-ms-",Dl="-moz-",Be="-webkit-",Uh="comm",$o="rule",Eu="decl",cv="@import",uv="@namespace",Bh="@keyframes",fv="@layer",Gh=Math.abs,Au=String.fromCharCode,hu=Object.assign;function dv(n,o){return dt(n,0)^45?(((o<<2^dt(n,0))<<2^dt(n,1))<<2^dt(n,2))<<2^dt(n,3):0}function qh(n){return n.trim()}function Bn(n,o){return(n=o.exec(n))?n[0]:n}function Ee(n,o,f){return n.replace(o,f)}function ro(n,o,f){return n.indexOf(o,f)}function dt(n,o){return n.charCodeAt(o)|0}function Ra(n,o,f){return n.slice(o,f)}function cn(n){return n.length}function Yh(n){return n.length}function Cl(n,o){return o.push(n),n}function pv(n,o){return n.map(o).join("")}function Yg(n,o){return n.filter(function(f){return!Bn(f,o)})}var wo=1,Oi=1,Vh=0,an=0,ct=0,Di="";function zo(n,o,f,s,m,b,M,q){return{value:n,root:o,parent:f,type:s,props:m,children:b,line:wo,column:Oi,length:M,return:"",siblings:q}}function da(n,o){return hu(zo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function zi(n){for(;n.root;)n=da(n.root,{children:[n]});Cl(n,n.siblings)}function gv(){return ct}function hv(){return ct=an>0?dt(Di,--an):0,Oi--,ct===10&&(Oi=1,wo--),ct}function un(){return ct=an<Vh?dt(Di,an++):0,Oi++,ct===10&&(Oi=1,wo++),ct}function pa(){return dt(Di,an)}function oo(){return an}function To(n,o){return Ra(Di,n,o)}function Hl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mv(n){return wo=Oi=1,Vh=cn(Di=n),an=0,[]}function yv(n){return Di="",n}function Wc(n){return qh(To(an-1,mu(n===91?n+2:n===40?n+1:n)))}function vv(n){for(;(ct=pa())&&ct<33;)un();return Hl(n)>2||Hl(ct)>3?"":" "}function bv(n,o){for(;--o&&un()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return To(n,oo()+(o<6&&pa()==32&&un()==32))}function mu(n){for(;un();)switch(ct){case n:return an;case 34:case 39:n!==34&&n!==39&&mu(ct);break;case 40:n===41&&mu(n);break;case 92:un();break}return an}function Sv(n,o){for(;un()&&n+ct!==57;)if(n+ct===84&&pa()===47)break;return"/*"+To(o,an-1)+"*"+Au(n===47?n:un())}function xv(n){for(;!Hl(pa());)un();return To(n,an)}function $v(n){return yv(so("",null,null,null,[""],n=mv(n),0,[0],n))}function so(n,o,f,s,m,b,M,q,E){for(var O=0,V=0,P=M,ne=0,ue=0,le=0,X=1,he=1,ce=1,pe=0,ae="",oe=m,w=b,z=s,x=ae;he;)switch(le=pe,pe=un()){case 40:if(le!=108&&dt(x,P-1)==58){ro(x+=Ee(Wc(pe),"&","&\f"),"&\f",Gh(O?q[O-1]:0))!=-1&&(ce=-1);break}case 34:case 39:case 91:x+=Wc(pe);break;case 9:case 10:case 13:case 32:x+=vv(le);break;case 92:x+=bv(oo()-1,7);continue;case 47:switch(pa()){case 42:case 47:Cl(wv(Sv(un(),oo()),o,f,E),E),(Hl(le||1)==5||Hl(pa()||1)==5)&&cn(x)&&Ra(x,-1,void 0)!==" "&&(x+=" ");break;default:x+="/"}break;case 123*X:q[O++]=cn(x)*ce;case 125*X:case 59:case 0:switch(pe){case 0:case 125:he=0;case 59+V:ce==-1&&(x=Ee(x,/\f/g,"")),ue>0&&(cn(x)-P||X===0&&le===47)&&Cl(ue>32?Xg(x+";",s,f,P-1,E):Xg(Ee(x," ","")+";",s,f,P-2,E),E);break;case 59:x+=";";default:if(Cl(z=Vg(x,o,f,O,V,m,q,ae,oe=[],w=[],P,b),b),pe===123)if(V===0)so(x,o,z,z,oe,b,P,q,w);else{switch(ne){case 99:if(dt(x,3)===110)break;case 108:if(dt(x,2)===97)break;default:V=0;case 100:case 109:case 115:}V?so(n,z,z,s&&Cl(Vg(n,z,z,0,0,m,q,ae,m,oe=[],P,w),w),m,w,P,q,s?oe:w):so(x,z,z,z,[""],w,0,q,w)}}O=V=ue=0,X=ce=1,ae=x="",P=M;break;case 58:P=1+cn(x),ue=le;default:if(X<1){if(pe==123)--X;else if(pe==125&&X++==0&&hv()==125)continue}switch(x+=Au(pe),pe*X){case 38:ce=V>0?1:(x+="\f",-1);break;case 44:q[O++]=(cn(x)-1)*ce,ce=1;break;case 64:pa()===45&&(x+=Wc(un())),ne=pa(),V=P=cn(ae=x+=xv(oo())),pe++;break;case 45:le===45&&cn(x)==2&&(X=0)}}return b}function Vg(n,o,f,s,m,b,M,q,E,O,V,P){for(var ne=m-1,ue=m===0?b:[""],le=Yh(ue),X=0,he=0,ce=0;X<s;++X)for(var pe=0,ae=Ra(n,ne+1,ne=Gh(he=M[X])),oe=n;pe<le;++pe)(oe=qh(he>0?ue[pe]+" "+ae:Ee(ae,/&\f/g,ue[pe])))&&(E[ce++]=oe);return zo(n,o,f,m===0?$o:q,E,O,V,P)}function wv(n,o,f,s){return zo(n,o,f,Uh,Au(gv()),Ra(n,2,-2),0,s)}function Xg(n,o,f,s,m){return zo(n,o,f,Eu,Ra(n,0,s),Ra(n,s+1,-1),s,m)}function Xh(n,o,f){switch(dv(n,o)){case 5103:return Be+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Be+n+n;case 4855:return Be+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Dl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+n+Dl+n+We+n+n;case 5936:switch(dt(n,o+11)){case 114:return Be+n+We+Ee(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Be+n+We+Ee(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Be+n+We+Ee(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Be+n+We+n+n;case 6165:return Be+n+We+"flex-"+n+n;case 5187:return Be+n+Ee(n,/(\w+).+(:[^]+)/,Be+"box-$1$2"+We+"flex-$1$2")+n;case 5443:return Be+n+We+"flex-item-"+Ee(n,/flex-|-self/g,"")+(Bn(n,/flex-|baseline/)?"":We+"grid-row-"+Ee(n,/flex-|-self/g,""))+n;case 4675:return Be+n+We+"flex-line-pack"+Ee(n,/align-content|flex-|-self/g,"")+n;case 5548:return Be+n+We+Ee(n,"shrink","negative")+n;case 5292:return Be+n+We+Ee(n,"basis","preferred-size")+n;case 6060:return Be+"box-"+Ee(n,"-grow","")+Be+n+We+Ee(n,"grow","positive")+n;case 4554:return Be+Ee(n,/([^-])(transform)/g,"$1"+Be+"$2")+n;case 6187:return Ee(Ee(Ee(n,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),n,"")+n;case 5495:case 3959:return Ee(n,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return Ee(Ee(n,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+We+"flex-pack:$3"),/space-between/,"justify")+Be+n+n;case 4200:if(!Bn(n,/flex-|baseline/))return We+"grid-column-align"+Ra(n,o)+n;break;case 2592:case 3360:return We+Ee(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(s,m){return o=m,Bn(s.props,/grid-\w+-end/)})?~ro(n+(f=f[o].value),"span",0)?n:We+Ee(n,"-start","")+n+We+"grid-row-span:"+(~ro(f,"span",0)?Bn(f,/\d+/):+Bn(f,/\d+/)-+Bn(n,/\d+/))+";":We+Ee(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(s){return Bn(s.props,/grid-\w+-start/)})?n:We+Ee(Ee(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ee(n,/(.+)-inline(.+)/,Be+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(n)-1-o>6)switch(dt(n,o+1)){case 109:if(dt(n,o+4)!==45)break;case 102:return Ee(n,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+Dl+(dt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~ro(n,"stretch",0)?Xh(Ee(n,"stretch","fill-available"),o,f)+n:n}break;case 5152:case 5920:return Ee(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,m,b,M,q,E,O){return We+m+":"+b+O+(M?We+m+"-span:"+(q?E:+E-+b)+O:"")+n});case 4949:if(dt(n,o+6)===121)return Ee(n,":",":"+Be)+n;break;case 6444:switch(dt(n,dt(n,14)===45?18:11)){case 120:return Ee(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(dt(n,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+We+"$2box$3")+n;case 100:return Ee(n,":",":"+We)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(n,"scroll-","scroll-snap-")+n}return n}function po(n,o){for(var f="",s=0;s<n.length;s++)f+=o(n[s],s,n,o)||"";return f}function zv(n,o,f,s){switch(n.type){case fv:if(n.children.length)break;case cv:case uv:case Eu:return n.return=n.return||n.value;case Uh:return"";case Bh:return n.return=n.value+"{"+po(n.children,s)+"}";case $o:if(!cn(n.value=n.props.join(",")))return""}return cn(f=po(n.children,s))?n.return=n.value+"{"+f+"}":""}function Tv(n){var o=Yh(n);return function(f,s,m,b){for(var M="",q=0;q<o;q++)M+=n[q](f,s,m,b)||"";return M}}function Ev(n){return function(o){o.root||(o=o.return)&&n(o)}}function Av(n,o,f,s){if(n.length>-1&&!n.return)switch(n.type){case Eu:n.return=Xh(n.value,n.length,f);return;case Bh:return po([da(n,{value:Ee(n.value,"@","@"+Be)})],s);case $o:if(n.length)return pv(f=n.props,function(m){switch(Bn(m,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zi(da(n,{props:[Ee(m,/:(read-\w+)/,":"+Dl+"$1")]})),zi(da(n,{props:[m]})),hu(n,{props:Yg(f,s)});break;case"::placeholder":zi(da(n,{props:[Ee(m,/:(plac\w+)/,":"+Be+"input-$1")]})),zi(da(n,{props:[Ee(m,/:(plac\w+)/,":"+Dl+"$1")]})),zi(da(n,{props:[Ee(m,/:(plac\w+)/,We+"input-$1")]})),zi(da(n,{props:[m]})),hu(n,{props:Yg(f,s)});break}return""})}}var jv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},ki=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",Qh="active",Zh="data-styled-version",Eo="6.3.8",ju=`/*!sc*/
`,go=typeof window<"u"&&typeof document<"u",bn=pt.createContext===void 0,_v=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),Ov={},Ao=Object.freeze([]),Ci=Object.freeze({});function Kh(n,o,f){return f===void 0&&(f=Ci),n.theme!==f.theme&&n.theme||o||f.theme}var Wh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),kv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cv=/(^-|-$)/g;function Qg(n){return n.replace(kv,"-").replace(Cv,"")}var Mv=/(a)(d)/gi,Zg=function(n){return String.fromCharCode(n+(n>25?39:97))};function yu(n){var o,f="";for(o=Math.abs(n);o>52;o=o/52|0)f=Zg(o%52)+f;return(Zg(o%52)+f).replace(Mv,"$1-$2")}var Pc,Ei=function(n,o){for(var f=o.length;f;)n=33*n^o.charCodeAt(--f);return n},Ph=function(n){return Ei(5381,n)};function _u(n){return yu(Ph(n)>>>0)}function Dv(n){return n.displayName||n.name||"Component"}function Jc(n){return typeof n=="string"&&!0}var Jh=typeof Symbol=="function"&&Symbol.for,Ih=Jh?Symbol.for("react.memo"):60115,Hv=Jh?Symbol.for("react.forward_ref"):60112,Rv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nv=((Pc={})[Hv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pc[Ih]=Fh,Pc);function Kg(n){return("type"in(o=n)&&o.type.$$typeof)===Ih?Fh:"$$typeof"in n?Nv[n.$$typeof]:Rv;var o}var Uv=Object.defineProperty,Bv=Object.getOwnPropertyNames,Wg=Object.getOwnPropertySymbols,Gv=Object.getOwnPropertyDescriptor,qv=Object.getPrototypeOf,Pg=Object.prototype;function em(n,o,f){if(typeof o!="string"){if(Pg){var s=qv(o);s&&s!==Pg&&em(n,s,f)}var m=Bv(o);Wg&&(m=m.concat(Wg(o)));for(var b=Kg(n),M=Kg(o),q=0;q<m.length;++q){var E=m[q];if(!(E in Lv||f&&f[E]||M&&E in M||b&&E in b)){var O=Gv(o,E);try{Uv(n,E,O)}catch{}}}}return n}function La(n){return typeof n=="function"}function Ou(n){return typeof n=="object"&&"styledComponentId"in n}function Ha(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function ho(n,o){if(n.length===0)return"";for(var f=n[0],s=1;s<n.length;s++)f+=n[s];return f}function Rl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function vu(n,o,f){if(f===void 0&&(f=!1),!f&&!Rl(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=vu(n[s],o[s]);else if(Rl(o))for(var s in o)n[s]=vu(n[s],o[s]);return n}function ku(n,o){Object.defineProperty(n,"toString",{value:o})}function Na(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Yv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var f=0,s=0;s<o;s++)f+=this.groupSizes[s];return f},n.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var s=this.groupSizes,m=s.length,b=m;o>=b;)if((b<<=1)<0)throw Na(16,"".concat(o));this.groupSizes=new Uint32Array(b),this.groupSizes.set(s),this.length=b;for(var M=m;M<b;M++)this.groupSizes[M]=0}for(var q=this.indexOfGroup(o+1),E=(M=0,f.length);M<E;M++)this.tag.insertRule(q,f[M])&&(this.groupSizes[o]++,q++)},n.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],s=this.indexOfGroup(o),m=s+f;this.groupSizes[o]=0;for(var b=s;b<m;b++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var s=this.groupSizes[o],m=this.indexOfGroup(o),b=m+s,M=m;M<b;M++)f+="".concat(this.tag.getRule(M)).concat(ju);return f},n})(),co=new Map,mo=new Map,uo=1,Ai=function(n){if(co.has(n))return co.get(n);for(;mo.has(uo);)uo++;var o=uo++;return co.set(n,o),mo.set(o,n),o},Vv=function(n,o){uo=o+1,co.set(n,o),mo.set(o,n)},Xv="style[".concat(ki,"][").concat(Zh,'="').concat(Eo,'"]'),Qv=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zv=function(n,o,f){for(var s,m=f.split(","),b=0,M=m.length;b<M;b++)(s=m[b])&&n.registerName(o,s)},Kv=function(n,o){for(var f,s=((f=o.textContent)!==null&&f!==void 0?f:"").split(ju),m=[],b=0,M=s.length;b<M;b++){var q=s[b].trim();if(q){var E=q.match(Qv);if(E){var O=0|parseInt(E[1],10),V=E[2];O!==0&&(Vv(V,O),Zv(n,V,E[3]),n.getTag().insertRules(O,m)),m.length=0}else m.push(q)}}},Jg=function(n){for(var o=document.querySelectorAll(Xv),f=0,s=o.length;f<s;f++){var m=o[f];m&&m.getAttribute(ki)!==Qh&&(Kv(n,m),m.parentNode&&m.parentNode.removeChild(m))}};function Wv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tm=function(n){var o=document.head,f=n||o,s=document.createElement("style"),m=(function(q){var E=Array.from(q.querySelectorAll("style[".concat(ki,"]")));return E[E.length-1]})(f),b=m!==void 0?m.nextSibling:null;s.setAttribute(ki,Qh),s.setAttribute(Zh,Eo);var M=Wv();return M&&s.setAttribute("nonce",M),f.insertBefore(s,b),s},Pv=(function(){function n(o){this.element=tm(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,m=0,b=s.length;m<b;m++){var M=s[m];if(M.ownerNode===f)return M}throw Na(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},n})(),Jv=(function(){function n(o){this.element=tm(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Iv=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Ig=go,Fv={isServer:!go,useCSSOMInjection:!_v},yo=(function(){function n(o,f,s){o===void 0&&(o=Ci),f===void 0&&(f={});var m=this;this.options=mt(mt({},Fv),o),this.gs=f,this.names=new Map(s),this.server=!!o.isServer,!this.server&&go&&Ig&&(Ig=!1,Jg(this)),ku(this,function(){return(function(b){for(var M=b.getTag(),q=M.length,E="",O=function(P){var ne=(function(ce){return mo.get(ce)})(P);if(ne===void 0)return"continue";var ue=b.names.get(ne),le=M.getGroup(P);if(ue===void 0||!ue.size||le.length===0)return"continue";var X="".concat(ki,".g").concat(P,'[id="').concat(ne,'"]'),he="";ue!==void 0&&ue.forEach(function(ce){ce.length>0&&(he+="".concat(ce,","))}),E+="".concat(le).concat(X,'{content:"').concat(he,'"}').concat(ju)},V=0;V<q;V++)O(V);return E})(m)})}return n.registerId=function(o){return Ai(o)},n.prototype.rehydrate=function(){!this.server&&go&&Jg(this)},n.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new n(mt(mt({},this.options),o),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var s=f.useCSSOMInjection,m=f.target;return f.isServer?new Iv(m):s?new Pv(m):new Jv(m)})(this.options),new Yv(o)));var o},n.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},n.prototype.registerName=function(o,f){if(Ai(o),this.names.has(o))this.names.get(o).add(f);else{var s=new Set;s.add(f),this.names.set(o,s)}},n.prototype.insertRules=function(o,f,s){this.registerName(o,f),this.getTag().insertRules(Ai(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Ai(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),eb=/&/g,ji=47;function Fg(n){if(n.indexOf("}")===-1)return!1;for(var o=n.length,f=0,s=0,m=!1,b=0;b<o;b++){var M=n.charCodeAt(b);if(s!==0||m||M!==ji||n.charCodeAt(b+1)!==42)if(m)M===42&&n.charCodeAt(b+1)===ji&&(m=!1,b++);else if(M!==34&&M!==39||b!==0&&n.charCodeAt(b-1)===92){if(s===0){if(M===123)f++;else if(M===125&&--f<0)return!0}}else s===0?s=M:s===M&&(s=0);else m=!0,b++}return f!==0||s!==0}function nm(n,o){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=nm(f.children,o)),f})}function tb(n){var o,f,s,m=Ci,b=m.options,M=b===void 0?Ci:b,q=m.plugins,E=q===void 0?Ao:q,O=function(ne,ue,le){return le.startsWith(f)&&le.endsWith(f)&&le.replaceAll(f,"").length>0?".".concat(o):ne},V=E.slice();V.push(function(ne){ne.type===$o&&ne.value.includes("&")&&(ne.props[0]=ne.props[0].replace(eb,f).replace(s,O))}),M.prefix&&V.push(Av),V.push(zv);var P=function(ne,ue,le,X){ue===void 0&&(ue=""),le===void 0&&(le=""),X===void 0&&(X="&"),o=X,f=ue,s=new RegExp("\\".concat(f,"\\b"),"g");var he=(function(ae){if(!Fg(ae))return ae;for(var oe=ae.length,w="",z=0,x=0,D=0,_=!1,v=0;v<oe;v++){var G=ae.charCodeAt(v);if(D!==0||_||G!==ji||ae.charCodeAt(v+1)!==42)if(_)G===42&&ae.charCodeAt(v+1)===ji&&(_=!1,v++);else if(G!==34&&G!==39||v!==0&&ae.charCodeAt(v-1)===92){if(D===0)if(G===123)x++;else if(G===125){if(--x<0){for(var Z=v+1;Z<oe;){var R=ae.charCodeAt(Z);if(R===59||R===10)break;Z++}Z<oe&&ae.charCodeAt(Z)===59&&Z++,x=0,v=Z-1,z=Z;continue}x===0&&(w+=ae.substring(z,v+1),z=v+1)}else G===59&&x===0&&(w+=ae.substring(z,v+1),z=v+1)}else D===0?D=G:D===G&&(D=0);else _=!0,v++}if(z<oe){var W=ae.substring(z);Fg(W)||(w+=W)}return w})((function(ae){if(ae.indexOf("//")===-1)return ae;for(var oe=ae.length,w=[],z=0,x=0,D=0,_=0;x<oe;){var v=ae.charCodeAt(x);if(v!==34&&v!==39||x!==0&&ae.charCodeAt(x-1)===92)if(D===0)if(v===40&&x>=3&&(32|ae.charCodeAt(x-1))==108&&(32|ae.charCodeAt(x-2))==114&&(32|ae.charCodeAt(x-3))==117)_=1,x++;else if(_>0)v===41?_--:v===40&&_++,x++;else if(v===ji&&x+1<oe&&ae.charCodeAt(x+1)===ji){for(x>z&&w.push(ae.substring(z,x));x<oe&&ae.charCodeAt(x)!==10;)x++;z=x}else x++;else x++;else D===0?D=v:D===v&&(D=0),x++}return z===0?ae:(z<oe&&w.push(ae.substring(z)),w.join(""))})(ne)),ce=$v(le||ue?"".concat(le," ").concat(ue," { ").concat(he," }"):he);M.namespace&&(ce=nm(ce,M.namespace));var pe=[];return po(ce,Tv(V.concat(Ev(function(ae){return pe.push(ae)})))),pe};return P.hash=E.length?E.reduce(function(ne,ue){return ue.name||Na(15),Ei(ne,ue.name)},5381).toString():"",P}var nb=new yo,bu=tb(),Su={shouldForwardProp:void 0,styleSheet:nb,stylis:bu},am=bn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Su)}}:pt.createContext(Su);am.Consumer;bn||pt.createContext(void 0);function xu(){return bn?Su:pt.useContext(am)}var im=(function(){function n(o,f){var s=this;this.inject=function(m,b){b===void 0&&(b=bu);var M=s.name+b.hash;m.hasNameForId(s.id,M)||m.insertRules(s.id,M,b(s.rules,M,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,ku(this,function(){throw Na(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=bu),this.name+o.hash},n})();function ab(n,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in jv||n.startsWith("--")?String(o).trim():"".concat(o,"px")}var ib=function(n){return n>="A"&&n<="Z"};function eh(n){for(var o="",f=0;f<n.length;f++){var s=n[f];if(f===1&&s==="-"&&n[0]==="-")return n;ib(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var lm=function(n){return n==null||n===!1||n===""},rm=function(n){var o=[];for(var f in n){var s=n[f];n.hasOwnProperty(f)&&!lm(s)&&(Array.isArray(s)&&s.isCss||La(s)?o.push("".concat(eh(f),":"),s,";"):Rl(s)?o.push.apply(o,_i(_i(["".concat(f," {")],rm(s),!1),["}"],!1)):o.push("".concat(eh(f),": ").concat(ab(f,s),";")))}return o};function ga(n,o,f,s){if(lm(n))return[];if(Ou(n))return[".".concat(n.styledComponentId)];if(La(n)){if(!La(b=n)||b.prototype&&b.prototype.isReactComponent||!o)return[n];var m=n(o);return ga(m,o,f,s)}var b;return n instanceof im?f?(n.inject(f,s),[n.getName(s)]):[n]:Rl(n)?rm(n):Array.isArray(n)?Array.prototype.concat.apply(Ao,n.map(function(M){return ga(M,o,f,s)})):[n.toString()]}function om(n){for(var o=0;o<n.length;o+=1){var f=n[o];if(La(f)&&!Ou(f))return!1}return!0}var lb=Ph(Eo),rb=(function(){function n(o,f,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&om(o),this.componentId=f,this.baseHash=Ei(lb,f),this.baseStyle=s,yo.registerId(f)}return n.prototype.generateAndInjectStyles=function(o,f,s){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,s).className:"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))m=Ha(m,this.staticRulesId);else{var b=ho(ga(this.rules,o,f,s)),M=yu(Ei(this.baseHash,b)>>>0);if(!f.hasNameForId(this.componentId,M)){var q=s(b,".".concat(M),void 0,this.componentId);f.insertRules(this.componentId,M,q)}m=Ha(m,M),this.staticRulesId=M}else{for(var E=Ei(this.baseHash,s.hash),O="",V=0;V<this.rules.length;V++){var P=this.rules[V];if(typeof P=="string")O+=P;else if(P){var ne=ho(ga(P,o,f,s));E=Ei(E,ne+V),O+=ne}}if(O){var ue=yu(E>>>0);if(!f.hasNameForId(this.componentId,ue)){var le=s(O,".".concat(ue),void 0,this.componentId);f.insertRules(this.componentId,ue,le)}m=Ha(m,ue)}}return{className:m,css:typeof window>"u"?f.getTag().getGroup(Ai(this.componentId)):""}},n})(),Ll=bn?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:pt.createContext(void 0);Ll.Consumer;function ob(n){if(bn)return n.children;var o=pt.useContext(Ll),f=pt.useMemo(function(){return(function(s,m){if(!s)throw Na(14);if(La(s)){var b=s(m);return b}if(Array.isArray(s)||typeof s!="object")throw Na(8);return m?mt(mt({},m),s):s})(n.theme,o)},[n.theme,o]);return n.children?pt.createElement(Ll.Provider,{value:f},n.children):null}var Ic={};function sb(n,o,f){var s=Ou(n),m=n,b=!Jc(n),M=o.attrs,q=M===void 0?Ao:M,E=o.componentId,O=E===void 0?(function(oe,w){var z=typeof oe!="string"?"sc":Qg(oe);Ic[z]=(Ic[z]||0)+1;var x="".concat(z,"-").concat(_u(Eo+z+Ic[z]));return w?"".concat(w,"-").concat(x):x})(o.displayName,o.parentComponentId):E,V=o.displayName,P=V===void 0?(function(oe){return Jc(oe)?"styled.".concat(oe):"Styled(".concat(Dv(oe),")")})(n):V,ne=o.displayName&&o.componentId?"".concat(Qg(o.displayName),"-").concat(o.componentId):o.componentId||O,ue=s&&m.attrs?m.attrs.concat(q).filter(Boolean):q,le=o.shouldForwardProp;if(s&&m.shouldForwardProp){var X=m.shouldForwardProp;if(o.shouldForwardProp){var he=o.shouldForwardProp;le=function(oe,w){return X(oe,w)&&he(oe,w)}}else le=X}var ce=new rb(f,ne,s?m.componentStyle:void 0);function pe(oe,w){return(function(z,x,D){var _=z.attrs,v=z.componentStyle,G=z.defaultProps,Z=z.foldedComponentIds,R=z.styledComponentId,W=z.target,ee=bn?void 0:pt.useContext(Ll),j=xu(),u=z.shouldForwardProp||j.shouldForwardProp,ie=Kh(x,ee,G)||Ci,T=(function(me,de,Se){for(var Ae,$e=mt(mt({},de),{className:void 0,theme:Se}),je=0;je<me.length;je+=1){var be=La(Ae=me[je])?Ae($e):Ae;for(var ze in be)ze==="className"?$e.className=Ha($e.className,be[ze]):ze==="style"?$e.style=mt(mt({},$e.style),be[ze]):$e[ze]=be[ze]}return"className"in de&&typeof de.className=="string"&&($e.className=Ha($e.className,de.className)),$e})(_,x,ie),p=T.as||W,g={};for(var S in T)T[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&T.theme===ie||(S==="forwardedAs"?g.as=T.forwardedAs:u&&!u(S,p)||(g[S]=T[S]));var U=(function(me,de){var Se=xu(),Ae=me.generateAndInjectStyles(de,Se.styleSheet,Se.stylis);return Ae})(v,T),H=U.className,J=U.css,K=Ha(Z,R);H&&(K+=" "+H),T.className&&(K+=" "+T.className),g[Jc(p)&&!Wh.has(p)?"class":"className"]=K,D&&(g.ref=D);var te=Ce.createElement(p,g);return bn&&J?pt.createElement(pt.Fragment,null,pt.createElement("style",{precedence:"styled-components",href:"sc-".concat(R,"-").concat(H),children:J}),te):te})(ae,oe,w)}pe.displayName=P;var ae=pt.forwardRef(pe);return ae.attrs=ue,ae.componentStyle=ce,ae.displayName=P,ae.shouldForwardProp=le,ae.foldedComponentIds=s?Ha(m.foldedComponentIds,m.styledComponentId):"",ae.styledComponentId=ne,ae.target=s?m.target:n,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=s?(function(w){for(var z=[],x=1;x<arguments.length;x++)z[x-1]=arguments[x];for(var D=0,_=z;D<_.length;D++)vu(w,_[D],!0);return w})({},m.defaultProps,oe):oe}}),ku(ae,function(){return".".concat(ae.styledComponentId)}),b&&em(ae,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function th(n,o){for(var f=[n[0]],s=0,m=o.length;s<m;s+=1)f.push(o[s],n[s+1]);return f}var nh=function(n){return Object.assign(n,{isCss:!0})};function Cu(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(La(n)||Rl(n))return nh(ga(th(Ao,_i([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?ga(s):nh(ga(th(s,o)))}function $u(n,o,f){if(f===void 0&&(f=Ci),!o)throw Na(1,o);var s=function(m){for(var b=[],M=1;M<arguments.length;M++)b[M-1]=arguments[M];return n(o,f,Cu.apply(void 0,_i([m],b,!1)))};return s.attrs=function(m){return $u(n,o,mt(mt({},f),{attrs:Array.prototype.concat(f.attrs,m).filter(Boolean)}))},s.withConfig=function(m){return $u(n,o,mt(mt({},f),m))},s}var sm=function(n){return $u(sb,n)},y=sm;Wh.forEach(function(n){y[n]=sm(n)});var cb=(function(){function n(o,f){this.rules=o,this.componentId=f,this.isStatic=om(o),yo.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,f,s,m){var b=m(ho(ga(this.rules,f,s,m)),""),M=this.componentId+o;s.insertRules(M,M,b)},n.prototype.removeStyles=function(o,f){f.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,f,s,m){o>2&&yo.registerId(this.componentId+o);var b=this.componentId+o;this.isStatic?s.hasNameForId(b,b)||this.createStyles(o,f,s,m):(this.removeStyles(o,s),this.createStyles(o,f,s,m))},n})();function ub(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=Cu.apply(void 0,_i([n],o,!1)),m="sc-global-".concat(_u(JSON.stringify(s))),b=new cb(s,m),M=new WeakMap,q=function(E){var O=xu(),V=bn?void 0:pt.useContext(Ll),P=M.get(O.styleSheet);if(P===void 0&&(P=O.styleSheet.allocateGSInstance(m),M.set(O.styleSheet,P)),(typeof window>"u"||!O.styleSheet.server)&&(function(he,ce,pe,ae,oe){if(b.isStatic)b.renderStyles(he,Ov,pe,oe);else{var w=mt(mt({},ce),{theme:Kh(ce,ae,q.defaultProps)});b.renderStyles(he,w,pe,oe)}})(P,E,O.styleSheet,V,O.stylis),!bn){var ne=pt.useRef(!0);pt.useLayoutEffect(function(){return ne.current=!1,function(){ne.current=!0,queueMicrotask(function(){ne.current&&(b.removeStyles(P,O.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(m,'"]')).forEach(function(he){return he.remove()}))})}},[P,O.styleSheet])}if(bn){var ue=m+P,le=typeof window>"u"?O.styleSheet.getTag().getGroup(Ai(ue)):"";if(le){var X="".concat(m,"-").concat(P);return pt.createElement("style",{key:X,"data-styled-global":m,precedence:"styled-components",href:X,children:le})}}return null};return pt.memo(q)}function Xt(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var s=ho(Cu.apply(void 0,_i([n],o,!1))),m=_u(s);return new im(m,s)}var nn=(n=>(n.HERO="hero",n.WORK="work",n.ABOUT="about",n.CHAT="chat",n.CONTACT="contact",n))(nn||{});/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),db=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,f,s)=>s?s.toUpperCase():f.toLowerCase()),ah=n=>{const o=db(n);return o.charAt(0).toUpperCase()+o.slice(1)},cm=(...n)=>n.filter((o,f,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===f).join(" ").trim(),pb=n=>{for(const o in n)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=Ce.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:f=2,absoluteStrokeWidth:s,className:m="",children:b,iconNode:M,...q},E)=>Ce.createElement("svg",{ref:E,...gb,width:o,height:o,stroke:n,strokeWidth:s?Number(f)*24/Number(o):f,className:cm("lucide",m),...!b&&!pb(q)&&{"aria-hidden":"true"},...q},[...M.map(([O,V])=>Ce.createElement(O,V)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(n,o)=>{const f=Ce.forwardRef(({className:s,...m},b)=>Ce.createElement(hb,{ref:b,iconNode:o,className:cm(`lucide-${fb(ah(n))}`,`lucide-${n}`,s),...m}));return f.displayName=ah(n),f};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],yb=ut("arrow-down",mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fn=ut("arrow-left",vb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Mu=ut("arrow-right",bb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],xb=ut("arrow-up-right",Sb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wb=ut("check",$b);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Tb=ut("dribbble",zb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ab=ut("external-link",Eb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],_b=ut("figma",jb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ih=ut("file-text",Ob);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Cb=ut("funnel",kb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Db=ut("gamepad-2",Mb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Rb=ut("image",Hb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Nb=ut("linkedin",Lb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Bb=ut("mail",Ub);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qb=ut("menu",Gb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Vb=ut("pen-tool",Yb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qb=ut("star",Xb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Kb=ut("tag",Zb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Pb=ut("twitter",Wb);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],um=ut("x",Jb),Ib={en:{nav:{work:"Work",about:"About",cv:"CV",hireMe:"Hire Me",brandText:"Serhiienko",cvAlert:"CV download would trigger here (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"English",ukTitle:"Ukrainian"},hero:{available:"Available for new projects",heading1:"Welcome to my",heading2:"Portfolio",viewWork:"View My Work",lead:""},work:{title:"Works",subtitle:"Selected projects from 5+ years of craft in branding, digital, and game experiences.",all:"All",categories:{brandDesign:"Brand design",uiuxDesign:"UI/UX design",marketing:"Marketing and advertising",illustration:"Illustration",gameDesign:"Game design",games:"Games",landing:"Landing"},emptyState:"Quietly awaiting new masterpieces...",viewProject:"View Project",technologies:"Technologies",close:"Close"},projects:{1:{title:"Lumina Brand Identity",description:"Complete visual identity system for a tech startup, including logo design, typography guidelines, and brand assets.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Sustainable packaging design and identity for an organic skincare line.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",technologies:["Logo Design","Brand Identity","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",technologies:["Illustration","Icon Design","UI Assets"]},21:{title:"Mindzy – Brain Training",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",technologies:["UI/UX","Game UI","Visual Design"]},2:{title:"Ethereal Finance App",description:"A reimagined mobile banking experience focusing on transparency and calm, reducing anxiety around financial management.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"An intuitive smart home control application featuring a sleek dark interface with smooth animations. Users can effortlessly manage lighting, temperature, and connected devices with elegant micro-interactions and real-time status updates.",technologies:["Figma","UI Animation","IoT Design"]},18:{title:"Onboarding for Beauty Shop",description:"A refined onboarding flow for a beauty shop app, focused on personalization and smooth first-time guidance.",technologies:["Figma","UI/UX","Onboarding"]},17:{title:"App Store Screenshots",description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",technologies:["App Store","Marketing","Visual Design"]},6:{title:"Nebula Dashboard",description:"Dark-mode analytics dashboard for a cloud infrastructure provider, visualizing complex data streams in real-time.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"A series of high-conversion social media ads and web banners for a fashion retailer's seasonal launch.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Large format print advertisements and digital displays for an international technology conference.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"A digital illustration series exploring cyberpunk aesthetics, used for editorial features and poster art.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Whimsical character designs and full-page spreads for a children's storybook about space exploration.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Character concept art and environmental assets for a sci-fi RPG. Focused on atmospheric lighting and detailed texturing.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"User interface elements and HUD design for a retro-style adventure game.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",technologies:["Web Design","Landing Page","Visual Design"]}},about:{discovery:"About Me",heading1:"About",heading2:"",experience:"Experience",years:"Years",proficiencies:"Proficiencies",bio:`I am a Graphic Designer with 5 years of experience creating design solutions and visual graphics for digital products and brands.
I work with Figma, Adobe Illustrator, Photoshop, and After Effects. I design branding materials, user interfaces, marketing visuals, and game assets, always focusing on business goals and user experience.`,watermark:"Creative",emphasis:"Me",portraitAlt:"Anna Serhiienko portrait",experienceText:"",skills:{graphicDesign:"Graphic Design",uiuxDesign:"UI/UX Design",gameArt:"Game Art & Assets",digitalIllustration:"Digital Illustration",brandIdentity:"Brand Identity",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Marketing Creatives"}},contact:{title:"Let's Create Together",subtitle:"Contact section removed."},appIcons:{backToPortfolio:"Back to Portfolio",backToPortfolioAria:"Back to portfolio",eyebrow:"Mobile Branding",titlePrimary:"App Icons &",titleEmphasis:"Splash Screens",lead:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",appIconsTitle:"App Icons",splashScreensTitle:"Splash Screens",fullCompositionTitle:"Full Composition",fullCompositionAlt:"App Icons & Splash Screens Full Composition",viewMoreProjects:"View More Projects",footerRights:"All rights reserved.",next:"Next",previous:"Previous",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Back to Portfolio",headerTag:"App Store Screenshots",eyebrow:"Marketing",title:"App Store Screenshots",lead:""},namelaka:{backToPortfolio:"Back to Portfolio",headerTag:"Namelaka",eyebrow:"UI/UX Design",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Back to Portfolio",eyebrow:"UI/UX Design",title:"Mindzy – Brain Training",lead:"A showcase of Mindzy game interfaces and motion previews.",interfaceTitle:"Game Interfaces",videoTitle:"Gameplay Videos"},marketingVideo:{backToPortfolio:"Back to Portfolio",headerTag:"Motion Design",eyebrow:"Motion Design",title:"Marketing Videos",lead:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",featuredTitle:"Featured Videos",allVideosTitle:"All Videos"},elementalQuest:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Elemental Quest",lead:"Game map design and visual assets for an adventure puzzle game.",logoAlt:"Elemental Quest Logo",mapAlt:"Elemental Quest Game Map"},combatPlanes:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Combat Planes",lead:"Character design, plane skins, and game maps for an aerial combat mobile game.",logoAlt:"Combat Planes Logo",galleryAlt:"Combat Planes Game Art"},fattyFish:{backToPortfolio:"Back to Portfolio",headerTag:"Game Art",eyebrow:"Game Art & Design",title:"Fatty Fish",lead:"Character design, game objects, and visual assets for a fun aquatic mobile game.",logoAlt:"Fatty Fish Logo",galleryAlt:"Fatty Fish Game Art"},landingHpVsVader:{backToPortfolio:"Back to Portfolio",navHome:"Home",navGame:"Character",navContact:"Contact Us",playNow:"Play now!",enterThe:"ENTER THE",gameWorld:"GAME",characters:"Characters",harryTitle:"Harry Potter",harryDesc:"The Boy Who Lived, master of the Elder Wand, and the only wizard to defeat Voldemort. Courageous, loyal, and always ready to stand up for his friends.",harryWeapon:"His main weapon is the legendary Elder Wand.",vaderTitle:"Darth Vader",vaderDesc:"Once a Jedi Knight, now the Dark Lord of the Sith. Wields the power of the Force and a red lightsaber. Feared across the galaxy.",vaderWeapon:"His weapon is the iconic red lightsaber.",footerTitle:"GAME",footerSubtitle:"Enter the game world",features:"Features",coreFeatures:"Core features",proExperience:"Pro experience",integrations:"Integrations",learnMore:"Learn more",blog:"Blog",caseStudies:"Case studies",customerStories:"Customer stories",bestPractices:"Best practices",support:"Support",contact:"Contact",supportLink:"Support",legal:"Legal"},footer:{rights:"All rights reserved.",portfolio:"Portfolio",privacy:"Privacy Policy"}},uk:{nav:{work:"Роботи",about:"Про мене",cv:"Резюме",hireMe:"Найняти",brandText:"Сергієнко",cvAlert:"Завантаження резюме відбулося б тут (anna_serhiienko_resume.pdf)."},languageSwitch:{enShort:"EN",ukShort:"UK",enTitle:"Англійська",ukTitle:"Українська"},hero:{available:"Відкрита для нових проєктів",heading1:"Ласкаво просимо до мого",heading2:"портфоліо",viewWork:"Переглянути роботи",lead:""},work:{title:"Роботи",subtitle:"Вибрані проєкти за 5+ років роботи у брендингу, цифровому дизайні та ігровому досвіді.",all:"Усі",categories:{brandDesign:"Бренд-дизайн",uiuxDesign:"UI/UX дизайн",marketing:"Маркетинг та реклама",illustration:"Ілюстрація",gameDesign:"Ігровий дизайн",games:"Ігри",landing:"Лендінг"},emptyState:"Тихо очікуємо нових шедеврів...",viewProject:"Переглянути проєкт",technologies:"Технології",close:"Закрити"},projects:{1:{title:"Lumina Brand Identity",description:"Повна система візуальної айдентики для техстартапу: логотип, типографіка та бренд-матеріали.",technologies:["Illustrator","Brand Strategy","Indesign"]},11:{title:"EcoLife Packaging",description:"Дизайн екопакування та айдентики для лінійки органічної косметики.",technologies:["Packaging","Print Design","Photoshop"]},15:{title:"App Icons & Splash Screens",description:"Колекція яскравих іконок і сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою айдентикою.",technologies:["Illustrator","Icon Design","Mobile Branding"]},19:{title:"RevBack Logo Design",description:"Дослідження логотипу для мобільного застосунку RevBack із сміливою сучасною айдентикою.",technologies:["Logo Design","Бренд-айдентика","Illustrator"]},20:{title:"Namelaka Icons & Illustration",description:"Набір іконок та ілюстрацій для Namelaka: UI-стани, порожні екрани та брендовані візуали.",technologies:["Ілюстрації","Дизайн іконок","UI-ресурси"]},21:{title:"Mindzy – Brain Training",description:"Набір інтерфейсів Mindzy із різноманітними іграми для тренування мозку та UI-станами.",technologies:["UI/UX","Ігровий UI","Візуальний дизайн"]},2:{title:"Ethereal Finance App",description:"Переосмислений мобільний банкінг із фокусом на прозорість і спокій, що зменшує тривожність у фінансових питаннях.",technologies:["Figma","Prototyping","User Research"]},16:{title:"Smart House App",description:"Інтуїтивний застосунок для розумного дому зі стильним темним інтерфейсом і плавними анімаціями. Користувачі легко керують освітленням, температурою та пристроями завдяки елегантним мікровзаємодіям і статусам у реальному часі.",technologies:["Figma","UI Animation","IoT Design"]},6:{title:"Nebula Dashboard",description:"Аналітичний дашборд у темному режимі для хмарного провайдера з візуалізацією складних потоків даних у реальному часі.",technologies:["Figma","React","Motion Design"]},4:{title:"Summer Campaign 2024",description:"Серія конверсійних креативів для соцмереж і веббанерів під сезонний запуск модного бренду.",technologies:["Photoshop","After Effects","Social Media"]},12:{title:"Tech Summit Billboards",description:"Великоформатні друковані та цифрові носії для міжнародної технологічної конференції.",technologies:["Print","Visual Layout","Advertising"]},5:{title:"Neon City Tales",description:"Цифрова серія ілюстрацій у кіберпанк-естетиці для редакційних матеріалів і постерів.",technologies:["Procreate","Digital Painting","Color Theory"]},13:{title:"Children's Book Art",description:"Казкові дизайни персонажів і розвороти для дитячої книжки про космічні пригоди.",technologies:["Vector Art","Character Design","Storytelling"]},10:{title:"Apex Gaming Assets",description:"Концепт-арт персонажів і середовища для науково-фантастичної RPG з акцентом на атмосферне освітлення та деталізовані текстури.",technologies:["Blender","Photoshop","Unity"]},14:{title:"Pixel Quest UI",description:"Елементи інтерфейсу та HUD для ретро-пригодницької гри.",technologies:["Pixel Art","Game UI","Sprite Design"]},26:{title:"Harry Potter vs Darth Vader",description:"Кінематографічний лендінг для фентезійної кросовер-гри: Гаррі Поттер проти Дарта Вейдера.",technologies:["Веб-дизайн","Лендінг","Візуальний дизайн"]}},about:{discovery:"Про мене",heading1:"Про",heading2:"",experience:"Досвід",years:"Років",proficiencies:"Навички",bio:`Я графічний дизайнер з 5-річним досвідом створення дизайн-рішень та візуальної графіки для цифрових продуктів і брендів.
Працюю з Figma, Adobe Illustrator, Photoshop та After Effects. Розробляю брендинг-матеріали, користувацькі інтерфейси, маркетингові візуали та ігрові ресурси, завжди фокусуючись на бізнес-цілях та досвіді користувача.`,watermark:"Творчість",emphasis:"Мене",portraitAlt:"Портрет Анни Сергієнко",experienceText:"",skills:{graphicDesign:"Графічний дизайн",uiuxDesign:"UI/UX дизайн",gameArt:"Ігрова графіка",digitalIllustration:"Цифрова ілюстрація",brandIdentity:"Бренд-айдентика",adobeSuite:"Adobe Creative Suite",figma:"Figma",marketingCreatives:"Маркетингові креативи"}},contact:{title:"Створімо разом",subtitle:"Секцію контактів видалено."},appIcons:{backToPortfolio:"Повернутися до портфоліо",backToPortfolioAria:"Повернутися до портфоліо",eyebrow:"Мобільний брендинг",titlePrimary:"Іконки додатків та",titleEmphasis:"Сплеш-екрани",lead:"Колекція яскравих іконок та сплеш-екранів для мобільних застосунків із грайливими персонажами та сміливою візуальною айдентикою.",appIconsTitle:"Іконки додатків",splashScreensTitle:"Сплеш-екрани",fullCompositionTitle:"Повна композиція",fullCompositionAlt:"Повна композиція іконок і сплеш-екранів",viewMoreProjects:"Переглянути більше проєктів",footerRights:"Усі права захищено.",next:"Далі",previous:"Назад",iconLabels:["Elemental Quest — Alt Icon","Monstrous Evorise","Cat Wars","Fatty Fish","Feed Me","Elemental Quest","RevBack","Selara","Sky Hero"],splashLabels:["Cat Wars","Elemental Craft","Elemental Quest","Fatty Fish","Feed Me","Monstrous Evorise","RevBack","Selara"]},appStoreScreenshots:{backToPortfolio:"Назад до портфоліо",headerTag:"Скріншоти App Store",eyebrow:"Маркетинг",title:"Скріншоти App Store",lead:""},namelaka:{backToPortfolio:"Назад до портфоліо",headerTag:"Namelaka",eyebrow:"UI/UX дизайн",title:"Namelaka Icons & Illustration"},mindzy:{backToPortfolio:"Назад до портфоліо",eyebrow:"UI/UX дизайн",title:"Mindzy – Brain Training",lead:"Добірка інтерфейсів Mindzy та відеопереглядів гри.",interfaceTitle:"Інтерфейси ігор",videoTitle:"Відео геймплею"},marketingVideo:{backToPortfolio:"Назад до портфоліо",headerTag:"Моушн-дизайн",eyebrow:"Моушн-дизайн",title:"Маркетингові відео",lead:"Колекція рекламних відео та моушн-графіки для маркетингових кампаній мобільних додатків.",featuredTitle:"Вибрані відео",allVideosTitle:"Усі відео"},elementalQuest:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Elemental Quest",lead:"Дизайн ігрової карти та візуальні ресурси для пригодницької гри-головоломки.",logoAlt:"Логотип Elemental Quest",mapAlt:"Ігрова карта Elemental Quest"},combatPlanes:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Combat Planes",lead:"Дизайн персонажів, скіни літаків та ігрові карти для мобільної гри з повітряними боями.",logoAlt:"Логотип Combat Planes",galleryAlt:"Ігрове мистецтво Combat Planes"},fattyFish:{backToPortfolio:"Назад до портфоліо",headerTag:"Ігрове мистецтво",eyebrow:"Ігрове мистецтво та дизайн",title:"Fatty Fish",lead:"Дизайн персонажів, ігрові об'єкти та візуальні ресурси для веселої водної мобільної гри.",logoAlt:"Логотип Fatty Fish",galleryAlt:"Ігрове мистецтво Fatty Fish"},landingHpVsVader:{backToPortfolio:"Назад до портфоліо",navHome:"Головна",navGame:"Гра",navContact:"Контакти",playNow:"Грати зараз!",enterThe:"УВІЙДИ У",gameWorld:"ІГРОВИЙ",characters:"Персонажі",harryTitle:"Гаррі Поттер",harryDesc:"Хлопчик, що вижив, володар Бузинової палички, єдиний, хто переміг Волдеморта. Відважний, вірний, завжди готовий захистити друзів.",harryWeapon:"Його головна зброя — легендарна Бузинова паличка.",vaderTitle:"Дарт Вейдер",vaderDesc:"Колись лицар-джедай, тепер Лорд ситхів. Володіє силою та червоним світловим мечем. Його боять у всій галактиці.",vaderWeapon:"Його зброя — культовий червоний світловий меч.",footerTitle:"ГРА",footerSubtitle:"Увійди у ігровий світ",features:"Можливості",coreFeatures:"Основні функції",proExperience:"Про досвід",integrations:"Інтеграції",learnMore:"Дізнатися більше",blog:"Блог",caseStudies:"Кейси",customerStories:"Історії клієнтів",bestPractices:"Найкращі практики",support:"Підтримка",contact:"Контакти",supportLink:"Підтримка",legal:"Правова інформація"},footer:{rights:"Усі права захищено.",portfolio:"Портфоліо",privacy:"Політика конфіденційності"}}},fm=Ce.createContext(void 0),Fb=({children:n})=>{const[o,f]=Ce.useState("en"),s={lang:o,setLang:f,t:Ib[o]};return d.jsx(fm.Provider,{value:s,children:n})},Et=()=>{const n=Ce.useContext(fm);if(!n)throw new Error("useLanguage must be used within a LanguageProvider");return n},Fc=(n,o)=>{const s={"Brand design":"brandDesign","UI/UX design":"uiuxDesign","Marketing and advertising":"marketing",Illustration:"illustration","Game design":"gameDesign",Games:"games",Landing:"landing"}[n];return s?o.work.categories[s]:n},e1=(n,o)=>{const s={"Graphic Design":"graphicDesign","UI/UX Design":"uiuxDesign","Game Art & Assets":"gameArt","Digital Illustration":"digitalIllustration","Brand Identity":"brandIdentity","Adobe Creative Suite":"adobeSuite",Figma:"figma","Marketing Creatives":"marketingCreatives"}[n];return s?o.about.skills[s]:n},t1=y.nav`
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
`,n1=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,dm=y.button`
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
`,a1=y.span`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.brand.purple};
  transition: transform 0.2s ease;

  ${dm}:hover & {
    transform: rotate(12deg);
  }
`,i1=y.span`
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    display: inline;
  }
`,l1=y.div`
  display: none;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[10]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: flex;
  }
`,r1=y.button`
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
`,o1=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
`,s1=y.button`
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
`,c1=y.button`
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
`,u1=y.button`
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
`,f1=y.div`
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
`,d1=y.button`
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
`,p1=y.div`
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: 1px solid ${({theme:n})=>n.colors.slate[100]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
`,g1=y.button`
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
`,h1=y.button`
  border: none;
  background: ${({theme:n})=>n.colors.slate[900]};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[5]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  cursor: pointer;
`,m1=({onNavigate:n})=>{const{t:o}=Et(),[f,s]=Ce.useState(!1),[m,b]=Ce.useState(!1);Ce.useEffect(()=>{const V=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V)},[]);const M=V=>{if(n){n(V),b(!1);return}const P=document.getElementById(V);P&&(P.scrollIntoView({behavior:"smooth"}),b(!1))},q=()=>{window.location.href="mailto:hi.anna.design@gmail.com"},E=()=>{alert(o.nav.cvAlert)},O=[{label:o.nav.work,id:nn.WORK},{label:o.nav.about,id:nn.ABOUT}];return d.jsxs(d.Fragment,{children:[d.jsx(t1,{$scrolled:f,children:d.jsxs(n1,{children:[d.jsxs(dm,{onClick:()=>M(nn.HERO),children:[d.jsx(a1,{children:"A."}),d.jsx(i1,{children:o.nav.brandText})]}),d.jsxs(l1,{children:[O.map(V=>d.jsx(r1,{onClick:()=>M(V.id),children:V.label},V.id)),d.jsxs(o1,{children:[d.jsxs(s1,{onClick:E,children:[d.jsx(ih,{size:16}),o.nav.cv]}),d.jsx(c1,{onClick:q,children:o.nav.hireMe})]})]}),d.jsx(u1,{onClick:()=>b(!m),children:m?d.jsx(um,{size:24}):d.jsx(qb,{size:24})})]})}),d.jsxs(f1,{$open:m,children:[O.map(V=>d.jsx(d1,{onClick:()=>M(V.id),children:V.label},V.id)),d.jsxs(p1,{children:[d.jsxs(g1,{onClick:E,children:[d.jsx(ih,{size:24}),o.nav.cv]}),d.jsx(h1,{onClick:q,children:o.nav.hireMe})]})]})]})},y1={light:"light",regular:"regular",medium:"medium",bold:"bold"},v1={xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},b1=y.span`
  font-size: ${({theme:n,$size:o})=>n.typography.sizes[v1[o]]};
  font-weight: ${({theme:n,$weight:o})=>n.typography.weights[y1[o]]};
  color: ${({theme:n,$color:o})=>o==="primary"?n.colors.slate[900]:o==="secondary"?n.colors.slate[600]:n.colors.slate[500]};
`,Du=({as:n="span",element:o,message:f,size:s="md",weight:m="regular",color:b="secondary",...M})=>{const{t:q}=Et(),E=o??n;return d.jsx(b1,{as:E,$size:s,$weight:m,$color:b,...M,children:f(q)})},k={layout:{fullViewportHeight:"100vh",fullViewportWidth:"100vw",heroContentMaxWidth:"960px",heroLeadMaxWidth:"560px",workHeadingMaxWidth:"520px",workModalMaxWidth:"1150px",workModalMaxHeight:"90vh",workModalMediaHeight:"300px",aboutExperienceMaxWidth:"200px",appIconsHeroLeadMaxWidth:"560px",aboutWatermarkFontSize:"20vw",aboutWatermarkOffsetX:"-5%"},sizing:{progressBarHeight:"3px",hairline:"1px",scrollbarWidth:"6px",heroFloatLeftOffset:"-72px",heroFloatRightOffset:"-80px",heroFloatRightTop:"40px",heroFloatLeftAlt:"80px",heroFloatRightBottom:"-20px",carouselShellPadding:"0 20px",carouselSlidePadding:"0 8px",carouselSlidePaddingSm:"0 4px",carouselCaptionOffsetSm:"10px",dashedBorderWidth:"2px"},effects:{blurBlob:"120px",blurSoft:"10px",blurGlass:"12px",blurStrong:"18px",blobOpacity:.7,glassWhite80:"rgba(255, 255, 255, 0.8)",glassWhite70:"rgba(255, 255, 255, 0.7)",glassWhite50:"rgba(255, 255, 255, 0.5)",glassWhite10:"rgba(255, 255, 255, 0.1)",glassWhite20:"rgba(255, 255, 255, 0.2)",overlayDark95:"rgba(15, 23, 42, 0.95)",overlayWhite60:"rgba(255, 255, 255, 0.6)",sectionWash:"rgba(248, 250, 252, 0.6)",overlayWhite40:"rgba(255, 255, 255, 0.4)",blobBlue:"rgba(59, 130, 246, 0.2)",blobPurple:"rgba(124, 58, 237, 0.2)",blobPink:"rgba(236, 72, 153, 0.2)",cardOverlayGradient:"linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",aboutOverlayGradient:"linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)",appIconsBackground:"linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(236, 254, 255, 0.6))",carouselBackground:"linear-gradient(180deg, #020617, #0f172a, #020617)",carouselBackdrop:"radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 60%)",compositionGradient:"linear-gradient(135deg, rgba(196, 181, 253, 0.4), rgba(253, 242, 248, 0.5), rgba(191, 219, 254, 0.6))",carouselDropShadow:"drop-shadow(0 24px 50px rgba(0, 0, 0, 0.45))",carouselCardShadow:"0 24px 50px rgba(0, 0, 0, 0.35)",carouselCaptionMuted:"rgba(226, 232, 240, 0.8)",carouselCardOpacity:.55},motion:{floatOffset:"-20px",revealOffset:"30px",hoverLiftSm:"-1px",hoverLiftMd:"-4px",hoverLiftLg:"-8px",arrowDrop:"4px",iconLift:"-10px",scaleHover:1.02,scaleActive:1.05,scaleDown:.9},zIndex:{background:0,foreground:1,stickyHeader:20,nav:50,modal:100,closeButton:2,progress:100},carousel:{centerPaddingLg:"60px",centerPaddingMd:"40px",centerPaddingSm:"0px",slidesToShowLg:5,slidesToShowMd:3,slidesToShowSm:3,slidesToScrollSm:1,speed:500,autoplaySpeed:2800,breakpointLg:1024,breakpointSm:640,breakpointXs:520}},S1=Xt`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${k.motion.floatOffset}); }
`,x1=Xt`
  0% { opacity: 0; transform: translateY(${k.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,$1=y.section`
  position: relative;
  min-height: ${k.layout.fullViewportHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]} 0;
  overflow: hidden;
`,w1=y.div`
  position: relative;
  z-index: 1;
  max-width: ${k.layout.heroContentMaxWidth};
  margin: 0 auto;
  animation: ${x1} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,wu=y.div`
  position: absolute;
  padding: ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  animation: ${S1} 6s ease-in-out infinite;
  display: none;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,lh=y(wu)`
  animation-delay: 3s;
`,z1=y.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${k.effects.glassWhite50};
  backdrop-filter: blur(${k.effects.blurSoft});
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[200]};
  border-radius: ${({theme:n})=>n.radii.full};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
`,T1=y.span`
  width: ${({theme:n})=>n.spacing[2]};
  height: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: #22c55e;
`,E1=y.span`
  color: ${({theme:n})=>n.colors.slate[600]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
`,A1=y.h1`
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
`,j1=y.span`
  display: inline-block;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,_1=y(Du)`
  margin: 0 auto ${({theme:n})=>n.spacing[12]} auto;
  max-width: ${k.layout.heroLeadMaxWidth};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,O1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    flex-direction: row;
  }
`,pm=y.button`
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
    transform: translateY(${k.motion.hoverLiftSm});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,k1=y(yb)`
  transition: transform 0.2s ease;

  ${pm}:hover & {
    transform: translateY(${k.motion.arrowDrop});
  }
`,C1=()=>{const{t:n}=Et();return d.jsx($1,{id:nn.HERO,children:d.jsxs(w1,{children:[d.jsx(wu,{style:{left:k.sizing.heroFloatLeftOffset,top:0},children:d.jsx(_b,{color:"#7c3aed",size:32})}),d.jsx(lh,{style:{right:k.sizing.heroFloatRightOffset,top:k.sizing.heroFloatRightTop},children:d.jsx(Vb,{color:"#3b82f6",size:32})}),d.jsx(lh,{style:{left:k.sizing.heroFloatLeftAlt,bottom:0},children:d.jsx(Rb,{color:"#ec4899",size:32})}),d.jsx(wu,{style:{right:0,bottom:k.sizing.heroFloatRightBottom},children:d.jsx(Db,{color:"#10b981",size:32})}),d.jsxs(z1,{children:[d.jsx(T1,{}),d.jsx(E1,{children:n.hero.available})]}),d.jsxs(A1,{children:[n.hero.heading1," ",d.jsx("br",{}),d.jsx(j1,{children:n.hero.heading2})]}),d.jsx(_1,{element:"p",message:o=>o.hero.lead}),d.jsx(O1,{children:d.jsxs(pm,{onClick:()=>{var o;return(o=document.getElementById(nn.WORK))==null?void 0:o.scrollIntoView({behavior:"smooth"})},children:[n.hero.viewWork,d.jsx(k1,{size:18})]})})]})})},se="/assets",M1=`${se}/images/brand/app-icons-splash-screens/full-composition.png`,D1=`${se}/images/brand/Namelaka icons and illustration/Full_Composition_Namelaka.png`,H1=`${se}/images/brand/Mindzy – Brain Training/UI/Full_Composition_Mindzy – Brain Training.png`,R1=`${se}/images/brand/Full_Composition_Marketing_video.png`,L1=`${se}/images/brand/Elemental Quest game/Full_Composition_Elemental Quest game map.png`,N1=`${se}/images/brand/Combat Planes/Full_Composition_logo_Combat Planes.png`,U1=`${se}/images/brand/Fatty Fish/Character.png`,B1=`${se}/images/brand/Lending Harry Potter vs Darth_Vader/Harry_Potter_part_1.png`,G1=[`${se}/images/brand/App Store Screenshots/1 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/2 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/3 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/4 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/5 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/6 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/7 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/8 Cat Wars.jpg`,`${se}/images/brand/App Store Screenshots/1 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/2 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/3 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/4 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/5 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/6 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/7 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/8 Elemental Craft.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 1.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 2.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 3.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 4.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 5.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 6.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 7.jpg`,`${se}/images/brand/App Store Screenshots/Cloud Noise 8.jpg`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 1.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 2.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 3.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 4.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 5.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 6.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 7.png`,`${se}/images/brand/App Store Screenshots/Monstrous Evorise 8.png`,`${se}/images/brand/App Store Screenshots/Scriptor 1.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 2.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 3.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 4.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 5.jpg`,`${se}/images/brand/App Store Screenshots/Scriptor 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 1.jpg`,`${se}/images/brand/App Store Screenshots/Selara 2.jpg`,`${se}/images/brand/App Store Screenshots/Selara 3.jpg`,`${se}/images/brand/App Store Screenshots/Selara 4.jpg`,`${se}/images/brand/App Store Screenshots/Selara 5.jpg`,`${se}/images/brand/App Store Screenshots/Selara 6.jpg`,`${se}/images/brand/App Store Screenshots/Selara 7.jpg`,`${se}/images/brand/App Store Screenshots/Sky Hero 1.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 2.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 3.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 4.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 5.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 6.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 7.png`,`${se}/images/brand/App Store Screenshots/Sky Hero 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 1.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 2.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 3.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 4.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 5.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 6.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 7.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 8.png`,`${se}/images/brand/App Store Screenshots/Star Cleaning 9.png`],vo="Anna Serhiienko",q1="Graphic Designer",Y1="My name is Anna Serhiienko. I have been working as a graphic designer for 5 years. I specialize in creating cohesive visual languages across various media. Whether it's crafting a unique brand identity, designing intuitive user interfaces, or building immersive game assets, I bring creativity and precision to every project.",V1=["Brand design","UI/UX design","Marketing and advertising","Games","Landing"],gm=["Graphic Design","UI/UX Design","Game Art & Assets","Digital Illustration","Brand Identity","Adobe Creative Suite","Figma","Marketing Creatives"],bo=[{id:20,title:"Namelaka Icons & Illustration",category:"UI/UX design",mediaUrl:D1,mediaType:"image",description:"Iconography and illustration set for Namelaka, covering UI states, empty screens, and branded visuals.",link:"#namelaka",technologies:["Illustration","Icon Design","UI Assets"]},{id:15,title:"App Icons & Splash Screens",category:"Brand design",mediaUrl:M1,mediaType:"image",description:"A collection of vibrant app icons and splash screens designed for mobile applications, featuring playful characters and bold visual identities.",link:"#app-icons",technologies:["Illustrator","Icon Design","Mobile Branding"]},{id:19,title:"RevBack Logo Design",category:"Brand design",mediaUrl:"https://cdn.dribbble.com/userupload/36126269/file/original-f90f3932c3f7d4e6048c28f799c4cbba.gif",mediaType:"image",description:"Logo design exploration for the RevBack mobile app with a bold, modern identity.",link:"https://dribbble.com/shots/17802180-Logo-design-for-RevBack-mobile-app",technologies:["Logo Design","Brand Identity","Illustrator"]},{id:21,title:"Mindzy – Brain Training",category:"UI/UX design",mediaUrl:H1,mediaType:"image",description:"Interface suite for Mindzy, showcasing a range of brain-training games and playful UI states.",link:"#mindzy",technologies:["UI/UX","Game UI","Visual Design"]},{id:17,title:"App Store Screenshots",category:"Marketing and advertising",mediaUrl:`${se}/images/brand/App Store Screenshots/Full_Composition_App Store Screenshots.png`,mediaType:"image",gallery:G1,description:"A curated set of App Store-ready screenshot compositions showcasing multiple game worlds, UI moments, and promotional layouts.",link:"#app-store-screenshots",technologies:["App Store","Marketing","Visual Design"]},{id:22,title:"Marketing Videos",category:"Marketing and advertising",mediaUrl:R1,mediaType:"image",description:"A collection of promotional videos and motion graphics for mobile app marketing campaigns.",link:"#marketing-video",technologies:["Motion Design","After Effects","Marketing"]},{id:23,title:"Elemental Quest",category:"Games",mediaUrl:L1,mediaType:"image",description:"Game map design and visual assets for an adventure puzzle game featuring magical elements.",link:"#elemental-quest",technologies:["Game Art","Illustration","Visual Design"]},{id:24,title:"Combat Planes",category:"Games",mediaUrl:N1,mediaType:"image",description:"Character design, plane skins, and game maps for an aerial combat mobile game.",link:"#combat-planes",technologies:["Game Art","Character Design","Visual Design"]},{id:25,title:"Fatty Fish",category:"Games",mediaUrl:U1,mediaType:"image",description:"Character design, game objects, and visual assets for a fun aquatic mobile game.",link:"#fatty-fish",technologies:["Game Art","Character Design","Visual Design"]},{id:26,title:"Harry Potter vs Darth Vader",category:"Landing",mediaUrl:B1,mediaType:"image",description:"A cinematic landing page for a fantasy crossover game pitting Harry Potter against Darth Vader.",link:"#landing-hp-vs-vader",technologies:["Web Design","Landing Page","Visual Design"]}],X1=[{name:"LinkedIn",url:"https://www.linkedin.com/in/anna-serhiienko-1459a6187/",icon:"Linkedin"},{name:"Dribbble",url:"https://dribbble.com/ArtistAnn",icon:"Dribbble"}];`${vo}${q1}${Y1}${gm.join(", ")}${bo.map(n=>`- ${n.title} (${n.category}): ${n.description}`).join(`
`)}`;const hm=Xt`
  0% { opacity: 0; transform: translateY(${k.motion.revealOffset}); }
  100% { opacity: 1; transform: translateY(0); }
`,Q1=Xt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Z1=y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  background: ${k.effects.sectionWash};
`,K1=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,W1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`,P1=y.div`
  max-width: ${k.layout.workHeadingMaxWidth};
`,J1=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  }
`,I1=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes.xl};
  }
`,F1=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,eS=y.button`
  padding: ${({theme:n})=>n.spacing[3]} ${({theme:n})=>n.spacing[6]};
  border-radius: ${({theme:n})=>n.radii.full};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  border: ${k.sizing.hairline} solid ${({theme:n,$active:o})=>o?"transparent":n.colors.slate[100]};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.slate[400]};
  background: ${({theme:n,$active:o})=>o?n.colors.slate[900]:n.colors.white};
  box-shadow: ${({theme:n,$active:o})=>o?n.shadows.md:"none"};
  transform: ${({$active:n})=>n?"scale(1.05)":"scale(1)"};

  &:hover {
    border-color: ${({theme:n})=>n.colors.brand.purple};
    color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.brand.purple};
  }
`,tS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    gap: ${({theme:n})=>n.spacing[12]};
  }
`,Ul=y.div`
  cursor: pointer;
  animation: ${hm} 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
`,nS=y.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[200]};
  box-shadow: ${({theme:n})=>n.shadows.sm};
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  ${Ul}:hover & {
    transform: translateY(${k.motion.hoverLiftLg});
    box-shadow: ${({theme:n})=>n.shadows.lg};
  }
`,aS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ul}:hover & {
    transform: scale(1);
  }
`,iS=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.7s ease;

  ${Ul}:hover & {
    transform: scale(1);
  }
`,lS=y.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:n})=>n.spacing[10]};
  background: ${k.effects.cardOverlayGradient};
  opacity: 1;
  transition: opacity 0.5s ease;
`,rS=y.span`
  color: ${k.effects.overlayWhite60};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,oS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["2xl"]};
  color: ${({theme:n})=>n.colors.white};
`,sS=y.div`
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
`,cS=y.div`
  text-align: center;
  padding: ${({theme:n})=>n.spacing[16]} ${({theme:n})=>n.spacing[6]};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  border: ${k.sizing.dashedBorderWidth} dashed ${({theme:n})=>n.colors.slate[100]};
`,uS=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[400]};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
`,fS=y.div`
  position: fixed;
  inset: 0;
  z-index: ${k.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[4]};
  animation: ${Q1} 0.2s ease;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[10]};
  }
`,dS=y.div`
  position: absolute;
  inset: 0;
  background: ${k.effects.overlayDark95};
  backdrop-filter: blur(${k.effects.blurStrong});
`,pS=y.div`
  position: relative;
  width: 100%;
  max-width: ${k.layout.workModalMaxWidth};
  background: ${({theme:n})=>n.colors.white};
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  box-shadow: ${({theme:n})=>n.shadows.xl};
  display: flex;
  flex-direction: column;
  max-height: ${k.layout.workModalMaxHeight};
  animation: ${hm} 0.6s cubic-bezier(0, 0, 0.2, 1);

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    flex-direction: row;
  }
`,gS=y.button`
  position: absolute;
  top: ${({theme:n})=>n.spacing[6]};
  right: ${({theme:n})=>n.spacing[6]};
  z-index: ${k.zIndex.closeButton};
  width: ${({theme:n})=>n.spacing[9]};
  height: ${({theme:n})=>n.spacing[9]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: none;
  background: ${k.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.slate[900]};
  cursor: pointer;
  backdrop-filter: blur(${k.effects.blurGlass});
  transition: background 0.2s ease;

  &:hover {
    background: ${k.effects.glassWhite20};
  }
`,hS=y.div`
  width: 100%;
  background: ${({theme:n})=>n.colors.slate[100]};
  overflow: hidden;
  height: ${k.layout.workModalMediaHeight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    width: 60%;
    height: auto;
  }
`,mS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,yS=y.video`
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
    height: ${k.sizing.scrollbarWidth};
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
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`;y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: ${({theme:n})=>n.colors.white};
`;const vS=y.div`
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
`,bS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
  color: ${({theme:n})=>n.colors.brand.purple};
`,SS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
`,xS=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  color: ${({theme:n})=>n.colors.slate[900]};
`,$S=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,wS=y.div`
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,zS=y.h4`
  margin: 0 0 ${({theme:n})=>n.spacing[4]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,TS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:n})=>n.spacing[2]};
`,ES=y.span`
  padding: ${({theme:n})=>n.spacing[2]} ${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.slate[50]};
  border-radius: ${({theme:n})=>n.radii.xl};
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[600]};
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,AS=y.div`
  margin-top: auto;
  padding-top: ${({theme:n})=>n.spacing[8]};
  border-top: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,jS=y.a`
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
    transform: translateY(${k.motion.hoverLiftSm});
  }
`,_S=()=>{const{t:n}=Et(),[o,f]=Ce.useState("All"),[s,m]=Ce.useState(null),b=E=>E.includes(" ")?encodeURI(E):E;Ce.useEffect(()=>{if(!s)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[s]);const M=["All",...V1],q=Ce.useMemo(()=>o==="All"?bo:bo.filter(E=>E.category===o),[o]);return d.jsxs(Z1,{id:nn.WORK,children:[d.jsxs(K1,{children:[d.jsxs(W1,{children:[d.jsxs(P1,{children:[d.jsx(J1,{children:n.work.title}),d.jsx(I1,{children:n.work.subtitle})]}),d.jsx(F1,{children:M.map(E=>d.jsx(eS,{$active:o===E,onClick:()=>f(E),children:E==="All"?n.work.all:Fc(E,n)},E))})]}),d.jsx(tS,{children:q.map((E,O)=>{const V=n.projects[E.id],P=(V==null?void 0:V.title)??E.title;return d.jsx(Ul,{style:{animationDelay:`${O*.1}s`},onClick:()=>m(E),children:d.jsxs(nS,{children:[E.mediaType==="video"?d.jsx(iS,{src:b(E.mediaUrl),muted:!0,loop:!0,playsInline:!0,autoPlay:!0}):d.jsx(aS,{src:b(E.mediaUrl),alt:P}),d.jsxs(lS,{children:[d.jsx(rS,{children:Fc(E.category,n)}),d.jsx(oS,{children:P}),d.jsx(sS,{children:d.jsx(xb,{size:24})})]})]})},E.id)})}),q.length===0&&d.jsxs(cS,{children:[d.jsx(Cb,{color:"#e2e8f0",size:48}),d.jsx(uS,{children:n.work.emptyState})]})]}),s&&(()=>{const E=n.projects[s.id],O=(E==null?void 0:E.title)??s.title,V=(E==null?void 0:E.description)??s.description,P=(E==null?void 0:E.technologies)??s.technologies;return d.jsxs(fS,{children:[d.jsx(dS,{onClick:()=>m(null)}),d.jsxs(pS,{children:[d.jsx(gS,{onClick:()=>m(null),"aria-label":n.work.close,children:d.jsx(um,{size:24})}),d.jsx(hS,{children:s.mediaType==="video"?d.jsx(yS,{src:b(s.mediaUrl),autoPlay:!0,muted:!0,loop:!0,controls:!0}):d.jsx(mS,{src:b(s.mediaUrl),alt:O})}),d.jsxs(vS,{children:[d.jsxs(bS,{children:[d.jsx(Kb,{size:14}),d.jsx(SS,{children:Fc(s.category,n)})]}),d.jsx(xS,{children:O}),d.jsx($S,{children:V}),d.jsxs(wS,{children:[d.jsx(zS,{children:n.work.technologies}),d.jsx(TS,{children:P.map((ne,ue)=>d.jsx(ES,{children:ne},ue))})]}),d.jsx(AS,{children:d.jsxs(jS,{href:s.link,children:[n.work.viewProject,d.jsx(Ab,{size:18})]})})]})]})]})})()]})},OS=Xt`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${k.motion.floatOffset}); }
`,kS=y.section`
  position: relative;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`,CS=y.div`
  position: absolute;
  top: ${({theme:n})=>n.spacing[10]};
  right: ${k.layout.aboutWatermarkOffsetX};
  font-size: ${k.layout.aboutWatermarkFontSize};
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-style: italic;
  color: ${({theme:n})=>n.colors.slate[50]};
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`,MS=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,DS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[13]};
  align-items: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,HS=y.div`
  position: relative;
`,RS=y.div`
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
`,LS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
`,NS=y.div`
  position: absolute;
  inset: 0;
  background: ${k.effects.aboutOverlayGradient};
  opacity: 0;
  transition: opacity 0.3s ease;
`,US=y.div`
  position: absolute;
  bottom: -${({theme:n})=>n.spacing[9]};
  right: -${({theme:n})=>n.spacing[4]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  animation: ${OS} 6s ease-in-out infinite;
  max-width: ${k.layout.aboutExperienceMaxWidth};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    right: -${({theme:n})=>n.spacing[10]};
  }
`,BS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin-bottom: ${({theme:n})=>n.spacing[2]};
`,GS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  color: ${({theme:n})=>n.colors.slate[400]};
`,qS=y.p`
  margin: 0 0 ${({theme:n})=>n.spacing[1]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["3xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
`,YS=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.lg};
`,VS=y(Du)`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[500]};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,XS=y.div`
  display: flex;
  flex-direction: column;
`;y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`;const QS=y.h2`
  margin: 0 0 ${({theme:n})=>n.spacing[10]} 0;
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["4xl"]};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  color: ${({theme:n})=>n.colors.slate[900]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,ZS=y.span`
  font-style: italic;
`,KS=y(Du)`
  margin: 0 0 ${({theme:n})=>n.spacing[12]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  color: ${({theme:n})=>n.colors.slate[500]};
  font-weight: ${({theme:n})=>n.typography.weights.light};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
`,WS=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[12]};
`,PS=y.h3`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,JS=y.div`
  width: ${({theme:n})=>n.spacing[7]};
  height: ${k.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,IS=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[8]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,FS=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};
  transition: color 0.3s ease;
`,mm=y.div`
  width: ${({theme:n})=>n.spacing[5]};
  height: ${({theme:n})=>n.spacing[5]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${({theme:n})=>n.colors.slate[100]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
`,ym=y(wb)`
  color: ${({theme:n})=>n.colors.slate[400]};
  transition: color 0.3s ease;
`,vm=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.md};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
  transition: color 0.3s ease;
`,ex=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[3]};

  &:hover ${mm} {
    background: ${({theme:n})=>n.colors.brand.purple};
  }

  &:hover ${ym} {
    color: ${({theme:n})=>n.colors.white};
  }

  &:hover ${vm} {
    color: ${({theme:n})=>n.colors.slate[900]};
  }
`,tx=()=>{const{t:n}=Et();return d.jsxs(kS,{id:nn.ABOUT,children:[d.jsx(CS,{children:n.about.watermark}),d.jsx(MS,{children:d.jsxs(DS,{children:[d.jsxs(HS,{children:[d.jsxs(RS,{children:[d.jsx(LS,{src:"/assets/images/profile/me.png",alt:n.about.portraitAlt}),d.jsx(NS,{"data-overlay":!0})]}),d.jsxs(US,{children:[d.jsxs(BS,{children:[d.jsx(Qb,{color:"#6366f1",fill:"#6366f1",size:16}),d.jsx(GS,{children:n.about.experience})]}),d.jsxs(qS,{children:["5+ ",d.jsx(YS,{children:n.about.years})]}),d.jsx(VS,{element:"p",message:f=>f.about.experienceText})]})]}),d.jsxs(XS,{children:[d.jsxs(QS,{children:[n.about.heading1," ",d.jsx(ZS,{children:n.about.emphasis})," ",d.jsx("br",{})," ",n.about.heading2]}),d.jsx(KS,{element:"p",message:f=>f.about.bio}),d.jsx(WS,{children:d.jsxs("div",{children:[d.jsxs(PS,{children:[d.jsx(JS,{}),n.about.proficiencies]}),d.jsx(IS,{children:gm.map((f,s)=>d.jsx(FS,{children:d.jsxs(ex,{children:[d.jsx(mm,{children:d.jsx(ym,{size:12})}),d.jsx(vm,{children:e1(f,n)})]})},s))})]})})]})]})})]})},nx=y.footer`
  background: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.slate[900]};
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  border-top: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,ax=y.div`
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
`,ix=y.div`
  text-align: center;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    text-align: ${({$align:n})=>n==="right"?"right":"left"};
  }
`,lx=y.h3`
  margin: 0 0 ${({theme:n})=>n.spacing[2]} 0;
  font-size: ${({theme:n})=>n.typography.sizes.xl};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: -0.01em;
`,rx=y.p`
  margin: 0;
  color: ${({theme:n})=>n.colors.slate[500]};
  font-size: ${({theme:n})=>n.typography.sizes.sm};
`,ox=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
`,sx=y.a`
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
    transform: translateY(${k.motion.hoverLiftMd});
  }
`,cx=()=>{const{t:n}=Et(),o=f=>{switch(f){case"Twitter":return d.jsx(Pb,{size:20});case"Linkedin":return d.jsx(Nb,{size:20});case"Dribbble":return d.jsx(Tb,{size:20});case"Mail":return d.jsx(Bb,{size:20});default:return null}};return d.jsx(nx,{children:d.jsxs(ax,{children:[d.jsxs(ix,{children:[d.jsx(lx,{children:vo}),d.jsxs(rx,{children:["© ",new Date().getFullYear()," ",vo,". ",n.footer.rights]})]}),d.jsx(ox,{children:X1.map(f=>d.jsx(sx,{href:f.url,target:"_blank",rel:"noopener noreferrer","aria-label":f.name,children:o(f.icon)},f.name))})]})})};var Re=(n=>(n.PORTFOLIO="portfolio",n.APP_ICONS="app-icons",n.APP_STORE_SCREENSHOTS="app-store-screenshots",n.NAMELAKA="namelaka",n.MINDZY="mindzy",n.MARKETING_VIDEO="marketing-video",n.ELEMENTAL_QUEST="elemental-quest",n.COMBAT_PLANES="combat-planes",n.FATTY_FISH="fatty-fish",n.LANDING_HP_VS_VADER="landing-hp-vs-vader",n))(Re||{}),eu={},tu={},_l={},nu={},rh;function ux(){return rh||(rh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=o})(nu)),nu}var au,oh;function fx(){if(oh)return au;oh=1;var n="Expected a function",o=NaN,f="[object Symbol]",s=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,M=/^0o[0-7]+$/i,q=parseInt,E=typeof io=="object"&&io&&io.Object===Object&&io,O=typeof self=="object"&&self&&self.Object===Object&&self,V=E||O||Function("return this")(),P=Object.prototype,ne=P.toString,ue=Math.max,le=Math.min,X=function(){return V.Date.now()};function he(w,z,x){var D,_,v,G,Z,R,W=0,ee=!1,j=!1,u=!0;if(typeof w!="function")throw new TypeError(n);z=oe(z)||0,ce(x)&&(ee=!!x.leading,j="maxWait"in x,v=j?ue(oe(x.maxWait)||0,z):v,u="trailing"in x?!!x.trailing:u);function ie(te){var me=D,de=_;return D=_=void 0,W=te,G=w.apply(de,me),G}function T(te){return W=te,Z=setTimeout(S,z),ee?ie(te):G}function p(te){var me=te-R,de=te-W,Se=z-me;return j?le(Se,v-de):Se}function g(te){var me=te-R,de=te-W;return R===void 0||me>=z||me<0||j&&de>=v}function S(){var te=X();if(g(te))return U(te);Z=setTimeout(S,p(te))}function U(te){return Z=void 0,u&&D?ie(te):(D=_=void 0,G)}function H(){Z!==void 0&&clearTimeout(Z),W=0,D=R=_=Z=void 0}function J(){return Z===void 0?G:U(X())}function K(){var te=X(),me=g(te);if(D=arguments,_=this,R=te,me){if(Z===void 0)return T(R);if(j)return Z=setTimeout(S,z),ie(R)}return Z===void 0&&(Z=setTimeout(S,z)),G}return K.cancel=H,K.flush=J,K}function ce(w){var z=typeof w;return!!w&&(z=="object"||z=="function")}function pe(w){return!!w&&typeof w=="object"}function ae(w){return typeof w=="symbol"||pe(w)&&ne.call(w)==f}function oe(w){if(typeof w=="number")return w;if(ae(w))return o;if(ce(w)){var z=typeof w.valueOf=="function"?w.valueOf():w;w=ce(z)?z+"":z}if(typeof w!="string")return w===0?w:+w;w=w.replace(s,"");var x=b.test(w);return x||M.test(w)?q(w.slice(2),x?2:8):m.test(w)?o:+w}return au=he,au}var iu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var sh;function jo(){return sh||(sh=1,(function(n){(function(){var o={}.hasOwnProperty;function f(){for(var b="",M=0;M<arguments.length;M++){var q=arguments[M];q&&(b=m(b,s(q)))}return b}function s(b){if(typeof b=="string"||typeof b=="number")return b;if(typeof b!="object")return"";if(Array.isArray(b))return f.apply(null,b);if(b.toString!==Object.prototype.toString&&!b.toString.toString().includes("[native code]"))return b.toString();var M="";for(var q in b)o.call(b,q)&&b[q]&&(M=m(M,q));return M}function m(b,M){return M?b?b+" "+M:b+M:b}n.exports?(f.default=f,n.exports=f):window.classNames=f})()})(iu)),iu.exports}var re={},lu={},ch;function bm(){return ch||(ch=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(Sn());function f(m){return m&&m.__esModule?m:{default:m}}var s={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(b){return o.default.createElement("ul",{style:{display:"block"}},b)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(b){return o.default.createElement("button",null,b+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};n.default=s})(lu)),lu}var uh;function Bl(){if(uh)return re;uh=1,Object.defineProperty(re,"__esModule",{value:!0}),re.checkSpecKeys=re.checkNavigable=re.changeSlide=re.canUseDOM=re.canGoNext=void 0,re.clamp=O,re.extractObject=void 0,re.filterSettings=ie,re.validSettings=re.swipeStart=re.swipeMove=re.swipeEnd=re.slidesOnRight=re.slidesOnLeft=re.slideHandler=re.siblingDirection=re.safePreventDefault=re.lazyStartIndex=re.lazySlidesOnRight=re.lazySlidesOnLeft=re.lazyEndIndex=re.keyHandler=re.initializedState=re.getWidth=re.getTrackLeft=re.getTrackCSS=re.getTrackAnimateCSS=re.getTotalSlides=re.getSwipeDirection=re.getSlideCount=re.getRequiredLazySlides=re.getPreClones=re.getPostClones=re.getOnDemandLazySlides=re.getNavigableIndexes=re.getHeight=void 0;var n=f(Sn()),o=f(bm());function f(T){return T&&T.__esModule?T:{default:T}}function s(T){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s(T)}function m(T,p){var g=Object.keys(T);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(T);p&&(S=S.filter(function(U){return Object.getOwnPropertyDescriptor(T,U).enumerable})),g.push.apply(g,S)}return g}function b(T){for(var p=1;p<arguments.length;p++){var g=arguments[p]!=null?arguments[p]:{};p%2?m(Object(g),!0).forEach(function(S){M(T,S,g[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(g)):m(Object(g)).forEach(function(S){Object.defineProperty(T,S,Object.getOwnPropertyDescriptor(g,S))})}return T}function M(T,p,g){return(p=q(p))in T?Object.defineProperty(T,p,{value:g,enumerable:!0,configurable:!0,writable:!0}):T[p]=g,T}function q(T){var p=E(T,"string");return s(p)=="symbol"?p:p+""}function E(T,p){if(s(T)!="object"||!T)return T;var g=T[Symbol.toPrimitive];if(g!==void 0){var S=g.call(T,p);if(s(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(T)}function O(T,p,g){return Math.max(p,Math.min(T,g))}var V=re.safePreventDefault=function(p){var g=["onTouchStart","onTouchMove","onWheel"];g.includes(p._reactName)||p.preventDefault()},P=re.getOnDemandLazySlides=function(p){for(var g=[],S=ne(p),U=ue(p),H=S;H<U;H++)p.lazyLoadedList.indexOf(H)<0&&g.push(H);return g};re.getRequiredLazySlides=function(p){for(var g=[],S=ne(p),U=ue(p),H=S;H<U;H++)g.push(H);return g};var ne=re.lazyStartIndex=function(p){return p.currentSlide-le(p)},ue=re.lazyEndIndex=function(p){return p.currentSlide+X(p)},le=re.lazySlidesOnLeft=function(p){return p.centerMode?Math.floor(p.slidesToShow/2)+(parseInt(p.centerPadding)>0?1:0):0},X=re.lazySlidesOnRight=function(p){return p.centerMode?Math.floor((p.slidesToShow-1)/2)+1+(parseInt(p.centerPadding)>0?1:0):p.slidesToShow},he=re.getWidth=function(p){return p&&p.offsetWidth||0},ce=re.getHeight=function(p){return p&&p.offsetHeight||0},pe=re.getSwipeDirection=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,S,U,H,J;return S=p.startX-p.curX,U=p.startY-p.curY,H=Math.atan2(U,S),J=Math.round(H*180/Math.PI),J<0&&(J=360-Math.abs(J)),J<=45&&J>=0||J<=360&&J>=315?"left":J>=135&&J<=225?"right":g===!0?J>=35&&J<=135?"up":"down":"vertical"},ae=re.canGoNext=function(p){var g=!0;return p.infinite||(p.centerMode&&p.currentSlide>=p.slideCount-1||p.slideCount<=p.slidesToShow||p.currentSlide>=p.slideCount-p.slidesToShow)&&(g=!1),g};re.extractObject=function(p,g){var S={};return g.forEach(function(U){return S[U]=p[U]}),S},re.initializedState=function(p){var g=n.default.Children.count(p.children),S=p.listRef,U=Math.ceil(he(S)),H=p.trackRef&&p.trackRef.node,J=Math.ceil(he(H)),K;if(p.vertical)K=U;else{var te=p.centerMode&&parseInt(p.centerPadding)*2;typeof p.centerPadding=="string"&&p.centerPadding.slice(-1)==="%"&&(te*=U/100),K=Math.ceil((U-te)/p.slidesToShow)}var me=S&&ce(S.querySelector('[data-index="0"]')),de=me*p.slidesToShow,Se=p.currentSlide===void 0?p.initialSlide:p.currentSlide;p.rtl&&p.currentSlide===void 0&&(Se=g-1-p.initialSlide);var Ae=p.lazyLoadedList||[],$e=P(b(b({},p),{},{currentSlide:Se,lazyLoadedList:Ae}));Ae=Ae.concat($e);var je={slideCount:g,slideWidth:K,listWidth:U,trackWidth:J,currentSlide:Se,slideHeight:me,listHeight:de,lazyLoadedList:Ae};return p.autoplaying===null&&p.autoplay&&(je.autoplaying="playing"),je},re.slideHandler=function(p){var g=p.waitForAnimate,S=p.animating,U=p.fade,H=p.infinite,J=p.index,K=p.slideCount,te=p.lazyLoad,me=p.currentSlide,de=p.centerMode,Se=p.slidesToScroll,Ae=p.slidesToShow,$e=p.useCSS,je=p.lazyLoadedList;if(g&&S)return{};var be=J,ze,Je,_e,Ie={},Fe={},nt=H?J:O(J,0,K-1);if(U){if(!H&&(J<0||J>=K))return{};J<0?be=J+K:J>=K&&(be=J-K),te&&je.indexOf(be)<0&&(je=je.concat(be)),Ie={animating:!0,currentSlide:be,lazyLoadedList:je,targetSlide:be},Fe={animating:!1,targetSlide:be}}else ze=be,be<0?(ze=be+K,H?K%Se!==0&&(ze=K-K%Se):ze=0):!ae(p)&&be>me?be=ze=me:de&&be>=K?(be=H?K:K-1,ze=H?0:K-1):be>=K&&(ze=be-K,H?K%Se!==0&&(ze=0):ze=K-Ae),!H&&be+Ae>=K&&(ze=K-Ae),Je=v(b(b({},p),{},{slideIndex:be})),_e=v(b(b({},p),{},{slideIndex:ze})),H||(Je===_e&&(be=ze),Je=_e),te&&(je=je.concat(P(b(b({},p),{},{currentSlide:be})))),$e?(Ie={animating:!0,currentSlide:ze,trackStyle:_(b(b({},p),{},{left:Je})),lazyLoadedList:je,targetSlide:nt},Fe={animating:!1,currentSlide:ze,trackStyle:D(b(b({},p),{},{left:_e})),swipeLeft:null,targetSlide:nt}):Ie={currentSlide:ze,trackStyle:D(b(b({},p),{},{left:_e})),lazyLoadedList:je,targetSlide:nt};return{state:Ie,nextState:Fe}},re.changeSlide=function(p,g){var S,U,H,J,K,te=p.slidesToScroll,me=p.slidesToShow,de=p.slideCount,Se=p.currentSlide,Ae=p.targetSlide,$e=p.lazyLoad,je=p.infinite;if(J=de%te!==0,S=J?0:(de-Se)%te,g.message==="previous")H=S===0?te:me-S,K=Se-H,$e&&!je&&(U=Se-H,K=U===-1?de-1:U),je||(K=Ae-te);else if(g.message==="next")H=S===0?te:S,K=Se+H,$e&&!je&&(K=(Se+te)%de+S),je||(K=Ae+te);else if(g.message==="dots")K=g.index*g.slidesToScroll;else if(g.message==="children"){if(K=g.index,je){var be=W(b(b({},p),{},{targetSlide:K}));K>g.currentSlide&&be==="left"?K=K-de:K<g.currentSlide&&be==="right"&&(K=K+de)}}else g.message==="index"&&(K=Number(g.index));return K},re.keyHandler=function(p,g,S){return p.target.tagName.match("TEXTAREA|INPUT|SELECT")||!g?"":p.keyCode===37?S?"next":"previous":p.keyCode===39?S?"previous":"next":""},re.swipeStart=function(p,g,S){return p.target.tagName==="IMG"&&V(p),!g||!S&&p.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:p.touches?p.touches[0].pageX:p.clientX,startY:p.touches?p.touches[0].pageY:p.clientY,curX:p.touches?p.touches[0].pageX:p.clientX,curY:p.touches?p.touches[0].pageY:p.clientY}}},re.swipeMove=function(p,g){var S=g.scrolling,U=g.animating,H=g.vertical,J=g.swipeToSlide,K=g.verticalSwiping,te=g.rtl,me=g.currentSlide,de=g.edgeFriction,Se=g.edgeDragged,Ae=g.onEdge,$e=g.swiped,je=g.swiping,be=g.slideCount,ze=g.slidesToScroll,Je=g.infinite,_e=g.touchObject,Ie=g.swipeEvent,Fe=g.listHeight,nt=g.listWidth;if(!S){if(U)return V(p);H&&J&&K&&V(p);var yt,xn={},Ua=v(g);_e.curX=p.touches?p.touches[0].pageX:p.clientX,_e.curY=p.touches?p.touches[0].pageY:p.clientY,_e.swipeLength=Math.round(Math.sqrt(Math.pow(_e.curX-_e.startX,2)));var zt=Math.round(Math.sqrt(Math.pow(_e.curY-_e.startY,2)));if(!K&&!je&&zt>10)return{scrolling:!0};K&&(_e.swipeLength=zt);var ha=(te?-1:1)*(_e.curX>_e.startX?1:-1);K&&(ha=_e.curY>_e.startY?1:-1);var Gl=Math.ceil(be/ze),ln=pe(g.touchObject,K),pn=_e.swipeLength;return Je||(me===0&&(ln==="right"||ln==="down")||me+1>=Gl&&(ln==="left"||ln==="up")||!ae(g)&&(ln==="left"||ln==="up"))&&(pn=_e.swipeLength*de,Se===!1&&Ae&&(Ae(ln),xn.edgeDragged=!0)),!$e&&Ie&&(Ie(ln),xn.swiped=!0),H?yt=Ua+pn*(Fe/nt)*ha:te?yt=Ua-pn*ha:yt=Ua+pn*ha,K&&(yt=Ua+pn*ha),xn=b(b({},xn),{},{touchObject:_e,swipeLeft:yt,trackStyle:D(b(b({},g),{},{left:yt}))}),Math.abs(_e.curX-_e.startX)<Math.abs(_e.curY-_e.startY)*.8||_e.swipeLength>10&&(xn.swiping=!0,V(p)),xn}},re.swipeEnd=function(p,g){var S=g.dragging,U=g.swipe,H=g.touchObject,J=g.listWidth,K=g.touchThreshold,te=g.verticalSwiping,me=g.listHeight,de=g.swipeToSlide,Se=g.scrolling,Ae=g.onSwipe,$e=g.targetSlide,je=g.currentSlide,be=g.infinite;if(!S)return U&&V(p),{};var ze=te?me/K:J/K,Je=pe(H,te),_e={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(Se||!H.swipeLength)return _e;if(H.swipeLength>ze){V(p),Ae&&Ae(Je);var Ie,Fe,nt=be?je:$e;switch(Je){case"left":case"up":Fe=nt+z(g),Ie=de?w(g,Fe):Fe,_e.currentDirection=0;break;case"right":case"down":Fe=nt-z(g),Ie=de?w(g,Fe):Fe,_e.currentDirection=1;break;default:Ie=nt}_e.triggerSlideHandler=Ie}else{var yt=v(g);_e.trackStyle=_(b(b({},g),{},{left:yt}))}return _e};var oe=re.getNavigableIndexes=function(p){for(var g=p.infinite?p.slideCount*2:p.slideCount,S=p.infinite?p.slidesToShow*-1:0,U=p.infinite?p.slidesToShow*-1:0,H=[];S<g;)H.push(S),S=U+p.slidesToScroll,U+=Math.min(p.slidesToScroll,p.slidesToShow);return H},w=re.checkNavigable=function(p,g){var S=oe(p),U=0;if(g>S[S.length-1])g=S[S.length-1];else for(var H in S){if(g<S[H]){g=U;break}U=S[H]}return g},z=re.getSlideCount=function(p){var g=p.centerMode?p.slideWidth*Math.floor(p.slidesToShow/2):0;if(p.swipeToSlide){var S,U=p.listRef,H=U.querySelectorAll&&U.querySelectorAll(".slick-slide")||[];if(Array.from(H).every(function(te){if(p.vertical){if(te.offsetTop+ce(te)/2>p.swipeLeft*-1)return S=te,!1}else if(te.offsetLeft-g+he(te)/2>p.swipeLeft*-1)return S=te,!1;return!0}),!S)return 0;var J=p.rtl===!0?p.slideCount-p.currentSlide:p.currentSlide,K=Math.abs(S.dataset.index-J)||1;return K}else return p.slidesToScroll},x=re.checkSpecKeys=function(p,g){return g.reduce(function(S,U){return S&&p.hasOwnProperty(U)},!0)?null:console.error("Keys Missing:",p)},D=re.getTrackCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var g,S;if(!p.vertical)g=R(p)*p.slideWidth;else{var U=p.unslick?p.slideCount:p.slideCount+2*p.slidesToShow;S=U*p.slideHeight}var H={opacity:1,transition:"",WebkitTransition:""};if(p.useTransform){var J=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",K=p.vertical?"translate3d(0px, "+p.left+"px, 0px)":"translate3d("+p.left+"px, 0px, 0px)",te=p.vertical?"translateY("+p.left+"px)":"translateX("+p.left+"px)";H=b(b({},H),{},{WebkitTransform:J,transform:K,msTransform:te})}else p.vertical?H.top=p.left:H.left=p.left;return p.fade&&(H={opacity:1}),g&&(H.width=g),S&&(H.height=S),window&&!window.addEventListener&&window.attachEvent&&(p.vertical?H.marginTop=p.left+"px":H.marginLeft=p.left+"px"),H},_=re.getTrackAnimateCSS=function(p){x(p,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var g=D(p);return p.useTransform?(g.WebkitTransition="-webkit-transform "+p.speed+"ms "+p.cssEase,g.transition="transform "+p.speed+"ms "+p.cssEase):p.vertical?g.transition="top "+p.speed+"ms "+p.cssEase:g.transition="left "+p.speed+"ms "+p.cssEase,g},v=re.getTrackLeft=function(p){if(p.unslick)return 0;x(p,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var g=p.slideIndex,S=p.trackRef,U=p.infinite,H=p.centerMode,J=p.slideCount,K=p.slidesToShow,te=p.slidesToScroll,me=p.slideWidth,de=p.listWidth,Se=p.variableWidth,Ae=p.slideHeight,$e=p.fade,je=p.vertical,be=0,ze,Je,_e=0;if($e||p.slideCount===1)return 0;var Ie=0;if(U?(Ie=-G(p),J%te!==0&&g+te>J&&(Ie=-(g>J?K-(g-J):J%te)),H&&(Ie+=parseInt(K/2))):(J%te!==0&&g+te>J&&(Ie=K-J%te),H&&(Ie=parseInt(K/2))),be=Ie*me,_e=Ie*Ae,je?ze=g*Ae*-1+_e:ze=g*me*-1+be,Se===!0){var Fe,nt=S&&S.node;if(Fe=g+G(p),Je=nt&&nt.childNodes[Fe],ze=Je?Je.offsetLeft*-1:0,H===!0){Fe=U?g+G(p):g,Je=nt&&nt.children[Fe],ze=0;for(var yt=0;yt<Fe;yt++)ze-=nt&&nt.children[yt]&&nt.children[yt].offsetWidth;ze-=parseInt(p.centerPadding),ze+=Je&&(de-Je.offsetWidth)/2}}return ze},G=re.getPreClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},Z=re.getPostClones=function(p){return p.unslick||!p.infinite?0:p.variableWidth?p.slideCount:p.slidesToShow+(p.centerMode?1:0)},R=re.getTotalSlides=function(p){return p.slideCount===1?1:G(p)+p.slideCount+Z(p)},W=re.siblingDirection=function(p){return p.targetSlide>p.currentSlide?p.targetSlide>p.currentSlide+ee(p)?"left":"right":p.targetSlide<p.currentSlide-j(p)?"right":"left"},ee=re.slidesOnRight=function(p){var g=p.slidesToShow,S=p.centerMode,U=p.rtl,H=p.centerPadding;if(S){var J=(g-1)/2+1;return parseInt(H)>0&&(J+=1),U&&g%2===0&&(J+=1),J}return U?0:g-1},j=re.slidesOnLeft=function(p){var g=p.slidesToShow,S=p.centerMode,U=p.rtl,H=p.centerPadding;if(S){var J=(g-1)/2+1;return parseInt(H)>0&&(J+=1),!U&&g%2===0&&(J+=1),J}return U?g-1:0};re.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var u=re.validSettings=Object.keys(o.default);function ie(T){return u.reduce(function(p,g){return T.hasOwnProperty(g)&&(p[g]=T[g]),p},{})}return re}var Ol={},fh;function dx(){if(fh)return Ol;fh=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.Track=void 0;var n=s(Sn()),o=s(jo()),f=Bl();function s(_){return _&&_.__esModule?_:{default:_}}function m(_){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},m(_)}function b(){return b=Object.assign?Object.assign.bind():function(_){for(var v=1;v<arguments.length;v++){var G=arguments[v];for(var Z in G)({}).hasOwnProperty.call(G,Z)&&(_[Z]=G[Z])}return _},b.apply(null,arguments)}function M(_,v){if(!(_ instanceof v))throw new TypeError("Cannot call a class as a function")}function q(_,v){for(var G=0;G<v.length;G++){var Z=v[G];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(_,ae(Z.key),Z)}}function E(_,v,G){return v&&q(_.prototype,v),Object.defineProperty(_,"prototype",{writable:!1}),_}function O(_,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(v&&v.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),v&&V(_,v)}function V(_,v){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(G,Z){return G.__proto__=Z,G},V(_,v)}function P(_){var v=le();return function(){var G,Z=X(_);if(v){var R=X(this).constructor;G=Reflect.construct(Z,arguments,R)}else G=Z.apply(this,arguments);return ne(this,G)}}function ne(_,v){if(v&&(m(v)=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(_)}function ue(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function le(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!_})()}function X(_){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},X(_)}function he(_,v){var G=Object.keys(_);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(_);v&&(Z=Z.filter(function(R){return Object.getOwnPropertyDescriptor(_,R).enumerable})),G.push.apply(G,Z)}return G}function ce(_){for(var v=1;v<arguments.length;v++){var G=arguments[v]!=null?arguments[v]:{};v%2?he(Object(G),!0).forEach(function(Z){pe(_,Z,G[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(G)):he(Object(G)).forEach(function(Z){Object.defineProperty(_,Z,Object.getOwnPropertyDescriptor(G,Z))})}return _}function pe(_,v,G){return(v=ae(v))in _?Object.defineProperty(_,v,{value:G,enumerable:!0,configurable:!0,writable:!0}):_[v]=G,_}function ae(_){var v=oe(_,"string");return m(v)=="symbol"?v:v+""}function oe(_,v){if(m(_)!="object"||!_)return _;var G=_[Symbol.toPrimitive];if(G!==void 0){var Z=G.call(_,v);if(m(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(_)}var w=function(v){var G,Z,R,W,ee;v.rtl?ee=v.slideCount-1-v.index:ee=v.index,R=ee<0||ee>=v.slideCount,v.centerMode?(W=Math.floor(v.slidesToShow/2),Z=(ee-v.currentSlide)%v.slideCount===0,ee>v.currentSlide-W-1&&ee<=v.currentSlide+W&&(G=!0)):G=v.currentSlide<=ee&&ee<v.currentSlide+v.slidesToShow;var j;v.targetSlide<0?j=v.targetSlide+v.slideCount:v.targetSlide>=v.slideCount?j=v.targetSlide-v.slideCount:j=v.targetSlide;var u=ee===j;return{"slick-slide":!0,"slick-active":G,"slick-center":Z,"slick-cloned":R,"slick-current":u}},z=function(v){var G={};return(v.variableWidth===void 0||v.variableWidth===!1)&&(G.width=v.slideWidth),v.fade&&(G.position="relative",v.vertical?G.top=-v.index*parseInt(v.slideHeight):G.left=-v.index*parseInt(v.slideWidth),G.opacity=v.currentSlide===v.index?1:0,G.zIndex=v.currentSlide===v.index?999:998,v.useCSS&&(G.transition="opacity "+v.speed+"ms "+v.cssEase+", visibility "+v.speed+"ms "+v.cssEase)),G},x=function(v,G){return v.key||G},D=function(v){var G,Z=[],R=[],W=[],ee=n.default.Children.count(v.children),j=(0,f.lazyStartIndex)(v),u=(0,f.lazyEndIndex)(v);return n.default.Children.forEach(v.children,function(ie,T){var p,g={message:"children",index:T,slidesToScroll:v.slidesToScroll,currentSlide:v.currentSlide};!v.lazyLoad||v.lazyLoad&&v.lazyLoadedList.indexOf(T)>=0?p=ie:p=n.default.createElement("div",null);var S=z(ce(ce({},v),{},{index:T})),U=p.props.className||"",H=w(ce(ce({},v),{},{index:T}));if(Z.push(n.default.cloneElement(p,{key:"original"+x(p,T),"data-index":T,className:(0,o.default)(H,U),tabIndex:"-1","aria-hidden":!H["slick-active"],style:ce(ce({outline:"none"},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})),v.infinite&&ee>1&&v.fade===!1&&!v.unslick){var J=ee-T;J<=(0,f.getPreClones)(v)&&(G=-J,G>=j&&(p=ie),H=w(ce(ce({},v),{},{index:G})),R.push(n.default.cloneElement(p,{key:"precloned"+x(p,G),"data-index":G,tabIndex:"-1",className:(0,o.default)(H,U),"aria-hidden":!H["slick-active"],style:ce(ce({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}}))),T<(0,f.getPostClones)(v)&&(G=ee+T,G<u&&(p=ie),H=w(ce(ce({},v),{},{index:G})),W.push(n.default.cloneElement(p,{key:"postcloned"+x(p,G),"data-index":G,tabIndex:"-1",className:(0,o.default)(H,U),"aria-hidden":!H["slick-active"],style:ce(ce({},p.props.style||{}),S),onClick:function(te){p.props&&p.props.onClick&&p.props.onClick(te),v.focusOnSelect&&v.focusOnSelect(g)}})))}}),v.rtl?R.concat(Z,W).reverse():R.concat(Z,W)};return Ol.Track=(function(_){O(G,_);var v=P(G);function G(){var Z;M(this,G);for(var R=arguments.length,W=new Array(R),ee=0;ee<R;ee++)W[ee]=arguments[ee];return Z=v.call.apply(v,[this].concat(W)),pe(ue(Z),"node",null),pe(ue(Z),"handleRef",function(j){Z.node=j}),Z}return E(G,[{key:"render",value:function(){var R=D(this.props),W=this.props,ee=W.onMouseEnter,j=W.onMouseOver,u=W.onMouseLeave,ie={onMouseEnter:ee,onMouseOver:j,onMouseLeave:u};return n.default.createElement("div",b({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},ie),R)}}]),G})(n.default.PureComponent),Ol}var kl={},dh;function px(){if(dh)return kl;dh=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(kl,"__esModule",{value:!0}),kl.Dots=void 0;var o=m(Sn()),f=m(jo()),s=Bl();function m(w){return w&&w.__esModule?w:{default:w}}function b(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,D)}return x}function M(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?b(Object(x),!0).forEach(function(D){q(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):b(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function q(w,z,x){return(z=P(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function E(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function O(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,P(D.key),D)}}function V(w,z,x){return z&&O(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function P(w){var z=ne(w,"string");return n(z)=="symbol"?z:z+""}function ne(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function ue(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&le(w,z)}function le(w,z){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},le(w,z)}function X(w){var z=pe();return function(){var x,D=ae(w);if(z){var _=ae(this).constructor;x=Reflect.construct(D,arguments,_)}else x=D.apply(this,arguments);return he(this,x)}}function he(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(w)}function ce(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function pe(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pe=function(){return!!w})()}function ae(w){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},ae(w)}var oe=function(z){var x;return z.infinite?x=Math.ceil(z.slideCount/z.slidesToScroll):x=Math.ceil((z.slideCount-z.slidesToShow)/z.slidesToScroll)+1,x};return kl.Dots=(function(w){ue(x,w);var z=X(x);function x(){return E(this,x),z.apply(this,arguments)}return V(x,[{key:"clickHandler",value:function(_,v){v.preventDefault(),this.props.clickHandler(_)}},{key:"render",value:function(){for(var _=this.props,v=_.onMouseEnter,G=_.onMouseOver,Z=_.onMouseLeave,R=_.infinite,W=_.slidesToScroll,ee=_.slidesToShow,j=_.slideCount,u=_.currentSlide,ie=oe({slideCount:j,slidesToScroll:W,slidesToShow:ee,infinite:R}),T={onMouseEnter:v,onMouseOver:G,onMouseLeave:Z},p=[],g=0;g<ie;g++){var S=(g+1)*W-1,U=R?S:(0,s.clamp)(S,0,j-1),H=U-(W-1),J=R?H:(0,s.clamp)(H,0,j-1),K=(0,f.default)({"slick-active":R?u>=J&&u<=U:u===J}),te={message:"dots",index:g,slidesToScroll:W,currentSlide:u},me=this.clickHandler.bind(this,te);p=p.concat(o.default.createElement("li",{key:g,className:K},o.default.cloneElement(this.props.customPaging(g),{onClick:me})))}return o.default.cloneElement(this.props.appendDots(p),M({className:this.props.dotsClass},T))}}]),x})(o.default.PureComponent),kl}var Da={},ph;function gx(){if(ph)return Da;ph=1;function n(w){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(w)}Object.defineProperty(Da,"__esModule",{value:!0}),Da.PrevArrow=Da.NextArrow=void 0;var o=m(Sn()),f=m(jo()),s=Bl();function m(w){return w&&w.__esModule?w:{default:w}}function b(){return b=Object.assign?Object.assign.bind():function(w){for(var z=1;z<arguments.length;z++){var x=arguments[z];for(var D in x)({}).hasOwnProperty.call(x,D)&&(w[D]=x[D])}return w},b.apply(null,arguments)}function M(w,z){var x=Object.keys(w);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(w);z&&(D=D.filter(function(_){return Object.getOwnPropertyDescriptor(w,_).enumerable})),x.push.apply(x,D)}return x}function q(w){for(var z=1;z<arguments.length;z++){var x=arguments[z]!=null?arguments[z]:{};z%2?M(Object(x),!0).forEach(function(D){E(w,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(x)):M(Object(x)).forEach(function(D){Object.defineProperty(w,D,Object.getOwnPropertyDescriptor(x,D))})}return w}function E(w,z,x){return(z=ne(z))in w?Object.defineProperty(w,z,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[z]=x,w}function O(w,z){if(!(w instanceof z))throw new TypeError("Cannot call a class as a function")}function V(w,z){for(var x=0;x<z.length;x++){var D=z[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,ne(D.key),D)}}function P(w,z,x){return z&&V(w.prototype,z),Object.defineProperty(w,"prototype",{writable:!1}),w}function ne(w){var z=ue(w,"string");return n(z)=="symbol"?z:z+""}function ue(w,z){if(n(w)!="object"||!w)return w;var x=w[Symbol.toPrimitive];if(x!==void 0){var D=x.call(w,z);if(n(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(w)}function le(w,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(z&&z.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),z&&X(w,z)}function X(w,z){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},X(w,z)}function he(w){var z=ae();return function(){var x,D=oe(w);if(z){var _=oe(this).constructor;x=Reflect.construct(D,arguments,_)}else x=D.apply(this,arguments);return ce(this,x)}}function ce(w,z){if(z&&(n(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pe(w)}function pe(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function ae(){try{var w=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!w})()}function oe(w){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},oe(w)}return Da.PrevArrow=(function(w){le(x,w);var z=he(x);function x(){return O(this,x),z.apply(this,arguments)}return P(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-prev":!0},v=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(_["slick-disabled"]=!0,v=null);var G={key:"0","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.prevArrow?R=o.default.cloneElement(this.props.prevArrow,q(q({},G),Z)):R=o.default.createElement("button",b({key:"0",type:"button"},G)," ","Previous"),R}}]),x})(o.default.PureComponent),Da.NextArrow=(function(w){le(x,w);var z=he(x);function x(){return O(this,x),z.apply(this,arguments)}return P(x,[{key:"clickHandler",value:function(_,v){v&&v.preventDefault(),this.props.clickHandler(_,v)}},{key:"render",value:function(){var _={"slick-arrow":!0,"slick-next":!0},v=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(_["slick-disabled"]=!0,v=null);var G={key:"1","data-role":"none",className:(0,f.default)(_),style:{display:"block"},onClick:v},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},R;return this.props.nextArrow?R=o.default.cloneElement(this.props.nextArrow,q(q({},G),Z)):R=o.default.createElement("button",b({key:"1",type:"button"},G)," ","Next"),R}}]),x})(o.default.PureComponent),Da}var Sm=(function(){if(typeof Map<"u")return Map;function n(o,f){var s=-1;return o.some(function(m,b){return m[0]===f?(s=b,!0):!1}),s}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(f){var s=n(this.__entries__,f),m=this.__entries__[s];return m&&m[1]},o.prototype.set=function(f,s){var m=n(this.__entries__,f);~m?this.__entries__[m][1]=s:this.__entries__.push([f,s])},o.prototype.delete=function(f){var s=this.__entries__,m=n(s,f);~m&&s.splice(m,1)},o.prototype.has=function(f){return!!~n(this.__entries__,f)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(f,s){s===void 0&&(s=null);for(var m=0,b=this.__entries__;m<b.length;m++){var M=b[m];f.call(s,M[1],M[0])}},o})()})(),zu=typeof window<"u"&&typeof document<"u"&&window.document===document,So=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),hx=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(So):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}})(),mx=2;function yx(n,o){var f=!1,s=!1,m=0;function b(){f&&(f=!1,n()),s&&q()}function M(){hx(b)}function q(){var E=Date.now();if(f){if(E-m<mx)return;s=!0}else f=!0,s=!1,setTimeout(M,o);m=E}return q}var vx=20,bx=["top","right","bottom","left","width","height","size","weight"],Sx=typeof MutationObserver<"u",xx=(function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=yx(this.refresh.bind(this),vx)}return n.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},n.prototype.removeObserver=function(o){var f=this.observers_,s=f.indexOf(o);~s&&f.splice(s,1),!f.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},n.prototype.updateObservers_=function(){var o=this.observers_.filter(function(f){return f.gatherActive(),f.hasActive()});return o.forEach(function(f){return f.broadcastActive()}),o.length>0},n.prototype.connect_=function(){!zu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Sx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!zu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(o){var f=o.propertyName,s=f===void 0?"":f,m=bx.some(function(b){return!!~s.indexOf(b)});m&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n})(),xm=(function(n,o){for(var f=0,s=Object.keys(o);f<s.length;f++){var m=s[f];Object.defineProperty(n,m,{value:o[m],enumerable:!1,writable:!1,configurable:!0})}return n}),Mi=(function(n){var o=n&&n.ownerDocument&&n.ownerDocument.defaultView;return o||So}),$m=_o(0,0,0,0);function xo(n){return parseFloat(n)||0}function gh(n){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return o.reduce(function(s,m){var b=n["border-"+m+"-width"];return s+xo(b)},0)}function $x(n){for(var o=["top","right","bottom","left"],f={},s=0,m=o;s<m.length;s++){var b=m[s],M=n["padding-"+b];f[b]=xo(M)}return f}function wx(n){var o=n.getBBox();return _o(0,0,o.width,o.height)}function zx(n){var o=n.clientWidth,f=n.clientHeight;if(!o&&!f)return $m;var s=Mi(n).getComputedStyle(n),m=$x(s),b=m.left+m.right,M=m.top+m.bottom,q=xo(s.width),E=xo(s.height);if(s.boxSizing==="border-box"&&(Math.round(q+b)!==o&&(q-=gh(s,"left","right")+b),Math.round(E+M)!==f&&(E-=gh(s,"top","bottom")+M)),!Ex(n)){var O=Math.round(q+b)-o,V=Math.round(E+M)-f;Math.abs(O)!==1&&(q-=O),Math.abs(V)!==1&&(E-=V)}return _o(m.left,m.top,q,E)}var Tx=(function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof Mi(n).SVGGraphicsElement}:function(n){return n instanceof Mi(n).SVGElement&&typeof n.getBBox=="function"}})();function Ex(n){return n===Mi(n).document.documentElement}function Ax(n){return zu?Tx(n)?wx(n):zx(n):$m}function jx(n){var o=n.x,f=n.y,s=n.width,m=n.height,b=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,M=Object.create(b.prototype);return xm(M,{x:o,y:f,width:s,height:m,top:f,right:o+s,bottom:m+f,left:o}),M}function _o(n,o,f,s){return{x:n,y:o,width:f,height:s}}var _x=(function(){function n(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_o(0,0,0,0),this.target=o}return n.prototype.isActive=function(){var o=Ax(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},n})(),Ox=(function(){function n(o,f){var s=jx(f);xm(this,{target:o,contentRect:s})}return n})(),kx=(function(){function n(o,f,s){if(this.activeObservations_=[],this.observations_=new Sm,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=f,this.callbackCtx_=s}return n.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Mi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)||(f.set(o,new _x(o)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Mi(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var f=this.observations_;f.has(o)&&(f.delete(o),f.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(f){f.isActive()&&o.activeObservations_.push(f)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,f=this.activeObservations_.map(function(s){return new Ox(s.target,s.broadcastRect())});this.callback_.call(o,f,o),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n})(),wm=typeof WeakMap<"u"?new WeakMap:new Sm,zm=(function(){function n(o){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var f=xx.getInstance(),s=new kx(o,f,this);wm.set(this,s)}return n})();["observe","unobserve","disconnect"].forEach(function(n){zm.prototype[n]=function(){var o;return(o=wm.get(this))[n].apply(o,arguments)}});var Cx=(function(){return typeof So.ResizeObserver<"u"?So.ResizeObserver:zm})();const Mx=Object.freeze(Object.defineProperty({__proto__:null,default:Cx},Symbol.toStringTag,{value:"Module"})),Dx=J0(Mx);var hh;function Hx(){if(hh)return _l;hh=1,Object.defineProperty(_l,"__esModule",{value:!0}),_l.InnerSlider=void 0;var n=O(Sn()),o=O(ux()),f=O(fx()),s=O(jo()),m=Bl(),b=dx(),M=px(),q=gx(),E=O(Dx);function O(R){return R&&R.__esModule?R:{default:R}}function V(R){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},V(R)}function P(){return P=Object.assign?Object.assign.bind():function(R){for(var W=1;W<arguments.length;W++){var ee=arguments[W];for(var j in ee)({}).hasOwnProperty.call(ee,j)&&(R[j]=ee[j])}return R},P.apply(null,arguments)}function ne(R,W){if(R==null)return{};var ee,j,u=ue(R,W);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(j=0;j<ie.length;j++)ee=ie[j],W.includes(ee)||{}.propertyIsEnumerable.call(R,ee)&&(u[ee]=R[ee])}return u}function ue(R,W){if(R==null)return{};var ee={};for(var j in R)if({}.hasOwnProperty.call(R,j)){if(W.includes(j))continue;ee[j]=R[j]}return ee}function le(R,W){var ee=Object.keys(R);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(R);W&&(j=j.filter(function(u){return Object.getOwnPropertyDescriptor(R,u).enumerable})),ee.push.apply(ee,j)}return ee}function X(R){for(var W=1;W<arguments.length;W++){var ee=arguments[W]!=null?arguments[W]:{};W%2?le(Object(ee),!0).forEach(function(j){v(R,j,ee[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(ee)):le(Object(ee)).forEach(function(j){Object.defineProperty(R,j,Object.getOwnPropertyDescriptor(ee,j))})}return R}function he(R,W){if(!(R instanceof W))throw new TypeError("Cannot call a class as a function")}function ce(R,W){for(var ee=0;ee<W.length;ee++){var j=W[ee];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(R,G(j.key),j)}}function pe(R,W,ee){return W&&ce(R.prototype,W),Object.defineProperty(R,"prototype",{writable:!1}),R}function ae(R,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(W&&W.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),W&&oe(R,W)}function oe(R,W){return oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,j){return ee.__proto__=j,ee},oe(R,W)}function w(R){var W=D();return function(){var ee,j=_(R);if(W){var u=_(this).constructor;ee=Reflect.construct(j,arguments,u)}else ee=j.apply(this,arguments);return z(this,ee)}}function z(R,W){if(W&&(V(W)=="object"||typeof W=="function"))return W;if(W!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(R)}function x(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function D(){try{var R=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!R})()}function _(R){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(W){return W.__proto__||Object.getPrototypeOf(W)},_(R)}function v(R,W,ee){return(W=G(W))in R?Object.defineProperty(R,W,{value:ee,enumerable:!0,configurable:!0,writable:!0}):R[W]=ee,R}function G(R){var W=Z(R,"string");return V(W)=="symbol"?W:W+""}function Z(R,W){if(V(R)!="object"||!R)return R;var ee=R[Symbol.toPrimitive];if(ee!==void 0){var j=ee.call(R,W);if(V(j)!="object")return j;throw new TypeError("@@toPrimitive must return a primitive value.")}return(W==="string"?String:Number)(R)}return _l.InnerSlider=(function(R){ae(ee,R);var W=w(ee);function ee(j){var u;he(this,ee),u=W.call(this,j),v(x(u),"listRefHandler",function(T){return u.list=T}),v(x(u),"trackRefHandler",function(T){return u.track=T}),v(x(u),"adaptHeight",function(){if(u.props.adaptiveHeight&&u.list){var T=u.list.querySelector('[data-index="'.concat(u.state.currentSlide,'"]'));u.list.style.height=(0,m.getHeight)(T)+"px"}}),v(x(u),"componentDidMount",function(){if(u.props.onInit&&u.props.onInit(),u.props.lazyLoad){var T=(0,m.getOnDemandLazySlides)(X(X({},u.props),u.state));T.length>0&&(u.setState(function(g){return{lazyLoadedList:g.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T))}var p=X({listRef:u.list,trackRef:u.track},u.props);u.updateState(p,!0,function(){u.adaptHeight(),u.props.autoplay&&u.autoPlay("update")}),u.props.lazyLoad==="progressive"&&(u.lazyLoadTimer=setInterval(u.progressiveLazyLoad,1e3)),u.ro=new E.default(function(){u.state.animating?(u.onWindowResized(!1),u.callbackTimers.push(setTimeout(function(){return u.onWindowResized()},u.props.speed))):u.onWindowResized()}),u.ro.observe(u.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(g){g.onfocus=u.props.pauseOnFocus?u.onSlideFocus:null,g.onblur=u.props.pauseOnFocus?u.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",u.onWindowResized):window.attachEvent("onresize",u.onWindowResized)}),v(x(u),"componentWillUnmount",function(){u.animationEndCallback&&clearTimeout(u.animationEndCallback),u.lazyLoadTimer&&clearInterval(u.lazyLoadTimer),u.callbackTimers.length&&(u.callbackTimers.forEach(function(T){return clearTimeout(T)}),u.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",u.onWindowResized):window.detachEvent("onresize",u.onWindowResized),u.autoplayTimer&&clearInterval(u.autoplayTimer),u.ro.disconnect()}),v(x(u),"componentDidUpdate",function(T){if(u.checkImagesLoad(),u.props.onReInit&&u.props.onReInit(),u.props.lazyLoad){var p=(0,m.getOnDemandLazySlides)(X(X({},u.props),u.state));p.length>0&&(u.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(p)}}),u.props.onLazyLoad&&u.props.onLazyLoad(p))}u.adaptHeight();var g=X(X({listRef:u.list,trackRef:u.track},u.props),u.state),S=u.didPropsChange(T);S&&u.updateState(g,S,function(){u.state.currentSlide>=n.default.Children.count(u.props.children)&&u.changeSlide({message:"index",index:n.default.Children.count(u.props.children)-u.props.slidesToShow,currentSlide:u.state.currentSlide}),u.props.autoplay?u.autoPlay("update"):u.pause("paused")})}),v(x(u),"onWindowResized",function(T){u.debouncedResize&&u.debouncedResize.cancel(),u.debouncedResize=(0,f.default)(function(){return u.resizeWindow(T)},50),u.debouncedResize()}),v(x(u),"resizeWindow",function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,p=!!(u.track&&u.track.node);if(p){var g=X(X({listRef:u.list,trackRef:u.track},u.props),u.state);u.updateState(g,T,function(){u.props.autoplay?u.autoPlay("update"):u.pause("paused")}),u.setState({animating:!1}),clearTimeout(u.animationEndCallback),delete u.animationEndCallback}}),v(x(u),"updateState",function(T,p,g){var S=(0,m.initializedState)(T);T=X(X(X({},T),S),{},{slideIndex:S.currentSlide});var U=(0,m.getTrackLeft)(T);T=X(X({},T),{},{left:U});var H=(0,m.getTrackCSS)(T);(p||n.default.Children.count(u.props.children)!==n.default.Children.count(T.children))&&(S.trackStyle=H),u.setState(S,g)}),v(x(u),"ssrInit",function(){if(u.props.variableWidth){var T=0,p=0,g=[],S=(0,m.getPreClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length})),U=(0,m.getPostClones)(X(X(X({},u.props),u.state),{},{slideCount:u.props.children.length}));u.props.children.forEach(function(Je){g.push(Je.props.style.width),T+=Je.props.style.width});for(var H=0;H<S;H++)p+=g[g.length-1-H],T+=g[g.length-1-H];for(var J=0;J<U;J++)T+=g[J];for(var K=0;K<u.state.currentSlide;K++)p+=g[K];var te={width:T+"px",left:-p+"px"};if(u.props.centerMode){var me="".concat(g[u.state.currentSlide],"px");te.left="calc(".concat(te.left," + (100% - ").concat(me,") / 2 ) ")}return{trackStyle:te}}var de=n.default.Children.count(u.props.children),Se=X(X(X({},u.props),u.state),{},{slideCount:de}),Ae=(0,m.getPreClones)(Se)+(0,m.getPostClones)(Se)+de,$e=100/u.props.slidesToShow*Ae,je=100/Ae,be=-je*((0,m.getPreClones)(Se)+u.state.currentSlide)*$e/100;u.props.centerMode&&(be+=(100-je*$e/100)/2);var ze={width:$e+"%",left:be+"%"};return{slideWidth:je+"%",trackStyle:ze}}),v(x(u),"checkImagesLoad",function(){var T=u.list&&u.list.querySelectorAll&&u.list.querySelectorAll(".slick-slide img")||[],p=T.length,g=0;Array.prototype.forEach.call(T,function(S){var U=function(){return++g&&g>=p&&u.onWindowResized()};if(!S.onclick)S.onclick=function(){return S.parentNode.focus()};else{var H=S.onclick;S.onclick=function(J){H(J),S.parentNode.focus()}}S.onload||(u.props.lazyLoad?S.onload=function(){u.adaptHeight(),u.callbackTimers.push(setTimeout(u.onWindowResized,u.props.speed))}:(S.onload=U,S.onerror=function(){U(),u.props.onLazyLoadError&&u.props.onLazyLoadError()}))})}),v(x(u),"progressiveLazyLoad",function(){for(var T=[],p=X(X({},u.props),u.state),g=u.state.currentSlide;g<u.state.slideCount+(0,m.getPostClones)(p);g++)if(u.state.lazyLoadedList.indexOf(g)<0){T.push(g);break}for(var S=u.state.currentSlide-1;S>=-(0,m.getPreClones)(p);S--)if(u.state.lazyLoadedList.indexOf(S)<0){T.push(S);break}T.length>0?(u.setState(function(U){return{lazyLoadedList:U.lazyLoadedList.concat(T)}}),u.props.onLazyLoad&&u.props.onLazyLoad(T)):u.lazyLoadTimer&&(clearInterval(u.lazyLoadTimer),delete u.lazyLoadTimer)}),v(x(u),"slideHandler",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=u.props,S=g.asNavFor,U=g.beforeChange,H=g.onLazyLoad,J=g.speed,K=g.afterChange,te=u.state.currentSlide,me=(0,m.slideHandler)(X(X(X({index:T},u.props),u.state),{},{trackRef:u.track,useCSS:u.props.useCSS&&!p})),de=me.state,Se=me.nextState;if(de){U&&U(te,de.currentSlide);var Ae=de.lazyLoadedList.filter(function($e){return u.state.lazyLoadedList.indexOf($e)<0});H&&Ae.length>0&&H(Ae),!u.props.waitForAnimate&&u.animationEndCallback&&(clearTimeout(u.animationEndCallback),K&&K(te),delete u.animationEndCallback),u.setState(de,function(){S&&u.asNavForIndex!==T&&(u.asNavForIndex=T,S.innerSlider.slideHandler(T)),Se&&(u.animationEndCallback=setTimeout(function(){var $e=Se.animating,je=ne(Se,["animating"]);u.setState(je,function(){u.callbackTimers.push(setTimeout(function(){return u.setState({animating:$e})},10)),K&&K(de.currentSlide),delete u.animationEndCallback})},J))})}}),v(x(u),"changeSlide",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=X(X({},u.props),u.state),S=(0,m.changeSlide)(g,T);if(!(S!==0&&!S)&&(p===!0?u.slideHandler(S,p):u.slideHandler(S),u.props.autoplay&&u.autoPlay("update"),u.props.focusOnSelect)){var U=u.list.querySelectorAll(".slick-current");U[0]&&U[0].focus()}}),v(x(u),"clickHandler",function(T){u.clickable===!1&&(T.stopPropagation(),T.preventDefault()),u.clickable=!0}),v(x(u),"keyHandler",function(T){var p=(0,m.keyHandler)(T,u.props.accessibility,u.props.rtl);p!==""&&u.changeSlide({message:p})}),v(x(u),"selectHandler",function(T){u.changeSlide(T)}),v(x(u),"disableBodyScroll",function(){var T=function(g){g=g||window.event,g.preventDefault&&g.preventDefault(),g.returnValue=!1};window.ontouchmove=T}),v(x(u),"enableBodyScroll",function(){window.ontouchmove=null}),v(x(u),"swipeStart",function(T){u.props.verticalSwiping&&u.disableBodyScroll();var p=(0,m.swipeStart)(T,u.props.swipe,u.props.draggable);p!==""&&u.setState(p)}),v(x(u),"swipeMove",function(T){var p=(0,m.swipeMove)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));p&&(p.swiping&&(u.clickable=!1),u.setState(p))}),v(x(u),"swipeEnd",function(T){var p=(0,m.swipeEnd)(T,X(X(X({},u.props),u.state),{},{trackRef:u.track,listRef:u.list,slideIndex:u.state.currentSlide}));if(p){var g=p.triggerSlideHandler;delete p.triggerSlideHandler,u.setState(p),g!==void 0&&(u.slideHandler(g),u.props.verticalSwiping&&u.enableBodyScroll())}}),v(x(u),"touchEnd",function(T){u.swipeEnd(T),u.clickable=!0}),v(x(u),"slickPrev",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"previous"})},0))}),v(x(u),"slickNext",function(){u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"next"})},0))}),v(x(u),"slickGoTo",function(T){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T=Number(T),isNaN(T))return"";u.callbackTimers.push(setTimeout(function(){return u.changeSlide({message:"index",index:T,currentSlide:u.state.currentSlide},p)},0))}),v(x(u),"play",function(){var T;if(u.props.rtl)T=u.state.currentSlide-u.props.slidesToScroll;else if((0,m.canGoNext)(X(X({},u.props),u.state)))T=u.state.currentSlide+u.props.slidesToScroll;else return!1;u.slideHandler(T)}),v(x(u),"autoPlay",function(T){u.autoplayTimer&&clearInterval(u.autoplayTimer);var p=u.state.autoplaying;if(T==="update"){if(p==="hovered"||p==="focused"||p==="paused")return}else if(T==="leave"){if(p==="paused"||p==="focused")return}else if(T==="blur"&&(p==="paused"||p==="hovered"))return;u.autoplayTimer=setInterval(u.play,u.props.autoplaySpeed+50),u.setState({autoplaying:"playing"})}),v(x(u),"pause",function(T){u.autoplayTimer&&(clearInterval(u.autoplayTimer),u.autoplayTimer=null);var p=u.state.autoplaying;T==="paused"?u.setState({autoplaying:"paused"}):T==="focused"?(p==="hovered"||p==="playing")&&u.setState({autoplaying:"focused"}):p==="playing"&&u.setState({autoplaying:"hovered"})}),v(x(u),"onDotsOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onDotsLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onTrackOver",function(){return u.props.autoplay&&u.pause("hovered")}),v(x(u),"onTrackLeave",function(){return u.props.autoplay&&u.state.autoplaying==="hovered"&&u.autoPlay("leave")}),v(x(u),"onSlideFocus",function(){return u.props.autoplay&&u.pause("focused")}),v(x(u),"onSlideBlur",function(){return u.props.autoplay&&u.state.autoplaying==="focused"&&u.autoPlay("blur")}),v(x(u),"render",function(){var T=(0,s.default)("slick-slider",u.props.className,{"slick-vertical":u.props.vertical,"slick-initialized":!0}),p=X(X({},u.props),u.state),g=(0,m.extractObject)(p,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),S=u.props.pauseOnHover;g=X(X({},g),{},{onMouseEnter:S?u.onTrackOver:null,onMouseLeave:S?u.onTrackLeave:null,onMouseOver:S?u.onTrackOver:null,focusOnSelect:u.props.focusOnSelect&&u.clickable?u.selectHandler:null});var U;if(u.props.dots===!0&&u.state.slideCount>=u.props.slidesToShow){var H=(0,m.extractObject)(p,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),J=u.props.pauseOnDotsHover;H=X(X({},H),{},{clickHandler:u.changeSlide,onMouseEnter:J?u.onDotsLeave:null,onMouseOver:J?u.onDotsOver:null,onMouseLeave:J?u.onDotsLeave:null}),U=n.default.createElement(M.Dots,H)}var K,te,me=(0,m.extractObject)(p,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);me.clickHandler=u.changeSlide,u.props.arrows&&(K=n.default.createElement(q.PrevArrow,me),te=n.default.createElement(q.NextArrow,me));var de=null;u.props.vertical&&(de={height:u.state.listHeight});var Se=null;u.props.vertical===!1?u.props.centerMode===!0&&(Se={padding:"0px "+u.props.centerPadding}):u.props.centerMode===!0&&(Se={padding:u.props.centerPadding+" 0px"});var Ae=X(X({},de),Se),$e=u.props.touchMove,je={className:"slick-list",style:Ae,onClick:u.clickHandler,onMouseDown:$e?u.swipeStart:null,onMouseMove:u.state.dragging&&$e?u.swipeMove:null,onMouseUp:$e?u.swipeEnd:null,onMouseLeave:u.state.dragging&&$e?u.swipeEnd:null,onTouchStart:$e?u.swipeStart:null,onTouchMove:u.state.dragging&&$e?u.swipeMove:null,onTouchEnd:$e?u.touchEnd:null,onTouchCancel:u.state.dragging&&$e?u.swipeEnd:null,onKeyDown:u.props.accessibility?u.keyHandler:null},be={className:T,dir:"ltr",style:u.props.style};return u.props.unslick&&(je={className:"slick-list"},be={className:T,style:u.props.style}),n.default.createElement("div",be,u.props.unslick?"":K,n.default.createElement("div",P({ref:u.listRefHandler},je),n.default.createElement(b.Track,P({ref:u.trackRefHandler},g),u.props.children)),u.props.unslick?"":te,u.props.unslick?"":U)}),u.list=null,u.track=null,u.state=X(X({},o.default),{},{currentSlide:u.props.initialSlide,targetSlide:u.props.initialSlide?u.props.initialSlide:0,slideCount:n.default.Children.count(u.props.children)}),u.callbackTimers=[],u.clickable=!0,u.debouncedResize=null;var ie=u.ssrInit();return u.state=X(X({},u.state),ie),u}return pe(ee,[{key:"didPropsChange",value:function(u){for(var ie=!1,T=0,p=Object.keys(this.props);T<p.length;T++){var g=p[T];if(!u.hasOwnProperty(g)){ie=!0;break}if(!(V(u[g])==="object"||typeof u[g]=="function"||isNaN(u[g]))&&u[g]!==this.props[g]){ie=!0;break}}return ie||n.default.Children.count(this.props.children)!==n.default.Children.count(u.children)}}]),ee})(n.default.Component),_l}var ru,mh;function Rx(){if(mh)return ru;mh=1;var n=function(o){return o.replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase()}).toLowerCase()};return ru=n,ru}var ou,yh;function Lx(){if(yh)return ou;yh=1;var n=Rx(),o=function(m){var b=/[height|width]$/;return b.test(m)},f=function(m){var b="",M=Object.keys(m);return M.forEach(function(q,E){var O=m[q];q=n(q),o(q)&&typeof O=="number"&&(O=O+"px"),O===!0?b+=q:O===!1?b+="not "+q:b+="("+q+": "+O+")",E<M.length-1&&(b+=" and ")}),b},s=function(m){var b="";return typeof m=="string"?m:m instanceof Array?(m.forEach(function(M,q){b+=f(M),q<m.length-1&&(b+=", ")}),b):f(m)};return ou=s,ou}var vh;function Nx(){return vh||(vh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=M(Sn()),f=Hx(),s=M(Lx()),m=M(bm()),b=Bl();function M(D){return D&&D.__esModule?D:{default:D}}function q(D){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},q(D)}function E(){return E=Object.assign?Object.assign.bind():function(D){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var G in v)({}).hasOwnProperty.call(v,G)&&(D[G]=v[G])}return D},E.apply(null,arguments)}function O(D,_){var v=Object.keys(D);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(D);_&&(G=G.filter(function(Z){return Object.getOwnPropertyDescriptor(D,Z).enumerable})),v.push.apply(v,G)}return v}function V(D){for(var _=1;_<arguments.length;_++){var v=arguments[_]!=null?arguments[_]:{};_%2?O(Object(v),!0).forEach(function(G){w(D,G,v[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(v)):O(Object(v)).forEach(function(G){Object.defineProperty(D,G,Object.getOwnPropertyDescriptor(v,G))})}return D}function P(D,_){if(!(D instanceof _))throw new TypeError("Cannot call a class as a function")}function ne(D,_){for(var v=0;v<_.length;v++){var G=_[v];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(D,z(G.key),G)}}function ue(D,_,v){return _&&ne(D.prototype,_),Object.defineProperty(D,"prototype",{writable:!1}),D}function le(D,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(_&&_.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),_&&X(D,_)}function X(D,_){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,G){return v.__proto__=G,v},X(D,_)}function he(D){var _=ae();return function(){var v,G=oe(D);if(_){var Z=oe(this).constructor;v=Reflect.construct(G,arguments,Z)}else v=G.apply(this,arguments);return ce(this,v)}}function ce(D,_){if(_&&(q(_)=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pe(D)}function pe(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function ae(){try{var D=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!D})()}function oe(D){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},oe(D)}function w(D,_,v){return(_=z(_))in D?Object.defineProperty(D,_,{value:v,enumerable:!0,configurable:!0,writable:!0}):D[_]=v,D}function z(D){var _=x(D,"string");return q(_)=="symbol"?_:_+""}function x(D,_){if(q(D)!="object"||!D)return D;var v=D[Symbol.toPrimitive];if(v!==void 0){var G=v.call(D,_);if(q(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(D)}n.default=(function(D){le(v,D);var _=he(v);function v(G){var Z;return P(this,v),Z=_.call(this,G),w(pe(Z),"innerSliderRefHandler",function(R){return Z.innerSlider=R}),w(pe(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),w(pe(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),w(pe(Z),"slickGoTo",function(R){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(R,W)}),w(pe(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),w(pe(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return ue(v,[{key:"media",value:function(Z,R){var W=window.matchMedia(Z),ee=function(u){var ie=u.matches;ie&&R()};W.addListener(ee),this._responsiveMediaHandlers.push({mql:W,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var R=this.props.responsive.map(function(ee){return ee.breakpoint});R.sort(function(ee,j){return ee-j}),R.forEach(function(ee,j){var u;j===0?u=(0,s.default)({minWidth:0,maxWidth:ee}):u=(0,s.default)({minWidth:R[j-1]+1,maxWidth:ee}),(0,b.canUseDOM)()&&Z.media(u,function(){Z.setState({breakpoint:ee})})});var W=(0,s.default)({minWidth:R.slice(-1)[0]});(0,b.canUseDOM)()&&this.media(W,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,R,W;this.state.breakpoint?(W=this.props.responsive.filter(function(H){return H.breakpoint===Z.state.breakpoint}),R=W[0].settings==="unslick"?"unslick":V(V(V({},m.default),this.props),W[0].settings)):R=V(V({},m.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var ee=o.default.Children.toArray(this.props.children);ee=ee.filter(function(H){return typeof H=="string"?!!H.trim():!!H}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var j=[],u=null,ie=0;ie<ee.length;ie+=R.rows*R.slidesPerRow){for(var T=[],p=ie;p<ie+R.rows*R.slidesPerRow;p+=R.slidesPerRow){for(var g=[],S=p;S<p+R.slidesPerRow&&(R.variableWidth&&ee[S].props.style&&(u=ee[S].props.style.width),!(S>=ee.length));S+=1)g.push(o.default.cloneElement(ee[S],{key:100*ie+10*p+S,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));T.push(o.default.createElement("div",{key:10*ie+p},g))}R.variableWidth?j.push(o.default.createElement("div",{key:ie,style:{width:u}},T)):j.push(o.default.createElement("div",{key:ie},T))}if(R==="unslick"){var U="regular slider "+(this.props.className||"");return o.default.createElement("div",{className:U},ee)}else j.length<=R.slidesToShow&&(R.unslick=!0);return o.default.createElement(f.InnerSlider,E({style:this.props.style,ref:this.innerSliderRefHandler},(0,b.filterSettings)(R)),j)}}]),v})(o.default.Component)})(tu)),tu}var bh;function Ux(){return bh||(bh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=f(Nx());function f(s){return s&&s.__esModule?s:{default:s}}n.default=o.default})(eu)),eu}var Bx=Ux();const Tm=Tu(Bx),wt="/assets",Gx=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${k.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,su=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,qx=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,Yx=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Vx=y.button`
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
`,Xx=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,Qx=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Zx=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Kx=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Wx=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,Px=y.section`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
`,Sh=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,xh=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${k.sizing.hairline};
  background: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,$h=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n,$light:o})=>o?n.colors.white:n.colors.slate[900]};
`,Jx=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};

  @media (min-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ix=y.div`
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(${k.motion.iconLift}) scale(${k.motion.scaleHover});
  }
`,Fx=y.div`
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
  background: ${({theme:n})=>n.colors.white};
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.md};
  padding: ${({theme:n})=>n.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
`,e2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,t2=y.p`
  margin: ${({theme:n})=>n.spacing[4]} 0 0;
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.medium};
  color: ${({theme:n})=>n.colors.slate[600]};
`,n2=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
  margin-top: ${({theme:n})=>n.spacing[10]};
  background: ${k.effects.carouselBackground};
  overflow: hidden;
`,a2=y.div`
  position: absolute;
  inset: 0;
  background: ${k.effects.carouselBackdrop};
`,i2=y.div`
  position: relative;
  width: ${k.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${k.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,l2=y(Tm)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${k.sizing.carouselSlidePadding};
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
    opacity: ${k.effects.carouselCardOpacity};
    transform: scale(${k.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${k.motion.scaleActive});
    filter: ${k.effects.carouselDropShadow};
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
      padding: ${k.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${k.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,r2=y.div`
  aspect-ratio: 9 / 16;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  overflow: hidden;
  background: ${({theme:n})=>n.colors.slate[900]};
  box-shadow: ${k.effects.carouselCardShadow};
  cursor: pointer;
`,o2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,s2=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${k.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,c2=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${k.sizing.hairline} solid ${k.effects.glassWhite20};
  background: ${k.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${k.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${k.effects.glassWhite20};
  }
`,wh=({className:n,style:o,onClick:f,direction:s,ariaLabel:m})=>d.jsx(c2,{className:n,style:o,onClick:f,"aria-label":m,children:s==="next"?d.jsx(Mu,{size:18}):d.jsx(fn,{size:18})});y.section`
  padding: ${({theme:n})=>n.spacing[12]} ${({theme:n})=>n.spacing[6]};
`;y.div`
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  overflow: hidden;
  background: ${k.effects.compositionGradient};
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
`;const u2=y.footer`
  padding: ${({theme:n})=>n.spacing[10]} ${({theme:n})=>n.spacing[6]};
  border-top: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,f2=y.div`
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
`,d2=y.p`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  color: ${({theme:n})=>n.colors.slate[400]};
`,p2=y.button`
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
`,g2=[`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest-alt.png`,`${wt}/images/brand/app-icons-splash-screens/icons/monstrous-evorise-icon.png`,`${wt}/images/brand/app-icons-splash-screens/icons/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/icons/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/icons/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/icons/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/icons/revback.png`,`${wt}/images/brand/app-icons-splash-screens/icons/selara.png`,`${wt}/images/brand/app-icons-splash-screens/icons/sky-hero-icon.png`],h2=[`${wt}/images/brand/app-icons-splash-screens/splash-screens/cat-wars.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-craft.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/elemental-quest.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/fatty-fish.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/feed-me.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/monstrous-evorise.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/revback.png`,`${wt}/images/brand/app-icons-splash-screens/splash-screens/selara.png`],m2=({onBack:n})=>{const{t:o}=Et(),f=Ce.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=q=>{f.current&&f.current.slickGoTo(q)},b=Ce.useMemo(()=>new Date().getFullYear(),[]),M=Ce.useMemo(()=>({centerMode:!0,centerPadding:k.carousel.centerPaddingLg,infinite:!0,slidesToShow:k.carousel.slidesToShowLg,speed:k.carousel.speed,autoplay:!0,autoplaySpeed:k.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(wh,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(wh,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:k.carousel.breakpointLg,settings:{slidesToShow:k.carousel.slidesToShowMd,centerPadding:k.carousel.centerPaddingMd}},{breakpoint:k.carousel.breakpointSm,settings:{slidesToShow:k.carousel.slidesToShowSm,slidesToScroll:k.carousel.slidesToScrollSm,centerPadding:k.carousel.centerPaddingSm,centerMode:!1,arrows:!1}},{breakpoint:k.carousel.breakpointXs,settings:{slidesToShow:k.carousel.slidesToShowSm,slidesToScroll:k.carousel.slidesToScrollSm,centerPadding:k.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(Gx,{children:[d.jsx(qx,{children:d.jsxs(Yx,{children:[d.jsxs(Vx,{onClick:s,"aria-label":o.appIcons.backToPortfolioAria,children:[d.jsx(fn,{size:18}),o.appIcons.backToPortfolio]}),d.jsx(Xx,{children:o.work.categories.brandDesign})]})}),d.jsx(Qx,{children:d.jsxs(su,{children:[d.jsx(Zx,{children:o.appIcons.eyebrow}),d.jsxs(Kx,{children:[o.appIcons.titlePrimary," ",d.jsx("em",{children:o.appIcons.titleEmphasis})]}),d.jsx(Wx,{children:o.appIcons.lead})]})}),d.jsx(Px,{children:d.jsxs(su,{children:[d.jsxs(Sh,{children:[d.jsx(xh,{}),d.jsx($h,{children:o.appIcons.appIconsTitle})]}),d.jsx(Jx,{children:g2.map((q,E)=>d.jsxs(Ix,{children:[d.jsx(Fx,{children:d.jsx(e2,{src:q,alt:o.appIcons.iconLabels[E]})}),d.jsx(t2,{children:o.appIcons.iconLabels[E]})]},q))})]})}),d.jsxs(n2,{children:[d.jsx(a2,{}),d.jsx(su,{style:{position:"relative",zIndex:1},children:d.jsxs(Sh,{children:[d.jsx(xh,{$light:!0}),d.jsx($h,{$light:!0,children:o.appIcons.splashScreensTitle})]})}),d.jsx(i2,{children:d.jsx(l2,{ref:f,...M,children:h2.map((q,E)=>d.jsxs("div",{onClick:()=>m(E),children:[d.jsx(r2,{className:"carousel-card",children:d.jsx(o2,{src:q,alt:o.appIcons.splashLabels[E],loading:"lazy"})}),d.jsx(s2,{className:"carousel-caption",children:o.appIcons.splashLabels[E]})]},q))})})]}),d.jsx(u2,{children:d.jsxs(f2,{children:[d.jsxs(d2,{children:["© ",b," ",vo,". ",o.appIcons.footerRights]}),d.jsxs(p2,{onClick:s,children:[o.appIcons.viewMoreProjects,d.jsx(Mu,{size:16})]})]})})]})},y2=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${k.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,v2=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,b2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,S2=y.button`
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
`,x2=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,$2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,w2=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,z2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,T2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,E2=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,A2=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,j2=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[10]};
`,_2=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.sm};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[500]};
`,O2=y.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing[4]};
  overflow-x: auto;
  padding-bottom: ${({theme:n})=>n.spacing[2]};

  &::-webkit-scrollbar {
    height: ${k.sizing.scrollbarWidth};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.slate[200]};
    border-radius: ${({theme:n})=>n.radii.full};
  }
`,k2=y.div`
  flex: 0 0 auto;
  width: 240px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
`,C2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,M2=n=>n.includes(" ")?encodeURI(n):n,D2=({onBack:n})=>{const{t:o}=Et(),f=bo.find(m=>m.id===17),s=Ce.useMemo(()=>{const m=(f==null?void 0:f.gallery)??[],b=[],M=new Map;return m.forEach(q=>{const ne=decodeURIComponent(q.split("/").pop()??"").replace(/\.[^/.]+$/,"").replace(/^\d+\s+/,"").replace(/\s+\d+$/,"")||"Screenshots";M.has(ne)?b[M.get(ne)].items.push(q):(M.set(ne,b.length),b.push({name:ne,items:[q]}))}),b},[f==null?void 0:f.gallery]);return d.jsxs(y2,{children:[d.jsx(v2,{children:d.jsxs(b2,{children:[d.jsxs(S2,{onClick:n,children:[d.jsx(fn,{size:18}),o.appStoreScreenshots.backToPortfolio]}),d.jsx(x2,{children:o.appStoreScreenshots.headerTag})]})}),d.jsxs(w2,{children:[d.jsx(z2,{children:o.appStoreScreenshots.eyebrow}),d.jsx(T2,{children:o.appStoreScreenshots.title}),o.appStoreScreenshots.lead&&d.jsx(E2,{children:o.appStoreScreenshots.lead})]}),d.jsx(A2,{children:d.jsx($2,{children:s.map(m=>d.jsxs(j2,{children:[d.jsx(_2,{children:m.name}),d.jsx(O2,{children:m.items.map((b,M)=>d.jsx(k2,{children:d.jsx(C2,{src:M2(b),alt:`${m.name} ${M+1}`,loading:"lazy"})},`${m.name}-${M}`))})]},m.name))})})]})},H2=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,R2=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,L2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,N2=y.button`
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
`,U2=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,B2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,G2=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,q2=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Y2=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,V2=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
`,X2=y.div`
  margin: 0 auto;
  max-width: 1040px;
  border-radius: ${({theme:n})=>n.radii["4xl"]};
  background: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing[4]};
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
  box-shadow: ${({theme:n})=>n.shadows.lg};
`,Q2=y.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({theme:n})=>n.radii["3xl"]};
`,Z2=n=>n.includes(" ")?encodeURI(n):n,K2=({onBack:n})=>{const{t:o}=Et();return d.jsxs(H2,{children:[d.jsx(R2,{children:d.jsxs(L2,{children:[d.jsxs(N2,{onClick:n,children:[d.jsx(fn,{size:18}),o.namelaka.backToPortfolio]}),d.jsx(U2,{children:o.namelaka.headerTag})]})}),d.jsxs(G2,{children:[d.jsx(q2,{children:o.namelaka.eyebrow}),d.jsx(Y2,{children:o.namelaka.title})]}),d.jsx(V2,{children:d.jsx(B2,{children:d.jsx(X2,{children:d.jsx(Q2,{src:Z2("/assets/images/brand/Namelaka icons and illustration/Namelaka.png"),alt:o.namelaka.title})})})})]})},Em="/assets",W2=`${Em}/video/Mindzy – Brain Training`,P2=`${Em}/images/brand/Mindzy – Brain Training/UI/2_Full_Composition_Mindzy – Brain Training.png`,J2=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${k.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,zh=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
`,I2=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,F2=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,e$=y.button`
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
`,t$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,n$=y.section`
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
`,a$=y.div`
  position: relative;
  z-index: ${k.zIndex.foreground};
`,i$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,l$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,r$=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,o$=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,s$=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${k.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,c$=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,u$=y.section`
  position: relative;
  padding: ${({theme:n})=>n.spacing[8]} ${({theme:n})=>n.spacing[6]};
  background: ${k.effects.carouselBackground};
  overflow: hidden;
`,f$=y.div`
  position: absolute;
  inset: 0;
  background: ${k.effects.carouselBackdrop};
`,d$=y.div`
  position: relative;
  width: ${k.layout.fullViewportWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: ${k.sizing.carouselShellPadding};

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    width: 100%;
    left: 0;
    transform: none;
    padding: 0;
  }
`,p$=y(Tm)`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]};

  .slick-slide {
    padding: ${k.sizing.carouselSlidePadding};
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
    opacity: ${k.effects.carouselCardOpacity};
    transform: scale(${k.motion.scaleDown});
    transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
    pointer-events: none;
  }

  .slick-center .carousel-card {
    opacity: 1;
    transform: scale(${k.motion.scaleActive});
    filter: ${k.effects.carouselDropShadow};
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
      padding: ${k.sizing.carouselSlidePaddingSm};
    }

    .slick-slide .carousel-card {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    .slick-slide .carousel-caption {
      opacity: 1;
      transform: scale(1);
      margin-top: ${k.sizing.carouselCaptionOffsetSm};
    }

    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`,g$=y.div`
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
  max-width: 320px;
  margin: 0 auto;
  cursor: pointer;
`,h$=y.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  clip-path: inset(5.5% 0 0 0 round 16px);
`,m$=y.p`
  margin-top: ${({theme:n})=>n.spacing[4]};
  text-align: center;
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  font-weight: ${({theme:n})=>n.typography.weights.semibold};
  color: ${k.effects.carouselCaptionMuted};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.tight};
`,y$=y.button`
  width: ${({theme:n})=>n.spacing[8]};
  height: ${({theme:n})=>n.spacing[8]};
  border-radius: ${({theme:n})=>n.radii.full};
  border: ${k.sizing.hairline} solid ${k.effects.glassWhite20};
  background: ${k.effects.glassWhite10};
  color: ${({theme:n})=>n.colors.white};
  backdrop-filter: blur(${k.effects.blurGlass});
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${k.effects.glassWhite20};
  }
`,Th=({className:n,style:o,onClick:f,direction:s,ariaLabel:m})=>d.jsx(y$,{className:n,style:o,onClick:f,"aria-label":m,children:s==="next"?d.jsx(Mu,{size:18}):d.jsx(fn,{size:18})}),Eh=n=>n.includes(" ")?encodeURI(n):n,v$=["Catch the bug.MP4","Color count.MP4","Linking Pairs.mov","Magnetic Grid.MP4","Match pairs.MP4","Missing operations.MP4","Numbers sum.MP4","Rain dots.MP4","Remember the bubbles.MP4","Robot Runner.MP4","Simon game.MP4","Space percentages.MP4","Spelling Correction.MP4","Sum Squares.MP4","Word Pairs.MP4"],b$=({onBack:n})=>{const{t:o}=Et(),f=Ce.useRef(null),s=()=>{if(n){n();return}window.location.hash="#work"},m=q=>{f.current&&f.current.slickGoTo(q)},b=Ce.useMemo(()=>v$.map(q=>`${W2}/${q}`),[]),M=Ce.useMemo(()=>({centerMode:!0,centerPadding:"120px",infinite:!0,slidesToShow:3,speed:k.carousel.speed,autoplay:!0,autoplaySpeed:k.carousel.autoplaySpeed,pauseOnHover:!0,arrows:!0,nextArrow:d.jsx(Th,{direction:"next",ariaLabel:o.appIcons.next}),prevArrow:d.jsx(Th,{direction:"prev",ariaLabel:o.appIcons.previous}),responsive:[{breakpoint:k.carousel.breakpointLg,settings:{slidesToShow:3,centerPadding:"60px"}},{breakpoint:k.carousel.breakpointSm,settings:{slidesToShow:2,slidesToScroll:k.carousel.slidesToScrollSm,centerPadding:"20px",centerMode:!1,arrows:!1}},{breakpoint:k.carousel.breakpointXs,settings:{slidesToShow:1,slidesToScroll:k.carousel.slidesToScrollSm,centerPadding:k.carousel.centerPaddingSm,centerMode:!1,arrows:!1}}]}),[o]);return d.jsxs(J2,{children:[d.jsx(I2,{children:d.jsxs(F2,{children:[d.jsxs(e$,{onClick:s,children:[d.jsx(fn,{size:18}),o.mindzy.backToPortfolio]}),d.jsx(t$,{children:o.work.categories.uiuxDesign})]})}),d.jsx(n$,{$coverUrl:Eh(P2),children:d.jsx(zh,{children:d.jsxs(a$,{children:[d.jsx(i$,{children:o.mindzy.eyebrow}),d.jsx(l$,{children:o.mindzy.title}),o.mindzy.lead&&d.jsx(r$,{children:o.mindzy.lead})]})})}),d.jsxs(u$,{children:[d.jsx(f$,{}),d.jsx(zh,{children:d.jsxs(o$,{children:[d.jsx(s$,{}),d.jsx(c$,{children:o.mindzy.videoTitle})]})}),d.jsx(d$,{children:d.jsx(p$,{ref:f,...M,children:b.map((q,E)=>{var O;return d.jsxs("div",{onClick:()=>m(E),children:[d.jsx(g$,{className:"carousel-card",children:d.jsx(h$,{src:Eh(q),muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"metadata"})}),d.jsx(m$,{className:"carousel-caption",children:(O=q.split("/").pop())==null?void 0:O.replace(/\.(MP4|mov)$/i,"")})]},q)})})})]})]})},Am="/assets",Ah=`${Am}/video/Marketing video`,S$=`${Am}/images/brand/Full_Composition_Marketing_video.png`,x$=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${k.effects.appIconsBackground};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,$$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: 0 ${({theme:n})=>n.spacing[6]};
`,w$=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,z$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T$=y.button`
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
`,E$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,A$=y.section`
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
`,j$=y.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%);
  pointer-events: none;
`,_$=y.div`
  position: relative;
  z-index: 1;
`,O$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,k$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,C$=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,M$=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  margin-bottom: ${({theme:n})=>n.spacing[8]};
  margin-top: ${({theme:n})=>n.spacing[12]};
`,D$=y.div`
  width: ${({theme:n})=>n.spacing[9]};
  height: ${k.sizing.hairline};
  background: ${({theme:n})=>n.colors.slate[900]};
`,H$=y.h2`
  margin: 0;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[900]};
`,R$=y.div`
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
`,L$=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[6]};
  margin-bottom: ${({theme:n})=>n.spacing[12]};

  @media (max-width: ${({theme:n})=>n.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,N$=y.div`
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
`,U$=y.div`
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
`,jh=y.video`
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
`;const cu=n=>encodeURI(n),B$=["1080x1920.mp4","App Store.mp4","Concept_2_1080x1920.mp4","video5_1080x1920.mp4","Video_1080x1920_android.mp4","valentine_stickers.mp4"],G$=["Comp 1.mp4","Concept 1 17-09_1.mp4","main video_2.mp4","video.mp4","Google play.mp4","Video (1).mp4"],q$=({onBack:n})=>{const{t:o}=Et(),f=()=>{if(n){n();return}window.location.hash="#work"};return d.jsxs(x$,{children:[d.jsx(w$,{children:d.jsxs(z$,{children:[d.jsxs(T$,{onClick:f,children:[d.jsx(fn,{size:18}),o.marketingVideo.backToPortfolio]}),d.jsx(E$,{children:o.marketingVideo.headerTag})]})}),d.jsxs(A$,{style:{"--hero-cover-url":`url(${cu(S$)})`},children:[d.jsx(j$,{}),d.jsxs(_$,{children:[d.jsx(O$,{children:o.marketingVideo.eyebrow}),d.jsx(k$,{children:o.marketingVideo.title}),d.jsx(C$,{children:o.marketingVideo.lead})]})]}),d.jsxs($$,{children:[d.jsxs(M$,{children:[d.jsx(D$,{}),d.jsx(H$,{children:o.marketingVideo.allVideosTitle})]}),d.jsx(R$,{children:B$.map(s=>d.jsx(U$,{children:d.jsx(jh,{src:cu(`${Ah}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))}),d.jsx(L$,{children:G$.map(s=>d.jsx(N$,{children:d.jsx(jh,{src:cu(`${Ah}/${s}`),muted:!0,loop:!0,playsInline:!0,autoPlay:!0})},s))})]})]})},Y$="/assets",Ml=`${Y$}/images/brand/Elemental Quest game`,V$=`${Ml}/logo Elemental Quest png.png`,X$=[`${Ml}/Map_1.png`,`${Ml}/Map_2.png`,`${Ml}/Map_3.png`,`${Ml}/Map_4.png`],Q$=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: ${({theme:n})=>n.colors.white};
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Z$=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: ${k.effects.glassWhite70};
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid ${k.effects.overlayWhite40};
`,K$=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,W$=y.button`
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
`,P$=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[400]};
`,J$=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,I$=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brand.purple};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,F$=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.slate[900]};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,ew=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[500]};
  margin: 0 auto;
`,tw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,nw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,aw=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,iw=y.div`
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
`,lw=y.div`
  overflow: hidden;
`,rw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,_h=n=>n.includes(" ")?encodeURI(n):n,ow=({onBack:n})=>{const{t:o}=Et();return d.jsxs(Q$,{children:[d.jsx(Z$,{children:d.jsxs(K$,{children:[d.jsxs(W$,{onClick:n,children:[d.jsx(fn,{size:18}),o.elementalQuest.backToPortfolio]}),d.jsx(P$,{children:o.elementalQuest.headerTag})]})}),d.jsxs(J$,{children:[d.jsx(I$,{children:o.elementalQuest.eyebrow}),d.jsx(F$,{children:o.elementalQuest.title}),d.jsx(ew,{children:o.elementalQuest.lead})]}),d.jsxs(tw,{children:[d.jsx(nw,{children:d.jsx(aw,{src:_h(V$),alt:o.elementalQuest.logoAlt})}),d.jsx(iw,{children:X$.map((f,s)=>d.jsx(lw,{children:d.jsx(rw,{src:_h(f),alt:`${o.elementalQuest.mapAlt} ${s+1}`})},s))})]})]})},sw="/assets",fo=`${sw}/images/brand/Combat Planes`,cw=`${fo}/logo_Combat Planes.png`,uw=[`${fo}/Maps.png`,`${fo}/Planes skins.png`,`${fo}/Characters.png`],fw=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: #2C307A;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,dw=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: rgba(44, 48, 122, 0.85);
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,pw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,gw=y.button`
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
`,hw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,mw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,yw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,vw=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,bw=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,Sw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,xw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,$w=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,ww=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,zw=y.div`
  overflow: hidden;
`,Tw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,Oh=n=>n.includes(" ")?encodeURI(n):n,Ew=({onBack:n})=>{const{t:o}=Et();return d.jsxs(fw,{children:[d.jsx(dw,{children:d.jsxs(pw,{children:[d.jsxs(gw,{onClick:n,children:[d.jsx(fn,{size:18}),o.combatPlanes.backToPortfolio]}),d.jsx(hw,{children:o.combatPlanes.headerTag})]})}),d.jsxs(mw,{children:[d.jsx(yw,{children:o.combatPlanes.eyebrow}),d.jsx(vw,{children:o.combatPlanes.title}),d.jsx(bw,{children:o.combatPlanes.lead})]}),d.jsxs(Sw,{children:[d.jsx(xw,{children:d.jsx($w,{src:Oh(cw),alt:o.combatPlanes.logoAlt})}),d.jsx(ww,{children:uw.map((f,s)=>d.jsx(zw,{children:d.jsx(Tw,{src:Oh(f),alt:`${o.combatPlanes.galleryAlt} ${s+1}`})},s))})]})]})},jm="/assets",Nl=`${jm}/images/brand/Fatty Fish`,Aw=`${Nl}/Logo Fatty Fish.png`,jw=`${jm}/video/Fatty Fish/Fatty Fish video.mp4`,_w=[`${Nl}/Character.png`,`${Nl}/Objects.png`],Ow=[`${Nl}/IMG_1.png`,`${Nl}/IMG_2.png`],kw=y.section`
  min-height: ${k.layout.fullViewportHeight};
  background: #4F22D1;
  padding-bottom: ${({theme:n})=>n.spacing[16]};
`,Cw=y.header`
  position: sticky;
  top: 0;
  z-index: ${k.zIndex.stickyHeader};
  background: rgba(79, 34, 209, 0.85);
  backdrop-filter: blur(${k.effects.blurStrong});
  border-bottom: ${k.sizing.hairline} solid rgba(255, 255, 255, 0.1);
`,Mw=y.div`
  max-width: ${({theme:n})=>n.layout.container};
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Dw=y.button`
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
`,Hw=y.span`
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wide};
  color: ${({theme:n})=>n.colors.slate[300]};
`,Rw=y.section`
  padding: ${({theme:n})=>n.spacing[14]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[10]};
  text-align: center;
`,Lw=y.span`
  display: inline-block;
  font-size: ${({theme:n})=>n.typography.sizes.xs};
  font-weight: ${({theme:n})=>n.typography.weights.bold};
  letter-spacing: ${({theme:n})=>n.typography.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.slate[300]};
  margin-bottom: ${({theme:n})=>n.spacing[6]};
`,Nw=y.h1`
  font-family: ${({theme:n})=>n.typography.fonts.serif};
  font-size: ${({theme:n})=>n.typography.sizes["5xl"]};
  line-height: ${({theme:n})=>n.typography.lineHeights.tight};
  color: ${({theme:n})=>n.colors.white};
  margin: 0 0 ${({theme:n})=>n.spacing[6]} 0;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    font-size: ${({theme:n})=>n.typography.sizes["6xl"]};
  }
`,Uw=y.p`
  max-width: ${k.layout.appIconsHeroLeadMaxWidth};
  font-size: ${({theme:n})=>n.typography.sizes.lg};
  line-height: ${({theme:n})=>n.typography.lineHeights.relaxed};
  color: ${({theme:n})=>n.colors.slate[300]};
  margin: 0 auto;
`,Bw=y.section`
  padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[4]} ${({theme:n})=>n.spacing[12]};

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    padding: ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[6]} ${({theme:n})=>n.spacing[12]};
  }
`,Gw=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:n})=>n.spacing[8]};
`,qw=y.img`
  max-width: 280px;
  height: auto;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    max-width: 360px;
  }
`,Yw=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${({theme:n})=>n.breakpoints.md}) {
    gap: ${({theme:n})=>n.spacing[6]};
  }
`,Vw=y.div`
  overflow: hidden;
`,Xw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,Qw=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:n})=>n.spacing[4]};
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[6]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`,Zw=y.img`
  width: 100%;
  height: auto;
  display: block;
`,Kw=y.div`
  max-width: 64%;
  margin: ${({theme:n})=>n.spacing[8]} auto 0;

  @media (max-width: ${({theme:n})=>n.breakpoints.sm}) {
    max-width: 80%;
  }
`,Ww=y.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: ${({theme:n})=>n.radii["2xl"]};
`,lo=n=>n.includes(" ")?encodeURI(n):n,Pw=({onBack:n})=>{const{t:o}=Et();return d.jsxs(kw,{children:[d.jsx(Cw,{children:d.jsxs(Mw,{children:[d.jsxs(Dw,{onClick:n,children:[d.jsx(fn,{size:18}),o.fattyFish.backToPortfolio]}),d.jsx(Hw,{children:o.fattyFish.headerTag})]})}),d.jsxs(Rw,{children:[d.jsx(Lw,{children:o.fattyFish.eyebrow}),d.jsx(Nw,{children:o.fattyFish.title}),d.jsx(Uw,{children:o.fattyFish.lead})]}),d.jsxs(Bw,{children:[d.jsx(Gw,{children:d.jsx(qw,{src:lo(Aw),alt:o.fattyFish.logoAlt})}),d.jsx(Yw,{children:_w.map((f,s)=>d.jsx(Vw,{children:d.jsx(Xw,{src:lo(f),alt:`${o.fattyFish.galleryAlt} ${s+1}`})},s))}),d.jsx(Qw,{children:Ow.map((f,s)=>d.jsx(Zw,{src:lo(f),alt:`${o.fattyFish.galleryAlt} screenshot ${s+1}`},s))}),d.jsx(Kw,{children:d.jsx(Ww,{src:lo(jw),autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]})]})},dn="/assets/images/brand/Lending Harry Potter vs Darth_Vader",_m=`${dn}/Back_Hogwarts.png?v=${new Date().getTime()}`,Om=`${dn}/Back_plane.png`,Jw=`${dn}/Darth_Vader_full height.png`,Iw=`${dn}/Darth_Vader_part_2.png`,Fw=`${dn}/Harry_Potter_full_height.png`,Ti=`${dn}/Candle.png`,e5=`${dn}/Harry_Potter_part_2.png`,t5=`${dn}/Property 1=Default.svg`,n5=`${dn}/Video Hero.mp4`,a5=`${dn}/Harry Potter's wand.png`,i5=`${dn}/Harry Potter's wand_light.png`,l5=Xt`
  from { opacity: 0; transform: translateY(50px) }
  to   { opacity: 1; transform: translateY(0) }
`;Xt`
  from { opacity: 0 }
  to   { opacity: 1 }
`;Xt`
  from { opacity: 0; transform: translateX(-80px) }
  to   { opacity: 1; transform: translateX(0) }
`;Xt`
  from { opacity: 0; transform: translateX(80px) }
  to   { opacity: 1; transform: translateX(0) }
`;const r5=Xt`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-12px) }
`,o5=Xt`
  0%, 100% { opacity: 0.5; filter: blur(4px) }
  50%      { opacity: 1;   filter: blur(8px) }
`,s5=Xt`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0 }
  10%  { opacity: 1 }
  90%  { opacity: 1 }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0 }
`,Oo="#1a2238",c5=y.div`
  min-height: ${k.layout.fullViewportHeight};
  background: ${Oo};
  color: #fff;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`,u5=y.button`
  position: fixed; top: 20px; left: 20px; z-index: 300;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.35); backdrop-filter: blur(14px);
  padding: 10px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,.7); cursor: pointer;
  transition: all .3s;
  &:hover { background: rgba(0,0,0,.55); color: #fff }
`,f5=y.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px; height: 72px;
  background: rgba(26,34,56,.55);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,.08);
  @media(max-width:768px){ padding: 0 20px; height: 60px }
`,d5=y.img`
  height: 28px; width: auto; opacity: .9;
`,p5=y.div`
  display: flex; gap: 36px;
  @media(max-width:640px){ gap: 18px }
`,uu=y.span`
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
`,g5=y.button`
  padding: 12px 28px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; box-shadow: 0 4px 28px rgba(120,20,20,.5) }
`,h5=y.section`
  position: relative; width: 100%; height: 100vh;
  min-height: 640px; overflow: hidden;
  margin-top: 72px;
  @media(max-width:768px){ margin-top: 60px }
`,m5=y.video`
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover; z-index: 0;
`,y5=y.div`
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(
    to top,
    ${Oo} 0%,
    rgba(26,34,56,.6) 30%,
    rgba(26,34,56,.15) 60%,
    rgba(26,34,56,.05) 100%
  );
`;y.div`
    display: none;
`;const v5=y.div`
  position: absolute; bottom: 0; left: 0; z-index: 3;
  padding: 0 48px 88px;
  animation: ${l5} 1s ease-out .6s both;
  @media(max-width:768px){ padding: 0 24px 56px }
`,b5=y.div`
  font-family: 'Katibeh', cursive; font-size: 64px;
  line-height: 1; color: rgba(255,255,255,.9); margin-bottom: -10px;
  @media(max-width:768px){ font-size: 40px; margin-bottom: -6px }
`,S5=y.div`
  display: flex; align-items: baseline; gap: 14px;
`,x5=y.h1`
  font-family: 'Katibeh', cursive; font-size: 164px;
  font-weight: 400; line-height: .9; color: #fff; margin: 0;
  @media(max-width:1024px){ font-size: 120px }
  @media(max-width:768px) { font-size: 80px  }
  @media(max-width:480px) { font-size: 56px  }
`,$5=y.span`
  font-family: 'Katibeh', cursive; font-size: 64px;
  color: rgba(255,255,255,.8);
  @media(max-width:768px){ font-size: 40px }
`,w5=y.div`
  display: flex; gap: 16px;
  /* lift buttons up toward the heading without moving the heading itself */
  margin-top: -40px;
  @media(max-width:768px){ margin-top: -20px }
  @media(max-width:480px){ margin-top: -12px }
`,z5=y.button`
  padding: 14px 38px; border: none; border-radius: 999px;
  background: #7a1a1a; color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600;
  cursor: pointer; transition: all .3s;
  &:hover { background: #9a2222; transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(120,20,20,.5) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`,T5=y.button`
  padding: 14px 38px;
  border: 1px solid rgba(255,255,255,.22); border-radius: 999px;
  background: rgba(255,255,255,.04); color: #fff;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500;
  cursor: pointer; transition: all .3s;
  &:hover { background: rgba(255,255,255,.1);
    border-color: rgba(255,255,255,.4) }
  @media(max-width:480px){ padding: 12px 28px; font-size: 14px }
`,kh=y.section`
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
    background: url(${_m}) left center / contain no-repeat;
    opacity: 0.32;
    pointer-events: none;
  }
  &.vader-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: url(${Om}) right center / contain no-repeat;
    opacity: 0.18;
    pointer-events: none;
  }
`;y.div`
  position: absolute;
  ${n=>n.$side}: 0; top: 0;
  width: 55%; height: 100%;
  opacity: .12; pointer-events: none;
  background: url(${n=>n.$src}) center / cover no-repeat;
  mask-image: linear-gradient(to ${n=>n.$side==="left"?"right":"left"}, black 30%, transparent);
  -webkit-mask-image: linear-gradient(to ${n=>n.$side==="left"?"right":"left"}, black 30%, transparent);
`;const Ch=y.div`
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
    animation: ${r5} 5s ease-in-out infinite;
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
`,Mh=y.div`
  flex: 1; z-index: 1;
  padding: 0 48px;
  opacity: ${n=>n.$visible?1:0};
  transform: translateX(${n=>n.$visible?0:"40px"});
  transition: opacity .8s ease-out .2s, transform .8s ease-out .2s;
  @media(max-width:900px){ padding: 0; text-align: center;
    transform: translateX(0) translateY(${n=>n.$visible?0:"30px"}) }
`,Dh=y.h2`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400; margin: 0 0 20px;
  color: #fff;
`,E5=y.img`
  display: block;
  margin: 0 0 40px 0; /* move left by removing auto left margin */
  width: 320px;
  max-width: 100%;
  height: auto;
  transition: filter 0.4s, box-shadow 0.4s;
  cursor: pointer;
  @media(max-width:900px){ width: 180px; margin-bottom: 24px; }
`,A5=y.div`
  display: block;
  text-align: center;
  margin: 0 auto 32px auto;
  position: relative;
  width: 100%;
`,Hh=y.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px; line-height: 1.8;
  color: rgba(255,255,255,.6); max-width: 480px;
  @media(max-width:900px){ margin: 0 auto }
`;y.div`
  width: 60px; height: 3px; border-radius: 2px;
  margin-bottom: 24px;
  background: ${n=>n.$color};
  box-shadow: 0 0 12px ${n=>n.$color}, 0 0 24px ${n=>n.$color}44;
  animation: ${o5} 3s ease-in-out infinite;
  @media(max-width:900px){ margin: 0 auto 24px }
`;const Rh=y.div`
  position: absolute;
  left: ${n=>n.$x}%;
  bottom: -10px;
  width: ${n=>n.$size}px; height: ${n=>n.$size}px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  animation: ${s5} ${()=>8+Math.random()*6}s linear infinite;
  animation-delay: ${n=>n.$delay}s;
`,j5=y.footer`
  position: relative; background: ${Oo};
  padding: 0 48px 36px; overflow: hidden;
  @media(max-width:768px){ padding: 0 20px 28px }
`,_5=y.div`
  width: 100%; height: 1px;
  background: rgba(255,255,255,.12);
  margin-bottom: 48px;
`,O5=y.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  flex-wrap: wrap; gap: 40px;
  max-width: 1100px; margin: 0 auto;
  @media(max-width:640px){ gap: 28px }
`,k5=y.div`
  max-width: 200px; flex-shrink: 0;
`,C5=y.h3`
  font-family: 'Gideon Roman', serif;
  font-size: 36px; font-weight: 400;
  color: #fff; margin: 0 0 4px;
  letter-spacing: 3px;
`,M5=y.p`
  font-size: 14px; color: rgba(255,255,255,.35);
  margin: 0 0 20px;
`,D5=y.div`
  display: flex; gap: 12px;
`,fu=y.a`
  width: 34px; height: 34px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.18);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.5); transition: all .2s;
  text-decoration: none;
  &:hover { border-color: rgba(255,255,255,.4); color: #fff }
  svg { width: 15px; height: 15px }
`,du=y.div`
  min-width: 120px;
`,pu=y.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px; font-weight: 600;
  color: #fff; margin: 0 0 16px;
`,vn=y.a`
  display: block; font-size: 14px;
  color: rgba(255,255,255,.4); text-decoration: none;
  margin-bottom: 12px; cursor: pointer;
  transition: color .2s;
  &:hover { color: rgba(255,255,255,.8) }
`,H5=y.div`
  position: absolute; left: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom left }
  @media(max-width:768px){ height: 200px }
`,R5=y.div`
  position: absolute; right: 0; bottom: 0;
  height: 320px; z-index: 0; pointer-events: none;
  opacity: .7;
  img { height: 100%; width: auto; object-fit: contain;
        object-position: bottom right }
  @media(max-width:768px){ height: 200px }
`,L5=y.div`
  position: relative; z-index: 1;
  display: flex; justify-content: space-between;
  max-width: 1100px; margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.06);
  font-size: 12px; color: rgba(255,255,255,.2);
  @media(max-width:640px){ flex-direction: column; gap: 6px; text-align: center }
`,Lh=(n=.2)=>{const o=Ce.useRef(null),[f,s]=Ce.useState(!1);return Ce.useEffect(()=>{const m=new IntersectionObserver(([b])=>{b.isIntersecting&&s(!0)},{threshold:n});return o.current&&m.observe(o.current),()=>m.disconnect()},[n]),{ref:o,visible:f}},N5=({onBack:n})=>{const[o,f]=Ce.useState(null),[s,m]=Ce.useState(!1),[b,M]=Ce.useState(!1),{t:q}=Et(),E=q.landingHpVsVader,O=Lh(.15),V=Lh(.15),P=Array.from({length:12},(ne,ue)=>({x:Math.random()*100,delay:Math.random()*8,size:2+Math.random()*3,key:ue}));return d.jsxs(c5,{children:[d.jsxs(u5,{onClick:n,children:[d.jsx(fn,{size:16}),E.backToPortfolio]}),d.jsxs(f5,{children:[d.jsx(d5,{src:t5,alt:"Logo"}),d.jsxs(p5,{children:[d.jsx(uu,{$active:!0,children:E.navHome}),d.jsx(uu,{children:E.navGame}),d.jsx(uu,{children:E.navContact})]}),d.jsx(g5,{children:E.playNow})]}),d.jsxs(h5,{children:[d.jsx(m5,{src:n5,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),d.jsx(y5,{}),d.jsxs(v5,{children:[d.jsx(b5,{children:E.enterThe}),d.jsxs(S5,{children:[d.jsx(x5,{children:E.gameWorld}),d.jsx($5,{children:"WORLD"})]}),d.jsxs(w5,{children:[d.jsx(z5,{onClick:()=>f("harry"),children:E.playNow}),d.jsx(T5,{onClick:()=>f("vader"),children:E.characters})]})]})]}),d.jsxs(kh,{ref:O.ref,style:{position:"relative",overflow:"visible"},children:[d.jsx("img",{src:_m,alt:"Hogwarts Castle",style:{position:"absolute",right:0,bottom:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"right bottom",zIndex:1,opacity:.48,pointerEvents:"none"}}),P.map(ne=>d.jsx(Rh,{$x:ne.x,$delay:ne.delay,$size:ne.size},ne.key)),d.jsxs(Mh,{$visible:O.visible,children:[d.jsx(A5,{children:d.jsx(E5,{src:s?i5:a5,alt:"Harry Potter's wand",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{transition:"filter 0.4s, box-shadow 0.4s"}})}),d.jsx(Dh,{children:E.harryTitle}),d.jsxs(Hh,{children:[E.harryDesc," ",E.harryWeapon??""]})]}),d.jsxs(Ch,{$visible:O.visible,$highlight:"#f5c542",children:[d.jsx("img",{src:Fw,alt:"Harry Potter"}),o==="harry"&&d.jsxs("div",{className:"candles",children:[d.jsx("img",{src:Ti,alt:"Candle"}),d.jsx("img",{src:Ti,alt:"Candle"}),d.jsx("img",{src:Ti,alt:"Candle"})]})]})]}),d.jsxs(kh,{$reverse:!0,ref:V.ref,style:{position:"relative",overflow:"visible",marginTop:"-100px"},children:[d.jsx("img",{src:Om,alt:"Plane Background",style:{position:"absolute",left:0,top:0,width:"65%",height:"100%",objectFit:"cover",zIndex:0,opacity:.48,pointerEvents:"none"}}),P.map(ne=>d.jsx(Rh,{$x:ne.x,$delay:ne.delay,$size:ne.size},`v${ne.key}`)),d.jsxs(Mh,{$visible:V.visible,children:[d.jsxs("div",{onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),style:{position:"relative",display:"block",margin:"0 0 12px auto",width:260,transform:"translateX(-35%) translateY(-5%)",cursor:"pointer"},children:[d.jsx("img",{src:"/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber.png",alt:"Darth Vader lightsaber",style:{width:"100%",display:"block",transition:"opacity .35s ease",opacity:b?0:1}}),d.jsx("img",{src:"/assets/images/brand/Lending Harry Potter vs Darth_Vader/Darth_Vader's_lightsaber_light.png",alt:"Darth Vader lightsaber (light)",style:{position:"absolute",top:0,left:0,width:"100%",transition:"opacity .35s ease",opacity:b?1:0}})]}),d.jsx(Dh,{style:{marginLeft:32,marginBottom:20,display:"block"},children:E.vaderTitle}),d.jsxs(Hh,{style:{marginLeft:32},children:[E.vaderDesc," ",E.vaderWeapon??""]})]}),d.jsxs(Ch,{$visible:V.visible,$highlight:"#ff2020",children:[d.jsx("img",{src:Jw,alt:"Darth Vader"}),o==="vader"&&d.jsxs("div",{className:"candles",children:[d.jsx("img",{src:Ti,alt:"Candle"}),d.jsx("img",{src:Ti,alt:"Candle"}),d.jsx("img",{src:Ti,alt:"Candle"})]})]})]}),d.jsxs(j5,{children:[d.jsx(_5,{}),d.jsx(H5,{children:d.jsx("img",{src:e5,alt:""})}),d.jsx(R5,{children:d.jsx("img",{src:Iw,alt:""})}),d.jsxs(O5,{children:[d.jsxs(k5,{children:[d.jsx(C5,{children:E.footerTitle}),d.jsx(M5,{children:E.footerSubtitle}),d.jsxs(D5,{children:[d.jsx(fu,{href:"#","aria-label":"Instagram",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5"})]})}),d.jsx(fu,{href:"#","aria-label":"LinkedIn",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),d.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),d.jsx(fu,{href:"#","aria-label":"X",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),d.jsxs(du,{children:[d.jsx(pu,{children:E.features}),d.jsx(vn,{href:"#",children:E.coreFeatures}),d.jsx(vn,{href:"#",children:E.proExperience}),d.jsx(vn,{href:"#",children:E.integrations})]}),d.jsxs(du,{children:[d.jsx(pu,{children:E.learnMore}),d.jsx(vn,{href:"#",children:E.blog}),d.jsx(vn,{href:"#",children:E.caseStudies}),d.jsx(vn,{href:"#",children:E.customerStories}),d.jsx(vn,{href:"#",children:E.bestPractices})]}),d.jsxs(du,{children:[d.jsx(pu,{children:E.support}),d.jsx(vn,{href:"#",children:E.contact}),d.jsx(vn,{href:"#",children:E.supportLink}),d.jsx(vn,{href:"#",children:E.legal})]})]}),d.jsxs(L5,{children:[d.jsx("span",{children:"© 2026 Game World. All rights reserved."}),d.jsx("span",{children:"Privacy Policy · Terms of Service"})]})]})]})},U5=y.div.attrs(({$width:n})=>({style:{width:`${n}%`}}))`
  position: fixed;
  top: 0;
  left: 0;
  height: ${k.sizing.progressBarHeight};
  background: linear-gradient(90deg, #6366f1, #ec4899);
  z-index: ${k.zIndex.progress};
  transition: width 0.1s ease;
`,B5=()=>{const[n,o]=Ce.useState(0);return Ce.useEffect(()=>{const f=()=>{const s=document.body.scrollTop||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=m>0?s/m*100:0;o(b)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),d.jsx(U5,{$width:n})},G5=Xt`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,q5=y.div`
  min-height: ${k.layout.fullViewportHeight};
  position: relative;
  color: ${({theme:n})=>n.colors.slate[900]};
  background: ${({theme:n})=>n.colors.white};
`,Y5=y.div`
  position: fixed;
  inset: 0;
  z-index: ${k.zIndex.background};
  pointer-events: none;
  overflow: hidden;
`,gu=y.div`
  position: absolute;
  border-radius: ${({theme:n})=>n.radii.full};
  filter: blur(${k.effects.blurBlob});
  opacity: ${k.effects.blobOpacity};
  animation: ${G5} 3s ease-in-out infinite;

  ${({$position:n})=>n==="top-left"&&`
      top: -10%;
      left: -10%;
      width: 50%;
      height: 50%;
      background: ${k.effects.blobBlue};
    `}

  ${({$position:n})=>n==="top-right"&&`
      top: 20%;
      right: -10%;
      width: 40%;
      height: 40%;
      background: ${k.effects.blobPurple};
      animation: none;
    `}

  ${({$position:n})=>n==="bottom-left"&&`
      bottom: -10%;
      left: 20%;
      width: 50%;
      height: 50%;
      background: ${k.effects.blobPink};
      animation: none;
    `}
`,V5=y.div`
  position: relative;
  z-index: ${k.zIndex.foreground};
`,X5=y.div`
  position: fixed;
  right: ${({theme:n})=>n.spacing[6]};
  top: 50%;
  transform: translateY(-50%);
  z-index: ${k.zIndex.nav};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[1]};
  padding: ${({theme:n})=>n.spacing[2]};
  border-radius: ${({theme:n})=>n.radii.full};
  background: ${k.effects.glassWhite80};
  backdrop-filter: blur(${k.effects.blurGlass});
  box-shadow: ${({theme:n})=>n.shadows.md};
  border: ${k.sizing.hairline} solid ${({theme:n})=>n.colors.slate[100]};
`,Nh=y.button`
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
`,Q5=()=>{const{lang:n,setLang:o,t:f}=Et();return d.jsxs(X5,{children:[d.jsx(Nh,{$active:n==="en",onClick:()=>o("en"),title:f.languageSwitch.enTitle,children:f.languageSwitch.enShort}),d.jsx(Nh,{$active:n==="uk",onClick:()=>o("uk"),title:f.languageSwitch.ukTitle,children:f.languageSwitch.ukShort})]})};function Z5(){const[n,o]=Ce.useState(Re.PORTFOLIO),[f,s]=Ce.useState(nn.HERO),m="app-icons",b="app-store-screenshots",M="namelaka",q="mindzy",E="marketing-video",O="elemental-quest",V="combat-planes",P="fatty-fish",ne="landing-hp-vs-vader";Ce.useEffect(()=>{const X=()=>{if(!window.location.hash)return;const he=window.location.hash.replace("#","");if(he===m){o(Re.APP_ICONS);return}if(he===b){o(Re.APP_STORE_SCREENSHOTS);return}if(he===M){o(Re.NAMELAKA);return}if(he===q){o(Re.MINDZY);return}if(he===E){o(Re.MARKETING_VIDEO);return}if(he===O){o(Re.ELEMENTAL_QUEST);return}if(he===V){o(Re.COMBAT_PLANES);return}if(he===P){o(Re.FATTY_FISH);return}if(he===ne){o(Re.LANDING_HP_VS_VADER);return}const ce=he,pe=document.getElementById(ce);pe&&(o(Re.PORTFOLIO),s(ce),pe.scrollIntoView({behavior:"smooth",block:"start"}))};return X(),window.addEventListener("hashchange",X),()=>window.removeEventListener("hashchange",X)},[]),Ce.useEffect(()=>{if(n!==Re.PORTFOLIO)return;const X=document.getElementById(f);X&&X.scrollIntoView({behavior:"smooth",block:"start"})},[n,f]),Ce.useEffect(()=>{(n===Re.APP_ICONS||n===Re.APP_STORE_SCREENSHOTS||n===Re.NAMELAKA||n===Re.MINDZY||n===Re.MARKETING_VIDEO||n===Re.ELEMENTAL_QUEST||n===Re.COMBAT_PLANES||n===Re.FATTY_FISH||n===Re.LANDING_HP_VS_VADER)&&window.scrollTo({top:0,behavior:"smooth"})},[n]);const ue=X=>{o(Re.PORTFOLIO),s(X),window.history.pushState(null,"",`#${X}`);const he=document.getElementById(X);he&&he.scrollIntoView({behavior:"smooth",block:"start"})},le=()=>{o(Re.PORTFOLIO),s(nn.WORK),window.history.pushState(null,"",`#${nn.WORK}`);const X=document.getElementById(nn.WORK);X&&X.scrollIntoView({behavior:"smooth",block:"start"})};return d.jsxs(q5,{children:[d.jsxs(Y5,{children:[d.jsx(gu,{$position:"top-left"}),d.jsx(gu,{$position:"top-right"}),d.jsx(gu,{$position:"bottom-left"})]}),d.jsxs(V5,{children:[d.jsx(B5,{}),n===Re.PORTFOLIO&&d.jsxs(d.Fragment,{children:[d.jsx(Q5,{}),d.jsx(m1,{onNavigate:ue})]}),n===Re.PORTFOLIO?d.jsxs(d.Fragment,{children:[d.jsxs("main",{children:[d.jsx(C1,{}),d.jsx(_S,{}),d.jsx(tx,{})]}),d.jsx(cx,{})]}):n===Re.APP_ICONS?d.jsx(m2,{onBack:le}):n===Re.APP_STORE_SCREENSHOTS?d.jsx(D2,{onBack:le}):n===Re.NAMELAKA?d.jsx(K2,{onBack:le}):n===Re.MINDZY?d.jsx(b$,{onBack:le}):n===Re.MARKETING_VIDEO?d.jsx(q$,{onBack:le}):n===Re.ELEMENTAL_QUEST?d.jsx(ow,{onBack:le}):n===Re.COMBAT_PLANES?d.jsx(Ew,{onBack:le}):n===Re.FATTY_FISH?d.jsx(Pw,{onBack:le}):n===Re.LANDING_HP_VS_VADER?d.jsx(N5,{onBack:le}):null]})]})}function K5(){return d.jsx(Fb,{children:d.jsx(Z5,{})})}const W5=ub`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: ${k.layout.fullViewportHeight};
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
    width: ${k.sizing.scrollbarWidth};
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
`,P5={white:"#ffffff",black:"#000000",brand:{purple:"#6366f1",blue:"#3b82f6",pink:"#ec4899"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},J5={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"40px",9:"48px",10:"56px",11:"64px",12:"72px",13:"80px",14:"96px",15:"112px",16:"128px"},I5={none:"0px",sm:"8px",md:"12px",lg:"16px",xl:"20px","2xl":"24px","3xl":"32px","4xl":"48px",full:"9999px"},F5={sm:"0 1px 2px rgba(15, 23, 42, 0.08)",md:"0 6px 20px rgba(15, 23, 42, 0.12)",lg:"0 16px 40px rgba(15, 23, 42, 0.14)",xl:"0 24px 60px rgba(15, 23, 42, 0.18)",card:"0 24px 60px rgba(15, 23, 42, 0.08)"},ez={fonts:{sans:"'Inter', sans-serif",serif:"'Inter', sans-serif"},weights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{xs:"0.64rem",sm:"0.8rem",md:"1rem",lg:"1.25rem",xl:"1.5625rem","2xl":"1.9531rem","3xl":"2.4413rem","4xl":"3.0519rem","5xl":"3.8147rem","6xl":"4.7684rem","7xl":"5.9605rem"},lineHeights:{tight:1.1,snug:1.25,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0em",wide:"0.2em",wider:"0.3em"}},tz={container:"1280px"},nz={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},az={colors:P5,spacing:J5,radii:I5,shadows:F5,typography:ez,layout:tz,breakpoints:nz},km=document.getElementById("root");if(!km)throw new Error("Could not find root element to mount to");const iz=sv.createRoot(km);iz.render(d.jsx(pt.StrictMode,{children:d.jsxs(ob,{theme:az,children:[d.jsx(W5,{}),d.jsx(K5,{})]})}));
