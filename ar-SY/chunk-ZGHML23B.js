import{a as r,b as j,d as E,f as L,k as w,l as N}from"./chunk-IVGQ3HZH.js";import"./chunk-HFJZSCN6.js";import"./chunk-XODLCFFB.js";import{a}from"./chunk-B67WZSUY.js";import{k as I}from"./chunk-7NUFPHBI.js";import"./chunk-SEOQS6VP.js";import"./chunk-X72KAAKT.js";import{b as s}from"./chunk-YKGVVVX5.js";import"./chunk-IWHXOZAZ.js";import{d as C,g as T}from"./chunk-B75B3GWF.js";import{t as D}from"./chunk-H2TGRDS5.js";import{c as _}from"./chunk-XRLAKDN6.js";import"./chunk-I4OTRYP6.js";import"./chunk-2LPUO4OM.js";import{c as F}from"./chunk-4QAOLMRA.js";import"./chunk-IPR66Z7G.js";import{s as z,t as v}from"./chunk-JMGGZD4A.js";import"./chunk-2L76HXS6.js";import{e as M}from"./chunk-7Q2XJCHR.js";import"./chunk-L2RMIMUP.js";import"./chunk-6GM3YNBQ.js";import"./chunk-RCWML6QJ.js";import"./chunk-LHVP4JEO.js";import{Hb as c,Ib as l,Jb as g,O as f,Vb as u,ha as S,ib as p,jb as d,jc as y,qa as h,ra as b,xb as m}from"./chunk-UMI4LSI3.js";var A=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.mlabService=t,this.title=F.specimenTypes,this.dataSource=new E,this.dataSource.columnDefs.push(r.uuid("id"),r.string("name"),r.string("latinName"),r.string("abbreviation"),r.date("createdAt",!1),r.date("updatedAt",!1),j.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(_(this.dataSource.indicator),f(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(d(C),d(a))},e.\u0275cmp=h({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[y([a])],decls:3,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],[3,"stateEnabled","dataSource","update"]],template:function(t,n){t&1&&(g(0,"sz-ui-header-info",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),l(),c(2,"sz-ui-table",2),u("update",function(){return n.get()}),l()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[w,L,s],encapsulation:2});let i=e;return i})();var ae=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({providers:[a],imports:[z,v,M.forChild([{path:"",component:A}]),T,N,D,I,s]});let i=e;return i})();export{ae as SpecimenTypesModule};
/**i18n:16c9224f5b668b40e6178402b9ae5cba52679b665b9b111ce72150c0a38fe8d5*/