import{a as O}from"./chunk-HYPVF7IC.js";import{b as l}from"./chunk-5Z6TYUNO.js";import{a as d,b as N,d as $,f as F,i as L,j as B}from"./chunk-TJI632CG.js";import"./chunk-TQ3W56FI.js";import"./chunk-CIZWNSV3.js";import"./chunk-D2ETPSDJ.js";import{i as U,k as I}from"./chunk-V6YUYF6E.js";import{a as c}from"./chunk-PEF2UZQC.js";import{h as _}from"./chunk-MU7HJDE2.js";import{d as D,g as E}from"./chunk-2K2RWTWU.js";import"./chunk-HRS4G4YG.js";import"./chunk-S6EI4M2J.js";import{b as R}from"./chunk-6RYVENW3.js";import"./chunk-M2R7K5VQ.js";import"./chunk-ZV5PVXGO.js";import{c as f}from"./chunk-CVRQFWLI.js";import"./chunk-LJVQIOF2.js";import"./chunk-EIWC7QFZ.js";import"./chunk-HPPA553T.js";import{c as z,e as T}from"./chunk-L6HNREY7.js";import"./chunk-FTN3YVIS.js";import{ja as y,la as A}from"./chunk-IRR6XRRV.js";import"./chunk-TWGSABWX.js";import{Db as m,Nb as n,Ob as S,Pb as M,Zb as b,_b as p,hb as u,ib as s,ka as g,pc as v,ua as h,va as C}from"./chunk-XPH4NMLC.js";var j=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(d.hyperlink("username",i=>`/iam/users/${i.id}`).setStacked(d.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.createdAt).setResponsive(!0).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),N.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(O,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:I.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(R(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(s(D),s(l),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[v([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(o,r){o&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),p("changed",function(){return r.get();}),n(2,"button",3),p("click",function(){return r.openSaveComponent();}),n(3,"span"),b(4,0),S()()(),n(5,"sz-ui-table",4),p("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[y,L,F,c],encapsulation:2});let a=t;return a;})();var pe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[T.forChild([{path:"",component:j}]),E,A,B,c]});let a=t;return a;})();export{pe as UsersModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/