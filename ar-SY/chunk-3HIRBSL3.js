import{a as S}from"./chunk-ANUUWGXX.js";import{c as Q}from"./chunk-6LY23KCH.js";import{b as K,f as W}from"./chunk-26Z5FPBL.js";import{a as J}from"./chunk-FIREYTYE.js";import{a as w,b as B,c as j,e as D,f as x,g as k,h as U,i as V,j as q}from"./chunk-CTLHETRS.js";import{a as X,b as H}from"./chunk-Y57UOOVT.js";import{i as z}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as M,f as y,g as L,k as E,m as T,p as G,r as A,t as R}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as I}from"./chunk-NBJEKYXR.js";import{ga as b,ha as F,ia as $,ka as P}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Cc as _,Db as N,Ib as a,Jb as m,Kb as l,Ub as h,Vb as v,ab as c,bb as n,kc as g,lc as f,na as u,nb as C,ub as O,yb as p}from"./chunk-WEQMZHJB.js";import{i as d}from"./chunk-ZSRQUDS2.js";function it(o,e){o&1&&l(0,"mat-progress-bar",10);}var Lt=(()=>{let e=class e{constructor(r,t,i,s){this.locale=r,this.fb=t,this.router=i,this.identityService=s,this.alert=C(void 0),this.indicator=C(!1);let Y=this.identityService.storage.get();this.form=this.fb.group({email:[Y?.username,[M.required,M.minLength(1),M.email]]});}login(){return d(this,null,function*(){return W(this.form)?(this.indicator.set(!0),yield this.authInitialize(this.form.value.email),this.indicator.set(!1),!0):!1;});}authInitialize(r){return d(this,null,function*(){try{if(yield this.identityService.initialize()){this.router.navigate(["/"]);return;}yield this.identityService.login({loginHint:r,locale:this.locale,redirectUri:this.identityService.getAuthRedirectUri()});}catch{this.alert.set({message:"Faield to login",type:J.Error,timeout:5e3});}});}};e.ɵfac=function(t){return new(t||e)(n(_),n(A),n(I),n(S));},e.ɵcmp=u({type:e,selectors:[["sz-iam-auth-login"]],standalone:!0,features:[g([]),f],decls:17,vars:4,consts:()=>{let r;r="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;t="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";let i;return i="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",[t,i,[1,"content-center"],["svgIcon","logo",1,"logo"],[1,"tw-m-2"],[2,"padding","16px"],[3,"alert"],[3,"keyup.enter","formGroup"],["formControlName","email","label",r],["mat-button","",1,"button-submit",3,"click","disabled"],["mode","indeterminate"]];},template:function(t,i){t&1&&(a(0,"div",2),l(1,"mat-icon",3),a(2,"mat-card",4)(3,"mat-card-header")(4,"mat-card-title"),h(5,0),m()(),a(6,"mat-card-content",5),l(7,"sz-ui-alert",6),a(8,"form",7),v("keyup.enter",function(){return i.login();}),l(9,"sz-ui-form-field-input",8),m(),l(10,"mat-divider"),m(),a(11,"mat-card-actions")(12,"button",9),v("click",function(){return i.login();}),a(13,"span"),h(14,1),m()()(),a(15,"mat-card-footer"),O(16,it,1,0,"mat-progress-bar",10),m()()()),t&2&&(c(7),p("alert",i.alert()),c(),p("formGroup",i.form),c(4),p("disabled",i.indicator()),c(4),N(i.indicator()?16:-1));},dependencies:[R,E,y,L,T,G,U,w,D,j,k,x,B,q,V,z,F,b,H,X,P,$,K,Q],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{width:128px;height:128px;transform:scale(2);margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}"]});let o=e;return o;})();var zt=(()=>{let e=class e{constructor(r,t,i){this.locale=r,this.router=t,this.identityService=i;}ngOnInit(){return d(this,null,function*(){if(yield this.identityService.initialize()){this.router.navigate(["/"]);return;}let t=this.identityService.storage.get();if(!t){this.router.navigate(["/auth/login"]);return;}yield this.identityService.login({loginHint:t.username,locale:this.locale,redirectUri:this.identityService.getAuthRedirectUri()});});}};e.ɵfac=function(t){return new(t||e)(n(_),n(I),n(S));},e.ɵcmp=u({type:e,selectors:[["sz-iam-auth-redirect"]],standalone:!0,features:[g([]),f],decls:0,vars:0,template:function(t,i){},encapsulation:2});let o=e;return o;})();export{Lt as SzAuthLoginComponent,zt as SzAuthRedirectComponent};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/