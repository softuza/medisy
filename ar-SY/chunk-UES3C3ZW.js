import{a as ee}from"./chunk-SF5HJDHH.js";import{a as Z}from"./chunk-LSKIGCZB.js";import{d as X,f as q,g as x,j as C}from"./chunk-GIQHEGBP.js";import{e as w}from"./chunk-7LSJKDZJ.js";import{a as Y,b as $,d as H,e as k,g as S}from"./chunk-XVVRHKJW.js";import"./chunk-5FPHEJQ4.js";import{b as T}from"./chunk-FW5ZUJKN.js";import{a as h,b as J,c as b,d as K,n as Q,o as W}from"./chunk-FFJZ25PW.js";import"./chunk-CP6SNK6A.js";import"./chunk-S2JVRKMZ.js";import{b as V}from"./chunk-OI3RYSYI.js";import{g as I,h as A,l as L,n as R,o as N,p as P,r as G,s as f,v as j}from"./chunk-WLSYRODT.js";import{a as d}from"./chunk-YF2PEFAH.js";import"./chunk-424JH55D.js";import{a as U}from"./chunk-OFOYSQTQ.js";import{a as _}from"./chunk-6S4N3MHV.js";import{I as O,Ua as B}from"./chunk-2EUQTENK.js";import{$b as F,Ab as l,Bb as u,L as M,Lb as D,Ob as g,Yb as c,da as y,db as n,eb as s,la as p,lb as E,ma as z,ob as a,zb as m}from"./chunk-5RJFZK6E.js";var oe=(()=>{let e=class e extends X{constructor(i,t,o){super(t),this.fb=i,this.dialog=t,this.data=o,this.form=i.group({includeLaboratoryIds:[o.includeLaboratoryIds],includeTestGroupIds:[o.includeTestGroupIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(t){return new(t||e)(s(P),s(Y),s($));},e.ɵcmp=p({type:e,selectors:[["medisy-test-classes-filter"]],standalone:!0,features:[c([]),E,F],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),u(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),l()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",o.header),n(2),a("formGroup",o.form),n(1),a("multiple",!0),n(1),a("multiple",!0),n(1),a("actions",o.actions));},dependencies:[f,L,I,A,R,N,S,k,C,q,x,Z,ee],encapsulation:2});let r=e;return r;})();var ie=(()=>{let e=class e{constructor(i,t){this.dialog=i,this.mlabService=t,this.dataSource=new J(U.pagedSorted("name")),this.dataSource.addRows([b.borderless([T.nameHyperlink(o=>o.name),h.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",o=>o.abbreviation),T.createdAt()]),b.headerless([h.text("description")])]),this.get();}openFilterComponent(){this.dialog.open(oe,{data:this.dataSource.filterModel}).afterClosed().pipe(M(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.testClasses.get(this.dataSource.filterModel).pipe(V(this.dataSource.indicator),M(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};e.ɵfac=function(t){return new(t||e)(s(H),s(d));},e.ɵcmp=p({type:e,selectors:[["medisy-laboratory-test-classes"]],features:[c([d])],decls:5,vars:4,consts:()=>{let i;return i="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-basic")(1,"h5",0),D(2,1),l()(),m(3,"sz-ui-table-filter",2),g("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),l(),m(4,"sz-ui-table",3),g("update",function(){return o.get();}),l()),t&2&&(n(3),a("dataSource",o.dataSource),n(1),a("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[Q,K,_],encapsulation:2});let r=e;return r;})();var re=[{path:"",component:ie}];var Xe=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=z({type:e}),e.ɵinj=y({providers:[d],imports:[G,f,O.forChild(re),S,w,B,j,W,C,_]});let r=e;return r;})();export{Xe as TestClassesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/