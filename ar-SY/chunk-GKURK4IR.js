import{c as $,i as j}from"./chunk-PQ3AZLGS.js";import{a as r,b as w,d as x,f as W,i as q,j as G}from"./chunk-56RI3JIQ.js";import"./chunk-3VH4SKJI.js";import"./chunk-PGGIRJCC.js";import{a as c}from"./chunk-IY2QXOH2.js";import{j as k}from"./chunk-EF2KU3MF.js";import"./chunk-RWIHGCFX.js";import"./chunk-YYI2KTIZ.js";import{b as u}from"./chunk-BFUKSRR4.js";import{a as F,d,f as Y}from"./chunk-RAWQ4NAU.js";import{d as R,g as N}from"./chunk-O4MIBT3U.js";import"./chunk-QETJAZV7.js";import{c as P}from"./chunk-XGOPNFX6.js";import"./chunk-4PE74OIY.js";import"./chunk-S734PXWV.js";import{c as m}from"./chunk-VKLUJQ6V.js";import"./chunk-ZUQ55FEV.js";import"./chunk-AZ35PAEP.js";import"./chunk-7GKLQGBB.js";import{a as E,c as I,d as L,e as O}from"./chunk-XPDLU2SJ.js";import"./chunk-4GDGVDQ6.js";import{a as D,c as B}from"./chunk-YUBOPGWF.js";import{ha as T}from"./chunk-BE3RRH45.js";import"./chunk-ZTPR7VOL.js";import{Bb as s,Lb as l,Mb as _,Nb as v,Q as h,Xb as A,Yb as M,gb as g,hb as n,na as C,nc as z,oa as b,za as y}from"./chunk-3ZQQMLH6.js";var H=(()=>{let t=class t{constructor(e,o,a,p){this.dialog=e,this.mlabService=o,this.route=a,this.router=p,this.title=m.analyses,this.dataSource=new x("-createdAt");let f=this.router.getCurrentNavigation()?.extras.state;f&&f.filter&&this.dataSource.filtration?.filters.push(f.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setClickFn(S=>this.router.navigate([`/mlab/analyses/${S.id}`])).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(m.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt",!1),w.menu([d.item(m.report,"report",()=>{}),d.divider(),d.item(m.qr,Y.qr,S=>this.openBarcodeWriterComponent(S))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:$.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(P(this.dataSource.indicator),h(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(R),n(c),n(E),n(I));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,a){o&1&&(v(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),M("changed",function(){return a.get();}),l(2,"button",2)(3,"span"),A(4,3),_()()(),l(5,"sz-ui-table",4),M("update",function(){return a.get();}),_()),o&2&&(s("title",a.title),g(),s("dataSource",a.dataSource),g(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,q,W,u,D],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var yt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=y({providers:[c],imports:[O.forChild([{path:"",component:H},{path:"create",loadComponent:()=>import("./chunk-2XLFMNWM.js").then(e=>e.CreateComponent)}]),N,G,k,u,F,T,B]});let i=t;return i;})();export{H as AnalysesComponent,yt as AnalysesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/