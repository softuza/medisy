import{a as d,b as Q,d as W,f as Z,h as x,k as ee,l as te}from"./chunk-O5BA4X6Q.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as y}from"./chunk-6KCGB4R6.js";import{e as k,f as w,g as q,i as H,j as J,k as K}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as X}from"./chunk-5X4W32FI.js";import{g as f}from"./chunk-EUJFTM5S.js";import{a as z,b as R,d as L,e as Y,g as F}from"./chunk-V6ACGGWJ.js";import{p as j,q as U}from"./chunk-VBUQVK7Q.js";import{c as G}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as V}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as h,f as g,g as N,k as O,m as I,p as v,q as b,t as P}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as A,e as D}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as B,c as $}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as m,Gb as S,Hb as l,M as c,Rb as M,Tb as u,gb as p,hb as a,hc as C,kc as _,oa as T,ob as E,vb as n}from"./chunk-UDYUYOMJ.js";var ie=(()=>{let o=class o extends k{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[h.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(y),a(b),a(z),a(R));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[C([]),E,_],decls:6,vars:4,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(),n("source",i.specimenTypes),p(2),n("actions",i.actions));},dependencies:[P,O,g,N,I,v,F,Y,x,J,w,q,U,j],encapsulation:2});let s=o;return s;})();var Fe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=V.specimenTypes,this.dataSource=new W(),this.testType=this.route.snapshot.data.testType,this.dataSource.columns.push(d.uuid("id"),d.uuid("specimenTypeId"),d.uuid("testTypeId"),d.string("specimenType.name"),d.date("createdAt",!1),d.date("updatedAt",!1),Q.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ie,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:K.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testType.id,this.dataSource.buildRequest()).pipe(G(this.dataSource.indicator),c(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(L),a(y),a(A));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],standalone:!0,features:[_],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(l(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),u("changed",function(){return i.get();}),m(2,"button",2),u("click",function(){return i.openSaveComponent();}),m(3,"span"),M(4,3),S()()(),m(5,"sz-ui-table",4),u("update",function(){return i.get();}),S()),t&2&&(n("title",i.title)("subtitle",i.testType.name),p(),n("dataSource",i.dataSource),p(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[D,$,B,te,ee,Z,X],encapsulation:2});let s=o;return s;})();export{Fe as TestTypeSpecimenTypesComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/