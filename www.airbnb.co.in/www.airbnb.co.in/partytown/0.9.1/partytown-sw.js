/* Partytown 0.9.1 - MIT builder.io */
Object.freeze((e => {
    const t = new Set;
    let r = [];
    do {
        Object.getOwnPropertyNames(r).forEach((e => {
            "function" == typeof r[e] && t.add(e)
        }))
    } while ((r = Object.getPrototypeOf(r)) !== Object.prototype);
    return Array.from(t)
})());
const e = new Map,
    t = (e, t) => ({
        F: e.F,
        p: t
    }),
    r = (e, t) => new Response(e, {
        headers: {
            "content-type": t || "text/html",
            "Cache-Control": "no-store"
        }
    });
self.oninstall = () => self.skipWaiting(), self.onactivate = () => self.clients.claim(), self.onmessage = t => {
    const r = t.data,
        n = e.get(r.F);
    n && (e.delete(r.F), clearTimeout(n[1]), n[0](r))
}, self.onfetch = n => {
    const i = n.request,
        s = new URL(i.url).pathname;
    s.endsWith("sw.html") ? n.respondWith(r('<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">/* Partytown 0.9.1 - MIT builder.io */\n(e=>{const t=()=>{},r=e=>e.length,n=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},i=(e,t)=>e.startsWith(t),s=e=>!(i(e,"webkit")||i(e,"toJSON")||i(e,"constructor")||i(e,"toString")||i(e,"_")),o=e=>11===e.nodeType&&e.host?"#s":e.nodeName,a=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),l={Anchor:"a",DList:"dl",Image:"img",OList:"ol",Paragraph:"p",Quote:"q",TableCaption:"caption",TableCell:"td",TableCol:"colgroup",TableRow:"tr",TableSection:"tbody",UList:"ul"},c={Graphics:"g",SVG:"svg"},p={preserveBehavior:!1},u=Object.freeze((e=>{const t=new Set;let r=[];do{Object.getOwnPropertyNames(r).forEach((e=>{"function"==typeof r[e]&&t.add(e)}))}while((r=Object.getPrototypeOf(r))!==Object.prototype);return Array.from(t)})()),d=Symbol(),h=Symbol(),m=new Map,g=new Map,f={},y=new WeakMap,v=(e,t)=>{if(e)return(t=y.get(e))||(t=e[d])||$(e,t=a()),t},w=(e,t,r,n,i)=>{if((r=f[e])&&r.U){if(e===t)return r.U;if(n=r.U.document,"d"===(i=t.split(".").pop()))return n;if("e"===i)return n.documentElement;if("h"===i)return n.head;if("b"===i)return n.body}return m.get(t)},$=(e,t,r)=>{e&&(m.set(t,e),e[d]=t,e[h]=r=Date.now(),r>b+5e3&&(m.forEach(((e,t)=>{e[h]<b&&e.nodeType&&!e.isConnected&&m.delete(t)})),b=r))};let b=0;const S=e.parent,E=document.implementation.createHTMLDocument(),T=S.partytown||{},O=(T.lib||"/~partytown/")+"",I=(e,t,r)=>{const n=((e,t)=>{return r=e,n={value:t},Object.defineProperty(r,"name",{...n,configurable:!0});var r,n})(class extends f[e].U.HTMLElement{},r[0]);return"connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback".split(",").map((r=>n.prototype[r]=function(...n){t.postMessage([15,e,v(this),r,n])})),n.observedAttributes=r[1],n},M=(e,t,r,s,a,l)=>void 0!==t&&(s=typeof t)?"string"===s||"number"===s||"boolean"===s||null==t?[0,t]:"function"===s?[6]:(r=r||new Set)&&Array.isArray(t)?r.has(t)?[1,[]]:r.add(t)&&[1,t.map((t=>M(e,t,r)))]:"object"===s?L(t)?[14,{name:t.name,message:t.message,stack:t.stack}]:""===(a=n(t))?[2,{}]:"Window"===a?[3,[e,e]]:"HTMLCollection"===a||"NodeList"===a?[7,Array.from(t).map((t=>M(e,t,r)[1]))]:a.endsWith("Event")?[5,x(e,t,r)]:"CSSRuleList"===a?[12,Array.from(t).map(N)]:i(a,"CSS")&&a.endsWith("Rule")?[11,N(t)]:"CSSStyleDeclaration"===a?[13,x(e,t,r)]:"Attr"===a?[10,[t.name,t.value]]:t.nodeType?[3,[e,v(t),o(t),l]]:[2,x(e,t,r,!0,!0)]:void 0:t,x=(e,t,r,i,o,a,l,c)=>{if(a={},!r.has(t))for(l in r.add(t),t)s(l)&&(c="path"===l&&n(t).endsWith("Event")?t.composedPath():t[l],(i||"function"!=typeof c)&&(o||""!==c)&&(a[l]=M(e,c,r)));return a},N=e=>{let t,r={};for(t in e)U.includes(t)&&(r[t]=String(e[t]));return r},L=t=>t instanceof e.top.Error,C=(t,r,n,i)=>r?(n=r[0],i=r[1],0===n?i:4===n?R(t,i):1===n?i.map((e=>C(t,e))):3===n?w(i[0],i[1]):5===n?A(j(t,i)):2===n?j(t,i):8===n?i:9===n?new e[r[2]](i):void 0):void 0,R=(e,{V:t,w:r,L:n},i)=>((i=g.get(n))||(i=function(...i){e.postMessage([9,{V:t,w:r,L:n,R:M(t,this),b:M(t,i)}])},g.set(n,i)),i),A=e=>new("detail"in e?CustomEvent:Event)(e.type,e),j=(e,t,r,n)=>{for(n in r={},t)r[n]=C(e,t[n]);return r},U="cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(","),P=async(e,t)=>{let n,i,s,o,a,l,c={F:t.F},p=r(t.Q),u=0;for(;u<p;u++)try{l=u===p-1,n=t.Q[u],i=n.V,s=n.a,!f[i]&&i.startsWith("f_")&&await new Promise((e=>{let t=0,r=()=>{f[i]||t++>1e3?e():requestAnimationFrame(r)};r()})),1===s[0]&&s[1]in f[i].U?$(new f[i].U[s[1]](...C(e,s[2])),n.w):(o=w(i,n.w),o?(a=H(e,i,o,s,l,n.r),n.d&&("string"==typeof n.d?$(a,n.d):f[n.d.V]={V:n.d.V,U:{document:a}}),"object"==typeof(d=a)&&d&&d.then&&(a=await a,l&&(c.z=!0)),l&&(c.M=M(i,a,void 0,void 0,void 0,n.w))):c.p=n.w+" not found")}catch(e){l?c.p=String(e.stack||e):console.error(e)}var d;return c},H=(e,t,i,s,o,a)=>{let l,c,p,u,d,h=0,m=r(s);for(;h<m;h++){c=s[h],l=s[h+1],p=s[h-1];try{if(!Array.isArray(l))if("string"==typeof c||"number"==typeof c){if(h+1===m&&a)return d={},a.map((e=>d[e]=i[e])),d;i=i[c]}else{if(0===l)return void(i[p]=C(e,c));if("function"==typeof i[p]&&(u=C(e,c),"define"===p&&"CustomElementRegistry"===n(i)&&(u[1]=I(t,e,u[1])),"insertRule"===p&&u[1]>r(i.cssRules)&&(u[1]=r(i.cssRules)),i=i[p].apply(i,u),"play"===p))return Promise.resolve()}}catch(e){if(o)throw e;console.debug(e)}}return i},k=(e,t)=>{let n,i,s,o=t.V,a=t.U,l=a.document,c=\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])\',d=c+":not([async]):not([defer])";l&&l.body?(n=l.querySelector(d),n||(n=l.querySelector(c)),n?(n.dataset.ptid=i=v(n,o),s={V:o,w:i},n.src?(s.S=n.src,s.H=n.dataset.ptsrc||n.src):s.j=n.innerHTML,e.postMessage([7,s])):(t.x||(t.x=1,((e,t,n)=>{let i,s,o=n._ptf,a=(n.partytown||{}).forward||[],l=(r,n)=>e.postMessage([10,{V:t,q:r,b:M(t,Array.from(n))}]);if(n._ptf=void 0,a.map((e=>{const[t,{preserveBehavior:i}]=(e=>{if("string"==typeof e)return[e,p];const[t,r=p]=e;return[t,{...p,...r}]})(e);s=n,t.split(".").map(((e,t,o)=>{var a;s=s[o[t]]=t+1<r(o)?s[o[t]]||(a=o[t+1],u.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:t,thisObject:r}=((e,t)=>{let r=e;for(let e=0;e<t.length-1;e+=1)r=r[t[e]];return{thisObject:r,methodOrProperty:t.length>0?r[t[t.length-1]]:void 0}})(n,o);"function"==typeof t&&(e=(...e)=>t.apply(r,...e))}return(...t)=>{let r;return e&&(r=e(t)),l(o,t),r}})()}))})),o)for(i=0;i<r(o);i+=2)l(o[i],o[i+1])})(e,o,a),l.dispatchEvent(new CustomEvent("pt0"))),e.postMessage([8,o]))):requestAnimationFrame((()=>k(e,t)))},D=(e,t,r)=>{if(!y.has(r)){y.set(r,t);const n=r.document,i=r.history,s=y.get(r.parent);let o=!1;const a=[],l=e=>{o?e():a.push(e)},c=()=>{e.postMessage([5,{V:t,J:s,S:n.baseURI,T:n.visibilityState}]),setTimeout((()=>{o=!0,a.forEach((e=>{e()}))}))},p=i.pushState.bind(i),u=i.replaceState.bind(i),d=(r,i,s,o)=>()=>{e.postMessage([13,{V:t,type:r,state:i,url:n.baseURI,newUrl:s,oldUrl:o}])};i.pushState=(e,t,r)=>{p(e,t,r),l(d(0,e,null==r?void 0:r.toString()))},i.replaceState=(e,t,r)=>{u(e,t,r),l(d(1,e,null==r?void 0:r.toString()))},r.addEventListener("popstate",(e=>{l(d(2,e.state))})),r.addEventListener("hashchange",(e=>{l(d(3,{},e.newURL,e.oldURL))})),r.addEventListener("ptupdate",(()=>{k(e,f[t])})),n.addEventListener("visibilitychange",(()=>e.postMessage([14,t,n.visibilityState]))),f[t]={V:t,U:r},"complete"===n.readyState?c():r.addEventListener("load",c)}},V=()=>{const e=E.createElement("i"),t=E.createTextNode(""),r=E.createComment(""),n=E.createDocumentFragment(),i=E.createElement("p").attachShadow({mode:"open"}),s=K(S,"IntersectionObserver"),o=K(S,"MutationObserver"),a=K(S,"ResizeObserver"),l=S.performance,c=S.screen,p=[[S.history],[l],[l.navigation],[l.timing],[c],[c.orientation],[S.visualViewport],[s,12],[o,12],[a,12],[t],[r],[n],[i],[e],[e.attributes],[e.classList],[e.dataset],[e.style],[E],[E.doctype]],u=[_("Window",S),_("Node",t)],d=function(e){return JSON.stringify(e,((e,t)=>("function"==typeof t&&(t=String(t)).startsWith(e+"(")&&(t="function "+t),"loadScriptsOnMainThread"===e&&(t=t.map((e=>Array.isArray(e)?e:["string"==typeof e?"string":"regexp","string"==typeof e?e:e.source]))),t)))}(T),h={i:d,v:W(p,u),C:new URL(O,S.location)+"",I:origin,D:q("localStorage"),O:q("sessionStorage")};return J(h.v,S,"IntersectionObserverEntry"),h},F=()=>{const e=Object.getOwnPropertyNames(S).map((e=>((e,t,r,n)=>{if(r=t.match(/^(HTML|SVG)(.+)Element$/))return n=r[2],"S"==t[0]?e.createElementNS("http://www.w3.org/2000/svg",c[n]||n.slice(0,2).toLowerCase()+n.slice(2)):e.createElement(l[n]||n)})(E,e))).filter((e=>e)).map((e=>[e]));return W(e,[])},W=(e,t)=>{const r=new Set(["Object"]);return e.filter((e=>e[0])).map((e=>{const t=e[0],r=e[1],i=n(t);return[i,S[i].prototype,t,r]})).map((([e,n,i,s])=>z(r,t,e,n,i,s))),t},_=(e,t,r)=>{let n=[],i=[e,"Object",n];for(r in t)B(n,t,r);return i},z=(e,t,r,i,s,a)=>{if(!e.has(r)){e.add(r);const l=Object.getPrototypeOf(i),c=n(l),p=[],u=Object.getOwnPropertyDescriptors(i);z(e,t,c,l,s,a);for(const e in u)B(p,s,e);t.push([r,c,p,a,o(s)])}},B=(e,t,r,i,o,a)=>{try{s(r)&&isNaN(r[0])&&"all"!==r&&("function"==(o=typeof(i=t[r]))?(String(i).includes("[native")||Object.getPrototypeOf(t)[r])&&e.push([r,5]):"object"===o&&null!=i?"Object"!==(a=n(i))&&"Function"!==a&&self[a]&&e.push([r,i.nodeType||a]):"symbol"!==o&&(r.toUpperCase()===r?e.push([r,6,i]):e.push([r,6])))}catch(e){console.warn(e)}},q=e=>{let t,n=[],i=0,s=r(S[e]);for(;i<s;i++)t=S[e].key(i),n.push([t,S[e].getItem(t)]);return n},K=(e,r)=>void 0!==e[r]?new e[r](t):0,J=(e,t,r)=>{void 0!==t[r]&&e.push([r,"Object",Object.keys(t[r].prototype).map((e=>[e,6])),12])};let G;(t=>{const r=e.navigator.serviceWorker;return r.getRegistration().then((e=>(r.addEventListener("message",(t=>{return r=t.data,n=t=>e.active&&e.active.postMessage(t),P(G,r).then(n);var r,n})),(e,t)=>{0===t[0]?e.postMessage([1,V()]):2===t[0]?e.postMessage([3,F()]):((e,t,r)=>{4===t[0]?D(e,a(),S):(r=f[t[1]])&&(7===t[0]?requestAnimationFrame((()=>k(e,r))):6===t[0]&&((e,t,r,n,i)=>{(i=t.U.document.querySelector(`[data-ptid="${r}"]`))&&(n?i.dataset.pterror=n:i.type+="-x",delete i.dataset.ptid),k(e,t)})(e,r,t[2],t[3]))})(e,t)})))})().then((e=>{e&&(G=new Worker(URL.createObjectURL(new Blob([\'/* Partytown 0.9.1 - MIT builder.io */\\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=new Map,$={},d=new WeakMap,u=[],p={},h=new Map,g=new Map,m={},f=new Map,w=new Map,y="about:blank",v=e=>e.split(","),S=e=>{if(e=p.C+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},b=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),I=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=v("insertBefore,remove,removeChild,replaceChild"),T=v("className,width,height,hidden,innerHTML,innerText,textContent"),E=v("setAttribute,setAttributeNS,setProperty"),N=v("addEventListener,dispatchEvent,removeEventListener"),x=N.concat(E,v("add,observe,remove,unobserve")),L=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,C=()=>{},R=e=>e.length,P=e=>{var t,r,n;try{const r=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(r)return r}catch(e){}try{const t=null===(n=null===(r=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;if(t)return t}catch(e){}return""},O=[],A=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),H="text/partytown",W=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),j=(e,t)=>W(e,"name",{value:t}),k=(e,t,r)=>W(e.prototype,t,r),D=(e,t)=>Object.defineProperties(e.prototype,t),_=(e,t,r)=>k(e,t,{value:r,writable:!0});function U(e,t){var r,n;return null!==(n=null===(r=e.loadScriptsOnMainThread)||void 0===r?void 0:r.map((([e,t])=>new RegExp("string"===e?t.replace(/[.*+?^${}()|[\\\\]\\\\\\\\]/g,"\\\\\\\\$&"):t))).some((e=>e.test(t))))&&void 0!==n&&n}Object.freeze((e=>{const t=new Set;let r=[];do{Object.getOwnPropertyNames(r).forEach((e=>{"function"==typeof r[e]&&t.add(e)}))}while((r=Object.getPrototypeOf(r))!==Object.prototype);return Array.from(t)})());const B=(e,t)=>t in e[o],F=(e,t)=>e[o][t],z=(e,t,r)=>e[o][t]=r,V=(e,t,r,n,i,s)=>{if(!(i=c.get(t))&&r&&m[e]){const o=c.get(s||"");i=m[e].k(r,t,n,o),c.set(t,i)}return i},X=(e,t)=>_(e,"nodeType",t),Z=(e,t)=>t.map((t=>k(e,t,{get(){let e=q(this,t),r=w.get(e);return r||(r=ue(this,[t]),w.set(e,r)),r}}))),q=(e,n,i)=>[e[t],e[r],n,...(i||O).map((e=>String(e&&e[t]?e[r]:e)))].join("."),G=(e,t)=>v(t).map((t=>k(e,t,{get(){return B(this,t)||z(this,t,ue(this,[t])),F(this,t)},set(e){F(this,t)!==e&&pe(this,[t],e),z(this,t,e)}}))),J=e=>b.map((t=>k(e,t,{get(){const e=f.get(q(this,t));if("number"==typeof e)return e;const r=ue(this,[t],b);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>f.set(q(this,e),t))),r[t]):r}}))),Y=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=q(this,t,e),n=f.get(r);return n||(n=he(this,[t],e),f.set(r,n)),n}})),K=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{V:e,w:n,L:(a=i,(l=d.get(a))||(d.set(a,l=A()),$[l]=a),l)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>K(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,ee(e,n,i,!1,s)]:Q&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,P(i)]:[2,ee(e,n,i,!0,s)]:void 0:i;var a,l},Q="undefined"!=typeof TrustedHTML,ee=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=K(e,t,a,i));return s},te=(e,n)=>e?K(e[t],e[r],n):[0,n],re=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return ie(r,s);if(6===i)return e&&r.length>0?(...t)=>he(m[e].U,r,t,1):C;if(3===i)return ne(s);if(7===i)return new oe(s.map(ne));if(10===i)return new ae(s);if(1===i)return s.map((n=>re(e,t,r,n)));if(14===i)return new se(s);for(a in o={},s)o[a]=re(e,t,[...r,a],s[a]);if(13===i)return new m[e].U.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=u.find((e=>e.m===t));r&&(e=m[r.V],e&&(o.source=e.U,o.origin=e.E.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?C:e[String(t)]})}if(2===i)return o}},ne=([e,t,r,n])=>t===e&&m[e]?m[e].U:V(e,t,r,void 0,void 0,n),ie=(e,{V:t,w:r,G:n,L:i})=>($[i]||d.set($[i]=function(...i){const s=V(t,r,n);return he(s,e,i)},i),$[i]);class se extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class oe{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return R(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const ae=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},le=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.E),ce=[],$e=(e,n,i,o,a,l)=>{if(e[s]){if(ce.push({V:e[t],w:e[r],a:[...e[s],...n],d:o,r:a}),3===i)p.K([12,{F:A(),Q:[...ce]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),ce.length=0;else if(1===i)return de(!0);p.c=setTimeout(de,20)}},de=e=>{if(clearTimeout(p.c),R(ce)){const t=ce[R(ce)-1],r={F:A(),Q:[...ce]};if(ce.length=0,e){const e=((e,t)=>{const r=new XMLHttpRequest;return r.open("POST",S("proxytown"),!1),r.send(JSON.stringify(t)),JSON.parse(r.responseText)})(0,r),n=e.z,i=re(t.V,t.w,t.a,e.M);if(e.p){if(n)return Promise.reject(e.p);throw new Error(e.p)}return n?Promise.resolve(i):i}p.K([12,r])}},ue=(e,t,r,n)=>p.i.get&&(n=p.i.get(me(e,t)))!==a?n:n=$e(e,t,1,void 0,r),pe=(e,t,r,n)=>{if(p.i.set){if((n=p.i.set({value:r,prevent:l,...me(e,t)}))===l)return;n!==a&&(r=n)}T.some((e=>t.includes(e)))&&(f.clear(),t[t.length-1]),t=[...t,te(e,r),0],$e(e,t,2)},he=(e,t,r,n,i,s,o,l)=>p.i.apply&&(o=p.i.apply({args:r,...me(e,t)}))!==a?o:(l=t[R(t)-1],t=[...t,te(e,r)],n=n||(x.includes(l)?2:1),"setAttribute"===l&&B(e,r[0])?z(e,r[0],r[1]):M.includes(l)?(f.clear(),w.clear()):E.includes(l)&&(n=2,f.clear()),o=$e(e,t,n,i,void 0,s)),ge=(e,t,r)=>{$e(e,[1,t,te(e,r)],1)},me=(e,r)=>({name:r.join("."),continue:a,nodeName:e[n],constructor:P(e),instance:e,window:m[e[t]].U}),fe=(e,t,r,n,i)=>{let s,o,a=t=>((t=r.get(e.origin))||r.set(e.origin,t=[]),t),l=e=>a().findIndex((t=>t[we]===e)),c={getItem:e=>(s=l(e),s>-1?a()[s][ye]:null),setItem(r,o){s=l(r),s>-1?a()[s][ye]=o:a().push([r,o]),n?he(e,[t,"setItem"],[r,o],2):le("set",t,i)},removeItem(r){s=l(r),s>-1&&a().splice(s,1),n?he(e,[t,"removeItem"],[r],2):le("remove",t,i)},key:e=>(o=a()[e],o?o[we]:null),clear(){a().length=0,n?he(e,[t,"clear"],O,2):le("clear",t,i)},get length(){return a().length}};e[t]=new Proxy(c,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,r)=>(e.setItem(t,r),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},we=0,ye=1,ve=(e,t,r)=>{e[r]=j(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=ue(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,pe(e,[t],r),f.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],he(this,["setProperty"],e,2),e[0],f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return he(this,["removeProperty"],[e],2),f.clear(),this[n][e]=void 0,t}},r)},Se=(e,t)=>{e[t]=j(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>Ie(e,t):"length"===n?be(e).length:isNaN(n)?t[r]:Ie(e,n)}})}insertRule(e,t){const r=be(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(he(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,f.clear(),t}deleteRule(e){he(this.ownerNode,["sheet","deleteRule"],[e],2),be(this.ownerNode).splice(e,1),this.ownerNode,f.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};D(e.HTMLStyleElement,r)},be=(e,t)=>((t=F(e,2))||(t=ue(e,["sheet","cssRules"]),z(e,2,t)),t),Ie=(e,t,r)=>(0===(r=be(e))[t]&&(r[t]=ue(e,["sheet","cssRules",parseInt(t,10)])),r[t]),Me="0.9.1",Te=(e,t,r,n,i)=>{try{e.l=t,Ee(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},Ee=(e,t,r)=>{e.N=1;let n=((e,t)=>e.replace(/([a-zA-Z0-9_$\\\\.\\\\\\\'\\\\"\\\\`])?(\\\\.\\\\.\\\\.)?this(?![a-zA-Z0-9_$:])/g,((e,t,r)=>{const n=(t||"")+(r||"");return null!=t?n+"this":n+"(thi$(this)?window:this)"})))(t);t=`with(this){${n.replace(/\\\\/\\\\/# so/g,"//Xso")}\\\\n;function thi$(t){return t===this}};${(p.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\\\'function\\\'&&(this.${e}=${e}))`)).join(";")};`+(r?"\\\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\\\(/g,`.postMessage(\\\'${e.V}\\\',`)),new Function(t).call(e.U),e.N=0},Ne=(e,t,r)=>{(r=F(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},xe=(e,t,r,n,i,s)=>{for(n=e.E;!n.host&&(n=(e=m[e.J]).E,e.V!==e.J););return i=new URL(t||"",n),r&&p.i.resolveUrl&&(s=p.i.resolveUrl(i,n,r))?s:i},Le=(e,t,r)=>xe(e,t,r)+"",Ce=()=>`<script src="${S("partytown.js?v="+Me)}"><\\\\/script>`,Re=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){this.s=t,fetch(Le(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}removeEventListener(e,t){"load"===e&&(this.l=this.l.filter((e=>e!==t))),"error"===e&&(this.e=this.e.filter((e=>e!==t)))}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Pe={addEventListener:{value(...e){const t=e[0],r=F(this,t)||[];r.push(e[1]),z(this,t,r)}},async:{get:C,set:C},defer:{get:C,set:C},onload:{get(){let e=F(this,"load");return e&&e[0]||null},set(e){z(this,"load",e?[e]:null)}},onerror:{get(){let e=F(this,"error");return e&&e[0]||null},set(e){z(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:he(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Oe.includes(e)?this[e]=t:he(this,["setAttribute"],[e,t])}}},Oe=v("src,type"),Ae=(e,t)=>{const r={innerHTML:He,innerText:He,src:{get(){return F(this,4)||""},set(e){const r=Le(t,e,null),n=p.i;e=Le(t,e,"script"),z(this,4,e),pe(this,["src"],e),r!==e&&pe(this,["dataset","ptsrc"],r),this.type&&U(n,e)&&pe(this,["type"],"text/javascript")}},textContent:He,type:{get(){return ue(this,["type"])},set(e){We(e)||(z(this,5,e),pe(this,["type"],e))}},...Pe};D(e,r)},He={get(){const e=ue(this,["type"]);return We(e)?F(this,3)||"":ue(this,["innerHTML"])},set(e){z(this,3,e)}},We=e=>!e||"text/javascript"===e,je=(e,i,s)=>{const o=p.i,a=j(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const a=e[t]=this[t],l=e[r],c=e[n],$="SCRIPT"===c,d="IFRAME"===c;if($){const t=F(e,3),r=F(e,5);if(t){if(We(r)){const r=e.id;if(r&&U(o,r))pe(e,["type"],"text/javascript");else{const r=Te(i,l,t,0,""),n=r?"pterror":"ptid",s=r||l;pe(e,["type"],H+"-x"),pe(e,["dataset",n],s)}}pe(e,["innerHTML"],t)}}if(he(this,["insertBefore"],[e,s],2),d){const t=F(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Te(i,l,e,0,"")}((e,t)=>{let r,n,i=0,s=()=>{m[e]&&m[e].x&&!m[e].y?(r=F(t,1)?"error":"load",n=F(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=F(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(l,e)}return $&&(de(!0),p.K([7,a])),e}get nodeName(){return"#s"===this[n]?"#document-fragment":this[n]}get nodeType(){return 3}get ownerDocument(){return i.n}},"Node");Z(a,v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=a},ke=v("AUDIO,CANVAS,VIDEO"),De=v("Audio,MediaSource"),_e=(e,r,n)=>{D(e,{body:{get:()=>r.e},cookie:{get(){return r.A?ue(this,["cookie"]):(le("get","cookie",r),"")},set(e){r.A&&pe(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!L.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+A();he(this,["createElement"],[e],2,i);const s=V(n,i,e);if(r)tt({V:i,J:n,S:y},!0).U.fetch=fetch,pe(s,["srcdoc"],Ce());else if("SCRIPT"===e){const e=F(s,5);We(e)&&pe(s,["type"],H)}return s}},createElementNS:{value(e,r){const n=A(),i=V(this[t],n,r,e);return he(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=A(),i=V(r,n,"#text");return he(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.l?V(this[t],r.l,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.U},documentElement:{get:()=>r.o},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.e]:"HEAD"===e?[r.s]:he(this,["getElementsByTagName"],[e])}},head:{get:()=>r.s},images:{get(){return ue(this,["images"])}},scripts:{get(){return ue(this,["scripts"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=A();return he(this,["implementation","createHTMLDocument"],[e],1,{V:t}),tt({V:t,J:t,S:r.E+"",T:"hidden"},!0,!0).n}}}},location:{get:()=>r.E,set(e){r.E.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.T||"visible"}}),G(e,"compatMode,referrer,forms")},Ue=(e,t)=>{D(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},Be=(e,t)=>{D(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),Z(e,I),G(e,"id"),J(t),Y(t,v("getClientRects,getBoundingClientRect"))},Fe=(e,t)=>{const r={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=F(this,4);if("string"!=typeof n){if(r=ue(this,["href"]),""===r)return"protocol"===e?":":"";z(this,4,r),n=new URL(r)[e]}return xe(t,n,null)[e]},set(r){let n;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(r))n=new URL(r);else{const e=t.E.href;n=xe(t,e,null),n.href=new URL(r+"",n.href)}else n=xe(t,this.href,null),n[e]=r;z(this,4,n.href),pe(this,["href"],n.href)}}})),D(e,r)},ze=(e,t)=>{const r={contentDocument:{get(){return qe(this).n}},contentWindow:{get(){return qe(this).U}},src:{get(){let e=F(this,0);return e&&e.startsWith("javascript:")?e:(e=qe(this).E.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))z(this,0,e);else if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=qe(this);n.E.href=e=Le(n,e,"iframe"),n.y=1,z(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(pe(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(Xe,((e,t)=>{const r=[];let n,i=!1;for(;n=Ze.exec(t);){let[e]=n;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\\\\/javascript/,H)),r.push(e)}return i||r.push(\\\'type="\\\'+H+\\\'"\\\'),`<script ${r.join(" ")}>`}))+Ce()),de(!0),p.K([7,n.V])):(z(this,1,t),n.y=0)}}},...Pe};D(e,r)},Ve="((?:\\\\\\\\w|-)+(?:=(?:(?:\\\\\\\\w|-)+|\\\'[^\\\']*\\\'|\\\\"[^\\\\"]*\\\\")?)?)",Xe=new RegExp(`<script\\\\\\\\s*((${Ve}\\\\\\\\s*)*)>`,"mg"),Ze=new RegExp(Ve,"mg"),qe=e=>{const n=e[r];return m[n]||tt({V:n,J:e[t],S:ue(e,["src"])||y},!0),m[n]},Ge=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=he(e,[t],O);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};D(e,r)},Je=(e,t)=>{e.NamedNodeMap=j(class extends t{constructor(e,t,r){return super(e,t,r),new Proxy(this,{get(e,t){const r=Ke[t];return r?r.bind(e,[t]):ue(e,[t])},set(e,t,r){if(Ke[t])throw new Error("Can\\\'t set read-only property: "+String(t));return pe(e,[t],r),!0}})}},"NamedNodeMap")};function Ye(e,...t){return he(this,e,t,1)}const Ke={getNamedItem:Ye,getNamedItemNS:Ye,item:Ye,removeNamedItem:Ye,removeNamedItemNS:Ye,setNamedItem:Ye,setNamedItemNS:Ye},Qe=(a,l,c,$,d,f)=>{let w,b,M,T;const E=class{constructor(e,l,c,$,d){this[t]=e||a,this[r]=l||w||A(),this[s]=c||[],this[n]=$||b,this[i]=d||M,this[o]=T&&T[o]||{},w=b=M=void 0}},x=new(j(class extends URL{assign(){}reload(){}replace(){}},"Location"))(c),L=x.origin===p.I||x.origin===y,C=l===a,O={},H=()=>{let e,t,r=[];for(e in m)t=m[e],t.J!==a||t.B||r.push(t);return r},U=j(class extends E{constructor(){super(a,a),this.addEventListener=(...e)=>{"load"===e[0]?O.N&&setTimeout((()=>e[1]({type:"load"}))):he(this,["addEventListener"],e,2)};let n,i,o=this,c=0,u=()=>{c||((p.u||(e.g=[ue,pe,he,ge,D,A,t,r,s],p.t(S("partytown-media.js?v="+Me)),p.u=e.f,delete e.f),p.u)(E,K,O,o,De),c=1)},m={},y=(e,t,r,n)=>{ke.includes(e)&&u();const i=m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.I;return w=t,b=e,M=r,T=n,new i};var N,R;if(o.Window=U,o.name=name+a,je(o,O,E),(e=>{e.NodeList=j(oe,"NodeList")})(o),Je(o,E),ve(o,E,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=j(class extends t{now(){return performance.now()}},r)})(o,E,"Performance"),((e,t)=>{const r="customElements",n=new Map;e[r]={define(i,s,o){n.set(i,s),t[i.toUpperCase()]=s;const a=[s.name,s.observedAttributes];he(e,[r,"define"],[i,a,o])},get:t=>n.get(t)||he(e,[r,"get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():he(e,[r,"whenDefined"],[t]),upgrade:t=>he(e,[r,"upgrade"],[t])}})(o,m),p.v.map((([e,t,n,i,l])=>{const c=et[e]?q:"EventTarget"===t?K:"Object"===t?E:o[t],$=o[e]=j(12===i?class extends E{constructor(...t){super(),ge(this,e,t)}}:o[e]||class extends c{},e);l&&(m[l]=$),n.map((([e,t,n])=>{e in $.prototype||e in c.prototype||("string"==typeof t?k($,e,{get(){if(!B(this,e)){const n=this[r],i=[...this[s],e],l=o[t];l&&z(this,e,new l(a,n,i))}return F(this,e)},set(t){z(this,e,t)}}):5===t?_($,e,(function(...t){return he(this,[e],t)})):t>0&&(void 0!==n?_($,e,n):k($,e,{get(){return ue(this,[e])},set(t){return pe(this,[e],t)}})))}))})),v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete U.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),De.map((e=>W(o,e,{get:()=>(u(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),Be(o.Element,o.HTMLElement),_e(o.Document,O,f),N=o.DocumentFragment,X(N,11),Z(N,I),Fe(o.HTMLAnchorElement,O),R=o.HTMLFormElement,D(R,{}),G(R,"elements"),ze(o.HTMLIFrameElement),Ae(o.HTMLScriptElement,O),Ge(o.SVGGraphicsElement),Ue(o.HTMLHeadElement,O),Ue(o.HTMLBodyElement,O),((e,t)=>{D(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(o.HTMLHtmlElement,O),Se(o,"CSSStyleSheet"),X(o.Comment,8),X(o.DocumentType,10),Object.assign(O,{V:a,J:l,U:new Proxy(o,{get:(e,t)=>{var r;if("string"!=typeof t||isNaN(t))return(null===(r=p.i.mainWindowAccessors)||void 0===r?void 0:r.includes(t))?ue(this,[t]):e[t];{let e=H()[t];return e?e.U:void 0}},has:()=>!0}),n:y("#document",a+".d"),o:y("HTML",a+".e"),s:y("HEAD",a+".h"),e:y("BODY",a+".b"),E:x,T:$,A:L,B:C,k:y}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),fe(o,"localStorage",h,L,O),fe(o,"sessionStorage",g,L,O),L||(o.indexeddb=void 0),d)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,r,n)=>{!1!==O.$propagateHistoryChange$&&e(t,r,n)},o.history.replaceState=(e,r,n)=>{!1!==O.$propagateHistoryChange$&&t(e,r,n)}}o.Worker=void 0}get body(){return O.e}get document(){return O.n}get documentElement(){return O.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(Le(O,e,"fetch"),t)}get frames(){return O.U}get frameElement(){return C?null:V(l,a,"IFRAME")}get globalThis(){return O.U}get head(){return O.s}get length(){return H().length}get location(){return x}set location(e){x.href=e+""}get Image(){return Re(O)}get navigator(){return(e=>{const t={sendBeacon:(t,r)=>{try{return fetch(Le(e,t,null),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(let e in navigator)t[e]=navigator[e];return new Proxy(t,{set:(e,t,r)=>(navigator[t]=r,!0),get:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)?t[r]:ue(e.U,["navigator",r])})})(O)}get origin(){return x.origin}set origin(e){}get parent(){for(let e in m)if(m[e].V===l)return m[e].U;return O.U}postMessage(...e){m[e[0]]&&(R(u)>50&&u.splice(0,5),u.push({V:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),he(this,["postMessage"],e,3)}get self(){return O.U}get top(){for(let e in m)if(m[e].B)return m[e].U;return O.U}get window(){return O.U}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=j(class extends e{open(...e){e[1]=Le(O,e[1],"xhr"),super.open(...e)}set withCredentials(e){}toString(){return t}},P(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),q=class extends E{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>ue(e,[t]),set:(e,t,r)=>(pe(e,[t],r),!0)})}},K=class extends E{};return N.map((e=>K.prototype[e]=function(...t){return he(this,[e],t,2)})),G(U,"devicePixelRatio"),J(U),Y(U,["getComputedStyle"]),new U,O},et={DOMStringMap:1,NamedNodeMap:1},tt=({V:e,J:t,S:r,T:n},i,s)=>(m[e]||(m[e]=Qe(e,t,r,n,i,s)),p.K([7,e]),m[e]),rt=[],nt=t=>{const r=t.data,n=r[0],i=r[1];if(p.x)if(7===n)(async e=>{let t,r=e.V,n=e.w,i=V(r,n,"SCRIPT"),s=e.j,o=e.S,a=e.H,l="",c=m[r],$=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(o)try{if(o=xe(c,o,"script")+"",z(i,4,o),t=await fetch(o),t.ok){let e=t.headers.get("content-type");$.some((t=>{var r,n,i;return null===(i=null===(r=null==e?void 0:e.toLowerCase)||void 0===r?void 0:(n=r.call(e)).includes)||void 0===i?void 0:i.call(n,t)}))&&(s=await t.text(),c.l=n,Ee(c,s,a||o)),Ne(i,"load")}else l=t.statusText,Ne(i,"error")}catch(e){console.error(e),l=String(e.stack||e),Ne(i,"error")}else s&&(l=Te(c,n,s,0,l));c.l="",p.K([6,r,n,l])})(i);else if(9===n)(({V:e,w:t,L:r,R:n,b:i})=>{if($[r])try{$[r].apply(re(e,t,[],n),re(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===n)(({V:e,q:t,b:r})=>{try{let n=m[e].U,i=0,s=R(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,re(null,e,[],r))}catch(e){console.error(e)}})(i);else if(5===n)tt(i);else if(8===n)m[i].x=1,m[i].y=0;else if(14===n)m[i].T=r[2];else if(13===n){const e=i.V,t=m[e];t.E.href=i.url,function(e,t,r){const n=t.U.history;switch(r.type){case 0:t.$propagateHistoryChange$=!1;try{n.pushState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{n.replaceState(r.state,"",r.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.V,t,i)}else 15===n&&((e,t,r,n,i)=>{const s=V(t,r);s&&"function"==typeof s[n]&&s[n].apply(s,i)})(...r);else 1===n?((t=>{const r=p.i=JSON.parse(t.i),n=t.I;p.t=importScripts.bind(e),p.v=t.v,p.C=t.C,p.I=n,p.K=postMessage.bind(e),p.P=t.P,h.set(n,t.D),g.set(n,t.O),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,v("resolveUrl,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())}))})(i),p.K([2])):3===n?(p.v=[...p.v,...i],p.x=1,p.K([4]),[...rt].map(nt),rt.length=0):rt.push(t)};e.onmessage=nt,postMessage([0])})(self);\\n\'],{type:"text/javascript"})),{name:"Partytown 🎉"}),G.onmessage=t=>{const r=t.data;12===r[0]?P(G,r[1]):e(G,r)},S.addEventListener("pt1",(e=>D(G,v(e.detail.frameElement),e.detail))))}))})(window);\n<\/script></head></html>')) : s.endsWith("proxytown") && n.respondWith((n => new Promise((async i => {
        const s = await n.clone().json(),
            o = await (r => new Promise((async n => {
                const i = [...await self.clients.matchAll()].sort(((e, t) => e.url > t.url ? -1 : e.url < t.url ? 1 : 0))[0];
                if (i) {
                    const s = [n, setTimeout((() => {
                        e.delete(r.F), n(t(r, "Timeout"))
                    }), 1e4)];
                    e.set(r.F, s), i.postMessage(r)
                } else n(t(r, "NoParty"))
            })))(s);
        i(r(JSON.stringify(o), "application/json"))
    })))(i))
};