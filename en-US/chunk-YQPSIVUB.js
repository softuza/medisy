import{a as I,b as n,c as M}from"./chunk-3OJ3K3QJ.js";import"./chunk-VU4DCVQ3.js";import{a as T}from"./chunk-YG5GW4EW.js";import{a as r}from"./chunk-KQSWIXX2.js";import{b as a}from"./chunk-SNKHLPW5.js";import"./chunk-WM5ABWWX.js";import"./chunk-WKFGKHHI.js";import{c as z,e as S}from"./chunk-KIPWFCJ2.js";import"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import{Ua as g}from"./chunk-KZIHA7KF.js";import{$b as b,Bb as C,Cb as v,Db as c,da as d,db as s,la as l,ma as f,nb as m,wb as u,xb as h,yb as y}from"./chunk-6MBKLWBV.js";function N(t,e){if(t&1&&c(0,"sz-ui-card",2),t&2){let w=e.$implicit;m("card",w);}}var F=(()=>{let e=class e{constructor(o,i){this.mlabService=o,this.router=i,this.tiles=[],this.title=T.dashboard,this.buildTiles();}buildTiles(){let o={icon:"science",subtitle:"Analyses",type:I.Counter,clickFn:()=>this.navigate("/mlab/analyses"),actions:[M.action("New",()=>this.navigate("/mlab/analyses/create"))]};this.mlabService.analyses.count().subscribe(i=>{o.title=i;}),this.tiles.push(o);}navigate(o){this.router.navigate([o]);}};e.ɵfac=function(i){return new(i||e)(s(r),s(z));},e.ɵcmp=l({type:e,selectors:[["medisy-dashboard"]],features:[b([r])],decls:4,vars:1,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"]],template:function(i,p){i&1&&(c(0,"sz-ui-header-info",0),C(1,"div",1),h(2,N,1,1,"sz-ui-card",2,u),v()),i&2&&(m("title",p.title),y(2,p.tiles));},dependencies:[a,n],encapsulation:2});let t=e;return t;})();var j=[{path:"",component:F}];var V=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=f({type:e}),e.ɵinj=d({imports:[S.forChild(j),g,a,n]});let t=e;return t;})();export{V as DashboardModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/