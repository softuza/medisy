import{a as K,b as f,c as Q}from"./chunk-NPU22HRB.js";import"./chunk-JIYGV4IV.js";import{a as l}from"./chunk-BUSYHZDZ.js";import{a as s}from"./chunk-VU3TSLPI.js";import{h as U,i as W,j as X,m as Y}from"./chunk-DJTHGJMD.js";import{b as u}from"./chunk-KIWKP6WG.js";import{d as q}from"./chunk-EVZ4I5QA.js";import{a as $,b as E,d as G,e as O,g as V}from"./chunk-VQ3CVIXE.js";import{A as N}from"./chunk-75XLR4TY.js";import{q as H,t as P,w as k,y as x}from"./chunk-VZUJMTKN.js";import{i as y,j as J}from"./chunk-FVDEVSJ2.js";import"./chunk-OHNFTK26.js";import{Ja as B,r as w}from"./chunk-TT7ZQ2V6.js";import{Bb as F,Cb as j,Db as T,Eb as R,Fb as A,Gb as m,a as S,b as C,da as b,ea as M,fb as p,gb as a,gc as d,ja as z,jc as L,na as c,nb as D,oa as I,ub as n}from"./chunk-CQJO6ZYU.js";var h=(()=>{let t=class t{constructor(e){this.http=e,this.basePath="softuza-portal",this.tiles=new q(this.http,`${this.basePath}/v1/tiles`)}};t.\u0275fac=function(i){return new(i||t)(z(w))},t.\u0275prov=b({token:t,factory:t.\u0275fac});let o=t;return o})();var Z=(()=>{let t=class t extends U{constructor(e,i,r,v){super(r),this.mlabService=e,this.fb=i,this.dialog=r,this.data=v,this.form=i.group({})}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,C(S({},this.data),{note:this.form.value.note})))}};t.\u0275fac=function(i){return new(i||t)(a(s),a(H),a($),a(E))},t.\u0275cmp=c({type:t,selectors:[["medisy-dashboard-save"]],standalone:!0,features:[d([s]),D,L],decls:3,vars:2,consts:[[3,"header"],[3,"actions"]],template:function(i,r){i&1&&m(0,"sz-ui-dialog-header",0)(1,"mat-dialog-content")(2,"sz-ui-dialog-actions",1),i&2&&(n("header",r.header),p(2),n("actions",r.actions))},dependencies:[P,V,O,Y,W,X,N],encapsulation:2});let o=t;return o})();function at(o,t){if(o&1&&m(0,"sz-ui-card",2),o&2){let et=t.$implicit;n("card",et)}}var _=(()=>{let t=class t{constructor(e,i,r,v){this.mlabService=e,this.sprtService=i,this.dialog=r,this.router=v,this.tiles=[],this.title=l.dashboard,this.menu=J.more([y.edit(()=>this.openSaveComponent()),y.divider()]),this.buildTiles(),this.get()}openSaveComponent(){this.dialog.open(Z,{data:null}).afterClosed().subscribe(e=>{})}buildTiles(){let e={icon:"science",subtitle:l.analyses,type:K.Counter,clickFn:()=>this.navigate("/mlab/analyses"),actions:[Q.action(l.add,()=>this.navigate("/mlab/analyses/create"))]};this.mlabService.analyses.count({filters:[]}).subscribe(i=>{e.title=i}),this.tiles.push(e)}navigate(e){this.router.navigate([e])}get(){this.sprtService.tiles.get().subscribe(e=>{console.log(e)})}};t.\u0275fac=function(i){return new(i||t)(a(s),a(h),a(G),a(k))},t.\u0275cmp=c({type:t,selectors:[["medisy-dashboard"]],features:[d([s,h])],decls:4,vars:2,consts:[[3,"title","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(i,r){i&1&&(m(0,"sz-ui-header-info",0),R(1,"div",1),j(2,at,1,1,"sz-ui-card",2,F),A()),i&2&&(n("title",r.title)("menu",r.menu),p(2),T(r.tiles))},dependencies:[u,f],encapsulation:2});let o=t;return o})();var tt=[{path:"",component:_}];var $t=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=I({type:t}),t.\u0275inj=M({imports:[x.forChild(tt),B,u,f]});let o=t;return o})();export{$t as DashboardModule};
/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/
