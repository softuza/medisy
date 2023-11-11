import{a as I}from"./chunk-SUYPJUYL.js";import{d as Q,e as W,f as D,g as v,i as Z,j as R,k as ee}from"./chunk-2V6YOSRH.js";import{s as X,u as w,v as k}from"./chunk-7LSJKDZJ.js";import{a as T,b as g,d as q,e as N,g as y}from"./chunk-XVVRHKJW.js";import"./chunk-5FPHEJQ4.js";import{b as se}from"./chunk-UIYAEPV5.js";import"./chunk-SIM3MWAY.js";import{b as Y}from"./chunk-FW5ZUJKN.js";import{a as te,b as oe,c as ie,d as re,n as ae,o as ne}from"./chunk-FFJZ25PW.js";import{b as F}from"./chunk-CP6SNK6A.js";import"./chunk-S2JVRKMZ.js";import{b as K}from"./chunk-OI3RYSYI.js";import{d as z,g as h,h as M,l as O,n as E,o as C,p as P,s as A,t as j,v as U}from"./chunk-WLSYRODT.js";import{a as b}from"./chunk-YF2PEFAH.js";import"./chunk-424JH55D.js";import{a as x}from"./chunk-OFOYSQTQ.js";import{a as J}from"./chunk-6S4N3MHV.js";import{E as G,H,I as V}from"./chunk-2EUQTENK.js";import{$b as _,Ab as p,Bb as d,L as S,Lb as L,Ob as f,Vb as B,Wb as $,db as l,eb as r,la as u,lb as c,ob as n,zb as m}from"./chunk-5RJFZK6E.js";var pe=(()=>{let i=class i extends Q{constructor(o,e,t){super(e),this.fb=o,this.dialog=e,this.data=t,this.form=o.group({phoneType:[t.phoneType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};i.ɵfac=function(e){return new(e||i)(r(P),r(T),r(g));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[c,_],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"medisy-form-field-phone-type",2),p()(),d(4,"sz-ui-dialog-actions",3)),e&2&&(n("header",t.header),l(2),n("formGroup",t.form),l(1),n("emptyOption",!0),l(1),n("actions",t.actions));},dependencies:[A,O,h,M,E,C,R,D,v,y,N,I],encapsulation:2});let s=i;return s;})();var de=(()=>{let i=class i extends W{constructor(o,e,t,a){super(t),this.mlabService=o,this.fb=e,this.dialog=t,this.data=a,this.form=e.group({value:[a.laboratoryPhone?.value,[z.required]],description:[a.laboratoryPhone?.description,[]],phoneType:[a.laboratoryPhone?.phoneType??se.Home,[z.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(r(b),r(P),r(T),r(g));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[c,_],decls:7,vars:3,consts:()=>{let o;o="Description";let e;return e="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",o],["formControlName","value","label",e],["formControlName","phoneType"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),p()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(n("header",t.header),l(2),n("formGroup",t.form),l(4),n("actions",t.actions));},dependencies:[A,O,h,M,E,C,R,D,v,y,N,k,X,w,I],encapsulation:2});let s=i;return s;})();var tt=(()=>{let i=class i{constructor(o,e,t){this.dialog=o,this.mlabService=e,this.route=t,this.dataSource=new oe(x.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ie.default([te.text("value","Phone"),Y.createdAt(),Y.menu([F.edit(a=>this.openSaveComponent(a)),F.delete(a=>this.openPhoneDeleteComponent(a))])])),this.get();}openSaveComponent(o){this.dialog.open(de,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:o}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open(pe,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openPhoneDeleteComponent(o){this.dialog.open(Z,{data:ee.delete(this.mlabService.laboratories.phones.delete(o.laboratoryId,o.id),o)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filterModel).pipe(K(this.dataSource.indicator),S(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(r(q),r(b),r(G));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[_],decls:11,vars:5,consts:()=>{let o;o="Phones";let e;return e="Add",[["start",""],[1,"sz-h5"],o,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),L(3,2),p(),m(4,"a",3),B(5),p()()(),m(6,"sz-ui-table-filter",4),f("search",function(){return t.get();})("filter",function(){return t.openFilterComponent();}),m(7,"button",5),f("click",function(){return t.openSaveComponent();}),m(8,"span"),L(9,6),p()()(),m(10,"sz-ui-table",7),f("update",function(){return t.get();}),p()),e&2&&(l(5),$(t.laboratory.name),l(1),n("dataSource",t.dataSource),l(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[V,H,U,j,J,ne,ae,re],encapsulation:2});let s=i;return s;})();export{tt as LaboratoryPhonesComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/