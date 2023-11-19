import{a as I}from"./chunk-MO4HGIQ6.js";import{b as se}from"./chunk-CCLL2PQ6.js";import"./chunk-PPO5LMMV.js";import"./chunk-PWAP25HQ.js";import"./chunk-I7NN55R5.js";import{b as Y}from"./chunk-Z333ZEEM.js";import{a as te,b as oe,c as ie,e as re,o as ae,p as ne}from"./chunk-I7TP3TN4.js";import"./chunk-CZ465XL4.js";import{c as K,g as Q,h as W,i as D,j as v,l as Z,m as R,n as ee}from"./chunk-UJAW327Y.js";import{a as T,b as g,d as q,e as N,g as y}from"./chunk-JW5GSDNP.js";import{D as w,E as k,z as X}from"./chunk-M2QIPGOP.js";import{d as z,g as h,h as M,l as O,n as E,o as C,p as P,s as A}from"./chunk-DNMCT3KT.js";import{c as F}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as b}from"./chunk-TJ6J6WZC.js";import{a as J}from"./chunk-CSFT2WH3.js";import{a as x}from"./chunk-OGDXQP2U.js";import{a as G,d as H,e as V}from"./chunk-KYUPPZUX.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as j,c as U}from"./chunk-M4TKXCQI.js";import"./chunk-IPZKDZL6.js";import{Bb as m,Cb as p,Db as d,L as S,Nb as L,Pb as f,Wb as B,Xb as $,ac as u,cb as l,db as r,kb as c,la as _,nb as n}from"./chunk-3QIFGVJ6.js";var pe=(()=>{let i=class i extends Q{constructor(t,e,o){super(e),this.fb=t,this.dialog=e,this.data=o,this.form=t.group({phoneType:[o.phoneType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};i.ɵfac=function(e){return new(e||i)(r(P),r(T),r(g));},i.ɵcmp=_({type:i,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[c,u],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"medisy-form-field-phone-type",2),p()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(1),n("emptyOption",!0),l(1),n("actions",o.actions));},dependencies:[A,O,h,M,E,C,R,D,v,y,N,I],encapsulation:2});let s=i;return s;})();var de=(()=>{let i=class i extends W{constructor(t,e,o,a){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=a,this.form=e.group({value:[a.laboratoryPhone?.value,[z.required]],description:[a.laboratoryPhone?.description,[]],phoneType:[a.laboratoryPhone?.phoneType??se.Home,[z.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(r(b),r(P),r(T),r(g));},i.ɵcmp=_({type:i,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[c,u],decls:7,vars:3,consts:()=>{let t;t="Description";let e;return e="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",t],["formControlName","value","label",e],["formControlName","phoneType"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),p()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(4),n("actions",o.actions));},dependencies:[A,O,h,M,E,C,R,D,v,y,N,k,X,w,I],encapsulation:2});let s=i;return s;})();var tt=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new oe(x.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ie.default([te.text("value","Phone"),Y.createdAt(),Y.menu([F.edit(a=>this.openSaveComponent(a)),F.delete(a=>this.openPhoneDeleteComponent(a))])])),this.get();}openSaveComponent(t){this.dialog.open(de,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:t}}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(pe,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}openPhoneDeleteComponent(t){this.dialog.open(Z,{data:ee.delete(this.mlabService.laboratories.phones.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filterModel).pipe(K(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(r(q),r(b),r(G));},i.ɵcmp=_({type:i,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[u],decls:11,vars:5,consts:()=>{let t;t="Phones";let e;return e="Add",[["start",""],[1,"sz-h5"],t,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),L(3,2),p(),m(4,"a",3),B(5),p()()(),m(6,"sz-ui-table-filter",4),f("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),m(7,"button",5),f("click",function(){return o.openSaveComponent();}),m(8,"span"),L(9,6),p()()(),m(10,"sz-ui-table",7),f("update",function(){return o.get();}),p()),e&2&&(l(5),$(o.laboratory.name),l(1),n("dataSource",o.dataSource),l(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[V,H,U,j,J,ne,ae,re],encapsulation:2});let s=i;return s;})();export{tt as LaboratoryPhonesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/