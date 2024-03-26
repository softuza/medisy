import{b as B}from"./chunk-LNG2NYUW.js";import{a,b as D,d as O,f as L,i as P,j as R}from"./chunk-56RI3JIQ.js";import{a as z}from"./chunk-IY2QXOH2.js";import{i as v,k as N}from"./chunk-EF2KU3MF.js";import{d as I,g as u}from"./chunk-RAWQ4NAU.js";import{d as b}from"./chunk-O4MIBT3U.js";import{c as A}from"./chunk-XGOPNFX6.js";import{d as T}from"./chunk-VKLUJQ6V.js";import{a as M,e as h}from"./chunk-XPDLU2SJ.js";import{a as g,c as E}from"./chunk-YUBOPGWF.js";import{Bb as c,Lb as s,Mb as d,Q as p,Xb as f,Yb as l,gb as _,hb as r,na as S,nc as y,oc as C}from"./chunk-3ZQQMLH6.js";var te=(()=>{let o=class o{set analysis(e){this._analysis=e,this.get();}get analysis(){return this._analysis;}constructor(e,i,n){this.route=e,this.dialog=i,this.mlabService=n,this.dataSource=new O(),this.dataSource.columnDefs.push(a.uuid("id"),a.icon("specimen.state").setValueGetter(t=>B(t.specimen.state)).setValueTooltip(t=>T(t.specimen.state)),a.number("specimen.code"),a.string("specimen.type.name"),a.date("createdAt",!1),a.date("updatedAt",!1),D.menu([u.delete(t=>this.openAnalysisSpecimenDeleteComponent(t)),I.divider(),u.print(t=>this.openAnalysisSpecimenPrintComponent(t))]));}openAnalysisSpecimenDeleteComponent(e){this.dialog.open(v,{data:N.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(i=>{this.dataSource.delete(i);});}openAnalysisSpecimenPrintComponent(e){}openCreateComponent(){}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.getQuery()).pipe(A(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)(r(M),r(b),r(z));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-analysis-specimens"]],inputs:{analysis:"analysis"},standalone:!0,features:[y([]),C],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,n){i&1&&(s(0,"sz-ui-table-search-filter",0),l("changed",function(){return n.get();}),s(1,"button",1),l("click",function(){return n.openCreateComponent();}),s(2,"span"),f(3,2),d()()(),s(4,"sz-ui-table",3),l("update",function(){return n.get();}),d()),i&2&&(c("dataSource",n.dataSource),_(4),c("stateEnabled",!0)("dataSource",n.dataSource));},dependencies:[h,R,P,L,E,g],encapsulation:2});let m=o;return m;})();export{te as a};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/