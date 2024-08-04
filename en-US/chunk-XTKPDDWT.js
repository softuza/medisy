import{a as ze}from"./chunk-QY2TWVHV.js";import{a as be,b as Ie,c as Oe}from"./chunk-MHNFS63P.js";import{c as l}from"./chunk-V7BXWD6K.js";import{a as I}from"./chunk-RO2GEY6U.js";import{a as ge,b as Ce,d as he,e as ve,g as De,j as Ee,k as Te}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import"./chunk-QHHLUO4M.js";import{e as ce,f as fe,g as Se,i as _e,j as O,k as Me}from"./chunk-ATQTF7V2.js";import{a as b}from"./chunk-XTD4P5RM.js";import{d as ue,f as le,h as T,j as de}from"./chunk-SE7A63UJ.js";import{a as te,b as ie,d as v,e as oe,g as D}from"./chunk-KXHITGXF.js";import"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import{h as pe}from"./chunk-BVTPLI23.js";import"./chunk-MJ3OXUGM.js";import{b as re,h as ne,j as se,k as me}from"./chunk-EFKI6RZJ.js";import{d as x,f as V,g as q,l as H,n as J,q as K,r as Q,u as W}from"./chunk-4JGOPH4G.js";import"./chunk-UFIT6BFN.js";import{a as Y,c as Z,e as h}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{aa as ee,ja as ae,la as E}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Fa as y,Fb as $,Gb as j,Hb as S,Ib as _,Jb as s,Kb as p,Lb as d,Vb as M,Wb as N,Yb as X,bb as u,cb as m,ea as R,hc as k,ic as w,ja as G,na as f,nc as g,oa as U,oc as C,qb as F,vb as L,wb as P,xb as B,zb as n}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";function ye(o,t){if(o&1&&(s(0,"mat-option",4),k(1),p()),o&2){let c=t.$implicit;n("value",c.id),u(),w(c.name);}}var Ge=(()=>{let t=class t extends ce{constructor(e,i,r,a){super(r),this.accessManagementService=e,this.fb=i,this.dialog=r,this.user=a,this.groups=[],this.form=i.group({groupId:[null,[x.required]]}),this.getGroups();}flattenGroups(e){let i=[];function r(a){i.push({id:a.id,name:a.name,path:a.path,subGroups:[]}),a.subGroups&&a.subGroups.forEach(r);}return e.forEach(r),i;}getGroups(){this.accessManagementService.getGroups().subscribe(e=>{this.groups=this.flattenGroups(e);});}submit(){this.IsValid()&&this.accessManagementService.addUserGroup(this.user.id,this.form.value.groupId).subscribe(()=>{this.dialog.close(!0);});}};t.ɵfac=function(i){return new(i||t)(m(l),m(Q),m(te),m(ie));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-group-add"]],standalone:!0,features:[F,C],decls:10,vars:5,consts:()=>{let e;return e="Groups",[e,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","groupId"],[3,"value"],[3,"actions"]];},template:function(i,r){i&1&&(d(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2)(3,"mat-form-field")(4,"mat-label"),M(5,0),p(),s(6,"mat-select",3),S(7,ye,2,2,"mat-option",4,$),p()()()(),d(9,"sz-ui-dialog-actions",5)),i&2&&(n("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),u(2),n("formGroup",r.form),u(5),_(r.groups),u(2),n("actions",r.actions));},dependencies:[W,H,V,q,J,K,D,oe,O,fe,Se,me,ne,re,se,ee],encapsulation:2});let o=t;return o;})();var z=(()=>{let t=class t{constructor(){this.dialog=G(v),this.adminService=G(l),this.user=y.required(),this.dataSource=new he(),this.dataSource.columnDefs.push(ge.string("name").setValueGetter(e=>e.name),Ce.menu([T.delete(e=>this.openDeleteComponent(e))]));}ngOnInit(){this.get();}openDeleteComponent(e){this.dialog.open(_e,{data:Me.delete(this.adminService.deleteUserGroup(this.user().id,e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}openAddComponent(){this.dialog.open(Ge,{data:this.user()}).afterClosed().subscribe(e=>{e&&this.get();});}get(){this.adminService.getUserGroups(this.user().id).pipe(ve(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user-groups"]],inputs:{user:[1,"user"]},standalone:!0,features:[g([]),C],decls:5,vars:2,consts:()=>{let e;return e="Add",[e,[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,r){i&1&&(s(0,"sz-ui-table-search-filter",1)(1,"button",2),N("click",function(){return r.openAddComponent();}),s(2,"span"),M(3,0),p()()(),s(4,"sz-ui-table",3),N("update",function(){return r.get();}),p()),i&2&&(n("dataSource",r.dataSource),u(4),n("dataSource",r.dataSource));},dependencies:[h,Te,Ee,De,E,ae],encapsulation:2});let o=t;return o;})();var Le=()=>[z];function Pe(o,t){if(o&1&&d(0,"sz-ui-card",2),o&2){let c=t.$implicit;n("card",c);}}function Be(o,t){if(o&1&&d(0,"sz-iam-users-user-groups",5),o&2){let c=X();n("user",c.user);}}var Ne=(()=>{let t=class t{constructor(e,i,r,a){this.dialog=e,this.accessManagementService=i,this.route=r,this.router=a,this.items=[],this.user=this.route.snapshot.data.user,this.appBarConfig={title:this.user.username,menu:de.more([T.edit(()=>this.openSaveComponent())])};}openSaveComponent(){this.dialog.open(ze,{data:this.user}).afterClosed().subscribe(()=>{this.getUser();});}getUser(){this.accessManagementService.getUserById(this.user.id).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)(m(v),m(l),m(Y),m(Z));},t.ɵcmp=f({type:t,selectors:[["sz-iam-users-user"]],features:[g([l])],decls:9,vars:1,consts:()=>{let e;return e="Groups",[[3,"config"],[1,"sz-grid-card"],[3,"card"],["mat-stretch-tabs","false"],["label",e],[3,"user"]];},template:function(i,r){i&1&&(d(0,"sz-ui-app-bar",0),s(1,"div",1),S(2,Pe,1,1,"sz-ui-card",2,j),p(),s(4,"mat-tab-group",3)(5,"mat-tab",4),L(6,Be,1,1),P(7,6,Le),B(),p()()),i&2&&(n("config",r.appBarConfig),u(2),_(r.items));},dependencies:[I,b,be,Ie],encapsulation:2});let o=t;return o;})();var Ae=[{path:"",component:Ne}];var Pt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=U({type:t}),t.ɵinj=R({imports:[h.forChild(Ae),pe,I,O,b,ue,D,E,le,Oe,z]});let o=t;return o;})();export{Pt as UserModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/