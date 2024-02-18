import{a as H,b as U}from"./chunk-ABANFOUP.js";import"./chunk-E35O5ERZ.js";import{a as S}from"./chunk-OTVB24EL.js";import{a as u}from"./chunk-VHZOFILV.js";import"./chunk-4XNXOG3R.js";import{c as j,e as w,j as B,k as G,l as r}from"./chunk-ILBDTD6D.js";import"./chunk-ZTHN4A32.js";import"./chunk-V25QNL5J.js";import"./chunk-X7MHABBF.js";import"./chunk-VBW76653.js";import"./chunk-GLR3572R.js";import{b as f}from"./chunk-6I36F62R.js";import"./chunk-2F3BHEDP.js";import{d as k,g as $}from"./chunk-UDDJQSJH.js";import"./chunk-PLHMF4AU.js";import{Ba as h,Ca as L,L as z,N,ya as F}from"./chunk-76TLQ37S.js";import"./chunk-TB2PBBV5.js";import{Ea as I,Fa as O,Ga as R,Ia as A,Ja as D,n as T}from"./chunk-4F3G4NSL.js";import{Fb as a,Gb as d,Hb as M,M as _,Rb as E,Tb as l,ec as v,fa as C,gb as P,hb as p,hc as y,oa as b,pa as g,vb as c}from"./chunk-WEGHM63Q.js";var V=(()=>{let t=class t{constructor(e,i,o,s){this.dialog=e,this.mpplService=i,this.personNamePipe=o,this.router=s,this.title=h.patients,this.dataSource=new j("-createdAt"),this.dataSource.fields.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1),r.hyperlink("names",m=>this.router.navigate([`/mppl/persons/${m.id}`])).setContentFormat(m=>o.transform(m)).setName(h.name).setFieldFilterable(!1),r.string("sex").setContentFormat(m=>L(m.sex)),r.date("birthDate"),r.date("createdAt",!1),r.date("updatedAt",!1)),this.get();}openPersonCreateComponent(){this.dialog.open(H).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openPersonScanComponent(){this.dialog.open(U).afterClosed().pipe(_(1)).subscribe(e=>{e&&this.get();});}get(){this.mpplService.persons.get(this.dataSource.buildRequest()).pipe(F(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(i){return new(i||t)(p(k),p(u),p(S),p(z));},t.ɵcmp=b({type:t,selectors:[["medisy-people-persons"]],features:[y([T,S])],decls:9,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return o.get();}),a(2,"button",2),l("click",function(){return o.openPersonCreateComponent();}),a(3,"span"),E(4,3),d()(),a(5,"button",4),l("click",function(){return o.openPersonScanComponent();}),a(6,"mat-icon"),v(7,"barcode"),d()()(),a(8,"sz-ui-table",5),l("update",function(){return o.get();}),d()),i&2&&(c("title",o.title),P(),c("dataSource",o.dataSource),P(7),c("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[I,O,B,w,f,A],encapsulation:2});let n=t;return n;})();var X=[{path:"",component:V}];var Te=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=g({type:t}),t.ɵinj=C({providers:[u],imports:[N.forChild(X),$,R,G,f,D]});let n=t;return n;})();export{Te as PersonsModule};/**i18n:b6356af15a472d72c43a2a12f81780e7aeabf4debd55cf9990b19b5b7f0f0471*/