import{a as m}from"./chunk-NIVYARTS.js";import"./chunk-JUXA3TTM.js";import{a as n}from"./chunk-YDMDVI6M.js";import{j as R}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as p}from"./chunk-HKZIVJYM.js";import"./chunk-PNII32UO.js";import{d as j,g as D}from"./chunk-V6ACGGWJ.js";import"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as d}from"./chunk-2W3OIU7Y.js";import"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as S,c as g,e as z}from"./chunk-YYZRSXTZ.js";import{c as F}from"./chunk-B3RLTRYJ.js";import{ha as I}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Cb as h,Db as v,Eb as T,Fb as C,Gb as b,Hb as c,fa as l,gb as y,hb as s,hc as M,oa as u,pa as f,vb as a}from"./chunk-UDYUYOMJ.js";function B(t,e){if(t&1&&c(0,"sz-ui-card",2),t&2){let w=e.$implicit;a("card",w)}}var L=(()=>{let e=class e{constructor(r,i,o,x){this.dialog=r,this.mlabService=i,this.route=o,this.router=x,this.tiles=[],this.testType=this.route.snapshot.data.testType,this.buildTiles()}buildTiles(){let r={icon:"lab_profile",subtitle:d.testTypes,clickFn:()=>this.router.navigate(["test-types"],{relativeTo:this.route})},i={icon:"type_specimen",subtitle:d.specimenTypes,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testTypes.specimenTypes.count(this.testType.id).subscribe(o=>{i.title=o}),this.tiles.push(i,r)}};e.\u0275fac=function(i){return new(i||e)(s(j),s(n),s(S),s(g))},e.\u0275cmp=u({type:e,selectors:[["sz-medisy-mlab-test-type"]],features:[M([])],decls:4,vars:2,consts:[[3,"title","subtitle"],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(c(0,"sz-ui-header-info",0),C(1,"div",1),v(2,B,1,1,"sz-ui-card",2,h),b()),i&2&&(a("title",o.testType.name)("subtitle",o.testType.description),y(2),T(o.tiles))},dependencies:[p,m],encapsulation:2});let t=e;return t})();var k=[{path:"",component:L},{path:"specimen-types",loadComponent:()=>import("./chunk-65R2QKSM.js").then(t=>t.TestTypeSpecimenTypesComponent)}];var re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=l({providers:[n],imports:[z.forChild(k),D,I,F,p,R,m]});let t=e;return t})();export{re as TestTypeModule};
/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/
