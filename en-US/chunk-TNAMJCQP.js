import{a as Oe}from"./chunk-AABLPW5Z.js";import"./chunk-SXC7E5DA.js";import{a as R}from"./chunk-TKL2WJHN.js";import{a as p,b as Le,d as Ve,f as Ie,i as he,j as ve}from"./chunk-JJ2YZL4E.js";import"./chunk-ZEA7LBAJ.js";import"./chunk-GBHLPDM7.js";import"./chunk-5RQQJWK2.js";import{a as S}from"./chunk-Z2R2E2EV.js";import{e as Ce,f as Ne,g as Te,i as Ae,j as I,k as ge}from"./chunk-DTKAYVTF.js";import"./chunk-BJ3HU3CV.js";import{a as V}from"./chunk-IDGEHIH2.js";import{d as Me,h as D}from"./chunk-UNERZP36.js";import{a as ie,b as ne,d as A,e as ae,g}from"./chunk-HGSCT6LZ.js";import"./chunk-PONDJRDE.js";import{a as _e,b as ce,o as L,q as Ee,s as Se,t as Re}from"./chunk-CUEJULJL.js";import{c as pe}from"./chunk-WL42IITZ.js";import"./chunk-IIV3DNC7.js";import"./chunk-NI2WGS4X.js";import{d as de}from"./chunk-FQY32KUQ.js";import{h as le,i as se,k as fe}from"./chunk-NVTGHHY5.js";import{b as w,d as N,f as x,g as k,j as q,k as H,m as W,p as Q,q as J,s as K,t as Z}from"./chunk-AVUSO23W.js";import{r as te,t as oe}from"./chunk-XYATSLBH.js";import{a as T,e as ee}from"./chunk-CZU2XDE5.js";import"./chunk-MDQAOQVI.js";import{ha as re,ia as ue,ka as me}from"./chunk-OIJJQZIK.js";import"./chunk-MBD4P57N.js";import{Db as s,Hc as X,Ib as O,Ma as $,Nb as _,Ob as c,Pb as m,Zb as Y,_b as C,ac as v,hb as u,ib as l,ka as z,l as P,pc as E,qc as j,ta as F,ua as f,ub as G,va as B,zb as h}from"./chunk-PL4V4ZV4.js";function Fe(i,e){if(i&1&&m(0,"sz-ui-form-field-select",4),i&2){let M=v();s("source",M.testTypeResultOptions);}}function Be(i,e){i&1&&(_(0,"div",7)(1,"mat-form-field",8)(2,"label"),m(3,"input",9),c()(),_(4,"mat-form-field",8)(5,"label"),m(6,"input",10),c()()());}function $e(i,e){i&1&&(_(0,"mat-form-field",8)(1,"label"),m(2,"input",11),c()());}function Ge(i,e){if(i&1&&h(0,Be,7,0,"div",7)(1,$e,3,0,"mat-form-field",8),i&2){let M=v();O(0,M.isRange()?0:-1),u(),O(1,M.isRange()?-1:1);}}var ye=(()=>{let e=class e extends Ce{constructor(o,t,r,n){super(r),this.mlabService=o,this.fb=t,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:te.Or,filters:oe.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(R).map(a=>R[a]),this.form=t.group({description:[n.referenceValueRule?.description,[N.maxLength(4096)]],comparisonOperator:new q(n.referenceValueRule?.comparisonOperator??R.Equal,[N.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[N.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]],testTypeResultOptionId:[n.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===R.RangeWithBoundaries||this.form.value.comparisonOperator===R.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(l(S),l(J),l(ie),l(ne));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[E([]),G,j],decls:9,vars:9,consts:()=>{let o;o="Reference Group";let t;t="Comparison Operator";let r;r="Value";let n;n="Description";let a;a="Start";let b;b="End";let U;return U="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",t,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",r,3,"source"],["formControlName","description","label",n],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",a],["autocomplete","off","formControlName","end","matInput","","placeholder",b],["autocomplete","off","formControlName","value","matInput","","placeholder",U]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),h(5,Fe,1,1,"sz-ui-form-field-select",4)(6,Ge,2,2),m(7,"sz-ui-form-field-textarea",5),c()(),m(8,"sz-ui-dialog-actions",6)),t&2&&(s("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),s("formGroup",r.form),u(),s("source",r.referenceGroups),u(),s("source",r.comparisonOperators)("localizedValue",!0),u(),O(5,r.data.referenceValue.testType.hasResultOptions?5:6),u(3),s("actions",r.actions));},dependencies:[Z,H,w,x,k,W,Q,ce,_e,le,g,ae,se,L,I,Ne,Te,Re,Se,Ee],encapsulation:2});let i=e;return i;})();var be=(()=>{let e=class e{constructor(o,t,r,n){this.dialog=o,this.route=t,this.mlabService=r,this.locale=n,this.dataSource=new Ve(),this.referenceValue=$.required(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(p.string("referenceGroup.description").setStyleSmall()),p.enum("comparisonOperator").setValueGetter(a=>de(a.comparisonOperator)),p.number("_value").setValueGetter(a=>a.value!==null?a.value:`${a.start} - ${a.end}`).setHeaderSortable(!1),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),Le.menu([D.edit(a=>this.openSaveComponent(a)),D.delete(a=>{this.openReferenceValueRuleDeleteComponent(a);})]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ye,{data:{referenceValue:this.referenceValue(),referenceValueRule:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Ae,{data:ge.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue().id,this.dataSource.getQuery()).pipe(pe(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(l(A),l(T),l(S),l(X));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:[F.SignalBased,"referenceValue"]},features:[E([])],decls:5,vars:3,consts:()=>{let o;return o="Add",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,r){t&1&&(_(0,"sz-ui-table-search-filter",1),C("changed",function(){return r.get();}),_(1,"button",2),C("click",function(){return r.openSaveComponent();}),_(2,"span"),Y(3,0),c()()(),_(4,"sz-ui-table",3),C("update",function(){return r.get();}),c()),t&2&&(s("dataSource",r.dataSource),u(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[ue,he,Ie],encapsulation:2});let i=e;return i;})();var Ue=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.route=t,this.alert$=new P(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(t){return new(t||e)(l(A),l(T));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[E([])],decls:2,vars:4,consts:[[3,"title","subtitle","backEnabled"],[3,"referenceValue"]],template:function(t,r){t&1&&m(0,"sz-ui-app-bar",0)(1,"sz-medisy-laboratory-reference-value-rules",1),t&2&&(s("title",r.referenceValue.testType.nameEn)("subtitle",r.referenceValue.description)("backEnabled",!0),u(),s("referenceValue",r.referenceValue));},dependencies:[V,be],encapsulation:2});let i=e;return i;})();var Pe=[{path:"",component:Ue}];var Ht=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=B({type:e}),e.ɵinj=z({providers:[S],imports:[K,ee.forChild(Pe),g,L,Me,re,me,fe,ve,Oe,I,V]});let i=e;return i;})();export{Ht as ReferenceValueModule};/**i18n:64c1f5f06e8abd83b3efaf45f531fe6f5f4be479271361a7171a066aafa7d48d*/