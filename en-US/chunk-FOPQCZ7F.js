import{a as ae}from"./chunk-KXLONHCZ.js";import{a as re}from"./chunk-X66HYS6W.js";import{a as f}from"./chunk-A4FQTZRA.js";import{a as ne}from"./chunk-PJTL25FT.js";import{a as M}from"./chunk-NXZO5HE7.js";import{b as Z,c as x,e as ee,i as oe,u as te,v as ie}from"./chunk-V53QYHWX.js";import{c as B,h as k,i as q,j as J,l as K,m as Q,n as W}from"./chunk-W2LWMIH7.js";import{a as V,b as H,d as j,e as U,g as X}from"./chunk-VQ3CVIXE.js";import{A as G,v as $,z as Y}from"./chunk-EJRHERCA.js";import{d as P,f as T,g as v,k as D,m as A,p as I,q as z,t as b}from"./chunk-LDFDSR3K.js";import{a as E}from"./chunk-BUSYHZDZ.js";import{b as w}from"./chunk-K7VJTIK7.js";import"./chunk-4VFLSYB5.js";import{a as y,e as R}from"./chunk-E2DYYESB.js";import{i as h}from"./chunk-R54FJ7AR.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ea as L,Ga as F}from"./chunk-TT7ZQ2V6.js";import{Eb as p,Fb as d,Gb as l,M as S,Qb as C,Sb as u,fb as m,gb as n,jc as c,na as _,nb as N,nc as O,oc as g,ub as a}from"./chunk-CQJO6ZYU.js";var se=(()=>{let i=class i extends k{constructor(e,o,t,r){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=r,this.form=o.group({value:[r?.personPhone?.value,[P.required]],description:[r?.personPhone?.description,[]],phoneType:[r?.personPhone?.phoneType??ne.Mobile,[P.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(f),n(z),n(V),n(H));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[N,c],decls:7,vars:3,consts:()=>{let e;e="Number";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType"],["formControlName","description","label",o],[3,"actions"]];},template:function(o,t){o&1&&(l(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-phone-type",3)(5,"sz-ui-form-field-textarea",4),d()(),l(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",t.header),m(2),a("formGroup",t.form),m(4),a("actions",t.actions));},dependencies:[b,D,T,v,A,I,X,U,Q,q,J,G,$,Y,ae],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{constructor(e,o,t){this.dialog=e,this.mpplService=o,this.route=t,this.title=E.phones,this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.dataSource.addRows(x.default([Z.text("value",E.phone),M.createdAt(),M.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openPersonPhoneDeleteComponent(r))])])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personPhone:e}}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonPhoneDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.phones.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.buildRequest()).pipe(B(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(n(j),n(f),n(y));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[c],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subTitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(l(0,"sz-ui-header-info",0),O(1,"personName"),p(2,"sz-ui-table-search-filter",1),u("changed",function(){return t.get();}),p(3,"button",2),u("click",function(){return t.openSaveComponent();}),p(4,"span"),C(5,3),d()()(),p(6,"sz-ui-table",4),u("update",function(){return t.get();}),d()),o&2&&(a("title",t.title)("subTitle",g(1,5,t.person)),m(2),a("dataSource",t.dataSource),m(4),a("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[R,F,L,w,ie,te,oe,re],encapsulation:2});let s=i;return s;})();export{ke as PersonPhonesComponent};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/