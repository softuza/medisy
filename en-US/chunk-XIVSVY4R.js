import{c as S}from"./chunk-5ZBC3AX6.js";import{c as J,d as Q,e as C,h as W,i as Y}from"./chunk-CAFAE33Z.js";import"./chunk-J5QQY2QR.js";import{b as K}from"./chunk-JOIIV6VE.js";import"./chunk-CNLCC23Q.js";import"./chunk-5E6K5YLE.js";import{b as w,f as j,g as X,h as q,j as H,k}from"./chunk-Z2ZUJRKU.js";import{a as A,b as O,d as I,e as P,g as R}from"./chunk-QI2VJ3F3.js";import{c as B,t as $}from"./chunk-2WR3J7DZ.js";import"./chunk-EA7HCRH3.js";import"./chunk-7AANOILR.js";import{i as L,k as V}from"./chunk-FJQUKBXX.js";import{d as v,f as b,g as z,l as D,o as F,r as T,s as N,u as E}from"./chunk-QSQP3PNI.js";import{b as d,c as _}from"./chunk-E3F62UZG.js";import"./chunk-33ZTXJ25.js";import"./chunk-4MW6KJIR.js";import"./chunk-IZAIB3R2.js";import{a as U}from"./chunk-FENOVBAP.js";import"./chunk-RGHZSPOL.js";import{r as G}from"./chunk-73EUG6I6.js";import"./chunk-SNLNGOLR.js";import"./chunk-SNT3GI4V.js";import{Fa as y}from"./chunk-3TPLYAOD.js";import{Kb as m,Lb as l,Mb as u,Xb as h,cb as s,ja as a,na as p,nb as M,qc as c,rc as f,zb as n}from"./chunk-4PLW75EI.js";import{a as g}from"./chunk-ZSJPE3V4.js";var Z=(()=>{let t=class t extends j{constructor(){let e=a(A);super(e),this.adminService=a(S),this.fb=a(N),this.data=a(O);let i=this.fb;this.dialog=e;let o=this.data;this.form=i.group({name:[o?.name,[v.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,g(g({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=p({type:t,selectors:[["sz-iam-users-save"]],standalone:!0,features:[c([]),M,f],decls:5,vars:5,consts:()=>{let e;return e="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[3,"actions"]];},template:function(i,o){i&1&&(u(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-input-text",2),l()(),u(4,"sz-ui-dialog-actions",3)),i&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),n("formGroup",o.form),s(2),n("actions",o.actions));},dependencies:[E,D,b,z,F,T,R,P,L,K,V,y,k,X,q,$,B],encapsulation:2});let r=t;return r;})();var x=(()=>{let t=class t{constructor(){this.dialog=a(I),this.adminService=a(S),this.router=a(G),this.dataSource=new W(),this.appBarConfig={title:U.groups,menu:_.default([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(C.string("name"),C.menu(_.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openUserDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(Z,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(H,{data:w.delete(this.adminService.deleteGroup(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(Y(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=p({type:t,selectors:[["sz-iam-groups"]],standalone:!0,features:[c([]),f],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,o){i&1&&(m(0,"sz-ui-table-bar",0),h("changed",function(){return o.get();}),l(),m(1,"sz-ui-table",1),h("update",function(){return o.get();}),l()),i&2&&(n("config",o.appBarConfig)("dataSource",o.dataSource),s(),n("dataSource",o.dataSource));},dependencies:[J,Q],encapsulation:2});let r=t;return r;})();var Oe=[{path:"",component:x}];export{Oe as default};/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/