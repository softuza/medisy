import{a as Se}from"./chunk-7ZD52CWE.js";import{a as P}from"./chunk-7CIDS4TF.js";import{b as A}from"./chunk-BDAURDQS.js";import{a as te,b as oe,c as ie,e as re,f as se,g as ne,o as ae,p as de}from"./chunk-UWWSZ6EK.js";import{c as H,h as J,i as K,j as Q,l as W,m as Z,n as ee}from"./chunk-TZHDOS7D.js";import{a as X,b as k,d as j,e as w,g as B}from"./chunk-MLSRSUWT.js";import{q as G,s as V,t as U}from"./chunk-DPUIQT2Q.js";import"./chunk-32W7D3XL.js";import{d as M,g as T,h,l as R,n as v,o as I,p as z,s as L}from"./chunk-UZRVZSRL.js";import{c as f}from"./chunk-VXIMUH5R.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{a as q}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as x}from"./chunk-HSBTPXYW.js";import{a as b,d as y,e as $}from"./chunk-7EL7DJOA.js";import"./chunk-YSHIJLQQ.js";import"./chunk-PHZ6OWUT.js";import{a as Y,c as F}from"./chunk-45S7AHWB.js";import"./chunk-5YRGD4YU.js";import{$b as c,Ab as s,Bb as _,Cb as E,L as p,Mb as l,Ob as u,Vb as O,Wb as N,cb as d,db as n,dc as C,ec as g,kb as D,la as m,nb as S}from"./chunk-MK3KDUIH.js";var _e=(()=>{let r=class r extends J{constructor(t,e,o,i){super(o),this.mpplService=t,this.fb=e,this.dialog=o,this.data=i,this.form=e.group({value:[i?.personAddress?.value,[M.required]],description:[i?.personAddress?.description,[]],isPrimary:[i?.personAddress?.isPrimary??!1,[M.required]]});}submit(){this.IsValid()&&(this.data.personAddress?this.save(this.mpplService.persons.addresses.update(this.data.personId,this.data.personAddress.id,this.form.value)):this.save(this.mpplService.persons.addresses.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(P),n(z),n(X),n(k));},r.ɵcmp=m({type:r,selectors:[["medisy-people-person-addresses-save"]],standalone:!0,features:[D,c],decls:8,vars:3,consts:()=>{let t;t="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let e;e="\u0627\u0644\u0648\u0635\u0641";let o;return o="\u0623\u0633\u0627\u0633\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",t],["formControlName","description","label",e],["formControlName","isPrimary"],o,[3,"actions"]];},template:function(e,o){e&1&&(E(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),E(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),s(5,"mat-checkbox",4),l(6,5),_()()(),E(7,"sz-ui-dialog-actions",6)),e&2&&(S("header",o.header),d(2),S("formGroup",o.form),d(5),S("actions",o.actions));},dependencies:[L,R,T,h,v,I,B,w,ne,se,U,G,V,Z,K,Q],encapsulation:2});let a=r;return a;})();var Je=(()=>{let r=class r{constructor(t,e,o){this.dialog=t,this.mpplService=e,this.route=o,this.dataSource=new oe(x.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ie.default([te.text("value","\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),A.createdAt(),A.menu([f.edit(i=>this.openSaveComponent(i)),f.delete(i=>this.openPersonAddressDeleteComponent(i))])])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:{personId:this.person.id,personAddress:t}}).afterClosed().pipe(p(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonAddressDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.addresses.delete(t.personId,t.id),t)}).afterClosed().pipe(p(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.addresses.get(this.person.id,this.dataSource.filterModel).pipe(H(this.dataSource.indicator),p(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n(j),n(P),n(b));},r.ɵcmp=m({type:r,selectors:[["medisy-people-person-addresses"]],standalone:!0,features:[c],decls:12,vars:7,consts:()=>{let t;t="\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646";let e;return e="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(s(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),l(3,2),_(),s(4,"a",3),O(5),C(6,"personName"),_()()(),s(7,"sz-ui-table-filter",4),u("search",function(){return o.get();}),s(8,"button",5),u("click",function(){return o.openSaveComponent();}),s(9,"span"),l(10,6),_()()(),s(11,"sz-ui-table",7),u("update",function(){return o.get();}),_()),e&2&&(d(5),N(g(6,5,o.person)),d(2),S("dataSource",o.dataSource),d(4),S("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[$,y,F,Y,de,ae,re,q,Se],encapsulation:2});let a=r;return a;})();export{Je as PersonAddressesComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/