import{b as w}from"./chunk-FPEL7HED.js";import{a as k}from"./chunk-SUUMCV2R.js";import{c as j}from"./chunk-AS5U2OT3.js";import{A as q,a as $,b as x,h as Y,p as U,z as X}from"./chunk-WYIASL3N.js";import{f as D,g as I,m as v,s as b}from"./chunk-DOVRWRQU.js";import{a as p}from"./chunk-C3UREHHC.js";import{f as B,g as G,h as H}from"./chunk-2IOOD4ZB.js";import{Ka as z}from"./chunk-26JDY2BM.js";import{Bb as l,Cb as r,Db as R,L as T,Nb as s,Pb as L,Rb as f,Wb as c,Xb as E,Zb as h,a as C,ac as y,b as u,cb as n,db as M,kb as P,la as g,nb as O,tb as _,ub as m,wb as F,xb as N,yb as A}from"./chunk-J5YYK5S2.js";function V(e,i){if(e&1&&(l(0,"mat-label"),c(1),r()),e&2){let d=f();n(1),E(d.label);}}function J(e,i){e&1&&(l(0,"mat-option"),c(1,"-"),r());}function K(e,i){if(e&1&&(l(0,"mat-option",4),c(1),r()),e&2){let d=i.$implicit,o=f();O("value",o.getOptionValue(d)),n(1),E(o.getOptionContent(d));}}function Q(e,i){e&1&&(l(0,"mat-error"),s(1,5),r());}function W(e,i){e&1&&(l(0,"mat-error"),s(1,6),r());}function Z(e,i){e&1&&(l(0,"mat-error"),s(1,7),r());}function ee(e,i){e&1&&R(0,"mat-progress-bar",3);}var Ce=(()=>{let i=class i extends U{constructor(o,a){super(o),this.ngControl=o,this.mlatService=a,this.label=k.laboratory;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlatService.laboratories.get(u(C({},H.unpaged()),{sortBy:"name"})).pipe(j(this.indicator),T(1)).subscribe(o=>{this.options=o.items,this.totalPages=o.totalPages;});}};i.ɵfac=function(a){return new(a||i)(M(D,10),M(p));},i.ɵcmp=g({type:i,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[h([p]),P,y],decls:11,vars:10,consts:()=>{let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let a;a="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,a,t];},template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-form-field",1),_(2,V,2,1,"mat-label"),l(3,"mat-select",2),L("szScrolled",function(){return t.scroll();}),_(4,J,2,0,"mat-option"),N(5,K,2,2,"mat-option",4,F),r(),_(7,Q,2,0,"mat-error")(8,W,2,0,"mat-error")(9,Z,2,0,"mat-error"),r(),_(10,ee,1,0,"mat-progress-bar",3),r()),a&2&&(n(2),m(2,t.label?2:-1),n(1),O("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),m(4,t.emptyOption?4:-1),A(5,t.options),n(3),m(7,t.control.hasError("required")?7:-1),n(1),m(8,t.control.hasError("min")?8:-1),n(1),m(9,t.control.hasError("max")?9:-1),n(1),m(10,t.indicator()?10:-1));},dependencies:[b,I,v,q,Y,$,x,X,z,G,B,w],encapsulation:2});let e=i;return e;})();export{Ce as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/