import{f as R}from"./chunk-QT6JCYGS.js";import{a as B,c as E,e as A}from"./chunk-L6HNREY7.js";import{ga as T,ha as j,ja as y,ka as F}from"./chunk-QHXZELMZ.js";import{i as z}from"./chunk-TWGSABWX.js";import{Da as g,Db as S,Ea as h,Ib as c,Ma as u,Nb as o,Ob as l,Pb as b,Tb as w,_b as k,ac as s,bc as I,cc as _,hb as a,ib as d,jc as x,kc as v,qc as M,ta as m,ua as C,zb as f}from"./chunk-XPH4NMLC.js";var D=[[["","start",""]],[["","end",""]]],V=["[start]","[end]"];function L(t,e){if(t&1){let i=w();o(0,"button",6),k("click",function(){g(i);let n=s();return h(n.backClicked())}),o(1,"mat-icon"),x(2,"arrow_forward"),l()()}}function N(t,e){if(t&1&&(o(0,"h5",2),x(1),l()),t&2){let i=s();a(),v(i.title())}}function O(t,e){if(t&1&&(o(0,"span",3),x(1),l()),t&2){let i=s();a(),v(i.subtitle())}}function P(t,e){if(t&1&&b(0,"sz-ui-menu",5),t&2){let i=s();S("menu",i.menu)("data",i.data)}}var it=(()=>{let e=class e{constructor(p,n,r){this.location=p,this.route=n,this.router=r,this.title=u(null),this.subtitle=u(null),this.backEnabled=u(!1),this.menu=null,this.data=null}backClicked(){this.router.getCurrentNavigation()?.previousNavigation?this.location.back():this.router.navigate([".."],{relativeTo:this.route})}};e.\u0275fac=function(n){return new(n||e)(d(z),d(B),d(E))},e.\u0275cmp=C({type:e,selectors:[["sz-ui-app-bar"]],inputs:{title:[m.SignalBased,"title"],subtitle:[m.SignalBased,"subtitle"],backEnabled:[m.SignalBased,"backEnabled"],menu:"menu",data:"data"},standalone:!0,features:[M],ngContentSelectors:V,decls:10,vars:4,consts:[[1,"container","sz-app-bar-basic"],["mat-icon-button","",1,"tw-me-1"],[1,"tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[3,"menu","data"],["mat-icon-button","",1,"tw-me-1",3,"click"]],template:function(n,r){n&1&&(I(D),o(0,"div",0),f(1,L,3,0,"button",1),o(2,"div"),f(3,N,2,1,"h5",2)(4,O,2,1,"span",3),_(5),l(),b(6,"span",4),o(7,"div"),_(8,1),f(9,P,1,2,"sz-ui-menu",5),l()()),n&2&&(a(),c(1,r.backEnabled()?1:-1),a(2),c(3,r.title()?3:-1),a(),c(4,r.subtitle()?4:-1),a(5),c(9,r.menu?9:-1))},dependencies:[A,R,j,T,F,y],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;border-radius:4px}.sz-app-bar-basic[_ngcontent-%COMP%]{margin:4px 0 8px;height:64px;padding:8px}"]});let t=e;return t})();export{it as a};
/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/