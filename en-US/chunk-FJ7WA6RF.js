import{a as ne}from"./chunk-REHDKKH2.js";import{b as M}from"./chunk-QAPNOT4J.js";import{a as E,b as ee,c as te,e as oe,f as ie,g as se,o as ae,p as re}from"./chunk-UWWSZ6EK.js";import{c as q,h as H,i as J,j as K,l as Q,m as W,n as Z}from"./chunk-TZHDOS7D.js";import{a as B,b as k,d as j,e as w,g as V}from"./chunk-MLSRSUWT.js";import"./chunk-DPUIQT2Q.js";import"./chunk-32W7D3XL.js";import{d as I,g as P,h as G,l as D,n as N,o as R,p as L,s as y}from"./chunk-UZRVZSRL.js";import{c as f}from"./chunk-VXIMUH5R.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{a as C}from"./chunk-KYTCDYCU.js";import{a as x}from"./chunk-O5KLIVQ3.js";import"./chunk-4KTV3HE2.js";import{a as X}from"./chunk-HSBTPXYW.js";import{a as z,d as Y,e as $}from"./chunk-7EL7DJOA.js";import"./chunk-YSHIJLQQ.js";import"./chunk-PHZ6OWUT.js";import{a as F,c as U}from"./chunk-45S7AHWB.js";import"./chunk-5YRGD4YU.js";import{$b as T,Ab as a,Bb as S,Cb as _,L as m,Mb as p,Ob as c,Vb as g,Wb as A,Yb as O,ac as b,bc as v,cb as l,db as n,kb as h,la as u,nb as d}from"./chunk-MK3KDUIH.js";var ue=()=>[],_e=r=>[r],le=(()=>{let s=class s extends H{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({testClassId:[i.testGroupTestClass?.testClassId,[I.required]],enabled:[i.testGroupTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testGroupTestClass?this.save(this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value)):this.save(this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value)));}};s.ɵfac=function(t){return new(t||s)(n(C),n(L),n(B),n(k));},s.ɵcmp=u({type:s,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[O([]),h,T],decls:7,vars:7,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"medisy-form-field-test-class",2),a(4,"mat-checkbox",3),p(5,4),S()()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(d("header",o.header),l(2),d("formGroup",o.form),l(1),d("excludeTestGroupIds",o.data.testGroupTestClass?b(4,ue):v(5,_e,o.data.testGroupId)),l(3),d("actions",o.actions));},dependencies:[y,D,P,G,N,R,V,w,se,ie,W,J,K,ne],encapsulation:2});let r=s;return r;})();var qe=(()=>{let s=class s{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new ee(X.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(te.default([E.text("testClass","Test class",i=>i.testClass.name),M.createdAt(),E.checkbox("enabled","Enabled",(i,de)=>{i.enabled=de,this.updateItem(i);}),M.menu([f.edit(i=>this.openSaveComponent(i)),f.delete(i=>this.openTestTypeTestClassDeleteComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe(q(this.dataSource.indicator),m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};s.ɵfac=function(t){return new(t||s)(n(j),n(C),n(z));},s.ɵcmp=u({type:s,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[T],decls:11,vars:5,consts:()=>{let e;e="Test Classes";let t;return t="Add",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),p(3,2),S(),a(4,"a",3),g(5),S()()(),a(6,"sz-ui-table-filter",4),c("search",function(){return o.get();}),a(7,"button",5),c("click",function(){return o.openSaveComponent();}),a(8,"span"),p(9,6),S()()(),a(10,"sz-ui-table",7),c("update",function(){return o.get();}),S()),t&2&&(l(5),A(o.testGroup.name),l(1),d("dataSource",o.dataSource),l(4),d("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[$,Y,U,F,re,ae,oe,x],encapsulation:2});let r=s;return r;})();export{qe as TestGroupTestClassesComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/