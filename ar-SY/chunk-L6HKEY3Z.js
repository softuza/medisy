import{a as Re}from"./chunk-GJYBHDG6.js";import{a as Ie,b as ge}from"./chunk-5FSTBIZZ.js";import{a as Ce}from"./chunk-OBTRVB4A.js";import{a as I}from"./chunk-7ZD52CWE.js";import{a as O}from"./chunk-JRXQDBB2.js";import{g}from"./chunk-AYD4YNQF.js";import"./chunk-ZENDRPYK.js";import{a as C,b as ue,c as ce,e as Ne,o as Oe,p as Te}from"./chunk-UWWSZ6EK.js";import{c as de,g as Pe,i as Me,j as pe,m as fe}from"./chunk-TZHDOS7D.js";import{a as me,b as se,d as Se,e as Ee,g as N}from"./chunk-MLSRSUWT.js";import{j as te,k as oe,l as ie,m as re,n as ne,o as ae,q as _e,t as le}from"./chunk-DPUIQT2Q.js";import{a as q,c as J,d as K,h as Q,i as W}from"./chunk-32W7D3XL.js";import{b,g as G,h as U,l as X,n as B,o as k,p as j,s as x}from"./chunk-UZRVZSRL.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{a as T}from"./chunk-O5KLIVQ3.js";import"./chunk-4KTV3HE2.js";import{a as R}from"./chunk-HSBTPXYW.js";import{e as w}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{b as H,c as V}from"./chunk-45S7AHWB.js";import{Qa as Z,Ra as ee,n as v}from"./chunk-5YRGD4YU.js";import{$b as y,Ab as r,Bb as n,Cb as l,L as P,Mb as p,Ob as f,Ub as Y,Vb as u,Yb as c,cb as d,da as h,db as m,kb as z,la as M,ma as $,nb as s}from"./chunk-MK3KDUIH.js";var Le=(()=>{let o=class o extends Pe{constructor(t,i,e){super(i),this.fb=t,this.dialog=i,this.data=e,this.form=t.group({sex:[e.sex],title:[e.title],startBirthDate:[e.startBirthDate],endBirthDate:[e.endBirthDate],firstName:[e.firstName],lastName:[e.lastName],ssn:[e.ssn],nationalityId:[e.nationalityId],languageId:[e.languageId],motherName:[e.motherName],fatherName:[e.fatherName],middleName:[e.middleName],address:[e.address]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(i){return new(i||o)(m(j),m(me),m(se));},o.ɵcmp=M({type:o,selectors:[["medisy-people-persons-filter"]],standalone:!0,features:[c([]),z,y],decls:28,vars:7,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let i;i="\u0627\u0644\u0643\u0646\u064A\u0629";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637";let a;a="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let S;S="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let D;D="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629";let L;L="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629";let F;F="\u0627\u0644\u0644\u0642\u0628";let A;return A="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",i],["formControlName","middleName","label",e],["formControlName","nationalityId"],["formControlName","ssn","label",a],["formControlName","languageId"],[1,"tw-flex-1"],S,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",D,"formControlName","startBirthDate"],["matEndDate","","placeholder",L,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],["formControlName","sex"],["formControlName","title","label",F],["formControlName","address","label",A],[3,"actions"]];},template:function(i,e){if(i&1&&(l(0,"sz-ui-dialog-header",0),r(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),n(),l(6,"sz-ui-form-field-input",5),r(7,"div",2),l(8,"medisy-form-field-nationality",6)(9,"sz-ui-form-field-input",7),n(),r(10,"div",2),l(11,"medisy-form-field-language",8),r(12,"mat-form-field",9)(13,"mat-label"),p(14,10),n(),r(15,"mat-date-range-input",11),l(16,"input",12)(17,"input",13),n(),r(18,"mat-hint"),u(19,"YYYY-MM-DD - YYYY-MM-DD"),n(),l(20,"mat-datepicker-toggle",14)(21,"mat-date-range-picker",null,15),n()(),r(23,"div",2),l(24,"medisy-form-field-sex",16)(25,"sz-ui-form-field-input",17),n(),l(26,"sz-ui-form-field-input",18),n()(),l(27,"sz-ui-dialog-actions",19)),i&2){let a=Y(22);s("header",e.header),d(2),s("formGroup",e.form),d(13),s("rangePicker",a)("comparisonStart",e.form.controls.startBirthDate.value)("comparisonEnd",e.form.controls.endBirthDate.value),d(5),s("for",a),d(7),s("actions",e.actions);}},dependencies:[x,X,b,G,U,B,k,fe,Me,pe,le,_e,W,Q,q,J,K,ae,te,re,oe,ie,ne,N,Ee,Ie,Ce,ge],encapsulation:2});let _=o;return _;})();var Fe=(()=>{let o=class o{constructor(t,i,e,a){this.dialog=t,this.mpplService=i,this.typeI18nPipe=e,this.personNamePipe=a,this.dataSource=new ue(R.paged()),this.dataSource.addRows(ce.default([C.hyperlink("names.firstName","\u0627\u0644\u0627\u0633\u0645",S=>S.id,S=>a.transform(S),!1),C.text("sex","\u0627\u0644\u062C\u0646\u0633",S=>e.transform(S.sex)),C.date("birthDate","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629")])),this.get();}openFilterComponent(){this.dialog.open(Le,{data:this.dataSource.filterModel}).afterClosed().pipe(P(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}openPersonScanComponent(){this.dialog.open(Re).afterClosed().pipe(P(1)).subscribe(t=>{t&&(this.dataSource.filterModel=R.paged(),this.dataSource.filterModel.ssn=t.ssn,this.get());});}get(){this.mpplService.persons.get(this.dataSource.filterModel).pipe(de(this.dataSource.indicator),P(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(i){return new(i||o)(m(Se),m(O),m(g),m(I));},o.ɵcmp=M({type:o,selectors:[["medisy-people-persons"]],features:[c([g,v,I])],decls:8,vars:4,consts:()=>{let t;return t="\u0627\u0644\u0623\u0641\u0631\u0627\u062F",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],["end","","mat-icon-button","",3,"click"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(r(0,"sz-ui-header-basic")(1,"h5",0),p(2,1),n()(),r(3,"sz-ui-table-filter",2),f("search",function(){return e.get();})("filter",function(){return e.openFilterComponent();}),r(4,"button",3),f("click",function(){return e.openPersonScanComponent();}),r(5,"mat-icon"),u(6,"barcode"),n()()(),r(7,"sz-ui-table",4),f("update",function(){return e.get();}),n()),i&2&&(d(3),s("dataSource",e.dataSource),d(4),s("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[H,Oe,Ne,T,Z],encapsulation:2});let _=o;return _;})();var Ae=[{path:"",component:Fe}];var Lt=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=$({type:o}),o.ɵinj=h({providers:[O],imports:[w.forChild(Ae),N,V,Te,T,ee]});let _=o;return _;})();export{Lt as PersonsModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/