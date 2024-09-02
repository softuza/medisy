import{a as U}from"./chunk-7W4DPCX5.js";import{d as Q,e as n,g as J,i as K,j as W}from"./chunk-OKHT2ZMW.js";import{a as T}from"./chunk-I3W7CTPV.js";import{b as X,f as w,g as j,h as q,j as k,k as H}from"./chunk-JDBQ45YP.js";import{j as d,k as G}from"./chunk-53DZ6NLX.js";import{a as z,b as D,d as P,e as L,g as R}from"./chunk-7B3GMYBR.js";import{q as F,r as V,s as $}from"./chunk-NKLFXX3X.js";import{d as h,f as M,g as C,l as g,n as N,q as b,r as O,u as v}from"./chunk-QZRJHJEV.js";import{Y as B}from"./chunk-4QPQ7IQ3.js";import{a as I,d as A}from"./chunk-WMCOMOML.js";import{la as Y}from"./chunk-H2OL5IOU.js";import{Ia as _,Jb as l,Kb as c,Lb as S,Wb as f,bb as p,ja as s,mb as y,mc as E,na as m,nc as u,yb as a}from"./chunk-6EDHPT3A.js";var Z=(()=>{let o=class o extends w{constructor(){let e=s(z);super(e),this.mlabService=s(T),this.fb=s(O),this.data=s(D),this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]});let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({specimenTypeId:[i.testTypeSpecimenType?.specimenTypeId,[h.required]],note:[i.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=m({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[E([]),y,u],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),c()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),a("formGroup",i.form),p(),a("source",i.specimenTypes),p(2),a("actions",i.actions));},dependencies:[v,g,M,C,N,b,R,L,F,H,j,q,$,V],encapsulation:2});let r=o;return r;})();var Ae=(()=>{let o=class o{constructor(){this.dialog=s(P),this.mlabService=s(T),this.route=s(I),this.dataSource=new J(),this.testTypeId=_.required(),this.card={header:{title:B.specimen_types},menu:G.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("specimenTypeId"),n.string("specimenType.nameEn"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Z,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=m({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[u],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),f("update",function(){return i.get();}),c()()),t&2&&(a("card",i.card),p(),a("dataSource",i.dataSource));},dependencies:[A,Y,W,Q,U],encapsulation:2});let r=o;return r;})();export{Ae as a};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/