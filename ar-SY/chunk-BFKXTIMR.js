import{a as ne}from"./chunk-OEO5GVAE.js";import{a as re}from"./chunk-UR62DX7K.js";import{a as f}from"./chunk-L3MA6WSX.js";import{a as P}from"./chunk-5FZ5R4ZJ.js";import{a as M,b as x,c as ee,e as te,q as ie,r as oe}from"./chunk-2DIHYESB.js";import{c as q,h as H,i as J,j as K,l as Q,m as W,n as Z}from"./chunk-JUKWJGHA.js";import{a as V,b as G,d as U,e as j,g as X}from"./chunk-LR6DSKQQ.js";import{E as Y,z as F}from"./chunk-CJ3L35E7.js";import{d as c,g as h,h as T,l as D,n as I,o as v,p as z,s as R}from"./chunk-FZFNR6NR.js";import{a as k}from"./chunk-MTTAGST2.js";import{b as B}from"./chunk-KYTDMX2G.js";import{a as w}from"./chunk-AQB7U7BU.js";import{a as b,e as L}from"./chunk-4G55JY3H.js";import{i as N}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as y,Ra as $}from"./chunk-W55BWEJG.js";import{Bb as m,Cb as d,Db as l,L as _,Nb as g,Pb as u,ac as E,cb as p,db as n,ec as O,fc as A,kb as C,la as S,nb as a}from"./chunk-3QIFGVJ6.js";var ae=(()=>{let r=class r extends H{constructor(t,e,i,o){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({firstName:[o.personName?.firstName,[c.required,c.minLength(1)]],lastName:[o.personName?.lastName,[]],middleName:[o.personName?.middleName,[]],languageId:[o.personName?.languageId,[c.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(f),n(z),n(V),n(G));},r.ɵcmp=S({type:r,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[C,E],decls:9,vars:3,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let e;e="\u0627\u0644\u0643\u0646\u064A\u0629";let i;return i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","middleName","label",i],["formControlName","languageId"],[3,"actions"]];},template:function(e,i){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),d(),l(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),d()(),l(8,"sz-ui-dialog-actions",7)),e&2&&(a("header",i.header),p(2),a("formGroup",i.form),p(6),a("actions",i.actions));},dependencies:[R,D,h,T,I,v,X,j,W,J,K,Y,F,ne],encapsulation:2});let s=r;return s;})();var Be=(()=>{let r=class r{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.title=k.names,this.dataSource=new x(w.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ee.default([M.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),M.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),M.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),P.createdAt(),P.menu([N.edit(o=>this.openSaveComponent(o)),N.delete(o=>this.openPersonNameDeleteComponent(o))])])),this.get();}openSaveComponent(t){this.dialog.open(ae,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(Q,{data:Z.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().pipe(_(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.filterModel).pipe(q(this.dataSource.indicator),_(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n(U),n(f),n(b));},r.ɵcmp=S({type:r,selectors:[["medisy-people-person-names"]],standalone:!0,features:[E],decls:7,vars:8,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(l(0,"sz-ui-header-info",0),O(1,"personName"),m(2,"sz-ui-table-filter",1),u("search",function(){return i.get();}),m(3,"button",2),u("click",function(){return i.openSaveComponent();}),m(4,"span"),g(5,3),d()()(),m(6,"sz-ui-table",4),u("update",function(){return i.get();}),d()),e&2&&(a("title",i.title)("subTitle",A(1,6,i.person)),p(2),a("dataSource",i.dataSource),p(4),a("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[L,$,y,oe,ie,te,B,re],encapsulation:2});let s=r;return s;})();export{Be as PersonNamesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/