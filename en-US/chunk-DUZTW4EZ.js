import"./chunk-R2SROALF.js";import{g as _}from"./chunk-P4YO2IM5.js";import{e as H,f as q,g as J,i as K,j as Q,k as W}from"./chunk-WR4GG44T.js";import{q as X,t as Y}from"./chunk-XIKUJ2RB.js";import"./chunk-ZC5VE3PD.js";import{a as Z,b as j,d as w,e as B,g as M}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{f as ae}from"./chunk-A4RP7L5Q.js";import"./chunk-SIM3MWAY.js";import{b as ne}from"./chunk-SYJ5COXL.js";import{a as g,b as ee,c as te,d as oe,n as ie,o as re}from"./chunk-X7AK5RKT.js";import{b as N}from"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as x}from"./chunk-37GZDSHT.js";import{i as G}from"./chunk-FJNI2GB6.js";import{d as p,g as v,h as D,l as z,n as R,o as I,p as F,s as b,t as L,v as y}from"./chunk-FEFUQJM2.js";import{a as k}from"./chunk-NW5OYJVI.js";import{a as C}from"./chunk-CVLFG5YI.js";import{H as $,Ta as V}from"./chunk-RQMADBIK.js";import{Ab as d,Kb as T,L as u,Mb as c,Wb as E,Zb as U,a as A,cb as l,da as P,db as s,kb as O,la as f,ma as h,nb as m,yb as a,zb as S}from"./chunk-3PI2VV3G.js";var me=(()=>{let o=class o extends H{constructor(t,e,i,n){super(i),this.adminService=t,this.fb=e,this.dialog=i,this.data=n,this.form=e.group({username:[n?.username,[p.required,p.email]],firstName:[n?.firstName,[p.maxLength(128)]],lastName:[n?.lastName,[p.maxLength(128)]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateUser(this.data.id,A(A({},this.data),this.form.value))):this.save(this.adminService.createUser(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(_),s(F),s(Z),s(j));},o.ɵcmp=f({type:o,selectors:[["softuza-users-save"]],standalone:!0,features:[E([]),O,U],decls:8,vars:3,consts:()=>{let t;t="Username";let e;e="First name";let i;return i="Last name",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",t],[1,"sz-form-row"],["formControlName","firstName","label",e],["formControlName","lastName","label",i],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2),a(4,"div",3),d(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),S()()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(m("header",i.header),l(2),m("formGroup",i.form),l(5),m("actions",i.actions));},dependencies:[b,z,v,D,R,I,M,B,G,Q,q,J,Y,X],encapsulation:2});let r=o;return r;})();var le=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.adminService=e,this.dataSource=new ee(k.paged()),this.dataSource.addRows([te.default([g.text("username","Username"),g.text("firstName","First name"),g.text("lastName","Last name"),ne.menu([N.edit(i=>this.openSaveComponent(i)),N.delete(i=>this.openUserDeleteComponent(i))])])]),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(K,{data:W.delete(this.adminService.deleteUser(t.id),t)}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(x(this.dataSource.indicator),u(1)).subscribe(t=>{console.log(t),this.dataSource.set(t,t.length);});}};o.ɵfac=function(e){return new(e||o)(s(w),s(_));},o.ɵcmp=f({type:o,selectors:[["softuza-users"]],features:[E([ae])],decls:8,vars:4,consts:()=>{let t;t="Users";let e;return e="Add",[["start","",1,"sz-h5"],t,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),S()(),a(3,"sz-ui-table-filter",2),c("search",function(){return i.get();}),a(4,"button",3),c("click",function(){return i.openSaveComponent();}),a(5,"span"),T(6,4),S()()(),a(7,"sz-ui-table",5),c("update",function(){return i.get();}),S()),e&2&&(l(3),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[L,ie,oe,C],encapsulation:2});let r=o;return r;})();var Se=[{path:"",component:le}];var rt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=h({type:o}),o.ɵinj=P({providers:[_],imports:[$.forChild(Se),M,y,re,C,V]});let r=o;return r;})();export{rt as UsersModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/