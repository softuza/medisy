import{a as se}from"./chunk-LNYNLAOJ.js";import{e as J,f as K,g as Q,i as W,j as Z,k as ee}from"./chunk-WR4GG44T.js";import{q as V,t as U}from"./chunk-XIKUJ2RB.js";import{a as ae}from"./chunk-53VWZ5ER.js";import{a as N}from"./chunk-PCAOWVUV.js";import{a as X,b as j,d as w,e as k,g as B}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{b as O}from"./chunk-SYJ5COXL.js";import{a as c,b as te,c as ie,d as oe,n as ne,o as re}from"./chunk-X7AK5RKT.js";import{b as P}from"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as x}from"./chunk-37GZDSHT.js";import"./chunk-FJNI2GB6.js";import{d as M,g as D,h as I,l as v,n as R,o as z,p as L,s as b,t as Y,v as G}from"./chunk-FEFUQJM2.js";import"./chunk-UPQBKJGY.js";import{a as q}from"./chunk-NW5OYJVI.js";import{a as H}from"./chunk-CVLFG5YI.js";import{D as $,G as y,H as F}from"./chunk-RQMADBIK.js";import{Ab as S,Kb as f,L as d,Mb as E,Tb as g,Ub as A,Zb as u,bc as T,cb as l,cc as h,db as r,kb as C,la as p,nb as _,yb as a,zb as s}from"./chunk-3PI2VV3G.js";var me=(()=>{let n=class n extends J{constructor(i,t,e,o){super(e),this.mpplService=i,this.fb=t,this.dialog=e,this.data=o,this.form=t.group({firstName:[o.personName?.firstName,[M.required,M.minLength(1)]],lastName:[o.personName?.lastName,[]],middleName:[o.personName?.middleName,[]],languageId:[o.personName?.languageId,[M.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};n.ɵfac=function(t){return new(t||n)(r(N),r(L),r(X),r(j));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[C,u],decls:9,vars:3,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let t;t="\u0627\u0644\u0643\u0646\u064A\u0629";let e;return e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",t],["formControlName","middleName","label",e],["formControlName","languageId"],[3,"actions"]];},template:function(t,e){t&1&&(S(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1)(3,"div",2),S(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),s(),S(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),s()(),S(8,"sz-ui-dialog-actions",7)),t&2&&(_("header",e.header),l(2),_("formGroup",e.form),l(6),_("actions",e.actions));},dependencies:[b,v,D,I,R,z,B,k,Z,K,Q,U,V,se],encapsulation:2});let m=n;return m;})();var Be=(()=>{let n=class n{constructor(i,t,e){this.dialog=i,this.mpplService=t,this.route=e,this.dataSource=new te(q.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(ie.default([c.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),c.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),c.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),O.createdAt(),O.menu([P.edit(o=>this.openSaveComponent(o)),P.delete(o=>this.openPersonNameDeleteComponent(o))])])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:{personId:this.person.id,personName:i}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openPersonNameDeleteComponent(i){this.dialog.open(W,{data:ee.delete(this.mpplService.persons.names.delete(this.person.id,i.id),i)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.filterModel).pipe(x(this.dataSource.indicator),d(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};n.ɵfac=function(t){return new(t||n)(r(w),r(N),r($));},n.ɵcmp=p({type:n,selectors:[["medisy-people-person-names"]],standalone:!0,features:[u],decls:12,vars:7,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645\u0627\u0621";let t;return t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),f(3,2),s(),a(4,"a",3),g(5),T(6,"personName"),s()()(),a(7,"sz-ui-table-filter",4),E("search",function(){return e.get();}),a(8,"button",5),E("click",function(){return e.openSaveComponent();}),a(9,"span"),f(10,6),s()()(),a(11,"sz-ui-table",7),E("update",function(){return e.get();}),s()),t&2&&(l(5),A(h(6,5,e.person)),l(2),_("dataSource",e.dataSource),l(4),_("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[F,y,G,Y,re,ne,oe,H,ae],encapsulation:2});let m=n;return m;})();export{Be as PersonNamesComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/