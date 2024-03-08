import{c as ne}from"./chunk-UCKTAF4Z.js";import{a as re}from"./chunk-AC43O5BZ.js";import{a,b as te,d as oe,f as ie,k as ae,l as se}from"./chunk-VFYGOWWS.js";import{a as c}from"./chunk-XBNTUKD4.js";import{f as J,g as K,h as W,j as Z,k as x,l as ee}from"./chunk-XG6RRWZF.js";import{g as q,j as y}from"./chunk-EY7IFQUI.js";import{a as B,b as P,d as Y,e as V,g as $}from"./chunk-ALKG3NDD.js";import{c as X,q as H,t as Q}from"./chunk-6CEOHACF.js";import{c as C}from"./chunk-U43N2EL3.js";import{c as k,d as w}from"./chunk-C52TAHEM.js";import{f as I,g as b,k as v,m as D,p as L,q as z,t as R}from"./chunk-7KOGAWSO.js";import{a as F,e as G}from"./chunk-RP5YIC5N.js";import{a as U,c as j}from"./chunk-PANRUYVF.js";import{Cc as N,Hb as n,Ib as u,Jb as f,O as m,Tb as h,Vb as T,f as E,ib as d,jb as S,jc as O,mc as M,na as p,qa as _,qb as A,w as g,xb as s}from"./chunk-ZZ5G6LQ7.js";var le=(()=>{let i=class i extends J{constructor(e,t,o,l){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=l,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[l?.testGroupId,[]],note:[l?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(S(c),S(z),S(B),S(P));},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[A,M],decls:6,vars:5,consts:()=>{let e;e="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(f(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),u()(),f(5,"sz-ui-dialog-actions",4)),t&2&&(s("header",o.header),d(2),s("formGroup",o.form),d(),s("source",o.testGroups)("emptyOption",!0),d(2),s("actions",o.actions));},dependencies:[R,v,I,b,D,L,$,V,x,K,W,Q,X,H],encapsulation:2});let r=i;return r;})();var Xe=(()=>{let i=class i{constructor(){this.route=p(F),this.dialog=p(Y),this.locale=p(N),this.mlabService=p(c),this.dataSource=new oe(["test.testType.name","-testId"]),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.state").setValueGetter(e=>ne(e.test?.state)).setValueTooltip(e=>w(e.test?.state)),a.string("test.testType.name").setValueClassFontBold().setStacked([a.string("testGroup.name").setValueClassFontSmall(),a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.name").setName(k.referenceGroup).setVisibility(!1),a.string("note"),a.date("createdAt",!1),a.date("updatedAt",!1),te.menu([y.edit(e=>this.openSaveComponent(e)),q.divider(),y.delete(e=>this.openDeleteComponent(e))])),this.get();}openAnalysisTestTypeAddComponent(){return E(this,null,function*(){let e=yield g(this.dialog.open(re,{data:this.analysis.laboratoryId}).afterClosed());e&&(console.log(e),this.mlabService.analyses.tests.create(this.analysis.id,{laboratoryTestTypeId:e.id}).pipe(C(this.dataSource.indicator)).pipe(m(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);}));});}openSaveComponent(e){this.dialog.open(le,{data:e}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(C(this.dataSource.indicator)).pipe(m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[O([c]),M],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(n(0,"sz-ui-table-search-filter",0),T("changed",function(){return o.get();}),n(1,"button",1),T("click",function(){return o.openAnalysisTestTypeAddComponent();}),n(2,"span"),h(3,2),u()()(),n(4,"sz-ui-table",3),T("update",function(){return o.get();}),u()),t&2&&(s("dataSource",o.dataSource),d(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[G,se,ae,ie,j,U],encapsulation:2});let r=i;return r;})();export{Xe as a};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/