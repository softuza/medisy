import{a,b as ee,d as te,f as oe,g as re,h as b,k as ie,l as ae}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as C}from"./chunk-YDMDVI6M.js";import{e as x,f as J,g as K,i as Q,j as W,k as Z}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as H}from"./chunk-HKZIVJYM.js";import{g as y}from"./chunk-PNII32UO.js";import{a as $,b as V,d as F,e as G,g as U}from"./chunk-V6ACGGWJ.js";import{l as j,p as q}from"./chunk-VBUQVK7Q.js";import{c as k}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as A}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as u,f as P,g as I,k as R,m as h,p as v,q as D,t as B}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as Y,e as z}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as w,c as X}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as n,Gb as T,Hb as c,M as m,Rb as M,Tb as f,gb as d,hb as _,kc as N,oa as O,ob as g,vb as s}from"./chunk-UDYUYOMJ.js";var ne=(()=>{let i=class i extends x{constructor(t,o,r,e){super(r),this.mlabService=t,this.fb=o,this.dialog=r,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["latinName"]}),this.form=o.group({acceptLocal:[e.laboratoryTestType?.localEnabled??!0,[u.required]],acceptForward:[e.laboratoryTestType?.forwardEnabled??!0,[u.required]],retailPrice:[e.laboratoryTestType?.retailPrice??0,[]],costPrice:[e.laboratoryTestType?.costPrice??0,[]],forwardPrice:[e.laboratoryTestType?.forwardPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[u.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[u.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(C),_(D),_($),_(V));},i.ɵcmp=O({type:i,selectors:[["sz-medisy-mlab-laboratory-test-types-save"]],standalone:!0,features:[g,N],decls:14,vars:4,consts:()=>{let t;t="Test Type";let o;o="Retail Price";let r;r="Cost Price";let e;e="Forward Price";let l;l="Favorite";let E;E="Local Enabled";let L;return L="Forward Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","retailPrice","label",o],["formControlName","costPrice","label",r],["formControlName","forwardPrice","label",e],["formControlName","isFavorite"],l,["formControlName","localEnabled"],E,["formControlName","forwardEnabled"],L,[3,"actions"]];},template:function(o,r){o&1&&(c(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),n(7,"mat-checkbox",6),M(8,7),T(),n(9,"mat-checkbox",8),M(10,9),T(),n(11,"mat-checkbox",10),M(12,11),T()()(),c(13,"sz-ui-dialog-actions",12)),o&2&&(s("header",r.header),d(2),s("formGroup",r.form),d(),s("source",r.testTypes),d(10),s("actions",r.actions));},dependencies:[B,R,P,I,h,v,W,J,K,U,G,b,re,j,q],encapsulation:2});let S=i;return S;})();var we=(()=>{let i=class i{constructor(t,o,r){this.dialog=t,this.mlabService=o,this.route=r,this.title=A.testTypes,this.dataSource=new te(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns.push(a.uuid("id"),a.uuid("laboratoryId"),a.uuid("testTypeId"),a.string("testType.name"),a.number("costPrice"),a.number("forwardPrice"),a.number("retailPrice"),a.date("createdAt",!1),a.date("updatedAt",!1).setFieldNullable(!0),a.boolean("isFavorite",(e,l)=>{e.isFavorite=l,this.updateItem(e);}).setName(A.favorite),a.boolean("localEnabled",(e,l)=>{e.localEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(m(1)).subscribe(E=>{e=E;});}),a.boolean("forwardEnabled",(e,l)=>{e.forwardEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(m(1)).subscribe(E=>{e=E;});}),ee.menu([y.edit(e=>this.openSaveComponent(e)),y.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().pipe(m(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(Q,{data:Z.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(m(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator)).pipe(m(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(_(F),_(C),_(Y));},i.ɵcmp=O({type:i,selectors:[["sz-medisy-mlab-laboratory-test-types"]],standalone:!0,features:[N],decls:6,vars:5,consts:()=>{let t;return t="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(c(0,"sz-ui-header-info",0),n(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),n(2,"button",2),f("click",function(){return r.openSaveComponent();}),n(3,"span"),M(4,3),T()()(),n(5,"sz-ui-table",4),f("update",function(){return r.get();}),T()),o&2&&(s("title",r.title)("subtitle",r.laboratory.name),d(),s("dataSource",r.dataSource),d(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[z,H,ae,ie,oe,b,X,w],encapsulation:2});let S=i;return S;})();export{we as LaboratoryTestTypesComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/