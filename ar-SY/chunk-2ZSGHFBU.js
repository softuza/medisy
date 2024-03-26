import{a as m,b as ie,d as re,f as ne,i as ae,j as se}from"./chunk-56RI3JIQ.js";import"./chunk-3VH4SKJI.js";import"./chunk-PGGIRJCC.js";import{a as u}from"./chunk-IY2QXOH2.js";import{e as W,f as Z,g as ee,i as te,j as g,k as oe}from"./chunk-EF2KU3MF.js";import"./chunk-RWIHGCFX.js";import"./chunk-YYI2KTIZ.js";import{b as C}from"./chunk-BFUKSRR4.js";import{g as h}from"./chunk-RAWQ4NAU.js";import{a as P,b as Y,d as G,e as j,g as M}from"./chunk-O4MIBT3U.js";import{o as Q,s as x,u as J,v as K}from"./chunk-QETJAZV7.js";import{c as H}from"./chunk-XGOPNFX6.js";import"./chunk-4PE74OIY.js";import"./chunk-S734PXWV.js";import{c as q}from"./chunk-VKLUJQ6V.js";import{i as X}from"./chunk-ZUQ55FEV.js";import{d as T,f as L,g as I,k as D,m as b,p as z,q as V,s as F,t as E}from"./chunk-AZ35PAEP.js";import"./chunk-7GKLQGBB.js";import{c as B,e as U}from"./chunk-XPDLU2SJ.js";import"./chunk-4GDGVDQ6.js";import{a as k,c as w}from"./chunk-YUBOPGWF.js";import{ha as $}from"./chunk-BE3RRH45.js";import"./chunk-ZTPR7VOL.js";import{Bb as a,Lb as d,Mb as c,Nb as p,Q as S,Xb as O,Yb as f,gb as l,hb as s,na as _,nc as v,oa as R,oc as y,sb as N,za as A}from"./chunk-3ZQQMLH6.js";var le=(()=>{let o=class o extends W{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=e.group({description:[r?.description,[T.maxLength(4096)]],testTypeId:[r?.testTypeId,[T.required]],unitId:[r?.unitId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(u),s(V),s(P),s(Y));},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[v([]),N,y],decls:7,vars:5,consts:()=>{let t;t="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let e;e="\u0648\u0627\u062D\u062F\u0629";let i;return i="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","unitId","label",e,3,"source"],["formControlName","description","label",i],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),c()(),p(6,"sz-ui-dialog-actions",5)),e&2&&(a("header",i.header),l(2),a("formGroup",i.form),l(),a("source",i.testTypes),l(),a("source",i.units),l(2),a("actions",i.actions));},dependencies:[E,D,L,I,b,z,M,j,X,Q,g,Z,ee,K,J,x],encapsulation:2});let n=o;return n;})();var de=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.router=i,this.title=q.referenceValues,this.dataSource=new re(),this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("testTypeId"),m.uuid("unitId"),m.hyperlink("testType.name",r=>this.router.navigate([`/mlab/reference-values/${r.id}`])),m.string("unit").setValueGetter(r=>r.unit?.symbol),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),ie.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(t){this.dialog.open(te,{data:oe.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(s(G),s(u),s(B));},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(p(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),d(2,"button",2),f("click",function(){return i.openSaveComponent();}),d(3,"span"),O(4,3),c()()(),d(5,"sz-ui-table",4),f("update",function(){return i.get();}),c()),e&2&&(a("title",i.title),l(),a("dataSource",i.dataSource),l(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,C,ae,ne],encapsulation:2});let n=o;return n;})();var tt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=R({type:o}),o.ɵinj=A({providers:[u],imports:[F,E,U.forChild([{path:"",component:de}]),M,$,w,C,se,g]});let n=o;return n;})();export{tt as ReferenceValuesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/