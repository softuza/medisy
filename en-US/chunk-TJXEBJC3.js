import{e as k,f as H,g as q,i as x,j as J,k as K}from"./chunk-WR4GG44T.js";import{q as B,s as Y,t as $}from"./chunk-XIKUJ2RB.js";import{a as F,b as G,d as V,e as U,g as X}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{b as M}from"./chunk-SYJ5COXL.js";import{b as Q,c as W,d as Z,n as te,o as oe}from"./chunk-X7AK5RKT.js";import{b as ee}from"./chunk-V4HCCL3Z.js";import"./chunk-A4OPY5TW.js";import{b as w}from"./chunk-37GZDSHT.js";import"./chunk-FJNI2GB6.js";import{d as E,g as C,h as g,l as I,n as L,o as P,p as D,r as N,s as h,t as v,v as z}from"./chunk-FEFUQJM2.js";import{a as S}from"./chunk-ESAZXDOZ.js";import"./chunk-UPQBKJGY.js";import{a as j}from"./chunk-NW5OYJVI.js";import{a as u}from"./chunk-CVLFG5YI.js";import{H as b,Ta as y}from"./chunk-RQMADBIK.js";import{Ab as c,Kb as A,L as d,Mb as f,cb as l,da as O,db as n,kb as T,la as p,ma as R,nb as m,yb as s,zb as _}from"./chunk-3PI2VV3G.js";var re=(()=>{let i=class i extends k{constructor(o,t,e,a){super(e),this.mlabService=o,this.fb=t,this.dialog=e,this.data=a,this.form=t.group({name:[a?.name,[E.required,E.minLength(1)]],description:[a?.description,[]],address:[a?.address,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(S),n(D),n(F),n(G));},i.ɵcmp=p({type:i,selectors:[["medisy-laboratories-save"]],features:[T],decls:7,vars:3,consts:()=>{let o;o="Name";let t;t="Description";let e;return e="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","address","label",e],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),_()(),c(6,"sz-ui-dialog-actions",5)),t&2&&(m("header",e.header),l(2),m("formGroup",e.form),l(4),m("actions",e.actions));},dependencies:[I,C,g,L,P,U,B,Y,H,q],encapsulation:2});let r=i;return r;})();var ae=(()=>{let i=class i{constructor(o,t){this.dialog=o,this.mlabService=t,this.dataSource=new Q(j.pagedSorted("name")),this.dataSource.addRows(W.default([M.nameHyperlink(e=>e.id),M.createdAt(),M.menu([ee.edit(e=>this.openSaveComponent(e))])])),this.get();}openSaveComponent(o){this.dialog.open(re,{data:o}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e);});}openLaboratoryDeleteComponent(o){this.dialog.open(x,{data:K.delete(this.mlabService.laboratories.delete(o.id),o)}).afterClosed().pipe(d(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),d(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(n(V),n(S));},i.ɵcmp=p({type:i,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:()=>{let o;o="Laboratories";let t;return t="Add",[["start","",1,"sz-h5"],o,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,e){t&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),A(2,1),_()(),s(3,"sz-ui-table-filter",2),f("search",function(){return e.get();}),s(4,"button",3),f("click",function(){return e.openSaveComponent();}),s(5,"span"),A(6,4),_()()(),s(7,"sz-ui-table",5),f("update",function(){return e.get();}),_()),t&2&&(l(3),m("dataSource",e.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[v,te,Z,u],encapsulation:2});let r=i;return r;})();var ne=[{path:"",component:ae}];var ot=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=R({type:i}),i.ɵinj=O({providers:[S],imports:[N,h,b.forChild(ne),X,y,z,oe,$,u,J]});let r=i;return r;})();export{ot as LaboratoriesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/