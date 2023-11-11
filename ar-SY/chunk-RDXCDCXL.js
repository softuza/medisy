import{j as F}from"./chunk-SO5WW7X3.js";import"./chunk-BXKAZQ64.js";import{b as l}from"./chunk-PF7HVV5B.js";import{h as D}from"./chunk-XLSE5NCB.js";import{d as $,g as j}from"./chunk-VWPRYYV7.js";import"./chunk-UKCE2Q4Z.js";import{a as u,b as r,c as B}from"./chunk-HEEN2CKG.js";import{d as w}from"./chunk-E7VUVWEF.js";import"./chunk-XJ54ZRFR.js";import"./chunk-X72CBQLP.js";import{a as x}from"./chunk-Y376CRI2.js";import"./chunk-SNR3XRMI.js";import"./chunk-PIKBUH2I.js";import{a as d}from"./chunk-3HWNDRT6.js";import{F as I,H as L,J as R,Va as E,n as T}from"./chunk-P44VDH7R.js";import{Ab as p,Bb as a,Cb as f,Wb as h,Xb as v,Zb as S,ea as C,eb as s,fb as m,ma as y,na as M,pb as c,xb as z,yb as b,zb as g}from"./chunk-3CXVAQY6.js";function N(e,t){if(e&1&&f(0,"sz-ui-card",5),e&2){let G=t.$implicit;c("card",G);}}var P=(()=>{let t=class t{constructor(n,o,i){this.dialog=n,this.route=o,this.router=i,this.tiles=[],this.laboratoryMenu=B.more([r.edit(()=>{}),r.divider(),r.default("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.router.navigate(["phones"],{relativeTo:this.route})),r.default("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.router.navigate(["emails"],{relativeTo:this.route})),r.default("\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","lab_profile",()=>this.router.navigate(["test-classes"],{relativeTo:this.route})),r.default("\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","science",()=>this.router.navigate(["test-groups"],{relativeTo:this.route})),r.default("\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629","compare_arrows",()=>this.router.navigate(["reference-values"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory;}};t.ɵfac=function(o){return new(o||t)(m($),m(I),m(L));},t.ɵcmp=y({type:t,selectors:[["medisy-laboratory-laboratory"]],features:[S([])],decls:10,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card"]],template:function(o,i){o&1&&(p(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),h(3),a(),p(4,"span",2),h(5),a()(),f(6,"sz-ui-menu",3),a(),p(7,"div",4),b(8,N,1,1,"sz-ui-card",5,z),a()),o&2&&(s(3),v(i.laboratory.name),s(2),v(i.laboratory.description),s(1),c("menu",i.laboratoryMenu),g(8,i.tiles));},dependencies:[l,u,d],encapsulation:2});let e=t;return e;})();var A=[{path:"",component:P},{path:"phones",loadComponent:()=>import("./chunk-L5YB65RA.js").then(e=>e.LaboratoryPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-B7HJGUW7.js").then(e=>e.LaboratoryEmailsComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-47OICYV6.js").then(e=>e.LaboratoryTestClassesComponent)},{path:"test-groups",loadComponent:()=>import("./chunk-TAXZBUGR.js").then(e=>e.LaboratoryTestGroupsComponent)},{path:"reference-values",loadComponent:()=>import("./chunk-AZ53GYHF.js").then(e=>e.LaboratoryReferenceValuesComponent)}];var le=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=C({providers:[x],imports:[T,R.forChild(A),j,w,E,D,l,F,u,d]});let e=t;return e;})();export{le as LaboratoryModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/