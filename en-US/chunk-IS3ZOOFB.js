import{j as w}from"./chunk-GIQHEGBP.js";import"./chunk-7LSJKDZJ.js";import{a as h,b as c}from"./chunk-NHIBZTKH.js";import"./chunk-UOUO5U2Y.js";import{d as B,g as L}from"./chunk-XVVRHKJW.js";import"./chunk-5FPHEJQ4.js";import"./chunk-OI3RYSYI.js";import{u as j,v as k}from"./chunk-WLSYRODT.js";import{a as p}from"./chunk-YF2PEFAH.js";import"./chunk-424JH55D.js";import{a as f}from"./chunk-OFOYSQTQ.js";import{a as u}from"./chunk-6S4N3MHV.js";import{E as G,G as I,H as x,I as R,Ta as D,Ua as F}from"./chunk-2EUQTENK.js";import{Ab as a,Bb as z,Vb as m,Wb as d,Yb as g,da as v,db as l,eb as s,la as y,ma as C,ob as b,wb as S,xb as M,yb as T,zb as n}from"./chunk-5RJFZK6E.js";function q(e,t){if(e&1&&z(0,"sz-ui-card",5),e&2){let A=t.$implicit;b("card",A);}}var E=(()=>{let t=class t{constructor(r,i,o,H){this.dialog=r,this.mlabService=i,this.route=o,this.router=H,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles();}buildTiles(){let r={icon:"lab_profile",subtitle:"Test Classes",type:h.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,f.count()).subscribe(o=>{r.title=o;});let i={icon:"type_specimen",subtitle:"Specimen Types",type:h.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,f.count()).subscribe(o=>{i.title=o;}),this.tiles.push(r,i);}};t.ɵfac=function(i){return new(i||t)(s(B),s(p),s(G),s(I));},t.ɵcmp=y({type:t,selectors:[["medisy-laboratory-test-group"]],features:[g([])],decls:12,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(n(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),m(3),a(),n(4,"span",2),m(5),a()(),n(6,"button",3)(7,"mat-icon"),m(8,"arrow_back"),a()()(),n(9,"div",4),M(10,q,1,1,"sz-ui-card",5,S),a()),i&2&&(l(3),d(o.testGroup.name),l(2),d(o.testGroup.description),T(10,o.tiles));},dependencies:[x,D,j,u,c],encapsulation:2});let e=t;return e;})();var $=[{path:"",component:E},{path:"specimen-types",loadComponent:()=>import("./chunk-BU3JIINK.js").then(e=>e.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-LYQ3TKCC.js").then(e=>e.TestGroupTestClassesComponent)}];var dt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=v({providers:[p],imports:[R.forChild($),L,F,k,u,w,c]});let e=t;return e;})();export{dt as TestGroupModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/