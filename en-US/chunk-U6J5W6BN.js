import{a as d}from"./chunk-GX4MOAAC.js";import"./chunk-H6L4Y2QJ.js";import{a as te,b as ie,d as oe,f as re,j as ne,k as ae,l as me}from"./chunk-C6GCUO5F.js";import"./chunk-NE2FJIGN.js";import"./chunk-MU4JMO74.js";import{f as Q,g as W,h as Y,j as Z,k as x,l as ee}from"./chunk-5USYUPE4.js";import"./chunk-HQBETVMD.js";import{b as g}from"./chunk-T7V5XOV4.js";import{j as C}from"./chunk-2D7ESCRH.js";import{a as U,b as j,d as $,e as B,g as _}from"./chunk-LR6GUTIR.js";import{c as X,o as J,t as K}from"./chunk-TH3BU27R.js";import{c as H}from"./chunk-ELM3QGWO.js";import"./chunk-NLKNVIYO.js";import"./chunk-ALHR4HEP.js";import{c as q}from"./chunk-6SBR2WBP.js";import{i as V}from"./chunk-E4SPABR5.js";import{d as T,f as E,g as A,k as O,m as b,p as F,q as G,t as R}from"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{c as y,e as P}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as k,c as w}from"./chunk-42MYF47R.js";import{da as L}from"./chunk-5MDONEI4.js";import"./chunk-6TGWOZSV.js";import{Hb as s,Ib as u,Jb as p,O as M,Tb as N,Vb as f,a as h,ha as v,ib as l,jb as a,jc as S,mc as I,qa as c,qb as z,ra as D,xb as m}from"./chunk-OHUDUA2T.js";var le=(()=>{let t=class t extends Q{constructor(e,i,o,n){super(o),this.adminService=e,this.fb=i,this.dialog=o,this.data=n,this.form=i.group({name:[n?.name,[T.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,h(h({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};t.ɵfac=function(i){return new(i||t)(a(d),a(G),a(U),a(j));},t.ɵcmp=c({type:t,selectors:[["sz-admin-users-save"]],standalone:!0,features:[S([]),z,I],decls:5,vars:3,consts:()=>{let e;return e="Name",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[3,"actions"]];},template:function(i,o){i&1&&(p(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),u()(),p(4,"sz-ui-dialog-actions",3)),i&2&&(m("header",o.header),l(2),m("formGroup",o.form),l(2),m("actions",o.actions));},dependencies:[R,O,E,A,b,F,_,B,V,ne,J,L,x,W,Y,K,X],encapsulation:2});let r=t;return r;})();var pe=(()=>{let t=class t{constructor(e,i,o){this.dialog=e,this.adminService=i,this.router=o,this.title=q.groups,this.dataSource=new oe(),this.dataSource.columnDefs.push(te.string("name"),ie.menu([C.edit(n=>this.openSaveComponent(n)),C.delete(n=>this.openUserDeleteComponent(n))])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:e}).afterClosed().pipe(M(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.adminService.deleteGroup(e.id),e)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(H(this.dataSource.indicator),M(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(i){return new(i||t)(a($),a(d),a(y));},t.ɵcmp=c({type:t,selectors:[["sz-admin-groups"]],features:[S([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(p(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),s(2,"button",2),f("click",function(){return o.openSaveComponent();}),s(3,"span"),N(4,3),u()()(),s(5,"sz-ui-table",4),f("update",function(){return o.get();}),u()),i&2&&(m("title",o.title),l(),m("dataSource",o.dataSource),l(4),m("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[k,ae,re,g],encapsulation:2});let r=t;return r;})();var et=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=D({type:t}),t.ɵinj=v({providers:[d],imports:[P.forChild([{path:"",component:pe}]),_,w,me,g]});let r=t;return r;})();export{et as GroupsModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/