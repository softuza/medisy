import{a as E}from"./chunk-M3JYMMCO.js";import{b as ne}from"./chunk-OVRZOAIC.js";import{a as f}from"./chunk-ITVYYV4T.js";import{a as d,b as ee,d as te,f as oe,i as ie,j as re}from"./chunk-GEHKM7AM.js";import"./chunk-DQHODJGC.js";import"./chunk-3BFJGKYD.js";import"./chunk-RVZ7IXG4.js";import{e as Q,f as J,g as K,i as W,j as Z,k as x}from"./chunk-4PO5ZDJC.js";import"./chunk-WXIP2PM4.js";import{a as H}from"./chunk-IWOJX2OI.js";import{h as C}from"./chunk-HXGKJPWL.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-6EVQMKN4.js";import"./chunk-BW5OH3R7.js";import{c as j,q as w,t as q}from"./chunk-BI6HPZ47.js";import{c as k}from"./chunk-HMU3GC5F.js";import"./chunk-FIREYTYE.js";import"./chunk-XEDVQBDU.js";import{c as X,d as Y}from"./chunk-BVKWOAP7.js";import"./chunk-45BT2WXK.js";import{d as M,f as h,g as P,k as v,m as b,p as y,q as z,t as I}from"./chunk-7T6A67P3.js";import"./chunk-4ZNRG2C5.js";import{a as L,e as A}from"./chunk-C2CTAUG5.js";import"./chunk-Q4PMW3F2.js";import{ja as B,la as G}from"./chunk-IU3SBL3R.js";import"./chunk-JEF2LJ7N.js";import{Hb as l,Ib as u,Jb as p,Tb as O,Ub as S,bb as m,cb as n,jc as T,kc as _,oa as c,ob as N,oc as D,pc as g,xb as a}from"./chunk-BSOORNNN.js";import"./chunk-73BG4Q2P.js";var ae=(()=>{let i=class i extends Q{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(se=>E[se]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(z),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[N,_],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),p(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[I,v,h,P,b,y,$,U,q,j,Z,J,K,w],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=X.documents,this.dataSource=new te(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>Y(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ee.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(W,{data:x.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([]),_],decls:7,vars:8,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title","subtitle","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-app-bar",1),D(1,"personName"),l(2,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),l(3,"button",3),S("click",function(){return o.openSaveComponent();}),l(4,"span"),O(5,0),u()()(),l(6,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",g(1,6,o.person))("backEnabled",!0),m(2),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[A,G,B,re,ie,oe,H,ne],encapsulation:2});let s=i;return s;})();export{ke as PersonDocumentsComponent};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/