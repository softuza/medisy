import{a as j}from"./chunk-6NIDFAY4.js";import{a as T,b as A,j as I,k as _,l as i}from"./chunk-UEYVTK2C.js";import{a as C}from"./chunk-X7MHABBF.js";import{i as M,k as F}from"./chunk-VBW76653.js";import{f as D}from"./chunk-2F3BHEDP.js";import{d as z}from"./chunk-UDDJQSJH.js";import{Ca as v,J as y,N as b,xa as h,ya as g}from"./chunk-76TLQ37S.js";import{Fb as l,Gb as c,M as m,Tb as u,hb as n,hc as f,kc as S,oa as p,vb as d}from"./chunk-WEGHM63Q.js";var Y=(()=>{let a=class a{constructor(e,t,s){this.route=e,this.dialog=t,this.mlabService=s,this.dataSource=new A,this.analysis=this.route.snapshot.data.analysis,this.dataSource.fields.push(i.uuid("id"),i.uuid("analysisId"),i.icon("specimen.state",o=>j(o.specimen.state)).setContentTooltip(o=>v(o.specimen.state)),i.number("specimen.code"),i.string("specimen.type.name"),i.date("createdAt",!1),i.date("updatedAt",!1),T.menu([D.delete(o=>this.openDeleteAnalysisSpecimenComponent(o))])),this.get()}openDeleteAnalysisSpecimenComponent(e){this.dialog.open(M,{data:F.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.analyses.specimens.get(this.analysis.id,h.unpaged()).pipe(g(this.dataSource.indicator)).pipe(m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};a.\u0275fac=function(t){return new(t||a)(n(y),n(z),n(C))},a.\u0275cmp=p({type:a,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[f([]),S],decls:1,vars:2,consts:[[3,"stateEnabled","dataSource","update"]],template:function(t,s){t&1&&(l(0,"sz-ui-table",0),u("update",function(){return s.get()}),c()),t&2&&d("stateEnabled",!0)("dataSource",s.dataSource)},dependencies:[b,_,I],encapsulation:2});let r=a;return r})();export{Y as a};
/**i18n:b6356af15a472d72c43a2a12f81780e7aeabf4debd55cf9990b19b5b7f0f0471*/