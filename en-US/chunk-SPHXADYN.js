import{a as c}from"./chunk-NBOTACJ4.js";import{a as d}from"./chunk-HGG4SPXY.js";import{c as Y,e as k,g as w,s as $,t as j}from"./chunk-DTDLQFEI.js";import{c as P,l as B,m as N,n as F}from"./chunk-SN47SBJJ.js";import{d as O,g as I}from"./chunk-FNLNZMXX.js";import{D as z}from"./chunk-H22FBATM.js";import{r as T,s as v}from"./chunk-IUM5Y4DP.js";import{a as L}from"./chunk-DQFF7ZV7.js";import{a as p}from"./chunk-UAYSNPL7.js";import{b as l}from"./chunk-2H6GRCHT.js";import"./chunk-HUJ4SFSJ.js";import{e as A}from"./chunk-7TGQVE3C.js";import{i as D}from"./chunk-HXVM5UCI.js";import"./chunk-QCDHUYXG.js";import"./chunk-QWTR64PL.js";import{Pa as R,Ra as y,Ua as E}from"./chunk-53RWJDYX.js";import{Bb as a,Cb as S,Db as h,L as n,Nb as g,Pb as s,cb as u,da as b,db as f,la as M,ma as C,nb as m}from"./chunk-M2QTEBXZ.js";var H=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.mlabService=o,this.title=L.laboratories,this.dataSource=new k("name"),this.dataSource.addRows(Y.default([d.nameHyperlink(i=>i.id),d.createdAt(),d.menu([D.edit(i=>this.openSaveComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(c,{data:e}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(B,{data:F.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.buildRequest()).pipe(P(this.dataSource.indicator),n(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(f(O),f(p));},t.ɵcmp=M({type:t,selectors:[["medisy-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"filter","search"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(h(0,"sz-ui-header-info",0),a(1,"sz-ui-table-filter",1),s("search",function(){return i.get();}),a(2,"button",2),s("click",function(){return i.openSaveComponent();}),a(3,"span"),g(4,3),S()()(),a(5,"sz-ui-table",4),s("update",function(){return i.get();}),S()),o&2&&(m("title",i.title),u(1),m("filter",i.dataSource.filter),u(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[R,$,w,l],encapsulation:2});let r=t;return r;})();var U=[{path:"",component:H}];var ye=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=b({providers:[p],imports:[T,v,A.forChild(U),I,E,y,j,z,l,N,c]});let r=t;return r;})();export{ye as LaboratoriesModule};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/