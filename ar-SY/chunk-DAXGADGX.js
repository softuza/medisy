import{a as P}from"./chunk-DR6MMCIB.js";import{a as re}from"./chunk-IDDVMHHY.js";import"./chunk-RCF34KUN.js";import"./chunk-XKQSJUZ3.js";import"./chunk-VU4DCVQ3.js";import{a as Y}from"./chunk-IRYXR6JI.js";import{b as Z,c as x,e as ee,g as te,s as ie,t as oe}from"./chunk-ECNTNMPY.js";import{c as H,g as J,h as K,i as N,j as R,l as Q,m as L,n as W}from"./chunk-TXP6BBJB.js";import{a as T,b as O,d as X,e as v,g as D}from"./chunk-BVSJJDLC.js";import{C as U,D as w,y as k}from"./chunk-EBF4GIWM.js";import{d as M,g as E,h as C,l as A,n as b,o as g,p as y,s as h}from"./chunk-2OZGA6L4.js";import{a as z}from"./chunk-KMOC5U6F.js";import{a as I}from"./chunk-Y3MYDPN3.js";import{b as q}from"./chunk-CSREFB7T.js";import"./chunk-4KZUDT5R.js";import{a as G,e as $}from"./chunk-IMYK7VY7.js";import{i as F}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as V,Ra as j}from"./chunk-KZIHA7KF.js";import{Bb as d,Cb as p,Db as m,L as f,Nb as B,Rb as _,cb as s,cc as c,db as r,kb as S,la as u,nb as n}from"./chunk-6MBKLWBV.js";var le=(()=>{let o=class o extends J{constructor(t,e,i){super(e),this.fb=t,this.dialog=e,this.data=i,this.form=t.group({emailType:[i.emailType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(r(y),r(T),r(O));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails-filter"]],standalone:!0,features:[S,c],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-email-type",2),p()(),m(4,"sz-ui-dialog-actions",3)),e&2&&(n("header",i.header),s(2),n("formGroup",i.form),s(2),n("actions",i.actions));},dependencies:[h,A,E,C,b,g,L,N,R,D,v,P],encapsulation:2});let l=o;return l;})();var me=(()=>{let o=class o extends K{constructor(t,e,i,a){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=a,this.form=e.group({value:[a.laboratoryEmail?.value,[M.required,M.email]],description:[a.laboratoryEmail?.description,[]],emailType:[a.laboratoryEmail?.emailType??re.Public,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryEmail?this.save(this.mlabService.laboratories.emails.update(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value)):this.save(this.mlabService.laboratories.emails.create(this.data.laboratoryId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(r(I),r(y),r(T),r(O));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[S,c],decls:7,vars:3,consts:()=>{let t;t="\u0627\u0644\u0648\u0635\u0641";let e;return e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",t],["formControlName","value","label",e],["formControlName","emailType"],[3,"actions"]];},template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),p()(),m(6,"sz-ui-dialog-actions",5)),e&2&&(n("header",i.header),s(2),n("formGroup",i.form),s(4),n("actions",i.actions));},dependencies:[h,A,E,C,b,g,L,N,R,D,v,w,k,U,P],encapsulation:2});let l=o;return l;})();var Ze=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.route=i,this.title=z.emails,this.dataSource=new ee("createdAt"),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(x.default([Z.text("value",z.email),Y.createdAt(),Y.menu([F.edit(a=>{this.openSaveComponent(a);}),F.delete(a=>{this.openEmailDeleteComponent(a);})])])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:t}}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(le,{data:this.dataSource.filter}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.updateFilter(t),this.get();});}openEmailDeleteComponent(t){this.dialog.open(Q,{data:W.delete(this.mlabService.laboratories.emails.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.emails.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(H(this.dataSource.indicator)).pipe(f(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(r(X),r(I),r(G));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[c],decls:6,vars:5,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search","filterClicked"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(m(0,"sz-ui-header-info",0),d(1,"sz-ui-table-filter",1),_("search",function(){return i.get();})("filterClicked",function(){return i.openFilterComponent();}),d(2,"button",2),_("click",function(){return i.openSaveComponent();}),d(3,"span"),B(4,3),p()()(),d(5,"sz-ui-table",4),_("update",function(){return i.get();}),p()),e&2&&(n("title",i.title)("subTitle",i.laboratory.name),s(1),n("filter",i.dataSource.filter),s(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[$,j,V,q,oe,ie,te],encapsulation:2});let l=o;return l;})();export{Ze as LaboratoryEmailsComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/