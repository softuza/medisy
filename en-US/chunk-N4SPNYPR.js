import{a as S}from"./chunk-FI53J55Y.js";import{b as d}from"./chunk-JMZ6IH5D.js";import{b as Y,c as $,e as F,o as k,p as w}from"./chunk-PDSP3MQP.js";import"./chunk-BDKYF43S.js";import{c as y,l as P,m as B,n as N}from"./chunk-JUKWJGHA.js";import{d as I,g as D}from"./chunk-LR6DSKQQ.js";import{E as L}from"./chunk-CJ3L35E7.js";import{r as O,s as R}from"./chunk-FZFNR6NR.js";import{a as p}from"./chunk-X3ZOFRYL.js";import{a as l}from"./chunk-XCF6KXCP.js";import{a as z}from"./chunk-AQB7U7BU.js";import{e as C}from"./chunk-4G55JY3H.js";import{i as v}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as T,Ra as g,Ua as h}from"./chunk-W55BWEJG.js";import{Bb as a,Cb as m,L as n,Nb as f,Pb as s,cb as c,da as b,db as u,la as A,ma as E,nb as _}from"./chunk-3QIFGVJ6.js";var U=(()=>{let o=class o{constructor(e,t){this.dialog=e,this.mlabService=t,this.dataSource=new Y(z.pagedSorted("name")),this.dataSource.addRows($.default([d.nameHyperlink(i=>i.id),d.createdAt(),d.menu([v.edit(i=>this.openSaveComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(S,{data:e}).afterClosed().pipe(n(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openLaboratoryDeleteComponent(e){this.dialog.open(P,{data:N.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().pipe(n(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.get(this.dataSource.filterModel).pipe(y(this.dataSource.indicator),n(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(u(I),u(p));},o.ɵcmp=A({type:o,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:()=>{let e;e="Laboratories";let t;return t="Add",[["start","",1,"sz-h5"],e,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),f(2,1),m()(),a(3,"sz-ui-table-filter",2),s("search",function(){return i.get();}),a(4,"button",3),s("click",function(){return i.openSaveComponent();}),a(5,"span"),f(6,4),m()()(),a(7,"sz-ui-table",5),s("update",function(){return i.get();}),m()),t&2&&(c(3),_("dataSource",i.dataSource),c(4),_("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[T,k,F,l],encapsulation:2});let r=o;return r;})();var j=[{path:"",component:U}];var ge=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=E({type:o}),o.ɵinj=b({providers:[p],imports:[O,R,C.forChild(j),D,h,g,w,L,l,B,S]});let r=o;return r;})();export{ge as LaboratoriesModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/