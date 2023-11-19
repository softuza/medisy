import{a as z}from"./chunk-YEEJNE35.js";import{a as ae}from"./chunk-S77WVTW6.js";import"./chunk-PPO5LMMV.js";import"./chunk-HJ4RP63E.js";import"./chunk-JI5I5E7Z.js";import{a as F}from"./chunk-5FZ5R4ZJ.js";import{a as x,b as ee,c as te,e as ie,q as oe,r as re}from"./chunk-2DIHYESB.js";import{c as J,g as K,h as Q,i as N,j as R,l as W,m as L,n as Z}from"./chunk-JUKWJGHA.js";import{a as T,b as O,d as X,e as v,g as D}from"./chunk-LR6DSKQQ.js";import{D as U,E as w,z as j}from"./chunk-CJ3L35E7.js";import{d as M,g as E,h as C,l as A,n as g,o as b,p as y,s as h}from"./chunk-FZFNR6NR.js";import{a as H}from"./chunk-MTTAGST2.js";import{a as I}from"./chunk-X3ZOFRYL.js";import{b as q}from"./chunk-KYTDMX2G.js";import{a as k}from"./chunk-AQB7U7BU.js";import{a as B,e as G}from"./chunk-4G55JY3H.js";import{i as P}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as $,Ra as V}from"./chunk-W55BWEJG.js";import{Bb as d,Cb as p,Db as m,L as f,Nb as Y,Pb as _,ac as c,cb as s,db as r,kb as S,la as u,nb as n}from"./chunk-3QIFGVJ6.js";var me=(()=>{let o=class o extends K{constructor(t,e,i){super(e),this.fb=t,this.dialog=e,this.data=i,this.form=t.group({emailType:[i.emailType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(r(y),r(T),r(O));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails-filter"]],standalone:!0,features:[S,c],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-email-type",2),p()(),m(4,"sz-ui-dialog-actions",3)),e&2&&(n("header",i.header),s(2),n("formGroup",i.form),s(2),n("actions",i.actions));},dependencies:[h,A,E,C,g,b,L,N,R,D,v,z],encapsulation:2});let l=o;return l;})();var se=(()=>{let o=class o extends Q{constructor(t,e,i,a){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=a,this.form=e.group({value:[a.laboratoryEmail?.value,[M.required,M.email]],description:[a.laboratoryEmail?.description,[]],emailType:[a.laboratoryEmail?.emailType??ae.Public,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryEmail?this.save(this.mlabService.laboratories.emails.update(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value)):this.save(this.mlabService.laboratories.emails.create(this.data.laboratoryId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(r(I),r(y),r(T),r(O));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[S,c],decls:7,vars:3,consts:()=>{let t;t="Description";let e;return e="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",t],["formControlName","value","label",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),p()(),m(6,"sz-ui-dialog-actions",5)),e&2&&(n("header",i.header),s(2),n("formGroup",i.form),s(4),n("actions",i.actions));},dependencies:[h,A,E,C,g,b,L,N,R,D,v,w,j,U,z],encapsulation:2});let l=o;return l;})();var et=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.route=i,this.title=H.emails,this.dataSource=new ee(k.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(te.default([x.text("value","Email"),F.createdAt(),F.menu([P.edit(a=>{this.openSaveComponent(a);}),P.delete(a=>{this.openEmailDeleteComponent(a);})])])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:t}}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(me,{data:this.dataSource.filterModel}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}openEmailDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.mlabService.laboratories.emails.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.emails.get(this.laboratory.id,this.dataSource.filterModel).pipe(J(this.dataSource.indicator)).pipe(f(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(r(X),r(I),r(B));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[c],decls:6,vars:6,consts:()=>{let t;return t="Add",[[3,"title","subTitle"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(m(0,"sz-ui-header-info",0),d(1,"sz-ui-table-filter",1),_("search",function(){return i.get();})("filter",function(){return i.openFilterComponent();}),d(2,"button",2),_("click",function(){return i.openSaveComponent();}),d(3,"span"),Y(4,3),p()()(),d(5,"sz-ui-table",4),_("update",function(){return i.get();}),p()),e&2&&(n("title",i.title)("subTitle",i.laboratory.name),s(1),n("dataSource",i.dataSource),s(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[G,V,$,q,re,oe,ie],encapsulation:2});let l=o;return l;})();export{et as LaboratoryEmailsComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/