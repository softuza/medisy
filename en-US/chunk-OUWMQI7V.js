import{a as h}from"./chunk-6KCGB4R6.js";import{e as B,f as Y,g as z,j as y}from"./chunk-EZC2CU7X.js";import{a as T,b as C,e as D,g as L}from"./chunk-V6ACGGWJ.js";import{l as N,q as I,r as v}from"./chunk-VBUQVK7Q.js";import{d as _,f as c,g as u,k as R,m as E,p as M,q as O,t as g}from"./chunk-H52WVCBC.js";import{Fb as A,Gb as f,Hb as s,gb as m,hb as n,kc as p,oa as d,ob as S,vb as a}from"./chunk-UDYUYOMJ.js";var U=(()=>{let t=class t extends B{constructor(r,e,i,o){super(i),this.mlabService=r,this.fb=e,this.dialog=i,this.data=o,this.form=e.group({name:[o?.name,[_.required,_.minLength(1)]],description:[o?.description,[]],address:[o?.address,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(n(h),n(O),n(T),n(C));},t.ɵcmp=d({type:t,selectors:[["sz-medisy-laboratory-laboratory-save"]],standalone:!0,features:[S,p],decls:7,vars:3,consts:()=>{let r;r="Name";let e;e="Description";let i;return i="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","address","label",i],[3,"actions"]];},template:function(e,i){e&1&&(s(0,"sz-ui-dialog-header",0),A(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),f()(),s(6,"sz-ui-dialog-actions",5)),e&2&&(a("header",i.header),m(2),a("formGroup",i.form),m(4),a("actions",i.actions));},dependencies:[g,R,c,u,E,M,L,D,y,Y,z,v,N,I],encapsulation:2});let l=t;return l;})();export{U as a};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/