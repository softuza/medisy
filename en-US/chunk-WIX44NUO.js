import{a as j}from"./chunk-UAQZVZMV.js";import{b as p}from"./chunk-NRGFK2XU.js";import{a as d,b as A,d as $,f as F,i as L,j as O}from"./chunk-FJAJI34S.js";import"./chunk-KWIB5JB5.js";import"./chunk-JQGWRR26.js";import{i as U,k as N}from"./chunk-3LDW3QR3.js";import{b as c}from"./chunk-QGSSWQTR.js";import{j as _}from"./chunk-G5WHUCRF.js";import{d as D,g as E}from"./chunk-ZWHC4QEX.js";import"./chunk-XSTI72IP.js";import{c as R}from"./chunk-KJNGR2ED.js";import"./chunk-624ACHJE.js";import"./chunk-D5DPYT77.js";import{c as f}from"./chunk-QA36KWKY.js";import"./chunk-F3JW7MG7.js";import"./chunk-ZBCFQZ6O.js";import"./chunk-7ZDDI6P7.js";import{c as z,e as T}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as y,c as I}from"./chunk-FBMLFETS.js";import"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as m,Lb as a,Mb as S,Nb as M,Xb as v,Yb as l,gb as u,hb as s,na as g,nc as b,oa as h,za as C}from"./chunk-75X3YXCS.js";var k=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(d.hyperlink("username",o=>`/iam/users/${o.id}`).setStacked(d.string("name").setValueGetter(o=>`${o.firstName??""} ${o.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.createdAt).setResponsive(!0).setValueGetter(o=>new Date(o.createdTimestamp).toDateString()),A.menu([_.edit(o=>this.openSaveComponent(o)),_.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:N.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(R(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(s(D),s(p),s(z));},t.ɵcmp=g({type:t,selectors:[["sz-iam-users"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),a(2,"button",2),l("click",function(){return r.openSaveComponent();}),a(3,"span"),v(4,3),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),i&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,L,F,c],encapsulation:2});let n=t;return n;})();var le=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=h({type:t}),t.ɵinj=C({providers:[p],imports:[T.forChild([{path:"",component:k}]),E,I,O,c]});let n=t;return n;})();export{le as UsersModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/