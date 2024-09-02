import{a as _}from"./chunk-ZDPRNFLQ.js";import{b as g}from"./chunk-XCI3HIRX.js";import{a as f}from"./chunk-AFDVYKVT.js";import{a as m,d as K,e as W,f as Z,i as x,j as ee}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as w,f as k,g as q,h as H,j as Q,k as J}from"./chunk-JDBQ45YP.js";import"./chunk-ZGUTF2MC.js";import{j as a,k as j}from"./chunk-53DZ6NLX.js";import{a as A,b as L,d as F,e as R,g as V}from"./chunk-7B3GMYBR.js";import{c as U,r as X,t as Y}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as E,f as D,g as T,l as O,n as b,q as P,r as v,u as z}from"./chunk-QZRJHJEV.js";import{Y as G,Z as $}from"./chunk-4QPQ7IQ3.js";import{a as y,d as I}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{la as B}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as d,Kb as l,Lb as c,Wb as C,bb as p,ja as r,mb as M,mc as N,na as u,nc as S,yb as n}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var te=(()=>{let i=class i extends k{constructor(){let e=r(A);super(e),this.mpplService=r(f),this.fb=r(v),this.data=r(L),this.documentTypes=Object.keys(_).map(h=>_[h]);let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({referenceNumber:[o.personDocument?.referenceNumber,[E.maxLength(128)]],documentType:[o.personDocument?.documentType??_.DriverLicense,[E.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[M,S],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),l()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),n("formGroup",o.form),p(2),n("source",o.documentTypes)("localizedValue",!0),p(),n("actions",o.actions));},dependencies:[z,O,D,T,b,P,V,R,Y,U,X,J,q,H],encapsulation:2});let s=i;return s;})();var Re=(()=>{let i=class i{constructor(){this.personNamePipe=r(g),this.mpplService=r(f),this.route=r(y),this.dialog=r(F),this.dataSource=new K(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:G.documents,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0,menu:j.default().setItems([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("documentType").setValueGetter(e=>$(e.documentType)),m.string("referenceNumber"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.delete(this.openPersonDocumentDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(te,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(Q,{data:w.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(W(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[N([g]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-table-bar",0),C("changed",function(){return o.get();}),l(),d(1,"sz-ui-table",1),C("update",function(){return o.get();}),l()),t&2&&(n("config",o.appBarConfig)("dataSource",o.dataSource),p(),n("dataSource",o.dataSource));},dependencies:[I,B,ee,x,Z],encapsulation:2});let s=i;return s;})();export{Re as PersonDocumentsComponent};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/