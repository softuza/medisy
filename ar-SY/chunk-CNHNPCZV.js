import{c as Ee}from"./chunk-YPZF7YKS.js";import{a as Te}from"./chunk-I4ZUTTN2.js";import{a as ue}from"./chunk-PLILYGN2.js";import{a as S,b as de,d as me,e as pe,j as ce,k as fe}from"./chunk-WSKSU7P3.js";import{a as d}from"./chunk-6VGSXMTA.js";import{e as F,f as $,g as P,i as Se,j as U,k as _e}from"./chunk-76IND4GV.js";import{e as G,g as ae,h as B,j as le}from"./chunk-TIEHGEOE.js";import{a as V,b,d as ee,e as v,g as D}from"./chunk-QCMAXDKX.js";import{e as z,j as oe,k as ie,u as Y,w as ne,x as se}from"./chunk-W6VXAIY6.js";import{c as m,d as re}from"./chunk-AR6ZPEMB.js";import{d as X,f as I,g as M,l as N,n as L,q as O,r as y,u as h}from"./chunk-H6LOKDLY.js";import{t as x}from"./chunk-YNSSO6VZ.js";import{a as K,c as W,e as Z}from"./chunk-7JY5LSGA.js";import{la as te}from"./chunk-TSWXIYWJ.js";import{Eb as k,Fa as j,Fc as J,Jb as T,Kb as E,Lb as u,Wb as q,Yb as Q,a as g,bb as a,c as H,cb as _,ja as c,na as f,nc as C,oc as A,qb as R,vb as w,zb as n}from"./chunk-7IDM2VXI.js";function he(r,i){if(r&1&&u(0,"sz-ui-form-field-select",4),r&2){let Ce=Q();n("source",Ce.testTypeResultOptions);}}function Ve(r,i){r&1&&u(0,"sz-ui-form-field-input",5),r&2&&n("type","number");}var ge=(()=>{let i=class i extends F{constructor(e,t,o,s){super(t),this.fb=e,this.dialog=t,this.mlabService=o,this.data=s,this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.testTypeId,{orderBy:["nameEn"]}),this.referenceValues=this.mlabService.referenceValues.getAll({filters:x.create().equalIf("testTypeId",this.data.testTypeId).filters(),orderBy:["testType.nameEn"]}),this.referenceValueRules=new H(),this.referenceValueRuleSelectConfig={autoSelect:!0,optionContentFn:l=>l.referenceGroup.nameEn,optionsFetchedFn:l=>{if(l.length===0)return;let p=l.find(Ie=>Ie.referenceGroupId===this.data.referenceGroupId);p&&this.form.controls.referenceValueRuleId.setValue(p.id);}},this.referenceValueSelectConfig={autoSelect:!0,optionContentFn:l=>l.testType.nameEn},this.subscription=new g(),this.form=e.group({referenceValueId:[null,[X.required]],referenceValueRuleId:[null,[]],value:[null,[]],optionId:[null,[]],note:[null,[X.maxLength(4096)]]}),this.subscription.add(this.form.controls.referenceValueId.valueChanges.subscribe(l=>{l&&(this.referenceValueRules=this.mlabService.referenceValues.rules.getAll(l,{orderBy:["referenceGroup.nameEn"]}));}));}ngOnDestroy(){this.subscription.unsubscribe();}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.id,this.form.value).pipe(oe(this.indicator),ie(this.alert)).subscribe(e=>{this.dialog.close(e);});}};i.ɵfac=function(t){return new(t||i)(_(y),_(V),_(d),_(b));},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[C([d]),R,A],decls:9,vars:10,consts:()=>{let e;e="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u0642\u0627\u0639\u062F\u0629";let o;o="\u0642\u064A\u0645\u0629";let s;s="\u0642\u064A\u0645\u0629";let l;return l="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId","label",e,3,"source","config"],["formControlName","referenceValueRuleId","label",t,3,"source","config"],["formControlName","optionId","label",o,3,"source"],["formControlName","value","label",s,3,"type"],["formControlName","note","label",l],[3,"actions"]];},template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),T(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),w(5,he,1,1,"sz-ui-form-field-select",4)(6,Ve,1,1,"sz-ui-form-field-input",5),u(7,"sz-ui-form-field-textarea",6),E()(),u(8,"sz-ui-dialog-actions",7)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(),n("source",o.referenceValues)("config",o.referenceValueSelectConfig),a(),n("source",o.referenceValueRules)("config",o.referenceValueRuleSelectConfig),a(),k(o.data.testType.hasResultOptions?5:6),a(3),n("actions",o.actions));},dependencies:[h,N,I,M,L,O,D,v,U,$,P,z,ne,Y],encapsulation:2});let r=i;return r;})();var Re=(()=>{let i=class i extends F{constructor(e,t,o,s){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=s,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testGroupSelectConfig={emptyOption:!0},this.subscriptions=new g(),this.form=t.group({testGroupId:[s?.testGroupId,[]],note:[s?.note,[]],referenceGroupId:[s?.test?.referenceGroupId,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(_(d),_(y),_(V),_(b));},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[R,A],decls:7,vars:8,consts:()=>{let e;e="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0645\u0644\u0627\u062D\u0638\u0629";let o;return o="\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","config"],["formControlName","note","label",t],["formControlName","referenceGroupId","label",o,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),T(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-select",4),E()(),u(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(),n("source",o.testGroups)("config",o.testGroupSelectConfig),a(2),n("source",o.referenceGroups),a(),n("actions",o.actions));},dependencies:[h,N,I,M,L,O,D,v,U,$,P,se,z,Y],encapsulation:2});let r=i;return r;})();var Et=(()=>{let i=class i{constructor(){this.route=c(K),this.router=c(W),this.dialog=c(ee),this.locale=c(J),this.mlabService=c(d),this.analysis=j.required(),this.dataSource=new me(["test.testType.nameEn","-testId"]),this.card={title:m.tests,menu:le.more([B.add(()=>this.openAnalysisTestTypeAddComponent())])},this.dataSource.columnDefs.push(S.uuid("id"),S.icon("test.state").setValueGetter(e=>Ee(e.test.state)).setValueTooltip(e=>re(e.test.state)),S.string("test.testType.nameEn").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([S.string("test.laboratory.name").setValueClassFontSmall()]),S.string("test.referenceGroup.nameEn").setName(m.reference_group).setVisible(!1),S.string("note").setVisible(!1),S.string("_result").setName(m.result).setValueGetter(e=>this.getTestResultValue(e)),S.string("test.referenceValue.name").setName(m.reference_value).setResponsive(!0).setValueGetter(e=>this.getTestReferenceValue(e)),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),de.menu([G.item(m.add_result,ae.science,e=>this.openAnalysisTestResultSaveComponent(e.test)),G.divider(),B.edit(e=>this.openSaveComponent(e)),G.divider(),B.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:m.test_group,nameGetterFn:e=>e.testGroup?.name??m.single};}ngOnInit(){this.get();}getTestResultValue(e){let t=e.test.result;return t?t.option?t.option.nameEn:t.value?t.value:"":"";}getTestReferenceValue(e){let t=e.test.result;return!t||!t.referenceValue||!t.referenceValueRule?"":e.test.testType.hasResultOptions?t.referenceValueRule?.testTypeResultOption?.nameEn:t.referenceValueRule.start&&t.referenceValueRule.end?`${t.referenceValueRule?.start} - ${t.referenceValueRule?.end}`:t.referenceValueRule.value?`${t.referenceValueRule?.value}`:"";}openAnalysisTestTypeAddComponent(){this.dialog.open(Te,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(ge,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(Se,{data:_e.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[C([d]),A],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,o){t&1&&(T(0,"sz-ui-card",0)(1,"sz-ui-table",1),q("update",function(){return o.get();}),E()()),t&2&&(n("card",o.card),a(),n("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[Z,fe,ce,te,ue],encapsulation:2});let r=i;return r;})();export{Et as a};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/