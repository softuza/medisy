import{b as ie}from"./chunk-2XX547FZ.js";import{a as c}from"./chunk-CCXKVL2W.js";import{a as s,b as Z,d as x,f as ee,i as te,j as oe}from"./chunk-A52A4IXH.js";import"./chunk-UKASW4SH.js";import"./chunk-AQMJWPZN.js";import"./chunk-GF52CWG5.js";import{e as q,f as H,g as Q,i as J,j as K,k as W}from"./chunk-NORSX7AN.js";import"./chunk-O2OTD4RB.js";import{b as k}from"./chunk-QLW72HL4.js";import{h as M}from"./chunk-KZ5TTCTY.js";import{a as y,b,d as $,e as F,g as V}from"./chunk-4Z4QG25E.js";import"./chunk-3NC3Y6E7.js";import{c as U,q as j,t as w}from"./chunk-RIHPS5KS.js";import{c as X}from"./chunk-IWL564QK.js";import"./chunk-NDMBF3VG.js";import"./chunk-ZADXNDER.js";import{c as Y}from"./chunk-XVKVAOPG.js";import"./chunk-2HLVRV4Y.js";import{d as N,f as P,g as T,k as I,m as A,p as v,q as D,t as L}from"./chunk-QB7MQTPZ.js";import"./chunk-6PBKCSCG.js";import{a as z,e as R}from"./chunk-NU73GHW6.js";import"./chunk-Y5SKEODV.js";import{ia as B,ka as G}from"./chunk-CJMWB6ZO.js";import"./chunk-3KZRNWQ7.js";import{Db as a,Nb as m,Ob as p,Pb as l,Zb as g,_b as u,hb as _,ib as n,qc as E,ua as d,ub as O,uc as C,vc as h}from"./chunk-HNAKTLBJ.js";var re=(()=>{let r=class r extends q{constructor(t,e,o,i){super(o),this.mpplService=t,this.fb=e,this.dialog=o,this.data=i,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[i.personName?.firstName,[N.required,N.minLength(1)]],lastName:[i.personName?.lastName,[]],fatherName:[i.personName?.fatherName,[]],motherName:[i.personName?.motherName,[]],languageId:[i.personName?.languageId,[N.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(c),n(D),n(y),n(b));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[O,E],decls:11,vars:4,consts:()=>{let t;t="First name";let e;e="Last name";let o;o="Father name";let i;return i="Mother name",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","fatherName","label",o],["formControlName","motherName","label",i],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),p(),m(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),p(),l(9,"sz-ui-form-field-select",7),p()(),l(10,"sz-ui-dialog-actions",8)),e&2&&(a("header",o.header),_(2),a("formGroup",o.form),_(7),a("source",o.languages),_(),a("actions",o.actions));},dependencies:[L,I,P,T,A,v,V,F,K,H,Q,w,U,j],encapsulation:2});let S=r;return S;})();var Be=(()=>{let r=class r{constructor(t,e,o){this.dialog=t,this.mpplService=e,this.route=o,this.title=Y.names,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("languageId"),s.string("firstName"),s.string("lastName"),s.string("fatherName"),s.string("motherName"),s.date("createdAt",!1),s.date("updatedAt",!1),Z.menu([M.edit(i=>this.openSaveComponent(i)),M.delete(i=>this.openPersonNameDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(re,{data:{personId:this.person.id,personName:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(J,{data:W.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n($),n(c),n(z));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[E],decls:7,vars:7,consts:()=>{let t;return t="Add",[t,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(l(0,"sz-ui-header-info",1),C(1,"personName"),m(2,"sz-ui-table-search-filter",2),u("changed",function(){return o.get();}),m(3,"button",3),u("click",function(){return o.openSaveComponent();}),m(4,"span"),g(5,0),p()()(),m(6,"sz-ui-table",4),u("update",function(){return o.get();}),p()),e&2&&(a("title",o.title)("subtitle",h(1,5,o.person)),_(2),a("dataSource",o.dataSource),_(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[R,G,B,oe,te,ee,k,ie],encapsulation:2});let S=r;return S;})();export{Be as PersonNamesComponent};/**i18n:8ad4cf760c87d08b695a94cb80f4844ffbc4e33bdc339c4d5a0bbc09e28e3eac*/