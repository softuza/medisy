import{b as W}from"./chunk-K7SRTLNW.js";import{a as T}from"./chunk-7I65MTVO.js";import{a as i,c as R,e as V,i as j,j as L}from"./chunk-N3YZ3GWE.js";import{b as _,h as F}from"./chunk-HSGJ3EIG.js";import{a as A}from"./chunk-ECHZ6EB4.js";import{b as B,j as I}from"./chunk-BQ3MI4NW.js";import{h as r,j as D}from"./chunk-VP6ZLF3H.js";import{d as z}from"./chunk-WNUUIGGE.js";import{Y as v,Z as M}from"./chunk-KQ5MQZXD.js";import{a as b,e as C}from"./chunk-DNH4OZS2.js";import{la as g}from"./chunk-4B53IFHW.js";import{Fa as l,Kb as u,Lb as S,Xb as f,bb as c,cb as s,na as p,oc as h,pc as y,zb as m}from"./chunk-G33TNFCW.js";var ie=(()=>{let o=class o{constructor(e,t,a){this.route=e,this.dialog=t,this.mlabService=a,this.analysis=l.required(),this.dataSource=new R,this.card={header:{title:v.specimens},menu:D.more([r.add(()=>this.openCreateComponent())])},this.dataSource.columnDefs.push(i.uuid("id"),i.icon("specimen.state").setValueGetter(n=>W(n.specimen.state)).setValueTooltip(n=>M(n.specimen.state)),i.number("specimen.code").setStyleSmall(),i.string("specimen.type.nameEn"),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),i.menu([r.barcode(this.openBarcodeWriterComponent.bind(this)),r.divider(),r.delete(this.openAnalysisSpecimenDeleteComponent.bind(this))]))}ngOnInit(){this.get()}openAnalysisSpecimenDeleteComponent(e){this.dialog.open(I,{data:B.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}openBarcodeWriterComponent(e){this.dialog.open(F,{data:{format:_.DATA_MATRIX,msg:`specimenid.${e.id}`}}).afterClosed().subscribe({})}openCreateComponent(){}get(){this.mlabService.analyses.specimens.get(this.analysis().id,this.dataSource.getQuery()).pipe(V(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};o.\u0275fac=function(t){return new(t||o)(s(b),s(z),s(A))},o.\u0275cmp=p({type:o,selectors:[["sz-medisy-laboratory-analysis-specimens"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[h([]),y],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,a){t&1&&(u(0,"sz-ui-card",0)(1,"sz-ui-table",1),f("update",function(){return a.get()}),S()()),t&2&&(m("card",a.card),c(),m("dataSource",a.dataSource))},dependencies:[C,L,j,g,T],encapsulation:2});let d=o;return d})();export{ie as a};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
