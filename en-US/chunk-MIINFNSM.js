import{a,b as B,d as F,f as j,k,l as $}from"./chunk-VY7BJG6I.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import{a as d}from"./chunk-3RTSFAIT.js";import{k as Y}from"./chunk-WEEU345C.js";import"./chunk-BEDKXBFC.js";import"./chunk-D5SZFKK7.js";import{b as c}from"./chunk-WZL7BTCT.js";import{d as P,g as _}from"./chunk-J5QZPDV7.js";import{d as T,g as I}from"./chunk-UN7ZV7OU.js";import"./chunk-KWAPZKCM.js";import{c as D}from"./chunk-U3WUCTLP.js";import"./chunk-IRYEWOMO.js";import"./chunk-RH3HJREX.js";import{c as l}from"./chunk-O6G4W4SF.js";import"./chunk-3MHW6B4E.js";import"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as v,c as z,d as E,e as L}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as R,c as N}from"./chunk-AHPLM44D.js";import{ia as O}from"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Hb as s,Ib as f,Jb as C,O as M,Tb as b,Vb as S,ha as g,ib as p,jb as n,jc as A,qa as h,ra as y,xb as m}from"./chunk-MNGWH3SB.js";var w=(()=>{let t=class t{constructor(e,r,i,u){this.dialog=e,this.mlabService=r,this.route=i,this.router=u,this.title=l.analyses,this.dataSource=new F("-createdAt"),this.dataSource.columnDefs.push(a.uuid("id"),a.uuid("laboratoryId"),a.number("code").setClickFn(G=>this.router.navigate([`/mlab/analyses/${G.id}`])).setStyleSmall().setValueClassFontBold(),a.string("laboratory.name").setName(l.laboratory),a.date("createdAt"),a.date("updatedAt",!1),B.menu([_.divider(),_.item(l.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(r){return new(r||t)(n(T),n(d),n(v),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[A([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(r,i){r&1&&(C(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),S("changed",function(){return i.get();}),s(2,"button",2)(3,"span"),b(4,3),f()()(),s(5,"sz-ui-table",4),S("update",function(){return i.get();}),f()),r&2&&(m("title",i.title),p(),m("dataSource",i.dataSource),p(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,k,j,c,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let o=t;return o;})();var x=[{path:"",component:w},{path:"create",loadComponent:()=>import("./chunk-3VP6ZRBO.js").then(o=>o.CreateComponent)}];var yt=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=y({type:t}),t.ɵinj=g({providers:[d],imports:[L.forChild(x),I,$,Y,c,P,O,N]});let o=t;return o;})();export{w as AnalysesComponent,yt as AnalysesModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/