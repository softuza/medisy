import{j as w}from"./chunk-WR4GG44T.js";import{b as l}from"./chunk-B6YRJ72V.js";import{h as R}from"./chunk-ZC5VE3PD.js";import{d as E,g as $}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{a as u,b as r,c as F}from"./chunk-V4HCCL3Z.js";import{d as x}from"./chunk-A4OPY5TW.js";import"./chunk-37GZDSHT.js";import"./chunk-FEFUQJM2.js";import{a as j}from"./chunk-ESAZXDOZ.js";import"./chunk-UPQBKJGY.js";import"./chunk-NW5OYJVI.js";import{a as d}from"./chunk-CVLFG5YI.js";import{D as T,F as I,H as L,Ta as D}from"./chunk-RQMADBIK.js";import{Ab as f,Tb as h,Ub as v,Wb as S,cb as s,da as C,db as m,la as y,ma as M,nb as c,vb as z,wb as b,xb as g,yb as p,zb as a}from"./chunk-3PI2VV3G.js";function H(e,t){if(e&1&&f(0,"sz-ui-card",5),e&2){let A=t.$implicit;c("card",A);}}var B=(()=>{let t=class t{constructor(n,o,i){this.dialog=n,this.route=o,this.router=i,this.tiles=[],this.laboratoryMenu=F.more([r.edit(()=>{}),r.divider(),r.default("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.router.navigate(["phones"],{relativeTo:this.route})),r.default("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.router.navigate(["emails"],{relativeTo:this.route})),r.default("\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","lab_profile",()=>this.router.navigate(["test-classes"],{relativeTo:this.route})),r.default("\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","science",()=>this.router.navigate(["test-groups"],{relativeTo:this.route})),r.default("\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629","compare_arrows",()=>this.router.navigate(["reference-values"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory;}};t.ɵfac=function(o){return new(o||t)(m(E),m(T),m(I));},t.ɵcmp=y({type:t,selectors:[["medisy-laboratory-laboratory"]],features:[S([])],decls:10,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card"]],template:function(o,i){o&1&&(p(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),h(3),a(),p(4,"span",2),h(5),a()(),f(6,"sz-ui-menu",3),a(),p(7,"div",4),b(8,H,1,1,"sz-ui-card",5,z),a()),o&2&&(s(3),v(i.laboratory.name),s(2),v(i.laboratory.description),s(1),c("menu",i.laboratoryMenu),g(8,i.tiles));},dependencies:[l,u,d],encapsulation:2});let e=t;return e;})();var P=[{path:"",component:B},{path:"phones",loadComponent:()=>import("./chunk-EHXMKD6Y.js").then(e=>e.LaboratoryPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-HARKMRMY.js").then(e=>e.LaboratoryEmailsComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-PKW5ZKJW.js").then(e=>e.LaboratoryTestClassesComponent)},{path:"test-groups",loadComponent:()=>import("./chunk-XLJEN5AU.js").then(e=>e.LaboratoryTestGroupsComponent)},{path:"reference-values",loadComponent:()=>import("./chunk-W3A3SYHB.js").then(e=>e.LaboratoryReferenceValuesComponent)}];var me=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=C({providers:[j],imports:[L.forChild(P),$,x,D,R,l,w,u,d]});let e=t;return e;})();export{me as LaboratoryModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/