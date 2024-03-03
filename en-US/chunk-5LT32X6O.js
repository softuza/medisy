import{b as C}from"./chunk-PXNZDFRB.js";import{b as ne}from"./chunk-G5NHCORF.js";import{a as M}from"./chunk-ONKZX5XP.js";import{a as d,b as te,d as ie,f as oe,k as re,l as ae}from"./chunk-H2XJLF64.js";import"./chunk-LVZAJ6JI.js";import"./chunk-J6NRKFWO.js";import{f as J,g as K,h as W,j as Z,k as x,l as ee}from"./chunk-AAGRZVZU.js";import"./chunk-PY52CIOW.js";import"./chunk-VZFPSQUV.js";import{b as Q}from"./chunk-HSAYA7MJ.js";import{j as h}from"./chunk-5KALQ4FU.js";import{a as R,b as F,d as $,e as V,g as G}from"./chunk-DITSCE2Q.js";import{e as U,q as w,r as q,s as H}from"./chunk-URN46NHF.js";import{c as X}from"./chunk-KFKBFYOY.js";import"./chunk-LXF2HH7Z.js";import"./chunk-JPOFBM3O.js";import{c as Y,d as k}from"./chunk-QSWB7VLH.js";import"./chunk-OAWFG6MI.js";import{d as E,f as v,g as P,k as I,m as z,p as D,q as y,t as A}from"./chunk-LKKWQT5S.js";import"./chunk-7DZKW7DA.js";import{a as L,e as b}from"./chunk-NFMEHFZL.js";import"./chunk-CIDXYEN5.js";import{a as B,c as j}from"./chunk-MMSLTTDI.js";import"./chunk-37WG7HQL.js";import"./chunk-KA2LEAJN.js";import{Hb as m,Ib as u,Jb as p,O as S,Tb as N,Vb as _,ib as l,jb as a,mc as f,pc as O,qa as c,qb as g,qc as T,xb as n}from"./chunk-CP3NWJHY.js";var se=(()=>{let o=class o extends J{constructor(e,t,i,r){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=r,this.emailTypes=Object.keys(C).map(le=>C[le]),this.form=t.group({value:[r.personEmail?.value,[E.required,E.email]],emailType:[r.personEmail?.emailType??C.Private,[E.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(M),a(y),a(R),a(F));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person-emails-save"]],standalone:!0,features:[g,f],decls:7,vars:5,consts:()=>{let e;e="Email";let t;return t="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","placeholder",e],["formControlName","emailType",3,"source","localizedValue"],["formControlName","description","placeholder",t],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),u()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),l(2),n("formGroup",i.form),l(2),n("source",i.emailTypes)("localizedValue",!0),l(2),n("actions",i.actions));},dependencies:[A,I,v,P,z,D,G,V,H,U,q,x,K,W,w],encapsulation:2});let s=o;return s;})();var we=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=Y.emails,this.dataSource=new ie(),this.person=this.route.snapshot.data.person,this.dataSource.columnDefs.push(d.uuid("id"),d.string("emailType").setValueGetter(r=>k(r.emailType)),d.string("value"),d.date("createdAt",!1),d.date("updatedAt",!1),te.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openPersonEmailDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personEmail:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonEmailDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.emails.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.getQuery()).pipe(X(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a($),a(M),a(L));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person-emails"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(p(0,"sz-ui-header-info",0),O(1,"personName"),m(2,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),m(3,"button",2),_("click",function(){return i.openSaveComponent();}),m(4,"span"),N(5,3),u()()(),m(6,"sz-ui-table",4),_("update",function(){return i.get();}),u()),t&2&&(n("title",i.title)("subtitle",T(1,5,i.person)),l(2),n("dataSource",i.dataSource),l(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[b,j,B,ae,re,oe,Q,ne],encapsulation:2});let s=o;return s;})();export{we as PersonEmailsComponent};/**i18n:a4535b3079110d8df5f5c221d1d51c34dbcd8c94b76f3a35f790ba996d6c1a07*/