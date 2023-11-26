import{a as Se,b as Me}from"./chunk-V46R3SRV.js";import"./chunk-RKDKE2AU.js";import"./chunk-UYAJRTBM.js";import"./chunk-RMREJQO4.js";import{a as fe}from"./chunk-6P4C37MQ.js";import"./chunk-5D7OMFN2.js";import{a as D}from"./chunk-IWR3KYJK.js";import{b as le,d as se,e as de,g as pe,s as ue,t as ce}from"./chunk-LIUTUGIN.js";import{a as _e}from"./chunk-SUUMCV2R.js";import{c as ie,g as ae,i as ne,j as me,m as E}from"./chunk-TXP6BBJB.js";import{a as Z,b as ee,d as te,e as oe,g as f}from"./chunk-BVSJJDLC.js";import{a as w,d as U,h as X,i as V,r as x,s as q,t as J,u as K,v as Q,w as W}from"./chunk-GXEPFKEQ.js";import{b as L,g as R,h as y,l as F,n as b,o as v,p as Y,s as z}from"./chunk-2OZGA6L4.js";import{a as T}from"./chunk-YG5GW4EW.js";import{a as S}from"./chunk-KQSWIXX2.js";import{b as M}from"./chunk-SNKHLPW5.js";import"./chunk-WM5ABWWX.js";import"./chunk-WKFGKHHI.js";import{a as $,d as k,e as G}from"./chunk-KIPWFCJ2.js";import{d as re,i as A}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as B,Ra as j,Ua as H}from"./chunk-KZIHA7KF.js";import{$b as _,Bb as s,Cb as p,Db as d,L as g,Nb as c,Rb as C,Xb as N,cb as m,cc as h,da as P,db as l,kb as O,la as u,ma as I,nb as a}from"./chunk-6MBKLWBV.js";var ge=(()=>{let t=class t extends ae{constructor(o,r,e){super(r),this.fb=o,this.dialog=r,this.data=e,this.form=o.group({testGroupIds:[e.testGroupIds],laboratoryIds:[e.laboratoryIds],personIds:[e.personIds],startDate:[e.startDate],endDate:[e.endDate]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};t.ɵfac=function(r){return new(r||t)(l(Y),l(Z),l(ee));},t.ɵcmp=u({type:t,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[_([]),O,h],decls:16,vars:9,consts:()=>{let o;o="Date";let r;r="Start date";let e;return e="End date",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds",3,"multiple"],[1,"tw-flex-1"],o,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",r,"formControlName","startDate"],["matEndDate","","placeholder",e,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]];},template:function(r,e){if(r&1&&(d(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),d(3,"medisy-form-field-test-group-search",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-person-search",4),s(6,"mat-form-field",5)(7,"mat-label"),c(8,6),p(),s(9,"mat-date-range-input",7),d(10,"input",8)(11,"input",9),p(),d(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),p()()(),d(15,"sz-ui-dialog-actions",12)),r&2){let n=N(14);a("header",e.header),m(2),a("formGroup",e.form),m(2),a("multiple",!0),m(1),a("multiple",!0),m(4),a("rangePicker",n)("comparisonStart",e.form.controls.startDate.value)("comparisonEnd",e.form.controls.endDate.value),m(3),a("for",n),m(3),a("actions",e.actions);}},dependencies:[z,F,L,R,y,b,v,f,oe,V,X,w,U,E,ne,me,Se,fe,Me,W,x,K,q,J,Q],encapsulation:2});let i=t;return i;})();var Ce=(()=>{let t=class t{constructor(o,r,e){this.dialog=o,this.mlabService=r,this.route=e,this.title=_e.analyses,this.dataSource=new se(),this.dataSource.addRows([de.default([le.hyperlink("code",T.code,n=>n.id).makeCompact(),D.createdAt(),D.menu([A.divider(),A.default(T.report,"report",()=>{})])])]),this.dataSource.updateFilter(this.route.snapshot.queryParams),this.get();}openFilterComponent(){this.dialog.open(ge,{data:this.dataSource.filter}).afterClosed().pipe(g(1)).subscribe(o=>{this.dataSource.updateFilter(o),this.get();});}get(){this.mlabService.analyses.get(this.dataSource.filter,this.dataSource.pagination).pipe(ie(this.dataSource.indicator),g(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(r){return new(r||t)(l(te),l(S),l($));},t.ɵcmp=u({type:t,selectors:[["medisy-laboratory-analyses"]],features:[_([])],decls:6,vars:4,consts:()=>{let o;return o="Add",[[3,"title"],[3,"filter","search","filterClicked"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],o,[3,"stateEnabled","dataSource","update"]];},template:function(r,e){r&1&&(d(0,"sz-ui-header-info",0),s(1,"sz-ui-table-filter",1),C("search",function(){return e.get();})("filterClicked",function(){return e.openFilterComponent();}),s(2,"button",2)(3,"span"),c(4,3),p()()(),s(5,"sz-ui-table",4),C("update",function(){return e.get();}),p()),r&2&&(a("title",e.title),m(1),a("filter",e.dataSource.filter),m(4),a("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[k,ue,pe,M,B],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let i=t;return i;})();var Ae=[{path:"",component:Ce},{path:"create",loadComponent:()=>import("./chunk-XMSI6YPE.js").then(i=>i.CreateComponent)}];var St=(()=>{let t=class t{};t.ɵfac=function(r){return new(r||t)();},t.ɵmod=I({type:t}),t.ɵinj=P({providers:[S],imports:[G.forChild(Ae),f,ce,E,M,re,H,j]});let i=t;return i;})();export{St as AnalysesModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/