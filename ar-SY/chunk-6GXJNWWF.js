import{b as J}from"./chunk-63VTERTH.js";import{a as k}from"./chunk-HJWA2INN.js";import{a as E}from"./chunk-NCT5DZCK.js";import{c as V}from"./chunk-47MBZVPY.js";import{a as $,b as x,g as U,o as B,w as q,x as w}from"./chunk-22KPLFGU.js";import{Q as H,R as X,e as D,f as G,l as y,t as z,xa as j}from"./chunk-BWNHVGBM.js";import{ya as b}from"./chunk-I73ZQFGG.js";import{Ac as I,Bb as F,Cb as T,Db as N,Eb as a,Fb as r,Gb as h,M as P,Qb as c,Sb as A,Ub as O,a as C,b as u,dc as p,ec as M,fb as n,gb as d,gc as L,jc as v,na as R,nb as g,qb as _,ub as S,zb as m}from"./chunk-KN4PZLRS.js";function K(e,o){if(e&1&&(a(0,"mat-label"),p(1),r()),e&2){let s=O();n(),M(s.label);}}function Q(e,o){e&1&&(a(0,"mat-option"),p(1,"-"),r());}function W(e,o){if(e&1&&(a(0,"mat-option",4),p(1),r()),e&2){let s=o.$implicit,i=O();S("value",i.getOptionValue(s)),n(),M(i.getOptionContent(s));}}function Y(e,o){e&1&&(a(0,"mat-error"),c(1,5),r());}function Z(e,o){e&1&&(a(0,"mat-error"),c(1,6),r());}function ee(e,o){e&1&&(a(0,"mat-error"),c(1,7),r());}function te(e,o){e&1&&h(0,"mat-progress-bar",3);}var Ne=(()=>{let o=class o extends B{set person(i){this._person=i;}constructor(i,l,t){super(i),this.ngControl=i,this.mlabService=l,this.locale=t,this.label=k.referenceGroup;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.referenceGroups.get(u(C({},j.unpaged()),{orderBy:"name"})).pipe(P(1)).pipe(V(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};o.ɵfac=function(l){return new(l||o)(d(D,10),d(E),d(I));},o.ɵcmp=R({type:o,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[L([E]),g,v],decls:11,vars:10,consts:()=>{let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let l;l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field",1),_(2,K,2,1,"mat-label"),a(3,"mat-select",2),A("szScrolled",function(){return t.scroll();}),_(4,Q,2,0,"mat-option"),T(5,W,2,2,"mat-option",4,F),r(),_(7,Y,2,0,"mat-error")(8,Z,2,0,"mat-error")(9,ee,2,0,"mat-error"),r(),_(10,te,1,0,"mat-progress-bar",3),r()),l&2&&(n(2),m(2,t.label?2:-1),n(),S("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),m(4,t.emptyOption?4:-1),n(),N(t.options),n(2),m(7,t.control.hasError("required")?7:-1),n(),m(8,t.control.hasError("min")?8:-1),n(),m(9,t.control.hasError("max")?9:-1),n(),m(10,t.indicator()?10:-1));},dependencies:[z,G,y,w,U,$,x,q,b,X,H,J],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=o;return e;})();export{Ne as a};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/