import{a as p}from"./chunk-KCC6UHD2.js";import{a,d as F,f as j,i as E,j as w}from"./chunk-Y4PXEVQT.js";import"./chunk-3HDGXHIW.js";import"./chunk-75JUXYDU.js";import"./chunk-HPZYOYE3.js";import"./chunk-OMX5NFNR.js";import{b as c}from"./chunk-ABFS4SEB.js";import"./chunk-TOOE4O45.js";import{d as T,g as _}from"./chunk-IZ32KJRN.js";import"./chunk-LMOPJ72O.js";import{c as N}from"./chunk-2AWDEL7N.js";import"./chunk-624ACHJE.js";import"./chunk-M7S7TTRL.js";import{c as m,d as D}from"./chunk-XNWVOXZG.js";import"./chunk-HAIELHQF.js";import"./chunk-4JTOADFE.js";import"./chunk-QQ2344AC.js";import{c as y,e as C}from"./chunk-FA7A5F5K.js";import"./chunk-AXAUKDRF.js";import{c as I}from"./chunk-AYP3BRJS.js";import{ha as M}from"./chunk-HULPMCJY.js";import"./chunk-QECXQAYY.js";import{Cb as s,Mb as l,Nb as f,Ob as v,Zb as S,gb as d,hb as n,ka as h,oc as b,ua as g,va as z}from"./chunk-XJDYJDV7.js";var R=(()=>{let e=class e{constructor(o,t,r){this.dialog=o,this.sntiService=t,this.router=r,this.title=m.messages,this.dataSource=new F(["-createdAt"]),this.dataSource.columnDefs.push(a.uuid("id"),a.date("createdAt",!0).setStacked(a.enum("notificationType").setName(m.type).setValueGetter(u=>D(u.notificationType)).setValueClassFontSmall()),a.number("recipientsCount").setName(m.recipients)),this.get()}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(N(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(n(T),n(p),n(y))},e.\u0275cmp=g({type:e,selectors:[["sz-mgmt-notification-messages"]],features:[b([])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(t,r){t&1&&(v(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),S("changed",function(){return r.get()}),f(),l(2,"sz-ui-table",2),S("update",function(){return r.get()}),f()),t&2&&(s("title",r.title),d(),s("dataSource",r.dataSource),d(),s("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[E,j,c],encapsulation:2});let i=e;return i})();var te=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=z({type:e}),e.\u0275inj=h({providers:[p],imports:[C.forChild([{path:"",component:R}]),_,I,w,c,M]});let i=e;return i})();export{te as MessagesModule};
/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/