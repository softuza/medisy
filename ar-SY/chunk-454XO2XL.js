import{a,b as Y,d as k,f as B,k as j,l as $}from"./chunk-LZNXIXOZ.js";import"./chunk-NE2FJIGN.js";import"./chunk-MU4JMO74.js";import{a as d}from"./chunk-7MXOA32O.js";import{k as F}from"./chunk-5USYUPE4.js";import"./chunk-SIXL6LH7.js";import"./chunk-HQBETVMD.js";import{b as c}from"./chunk-T7V5XOV4.js";import{d as P,g as _}from"./chunk-2D7ESCRH.js";import{d as T,g as I}from"./chunk-LR6GUTIR.js";import"./chunk-TH3BU27R.js";import{c as D}from"./chunk-ELM3QGWO.js";import"./chunk-NLKNVIYO.js";import"./chunk-ALHR4HEP.js";import{c as l}from"./chunk-6SBR2WBP.js";import"./chunk-E4SPABR5.js";import"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{a as v,c as z,d as E,e as L}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as R,c as N}from"./chunk-42MYF47R.js";import{ia as O}from"./chunk-5MDONEI4.js";import"./chunk-6TGWOZSV.js";import{Hb as s,Ib as f,Jb as b,O as M,Tb as y,Vb as S,ha as g,ib as p,jb as n,jc as A,qa as h,ra as C,xb as m}from"./chunk-OHUDUA2T.js";var w=(()=>{let t=class t{constructor(e,o,i,u){this.dialog=e,this.mlabService=o,this.route=i,this.router=u,this.title=l.analyses,this.dataSource=new k("-createdAt"),this.dataSource.columnDefs.push(a.uuid("id"),a.uuid("laboratoryId"),a.number("code").setClickFn(x=>this.router.navigate([`/mlab/analyses/${x.id}`])).setValueClassFontBold().setStacked(a.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),a.date("createdAt"),a.date("updatedAt",!1),Y.menu([_.divider(),_.item(l.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(T),n(d),n(v),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[A([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(b(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),S("changed",function(){return i.get();}),s(2,"button",2)(3,"span"),y(4,3),f()()(),s(5,"sz-ui-table",4),S("update",function(){return i.get();}),f()),o&2&&(m("title",i.title),p(),m("dataSource",i.dataSource),p(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,j,B,c,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=t;return r;})();var St=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[d],imports:[L.forChild([{path:"",component:w},{path:"create",loadComponent:()=>import("./chunk-YEO4IEKZ.js").then(e=>e.CreateComponent)}]),I,$,F,c,P,O,N]});let r=t;return r;})();export{w as AnalysesComponent,St as AnalysesModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/