import{a as C}from"./chunk-7ICGQMMS.js";import{b as ae}from"./chunk-LUEEPCT5.js";import{a as M}from"./chunk-SJAHXW3C.js";import{a as d,b as te,d as oe,f as ie,k as re,l as ne}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as J}from"./chunk-HKZIVJYM.js";import{g as N}from"./chunk-PNII32UO.js";import{a as F,b as U,d as $,e as V,g as B}from"./chunk-V6ACGGWJ.js";import{l as w,p as q,r as H}from"./chunk-VBUQVK7Q.js";import{c as X}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as Y,d as k}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as E,f as P,g as v,k as I,m as z,p as y,q as b,t as L}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as A,e as R}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as G,c as j}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as p,Gb as u,Hb as l,M as c,Rb as T,Tb as _,gb as m,hb as n,hc as g,kc as f,nc as D,oa as S,ob as h,oc as O,vb as a}from"./chunk-UDYUYOMJ.js";var se=(()=>{let i=class i extends K{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(C).map(me=>C[me]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[E.maxLength(128)]],documentType:[r.personDocument?.documentType??C.DriverLicense,[E.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(M),n(b),n(F),n(U));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-mppl-person-documents-save"]],standalone:!0,features:[h,f],decls:6,vars:5,consts:()=>{let e;e="Number";let t;return t="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",o.header),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[L,I,P,v,z,y,B,V,H,w,x,Q,W,q],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=Y.documents,this.dataSource=new oe(),this.person=this.route.snapshot.data.person,this.dataSource.columns.push(d.uuid("id"),d.uuid("personId"),d.string("documentType").setContentFormat(r=>k(r.documentType)),d.string("referenceNumber"),d.date("createdAt",!1),d.date("updatedAt",!1),te.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personDocument:e}}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.buildRequest()).pipe(X(this.dataSource.indicator),c(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n($),n(M),n(A));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-mppl-person-documents"]],standalone:!0,features:[g([]),f],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-info",0),D(1,"personName"),p(2,"sz-ui-table-search-filter",1),_("changed",function(){return o.get();}),p(3,"button",2),_("click",function(){return o.openSaveComponent();}),p(4,"span"),T(5,3),u()()(),p(6,"sz-ui-table",4),_("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",O(1,5,o.person)),m(2),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[R,j,G,ne,re,ie,J,ae],encapsulation:2});let s=i;return s;})();export{ke as PersonDocumentsComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/