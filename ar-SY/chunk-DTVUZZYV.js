import{j as E}from"./chunk-VT3WYR67.js";import"./chunk-RQNRD2JQ.js";import{a as h,b as c}from"./chunk-S376QVGE.js";import"./chunk-PD6EMHNS.js";import"./chunk-KGIHDKZN.js";import"./chunk-3UYL57HA.js";import{d as L,g as w}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import"./chunk-VRISEVPV.js";import{u as k,v as D}from"./chunk-GJY7U5GZ.js";import{a as p}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as f}from"./chunk-PIKBUH2I.js";import{a as u}from"./chunk-QDC3ZTFW.js";import{I,K as x,L as R,M as j,Va as F,Wa as B,q as G}from"./chunk-NC2N2FCX.js";import{Ab as n,Bb as a,Cb as z,Wb as m,Xb as d,Zb as g,ea as C,eb as l,fb as s,ma as v,na as y,pb as b,xb as S,yb as M,zb as T}from"./chunk-3CXVAQY6.js";function P(e,t){if(e&1&&z(0,"sz-ui-card",5),e&2){let H=t.$implicit;b("card",H);}}var $=(()=>{let t=class t{constructor(r,i,o,N){this.dialog=r,this.mlabService=i,this.route=o,this.router=N,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles();}buildTiles(){let r={icon:"lab_profile",subtitle:"\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:h.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,f.count()).subscribe(o=>{r.title=o;});let i={icon:"type_specimen",subtitle:"\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:h.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,f.count()).subscribe(o=>{i.title=o;}),this.tiles.push(r,i);}};t.ɵfac=function(i){return new(i||t)(s(L),s(p),s(I),s(x));},t.ɵcmp=v({type:t,selectors:[["medisy-laboratory-test-group"]],features:[g([])],decls:12,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(n(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),m(3),a(),n(4,"span",2),m(5),a()(),n(6,"button",3)(7,"mat-icon"),m(8,"arrow_back"),a()()(),n(9,"div",4),M(10,P,1,1,"sz-ui-card",5,S),a()),i&2&&(l(3),d(o.testGroup.name),l(2),d(o.testGroup.description),T(10,o.tiles));},dependencies:[R,F,k,u,c],encapsulation:2});let e=t;return e;})();var A=[{path:"",component:$},{path:"specimen-types",loadComponent:()=>import("./chunk-LEDZQRSY.js").then(e=>e.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-CFI2C52I.js").then(e=>e.TestGroupTestClassesComponent)}];var ht=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=y({type:t}),t.ɵinj=C({providers:[p],imports:[G,j.forChild(A),w,B,D,u,E,c]});let e=t;return e;})();export{ht as TestGroupModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/