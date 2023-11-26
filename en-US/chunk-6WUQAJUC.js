import{a as re}from"./chunk-VXFC2NJL.js";import{a as oe}from"./chunk-UYAJRTBM.js";import{a as N}from"./chunk-2MGUZ4IM.js";import"./chunk-UXGFQGEN.js";import{a as P}from"./chunk-IRYXR6JI.js";import{b as M,c as Z,e as x,g as ee,s as te,t as ie}from"./chunk-ECNTNMPY.js";import{c as k,h as q,i as H,j as J,l as K,m as Q,n as W}from"./chunk-TXP6BBJB.js";import{a as V,b as G,d as U,e as j,g as X}from"./chunk-BVSJJDLC.js";import{D as Y,y as F}from"./chunk-EBF4GIWM.js";import{d as f,g as h,h as T,l as D,n as I,o as v,p as z,s as R}from"./chunk-2OZGA6L4.js";import{a as w}from"./chunk-KMOC5U6F.js";import{b as B}from"./chunk-CSREFB7T.js";import"./chunk-4KZUDT5R.js";import{a as L,e as b}from"./chunk-IMYK7VY7.js";import{i as c}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as y,Ra as $}from"./chunk-KZIHA7KF.js";import{Bb as m,Cb as d,Db as l,L as _,Nb as O,Rb as u,cb as p,cc as E,db as n,gc as g,hc as A,kb as C,la as S,nb as a}from"./chunk-6MBKLWBV.js";var ne=(()=>{let r=class r extends q{constructor(t,e,i,o){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({firstName:[o.personName?.firstName,[f.required,f.minLength(1)]],lastName:[o.personName?.lastName,[]],middleName:[o.personName?.middleName,[]],languageId:[o.personName?.languageId,[f.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(N),n(z),n(V),n(G));},r.ɵcmp=S({type:r,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[C,E],decls:9,vars:3,consts:()=>{let t;t="First name";let e;e="Last name";let i;return i="Middle name",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","middleName","label",i],["formControlName","languageId"],[3,"actions"]];},template:function(e,i){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),d(),l(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),d()(),l(8,"sz-ui-dialog-actions",7)),e&2&&(a("header",i.header),p(2),a("formGroup",i.form),p(6),a("actions",i.actions));},dependencies:[R,D,h,T,I,v,X,j,Q,H,J,Y,F,re],encapsulation:2});let s=r;return s;})();var Xe=(()=>{let r=class r{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.title=w.names,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.addRows(Z.default([M.text("firstName","First name"),M.text("middleName","Middle name"),M.text("lastName","Last name"),P.createdAt(),P.menu([c.edit(o=>this.openSaveComponent(o)),c.delete(o=>this.openPersonNameDeleteComponent(o))])])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(K,{data:W.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator),_(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n(U),n(N),n(L));},r.ɵcmp=S({type:r,selectors:[["medisy-people-person-names"]],standalone:!0,features:[E],decls:7,vars:7,consts:()=>{let t;return t="Add",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(l(0,"sz-ui-header-info",0),g(1,"personName"),m(2,"sz-ui-table-filter",1),u("search",function(){return i.get();}),m(3,"button",2),u("click",function(){return i.openSaveComponent();}),m(4,"span"),O(5,3),d()()(),m(6,"sz-ui-table",4),u("update",function(){return i.get();}),d()),e&2&&(a("title",i.title)("subTitle",A(1,5,i.person)),p(2),a("filter",i.dataSource.filter),p(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[b,$,y,ie,te,ee,B,oe],encapsulation:2});let s=r;return s;})();export{Xe as PersonNamesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/