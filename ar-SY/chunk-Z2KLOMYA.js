import{a as O}from"./chunk-PS4OMQ3F.js";import{c as l}from"./chunk-55762Q5S.js";import{a as d,b as I,d as N,e as B,g as $,j as L,k as F}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import{i as U,k as A}from"./chunk-5NWVIDQT.js";import{a as c}from"./chunk-NXQ5VREG.js";import{h as g}from"./chunk-HWSLRHWT.js";import{d as D,g as E}from"./chunk-Z2LVGH3F.js";import"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as f}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{c as z,e as T}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ja as y,la as R}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as n,Kb as S,Lb as M,Vb as v,Wb as p,bb as u,cb as s,ea as _,na as h,nc as b,oa as C,zb as m}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var j=(()=>{let t=class t{constructor(e,i,r){this.dialog=e,this.adminService=i,this.router=r,this.dataSource=new N(),this.appBarConfig={title:f.users},this.dataSource.columnDefs.push(d.hyperlink("username",o=>`/iam/users/${o.id}`).setStacked(d.string("name").setValueGetter(o=>`${o.firstName??""} ${o.lastName??""}`).setValueClassFontSmall()),d.string("createdTimestamp").setName(f.created_at).setResponsive(!0).setValueGetter(o=>new Date(o.createdTimestamp).toDateString()),I.menu([g.edit(o=>this.openSaveComponent(o)),g.delete(o=>this.openUserDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(O,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(U,{data:A.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(B(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(s(D),s(l),s(z));},t.ɵcmp=h({type:t,selectors:[["sz-iam-users"]],features:[b([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,r){i&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),p("changed",function(){return r.get();}),n(2,"button",3),p("click",function(){return r.openSaveComponent();}),n(3,"span"),v(4,0),S()()(),n(5,"sz-ui-table",4),p("update",function(){return r.get();}),S()),i&2&&(m("config",r.appBarConfig),u(),m("dataSource",r.dataSource),u(4),m("dataSource",r.dataSource));},dependencies:[y,L,$,c],encapsulation:2});let a=t;return a;})();var me=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=C({type:t}),t.ɵinj=_({providers:[l],imports:[T.forChild([{path:"",component:j}]),E,R,F,c]});let a=t;return a;})();export{me as UsersModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/