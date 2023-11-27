import{a as de}from"./chunk-WUX3U36K.js";import{a as E}from"./chunk-NMKPVVJG.js";import{d as _,g as p}from"./chunk-LV4PZCIV.js";import"./chunk-XMV3WQ4U.js";import"./chunk-3ERE5XXW.js";import"./chunk-YECODXW4.js";import{a as v}from"./chunk-HGG4SPXY.js";import{b as ne,c as se,e as me,g as ae,s as pe,t as le}from"./chunk-DTDLQFEI.js";import{c as Z,h as x,i as ee,j as te,l as oe,m as ie,n as re}from"./chunk-SN47SBJJ.js";import{a as q,b as H,d as J,e as K,g as Q}from"./chunk-FNLNZMXX.js";import{B,D as X,o as V,y as k}from"./chunk-H22FBATM.js";import{d as T,f as z,g as D,h as F,l as A,m as R,n as L,o as j,p as U,s as g}from"./chunk-IUM5Y4DP.js";import{a as y}from"./chunk-DQFF7ZV7.js";import{b as W}from"./chunk-2H6GRCHT.js";import"./chunk-HUJ4SFSJ.js";import{a as $,e as G}from"./chunk-7TGQVE3C.js";import{i as N}from"./chunk-HXVM5UCI.js";import"./chunk-QCDHUYXG.js";import"./chunk-QWTR64PL.js";import{Pa as Y,Ra as w}from"./chunk-53RWJDYX.js";import{Bb as l,Cb as S,Db as a,L as C,Nb as O,Pb as M,Zb as P,ac as u,cb as c,db as r,ec as I,fc as b,kb as h,la as d,nb as s}from"./chunk-M2QTEBXZ.js";var ue=(()=>{let i=class i extends V{constructor(t,o){super(t),this.ngControl=t,this.typeI18nPipe=o,this.options=Object.keys(_).map(e=>_[e]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",this.optionContent=e=>this.typeI18nPipe.transform(e);}ngOnInit(){this.control=this.ngControl.control;}};i.ɵfac=function(o){return new(o||i)(r(z,10),r(p));},i.ɵcmp=d({type:i,selectors:[["medisy-form-field-document-type"]],standalone:!0,features:[P([p]),h,u],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(o,e){o&1&&a(0,"sz-ui-form-field-select",0),o&2&&s("formControl",e.control)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent);},dependencies:[g,D,R,B],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let n=i;return n;})();var fe=(()=>{let i=class i extends x{constructor(t,o,e,m){super(e),this.mpplService=t,this.fb=o,this.dialog=e,this.data=m,this.form=o.group({referenceNumber:[m.personDocument?.referenceNumber,[T.maxLength(128)]],documentType:[m.personDocument?.documentType??_.DriverLicense,[T.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(r(E),r(U),r(q),r(H));},i.ɵcmp=d({type:i,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[h,u],decls:6,vars:3,consts:()=>{let t;return t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",t],["formControlName","documentType"],[3,"actions"]];},template:function(o,e){o&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),S()(),a(5,"sz-ui-dialog-actions",4)),o&2&&(s("header",e.header),c(2),s("formGroup",e.form),c(3),s("actions",e.actions));},dependencies:[g,A,D,F,L,j,Q,K,X,k,ie,ee,te,ue],encapsulation:2});let n=i;return n;})();var nt=(()=>{let i=class i{constructor(t,o,e,m){this.dialog=t,this.mpplService=o,this.route=e,this.typeI18nPipe=m,this.title=y.documents,this.dataSource=new me(),this.person=this.route.snapshot.data.person,this.dataSource.addRows(se.default([ne.text("referenceNumber",y.number),v.documentType(f=>this.typeI18nPipe.transform(f.documentType)),v.createdAt(),v.menu([N.edit(f=>this.openSaveComponent(f)),N.delete(f=>this.openPersonDocumentDeleteComponent(f))])])),this.get();}openSaveComponent(t){this.dialog.open(fe,{data:{personId:this.person.id,personDocument:t}}).afterClosed().pipe(C(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonDocumentDeleteComponent(t){this.dialog.open(oe,{data:re.delete(this.mpplService.persons.documents.delete(t.personId,t.id),t)}).afterClosed().pipe(C(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.buildRequest()).pipe(Z(this.dataSource.indicator),C(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(r(J),r(E),r($),r(p));},i.ɵcmp=d({type:i,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[P([p]),u],decls:7,vars:7,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(a(0,"sz-ui-header-info",0),I(1,"personName"),l(2,"sz-ui-table-filter",1),M("search",function(){return e.get();}),l(3,"button",2),M("click",function(){return e.openSaveComponent();}),l(4,"span"),O(5,3),S()()(),l(6,"sz-ui-table",4),M("update",function(){return e.get();}),S()),o&2&&(s("title",e.title)("subTitle",b(1,5,e.person)),c(2),s("filter",e.dataSource.filter),c(4),s("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[G,w,Y,le,pe,ae,W,de],encapsulation:2});let n=i;return n;})();export{nt as PersonDocumentsComponent};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/