import{a as ie}from"./chunk-YEXO2EB4.js";import{a as te,b as oe}from"./chunk-IUEVFWDV.js";import{a as K,c as Q,e as Z,j as x,k as ee,l as m}from"./chunk-MDPJZTYR.js";import"./chunk-TCXRPYGI.js";import"./chunk-CUIKVH6O.js";import{a as h}from"./chunk-B6BGJAKF.js";import{c as U,h as X,i as k,j as q,l as w,m as W,n as J}from"./chunk-UVKODSF3.js";import"./chunk-LB4M65MR.js";import{b as j}from"./chunk-I3RE2UAN.js";import{a as H,g as P}from"./chunk-E2YN42QZ.js";import{a as Y,b as B,d as $,e as G,g as V}from"./chunk-2OM43JW4.js";import{A as F,v as z,z as I}from"./chunk-PSHVV3L5.js";import{J as R,N as v,d as O,f as T,g as b,k as C,m as E,p as y,q as N,t as g}from"./chunk-7YDZJT25.js";import"./chunk-QYJYVPVW.js";import{Ea as L,Ga as D}from"./chunk-NQOK3G2M.js";import{Fb as l,Gb as u,Hb as p,M as _,Rb as M,Tb as c,gb as d,hb as a,kc as f,oa as S,ob as A,vb as n}from"./chunk-XEAZENSO.js";var re=(()=>{let i=class i extends X{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.form=t.group({value:[r.laboratoryPhone?.value,[O.required]],description:[r.laboratoryPhone?.description,[]],phoneType:[r.laboratoryPhone?.phoneType??te.Work,[O.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(a(h),a(N),a(Y),a(B));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[A,f],decls:7,vars:3,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType"],["formControlName","description","label",t],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-phone-type",3)(5,"sz-ui-form-field-textarea",4),u()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),d(2),n("formGroup",o.form),d(4),n("actions",o.actions));},dependencies:[g,C,T,b,E,y,W,k,q,V,G,F,z,I,ie],encapsulation:2});let s=i;return s;})();var Ue=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=H.phones,this.dataSource=new Q(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(m.uuid("id"),m.uuid("laboratoryId"),m.enum("phoneType").setContentFormat(r=>oe(r.phoneType)),m.string("value"),m.date("createdAt",!1),m.date("updatedAt",!1),K.menu([P.edit(r=>this.openSaveComponent(r)),P.delete(r=>this.openPhoneDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPhoneDeleteComponent(e){this.dialog.open(w,{data:J.delete(this.mlabService.laboratories.phones.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(U(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(a($),a(h),a(R));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),c("changed",function(){return o.get();}),l(2,"button",2),c("click",function(){return o.openSaveComponent();}),l(3,"span"),M(4,3),u()()(),l(5,"sz-ui-table",4),c("update",function(){return o.get();}),u()),t&2&&(n("title",o.title)("subtitle",o.laboratory.name),d(),n("dataSource",o.dataSource),d(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[v,D,L,j,ee,x,Z],encapsulation:2});let s=i;return s;})();export{Ue as LaboratoryPhonesComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/