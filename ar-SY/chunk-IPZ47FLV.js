import{a as j}from"./chunk-764DNHTL.js";import{a as w}from"./chunk-NXZO5HE7.js";import{b as r,c as I,d as A,u as R,v as _}from"./chunk-V53QYHWX.js";import{c as M,l as D,n as T}from"./chunk-W2LWMIH7.js";import{d as g}from"./chunk-VQ3CVIXE.js";import{a as n}from"./chunk-BUSYHZDZ.js";import{a as z}from"./chunk-4BLYINPM.js";import{a as b,e as h,m as v}from"./chunk-E2DYYESB.js";import{i as C}from"./chunk-R54FJ7AR.js";import{Eb as c,Fb as u,M as p,Sb as f,gb as s,gc as S,jc as y,na as l,ub as d}from"./chunk-CQJO6ZYU.js";var Z=(()=>{let i=class i{constructor(e,t,o){this.route=e,this.dialog=t,this.mlabService=o,this.dataSource=new A,this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(I.default([r.text("specimen.code",n.code),r.text("specimen.type.name",n.type),r.text("specimen.state",n.state,a=>j(a.specimen.state)),w.menu([C.delete(a=>this.openDeleteAnalysisSpecimenComponent(a))])])),this.get()}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(D,{data:T.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.analyses.specimens.get(this.analysis.id,v.unpaged()).pipe(M(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};i.\u0275fac=function(t){return new(t||i)(s(b),s(g),s(z))},i.\u0275cmp=l({type:i,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[S([]),y],decls:1,vars:2,consts:[[3,"stateEnabled","dataSource","update"]],template:function(t,o){t&1&&(c(0,"sz-ui-table",0),f("update",function(){return o.get()}),u()),t&2&&d("stateEnabled",!0)("dataSource",o.dataSource)},dependencies:[h,_,R],encapsulation:2});let m=i;return m})();export{Z as a};
/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/
