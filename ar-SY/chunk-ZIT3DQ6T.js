import{a as m}from"./chunk-A4BMC3LO.js";import{b as H}from"./chunk-2Z6P6TI3.js";import"./chunk-WZ7S4DNC.js";import{a as k}from"./chunk-F7YMPHDP.js";import{b as oe,c as f,e as ie,g as re,h as ne}from"./chunk-BBJAZ6GP.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{b as Q,f as K,g as W,h as Y,j as x,k as ee}from"./chunk-BQYTVP5O.js";import"./chunk-QVJ4Z3HM.js";import{a as B,b as L,d as C,e as V,g as Z}from"./chunk-HQFAQEC3.js";import{q as $,r as q,u as J}from"./chunk-26COPQ6D.js";import{b as w}from"./chunk-5WAYP5D7.js";import"./chunk-4PSVU3RC.js";import"./chunk-N4OOJIAX.js";import{d as T,f as D,g as O,l as y,n as N,q as b,r as E,t as F}from"./chunk-GLZMJYJP.js";import{b as z,c as X}from"./chunk-QOXR5OPH.js";import{a as te}from"./chunk-NC2TMKBF.js";import"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as U}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import{p as h,r as I,s as A,v as R,x as P}from"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import{Ma as G}from"./chunk-UEBH5A2M.js";import{Cc as _,Ia as g,Jb as c,Kb as d,Lb as p,Wb as M,bb as s,ja as r,kb as v,mb as j,mc as S,na as l,nc as u,yb as n}from"./chunk-6J2YPVJB.js";import"./chunk-TH7MQ6T4.js";var se=(()=>{let o=class o extends K{constructor(){let e=r(B);super(e),this.fb=r(E),this.data=r(L),this.cstnService=r(m),this.zones=this.cstnService.zones.getAll({orderBy:["name"],filterBehavior:R.Or,filters:P.create().equalIf("id",this.data?.projectZone?.zoneId).notAnyIf("projects.projectId",this.data?.projectId).filters()});let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({zoneId:[i?.projectZone?.zoneId,[T.required]]});}submit(){this.IsValid()&&(this.data?.projectZone?this.save(this.cstnService.projects.zones.update(this.data.projectId,this.data.projectZone.id,this.form.value)):this.save(this.cstnService.projects.zones.create(this.data.projectId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-projects-zones-save"]],standalone:!0,features:[S([]),j,u],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0645\u0646\u0637\u0642\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","zoneId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),d()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),n("formGroup",i.form),s(),n("source",i.zones),s(),n("actions",i.actions));},dependencies:[F,y,D,O,N,b,Z,V,$,ee,W,Y,J,q],encapsulation:2});let a=o;return a;})();var pe=(()=>{let o=class o{constructor(){this.route=r(h),this.router=r(I),this.dialog=r(C),this.locale=r(_),this.cstnService=r(m),this.project=g.required(),this.dataSource=new ie(["zone.name"]),this.card={header:{title:U.zones},menu:X.more([z.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(f.uuid("id"),f.string("zone.name"),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),f.menu([z.delete(e=>this.openDeleteComponent(e))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(se,{data:{projectId:this.project().id,projectZone:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(x,{data:Q.delete(this.cstnService.projects.zones.delete(this.project().id,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.projects.zones.get(this.project().id,this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-project-zones"]],inputs:{project:[1,"project"]},standalone:!0,features:[S([m]),u],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),M("update",function(){return i.get();}),d()()),t&2&&(n("card",i.card),s(),n("dataSource",i.dataSource));},dependencies:[A,ne,oe,G,k],encapsulation:2});let a=o;return a;})();var ce=(()=>{let o=class o{constructor(){this.cstnService=r(m),this.route=r(h),this.dialog=r(C),this.project=this.route.snapshot.data.project,this.alert=v(void 0),this.appBarConfig={title:this.project.name,subtitle:this.project.description};}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-project"]],standalone:!0,features:[u],decls:6,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"project"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),c(2,"div",2),p(3,"sz-constr-construction-project-map"),d(),c(4,"div",2),p(5,"sz-constr-construction-project-zones",3),d()),t&2&&(n("config",i.appBarConfig),s(),n("alert",i.alert()),s(4),n("project",i.project));},dependencies:[te,w,H,pe],encapsulation:2});let a=o;return a;})();var Ye=[{path:"",component:ce}];export{Ye as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/