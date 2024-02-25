import{a,b as B,d as j,f as k,k as F,l as $}from"./chunk-IXLMK2UK.js";import"./chunk-ETFQ3B2W.js";import"./chunk-2RZN6UXW.js";import{a as l}from"./chunk-6OX5UKSI.js";import{j as Y}from"./chunk-FXT3AS6A.js";import"./chunk-5NCCBRRS.js";import"./chunk-FMQFZLQI.js";import{b as d}from"./chunk-A2WVAG3X.js";import{d as D,g as _}from"./chunk-NHZHW3G6.js";import{d as O,g as T}from"./chunk-LEHA6VA4.js";import"./chunk-G5AGS2UW.js";import{c as P}from"./chunk-HNFKXZJS.js";import"./chunk-RP3MHAIP.js";import"./chunk-UTECTUGK.js";import{c as S}from"./chunk-3S3P6JML.js";import"./chunk-CJB7PFBQ.js";import"./chunk-JUV6646Q.js";import"./chunk-VUDMPJS3.js";import{a as v,c as z,d as E,e as L}from"./chunk-WGP57T36.js";import"./chunk-M4RGWOV5.js";import{a as R,c as N}from"./chunk-6V4W7LPQ.js";import{ia as I}from"./chunk-N73FV7OW.js";import"./chunk-CV2WHQQT.js";import{Hb as s,Ib as p,Jb as b,O as M,Tb as y,Vb as f,ha as g,ib as c,jb as n,jc as A,qa as h,ra as C,xb as m}from"./chunk-XKRBGLCU.js";var w=(()=>{let t=class t{constructor(e,r,i,u){this.dialog=e,this.mlabService=r,this.route=i,this.router=u,this.title=S.analyses,this.dataSource=new j("-createdAt"),this.dataSource.columns.push(a.uuid("id"),a.uuid("personId"),a.uuid("laboratoryId"),a.number("code").setClickFn(G=>this.router.navigate([`/mlab/analyses/${G.id}`])).setStyleSmall().setContentClassBold(),a.date("createdAt"),a.date("updatedAt",!1),B.menu([_.divider(),_.item(S.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.buildRequest()).pipe(P(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(r){return new(r||t)(n(O),n(l),n(v),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[A([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(r,i){r&1&&(b(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),s(2,"button",2)(3,"span"),y(4,3),p()()(),s(5,"sz-ui-table",4),f("update",function(){return i.get();}),p()),r&2&&(m("title",i.title),c(),m("dataSource",i.dataSource),c(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,F,k,d,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let o=t;return o;})();var x=[{path:"",component:w},{path:"create",loadComponent:()=>import("./chunk-7REKJMMZ.js").then(o=>o.CreateComponent)}];var Ct=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[L.forChild(x),T,$,Y,d,D,I,N]});let o=t;return o;})();export{w as AnalysesComponent,Ct as AnalysesModule};/**i18n:ce9ae1b8b067a31d7d6a4605b83492db03c265ea8c4fa49ce44e4fe9b82d798e*/