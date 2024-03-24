import{b as Z}from"./chunk-655CPH3K.js";import"./chunk-PJZX3E34.js";import"./chunk-CNH2IQRD.js";import{b as g}from"./chunk-JOJOZKMN.js";import{a as u}from"./chunk-FCFXPR6J.js";import"./chunk-44ZC6V5G.js";import"./chunk-YPB5TJMZ.js";import{a as r,b as X,d as Y,f as x,i as J,j as K}from"./chunk-362FJTOO.js";import"./chunk-RB7ZHE25.js";import{c as _,d as P,e as w,f as h,g as Q,h as H,i as U}from"./chunk-IIXP6FAD.js";import"./chunk-MC2NXLF5.js";import"./chunk-I5JBIPTI.js";import"./chunk-ONG373D2.js";import"./chunk-FK7BBUER.js";import"./chunk-3BO226ZW.js";import"./chunk-YYI2KTIZ.js";import{b as S}from"./chunk-PZWNX6JI.js";import{d as b,f as W}from"./chunk-DXWTBEBU.js";import{d as k,g as F}from"./chunk-V6NPZDED.js";import"./chunk-MQDDTCT2.js";import"./chunk-IPLFXNQT.js";import{c as G}from"./chunk-36TFTIAF.js";import{b as q}from"./chunk-4PE74OIY.js";import"./chunk-OMIE2JIX.js";import{c as p,d as V}from"./chunk-3NHRBGBW.js";import"./chunk-HQGFEANS.js";import"./chunk-2LDQ63YO.js";import"./chunk-SYS6B5MR.js";import{c as R,e as D}from"./chunk-HJM6P3WE.js";import"./chunk-MCG7N37W.js";import{a as L,b as A,c as j}from"./chunk-GUH7RBLV.js";import{ga as O,ha as $}from"./chunk-5CUDWWNT.js";import{n as B}from"./chunk-ZKSJOPYG.js";import{$a as l,$b as N,Db as m,Eb as f,Fb as y,J as M,Pb as z,Qb as d,_a as C,fa as v,fc as T,ga as E,ra as I,tb as c}from"./chunk-5IOLWCLX.js";import"./chunk-NWZBVKCY.js";var ee=(()=>{let i=class i{constructor(e,o,t,a){this.dialog=e,this.mpplService=o,this.personNamePipe=t,this.router=a,this.title=p.patients,this.dataSource=new Y("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1).setName(p.title),r.hyperlink("names",n=>this.router.navigate([`/mppl/persons/${n.id}`])).setValueGetter(n=>t.transform(n)).setName(p.name).setStacked(r.string("sex").setValueGetter(n=>V(n.sex))),r.date("birthDate"),r.string("ssn").setName(p.ssn).setResponsive(!0),r.date("createdAt",!1),r.date("updatedAt",!1),X.menu([b.divider(),b.item(p.qr,W.qr,n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(Z).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(H,{data:{formats:[_.PDF_417,_.QR_Code]}}).afterClosed().subscribe(e=>{if(!e)return;let o=Q.parse(e);if(o===h.PersonInfo){let t=w.parse(e);if(!t)return;let a=this.dataSource.filtration?.filters.find(n=>n.field==="ssn");a?a.value=t.ssn:this.dataSource.filtration?.filters.push({field:"ssn",op:q.Equal,value:t.ssn}),this.get();}else if(o===h.PersonId){let t=P.parse(e);t&&this.router.navigate([`/mppl/persons/${t}`]);}else if(o===h.AnalysisId){let t=P.parse(e);t&&this.router.navigate([`/mlab/analyses/${t}`]);}});}openBarcodeWriterComponent(e){this.dialog.open(U,{data:{format:_.QR_Code,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(G(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(l(k),l(u),l(g),l(R));},i.ɵcmp=v({type:i,selectors:[["sz-medisy-people-persons"]],features:[T([B,g])],decls:9,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(y(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return t.get();}),m(2,"button",2),d("click",function(){return t.openPersonCreateComponent();}),m(3,"span"),z(4,3),f()(),m(5,"button",4),d("click",function(){return t.openBarcodeScanner();}),m(6,"mat-icon"),N(7,"qr_code_scanner"),f()()(),m(8,"sz-ui-table",5),d("update",function(){return t.get();}),f()),o&2&&(c("title",t.title),C(),c("dataSource",t.dataSource),C(7),c("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[L,A,J,x,S,O],encapsulation:2});let s=i;return s;})();var ke=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=E({type:i}),i.ɵinj=I({providers:[u],imports:[D.forChild([{path:"",component:ee}]),F,j,K,S,$]});let s=i;return s;})();export{ke as PersonsModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/