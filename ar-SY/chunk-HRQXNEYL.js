import{a as E}from"./chunk-KIS3J6T2.js";import{b as ne}from"./chunk-BESYPRAL.js";import{a as f}from"./chunk-LSLYIXXD.js";import{a as d,b as ee,d as te,f as oe,i as ie,j as re}from"./chunk-7U2WIWHF.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import{e as Q,f as J,g as K,i as W,j as Z,k as x}from"./chunk-WN2NFEA2.js";import"./chunk-6FUK3GWV.js";import{b as q}from"./chunk-XCAJ3ZHI.js";import{h as C}from"./chunk-Q5LDCOCY.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import{c as j,q as w,t as H}from"./chunk-3ZKUNSZU.js";import{c as X}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{c as Y,d as k}from"./chunk-LMCANXRL.js";import"./chunk-AIP5TNUP.js";import{d as M,f as h,g as P,k as v,m as y,p as z,q as I,t as b}from"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{a as L,e as A}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ia as G,ka as B}from"./chunk-WG6MZMNK.js";import"./chunk-6DPHD5PI.js";import{Db as a,Nb as l,Ob as u,Pb as p,Zb as O,_b as S,hb as m,ib as n,pc as T,qc as _,ua as c,ub as N,uc as D,vc as g}from"./chunk-WLX3OMWV.js";var ae=(()=>{let i=class i extends Q{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(se=>E[se]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(I),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[N,_],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),p(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[b,v,h,P,y,z,$,U,H,j,Z,J,K,w],encapsulation:2});let s=i;return s;})();var Xe=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=Y.documents,this.dataSource=new te(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>k(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ee.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(W,{data:x.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([]),_],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",1),D(1,"personName"),l(2,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),l(3,"button",3),S("click",function(){return o.openSaveComponent();}),l(4,"span"),O(5,0),u()()(),l(6,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",g(1,5,o.person)),m(2),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[A,B,G,re,ie,oe,q,ne],encapsulation:2});let s=i;return s;})();export{Xe as PersonDocumentsComponent};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/