import{c as h}from"./chunk-PGV7TNPH.js";import{a as m,b as x,d as ee,f as te,k as oe,l as ie}from"./chunk-ITIEW4R3.js";import"./chunk-VSVSVBNB.js";import"./chunk-RMIHOFED.js";import{a as M}from"./chunk-UJRSINNB.js";import{e as w,f as W,g as J,i as K,j as Q,k as Z}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as q}from"./chunk-SZPDKKKX.js";import{g as O}from"./chunk-T5LWAZSF.js";import{a as H,b as j,d as U,e as X,g as k}from"./chunk-7HHYVUIJ.js";import{t as $,x as Y,y as V,z as G}from"./chunk-PR23273C.js";import{Ba as B,Ca as F,J as P,N as I,d as E,f as T,g as b,k as y,m as g,p as A,q as L,t as v,ya as z}from"./chunk-MNBERY7T.js";import"./chunk-4PXWNT7N.js";import{Ea as D,Ga as R}from"./chunk-6NFGCLSN.js";import{Fb as d,Gb as S,Hb as p,M as _,Rb as N,Tb as c,gb as l,hb as a,kc as f,oa as u,ob as C,vb as n}from"./chunk-6OQDJKEQ.js";var re=(()=>{let r=class r extends w{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.phoneTypes=Object.keys(h).map(ae=>h[ae]),this.form=t.group({value:[i.laboratoryPhone?.value,[E.required]],description:[i.laboratoryPhone?.description,[]],phoneType:[i.laboratoryPhone?.phoneType??h.Work,[E.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(a(M),a(L),a(H),a(j));},r.ɵcmp=u({type:r,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[C,f],decls:7,vars:4,consts:()=>{let e;e="\u0627\u0644\u0631\u0642\u0645";let t;t="\u0627\u0644\u0646\u0645\u0637";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","phoneType","label",t,3,"source"],["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),S()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),l(2),n("formGroup",o.form),l(2),n("source",o.phoneTypes),l(2),n("actions",o.actions));},dependencies:[v,y,T,b,g,A,Q,W,J,k,X,G,$,V,Y],encapsulation:2});let s=r;return s;})();var He=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=B.phones,this.dataSource=new ee(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(m.uuid("id"),m.uuid("laboratoryId"),m.enum("phoneType").setContentFormat(i=>F(i.phoneType)),m.string("value"),m.date("createdAt",!1),m.date("updatedAt",!1),x.menu([O.edit(i=>this.openSaveComponent(i)),O.delete(i=>this.openPhoneDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPhoneDeleteComponent(e){this.dialog.open(K,{data:Z.delete(this.mlabService.laboratories.phones.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(z(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(a(U),a(M),a(P));},r.ɵcmp=u({type:r,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),c("changed",function(){return o.get();}),d(2,"button",2),c("click",function(){return o.openSaveComponent();}),d(3,"span"),N(4,3),S()()(),d(5,"sz-ui-table",4),c("update",function(){return o.get();}),S()),t&2&&(n("title",o.title)("subtitle",o.laboratory.name),l(),n("dataSource",o.dataSource),l(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[I,R,D,q,ie,oe,te],encapsulation:2});let s=r;return s;})();export{He as LaboratoryPhonesComponent};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/