import{a as u}from"./chunk-JCHKHXA7.js";import"./chunk-NYBBCORV.js";import"./chunk-76SMZUR5.js";import{a,b as Y,d as w,f as P,i as U,j as V}from"./chunk-KDQ5XKIO.js";import"./chunk-GANFR7F4.js";import"./chunk-Z4TWWZUI.js";import"./chunk-RWDFLCXR.js";import{a as p}from"./chunk-R6UM4SG5.js";import{i as j,j as $,k}from"./chunk-NHCTASKL.js";import"./chunk-3HSHJW6B.js";import{b as c}from"./chunk-SVG5RMLM.js";import{h as N}from"./chunk-ZG7TD6PA.js";import{d as A,g as I}from"./chunk-EJJSD5UB.js";import"./chunk-SSASL3ZT.js";import{t as F}from"./chunk-ILYIUFTB.js";import{c as D}from"./chunk-SNUH52NX.js";import"./chunk-U7ZOM2YQ.js";import"./chunk-AZIHVEHP.js";import{c as B}from"./chunk-4533BRGQ.js";import"./chunk-WQK2CTKL.js";import{s as v,t as y}from"./chunk-YFLYFTNW.js";import"./chunk-HBG37XGG.js";import{a as z,c as R,e as T}from"./chunk-TXI72R6B.js";import"./chunk-CFWDSB5H.js";import{ha as L,ia as O,ka as E}from"./chunk-M5SMZ234.js";import"./chunk-EIB4LKCD.js";import{Db as l,Nb as m,Ob as b,Pb as C,Zb as g,_b as d,hb as S,ib as n,ka as _,ua as h,va as M}from"./chunk-NXFEVB6F.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.title=B.laboratories,this.dataSource=new w("name"),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",f=>`/mlab/laboratories/${f.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),Y.menu([N.edit(f=>this.openSaveComponent(f))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(j,{data:k.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(A),n(p),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-header-info",1),m(1,"sz-ui-table-search-filter",2),d("changed",function(){return i.get();}),m(2,"button",3),d("click",function(){return i.openSaveComponent();}),m(3,"span"),g(4,0),b()()(),m(5,"sz-ui-table",4),d("update",function(){return i.get();}),b()),o&2&&(l("title",i.title),S(),l("dataSource",i.dataSource),S(4),l("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[O,U,P,c],encapsulation:2});let r=t;return r;})();var ve=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=_({providers:[p],imports:[v,y,T.forChild([{path:"",component:G}]),I,L,E,V,F,c,$,u]});let r=t;return r;})();export{ve as LaboratoriesModule};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/