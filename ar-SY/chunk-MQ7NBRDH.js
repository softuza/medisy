import{d as $,f as H,g as U,j as V}from"./chunk-WR4GG44T.js";import{e as N,t as R}from"./chunk-XIKUJ2RB.js";import{a as O,b as L,d as Y,e as j,g as B}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{b as M}from"./chunk-SYJ5COXL.js";import{a as X,b as k,c as q,d as x,n as J,o as K}from"./chunk-X7AK5RKT.js";import"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as w}from"./chunk-37GZDSHT.js";import"./chunk-FJNI2GB6.js";import{h as y,l as E,n as v,p as z,r as D,s as I,v as P}from"./chunk-FEFUQJM2.js";import{a as l}from"./chunk-ESAZXDOZ.js";import"./chunk-UPQBKJGY.js";import{a as G}from"./chunk-NW5OYJVI.js";import{a as f}from"./chunk-CVLFG5YI.js";import{H as F,Ta as A}from"./chunk-RQMADBIK.js";import{Ab as c,Kb as T,L as S,Mb as _,Wb as u,cb as m,da as g,db as a,kb as b,la as d,ma as C,nb as n,yb as s,zb as p}from"./chunk-3PI2VV3G.js";var W=(()=>{let e=class e extends ${constructor(i,t,o){super(t),this.fb=i,this.dialog=t,this.data=o,this.form=i.group({});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(t){return new(t||e)(a(z),a(O),a(L));},e.ɵcmp=d({type:e,selectors:[["medisy-specimen-types-filter"]],features:[u([]),b],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content"),c(2,"form",1),p(),c(3,"sz-ui-dialog-actions",2)),t&2&&(n("header",o.header),m(2),n("formGroup",o.form),m(1),n("actions",o.actions));},dependencies:[E,y,v,j,H,U],encapsulation:2});let r=e;return r;})();var Z=(()=>{let e=class e{constructor(i,t){this.dialog=i,this.mlabService=t,this.dataSource=new k(G.pagedSorted("name")),this.dataSource.addRows(q.default([M.nameText(o=>o.name),X.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",o=>o.abbreviation),M.createdAt()])),this.get();}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.specimenTypes.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),S(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};e.ɵfac=function(t){return new(t||e)(a(Y),a(l));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-specimen-types"]],features:[u([l])],decls:5,vars:4,consts:()=>{let i;return i="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),p()(),s(3,"sz-ui-table-filter",2),_("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),p(),s(4,"sz-ui-table",3),_("update",function(){return o.get();}),p()),t&2&&(m(3),n("dataSource",o.dataSource),m(1),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[J,x,f],encapsulation:2});let r=e;return r;})();var ee=[{path:"",component:Z}];var $e=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=C({type:e}),e.ɵinj=g({providers:[l],imports:[D,I,F.forChild(ee),B,N,A,P,K,R,V,f]});let r=e;return r;})();export{$e as SpecimenTypesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/