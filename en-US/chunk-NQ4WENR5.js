import{a as L}from"./chunk-LRXAE4JT.js";import"./chunk-QETWF4JQ.js";import"./chunk-KLF2JPT6.js";import"./chunk-KSG5U4K5.js";import{a as T}from"./chunk-PEAEHABN.js";import"./chunk-IBNNL3QX.js";import"./chunk-4VOEDM67.js";import"./chunk-INGRYE55.js";import"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import{d as g}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{a as S,b as o,c as F}from"./chunk-JVOCSYLO.js";import{a as M}from"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as z}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as C,r as v}from"./chunk-TN5XOKTF.js";import"./chunk-75V32KEJ.js";import{Gb as c,Hb as l,Ib as u,Jb as f,Kb as y,Lb as s,bb as d,ja as a,mc as h,na as m,nc as b,yb as n}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";function D(t,e){if(t&1&&s(0,"sz-ui-card",2),t&2){let I=e.$implicit;n("card",I)}}var B=(()=>{let e=class e{constructor(){this.dialog=a(g),this.route=a(C),this.router=a(v),this.tiles=[],this.laboratory=this.route.snapshot.data.laboratory,this.appBarConfig={title:()=>this.laboratory.name,subtitle:()=>this.laboratory.description,menu:F.default([o.menu([o.edit(this.openSaveComponent.bind(this)),o.divider(),o.default().setTitle(z.test_types).setIcon(S.science).setClickFn(()=>this.router.navigate(["test-types"],{relativeTo:this.route}))])])}}openSaveComponent(){this.dialog.open(L,{data:this.laboratory}).afterClosed().subscribe(r=>{r&&(this.laboratory=r)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["sz-medisy-laboratory-laboratory"]],standalone:!0,features:[h([]),b],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(i,p){i&1&&(s(0,"sz-ui-app-bar",0),f(1,"div",1),l(2,D,1,1,"sz-ui-card",2,c),y()),i&2&&(n("config",p.appBarConfig),d(2),u(p.tiles))},dependencies:[M,T],encapsulation:2});let t=e;return t})();var J=[{path:"",component:B},{path:"test-types",loadComponent:()=>import("./chunk-46ZMNA5C.js").then(t=>t.LaboratoryTestTypesComponent)}];export{J as default};
/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/