import{a as c}from"./chunk-FEFFYUZX.js";import{a,d as j,f as I,i as A,j as E}from"./chunk-7YC3FKFX.js";import"./chunk-U2NYA4TJ.js";import"./chunk-UKNNB4C6.js";import"./chunk-UBJFLYRY.js";import"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as p}from"./chunk-6MMOYJEJ.js";import"./chunk-QT6JCYGS.js";import{d as T,g as _}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import"./chunk-UCRC6V5J.js";import{c as D}from"./chunk-5WJVC7PV.js";import"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import{c as m,d as F}from"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import"./chunk-EIWC7QFZ.js";import"./chunk-22G3BWVW.js";import{c as y,e as C}from"./chunk-L6HNREY7.js";import"./chunk-6YPHC773.js";import{ha as M,ka as N}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Db as s,Nb as d,Ob as f,Pb as v,_b as S,hb as l,ib as n,ka as h,pc as b,ua as g,va as z}from"./chunk-XPH4NMLC.js";var w=(()=>{let t=class t{constructor(o,e,r){this.dialog=o,this.sntiService=e,this.router=r,this.title=m.messages,this.dataSource=new j(["-createdAt"]),this.dataSource.columnDefs.push(a.uuid("id"),a.date("createdAt").setStacked(a.enum("notificationType").setName(m.type).setValueGetter(u=>F(u.notificationType)).setValueClassFontSmall()),a.number("recipientsCount").setName(m.recipients)),this.get()}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};t.\u0275fac=function(e){return new(e||t)(n(T),n(c),n(y))},t.\u0275cmp=g({type:t,selectors:[["sz-mgmt-notification-messages"]],features:[b([])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(e,r){e&1&&(v(0,"sz-ui-app-bar",0),d(1,"sz-ui-table-search-filter",1),S("changed",function(){return r.get()}),f(),d(2,"sz-ui-table",2),S("update",function(){return r.get()}),f()),e&2&&(s("title",r.title),l(),s("dataSource",r.dataSource),l(),s("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[A,I,p],encapsulation:2});let i=t;return i})();var et=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=z({type:t}),t.\u0275inj=h({providers:[c],imports:[C.forChild([{path:"",component:w}]),_,N,E,p,M]});let i=t;return i})();export{et as MessagesModule};
/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/