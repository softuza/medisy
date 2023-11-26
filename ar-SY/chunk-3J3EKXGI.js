import{a as ne}from"./chunk-UYAJRTBM.js";import{a as f}from"./chunk-2MGUZ4IM.js";import{a as A}from"./chunk-IRYXR6JI.js";import{b as W,c as Z,e as ee,g as te,h as ie,i as oe,s as re,t as se}from"./chunk-ECNTNMPY.js";import{c as B,h as q,i as H,j as x,l as J,m as K,n as Q}from"./chunk-TXP6BBJB.js";import{a as G,b as U,d as j,e as X,g as k}from"./chunk-BVSJJDLC.js";import{C as Y,D as V,y as F}from"./chunk-EBF4GIWM.js";import{d as P,g,h,l as T,n as v,o as I,p as R,s as b}from"./chunk-2OZGA6L4.js";import{a as M}from"./chunk-KMOC5U6F.js";import{b as w}from"./chunk-CSREFB7T.js";import"./chunk-4KZUDT5R.js";import{a as z,e as y}from"./chunk-IMYK7VY7.js";import{i as C}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as L,Ra as $}from"./chunk-KZIHA7KF.js";import{Bb as a,Cb as l,Db as S,L as m,Nb as E,Rb as u,cb as p,cc as c,db as s,gc as O,hc as D,kb as N,la as _,nb as n}from"./chunk-6MBKLWBV.js";var ae=(()=>{let r=class r extends q{constructor(e,t,i,o){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=o,this.form=t.group({value:[o?.personAddress?.value,[P.required]],description:[o?.personAddress?.description,[]],isPrimary:[o?.personAddress?.isPrimary??!1,[P.required]]});}submit(){this.IsValid()&&(this.data.personAddress?this.save(this.mpplService.persons.addresses.update(this.data.personId,this.data.personAddress.id,this.form.value)):this.save(this.mpplService.persons.addresses.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(s(f),s(R),s(G),s(U));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-addresses-save"]],standalone:!0,features:[N,c],decls:8,vars:3,consts:()=>{let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let t;t="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0623\u0633\u0627\u0633\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","description","label",t],["formControlName","isPrimary"],i,[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),a(5,"mat-checkbox",4),E(6,5),l()()(),S(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(5),n("actions",i.actions));},dependencies:[b,T,g,h,v,I,k,X,oe,ie,V,F,Y,K,H,x],encapsulation:2});let d=r;return d;})();var qe=(()=>{let r=class r{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=M.addresses,this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.dataSource.addRows(Z.default([W.text("value",M.address),A.createdAt(),A.menu([C.edit(o=>this.openSaveComponent(o)),C.delete(o=>this.openPersonAddressDeleteComponent(o))])])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{personId:this.person.id,personAddress:e}}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonAddressDeleteComponent(e){this.dialog.open(J,{data:Q.delete(this.mpplService.persons.addresses.delete(e.personId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.addresses.get(this.person.id,this.dataSource.buildRequest()).pipe(B(this.dataSource.indicator),m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(s(j),s(f),s(z));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-addresses"]],standalone:!0,features:[c],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(S(0,"sz-ui-header-info",0),O(1,"personName"),a(2,"sz-ui-table-filter",1),u("search",function(){return i.get();}),a(3,"button",2),u("click",function(){return i.openSaveComponent();}),a(4,"span"),E(5,3),l()()(),a(6,"sz-ui-table",4),u("update",function(){return i.get();}),l()),t&2&&(n("title",i.title)("subTitle",D(1,5,i.person)),p(2),n("filter",i.dataSource.filter),p(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[y,$,L,se,re,te,w,ne],encapsulation:2});let d=r;return d;})();export{qe as PersonAddressesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/