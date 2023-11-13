import{a as ne}from"./chunk-VWJ5B6J7.js";import"./chunk-T2EWQS4V.js";import{c as B}from"./chunk-FUUKJOPV.js";import"./chunk-YSHIJLQQ.js";import{b as $}from"./chunk-CCOUZGWD.js";import{a as Y,b as oe,c as ie,e as ae,f as z,g as f,o as re,p as se}from"./chunk-VWYIWTAJ.js";import{c as Q,g as W,h as Z,i as I,j as v,l as ee,m as P,n as te}from"./chunk-4L7MXCYU.js";import{a as y,b as L,d as H,e as R,g as D}from"./chunk-MLSRSUWT.js";import"./chunk-VNFB3LL3.js";import{d as F,g as M,h as E,l as b,n as A,o as O,p as h,s as g}from"./chunk-IGZ5UQAZ.js";import{a as N}from"./chunk-ANLAVR6W.js";import{a as K}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as J}from"./chunk-HSBTPXYW.js";import{a as w,d as U,e as X}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{a as x,c as q}from"./chunk-45S7AHWB.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import"./chunk-5YRGD4YU.js";import{$b as u,Ab as l,Bb as m,Cb as S,L as _,Mb as p,Ob as T,Vb as G,Wb as k,ac as j,bc as V,cb as d,db as s,kb as C,la as c,nb as n}from"./chunk-MK3KDUIH.js";var me=(()=>{let i=class i extends W{constructor(e,t,o){super(t),this.fb=e,this.dialog=t,this.data=o,this.form=e.group({enabled:[o.enabled]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};i.ɵfac=function(t){return new(t||i)(s(h),s(y),s(L));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[C,u],decls:6,vars:3,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),p(4,3),m()()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",o.header),d(2),n("formGroup",o.form),d(3),n("actions",o.actions));},dependencies:[g,b,M,E,A,O,P,I,v,D,R,f,z],encapsulation:2});let r=i;return r;})();var Me=()=>[],Ee=r=>[r],Se=(()=>{let i=class i extends Z{constructor(e,t,o,a){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=a,this.form=t.group({enabled:[a.laboratoryTestClass?.enabled??!0,[F.required]],testClassId:[a.laboratoryTestClass?.testClassId,[F.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestClass?this.save(this.mlabService.laboratories.testClasses.update(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value)):this.save(this.mlabService.laboratories.testClasses.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(N),s(h),s(y),s(L));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[C,u],decls:7,vars:7,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"medisy-form-field-test-class",2),l(4,"mat-checkbox",3),p(5,4),m()()(),S(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),d(2),n("formGroup",o.form),d(1),n("excludeLaboratoryIds",o.data.laboratoryTestClass?j(4,Me):V(5,Ee,o.data.laboratoryId)),d(3),n("actions",o.actions));},dependencies:[g,b,M,E,A,O,P,I,v,D,R,f,z,ne],encapsulation:2});let r=i;return r;})();var at=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new oe(J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ie.default([Y.text("testClass","Test Class",a=>a.testClass.name),$.createdAt(),Y.checkbox("enabled","Enabled",(a,pe)=>{a.enabled=pe,this.mlabService.laboratories.testClasses.update(a.laboratoryId,a.id,a).pipe(_(1)).subscribe(_e=>{a=_e;});}),$.menu([B.edit(a=>{this.openSaveComponent(a);}),B.delete(a=>{this.openLaboratoryTestClassDeleteComponent(a);})])])),this.get();}openSaveComponent(e){this.dialog.open(Se,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open(me,{data:this.dataSource.filterModel}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openLaboratoryTestClassDeleteComponent(e){this.dialog.open(ee,{data:te.delete(this.mlabService.laboratories.testClasses.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.testClasses.get(this.laboratory.id,this.dataSource.filterModel).pipe(Q(this.dataSource.indicator)).pipe(_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(H),s(N),s(w));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[u],decls:11,vars:5,consts:()=>{let e;e="Test Classes";let t;return t="Add",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),p(3,2),m(),l(4,"a",3),G(5),m()()(),l(6,"sz-ui-table-filter",4),T("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),l(7,"button",5),T("click",function(){return o.openSaveComponent();}),l(8,"span"),p(9,6),m()()(),l(10,"sz-ui-table",7),T("update",function(){return o.get();}),m()),t&2&&(d(5),k(o.laboratory.name),d(1),n("dataSource",o.dataSource),d(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[X,U,K,se,re,ae,f,q,x],encapsulation:2});let r=i;return r;})();export{at as LaboratoryTestClassesComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/