import{c as h}from"./chunk-UIKAIS3J.js";import{a as te,b as ie}from"./chunk-ODMA64W5.js";import{g as K,h as Q,i as Z,l as ee}from"./chunk-WNELB757.js";import{a as x,b as B,e as H,g as X}from"./chunk-U3H7W2BJ.js";import{c as k,v as J}from"./chunk-RZVXFLAF.js";import{b as q,i as w,j as W,k as Y,l as j}from"./chunk-ELOLLYFG.js";import{d as a,f as V,g as $,l as P,o as v,r as F,s as z,u as G}from"./chunk-KMQC4JE3.js";import{Ba as b,Ea as y}from"./chunk-BKKXZCD4.js";import{Fb as N,Hb as T,Ib as I,Jb as r,Kb as n,Lb as E,Vb as d,bb as s,gc as O,hc as L,ja as m,mb as C,mc as D,na as R,nc as U,yb as S}from"./chunk-5UGT7ICT.js";import{a as f}from"./chunk-KKIINILB.js";var M=function(t){return t.UPDATE_PASSWORD="UPDATE_PASSWORD",t.UPDATE_PROFILE="UPDATE_PROFILE",t.VERIFY_EMAIL="VERIFY_EMAIL",t.CONFIGURE_TOTP="CONFIGURE_TOTP",t;}(M||{});function oe(t,o){if(t&1&&(r(0,"mat-option",11),O(1),n()),t&2){let u=o.$implicit;S("value",u),s(),L(u);}}var ve=(()=>{let o=class o extends K{constructor(){super(m(x)),this.accessManagementService=m(h),this.fb=m(z),this.data=m(B),this.requiredActions=Object.keys(M).map(i=>M[i]);let _=this.fb,e=this.data;this.form=_.group({username:[e?.username,[a.required]],email:[e?.email,[a.required,a.email]],firstName:[e?.firstName,[a.maxLength(128)]],lastName:[e?.lastName,[a.maxLength(128)]],enabled:[e?.enabled??!0,[a.required]],emailVerified:[e?.emailVerified??!0,[a.required]],requiredActions:[e?.requiredActions??[],[]]});}submit(){this.IsValid()&&(this.data?this.save(this.accessManagementService.updateUser(this.data.id,f(f({},this.data),this.form.value))):this.save(this.accessManagementService.createUser(this.form.value)));}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=R({type:o,selectors:[["sz-iam-users-save"]],standalone:!0,features:[D([]),C,U],decls:20,vars:5,consts:()=>{let _;_="\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645";let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let i;i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let A;A="\u0627\u0644\u0643\u0646\u064A\u0629";let p;p="\u0625\u062C\u0631\u0627\u0621\u0627\u062A";let c;c="\u0645\u0641\u0639\u0644";let g;return g="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0624\u0643\u062F",[p,c,g,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",_],["formControlName","email","label",e],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",A],["formControlName","requiredActions","multiple","true"],[3,"value"],["formControlName","enabled"],["formControlName","emailVerified"],[3,"actions"]];},template:function(e,i){e&1&&(E(0,"sz-ui-dialog-header",3),r(1,"mat-dialog-content")(2,"form",4),E(3,"sz-ui-form-field-input-text",5)(4,"sz-ui-form-field-input-text",6),r(5,"div",7),E(6,"sz-ui-form-field-input-text",8)(7,"sz-ui-form-field-input-text",9),n(),r(8,"mat-form-field")(9,"mat-label"),d(10,0),n(),r(11,"mat-select",10),T(12,oe,2,2,"mat-option",11,N),n()(),r(14,"div",7)(15,"mat-slide-toggle",12),d(16,1),n(),r(17,"mat-slide-toggle",13),d(18,2),n()()()(),E(19,"sz-ui-dialog-actions",14)),e&2&&(S("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),S("formGroup",i.form),s(10),I(i.requiredActions),s(7),S("actions",i.actions));},dependencies:[G,P,V,$,v,F,X,H,W,w,q,ie,te,j,Y,b,y,ee,Q,Z,J,k],encapsulation:2});let t=o;return t;})();export{ve as a};/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/