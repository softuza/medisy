import{b as d}from"./chunk-5Z6TYUNO.js";import{a as ee,b as te,d as ie,f as oe,h as re,i as ne,j as ae}from"./chunk-TJI632CG.js";import"./chunk-TQ3W56FI.js";import"./chunk-CIZWNSV3.js";import"./chunk-D2ETPSDJ.js";import{e as K,f as Q,g as W,i as Y,j as Z,k as x}from"./chunk-V6YUYF6E.js";import{a as _}from"./chunk-PEF2UZQC.js";import{h}from"./chunk-MU7HJDE2.js";import{a as L,b as U,d as j,e as B,g}from"./chunk-2K2RWTWU.js";import"./chunk-HRS4G4YG.js";import{c as X,t as J}from"./chunk-S6EI4M2J.js";import{b as k}from"./chunk-6RYVENW3.js";import"./chunk-M2R7K5VQ.js";import"./chunk-ZV5PVXGO.js";import{c as q}from"./chunk-CVRQFWLI.js";import{i as $,k as H}from"./chunk-LJVQIOF2.js";import{d as b,f as E,g as A,k as I,m as N,p as O,q as F,t as G}from"./chunk-EIWC7QFZ.js";import"./chunk-HPPA553T.js";import{c as R,e as y}from"./chunk-L6HNREY7.js";import"./chunk-FTN3YVIS.js";import{da as P,ja as V,la as w}from"./chunk-IRR6XRRV.js";import"./chunk-TWGSABWX.js";import{Db as m,Nb as s,Ob as c,Pb as p,Zb as D,_b as f,a as M,hb as l,ib as a,ka as C,pc as S,qc as T,ua as u,ub as z,va as v}from"./chunk-XPH4NMLC.js";var se=(()=>{let t=class t extends K{constructor(e,i,o,n){super(o),this.adminService=e,this.fb=i,this.dialog=o,this.data=n,this.form=i.group({name:[n?.name,[b.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,M(M({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};t.ɵfac=function(i){return new(i||t)(a(d),a(F),a(L),a(U));},t.ɵcmp=u({type:t,selectors:[["sz-iam-users-save"]],standalone:!0,features:[S([]),z,T],decls:5,vars:5,consts:()=>{let e;return e="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[3,"actions"]];},template:function(i,o){i&1&&(p(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),c()(),p(4,"sz-ui-dialog-actions",3)),i&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),m("formGroup",o.form),l(2),m("actions",o.actions));},dependencies:[G,I,E,A,N,O,g,B,$,re,H,P,Z,Q,W,J,X],encapsulation:2});let r=t;return r;})();var le=(()=>{let t=class t{constructor(e,i,o){this.dialog=e,this.adminService=i,this.router=o,this.title=q.groups,this.dataSource=new ie(),this.dataSource.columnDefs.push(ee.string("name"),te.menu([h.edit(n=>this.openSaveComponent(n)),h.delete(n=>this.openUserDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(Y,{data:x.delete(this.adminService.deleteGroup(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(k(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(a(j),a(d),a(R));},t.ɵcmp=u({type:t,selectors:[["sz-iam-groups"]],features:[S([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(i,o){i&1&&(p(0,"sz-ui-app-bar",1),s(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),s(2,"button",3),f("click",function(){return o.openSaveComponent();}),s(3,"span"),D(4,0),c()()(),s(5,"sz-ui-table",4),f("update",function(){return o.get();}),c()),i&2&&(m("title",o.title),l(),m("dataSource",o.dataSource),l(4),m("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[V,ne,oe,_],encapsulation:2});let r=t;return r;})();var Ze=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=v({type:t}),t.ɵinj=C({providers:[d],imports:[y.forChild([{path:"",component:le}]),g,w,ae,_]});let r=t;return r;})();export{Ze as GroupsModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/