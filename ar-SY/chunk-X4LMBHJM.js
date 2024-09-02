import{a as le,b as Se,c as Te,d as Ee,e as de}from"./chunk-IBEGBZPR.js";import{a as ae,d as ie,e as S,h as ne,i as _e,j as se}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as A}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{b as W,f as Z,g as ee,h as te,j as oe,k as re}from"./chunk-JDBQ45YP.js";import"./chunk-ZGUTF2MC.js";import{j as O,k as K}from"./chunk-53DZ6NLX.js";import{a as X,b as k,d as q,e as w,g as x}from"./chunk-7B3GMYBR.js";import{c as j,p as Q,q as c,r as J}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as u,f as B,g as D,l as V,n as v,q as $,r as z,u as G}from"./chunk-QZRJHJEV.js";import{Y as R,r as C,t as f}from"./chunk-4QPQ7IQ3.js";import{a as F,d as U}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{la as H}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as n,Kb as a,Lb as T,Vb as d,Wb as N,bb as s,ja as l,mb as Y,na as m,nc as M,yb as i}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var Oe=(()=>{let r=class r extends Z{constructor(){let t=l(X);super(t),this.mlabService=l(A),this.fb=l(z),this.data=l(k),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:C.Or,filters:f.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:f.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValueSelectConfig={emptyOption:!0,autoSelect:!0,optionContentFn:p=>p.testType.nameEn},this.testTypeSelectConfig={optionSelectedFn:this.testTypeChnaged.bind(this)},this.transferOutLaboratorySelectConfig={emptyOption:!0},this.referenceValues=null;let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({enabled:[e.laboratoryTestType?.enabled??!0,[u.required]],transferInPrice:[e.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[u.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[u.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[u.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[u.required]],referenceValueId:[e.laboratoryTestType?.referenceValueId,[]]}),e.laboratoryTestType&&this.testTypeChnaged(e.laboratoryTestType.testTypeId);}testTypeChnaged(t){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.nameEn"],filterBehavior:C.And,filters:f.create().equalIf("testType.id",t).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(o){return new(o||r)();},r.ɵcmp=m({type:r,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[Y,M],decls:29,vars:13,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let e;e="\u0627\u0644\u0633\u0639\u0631";let p;p="\u0627\u0644\u0633\u0639\u0631";let b;b="\u0627\u0644\u0645\u062E\u0628\u0631";let y;y="\u0645\u0641\u0639\u0644";let L;L="\u0645\u0641\u0636\u0644\u0629";let g;g="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let I;I="\u0645\u0641\u0639\u0644";let P;P="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let h;return h="\u0645\u0641\u0639\u0644",[y,L,g,I,P,h,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source","config"],["formControlName","referenceValueId","label",o,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",e,3,"type"],["multi","",1,"tw-mb-4"],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",p,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",b,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(T(0,"sz-ui-dialog-header",6),n(1,"mat-dialog-content")(2,"form",7),T(3,"sz-ui-form-field-select",8)(4,"sz-ui-form-field-select",9),n(5,"div",10)(6,"mat-checkbox",11),d(7,0),a(),n(8,"mat-checkbox",12),d(9,1),a()(),n(10,"div",10),T(11,"sz-ui-form-field-input",13),a(),T(12,"div",10),n(13,"mat-accordion",14)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),d(17,2),a()(),n(18,"mat-checkbox",15),d(19,3),a(),T(20,"sz-ui-form-field-input",16),a(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),d(24,4),a()(),n(25,"mat-checkbox",17),d(26,5),a(),T(27,"sz-ui-form-field-select",18),a()()()(),T(28,"sz-ui-dialog-actions",19)),o&2&&(i("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),i("formGroup",e.form),s(),i("source",e.testTypes)("config",e.testTypeSelectConfig),s(),i("source",e.referenceValues)("config",e.referenceValueSelectConfig),s(7),i("type","number"),s(9),i("type","number"),s(7),i("source",e.laboratories)("config",e.transferOutLaboratorySelectConfig),s(),i("actions",e.actions));},dependencies:[G,V,B,D,v,$,re,ee,te,x,w,c,Q,de,Ee,le,Se,Te,j,J],encapsulation:2});let E=r;return E;})();var Qe=(()=>{let r=class r{constructor(){this.dialog=l(q),this.mlabService=l(A),this.route=l(F),this.dataSource=new ne("testType.nameEn"),this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:R.test_types,subtitle:this.laboratory.name,backEnabled:!0,menu:K.default().setItems([O.add(this.openSaveComponent.bind(this)),O.menu([O.search()])])},this.dataSource.columnDefs.push(S.uuid("id"),S.uuid("testTypeId"),S.string("testType.nameEn"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),S.boolean("isFavorite",(t,o)=>{t.isFavorite=o,this.updateItem(t);}).setHeaderName(R.favorite).setResponsive(!0),S.boolean("enabled",(t,o)=>{t.enabled=o,this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(e=>{t=e;});}).setResponsive(!0),S.menu([O.edit(this.openSaveComponent.bind(this)),O.divider(),O.delete(this.openLaboratoryTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(Oe,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(oe,{data:W.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(_e(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(o){return new(o||r)();},r.ɵcmp=m({type:r,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(n(0,"sz-ui-table-bar",0),N("changed",function(){return e.get();}),a(),n(1,"sz-ui-table",1),N("update",function(){return e.get();}),a()),o&2&&(i("config",e.appBarConfig)("dataSource",e.dataSource),s(),i("dataSource",e.dataSource));},dependencies:[U,se,ie,ae,c,H],encapsulation:2});let E=r;return E;})();export{Qe as LaboratoryTestTypesComponent};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/