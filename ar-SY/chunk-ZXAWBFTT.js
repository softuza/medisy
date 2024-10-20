import{b as P}from"./chunk-UIKAIS3J.js";import{a as B,b as D,c as H,e as k,f as X,g as V,h as q}from"./chunk-6PI4UN5O.js";import{c as Y,w as Z}from"./chunk-RZVXFLAF.js";import{b as K}from"./chunk-YJEUB3NB.js";import{b as J}from"./chunk-GCAF7ZOT.js";import{j as w}from"./chunk-ELOLLYFG.js";import{d as _,f as N,g as E,h as y,l as T,o as v,r as b,t as A,u as G}from"./chunk-KMQC4JE3.js";import{a as Q,b as W}from"./chunk-7TYFREJF.js";import{b as j}from"./chunk-BKHR7P2T.js";import{a as $}from"./chunk-5COP62WY.js";import{r as U}from"./chunk-VFFUX6UX.js";import{Ia as R,Ja as x,Ka as z,Ma as F}from"./chunk-BKKXZCD4.js";import{Cc as I,E as M,Eb as C,Jb as r,Kb as m,Lb as s,Vb as p,Wb as g,bb as l,ja as a,kb as u,mc as L,na as S,nc as O,rb as h,yb as c}from"./chunk-5UGT7ICT.js";import{i as f}from"./chunk-KKIINILB.js";function ee(n,o){n&1&&s(0,"mat-progress-bar",10);}var Ne=(()=>{let o=class o{constructor(){this.locale=a(I),this.fb=a(A),this.router=a(U),this.identityService=a(P),this.alert=u(void 0),this.indicator=u(!1);let e=this.identityService.storage.get();this.form=this.fb.group({email:[e?.email,[_.required,_.minLength(1),_.email]]}),this.formSubscription=this.form.events.pipe(M(t=>t instanceof y)).subscribe(t=>{this.form.get("email")?.setValue(this.form.get("email")?.value.trim(),{emitEvent:!1});});}ngOnDestroy(){this.formSubscription.unsubscribe();}login(){return f(this,null,function*(){if(!Z(this.form))return!1;this.indicator.set(!0);try{yield this.identityService.login({scope:this.identityService.getDefaultScope(),loginHint:this.form.value.email,locale:this.locale,redirectUri:this.getRedirectUri()});}catch{this.alert.set(J.error($.login_failed,5e3));}finally{this.indicator.set(!1);}return!0;});}getRedirectUri(){let e=this.router.parseUrl(this.router.url).queryParams.redirect;return e?this.identityService.getBaseUrl()+(e.endsWith("/")?e.substring(0,e.length-1):e):this.identityService.getBaseUrl();}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=S({type:o,selectors:[["sz-iam-auth-login"]],standalone:!0,features:[L([]),O],decls:16,vars:4,consts:()=>{let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;t="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";let i;return i="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",[t,i,[1,"content-center"],["svgIcon","logo",1,"logo"],[1,"tw-m-2","login-card"],[2,"padding","16px"],[3,"alert"],[3,"keyup.enter","formGroup"],["formControlName","email","label",e],["mat-button","",1,"button-submit",3,"click","disabled"],["mode","indeterminate"]];},template:function(t,i){t&1&&(r(0,"div",2),s(1,"mat-icon",3),r(2,"mat-card",4)(3,"mat-card-header")(4,"mat-card-title"),p(5,0),m()(),r(6,"mat-card-content",5),s(7,"sz-ui-alert",6),r(8,"form",7),g("keyup.enter",function(){return i.login();}),s(9,"sz-ui-form-field-input-text",8),m()(),r(10,"mat-card-actions")(11,"button",9),g("click",function(){return i.login();}),r(12,"span"),p(13,1),m()()(),r(14,"mat-card-footer"),h(15,ee,1,0,"mat-progress-bar",10),m()()()),t&2&&(l(7),c("alert",i.alert()),l(),c("formGroup",i.form),l(3),c("disabled",i.indicator()),l(4),C(i.indicator()?15:-1));},dependencies:[G,T,N,E,v,b,q,B,k,H,V,X,D,W,Q,w,x,R,j,F,z,K,Y],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{width:128px;height:128px;transform:scale(2);margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}.login-card[_ngcontent-%COMP%]{min-width:600px}@media screen and (max-width: 992px){.login-card[_ngcontent-%COMP%]{min-width:520px}}@media screen and (max-width: 600px){.login-card[_ngcontent-%COMP%]{min-width:420px}}@media screen and (max-width: 480px){.login-card[_ngcontent-%COMP%]{min-width:100%}}"]});let n=o;return n;})();export{Ne as SzAuthLoginComponent};/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/