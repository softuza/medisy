import{b as j}from"./chunk-FC5ILIMN.js";import{a as i,c as _,d as T,f as B,i as A,j as D}from"./chunk-AUPU6QI4.js";import"./chunk-OKGOWQL5.js";import"./chunk-NEHTWZRD.js";import{a as s}from"./chunk-4DEPVHVX.js";import"./chunk-7CWIHV7X.js";import"./chunk-6Y6J7VB6.js";import{a as m}from"./chunk-VAHBDTYA.js";import"./chunk-NR4QF72D.js";import{d as y,g as z}from"./chunk-EJOHO2EB.js";import"./chunk-YZKNUD65.js";import"./chunk-UFKQJOL3.js";import"./chunk-TL57E7RA.js";import"./chunk-GOMTDU6R.js";import"./chunk-HVAN3DT6.js";import"./chunk-F2RDDOGN.js";import"./chunk-MGV73Q32.js";import{Y as C,Z as M}from"./chunk-I7PR7JM4.js";import{e as b}from"./chunk-5XANXOAJ.js";import"./chunk-N5JOJLCN.js";import{la as v}from"./chunk-IM7EI72R.js";import"./chunk-327W6FQA.js";import{Kb as l,Lb as d,Mb as g,Xb as u,bb as p,cb as c,ea as f,na as S,oa as h,zb as n}from"./chunk-UELVXDXK.js";import"./chunk-2GMD7R3L.js";var L=(()=>{let e=class e{constructor(a,o){this.dialog=a,this.mlabService=o,this.dataSource=new _("-createdAt"),this.appBarConfig={title:C.specimens},this.dataSource.columnDefs.push(i.uuid("id"),i.icon("state").setValueGetter(t=>j(t.state)).setValueTooltip(t=>M(t.state)),i.number("code").setStyleSmall(),i.string("type.name"),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),i.date("collectedAt"),i.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(T(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(o){return new(o||e)(c(y),c(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"config"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(g(0,"sz-ui-app-bar",0),l(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),l(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),o&2&&(n("config",t.appBarConfig),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[A,B,m],encapsulation:2});let r=e;return r})();var x=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[b.forChild([{path:"",component:L}]),z,v,D,m]});let r=e;return r})();export{x as SpecimensModule};
/**i18n:fe59e4cec730fb22fcad5443103077b4b8cf7932d5cc1616a4c03edd493e1605*/
