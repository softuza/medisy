import{a as L}from"./chunk-5D4LQMJA.js";import{f as P,g as y,h as B,k as H}from"./chunk-K46Y6NGM.js";import{a as F,b as h,e as R,g as v}from"./chunk-NGJJVZ6X.js";import{c as G,r as $,s as z,t as V}from"./chunk-COX3WBO6.js";import{i as D}from"./chunk-Z6RT565P.js";import{d as S,f as C,g as M,l as A,n as E,q as p,r as g,u as O}from"./chunk-GIW6HK33.js";import{Kb as d,Lb as N,Mb as l,bb as s,cb as a,na as I,oc as T,pc as u,qb as c,zb as t}from"./chunk-3KG4VHVC.js";var ni=(()=>{let n=class n extends P{constructor(r,e,i,o){super(i),this.sntiService=r,this.fb=e,this.dialog=i,this.data=o,this.notificationEmails=this.sntiService.notificationEmails.getAll({orderBy:["subject"]}),this.notificationPushes=this.sntiService.notificationPushes.getAll({orderBy:["title"]}),this.notificationSmses=this.sntiService.notificationSmses.getAll({orderBy:["originator"]}),this.selectConfig={emptyOption:!0},this.form=e.group({name:[o?.name,[S.required]],description:[o?.description,[S.maxLength(4096)]],notificationEmailId:[o?.notificationEmailId,[]],notificationPushId:[o?.notificationPushId,[]],notificationSmsId:[o?.notificationSmsId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};n.ɵfac=function(e){return new(e||n)(a(L),a(g),a(F),a(h));},n.ɵcmp=I({type:n,selectors:[["sz-mgmt-notification-notification-save"]],standalone:!0,features:[T([]),c,u],decls:9,vars:11,consts:()=>{let r;r="Name";let e;e="Description";let i;i="Email";let o;o="SMS";let f;return f="Push",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","notificationEmailId","label",i,3,"source","config"],["formControlName","notificationSmsId","label",o,3,"source","config"],["formControlName","notificationPushId","label",f,3,"source","config"],[3,"actions"]];},template:function(e,i){e&1&&(l(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),N()(),l(8,"sz-ui-dialog-actions",7)),e&2&&(t("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),t("formGroup",i.form),s(3),t("source",i.notificationEmails)("config",i.selectConfig),s(),t("source",i.notificationSmses)("config",i.selectConfig),s(),t("source",i.notificationPushes)("config",i.selectConfig),s(),t("actions",i.actions));},dependencies:[O,A,C,M,E,p,v,R,D,H,y,B,V,G,z,$],encapsulation:2});let m=n;return m;})();export{ni as a};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/