import{a as r,b as j,d as E,f as L,k as w,l as N}from"./chunk-WAFKJ67S.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-F67EX4OT.js";import{a}from"./chunk-4A4DWX3B.js";import{k as I}from"./chunk-QMA7Y45E.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as s}from"./chunk-DVDPPXKO.js";import"./chunk-7ZCIBZRX.js";import{d as C,g as T}from"./chunk-UN7ZV7OU.js";import{r as D}from"./chunk-M6JNFYJK.js";import{c as _}from"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{c as F}from"./chunk-4U6LIYO2.js";import"./chunk-3MHW6B4E.js";import{s as z,t as v}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{e as M}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import"./chunk-AHPLM44D.js";import"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Hb as c,Ib as l,Jb as b,O as f,Vb as u,ha as S,ib as p,jb as d,jc as g,qa as h,ra as y,xb as m}from"./chunk-MNGWH3SB.js";var A=(()=>{let e=class e{constructor(i,t){this.dialog=i,this.mlabService=t,this.title=F.specimenTypes,this.dataSource=new E,this.dataSource.columns.push(r.uuid("id"),r.string("name"),r.string("latinName"),r.string("abbreviation"),r.date("createdAt",!1),r.date("updatedAt",!1),j.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(_(this.dataSource.indicator),f(1)).subscribe(i=>{this.dataSource.set(i.items,i.count)})}};e.\u0275fac=function(t){return new(t||e)(d(C),d(a))},e.\u0275cmp=h({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[g([a])],decls:3,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],[3,"stateEnabled","dataSource","update"]],template:function(t,n){t&1&&(b(0,"sz-ui-header-info",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),l(),c(2,"sz-ui-table",2),u("update",function(){return n.get()}),l()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[w,L,s],encapsulation:2});let o=e;return o})();var H=[{path:"",component:A}];var de=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=S({providers:[a],imports:[z,v,M.forChild(H),T,N,D,I,s]});let o=e;return o})();export{de as SpecimenTypesModule};
/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/
