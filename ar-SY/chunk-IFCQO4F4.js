import{a as c}from"./chunk-FI53J55Y.js";import{a as H}from"./chunk-7NNCRG62.js";import{a as d}from"./chunk-WAXOPSH2.js";import{b as Y,c as k,e as w,o as $,p as j}from"./chunk-FYVWUY5J.js";import"./chunk-BDKYF43S.js";import{c as P,l as B,m as N,n as F}from"./chunk-JUKWJGHA.js";import{d as O,g as I}from"./chunk-LR6DSKQQ.js";import{E as z}from"./chunk-CJ3L35E7.js";import{r as E,s as T}from"./chunk-FZFNR6NR.js";import"./chunk-HXXK5E53.js";import{a as p}from"./chunk-X3ZOFRYL.js";import{b as l}from"./chunk-V2YTYBA6.js";import{a as L}from"./chunk-AQB7U7BU.js";import{e as v}from"./chunk-4G55JY3H.js";import{i as D}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as y,Ra as A,Ua as R}from"./chunk-W55BWEJG.js";import{Bb as a,Cb as S,Db as g,L as n,Nb as h,Pb as s,cb as u,da as b,db as f,la as M,ma as C,nb as m}from"./chunk-3QIFGVJ6.js";var U=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.mlabService=o,this.title=H.laboratories,this.dataSource=new Y(L.pagedSorted("name")),this.dataSource.addRows(k.default([d.nameHyperlink(r=>r.id),d.createdAt(),d.menu([D.edit(r=>this.openSaveComponent(r))])])),this.get();}openSaveComponent(e){this.dialog.open(c,{data:e}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(B,{data:F.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.filterModel).pipe(P(this.dataSource.indicator),n(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(f(O),f(p));},t.ɵcmp=M({type:t,selectors:[["medisy-laboratories"]],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(g(0,"sz-ui-header-info",0),a(1,"sz-ui-table-filter",1),s("search",function(){return r.get();}),a(2,"button",2),s("click",function(){return r.openSaveComponent();}),a(3,"span"),h(4,3),S()()(),a(5,"sz-ui-table",4),s("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(1),m("dataSource",r.dataSource),u(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,$,w,l],encapsulation:2});let i=t;return i;})();var G=[{path:"",component:U}];var ze=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=b({providers:[p],imports:[E,T,v.forChild(G),I,R,A,j,z,l,N,c]});let i=t;return i;})();export{ze as LaboratoriesModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/