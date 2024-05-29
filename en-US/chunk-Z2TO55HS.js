import{a as I}from"./chunk-4FUHNBAX.js";import{c as Y}from"./chunk-6LY23KCH.js";import{b as W,f as Z}from"./chunk-26Z5FPBL.js";import{a as Q}from"./chunk-FIREYTYE.js";import{a as x,b as D,c as j,e as X,f as k,g as U,h as H,i as J,j as K}from"./chunk-CTLHETRS.js";import{a as V,b as q}from"./chunk-Y57UOOVT.js";import{i as P}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as s,f as E,g as b,k as T,m as G,p as A,r as z,t as R}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as C}from"./chunk-NBJEKYXR.js";import{ga as $,ha as F,ia as B,ka as w}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Cc as h,Db as y,Ib as a,Jb as c,Kb as d,Ub as O,Vb as N,a as L,ab as g,bb as n,kc as f,lc as M,na as p,nb as S,ub as v,yb as _}from"./chunk-WEQMZHJB.js";import{i as u}from"./chunk-ZSRQUDS2.js";function oe(r,o){r&1&&d(0,"mat-progress-bar",11);}var be=(()=>{let o=class o{constructor(e,t,i,m){this.locale=e,this.fb=t,this.router=i,this.identityService=m,this.alert=S(void 0),this.indicator=S(!1),this.subscriptions=new L();let l=this.identityService.storage.get();this.form=this.fb.group({email:[l?.username,[s.required,s.minLength(1),s.email]],organization:[l?.realm,[s.required,s.minLength(3),s.maxLength(255)]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.email.valueChanges.subscribe(e=>{this.emailChanged(e);}));}emailChanged(e){let t=e.indexOf("@");if(t>0){let i=e.indexOf(".",t);this.form.controls.organization.setValue(e.substring(t+1,i>0?i:e.length));}}login(){return u(this,null,function*(){if(!Z(this.form))return!1;this.indicator.set(!0);let e=this.identityService.storage.set({realm:this.form.value.organization,username:this.form.value.email});return yield this.authInitialize(e),this.indicator.set(!1),!0;});}authInitialize(e){return u(this,null,function*(){try{if(yield this.identityService.initialize(e)){this.router.navigate(["/"]);return;}yield this.identityService.login({loginHint:e.username,locale:this.locale,redirectUri:this.identityService.getAuthRedirectUri()});}catch{this.alert.set({message:"Faield to login",type:Q.Error,timeout:5e3});}});}};o.ɵfac=function(t){return new(t||o)(n(h),n(z),n(C),n(I));},o.ɵcmp=p({type:o,selectors:[["sz-iam-auth-login"]],standalone:!0,features:[f([]),M],decls:18,vars:4,consts:()=>{let e;e="Email";let t;t="Organization";let i;i="Login";let m;return m="Login",[i,m,[1,"content-center"],["svgIcon","logo",1,"logo"],[1,"tw-m-2"],[2,"padding","16px"],[3,"alert"],[3,"keyup.enter","formGroup"],["formControlName","email","label",e],["formControlName","organization","label",t],["mat-button","",1,"button-submit",3,"click","disabled"],["mode","indeterminate"]];},template:function(t,i){t&1&&(a(0,"div",2),d(1,"mat-icon",3),a(2,"mat-card",4)(3,"mat-card-header")(4,"mat-card-title"),O(5,0),c()(),a(6,"mat-card-content",5),d(7,"sz-ui-alert",6),a(8,"form",7),N("keyup.enter",function(){return i.login();}),d(9,"sz-ui-form-field-input",8)(10,"sz-ui-form-field-input",9),c(),d(11,"mat-divider"),c(),a(12,"mat-card-actions")(13,"button",10),N("click",function(){return i.login();}),a(14,"span"),O(15,1),c()()(),a(16,"mat-card-footer"),v(17,oe,1,0,"mat-progress-bar",11),c()()()),t&2&&(g(7),_("alert",i.alert()),g(),_("formGroup",i.form),g(5),_("disabled",i.indicator()),g(4),y(i.indicator()?17:-1));},dependencies:[R,T,E,b,G,A,H,x,X,j,U,k,D,K,J,P,F,$,q,V,w,B,W,Y],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{width:128px;height:128px;transform:scale(2);margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}"]});let r=o;return r;})();var Pe=(()=>{let o=class o{constructor(e,t,i){this.locale=e,this.router=t,this.identityService=i;}ngOnInit(){return u(this,null,function*(){let e=this.identityService.storage.get();if(!e){this.router.navigate(["/auth/login"]);return;}if(yield this.identityService.initialize(e)){this.router.navigate(["/"]);return;}yield this.identityService.login({loginHint:e.username,locale:this.locale,redirectUri:this.identityService.getAuthRedirectUri()});});}};o.ɵfac=function(t){return new(t||o)(n(h),n(C),n(I));},o.ɵcmp=p({type:o,selectors:[["sz-iam-auth-redirect"]],standalone:!0,features:[f([]),M],decls:0,vars:0,template:function(t,i){},encapsulation:2});let r=o;return r;})();export{be as SzAuthLoginComponent,Pe as SzAuthRedirectComponent};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/