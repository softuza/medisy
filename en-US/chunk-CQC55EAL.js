import"./chunk-WB25ISRV.js";import{g as _}from"./chunk-QRYGI6NX.js";import{e as q,f as J,g as K,i as Q,j as W,k as ee}from"./chunk-VT3WYR67.js";import{s as Y,v as Z}from"./chunk-RQNRD2JQ.js";import"./chunk-PD6EMHNS.js";import"./chunk-KGIHDKZN.js";import"./chunk-3UYL57HA.js";import{a as j,b as w,d as B,e as k,g as C}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import{f as se}from"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import{b as ae}from"./chunk-M3UESULM.js";import{a as P,b as A,c as te,d as oe,f as ie,p as re,q as ne}from"./chunk-PTJACGQS.js";import"./chunk-UNCYENX6.js";import{b as H}from"./chunk-VRISEVPV.js";import{E as V,d as p,g as D,h as z,l as R,n as F,o as I,p as b,s as $,t as y,v as G}from"./chunk-GJY7U5GZ.js";import{a as x}from"./chunk-PIKBUH2I.js";import{a as g}from"./chunk-QDC3ZTFW.js";import{M as L,Wa as X,q as M}from"./chunk-NC2N2FCX.js";import{Ab as a,Bb as S,Cb as d,L as u,Mb as N,Pb as c,Zb as E,a as T,ac as v,ea as h,eb as l,fb as s,ma as f,mb as U,na as O,pb as m}from"./chunk-3CXVAQY6.js";var le=(()=>{let o=class o extends q{constructor(t,e,i,n){super(i),this.adminService=t,this.fb=e,this.dialog=i,this.data=n,this.form=e.group({username:[n?.username,[p.required,p.email]],firstName:[n?.firstName,[p.maxLength(128)]],lastName:[n?.lastName,[p.maxLength(128)]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateUser(this.data.id,T(T({},this.data),this.form.value))):this.save(this.adminService.createUser(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(_),s(b),s(j),s(w));},o.ɵcmp=f({type:o,selectors:[["softuza-users-save"]],standalone:!0,features:[E([]),U,v],decls:8,vars:3,consts:()=>{let t;t="Username";let e;e="First name";let i;return i="Last name",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",t],[1,"sz-form-row"],["formControlName","firstName","label",e],["formControlName","lastName","label",i],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2),a(4,"div",3),d(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),S()()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(m("header",i.header),l(2),m("formGroup",i.form),l(5),m("actions",i.actions));},dependencies:[M,$,R,D,z,F,I,C,k,V,W,J,K,Z,Y],encapsulation:2});let r=o;return r;})();var Se=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.adminService=e,this.dataSource=new te(x.paged()),this.dataSource.addRows([oe.default([A.text("username","Username"),A.text("firstName","First name"),A.text("lastName","Last name"),ae.menu([P.edit(i=>this.openSaveComponent(i)),P.delete(i=>this.openUserDeleteComponent(i))])])]),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(Q,{data:ee.delete(this.adminService.deleteUser(t.id),t)}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(H(this.dataSource.indicator),u(1)).subscribe(t=>{console.log(t),this.dataSource.set(t,t.length);});}};o.ɵfac=function(e){return new(e||o)(s(B),s(_));},o.ɵcmp=f({type:o,selectors:[["softuza-users"]],features:[E([se])],decls:8,vars:4,consts:()=>{let t;t="Users";let e;return e="Add",[["start","",1,"sz-h5"],t,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),N(2,1),S()(),a(3,"sz-ui-table-filter",2),c("search",function(){return i.get();}),a(4,"button",3),c("click",function(){return i.openSaveComponent();}),a(5,"span"),N(6,4),S()()(),a(7,"sz-ui-table",5),c("update",function(){return i.get();}),S()),e&2&&(l(3),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[y,re,ie,g],encapsulation:2});let r=o;return r;})();var _e=[{path:"",component:Se}];var at=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=O({type:o}),o.ɵinj=h({providers:[_],imports:[M,L.forChild(_e),C,G,ne,g,X]});let r=o;return r;})();export{at as UsersModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/