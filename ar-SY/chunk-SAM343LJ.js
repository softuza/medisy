import{a as u}from"./chunk-GKEDU7UF.js";import"./chunk-KH42NGHJ.js";import"./chunk-RXYXEOSN.js";import{a,b as w,d as P,f as U,k as G,l as H}from"./chunk-GZGIJ3AA.js";import"./chunk-Y7DDQ3EC.js";import"./chunk-M6IFX4OO.js";import{a as p}from"./chunk-QKMKC3CH.js";import{j as k,k as $,l as Y}from"./chunk-DBFDBBEL.js";import"./chunk-EU67VDIO.js";import"./chunk-62HUTBRW.js";import{b as c}from"./chunk-KPHRAMAI.js";import{j}from"./chunk-EJDXHBCB.js";import{d as I,g as O}from"./chunk-VWNEGCRT.js";import{t as N}from"./chunk-6PF2YSZT.js";import{c as B}from"./chunk-C2WWZD6X.js";import"./chunk-WNILOJP4.js";import"./chunk-ORZKHXQX.js";import{c as F}from"./chunk-WTX2KFGU.js";import"./chunk-QKGOYXSP.js";import{s as y,t as R}from"./chunk-BBHJBBCY.js";import"./chunk-AH6US5BC.js";import{a as z,c as T,e as L}from"./chunk-TDDK2KRV.js";import"./chunk-ELX2DM7A.js";import{a as E,c as D}from"./chunk-4UZQAMIE.js";import{ia as A}from"./chunk-IME5AGE5.js";import"./chunk-APP24JVE.js";import{Hb as m,Ib as _,Jb as C,O as b,Tb as v,Vb as d,ha as h,ib as S,jb as n,qa as M,ra as g,xb as l}from"./chunk-JGYGEXT3.js";var X=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.title=F.laboratories,this.dataSource=new P("name"),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",f=>this.router.navigate([`${f.id}`],{relativeTo:this.activatedRoute})).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt",!1),a.date("updatedAt",!1),w.menu([j.edit(f=>this.openSaveComponent(f))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(k,{data:Y.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(B(this.dataSource.indicator),b(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(I),n(p),n(T),n(z));},t.ɵcmp=M({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(C(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),d("changed",function(){return i.get();}),m(2,"button",2),d("click",function(){return i.openSaveComponent();}),m(3,"span"),v(4,3),_()()(),m(5,"sz-ui-table",4),d("update",function(){return i.get();}),_()),o&2&&(l("title",i.title),S(),l("dataSource",i.dataSource),S(4),l("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,G,U,c],encapsulation:2});let r=t;return r;})();var Re=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=h({providers:[p],imports:[y,R,L.forChild([{path:"",component:X}]),O,A,D,H,N,c,$,u]});let r=t;return r;})();export{Re as LaboratoriesModule};/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/