import{a as r,b as j,d as k,e as w,g as x,j as V,k as W}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import{b as Y,h as $}from"./chunk-BCSTBLMZ.js";import"./chunk-7GEYLSOC.js";import{a as d}from"./chunk-BC6TH3PO.js";import"./chunk-UYYWHWBI.js";import{j as F}from"./chunk-5NWVIDQT.js";import{a as c}from"./chunk-NXQ5VREG.js";import{d as D,e as _,h as P}from"./chunk-HWSLRHWT.js";import{d as B,g as I}from"./chunk-Z2LVGH3F.js";import"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as l}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{a as v,c as L,d as O,e as E}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ia as T,ja as R,la as N}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as m,Kb as S,Lb as y,Vb as A,Wb as g,bb as f,cb as n,ea as C,na as h,nc as z,oa as b,zb as s}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var G=(()=>{let t=class t{constructor(e,o,i,u){this.dialog=e,this.mlabService=o,this.route=i,this.router=u,this.dataSource=new k("-createdAt"),this.appBarConfig={title:l.analyses};let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),j.menu([_.item(l.report,"report",()=>{}),_.divider(),P.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open($,{data:{format:Y.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(B),n(d),n(v),n(L));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","dataSource"]];},template:function(o,i){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),g("changed",function(){return i.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),g("update",function(){return i.get();}),S()),o&2&&(s("config",i.appBarConfig),f(),s("dataSource",i.dataSource),f(4),s("dataSource",i.dataSource));},dependencies:[O,V,x,c,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let a=t;return a;})();var Mt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=C({providers:[d],imports:[E.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-USZS7Z5P.js").then(e=>e.CreateComponent)}]),I,W,F,c,D,T,N]});let a=t;return a;})();export{G as AnalysesComponent,Mt as AnalysesModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/