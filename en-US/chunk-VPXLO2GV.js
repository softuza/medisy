import{a as ue}from"./chunk-BCPEX377.js";import{e as x,f as Ee}from"./chunk-AALMXNQX.js";import{a as Te}from"./chunk-2EWMDKQV.js";import{d as _e,e as a,g as pe,i as ce,j as fe}from"./chunk-KJFSJFMK.js";import{c as Se,g as Y,h as F,i as $,j as de,k as me,l as G}from"./chunk-7RLI67YS.js";import{a as d}from"./chunk-MHKFRTZS.js";import{a as O,b as v,d as te,e as y,g as b}from"./chunk-U3H7W2BJ.js";import{c as oe,h as k,i as w,p as re,s as V,t as ne,v as D}from"./chunk-L5VDOQ2E.js";import{d as H,f as g,g as R,l as h,o as N,r as I,s as M,u as L}from"./chunk-KMQC4JE3.js";import{a as ae}from"./chunk-RH7O46RF.js";import{a as z,b as m,c as le}from"./chunk-2WSRG4TZ.js";import{a as S,b as se}from"./chunk-5COP62WY.js";import{p as W,r as Z,s as ee,x as X}from"./chunk-VFFUX6UX.js";import{Ma as ie}from"./chunk-BKKXZCD4.js";import{Cc as K,Eb as U,Jb as p,Kb as c,Lb as u,Wb as J,Yb as P,a as Q,bb as l,ja as r,mb as C,mc as f,na as _,nc as T,rb as j,yb as n}from"./chunk-5UGT7ICT.js";function Le(s,o){if(s&1&&u(0,"sz-ui-form-field-select",3),s&2){let E=P();n("source",E.units)("config",E.unitSelectConfig);}}function Oe(s,o){if(s&1&&u(0,"sz-ui-form-field-select",4),s&2){let E=P();n("source",E.testTypeResultOptions)("config",E.resultOptionSelectConfig);}}function ve(s,o){s&1&&u(0,"sz-ui-form-field-input-number",5);}var Ce=(()=>{let o=class o extends Y{constructor(){super(r(O)),this.fb=r(M),this.mlabService=r(d),this.data=r(v),this.referenceValues=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.resultOptionSelectConfig={optionValueFn:t=>t.nameEn},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:t=>t.referenceGroup.nameEn,optionValueFn:t=>t,optionSelectedFn:t=>{t&&this.referenceValueSelected(t);}},this.unitSelectConfig={autoSelect:!0};let e=this.fb;this.form=e.group({referenceValue:[null,[]],value:[null,[H.required]],unitId:[null,[]],note:[null,[H.maxLength(4096)]]}),this.getReferenceValues();}isQuantitative(e){return e===Te.Quantitative;}getReferenceValues(){this.mlabService.referenceValues.getAllItems({filters:X.create().equal("testTypeId",this.data.test.testTypeId).equalIf("testTypeClinicalCaseId",this.data.test.testTypeClinicalCaseId).filters()}).pipe(k(this.indicator),w(this.alert)).subscribe(e=>{this.referenceValues=e;});}referenceValueSelected(e){this.units=[],e.unitId&&e.unit&&(this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:X.create().equal("toUnitId",e.unitId).filters()}).subscribe(t=>{this.units.push(...t.map(i=>i.fromUnit));}),this.form.patchValue({unitId:e.unitId}));}submit(){if(!this.IsValid())return;let e=this.form.value;if(typeof e.value=="number"){let t=e.value,i=e.referenceValue;if(i){if(i.minValue&&t<i.minValue){this.form.controls.value.setErrors({incorrect:!0});return;}if(i.maxValue&&t>i.maxValue){this.form.controls.value.setErrors({incorrect:!0});return;}}}this.mlabService.tests.updateResult(this.data.test.id,{value:e.value.toString(),referenceValueId:e.referenceValue?.id,unitId:e.unitId,note:e.note}).pipe(k(this.indicator),w(this.alert)).subscribe(t=>{this.dialogRef.close(t);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[f([d]),C,T],decls:9,vars:9,consts:()=>{let e;e="Reference Value";let t;t="Unit";let i;i="Value";let B;B="Value";let q;return q="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValue","label",e,3,"source","config"],["formControlName","unitId","label",t,3,"source","config"],["formControlName","value","label",i,3,"source","config"],["formControlName","value","label",B],["formControlName","note","label",q],[3,"actions"]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2),j(4,Le,1,2,"sz-ui-form-field-select",3)(5,Oe,1,2,"sz-ui-form-field-select",4)(6,ve,1,0,"sz-ui-form-field-input-number",5),u(7,"sz-ui-form-field-textarea",6),c()(),u(8,"sz-ui-dialog-actions",7)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),n("formGroup",i.form),l(),n("source",i.referenceValues)("config",i.referenceValueSelectConfig),l(),U(i.units.length>0?4:-1),l(),U(i.isQuantitative(i.data.test.testType.testResultType)?6:5),l(3),n("actions",i.actions));},dependencies:[L,h,g,R,N,I,b,y,G,F,$,D,re,ne,V],encapsulation:2});let s=o;return s;})();var ge=(()=>{let o=class o extends Y{constructor(){super(r(O)),this.mlabService=r(d),this.fb=r(M),this.data=r(v),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.subscriptions=new Q();let e=this.fb,t=this.data;this.form=e.group({note:[t?.note,[]],referenceGroupId:[t?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[f([d]),C,T],decls:6,vars:6,consts:()=>{let e;e="Reference Group";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input-text",3),c()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),n("formGroup",i.form),l(),n("source",i.referenceGroups),l(2),n("actions",i.actions));},dependencies:[L,h,g,R,N,I,b,y,G,F,$,D,oe,V],encapsulation:2});let s=o;return s;})();var Tt=(()=>{let o=class o{constructor(){this.route=r(W),this.router=r(Z),this.dialog=r(te),this.locale=r(K),this.mlabService=r(d),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new pe(["test.testType.nameEn","-testId"]),this.card={header:{title:S.tests}},this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.testStatus").setValueGetter(e=>Ee(e.test.testStatus)).setValueTooltip(e=>se(e.test.testStatus)),a.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/${ae.Analyses}/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.nameEn").setHeaderName(S.reference_group).setVisible(!1),a.string("note").setVisible(!1),a.string("test.resultValue").setHeaderName(S.result).setStacked([a.string("test.resultNote").setValueClassFontSmall()]),a.string("test.resultStatus").setHeaderName(S.status).setStyleSmall().setResponsive(!0),a.string("test.referenceValue").setHeaderName(S.reference_value).setResponsive(!0).setValueGetter(e=>e.test.referenceValue),a.string("test.resultUnit.name").setHeaderName(S.unit).setResponsive(!0).setStyleSmall().setValueGetter(e=>e.test.resultUnit?.symbol),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(le.default([m.default().setTooltip(S.result).setIcon(z.post_add).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.Created),m.default().setTooltip(S.apporve).setIcon(z.assignment_turned_in).setClickFn(this.openAnalysisTestApproveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.ResultGenerated),m.menu([m.default().setTooltip(S.result).setIcon(z.post_add).setTitle(S.result).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openDeleteComponent.bind(this))])])).clearClass().setClassEnd());}ngOnInit(){this.get();}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(t=>{t&&(e?(e.test=t,this.dataSource.addOrUpdateItem(e)):this.get());});}openAnalysisTestApproveComponent(e){this.dialog.open(de,{data:{message:S.approve_test_result,task$:this.mlabService.tests.updateResultApproval(e?.test.id,{isApproved:!0})}}).afterClosed().subscribe(t=>{t&&(e?(e.test=t,this.dataSource.addOrUpdateItem(e)):this.get());});}openSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(me,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(ce(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[f([d]),T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),J("update",function(){return i.get();}),c()()),t&2&&(n("card",i.card),l(),n("dataSource",i.dataSource));},dependencies:[ee,fe,_e,ie,ue],encapsulation:2});let s=o;return s;})();export{Tt as a};/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/