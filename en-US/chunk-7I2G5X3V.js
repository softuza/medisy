import{b as w}from"./chunk-UXGFQGEN.js";import{a as k}from"./chunk-SUUMCV2R.js";import{c as j}from"./chunk-TXP6BBJB.js";import{A as q,a as $,b as x,h as Y,p as U,z as X}from"./chunk-EBF4GIWM.js";import{f as y,g as v,m as I,s as b}from"./chunk-2OZGA6L4.js";import{a as c}from"./chunk-Y3MYDPN3.js";import{f as B,g as G,h as H}from"./chunk-IMYK7VY7.js";import{Ka as z}from"./chunk-KZIHA7KF.js";import{$b as h,Bb as l,Cb as r,Db as R,L as T,Nb as d,Rb as L,Tb as f,Yb as p,Zb as E,a as C,b as u,cb as n,cc as D,db as M,kb as P,la as g,nb as O,tb as _,ub as m,wb as F,xb as N,yb as A}from"./chunk-6MBKLWBV.js";function V(e,i){if(e&1&&(l(0,"mat-label"),p(1),r()),e&2){let s=f();n(1),E(s.label);}}function J(e,i){e&1&&(l(0,"mat-option"),p(1,"-"),r());}function K(e,i){if(e&1&&(l(0,"mat-option",3),p(1),r()),e&2){let s=i.$implicit,o=f();O("value",o.getOptionValue(s)),n(1),E(o.getOptionContent(s));}}function Q(e,i){e&1&&(l(0,"mat-error"),d(1,4),r());}function W(e,i){e&1&&(l(0,"mat-error"),d(1,5),r());}function Z(e,i){e&1&&(l(0,"mat-error"),d(1,6),r());}function ee(e,i){e&1&&R(0,"mat-progress-bar",2);}var Ce=(()=>{let i=class i extends U{constructor(o,a){super(o),this.ngControl=o,this.mlatService=a,this.label=k.laboratories;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlatService.laboratories.get(u(C({},H.unpaged()),{sortBy:"name"})).pipe(j(this.indicator),T(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(a){return new(a||i)(M(y,10),M(c));},i.ɵcmp=g({type:i,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[h([c]),P,D],decls:11,vars:10,consts:()=>{let o;o="This field is required";let a;a="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[2,"position","relative"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,a,t];},template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-form-field"),_(2,V,2,1,"mat-label"),l(3,"mat-select",1),L("szScrolled",function(){return t.scroll();}),_(4,J,2,0,"mat-option"),N(5,K,2,2,"mat-option",3,F),r(),_(7,Q,2,0,"mat-error")(8,W,2,0,"mat-error")(9,Z,2,0,"mat-error"),r(),_(10,ee,1,0,"mat-progress-bar",2),r()),a&2&&(n(2),m(2,t.label?2:-1),n(1),O("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),m(4,t.emptyOption?4:-1),A(5,t.options),n(3),m(7,t.control.hasError("required")?7:-1),n(1),m(8,t.control.hasError("min")?8:-1),n(1),m(9,t.control.hasError("max")?9:-1),n(1),m(10,t.indicator()?10:-1));},dependencies:[b,v,I,q,Y,$,x,X,z,G,B,w],encapsulation:2});let e=i;return e;})();export{Ce as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/