import{b as L}from"./chunk-ZCIDB4G7.js";import{a as o,b as T,d as _,e as B,g as D,j as A,k as j}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import{a as s}from"./chunk-BC6TH3PO.js";import"./chunk-UYYWHWBI.js";import"./chunk-5NWVIDQT.js";import{a as m}from"./chunk-NXQ5VREG.js";import"./chunk-HWSLRHWT.js";import{d as y,g as z}from"./chunk-Z2LVGH3F.js";import"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as v,d as M}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{e as b}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{la as C}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as l,Kb as d,Lb as g,Wb as u,bb as p,cb as c,ea as f,na as S,oa as h,zb as n}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var V=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.dataSource=new _("-createdAt"),this.appBarConfig={title:v.specimens},this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>L(t.state)).setValueTooltip(t=>M(t.state)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),T.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(B(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(c(y),c(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"config"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(g(0,"sz-ui-app-bar",0),l(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),l(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),i&2&&(n("config",t.appBarConfig),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[A,D,m],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[b.forChild([{path:"",component:V}]),z,C,j,m]});let r=e;return r})();export{ee as SpecimensModule};
/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/
