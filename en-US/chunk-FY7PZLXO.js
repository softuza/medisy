import{a as C}from"./chunk-RSTTZCYH.js";import{c as me}from"./chunk-6YHPCQ3R.js";import{a as d}from"./chunk-WXUM2H7T.js";import{a as p,b as re,d as ne,f as ae,i as se,j as le}from"./chunk-5YPBEEDC.js";import"./chunk-KC6VXE5Q.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{e as Z,f as x,g as ee,i as te,j as oe,k as ie}from"./chunk-IVJJNIOC.js";import"./chunk-PP3NP7HU.js";import{a as R}from"./chunk-PHJ3BL23.js";import{h as N}from"./chunk-IDZ2W4CX.js";import{a as U,b as X,d as j,e as k,g as T}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{c as Q,q as K,s as W,t as Y}from"./chunk-KZQF464X.js";import{c as J}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as O}from"./chunk-Y37IT74E.js";import{i as q}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as S,f as z,g as A,k as G,m as L,p as y,q as b,t as $}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as F,e as V}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as B,ia as w,ka as H}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as m,Jb as c,Kb as _,Ub as v,Vb as E,ab as l,bb as s,ea as I,kc as g,lc as D,na as M,oa as h,ob as P,yb as a}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var _e=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.srptService=t,this.fb=e,this.dialog=o,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(C).map(u=>C[u]),this.form=e.group({name:[r?.name,[S.required]],description:[r?.description,[S.maxLength(4096)]],categoryId:[r?.categoryId,[S.required]],templateIdentifier:[r?.templateIdentifier,[S.required]],pageDirection:[r?.pageDirection??C.LTR,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(d),s(b),s(U),s(X));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[g([]),P,D],decls:9,vars:7,consts:()=>{let t;t="Name";let e;e="Description";let o;o="Identifier";let r;r="Direction";let u;return u="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","templateIdentifier","label",o],["formControlName","pageDirection","label",r,3,"source"],["formControlName","categoryId","label",u,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),c()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),a("formGroup",o.form),l(4),a("source",o.pageDirections),l(),a("source",o.categories),l(),a("actions",o.actions));},dependencies:[$,G,z,A,L,y,T,k,q,me,oe,x,ee,Y,Q,W,K],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.srptService=e,this.router=o,this.title=O.templates,this.dataSource=new ne(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>`/srpt/templates/${r.id}`).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(O.category),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),re.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.reports.get(this.dataSource.getQuery()).pipe(J(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(j),s(d),s(F));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-reports"]],features:[g([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(_(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),E("changed",function(){return o.get();}),m(2,"button",3),E("click",function(){return o.openSaveComponent();}),m(3,"span"),v(4,0),c()()(),m(5,"sz-ui-table",4),E("update",function(){return o.get();}),c()),e&2&&(a("title",o.title),l(),a("dataSource",o.dataSource),l(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[w,se,ae,R],encapsulation:2});let n=i;return n;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=I({providers:[d],imports:[V.forChild([{path:"",component:Se}]),T,H,le,R,B]});let n=i;return n;})();export{et as TemplatesModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/