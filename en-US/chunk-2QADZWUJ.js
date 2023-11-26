import{a as x}from"./chunk-Z2DF52GP.js";import{a as Ve}from"./chunk-7I2G5X3V.js";import{b as Ue}from"./chunk-UXGFQGEN.js";import{a as $e}from"./chunk-RCF34KUN.js";import{a as J}from"./chunk-IRYXR6JI.js";import{b as q,c as Pe,e as Re,g as ye,i as be,s as ze,t as Le}from"./chunk-ECNTNMPY.js";import{a as G}from"./chunk-SUUMCV2R.js";import{c as V,g as Fe,h as Ie,i as $,j as Y,l as De,m as T,n as Ae}from"./chunk-TXP6BBJB.js";import{a as b,b as z,d as Te,e as L,g as N}from"./chunk-BVSJJDLC.js";import{A as he,C as Oe,D as Ne,a as de,b as pe,h as ce,i as _e,p as Ce,y as Ee,z as ge}from"./chunk-EBF4GIWM.js";import{d as H,f as oe,g as O,h as D,l as A,m as re,n as P,o as R,p as y,r as ne,s as f}from"./chunk-2OZGA6L4.js";import{a as ve}from"./chunk-KMOC5U6F.js";import{a as c}from"./chunk-Y3MYDPN3.js";import{b as U}from"./chunk-CSREFB7T.js";import"./chunk-4KZUDT5R.js";import{e as ae,f as ue,g as Se,h as Me}from"./chunk-IMYK7VY7.js";import{i as w}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Ka as le,Pa as me,Ra as se,Ua as fe}from"./chunk-KZIHA7KF.js";import{$b as g,Bb as l,Cb as m,Db as p,L as u,Nb as C,Rb as E,Tb as X,Yb as I,Zb as k,a as K,b as Q,cb as n,cc as h,da as W,db as d,kb as M,la as _,ma as Z,nb as a,tb as v,ub as S,wb as ee,xb as te,yb as ie}from"./chunk-6MBKLWBV.js";function He(r,t){if(r&1&&(l(0,"mat-label"),I(1),m()),r&2){let F=X();n(1),k(F.label);}}function we(r,t){r&1&&(l(0,"mat-option"),I(1,"-"),m());}function qe(r,t){if(r&1&&(l(0,"mat-option",3),I(1),m()),r&2){let F=t.$implicit,i=X();a("value",i.getOptionValue(F)),n(1),k(i.getOptionContent(F));}}function Je(r,t){r&1&&(l(0,"mat-error"),C(1,4),m());}function Ke(r,t){r&1&&(l(0,"mat-error"),C(1,5),m());}function Qe(r,t){r&1&&(l(0,"mat-error"),C(1,6),m());}function We(r,t){r&1&&p(0,"mat-progress-bar",2);}var j=(()=>{let t=class t extends Ce{constructor(i,o){super(i),this.ngControl=i,this.mlabService=o,this.label=ve.unit;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.units.get(Q(K({},Me.unpaged()),{sortBy:"name"})).pipe(u(1),V(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};t.ɵfac=function(o){return new(o||t)(d(oe,10),d(c));},t.ɵcmp=_({type:t,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[g([c]),M,h],decls:11,vars:10,consts:()=>{let i;i="This field is required";let o;o="This field does not the minimum length";let e;return e="This field exceeds the maximum length",[[2,"position","relative"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,o,e];},template:function(o,e){o&1&&(l(0,"div",0)(1,"mat-form-field"),v(2,He,2,1,"mat-label"),l(3,"mat-select",1),E("szScrolled",function(){return e.scroll();}),v(4,we,2,0,"mat-option"),te(5,qe,2,2,"mat-option",3,ee),m(),v(7,Je,2,0,"mat-error")(8,Ke,2,0,"mat-error")(9,Qe,2,0,"mat-error"),m(),v(10,We,1,0,"mat-progress-bar",2),m()),o&2&&(n(2),S(2,e.label?2:-1),n(1),a("formControl",e.control)("multiple",e.multiple)("placeholder",e.placeholder)("szScrollIgnored",e.indicator()),n(1),S(4,e.emptyOption?4:-1),ie(5,e.options),n(3),S(7,e.control.hasError("required")?7:-1),n(1),S(8,e.control.hasError("min")?8:-1),n(1),S(9,e.control.hasError("max")?9:-1),n(1),S(10,e.indicator()?10:-1));},dependencies:[f,O,re,he,ce,de,pe,ge,le,Se,ue,Ue],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=t;return r;})();var Be=(()=>{let t=class t extends Fe{constructor(i,o,e){super(o),this.fb=i,this.dialog=o,this.data=e,this.comparisonOperators=Object.values($e),this.form=i.group({testClassId:[e.testClassId],unitId:[e.unitId],includeLaboratoryIds:[e.includeLaboratoryIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};t.ɵfac=function(o){return new(o||t)(d(y),d(b),d(z));},t.ɵcmp=_({type:t,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[g([]),M,h],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,e){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),m()(),p(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",e.header),n(2),a("formGroup",e.form),n(1),a("emptyOption",!0),n(1),a("emptyOption",!0),n(1),a("multiple",!0),n(1),a("actions",e.actions));},dependencies:[f,A,O,D,P,R,N,L,T,$,Y,x,j,Ve],encapsulation:2});let r=t;return r;})();var je=(()=>{let t=class t extends Ie{constructor(i,o,e,s){super(e),this.mlabService=i,this.fb=o,this.dialog=e,this.data=s,this.form=o.group({description:[s?.description,[H.maxLength(4096)]],testClassId:[s?.testClassId,[H.required]],unitId:[s?.unitId,[]],multiplier:[s?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(d(c),d(y),d(b),d(z));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[g([]),M,h],decls:8,vars:3,consts:()=>{let i;i="Description";let o;return o="Multiplier",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","unitId"],["formControlName","multiplier","label",o],["formControlName","testClassId"],[3,"actions"]];},template:function(o,e){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),m()(),p(7,"sz-ui-dialog-actions",6)),o&2&&(a("header",e.header),n(2),a("formGroup",e.form),n(5),a("actions",e.actions));},dependencies:[f,A,O,D,P,R,N,L,_e,be,T,$,Y,Ne,Ee,Oe,j,x],encapsulation:2});let r=t;return r;})();var Xe=(()=>{let t=class t{constructor(i,o){this.dialog=i,this.mlabService=o,this.title=G.referenceValues,this.dataSource=new Re(),this.dataSource.addRows(Pe.default([q.hyperlink("testClass",G.testClass,e=>e.id,e=>e.testClass.name),q.text("unit",G.unit,e=>e.multiplier?`10^${e.multiplier.toExponential(0).split("e").map(s=>Number(s))[1]}/${e.unit?.abbreviation}`:e.unit?.abbreviation),J.createdAt(),J.menu([w.edit(e=>this.openSaveComponent(e)),w.delete(e=>this.openReferenceValueDeleteComponent(e))])])),this.get();}openSaveComponent(i){this.dialog.open(je,{data:i}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openFilterComponent(){this.dialog.open(Be,{data:this.dataSource.filter}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.updateFilter(i),this.get();});}openReferenceValueDeleteComponent(i){this.dialog.open(De,{data:Ae.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe(V(this.dataSource.indicator),u(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(o){return new(o||t)(d(Te),d(c));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let i;return i="Add",[[3,"title"],[3,"filter","search","filterClicked"],["mat-flat-button","","color","primary","start","",3,"click"],i,[3,"stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(p(0,"sz-ui-header-info",0),l(1,"sz-ui-table-filter",1),E("search",function(){return e.get();})("filterClicked",function(){return e.openFilterComponent();}),l(2,"button",2),E("click",function(){return e.openSaveComponent();}),l(3,"span"),C(4,3),m()()(),l(5,"sz-ui-table",4),E("update",function(){return e.get();}),m()),o&2&&(a("title",e.title),n(1),a("filter",e.dataSource.filter),n(4),a("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[me,U,ze,ye],encapsulation:2});let r=t;return r;})();var ke=[{path:"",component:Xe}];var hi=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=Z({type:t}),t.ɵinj=W({providers:[c],imports:[ne,f,ae.forChild(ke),N,fe,se,U,Le,T]});let r=t;return r;})();export{hi as ReferenceValuesModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/