import{a as l,b as oe,d as re,f as ne,i as ae,j as se}from"./chunk-3RGN74YT.js";import"./chunk-4PUI7TFD.js";import"./chunk-UX7LCM42.js";import"./chunk-6QTNW6V3.js";import{a as S}from"./chunk-Y67U627O.js";import"./chunk-BDVQ6LF3.js";import{e as Z,f as x,g as ee,i as te,j as T,k as ie}from"./chunk-45EQYRXL.js";import{a as C}from"./chunk-J7RSE5GX.js";import{h as y}from"./chunk-S4HAMF5I.js";import{a as P,b as Y,d as G,e as j,g as M}from"./chunk-PI57QVX3.js";import"./chunk-AYSVPPXZ.js";import{j as q,t as Q,v as J,x as K,y as W}from"./chunk-NGCO2DG7.js";import"./chunk-BQGY2E4W.js";import"./chunk-JB2SFW5Z.js";import{c as H}from"./chunk-FAEIW35E.js";import{j as X}from"./chunk-WDKUGUU7.js";import{d as g,f as L,g as I,k as b,m as z,p as D,q as F,s as V,t as E}from"./chunk-CXB763V2.js";import"./chunk-LUIABQW7.js";import{c as U,e as B}from"./chunk-AWG7Q7IV.js";import"./chunk-O6OUP7WU.js";import{ha as $,ia as k,ka as w}from"./chunk-SHXYMDXZ.js";import"./chunk-BSUEWO5U.js";import{$b as c,Eb as a,Ob as p,Pb as d,Qb as u,_b as A,gb as m,hb as s,ka as R,qc as N,rc as v,ta as f,ua as h,ub as O}from"./chunk-PSKSSTJ7.js";var me=(()=>{let o=class o extends Z{constructor(e,i,t,r){super(t),this.mlabService=e,this.fb=i,this.dialog=t,this.data=r,this.testTypeUnits=null,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.testTypeUnitContentFunc=_=>_.unit.name,this.testTypeUnitValueFunc=_=>_.unitId,this.form=i.group({description:[r?.description,[g.maxLength(4096)]],testTypeId:[r?.testTypeId,[g.required]],unitId:[r?.unitId,[]]}),this.testTypeSelected(r?.testTypeId);}testTypeSelected(e){e&&(this.testTypeUnits=this.mlabService.testTypes.units.getAll(e,{orderBy:["unit.name"]}));}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)(s(S),s(F),s(P),s(Y));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[N([]),O,v],decls:7,vars:9,consts:()=>{let e;e="Test Type";let i;i="Unit";let t;return t="Description",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"szOptionSelected","source"],["formControlName","unitId","label",i,3,"source","szOptionContentFn","szOptionValueFn"],["formControlName","description","label",t],[3,"actions"]];},template:function(i,t){i&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1)(3,"sz-ui-form-field-select",2),c("szOptionSelected",function(_){return t.testTypeSelected(_);}),d(),u(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),d()(),u(6,"sz-ui-dialog-actions",5)),i&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),a("formGroup",t.form),m(),a("source",t.testTypes),m(),a("source",t.testTypeUnits)("szOptionContentFn",t.testTypeUnitContentFunc)("szOptionValueFn",t.testTypeUnitValueFunc),m(2),a("actions",t.actions));},dependencies:[E,b,L,I,z,D,M,j,X,Q,T,x,ee,W,K,J],encapsulation:2});let n=o;return n;})();var pe=(()=>{let o=class o{constructor(e,i,t){this.dialog=e,this.mlabService=i,this.router=t,this.title=H.reference_values,this.dataSource=new re(),this.dataSource.columnDefs.push(l.uuid("id"),l.uuid("testTypeId"),l.uuid("unitId"),l.hyperlink("testType.nameEn",r=>`/mlab/reference-values/${r.id}`).setStacked(l.string("description").setValueClassFontSmall()),l.string("unit").setValueGetter(r=>r.unit?.symbol),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),oe.menu([y.edit(r=>this.openSaveComponent(r)),y.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(me,{data:e}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openReferenceValueDeleteComponent(e){this.dialog.open(te,{data:ie.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)(s(G),s(S),s(U));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,t){i&1&&(u(0,"sz-ui-app-bar",1),p(1,"sz-ui-table-search-filter",2),c("changed",function(){return t.get();}),p(2,"button",3),c("click",function(){return t.openSaveComponent();}),p(3,"span"),A(4,0),d()()(),p(5,"sz-ui-table",4),c("update",function(){return t.get();}),d()),i&2&&(a("title",t.title),m(),a("dataSource",t.dataSource),m(4),a("dataSource",t.dataSource));},dependencies:[k,C,ae,ne],encapsulation:2});let n=o;return n;})();var et=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=h({type:o}),o.ɵinj=R({providers:[S],imports:[V,E,B.forChild([{path:"",component:pe}]),M,$,w,C,se,T]});let n=o;return n;})();export{et as ReferenceValuesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/