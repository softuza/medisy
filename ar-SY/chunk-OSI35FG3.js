import{b}from"./chunk-Z333ZEEM.js";import{a as te,b as ie,c as oe,e as re,g as ne,o as ae,p as se}from"./chunk-I7TP3TN4.js";import"./chunk-CZ465XL4.js";import{c as E,h as K,i as Q,j as W,l as Z,m as x,n as ee}from"./chunk-UJAW327Y.js";import{a as k,b as V,d as X,e as q,g as H}from"./chunk-JW5GSDNP.js";import{C as U,p as B}from"./chunk-M2QIPGOP.js";import{d as O,f as D,g as M,h as z,l as N,m as G,n as R,o as A,p as F,s as y}from"./chunk-DNMCT3KT.js";import{c as v}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as f}from"./chunk-TJ6J6WZC.js";import{a as J}from"./chunk-CSFT2WH3.js";import{a as C}from"./chunk-OGDXQP2U.js";import{a as L,d as Y,e as $}from"./chunk-KYUPPZUX.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as j,c as w}from"./chunk-M4TKXCQI.js";import"./chunk-IPZKDZL6.js";import{Bb as p,Cb as l,Db as u,L as d,Nb as g,Pb as T,Wb as P,Xb as I,Zb as h,ac as S,cb as m,db as r,kb as _,la as c,nb as s}from"./chunk-3QIFGVJ6.js";var le=(()=>{let o=class o extends B{constructor(t,i){super(t),this.ngControl=t,this.mlabService=i,this.options=[],this.label="\u0646\u0645\u0637 \u0627\u0644\u0639\u064A\u0646\u0629",this.optionContent=e=>e.name,this.optionValue=e=>e.id;}ngOnInit(){this.control=this.ngControl.control,this.mlabService.specimenTypes.getItems(C.unpagedSorted("name")).pipe(E(this.indicator),d(1)).subscribe(t=>{this.options=t;});}};o.ɵfac=function(i){return new(i||o)(r(D,10),r(f));},o.ɵcmp=c({type:o,selectors:[["medisy-form-field-specimen-type"]],standalone:!0,features:[h([]),_,S],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(i,e){i&1&&u(0,"sz-ui-form-field-select",0),i&2&&s("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[y,M,G,U],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let n=o;return n;})();var de=(()=>{let o=class o extends K{constructor(t,i,e,a){super(e),this.mlabService=t,this.fb=i,this.dialog=e,this.data=a,this.form=i.group({specimenTypeId:[a.testGroupSpecimenType?.specimenTypeId,[O.required]]});}submit(){this.IsValid()&&(this.data.testGroupSpecimenType?this.save(this.mlabService.testGroups.specimenTypes.update(this.data.testGroupId,this.data.testGroupSpecimenType?.id,this.form.value)):this.save(this.mlabService.testGroups.specimenTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(i){return new(i||o)(r(f),r(F),r(k),r(V));},o.ɵcmp=c({type:o,selectors:[["medisy-test-group-specimen-types-save"]],standalone:!0,features:[h([]),_,S],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId"],[3,"actions"]],template:function(i,e){i&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),u(3,"medisy-form-field-specimen-type",2),l()(),u(4,"sz-ui-dialog-actions",3)),i&2&&(s("header",e.header),m(2),s("formGroup",e.form),m(2),s("actions",e.actions));},dependencies:[y,N,M,z,R,A,H,q,ne,x,Q,W,le],encapsulation:2});let n=o;return n;})();var xe=(()=>{let o=class o{constructor(t,i,e){this.dialog=t,this.mlabService=i,this.route=e,this.dataSource=new ie(C.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(oe.default([te.text("specimenType","\u0646\u0645\u0637 \u0627\u0644\u0639\u064A\u0646\u0629",a=>a.specimenType.name),b.createdAt(),b.menu([v.edit(a=>this.openSaveComponent(a)),v.delete(a=>this.openTestTypeSpecimenTypeDeleteComponent(a))])])),this.get();}openSaveComponent(t){this.dialog.open(de,{data:{testGroupId:this.testGroup.id,testGroupSpecimenType:t}}).afterClosed().pipe(d(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTestTypeSpecimenTypeDeleteComponent(t){this.dialog.open(Z,{data:ee.delete(this.mlabService.testGroups.specimenTypes.delete(t.testGroupId,t.id),t)}).afterClosed().pipe(d(1)).subscribe(i=>{this.dataSource.delete(i);});}updateItem(t){this.mlabService.testGroups.specimenTypes.update(t.testGroupId,t.id,t).subscribe(i=>{this.dataSource.update(i);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroup.id,this.dataSource.filterModel).pipe(E(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(i){return new(i||o)(r(X),r(f),r(L));},o.ɵcmp=c({type:o,selectors:[["medisy-laboratory-test-group-specimen-types"]],standalone:!0,features:[S],decls:11,vars:5,consts:()=>{let t;t="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A";let i;return i="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],i,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(p(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),g(3,2),l(),p(4,"a",3),P(5),l()()(),p(6,"sz-ui-table-filter",4),T("search",function(){return e.get();}),p(7,"button",5),T("click",function(){return e.openSaveComponent();}),p(8,"span"),g(9,6),l()()(),p(10,"sz-ui-table",7),T("update",function(){return e.get();}),l()),i&2&&(m(5),I(e.testGroup.name),m(1),s("dataSource",e.dataSource),m(4),s("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[$,Y,w,j,se,ae,re,J],encapsulation:2});let n=o;return n;})();export{xe as TestGroupSpecimenTypesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/