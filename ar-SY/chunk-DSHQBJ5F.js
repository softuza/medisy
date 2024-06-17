import{a as X}from"./chunk-IBOYA37S.js";import{a as m,b as K,d as W,i as Z,j as x}from"./chunk-3B23JTYM.js";import{a as y}from"./chunk-E4K3ZOYS.js";import{e as w,f as q,g as k,i as H,j as Q,k as J}from"./chunk-RH2FRFXL.js";import{h as T,j as U}from"./chunk-DUMC2SQ2.js";import{a as z,b as P,d as L,e as R,g as F}from"./chunk-XLS5ADJU.js";import{o as $,q as G,s as j}from"./chunk-OSSLUWKJ.js";import{c as B}from"./chunk-2ISX24IV.js";import{c as V}from"./chunk-J4XZ2BGQ.js";import{d as C,f as h,g,k as v,m as I,p as b,q as N,t as O}from"./chunk-D2M35WMU.js";import{a as D,e as A}from"./chunk-HMSPALCE.js";import{ka as Y}from"./chunk-XX5UC3BF.js";import{Fa as f,Ib as l,Jb as c,Kb as S,Vb as E,ab as p,bb as r,kc as M,lc as u,na as d,ob as _,yb as s}from"./chunk-MR5DLTC3.js";var ee=(()=>{let o=class o extends w{constructor(e,t,i,a){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=a,this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]}),this.form=t.group({specimenTypeId:[a.testTypeSpecimenType?.specimenTypeId,[C.required]],note:[a.testTypeSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(r(y),r(N),r(z),r(P));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[M([]),_,u],decls:6,vars:6,consts:()=>{let e;e="\u0627\u0644\u0646\u0645\u0637";let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,i){t&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),c()(),S(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),s("formGroup",i.form),p(),s("source",i.specimenTypes),p(2),s("actions",i.actions));},dependencies:[O,v,h,g,I,b,F,R,$,Q,q,k,j,G],encapsulation:2});let n=o;return n;})();var Fe=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.dataSource=new W(),this.testTypeId=f.required(),this.card={title:V.specimen_types,menu:U.more([T.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(m.uuid("id"),m.uuid("specimenTypeId"),m.string("specimenType.nameEn"),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),K.menu([T.edit(a=>this.openSaveComponent(a)),T.delete(a=>this.openTestTypeSpecimenTypeDeleteComponent(a))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(ee,{data:{testTypeId:this.testTypeId(),testTypeSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(H,{data:J.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testTypeId(),this.dataSource.getQuery()).pipe(B(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(r(L),r(y),r(D));},o.ɵcmp=d({type:o,selectors:[["sz-medisy-laboratory-test-type-specimen-types"]],inputs:{testTypeId:[1,"testTypeId"]},standalone:!0,features:[u],decls:2,vars:4,consts:[[3,"card"],["content","",3,"update","stateEnabled","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),E("update",function(){return i.get();}),c()()),t&2&&(s("card",i.card),p(),s("stateEnabled",!0)("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[A,Y,x,Z,X],encapsulation:2});let n=o;return n;})();export{Fe as a};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/