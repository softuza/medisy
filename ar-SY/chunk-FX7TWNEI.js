import{a as C}from"./chunk-HKKNARWM.js";import{b as g}from"./chunk-4WDDXTAE.js";import{a as h}from"./chunk-3CTEWNW5.js";import{a,d as W,e as Z,f as x,i as ee,j as te}from"./chunk-Z6PUY476.js";import"./chunk-QV2ZQHMC.js";import"./chunk-IABH27XU.js";import"./chunk-O2HTTUKG.js";import{b as k,f as q,g as H,h as Q,j as J,k as K}from"./chunk-M637VPZN.js";import"./chunk-T2EQVSUG.js";import{j as s,k as w}from"./chunk-VK4CZRIZ.js";import{a as L,b as F,d as R,e as V,g as B}from"./chunk-LXPLDGFP.js";import{c as j,r as X,t as Y}from"./chunk-QEZI75P7.js";import"./chunk-X34YPVYV.js";import"./chunk-TCCIVYCZ.js";import"./chunk-7WCYUC4Z.js";import"./chunk-PQYDHBBD.js";import"./chunk-JN2TNDGG.js";import{d as E,f as T,g as O,l as v,n as P,q as b,r as z,u as y}from"./chunk-BHO3RGW2.js";import{Y as $,Z as U}from"./chunk-TGOP7ZDO.js";import{a as I,d as A}from"./chunk-BMCN66UE.js";import"./chunk-6RTBVNC4.js";import{la as G}from"./chunk-O5CF5VDW.js";import"./chunk-X5L7PWWN.js";import{Jb as u,Kb as c,Lb as f,Wb as M,ab as m,bb as l,ja as d,mc as D,na as S,nc as _,pb as N,yb as r}from"./chunk-2TFHNGIL.js";import"./chunk-IL567IQQ.js";var oe=(()=>{let i=class i extends q{constructor(e,t,o,p){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=p,this.documentTypes=Object.keys(C).map(ie=>C[ie]),this.form=t.group({referenceNumber:[p.personDocument?.referenceNumber,[E.maxLength(128)]],documentType:[p.personDocument?.documentType??C.DriverLicense,[E.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(l(h),l(z),l(L),l(F));},i.ɵcmp=S({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[N,_],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),c()(),f(5,"sz-ui-dialog-actions",4)),t&2&&(r("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),r("formGroup",o.form),m(2),r("source",o.documentTypes)("localizedValue",!0),m(),r("actions",o.actions));},dependencies:[y,v,T,O,P,b,B,V,Y,j,X,K,H,Q],encapsulation:2});let n=i;return n;})();var $e=(()=>{let i=class i{constructor(){this.personNamePipe=d(g),this.mpplService=d(h),this.route=d(I),this.dialog=d(R),this.dataSource=new W(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:$.documents,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0,menu:w.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("documentType").setValueGetter(e=>U(e.documentType)),a.string("referenceNumber"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openPersonDocumentDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(oe,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(J,{data:k.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[D([g]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(u(0,"sz-ui-table-bar",0),M("changed",function(){return o.get();}),c(),u(1,"sz-ui-table",1),M("update",function(){return o.get();}),c()),t&2&&(r("config",o.appBarConfig)("dataSource",o.dataSource),m(),r("dataSource",o.dataSource));},dependencies:[A,G,te,ee,x],encapsulation:2});let n=i;return n;})();export{$e as PersonDocumentsComponent};/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/