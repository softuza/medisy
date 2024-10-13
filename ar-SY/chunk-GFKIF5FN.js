import{a as p}from"./chunk-DCF7U7UN.js";import{a as J,b as K,c as Q,d as U,e as Z}from"./chunk-XBZDPRMS.js";import{f as k,g as w,h as j,k as q}from"./chunk-XVW27JLP.js";import{a as A}from"./chunk-4U6IS2IO.js";import{a as Y,b as F,e as z,g as b}from"./chunk-DORI46RQ.js";import{c as G,d as x,q as H,r as v,t as X,v as W}from"./chunk-XSVH7MQJ.js";import{d as l,f as h,g as D,l as P,o as $,r as y,s as V,u as B}from"./chunk-ZWU3YGKZ.js";import{Kb as a,Lb as t,Mb as n,Wb as S,cb as m,hc as d,ja as E,na as c,nb as N,qc as I,rc as L,zb as s}from"./chunk-6SIAYQG6.js";var Te=(()=>{let r=class r extends k{constructor(){let _=E(Y);super(_),this.mlabService=E(A),this.fb=E(V),this.data=E(F);let o=this.fb;this.dialog=_;let e=this.data;this.form=o.group({name:[e?.name,[l.required,l.minLength(1)]],description:[e?.description,[]],address:[e?.address],primaryPhone:[e?.primaryPhone,[p.phoneNumber()]],secondaryPhone:[e?.secondaryPhone,[p.phoneNumber()]],primaryEmail:[e?.primaryEmail,[l.email]],secondaryEmail:[e?.secondaryEmail,[l.email]],hasPrimaryPhoneWhatsapp:[e?.hasPrimaryPhoneWhatsapp??!1,[]],hasSecondaryPhoneWhatsapp:[e?.hasSecondaryPhoneWhatsapp??!1,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referrers.update(this.data.id,this.form.value)):this.save(this.mlabService.referrers.create(this.form.value)));}};r.ɵfac=function(o){return new(o||r)();},r.ɵcmp=c({type:r,selectors:[["sz-medisy-laboratory-referrers-referrer-save"]],standalone:!0,features:[I([A]),N,L],decls:29,vars:5,consts:()=>{let _;_="\u0627\u0644\u0627\u0633\u0645";let o;o="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let M;M="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A";let f;f="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let T;T="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let u;u="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let C;C="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let O;O="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let g;return g="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[C,O,g,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",_],["formControlName","description","label",o],[1,"tw-mb-4"],["multi",""],["formControlName","address","label",e],["formControlName","primaryPhone","label",M],["formControlName","hasPrimaryPhoneWhatsapp","labelPosition","after"],["formControlName","secondaryPhone","label",f],["formControlName","hasSecondaryPhoneWhatsapp","labelPosition","after"],["formControlName","primaryEmail","label",T],["formControlName","secondaryEmail","label",u],[3,"actions"]];},template:function(o,e){o&1&&(n(0,"sz-ui-dialog-header",3),a(1,"mat-dialog-content")(2,"form",4),n(3,"sz-ui-form-field-input-text",5)(4,"sz-ui-form-field-textarea",6),a(5,"div",7)(6,"mat-accordion",8)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),S(10,0),t()(),n(11,"sz-ui-form-field-address",9),t(),a(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),S(15,1),t()(),n(16,"sz-ui-form-field-input-text",10),a(17,"mat-checkbox",11),d(18,"WhatsApp"),t(),n(19,"sz-ui-form-field-input-text",12),a(20,"mat-checkbox",13),d(21,"WhatsApp"),t()(),a(22,"mat-expansion-panel")(23,"mat-expansion-panel-header")(24,"mat-panel-title"),S(25,2),t()(),n(26,"sz-ui-form-field-input-text",14)(27,"sz-ui-form-field-input-text",15),t()()()()(),n(28,"sz-ui-dialog-actions",16)),o&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),s("formGroup",e.form),m(26),s("actions",e.actions));},dependencies:[B,P,h,D,$,y,b,z,q,w,j,W,G,X,x,v,H,Z,U,J,K,Q],encapsulation:2});let R=r;return R;})();export{Te as a};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/