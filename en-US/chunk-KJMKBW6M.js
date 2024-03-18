import{a as S}from"./chunk-AMLKJLAZ.js";import{a as w,b as j,c as k,e as X,f as Y,g as H,h as V}from"./chunk-PQEEMZV3.js";import{c as Z}from"./chunk-RAIBTWMC.js";import{b as W}from"./chunk-UGYRBBDO.js";import{a as Q}from"./chunk-4PE74OIY.js";import{a as U,b as K}from"./chunk-7F6UAGLF.js";import{a as q,b as J}from"./chunk-UURSITNO.js";import{i as P}from"./chunk-JY7P4M5S.js";import{d as l,f as E,g as b,k as z,m as G,p as D,r as R,t as $}from"./chunk-ZM4DJUZ7.js";import"./chunk-VGHV2NBP.js";import{c as M}from"./chunk-4IVSKDIO.js";import{a as B,c as x}from"./chunk-74ZKMUCW.js";import{ha as A,ia as F}from"./chunk-7OYUJW7P.js";import"./chunk-NPHC65O7.js";import{Db as T,Ec as I,Ib as a,Jb as s,Kb as c,Ub as O,Wb as N,f as g,fb as C,g as L,hc as y,jb as u,kb as r,kc as _,nc as h,qa as f,ub as v,yb as p}from"./chunk-OUC2FABB.js";function nt(n,o){n&1&&c(0,"mat-progress-bar",11);}var Et=(()=>{let o=class o{constructor(t,e,i,m){this.locale=t,this.fb=e,this.router=i,this.authService=m,this.alert=C(void 0),this.indicator=C(!1),this.loginStorage="medisy-portal-login",this.subscriptions=new L();let{email:d,organization:tt}=this.loadLoginData();this.form=this.fb.group({email:[d,[l.required,l.minLength(1),l.email]],organization:[tt,[l.required,l.minLength(3),l.maxLength(255)]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.email.valueChanges.subscribe(t=>{this.emailChanged(t);}));}emailChanged(t){let e=t.indexOf("@");if(e>0){let i=t.indexOf(".",e);this.form.controls.organization.setValue(t.substring(e+1,i>0?i:t.length));}}login(){return g(this,null,function*(){if(this.form&&!this.form.valid)return Object.keys(this.form.controls).forEach(e=>{this.form.get(e)?.markAsTouched({onlySelf:!0});}),!1;this.indicator.set(!0);let t=this.authService.setOptions({realm:this.form.value.organization,username:this.form.value.email,clientId:"medisy-portal"});return yield this.authInitialize(t),!0;});}saveLoginData(){localStorage.setItem(this.loginStorage,JSON.stringify({email:this.form.value.email,organization:this.form.value.organization}));}loadLoginData(){try{let t=localStorage.getItem(this.loginStorage);if(t)return JSON.parse(t);}catch(t){console.log(t);}return{email:"",organization:""};}authInitialize(t){return g(this,null,function*(){try{if(yield this.authService.initialize(t)){this.router.navigate(["/"]);return;}this.saveLoginData(),yield this.authService.login({loginHint:t.username,locale:this.locale});}catch{this.indicator.set(!1),this.alert.set({message:"Faield to login",type:Q.Error,timeout:5e3});}});}};o.ɵfac=function(e){return new(e||o)(r(I),r(R),r(M),r(S));},o.ɵcmp=f({type:o,selectors:[["sz-identity-auth-login"]],standalone:!0,features:[_([]),h],decls:21,vars:4,consts:()=>{let t;t="Login";let e;e="Email";let i;i="Organization";let m;return m="Login",[[1,"content-center"],[2,"font-size","x-large"],["svgIcon","logo",1,"logo"],t,[2,"padding","16px"],[3,"alert"],[3,"formGroup","keyup.enter"],["formControlName","email","label",e],["formControlName","organization","label",i],["mat-button","",1,"button-submit",3,"disabled","click"],m,["mode","indeterminate"]];},template:function(e,i){e&1&&(a(0,"div",0)(1,"h2",1)(2,"strong"),y(3,"Medisy"),s()(),c(4,"mat-icon",2),a(5,"mat-card")(6,"mat-card-header")(7,"mat-card-title"),O(8,3),s()(),a(9,"mat-card-content",4),c(10,"sz-ui-alert",5),a(11,"form",6),N("keyup.enter",function(){return i.login();}),c(12,"sz-ui-form-field-input",7)(13,"sz-ui-form-field-input",8),s(),c(14,"mat-divider"),s(),a(15,"mat-card-actions")(16,"button",9),N("click",function(){return i.login();}),a(17,"span"),O(18,10),s()()(),a(19,"mat-card-footer"),v(20,nt,1,0,"mat-progress-bar",11),s()()()),e&2&&(u(10),p("alert",i.alert()),u(),p("formGroup",i.form),u(5),p("disabled",i.indicator()),u(4),T(20,i.indicator()?20:-1));},dependencies:[$,z,E,b,G,D,V,w,X,k,H,Y,j,K,U,P,F,A,J,q,x,B,W,Z],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}.logo[_ngcontent-%COMP%]{color:#fff;height:64px;width:64px}"]});let n=o;return n;})();var Ft=(()=>{let o=class o{constructor(t,e,i){this.locale=t,this.router=e,this.identityService=i;}ngOnInit(){return g(this,null,function*(){let t=this.identityService.getOptions();if(!t){this.router.navigate(["/auth/login"]);return;}if(yield this.identityService.initialize(t)){this.router.navigate(["/"]);return;}yield this.identityService.login({loginHint:t.username,locale:this.locale});});}};o.ɵfac=function(e){return new(e||o)(r(I),r(M),r(S));},o.ɵcmp=f({type:o,selectors:[["sz-identity-auth-redirect"]],standalone:!0,features:[_([]),h],decls:0,vars:0,template:function(e,i){},encapsulation:2});let n=o;return n;})();export{Et as SzAuthLoginComponent,Ft as SzAuthRedirectComponent};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/