import{a as k}from"./chunk-4VYC7LC7.js";import{a as l}from"./chunk-R2H6M7M7.js";import{a,b as L,d as R,f as B,i as $,j}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{i as F,k as E}from"./chunk-SB426TL2.js";import"./chunk-PP3NP7HU.js";import{a as d}from"./chunk-W3O4IPE3.js";import{h as S}from"./chunk-EKINQSBT.js";import{d as z,g as v}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import"./chunk-6LY23KCH.js";import{c as A}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as D}from"./chunk-Y57UOOVT.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as N,e as M}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as b,ia as O,ka as y}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as s,Jb as f,Kb as g,Ub as T,Vb as c,ab as u,bb as m,ea as _,kc as I,na as C,oa as h,yb as p}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var G=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.sntiService=i,this.router=o,this.title=D.notifications,this.dataSource=new R(),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",n=>`/snti/notifications/${n.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),L.menu([S.edit(n=>this.openSaveComponent(n)),S.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(k,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(t){this.dialog.open(F,{data:E.delete(this.sntiService.notifications.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(A(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(m(z),m(l),m(N));},e.ɵcmp=C({type:e,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(g(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),s(2,"button",3),c("click",function(){return o.openSaveComponent();}),s(3,"span"),T(4,0),f()()(),s(5,"sz-ui-table",4),c("update",function(){return o.get();}),f()),i&2&&(p("title",o.title),u(),p("dataSource",o.dataSource),u(4),p("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[O,$,B,d],encapsulation:2});let r=e;return r;})();var lt=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=h({type:e}),e.ɵinj=_({providers:[l],imports:[M.forChild([{path:"",component:G}]),v,y,j,d,b]});let r=e;return r;})();export{lt as NotificationsModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/