import{a as c}from"./chunk-4PE74OIY.js";import{h as $}from"./chunk-CAQG4OA2.js";import{c as m,d as o,e as b,g as n,h as s,j as l}from"./chunk-SRJCWGFD.js";import{a as j,c as N}from"./chunk-PPOSM6EZ.js";import{ha as B,ia as G}from"./chunk-RUNZ2J3E.js";import{k as V,o as W}from"./chunk-62NYPPVD.js";import{$a as k,Cb as x,Db as u,E as w,Eb as D,G as M,Ib as P,L as S,M as A,Qb as I,Sb as d,U as E,bc as y,cc as C,db as p,dc as F,hc as U,ka as O,m as _,ob as h,pa as T,qa as Y,sb as z,w as v,xb as g}from"./chunk-34MB7EVY.js";var X=m("detailExpand",[s("collapsed",n({height:"0px",visibility:"hidden"})),s("expanded",n({height:"*",visibility:"visible"})),l("expanded <=> collapsed",o("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))]);var et=m("fadeOutAnimation",[s("initial",n({opacity:"1"})),s("final",n({opacity:"0"})),l("initial => final",o("200ms ease-in")),l("final => initial",o("200ms ease-out"))]);var ot=m("flip3DAnimation",[s("in",n({opacity:"1",transform:"rotateY(0deg)",visibility:"visible"})),s("out",n({opacity:"0",transform:"rotateY(180deg)",visibility:"hidden"})),l("in => out",[b([o(".9s ease-in-out",n({opacity:"0"})),o(".9s ease-in-out",n({visibility:"hidden"})),o(".9s ease-in-out",n({transform:"rotateY(180deg)"}))])]),l("out => in",[b([o(".9s ease-in-out",n({transform:"rotateY(0)"})),o(".9s ease-in-out",n({visibility:"visible"})),o(".9s ease-in-out",n({opacity:"1"}))])])]);var R=(t=64,e=100)=>m("slide",[s("false",n({height:"0px",opacity:"0"})),s("true",n({height:`${t}px`,opacity:"1"})),l("false => true",o(`${e}ms ease-in`)),l("true => false",o(`${e}ms ease-out`))]);function H(t,e){if(t&1&&(x(0,"mat-icon"),y(1),u()),t&2){let r=d(2);p(),C(r.action.icon)}}function J(t,e){if(t&1&&y(0),t&2){let r=d(2);F(" ",r.action.label," ")}}function K(t,e){if(t&1){let r=P();x(0,"button",4),I("click",function(){T(r);let a=d();return Y(a.actionClick())}),h(1,H,2,1,"mat-icon")(2,J,1,1),u()}if(t&2){let r=d();p(),g(1,r.action.icon?1:-1),p(),g(2,r.action.label?2:-1)}}var Tt=(()=>{let e=class e{constructor(){this.type=c.Error,this.visible=k(!1)}set alert(i){if(!i){this.visible.set(!1);return}typeof i=="string"?(this.message=i,this.type=c.Error):(this.message=i.message,this.type=i.type,this.action=i.action,i.timeout&&(this.timer=window.setTimeout(()=>{this.timer=void 0,this.visible.set(!1)},i.timeout))),this.visible.set(!0)}ngOnDestroy(){this.timer&&clearTimeout(this.timer)}actionClick(){this.action&&this.action.action()}getClass(){switch(this.type){case c.Error:return"alert-error";case c.Success:return"alert-success";case c.Info:return"alert-info";case c.Warning:return"alert-warning";default:return"alert-error"}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=O({type:e,selectors:[["sz-ui-alert"]],inputs:{alert:"alert"},standalone:!0,features:[U],decls:5,vars:4,consts:[[1,"container","tw-mt-2","tw-mb-2",3,"ngClass"],[1,"tw-m-8"],[1,"spacer"],["mat-button","","class","tw-m-8"],["mat-button","",1,"tw-m-8",3,"click"]],template:function(a,f){a&1&&(x(0,"div",0)(1,"div",1),y(2),u(),D(3,"span",2),h(4,K,3,2,"button",3),u()),a&2&&(z("ngClass",f.getClass())("@slide",f.visible()),p(2),C(f.message),p(2),g(4,f.action?4:-1))},dependencies:[W,V,N,j,G,B],styles:[".container[_ngcontent-%COMP%], .alert-warning[_ngcontent-%COMP%], .alert-info[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%], .alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;color:#fff;text-align:center;border-radius:4px}.alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#ee6002}"],data:{animation:[R()]}});let t=e;return t})();var q=t=>e=>v(()=>(t(),e)),It=t=>e=>e.pipe(q(()=>t.set(!0)),A(()=>t.set(!1))),Ft=t=>e=>e.pipe(E(null),M(t),S()),Ut=(t,e=void 0)=>r=>r.pipe(q(()=>{t&&t.set(void 0)}),w(i=>{let a="";return i.error instanceof ErrorEvent?a=i.error.message:i&&(i.error?a=i.error.message:a=i.statusText),t&&t.set({message:e||a,type:c.Error}),_(()=>a)}));function L(t){return t&&!t.valid?(Object.keys(t.controls).forEach(e=>{let r=t?.get(e);r instanceof $&&L(r),r?.markAsTouched({onlySelf:!0})}),!1):!0}export{R as a,Tt as b,It as c,Ft as d,Ut as e,L as f};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
