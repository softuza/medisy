import{a as B}from"./chunk-PRFJGXCG.js";import{a as D,b as A}from"./chunk-VY6EMQDZ.js";import{c as u}from"./chunk-RWROI56C.js";import{a as I}from"./chunk-PEAEHABN.js";import"./chunk-7CRVLPQQ.js";import"./chunk-INGRYE55.js";import{d as y}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{b as c,c as z}from"./chunk-JVOCSYLO.js";import{a as R}from"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as T,r as b}from"./chunk-TN5XOKTF.js";import"./chunk-75V32KEJ.js";import{Gb as h,Hb as C,Ib as M,Jb as p,Kb as m,Lb as s,Yb as v,bb as l,ja as o,mc as E,na as f,nc as U,rb as _,vb as S,wb as g,yb as n}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var O=()=>[import("./chunk-IRXAF543.js").then(e=>e.UserGroupsComponent)];function G(e,t){if(e&1&&s(0,"sz-ui-card",2),e&2){let a=t.$implicit;n("card",a);}}function L(e,t){if(e&1&&s(0,"sz-iam-users-user-groups",5),e&2){let a=v();n("user",a.user);}}var F=(()=>{let t=class t{constructor(){this.dialog=o(y),this.accessManagementService=o(u),this.route=o(T),this.router=o(b),this.items=[],this.user=this.route.snapshot.data.user,this.appBarConfig={title:this.user.username,menu:z.default([c.menu([c.edit(this.openSaveComponent.bind(this))])])};}openSaveComponent(){this.dialog.open(B,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(r=>{this.user=r;});}navigate(r){this.router.navigate([r],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],standalone:!0,features:[E([u]),U],decls:9,vars:1,consts:()=>{let r;return r="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",[[3,"config"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",r],[3,"user"]];},template:function(i,d){i&1&&(s(0,"sz-ui-app-bar",0),p(1,"div",1),C(2,G,1,1,"sz-ui-card",2,h),m(),p(4,"mat-tab-group",3)(5,"mat-tab",4),_(6,L,1,1),S(7,6,O),g(),m()()),i&2&&(n("config",d.appBarConfig),l(2),M(d.items));},dependencies:[R,I,A,D],encapsulation:2});let e=t;return e;})();var V=[{path:"",component:F}];export{V as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/