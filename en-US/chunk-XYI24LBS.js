import{a as O}from"./chunk-WNTJDLC5.js";import{a as x,c as ee,e as te,j as oe,k as ie,l as d}from"./chunk-DVLFNPXE.js";import"./chunk-GPY5KFVB.js";import"./chunk-N4PGQPUM.js";import{a as E}from"./chunk-NYMMO734.js";import{e as H,f as J,g as K,i as Q,j as W,k as Z}from"./chunk-5KCGOFE6.js";import"./chunk-7CVWEX57.js";import{b as w}from"./chunk-ZCWLIVXY.js";import{f as M}from"./chunk-5WTG7ASM.js";import{a as j,b as U,d as X,e as k,g as q}from"./chunk-DP3KI4RQ.js";import{A as G,v as B,y as $,z as V}from"./chunk-XWTEPPU5.js";import{Ca as F,Da as Y,J as h,N as v,d as A,f as b,g as P,k as y,m as R,p as g,q as L,t as N,za as z}from"./chunk-5FPIMWAZ.js";import"./chunk-QYJYVPVW.js";import{Ea as I,Ga as D}from"./chunk-NQOK3G2M.js";import{Fb as m,Gb as p,Hb as _,M as S,Rb as C,Tb as c,gb as s,hb as r,kc as f,oa as u,ob as T,vb as n}from"./chunk-XEAZENSO.js";var ae=(()=>{let a=class a extends H{constructor(e,t,o,i){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=i,this.emailTypes=Object.keys(O).map(re=>O[re]),this.form=t.group({value:[i.laboratoryEmail?.value,[A.required,A.email]],description:[i.laboratoryEmail?.description,[]],emailType:[i.laboratoryEmail?.emailType??O.Public,[A.required]]});}submit(){this.IsValid()&&(this.data.laboratoryEmail?this.save(this.mlabService.laboratories.emails.update(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value)):this.save(this.mlabService.laboratories.emails.create(this.data.laboratoryId,this.form.value)));}};a.ɵfac=function(t){return new(t||a)(r(E),r(L),r(j),r(U));},a.ɵcmp=u({type:a,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[T,f],decls:7,vars:5,consts:()=>{let e;e="Email";let t;t="Type";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","emailType","label",t,3,"source","localizedValue"],["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),p()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",o.header),s(2),n("formGroup",o.form),s(2),n("source",o.emailTypes)("localizedValue",!0),s(2),n("actions",o.actions));},dependencies:[N,y,b,P,R,g,W,J,K,q,k,G,B,V,$],encapsulation:2});let l=a;return l;})();var Ue=(()=>{let a=class a{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=F.emails,this.dataSource=new ee("createdAt"),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(d.uuid("id"),d.uuid("laboratoryId"),d.enum("emailType").setContentFormat(i=>Y(i.emailType)),d.string("value"),d.date("createdAt",!1),d.date("updatedAt",!1),x.menu([M.edit(i=>this.openSaveComponent(i)),M.delete(i=>this.openEmailDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openEmailDeleteComponent(e){this.dialog.open(Q,{data:Z.delete(this.mlabService.laboratories.emails.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.emails.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(z(this.dataSource.indicator)).pipe(S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};a.ɵfac=function(t){return new(t||a)(r(X),r(E),r(h));},a.ɵcmp=u({type:a,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(_(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),c("changed",function(){return o.get();}),m(2,"button",2),c("click",function(){return o.openSaveComponent();}),m(3,"span"),C(4,3),p()()(),m(5,"sz-ui-table",4),c("update",function(){return o.get();}),p()),t&2&&(n("title",o.title)("subtitle",o.laboratory.name),s(),n("dataSource",o.dataSource),s(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[v,D,I,w,ie,oe,te],encapsulation:2});let l=a;return l;})();export{Ue as LaboratoryEmailsComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/