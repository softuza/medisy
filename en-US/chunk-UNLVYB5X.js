import{f as n}from"./chunk-3M6BPQ6D.js";import{b as j}from"./chunk-6BI6RHQ7.js";import{a as p,b as I,c as R,o as E,p as _}from"./chunk-ODDCETUF.js";import{b as A}from"./chunk-IWE7C4JI.js";import{e as T,n as M,p as D}from"./chunk-PYX76X2M.js";import{d as C}from"./chunk-SVUPQDJR.js";import{a as r}from"./chunk-KWGWCJPG.js";import{a as z}from"./chunk-DHBNYOFD.js";import{D as v,H as g}from"./chunk-MQ7PCRXN.js";import{L as m,Mb as y,Wb as b,Zb as h,db as o,la as c,nb as u,yb as f,zb as S}from"./chunk-FNRYDH3S.js";var X=(()=>{let i=class i{constructor(e,t,s,d){this.route=e,this.dialog=t,this.mlabService=s,this.typeI18nPipe=d,this.dataSource=new I(z.unpagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(R.default([p.text("test.testclass","Test Class",a=>a.test.testClass.name),p.text("test.state","State",a=>d.transform(a.test.state)),j.menu([A.delete(a=>this.openDeleteAnalysisTestComponent(a))])])),this.get();}openDeleteAnalysisTestComponent(e){this.dialog.open(M,{data:D.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.filterModel).pipe(T(this.dataSource.indicator)).pipe(m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(o(v),o(C),o(r),o(n));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[b([r,n]),h],decls:1,vars:3,consts:[[3,"paginationEnabled","stateEnabled","dataSource","update"]],template:function(t,s){t&1&&(f(0,"sz-ui-table",0),y("update",function(){return s.get();}),S()),t&2&&u("paginationEnabled",!1)("stateEnabled",!0)("dataSource",s.dataSource);},dependencies:[g,_,E],encapsulation:2});let l=i;return l;})();export{X as a};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/