import{a as r,b as w,d as x,f as W,i as q,j as G}from"./chunk-JV6QMPQL.js";import"./chunk-VRCSACJH.js";import{c as $,i as j}from"./chunk-LSG5ZRNI.js";import"./chunk-GU4WFXGT.js";import{a as c}from"./chunk-5SSCGDFC.js";import"./chunk-BNSJPKLO.js";import{j as k}from"./chunk-IXYP3UPN.js";import"./chunk-YYI2KTIZ.js";import{b as u}from"./chunk-VSNS76N3.js";import{d as F,g as d,i as Y}from"./chunk-RMS73U75.js";import{d as R,g as N}from"./chunk-GYDCMUMI.js";import"./chunk-EQDTRDUR.js";import{c as P}from"./chunk-Z5X5TXJA.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c as m}from"./chunk-HXWKRRDN.js";import"./chunk-QBI5CVQV.js";import"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{a as E,c as I,d as L,e as O}from"./chunk-UR27RSXA.js";import"./chunk-SUZUBBLM.js";import{a as D,c as B}from"./chunk-PPOSM6EZ.js";import{ia as T}from"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Cb as l,Db as _,Eb as v,I as h,Ob as A,Qb as M,ba as C,db as g,eb as n,ec as z,ka as b,la as y,sb as s}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";var H=(()=>{let t=class t{constructor(e,o,a,p){this.dialog=e,this.mlabService=o,this.route=a,this.router=p,this.title=m.analyses,this.dataSource=new x("-createdAt");let f=this.router.getCurrentNavigation()?.extras.state;f&&f.filter&&this.dataSource.filtration?.filters.push(f.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setClickFn(S=>this.router.navigate([`/mlab/analyses/${S.id}`])).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(m.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt",!1),w.menu([d.item(m.report,"report",()=>{}),d.divider(),d.item(m.qr,Y.qr,S=>this.openBarcodeWriterComponent(S))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:$.QR_Code,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(P(this.dataSource.indicator),h(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(R),n(c),n(E),n(I));},t.ɵcmp=b({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,a){o&1&&(v(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),M("changed",function(){return a.get();}),l(2,"button",2)(3,"span"),A(4,3),_()()(),l(5,"sz-ui-table",4),M("update",function(){return a.get();}),_()),o&2&&(s("title",a.title),g(),s("dataSource",a.dataSource),g(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,q,W,u,D],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var yt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=y({type:t}),t.ɵinj=C({providers:[c],imports:[O.forChild([{path:"",component:H},{path:"create",loadComponent:()=>import("./chunk-DDZH2SXW.js").then(e=>e.CreateComponent)}]),N,G,k,u,F,T,B]});let i=t;return i;})();export{H as AnalysesComponent,yt as AnalysesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/