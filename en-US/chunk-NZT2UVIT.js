import{a as m,b as W,d as Z,f as x,i as ee,j as te}from"./chunk-BRAPFLKV.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import{a as T}from"./chunk-SVTFNF7U.js";import{e as w,f as q,g as H,i as Q,j as J,k as K}from"./chunk-WN2NFEA2.js";import"./chunk-6FUK3GWV.js";import"./chunk-XCAJ3ZHI.js";import{h as f}from"./chunk-Q5LDCOCY.js";import{a as z,b as L,d as G,e as Y,g as F}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import{o as j,q as X,s as k}from"./chunk-ZA2UB2XH.js";import{c as U}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{c as V}from"./chunk-LMCANXRL.js";import"./chunk-AIP5TNUP.js";import{d as O,f as I,g as h,k as N,m as b,p as v,q as P,t as A}from"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{a as D,e as R}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ia as B,ka as $}from"./chunk-WG6MZMNK.js";import"./chunk-6DPHD5PI.js";import{Db as a,Ma as y,Nb as p,Ob as d,Pb as c,Zb as C,_b as u,hb as l,ib as n,pc as g,qc as _,ta as E,ua as S,ub as M}from"./chunk-WLX3OMWV.js";var ie=(()=>{let o=class o extends w{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["name"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[O.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(n(T),n(P),n(z),n(L));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[g([]),M,_],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),d()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),l(2),a("formGroup",i.form),l(),a("source",i.specimenTypes),l(2),a("actions",i.actions));},dependencies:[A,N,I,h,b,v,F,Y,j,J,q,H,k,X],encapsulation:2});let s=o;return s;})();var Be=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=V.specimenTypes,this.dataSource=new Z(),this.testGroupId=y.required(),this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("specimenTypeId"),m.uuid("testTypeId"),m.string("specimenType.name"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),W.menu([f.edit(r=>this.openSaveComponent(r)),f.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ie,{data:{testGroupId:this.testGroupId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(Q,{data:K.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.specimenTypes.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(U(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(n(G),n(T),n(D));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-group-specimen-types"]],inputs:{testGroupId:[E.SignalBased,"testGroupId"]},standalone:!0,features:[_],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-table-search-filter",1),u("changed",function(){return i.get();}),p(1,"button",2),u("click",function(){return i.openSaveComponent();}),p(2,"span"),C(3,0),d()()(),p(4,"sz-ui-table",3),u("update",function(){return i.get();}),d()),t&2&&(a("dataSource",i.dataSource),l(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[R,$,B,te,ee,x],encapsulation:2});let s=o;return s;})();export{Be as TestGroupSpecimenTypesComponent};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/