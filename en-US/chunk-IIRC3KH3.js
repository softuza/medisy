import{a as Te}from"./chunk-QV5WTJ7Y.js";import"./chunk-6S2NULOH.js";import{a as Oe,b as De,c as Pe}from"./chunk-YBGEX7AS.js";import{b as T}from"./chunk-XZNQVZLE.js";import{g as z}from"./chunk-S77WVTW6.js";import"./chunk-PPO5LMMV.js";import{h as S}from"./chunk-HJ4RP63E.js";import{h as Q}from"./chunk-JI5I5E7Z.js";import{a as v,b as ce,c as Me,e as Ce,q as Ee,r as ge}from"./chunk-2DIHYESB.js";import{c as de,h as ue,i as le,j as Se,l as _e,m as h,n as fe}from"./chunk-JUKWJGHA.js";import{a as oe,b as ie,d as O,e as re,g as D}from"./chunk-LR6DSKQQ.js";import{D as ee,E as te,z as W}from"./chunk-CJ3L35E7.js";import{d as R,g as w,h as B,l as k,n as x,o as H,p as V,s as q}from"./chunk-FZFNR6NR.js";import{a as pe}from"./chunk-MTTAGST2.js";import{a as ne}from"./chunk-X3ZOFRYL.js";import{b as A}from"./chunk-KYTDMX2G.js";import"./chunk-AQB7U7BU.js";import{a as C,c as J,e as E}from"./chunk-4G55JY3H.js";import{d as ae,f as se,i as P,j as me}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as K,Ra as g}from"./chunk-W55BWEJG.js";import{Ab as Y,Bb as m,Cb as p,Db as d,L as u,Nb as Z,Pb as U,Zb as c,ac as M,cb as f,da as b,db as a,ja as _,kb as y,la as l,ma as G,nb as s,tb as F,wb as $,xb as L,yb as j,zb as X}from"./chunk-3QIFGVJ6.js";var Ae=(()=>{let t=class t extends ue{constructor(e,o,r,n){super(r),this.mlabService=e,this.fb=o,this.dialog=r,this.data=n,this.form=o.group({name:[n?.name,[R.required,R.minLength(1)]],description:[n?.description,[]],address:[n?.address,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.laboratories.update(this.data.id,this.form.value));}};t.ɵfac=function(o){return new(o||t)(a(ne),a(V),a(oe),a(ie));},t.ɵcmp=l({type:t,selectors:[["softuza-users-user-group-add"]],standalone:!0,features:[y,M],decls:7,vars:3,consts:()=>{let e;e="Name";let o;o="Description";let r;return r="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","address","label",r],[3,"actions"]];},template:function(o,r){o&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),p()(),d(6,"sz-ui-dialog-actions",5)),o&2&&(s("header",r.header),f(2),s("formGroup",r.form),f(4),s("actions",r.actions));},dependencies:[q,k,w,B,x,H,D,re,h,le,Se,te,W,ee],encapsulation:2});let i=t;return i;})();var N=(()=>{let t=class t{constructor(){this.route=_(C),this.dialog=_(O),this.adminService=_(S),this.typeI18nPipe=_(z),this.dataSource=new ce(),this.user=this.route.snapshot.data.user,this.dataSource.addRows(Me.default([v.text("name",pe.name,e=>e.name),v.menu("menu",[P.delete(e=>this.openDeleteComponent(e))])])),this.get();}openDeleteComponent(e){this.dialog.open(_e,{data:fe.delete(this.adminService.deleteUserGroup(this.user.id,e.id),e)}).afterClosed().pipe(u(1)).subscribe(o=>{this.dataSource.delete(o);});}openAddComponent(){this.dialog.open(Ae).afterClosed().pipe(u(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}get(){this.adminService.getUserGroups(this.user.id).pipe(de(this.dataSource.indicator)).pipe(u(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=l({type:t,selectors:[["softuza-users-user-groups"]],standalone:!0,features:[c([z]),M],decls:5,vars:4,consts:()=>{let e;return e="Add",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(m(0,"sz-ui-table-filter",0)(1,"button",1),U("click",function(){return r.openAddComponent();}),m(2,"span"),Z(3,2),p()()(),m(4,"sz-ui-table",3),U("update",function(){return r.get();}),p()),o&2&&(s("dataSource",r.dataSource),f(4),s("paginationEnabled",!1)("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[E,ge,Ee,Ce,g,K],encapsulation:2});let i=t;return i;})();var ze=()=>[N];function Ie(i,t){if(i&1&&d(0,"sz-ui-card",4),i&2){let Ue=t.$implicit;s("card",Ue);}}function be(i,t){i&1&&d(0,"softuza-users-user-groups");}var he=(()=>{let t=class t{constructor(e,o,r,n){this.dialog=e,this.adminService=o,this.route=r,this.router=n,this.items=[],this.userMenu=me.more([P.edit(()=>this.openSaveComponent())]),this.user=this.route.snapshot.data.user;}openSaveComponent(){this.dialog.open(Te,{data:this.user}).afterClosed().pipe(u(1)).subscribe(()=>{this.getUser();});}getUser(){this.adminService.getUserById(this.user.id).pipe(u(1)).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(o){return new(o||t)(a(O),a(S),a(C),a(J));},t.ɵcmp=l({type:t,selectors:[["softuza-users-user"]],features:[c([S])],decls:9,vars:2,consts:()=>{let e;return e="Groups",[[3,"title","menu"],[1,"sz-grid-card"],["mat-stretch-tabs","false"],["label",e],[3,"card"]];},template:function(o,r){o&1&&(d(0,"sz-ui-header-info",0),m(1,"div",1),L(2,Ie,1,1,"sz-ui-card",4,$),p(),m(4,"mat-tab-group",2)(5,"mat-tab",3),F(6,be,1,0),X(7,6,ze),Y(),p()()),o&2&&(s("title",r.user.username)("menu",r.userMenu),j(2,r.items));},dependencies:[T,A,Oe,De],encapsulation:2});let i=t;return i;})();var Ne=[{path:"",component:he}];var Lt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=G({type:t}),t.ɵinj=b({imports:[E.forChild(Ne),Q,T,h,A,ae,D,g,se,Pe,N]});let i=t;return i;})();export{Lt as UserModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/