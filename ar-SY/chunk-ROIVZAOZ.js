import{a as B}from"./chunk-4RODMNCR.js";import{a as D,b as A}from"./chunk-B3FOEZVW.js";import{c as u}from"./chunk-P6UXWRH3.js";import{a as I}from"./chunk-2ESXI7NW.js";import"./chunk-Y6HRGFPG.js";import"./chunk-7LIKFQRF.js";import{d as y}from"./chunk-LY65NDSL.js";import"./chunk-ZMSXH5RZ.js";import"./chunk-G2YTV5YP.js";import"./chunk-WX4XW32G.js";import"./chunk-M4AIK4I3.js";import"./chunk-74QTK57S.js";import{b as c,c as z}from"./chunk-77BL6AJT.js";import{a as R}from"./chunk-N3OI26PY.js";import"./chunk-SHFMPPN3.js";import"./chunk-N4UNFT77.js";import"./chunk-XYHX3JVK.js";import"./chunk-WOGJSFX2.js";import{p as T,r as b}from"./chunk-7OTI4YDK.js";import"./chunk-27OSCRM5.js";import{Gb as h,Hb as C,Ib as M,Jb as p,Kb as m,Lb as s,Yb as v,bb as l,ja as o,mc as E,na as f,nc as U,rb as _,vb as S,wb as g,yb as n}from"./chunk-GVVLUNO3.js";import"./chunk-VARUJZUG.js";var O=()=>[import("./chunk-VUNFXHX5.js").then(e=>e.UserGroupsComponent)];function G(e,t){if(e&1&&s(0,"sz-ui-card",2),e&2){let a=t.$implicit;n("card",a);}}function L(e,t){if(e&1&&s(0,"sz-iam-users-user-groups",5),e&2){let a=v();n("user",a.user);}}var F=(()=>{let t=class t{constructor(){this.dialog=o(y),this.accessManagementService=o(u),this.route=o(T),this.router=o(b),this.items=[],this.user=this.route.snapshot.data.user,this.appBarConfig={title:this.user.username,menu:z.default().setItems([c.menu([c.edit(this.openSaveComponent.bind(this))])])};}openSaveComponent(){this.dialog.open(B,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(r=>{this.user=r;});}navigate(r){this.router.navigate([r],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],standalone:!0,features:[E([u]),U],decls:9,vars:1,consts:()=>{let r;return r="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",[[3,"config"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",r],[3,"user"]];},template:function(i,d){i&1&&(s(0,"sz-ui-app-bar",0),p(1,"div",1),C(2,G,1,1,"sz-ui-card",2,h),m(),p(4,"mat-tab-group",3)(5,"mat-tab",4),_(6,L,1,1),S(7,6,O),g(),m()()),i&2&&(n("config",d.appBarConfig),l(2),M(d.items));},dependencies:[R,I,A,D],encapsulation:2});let e=t;return e;})();var V=[{path:"",component:F}];export{V as default};/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/