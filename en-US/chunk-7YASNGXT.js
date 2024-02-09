import{a as Oe}from"./chunk-UWFX4FMI.js";import"./chunk-FWZEH63T.js";import{a as Pe}from"./chunk-KZJUQ5FN.js";import"./chunk-BVDDTOMA.js";import{a as b}from"./chunk-D2USBXNE.js";import{b as L,c as ge,e as Ne,i as Te,k as D,u as Ae,v as ve}from"./chunk-47P25T34.js";import{a as z}from"./chunk-WBYPLE6B.js";import{a as S}from"./chunk-LAXXIHXK.js";import{c as Se,h as Ee,i as Me,j as Ce,l as Re,m as P,n as he}from"./chunk-SK6APAT5.js";import{b as v}from"./chunk-AQRFGV44.js";import"./chunk-I5QX4CCA.js";import{a as pe,b as de,d as T,e as fe,g as A}from"./chunk-3NLMA3OD.js";import{A as ce,g as oe,h as re,l as ne,m as ae,n as le,x as se,y as me,z as ue}from"./chunk-7ERNPK3U.js";import{b as q,d as h,e as j,f as O,g as x,j as W,k as X,l as k,m as H,p as J,q as K,s as Q,t as g,u as N,y as Z}from"./chunk-HA3OCK63.js";import{d as _e,i as F}from"./chunk-UVKSHNQV.js";import"./chunk-QFHU2GEW.js";import"./chunk-SRHI3DNT.js";import{Ea as ee,Ga as te,Ja as ie}from"./chunk-T2UVNK6V.js";import{Bc as w,Eb as c,Fb as d,Gb as m,M as E,Qb as B,Sb as C,ea as U,fb as _,gb as l,gc as f,jc as R,l as $,na as p,nb as M,oa as Y,qb as G,ub as u,zb as y}from"./chunk-T2ST7G6M.js";var n=function(o){return o.Equal="Equal",o.GreaterThan="GreaterThan",o.GreaterThanOrEqual="GreaterThanOrEqual",o.LessThan="LessThan",o.LessThanOrEqual="LessThanOrEqual",o.NotEqual="Not Equal",o.RangeWithBoundaries="RangeWithBoundaries",o.RangeWithoutBoundaries="RangeWithoutBoundaries",o;}(n||{});function I(o,e){switch(o){case n.Equal:return e?"==":"Equal";case n.GreaterThan:return e?">":"Greater Than";case n.GreaterThanOrEqual:return e?">=":"Greater Than Or Equal";case n.LessThan:return e?"<":"Less Than";case n.LessThanOrEqual:return e?"<=":"Less Than Or Equal";case n.RangeWithBoundaries:return e?"<==>":"Range With Boundaries";case n.RangeWithoutBoundaries:return e?"<>":"Range Without Boundaries";case n.NotEqual:return e?"!=":"Not Equal";default:return"";}}var Le=(()=>{let e=class e extends le{constructor(r){super(r),this.ngControl=r,this.options=Object.keys(n).map(t=>n[t]),this.label="Comparison Operator",this.optionContent=t=>I(t,!1);}ngOnInit(){this.control=this.ngControl.control;}};e.ɵfac=function(t){return new(t||e)(l(j,10));},e.ɵcmp=p({type:e,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[f([]),M,R],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(t,i){t&1&&m(0,"sz-ui-form-field-select",0),t&2&&u("formControl",i.control)("options",i.options)("label",i.label)("placeholder",i.placeholder)("emptyOption",i.emptyOption)("multiple",i.multiple)("szOptionContentFn",i.optionContent);},dependencies:[g,O,k,me],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=e;return o;})();function $e(o,e){o&1&&(c(0,"div",8)(1,"mat-form-field",9)(2,"label"),m(3,"input",10),d()(),c(4,"mat-form-field",9)(5,"label"),m(6,"input",11),d()()());}function Ue(o,e){o&1&&(c(0,"mat-form-field",9)(1,"label"),m(2,"input",12),d()());}var Ie=(()=>{let e=class e extends Ee{constructor(r,t,i,a){super(i),this.mlabService=r,this.fb=t,this.dialog=i,this.data=a,this.form=t.group({description:[a.referenceValueRule?.description,[h.maxLength(4096)]],comparisonOperator:new W(a.referenceValueRule?.comparisonOperator??n.Equal,[h.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[h.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===n.RangeWithBoundaries||this.form.value.comparisonOperator===n.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(l(S),l(K),l(pe),l(de));},e.ɵcmp=p({type:e,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),M,R],decls:9,vars:5,consts:()=>{let r;r="Description";let t;t="Start";let i;i="End";let a;return a="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId"],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",t],["autocomplete","off","formControlName","end","matInput","","placeholder",i],["autocomplete","off","formControlName","value","matInput","","placeholder",a]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-reference-group",2)(4,"medisy-form-field-comparison-operator",3),G(5,$e,7,0,"div",4)(6,Ue,3,0,"mat-form-field",5),m(7,"sz-ui-form-field-textarea",6),d()(),m(8,"sz-ui-dialog-actions",7)),t&2&&(u("header",i.header),_(2),u("formGroup",i.form),_(3),y(5,i.isRange()?5:-1),_(),y(6,i.isRange()?-1:6),_(2),u("actions",i.actions));},dependencies:[g,X,q,O,x,H,J,ae,ne,oe,A,fe,re,D,P,Me,Ce,ce,ue,Pe,Le],encapsulation:2});let o=e;return o;})();var Ve=(()=>{let e=class e{constructor(r,t,i,a){this.dialog=r,this.route=t,this.mlabService=i,this.locale=a,this.dataSource=new Ne(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(ge.default([L.text("referenceGroup.name",z.referenceGroup),b.comparisonOperator(s=>I(s.comparisonOperator,!1)),L.text("value",z.value,s=>s.value??`${s.start} - ${s.end}`),b.createdAt(),L.menu([F.edit(s=>this.openSaveComponent(s)),F.delete(s=>{this.openReferenceValueRuleDeleteComponent(s);})])])),this.get();}openSaveComponent(r){this.dialog.open(Ie,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(E(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Re,{data:he.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(E(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(Se(this.dataSource.indicator),E(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(t){return new(t||e)(l(T),l(N),l(S),l(w));},e.ɵcmp=p({type:e,selectors:[["medisy-laboratory-reference-value-rules"]],features:[f([])],decls:5,vars:3,consts:()=>{let r;return r="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(c(0,"sz-ui-table-search-filter",0),C("changed",function(){return i.get();}),c(1,"button",1),C("click",function(){return i.openSaveComponent();}),c(2,"span"),B(3,2),d()()(),c(4,"sz-ui-table",3),C("update",function(){return i.get();}),d()),t&2&&(u("dataSource",i.dataSource),_(4),u("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ee,Ae,Te],encapsulation:2});let o=e;return o;})();var ye=(()=>{let e=class e{constructor(r,t){this.dialog=r,this.route=t,this.alert$=new $(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(t){return new(t||e)(l(T),l(N));},e.ɵcmp=p({type:e,selectors:[["medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(t,i){t&1&&m(0,"sz-ui-header-info",0)(1,"medisy-laboratory-reference-value-rules"),t&2&&u("title",i.referenceValue.testClass.name)("subtitle",i.referenceValue.description);},dependencies:[v,Ve],encapsulation:2});let o=e;return o;})();var ze=[{path:"",component:ye}];var to=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=Y({type:e}),e.ɵinj=U({providers:[S],imports:[Q,Z.forChild(ze),A,D,_e,ie,te,se,ve,Oe,P,v]});let o=e;return o;})();export{to as ReferenceValueModule};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/