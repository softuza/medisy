import{b as q}from"./chunk-5D7OMFN2.js";import{a as X}from"./chunk-SUUMCV2R.js";import{c as U}from"./chunk-TXP6BBJB.js";import{A as H,a as b,b as z,h as $,p as B,z as G}from"./chunk-GXEPFKEQ.js";import{f as L,g as D,m as I,s as y}from"./chunk-2OZGA6L4.js";import{a as c}from"./chunk-KQSWIXX2.js";import{f as x,g as Y}from"./chunk-KIPWFCJ2.js";import{Ka as v}from"./chunk-KZIHA7KF.js";import{$b as R,Bb as l,Cb as r,Db as N,L as C,Nb as d,Rb as A,Tb as f,Yb as p,Zb as E,cb as n,cc as h,db as M,kb as g,la as u,nb as O,tb as _,ub as m,wb as T,xb as P,yb as F}from"./chunk-6MBKLWBV.js";function j(e,i){if(e&1&&(l(0,"mat-label"),p(1),r()),e&2){let s=f();n(1),E(s.label);}}function k(e,i){e&1&&(l(0,"mat-option"),p(1,"-"),r());}function w(e,i){if(e&1&&(l(0,"mat-option",3),p(1),r()),e&2){let s=i.$implicit,o=f();O("value",o.getOptionValue(s)),n(1),E(o.getOptionContent(s));}}function V(e,i){e&1&&(l(0,"mat-error"),d(1,4),r());}function J(e,i){e&1&&(l(0,"mat-error"),d(1,5),r());}function K(e,i){e&1&&(l(0,"mat-error"),d(1,6),r());}function Q(e,i){e&1&&N(0,"mat-progress-bar",2);}var Me=(()=>{let i=class i extends B{constructor(o,a){super(o),this.ngControl=o,this.mlatService=a,this.label=X.laboratories;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlatService.laboratories.get({pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:"name"}).pipe(U(this.indicator),C(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(a){return new(a||i)(M(L,10),M(c));},i.ɵcmp=u({type:i,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[R([c]),g,h],decls:11,vars:10,consts:()=>{let o;o="This field is required";let a;a="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[2,"position","relative"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,a,t];},template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-form-field"),_(2,j,2,1,"mat-label"),l(3,"mat-select",1),A("szScrolled",function(){return t.scroll();}),_(4,k,2,0,"mat-option"),P(5,w,2,2,"mat-option",3,T),r(),_(7,V,2,0,"mat-error")(8,J,2,0,"mat-error")(9,K,2,0,"mat-error"),r(),_(10,Q,1,0,"mat-progress-bar",2),r()),a&2&&(n(2),m(2,t.label?2:-1),n(1),O("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),m(4,t.emptyOption?4:-1),F(5,t.options),n(3),m(7,t.control.hasError("required")?7:-1),n(1),m(8,t.control.hasError("min")?8:-1),n(1),m(9,t.control.hasError("max")?9:-1),n(1),m(10,t.indicator()?10:-1));},dependencies:[y,D,I,H,$,b,z,G,v,Y,x,q],encapsulation:2});let e=i;return e;})();export{Me as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/