import{a as S}from"./chunk-ICIFQ36O.js";import{b as V}from"./chunk-IR4ZVDHN.js";import{c as k}from"./chunk-UVKODSF3.js";import{a as j}from"./chunk-E2YN42QZ.js";import{a as $,b,g as x,o as B,w as q,x as w}from"./chunk-PSHVV3L5.js";import{Q as U,R as H,e as D,f as z,l as I,t as y,ya as X}from"./chunk-7YDZJT25.js";import{ya as G}from"./chunk-NQOK3G2M.js";import{Ab as m,Cb as N,Db as A,Eb as F,Fb as l,Gb as r,Hb as L,M as E,Rb as c,Tb as h,Vb as f,a as C,b as O,ec as p,fc as u,gb as n,hb as g,hc as R,kc as v,oa as P,ob as T,rb as _,vb as M}from"./chunk-XEAZENSO.js";function K(e,i){if(e&1&&(l(0,"mat-label"),p(1),r()),e&2){let s=f();n(),u(s.label);}}function Q(e,i){e&1&&(l(0,"mat-option"),p(1,"-"),r());}function W(e,i){if(e&1&&(l(0,"mat-option",4),p(1),r()),e&2){let s=i.$implicit,o=f();M("value",o.getOptionValue(s)),n(),u(o.getOptionContent(s));}}function Y(e,i){e&1&&(l(0,"mat-error"),c(1,5),r());}function Z(e,i){e&1&&(l(0,"mat-error"),c(1,6),r());}function ee(e,i){e&1&&(l(0,"mat-error"),c(1,7),r());}function te(e,i){e&1&&L(0,"mat-progress-bar",3);}var Oe=(()=>{let i=class i extends B{constructor(o,a){super(o),this.ngControl=o,this.mpplService=a,this.label=j.language;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mpplService.languages.get(O(C({},X.unpaged()),{orderBy:"name"})).pipe(k(this.indicator),E(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(a){return new(a||i)(g(D,10),g(S));},i.ɵcmp=P({type:i,selectors:[["medisy-form-field-language"]],standalone:!0,features:[R([S]),T,v],decls:11,vars:10,consts:()=>{let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let a;a="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled","selectionChange"],["mode","indeterminate"],[3,"value"],o,a,t];},template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-form-field",1),_(2,K,2,1,"mat-label"),l(3,"mat-select",2),h("szScrolled",function(){return t.scroll();})("selectionChange",function(J){return t.selectionChange(J);}),_(4,Q,2,0,"mat-option"),A(5,W,2,2,"mat-option",4,N),r(),_(7,Y,2,0,"mat-error")(8,Z,2,0,"mat-error")(9,ee,2,0,"mat-error"),r(),_(10,te,1,0,"mat-progress-bar",3),r()),a&2&&(n(2),m(2,t.label?2:-1),n(),M("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),m(4,t.emptyOption?4:-1),n(),F(t.options),n(2),m(7,t.control.hasError("required")?7:-1),n(),m(8,t.control.hasError("min")?8:-1),n(),m(9,t.control.hasError("max")?9:-1),n(),m(10,t.indicator()?10:-1));},dependencies:[y,z,I,w,x,$,b,q,G,H,U,V],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=i;return e;})();export{Oe as a};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/