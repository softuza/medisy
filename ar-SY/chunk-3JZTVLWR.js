import{a as b,b as n,c as A}from"./chunk-S376QVGE.js";import"./chunk-PD6EMHNS.js";import"./chunk-KGIHDKZN.js";import"./chunk-U7VPIABE.js";import{a as r}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import"./chunk-PIKBUH2I.js";import{a}from"./chunk-QDC3ZTFW.js";import{K as M,M as v,Wa as D,i as y,q as g}from"./chunk-NC2N2FCX.js";import{Ab as c,Bb as p,Cb as h,Mb as _,Zb as C,ea as d,eb as u,fb as s,ma as l,na as f,pb as m,vb as S}from"./chunk-3CXVAQY6.js";function T(o,e){if(o&1&&h(0,"sz-ui-card",4),o&2){let E=e.$implicit;m("card",E);}}var z=(()=>{let e=class e{constructor(t,i){this.mlabService=t,this.router=i,this.tiles=[],this.buildTiles();}buildTiles(){let t={icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",type:b.Counter,clickFn:()=>this.navigate("/mlab/analyses"),actions:[A.action("\u062C\u062F\u064A\u062F",()=>this.navigate("/mlab/analyses/create"))]};this.mlabService.analyses.count().subscribe(i=>{t.title=i;}),this.tiles.push(t);}navigate(t){this.router.navigate([t]);}};e.ɵfac=function(i){return new(i||e)(s(r),s(M));},e.ɵcmp=l({type:e,selectors:[["medisy-dashboard"]],features:[C([r])],decls:5,vars:1,consts:()=>{let t;return t="\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",[["start","",1,"sz-h5"],t,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]];},template:function(i,P){i&1&&(c(0,"sz-ui-header-basic")(1,"h5",0),_(2,1),p()(),c(3,"div",2),S(4,T,1,1,"sz-ui-card",3),p()),i&2&&(u(4),m("ngForOf",P.tiles));},dependencies:[y,a,n],encapsulation:2});let o=e;return o;})();var O=[{path:"",component:z}];var Q=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=f({type:e}),e.ɵinj=d({imports:[g,v.forChild(O),D,a,n]});let o=e;return o;})();export{Q as DashboardModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/