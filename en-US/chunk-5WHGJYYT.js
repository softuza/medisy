import{a as d}from"./chunk-R2H6M7M7.js";import{c as se}from"./chunk-6YHPCQ3R.js";import{a as l,b as ie,d as oe,f as re,i as ne,j as ae}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{e as W,f as Y,g as Z,i as x,j as ee,k as te}from"./chunk-SB426TL2.js";import"./chunk-PP3NP7HU.js";import{a as I}from"./chunk-W3O4IPE3.js";import{h as C}from"./chunk-EKINQSBT.js";import{a as P,b as B,d as j,e as U,g as T}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{c as q,s as J,t as K}from"./chunk-6LY23KCH.js";import{c as H}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as Q}from"./chunk-Y57UOOVT.js";import{i as X}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as u,f as F,g as v,k as z,m as b,p as D,q as y,t as R}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as $,e as G}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as V,ia as w,ka as k}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as m,Jb as p,Kb as S,Ub as L,Vb as M,ab as _,bb as a,ea as O,kc as N,lc as h,na as f,oa as A,ob as g,yb as s}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var me=(()=>{let i=class i extends W{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[u.required]],subject:[r?.subject,[u.required]],replyToEmail:[r?.replyToEmail,[u.email]],replyToName:[r?.replyToName,[]],body:[r?.body,[u.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(d),a(y),a(P),a(B));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[N([]),g,h],decls:9,vars:5,consts:()=>{let t;t="Name";let e;e="Subject";let o;o="Email";let r;r="Name";let E;return E="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","subject","label",e],["formControlName","replyToEmail","label",o],["formControlName","replyToName","label",r],["formControlName","body","label",E],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),p()(),S(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),s("formGroup",o.form),_(6),s("actions",o.actions));},dependencies:[R,z,F,v,b,D,T,U,X,se,ee,Y,Z,K,q,J],encapsulation:2});let n=i;return n;})();var _e=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=Q.email_notification,this.dataSource=new oe(),this.dataSource.columnDefs.push(l.uuid("id"),l.string("name").setValueClassFontBold(),l.string("subject").setResponsive(!0),l.string("replyToName").setResponsive(!0),l.string("replyToEmail").setResponsive(!0),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),ie.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(x,{data:te.delete(this.sntiService.notificationEmails.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(j),a(d),a($));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-emails"]],features:[N([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),M("changed",function(){return o.get();}),m(2,"button",3),M("click",function(){return o.openSaveComponent();}),m(3,"span"),L(4,0),p()()(),m(5,"sz-ui-table",4),M("update",function(){return o.get();}),p()),e&2&&(s("title",o.title),_(),s("dataSource",o.dataSource),_(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[w,ne,re,I],encapsulation:2});let n=i;return n;})();var Ze=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=A({type:i}),i.ɵinj=O({providers:[d],imports:[G.forChild([{path:"",component:_e}]),T,k,ae,I,V]});let n=i;return n;})();export{Ze as NotificationEmailsModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/