import{a as se}from"./chunk-WNTJOM6M.js";import{a as re}from"./chunk-727VSYSF.js";import{a as f}from"./chunk-D4HGYENC.js";import{b as ne}from"./chunk-BE5RJSSS.js";import"./chunk-RCF34KUN.js";import"./chunk-KS5XKLLY.js";import"./chunk-7PVYT5AR.js";import{a as M}from"./chunk-634WJ4ZA.js";import{b as Z,c as x,e as ee,g as oe,s as te,t as ie}from"./chunk-EWJ5VIW6.js";import{c as B,h as k,i as q,j as J,l as K,m as Q,n as W}from"./chunk-AS5U2OT3.js";import{a as V,b as H,d as j,e as U,g as X}from"./chunk-GP3W3GGO.js";import{C as Y,D as G,y as $}from"./chunk-WYIASL3N.js";import{d as P,g as T,h as v,l as D,n as A,o as I,p as b,s as z}from"./chunk-DOVRWRQU.js";import{a as E}from"./chunk-RZPZI5M7.js";import{b as w}from"./chunk-TWS2RBYG.js";import"./chunk-2IBJ7SPQ.js";import{a as y,e as R}from"./chunk-2IOOD4ZB.js";import{i as h}from"./chunk-DESFHGZ3.js";import"./chunk-PLPMFK4N.js";import"./chunk-GNPEYPQP.js";import{Pa as F,Ra as L}from"./chunk-26JDY2BM.js";import{Bb as p,Cb as d,Db as l,L as S,Nb as C,Pb as u,ac as c,cb as m,db as n,ec as O,fc as g,kb as N,la as _,nb as s}from"./chunk-J5YYK5S2.js";var ae=(()=>{let i=class i extends k{constructor(e,o,t,r){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=r,this.form=o.group({value:[r?.personPhone?.value,[P.required]],description:[r?.personPhone?.description,[]],phoneType:[r?.personPhone?.phoneType??ne.Mobile,[P.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(f),n(b),n(V),n(H));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[N,c],decls:7,vars:3,consts:()=>{let e;e="Description";let o;return o="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",e],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),d()(),l(6,"sz-ui-dialog-actions",5)),o&2&&(s("header",t.header),m(2),s("formGroup",t.form),m(4),s("actions",t.actions));},dependencies:[z,D,T,v,A,I,X,U,Q,q,J,G,$,Y,se],encapsulation:2});let a=i;return a;})();var ke=(()=>{let i=class i{constructor(e,o,t){this.dialog=e,this.mpplService=o,this.route=t,this.title=E.phones,this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.dataSource.addRows(x.default([Z.text("value",E.phone),M.createdAt(),M.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openPersonPhoneDeleteComponent(r))])])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personPhone:e}}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonPhoneDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.phones.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.buildRequest()).pipe(B(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(n(j),n(f),n(y));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[c],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(l(0,"sz-ui-header-info",0),O(1,"personName"),p(2,"sz-ui-table-filter",1),u("search",function(){return t.get();}),p(3,"button",2),u("click",function(){return t.openSaveComponent();}),p(4,"span"),C(5,3),d()()(),p(6,"sz-ui-table",4),u("update",function(){return t.get();}),d()),o&2&&(s("title",t.title)("subTitle",g(1,5,t.person)),m(2),s("filter",t.dataSource.filter),m(4),s("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[R,L,F,w,ie,te,oe,re],encapsulation:2});let a=i;return a;})();export{ke as PersonPhonesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/