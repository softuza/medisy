import{c as Ae}from"./chunk-JITIZZPB.js";import{a as fe}from"./chunk-VBVKISB2.js";import{a as m,b as de,d as pe,f as me,i as ce,j as Te}from"./chunk-BRAPFLKV.js";import{a as p}from"./chunk-SVTFNF7U.js";import{e as $,f as P,g as U,i as Se,j as X,k as _e}from"./chunk-WN2NFEA2.js";import{e as B,g as ue,h as H}from"./chunk-Q5LDCOCY.js";import{a as z,b as D,d as oe,e as V,g as F}from"./chunk-IAMBMKDI.js";import{c as Y,q as G,s as ae,t as le}from"./chunk-ZA2UB2XH.js";import{c as E}from"./chunk-KVZ22XWW.js";import{c as C,d as re}from"./chunk-LMCANXRL.js";import{d as y,f as M,g as I,k as h,m as N,p as L,q as v,t as b}from"./chunk-KAOE4CKM.js";import{a as ee,c as te,e as ie}from"./chunk-4YTU7KIA.js";import{ia as se,ka as ne}from"./chunk-WG6MZMNK.js";import{Da as k,Db as n,Ea as q,Hc as x,Ib as K,Ma as Q,Nb as l,Ob as _,Pb as d,Tb as W,Zb as Z,_b as c,ac as j,hb as a,ib as u,pa as T,pc as O,qc as A,ta as w,ua as f,ub as g,zb as J}from"./chunk-WLX3OMWV.js";function he(s,o){if(s&1){let R=W();l(0,"sz-ui-form-field-select",6),c("szOptionSelected",function(t){k(R);let i=j();return q(i.testTypeResultOptionChanged(t));}),_();}if(s&2){let R=j();n("source",R.testTypeResultOptions)("szOptionValueFn",R.testTypeResultOptionValueFn);}}function Ne(s,o){s&1&&d(0,"sz-ui-form-field-input",7),s&2&&n("type","number");}var Ce=(()=>{let o=class o extends ${constructor(e,t,i,r){super(t),this.fb=e,this.dialog=t,this.mlabService=i,this.data=r,this.referenceValueRules=this.mlabService.referenceValues.rules.getAll(this.data.referenceValueId,{orderBy:["referenceGroup.name"]}),this.testTypeResultOptions=[],this.testTypeResultOptionValueFn=S=>S,this.referenceValueRuleContentFn=S=>S.referenceGroup.name,this.hasResultOptions=!0,this.form=e.group({value:[null,[y.required]],testTypeResultOption:[null,[]],referenceValueRuleId:[null,[y.required]],note:[null,[y.maxLength(4096)]]}),this.getTestTypeResultOptions();}getTestTypeResultOptions(){this.mlabService.testTypes.resultOptions.getAll(this.data.testTypeId,{orderBy:["name"]}).pipe(E(this.indicator)).subscribe(e=>{e&&(this.testTypeResultOptions=e.items,this.hasResultOptions=this.testTypeResultOptions.length>0);});}testTypeResultOptionChanged(e){this.form.controls.value.setValue(e.value);}referenceValueRulesChanged(e){if(e.length===0)return;let t=e.find(i=>i.referenceGroupId===this.data.referenceGroupId);t&&this.form.controls.referenceValueRuleId.setValue(t.id);}submit(){this.IsValid()&&this.mlabService.tests.results.create(this.data.id,{value:this.form.value.value,testTypeResultOptionId:this.form.value.testTypeResultOption.id,referenceValueRuleId:this.form.value.referenceValueRuleId,note:this.form.value.note}).pipe(E(this.indicator)).subscribe(()=>{this.dialog.close();});}};o.ɵfac=function(t){return new(t||o)(u(v),u(z),u(p),u(D));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-analysis-test-result-save"]],standalone:!0,features:[O([p]),g,A],decls:8,vars:8,consts:()=>{let e;e="Value";let t;t="Rule";let i;i="Note";let r;return r="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeResultOption","label",e,3,"source","szOptionValueFn"],["formControlName","referenceValueRuleId","label",t,3,"szOptionsFetched","source","szOptionContentFn"],["formControlName","note","label",i],[3,"actions"],["formControlName","testTypeResultOption","label",e,3,"szOptionSelected","source","szOptionValueFn"],["formControlName","value","label",r,3,"type"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),J(3,he,1,2,"sz-ui-form-field-select",2)(4,Ne,1,1),l(5,"sz-ui-form-field-select",3),c("szOptionsFetched",function(S){return i.referenceValueRulesChanged(S);}),_(),d(6,"sz-ui-form-field-textarea",4),_()(),d(7,"sz-ui-dialog-actions",5)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),n("formGroup",i.form),a(),K(3,i.hasResultOptions?3:4),a(2),n("source",i.referenceValueRules)("szOptionContentFn",i.referenceValueRuleContentFn),a(2),n("actions",i.actions));},dependencies:[b,h,M,I,N,L,F,V,X,P,U,Y,ae,G],encapsulation:2});let s=o;return s;})();var Re=(()=>{let o=class o extends ${constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[r?.testGroupId,[]],note:[r?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(u(p),u(v),u(z),u(D));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[g,A],decls:6,vars:7,consts:()=>{let e;e="Test Group";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),_()(),d(5,"sz-ui-dialog-actions",4)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),a(2),n("formGroup",i.form),a(),n("source",i.testGroups)("emptyOption",!0),a(2),n("actions",i.actions));},dependencies:[b,h,M,I,N,L,F,V,X,P,U,le,Y,G],encapsulation:2});let s=o;return s;})();var pt=(()=>{let o=class o{constructor(){this.route=T(ee),this.router=T(te),this.dialog=T(oe),this.locale=T(x),this.mlabService=T(p),this.analysis=Q.required(),this.dataSource=new pe(["test.testType.name","-testId"]),this.dataSource.columnDefs.push(m.uuid("id"),m.icon("test.state").setValueGetter(e=>Ae(e.test.state)).setValueTooltip(e=>re(e.test.state)),m.string("test.testType.name").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([m.string("test.laboratory.name").setValueClassFontSmall()]),m.string("test.referenceGroup.name").setName(C.referenceGroup).setVisible(!1),m.string("note").setVisible(!1),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),de.menu([B.item(C.testResult,ue.science,e=>this.openAnalysisTestResultSaveComponent(e.test)),B.divider(),H.edit(e=>this.openSaveComponent(e)),B.divider(),H.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:C.testGroup,nameGetterFn:e=>e.testGroup?.name??C.single};}ngOnInit(){this.get();}openAnalysisTestTypeAddComponent(){this.dialog.open(fe,{data:this.analysis().laboratoryId}).afterClosed().subscribe(e=>{e&&this.mlabService.analyses.tests.create(this.analysis().id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).pipe(E(this.dataSource.indicator)).subscribe(t=>{t&&this.get();});});}openAnalysisTestResultSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(t=>{});}openSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(Se,{data:_e.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis().id,this.dataSource.getQuery()).pipe(E(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:[w.SignalBased,"analysis"]},standalone:!0,features:[O([p]),A],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(l(0,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),l(1,"button",2),c("click",function(){return i.openAnalysisTestTypeAddComponent();}),l(2,"span"),Z(3,0),_()()(),l(4,"sz-ui-table",3),c("update",function(){return i.get();}),_()),t&2&&(n("dataSource",i.dataSource),a(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ie,Te,ce,me,ne,se],encapsulation:2});let s=o;return s;})();export{pt as a};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/