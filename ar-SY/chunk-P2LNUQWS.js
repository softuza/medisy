import{a as K,b as W,c as Z,d as ee,e as te}from"./chunk-6T6YPDEZ.js";import{c as de,d as Me,e as M,h as me,i as pe,j as Ne}from"./chunk-LFBBKJHQ.js";import"./chunk-DJTCXLE6.js";import"./chunk-WR67YADW.js";import"./chunk-DNPEC467.js";import{c as Oe,g as H,h as j,i as Q,k as Ee,l as J}from"./chunk-3VDM3QBA.js";import{a as R}from"./chunk-QOAM24KY.js";import"./chunk-SH55UZR2.js";import{b as Te}from"./chunk-Q76RI7RH.js";import{a as G,b as V,d as le,e as U,g as X}from"./chunk-NXWHFD5J.js";import{m as k,n as x,o as f,p as q,s as w}from"./chunk-YE7OGPQO.js";import"./chunk-QPPKO7QS.js";import"./chunk-NHKTZSL7.js";import"./chunk-JDRER5OW.js";import"./chunk-VLFDLUKF.js";import{d as E,f as Y,g as B,l as h,o as D,r as $,s as v,u as z}from"./chunk-SZ4JOIPB.js";import{b as d,c as re}from"./chunk-ZKT34U6O.js";import"./chunk-OAHNBXW3.js";import"./chunk-6KLEPFJV.js";import{c as g}from"./chunk-TROKCKRK.js";import"./chunk-I5YU2A2W.js";import{p as _e,s as se,v as F,x as u}from"./chunk-OH3VJFHV.js";import"./chunk-KHQUVCMB.js";import"./chunk-O5U4UK7G.js";import{Ma as Se}from"./chunk-IOFQXYPN.js";import{G as ne,Jb as a,Kb as r,Lb as _,Vb as S,Wb as oe,bb as O,ja as s,mb as y,n as ae,na as p,nc as N,yb as l}from"./chunk-4TXFHTB5.js";import{i as ie}from"./chunk-UD7IN7DC.js";var ue=T=>i=>i.pipe(ne(b=>{let e="";if(b.error instanceof ErrorEvent)e=b.error.message;else if(b){let t=b;e=t.error.message??t.message??t.statusText,console.log(t.error.code);}return T.open(e,g.close),ae(()=>e);}));var Re=(()=>{let i=class i extends H{constructor(){super(s(G)),this.mlabService=s(R),this.fb=s(v),this.data=s(V),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:F.Or,filters:u.create().notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={multiple:!0,selectAll:!0},this.transferOutLaboratorySelectConfig={emptyOption:!0};let e=this.fb;this.form=e.group({enabled:[!0,[E.required]],transferInPrice:[0,[]],transferInEnabled:[!0,[E.required]],transferOutEnabled:[!0,[E.required]],transferOutLaboratoryId:[null,[]],price:[0,[]],isFavorite:[!1,[E.required]],testTypeIds:[null,[E.required]]});}submit(){if(!this.IsValid())return;let e=this.form.value.testTypeIds.map(t=>({enabled:this.form.value.enabled,transferInPrice:this.form.value.transferInPrice,transferInEnabled:this.form.value.transferInEnabled,transferOutEnabled:this.form.value.transferOutEnabled,transferOutLaboratoryId:this.form.value.transferOutLaboratoryId,price:this.form.value.price,isFavorite:this.form.value.isFavorite,testTypeId:t}));this.save(this.mlabService.laboratories.testTypes.batchCreate(this.data.laboratoryId,e));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-import"]],standalone:!0,features:[y,N],decls:28,vars:9,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeIds","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",t],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",o],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),t&2&&(l("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),O(2),l("formGroup",o.form),O(),l("source",o.testTypes)("config",o.testTypeSelectConfig),O(23),l("source",o.laboratories)("config",o.transferOutLaboratorySelectConfig),O(),l("actions",o.actions));},dependencies:[z,h,Y,B,D,$,J,j,Q,X,U,f,x,te,ee,K,W,Z,w,k,q],encapsulation:2});let T=i;return T;})();var Ce=(()=>{let i=class i extends H{constructor(){super(s(G)),this.mlabService=s(R),this.fb=s(v),this.data=s(V),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:F.Or,filters:u.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:u.create().notEqual("id",this.data.laboratoryId).filters()}),this.testTypeSelectConfig={},this.transferOutLaboratorySelectConfig={emptyOption:!0};let e=this.fb,t=this.data;this.form=e.group({enabled:[t.laboratoryTestType?.enabled??!0,[E.required]],transferInPrice:[t.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[t.laboratoryTestType?.transferInEnabled??!0,[E.required]],transferOutEnabled:[t.laboratoryTestType?.transferOutEnabled??!0,[E.required]],transferOutLaboratoryId:[t.laboratoryTestType?.transferOutLaboratoryId,[]],price:[t.laboratoryTestType?.price??0,[]],isFavorite:[t.laboratoryTestType?.isFavorite??!1,[E.required]],testTypeId:[t.laboratoryTestType?.testTypeId,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[y,N],decls:28,vars:9,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0627\u0644\u0633\u0639\u0631";let o;o="\u0627\u0644\u0633\u0639\u0631";let m;m="\u0627\u0644\u0645\u062E\u0628\u0631";let C;C="\u0645\u0641\u0639\u0644";let A;A="\u0645\u0641\u0636\u0644\u0629";let c;c="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let L;L="\u0645\u0641\u0639\u0644";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let P;return P="\u0645\u0641\u0639\u0644",[C,A,c,L,I,P,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",t],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",o],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",m,3,"source","config"],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",6),a(1,"mat-dialog-content")(2,"form",7),_(3,"sz-ui-form-field-select",8),a(4,"div",9)(5,"mat-checkbox",10),S(6,0),r(),a(7,"mat-checkbox",11),S(8,1),r()(),a(9,"div",9),_(10,"sz-ui-form-field-input-number",12),r(),_(11,"div",9),a(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),S(16,2),r()(),a(17,"mat-checkbox",14),S(18,3),r(),_(19,"sz-ui-form-field-input-number",15),r(),a(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),S(23,4),r()(),a(24,"mat-checkbox",16),S(25,5),r(),_(26,"sz-ui-form-field-select",17),r()()()(),_(27,"sz-ui-dialog-actions",18)),t&2&&(l("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),O(2),l("formGroup",o.form),O(),l("source",o.testTypes)("config",o.testTypeSelectConfig),O(23),l("source",o.laboratories)("config",o.transferOutLaboratorySelectConfig),O(),l("actions",o.actions));},dependencies:[z,h,Y,B,D,$,J,j,Q,X,U,f,x,te,ee,K,W,Z,w,k,q],encapsulation:2});let T=i;return T;})();var At=(()=>{let i=class i{constructor(){this.dialog=s(le),this.mlabService=s(R),this.route=s(_e),this.snackbar=s(Te),this.dataSource=new me("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:g.test_types,subtitle:this.laboratory.name,backEnabled:!0,menu:re.default([d.add(this.openSaveComponent.bind(this)),d.menu([d.search(),d.divider(),d.import(this.openImportComponent.bind(this))])])},this.dataSource.columnDefs.push(M.uuid("id"),M.uuid("testTypeId"),M.string("testType.nameEn"),M.date("createdAt").setResponsive(!0),M.date("updatedAt").setVisible(!1),M.boolean("isFavorite").setHeaderName(g.favorite).setChangeFn(e=>{e.isFavorite=!e.isFavorite,this.updateItem(e);}).setResponsive(!0),M.boolean("enabled").setChangeFn((e,t)=>ie(this,null,function*(){e.enabled=t,this.updateItem(e);})).setResponsive(!0),M.menu(re.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openLaboratoryTestTypeDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(Ce,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openImportComponent(){this.dialog.open(Re,{data:{laboratoryId:this.laboratory.id}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(Ee,{data:Oe.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(ue(this.snackbar)).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=p({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(a(0,"sz-ui-table-bar",0),oe("changed",function(){return o.get();}),r(),a(1,"sz-ui-table",1),oe("update",function(){return o.get();}),r()),t&2&&(l("config",o.appBarConfig)("dataSource",o.dataSource),O(),l("dataSource",o.dataSource));},dependencies:[se,Ne,Me,de,f,Se],encapsulation:2});let T=i;return T;})();export{At as LaboratoryTestTypesComponent};/**i18n:3baa7a52fa2dfa3c4602a0f5c18b10b468e666f31530cd067c23c1079d9af4f3*/