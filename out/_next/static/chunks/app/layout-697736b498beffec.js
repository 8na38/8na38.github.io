(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6672:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,2093,23)),Promise.resolve().then(n.t.bind(n,7735,23)),Promise.resolve().then(n.bind(n,4840)),Promise.resolve().then(n.t.bind(n,9998,23))},8173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(306),o=n(5155),u=r._(n(2115)),i=n(180),a=n(1394),l=n(4116),s=n(4445),f=n(5353),c=n(2170),d=n(9544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}n(2363);let m=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:m,children:y,prefetch:b=null,passHref:g,replace:v,shallow:w,scroll:_,onClick:E,onMouseEnter:P,onTouchStart:M,legacyBehavior:j=!1,...O}=e;n=y,j&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let x=u.default.useContext(a.AppRouterContext),C=!1!==b,k=null===b?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:S,as:I}=u.default.useMemo(()=>{let e=h(i);return{href:e,as:m?h(m):e}},[i,m]),N=u.default.useRef(S),T=u.default.useRef(I);j&&(r=u.default.Children.only(n));let R=j?r&&"object"==typeof r&&r.ref:t,[A,L,F]=(0,l.useIntersection)({rootMargin:"200px"}),U=u.default.useCallback(e=>{(T.current!==I||N.current!==S)&&(F(),T.current=I,N.current=S),A(e)},[I,S,F,A]),z=(0,f.useMergedRef)(U,R);u.default.useEffect(()=>{x&&L&&C&&p(x,S,{kind:k})},[I,S,L,C,x,k]);let D={ref:z,onClick(e){j||"function"!=typeof E||E(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,n,r,o,i,a){let{nodeName:l}=e.currentTarget;"A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,x,S,I,v,w,_)},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),x&&C&&p(x,S,{kind:k})},onTouchStart:function(e){j||"function"!=typeof M||M(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),x&&C&&p(x,S,{kind:k})}};return(0,c.isAbsoluteUrl)(I)?D.href=I:j&&!g&&("a"!==r.type||"href"in r.props)||(D.href=(0,d.addBasePath)(I)),j?u.default.cloneElement(r,D):(0,o.jsx)("a",{...O,...D,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(2115),o=n(8571),u="function"==typeof IntersectionObserver,i=new Map,a=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!u,[f,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),i.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(2115);function o(e,t){let n=(0,r.useRef)(()=>{}),o=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),o.current()):(n.current=u(e,r),o.current=u(t,r))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return a},urlObjectKeys:function(){return i}});let r=n(9955)._(n(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",i=e.pathname||"",a=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let f=e.search||l&&"?"+l||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),""+u+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+a}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return u(e)}},4156:(e,t)=>{"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return b},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return a},isAbsoluteUrl:function(){return u},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function a(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},4840:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var r=n(5155),o=n(2115),u=n(337),i=n(7274);function a(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=e.current;if(!t)return;let n=window.innerWidth,r=window.innerHeight,o=new u.Z58,a=new u.ubm(45,n/r,.1,1e3);a.position.set(0,0,1e3);let l=new i.JeP({canvas:t,alpha:!0,antialias:!0});l.setSize(n,r);let s=new u.$p8(0xffffff,1);o.add(s);let f=new u.nEu(300,0),c=function(){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=256,e.height=256;let n=t.createLinearGradient(0,0,e.width,e.height);return n.addColorStop(0,"#db3636"),n.addColorStop(.5,"#faca47"),n.addColorStop(1,"#db3636"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),new u.GOR(e)}(),d=new u.V9B({map:c}),p=new u.eaF(f,d);o.add(p);let h=new u.TDQ(f),m=new u.mrM({color:0xffffff,linewidth:1,opacity:.6,transparent:!0}),y=new u.DXC(h,m);o.add(y);let b=0,g=0,v=window.innerWidth/8,w=r/8;function _(e){b=Math.max(-v,Math.min(e.clientX-v,v)),g=Math.max(-w,Math.min(e.clientY-w,w))}function E(){b=0,g=0}function P(){let e=window.innerWidth,t=window.innerHeight;l.setSize(e,t),v=window.innerWidth/2,w=t/2,a.aspect=e/t,a.updateProjectionMatrix()}return document.addEventListener("mousemove",_),document.addEventListener("mouseleave",E),function e(){requestAnimationFrame(e),a.position.x+=(b-a.position.x)*.02,a.position.y+=(-g-a.position.y)*.02,a.lookAt(o.position),p.rotation.y+=.002,p.rotation.x+=.002,y.rotation.y+=.002,y.rotation.x+=.002,l.render(o,a)}(),window.addEventListener("resize",P),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseleave",E),window.removeEventListener("resize",P)}},[]),(0,r.jsx)("canvas",{ref:e})}},9998:()=>{},2093:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7735:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[595,367,831,441,517,358],()=>t(6672)),_N_E=e.O()}]);