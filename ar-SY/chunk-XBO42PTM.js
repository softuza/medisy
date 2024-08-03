import{a as U}from"./chunk-PLILYGN2.js";import{a as m,b as J,d as K,e as W,j as Z,k as x}from"./chunk-WSKSU7P3.js";import{a as y}from"./chunk-6VGSXMTA.js";import{e as X,f as w,g as q,i as k,j as H,k as Q}from"./chunk-76IND4GV.js";import{h as T,j}from"./chunk-TIEHGEOE.js";import{a as z,b as P,d as L,e as R,g as F}from"./chunk-QCMAXDKX.js";import{t as V,u as $,w as G}from"./chunk-W6VXAIY6.js";import{c as B}from"./chunk-AR6ZPEMB.js";import{d as C,f as h,g,l as v,n as I,q as N,r as b,u as O}from"./chunk-H6LOKDLY.js";import{a as D,e as A}from"./chunk-7JY5LSGA.js";import{la as Y}from"./chunk-TSWXIYWJ.js";import{Fa as f,Jb as l,Kb as c,Lb as S,Wb as E,bb as p,cb as r,na as d,nc as M,oc as u,qb as _,zb as s}from"./chunk-7IDM2VXI.js";var ee=(()=>{let o=class o extends X{constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[a.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[a.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(y),r(b),r(z),r(P));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),_,u],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),c()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(),s("source",i.specimenTypes),p(2),s("actions",i.actions));},dependencies:[O,v,h,g,I,N,F,R,V,H,w,q,G,$],encapsulation:2});let n=o;return n;})();var Re=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new K(),this.testTypeId=f.required(),this.card={title:B.specimen_types,menu:j.more([T.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("specimenTypeId"),m.string("specimenType.nameEn"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),J.menu([T.edit(a=>this.openSaveComponent(a)),T.delete(a=>this.openTestTypeSpecimenTypeDeleteComponent(a))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ee,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:Q.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(W(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r(L),r(y),r(D));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[u],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return i.get();}),c()()),t&2&&(s("card",i.card),p(),s("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[A,Y,x,Z,U],encapsulation:2});let n=o;return n;})();export{Re as a};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/