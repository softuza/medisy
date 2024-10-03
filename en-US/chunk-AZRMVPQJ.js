import{a as C}from"./chunk-RJTD7IM6.js";import{a as h}from"./chunk-OG74SJXP.js";import{a as me,b as pe,c as _,f as ce,g as fe}from"./chunk-QTL2VK7Y.js";import"./chunk-A4CG2NMU.js";import"./chunk-VTSPPHDN.js";import"./chunk-M7UZMDJ3.js";import{b as le,f as _e,g as Se,h as ue,j as Ee,k as de}from"./chunk-MBGPVYCR.js";import{a as p}from"./chunk-L3WDPQP7.js";import"./chunk-B5ANHG6X.js";import{a as Q,b as k,d as q,e as j,g as H}from"./chunk-3RAF2YCP.js";import{a as W,b as Z,h as ee,q as ie,r as ne,s as re,u as ae}from"./chunk-BD7VQR7P.js";import"./chunk-HLSHTPUZ.js";import"./chunk-XGXTHGMT.js";import{h as J,i as K}from"./chunk-JE5WUYND.js";import{b as D,d as f,f as z,g as $,k as F,l as B,m as U,o as P,r as Y,s as G,u as X}from"./chunk-WM2WRHBE.js";import{b as m,c as se}from"./chunk-WED5ZXP7.js";import"./chunk-TR7ZWGFY.js";import"./chunk-LU5YIJRC.js";import"./chunk-CTOSHI2B.js";import{a as te,b as oe}from"./chunk-OCSDC33N.js";import"./chunk-MP6YRTZR.js";import{r as w,x}from"./chunk-BN5OIF3Q.js";import"./chunk-AIVPDPHA.js";import"./chunk-W6JJS6CU.js";import"./chunk-OMSMEPHM.js";import{Eb as A,Jb as u,Kb as s,Lb as l,Wb as g,Yb as L,bb as a,ja as S,mb as b,mc as M,na as O,nc as R,rb as N,yb as r}from"./chunk-O34SSFLY.js";import"./chunk-QEH2RDWU.js";function Re(i,n){if(i&1&&l(0,"sz-ui-form-field-select",7),i&2){let T=L();r("source",T.testTypeResultOptions);}}function Te(i,n){i&1&&(u(0,"div",10)(1,"mat-form-field",11)(2,"label"),l(3,"input",12),s()(),u(4,"mat-form-field",11)(5,"label"),l(6,"input",13),s()()());}function Ne(i,n){i&1&&(u(0,"mat-form-field",11)(1,"label"),l(2,"input",14),s()());}function Ae(i,n){if(i&1&&N(0,Te,7,0,"div",10)(1,Ne,3,0,"mat-form-field",11),i&2){let T=L();A(T.isRange()?0:1);}}var Ce=(()=>{let n=class n extends _e{constructor(){let e=S(Q);super(e),this.mlabService=S(p),this.fb=S(G),this.data=S(k),this.units=[],this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={autoSelect:!0},this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"]}),this.testTypeResultOptions=[],this.comparisonOperators=Object.keys(C).map(d=>C[d]),this.testTypeSelectConfig={optionSelectedFn:(d,c)=>{c&&this.testTypeSelected(c);}},this.isQuantitative=!1;let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({description:[t?.description,[f.maxLength(4096)]],testTypeId:[t?.testTypeId,[f.required]],unitId:[t?.unitId,[]],comparisonOperator:new F(t?.comparisonOperator??C.Range,[f.required]),referenceGroupId:[t?.referenceGroupId,[f.required]],value:[t?.value,[]],start:o.control(t?.start,[]),end:o.control(t?.end,[]),testTypeResultOptionId:[t?.testTypeResultOptionId,[]]}),t?.testType&&this.testTypeSelected(t.testType);}testTypeSelected(e){e.unitId&&e.unit?this.getUnits(e.unit):this.units=[],this.testTypeResultOptions=[],e.testResultType===h.Qualitative&&this.mlabService.testTypes.resultOptions.getAllItems(e.id,{orderBy:["nameEn"]}).pipe(ee(this.indicator)).subscribe(o=>{o&&(this.testTypeResultOptions=o);}),this.isQuantitative=e.testResultType===h.Quantitative;}getUnits(e){this.units=[e],this.form.patchValue({unitId:e?.id}),this.mlabService.unitConverters.getAllItems({filters:x.create().equal("toUnitId",e.id).filters()}).subscribe(o=>{this.units.push(...o.map(t=>t.fromUnit));});}isRange(){return this.form.value.comparisonOperator===C.Range;}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};n.ɵfac=function(o){return new(o||n)();},n.ɵcmp=O({type:n,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[M([p]),b,R],decls:13,vars:13,consts:()=>{let e;e="Test Type";let o;o="Unit";let t;t="Reference Group";let d;d="Comparison Operator";let c;c="Value";let I;I="Description";let V;V="Start";let y;y="End";let v;return v="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","testTypeId","label",e,3,"source","config"],["formControlName","unitId","label",o,3,"source","config"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","comparisonOperator","label",d,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",c,3,"source"],["formControlName","description","label",I],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",V,"type","number"],["autocomplete","off","formControlName","end","matInput","","placeholder",y,"type","number"],["autocomplete","off","formControlName","value","matInput","","placeholder",v]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),s(),u(6,"div",2),l(7,"sz-ui-form-field-select",5)(8,"sz-ui-form-field-select",6),s(),N(9,Re,1,1,"sz-ui-form-field-select",7)(10,Ae,2,1),l(11,"sz-ui-form-field-textarea",8),s()(),l(12,"sz-ui-dialog-actions",9)),o&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),r("formGroup",t.form),a(2),r("source",t.testTypes)("config",t.testTypeSelectConfig),a(),r("source",t.units)("config",t.unitSelectConfig),a(2),r("source",t.referenceGroups),a(),r("source",t.comparisonOperators)("localizedValue",!0),a(),A(t.isQuantitative?10:9),a(3),r("actions",t.actions));},dependencies:[X,B,D,U,z,$,P,Y,H,j,K,J,ie,de,Se,ue,Z,W,ae,re,ne],encapsulation:2});let i=n;return i;})();var Oe=(()=>{let n=class n{constructor(){this.dialog=S(q),this.mlabService=S(p),this.router=S(w),this.dataSource=new ce(),this.appBarConfig={title:te.reference_values,menu:se.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(_.uuid("id"),_.hyperlink("testType.nameEn").setStacked(_.string("description").setValueClassFontSmall()),_.string("unit").setValueGetter(e=>e.unit?.symbol),_.enum("comparisonOperator").setValueGetter(e=>oe(e.comparisonOperator)),_.number("_value").setValueGetter(e=>e.testTypeResultOption?e.testTypeResultOption.nameEn:e.value!==null?e.value:`${e.start} - ${e.end}`).setHeaderSortable(!1),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),_.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openReferenceValueDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(Ce,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueDeleteComponent(e){this.dialog.open(Ee,{data:le.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(fe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};n.ɵfac=function(o){return new(o||n)();},n.ɵcmp=O({type:n,selectors:[["sz-medisy-laboratory-reference-values"]],standalone:!0,features:[M([p]),R],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(u(0,"sz-ui-table-bar",0),g("changed",function(){return t.get();}),s(),u(1,"sz-ui-table",1),g("update",function(){return t.get();}),s()),o&2&&(r("config",t.appBarConfig)("dataSource",t.dataSource),a(),r("dataSource",t.dataSource));},dependencies:[me,pe],encapsulation:2});let i=n;return i;})();var rt=[{path:"",component:Oe}];export{rt as default};/**i18n:08dc477745c643d8c857c9e8e740bb8fd5d4d2f068a9032e0d444ef2bfb6a6f8*/