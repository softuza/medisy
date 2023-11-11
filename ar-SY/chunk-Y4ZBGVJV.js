import{a as u,b as f}from"./chunk-S376QVGE.js";import"./chunk-PD6EMHNS.js";import{a as v,b,c as L}from"./chunk-XZKIKMRN.js";import"./chunk-KGIHDKZN.js";import{a as y}from"./chunk-O4JAUULY.js";import{a as d}from"./chunk-ZJOQORU4.js";import"./chunk-3UYL57HA.js";import{d as k,g as w}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import{a as O}from"./chunk-CVEGPM57.js";import"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import"./chunk-M3UESULM.js";import{c as B}from"./chunk-PTJACGQS.js";import"./chunk-UNCYENX6.js";import"./chunk-VRISEVPV.js";import{v as R}from"./chunk-GJY7U5GZ.js";import{a as n}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as l}from"./chunk-PIKBUH2I.js";import{a as h}from"./chunk-QDC3ZTFW.js";import{I as E,K as N,M as x,Wa as $,i as A,q as D}from"./chunk-NC2N2FCX.js";import{$a as T,Ab as c,Bb as m,Cb as S,L as g,Wb as C,Xb as M,Zb as j,ea as z,eb as a,fb as s,ma as I,na as P,pb as p,vb as F}from"./chunk-3CXVAQY6.js";function V(t,e){if(t&1&&S(0,"sz-ui-card",6),t&2){let G=e.$implicit;p("card",G);}}var H=(()=>{let e=class e{constructor(o,i,r,J,K,Q){this.dialog=o,this.route=i,this.router=r,this.mlabService=J,this.mpplService=K,this.personNamePipe=Q,this.alert$=T(void 0),this.testsDataSource=new B(l.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=L.more([b.edit(()=>this.openEditComponent),b.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles();}buildTiles(){let o={icon:"science",subtitle:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:u.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},i={icon:"label",subtitle:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:u.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,l.count()).subscribe(r=>{o.title=r;}),this.mlabService.analyses.specimens.count(this.analysis.id,l.count()).subscribe(r=>{i.title=r;}),this.tiles.push(o),this.tiles.push(i);}getPerson(){this.analysis.personId&&this.mpplService.persons.getById(this.analysis.personId).pipe(g(1)).subscribe(o=>{this.tiles.splice(0,0,{icon:"person",type:u.Text,subtitle:"\u0627\u0644\u0645\u0631\u064A\u0636",title:this.personNamePipe.transform(o),clickFn:()=>this.router.navigate([`mppl/persons/${o.id}`])});});}openEditComponent(){}};e.ɵfac=function(i){return new(i||e)(s(k),s(E),s(N),s(n),s(d),s(y));},e.ɵcmp=I({type:e,selectors:[["medisy-laboratory-analysis"]],features:[j([n,d,y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(i,r){i&1&&(c(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),C(3),m(),c(4,"span",2),C(5),m()(),S(6,"sz-ui-menu",3),m(),c(7,"div",4),F(8,V,1,1,"sz-ui-card",5),m()),i&2&&(a(3),M(r.analysis.code),a(2),M(r.analysis.note),a(1),p("menu",r.analysisMenu),a(2),p("ngForOf",r.tiles));},dependencies:[A,h,f,v],encapsulation:2});let t=e;return t;})();var q=[{path:"",component:H},{path:"tests",loadComponent:()=>import("./chunk-QZWUJUGD.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-OAZWXFSS.js").then(t=>t.AnalysisSpecimensComponent)}];var De=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=P({type:e}),e.ɵinj=z({providers:[n],imports:[D,x.forChild(q),w,$,R,h,f,v,O]});let t=e;return t;})();export{De as AnalysisModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/