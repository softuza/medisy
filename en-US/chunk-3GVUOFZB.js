import{a as S}from"./chunk-ZSIH7CEA.js";import{f as y,g as B,h as b,k as H}from"./chunk-EHRUYX7E.js";import{a as R,b as $,e as G,g as v}from"./chunk-LPBBK4O4.js";import{c as V,r as L,s as z,u as P}from"./chunk-TWEOE35B.js";import{i as D}from"./chunk-QGIEGZ43.js";import{d as f,f as E,g as M,l as p,o as g,r as O,s as h,u as F}from"./chunk-OG6X44JX.js";import{Jb as N,Kb as u,Lb as _,bb as n,ja as r,mb as d,mc as A,na as T,nc as C,yb as o}from"./chunk-DS5EYDIY.js";var ti=(()=>{let s=class s extends y{constructor(){let t=r(R);super(t),this.sntiService=r(S),this.fb=r(h),this.data=r($),this.notificationEmails=this.sntiService.notificationEmails.getAll({orderBy:["subject"]}),this.notificationPushes=this.sntiService.notificationPushes.getAll({orderBy:["title"]}),this.notificationSmses=this.sntiService.notificationSmses.getAll({orderBy:["originator"]}),this.notificationWhatsapps=this.sntiService.notificationWhatsapps.getAll({orderBy:["name"]}),this.selectConfig={emptyOption:!0};let e=this.fb;this.dialog=t;let i=this.data;this.form=e.group({name:[i?.name,[f.required]],description:[i?.description,[f.maxLength(4096)]],notificationEmailId:[i?.notificationEmailId,[]],notificationPushId:[i?.notificationPushId,[]],notificationSmsId:[i?.notificationSmsId,[]],notificationWhatsappId:[i?.notificationWhatsappId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};s.ɵfac=function(e){return new(e||s)();},s.ɵcmp=T({type:s,selectors:[["sz-mgmt-notification-notification-save"]],standalone:!0,features:[A([S]),d,C],decls:10,vars:13,consts:()=>{let t;t="Name";let e;e="Description";let i;i="Email";let I;I="SMS";let m;m="Push";let c;return c="Push",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","notificationEmailId","label",i,3,"source","config"],["formControlName","notificationSmsId","label",I,3,"source","config"],["formControlName","notificationPushId","label",m,3,"source","config"],["formControlName","notificationWhatsappId","label",c,3,"source","config"],[3,"actions"]];},template:function(e,i){e&1&&(_(0,"sz-ui-dialog-header",0),N(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7),u()(),_(9,"sz-ui-dialog-actions",8)),e&2&&(o("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),n(2),o("formGroup",i.form),n(3),o("source",i.notificationEmails)("config",i.selectConfig),n(),o("source",i.notificationSmses)("config",i.selectConfig),n(),o("source",i.notificationPushes)("config",i.selectConfig),n(),o("source",i.notificationWhatsapps)("config",i.selectConfig),n(),o("actions",i.actions));},dependencies:[F,p,E,M,g,O,v,G,D,H,B,b,P,V,z,L],encapsulation:2});let l=s;return l;})();export{ti as a};/**i18n:6c48f065f364e8af2f9b3988c11b65215771220baa9050fae62cd2fcf6d0547a*/