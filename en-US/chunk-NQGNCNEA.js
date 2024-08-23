import{a as b}from"./chunk-IJKLPGDJ.js";import{a as c}from"./chunk-6W4JWGMQ.js";import{a as y,b as B}from"./chunk-LPNPAHCS.js";import{a as l}from"./chunk-EW6N7LBZ.js";import{a as n}from"./chunk-CZSDKHXK.js";import{a as m}from"./chunk-MOAPW72V.js";import{e as r}from"./chunk-LZ3HWPNB.js";import{h as j}from"./chunk-UJCEDBUS.js";import{b as w}from"./chunk-H7W7YGPD.js";import{Y as t}from"./chunk-6JNKTIUK.js";import{c as I,e as N}from"./chunk-NBEPCNAY.js";import{ia as $}from"./chunk-UUEM5JJT.js";import"./chunk-PSZD7437.js";import{Fb as T,Hb as d,Ib as f,Jb as g,Kb as h,Lb as _,Mb as v,Zb as S,bb as p,cb as M,ea as F,hc as x,ic as A,ja as z,na as R,oa as k,vb as G,zb as u}from"./chunk-IKPHE33N.js";import"./chunk-EAIILSS5.js";function E(o,i){if(o&1&&(h(0,"sz-ui-card",2)(1,"p",3),x(2),_()()),o&2){let a=i.$implicit;u("card",a),p(2),A(a.content)}}function L(o,i){if(o&1&&(v(0,"sz-ui-app-bar",0),h(1,"div",1),f(2,E,3,2,"sz-ui-card",2,d),_()),o&2){let a=S().$implicit,e=S();u("config",e.getGroupAppBarConfig(a)),p(2),g(a.cards)}}function U(o,i){if(o&1&&G(0,L,4,1),o&2){let a=i.$implicit;T(a.cards.length>0?0:-1)}}var P=(()=>{let i=class i{constructor(e){this.router=e,this.identityService=z(B),this.appBarConfig={title:t.settings},this.cardGroups=[{id:"admin",title:t.users,cards:[]}],this.identityService.hasResource("medisy-laboratory-api")&&this.cardGroups.push(...this.addMedisySettings()),this.identityService.hasResource("constr-construction-api")&&this.cardGroups.push(...this.AddConstrSettings()),this.identityService.hasResource("softuza-notification-api")&&this.cardGroups.push(...this.addSoftuzaNotificationSettings()),this.identityService.hasResource("softuza-reporting-api")&&this.cardGroups.push(...this.addSoftuzaReportingSettings()),this.setupAccessManagementSection()}getGroupAppBarConfig(e){return{title:e.title}}addMedisySettings(){let e=[],s=[{id:"mlab",title:t.laboratories,cards:e}];return e.push({icon:r.biotech,header:{title:t.laboratories,subtitle:t.manage_laboratories},clickFn:()=>this.router.navigate([n.Laboratories])},{icon:r.science,header:{title:t.test_types,subtitle:t.manage_test_types},clickFn:()=>this.router.navigate([n.TestTypes])},{icon:r.science,header:{title:t.test_groups,subtitle:t.manage_test_groups},clickFn:()=>this.router.navigate([n.TestGroups])},{icon:r.compare_arrows,header:{title:t.reference_values,subtitle:t.manage_reference_values},clickFn:()=>this.router.navigate([n.ReferenceValues])},{icon:r.type_specimen,header:{title:t.specimen_types,subtitle:t.view_specimen_types},clickFn:()=>this.router.navigate([n.SpecimenTypes])},{icon:r.people_outline,header:{title:t.referrers,subtitle:t.manage_referrers},clickFn:()=>this.router.navigate([n.Referrers])},{icon:r.local_offer,header:{title:t.price_profiles,subtitle:t.manage_price_profiles},clickFn:()=>this.router.navigate([n.PriceProfiles])}),s}AddConstrSettings(){let e=[];return[]}addSoftuzaNotificationSettings(){let e=[],s=[{id:"snti",title:t.notifications,cards:e}];return e.push({icon:r.notifications,header:{title:t.notifications,subtitle:t.manage_notifications},clickFn:()=>this.router.navigate([c.Notifications])},{icon:r.email,header:{title:t.email_notification,subtitle:t.manage_emails},clickFn:()=>this.router.navigate([c.NotificationEmails])},{icon:r.sms,header:{title:t.sms_notification,subtitle:t.manage_sms},clickFn:()=>this.router.navigate([c.NotificationSmses])},{icon:r.announcement,header:{title:t.push_notification,subtitle:t.manage_push},clickFn:()=>this.router.navigate([c.NotificationPushes])},{icon:r.messages,header:{title:t.messages,subtitle:t.manage_messages},clickFn:()=>this.router.navigate([c.Messages])}),s}addSoftuzaReportingSettings(){let e=[],s=[{id:"srpt",title:t.reporting,cards:e}];return e.push({icon:r.summarize,header:{title:t.templates,subtitle:t.manage_templates},clickFn:()=>this.router.navigate([`/${b.Templates}`])},{icon:r.printer,header:{title:t.printers,subtitle:t.manage_printers},clickFn:()=>this.router.navigate([`/${b.Printers}`])}),s}setupAccessManagementSection(){let e=this.cardGroups.find(s=>s.id==="admin");e&&this.identityService.hasResource("realm-management")&&(this.identityService.hasResouceRole("realm-management","manage-users")&&e.cards.push({icon:r.group,header:{title:t.users,subtitle:t.manage_users},clickFn:()=>this.router.navigate([y.Users])}),e.cards.push({icon:r.groups,header:{title:t.groups,subtitle:t.manage_groups},clickFn:()=>this.router.navigate([y.Groups])}))}};i.\u0275fac=function(s){return new(s||i)(M(I))},i.\u0275cmp=R({type:i,selectors:[["portal-settings"]],decls:3,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"],["title",""]],template:function(s,C){s&1&&(v(0,"sz-ui-app-bar",0),f(1,U,1,1,null,null,d)),s&2&&(u("config",C.appBarConfig),p(),g(C.cardGroups))},dependencies:[l,m],encapsulation:2});let o=i;return o})();var pt=(()=>{let i=class i{};i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=k({type:i}),i.\u0275inj=F({imports:[N.forChild([{path:"",component:P}]),j,$,l,w,m]});let o=i;return o})();export{pt as SettingsModule};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
