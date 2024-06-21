import{a as Te,b as Ee,c as Oe,d as de,e as pe}from"./chunk-W7X77SM5.js";import{a as d,b as ne,d as _e,f as se,i as le,j as Se}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import{a as C}from"./chunk-E4K3ZOYS.js";import"./chunk-J3ZGTMT7.js";import{e as ee,f as te,g as oe,i as re,j as ie,k as ae}from"./chunk-I247VJZ7.js";import"./chunk-5XS2JNPH.js";import{a as Z}from"./chunk-3TCVELMY.js";import{h as L}from"./chunk-VN32AWOL.js";import{a as X,b as k,d as q,e as j,g as w}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as Q,j as J,s as K,t as f,v as W}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as y}from"./chunk-NXGV7MLA.js";import"./chunk-4MKCL2OB.js";import{d as m,f as B,g as D,k as v,m as V,p as $,q as z,t as F}from"./chunk-D2M35WMU.js";import{r as R,t as N}from"./chunk-FDTJH5UN.js";import{a as G,e as U}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ia as x,ka as H}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as i,Jb as a,Kb as T,Ub as O,Vb as M,ab as s,bb as E,lc as A,na as c,ob as h,yb as _}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var me=(()=>{let n=class n extends ee{constructor(t,r,o,e){super(o),this.mlabService=t,this.fb=r,this.dialog=o,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:R.Or,filters:N.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:N.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValues=null,this.referenceValueContentFormat=l=>l.testType.nameEn,this.form=r.group({enabled:[e.laboratoryTestType?.enabled??!0,[m.required]],transferInPrice:[e.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[m.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[m.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[m.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[m.required]],referenceValueId:[e.laboratoryTestType?.referenceValueId,[m.required]]}),e.laboratoryTestType&&this.testTypeChnaged(e.laboratoryTestType.testTypeId);}testTypeChnaged(t){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.nameEn"],filterBehavior:R.And,filters:N.create().equalIf("testType.id",t).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};n.ɵfac=function(r){return new(r||n)(E(C),E(z),E(X),E(k));},n.ɵcmp=c({type:n,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[h,A],decls:29,vars:13,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let r;r="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let o;o="\u0627\u0644\u0633\u0639\u0631";let e;e="\u0627\u0644\u0633\u0639\u0631";let l;l="\u0627\u0644\u0645\u062E\u0628\u0631";let u;u="\u0645\u0641\u0639\u0644";let b;b="\u0645\u0641\u0636\u0644\u0629";let I;I="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let g;g="\u0645\u0641\u0639\u0644";let P;P="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let Y;return Y="\u0645\u0641\u0639\u0644",[u,b,I,g,P,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"szOptionSelected","source"],["formControlName","referenceValueId","label",r,3,"source","szAutoSelect","szOptionContentFn"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",o,3,"type"],["multi",""],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",e,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",l,3,"source","emptyOption"],[3,"actions"]];},template:function(r,o){r&1&&(T(0,"sz-ui-dialog-header",6),i(1,"mat-dialog-content")(2,"form",7)(3,"sz-ui-form-field-select",8),M("szOptionSelected",function(l){return o.testTypeChnaged(l);}),a(),T(4,"sz-ui-form-field-select",9),i(5,"div",10)(6,"mat-checkbox",11),O(7,0),a(),i(8,"mat-checkbox",12),O(9,1),a()(),i(10,"div",10),T(11,"sz-ui-form-field-input",13),a(),T(12,"div",10),i(13,"mat-accordion",14)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),O(17,2),a()(),i(18,"mat-checkbox",15),O(19,3),a(),T(20,"sz-ui-form-field-input",16),a(),i(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),O(24,4),a()(),i(25,"mat-checkbox",17),O(26,5),a(),T(27,"sz-ui-form-field-select",18),a()()()(),T(28,"sz-ui-dialog-actions",19)),r&2&&(_("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),_("formGroup",o.form),s(),_("source",o.testTypes),s(),_("source",o.referenceValues)("szAutoSelect",!0)("szOptionContentFn",o.referenceValueContentFormat),s(7),_("type","number"),s(9),_("type","number"),s(7),_("source",o.laboratories)("emptyOption",!0),s(),_("actions",o.actions));},dependencies:[F,v,B,D,V,$,ie,te,oe,w,j,f,K,pe,de,Te,Ee,Oe,Q,W],encapsulation:2});let p=n;return p;})();var et=(()=>{let n=class n{constructor(t,r,o){this.dialog=t,this.mlabService=r,this.route=o,this.title=y.test_types,this.dataSource=new _e(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("testTypeId"),d.string("testType.nameEn"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.boolean("isFavorite",(e,l)=>{e.isFavorite=l,this.updateItem(e);}).setName(y.favorite).setResponsive(!0),d.boolean("enabled",(e,l)=>{e.enabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(u=>{e=u;});}).setResponsive(!0),ne.menu([L.edit(e=>this.openSaveComponent(e)),L.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().subscribe(r=>{this.dataSource.addOrUpdateItem(r);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(re,{data:ae.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().subscribe(r=>{this.dataSource.delete(r);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(r=>{this.dataSource.update(r);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(J(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};n.ɵfac=function(r){return new(r||n)(E(q),E(C),E(G));},n.ɵcmp=c({type:n,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[A],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"title","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(r,o){r&1&&(T(0,"sz-ui-app-bar",1),i(1,"sz-ui-table-search-filter",2),M("changed",function(){return o.get();}),i(2,"button",3),M("click",function(){return o.openSaveComponent();}),i(3,"span"),O(4,0),a()()(),i(5,"sz-ui-table",4),M("update",function(){return o.get();}),a()),r&2&&(_("title",o.title)("backEnabled",!0),s(),_("dataSource",o.dataSource),s(4),_("dataSource",o.dataSource));},dependencies:[U,Z,Se,le,se,f,H,x],encapsulation:2});let p=n;return p;})();export{et as LaboratoryTestTypesComponent};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/