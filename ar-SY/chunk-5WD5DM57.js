import{b as $}from"./chunk-6GUKOXD6.js";import{b as W,e as Y,z as ee}from"./chunk-HZVTZU6E.js";import{a as Q}from"./chunk-BQGY2E4W.js";import{a as k,b as D,c as X,e as j,f as U,g as V,h as H,i as J,j as K}from"./chunk-2O3PA6GN.js";import{b as q,c as Z}from"./chunk-NXGV7MLA.js";import{j as z}from"./chunk-QN2XJZ42.js";import{d as p,f as v,g as y,h as E,l as b,n as T,q as G,s as A,u as P}from"./chunk-YQYD3PHP.js";import"./chunk-FDTJH5UN.js";import{c as R}from"./chunk-HMSPALCE.js";import{ga as w,ha as x,ia as F,ka as B}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Cc as L,Db as h,E as C,Ib as i,Jb as s,Kb as d,Ub as u,Vb as g,ab as m,bb as l,kc as I,lc as N,na as S,nb as _,ub as O,yb as c}from"./chunk-MR5DLTC3.js";import{i as M}from"./chunk-XTPTFZB3.js";function ie(a,o){a&1&&d(0,"mat-progress-bar",10);}var Ge=(()=>{let o=class o{constructor(n,t,e,r){this.locale=n,this.fb=t,this.router=e,this.identityService=r,this.alert=_(void 0),this.indicator=_(!1);let te=this.identityService.storage.get();this.form=this.fb.group({email:[te?.email,[p.required,p.minLength(1),p.email]]}),this.formSubscription=this.form.events.pipe(C(f=>f instanceof E)).subscribe(f=>{this.form.get("email")?.setValue(this.form.get("email")?.value.trim(),{emitEvent:!1});});}ngOnDestroy(){this.formSubscription.unsubscribe();}login(){return M(this,null,function*(){if(!ee(this.form))return!1;this.indicator.set(!0);try{yield this.identityService.login({loginHint:this.form.value.email,locale:this.locale,redirectUri:this.identityService.getBaseUrl()});}catch{this.alert.set({message:Z.login_failed,type:Q.Error,timeout:5e3});}finally{this.indicator.set(!1);}return!0;});}};o.ɵfac=function(t){return new(t||o)(l(L),l(A),l(R),l($));},o.ɵcmp=S({type:o,selectors:[["sz-iam-auth-login"]],standalone:!0,features:[I([]),N],decls:16,vars:4,consts:()=>{let n;n="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;t="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";let e;return e="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",[t,e,[1,"content-center"],["svgIcon","logo",1,"logo"],[1,"tw-m-2","login-card"],[2,"padding","16px"],[3,"alert"],[3,"keyup.enter","formGroup"],["formControlName","email","label",n],["mat-button","",1,"button-submit",3,"click","disabled"],["mode","indeterminate"]];},template:function(t,e){t&1&&(i(0,"div",2),d(1,"mat-icon",3),i(2,"mat-card",4)(3,"mat-card-header")(4,"mat-card-title"),u(5,0),s()(),i(6,"mat-card-content",5),d(7,"sz-ui-alert",6),i(8,"form",7),g("keyup.enter",function(){return e.login();}),d(9,"sz-ui-form-field-input",8),s()(),i(10,"mat-card-actions")(11,"button",9),g("click",function(){return e.login();}),i(12,"span"),u(13,1),s()()(),i(14,"mat-card-footer"),O(15,ie,1,0,"mat-progress-bar",10),s()()()),t&2&&(m(7),c("alert",e.alert()),m(),c("formGroup",e.form),m(3),c("disabled",e.indicator()),m(4),h(e.indicator()?15:-1));},dependencies:[P,b,v,y,T,G,H,k,j,X,V,U,D,K,J,z,x,w,q,B,F,W,Y],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{width:128px;height:128px;transform:scale(2);margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}.login-card[_ngcontent-%COMP%]{min-width:600px}@media screen and (max-width: 992px){.login-card[_ngcontent-%COMP%]{min-width:520px}}@media screen and (max-width: 600px){.login-card[_ngcontent-%COMP%]{min-width:420px}}@media screen and (max-width: 480px){.login-card[_ngcontent-%COMP%]{min-width:100%}}"]});let a=o;return a;})();export{Ge as SzAuthLoginComponent};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/