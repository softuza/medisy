import{a as k}from"./chunk-V7TOQYXT.js";import{a as l}from"./chunk-OGGID7T7.js";import{a,b as L,d as R,f as B,i as $,j}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{i as F,k as E}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import{a as d}from"./chunk-BYTIRDSX.js";import{h as S}from"./chunk-POKYVS3O.js";import{d as z,g as v}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import"./chunk-PX7G627R.js";import{c as A}from"./chunk-5QGBLY3O.js";import"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as D}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{c as N,e as M}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{ia as b,ja as O,la as y}from"./chunk-BC4NCYN6.js";import"./chunk-UQI5C6OQ.js";import{Db as p,Nb as s,Ob as f,Pb as g,Zb as T,_b as c,hb as u,ib as m,ka as _,pc as I,ua as C,va as h}from"./chunk-R6OEYYKK.js";var G=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.sntiService=i,this.router=o,this.title=D.notifications,this.dataSource=new R(),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",n=>`/snti/notifications/${n.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),L.menu([S.edit(n=>this.openSaveComponent(n)),S.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(k,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(t){this.dialog.open(F,{data:E.delete(this.sntiService.notifications.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(A(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(m(z),m(l),m(N));},e.ɵcmp=C({type:e,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(g(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),s(2,"button",3),c("click",function(){return o.openSaveComponent();}),s(3,"span"),T(4,0),f()()(),s(5,"sz-ui-table",4),c("update",function(){return o.get();}),f()),i&2&&(p("title",o.title),u(),p("dataSource",o.dataSource),u(4),p("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[O,$,B,d],encapsulation:2});let r=e;return r;})();var lt=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=h({type:e}),e.ɵinj=_({providers:[l],imports:[M.forChild([{path:"",component:G}]),v,y,j,d,b]});let r=e;return r;})();export{lt as NotificationsModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/