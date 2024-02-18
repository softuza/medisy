import{a as re,c as ne,e as ae,g as se,j as le,k as me,l as s}from"./chunk-OZGY6LNB.js";import"./chunk-FZ52L27Y.js";import"./chunk-DMM3KDE2.js";import{a as p}from"./chunk-L27V7QHK.js";import{e as Z,f as ee,g as te,i as ie,j as R,k as oe}from"./chunk-2OSRE3JT.js";import"./chunk-RYHQSWXO.js";import{b as C}from"./chunk-UU5EOSAA.js";import{f as O}from"./chunk-GIBK7SER.js";import{a as J,b as K,d as Q,e as W,g as A}from"./chunk-FYGLJEE6.js";import{A as q,B as x,h as G,u as w,z as H}from"./chunk-6AE3I6K5.js";import{Ba as k,L as $,N as U,d as T,f as y,g as b,k as D,m as I,p as F,q as V,s as z,t as M,ya as X}from"./chunk-YEMGMLL5.js";import"./chunk-TXIZFIB6.js";import{Ea as Y,Ga as B,Ja as j}from"./chunk-XSLO4G5W.js";import{Fb as d,Gb as S,Hb as _,M as c,Rb as h,Tb as f,fa as g,gb as m,hb as l,hc as L,kc as v,oa as E,ob as P,pa as N,vb as a}from"./chunk-WU7ZNUS7.js";var _e=(()=>{let o=class o extends Z{constructor(t,e,r,i){super(r),this.mlabService=t,this.fb=e,this.dialog=r,this.data=i,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["latinName"]}),this.form=e.group({description:[i?.description,[T.maxLength(4096)]],testTypeId:[i?.testTypeId,[T.required]],unitId:[i?.unitId,[]],multiplier:[i?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(l(p),l(V),l(J),l(K));},o.ɵcmp=E({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[L([]),P,v],decls:8,vars:5,consts:()=>{let t;t="Test Type";let e;e="Unit";let r;r="Multiplier";let i;return i="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","unitId","label",e,3,"source"],["formControlName","multiplier","label",r],["formControlName","description","label",i],[3,"actions"]];},template:function(e,r){e&1&&(_(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5),S()(),_(7,"sz-ui-dialog-actions",6)),e&2&&(a("header",r.header),m(2),a("formGroup",r.form),m(),a("source",r.testTypes),m(),a("source",r.units),m(3),a("actions",r.actions));},dependencies:[M,D,y,b,I,F,A,W,G,se,R,ee,te,x,w,q,H],encapsulation:2});let n=o;return n;})();var pe=(()=>{let o=class o{constructor(t,e,r){this.dialog=t,this.mlabService=e,this.router=r,this.title=k.referenceValues,this.dataSource=new ne(),this.dataSource.fields.push(s.uuid("id"),s.uuid("testTypeId"),s.uuid("unitId"),s.hyperlink("testType.name",i=>this.router.navigate([`/mlab/reference-values/${i.id}`])),s.string("unit").setContentFormat(i=>i.multiplier?`10^${i.multiplier.toExponential(0).split("e").map(u=>Number(u))[1]}/${i.unit?.abbreviation}`:i.unit?.abbreviation),s.number("multiplier"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),re.menu([O.edit(i=>this.openSaveComponent(i)),O.delete(i=>this.openReferenceValueDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(t){this.dialog.open(ie,{data:oe.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe(X(this.dataSource.indicator),c(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(l(Q),l(p),l($));},o.ɵcmp=E({type:o,selectors:[["medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(_(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),d(2,"button",2),f("click",function(){return r.openSaveComponent();}),d(3,"span"),h(4,3),S()()(),d(5,"sz-ui-table",4),f("update",function(){return r.get();}),S()),e&2&&(a("title",r.title),m(),a("dataSource",r.dataSource),m(4),a("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[Y,C,le,ae],encapsulation:2});let n=o;return n;})();var ue=[{path:"",component:pe}];var dt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=N({type:o}),o.ɵinj=g({providers:[p],imports:[z,M,U.forChild(ue),A,j,B,C,me,R]});let n=o;return n;})();export{dt as ReferenceValuesModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/