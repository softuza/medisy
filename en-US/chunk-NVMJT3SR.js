import{b as L}from"./chunk-CUF6JG73.js";import{a as o,b as T,d as _,e as D,g as A,j as B,k as j}from"./chunk-YWT2EA4M.js";import"./chunk-L4AIUAS4.js";import"./chunk-72FHVNNU.js";import{a as s}from"./chunk-EY27VXMI.js";import"./chunk-V5DZRW4C.js";import"./chunk-UBUNO3NI.js";import"./chunk-KVT2Y44B.js";import{a as m}from"./chunk-ZCG62LHU.js";import"./chunk-IGQXTHNA.js";import{d as y,g as z}from"./chunk-ARJDRL2D.js";import"./chunk-ILMMVNTQ.js";import"./chunk-QOPKBTR3.js";import"./chunk-SV7OQSW7.js";import"./chunk-CXCVSTK4.js";import{c as C,d as M}from"./chunk-WP4QADEO.js";import"./chunk-5TZ2K576.js";import"./chunk-S24KQKNZ.js";import"./chunk-WZNJXRSX.js";import{e as g}from"./chunk-XU6WJOFR.js";import"./chunk-MOKWSACW.js";import{la as v}from"./chunk-57EQYW4O.js";import"./chunk-2UTMVH6A.js";import{Jb as c,Kb as d,Lb as b,Wb as u,bb as p,cb as l,ea as f,na as S,oa as h,zb as n}from"./chunk-OD2PBDQL.js";import"./chunk-MYK76I3Y.js";var V=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.title=C.specimens,this.dataSource=new _("-createdAt"),this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>L(t.state)).setValueTooltip(t=>M(t.state)),o.number("code").setStyleSmall(),o.string("type.name"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.date("collectedAt"),T.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(D(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(l(y),l(s))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:3,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","dataSource"]],template:function(i,t){i&1&&(b(0,"sz-ui-app-bar",0),c(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),d(),c(2,"sz-ui-table",2),u("update",function(){return t.get()}),d()),i&2&&(n("title",t.title),p(),n("dataSource",t.dataSource),p(),n("dataSource",t.dataSource))},dependencies:[B,A,m],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[g.forChild([{path:"",component:V}]),z,v,j,m]});let r=e;return r})();export{ee as SpecimensModule};
/**i18n:4fd1e3784121426a165aad39e5b179e99241f431f66c0843478e7b7dba7da7b9*/