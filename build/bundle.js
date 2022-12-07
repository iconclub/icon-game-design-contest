var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n,o){if(t){const r=d(t,e,n,o);return t[0](r)}}function d(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function f(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function m(t,e,n,o,r,s){if(r){const i=d(e,n,o,s);t.p(i,r)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function g(t,e,n){return t.set(n),e}const h="undefined"!=typeof window;let $=h?()=>window.performance.now():()=>Date.now(),v=h?t=>requestAnimationFrame(t):t;const y=new Set;function b(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&v(b)}function _(t){let e;return 0===y.size&&v(b),{promise:new Promise((n=>{y.add(e={c:t,f:n})})),abort(){y.delete(e)}}}function w(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t){const e=O("style");return function(t,e){w(t.head||t,e)}(x(t),e),e.sheet}function C(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function j(){return E("")}function V(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function N(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const P=new Map;let z,U=0;function A(t,e,n,o,r,s,i,a=0){const c=16.666/o;let l="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);l+=100*t+`%{${i(o,1-o)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,f=x(t),{stylesheet:m,rules:p}=P.get(f)||function(t,e){const n={stylesheet:k(e),rules:{}};return P.set(t,n),n}(f,t);p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,U+=1,d}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),U-=r,U||v((()=>{U||(P.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),P.clear())})))}function q(t){z=t}function B(){if(!z)throw new Error("Function called outside component initialization");return z}function F(t){B().$$.on_mount.push(t)}const D=[],G=[],H=[],W=[],Y=Promise.resolve();let J=!1;function K(t){H.push(t)}const Q=new Set;let X,Z=0;function tt(){const t=z;do{for(;Z<D.length;){const t=D[Z];Z++,q(t),et(t.$$)}for(q(null),D.length=0,Z=0;G.length;)G.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];Q.has(e)||(Q.add(e),e())}H.length=0}while(D.length);for(;W.length;)W.pop()();J=!1,Q.clear(),q(t)}function et(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function nt(){return X||(X=Promise.resolve(),X.then((()=>{X=null}))),X}function ot(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const rt=new Set;let st;function it(){st={r:0,c:[],p:st}}function at(){st.r||r(st.c),st=st.p}function ct(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function lt(t,e,n,o){if(t&&t.o){if(rt.has(t))return;rt.add(t),st.c.push((()=>{rt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ut={duration:0};function dt(n,o,i,a){let c=o(n,i),l=a?0:1,u=null,d=null,f=null;function m(){f&&R(n,f)}function p(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(o){const{delay:s=0,duration:i=300,easing:a=e,tick:g=t,css:h}=c||ut,v={start:$()+s,b:o};o||(v.group=st,st.r+=1),u||d?d=v:(h&&(m(),f=A(n,l,o,i,s,a,h)),o&&g(0,1),u=p(v,i),K((()=>ot(n,o,"start"))),_((t=>{if(d&&t>d.start&&(u=p(d,i),d=null,ot(n,u.b,"start"),h&&(m(),f=A(n,l,u.b,u.duration,0,a,c.css))),u)if(t>=u.end)g(l=u.b,1-l),ot(n,u.b,"end"),d||(u.b?m():--u.group.r||r(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*a(e/u.duration),g(l,1-l)}return!(!u&&!d)})))}return{run(t){s(c)?nt().then((()=>{c=c(),g(t)})):g(t)},end(){m(),u=d=null}}}const ft="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){lt(t,1,1,(()=>{e.delete(t.key)}))}function pt(t,e,n,o,r,s,i,a,c,l,u,d){let f=t.length,m=s.length,p=f;const g={};for(;p--;)g[t[p].key]=p;const h=[],$=new Map,v=new Map;for(p=m;p--;){const t=d(r,s,p),a=n(t);let c=i.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),$.set(a,h[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const y=new Set,b=new Set;function _(t){ct(t,1),t.m(a,u),i.set(t.key,t),u=t.first,m--}for(;f&&m;){const e=h[m-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,m--):$.has(r)?!i.has(o)||y.has(o)?_(e):b.has(r)?f--:v.get(o)>v.get(r)?(b.add(o),_(e)):(y.add(r),f--):(c(n,i),f--)}for(;f--;){const e=t[f];$.has(e.key)||c(e,i)}for(;m;)_(h[m-1]);return h}function gt(t){t&&t.c()}function ht(t,e,o,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),i||K((()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(K)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(D.push(t),J||(J=!0,Y.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,s,i,a,c,l,u=[-1]){const d=z;q(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&vt(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(I)}else f.fragment&&f.fragment.c();n.intro&&ct(e.$$.fragment),ht(e,n.target,n.anchor,n.customElement),tt()}q(d)}class bt{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class _t{constructor(){this.baseUrl="https://icon-game-design-contest-api.fly.dev",this.headers={"Content-Type":"application/json"}}static getInstance(){return _t.instance||(_t.instance=new _t),_t.instance}async get(t,e={}){const n=this.processUrl(this.baseUrl),o=this.processUrl(t),r=new URLSearchParams(e);return(await fetch(`${n}/${o}?${r}`,{method:"GET",credentials:"include"})).json()}async post(t,e={},n={},o=this.headers){const r=this.processUrl(this.baseUrl),s=this.processUrl(t),i=new URLSearchParams(n);return(await fetch(`${r}/${s}?${i}`,{method:"POST",headers:o,credentials:"include",body:JSON.stringify(e)})).json()}processUrl(t){let e=t;return t.startsWith("/")&&(e=t.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1)),e}}const wt=_t.getInstance();const xt=new class{async signInWithGoogle(t){const e=await wt.post("/auth/google/signin",t);if(200===e.statusCode)return e.data;throw new Error("Failed to sign in")}async signOut(){const t=await wt.post("/auth/signout");if(200===t.statusCode)return t.data;throw new Error("Failed to sign out")}async getProfile(){const t=await wt.post("/auth/profile");if(200===t.statusCode)return t.data;if(401===t.statusCode)return null;if(404===t.statusCode)return null;throw new Error("Failed to get profile")}};const kt=new class{async findAll(){const t=await wt.get("/api/games");if(200===t.statusCode)return t.data;throw new Error("Failed to find all games")}},Ct=[];function It(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!Ct.length;for(const t of r)t[1](),Ct.push(t,e);if(t){for(let t=0;t<Ct.length;t+=2)Ct[t][0](Ct[t+1]);Ct.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}const Ot=It({hasSignedIn:!1,isBanned:!1}),Et=It({list:[],playing:{name:"",source:"",description:"",members:[""]}}),St=It({_id:"",name:"",email:"",avatar:"",role:"",hasVoted:!1,gamesVoted:[]}),jt=It([]),Vt=t=>{jt.update((e=>[...e,t]))};function Mt(e){let n,o=`${e[0]}${e[1]}`;return{c(){n=O("div"),M(n,"class","circle svelte-1nr5qg6"),L(n,"--size",o,!1),L(n,"--colorInner",e[4],!1),L(n,"--colorCenter",e[3],!1),L(n,"--colorOuter",e[2],!1),L(n,"--durationInner",e[6],!1),L(n,"--durationCenter",e[7],!1),L(n,"--durationOuter",e[5],!1)},m(t,e){C(t,n,e)},p(t,[e]){3&e&&o!==(o=`${t[0]}${t[1]}`)&&L(n,"--size",o,!1),16&e&&L(n,"--colorInner",t[4],!1),8&e&&L(n,"--colorCenter",t[3],!1),4&e&&L(n,"--colorOuter",t[2],!1),64&e&&L(n,"--durationInner",t[6],!1),128&e&&L(n,"--durationCenter",t[7],!1),32&e&&L(n,"--durationOuter",t[5],!1)},i:t,o:t,d(t){t&&I(n)}}}function Tt(t,e,n){let{size:o="60"}=e,{unit:r="px"}=e,{colorOuter:s="#FF3E00"}=e,{colorCenter:i="#40B3FF"}=e,{colorInner:a="#676778"}=e,{durationMultiplier:c=1}=e,{durationOuter:l=2*c+"s"}=e,{durationInner:u=1.5*c+"s"}=e,{durationCenter:d=3*c+"s"}=e;return t.$$set=t=>{"size"in t&&n(0,o=t.size),"unit"in t&&n(1,r=t.unit),"colorOuter"in t&&n(2,s=t.colorOuter),"colorCenter"in t&&n(3,i=t.colorCenter),"colorInner"in t&&n(4,a=t.colorInner),"durationMultiplier"in t&&n(8,c=t.durationMultiplier),"durationOuter"in t&&n(5,l=t.durationOuter),"durationInner"in t&&n(6,u=t.durationInner),"durationCenter"in t&&n(7,d=t.durationCenter)},[o,r,s,i,a,l,u,d,c]}class Lt extends bt{constructor(t){super(),yt(this,t,Tt,Mt,i,{size:0,unit:1,colorOuter:2,colorCenter:3,colorInner:4,durationMultiplier:8,durationOuter:5,durationInner:6,durationCenter:7})}}function Nt(e){let n,o,r,s,i;return{c(){n=O("div"),o=O("div"),o.innerHTML='<span class="material-icons svelte-1es7mgy">running_with_errors</span>',r=S(),s=O("h1"),i=E(e[0]),M(o,"class","error__icon svelte-1es7mgy"),M(s,"class","error_message svelte-1es7mgy"),M(n,"class","error svelte-1es7mgy")},m(t,e){C(t,n,e),w(n,o),w(n,r),w(n,s),w(s,i)},p(t,[e]){1&e&&T(i,t[0])},i:t,o:t,d(t){t&&I(n)}}}function Pt(t,e,n){let{message:o="Oops! Something went wrong"}=e;return t.$$set=t=>{"message"in t&&n(0,o=t.message)},[o]}class zt extends bt{constructor(t){super(),yt(this,t,Pt,Nt,i,{message:0})}}function Ut(t){const e=t-1;return e*e*e+1}function At(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Rt(t,{delay:e=0,duration:n=400,easing:o=Ut,x:r=0,y:s=0,opacity:i=0}={}){const a=getComputedStyle(t),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-u*e}`}}function qt(t,{delay:e=0,duration:n=400,easing:o=Ut,start:r=0,opacity:s=0}={}){const i=getComputedStyle(t),a=+i.opacity,c="none"===i.transform?"":i.transform,l=1-r,u=a*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} scale(${1-l*e});\n\t\t\topacity: ${a-u*e}\n\t\t`}}const Bt=t=>({}),Ft=t=>({}),Dt=t=>({}),Gt=t=>({});function Ht(e){let n,o,s,i,a,c,l,d,g,h,$,v,y;const b=e[5].title,_=u(b,e,e[4],Gt),x=_||function(e){let n;return{c(){n=O("h5"),n.textContent="Modal title",M(n,"class","modal__title svelte-1l9vpjr")},m(t,e){C(t,n,e)},p:t,d(t){t&&I(n)}}}(),k=e[5].default,E=u(k,e,e[4],null),j=e[5].footer,T=u(j,e,e[4],Ft),L=T||function(e){let n,o,r;return{c(){n=O("button"),n.textContent="Close",M(n,"type","button"),M(n,"class","btn btn--secondary")},m(t,s){C(t,n,s),o||(r=V(n,"click",e[0]),o=!0)},p:t,d(t){t&&I(n),o=!1,r()}}}(e);return{c(){n=O("div"),o=O("div"),s=O("div"),x&&x.c(),i=S(),a=O("button"),a.innerHTML="<span>×</span>",c=S(),l=O("div"),E&&E.c(),d=S(),g=O("div"),L&&L.c(),M(a,"type","button"),M(a,"class","modal__close svelte-1l9vpjr"),M(s,"class","modal__header svelte-1l9vpjr"),M(l,"class","modal__body svelte-1l9vpjr"),M(g,"class","modal__footer svelte-1l9vpjr"),M(o,"class","modal__content svelte-1l9vpjr"),M(n,"class","modal svelte-1l9vpjr")},m(t,r){C(t,n,r),w(n,o),w(o,s),x&&x.m(s,null),w(s,i),w(s,a),w(o,c),w(o,l),E&&E.m(l,null),w(o,d),w(o,g),L&&L.m(g,null),$=!0,v||(y=[V(a,"click",e[0]),V(n,"click",e[0])],v=!0)},p(t,e){_&&_.p&&(!$||16&e)&&m(_,b,t,t[4],$?f(b,t[4],e,Dt):p(t[4]),Gt),E&&E.p&&(!$||16&e)&&m(E,k,t,t[4],$?f(k,t[4],e,null):p(t[4]),null),T&&T.p&&(!$||16&e)&&m(T,j,t,t[4],$?f(j,t[4],e,Bt):p(t[4]),Ft)},i(t){$||(ct(x,t),ct(E,t),ct(L,t),K((()=>{h||(h=dt(n,At,{duration:200},!0)),h.run(1)})),$=!0)},o(t){lt(x,t),lt(E,t),lt(L,t),h||(h=dt(n,At,{duration:200},!1)),h.run(0),$=!1},d(t){t&&I(n),x&&x.d(t),E&&E.d(t),L&&L.d(t),t&&h&&h.end(),v=!1,r(y)}}}function Wt(t){let e,n,o,r,s=t[1]&&Ht(t);return{c(){s&&s.c(),e=j()},m(i,a){s&&s.m(i,a),C(i,e,a),n=!0,o||(r=V(window,"keydown",t[2]),o=!0)},p(t,[n]){t[1]?s?(s.p(t,n),2&n&&ct(s,1)):(s=Ht(t),s.c(),ct(s,1),s.m(e.parentNode,e)):s&&(it(),lt(s,1,1,(()=>{s=null})),at())},i(t){n||(ct(s),n=!0)},o(t){lt(s),n=!1},d(t){s&&s.d(t),t&&I(e),o=!1,r()}}}function Yt(t,e,n){let{$$slots:o={},$$scope:r}=e,s=!1;function i(){n(1,s=!1)}return t.$$set=t=>{"$$scope"in t&&n(4,r=t.$$scope)},[i,s,function(t){"Escape"===t.key&&i()},function(){n(1,s=!0)},r,o]}class Jt extends bt{constructor(t){super(),yt(this,t,Yt,Wt,i,{open:3,close:0})}get open(){return this.$$.ctx[3]}get close(){return this.$$.ctx[0]}}function Kt(e){let n,o,r,s,i;return{c(){n=O("p"),n.textContent="Your experience might be not good when using mobile.",o=S(),r=O("br"),s=S(),i=O("p"),i.textContent="Please use a desktop or laptop to view this website.",M(n,"class","modal__message"),M(i,"class","modal__message")},m(t,e){C(t,n,e),C(t,o,e),C(t,r,e),C(t,s,e),C(t,i,e)},p:t,d(t){t&&I(n),t&&I(o),t&&I(r),t&&I(s),t&&I(i)}}}function Qt(e){let n;return{c(){n=O("h3"),n.textContent="User Experiences",M(n,"class","modal__title svelte-qt0sjl")},m(t,e){C(t,n,e)},p:t,d(t){t&&I(n)}}}function Xt(t){let e,n;return e=new Jt({props:{$$slots:{title:[Qt],default:[Kt]},$$scope:{ctx:t}}}),t[1](e),{c(){gt(e.$$.fragment)},m(t,o){ht(e,t,o),n=!0},p(t,[n]){const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(n){t[1](null),$t(e,n)}}}function Zt(t,e,n){let o=null;return F((()=>{window.matchMedia("screen and (max-width: 767px)").matches&&o.open()})),[o,function(t){G[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class te extends bt{constructor(t){super(),yt(this,t,Zt,Xt,i,{})}}const{document:ee}=ft;function ne(e){let n,o,r,s;return{c(){n=O("script"),r=S(),s=O("div"),c(n.src,o="https://accounts.google.com/gsi/client")||M(n,"src","https://accounts.google.com/gsi/client"),n.async=!0,n.defer=!0,M(s,"class","g_id_signin"),M(s,"data-type","standard"),M(s,"data-shape","rectangular"),M(s,"data-theme","outline"),M(s,"data-text","signin_with"),M(s,"data-size","large"),M(s,"data-locale","en"),M(s,"data-logo_alignment","left")},m(t,e){w(ee.head,n),C(t,r,e),C(t,s,e)},p:t,i:t,o:t,d(t){I(n),t&&I(r),t&&I(s)}}}function oe(t){return F((()=>{document.querySelector("#g_id_onload").setAttribute("data-auto_prompt","false")})),[]}class re extends bt{constructor(t){super(),yt(this,t,oe,ne,i,{})}}function se(e){let n,o,r,s,i;return s=new re({}),{c(){n=O("p"),n.textContent="Please sign in to continue.",o=S(),r=O("div"),gt(s.$$.fragment),M(n,"class","modal__message"),M(r,"class","modal__google svelte-npkyph")},m(t,e){C(t,n,e),C(t,o,e),C(t,r,e),ht(s,r,null),i=!0},p:t,i(t){i||(ct(s.$$.fragment,t),i=!0)},o(t){lt(s.$$.fragment,t),i=!1},d(t){t&&I(n),t&&I(o),t&&I(r),$t(s)}}}function ie(e){let n;return{c(){n=O("h3"),n.textContent="Sign In",M(n,"class","modal__title svelte-npkyph")},m(t,e){C(t,n,e)},p:t,d(t){t&&I(n)}}}function ae(t){let e,n;return e=new Jt({props:{$$slots:{title:[ie],default:[se]},$$scope:{ctx:t}}}),t[0](e),{c(){gt(e.$$.fragment)},m(t,o){ht(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(n){t[0](null),$t(e,n)}}}let ce=null;function le(t,e,n){return[function(t){G[t?"unshift":"push"]((()=>{ce=t}))}]}class ue extends bt{constructor(t){super(),yt(this,t,le,ae,i,{})}}function de(e){let n,o,r;return{c(){n=O("div"),n.innerHTML='<span class="material-icons">logout</span>',M(n,"class","google__sign-out-button svelte-qp9s7")},m(t,s){C(t,n,s),o||(r=V(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&I(n),o=!1,r()}}}function fe(t,e,n){let o,r;return l(t,St,(t=>n(1,o=t))),l(t,Ot,(t=>n(2,r=t))),[async function(){await xt.signOut(),g(Ot,r={hasSignedIn:!1,isBanned:!1},r),g(St,o={_id:"",name:"",email:"",avatar:"",role:"",hasVoted:!1,gamesVoted:[]},o)}]}class me extends bt{constructor(t){super(),yt(this,t,fe,de,i,{})}}function pe(t){let e,n;return e=new me({}),{c(){gt(e.$$.fragment)},m(t,o){ht(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function ge(t){let e,n,o,r,s,i,a,l,u,d,f,m,p,g,h,$,v=t[2].hasSignedIn&&pe();return{c(){e=O("nav"),n=O("p"),n.textContent="Game Design Contest 2022",o=S(),r=O("img"),i=S(),a=O("div"),l=O("div"),u=O("img"),f=S(),m=O("p"),p=E(t[1]),g=S(),h=O("div"),v&&v.c(),M(n,"class","navbar__brand svelte-1f8eldi"),c(r.src,s="images/logo_4.png")||M(r,"src","images/logo_4.png"),M(r,"alt","Logo"),M(r,"class","navbar__logo svelte-1f8eldi"),c(u.src,d=t[0])||M(u,"src",d),M(u,"alt","Avatar"),M(u,"class","navbar__avatar svelte-1f8eldi"),M(m,"class","navbar__user svelte-1f8eldi"),M(l,"class","navbar__item svelte-1f8eldi"),M(h,"class","navbar__item svelte-1f8eldi"),M(a,"class","navbar__right svelte-1f8eldi"),M(e,"class","navbar svelte-1f8eldi")},m(t,s){C(t,e,s),w(e,n),w(e,o),w(e,r),w(e,i),w(e,a),w(a,l),w(l,u),w(l,f),w(l,m),w(m,p),w(a,g),w(a,h),v&&v.m(h,null),$=!0},p(t,[e]){(!$||1&e&&!c(u.src,d=t[0]))&&M(u,"src",d),(!$||2&e)&&T(p,t[1]),t[2].hasSignedIn?v?4&e&&ct(v,1):(v=pe(),v.c(),ct(v,1),v.m(h,null)):v&&(it(),lt(v,1,1,(()=>{v=null})),at())},i(t){$||(ct(v),$=!0)},o(t){lt(v),$=!1},d(t){t&&I(e),v&&v.d()}}}function he(t,e,n){let o,r,s,i;return l(t,St,(t=>n(3,s=t))),l(t,Ot,(t=>n(2,i=t))),t.$$.update=()=>{8&t.$$.dirty&&n(1,o=s.name||"Guest"),8&t.$$.dirty&&n(0,r=s.avatar||"images/default_avatar_retro.jpg")},[r,o,i,s]}class $e extends bt{constructor(t){super(),yt(this,t,he,ge,i,{})}}const ve=It([]),ye=t=>{const e=Date.now(),n={id:e,type:"info",timeout:4e3},o=Object.assign(Object.assign({},n),t);ve.update((t=>[...t,o])),setTimeout((()=>be(e)),o.timeout)},be=t=>{ve.update((e=>e.filter((e=>e.id!==t))))};function _e(t){let e;return{c(){e=O("span"),e.textContent="info",M(e,"class","material-icons")},m(t,n){C(t,e,n)},d(t){t&&I(e)}}}function we(t){let e;return{c(){e=O("span"),e.textContent="warning",M(e,"class","material-icons")},m(t,n){C(t,e,n)},d(t){t&&I(e)}}}function xe(t){let e;return{c(){e=O("span"),e.textContent="check_circle",M(e,"class","material-icons")},m(t,n){C(t,e,n)},d(t){t&&I(e)}}}function ke(n){let o,i,a,c,l,d,g,h,v,y,b;function x(t,e){return"success"===t[0]?xe:"error"===t[0]?we:_e}let k=x(n),E=k(n);const j=n[3].default,T=u(j,n,n[2],null);return{c(){o=O("div"),E.c(),i=S(),a=O("div"),T&&T.c(),c=S(),l=O("button"),l.innerHTML="<span>×</span>",M(a,"class","toast__content svelte-17a9mdj"),M(l,"type","button"),M(l,"class","toast__close svelte-17a9mdj"),M(o,"class",d="toast toast--"+n[0]+" svelte-17a9mdj"),M(o,"role","alert")},m(t,e){C(t,o,e),E.m(o,null),w(o,i),w(o,a),T&&T.m(a,null),w(o,c),w(o,l),v=!0,y||(b=V(l,"click",n[1]),y=!0)},p(t,[e]){k!==(k=x(t))&&(E.d(1),E=k(t),E&&(E.c(),E.m(o,i))),T&&T.p&&(!v||4&e)&&m(T,j,t,t[2],v?f(j,t[2],e,null):p(t[2]),null),(!v||1&e&&d!==(d="toast toast--"+t[0]+" svelte-17a9mdj"))&&M(o,"class",d)},i(n){v||(ct(T,n),K((()=>{h&&h.end(1),g=function(n,o,r){let i,a,c=o(n,r),l=!1,u=0;function d(){i&&R(n,i)}function f(){const{delay:o=0,duration:r=300,easing:s=e,tick:f=t,css:m}=c||ut;m&&(i=A(n,0,1,r,o,s,m,u++)),f(0,1);const p=$()+o,g=p+r;a&&a.abort(),l=!0,K((()=>ot(n,!0,"start"))),a=_((t=>{if(l){if(t>=g)return f(1,0),ot(n,!0,"end"),d(),l=!1;if(t>=p){const e=s((t-p)/r);f(e,1-e)}}return l}))}let m=!1;return{start(){m||(m=!0,R(n),s(c)?(c=c(),nt().then(f)):f())},invalidate(){m=!1},end(){l&&(d(),l=!1)}}}(o,Rt,{y:200,duration:1e3}),g.start()})),v=!0)},o(n){lt(T,n),g&&g.invalidate(),h=function(n,o,i){let a,c=o(n,i),l=!0;const u=st;function d(){const{delay:o=0,duration:s=300,easing:i=e,tick:d=t,css:f}=c||ut;f&&(a=A(n,1,0,s,o,i,f));const m=$()+o,p=m+s;K((()=>ot(n,!1,"start"))),_((t=>{if(l){if(t>=p)return d(0,1),ot(n,!1,"end"),--u.r||r(u.c),!1;if(t>=m){const e=i((t-m)/s);d(1-e,e)}}return l}))}return u.r+=1,s(c)?nt().then((()=>{c=c(),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),l&&(a&&R(n,a),l=!1)}}}(o,Rt,{x:200}),v=!1},d(t){t&&I(o),E.d(),T&&T.d(t),t&&h&&h.end(),y=!1,b()}}}function Ce(t,e,n){let{$$slots:o={},$$scope:r}=e,{type:s="error"}=e;const i=function(){const t=B();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=N(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}();return t.$$set=t=>{"type"in t&&n(0,s=t.type),"$$scope"in t&&n(2,r=t.$$scope)},[s,function(){i("dismiss")},r,o]}class Ie extends bt{constructor(t){super(),yt(this,t,Ce,ke,i,{type:0})}}function Oe(t,e,n){const o=t.slice();return o[2]=e[n],o}function Ee(t){let e,n,o=[],r=new Map,s=t[0];const i=t=>t[2].id;for(let e=0;e<s.length;e+=1){let n=Oe(t,s,e),a=i(n);r.set(a,o[e]=je(a,n))}return{c(){e=O("div");for(let t=0;t<o.length;t+=1)o[t].c();M(e,"class","toasts svelte-qbaiql")},m(t,r){C(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){1&n&&(s=t[0],it(),o=pt(o,n,i,1,t,s,r,e,mt,je,null,Oe),at())},i(t){if(!n){for(let t=0;t<s.length;t+=1)ct(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)lt(o[t]);n=!1},d(t){t&&I(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Se(t){let e,n=t[2].message+"";return{c(){e=E(n)},m(t,n){C(t,e,n)},p(t,o){1&o&&n!==(n=t[2].message+"")&&T(e,n)},d(t){t&&I(e)}}}function je(t,e){let n,o,r;return o=new Ie({props:{type:e[2].type,$$slots:{default:[Se]},$$scope:{ctx:e}}}),o.$on("dismiss",(function(){return e[1](e[2])})),{key:t,first:null,c(){n=j(),gt(o.$$.fragment),this.first=n},m(t,e){C(t,n,e),ht(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.type=e[2].type),33&n&&(r.$$scope={dirty:n,ctx:e}),o.$set(r)},i(t){r||(ct(o.$$.fragment,t),r=!0)},o(t){lt(o.$$.fragment,t),r=!1},d(t){t&&I(n),$t(o,t)}}}function Ve(t){let e,n,o=t[0]&&Ee(t);return{c(){o&&o.c(),e=j()},m(t,r){o&&o.m(t,r),C(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&ct(o,1)):(o=Ee(t),o.c(),ct(o,1),o.m(e.parentNode,e)):o&&(it(),lt(o,1,1,(()=>{o=null})),at())},i(t){n||(ct(o),n=!0)},o(t){lt(o),n=!1},d(t){o&&o.d(t),t&&I(e)}}}function Me(t,e,n){let o;l(t,ve,(t=>n(0,o=t)));return[o,t=>be(t.id)]}class Te extends bt{constructor(t){super(),yt(this,t,Me,Ve,i,{})}}function Le(t){this.message=t}Le.prototype=new Error,Le.prototype.name="InvalidCharacterError";var Ne="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new Le("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,r=0,s=0,i="";o=e.charAt(s++);~o&&(n=r%4?64*n+o:o,r++%4)?i+=String.fromCharCode(255&n>>(-2*r&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return i};function Pe(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(Ne(t).replace(/(.)/g,(function(t,e){var n=e.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(e)}catch(t){return Ne(e)}}function ze(t){this.message=t}function Ue(t){let e;return{c(){e=O("div"),M(e,"id","g_id_onload"),M(e,"data-client_id","769272591537-uc3vsgm4fi497461vhkcaugm766q3gqg.apps.googleusercontent.com"),M(e,"data-callback","handleCredentialResponse"),M(e,"data-locale","en")},m(t,n){C(t,e,n)},d(t){t&&I(e)}}}function Ae(e){let n,o,r,s,i=!e[0].hasSignedIn&&Ue();return{c(){n=O("script"),r=S(),i&&i.c(),s=j(),c(n.src,o="https://accounts.google.com/gsi/client")||M(n,"src","https://accounts.google.com/gsi/client"),n.async=!0,n.defer=!0},m(t,e){w(document.head,n),C(t,r,e),i&&i.m(t,e),C(t,s,e)},p(t,[e]){t[0].hasSignedIn?i&&(i.d(1),i=null):i||(i=Ue(),i.c(),i.m(s.parentNode,s))},i:t,o:t,d(t){I(n),t&&I(r),i&&i.d(t),t&&I(s)}}}function Re(t,e,n){let o,r,s;return l(t,Et,(t=>n(1,o=t))),l(t,St,(t=>n(2,r=t))),l(t,Ot,(t=>n(0,s=t))),window.handleCredentialResponse=async t=>{const e=function(t,e){if("string"!=typeof t)throw new ze("Invalid token specified");var n=!0===(e=e||{}).header?0:1;try{return JSON.parse(Pe(t.split(".")[n]))}catch(t){throw new ze("Invalid token specified: "+t.message)}}((await xt.signInWithGoogle({idToken:t.credential})).accessToken);if(g(Ot,s.hasSignedIn=!0,s),ye({message:"You're signed in",type:"success"}),ce.close(),e.isBanned)return g(Ot,s.isBanned=!0,s),void g(St,r=Object.assign(Object.assign({},r),{name:e.name,email:e.email,avatar:e.avatar,role:e.role}),r);g(St,r={_id:e.sub,email:e.email,name:e.name,role:e.role,hasVoted:e.hasVoted,gamesVoted:e.gamesVoted,avatar:e.avatar},r),r.hasVoted&&r.gamesVoted.forEach((t=>{const e=o.list.find((e=>e._id===t));e&&Vt({_id:e._id,name:e.name})}))},[s]}ze.prototype=new Error,ze.prototype.name="InvalidTokenError";class qe extends bt{constructor(t){super(),yt(this,t,Re,Ae,i,{})}}function Be(t,e,n){const o=t.slice();return o[1]=e[n],o}function Fe(t){let e,n,o,r=t[1]+"";return{c(){e=O("li"),n=E("- "),o=E(r),M(e,"class","description__member svelte-1kxryl5")},m(t,r){C(t,e,r),w(e,n),w(e,o)},p(t,e){1&e&&r!==(r=t[1]+"")&&T(o,r)},d(t){t&&I(e)}}}function De(e){let n,o,r,s,i,a,c,l,u,d,f,m,p,g=e[0].playing.name+"",h=e[0].playing.description+"",$=e[0].playing.members,v=[];for(let t=0;t<$.length;t+=1)v[t]=Fe(Be(e,$,t));return{c(){n=O("div"),o=O("div"),r=O("h1"),s=E(g),i=S(),a=O("h3"),a.textContent="Descriptions",c=S(),l=O("p"),u=E(h),d=S(),f=O("h3"),f.textContent="Team members",m=S(),p=O("ul");for(let t=0;t<v.length;t+=1)v[t].c();M(r,"class","description__name svelte-1kxryl5"),M(a,"class","description__title svelte-1kxryl5"),M(l,"class","description__text svelte-1kxryl5"),M(f,"class","description__title svelte-1kxryl5"),M(p,"class","description__members"),M(o,"class","description__content svelte-1kxryl5"),M(n,"class","description svelte-1kxryl5")},m(t,e){C(t,n,e),w(n,o),w(o,r),w(r,s),w(o,i),w(o,a),w(o,c),w(o,l),w(l,u),w(o,d),w(o,f),w(o,m),w(o,p);for(let t=0;t<v.length;t+=1)v[t].m(p,null)},p(t,[e]){if(1&e&&g!==(g=t[0].playing.name+"")&&T(s,g),1&e&&h!==(h=t[0].playing.description+"")&&T(u,h),1&e){let n;for($=t[0].playing.members,n=0;n<$.length;n+=1){const o=Be(t,$,n);v[n]?v[n].p(o,e):(v[n]=Fe(o),v[n].c(),v[n].m(p,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:t,o:t,d(t){t&&I(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(v,t)}}}function Ge(t,e,n){let o;return l(t,Et,(t=>n(0,o=t))),[o]}class He extends bt{constructor(t){super(),yt(this,t,Ge,De,i,{})}}function We(t){let e,n,o,r,s,i,a,l,u,d,f,m,p;return d=new He({}),{c(){e=O("div"),n=O("button"),n.innerHTML="<span>×</span>",o=S(),r=O("div"),s=O("div"),i=O("iframe"),u=S(),gt(d.$$.fragment),M(n,"type","button"),M(n,"class","playing__close svelte-mdfw7x"),M(i,"title",""),L(i,"position","absolute"),L(i,"top","0"),L(i,"left","0"),L(i,"width","100%"),L(i,"height","100%"),c(i.src,a="https://arcade.makecode.com/---run?id="+t[1].playing.source)||M(i,"src",a),M(i,"sandbox","allow-popups allow-forms allow-scripts allow-same-origin"),M(i,"frameborder","0"),M(s,"class","playing__content svelte-mdfw7x"),M(r,"class","playing__main svelte-mdfw7x"),M(e,"class","playing svelte-mdfw7x")},m(a,c){C(a,e,c),w(e,n),w(e,o),w(e,r),w(r,s),w(s,i),t[3](e),C(a,u,c),ht(d,a,c),f=!0,m||(p=V(n,"click",t[2]),m=!0)},p(t,e){(!f||2&e&&!c(i.src,a="https://arcade.makecode.com/---run?id="+t[1].playing.source))&&M(i,"src",a)},i(t){f||(K((()=>{l||(l=dt(e,qt,{},!0)),l.run(1)})),ct(d.$$.fragment,t),f=!0)},o(t){l||(l=dt(e,qt,{},!1)),l.run(0),lt(d.$$.fragment,t),f=!1},d(n){n&&I(e),t[3](null),n&&l&&l.end(),n&&I(u),$t(d,n),m=!1,p()}}}function Ye(t){let e,n,o=t[1].playing.source&&We(t);return{c(){o&&o.c(),e=j()},m(t,r){o&&o.m(t,r),C(t,e,r),n=!0},p(t,[n]){t[1].playing.source?o?(o.p(t,n),2&n&&ct(o,1)):(o=We(t),o.c(),ct(o,1),o.m(e.parentNode,e)):o&&(it(),lt(o,1,1,(()=>{o=null})),at())},i(t){n||(ct(o),n=!0)},o(t){lt(o),n=!1},d(t){o&&o.d(t),t&&I(e)}}}function Je(t,e,n){let o;l(t,Et,(t=>n(1,o=t)));let r=null;var s;return s=()=>{r&&r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},B().$$.after_update.push(s),[r,o,function(){g(Et,o.playing.source="",o)},function(t){G[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class Ke extends bt{constructor(t){super(),yt(this,t,Je,Ye,i,{})}}function Qe(e){let n,o,r;return{c(){n=O("button"),n.textContent="Vote",M(n,"type","button"),M(n,"class","btn btn--cube-2-outline")},m(t,s){C(t,n,s),e[7](n),o||(r=V(n,"click",e[2]),o=!0)},p:t,d(t){t&&I(n),e[7](null),o=!1,r()}}}function Xe(t){let e,n,o,r,s,i;return{c(){e=O("button"),n=E("( "),o=E(t[1]),r=E(" )"),M(e,"type","button"),M(e,"class","btn btn--cube-2")},m(a,c){C(a,e,c),w(e,n),w(e,o),w(e,r),t[6](e),s||(i=V(e,"click",t[2]),s=!0)},p(t,e){2&e&&T(o,t[1])},d(n){n&&I(e),t[6](null),s=!1,i()}}}function Ze(e){let n;function o(t,e){return t[1]?Xe:Qe}let r=o(e),s=r(e);return{c(){s.c(),n=j()},m(t,e){s.m(t,e),C(t,n,e)},p(t,[e]){r===(r=o(t))&&s?s.p(t,e):(s.d(1),s=r(t),s&&(s.c(),s.m(n.parentNode,n)))},i:t,o:t,d(t){s.d(t),t&&I(n)}}}function tn(t,e,n){let o,r,s,i;l(t,jt,(t=>n(5,r=t))),l(t,St,(t=>n(8,s=t))),l(t,Ot,(t=>n(9,i=t)));let{_id:a}=e,{name:c}=e,u=null;return t.$$set=t=>{"_id"in t&&n(3,a=t._id),"name"in t&&n(4,c=t.name)},t.$$.update=()=>{40&t.$$.dirty&&n(1,o=r.filter((t=>t._id===a)).length||0)},[u,o,function(){if(i.hasSignedIn)if(i.isBanned)ye({message:"You cannot vote",type:"error"});else if(s.hasVoted)ye({message:"You have already voted!",type:"error"});else{if(r.length>=3)return t=a,jt.update((e=>e.filter((e=>e._id!==t)))),n(0,u.textContent="Vote",u),u.classList.remove("btn--cube-2"),u.classList.add("btn--cube-2-outline"),void n(1,o=0);var t;n(1,o++,o),Vt({_id:a,name:c}),n(0,u.textContent=`( ${o} )`,u),u.classList.remove("btn--cube-2-outline"),u.classList.add("btn--cube-2")}else ce.open()},a,c,r,function(t){G[t?"unshift":"push"]((()=>{u=t,n(0,u)}))},function(t){G[t?"unshift":"push"]((()=>{u=t,n(0,u)}))}]}class en extends bt{constructor(t){super(),yt(this,t,tn,Ze,i,{_id:3,name:4})}}function nn(t){let e,n,o,s,i,a,l,u,d,f,m,p,g,h,$,v,y,b,_,x,k,j,L,N,P,z,U=t[0].name+"",A=t[0].team+"",R=t[0].numberOfVotes+"";return k=new en({props:{_id:t[0]._id,name:t[0].name}}),{c(){e=O("div"),n=O("img"),i=S(),a=O("div"),l=O("h5"),u=E(U),d=S(),f=O("p"),m=E("By "),p=E(A),g=S(),h=O("p"),$=O("span"),$.textContent="how_to_vote",v=S(),y=O("span"),b=E(R),_=S(),x=O("div"),gt(k.$$.fragment),j=S(),L=O("button"),L.textContent="Play",M(n,"class","game__thumbnail svelte-tlli3n"),c(n.src,o=t[0].thumbnail)||M(n,"src",o),M(n,"alt",s=t[0].name),M(l,"class","game__title svelte-tlli3n"),M(f,"class","game__team svelte-tlli3n"),M($,"class","material-icons"),M(h,"class","game__votes svelte-tlli3n"),M(a,"class","game__detail svelte-tlli3n"),M(L,"type","button"),M(L,"class","btn btn--cube-1"),M(x,"class","game__action svelte-tlli3n"),M(e,"class","game svelte-tlli3n")},m(o,r){C(o,e,r),w(e,n),w(e,i),w(e,a),w(a,l),w(l,u),w(a,d),w(a,f),w(f,m),w(f,p),w(a,g),w(a,h),w(h,$),w(h,v),w(h,y),w(y,b),w(e,_),w(e,x),ht(k,x,null),w(x,j),w(x,L),N=!0,P||(z=[V(n,"click",t[1]),V(L,"click",t[1])],P=!0)},p(t,[e]){(!N||1&e&&!c(n.src,o=t[0].thumbnail))&&M(n,"src",o),(!N||1&e&&s!==(s=t[0].name))&&M(n,"alt",s),(!N||1&e)&&U!==(U=t[0].name+"")&&T(u,U),(!N||1&e)&&A!==(A=t[0].team+"")&&T(p,A),(!N||1&e)&&R!==(R=t[0].numberOfVotes+"")&&T(b,R);const r={};1&e&&(r._id=t[0]._id),1&e&&(r.name=t[0].name),k.$set(r)},i(t){N||(ct(k.$$.fragment,t),N=!0)},o(t){lt(k.$$.fragment,t),N=!1},d(t){t&&I(e),$t(k),P=!1,r(z)}}}function on(t,e,n){let o;l(t,Et,(t=>n(2,o=t)));let{data:r={_id:"",name:"",description:"",team:"",members:[],thumbnail:"",source:"",numberOfVotes:0}}=e;return t.$$set=t=>{"data"in t&&n(0,r=t.data)},[r,function(){g(Et,o.playing={name:r.name,source:r.source,description:r.description,members:r.members},o)}]}class rn extends bt{constructor(t){super(),yt(this,t,on,nn,i,{data:0})}}function sn(t,e,n){const o=t.slice();return o[1]=e[n],o}function an(t,e){let n,o,r;return o=new rn({props:{data:e[1]}}),{key:t,first:null,c(){n=j(),gt(o.$$.fragment),this.first=n},m(t,e){C(t,n,e),ht(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.data=e[1]),o.$set(r)},i(t){r||(ct(o.$$.fragment,t),r=!0)},o(t){lt(o.$$.fragment,t),r=!1},d(t){t&&I(n),$t(o,t)}}}function cn(t){let e,n,o=[],r=new Map,s=t[0].list;const i=t=>t[1]._id;for(let e=0;e<s.length;e+=1){let n=sn(t,s,e),a=i(n);r.set(a,o[e]=an(a,n))}return{c(){e=O("div");for(let t=0;t<o.length;t+=1)o[t].c();M(e,"class","game-list svelte-vpo8i3")},m(t,r){C(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){1&n&&(s=t[0].list,it(),o=pt(o,n,i,1,t,s,r,e,mt,an,null,sn),at())},i(t){if(!n){for(let t=0;t<s.length;t+=1)ct(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)lt(o[t]);n=!1},d(t){t&&I(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function ln(t,e,n){let o;return l(t,Et,(t=>n(0,o=t))),[o]}class un extends bt{constructor(t){super(),yt(this,t,ln,cn,i,{})}}function dn(e){let n,o,r;return o=new zt({}),{c(){n=O("div"),gt(o.$$.fragment),M(n,"class","container-loading svelte-to909d")},m(t,e){C(t,n,e),ht(o,n,null),r=!0},p:t,i(t){r||(ct(o.$$.fragment,t),r=!0)},o(t){lt(o.$$.fragment,t),r=!1},d(t){t&&I(n),$t(o)}}}function fn(t){let e,n,o,r,s,i,a,c,l,u,d=!t[0].hasSignedIn&&mn();return n=new te({}),r=new ue({}),i=new Ke({}),l=new un({}),{c(){d&&d.c(),e=S(),gt(n.$$.fragment),o=S(),gt(r.$$.fragment),s=S(),gt(i.$$.fragment),a=S(),c=O("div"),gt(l.$$.fragment),M(c,"class","container svelte-to909d")},m(t,f){d&&d.m(t,f),C(t,e,f),ht(n,t,f),C(t,o,f),ht(r,t,f),C(t,s,f),ht(i,t,f),C(t,a,f),C(t,c,f),ht(l,c,null),u=!0},p(t,n){t[0].hasSignedIn?d&&(it(),lt(d,1,1,(()=>{d=null})),at()):d?1&n&&ct(d,1):(d=mn(),d.c(),ct(d,1),d.m(e.parentNode,e))},i(t){u||(ct(d),ct(n.$$.fragment,t),ct(r.$$.fragment,t),ct(i.$$.fragment,t),ct(l.$$.fragment,t),u=!0)},o(t){lt(d),lt(n.$$.fragment,t),lt(r.$$.fragment,t),lt(i.$$.fragment,t),lt(l.$$.fragment,t),u=!1},d(t){d&&d.d(t),t&&I(e),$t(n,t),t&&I(o),$t(r,t),t&&I(s),$t(i,t),t&&I(a),t&&I(c),$t(l)}}}function mn(t){let e,n;return e=new qe({}),{c(){gt(e.$$.fragment)},m(t,o){ht(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function pn(e){let n,o,r;return o=new Lt({props:{size:150,durationMultiplier:1.2,colorOuter:"#2e3192",colorCenter:"#79b5bc",colorInner:"#e8d5b5"}}),{c(){n=O("div"),gt(o.$$.fragment),M(n,"class","container-loading svelte-to909d")},m(t,e){C(t,n,e),ht(o,n,null),r=!0},p:t,i(t){r||(ct(o.$$.fragment,t),r=!0)},o(t){lt(o.$$.fragment,t),r=!1},d(t){t&&I(n),$t(o)}}}function gn(t){let e,n,o,r,s,i;e=new $e({}),o=new Te({});let a={ctx:t,current:null,token:null,hasCatch:!0,pending:pn,then:fn,catch:dn,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==r&&(i=i.slice(),i[r]=s);const a=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(it(),lt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),at())})):e.block.d(1),a.c(),ct(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[o]=a),c&&tt()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=B();if(t.then((t=>{q(n),o(e.then,1,e.value,t),q(null)}),(t=>{if(q(n),o(e.catch,2,e.error,t),q(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(t[1](),a),{c(){gt(e.$$.fragment),n=S(),gt(o.$$.fragment),r=S(),s=j(),a.block.c()},m(t,c){ht(e,t,c),C(t,n,c),ht(o,t,c),C(t,r,c),C(t,s,c),a.block.m(t,a.anchor=c),a.mount=()=>s.parentNode,a.anchor=s,i=!0},p(e,[n]){!function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(a,t=e,n)},i(t){i||(ct(e.$$.fragment,t),ct(o.$$.fragment,t),ct(a.block),i=!0)},o(t){lt(e.$$.fragment,t),lt(o.$$.fragment,t);for(let t=0;t<3;t+=1){lt(a.blocks[t])}i=!1},d(t){$t(e,t),t&&I(n),$t(o,t),t&&I(r),t&&I(s),a.block.d(t),a.token=null,a=null}}}function hn(t,e,n){let o,r,s;return l(t,Et,(t=>n(2,o=t))),l(t,St,(t=>n(3,r=t))),l(t,Ot,(t=>n(0,s=t))),[s,async function(){const[t,e]=await Promise.all([xt.getProfile(),kt.findAll()]);if(g(Et,o.list=e,o),t){if(g(Ot,s.hasSignedIn=!0,s),t.isBanned)return g(Ot,s.isBanned=!0,s),void g(St,r=Object.assign(Object.assign({},r),{name:t.name,email:t.email,avatar:t.avatar,role:t.role}),r);g(St,r={_id:t._id,name:t.name,email:t.email,avatar:t.avatar,role:t.role,hasVoted:t.hasVoted,gamesVoted:t.gamesVoted},r),r.hasVoted&&r.gamesVoted.forEach((t=>{const e=o.list.find((e=>e._id===t));e&&Vt({_id:e._id,name:e.name})}))}}]}return new class extends bt{constructor(t){super(),yt(this,t,hn,gn,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
