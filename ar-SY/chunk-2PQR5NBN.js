import{a as I}from"./chunk-54S5QGYE.js";import{f as V,g as b,h as L,k as $}from"./chunk-MBGPVYCR.js";import{a as A,b as h,e as R,g as O}from"./chunk-3RAF2YCP.js";import{c as v,q as D,s as z,u as F}from"./chunk-BD7VQR7P.js";import{d as l,f as c,g as C,l as T,o as M,r as E,s as N,u as g}from"./chunk-WM2WRHBE.js";import{Jb as S,Kb as p,Lb as a,bb as m,ja as r,mb as _,mc as u,na as d,nc as f,yb as n}from"./chunk-O34SSFLY.js";var Y=(()=>{let i=class i extends V{constructor(){let o=r(A);super(o),this.fb=r(N),this.data=r(h),this.cstnService=r(I);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[l.required,l.minLength(1)]],description:[e?.description,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.teams.update(this.data.id,this.form.value)):this.save(this.cstnService.teams.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=d({type:i,selectors:[["sz-constr-construction-teams-save"]],standalone:!0,features:[u([]),_,f],decls:6,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,e){t&1&&(a(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),p()(),a(5,"sz-ui-dialog-actions",4)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),n("formGroup",e.form),m(3),n("actions",e.actions));},dependencies:[g,T,c,C,M,E,O,R,D,$,b,L,F,v,z],encapsulation:2});let s=i;return s;})();export{Y as a};/**i18n:08dc477745c643d8c857c9e8e740bb8fd5d4d2f068a9032e0d444ef2bfb6a6f8*/