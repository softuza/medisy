import{a as N,b as P,c as O,d as B,e as A,f as $,g as H,h as q}from"./chunk-FWZEH63T.js";import{A as Q,z as L}from"./chunk-HA3OCK63.js";import{p as G,q as J}from"./chunk-QFHU2GEW.js";import{Ja as K,o as j}from"./chunk-T2UVNK6V.js";import{Bb as w,Cb as D,Db as F,Eb as a,Fb as c,Gb as _,Kb as E,Sb as S,Ub as u,Vb as g,Wb as d,bb as z,dc as l,ec as f,fb as r,fc as V,jc as C,na as m,qb as h,sa as I,ta as y,tb as k,ub as M,zb as p}from"./chunk-T2ST7G6M.js";var tt=["*"],pt=(()=>{let e=class e{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(o){o&&(this.animate(this.oldValue,o),this.oldValue=o)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(o,i){let n=i-o,x=50,v=Math.abs(Math.floor(this.duration/n));v=Math.max(v,x);let X=new Date().getTime()+this.duration,b=()=>{let Y=new Date().getTime(),Z=Math.max((X-Y)/this.duration,0),T=Math.round(i-Z*n);this.currentValue=T,Math.round(T)===Math.round(i)&&clearInterval(this.timer)};this.timer=setInterval(b,v),b()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[C],ngContentSelectors:tt,decls:3,vars:1,template:function(i,n){i&1&&(g(),a(0,"span"),l(1),d(2),c()),i&2&&(r(),V(" ",n.currentValue," "))},encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{hasIcon(){return this.icon!==void 0}getIcon(){return typeof this.icon=="string"?this.icon:this.icon?.name}getClass(){return typeof this.icon=="string"||this.icon?.class===void 0?"material-symbols-outlined":this.icon?.class}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[C],decls:2,vars:3,consts:[[3,"className"]],template:function(i,n){i&1&&(a(0,"span",0),l(1),c()),i&2&&(M("className",n.getClass()),k("data-icon",n.getIcon()),r(),f(n.getIcon()))},dependencies:[j],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]});let t=e;return t})();function et(t,e){if(t&1&&(a(0,"mat-card-subtitle"),l(1),c()),t&2){let s=u();r(),f(s.card.subtitle)}}function it(t,e){t&1&&(a(0,"mat-card-subtitle"),d(1,2),c())}function nt(t,e){if(t&1&&(a(0,"mat-card-title"),l(1),c()),t&2){let s=u();r(),f(s.card.title)}}function ot(t,e){t&1&&(a(0,"mat-card-title"),d(1,3),c())}function at(t,e){if(t&1&&_(0,"sz-ui-icon",3),t&2){let s=u();M("icon",s.card.icon)}}function rt(t,e){if(t&1){let s=E();a(0,"button",8),S("click",function(){let n=I(s).$implicit,x=u(2);return y(x.cardActionClick(n))}),a(1,"strong"),l(2),c()()}if(t&2){let s=e.$implicit;r(2),f(s.title)}}function ct(t,e){if(t&1&&(_(0,"mat-divider",6),a(1,"mat-card-actions",7),D(2,rt,3,1,"button",9,w),c()),t&2){let s=u();r(2),F(s.card.actions)}}function st(t,e){t&1&&_(0,"mat-progress-bar",5)}var lt=[[["","content",""]],[["","footer",""]],[["","subtitle",""]],[["","title",""]]],dt=["[content]","[footer]","[subtitle]","[title]"],Vt=(()=>{let e=class e{constructor(){this.indicator=z(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(o){this.card&&o&&o.clickFn&&o?.clickFn()}hasIcon(){return this.card.icon!==void 0}hasActions(){return this.card.actions!=null&&this.card.actions.length>0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[C],ngContentSelectors:dt,decls:14,vars:5,consts:[[1,"card"],[1,"tw-pb-2",2,"cursor","pointer",3,"click"],[1,"spacer"],[3,"icon"],[1,"tw-mb-2"],["mode","indeterminate"],[1,"tw-pl-2","tw-pr-2"],[1,"tw-ml-2","tw-mr-2"],["mat-button","",3,"click"],["mat-button",""]],template:function(i,n){i&1&&(g(lt),a(0,"mat-card",0)(1,"mat-card-header",1),S("click",function(){return n.cardClick()}),h(2,et,2,1,"mat-card-subtitle")(3,it,2,0)(4,nt,2,1,"mat-card-title")(5,ot,2,0),_(6,"span",2),h(7,at,1,1,"sz-ui-icon",3),c(),a(8,"mat-card-content",4),d(9),c(),h(10,ct,4,0),a(11,"mat-card-footer"),d(12,1),h(13,st,1,0,"mat-progress-bar",5),c()()),i&2&&(r(2),p(2,n.card.subtitle?2:3),r(2),p(4,n.card.title?4:5),r(3),p(7,n.hasIcon()?7:-1),r(3),p(10,n.hasActions()?10:-1),r(3),p(13,n.indicator()?13:-1))},dependencies:[q,N,A,O,H,$,B,P,K,J,G,Q,L,U],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]});let t=e;return t})();var W=class{static action(e,s){return{title:e,clickFn:s}}};export{pt as a,Vt as b,W as c};
/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/
