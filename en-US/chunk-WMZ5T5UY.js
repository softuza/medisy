import{c as w,e as N,q as k,r as A,s as t}from"./chunk-ED622WBH.js";import{a as R}from"./chunk-63BDPR5Z.js";import{a as s}from"./chunk-3HOMBLD6.js";import{a as E,m as L}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as p}from"./chunk-AZIM6N3H.js";import"./chunk-F2NCOJMX.js";import{d as D,g as j}from"./chunk-GX7FEJ3W.js";import{m as I}from"./chunk-HN3QCICR.js";import{L as z,N as T,s as y,t as C}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ga as _,Ja as F}from"./chunk-ILHRA673.js";import{Eb as c,Fb as u,Gb as M,M as h,Sb as f,ea as S,fb as l,gb as n,gc as v,na as b,oa as g,ub as m}from"./chunk-ORGLCS6N.js";var B=(()=>{let e=class e{constructor(r,o,a){this.dialog=r,this.mlabService=o,this.router=a,this.title=R.testClasses,this.dataSource=new w,this.dataSource.fields.push(t.uuid("id"),t.hyperlink("name",d=>this.router.navigate([`/mlab/test-classes/${d.id}`])),t.string("latinName"),t.string("abbreviation"),t.string("code"),t.string("description"),t.date("createdAt",!1),t.date("updatedAt",!1)),this.get()}get(){this.mlabService.testClasses.get(this.dataSource.buildRequest()).pipe(E(this.dataSource.indicator),h(1)).subscribe(r=>{this.dataSource.set(r.items,r.count)})}};e.\u0275fac=function(o){return new(o||e)(n(D),n(s),n(z))},e.\u0275cmp=b({type:e,selectors:[["medisy-laboratory-test-classes"]],features:[v([s])],decls:3,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],[3,"stateEnabled","dataSource","update"]],template:function(o,a){o&1&&(M(0,"sz-ui-header-info",0),c(1,"sz-ui-table-search-filter",1),f("changed",function(){return a.get()}),u(),c(2,"sz-ui-table",2),f("update",function(){return a.get()}),u()),o&2&&(m("title",a.title),l(),m("dataSource",a.dataSource),l(),m("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[k,N,p],encapsulation:2});let i=e;return i})();var H=[{path:"",component:B}];var Se=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=g({type:e}),e.\u0275inj=S({providers:[s],imports:[y,C,T.forChild(H),j,I,F,_,A,L,p]});let i=e;return i})();export{Se as TestClassesModule};
/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/