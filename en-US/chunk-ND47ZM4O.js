import{a as le}from"./chunk-AC4T5S7U.js";import{e as x,f as Te}from"./chunk-734BEVF6.js";import{a as fe}from"./chunk-XTZGDGFZ.js";import{d as _e,e as a,g as me,i as pe,j as ce}from"./chunk-CAFAE33Z.js";import{b as Se,f as Y,g as F,h as $,i as ue,j as de,k as G}from"./chunk-Z2ZUJRKU.js";import{a as d}from"./chunk-6GM4JCQY.js";import{a as v,b as y,d as ee,e as b,g as D}from"./chunk-QI2VJ3F3.js";import{c as ie,h as k,i as w,q as V,r as se,t as ne}from"./chunk-2WR3J7DZ.js";import{d as H,f as R,g as h,l as N,o as M,r as I,s as L,u as O}from"./chunk-QSQP3PNI.js";import{a as re}from"./chunk-M4VTSSLA.js";import{a as z,b as _,c as ae}from"./chunk-E3F62UZG.js";import{a as u,b as oe}from"./chunk-FENOVBAP.js";import{p as K,r as W,s as Z,x as X}from"./chunk-73EUG6I6.js";import{Na as te}from"./chunk-3TPLYAOD.js";import{Fb as U,Jc as J,Kb as c,Lb as f,Mb as S,Xb as q,Zb as P,a as j,cb as l,ja as n,na as p,nb as g,qc as T,rc as E,sb as B,zb as r}from"./chunk-4PLW75EI.js";function Me(s,o){if(s&1&&S(0,"sz-ui-form-field-select",2),s&2){let A=P();r("source",A.testTypeResultOptions)("config",A.resultOptionSelectConfig);}}function Ie(s,o){s&1&&S(0,"sz-ui-form-field-input-number",3);}function Le(s,o){if(s&1&&S(0,"sz-ui-form-field-select",5),s&2){let A=P();r("source",A.units)("config",A.unitSelectConfig);}}var Ae=(()=>{let o=class o extends Y{constructor(){let e=n(v);super(e),this.fb=n(L),this.mlabService=n(d),this.data=n(y),this.referenceValues=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.resultOptionSelectConfig={optionValueFn:t=>t.nameEn},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:t=>t.referenceGroup.nameEn,optionSelectedFn:(t,m)=>{t&&m&&this.referenceValueSelected(m);}},this.unitSelectConfig={autoSelect:!0};let i=this.fb;this.dialog=e,this.form=i.group({referenceValueId:[null,[]],value:[null,[H.required]],unitId:[null,[]],note:[null,[H.maxLength(4096)]]}),this.getReferenceValues();}isQuantitative(e){return e===fe.Quantitative;}getReferenceValues(){this.mlabService.referenceValues.getAllItems({filters:X.create().equal("testTypeId",this.data.test.testTypeId).filters()}).pipe(k(this.indicator),w(this.alert)).subscribe(e=>{this.referenceValues=e;});}referenceValueSelected(e){this.units=[],e.unitId&&e.unit&&(this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:X.create().equal("toUnitId",e.unitId).filters()}).subscribe(i=>{this.units.push(...i.map(t=>t.fromUnit));}),this.form.patchValue({unitId:e.unitId}));}submit(){this.IsValid()&&this.mlabService.tests.updateResult(this.data.test.id,this.form.value).pipe(k(this.indicator),w(this.alert)).subscribe(e=>{this.dialog.close(e);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=p({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[T([d]),g,E],decls:9,vars:9,consts:()=>{let e;e="Value";let i;i="Value";let t;t="Reference Value";let m;m="Unit";let Q;return Q="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e,3,"source","config"],["formControlName","value","label",i],["formControlName","referenceValueId","label",t,3,"source","config"],["formControlName","unitId","label",m,3,"source","config"],["formControlName","note","label",Q],[3,"actions"]];},template:function(i,t){i&1&&(S(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),B(3,Me,1,2,"sz-ui-form-field-select",2)(4,Ie,1,0,"sz-ui-form-field-input-number",3),S(5,"sz-ui-form-field-select",4),B(6,Le,1,2,"sz-ui-form-field-select",5),S(7,"sz-ui-form-field-textarea",6),f()(),S(8,"sz-ui-dialog-actions",7)),i&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(),U(t.isQuantitative(t.data.test.testType.testResultType)?4:3),l(2),r("source",t.referenceValues)("config",t.referenceValueSelectConfig),l(),U(t.units.length>0?6:-1),l(2),r("actions",t.actions));},dependencies:[O,N,R,h,M,I,D,b,G,F,$,se,V],encapsulation:2});let s=o;return s;})();var Ce=(()=>{let o=class o extends Y{constructor(){let e=n(v);super(e),this.mlabService=n(d),this.fb=n(L),this.data=n(y),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.subscriptions=new j();let i=this.fb;this.dialog=e;let t=this.data;this.form=i.group({note:[t?.note,[]],referenceGroupId:[t?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=p({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[T([d]),g,E],decls:6,vars:6,consts:()=>{let e;e="Reference Group";let i;return i="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],["formControlName","note","label",i],[3,"actions"]];},template:function(i,t){i&1&&(S(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input-text",3),f()(),S(5,"sz-ui-dialog-actions",4)),i&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(),r("source",t.referenceGroups),l(2),r("actions",t.actions));},dependencies:[O,N,R,h,M,I,D,b,G,F,$,ne,ie,V],encapsulation:2});let s=o;return s;})();var ct=(()=>{let o=class o{constructor(){this.route=n(K),this.router=n(W),this.dialog=n(ee),this.locale=n(J),this.mlabService=n(d),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new me(["test.testType.nameEn","-testId"]),this.card={header:{title:u.tests}},this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.testStatus").setValueGetter(e=>Te(e.test.testStatus)).setValueTooltip(e=>oe(e.test.testStatus)),a.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/${re.Analyses}/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.nameEn").setHeaderName(u.reference_group).setVisible(!1),a.string("note").setVisible(!1),a.string("test.resultValue").setHeaderName(u.result).setStacked([a.string("test.resultNote").setValueClassFontSmall()]),a.string("test.resultStatus").setHeaderName(u.status).setStyleSmall().setResponsive(!0),a.string("test.referenceValue").setHeaderName(u.reference_value).setResponsive(!0).setValueGetter(e=>e.test.referenceValue),a.string("test.resultUnit.name").setHeaderName(u.unit).setResponsive(!0).setStyleSmall().setValueGetter(e=>e.test.resultUnit?.symbol),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(ae.default([_.default().setTooltip(u.result).setIcon(z.post_add).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.Created),_.default().setTooltip(u.apporve).setIcon(z.assignment_turned_in).setClickFn(this.openAnalysisTestApproveComponent.bind(this)).setVisible(e=>e.test.testStatus===x.ResultGenerated),_.menu([_.default().setTooltip(u.result).setIcon(z.post_add).setTitle(u.result).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),_.edit(this.openSaveComponent.bind(this)),_.divider(),_.delete(this.openDeleteComponent.bind(this))])])).clearClass().setClassEnd());}ngOnInit(){this.get();}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ae,{data:e}).afterClosed().subscribe(i=>{i&&(e?(e.test=i,this.dataSource.addOrUpdateItem(e)):this.get());});}openAnalysisTestApproveComponent(e){this.dialog.open(ue,{data:{message:u.approve_test_result,task$:this.mlabService.tests.updateResultApproval(e?.test.id,{isApproved:!0})}}).afterClosed().subscribe(i=>{i&&(e?(e.test=i,this.dataSource.addOrUpdateItem(e)):this.get());});}openSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openDeleteComponent(e){this.dialog.open(de,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=p({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[T([d]),E],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(i,t){i&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),q("update",function(){return t.get();}),f()()),i&2&&(r("card",t.card),l(),r("dataSource",t.dataSource));},dependencies:[Z,ce,_e,te,le],encapsulation:2});let s=o;return s;})();export{ct as a};/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/