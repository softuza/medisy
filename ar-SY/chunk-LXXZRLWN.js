import{a as r,b as j,d as A,f as E,i as L,j as w}from"./chunk-TJI632CG.js";import"./chunk-TQ3W56FI.js";import"./chunk-CIZWNSV3.js";import"./chunk-D2ETPSDJ.js";import{a}from"./chunk-FTHFVIFP.js";import{j as D}from"./chunk-V6YUYF6E.js";import"./chunk-EZE6YIGJ.js";import{a as s}from"./chunk-PEF2UZQC.js";import"./chunk-MU7HJDE2.js";import{d as M,g as C}from"./chunk-2K2RWTWU.js";import"./chunk-HRS4G4YG.js";import{t as F}from"./chunk-S6EI4M2J.js";import{b as T}from"./chunk-6RYVENW3.js";import"./chunk-M2R7K5VQ.js";import"./chunk-ZV5PVXGO.js";import{c as _}from"./chunk-CVRQFWLI.js";import"./chunk-LJVQIOF2.js";import{s as y,t as z}from"./chunk-EIWC7QFZ.js";import"./chunk-HPPA553T.js";import{e as v}from"./chunk-L6HNREY7.js";import"./chunk-FTN3YVIS.js";import"./chunk-IRR6XRRV.js";import"./chunk-TWGSABWX.js";import{Db as m,Nb as c,Ob as d,Pb as h,_b as u,hb as p,ib as l,ka as f,pc as g,ua as S,va as b}from"./chunk-XPH4NMLC.js";var B=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.mlabService=t,this.title=_.specimenTypes,this.dataSource=new A,this.dataSource.columnDefs.push(r.uuid("id"),r.string("name"),r.string("latinName"),r.string("abbreviation"),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),j.menu([])),this.get()}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(T(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(l(M),l(a))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[g([a])],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(t,n){t&1&&(h(0,"sz-ui-app-bar",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return n.get()}),d(),c(2,"sz-ui-table",2),u("update",function(){return n.get()}),d()),t&2&&(m("title",n.title),p(),m("dataSource",n.dataSource),p(),m("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[L,E,s],encapsulation:2});let i=e;return i})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=f({providers:[a],imports:[y,z,v.forChild([{path:"",component:B}]),C,w,F,D,s]});let i=e;return i})();export{oe as SpecimenTypesModule};
/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/
