import{a as p}from"./chunk-IFWIUAXQ.js";import{a,d as F,f as j,i as E,j as w}from"./chunk-BRAPFLKV.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import"./chunk-WN2NFEA2.js";import"./chunk-6FUK3GWV.js";import{b as c}from"./chunk-XCAJ3ZHI.js";import"./chunk-Q5LDCOCY.js";import{d as T,g as _}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import"./chunk-ZA2UB2XH.js";import{c as N}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{c as m,d as D}from"./chunk-LMCANXRL.js";import"./chunk-AIP5TNUP.js";import"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{c as y,e as C}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ha as M,ka as I}from"./chunk-WG6MZMNK.js";import"./chunk-6DPHD5PI.js";import{Db as s,Nb as l,Ob as f,Pb as v,_b as S,hb as d,ib as n,ka as h,pc as b,ua as g,va as z}from"./chunk-WLX3OMWV.js";var R=(()=>{let e=class e{constructor(o,t,r){this.dialog=o,this.sntiService=t,this.router=r,this.title=m.messages,this.dataSource=new F(["-createdAt"]),this.dataSource.columnDefs.push(a.uuid("id"),a.date("createdAt").setStacked(a.enum("notificationType").setName(m.type).setValueGetter(u=>D(u.notificationType)).setValueClassFontSmall()),a.number("recipientsCount").setName(m.recipients)),this.get()}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(N(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(n(T),n(p),n(y))},e.\u0275cmp=g({type:e,selectors:[["sz-mgmt-notification-messages"]],features:[b([])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(t,r){t&1&&(v(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),S("changed",function(){return r.get()}),f(),l(2,"sz-ui-table",2),S("update",function(){return r.get()}),f()),t&2&&(s("title",r.title),d(),s("dataSource",r.dataSource),d(),s("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[E,j,c],encapsulation:2});let i=e;return i})();var te=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=z({type:e}),e.\u0275inj=h({providers:[p],imports:[C.forChild([{path:"",component:R}]),_,I,w,c,M]});let i=e;return i})();export{te as MessagesModule};
/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/