import{a as k}from"./chunk-KZVMAY57.js";import{a as c}from"./chunk-OIMTWOHD.js";import{a,b as E,d as B,e as L,g as R,j as $,k as j}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import"./chunk-4NTC2VLV.js";import{i as y,k as F}from"./chunk-76IND4GV.js";import{a as d}from"./chunk-ZPKIPVTE.js";import{h as S}from"./chunk-TIEHGEOE.js";import{d as b,g as v}from"./chunk-QCMAXDKX.js";import"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as D}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as N,e as M}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as z,ja as O,la as A}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as s,Kb as f,Lb as g,Vb as T,Wb as l,bb as u,cb as m,ea as _,na as C,nc as I,oa as h,zb as p}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var G=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.sntiService=i,this.router=o,this.title=D.notifications,this.dataSource=new B(),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",n=>`/snti/notifications/${n.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),E.menu([S.edit(n=>this.openSaveComponent(n)),S.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(k,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(t){this.dialog.open(y,{data:F.delete(this.sntiService.notifications.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(L(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(m(b),m(c),m(N));},e.ɵcmp=C({type:e,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,o){i&1&&(g(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),l("changed",function(){return o.get();}),s(2,"button",3),l("click",function(){return o.openSaveComponent();}),s(3,"span"),T(4,0),f()()(),s(5,"sz-ui-table",4),l("update",function(){return o.get();}),f()),i&2&&(p("title",o.title),u(),p("dataSource",o.dataSource),u(4),p("dataSource",o.dataSource));},dependencies:[O,$,R,d],encapsulation:2});let r=e;return r;})();var lt=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=h({type:e}),e.ɵinj=_({providers:[c],imports:[M.forChild([{path:"",component:G}]),v,A,j,d,z]});let r=e;return r;})();export{lt as NotificationsModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/