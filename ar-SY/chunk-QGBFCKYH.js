import{a as r,b as j,d as k,e as w,g as x,j as V,k as W}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import{b as Y,h as $}from"./chunk-OKAHGCAZ.js";import"./chunk-3Q7NLQRN.js";import{a as d}from"./chunk-5IHQNMKH.js";import"./chunk-HAWQZ3DL.js";import{j as F}from"./chunk-CZ3NOAZC.js";import{a as c}from"./chunk-4APH4GGR.js";import{d as D,e as _,h as P}from"./chunk-3HX3ISKW.js";import{d as B,g as I}from"./chunk-T2IQKITO.js";import"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as l}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{a as v,c as L,d as O,e as E}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as T,ja as R,la as N}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as m,Kb as S,Lb as y,Vb as A,Wb as g,bb as f,cb as n,ea as C,na as h,nc as z,oa as b,zb as s}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var G=(()=>{let t=class t{constructor(e,o,i,u){this.dialog=e,this.mlabService=o,this.route=i,this.router=u,this.dataSource=new k("-createdAt"),this.appBarConfig={title:l.analyses};let M=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(M&&M.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setRouterLink(p=>`/mlab/analyses/${p.id}`).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt").setVisible(!1),j.menu([_.item(l.report,"report",()=>{}),_.divider(),P.barcode(p=>this.openBarcodeWriterComponent(p))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open($,{data:{format:Y.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(B),n(d),n(v),n(L));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],[3,"update","dataSource"]];},template:function(o,i){o&1&&(y(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),g("changed",function(){return i.get();}),m(2,"button",3)(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),g("update",function(){return i.get();}),S()),o&2&&(s("config",i.appBarConfig),f(),s("dataSource",i.dataSource),f(4),s("dataSource",i.dataSource));},dependencies:[O,V,x,c,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let a=t;return a;})();var Mt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=C({providers:[d],imports:[E.forChild([{path:"",component:G},{path:"create",loadComponent:()=>import("./chunk-X2WOI7L4.js").then(e=>e.CreateComponent)}]),I,W,F,c,D,T,N]});let a=t;return a;})();export{G as AnalysesComponent,Mt as AnalysesModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/