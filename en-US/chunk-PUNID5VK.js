import{e as H,f as q,g as x,i as J,j as K,k as Q}from"./chunk-SO5WW7X3.js";import{s as Y,u as $,v as F}from"./chunk-BXKAZQ64.js";import{a as G,b as V,d as U,e as X,g as j}from"./chunk-VWPRYYV7.js";import"./chunk-UKCE2Q4Z.js";import{b as M}from"./chunk-BYYBYZIV.js";import{b as W,c as Z,d as ee,n as te,o as ie}from"./chunk-CQQPNAJZ.js";import{b as oe}from"./chunk-HEEN2CKG.js";import"./chunk-E7VUVWEF.js";import{b as k}from"./chunk-XJ54ZRFR.js";import{d as E,g,h as I,l as L,n as P,o as D,p as N,r as h,s as b,t as z,v as y}from"./chunk-X72CBQLP.js";import{a as S}from"./chunk-Y376CRI2.js";import"./chunk-SNR3XRMI.js";import{a as w}from"./chunk-PIKBUH2I.js";import{a as u}from"./chunk-3HWNDRT6.js";import{J as v,Va as B,n as T}from"./chunk-P44VDH7R.js";import{Ab as s,Bb as _,Cb as c,L as d,Mb as A,Pb as f,ea as O,eb as l,fb as n,ma as p,mb as C,na as R,pb as m}from"./chunk-3CXVAQY6.js";var ae=(()=>{let i=class i extends H{constructor(t,o,e,a){super(e),this.mlabService=t,this.fb=o,this.dialog=e,this.data=a,this.form=o.group({name:[a?.name,[E.required,E.minLength(1)]],description:[a?.description,[]],address:[a?.address,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};i.ɵfac=function(o){return new(o||i)(n(S),n(N),n(G),n(V));},i.ɵcmp=p({type:i,selectors:[["medisy-laboratories-save"]],features:[C],decls:7,vars:3,consts:()=>{let t;t="Name";let o;o="Description";let e;return e="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",o],["formControlName","address","label",e],[3,"actions"]];},template:function(o,e){o&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),_()(),c(6,"sz-ui-dialog-actions",5)),o&2&&(m("header",e.header),l(2),m("formGroup",e.form),l(4),m("actions",e.actions));},dependencies:[L,g,I,P,D,X,Y,$,q,x],encapsulation:2});let r=i;return r;})();var ne=(()=>{let i=class i{constructor(t,o){this.dialog=t,this.mlabService=o,this.dataSource=new W(w.pagedSorted("name")),this.dataSource.addRows(Z.default([M.nameHyperlink(e=>e.id),M.createdAt(),M.menu([oe.edit(e=>this.openSaveComponent(e))])])),this.get();}openSaveComponent(t){this.dialog.open(ae,{data:t}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openLaboratoryDeleteComponent(t){this.dialog.open(J,{data:Q.delete(this.mlabService.laboratories.delete(t.id),t)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.get(this.dataSource.filterModel).pipe(k(this.dataSource.indicator),d(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(n(U),n(S));},i.ɵcmp=p({type:i,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:()=>{let t;t="Laboratories";let o;return o="Add",[["start","",1,"sz-h5"],t,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),A(2,1),_()(),s(3,"sz-ui-table-filter",2),f("search",function(){return e.get();}),s(4,"button",3),f("click",function(){return e.openSaveComponent();}),s(5,"span"),A(6,4),_()()(),s(7,"sz-ui-table",5),f("update",function(){return e.get();}),_()),o&2&&(l(3),m("dataSource",e.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[z,te,ee,u],encapsulation:2});let r=i;return r;})();var se=[{path:"",component:ne}];var ro=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=R({type:i}),i.ɵinj=O({providers:[S],imports:[T,h,b,v.forChild(se),j,B,y,ie,F,u,K]});let r=i;return r;})();export{ro as LaboratoriesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/