import{a as H}from"./chunk-5ALZ3CD4.js";import{d as Q,e as n,g as J,i as K,j as W}from"./chunk-6UJQEEOG.js";import{c as U,g as X,h as w,i as j,k,l as q}from"./chunk-466VJTKM.js";import{a as m}from"./chunk-3CHAK4ER.js";import{a as A,b as D,d as P,e as L,g as R}from"./chunk-KRRL7IVD.js";import{o as V,p as B,q as $,s as G}from"./chunk-LTGHULWB.js";import{d as h,f as M,g as C,l as g,o as b,r as N,s as O,u as v}from"./chunk-74M55ZSL.js";import{b as d,c as y}from"./chunk-KA6PA4V4.js";import{c as Y}from"./chunk-ULSP7SQP.js";import{p as I,s as z}from"./chunk-WQ25OTMI.js";import{Ma as F}from"./chunk-ELYMBAIC.js";import{Jb as c,Kb as S,Lb as u,Wb as _,bb as p,ja as s,mb as f,mc as E,na as l,nc as T,yb as a}from"./chunk-MF5XXDEZ.js";var Z=(()=>{let i=class i extends X{constructor(){super(s(A)),this.mlabService=s(m),this.fb=s(O),this.data=s(D),this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]});let e=this.fb,t=this.data;this.form=e.group({specimenTypeId:[t.testTypeSpecimenType?.specimenTypeId,[h.required]],note:[t.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=l({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[E([m]),f,T],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(u(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(),a("source",o.specimenTypes),p(2),a("actions",o.actions));},dependencies:[v,g,M,C,b,N,R,L,V,q,w,j,G,$,B],encapsulation:2});let r=i;return r;})();var De=(()=>{let i=class i{constructor(){this.dialog=s(P),this.mlabService=s(m),this.route=s(I),this.testType=this.route.snapshot.data.testType,this.dataSource=new J(),this.card={header:{title:Y.specimen_types},menu:y.default([d.add(this.openSaveComponent.bind(this))])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("specimenTypeId"),n.string("specimenType.nameEn"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(y.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Z,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:U.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testType.id,this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=l({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],standalone:!0,features:[T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),_("update",function(){return o.get();}),S()()),t&2&&(a("card",o.card),p(),a("dataSource",o.dataSource));},dependencies:[z,F,W,Q,H],encapsulation:2});let r=i;return r;})();export{De as a};/**i18n:d3e3083c250d91c646b86472e18f8369ebb747da11392505520eb4a69fa49de0*/