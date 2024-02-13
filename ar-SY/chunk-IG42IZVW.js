import{a as Q,c as W,e as Z,q as ee,r as te,s as r}from"./chunk-3SWH476J.js";import{a as S}from"./chunk-FM3SPM6Z.js";import{c as k,h as X,i as q,j as H,l as x,m as J,n as K}from"./chunk-2HDHNYMU.js";import{a as M,g}from"./chunk-BJEOQME3.js";import{a as B,b as j,d as V,e as w,g as U}from"./chunk-SG6HY6JP.js";import{A as G,v as Y}from"./chunk-XXBVSRTN.js";import{J as L,N as R,f as N,g as P,k as v,m as b,p as z,q as D,t as I}from"./chunk-43DI3E3T.js";import{Ea as F,Ga as $}from"./chunk-QRXQW4KS.js";import{Ac as O,Eb as l,Fb as u,Gb as h,M as _,Qb as y,Sb as C,fb as p,gb as c,gc as E,jc as T,ka as m,na as f,nb as A,ub as s}from"./chunk-CIWRZFHR.js";var n=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i;}(n||{});function ie(i){switch(i){case n.Created:return"\u0645\u0646\u0634\u0623\u0629";case n.Started:return"\u0628\u062F\u0623";case n.Finished:return"\u0627\u0646\u062A\u0647\u062A";case n.Pending:return"\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return"";}}function oe(i){switch(i){case n.Created:return"description";case n.Pending:return"pending";case n.Started:return"sync";case n.Finished:return"done";default:return"";}}var ae=(()=>{let o=class o extends X{constructor(e,t,a,d){super(a),this.mlabService=e,this.fb=t,this.dialog=a,this.data=d,this.form=t.group({note:[d?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(c(S),c(D),c(B),c(j));},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[A,T],decls:5,vars:3,consts:()=>{let e;return e="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",e],[3,"actions"]];},template:function(t,a){t&1&&(h(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),h(3,"sz-ui-form-field-input",2),u()(),h(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",a.header),p(2),s("formGroup",a.form),p(2),s("actions",a.actions));},dependencies:[I,v,N,P,b,z,U,w,J,q,H,G,Y],encapsulation:2});let i=o;return i;})();var je=(()=>{let o=class o{constructor(){this.route=m(L),this.dialog=m(V),this.locale=m(O),this.mlabService=m(S),this.dataSource=new W(),this.analysis=this.route.snapshot.data.analysis,this.dataSource.fields.push(r.uuid("id"),r.uuid("analysisId"),r.icon("test.state",e=>oe(e.test.state)).setContentTooltip(e=>ie(e.test.state)),r.string("test.testClass.name").setDisplayName(M.testClass),r.string("test.referenceGroup.name").setDisplayName(M.referenceGroup),r.string("note"),r.date("createdAt",!1),r.date("updatedAt",!1),Q.menu([g.edit(e=>this.openSaveComponent(e)),g.divider(),g.delete(e=>this.openDeleteComponent(e))])),this.get();}openCreateComponent(){}openSaveComponent(e){this.dialog.open(ae,{data:e}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(x,{data:K.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator)).pipe(_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[E([S]),T],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,a){t&1&&(l(0,"sz-ui-table-search-filter",0),C("changed",function(){return a.get();}),l(1,"button",1),C("click",function(){return a.openCreateComponent();}),l(2,"span"),y(3,2),u()()(),l(4,"sz-ui-table",3),C("update",function(){return a.get();}),u()),t&2&&(s("dataSource",a.dataSource),p(4),s("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[R,te,ee,Z,$,F],encapsulation:2});let i=o;return i;})();export{je as a};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/