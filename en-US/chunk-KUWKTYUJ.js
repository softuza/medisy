import{a as re}from"./chunk-76NTFD7U.js";import"./chunk-FPEL7HED.js";import{a as h}from"./chunk-634WJ4ZA.js";import{b as M,c as W,e as Z,g as ee,h as te,i as oe,s as ie,t as se}from"./chunk-EWJ5VIW6.js";import{a as E}from"./chunk-SUUMCV2R.js";import{c as X,h as q,i as H,j as x,l as J,m as K,n as Q}from"./chunk-AS5U2OT3.js";import{a as $,b as U,d as j,e as k,g as B}from"./chunk-GP3W3GGO.js";import"./chunk-WYIASL3N.js";import{d as G,g as I,h as O,l as D,n as y,o as P,p as N,s as R}from"./chunk-DOVRWRQU.js";import{a as V}from"./chunk-RZPZI5M7.js";import{a as C}from"./chunk-RXJ3ACVE.js";import{b as w}from"./chunk-TWS2RBYG.js";import"./chunk-2IBJ7SPQ.js";import{a as z,e as L}from"./chunk-2IOOD4ZB.js";import{i as T}from"./chunk-DESFHGZ3.js";import"./chunk-PLPMFK4N.js";import"./chunk-GNPEYPQP.js";import{Pa as F,Ra as Y}from"./chunk-26JDY2BM.js";import{Bb as l,Cb as p,Db as m,L as u,Nb as c,Pb as _,Zb as g,ac as f,bc as v,cb as d,cc as A,db as a,kb as b,la as S,nb as n}from"./chunk-J5YYK5S2.js";var pe=()=>[],ue=r=>[r],ae=(()=>{let i=class i extends q{constructor(e,t,o,s){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=s,this.form=t.group({testClassId:[s.testGroupTestClass?.testClassId,[G.required]],enabled:[s.testGroupTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testGroupTestClass?this.save(this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value)):this.save(this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(a(C),a(N),a($),a(U));},i.ɵcmp=S({type:i,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[g([]),b,f],decls:7,vars:7,consts:()=>{let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-test-class",2),l(4,"mat-checkbox",3),c(5,4),p()()(),m(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),d(2),n("formGroup",o.form),d(1),n("excludeTestGroupIds",o.data.testGroupTestClass?v(4,pe):A(5,ue,o.data.testGroupId)),d(3),n("actions",o.actions));},dependencies:[R,D,I,O,y,P,B,k,oe,te,K,H,x,re],encapsulation:2});let r=i;return r;})();var qe=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=E.testClasses,this.dataSource=new Z(),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(W.default([M.text("testClass.name",E.testClass),h.createdAt(),M.checkbox("enabled",V.enabled,(s,ne)=>{s.enabled=ne,this.updateItem(s);}),h.menu([T.edit(s=>this.openSaveComponent(s)),T.delete(s=>this.openTestTypeTestClassDeleteComponent(s))])])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(J,{data:Q.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.buildRequest()).pipe(X(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(a(j),a(C),a(z));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-info",0),l(1,"sz-ui-table-filter",1),_("search",function(){return o.get();}),l(2,"button",2),_("click",function(){return o.openSaveComponent();}),l(3,"span"),c(4,3),p()()(),l(5,"sz-ui-table",4),_("update",function(){return o.get();}),p()),t&2&&(n("title",o.title)("subTitle",o.testGroup.name),d(1),n("filter",o.dataSource.filter),d(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,Y,F,se,ie,ee,w],encapsulation:2});let r=i;return r;})();export{qe as TestGroupTestClassesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/