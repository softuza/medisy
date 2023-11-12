import{a as se}from"./chunk-UOAULC7S.js";import{q as V,t as U}from"./chunk-PXOTKN7X.js";import{a as ae}from"./chunk-AHRGIM6Y.js";import{a as N}from"./chunk-A4AAMKUB.js";import"./chunk-X55ZRX4G.js";import{b as O}from"./chunk-6BI6RHQ7.js";import{a as c,b as te,c as ie,e as oe,o as ne,p as re}from"./chunk-ODDCETUF.js";import{b as f}from"./chunk-IWE7C4JI.js";import"./chunk-OWQ5IK3C.js";import{e as x,j as J,k as K,l as Q,n as W,o as Z,p as ee}from"./chunk-PYX76X2M.js";import{a as X,b as j,d as w,e as k,g as B}from"./chunk-SVUPQDJR.js";import"./chunk-AYQEHXDK.js";import{d as M,g as D,h as I,l as v,n as R,o as z,p as L,s as b,t as Y,v as G}from"./chunk-VJLOVWWV.js";import"./chunk-BI2SJY2U.js";import{a as q}from"./chunk-DHBNYOFD.js";import{a as H}from"./chunk-AALBHV7K.js";import{D as $,G as y,H as F}from"./chunk-MQ7PCRXN.js";import{Ab as S,Kb as P,L as d,Mb as E,Tb as g,Ub as A,Zb as u,bc as T,cb as l,cc as h,db as r,kb as C,la as p,nb as _,yb as a,zb as s}from"./chunk-FNRYDH3S.js";var me=(()=>{let n=class n extends J{constructor(t,e,i,o){super(i),this.mpplService=t,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({firstName:[o.personName?.firstName,[M.required,M.minLength(1)]],lastName:[o.personName?.lastName,[]],middleName:[o.personName?.middleName,[]],languageId:[o.personName?.languageId,[M.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};n.ɵfac=function(e){return new(e||n)(r(N),r(L),r(X),r(j));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[C,u],decls:9,vars:3,consts:()=>{let t;t="First name";let e;e="Last name";let i;return i="Middle name",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","middleName","label",i],["formControlName","languageId"],[3,"actions"]];},template:function(e,i){e&1&&(S(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1)(3,"div",2),S(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),s(),S(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),s()(),S(8,"sz-ui-dialog-actions",7)),e&2&&(_("header",i.header),l(2),_("formGroup",i.form),l(6),_("actions",i.actions));},dependencies:[b,v,D,I,R,z,B,k,Z,K,Q,U,V,se],encapsulation:2});let m=n;return m;})();var Be=(()=>{let n=class n{constructor(t,e,i){this.dialog=t,this.mpplService=e,this.route=i,this.dataSource=new te(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ie.default([c.text("firstName","First name"),c.text("middleName","Middle name"),c.text("lastName","Last name"),O.createdAt(),O.menu([f.edit(o=>this.openSaveComponent(o)),f.delete(o=>this.openPersonNameDeleteComponent(o))])])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};n.ɵfac=function(e){return new(e||n)(r(w),r(N),r($));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let t;t="Names";let e;return e="Add",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),P(3,2),s(),a(4,"a",3),g(5),T(6,"personName"),s()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return i.get();}),a(8,"button",5),E("click",function(){return i.openSaveComponent();}),a(9,"span"),P(10,6),s()()(),a(11,"sz-ui-table",7),E("update",function(){return i.get();}),s()),e&2&&(l(5),A(h(6,5,i.person)),l(2),_("dataSource",i.dataSource),l(4),_("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[F,y,G,Y,re,ne,oe,H,ae],encapsulation:2});let m=n;return m;})();export{Be as PersonNamesComponent};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/