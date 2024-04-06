import{a as $}from"./chunk-UVLKQSOZ.js";import{a}from"./chunk-SG62NP5Y.js";import{h as I}from"./chunk-Z3ELZRWE.js";import"./chunk-45QWRYCQ.js";import{a as s}from"./chunk-6MMOYJEJ.js";import{g as x}from"./chunk-QT6JCYGS.js";import"./chunk-2NAL3ARI.js";import"./chunk-EY4PTUQV.js";import{b as R,c as e}from"./chunk-QXIIYWNN.js";import"./chunk-22G3BWVW.js";import{c as _,e as k}from"./chunk-L6HNREY7.js";import{ha as T}from"./chunk-QHXZELMZ.js";import"./chunk-TWGSABWX.js";import{Db as p,Ib as M,Kb as m,Lb as u,Mb as d,Nb as f,Ob as g,Pb as z,ac as C,hb as c,ib as l,jc as S,ka as h,kc as F,ua as y,va as v,zb as b}from"./chunk-XPH4NMLC.js";function B(i,t){if(i&1&&(f(0,"sz-ui-card",2)(1,"p",3),S(2),g()()),i&2){let n=t.$implicit;p("card",n),c(2),F(n.content);}}function L(i,t){if(i&1&&(z(0,"sz-ui-app-bar",0),f(1,"div",1),u(2,B,3,2,"sz-ui-card",2,m),g()),i&2){let n=C().$implicit;p("title",n.title),c(2),d(n.cards);}}function D(i,t){if(i&1&&b(0,L,4,1),i&2){let n=t.$implicit;M(0,n.cards.length>0?0:-1);}}var j=(()=>{let t=class t{constructor(o,r){this.router=o,this.identityService=r,this.sections=[{id:"mlab",title:e.laboratories,cards:[]},{id:"admin",title:e.users,cards:[]},{id:"snti",title:e.notifications,cards:[{icon:"notifications",title:e.notifications,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/snti/notifications"])},{icon:"messages",title:e.messages,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644",clickFn:()=>this.router.navigate(["/snti/messages"])}]},{id:"srpt",title:e.reporting,cards:[{icon:"summarize",title:e.templates,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u0648\u0627\u0644\u0628",clickFn:()=>this.router.navigate(["/srpt/templates"])},{icon:x.printer,title:e.printers,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/srpt/printers"])}]}],this.setupMedisyLaboratory(),this.setupAccessManagementSection();}setupAccessManagementSection(){let o=this.sections.find(r=>r.id==="admin");o&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&o.cards.push({icon:"group",title:e.users,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",clickFn:()=>this.router.navigate(["/iam/users"])}),o.cards.push({icon:"groups",title:e.groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/iam/groups"])}));}setupMedisyLaboratory(){let o=this.sections.find(r=>r.id==="mlab");o&&this.identityService.hasResource("medisy-laboratory-api")&&o.cards.push({icon:"biotech",title:e.laboratories,subtitle:e.manageLaboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"])},{icon:"science",title:e.testTypes,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-types"])},{icon:"science",title:e.testGroups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-groups"])},{icon:"compare_arrows",title:e.referenceValues,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",title:e.specimenTypes,subtitle:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])});}};t.ɵfac=function(r){return new(r||t)(l(_),l($));},t.ɵcmp=y({type:t,selectors:[["portal-settings"]],decls:2,vars:0,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,w){r&1&&u(0,D,1,1,null,null,m),r&2&&d(w.sections);},dependencies:[a,s],encapsulation:2});let i=t;return i;})();var tt=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=v({type:t}),t.ɵinj=h({imports:[k.forChild([{path:"",component:j}]),I,T,a,R,s]});let i=t;return i;})();export{tt as SettingsModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/