import{a as Le}from"./chunk-W5OJDYTS.js";import{b as be}from"./chunk-MBSH7VUM.js";import{a as U}from"./chunk-NXZO5HE7.js";import{b as z,c as Ae,e as Re,i as ve,k as De,u as Ie,v as Fe}from"./chunk-V53QYHWX.js";import{c as D,h as Oe,i as he,j as Ne,l as Te,m as I,n as Pe}from"./chunk-W2LWMIH7.js";import{a as Me,b as Ee,d as Ce,e as ge,g as R}from"./chunk-VQ3CVIXE.js";import{A as fe,a as oe,b as re,g as ne,h as ae,o as pe,v as _e,w as ce,x as Se,z as ue}from"./chunk-EJRHERCA.js";import{d as L,e as w,f as A,g as H,k,l as q,m as J,p as K,q as Q,s as W,t as E}from"./chunk-LDFDSR3K.js";import{a as C}from"./chunk-BUSYHZDZ.js";import{a as p}from"./chunk-4BLYINPM.js";import{b as v}from"./chunk-K7VJTIK7.js";import"./chunk-4VFLSYB5.js";import{e as Z,f as me,g as se,m as de}from"./chunk-E2DYYESB.js";import{i as y}from"./chunk-R54FJ7AR.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ea as te,Ga as ie,Ja as le,ya as ee}from"./chunk-TT7ZQ2V6.js";import{Bb as B,Cb as X,Db as j,Eb as a,Fb as l,Gb as _,M as S,Qb as f,Sb as M,Ub as F,a as V,b as Y,dc as N,ea as x,ec as b,fb as n,gb as s,gc as T,jc as P,na as u,nb as h,oa as G,qb as g,ub as d,zb as c}from"./chunk-CQJO6ZYU.js";function xe(r,t){if(r&1&&(a(0,"mat-label"),N(1),l()),r&2){let O=F();n(),b(O.label);}}function Ge(r,t){r&1&&(a(0,"mat-option"),N(1,"-"),l());}function Be(r,t){if(r&1&&(a(0,"mat-option",4),N(1),l()),r&2){let O=t.$implicit,i=F();d("value",i.getOptionValue(O)),n(),b(i.getOptionContent(O));}}function Xe(r,t){r&1&&(a(0,"mat-error"),f(1,5),l());}function je(r,t){r&1&&(a(0,"mat-error"),f(1,6),l());}function we(r,t){r&1&&(a(0,"mat-error"),f(1,7),l());}function He(r,t){r&1&&_(0,"mat-progress-bar",3);}var ze=(()=>{let t=class t extends pe{constructor(i,o){super(i),this.ngControl=i,this.mlabService=o,this.label=C.unit;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.units.get(Y(V({},de.unpaged()),{sortBy:"name"})).pipe(S(1),D(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};t.ɵfac=function(o){return new(o||t)(s(w,10),s(p));},t.ɵcmp=u({type:t,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[T([p]),h,P],decls:11,vars:10,consts:()=>{let i;i="This field is required";let o;o="This field does not the minimum length";let e;return e="This field exceeds the maximum length",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,o,e];},template:function(o,e){o&1&&(a(0,"div",0)(1,"mat-form-field",1),g(2,xe,2,1,"mat-label"),a(3,"mat-select",2),M("szScrolled",function(){return e.scroll();}),g(4,Ge,2,0,"mat-option"),X(5,Be,2,2,"mat-option",4,B),l(),g(7,Xe,2,0,"mat-error")(8,je,2,0,"mat-error")(9,we,2,0,"mat-error"),l(),g(10,He,1,0,"mat-progress-bar",3),l()),o&2&&(n(2),c(2,e.label?2:-1),n(),d("formControl",e.control)("multiple",e.multiple)("placeholder",e.placeholder)("szScrollIgnored",e.indicator()),n(),c(4,e.emptyOption?4:-1),n(),j(e.options),n(2),c(7,e.control.hasError("required")?7:-1),n(),c(8,e.control.hasError("min")?8:-1),n(),c(9,e.control.hasError("max")?9:-1),n(),c(10,e.indicator()?10:-1));},dependencies:[E,A,q,Se,ne,oe,re,ce,ee,se,me,be],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=t;return r;})();var Ue=(()=>{let t=class t extends Oe{constructor(i,o,e,m){super(e),this.mlabService=i,this.fb=o,this.dialog=e,this.data=m,this.form=o.group({description:[m?.description,[L.maxLength(4096)]],testClassId:[m?.testClassId,[L.required]],unitId:[m?.unitId,[]],multiplier:[m?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(s(p),s(Q),s(Me),s(Ee));},t.ɵcmp=u({type:t,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[T([]),h,P],decls:8,vars:3,consts:()=>{let i;i="Multiplier";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId"],["formControlName","unitId"],["formControlName","multiplier","label",i],["formControlName","description","label",o],[3,"actions"]];},template:function(o,e){o&1&&(_(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),_(3,"medisy-form-field-test-class",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5),l()(),_(7,"sz-ui-dialog-actions",6)),o&2&&(d("header",e.header),n(2),d("formGroup",e.form),n(5),d("actions",e.actions));},dependencies:[E,k,A,H,J,K,R,ge,ae,De,I,he,Ne,fe,_e,ue,ze,Le],encapsulation:2});let r=t;return r;})();var $e=(()=>{let t=class t{constructor(i,o){this.dialog=i,this.mlabService=o,this.title=C.referenceValues,this.dataSource=new Re(),this.dataSource.addRows(Ae.default([z.hyperlink("testClass.name",C.testClass,e=>e.id),z.text("unit",C.unit,e=>e.multiplier?`10^${e.multiplier.toExponential(0).split("e").map(m=>Number(m))[1]}/${e.unit?.abbreviation}`:e.unit?.abbreviation),U.createdAt(),U.menu([y.edit(e=>this.openSaveComponent(e)),y.delete(e=>this.openReferenceValueDeleteComponent(e))])])),this.get();}openSaveComponent(i){this.dialog.open(Ue,{data:i}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueDeleteComponent(i){this.dialog.open(Te,{data:Pe.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().pipe(S(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe(D(this.dataSource.indicator),S(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(o){return new(o||t)(s(Ce),s(p));},t.ɵcmp=u({type:t,selectors:[["medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let i;return i="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],i,[3,"stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(_(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),M("changed",function(){return e.get();}),a(2,"button",2),M("click",function(){return e.openSaveComponent();}),a(3,"span"),f(4,3),l()()(),a(5,"sz-ui-table",4),M("update",function(){return e.get();}),l()),o&2&&(d("title",e.title),n(),d("dataSource",e.dataSource),n(4),d("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[te,v,Ie,ve],encapsulation:2});let r=t;return r;})();var Ve=[{path:"",component:$e}];var ni=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=G({type:t}),t.ɵinj=x({providers:[p],imports:[W,E,Z.forChild(Ve),R,le,ie,v,Fe,I]});let r=t;return r;})();export{ni as ReferenceValuesModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/