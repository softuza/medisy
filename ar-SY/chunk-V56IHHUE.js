import{a as r,b as A,d as E,f as j,i as L,j as w}from"./chunk-BHRUDZVP.js";import"./chunk-QGCND4BW.js";import"./chunk-GG3YYMUI.js";import"./chunk-K6SJQ5CU.js";import{a}from"./chunk-UPED42KZ.js";import{j as D}from"./chunk-TEJYWJVO.js";import"./chunk-JVYAAVKL.js";import{a as s}from"./chunk-QQTY7BQF.js";import"./chunk-BZYUV3OB.js";import{d as M,g as C}from"./chunk-JTU2TQPP.js";import"./chunk-X5AOE4DT.js";import{t as F}from"./chunk-3LAMONKN.js";import{c as T}from"./chunk-E4OGVLDJ.js";import"./chunk-44LIDNAH.js";import"./chunk-3SHS3FQH.js";import{c as _}from"./chunk-ZPWMR5AU.js";import"./chunk-2ENG53AX.js";import{s as y,t as z}from"./chunk-DF4JKNTM.js";import"./chunk-EGVPX6ID.js";import{e as v}from"./chunk-SJINDKNX.js";import"./chunk-MHEQHB7U.js";import"./chunk-J4WSEAYB.js";import"./chunk-LVWMBWQL.js";import{Db as m,Nb as d,Ob as l,Pb as h,_b as u,hb as p,ib as c,ka as f,pc as g,ua as S,va as b}from"./chunk-E7ZYNPHN.js";var B=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.mlabService=t,this.title=_.specimen_types,this.dataSource=new E,this.dataSource.columnDefs.push(r.uuid("id"),r.string("nameEn"),r.string("nameAr"),r.string("abbreviation"),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),A.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(T(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(c(M),c(a))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[g([a])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(t,n){t&1&&(h(0,"sz-ui-app-bar",0),d(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),l(),d(2,"sz-ui-table",2),u("update",function(){return n.get()}),l()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[L,j,s],encapsulation:2});let i=e;return i})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=f({providers:[a],imports:[y,z,v.forChild([{path:"",component:B}]),C,w,F,D,s]});let i=e;return i})();export{oe as SpecimenTypesModule};
/**i18n:4432d5f57c128b53336b8fd28b2fbe1004e12689cc8828aeca1747c1f33ed32a*/
