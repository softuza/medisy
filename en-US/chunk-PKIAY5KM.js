import{a as w}from"./chunk-532PATOJ.js";import{a as f}from"./chunk-SFZUYEKH.js";import"./chunk-U25DHMMA.js";import{a as p}from"./chunk-LMBGI2HR.js";import{a as $,b as P,c as k}from"./chunk-JAXP7B77.js";import{a as G}from"./chunk-EKUD34VZ.js";import"./chunk-EZM76C6C.js";import"./chunk-OJ4Z6HIC.js";import"./chunk-CDW7NJQR.js";import"./chunk-LDAWYNSH.js";import"./chunk-SRJ2LBZP.js";import"./chunk-MOPAGSIE.js";import{a as B}from"./chunk-ZRZGBJNO.js";import{e as x}from"./chunk-3RGN74YT.js";import"./chunk-4PUI7TFD.js";import"./chunk-UX7LCM42.js";import"./chunk-G3VH5P4C.js";import"./chunk-6QTNW6V3.js";import{a as j}from"./chunk-Y67U627O.js";import"./chunk-BDVQ6LF3.js";import"./chunk-45EQYRXL.js";import{a as s}from"./chunk-J7RSE5GX.js";import{f as E,h as D,j as L}from"./chunk-S4HAMF5I.js";import{d as R,g as y}from"./chunk-PI57QVX3.js";import"./chunk-AYSVPPXZ.js";import{b as m}from"./chunk-NGCO2DG7.js";import"./chunk-BQGY2E4W.js";import"./chunk-JB2SFW5Z.js";import"./chunk-FAEIW35E.js";import"./chunk-WDKUGUU7.js";import"./chunk-CXB763V2.js";import"./chunk-LUIABQW7.js";import{a as O,c as b,e as z}from"./chunk-AWG7Q7IV.js";import"./chunk-O6OUP7WU.js";import{ha as A,ka as F}from"./chunk-SHXYMDXZ.js";import{o as v}from"./chunk-BSUEWO5U.js";import{Ab as I,Bb as S,Cb as N,Eb as a,Ob as T,Pb as _,Qb as c,bc as h,gb as C,hb as r,ka as l,qc as g,ta as d,tb as M,ua as u}from"./chunk-PSKSSTJ7.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="Recipients",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-NS2RLV5X.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/