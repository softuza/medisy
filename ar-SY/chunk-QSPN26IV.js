import{b as ge}from"./chunk-SYGOENKH.js";import{a as x}from"./chunk-7OS7Y73A.js";import"./chunk-UXGFQGEN.js";import{g as s}from"./chunk-IDDVMHHY.js";import{a as E}from"./chunk-RCF34KUN.js";import"./chunk-XKQSJUZ3.js";import"./chunk-VU4DCVQ3.js";import{a as k}from"./chunk-IRYXR6JI.js";import{b as W,c as Te,e as Pe,g as ye,i as N,s as De,t as Ve}from"./chunk-ECNTNMPY.js";import"./chunk-SUUMCV2R.js";import{c as he,g as ve,h as Ne,i as w,j as B,l as Ae,m as v,n as Ie}from"./chunk-TXP6BBJB.js";import{a as U,b as $,d as G,e as Y,g}from"./chunk-BVSJJDLC.js";import{A as Ee,B as Ce,C as Me,D as Re,h as ue,i as fe,m as de,n as _e,o as Se}from"./chunk-EBF4GIWM.js";import{b as ie,d as P,f as ne,g as R,h as y,k as D,l as V,m as ae,n as F,o as b,p as L,r as le,s as O}from"./chunk-2OZGA6L4.js";import"./chunk-KMOC5U6F.js";import{a as h}from"./chunk-Y3MYDPN3.js";import{b as j}from"./chunk-CSREFB7T.js";import"./chunk-4KZUDT5R.js";import{a as z,e as me}from"./chunk-IMYK7VY7.js";import{d as Oe,i as H}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as se,Ra as pe,Ua as ce}from"./chunk-KZIHA7KF.js";import{$b as S,Bb as c,Cb as _,Db as m,L as A,Nb as oe,Rb as T,cb as f,cc as M,da as Z,db as n,k as Q,kb as C,la as d,ma as ee,nb as a,sc as re,tb as te,ub as q}from"./chunk-6MBKLWBV.js";var X=(()=>{let t=class t extends Se{constructor(r,e){super(r),this.ngControl=r,this.typeI18nPipe=e,this.options=Object.keys(E).map(o=>E[o]),this.label="\u0627\u0644\u0639\u0645\u0644\u064A\u0629",this.optionContent=o=>this.typeI18nPipe.transform(o);}ngOnInit(){this.control=this.ngControl.control;}};t.ɵfac=function(e){return new(e||t)(n(ne,10),n(s));},t.ɵcmp=d({type:t,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[S([s]),C,M],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,o){e&1&&m(0,"sz-ui-form-field-select",0),e&2&&a("formControl",o.control)("options",o.options)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("szOptionContentFn",o.optionContent);},dependencies:[O,R,ae,Ce],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=t;return i;})();var be=(()=>{let t=class t extends ve{constructor(r,e,o,l){super(e),this.fb=r,this.dialog=e,this.typeI18nPipe=o,this.data=l,this.form=r.group({referenceGroupId:[l.referenceGroupId],comparisonOperator:new D(l.comparisonOperator)});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};t.ɵfac=function(e){return new(e||t)(n(L),n(U),n(s),n($));},t.ɵcmp=d({type:t,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[S([s]),C,M],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),_()(),m(5,"sz-ui-dialog-actions",4)),e&2&&(a("header",o.header),f(2),a("formGroup",o.form),f(1),a("emptyOption",!0),f(1),a("emptyOption",!0),f(1),a("actions",o.actions));},dependencies:[O,V,R,y,F,b,g,Y,N,v,w,B,x,X],encapsulation:2});let i=t;return i;})();function we(i,t){i&1&&(c(0,"div",8)(1,"mat-form-field",9)(2,"label"),m(3,"input",10),_()(),c(4,"mat-form-field",9)(5,"label"),m(6,"input",11),_()()());}function Be(i,t){i&1&&(c(0,"mat-form-field",9)(1,"label"),m(2,"input",12),_()());}var Le=(()=>{let t=class t extends Ne{constructor(r,e,o,l,p){super(l),this.mlabService=r,this.typeI18nPipe=e,this.fb=o,this.dialog=l,this.data=p,this.form=o.group({description:[p.referenceValueRule?.description,[P.maxLength(4096)]],comparisonOperator:new D(p.referenceValueRule?.comparisonOperator??E.Equal,[P.required]),referenceGroupId:[p.referenceValueRule?.referenceGroupId,[P.required]],value:[p.referenceValueRule?.value,[]],start:[p.referenceValueRule?.start,[]],end:[p.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(n(h),n(s),n(L),n(U),n($));},t.ɵcmp=d({type:t,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[S([s]),C,M],decls:9,vars:5,consts:()=>{let r;r="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0628\u062F\u0627\u064A\u0629";let o;o="\u0646\u0647\u0627\u064A\u0629";let l;return l="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",e],["autocomplete","off","formControlName","end","matInput","","placeholder",o],["autocomplete","off","formControlName","value","matInput","","placeholder",l]];},template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),te(5,we,7,0,"div",4)(6,Be,3,0,"mat-form-field",5),m(7,"medisy-form-field-reference-group",6),_()(),m(8,"sz-ui-dialog-actions",7)),e&2&&(a("header",o.header),f(2),a("formGroup",o.form),f(3),q(5,o.isRange()?5:-1),f(1),q(6,o.isRange()?-1:6),f(2),a("actions",o.actions));},dependencies:[O,V,ie,R,y,F,b,_e,de,ue,g,Y,fe,N,v,w,B,Re,Me,x,X],encapsulation:2});let i=t;return i;})();var ze=(()=>{let t=class t{constructor(r,e,o,l,p){this.dialog=r,this.route=e,this.mlabService=o,this.typeI18nPipe=l,this.locale=p,this.dataSource=new Pe(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(Te.default([W.text("referenceGroup","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",u=>u.referenceGroup.name),k.comparisonOperator(u=>l.transform(u.comparisonOperator)),W.text("value","\u0642\u064A\u0645\u0629",u=>u.value?u.value:`${u.start} - ${u.end}`),k.createdAt(),k.menu([H.edit(u=>this.openSaveComponent(u)),H.delete(u=>{this.openReferenceValueRuleDeleteComponent(u);})])])),this.get();}openSaveComponent(r){this.dialog.open(Le,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(A(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(be,{data:this.dataSource.filter}).afterClosed().pipe(A(1)).subscribe(r=>{this.dataSource.updateFilter(r),this.get();});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Ae,{data:Ie.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(A(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(he(this.dataSource.indicator),A(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};t.ɵfac=function(e){return new(e||t)(n(G),n(z),n(h),n(s),n(re));},t.ɵcmp=d({type:t,selectors:[["medisy-laboratory-reference-value-rules"]],features:[S([s])],decls:5,vars:3,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[[3,"filter","search","filterClicked"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(c(0,"sz-ui-table-filter",0),T("search",function(){return o.get();})("filterClicked",function(){return o.openFilterComponent();}),c(1,"button",1),T("click",function(){return o.openSaveComponent();}),c(2,"span"),oe(3,2),_()()(),c(4,"sz-ui-table",3),T("update",function(){return o.get();}),_()),e&2&&(a("filter",o.dataSource.filter),f(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[se,De,ye],encapsulation:2});let i=t;return i;})();var Ue=(()=>{let t=class t{constructor(r,e){this.dialog=r,this.route=e,this.alert$=new Q(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(n(G),n(z));},t.ɵcmp=d({type:t,selectors:[["medisy-laboratory-reference-value"]],features:[S([])],decls:2,vars:2,consts:[[3,"title","subTitle"]],template:function(e,o){e&1&&m(0,"sz-ui-header-info",0)(1,"medisy-laboratory-reference-value-rules"),e&2&&a("title",o.referenceValue.testClass.name)("subTitle",o.referenceValue.description);},dependencies:[j,ze],encapsulation:2});let i=t;return i;})();var $e=[{path:"",component:Ue}];var So=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=ee({type:t}),t.ɵinj=Z({providers:[h],imports:[le,me.forChild($e),g,N,Oe,ce,pe,Ee,Ve,ge,v,j]});let i=t;return i;})();export{So as ReferenceValueModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/