import{a as d}from"./chunk-FZDVZWXQ.js";import{b as H}from"./chunk-HUKVDXQH.js";import"./chunk-UH6QAURY.js";import{a as k}from"./chunk-VO3RIH52.js";import"./chunk-PJ4ZDOCC.js";import{d as oe,e as f,g as ie,i as re,j as ne}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{b as Q,f as K,g as W,h as Y,j as x,k as ee}from"./chunk-TDTPOOYH.js";import"./chunk-VU2DRYWU.js";import{a as L,b as V,d as C,e as Z,g as G}from"./chunk-QHAXF6DJ.js";import{r as q,s as J,v as X}from"./chunk-NNTGN3JU.js";import{b as U}from"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import"./chunk-2VIOUMQX.js";import{d as D,f as O,g as y,l as N,o as b,r as E,s as F,u as I}from"./chunk-4NISFW37.js";import{b as z,c as v}from"./chunk-RY6DPLLN.js";import{a as te}from"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as $}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{p as h,r as A,s as R,v as P,x as B}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import{Na as w}from"./chunk-PR5SF5XM.js";import{Ia as g,Jc as T,Kb as c,Lb as m,Mb as p,Xb as _,cb as s,ja as i,lb as j,na as l,nb as M,qc as S,rc as u,zb as n}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";var se=(()=>{let t=class t extends K{constructor(){super(i(L)),this.fb=i(F),this.data=i(V),this.cstnService=i(d),this.zones=this.cstnService.zones.getAll({orderBy:["name"],filterBehavior:P.Or,filters:B.create().equalIf("id",this.data?.projectZone?.zoneId).notAnyIf("projects.projectId",this.data?.projectId).filters()});let o=this.fb,e=this.data;this.form=o.group({zoneId:[e?.projectZone?.zoneId,[D.required]]});}submit(){this.IsValid()&&(this.data?.projectZone?this.save(this.cstnService.projects.zones.update(this.data.projectId,this.data.projectZone.id,this.form.value)):this.save(this.cstnService.projects.zones.create(this.data.projectId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-projects-zones-save"]],standalone:!0,features:[S([]),M,u],decls:5,vars:6,consts:()=>{let o;return o="\u0627\u0644\u0645\u0646\u0637\u0642\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","zoneId","label",o,3,"source"],[3,"actions"]];},template:function(e,r){e&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2),m()(),p(4,"sz-ui-dialog-actions",3)),e&2&&(n("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),n("formGroup",r.form),s(),n("source",r.zones),s(),n("actions",r.actions));},dependencies:[I,N,O,y,b,E,G,Z,q,ee,W,Y,X,J],encapsulation:2});let a=t;return a;})();var pe=(()=>{let t=class t{constructor(){this.route=i(h),this.router=i(A),this.dialog=i(C),this.locale=i(T),this.cstnService=i(d),this.project=g.required(),this.dataSource=new ie(["zone.name"]),this.card={header:{title:$.zones},menu:v.more([z.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(f.uuid("id"),f.string("zone.name"),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),f.menu(v.more([z.delete(o=>this.openDeleteComponent(o))])));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(se,{data:{projectId:this.project().id,projectZone:o}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(o){this.dialog.open(x,{data:Q.delete(this.cstnService.projects.zones.delete(this.project().id,o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.cstnService.projects.zones.get(this.project().id,this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-project-zones"]],inputs:{project:[1,"project"]},standalone:!0,features:[S([d]),u],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(e,r){e&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),_("update",function(){return r.get();}),m()()),e&2&&(n("card",r.card),s(),n("dataSource",r.dataSource));},dependencies:[R,ne,oe,w,k],encapsulation:2});let a=t;return a;})();var ce=(()=>{let t=class t{constructor(){this.cstnService=i(d),this.route=i(h),this.dialog=i(C),this.project=this.route.snapshot.data.project,this.alert=j(void 0),this.appBarConfig={title:this.project.name,subtitle:this.project.description};}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-project"]],standalone:!0,features:[u],decls:6,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"project"]],template:function(e,r){e&1&&(p(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),c(2,"div",2),p(3,"sz-constr-construction-project-map"),m(),c(4,"div",2),p(5,"sz-constr-construction-project-zones",3),m()),e&2&&(n("config",r.appBarConfig),s(),n("alert",r.alert()),s(4),n("project",r.project));},dependencies:[te,U,H,pe],encapsulation:2});let a=t;return a;})();var Ye=[{path:"",component:ce}];export{Ye as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/