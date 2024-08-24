import{c as Ae}from"./chunk-QODWAO26.js";import{a as _e}from"./chunk-EYOAPD5J.js";import{a as Ee}from"./chunk-NJ4BVC2L.js";import{a as u,c as pe,e as ce,i as fe,j as Te}from"./chunk-SBT2HQEK.js";import{a as m}from"./chunk-IUJYLG7X.js";import{b as de,f as $,g as F,h as U,j as me,k as P}from"./chunk-CA22MQET.js";import{e as ue,j as f,k as Se}from"./chunk-PFHXPQGV.js";import{a as v,b as D,d as ie,e as Y,g as z}from"./chunk-5PZUP35D.js";import{c as G,h as H,i as j,r as B,s as ae,t as le}from"./chunk-2W3NGOE3.js";import{b as se,c as ne}from"./chunk-SESM2AVP.js";import{d as M,f as N,g as L,l as h,n as O,q as y,r as V,u as b}from"./chunk-DVVRYZHF.js";import{Y as p,Z as re,t as X}from"./chunk-UYLGN5KQ.js";import{a as x,c as ee,e as te}from"./chunk-66ZH2AKO.js";import{la as oe}from"./chunk-U3QD6NNV.js";import{Dc as Z,Fa as w,Fb as J,Kb as A,Lb as R,Mb as d,Xb as K,Zb as W,a as q,bb as l,cb as _,ja as T,na as E,nc as C,oc as I,qb as g,vb as Q,zb as r}from"./chunk-WVA7UUYP.js";import{a as k}from"./chunk-QRHOBZKE.js";function ye(s,o){if(s&1&&d(0,"sz-ui-form-field-select",2),s&2){let Ce=W();r("source",Ce.testTypeResultOptions);}}function Ve(s,o){s&1&&d(0,"sz-ui-form-field-input",3),s&2&&r("type","number");}var Ie=(()=>{let o=class o extends ${constructor(e,t,i,a){super(t),this.fb=e,this.dialog=t,this.mlabService=i,this.data=a,this.referenceValues=[],this.referenceValueRules=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.referenceValueRuleSelectConfig={autoSelect:!0,optionContentFn:n=>n.referenceGroup.nameEn,optionsFetchedFn:n=>{if(n.length===0)return;let S=n.find(c=>c.referenceGroupId===this.data.test.referenceGroupId);S&&this.form.controls.referenceValueRuleId.setValue(S.id);}},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:n=>n.testType.nameEn,optionSelectedFn:n=>{n&&this.mlabService.referenceValues.rules.getAllItems(n,{orderBy:["referenceGroup.nameEn"]}).subscribe(S=>{this.referenceValueRules=S;});}},this.unitSelectConfig={},this.form=e.group({referenceValueId:[null,[]],referenceValueRuleId:[null,[]],inputValue:[null,a.test.testType.hasResultOptions?[]:[M.required]],optionId:[null,a.test.testType.hasResultOptions?[M.required]:[]],unitId:[null,[]],note:[null,[M.maxLength(4096)]]}),this.mlabService.laboratories.testTypes.getItems(this.data.laboratoryId,k({filters:X.create().equal("testTypeId",this.data.test.testTypeId).filters()},ne.minimal())).pipe(H(this.indicator),j(this.alert)).subscribe(n=>{if(!n||n.length===0){this.alert.set(se.error("Test type not found"));return;}let S=n[0].referenceValue;if(!S){this.form.controls.referenceValueId.disable(),this.form.controls.referenceValueRuleId.disable(),this.form.controls.unitId.disable();return;}this.updateReferenceValue(S);});}updateReferenceValue(e){this.referenceValues=[e],e.unitId&&e.unit&&(this.form.patchValue({unitId:e.unitId}),this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:X.create().equal("toUnitId",e.unitId).filters()}).subscribe(t=>{this.units.push(...t.map(i=>i.fromUnit));}));}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.test.id,this.form.value).pipe(H(this.indicator),j(this.alert)).subscribe(e=>{this.dialog.close(e);});}};o.ɵfac=function(t){return new(t||o)(_(V),_(v),_(m),_(D));},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[C([m]),g,I],decls:10,vars:12,consts:()=>{let e;e="\u0642\u064A\u0645\u0629";let t;t="\u0642\u064A\u0645\u0629";let i;i="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let a;a="\u0627\u0644\u0642\u0627\u0639\u062F\u0629";let n;n="\u0648\u0627\u062D\u062F\u0629";let S;return S="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","optionId","label",e,3,"source"],["formControlName","inputValue","label",t,3,"type"],["formControlName","referenceValueId","label",i,3,"source","config"],["formControlName","referenceValueRuleId","label",a,3,"source","config"],["formControlName","unitId","label",n,3,"source","config"],["formControlName","note","label",S],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),A(1,"mat-dialog-content")(2,"form",1),Q(3,ye,1,1,"sz-ui-form-field-select",2)(4,Ve,1,1,"sz-ui-form-field-input",3),d(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-textarea",7),R()(),d(9,"sz-ui-dialog-actions",8)),t&2&&(r("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),r("formGroup",i.form),l(),J(i.data.test.testType.hasResultOptions?3:4),l(2),r("source",i.referenceValues)("config",i.referenceValueSelectConfig),l(),r("source",i.referenceValueRules)("config",i.referenceValueRuleSelectConfig),l(),r("source",i.units)("config",i.unitSelectConfig),l(2),r("actions",i.actions));},dependencies:[b,h,N,L,O,y,z,Y,P,F,U,G,ae,B],encapsulation:2});let s=o;return s;})();var ge=(()=>{let o=class o extends ${constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testGroupSelectConfig={emptyOption:!0},this.subscriptions=new q(),this.form=t.group({testGroupId:[a?.testGroupId,[]],note:[a?.note,[]],referenceGroupId:[a?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(_(m),_(V),_(v),_(D));},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[g,I],decls:7,vars:8,consts:()=>{let e;e="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let i;return i="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","config"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","note","label",i],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),A(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),R()(),d(6,"sz-ui-dialog-actions",5)),t&2&&(r("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),r("formGroup",i.form),l(),r("source",i.testGroups)("config",i.testGroupSelectConfig),l(),r("source",i.referenceGroups),l(2),r("actions",i.actions));},dependencies:[b,h,N,L,O,y,z,Y,P,F,U,le,G,B],encapsulation:2});let s=o;return s;})();var Et=(()=>{let o=class o{constructor(){this.route=T(x),this.router=T(ee),this.dialog=T(ie),this.locale=T(Z),this.mlabService=T(m),this.analysis=w.required(),this.dataSource=new pe(["test.testType.nameEn","-testId"]),this.card={header:{title:p.tests},menu:Se.more([f.add(()=>this.openAnalysisTestTypeAddComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.icon("test.state").setValueGetter(e=>Ae(e.test.status)).setValueTooltip(e=>re(e.test.status)),u.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([u.string("test.laboratory.name").setValueClassFontSmall()]),u.string("test.referenceGroup.nameEn").setHeaderName(p.reference_group).setVisible(!1),u.string("note").setVisible(!1),u.string("_result").setHeaderName(p.result).setValueGetter(e=>this.getTestResultValue(e)).setStacked([u.string("test.result.note").setValueClassFontSmall()]),u.string("test.referenceValue.name").setHeaderName(p.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([f.default().setTitle(p.result).setIcon(ue.science).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),f.divider(),f.edit(this.openSaveComponent.bind(this)),f.divider(),f.delete(this.openDeleteComponent.bind(this))])),this.dataSource.groupDefs={key:"testGroupId",name:p.test_group,dataGetter:e=>e.testGroup,columnDefs:[u.string("name").setValueGetter(e=>e?.name??p.single).setValueClassFontBold()]};}ngOnInit(){this.get();}getTestResultValue(e){let t=e.test.result;return t?t.option?t.option.nameEn:t.value?t.value:"":"";}getTestReferenceValue(e){let t=e.test.result;return!t||!t.referenceValue||!t.referenceValueRule?"":e.test.testType.hasResultOptions?t.referenceValueRule?.testTypeResultOption?.nameEn:t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(Ee,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ie,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(me,{data:de.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(ce(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[C([m]),I],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(A(0,"sz-ui-card",0)(1,"sz-ui-table",1),K("update",function(){return i.get();}),R()()),t&2&&(r("card",i.card),l(),r("dataSource",i.dataSource));},dependencies:[te,Te,fe,oe,_e],encapsulation:2});let s=o;return s;})();export{Et as a};/**i18n:c9e15842f10b1052d55bdcedea67c6fd1ddab180b3eed8257f2e03ab0ad2f031*/