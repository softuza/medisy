import{a as ae}from"./chunk-FLMRFWAH.js";import{a as se}from"./chunk-LE4FS3VA.js";import{a as E}from"./chunk-6CAZFY3U.js";import{a as M,b as Q,c as W,e as Z,f as ee,g as te,o as oe,p as ie}from"./chunk-BTAL4QP6.js";import"./chunk-BDKYF43S.js";import{c as w,h as X,i as q,j as H,l as x,m as J,n as K}from"./chunk-JUKWJGHA.js";import{a as Y,b as $,d as U,e as j,g as k}from"./chunk-LR6DSKQQ.js";import"./chunk-CJ3L35E7.js";import{d as A,g as G,h as I,l as O,n as D,o as y,p as N,s as P}from"./chunk-FZFNR6NR.js";import"./chunk-MTTAGST2.js";import{a as T}from"./chunk-X3ZOFRYL.js";import{b as V}from"./chunk-KYTDMX2G.js";import{a as B}from"./chunk-AQB7U7BU.js";import{a as R,e as z}from"./chunk-4G55JY3H.js";import{i as C}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as L,Ra as F}from"./chunk-W55BWEJG.js";import{Bb as l,Cb as m,Db as p,L as u,Nb as c,Pb as _,Zb as b,ac as f,bc as g,cb as d,cc as v,db as r,kb as h,la as S,nb as n}from"./chunk-3QIFGVJ6.js";var me=()=>[],ue=a=>[a],re=(()=>{let s=class s extends X{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({testClassId:[i.testGroupTestClass?.testClassId,[A.required]],enabled:[i.testGroupTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testGroupTestClass?this.save(this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value)):this.save(this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value)));}};s.ɵfac=function(t){return new(t||s)(r(T),r(N),r(Y),r($));},s.ɵcmp=S({type:s,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[b([]),h,f],decls:7,vars:7,consts:()=>{let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-test-class",2),l(4,"mat-checkbox",3),c(5,4),m()()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),d(2),n("formGroup",o.form),d(1),n("excludeTestGroupIds",o.data.testGroupTestClass?g(4,me):v(5,ue,o.data.testGroupId)),d(3),n("actions",o.actions));},dependencies:[P,O,G,I,D,y,k,j,te,ee,J,q,H,ae],encapsulation:2});let a=s;return a;})();var qe=(()=>{let s=class s{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=se.testClasses,this.dataSource=new Q(B.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(W.default([M.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",i=>i.testClass.name),E.createdAt(),M.checkbox("enabled","\u0645\u0641\u0639\u0644",(i,ne)=>{i.enabled=ne,this.updateItem(i);}),E.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openTestTypeTestClassDeleteComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(x,{data:K.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe(w(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};s.ɵfac=function(t){return new(t||s)(r(U),r(T),r(R));},s.ɵcmp=S({type:s,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[f],decls:6,vars:6,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",0),l(1,"sz-ui-table-filter",1),_("search",function(){return o.get();}),l(2,"button",2),_("click",function(){return o.openSaveComponent();}),l(3,"span"),c(4,3),m()()(),l(5,"sz-ui-table",4),_("update",function(){return o.get();}),m()),t&2&&(n("title",o.title)("subTitle",o.testGroup.name),d(1),n("dataSource",o.dataSource),d(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[z,F,L,ie,oe,Z,V],encapsulation:2});let a=s;return a;})();export{qe as TestGroupTestClassesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/