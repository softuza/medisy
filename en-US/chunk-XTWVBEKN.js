import{c as s}from"./chunk-HQFUL5QB.js";import{a as x,c as ee,d as te,e as C,h as oe,i as ie,j as re}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{b as J,f as K,g as Q,h as W,j as Y,k as Z}from"./chunk-JDBQ45YP.js";import{a as k}from"./chunk-ZGUTF2MC.js";import{j as d,k as H}from"./chunk-53DZ6NLX.js";import{a as R,b as P,d as L,e as V,g}from"./chunk-7B3GMYBR.js";import{c as X,t as q}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import{i as U,k as j}from"./chunk-IT3CNXEP.js";import{d as D,f as N,g as T,l as F,n as A,q as E,r as O,u as y}from"./chunk-QZRJHJEV.js";import{Y as w}from"./chunk-4QPQ7IQ3.js";import{c as G,d as I}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{da as B,la as $}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as l,Kb as p,Lb as c,Wb as M,bb as m,ea as _,ja as a,mb as b,mc as f,na as u,nc as S,oa as z,yb as n}from"./chunk-6EDHPT3A.js";import{a as h}from"./chunk-NLUW4JS2.js";var ne=(()=>{let e=class e extends K{constructor(){let t=a(R);super(t),this.adminService=a(s),this.fb=a(O),this.data=a(P);let o=this.fb;this.dialog=t;let i=this.data;this.form=o.group({name:[i?.name,[D.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,h(h({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=u({type:e,selectors:[["sz-iam-users-save"]],standalone:!0,features:[f([]),b,S],decls:5,vars:5,consts:()=>{let t;return t="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[3,"actions"]];},template:function(o,i){o&1&&(c(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2),p()(),c(4,"sz-ui-dialog-actions",3)),o&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),m(2),n("formGroup",i.form),m(2),n("actions",i.actions));},dependencies:[y,F,N,T,A,E,g,V,U,ee,j,B,Z,Q,W,q,X],encapsulation:2});let r=e;return r;})();var v=(()=>{let e=class e{constructor(){this.dialog=a(L),this.adminService=a(s),this.router=a(G),this.dataSource=new oe(),this.appBarConfig={title:w.groups,menu:H.default().setItems([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(C.string("name"),C.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openUserDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(ne,{data:t}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(Y,{data:J.delete(this.adminService.deleteGroup(t.id),t)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(ie(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t,t.length);});}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=u({type:e,selectors:[["sz-iam-groups"]],standalone:!0,features:[f([]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(l(0,"sz-ui-table-bar",0),M("changed",function(){return i.get();}),p(),l(1,"sz-ui-table",1),M("update",function(){return i.get();}),p()),o&2&&(n("config",i.appBarConfig)("dataSource",i.dataSource),m(),n("dataSource",i.dataSource));},dependencies:[x,te],encapsulation:2});let r=e;return r;})();var qe=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=z({type:e}),e.ɵinj=_({providers:[s],imports:[I.forChild([{path:"",component:v}]),g,$,re,k,v]});let r=e;return r;})();export{qe as GroupsModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/