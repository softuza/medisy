import{b as h}from"./chunk-ZRCWU2WH.js";import{g as ie,h as te}from"./chunk-GEHKM7AM.js";import{e as K,f as Q,g as Z,j as ee}from"./chunk-4PO5ZDJC.js";import{a as b,b as H,e as X,g as x}from"./chunk-6EVQMKN4.js";import{c as W,t as J}from"./chunk-BI6HPZ47.js";import{a as q,h as j,i as w,j as Y,k}from"./chunk-45BT2WXK.js";import{d as a,f as V,g as $,k as v,m as P,p as F,q as z,t as G}from"./chunk-7T6A67P3.js";import{aa as y,da as B}from"./chunk-IU3SBL3R.js";import{Db as I,Fb as N,Gb as T,Hb as n,Ib as _,Jb as d,Tb as f,bb as S,cb as s,dc as O,ec as L,jc as D,kc as U,oa as R,ob as C,xb as E}from"./chunk-BSOORNNN.js";import{a as A}from"./chunk-73BG4Q2P.js";var u=function(e){return e.UPDATE_PASSWORD="UPDATE_PASSWORD",e.UPDATE_PROFILE="UPDATE_PROFILE",e.VERIFY_EMAIL="VERIFY_EMAIL",e.CONFIGURE_TOTP="CONFIGURE_TOTP",e;}(u||{});function oe(e,r){if(e&1&&(n(0,"mat-option",11),O(1),_()),e&2){let c=r.$implicit;E("value",c),S(),L(c);}}var Ge=(()=>{let r=class r extends K{constructor(l,o,i,t){super(i),this.accessManagementService=l,this.fb=o,this.dialog=i,this.data=t,this.requiredActions=Object.keys(u).map(M=>u[M]),this.form=o.group({username:[t?.username,[a.required]],email:[t?.email,[a.required,a.email]],firstName:[t?.firstName,[a.maxLength(128)]],lastName:[t?.lastName,[a.maxLength(128)]],enabled:[t?.enabled??!0,[a.required]],emailVerified:[t?.emailVerified??!0,[a.required]],requiredActions:[t?.requiredActions??[],[]]});}submit(){this.IsValid()&&(this.data?this.save(this.accessManagementService.updateUser(this.data.id,A(A({},this.data),this.form.value))):this.save(this.accessManagementService.createUser(this.form.value)));}};r.ɵfac=function(o){return new(o||r)(s(h),s(z),s(b),s(H));},r.ɵcmp=R({type:r,selectors:[["sz-iam-users-save"]],standalone:!0,features:[D([]),C,U],decls:20,vars:5,consts:()=>{let l;l="\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645";let o;o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let i;i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let t;t="\u0627\u0644\u0643\u0646\u064A\u0629";let M;M="\u0625\u062C\u0631\u0627\u0621\u0627\u062A";let p;p="\u0645\u0641\u0639\u0644";let g;return g="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0624\u0643\u062F",[M,p,g,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",l],["formControlName","email","label",o],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",t],["formControlName","requiredActions","multiple","true"],[3,"value"],["formControlName","enabled"],["formControlName","emailVerified"],[3,"actions"]];},template:function(o,i){o&1&&(d(0,"sz-ui-dialog-header",3),n(1,"mat-dialog-content")(2,"form",4),d(3,"sz-ui-form-field-input",5)(4,"sz-ui-form-field-input",6),n(5,"div",7),d(6,"sz-ui-form-field-input",8)(7,"sz-ui-form-field-input",9),_(),n(8,"mat-form-field")(9,"mat-label"),f(10,0),_(),n(11,"mat-select",10),N(12,oe,2,2,"mat-option",11,I),_()(),n(14,"div",7)(15,"mat-slide-toggle",12),f(16,1),_(),n(17,"mat-slide-toggle",13),f(18,2),_()()()(),d(19,"sz-ui-dialog-actions",14)),o&2&&(E("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),S(2),E("formGroup",i.form),S(10),T(i.requiredActions),S(7),E("actions",i.actions));},dependencies:[G,v,V,$,P,F,x,X,w,j,q,te,ie,k,Y,y,B,ee,Q,Z,J,W],encapsulation:2});let e=r;return e;})();export{Ge as a};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/