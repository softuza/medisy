import{a as ne}from"./chunk-NCQFOGUL.js";import{e as H,f as J,g as K,i as Q,j as W,k as Z}from"./chunk-VT3WYR67.js";import"./chunk-RQNRD2JQ.js";import"./chunk-3UYL57HA.js";import{a as B,b as k,d as j,e as w,g as V}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import{b as M}from"./chunk-M3UESULM.js";import{a as f,b as E,c as ee,d as te,f as oe,g as ie,h as se,p as ae,q as re}from"./chunk-PTJACGQS.js";import"./chunk-UNCYENX6.js";import{b as q}from"./chunk-VRISEVPV.js";import{d as P,g as G,h as I,l as D,n as N,o as R,p as L,s as y,t as F,v as U}from"./chunk-GJY7U5GZ.js";import{a as C}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as X}from"./chunk-PIKBUH2I.js";import{a as x}from"./chunk-QDC3ZTFW.js";import{I as z,L as Y,M as $}from"./chunk-NC2N2FCX.js";import{Ab as a,Bb as S,Cb as _,L as m,Mb as p,Pb as c,Wb as A,Xb as g,Zb as O,ac as T,bc as b,cc as v,eb as l,fb as n,ma as u,mb as h,pb as d}from"./chunk-3CXVAQY6.js";var ue=()=>[],_e=r=>[r],le=(()=>{let s=class s extends H{constructor(e,o,t,i){super(t),this.mlabService=e,this.fb=o,this.dialog=t,this.data=i,this.form=o.group({testClassId:[i.testGroupTestClass?.testClassId,[P.required]],enabled:[i.testGroupTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testGroupTestClass?this.save(this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value)):this.save(this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value)));}};s.ɵfac=function(o){return new(o||s)(n(C),n(L),n(B),n(k));},s.ɵcmp=u({type:s,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[O([]),h,T],decls:7,vars:7,consts:()=>{let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"medisy-form-field-test-class",2),a(4,"mat-checkbox",3),p(5,4),S()()(),_(6,"sz-ui-dialog-actions",5)),o&2&&(d("header",t.header),l(2),d("formGroup",t.form),l(1),d("excludeTestGroupIds",t.data.testGroupTestClass?b(4,ue):v(5,_e,t.data.testGroupId)),l(3),d("actions",t.actions));},dependencies:[y,D,G,I,N,R,V,w,se,ie,W,J,K,ne],encapsulation:2});let r=s;return r;})();var xe=(()=>{let s=class s{constructor(e,o,t){this.dialog=e,this.mlabService=o,this.route=t,this.dataSource=new ee(X.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(te.default([E.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",i=>i.testClass.name),M.createdAt(),E.checkbox("enabled","\u0645\u0641\u0639\u0644",(i,de)=>{i.enabled=de,this.updateItem(i);}),M.menu([f.edit(i=>this.openSaveComponent(i)),f.delete(i=>this.openTestTypeTestClassDeleteComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe(q(this.dataSource.indicator),m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};s.ɵfac=function(o){return new(o||s)(n(j),n(C),n(z));},s.ɵcmp=u({type:s,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[T],decls:11,vars:5,consts:()=>{let e;e="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let o;return o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),p(3,2),S(),a(4,"a",3),A(5),S()()(),a(6,"sz-ui-table-filter",4),c("search",function(){return t.get();}),a(7,"button",5),c("click",function(){return t.openSaveComponent();}),a(8,"span"),p(9,6),S()()(),a(10,"sz-ui-table",7),c("update",function(){return t.get();}),S()),o&2&&(l(5),g(t.testGroup.name),l(1),d("dataSource",t.dataSource),l(4),d("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[$,Y,U,F,re,ae,oe,x],encapsulation:2});let r=s;return r;})();export{xe as TestGroupTestClassesComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/