import{s as h,E as a}from"./index-0737cc36.js";const c=[];function _(o,u=a){let s;const e=new Set;function i(n){if(h(o,n)&&(o=n,s)){const l=!c.length;for(const t of e)t[1](),c.push(t,o);if(l){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}function f(n){i(n(o))}function r(n,l=a){const t=[n,l];return e.add(t),e.size===1&&(s=u(i)||a),n(o),()=>{e.delete(t),e.size===0&&(s(),s=null)}}return{set:i,update:f,subscribe:r}}const m="modulepreload",b={},d="/iframe-wallet-kit/_app/immutable/",g=function(u,s){return!s||s.length===0?u():Promise.all(s.map(e=>{if(e=`${d}${e}`,e in b)return;b[e]=!0;const i=e.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${f}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":m,i||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),i)return new Promise((n,l)=>{r.addEventListener("load",n),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>u())};export{g as _,_ as w};
