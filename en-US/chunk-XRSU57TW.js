import{b as O,f as L}from"./chunk-OGHQXPHK.js";import{b as $}from"./chunk-A4SLM5BL.js";import{a,b as R,d as B,f as P,i as F,j as Y}from"./chunk-BHRUDZVP.js";import{a as v}from"./chunk-UPED42KZ.js";import{i as D,k as N}from"./chunk-TEJYWJVO.js";import{e as z,h as p}from"./chunk-BZYUV3OB.js";import{d as h}from"./chunk-JTU2TQPP.js";import{c as T}from"./chunk-E4OGVLDJ.js";import{d as I}from"./chunk-ZPWMR5AU.js";import{a as M,e as g}from"./chunk-SJINDKNX.js";import{ia as E,ka as A}from"./chunk-J4WSEAYB.js";import{Db as d,Ma as _,Nb as r,Ob as c,Zb as C,_b as l,hb as f,ib as s,pc as b,qc as y,ta as u,ua as S}from"./chunk-E7ZYNPHN.js";var se=(()=>{let n=class n{constructor(e,i,o){this.route=e,this.dialog=i,this.mlabService=o,this.analysis=_.required(),this.dataSource=new B(),this.dataSource.columnDefs.push(a.uuid("id"),a.icon("specimen.state").setValueGetter(t=>$(t.specimen.state)).setValueTooltip(t=>I(t.specimen.state)),a.number("specimen.code").setStyleSmall(),a.string("specimen.type.nameEn"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),R.menu([p.barcode(t=>this.openBarcodeWriterComponent(t)),z.divider(),p.delete(t=>this.openAnalysisSpecimenDeleteComponent(t))]));}ngOnInit(){this.get();}openAnalysisSpecimenDeleteComponent(e){this.dialog.open(D,{data:N.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openBarcodeWriterComponent(e){this.dialog.open(L,{data:{format:O.DATA_MATRIX,msg:`specimenid.${e.id}`}}).afterClosed().subscribe({});}openCreateComponent(){}get(){this.mlabService.analyses.specimens.get(this.analysis().id,this.dataSource.getQuery()).pipe(T(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};n.ɵfac=function(i){return new(i||n)(s(M),s(h),s(v));},n.ɵcmp=S({type:n,selectors:[["sz-medisy-laboratory-analysis-specimens"]],inputs:{analysis:[u.SignalBased,"analysis"]},standalone:!0,features:[b([]),y],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(r(0,"sz-ui-table-search-filter",1),l("changed",function(){return o.get();}),r(1,"button",2),l("click",function(){return o.openCreateComponent();}),r(2,"span"),C(3,0),c()()(),r(4,"sz-ui-table",3),l("update",function(){return o.get();}),c()),i&2&&(d("dataSource",o.dataSource),f(4),d("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[g,Y,F,P,A,E],encapsulation:2});let m=n;return m;})();export{se as a};/**i18n:4432d5f57c128b53336b8fd28b2fbe1004e12689cc8828aeca1747c1f33ed32a*/