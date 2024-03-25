import{a as S,b as re,d as ie,f as ae,i as ne,j as se}from"./chunk-NKCTOLS4.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{a as A}from"./chunk-5WIX5DGJ.js";import{e as K,f as W,g as Z,i as ee,j as te,k as oe}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as J}from"./chunk-4MXM7XAT.js";import{g as y}from"./chunk-4TWVI3ON.js";import{a as V,b as F,d as G,e as U,g as X}from"./chunk-27MVQMP7.js";import{c as w,n as Q,o as N,s as x}from"./chunk-SU66CAKG.js";import{c as H}from"./chunk-PPJOQ6MW.js";import{b as q}from"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{c as C}from"./chunk-LJX5OH5V.js";import"./chunk-YLP7B5XO.js";import{d as M,f as g,g as P,k as h,m as Y,p as v,q as D,t as B}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{a as $,e as z}from"./chunk-WDXIMTZB.js";import"./chunk-ZMNH44QU.js";import{a as k,c as j}from"./chunk-62CSTUMD.js";import"./chunk-47FGXJPX.js";import"./chunk-AFZEN52O.js";import{Jb as n,Kb as l,Lb as E,P as m,Vb as u,Wb as f,eb as _,fb as T,la as c,mc as b,qb as I,zb as a}from"./chunk-HCTSIB2L.js";var _e=(()=>{let i=class i extends K{constructor(t,o,r,e){super(r),this.mlabService=t,this.fb=o,this.dialog=r,this.data=e,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:[{field:"id",op:q.NotEqual,value:this.data.laboratoryId}]}),this.form=o.group({enabled:[e.laboratoryTestType?.enabled??!0,[M.required]],transferInEnabled:[e.laboratoryTestType?.transferInEnabled??!0,[M.required]],transferOutEnabled:[e.laboratoryTestType?.transferOutEnabled??!0,[M.required]],transferOutLaboratoryId:[e.laboratoryTestType?.transferOutLaboratoryId,[]],price:[e.laboratoryTestType?.price??0,[]],transferPrice:[e.laboratoryTestType?.transferPrice??0,[]],isFavorite:[e.laboratoryTestType?.isFavorite??!1,[M.required]],testTypeId:[e.laboratoryTestType?.testTypeId,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(T(A),T(D),T(V),T(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[I,b],decls:19,vars:8,consts:()=>{let t;t="Test Type";let o;o="Enabled";let r;r="Favorite";let e;e="Price";let s;s="Transfer Price";let d;d="Transfer In Enabled";let R;R="Transfer Out Enabled";let L;return L="Transfer Out Laboratory",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],[1,"sz-form-row"],["formControlName","enabled"],o,["formControlName","isFavorite"],r,["formControlName","price","label",e,3,"type"],["formControlName","transferPrice","label",s,3,"type"],["formControlName","transferInEnabled"],d,["formControlName","transferOutEnabled"],R,["formControlName","transferOutLaboratoryId","label",L,3,"source","emptyOption"],[3,"actions"]];},template:function(o,r){o&1&&(E(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),E(3,"sz-ui-form-field-select",2),n(4,"div",3)(5,"mat-checkbox",4),u(6,5),l(),n(7,"mat-checkbox",6),u(8,7),l()(),n(9,"div",3),E(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),l(),n(12,"div",3)(13,"mat-checkbox",10),u(14,11),l(),n(15,"mat-checkbox",12),u(16,13),l()(),E(17,"sz-ui-form-field-select",14),l()(),E(18,"sz-ui-dialog-actions",15)),o&2&&(a("header",r.header),_(2),a("formGroup",r.form),_(),a("source",r.testTypes),_(7),a("type","number"),_(),a("type","number"),_(6),a("source",r.laboratories)("emptyOption",!0),_(),a("actions",r.actions));},dependencies:[B,h,g,P,Y,v,te,W,Z,X,U,N,Q,w,x],encapsulation:2});let O=i;return O;})();var qe=(()=>{let i=class i{constructor(t,o,r){this.dialog=t,this.mlabService=o,this.route=r,this.title=C.testTypes,this.dataSource=new ie(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(S.uuid("id"),S.uuid("testTypeId"),S.string("testType.name"),S.date("createdAt",!1),S.date("updatedAt",!1),S.boolean("isFavorite",(e,s)=>{e.isFavorite=s,this.updateItem(e);}).setName(C.favorite).setResponsive(!0),S.boolean("enabled",(e,s)=>{e.enabled=s,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(m(1)).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferInEnabled",(e,s)=>{e.transferInEnabled=s,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(m(1)).subscribe(d=>{e=d;});}).setResponsive(!0),S.boolean("transferOutEnabled",(e,s)=>{e.transferOutEnabled=s,this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).pipe(m(1)).subscribe(d=>{e=d;});}).setResponsive(!0),re.menu([y.edit(e=>this.openSaveComponent(e)),y.delete(e=>this.openLaboratoryTestTypeDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:t}}).afterClosed().pipe(m(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(t){this.dialog.open(ee,{data:oe.delete(this.mlabService.laboratories.testTypes.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(m(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(t){this.mlabService.laboratories.testTypes.update(t.laboratoryId,t.id,t).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).pipe(m(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(T(G),T(A),T($));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-types"]],standalone:!0,features:[b],decls:6,vars:5,consts:()=>{let t;return t="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(E(0,"sz-ui-header-info",0),n(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),n(2,"button",2),f("click",function(){return r.openSaveComponent();}),n(3,"span"),u(4,3),l()()(),n(5,"sz-ui-table",4),f("update",function(){return r.get();}),l()),o&2&&(a("title",r.title)("subtitle",r.laboratory.name),_(),a("dataSource",r.dataSource),_(4),a("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[z,J,se,ne,ae,N,j,k],encapsulation:2});let O=i;return O;})();export{qe as LaboratoryTestTypesComponent};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/