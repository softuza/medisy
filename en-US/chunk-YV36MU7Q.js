import{c as H,f as U}from"./chunk-TFY2D5UP.js";import"./chunk-GYUI2SSN.js";import"./chunk-CHPZASVR.js";import{b as S}from"./chunk-D7QF6LJS.js";import{a as u}from"./chunk-NE7X3SPH.js";import"./chunk-7FA4ZYOE.js";import"./chunk-HGFYK4WW.js";import{a as r,d as j,f as B,k as w,l as G}from"./chunk-X4VEXP2I.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import"./chunk-4A4DWX3B.js";import"./chunk-ZZAXMQCW.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as f}from"./chunk-WZL7BTCT.js";import"./chunk-J5QZPDV7.js";import{d as D,g as R}from"./chunk-UN7ZV7OU.js";import"./chunk-YSCQPVVT.js";import{c as F}from"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{c as h,d as $}from"./chunk-O6G4W4SF.js";import"./chunk-3MHW6B4E.js";import"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{c as I,e as T}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as L,b as k,c as A}from"./chunk-AHPLM44D.js";import{ha as N,ia as O}from"./chunk-Y7MZZUBM.js";import{n as z}from"./chunk-AD74A3E4.js";import{Hb as a,Ib as c,Jb as M,O as _,Tb as E,Vb as d,gc as v,ha as g,ib as C,jb as p,jc as y,qa as P,ra as b,xb as l}from"./chunk-MNGWH3SB.js";var V=(()=>{let t=class t{constructor(e,i,o,s){this.dialog=e,this.mpplService=i,this.personNamePipe=o,this.router=s,this.title=h.patients,this.dataSource=new j("-createdAt"),this.dataSource.addColumn(r.uuid("id")),this.dataSource.addColumn(r.string("title.abbreviation").setVisibility(!1)),this.dataSource.addColumn(r.string("title.name").setVisibility(!1)),this.dataSource.addColumn(r.hyperlink("names",m=>this.router.navigate([`/mppl/persons/${m.id}`])).setContentFormat(m=>o.transform(m)).setName(h.name)),this.dataSource.addColumn(r.string("sex").setContentFormat(m=>$(m.sex))),this.dataSource.addColumn(r.date("birthDate")),this.dataSource.addColumn(r.date("createdAt",!1)),this.dataSource.addColumn(r.date("updatedAt",!1)),this.get();}openPersonCreateComponent(){this.dialog.open(H).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openPersonScanComponent(){this.dialog.open(U).afterClosed().pipe(_(1)).subscribe(e=>{e&&this.get();});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(F(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(i){return new(i||t)(p(D),p(u),p(S),p(I));},t.ɵcmp=P({type:t,selectors:[["sz-medisy-people-persons"]],features:[y([z,S])],decls:9,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),d("changed",function(){return o.get();}),a(2,"button",2),d("click",function(){return o.openPersonCreateComponent();}),a(3,"span"),E(4,3),c()(),a(5,"button",4),d("click",function(){return o.openPersonScanComponent();}),a(6,"mat-icon"),v(7,"barcode"),c()()(),a(8,"sz-ui-table",5),d("update",function(){return o.get();}),c()),i&2&&(l("title",o.title),C(),l("dataSource",o.dataSource),C(7),l("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,k,w,B,f,N],encapsulation:2});let n=t;return n;})();var X=[{path:"",component:V}];var ve=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=b({type:t}),t.ɵinj=g({providers:[u],imports:[T.forChild(X),R,A,G,f,O]});let n=t;return n;})();export{ve as PersonsModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/