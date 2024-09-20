import{a as x}from"./chunk-MQRGCQ3S.js";import{a as y}from"./chunk-JSLQP7DR.js";import{a as c}from"./chunk-6YVLM3TN.js";import{a as S,b as M}from"./chunk-RYCC5BSY.js";import{a as P}from"./chunk-7VZFPPSX.js";import{a as n}from"./chunk-DDV3ZTDK.js";import{a as i}from"./chunk-MFJGOIE4.js";import{a as A}from"./chunk-KPHZXQ4R.js";import"./chunk-53QS6UIR.js";import"./chunk-TM26YT7E.js";import{a as t}from"./chunk-XYHX3JVK.js";import"./chunk-FZND2MZR.js";import{r as T}from"./chunk-CVZW7JYW.js";import"./chunk-OKKKBEFN.js";import{Eb as C,Gb as d,Hb as m,Ib as g,Jb as h,Kb as f,Lb as _,Yb as v,bb as p,gc as k,hc as R,ja as l,na as F,nc as G,rb as z,yb as u}from"./chunk-K7VHIDZW.js";import"./chunk-VARUJZUG.js";function N(s,a){if(s&1&&(h(0,"sz-ui-card",2)(1,"p",3),k(2),f()()),s&2){let o=a.$implicit;u("card",o),p(2),R(o.content)}}function I(s,a){if(s&1&&(_(0,"sz-ui-app-bar",0),h(1,"div",1),m(2,N,3,2,"sz-ui-card",2,d),f()),s&2){let o=v().$implicit,e=v();u("config",e.getGroupAppBarConfig(o)),p(2),g(o.cards)}}function $(s,a){if(s&1&&z(0,I,4,1),s&2){let o=a.$implicit;C(o.cards.length>0?0:-1)}}var B=(()=>{let a=class a{constructor(){this.router=l(T),this.identityService=l(M),this.appBarConfig={title:t.settings},this.cardGroups=[{id:"admin",title:t.users,cards:[]}],this.identityService.hasResource("medisy-laboratory-api")&&this.cardGroups.push(...this.addMedisySettings()),this.identityService.hasResource("constr-construction-api")&&this.cardGroups.push(...this.AddConstrSettings()),this.identityService.hasResource("softuza-notification-api")&&this.cardGroups.push(...this.addSoftuzaNotificationSettings()),this.identityService.hasResource("softuza-reporting-api")&&this.cardGroups.push(...this.addSoftuzaReportingSettings()),this.identityService.hasResource("softuza-drive-api")&&this.cardGroups.push(...this.addSoftuzaDriveSettings()),this.setupAccessManagementSection()}getGroupAppBarConfig(e){return{title:e.title}}addMedisySettings(){let e=[],r=[{id:"mlab",title:t.laboratories,cards:e}];return e.push({icon:i.biotech,header:{title:t.laboratories,subtitle:t.manage_laboratories},clickFn:()=>this.router.navigate([n.Laboratories])},{icon:i.science,header:{title:t.test_types,subtitle:t.manage_test_types},clickFn:()=>this.router.navigate([n.TestTypes])},{icon:i.science,header:{title:t.test_groups,subtitle:t.manage_test_groups},clickFn:()=>this.router.navigate([n.TestGroups])},{icon:i.compare_arrows,header:{title:t.reference_values,subtitle:t.manage_reference_values},clickFn:()=>this.router.navigate([n.ReferenceValues])},{icon:i.type_specimen,header:{title:t.specimen_types,subtitle:t.view_specimen_types},clickFn:()=>this.router.navigate([n.SpecimenTypes])},{icon:i.people_outline,header:{title:t.referrers,subtitle:t.manage_referrers},clickFn:()=>this.router.navigate([n.Referrers])},{icon:i.local_offer,header:{title:t.price_profiles,subtitle:t.manage_price_profiles},clickFn:()=>this.router.navigate([n.PriceProfiles])}),r}AddConstrSettings(){let e=[];return[]}addSoftuzaNotificationSettings(){let e=[],r=[{id:"snti",title:t.notifications,cards:e}];return e.push({icon:i.notifications,header:{title:t.notifications,subtitle:t.manage_notifications},clickFn:()=>this.router.navigate([c.Notifications])},{icon:i.email,header:{title:t.email_notification,subtitle:t.manage_emails},clickFn:()=>this.router.navigate([c.NotificationEmails])},{icon:i.sms,header:{title:t.sms_notification,subtitle:t.manage_sms},clickFn:()=>this.router.navigate([c.NotificationSmses])},{icon:i.announcement,header:{title:t.push_notification,subtitle:t.manage_push},clickFn:()=>this.router.navigate([c.NotificationPushes])},{icon:i.messages,header:{title:t.messages,subtitle:t.manage_messages},clickFn:()=>this.router.navigate([c.Messages])}),r}addSoftuzaReportingSettings(){let e=[],r=[{id:"srpt",title:t.reporting,cards:e}];return e.push({icon:i.summarize,header:{title:t.templates,subtitle:t.manage_templates},clickFn:()=>this.router.navigate([`/${y.Templates}`])},{icon:i.printer,header:{title:t.printers,subtitle:t.manage_printers},clickFn:()=>this.router.navigate([`/${y.Printers}`])}),r}addSoftuzaDriveSettings(){let e=[],r=[{id:"srpt",title:t.drive,cards:e}];return e.push({icon:i.summarize,header:{title:t.files,subtitle:t.manage_files},clickFn:()=>this.router.navigate([`/${x.Files}`])}),r}setupAccessManagementSection(){let e=this.cardGroups.find(r=>r.id==="admin");e&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&e.cards.push({icon:i.group,header:{title:t.users,subtitle:t.manage_users},clickFn:()=>this.router.navigate([S.Users])}),e.cards.push({icon:i.groups,header:{title:t.groups,subtitle:t.manage_groups},clickFn:()=>this.router.navigate([S.Groups])}))}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=F({type:a,selectors:[["portal-settings"]],standalone:!0,features:[G],decls:3,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(r,b){r&1&&(_(0,"sz-ui-app-bar",0),m(1,$,1,1,null,null,d)),r&2&&(u("config",b.appBarConfig),p(),g(b.cardGroups))},dependencies:[A,P],encapsulation:2});let s=a;return s})();var Z=[{path:"",component:B}];export{Z as default};
/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/