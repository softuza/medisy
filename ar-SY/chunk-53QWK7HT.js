import{a as U}from"./chunk-PEAEHABN.js";import{b as Q,c as n,e as J,g as K,h as W}from"./chunk-F33HSYTW.js";import{b as X,f as w,g as j,h as q,j as k,k as H}from"./chunk-INGRYE55.js";import{a as m}from"./chunk-XQ6KMBLS.js";import{a as D,b as P,d as L,e as R,g as F}from"./chunk-HESHWLJQ.js";import{q as B,r as $,s as G}from"./chunk-UC5SOJIH.js";import{d as M,f as C,g,l as N,o as b,r as O,s as v,u as I}from"./chunk-UR5GDBT7.js";import{b as d,c as y}from"./chunk-CRJIWNDX.js";import{a as V}from"./chunk-YJ25L3AZ.js";import{p as A,s as z}from"./chunk-TN5XOKTF.js";import{Ma as Y}from"./chunk-75V32KEJ.js";import{Ia as _,Jb as c,Kb as S,Lb as u,Wb as E,bb as p,ja as s,mb as f,mc as h,na as l,nc as T,yb as a}from"./chunk-JPONW3XL.js";var Z=(()=>{let o=class o extends w{constructor(){let e=s(D);super(e),this.mlabService=s(m),this.fb=s(v),this.data=s(P),this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]});let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({specimenTypeId:[i.testTypeSpecimenType?.specimenTypeId,[M.required]],note:[i.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[h([m]),f,T],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),S()(),u(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),a("formGroup",i.form),p(),a("source",i.specimenTypes),p(2),a("actions",i.actions));},dependencies:[I,N,C,g,b,O,F,R,B,H,j,q,G,$],encapsulation:2});let r=o;return r;})();var Ae=(()=>{let o=class o{constructor(){this.dialog=s(L),this.mlabService=s(m),this.route=s(A),this.dataSource=new J(),this.testTypeId=_.required(),this.card={header:{title:V.specimen_types},menu:y.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("specimenTypeId"),n.string("specimenType.nameEn"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(y.more([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Z,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=l({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[T],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return i.get();}),S()()),t&2&&(a("card",i.card),p(),a("dataSource",i.dataSource));},dependencies:[z,Y,W,Q,U],encapsulation:2});let r=o;return r;})();export{Ae as a};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/