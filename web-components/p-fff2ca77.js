let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!f(l))&&(l+=""),o&&s?r[r.length-1].s+=l:r.push(o?d(null,l):l),s=o)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=d(e,null);return i.i=t,r.length>0&&(i.u=r),i},d=(e,t)=>({t:0,$:e,s:t,p:null,u:null,i:null}),p={},m=(e,t,n,l)=>{if(n!==l&&(t.toLowerCase(),"class"===t)){const t=e.classList,o=h(n),s=h(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}},y=/\s/,h=e=>e?e.split(y):[],w=(e,t,n,l)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.i||u,r=t.i||u;for(l in s)l in r||m(o,l,s[l],void 0);for(l in r)m(o,l,s[l],r[l])},b=(t,n,l)=>{let s,r,c=n.u[l],i=0;if(null!==c.s)s=c.p=o.createTextNode(c.s);else if(s=c.p=o.createElement(c.$),w(null,c),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.u)for(i=0;i<c.u.length;++i)r=b(t,c,i),r&&s.appendChild(r);return s},g=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=b(null,l,s),c&&(o[s].p=c,i.insertBefore(c,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},S=(e,t)=>e.$===t.$,v=(e,t)=>{const n=t.p=e.p,l=e.u,o=t.u,s=t.s;null===s?(w(e,t),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:S(i,f)?(v(i,f),i=t[++s],f=l[++r]):S(a,$)?(v(a,$),a=t[--c],$=l[--u]):S(i,$)?(v(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++s],$=l[--u]):S(a,f)?(v(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=l[++r]):(o=b(t&&t[r],n,r),f=l[++r],o&&i.p.parentNode.insertBefore(o,i.p));s>c?g(e,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&j(t,s,c)})(n,l,t,o):null!==o?(null!==e.s&&(n.textContent=""),g(n,null,t,o,0,o.length-1)):null!==l&&j(l,0,l.length-1)):e.s!==s&&(n.data=s)},M=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.m=t))},k=(e,t)=>{if(e.t|=16,!(4&e.t))return M(e,e.h),K(()=>O(e,t));e.t|=512},O=(e,t)=>{const n=e.g;return T(void 0,()=>C(e,n,t))},C=async(n,l,s)=>{const r=n.j,c=r["s-rc"];s&&(e=>{const t=e.S,n=e.j,l=t.t,s=((e,t)=>{let n=a(t),l=_.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n),((n,l)=>{const o=n.j,s=n.v||d(null,null),r=(e=>e&&e.$===p)(l)?l:$(null,null,l);t=o.tagName,r.$=null,r.t|=4,n.v=r,r.p=s.p=o.shadowRoot||o,e=o["s-sc"],v(s,r)})(n,P(n,l)),c&&(c.map(e=>e()),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>x(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},P=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){H(e)}return t},x=e=>{const t=e.j,n=e.h;64&e.t||(e.t|=64,A(t),e.M(t),n||E()),e.m&&(e.m(),e.m=void 0),512&e.t&&J(()=>k(e,!1)),e.t&=-517},E=()=>{A(o.documentElement),J(()=>(e=>{const t=s.ce("appload",{detail:{namespace:"web-components"}});return e.dispatchEvent(t),t})(l))},T=(e,t)=>e&&e.then?e.then(t):t(),A=e=>e.classList.add("hydrated"),L=(e,t,n)=>{if(t.k){const l=Object.entries(t.k),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>W(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=W(this),s=o.O.get(t),r=o.t,c=o.g;n=((e,t)=>null==e||f(e)?e:1&t?e+"":e)(n,l.k[t][0]),8&r&&void 0!==s||n===s||(o.O.set(t,n),c&&2==(18&r)&&k(o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},R=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let p,m=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],o:t[1],k:t[2],C:t[3]};l.k=t[2];const o=l.o,u=class extends HTMLElement{constructor(e){super(e),F(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),m?d.push(this):s.jmp(()=>(e=>{if(0==(1&s.t)){const t=W(e),n=t.S,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(t,t.h=n);break}}n.k&&Object.entries(n.k).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=V(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(L(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){H(e)}t.t&=-9,e()}if(o.style){let e=o.style;const t=a(n);if(!_.has(t)){const l=()=>{};((e,t,n)=>{let l=_.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,_.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.h,r=()=>k(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){s.jmp(()=>{})}componentOnReady(){return W(this).P}};l.T=e[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,L(u,l,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),m=!1,d.length?d.map(e=>e.connectedCallback()):s.jmp(()=>p=setTimeout(E,30))},U=new WeakMap,W=e=>U.get(e),q=(e,t)=>U.set(t.g=e,t),F=(e,t)=>{const n={t:0,j:e,S:t,O:new Map};return n.P=new Promise(e=>n.M=e),e["s-p"]=[],e["s-rc"]=[],U.set(e,n)},H=e=>console.error(e),N=new Map,V=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=N.get(n);return l?l[t]:import(`./${n}.entry.js`).then(e=>(N.set(n,e),e[t]),H)},_=new Map,z=[],B=[],D=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?J(I):s.raf(I))},G=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){H(e)}e.length=0},I=()=>{G(z),G(B),(n=z.length>0)&&s.raf(I)},J=e=>r().then(e),K=D(B,!0);export{R as b,$ as h,r as p,q as r};