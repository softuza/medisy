import{a as me}from"./chunk-KII3W6UE.js";import{a as se}from"./chunk-UR62DX7K.js";import{a as M}from"./chunk-GTRHAZO2.js";import{a as le}from"./chunk-SKV2MUIB.js";import"./chunk-PPO5LMMV.js";import"./chunk-D66MIGT5.js";import"./chunk-I7NN55R5.js";import{b as C}from"./chunk-A6RSMEH5.js";import{a as te,b as ie,c as oe,e as re,q as ne,r as ae}from"./chunk-CFOMHYBZ.js";import{c as x,h as J,i as K,j as Q,l as W,m as Z,n as ee}from"./chunk-UJAW327Y.js";import{a as j,b as X,d as k,e as w,g as B}from"./chunk-JW5GSDNP.js";import{D as V,E as U,z as G}from"./chunk-ADGNUUMA.js";import{d as c,g as A,h as I,l as v,n as D,o as L,p as z,s as R}from"./chunk-DNMCT3KT.js";import{c as P}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as H}from"./chunk-CSFT2WH3.js";import"./chunk-JJ7KQT5E.js";import{a as q}from"./chunk-HXOIERNB.js";import{a as y,d as b,e as $}from"./chunk-KFH6QGXF.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as F,c as Y}from"./chunk-M4TKXCQI.js";import"./chunk-IPZKDZL6.js";import{Bb as a,Cb as p,Db as _,L as d,Nb as f,Pb as E,Wb as O,Xb as g,ac as u,cb as l,db as n,ec as T,fc as h,kb as N,la as S,nb as m}from"./chunk-3QIFGVJ6.js";var pe=(()=>{let o=class o extends J{constructor(t,e,i,r){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({value:[r.personEmail?.value,[c.required,c.email]],emailType:[r.personEmail?.emailType??le.Private,[c.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(M),n(z),n(j),n(X));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[N,u],decls:7,vars:3,consts:()=>{let t;t="\u0627\u0644\u0648\u0635\u0641";let e;return e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","placeholder",t],["formControlName","value","placeholder",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,i){e&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),p()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(m("header",i.header),l(2),m("formGroup",i.form),l(4),m("actions",i.actions));},dependencies:[R,v,A,I,D,L,B,w,U,G,V,Z,K,Q,me],encapsulation:2});let s=o;return s;})();var Je=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.dataSource=new ie(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(oe.default([te.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),C.createdAt(),C.menu([P.edit(r=>this.openSaveComponent(r)),P.delete(r=>this.openPersonEmailDeleteComponent(r))])])),this.get();}openSaveComponent(t){this.dialog.open(pe,{data:{personId:this.person.id,personEmail:t}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonEmailDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.emails.delete(t.personId,t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(k),n(M),n(y));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let t;t="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let e;return e="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),f(3,2),p(),a(4,"a",3),O(5),T(6,"personName"),p()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return i.get();}),a(8,"button",5),E("click",function(){return i.openSaveComponent();}),a(9,"span"),f(10,6),p()()(),a(11,"sz-ui-table",7),E("update",function(){return i.get();}),p()),e&2&&(l(5),g(h(6,5,i.person)),l(2),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[$,b,Y,F,ae,ne,re,H,se],encapsulation:2});let s=o;return s;})();export{Je as PersonEmailsComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/