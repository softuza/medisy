import{b as Z}from"./chunk-KIM2WQ54.js";import"./chunk-KZ44QNQJ.js";import"./chunk-MVJFA7NE.js";import{b as g}from"./chunk-FAMU6DML.js";import{a as u}from"./chunk-425ZNPP3.js";import"./chunk-XNMNJW6N.js";import"./chunk-4TSHU2Y7.js";import"./chunk-AJJWUTSX.js";import{c as _,d as P,e as Q,f as h,g as W,h as H,i as U}from"./chunk-FNLGKXQ7.js";import"./chunk-FC7HUCFZ.js";import{a as r,b as X,d as Y,f as x,k as J,l as K}from"./chunk-IAIYNEK7.js";import"./chunk-AFL3ADGU.js";import"./chunk-FTNCHYDX.js";import"./chunk-FRAACVVT.js";import"./chunk-M5IWQFTX.js";import"./chunk-F6PRXBBH.js";import"./chunk-KPY5JXJZ.js";import{b as S}from"./chunk-P2BAIFAG.js";import{g as b,i as w}from"./chunk-7FZ65DGP.js";import{d as k,g as L}from"./chunk-JWIKHMGN.js";import"./chunk-OBODAAUS.js";import{c as G}from"./chunk-SL4AB2BC.js";import{b as q}from"./chunk-S3NKNUKX.js";import"./chunk-UQBQJAT3.js";import{c as p,d as V}from"./chunk-5SU3SZXE.js";import"./chunk-QZ5JJMGJ.js";import"./chunk-AHBZKNY4.js";import"./chunk-JILNJK24.js";import{c as R,e as D}from"./chunk-ODPX7HSF.js";import"./chunk-RDTRWXEL.js";import{a as A,b as F,c as j}from"./chunk-UWX5FL2R.js";import{ha as O,ia as $}from"./chunk-BEBH5NKF.js";import{n as B}from"./chunk-DZUTJTGH.js";import{Ib as m,Jb as f,Kb as I,O as M,Ub as z,Wb as d,ha as v,hc as T,jb as C,kb as l,kc as N,qa as y,ra as E,yb as c}from"./chunk-E6PHWG6X.js";var ee=(()=>{let i=class i{constructor(e,o,t,a){this.dialog=e,this.mpplService=o,this.personNamePipe=t,this.router=a,this.title=p.patients,this.dataSource=new Y("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1).setName(p.title),r.hyperlink("names",n=>this.router.navigate([`/mppl/persons/${n.id}`])).setValueGetter(n=>t.transform(n)).setName(p.name).setStacked(r.string("sex").setValueGetter(n=>V(n.sex))),r.date("birthDate"),r.string("ssn").setName(p.ssn).setResponsive(!0),r.date("createdAt",!1),r.date("updatedAt",!1),X.menu([b.divider(),b.item(p.qr,w.qr,n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(Z).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(H,{data:{types:[_.PDF_417,_.QR_Code]}}).afterClosed().subscribe(e=>{if(!e)return;let o=W.parse(e);if(o===h.PersonInfo){let t=Q.parse(e);if(!t)return;let a=this.dataSource.filtration?.filters.find(n=>n.field==="ssn");a?a.value=t.ssn:this.dataSource.filtration?.filters.push({field:"ssn",op:q.Equal,value:t.ssn}),this.get();}else if(o===h.PersonId){let t=P.parse(e);t&&this.router.navigate([`/mppl/persons/${t}`]);}else if(o===h.AnalysisId){let t=P.parse(e);t&&this.router.navigate([`/mlab/analyses/${t}`]);}});}openBarcodeWriterComponent(e){this.dialog.open(U,{data:{type:_.QR_Code,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(G(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(l(k),l(u),l(g),l(R));},i.ɵcmp=y({type:i,selectors:[["sz-medisy-people-persons"]],features:[N([B,g])],decls:9,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(I(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return t.get();}),m(2,"button",2),d("click",function(){return t.openPersonCreateComponent();}),m(3,"span"),z(4,3),f()(),m(5,"button",4),d("click",function(){return t.openBarcodeScanner();}),m(6,"mat-icon"),T(7,"qr_code_scanner"),f()()(),m(8,"sz-ui-table",5),d("update",function(){return t.get();}),f()),o&2&&(c("title",t.title),C(),c("dataSource",t.dataSource),C(7),c("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[A,F,J,x,S,O],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=E({type:i}),i.ɵinj=v({providers:[u],imports:[D.forChild([{path:"",component:ee}]),L,j,K,S,$]});let s=i;return s;})();export{ke as PersonsModule};/**i18n:a974d0df197b1d44d5cb2cfc4faa9f46b5a2b49ffb6054814bf84ed24fe1a49d*/