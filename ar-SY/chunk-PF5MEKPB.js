import{a as O}from"./chunk-BWPB2HF7.js";import{b as l}from"./chunk-4FUHNBAX.js";import{a as d,b as N,d as $,f as F,i as L,j as B}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{i as A,k as I}from"./chunk-SB426TL2.js";import{a as c}from"./chunk-W3O4IPE3.js";import{h as _}from"./chunk-EKINQSBT.js";import{d as D,g as E}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import"./chunk-6LY23KCH.js";import{c as U}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as f}from"./chunk-Y57UOOVT.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as z,e as T}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ia as y,ka as R}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as n,Jb as S,Kb as M,Ub as b,Vb as p,ab as u,bb as s,ea as g,kc as v,na as h,oa as C,yb as m}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var j=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(d.hyperlink("username",i=>`/iam/users/${i.id}`).setStacked(d.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.created_at).setResponsive(!0).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),N.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(O,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(A,{data:I.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(U(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(s(D),s(l),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[v([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(o,r){o&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),p("changed",function(){return r.get();}),n(2,"button",3),p("click",function(){return r.openSaveComponent();}),n(3,"span"),b(4,0),S()()(),n(5,"sz-ui-table",4),p("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,L,F,c],encapsulation:2});let a=t;return a;})();var pe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[T.forChild([{path:"",component:j}]),E,R,B,c]});let a=t;return a;})();export{pe as UsersModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/