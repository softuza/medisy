import{a as O}from"./chunk-PTWEW2MI.js";import{c as l}from"./chunk-FO5QW44Y.js";import{a as d,b as I,d as N,e as $,g as B,j as L,k as F}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{i as U,k as A}from"./chunk-76IND4GV.js";import{a as c}from"./chunk-ZPKIPVTE.js";import{h as _}from"./chunk-TIEHGEOE.js";import{d as D,g as E}from"./chunk-QCMAXDKX.js";import"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as f}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as z,e as T}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ja as y,la as R}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as n,Kb as S,Lb as M,Vb as v,Wb as p,bb as u,cb as s,ea as g,na as h,nc as b,oa as C,zb as m}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var j=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=f.users,this.dataSource=new N(),this.dataSource.columnDefs.push(d.hyperlink("username",i=>`/iam/users/${i.id}`).setStacked(d.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.created_at).setResponsive(!0).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),I.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(O,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:A.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe($(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(s(D),s(l),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[b([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,r){o&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),p("changed",function(){return r.get();}),n(2,"button",3),p("click",function(){return r.openSaveComponent();}),n(3,"span"),v(4,0),S()()(),n(5,"sz-ui-table",4),p("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("dataSource",r.dataSource));},dependencies:[y,L,B,c],encapsulation:2});let a=t;return a;})();var me=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[T.forChild([{path:"",component:j}]),E,R,F,c]});let a=t;return a;})();export{me as UsersModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/