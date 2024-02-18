import{a as j}from"./chunk-LYFVYSN5.js";import"./chunk-SI3ULLWO.js";import{i as l}from"./chunk-RR7OAJ6G.js";import"./chunk-EYGAI5PJ.js";import{a as N,c as O,e as I,j as $,k as L,l as u}from"./chunk-DVLFNPXE.js";import"./chunk-GPY5KFVB.js";import"./chunk-N4PGQPUM.js";import{i as y,k as F}from"./chunk-5KCGOFE6.js";import{b as c}from"./chunk-ZCWLIVXY.js";import{f as _}from"./chunk-5WTG7ASM.js";import{d as D,g as P}from"./chunk-DP3KI4RQ.js";import"./chunk-XWTEPPU5.js";import{Ca as R,L as M,N as z,za as A}from"./chunk-5FPIMWAZ.js";import"./chunk-QYJYVPVW.js";import{Ea as E,Ga as U}from"./chunk-NQOK3G2M.js";import{Fb as a,Gb as f,Hb as v,M as s,Rb as T,Tb as d,fa as h,gb as S,hb as m,hc as b,oa as g,pa as C,vb as p}from"./chunk-XEAZENSO.js";var k=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.title=R.users,this.dataSource=new O(),this.dataSource.fields.push(u.hyperlink("username",o=>this.router.navigate([`/admin/users/${o.id}`])),u.string("name").setContentFormat(o=>`${o.firstName??""} ${o.lastName??""}`),u.string("createdTimestamp").setContentFormat(o=>new Date(o.createdTimestamp).toDateString()),N.menu([_.edit(o=>this.openSaveComponent(o)),_.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(y,{data:F.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(A(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(m(D),m(l),m(M));},t.ɵcmp=g({type:t,selectors:[["softuza-users"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(v(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),d("changed",function(){return r.get();}),a(2,"button",2),d("click",function(){return r.openSaveComponent();}),a(3,"span"),T(4,3),f()()(),a(5,"sz-ui-table",4),d("update",function(){return r.get();}),f()),i&2&&(p("title",r.title),S(),p("dataSource",r.dataSource),S(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[E,$,I,c],encapsulation:2});let n=t;return n;})();var w=[{path:"",component:k}];var he=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=h({providers:[l],imports:[z.forChild(w),P,U,L,c]});let n=t;return n;})();export{he as UsersModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/