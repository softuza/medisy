import{a as j}from"./chunk-CCWODJL6.js";import"./chunk-JEKHHWSP.js";import{i as l}from"./chunk-PELSUAA6.js";import"./chunk-5HLDPKOX.js";import{a as N,c as O,e as I,q as $,r as L,s as u}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{c as F,l as P,n as y}from"./chunk-2HDHNYMU.js";import{b as c}from"./chunk-7V4QNR7X.js";import{a as D,g as _}from"./chunk-BJEOQME3.js";import{d as A,g as R}from"./chunk-SG6HY6JP.js";import"./chunk-XXBVSRTN.js";import{L as M,N as z}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ea as E,Ga as U}from"./chunk-QRXQW4KS.js";import{Eb as a,Fb as f,Gb as v,M as s,Qb as T,Sb as d,ea as h,fb as S,gb as m,gc as b,na as g,oa as C,ub as p}from"./chunk-CIWRZFHR.js";var k=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=D.users,this.dataSource=new O(),this.dataSource.fields.push(u.hyperlink("username",i=>this.router.navigate([`/admin/users/${i.id}`])),u.string("name").setFormatFn(i=>`${i.firstName??""} ${i.lastName??""}`),u.string("createdTimestamp").setFormatFn(i=>new Date(i.createdTimestamp).toDateString()),N.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(P,{data:y.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(F(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(m(A),m(l),m(M));},t.ɵcmp=g({type:t,selectors:[["softuza-users"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(v(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),d("changed",function(){return r.get();}),a(2,"button",2),d("click",function(){return r.openSaveComponent();}),a(3,"span"),T(4,3),f()()(),a(5,"sz-ui-table",4),d("update",function(){return r.get();}),f()),o&2&&(p("title",r.title),S(),p("dataSource",r.dataSource),S(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[E,$,I,c],encapsulation:2});let n=t;return n;})();var w=[{path:"",component:k}];var he=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=h({providers:[l],imports:[z.forChild(w),R,U,L,c]});let n=t;return n;})();export{he as UsersModule};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/