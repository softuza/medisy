import{a as le}from"./chunk-LAKJ4VOI.js";import{a as se}from"./chunk-7ZD52CWE.js";import{a as M}from"./chunk-7CIDS4TF.js";import{q as G,s as V,t as j}from"./chunk-T2EWQS4V.js";import"./chunk-SRJYHWQS.js";import"./chunk-ZENDRPYK.js";import{c as P}from"./chunk-FUUKJOPV.js";import"./chunk-YSHIJLQQ.js";import{b as C}from"./chunk-CCOUZGWD.js";import{a as te,b as ie,c as oe,e as re,o as ne,p as ae}from"./chunk-VWYIWTAJ.js";import{c as x,h as J,i as K,j as Q,l as W,m as Z,n as ee}from"./chunk-4L7MXCYU.js";import{a as U,b as X,d as k,e as w,g as B}from"./chunk-MLSRSUWT.js";import"./chunk-VNFB3LL3.js";import{d as c,g as I,h as T,l as D,n as v,o as L,p as z,s as R}from"./chunk-IGZ5UQAZ.js";import{a as H}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as q}from"./chunk-HSBTPXYW.js";import{a as y,d as b,e as $}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{a as F,c as Y}from"./chunk-45S7AHWB.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import"./chunk-5YRGD4YU.js";import{$b as u,Ab as a,Bb as p,Cb as _,L as d,Mb as f,Ob as E,Vb as O,Wb as g,cb as l,db as n,dc as h,ec as A,kb as N,la as S,nb as m}from"./chunk-MK3KDUIH.js";var me=(()=>{let o=class o extends J{constructor(t,e,i,r){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({value:[r.personEmail?.value,[c.required,c.email]],emailType:[r.personEmail?.emailType,[c.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(M),n(z),n(U),n(X));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[N,u],decls:7,vars:3,consts:()=>{let t;t="Description";let e;return e="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","placeholder",t],["formControlName","value","placeholder",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,i){e&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),p()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(m("header",i.header),l(2),m("formGroup",i.form),l(4),m("actions",i.actions));},dependencies:[R,D,I,T,v,L,B,w,j,G,V,Z,K,Q,le],encapsulation:2});let s=o;return s;})();var He=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.dataSource=new ie(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(oe.default([te.text("value","Email"),C.createdAt(),C.menu([P.edit(r=>this.openSaveComponent(r)),P.delete(r=>this.openPersonEmailDeleteComponent(r))])])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{personId:this.person.id,personEmail:t}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openPersonEmailDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.emails.delete(t.personId,t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(k),n(M),n(y));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let t;t="Emails";let e;return e="Add",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),f(3,2),p(),a(4,"a",3),O(5),h(6,"personName"),p()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return i.get();}),a(8,"button",5),E("click",function(){return i.openSaveComponent();}),a(9,"span"),f(10,6),p()()(),a(11,"sz-ui-table",7),E("update",function(){return i.get();}),p()),e&2&&(l(5),g(A(6,5,i.person)),l(2),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[$,b,Y,F,ae,ne,re,H,se],encapsulation:2});let s=o;return s;})();export{He as PersonEmailsComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/