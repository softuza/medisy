import{b as q}from"./chunk-5D7OMFN2.js";import{a as B}from"./chunk-SUUMCV2R.js";import{c as Y}from"./chunk-TXP6BBJB.js";import{A as X,a as x,b as R,h as z,p as H,z as U}from"./chunk-GXEPFKEQ.js";import{f as A,g as y,m as D,s as b}from"./chunk-2OZGA6L4.js";import{a as p}from"./chunk-KQSWIXX2.js";import{f as G,g as $}from"./chunk-KIPWFCJ2.js";import{Ka as v}from"./chunk-KZIHA7KF.js";import{$b as N,Bb as a,Cb as r,Db as P,L as E,Nb as _,Rb as F,Tb as M,Yb as c,Zb as T,cb as n,cc as L,db as u,kb as O,la as f,nb as C,tb as d,ub as s,wb as g,xb as I,yb as h}from"./chunk-6MBKLWBV.js";function j(e,i){if(e&1&&(a(0,"mat-label"),c(1),r()),e&2){let m=M();n(1),T(m.label);}}function k(e,i){e&1&&(a(0,"mat-option"),c(1,"-"),r());}function w(e,i){if(e&1&&(a(0,"mat-option",3),c(1),r()),e&2){let m=i.$implicit,o=M();C("value",o.getOptionValue(m)),n(1),T(o.getOptionContent(m));}}function V(e,i){e&1&&(a(0,"mat-error"),_(1,4),r());}function J(e,i){e&1&&(a(0,"mat-error"),_(1,5),r());}function K(e,i){e&1&&(a(0,"mat-error"),_(1,6),r());}function Q(e,i){e&1&&P(0,"mat-progress-bar",2);}var ue=(()=>{let i=class i extends H{constructor(o,l){super(o),this.ngControl=o,this.mlabService=l,this.label=B.testClass,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.includeTestGroupIds=[],this.excludeTestGroupIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testClasses.get({pageIndex:this.pageIndex,pageSize:-1,sortBy:"name",excludeLaboratoryIds:this.excludeLaboratoryIds,includeLaboratoryIds:this.includeLaboratoryIds,excludeTestGroupIds:this.excludeTestGroupIds,includeTestGroupIds:this.includeTestGroupIds}).pipe(Y(this.indicator),E(1)).subscribe(o=>{this.options.push(...o.items),this.totalPages=o.totalPages;});}};i.ɵfac=function(l){return new(l||i)(u(A,10),u(p));},i.ɵcmp=f({type:i,selectors:[["medisy-form-field-test-class"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds",includeTestGroupIds:"includeTestGroupIds",excludeTestGroupIds:"excludeTestGroupIds"},standalone:!0,features:[N([p]),O,L],decls:11,vars:10,consts:()=>{let o;o="This field is required";let l;l="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[2,"position","relative"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],o,l,t];},template:function(l,t){l&1&&(a(0,"div",0)(1,"mat-form-field"),d(2,j,2,1,"mat-label"),a(3,"mat-select",1),F("szScrolled",function(){return t.scroll();}),d(4,k,2,0,"mat-option"),I(5,w,2,2,"mat-option",3,g),r(),d(7,V,2,0,"mat-error")(8,J,2,0,"mat-error")(9,K,2,0,"mat-error"),r(),d(10,Q,1,0,"mat-progress-bar",2),r()),l&2&&(n(2),s(2,t.label?2:-1),n(1),C("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(1),s(4,t.emptyOption?4:-1),h(5,t.options),n(3),s(7,t.control.hasError("required")?7:-1),n(1),s(8,t.control.hasError("min")?8:-1),n(1),s(9,t.control.hasError("max")?9:-1),n(1),s(10,t.indicator()?10:-1));},dependencies:[b,y,D,X,z,x,R,U,v,$,G,q],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let e=i;return e;})();export{ue as a};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/