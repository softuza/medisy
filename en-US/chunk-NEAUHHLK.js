import{a as ve}from"./chunk-HM7MXMIU.js";import{a as G}from"./chunk-GFLYJLDW.js";import"./chunk-FGMVZWF3.js";import{b as Z}from"./chunk-P77BSP6Y.js";import{a as ee}from"./chunk-THIWXMFX.js";import{d as q,e as p,g as ae,h as be,i as H,j as se}from"./chunk-UAZW7FGY.js";import"./chunk-M2NEG5CC.js";import"./chunk-MQXCYNFG.js";import"./chunk-3LMPIIKD.js";import{b as X,f as w,g as x,h as Q,j as k,k as j}from"./chunk-GIJ4QTQ6.js";import{a as _}from"./chunk-LKFCT5FO.js";import"./chunk-WKPE2UQU.js";import{a as z,b as Y,d as N,e as F,g as B}from"./chunk-JAW6KWGU.js";import{a as Oe,b as Ce,c as Me,h as Ne,p as he,q as U,r as ne,s as ge,u as Re}from"./chunk-EQUM2IFK.js";import"./chunk-MQ23OO47.js";import"./chunk-DBTUXQ7J.js";import{h as Ee,i as fe}from"./chunk-FCC5WWQX.js";import{b as Se,d as f,f as b,g as v,k as ce,l as I,m as Te,o as L,r as D,s as P,u as V}from"./chunk-BY3MBLZE.js";import{b as u,c as O}from"./chunk-JDDIJKK3.js";import{a as Ae}from"./chunk-BBNH2Z4M.js";import"./chunk-5YVQVX3T.js";import"./chunk-PIZTKFGH.js";import{a as $,b as ye}from"./chunk-B5BNSRLB.js";import"./chunk-DUTNRR75.js";import{p as M,r as te,s as oe,x as ie}from"./chunk-GRRRCQTG.js";import"./chunk-YWRPBN7L.js";import"./chunk-LTX4MEGJ.js";import{Na as re}from"./chunk-OXQ5KKM6.js";import{Fb as C,Kb as d,Lb as m,Mb as l,Wb as me,Xb as A,Zb as W,cb as s,hc as _e,ja as n,jc as ue,na as S,nb as g,qc as E,rc as c,sb as R,zb as a}from"./chunk-IVT7A37N.js";import"./chunk-FRTEIQAP.js";function Ge(r,i){if(r&1&&l(0,"sz-ui-form-field-select",6),r&2){let K=W();a("source",K.testTypeResultOptions);}}function Xe(r,i){r&1&&(d(0,"div",9)(1,"mat-form-field",10)(2,"label"),l(3,"input",11),m()(),d(4,"mat-form-field",10)(5,"label"),l(6,"input",12),m()()());}function we(r,i){r&1&&(d(0,"mat-form-field",10)(1,"label"),l(2,"input",13),m()());}function xe(r,i){if(r&1&&R(0,Xe,7,0,"div",9)(1,we,3,0,"mat-form-field",10),r&2){let K=W();C(K.isRange()?0:1);}}var Ve=(()=>{let i=class i extends w{constructor(){let e=n(z);super(e),this.mlabService=n(_),this.fb=n(P),this.data=n(Y),this.units=[],this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={autoSelect:!0},this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testTypeResultOptions=[],this.comparisonOperators=Object.keys(Z).map(T=>Z[T]),this.isQuantitative=!1;let t=this.fb;this.dialog=e;let o=this.data;console.log(o),this.form=t.group({description:[o.referenceValue?.description,[f.maxLength(4096)]],testTypeId:[o.testType.id,[f.required]],unitId:[o.referenceValue?.unitId,[]],comparisonOperator:new ce(o.referenceValue?.comparisonOperator??Z.Range,[f.required]),referenceGroupId:[o.referenceValue?.referenceGroupId,[f.required]],value:[o.referenceValue?.value,[]],start:t.control(o.referenceValue?.start,[]),end:t.control(o.referenceValue?.end,[]),testTypeResultOptionId:[o.referenceValue?.testTypeResultOptionId,[]]}),this.testTypeSelected(o.testType);}testTypeSelected(e){e.unitId&&e.unit?this.getUnits(e.unit):this.units=[],this.testTypeResultOptions=[],e.testResultType===ee.Qualitative&&this.mlabService.testTypes.resultOptions.getAllItems(e.id,{orderBy:["nameEn"]}).pipe(Ne(this.indicator)).subscribe(t=>{t&&(this.testTypeResultOptions=t);}),this.isQuantitative=e.testResultType===ee.Quantitative;}getUnits(e){this.units=[e],this.form.patchValue({unitId:e?.id}),this.mlabService.unitConverters.getAllItems({filters:ie.create().equal("toUnitId",e.id).filters()}).subscribe(t=>{this.units.push(...t.map(o=>o.fromUnit));});}isRange(){return this.form.value.comparisonOperator===Z.Range;}submit(){this.IsValid()&&(this.data.referenceValue?this.save(this.mlabService.referenceValues.update(this.data.referenceValue.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[E([_]),g,c],decls:11,vars:11,consts:()=>{let e;e="Reference Group";let t;t="Unit";let o;o="Comparison Operator";let T;T="Value";let h;h="Description";let le;le="Start";let pe;pe="End";let de;return de="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",e,3,"source"],[1,"sz-form-row"],["formControlName","unitId","label",t,3,"source","config"],["formControlName","comparisonOperator","label",o,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",T,3,"source"],["formControlName","description","label",h],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",le,"type","number"],["autocomplete","off","formControlName","end","matInput","","placeholder",pe,"type","number"],["autocomplete","off","formControlName","value","matInput","","placeholder",de]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2),d(4,"div",3),l(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),m(),R(7,Ge,1,1,"sz-ui-form-field-select",6)(8,xe,2,1),l(9,"sz-ui-form-field-textarea",7),m()(),l(10,"sz-ui-dialog-actions",8)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),a("formGroup",o.form),s(),a("source",o.referenceGroups),s(2),a("source",o.units)("config",o.unitSelectConfig),s(),a("source",o.comparisonOperators)("localizedValue",!0),s(),C(o.isQuantitative?8:7),s(3),a("actions",o.actions));},dependencies:[V,I,Se,Te,b,v,L,D,B,F,fe,Ee,U,j,x,Q,Ce,Oe,Re,ge,ne],encapsulation:2});let r=i;return r;})();var ze=(()=>{let i=class i{constructor(){this.dialog=n(N),this.mlabService=n(_),this.router=n(te),this.route=n(M),this.testType=this.route.snapshot.data.testType,this.dataSource=new be(),this.card={header:{title:$.reference_values},menu:O.more([u.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(p.uuid("id"),p.string("referenceGroup.nameEn").setStacked(p.string("referenceGroup.nameAr").setValueClassFontSmall()),p.string("unit").setValueGetter(e=>e.unit?.symbol),p.enum("comparisonOperator").setValueGetter(e=>ye(e.comparisonOperator)),p.number("_value").setValueGetter(e=>e.testTypeResultOption?e.testTypeResultOption.nameEn:e.value!==null?e.value:`${e.start} - ${e.end}`).setHeaderSortable(!1),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),p.menu(O.more([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.delete(this.openReferenceValueDeleteComponent.bind(this))]))),this.dataSource.filtration?.equal("testTypeId",this.testType.id),this.get();}openSaveComponent(e){this.dialog.open(Ve,{data:{testType:this.testType,referenceValue:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-reference-values"]],standalone:!0,features:[E([_]),c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),A("update",function(){return o.get();}),m()()),t&2&&(a("card",o.card),s(),a("dataSource",o.dataSource));},dependencies:[q,G],encapsulation:2});let r=i;return r;})();var Ye=(()=>{let i=class i extends w{constructor(){let e=n(z);super(e),this.mlabService=n(_),this.fb=n(P),this.data=n(Y),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filters:ie.create().equal("isGroup",!1).filters()});let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({relatedTestTypeId:[o.testTypeRelationship?.relatedTestTypeId,[f.required]],enabled:[o.testTypeRelationship?.enabled??!0]});}submit(){this.IsValid()&&(this.data.testTypeRelationship?this.save(this.mlabService.testTypes.relationships.update(this.data.testTypeId,this.data.testTypeRelationship?.id,this.form.value)):this.save(this.mlabService.testTypes.relationships.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[E([_]),g,c],decls:7,vars:6,consts:()=>{let e;e="Type";let t;return t="Enabled",[t,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","relatedTestTypeId","label",e,3,"source"],["formControlName","enabled"],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",1),d(1,"mat-dialog-content")(2,"form",2),l(3,"sz-ui-form-field-select",3),d(4,"mat-checkbox",4),me(5,0),m()()(),l(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),a("formGroup",o.form),s(),a("source",o.testTypes),s(3),a("actions",o.actions));},dependencies:[V,I,b,v,L,D,B,F,U,he,j,x,Q,ne],encapsulation:2});let r=i;return r;})();var Fe=(()=>{let i=class i{constructor(){this.dialog=n(N),this.mlabService=n(_),this.route=n(M),this.testType=this.route.snapshot.data.testType,this.dataSource=new ae(),this.card={header:{title:$.test_types},menu:O.more([u.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(p.uuid("id"),p.string("relatedTestType.nameEn"),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),p.menu(O.more([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.delete(this.openTestTypeRelationshipDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Ye,{data:{testTypeId:this.testType.id,testTypeRelationship:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeRelationshipDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testTypes.relationships.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.relationships.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.relationships.get(this.testType.id,this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-relationships"]],standalone:!0,features:[c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),A("update",function(){return o.get();}),m()()),t&2&&(a("card",o.card),s(),a("dataSource",o.dataSource));},dependencies:[oe,re,se,q,G],encapsulation:2});let r=i;return r;})();var Be=(()=>{let i=class i extends w{constructor(){let e=n(z);super(e),this.mlabService=n(_),this.fb=n(P),this.data=n(Y);let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({nameEn:[o.testTypeResultOption?.nameEn,[f.required]],description:[o.testTypeResultOption?.description,[]],abbreviation:[o.testTypeResultOption?.abbreviation,[]],nameAr:[o.testTypeResultOption?.nameAr,[]]});}submit(){this.IsValid()&&(this.data.testTypeResultOption?this.save(this.mlabService.testTypes.resultOptions.update(this.data.testTypeId,this.data.testTypeResultOption?.id,this.form.value)):this.save(this.mlabService.testTypes.resultOptions.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options-save"]],standalone:!0,features:[E([_]),g,c],decls:8,vars:5,consts:()=>{let e;e="English Name";let t;t="Arabic Name";let o;o="Description";let T;return T="Abbreviation",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",e],["formControlName","nameAr","label",t],["formControlName","description","label",o],["formControlName","abbreviation","label",T],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),m()(),l(7,"sz-ui-dialog-actions",6)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),a("formGroup",o.form),s(5),a("actions",o.actions));},dependencies:[V,I,b,v,L,D,B,F,U,j,x,Q,Me],encapsulation:2});let r=i;return r;})();var $e=(()=>{let i=class i{constructor(){this.dialog=n(N),this.mlabService=n(_),this.route=n(M),this.testType=this.route.snapshot.data.testType,this.dataSource=new ae(),this.card={header:{title:$.result_options},menu:O.more([u.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(p.uuid("id"),p.string("nameEn").setStacked(p.string("nameAr").setValueClassFontSmall()),p.string("abbreviation"),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),p.menu(O.more([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.delete(this.openTestTypeResultOptionDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Be,{data:{testTypeId:this.testType.id,testTypeResultOption:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeResultOptionDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testTypes.resultOptions.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.resultOptions.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.resultOptions.get(this.testType.id,this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type-result-options"]],standalone:!0,features:[c],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),A("update",function(){return o.get();}),m()()),t&2&&(a("card",o.card),s(),a("dataSource",o.dataSource));},dependencies:[oe,re,se,q,G],encapsulation:2});let r=i;return r;})();function ke(r,i){if(r&1&&(d(0,"p"),_e(1),m()),r&2){let K=W();s(),ue(" ",K.testType.description,`
`);}}function je(r,i){r&1&&l(0,"sz-medisy-laboratory-test-type-result-options");}function qe(r,i){r&1&&l(0,"sz-medisy-laboratory-test-type-reference-values");}function He(r,i){r&1&&l(0,"sz-medisy-laboratory-test-type-relationships");}var Ue=(()=>{let i=class i{constructor(){this.dialog=n(N),this.mlabService=n(_),this.route=n(M),this.router=n(te),this.testType=this.route.snapshot.data.testType,this.appBarConfig={title:this.testType.nameEn,backEnabled:!0},this.isQualitative=this.testType.testResultType===ee.Qualitative;}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-medisy-laboratory-test-type"]],standalone:!0,features:[E([]),c],decls:7,vars:6,consts:[[3,"config"],[1,"tw-grid","lg:tw-grid-cols-2","tw-gap-2","tw-mb-2"],[3,"testTypeId"]],template:function(t,o){t&1&&(l(0,"sz-ui-app-bar",0),R(1,ke,2,1,"p"),d(2,"div",1),l(3,"sz-medisy-laboratory-test-type-specimen-types",2),R(4,je,1,0,"sz-medisy-laboratory-test-type-result-options")(5,qe,1,0,"sz-medisy-laboratory-test-type-reference-values")(6,He,1,0,"sz-medisy-laboratory-test-type-relationships"),m()),t&2&&(a("config",o.appBarConfig),s(),C(o.testType.description?1:-1),s(2),a("testTypeId",o.testType.id),s(),C(o.isQualitative?4:-1),s(),C(o.testType.isGroup?-1:5),s(),C(o.testType.isGroup?6:-1));},dependencies:[Ae,ve,$e,ze,Fe],encapsulation:2});let r=i;return r;})();var Bo=[{path:"",component:Ue},{path:"specimen-types",loadComponent:()=>import("./chunk-L25PKXBS.js").then(r=>r.TestTypeSpecimenTypesComponent)}];export{Bo as default};/**i18n:5f6a3b0ec95f18f467ee79465875573287b82c9dbfc7b5810bd07d855187f9a0*/