import{a,b as v}from"./chunk-PWFRUNFW.js";import{b as I}from"./chunk-ABYGWD2W.js";import{a as c}from"./chunk-RJBVUYI6.js";import"./chunk-FIFCAY3U.js";import{a as s}from"./chunk-HCDVJ2I2.js";import{g as j}from"./chunk-DINSQL77.js";import"./chunk-VZOUZHWP.js";import{h as x}from"./chunk-QO44V4EG.js";import{b as N,c as t}from"./chunk-SXV3ZUGK.js";import"./chunk-CDJ3WT4B.js";import{c as k,e as R}from"./chunk-6KMSPDBU.js";import{ia as T}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Eb as _,Gb as u,Hb as d,Ib as f,Jb as g,Kb as h,Lb as S,Yb as F,bb as l,cb as m,ea as b,hc as $,ic as C,na as y,oa as M,vb as z,zb as p}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";function D(i,e){if(i&1&&(g(0,"sz-ui-card",2)(1,"p",3),$(2),h()()),i&2){let r=e.$implicit;p("card",r),l(2),C(r.content);}}function E(i,e){if(i&1&&(S(0,"sz-ui-app-bar",0),g(1,"div",1),d(2,D,3,2,"sz-ui-card",2,u),h()),i&2){let r=F().$implicit;p("title",r.title),l(2),f(r.cards);}}function L(i,e){if(i&1&&z(0,E,4,1),i&2){let r=e.$implicit;_(r.cards.length>0?0:-1);}}var w=(()=>{let e=class e{constructor(n,o){this.router=n,this.identityService=o,this.sections=[{id:"mlab",title:t.laboratories,cards:[]},{id:"admin",title:t.users,cards:[]},{id:"snti",title:t.notifications,cards:[{icon:"notifications",title:t.notifications,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate([`/${a.Notifications}`])},{icon:"email",title:t.email_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",clickFn:()=>this.router.navigate([`/${a.NotificationEmails}`])},{icon:"sms",title:t.sms_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0635\u064A\u0629",clickFn:()=>this.router.navigate([`/${a.NotificationSmses}`])},{icon:"announcement",title:t.push_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062F\u0641\u0639\u064A\u0629",clickFn:()=>this.router.navigate([`/${a.NotificationPushes}`])},{icon:"messages",title:t.messages,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644",clickFn:()=>this.router.navigate(["/snti/messages"])}]},{id:"srpt",title:t.reporting,cards:[{icon:"summarize",title:t.templates,subtitle:t.manage_templates,clickFn:()=>this.router.navigate([`/${v.Templates}`])},{icon:j.printer,title:t.printers,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",clickFn:()=>this.router.navigate([`/${v.Printers}`])}]}],this.setupMedisyLaboratory(),this.setupAccessManagementSection();}setupAccessManagementSection(){let n=this.sections.find(o=>o.id==="admin");n&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&n.cards.push({icon:"group",title:t.users,subtitle:t.manage_users,clickFn:()=>this.router.navigate(["/iam/users"])}),n.cards.push({icon:"groups",title:t.groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/iam/groups"])}));}setupMedisyLaboratory(){let n=this.sections.find(o=>o.id==="mlab");n&&this.identityService.hasResource("medisy-laboratory-api")&&n.cards.push({icon:"biotech",title:t.laboratories,subtitle:t.manage_laboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"])},{icon:"science",title:t.test_types,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-types"])},{icon:"science",title:t.test_groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-groups"])},{icon:"compare_arrows",title:t.reference_values,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",title:t.specimen_types,subtitle:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])});}};e.ɵfac=function(o){return new(o||e)(m(k),m(I));},e.ɵcmp=y({type:e,selectors:[["portal-settings"]],decls:2,vars:0,consts:[[3,"title"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(o,A){o&1&&d(0,L,1,1,null,null,u),o&2&&f(A.sections);},dependencies:[c,s],encapsulation:2});let i=e;return i;})();var nt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=M({type:e}),e.ɵinj=b({imports:[R.forChild([{path:"",component:w}]),x,T,c,N,s]});let i=e;return i;})();export{nt as SettingsModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/