import{b as L}from"./chunk-YPZF7YKS.js";import{a as o,b as T,d as _,e as D,g as A,j as B,k as j}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{a as s}from"./chunk-6VGSXMTA.js";import"./chunk-4NTC2VLV.js";import"./chunk-76IND4GV.js";import{a as m}from"./chunk-ZPKIPVTE.js";import"./chunk-TIEHGEOE.js";import{d as y,g as z}from"./chunk-QCMAXDKX.js";import"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as C,d as M}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{e as g}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{la as v}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as c,Kb as d,Lb as b,Wb as u,bb as p,cb as l,ea as f,na as S,oa as h,zb as n}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var V=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.title=C.specimens,this.dataSource=new _("-createdAt"),this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>L(t.state)).setValueTooltip(t=>M(t.state)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),T.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(D(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(l(y),l(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(b(0,"sz-ui-app-bar",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),c(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),i&2&&(n("title",t.title),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[B,A,m],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[g.forChild([{path:"",component:V}]),z,v,j,m]});let r=e;return r})();export{ee as SpecimensModule};
/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/