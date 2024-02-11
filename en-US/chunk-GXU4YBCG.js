import{a as ae}from"./chunk-OS4RUSFR.js";import{a as re,b as ne}from"./chunk-WOPTYA4T.js";import{a as ie}from"./chunk-XEPYHTGG.js";import{a as f}from"./chunk-6EVMRGJX.js";import{a as Z,c as x,e as ee,q as oe,r as te,s as l}from"./chunk-JUGS4EN6.js";import{a as Y}from"./chunk-HJWA2INN.js";import{c as k,h as q,i as w,j as J,l as K,m as Q,n as W}from"./chunk-47MBZVPY.js";import"./chunk-E3FW4FG3.js";import{b as B}from"./chunk-BENUJSGK.js";import{g as E}from"./chunk-2AKRFP2E.js";import{a as V,b as H,d as j,e as U,g as X}from"./chunk-P4QIA4WM.js";import{A as G,v as F,z as $}from"./chunk-22KPLFGU.js";import{J as I,N as R,d as h,f as T,g,k as v,m as A,p as D,q as y,t as z}from"./chunk-BWNHVGBM.js";import"./chunk-IWM4AFTB.js";import{Ea as b,Ga as L}from"./chunk-I73ZQFGG.js";import{Eb as p,Fb as S,Gb as d,M as _,Qb as O,Sb as c,fb as m,gb as n,jc as P,na as u,nb as M,nc as N,oc as C,ub as a}from"./chunk-KN4PZLRS.js";var se=(()=>{let i=class i extends q{constructor(e,o,t,r){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=r,this.form=o.group({value:[r?.personPhone?.value,[h.required]],description:[r?.personPhone?.description,[]],phoneType:[r?.personPhone?.phoneType??re.Mobile,[h.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(f),n(y),n(V),n(H));},i.ɵcmp=u({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[M,P],decls:7,vars:3,consts:()=>{let e;e="Number";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType"],["formControlName","description","label",o],[3,"actions"]];},template:function(o,t){o&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-phone-type",3)(5,"sz-ui-form-field-textarea",4),S()(),d(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",t.header),m(2),a("formGroup",t.form),m(4),a("actions",t.actions));},dependencies:[z,v,T,g,A,D,X,U,Q,w,J,G,F,$,ae],encapsulation:2});let s=i;return s;})();var we=(()=>{let i=class i{constructor(e,o,t){this.dialog=e,this.mpplService=o,this.route=t,this.title=Y.phones,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(l.uuid("id"),l.uuid("personId"),l.stringFormated("phoneType",r=>ne(r.phoneType)),l.string("value"),l.date("createdAt",!1),l.date("updatedAt",!1),Z.menu([E.edit(r=>this.openSaveComponent(r)),E.delete(r=>this.openPersonPhoneDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personPhone:e}}).afterClosed().pipe(_(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonPhoneDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.phones.delete(e.personId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(n(j),n(f),n(I));},i.ɵcmp=u({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[P],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(d(0,"sz-ui-header-info",0),N(1,"personName"),p(2,"sz-ui-table-search-filter",1),c("changed",function(){return t.get();}),p(3,"button",2),c("click",function(){return t.openSaveComponent();}),p(4,"span"),O(5,3),S()()(),p(6,"sz-ui-table",4),c("update",function(){return t.get();}),S()),o&2&&(a("title",t.title)("subtitle",C(1,5,t.person)),m(2),a("dataSource",t.dataSource),m(4),a("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[R,L,b,B,te,oe,ee,ie],encapsulation:2});let s=i;return s;})();export{we as PersonPhonesComponent};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/