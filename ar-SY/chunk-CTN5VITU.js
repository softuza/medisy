import{a as le}from"./chunk-6JASRKM4.js";import{a as D}from"./chunk-HVDGC7SV.js";import{a as re,c as ne,e as ae,q as se,r as me,s as d}from"./chunk-ED622WBH.js";import{a as K}from"./chunk-63BDPR5Z.js";import{a as W,h as Z,i as x,j as ee,l as te,m as oe,n as ie}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as Q}from"./chunk-AZIM6N3H.js";import{g as N}from"./chunk-F2NCOJMX.js";import{a as X,b as Y,d as q,e as H,g as J}from"./chunk-GX7FEJ3W.js";import{A as w,n as B,v as G,y as V}from"./chunk-HN3QCICR.js";import{J as $,N as U,d as O,e as z,f as P,g as b,k as F,l as A,m as I,p as L,q as R,t as v}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as j,Ga as k}from"./chunk-ILHRA673.js";import{Eb as p,Fb as S,Gb as l,M as _,Qb as E,Sb as h,fb as u,gb as s,gc as M,jc as f,na as c,nb as C,nc as T,oc as y,ub as m}from"./chunk-ORGLCS6N.js";var a=function(i){return i.NationalCard="NationalCard",i.BankCard="BankCard",i.DriverLicense="DriverLicense",i.Passport="Passport",i.TravelDocument="TravelDocument",i.Other="Other",i;}(a||{});function g(i){switch(i){case a.BankCard:return"\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case a.DriverLicense:return"\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case a.NationalCard:return"\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case a.Passport:return"\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case a.TravelDocument:return"\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case a.Other:return"\u0623\u062E\u0631\u0649";default:return"";}}var de=(()=>{let r=class r extends B{constructor(t){super(t),this.ngControl=t,this.options=Object.keys(a).map(e=>a[e]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",this.optionContent=e=>g(e);}ngOnInit(){this.control=this.ngControl.control;}};r.ɵfac=function(e){return new(e||r)(s(z,10));},r.ɵcmp=c({type:r,selectors:[["medisy-form-field-document-type"]],standalone:!0,features:[M([]),C,f],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,o){e&1&&l(0,"sz-ui-form-field-select",0),e&2&&m("formControl",o.control)("options",o.options)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("szOptionContentFn",o.optionContent);},dependencies:[v,P,A,V],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=r;return i;})();var ce=(()=>{let r=class r extends Z{constructor(t,e,o,n){super(o),this.mpplService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({referenceNumber:[n.personDocument?.referenceNumber,[O.maxLength(128)]],documentType:[n.personDocument?.documentType??a.DriverLicense,[O.required]]});}submit(){this.IsValid()&&(this.data.personDocument?this.save(this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value)):this.save(this.mpplService.persons.documents.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(s(D),s(R),s(X),s(Y));},r.ɵcmp=c({type:r,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[C,f],decls:6,vars:3,consts:()=>{let t;return t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",t],["formControlName","documentType"],[3,"actions"]];},template:function(e,o){e&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),S()(),l(5,"sz-ui-dialog-actions",4)),e&2&&(m("header",o.header),u(2),m("formGroup",o.form),u(3),m("actions",o.actions));},dependencies:[v,F,P,b,I,L,J,H,w,G,oe,x,ee,de],encapsulation:2});let i=r;return i;})();var ot=(()=>{let r=class r{constructor(t,e,o){this.dialog=t,this.mpplService=e,this.route=o,this.title=K.documents,this.dataSource=new ne(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(d.uuid("id"),d.uuid("personId"),d.string("documentType").setFormatFn(n=>g(n.documentType)),d.string("referenceNumber"),d.date("createdAt",!1),d.date("updatedAt",!1),re.menu([N.edit(n=>this.openSaveComponent(n)),N.delete(n=>this.openPersonDocumentDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(ce,{data:{personId:this.person.id,personDocument:t}}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonDocumentDeleteComponent(t){this.dialog.open(te,{data:ie.delete(this.mpplService.persons.documents.delete(t.personId,t.id),t)}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.buildRequest()).pipe(W(this.dataSource.indicator),_(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(s(q),s(D),s($));},r.ɵcmp=c({type:r,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[M([]),f],decls:7,vars:7,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(l(0,"sz-ui-header-info",0),T(1,"personName"),p(2,"sz-ui-table-search-filter",1),h("changed",function(){return o.get();}),p(3,"button",2),h("click",function(){return o.openSaveComponent();}),p(4,"span"),E(5,3),S()()(),p(6,"sz-ui-table",4),h("update",function(){return o.get();}),S()),e&2&&(m("title",o.title)("subtitle",y(1,5,o.person)),u(2),m("dataSource",o.dataSource),u(4),m("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[U,k,j,me,se,ae,Q,le],encapsulation:2});let i=r;return i;})();export{ot as PersonDocumentsComponent};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/