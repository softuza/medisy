import{a as O}from"./chunk-6CKBDNKC.js";import{c as l}from"./chunk-EEVLTPJN.js";import{a as d,b as N,d as $,f as F,i as L,j as B}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import"./chunk-J3ZGTMT7.js";import{i as A,k as I}from"./chunk-I247VJZ7.js";import{a as c}from"./chunk-3TCVELMY.js";import{h as _}from"./chunk-VN32AWOL.js";import{d as D,g as E}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{j as U}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as f}from"./chunk-NXGV7MLA.js";import"./chunk-4MKCL2OB.js";import"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{c as z,e as T}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ia as y,ka as R}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as n,Jb as S,Kb as M,Ub as v,Vb as p,ab as u,bb as s,ea as g,kc as b,na as h,oa as C,yb as m}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var j=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=f.users,this.dataSource=new $(),this.dataSource.columnDefs.push(d.hyperlink("username",i=>`/iam/users/${i.id}`).setStacked(d.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.created_at).setResponsive(!0).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),N.menu([_.edit(i=>this.openSaveComponent(i)),_.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(O,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(A,{data:I.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(U(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(s(D),s(l),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[b([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,r){o&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),p("changed",function(){return r.get();}),n(2,"button",3),p("click",function(){return r.openSaveComponent();}),n(3,"span"),v(4,0),S()()(),n(5,"sz-ui-table",4),p("update",function(){return r.get();}),S()),o&2&&(m("title",r.title),u(),m("dataSource",r.dataSource),u(4),m("dataSource",r.dataSource));},dependencies:[y,L,F,c],encapsulation:2});let a=t;return a;})();var pe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=C({type:t}),t.ɵinj=g({providers:[l],imports:[T.forChild([{path:"",component:j}]),E,R,B,c]});let a=t;return a;})();export{pe as UsersModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/