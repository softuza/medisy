import{a as r,b as k,d as B,f as j,k as $,l as w}from"./chunk-HMMMSDDX.js";import"./chunk-NE2FJIGN.js";import"./chunk-PBJGFLAZ.js";import{a as d}from"./chunk-FEIGBXGY.js";import{k as Y}from"./chunk-ZHOHM3UU.js";import"./chunk-6AQETCEY.js";import"./chunk-PR3Q27H6.js";import{b as u}from"./chunk-OSERNDEW.js";import{d as F,g}from"./chunk-ZOSUD6WZ.js";import{d as T,g as N}from"./chunk-LR6GUTIR.js";import"./chunk-DE36WCIK.js";import{c as P}from"./chunk-4DTXIELG.js";import"./chunk-T5CCQ3IG.js";import"./chunk-ALHR4HEP.js";import{c as l}from"./chunk-TG74CNA3.js";import"./chunk-E4SPABR5.js";import"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{a as z,c as E,d as L,e as I}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as R,c as D}from"./chunk-42MYF47R.js";import{ia as O}from"./chunk-5MDONEI4.js";import"./chunk-6TGWOZSV.js";import{Hb as m,Ib as S,Jb as y,O as M,Tb as v,Vb as _,ha as h,ib as f,jb as n,jc as A,qa as C,ra as b,xb as s}from"./chunk-OHUDUA2T.js";var x=(()=>{let t=class t{constructor(e,o,a,c){this.dialog=e,this.mlabService=o,this.route=a,this.router=c,this.title=l.analyses,this.dataSource=new B("-createdAt");let p=this.router.getCurrentNavigation()?.extras.state;p&&p.filter&&this.dataSource.filtration?.filters.push(p.filter),this.dataSource.columnDefs.push(r.uuid("id"),r.uuid("laboratoryId"),r.uuid("personId"),r.number("code").setClickFn(G=>this.router.navigate([`/mlab/analyses/${G.id}`])).setValueClassFontBold().setStacked(r.string("laboratory.name").setName(l.laboratory).setValueClassFontSmall()),r.date("createdAt"),r.date("updatedAt",!1),k.menu([g.divider(),g.item(l.report,"report",()=>{})])),this.get();}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(P(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(T),n(d),n(z),n(E));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[A([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,a){o&1&&(y(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),_("changed",function(){return a.get();}),m(2,"button",2)(3,"span"),v(4,3),S()()(),m(5,"sz-ui-table",4),_("update",function(){return a.get();}),S()),o&2&&(s("title",a.title),f(),s("dataSource",a.dataSource),f(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,$,j,u,R],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var _t=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[d],imports:[I.forChild([{path:"",component:x},{path:"create",loadComponent:()=>import("./chunk-JFV6WDGX.js").then(e=>e.CreateComponent)}]),N,w,Y,u,F,O,D]});let i=t;return i;})();export{x as AnalysesComponent,_t as AnalysesModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/