import{a as c}from"./chunk-OBDAKHTO.js";import{a as H}from"./chunk-IUSM46JI.js";import{a as d}from"./chunk-OTTXER4X.js";import{c as Y,e as k,i as w,u as $,v as j}from"./chunk-GHEGCXEZ.js";import{a as L}from"./chunk-BUSYHZDZ.js";import{a as p}from"./chunk-VU3TSLPI.js";import{c as P,l as B,m as F,n as N}from"./chunk-DJTHGJMD.js";import{b as l}from"./chunk-KIWKP6WG.js";import"./chunk-EVZ4I5QA.js";import{d as I,g as O}from"./chunk-VQ3CVIXE.js";import{A as E}from"./chunk-75XLR4TY.js";import{s as y,t as A,y as T}from"./chunk-VZUJMTKN.js";import{i as D}from"./chunk-FVDEVSJ2.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ea as v,Ga as R,Ja as z}from"./chunk-TT7ZQ2V6.js";import{Eb as a,Fb as f,Gb as C,M as n,Qb as g,Sb as s,ea as b,fb as u,gb as S,na as M,oa as h,ub as m}from"./chunk-CQJO6ZYU.js";var U=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.mlabService=o,this.title=L.laboratories,this.dataSource=new k("name"),this.dataSource.addRows(Y.default([d.nameHyperlink(r=>r.id),d.createdAt(),d.menu([D.edit(r=>this.openSaveComponent(r))])])),this.dataSource.schema=H.medisy.laboratoryAPI.laboratory,this.get();}openSaveComponent(e){this.dialog.open(c,{data:e}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(B,{data:N.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().pipe(n(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.buildRequest()).pipe(P(this.dataSource.indicator),n(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(S(I),S(p));},t.ɵcmp=M({type:t,selectors:[["medisy-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(C(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),s("changed",function(){return r.get();}),a(2,"button",2),s("click",function(){return r.openSaveComponent();}),a(3,"span"),g(4,3),f()()(),a(5,"sz-ui-table",4),s("update",function(){return r.get();}),f()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[v,$,w,l],encapsulation:2});let i=t;return i;})();var G=[{path:"",component:U}];var Ee=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=h({type:t}),t.ɵinj=b({providers:[p],imports:[y,A,T.forChild(G),O,z,R,j,E,l,F,c]});let i=t;return i;})();export{Ee as LaboratoriesModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/