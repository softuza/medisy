import{a as k}from"./chunk-73MSSAVC.js";import{i as l}from"./chunk-HHBYF3PH.js";import"./chunk-BCCX2GP6.js";import{a as I,c as N,g as O,s as $,t as j,u}from"./chunk-NX3LT2RV.js";import{a as A}from"./chunk-ETF3CVHJ.js";import{c as F,l as R,n as P}from"./chunk-YIR7S7Z5.js";import{b as c}from"./chunk-G5ATBGNR.js";import{h as _}from"./chunk-DS5TYFF5.js";import{d as D,g as y}from"./chunk-P4QIA4WM.js";import"./chunk-22KPLFGU.js";import{L as E,N as T}from"./chunk-BWNHVGBM.js";import"./chunk-IWM4AFTB.js";import{Ea as z,Ga as U}from"./chunk-I73ZQFGG.js";import{Eb as a,Fb as f,Gb as M,M as s,Qb as b,Sb as d,ea as h,fb as S,gb as m,gc as v,na as g,oa as C,ub as p}from"./chunk-KN4PZLRS.js";var L=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.title=A.users,this.dataSource=new N(),this.dataSource.fields.push(u.hyperlink("username",o=>this.router.navigate([`/mlab/users/${o.id}`])),u.stringFormated("name",o=>`${o.firstName??""} ${o.lastName??""}`),u.stringFormated("createdTimestamp",o=>new Date(o.createdTimestamp).toDateString()),I.menu([_.edit(o=>this.openSaveComponent(o)),_.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(k,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(R,{data:P.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(F(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(m(D),m(l),m(E));},t.ɵcmp=g({type:t,selectors:[["softuza-users"]],features:[v([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),d("changed",function(){return r.get();}),a(2,"button",2),d("click",function(){return r.openSaveComponent();}),a(3,"span"),b(4,3),f()()(),a(5,"sz-ui-table",4),d("update",function(){return r.get();}),f()),i&2&&(p("title",r.title),S(),p("dataSource",r.dataSource),S(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[z,$,O,c],encapsulation:2});let n=t;return n;})();var w=[{path:"",component:L}];var he=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=h({providers:[l],imports:[T.forChild(w),y,U,j,c]});let n=t;return n;})();export{he as UsersModule};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/