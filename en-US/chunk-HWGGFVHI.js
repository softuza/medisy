import{c as le}from"./chunk-LNG2NYUW.js";import{a as ne}from"./chunk-562QEMN2.js";import{a,b as oe,d as ie,f as ae,i as se,j as re}from"./chunk-35QABRLX.js";import{a as c}from"./chunk-ONG373D2.js";import{e as K,f as W,g as Z,i as x,j as ee,k as te}from"./chunk-3BO226ZW.js";import{g as J,j as g}from"./chunk-JWSERW7P.js";import{a as Y,b as V,d as $,e as k,g as j}from"./chunk-V6NPZDED.js";import{c as w,s as Q,v as q}from"./chunk-IPLFXNQT.js";import{c as C}from"./chunk-36TFTIAF.js";import{c as M,d as H}from"./chunk-3NHRBGBW.js";import{f as b,g as v,k as L,m as D,p as z,q as R,t as G}from"./chunk-2LDQ63YO.js";import{a as F,c as B,e as P}from"./chunk-HJM6P3WE.js";import{a as U,c as X}from"./chunk-GUH7RBLV.js";import{$a as S,Ba as d,Db as n,Eb as u,Fb as f,J as p,Pb as O,Qb as T,_a as m,fa as _,fc as N,gc as y,kb as A,r as h,tb as s,xc as I}from"./chunk-5IOLWCLX.js";import{f as E}from"./chunk-NWZBVKCY.js";var de=(()=>{let i=class i extends K{constructor(e,t,o,l){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=l,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[l?.testGroupId,[]],note:[l?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(S(c),S(R),S(Y),S(V));},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[A,y],decls:6,vars:5,consts:()=>{let e;e="Test Group";let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(f(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),u()(),f(5,"sz-ui-dialog-actions",4)),t&2&&(s("header",o.header),m(2),s("formGroup",o.form),m(),s("source",o.testGroups)("emptyOption",!0),m(2),s("actions",o.actions));},dependencies:[G,L,b,v,D,z,j,k,ee,W,Z,q,w,Q],encapsulation:2});let r=i;return r;})();var we=(()=>{let i=class i{set analysis(e){this._analysis=e,this.get();}get analysis(){return this._analysis;}constructor(){this.route=d(F),this.router=d(B),this.dialog=d($),this.locale=d(I),this.mlabService=d(c),this.dataSource=new ie(["test.testType.name","-testId"]),this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.state").setValueGetter(e=>le(e.test.state)).setValueTooltip(e=>H(e.test.state)),a.string("test.testType.name").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.name").setName(M.referenceGroup).setVisibility(!1),a.string("note").setVisibility(!1),a.date("createdAt",!1),a.date("updatedAt",!1),oe.menu([g.edit(e=>this.openSaveComponent(e)),J.divider(),g.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:M.testGroup,nameGetterFn:e=>e.testGroup?.name??M.single};}openAnalysisTestTypeAddComponent(){return E(this,null,function*(){let e=yield h(this.dialog.open(ne,{data:this.analysis.laboratoryId}).afterClosed());e&&this.mlabService.analyses.tests.create(this.analysis.id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).pipe(C(this.dataSource.indicator)).pipe(p(1)).subscribe(t=>{t&&this.get();});});}openSaveComponent(e){this.dialog.open(de,{data:e}).afterClosed().pipe(p(1)).subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(x,{data:te.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(C(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],inputs:{analysis:"analysis"},standalone:!0,features:[N([c]),y],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(n(0,"sz-ui-table-search-filter",0),T("changed",function(){return o.get();}),n(1,"button",1),T("click",function(){return o.openAnalysisTestTypeAddComponent();}),n(2,"span"),O(3,2),u()()(),n(4,"sz-ui-table",3),T("update",function(){return o.get();}),u()),t&2&&(s("dataSource",o.dataSource),m(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[P,re,se,ae,X,U],encapsulation:2});let r=i;return r;})();export{we as a};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/