import{a as c}from"./chunk-KLJY3DWS.js";import"./chunk-5HLDPKOX.js";import{a as p}from"./chunk-2QAMDTIU.js";import{m as k}from"./chunk-A4P6NINK.js";import"./chunk-L6PAJN6E.js";import{b as m}from"./chunk-G7STKNJA.js";import{a}from"./chunk-TFWIVLS6.js";import{d as j,g as R}from"./chunk-SG6HY6JP.js";import{J as g,L as z,N as I}from"./chunk-43DI3E3T.js";import{Ga as D,Ja as F}from"./chunk-QRXQW4KS.js";import{Bb as T,Cb as v,Db as C,Eb as b,Fb as M,Gb as d,ea as u,fb as h,gb as n,gc as S,na as f,oa as y,ub as l}from"./chunk-CIWRZFHR.js";function H(t,e){if(t&1&&d(0,"sz-ui-card",2),t&2){let A=e.$implicit;l("card",A)}}var L=(()=>{let e=class e{constructor(r,i,o,s){this.dialog=r,this.mlabService=i,this.route=o,this.router=s,this.tiles=[],this.testType=this.route.snapshot.data.testType,this.buildTiles()}buildTiles(){let r={icon:"lab_profile",subtitle:a.testTypes,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})},i={icon:"type_specimen",subtitle:a.specimenTypes,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testTypes.specimenTypes.count(this.testType.id).subscribe(s=>{i.title=s});let o={icon:"type_specimen",subtitle:a.disciplines,clickFn:()=>this.router.navigate(["disciplines"],{relativeTo:this.route})};this.mlabService.testTypes.disciplines.count(this.testType.id).subscribe(s=>{o.title=s}),this.tiles.push(r,i,o)}};e.\u0275fac=function(i){return new(i||e)(n(j),n(p),n(g),n(z))},e.\u0275cmp=f({type:e,selectors:[["medisy-laboratory-test-type"]],features:[S([])],decls:4,vars:2,consts:[[3,"title","subtitle"],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(d(0,"sz-ui-header-info",0),b(1,"div",1),v(2,H,1,1,"sz-ui-card",2,T),M()),i&2&&(l("title",o.testType.name)("subtitle",o.testType.description),h(2),C(o.tiles))},dependencies:[m,c],encapsulation:2});let t=e;return t})();var w=[{path:"",component:L},{path:"specimen-types",loadComponent:()=>import("./chunk-HSSMUY3F.js").then(t=>t.TestTypeSpecimenTypesComponent)},{path:"disciplines",loadComponent:()=>import("./chunk-YM4DE3IG.js").then(t=>t.TestTypeDisciplinesComponent)}];var re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({providers:[p],imports:[I.forChild(w),R,F,D,m,k,c]});let t=e;return t})();export{re as TestTypeModule};
/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/
