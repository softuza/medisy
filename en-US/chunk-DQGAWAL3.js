import{b as L}from"./chunk-Z4E34DXJ.js";import{a as o,b as T,d as _,e as B,g as D,j as A,k as j}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import{a as s}from"./chunk-5IHQNMKH.js";import"./chunk-HAWQZ3DL.js";import"./chunk-CZ3NOAZC.js";import{a as m}from"./chunk-4APH4GGR.js";import"./chunk-3HX3ISKW.js";import{d as y,g as z}from"./chunk-T2IQKITO.js";import"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as v,d as M}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{e as b}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{la as C}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as l,Kb as d,Lb as g,Wb as u,bb as p,cb as c,ea as f,na as S,oa as h,zb as n}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var V=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.dataSource=new _("-createdAt"),this.appBarConfig={title:v.specimens},this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>L(t.state)).setValueTooltip(t=>M(t.state)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),T.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(B(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(c(y),c(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"config"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(g(0,"sz-ui-app-bar",0),l(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),l(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),i&2&&(n("config",t.appBarConfig),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[A,D,m],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[b.forChild([{path:"",component:V}]),z,C,j,m]});let r=e;return r})();export{ee as SpecimensModule};
/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/