import{f as m}from"./chunk-A4RP7L5Q.js";import"./chunk-SIM3MWAY.js";import{b as O}from"./chunk-SYJ5COXL.js";import{a as d,b as g,c as N,n as z,o as R}from"./chunk-X7AK5RKT.js";import"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as v}from"./chunk-37GZDSHT.js";import"./chunk-FJNI2GB6.js";import"./chunk-FEFUQJM2.js";import{a as A}from"./chunk-ESAZXDOZ.js";import"./chunk-UPQBKJGY.js";import{a as P}from"./chunk-NW5OYJVI.js";import{a as I}from"./chunk-CVLFG5YI.js";import{D as b,G as h,H as C}from"./chunk-RQMADBIK.js";import{Kb as _,L as p,Mb as f,Tb as E,Ub as M,Wb as y,Zb as T,cb as l,db as n,la as S,nb as u,yb as r,zb as s}from"./chunk-3PI2VV3G.js";var K=(()=>{let a=class a{constructor(e,i,o){this.route=e,this.mlabService=i,this.typeI18nPipe=o,this.dataSource=new g(P.pagedSorted("-createdAt")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(N.default([d.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",t=>t.id,t=>t.specimen.code.toString()),d.text("specimen.type","\u0627\u0644\u0646\u0645\u0637",t=>t.specimen.type.name),d.text("specimen.state","\u0627\u0644\u062D\u0627\u0644\u0629",t=>o.transform(t.specimen.state)),O.menu([])])),this.get();}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.filterModel).pipe(v(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};a.ɵfac=function(i){return new(i||a)(n(b),n(A),n(m));},a.ɵcmp=S({type:a,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[y([m]),T],decls:7,vars:4,consts:()=>{let e;return e="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(r(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),_(3,2),s(),r(4,"a",3),E(5),s()()(),r(6,"sz-ui-table",4),f("update",function(){return o.get();}),s()),i&2&&(l(5),M(o.analysis.code),l(1),u("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[C,h,R,z,I],encapsulation:2});let c=a;return c;})();export{K as AnalysisSpecimensComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/