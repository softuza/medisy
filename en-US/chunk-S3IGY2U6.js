import{a as k}from"./chunk-CXBWK2LS.js";import"./chunk-V62SJGOL.js";import"./chunk-EHCLKBN2.js";import{a as m}from"./chunk-KPFTDPHF.js";import"./chunk-GXSSRYIF.js";import"./chunk-WK7ZT6NW.js";import{a as R}from"./chunk-U2WYP6YP.js";import"./chunk-3UZWCLUR.js";import{k as x}from"./chunk-TFN2F5ZD.js";import{a as r,b as p}from"./chunk-RW5IOOBQ.js";import{d as A,f as F,g as L}from"./chunk-X2F6JBJU.js";import{d as T,g as B}from"./chunk-HPPZ7ERW.js";import"./chunk-RXHMJFXO.js";import"./chunk-WQZWGPYI.js";import"./chunk-264QKOH6.js";import{h as j}from"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-2XCX2PRG.js";import"./chunk-VXNH5PTX.js";import{Y as D}from"./chunk-Z63FN5EJ.js";import{a as g,c as z,e as S}from"./chunk-DNH4OZS2.js";import{ia as I}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Hb as y,Ib as h,Jb as C,Kb as v,Lb as M,Mb as c,bb as u,cb as n,ea as d,na as f,oa as l,oc as b,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";function $(o,t){if(o&1&&c(0,"sz-ui-card",2),o&2){let E=t.$implicit;s("card",E)}}var w=(()=>{let t=class t{constructor(i,e,a){this.dialog=i,this.route=e,this.router=a,this.tiles=[],this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:this.laboratory.name,subtitle:this.laboratory.description,actions:[r.menu([r.edit(this.openSaveComponent.bind(this)),r.divider(),r.default().setTitle(D.test_types).setIcon(L.science).setClickFn(()=>this.router.navigate(["test-types"],{relativeTo:this.route}))])]}}openSaveComponent(){this.dialog.open(k,{data:this.laboratory}).afterClosed().subscribe(i=>{i&&(this.laboratory=i)})}};t.\u0275fac=function(e){return new(e||t)(n(T),n(g),n(z))},t.\u0275cmp=f({type:t,selectors:[["sz-medisy-laboratory-laboratory"]],features:[b([])],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(e,a){e&1&&(c(0,"sz-ui-app-bar",0),v(1,"div",1),h(2,$,1,1,"sz-ui-card",2,y),M()),e&2&&(s("config",a.appBarConfig),u(2),C(a.tiles))},dependencies:[m,p],encapsulation:2});let o=t;return o})();var N=[{path:"",component:w},{path:"test-types",loadComponent:()=>import("./chunk-6QJFD4NJ.js").then(o=>o.LaboratoryTestTypesComponent)}];var ct=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l({type:t}),t.\u0275inj=d({providers:[R],imports:[S.forChild(N),B,A,I,j,m,x,F,p]});let o=t;return o})();export{ct as LaboratoryModule};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
