import{a as w}from"./chunk-KZVMAY57.js";import{a as f}from"./chunk-GEFKFFOX.js";import"./chunk-DCFPTNA3.js";import{a as p}from"./chunk-OIMTWOHD.js";import{a as $,b as P,c as k}from"./chunk-NCYT4BJ3.js";import{a as G}from"./chunk-ZVTUUJS7.js";import"./chunk-M3UFXIQW.js";import"./chunk-EYWZNQGU.js";import"./chunk-Y6NL5I5M.js";import"./chunk-SB22KN27.js";import"./chunk-Z6PRB2GD.js";import"./chunk-GDDMUJI6.js";import{a as B}from"./chunk-PLILYGN2.js";import{f as x}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import"./chunk-6EOVNP6P.js";import{a as j}from"./chunk-6VGSXMTA.js";import"./chunk-4NTC2VLV.js";import"./chunk-76IND4GV.js";import{a as s}from"./chunk-ZPKIPVTE.js";import{f as E,h as D,j as L}from"./chunk-TIEHGEOE.js";import{d as R,g as y}from"./chunk-QCMAXDKX.js";import{b as m}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{a as O,c as b,e as z}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as A,la as F}from"./chunk-TSWXIYWJ.js";import{o as v}from"./chunk-DTCSWDXN.js";import{Jb as T,Kb as _,Lb as c,Yb as h,bb as C,cb as r,ea as l,na as d,nc as g,oa as u,ob as M,vb as I,wb as S,xb as N,zb as a}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="Recipients",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-I2CRXTTX.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/