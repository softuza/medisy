import{a as V}from"./chunk-N7FFVIDD.js";import{e as L,f as P,g as B,j as H}from"./chunk-CR4T7ICE.js";import{a as F,b as h,e as R,g as v}from"./chunk-XG5XEC3X.js";import{e as G,w as $,y as z,z as y}from"./chunk-NP4UDNU2.js";import{j as D}from"./chunk-DPTX3R7K.js";import{d as S,f as p,g as M,l as A,n as E,q as O,r as C,u as g}from"./chunk-5RALKHWD.js";import{Jb as d,Kb as N,Lb as l,bb as s,cb as a,na as f,nc as T,oc as u,qb as c,zb as t}from"./chunk-34GBQTTX.js";var ti=(()=>{let n=class n extends L{constructor(r,e,i,o){super(i),this.sntiService=r,this.fb=e,this.dialog=i,this.data=o,this.notificationEmails=this.sntiService.notificationEmails.getAll({orderBy:["subject"]}),this.notificationPushes=this.sntiService.notificationPushes.getAll({orderBy:["title"]}),this.notificationSmses=this.sntiService.notificationSmses.getAll({orderBy:["originator"]}),this.form=e.group({name:[o?.name,[S.required]],description:[o?.description,[S.maxLength(4096)]],notificationEmailId:[o?.notificationEmailId,[]],notificationPushId:[o?.notificationPushId,[]],notificationSmsId:[o?.notificationSmsId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};n.ɵfac=function(e){return new(e||n)(a(V),a(C),a(F),a(h));},n.ɵcmp=f({type:n,selectors:[["sz-mgmt-notification-notification-save"]],standalone:!0,features:[T([]),c,u],decls:9,vars:11,consts:()=>{let r;r="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let i;i="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let o;o="\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";let I;return I="\u062F\u0641\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","notificationEmailId","label",i,3,"source","emptyOption"],["formControlName","notificationSmsId","label",o,3,"source","emptyOption"],["formControlName","notificationPushId","label",I,3,"source","emptyOption"],[3,"actions"]];},template:function(e,i){e&1&&(l(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),N()(),l(8,"sz-ui-dialog-actions",7)),e&2&&(t("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),t("formGroup",i.form),s(3),t("source",i.notificationEmails)("emptyOption",!0),s(),t("source",i.notificationSmses)("emptyOption",!0),s(),t("source",i.notificationPushes)("emptyOption",!0),s(),t("actions",i.actions));},dependencies:[g,A,p,M,E,O,v,R,D,H,P,B,y,G,z,$],encapsulation:2});let m=n;return m;})();export{ti as a};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/