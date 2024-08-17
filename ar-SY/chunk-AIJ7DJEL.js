import{c as ne}from"./chunk-4EMICZOF.js";import{a as p}from"./chunk-4U6XJCRR.js";import{a as m,d as te,e as oe,f as ie,i as re,j as ae}from"./chunk-D3A4DG3E.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import"./chunk-HWJ6IS6U.js";import{b as J,f as K,g as W,h as Y,j as Z,k as ee}from"./chunk-SR3I6TMI.js";import{a as x}from"./chunk-CT6UCPJK.js";import{j as s,k as Q}from"./chunk-4MMSBRWE.js";import{a as y,b as B,d as V,e as $,g as T}from"./chunk-4CSR7EPJ.js";import{c as w,r as k,s as q,t as H}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as j}from"./chunk-IEUIBZ53.js";import{d as g,f as z,g as R,l as b,n as A,q as I,r as D,u as L}from"./chunk-VXNH5PTX.js";import{Y as X}from"./chunk-FZKM7RGV.js";import{c as P,e as F}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as G,la as U}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as u,Lb as S,Mb as _,Xb as C,bb as l,cb as d,ea as h,ja as c,na as f,oa as N,oc as M,pc as O,qb as v,zb as n}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var E=function(r){return r.LTR="LTR",r.RTL="RTL",r;}(E||{});var me=(()=>{let e=class e extends K{constructor(o,t,i,a){super(i),this.srptService=o,this.fb=t,this.dialog=i,this.data=a,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.baseTemplates=this.srptService.baseTemplates.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(E).map(pe=>E[pe]),this.form=t.group({name:[a?.name,[g.required]],description:[a?.description,[g.maxLength(4096)]],baseTemplateId:[a?.baseTemplateId,[g.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(d(p),d(D),d(y),d(B));},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),v,O],decls:7,vars:6,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0627\u0644\u0642\u0627\u0644\u0628 \u0627\u0644\u0627\u0633\u0627\u0633\u064A",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","baseTemplateId","label",i,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(_(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),n("formGroup",i.form),l(3),n("source",i.baseTemplates),l(),n("actions",i.actions));},dependencies:[L,b,z,R,A,I,T,$,j,ne,ee,W,Y,H,w,q,k],encapsulation:2});let r=e;return r;})();var le=(()=>{let e=class e{constructor(){this.dialog=c(V),this.srptService=c(p),this.router=c(P),this.dataSource=new te(),this.appBarConfig={title:X.templates,menu:Q.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",o=>`/srpt/templates/${o.id}`).setStacked(m.string("description").setValueClassFontSmall()),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(Z,{data:J.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(u(0,"sz-ui-table-bar",0),C("changed",function(){return i.get();}),S(),u(1,"sz-ui-table",1),C("update",function(){return i.get();}),S()),t&2&&(n("config",i.appBarConfig)("dataSource",i.dataSource),l(),n("dataSource",i.dataSource));},dependencies:[re,ie],encapsulation:2});let r=e;return r;})();var Ze=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=N({type:e}),e.ɵinj=h({providers:[p],imports:[F.forChild([{path:"",component:le}]),T,U,ae,x,G]});let r=e;return r;})();export{Ze as TemplatesModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/