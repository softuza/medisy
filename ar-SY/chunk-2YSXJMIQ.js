import{a as P}from"./chunk-VTTBIZAA.js";import{a as p}from"./chunk-PG6X4JCR.js";import"./chunk-KKSCCDKN.js";import{a as f}from"./chunk-GTGGJQ32.js";import{a as G,b as $,c as j}from"./chunk-DPP7Z5SK.js";import{a as L}from"./chunk-EADBCWC6.js";import"./chunk-ECMDH7FD.js";import"./chunk-YGU4JTYS.js";import"./chunk-ER72QF5P.js";import{a as D}from"./chunk-GXG5EPI4.js";import"./chunk-2A5GXBDS.js";import"./chunk-FNEDC6UP.js";import{b as x,c,f as m}from"./chunk-OPUHDY2C.js";import{f as B}from"./chunk-M7TJZF7D.js";import{d as y,g as E}from"./chunk-AEJUXZCG.js";import"./chunk-LANNBXGX.js";import{b as a}from"./chunk-HBAIFRLQ.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-5ZGE7EDH.js";import"./chunk-VXNH5PTX.js";import"./chunk-XPJ4P4RZ.js";import{a as v,c as A,e as z}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as R,la as F}from"./chunk-4B53IFHW.js";import{o as b}from"./chunk-UZ765RGE.js";import{Kb as T,Lb as _,Mb as s,Zb as g,bb as M,ea as d,ja as n,na as u,oa as C,ob as h,oc as O,vb as N,wb as I,xb as S,zb as r}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var k=()=>[p];function q(o,t){if(o&1&&s(0,"sz-mgmt-notification-notification-recipients",4),o&2){let U=g();r("notification",U.notification);}}var w=(()=>{let t=class t{constructor(){this.dialog=n(y),this.route=n(v),this.router=n(A),this.sntiService=n(f),this.alert=h(void 0),this.tiles=[],this.notification=this.route.snapshot.data.notification,this.appBarConfig={title:this.notification.name,subtitle:this.notification.description,backEnabled:!0,actions:[c.menu([c.edit(this.openSaveComponent.bind(this))])]};}openSaveComponent(){this.dialog.open(P,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=u({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[O([f])],decls:7,vars:2,consts:()=>{let i;return i="\u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0648\u0646",[[3,"config"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,l){e&1&&(s(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),N(4,q,1,1),I(5,4,k),S(),_()()),e&2&&(r("config",l.appBarConfig),M(),r("alert",l.alert()));},dependencies:[G,$,m,a],encapsulation:2});let o=t;return o;})();var Nt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=C({type:t}),t.ɵinj=d({providers:[D],imports:[b,z.forChild([{path:"",component:w},{path:"recipients",loadComponent:()=>import("./chunk-66VJ5WDA.js").then(i=>i.NotificationRecipientsComponent)}]),E,R,F,x,j,m,a,L,B,p]});let o=t;return o;})();export{w as NotificationComponent,Nt as NotificationModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/