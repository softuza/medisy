import{a as c}from"./chunk-A4FQTZRA.js";import{b as k}from"./chunk-MBSH7VUM.js";import{c as j}from"./chunk-W2LWMIH7.js";import{a as $,b as x,g as b,o as Y,w as B,x as q}from"./chunk-EJRHERCA.js";import{e as I,f as R,l as z,t as G}from"./chunk-LDFDSR3K.js";import{a as w}from"./chunk-BUSYHZDZ.js";import{f as U,g as H,m as X}from"./chunk-E2DYYESB.js";import{ya as y}from"./chunk-TT7ZQ2V6.js";import{Bb as T,Cb as F,Db as A,Eb as l,Fb as r,Gb as h,M as O,Qb as d,Sb as L,Ub as E,a as u,b as C,dc as p,ec as f,fb as n,gb as M,gc as D,jc as v,na as P,nb as N,qb as _,ub as g,zb as m}from"./chunk-CQJO6ZYU.js";function V(e,i){if(e&1&&(l(0,"mat-label"),p(1),r()),e&2){let s=E();n(),f(s.label);}}function J(e,i){e&1&&(l(0,"mat-option"),p(1,"-"),r());}function K(e,i){if(e&1&&(l(0,"mat-option",4),p(1),r()),e&2){let s=i.$implicit,o=E();g("value",o.getOptionValue(s)),n(),f(o.getOptionContent(s));}}function Q(e,i){e&1&&(l(0,"mat-error"),d(1,5),r());}function W(e,i){e&1&&(l(0,"mat-error"),d(1,6),r());}function Z(e,i){e&1&&(l(0,"mat-error"),d(1,7),r());}function ee(e,i){e&1&&h(0,"mat-progress-bar",3);}var ue=(()=>{let i=class i extends Y{constructor(o,a){super(o),this.ngControl=o,this.mpplService=a,this.label=w.language;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mpplService.languages.get(C(u({},X.unpaged()),{sortBy:"name"})).pipe(j(this.indicator),O(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(a){return new(a||i)(M(I,10),M(c));},i.ɵcmp=P({type:i,selectors:[["medisy-form-field-language"]],standalone:!0,features:[D([c]),N,v],decls:11,vars:10,consts:()=>{let o;o="This field is required";let a;a="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,a,t];},template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-form-field",1),_(2,V,2,1,"mat-label"),l(3,"mat-select",2),L("szScrolled",function(){return t.scroll();}),_(4,J,2,0,"mat-option"),F(5,K,2,2,"mat-option",4,T),r(),_(7,Q,2,0,"mat-error")(8,W,2,0,"mat-error")(9,Z,2,0,"mat-error"),r(),_(10,ee,1,0,"mat-progress-bar",3),r()),a&2&&(n(2),m(2,t.label?2:-1),n(),g("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),m(4,t.emptyOption?4:-1),n(),A(t.options),n(2),m(7,t.control.hasError("required")?7:-1),n(),m(8,t.control.hasError("min")?8:-1),n(),m(9,t.control.hasError("max")?9:-1),n(),m(10,t.indicator()?10:-1));},dependencies:[G,R,z,q,b,$,x,B,y,H,U,k],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=i;return e;})();export{ue as a};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/