import{a as l,b as Q,d as J,f as K,i as W,j as Z}from"./chunk-YWLPFQQA.js";import"./chunk-KWIB5JB5.js";import"./chunk-JQGWRR26.js";import{a as _}from"./chunk-QYXG2FPL.js";import{e as V,f as k,g as X,i as w,j as H,k as q}from"./chunk-3LDW3QR3.js";import"./chunk-EHWOB3Z6.js";import"./chunk-QGSSWQTR.js";import{j as f}from"./chunk-G5WHUCRF.js";import{a as N,b as A,d as R,e as L,g as P}from"./chunk-ZWHC4QEX.js";import{o as U,s as j}from"./chunk-XSTI72IP.js";import{c as B}from"./chunk-KJNGR2ED.js";import"./chunk-624ACHJE.js";import"./chunk-D5DPYT77.js";import{c as $}from"./chunk-QA36KWKY.js";import"./chunk-F3JW7MG7.js";import{d as g,f as E,g as C,k as v,m as b,p as O,q as I,t as G}from"./chunk-ZBCFQZ6O.js";import"./chunk-7ZDDI6P7.js";import{a as D,e as z}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as F,c as Y}from"./chunk-FBMLFETS.js";import"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as a,Lb as p,Mb as m,Nb as c,Xb as h,Yb as S,gb as d,hb as s,na as u,nc as M,oc as T,sb as y}from"./chunk-75X3YXCS.js";var x=(()=>{let i=class i extends V{constructor(e,t,o,r){super(o),this.mlabService=e,this.fb=t,this.dialog=o,this.data=r,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=t.group({testTypeId:[r.testGroupTestType?.testTypeId,[g.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(s(_),s(I),s(N),s(A));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[M([]),y,T],decls:5,vars:4,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2),m()(),c(4,"sz-ui-dialog-actions",3)),t&2&&(a("header",o.header),d(2),a("formGroup",o.form),d(),a("source",o.testTypes),d(),a("actions",o.actions));},dependencies:[G,v,E,C,b,O,P,L,U,H,k,X,j],encapsulation:2});let n=i;return n;})();var Le=(()=>{let i=class i{set testGroup(e){this._testGroup=e,this.get();}get testGroup(){return this._testGroup;}constructor(e,t,o){this.dialog=e,this.mlabService=t,this.route=o,this.title=$.testTypes,this.dataSource=new J(),this.dataSource.columnDefs.push(l.uuid("id"),l.string("testType.name"),l.date("createdAt",!1),l.date("updatedAt",!1),Q.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}openSaveComponent(e){this.dialog.open(x,{data:{testGroupId:this.testGroup.id,testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(w,{data:q.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroup.id,this.dataSource.getQuery()).pipe(B(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)(s(R),s(_),s(D));},i.ɵcmp=u({type:i,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroup:"testGroup"},standalone:!0,features:[T],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(p(0,"sz-ui-table-search-filter",0),S("changed",function(){return o.get();}),p(1,"button",1),S("click",function(){return o.openSaveComponent();}),p(2,"span"),h(3,2),m()()(),p(4,"sz-ui-table",3),S("update",function(){return o.get();}),m()),t&2&&(a("dataSource",o.dataSource),d(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[z,Y,F,Z,W,K],encapsulation:2});let n=i;return n;})();export{Le as TestTypeTestTypesComponent};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/