import{a as x}from"./chunk-CXW2QJHV.js";import{a as y}from"./chunk-3LJ3OUCY.js";import{a as c}from"./chunk-T5E2E76R.js";import{a as S,b as M}from"./chunk-HH5M6JJS.js";import{a as P}from"./chunk-QW6HGORB.js";import{a}from"./chunk-ZBDJ3JDC.js";import{a as i}from"./chunk-IDQKS733.js";import{a as A}from"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import{a as e}from"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import{r as T}from"./chunk-4I74CWZL.js";import"./chunk-3AQJ5CSK.js";import{Eb as k,Gb as d,Hb as m,Ib as g,Jb as h,Kb as f,Lb as _,Yb as v,bb as p,gc as C,hc as R,ja as l,na as F,nc as G,rb as z,yb as u}from"./chunk-YAUSGWXJ.js";import"./chunk-QXHRBTK3.js";function N(s,n){if(s&1&&(h(0,"sz-ui-card",2)(1,"p",3),C(2),f()()),s&2){let o=n.$implicit;u("card",o),p(2),R(o.content)}}function I(s,n){if(s&1&&(_(0,"sz-ui-app-bar",0),h(1,"div",1),m(2,N,3,2,"sz-ui-card",2,d),f()),s&2){let o=v().$implicit,t=v();u("config",t.getGroupAppBarConfig(o)),p(2),g(o.cards)}}function $(s,n){if(s&1&&z(0,I,4,1),s&2){let o=n.$implicit;k(o.cards.length>0?0:-1)}}var B=(()=>{let n=class n{constructor(){this.router=l(T),this.identityService=l(M),this.appBarConfig={title:e.settings},this.cardGroups=[{id:"admin",title:e.users,cards:[]}],this.identityService.hasResource("medisy-laboratory-api")&&this.cardGroups.push(...this.addMedisySettings()),this.identityService.hasResource("constr-construction-api")&&this.cardGroups.push(...this.AddConstrSettings()),this.identityService.hasResource("softuza-notification-api")&&this.cardGroups.push(...this.addSoftuzaNotificationSettings()),this.identityService.hasResource("softuza-reporting-api")&&this.cardGroups.push(...this.addSoftuzaReportingSettings()),this.identityService.hasResource("softuza-drive-api")&&this.cardGroups.push(...this.addSoftuzaDriveSettings()),this.setupAccessManagementSection()}getGroupAppBarConfig(t){return{title:t.title}}addMedisySettings(){let t=[],r=[{id:"mlab",title:e.laboratories,cards:t}];return t.push({icon:i.biotech,header:{title:e.laboratories,subtitle:e.manage_laboratories},clickFn:()=>this.router.navigate([a.Laboratories])},{icon:i.science,header:{title:e.test_types,subtitle:e.manage_test_types},clickFn:()=>this.router.navigate([a.TestTypes])},{icon:i.science,header:{title:e.test_groups,subtitle:e.manage_test_groups},clickFn:()=>this.router.navigate([a.TestGroups])},{icon:i.compare_arrows,header:{title:e.reference_values,subtitle:e.manage_reference_values},clickFn:()=>this.router.navigate([a.ReferenceValues])},{icon:i.groups,header:{title:e.reference_groups,subtitle:e.manage_reference_groups},clickFn:()=>this.router.navigate([a.ReferenceGroups])},{icon:i.type_specimen,header:{title:e.specimen_types,subtitle:e.view_specimen_types},clickFn:()=>this.router.navigate([a.SpecimenTypes])},{icon:i.people_outline,header:{title:e.referrers,subtitle:e.manage_referrers},clickFn:()=>this.router.navigate([a.Referrers])},{icon:i.local_offer,header:{title:e.price_profiles,subtitle:e.manage_price_profiles},clickFn:()=>this.router.navigate([a.PriceProfiles])},{icon:i.local_offer,header:{title:e.units,subtitle:e.manage_units},clickFn:()=>this.router.navigate([a.Units])}),r}AddConstrSettings(){let t=[];return[]}addSoftuzaNotificationSettings(){let t=[],r=[{id:"snti",title:e.notifications,cards:t}];return t.push({icon:i.notifications,header:{title:e.notifications,subtitle:e.manage_notifications},clickFn:()=>this.router.navigate([c.Notifications])},{icon:i.email,header:{title:e.email_notification,subtitle:e.manage_emails},clickFn:()=>this.router.navigate([c.NotificationEmails])},{icon:i.sms,header:{title:e.sms_notification,subtitle:e.manage_sms},clickFn:()=>this.router.navigate([c.NotificationSmses])},{icon:i.announcement,header:{title:e.push_notification,subtitle:e.manage_push},clickFn:()=>this.router.navigate([c.NotificationPushes])},{icon:i.messages,header:{title:e.messages,subtitle:e.manage_messages},clickFn:()=>this.router.navigate([c.Messages])}),r}addSoftuzaReportingSettings(){let t=[],r=[{id:"srpt",title:e.reporting,cards:t}];return t.push({icon:i.summarize,header:{title:e.templates,subtitle:e.manage_templates},clickFn:()=>this.router.navigate([`/${y.Templates}`])},{icon:i.printer,header:{title:e.printers,subtitle:e.manage_printers},clickFn:()=>this.router.navigate([`/${y.Printers}`])}),r}addSoftuzaDriveSettings(){let t=[],r=[{id:"srpt",title:e.drive,cards:t}];return t.push({icon:i.summarize,header:{title:e.files,subtitle:e.manage_files},clickFn:()=>this.router.navigate([`/${x.Files}`])}),r}setupAccessManagementSection(){let t=this.cardGroups.find(r=>r.id==="admin");t&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&t.cards.push({icon:i.group,header:{title:e.users,subtitle:e.manage_users},clickFn:()=>this.router.navigate([S.Users])}),t.cards.push({icon:i.groups,header:{title:e.groups,subtitle:e.manage_groups},clickFn:()=>this.router.navigate([S.Groups])}))}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=F({type:n,selectors:[["portal-settings"]],standalone:!0,features:[G],decls:3,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,b){r&1&&(_(0,"sz-ui-app-bar",0),m(1,$,1,1,null,null,d)),r&2&&(u("config",b.appBarConfig),p(),g(b.cardGroups))},dependencies:[A,P],encapsulation:2});let s=n;return s})();var Z=[{path:"",component:B}];export{Z as default};
/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/