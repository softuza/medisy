import{b as K}from"./chunk-KR37RJ2H.js";import"./chunk-5KMCGFSK.js";import"./chunk-XMGOBE6T.js";import{b as g}from"./chunk-KSGWVIAJ.js";import{a as u}from"./chunk-3UTLHJGL.js";import"./chunk-H445WRSX.js";import"./chunk-KBCE4TCO.js";import"./chunk-QNM6XM36.js";import{c as _,d as P,e as W,f as h,g as w,h as Q,i as H}from"./chunk-PBR6H4LF.js";import"./chunk-TXRHKTMR.js";import{a as r,b as U,d as X,f as Y,i as x,j as J}from"./chunk-TI3KPOR7.js";import"./chunk-6476LBLO.js";import"./chunk-PT75MKNF.js";import"./chunk-Q2N4ZM5T.js";import"./chunk-OPST3HSR.js";import"./chunk-6HOMNJG3.js";import"./chunk-QUJGTYPR.js";import{b as S}from"./chunk-EPNV7HRZ.js";import{g as b,i as V}from"./chunk-JHC5R5G3.js";import{d as $,g as F}from"./chunk-5MAY3I4F.js";import"./chunk-RZLFWLWK.js";import{c as q}from"./chunk-4GL34ATX.js";import{b as j}from"./chunk-VQDUMFVZ.js";import"./chunk-D5DPYT77.js";import{c as p,d as G}from"./chunk-OPRLBPJZ.js";import"./chunk-C77Q6E22.js";import"./chunk-ZBCFQZ6O.js";import"./chunk-GMGFC4G7.js";import{c as T,e as B}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as L,b as k,c as A}from"./chunk-FBMLFETS.js";import{ga as R,ha as O}from"./chunk-VGXLPPL2.js";import{n as N}from"./chunk-K7SXQZKF.js";import{Bb as c,Lb as m,Mb as f,Nb as I,Xb as y,Yb as d,gb as C,hb as l,hc as z,na as M,nc as D,oa as v,za as E}from"./chunk-75X3YXCS.js";var Z=(()=>{let i=class i{constructor(e,o,t,a){this.dialog=e,this.mpplService=o,this.personNamePipe=t,this.router=a,this.title=p.patients,this.dataSource=new X("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1).setName(p.title),r.hyperlink("names",n=>this.router.navigate([`/mppl/persons/${n.id}`])).setValueGetter(n=>t.transform(n)).setName(p.name).setStacked(r.string("sex").setValueGetter(n=>G(n.sex))),r.date("birthDate"),r.string("ssn").setName(p.ssn).setResponsive(!0),r.date("createdAt",!1),r.date("updatedAt",!1),U.menu([b.divider(),b.item(p.qr,V.qr,n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(K).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(Q,{data:{formats:[_.PDF_417,_.QR_CODE]}}).afterClosed().subscribe(e=>{if(!e)return;let o=w.parse(e);if(o===h.PersonInfo){let t=W.parse(e);if(!t)return;let a=this.dataSource.filtration?.filters.find(n=>n.field==="ssn");a?a.value=t.ssn:this.dataSource.filtration?.filters.push({field:"ssn",op:j.Equal,value:t.ssn}),this.get();}else if(o===h.PersonId){let t=P.parse(e);t&&this.router.navigate([`/mppl/persons/${t}`]);}else if(o===h.AnalysisId){let t=P.parse(e);t&&this.router.navigate([`/mlab/analyses/${t}`]);}});}openBarcodeWriterComponent(e){this.dialog.open(H,{data:{format:_.QR_CODE,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(l($),l(u),l(g),l(T));},i.ɵcmp=M({type:i,selectors:[["sz-medisy-people-persons"]],features:[D([N,g])],decls:9,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(I(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return t.get();}),m(2,"button",2),d("click",function(){return t.openPersonCreateComponent();}),m(3,"span"),y(4,3),f()(),m(5,"button",4),d("click",function(){return t.openBarcodeScanner();}),m(6,"mat-icon"),z(7,"qr_code_scanner"),f()()(),m(8,"sz-ui-table",5),d("update",function(){return t.get();}),f()),o&2&&(c("title",t.title),C(),c("dataSource",t.dataSource),C(7),c("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[L,k,x,Y,S,R],encapsulation:2});let s=i;return s;})();var Oe=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=v({type:i}),i.ɵinj=E({providers:[u],imports:[B.forChild([{path:"",component:Z}]),F,A,J,S,O]});let s=i;return s;})();export{Oe as PersonsModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/