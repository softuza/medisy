import{b as d}from"./chunk-4FUHNBAX.js";import{a as ee,b as te,d as ie,f as oe,h as re,i as ne,j as ae}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{e as K,f as Q,g as W,i as Y,j as Z,k as x}from"./chunk-SB426TL2.js";import{a as _}from"./chunk-W3O4IPE3.js";import{h}from"./chunk-EKINQSBT.js";import{a as L,b as U,d as j,e as B,g}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{c as X,t as J}from"./chunk-6LY23KCH.js";import{c as k}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as q}from"./chunk-Y57UOOVT.js";import{i as $,k as H}from"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{d as b,f as E,g as A,k as I,m as N,p as O,q as F,t as G}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{c as R,e as y}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ca as P,ia as V,ka as w}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as s,Jb as c,Kb as p,Ub as D,Vb as f,ab as l,bb as a,ea as C,kc as S,lc as T,na as u,oa as v,ob as z,yb as m}from"./chunk-WEQMZHJB.js";import{a as M}from"./chunk-ZSRQUDS2.js";var se=(()=>{let t=class t extends K{constructor(e,i,o,n){super(o),this.adminService=e,this.fb=i,this.dialog=o,this.data=n,this.form=i.group({name:[n?.name,[b.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,M(M({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};t.ɵfac=function(i){return new(i||t)(a(d),a(F),a(L),a(U));},t.ɵcmp=u({type:t,selectors:[["sz-iam-users-save"]],standalone:!0,features:[S([]),z,T],decls:5,vars:5,consts:()=>{let e;return e="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[3,"actions"]];},template:function(i,o){i&1&&(p(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),c()(),p(4,"sz-ui-dialog-actions",3)),i&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),m("formGroup",o.form),l(2),m("actions",o.actions));},dependencies:[G,I,E,A,N,O,g,B,$,re,H,P,Z,Q,W,J,X],encapsulation:2});let r=t;return r;})();var le=(()=>{let t=class t{constructor(e,i,o){this.dialog=e,this.adminService=i,this.router=o,this.title=q.groups,this.dataSource=new ie(),this.dataSource.columnDefs.push(ee.string("name"),te.menu([h.edit(n=>this.openSaveComponent(n)),h.delete(n=>this.openUserDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(Y,{data:x.delete(this.adminService.deleteGroup(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(k(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(a(j),a(d),a(R));},t.ɵcmp=u({type:t,selectors:[["sz-iam-groups"]],features:[S([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(p(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),s(2,"button",3),f("click",function(){return o.openSaveComponent();}),s(3,"span"),D(4,0),c()()(),s(5,"sz-ui-table",4),f("update",function(){return o.get();}),c()),i&2&&(m("title",o.title),l(),m("dataSource",o.dataSource),l(4),m("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[V,ne,oe,_],encapsulation:2});let r=t;return r;})();var Ze=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=v({type:t}),t.ɵinj=C({providers:[d],imports:[y.forChild([{path:"",component:le}]),g,w,ae,_]});let r=t;return r;})();export{Ze as GroupsModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/