import{a as se}from"./chunk-DMZRJW6J.js";import{b as T}from"./chunk-A6RSMEH5.js";import{a as te,b as oe,c as ie,e as re,q as ae,r as ne}from"./chunk-CFOMHYBZ.js";import{c as K,g as Q,h as W,i as G,j as F,l as Z,m as f,n as ee}from"./chunk-UJAW327Y.js";import{a as I,b as N,d as x,e as y,g as _}from"./chunk-JW5GSDNP.js";import{D as H,E as q,z as w}from"./chunk-ADGNUUMA.js";import{d as h,g as D,h as v,l as O,n as A,o as P,p as b,s as R}from"./chunk-DNMCT3KT.js";import{c as Y}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as u}from"./chunk-PVY3QENI.js";import{a as z}from"./chunk-CSFT2WH3.js";import"./chunk-JJ7KQT5E.js";import{a as J}from"./chunk-HXOIERNB.js";import{e as j}from"./chunk-KFH6QGXF.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as V,c as X}from"./chunk-M4TKXCQI.js";import{Ra as k}from"./chunk-IPZKDZL6.js";import{Bb as l,Cb as p,Db as d,L as M,Nb as L,Pb as C,Zb as S,ac as E,cb as m,da as $,db as a,kb as g,la as c,ma as B,nb as n}from"./chunk-3QIFGVJ6.js";var le=(()=>{let i=class i extends Q{constructor(o,e,t){super(e),this.fb=o,this.dialog=e,this.data=t,this.form=o.group({includeLaboratoryIds:[t.includeLaboratoryIds]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};i.ɵfac=function(e){return new(e||i)(a(b),a(I),a(N));},i.ɵcmp=c({type:i,selectors:[["medisy-test-groups-filter"]],standalone:!0,features:[S([]),g,E],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"medisy-form-field-laboratory",2),p()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(n("header",t.header),m(2),n("formGroup",t.form),m(1),n("multiple",!0),m(1),n("actions",t.actions));},dependencies:[R,O,D,v,A,P,_,y,f,G,F,se],encapsulation:2});let r=i;return r;})();var pe=(()=>{let i=class i extends W{constructor(o,e,t,s){super(t),this.mlabService=o,this.fb=e,this.dialog=t,this.data=s,this.form=e.group({name:[s?.name,[h.required,h.minLength(1)]],description:[s?.description,[]],isFavorite:[s?.isFavorite??!1,[h.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(u),a(b),a(I),a(N));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[S([]),g,E],decls:6,vars:3,consts:()=>{let o;o="Name";let e;return e="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),p()(),d(5,"sz-ui-dialog-actions",4)),e&2&&(n("header",t.header),m(2),n("formGroup",t.form),m(3),n("actions",t.actions));},dependencies:[R,O,D,v,A,P,_,y,f,G,F,q,w,H],encapsulation:2});let r=i;return r;})();var de=(()=>{let i=class i{constructor(o,e){this.dialog=o,this.mlabService=e,this.dataSource=new oe(J.paged()),this.dataSource.addRows(ie.default([T.code().makeCompact(),T.nameHyperlink(t=>t.id,t=>t.name),T.createdAt(),te.checkbox("isFavorite","Favorite",(t,s)=>{t.isFavorite=s,this.updateItem(t);}),T.menu([Y.edit(t=>this.openSaveComponent(t)),Y.delete(t=>this.openTestGroupDeleteComponent(t))])])),this.get();}openFilterComponent(){this.dialog.open(le,{data:this.dataSource.filterModel}).afterClosed().pipe(M(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get();});}openSaveComponent(o){this.dialog.open(pe,{data:o}).afterClosed().pipe(M(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestGroupDeleteComponent(o){this.dialog.open(Z,{data:ee.delete(this.mlabService.testGroups.delete(o.id),o)}).afterClosed().pipe(M(1)).subscribe(e=>{this.dataSource.delete(e);});}updateItem(o){this.mlabService.testGroups.update(o.id,o).subscribe(e=>{this.dataSource.update(e);});}get(){this.mlabService.testGroups.get(this.dataSource.filterModel).pipe(K(this.dataSource.indicator),M(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(a(x),a(u));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-groups"]],features:[S([u])],decls:8,vars:4,consts:()=>{let o;o="Test Groups";let e;return e="Add",[["start","",1,"sz-h5"],o,[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(l(0,"sz-ui-header-basic")(1,"h5",0),L(2,1),p()(),l(3,"sz-ui-table-filter",2),C("search",function(){return t.get();})("filter",function(){return t.openFilterComponent();}),l(4,"button",3),C("click",function(){return t.openSaveComponent();}),l(5,"span"),L(6,4),p()()(),l(7,"sz-ui-table",5),C("update",function(){return t.get();}),p()),e&2&&(m(3),n("dataSource",t.dataSource),m(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[V,ae,re,z],encapsulation:2});let r=i;return r;})();var ue=[{path:"",component:de}];var dt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=B({type:i}),i.ɵinj=$({providers:[u],imports:[j.forChild(ue),_,k,X,ne,f,z]});let r=i;return r;})();export{dt as TestGroupsModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/