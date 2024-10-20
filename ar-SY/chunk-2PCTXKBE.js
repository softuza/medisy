import{a as ue}from"./chunk-AK4XAPYV.js";import{e as U,f as Ee}from"./chunk-O6IOUHYM.js";import{a as Te}from"./chunk-2EWMDKQV.js";import{d as _e,e as r,g as pe,i as ce,j as fe}from"./chunk-3KPVDCAW.js";import{c as Se,g as Y,h as G,i as $,j as de,k as me,l as B}from"./chunk-5MCWW2M2.js";import{a as m}from"./chunk-MHKFRTZS.js";import{a as O,b as y,d as oe,e as b,g as V}from"./chunk-U3H7W2BJ.js";import{c as ne,h as q,i as x,p as re,s as D,t as ae,v as z}from"./chunk-PNC6CYU5.js";import{d as k,f as R,g as h,l as M,o as I,r as N,s as L,u as v}from"./chunk-KMQC4JE3.js";import{a as le}from"./chunk-RH7O46RF.js";import{a as A,b as d,c as F}from"./chunk-IRFYFKUD.js";import{a as l,b as ie}from"./chunk-5COP62WY.js";import{p as Z,r as ee,s as te,x as w}from"./chunk-VFFUX6UX.js";import{Ma as se}from"./chunk-BKKXZCD4.js";import{Cc as W,Eb as H,Jb as p,Kb as c,Lb as S,Wb as K,Yb as X,a as j,bb as u,ja as n,mb as g,mc as f,na as _,nc as T,rb as J,yb as a}from"./chunk-5UGT7ICT.js";function Le(s,o){if(s&1&&S(0,"sz-ui-form-field-select",3),s&2){let E=X();a("source",E.units)("config",E.unitSelectConfig);}}function ve(s,o){if(s&1&&S(0,"sz-ui-form-field-select",4),s&2){let E=X();a("source",E.testTypeResultOptions)("config",E.resultOptionSelectConfig);}}function Oe(s,o){s&1&&S(0,"sz-ui-form-field-input-number",5);}var Ce=(()=>{let o=class o extends Y{constructor(){super(n(O)),this.fb=n(L),this.mlabService=n(m),this.data=n(y),this.headerMenu=F.default([d.default().setTitle(()=>this.data.test.testTypeClinicalCase?.nameEn).setDisabled(!0)]),this.referenceValues=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.resultOptionSelectConfig={optionValueFn:t=>t.nameEn},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:t=>t.referenceGroup.nameEn,optionValueFn:t=>t,optionSelectedFn:t=>{t&&this.referenceValueSelected(t);}},this.unitSelectConfig={autoSelect:!0};let e=this.fb;this.form=e.group({referenceValue:[null,[]],value:[null,[k.required]],unitId:[null,[]],note:[null,[k.maxLength(4096)]]}),this.getReferenceValues();}isQuantitative(e){return e===Te.Quantitative;}getReferenceValues(){this.mlabService.referenceValues.getAllItems({filters:w.create().equal("testTypeId",this.data.test.testTypeId).equalIf("testTypeClinicalCaseId",this.data.test.testTypeClinicalCaseId).filters()}).pipe(q(this.indicator),x(this.alert)).subscribe(e=>{this.referenceValues=e;});}referenceValueSelected(e){this.units=[],e.unitId&&e.unit&&(this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:w.create().equal("toUnitId",e.unitId).filters()}).subscribe(t=>{this.units.push(...t.map(i=>i.fromUnit));}),this.form.patchValue({unitId:e.unitId}));}submit(){if(!this.IsValid())return;let e=this.form.value;if(typeof e.value=="number"){let t=e.value,i=e.referenceValue;if(i){if(i.minValue&&t<i.minValue){this.form.controls.value.setErrors({incorrect:!0});return;}if(i.maxValue&&t>i.maxValue){this.form.controls.value.setErrors({incorrect:!0});return;}}}this.mlabService.tests.updateResult(this.data.test.id,{value:e.value.toString(),referenceValueId:e.referenceValue?.id,unitId:e.unitId,note:e.note}).pipe(q(this.indicator),x(this.alert)).subscribe(t=>{this.dialogRef.close(t);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[f([m]),g,T],decls:9,vars:10,consts:()=>{let e;e="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0648\u0627\u062D\u062F\u0629";let i;i="\u0642\u064A\u0645\u0629";let P;P="\u0642\u064A\u0645\u0629";let Q;return Q="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert","menu"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValue","label",e,3,"source","config"],["formControlName","unitId","label",t,3,"source","config"],["formControlName","value","label",i,3,"source","config"],["formControlName","value","label",P],["formControlName","note","label",Q],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2),J(4,Le,1,2,"sz-ui-form-field-select",3)(5,ve,1,2,"sz-ui-form-field-select",4)(6,Oe,1,0,"sz-ui-form-field-input-number",5),S(7,"sz-ui-form-field-textarea",6),c()(),S(8,"sz-ui-dialog-actions",7)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert())("menu",i.headerMenu),u(2),a("formGroup",i.form),u(),a("source",i.referenceValues)("config",i.referenceValueSelectConfig),u(),H(i.units.length>0?4:-1),u(),H(i.isQuantitative(i.data.test.testType.testResultType)?6:5),u(3),a("actions",i.actions));},dependencies:[v,M,R,h,I,N,V,b,B,G,$,z,re,ae,D],encapsulation:2});let s=o;return s;})();var ge=(()=>{let o=class o extends Y{constructor(){super(n(O)),this.mlabService=n(m),this.fb=n(L),this.data=n(y),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.subscriptions=new j();let e=this.fb,t=this.data;this.form=e.group({note:[t?.note,[]],referenceGroupId:[t?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[f([m]),g,T],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input-text",3),c()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),u(2),a("formGroup",i.form),u(),a("source",i.referenceGroups),u(2),a("actions",i.actions));},dependencies:[v,M,R,h,I,N,V,b,B,G,$,z,ne,D],encapsulation:2});let s=o;return s;})();var Et=(()=>{let o=class o{constructor(){this.route=n(Z),this.router=n(ee),this.dialog=n(oe),this.locale=n(W),this.mlabService=n(m),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new pe(["test.testType.nameEn","-testId"]),this.card={header:{title:l.tests}},this.dataSource.columnDefs.push(r.uuid("id"),r.icon("test.testStatus").setValueGetter(e=>Ee(e.test.testStatus)).setValueTooltip(e=>ie(e.test.testStatus)),r.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/${le.Analyses}/${e.analysisId}/tests/${e.id}`])).setStacked([r.string("test.testTypeClinicalCase.nameEn").setValueClassFontSmall()]),r.string("test.laboratory.name").setVisible(!1),r.string("test.referenceGroup.nameEn").setHeaderName(l.reference_group).setVisible(!1),r.string("note").setVisible(!1),r.string("test.resultValue").setHeaderName(l.result).setStacked([r.string("test.resultNote").setValueClassFontSmall()]),r.string("test.resultStatus").setHeaderName(l.status).setStyleSmall().setResponsive(!0),r.string("test.referenceValue").setHeaderName(l.reference_value).setResponsive(!0).setValueGetter(e=>e.test.referenceValue),r.string("test.resultUnit.name").setHeaderName(l.unit).setResponsive(!0).setStyleSmall().setValueGetter(e=>e.test.resultUnit?.symbol),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu(F.default([d.default().setTooltip(l.result).setIcon(A.post_add).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)).setVisible(e=>e.test.testStatus===U.Created),d.default().setTooltip(l.apporve).setIcon(A.assignment_turned_in).setClickFn(this.openAnalysisTestApproveComponent.bind(this)).setVisible(e=>e.test.testStatus===U.ResultGenerated).setResponsive(!0),d.menu([d.default().setTooltip(l.apporve).setIcon(A.assignment_turned_in).setClickFn(this.openAnalysisTestApproveComponent.bind(this)).setVisible(e=>e.test.testStatus===U.ResultGenerated).setTitle(l.apporve),d.default().setTooltip(l.result).setIcon(A.post_add).setTitle(l.result).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),d.divider(),d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openDeleteComponent.bind(this))])])).clearClass().setClassEnd());}ngOnInit(){this.get();}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(t=>{t&&(e?(e.test=t,this.dataSource.addOrUpdateItem(e)):this.get());});}openAnalysisTestApproveComponent(e){this.dialog.open(de,{data:{message:l.approve_test_result,task$:this.mlabService.tests.updateResultApproval(e?.test.id,{isApproved:!0})}}).afterClosed().subscribe(t=>{t&&(e?(e.test=t,this.dataSource.addOrUpdateItem(e)):this.get());});}openSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(me,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(ce(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[f([m]),T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),K("update",function(){return i.get();}),c()()),t&2&&(a("card",i.card),u(),a("dataSource",i.dataSource));},dependencies:[te,fe,_e,se,ue],encapsulation:2});let s=o;return s;})();export{Et as a};/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/