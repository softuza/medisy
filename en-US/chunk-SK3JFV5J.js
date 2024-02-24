import{b as C}from"./chunk-7ICGQMMS.js";import{b as ne}from"./chunk-LUEEPCT5.js";import{a as M}from"./chunk-SJAHXW3C.js";import{a as p,b as te,d as ie,f as oe,k as re,l as ae}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as J}from"./chunk-HKZIVJYM.js";import{g as h}from"./chunk-PNII32UO.js";import{a as R,b as F,d as $,e as V,g as B}from"./chunk-V6ACGGWJ.js";import{l as k,p as q,q as w,r as H}from"./chunk-VBUQVK7Q.js";import{c as U}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as X,d as Y}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as E,f as P,g as O,k as I,m as z,p as D,q as y,t as A}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as L,e as b}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as G,c as j}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as m,Gb as u,Hb as d,M as S,Rb as N,Tb as _,gb as l,hb as a,kc as f,nc as T,oa as c,ob as g,oc as v,vb as n}from"./chunk-UDYUYOMJ.js";var se=(()=>{let o=class o extends K{constructor(e,t,i,r){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=r,this.emailTypes=Object.keys(C).map(le=>C[le]),this.form=t.group({value:[r.personEmail?.value,[E.required,E.email]],emailType:[r.personEmail?.emailType??C.Private,[E.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(M),a(y),a(R),a(F));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person-emails-save"]],standalone:!0,features:[g,f],decls:7,vars:5,consts:()=>{let e;e="Email";let t;return t="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","placeholder",e],["formControlName","emailType",3,"source","localizedValue"],["formControlName","description","placeholder",t],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),u()(),d(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),l(2),n("formGroup",i.form),l(2),n("source",i.emailTypes)("localizedValue",!0),l(2),n("actions",i.actions));},dependencies:[A,I,P,O,z,D,B,V,H,k,w,x,Q,W,q],encapsulation:2});let s=o;return s;})();var qe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=X.emails,this.dataSource=new ie(),this.person=this.route.snapshot.data.person,this.dataSource.columns.push(p.uuid("id"),p.uuid("personId"),p.string("emailType").setContentFormat(r=>Y(r.emailType)),p.string("value"),p.date("createdAt",!1),p.date("updatedAt",!1),te.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openPersonEmailDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personEmail:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonEmailDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.emails.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.buildRequest()).pipe(U(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a($),a(M),a(L));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person-emails"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(d(0,"sz-ui-header-info",0),T(1,"personName"),m(2,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),m(3,"button",2),_("click",function(){return i.openSaveComponent();}),m(4,"span"),N(5,3),u()()(),m(6,"sz-ui-table",4),_("update",function(){return i.get();}),u()),t&2&&(n("title",i.title)("subtitle",v(1,5,i.person)),l(2),n("dataSource",i.dataSource),l(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[b,j,G,ae,re,oe,J,ne],encapsulation:2});let s=o;return s;})();export{qe as PersonEmailsComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/