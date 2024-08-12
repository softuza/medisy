import{a as X}from"./chunk-5R2LMLY7.js";import{a as p,b as K,d as W,e as Z,j as x,k as ee}from"./chunk-YYUIO3M5.js";import{a as T}from"./chunk-DYA3WDOZ.js";import{b as w,f as q,g as k,h as H,j as Q,k as J}from"./chunk-K46Y6NGM.js";import{e as U,h as f,j}from"./chunk-KBWUA6E4.js";import{a as z,b as A,d as P,e as R,g as L}from"./chunk-NGJJVZ6X.js";import{q as V,r as Y,s as $}from"./chunk-COX3WBO6.js";import{c as B}from"./chunk-TUR2GSJY.js";import{d as C,f as h,g,l as v,n as I,q as O,r as N,u as b}from"./chunk-GIW6HK33.js";import{a as G,e as D}from"./chunk-EGDCC6ZL.js";import{la as F}from"./chunk-PE6NSH2D.js";import{Fa as _,Kb as l,Lb as u,Mb as c,Xb as M,bb as m,cb as r,na as d,oc as E,pc as S,qb as y,zb as s}from"./chunk-3KG4VHVC.js";var te=(()=>{let o=class o extends q{constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[a.testGroupSpecimenType?.specimenTypeId,[C.required]],note:[a.testGroupSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testGroupSpecimenType?this.save(this.mlabService.testGroups.specimenTypes.update(this.data.testGroupId,this.data.testGroupSpecimenType?.id,this.form.value)):this.save(this.mlabService.testGroups.specimenTypes.create(this.data.testGroupId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(T),r(N),r(z),r(A));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[E([]),y,S],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),u()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),m(2),s("formGroup",i.form),m(),s("source",i.specimenTypes),m(2),s("actions",i.actions));},dependencies:[b,v,h,g,I,O,L,R,V,J,k,H,$,Y],encapsulation:2});let n=o;return n;})();var Le=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new W(),this.testGroupId=_.required(),this.card={header:{title:B.specimen_types},menu:j.more([f.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(p.uuid("id"),p.uuid("specimenTypeId"),p.uuid("testTypeId"),p.string("specimenType.nameEn"),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),K.menu([f.edit(a=>this.openSaveComponent(a)),U.divider(),f.delete(a=>this.openTestTypeSpecimenTypeDeleteComponent(a))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testGroupId:this.testGroupId(),testGroupSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(Q,{data:w.delete(this.mlabService.testGroups.specimenTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.specimenTypes.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r(P),r(T),r(G));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-group-specimen-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[S],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),M("update",function(){return i.get();}),u()()),t&2&&(s("card",i.card),m(),s("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[D,F,ee,x,X],encapsulation:2});let n=o;return n;})();export{Le as a};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/