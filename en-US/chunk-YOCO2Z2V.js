import{a as d,b as J,d as K,f as W,h,k as Z,l as x}from"./chunk-GZGIJ3AA.js";import"./chunk-Y7DDQ3EC.js";import"./chunk-M6IFX4OO.js";import{a as E}from"./chunk-QKMKC3CH.js";import{f as k,g as X,h as w,j as H,k as q,l as Q}from"./chunk-DBFDBBEL.js";import"./chunk-EU67VDIO.js";import"./chunk-62HUTBRW.js";import{b as j}from"./chunk-KPHRAMAI.js";import{j as C}from"./chunk-EJDXHBCB.js";import{a as D,b as z,d as F,e as B,g as Y}from"./chunk-VWNEGCRT.js";import{q as G}from"./chunk-6PF2YSZT.js";import{c as $}from"./chunk-C2WWZD6X.js";import"./chunk-WNILOJP4.js";import"./chunk-ORZKHXQX.js";import{c as b}from"./chunk-WTX2KFGU.js";import"./chunk-QKGOYXSP.js";import{d as R,f as g,g as v,k as O,m as A,p as T,q as V,t as L}from"./chunk-BBHJBBCY.js";import"./chunk-AH6US5BC.js";import{a as N,e as I}from"./chunk-TDDK2KRV.js";import"./chunk-ELX2DM7A.js";import{a as P,c as U}from"./chunk-4UZQAMIE.js";import"./chunk-IME5AGE5.js";import"./chunk-APP24JVE.js";import{Hb as m,Ib as c,Jb as u,O as p,Tb as M,Vb as S,ib as s,jb as i,mc as _,qa as f,qb as y,xb as n}from"./chunk-JGYGEXT3.js";var ee=(()=>{let r=class r extends k{constructor(e,t,o,a){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=a,this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["name"]}),this.referenceValueContentFormat=te=>te.testType.name,this.form=t.group({referenceValueId:[a.laboratoryReferenceValue?.referenceValueId,[R.required]]});}submit(){this.IsValid()&&(this.data.laboratoryReferenceValue?this.save(this.mlabService.laboratories.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value)):this.save(this.mlabService.laboratories.referenceValues.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(i(E),i(V),i(D),i(z));},r.ɵcmp=f({type:r,selectors:[["sz-medisy-laboratory-laboratory-reference-values-save"]],standalone:!0,features:[y,_],decls:5,vars:5,consts:()=>{let e;return e="Reference Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId","label",e,3,"source","szOptionContentFn"],[3,"actions"]];},template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2),c()(),u(4,"sz-ui-dialog-actions",3)),t&2&&(n("header",o.header),s(2),n("formGroup",o.form),s(),n("source",o.referenceValues)("szOptionContentFn",o.referenceValueContentFormat),s(),n("actions",o.actions));},dependencies:[L,O,g,v,A,T,q,X,w,Y,B,h,G],encapsulation:2});let l=r;return l;})();var Be=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=b.referenceValues,this.dataSource=new K(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("referenceValueId"),d.string("referenceValue.testType.name").setName(b.testType),d.string("referenceValue.unit.symbol").setName(b.unit),d.date("createdAt",!1),d.date("updatedAt",!1),J.menu([C.edit(a=>this.openSaveComponent(a)),C.delete(a=>this.openLaboratoryReferenceValueDeleteComponent(a))])),this.get();}openSaveComponent(e){this.dialog.open(ee,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:e}}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openLaboratoryReferenceValueDeleteComponent(e){this.dialog.open(H,{data:Q.delete(this.mlabService.laboratories.referenceValues.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.referenceValues.get(this.laboratory.id,this.dataSource.getQuery()).pipe($(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(i(F),i(E),i(N));},r.ɵcmp=f({type:r,selectors:[["sz-medisy-laboratory-laboratory-reference-values"]],standalone:!0,features:[_],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(u(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),S("changed",function(){return o.get();}),m(2,"button",2),S("click",function(){return o.openSaveComponent();}),m(3,"span"),M(4,3),c()()(),m(5,"sz-ui-table",4),S("update",function(){return o.get();}),c()),t&2&&(n("title",o.title)("subtitle",o.laboratory.name),s(),n("dataSource",o.dataSource),s(4),n("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[I,j,x,Z,W,h,U,P],encapsulation:2});let l=r;return l;})();export{Be as LaboratoryReferenceValuesComponent};/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/