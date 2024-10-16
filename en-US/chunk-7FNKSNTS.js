import{c as Z}from"./chunk-QCYM37KE.js";import{a as C}from"./chunk-D7KLX7QY.js";import{a as p}from"./chunk-7AEOOUFD.js";import{a as k}from"./chunk-5DRQZOLK.js";import{c as J,d as K,e as l,h as W,i as Y}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{b as j,f as w,g as q,h as H,j as Q,k as x}from"./chunk-TDTPOOYH.js";import"./chunk-VU2DRYWU.js";import{a as P,b as I,d as L,e as F,g as y}from"./chunk-QHAXF6DJ.js";import{c as V,s as B,t as U,v as X}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import{i as G}from"./chunk-2VIOUMQX.js";import{d as g,f as N,g as O,l as b,o as v,r as z,s as A,u as D}from"./chunk-4NISFW37.js";import{b as s,c as E}from"./chunk-RY6DPLLN.js";import"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as $}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{r as R}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import"./chunk-PR5SF5XM.js";import{Kb as d,Lb as u,Mb as _,Xb as M,cb as m,ja as a,na as c,nb as h,qc as f,rc as T,zb as r}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";var ee=(()=>{let i=class i extends w{constructor(){super(a(P)),this.srptService=a(p),this.fb=a(A),this.data=a(I),this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.baseTemplates=this.srptService.baseTemplates.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(C).map(o=>C[o]);let t=this.fb,e=this.data;this.form=t.group({name:[e?.name,[g.required]],description:[e?.description,[g.maxLength(4096)]],baseTemplateId:[e?.baseTemplateId,[g.required]],content:[e?.content,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([p]),h,T],decls:7,vars:6,consts:()=>{let t;t="Name";let e;e="Description";let o;return o="Base Template",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","baseTemplateId","label",o,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(_(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(r("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),r("formGroup",o.form),m(3),r("source",o.baseTemplates),m(),r("actions",o.actions));},dependencies:[D,b,N,O,v,z,y,F,G,Z,x,q,H,X,V,U,B],encapsulation:2});let n=i;return n;})();var te=(()=>{let i=class i{constructor(){this.dialog=a(L),this.srptService=a(p),this.router=a(R),this.dataSource=new W(),this.appBarConfig={title:$.templates,menu:E.default([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(l.uuid("id"),l.hyperlink("name").setClickFn(t=>this.router.navigate([k.Templates,t.id])).setStacked(l.string("description").setValueClassFontSmall()),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),l.menu(E.more([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openReportDeleteComponent.bind(this))]))),this.get();}openSaveComponent(t){this.dialog.open(ee,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(Q,{data:j.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(Y(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates"]],standalone:!0,features:[f([p]),T],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(d(0,"sz-ui-table-bar",0),M("changed",function(){return o.get();}),u(),d(1,"sz-ui-table",1),M("update",function(){return o.get();}),u()),e&2&&(r("config",o.appBarConfig)("dataSource",o.dataSource),m(),r("dataSource",o.dataSource));},dependencies:[J,K],encapsulation:2});let n=i;return n;})();var Fe=[{path:"",component:te}];export{Fe as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/