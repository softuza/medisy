import{a as k}from"./chunk-BH3ECGI2.js";import{a as d}from"./chunk-KSZSNCJE.js";import"./chunk-XWIFUT6I.js";import{a as u,b as $,d as L,f as F,k as O,l as j}from"./chunk-QJDZROEF.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import{j as R,l as A}from"./chunk-WEEU345C.js";import"./chunk-D5SZFKK7.js";import{b as c}from"./chunk-WZL7BTCT.js";import{j as h}from"./chunk-J5QZPDV7.js";import{d as E,g as y}from"./chunk-UN7ZV7OU.js";import"./chunk-KWAPZKCM.js";import{c as U}from"./chunk-U3WUCTLP.js";import"./chunk-IRYEWOMO.js";import"./chunk-RH3HJREX.js";import{c as _}from"./chunk-O6G4W4SF.js";import"./chunk-3MHW6B4E.js";import"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{c as D,e as T}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as I,c as N}from"./chunk-AHPLM44D.js";import"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Hb as a,Ib as S,Jb as v,O as s,Tb as b,Vb as l,ha as g,ib as f,jb as m,jc as z,qa as C,ra as M,xb as p}from"./chunk-MNGWH3SB.js";var w=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.title=_.users,this.dataSource=new L(),this.dataSource.columnDefs.push(u.hyperlink("username",o=>this.router.navigate([`/admin/users/${o.id}`])),u.string("name").setValueGetter(o=>`${o.firstName??""} ${o.lastName??""}`),u.string("createdTimestamp").setName(_.createdAt).setValueGetter(o=>new Date(o.createdTimestamp).toDateString()),$.menu([h.edit(o=>this.openSaveComponent(o)),h.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(k,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(R,{data:A.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(U(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(m(E),m(d),m(D));},t.ɵcmp=C({type:t,selectors:[["sz-admin-users"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(v(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),a(2,"button",2),l("click",function(){return r.openSaveComponent();}),a(3,"span"),b(4,3),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),i&2&&(p("title",r.title),f(),p("dataSource",r.dataSource),f(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[I,O,F,c],encapsulation:2});let n=t;return n;})();var B=[{path:"",component:w}];var _e=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=M({type:t}),t.ɵinj=g({providers:[d],imports:[T.forChild(B),y,N,j,c]});let n=t;return n;})();export{_e as UsersModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/