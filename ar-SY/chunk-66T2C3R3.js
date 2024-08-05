import{a as E}from"./chunk-4ZXKVXKP.js";import{b as N}from"./chunk-E5MJL4EQ.js";import{a as f}from"./chunk-BBUHI33F.js";import{a as d,b as x,d as ee,e as te,g as oe,j as ie,k as re}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import"./chunk-UYYWHWBI.js";import{e as H,f as Q,g as J,i as K,j as W,k as Z}from"./chunk-5NWVIDQT.js";import{a as q}from"./chunk-NXQ5VREG.js";import{h as C}from"./chunk-HWSLRHWT.js";import{a as R,b as F,d as V,e as U,g as $}from"./chunk-Z2LVGH3F.js";import{c as j,s as k,v as w}from"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as X,d as Y}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import{d as M,f as D,g as P,l as v,n as z,q as b,r as y,u as I}from"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{a as L,e as A}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ja as B,la as G}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as p,Kb as u,Lb as l,Vb as h,Wb as S,bb as m,cb as n,ja as g,na as c,nc as T,oc as _,qb as O,zb as a}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var ne=(()=>{let i=class i extends H{constructor(e,t,o,r){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=r,this.documentTypes=Object.keys(E).map(ae=>E[ae]),this.form=t.group({referenceNumber:[r.personDocument?.referenceNumber,[M.maxLength(128)]],documentType:[r.personDocument?.documentType??E.DriverLicense,[M.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(f),n(y),n(R),n(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents-save"]],standalone:!0,features:[O,_],decls:6,vars:7,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",e],["formControlName","documentType","placeholder",t,3,"source","localizedValue"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("source",o.documentTypes)("localizedValue",!0),m(),a("actions",o.actions));},dependencies:[I,v,D,P,z,b,$,U,w,j,k,W,Q,J],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.personNamePipe=g(N),this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:X.documents,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0},this.dataSource.columnDefs.push(d.uuid("id"),d.string("documentType").setValueGetter(r=>Y(r.documentType)),d.string("referenceNumber"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),x.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonDocumentDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ne,{data:{personId:this.person.id,personDocument:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonDocumentDeleteComponent(e){this.dialog.open(K,{data:Z.delete(this.mpplService.persons.documents.delete(e.personId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(f),n(L));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-people-person-documents"]],standalone:!0,features:[T([N]),_],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,o){t&1&&(l(0,"sz-ui-app-bar",1),p(1,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),p(2,"button",3),S("click",function(){return o.openSaveComponent();}),p(3,"span"),h(4,0),u()()(),p(5,"sz-ui-table",4),S("update",function(){return o.get();}),u()),t&2&&(a("config",o.appBarConfig),m(),a("dataSource",o.dataSource),m(4),a("dataSource",o.dataSource));},dependencies:[A,G,B,re,ie,oe,q],encapsulation:2});let s=i;return s;})();export{ke as PersonDocumentsComponent};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/