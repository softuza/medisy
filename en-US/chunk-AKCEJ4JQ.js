import{a as E}from"./chunk-GFCCDYUT.js";import{b as N}from"./chunk-B5LMYK6M.js";import{a as f}from"./chunk-XJZUJ5GN.js";import{a as d,b as ee,d as te,e as oe,g as ie,j as re,k as ne}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import"./chunk-4P4RPOWU.js";import{b as Q,f as J,g as K,h as W,j as Z,k as x}from"./chunk-K46Y6NGM.js";import{a as H}from"./chunk-R7EUDMGD.js";import{e as q,h as C}from"./chunk-KBWUA6E4.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-NGJJVZ6X.js";import{c as j,r as k,t as w}from"./chunk-COX3WBO6.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as X,d as Y}from"./chunk-TUR2GSJY.js";import"./chunk-Z6RT565P.js";import{d as M,f as D,g as P,l as v,n as z,q as I,r as b,u as y}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{a as L,e as A}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ja as B,la as G}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as p,Lb as u,Mb as l,Wb as h,Xb as S,bb as m,cb as n,ja as g,na as c,oc as T,pc as _,qb as O,zb as a}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var ae=(()=>{let i=class i extends J{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(se=>E[se]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(b),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[O,_],decls:6,vars:7,consts:()=>{let e;e="Number";let t;return t="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[y,v,D,P,z,I,$,U,w,j,k,x,K,W],encapsulation:2});let s=i;return s;})();var we=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.personNamePipe=g(N),this.dataSource=new te(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:X.documents,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0},this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>Y(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ee.menu([C.edit(r=>this.openSaveComponent(r)),q.divider(),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Z,{data:Q.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([N]),_],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,o){t&1&&(l(0,"sz-ui-app-bar",1),p(1,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),p(2,"button",3),S("click",function(){return o.openSaveComponent();}),p(3,"span"),h(4,0),u()()(),p(5,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("config",o.appBarConfig),m(),a("dataSource",o.dataSource),m(4),a("dataSource",o.dataSource));},dependencies:[A,G,B,ne,re,ie,H],encapsulation:2});let s=i;return s;})();export{we as PersonDocumentsComponent};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/