import{a as r,b as k,d as w,f as x,i as V,j as W}from"./chunk-5YPBEEDC.js";import"./chunk-KC6VXE5Q.js";import"./chunk-HKZXWKQN.js";import{b as $,f as j}from"./chunk-H2W6LVAI.js";import"./chunk-A54NTVFL.js";import"./chunk-EWRIL5TF.js";import{a as d}from"./chunk-VLANWQE5.js";import{j as Y}from"./chunk-IVJJNIOC.js";import"./chunk-PP3NP7HU.js";import{a as c}from"./chunk-PHJ3BL23.js";import{d as P,e as g,h as F}from"./chunk-IDZ2W4CX.js";import{d as I,g as R}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import"./chunk-KZQF464X.js";import{c as D}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as l}from"./chunk-Y37IT74E.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{a as v,c as E,d as L,e as O}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as T,ia as N,ka as B}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as m,Jb as S,Kb as y,Ub as A,Vb as _,ab as f,bb as n,ea as h,kc as z,na as C,oa as b,yb as s}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var G=(()=>{let t=class t{constructor(e,o,a,u){this.dialog=e,this.mlabService=o,this.route=a,this.router=u,this.title=l.analyses,this.dataSource=new w("-createdAt");let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),k.menu([g.item(l.report,"report",()=>{}),g.divider(),F.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:$.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(d),n(v),n(E));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","stateEnabled","dataSource"]];},template:function(o,a){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),_("changed",function(){return a.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),_("update",function(){return a.get();}),S()),o&2&&(s("title",a.title),f(),s("dataSource",a.dataSource),f(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,V,x,c,N],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var ht=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[d],imports:[O.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-WW3636TZ.js").then(e=>e.CreateComponent)}]),R,W,Y,c,P,T,B]});let i=t;return i;})();export{G as AnalysesComponent,ht as AnalysesModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/