import{a as u}from"./chunk-7UWRXI65.js";import{a,b as w,d as P,f as U,k as G,l as H}from"./chunk-4RHXMS6V.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-F67EX4OT.js";import{a as p}from"./chunk-4A4DWX3B.js";import{j as k,k as $,l as Y}from"./chunk-QMA7Y45E.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as c}from"./chunk-DVDPPXKO.js";import{j}from"./chunk-7ZCIBZRX.js";import{d as I,g as O}from"./chunk-UN7ZV7OU.js";import{r as N}from"./chunk-M6JNFYJK.js";import{c as B}from"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{c as F}from"./chunk-4U6LIYO2.js";import"./chunk-3MHW6B4E.js";import{s as y,t as R}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as z,c as T,e as L}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as E,c as D}from"./chunk-AHPLM44D.js";import{ia as A}from"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Hb as m,Ib as _,Jb as M,O as b,Tb as v,Vb as l,ha as h,ib as S,jb as n,qa as C,ra as g,xb as d}from"./chunk-MNGWH3SB.js";var X=(()=>{let t=class t{constructor(e,o,r,s){this.dialog=e,this.mlabService=o,this.router=r,this.activatedRoute=s,this.title=F.laboratories,this.dataSource=new P("name"),this.dataSource.columns.push(a.uuid("id"),a.hyperlink("name",f=>this.router.navigate([`${f.id}`],{relativeTo:this.activatedRoute})).setStacked(a.string("description").setContentClassFontSmall()),a.string("address"),a.date("createdAt",!1),a.date("updatedAt",!1),w.menu([j.edit(f=>this.openSaveComponent(f))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(k,{data:Y.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(B(this.dataSource.indicator),b(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(p),n(T),n(z));},t.ɵcmp=C({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(M(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),m(2,"button",2),l("click",function(){return r.openSaveComponent();}),m(3,"span"),v(4,3),_()()(),m(5,"sz-ui-table",4),l("update",function(){return r.get();}),_()),o&2&&(d("title",r.title),S(),d("dataSource",r.dataSource),S(4),d("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[E,G,U,c],encapsulation:2});let i=t;return i;})();var Q=[{path:"",component:X}];var Ie=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=h({providers:[p],imports:[y,R,L.forChild(Q),O,A,D,H,N,c,$,u]});let i=t;return i;})();export{Ie as LaboratoriesModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/