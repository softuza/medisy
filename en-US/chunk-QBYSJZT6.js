import{c as d}from"./chunk-FO5QW44Y.js";import{a as x,b as ee,d as te,e as ie,g as oe,i as re,j as ne,k as ae}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{e as J,f as K,g as Q,i as W,j as Y,k as Z}from"./chunk-76IND4GV.js";import{a as _}from"./chunk-ZPKIPVTE.js";import{h}from"./chunk-TIEHGEOE.js";import{a as L,b as U,d as B,e as j,g}from"./chunk-QCMAXDKX.js";import{e as k,x as H}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as q}from"./chunk-AR6ZPEMB.js";import{i as $,k as X}from"./chunk-7ZLPMEOZ.js";import{d as A,f as I,g as N,l as b,n as E,q as O,r as G,u as F}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as R,e as y}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{da as P,ja as V,la as w}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as s,Kb as u,Lb as p,Vb as D,Wb as f,bb as l,cb as a,ea as C,na as c,nc as S,oa as v,oc as T,qb as z,zb as m}from"./chunk-7IDM2VXI.js";import{a as M}from"./chunk-K67PUIM2.js";var se=(()=>{let t=class t extends J{constructor(e,i,o,n){super(o),this.adminService=e,this.fb=i,this.dialog=o,this.data=n,this.form=i.group({name:[n?.name,[A.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,M(M({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};t.ɵfac=function(i){return new(i||t)(a(d),a(G),a(L),a(U));},t.ɵcmp=c({type:t,selectors:[["sz-iam-users-save"]],standalone:!0,features:[S([]),z,T],decls:5,vars:5,consts:()=>{let e;return e="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[3,"actions"]];},template:function(i,o){i&1&&(p(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),u()(),p(4,"sz-ui-dialog-actions",3)),i&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),m("formGroup",o.form),l(2),m("actions",o.actions));},dependencies:[F,b,I,N,E,O,g,j,$,re,X,P,Y,K,Q,H,k],encapsulation:2});let r=t;return r;})();var le=(()=>{let t=class t{constructor(e,i,o){this.dialog=e,this.adminService=i,this.router=o,this.title=q.groups,this.dataSource=new te(),this.dataSource.columnDefs.push(x.string("name"),ee.menu([h.edit(n=>this.openSaveComponent(n)),h.delete(n=>this.openUserDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(W,{data:Z.delete(this.adminService.deleteGroup(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(ie(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(a(B),a(d),a(R));},t.ɵcmp=c({type:t,selectors:[["sz-iam-groups"]],features:[S([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,o){i&1&&(p(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),s(2,"button",3),f("click",function(){return o.openSaveComponent();}),s(3,"span"),D(4,0),u()()(),s(5,"sz-ui-table",4),f("update",function(){return o.get();}),u()),i&2&&(m("title",o.title),l(),m("dataSource",o.dataSource),l(4),m("dataSource",o.dataSource));},dependencies:[V,ne,oe,_],encapsulation:2});let r=t;return r;})();var We=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=v({type:t}),t.ɵinj=C({providers:[d],imports:[y.forChild([{path:"",component:le}]),g,w,ae,_]});let r=t;return r;})();export{We as GroupsModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/