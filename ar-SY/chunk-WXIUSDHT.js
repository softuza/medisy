import{b as Te}from"./chunk-XZNQVZLE.js";import{a as X}from"./chunk-P7ZXVK7P.js";import{a as Ge}from"./chunk-ESSVKAV5.js";import{g as s}from"./chunk-ZUTEIW3L.js";import{a as E}from"./chunk-PPO5LMMV.js";import"./chunk-6VMEWVPH.js";import"./chunk-JI5I5E7Z.js";import{b as k}from"./chunk-JMZ6IH5D.js";import{a as K,b as be,c as Le,e as ze,g as N,o as Ue,p as $e}from"./chunk-PDSP3MQP.js";import"./chunk-BDKYF43S.js";import{c as Pe,g as ye,h as De,i as B,j as x,l as Fe,m as v,n as Ve}from"./chunk-JUKWJGHA.js";import{a as $,b as G,d as Y,e as w,g as h}from"./chunk-LR6DSKQQ.js";import{B as he,C as ge,D as ve,E as Ne,h as _e,i as Se,m as Ce,n as Re,p as Oe}from"./chunk-CJ3L35E7.js";import{b as ae,d as y,f as le,g as R,h as D,k as F,l as V,m as me,n as b,o as L,p as z,r as se,s as O}from"./chunk-FZFNR6NR.js";import{a as g}from"./chunk-X3ZOFRYL.js";import{a as j}from"./chunk-XCF6KXCP.js";import{a as Ae}from"./chunk-AQB7U7BU.js";import{a as U,d as pe,e as ce}from"./chunk-4G55JY3H.js";import{d as Ie,i as J}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as ue,Qa as de,Ra as fe,Ta as Ee,Ua as Me}from"./chunk-W55BWEJG.js";import{Bb as l,Cb as u,Db as m,L as A,Nb as ie,Pb as T,Wb as P,Xb as W,Zb as S,ac as C,cb as p,da as te,db as n,k as ee,kb as M,la as _,ma as oe,nb as c,qc as ne,tb as re,ub as H}from"./chunk-3QIFGVJ6.js";var q=(()=>{let t=class t extends Oe{constructor(r,e){super(r),this.ngControl=r,this.typeI18nPipe=e,this.options=Object.keys(E).map(o=>E[o]),this.label="\u0627\u0644\u0639\u0645\u0644\u064A\u0629",this.optionContent=o=>this.typeI18nPipe.transform(o);}ngOnInit(){this.control=this.ngControl.control;}};t.ɵfac=function(e){return new(e||t)(n(le,10),n(s));},t.ɵcmp=_({type:t,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[S([s]),M,C],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,o){e&1&&m(0,"sz-ui-form-field-select",0),e&2&&c("formControl",o.control)("options",o.options)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("szOptionContentFn",o.optionContent);},dependencies:[O,R,me,ge],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=t;return i;})();var we=(()=>{let t=class t extends ye{constructor(r,e,o,a){super(e),this.fb=r,this.dialog=e,this.typeI18nPipe=o,this.data=a,this.form=r.group({referenceGroupId:[a.referenceGroupId],comparisonOperator:new F(a.comparisonOperator)});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};t.ɵfac=function(e){return new(e||t)(n(z),n($),n(s),n(G));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[S([s]),M,C],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),u()(),m(5,"sz-ui-dialog-actions",4)),e&2&&(c("header",o.header),p(2),c("formGroup",o.form),p(1),c("emptyOption",!0),p(1),c("emptyOption",!0),p(1),c("actions",o.actions));},dependencies:[O,V,R,D,b,L,h,w,N,v,B,x,X,q],encapsulation:2});let i=t;return i;})();function We(i,t){i&1&&(l(0,"div",8)(1,"mat-form-field",9)(2,"label"),m(3,"input",10),u()(),l(4,"mat-form-field",9)(5,"label"),m(6,"input",11),u()()());}function Je(i,t){i&1&&(l(0,"mat-form-field",9)(1,"label"),m(2,"input",12),u()());}var je=(()=>{let t=class t extends De{constructor(r,e,o,a,d){super(a),this.mlabService=r,this.typeI18nPipe=e,this.fb=o,this.dialog=a,this.data=d,this.form=o.group({description:[d.referenceValueRule?.description,[y.maxLength(4096)]],comparisonOperator:new F(d.referenceValueRule?.comparisonOperator??E.Equal,[y.required]),referenceGroupId:[d.referenceValueRule?.referenceGroupId,[y.required]],value:[d.referenceValueRule?.value,[]],start:[d.referenceValueRule?.start,[]],end:[d.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(n(g),n(s),n(z),n($),n(G));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[S([s]),M,C],decls:9,vars:5,consts:()=>{let r;r="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0628\u062F\u0627\u064A\u0629";let o;o="\u0646\u0647\u0627\u064A\u0629";let a;return a="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",e],["autocomplete","off","formControlName","end","matInput","","placeholder",o],["autocomplete","off","formControlName","value","matInput","","placeholder",a]];},template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),re(5,We,7,0,"div",4)(6,Je,3,0,"mat-form-field",5),m(7,"medisy-form-field-reference-group",6),u()(),m(8,"sz-ui-dialog-actions",7)),e&2&&(c("header",o.header),p(2),c("formGroup",o.form),p(3),H(5,o.isRange()?5:-1),p(1),H(6,o.isRange()?-1:6),p(2),c("actions",o.actions));},dependencies:[O,V,ae,R,D,b,L,Re,Ce,_e,h,w,Se,N,v,B,x,Ne,ve,X,q],encapsulation:2});let i=t;return i;})();var Be=(()=>{let t=class t{constructor(r,e,o,a,d){this.dialog=r,this.route=e,this.mlabService=o,this.typeI18nPipe=a,this.locale=d,this.dataSource=new be(Ae.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(Le.default([K.text("referenceGroup","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",f=>f.referenceGroup.name[Ge(this.locale)]),k.comparisonOperator(f=>a.transform(f.comparisonOperator)),K.text("value","\u0642\u064A\u0645\u0629",f=>f.value?f.value:`${f.start} - ${f.end}`),k.createdAt(),k.menu([J.edit(f=>this.openSaveComponent(f)),J.delete(f=>{this.openReferenceValueRuleDeleteComponent(f);})])])),this.get();}openSaveComponent(r){this.dialog.open(je,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(A(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(we,{data:this.dataSource.filterModel}).afterClosed().pipe(A(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get();});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Fe,{data:Ve.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(A(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe(Pe(this.dataSource.indicator),A(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};t.ɵfac=function(e){return new(e||t)(n(Y),n(U),n(g),n(s),n(ne));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-value-rules"]],features:[S([s])],decls:5,vars:4,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(l(0,"sz-ui-table-filter",0),T("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),l(1,"button",1),T("click",function(){return o.openSaveComponent();}),l(2,"span"),ie(3,2),u()()(),l(4,"sz-ui-table",3),T("update",function(){return o.get();}),u()),e&2&&(c("dataSource",o.dataSource),p(4),c("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[ue,Ue,ze],encapsulation:2});let i=t;return i;})();var xe=(()=>{let t=class t{constructor(r,e){this.dialog=r,this.route=e,this.alert$=new ee(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(n(Y),n(U));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-value"]],features:[S([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(e,o){e&1&&(l(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),P(3),u(),l(4,"span",2),P(5),u()(),l(6,"button",3)(7,"mat-icon"),P(8,"arrow_back"),u()()(),m(9,"medisy-laboratory-reference-value-rules")),e&2&&(p(3),W(o.referenceValue.testClass.name),p(2),W(o.referenceValue.description));},dependencies:[pe,Ee,de,j,Be],encapsulation:2});let i=t;return i;})();var ke=[{path:"",component:xe}];var Io=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=oe({type:t}),t.ɵinj=te({providers:[g],imports:[se,ce.forChild(ke),h,N,Ie,Me,fe,he,$e,Te,v,j]});let i=t;return i;})();export{Io as ReferenceValueModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/