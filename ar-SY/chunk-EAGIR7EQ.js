import{b as M}from"./chunk-RQPF7GIR.js";import{a as X,b as k,c as q,e as x,q as J,r as K}from"./chunk-4NDBE333.js";import{c as w,g as $,i as H,j as U,m as V}from"./chunk-UJAW327Y.js";import{a as O,b as L,d as Y,e as j,g as B}from"./chunk-JW5GSDNP.js";import{E as R,n as N}from"./chunk-M2QIPGOP.js";import{h as y,l as E,n as v,p as z,r as D,s as I}from"./chunk-DNMCT3KT.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as l}from"./chunk-TJ6J6WZC.js";import{a as f}from"./chunk-CSFT2WH3.js";import{a as G}from"./chunk-OGDXQP2U.js";import{e as F}from"./chunk-KYUPPZUX.js";import"./chunk-B5RRONYF.js";import{c as P}from"./chunk-M4TKXCQI.js";import{Ra as A}from"./chunk-IPZKDZL6.js";import{Bb as s,Cb as p,Db as c,L as S,Nb as T,Pb as _,Zb as u,cb as m,da as g,db as a,kb as b,la as d,ma as C,nb as n}from"./chunk-3QIFGVJ6.js";var W=(()=>{let e=class e extends ${constructor(t,i,o){super(i),this.fb=t,this.dialog=i,this.data=o,this.form=t.group({});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(i){return new(i||e)(a(z),a(O),a(L));},e.ɵcmp=d({type:e,selectors:[["medisy-specimen-types-filter"]],features:[u([]),b],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(i,o){i&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content"),c(2,"form",1),p(),c(3,"sz-ui-dialog-actions",2)),i&2&&(n("header",o.header),m(2),n("formGroup",o.form),m(1),n("actions",o.actions));},dependencies:[E,y,v,j,H,U],encapsulation:2});let r=e;return r;})();var Z=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.mlabService=i,this.dataSource=new k(G.pagedSorted("name")),this.dataSource.addRows(q.default([M.nameText(o=>o.name),X.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",o=>o.abbreviation),M.createdAt()])),this.get();}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.specimenTypes.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(a(Y),a(l));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-specimen-types"]],features:[u([l])],decls:5,vars:4,consts:()=>{let t;return t="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),p()(),s(3,"sz-ui-table-filter",2),_("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),p(),s(4,"sz-ui-table",3),_("update",function(){return o.get();}),p()),i&2&&(m(3),n("dataSource",o.dataSource),m(1),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[J,x,f],encapsulation:2});let r=e;return r;})();var ee=[{path:"",component:Z}];var $e=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=C({type:e}),e.ɵinj=g({providers:[l],imports:[D,I,F.forChild(ee),B,N,A,P,K,R,V,f]});let r=e;return r;})();export{$e as SpecimenTypesModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/