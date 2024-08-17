import{a as ze}from"./chunk-QMQUFE3F.js";import{a as be,b as De,c as Te}from"./chunk-WNZGAC5B.js";import{c as d}from"./chunk-PQ4OEC3L.js";import{a as z}from"./chunk-SQKF4B6Q.js";import{a as N,d as he,e as Me,f as _e,i as Ce,j as ve}from"./chunk-ZWBEQEWG.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import{b as le,f as ce,g as fe,h as ge,j as Se,k as I}from"./chunk-BQ3MI4NW.js";import{d as T}from"./chunk-DPEAMXJP.js";import{d as ue,g as de,h as g}from"./chunk-2C5UG3LV.js";import{a as ie,b as oe,d as v,e as re,g as b}from"./chunk-WNUUIGGE.js";import"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import{h as pe}from"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{b as ne,h as ae,j as se,k as me}from"./chunk-JACASQJP.js";import{d as k,f as q,g as H,l as J,n as K,q as Q,r as W,u as Y}from"./chunk-VXNH5PTX.js";import"./chunk-KQ5MQZXD.js";import{a as Z,c as ee,e as C}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{aa as te,la as D}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Fa as U,Gb as j,Hb as $,Ib as S,Jb as h,Kb as m,Lb as p,Mb as l,Wb as w,Xb as A,Zb as x,bb as u,cb as s,ea as y,ic as V,ja as G,jc as X,na as f,oa as R,oc as M,pc as _,qb as B,vb as F,wb as L,xb as P,zb as n}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";function Oe(o,t){if(o&1&&(m(0,"mat-option",4),V(1),p()),o&2){let c=t.$implicit;n("value",c.id),u(),X(c.name);}}var Ie=(()=>{let t=class t extends ce{constructor(e,i,r,a){super(r),this.accessManagementService=e,this.fb=i,this.dialog=r,this.user=a,this.groups=[],this.form=i.group({groupId:[null,[k.required]]}),this.getGroups();}flattenGroups(e){let i=[];function r(a){i.push({id:a.id,name:a.name,path:a.path,subGroups:[]}),a.subGroups&&a.subGroups.forEach(r);}return e.forEach(r),i;}getGroups(){this.accessManagementService.getGroups().subscribe(e=>{this.groups=this.flattenGroups(e);});}submit(){this.IsValid()&&this.accessManagementService.addUserGroup(this.user.id,this.form.value.groupId).subscribe(()=>{this.dialog.close(!0);});}};t.ɵfac=function(i){return new(i||t)(s(d),s(W),s(ie),s(oe));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-group-add"]],standalone:!0,features:[B,_],decls:10,vars:5,consts:()=>{let e;return e="Groups",[e,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","groupId"],[3,"value"],[3,"actions"]];},template:function(i,r){i&1&&(l(0,"sz-ui-dialog-header",1),m(1,"mat-dialog-content")(2,"form",2)(3,"mat-form-field")(4,"mat-label"),w(5,0),p(),m(6,"mat-select",3),S(7,Oe,2,2,"mat-option",4,j),p()()()(),l(9,"sz-ui-dialog-actions",5)),i&2&&(n("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),n("formGroup",r.form),u(5),h(r.groups),u(2),n("actions",r.actions));},dependencies:[Y,J,q,H,K,Q,b,re,I,fe,ge,me,ae,ne,se,te],encapsulation:2});let o=t;return o;})();var E=(()=>{let t=class t{constructor(){this.dialog=G(v),this.adminService=G(d),this.user=U.required(),this.dataSource=new he(),this.appBarConfig={title:"Groups",actions:[g.add(this.openAddComponent.bind(this))]},this.dataSource.columnDefs.push(N.string("name").setValueGetter(e=>e.name),N.menu([g.delete(e=>this.openDeleteComponent(e))]));}ngOnInit(){this.get();}openDeleteComponent(e){this.dialog.open(Se,{data:le.delete(this.adminService.deleteUserGroup(this.user().id,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openAddComponent(){this.dialog.open(Ie,{data:this.user()}).afterClosed().subscribe(e=>{e&&this.get();});}get(){this.adminService.getUserGroups(this.user().id).pipe(Me(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-groups"]],inputs:{user:[1,"user"]},standalone:!0,features:[M([]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,r){i&1&&(m(0,"sz-ui-table-bar",0),A("changed",function(){return r.get();}),p(),m(1,"sz-ui-table",1),A("update",function(){return r.get();}),p()),i&2&&(n("config",r.appBarConfig)("dataSource",r.dataSource),u(),n("dataSource",r.dataSource));},dependencies:[C,ve,Ce,_e,D],encapsulation:2});let o=t;return o;})();var Re=()=>[E];function Ue(o,t){if(o&1&&l(0,"sz-ui-card",2),o&2){let c=t.$implicit;n("card",c);}}function Be(o,t){if(o&1&&l(0,"sz-iam-users-user-groups",5),o&2){let c=x();n("user",c.user);}}var Ee=(()=>{let t=class t{constructor(e,i,r,a){this.dialog=e,this.accessManagementService=i,this.route=r,this.router=a,this.items=[],this.user=this.route.snapshot.data.user,this.appBarConfig={title:this.user.username,actions:[g.menu([g.edit(this.openSaveComponent.bind(this))])]};}openSaveComponent(){this.dialog.open(ze,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)(s(v),s(d),s(Z),s(ee));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],features:[M([d])],decls:9,vars:1,consts:()=>{let e;return e="Groups",[[3,"config"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",e],[3,"user"]];},template:function(i,r){i&1&&(l(0,"sz-ui-app-bar",0),m(1,"div",1),S(2,Ue,1,1,"sz-ui-card",2,$),p(),m(4,"mat-tab-group",3)(5,"mat-tab",4),F(6,Be,1,1),L(7,6,Re),P(),p()()),i&2&&(n("config",r.appBarConfig),u(2),h(r.items));},dependencies:[z,T,be,De],encapsulation:2});let o=t;return o;})();var Ge=[{path:"",component:Ee}];var Rt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=R({type:t}),t.ɵinj=y({imports:[C.forChild(Ge),pe,z,I,T,ue,b,D,de,Te,E]});let o=t;return o;})();export{Rt as UserModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/