import{a as r,b as k,d as w,f as x,i as V,j as W}from"./chunk-NBZRVN3Y.js";import"./chunk-V3IDSUBA.js";import"./chunk-72QARLDS.js";import{b as $,f as j}from"./chunk-RKH42NA5.js";import"./chunk-4WMKGAQA.js";import{a as d}from"./chunk-E4K3ZOYS.js";import"./chunk-4XEE4I4T.js";import{j as Y}from"./chunk-JDQ4W3QS.js";import"./chunk-5XS2JNPH.js";import{a as c}from"./chunk-3TCVELMY.js";import{d as P,e as g,h as F}from"./chunk-VN32AWOL.js";import{d as I,g as R}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{j as D}from"./chunk-HZVTZU6E.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as l}from"./chunk-NXGV7MLA.js";import"./chunk-QN2XJZ42.js";import"./chunk-YQYD3PHP.js";import"./chunk-FDTJH5UN.js";import{a as v,c as L,d as O,e as E}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as T,ia as N,ka as B}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as m,Jb as S,Kb as y,Ub as A,Vb as _,ab as f,bb as n,ea as h,kc as z,na as C,oa as b,yb as s}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var G=(()=>{let t=class t{constructor(e,o,a,u){this.dialog=e,this.mlabService=o,this.route=a,this.router=u,this.title=l.analyses,this.dataSource=new w("-createdAt");let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),k.menu([g.item(l.report,"report",()=>{}),g.divider(),F.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:$.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(d),n(v),n(L));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","dataSource"]];},template:function(o,a){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),_("changed",function(){return a.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),_("update",function(){return a.get();}),S()),o&2&&(s("title",a.title),f(),s("dataSource",a.dataSource),f(4),s("dataSource",a.dataSource));},dependencies:[O,V,x,c,N],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var ht=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[d],imports:[E.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-M3LDFJBD.js").then(e=>e.CreateComponent)}]),R,W,Y,c,P,T,B]});let i=t;return i;})();export{G as AnalysesComponent,ht as AnalysesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/