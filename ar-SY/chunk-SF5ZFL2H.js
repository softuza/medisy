import{a as H}from"./chunk-ZJBMDFOW.js";import{a as s}from"./chunk-MLK4TN6I.js";import{h as L}from"./chunk-5NLLDK4F.js";import{a as A}from"./chunk-UJRSINNB.js";import{j as E}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as p}from"./chunk-SZPDKKKX.js";import{d as j,e as w,g as i,h as k}from"./chunk-T5LWAZSF.js";import{d as D,g as F}from"./chunk-7HHYVUIJ.js";import"./chunk-PR23273C.js";import{Ba as m,J as S,L as T,N as I}from"./chunk-MNBERY7T.js";import{Ja as R}from"./chunk-6NFGCLSN.js";import{Cb as v,Db as C,Eb as b,Fb as M,Gb as z,Hb as d,M as u,fa as f,gb as y,hb as n,hc as g,oa as c,pa as h,vb as l}from"./chunk-6OQDJKEQ.js";function x(t,e){if(t&1&&d(0,"sz-ui-card",2),t&2){let V=e.$implicit;l("card",V);}}var N=(()=>{let e=class e{constructor(r,o,a){this.dialog=r,this.route=o,this.router=a,this.tiles=[],this.laboratoryMenu=k.more([i.edit(()=>this.openSaveComponent()),i.divider(),i.default(m.phones,"phone",()=>this.router.navigate(["phones"],{relativeTo:this.route})),i.default(m.emails,"alternate_email",()=>this.router.navigate(["emails"],{relativeTo:this.route})),i.default(m.testTypes,"science",()=>this.router.navigate(["test-types"],{relativeTo:this.route})),i.default("\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629","compare_arrows",()=>this.router.navigate(["reference-values"],{relativeTo:this.route}))]),this.laboratory=this.route.snapshot.data.laboratory;}openSaveComponent(){this.dialog.open(H,{data:this.laboratory}).afterClosed().pipe(u(1)).subscribe(r=>{r&&(this.laboratory=r);});}};e.ɵfac=function(o){return new(o||e)(n(D),n(S),n(T));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-mlab-laboratory"]],features:[g([])],decls:4,vars:3,consts:[[3,"title","subtitle","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(o,a){o&1&&(d(0,"sz-ui-header-info",0),M(1,"div",1),C(2,x,1,1,"sz-ui-card",2,v),z()),o&2&&(l("title",a.laboratory.name)("subtitle",a.laboratory.description)("menu",a.laboratoryMenu),y(2),b(a.tiles));},dependencies:[s,p],encapsulation:2});let t=e;return t;})();var P=[{path:"",component:N},{path:"phones",loadComponent:()=>import("./chunk-ICB42ZIG.js").then(t=>t.LaboratoryPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-PMM3TOMJ.js").then(t=>t.LaboratoryEmailsComponent)},{path:"test-types",loadComponent:()=>import("./chunk-ZPPB4XQQ.js").then(t=>t.LaboratoryTestTypesComponent)},{path:"reference-values",loadComponent:()=>import("./chunk-PBI6LWKB.js").then(t=>t.LaboratoryReferenceValuesComponent)}];var dt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=h({type:e}),e.ɵinj=f({providers:[A],imports:[I.forChild(P),F,j,R,L,s,E,w,p]});let t=e;return t;})();export{dt as LaboratoryModule};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/