import{a,b as F,d as j,f as k,k as Y,l as $}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as l}from"./chunk-YDMDVI6M.js";import{j as B}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as d}from"./chunk-HKZIVJYM.js";import{d as D,g as M}from"./chunk-PNII32UO.js";import{d as T,g as O}from"./chunk-V6ACGGWJ.js";import"./chunk-VBUQVK7Q.js";import{c as R}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as S}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as A,c as z,d as E,e as L}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as N,c as P}from"./chunk-B3RLTRYJ.js";import{ha as I}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as s,Gb as p,Hb as b,M as _,Rb as y,Tb as f,fa as g,gb as c,hb as n,hc as v,oa as h,pa as C,vb as m}from"./chunk-UDYUYOMJ.js";var w=(()=>{let t=class t{constructor(e,r,i,u){this.dialog=e,this.mlabService=r,this.route=i,this.router=u,this.title=S.analyses,this.dataSource=new j("-createdAt"),this.dataSource.columns.push(a.uuid("id"),a.uuid("personId"),a.uuid("laboratoryId"),a.number("code").setClickFn(G=>this.router.navigate([`/mlab/analyses/${G.id}`])).setStyleSmall().setContentClassBold(),a.date("createdAt"),a.date("updatedAt",!1),F.menu([M.divider(),M.default(S.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.buildRequest()).pipe(R(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(r){return new(r||t)(n(T),n(l),n(A),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-mlab-analyses"]],features:[v([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(r,i){r&1&&(b(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),s(2,"button",2)(3,"span"),y(4,3),p()()(),s(5,"sz-ui-table",4),f("update",function(){return i.get();}),p()),r&2&&(m("title",i.title),c(),m("dataSource",i.dataSource),c(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,Y,k,d,N],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let o=t;return o;})();var x=[{path:"",component:w},{path:"create",loadComponent:()=>import("./chunk-VQFA35L2.js").then(o=>o.CreateComponent)}];var Ct=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[L.forChild(x),O,$,B,d,D,I,P]});let o=t;return o;})();export{w as AnalysesComponent,Ct as AnalysesModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/