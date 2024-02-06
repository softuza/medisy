import{d as I}from"./chunk-IPFR7FQ6.js";import{a as o,b as s}from"./chunk-HKPLI37P.js";import{h as F}from"./chunk-JIYGV4IV.js";import"./chunk-EJRHERCA.js";import"./chunk-LDFDSR3K.js";import{a as i}from"./chunk-BUSYHZDZ.js";import{b as c}from"./chunk-K7VJTIK7.js";import{c as M,e as x}from"./chunk-E2DYYESB.js";import"./chunk-R54FJ7AR.js";import{q as S}from"./chunk-OHNFTK26.js";import{Ja as $}from"./chunk-TT7ZQ2V6.js";import{Bb as u,Cb as d,Db as f,Eb as y,Fb as g,Gb as b,dc as C,ea as v,ec as T,fb as l,gb as p,na as z,oa as h,ub as m}from"./chunk-CQJO6ZYU.js";function j(t,e){if(t&1&&(y(0,"sz-ui-card",2)(1,"p",3),C(2),g()()),t&2){let n=e.$implicit;m("card",n),l(2),T(n.content);}}function V(t,e){if(t&1&&(b(0,"sz-ui-header-info",0),y(1,"div",1),d(2,j,3,2,"sz-ui-card",2,u),g()),t&2){let n=e.$implicit;m("title",n.title),l(2),f(n.cards);}}var k=(()=>{let e=class e{constructor(a,r){this.router=a,this.identityService=r,this.sections=[{title:i.laboratories,cards:[{icon:"biotech",type:o.Text,subtitle:i.laboratories,title:"Manage laboratories",clickFn:()=>this.router.navigate(["/mlab/laboratories"])},{icon:"lab_profile",type:o.Text,subtitle:i.testClasses,content:"View test classes",clickFn:()=>this.router.navigate(["/mlab/test-classes"])},{icon:"science",type:o.Text,subtitle:i.testTypes,content:"Manage Test groups",clickFn:()=>this.router.navigate(["/mlab/test-types"])},{icon:"compare_arrows",type:o.Text,subtitle:i.referenceValues,content:"Manage Reference Values",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",type:o.Text,subtitle:i.specimenTypes,content:"View Specimen Types",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])}]},{title:i.users,cards:[{icon:"group",type:o.Text,subtitle:i.users,title:"Manage users",clickFn:()=>this.router.navigate(["/admin/users"])}]},{title:i.notifications,cards:[{icon:"notifications",type:o.Text,subtitle:i.notifications,title:"Manage notifications",clickFn:()=>this.router.navigate(["/snti/notifications"])}]},{title:"Reporting",cards:[{icon:"summarize",type:o.Text,subtitle:"Reports",title:"Manage reports",clickFn:()=>this.router.navigate(["/srpt/reports"])}]}];}};e.ɵfac=function(r){return new(r||e)(p(M),p(I));},e.ɵcmp=z({type:e,selectors:[["medisy-settings"]],decls:2,vars:0,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,R){r&1&&d(0,V,4,1,null,null,u),r&2&&f(R.sections);},dependencies:[s,c],encapsulation:2});let t=e;return t;})();var _=[{path:"",component:k}];var te=(()=>{let e=class e{};e.ɵfac=function(r){return new(r||e)();},e.ɵmod=h({type:e}),e.ɵinj=v({imports:[x.forChild(_),F,$,s,S,c]});let t=e;return t;})();export{te as SettingsModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/