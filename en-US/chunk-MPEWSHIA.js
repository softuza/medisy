import{a,b as ee,d as te,f as oe,g as re,h as C,k as ie,l as ae}from"./chunk-N7D2VN73.js";import"./chunk-LFSFDEVW.js";import"./chunk-TGYBWL76.js";import{a as A}from"./chunk-5V3HXPKO.js";import{f as Q,g as x,h as J,j as K,k as W,l as Z}from"./chunk-U5UKCG7J.js";import"./chunk-PY52CIOW.js";import"./chunk-VZFPSQUV.js";import{b as H}from"./chunk-QPFPTRON.js";import{j as y}from"./chunk-ZH7ZWFZL.js";import{a as $,b as V,d as F,e as G,g as U}from"./chunk-BZQL4EOY.js";import{l as j,p as q}from"./chunk-BX36AIQ4.js";import{c as k}from"./chunk-L76KK37M.js";import"./chunk-LXF2HH7Z.js";import"./chunk-JPOFBM3O.js";import{c as b}from"./chunk-EYNTFM7E.js";import"./chunk-S4TKY4YA.js";import{d as u,f as g,g as P,k as I,m as h,p as Y,q as D,t as v}from"./chunk-LKKWQT5S.js";import"./chunk-6XVULPHD.js";import{a as B,e as z}from"./chunk-NFMEHFZL.js";import"./chunk-CIDXYEN5.js";import{a as w,c as X}from"./chunk-MMSLTTDI.js";import"./chunk-37WG7HQL.js";import"./chunk-KA2LEAJN.js";import{Hb as n,Ib as d,Jb as m,O,Tb as c,Vb as f,ib as T,jb as _,mc as N,qa as M,qb as L,xb as s}from"./chunk-CP3NWJHY.js";var ne=(()=>{let i=class i extends Q{constructor(t,o,r,e){super(r),this.mlabService=t,this.fb=o,this.dialog=r,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=o.group({locallyEnabled:[e.laboratoryTestType?.locallyEnabled??!0,[u.required]],forwardEnabled:[e.laboratoryTestType?.forwardEnabled??!0,[u.required]],retailPrice:[e.laboratoryTestType?.retailPrice??0,[]],costPrice:[e.laboratoryTestType?.costPrice??0,[]],forwardPrice:[e.laboratoryTestType?.forwardPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[u.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[u.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(A),_(D),_($),_(V));},i.ɵcmp=M({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[L,N],decls:14,vars:4,consts:()=>{let t;t="Test Type";let o;o="Retail Price";let r;r="Cost Price";let e;e="Forward Price";let l;l="Favorite";let E;E="Local Enabled";let R;return R="Forward Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","retailPrice","label",o],["formControlName","costPrice","label",r],["formControlName","forwardPrice","label",e],["formControlName","isFavorite"],l,["formControlName","locallyEnabled"],E,["formControlName","forwardEnabled"],R,[3,"actions"]];},template:function(o,r){o&1&&(m(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),n(7,"mat-checkbox",6),c(8,7),d(),n(9,"mat-checkbox",8),c(10,9),d(),n(11,"mat-checkbox",10),c(12,11),d()()(),m(13,"sz-ui-dialog-actions",12)),o&2&&(s("header",r.header),T(2),s("formGroup",r.form),T(),s("source",r.testTypes),T(10),s("actions",r.actions));},dependencies:[v,I,g,P,h,Y,W,x,J,U,G,C,re,j,q],encapsulation:2});let S=i;return S;})();var we=(()=>{let i=class i{constructor(t,o,r){this.dialog=t,this.mlabService=o,this.route=r,this.title=b.testTypes,this.dataSource=new te(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(a.uuid("id"),a.uuid("testTypeId"),a.string("testType.name"),a.number("costPrice"),a.number("forwardPrice"),a.number("retailPrice"),a.date("createdAt",!1),a.date("updatedAt",!1),a.boolean("isFavorite",(e,l)=>{e.isFavorite=l,this.updateItem(e);}).setName(b.favorite),a.boolean("locallyEnabled",(e,l)=>{e.locallyEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(O(1)).subscribe(E=>{e=E;});}),a.boolean("forwardEnabled",(e,l)=>{e.forwardEnabled=l,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(O(1)).subscribe(E=>{e=E;});}),ee.menu([y.edit(e=>this.openSaveComponent(e)),y.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(K,{data:Z.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).pipe(O(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(_(F),_(A),_(B));},i.ɵcmp=M({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[N],decls:6,vars:5,consts:()=>{let t;return t="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(m(0,"sz-ui-header-info",0),n(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),n(2,"button",2),f("click",function(){return r.openSaveComponent();}),n(3,"span"),c(4,3),d()()(),n(5,"sz-ui-table",4),f("update",function(){return r.get();}),d()),o&2&&(s("title",r.title)("subtitle",r.laboratory.name),T(),s("dataSource",r.dataSource),T(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[z,H,ae,ie,oe,C,X,w],encapsulation:2});let S=i;return S;})();export{we as LaboratoryTestTypesComponent};/**i18n:a4535b3079110d8df5f5c221d1d51c34dbcd8c94b76f3a35f790ba996d6c1a07*/