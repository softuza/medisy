import{a as r,b as A,d as E,f as j,i as L,j as w}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{a}from"./chunk-DAMCUIWD.js";import{j as D}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import{a as s}from"./chunk-BYTIRDSX.js";import"./chunk-POKYVS3O.js";import{d as M,g as C}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{t as F}from"./chunk-PX7G627R.js";import{c as T}from"./chunk-5QGBLY3O.js";import"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as _}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import{s as y,t as z}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{e as v}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import"./chunk-BC4NCYN6.js";import"./chunk-UQI5C6OQ.js";import{Db as m,Nb as d,Ob as l,Pb as h,_b as u,hb as p,ib as c,ka as f,pc as g,ua as S,va as b}from"./chunk-R6OEYYKK.js";var B=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.mlabService=t,this.title=_.specimen_types,this.dataSource=new E,this.dataSource.columnDefs.push(r.uuid("id"),r.string("nameEn"),r.string("nameAr"),r.string("abbreviation"),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),A.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(T(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(c(M),c(a))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[g([a])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(t,n){t&1&&(h(0,"sz-ui-app-bar",0),d(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),l(),d(2,"sz-ui-table",2),u("update",function(){return n.get()}),l()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[L,j,s],encapsulation:2});let i=e;return i})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=f({providers:[a],imports:[y,z,v.forChild([{path:"",component:B}]),C,w,F,D,s]});let i=e;return i})();export{oe as SpecimenTypesModule};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/