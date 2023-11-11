import{a as P}from"./chunk-SZQX6EFF.js";import{d as Q,e as W,f as I,g as R,i as Z,j as L,k as ee}from"./chunk-VT3WYR67.js";import{s as X,u as k,v as q}from"./chunk-RQNRD2JQ.js";import"./chunk-3UYL57HA.js";import{a as h,b as y,d as H,e as D,g as N}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import{a as le}from"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import{b as Y}from"./chunk-M3UESULM.js";import{a as F,b as te,c as ie,d as oe,f as re,p as ae,q as ne}from"./chunk-PTJACGQS.js";import"./chunk-UNCYENX6.js";import{b as K}from"./chunk-VRISEVPV.js";import{d as M,g as E,h as A,l as C,n as O,o as T,p as g,s as b,t as w,v as U}from"./chunk-GJY7U5GZ.js";import{a as v}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as x}from"./chunk-PIKBUH2I.js";import{a as J}from"./chunk-QDC3ZTFW.js";import{I as G,L as V,M as j}from"./chunk-NC2N2FCX.js";import{Ab as m,Bb as d,Cb as p,L as S,Mb as z,Pb as f,Wb as B,Xb as $,ac as u,eb as s,fb as r,ma as _,mb as c,pb as l}from"./chunk-3CXVAQY6.js";var de=(()=>{let o=class o extends Q{constructor(i,e,t){super(e),this.fb=i,this.dialog=e,this.data=t,this.form=i.group({emailType:[t.emailType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(r(g),r(h),r(y));},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-emails-filter"]],standalone:!0,features:[c,u],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(e,t){e&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-email-type",2),d()(),p(4,"sz-ui-dialog-actions",3)),e&2&&(l("header",t.header),s(2),l("formGroup",t.form),s(2),l("actions",t.actions));},dependencies:[b,C,E,A,O,T,L,I,R,N,D,P],encapsulation:2});let n=o;return n;})();var pe=(()=>{let o=class o extends W{constructor(i,e,t,a){super(t),this.mlabService=i,this.fb=e,this.dialog=t,this.data=a,this.form=e.group({value:[a.laboratoryEmail?.value,[M.required,M.email]],description:[a.laboratoryEmail?.description,[]],emailType:[a.laboratoryEmail?.emailType??le.Public,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryEmail?this.save(this.mlabService.laboratories.emails.update(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value)):this.save(this.mlabService.laboratories.emails.create(this.data.laboratoryId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(r(v),r(g),r(h),r(y));},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[c,u],decls:7,vars:3,consts:()=>{let i;i="Description";let e;return e="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,t){e&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),d()(),p(6,"sz-ui-dialog-actions",5)),e&2&&(l("header",t.header),s(2),l("formGroup",t.form),s(4),l("actions",t.actions));},dependencies:[b,C,E,A,O,T,L,I,R,N,D,q,X,k,P],encapsulation:2});let n=o;return n;})();var et=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mlabService=e,this.route=t,this.dataSource=new ie(x.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(oe.default([te.text("value","Email"),Y.createdAt(),Y.menu([F.edit(a=>{this.openSaveComponent(a);}),F.delete(a=>{this.openEmailDeleteComponent(a);})])])),this.get();}openSaveComponent(i){this.dialog.open(pe,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:i}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open(de,{data:this.dataSource.filterModel}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openEmailDeleteComponent(i){this.dialog.open(Z,{data:ee.delete(this.mlabService.laboratories.emails.delete(i.laboratoryId,i.id),i)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.emails.get(this.laboratory.id,this.dataSource.filterModel).pipe(K(this.dataSource.indicator)).pipe(S(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(r(H),r(v),r(G));},o.ɵcmp=_({type:o,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[u],decls:11,vars:5,consts:()=>{let i;i="Emails";let e;return e="Add",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),z(3,2),d(),m(4,"a",3),B(5),d()()(),m(6,"sz-ui-table-filter",4),f("search",function(){return t.get();})("filter",function(){return t.openFilterComponent();}),m(7,"button",5),f("click",function(){return t.openSaveComponent();}),m(8,"span"),z(9,6),d()()(),m(10,"sz-ui-table",7),f("update",function(){return t.get();}),d()),e&2&&(s(5),$(t.laboratory.name),s(1),l("dataSource",t.dataSource),s(4),l("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[j,V,U,w,J,ne,ae,re],encapsulation:2});let n=o;return n;})();export{et as LaboratoryEmailsComponent};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/