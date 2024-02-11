import{a as Re}from"./chunk-5IYFIORX.js";import"./chunk-BR3MTMFP.js";import{a as Ae,b as Oe,c as Pe}from"./chunk-AQUHQOAU.js";import{i as l}from"./chunk-YGIQSZKL.js";import{a as b}from"./chunk-Y35HKLDX.js";import{h as te}from"./chunk-BLHEXLKF.js";import{a as he,c as ge,e as Ce,q as Te,r as ve,s as Ee}from"./chunk-W332LJ2J.js";import"./chunk-VRN2YMLE.js";import{a as le,h as ce,i as fe,j as Se,l as _e,m as U,n as Me}from"./chunk-I7URJTBN.js";import{b as D}from"./chunk-AZIM6N3H.js";import{d as pe,e as ue,g as R,h as de}from"./chunk-F2NCOJMX.js";import{a as ae,b as se,d as O,e as me,g as P}from"./chunk-GX7FEJ3W.js";import{a as ie,g as oe,w as re,x as ne}from"./chunk-HN3QCICR.js";import{J as v,L as W,N as E,d as w,f as H,g as V,k as x,m as q,p as J,q as K,t as Q}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as ee,Ga as A,ya as Y}from"./chunk-ILHRA673.js";import{Ab as k,Bb as B,Cb as M,Db as h,Eb as s,Fb as u,Gb as c,M as m,Qb as g,Sb as z,dc as X,ea as F,ec as Z,fb as d,gb as p,gc as C,jc as T,ka as _,na as f,nb as I,oa as y,qb as L,rb as $,sb as j,ub as a}from"./chunk-ORGLCS6N.js";function Ge(o,t){if(o&1&&(s(0,"mat-option",5),X(1),u()),o&2){let S=t.$implicit;a("value",S.id),d(),Z(S.name);}}var De=(()=>{let t=class t extends ce{constructor(e,i,r,n){super(r),this.adminService=e,this.fb=i,this.dialog=r,this.user=n,this.groups=[],this.form=i.group({groupId:[null,[w.required]]}),this.getGroups();}flattenGroups(e){let i=[];function r(n){i.push({id:n.id,name:n.name,path:n.path,subGroups:[]}),n.subGroups&&n.subGroups.forEach(r);}return e.forEach(r),i;}getGroups(){this.adminService.getGroups().pipe(m(1)).subscribe(e=>{this.groups=this.flattenGroups(e);});}submit(){this.IsValid()&&this.adminService.addUserGroup(this.user.id,this.form.value.groupId).pipe(m(1)).subscribe(()=>{this.dialog.close(!0);});}};t.ɵfac=function(i){return new(i||t)(p(l),p(K),p(ae),p(se));},t.ɵcmp=f({type:t,selectors:[["softuza-users-user-group-add"]],standalone:!0,features:[I,T],decls:10,vars:3,consts:()=>{let e;return e="Groups",[[3,"header"],[1,"sz-form",3,"formGroup"],e,["formControlName","groupId"],[3,"actions"],[3,"value"]];},template:function(i,r){i&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1)(3,"mat-form-field")(4,"mat-label"),g(5,2),u(),s(6,"mat-select",3),M(7,Ge,2,2,"mat-option",5,k),u()()()(),c(9,"sz-ui-dialog-actions",4)),i&2&&(a("header",r.header),d(2),a("formGroup",r.form),d(5),h(r.groups),d(2),a("actions",r.actions));},dependencies:[Q,x,H,V,q,J,P,me,U,fe,Se,ne,oe,ie,re,Y],encapsulation:2});let o=t;return o;})();var N=(()=>{let t=class t{constructor(){this.route=_(v),this.dialog=_(O),this.adminService=_(l),this.dataSource=new ge(),this.user=this.route.snapshot.data.user,this.dataSource.fields.push(Ee.string("name").setFormatFn(e=>e.name),he.menu([R.delete(e=>this.openDeleteComponent(e))])),this.get();}openDeleteComponent(e){this.dialog.open(_e,{data:Me.delete(this.adminService.deleteUserGroup(this.user.id,e.id),e)}).afterClosed().pipe(m(1)).subscribe(i=>{this.dataSource.delete(i);});}openAddComponent(){this.dialog.open(De,{data:this.user}).afterClosed().pipe(m(1)).subscribe(e=>{e&&this.get();});}get(){this.adminService.getUserGroups(this.user.id).pipe(le(this.dataSource.indicator)).pipe(m(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["softuza-users-user-groups"]],standalone:!0,features:[C([]),T],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,r){i&1&&(s(0,"sz-ui-table-search-filter",0)(1,"button",1),z("click",function(){return r.openAddComponent();}),s(2,"span"),g(3,2),u()()(),s(4,"sz-ui-table",3),z("update",function(){return r.get();}),u()),i&2&&(a("dataSource",r.dataSource),d(4),a("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[E,ve,Te,Ce,A,ee],encapsulation:2});let o=t;return o;})();var ye=()=>[N];function Ie(o,t){if(o&1&&c(0,"sz-ui-card",4),o&2){let S=t.$implicit;a("card",S);}}function Le(o,t){o&1&&c(0,"softuza-users-user-groups");}var Ue=(()=>{let t=class t{constructor(e,i,r,n){this.dialog=e,this.adminService=i,this.route=r,this.router=n,this.items=[],this.userMenu=de.more([R.edit(()=>this.openSaveComponent())]),this.user=this.route.snapshot.data.user;}openSaveComponent(){this.dialog.open(Re,{data:this.user}).afterClosed().pipe(m(1)).subscribe(()=>{this.getUser();});}getUser(){this.adminService.getUserById(this.user.id).pipe(m(1)).subscribe(e=>{this.user=e;});}navigate(e){this.router.navigate([e],{relativeTo:this.route});}};t.ɵfac=function(i){return new(i||t)(p(O),p(l),p(v),p(W));},t.ɵcmp=f({type:t,selectors:[["softuza-users-user"]],features:[C([l])],decls:9,vars:2,consts:()=>{let e;return e="Groups",[[3,"title","menu"],[1,"sz-grid-card"],["mat-stretch-tabs","false"],["label",e],[3,"card"]];},template:function(i,r){i&1&&(c(0,"sz-ui-header-info",0),s(1,"div",1),M(2,Ie,1,1,"sz-ui-card",4,B),u(),s(4,"mat-tab-group",2)(5,"mat-tab",3),L(6,Le,1,0),$(7,6,ye),j(),u()()),i&2&&(a("title",r.user.username)("menu",r.userMenu),d(2),h(r.items));},dependencies:[b,D,Ae,Oe],encapsulation:2});let o=t;return o;})();var be=[{path:"",component:Ue}];var Bt=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=y({type:t}),t.ɵinj=F({imports:[E.forChild(be),te,b,U,D,pe,P,A,ue,Pe,N]});let o=t;return o;})();export{Bt as UserModule};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/