import{a as _}from"./chunk-RZJGFBXK.js";import{b as o,c as I,d as A,u as F,v as R}from"./chunk-47P25T34.js";import{a as r}from"./chunk-WBYPLE6B.js";import{a as z}from"./chunk-LAXXIHXK.js";import{c as D,l as M,n as T}from"./chunk-SK6APAT5.js";import{d as g}from"./chunk-3NLMA3OD.js";import{J as v,u as b,y as h}from"./chunk-HA3OCK63.js";import{i as C}from"./chunk-UVKSHNQV.js";import{Eb as d,Fb as u,M as p,Sb as f,gb as n,gc as S,jc as y,na as c,ub as l}from"./chunk-T2ST7G6M.js";var X=(()=>{let i=class i{constructor(e,t,a){this.route=e,this.dialog=t,this.mlabService=a,this.dataSource=new A,this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(I.default([o.text("specimen.code",r.code),o.text("specimen.type.name",r.type),o.text("specimen.state",r.state,s=>_(s.specimen.state)),o.menu([C.delete(s=>this.openDeleteAnalysisSpecimenComponent(s))])])),this.get()}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(M,{data:T.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.analyses.specimens.get(this.analysis.id,v.unpaged()).pipe(D(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};i.\u0275fac=function(t){return new(t||i)(n(b),n(g),n(z))},i.\u0275cmp=c({type:i,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[S([]),y],decls:1,vars:2,consts:[[3,"stateEnabled","dataSource","update"]],template:function(t,a){t&1&&(d(0,"sz-ui-table",0),f("update",function(){return a.get()}),u()),t&2&&l("stateEnabled",!0)("dataSource",a.dataSource)},dependencies:[h,R,F],encapsulation:2});let m=i;return m})();export{X as a};
/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/
