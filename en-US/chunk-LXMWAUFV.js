import{a as w}from"./chunk-WYBBP4YX.js";import{a as f}from"./chunk-YD6ZEBEV.js";import"./chunk-OHG6TNAY.js";import{a as p}from"./chunk-IS3QRY5O.js";import{a as $,b as P,c as k}from"./chunk-QKDSLJET.js";import{a as G}from"./chunk-FF5WIGKE.js";import"./chunk-BRHS46VV.js";import"./chunk-MGSG6DNB.js";import"./chunk-7NEBYUYF.js";import"./chunk-DPJB4MGS.js";import"./chunk-IXFZRQ4K.js";import{a as B}from"./chunk-K54T2VLT.js";import"./chunk-O55UWMGX.js";import"./chunk-AVATGJ3M.js";import"./chunk-7BUJJIE4.js";import{e as x}from"./chunk-J6NX7L25.js";import"./chunk-Z6XXBGUI.js";import"./chunk-EFQO6WLH.js";import"./chunk-5JNMFO5G.js";import{a as j}from"./chunk-4J7RS5EH.js";import"./chunk-XDJM4TLA.js";import"./chunk-7Q2KUHGS.js";import{a as s}from"./chunk-VQTN6R5P.js";import{f as E,h as D,j as L}from"./chunk-KETVIBDN.js";import{d as R,g as y}from"./chunk-GN22G4SF.js";import"./chunk-DZX2PQPV.js";import"./chunk-ETC3GIY7.js";import{b as m}from"./chunk-NBT2Y5AZ.js";import"./chunk-TFVYCVZE.js";import"./chunk-LZMFVM2C.js";import"./chunk-IOIYKD5G.js";import"./chunk-6IO4H6KH.js";import"./chunk-UL3PDKVQ.js";import"./chunk-MDSDK5SE.js";import{a as O,c as b,e as z}from"./chunk-LNRIX3KX.js";import"./chunk-LX4YC2JA.js";import{ha as A,ka as F}from"./chunk-4SVPOG47.js";import{o as v}from"./chunk-UOFFTEPS.js";import{Ab as S,Bb as N,Db as a,Nb as T,Ob as _,Pb as c,ac as h,hb as C,ib as r,ka as l,pc as g,tb as M,ua as d,va as u,zb as I}from"./chunk-RFNNLBRH.js";var J=()=>[f];function K(o,t){if(o&1&&c(0,"sz-mgmt-notification-notification-recipients",4),o&2){let X=h();a("notification",X.notification);}}var U=(()=>{let t=class t{constructor(i,e,n,q){this.dialog=i,this.route=e,this.router=n,this.sntiService=q,this.alert=M(void 0),this.tiles=[],this.menu=L.more([D.edit(()=>this.openSaveComponent())]),this.notification=this.route.snapshot.data.notification;}openSaveComponent(){this.dialog.open(w,{data:this.notification}).afterClosed().subscribe(i=>{i&&(this.notification=i);});}};t.ɵfac=function(e){return new(e||t)(r(R),r(O),r(b),r(p));},t.ɵcmp=d({type:t,selectors:[["sz-mgmt-notification-notification"]],features:[g([p])],decls:7,vars:5,consts:()=>{let i;return i="Recipients",[[3,"title","subtitle","menu","backEnabled"],[3,"alert"],["mat-stretch-tabs","false"],["label",i],[3,"notification"]];},template:function(e,n){e&1&&(c(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),T(2,"mat-tab-group",2)(3,"mat-tab",3),I(4,K,1,1),S(5,4,J),N(),_()()),e&2&&(a("title",n.notification.name)("subtitle",n.notification.description)("menu",n.menu)("backEnabled",!0),C(),a("alert",n.alert()));},dependencies:[$,P,s,m],encapsulation:2});let o=t;return o;})();var gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=u({type:t}),t.ɵinj=l({providers:[j],imports:[v,z.forChild([{path:"",component:U},{path:"recipients",loadComponent:()=>import("./chunk-TEMCW4U6.js").then(i=>i.NotificationRecipientsComponent)}]),y,A,F,x,k,s,m,B,E,f,G]});let o=t;return o;})();export{U as NotificationComponent,gt as NotificationModule};/**i18n:d5f080a533d2536b5185f7460d22416f9e1e4eff78d50a220d9f419171a66456*/