import{c as ae}from"./chunk-WNZGAC5B.js";import{a as l}from"./chunk-GFRVKPAG.js";import{a as m,d as ee,e as te,f as ie,i as oe,j as re}from"./chunk-7FOO2BSN.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as x,f as J,g as K,h as W,j as Y,k as Z}from"./chunk-BQ3MI4NW.js";import{b as T,e as Q}from"./chunk-JPFRJQ7V.js";import{g}from"./chunk-E6NASU4P.js";import{a as y,b as B,d as V,e as $,g as M}from"./chunk-WNUUIGGE.js";import{c as w,r as k,s as q,t as H}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as j}from"./chunk-JACASQJP.js";import{d as _,f as z,g as O,l as b,n as I,q as A,r as D,u as L}from"./chunk-VXNH5PTX.js";import{Y as X}from"./chunk-KQ5MQZXD.js";import{c as P,e as F}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as G,la as U}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as d,Lb as u,Mb as S,Xb as C,bb as p,cb as n,ea as h,na as c,oa as v,oc as f,pc as R,qb as N,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var E=function(r){return r.LTR="LTR",r.RTL="RTL",r;}(E||{});var se=(()=>{let t=class t extends J{constructor(o,e,i,a){super(i),this.srptService=o,this.fb=e,this.dialog=i,this.data=a,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.baseTemplates=this.srptService.baseTemplates.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(E).map(pe=>E[pe]),this.form=e.group({name:[a?.name,[_.required]],description:[a?.description,[_.maxLength(4096)]],baseTemplateId:[a?.baseTemplateId,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(n(l),n(D),n(y),n(B));},t.ɵcmp=c({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),N,R],decls:7,vars:6,consts:()=>{let o;o="Name";let e;e="Description";let i;return i="Base Template",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","baseTemplateId","label",i,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(S(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(3),s("source",i.baseTemplates),p(),s("actions",i.actions));},dependencies:[L,b,z,O,I,A,M,$,j,ae,Z,K,W,H,w,q,k],encapsulation:2});let r=t;return r;})();var me=(()=>{let t=class t{constructor(o,e,i){this.dialog=o,this.srptService=e,this.router=i,this.dataSource=new ee(),this.appBarConfig={title:X.templates,actions:[T.add(this.openSaveComponent.bind(this)),T.menu([T.search()])]},this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",a=>`/srpt/templates/${a.id}`).setStacked(m.string("description").setValueClassFontSmall()),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([g.edit(this.openSaveComponent.bind(this)),g.divider(),g.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(se,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(Y,{data:x.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(n(V),n(l),n(P));},t.ɵcmp=c({type:t,selectors:[["sz-mgmt-reporting-templates"]],features:[f([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,i){e&1&&(d(0,"sz-ui-table-bar",0),C("changed",function(){return i.get();}),u(),d(1,"sz-ui-table",1),C("update",function(){return i.get();}),u()),e&2&&(s("config",i.appBarConfig)("dataSource",i.dataSource),p(),s("dataSource",i.dataSource));},dependencies:[oe,ie],encapsulation:2});let r=t;return r;})();var We=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=v({type:t}),t.ɵinj=h({providers:[l],imports:[F.forChild([{path:"",component:me}]),M,U,re,Q,G]});let r=t;return r;})();export{We as TemplatesModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/