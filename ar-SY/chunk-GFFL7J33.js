import{a as r,b as j,d as E,f as L,i as w,j as N}from"./chunk-RGXIKMKC.js";import"./chunk-VRCSACJH.js";import"./chunk-GU4WFXGT.js";import{a}from"./chunk-5SSCGDFC.js";import"./chunk-BNSJPKLO.js";import{k as I}from"./chunk-55JERGAK.js";import"./chunk-YYI2KTIZ.js";import{b as s}from"./chunk-VSNS76N3.js";import"./chunk-RMS73U75.js";import{d as C,g as T}from"./chunk-GYDCMUMI.js";import{v as D}from"./chunk-VAFOXX63.js";import{c as _}from"./chunk-W4UR2Y35.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c as F}from"./chunk-HXWKRRDN.js";import"./chunk-QBI5CVQV.js";import{s as z,t as v}from"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{e as M}from"./chunk-UR27RSXA.js";import"./chunk-SUZUBBLM.js";import"./chunk-PPOSM6EZ.js";import"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Cb as c,Db as l,Eb as g,I as f,Qb as u,ba as S,db as p,eb as d,ec as y,ka as h,la as b,sb as m}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";var A=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.mlabService=t,this.title=F.specimenTypes,this.dataSource=new E,this.dataSource.columnDefs.push(r.uuid("id"),r.string("name"),r.string("latinName"),r.string("abbreviation"),r.date("createdAt",!1),r.date("updatedAt",!1),j.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(_(this.dataSource.indicator),f(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(d(C),d(a))},e.\u0275cmp=h({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[y([a])],decls:3,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],[3,"stateEnabled","dataSource","update"]],template:function(t,n){t&1&&(g(0,"sz-ui-header-info",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),l(),c(2,"sz-ui-table",2),u("update",function(){return n.get()}),l()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[w,L,s],encapsulation:2});let i=e;return i})();var ae=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({providers:[a],imports:[z,v,M.forChild([{path:"",component:A}]),T,N,D,I,s]});let i=e;return i})();export{ae as SpecimenTypesModule};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
