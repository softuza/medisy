import{a as j}from"./chunk-MS4BH7XI.js";import{b as p}from"./chunk-27FYUIXE.js";import{a as d,b as A,d as $,f as F,i as L,j as O}from"./chunk-Y4PXEVQT.js";import"./chunk-3HDGXHIW.js";import"./chunk-75JUXYDU.js";import{i as U,k as N}from"./chunk-HPZYOYE3.js";import{b as c}from"./chunk-ABFS4SEB.js";import{j as _}from"./chunk-TOOE4O45.js";import{d as D,g as E}from"./chunk-IZ32KJRN.js";import"./chunk-LMOPJ72O.js";import{c as R}from"./chunk-2AWDEL7N.js";import"./chunk-624ACHJE.js";import"./chunk-M7S7TTRL.js";import{c as f}from"./chunk-XNWVOXZG.js";import"./chunk-HAIELHQF.js";import"./chunk-4JTOADFE.js";import"./chunk-QQ2344AC.js";import{c as z,e as T}from"./chunk-FA7A5F5K.js";import"./chunk-AXAUKDRF.js";import{a as y,c as I}from"./chunk-AYP3BRJS.js";import"./chunk-HULPMCJY.js";import"./chunk-QECXQAYY.js";import{Cb as m,Mb as a,Nb as S,Ob as M,Yb as v,Zb as l,gb as u,hb as s,ka as g,oc as b,ua as h,va as C}from"./chunk-XJDYJDV7.js";var k=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(d.hyperlink("username",o=>`/iam/users/${o.id}`).setStacked(d.string("name").setValueGetter(o=>`${o.firstName??""} ${o.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.createdAt).setResponsive(!0).setValueGetter(o=>new Date(o.createdTimestamp).toDateString()),A.menu([_.edit(o=>this.openSaveComponent(o)),_.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:N.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(R(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(s(D),s(p),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[b([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,r){i&1&&(M(0,"sz-ui-header-info",1),a(1,"sz-ui-table-search-filter",2),l("changed",function(){return r.get();}),a(2,"button",3),l("click",function(){return r.openSaveComponent();}),a(3,"span"),v(4,0),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),i&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,L,F,c],encapsulation:2});let n=t;return n;})();var le=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[p],imports:[T.forChild([{path:"",component:k}]),E,I,O,c]});let n=t;return n;})();export{le as UsersModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/