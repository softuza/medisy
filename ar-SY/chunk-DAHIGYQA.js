import{a as m}from"./chunk-56G2DFJZ.js";import{b as H}from"./chunk-ZGS47DOC.js";import"./chunk-6HBZZQ2G.js";import{a as k}from"./chunk-PEAEHABN.js";import{b as oe,c as f,e as ie,g as re,h as ne}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as Q,f as K,g as W,h as Y,j as x,k as ee}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import{a as L,b as V,d as C,e as Z,g as G}from"./chunk-HESHWLJQ.js";import{q,r as J,u as X}from"./chunk-UC5SOJIH.js";import{b as U}from"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as D,f as O,g as y,l as N,o as b,r as E,s as F,u as I}from"./chunk-UR5GDBT7.js";import{b as z,c as g}from"./chunk-JVOCSYLO.js";import{a as te}from"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as $}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as h,r as A,s as R,v as P,x as B}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import{Ma as w}from"./chunk-75V32KEJ.js";import{Cc as T,Ia as v,Jb as c,Kb as d,Lb as p,Wb as _,bb as s,ja as r,kb as j,mb as M,mc as S,na as l,nc as u,yb as n}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var se=(()=>{let o=class o extends K{constructor(){let e=r(L);super(e),this.fb=r(F),this.data=r(V),this.cstnService=r(m),this.zones=this.cstnService.zones.getAll({orderBy:["name"],filterBehavior:P.Or,filters:B.create().equalIf("id",this.data?.projectZone?.zoneId).notAnyIf("projects.projectId",this.data?.projectId).filters()});let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({zoneId:[i?.projectZone?.zoneId,[D.required]]});}submit(){this.IsValid()&&(this.data?.projectZone?this.save(this.cstnService.projects.zones.update(this.data.projectId,this.data.projectZone.id,this.form.value)):this.save(this.cstnService.projects.zones.create(this.data.projectId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-projects-zones-save"]],standalone:!0,features:[S([]),M,u],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0645\u0646\u0637\u0642\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","zoneId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),d()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),n("formGroup",i.form),s(),n("source",i.zones),s(),n("actions",i.actions));},dependencies:[I,N,O,y,b,E,G,Z,q,ee,W,Y,X,J],encapsulation:2});let a=o;return a;})();var pe=(()=>{let o=class o{constructor(){this.route=r(h),this.router=r(A),this.dialog=r(C),this.locale=r(T),this.cstnService=r(m),this.project=v.required(),this.dataSource=new ie(["zone.name"]),this.card={header:{title:$.zones},menu:g.more([z.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(f.uuid("id"),f.string("zone.name"),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),f.menu(g.more([z.delete(e=>this.openDeleteComponent(e))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(se,{data:{projectId:this.project().id,projectZone:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(x,{data:Q.delete(this.cstnService.projects.zones.delete(this.project().id,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.projects.zones.get(this.project().id,this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-project-zones"]],inputs:{project:[1,"project"]},standalone:!0,features:[S([m]),u],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),_("update",function(){return i.get();}),d()()),t&2&&(n("card",i.card),s(),n("dataSource",i.dataSource));},dependencies:[R,ne,oe,w,k],encapsulation:2});let a=o;return a;})();var ce=(()=>{let o=class o{constructor(){this.cstnService=r(m),this.route=r(h),this.dialog=r(C),this.project=this.route.snapshot.data.project,this.alert=j(void 0),this.appBarConfig={title:this.project.name,subtitle:this.project.description};}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-constr-construction-project"]],standalone:!0,features:[u],decls:6,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"project"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),c(2,"div",2),p(3,"sz-constr-construction-project-map"),d(),c(4,"div",2),p(5,"sz-constr-construction-project-zones",3),d()),t&2&&(n("config",i.appBarConfig),s(),n("alert",i.alert()),s(4),n("project",i.project));},dependencies:[te,U,H,pe],encapsulation:2});let a=o;return a;})();var Ye=[{path:"",component:ce}];export{Ye as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/