import{a as E}from"./chunk-XUU2RLY3.js";import{b as ne}from"./chunk-XYWLF7GH.js";import{a as f}from"./chunk-6MSPST2E.js";import{a as d,b as ee,d as te,f as oe,i as ie,j as re}from"./chunk-KDQ5XKIO.js";import"./chunk-GANFR7F4.js";import"./chunk-Z4TWWZUI.js";import"./chunk-RWDFLCXR.js";import{e as Q,f as J,g as K,i as W,j as Z,k as x}from"./chunk-NHCTASKL.js";import"./chunk-3HSHJW6B.js";import{b as q}from"./chunk-SVG5RMLM.js";import{h as C}from"./chunk-ZG7TD6PA.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-EJJSD5UB.js";import"./chunk-SSASL3ZT.js";import{c as j,q as w,t as H}from"./chunk-ILYIUFTB.js";import{c as X}from"./chunk-SNUH52NX.js";import"./chunk-U7ZOM2YQ.js";import"./chunk-AZIHVEHP.js";import{c as Y,d as k}from"./chunk-4533BRGQ.js";import"./chunk-WQK2CTKL.js";import{d as M,f as g,g as P,k as v,m as y,p as z,q as I,t as b}from"./chunk-YFLYFTNW.js";import"./chunk-HBG37XGG.js";import{a as L,e as A}from"./chunk-TXI72R6B.js";import"./chunk-CFWDSB5H.js";import{ia as G,ka as B}from"./chunk-M5SMZ234.js";import"./chunk-EIB4LKCD.js";import{Db as a,Nb as p,Ob as u,Pb as l,Zb as O,_b as S,hb as m,ib as n,pc as h,qc as _,ua as c,ub as N,uc as T,vc as D}from"./chunk-NXFEVB6F.js";var ae=(()=>{let i=class i extends Q{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(se=>E[se]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(I),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[N,_],decls:6,vars:5,consts:()=>{let e;e="Number";let t;return t="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",o.header),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[b,v,g,P,y,z,$,U,H,j,Z,J,K,w],encapsulation:2});let s=i;return s;})();var Xe=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=Y.documents,this.dataSource=new te(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>k(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ee.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(W,{data:x.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[h([]),_],decls:7,vars:7,consts:()=>{let e;return e="Add",[e,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-info",1),T(1,"personName"),p(2,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),p(3,"button",3),S("click",function(){return o.openSaveComponent();}),p(4,"span"),O(5,0),u()()(),p(6,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",D(1,5,o.person)),m(2),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[A,B,G,re,ie,oe,q,ne],encapsulation:2});let s=i;return s;})();export{Xe as PersonDocumentsComponent};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/