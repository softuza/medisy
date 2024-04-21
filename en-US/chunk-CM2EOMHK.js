import{a as l,b as K,d as W,f as Z,i as x,j as ee}from"./chunk-BHRUDZVP.js";import{a as _}from"./chunk-UPED42KZ.js";import{e as k,f as w,g as q,i as H,j as Q,k as J}from"./chunk-TEJYWJVO.js";import{h as E}from"./chunk-BZYUV3OB.js";import{a as R,b as L,d as Y,e as B,g as F}from"./chunk-JTU2TQPP.js";import{o as j,q as U,s as X}from"./chunk-3LAMONKN.js";import{c as G}from"./chunk-E4OGVLDJ.js";import{d as I,f as N,g as h,k as O,m as b,p as v,q as A,t as P}from"./chunk-DF4JKNTM.js";import{a as D,e as z}from"./chunk-SJINDKNX.js";import{ia as $,ka as V}from"./chunk-J4WSEAYB.js";import{Db as a,Ma as f,Nb as p,Ob as d,Pb as c,Zb as C,_b as T,hb as m,ib as n,pc as g,qc as u,ta as y,ua as S,ub as M}from"./chunk-E7ZYNPHN.js";var te=(()=>{let o=class o extends k{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[r.testTypeSpecimenType?.specimenTypeId,[I.required]],note:[r.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(n(_),n(A),n(R),n(L));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[g([]),M,u],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),d()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),m(2),a("formGroup",i.form),m(),a("source",i.specimenTypes),m(2),a("actions",i.actions));},dependencies:[P,O,N,h,b,v,F,B,j,Q,w,q,X,U],encapsulation:2});let s=o;return s;})();var Be=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new W(),this.testTypeId=f.required(),this.dataSource.columnDefs.push(l.uuid("id"),l.uuid("specimenTypeId"),l.string("specimenType.nameEn"),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),K.menu([E.edit(r=>this.openSaveComponent(r)),E.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(G(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(n(Y),n(_),n(D));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[y.SignalBased,"testTypeId"]},standalone:!0,features:[u],decls:5,vars:3,consts:()=>{let e;return e="Add",[e,[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,i){t&1&&(p(0,"sz-ui-table-search-filter",1),T("changed",function(){return i.get();}),p(1,"button",2),T("click",function(){return i.openSaveComponent();}),p(2,"span"),C(3,0),d()()(),p(4,"sz-ui-table",3),T("update",function(){return i.get();}),d()),t&2&&(a("dataSource",i.dataSource),m(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[z,V,$,ee,x,Z],encapsulation:2});let s=o;return s;})();export{Be as a};/**i18n:4432d5f57c128b53336b8fd28b2fbe1004e12689cc8828aeca1747c1f33ed32a*/