import{a as se}from"./chunk-LTYLJZW4.js";import{a as f}from"./chunk-6GISPG6H.js";import{a as W,c as Z,e as ee,f as te,g as ie,j as oe,k as re,l as d}from"./chunk-L43EK5YJ.js";import"./chunk-DSE2GSX7.js";import"./chunk-K2XOOBCU.js";import{e as w,f as H,g as x,i as J,j as K,k as Q}from"./chunk-XT4WDJL3.js";import"./chunk-TFYVSOED.js";import{b as q}from"./chunk-V2CHWC5A.js";import{a as A,g as O}from"./chunk-OBKQZSX2.js";import{a as j,b as X,d as Y,e as k,g as B}from"./chunk-BICV37VP.js";import{A as U,v as V,z as G}from"./chunk-3D6BRKHU.js";import{J as L,N as b,d as M,f as g,g as h,k as T,m as R,p as v,q as I,t as y,za as $}from"./chunk-CN6PMKF6.js";import"./chunk-QYJYVPVW.js";import{Ea as z,Ga as F}from"./chunk-NQOK3G2M.js";import{Fb as a,Gb as m,Hb as l,M as _,Rb as c,Tb as E,gb as S,hb as s,kc as P,oa as u,ob as C,oc as N,pc as D,vb as n}from"./chunk-XEAZENSO.js";var ne=(()=>{let r=class r extends w{constructor(e,t,o,i){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({value:[i?.personAddress?.value,[M.required]],description:[i?.personAddress?.description,[]],isPrimary:[i?.personAddress?.isPrimary??!1,[M.required]]});}submit(){this.IsValid()&&(this.data.personAddress?this.save(this.mpplService.persons.addresses.update(this.data.personId,this.data.personAddress.id,this.form.value)):this.save(this.mpplService.persons.addresses.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(s(f),s(I),s(j),s(X));},r.ɵcmp=u({type:r,selectors:[["medisy-people-person-addresses-save"]],standalone:!0,features:[C,P],decls:8,vars:3,consts:()=>{let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let t;t="\u0623\u0633\u0627\u0633\u064A";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","isPrimary"],t,["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2),a(4,"mat-checkbox",3),c(5,4),m(),l(6,"sz-ui-form-field-textarea",5),m()(),l(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",o.header),S(2),n("formGroup",o.form),S(5),n("actions",o.actions));},dependencies:[y,T,g,h,R,v,B,k,ie,te,U,V,G,K,H,x],encapsulation:2});let p=r;return p;})();var He=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=A.addresses,this.dataSource=new Z(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(d.uuid("id"),d.uuid("personId"),d.string("value"),d.string("description"),d.boolean("isPrimary",(i,ae)=>{i.isPrimary=ae,this.mpplService.persons.addresses.update(i.personId,i.id,i).pipe(_(1)).subscribe(de=>i=de);}).setDisplayName(A.primary),d.date("createdAt",!1),d.date("updatedAt",!1),W.menu([O.edit(i=>this.openSaveComponent(i)),O.delete(i=>this.openPersonAddressDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(ne,{data:{personId:this.person.id,personAddress:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonAddressDeleteComponent(e){this.dialog.open(J,{data:Q.delete(this.mpplService.persons.addresses.delete(e.personId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.addresses.get(this.person.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(s(Y),s(f),s(L));},r.ɵcmp=u({type:r,selectors:[["medisy-people-person-addresses"]],standalone:!0,features:[P],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(l(0,"sz-ui-header-info",0),N(1,"personName"),a(2,"sz-ui-table-search-filter",1),E("changed",function(){return o.get();}),a(3,"button",2),E("click",function(){return o.openSaveComponent();}),a(4,"span"),c(5,3),m()()(),a(6,"sz-ui-table",4),E("update",function(){return o.get();}),m()),t&2&&(n("title",o.title)("subtitle",D(1,5,o.person)),S(2),n("dataSource",o.dataSource),S(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[b,F,z,re,oe,ee,q,se],encapsulation:2});let p=r;return p;})();export{He as PersonAddressesComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/