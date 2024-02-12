import{a as Q,c as W,e as Z,q as ee,r as te,s as r}from"./chunk-CEYDRM2A.js";import{a as M}from"./chunk-EJWGSUTF.js";import{a as c}from"./chunk-SS4U4DAB.js";import{c as k,h as X,i as q,j as x,l as H,m as J,n as K}from"./chunk-Z7OKAKBM.js";import{g as h}from"./chunk-6JH6MW6Z.js";import{a as B,b as j,d as V,e as w,g as U}from"./chunk-4BUDGXGE.js";import{A as G,v as Y}from"./chunk-STJ2KHGY.js";import{J as L,N as R,f as N,g as P,k as v,m as b,p as D,q as z,t as I}from"./chunk-LABVDJ46.js";import{Ea as F,Ga as $}from"./chunk-FE4YDWUQ.js";import{Ac as O,Eb as d,Fb as u,Gb as C,M as f,Qb as y,Sb as g,fb as m,gb as p,gc as E,jc as T,ka as l,na as _,nb as A,ub as s}from"./chunk-FCYIFV3F.js";var n=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i;}(n||{});function ie(i){switch(i){case n.Created:return"Created";case n.Started:return"Started";case n.Finished:return"Finished";case n.Pending:return"Pending";default:return"";}}function oe(i){switch(i){case n.Created:return"description";case n.Pending:return"pending";case n.Started:return"sync";case n.Finished:return"done";default:return"";}}var ae=(()=>{let o=class o extends X{constructor(e,t,a,S){super(a),this.mlabService=e,this.fb=t,this.dialog=a,this.data=S,this.form=t.group({note:[S?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(p(c),p(z),p(B),p(j));},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[A,T],decls:5,vars:3,consts:()=>{let e;return e="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",e],[3,"actions"]];},template:function(t,a){t&1&&(C(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),C(3,"sz-ui-form-field-input",2),u()(),C(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",a.header),m(2),s("formGroup",a.form),m(2),s("actions",a.actions));},dependencies:[I,v,N,P,b,D,U,w,J,q,x,G,Y],encapsulation:2});let i=o;return i;})();var je=(()=>{let o=class o{constructor(){this.route=l(L),this.dialog=l(V),this.locale=l(O),this.mlabService=l(c),this.dataSource=new W(),this.analysis=this.route.snapshot.data.analysis,this.dataSource.fields.push(r.uuid("id"),r.uuid("analysisId"),r.icon("test.state",e=>oe(e.test.state)).setContentTooltip(e=>ie(e.test.state)),r.string("test.testClass.name").setDisplayName(M.testClass),r.string("test.referenceGroup.name").setDisplayName(M.referenceGroup),r.string("note"),r.date("createdAt",!1),r.date("updatedAt",!1),Q.menu([h.edit(e=>this.openSaveComponent(e)),h.divider(),h.delete(e=>this.openDeleteComponent(e))])),this.get();}openCreateComponent(){}openSaveComponent(e){this.dialog.open(ae,{data:e}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(H,{data:K.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator)).pipe(f(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[E([c]),T],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,a){t&1&&(d(0,"sz-ui-table-search-filter",0)(1,"button",1),g("click",function(){return a.openCreateComponent();}),d(2,"span"),y(3,2),u()()(),d(4,"sz-ui-table",3),g("update",function(){return a.get();}),u()),t&2&&(s("dataSource",a.dataSource),m(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[R,te,ee,Z,$,F],encapsulation:2});let i=o;return i;})();export{je as a};/**i18n:d1a7a79e40094f34760a06b0e93530073ce604a889b1368eeeee77f855868761*/