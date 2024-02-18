import{a as K,c as Q,e as W,g as Z,j as x,k as ee,l as d}from"./chunk-34MSZMSB.js";import"./chunk-6DXJR33O.js";import"./chunk-DI33WAJD.js";import{a as f}from"./chunk-UUIAGLIW.js";import{e as U,f as V,g as q,i as H,j as X,k as J}from"./chunk-JH67BC54.js";import"./chunk-DIVK5N2T.js";import{b as w}from"./chunk-WN7LVT7X.js";import{f as h}from"./chunk-MWQCS4K5.js";import{a as j,b as B,d as G,e as k,g as $}from"./chunk-NAVTPQ6X.js";import{x as Y}from"./chunk-OWPLOJQP.js";import{Ca as L,J as A,N,d as M,f as b,g as C,k as E,m as I,p as D,q as z,t as P,za as R}from"./chunk-YSD3E7UX.js";import"./chunk-QYJYVPVW.js";import{Ea as F,Ga as O}from"./chunk-NQOK3G2M.js";import{Fb as m,Gb as c,Hb as l,M as u,Rb as v,Tb as T,gb as p,hb as a,hc as g,kc as y,oa as S,ob as _,vb as s}from"./chunk-XEAZENSO.js";var te=(()=>{let o=class o extends U{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[M.required]]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(f),a(z),a(j),a(B));},o.ɵcmp=S({type:o,selectors:[["medisy-test-type-specimen-types-save"]],standalone:!0,features:[g([]),_,y],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId",3,"source"],[3,"actions"]],template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2),c()(),l(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",i.header),p(2),s("formGroup",i.form),p(),s("source",i.specimenTypes),p(),s("actions",i.actions));},dependencies:[P,E,b,C,I,D,$,k,Z,X,V,q,Y],encapsulation:2});let n=o;return n;})();var Ye=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=L.specimenTypes,this.dataSource=new Q(),this.testType=this.route.snapshot.data.testType,this.dataSource.fields.push(d.uuid("id"),d.uuid("specimenTypeId"),d.uuid("testTypeId"),d.string("specimenType.name"),d.date("createdAt",!1),d.date("updatedAt",!1),K.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testType.id,this.dataSource.buildRequest()).pipe(R(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(G),a(f),a(A));},o.ɵcmp=S({type:o,selectors:[["medisy-laboratory-test-type-specimen-types"]],standalone:!0,features:[y],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(l(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),T("changed",function(){return i.get();}),m(2,"button",2),T("click",function(){return i.openSaveComponent();}),m(3,"span"),v(4,3),c()()(),m(5,"sz-ui-table",4),T("update",function(){return i.get();}),c()),t&2&&(s("title",i.title)("subtitle",i.testType.name),p(),s("dataSource",i.dataSource),p(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[N,O,F,ee,x,W,w],encapsulation:2});let n=o;return n;})();export{Ye as TestTypeSpecimenTypesComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/