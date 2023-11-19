import{b as v}from"./chunk-JMZ6IH5D.js";import{a as ie,b as ae,c as ne,e as le,g as C,o as se,p as de}from"./chunk-PDSP3MQP.js";import"./chunk-BDKYF43S.js";import{c as y,h as W,i as Z,j as ee,l as te,m as oe,n as re}from"./chunk-JUKWJGHA.js";import{a as X,b as q,d as x,e as H,g as J}from"./chunk-LR6DSKQQ.js";import{C as w,p as G}from"./chunk-CJ3L35E7.js";import{d as D,f as T,g as E,h as V,l as z,m as F,n as N,o as P,p as Y,s as h}from"./chunk-FZFNR6NR.js";import{a as S}from"./chunk-X3ZOFRYL.js";import{a as Q}from"./chunk-XCF6KXCP.js";import{a as K}from"./chunk-AQB7U7BU.js";import{a as B,d as U,e as $}from"./chunk-4G55JY3H.js";import{i as M}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as j,Ra as k}from"./chunk-W55BWEJG.js";import{Bb as s,Cb as m,Db as p,L as c,Nb as R,Pb as b,Wb as g,Xb as I,Zb as L,ac as f,bc as O,cb as d,cc as A,db as a,kb as _,la as u,nb as l}from"./chunk-3QIFGVJ6.js";var ue=(()=>{let r=class r extends G{constructor(o,t){super(o),this.ngControl=o,this.mlabService=t,this.options=[],this.label="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.optionContent=e=>e.testClass.name,this.optionValue=e=>e.id;}ngOnInit(){this.control=this.ngControl.control,this.mlabService.referenceValues.getItems({pageIndex:1,pageSize:-1,includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe(y(this.indicator),c(1)).subscribe(o=>{this.options=o;});}};r.ɵfac=function(t){return new(t||r)(a(T,10),a(S));},r.ɵcmp=u({type:r,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[L([]),_,f],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(t,e){t&1&&p(0,"sz-ui-form-field-select",0),t&2&&l("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[h,E,F,w],encapsulation:2});let i=r;return i;})();var _e=()=>[],be=i=>[i],pe=(()=>{let r=class r extends W{constructor(o,t,e,n){super(e),this.mlabService=o,this.fb=t,this.dialog=e,this.data=n,this.form=t.group({referenceValueId:[n.laboratoryReferenceValue?.referenceValueId,[D.required]]});}submit(){this.IsValid()&&(this.data.laboratoryReferenceValue?this.save(this.mlabService.laboratories.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value)):this.save(this.mlabService.laboratories.referenceValues.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(a(S),a(Y),a(X),a(q));},r.ɵcmp=u({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[_,f],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(t,e){t&1&&(p(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-reference-value",2),m()(),p(4,"sz-ui-dialog-actions",3)),t&2&&(l("header",e.header),d(2),l("formGroup",e.form),d(1),l("excludeLaboratoryIds",e.data.laboratoryReferenceValue?O(4,_e):A(5,be,e.data.laboratoryId)),d(1),l("actions",e.actions));},dependencies:[h,z,E,V,N,P,oe,Z,ee,J,H,C,ue],encapsulation:2});let i=r;return i;})();var rt=(()=>{let r=class r{constructor(o,t,e){this.dialog=o,this.mlabService=t,this.route=e,this.dataSource=new ae(K.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ne.default([ie.text("referenceValue","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",n=>n.referenceValue.testClass.name),v.createdAt(),v.menu([M.edit(n=>{this.openSaveComponent(n);}),M.delete(n=>{this.openLaboratoryReferenceValueDeleteComponent(n);})])])),this.get();}openSaveComponent(o){this.dialog.open(pe,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:o}}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openLaboratoryReferenceValueDeleteComponent(o){this.dialog.open(te,{data:re.delete(this.mlabService.laboratories.referenceValues.delete(o.laboratoryId,o.id),o)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.referenceValues.get(this.laboratory.id,this.dataSource.filterModel).pipe(y(this.dataSource.indicator)).pipe(c(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};r.ɵfac=function(t){return new(t||r)(a(x),a(S),a(B));},r.ɵcmp=u({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[f],decls:11,vars:5,consts:()=>{let o;o="\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;return t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],o,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(s(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),R(3,2),m(),s(4,"a",3),g(5),m()()(),s(6,"sz-ui-table-filter",4),b("search",function(){return e.get();}),s(7,"button",5),b("click",function(){return e.openSaveComponent();}),s(8,"span"),R(9,6),m()()(),s(10,"sz-ui-table",7),b("update",function(){return e.get();}),m()),t&2&&(d(5),I(e.laboratory.name),d(1),l("dataSource",e.dataSource),d(4),l("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[$,U,Q,de,se,le,C,k,j],encapsulation:2});let i=r;return i;})();export{rt as LaboratoryReferenceValuesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/