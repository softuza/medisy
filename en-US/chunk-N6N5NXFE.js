import{g as r}from"./chunk-BE5RJSSS.js";import{a as P}from"./chunk-634WJ4ZA.js";import{b as n,c as R,d as _,s as j,t as w}from"./chunk-EWJ5VIW6.js";import{c as D,l as I,n as A}from"./chunk-AS5U2OT3.js";import{d as z}from"./chunk-GP3W3GGO.js";import{a as s}from"./chunk-RZPZI5M7.js";import{a as M}from"./chunk-RXJ3ACVE.js";import{a as v,e as g,h as C}from"./chunk-2IOOD4ZB.js";import{i as T}from"./chunk-DESFHGZ3.js";import{Bb as f,Cb as S,L as l,Pb as y,Zb as b,ac as h,db as o,la as c,nb as u}from"./chunk-J5YYK5S2.js";var ee=(()=>{let i=class i{constructor(e,t,a,p){this.route=e,this.dialog=t,this.mlabService=a,this.typeI18nPipe=p,this.dataSource=new _,this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(R.default([n.text("specimen.code",s.code),n.text("specimen.type.name",s.type),n.text("specimen.state",s.state,d=>p.transform(d.specimen.state)),P.menu([T.delete(d=>this.openDeleteAnalysisSpecimenComponent(d))])])),this.get()}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(I,{data:A.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(l(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.analyses.specimens.get(this.analysis.id,C.unpaged()).pipe(D(this.dataSource.indicator)).pipe(l(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};i.\u0275fac=function(t){return new(t||i)(o(v),o(z),o(M),o(r))},i.\u0275cmp=c({type:i,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[b([r]),h],decls:1,vars:2,consts:[[3,"stateEnabled","dataSource","update"]],template:function(t,a){t&1&&(f(0,"sz-ui-table",0),y("update",function(){return a.get()}),S()),t&2&&u("stateEnabled",!0)("dataSource",a.dataSource)},dependencies:[g,w,j],encapsulation:2});let m=i;return m})();export{ee as a};
/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/
