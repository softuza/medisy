import{a as k}from"./chunk-5I3HB577.js";import{d as Ee,e as Me,g as Ce,r as Oe,s as ge,t as he}from"./chunk-PXOTKN7X.js";import{b as Ae}from"./chunk-GCM6ZAZ7.js";import"./chunk-NI5LNUG6.js";import"./chunk-X55ZRX4G.js";import{f as p}from"./chunk-3M6BPQ6D.js";import{a as S}from"./chunk-ZENDRPYK.js";import{b as x}from"./chunk-6BI6RHQ7.js";import{a as W,b as Fe,c as Ve,e as be,g as v,o as Le,p as ze}from"./chunk-ODDCETUF.js";import{b as J}from"./chunk-IWE7C4JI.js";import{d as Ne}from"./chunk-OWQ5IK3C.js";import{e as Ie,i as Pe,j as Te,k as j,l as B,n as ye,o as h,p as De}from"./chunk-PYX76X2M.js";import{a as U,b as $,d as G,e as Y,g as O}from"./chunk-SVUPQDJR.js";import{h as de,i as fe,k as Re}from"./chunk-AYQEHXDK.js";import{b as ie,d as T,f as ne,g as C,h as y,k as D,l as F,m as ae,n as V,o as b,p as L,r as le,s as R,t as pe,u as ue,v as ce}from"./chunk-VJLOVWWV.js";import{a as g}from"./chunk-KWGWCJPG.js";import"./chunk-BI2SJY2U.js";import{a as ve}from"./chunk-DHBNYOFD.js";import{a as w}from"./chunk-AALBHV7K.js";import{D as z,G as me,H as se,Sa as _e,Ta as Se}from"./chunk-MQ7PCRXN.js";import{Ab as s,Kb as re,L as N,Mb as I,Tb as P,Ub as H,Wb as _,Zb as M,cb as u,da as ee,db as a,k as Z,kb as E,la as f,ma as te,nb as c,tb as oe,ub as q,yb as m,zb as d}from"./chunk-FNRYDH3S.js";var X=(()=>{let t=class t extends Ce{constructor(r,e){super(r),this.ngControl=r,this.typeI18nPipe=e,this.options=Object.keys(S).map(o=>S[o]),this.label="Comparison Operator",this.optionContent=o=>this.typeI18nPipe.transform(o);}ngOnInit(){this.control=this.ngControl.control;}};t.ɵfac=function(e){return new(e||t)(a(ne,10),a(p));},t.ɵcmp=f({type:t,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[_([p]),E,M],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,o){e&1&&s(0,"sz-ui-form-field-select",0),e&2&&c("formControl",o.control)("options",o.options)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("szOptionContentFn",o.optionContent);},dependencies:[R,C,ae,Oe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=t;return i;})();var $e=(()=>{let t=class t extends Pe{constructor(r,e,o,l){super(e),this.fb=r,this.dialog=e,this.typeI18nPipe=o,this.data=l,this.form=r.group({referenceGroupId:[l.referenceGroupId],comparisonOperator:new D(l.comparisonOperator)});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};t.ɵfac=function(e){return new(e||t)(a(L),a(U),a(p),a($));},t.ɵcmp=f({type:t,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[_([p]),E,M],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(e,o){e&1&&(s(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),s(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),d()(),s(5,"sz-ui-dialog-actions",4)),e&2&&(c("header",o.header),u(2),c("formGroup",o.form),u(1),c("emptyOption",!0),u(1),c("emptyOption",!0),u(1),c("actions",o.actions));},dependencies:[R,F,C,y,V,b,O,Y,v,h,j,B,k,X],encapsulation:2});let i=t;return i;})();function Xe(i,t){i&1&&(m(0,"div",8)(1,"mat-form-field",9)(2,"label"),s(3,"input",10),d()(),m(4,"mat-form-field",9)(5,"label"),s(6,"input",11),d()()());}function qe(i,t){i&1&&(m(0,"mat-form-field",9)(1,"label"),s(2,"input",12),d()());}var Ge=(()=>{let t=class t extends Te{constructor(r,e,o,l,n){super(l),this.mlabService=r,this.typeI18nPipe=e,this.fb=o,this.dialog=l,this.data=n,this.form=o.group({description:[n.referenceValueRule?.description,[T.maxLength(4096)]],comparisonOperator:new D(n.referenceValueRule?.comparisonOperator??S.Equal,[T.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[T.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===S.RangeWithBoundaries||this.form.value.comparisonOperator===S.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(g),a(p),a(L),a(U),a($));},t.ɵcmp=f({type:t,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[_([p]),E,M],decls:9,vars:5,consts:()=>{let r;r="Description";let e;e="Start";let o;o="End";let l;return l="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",e],["autocomplete","off","formControlName","end","matInput","","placeholder",o],["autocomplete","off","formControlName","value","matInput","","placeholder",l]];},template:function(e,o){e&1&&(s(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),oe(5,Xe,7,0,"div",4)(6,qe,3,0,"mat-form-field",5),s(7,"medisy-form-field-reference-group",6),d()(),s(8,"sz-ui-dialog-actions",7)),e&2&&(c("header",o.header),u(2),c("formGroup",o.form),u(3),q(5,o.isRange()?5:-1),u(1),q(6,o.isRange()?-1:6),u(2),c("actions",o.actions));},dependencies:[R,F,ie,C,y,V,b,Me,Ee,de,O,Y,fe,v,h,j,B,he,ge,k,X],encapsulation:2});let i=t;return i;})();var Ye=(()=>{let t=class t{constructor(r,e,o,l){this.dialog=r,this.route=e,this.mlabService=o,this.typeI18nPipe=l,this.dataSource=new Fe(ve.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(Ve.default([W.text("referenceGroup","Reference group",n=>n.referenceGroup.locales[0].name),x.comparisonOperator(n=>l.transform(n.comparisonOperator)),W.text("value","Value",n=>n.value?n.value:`${n.start} - ${n.end}`),x.createdAt(),x.menu([J.edit(n=>this.openSaveComponent(n)),J.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})])])),this.get();}openSaveComponent(r){this.dialog.open(Ge,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(N(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openFilterComponent(){this.dialog.open($e,{data:this.dataSource.filterModel}).afterClosed().pipe(N(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get();});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(ye,{data:De.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(N(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe(Ie(this.dataSource.indicator),N(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};t.ɵfac=function(e){return new(e||t)(a(G),a(z),a(g),a(p));},t.ɵcmp=f({type:t,selectors:[["medisy-laboratory-reference-value-rules"]],features:[_([p])],decls:5,vars:4,consts:()=>{let r;return r="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(m(0,"sz-ui-table-filter",0),I("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),m(1,"button",1),I("click",function(){return o.openSaveComponent();}),m(2,"span"),re(3,2),d()()(),m(4,"sz-ui-table",3),I("update",function(){return o.get();}),d()),e&2&&(c("dataSource",o.dataSource),u(4),c("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[pe,Le,be],encapsulation:2});let i=t;return i;})();var we=(()=>{let t=class t{constructor(r,e){this.dialog=r,this.route=e,this.alert$=new Z(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(G),a(z));},t.ɵcmp=f({type:t,selectors:[["medisy-laboratory-reference-value"]],features:[_([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(e,o){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),P(3),d(),m(4,"span",2),P(5),d()(),m(6,"button",3)(7,"mat-icon"),P(8,"arrow_back"),d()()(),s(9,"medisy-laboratory-reference-value-rules")),e&2&&(u(3),H(o.referenceValue.testClass.name),u(2),H(o.referenceValue.description));},dependencies:[me,_e,ue,w,Ye],encapsulation:2});let i=t;return i;})();var je=[{path:"",component:we}];var Ro=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=te({type:t}),t.ɵinj=ee({providers:[g],imports:[le,se.forChild(je),O,v,Ne,Se,ce,Re,ze,Ae,h,w]});let i=t;return i;})();export{Ro as ReferenceValueModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/