import{a as O}from"./chunk-YZNAL25Q.js";import"./chunk-IBEGBZPR.js";import{a as A,d as E,e as o,h as L,i as P,j as N}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as s}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{b as I,j,k as w}from"./chunk-JDBQ45YP.js";import{a as R}from"./chunk-ZGUTF2MC.js";import{j as a,k as T}from"./chunk-53DZ6NLX.js";import{d as y,g as D}from"./chunk-7B3GMYBR.js";import{t as F}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{t as z,u as v}from"./chunk-QZRJHJEV.js";import{Y as _}from"./chunk-4QPQ7IQ3.js";import{d as M}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{la as B}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as p,Kb as l,Wb as u,bb as g,ea as f,ja as m,mc as b,na as S,nc as C,oa as h,yb as d}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var c=(()=>{let e=class e{constructor(){this.dialog=m(y),this.mlabService=m(s),this.dataSource=new L,this.appBarConfig={title:_.referrers,menu:T.default().setItems([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.string("name"),o.string("primaryPhone"),o.string("primaryEmail"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.menu([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.delete(this.openReferrerDeleteComponent.bind(this))])),this.get()}openSaveComponent(t){this.dialog.open(O,{data:t}).afterClosed().subscribe(r=>{this.dataSource.addOrUpdateItem(r)})}openReferrerDeleteComponent(t){this.dialog.open(j,{data:I.delete(this.mlabService.referrers.delete(t.id),t)}).afterClosed().subscribe(r=>{this.dataSource.delete(r)})}get(){this.mlabService.referrers.get(this.dataSource.getQuery()).pipe(P(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-referrers"]],standalone:!0,features:[b([s]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(r,n){r&1&&(p(0,"sz-ui-table-bar",0),u("changed",function(){return n.get()}),l(),p(1,"sz-ui-table",1),u("update",function(){return n.get()}),l()),r&2&&(d("config",n.appBarConfig)("dataSource",n.dataSource),g(),d("dataSource",n.dataSource))},dependencies:[A,E],encapsulation:2});let i=e;return i})();var de=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[s],imports:[z,v,M.forChild([{path:"",component:c}]),D,B,N,F,w,R,c]});let i=e;return i})();export{de as ReferrersModule};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
