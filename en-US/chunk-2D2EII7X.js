import{a as U}from"./chunk-GS4ZPJQO.js";import{d as Q,e as n,g as J,i as K,j as W}from"./chunk-7EDJIE54.js";import{c as X,g as w,h as j,i as q,k,l as H}from"./chunk-ELQLAKIA.js";import{a as m}from"./chunk-GT4CNZSZ.js";import{a as D,b as P,d as L,e as R,g as F}from"./chunk-E4TEUKJS.js";import{r as B,s as $,t as G}from"./chunk-V4RZZIA4.js";import{d as h,f as C,g,l as N,o as b,r as O,s as v,u as I}from"./chunk-TREJVBUP.js";import{b as d,c as y}from"./chunk-OVLZQTDQ.js";import{a as V}from"./chunk-ZFFSAQ5L.js";import{p as A,s as z}from"./chunk-3XDE5DVI.js";import{Ma as Y}from"./chunk-34DVLRFE.js";import{Ia as _,Kb as c,Lb as S,Mb as u,Xb as E,cb as p,ja as s,na as l,nb as f,nc as M,oc as T,zb as a}from"./chunk-43EFT4VW.js";var Z=(()=>{let i=class i extends w{constructor(){super(s(D)),this.mlabService=s(m),this.fb=s(v),this.data=s(P),this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]});let e=this.fb,t=this.data;this.form=e.group({specimenTypeId:[t.testTypeSpecimenType?.specimenTypeId,[h.required]],note:[t.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=l({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([m]),f,T],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(),a("source",o.specimenTypes),p(2),a("actions",o.actions));},dependencies:[I,N,C,g,b,O,F,R,B,H,j,q,G,$],encapsulation:2});let r=i;return r;})();var Ae=(()=>{let i=class i{constructor(){this.dialog=s(L),this.mlabService=s(m),this.route=s(A),this.dataSource=new J(),this.testTypeId=_.required(),this.card={header:{title:V.specimen_types},menu:y.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("specimenTypeId"),n.string("specimenType.nameEn"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(y.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Z,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=l({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return o.get();}),S()()),t&2&&(a("card",o.card),p(),a("dataSource",o.dataSource));},dependencies:[z,Y,W,Q,U],encapsulation:2});let r=i;return r;})();export{Ae as a};/**i18n:88fff6855ba28d4c8b98104a25523cf265e1264225a6f202fed27e9c25681d21*/