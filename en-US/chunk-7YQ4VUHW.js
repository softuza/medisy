import{a as k}from"./chunk-4HF36JAI.js";import"./chunk-Y6DX2ZXK.js";import"./chunk-6ZB75UXB.js";import"./chunk-S2VBC35E.js";import{a as m}from"./chunk-ZI42EE2Y.js";import"./chunk-INPITJR6.js";import{a as w}from"./chunk-RWCEK4YQ.js";import{j as N}from"./chunk-4PO5ZDJC.js";import"./chunk-WXIP2PM4.js";import{a as n}from"./chunk-IWOJX2OI.js";import{d as L,e as d,f as R,h as A,j as B}from"./chunk-HXGKJPWL.js";import{d as D,g as F}from"./chunk-6EVQMKN4.js";import"./chunk-BW5OH3R7.js";import"./chunk-BI6HPZ47.js";import"./chunk-HMU3GC5F.js";import"./chunk-FIREYTYE.js";import{h as T}from"./chunk-XEDVQBDU.js";import{c as j}from"./chunk-BVKWOAP7.js";import"./chunk-45BT2WXK.js";import"./chunk-7T6A67P3.js";import"./chunk-4ZNRG2C5.js";import{a as z,c as S,e as g}from"./chunk-C2CTAUG5.js";import{ia as I}from"./chunk-IU3SBL3R.js";import"./chunk-JEF2LJ7N.js";import{Eb as y,Fb as h,Gb as M,Hb as C,Ib as v,Jb as s,bb as f,cb as a,ea as c,jc as b,oa as l,pa as u,xb as p}from"./chunk-BSOORNNN.js";import"./chunk-73BG4Q2P.js";function q(o,t){if(o&1&&s(0,"sz-ui-card",2),o&2){let P=t.$implicit;p("card",P)}}var x=(()=>{let t=class t{constructor(r,e,i){this.dialog=r,this.route=e,this.router=i,this.tiles=[],this.laboratoryMenu=B.more([A.edit(()=>this.openSaveComponent()),d.divider(),d.item(j.test_types,"science",()=>this.router.navigate(["test-types"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory}openSaveComponent(){this.dialog.open(k,{data:this.laboratory}).afterClosed().subscribe(r=>{r&&(this.laboratory=r)})}};t.\u0275fac=function(e){return new(e||t)(a(D),a(z),a(S))},t.\u0275cmp=l({type:t,selectors:[["sz-medisy-laboratory-laboratory"]],features:[b([])],decls:4,vars:3,consts:[[3,"title","subtitle","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(e,i){e&1&&(s(0,"sz-ui-app-bar",0),C(1,"div",1),h(2,q,1,1,"sz-ui-card",2,y),v()),e&2&&(p("title",i.laboratory.name)("subtitle",i.laboratory.description)("menu",i.laboratoryMenu),f(2),M(i.tiles))},dependencies:[m,n],encapsulation:2});let o=t;return o})();var E=[{path:"",component:x},{path:"test-types",loadComponent:()=>import("./chunk-H7CDBYKV.js").then(o=>o.LaboratoryTestTypesComponent)}];var dt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=c({providers:[w],imports:[g.forChild(E),F,L,I,T,m,N,R,n]});let o=t;return o})();export{dt as LaboratoryModule};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/
