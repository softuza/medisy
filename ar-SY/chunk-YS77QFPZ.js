import{e as N,t as R}from"./chunk-PXOTKN7X.js";import"./chunk-X55ZRX4G.js";import{b as M}from"./chunk-6BI6RHQ7.js";import{a as X,b as k,c as q,e as x,o as J,p as K}from"./chunk-ODDCETUF.js";import"./chunk-IWE7C4JI.js";import"./chunk-OWQ5IK3C.js";import{e as w,i as $,k as H,l as U,o as V}from"./chunk-PYX76X2M.js";import{a as O,b as L,d as Y,e as j,g as B}from"./chunk-SVUPQDJR.js";import"./chunk-AYQEHXDK.js";import{h as y,l as E,n as v,p as z,r as D,s as I,v as P}from"./chunk-VJLOVWWV.js";import{a as l}from"./chunk-KWGWCJPG.js";import"./chunk-BI2SJY2U.js";import{a as G}from"./chunk-DHBNYOFD.js";import{a as f}from"./chunk-AALBHV7K.js";import{H as F,Ta as A}from"./chunk-MQ7PCRXN.js";import{Ab as c,Kb as T,L as S,Mb as _,Wb as u,cb as m,da as g,db as a,kb as b,la as d,ma as C,nb as n,yb as s,zb as p}from"./chunk-FNRYDH3S.js";var W=(()=>{let e=class e extends ${constructor(t,i,o){super(i),this.fb=t,this.dialog=i,this.data=o,this.form=t.group({});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(i){return new(i||e)(a(z),a(O),a(L));},e.ɵcmp=d({type:e,selectors:[["medisy-specimen-types-filter"]],features:[u([]),b],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(i,o){i&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content"),c(2,"form",1),p(),c(3,"sz-ui-dialog-actions",2)),i&2&&(n("header",o.header),m(2),n("formGroup",o.form),m(1),n("actions",o.actions));},dependencies:[E,y,v,j,H,U],encapsulation:2});let r=e;return r;})();var Z=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.mlabService=i,this.dataSource=new k(G.pagedSorted("name")),this.dataSource.addRows(q.default([M.nameText(o=>o.name),X.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",o=>o.abbreviation),M.createdAt()])),this.get();}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.specimenTypes.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(a(Y),a(l));},e.ɵcmp=d({type:e,selectors:[["medisy-laboratory-specimen-types"]],features:[u([l])],decls:5,vars:4,consts:()=>{let t;return t="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),p()(),s(3,"sz-ui-table-filter",2),_("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),p(),s(4,"sz-ui-table",3),_("update",function(){return o.get();}),p()),i&2&&(m(3),n("dataSource",o.dataSource),m(1),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[J,x,f],encapsulation:2});let r=e;return r;})();var ee=[{path:"",component:Z}];var $e=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=C({type:e}),e.ɵinj=g({providers:[l],imports:[D,I,F.forChild(ee),B,N,A,P,K,R,V,f]});let r=e;return r;})();export{$e as SpecimenTypesModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/