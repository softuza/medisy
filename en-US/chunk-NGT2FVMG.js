import{a as Q,b as J,c as K,d as W,e as Z}from"./chunk-4L4BSYOP.js";import{c as Me,d as me,e as M,h as pe,i as Ne,j as ue}from"./chunk-A7RH7OPD.js";import"./chunk-3XITI2X4.js";import"./chunk-T5KD46MG.js";import{a as j,b as R}from"./chunk-STLANFKR.js";import"./chunk-PMBSWADS.js";import{b as Ee,f as x,g as q,h as w,j as de,k as H}from"./chunk-T7CKDNTJ.js";import{a as f}from"./chunk-TOLTCDO5.js";import"./chunk-RYW6V3XT.js";import{b as le}from"./chunk-EQ5S23CM.js";import{a as F,b as G,d as _e,e as V,g as U}from"./chunk-RTVNYXWL.js";import{p as Se,q as k,t as Te}from"./chunk-JISNI6UW.js";import"./chunk-KZ4HRNEG.js";import"./chunk-35KTI77E.js";import"./chunk-NH65D6KA.js";import{d as E,f as y,g as Y,l as B,o as h,r as D,s as $,u as v}from"./chunk-JYFN7PWQ.js";import{a as Oe,b as d,c as te}from"./chunk-D7AVAVW4.js";import"./chunk-TK4ACOOT.js";import"./chunk-3MDGZ77A.js";import"./chunk-HH25H44W.js";import{a as X}from"./chunk-2XUUKOI3.js";import"./chunk-7KVBI3NK.js";import{p as ae,s as ne,v as z,x as u}from"./chunk-XAXL5TDT.js";import"./chunk-JV5UM3RQ.js";import"./chunk-FDTCNKZ7.js";import{Na as se}from"./chunk-AMW4KFWB.js";import{G as ie,Kb as a,Lb as r,Mb as _,Wb as S,Xb as ee,cb as O,ja as s,n as re,na as p,nb as b,rc as N,zb as l}from"./chunk-3LNQK4XY.js";import{i as oe}from"./chunk-4GJ5P7OP.js";var fe=T=>i=>i.pipe(ie(g=>{let e="";if(g.error instanceof ErrorEvent)e=g.error.message;else if(g){let o=g;e=o.error.message??o.message??o.statusText,console.log(o.error.code);}return T.open(e,X.close),re(()=>e);}));var Ce=(()=>{let i=class i extends x{constructor(){let e=s(F);super(e),this.mlabService=s(f),this.fb=s($),this.data=s(G),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={multiple:!0},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e,this.form=o.group({enabled:[!0,[E.required]],transferInPrice:[0,[]],transferInEnabled:[!0,[E.required]],transferOutEnabled:[!0,[E.required]],transferOutLaboratoryId:[null,[]],price:[0,[]],isFavorite:[!1,[E.required]],testTypeIds:[null,[E.required]]});}submit(){if(!this.IsValid())return;let e=this.form.value.testTypeIds.map(o=>({enabled:this.form.value.enabled,transferInPrice:this.form.value.transferInPrice,transferInEnabled:this.form.value.transferInEnabled,transferOutEnabled:this.form.value.transferOutEnabled,transferOutLaboratoryId:this.form.value.transferOutLaboratoryId,price:this.form.value.price,isFavorite:this.form.value.isFavorite,testTypeId:o}));this.save(this.mlabService.laboratories.testTypes.batchCreate(this.data.laboratoryId,e));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-import"]],standalone:!0,features:[b,N],decls:28,vars:9,consts:()=>{let e;e="Test Type";let o;o="Price";let t;t="Price";let m;m="Laboratory";let C;C="Enabled";let A;A="Favorite";let c;c="Transfer In";let L;L="Enabled";let I;I="Transfer Out";let P;return P="Enabled",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),o&2&&(l("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),O(2),l("formGroup",t.form),O(),l("source",t.testTypes)("config",t.testTypeSelectConfig),O(23),l("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),O(),l("actions",t.actions));},dependencies:[v,B,y,Y,h,D,H,q,w,U,V,R,j,Z,W,Q,J,K,k],encapsulation:2});let T=i;return T;})();var Ae=(()=>{let i=class i extends x{constructor(){let e=s(F);super(e),this.mlabService=s(f),this.fb=s($),this.data=s(G),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({enabled:[t.laboratoryTestType?.enabled??!0,[E.required]],transferInPrice:[t.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[t.laboratoryTestType?.transferInEnabled??!0,[E.required]],transferOutEnabled:[t.laboratoryTestType?.transferOutEnabled??!0,[E.required]],transferOutLaboratoryId:[t.laboratoryTestType?.transferOutLaboratoryId,[]],price:[t.laboratoryTestType?.price??0,[]],isFavorite:[t.laboratoryTestType?.isFavorite??!1,[E.required]],testTypeId:[t.laboratoryTestType?.testTypeId,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[b,N],decls:28,vars:9,consts:()=>{let e;e="Test Type";let o;o="Price";let t;t="Price";let m;m="Laboratory";let C;C="Enabled";let A;A="Favorite";let c;c="Transfer In";let L;L="Enabled";let I;I="Transfer Out";let P;return P="Enabled",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),o&2&&(l("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),O(2),l("formGroup",t.form),O(),l("source",t.testTypes)("config",t.testTypeSelectConfig),O(23),l("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),O(),l("actions",t.actions));},dependencies:[v,B,y,Y,h,D,H,q,w,U,V,R,j,Z,W,Q,J,K,Te,Se,k],encapsulation:2});let T=i;return T;})();var It=(()=>{let i=class i{constructor(){this.dialog=s(_e),this.mlabService=s(f),this.route=s(ae),this.snackbar=s(le),this.dataSource=new pe("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:X.test_types,subtitle:this.laboratory.name,backEnabled:!0,menu:te.default([d.add(this.openSaveComponent.bind(this)),d.menu([d.search(),d.divider(),d.import(this.openImportComponent.bind(this))])])},this.dataSource.columnDefs.push(M.uuid("id"),M.uuid("testTypeId"),M.icon("isFavorite").setValueGetter(Oe.star).setValueStyle(e=>e.isFavorite?"font-variation-settings: 'FILL' 1":"font-variation-settings: 'FILL' 0").addClassClickable().setClickFn(e=>{e.isFavorite=!e.isFavorite,this.updateItem(e);}).setResponsive(!0),M.string("testType.nameEn"),M.date("createdAt").setResponsive(!0),M.date("updatedAt").setVisible(!1),M.boolean("enabled").setChangeFn((e,o)=>oe(this,null,function*(){e.enabled=o,this.updateItem(e);})).setResponsive(!0),M.menu(te.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openLaboratoryTestTypeDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(Ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openImportComponent(){this.dialog.open(Ce,{data:{laboratoryId:this.laboratory.id}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(de,{data:Ee.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(fe(this.snackbar)).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(Ne(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(a(0,"sz-ui-table-bar",0),ee("changed",function(){return t.get();}),r(),a(1,"sz-ui-table",1),ee("update",function(){return t.get();}),r()),o&2&&(l("config",t.appBarConfig)("dataSource",t.dataSource),O(),l("dataSource",t.dataSource));},dependencies:[ne,ue,me,Me,R,se],encapsulation:2});let T=i;return T;})();export{It as LaboratoryTestTypesComponent};/**i18n:240fd72ac85948f7f82c5874ad40d30b083c4df6b346146b5f51aef2bd6e49f2*/