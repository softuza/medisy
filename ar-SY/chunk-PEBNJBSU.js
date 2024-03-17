import{b as Z}from"./chunk-KIM2WQ54.js";import"./chunk-KZ44QNQJ.js";import"./chunk-MVJFA7NE.js";import{b as h}from"./chunk-FAMU6DML.js";import{a as u}from"./chunk-425ZNPP3.js";import"./chunk-XNMNJW6N.js";import"./chunk-4TSHU2Y7.js";import"./chunk-AJJWUTSX.js";import{c as w,d as b,e as W,f as _,g as H,h as Q,i as U}from"./chunk-VGL3DSAJ.js";import"./chunk-FC7HUCFZ.js";import{a as r,b as X,d as Y,f as x,k as J,l as K}from"./chunk-IAIYNEK7.js";import"./chunk-AFL3ADGU.js";import"./chunk-FTNCHYDX.js";import"./chunk-FRAACVVT.js";import"./chunk-M5IWQFTX.js";import"./chunk-F6PRXBBH.js";import"./chunk-KPY5JXJZ.js";import{b as S}from"./chunk-P2BAIFAG.js";import{g as C,i as V}from"./chunk-7FZ65DGP.js";import{d as $,g as k}from"./chunk-JWIKHMGN.js";import"./chunk-OBODAAUS.js";import{c as q}from"./chunk-SL4AB2BC.js";import{b as j}from"./chunk-S3NKNUKX.js";import"./chunk-UQBQJAT3.js";import{c as p,d as G}from"./chunk-5SU3SZXE.js";import"./chunk-QZ5JJMGJ.js";import"./chunk-AHBZKNY4.js";import"./chunk-JILNJK24.js";import{c as B,e as R}from"./chunk-ODPX7HSF.js";import"./chunk-RDTRWXEL.js";import{a as L,b as A,c as F}from"./chunk-UWX5FL2R.js";import{ha as D,ia as O}from"./chunk-BEBH5NKF.js";import{n as N}from"./chunk-DZUTJTGH.js";import{Ib as m,Jb as f,Kb as E,O as M,Ub as I,Wb as d,ha as P,hc as z,jb as g,kb as l,kc as T,qa as v,ra as y,yb as c}from"./chunk-E6PHWG6X.js";var ee=(()=>{let i=class i{constructor(e,o,t,a){this.dialog=e,this.mpplService=o,this.personNamePipe=t,this.router=a,this.title=p.patients,this.dataSource=new Y("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1).setName(p.title),r.hyperlink("names",n=>this.router.navigate([`/mppl/persons/${n.id}`])).setValueGetter(n=>t.transform(n)).setName(p.name).setStacked(r.string("sex").setValueGetter(n=>G(n.sex))),r.date("birthDate"),r.string("ssn").setName(p.ssn).setResponsive(!0),r.date("createdAt",!1),r.date("updatedAt",!1),X.menu([C.divider(),C.item(p.qr,V.qr,n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(Z).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(Q).afterClosed().subscribe(e=>{if(console.log(e),!e)return;let o=H.parse(e);if(o===_.PersonInfo){let t=W.parse(e);if(!t)return;let a=this.dataSource.filtration?.filters.find(n=>n.field==="ssn");a?a.value=t.ssn:this.dataSource.filtration?.filters.push({field:"ssn",op:j.Equal,value:t.ssn}),this.get();}else if(o===_.PersonId){let t=b.parse(e);t&&this.router.navigate([`/mppl/persons/${t}`]);}else if(o===_.AnalysisId){let t=b.parse(e);t&&this.router.navigate([`/mlab/analyses/${t}`]);}});}openBarcodeWriterComponent(e){this.dialog.open(U,{data:{type:w.QR_Code,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(l($),l(u),l(h),l(B));},i.ɵcmp=v({type:i,selectors:[["sz-medisy-people-persons"]],features:[T([N,h])],decls:9,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(E(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return t.get();}),m(2,"button",2),d("click",function(){return t.openPersonCreateComponent();}),m(3,"span"),I(4,3),f()(),m(5,"button",4),d("click",function(){return t.openBarcodeScanner();}),m(6,"mat-icon"),z(7,"qr_code_scanner"),f()()(),m(8,"sz-ui-table",5),d("update",function(){return t.get();}),f()),o&2&&(c("title",t.title),g(),c("dataSource",t.dataSource),g(7),c("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[L,A,J,x,S,D],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=y({type:i}),i.ɵinj=P({providers:[u],imports:[R.forChild([{path:"",component:ee}]),k,F,K,S,O]});let s=i;return s;})();export{ke as PersonsModule};/**i18n:a974d0df197b1d44d5cb2cfc4faa9f46b5a2b49ffb6054814bf84ed24fe1a49d*/