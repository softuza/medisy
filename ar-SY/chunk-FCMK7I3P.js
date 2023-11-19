import{a as P}from"./chunk-FI53J55Y.js";import{b as d}from"./chunk-XZNQVZLE.js";import{h as D}from"./chunk-JI5I5E7Z.js";import{m as B}from"./chunk-JUKWJGHA.js";import{d as $,g as j}from"./chunk-LR6DSKQQ.js";import"./chunk-CJ3L35E7.js";import"./chunk-FZFNR6NR.js";import{a as x}from"./chunk-X3ZOFRYL.js";import{a as u}from"./chunk-XCF6KXCP.js";import"./chunk-AQB7U7BU.js";import{a as I,c as L,e as R}from"./chunk-4G55JY3H.js";import{d as w,f as l,i as r,j as F}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import{Ua as E}from"./chunk-W55BWEJG.js";import{Bb as p,Cb as n,Db as f,L as C,Wb as h,Xb as v,Zb as T,cb as s,da as y,db as m,la as M,ma as b,nb as c,wb as z,xb as g,yb as S}from"./chunk-3QIFGVJ6.js";function N(e,t){if(e&1&&f(0,"sz-ui-card",5),e&2){let G=t.$implicit;c("card",G);}}var k=(()=>{let t=class t{constructor(i,o,a){this.dialog=i,this.route=o,this.router=a,this.tiles=[],this.laboratoryMenu=F.more([r.edit(()=>this.openSaveComponent()),r.divider(),r.default("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.router.navigate(["phones"],{relativeTo:this.route})),r.default("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.router.navigate(["emails"],{relativeTo:this.route})),r.default("\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","lab_profile",()=>this.router.navigate(["test-classes"],{relativeTo:this.route})),r.default("\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A","science",()=>this.router.navigate(["test-groups"],{relativeTo:this.route})),r.default("\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629","compare_arrows",()=>this.router.navigate(["reference-values"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory;}openSaveComponent(){this.dialog.open(P,{data:this.laboratory}).afterClosed().pipe(C(1)).subscribe(i=>{this.laboratory=i;});}};t.ɵfac=function(o){return new(o||t)(m($),m(I),m(L));},t.ɵcmp=M({type:t,selectors:[["medisy-laboratory-laboratory"]],features:[T([])],decls:10,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card"]],template:function(o,a){o&1&&(p(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),h(3),n(),p(4,"span",2),h(5),n()(),f(6,"sz-ui-menu",3),n(),p(7,"div",4),g(8,N,1,1,"sz-ui-card",5,z),n()),o&2&&(s(3),v(a.laboratory.name),s(2),v(a.laboratory.description),s(1),c("menu",a.laboratoryMenu),S(8,a.tiles));},dependencies:[d,l,u],encapsulation:2});let e=t;return e;})();var A=[{path:"",component:k},{path:"phones",loadComponent:()=>import("./chunk-LBJ3IVYK.js").then(e=>e.LaboratoryPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-OHUBCDQP.js").then(e=>e.LaboratoryEmailsComponent)},{path:"test-classes",loadComponent:()=>import("./chunk-2O5LVCIM.js").then(e=>e.LaboratoryTestClassesComponent)},{path:"test-groups",loadComponent:()=>import("./chunk-H7ARNTRV.js").then(e=>e.LaboratoryTestGroupsComponent)},{path:"reference-values",loadComponent:()=>import("./chunk-EAW6R7IY.js").then(e=>e.LaboratoryReferenceValuesComponent)}];var ue=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=y({providers:[x],imports:[R.forChild(A),j,w,E,D,d,B,l,u]});let e=t;return e;})();export{ue as LaboratoryModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/