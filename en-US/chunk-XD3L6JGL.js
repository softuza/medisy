import{a as j}from"./chunk-KHNSRECH.js";import"./chunk-A5SKBSTW.js";import{g as k}from"./chunk-LV4PZCIV.js";import"./chunk-XMV3WQ4U.js";import{h as l}from"./chunk-3ERE5XXW.js";import"./chunk-YECODXW4.js";import{a as F}from"./chunk-HGG4SPXY.js";import{b as u,c as I,e as N,g as O,s as $,t as w}from"./chunk-DTDLQFEI.js";import{c as A,l as P,n as R}from"./chunk-SN47SBJJ.js";import{d as U,g as y}from"./chunk-FNLNZMXX.js";import"./chunk-H22FBATM.js";import"./chunk-IUM5Y4DP.js";import{a}from"./chunk-DQFF7ZV7.js";import{b as d}from"./chunk-2H6GRCHT.js";import{e as E}from"./chunk-7TGQVE3C.js";import{i as _}from"./chunk-HXVM5UCI.js";import"./chunk-QCDHUYXG.js";import"./chunk-QWTR64PL.js";import{Pa as z,Ra as D}from"./chunk-53RWJDYX.js";import{Bb as n,Cb as S,Db as b,L as m,Nb as T,Pb as p,Zb as v,cb as c,da as g,db as f,la as h,ma as M,nb as s}from"./chunk-M2QTEBXZ.js";var L=(()=>{let o=class o{constructor(t,i){this.dialog=t,this.adminService=i,this.title=a.users,this.dataSource=new N(),this.dataSource.addRows([I.default([u.hyperlink("username",a.username,e=>e.id),u.text("name",a.name,e=>`${e.firstName??""} ${e.lastName??""}`),u.text("createdTimestamp",a.createdDate,e=>new Date(e.createdTimestamp).toDateString()),F.menu([_.edit(e=>this.openSaveComponent(e)),_.delete(e=>this.openUserDeleteComponent(e))])])]),this.get();}openSaveComponent(t){this.dialog.open(j,{data:t}).afterClosed().pipe(m(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(P,{data:R.delete(this.adminService.deleteUser(t.id),t)}).afterClosed().pipe(m(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(A(this.dataSource.indicator),m(1)).subscribe(t=>{this.dataSource.set(t,t.length);});}};o.ɵfac=function(i){return new(i||o)(f(U),f(l));},o.ɵcmp=h({type:o,selectors:[["softuza-users"]],features:[v([k])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"filter","search"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(b(0,"sz-ui-header-info",0),n(1,"sz-ui-table-filter",1),p("search",function(){return e.get();}),n(2,"button",2),p("click",function(){return e.openSaveComponent();}),n(3,"span"),T(4,3),S()()(),n(5,"sz-ui-table",4),p("update",function(){return e.get();}),S()),i&2&&(s("title",e.title),c(1),s("filter",e.dataSource.filter),c(4),s("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[z,$,O,d],encapsulation:2});let r=o;return r;})();var B=[{path:"",component:L}];var ge=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=M({type:o}),o.ɵinj=g({providers:[l],imports:[E.forChild(B),y,D,w,d]});let r=o;return r;})();export{ge as UsersModule};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/