import{a as x}from"./chunk-S4GZNMFS.js";import{a as Ue}from"./chunk-BVWXNJCH.js";import{b as Le}from"./chunk-VLSORBJL.js";import{a as Ve}from"./chunk-XMV3WQ4U.js";import{a as J}from"./chunk-HGG4SPXY.js";import{b as q,c as Ae,e as Pe,g as Re,i as ye,s as be,t as ze}from"./chunk-DTDLQFEI.js";import{c as $,g as ve,h as Fe,i as Y,j as G,l as Ie,m as v,n as De}from"./chunk-SN47SBJJ.js";import{a as z,b as L,d as Te,e as U,g as N}from"./chunk-FNLNZMXX.js";import{A as he,C as Oe,D as Ne,a as de,b as pe,h as ce,i as _e,p as Ce,y as Ee,z as ge}from"./chunk-H22FBATM.js";import{d as w,f as oe,g as O,h as A,l as P,m as re,n as R,o as y,p as b,r as ne,s as f}from"./chunk-IUM5Y4DP.js";import{a as T}from"./chunk-DQFF7ZV7.js";import{a as c}from"./chunk-UAYSNPL7.js";import{b as V}from"./chunk-2H6GRCHT.js";import"./chunk-HUJ4SFSJ.js";import{e as ae,f as ue,g as Se,h as Me}from"./chunk-7TGQVE3C.js";import{i as H}from"./chunk-HXVM5UCI.js";import"./chunk-QCDHUYXG.js";import"./chunk-QWTR64PL.js";import{Ka as me,Pa as le,Ra as se,Ua as fe}from"./chunk-53RWJDYX.js";import{Bb as m,Cb as l,Db as p,L as u,Nb as C,Pb as E,Rb as X,Wb as D,Xb as k,Zb as g,a as K,ac as h,b as Q,cb as n,da as W,db as d,kb as M,la as _,ma as Z,nb as a,tb as F,ub as S,wb as ee,xb as te,yb as ie}from"./chunk-M2QTEBXZ.js";function ke(r,t){if(r&1&&(m(0,"mat-label"),D(1),l()),r&2){let I=X();n(1),k(I.label);}}function we(r,t){r&1&&(m(0,"mat-option"),D(1,"-"),l());}function He(r,t){if(r&1&&(m(0,"mat-option",4),D(1),l()),r&2){let I=t.$implicit,i=X();a("value",i.getOptionValue(I)),n(1),k(i.getOptionContent(I));}}function qe(r,t){r&1&&(m(0,"mat-error"),C(1,5),l());}function Je(r,t){r&1&&(m(0,"mat-error"),C(1,6),l());}function Ke(r,t){r&1&&(m(0,"mat-error"),C(1,7),l());}function Qe(r,t){r&1&&p(0,"mat-progress-bar",3);}var j=(()=>{let t=class t extends Ce{constructor(i,o){super(i),this.ngControl=i,this.mlabService=o,this.label=T.unit;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.units.get(Q(K({},Me.unpaged()),{sortBy:"name"})).pipe(u(1),$(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};t.ɵfac=function(o){return new(o||t)(d(oe,10),d(c));},t.ɵcmp=_({type:t,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[g([c]),M,h],decls:11,vars:10,consts:()=>{let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let e;return e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,o,e];},template:function(o,e){o&1&&(m(0,"div",0)(1,"mat-form-field",1),F(2,ke,2,1,"mat-label"),m(3,"mat-select",2),E("szScrolled",function(){return e.scroll();}),F(4,we,2,0,"mat-option"),te(5,He,2,2,"mat-option",4,ee),l(),F(7,qe,2,0,"mat-error")(8,Je,2,0,"mat-error")(9,Ke,2,0,"mat-error"),l(),F(10,Qe,1,0,"mat-progress-bar",3),l()),o&2&&(n(2),S(2,e.label?2:-1),n(1),a("formControl",e.control)("multiple",e.multiple)("placeholder",e.placeholder)("szScrollIgnored",e.indicator()),n(1),S(4,e.emptyOption?4:-1),ie(5,e.options),n(3),S(7,e.control.hasError("required")?7:-1),n(1),S(8,e.control.hasError("min")?8:-1),n(1),S(9,e.control.hasError("max")?9:-1),n(1),S(10,e.indicator()?10:-1));},dependencies:[f,O,re,he,ce,de,pe,ge,me,Se,ue,Le],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=t;return r;})();var xe=(()=>{let t=class t extends ve{constructor(i,o,e){super(o),this.fb=i,this.dialog=o,this.data=e,this.comparisonOperators=Object.values(Ve),this.form=i.group({testClassId:[e.testClassId],unitId:[e.unitId],includeLaboratoryIds:[e.includeLaboratoryIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};t.ɵfac=function(o){return new(o||t)(d(b),d(z),d(L));},t.ɵcmp=_({type:t,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[g([]),M,h],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,e){o&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),l()(),p(6,"sz-ui-dialog-actions",5)),o&2&&(a("header",e.header),n(2),a("formGroup",e.form),n(1),a("emptyOption",!0),n(1),a("emptyOption",!0),n(1),a("multiple",!0),n(1),a("actions",e.actions));},dependencies:[f,P,O,A,R,y,N,U,v,Y,G,x,j,Ue],encapsulation:2});let r=t;return r;})();var Be=(()=>{let t=class t extends Fe{constructor(i,o,e,s){super(e),this.mlabService=i,this.fb=o,this.dialog=e,this.data=s,this.form=o.group({description:[s?.description,[w.maxLength(4096)]],testClassId:[s?.testClassId,[w.required]],unitId:[s?.unitId,[]],multiplier:[s?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(d(c),d(b),d(z),d(L));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[g([]),M,h],decls:8,vars:3,consts:()=>{let i;i="\u0645\u0636\u0627\u0639\u0641";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId"],["formControlName","unitId"],["formControlName","multiplier","label",i],["formControlName","description","label",o],[3,"actions"]];},template:function(o,e){o&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-test-class",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5),l()(),p(7,"sz-ui-dialog-actions",6)),o&2&&(a("header",e.header),n(2),a("formGroup",e.form),n(5),a("actions",e.actions));},dependencies:[f,P,O,A,R,y,N,U,_e,ye,v,Y,G,Ne,Ee,Oe,j,x],encapsulation:2});let r=t;return r;})();var je=(()=>{let t=class t{constructor(i,o){this.dialog=i,this.mlabService=o,this.title=T.referenceValues,this.dataSource=new Pe(),this.dataSource.addRows(Ae.default([q.hyperlink("testClass.name",T.testClass,e=>e.id),q.text("unit",T.unit,e=>e.multiplier?`10^${e.multiplier.toExponential(0).split("e").map(s=>Number(s))[1]}/${e.unit?.abbreviation}`:e.unit?.abbreviation),J.createdAt(),J.menu([H.edit(e=>this.openSaveComponent(e)),H.delete(e=>this.openReferenceValueDeleteComponent(e))])])),this.get();}openSaveComponent(i){this.dialog.open(Be,{data:i}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openFilterComponent(){this.dialog.open(xe,{data:this.dataSource.filter}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.updateFilter(i),this.get();});}openReferenceValueDeleteComponent(i){this.dialog.open(Ie,{data:De.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),u(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(o){return new(o||t)(d(Te),d(c));},t.ɵcmp=_({type:t,selectors:[["medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"filter","search","filterClicked"],["mat-flat-button","","color","primary","start","",3,"click"],i,[3,"stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(p(0,"sz-ui-header-info",0),m(1,"sz-ui-table-filter",1),E("search",function(){return e.get();})("filterClicked",function(){return e.openFilterComponent();}),m(2,"button",2),E("click",function(){return e.openSaveComponent();}),m(3,"span"),C(4,3),l()()(),m(5,"sz-ui-table",4),E("update",function(){return e.get();}),l()),o&2&&(a("title",e.title),n(1),a("filter",e.dataSource.filter),n(4),a("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[le,V,be,Re],encapsulation:2});let r=t;return r;})();var Xe=[{path:"",component:je}];var gi=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=Z({type:t}),t.ɵinj=W({providers:[c],imports:[ne,f,ae.forChild(Xe),N,fe,se,V,ze,v]});let r=t;return r;})();export{gi as ReferenceValuesModule};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/