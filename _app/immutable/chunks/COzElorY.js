import{a7 as E,a8 as b,a9 as I,F as R,aa as W,I as Y,ab as j,ac as B,ad as L,a3 as C,K as $,ae as F,af as T,O as w,N as A,J,c as p,ag as K,ah as z,ai as G,aj as Q,ak as U,al as X,a2 as Z,a as x,q as rr,f as tr,h as N,s as er}from"./XM1Oq7sN.js";import{b as ar}from"./C-8i25VV.js";const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}let D=!1;function ir(){D||(D=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function P(r){var t=I,a=R;E(null),b(null);try{return r()}finally{E(t),b(a)}}function lr(r,t,a,i=a){r.addEventListener(t,()=>P(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i(!0)}:r.__on_r=()=>i(!0),ir()}const V=new Set,S=new Set;function or(r,t,a,i={}){function n(e){if(i.capture||g.call(t,e),!e.cancelBubble)return P(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?B(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function _r(r,t,a,i,n){var e={capture:i,passive:n},u=or(r,t,a,e);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(r,u,e)})}function dr(r){for(var t=0;t<r.length;t++)V.add(r[t]);for(var a of S)a(r)}function g(r){var k;var t=this,a=t.ownerDocument,i=r.type,n=((k=r.composedPath)==null?void 0:k.call(r))||[],e=n[0]||r.target,u=0,d=r.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=n.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=n[u]||r.target,e!==t){W(r,"currentTarget",{configurable:!0,get(){return e||a}});var m=I,f=R;E(null),b(null);try{for(var s,o=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var _=e["__"+i];if(_!=null&&(!e.disabled||r.target===e))if(Y(_)){var[H,...M]=_;H.apply(e,[r,...M])}else _.call(e,r)}catch(y){s?o.push(y):s=y}if(r.cancelBubble||c===t||c===null)break;e=c}if(s){for(let y of o)queueMicrotask(()=>{throw y});throw s}}finally{r.__root=t,delete r.currentTarget,E(m),b(f)}}}function hr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function ur(r,t){return q(r,t)}function vr(r,t){L(),t.intro=t.intro??!1;const a=t.target,i=N,n=p;try{for(var e=C(a);e&&(e.nodeType!==8||e.data!==$);)e=F(e);if(!e)throw T;w(!0),A(e),J();const u=q(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==K)throw z(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&G(),L(),Q(a),w(!1),ur(r,t);throw u}finally{w(i),A(n)}}const v=new Map;function q(r,{target:t,anchor:a,props:i={},events:n,context:e,intro:u=!0}){L();var d=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=sr(o);t.addEventListener(o,g,{passive:c});var _=v.get(o);_===void 0?(document.addEventListener(o,g,{passive:c}),v.set(o,1)):v.set(o,_+1)}}};l(U(V)),S.add(l);var h=void 0,m=X(()=>{var f=a??t.appendChild(Z());return x(()=>{if(e){rr({});var s=tr;s.c=e}n&&(i.$$events=n),N&&ar(f,null),h=r(f,i)||{},N&&(R.nodes_end=p),e&&er()}),()=>{var c;for(var s of d){t.removeEventListener(s,g);var o=v.get(s);--o===0?(document.removeEventListener(s,g),v.delete(s)):v.set(s,o)}S.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return O.set(h,m),h}let O=new WeakMap;function pr(r,t){const a=O.get(r);return a?(O.delete(r),a(t)):Promise.resolve()}export{ir as a,dr as d,_r as e,vr as h,lr as l,ur as m,hr as s,pr as u};
