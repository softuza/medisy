import{b as V}from"./chunk-UXGFQGEN.js";import{a as k}from"./chunk-SUUMCV2R.js";import{c as w}from"./chunk-TXP6BBJB.js";import{A as q,a as $,b as x,h as U,p as j,z as B}from"./chunk-EBF4GIWM.js";import{f as L,g as G,m as y,s as b}from"./chunk-2OZGA6L4.js";import{a as E}from"./chunk-CESDGIU3.js";import{f as H,g as X,h as Y}from"./chunk-IMYK7VY7.js";import{Ka as z}from"./chunk-KZIHA7KF.js";import{$b as D,Bb as a,Cb as r,Db as h,L as P,Nb as p,Rb as I,Tb as M,Yb as c,Zb as C,a as u,b as O,cb as n,cc as v,db as d,kb as g,la as R,nb as f,sc as A,tb as _,ub as m,wb as F,xb as N,yb as T}from"./chunk-6MBKLWBV.js";function J(e,o){if(e&1&&(a(0,"mat-label"),c(1),r()),e&2){let s=M();n(1),C(s.label);}}function K(e,o){e&1&&(a(0,"mat-option"),c(1,"-"),r());}function Q(e,o){if(e&1&&(a(0,"mat-option",4),c(1),r()),e&2){let s=o.$implicit,i=M();f("value",i.getOptionValue(s)),n(1),C(i.getOptionContent(s));}}function W(e,o){e&1&&(a(0,"mat-error"),p(1,5),r());}function Z(e,o){e&1&&(a(0,"mat-error"),p(1,6),r());}function ee(e,o){e&1&&(a(0,"mat-error"),p(1,7),r());}function te(e,o){e&1&&h(0,"mat-progress-bar",3);}var Te=(()=>{let o=class o extends j{set person(i){this._person=i;}constructor(i,l,t){super(i),this.ngControl=i,this.mlabService=l,this.locale=t,this.label=k.referenceGroup;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.referenceGroups.get(O(u({},Y.unpaged()),{sortBy:"name"})).pipe(P(1)).pipe(w(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};o.ɵfac=function(l){return new(l||o)(d(L,10),d(E),d(A));},o.ɵcmp=R({type:o,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[D([E]),g,v],decls:11,vars:10,consts:()=>{let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let l;l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field",1),_(2,J,2,1,"mat-label"),a(3,"mat-select",2),I("szScrolled",function(){return t.scroll();}),_(4,K,2,0,"mat-option"),N(5,Q,2,2,"mat-option",4,F),r(),_(7,W,2,0,"mat-error")(8,Z,2,0,"mat-error")(9,ee,2,0,"mat-error"),r(),_(10,te,1,0,"mat-progress-bar",3),r()),l&2&&(n(2),m(2,t.label?2:-1),n(1),f("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),m(4,t.emptyOption?4:-1),T(5,t.options),n(3),m(7,t.control.hasError("required")?7:-1),n(1),m(8,t.control.hasError("min")?8:-1),n(1),m(9,t.control.hasError("max")?9:-1),n(1),m(10,t.indicator()?10:-1));},dependencies:[b,G,y,q,U,$,x,B,z,X,H,V],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=o;return e;})();export{Te as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/