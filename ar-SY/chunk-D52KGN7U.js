import{a as h,b as c}from"./chunk-VD5DSYMJ.js";import"./chunk-YGCATYA7.js";import"./chunk-YSHIJLQQ.js";import{m as w}from"./chunk-4L7MXCYU.js";import{d as B,g as L}from"./chunk-MLSRSUWT.js";import"./chunk-IGZ5UQAZ.js";import{a as p}from"./chunk-ANLAVR6W.js";import{a as u}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as f}from"./chunk-HSBTPXYW.js";import{a as G,c as I,d as x,e as R}from"./chunk-7EL7DJOA.js";import{b as j,c as k}from"./chunk-45S7AHWB.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{Qa as D,Ra as F}from"./chunk-5YRGD4YU.js";import{Ab as n,Bb as a,Cb as z,Vb as m,Wb as d,Yb as g,cb as l,da as v,db as s,la as y,ma as C,nb as b,vb as S,wb as M,xb as T}from"./chunk-MK3KDUIH.js";function q(e,t){if(e&1&&z(0,"sz-ui-card",5),e&2){let A=t.$implicit;b("card",A);}}var E=(()=>{let t=class t{constructor(r,i,o,H){this.dialog=r,this.mlabService=i,this.route=o,this.router=H,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles();}buildTiles(){let r={icon:"lab_profile",subtitle:"\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:h.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,f.count()).subscribe(o=>{r.title=o;});let i={icon:"type_specimen",subtitle:"\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:h.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,f.count()).subscribe(o=>{i.title=o;}),this.tiles.push(r,i);}};t.ɵfac=function(i){return new(i||t)(s(B),s(p),s(G),s(I));},t.ɵcmp=y({type:t,selectors:[["medisy-laboratory-test-group"]],features:[g([])],decls:12,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(n(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),m(3),a(),n(4,"span",2),m(5),a()(),n(6,"button",3)(7,"mat-icon"),m(8,"arrow_back"),a()()(),n(9,"div",4),M(10,q,1,1,"sz-ui-card",5,S),a()),i&2&&(l(3),d(o.testGroup.name),l(2),d(o.testGroup.description),T(10,o.tiles));},dependencies:[x,D,j,u,c],encapsulation:2});let e=t;return e;})();var $=[{path:"",component:E},{path:"specimen-types",loadComponent:()=>import("./chunk-R5DOWZSS.js").then(e=>e.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-A5WW5T23.js").then(e=>e.TestGroupTestClassesComponent)}];var dt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=v({providers:[p],imports:[R.forChild($),L,F,k,u,w,c]});let e=t;return e;})();export{dt as TestGroupModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/