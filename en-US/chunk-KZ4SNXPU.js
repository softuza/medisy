import{a as ze}from"./chunk-4OBBDURV.js";import{a as Te,b as Ie,c as Oe}from"./chunk-EC77XKO6.js";import{c as l}from"./chunk-ABYGWD2W.js";import{a as I}from"./chunk-7PXL34CK.js";import{a as Ce,b as he,d as ve,f as Ee,i as be,j as De}from"./chunk-LQ5CCMMB.js";import"./chunk-5R23GLPS.js";import"./chunk-WFQLTXIP.js";import"./chunk-FIFCAY3U.js";import"./chunk-OK2QS2H3.js";import{e as fe,f as Se,g as Me,i as _e,j as O,k as ge}from"./chunk-FREEXNMO.js";import{a as T}from"./chunk-JHFVKLT2.js";import{d as le,f as de,h as D,j as ce}from"./chunk-4BR2QDUR.js";import{a as te,b as ie,d as v,e as oe,g as E}from"./chunk-XG5XEC3X.js";import"./chunk-VZOUZHWP.js";import{j as ue}from"./chunk-D2NQAH4S.js";import"./chunk-BQGY2E4W.js";import{h as pe}from"./chunk-QO44V4EG.js";import"./chunk-VGKLEGC7.js";import{b as re,i as ne,k as se,l as me}from"./chunk-DPTX3R7K.js";import{d as x,f as V,g as q,l as H,n as J,q as K,r as Q,u as W}from"./chunk-5RALKHWD.js";import"./chunk-CDJ3WT4B.js";import{a as Y,c as Z,e as h}from"./chunk-6KMSPDBU.js";import"./chunk-DC3E3YM6.js";import{aa as ee,ja as ae,la as b}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Fa as y,Fb as B,Gb as j,Hb as S,Ib as M,Jb as s,Kb as p,Lb as d,Vb as _,Wb as N,Yb as k,bb as u,cb as m,ea as R,hc as X,ic as w,ja as G,na as f,nc as g,oa as U,oc as C,qb as F,vb as L,wb as P,xb as $,zb as n}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";function ye(o,t){if(o&1&&(s(0,"mat-option",4),X(1),p()),o&2){let c=t.$implicit;n("value",c.id),u(),w(c.name);}}var Ge=(()=>{let t=class t extends fe{constructor(e,i,r,a){super(r),this.accessManagementService=e,this.fb=i,this.dialog=r,this.user=a,this.groups=[],this.form=i.group({groupId:[null,[x.required]]}),this.getGroups();}flattenGroups(e){let i=[];function r(a){i.push({id:a.id,name:a.name,path:a.path,subGroups:[]}),a.subGroups&&a.subGroups.forEach(r);}return e.forEach(r),i;}getGroups(){this.accessManagementService.getGroups().subscribe(e=>{this.groups=this.flattenGroups(e);});}submit(){this.IsValid()&&this.accessManagementService.addUserGroup(this.user.id,this.form.value.groupId).subscribe(()=>{this.dialog.close(!0);});}};t.ɵfac=function(i){return new(i||t)(m(l),m(Q),m(te),m(ie));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-group-add"]],standalone:!0,features:[F,C],decls:10,vars:5,consts:()=>{let e;return e="Groups",[e,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","groupId"],[3,"value"],[3,"actions"]];},template:function(i,r){i&1&&(d(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2)(3,"mat-form-field")(4,"mat-label"),_(5,0),p(),s(6,"mat-select",3),S(7,ye,2,2,"mat-option",4,B),p()()()(),d(9,"sz-ui-dialog-actions",5)),i&2&&(n("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),n("formGroup",r.form),u(5),M(r.groups),u(2),n("actions",r.actions));},dependencies:[W,H,V,q,J,K,E,oe,O,Se,Me,me,ne,re,se,ee],encapsulation:2});let o=t;return o;})();var z=(()=>{let t=class t{constructor(){this.dialog=G(v),this.adminService=G(l),this.user=y.required(),this.dataSource=new ve(),this.dataSource.columnDefs.push(Ce.string("name").setValueGetter(e=>e.name),he.menu([D.delete(e=>this.openDeleteComponent(e))]));}ngOnInit(){this.get();}openDeleteComponent(e){this.dialog.open(_e,{data:ge.delete(this.adminService.deleteUserGroup(this.user().id,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openAddComponent(){this.dialog.open(Ge,{data:this.user()}).afterClosed().subscribe(e=>{e&&this.get();});}get(){this.adminService.getUserGroups(this.user().id).pipe(ue(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-groups"]],inputs:{user:[1,"user"]},standalone:!0,features:[g([]),C],decls:5,vars:2,consts:()=>{let e;return e="Add",[e,[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,r){i&1&&(s(0,"sz-ui-table-search-filter",1)(1,"button",2),N("click",function(){return r.openAddComponent();}),s(2,"span"),_(3,0),p()()(),s(4,"sz-ui-table",3),N("update",function(){return r.get();}),p()),i&2&&(n("dataSource",r.dataSource),u(4),n("dataSource",r.dataSource));},dependencies:[h,De,be,Ee,b,ae],encapsulation:2});let o=t;return o;})();var Le=()=>[z];function Pe(o,t){if(o&1&&d(0,"sz-ui-card",2),o&2){let c=t.$implicit;n("card",c);}}function $e(o,t){if(o&1&&d(0,"sz-iam-users-user-groups",5),o&2){let c=k();n("user",c.user);}}var Ne=(()=>{let t=class t{constructor(e,i,r,a){this.dialog=e,this.accessManagementService=i,this.route=r,this.router=a,this.items=[],this.userMenu=ce.more([D.edit(()=>this.openSaveComponent())]),this.user=this.route.snapshot.data.user;}openSaveComponent(){this.dialog.open(ze,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)(m(v),m(l),m(Y),m(Z));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],features:[g([l])],decls:9,vars:3,consts:()=>{let e;return e="Groups",[[3,"title","menu","backEnabled"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",e],[3,"user"]];},template:function(i,r){i&1&&(d(0,"sz-ui-app-bar",0),s(1,"div",1),S(2,Pe,1,1,"sz-ui-card",2,j),p(),s(4,"mat-tab-group",3)(5,"mat-tab",4),L(6,$e,1,1),P(7,6,Le),$(),p()()),i&2&&(n("title",r.user.username)("menu",r.userMenu)("backEnabled",!0),u(2),M(r.items));},dependencies:[I,T,Te,Ie],encapsulation:2});let o=t;return o;})();var Ae=[{path:"",component:Ne}];var $t=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=U({type:t}),t.ɵinj=R({imports:[h.forChild(Ae),pe,I,O,T,le,E,b,de,Oe,z]});let o=t;return o;})();export{$t as UserModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/