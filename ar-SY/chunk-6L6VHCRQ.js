import{a as R}from"./chunk-LBYKPEE6.js";import{a as Me}from"./chunk-27ZGL5D4.js";import{a as p,b as Le,d as Ve,f as ge,i as he,j as Ie}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-A54NTVFL.js";import"./chunk-EWRIL5TF.js";import{a as S}from"./chunk-TPAQ3FM3.js";import{e as Oe,f as Ce,g as Ne,i as Te,j as h,k as Ae}from"./chunk-SB426TL2.js";import"./chunk-PP3NP7HU.js";import{a as g}from"./chunk-W3O4IPE3.js";import{d as Re,h as y}from"./chunk-EKINQSBT.js";import{a as re,b as ie,d as A,e as ne,g as L}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{a as me,b as _e,o as V,q as fe,s as Ee,t as Se}from"./chunk-6LY23KCH.js";import{c as ce}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{d as pe}from"./chunk-Y57UOOVT.js";import{h as ae,i as le,k as de}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{b as X,d as N,f as w,g as x,j as k,k as q,m as H,p as W,q as Q,s as J,t as K}from"./chunk-VOPXBGHU.js";import{r as ee,t as te}from"./chunk-RJITGV4Q.js";import{a as T,e as Z}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as oe,ia as se,ka as ue}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Cc as j,Db as O,Fa as B,Ib as _,Jb as c,Kb as m,Ub as G,Vb as C,Xb as v,ab as u,bb as l,ea as z,f as P,kc as E,lc as Y,na as f,oa as F,ob as $,ub as I,yb as s}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";function ze(i,e){if(i&1&&m(0,"sz-ui-form-field-select",4),i&2){let M=v();s("source",M.testTypeResultOptions);}}function Fe(i,e){i&1&&(_(0,"div",7)(1,"mat-form-field",8)(2,"label"),m(3,"input",9),c()(),_(4,"mat-form-field",8)(5,"label"),m(6,"input",10),c()()());}function Be(i,e){i&1&&(_(0,"mat-form-field",8)(1,"label"),m(2,"input",11),c()());}function $e(i,e){if(i&1&&I(0,Fe,7,0,"div",7)(1,Be,3,0,"mat-form-field",8),i&2){let M=v();O(M.isRange()?0:-1),u(),O(M.isRange()?-1:1);}}var ye=(()=>{let e=class e extends Oe{constructor(o,t,r,a){super(r),this.mlabService=o,this.fb=t,this.dialog=r,this.data=a,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:ee.Or,filters:te.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(R).map(n=>R[n]),this.form=t.group({description:[a.referenceValueRule?.description,[N.maxLength(4096)]],comparisonOperator:new k(a.referenceValueRule?.comparisonOperator??R.Equal,[N.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[N.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]],testTypeResultOptionId:[a.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===R.RangeWithBoundaries||this.form.value.comparisonOperator===R.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(l(S),l(Q),l(re),l(ie));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[E([]),$,Y],decls:9,vars:9,consts:()=>{let o;o="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let r;r="\u0642\u064A\u0645\u0629";let a;a="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let b;b="\u0646\u0647\u0627\u064A\u0629";let U;return U="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",t,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",r,3,"source"],["formControlName","description","label",a],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",b],["autocomplete","off","formControlName","value","matInput","","placeholder",U]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),I(5,ze,1,1,"sz-ui-form-field-select",4)(6,$e,2,2),m(7,"sz-ui-form-field-textarea",5),c()(),m(8,"sz-ui-dialog-actions",6)),t&2&&(s("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),s("formGroup",r.form),u(),s("source",r.referenceGroups),u(),s("source",r.comparisonOperators)("localizedValue",!0),u(),O(r.data.referenceValue.testType.hasResultOptions?5:6),u(3),s("actions",r.actions));},dependencies:[K,q,X,w,x,H,W,_e,me,ae,L,ne,le,V,h,Ce,Ne,Se,Ee,fe],encapsulation:2});let i=e;return i;})();var De=(()=>{let e=class e{constructor(o,t,r,a){this.dialog=o,this.route=t,this.mlabService=r,this.locale=a,this.dataSource=new Ve(),this.referenceValue=B.required(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(p.string("referenceGroup.description").setStyleSmall()),p.enum("comparisonOperator").setValueGetter(n=>pe(n.comparisonOperator)),p.number("_value").setValueGetter(n=>n.testTypeResultOption?n.testTypeResultOption.nameEn:n.value!==null?n.value:`${n.start} - ${n.end}`).setHeaderSortable(!1),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),Le.menu([y.edit(n=>this.openSaveComponent(n)),y.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ye,{data:{referenceValue:this.referenceValue(),referenceValueRule:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Te,{data:Ae.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue().id,this.dataSource.getQuery()).pipe(ce(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(l(A),l(T),l(S),l(j));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:[1,"referenceValue"]},features:[E([])],decls:5,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,r){t&1&&(_(0,"sz-ui-table-search-filter",1),C("changed",function(){return r.get();}),_(1,"button",2),C("click",function(){return r.openSaveComponent();}),_(2,"span"),G(3,0),c()()(),_(4,"sz-ui-table",3),C("update",function(){return r.get();}),c()),t&2&&(s("dataSource",r.dataSource),u(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[se,he,ge],encapsulation:2});let i=e;return i;})();var be=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.route=t,this.alert$=new P(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(t){return new(t||e)(l(A),l(T));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[E([])],decls:2,vars:4,consts:[[3,"title","subtitle","backEnabled"],[3,"referenceValue"]],template:function(t,r){t&1&&m(0,"sz-ui-app-bar",0)(1,"sz-medisy-laboratory-reference-value-rules",1),t&2&&(s("title",r.referenceValue.testType.nameEn)("subtitle",r.referenceValue.description)("backEnabled",!0),u(),s("referenceValue",r.referenceValue));},dependencies:[g,De],encapsulation:2});let i=e;return i;})();var Ue=[{path:"",component:be}];var qt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=F({type:e}),e.ɵinj=z({providers:[S],imports:[J,Z.forChild(Ue),L,V,Re,oe,ue,de,Ie,Me,h,g]});let i=e;return i;})();export{qt as ReferenceValueModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/