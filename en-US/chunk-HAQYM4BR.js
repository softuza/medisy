import{b as re}from"./chunk-PKI2NQCE.js";import{a as f}from"./chunk-I6BGP4VW.js";import{a as s,b as x,d as ee,f as te,i as oe,j as ie}from"./chunk-56RI3JIQ.js";import"./chunk-3VH4SKJI.js";import"./chunk-PGGIRJCC.js";import{e as H,f as Q,g as J,i as K,j as W,k as Z}from"./chunk-EF2KU3MF.js";import"./chunk-RWIHGCFX.js";import"./chunk-YYI2KTIZ.js";import{b as q}from"./chunk-BFUKSRR4.js";import{g as O}from"./chunk-RAWQ4NAU.js";import{a as b,b as $,d as F,e as V,g as B}from"./chunk-O4MIBT3U.js";import{c as X,s as k,v as w}from"./chunk-QETJAZV7.js";import{c as Y}from"./chunk-XGOPNFX6.js";import"./chunk-4PE74OIY.js";import"./chunk-S734PXWV.js";import{c as j}from"./chunk-VKLUJQ6V.js";import"./chunk-ZUQ55FEV.js";import{d as c,f as T,g as I,k as A,m as v,p as D,q as L,t as z}from"./chunk-AZ35PAEP.js";import"./chunk-7GKLQGBB.js";import{a as R,e as y}from"./chunk-XPDLU2SJ.js";import"./chunk-4GDGVDQ6.js";import{a as G,c as U}from"./chunk-YUBOPGWF.js";import"./chunk-BE3RRH45.js";import"./chunk-ZTPR7VOL.js";import{Bb as a,Lb as m,Mb as _,Nb as l,Q as d,Xb as C,Yb as E,gb as S,hb as n,na as u,oc as N,sb as g,sc as h,tc as P}from"./chunk-3ZQQMLH6.js";var ne=(()=>{let r=class r extends H{constructor(t,e,o,i){super(o),this.mpplService=t,this.fb=e,this.dialog=o,this.data=i,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[i.personName?.firstName,[c.required,c.minLength(1)]],lastName:[i.personName?.lastName,[]],fatherName:[i.personName?.fatherName,[]],motherName:[i.personName?.motherName,[]],languageId:[i.personName?.languageId,[c.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(f),n(L),n(b),n($));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[g,N],decls:11,vars:4,consts:()=>{let t;t="First name";let e;e="Last name";let o;o="Father name";let i;return i="Mother name",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","fatherName","label",o],["formControlName","motherName","label",i],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),_(),m(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),_(),l(9,"sz-ui-form-field-select",7),_()(),l(10,"sz-ui-dialog-actions",8)),e&2&&(a("header",o.header),S(2),a("formGroup",o.form),S(7),a("source",o.languages),S(),a("actions",o.actions));},dependencies:[z,A,T,I,v,D,B,V,W,Q,J,w,X,k],encapsulation:2});let p=r;return p;})();var Ue=(()=>{let r=class r{constructor(t,e,o){this.dialog=t,this.mpplService=e,this.route=o,this.title=j.names,this.dataSource=new ee(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("languageId"),s.string("firstName"),s.string("lastName"),s.string("fatherName"),s.string("motherName"),s.date("createdAt",!1),s.date("updatedAt",!1),x.menu([O.edit(i=>this.openSaveComponent(i)),O.delete(i=>this.openPersonNameDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(K,{data:Z.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(Y(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n(F),n(f),n(R));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[N],decls:7,vars:7,consts:()=>{let t;return t="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(l(0,"sz-ui-header-info",0),h(1,"personName"),m(2,"sz-ui-table-search-filter",1),E("changed",function(){return o.get();}),m(3,"button",2),E("click",function(){return o.openSaveComponent();}),m(4,"span"),C(5,3),_()()(),m(6,"sz-ui-table",4),E("update",function(){return o.get();}),_()),e&2&&(a("title",o.title)("subtitle",P(1,5,o.person)),S(2),a("dataSource",o.dataSource),S(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[y,U,G,ie,oe,te,q,re],encapsulation:2});let p=r;return p;})();export{Ue as PersonNamesComponent};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/