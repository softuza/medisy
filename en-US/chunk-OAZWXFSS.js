import{f as m}from"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import{b as O}from"./chunk-M3UESULM.js";import{b as d,c as g,d as N,p as z,q as R}from"./chunk-PTJACGQS.js";import"./chunk-UNCYENX6.js";import{b as v}from"./chunk-VRISEVPV.js";import"./chunk-GJY7U5GZ.js";import{a as A}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as P}from"./chunk-PIKBUH2I.js";import{a as I}from"./chunk-QDC3ZTFW.js";import{I as b,L as h,M as C}from"./chunk-NC2N2FCX.js";import{Ab as r,Bb as s,L as p,Mb as _,Pb as f,Wb as E,Xb as M,Zb as y,ac as T,eb as l,fb as n,ma as S,pb as u}from"./chunk-3CXVAQY6.js";var K=(()=>{let a=class a{constructor(e,i,o){this.route=e,this.mlabService=i,this.typeI18nPipe=o,this.dataSource=new g(P.pagedSorted("-createdAt")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(N.default([d.hyperlink("code","Code",t=>t.id,t=>t.specimen.code.toString()),d.text("specimen.type","Type",t=>t.specimen.type.name),d.text("specimen.state","State",t=>o.transform(t.specimen.state)),O.menu([])])),this.get();}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.filterModel).pipe(v(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};a.ɵfac=function(i){return new(i||a)(n(b),n(A),n(m));},a.ɵcmp=S({type:a,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[y([m]),T],decls:7,vars:4,consts:()=>{let e;return e="Specimens",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(r(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),_(3,2),s(),r(4,"a",3),E(5),s()()(),r(6,"sz-ui-table",4),f("update",function(){return o.get();}),s()),i&2&&(l(5),M(o.analysis.code),l(1),u("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[C,h,R,z,I],encapsulation:2});let c=a;return c;})();export{K as AnalysisSpecimensComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/