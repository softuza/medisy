import{d as F}from"./chunk-Z6KDOQJY.js";import{a as n,b as O,d as D,f as L,k as P,l as R}from"./chunk-WAFKJ67S.js";import{a as z}from"./chunk-4A4DWX3B.js";import{j as v,l as N}from"./chunk-QMA7Y45E.js";import{g as I,j as u}from"./chunk-7ZCIBZRX.js";import{d as b}from"./chunk-UN7ZV7OU.js";import{c as A}from"./chunk-L2KLTZKL.js";import{d as T}from"./chunk-4U6LIYO2.js";import{a as M,e as h}from"./chunk-D3PLXWXH.js";import{a as g,c as E}from"./chunk-AHPLM44D.js";import{Hb as r,Ib as d,O as p,Tb as f,Vb as l,ib as _,jb as s,jc as C,mc as y,qa as S,xb as c}from"./chunk-MNGWH3SB.js";var te=(()=>{let a=class a{constructor(e,i,o){this.route=e,this.dialog=i,this.mlabService=o,this.dataSource=new D(),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns.push(n.uuid("id"),n.uuid("analysisId").setFieldFilterable(!1),n.icon("specimen.state",t=>F(t.specimen.state)).setContentTooltip(t=>T(t.specimen.state)),n.number("specimen.code"),n.string("specimen.type.name"),n.date("createdAt",!1),n.date("updatedAt",!1),O.menu([u.delete(t=>this.openAnalysisSpecimenDeleteComponent(t)),I.divider(),u.print(t=>this.openAnalysisSpecimenPrintComponent(t))])),this.get();}openAnalysisSpecimenDeleteComponent(e){this.dialog.open(v,{data:N.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(i=>{this.dataSource.delete(i);});}openAnalysisSpecimenPrintComponent(e){}openCreateComponent(){}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.getQuery()).pipe(A(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};a.ɵfac=function(i){return new(i||a)(s(M),s(b),s(z));},a.ɵcmp=S({type:a,selectors:[["sz-medisy-laboratory-analysis-specimens"]],standalone:!0,features:[C([]),y],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(r(0,"sz-ui-table-search-filter",0),l("changed",function(){return o.get();}),r(1,"button",1),l("click",function(){return o.openCreateComponent();}),r(2,"span"),f(3,2),d()()(),r(4,"sz-ui-table",3),l("update",function(){return o.get();}),d()),i&2&&(c("dataSource",o.dataSource),_(4),c("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[h,R,P,L,E,g],encapsulation:2});let m=a;return m;})();export{te as a};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/