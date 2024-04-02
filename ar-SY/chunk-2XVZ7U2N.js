import{a as S,b as ie,d as ae,f as ne,i as se,j as _e}from"./chunk-CWWTVIIA.js";import"./chunk-LIIS7A43.js";import"./chunk-UQPXTM25.js";import"./chunk-N6VKBQXP.js";import{a as b}from"./chunk-6BU6A7VN.js";import{e as Z,f as x,g as ee,i as te,j as oe,k as re}from"./chunk-A4XZJK7B.js";import"./chunk-YUEFNVQ5.js";import{b as W}from"./chunk-U55JSNN2.js";import{h as R}from"./chunk-X6CB65IJ.js";import{a as G,b as U,d as X,e as k,g as q}from"./chunk-QE4XYJ4T.js";import"./chunk-NAIS3R76.js";import{c as H,n as J,o as N,q as K}from"./chunk-KJZTT6TA.js";import{c as Q}from"./chunk-6AZ2AEC7.js";import"./chunk-U7ZOM2YQ.js";import"./chunk-NBKY5CS7.js";import{c as C}from"./chunk-S2T6ZNBK.js";import"./chunk-AREF36RF.js";import{d as m,f as h,g as Y,k as v,m as B,p as D,q as V,t as z}from"./chunk-OJRV2XYW.js";import{r as y,t as A}from"./chunk-45ZRMW6B.js";import{a as $,e as F}from"./chunk-GL26FKLW.js";import"./chunk-WH4BPRTJ.js";import{ia as j,ka as w}from"./chunk-XGLXTGUJ.js";import"./chunk-F5J57FY7.js";import{Db as n,Nb as s,Ob as l,Pb as O,Zb as u,_b as c,hb as _,ib as T,qc as M,ua as f,ub as P}from"./chunk-HXKYWGD2.js";var le=(()=>{let a=class a extends Z{constructor(t,o,r,e){super(r),this.mlabService=t,this.fb=o,this.dialog=r,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"],filterBehavior:y.Or,filters:A.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:A.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValues=null,this.referenceValueContentFormat=i=>i.testType.name,this.form=o.group({enabled:[e.laboratoryTestType?.enabled??!0,[m.required]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[m.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[m.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],transferPrice:[e.laboratoryTestType?.transferPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[m.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[m.required]],referenceValueId:[e.laboratoryTestType?.referenceValueId,[m.required]]}),e.laboratoryTestType&&this.testTypeChnaged(e.laboratoryTestType.testTypeId);}testTypeChnaged(t){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.name"],filterBehavior:y.And,filters:A.create().equalIf("testType.id",t).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};a.ɵfac=function(o){return new(o||a)(T(b),T(V),T(G),T(U));},a.ɵcmp=f({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[P,M],decls:20,vars:10,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let r;r="\u0627\u0644\u0633\u0639\u0631";let e;e="\u0633\u0639\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";let i;i="\u0627\u0644\u0645\u062E\u0628\u0631 \u0627\u0644\u0645\u062D\u0648\u0644 \u0644\u0647";let d;d="\u0645\u0641\u0639\u0644";let L;L="\u0645\u0641\u0636\u0644\u0629";let I;I="\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649 \u0645\u0641\u0639\u0644";let g;return g="\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0645\u0646 \u0645\u0641\u0639\u0644",[d,L,I,g,[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"szOptionSelected","source"],["formControlName","referenceValueId","label",o,3,"source","szOptionContentFn"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",r,3,"type"],["formControlName","transferPrice","label",e,3,"type"],["formControlName","transferInEnabled"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",i,3,"source","emptyOption"],[3,"actions"]];},template:function(o,r){o&1&&(O(0,"sz-ui-dialog-header",4),s(1,"mat-dialog-content")(2,"form",5)(3,"sz-ui-form-field-select",6),c("szOptionSelected",function(i){return r.testTypeChnaged(i);}),l(),O(4,"sz-ui-form-field-select",7),s(5,"div",8)(6,"mat-checkbox",9),u(7,0),l(),s(8,"mat-checkbox",10),u(9,1),l()(),s(10,"div",8),O(11,"sz-ui-form-field-input",11)(12,"sz-ui-form-field-input",12),l(),s(13,"div",8)(14,"mat-checkbox",13),u(15,2),l(),s(16,"mat-checkbox",14),u(17,3),l()(),O(18,"sz-ui-form-field-select",15),l()(),O(19,"sz-ui-dialog-actions",16)),o&2&&(n("header",r.header),_(2),n("formGroup",r.form),_(),n("source",r.testTypes),_(),n("source",r.referenceValues)("szOptionContentFn",r.referenceValueContentFormat),_(7),n("type","number"),_(),n("type","number"),_(6),n("source",r.laboratories)("emptyOption",!0),_(),n("actions",r.actions));},dependencies:[z,v,h,Y,B,D,oe,x,ee,q,k,N,J,H,K],encapsulation:2});let p=a;return p;})();var je=(()=>{let a=class a{constructor(t,o,r){this.dialog=t,this.mlabService=o,this.route=r,this.title=C.testTypes,this.dataSource=new ae(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(S.uuid("id"),S.uuid("testTypeId"),S.string("testType.name"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),S.boolean("isFavorite",(e,i)=>{e.isFavorite=i,this.updateItem(e);}).setName(C.favorite).setResponsive(!0),S.boolean("enabled",(e,i)=>{e.enabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferInEnabled",(e,i)=>{e.transferInEnabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferOutEnabled",(e,i)=>{e.transferOutEnabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),ie.menu([R.edit(e=>this.openSaveComponent(e)),R.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(te,{data:re.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(Q(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};a.ɵfac=function(o){return new(o||a)(T(X),T(b),T($));},a.ɵcmp=f({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[M],decls:6,vars:5,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(o,r){o&1&&(O(0,"sz-ui-header-info",1),s(1,"sz-ui-table-search-filter",2),c("changed",function(){return r.get();}),s(2,"button",3),c("click",function(){return r.openSaveComponent();}),s(3,"span"),u(4,0),l()()(),s(5,"sz-ui-table",4),c("update",function(){return r.get();}),l()),o&2&&(n("title",r.title)("subtitle",r.laboratory.name),_(),n("dataSource",r.dataSource),_(4),n("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[F,W,_e,se,ne,N,w,j],encapsulation:2});let p=a;return p;})();export{je as LaboratoryTestTypesComponent};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/