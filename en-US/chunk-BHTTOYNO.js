import"./chunk-FBMGVRQH.js";import{g as _}from"./chunk-JHZCIR6V.js";import{e as H,f as q,g as J,i as K,j as Q,k as W}from"./chunk-ENCF6XTC.js";import{q as X,t as Y}from"./chunk-YJSXPXWI.js";import"./chunk-OKU4SN6A.js";import{a as Z,b as j,d as w,e as B,g as M}from"./chunk-WBZAM75Y.js";import"./chunk-6SRMRYZC.js";import{f as ae}from"./chunk-ACGKKLNQ.js";import"./chunk-SUXNJZRF.js";import{b as ne}from"./chunk-ISAWOBMZ.js";import{a as g,b as ee,c as te,e as ie,o as oe,p as re}from"./chunk-L6BMLV26.js";import{b as N}from"./chunk-5ODKHLUD.js";import"./chunk-LOBLBQWK.js";import{b as x}from"./chunk-ER63VEFB.js";import{i as G}from"./chunk-GTAADJAG.js";import{d as p,g as v,h as D,l as z,n as R,o as I,p as F,s as b,t as L,v as y}from"./chunk-QNNLOUIR.js";import{a as k}from"./chunk-NAIGIBUH.js";import{a as C}from"./chunk-CBGBJVBN.js";import{H as $,Ta as V}from"./chunk-F5GW25TI.js";import{Ab as d,Kb as T,L as u,Mb as c,Wb as E,Zb as U,a as A,cb as l,da as P,db as s,kb as O,la as f,ma as h,nb as m,yb as a,zb as S}from"./chunk-PWEA5SW5.js";var me=(()=>{let i=class i extends H{constructor(e,t,o,n){super(o),this.adminService=e,this.fb=t,this.dialog=o,this.data=n,this.form=t.group({username:[n?.username,[p.required,p.email]],firstName:[n?.firstName,[p.maxLength(128)]],lastName:[n?.lastName,[p.maxLength(128)]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateUser(this.data.id,A(A({},this.data),this.form.value))):this.save(this.adminService.createUser(this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(_),s(F),s(Z),s(j));},i.ɵcmp=f({type:i,selectors:[["softuza-users-save"]],standalone:!0,features:[E([]),O,U],decls:8,vars:3,consts:()=>{let e;e="Username";let t;t="First name";let o;return o="Last name",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",e],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",o],[3,"actions"]];},template:function(t,o){t&1&&(d(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2),a(4,"div",3),d(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),S()()(),d(7,"sz-ui-dialog-actions",6)),t&2&&(m("header",o.header),l(2),m("formGroup",o.form),l(5),m("actions",o.actions));},dependencies:[b,z,v,D,R,I,M,B,G,Q,q,J,Y,X],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i{constructor(e,t){this.dialog=e,this.adminService=t,this.dataSource=new ee(k.paged()),this.dataSource.addRows([te.default([g.text("username","Username"),g.text("firstName","First name"),g.text("lastName","Last name"),ne.menu([N.edit(o=>this.openSaveComponent(o)),N.delete(o=>this.openUserDeleteComponent(o))])])]),this.get();}openSaveComponent(e){this.dialog.open(me,{data:e}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(u(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(x(this.dataSource.indicator),u(1)).subscribe(e=>{console.log(e),this.dataSource.set(e,e.length);});}};i.ɵfac=function(t){return new(t||i)(s(w),s(_));},i.ɵcmp=f({type:i,selectors:[["softuza-users"]],features:[E([ae])],decls:8,vars:4,consts:()=>{let e;e="Users";let t;return t="Add",[["start","",1,"sz-h5"],e,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),T(2,1),S()(),a(3,"sz-ui-table-filter",2),c("search",function(){return o.get();}),a(4,"button",3),c("click",function(){return o.openSaveComponent();}),a(5,"span"),T(6,4),S()()(),a(7,"sz-ui-table",5),c("update",function(){return o.get();}),S()),t&2&&(l(3),m("dataSource",o.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,oe,ie,C],encapsulation:2});let r=i;return r;})();var Se=[{path:"",component:le}];var rt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=h({type:i}),i.ɵinj=P({providers:[_],imports:[$.forChild(Se),M,y,re,C,V]});let r=i;return r;})();export{rt as UsersModule};/**i18n:1d16e7d3b6b09b5ca5f11aee33f3c6ee9a8e446806802ef706aaf87e85c9b2b7*/