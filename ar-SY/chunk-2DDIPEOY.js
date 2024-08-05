import{a as s,b as a,c as y}from"./chunk-I3YSOZKF.js";import{b as N}from"./chunk-S6DORG5V.js";import{a as u}from"./chunk-LRMAXIYS.js";import"./chunk-3Q7NLQRN.js";import{a as l}from"./chunk-4APH4GGR.js";import{g as j}from"./chunk-3HX3ISKW.js";import{h as B}from"./chunk-3CG52MMS.js";import{b as I,c as t}from"./chunk-K3B67OJW.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{c as G,e as x}from"./chunk-U4LXFUUA.js";import{ia as A}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Eb as k,Gb as m,Hb as d,Ib as g,Jb as f,Kb as h,Lb as S,Yb as v,bb as c,cb as F,ea as M,hc as $,ic as T,ja as C,na as _,oa as b,vb as R,zb as p}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";function E(o,e){if(o&1&&(f(0,"sz-ui-card",2)(1,"p",3),$(2),h()()),o&2){let n=e.$implicit;p("card",n),c(2),T(n.content);}}function L(o,e){if(o&1&&(S(0,"sz-ui-app-bar",0),f(1,"div",1),d(2,E,3,2,"sz-ui-card",2,m),h()),o&2){let n=v().$implicit,i=v();p("config",i.getGroupAppBarConfig(n)),c(2),g(n.cards);}}function P(o,e){if(o&1&&R(0,L,4,1),o&2){let n=e.$implicit;k(n.cards.length>0?0:-1);}}var w=(()=>{let e=class e{constructor(i){this.router=i,this.identityService=C(N),this.appBarConfig={title:t.settings},this.cardGroups=[{id:"admin",title:t.users,cards:[]}],this.identityService.hasResource("medisy-laboratory-api")&&this.cardGroups.push(...this.addMedisySettings()),this.identityService.hasResource("constr-construction-api")&&this.cardGroups.push(...this.AddConstrSettings()),this.identityService.hasResource("softuza-notification-api")&&this.cardGroups.push(...this.addSoftuzaNotificationSettings()),this.identityService.hasResource("softuza-reporting-api")&&this.cardGroups.push(...this.addSoftuzaReportingSettings()),this.setupAccessManagementSection();}getGroupAppBarConfig(i){return{title:i.title};}addMedisySettings(){let i=[],r=[{id:"mlab",title:t.laboratories,cards:i}];return i.push({icon:"biotech",title:t.laboratories,subtitle:t.manage_laboratories,clickFn:()=>this.router.navigate([s.Laboratories])},{icon:"science",title:t.test_types,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate([s.TestTypes])},{icon:"science",title:t.test_groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate([s.TestGroups])},{icon:"compare_arrows",title:t.reference_values,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",clickFn:()=>this.router.navigate([s.ReferenceValues])},{icon:"type_specimen",title:t.specimen_types,subtitle:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clickFn:()=>this.router.navigate([s.SpecimenTypes])}),r;}AddConstrSettings(){let i=[];return[];}addSoftuzaNotificationSettings(){let i=[],r=[{id:"snti",title:t.notifications,cards:i}];return i.push({icon:"notifications",title:t.notifications,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate([a.Notifications])},{icon:"email",title:t.email_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",clickFn:()=>this.router.navigate([a.NotificationEmails])},{icon:"sms",title:t.sms_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0635\u064A\u0629",clickFn:()=>this.router.navigate([a.NotificationSmses])},{icon:"announcement",title:t.push_notification,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062F\u0641\u0639\u064A\u0629",clickFn:()=>this.router.navigate([a.NotificationPushes])},{icon:"messages",title:t.messages,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644",clickFn:()=>this.router.navigate([a.Messages])}),r;}addSoftuzaReportingSettings(){let i=[],r=[{id:"srpt",title:t.reporting,cards:i}];return i.push({icon:"summarize",title:t.templates,subtitle:t.manage_templates,clickFn:()=>this.router.navigate([`/${y.Templates}`])},{icon:j.printer,title:t.printers,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",clickFn:()=>this.router.navigate([`/${y.Printers}`])}),r;}setupAccessManagementSection(){let i=this.cardGroups.find(r=>r.id==="admin");i&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&i.cards.push({icon:"group",title:t.users,subtitle:t.manage_users,clickFn:()=>this.router.navigate(["/iam/users"])}),i.cards.push({icon:"groups",title:t.groups,subtitle:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",clickFn:()=>this.router.navigate(["/iam/groups"])}));}};e.ɵfac=function(r){return new(r||e)(F(G));},e.ɵcmp=_({type:e,selectors:[["portal-settings"]],decls:3,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,z){r&1&&(S(0,"sz-ui-app-bar",0),d(1,P,1,1,null,null,m)),r&2&&(p("config",z.appBarConfig),c(),g(z.cardGroups));},dependencies:[u,l],encapsulation:2});let o=e;return o;})();var at=(()=>{let e=class e{};e.ɵfac=function(r){return new(r||e)();},e.ɵmod=b({type:e}),e.ɵinj=M({imports:[x.forChild([{path:"",component:w}]),B,A,u,I,l]});let o=e;return o;})();export{at as SettingsModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/