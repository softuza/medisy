import{a as re}from"./chunk-3GBMOYMW.js";import"./chunk-ISYIHSBV.js";import{a as W,c as Z,e as ee,f as te,g as O,j as oe,k as ie,l as a}from"./chunk-L43EK5YJ.js";import"./chunk-DSE2GSX7.js";import"./chunk-K2XOOBCU.js";import{a as E}from"./chunk-R4S6SLRU.js";import{e as w,f as H,g as x,i as J,j as K,k as Q}from"./chunk-XT4WDJL3.js";import"./chunk-TFYVSOED.js";import{b as q}from"./chunk-V2CHWC5A.js";import{a as A,g as M}from"./chunk-OBKQZSX2.js";import{a as G,b as k,d as U,e as j,g as X}from"./chunk-BICV37VP.js";import{v as V}from"./chunk-3D6BRKHU.js";import{J as Y,N as z,d as u,f as R,g as N,k as g,m as v,p as L,q as I,t as D,za as $}from"./chunk-CN6PMKF6.js";import"./chunk-QYJYVPVW.js";import{Ea as F,Ga as B}from"./chunk-NQOK3G2M.js";import{Fb as d,Gb as _,Hb as m,M as S,Rb as T,Tb as f,gb as p,hb as s,kc as b,lc as C,mc as h,oa as c,ob as P,vb as l}from"./chunk-XEAZENSO.js";var pe=()=>[],_e=n=>[n],ae=(()=>{let r=class r extends w{constructor(e,t,i,o){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=o,this.form=t.group({enabled:[o.laboratoryTestType?.enabled??!0,[u.required]],price:[o.laboratoryTestType?.price??0,[u.required]],isFavorite:[o.laboratoryTestType?.isFavorite??!1,[u.required]],testTypeId:[o.laboratoryTestType?.testTypeId,[u.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(s(E),s(I),s(G),s(k));},r.ɵcmp=c({type:r,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[P,b],decls:10,vars:7,consts:()=>{let e;e="Price";let t;t="Favorite";let i;return i="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId",3,"excludeLaboratoryIds"],["formControlName","price","label",e],["formControlName","isFavorite"],t,["formControlName","enabled"],i,[3,"actions"]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-test-type-select",2)(4,"sz-ui-form-field-input",3),d(5,"mat-checkbox",4),T(6,5),_(),d(7,"mat-checkbox",6),T(8,7),_()()(),m(9,"sz-ui-dialog-actions",8)),t&2&&(l("header",i.header),p(2),l("formGroup",i.form),p(),l("excludeLaboratoryIds",i.data.laboratoryTestType?C(4,pe):h(5,_e,i.data.laboratoryId)),p(6),l("actions",i.actions));},dependencies:[D,g,R,N,v,L,K,H,x,X,j,O,te,re,V],encapsulation:2});let n=r;return n;})();var we=(()=>{let r=class r{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=A.testTypes,this.dataSource=new Z(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(a.uuid("id"),a.uuid("laboratoryId"),a.uuid("testTypeId"),a.string("testType.name"),a.number("price"),a.date("createdAt",!1),a.date("updatedAt",!1),a.boolean("isFavorite",(o,y)=>{o.isFavorite=y,this.updateItem(o);}).setDisplayName(A.favorite),a.boolean("enabled",(o,y)=>{o.enabled=y,this.mlabService.laboratories.testTypes.update(o.laboratoryId,o.id,o).pipe(S(1)).subscribe(ne=>{o=ne;});}),W.menu([M.edit(o=>this.openSaveComponent(o)),M.delete(o=>this.openLaboratoryTestTypeDeleteComponent(o))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(J,{data:Q.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator)).pipe(S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(s(U),s(E),s(Y));},r.ɵcmp=c({type:r,selectors:[["medisy-laboratory-test-types"]],standalone:!0,features:[b],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(m(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),d(2,"button",2),f("click",function(){return i.openSaveComponent();}),d(3,"span"),T(4,3),_()()(),d(5,"sz-ui-table",4),f("update",function(){return i.get();}),_()),t&2&&(l("title",i.title)("subtitle",i.laboratory.name),p(),l("dataSource",i.dataSource),p(4),l("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[z,q,ie,oe,ee,O,B,F],encapsulation:2});let n=r;return n;})();export{we as LaboratoryTestTypesComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/