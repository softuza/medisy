import{a as d}from"./chunk-M4MTIZNS.js";import"./chunk-TOACHO3U.js";import"./chunk-GEUVZH2A.js";import"./chunk-KQNGY4RR.js";import{a,d as V,e as E,f as N,i as O,j as P}from"./chunk-Z6PUY476.js";import"./chunk-QV2ZQHMC.js";import"./chunk-IABH27XU.js";import{a as R}from"./chunk-E42ZP63V.js";import{a as s}from"./chunk-ZOKV46RB.js";import"./chunk-O2HTTUKG.js";import{b as A,j as k,k as w}from"./chunk-M637VPZN.js";import{a as j}from"./chunk-T2EQVSUG.js";import{j as m,k as T}from"./chunk-VK4CZRIZ.js";import{d as L,g as B}from"./chunk-LXPLDGFP.js";import{t as F}from"./chunk-QEZI75P7.js";import"./chunk-X34YPVYV.js";import"./chunk-TCCIVYCZ.js";import"./chunk-7WCYUC4Z.js";import"./chunk-PQYDHBBD.js";import"./chunk-JN2TNDGG.js";import{t as v,u as C}from"./chunk-BHO3RGW2.js";import{Y as _}from"./chunk-TGOP7ZDO.js";import{a as y,c as M,d as z}from"./chunk-BMCN66UE.js";import"./chunk-6RTBVNC4.js";import{ia as D,la as I}from"./chunk-O5CF5VDW.js";import"./chunk-X5L7PWWN.js";import{Jb as u,Kb as c,Wb as f,ab as g,bb as n,ea as S,na as b,oa as h,yb as l}from"./chunk-2TFHNGIL.js";import"./chunk-IL567IQQ.js";var Q=(()=>{let e=class e{constructor(t,o,r,p){this.dialog=t,this.mlabService=o,this.router=r,this.activatedRoute=p,this.dataSource=new V("name"),this.appBarConfig={title:_.laboratories,menu:T.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(U=>this.router.navigate([R.Laboratories,U.id])).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([m.edit(this.openSaveComponent.bind(this))])),this.get()}openSaveComponent(t){this.dialog.open(d,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o)})}openLaboratoryDeleteComponent(t){this.dialog.open(k,{data:A.delete(this.mlabService.laboratories.delete(t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o)})}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(E(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};e.\u0275fac=function(o){return new(o||e)(n(L),n(s),n(M),n(y))},e.\u0275cmp=b({type:e,selectors:[["sz-medisy-laboratory-laboratories"]],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,r){o&1&&(u(0,"sz-ui-table-bar",0),f("changed",function(){return r.get()}),c(),u(1,"sz-ui-table",1),f("update",function(){return r.get()}),c()),o&2&&(l("config",r.appBarConfig)("dataSource",r.dataSource),g(),l("dataSource",r.dataSource))},dependencies:[O,N],encapsulation:2});let i=e;return i})();var ge=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=S({providers:[s],imports:[v,C,z.forChild([{path:"",component:Q}]),B,D,I,P,F,j,w,d]});let i=e;return i})();export{ge as LaboratoriesModule};
/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/