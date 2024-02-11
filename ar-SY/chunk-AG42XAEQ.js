import{a as Me}from"./chunk-J4M3332Z.js";import"./chunk-BCCX2GP6.js";import{a as Ne}from"./chunk-6GXJNWWF.js";import"./chunk-63VTERTH.js";import{a as Oe,c as he,e as ge,g as V,q as Ae,r as Te,s as m}from"./chunk-JUGS4EN6.js";import"./chunk-HJWA2INN.js";import{a as E}from"./chunk-NCT5DZCK.js";import{c as fe,h as _e,i as Se,j as Ee,l as Re,m as v,n as Ce}from"./chunk-47MBZVPY.js";import"./chunk-E3FW4FG3.js";import{b as L}from"./chunk-BENUJSGK.js";import{d as de,g as y}from"./chunk-2AKRFP2E.js";import{a as ue,b as ce,d as N,e as pe,g as P}from"./chunk-P4QIA4WM.js";import{A as me,g as ee,h as te,l as re,m as ie,n as ne,x as ae,y as le,z as se}from"./chunk-22KPLFGU.js";import{J as T,N as K,b as w,d as h,e as q,f as g,g as Y,j,k as x,l as W,m as X,p as k,q as H,s as J,t as A}from"./chunk-BWNHVGBM.js";import"./chunk-IWM4AFTB.js";import{Ea as Q,Ga as Z,Ja as oe}from"./chunk-I73ZQFGG.js";import{Ac as B,Eb as c,Fb as f,Gb as s,M as R,Qb as G,Sb as M,ea as b,fb as S,gb as l,gc as _,jc as O,l as z,na as d,nb as C,oa as $,qb as U,ub as u,zb as F}from"./chunk-KN4PZLRS.js";var n=function(o){return o.Equal="Equal",o.GreaterThan="GreaterThan",o.GreaterThanOrEqual="GreaterThanOrEqual",o.LessThan="LessThan",o.LessThanOrEqual="LessThanOrEqual",o.NotEqual="Not Equal",o.RangeWithBoundaries="RangeWithBoundaries",o.RangeWithoutBoundaries="RangeWithoutBoundaries",o;}(n||{});function I(o,e){switch(o){case n.Equal:return e?"==":"\u062A\u0633\u0627\u0648\u064A";case n.GreaterThan:return e?">":"\u0623\u0643\u0628\u0631 \u0645\u0646";case n.GreaterThanOrEqual:return e?">=":"\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.LessThan:return e?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case n.LessThanOrEqual:return e?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.RangeWithBoundaries:return e?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case n.RangeWithoutBoundaries:return e?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case n.NotEqual:return e?"!=":"\u0644\u0627 \u062A\u0633\u0627\u0648\u064A";default:return"";}}var Pe=(()=>{let e=class e extends ne{constructor(r){super(r),this.ngControl=r,this.options=Object.keys(n).map(t=>n[t]),this.label="\u0627\u0644\u0639\u0645\u0644\u064A\u0629",this.optionContent=t=>I(t,!1);}ngOnInit(){this.control=this.ngControl.control;}};e.ɵfac=function(t){return new(t||e)(l(q,10));},e.ɵcmp=d({type:e,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[_([]),C,O],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(t,i){t&1&&s(0,"sz-ui-form-field-select",0),t&2&&u("formControl",i.control)("options",i.options)("label",i.label)("placeholder",i.placeholder)("emptyOption",i.emptyOption)("multiple",i.multiple)("szOptionContentFn",i.optionContent);},dependencies:[A,g,W,le],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=e;return o;})();function ze(o,e){o&1&&(c(0,"div",8)(1,"mat-form-field",9)(2,"label"),s(3,"input",10),f()(),c(4,"mat-form-field",9)(5,"label"),s(6,"input",11),f()()());}function be(o,e){o&1&&(c(0,"mat-form-field",9)(1,"label"),s(2,"input",12),f()());}var ve=(()=>{let e=class e extends _e{constructor(r,t,i,a){super(i),this.mlabService=r,this.fb=t,this.dialog=i,this.data=a,this.form=t.group({description:[a.referenceValueRule?.description,[h.maxLength(4096)]],comparisonOperator:new j(a.referenceValueRule?.comparisonOperator??n.Equal,[h.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[h.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===n.RangeWithBoundaries||this.form.value.comparisonOperator===n.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(l(E),l(H),l(ue),l(ce));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[_([]),C,O],decls:9,vars:5,consts:()=>{let r;r="\u0627\u0644\u0648\u0635\u0641";let t;t="\u0628\u062F\u0627\u064A\u0629";let i;i="\u0646\u0647\u0627\u064A\u0629";let a;return a="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId"],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",t],["autocomplete","off","formControlName","end","matInput","","placeholder",i],["autocomplete","off","formControlName","value","matInput","","placeholder",a]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),s(3,"medisy-form-field-reference-group",2)(4,"medisy-form-field-comparison-operator",3),U(5,ze,7,0,"div",4)(6,be,3,0,"mat-form-field",5),s(7,"sz-ui-form-field-textarea",6),f()(),s(8,"sz-ui-dialog-actions",7)),t&2&&(u("header",i.header),S(2),u("formGroup",i.form),S(3),F(5,i.isRange()?5:-1),S(),F(6,i.isRange()?-1:6),S(2),u("actions",i.actions));},dependencies:[A,x,w,g,Y,X,k,ie,re,ee,P,pe,te,V,v,Se,Ee,me,se,Ne,Pe],encapsulation:2});let o=e;return o;})();var Ve=(()=>{let e=class e{constructor(r,t,i,a){this.dialog=r,this.route=t,this.mlabService=i,this.locale=a,this.dataSource=new he(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.fields.push(m.uuid("id"),m.uuid("referenceValueId"),m.uuid("referenceGroupId"),m.string("referenceGroup.name"),m.stringFormated("comparisonOperator",p=>I(p.comparisonOperator,!1)),m.number("value"),m.number("start"),m.number("end"),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),Oe.menu([y.edit(p=>this.openSaveComponent(p)),y.delete(p=>{this.openReferenceValueRuleDeleteComponent(p);})])),this.get();}openSaveComponent(r){this.dialog.open(ve,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(R(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Re,{data:Ce.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(R(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(fe(this.dataSource.indicator),R(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(t){return new(t||e)(l(N),l(T),l(E),l(B));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-reference-value-rules"]],features:[_([])],decls:5,vars:3,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(c(0,"sz-ui-table-search-filter",0),M("changed",function(){return i.get();}),c(1,"button",1),M("click",function(){return i.openSaveComponent();}),c(2,"span"),G(3,2),f()()(),c(4,"sz-ui-table",3),M("update",function(){return i.get();}),f()),t&2&&(u("dataSource",i.dataSource),S(4),u("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[Q,Ae,ge],encapsulation:2});let o=e;return o;})();var Ie=(()=>{let e=class e{constructor(r,t){this.dialog=r,this.route=t,this.alert$=new z(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(t){return new(t||e)(l(N),l(T));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-reference-value"]],features:[_([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(t,i){t&1&&s(0,"sz-ui-header-info",0)(1,"medisy-laboratory-reference-value-rules"),t&2&&u("title",i.referenceValue.testClass.name)("subtitle",i.referenceValue.description);},dependencies:[L,Ve],encapsulation:2});let o=e;return o;})();var De=[{path:"",component:Ie}];var Qt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=$({type:e}),e.ɵinj=b({providers:[E],imports:[J,K.forChild(De),P,V,de,oe,Z,ae,Te,Me,v,L]});let o=e;return o;})();export{Qt as ReferenceValueModule};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/