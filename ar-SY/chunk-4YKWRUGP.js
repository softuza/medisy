import{a}from"./chunk-QCCXK74U.js";import{b as I}from"./chunk-6GUKOXD6.js";import{a as c}from"./chunk-HIF2EYTK.js";import"./chunk-4WMKGAQA.js";import{a as s}from"./chunk-3TCVELMY.js";import{g as N}from"./chunk-VN32AWOL.js";import"./chunk-3ZRLT6ZM.js";import{h as T}from"./chunk-2O3PA6GN.js";import{b as x,c as t}from"./chunk-NXGV7MLA.js";import"./chunk-FDTJH5UN.js";import{c as C,e as k}from"./chunk-HMSPALCE.js";import{ha as R}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Db as z,Fb as u,Gb as d,Hb as f,Ib as g,Jb as h,Kb as S,Xb as _,ab as l,bb as p,ea as v,ec as F,fc as $,na as b,oa as y,ub as M,yb as m}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";function B(i,e){if(i&1&&(g(0,"sz-ui-card",2)(1,"p",3),F(2),h()()),i&2){let r=e.$implicit;m("card",r),l(2),$(r.content);}}function D(i,e){if(i&1&&(S(0,"sz-ui-app-bar",0),g(1,"div",1),d(2,B,3,2,"sz-ui-card",2,u),h()),i&2){let r=_().$implicit;m("title",r.title),l(2),f(r.cards);}}function E(i,e){if(i&1&&M(0,D,4,1),i&2){let r=e.$implicit;z(r.cards.length>0?0:-1);}}var j=(()=>{let e=class e{constructor(n,o){this.router=n,this.identityService=o,this.sections=[{id:"mlab",title:t.laboratories,cards:[]},{id:"admin",title:t.users,cards:[]},{id:"snti",title:t.notifications,cards:[{icon:"notifications",title:t.notifications,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate([`/${a.Notifications}`])},{icon:"email",title:t.email_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",clickFn:()=>this.router.navigate([`/${a.NotificationEmails}`])},{icon:"sms",title:t.sms_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0635\u064A\u0629",clickFn:()=>this.router.navigate([`/${a.NotificationSmses}`])},{icon:"announcement",title:t.push_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062F\u0641\u0639\u064A\u0629",clickFn:()=>this.router.navigate([`/${a.NotificationPushes}`])},{icon:"messages",title:t.messages,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644",clickFn:()=>this.router.navigate(["/snti/messages"])}]},{id:"srpt",title:t.reporting,cards:[{icon:"summarize",title:t.reports,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",clickFn:()=>this.router.navigate(["/srpt/reports"])},{icon:N.printer,title:t.printers,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/srpt/printers"])}]}],this.setupMedisyLaboratory(),this.setupAccessManagementSection();}setupAccessManagementSection(){let n=this.sections.find(o=>o.id==="admin");n&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&n.cards.push({icon:"group",title:t.users,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",clickFn:()=>this.router.navigate(["/iam/users"])}),n.cards.push({icon:"groups",title:t.groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/iam/groups"])}));}setupMedisyLaboratory(){let n=this.sections.find(o=>o.id==="mlab");n&&this.identityService.hasResource("medisy-laboratory-api")&&n.cards.push({icon:"biotech",title:t.laboratories,subtitle:t.manage_laboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"])},{icon:"science",title:t.test_types,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-types"])},{icon:"science",title:t.test_groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-groups"])},{icon:"compare_arrows",title:t.reference_values,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",title:t.specimen_types,subtitle:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])});}};e.ɵfac=function(o){return new(o||e)(p(C),p(I));},e.ɵcmp=b({type:e,selectors:[["portal-settings"]],decls:2,vars:0,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(o,w){o&1&&d(0,E,1,1,null,null,u),o&2&&f(w.sections);},dependencies:[c,s],encapsulation:2});let i=e;return i;})();var it=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=y({type:e}),e.ɵinj=v({imports:[k.forChild([{path:"",component:j}]),T,R,c,x,s]});let i=e;return i;})();export{it as SettingsModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/