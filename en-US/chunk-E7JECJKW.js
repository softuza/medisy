import{b as $}from"./chunk-FWQBPBHJ.js";import{c as Y,u as Z}from"./chunk-NKLFXX3X.js";import{b as W}from"./chunk-VPIQ5RG6.js";import{b as Q}from"./chunk-PYOUUVMA.js";import{a as k,b as D,c as X,e as V,f as U,g as H,h as j,i as J,j as K}from"./chunk-ODIMT2GD.js";import{b as q}from"./chunk-NBE6QGAD.js";import{i as z}from"./chunk-IT3CNXEP.js";import{d as _,f as L,g as v,h as E,l as y,n as b,q as G,s as T,u as A}from"./chunk-QZRJHJEV.js";import{Y as F}from"./chunk-4QPQ7IQ3.js";import{c as P}from"./chunk-WMCOMOML.js";import{ha as w,ia as x,ja as R,la as B}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Cc as I,E as M,Eb as O,Jb as i,Kb as l,Lb as s,Vb as u,Wb as g,bb as m,ja as a,kb as p,mc as h,na as C,nc as N,rb as S,yb as c}from"./chunk-6EDHPT3A.js";import{i as f}from"./chunk-NLUW4JS2.js";function tt(r,o){r&1&&s(0,"mat-progress-bar",10);}var Lt=(()=>{let o=class o{constructor(){this.locale=a(I),this.fb=a(T),this.router=a(P),this.identityService=a($),this.alert=p(void 0),this.indicator=p(!1);let n=this.identityService.storage.get();this.form=this.fb.group({email:[n?.email,[_.required,_.minLength(1),_.email]]}),this.formSubscription=this.form.events.pipe(M(t=>t instanceof E)).subscribe(t=>{this.form.get("email")?.setValue(this.form.get("email")?.value.trim(),{emitEvent:!1});});}ngOnDestroy(){this.formSubscription.unsubscribe();}login(){return f(this,null,function*(){if(!Z(this.form))return!1;this.indicator.set(!0);try{yield this.identityService.login({loginHint:this.form.value.email,locale:this.locale,redirectUri:this.identityService.getBaseUrl()});}catch{this.alert.set(Q.error(F.login_failed,5e3));}finally{this.indicator.set(!1);}return!0;});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=C({type:o,selectors:[["sz-iam-auth-login"]],standalone:!0,features:[h([]),N],decls:16,vars:4,consts:()=>{let n;n="Email";let t;t="Login";let e;return e="Login",[t,e,[1,"content-center"],["svgIcon","logo",1,"logo"],[1,"tw-m-2","login-card"],[2,"padding","16px"],[3,"alert"],[3,"keyup.enter","formGroup"],["formControlName","email","label",n],["mat-button","",1,"button-submit",3,"click","disabled"],["mode","indeterminate"]];},template:function(t,e){t&1&&(i(0,"div",2),s(1,"mat-icon",3),i(2,"mat-card",4)(3,"mat-card-header")(4,"mat-card-title"),u(5,0),l()(),i(6,"mat-card-content",5),s(7,"sz-ui-alert",6),i(8,"form",7),g("keyup.enter",function(){return e.login();}),s(9,"sz-ui-form-field-input",8),l()(),i(10,"mat-card-actions")(11,"button",9),g("click",function(){return e.login();}),i(12,"span"),u(13,1),l()()(),i(14,"mat-card-footer"),S(15,tt,1,0,"mat-progress-bar",10),l()()()),t&2&&(m(7),c("alert",e.alert()),m(),c("formGroup",e.form),m(3),c("disabled",e.indicator()),m(4),O(e.indicator()?15:-1));},dependencies:[A,y,L,v,b,G,j,k,V,X,H,U,D,K,J,z,x,w,q,B,R,W,Y],styles:[".content-center[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.logo[_ngcontent-%COMP%]{width:128px;height:128px;transform:scale(2);margin:16px}.button-submit[_ngcontent-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{text-align:center;margin:16px 0;font-size:12px;cursor:pointer}.login-card[_ngcontent-%COMP%]{min-width:600px}@media screen and (max-width: 992px){.login-card[_ngcontent-%COMP%]{min-width:520px}}@media screen and (max-width: 600px){.login-card[_ngcontent-%COMP%]{min-width:420px}}@media screen and (max-width: 480px){.login-card[_ngcontent-%COMP%]{min-width:100%}}"]});let r=o;return r;})();export{Lt as SzAuthLoginComponent};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/