import{b as k}from"./chunk-2C6ZG32C.js";import{c as j}from"./chunk-Z7KLU4V7.js";import{A as q,a as z,b as $,h as G,p as Y,z as B}from"./chunk-OTJHTEGW.js";import{f as D,g as b,m as v,s as R}from"./chunk-PM3MLZ5N.js";import{a as w}from"./chunk-BKOX3ZG5.js";import{a as p}from"./chunk-6S7G73HY.js";import{f as H,g as U,h as X}from"./chunk-RKRWHYTW.js";import{Ka as x}from"./chunk-5FPJF3YL.js";import{Bb as a,Cb as r,Db as F,L as O,Nb as _,Pb as N,Rb as M,Wb as c,Xb as u,Zb as L,a as E,ac as A,b as f,cb as n,db as T,kb as I,la as g,nb as C,tb as m,ub as s,wb as P,xb as h,yb as y}from"./chunk-QHZO24TE.js";function V(e,i){if(e&1&&(a(0,"mat-label"),c(1),r()),e&2){let d=M();n(1),u(d.label);}}function J(e,i){e&1&&(a(0,"mat-option"),c(1,"-"),r());}function K(e,i){if(e&1&&(a(0,"mat-option",4),c(1),r()),e&2){let d=i.$implicit,o=M();C("value",o.getOptionValue(d)),n(1),u(o.getOptionContent(d));}}function Q(e,i){e&1&&(a(0,"mat-error"),_(1,5),r());}function W(e,i){e&1&&(a(0,"mat-error"),_(1,6),r());}function Z(e,i){e&1&&(a(0,"mat-error"),_(1,7),r());}function ee(e,i){e&1&&F(0,"mat-progress-bar",3);}var Ee=(()=>{let i=class i extends Y{constructor(o,l){super(o),this.ngControl=o,this.mlabService=l,this.label=w.testClass,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.includeTestTypeIds=[],this.excludeTestTypeIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testClasses.get(f(E({},X.unpaged()),{sortBy:"name",excludeLaboratoryIds:this.excludeLaboratoryIds,includeLaboratoryIds:this.includeLaboratoryIds,excludeTestTypeIds:this.excludeTestTypeIds,includeTestTypeIds:this.includeTestTypeIds})).pipe(j(this.indicator),O(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(l){return new(l||i)(T(D,10),T(p));},i.ɵcmp=g({type:i,selectors:[["medisy-form-field-test-class"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds",includeTestTypeIds:"includeTestTypeIds",excludeTestTypeIds:"excludeTestTypeIds"},standalone:!0,features:[L([p]),I,A],decls:11,vars:10,consts:()=>{let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let l;l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field",1),m(2,V,2,1,"mat-label"),a(3,"mat-select",2),N("szScrolled",function(){return t.scroll();}),m(4,J,2,0,"mat-option"),h(5,K,2,2,"mat-option",4,P),r(),m(7,Q,2,0,"mat-error")(8,W,2,0,"mat-error")(9,Z,2,0,"mat-error"),r(),m(10,ee,1,0,"mat-progress-bar",3),r()),l&2&&(n(2),s(2,t.label?2:-1),n(1),C("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),s(4,t.emptyOption?4:-1),y(5,t.options),n(3),s(7,t.control.hasError("required")?7:-1),n(1),s(8,t.control.hasError("min")?8:-1),n(1),s(9,t.control.hasError("max")?9:-1),n(1),s(10,t.indicator()?10:-1));},dependencies:[R,b,v,q,G,z,$,B,x,U,H,k],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=i;return e;})();export{Ee as a};/**i18n:57dc3d08d446ad135ce8eaf97a2b2ecae498355fbf7683f31ebc8820589c1c80*/