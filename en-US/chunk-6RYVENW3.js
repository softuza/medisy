import{a as G,b as r}from"./chunk-M2R7K5VQ.js";import{h as D}from"./chunk-EIWC7QFZ.js";import{ha as F,ia as V,ja as W,la as B}from"./chunk-IRR6XRRV.js";import{k as z,o as I}from"./chunk-TWGSABWX.js";import{D as C,Da as w,Db as S,Ea as E,Ib as m,M as _,Nb as p,O as x,Ob as c,Pb as T,T as h,Tb as k,U as b,_b as O,ac as l,ba as y,hb as a,jc as f,kc as u,lc as P,qc as A,t as g,tb as v,ua as M,zb as d}from"./chunk-XPH4NMLC.js";function N(t,e){if(t&1&&(p(0,"mat-icon"),f(1),c()),t&2){let i=l(2);a(),u(i.action.icon)}}function U(t,e){if(t&1&&f(0),t&2){let i=l(2);P(" ",i.action.label," ")}}function q(t,e){if(t&1){let i=k();p(0,"button",4),O("click",function(){w(i);let o=l();return E(o.actionClick())}),d(1,N,2,1,"mat-icon")(2,U,1,1),c()}if(t&2){let i=l();a(),m(1,i.action.icon?1:-1),a(),m(2,i.action.label?2:-1)}}var it=(()=>{let e=class e{constructor(){this.type=r.Error,this.visible=v(!1)}set alert(n){if(!n){this.visible.set(!1);return}typeof n=="string"?(this.message=n,this.type=r.Error):(this.message=n.message,this.type=n.type,this.action=n.action,n.timeout&&(this.timer=window.setTimeout(()=>{this.timer=void 0,this.visible.set(!1)},n.timeout))),this.visible.set(!0)}ngOnDestroy(){this.timer&&clearTimeout(this.timer)}actionClick(){this.action&&this.action.action()}getClass(){switch(this.type){case r.Error:return"alert-error";case r.Success:return"alert-success";case r.Info:return"alert-info";case r.Warning:return"alert-warning";default:return"alert-error"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=M({type:e,selectors:[["sz-ui-alert"]],inputs:{alert:"alert"},standalone:!0,features:[A],decls:5,vars:4,consts:[[1,"container","tw-mt-2","tw-mb-2",3,"ngClass"],[1,"tw-m-8"],[1,"spacer"],["mat-button","",1,"tw-m-8"],["mat-button","",1,"tw-m-8",3,"click"]],template:function(o,s){o&1&&(p(0,"div",0)(1,"div",1),f(2),c(),T(3,"span",2),d(4,q,3,2,"button",3),c()),o&2&&(S("ngClass",s.getClass())("@slide",s.visible()),a(2),u(s.message),a(2),m(4,s.action?4:-1))},dependencies:[I,z,B,W,V,F],styles:[".container[_ngcontent-%COMP%], .alert-warning[_ngcontent-%COMP%], .alert-info[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%], .alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;color:#fff;text-align:center;border-radius:4px}.alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#ee6002}"],data:{animation:[G()]}});let t=e;return t})();var j=t=>e=>C(()=>(t(),e)),lt=t=>e=>e.pipe(j(()=>t.set(!0)),b(()=>t.set(!1))),mt=t=>e=>e.pipe(y(null),x(t),h()),pt=(t,e=void 0)=>i=>i.pipe(j(()=>{t&&t.set(void 0)}),_(n=>{let o="";return n.error instanceof ErrorEvent?o=n.error.message:n&&(n.error?o=n.error.message:o=n.statusText),t&&t.set({message:e||o,type:r.Error}),g(()=>o)}));function H(t){return t&&!t.valid?(Object.keys(t.controls).forEach(e=>{let i=t?.get(e);i instanceof D&&H(i),i?.markAsTouched({onlySelf:!0})}),!1):!0}export{it as a,lt as b,mt as c,pt as d,H as e};
/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/
