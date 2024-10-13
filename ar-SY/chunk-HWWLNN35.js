import{a as ue}from"./chunk-QOJDNLHT.js";import{e as x,f as Ee}from"./chunk-C6Y3S6CV.js";import{a as Te}from"./chunk-4A5EEM56.js";import{d as _e,e as a,g as pe,i as ce,j as fe}from"./chunk-AKKCEXDQ.js";import{b as Se,f as Y,g as F,h as $,i as de,j as me,k as G}from"./chunk-O3SEHAH6.js";import{a as d}from"./chunk-VDGTIJCY.js";import{a as O,b as v,d as te,e as b,g as y}from"./chunk-LPN4U2BK.js";import{c as oe,h as k,i as w,p as re,q as V,r as ne,t as D}from"./chunk-42YBEASB.js";import{d as H,f as C,g as R,l as h,o as N,r as M,s as I,u as L}from"./chunk-EAOIXHPH.js";import{a as ae}from"./chunk-3WPPI42S.js";import{a as z,b as m,c as le}from"./chunk-JLI2AG2N.js";import{a as S,b as se}from"./chunk-775AJ4S7.js";import{p as W,r as Z,s as ee,x as X}from"./chunk-BCTQG4KA.js";import{Na as ie}from"./chunk-WKA4CGUZ.js";import{Fb as U,Jc as K,Kb as p,Lb as c,Mb as u,Xb as J,Zb as P,a as j,cb as l,ja as r,na as _,nb as g,qc as f,rc as T,sb as q,zb as n}from"./chunk-24HULRAT.js";function Le(s,o){if(s&1&&u(0,"sz-ui-form-field-select",3),s&2){let E=P();n("source",E.units)("config",E.unitSelectConfig);}}function Oe(s,o){if(s&1&&u(0,"sz-ui-form-field-select",4),s&2){let E=P();n("source",E.testTypeResultOptions)("config",E.resultOptionSelectConfig);}}function ve(s,o){s&1&&u(0,"sz-ui-form-field-input-number",5);}var ge=(()=>{let o=class o extends Y{constructor(){let e=r(O);super(e),this.fb=r(I),this.mlabService=r(d),this.data=r(v),this.referenceValues=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.resultOptionSelectConfig={optionValueFn:t=>t.nameEn},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:t=>t.referenceGroup.nameEn,optionValueFn:t=>t,optionSelectedFn:t=>{t&&this.referenceValueSelected(t);}},this.unitSelectConfig={autoSelect:!0};let i=this.fb;this.dialog=e,this.form=i.group({referenceValue:[null,[]],value:[null,[H.required]],unitId:[null,[]],note:[null,[H.maxLength(4096)]]}),this.getReferenceValues();}isQuantitative(e){return e===Te.Quantitative;}getReferenceValues(){this.mlabService.referenceValues.getAllItems({filters:X.create().equal("testTypeId",this.data.test.testTypeId).filters()}).pipe(k(this.indicator),w(this.alert)).subscribe(e=>{this.referenceValues=e;});}referenceValueSelected(e){this.units=[],e.unitId&&e.unit&&(this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:X.create().equal("toUnitId",e.unitId).filters()}).subscribe(i=>{this.units.push(...i.map(t=>t.fromUnit));}),this.form.patchValue({unitId:e.unitId}));}submit(){if(!this.IsValid())return;let e=this.form.value;if(typeof e.value=="number"){let i=e.value,t=e.referenceValue;if(t){if(t.minValue&&i<t.minValue){this.form.controls.value.setErrors({incorrect:!0});return;}if(t.maxValue&&i>t.maxValue){this.form.controls.value.setErrors({incorrect:!0});return;}}}this.mlabService.tests.updateResult(this.data.test.id,{value:e.value.toString(),referenceValueId:e.referenceValue.id,unitId:e.unitId,note:e.note}).pipe(k(this.indicator),w(this.alert)).subscribe(i=>{this.dialog.close(i);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[f([d]),g,T],decls:9,vars:9,consts:()=>{let e;e="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let i;i="\u0648\u0627\u062D\u062F\u0629";let t;t="\u0642\u064A\u0645\u0629";let B;B="\u0642\u064A\u0645\u0629";let Q;return Q="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValue","label",e,3,"source","config"],["formControlName","unitId","label",i,3,"source","config"],["formControlName","value","label",t,3,"source","config"],["formControlName","value","label",B],["formControlName","note","label",Q],[3,"actions"]];},template:function(i,t){i&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2),q(4,Le,1,2,"sz-ui-form-field-select",3)(5,Oe,1,2,"sz-ui-form-field-select",4)(6,ve,1,0,"sz-ui-form-field-input-number",5),u(7,"sz-ui-form-field-textarea",6),c()(),u(8,"sz-ui-dialog-actions",7)),i&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),n("formGroup",t.form),l(),n("source",t.referenceValues)("config",t.referenceValueSelectConfig),l(),U(t.units.length>0?4:-1),l(),U(t.isQuantitative(t.data.test.testType.testResultType)?6:5),l(3),n("actions",t.actions));},dependencies:[L,h,C,R,N,M,y,b,G,F,$,D,re,ne,V],encapsulation:2});let s=o;return s;})();var Ce=(()=>{let o=class o extends Y{constructor(){let e=r(O);super(e),this.mlabService=r(d),this.fb=r(I),this.data=r(v),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.subscriptions=new j();let i=this.fb;this.dialog=e;let t=this.data;this.form=i.group({note:[t?.note,[]],referenceGroupId:[t?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[f([d]),g,T],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let i;return i="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],["formControlName","note","label",i],[3,"actions"]];},template:function(i,t){i&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input-text",3),c()(),u(5,"sz-ui-dialog-actions",4)),i&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),n("formGroup",t.form),l(),n("source",t.referenceGroups),l(2),n("actions",t.actions));},dependencies:[L,h,C,R,N,M,y,b,G,F,$,D,oe,V],encapsulation:2});let s=o;return s;})();var Tt=(()=>{let o=class o{constructor(){this.route=r(W),this.router=r(Z),this.dialog=r(te),this.locale=r(K),this.mlabService=r(d),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new pe(["test.testType.nameEn","-testId"]),this.card={header:{title:S.tests}},this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.testStatus").setValueGetter(e=>Ee(e.test.testStatus)).setValueTooltip(e=>se(e.test.testStatus)),a.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/${ae.Analyses}/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.nameEn").setHeaderName(S.reference_group).setVisible(!1),a.string("note").setVisible(!1),a.string("test.resultValue").setHeaderName(S.result).setStacked([a.string("test.resultNote").setValueClassFontSmall()]),a.string("test.resultStatus").setHeaderName(S.status).setStyleSmall().setResponsive(!0),a.string("test.referenceValue").setHeaderName(S.reference_value).setResponsive(!0).setValueGetter(e=>e.test.referenceValue),a.string("test.resultUnit.name").setHeaderName(S.unit).setResponsive(!0).setStyleSmall().setValueGetter(e=>e.test.resultUnit?.symbol),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(le.default([m.default().setTooltip(S.result).setIcon(z.post_add).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.Created),m.default().setTooltip(S.apporve).setIcon(z.assignment_turned_in).setClickFn(this.openAnalysisTestApproveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.ResultGenerated),m.menu([m.default().setTooltip(S.result).setIcon(z.post_add).setTitle(S.result).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openDeleteComponent.bind(this))])])).clearClass().setClassEnd());}ngOnInit(){this.get();}openAnalysisTestResultSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(i=>{i&&(e?(e.test=i,this.dataSource.addOrUpdateItem(e)):this.get());});}openAnalysisTestApproveComponent(e){this.dialog.open(de,{data:{message:S.approve_test_result,task$:this.mlabService.tests.updateResultApproval(e?.test.id,{isApproved:!0})}}).afterClosed().subscribe(i=>{i&&(e?(e.test=i,this.dataSource.addOrUpdateItem(e)):this.get());});}openSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openDeleteComponent(e){this.dialog.open(me,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(ce(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[f([d]),T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(i,t){i&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),J("update",function(){return t.get();}),c()()),i&2&&(n("card",t.card),l(),n("dataSource",t.dataSource));},dependencies:[ee,fe,_e,ie,ue],encapsulation:2});let s=o;return s;})();export{Tt as a};/**i18n:76846f7c9090d125bd4d2e80ae7e8a98a8671378b0e62a51a8487f058f196299*/