import{a as ie}from"./chunk-G2WJI7NX.js";import"./chunk-FPEL7HED.js";import{a as C}from"./chunk-CAFVTOU4.js";import{b as y,c as W,e as Z,g as ee,h as te,i as T,s as oe,t as re}from"./chunk-EWJ5VIW6.js";import{a as g}from"./chunk-SUUMCV2R.js";import{c as X,h as q,i as H,j as x,l as J,m as K,n as Q}from"./chunk-AS5U2OT3.js";import{a as B,b as U,d as $,e as k,g as j}from"./chunk-GP3W3GGO.js";import"./chunk-WYIASL3N.js";import{d as M,g as A,h as G,l as R,n as I,o as D,p as P,s as N}from"./chunk-DOVRWRQU.js";import{a as V}from"./chunk-QPPJ65JJ.js";import{a as b}from"./chunk-RXJ3ACVE.js";import{b as w}from"./chunk-TWS2RBYG.js";import"./chunk-2IBJ7SPQ.js";import{a as L,e as z}from"./chunk-2IOOD4ZB.js";import{i as h}from"./chunk-DESFHGZ3.js";import"./chunk-PLPMFK4N.js";import"./chunk-GNPEYPQP.js";import{Pa as Y,Ra as F}from"./chunk-26JDY2BM.js";import{Bb as l,Cb as u,Db as m,L as p,Nb as S,Pb as _,ac as f,bc as E,cb as d,cc as v,db as n,kb as O,la as c,nb as s}from"./chunk-J5YYK5S2.js";var pe=()=>[],ue=a=>[a],ae=(()=>{let i=class i extends q{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.form=t.group({enabled:[r.laboratoryTestGroup?.enabled??!0,[M.required]],testGroupId:[r.laboratoryTestGroup?.testGroupId,[M.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestGroup?this.save(this.mlabService.laboratories.testGroups.update(this.data.laboratoryId,this.data.laboratoryTestGroup?.id,this.form.value)):this.save(this.mlabService.laboratories.testGroups.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(n(b),n(P),n(B),n(U));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[O,f],decls:7,vars:7,consts:()=>{let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId",3,"excludeLaboratoryIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-test-group-select",2),l(4,"mat-checkbox",3),S(5,4),u()()(),m(6,"sz-ui-dialog-actions",5)),t&2&&(s("header",o.header),d(2),s("formGroup",o.form),d(1),s("excludeLaboratoryIds",o.data.laboratoryTestGroup?E(4,pe):v(5,ue,o.data.laboratoryId)),d(3),s("actions",o.actions));},dependencies:[N,R,A,G,I,D,K,H,x,j,k,T,te,ie],encapsulation:2});let a=i;return a;})();var He=(()=>{let i=class i{constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=g.testGroups,this.dataSource=new Z(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(W.default([y.text("testGroup.name",g.testGroup),C.createdAt(),y.checkbox("enabled",V.enabled,(r,ne)=>{r.enabled=ne,this.mlabService.laboratories.testGroups.update(r.laboratoryId,r.id,r).pipe(p(1)).subscribe(se=>{r=se;});}),C.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openLaboratoryTestGroupDeleteComponent(r))])])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestGroup:e}}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openLaboratoryTestGroupDeleteComponent(e){this.dialog.open(J,{data:Q.delete(this.mlabService.laboratories.testGroups.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.laboratories.testGroups.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(X(this.dataSource.indicator)).pipe(p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(n($),n(b),n(L));},i.ɵcmp=c({type:i,selectors:[["medisy-laboratory-test-groups"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(m(0,"sz-ui-header-info",0),l(1,"sz-ui-table-filter",1),_("search",function(){return o.get();}),l(2,"button",2),_("click",function(){return o.openSaveComponent();}),l(3,"span"),S(4,3),u()()(),l(5,"sz-ui-table",4),_("update",function(){return o.get();}),u()),t&2&&(s("title",o.title)("subTitle",o.laboratory.name),d(1),s("filter",o.dataSource.filter),d(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[z,w,re,oe,ee,T,F,Y],encapsulation:2});let a=i;return a;})();export{He as LaboratoryTestGroupsComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/