import{c as Te}from"./chunk-BTSUYHTV.js";import{a as fe}from"./chunk-6A76JECR.js";import{a as le}from"./chunk-5ANTXZS6.js";import{a as u,b as _e,d as de,e as me,j as pe,k as ce}from"./chunk-ZLSXDCIO.js";import{a as d}from"./chunk-BYRPVQVA.js";import{e as P,f as U,g as X,i as ue,j as H,k as Se}from"./chunk-L2P6WIHR.js";import{e as $,g as se,h as B,j as ae}from"./chunk-WYKVLT3M.js";import{a as v,b as D,d as ee,e as z,g as Y}from"./chunk-M5MMGZV5.js";import{A as ne,e as G,k as oe,x as F,z as re}from"./chunk-4VPW53J2.js";import{c as m,d as ie}from"./chunk-3CUGB5EK.js";import{d as I,f as N,g as O,l as L,n as y,q as h,r as V,u as b}from"./chunk-4BAJQFZN.js";import{t as x}from"./chunk-BTHAOAN7.js";import{a as K,c as W,e as Z}from"./chunk-4ZVO2KE7.js";import{la as te}from"./chunk-UFNJTAPB.js";import{Eb as k,Fa as w,Fc as J,Jb as p,Kb as c,Lb as l,Wb as g,Yb as Q,a as C,bb as a,c as j,cb as _,ja as f,na as T,nc as M,oc as E,qb as R,vb as q,zb as n}from"./chunk-V7MEDU65.js";function Le(r,i){if(r&1&&l(0,"sz-ui-form-field-select",4),r&2){let Re=Q();n("source",Re.testTypeResultOptions);}}function ye(r,i){r&1&&l(0,"sz-ui-form-field-input",5),r&2&&n("type","number");}var Ae=(()=>{let i=class i extends P{constructor(e,t,o,s){super(t),this.fb=e,this.dialog=t,this.mlabService=o,this.data=s,this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.testTypeId,{orderBy:["nameEn"]}),this.referenceValues=this.mlabService.referenceValues.getAll({filters:x.create().equalIf("testTypeId",this.data.testTypeId).filters(),orderBy:["testType.nameEn"]}),this.referenceValueRules=new j(),this.referenceValueRuleContentFn=S=>S.referenceGroup.nameEn,this.referenceValueContentFormat=S=>S.testType.nameEn,this.subscription=new C(),this.form=e.group({referenceValueId:[null,[I.required]],referenceValueRuleId:[null,[I.required]],value:[null,[]],optionId:[null,[]],note:[null,[I.maxLength(4096)]]}),this.subscription.add(this.form.controls.referenceValueId.valueChanges.subscribe(S=>{this.onReferenceValueChanged(S);}));}ngOnDestroy(){this.subscription.unsubscribe();}onReferenceValueChanged(e){e&&(this.referenceValueRules=this.mlabService.referenceValues.rules.getAll(e,{orderBy:["referenceGroup.nameEn"]}));}referenceValueRulesChanged(e){if(e.length===0)return;let t=e.find(o=>o.referenceGroupId===this.data.referenceGroupId);t&&this.form.controls.referenceValueRuleId.setValue(t.id);}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.id,this.form.value).pipe(oe(this.indicator)).subscribe(e=>{this.dialog.close(e);});}};i.ɵfac=function(t){return new(t||i)(_(V),_(v),_(d),_(D));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[M([d]),R,E],decls:9,vars:11,consts:()=>{let e;e="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u0642\u0627\u0639\u062F\u0629";let o;o="\u0642\u064A\u0645\u0629";let s;s="\u0642\u064A\u0645\u0629";let S;return S="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId","label",e,3,"source","szAutoSelect","szOptionContentFn"],["formControlName","referenceValueRuleId","label",t,3,"szOptionsFetched","source","szOptionContentFn"],["formControlName","optionId","label",o,3,"source"],["formControlName","value","label",s,3,"type"],["formControlName","note","label",S],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2),p(4,"sz-ui-form-field-select",3),g("szOptionsFetched",function(S){return o.referenceValueRulesChanged(S);}),c(),q(5,Le,1,1,"sz-ui-form-field-select",4)(6,ye,1,1,"sz-ui-form-field-input",5),l(7,"sz-ui-form-field-textarea",6),c()(),l(8,"sz-ui-dialog-actions",7)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(),n("source",o.referenceValues)("szAutoSelect",!0)("szOptionContentFn",o.referenceValueContentFormat),a(),n("source",o.referenceValueRules)("szOptionContentFn",o.referenceValueRuleContentFn),a(),k(o.data.testType.hasResultOptions?5:6),a(3),n("actions",o.actions));},dependencies:[b,L,N,O,y,h,Y,z,H,U,X,G,re,F],encapsulation:2});let r=i;return r;})();var Ce=(()=>{let i=class i extends P{constructor(e,t,o,s){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=s,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.subscriptions=new C(),this.form=t.group({testGroupId:[s?.testGroupId,[]],note:[s?.note,[]],referenceGroupId:[s?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(_(d),_(V),_(v),_(D));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[R,E],decls:7,vars:8,consts:()=>{let e;e="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0645\u0644\u0627\u062D\u0638\u0629";let o;return o="\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],["formControlName","referenceGroupId","label",o,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-select",4),c()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(),n("source",o.testGroups)("emptyOption",!0),a(2),n("source",o.referenceGroups),a(),n("actions",o.actions));},dependencies:[b,L,N,O,y,h,Y,z,H,U,X,ne,G,F],encapsulation:2});let r=i;return r;})();var ft=(()=>{let i=class i{constructor(){this.route=f(K),this.router=f(W),this.dialog=f(ee),this.locale=f(J),this.mlabService=f(d),this.analysis=w.required(),this.dataSource=new de(["test.testType.nameEn","-testId"]),this.card={title:m.tests,menu:ae.more([B.add(()=>this.openAnalysisTestTypeAddComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.icon("test.state").setValueGetter(e=>Te(e.test.state)).setValueTooltip(e=>ie(e.test.state)),u.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([u.string("test.laboratory.name").setValueClassFontSmall()]),u.string("test.referenceGroup.nameEn").setName(m.reference_group).setVisible(!1),u.string("note").setVisible(!1),u.string("_result").setName(m.result).setValueGetter(e=>this.getTestResultValue(e)),u.string("test.referenceValue.name").setName(m.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),_e.menu([$.item(m.add_result,se.science,e=>this.openAnalysisTestResultSaveComponent(e.test)),$.divider(),B.edit(e=>this.openSaveComponent(e)),$.divider(),B.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:m.test_group,nameGetterFn:e=>e.testGroup?.name??m.single};}ngOnInit(){this.get();}getTestResultValue(e){let t=e.test.result;return t?t.option?t.option.nameEn:t.value?t.value:"":"";}getTestReferenceValue(e){let t=e.test.result;return t?t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"":"";}openAnalysisTestTypeAddComponent(){this.dialog.open(fe,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).subscribe(t=>{t&&this.get();});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ae,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(ue,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(me(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[M([d]),E],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,o){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),g("update",function(){return o.get();}),c()()),t&2&&(n("card",o.card),a(),n("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[Z,ce,pe,te,le],encapsulation:2});let r=i;return r;})();export{ft as a};/**i18n:703a5eca4d6a9dba72aa4758ace25d04110d9b6f3c4c7f41cebe1034cfa0e193*/