import{a as k}from"./chunk-WYBBP4YX.js";import{a as l}from"./chunk-IS3QRY5O.js";import{a,b as L,d as R,f as B,i as $,j}from"./chunk-J6NX7L25.js";import"./chunk-Z6XXBGUI.js";import"./chunk-EFQO6WLH.js";import"./chunk-5JNMFO5G.js";import{i as F,k as E}from"./chunk-XDJM4TLA.js";import"./chunk-7Q2KUHGS.js";import{a as d}from"./chunk-VQTN6R5P.js";import{h as S}from"./chunk-KETVIBDN.js";import{d as z,g as v}from"./chunk-GN22G4SF.js";import"./chunk-DZX2PQPV.js";import"./chunk-ETC3GIY7.js";import{c as A}from"./chunk-NBT2Y5AZ.js";import"./chunk-TFVYCVZE.js";import"./chunk-LZMFVM2C.js";import{c as D}from"./chunk-IOIYKD5G.js";import"./chunk-6IO4H6KH.js";import"./chunk-UL3PDKVQ.js";import"./chunk-MDSDK5SE.js";import{c as N,e as M}from"./chunk-LNRIX3KX.js";import"./chunk-LX4YC2JA.js";import{ha as b,ia as O,ka as y}from"./chunk-4SVPOG47.js";import"./chunk-UOFFTEPS.js";import{Db as p,Nb as s,Ob as f,Pb as g,Zb as T,_b as c,hb as u,ib as m,ka as _,pc as I,ua as C,va as h}from"./chunk-RFNNLBRH.js";var G=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.sntiService=i,this.router=o,this.title=D.notifications,this.dataSource=new R(),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",n=>`/snti/notifications/${n.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),L.menu([S.edit(n=>this.openSaveComponent(n)),S.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(k,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(t){this.dialog.open(F,{data:E.delete(this.sntiService.notifications.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(A(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(m(z),m(l),m(N));},e.ɵcmp=C({type:e,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(g(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),s(2,"button",3),c("click",function(){return o.openSaveComponent();}),s(3,"span"),T(4,0),f()()(),s(5,"sz-ui-table",4),c("update",function(){return o.get();}),f()),i&2&&(p("title",o.title),u(),p("dataSource",o.dataSource),u(4),p("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[O,$,B,d],encapsulation:2});let r=e;return r;})();var lt=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=h({type:e}),e.ɵinj=_({providers:[l],imports:[M.forChild([{path:"",component:G}]),v,y,j,d,b]});let r=e;return r;})();export{lt as NotificationsModule};/**i18n:d5f080a533d2536b5185f7460d22416f9e1e4eff78d50a220d9f419171a66456*/