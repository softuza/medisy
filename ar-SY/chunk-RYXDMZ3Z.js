import{a as ee}from"./chunk-PEH53REF.js";import{a as Z}from"./chunk-DMZRJW6J.js";import{b as T}from"./chunk-A6RSMEH5.js";import{a as h,b as J,c as b,e as K,q as Q,r as W}from"./chunk-CFOMHYBZ.js";import{c as V,g as X,i as k,j as q,m as C}from"./chunk-UJAW327Y.js";import{a as Y,b as $,d as H,e as x,g as S}from"./chunk-JW5GSDNP.js";import{n as w}from"./chunk-ADGNUUMA.js";import{g as I,h as A,l as L,n as R,o as N,p as P,r as G,s as f}from"./chunk-DNMCT3KT.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as d}from"./chunk-PVY3QENI.js";import{a as _}from"./chunk-CSFT2WH3.js";import"./chunk-JJ7KQT5E.js";import{a as U}from"./chunk-HXOIERNB.js";import{e as O}from"./chunk-KFH6QGXF.js";import"./chunk-B5RRONYF.js";import{c as j}from"./chunk-M4TKXCQI.js";import{Ra as B}from"./chunk-IPZKDZL6.js";import{Bb as m,Cb as l,Db as u,L as M,Nb as D,Pb as g,Zb as c,ac as F,cb as n,da as y,db as s,kb as E,la as p,ma as z,nb as a}from"./chunk-3QIFGVJ6.js";var oe=(()=>{let e=class e extends X{constructor(t,o,i){super(o),this.fb=t,this.dialog=o,this.data=i,this.form=t.group({includeLaboratoryIds:[i.includeLaboratoryIds],includeTestGroupIds:[i.includeTestGroupIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(o){return new(o||e)(s(P),s(Y),s($));},e.ɵcmp=p({type:e,selectors:[["medisy-test-classes-filter"]],standalone:!0,features:[c([]),E,F],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(o,i){o&1&&(u(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),u(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),l()(),u(5,"sz-ui-dialog-actions",4)),o&2&&(a("header",i.header),n(2),a("formGroup",i.form),n(1),a("multiple",!0),n(1),a("multiple",!0),n(1),a("actions",i.actions));},dependencies:[f,L,I,A,R,N,S,x,C,k,q,Z,ee],encapsulation:2});let r=e;return r;})();var ie=(()=>{let e=class e{constructor(t,o){this.dialog=t,this.mlabService=o,this.dataSource=new J(U.pagedSorted("name")),this.dataSource.addRows([b.borderless([T.nameText(i=>i.name),h.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",i=>i.abbreviation),T.createdAt()]),b.headerless([h.text("description")])]),this.get();}openFilterComponent(){this.dialog.open(oe,{data:this.dataSource.filterModel}).afterClosed().pipe(M(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.testClasses.get(this.dataSource.filterModel).pipe(V(this.dataSource.indicator),M(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(o){return new(o||e)(s(H),s(d));},e.ɵcmp=p({type:e,selectors:[["medisy-laboratory-test-classes"]],features:[c([d])],decls:5,vars:4,consts:()=>{let t;return t="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(m(0,"sz-ui-header-basic")(1,"h5",0),D(2,1),l()(),m(3,"sz-ui-table-filter",2),g("search",function(){return i.get();})("filter",function(){return i.openFilterComponent();}),l(),m(4,"sz-ui-table",3),g("update",function(){return i.get();}),l()),o&2&&(n(3),a("dataSource",i.dataSource),n(1),a("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[Q,K,_],encapsulation:2});let r=e;return r;})();var re=[{path:"",component:ie}];var Xe=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=z({type:e}),e.ɵinj=y({providers:[d],imports:[G,f,O.forChild(re),S,w,B,j,W,C,_]});let r=e;return r;})();export{Xe as TestClassesModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/