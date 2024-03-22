import{a as m,b as ie,d as re,f as ne,i as ae,j as se}from"./chunk-RGXIKMKC.js";import"./chunk-VRCSACJH.js";import"./chunk-GU4WFXGT.js";import{a as u}from"./chunk-5SSCGDFC.js";import"./chunk-BNSJPKLO.js";import{f as W,g as Z,h as ee,j as te,k as g,l as oe}from"./chunk-55JERGAK.js";import"./chunk-YYI2KTIZ.js";import{b as C}from"./chunk-VSNS76N3.js";import{j as h}from"./chunk-RMS73U75.js";import{a as P,b as Y,d as G,e as j,g as M}from"./chunk-GYDCMUMI.js";import{o as Q,s as x,u as J,v as K}from"./chunk-VAFOXX63.js";import{c as H}from"./chunk-W4UR2Y35.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c as q}from"./chunk-HXWKRRDN.js";import{i as X}from"./chunk-QBI5CVQV.js";import{d as T,f as L,g as I,k as D,m as b,p as z,q as V,s as F,t as E}from"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{c as B,e as U}from"./chunk-UR27RSXA.js";import"./chunk-SUZUBBLM.js";import{a as k,c as w}from"./chunk-PPOSM6EZ.js";import{ia as $}from"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Cb as d,Db as c,Eb as p,I as S,Ob as O,Qb as f,ba as R,db as l,eb as s,ec as v,hc as y,ka as _,la as A,lb as N,sb as a}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";var le=(()=>{let o=class o extends W{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=e.group({description:[r?.description,[T.maxLength(4096)]],testTypeId:[r?.testTypeId,[T.required]],unitId:[r?.unitId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(u),s(V),s(P),s(Y));},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[v([]),N,y],decls:7,vars:5,consts:()=>{let t;t="Test Type";let e;e="Unit";let i;return i="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","unitId","label",e,3,"source"],["formControlName","description","label",i],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),c()(),p(6,"sz-ui-dialog-actions",5)),e&2&&(a("header",i.header),l(2),a("formGroup",i.form),l(),a("source",i.testTypes),l(),a("source",i.units),l(2),a("actions",i.actions));},dependencies:[E,D,L,I,b,z,M,j,X,Q,g,Z,ee,K,J,x],encapsulation:2});let n=o;return n;})();var de=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.router=i,this.title=q.referenceValues,this.dataSource=new re(),this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("testTypeId"),m.uuid("unitId"),m.hyperlink("testType.name",r=>this.router.navigate([`/mlab/reference-values/${r.id}`])),m.string("unit").setValueGetter(r=>r.unit?.symbol),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),ie.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(t){this.dialog.open(te,{data:oe.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(s(G),s(u),s(B));},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(p(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),d(2,"button",2),f("click",function(){return i.openSaveComponent();}),d(3,"span"),O(4,3),c()()(),d(5,"sz-ui-table",4),f("update",function(){return i.get();}),c()),e&2&&(a("title",i.title),l(),a("dataSource",i.dataSource),l(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,C,ae,ne],encapsulation:2});let n=o;return n;})();var tt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=A({type:o}),o.ɵinj=R({providers:[u],imports:[F,E,U.forChild([{path:"",component:de}]),M,$,w,C,se,g]});let n=o;return n;})();export{tt as ReferenceValuesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/