import{a as V}from"./chunk-XN4YAID3.js";import"./chunk-56MTYLVX.js";import"./chunk-6L3SXH5R.js";import{a as p}from"./chunk-7H6A7H7K.js";import{a as H}from"./chunk-5SSCGDFC.js";import"./chunk-BNSJPKLO.js";import{k as N}from"./chunk-55JERGAK.js";import"./chunk-YYI2KTIZ.js";import{b as m}from"./chunk-VSNS76N3.js";import{d as j,g as n,h as w,j as k,l as A}from"./chunk-RMS73U75.js";import{d as F,g as L}from"./chunk-GYDCMUMI.js";import{h as R}from"./chunk-QPK5DCJC.js";import"./chunk-VAFOXX63.js";import"./chunk-W4UR2Y35.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c}from"./chunk-HXWKRRDN.js";import"./chunk-QBI5CVQV.js";import"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{a as g,c as I,e as T}from"./chunk-UR27RSXA.js";import"./chunk-PPOSM6EZ.js";import{ia as D}from"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Ab as C,Bb as M,Cb as b,Db as z,Eb as d,I as l,ba as f,db as h,eb as a,ec as S,ka as u,la as y,sb as s,zb as v}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";function $(e,t){if(e&1&&d(0,"sz-ui-card",2),e&2){let E=t.$implicit;s("card",E)}}var x=(()=>{let t=class t{constructor(r,o,i){this.dialog=r,this.route=o,this.router=i,this.tiles=[],this.laboratoryMenu=A.more([k.edit(()=>this.openSaveComponent()),n.divider(),n.item(c.testTypes,"science",()=>this.router.navigate(["test-types"],{relativeTo:this.route})),n.item(c.referenceValues,"compare_arrows",()=>this.router.navigate(["reference-values"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory}openSaveComponent(){this.dialog.open(V,{data:this.laboratory}).afterClosed().pipe(l(1)).subscribe(r=>{r&&(this.laboratory=r)})}};t.\u0275fac=function(o){return new(o||t)(a(F),a(g),a(I))},t.\u0275cmp=u({type:t,selectors:[["sz-medisy-laboratory-laboratory"]],features:[S([])],decls:4,vars:3,consts:[[3,"title","subtitle","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(o,i){o&1&&(d(0,"sz-ui-header-info",0),b(1,"div",1),C(2,$,1,1,"sz-ui-card",2,v),z()),o&2&&(s("title",i.laboratory.name)("subtitle",i.laboratory.description)("menu",i.laboratoryMenu),h(2),M(i.tiles))},dependencies:[p,m],encapsulation:2});let e=t;return e})();var B=[{path:"",component:x},{path:"test-types",loadComponent:()=>import("./chunk-W4PNEZAH.js").then(e=>e.LaboratoryTestTypesComponent)},{path:"reference-values",loadComponent:()=>import("./chunk-SCVJDWID.js").then(e=>e.LaboratoryReferenceValuesComponent)}];var lt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=y({type:t}),t.\u0275inj=f({providers:[H],imports:[T.forChild(B),L,j,D,R,p,N,w,m]});let e=t;return e})();export{lt as LaboratoryModule};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
