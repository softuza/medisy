import{b as k}from"./chunk-MBSH7VUM.js";import{c as j}from"./chunk-W2LWMIH7.js";import{a as b,b as $,g as G,o as Y,w as B,x as q}from"./chunk-EJRHERCA.js";import{e as v,f as L,l as R,t as x}from"./chunk-LDFDSR3K.js";import{a as w}from"./chunk-BUSYHZDZ.js";import{a as p}from"./chunk-4BLYINPM.js";import{f as H,g as U,m as X}from"./chunk-E2DYYESB.js";import{ya as z}from"./chunk-TT7ZQ2V6.js";import{Bb as h,Cb as F,Db as N,Eb as a,Fb as r,Gb as I,M as O,Qb as d,Sb as A,Ub as M,a as f,b as u,dc as c,ec as E,fb as n,gb as T,gc as y,jc as D,na as g,nb as P,qb as m,ub as C,zb as s}from"./chunk-CQJO6ZYU.js";function V(e,i){if(e&1&&(a(0,"mat-label"),c(1),r()),e&2){let _=M();n(),E(_.label);}}function J(e,i){e&1&&(a(0,"mat-option"),c(1,"-"),r());}function K(e,i){if(e&1&&(a(0,"mat-option",4),c(1),r()),e&2){let _=i.$implicit,o=M();C("value",o.getOptionValue(_)),n(),E(o.getOptionContent(_));}}function Q(e,i){e&1&&(a(0,"mat-error"),d(1,5),r());}function W(e,i){e&1&&(a(0,"mat-error"),d(1,6),r());}function Z(e,i){e&1&&(a(0,"mat-error"),d(1,7),r());}function ee(e,i){e&1&&I(0,"mat-progress-bar",3);}var fe=(()=>{let i=class i extends Y{constructor(o,l){super(o),this.ngControl=o,this.mlabService=l,this.label=w.testClass,this.includeTestTypeIds=[],this.excludeTestTypeIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testClasses.get(u(f({},X.unpaged()),{sortBy:"name",excludeTestTypeIds:this.excludeTestTypeIds,includeTestTypeIds:this.includeTestTypeIds})).pipe(j(this.indicator),O(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(l){return new(l||i)(T(v,10),T(p));},i.ɵcmp=g({type:i,selectors:[["medisy-form-field-test-class"]],inputs:{includeTestTypeIds:"includeTestTypeIds",excludeTestTypeIds:"excludeTestTypeIds"},standalone:!0,features:[y([p]),P,D],decls:11,vars:10,consts:()=>{let o;o="This field is required";let l;l="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field",1),m(2,V,2,1,"mat-label"),a(3,"mat-select",2),A("szScrolled",function(){return t.scroll();}),m(4,J,2,0,"mat-option"),F(5,K,2,2,"mat-option",4,h),r(),m(7,Q,2,0,"mat-error")(8,W,2,0,"mat-error")(9,Z,2,0,"mat-error"),r(),m(10,ee,1,0,"mat-progress-bar",3),r()),l&2&&(n(2),s(2,t.label?2:-1),n(),C("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),s(4,t.emptyOption?4:-1),n(),N(t.options),n(2),s(7,t.control.hasError("required")?7:-1),n(),s(8,t.control.hasError("min")?8:-1),n(),s(9,t.control.hasError("max")?9:-1),n(),s(10,t.indicator()?10:-1));},dependencies:[x,L,R,q,G,b,$,B,z,U,H,k],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=i;return e;})();export{fe as a};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/