import{a as r,b as j,d as k,e as w,g as x,j as V,k as W}from"./chunk-ZLSXDCIO.js";import"./chunk-ACLGZOSL.js";import"./chunk-LEG6FMF5.js";import{b as Y,h as $}from"./chunk-FZE6EGLX.js";import"./chunk-HYYDWW7J.js";import{a as d}from"./chunk-BYRPVQVA.js";import"./chunk-X3OLNCPC.js";import"./chunk-ZKEQS56I.js";import{j as F}from"./chunk-L2P6WIHR.js";import{a as u}from"./chunk-AKSG62BI.js";import{d as D,e as g,h as P}from"./chunk-WYKVLT3M.js";import{d as I,g as R}from"./chunk-M5MMGZV5.js";import"./chunk-PT2AOOUZ.js";import"./chunk-4VPW53J2.js";import"./chunk-5SR3RA6H.js";import"./chunk-M3L6CA22.js";import{c as l}from"./chunk-3CUGB5EK.js";import"./chunk-2CWES3EL.js";import"./chunk-4BAJQFZN.js";import"./chunk-BTHAOAN7.js";import{a as v,c as L,d as O,e as E}from"./chunk-4ZVO2KE7.js";import"./chunk-HVAC2CBI.js";import{ia as T,ja as B,la as N}from"./chunk-UFNJTAPB.js";import"./chunk-NXJJYZOI.js";import{Jb as m,Kb as S,Lb as y,Vb as A,Wb as _,bb as f,cb as n,ea as h,na as C,nc as z,oa as b,zb as s}from"./chunk-V7MEDU65.js";import"./chunk-3LXWPKAO.js";var G=(()=>{let t=class t{constructor(e,o,a,c){this.dialog=e,this.mlabService=o,this.route=a,this.router=c,this.title=l.analyses,this.dataSource=new k("-createdAt");let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),j.menu([g.item(l.report,"report",()=>{}),g.divider(),P.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open($,{data:{format:Y.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(d),n(v),n(L));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","dataSource"]];},template:function(o,a){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),_("changed",function(){return a.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),_("update",function(){return a.get();}),S()),o&2&&(s("title",a.title),f(),s("dataSource",a.dataSource),f(4),s("dataSource",a.dataSource));},dependencies:[O,V,x,u,B],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var Mt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[d],imports:[E.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-364AEUIP.js").then(e=>e.CreateComponent)}]),R,W,F,u,D,T,N]});let i=t;return i;})();export{G as AnalysesComponent,Mt as AnalysesModule};/**i18n:703a5eca4d6a9dba72aa4758ace25d04110d9b6f3c4c7f41cebe1034cfa0e193*/