import{a as p}from"./chunk-5D4LQMJA.js";import{c as le}from"./chunk-J2B53B6K.js";import{a as l,b as ie,d as oe,e as re,g as ne,j as ae,k as se}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import"./chunk-4P4RPOWU.js";import{b as W,f as Y,g as Z,h as x,j as ee,k as te}from"./chunk-K46Y6NGM.js";import{a as I}from"./chunk-R7EUDMGD.js";import{e as K,h as C}from"./chunk-KBWUA6E4.js";import{a as P,b as B,d as j,e as U,g as T}from"./chunk-NGJJVZ6X.js";import{c as q,s as Q,t as J}from"./chunk-COX3WBO6.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as H}from"./chunk-TUR2GSJY.js";import{i as X}from"./chunk-Z6RT565P.js";import{d as u,f as v,g as z,l as F,n as b,q as D,r as y,u as R}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{c as $,e as G}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as V,ja as w,la as k}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as m,Lb as d,Mb as S,Wb as L,Xb as M,bb as _,cb as a,ea as O,na as c,oa as g,oc as N,pc as h,qb as A,zb as s}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var _e=(()=>{let i=class i extends Y{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[u.required]],subject:[r?.subject,[u.required]],replyToEmail:[r?.replyToEmail,[u.email]],replyToName:[r?.replyToName,[]],body:[r?.body,[u.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(p),a(y),a(P),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[N([]),A,h],decls:9,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0645\u0648\u0636\u0648\u0639";let o;o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let r;r="\u0627\u0644\u0627\u0633\u0645";let E;return E="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","subject","label",e],["formControlName","replyToEmail","label",o],["formControlName","replyToName","label",r],["formControlName","body","label",E],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),d()(),S(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),s("formGroup",o.form),_(6),s("actions",o.actions));},dependencies:[R,F,v,z,b,D,T,U,X,le,te,Z,x,J,q,Q],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.dataSource=new oe(),this.appBarConfig={title:H.email_notification},this.dataSource.columnDefs.push(l.uuid("id"),l.string("name").setValueClassFontBold(),l.string("subject").setResponsive(!0),l.string("replyToName").setResponsive(!0),l.string("replyToEmail").setResponsive(!0),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),ie.menu([C.edit(r=>this.openSaveComponent(r)),K.divider(),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(ee,{data:W.delete(this.sntiService.notificationEmails.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(j),a(p),a($));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-notification-notification-emails"]],features:[N([])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),M("changed",function(){return o.get();}),m(2,"button",3),M("click",function(){return o.openSaveComponent();}),m(3,"span"),L(4,0),d()()(),m(5,"sz-ui-table",4),M("update",function(){return o.get();}),d()),e&2&&(s("config",o.appBarConfig),_(),s("dataSource",o.dataSource),_(4),s("dataSource",o.dataSource));},dependencies:[w,ae,ne,I],encapsulation:2});let n=i;return n;})();var Ye=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=O({providers:[p],imports:[G.forChild([{path:"",component:Se}]),T,k,se,I,V]});let n=i;return n;})();export{Ye as NotificationEmailsModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/