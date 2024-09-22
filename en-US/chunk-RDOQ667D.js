import{c as Te}from"./chunk-MPVLAJ46.js";import{a as ue}from"./chunk-F7YMPHDP.js";import{a as fe}from"./chunk-2TPB4C6D.js";import{b as de,c as u,e as me,g as pe,h as ce}from"./chunk-BBJAZ6GP.js";import{b as Se,f as F,g as $,h as B,j as _e,k as U}from"./chunk-BQYTVP5O.js";import{a as d}from"./chunk-RAINWFDY.js";import{a as b,b as D,d as ee,e as v,g as Y}from"./chunk-HQFAQEC3.js";import{c as z,h as X,i as H,r as G,s as se,u as ne}from"./chunk-26COPQ6D.js";import{b as oe,c as ie}from"./chunk-4PSVU3RC.js";import{d as I,f as N,g as M,l as h,n as L,q as O,r as y,t as V}from"./chunk-GLZMJYJP.js";import{a as ae,b as p,c as le}from"./chunk-QOXR5OPH.js";import{a as m,b as re}from"./chunk-GM2OQK6E.js";import{p as W,r as Z,s as x,x as P}from"./chunk-T4KI57OL.js";import{Ma as te}from"./chunk-UEBH5A2M.js";import{Cc as K,Eb as j,Jb as f,Kb as T,Lb as _,Wb as Q,Yb as J,a as w,bb as l,ja as a,mb as C,mc as E,na as c,nc as A,rb as q,yb as s}from"./chunk-6J2YPVJB.js";import{a as k}from"./chunk-TH7MQ6T4.js";function he(n,i){if(n&1&&_(0,"sz-ui-form-field-select",2),n&2){let ge=J();s("source",ge.testTypeResultOptions);}}function Le(n,i){n&1&&_(0,"sz-ui-form-field-input",3),n&2&&s("type","number");}var Ae=(()=>{let i=class i extends F{constructor(){let e=a(b);super(e),this.fb=a(y),this.mlabService=a(d),this.data=a(D),this.referenceValues=[],this.referenceValueRules=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.referenceValueRuleSelectConfig={autoSelect:!0,optionContentFn:r=>r.referenceGroup.nameEn,optionsFetchedFn:r=>{if(r.length===0)return;let S=r.find(g=>g.referenceGroupId===this.data.test.referenceGroupId);S&&this.form.controls.referenceValueRuleId.setValue(S.id);}},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:r=>r.testType.nameEn,optionSelectedFn:r=>{r&&this.mlabService.referenceValues.rules.getAllItems(r,{orderBy:["referenceGroup.nameEn"]}).subscribe(S=>{this.referenceValueRules=S;});}},this.unitSelectConfig={};let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({referenceValueId:[null,[]],referenceValueRuleId:[null,[]],inputValue:[null,o.test.testType.hasResultOptions?[]:[I.required]],optionId:[null,o.test.testType.hasResultOptions?[I.required]:[]],unitId:[null,[]],note:[null,[I.maxLength(4096)]]}),this.mlabService.laboratories.testTypes.getItems(this.data.laboratoryId,k({filters:P.create().equal("testTypeId",this.data.test.testTypeId).filters()},ie.minimal())).pipe(X(this.indicator),H(this.alert)).subscribe(r=>{if(!r||r.length===0){this.alert.set(oe.error("Test type not found"));return;}let S=r[0].referenceValue;if(!S){this.form.controls.referenceValueId.disable(),this.form.controls.referenceValueRuleId.disable(),this.form.controls.unitId.disable();return;}this.updateReferenceValue(S);});}updateReferenceValue(e){this.referenceValues=[e],e.unitId&&e.unit&&(this.form.patchValue({unitId:e.unitId}),this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:P.create().equal("toUnitId",e.unitId).filters()}).subscribe(t=>{this.units.push(...t.map(o=>o.fromUnit));}));}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.test.id,this.form.value).pipe(X(this.indicator),H(this.alert)).subscribe(e=>{this.dialog.close(e);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[E([d]),C,A],decls:10,vars:12,consts:()=>{let e;e="Value";let t;t="Value";let o;o="Reference Value";let r;r="Rule";let S;S="Unit";let g;return g="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","optionId","label",e,3,"source"],["formControlName","inputValue","label",t,3,"type"],["formControlName","referenceValueId","label",o,3,"source","config"],["formControlName","referenceValueRuleId","label",r,3,"source","config"],["formControlName","unitId","label",S,3,"source","config"],["formControlName","note","label",g],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1),q(3,he,1,1,"sz-ui-form-field-select",2)(4,Le,1,1,"sz-ui-form-field-input",3),_(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-textarea",7),T()(),_(9,"sz-ui-dialog-actions",8)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(),j(o.data.test.testType.hasResultOptions?3:4),l(2),s("source",o.referenceValues)("config",o.referenceValueSelectConfig),l(),s("source",o.referenceValueRules)("config",o.referenceValueRuleSelectConfig),l(),s("source",o.units)("config",o.unitSelectConfig),l(2),s("actions",o.actions));},dependencies:[V,h,N,M,L,O,Y,v,U,$,B,z,se,G],encapsulation:2});let n=i;return n;})();var Re=(()=>{let i=class i extends F{constructor(){let e=a(b);super(e),this.mlabService=a(d),this.fb=a(y),this.data=a(D),this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testGroupSelectConfig={emptyOption:!0},this.subscriptions=new w();let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({testGroupId:[o?.testGroupId,[]],note:[o?.note,[]],referenceGroupId:[o?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[E([d]),C,A],decls:7,vars:8,consts:()=>{let e;e="Test Group";let t;t="Reference Group";let o;return o="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","config"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","note","label",o],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),T()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(),s("source",o.testGroups)("config",o.testGroupSelectConfig),l(),s("source",o.referenceGroups),l(2),s("actions",o.actions));},dependencies:[V,h,N,M,L,O,Y,v,U,$,B,ne,z,G],encapsulation:2});let n=i;return n;})();var pt=(()=>{let i=class i{constructor(){this.route=a(W),this.router=a(Z),this.dialog=a(ee),this.locale=a(K),this.mlabService=a(d),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new me(["test.testType.nameEn","-testId"]),this.card={header:{title:m.tests},menu:le.more([p.add(()=>this.openAnalysisTestTypeAddComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.icon("test.testStatus").setValueGetter(e=>Te(e.test.testStatus)).setValueTooltip(e=>re(e.test.testStatus)),u.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([u.string("test.laboratory.name").setValueClassFontSmall()]),u.string("test.referenceGroup.nameEn").setHeaderName(m.reference_group).setVisible(!1),u.string("note").setVisible(!1),u.string("_result").setHeaderName(m.result).setValueGetter(e=>this.getTestResultValue(e)).setStacked([u.string("test.result.note").setValueClassFontSmall()]),u.string("test.referenceValue.name").setHeaderName(m.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([p.default().setTitle(m.result).setIcon(ae.science).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),p.divider(),p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openDeleteComponent.bind(this))])),this.dataSource.groupDefs={key:"testGroupId",name:m.test_group,dataGetter:e=>e.testGroup,columnDefs:[u.string("name").setValueGetter(e=>e?.name??m.single).setValueClassFontBold()]};}ngOnInit(){this.get();}getTestResultValue(e){let t=e.test.result;return t?t.option?t.option.nameEn:t.value?t.value:"":"";}getTestReferenceValue(e){let t=e.test.result;return!t||!t.referenceValue||!t.referenceValueRule?"":e.test.testType.hasResultOptions?t.referenceValueRule?.testTypeResultOption?.nameEn:t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(fe,{data:this.analysis.laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis.id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ae,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(_e,{data:Se.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[E([d]),A],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(f(0,"sz-ui-card",0)(1,"sz-ui-table",1),Q("update",function(){return o.get();}),T()()),t&2&&(s("card",o.card),l(),s("dataSource",o.dataSource));},dependencies:[x,ce,de,te,ue],encapsulation:2});let n=i;return n;})();export{pt as a};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/