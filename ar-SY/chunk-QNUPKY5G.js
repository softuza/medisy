import{a as te}from"./chunk-VLGAALIL.js";import{a as ee}from"./chunk-6P4C37MQ.js";import"./chunk-5D7OMFN2.js";import{a as M}from"./chunk-IWR3KYJK.js";import{a as U,b as v,d as W,e as y,g as X,s as Y,t as Z}from"./chunk-LIUTUGIN.js";import{a as $}from"./chunk-SUUMCV2R.js";import{c as q,g as J,i as K,j as Q,m as h}from"./chunk-TXP6BBJB.js";import{a as H,b as P,d as V,e as x,g as S}from"./chunk-BVSJJDLC.js";import{n as k}from"./chunk-GXEPFKEQ.js";import{g as _,h as N,l as G,n as L,o as j,p as R,r as w,s as f}from"./chunk-2OZGA6L4.js";import{a as O}from"./chunk-YG5GW4EW.js";import{a as l}from"./chunk-KQSWIXX2.js";import{b as C}from"./chunk-SNKHLPW5.js";import"./chunk-WM5ABWWX.js";import"./chunk-WKFGKHHI.js";import{e as A}from"./chunk-KIPWFCJ2.js";import"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Ra as B,Ua as E}from"./chunk-KZIHA7KF.js";import{$b as c,Bb as p,Cb as d,Db as m,L as b,Rb as g,cb as n,cc as I,da as F,db as s,kb as D,la as u,ma as T,nb as a}from"./chunk-6MBKLWBV.js";var ie=(()=>{let e=class e extends J{constructor(i,o,t){super(o),this.fb=i,this.dialog=o,this.data=t,this.form=i.group({includeLaboratoryIds:[t.includeLaboratoryIds],includeTestGroupIds:[t.includeTestGroupIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}};e.\u0275fac=function(o){return new(o||e)(s(R),s(H),s(P))},e.\u0275cmp=u({type:e,selectors:[["medisy-test-classes-filter"]],standalone:!0,features:[c([]),D,I],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(o,t){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),d()(),m(5,"sz-ui-dialog-actions",4)),o&2&&(a("header",t.header),n(2),a("formGroup",t.form),n(1),a("multiple",!0),n(1),a("multiple",!0),n(1),a("actions",t.actions))},dependencies:[f,G,_,N,L,j,S,x,h,K,Q,ee,te],encapsulation:2});let r=e;return r})();var re=(()=>{let e=class e{constructor(i,o){this.dialog=i,this.mlabService=o,this.title=$.testClasses,this.dataSource=new W,this.dataSource.addRows([y.borderless([M.nameText(t=>t.name).addClass(U.FontBold),v.text("abbreviation",O.abbreviation,t=>t.abbreviation),M.createdAt()]),y.headerless([v.text("latinname",void 0,t=>t.latinName)])]),this.get()}openFilterComponent(){this.dialog.open(ie,{data:this.dataSource.filter}).afterClosed().pipe(b(1)).subscribe(i=>{this.dataSource.updateFilter(i),this.get()})}get(){this.mlabService.testClasses.get(this.dataSource.filter,this.dataSource.pagination).pipe(q(this.dataSource.indicator),b(1)).subscribe(i=>{this.dataSource.set(i.items,i.count)})}};e.\u0275fac=function(o){return new(o||e)(s(V),s(l))},e.\u0275cmp=u({type:e,selectors:[["medisy-laboratory-test-classes"]],features:[c([l])],decls:3,vars:4,consts:[[3,"title"],[3,"filter","search","filterClicked"],[3,"stateEnabled","dataSource","update"]],template:function(o,t){o&1&&(m(0,"sz-ui-header-info",0),p(1,"sz-ui-table-filter",1),g("search",function(){return t.get()})("filterClicked",function(){return t.openFilterComponent()}),d(),p(2,"sz-ui-table",2),g("update",function(){return t.get()}),d()),o&2&&(a("title",t.title),n(1),a("filter",t.dataSource.filter),n(1),a("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[Y,X,C],encapsulation:2});let r=e;return r})();var ae=[{path:"",component:re}];var Ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({providers:[l],imports:[w,f,A.forChild(ae),S,k,E,B,Z,h,C]});let r=e;return r})();export{Ue as TestClassesModule};
/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/
