import{a as w}from"./chunk-WWDZ5ID2.js";import{a as f}from"./chunk-WLH2Q3GG.js";import"./chunk-VHJUZLXQ.js";import{a as p}from"./chunk-5SRG2EHU.js";import{a as $,b as P,c as k}from"./chunk-NROBCT4B.js";import{a as G}from"./chunk-TKHDASQO.js";import"./chunk-WTH4YXYA.js";import"./chunk-JDBU3JRF.js";import"./chunk-C6EF4TMD.js";import"./chunk-QLGFXJSN.js";import"./chunk-GNM3UYNM.js";import"./chunk-Z3D6BPQU.js";import{a as B}from"./chunk-VH4ZW36B.js";import{f as x}from"./chunk-DD36HVYA.js";import"./chunk-DLQAZNQZ.js";import"./chunk-X723JSXA.js";import"./chunk-MQZIPEFT.js";import{a as j}from"./chunk-RTXEUJTA.js";import"./chunk-6FO4JYCJ.js";import"./chunk-S6CBQ2WA.js";import"./chunk-DV32DAUC.js";import{a as s}from"./chunk-FW3D7UEL.js";import{f as E,h as D,j as L}from"./chunk-GOEYM4JS.js";import{d as R,g as y}from"./chunk-AHUVNO4M.js";import"./chunk-F5R7DRI7.js";import{b as m}from"./chunk-JEX5D4MF.js";import"./chunk-W6XZBSJY.js";import"./chunk-A6HPAVPV.js";import"./chunk-OXD3F7WY.js";import"./chunk-WZ3F4V4D.js";import"./chunk-HKMIKSFL.js";import"./chunk-7PIZFBIY.js";import{a as O,c as b,e as z}from"./chunk-FBTMN7JN.js";import"./chunk-6JKOPXSS.js";import{ia as A,la as F}from"./chunk-PUK5P6HB.js";import{o as v}from"./chunk-66CG3LE3.js";import{Jb as T,Kb as _,Lb as c,Yb as h,bb as C,cb as r,ea as l,na as d,nc as g,oa as u,ob as M,vb as I,wb as S,xb as N,zb as a}from"./chunk-ZZ2H3KSV.js";import"./chunk-VWF2YKFJ.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="\u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0648\u0646",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-HEZB4MRA.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:6b55cd1e489fc2a9391d1b13a69b265321df5f62925c47a1512178c2da6817cf*/