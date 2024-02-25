import{b as C}from"./chunk-CAOM424M.js";import{b as ne}from"./chunk-X2EXV72B.js";import{a as M}from"./chunk-ASGUBU33.js";import{a as p,b as te,d as ie,f as oe,k as re,l as ae}from"./chunk-SULZD2S6.js";import"./chunk-GY3TLDC5.js";import"./chunk-7YGC6OX5.js";import{e as K,f as Q,g as W,i as Z,j as x,k as ee}from"./chunk-NWJDIUE4.js";import"./chunk-4RWWZXXB.js";import"./chunk-WWU4RMDX.js";import{b as J}from"./chunk-TB2VYTUK.js";import{j as h}from"./chunk-TFAPAMJM.js";import{a as R,b as F,d as $,e as V,g as B}from"./chunk-CEKO37HK.js";import{l as k,p as q,q as w,r as H}from"./chunk-SFIMRV2W.js";import{c as U}from"./chunk-2X37MJNS.js";import"./chunk-WPIZTMET.js";import"./chunk-DQGCDDIX.js";import{c as X,d as Y}from"./chunk-KUREFWOH.js";import"./chunk-LOODVX4J.js";import{d as E,f as v,g as P,k as I,m as z,p as D,q as y,t as A}from"./chunk-2Y2XGZCV.js";import"./chunk-CHFB33I4.js";import{a as L,e as b}from"./chunk-RS2VUOYO.js";import"./chunk-RVSBO5M6.js";import{a as G,c as j}from"./chunk-VUGKCDC6.js";import"./chunk-XJX33FYY.js";import"./chunk-37LNIWS5.js";import{Hb as m,Ib as u,Jb as d,O as S,Tb as N,Vb as _,ib as l,jb as a,mc as f,pc as O,qa as c,qb as g,qc as T,xb as n}from"./chunk-YL2YIFEX.js";var se=(()=>{let o=class o extends K{constructor(e,t,i,r){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=r,this.emailTypes=Object.keys(C).map(le=>C[le]),this.form=t.group({value:[r.personEmail?.value,[E.required,E.email]],emailType:[r.personEmail?.emailType??C.Private,[E.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(M),a(y),a(R),a(F));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person-emails-save"]],standalone:!0,features:[g,f],decls:7,vars:5,consts:()=>{let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","placeholder",e],["formControlName","emailType",3,"source","localizedValue"],["formControlName","description","placeholder",t],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),u()(),d(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),l(2),n("formGroup",i.form),l(2),n("source",i.emailTypes)("localizedValue",!0),l(2),n("actions",i.actions));},dependencies:[A,I,v,P,z,D,B,V,H,k,w,x,Q,W,q],encapsulation:2});let s=o;return s;})();var qe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=X.emails,this.dataSource=new ie(),this.person=this.route.snapshot.data.person,this.dataSource.columns.push(p.uuid("id"),p.uuid("personId").setFieldFilterable(!1),p.string("emailType").setContentFormat(r=>Y(r.emailType)),p.string("value"),p.date("createdAt",!1),p.date("updatedAt",!1),te.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openPersonEmailDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personEmail:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonEmailDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mpplService.persons.emails.delete(e.personId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.buildRequest()).pipe(U(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a($),a(M),a(L));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person-emails"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(d(0,"sz-ui-header-info",0),O(1,"personName"),m(2,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),m(3,"button",2),_("click",function(){return i.openSaveComponent();}),m(4,"span"),N(5,3),u()()(),m(6,"sz-ui-table",4),_("update",function(){return i.get();}),u()),t&2&&(n("title",i.title)("subtitle",T(1,5,i.person)),l(2),n("dataSource",i.dataSource),l(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[b,j,G,ae,re,oe,J,ne],encapsulation:2});let s=o;return s;})();export{qe as PersonEmailsComponent};/**i18n:282ef04721adc14810c40b0bd2b3aa62297a8ef1b9d0544b01aa5a1113c50f5a*/