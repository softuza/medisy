import{a as E}from"./chunk-OJ4Z6HIC.js";import{b as ne}from"./chunk-BPNIIRGV.js";import{a as f}from"./chunk-IWL2O2SW.js";import{a as d,b as x,d as ee,e as te,g as oe,j as ie,k as re}from"./chunk-RT2DOIX4.js";import"./chunk-FE7PUGPV.js";import"./chunk-WFQLTXIP.js";import"./chunk-OK2QS2H3.js";import{e as H,f as Q,g as J,i as K,j as W,k as Z}from"./chunk-CR4T7ICE.js";import"./chunk-JLE7ID76.js";import{a as q}from"./chunk-HCDVJ2I2.js";import{h as C}from"./chunk-DINSQL77.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-XG5XEC3X.js";import"./chunk-VZOUZHWP.js";import{e as j,w as Y,z as w}from"./chunk-NP4UDNU2.js";import"./chunk-KGY6UELD.js";import"./chunk-QO44V4EG.js";import{c as k,d as X}from"./chunk-SXV3ZUGK.js";import"./chunk-DPTX3R7K.js";import{d as M,f as h,g as P,l as v,n as b,q as z,r as y,u as I}from"./chunk-5RALKHWD.js";import"./chunk-CDJ3WT4B.js";import{a as L,e as A}from"./chunk-6KMSPDBU.js";import"./chunk-DC3E3YM6.js";import{ja as B,la as G}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Jb as l,Kb as u,Lb as p,Vb as O,Wb as S,bb as m,cb as n,na as c,nc as T,oc as _,qb as N,sc as D,tc as g,zb as a}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";var ae=(()=>{let i=class i extends H{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(se=>E[se]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(y),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[N,_],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),p(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[I,v,h,P,b,z,$,U,w,j,W,Q,J,Y],encapsulation:2});let s=i;return s;})();var je=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=k.documents,this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>X(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),x.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(K,{data:Z.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([]),_],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title","subtitle","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,o){t&1&&(p(0,"sz-ui-app-bar",1),D(1,"personName"),l(2,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),l(3,"button",3),S("click",function(){return o.openSaveComponent();}),l(4,"span"),O(5,0),u()()(),l(6,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("title",o.title)("subtitle",g(1,5,o.person))("backEnabled",!0),m(2),a("dataSource",o.dataSource),m(4),a("dataSource",o.dataSource));},dependencies:[A,G,B,re,ie,oe,q,ne],encapsulation:2});let s=i;return s;})();export{je as PersonDocumentsComponent};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/