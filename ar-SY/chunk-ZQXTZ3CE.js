import{a as m,b as K,d as W,f as Z,i as x,j as ee}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{a as _}from"./chunk-DAMCUIWD.js";import{e as X,f as w,g as q,i as H,j as Q,k as J}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import"./chunk-BYTIRDSX.js";import{h as f}from"./chunk-POKYVS3O.js";import{a as R,b as L,d as P,e as F,g as B}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{o as j,q as k}from"./chunk-PX7G627R.js";import{c as U}from"./chunk-5QGBLY3O.js";import"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as V}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import{d as C,f as v,g as b,k as I,m as O,p as D,q as G,t as z}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{a as A,e as N}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{ja as Y,la as $}from"./chunk-BC4NCYN6.js";import"./chunk-UQI5C6OQ.js";import{Db as a,Ma as g,Nb as p,Ob as d,Pb as c,Zb as M,_b as S,hb as l,ib as s,pc as E,qc as T,ta as y,ua as u,ub as h}from"./chunk-R6OEYYKK.js";var te=(()=>{let o=class o extends X{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({testTypeId:[r.testGroupTestType?.testTypeId,[C.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(s(_),s(G),s(R),s(L));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[E([]),h,T],decls:5,vars:6,consts:()=>{let e;return e="\u0627\u0644\u0646\u0645\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2),d()(),c(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),a("formGroup",i.form),l(),a("source",i.testTypes),l(),a("actions",i.actions));},dependencies:[z,I,v,b,O,D,B,F,j,Q,w,q,k],encapsulation:2});let n=o;return n;})();var Ye=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=V.test_types,this.dataSource=new W(),this.testGroupId=g.required(),this.dataSource.columnDefs.push(m.uuid("id"),m.string("testType.nameEn"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),K.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(U(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(s(P),s(_),s(A));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[y.SignalBased,"testGroupId"]},standalone:!0,features:[T],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-table-search-filter",1),S("changed",function(){return i.get();}),p(1,"button",2),S("click",function(){return i.openSaveComponent();}),p(2,"span"),M(3,0),d()()(),p(4,"sz-ui-table",3),S("update",function(){return i.get();}),d()),t&2&&(a("dataSource",i.dataSource),l(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[N,$,Y,ee,x,Z],encapsulation:2});let n=o;return n;})();export{Ye as TestTypeTestTypesComponent};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/