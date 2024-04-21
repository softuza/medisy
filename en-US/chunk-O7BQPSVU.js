import{a as m,b as K,d as W,f as Z,i as x,j as ee}from"./chunk-BHRUDZVP.js";import"./chunk-QGCND4BW.js";import"./chunk-GG3YYMUI.js";import"./chunk-K6SJQ5CU.js";import{a as _}from"./chunk-UPED42KZ.js";import{e as X,f as w,g as q,i as H,j as Q,k as J}from"./chunk-TEJYWJVO.js";import"./chunk-JVYAAVKL.js";import"./chunk-QQTY7BQF.js";import{h as f}from"./chunk-BZYUV3OB.js";import{a as R,b as L,d as P,e as F,g as B}from"./chunk-JTU2TQPP.js";import"./chunk-X5AOE4DT.js";import{o as j,q as k}from"./chunk-3LAMONKN.js";import{c as U}from"./chunk-E4OGVLDJ.js";import"./chunk-44LIDNAH.js";import"./chunk-3SHS3FQH.js";import{c as V}from"./chunk-ZPWMR5AU.js";import"./chunk-2ENG53AX.js";import{d as C,f as v,g as b,k as I,m as O,p as D,q as G,t as z}from"./chunk-DF4JKNTM.js";import"./chunk-EGVPX6ID.js";import{a as A,e as N}from"./chunk-SJINDKNX.js";import"./chunk-MHEQHB7U.js";import{ia as Y,ka as $}from"./chunk-J4WSEAYB.js";import"./chunk-LVWMBWQL.js";import{Db as a,Ma as g,Nb as p,Ob as d,Pb as c,Zb as M,_b as S,hb as l,ib as s,pc as E,qc as T,ta as y,ua as u,ub as h}from"./chunk-E7ZYNPHN.js";var te=(()=>{let o=class o extends X{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.form=t.group({testTypeId:[r.testGroupTestType?.testTypeId,[C.required]]});}submit(){this.IsValid()&&(this.data.testGroupTestType?this.save(this.mlabService.testGroups.testTypes.update(this.data.testGroupId,this.data.testGroupTestType?.id,this.form.value)):this.save(this.mlabService.testGroups.testTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(s(_),s(G),s(R),s(L));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types-save"]],standalone:!0,features:[E([]),h,T],decls:5,vars:6,consts:()=>{let e;return e="Type",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2),d()(),c(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),a("formGroup",i.form),l(),a("source",i.testTypes),l(),a("actions",i.actions));},dependencies:[z,I,v,b,O,D,B,F,j,Q,w,q,k],encapsulation:2});let n=o;return n;})();var Ye=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=V.test_types,this.dataSource=new W(),this.testGroupId=g.required(),this.dataSource.columnDefs.push(m.uuid("id"),m.string("testType.nameEn"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),K.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testGroupId:this.testGroupId(),testGroupTestType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testGroups.testTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.testTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.testTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(U(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(s(P),s(_),s(A));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-test-group-test-types"]],inputs:{testGroupId:[y.SignalBased,"testGroupId"]},standalone:!0,features:[T],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-table-search-filter",1),S("changed",function(){return i.get();}),p(1,"button",2),S("click",function(){return i.openSaveComponent();}),p(2,"span"),M(3,0),d()()(),p(4,"sz-ui-table",3),S("update",function(){return i.get();}),d()),t&2&&(a("dataSource",i.dataSource),l(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[N,$,Y,ee,x,Z],encapsulation:2});let n=o;return n;})();export{Ye as TestTypeTestTypesComponent};/**i18n:4432d5f57c128b53336b8fd28b2fbe1004e12689cc8828aeca1747c1f33ed32a*/