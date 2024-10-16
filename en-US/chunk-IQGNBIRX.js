import{a as Fe}from"./chunk-PSDMDTLK.js";import{a as w}from"./chunk-VO3RIH52.js";import"./chunk-PJ4ZDOCC.js";import{a as De,b as Be,c as ze,d as Ye,e as $e}from"./chunk-U6WTYH5D.js";import{b as m}from"./chunk-AGMBE2XC.js";import{a as y}from"./chunk-GC2YSLN2.js";import{d as W,e as _,g as le,h as Pe,i as J,j as _e}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{b as x,f as q,g as Q,h as H,j as k,k as j}from"./chunk-TDTPOOYH.js";import{a as u}from"./chunk-4TD4QQPD.js";import"./chunk-VU2DRYWU.js";import{a as $,b as F,d as A,e as U,g as G}from"./chunk-QHAXF6DJ.js";import{b as he,c as ae,h as ge,p as Le,q as Ie,r as X,s as se,t as Ve,v as ve}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import{i as Ae}from"./chunk-2VIOUMQX.js";import{d as f,f as v,g as b,k as Re,l as P,o as D,r as B,s as z,u as Y}from"./chunk-4NISFW37.js";import{b as d,c as O}from"./chunk-RY6DPLLN.js";import{a as be}from"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as h,b as ye}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{p as R,r as oe,s as ie,x as re}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import{Na as ne}from"./chunk-PR5SF5XM.js";import{Fb as C,Kb as p,Lb as S,Mb as l,Wb as te,Xb as V,Zb as ee,cb as s,hc as Ce,ja as n,jc as Ne,na as T,nb as I,qc as M,rc as c,sb as g,zb as a}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";function Je(r,o){if(r&1&&l(0,"sz-ui-form-field-select",7),r&2){let Z=ee();a("source",Z.testTypeResultOptions);}}function Ke(r,o){r&1&&(p(0,"div",4),l(1,"sz-ui-form-field-input-number",15)(2,"sz-ui-form-field-input-number",16),S());}function Ze(r,o){r&1&&l(0,"sz-ui-form-field-input-number",12);}function et(r,o){if(r&1&&(g(0,Ke,3,0,"div",4)(1,Ze,1,0,"sz-ui-form-field-input-number",12),p(2,"div",4),l(3,"sz-ui-form-field-input-number",13)(4,"sz-ui-form-field-input-number",14),S()),r&2){let Z=ee();C(Z.isRange()?0:1);}}function tt(r,o){r&1&&l(0,"sz-ui-form-field-input-text",17)(1,"sz-ui-form-field-input-text",18)(2,"sz-ui-form-field-input-text",19);}function ot(r,o){r&1&&l(0,"sz-ui-form-field-input-text",20)(1,"sz-ui-form-field-input-text",21);}var xe=(()=>{let o=class o extends q{constructor(){super(n($)),this.mlabService=n(u),this.fb=n(z),this.data=n(F),this.units=[],this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={autoSelect:!0},this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testTypeResultOptions=[],this.comparisonOperators=[],this.isQuantitative=!1,this.comparisonOperatorSelectConfig={optionSelectedFn:i=>{this.comparisonOperatorSelected(i);}},this.headerMenu=O.default([d.menu([d.add(()=>this.openReferenceGroupSaveComponent()).setTitle(h.reference_group)])]);let e=this.fb,t=this.data;this.form=e.group({description:[t.referenceValue?.description,[f.maxLength(4096)]],testTypeId:[t.testType.id,[f.required]],unitId:[t.referenceValue?.unitId,[]],comparisonOperator:new Re(t.referenceValue?.comparisonOperator??m.Range,[f.required]),referenceGroupId:[t.referenceValue?.referenceGroupId,[f.required]],value:[t.referenceValue?.value,[]],lowerBound:[t.referenceValue?.lowerBound,[]],upperBound:[t.referenceValue?.upperBound,[]],minValue:e.control(t.referenceValue?.minValue,[]),maxValue:e.control(t.referenceValue?.maxValue,[]),testTypeResultOptionId:[t.referenceValue?.testTypeResultOptionId,[]],aboveUpperBoundStatus:[t.referenceValue?.aboveUpperBoundStatus,[]],belowLowerBoundStatus:[t.referenceValue?.belowLowerBoundStatus,[]],withinBoundsStatus:[t.referenceValue?.withinBoundsStatus,[]],fulfilledStatus:[t.referenceValue?.fulfilledStatus,[]],notFulfilledStatus:[t.referenceValue?.notFulfilledStatus,[]]}),this.testTypeSelected(t.testType),this.comparisonOperatorSelected(this.form.value.comparisonOperator);}isNumericResult(){return this.data.testType.testResultType===y.Quantitative;}comparisonOperatorSelected(e){this.form.controls.value.setErrors(null),this.form.controls.lowerBound.setErrors(null),this.form.controls.upperBound.setErrors(null),this.form.controls.testTypeResultOptionId.setErrors(null),e===m.Range?(this.form.controls.value.setValidators([]),this.form.controls.testTypeResultOptionId.setValidators([]),this.form.controls.lowerBound.setValidators([f.required]),this.form.controls.upperBound.setValidators([f.required])):(this.form.controls.lowerBound.setValidators([]),this.form.controls.upperBound.setValidators([]),this.isQuantitative?(this.form.controls.value.setValidators([f.required]),this.form.controls.testTypeResultOptionId.setValidators([])):(this.form.controls.value.setValidators([]),this.form.controls.testTypeResultOptionId.setValidators([f.required])));}testTypeSelected(e){e.unitId&&e.unit?this.getUnits(e.unit):this.units=[],e.testResultType===y.Quantitative?(this.comparisonOperators=[m.Range,m.Equal,m.NotEqual,m.GreaterThan,m.GreaterThanOrEqual,m.LessThan,m.LessThanOrEqual],this.form.patchValue({comparisonOperator:this.data.referenceValue?.comparisonOperator??m.Range})):(this.comparisonOperators=[m.Equal,m.NotEqual],this.form.patchValue({comparisonOperator:this.data.referenceValue?.comparisonOperator??m.Equal})),this.testTypeResultOptions=[],e.testResultType===y.Qualitative&&this.mlabService.testTypes.resultOptions.getAllItems(e.id,{orderBy:["nameEn"]}).pipe(ge(this.indicator)).subscribe(t=>{t&&(this.testTypeResultOptions=t);}),this.isQuantitative=e.testResultType===y.Quantitative;}getUnits(e){this.units=[e],this.form.patchValue({unitId:e?.id}),this.mlabService.unitConverters.getAllItems({filters:re.create().equal("toUnitId",e.id).filters()}).subscribe(t=>{this.units.push(...t.map(i=>i.fromUnit));});}isRange(){return this.form&&this.form.value.comparisonOperator?this.form.value.comparisonOperator===m.Range:!1;}openReferenceGroupSaveComponent(){}submit(){if(!this.IsValid()){console.log(this.form);return;}let e=this.form.value;if(e.minValue){if(e.lowerBound&&e.minValue>e.lowerBound){this.form.controls.minValue.setErrors({incorrect:!0});return;}if(e.value&&typeof e.value=="number"&&e.minValue>e.value){this.form.controls.minValue.setErrors({incorrect:!0});return;}}if(e.maxValue){if(e.upperBound&&e.maxValue<e.upperBound){this.form.controls.maxValue.setErrors({incorrect:!0});return;}if(e.value&&typeof e.value=="number"&&e.maxValue<e.value){this.form.controls.maxValue.setErrors({incorrect:!0});return;}}this.data.referenceValue?this.save(this.mlabService.referenceValues.update(this.data.referenceValue.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[M([u]),I,c],decls:19,vars:14,consts:()=>{let e;e="Reference Group";let t;t="Unit";let i;i="Comparison Operator";let N;N="Value";let L;L="Description";let pe;pe="Status";let Se;Se="Value";let ue;ue="Minimum Value";let de;de="Maximum Value";let Ee;Ee="Lower Bound";let me;me="Upper Bound";let Te;Te="Above Upper Bound";let ce;ce="Below Lower Bound";let fe;fe="Within Bounds";let Oe;Oe="Fulfilled";let Me;return Me="Not Fulfilled",[pe,[3,"title","subtitle","alert","menu"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],[1,"sz-form-row"],["formControlName","unitId","label",t,3,"source","config"],["formControlName","comparisonOperator","label",i,3,"source","localizedValue","config"],["formControlName","testTypeResultOptionId","label",N,3,"source"],[1,"tw-mb-4"],["multi",""],["formControlName","description","label",L],[3,"actions"],["formControlName","value","label",Se],["formControlName","minValue","label",ue],["formControlName","maxValue","label",de],["formControlName","lowerBound","label",Ee],["formControlName","upperBound","label",me],["formControlName","aboveUpperBoundStatus","label",Te],["formControlName","belowLowerBoundStatus","label",ce],["formControlName","withinBoundsStatus","label",fe],["formControlName","fulfilledStatus","label",Oe],["formControlName","notFulfilledStatus","label",Me]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",1),p(1,"mat-dialog-content")(2,"form",2),l(3,"sz-ui-form-field-select",3),p(4,"div",4),l(5,"sz-ui-form-field-select",5)(6,"sz-ui-form-field-select",6),S(),g(7,Je,1,1,"sz-ui-form-field-select",7)(8,et,5,1,"div",4),p(9,"div",8)(10,"mat-accordion",9)(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),te(14,0),S()(),g(15,tt,3,0)(16,ot,2,0),S()()(),l(17,"sz-ui-form-field-textarea",10),S()(),l(18,"sz-ui-dialog-actions",11)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert())("menu",i.headerMenu),s(2),a("formGroup",i.form),s(),a("source",i.referenceGroups),s(2),a("source",i.units)("config",i.unitSelectConfig),s(),a("source",i.comparisonOperators)("localizedValue",!0)("config",i.comparisonOperatorSelectConfig),s(),C(i.isQuantitative?8:7),s(8),C(i.isRange()?15:16),s(3),a("actions",i.actions));},dependencies:[Y,P,v,b,D,B,G,U,Ae,X,$e,Ye,De,Be,ze,j,Q,H,he,ve,ae,Le,Ve,se],encapsulation:2});let r=o;return r;})();var qe=(()=>{let o=class o{constructor(){this.dialog=n(A),this.mlabService=n(u),this.router=n(oe),this.route=n(R),this.testType=this.route.snapshot.data.testType,this.dataSource=new Pe(),this.card={header:{title:h.reference_values},menu:O.default([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("referenceGroup.nameEn").setStacked(_.string("referenceGroup.nameAr").setValueClassFontSmall()),_.string("unit").setValueGetter(e=>e.unit?.symbol),_.enum("comparisonOperator").setValueGetter(e=>ye(e.comparisonOperator)).setResponsive(!0),_.number("_value").setValueGetter(e=>e.testTypeResultOption?e.testTypeResultOption.nameEn:e.value!==null?e.value:`${e.lowerBound} - ${e.upperBound}`).setHeaderSortable(!1),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(O.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReferenceValueDeleteComponent.bind(this))]))),this.dataSource.filtration?.equal("testTypeId",this.testType.id),this.get();}openSaveComponent(e){this.dialog.open(xe,{data:{testType:this.testType,referenceValue:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueDeleteComponent(e){this.dialog.open(k,{data:x.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-reference-values"]],standalone:!0,features:[M([u]),c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),V("update",function(){return i.get();}),S()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[W,w],encapsulation:2});let r=o;return r;})();var Qe=(()=>{let o=class o extends q{constructor(){super(n($)),this.mlabService=n(u),this.fb=n(z),this.data=n(F),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:re.create().equal("isGroup",!1).filters()});let e=this.fb,t=this.data;this.form=e.group({relatedTestTypeId:[t.testTypeRelationship?.relatedTestTypeId,[f.required]],enabled:[t.testTypeRelationship?.enabled??!0]});}submit(){this.IsValid()&&(this.data.testTypeRelationship?this.save(this.mlabService.testTypes.relationships.update(this.data.testTypeId,this.data.testTypeRelationship?.id,this.form.value)):this.save(this.mlabService.testTypes.relationships.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([u]),I,c],decls:7,vars:6,consts:()=>{let e;e="Type";let t;return t="Enabled",[t,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","relatedTestTypeId","label",e,3,"source"],["formControlName","enabled"],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",1),p(1,"mat-dialog-content")(2,"form",2),l(3,"sz-ui-form-field-select",3),p(4,"mat-checkbox",4),te(5,0),S()()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.testTypes),s(3),a("actions",i.actions));},dependencies:[Y,P,v,b,D,B,G,U,X,Ie,j,Q,H,se],encapsulation:2});let r=o;return r;})();var He=(()=>{let o=class o{constructor(){this.dialog=n(A),this.mlabService=n(u),this.route=n(R),this.testType=this.route.snapshot.data.testType,this.dataSource=new le(),this.card={header:{title:h.test_types},menu:O.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("relatedTestType.nameEn"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(O.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeRelationshipDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Qe,{data:{testTypeId:this.testType.id,testTypeRelationship:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeRelationshipDeleteComponent(e){this.dialog.open(k,{data:x.delete(this.mlabService.testTypes.relationships.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.relationships.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.relationships.get(this.testType.id,this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-relationships"]],standalone:!0,features:[c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),V("update",function(){return i.get();}),S()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[ie,ne,_e,W,w],encapsulation:2});let r=o;return r;})();var ke=(()=>{let o=class o extends q{constructor(){super(n($)),this.mlabService=n(u),this.fb=n(z),this.data=n(F);let e=this.fb,t=this.data;this.form=e.group({nameEn:[t.testTypeResultOption?.nameEn,[f.required]],description:[t.testTypeResultOption?.description,[]],abbreviation:[t.testTypeResultOption?.abbreviation,[]],nameAr:[t.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[M([u]),I,c],decls:8,vars:5,consts:()=>{let e;e="English Name";let t;t="Arabic Name";let i;i="Description";let N;return N="Abbreviation",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",e],["formControlName","nameAr","label",t],["formControlName","description","label",i],["formControlName","abbreviation","label",N],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-input-text",3)(5,"sz-ui-form-field-input-text",4)(6,"sz-ui-form-field-input-text",5),S()(),l(7,"sz-ui-dialog-actions",6)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(5),a("actions",i.actions));},dependencies:[Y,P,v,b,D,B,G,U,X,j,Q,H,ae],encapsulation:2});let r=o;return r;})();var je=(()=>{let o=class o{constructor(){this.dialog=n(A),this.mlabService=n(u),this.route=n(R),this.testType=this.route.snapshot.data.testType,this.dataSource=new le(),this.card={header:{title:h.result_options},menu:O.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("nameEn").setStacked(_.string("nameAr").setValueClassFontSmall()),_.string("abbreviation"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(O.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeResultOptionDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ke,{data:{testTypeId:this.testType.id,testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(k,{data:x.delete(this.mlabService.testTypes.resultOptions.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testType.id,this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-result-options"]],standalone:!0,features:[c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),V("update",function(){return i.get();}),S()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[ie,ne,_e,W,w],encapsulation:2});let r=o;return r;})();function rt(r,o){if(r&1&&(p(0,"p"),Ce(1),S()),r&2){let Z=ee();s(),Ne(" ",Z.testType.description,`
`);}}function nt(r,o){r&1&&l(0,"sz-medisy-laboratory-test-type-result-options");}function at(r,o){r&1&&l(0,"sz-medisy-laboratory-test-type-reference-values");}function st(r,o){r&1&&l(0,"sz-medisy-laboratory-test-type-relationships");}var We=(()=>{let o=class o{constructor(){this.dialog=n(A),this.mlabService=n(u),this.route=n(R),this.router=n(oe),this.testType=this.route.snapshot.data.testType,this.appBarConfig={title:this.testType.nameEn,backEnabled:!0},this.isQualitative=this.testType.testResultType===y.Qualitative;}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type"]],standalone:!0,features:[M([]),c],decls:7,vars:6,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testTypeId"]],template:function(t,i){t&1&&(l(0,"sz-ui-app-bar",0),g(1,rt,2,1,"p"),p(2,"div",1),l(3,"sz-medisy-laboratory-test-type-specimen-types",2),g(4,nt,1,0,"sz-medisy-laboratory-test-type-result-options")(5,at,1,0,"sz-medisy-laboratory-test-type-reference-values")(6,st,1,0,"sz-medisy-laboratory-test-type-relationships"),S()),t&2&&(a("config",i.appBarConfig),s(),C(i.testType.description?1:-1),s(2),a("testTypeId",i.testType.id),s(),C(i.isQualitative?4:-1),s(),C(i.testType.isGroup?-1:5),s(),C(i.testType.isGroup?6:-1));},dependencies:[be,Fe,je,qe,He],encapsulation:2});let r=o;return r;})();var ei=[{path:"",component:We},{path:"specimen-types",loadComponent:()=>import("./chunk-J4KH3QTW.js").then(r=>r.TestTypeSpecimenTypesComponent)}];export{ei as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/