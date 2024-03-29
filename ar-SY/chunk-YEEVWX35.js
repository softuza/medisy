import{a as j}from"./chunk-DAXSJ46J.js";import{a as p}from"./chunk-6QBJYIBM.js";import"./chunk-4SZIFRWS.js";import{a as c,b as A,d as $,f as F,i as L,j as O}from"./chunk-TI3KPOR7.js";import"./chunk-6476LBLO.js";import"./chunk-PT75MKNF.js";import{i as U,k as R}from"./chunk-OPST3HSR.js";import"./chunk-QUJGTYPR.js";import{b as d}from"./chunk-EPNV7HRZ.js";import{j as _}from"./chunk-JHC5R5G3.js";import{d as T,g as E}from"./chunk-5MAY3I4F.js";import"./chunk-RZLFWLWK.js";import{c as N}from"./chunk-4GL34ATX.js";import"./chunk-VQDUMFVZ.js";import"./chunk-D5DPYT77.js";import{c as f}from"./chunk-OPRLBPJZ.js";import"./chunk-C77Q6E22.js";import"./chunk-ZBCFQZ6O.js";import"./chunk-GMGFC4G7.js";import{c as z,e as D}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as y,c as I}from"./chunk-FBMLFETS.js";import"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as m,Lb as a,Mb as S,Nb as M,Xb as v,Yb as l,gb as u,hb as s,na as h,nc as b,oa as g,za as C}from"./chunk-75X3YXCS.js";var k=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(c.hyperlink("username",i=>this.router.navigate([`/admin/users/${i.id}`])).setStacked(c.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),c.string("createdTimestamp").setName(f.createdAt).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),A.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:R.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(N(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(s(T),s(p),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-admin-users"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),a(2,"button",2),l("click",function(){return r.openSaveComponent();}),a(3,"span"),v(4,3),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,L,F,d],encapsulation:2});let n=t;return n;})();var le=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=C({providers:[p],imports:[D.forChild([{path:"",component:k}]),E,I,O,d]});let n=t;return n;})();export{le as UsersModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/