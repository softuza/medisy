import{c as n}from"./chunk-PQ4OEC3L.js";import{a as C,d as x,e as ee,f as te,h as ie,i as oe,j as re}from"./chunk-ZWBEQEWG.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import{b as J,f as K,g as Q,h as W,j as Y,k as Z}from"./chunk-BQ3MI4NW.js";import{d as k}from"./chunk-DPEAMXJP.js";import{h as d}from"./chunk-2C5UG3LV.js";import{a as P,b as j,d as L,e as V,g as h}from"./chunk-WNUUIGGE.js";import{c as q,t as H}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as U,k as w}from"./chunk-JACASQJP.js";import{d as N,f as T,g as A,l as F,n as E,q as I,r as O,u as y}from"./chunk-VXNH5PTX.js";import{Y as X}from"./chunk-KQ5MQZXD.js";import{c as G,e as B}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{da as R,la as $}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as p,Lb as l,Mb as S,Xb as v,bb as m,cb as s,ea as _,ja as c,na as f,oa as z,oc as g,pc as b,qb as D,zb as a}from"./chunk-G33TNFCW.js";import{a as M}from"./chunk-EAIILSS5.js";var ne=(()=>{let e=class e extends K{constructor(t,i,o,u){super(o),this.adminService=t,this.fb=i,this.dialog=o,this.data=u,this.form=i.group({name:[u?.name,[N.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,M(M({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};e.ɵfac=function(i){return new(i||e)(s(n),s(O),s(P),s(j));},e.ɵcmp=f({type:e,selectors:[["sz-iam-users-save"]],standalone:!0,features:[g([]),D,b],decls:5,vars:5,consts:()=>{let t;return t="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[3,"actions"]];},template:function(i,o){i&1&&(S(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2),l()(),S(4,"sz-ui-dialog-actions",3)),i&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("actions",o.actions));},dependencies:[y,F,T,A,E,I,h,V,U,ie,w,R,Z,Q,W,H,q],encapsulation:2});let r=e;return r;})();var me=(()=>{let e=class e{constructor(){this.dialog=c(L),this.adminService=c(n),this.router=c(G),this.dataSource=new x(),this.appBarConfig={title:X.groups,actions:[d.add(this.openSaveComponent.bind(this))]},this.dataSource.columnDefs.push(C.string("name"),C.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openUserDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:t}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(Y,{data:J.delete(this.adminService.deleteGroup(t.id),t)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(ee(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t,t.length);});}};e.ɵfac=function(i){return new(i||e)();},e.ɵcmp=f({type:e,selectors:[["sz-iam-groups"]],features:[g([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,o){i&1&&(p(0,"sz-ui-table-bar",0),v("changed",function(){return o.get();}),l(),p(1,"sz-ui-table",1),v("update",function(){return o.get();}),l()),i&2&&(a("config",o.appBarConfig)("dataSource",o.dataSource),m(),a("dataSource",o.dataSource));},dependencies:[oe,te],encapsulation:2});let r=e;return r;})();var Ke=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=z({type:e}),e.ɵinj=_({providers:[n],imports:[B.forChild([{path:"",component:me}]),h,$,re,k]});let r=e;return r;})();export{Ke as GroupsModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/