import{b as oe}from"./chunk-OVRZOAIC.js";import{a as c}from"./chunk-ITVYYV4T.js";import{a as s,b as Z,d as x,f as ee,i as te,j as ie}from"./chunk-GEHKM7AM.js";import"./chunk-DQHODJGC.js";import"./chunk-3BFJGKYD.js";import"./chunk-RVZ7IXG4.js";import{e as q,f as H,g as Q,i as J,j as K,k as W}from"./chunk-4PO5ZDJC.js";import"./chunk-WXIP2PM4.js";import{a as w}from"./chunk-IWOJX2OI.js";import{h as M}from"./chunk-HXGKJPWL.js";import{a as R,b as y,d as $,e as F,g as V}from"./chunk-6EVQMKN4.js";import"./chunk-BW5OH3R7.js";import{c as U,q as j,t as k}from"./chunk-BI6HPZ47.js";import{c as X}from"./chunk-HMU3GC5F.js";import"./chunk-FIREYTYE.js";import"./chunk-XEDVQBDU.js";import{c as Y}from"./chunk-BVKWOAP7.js";import"./chunk-45BT2WXK.js";import{d as N,f as h,g as T,k as A,m as I,p as v,q as D,t as L}from"./chunk-7T6A67P3.js";import"./chunk-4ZNRG2C5.js";import{a as z,e as b}from"./chunk-C2CTAUG5.js";import"./chunk-Q4PMW3F2.js";import{ja as B,la as G}from"./chunk-IU3SBL3R.js";import"./chunk-JEF2LJ7N.js";import{Hb as m,Ib as _,Jb as l,Tb as g,Ub as u,bb as S,cb as n,kc as E,oa as d,ob as O,oc as C,pc as P,xb as a}from"./chunk-BSOORNNN.js";import"./chunk-73BG4Q2P.js";var re=(()=>{let r=class r extends q{constructor(i,e,t,o){super(t),this.mpplService=i,this.fb=e,this.dialog=t,this.data=o,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[o.personName?.firstName,[N.required,N.minLength(1)]],lastName:[o.personName?.lastName,[]],fatherName:[o.personName?.fatherName,[]],motherName:[o.personName?.motherName,[]],languageId:[o.personName?.languageId,[N.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(c),n(D),n(R),n(y));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[O,E],decls:11,vars:6,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let e;e="\u0627\u0644\u0643\u0646\u064A\u0629";let t;t="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628";let o;return o="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",e],["formControlName","fatherName","label",t],["formControlName","motherName","label",o],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,t){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),_(),m(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),_(),l(9,"sz-ui-form-field-select",7),_()(),l(10,"sz-ui-dialog-actions",8)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),S(2),a("formGroup",t.form),S(7),a("source",t.languages),S(),a("actions",t.actions));},dependencies:[L,A,h,T,I,v,V,F,K,H,Q,k,U,j],encapsulation:2});let p=r;return p;})();var Be=(()=>{let r=class r{constructor(i,e,t){this.dialog=i,this.mpplService=e,this.route=t,this.title=Y.names,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("languageId"),s.string("firstName"),s.string("lastName"),s.string("fatherName"),s.string("motherName"),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),Z.menu([M.edit(o=>this.openSaveComponent(o)),M.delete(o=>this.openPersonNameDeleteComponent(o))])),this.get();}openSaveComponent(i){this.dialog.open(re,{data:{personId:this.person.id,personName:i}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(i){this.dialog.open(J,{data:W.delete(this.mpplService.persons.names.delete(this.person.id,i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};r.ɵfac=function(e){return new(e||r)(n($),n(c),n(z));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[E],decls:7,vars:8,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[i,[3,"title","subtitle","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,t){e&1&&(l(0,"sz-ui-app-bar",1),C(1,"personName"),m(2,"sz-ui-table-search-filter",2),u("changed",function(){return t.get();}),m(3,"button",3),u("click",function(){return t.openSaveComponent();}),m(4,"span"),g(5,0),_()()(),m(6,"sz-ui-table",4),u("update",function(){return t.get();}),_()),e&2&&(a("title",t.title)("subtitle",P(1,6,t.person))("backEnabled",!0),S(2),a("dataSource",t.dataSource),S(4),a("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[b,G,B,ie,te,ee,w,oe],encapsulation:2});let p=r;return p;})();export{Be as PersonNamesComponent};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/