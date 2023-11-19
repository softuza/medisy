import{a as re}from"./chunk-FLMRFWAH.js";import{a as ae}from"./chunk-LE4FS3VA.js";import{a as $}from"./chunk-6CAZFY3U.js";import{a as B,b as Z,c as ee,e as te,f as z,g as f,o as oe,p as ie}from"./chunk-BTAL4QP6.js";import"./chunk-BDKYF43S.js";import{c as H,g as J,h as K,i as R,j as N,l as Q,m as P,n as W}from"./chunk-JUKWJGHA.js";import{a as O,b as v,d as X,e as D,g as I}from"./chunk-LR6DSKQQ.js";import"./chunk-CJ3L35E7.js";import{d as F,g as T,h as M,l as E,n as h,o as g,p as A,s as y}from"./chunk-FZFNR6NR.js";import"./chunk-MTTAGST2.js";import{a as L}from"./chunk-X3ZOFRYL.js";import{b as x}from"./chunk-KYTDMX2G.js";import{a as q}from"./chunk-AQB7U7BU.js";import{a as k,e as V}from"./chunk-4G55JY3H.js";import{i as Y}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as U,Ra as w}from"./chunk-W55BWEJG.js";import{Bb as d,Cb as p,Db as m,L as c,Nb as S,Pb as b,ac as _,bc as G,cb as l,cc as j,db as s,kb as C,la as u,nb as n}from"./chunk-3QIFGVJ6.js";var le=(()=>{let i=class i extends J{constructor(e,t,o){super(t),this.fb=e,this.dialog=t,this.data=o,this.form=e.group({enabled:[o.enabled]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};i.ɵfac=function(t){return new(t||i)(s(A),s(O),s(v));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[C,_],decls:6,vars:3,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),S(4,3),p()()(),m(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(3),n("actions",o.actions));},dependencies:[y,E,T,M,h,g,P,R,N,I,D,f,z],encapsulation:2});let r=i;return r;})();var Ce=()=>[],be=r=>[r],de=(()=>{let i=class i extends K{constructor(e,t,o,a){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=a,this.form=t.group({enabled:[a.laboratoryTestClass?.enabled??!0,[F.required]],testClassId:[a.laboratoryTestClass?.testClassId,[F.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestClass?this.save(this.mlabService.laboratories.testClasses.update(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value)):this.save(this.mlabService.laboratories.testClasses.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(L),s(A),s(O),s(v));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[C,_],decls:7,vars:7,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-test-class",2),d(4,"mat-checkbox",3),S(5,4),p()()(),m(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(1),n("excludeLaboratoryIds",o.data.laboratoryTestClass?G(4,Ce):j(5,be,o.data.laboratoryId)),l(3),n("actions",o.actions));},dependencies:[y,E,T,M,h,g,P,R,N,I,D,f,z,re],encapsulation:2});let r=i;return r;})();var it=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=ae.testClasses,this.dataSource=new Z(q.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ee.default([B.text("testClass","Test Class",a=>a.testClass.name),$.createdAt(),B.checkbox("enabled","Enabled",(a,me)=>{a.enabled=me,this.mlabService.laboratories.testClasses.update(a.laboratoryId,a.id,a).pipe(c(1)).subscribe(pe=>{a=pe;});}),$.menu([Y.edit(a=>{this.openSaveComponent(a);}),Y.delete(a=>{this.openLaboratoryTestClassDeleteComponent(a);})])])),this.get();}openSaveComponent(e){this.dialog.open(de,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:e}}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openFilterComponent(){this.dialog.open(le,{data:this.dataSource.filterModel}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openLaboratoryTestClassDeleteComponent(e){this.dialog.open(Q,{data:W.delete(this.mlabService.laboratories.testClasses.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.testClasses.get(this.laboratory.id,this.dataSource.filterModel).pipe(H(this.dataSource.indicator)).pipe(c(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(X),s(L),s(k));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[_],decls:6,vars:6,consts:()=>{let e;return e="Add",[[3,"title","subTitle"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-info",0),d(1,"sz-ui-table-filter",1),b("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),d(2,"button",2),b("click",function(){return o.openSaveComponent();}),d(3,"span"),S(4,3),p()()(),d(5,"sz-ui-table",4),b("update",function(){return o.get();}),p()),t&2&&(n("title",o.title)("subTitle",o.laboratory.name),l(1),n("dataSource",o.dataSource),l(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[V,x,ie,oe,te,f,w,U],encapsulation:2});let r=i;return r;})();export{it as LaboratoryTestClassesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/