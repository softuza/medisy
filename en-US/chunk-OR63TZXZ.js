import{c as ne}from"./chunk-QPCV2IZI.js";import{a as re}from"./chunk-Z2WJOGNP.js";import{a,b as te,d as oe,f as ie,i as ae,j as se}from"./chunk-A52A4IXH.js";import{a as u}from"./chunk-A4WL3FYI.js";import{e as J,f as K,g as W,i as Z,j as x,k as ee}from"./chunk-NORSX7AN.js";import{e as q,h as C}from"./chunk-KZ5TTCTY.js";import{a as P,b as Y,d as V,e as $,g as j}from"./chunk-4Z4QG25E.js";import{c as X,q as H,t as Q}from"./chunk-RIHPS5KS.js";import{c as M}from"./chunk-IWL564QK.js";import{c as y,d as w}from"./chunk-XVKVAOPG.js";import{f as I,g as b,k as v,m as L,p as D,q as z,t as R}from"./chunk-QB7MQTPZ.js";import{a as G,c as F,e as B}from"./chunk-NU73GHW6.js";import{ia as k,ka as U}from"./chunk-CJMWB6ZO.js";import{Db as s,Hc as N,Nb as n,Ob as S,Pb as _,Zb as A,_b as f,f as g,hb as m,ib as p,pa as d,pc as O,qc as T,ua as c,ub as h,x as E}from"./chunk-HNAKTLBJ.js";var le=(()=>{let i=class i extends J{constructor(e,t,o,l){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=l,this.testGroups=this.mlabService.testGroups.getAll({orderBy:["name"]}),this.form=t.group({testGroupId:[l?.testGroupId,[]],note:[l?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.tests.update(this.data.analysisId,this.data.id,this.form.value));}};i.ɵfac=function(t){return new(t||i)(p(u),p(z),p(P),p(Y));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-analysis-tests-save"]],standalone:!0,features:[h,T],decls:6,vars:5,consts:()=>{let e;e="Test Group";let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId","label",e,3,"source","emptyOption"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-input",3),S()(),_(5,"sz-ui-dialog-actions",4)),t&2&&(s("header",o.header),m(2),s("formGroup",o.form),m(),s("source",o.testGroups)("emptyOption",!0),m(2),s("actions",o.actions));},dependencies:[R,v,I,b,L,D,j,$,x,K,W,Q,X,H],encapsulation:2});let r=i;return r;})();var Ue=(()=>{let i=class i{constructor(){this.route=d(G),this.router=d(F),this.dialog=d(V),this.locale=d(N),this.mlabService=d(u),this.dataSource=new oe(["test.testType.name","-testId"]),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columnDefs.push(a.uuid("id"),a.icon("test.state").setValueGetter(e=>ne(e.test.state)).setValueTooltip(e=>w(e.test.state)),a.string("test.testType.name").setValueClassFontBold().setClickFn(e=>this.router.navigate([`/mlab/analyses/${e.analysisId}/tests/${e.id}`])).setStacked([a.string("test.laboratory.name").setValueClassFontSmall()]),a.string("test.referenceGroup.name").setName(y.referenceGroup).setVisible(!1),a.string("note").setVisible(!1),a.date("createdAt",!1),a.date("updatedAt",!1),te.menu([C.edit(e=>this.openSaveComponent(e)),q.divider(),C.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"testGroupId",name:y.testGroup,nameGetterFn:e=>e.testGroup?.name??y.single},this.get();}openAnalysisTestTypeAddComponent(){return g(this,null,function*(){let e=yield E(this.dialog.open(re,{data:this.analysis.laboratoryId}).afterClosed());e&&this.mlabService.analyses.tests.create(this.analysis.id,{laboratoryTestTypeId:e.laboratoryTestType.id,transferOutLaboratoryId:e.transferOutLaboratoryId}).pipe(M(this.dataSource.indicator)).subscribe(t=>{t&&this.get();});});}openSaveComponent(e){this.dialog.open(le,{data:e}).afterClosed().subscribe(t=>{t&&this.get();});}openDeleteComponent(e){this.dialog.open(Z,{data:ee.delete(this.mlabService.analyses.tests.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.getQuery()).pipe(M(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-analysis-tests"]],standalone:!0,features:[O([u]),T],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,o){t&1&&(n(0,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),n(1,"button",2),f("click",function(){return o.openAnalysisTestTypeAddComponent();}),n(2,"span"),A(3,0),S()()(),n(4,"sz-ui-table",3),f("update",function(){return o.get();}),S()),t&2&&(s("dataSource",o.dataSource),m(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[B,se,ae,ie,U,k],encapsulation:2});let r=i;return r;})();export{Ue as a};/**i18n:8ad4cf760c87d08b695a94cb80f4844ffbc4e33bdc339c4d5a0bbc09e28e3eac*/