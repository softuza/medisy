import{c as w,f as H}from"./chunk-PZRKKDZQ.js";import"./chunk-GYUI2SSN.js";import"./chunk-CHPZASVR.js";import{b as S}from"./chunk-D7QF6LJS.js";import{a as u}from"./chunk-OS3HZXTL.js";import"./chunk-7FA4ZYOE.js";import"./chunk-HGFYK4WW.js";import{a as r,d as B,f as F,k as G,l as V}from"./chunk-5WUYIUAF.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import"./chunk-3RTSFAIT.js";import"./chunk-WEEU345C.js";import"./chunk-BEDKXBFC.js";import"./chunk-D5SZFKK7.js";import{b as f}from"./chunk-WZL7BTCT.js";import"./chunk-J5QZPDV7.js";import{d as O,g as R}from"./chunk-UN7ZV7OU.js";import"./chunk-KWAPZKCM.js";import{c as $}from"./chunk-U3WUCTLP.js";import"./chunk-IRYEWOMO.js";import"./chunk-RH3HJREX.js";import{c as g,d as j}from"./chunk-O6G4W4SF.js";import"./chunk-3MHW6B4E.js";import"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{c as I,e as T}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as L,b as k,c as A}from"./chunk-AHPLM44D.js";import{ha as N,ia as D}from"./chunk-Y7MZZUBM.js";import{n as z}from"./chunk-AD74A3E4.js";import{Hb as a,Ib as d,Jb as M,O as _,Tb as E,Vb as l,gc as v,ha as C,ib as h,jb as p,jc as y,qa as P,ra as b,xb as c}from"./chunk-MNGWH3SB.js";var U=(()=>{let t=class t{constructor(e,i,o,s){this.dialog=e,this.mpplService=i,this.personNamePipe=o,this.router=s,this.title=g.patients,this.dataSource=new B("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1),r.hyperlink("names",m=>this.router.navigate([`/mppl/persons/${m.id}`])).setValueGetter(m=>o.transform(m)).setName(g.name),r.string("sex").setValueGetter(m=>j(m.sex)),r.date("birthDate"),r.date("createdAt",!1),r.date("updatedAt",!1)),this.get();}openPersonCreateComponent(){this.dialog.open(w).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openPersonScanComponent(){this.dialog.open(H).afterClosed().pipe(_(1)).subscribe(e=>{e&&this.get();});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe($(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(i){return new(i||t)(p(O),p(u),p(S),p(I));},t.ɵcmp=P({type:t,selectors:[["sz-medisy-people-persons"]],features:[y([z,S])],decls:9,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return o.get();}),a(2,"button",2),l("click",function(){return o.openPersonCreateComponent();}),a(3,"span"),E(4,3),d()(),a(5,"button",4),l("click",function(){return o.openPersonScanComponent();}),a(6,"mat-icon"),v(7,"barcode"),d()()(),a(8,"sz-ui-table",5),l("update",function(){return o.get();}),d()),i&2&&(c("title",o.title),h(),c("dataSource",o.dataSource),h(7),c("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,k,G,F,f,N],encapsulation:2});let n=t;return n;})();var X=[{path:"",component:U}];var ve=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=b({type:t}),t.ɵinj=C({providers:[u],imports:[T.forChild(X),R,A,V,f,D]});let n=t;return n;})();export{ve as PersonsModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/