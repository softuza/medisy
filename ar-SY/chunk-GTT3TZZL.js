import{b as se}from"./chunk-D7QF6LJS.js";import{a as M}from"./chunk-NE7X3SPH.js";import{a as l,b as W,d as Z,f as ee,g as te,h as ie,k as oe,l as re}from"./chunk-SBZ6SE5I.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import{f as q,g as H,h as Q,j as x,k as J,l as K}from"./chunk-ZZAXMQCW.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as w}from"./chunk-WZL7BTCT.js";import{j as O}from"./chunk-J5QZPDV7.js";import{a as b,b as $,d as F,e as V,g as B}from"./chunk-UN7ZV7OU.js";import{l as X,q as Y,r as k}from"./chunk-YSCQPVVT.js";import{c as j}from"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{c as N}from"./chunk-O6G4W4SF.js";import"./chunk-3MHW6B4E.js";import{d as C,f as h,g as A,k as T,m as v,p as I,q as R,t as z}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as y,e as L}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as G,c as U}from"./chunk-AHPLM44D.js";import"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Hb as a,Ib as m,Jb as p,O as _,Tb as c,Vb as E,ib as S,jb as s,mc as f,pc as g,qa as u,qb as P,qc as D,xb as n}from"./chunk-MNGWH3SB.js";var ne=(()=>{let r=class r extends q{constructor(e,t,o,i){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({value:[i?.personAddress?.value,[C.required]],description:[i?.personAddress?.description,[]],isPrimary:[i?.personAddress?.isPrimary??!1,[C.required]]});}submit(){this.IsValid()&&(this.data.personAddress?this.save(this.mpplService.persons.addresses.update(this.data.personId,this.data.personAddress.id,this.form.value)):this.save(this.mpplService.persons.addresses.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(s(M),s(R),s(b),s($));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-people-person-addresses-save"]],standalone:!0,features:[P,f],decls:8,vars:3,consts:()=>{let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let t;t="\u0623\u0633\u0627\u0633\u064A";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","isPrimary"],t,["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),a(4,"mat-checkbox",3),c(5,4),m(),p(6,"sz-ui-form-field-textarea",5),m()(),p(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",o.header),S(2),n("formGroup",o.form),S(5),n("actions",o.actions));},dependencies:[z,T,h,A,v,I,B,V,ie,te,k,X,Y,J,H,Q],encapsulation:2});let d=r;return d;})();var qe=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=N.addresses,this.dataSource=new Z(),this.person=this.route.snapshot.data.person,this.dataSource.columns.push(l.uuid("id"),l.string("value"),l.string("description"),l.boolean("isPrimary",(i,ae)=>{i.isPrimary=ae,this.mpplService.persons.addresses.update(i.personId,i.id,i).pipe(_(1)).subscribe(de=>i=de);}).setName(N.primary),l.date("createdAt",!1),l.date("updatedAt",!1),W.menu([O.edit(i=>this.openSaveComponent(i)),O.delete(i=>this.openPersonAddressDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(ne,{data:{personId:this.person.id,personAddress:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonAddressDeleteComponent(e){this.dialog.open(x,{data:K.delete(this.mpplService.persons.addresses.delete(e.personId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.addresses.get(this.person.id,this.dataSource.getQuery()).pipe(j(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(s(F),s(M),s(y));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-people-person-addresses"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",0),g(1,"personName"),a(2,"sz-ui-table-search-filter",1),E("changed",function(){return o.get();}),a(3,"button",2),E("click",function(){return o.openSaveComponent();}),a(4,"span"),c(5,3),m()()(),a(6,"sz-ui-table",4),E("update",function(){return o.get();}),m()),t&2&&(n("title",o.title)("subtitle",D(1,5,o.person)),S(2),n("dataSource",o.dataSource),S(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,U,G,re,oe,ee,w,se],encapsulation:2});let d=r;return d;})();export{qe as PersonAddressesComponent};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/