import{a as S}from"./chunk-ZP2645ZQ.js";import{a as _,b as oe,d as ne,f as re,i as ae,j as se}from"./chunk-FLV77ZNO.js";import"./chunk-PKQHZDC2.js";import"./chunk-U6RDA7WY.js";import"./chunk-2YL7Y4RT.js";import"./chunk-2VKSNU5B.js";import{e as Y,f as Z,g as x,i as ee,j as te,k as ie}from"./chunk-7KMAVOQS.js";import{a as M}from"./chunk-U4HE3C36.js";import{h as O}from"./chunk-FFEI4TJI.js";import{a as V,b as B,d as U,e as j,g as T}from"./chunk-LWEVHPML.js";import"./chunk-Q5E2X3ET.js";import{c as q,q as J,s as K,t as W}from"./chunk-DRKBOSD5.js";import{c as H}from"./chunk-RKXQ3MXD.js";import"./chunk-P4AS2ZYY.js";import"./chunk-SENF3LXQ.js";import{c as Q}from"./chunk-4RWLRMTW.js";import{i as X}from"./chunk-NVBE6OT4.js";import{d as C,f as v,g as z,k as D,m as L,p as b,q as P,t as y}from"./chunk-QUQXR4SD.js";import"./chunk-PJX2DRWP.js";import{c as $,e as R}from"./chunk-ICYZO3QS.js";import"./chunk-MGIROLGZ.js";import{ha as G,ia as k,ka as w}from"./chunk-4AFHRSCT.js";import"./chunk-O3HRBZQI.js";import{Db as a,Nb as m,Ob as d,Pb as c,Zb as h,_b as N,hb as s,ib as l,ka as E,pc as I,qc as F,ua as p,ub as A,va as g}from"./chunk-UVDYGJ6P.js";var me=(()=>{let o=class o extends Y{constructor(i,e,t,n){super(t),this.sntiService=i,this.fb=e,this.dialog=t,this.data=n,this.notificationEmails=this.sntiService.notificationEmails.getAll({orderBy:["subject"]}),this.notificationPushes=this.sntiService.notificationPushes.getAll({orderBy:["title"]}),this.notificationSmses=this.sntiService.notificationSmses.getAll({orderBy:["originator"]}),this.notificationEmailValueFunc=f=>f.subject,this.form=e.group({name:[n?.name,[C.required]],description:[n?.description,[C.maxLength(4096)]],notificationEmailId:[n?.notificationEmailId,[]],notificationPushId:[n?.notificationPushId,[]],notificationSmsId:[n?.notificationSmsId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(l(S),l(P),l(V),l(B));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-ntofication-save"]],standalone:!0,features:[I([]),A,F],decls:9,vars:9,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let t;t="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let n;n="\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";let f;return f="\u0627\u0634\u0639\u0627\u0631",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",e],["formControlName","notificationEmailId","label",t,3,"source","szOptionContentFn"],["formControlName","notificationSmsId","label",n,3,"source"],["formControlName","notificationPushId","label",f,3,"source"],[3,"actions"]];},template:function(e,t){e&1&&(c(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),d()(),c(8,"sz-ui-dialog-actions",7)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),a("formGroup",t.form),s(3),a("source",t.notificationEmails)("szOptionContentFn",t.notificationEmailValueFunc),s(),a("source",t.notificationSmses),s(),a("source",t.notificationPushes),s(),a("actions",t.actions));},dependencies:[y,D,v,z,L,b,T,j,X,te,Z,x,W,q,K,J],encapsulation:2});let r=o;return r;})();var ce=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.sntiService=e,this.router=t,this.title=Q.notifications,this.dataSource=new ne(),this.dataSource.columnDefs.push(_.uuid("id"),_.hyperlink("name",n=>`/mlab/notification/${n.id}`).setStacked(_.string("description").setValueClassFontSmall()),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),oe.menu([O.edit(n=>this.openSaveComponent(n)),O.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openNotificationDeleteComponent(i){this.dialog.open(ee,{data:ie.delete(this.sntiService.notifications.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(l(U),l(S),l($));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:4,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[i,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,t){e&1&&(c(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),N("changed",function(){return t.get();}),m(2,"button",3),N("click",function(){return t.openSaveComponent();}),m(3,"span"),h(4,0),d()()(),m(5,"sz-ui-table",4),N("update",function(){return t.get();}),d()),e&2&&(a("title",t.title),s(),a("dataSource",t.dataSource),s(4),a("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[k,ae,re,M],encapsulation:2});let r=o;return r;})();var We=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=g({type:o}),o.ɵinj=E({providers:[S],imports:[R.forChild([{path:"",component:ce}]),T,w,se,M,G]});let r=o;return r;})();export{We as NotificationsModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/