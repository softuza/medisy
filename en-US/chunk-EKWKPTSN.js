import{f as r}from"./chunk-3M6BPQ6D.js";import{b as j}from"./chunk-6BI6RHQ7.js";import{a as n,b as I,c as A,o as E,p as _}from"./chunk-ODDCETUF.js";import{b as R}from"./chunk-IWE7C4JI.js";import{e as M,n as T,p as D}from"./chunk-PYX76X2M.js";import{d as v}from"./chunk-SVUPQDJR.js";import{a as C}from"./chunk-KWGWCJPG.js";import{a as z}from"./chunk-DHBNYOFD.js";import{D as h,H as g}from"./chunk-MQ7PCRXN.js";import{L as l,Mb as S,Wb as y,Zb as b,db as o,la as d,nb as c,yb as u,zb as f}from"./chunk-FNRYDH3S.js";var Y=(()=>{let a=class a{constructor(e,i,s,m){this.route=e,this.dialog=i,this.mlabService=s,this.typeI18nPipe=m,this.dataSource=new I(z.unpagedSorted("-createdAt")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(A.default([n.hyperlink("code","Code",t=>t.id,t=>t.specimen.code.toString()),n.text("specimen.type","Type",t=>t.specimen.type.name),n.text("specimen.state","State",t=>m.transform(t.specimen.state)),j.menu([R.delete(t=>this.openDeleteAnalysisSpecimenComponent(t))])])),this.get();}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(T,{data:D.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(l(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.filterModel).pipe(M(this.dataSource.indicator)).pipe(l(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};a.ɵfac=function(i){return new(i||a)(o(h),o(v),o(C),o(r));},a.ɵcmp=d({type:a,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[y([r]),b],decls:1,vars:3,consts:[[3,"paginationEnabled","stateEnabled","dataSource","update"]],template:function(i,s){i&1&&(u(0,"sz-ui-table",0),S("update",function(){return s.get();}),f()),i&2&&c("paginationEnabled",!1)("stateEnabled",!0)("dataSource",s.dataSource);},dependencies:[g,_,E],encapsulation:2});let p=a;return p;})();export{Y as a};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/