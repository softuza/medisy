import"./chunk-TMS46F2S.js";import{a as S}from"./chunk-B7DUZM5V.js";import{a as w,b as j,c as k,e as X,f as Y,g as H,h as V}from"./chunk-JUXA3TTM.js";import{l as Z}from"./chunk-VBUQVK7Q.js";import{b as W}from"./chunk-IYSGQK54.js";import{a as Q}from"./chunk-D4OS2O7B.js";import{a as U,b as K}from"./chunk-QTM2YACZ.js";import{a as q,b as J}from"./chunk-2W3OIU7Y.js";import{i as P}from"./chunk-OIFHB67M.js";import{d as l,f as E,g as b,k as z,m as G,p as D,r as R,t as $}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{c as M}from"./chunk-YYZRSXTZ.js";import{a as B,c as x}from"./chunk-B3RLTRYJ.js";import{ga as A,ha as F}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Ab as T,Ac as I,Fb as a,Gb as s,Hb as c,Rb as O,Tb as N,cb as C,ec as y,f as g,g as L,gb as u,hb as r,hc as _,kc as h,oa as f,rb as v,vb as p}from"./chunk-UDYUYOMJ.js";function nt(n,o){n&1&&c(0,"mat-progress-bar",11);}var Et=(()=>{let o=class o{constructor(t,e,i,m){this.locale=t,this.fb=e,this.router=i,this.authService=m,this.alert=C(void 0),this.indicator=C(!1),this.loginStorage="medisy-portal-login",this.subscriptions=new L();let{email:d,organization:tt}=this.loadLoginData();this.form=this.fb.group({email:[d,[l.required,l.minLength(1),l.email]],organization:[tt,[l.required,l.minLength(3),l.maxLength(255)]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.email.valueChanges.subscribe(t=>{this.emailChanged(t);}));}emailChanged(t){let e=t.indexOf("@");if(e>0){let i=t.indexOf(".",e);this.form.controls.organization.setValue(t.substring(e+1,i>0?i:t.length));}}login(){return g(this,null,function*(){if(this.form&&!this.form.valid)return Object.keys(this.form.controls).forEach(e=>{this.form.get(e)?.markAsTouched({onlySelf:!0});}),!1;this.indicator.set(!0);let t=this.authService.setOptions({realm:this.form.value.organization,username:this.form.value.email,clientId:"medisy-portal"});return yield this.authInitialize(t),!0;});}saveLoginData(){localStorage.setItem(this.loginStorage,JSON.stringify({email:this.form.value.email,organization:this.form.value.organization}));}loadLoginData(){try{let t=localStorage.getItem(this.loginStorage);if(t)return JSON.parse(t);}catch(t){console.log(t);}return{email:"",organization:""};}authInitialize(t){return g(this,null,function*(){try{if(yield this.authService.initialize(t)){this.router.navigate(["/"]);return;}this.saveLoginData(),yield this.authService.login({loginHint:t.username,locale:this.locale});}catch{this.indicator.set(!1),this.alert.set({message:"Faield to login",type:Q.Error,timeout:5e3});}});}};o.ɵfac=function(e){return new(e||o)(r(I),r(R),r(M),r(S));},o.ɵcmp=f({type:o,selectors:[["sz-identity-auth-login"]],standalone:!0,features:[_([]),h],decls:21,vars:4,consts:()=>{let t;t="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let i;i="\u0627\u0644\u0645\u0646\u0638\u0645\u0629";let m;return m="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",[[1,"content-center"],[2,"font-size","x-large"],["svgIcon","logo",1,"logo"],t,[3,"alert"],[2,"padding","16px"],[3,"formGroup","keyup.enter"],["formControlName","email","label",e],["formControlName","organization","label",i],["mat-button","",1,"button-submit",3,"disabled","click"],m,["mode","indeterminate"]];},template:function(e,i){e&1&&(a(0,"div",0)(1,"h2",1)(2,"strong"),y(3,"Medisy"),s()(),c(4,"mat-icon",2),a(5,"mat-card")(6,"mat-card-header")(7,"mat-card-title"),O(8,3),s()(),c(9,"sz-ui-alert",4),a(10,"mat-card-content",5)(11,"form",6),N("keyup.enter",function(){return i.login();}),c(12,"sz-ui-form-field-input",7)(13,"sz-ui-form-field-input",8),s(),c(14,"mat-divider"),s(),a(15,"mat-card-actions")(16,"button",9),N("click",function(){return i.login();}),a(17,"span"),O(18,10),s()()(),a(19,"mat-card-footer"),v(20,nt,1,0,"mat-progress-bar",11),s()()()),e&2&&(u(9),p("alert",i.alert()),u(2),p("formGroup",i.form),u(5),p("disabled",i.indicator()),u(4),T(20,i.indicator()?20:-1));},dependencies:[$,z,E,b,G,D,V,w,X,k,H,Y,j,K,U,P,F,A,J,q,x,B,W,Z],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}.logo[_ngcontent-%COMP%]{color:#fff;height:64px;width:64px}"]});let n=o;return n;})();var Ft=(()=>{let o=class o{constructor(t,e,i){this.locale=t,this.router=e,this.identityService=i;}ngOnInit(){return g(this,null,function*(){let t=this.identityService.getOptions();if(!t){this.router.navigate(["/auth/login"]);return;}if(yield this.identityService.initialize(t)){this.router.navigate(["/"]);return;}yield this.identityService.login({loginHint:t.username,locale:this.locale});});}};o.ɵfac=function(e){return new(e||o)(r(I),r(M),r(S));},o.ɵcmp=f({type:o,selectors:[["sz-identity-auth-redirect"]],standalone:!0,features:[_([]),h],decls:0,vars:0,template:function(e,i){},encapsulation:2});let n=o;return n;})();export{Et as SzAuthLoginComponent,Ft as SzAuthRedirectComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/