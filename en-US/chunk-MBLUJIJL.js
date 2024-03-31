import{a as d,b as K,d as W,f as Z,i as x,j as ee}from"./chunk-A52A4IXH.js";import"./chunk-UKASW4SH.js";import"./chunk-AQMJWPZN.js";import"./chunk-GF52CWG5.js";import{a as T}from"./chunk-A4WL3FYI.js";import{e as k,f as w,g as H,i as q,j as Q,k as J}from"./chunk-NORSX7AN.js";import"./chunk-O2OTD4RB.js";import{b as X}from"./chunk-QLW72HL4.js";import{h as f}from"./chunk-KZ5TTCTY.js";import{a as D,b as R,d as z,e as L,g as G}from"./chunk-4Z4QG25E.js";import"./chunk-3NC3Y6E7.js";import{o as U,q as V,s as j}from"./chunk-RIHPS5KS.js";import{c as B}from"./chunk-IWL564QK.js";import"./chunk-NDMBF3VG.js";import"./chunk-ZADXNDER.js";import{c as $}from"./chunk-XVKVAOPG.js";import"./chunk-2HLVRV4Y.js";import{d as C,f as h,g as O,k as g,m as N,p as I,q as v,t as b}from"./chunk-QB7MQTPZ.js";import"./chunk-6PBKCSCG.js";import{a as P,e as A}from"./chunk-NU73GHW6.js";import"./chunk-Y5SKEODV.js";import{ia as Y,ka as F}from"./chunk-CJMWB6ZO.js";import"./chunk-3KZRNWQ7.js";import{Db as n,Nb as m,Ob as S,Pb as l,Zb as y,_b as u,hb as p,ib as a,pc as M,qc as _,ua as c,ub as E}from"./chunk-HNAKTLBJ.js";var te=(()=>{let o=class o extends k{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(T),a(v),a(D),a(R));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),E,_],decls:6,vars:4,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(),n("source",i.specimenTypes),p(2),n("actions",i.actions));},dependencies:[b,g,h,O,N,I,G,L,U,Q,w,H,j,V],encapsulation:2});let s=o;return s;})();var Le=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=$.specimenTypes,this.dataSource=new W(),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("specimenTypeId"),d.uuid("testTypeId"),d.string("specimenType.name"),d.date("createdAt",!1),d.date("updatedAt",!1),K.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testGroupId:this.testGroup.id,testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(q,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.specimenTypes.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroup.id,this.dataSource.getQuery()).pipe(B(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(z),a(T),a(P));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-group-specimen-types"]],standalone:!0,features:[_],decls:6,vars:5,consts:()=>{let e;return e="Add",[e,[3,"title","subtitle"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(l(0,"sz-ui-header-info",1),m(1,"sz-ui-table-search-filter",2),u("changed",function(){return i.get();}),m(2,"button",3),u("click",function(){return i.openSaveComponent();}),m(3,"span"),y(4,0),S()()(),m(5,"sz-ui-table",4),u("update",function(){return i.get();}),S()),t&2&&(n("title",i.title)("subtitle",i.testGroup.name),p(),n("dataSource",i.dataSource),p(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[A,F,Y,ee,x,Z,X],encapsulation:2});let s=o;return s;})();export{Le as TestGroupSpecimenTypesComponent};/**i18n:8ad4cf760c87d08b695a94cb80f4844ffbc4e33bdc339c4d5a0bbc09e28e3eac*/