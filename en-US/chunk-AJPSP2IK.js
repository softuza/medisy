import{a as K,c as Q,g as W,s as Z,t as ee,u as r}from"./chunk-UWKU73WF.js";import{a as c}from"./chunk-QQWVDBYJ.js";import{c as U,h as k,i as X,j as q,l as H,m as x,n as J}from"./chunk-47MBZVPY.js";import{g as h}from"./chunk-2AKRFP2E.js";import{a as G,b as B,d as j,e as V,g as w}from"./chunk-P4QIA4WM.js";import{A as $,v as Y}from"./chunk-22KPLFGU.js";import{J as z,N as F,f as v,g as N,k as D,m as O,p as b,q as P,t as I}from"./chunk-BWNHVGBM.js";import{Ea as L,Ga as R}from"./chunk-I73ZQFGG.js";import{Ac as y,Eb as s,Fb as p,Gb as M,M as f,Qb as E,Sb as g,fb as m,gb as u,gc as A,jc as C,ka as l,na as _,nb as T,ub as n}from"./chunk-KN4PZLRS.js";var d=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i;}(d||{});var te=(()=>{let o=class o extends k{constructor(e,t,a,S){super(a),this.mlabService=e,this.fb=t,this.dialog=a,this.data=S,this.form=t.group({note:[S?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(u(c),u(P),u(G),u(B));},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[T,C],decls:5,vars:3,consts:()=>{let e;return e="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",e],[3,"actions"]];},template:function(t,a){t&1&&(M(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),M(3,"sz-ui-form-field-input",2),p()(),M(4,"sz-ui-dialog-actions",3)),t&2&&(n("header",a.header),m(2),n("formGroup",a.form),m(2),n("actions",a.actions));},dependencies:[I,D,v,N,O,b,w,V,x,X,q,$,Y],encapsulation:2});let i=o;return i;})();var Ye=(()=>{let o=class o{constructor(){this.route=l(z),this.dialog=l(j),this.locale=l(y),this.mlabService=l(c),this.dataSource=new Q(),this.analysis=this.route.snapshot.data.analysis,this.dataSource.fields.push(r.uuid("id"),r.uuid("analysisId"),r.stringFormated("test.state",e=>{switch(e.test.state){case d.Created:return"description";case d.Pending:return"pending";case d.Started:return"sync";case d.Finished:return"done";default:return"";}}),r.date("test.testClass.name",!1),r.date("test.referenceGroup.name",!1),r.date("createdAt",!1),r.date("updatedAt",!1),K.menu([h.edit(e=>this.openSaveComponent(e)),h.divider(),h.delete(e=>this.openDeleteComponent(e))])),this.get();}openCreateComponent(){}openSaveComponent(e){this.dialog.open(te,{data:e}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.buildRequest()).pipe(U(this.dataSource.indicator)).pipe(f(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[A([c]),C],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,a){t&1&&(s(0,"sz-ui-table-search-filter",0)(1,"button",1),g("click",function(){return a.openCreateComponent();}),s(2,"span"),E(3,2),p()()(),s(4,"sz-ui-table",3),g("update",function(){return a.get();}),p()),t&2&&(n("dataSource",a.dataSource),m(4),n("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[F,ee,Z,W,R,L],encapsulation:2});let i=o;return i;})();export{Ye as a};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/