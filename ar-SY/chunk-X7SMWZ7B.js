import{a as ae}from"./chunk-6HDTSOWF.js";import{a as re,b as ne}from"./chunk-VI5KGIUZ.js";import{a as ie}from"./chunk-ELSFETOK.js";import{a as f}from"./chunk-CY3TPSGT.js";import{a as Z,c as x,e as ee,q as oe,r as te,s}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{c as k,h as q,i as w,j as J,l as K,m as Q,n as W}from"./chunk-2HDHNYMU.js";import"./chunk-L6PAJN6E.js";import{b as B}from"./chunk-7V4QNR7X.js";import{a as Y,g as E}from"./chunk-BJEOQME3.js";import{a as V,b as H,d as j,e as U,g as X}from"./chunk-SG6HY6JP.js";import{A as G,v as F,z as $}from"./chunk-XXBVSRTN.js";import{J as I,N as R,d as h,f as T,g,k as v,m as A,p as D,q as y,t as z}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ea as b,Ga as L}from"./chunk-QRXQW4KS.js";import{Eb as m,Fb as S,Gb as d,M as u,Qb as O,Sb as c,fb as l,gb as n,jc as P,na as _,nb as M,nc as N,oc as C,ub as a}from"./chunk-CIWRZFHR.js";var se=(()=>{let i=class i extends q{constructor(e,o,t,r){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=r,this.form=o.group({value:[r?.personPhone?.value,[h.required]],description:[r?.personPhone?.description,[]],phoneType:[r?.personPhone?.phoneType??re.Mobile,[h.required]]});}submit(){this.IsValid()&&(this.data.personPhone?this.save(this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value)):this.save(this.mpplService.persons.phones.create(this.data.personId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(f),n(y),n(V),n(H));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[M,P],decls:7,vars:3,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType"],["formControlName","description","label",o],[3,"actions"]];},template:function(o,t){o&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-phone-type",3)(5,"sz-ui-form-field-textarea",4),S()(),d(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",t.header),l(2),a("formGroup",t.form),l(4),a("actions",t.actions));},dependencies:[z,v,T,g,A,D,X,U,Q,w,J,G,F,$,ae],encapsulation:2});let p=i;return p;})();var we=(()=>{let i=class i{constructor(e,o,t){this.dialog=e,this.mpplService=o,this.route=t,this.title=Y.phones,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(s.uuid("id"),s.uuid("personId"),s.enum("phoneType").setFormatFn(r=>ne(r.phoneType)),s.string("value"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),Z.menu([E.edit(r=>this.openSaveComponent(r)),E.delete(r=>this.openPersonPhoneDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personPhone:e}}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openPersonPhoneDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.phones.delete(e.personId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(n(j),n(f),n(I));},i.ɵcmp=_({type:i,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[P],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(d(0,"sz-ui-header-info",0),N(1,"personName"),m(2,"sz-ui-table-search-filter",1),c("changed",function(){return t.get();}),m(3,"button",2),c("click",function(){return t.openSaveComponent();}),m(4,"span"),O(5,3),S()()(),m(6,"sz-ui-table",4),c("update",function(){return t.get();}),S()),o&2&&(a("title",t.title)("subtitle",C(1,5,t.person)),l(2),a("dataSource",t.dataSource),l(4),a("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[R,L,b,B,te,oe,ee,ie],encapsulation:2});let p=i;return p;})();export{we as PersonPhonesComponent};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/