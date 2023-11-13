import{a as V}from"./chunk-VWJ5B6J7.js";import{a as _e}from"./chunk-HTC5X6M7.js";import{g as ee,q as te,r as oe,s as ie,t as re}from"./chunk-T2EWQS4V.js";import{a as Ee}from"./chunk-ZENDRPYK.js";import{c as j}from"./chunk-FUUKJOPV.js";import"./chunk-YSHIJLQQ.js";import{b as w}from"./chunk-CCOUZGWD.js";import{a as B,b as pe,c as de,e as ue,g as ce,o as fe,p as Se}from"./chunk-VWYIWTAJ.js";import{c as T,g as ae,h as se,i as P,j as L,l as le,m as h,n as me}from"./chunk-4L7MXCYU.js";import{a as D,b as O,d as ne,e as N,g}from"./chunk-MLSRSUWT.js";import{i as Z}from"./chunk-VNFB3LL3.js";import{d as G,f as H,g as M,h as R,l as A,m as q,n as F,o as y,p as b,r as J,s as f}from"./chunk-IGZ5UQAZ.js";import{a as d}from"./chunk-ANLAVR6W.js";import{a as z}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as I}from"./chunk-HSBTPXYW.js";import{e as K}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{a as Q,c as W}from"./chunk-45S7AHWB.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{Ra as x}from"./chunk-5YRGD4YU.js";import{$b as C,Ab as m,Bb as c,Cb as p,L as S,Mb as Y,Ob as v,Yb as E,cb as s,da as X,db as a,kb as _,la as u,ma as k,nb as n}from"./chunk-MK3KDUIH.js";var U=(()=>{let o=class o extends ee{constructor(i,t){super(i),this.ngControl=i,this.mlabService=t,this.options=[],this.label="Unit",this.optionContent=e=>e.name,this.optionValue=e=>e.id,this.mlabService.units.getItems(I.unpagedSorted("name")).pipe(S(1),T(this.indicator)).subscribe(e=>{this.options=e;});}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(t){return new(t||o)(a(H,10),a(d));},o.ɵcmp=u({type:o,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[E([d]),_,C],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(t,e){t&1&&p(0,"sz-ui-form-field-select",0),t&2&&n("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[f,M,q,oe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=o;return r;})();var he=(()=>{let o=class o extends ae{constructor(i,t,e){super(t),this.fb=i,this.dialog=t,this.data=e,this.comparisonOperators=Object.values(Ee),this.form=i.group({testClassId:[e.testClassId],unitId:[e.unitId],includeLaboratoryIds:[e.includeLaboratoryIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)(a(b),a(D),a(O));},o.ɵcmp=u({type:o,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[E([]),_,C],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(t,e){t&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),c()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",e.header),s(2),n("formGroup",e.form),s(1),n("emptyOption",!0),s(1),n("emptyOption",!0),s(1),n("multiple",!0),s(1),n("actions",e.actions));},dependencies:[f,A,M,R,F,y,g,N,h,P,L,V,U,_e],encapsulation:2});let r=o;return r;})();var ve=(()=>{let o=class o extends se{constructor(i,t,e,l){super(e),this.mlabService=i,this.fb=t,this.dialog=e,this.data=l,this.form=t.group({description:[l?.description,[G.maxLength(4096)]],testClassId:[l?.testClassId,[G.required]],unitId:[l?.unitId,[]],multiplier:[l?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(d),a(b),a(D),a(O));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[E([]),_,C],decls:8,vars:3,consts:()=>{let i;i="Description";let t;return t="Multiplier",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","unitId"],["formControlName","multiplier","label",t],["formControlName","testClassId"],[3,"actions"]];},template:function(t,e){t&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),c()(),p(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",e.header),s(2),n("formGroup",e.form),s(5),n("actions",e.actions));},dependencies:[f,A,M,R,F,y,g,N,Z,ce,h,P,L,re,te,ie,U,V],encapsulation:2});let r=o;return r;})();var Re=(()=>{let o=class o{constructor(i,t){this.dialog=i,this.mlabService=t,this.dataSource=new pe(I.paged()),this.dataSource.addRows(de.default([B.hyperlink("testClass","Test class",e=>e.id,e=>e.testClass.name),B.text("unit","Unit",e=>e.multiplier?`10^${e.multiplier.toExponential(0).split("e").map(l=>Number(l))[1]}/${e.unit?.abbreviation}`:e.unit?.abbreviation),w.createdAt(),w.menu([j.edit(e=>this.openSaveComponent(e)),j.delete(e=>this.openReferenceValueDeleteComponent(e))])])),this.get();}openSaveComponent(i){this.dialog.open(ve,{data:i}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open(he,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(i=>{this.dataSource.updateFilterModel(i),this.get();});}openReferenceValueDeleteComponent(i){this.dialog.open(le,{data:me.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.filterModel).pipe(T(this.dataSource.indicator),S(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)(a(ne),a(d));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:()=>{let i;i="Reference Values";let t;return t="Add",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(m(0,"sz-ui-header-basic")(1,"h5",0),Y(2,1),c()(),m(3,"sz-ui-table-filter",2),v("search",function(){return e.get();})("filter",function(){return e.openFilterComponent();}),m(4,"button",3),v("click",function(){return e.openSaveComponent();}),m(5,"span"),Y(6,4),c()()(),m(7,"sz-ui-table",5),v("update",function(){return e.get();}),c()),t&2&&(s(3),n("dataSource",e.dataSource),s(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[Q,z,fe,ue],encapsulation:2});let r=o;return r;})();var Ae=[{path:"",component:Re}];var Ut=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=k({type:o}),o.ɵinj=X({providers:[d],imports:[J,f,K.forChild(Ae),g,x,W,z,Se,h]});let r=o;return r;})();export{Ut as ReferenceValuesModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/