import{a as le}from"./chunk-ZXIQHGKC.js";import{e as J,f as K,g as Q,i as W,j as Z,k as ee}from"./chunk-WR4GG44T.js";import{q as H,s as G,t as V}from"./chunk-XIKUJ2RB.js";import{a as se}from"./chunk-53VWZ5ER.js";import{a as c}from"./chunk-PCAOWVUV.js";import{a as j,b as U,d as X,e as k,g as w}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{b as pe}from"./chunk-A4RP7L5Q.js";import"./chunk-SIM3MWAY.js";import{b as h}from"./chunk-SYJ5COXL.js";import{a as oe,b as te,c as ie,d as ne,n as re,o as ae}from"./chunk-X7AK5RKT.js";import{b as M}from"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as x}from"./chunk-37GZDSHT.js";import"./chunk-FJNI2GB6.js";import{d as f,g as D,h as v,l as A,n as I,o as z,p as R,s as b,t as F,v as Y}from"./chunk-FEFUQJM2.js";import"./chunk-UPQBKJGY.js";import{a as B}from"./chunk-NW5OYJVI.js";import{a as q}from"./chunk-CVLFG5YI.js";import{D as y,G as L,H as $}from"./chunk-RQMADBIK.js";import{Ab as _,Kb as E,L as d,Mb as u,Tb as O,Ub as C,Zb as P,bc as g,cb as p,cc as T,db as r,kb as N,la as S,nb as l,yb as a,zb as m}from"./chunk-3PI2VV3G.js";var me=(()=>{let i=class i extends J{constructor(o,t,e,n){super(e),this.mpplService=o,this.fb=t,this.dialog=e,this.data=n,this.form=t.group({value:[n?.personPhone?.value,[f.required]],description:[n?.personPhone?.description,[]],phoneType:[n?.personPhone?.phoneType??pe.Mobile,[f.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(r(c),r(R),r(j),r(U));},i.ɵcmp=S({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[N,P],decls:7,vars:3,consts:()=>{let o;o="\u0627\u0644\u0648\u0635\u0641";let t;return t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",o],["formControlName","value","label",t],["formControlName","phoneType"],[3,"actions"]];},template:function(t,e){t&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),m()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(l("header",e.header),p(2),l("formGroup",e.form),p(4),l("actions",e.actions));},dependencies:[b,A,D,v,I,z,w,k,Z,K,Q,V,H,G,le],encapsulation:2});let s=i;return s;})();var Je=(()=>{let i=class i{constructor(o,t,e){this.dialog=o,this.mpplService=t,this.route=e,this.dataSource=new te(B.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ie.default([oe.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),h.createdAt(),h.menu([M.edit(n=>this.openSaveComponent(n)),M.delete(n=>this.openPersonPhoneDeleteComponent(n))])])),this.get();}openSaveComponent(o){this.dialog.open(me,{data:{personId:this.person.id,personPhone:o}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openPersonPhoneDeleteComponent(o){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.phones.delete(o.personId,o.id),o)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(r(X),r(c),r(y));},i.ɵcmp=S({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[P],decls:12,vars:7,consts:()=>{let o;o="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let t;return t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],o,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),E(3,2),m(),a(4,"a",3),O(5),g(6,"personName"),m()()(),a(7,"sz-ui-table-filter",4),u("search",function(){return e.get();}),a(8,"button",5),u("click",function(){return e.openSaveComponent();}),a(9,"span"),E(10,6),m()()(),a(11,"sz-ui-table",7),u("update",function(){return e.get();}),m()),t&2&&(p(5),C(T(6,5,e.person)),p(2),l("dataSource",e.dataSource),p(4),l("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[$,L,Y,F,q,ae,re,ne,se],encapsulation:2});let s=i;return s;})();export{Je as PersonPhonesComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/