import{a as Y}from"./chunk-S5KRHVFQ.js";import"./chunk-ML4SPS47.js";import{a as o,c as O,d as N,f as P,i as $,j}from"./chunk-AUPU6QI4.js";import"./chunk-OKGOWQL5.js";import"./chunk-NEHTWZRD.js";import{a as n}from"./chunk-4DEPVHVX.js";import"./chunk-7CWIHV7X.js";import{b as F,j as L,k as I}from"./chunk-6Y6J7VB6.js";import{a as l}from"./chunk-VAHBDTYA.js";import{h as d}from"./chunk-NR4QF72D.js";import{d as z,g as y}from"./chunk-EJOHO2EB.js";import{t as A}from"./chunk-YZKNUD65.js";import"./chunk-UFKQJOL3.js";import"./chunk-TL57E7RA.js";import"./chunk-GOMTDU6R.js";import"./chunk-HVAN3DT6.js";import"./chunk-F2RDDOGN.js";import{t as M,u as E}from"./chunk-MGV73Q32.js";import{Y as B}from"./chunk-I7PR7JM4.js";import{e as v}from"./chunk-5XANXOAJ.js";import"./chunk-N5JOJLCN.js";import{ja as T,la as D}from"./chunk-IM7EI72R.js";import"./chunk-327W6FQA.js";import{Kb as m,Lb as f,Mb as C,Wb as R,Xb as p,bb as c,cb as u,ea as _,na as g,oa as h,oc as b,zb as s}from"./chunk-UELVXDXK.js";import"./chunk-2GMD7R3L.js";var k=(()=>{let t=class t{constructor(e,r){this.dialog=e,this.mlabService=r,this.dataSource=new O(),this.appBarConfig={title:B.referrers},this.dataSource.columnDefs.push(o.uuid("id"),o.string("name"),o.string("primaryPhone"),o.string("primaryEmail"),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReferrerDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(Y,{data:e}).afterClosed().subscribe(r=>{this.dataSource.addOrUpdateItem(r);});}openReferrerDeleteComponent(e){this.dialog.open(L,{data:F.delete(this.mlabService.referrers.delete(e.id),e)}).afterClosed().subscribe(r=>{this.dataSource.delete(r);});}get(){this.mlabService.referrers.get(this.dataSource.getQuery()).pipe(N(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(r){return new(r||t)(u(z),u(n));},t.ɵcmp=g({type:t,selectors:[["sz-medisy-laboratory-referrers"]],features:[b([n])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(r,a){r&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),p("changed",function(){return a.get();}),m(2,"button",3),p("click",function(){return a.openSaveComponent();}),m(3,"span"),R(4,0),f()()(),m(5,"sz-ui-table",4),p("update",function(){return a.get();}),f()),r&2&&(s("config",a.appBarConfig),c(),s("dataSource",a.dataSource),c(4),s("dataSource",a.dataSource));},dependencies:[T,$,P,l],encapsulation:2});let i=t;return i;})();var ue=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=h({type:t}),t.ɵinj=_({providers:[n],imports:[M,E,v.forChild([{path:"",component:k}]),y,D,j,A,I,l]});let i=t;return i;})();export{ue as ReferrersModule};/**i18n:fe59e4cec730fb22fcad5443103077b4b8cf7932d5cc1616a4c03edd493e1605*/