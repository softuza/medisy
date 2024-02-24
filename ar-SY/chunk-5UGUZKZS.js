import{a,b as ee,d as te,f as oe,g as re,h as C,k as ie,l as ae}from"./chunk-O5BA4X6Q.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as A}from"./chunk-6KCGB4R6.js";import{e as x,f as J,g as K,i as Q,j as W,k as Z}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as H}from"./chunk-5X4W32FI.js";import{g as R}from"./chunk-EUJFTM5S.js";import{a as $,b as V,d as F,e as G,g as U}from"./chunk-V6ACGGWJ.js";import{l as j,p as q}from"./chunk-VBUQVK7Q.js";import{c as k}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as b}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as u,f as g,g as P,k as I,m as h,p as Y,q as v,t as D}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as B,e as z}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as w,c as X}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as n,Gb as d,Hb as m,M as O,Rb as c,Tb as f,gb as T,hb as _,kc as N,oa as M,ob as L,vb as s}from"./chunk-UDYUYOMJ.js";var ne=(()=>{let i=class i extends x{constructor(t,o,r,e){super(r),this.mlabService=t,this.fb=o,this.dialog=r,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["latinName"]}),this.form=o.group({acceptLocal:[e.laboratoryTestType?.localEnabled??!0,[u.required]],acceptForward:[e.laboratoryTestType?.forwardEnabled??!0,[u.required]],retailPrice:[e.laboratoryTestType?.retailPrice??0,[]],costPrice:[e.laboratoryTestType?.costPrice??0,[]],forwardPrice:[e.laboratoryTestType?.forwardPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[u.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[u.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(A),_(v),_($),_(V));},i.ɵcmp=M({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[L,N],decls:14,vars:4,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let o;o="\u0633\u0639\u0631 \u0627\u0644\u062A\u062C\u0632\u0626\u0629";let r;r="\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u0641\u0629";let e;e="\u0633\u0639\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";let l;l="\u0645\u0641\u0636\u0644\u0629";let E;E="\u062A\u0641\u0639\u064A\u0644 \u0628\u0627\u0644\u0645\u0643\u0627\u0646";let y;return y="\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","retailPrice","label",o],["formControlName","costPrice","label",r],["formControlName","forwardPrice","label",e],["formControlName","isFavorite"],l,["formControlName","localEnabled"],E,["formControlName","forwardEnabled"],y,[3,"actions"]];},template:function(o,r){o&1&&(m(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),n(7,"mat-checkbox",6),c(8,7),d(),n(9,"mat-checkbox",8),c(10,9),d(),n(11,"mat-checkbox",10),c(12,11),d()()(),m(13,"sz-ui-dialog-actions",12)),o&2&&(s("header",r.header),T(2),s("formGroup",r.form),T(),s("source",r.testTypes),T(10),s("actions",r.actions));},dependencies:[D,I,g,P,h,Y,W,J,K,U,G,C,re,j,q],encapsulation:2});let S=i;return S;})();var we=(()=>{let i=class i{constructor(t,o,r){this.dialog=t,this.mlabService=o,this.route=r,this.title=b.testTypes,this.dataSource=new te(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns.push(a.uuid("id"),a.uuid("laboratoryId"),a.uuid("testTypeId"),a.string("testType.name"),a.number("costPrice"),a.number("forwardPrice"),a.number("retailPrice"),a.date("createdAt",!1),a.date("updatedAt",!1).setFieldNullable(!0),a.boolean("isFavorite",(e,l)=>{e.isFavorite=l,this.updateItem(e);}).setName(b.favorite),a.boolean("localEnabled",(e,l)=>{e.localEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(O(1)).subscribe(E=>{e=E;});}),a.boolean("forwardEnabled",(e,l)=>{e.forwardEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(O(1)).subscribe(E=>{e=E;});}),ee.menu([R.edit(e=>this.openSaveComponent(e)),R.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(Q,{data:Z.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator)).pipe(O(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(_(F),_(A),_(B));},i.ɵcmp=M({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:6,vars:5,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(m(0,"sz-ui-header-info",0),n(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),n(2,"button",2),f("click",function(){return r.openSaveComponent();}),n(3,"span"),c(4,3),d()()(),n(5,"sz-ui-table",4),f("update",function(){return r.get();}),d()),o&2&&(s("title",r.title)("subtitle",r.laboratory.name),T(),s("dataSource",r.dataSource),T(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[z,H,ae,ie,oe,C,X,w],encapsulation:2});let S=i;return S;})();export{we as LaboratoryTestTypesComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/