import{a as M}from"./chunk-PRFJGXCG.js";import{a as b,c as v}from"./chunk-RWROI56C.js";import{a as y,b as T,c as n,f as F,g as U}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as _,j as D}from"./chunk-INGRYE55.js";import{d as z}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{b as t,c}from"./chunk-JVOCSYLO.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as u}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as C}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as d,Kb as p,Wb as l,bb as S,ja as r,mc as f,na as h,nc as g,yb as m}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var k=(()=>{let a=class a{constructor(){this.dialog=r(z),this.adminService=r(v),this.router=r(C),this.dataSource=new F,this.appBarConfig={title:u.users,menu:c.default([t.add(this.openSaveComponent.bind(this)),t.menu([t.search()])])},this.dataSource.columnDefs.push(n.hyperlink("username").setClickFn(e=>this.router.navigate([b.Users,e.id])).setStacked(n.string("name").setValueGetter(e=>`${e.firstName??""} ${e.lastName??""}`).setValueClassFontSmall()),n.string("createdTimestamp").setHeaderName(u.created_at).setResponsive(!0).setValueGetter(e=>new Date(e.createdTimestamp).toDateString()),n.menu(c.more([t.edit(this.openSaveComponent.bind(this)),t.divider(),t.delete(this.openUserDeleteComponent.bind(this))]))),this.get()}openSaveComponent(e){this.dialog.open(M,{data:e}).afterClosed().subscribe(()=>{this.get()})}openUserDeleteComponent(e){this.dialog.open(D,{data:_.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().subscribe(()=>{this.get()})}get(){this.adminService.getUsers().pipe(U(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length)})}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=h({type:a,selectors:[["sz-iam-users"]],standalone:!0,features:[f([]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,o){i&1&&(d(0,"sz-ui-table-bar",0),l("changed",function(){return o.get()}),p(),d(1,"sz-ui-table",1),l("update",function(){return o.get()}),p()),i&2&&(m("config",o.appBarConfig)("dataSource",o.dataSource),S(),m("dataSource",o.dataSource))},dependencies:[y,T],encapsulation:2});let s=a;return s})();var q=[{path:"",component:k}];export{q as default};
/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/
