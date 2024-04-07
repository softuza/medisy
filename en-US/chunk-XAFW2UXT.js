import{a as _}from"./chunk-ZP2645ZQ.js";import{a as f,b as oe,d as ne,f as re,i as ae,j as se}from"./chunk-FLV77ZNO.js";import"./chunk-PKQHZDC2.js";import"./chunk-U6RDA7WY.js";import"./chunk-2YL7Y4RT.js";import"./chunk-2VKSNU5B.js";import{e as Y,f as Z,g as x,i as ee,j as te,k as ie}from"./chunk-7KMAVOQS.js";import{a as C}from"./chunk-U4HE3C36.js";import{h as O}from"./chunk-FFEI4TJI.js";import{a as G,b as B,d as U,e as j,g as T}from"./chunk-LWEVHPML.js";import"./chunk-Q5E2X3ET.js";import{c as q,q as J,s as K,t as W}from"./chunk-DRKBOSD5.js";import{c as H}from"./chunk-RKXQ3MXD.js";import"./chunk-P4AS2ZYY.js";import"./chunk-SENF3LXQ.js";import{c as Q}from"./chunk-4RWLRMTW.js";import{i as X}from"./chunk-NVBE6OT4.js";import{d as M,f as z,g as v,k as D,m as L,p as b,q as P,t as V}from"./chunk-QUQXR4SD.js";import"./chunk-PJX2DRWP.js";import{c as y,e as $}from"./chunk-ICYZO3QS.js";import"./chunk-MGIROLGZ.js";import{ha as R,ia as k,ka as w}from"./chunk-4AFHRSCT.js";import"./chunk-O3HRBZQI.js";import{Db as a,Nb as c,Ob as d,Pb as S,Zb as h,_b as N,hb as s,ib as l,ka as E,pc as I,qc as F,ua as p,ub as A,va as g}from"./chunk-UVDYGJ6P.js";var me=(()=>{let o=class o extends Y{constructor(i,t,e,n){super(e),this.sntiService=i,this.fb=t,this.dialog=e,this.data=n,this.notificationEmails=this.sntiService.notificationEmails.getAll({orderBy:["subject"]}),this.notificationPushes=this.sntiService.notificationPushes.getAll({orderBy:["title"]}),this.notificationSmses=this.sntiService.notificationSmses.getAll({orderBy:["originator"]}),this.notificationEmailValueFunc=m=>m.subject,this.notificationPushValueFunc=m=>m.title,this.notificationSmsValueFunc=m=>m.originator,this.form=t.group({name:[n?.name,[M.required]],description:[n?.description,[M.maxLength(4096)]],notificationEmailId:[n?.notificationEmailId,[]],notificationPushId:[n?.notificationPushId,[]],notificationSmsId:[n?.notificationSmsId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(l(_),l(P),l(G),l(B));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notification-save"]],standalone:!0,features:[I([]),A,F],decls:9,vars:11,consts:()=>{let i;i="Name";let t;t="Description";let e;e="Email";let n;n="SMS";let m;return m="Push",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",t],["formControlName","notificationEmailId","label",e,3,"source","szOptionContentFn"],["formControlName","notificationSmsId","label",n,3,"source","szOptionContentFn"],["formControlName","notificationPushId","label",m,3,"source","szOptionContentFn"],[3,"actions"]];},template:function(t,e){t&1&&(S(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),d()(),S(8,"sz-ui-dialog-actions",7)),t&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),a("formGroup",e.form),s(3),a("source",e.notificationEmails)("szOptionContentFn",e.notificationEmailValueFunc),s(),a("source",e.notificationSmses)("szOptionContentFn",e.notificationSmsValueFunc),s(),a("source",e.notificationPushes)("szOptionContentFn",e.notificationPushValueFunc),s(),a("actions",e.actions));},dependencies:[V,D,z,v,L,b,T,j,X,te,Z,x,W,q,K,J],encapsulation:2});let r=o;return r;})();var ce=(()=>{let o=class o{constructor(i,t,e){this.dialog=i,this.sntiService=t,this.router=e,this.title=Q.notifications,this.dataSource=new ne(),this.dataSource.columnDefs.push(f.uuid("id"),f.hyperlink("name",n=>`/mlab/notification/${n.id}`).setStacked(f.string("description").setValueClassFontSmall()),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),oe.menu([O.edit(n=>this.openSaveComponent(n)),O.delete(n=>this.openNotificationDeleteComponent(n))])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:i}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openNotificationDeleteComponent(i){this.dialog.open(ee,{data:ie.delete(this.sntiService.notifications.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)(l(U),l(_),l(y));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notifications"]],features:[I([])],decls:6,vars:4,consts:()=>{let i;return i="Add",[i,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,e){t&1&&(S(0,"sz-ui-app-bar",1),c(1,"sz-ui-table-search-filter",2),N("changed",function(){return e.get();}),c(2,"button",3),N("click",function(){return e.openSaveComponent();}),c(3,"span"),h(4,0),d()()(),c(5,"sz-ui-table",4),N("update",function(){return e.get();}),d()),t&2&&(a("title",e.title),s(),a("dataSource",e.dataSource),s(4),a("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[k,ae,re,C],encapsulation:2});let r=o;return r;})();var We=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=g({type:o}),o.ɵinj=E({providers:[_],imports:[$.forChild([{path:"",component:ce}]),T,w,se,C,R]});let r=o;return r;})();export{We as NotificationsModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/