import{a as j}from"./chunk-3DC5UJTA.js";import"./chunk-SJU7TGWS.js";import{g as k}from"./chunk-7X3HZZWH.js";import"./chunk-RCF34KUN.js";import{h as l}from"./chunk-YJ66KLW4.js";import"./chunk-VU4DCVQ3.js";import{a as F}from"./chunk-IWR3KYJK.js";import{b as u,d as I,e as N,g as O,s as $,t as w}from"./chunk-LIUTUGIN.js";import{c as A,l as P,n as R}from"./chunk-TXP6BBJB.js";import{d as U,g as y}from"./chunk-BVSJJDLC.js";import"./chunk-GXEPFKEQ.js";import"./chunk-2OZGA6L4.js";import{a}from"./chunk-YG5GW4EW.js";import{b as d}from"./chunk-SNKHLPW5.js";import"./chunk-WKFGKHHI.js";import{e as E}from"./chunk-KIPWFCJ2.js";import{i as _}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as z,Ra as D}from"./chunk-KZIHA7KF.js";import{$b as v,Bb as n,Cb as S,Db as b,L as m,Nb as T,Rb as p,cb as c,da as g,db as f,la as h,ma as M,nb as s}from"./chunk-6MBKLWBV.js";var L=(()=>{let o=class o{constructor(t,i){this.dialog=t,this.adminService=i,this.title=a.users,this.dataSource=new I(),this.dataSource.addRows([N.default([u.hyperlink("username",a.username,e=>e.id),u.text("name",a.name,e=>`${e.firstName??""} ${e.lastName??""}`),u.text("createdTimestamp",a.createdDate,e=>new Date(e.createdTimestamp).toDateString()),F.menu([_.edit(e=>this.openSaveComponent(e)),_.delete(e=>this.openUserDeleteComponent(e))])])]),this.get();}openSaveComponent(t){this.dialog.open(j,{data:t}).afterClosed().pipe(m(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(P,{data:R.delete(this.adminService.deleteUser(t.id),t)}).afterClosed().pipe(m(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(A(this.dataSource.indicator),m(1)).subscribe(t=>{this.dataSource.set(t,t.length);});}};o.ɵfac=function(i){return new(i||o)(f(U),f(l));},o.ɵcmp=h({type:o,selectors:[["softuza-users"]],features:[v([k])],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"filter","search"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(b(0,"sz-ui-header-info",0),n(1,"sz-ui-table-filter",1),p("search",function(){return e.get();}),n(2,"button",2),p("click",function(){return e.openSaveComponent();}),n(3,"span"),T(4,3),S()()(),n(5,"sz-ui-table",4),p("update",function(){return e.get();}),S()),i&2&&(s("title",e.title),c(1),s("filter",e.dataSource.filter),c(4),s("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[z,$,O,d],encapsulation:2});let r=o;return r;})();var B=[{path:"",component:L}];var ge=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=M({type:o}),o.ɵinj=g({providers:[l],imports:[E.forChild(B),y,D,w,d]});let r=o;return r;})();export{ge as UsersModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/