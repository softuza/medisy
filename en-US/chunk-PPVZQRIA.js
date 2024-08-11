import{a as X}from"./chunk-44JBQQHQ.js";import{a as m,b as K,d as W,e as Z,j as x,k as ee}from"./chunk-EBBH4FQM.js";import{a as y}from"./chunk-OZ7CS7NR.js";import{e as w,f as q,g as k,i as H,j as Q,k as J}from"./chunk-JIVZM3NB.js";import{e as j,h as T,j as U}from"./chunk-RXZ6CL54.js";import{a as A,b as P,d as L,e as R,g as F}from"./chunk-GOK5DQ4J.js";import{q as V,r as $,t as G}from"./chunk-NXCSCXM6.js";import{c as B}from"./chunk-ASLHFDBF.js";import{d as C,f as h,g,l as v,n as I,q as N,r as b,u as O}from"./chunk-X7FJYQVI.js";import{a as D,e as z}from"./chunk-7SMEEYI6.js";import{la as Y}from"./chunk-FJQ67ICA.js";import{Fa as f,Kb as l,Lb as c,Mb as S,Xb as E,bb as p,cb as r,na as d,oc as M,pc as u,qb as _,zb as s}from"./chunk-MI4BGEGZ.js";var te=(()=>{let o=class o extends w{constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[a.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[a.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(y),r(b),r(A),r(P));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),_,u],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),c()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(),s("source",i.specimenTypes),p(2),s("actions",i.actions));},dependencies:[O,v,h,g,I,N,F,R,V,Q,q,k,G,$],encapsulation:2});let n=o;return n;})();var Fe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new W(),this.testTypeId=f.required(),this.card={header:{title:B.specimen_types},menu:U.more([T.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("specimenTypeId"),m.string("specimenType.nameEn"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),K.menu([T.edit(a=>this.openSaveComponent(a)),j.divider(),T.delete(a=>this.openTestTypeSpecimenTypeDeleteComponent(a))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r(L),r(y),r(D));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[u],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return i.get();}),c()()),t&2&&(s("card",i.card),p(),s("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[z,Y,ee,x,X],encapsulation:2});let n=o;return n;})();export{Fe as a};/**i18n:432eaf37c61bb291e8f30b0de1096d88a542ed89f4aba48a7a5a6c27385da906*/