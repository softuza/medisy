import{a as B}from"./chunk-6JRSZIAW.js";import{a as D,b as A}from"./chunk-6LN2BZ6K.js";import{c as u}from"./chunk-HH5M6JJS.js";import{a as I}from"./chunk-QW6HGORB.js";import"./chunk-S7INMPNY.js";import"./chunk-SQCF3S47.js";import{d as y}from"./chunk-FRBT2WCB.js";import"./chunk-ZTT2CFXD.js";import"./chunk-HLTWUKSH.js";import"./chunk-276RQCOC.js";import"./chunk-2IPEL4E4.js";import"./chunk-FY76SKRQ.js";import{b as c,c as z}from"./chunk-IDQKS733.js";import{a as R}from"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import{p as T,r as b}from"./chunk-4I74CWZL.js";import"./chunk-3AQJ5CSK.js";import{Gb as h,Hb as C,Ib as M,Jb as p,Kb as m,Lb as s,Yb as v,bb as l,ja as o,mc as E,na as f,nc as U,rb as _,vb as S,wb as g,yb as n}from"./chunk-YAUSGWXJ.js";import"./chunk-QXHRBTK3.js";var O=()=>[import("./chunk-DXUIQOOY.js").then(e=>e.UserGroupsComponent)];function G(e,t){if(e&1&&s(0,"sz-ui-card",2),e&2){let a=t.$implicit;n("card",a);}}function L(e,t){if(e&1&&s(0,"sz-iam-users-user-groups",5),e&2){let a=v();n("user",a.user);}}var F=(()=>{let t=class t{constructor(){this.dialog=o(y),this.accessManagementService=o(u),this.route=o(T),this.router=o(b),this.items=[],this.user=this.route.snapshot.data.user,this.appBarConfig={title:this.user.username,menu:z.default().setItems([c.menu([c.edit(this.openSaveComponent.bind(this))])])};}openSaveComponent(){this.dialog.open(B,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(r=>{this.user=r;});}navigate(r){this.router.navigate([r],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],standalone:!0,features:[E([u]),U],decls:9,vars:1,consts:()=>{let r;return r="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",[[3,"config"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",r],[3,"user"]];},template:function(i,d){i&1&&(s(0,"sz-ui-app-bar",0),p(1,"div",1),C(2,G,1,1,"sz-ui-card",2,h),m(),p(4,"mat-tab-group",3)(5,"mat-tab",4),_(6,L,1,1),S(7,6,O),g(),m()()),i&2&&(n("config",d.appBarConfig),l(2),M(d.items));},dependencies:[R,I,A,D],encapsulation:2});let e=t;return e;})();var V=[{path:"",component:F}];export{V as default};/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/