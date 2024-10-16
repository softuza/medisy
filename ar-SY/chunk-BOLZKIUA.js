import{a as K,b as W,c as Z,d as ee,e as te}from"./chunk-U6WTYH5D.js";import{c as Me,d as me,e as M,h as pe,i as Ne,j as ue}from"./chunk-CNZLFAFG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{b as Ee,f as H,g as j,h as Q,j as de,k as J}from"./chunk-3ZUSQ25H.js";import{a as R}from"./chunk-4TD4QQPD.js";import"./chunk-VU2DRYWU.js";import{b as Te}from"./chunk-NN2EHEH4.js";import{a as F,b as G,d as le,e as V,g as U}from"./chunk-QHAXF6DJ.js";import{p as k,q as x,r as f,s as q,v as w}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import"./chunk-2VIOUMQX.js";import{d as E,f as y,g as Y,l as B,o as h,r as D,s as $,u as v}from"./chunk-4NISFW37.js";import{a as Oe,b as d,c as re}from"./chunk-RKPZOH5W.js";import"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as X}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{p as _e,s as se,v as z,x as u}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import{Na as Se}from"./chunk-PR5SF5XM.js";import{G as ne,Kb as a,Lb as r,Mb as _,Wb as S,Xb as oe,cb as O,ja as s,n as ae,na as p,nb as b,rc as N,zb as l}from"./chunk-M4TXNJKT.js";import{i as ie}from"./chunk-KEWWYOLQ.js";var fe=T=>i=>i.pipe(ne(g=>{let e="";if(g.error instanceof ErrorEvent)e=g.error.message;else if(g){let o=g;e=o.error.message??o.message??o.statusText,console.log(o.error.code);}return T.open(e,X.close),ae(()=>e);}));var Ce=(()=>{let i=class i extends H{constructor(){let e=s(F);super(e),this.mlabService=s(R),this.fb=s($),this.data=s(G),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={multiple:!0,selectAll:!0},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e,this.form=o.group({enabled:[!0,[E.required]],transferInPrice:[0,[]],transferInEnabled:[!0,[E.required]],transferOutEnabled:[!0,[E.required]],transferOutLaboratoryId:[null,[]],price:[0,[]],isFavorite:[!1,[E.required]],testTypeIds:[null,[E.required]]});}submit(){if(!this.IsValid())return;let e=this.form.value.testTypeIds.map(o=>({enabled:this.form.value.enabled,transferInPrice:this.form.value.transferInPrice,transferInEnabled:this.form.value.transferInEnabled,transferOutEnabled:this.form.value.transferOutEnabled,transferOutLaboratoryId:this.form.value.transferOutLaboratoryId,price:this.form.value.price,isFavorite:this.form.value.isFavorite,testTypeId:o}));this.save(this.mlabService.laboratories.testTypes.batchCreate(this.data.laboratoryId,e));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-import"]],standalone:!0,features:[b,N],decls:28,vars:9,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),o&2&&(l("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),O(2),l("formGroup",t.form),O(),l("source",t.testTypes)("config",t.testTypeSelectConfig),O(23),l("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),O(),l("actions",t.actions));},dependencies:[v,B,y,Y,h,D,J,j,Q,U,V,f,x,te,ee,K,W,Z,w,k,q],encapsulation:2});let T=i;return T;})();var Ae=(()=>{let i=class i extends H{constructor(){let e=s(F);super(e),this.mlabService=s(R),this.fb=s($),this.data=s(G),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({enabled:[t.laboratoryTestType?.enabled??!0,[E.required]],transferInPrice:[t.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[t.laboratoryTestType?.transferInEnabled??!0,[E.required]],transferOutEnabled:[t.laboratoryTestType?.transferOutEnabled??!0,[E.required]],transferOutLaboratoryId:[t.laboratoryTestType?.transferOutLaboratoryId,[]],price:[t.laboratoryTestType?.price??0,[]],isFavorite:[t.laboratoryTestType?.isFavorite??!1,[E.required]],testTypeId:[t.laboratoryTestType?.testTypeId,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[b,N],decls:28,vars:9,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),o&2&&(l("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),O(2),l("formGroup",t.form),O(),l("source",t.testTypes)("config",t.testTypeSelectConfig),O(23),l("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),O(),l("actions",t.actions));},dependencies:[v,B,y,Y,h,D,J,j,Q,U,V,f,x,te,ee,K,W,Z,w,k,q],encapsulation:2});let T=i;return T;})();var Lt=(()=>{let i=class i{constructor(){this.dialog=s(le),this.mlabService=s(R),this.route=s(_e),this.snackbar=s(Te),this.dataSource=new pe("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:X.test_types,subtitle:this.laboratory.name,backEnabled:!0,menu:re.default([d.add(this.openSaveComponent.bind(this)),d.menu([d.search(),d.divider(),d.import(this.openImportComponent.bind(this))])])},this.dataSource.columnDefs.push(M.uuid("id"),M.uuid("testTypeId"),M.icon("isFavorite").setValueGetter(Oe.star).setValueStyle(e=>e.isFavorite?"font-variation-settings: 'FILL' 1":"font-variation-settings: 'FILL' 0").addClassClickable().setClickFn(e=>{e.isFavorite=!e.isFavorite,this.updateItem(e);}).setResponsive(!0),M.string("testType.nameEn"),M.date("createdAt").setResponsive(!0),M.date("updatedAt").setVisible(!1),M.boolean("enabled").setChangeFn((e,o)=>ie(this,null,function*(){e.enabled=o,this.updateItem(e);})).setResponsive(!0),M.menu(re.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openLaboratoryTestTypeDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(Ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openImportComponent(){this.dialog.open(Ce,{data:{laboratoryId:this.laboratory.id}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(de,{data:Ee.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(fe(this.snackbar)).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(Ne(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(a(0,"sz-ui-table-bar",0),oe("changed",function(){return t.get();}),r(),a(1,"sz-ui-table",1),oe("update",function(){return t.get();}),r()),o&2&&(l("config",t.appBarConfig)("dataSource",t.dataSource),O(),l("dataSource",t.dataSource));},dependencies:[se,ue,me,Me,f,Se],encapsulation:2});let T=i;return T;})();export{Lt as LaboratoryTestTypesComponent};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/