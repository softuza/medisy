import{a as $}from"./chunk-XTRE4QOH.js";import{a as Ce}from"./chunk-OQ3TG63C.js";import{d as se,e as me,f as L,g as V,i as le,j as v,k as pe}from"./chunk-SO5WW7X3.js";import{g as te,s as oe,t as ie,u as re,v as ne}from"./chunk-BXKAZQ64.js";import{a as O,b as N,d as ae,e as I,g as h}from"./chunk-VWPRYYV7.js";import"./chunk-UKCE2Q4Z.js";import{a as Ee}from"./chunk-SIM3MWAY.js";import{b as X}from"./chunk-BYYBYZIV.js";import{a as j,b as de,c as ue,d as ce,f as fe,n as Se,o as _e}from"./chunk-CQQPNAJZ.js";import{b as w}from"./chunk-HEEN2CKG.js";import"./chunk-E7VUVWEF.js";import{b as P}from"./chunk-XJ54ZRFR.js";import{E as x,d as B,f as q,g,h as A,l as F,m as J,n as y,o as b,p as D,r as K,s as S,t as W,v as Z}from"./chunk-X72CBQLP.js";import{a as d}from"./chunk-Y376CRI2.js";import"./chunk-SNR3XRMI.js";import{a as z}from"./chunk-PIKBUH2I.js";import{a as T}from"./chunk-3HWNDRT6.js";import{J as Q,Va as ee,n as f}from"./chunk-P44VDH7R.js";import{Ab as l,Bb as c,Cb as p,L as _,Mb as G,Pb as R,Zb as E,ac as M,ea as k,eb as s,fb as a,ma as u,mb as C,na as H,pb as n}from"./chunk-3CXVAQY6.js";var Y=(()=>{let o=class o extends te{constructor(i,t){super(i),this.ngControl=i,this.mlabService=t,this.options=[],this.label="\u0648\u062D\u062F\u0629",this.optionContent=e=>e.name,this.optionValue=e=>e.id,this.mlabService.units.getItems(z.unpagedSorted("name")).pipe(_(1),P(this.indicator)).subscribe(e=>{this.options=e;});}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(t){return new(t||o)(a(q,10),a(d));},o.ɵcmp=u({type:o,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[E([d]),C,M],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(t,e){t&1&&p(0,"sz-ui-form-field-select",0),t&2&&n("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[f,S,g,J,ie],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=o;return r;})();var ve=(()=>{let o=class o extends se{constructor(i,t,e){super(t),this.fb=i,this.dialog=t,this.data=e,this.comparisonOperators=Object.values(Ee),this.form=i.group({testClassId:[e.testClassId],unitId:[e.unitId],includeLaboratoryIds:[e.includeLaboratoryIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)(a(D),a(O),a(N));},o.ɵcmp=u({type:o,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[E([]),C,M],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(t,e){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),c()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",e.header),s(2),n("formGroup",e.form),s(1),n("emptyOption",!0),s(1),n("emptyOption",!0),s(1),n("multiple",!0),s(1),n("actions",e.actions));},dependencies:[f,S,F,g,A,y,b,h,I,v,L,V,$,Y,Ce],encapsulation:2});let r=o;return r;})();var Re=(()=>{let o=class o extends me{constructor(i,t,e,m){super(e),this.mlabService=i,this.fb=t,this.dialog=e,this.data=m,this.form=t.group({description:[m?.description,[B.maxLength(4096)]],testClassId:[m?.testClassId,[B.required]],unitId:[m?.unitId,[]],multiplier:[m?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(d),a(D),a(O),a(N));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[E([]),C,M],decls:8,vars:3,consts:()=>{let i;i="\u0627\u0644\u0648\u0635\u0641";let t;return t="\u0645\u0636\u0627\u0639\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","unitId"],["formControlName","multiplier","label",t],["formControlName","testClassId"],[3,"actions"]];},template:function(t,e){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),c()(),p(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",e.header),s(2),n("formGroup",e.form),s(5),n("actions",e.actions));},dependencies:[f,S,F,g,A,y,b,h,I,x,fe,v,L,V,ne,oe,re,Y,$],encapsulation:2});let r=o;return r;})();var Ae=(()=>{let o=class o{constructor(i,t){this.dialog=i,this.mlabService=t,this.dataSource=new de(z.paged()),this.dataSource.addRows(ue.default([j.hyperlink("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",e=>e.id,e=>e.testClass.name),j.text("unit","\u0648\u062D\u062F\u0629",e=>e.multiplier?`10^${e.multiplier.toExponential(0).split("e").map(m=>Number(m))[1]}/${e.unit?.abbreviation}`:e.unit?.abbreviation),X.createdAt(),X.menu([w.edit(e=>this.openSaveComponent(e)),w.delete(e=>this.openReferenceValueDeleteComponent(e))])])),this.get();}openSaveComponent(i){this.dialog.open(Re,{data:i}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openFilterComponent(){this.dialog.open(ve,{data:this.dataSource.filterModel}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}openReferenceValueDeleteComponent(i){this.dialog.open(le,{data:pe.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.filterModel).pipe(P(this.dataSource.indicator),_(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)(a(ae),a(d));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:()=>{let i;i="\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;return t="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(l(0,"sz-ui-header-basic")(1,"h5",0),G(2,1),c()(),l(3,"sz-ui-table-filter",2),R("search",function(){return e.get();})("filter",function(){return e.openFilterComponent();}),l(4,"button",3),R("click",function(){return e.openSaveComponent();}),l(5,"span"),G(6,4),c()()(),l(7,"sz-ui-table",5),R("update",function(){return e.get();}),c()),t&2&&(s(3),n("dataSource",e.dataSource),s(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[W,T,Se,ce],encapsulation:2});let r=o;return r;})();var Fe=[{path:"",component:Ae}];var wt=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=H({type:o}),o.ɵinj=k({providers:[d],imports:[f,K,S,Q.forChild(Fe),h,ee,Z,T,_e,v]});let r=o;return r;})();export{wt as ReferenceValuesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/