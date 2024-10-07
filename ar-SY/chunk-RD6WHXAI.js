import{a as J,b as K,c as W,d as Z,e as ee}from"./chunk-IBNNL3QX.js";import{a as de,b as Me,c as M,f as me,g as pe,h as Ne}from"./chunk-GM5VOOAO.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as Oe,f as w,g as H,h as j,j as Ee,k as Q}from"./chunk-INGRYE55.js";import{a as R}from"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import{b as le}from"./chunk-UE6VBMXE.js";import{a as G,b as F,d as _e,e as V,g as U}from"./chunk-HESHWLJQ.js";import{c as X,p as x,q as f,r as q}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as E,f as y,g as Y,l as B,o as h,r as D,s as $,u as v}from"./chunk-UR5GDBT7.js";import{a as Se,b as d,c as Te}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as k}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as ae,s as ne,v as z,x as u}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import{Ma as se}from"./chunk-75V32KEJ.js";import{G as ie,Jb as a,Kb as r,Lb as l,Vb as T,Wb as te,bb as s,ja as S,mb as b,n as re,na as p,nc as N,yb as _}from"./chunk-JPONW3XL.js";import{i as oe}from"./chunk-RXNHEMMO.js";var ue=O=>i=>i.pipe(ie(g=>{let e="";if(g.error instanceof ErrorEvent)e=g.error.message;else if(g){let o=g;e=o.error.message??o.message??o.statusText,console.log(o.error.code);}return O.open(e,k.close),re(()=>e);}));var Re=(()=>{let i=class i extends w{constructor(){let e=S(G);super(e),this.mlabService=S(R),this.fb=S($),this.data=S(F),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={multiple:!0},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e,this.form=o.group({enabled:[!0,[E.required]],transferInPrice:[0,[]],transferInEnabled:[!0,[E.required]],transferOutEnabled:[!0,[E.required]],transferOutLaboratoryId:[null,[]],price:[0,[]],isFavorite:[!1,[E.required]],testTypeIds:[null,[E.required]]});}submit(){if(!this.IsValid())return;let e=this.form.value.testTypeIds.map(o=>({enabled:this.form.value.enabled,transferInPrice:this.form.value.transferInPrice,transferInEnabled:this.form.value.transferInEnabled,transferOutEnabled:this.form.value.transferOutEnabled,transferOutLaboratoryId:this.form.value.transferOutLaboratoryId,price:this.form.value.price,isFavorite:this.form.value.isFavorite,testTypeId:o}));this.save(this.mlabService.laboratories.testTypes.batchCreate(this.data.laboratoryId,e));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-import"]],standalone:!0,features:[b,N],decls:28,vars:11,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o,3,"type"],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),l(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),T(6,0),r(),a(7,"mat-checkbox",11),T(8,1),r()(),a(9,"div",9),l(10,"sz-ui-form-field-input",12),r(),l(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),T(16,2),r()(),a(17,"mat-checkbox",14),T(18,3),r(),l(19,"sz-ui-form-field-input",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),T(23,4),r()(),a(24,"mat-checkbox",16),T(25,5),r(),l(26,"sz-ui-form-field-select",17),r()()()(),l(27,"sz-ui-dialog-actions",18)),o&2&&(_("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),_("formGroup",t.form),s(),_("source",t.testTypes)("config",t.testTypeSelectConfig),s(7),_("type","number"),s(9),_("type","number"),s(7),_("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),s(),_("actions",t.actions));},dependencies:[v,B,y,Y,h,D,Q,H,j,U,V,f,x,ee,Z,J,K,W,X,q],encapsulation:2});let O=i;return O;})();var Ce=(()=>{let i=class i extends w{constructor(){let e=S(G);super(e),this.mlabService=S(R),this.fb=S($),this.data=S(F),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:z.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={},this.transferOutLaboratorySelectConfig={emptyOption:!0};let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({enabled:[t.laboratoryTestType?.enabled??!0,[E.required]],transferInPrice:[t.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[t.laboratoryTestType?.transferInEnabled??!0,[E.required]],transferOutEnabled:[t.laboratoryTestType?.transferOutEnabled??!0,[E.required]],transferOutLaboratoryId:[t.laboratoryTestType?.transferOutLaboratoryId,[]],price:[t.laboratoryTestType?.price??0,[]],isFavorite:[t.laboratoryTestType?.isFavorite??!1,[E.required]],testTypeId:[t.laboratoryTestType?.testTypeId,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[b,N],decls:28,vars:11,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o,3,"type"],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",t,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),l(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),T(6,0),r(),a(7,"mat-checkbox",11),T(8,1),r()(),a(9,"div",9),l(10,"sz-ui-form-field-input",12),r(),l(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),T(16,2),r()(),a(17,"mat-checkbox",14),T(18,3),r(),l(19,"sz-ui-form-field-input",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),T(23,4),r()(),a(24,"mat-checkbox",16),T(25,5),r(),l(26,"sz-ui-form-field-select",17),r()()()(),l(27,"sz-ui-dialog-actions",18)),o&2&&(_("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),_("formGroup",t.form),s(),_("source",t.testTypes)("config",t.testTypeSelectConfig),s(7),_("type","number"),s(9),_("type","number"),s(7),_("source",t.laboratories)("config",t.transferOutLaboratorySelectConfig),s(),_("actions",t.actions));},dependencies:[v,B,y,Y,h,D,Q,H,j,U,V,f,x,ee,Z,J,K,W,X,q],encapsulation:2});let O=i;return O;})();var Ct=(()=>{let i=class i{constructor(){this.dialog=S(_e),this.mlabService=S(R),this.route=S(ae),this.snackbar=S(le),this.dataSource=new me("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:k.test_types,subtitle:this.laboratory.name,backEnabled:!0,menu:Te.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search(),d.divider(),d.import(this.openImportComponent.bind(this))])])},this.dataSource.columnDefs.push(M.uuid("id"),M.uuid("testTypeId"),M.icon("isFavorite").setValueGetter(Se.star).setValueStyle(e=>e.isFavorite?"font-variation-settings: 'FILL' 1":"font-variation-settings: 'FILL' 0").addClassClickable().setClickFn(e=>{e.isFavorite=!e.isFavorite,this.updateItem(e);}).setResponsive(!0),M.string("testType.nameEn"),M.date("createdAt").setResponsive(!0),M.date("updatedAt").setVisible(!1),M.boolean("enabled").setChangeFn((e,o)=>oe(this,null,function*(){e.enabled=o,this.updateItem(e);})).setResponsive(!0),M.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openLaboratoryTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(Ce,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openImportComponent(){this.dialog.open(Re,{data:{laboratoryId:this.laboratory.id}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(Ee,{data:Oe.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(ue(this.snackbar)).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(a(0,"sz-ui-table-bar",0),te("changed",function(){return t.get();}),r(),a(1,"sz-ui-table",1),te("update",function(){return t.get();}),r()),o&2&&(_("config",t.appBarConfig)("dataSource",t.dataSource),s(),_("dataSource",t.dataSource));},dependencies:[ne,Ne,Me,de,f,se],encapsulation:2});let O=i;return O;})();export{Ct as LaboratoryTestTypesComponent};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/