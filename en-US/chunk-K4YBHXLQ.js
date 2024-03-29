import{a as l,b as ie,d as oe,f as re,i as ne,j as ae}from"./chunk-TI3KPOR7.js";import"./chunk-6476LBLO.js";import"./chunk-PT75MKNF.js";import{a as S}from"./chunk-Q2N4ZM5T.js";import{e as W,f as Z,g as x,i as ee,j as C,k as te}from"./chunk-OPST3HSR.js";import"./chunk-6HOMNJG3.js";import"./chunk-QUJGTYPR.js";import{b as M}from"./chunk-EPNV7HRZ.js";import{j as g}from"./chunk-JHC5R5G3.js";import{a as $,b as P,d as Y,e as G,g as E}from"./chunk-5MAY3I4F.js";import{o as q,s as Q,u as J,v as K}from"./chunk-RZLFWLWK.js";import{c as w}from"./chunk-4GL34ATX.js";import"./chunk-VQDUMFVZ.js";import"./chunk-D5DPYT77.js";import{c as H}from"./chunk-OPRLBPJZ.js";import{i as j}from"./chunk-C77Q6E22.js";import{d as T,f as v,g as I,k as L,m as D,p as b,q as z,s as V,t as f}from"./chunk-ZBCFQZ6O.js";import"./chunk-GMGFC4G7.js";import{c as F,e as U}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as X,c as k}from"./chunk-FBMLFETS.js";import{ha as B}from"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as a,Lb as d,Mb as p,Nb as c,Xb as A,Yb as u,gb as m,hb as s,na as _,nc as O,oa as h,oc as N,sb as y,za as R}from"./chunk-75X3YXCS.js";var le=(()=>{let i=class i extends W{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.testTypeUnits=null,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=t.group({description:[r?.description,[T.maxLength(4096)]],testTypeId:[r?.testTypeId,[T.required]],unitId:[r?.unitId,[]]}),this.testTypeSelected(r?.testTypeId);}testTypeSelected(e){e&&(this.testTypeUnits=this.mlabService.testTypes.units.getAll(e,{orderBy:["unit.name"]}));}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(S),s(z),s($),s(P));},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[O([]),y,N],decls:7,vars:5,consts:()=>{let e;e="Test Type";let t;t="Unit";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","szOptionSelected"],["formControlName","unitId","label",t,3,"source"],["formControlName","description","label",o],[3,"actions"]];},template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1)(3,"sz-ui-form-field-select",2),u("szOptionSelected",function(de){return o.testTypeSelected(de);}),p(),c(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),p()(),c(6,"sz-ui-dialog-actions",5)),t&2&&(a("header",o.header),m(2),a("formGroup",o.form),m(),a("source",o.testTypes),m(),a("source",o.testTypeUnits),m(2),a("actions",o.actions));},dependencies:[f,L,v,I,D,b,E,G,j,q,C,Z,x,K,J,Q],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.router=o,this.title=H.referenceValues,this.dataSource=new oe(),this.dataSource.columnDefs.push(l.uuid("id"),l.uuid("testTypeId"),l.uuid("unitId"),l.hyperlink("testType.name",r=>this.router.navigate([`/mlab/reference-values/${r.id}`])),l.string("unit").setValueGetter(r=>r.unit?.symbol),l.string("description"),l.date("createdAt",!1),l.date("updatedAt",!1),ie.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueDeleteComponent(e){this.dialog.open(ee,{data:te.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(w(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(Y),s(S),s(F));},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(c(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),u("changed",function(){return o.get();}),d(2,"button",2),u("click",function(){return o.openSaveComponent();}),d(3,"span"),A(4,3),p()()(),d(5,"sz-ui-table",4),u("update",function(){return o.get();}),p()),t&2&&(a("title",o.title),m(),a("dataSource",o.dataSource),m(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[X,M,ne,re],encapsulation:2});let n=i;return n;})();var et=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[S],imports:[V,f,U.forChild([{path:"",component:me}]),E,B,k,M,ae,C]});let n=i;return n;})();export{et as ReferenceValuesModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/