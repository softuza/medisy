import{a as se}from"./chunk-7W5WZSTY.js";import{a as ne}from"./chunk-UR62DX7K.js";import{a as f}from"./chunk-L3MA6WSX.js";import{b as ae}from"./chunk-S77WVTW6.js";import"./chunk-PPO5LMMV.js";import"./chunk-HJ4RP63E.js";import"./chunk-JI5I5E7Z.js";import{a as h}from"./chunk-5FZ5R4ZJ.js";import{a as x,b as ee,c as oe,e as te,q as ie,r as re}from"./chunk-2DIHYESB.js";import{c as k,h as q,i as J,j as K,l as Q,m as W,n as Z}from"./chunk-JUKWJGHA.js";import{a as G,b as V,d as H,e as j,g as U}from"./chunk-LR6DSKQQ.js";import{D as $,E as Y,z as L}from"./chunk-CJ3L35E7.js";import{d as P,g,h as T,l as v,n as D,o as A,p as I,s as z}from"./chunk-FZFNR6NR.js";import{a as B}from"./chunk-MTTAGST2.js";import{b as w}from"./chunk-KYTDMX2G.js";import{a as X}from"./chunk-AQB7U7BU.js";import{a as b,e as y}from"./chunk-4G55JY3H.js";import{i as E}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as R,Ra as F}from"./chunk-W55BWEJG.js";import{Bb as p,Cb as d,Db as l,L as S,Nb as N,Pb as u,ac as c,cb as m,db as n,ec as C,fc as O,kb as M,la as _,nb as a}from"./chunk-3QIFGVJ6.js";var pe=(()=>{let i=class i extends q{constructor(e,o,t,r){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=r,this.form=o.group({value:[r?.personPhone?.value,[P.required]],description:[r?.personPhone?.description,[]],phoneType:[r?.personPhone?.phoneType??ae.Mobile,[P.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(f),n(I),n(G),n(V));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[M,c],decls:7,vars:3,consts:()=>{let e;e="Description";let o;return o="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",e],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),d()(),l(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",t.header),m(2),a("formGroup",t.form),m(4),a("actions",t.actions));},dependencies:[z,v,g,T,D,A,U,j,W,J,K,Y,L,$,se],encapsulation:2});let s=i;return s;})();var Je=(()=>{let i=class i{constructor(e,o,t){this.dialog=e,this.mpplService=o,this.route=t,this.title=B.phones,this.dataSource=new ee(X.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(oe.default([x.text("value","Phone"),h.createdAt(),h.menu([E.edit(r=>this.openSaveComponent(r)),E.delete(r=>this.openPersonPhoneDeleteComponent(r))])])),this.get();}openSaveComponent(e){this.dialog.open(pe,{data:{personId:this.person.id,personPhone:e}}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonPhoneDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mpplService.persons.phones.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.filterModel).pipe(k(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(n(H),n(f),n(b));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[c],decls:7,vars:8,consts:()=>{let e;return e="Add",[[3,"title","subTitle"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(l(0,"sz-ui-header-info",0),C(1,"personName"),p(2,"sz-ui-table-filter",1),u("search",function(){return t.get();}),p(3,"button",2),u("click",function(){return t.openSaveComponent();}),p(4,"span"),N(5,3),d()()(),p(6,"sz-ui-table",4),u("update",function(){return t.get();}),d()),o&2&&(a("title",t.title)("subTitle",O(1,6,t.person)),m(2),a("dataSource",t.dataSource),m(4),a("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[y,F,R,w,re,ie,te,ne],encapsulation:2});let s=i;return s;})();export{Je as PersonPhonesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/