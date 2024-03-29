import{a as ue,b as Te,c as Se}from"./chunk-REUSU3QE.js";import{a as v}from"./chunk-2XIEL7II.js";import{a as ie}from"./chunk-KBCE4TCO.js";import"./chunk-QNM6XM36.js";import{a as T,b as pe,d as me,f as de,i as le,j as ce}from"./chunk-TI3KPOR7.js";import"./chunk-6476LBLO.js";import"./chunk-PT75MKNF.js";import{a as l}from"./chunk-Q2N4ZM5T.js";import{e as oe,f as re,g as ne,i as se,j as I,k as ae}from"./chunk-OPST3HSR.js";import"./chunk-6HOMNJG3.js";import"./chunk-QUJGTYPR.js";import{b as g}from"./chunk-EPNV7HRZ.js";import{j as L}from"./chunk-JHC5R5G3.js";import{a as q,b as Q,d as C,e as J,g as E}from"./chunk-5MAY3I4F.js";import{o as ee,s as te}from"./chunk-RZLFWLWK.js";import{c as W}from"./chunk-4GL34ATX.js";import"./chunk-VQDUMFVZ.js";import"./chunk-D5DPYT77.js";import{c as Z}from"./chunk-OPRLBPJZ.js";import"./chunk-C77Q6E22.js";import{d as B,f as $,g as j,k as G,m as x,p as X,q as V,t as w}from"./chunk-ZBCFQZ6O.js";import"./chunk-GMGFC4G7.js";import{a as y,c as k,e as M}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as K,c as h}from"./chunk-FBMLFETS.js";import{ha as H}from"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as s,Lb as p,Mb as m,Nb as d,Xb as F,Yb as S,_b as R,gb as u,hb as n,na as c,nc as f,oa as U,oc as _,sb as P,xb as O,yb as N,za as Y,zb as A}from"./chunk-75X3YXCS.js";var ye=(()=>{let i=class i extends oe{constructor(e,t,r,a){super(r),this.mlabService=e,this.fb=t,this.dialog=r,this.data=a,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.form=t.group({unitId:[a.testTypeUnit?.unitId,[B.required]]});}submit(){this.IsValid()&&(this.data.testTypeUnit?this.save(this.mlabService.testTypes.units.update(this.data.testTypeId,this.data.testTypeUnit?.id,this.form.value)):this.save(this.mlabService.testTypes.units.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(l),n(V),n(q),n(Q));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-type-units-save"]],standalone:!0,features:[f([]),P,_],decls:5,vars:4,consts:()=>{let e;return e="Unit",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId","label",e,3,"source"],[3,"actions"]];},template:function(t,r){t&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),m()(),d(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",r.header),u(2),s("formGroup",r.form),u(),s("source",r.units),u(),s("actions",r.actions));},dependencies:[w,G,$,j,x,X,E,J,ee,I,re,ne,te],encapsulation:2});let o=i;return o;})();var b=(()=>{let i=class i{set testType(e){this._testType=e,this.get();}get testType(){return this._testType;}constructor(e,t,r){this.dialog=e,this.mlabService=t,this.route=r,this.title=Z.units,this.dataSource=new me(),this.dataSource.columnDefs.push(T.uuid("id"),T.uuid("unitId"),T.string("unit.name"),T.date("createdAt",!1),T.date("updatedAt",!1),pe.menu([L.edit(a=>this.openSaveComponent(a)),L.delete(a=>this.openTestTypeUnitDeleteComponent(a))]));}openSaveComponent(e){this.dialog.open(ye,{data:{testTypeId:this.testType.id,testTypeUnit:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeUnitDeleteComponent(e){this.dialog.open(se,{data:ae.delete(this.mlabService.testTypes.units.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.units.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.units.get(this.testType.id,this.dataSource.getQuery()).pipe(W(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n(C),n(l),n(y));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-type-units"]],inputs:{testType:"testType"},standalone:!0,features:[_],decls:5,vars:3,consts:()=>{let e;return e="Add",[[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,r){t&1&&(p(0,"sz-ui-table-search-filter",0),S("changed",function(){return r.get();}),p(1,"button",1),S("click",function(){return r.openSaveComponent();}),p(2,"span"),F(3,2),m()()(),p(4,"sz-ui-table",3),S("update",function(){return r.get();}),m()),t&2&&(s("dataSource",r.dataSource),u(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[M,h,K,ce,le,de],encapsulation:2});let o=i;return o;})();var ge=()=>[v],Ie=()=>[b];function ve(o,i){if(o&1&&d(0,"sz-medisy-laboratory-test-type-specimen-types",4),o&2){let D=R();s("testType",D.testType);}}function be(o,i){if(o&1&&d(0,"sz-medisy-laboratory-test-type-units",4),o&2){let D=R();s("testType",D.testType);}}var Me=(()=>{let i=class i{constructor(e,t,r,a){this.dialog=e,this.mlabService=t,this.route=r,this.router=a,this.testType=this.route.snapshot.data.testType;}};i.ɵfac=function(t){return new(t||i)(n(C),n(l),n(y),n(k));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-type"]],features:[f([])],decls:10,vars:2,consts:()=>{let e;e="Specimen Types";let t;return t="Units",[[3,"title","subtitle"],["mat-stretch-tabs","false"],["label",e],["label",t],[3,"testType"]];},template:function(t,r){t&1&&(d(0,"sz-ui-header-info",0),p(1,"mat-tab-group",1)(2,"mat-tab",2),O(3,ve,1,1),N(4,3,ge),A(),m(),p(6,"mat-tab",3),O(7,be,1,1),N(8,7,Ie),A(),m()()),t&2&&s("title",r.testType.name)("subtitle",r.testType.description);},dependencies:[ue,Te,g],encapsulation:2});let o=i;return o;})();var Ce=[{path:"",component:Me},{path:"specimen-types",loadComponent:()=>import("./chunk-ZHYKOYDC.js").then(o=>o.TestTypeSpecimenTypesComponent)}];var vt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=U({type:i}),i.ɵinj=Y({providers:[l],imports:[M.forChild(Ce),E,H,h,Se,g,I,ie,v,b]});let o=i;return o;})();export{vt as TestTypeModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/