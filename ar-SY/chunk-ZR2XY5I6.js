import{b as Oe}from"./chunk-UXGFQGEN.js";import{a as L}from"./chunk-IRYXR6JI.js";import{b as he,c as be,e as Re,g as ge,i as I,s as ye,t as ve}from"./chunk-ECNTNMPY.js";import{a as h}from"./chunk-SUUMCV2R.js";import{c as O,h as _e,i as fe,j as Se,l as Ee,m as Me,n as Ce}from"./chunk-TXP6BBJB.js";import{a as se,b as me,d as de,e as ce,g as pe}from"./chunk-BVSJJDLC.js";import{A as le,a as Z,b as ee,h as te,p as ae,z as ne}from"./chunk-EBF4GIWM.js";import{d as Y,f as G,g as y,h as B,l as j,m as k,n as H,o as X,p as w,s as v}from"./chunk-2OZGA6L4.js";import"./chunk-KMOC5U6F.js";import{a as M}from"./chunk-CESDGIU3.js";import{b as ue}from"./chunk-CSREFB7T.js";import"./chunk-KJLV23FP.js";import{a as q,e as J,f as oe,g as ie,h as re}from"./chunk-IMYK7VY7.js";import{i as F}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Ka as K,Pa as Q,Ra as W}from"./chunk-KZIHA7KF.js";import{$b as $,Bb as n,Cb as s,Db as c,L as u,Nb as f,Rb as S,Tb as T,Yb as g,Zb as N,a as A,b as D,cb as a,cc as E,db as m,dc as U,ec as x,kb as R,la as _,nb as d,tb as C,ub as p,wb as P,xb as V,yb as z}from"./chunk-6MBKLWBV.js";function Ae(o,r){if(o&1&&(n(0,"mat-label"),g(1),s()),o&2){let b=T();a(1),N(b.label);}}function De(o,r){o&1&&(n(0,"mat-option"),g(1,"-"),s());}function Pe(o,r){if(o&1&&(n(0,"mat-option",4),g(1),s()),o&2){let b=r.$implicit,t=T();d("value",t.getOptionValue(b)),a(1),N(t.getOptionContent(b));}}function Ve(o,r){o&1&&(n(0,"mat-error"),f(1,5),s());}function ze(o,r){o&1&&(n(0,"mat-error"),f(1,6),s());}function $e(o,r){o&1&&(n(0,"mat-error"),f(1,7),s());}function Ue(o,r){o&1&&c(0,"mat-progress-bar",3);}var Ne=(()=>{let r=class r extends ae{constructor(t,i){super(t),this.ngControl=t,this.mlabService=i,this.label=h.referenceValue,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.optionContent=e=>e.testClass.name,this.optionValue=e=>e.id;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.referenceValues.get(D(A({},re.unpaged()),{includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds})).pipe(O(this.indicator),u(1)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages;});}};r.ɵfac=function(i){return new(i||r)(m(G,10),m(M));},r.ɵcmp=_({type:r,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[$([]),R,E],decls:11,vars:10,consts:()=>{let t;t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let e;return e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],t,i,e];},template:function(i,e){i&1&&(n(0,"div",0)(1,"mat-form-field",1),C(2,Ae,2,1,"mat-label"),n(3,"mat-select",2),S("szScrolled",function(){return e.scroll();}),C(4,De,2,0,"mat-option"),V(5,Pe,2,2,"mat-option",4,P),s(),C(7,Ve,2,0,"mat-error")(8,ze,2,0,"mat-error")(9,$e,2,0,"mat-error"),s(),C(10,Ue,1,0,"mat-progress-bar",3),s()),i&2&&(a(2),p(2,e.label?2:-1),a(1),d("formControl",e.control)("multiple",e.multiple)("placeholder",e.placeholder)("szScrollIgnored",e.indicator()),a(1),p(4,e.emptyOption?4:-1),z(5,e.options),a(3),p(7,e.control.hasError("required")?7:-1),a(1),p(8,e.control.hasError("min")?8:-1),a(1),p(9,e.control.hasError("max")?9:-1),a(1),p(10,e.indicator()?10:-1));},dependencies:[v,y,k,le,te,Z,ee,ne,K,ie,oe,Oe],encapsulation:2});let o=r;return o;})();var Ye=()=>[],Ge=o=>[o],Fe=(()=>{let r=class r extends _e{constructor(t,i,e,l){super(e),this.mlabService=t,this.fb=i,this.dialog=e,this.data=l,this.form=i.group({referenceValueId:[l.laboratoryReferenceValue?.referenceValueId,[Y.required]]});}submit(){this.IsValid()&&(this.data.laboratoryReferenceValue?this.save(this.mlabService.laboratories.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value)):this.save(this.mlabService.laboratories.referenceValues.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(i){return new(i||r)(m(M),m(w),m(se),m(me));},r.ɵcmp=_({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[R,E],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(i,e){i&1&&(c(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),c(3,"medisy-form-field-reference-value",2),s()(),c(4,"sz-ui-dialog-actions",3)),i&2&&(d("header",e.header),a(2),d("formGroup",e.form),a(1),d("excludeLaboratoryIds",e.data.laboratoryReferenceValue?U(4,Ye):x(5,Ge,e.data.laboratoryId)),a(1),d("actions",e.actions));},dependencies:[v,j,y,B,H,X,Me,fe,Se,pe,ce,I,Ne],encapsulation:2});let o=r;return o;})();var $t=(()=>{let r=class r{constructor(t,i,e){this.dialog=t,this.mlabService=i,this.route=e,this.title=h.referenceValues,this.dataSource=new Re(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(be.default([he.text("testClass",h.testClass,l=>l.referenceValue.testClass.name),L.createdAt(),L.menu([F.edit(l=>{this.openSaveComponent(l);}),F.delete(l=>{this.openLaboratoryReferenceValueDeleteComponent(l);})])])),this.get();}openSaveComponent(t){this.dialog.open(Fe,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:t}}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openLaboratoryReferenceValueDeleteComponent(t){this.dialog.open(Ee,{data:Ce.delete(this.mlabService.laboratories.referenceValues.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.laboratories.referenceValues.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(O(this.dataSource.indicator)).pipe(u(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(i){return new(i||r)(m(de),m(M),m(q));},r.ɵcmp=_({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[E],decls:6,vars:5,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(c(0,"sz-ui-header-info",0),n(1,"sz-ui-table-filter",1),S("search",function(){return e.get();}),n(2,"button",2),S("click",function(){return e.openSaveComponent();}),n(3,"span"),f(4,3),s()()(),n(5,"sz-ui-table",4),S("update",function(){return e.get();}),s()),i&2&&(d("title",e.title)("subTitle",e.laboratory.name),a(1),d("filter",e.dataSource.filter),a(4),d("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[J,ue,ve,ye,ge,I,W,Q],encapsulation:2});let o=r;return o;})();export{$t as LaboratoryReferenceValuesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/