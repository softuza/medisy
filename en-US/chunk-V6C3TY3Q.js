import{a as te,b as ie,c as oe}from"./chunk-KPGDW6KJ.js";import{a as Q,c as W,e as Z,q as x,r as ee,s}from"./chunk-QPBSIFHN.js";import"./chunk-OLH6GLAT.js";import{a as j}from"./chunk-63BDPR5Z.js";import{a as A}from"./chunk-3HOMBLD6.js";import{a as X,h as k,i as q,j as w,l as H,m as J,n as K}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as U}from"./chunk-AZIM6N3H.js";import{g as M}from"./chunk-F2NCOJMX.js";import{a as Y,b as B,d as $,e as G,g as V}from"./chunk-GX7FEJ3W.js";import{A as F,v as D,z}from"./chunk-HN3QCICR.js";import{J as P,N as v,d as E,f as b,g as y,k as C,m as h,p as g,q as R,t as L}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as N,Ga as I}from"./chunk-ILHRA673.js";import{Eb as m,Fb as _,Gb as p,M as u,Qb as T,Sb as c,fb as d,gb as r,jc as f,na as S,nb as O,ub as n}from"./chunk-ORGLCS6N.js";var ae=(()=>{let o=class o extends k{constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.form=t.group({value:[a.laboratoryEmail?.value,[E.required,E.email]],description:[a.laboratoryEmail?.description,[]],emailType:[a.laboratoryEmail?.emailType??te.Public,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryEmail?this.save(this.mlabService.laboratories.emails.update(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value)):this.save(this.mlabService.laboratories.emails.create(this.data.laboratoryId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(A),r(R),r(Y),r(B));},o.ɵcmp=S({type:o,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[O,f],decls:7,vars:3,consts:()=>{let e;e="Email";let t;return t="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","emailType"],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-email-type",3)(5,"sz-ui-form-field-textarea",4),_()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),d(2),n("formGroup",i.form),d(4),n("actions",i.actions));},dependencies:[L,C,b,y,h,g,J,q,w,V,G,F,D,z,oe],encapsulation:2});let l=o;return l;})();var Xe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=j.emails,this.dataSource=new W("createdAt"),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(s.uuid("id"),s.uuid("laboratoryId"),s.string("emailType").setFormatFn(a=>ie(a.emailType)),s.string("value"),s.date("createdAt",!1),s.date("updatedAt",!1),Q.menu([M.edit(a=>this.openSaveComponent(a)),M.delete(a=>this.openEmailDeleteComponent(a))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:e}}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openEmailDeleteComponent(e){this.dialog.open(H,{data:K.delete(this.mlabService.laboratories.emails.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.emails.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(X(this.dataSource.indicator)).pipe(u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r($),r(A),r(P));},o.ɵcmp=S({type:o,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(p(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),m(2,"button",2),c("click",function(){return i.openSaveComponent();}),m(3,"span"),T(4,3),_()()(),m(5,"sz-ui-table",4),c("update",function(){return i.get();}),_()),t&2&&(n("title",i.title)("subtitle",i.laboratory.name),d(),n("dataSource",i.dataSource),d(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[v,I,N,U,ee,x,Z],encapsulation:2});let l=o;return l;})();export{Xe as LaboratoryEmailsComponent};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/