import{a as M}from"./chunk-WNTJDLC5.js";import{a as ne}from"./chunk-LTYLJZW4.js";import{a as P}from"./chunk-BK3JJVAK.js";import{a as te,c as ie,e as oe,j as re,k as ae,l as p}from"./chunk-34MSZMSB.js";import"./chunk-6DXJR33O.js";import"./chunk-DI33WAJD.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-JH67BC54.js";import"./chunk-DIVK5N2T.js";import{b as J}from"./chunk-WN7LVT7X.js";import{f as C}from"./chunk-MWQCS4K5.js";import{a as k,b as B,d as q,e as w,g as H}from"./chunk-NAVTPQ6X.js";import{u as j,x as U,y as X,z as Y}from"./chunk-OWPLOJQP.js";import{Ca as V,Da as G,J as L,N as R,d as E,f as N,g as A,k as v,m as I,p as D,q as z,t as y,za as $}from"./chunk-YSD3E7UX.js";import"./chunk-QYJYVPVW.js";import{Ea as b,Ga as F}from"./chunk-NQOK3G2M.js";import{Fb as m,Gb as u,Hb as d,M as S,Rb as O,Tb as c,gb as l,hb as a,kc as f,oa as _,ob as h,oc as T,pc as g,vb as n}from"./chunk-XEAZENSO.js";var se=(()=>{let o=class o extends K{constructor(e,t,i,r){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=r,this.emailTypes=Object.keys(M).map(le=>M[le]),this.form=t.group({value:[r.personEmail?.value,[E.required,E.email]],emailType:[r.personEmail?.emailType??M.Private,[E.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(P),a(z),a(k),a(B));},o.ɵcmp=_({type:o,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[h,f],decls:7,vars:5,consts:()=>{let e;e="Email";let t;return t="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","placeholder",e],["formControlName","emailType",3,"source","localizedValue"],["formControlName","description","placeholder",t],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),u()(),d(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),l(2),n("formGroup",i.form),l(2),n("source",i.emailTypes)("localizedValue",!0),l(2),n("actions",i.actions));},dependencies:[y,v,N,A,I,D,H,w,Y,j,X,x,Q,W,U],encapsulation:2});let s=o;return s;})();var we=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=V.emails,this.dataSource=new ie(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(p.uuid("id"),p.uuid("personId"),p.string("emailType").setContentFormat(r=>G(r.emailType)),p.string("value"),p.date("createdAt",!1),p.date("updatedAt",!1),te.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openPersonEmailDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personEmail:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonEmailDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.emails.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(q),a(P),a(L));},o.ɵcmp=_({type:o,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(d(0,"sz-ui-header-info",0),T(1,"personName"),m(2,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),m(3,"button",2),c("click",function(){return i.openSaveComponent();}),m(4,"span"),O(5,3),u()()(),m(6,"sz-ui-table",4),c("update",function(){return i.get();}),u()),t&2&&(n("title",i.title)("subtitle",g(1,5,i.person)),l(2),n("dataSource",i.dataSource),l(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[R,F,b,ae,re,oe,J,ne],encapsulation:2});let s=o;return s;})();export{we as PersonEmailsComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/