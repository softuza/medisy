import{a as ae}from"./chunk-LTYLJZW4.js";import{a as P}from"./chunk-BK3JJVAK.js";import{a as te,c as oe,e as ie,j as re,k as ne,l as d}from"./chunk-34MSZMSB.js";import"./chunk-6DXJR33O.js";import"./chunk-DI33WAJD.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-JH67BC54.js";import"./chunk-DIVK5N2T.js";import{b as J}from"./chunk-WN7LVT7X.js";import{f as C}from"./chunk-MWQCS4K5.js";import{a as X,b as Y,d as w,e as q,g as H}from"./chunk-NAVTPQ6X.js";import{u as j,x as k,z as B}from"./chunk-OWPLOJQP.js";import{Ca as V,Da as G,J as R,N as L,d as M,f as D,g as v,k as A,m as z,p as b,q as I,t as y,za as $}from"./chunk-YSD3E7UX.js";import"./chunk-QYJYVPVW.js";import{Ea as F,Ga as U}from"./chunk-NQOK3G2M.js";import{Fb as p,Gb as u,Hb as l,M as S,Rb as O,Tb as f,gb as m,hb as a,hc as h,kc as E,oa as _,ob as N,oc as T,pc as g,vb as s}from"./chunk-XEAZENSO.js";var c=function(i){return i.NationalCard="NationalCard",i.BankCard="BankCard",i.DriverLicense="DriverLicense",i.Passport="Passport",i.TravelDocument="TravelDocument",i.Other="Other",i;}(c||{});var se=(()=>{let r=class r extends K{constructor(e,t,o,n){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=n,this.documentTypes=Object.keys(c).map(me=>c[me]),this.form=t.group({referenceNumber:[n.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[n.personDocument?.documentType??c.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(a(P),a(I),a(X),a(Y));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[N,E],decls:6,vars:5,consts:()=>{let e;e="Number";let t;return t="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(s("header",o.header),m(2),s("formGroup",o.form),m(2),s("source",o.documentTypes)("localizedValue",!0),m(),s("actions",o.actions));},dependencies:[y,A,D,v,z,b,H,q,B,j,x,Q,W,k],encapsulation:2});let i=r;return i;})();var qe=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=V.documents,this.dataSource=new oe(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(d.uuid("id"),d.uuid("personId"),d.string("documentType").setContentFormat(n=>G(n.documentType)),d.string("referenceNumber"),d.date("createdAt",!1),d.date("updatedAt",!1),te.menu([C.edit(n=>this.openSaveComponent(n)),C.delete(n=>this.openPersonDocumentDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personDocument:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(a(w),a(P),a(R));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[h([]),E],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-info",0),T(1,"personName"),p(2,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),p(3,"button",2),f("click",function(){return o.openSaveComponent();}),p(4,"span"),O(5,3),u()()(),p(6,"sz-ui-table",4),f("update",function(){return o.get();}),u()),t&2&&(s("title",o.title)("subtitle",g(1,5,o.person)),m(2),s("dataSource",o.dataSource),m(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,U,F,ne,re,ie,J,ae],encapsulation:2});let i=r;return i;})();export{qe as PersonDocumentsComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/