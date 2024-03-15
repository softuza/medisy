import{a as $,d as j}from"./chunk-Z42PALHI.js";import{a as r,b as w,d as x,f as W,k as q,l as G}from"./chunk-G2IFBR42.js";import"./chunk-XUW55ZPC.js";import"./chunk-QDFHX7IX.js";import{a as c}from"./chunk-JQJBUEG5.js";import{k}from"./chunk-TQ67CQZ2.js";import"./chunk-JDSQU7UA.js";import"./chunk-FJN7IPRV.js";import{b as u}from"./chunk-CQ6LVFEY.js";import{d as F,g as d,i as Y}from"./chunk-5NMFMVP3.js";import{d as R,g as N}from"./chunk-YWX36TB2.js";import"./chunk-HJYMXJEH.js";import{c as P}from"./chunk-AIREYCF6.js";import"./chunk-TLW5FHGJ.js";import"./chunk-T6BCLI2C.js";import{c as s}from"./chunk-QMJWEZPO.js";import"./chunk-UO2UFEHS.js";import"./chunk-YALI5IZX.js";import"./chunk-34ICKWYC.js";import{a as E,c as I,d as L,e as T}from"./chunk-MUEZWKIH.js";import"./chunk-U2AKNAEH.js";import{a as D,c as B}from"./chunk-YEEVKOOT.js";import{ia as O}from"./chunk-GAHCHFY3.js";import"./chunk-YR55CBIC.js";import{Hb as l,Ib as _,Jb as v,O as h,Tb as A,Vb as M,ha as C,ib as g,jb as n,jc as z,qa as y,ra as b,xb as m}from"./chunk-SOOFBSF3.js";var H=(()=>{let t=class t{constructor(e,o,a,p){this.dialog=e,this.mlabService=o,this.route=a,this.router=p,this.title=s.analyses,this.dataSource=new x("-createdAt");let f=this.router.getCurrentNavigation()?.extras.state;f&&f.filter&&this.dataSource.filtration?.filters.push(f.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setClickFn(S=>this.router.navigate([`/mlab/analyses/${S.id}`])).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(s.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt",!1),w.menu([d.item(s.report,"report",()=>{}),d.divider(),d.item(s.qr,Y.qr,S=>this.openBarcodeWriterComponent(S))])),this.get();}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{type:$.QR_Code,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(P(this.dataSource.indicator),h(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(R),n(c),n(E),n(I));},t.ɵcmp=y({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,a){o&1&&(v(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),M("changed",function(){return a.get();}),l(2,"button",2)(3,"span"),A(4,3),_()()(),l(5,"sz-ui-table",4),M("update",function(){return a.get();}),_()),o&2&&(m("title",a.title),g(),m("dataSource",a.dataSource),g(4),m("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,q,W,u,D],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var bt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=C({providers:[c],imports:[T.forChild([{path:"",component:H},{path:"create",loadComponent:()=>import("./chunk-P36X7GMM.js").then(e=>e.CreateComponent)}]),N,G,k,u,F,O,B]});let i=t;return i;})();export{H as AnalysesComponent,bt as AnalysesModule};/**i18n:3c79f61dd4ae219236c62485f036b897dde9f999c4ae619f8589958cf23779e7*/