import{a as r,b as F,d as $,e as j,g as k,j as w,k as x}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import{b as P,h as Y}from"./chunk-TEBWU5GY.js";import"./chunk-M257HJPM.js";import{a as l}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{k as D}from"./chunk-SQWEE7KP.js";import{a as d}from"./chunk-GUAFKVMJ.js";import{d as I,h as N}from"./chunk-D36EDMAQ.js";import{d as B,g as E}from"./chunk-NGJJVZ6X.js";import"./chunk-ZPSFEZWB.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as S}from"./chunk-WYY322KA.js";import"./chunk-Z6RT565P.js";import"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{a as A,c as z,d as v,e as L}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as O,ja as T,la as R}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as m,Lb as p,Mb as C,Wb as b,Xb as f,bb as c,cb as n,ea as _,na as M,oa as h,oc as y,zb as s}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var V=(()=>{let t=class t{constructor(e,o,i,u){this.dialog=e,this.mlabService=o,this.route=i,this.router=u,this.dataSource=new $("-createdAt"),this.appBarConfig={title:S.analyses};let g=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(g&&g.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(W=>`/mlab/analyses/${W.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(S.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),F.menu([N.barcode(this.openBarcodeWriterComponent.bind(this))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(Y,{data:{format:P.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(j(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(B),n(l),n(A),n(z));},t.ɵcmp=M({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[y([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return i.get();}),m(2,"button",3)(3,"span"),b(4,0),p()()(),m(5,"sz-ui-table",4),f("update",function(){return i.get();}),p()),o&2&&(s("config",i.appBarConfig),c(),s("dataSource",i.dataSource),c(4),s("dataSource",i.dataSource));},dependencies:[v,w,k,d,T],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let a=t;return a;})();var _t=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=h({type:t}),t.ɵinj=_({providers:[l],imports:[L.forChild([{path:"",component:V},{path:"create",loadComponent:()=>import("./chunk-VVVS32VV.js").then(e=>e.CreateComponent)}]),E,x,D,d,I,O,R]});let a=t;return a;})();export{V as AnalysesComponent,_t as AnalysesModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/