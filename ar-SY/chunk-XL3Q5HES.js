import{a as ie}from"./chunk-OTTXER4X.js";import{b as S,c as Q,e as W,i as Z,u as ee,v as te}from"./chunk-GHEGCXEZ.js";import{a as c}from"./chunk-BUSYHZDZ.js";import{a as u}from"./chunk-VU3TSLPI.js";import{c as U,h as X,i as x,j as q,l as H,m as J,n as K}from"./chunk-DJTHGJMD.js";import{a as B,b as w,d as j,e as V,g as k}from"./chunk-VQ3CVIXE.js";import{A as G,v as $}from"./chunk-75XLR4TY.js";import{f as N,g as D,k as O,m as b,p as P,q as z,t as I,u as R,y as L}from"./chunk-VZUJMTKN.js";import{i as g}from"./chunk-FVDEVSJ2.js";import{Ea as F,Ga as Y}from"./chunk-TT7ZQ2V6.js";import{Bc as v,Eb as n,Fb as p,Gb as M,M as _,Qb as A,Sb as T,fb as d,gb as m,gc as y,jc as h,ka as l,na as C,nb as E,ub as r}from"./chunk-CQJO6ZYU.js";var s=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i;}(s||{});var oe=(()=>{let o=class o extends X{constructor(e,t,a,f){super(a),this.mlabService=e,this.fb=t,this.dialog=a,this.data=f,this.form=t.group({note:[f?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};o.ɵfac=function(t){return new(t||o)(m(u),m(z),m(B),m(w));},o.ɵcmp=C({type:o,selectors:[["medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[E,h],decls:5,vars:3,consts:()=>{let e;return e="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",e],[3,"actions"]];},template:function(t,a){t&1&&(M(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),M(3,"sz-ui-form-field-input",2),p()(),M(4,"sz-ui-dialog-actions",3)),t&2&&(r("header",a.header),d(2),r("formGroup",a.form),d(2),r("actions",a.actions));},dependencies:[I,O,N,D,b,P,k,V,J,x,q,G,$],encapsulation:2});let i=o;return i;})();var Be=(()=>{let o=class o{constructor(){this.route=l(R),this.dialog=l(j),this.locale=l(v),this.mlabService=l(u),this.dataSource=new W(),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(Q.default([S.icon("test.state",c.state,e=>{switch(e.test.state){case s.Created:return"description";case s.Pending:return"pending";case s.Started:return"sync";case s.Finished:return"done";default:return"";}}).makeCompact(),S.text("test.testClass.name",c.testClass),S.text("test.referenceGroup.name",c.referenceGroup),S.text("test.testResult",c.testResult,e=>e.test.referenceGroup.name),ie.menu([g.edit(e=>this.openSaveComponent(e)),g.divider(),g.delete(e=>this.openDeleteComponent(e))])])),this.get();}openCreateComponent(){}openSaveComponent(e){this.dialog.open(oe,{data:e}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(H,{data:K.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.buildRequest()).pipe(U(this.dataSource.indicator)).pipe(_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=C({type:o,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[y([u]),h],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,a){t&1&&(n(0,"sz-ui-table-search-filter",0)(1,"button",1),T("click",function(){return a.openCreateComponent();}),n(2,"span"),A(3,2),p()()(),n(4,"sz-ui-table",3),T("update",function(){return a.get();}),p()),t&2&&(r("dataSource",a.dataSource),d(4),r("stateEnabled",!0)("dataSource",a.dataSource));},dependencies:[L,te,ee,Z,Y,F],encapsulation:2});let i=o;return i;})();export{Be as a};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/