import{a as M}from"./chunk-CNH2IQRD.js";import{b as ae}from"./chunk-5NPK56XY.js";import{a as E}from"./chunk-EQ3ORZ2T.js";import{a as l,b as te,d as oe,f as ie,i as re,j as ne}from"./chunk-RGXIKMKC.js";import"./chunk-VRCSACJH.js";import"./chunk-GU4WFXGT.js";import"./chunk-BNSJPKLO.js";import{f as J,g as K,h as W,j as Z,k as x,l as ee}from"./chunk-55JERGAK.js";import"./chunk-YYI2KTIZ.js";import{b as Q}from"./chunk-VSNS76N3.js";import{j as N}from"./chunk-RMS73U75.js";import{a as F,b as U,d as $,e as V,g as G}from"./chunk-GYDCMUMI.js";import{c as X,s as H,v as q}from"./chunk-VAFOXX63.js";import{c as Y}from"./chunk-W4UR2Y35.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c as k,d as w}from"./chunk-HXWKRRDN.js";import"./chunk-QBI5CVQV.js";import{d as C,f as P,g as v,k as y,m as z,p as I,q as b,t as L}from"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{a as A,e as R}from"./chunk-UR27RSXA.js";import"./chunk-SUZUBBLM.js";import{a as B,c as j}from"./chunk-PPOSM6EZ.js";import"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Cb as p,Db as u,Eb as d,I as c,Ob as h,Qb as _,db as m,eb as n,ec as T,hc as f,ka as S,lb as O,lc as D,mc as g,sb as a}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";var se=(()=>{let i=class i extends J{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(M).map(me=>M[me]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[C.maxLength(128)]],documentType:[r.personDocument?.documentType??M.DriverLicense,[C.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(E),n(b),n(F),n(U));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[O,f],decls:6,vars:5,consts:()=>{let e;e="Number";let t;return t="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),d(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",o.header),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[L,y,P,v,z,I,G,V,q,X,x,K,W,H],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=k.documents,this.dataSource=new oe(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(l.uuid("id"),l.string("documentType").setValueGetter(r=>w(r.documentType)),l.string("referenceNumber"),l.date("createdAt",!1),l.date("updatedAt",!1),te.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personDocument:e}}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(Y(this.dataSource.indicator),c(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n($),n(E),n(A));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([]),f],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(d(0,"sz-ui-header-info",0),D(1,"personName"),p(2,"sz-ui-table-search-filter",1),_("changed",function(){return o.get();}),p(3,"button",2),_("click",function(){return o.openSaveComponent();}),p(4,"span"),h(5,3),u()()(),p(6,"sz-ui-table",4),_("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",g(1,5,o.person)),m(2),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[R,j,B,ne,re,ie,Q,ae],encapsulation:2});let s=i;return s;})();export{ke as PersonDocumentsComponent};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/