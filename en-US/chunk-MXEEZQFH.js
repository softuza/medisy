import{a as Y,c as j,e as k,q as $,r as B,s as a}from"./chunk-GNWSBAHC.js";import"./chunk-AA5DRBQG.js";import{a as S}from"./chunk-QJXFEZ4J.js";import{a as l}from"./chunk-PXYGRR6P.js";import{c as D,m as F}from"./chunk-BAY5DDQL.js";import"./chunk-XLG3M45D.js";import{b as d}from"./chunk-4BGRG2OT.js";import{d as N,g as _}from"./chunk-TZU4LDEP.js";import{d as z,g as I}from"./chunk-SYVLG3JQ.js";import"./chunk-OUOPAYXZ.js";import{J as v,L as P,M as O,N as T}from"./chunk-GTO5YSP3.js";import"./chunk-M74OYCSZ.js";import{Ea as E,Ga as L,Ja as R}from"./chunk-FE4YDWUQ.js";import{Eb as s,Fb as p,Gb as y,M,Qb as A,Sb as f,ea as g,fb as u,gb as n,gc as b,na as h,oa as C,ub as m}from"./chunk-FCYIFV3F.js";var w=(()=>{let t=class t{constructor(e,i,r,c){this.dialog=e,this.mlabService=i,this.route=r,this.router=c,this.title=S.analyses,this.dataSource=new j("-createdAt"),this.dataSource.fields.push(a.uuid("id"),a.uuid("personId"),a.uuid("laboratoryId"),a.number("code").setClickFn(G=>this.router.navigate([`/mlab/analyses/${G.id}`])).setStyleSmall().setContentClassBold(),a.date("createdAt"),a.date("updatedAt",!1),Y.menu([_.divider(),_.default(S.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.buildRequest()).pipe(D(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(i){return new(i||t)(n(z),n(l),n(v),n(P));},t.ɵcmp=h({type:t,selectors:[["medisy-laboratory-analyses"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(y(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),s(2,"button",2)(3,"span"),A(4,3),p()()(),s(5,"sz-ui-table",4),f("update",function(){return r.get();}),p()),i&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[O,$,k,d,E],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let o=t;return o;})();var x=[{path:"",component:w},{path:"create",loadComponent:()=>import("./chunk-NPOAU6HT.js").then(o=>o.CreateComponent)}];var yt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[T.forChild(x),I,B,F,d,N,R,L]});let o=t;return o;})();export{yt as AnalysesModule};/**i18n:d1a7a79e40094f34760a06b0e93530073ce604a889b1368eeeee77f855868761*/