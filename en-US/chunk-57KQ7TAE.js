import{a as P}from"./chunk-QWII6G5S.js";import{a as p}from"./chunk-UNNQW7RO.js";import"./chunk-KKSCCDKN.js";import{a as f}from"./chunk-V62SJGOL.js";import{a as G,b as $,c as j}from"./chunk-75IJR3YF.js";import{a as L}from"./chunk-KPFTDPHF.js";import"./chunk-PUXGSQSF.js";import"./chunk-YGU4JTYS.js";import"./chunk-JIZKLMZU.js";import"./chunk-WK7ZT6NW.js";import{a as D}from"./chunk-U2WYP6YP.js";import"./chunk-3UZWCLUR.js";import"./chunk-TFN2F5ZD.js";import{b as x,c,d as m}from"./chunk-AA2BVHXE.js";import{f as B}from"./chunk-X2F6JBJU.js";import{d as y,g as E}from"./chunk-HPPZ7ERW.js";import"./chunk-RXHMJFXO.js";import{b as a}from"./chunk-WQZWGPYI.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-2XCX2PRG.js";import"./chunk-VXNH5PTX.js";import"./chunk-Z63FN5EJ.js";import{a as v,c as A,e as z}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as R,la as F}from"./chunk-4B53IFHW.js";import{o as b}from"./chunk-UZ765RGE.js";import{Kb as T,Lb as _,Mb as s,Zb as g,bb as M,ea as d,ja as n,na as u,oa as C,ob as h,oc as O,vb as N,wb as I,xb as S,zb as r}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var k=()=>[p];function q(o,t){if(o&1&&s(0,"sz-mgmt-notification-notification-recipients",4),o&2){let U=g();r("notification",U.notification);}}var w=(()=>{let t=class t{constructor(){this.dialog=n(y),this.route=n(v),this.router=n(A),this.sntiService=n(f),this.alert=h(void 0),this.tiles=[],this.notification=this.route.snapshot.data.notification,this.appBarConfig={title:this.notification.name,subtitle:this.notification.description,backEnabled:!0,actions:[c.menu([c.edit(this.openSaveComponent.bind(this))])]};}openSaveComponent(){this.dialog.open(P,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=u({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[O([f])],decls:7,vars:2,consts:()=>{let i;return i="Recipients",[[3,"config"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,l){e&1&&(s(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),N(4,q,1,1),I(5,4,k),S(),_()()),e&2&&(r("config",l.appBarConfig),M(),r("alert",l.alert()));},dependencies:[G,$,m,a],encapsulation:2});let o=t;return o;})();var Nt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=C({type:t}),t.ɵinj=d({providers:[D],imports:[b,z.forChild([{path:"",component:w},{path:"recipients",loadComponent:()=>import("./chunk-R3LOEWUK.js").then(i=>i.NotificationRecipientsComponent)}]),E,R,F,x,j,m,a,L,B,p]});let o=t;return o;})();export{w as NotificationComponent,Nt as NotificationModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/