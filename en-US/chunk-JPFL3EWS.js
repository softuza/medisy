import{e as N,t as R}from"./chunk-T2EWQS4V.js";import{b as M}from"./chunk-CCOUZGWD.js";import{a as X,b as k,c as q,e as x,o as J,p as K}from"./chunk-VWYIWTAJ.js";import{c as w,g as $,i as H,j as U,m as V}from"./chunk-4L7MXCYU.js";import{a as O,b as L,d as Y,e as j,g as B}from"./chunk-MLSRSUWT.js";import"./chunk-VNFB3LL3.js";import{h as y,l as E,n as v,p as z,r as D,s as I}from"./chunk-IGZ5UQAZ.js";import{a as l}from"./chunk-ANLAVR6W.js";import{a as f}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as G}from"./chunk-HSBTPXYW.js";import{e as F}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{c as P}from"./chunk-45S7AHWB.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{Ra as A}from"./chunk-5YRGD4YU.js";import{Ab as s,Bb as p,Cb as c,L as S,Mb as T,Ob as _,Yb as u,cb as m,da as g,db as a,kb as b,la as d,ma as C,nb as n}from"./chunk-MK3KDUIH.js";var W=(()=>{let e=class e extends ${constructor(t,i,o){super(i),this.fb=t,this.dialog=i,this.data=o,this.form=t.group({});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(i){return new(i||e)(a(z),a(O),a(L));},e.ɵcmp=d({type:e,selectors:[["medisy-specimen-types-filter"]],features:[u([]),b],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(i,o){i&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content"),c(2,"form",1),p(),c(3,"sz-ui-dialog-actions",2)),i&2&&(n("header",o.header),m(2),n("formGroup",o.form),m(1),n("actions",o.actions));},dependencies:[E,y,v,j,H,U],encapsulation:2});let r=e;return r;})();var Z=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.mlabService=i,this.dataSource=new k(G.pagedSorted("name")),this.dataSource.addRows(q.default([M.nameText(o=>o.name),X.text("abbreviation","Abbreviation",o=>o.abbreviation),M.createdAt()])),this.get();}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.specimenTypes.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(a(Y),a(l));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-specimen-types"]],features:[u([l])],decls:5,vars:4,consts:()=>{let t;return t="Specimen Types",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),p()(),s(3,"sz-ui-table-filter",2),_("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),p(),s(4,"sz-ui-table",3),_("update",function(){return o.get();}),p()),i&2&&(m(3),n("dataSource",o.dataSource),m(1),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[J,x,f],encapsulation:2});let r=e;return r;})();var ee=[{path:"",component:Z}];var $e=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=C({type:e}),e.ɵinj=g({providers:[l],imports:[D,I,F.forChild(ee),B,N,A,P,K,R,V,f]});let r=e;return r;})();export{$e as SpecimenTypesModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/