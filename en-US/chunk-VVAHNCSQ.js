import{h as v,i as h,j as z,m as V}from"./chunk-UJAW327Y.js";import{a as P,b as L,e as N,g as I}from"./chunk-JW5GSDNP.js";import{D as T,E as C,z as g}from"./chunk-M2QIPGOP.js";import{d as l,g as p,h as M,l as c,n as u,o as R,p as O,s as D}from"./chunk-DNMCT3KT.js";import{a as Y}from"./chunk-TJ6J6WZC.js";import{Bb as A,Cb as E,Db as s,ac as f,cb as m,db as n,kb as d,la as S,nb as a}from"./chunk-3QIFGVJ6.js";var Q=(()=>{let t=class t extends v{constructor(r,e,i,o){super(i),this.mlabService=r,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({name:[o?.name,[l.required,l.minLength(1)]],description:[o?.description,[]],address:[o?.address,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(n(Y),n(O),n(P),n(L));},t.ɵcmp=S({type:t,selectors:[["medisy-laboratories-save"]],standalone:!0,features:[d,f],decls:7,vars:3,consts:()=>{let r;r="Name";let e;e="Description";let i;return i="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","address","label",i],[3,"actions"]];},template:function(e,i){e&1&&(s(0,"sz-ui-dialog-header",0),A(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),E()(),s(6,"sz-ui-dialog-actions",5)),e&2&&(a("header",i.header),m(2),a("formGroup",i.form),m(4),a("actions",i.actions));},dependencies:[D,c,p,M,u,R,I,N,V,h,z,C,g,T],encapsulation:2});let _=t;return _;})();export{Q as a};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/