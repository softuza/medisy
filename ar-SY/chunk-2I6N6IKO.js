import{a as M,b as n,c as T}from"./chunk-2AZRRGWF.js";import"./chunk-YECODXW4.js";import{a as I}from"./chunk-DQFF7ZV7.js";import{a as r}from"./chunk-UAYSNPL7.js";import{b as a}from"./chunk-2H6GRCHT.js";import"./chunk-HUJ4SFSJ.js";import{c as z,e as S}from"./chunk-7TGQVE3C.js";import"./chunk-HXVM5UCI.js";import"./chunk-QCDHUYXG.js";import{Ua as g}from"./chunk-53RWJDYX.js";import{Bb as C,Cb as v,Db as c,Zb as b,da as d,db as s,la as l,ma as f,nb as m,wb as u,xb as h,yb as y}from"./chunk-M2QTEBXZ.js";function N(t,e){if(t&1&&c(0,"sz-ui-card",2),t&2){let w=e.$implicit;m("card",w);}}var F=(()=>{let e=class e{constructor(o,i){this.mlabService=o,this.router=i,this.tiles=[],this.title=I.dashboard,this.buildTiles();}buildTiles(){let o={icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",type:M.Counter,clickFn:()=>this.navigate("/mlab/analyses"),actions:[T.action("\u062C\u062F\u064A\u062F",()=>this.navigate("/mlab/analyses/create"))]};this.mlabService.analyses.count().subscribe(i=>{o.title=i;}),this.tiles.push(o);}navigate(o){this.router.navigate([o]);}};e.ɵfac=function(i){return new(i||e)(s(r),s(z));},e.ɵcmp=l({type:e,selectors:[["medisy-dashboard"]],features:[b([r])],decls:4,vars:1,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"]],template:function(i,p){i&1&&(c(0,"sz-ui-header-info",0),C(1,"div",1),h(2,N,1,1,"sz-ui-card",2,u),v()),i&2&&(m("title",p.title),y(2,p.tiles));},dependencies:[a,n],encapsulation:2});let t=e;return t;})();var j=[{path:"",component:F}];var V=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=f({type:e}),e.ɵinj=d({imports:[S.forChild(j),g,a,n]});let t=e;return t;})();export{V as DashboardModule};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/