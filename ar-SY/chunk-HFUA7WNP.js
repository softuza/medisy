import{c as h}from"./chunk-D7AZRYQ2.js";import{a as d,b as x,d as ee,f as te,k as oe,l as ie}from"./chunk-O5BA4X6Q.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as O}from"./chunk-6KCGB4R6.js";import{e as w,f as W,g as J,i as K,j as Q,k as Z}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as q}from"./chunk-5X4W32FI.js";import{g as E}from"./chunk-EUJFTM5S.js";import{a as I,b as D,d as z,e as B,g as Y}from"./chunk-V6ACGGWJ.js";import{l as j,p as U,q as X,r as k}from"./chunk-VBUQVK7Q.js";import{c as V}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as G,d as H}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as M,f as N,g as b,k as y,m as A,p as g,q as R,t as L}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as v,e as P}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as F,c as $}from"./chunk-B3RLTRYJ.js";import"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as m,Gb as S,Hb as p,M as _,Rb as C,Tb as c,gb as l,hb as a,kc as f,oa as u,ob as T,vb as n}from"./chunk-UDYUYOMJ.js";var re=(()=>{let r=class r extends w{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.phoneTypes=Object.keys(h).map(ae=>h[ae]),this.form=t.group({value:[i.laboratoryPhone?.value,[M.required]],description:[i.laboratoryPhone?.description,[]],phoneType:[i.laboratoryPhone?.phoneType??h.Work,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(a(O),a(R),a(I),a(D));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-laboratory-laboratory-phones-save"]],standalone:!0,features:[T,f],decls:7,vars:4,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;t="\u0627\u0644\u0646\u0645\u0637";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType","label",t,3,"source"],["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),S()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(2),n("source",o.phoneTypes),l(2),n("actions",o.actions));},dependencies:[L,y,N,b,A,g,Q,W,J,Y,B,k,j,X,U],encapsulation:2});let s=r;return s;})();var He=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=G.phones,this.dataSource=new ee(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns.push(d.uuid("id"),d.uuid("laboratoryId"),d.enum("phoneType").setContentFormat(i=>H(i.phoneType)),d.string("value"),d.date("createdAt",!1),d.date("updatedAt",!1),x.menu([E.edit(i=>this.openSaveComponent(i)),E.delete(i=>this.openPhoneDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPhoneDeleteComponent(e){this.dialog.open(K,{data:Z.delete(this.mlabService.laboratories.phones.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(V(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(a(z),a(O),a(v));},r.ɵcmp=u({type:r,selectors:[["sz-medisy-laboratory-laboratory-phones"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),c("changed",function(){return o.get();}),m(2,"button",2),c("click",function(){return o.openSaveComponent();}),m(3,"span"),C(4,3),S()()(),m(5,"sz-ui-table",4),c("update",function(){return o.get();}),S()),t&2&&(n("title",o.title)("subtitle",o.laboratory.name),l(),n("dataSource",o.dataSource),l(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[P,$,F,q,ie,oe,te],encapsulation:2});let s=r;return s;})();export{He as LaboratoryPhonesComponent};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/