import{c as $,g as j}from"./chunk-U74XIGIW.js";import{a as r,b as k,d as w,f as x,i as V,j as W}from"./chunk-7YC3FKFX.js";import"./chunk-U2NYA4TJ.js";import"./chunk-UKNNB4C6.js";import"./chunk-UBJFLYRY.js";import{a as d}from"./chunk-D4CAUMAG.js";import{j as Y}from"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as c}from"./chunk-6MMOYJEJ.js";import{d as P,e as g,h as F}from"./chunk-QT6JCYGS.js";import{d as I,g as R}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import"./chunk-UCRC6V5J.js";import{c as D}from"./chunk-5WJVC7PV.js";import"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import{c as l}from"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import"./chunk-EIWC7QFZ.js";import"./chunk-22G3BWVW.js";import{a as v,c as E,d as L,e as O}from"./chunk-L6HNREY7.js";import"./chunk-6YPHC773.js";import{ha as T,ia as N,ka as B}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Db as s,Nb as m,Ob as S,Pb as y,Zb as A,_b as _,hb as f,ib as n,ka as h,pc as z,ua as C,va as b}from"./chunk-XPH4NMLC.js";var G=(()=>{let t=class t{constructor(e,o,a,u){this.dialog=e,this.mlabService=o,this.route=a,this.router=u,this.title=l.analyses,this.dataSource=new w("-createdAt");let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),k.menu([g.item(l.report,"report",()=>{}),g.divider(),F.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:$.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(d),n(v),n(E));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","stateEnabled","dataSource"]];},template:function(o,a){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),_("changed",function(){return a.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),_("update",function(){return a.get();}),S()),o&2&&(s("title",a.title),f(),s("dataSource",a.dataSource),f(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,V,x,c,N],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var ht=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[d],imports:[O.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-4BXH6KUY.js").then(e=>e.CreateComponent)}]),R,W,Y,c,P,T,B]});let i=t;return i;})();export{G as AnalysesComponent,ht as AnalysesModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/