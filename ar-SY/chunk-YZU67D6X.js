import{a as se}from"./chunk-6IHMGJXZ.js";import{a as ae}from"./chunk-UR62DX7K.js";import{a as N}from"./chunk-OFMPEXF4.js";import{b as O}from"./chunk-RQPF7GIR.js";import{a as c,b as te,c as ie,e as oe,q as ne,r as re}from"./chunk-4NDBE333.js";import{c as x,h as J,i as K,j as Q,l as W,m as Z,n as ee}from"./chunk-UJAW327Y.js";import{a as X,b as j,d as w,e as k,g as B}from"./chunk-JW5GSDNP.js";import{E as U,z as V}from"./chunk-M2QIPGOP.js";import{d as M,g as D,h as I,l as v,n as R,o as z,p as L,s as b}from"./chunk-DNMCT3KT.js";import{c as f}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as H}from"./chunk-CSFT2WH3.js";import{a as q}from"./chunk-OGDXQP2U.js";import{a as $,d as y,e as F}from"./chunk-KYUPPZUX.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as Y,c as G}from"./chunk-M4TKXCQI.js";import"./chunk-IPZKDZL6.js";import{Bb as a,Cb as s,Db as d,L as S,Nb as P,Pb as E,Wb as g,Xb as A,ac as u,cb as l,db as r,ec as T,fc as h,kb as C,la as p,nb as _}from"./chunk-3QIFGVJ6.js";var me=(()=>{let n=class n extends J{constructor(t,e,i,o){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({firstName:[o.personName?.firstName,[M.required,M.minLength(1)]],lastName:[o.personName?.lastName,[]],middleName:[o.personName?.middleName,[]],languageId:[o.personName?.languageId,[M.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};n.ɵfac=function(e){return new(e||n)(r(N),r(L),r(X),r(j));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[C,u],decls:9,vars:3,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let e;e="\u0627\u0644\u0643\u0646\u064A\u0629";let i;return i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","middleName","label",i],["formControlName","languageId"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1)(3,"div",2),d(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),s(),d(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),s()(),d(8,"sz-ui-dialog-actions",7)),e&2&&(_("header",i.header),l(2),_("formGroup",i.form),l(6),_("actions",i.actions));},dependencies:[b,v,D,I,R,z,B,k,Z,K,Q,U,V,se],encapsulation:2});let m=n;return m;})();var Be=(()=>{let n=class n{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.dataSource=new te(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ie.default([c.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),c.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),c.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),O.createdAt(),O.menu([f.edit(o=>this.openSaveComponent(o)),f.delete(o=>this.openPersonNameDeleteComponent(o))])])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};n.ɵfac=function(e){return new(e||n)(r(w),r(N),r($));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645\u0627\u0621";let e;return e="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),P(3,2),s(),a(4,"a",3),g(5),T(6,"personName"),s()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return i.get();}),a(8,"button",5),E("click",function(){return i.openSaveComponent();}),a(9,"span"),P(10,6),s()()(),a(11,"sz-ui-table",7),E("update",function(){return i.get();}),s()),e&2&&(l(5),A(h(6,5,i.person)),l(2),_("dataSource",i.dataSource),l(4),_("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[F,y,G,Y,re,ne,oe,H,ae],encapsulation:2});let m=n;return m;})();export{Be as PersonNamesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/