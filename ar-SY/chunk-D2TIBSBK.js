import{b as j}from"./chunk-MN5CUW6N.js";import{a as o,d as T,e as _,f as A,i as D,j as V}from"./chunk-B4A2V7XU.js";import"./chunk-5TVHWUQF.js";import"./chunk-FLYZTQVP.js";import{a as n}from"./chunk-INUEVVSF.js";import"./chunk-MB447KBV.js";import"./chunk-OZNM4F5S.js";import{a as B}from"./chunk-MOAPW72V.js";import{j as u,k as v}from"./chunk-LZ3HWPNB.js";import{d as b,g as z}from"./chunk-YEM3GD5L.js";import"./chunk-F6DYKLPX.js";import"./chunk-ZPIO6CFV.js";import"./chunk-264QKOH6.js";import"./chunk-UJCEDBUS.js";import"./chunk-H7W7YGPD.js";import"./chunk-VNEAS3P2.js";import"./chunk-ER7WHOJP.js";import{Y as C,Z as M}from"./chunk-6JNKTIUK.js";import{e as g}from"./chunk-NBEPCNAY.js";import"./chunk-THXYLS24.js";import{la as y}from"./chunk-UUEM5JJT.js";import"./chunk-PSZD7437.js";import{Kb as p,Lb as c,Xb as l,bb as h,ea as d,ja as s,na as f,oa as S,zb as m}from"./chunk-IKPHE33N.js";import"./chunk-EAIILSS5.js";var w=(()=>{let e=class e{constructor(){this.dialog=s(b),this.mlabService=s(n),this.dataSource=new T("-createdAt"),this.appBarConfig={title:C.specimens,menu:v.default().setItems([u.menu([u.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>j(t.status)).setValueTooltip(t=>M(t.status)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),o.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(_(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(r,a){r&1&&(p(0,"sz-ui-table-bar",0),l("changed",function(){return a.get()}),c(),p(1,"sz-ui-table",1),l("update",function(){return a.get()}),c()),r&2&&(m("config",a.appBarConfig)("dataSource",a.dataSource),h(),m("dataSource",a.dataSource))},dependencies:[D,A],encapsulation:2});let i=e;return i})();var ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=d({providers:[n],imports:[g.forChild([{path:"",component:w}]),z,y,V,B]});let i=e;return i})();export{ee as SpecimensModule};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
