import{c as me}from"./chunk-NCYT4BJ3.js";import{a as S}from"./chunk-4OXK4PDD.js";import{a as p,b as oe,d as ie,e as re,g as ne,j as ae,k as se}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import"./chunk-4NTC2VLV.js";import{e as W,f as Y,g as Z,i as x,j as ee,k as te}from"./chunk-76IND4GV.js";import{a as C}from"./chunk-ZPKIPVTE.js";import{h as O}from"./chunk-TIEHGEOE.js";import{a as B,b as j,d as U,e as X,g}from"./chunk-QCMAXDKX.js";import{e as H,u as Q,w as J,x as K}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as N}from"./chunk-AR6ZPEMB.js";import{i as k}from"./chunk-7ZLPMEOZ.js";import{d as u,f as I,g as z,l as D,n as P,q as G,r as y,u as b}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as $,e as F}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as V,ja as w,la as q}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as l,Kb as c,Lb as d,Vb as L,Wb as T,bb as m,cb as s,ea as R,na as M,nc as E,oa as h,oc as v,qb as A,zb as a}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var f=function(n){return n.LTR="LTR",n.RTL="RTL",n;}(f||{});var pe=(()=>{let i=class i extends W{constructor(t,e,o,r){super(o),this.srptService=t,this.fb=e,this.dialog=o,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(f).map(_=>f[_]),this.form=e.group({name:[r?.name,[u.required]],description:[r?.description,[u.maxLength(4096)]],categoryId:[r?.categoryId,[u.required]],pageDirection:[r?.pageDirection??f.LTR,[u.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(S),s(y),s(B),s(j));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[E([]),A,v],decls:8,vars:7,consts:()=>{let t;t="Name";let e;e="Description";let o;o="Direction";let r;return r="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","pageDirection","label",o,3,"source"],["formControlName","categoryId","label",r,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),c()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(3),a("source",o.pageDirections),m(),a("source",o.categories),m(),a("actions",o.actions));},dependencies:[b,D,I,z,P,G,g,X,k,me,ee,Y,Z,K,H,J,Q],encapsulation:2});let n=i;return n;})();var de=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.srptService=e,this.router=o,this.title=N.templates,this.dataSource=new ie(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>`/srpt/templates/${r.id}`).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(N.category),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),oe.menu([O.edit(r=>this.openSaveComponent(r)),O.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(pe,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(x,{data:te.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(U),s(S),s($));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-templates"]],features:[E([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(d(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),T("changed",function(){return o.get();}),l(2,"button",3),T("click",function(){return o.openSaveComponent();}),l(3,"span"),L(4,0),c()()(),l(5,"sz-ui-table",4),T("update",function(){return o.get();}),c()),e&2&&(a("title",o.title),m(),a("dataSource",o.dataSource),m(4),a("dataSource",o.dataSource));},dependencies:[w,ae,ne,C],encapsulation:2});let n=i;return n;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[S],imports:[F.forChild([{path:"",component:de}]),g,q,se,C,V]});let n=i;return n;})();export{et as TemplatesModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/