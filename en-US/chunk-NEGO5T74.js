import{a as Ue}from"./chunk-Z5WVY6OW.js";import{a as Ae,b as Oe,c as Pe}from"./chunk-QRNYUQ6K.js";import{i as l}from"./chunk-4ARJR6OJ.js";import{b}from"./chunk-YXSUZKKK.js";import{h as oe}from"./chunk-JIYGV4IV.js";import{b as G,c as Ce,e as Ee,i as ve,u as Te,v as De}from"./chunk-7ZAX5VXY.js";import{a as ue}from"./chunk-LDBLW2WO.js";import{c as fe,h as Se,i as _e,j as Me,l as he,m as R,n as ge}from"./chunk-73AFUK6P.js";import{b as U}from"./chunk-APAEA23X.js";import{a as se,b as me,d as A,e as pe,g as O}from"./chunk-VQ3CVIXE.js";import{a as ie,g as re,w as ne,x as ae}from"./chunk-75XLR4TY.js";import{d as Z,f as x,g as H,k as V,m as q,p as J,q as K,t as Q,u as v,w as W,y as T}from"./chunk-VZUJMTKN.js";import{d as de,f as le,i as P,j as ce}from"./chunk-3KPEI5IA.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ea as te,Ga as D,ya as ee}from"./chunk-TT7ZQ2V6.js";import{Ab as B,Bb as w,Cb as M,Db as h,Eb as s,Fb as u,Gb as c,M as m,Qb as g,Sb as N,dc as X,ea as y,ec as Y,fb as d,gb as p,gc as C,jc as E,ka as _,na as f,nb as $,oa as F,qb as L,rb as j,sb as k,ub as a}from"./chunk-CQJO6ZYU.js";function Ie(i,t){if(i&1&&(s(0,"mat-option",5),X(1),u()),i&2){let S=t.$implicit;a("value",S.id),d(),Y(S.name);}}var Re=(()=>{let t=class t extends Se{constructor(e,o,r,n){super(r),this.adminService=e,this.fb=o,this.dialog=r,this.user=n,this.groups=[],this.form=o.group({groupId:[null,[Z.required]]}),this.getGroups();}flattenGroups(e){let o=[];function r(n){o.push({id:n.id,name:n.name,path:n.path,subGroups:[]}),n.subGroups&&n.subGroups.forEach(r);}return e.forEach(r),o;}getGroups(){this.adminService.getGroups().pipe(m(1)).subscribe(e=>{this.groups=this.flattenGroups(e);});}submit(){this.IsValid()&&this.adminService.addUserGroup(this.user.id,this.form.value.groupId).pipe(m(1)).subscribe(()=>{this.dialog.close(!0);});}};t.ɵfac=function(o){return new(o||t)(p(l),p(K),p(se),p(me));},t.ɵcmp=f({type:t,selectors:[["softuza-users-user-group-add"]],standalone:!0,features:[$,E],decls:10,vars:3,consts:()=>{let e;return e="Groups",[[3,"header"],[1,"sz-form",3,"formGroup"],e,["formControlName","groupId"],[3,"actions"],[3,"value"]];},template:function(o,r){o&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1)(3,"mat-form-field")(4,"mat-label"),g(5,2),u(),s(6,"mat-select",3),M(7,Ie,2,2,"mat-option",5,B),u()()()(),c(9,"sz-ui-dialog-actions",4)),o&2&&(a("header",r.header),d(2),a("formGroup",r.form),d(5),h(r.groups),d(2),a("actions",r.actions));},dependencies:[Q,V,x,H,q,J,O,pe,R,_e,Me,ae,re,ie,ne,ee],encapsulation:2});let i=t;return i;})();var z=(()=>{let t=class t{constructor(){this.route=_(v),this.dialog=_(A),this.adminService=_(l),this.dataSource=new Ee(),this.user=this.route.snapshot.data.user,this.dataSource.addRows(Ce.default([G.text("name",ue.name,e=>e.name),G.menu("menu",[P.delete(e=>this.openDeleteComponent(e))])])),this.get();}openDeleteComponent(e){this.dialog.open(he,{data:ge.delete(this.adminService.deleteUserGroup(this.user.id,e.id),e)}).afterClosed().pipe(m(1)).subscribe(o=>{this.dataSource.delete(o);});}openAddComponent(){this.dialog.open(Re,{data:this.user}).afterClosed().pipe(m(1)).subscribe(e=>{e&&this.get();});}get(){this.adminService.getUserGroups(this.user.id).pipe(fe(this.dataSource.indicator)).pipe(m(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=f({type:t,selectors:[["softuza-users-user-groups"]],standalone:!0,features:[C([]),E],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(s(0,"sz-ui-table-search-filter",0)(1,"button",1),N("click",function(){return r.openAddComponent();}),s(2,"span"),g(3,2),u()()(),s(4,"sz-ui-table",3),N("update",function(){return r.get();}),u()),o&2&&(a("dataSource",r.dataSource),d(4),a("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[T,De,Te,ve,D,te],encapsulation:2});let i=t;return i;})();var Fe=()=>[z];function $e(i,t){if(i&1&&c(0,"sz-ui-card",4),i&2){let S=t.$implicit;a("card",S);}}function Le(i,t){i&1&&c(0,"softuza-users-user-groups");}var be=(()=>{let t=class t{constructor(e,o,r,n){this.dialog=e,this.adminService=o,this.route=r,this.router=n,this.items=[],this.userMenu=ce.more([P.edit(()=>this.openSaveComponent())]),this.user=this.route.snapshot.data.user;}openSaveComponent(){this.dialog.open(Ue,{data:this.user}).afterClosed().pipe(m(1)).subscribe(()=>{this.getUser();});}getUser(){this.adminService.getUserById(this.user.id).pipe(m(1)).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(o){return new(o||t)(p(A),p(l),p(v),p(W));},t.ɵcmp=f({type:t,selectors:[["softuza-users-user"]],features:[C([l])],decls:9,vars:2,consts:()=>{let e;return e="Groups",[[3,"title","menu"],[1,"sz-grid-card"],["mat-stretch-tabs","false"],["label",e],[3,"card"]];},template:function(o,r){o&1&&(c(0,"sz-ui-header-info",0),s(1,"div",1),M(2,$e,1,1,"sz-ui-card",4,w),u(),s(4,"mat-tab-group",2)(5,"mat-tab",3),L(6,Le,1,0),j(7,6,Fe),k(),u()()),o&2&&(a("title",r.user.username)("menu",r.userMenu),d(2),h(r.items));},dependencies:[b,U,Ae,Oe],encapsulation:2});let i=t;return i;})();var ze=[{path:"",component:be}];var wt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=F({type:t}),t.ɵinj=y({imports:[T.forChild(ze),oe,b,R,U,de,O,D,le,Pe,z]});let i=t;return i;})();export{wt as UserModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/