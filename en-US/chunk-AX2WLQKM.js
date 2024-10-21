import{c as oe}from"./chunk-ZDEDSG77.js";import{a as C}from"./chunk-SN6WVZNB.js";import{a as p}from"./chunk-S5QBXKHU.js";import{a as q}from"./chunk-GTZ2EHFR.js";import{c as Y,d as Z,e as l,h as ee,i as te}from"./chunk-L36SVMPI.js";import"./chunk-4DCDCHB6.js";import"./chunk-PWRCXTHR.js";import"./chunk-K5UGIYX3.js";import{c as H,g as Q,h as x,i as J,k as K,l as W}from"./chunk-ZQB4NDVO.js";import"./chunk-CYAUIENP.js";import{b as U}from"./chunk-LHBL53UW.js";import{a as F,b as y,d as G,e as V,g as B}from"./chunk-FURDGHLT.js";import{c as k,p as X,q as j,s as w}from"./chunk-2DBSK72U.js";import"./chunk-7LV3YXIE.js";import"./chunk-PI7SXNAH.js";import"./chunk-TWY5RYOX.js";import{j as $}from"./chunk-376VVTQV.js";import{d as M,f as O,g as z,l as A,o as D,r as R,s as P,u as I}from"./chunk-AHXH4DOS.js";import{b as r,c as E}from"./chunk-FKQ22IQJ.js";import"./chunk-AYZ3P7GD.js";import"./chunk-OLNJCPIA.js";import{c as S}from"./chunk-UNNL7KWU.js";import"./chunk-PUAS3BAZ.js";import{r as L}from"./chunk-JXMVGGLE.js";import"./chunk-KC3OOHS3.js";import"./chunk-RLAIQ2FO.js";import"./chunk-P6NOJIJ3.js";import{Jb as d,Kb as u,Lb as f,Wb as h,bb as m,ja as a,mb as v,mc as T,na as _,nc as g,yb as n}from"./chunk-YQNBR3H5.js";import{a as N,b}from"./chunk-NFTRFLMQ.js";var ie=(()=>{let i=class i extends Q{constructor(){super(a(F)),this.srptService=a(p),this.fb=a(P),this.data=a(y),this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.baseTemplates=this.srptService.baseTemplates.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(C).map(o=>C[o]);let t=this.fb,e=this.data;this.form=t.group({name:[e?.name,[M.required]],description:[e?.description,[M.maxLength(4096)]],baseTemplateId:[e?.baseTemplateId,[M.required]],content:[e?.content,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=_({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[T([p]),v,g],decls:7,vars:6,consts:()=>{let t;t="Name";let e;e="Description";let o;return o="Base Template",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","baseTemplateId","label",o,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(f(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),f(6,"sz-ui-dialog-actions",5)),e&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),n("formGroup",o.form),m(3),n("source",o.baseTemplates),m(),n("actions",o.actions));},dependencies:[I,A,O,z,D,R,B,V,$,oe,W,x,J,w,k,j,X],encapsulation:2});let s=i;return s;})();var ae=(()=>{let i=class i{constructor(){this.dialog=a(G),this.srptService=a(p),this.router=a(L),this.snakeBar=a(U),this.dataSource=new ee(),this.appBarConfig={title:S.templates,menu:E.default([r.add(this.openSaveComponent.bind(this)),r.menu([r.search()])])},this.dataSource.columnDefs.push(l.uuid("id"),l.hyperlink("name").setClickFn(t=>this.router.navigate([q.Templates,t.id])).setStacked(l.string("description").setValueClassFontSmall()),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),l.menu(E.more([r.edit(this.openSaveComponent.bind(this)),r.divider(),r.clone(this.clone.bind(this)),r.divider(),r.delete(this.openReportDeleteComponent.bind(this))]))),this.get();}clone(t){this.srptService.templates.create(b(N({},t),{id:void 0,name:`${t.name} - ${S.copy}`})).subscribe(e=>{this.dataSource.addOrUpdateItem(e),this.snakeBar.open(S.saved,S.close);});}openSaveComponent(t){this.dialog.open(ie,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(K,{data:H.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=_({type:i,selectors:[["sz-mgmt-reporting-templates"]],standalone:!0,features:[T([p]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(d(0,"sz-ui-table-bar",0),h("changed",function(){return o.get();}),u(),d(1,"sz-ui-table",1),h("update",function(){return o.get();}),u()),e&2&&(n("config",o.appBarConfig)("dataSource",o.dataSource),m(),n("dataSource",o.dataSource));},dependencies:[Y,Z],encapsulation:2});let s=i;return s;})();var $e=[{path:"",component:ae}];export{$e as default};/**i18n:4496faec5fdb532a79a61dee9b0e39fe2c3a8394fb36deafb49598fafb3bf39e*/