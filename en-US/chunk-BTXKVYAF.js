import{a as d,b as K,d as W,f as Z,i as x,j as ee}from"./chunk-Y4PXEVQT.js";import"./chunk-3HDGXHIW.js";import"./chunk-75JUXYDU.js";import{a as T}from"./chunk-KR7XUBMS.js";import{e as k,f as w,g as H,i as q,j as Q,k as J}from"./chunk-HPZYOYE3.js";import"./chunk-OMX5NFNR.js";import{b as X}from"./chunk-ABFS4SEB.js";import{j as f}from"./chunk-TOOE4O45.js";import{a as D,b as R,d as z,e as G,g as L}from"./chunk-IZ32KJRN.js";import{o as U,s as V,u as j}from"./chunk-LMOPJ72O.js";import{c as B}from"./chunk-2AWDEL7N.js";import"./chunk-624ACHJE.js";import"./chunk-M7S7TTRL.js";import{c as $}from"./chunk-XNWVOXZG.js";import"./chunk-HAIELHQF.js";import{d as C,f as h,g,k as O,m as N,p as I,q as v,t as b}from"./chunk-4JTOADFE.js";import"./chunk-QQ2344AC.js";import{a as P,e as A}from"./chunk-FA7A5F5K.js";import"./chunk-AXAUKDRF.js";import{a as Y,c as F}from"./chunk-AYP3BRJS.js";import"./chunk-HULPMCJY.js";import"./chunk-QECXQAYY.js";import{Cb as a,Mb as m,Nb as S,Ob as l,Yb as y,Zb as u,gb as p,hb as n,oc as M,pc as _,tb as E,ua as c}from"./chunk-XJDYJDV7.js";var te=(()=>{let o=class o extends k{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(n(T),n(v),n(D),n(R));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),E,_],decls:6,vars:4,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",i.header),p(2),a("formGroup",i.form),p(),a("source",i.specimenTypes),p(2),a("actions",i.actions));},dependencies:[b,O,h,g,N,I,L,G,U,Q,w,H,j,V],encapsulation:2});let s=o;return s;})();var Ge=(()=>{let o=class o{set testGroup(e){this._testGroup=e,this.get();}get testGroup(){return this._testGroup;}constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=$.specimenTypes,this.dataSource=new W(),this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("specimenTypeId"),d.uuid("testTypeId"),d.string("specimenType.name"),d.date("createdAt",!1),d.date("updatedAt",!1),K.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}openSaveComponent(e){this.dialog.open(te,{data:{testGroupId:this.testGroup.id,testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(q,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.specimenTypes.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroup.id,this.dataSource.getQuery()).pipe(B(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(n(z),n(T),n(P));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-group-specimen-types"]],inputs:{testGroup:"testGroup"},standalone:!0,features:[_],decls:6,vars:5,consts:()=>{let e;return e="Add",[e,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(l(0,"sz-ui-header-info",1),m(1,"sz-ui-table-search-filter",2),u("changed",function(){return i.get();}),m(2,"button",3),u("click",function(){return i.openSaveComponent();}),m(3,"span"),y(4,0),S()()(),m(5,"sz-ui-table",4),u("update",function(){return i.get();}),S()),t&2&&(a("title",i.title)("subtitle",i.testGroup.name),p(),a("dataSource",i.dataSource),p(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[A,F,Y,ee,x,Z,X],encapsulation:2});let s=o;return s;})();export{Ge as TestGroupSpecimenTypesComponent};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/