import{g as m}from"./chunk-7X3HZZWH.js";import{a as w}from"./chunk-2ZLUHTYM.js";import{b as r,c as A,d as R,s as _,t as j}from"./chunk-JH62Z3XX.js";import{c as T,l as D,n as I}from"./chunk-TXP6BBJB.js";import{d as C}from"./chunk-BVSJJDLC.js";import{a as n}from"./chunk-KMOC5U6F.js";import{a as z}from"./chunk-BKRW4NXC.js";import{a as v,e as g}from"./chunk-KIPWFCJ2.js";import{i as M}from"./chunk-Y2P4J75K.js";import{$b as h,Bb as f,Cb as S,L as l,Rb as y,cc as b,db as a,la as c,nb as u}from"./chunk-6MBKLWBV.js";var Z=(()=>{let o=class o{constructor(e,i,s,d){this.route=e,this.dialog=i,this.mlabService=s,this.typeI18nPipe=d,this.dataSource=new R,this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(A.default([r.hyperlink("code",n.code,t=>t.id,t=>t.specimen.code.toString()),r.text("specimen.type",n.type,t=>t.specimen.type.name),r.text("specimen.state",n.state,t=>d.transform(t.specimen.state)),w.menu([M.delete(t=>this.openDeleteAnalysisSpecimenComponent(t))])])),this.get()}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(D,{data:I.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(l(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.mlabService.analyses.specimens.get(this.analysis.id).pipe(T(this.dataSource.indicator)).pipe(l(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};o.\u0275fac=function(i){return new(i||o)(a(v),a(C),a(z),a(m))},o.\u0275cmp=c({type:o,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[h([m]),b],decls:1,vars:2,consts:[[3,"stateEnabled","dataSource","update"]],template:function(i,s){i&1&&(f(0,"sz-ui-table",0),y("update",function(){return s.get()}),S()),i&2&&u("stateEnabled",!0)("dataSource",s.dataSource)},dependencies:[g,j,_],encapsulation:2});let p=o;return p})();export{Z as a};
/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/
