import{a as m}from"./chunk-PYOUUVMA.js";import{a as P,c as z,e as D,h as E,j as O}from"./chunk-AILLJ5BU.js";import{c as a,d as i,e as d,g as t,h as r,j as n}from"./chunk-TW5J4YO6.js";import{Ia as w,La as S,k as A,n as Y}from"./chunk-OIZYHDJE.js";import{Eb as b,Jb as x,Kb as f,Lb as C,bb as p,gc as v,ic as M,kb as g,na as u,nc as I,rb as h,yb as y}from"./chunk-GTR6A7KK.js";var $=a("detailExpand",[r("collapsed",t({height:"0px",visibility:"hidden"})),r("expanded",t({height:"*",visibility:"visible"})),n("expanded <=> collapsed",i("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))]);var U=a("fadeOutAnimation",[r("initial",t({opacity:"1"})),r("final",t({opacity:"0"})),n("initial => final",i("200ms ease-in")),n("final => initial",i("200ms ease-out"))]);var W=a("flip3DAnimation",[r("in",t({opacity:"1",transform:"rotateY(0deg)",visibility:"visible"})),r("out",t({opacity:"0",transform:"rotateY(180deg)",visibility:"hidden"})),n("in => out",[d([i(".9s ease-in-out",t({opacity:"0"})),i(".9s ease-in-out",t({visibility:"hidden"})),i(".9s ease-in-out",t({transform:"rotateY(180deg)"}))])]),n("out => in",[d([i(".9s ease-in-out",t({transform:"rotateY(0)"})),i(".9s ease-in-out",t({visibility:"visible"})),i(".9s ease-in-out",t({opacity:"1"}))])])]);var k=(s=64,o=100)=>a("slide",[r("false",t({height:"0px",opacity:"0"})),r("true",t({height:`${s}px`,opacity:"1"})),n("false => true",i(`${o}ms ease-in`)),n("true => false",i(`${o}ms ease-out`))]);function T(s,o){s&1&&C(0,"mat-card-actions")}var ut=(()=>{let o=class o{constructor(){this.timerInterval=0,this.timerIncrement=100,this.timerPercentage=0,this.type=m.Error,this.visible=g(!1)}set alert(e){if(!e){this.visible.set(!1);return}typeof e=="string"?(this.message=e,this.type=m.Error):(this.message=e.message,this.type=e.type,this.actions=e.actions,e.timeout&&e.timeout>0&&this.setTimeout(e.timeout)),this.visible.set(!0)}ngOnDestroy(){this.timer&&clearInterval(this.timer),this.timer=void 0}actionClick(e){e.action?.()}setTimeout(e){e<=0||(this.timerInterval=e,this.timerPercentage=0,this.timer&&clearInterval(this.timer),this.timer=window.setInterval(()=>{this.timerPercentage+=this.timerIncrement/this.timerInterval*100,this.timerPercentage>100&&(this.visible.set(!1),clearInterval(this.timer),this.timer=void 0)},this.timerIncrement))}getClass(){switch(this.type){case m.Error:return"alert-error";case m.Success:return"alert-success";case m.Info:return"alert-info";case m.Warning:return"alert-warning";default:return"alert-error"}}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=u({type:o,selectors:[["sz-ui-alert"]],inputs:{alert:"alert"},standalone:!0,features:[I],decls:4,vars:4,consts:[[1,"tw-mt-1","tw-mb-1",3,"ngClass"]],template:function(l,c){l&1&&(x(0,"mat-card",0)(1,"mat-card-content"),v(2),f(),h(3,T,1,0,"mat-card-actions"),f()),l&2&&(y("ngClass",c.getClass())("@slide",c.visible()),p(2),M(" ",c.message," "),p(),b(c.actions?3:-1))},dependencies:[Y,A,S,E,P,D,z,w,O],styles:[".alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#ee6002}"],data:{animation:[k()]}});let s=o;return s})();export{k as a,ut as b};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
