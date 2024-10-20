import{a as qe}from"./chunk-KYSETQIJ.js";import{a as xe}from"./chunk-CEDZ7Y26.js";import{a as H}from"./chunk-5ALZ3CD4.js";import"./chunk-ZO7FW6I4.js";import{a as Fe,b as Ue,c as Ge,d as Xe,e as we}from"./chunk-DXXJJCHR.js";import{b as f}from"./chunk-F4SPET5Z.js";import{a as Z}from"./chunk-6F6YYV5C.js";import{d as j,e as _,g as ie,h as $e,i as k,j as ne}from"./chunk-6UJQEEOG.js";import"./chunk-NCIBCD44.js";import"./chunk-X3IKOYP4.js";import"./chunk-VTEGF3Y7.js";import{c as G,g as X,h as w,i as x,k as q,l as Q}from"./chunk-466VJTKM.js";import{a as u}from"./chunk-3CHAK4ER.js";import"./chunk-2YT4TIIL.js";import{a as B,b as Y,d as N,e as $,g as F}from"./chunk-KRRL7IVD.js";import{b as ve,c as oe,m as ze,n as Be,o as U,p as Se,q as pe,s as ue}from"./chunk-LTGHULWB.js";import{b as de}from"./chunk-5ZDKHU6W.js";import"./chunk-SN72RCND.js";import"./chunk-JHOCZ5YU.js";import{j as Ve}from"./chunk-D3M4DBPV.js";import{d as c,f as I,g as b,k as Pe,l as P,o as V,r as v,s as D,u as z}from"./chunk-74M55ZSL.js";import{b as d,c as C}from"./chunk-KA6PA4V4.js";import{a as Ye}from"./chunk-67A3BINV.js";import"./chunk-OP3OZJ5W.js";import{c as R,d as De}from"./chunk-ULSP7SQP.js";import"./chunk-RQAKYFHA.js";import{p as A,r as le,s as ee,x as _e}from"./chunk-WQ25OTMI.js";import"./chunk-UB2EDVZK.js";import"./chunk-Q7WQRKRE.js";import{Ma as te}from"./chunk-ELYMBAIC.js";import{Eb as h,Jb as S,Kb as p,Lb as l,Vb as se,Wb as L,Yb as ae,bb as s,gc as Ie,ic as be,ja as r,mb as y,mc as M,na as E,nc as m,rb as K,yb as a}from"./chunk-MF5XXDEZ.js";import"./chunk-GKLVXQPO.js";var Qe=(()=>{let o=class o extends X{constructor(){super(r(B)),this.mlabService=r(u),this.fb=r(D),this.data=r(Y);let e=this.fb,t=this.data;this.form=e.group({nameEn:[t.testTypeClinicalCase?.nameEn,c.required],nameAr:[t.testTypeClinicalCase?.nameAr],description:[t.testTypeClinicalCase?.description],purpose:[t.testTypeClinicalCase?.purpose],abbreviation:[t.testTypeClinicalCase?.abbreviation]});}submit(){this.IsValid()&&(this.data.testTypeClinicalCase?this.save(this.mlabService.testTypes.clinicalCases.update(this.data.testTypeId,this.data.testTypeClinicalCase?.id,this.form.value)):this.save(this.mlabService.testTypes.clinicalCases.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-clinical-cases-save"]],standalone:!0,features:[M([u]),y,m],decls:9,vars:5,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let i;i="\u0623\u062E\u062A\u0635\u0627\u0631";let O;O="\u0627\u0644\u0648\u0635\u0641";let g;return g="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",e],["formControlName","nameAr","label",t],["formControlName","abbreviation","label",i],["formControlName","description","label",O],["formControlName","purpose","label",g],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-input-text",3)(5,"sz-ui-form-field-input-text",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),p()(),l(8,"sz-ui-dialog-actions",7)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(6),a("actions",i.actions));},dependencies:[z,P,I,b,V,v,F,$,U,Q,w,x,ue,oe,pe],encapsulation:2});let n=o;return n;})();var je=(()=>{let o=class o{constructor(){this.dialog=r(N),this.mlabService=r(u),this.route=r(A),this.testType=this.route.snapshot.data.testType,this.dataSource=new ie(),this.card={header:{title:R.clinical_cases},menu:C.default([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("nameEn"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(C.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeClinicalCaseDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Qe,{data:{testTypeId:this.testType.id,testTypeClinicalCase:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeClinicalCaseDeleteComponent(e){this.dialog.open(q,{data:G.delete(this.mlabService.testTypes.clinicalCases.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.clinicalCases.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.clinicalCases.get(this.testType.id,this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-clinical-cases"]],standalone:!0,features:[m],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(S(0,"sz-ui-card",0)(1,"sz-ui-table",1),L("update",function(){return i.get();}),p()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[ee,te,ne,j,H],encapsulation:2});let n=o;return n;})();function nt(n,o){if(n&1&&l(0,"sz-ui-form-field-select",8),n&2){let re=ae();a("source",re.testTypeResultOptions);}}function rt(n,o){n&1&&(S(0,"div",5),l(1,"sz-ui-form-field-input-number",16)(2,"sz-ui-form-field-input-number",17),p());}function at(n,o){n&1&&l(0,"sz-ui-form-field-input-number",13);}function st(n,o){if(n&1&&(K(0,rt,3,0,"div",5)(1,at,1,0,"sz-ui-form-field-input-number",13),S(2,"div",5),l(3,"sz-ui-form-field-input-number",14)(4,"sz-ui-form-field-input-number",15),p()),n&2){let re=ae();h(re.isRange()?0:1);}}function lt(n,o){n&1&&l(0,"sz-ui-form-field-input-text",18)(1,"sz-ui-form-field-input-text",19)(2,"sz-ui-form-field-input-text",20);}function _t(n,o){n&1&&l(0,"sz-ui-form-field-input-text",21)(1,"sz-ui-form-field-input-text",22);}var ke=(()=>{let o=class o extends X{constructor(){super(r(B)),this.mlabService=r(u),this.fb=r(D),this.dialog=r(N),this.data=r(Y),this.units=[],this.unitSelectConfig={autoSelect:!0},this.referenceGroups=[],this.testTypeClinicalCases=this.mlabService.testTypes.clinicalCases.getAll(this.data.testType.id,{orderBy:["nameEn"]}),this.testTypeClinicalCaseSelectConfig={emptyOption:!0},this.testTypeResultOptions=[],this.comparisonOperators=[],this.isQuantitative=!1,this.comparisonOperatorSelectConfig={optionSelectedFn:i=>{this.comparisonOperatorSelected(i);}},this.referenceGroupSelectConfig={},this.headerMenu=C.default([d.menu([d.add(()=>this.openReferenceGroupSaveComponent()).setTitle(R.reference_group)])]);let e=this.fb,t=this.data;this.form=e.group({description:[t.referenceValue?.description,[c.maxLength(4096)]],testTypeId:[t.testType.id,[c.required]],testTypeClinicalCaseId:[t.referenceValue?.testTypeClinicalCaseId,[]],unitId:[t.referenceValue?.unitId,[]],comparisonOperator:new Pe(t.referenceValue?.comparisonOperator??f.Range,[c.required]),referenceGroupId:[t.referenceValue?.referenceGroupId,[c.required]],value:[t.referenceValue?.value,[]],lowerBound:[t.referenceValue?.lowerBound,[]],upperBound:[t.referenceValue?.upperBound,[]],minValue:e.control(t.referenceValue?.minValue??0,[]),maxValue:e.control(t.referenceValue?.maxValue,[]),testTypeResultOptionId:[t.referenceValue?.testTypeResultOptionId,[]],aboveUpperBoundStatus:[t.referenceValue?.aboveUpperBoundStatus,[]],belowLowerBoundStatus:[t.referenceValue?.belowLowerBoundStatus,[]],withinBoundsStatus:[t.referenceValue?.withinBoundsStatus,[]],fulfilledStatus:[t.referenceValue?.fulfilledStatus,[]],notFulfilledStatus:[t.referenceValue?.notFulfilledStatus,[]]}),this.testTypeSelected(t.testType),this.comparisonOperatorSelected(this.form.value.comparisonOperator),this.getRerefenceGroups();}isNumericResult(){return this.data.testType.testResultType===Z.Quantitative;}comparisonOperatorSelected(e){this.form.controls.value.setErrors(null),this.form.controls.lowerBound.setErrors(null),this.form.controls.upperBound.setErrors(null),this.form.controls.testTypeResultOptionId.setErrors(null),e===f.Range?(this.form.controls.value.setValidators([]),this.form.controls.testTypeResultOptionId.setValidators([]),this.form.controls.lowerBound.setValidators([c.required]),this.form.controls.upperBound.setValidators([c.required])):(this.form.controls.lowerBound.setValidators([]),this.form.controls.upperBound.setValidators([]),this.isQuantitative?(this.form.controls.value.setValidators([c.required]),this.form.controls.testTypeResultOptionId.setValidators([])):(this.form.controls.value.setValidators([]),this.form.controls.testTypeResultOptionId.setValidators([c.required])));}testTypeSelected(e){e.unitId&&e.unit?this.getUnits(e.unit):this.units=[],e.testResultType===Z.Quantitative?(this.comparisonOperators=[f.Range,f.Equal,f.NotEqual,f.GreaterThan,f.GreaterThanOrEqual,f.LessThan,f.LessThanOrEqual],this.form.patchValue({comparisonOperator:this.data.referenceValue?.comparisonOperator??f.Range})):(this.comparisonOperators=[f.Equal,f.NotEqual],this.form.patchValue({comparisonOperator:this.data.referenceValue?.comparisonOperator??f.Equal})),this.testTypeResultOptions=[],e.testResultType===Z.Qualitative&&this.mlabService.testTypes.resultOptions.getAllItems(e.id,{orderBy:["nameEn"]}).pipe(de(this.indicator)).subscribe(t=>{t&&(this.testTypeResultOptions=t);}),this.isQuantitative=e.testResultType===Z.Quantitative;}getRerefenceGroups(){this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}).pipe(de(this.indicator)).subscribe(e=>{e&&(this.referenceGroups=e.items);});}getUnits(e){this.units=[e],this.form.patchValue({unitId:e?.id}),this.mlabService.unitConverters.getAllItems({filters:_e.create().equal("toUnitId",e.id).filters()}).subscribe(t=>{this.units.push(...t.map(i=>i.fromUnit));});}isRange(){return this.form&&this.form.value.comparisonOperator?this.form.value.comparisonOperator===f.Range:!1;}openReferenceGroupSaveComponent(){this.dialog.open(xe).afterClosed().subscribe(e=>{e&&(this.referenceGroups.push(e),this.form.patchValue({referenceGroupId:e.id}));});}submit(){if(!this.IsValid()){console.log(this.form);return;}let e=this.form.value;if(e.minValue){if(e.lowerBound&&e.minValue>e.lowerBound){this.form.controls.minValue.setErrors({incorrect:!0});return;}if(e.value&&typeof e.value=="number"&&e.minValue>e.value){this.form.controls.minValue.setErrors({incorrect:!0});return;}}if(e.maxValue){if(e.upperBound&&e.maxValue<e.upperBound){this.form.controls.maxValue.setErrors({incorrect:!0});return;}if(e.value&&typeof e.value=="number"&&e.maxValue<e.value){this.form.controls.maxValue.setErrors({incorrect:!0});return;}}this.data.referenceValue?this.save(this.mlabService.referenceValues.update(this.data.referenceValue.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[M([u]),y,m],decls:20,vars:17,consts:()=>{let e;e="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u0631\u064A\u0631\u064A\u0629";let i;i="\u0648\u0627\u062D\u062F\u0629";let O;O="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let g;g="\u0642\u064A\u0645\u0629";let J;J="\u0627\u0644\u0648\u0635\u0641";let fe;fe="\u0627\u0644\u062D\u0627\u0644\u0629";let Ce;Ce="\u0642\u064A\u0645\u0629";let Oe;Oe="\u0627\u0642\u0644 \u0642\u064A\u0645\u0629";let Me;Me="\u0627\u0639\u0644\u0649 \u0642\u064A\u0645\u0629";let Ne;Ne="\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649";let Ae;Ae="\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649";let Re;Re="\u0623\u0639\u0644\u0649 \u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649";let ge;ge="\u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649";let he;he="\u0636\u0645\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";let ye;ye="\u0645\u062D\u0642\u0642";let Le;return Le="\u063A\u064A\u0631 \u0645\u062D\u0642\u0642",[fe,[3,"title","subtitle","alert","menu"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source","config"],["formControlName","testTypeClinicalCaseId","label",t,3,"source","config"],[1,"sz-form-row"],["formControlName","unitId","label",i,3,"source","config"],["formControlName","comparisonOperator","label",O,3,"source","localizedValue","config"],["formControlName","testTypeResultOptionId","label",g,3,"source"],[1,"tw-mb-4"],["multi",""],["formControlName","description","label",J],[3,"actions"],["formControlName","value","label",Ce],["formControlName","minValue","label",Oe],["formControlName","maxValue","label",Me],["formControlName","lowerBound","label",Ne],["formControlName","upperBound","label",Ae],["formControlName","aboveUpperBoundStatus","label",Re],["formControlName","belowLowerBoundStatus","label",ge],["formControlName","withinBoundsStatus","label",he],["formControlName","fulfilledStatus","label",ye],["formControlName","notFulfilledStatus","label",Le]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",1),S(1,"mat-dialog-content")(2,"form",2),l(3,"sz-ui-form-field-select",3)(4,"sz-ui-form-field-select",4),S(5,"div",5),l(6,"sz-ui-form-field-select",6)(7,"sz-ui-form-field-select",7),p(),K(8,nt,1,1,"sz-ui-form-field-select",8)(9,st,5,1,"div",5),S(10,"div",9)(11,"mat-accordion",10)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),se(15,0),p()(),K(16,lt,3,0)(17,_t,2,0),p()()(),l(18,"sz-ui-form-field-textarea",11),p()(),l(19,"sz-ui-dialog-actions",12)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert())("menu",i.headerMenu),s(2),a("formGroup",i.form),s(),a("source",i.referenceGroups)("config",i.referenceGroupSelectConfig),s(),a("source",i.testTypeClinicalCases)("config",i.testTypeClinicalCaseSelectConfig),s(2),a("source",i.units)("config",i.unitSelectConfig),s(),a("source",i.comparisonOperators)("localizedValue",!0)("config",i.comparisonOperatorSelectConfig),s(),h(i.isQuantitative?9:8),s(8),h(i.isRange()?16:17),s(3),a("actions",i.actions));},dependencies:[z,P,I,b,V,v,F,$,Ve,U,we,Xe,Fe,Ue,Ge,Q,w,x,ve,ue,oe,ze,pe,Se],encapsulation:2});let n=o;return n;})();var We=(()=>{let o=class o{constructor(){this.dialog=r(N),this.mlabService=r(u),this.router=r(le),this.route=r(A),this.testType=this.route.snapshot.data.testType,this.dataSource=new $e(),this.card={header:{title:R.reference_values},menu:C.default([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("referenceGroup.nameEn").setStacked(_.string("referenceGroup.nameAr").setValueClassFontSmall()),_.string("clinicalCase").setValueGetter(e=>e.testTypeClinicalCase?.nameEn),_.enum("comparisonOperator").setValueGetter(e=>De(e.comparisonOperator)).setResponsive(!0),_.number("_value").setValueGetter(e=>e.testTypeResultOption?e.testTypeResultOption.nameEn:e.value!==null?`${e.value} ${e.unit?.symbol}`:`${e.lowerBound}-${e.upperBound} ${e.unit?.symbol}`).setHeaderSortable(!1),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(C.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReferenceValueDeleteComponent.bind(this))]))),this.dataSource.filtration?.equal("testTypeId",this.testType.id),this.get();}openSaveComponent(e){this.dialog.open(ke,{data:{testType:this.testType,referenceValue:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueDeleteComponent(e){this.dialog.open(q,{data:G.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-reference-values"]],standalone:!0,features:[M([u]),m],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(S(0,"sz-ui-card",0)(1,"sz-ui-table",1),L("update",function(){return i.get();}),p()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[j,H],encapsulation:2});let n=o;return n;})();var Je=(()=>{let o=class o extends X{constructor(){super(r(B)),this.mlabService=r(u),this.fb=r(D),this.data=r(Y),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:_e.create().equal("isGroup",!1).filters()});let e=this.fb,t=this.data;this.form=e.group({relatedTestTypeId:[t.testTypeRelationship?.relatedTestTypeId,[c.required]],enabled:[t.testTypeRelationship?.enabled??!0]});}submit(){this.IsValid()&&(this.data.testTypeRelationship?this.save(this.mlabService.testTypes.relationships.update(this.data.testTypeId,this.data.testTypeRelationship?.id,this.form.value)):this.save(this.mlabService.testTypes.relationships.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([u]),y,m],decls:7,vars:6,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0641\u0639\u0644",[t,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","relatedTestTypeId","label",e,3,"source"],["formControlName","enabled"],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",1),S(1,"mat-dialog-content")(2,"form",2),l(3,"sz-ui-form-field-select",3),S(4,"mat-checkbox",4),se(5,0),p()()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.testTypes),s(3),a("actions",i.actions));},dependencies:[z,P,I,b,V,v,F,$,U,Be,Q,w,x,Se],encapsulation:2});let n=o;return n;})();var Ke=(()=>{let o=class o{constructor(){this.dialog=r(N),this.mlabService=r(u),this.route=r(A),this.testType=this.route.snapshot.data.testType,this.dataSource=new ie(),this.card={header:{title:R.test_types},menu:C.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("relatedTestType.nameEn"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(C.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeRelationshipDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Je,{data:{testTypeId:this.testType.id,testTypeRelationship:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeRelationshipDeleteComponent(e){this.dialog.open(q,{data:G.delete(this.mlabService.testTypes.relationships.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.relationships.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.relationships.get(this.testType.id,this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-relationships"]],standalone:!0,features:[m],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(S(0,"sz-ui-card",0)(1,"sz-ui-table",1),L("update",function(){return i.get();}),p()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[ee,te,ne,j,H],encapsulation:2});let n=o;return n;})();var Ze=(()=>{let o=class o extends X{constructor(){super(r(B)),this.mlabService=r(u),this.fb=r(D),this.data=r(Y);let e=this.fb,t=this.data;this.form=e.group({nameEn:[t.testTypeResultOption?.nameEn,[c.required]],description:[t.testTypeResultOption?.description,[]],abbreviation:[t.testTypeResultOption?.abbreviation,[]],nameAr:[t.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[M([u]),y,m],decls:8,vars:5,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let i;i="\u0627\u0644\u0648\u0635\u0641";let O;return O="\u0623\u062E\u062A\u0635\u0627\u0631",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",e],["formControlName","nameAr","label",t],["formControlName","description","label",i],["formControlName","abbreviation","label",O],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-input-text",3)(5,"sz-ui-form-field-input-text",4)(6,"sz-ui-form-field-input-text",5),p()(),l(7,"sz-ui-dialog-actions",6)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(5),a("actions",i.actions));},dependencies:[z,P,I,b,V,v,F,$,U,Q,w,x,oe],encapsulation:2});let n=o;return n;})();var et=(()=>{let o=class o{constructor(){this.dialog=r(N),this.mlabService=r(u),this.route=r(A),this.testType=this.route.snapshot.data.testType,this.dataSource=new ie(),this.card={header:{title:R.result_options},menu:C.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(_.uuid("id"),_.string("nameEn").setStacked(_.string("nameAr").setValueClassFontSmall()),_.string("abbreviation"),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu(C.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeResultOptionDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Ze,{data:{testTypeId:this.testType.id,testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(q,{data:G.delete(this.mlabService.testTypes.resultOptions.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testType.id,this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type-result-options"]],standalone:!0,features:[m],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(S(0,"sz-ui-card",0)(1,"sz-ui-table",1),L("update",function(){return i.get();}),p()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[ee,te,ne,j,H],encapsulation:2});let n=o;return n;})();function St(n,o){if(n&1&&(S(0,"p"),Ie(1),p()),n&2){let re=ae();s(),be(" ",re.testType.description,`
`);}}function pt(n,o){n&1&&l(0,"sz-medisy-laboratory-test-type-result-options");}function ut(n,o){n&1&&l(0,"sz-medisy-laboratory-test-type-clinical-cases")(1,"sz-medisy-laboratory-test-type-reference-values");}function dt(n,o){n&1&&l(0,"sz-medisy-laboratory-test-type-relationships");}var tt=(()=>{let o=class o{constructor(){this.dialog=r(N),this.mlabService=r(u),this.route=r(A),this.router=r(le),this.testType=this.route.snapshot.data.testType,this.appBarConfig={title:this.testType.nameEn,backEnabled:!0},this.isQualitative=this.testType.testResultType===Z.Qualitative;}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-medisy-laboratory-test-type"]],standalone:!0,features:[M([]),m],decls:7,vars:5,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"]],template:function(t,i){t&1&&(l(0,"sz-ui-app-bar",0),K(1,St,2,1,"p"),S(2,"div",1),l(3,"sz-medisy-laboratory-test-type-specimen-types"),K(4,pt,1,0,"sz-medisy-laboratory-test-type-result-options")(5,ut,2,0)(6,dt,1,0,"sz-medisy-laboratory-test-type-relationships"),p()),t&2&&(a("config",i.appBarConfig),s(),h(i.testType.description?1:-1),s(3),h(i.isQualitative?4:-1),s(),h(i.testType.isGroup?-1:5),s(),h(i.testType.isGroup?6:-1));},dependencies:[Ye,qe,et,We,Ke,je],encapsulation:2});let n=o;return n;})();var bi=[{path:"",component:tt},{path:"specimen-types",loadComponent:()=>import("./chunk-MIDYJSYK.js").then(n=>n.TestTypeSpecimenTypesComponent)}];export{bi as default};/**i18n:d3e3083c250d91c646b86472e18f8369ebb747da11392505520eb4a69fa49de0*/