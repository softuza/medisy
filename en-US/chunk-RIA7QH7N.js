import{a as l}from"./chunk-Y6DJ4MVW.js";import{c as ne}from"./chunk-WNZGAC5B.js";import{a as s,d as ee,e as te,f as ie,i as oe,j as re}from"./chunk-N3YZ3GWE.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as J,f as K,g as W,h as Y,j as Z,k as x}from"./chunk-BQ3MI4NW.js";import{b as I,e as k}from"./chunk-RNNBY4AW.js";import{h as T}from"./chunk-VP6ZLF3H.js";import{a as $,b as B,d as P,e as j,g as M}from"./chunk-WNUUIGGE.js";import{c as q,s as H,t as Q}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as U}from"./chunk-JACASQJP.js";import{d as p,f as v,g as z,l as L,n as b,q as F,r as D,u as y}from"./chunk-VXNH5PTX.js";import{Y as w}from"./chunk-KQ5MQZXD.js";import{c as R,e as V}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as G,la as X}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as d,Lb as S,Mb as c,Xb as C,bb as _,cb as a,ea as O,na as f,oa as g,oc as N,pc as h,qb as A,zb as m}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var se=(()=>{let t=class t extends K{constructor(i,e,o,n){super(o),this.sntiService=i,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({name:[n?.name,[p.required]],subject:[n?.subject,[p.required]],replyToEmail:[n?.replyToEmail,[p.email]],replyToName:[n?.replyToName,[]],body:[n?.body,[p.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(l),a(D),a($),a(B));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[N([]),A,h],decls:9,vars:5,consts:()=>{let i;i="Name";let e;e="Subject";let o;o="Email";let n;n="Name";let E;return E="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","subject","label",e],["formControlName","replyToEmail","label",o],["formControlName","replyToName","label",n],["formControlName","body","label",E],[3,"actions"]];},template:function(e,o){e&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),S()(),c(8,"sz-ui-dialog-actions",7)),e&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),m("formGroup",o.form),_(6),m("actions",o.actions));},dependencies:[y,L,v,z,b,F,M,j,U,ne,x,W,Y,Q,q,H],encapsulation:2});let r=t;return r;})();var me=(()=>{let t=class t{constructor(i,e,o){this.dialog=i,this.sntiService=e,this.router=o,this.dataSource=new ee(),this.appBarConfig={title:w.email_notification,actions:[I.add(this.openSaveComponent.bind(this)),I.menu([I.search()])]},this.dataSource.columnDefs.push(s.uuid("id"),s.string("name").setValueClassFontBold(),s.string("subject").setResponsive(!0),s.string("replyToName").setResponsive(!0),s.string("replyToEmail").setResponsive(!0),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),s.menu([T.edit(this.openSaveComponent.bind(this)),T.divider(),T.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(se,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(i){this.dialog.open(Z,{data:J.delete(this.sntiService.notificationEmails.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(e){return new(e||t)(a(P),a(l),a(R));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-notification-notification-emails"]],features:[N([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(d(0,"sz-ui-table-bar",0),C("changed",function(){return o.get();}),S(),d(1,"sz-ui-table",1),C("update",function(){return o.get();}),S()),e&2&&(m("config",o.appBarConfig)("dataSource",o.dataSource),_(),m("dataSource",o.dataSource));},dependencies:[oe,ie],encapsulation:2});let r=t;return r;})();var ke=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=g({type:t}),t.ɵinj=O({providers:[l],imports:[V.forChild([{path:"",component:me}]),M,X,re,k,G]});let r=t;return r;})();export{ke as NotificationEmailsModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/