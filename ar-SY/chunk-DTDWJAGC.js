import{a as u}from"./chunk-2TBUHASW.js";import"./chunk-54AIDZSY.js";import{a,b as w,d as P,f as U,k as G,l as H}from"./chunk-IVGQ3HZH.js";import"./chunk-HFJZSCN6.js";import"./chunk-XODLCFFB.js";import{a as p}from"./chunk-B67WZSUY.js";import{j as k,k as $,l as Y}from"./chunk-7NUFPHBI.js";import"./chunk-SEOQS6VP.js";import"./chunk-X72KAAKT.js";import{b as c}from"./chunk-YKGVVVX5.js";import{j}from"./chunk-IWHXOZAZ.js";import{d as I,g as O}from"./chunk-B75B3GWF.js";import{t as N}from"./chunk-H2TGRDS5.js";import{c as B}from"./chunk-XRLAKDN6.js";import"./chunk-I4OTRYP6.js";import"./chunk-2LPUO4OM.js";import{c as F}from"./chunk-4QAOLMRA.js";import"./chunk-IPR66Z7G.js";import{s as y,t as R}from"./chunk-JMGGZD4A.js";import"./chunk-2L76HXS6.js";import{a as z,c as T,e as L}from"./chunk-7Q2XJCHR.js";import"./chunk-L2RMIMUP.js";import{a as E,c as D}from"./chunk-6GM3YNBQ.js";import{ia as A}from"./chunk-RCWML6QJ.js";import"./chunk-LHVP4JEO.js";import{Hb as m,Ib as _,Jb as C,O as b,Tb as v,Vb as d,ha as h,ib as S,jb as n,qa as M,ra as g,xb as l}from"./chunk-UMI4LSI3.js";var X=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.title=F.laboratories,this.dataSource=new P("name"),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",f=>this.router.navigate([`${f.id}`],{relativeTo:this.activatedRoute})).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt",!1),a.date("updatedAt",!1),w.menu([j.edit(f=>this.openSaveComponent(f))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(k,{data:Y.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(B(this.dataSource.indicator),b(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(p),n(T),n(z));},t.ɵcmp=M({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(C(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return i.get();}),m(2,"button",2),d("click",function(){return i.openSaveComponent();}),m(3,"span"),v(4,3),_()()(),m(5,"sz-ui-table",4),d("update",function(){return i.get();}),_()),o&2&&(l("title",i.title),S(),l("dataSource",i.dataSource),S(4),l("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,G,U,c],encapsulation:2});let r=t;return r;})();var Re=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=h({providers:[p],imports:[y,R,L.forChild([{path:"",component:X}]),O,A,D,H,N,c,$,u]});let r=t;return r;})();export{Re as LaboratoriesModule};/**i18n:16c9224f5b668b40e6178402b9ae5cba52679b665b9b111ce72150c0a38fe8d5*/