import{b as k}from"./chunk-UXGFQGEN.js";import{a as j}from"./chunk-SUUMCV2R.js";import{c as q}from"./chunk-TXP6BBJB.js";import{A as B,a as x,b as z,h as $,p as X,z as Y}from"./chunk-EBF4GIWM.js";import{f as D,g as b,m as v,s as A}from"./chunk-2OZGA6L4.js";import{a as p}from"./chunk-Y3MYDPN3.js";import{f as U,g as H}from"./chunk-IMYK7VY7.js";import{Ka as G}from"./chunk-KZIHA7KF.js";import{$b as R,Bb as a,Cb as r,Db as I,L as O,Nb as d,Rb as L,Tb as u,Yb as c,Zb as C,a as T,b as f,cb as n,cc as y,db as E,kb as g,la as P,nb as M,tb as _,ub as m,wb as h,xb as F,yb as N}from"./chunk-6MBKLWBV.js";function w(e,o){if(e&1&&(a(0,"mat-label"),c(1),r()),e&2){let s=u();n(1),C(s.label);}}function V(e,o){e&1&&(a(0,"mat-option"),c(1,"-"),r());}function J(e,o){if(e&1&&(a(0,"mat-option",3),c(1),r()),e&2){let s=o.$implicit,i=u();M("value",i.getOptionValue(s)),n(1),C(i.getOptionContent(s));}}function K(e,o){e&1&&(a(0,"mat-error"),d(1,4),r());}function Q(e,o){e&1&&(a(0,"mat-error"),d(1,5),r());}function W(e,o){e&1&&(a(0,"mat-error"),d(1,6),r());}function Z(e,o){e&1&&I(0,"mat-progress-bar",2);}var ue=(()=>{let o=class o extends X{constructor(i,l){super(i),this.ngControl=i,this.mlabService=l,this.label=j.testGroup,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testGroups.get(f(T({},this.pagination),{sortBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds})).pipe(q(this.indicator),O(1)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};o.ɵfac=function(l){return new(l||o)(E(D,10),E(p));},o.ɵcmp=P({type:o,selectors:[["medisy-form-field-test-group-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[R([p]),g,y],decls:11,vars:10,consts:()=>{let i;i="This field is required";let l;l="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[2,"position","relative"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field"),_(2,w,2,1,"mat-label"),a(3,"mat-select",1),L("szScrolled",function(){return t.scroll();}),_(4,V,2,0,"mat-option"),F(5,J,2,2,"mat-option",3,h),r(),_(7,K,2,0,"mat-error")(8,Q,2,0,"mat-error")(9,W,2,0,"mat-error"),r(),_(10,Z,1,0,"mat-progress-bar",2),r()),l&2&&(n(2),m(2,t.label?2:-1),n(1),M("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),m(4,t.emptyOption?4:-1),N(5,t.options),n(3),m(7,t.control.hasError("required")?7:-1),n(1),m(8,t.control.hasError("min")?8:-1),n(1),m(9,t.control.hasError("max")?9:-1),n(1),m(10,t.indicator()?10:-1));},dependencies:[A,b,v,B,$,x,z,Y,G,H,U,k],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=o;return e;})();export{ue as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/