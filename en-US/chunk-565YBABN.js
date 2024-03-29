import{a as $}from"./chunk-IQRDUTWM.js";import{a}from"./chunk-YCVBNXEZ.js";import{h as T}from"./chunk-QNM6XM36.js";import{b as s}from"./chunk-THLKM7AJ.js";import"./chunk-CTM64WKY.js";import"./chunk-D5DPYT77.js";import{b as R,c as t}from"./chunk-QA36KWKY.js";import"./chunk-ILI4DACJ.js";import{c as _,e as k}from"./chunk-IWB7BCZA.js";import"./chunk-FBMLFETS.js";import{ha as I}from"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as p,Gb as z,Ib as m,Jb as u,Kb as d,Lb as f,Mb as g,Nb as M,_b as C,gb as c,hb as l,hc as S,ic as F,na as h,oa as y,xb as b,za as v}from"./chunk-75X3YXCS.js";function L(i,e){if(i&1&&(f(0,"sz-ui-card",2)(1,"p",3),S(2),g()()),i&2){let n=e.$implicit;p("card",n),c(2),F(n.content);}}function D(i,e){if(i&1&&(M(0,"sz-ui-header-info",0),f(1,"div",1),u(2,L,3,2,"sz-ui-card",2,m),g()),i&2){let n=C().$implicit;p("title",n.title),c(2),d(n.cards);}}function V(i,e){if(i&1&&b(0,D,4,1),i&2){let n=e.$implicit;z(0,n.cards.length>0?0:-1);}}var x=(()=>{let e=class e{constructor(o,r){this.router=o,this.identityService=r,this.sections=[{id:"mlab",title:t.laboratories,cards:[]},{id:"admin",title:t.users,cards:[]},{id:"snti",title:t.notifications,cards:[{icon:"notifications",title:t.notifications,subtitle:"Manage notifications",clickFn:()=>this.router.navigate(["/snti/notifications"])},{icon:"messages",title:t.messages,subtitle:"Manage messages",clickFn:()=>this.router.navigate(["/snti/messages"])}]},{id:"srpt",title:t.reporting,cards:[{icon:"summarize",title:t.templates,subtitle:"Manage templates",clickFn:()=>this.router.navigate(["/srpt/templates"])},{icon:"printer",title:t.printers,subtitle:"Manage printers",clickFn:()=>this.router.navigate(["/srpt/printers"])}]}],this.setupMedisyLaboratory(),this.setupAdminSection();}setupAdminSection(){let o=this.sections.find(r=>r.id==="admin");o&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&o.cards.push({icon:"group",title:t.users,subtitle:"Manage users",clickFn:()=>this.router.navigate(["/admin/users"])}),o.cards.push({icon:"groups",title:t.groups,subtitle:"Manage groups",clickFn:()=>this.router.navigate(["/admin/groups"])}));}setupMedisyLaboratory(){let o=this.sections.find(r=>r.id==="mlab");o&&this.identityService.hasResource("medisy-laboratory-api")&&o.cards.push({icon:"biotech",title:t.laboratories,subtitle:t.manageLaboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"])},{icon:"science",title:t.testTypes,subtitle:"Manage Test types",clickFn:()=>this.router.navigate(["/mlab/test-types"])},{icon:"science",title:t.testGroups,subtitle:"Manage Test groups",clickFn:()=>this.router.navigate(["/mlab/test-groups"])},{icon:"compare_arrows",title:t.referenceValues,subtitle:"Manage Reference Values",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",title:t.specimenTypes,subtitle:"View Specimen Types",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])});}};e.ɵfac=function(r){return new(r||e)(l(_),l($));},e.ɵcmp=h({type:e,selectors:[["portal-settings"]],decls:2,vars:0,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,j){r&1&&u(0,V,1,1,null,null,m),r&2&&d(j.sections);},dependencies:[a,s],encapsulation:2});let i=e;return i;})();var Y=(()=>{let e=class e{};e.ɵfac=function(r){return new(r||e)();},e.ɵmod=y({type:e}),e.ɵinj=v({imports:[k.forChild([{path:"",component:x}]),T,I,a,R,s]});let i=e;return i;})();export{Y as SettingsModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/