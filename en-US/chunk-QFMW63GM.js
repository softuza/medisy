import{a as le}from"./chunk-PJZF5Q5L.js";import{q as G,s as V,t as j}from"./chunk-PXOTKN7X.js";import{a as se}from"./chunk-AHRGIM6Y.js";import{a as M}from"./chunk-A4AAMKUB.js";import"./chunk-X55ZRX4G.js";import"./chunk-3M6BPQ6D.js";import"./chunk-ZENDRPYK.js";import{b as C}from"./chunk-6BI6RHQ7.js";import{a as te,b as ie,c as oe,e as re,o as ne,p as ae}from"./chunk-ODDCETUF.js";import{b as P}from"./chunk-IWE7C4JI.js";import"./chunk-OWQ5IK3C.js";import{e as x,j as J,k as K,l as Q,n as W,o as Z,p as ee}from"./chunk-PYX76X2M.js";import{a as U,b as X,d as k,e as w,g as B}from"./chunk-SVUPQDJR.js";import"./chunk-AYQEHXDK.js";import{d as c,g as I,h as T,l as D,n as v,o as L,p as z,s as R,t as F,v as Y}from"./chunk-VJLOVWWV.js";import"./chunk-BI2SJY2U.js";import{a as q}from"./chunk-DHBNYOFD.js";import{a as H}from"./chunk-AALBHV7K.js";import{D as y,G as b,H as $}from"./chunk-MQ7PCRXN.js";import{Ab as _,Kb as f,L as d,Mb as E,Tb as O,Ub as g,Zb as u,bc as h,cb as l,cc as A,db as n,kb as N,la as S,nb as m,yb as a,zb as p}from"./chunk-FNRYDH3S.js";var me=(()=>{let o=class o extends J{constructor(t,e,i,r){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({value:[r.personEmail?.value,[c.required,c.email]],emailType:[r.personEmail?.emailType,[c.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(M),n(z),n(U),n(X));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[N,u],decls:7,vars:3,consts:()=>{let t;t="Description";let e;return e="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","placeholder",t],["formControlName","value","placeholder",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,i){e&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),p()(),_(6,"sz-ui-dialog-actions",5)),e&2&&(m("header",i.header),l(2),m("formGroup",i.form),l(4),m("actions",i.actions));},dependencies:[R,D,I,T,v,L,B,w,j,G,V,Z,K,Q,le],encapsulation:2});let s=o;return s;})();var He=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.dataSource=new ie(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(oe.default([te.text("value","Email"),C.createdAt(),C.menu([P.edit(r=>this.openSaveComponent(r)),P.delete(r=>this.openPersonEmailDeleteComponent(r))])])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{personId:this.person.id,personEmail:t}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openPersonEmailDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.emails.delete(t.personId,t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(k),n(M),n(y));},o.ɵcmp=S({type:o,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let t;t="Emails";let e;return e="Add",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),f(3,2),p(),a(4,"a",3),O(5),h(6,"personName"),p()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return i.get();}),a(8,"button",5),E("click",function(){return i.openSaveComponent();}),a(9,"span"),f(10,6),p()()(),a(11,"sz-ui-table",7),E("update",function(){return i.get();}),p()),e&2&&(l(5),g(A(6,5,i.person)),l(2),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[$,b,Y,F,ae,ne,re,H,se],encapsulation:2});let s=o;return s;})();export{He as PersonEmailsComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/