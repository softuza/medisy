import{e as oe}from"./chunk-PW6LBWRS.js";import{a,b as Z,d as x,f as ee,k as te,l as ie}from"./chunk-IXLMK2UK.js";import{a as S}from"./chunk-6OX5UKSI.js";import{e as H,f as q,g as J,i as K,j as Q,k as W}from"./chunk-FXT3AS6A.js";import{g as w,j as M}from"./chunk-NHZHW3G6.js";import{a as R,b as B,d as P,e as Y,g as G}from"./chunk-LEHA6VA4.js";import{l as k,r as X}from"./chunk-G5AGS2UW.js";import{c as j}from"./chunk-HNFKXZJS.js";import{c as C,d as U}from"./chunk-3S3P6JML.js";import{f as A,g as N,k as v,m as I,p as O,q as z,t as D}from"./chunk-JUV6646Q.js";import{a as L,e as F}from"./chunk-WGP57T36.js";import{a as $,c as V}from"./chunk-6V4W7LPQ.js";import{Cc as b,Hb as n,Ib as u,Jb as _,O as c,Tb as y,Vb as T,ib as m,jb as p,jc as E,mc as h,na as d,qa as f,qb as g,xb as s}from"./chunk-XKRBGLCU.js";var ae=(()=>{let i=class i extends H{constructor(e,t,o,l){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=l,this.form=t.group({note:[l?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(p(S),p(z),p(R),p(B));},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[g,h],decls:5,vars:3,consts:()=>{let e;return e="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",e],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2),u()(),_(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",o.header),m(2),s("formGroup",o.form),m(2),s("actions",o.actions));},dependencies:[D,v,A,N,I,O,G,Y,Q,q,J,X,k],encapsulation:2});let r=i;return r;})();var Ge=(()=>{let i=class i{constructor(){this.route=d(L),this.dialog=d(P),this.locale=d(b),this.mlabService=d(S),this.dataSource=new x(["testTypeId","-testId"]),this.analysis=this.route.snapshot.data.analysis,this.dataSource.fetchableFields=!1,this.dataSource.columns.push(a.uuid("id"),a.uuid("analysisId"),a.uuid("testTypeId"),a.uuid("test.testType").setFieldFetchable(!0).setVisibility(!1).setFieldFilterable(!1),a.icon("test.state",e=>oe(e.test?.state)).setContentTooltip(e=>U(e.test?.state)),a.string("testType").setName(C.testType).setHeaderSortable(!1).setContentFormat(e=>e.test?e.test.testType.name:e.testType.name),a.string("test.referenceGroup.name").setName(C.referenceGroup),a.string("note"),a.date("createdAt",!1),a.date("updatedAt",!1),Z.menu([M.edit(e=>this.openSaveComponent(e)),w.divider(),M.delete(e=>this.openDeleteComponent(e))])),this.get();}openCreateComponent(){}openSaveComponent(e){this.dialog.open(ae,{data:e}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.buildRequest()).pipe(j(this.dataSource.indicator)).pipe(c(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[E([S]),h],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(n(0,"sz-ui-table-search-filter",0),T("changed",function(){return o.get();}),n(1,"button",1),T("click",function(){return o.openCreateComponent();}),n(2,"span"),y(3,2),u()()(),n(4,"sz-ui-table",3),T("update",function(){return o.get();}),u()),t&2&&(s("dataSource",o.dataSource),m(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[F,ie,te,ee,V,$],encapsulation:2});let r=i;return r;})();export{Ge as a};/**i18n:ce9ae1b8b067a31d7d6a4605b83492db03c265ea8c4fa49ce44e4fe9b82d798e*/