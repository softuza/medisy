import{a as ae}from"./chunk-OTVB24EL.js";import{a as E}from"./chunk-VHZOFILV.js";import{a as te,c as oe,e as ie,j as re,k as ne,l as d}from"./chunk-UEYVTK2C.js";import"./chunk-ZTHN4A32.js";import"./chunk-V25QNL5J.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-VBW76653.js";import"./chunk-GLR3572R.js";import{b as J}from"./chunk-6I36F62R.js";import{f as C}from"./chunk-2F3BHEDP.js";import{a as X,b as Y,d as w,e as q,g as H}from"./chunk-UDDJQSJH.js";import{t as j,x as k,z as B}from"./chunk-PLHMF4AU.js";import{Ba as V,Ca as G,J as R,N as L,d as M,f as D,g as v,k as A,m as z,p as b,q as I,t as y,ya as $}from"./chunk-76TLQ37S.js";import"./chunk-TB2PBBV5.js";import{Ea as F,Ga as U}from"./chunk-4F3G4NSL.js";import{Fb as p,Gb as u,Hb as l,M as S,Rb as O,Tb as f,gb as m,hb as a,hc as h,kc as P,nc as T,oa as _,ob as N,oc as g,vb as s}from"./chunk-WEGHM63Q.js";var c=function(i){return i.NationalCard="NationalCard",i.BankCard="BankCard",i.DriverLicense="DriverLicense",i.Passport="Passport",i.TravelDocument="TravelDocument",i.Other="Other",i;}(c||{});var se=(()=>{let r=class r extends K{constructor(e,t,o,n){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=n,this.documentTypes=Object.keys(c).map(me=>c[me]),this.form=t.group({referenceNumber:[n.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[n.personDocument?.documentType??c.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(a(E),a(I),a(X),a(Y));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[N,P],decls:6,vars:5,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(s("header",o.header),m(2),s("formGroup",o.form),m(2),s("source",o.documentTypes)("localizedValue",!0),m(),s("actions",o.actions));},dependencies:[y,A,D,v,z,b,H,q,B,j,x,Q,W,k],encapsulation:2});let i=r;return i;})();var qe=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=V.documents,this.dataSource=new oe(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(d.uuid("id"),d.uuid("personId"),d.string("documentType").setContentFormat(n=>G(n.documentType)),d.string("referenceNumber"),d.date("createdAt",!1),d.date("updatedAt",!1),te.menu([C.edit(n=>this.openSaveComponent(n)),C.delete(n=>this.openPersonDocumentDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personDocument:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(a(w),a(E),a(R));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[h([]),P],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-info",0),T(1,"personName"),p(2,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),p(3,"button",2),f("click",function(){return o.openSaveComponent();}),p(4,"span"),O(5,3),u()()(),p(6,"sz-ui-table",4),f("update",function(){return o.get();}),u()),t&2&&(s("title",o.title)("subtitle",g(1,5,o.person)),m(2),s("dataSource",o.dataSource),m(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,U,F,ne,re,ie,J,ae],encapsulation:2});let i=r;return i;})();export{qe as PersonDocumentsComponent};/**i18n:b6356af15a472d72c43a2a12f81780e7aeabf4debd55cf9990b19b5b7f0f0471*/