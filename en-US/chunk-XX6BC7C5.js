import{b as L}from"./chunk-YPZF7YKS.js";import{a as o,b as T,d as _,e as B,g as D,j as A,k as j}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import{a as s}from"./chunk-UYGPYJU5.js";import"./chunk-WB6GSLJI.js";import"./chunk-ATQTF7V2.js";import{a as m}from"./chunk-XTD4P5RM.js";import"./chunk-SE7A63UJ.js";import{d as y,g as z}from"./chunk-KXHITGXF.js";import"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import"./chunk-BVTPLI23.js";import{c as v,d as M}from"./chunk-MJ3OXUGM.js";import"./chunk-EFKI6RZJ.js";import"./chunk-4JGOPH4G.js";import"./chunk-UFIT6BFN.js";import{e as b}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{la as C}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Jb as l,Kb as d,Lb as g,Wb as u,bb as p,cb as c,ea as f,na as S,oa as h,zb as n}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";var V=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.dataSource=new _("-createdAt"),this.appBarConfig={title:v.specimens},this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>L(t.state)).setValueTooltip(t=>M(t.state)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),T.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(B(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(c(y),c(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"config"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(g(0,"sz-ui-app-bar",0),l(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),l(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),i&2&&(n("config",t.appBarConfig),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[A,D,m],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[b.forChild([{path:"",component:V}]),z,C,j,m]});let r=e;return r})();export{ee as SpecimensModule};
/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/