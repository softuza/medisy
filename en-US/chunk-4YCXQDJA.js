import{a as R}from"./chunk-Y5XEEHJ6.js";import{a as Me}from"./chunk-HIF2EYTK.js";import{a as p,b as Le,d as Ve,f as ge,i as he,j as Ie}from"./chunk-NBZRVN3Y.js";import"./chunk-V3IDSUBA.js";import"./chunk-72QARLDS.js";import"./chunk-4WMKGAQA.js";import{a as S}from"./chunk-E4K3ZOYS.js";import"./chunk-4XEE4I4T.js";import{e as Oe,f as Ce,g as Ne,i as Te,j as h,k as Ae}from"./chunk-JDQ4W3QS.js";import"./chunk-5XS2JNPH.js";import{a as g}from"./chunk-3TCVELMY.js";import{d as Re,h as y}from"./chunk-VN32AWOL.js";import{a as re,b as ie,d as A,e as ne,g as L}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{c as _e,d as ce,j as pe,t as V,v as fe,x as Ee,y as Se}from"./chunk-HZVTZU6E.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{d as de}from"./chunk-NXGV7MLA.js";import{i as ae,j as le,l as me}from"./chunk-QN2XJZ42.js";import{b as X,d as N,f as w,g as x,k,l as q,n as H,q as W,r as Q,t as J,u as K}from"./chunk-YQYD3PHP.js";import{r as ee,t as te}from"./chunk-FDTJH5UN.js";import{a as T,e as Z}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as oe,ia as se,ka as ue}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Cc as j,Db as O,Fa as B,Ib as _,Jb as c,Kb as m,Ub as G,Vb as C,Xb as v,ab as u,bb as l,ea as z,f as P,kc as E,lc as Y,na as f,oa as F,ob as $,ub as I,yb as s}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";function ze(i,e){if(i&1&&m(0,"sz-ui-form-field-select",4),i&2){let M=v();s("source",M.testTypeResultOptions);}}function Fe(i,e){i&1&&(_(0,"div",7)(1,"mat-form-field",8)(2,"label"),m(3,"input",9),c()(),_(4,"mat-form-field",8)(5,"label"),m(6,"input",10),c()()());}function Be(i,e){i&1&&(_(0,"mat-form-field",8)(1,"label"),m(2,"input",11),c()());}function $e(i,e){if(i&1&&I(0,Fe,7,0,"div",7)(1,Be,3,0,"mat-form-field",8),i&2){let M=v();O(M.isRange()?0:-1),u(),O(M.isRange()?-1:1);}}var ye=(()=>{let e=class e extends Oe{constructor(o,t,r,a){super(r),this.mlabService=o,this.fb=t,this.dialog=r,this.data=a,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:ee.Or,filters:te.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(R).map(n=>R[n]),this.form=t.group({description:[a.referenceValueRule?.description,[N.maxLength(4096)]],comparisonOperator:new k(a.referenceValueRule?.comparisonOperator??R.Equal,[N.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[N.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]],testTypeResultOptionId:[a.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===R.RangeWithBoundaries||this.form.value.comparisonOperator===R.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(l(S),l(Q),l(re),l(ie));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[E([]),$,Y],decls:9,vars:9,consts:()=>{let o;o="Reference Group";let t;t="Comparison Operator";let r;r="Value";let a;a="Description";let n;n="Start";let b;b="End";let U;return U="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",t,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",r,3,"source"],["formControlName","description","label",a],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",b],["autocomplete","off","formControlName","value","matInput","","placeholder",U]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),I(5,ze,1,1,"sz-ui-form-field-select",4)(6,$e,2,2),m(7,"sz-ui-form-field-textarea",5),c()(),m(8,"sz-ui-dialog-actions",6)),t&2&&(s("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),s("formGroup",r.form),u(),s("source",r.referenceGroups),u(),s("source",r.comparisonOperators)("localizedValue",!0),u(),O(r.data.referenceValue.testType.hasResultOptions?5:6),u(3),s("actions",r.actions));},dependencies:[K,q,X,w,x,H,W,ce,_e,ae,L,ne,le,V,h,Ce,Ne,Se,Ee,fe],encapsulation:2});let i=e;return i;})();var De=(()=>{let e=class e{constructor(o,t,r,a){this.dialog=o,this.route=t,this.mlabService=r,this.locale=a,this.dataSource=new Ve(),this.referenceValue=B.required(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(p.string("referenceGroup.description").setStyleSmall()),p.enum("comparisonOperator").setValueGetter(n=>de(n.comparisonOperator)),p.number("_value").setValueGetter(n=>n.testTypeResultOption?n.testTypeResultOption.nameEn:n.value!==null?n.value:`${n.start} - ${n.end}`).setHeaderSortable(!1),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),Le.menu([y.edit(n=>this.openSaveComponent(n)),y.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ye,{data:{referenceValue:this.referenceValue(),referenceValueRule:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Te,{data:Ae.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue().id,this.dataSource.getQuery()).pipe(pe(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(l(A),l(T),l(S),l(j));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:[1,"referenceValue"]},features:[E([])],decls:5,vars:2,consts:()=>{let o;return o="Add",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,r){t&1&&(_(0,"sz-ui-table-search-filter",1),C("changed",function(){return r.get();}),_(1,"button",2),C("click",function(){return r.openSaveComponent();}),_(2,"span"),G(3,0),c()()(),_(4,"sz-ui-table",3),C("update",function(){return r.get();}),c()),t&2&&(s("dataSource",r.dataSource),u(4),s("dataSource",r.dataSource));},dependencies:[se,he,ge],encapsulation:2});let i=e;return i;})();var be=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.route=t,this.alert$=new P(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(t){return new(t||e)(l(A),l(T));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[E([])],decls:2,vars:4,consts:[[3,"title","subtitle","backEnabled"],[3,"referenceValue"]],template:function(t,r){t&1&&m(0,"sz-ui-app-bar",0)(1,"sz-medisy-laboratory-reference-value-rules",1),t&2&&(s("title",r.referenceValue.testType.nameEn)("subtitle",r.referenceValue.description)("backEnabled",!0),u(),s("referenceValue",r.referenceValue));},dependencies:[g,De],encapsulation:2});let i=e;return i;})();var Ue=[{path:"",component:be}];var qt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=F({type:e}),e.ɵinj=z({providers:[S],imports:[J,Z.forChild(Ue),L,V,Re,oe,ue,me,Ie,Me,h,g]});let i=e;return i;})();export{qt as ReferenceValueModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/