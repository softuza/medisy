import{a as w}from"./chunk-KD7CZCRW.js";import{a as p}from"./chunk-H6IIC5PS.js";import"./chunk-SXMA4ADG.js";import{a as f}from"./chunk-5D4LQMJA.js";import{a as $,b as j,c as P}from"./chunk-J2B53B6K.js";import{a as L}from"./chunk-MME24MHG.js";import{f as G}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import"./chunk-M257HJPM.js";import{a as x}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import"./chunk-SQWEE7KP.js";import{a as m}from"./chunk-GUAFKVMJ.js";import{f as E,h as B,j as D}from"./chunk-D36EDMAQ.js";import{d as y,g as R}from"./chunk-NGJJVZ6X.js";import"./chunk-ZPSFEZWB.js";import{b as a}from"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import"./chunk-WYY322KA.js";import"./chunk-Z6RT565P.js";import"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{a as b,c as v,e as z}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as A,la as F}from"./chunk-PE6NSH2D.js";import{o as O}from"./chunk-ZZK427TV.js";import{Kb as S,Lb as T,Mb as s,Zb as _,bb as C,ea as l,ja as n,na as d,oa as u,ob as M,oc as g,vb as h,wb as I,xb as N,zb as r}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var q=()=>[p];function H(o,t){if(o&1&&s(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=_();r("notification",X.notification);}}var U=(()=>{let t=class t{constructor(){this.dialog=n(y),this.route=n(b),this.router=n(v),this.sntiService=n(f),this.alert=M(void 0),this.tiles=[],this.notification=this.route.snapshot.data.notification,this.appBarConfig={title:this.notification.name,subtitle:this.notification.description,backEnabled:!0,menu:D.more([B.edit(this.openSaveComponent.bind(this))])};}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([f])],decls:7,vars:2,consts:()=>{let i;return i="\u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0648\u0646",[[3,"config"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,c){e&1&&(s(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),S(2,"mat-tab-group",2)(3,"mat-tab",3),h(4,H,1,1),I(5,4,q),N(),T()()),e&2&&(r("config",c.appBarConfig),C(),r("alert",c.alert()));},dependencies:[$,j,m,a],encapsulation:2});let o=t;return o;})();var Nt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[x],imports:[O,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-4QDXGMVE.js").then(i=>i.NotificationRecipientsComponent)}]),R,A,F,G,P,m,a,L,E,p]});let o=t;return o;})();export{U as NotificationComponent,Nt as NotificationModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/