import{a as k}from"./chunk-QVOFX26E.js";import"./chunk-NDQ66YYE.js";import"./chunk-HG44BF4G.js";import{a as m}from"./chunk-QSM7WKJW.js";import{h as F}from"./chunk-Z3ELZRWE.js";import{a as w}from"./chunk-D4CAUMAG.js";import{j as N}from"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as n}from"./chunk-6MMOYJEJ.js";import{d as L,e as d,f as R,h as A,j as B}from"./chunk-QT6JCYGS.js";import{d as T,g as D}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import"./chunk-UCRC6V5J.js";import"./chunk-5WJVC7PV.js";import"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import{c as j}from"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import"./chunk-EIWC7QFZ.js";import"./chunk-22G3BWVW.js";import{a as z,c as S,e as g}from"./chunk-L6HNREY7.js";import{ha as I}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Db as p,Kb as y,Lb as h,Mb as M,Nb as C,Ob as v,Pb as s,hb as f,ib as a,ka as c,pc as b,ua as l,va as u}from"./chunk-XPH4NMLC.js";function q(o,t){if(o&1&&s(0,"sz-ui-card",2),o&2){let P=t.$implicit;p("card",P)}}var x=(()=>{let t=class t{constructor(r,e,i){this.dialog=r,this.route=e,this.router=i,this.tiles=[],this.laboratoryMenu=B.more([A.edit(()=>this.openSaveComponent()),d.divider(),d.item(j.testTypes,"science",()=>this.router.navigate(["test-types"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory}openSaveComponent(){this.dialog.open(k,{data:this.laboratory}).afterClosed().subscribe(r=>{r&&(this.laboratory=r)})}};t.\u0275fac=function(e){return new(e||t)(a(T),a(z),a(S))},t.\u0275cmp=l({type:t,selectors:[["sz-medisy-laboratory-laboratory"]],features:[b([])],decls:4,vars:3,consts:[[3,"title","subtitle","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(e,i){e&1&&(s(0,"sz-ui-app-bar",0),C(1,"div",1),h(2,q,1,1,"sz-ui-card",2,y),v()),e&2&&(p("title",i.laboratory.name)("subtitle",i.laboratory.description)("menu",i.laboratoryMenu),f(2),M(i.tiles))},dependencies:[m,n],encapsulation:2});let o=t;return o})();var E=[{path:"",component:x},{path:"test-types",loadComponent:()=>import("./chunk-YYD4EGOW.js").then(o=>o.LaboratoryTestTypesComponent)}];var dt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=c({providers:[w],imports:[g.forChild(E),D,L,I,F,m,N,R,n]});let o=t;return o})();export{dt as LaboratoryModule};
/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/