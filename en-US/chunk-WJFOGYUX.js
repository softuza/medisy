import{b as oe}from"./chunk-CDW7NJQR.js";import{a as c}from"./chunk-SRJ2LBZP.js";import{a as s,b as Z,d as x,f as ee,i as te,j as ie}from"./chunk-3RGN74YT.js";import"./chunk-4PUI7TFD.js";import"./chunk-UX7LCM42.js";import"./chunk-6QTNW6V3.js";import"./chunk-BDVQ6LF3.js";import{e as q,f as H,g as Q,i as J,j as K,k as W}from"./chunk-45EQYRXL.js";import{a as w}from"./chunk-J7RSE5GX.js";import{h as M}from"./chunk-S4HAMF5I.js";import{a as R,b as y,d as $,e as F,g as V}from"./chunk-PI57QVX3.js";import"./chunk-AYSVPPXZ.js";import{e as U,j as X,v as j,y as k}from"./chunk-NGCO2DG7.js";import"./chunk-BQGY2E4W.js";import"./chunk-JB2SFW5Z.js";import{c as Y}from"./chunk-FAEIW35E.js";import"./chunk-WDKUGUU7.js";import{d as N,f as h,g as T,k as A,m as I,p as v,q as D,t as L}from"./chunk-CXB763V2.js";import"./chunk-LUIABQW7.js";import{a as z,e as b}from"./chunk-AWG7Q7IV.js";import"./chunk-O6OUP7WU.js";import{ia as B,ka as G}from"./chunk-SHXYMDXZ.js";import"./chunk-BSUEWO5U.js";import{$b as u,Eb as a,Ob as m,Pb as _,Qb as l,_b as g,gb as S,hb as n,rc as E,ta as d,ub as O,vc as C,wc as P}from"./chunk-PSKSSTJ7.js";var re=(()=>{let r=class r extends q{constructor(i,e,t,o){super(t),this.mpplService=i,this.fb=e,this.dialog=t,this.data=o,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[o.personName?.firstName,[N.required,N.minLength(1)]],lastName:[o.personName?.lastName,[]],fatherName:[o.personName?.fatherName,[]],motherName:[o.personName?.motherName,[]],languageId:[o.personName?.languageId,[N.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(c),n(D),n(R),n(y));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[O,E],decls:11,vars:6,consts:()=>{let i;i="First name";let e;e="Last name";let t;t="Father name";let o;return o="Mother name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",e],["formControlName","fatherName","label",t],["formControlName","motherName","label",o],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,t){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),_(),m(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),_(),l(9,"sz-ui-form-field-select",7),_()(),l(10,"sz-ui-dialog-actions",8)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),S(2),a("formGroup",t.form),S(7),a("source",t.languages),S(),a("actions",t.actions));},dependencies:[L,A,h,T,I,v,V,F,K,H,Q,k,U,j],encapsulation:2});let p=r;return p;})();var Be=(()=>{let r=class r{constructor(i,e,t){this.dialog=i,this.mpplService=e,this.route=t,this.title=Y.names,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("languageId"),s.string("firstName"),s.string("lastName"),s.string("fatherName"),s.string("motherName"),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),Z.menu([M.edit(o=>this.openSaveComponent(o)),M.delete(o=>this.openPersonNameDeleteComponent(o))])),this.get();}openSaveComponent(i){this.dialog.open(re,{data:{personId:this.person.id,personName:i}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(i){this.dialog.open(J,{data:W.delete(this.mpplService.persons.names.delete(this.person.id,i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};r.ɵfac=function(e){return new(e||r)(n($),n(c),n(z));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[E],decls:7,vars:7,consts:()=>{let i;return i="Add",[i,[3,"title","subtitle","backEnabled"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(l(0,"sz-ui-app-bar",1),C(1,"personName"),m(2,"sz-ui-table-search-filter",2),u("changed",function(){return t.get();}),m(3,"button",3),u("click",function(){return t.openSaveComponent();}),m(4,"span"),g(5,0),_()()(),m(6,"sz-ui-table",4),u("update",function(){return t.get();}),_()),e&2&&(a("title",t.title)("subtitle",P(1,5,t.person))("backEnabled",!0),S(2),a("dataSource",t.dataSource),S(4),a("dataSource",t.dataSource));},dependencies:[b,G,B,ie,te,ee,w,oe],encapsulation:2});let p=r;return p;})();export{Be as PersonNamesComponent};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/