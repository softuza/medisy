import{a as w}from"./chunk-YOYEIX5H.js";import{a as f}from"./chunk-PSP7VIEP.js";import"./chunk-JCF6WUUK.js";import{a as p}from"./chunk-QZMMCALK.js";import{a as $,b as P,c as k}from"./chunk-AMLCZP5B.js";import{a as G}from"./chunk-B6FZ3U3M.js";import"./chunk-2SZN7WSF.js";import"./chunk-GARBG3IP.js";import"./chunk-7OWZDRB6.js";import"./chunk-A3RUO2VC.js";import"./chunk-XKUHL743.js";import"./chunk-SCBROFUT.js";import{a as B}from"./chunk-ZF2V4T2F.js";import{f as x}from"./chunk-6A2ZJIKF.js";import"./chunk-UHA2YNNB.js";import"./chunk-RANL45GR.js";import"./chunk-SFEE7L6S.js";import{a as j}from"./chunk-3HAKDFMA.js";import"./chunk-JJYQDYNW.js";import"./chunk-GCHJ7W3W.js";import"./chunk-VQSBDJBW.js";import{a as s}from"./chunk-NOB4M6I3.js";import{f as E,h as D,j as L}from"./chunk-34ZKJJQA.js";import{d as R,g as y}from"./chunk-CYOCH3CE.js";import"./chunk-Q3MXFXKP.js";import{b as m}from"./chunk-LMMIYC2Q.js";import"./chunk-LPD4JHC6.js";import"./chunk-EU6EN4RU.js";import"./chunk-OQIAC7GT.js";import"./chunk-QBVRT5EG.js";import"./chunk-L5ME2H6Y.js";import"./chunk-E5LY2UIH.js";import{a as O,c as b,e as z}from"./chunk-OU5TKGLO.js";import"./chunk-JIFD7XOW.js";import{ia as A,la as F}from"./chunk-NIXMLTIK.js";import{o as v}from"./chunk-IMTADF7I.js";import{Jb as T,Kb as _,Lb as c,Yb as h,bb as C,cb as r,ea as l,na as d,nc as g,oa as u,ob as M,vb as I,wb as S,xb as N,zb as a}from"./chunk-XBY5TSK6.js";import"./chunk-VWKXNZKE.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="\u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0648\u0646",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-VF66WYWI.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:2203e027d52d3f0736b00c23c47b63f6931e6ad93b70d88f30a525b6a40c92e8*/