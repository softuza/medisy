import{a as $,b,c as V,d as B}from"./chunk-E7VUVWEF.js";import{a as f}from"./chunk-XJ54ZRFR.js";import{Ra as h,Sa as z,Ua as E,Va as w}from"./chunk-P44VDH7R.js";import{Ab as a,Bb as m,Cb as y,Gb as I,Pb as g,Rb as c,Vb as k,Wb as s,Xb as _,ac as D,eb as r,ma as x,pb as v,ra as C,sa as M,vb as d,wb as p,xb as T,yb as F,zb as S}from"./chunk-3CXVAQY6.js";var l=function(t){return t[t.Item=0]="Item",t[t.Divider=1]="Divider",t}(l||{});function A(t,e){if(t&1&&(a(0,"mat-icon"),s(1),m()),t&2){let i=c();r(1),_(i.menu.icon)}}function G(t,e){if(t&1&&(a(0,"mat-icon"),s(1),m()),t&2){let i=c(2).$implicit;r(1),_(i.icon)}}function H(t,e){if(t&1&&(a(0,"span"),s(1),m()),t&2){let i=c(2).$implicit;r(1),_(i.title)}}function J(t,e){if(t&1){let i=I();a(0,"button",2),g("click",function(){C(i);let o=c().$implicit,u=c();return M(u.click(o))}),d(1,G,2,1,"mat-icon")(2,H,2,1,"span"),m()}if(t&2){let i=c().$implicit;r(1),p(1,i.icon?1:-1),r(1),p(2,i.title?2:-1)}}function K(t,e){t&1&&y(0,"mat-divider")}function L(t,e){if(t&1&&(a(0,"div"),d(1,J,3,2)(2,K,1,0),m()),t&2){let i=e.$implicit,n=c(),o;r(1),p(1,(o=i.type)===n.menuItemType.Item?1:o===n.menuItemType.Divider?2:-1)}}var tt=(()=>{let e=class e{constructor(){this.menuItemType=l}click(n){if(n.clickFn){let o=this.index??this.menu.items?.indexOf(n)??-1;n.clickFn(this.data,o)}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=x({type:e,selectors:[["sz-ui-menu"]],inputs:{menu:"menu",data:"data",index:"index"},standalone:!0,features:[D],decls:6,vars:2,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"]],template:function(o,u){if(o&1&&(a(0,"button",0),d(1,A,2,1,"mat-icon"),m(),a(2,"mat-menu",null,1),F(4,L,3,1,"div",null,T),m()),o&2){let q=k(3);v("matMenuTriggerFor",q),r(1),p(1,u.menu.icon?1:-1),S(4,u.menu.items)}},dependencies:[B,b,$,V,w,E,z,h],encapsulation:2});let t=e;return t})();var O=class t{static edit(e){return t.default(f.edit,"edit",e)}static delete(e){return t.default(f.delete,"trash",e)}static print(e){return t.default(f.print,"print",e)}static default(e,i,n){return{type:l.Item,title:e,icon:i,clickFn:n}}static divider(){return{type:l.Divider}}};var j=class{static more(e){return{icon:"more_vert",items:e}}};export{tt as a,O as b,j as c};
/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/
