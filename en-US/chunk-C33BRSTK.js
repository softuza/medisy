import{b as E}from"./chunk-QPCV2IZI.js";import{a as o,b as _,d as D,f as I,i as j,j as A}from"./chunk-A52A4IXH.js";import"./chunk-UKASW4SH.js";import"./chunk-AQMJWPZN.js";import"./chunk-GF52CWG5.js";import{a as m}from"./chunk-A4WL3FYI.js";import"./chunk-NORSX7AN.js";import"./chunk-O2OTD4RB.js";import{b as s}from"./chunk-QLW72HL4.js";import"./chunk-KZ5TTCTY.js";import{d as y,g as z}from"./chunk-4Z4QG25E.js";import"./chunk-3NC3Y6E7.js";import"./chunk-RIHPS5KS.js";import{c as C}from"./chunk-IWL564QK.js";import"./chunk-NDMBF3VG.js";import"./chunk-ZADXNDER.js";import{c as M,d as T}from"./chunk-XVKVAOPG.js";import"./chunk-2HLVRV4Y.js";import"./chunk-QB7MQTPZ.js";import"./chunk-6PBKCSCG.js";import{e as g}from"./chunk-NU73GHW6.js";import"./chunk-Y5SKEODV.js";import{ka as v}from"./chunk-CJMWB6ZO.js";import"./chunk-3KZRNWQ7.js";import{Db as n,Nb as d,Ob as l,Pb as b,_b as u,hb as c,ib as p,ka as f,ua as S,va as h}from"./chunk-HNAKTLBJ.js";var F=(()=>{let e=class e{constructor(a,i){this.dialog=a,this.mlabService=i,this.title=M.specimens,this.dataSource=new D("-createdAt"),this.dataSource.columnDefs.push(o.uuid("id"),o.icon("state").setValueGetter(t=>E(t.state)).setValueTooltip(t=>T(t.state)),o.number("code"),o.string("type.name"),o.date("createdAt",!1),o.date("updatedAt",!1),o.date("collectedAt"),_.menu([])),this.get()}get(){this.mlabService.specimens.get(this.dataSource.getQuery()).pipe(C(this.dataSource.indicator)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)(p(y),p(m))},e.\u0275cmp=S({type:e,selectors:[["sz-medisy-laboratory-specimens"]],decls:3,vars:4,consts:[[3,"title"],[3,"changed","dataSource"],[3,"update","stateEnabled","dataSource"]],template:function(i,t){i&1&&(b(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),u("changed",function(){return t.get()}),l(),d(2,"sz-ui-table",2),u("update",function(){return t.get()}),l()),i&2&&(n("title",t.title),c(),n("dataSource",t.dataSource),c(),n("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[j,I,s],encapsulation:2});let r=e;return r})();var te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({providers:[m],imports:[g.forChild([{path:"",component:F}]),z,v,A,s]});let r=e;return r})();export{te as SpecimensModule};
/**i18n:8ad4cf760c87d08b695a94cb80f4844ffbc4e33bdc339c4d5a0bbc09e28e3eac*/
