import{a as S,b as ie,d as ae,f as ne,i as se,j as _e}from"./chunk-7YC3FKFX.js";import"./chunk-U2NYA4TJ.js";import"./chunk-UKNNB4C6.js";import"./chunk-UBJFLYRY.js";import{a as N}from"./chunk-D4CAUMAG.js";import{e as Z,f as x,g as ee,i as te,j as oe,k as re}from"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as W}from"./chunk-6MMOYJEJ.js";import{h as R}from"./chunk-QT6JCYGS.js";import{a as G,b as U,d as X,e as k,g as q}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import{c as H,n as J,o as b,q as K}from"./chunk-UCRC6V5J.js";import{c as Q}from"./chunk-5WJVC7PV.js";import"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import{c as C}from"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import{d as m,f as h,g as Y,k as v,m as B,p as D,q as z,t as V}from"./chunk-EIWC7QFZ.js";import{r as y,t as A}from"./chunk-22G3BWVW.js";import{a as $,e as F}from"./chunk-L6HNREY7.js";import"./chunk-6YPHC773.js";import{ia as j,ka as w}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Db as n,Nb as s,Ob as l,Pb as O,Zb as u,_b as c,hb as _,ib as T,qc as M,ua as f,ub as P}from"./chunk-XPH4NMLC.js";var le=(()=>{let a=class a extends Z{constructor(t,r,o,e){super(o),this.mlabService=t,this.fb=r,this.dialog=o,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"],filterBehavior:y.Or,filters:A.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:A.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValues=null,this.referenceValueContentFormat=i=>i.testType.name,this.form=r.group({enabled:[e.laboratoryTestType?.enabled??!0,[m.required]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[m.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[m.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],transferPrice:[e.laboratoryTestType?.transferPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[m.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[m.required]],referenceValueId:[e.laboratoryTestType?.referenceValueId,[m.required]]}),e.laboratoryTestType&&this.testTypeChnaged(e.laboratoryTestType.testTypeId);}testTypeChnaged(t){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.name"],filterBehavior:y.And,filters:A.create().equalIf("testType.id",t).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};a.ɵfac=function(r){return new(r||a)(T(N),T(z),T(G),T(U));},a.ɵcmp=f({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[P,M],decls:20,vars:13,consts:()=>{let t;t="Test Type";let r;r="Reference Value";let o;o="Price";let e;e="Transfer Price";let i;i="Transfer Out Laboratory";let d;d="Enabled";let L;L="Favorite";let I;I="Transfer In Enabled";let g;return g="Transfer Out Enabled",[d,L,I,g,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"szOptionSelected","source"],["formControlName","referenceValueId","label",r,3,"source","szAutoSelect","szOptionContentFn"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o,3,"type"],["formControlName","transferPrice","label",e,3,"type"],["formControlName","transferInEnabled"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",i,3,"source","emptyOption"],[3,"actions"]];},template:function(r,o){r&1&&(O(0,"sz-ui-dialog-header",4),s(1,"mat-dialog-content")(2,"form",5)(3,"sz-ui-form-field-select",6),c("szOptionSelected",function(i){return o.testTypeChnaged(i);}),l(),O(4,"sz-ui-form-field-select",7),s(5,"div",8)(6,"mat-checkbox",9),u(7,0),l(),s(8,"mat-checkbox",10),u(9,1),l()(),s(10,"div",8),O(11,"sz-ui-form-field-input",11)(12,"sz-ui-form-field-input",12),l(),s(13,"div",8)(14,"mat-checkbox",13),u(15,2),l(),s(16,"mat-checkbox",14),u(17,3),l()(),O(18,"sz-ui-form-field-select",15),l()(),O(19,"sz-ui-dialog-actions",16)),r&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),n("formGroup",o.form),_(),n("source",o.testTypes),_(),n("source",o.referenceValues)("szAutoSelect",!0)("szOptionContentFn",o.referenceValueContentFormat),_(7),n("type","number"),_(),n("type","number"),_(6),n("source",o.laboratories)("emptyOption",!0),_(),n("actions",o.actions));},dependencies:[V,v,h,Y,B,D,oe,x,ee,q,k,b,J,H,K],encapsulation:2});let p=a;return p;})();var je=(()=>{let a=class a{constructor(t,r,o){this.dialog=t,this.mlabService=r,this.route=o,this.title=C.testTypes,this.dataSource=new ae(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(S.uuid("id"),S.uuid("testTypeId"),S.string("testType.name"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),S.boolean("isFavorite",(e,i)=>{e.isFavorite=i,this.updateItem(e);}).setName(C.favorite).setResponsive(!0),S.boolean("enabled",(e,i)=>{e.enabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferInEnabled",(e,i)=>{e.transferInEnabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferOutEnabled",(e,i)=>{e.transferOutEnabled=i,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(d=>{e=d;});}).setResponsive(!0),ie.menu([R.edit(e=>this.openSaveComponent(e)),R.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().subscribe(r=>{this.dataSource.addOrUpdateItem(r);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(te,{data:re.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().subscribe(r=>{this.dataSource.delete(r);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(r=>{this.dataSource.update(r);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(Q(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};a.ɵfac=function(r){return new(r||a)(T(X),T(N),T($));},a.ɵcmp=f({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[M],decls:6,vars:5,consts:()=>{let t;return t="Add",[t,[3,"title","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(r,o){r&1&&(O(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),s(2,"button",3),c("click",function(){return o.openSaveComponent();}),s(3,"span"),u(4,0),l()()(),s(5,"sz-ui-table",4),c("update",function(){return o.get();}),l()),r&2&&(n("title",o.title)("backEnabled",!0),_(),n("dataSource",o.dataSource),_(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[F,W,_e,se,ne,b,w,j],encapsulation:2});let p=a;return p;})();export{je as LaboratoryTestTypesComponent};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/