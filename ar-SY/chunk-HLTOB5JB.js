import{a as Ee,b as Oe,c as de,d as pe,e as me}from"./chunk-4U6ISIDB.js";import{a as d,b as ne,d as _e,e as se,g as le,j as Se,k as Te}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import{a as C}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as ee,f as te,g as oe,h as re,j as ie,k as ae}from"./chunk-K46Y6NGM.js";import{a as Z}from"./chunk-R7EUDMGD.js";import{e as W,h as L}from"./chunk-KBWUA6E4.js";import{a as X,b as k,d as j,e as q,g as w}from"./chunk-NGJJVZ6X.js";import{c as Q,p as J,q as N,r as K}from"./chunk-COX3WBO6.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as y}from"./chunk-TUR2GSJY.js";import"./chunk-Z6RT565P.js";import{d as m,f as B,g as D,l as v,n as V,q as $,r as z,u as G}from"./chunk-GIW6HK33.js";import{r as R,t as A}from"./chunk-27BMIET6.js";import{a as F,e as U}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ja as x,la as H}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as i,Lb as _,Mb as S,Wb as E,Xb as c,bb as s,cb as T,na as u,pc as f,qb as h,zb as n}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var Me=(()=>{let a=class a extends te{constructor(t,r,o,e){super(o),this.mlabService=t,this.fb=r,this.dialog=o,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:R.Or,filters:A.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:A.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValueSelectConfig={emptyOption:!0,autoSelect:!0,optionContentFn:O=>O.testType.nameEn},this.testTypeSelectConfig={optionSelectedFn:this.testTypeChnaged.bind(this)},this.transferOutLaboratorySelectConfig={emptyOption:!0},this.referenceValues=null,this.form=r.group({enabled:[e.laboratoryTestType?.enabled??!0,[m.required]],transferInPrice:[e.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[m.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[m.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[m.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[m.required]],referenceValueId:[e.laboratoryTestType?.referenceValueId,[]]}),e.laboratoryTestType&&this.testTypeChnaged(e.laboratoryTestType.testTypeId);}testTypeChnaged(t){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.nameEn"],filterBehavior:R.And,filters:A.create().equalIf("testType.id",t).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};a.ɵfac=function(r){return new(r||a)(T(C),T(z),T(X),T(k));},a.ɵcmp=u({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[h,f],decls:29,vars:13,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let r;r="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let o;o="\u0627\u0644\u0633\u0639\u0631";let e;e="\u0627\u0644\u0633\u0639\u0631";let O;O="\u0627\u0644\u0645\u062E\u0628\u0631";let M;M="\u0645\u0641\u0639\u0644";let b;b="\u0645\u0641\u0636\u0644\u0629";let g;g="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let I;I="\u0645\u0641\u0639\u0644";let P;P="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let Y;return Y="\u0645\u0641\u0639\u0644",[M,b,g,I,P,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source","config"],["formControlName","referenceValueId","label",r,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o,3,"type"],["multi",""],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",e,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",O,3,"source","config"],[3,"actions"]];},template:function(r,o){r&1&&(S(0,"sz-ui-dialog-header",6),i(1,"mat-dialog-content")(2,"form",7),S(3,"sz-ui-form-field-select",8)(4,"sz-ui-form-field-select",9),i(5,"div",10)(6,"mat-checkbox",11),E(7,0),_(),i(8,"mat-checkbox",12),E(9,1),_()(),i(10,"div",10),S(11,"sz-ui-form-field-input",13),_(),S(12,"div",10),i(13,"mat-accordion",14)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),E(17,2),_()(),i(18,"mat-checkbox",15),E(19,3),_(),S(20,"sz-ui-form-field-input",16),_(),i(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),E(24,4),_()(),i(25,"mat-checkbox",17),E(26,5),_(),S(27,"sz-ui-form-field-select",18),_()()()(),S(28,"sz-ui-dialog-actions",19)),r&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),n("formGroup",o.form),s(),n("source",o.testTypes)("config",o.testTypeSelectConfig),s(),n("source",o.referenceValues)("config",o.referenceValueSelectConfig),s(7),n("type","number"),s(9),n("type","number"),s(7),n("source",o.laboratories)("config",o.transferOutLaboratorySelectConfig),s(),n("actions",o.actions));},dependencies:[G,v,B,D,V,$,ae,oe,re,w,q,N,J,me,pe,Ee,Oe,de,Q,K],encapsulation:2});let p=a;return p;})();var et=(()=>{let a=class a{constructor(t,r,o){this.dialog=t,this.mlabService=r,this.route=o,this.dataSource=new _e("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:y.test_types,subtitle:this.laboratory.name,backEnabled:!0},this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("testTypeId"),d.string("testType.nameEn"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.boolean("isFavorite",(e,O)=>{e.isFavorite=O,this.updateItem(e);}).setName(y.favorite).setResponsive(!0),d.boolean("enabled",(e,O)=>{e.enabled=O,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(M=>{e=M;});}).setResponsive(!0),ne.menu([L.edit(e=>this.openSaveComponent(e)),W.divider(),L.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(Me,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().subscribe(r=>{this.dataSource.addOrUpdateItem(r);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(ie,{data:ee.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().subscribe(r=>{this.dataSource.delete(r);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(r=>{this.dataSource.update(r);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};a.ɵfac=function(r){return new(r||a)(T(j),T(C),T(F));},a.ɵcmp=u({type:a,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[f],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(r,o){r&1&&(S(0,"sz-ui-app-bar",1),i(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),i(2,"button",3),c("click",function(){return o.openSaveComponent();}),i(3,"span"),E(4,0),_()()(),i(5,"sz-ui-table",4),c("update",function(){return o.get();}),_()),r&2&&(n("config",o.appBarConfig),s(),n("dataSource",o.dataSource),s(4),n("dataSource",o.dataSource));},dependencies:[U,Z,Te,Se,le,N,H,x],encapsulation:2});let p=a;return p;})();export{et as LaboratoryTestTypesComponent};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/