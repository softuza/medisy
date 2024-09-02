import{c as Ee}from"./chunk-F6XQL5QN.js";import{a as Se}from"./chunk-TFDJDGG7.js";import{a as Te}from"./chunk-TVBWLVKJ.js";import{d as me,e as u,g as pe,i as fe,j as ce}from"./chunk-AJ53IAOZ.js";import{b as _e,f as B,g as $,h as F,j as de,k as U}from"./chunk-ZQ3WWH5V.js";import{a as m}from"./chunk-QSUEBWY5.js";import{a as b,b as D,d as te,e as v,g as Y}from"./chunk-IVPZHVY6.js";import{c as z,h as X,i as H,r as G,s as ne,t as ae}from"./chunk-SXZECFKA.js";import{b as re,c as se}from"./chunk-PYOUUVMA.js";import{d as I,f as N,g as M,l as L,n as h,q as O,r as y,t as V}from"./chunk-4DSQMHTF.js";import{a as le,b as p,c as ue}from"./chunk-UEBI7D6A.js";import{a as d,b as ie}from"./chunk-TCPYXQGZ.js";import{t as P}from"./chunk-BBLNUGHS.js";import{a as Z,c as x,d as ee}from"./chunk-WMCOMOML.js";import{la as oe}from"./chunk-H2OL5IOU.js";import{Cc as W,Eb as Q,Ia as w,Jb as c,Kb as T,Lb as _,Wb as J,Yb as K,a as q,bb as l,ja as a,mb as g,mc as C,na as f,nc as E,rb as j,yb as s}from"./chunk-6EDHPT3A.js";import{a as k}from"./chunk-NLUW4JS2.js";function he(n,i){if(n&1&&_(0,"sz-ui-form-field-select",2),n&2){let Ce=K();s("source",Ce.testTypeResultOptions);}}function Oe(n,i){n&1&&_(0,"sz-ui-form-field-input",3),n&2&&s("type","number");}var Re=(()=>{let i=class i extends B{constructor(){let e=a(b);super(e),this.fb=a(y),this.mlabService=a(m),this.data=a(D),this.referenceValues=[],this.referenceValueRules=[],this.units=[],this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.test.testTypeId,{orderBy:["nameEn"]}),this.referenceValueRuleSelectConfig={autoSelect:!0,optionContentFn:r=>r.referenceGroup.nameEn,optionsFetchedFn:r=>{if(r.length===0)return;let S=r.find(R=>R.referenceGroupId===this.data.test.referenceGroupId);S&&this.form.controls.referenceValueRuleId.setValue(S.id);}},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:r=>r.testType.nameEn,optionSelectedFn:r=>{r&&this.mlabService.referenceValues.rules.getAllItems(r,{orderBy:["referenceGroup.nameEn"]}).subscribe(S=>{this.referenceValueRules=S;});}},this.unitSelectConfig={};let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({referenceValueId:[null,[]],referenceValueRuleId:[null,[]],inputValue:[null,o.test.testType.hasResultOptions?[]:[I.required]],optionId:[null,o.test.testType.hasResultOptions?[I.required]:[]],unitId:[null,[]],note:[null,[I.maxLength(4096)]]}),this.mlabService.laboratories.testTypes.getItems(this.data.laboratoryId,k({filters:P.create().equal("testTypeId",this.data.test.testTypeId).filters()},se.minimal())).pipe(X(this.indicator),H(this.alert)).subscribe(r=>{if(!r||r.length===0){this.alert.set(re.error("Test type not found"));return;}let S=r[0].referenceValue;if(!S){this.form.controls.referenceValueId.disable(),this.form.controls.referenceValueRuleId.disable(),this.form.controls.unitId.disable();return;}this.updateReferenceValue(S);});}updateReferenceValue(e){this.referenceValues=[e],e.unitId&&e.unit&&(this.form.patchValue({unitId:e.unitId}),this.units=[e.unit],this.mlabService.unitConverters.getAllItems({filters:P.create().equal("toUnitId",e.unitId).filters()}).subscribe(t=>{this.units.push(...t.map(o=>o.fromUnit));}));}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.test.id,this.form.value).pipe(X(this.indicator),H(this.alert)).subscribe(e=>{this.dialog.close(e);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[C([m]),g,E],decls:10,vars:12,consts:()=>{let e;e="\u0642\u064A\u0645\u0629";let t;t="\u0642\u064A\u0645\u0629";let o;o="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let r;r="\u0627\u0644\u0642\u0627\u0639\u062F\u0629";let S;S="\u0648\u0627\u062D\u062F\u0629";let R;return R="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","optionId","label",e,3,"source"],["formControlName","inputValue","label",t,3,"type"],["formControlName","referenceValueId","label",o,3,"source","config"],["formControlName","referenceValueRuleId","label",r,3,"source","config"],["formControlName","unitId","label",S,3,"source","config"],["formControlName","note","label",R],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),j(3,he,1,1,"sz-ui-form-field-select",2)(4,Oe,1,1,"sz-ui-form-field-input",3),_(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-textarea",7),T()(),_(9,"sz-ui-dialog-actions",8)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(),Q(o.data.test.testType.hasResultOptions?3:4),l(2),s("source",o.referenceValues)("config",o.referenceValueSelectConfig),l(),s("source",o.referenceValueRules)("config",o.referenceValueRuleSelectConfig),l(),s("source",o.units)("config",o.unitSelectConfig),l(2),s("actions",o.actions));},dependencies:[V,L,N,M,h,O,Y,v,U,$,F,z,ne,G],encapsulation:2});let n=i;return n;})();var ge=(()=>{let i=class i extends B{constructor(){let e=a(b);super(e),this.mlabService=a(m),this.fb=a(y),this.data=a(D),this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testGroupSelectConfig={emptyOption:!0},this.subscriptions=new q();let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({testGroupId:[o?.testGroupId,[]],note:[o?.note,[]],referenceGroupId:[o?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[g,E],decls:7,vars:8,consts:()=>{let e;e="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let o;return o="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","config"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","note","label",o],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),T()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(),s("source",o.testGroups)("config",o.testGroupSelectConfig),l(),s("source",o.referenceGroups),l(2),s("actions",o.actions));},dependencies:[V,L,N,M,h,O,Y,v,U,$,F,ae,z,G],encapsulation:2});let n=i;return n;})();var ft=(()=>{let i=class i{constructor(){this.route=a(Z),this.router=a(x),this.dialog=a(te),this.locale=a(W),this.mlabService=a(m),this.analysis=w.required(),this.dataSource=new pe(["test.testType.nameEn","-testId"]),this.card={header:{title:d.tests},menu:ue.more([p.add(()=>this.openAnalysisTestTypeAddComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.icon("test.testStatus").setValueGetter(e=>Ee(e.test.testStatus)).setValueTooltip(e=>ie(e.test.testStatus)),u.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([u.string("test.laboratory.name").setValueClassFontSmall()]),u.string("test.referenceGroup.nameEn").setHeaderName(d.reference_group).setVisible(!1),u.string("note").setVisible(!1),u.string("_result").setHeaderName(d.result).setValueGetter(e=>this.getTestResultValue(e)).setStacked([u.string("test.result.note").setValueClassFontSmall()]),u.string("test.referenceValue.name").setHeaderName(d.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([p.default().setTitle(d.result).setIcon(le.science).setClickFn(this.openAnalysisTestResultSaveComponent.bind(this)),p.divider(),p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openDeleteComponent.bind(this))])),this.dataSource.groupDefs={key:"testGroupId",name:d.test_group,dataGetter:e=>e.testGroup,columnDefs:[u.string("name").setValueGetter(e=>e?.name??d.single).setValueClassFontBold()]};}ngOnInit(){this.get();}getTestResultValue(e){let t=e.test.result;return t?t.option?t.option.nameEn:t.value?t.value:"":"";}getTestReferenceValue(e){let t=e.test.result;return!t||!t.referenceValue||!t.referenceValueRule?"":e.test.testType.hasResultOptions?t.referenceValueRule?.testTypeResultOption?.nameEn:t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(Te,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(de,{data:_e.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(fe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[C([m]),E],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),J("update",function(){return o.get();}),T()()),t&2&&(s("card",o.card),l(),s("dataSource",o.dataSource));},dependencies:[ee,ce,me,oe,Se],encapsulation:2});let n=i;return n;})();export{ft as a};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/