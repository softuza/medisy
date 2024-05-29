import{c as pe}from"./chunk-LBYKPEE6.js";import{a as me}from"./chunk-SQ3EI5QC.js";import{a,b as le,d as ue,f as Se,i as _e,j as de}from"./chunk-FBVE3FIH.js";import{a as m}from"./chunk-TPAQ3FM3.js";import{e as G,f as $,g as B,i as ne,j as P,k as ae}from"./chunk-SB426TL2.js";import{e as Y,g as se,h as X}from"./chunk-EKINQSBT.js";import{a as v,b,d as x,e as V,g as D}from"./chunk-6O2ERFHS.js";import{c as z,q as F,s as oe,t as re}from"./chunk-6LY23KCH.js";import{c as R}from"./chunk-26Z5FPBL.js";import{c,d as ie}from"./chunk-Y57UOOVT.js";import{d as U,f as M,g as y,k as I,m as O,p as N,q as h,t as L}from"./chunk-VOPXBGHU.js";import{a as K,c as W,e as Z}from"./chunk-NBJEKYXR.js";import{ia as ee,ka as te}from"./chunk-VXXQSTLE.js";import{Cc as J,Db as w,Fa as H,Ib as d,Jb as p,Kb as S,Ub as q,Vb as E,Xb as Q,ab as l,bb as u,ja as f,kc as C,lc as A,na as T,ob as g,ub as k,yb as s}from"./chunk-WEQMZHJB.js";function Me(r,o){if(r&1&&S(0,"sz-ui-form-field-select",3),r&2){let j=Q();s("source",j.testTypeResultOptions)("szOptionValueFn",j.testTypeResultOptionValueFn);}}function ye(r,o){r&1&&S(0,"sz-ui-form-field-input",4),r&2&&s("type","number");}var fe=(()=>{let o=class o extends G{constructor(e,t,i,n){super(t),this.fb=e,this.dialog=t,this.mlabService=i,this.data=n,this.referenceValueRules=this.mlabService.referenceValues.rules.getAll(this.data.referenceValueId,{orderBy:["referenceGroup.nameEn"]}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.testTypeId,{orderBy:["nameEn"]}),this.testTypeResultOptionValueFn=_=>_,this.referenceValueRuleContentFn=_=>_.referenceGroup.nameEn,this.form=e.group({value:[null,[]],testTypeResultOption:[null,[]],referenceValueRuleId:[null,[U.required]],note:[null,[U.maxLength(4096)]]});}referenceValueRulesChanged(e){if(e.length===0)return;let t=e.find(i=>i.referenceGroupId===this.data.referenceGroupId);t&&this.form.controls.referenceValueRuleId.setValue(t.id);}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.id,{value:this.form.value.value,testTypeResultOptionId:this.form.value.testTypeResultOption?.id,referenceValueRuleId:this.form.value.referenceValueRuleId,note:this.form.value.note}).pipe(R(this.indicator)).subscribe(e=>{this.dialog.close(e);});}};o.ɵfac=function(t){return new(t||o)(u(h),u(v),u(m),u(b));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[C([m]),g,A],decls:8,vars:8,consts:()=>{let e;e="Rule";let t;t="Value";let i;i="Value";let n;return n="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueRuleId","label",e,3,"szOptionsFetched","source","szOptionContentFn"],["formControlName","testTypeResultOption","label",t,3,"source","szOptionValueFn"],["formControlName","value","label",i,3,"type"],["formControlName","note","label",n],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1)(3,"sz-ui-form-field-select",2),E("szOptionsFetched",function(_){return i.referenceValueRulesChanged(_);}),p(),k(4,Me,1,2,"sz-ui-form-field-select",3)(5,ye,1,1,"sz-ui-form-field-input",4),S(6,"sz-ui-form-field-textarea",5),p()(),S(7,"sz-ui-dialog-actions",6)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),s("formGroup",i.form),l(),s("source",i.referenceValueRules)("szOptionContentFn",i.referenceValueRuleContentFn),l(),w(i.data.testType.hasResultOptions?4:5),l(3),s("actions",i.actions));},dependencies:[L,I,M,y,O,N,D,V,P,$,B,z,oe,F],encapsulation:2});let r=o;return r;})();var Te=(()=>{let o=class o extends G{constructor(e,t,i,n){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=n,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[n?.testGroupId,[]],note:[n?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(u(m),u(h),u(v),u(b));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[g,A],decls:6,vars:7,consts:()=>{let e;e="Test Group";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),p()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),s("formGroup",i.form),l(),s("source",i.testGroups)("emptyOption",!0),l(2),s("actions",i.actions));},dependencies:[L,I,M,y,O,N,D,V,P,$,B,re,z,F],encapsulation:2});let r=o;return r;})();var ut=(()=>{let o=class o{constructor(){this.route=f(K),this.router=f(W),this.dialog=f(x),this.locale=f(J),this.mlabService=f(m),this.analysis=H.required(),this.dataSource=new ue(["test.testType.nameEn","-testId"]),this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.state").setValueGetter(e=>pe(e.test.state)).setValueTooltip(e=>ie(e.test.state)),a.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.nameEn").setName(c.reference_group).setVisible(!1),a.string("note").setVisible(!1),a.string("_result").setName(c.result).setValueGetter(e=>this.getTestResultValue(e)),a.string("test.referenceValue.name").setName(c.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),a.string("test.referenceValue.unit.symbol").setResponsive(!0).setName(c.unit),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),le.menu([Y.item(c.add_result,se.science,e=>this.openAnalysisTestResultSaveComponent(e.test)),Y.divider(),X.edit(e=>this.openSaveComponent(e)),Y.divider(),X.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:c.test_group,nameGetterFn:e=>e.testGroup?.name??c.single};}ngOnInit(){this.get();}getTestResult(e){return e.test.results.length===0?null:e.test.results[0];}getTestResultValue(e){let t=this.getTestResult(e);return t?t.testTypeResultOption?t.testTypeResultOption.nameEn:t.value:"";}getTestReferenceValue(e){let t=this.getTestResult(e);return!t||!t.referenceValueRule||t.testTypeResultOptionId?"":t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(me,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).pipe(R(this.dataSource.indicator)).subscribe(t=>{t&&this.get();});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(fe,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(Te,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(ne,{data:ae.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(R(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[C([m]),A],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(d(0,"sz-ui-table-search-filter",1),E("changed",function(){return i.get();}),d(1,"button",2),E("click",function(){return i.openAnalysisTestTypeAddComponent();}),d(2,"span"),q(3,0),p()()(),d(4,"sz-ui-table",3),E("update",function(){return i.get();}),p()),t&2&&(s("dataSource",i.dataSource),l(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[Z,de,_e,Se,te,ee],encapsulation:2});let r=o;return r;})();export{ut as a};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/