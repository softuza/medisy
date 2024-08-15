import{a as U}from"./chunk-YQNZ4DDK.js";import{a as n,c as J,e as K,j as W,k as Z}from"./chunk-UXXOJBMJ.js";import{a as y}from"./chunk-GXG5EPI4.js";import{b as X,f as w,g as q,h as k,j as H,k as Q}from"./chunk-FNEDC6UP.js";import{h as m,j}from"./chunk-L65U5OHB.js";import{a as z,b as P,d as L,e as R,g as B}from"./chunk-AEJUXZCG.js";import{q as V,r as $,s as G}from"./chunk-LANNBXGX.js";import{d as C,f as h,g as v,l as g,n as I,q as N,r as O,u as b}from"./chunk-VXNH5PTX.js";import{Y as F}from"./chunk-XPJ4P4RZ.js";import{a as A,e as D}from"./chunk-DNH4OZS2.js";import{la as Y}from"./chunk-4B53IFHW.js";import{Fa as _,Kb as c,Lb as S,Mb as u,Xb as E,bb as p,cb as r,na as l,oc as M,pc as T,qb as f,zb as s}from"./chunk-G33TNFCW.js";var x=(()=>{let o=class o extends w{constructor(e,t,i,d){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=d,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[d.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[d.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(y),r(O),r(z),r(P));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),f,T],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(),s("source",i.specimenTypes),p(2),s("actions",i.actions));},dependencies:[b,g,h,v,I,N,B,R,V,Q,q,k,G,$],encapsulation:2});let a=o;return a;})();var Le=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new J(),this.testTypeId=_.required(),this.card={header:{title:F.specimen_types},menu:j.more([m.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("specimenTypeId"),n.string("specimenType.nameEn"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(x,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:X.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r(L),r(y),r(A));},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return i.get();}),S()()),t&2&&(s("card",i.card),p(),s("dataSource",i.dataSource));},dependencies:[D,Y,Z,W,U],encapsulation:2});let a=o;return a;})();export{Le as a};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/