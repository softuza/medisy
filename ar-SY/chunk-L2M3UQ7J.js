import{b as j}from"./chunk-LZJBPBX2.js";import{a as o,d as T,e as _,f as A,i as D,j as V}from"./chunk-Z6PUY476.js";import"./chunk-QV2ZQHMC.js";import"./chunk-IABH27XU.js";import{a as n}from"./chunk-ZOKV46RB.js";import"./chunk-O2HTTUKG.js";import"./chunk-M637VPZN.js";import{a as B}from"./chunk-T2EQVSUG.js";import{j as u,k as v}from"./chunk-VK4CZRIZ.js";import{d as b,g as z}from"./chunk-LXPLDGFP.js";import"./chunk-QEZI75P7.js";import"./chunk-X34YPVYV.js";import"./chunk-TCCIVYCZ.js";import"./chunk-7WCYUC4Z.js";import"./chunk-PQYDHBBD.js";import"./chunk-JN2TNDGG.js";import"./chunk-BHO3RGW2.js";import{Y as C,Z as M}from"./chunk-TGOP7ZDO.js";import{d as g}from"./chunk-BMCN66UE.js";import"./chunk-6RTBVNC4.js";import{la as y}from"./chunk-O5CF5VDW.js";import"./chunk-X5L7PWWN.js";import{Jb as p,Kb as c,Wb as l,ab as h,ea as d,ja as s,na as f,oa as S,yb as m}from"./chunk-2TFHNGIL.js";import"./chunk-IL567IQQ.js";var w=(()=>{let e=class e{constructor(){this.dialog=s(b),this.mlabService=s(n),this.dataSource=new T("-createdAt"),this.appBarConfig={title:C.specimens,menu:v.default().setItems([u.menu([u.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>j(t.status)).setValueTooltip(t=>M(t.status)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),o.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(_(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(r,a){r&1&&(p(0,"sz-ui-table-bar",0),l("changed",function(){return a.get()}),c(),p(1,"sz-ui-table",1),l("update",function(){return a.get()}),c()),r&2&&(m("config",a.appBarConfig)("dataSource",a.dataSource),h(),m("dataSource",a.dataSource))},dependencies:[D,A],encapsulation:2});let i=e;return i})();var ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=d({providers:[n],imports:[g.forChild([{path:"",component:w}]),z,y,V,B]});let i=e;return i})();export{ee as SpecimensModule};
/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/