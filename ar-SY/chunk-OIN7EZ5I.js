import{a as p}from"./chunk-PDK7QLXN.js";import{c as se}from"./chunk-2INYNTAT.js";import{a as l,b as te,d as ie,e as oe,g as re,j as ne,k as ae}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import"./chunk-HAWQZ3DL.js";import{e as K,f as W,g as Y,i as Z,j as x,k as ee}from"./chunk-CZ3NOAZC.js";import{a as I}from"./chunk-4APH4GGR.js";import{h as C}from"./chunk-3HX3ISKW.js";import{a as P,b as B,d as j,e as U,g as T}from"./chunk-T2IQKITO.js";import{c as q,u as Q,v as J}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as H}from"./chunk-K3B67OJW.js";import{i as X}from"./chunk-SNWVCYUD.js";import{d as u,f as v,g as F,l as z,n as b,q as D,r as y,u as R}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{c as $,e as G}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as V,ja as w,la as k}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as m,Kb as d,Lb as S,Vb as L,Wb as M,bb as _,cb as a,ea as O,na as c,nc as N,oa as g,oc as h,qb as A,zb as s}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var me=(()=>{let i=class i extends K{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[u.required]],subject:[r?.subject,[u.required]],replyToEmail:[r?.replyToEmail,[u.email]],replyToName:[r?.replyToName,[]],body:[r?.body,[u.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(p),a(y),a(P),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[N([]),A,h],decls:9,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0645\u0648\u0636\u0648\u0639";let o;o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let r;r="\u0627\u0644\u0627\u0633\u0645";let E;return E="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","subject","label",e],["formControlName","replyToEmail","label",o],["formControlName","replyToName","label",r],["formControlName","body","label",E],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),d()(),S(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),s("formGroup",o.form),_(6),s("actions",o.actions));},dependencies:[R,z,v,F,b,D,T,U,X,se,x,W,Y,J,q,Q],encapsulation:2});let n=i;return n;})();var _e=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.dataSource=new ie(),this.appBarConfig={title:H.email_notification},this.dataSource.columnDefs.push(l.uuid("id"),l.string("name").setValueClassFontBold(),l.string("subject").setResponsive(!0),l.string("replyToName").setResponsive(!0),l.string("replyToEmail").setResponsive(!0),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),te.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(Z,{data:ee.delete(this.sntiService.notificationEmails.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(j),a(p),a($));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-emails"]],features:[N([])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),M("changed",function(){return o.get();}),m(2,"button",3),M("click",function(){return o.openSaveComponent();}),m(3,"span"),L(4,0),d()()(),m(5,"sz-ui-table",4),M("update",function(){return o.get();}),d()),e&2&&(s("config",o.appBarConfig),_(),s("dataSource",o.dataSource),_(4),s("dataSource",o.dataSource));},dependencies:[w,ne,re,I],encapsulation:2});let n=i;return n;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=O({providers:[p],imports:[G.forChild([{path:"",component:_e}]),T,k,ae,I,V]});let n=i;return n;})();export{We as NotificationEmailsModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/