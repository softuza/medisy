import{c as Ae}from"./chunk-PISLV3X5.js";import{a as Te}from"./chunk-XZUMVDUY.js";import{a as u,b as de,d as pe,f as me,i as ce,j as fe}from"./chunk-U4RNOXSF.js";import{a as m}from"./chunk-D4CAUMAG.js";import{e as B,f as P,g as U,i as Se,j as X,k as _e}from"./chunk-GOPVSNKC.js";import{e as $,g as ue,h as H}from"./chunk-QMJQGH34.js";import{a as b,b as z,d as oe,e as D,g as F}from"./chunk-R72CS7SP.js";import{c as Y,q as G,s as ae,t as le}from"./chunk-UCRC6V5J.js";import{c as R}from"./chunk-5WJVC7PV.js";import{c as f,d as re}from"./chunk-QXIIYWNN.js";import{d as y,f as M,g as h,k as I,m as N,p as L,q as v,t as V}from"./chunk-EIWC7QFZ.js";import{a as ee,c as te,e as ie}from"./chunk-L6HNREY7.js";import{ia as se,ka as ne}from"./chunk-QHXZELMZ.js";import{Da as k,Db as n,Ea as q,Hc as x,Ib as K,Ma as Q,Nb as l,Ob as d,Pb as p,Tb as W,Zb as Z,_b as c,ac as j,hb as a,ib as S,pa as T,pc as O,qc as E,ta as w,ua as A,ub as C,zb as J}from"./chunk-XPH4NMLC.js";function Ie(s,o){if(s&1){let g=W();l(0,"sz-ui-form-field-select",6),c("szOptionSelected",function(t){k(g);let i=j();return q(i.testTypeResultOptionChanged(t));}),d();}if(s&2){let g=j();n("source",g.testTypeResultOptions)("szOptionValueFn",g.testTypeResultOptionValueFn);}}function Ne(s,o){s&1&&p(0,"sz-ui-form-field-input",7),s&2&&n("type","number");}var Re=(()=>{let o=class o extends B{constructor(e,t,i,r){super(t),this.fb=e,this.dialog=t,this.mlabService=i,this.data=r,this.referenceValueRules=this.mlabService.referenceValues.rules.getAll(this.data.referenceValueId,{orderBy:["referenceGroup.name"]}),this.testTypeResultOptions=[],this.testTypeResultOptionValueFn=_=>_,this.referenceValueRuleContentFn=_=>_.referenceGroup.name,this.hasResultOptions=!0,this.form=e.group({value:[null,[y.required]],testTypeResultOption:[null,[]],referenceValueRuleId:[null,[y.required]],note:[null,[y.maxLength(4096)]]}),this.getTestTypeResultOptions();}getTestTypeResultOptions(){this.mlabService.testTypes.resultOptions.getAll(this.data.testTypeId,{orderBy:["name"]}).pipe(R(this.indicator)).subscribe(e=>{e&&(this.testTypeResultOptions=e.items,this.hasResultOptions=this.testTypeResultOptions.length>0);});}testTypeResultOptionChanged(e){this.form.controls.value.setValue(e.value);}referenceValueRulesChanged(e){if(e.length===0)return;let t=e.find(i=>i.referenceGroupId===this.data.referenceGroupId);t&&this.form.controls.referenceValueRuleId.setValue(t.id);}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.id,{value:this.form.value.value,testTypeResultOptionId:this.form.value.testTypeResultOption?.id,referenceValueRuleId:this.form.value.referenceValueRuleId,note:this.form.value.note}).pipe(R(this.indicator)).subscribe(e=>{this.dialog.close(e);});}};o.ɵfac=function(t){return new(t||o)(S(v),S(b),S(m),S(z));},o.ɵcmp=A({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[O([m]),C,E],decls:8,vars:8,consts:()=>{let e;e="Value";let t;t="Rule";let i;i="Note";let r;return r="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeResultOption","label",e,3,"source","szOptionValueFn"],["formControlName","referenceValueRuleId","label",t,3,"szOptionsFetched","source","szOptionContentFn"],["formControlName","note","label",i],[3,"actions"],["formControlName","testTypeResultOption","label",e,3,"szOptionSelected","source","szOptionValueFn"],["formControlName","value","label",r,3,"type"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),J(3,Ie,1,2,"sz-ui-form-field-select",2)(4,Ne,1,1),l(5,"sz-ui-form-field-select",3),c("szOptionsFetched",function(_){return i.referenceValueRulesChanged(_);}),d(),p(6,"sz-ui-form-field-textarea",4),d()(),p(7,"sz-ui-dialog-actions",5)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),n("formGroup",i.form),a(),K(3,i.hasResultOptions?3:4),a(2),n("source",i.referenceValueRules)("szOptionContentFn",i.referenceValueRuleContentFn),a(2),n("actions",i.actions));},dependencies:[V,I,M,h,N,L,F,D,X,P,U,Y,ae,G],encapsulation:2});let s=o;return s;})();var ge=(()=>{let o=class o extends B{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[r?.testGroupId,[]],note:[r?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(S(m),S(v),S(b),S(z));},o.ɵcmp=A({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[C,E],decls:6,vars:7,consts:()=>{let e;e="Test Group";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),d()(),p(5,"sz-ui-dialog-actions",4)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),n("formGroup",i.form),a(),n("source",i.testGroups)("emptyOption",!0),a(2),n("actions",i.actions));},dependencies:[V,I,M,h,N,L,F,D,X,P,U,le,Y,G],encapsulation:2});let s=o;return s;})();var pt=(()=>{let o=class o{constructor(){this.route=T(ee),this.router=T(te),this.dialog=T(oe),this.locale=T(x),this.mlabService=T(m),this.analysis=Q.required(),this.dataSource=new pe(["test.testType.name","-testId"]),this.dataSource.columnDefs.push(u.uuid("id"),u.icon("test.state").setValueGetter(e=>Ae(e.test.state)).setValueTooltip(e=>re(e.test.state)),u.string("test.testType.name").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([u.string("test.laboratory.name").setValueClassFontSmall()]),u.string("test.referenceGroup.name").setName(f.referenceGroup).setVisible(!1),u.string("note").setVisible(!1),u.string("_result").setName(f.result).setValueGetter(e=>this.getTestResultValue(e)),u.string("test.referenceValue.name").setName(f.referenceValue).setValueGetter(e=>this.getTestReferenceValue(e)),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),de.menu([$.item(f.addResult,ue.science,e=>this.openAnalysisTestResultSaveComponent(e.test)),$.divider(),H.edit(e=>this.openSaveComponent(e)),$.divider(),H.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:f.testGroup,nameGetterFn:e=>e.testGroup?.name??f.single};}ngOnInit(){this.get();}getTestResult(e){return e.test.results.length===0?null:e.test.results[0];}getTestResultValue(e){let t=this.getTestResult(e);return t?t.testTypeResultOption?t.testTypeResultOption.name:t.value:"";}getTestReferenceValue(e){let t=this.getTestResult(e);return!t||!t.referenceValueRule?"":t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(Te,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).pipe(R(this.dataSource.indicator)).subscribe(t=>{t&&this.get();});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().subscribe(t=>{});}openSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(Se,{data:_e.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(R(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=A({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[w.SignalBased,"analysis"]},standalone:!0,features:[O([m]),E],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(l(0,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),l(1,"button",2),c("click",function(){return i.openAnalysisTestTypeAddComponent();}),l(2,"span"),Z(3,0),d()()(),l(4,"sz-ui-table",3),c("update",function(){return i.get();}),d()),t&2&&(n("dataSource",i.dataSource),a(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ie,fe,ce,me,ne,se],encapsulation:2});let s=o;return s;})();export{pt as a};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/