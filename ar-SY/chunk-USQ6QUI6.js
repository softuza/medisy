import{a as k}from"./chunk-XSRFV5UW.js";import"./chunk-F65AH2SL.js";import{g as w}from"./chunk-ZUTEIW3L.js";import"./chunk-PPO5LMMV.js";import{h as p}from"./chunk-6VMEWVPH.js";import"./chunk-JI5I5E7Z.js";import{a as L}from"./chunk-WAXOPSH2.js";import{a as d,b as O,c as I,e as y,o as $,p as F}from"./chunk-FYVWUY5J.js";import"./chunk-BDKYF43S.js";import{c as v,l as z,n as N}from"./chunk-JUKWJGHA.js";import{d as P,g as A}from"./chunk-LR6DSKQQ.js";import"./chunk-CJ3L35E7.js";import"./chunk-FZFNR6NR.js";import{a as l}from"./chunk-HXXK5E53.js";import{a as S}from"./chunk-V2YTYBA6.js";import{e as U}from"./chunk-4G55JY3H.js";import{i as E}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as b,Ra as R,Ua as D}from"./chunk-W55BWEJG.js";import{Bb as n,Cb as s,L as a,Nb as f,Pb as m,Zb as T,cb as c,da as M,db as u,la as g,ma as h,nb as _}from"./chunk-3QIFGVJ6.js";var j=(()=>{let o=class o{constructor(t,i){this.dialog=t,this.adminService=i,this.dataSource=new O(),this.dataSource.addRows([I.default([d.hyperlink("username",l.username,e=>e.id),d.text("name",l.name,e=>`${e.firstName??""} ${e.lastName??""}`),d.text("createdTimestamp",l.createdDate,e=>new Date(e.createdTimestamp).toDateString()),L.menu([E.edit(e=>this.openSaveComponent(e)),E.delete(e=>this.openUserDeleteComponent(e))])])]),this.get();}openSaveComponent(t){this.dialog.open(k,{data:t}).afterClosed().pipe(a(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(z,{data:N.delete(this.adminService.deleteUser(t.id),t)}).afterClosed().pipe(a(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(v(this.dataSource.indicator),a(1)).subscribe(t=>{this.dataSource.set(t,t.length);});}};o.ɵfac=function(i){return new(i||o)(u(P),u(p));},o.ɵcmp=g({type:o,selectors:[["softuza-users"]],features:[T([w])],decls:8,vars:4,consts:()=>{let t;t="\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646";let i;return i="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],t,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],i,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(n(0,"sz-ui-header-basic")(1,"h5",0),f(2,1),s()(),n(3,"sz-ui-table-filter",2),m("search",function(){return e.get();}),n(4,"button",3),m("click",function(){return e.openSaveComponent();}),n(5,"span"),f(6,4),s()()(),n(7,"sz-ui-table",5),m("update",function(){return e.get();}),s()),i&2&&(c(3),_("dataSource",e.dataSource),c(4),_("paginationEnabled",!1)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[b,$,y,S],encapsulation:2});let r=o;return r;})();var B=[{path:"",component:j}];var Me=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=h({type:o}),o.ɵinj=M({providers:[p],imports:[U.forChild(B),A,R,F,S,D]});let r=o;return r;})();export{Me as UsersModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/