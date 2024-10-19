import{a as E}from"./chunk-LL6NPQVD.js";import{a as T}from"./chunk-7FF5F4MT.js";import{c as ie,d as oe,e as a,h as ne,i as ae,j as re}from"./chunk-EQVC35WN.js";import{c as K,g as W,h as Y,i as Z,k as ee,l as te}from"./chunk-E3CHHEDI.js";import{a as $,b as B,d as U,e as X,g as k}from"./chunk-U3H7W2BJ.js";import{c as w,q as H,r as x,s as Q,v as J}from"./chunk-PNC6CYU5.js";import{j}from"./chunk-ELOLLYFG.js";import{d as p,f as F,g as z,l as R,o as v,r as P,s as y,u as D}from"./chunk-KMQC4JE3.js";import{b as d,c as M}from"./chunk-2WSRG4TZ.js";import{a as O,b as G}from"./chunk-5COP62WY.js";import{p as L,s as V}from"./chunk-VFFUX6UX.js";import{Ma as q}from"./chunk-BKKXZCD4.js";import{Jb as c,Kb as m,Lb as S,Vb as A,Wb as I,bb as l,ja as n,mb as b,mc as u,na as _,nc as N,yb as r}from"./chunk-5UGT7ICT.js";import{a as g,b as h}from"./chunk-KKIINILB.js";var se=(()=>{let o=class o extends W{constructor(){super(n($)),this.sntiService=n(T),this.fb=n(y),this.data=n(B),this.notificationTypes=Object.keys(E).map(i=>E[i]);let t=this.fb,e=this.data;this.form=t.group({name:[e?.notificationRecipient?.name,[p.maxLength(4096)]],enabled:[e?.notificationRecipient?.enabled??!0,[p.required]],identifier:[e?.notificationRecipient?.identifier,[p.required]],notificationType:[e?.notificationRecipient?.notificationType,[p.required]]});}submit(){this.IsValid()&&(this.data&&this.data.notificationRecipient?this.save(this.sntiService.notifications.recipients.update(this.data.notificationId,this.data.notificationRecipient.id,this.form.value)):this.save(this.sntiService.notifications.recipients.create(this.data.notificationId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-notification-notification-recipients-save"]],standalone:!0,features:[u([]),b,N],decls:9,vars:7,consts:()=>{let t;t="Name";let e;e="Type";let i;i="Identifier";let f;return f="Enabled",[f,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","notificationType","label",e,3,"source","localizedValue"],["formControlName","identifier","label",i],["formControlName","enabled"],[3,"actions"]];},template:function(e,i){e&1&&(S(0,"sz-ui-dialog-header",1),c(1,"mat-dialog-content")(2,"form",2),S(3,"sz-ui-form-field-input-text",3)(4,"sz-ui-form-field-select",4)(5,"sz-ui-form-field-input-text",5),c(6,"mat-checkbox",6),A(7,0),m()()(),S(8,"sz-ui-dialog-actions",7)),e&2&&(r("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),r("formGroup",i.form),l(2),r("source",i.notificationTypes)("localizedValue",!0),l(4),r("actions",i.actions));},dependencies:[D,R,F,z,v,P,k,X,j,x,H,te,Y,Z,J,w,Q],encapsulation:2});let s=o;return s;})();var Ue=(()=>{let o=class o{constructor(){this.route=n(L),this.dialog=n(U),this.sntiService=n(T),this.notification=this.route.snapshot.data.notification,this.dataSource=new ne(),this.appBarConfig={title:O.recipients,subtitle:this.notification.name,backEnabled:!0,menu:M.default([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setStacked(a.enum("notificationType").setHeaderName(O.type).setValueGetter(t=>G(t.notificationType)).setValueClassFontSmall()),a.string("identifier"),a.boolean("enabled").setChangeFn((t,e)=>{this.sntiService.notifications.recipients.update(this.notification.id,t.id,h(g({},t),{enabled:e})).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(M.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openNotificationRecipientDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openNotificationRecipientDeleteComponent(t){this.dialog.open(ee,{data:K.delete(this.sntiService.notifications.recipients.delete(t.notificationId,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}openSaveComponent(t){this.dialog.open(se,{data:{notificationId:this.notification.id,notificationRecipient:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}get(){this.sntiService.notifications.recipients.get(this.notification.id,this.dataSource.getQuery()).pipe(ae(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-notification-notification-recipients"]],standalone:!0,features:[u([]),N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,i){e&1&&(c(0,"sz-ui-table-bar",0),I("changed",function(){return i.get();}),m(),c(1,"sz-ui-table",1),I("update",function(){return i.get();}),m()),e&2&&(r("config",i.appBarConfig)("dataSource",i.dataSource),l(),r("dataSource",i.dataSource));},dependencies:[V,re,oe,ie,q],encapsulation:2});let s=o;return s;})();export{Ue as a};/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/