import{a as w}from"./chunk-OR6Y5XVB.js";import{a as f}from"./chunk-5LHHZRYA.js";import"./chunk-6D3RMRKD.js";import{a as p}from"./chunk-R2H6M7M7.js";import{a as $,b as P,c as k}from"./chunk-6YHPCQ3R.js";import{a as G}from"./chunk-2QOOWWCJ.js";import"./chunk-KKO5LFMX.js";import"./chunk-M3JYMMCO.js";import"./chunk-TWWAGYNZ.js";import"./chunk-GXKPTGBS.js";import"./chunk-V6MFDJU5.js";import"./chunk-DDLVFCYC.js";import{a as B}from"./chunk-YK2A52SR.js";import{e as x}from"./chunk-5YPBEEDC.js";import"./chunk-KC6VXE5Q.js";import"./chunk-HKZXWKQN.js";import"./chunk-A54NTVFL.js";import"./chunk-EWRIL5TF.js";import{a as j}from"./chunk-VLANWQE5.js";import"./chunk-IVJJNIOC.js";import"./chunk-PP3NP7HU.js";import{a as s}from"./chunk-PHJ3BL23.js";import{f as E,h as D,j as L}from"./chunk-IDZ2W4CX.js";import{d as R,g as y}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import"./chunk-KZQF464X.js";import{b as m}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import"./chunk-Y37IT74E.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{a as O,c as b,e as z}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as A,ka as F}from"./chunk-VXXQSTLE.js";import{o as v}from"./chunk-WHAEY7W6.js";import{Ib as T,Jb as _,Kb as c,Xb as h,ab as C,bb as r,ea as l,kc as g,na as d,nb as M,oa as u,ub as I,vb as S,wb as N,yb as a}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="Recipients",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-XX7F2BZB.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/