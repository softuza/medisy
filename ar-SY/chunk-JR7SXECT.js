import{a as d,b as J,d as K,f as W,i as Z,j as x}from"./chunk-KDQ5XKIO.js";import{a as u}from"./chunk-R6UM4SG5.js";import{e as X,f as k,g as w,i as H,j as q,k as Q}from"./chunk-NHCTASKL.js";import{h as f}from"./chunk-ZG7TD6PA.js";import{a as D,b as z,d as L,e as R,g as Y}from"./chunk-EJJSD5UB.js";import{o as G,q as j,s as U}from"./chunk-ILYIUFTB.js";import{c as $}from"./chunk-SNUH52NX.js";import{c as V}from"./chunk-4533BRGQ.js";import{d as C,f as h,g,k as N,m as O,p as I,q as v,t as b}from"./chunk-YFLYFTNW.js";import{a as P,e as A}from"./chunk-TXI72R6B.js";import{ia as F,ka as B}from"./chunk-M5SMZ234.js";import{Db as n,Nb as p,Ob as l,Pb as c,Zb as y,_b as T,hb as m,ib as a,pc as M,qc as _,ua as S,ub as E}from"./chunk-NXFEVB6F.js";var ee=(()=>{let o=class o extends X{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(u),a(v),a(D),a(z));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),E,_],decls:6,vars:4,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),l()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",i.header),m(2),n("formGroup",i.form),m(),n("source",i.specimenTypes),m(2),n("actions",i.actions));},dependencies:[b,N,h,g,O,I,Y,R,G,q,k,w,U,j],encapsulation:2});let s=o;return s;})();var Re=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=V.specimenTypes,this.dataSource=new K(),this.testType=this.route.snapshot.data.testType,this.dataSource.columnDefs.push(d.uuid("id"),d.uuid("specimenTypeId"),d.string("specimenType.name"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),J.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(ee,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:Q.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testType.id,this.dataSource.getQuery()).pipe($(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(L),a(u),a(P));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],standalone:!0,features:[_],decls:5,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-table-search-filter",1),T("changed",function(){return i.get();}),p(1,"button",2),T("click",function(){return i.openSaveComponent();}),p(2,"span"),y(3,0),l()()(),p(4,"sz-ui-table",3),T("update",function(){return i.get();}),l()),t&2&&(n("dataSource",i.dataSource),m(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[A,B,F,x,Z,W],encapsulation:2});let s=o;return s;})();export{Re as a};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/