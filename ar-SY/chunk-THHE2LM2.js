import{a as ne}from"./chunk-6SIS7LEU.js";import"./chunk-PXOTKN7X.js";import"./chunk-X55ZRX4G.js";import{b as M}from"./chunk-6BI6RHQ7.js";import{a as f,b as ee,c as te,e as oe,f as ie,g as se,o as ae,p as re}from"./chunk-ODDCETUF.js";import{b as E}from"./chunk-IWE7C4JI.js";import"./chunk-OWQ5IK3C.js";import{e as q,j as H,k as J,l as K,n as Q,o as W,p as Z}from"./chunk-PYX76X2M.js";import{a as B,b as k,d as j,e as w,g as V}from"./chunk-SVUPQDJR.js";import"./chunk-AYQEHXDK.js";import{d as P,g as I,h as G,l as D,n as N,o as R,p as L,s as y,t as F,v as U}from"./chunk-VJLOVWWV.js";import{a as C}from"./chunk-KWGWCJPG.js";import"./chunk-BI2SJY2U.js";import{a as X}from"./chunk-DHBNYOFD.js";import{a as x}from"./chunk-AALBHV7K.js";import{D as z,G as Y,H as $}from"./chunk-MQ7PCRXN.js";import{$b as v,Ab as _,Kb as p,L as m,Mb as c,Tb as g,Ub as A,Wb as O,Zb as T,_b as b,cb as l,db as n,kb as h,la as u,nb as d,yb as a,zb as S}from"./chunk-FNRYDH3S.js";var ue=()=>[],_e=r=>[r],le=(()=>{let s=class s extends H{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({testClassId:[i.testGroupTestClass?.testClassId,[P.required]],enabled:[i.testGroupTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testGroupTestClass?this.save(this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value)):this.save(this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value)));}};s.ɵfac=function(t){return new(t||s)(n(C),n(L),n(B),n(k));},s.ɵcmp=u({type:s,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[O([]),h,T],decls:7,vars:7,consts:()=>{let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"medisy-form-field-test-class",2),a(4,"mat-checkbox",3),p(5,4),S()()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(d("header",o.header),l(2),d("formGroup",o.form),l(1),d("excludeTestGroupIds",o.data.testGroupTestClass?b(4,ue):v(5,_e,o.data.testGroupId)),l(3),d("actions",o.actions));},dependencies:[y,D,I,G,N,R,V,w,se,ie,W,J,K,ne],encapsulation:2});let r=s;return r;})();var qe=(()=>{let s=class s{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.dataSource=new ee(X.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(te.default([f.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",i=>i.testClass.name),M.createdAt(),f.checkbox("enabled","\u0645\u0641\u0639\u0644",(i,de)=>{i.enabled=de,this.updateItem(i);}),M.menu([E.edit(i=>this.openSaveComponent(i)),E.delete(i=>this.openTestTypeTestClassDeleteComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe(q(this.dataSource.indicator),m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};s.ɵfac=function(t){return new(t||s)(n(j),n(C),n(z));},s.ɵcmp=u({type:s,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[T],decls:11,vars:5,consts:()=>{let e;e="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let t;return t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),p(3,2),S(),a(4,"a",3),g(5),S()()(),a(6,"sz-ui-table-filter",4),c("search",function(){return o.get();}),a(7,"button",5),c("click",function(){return o.openSaveComponent();}),a(8,"span"),p(9,6),S()()(),a(10,"sz-ui-table",7),c("update",function(){return o.get();}),S()),t&2&&(l(5),A(o.testGroup.name),l(1),d("dataSource",o.dataSource),l(4),d("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[$,Y,U,F,re,ae,oe,x],encapsulation:2});let r=s;return r;})();export{qe as TestGroupTestClassesComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/